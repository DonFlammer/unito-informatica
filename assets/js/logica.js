// Strumenti interattivi delle lezioni di logica di Fondamenti dell'Informatica (libro, parte 2, cap. 1).
// Il compilatore (strumenti/lezioni.mjs) scrive <figure class="widget" data-widget="logica" data-modo="…">; qui si
// disegna lo strumento. Modi: «tavola» (la tavola di verità di una formula, con una colonna per ogni sottoformula e il
// giudizio tautologia, contraddizione o né l'una né l'altra; chiave data-formula), «equivalenza» (le tavole di due
// formule affiancate, con le righe in cui differiscono; chiavi data-a e data-b), «argomento» (premesse e conclusione:
// le righe con tutte le premesse vere, e l'eventuale controesempio; chiavi data-premesse, separate da «;», e
// data-conclusione). Le formule si scrivono con ¬ ∧ ∨ ⊕ → ↔ oppure con la tastiera: ! ~ & | xor -> <->.
// Solo nodi creati con il DOM, nessun HTML scritto come testo.
(() => {
  'use strict';
  const el = (tag, attr = {}, ...figli) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attr)) {
      if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v; else e.setAttribute(k, v);
    }
    figli.forEach(f => e.append(f));
    return e;
  };

  /* ---------- le formule: lettura, scrittura, calcolo ---------- */

  const MAX_LETTERE = 5;
  const SIMBOLO = { not: '¬', and: '∧', or: '∨', xor: '⊕', imp: '→', iff: '↔' };
  // dal connettivo più debole al più forte: ↔, poi →, poi ∨ e ⊕, poi ∧, poi ¬
  const LIVELLI = [['iff'], ['imp'], ['or', 'xor'], ['and']];

  function pezzi(testo) {
    const out = [];
    let i = 0;
    const s = testo.replace(/\s+/g, ' ');
    const prendi = (t, n) => { out.push(t); i += n; };
    while (i < s.length) {
      const c = s[i], resto = s.slice(i);
      if (c === ' ') { i++; continue; }
      if (c === '(' || c === ')') { prendi(c, 1); continue; }
      let m;
      if ((m = resto.match(/^(<->|<=>|↔|⇔|≡)/))) { prendi('iff', m[0].length); continue; }
      if ((m = resto.match(/^(->|=>|→|⇒)/))) { prendi('imp', m[0].length); continue; }
      if ((m = resto.match(/^(&&|&|∧|\*|·)/))) { prendi('and', m[0].length); continue; }
      if ((m = resto.match(/^(\|\||\||∨|\+)/))) { prendi('or', m[0].length); continue; }
      if ((m = resto.match(/^(⊕|\^)/))) { prendi('xor', m[0].length); continue; }
      if ((m = resto.match(/^(!|~|¬)/))) { prendi('not', m[0].length); continue; }
      if ((m = resto.match(/^(xor|and|or|not)(?![a-z0-9])/i))) { prendi(m[1].toLowerCase(), m[0].length); continue; }
      if ((m = resto.match(/^[a-zA-Z][0-9]*/))) { out.push({ lettera: m[0] }); i += m[0].length; continue; }
      throw new Error(`non so leggere «${c}»`);
    }
    return out;
  }

  function leggi(testo) {
    if (!testo || !testo.trim()) throw new Error('scrivi una formula');
    const t = pezzi(testo);
    let k = 0;
    const vedi = () => t[k];
    function livello(n) {
      if (n === LIVELLI.length) return unaria();
      const sinistra = livello(n + 1);
      const op = vedi();
      if (typeof op === 'string' && LIVELLI[n].includes(op)) {
        k++;
        // → si legge da destra (p → q → r è p → (q → r)), gli altri da sinistra
        if (op === 'imp') return { op, a: sinistra, b: livello(n) };
        let nodo = { op, a: sinistra, b: livello(n + 1) };
        while (typeof vedi() === 'string' && LIVELLI[n].includes(vedi())) {
          const o = t[k++];
          nodo = { op: o, a: nodo, b: livello(n + 1) };
        }
        return nodo;
      }
      return sinistra;
    }
    function unaria() {
      const x = vedi();
      if (x === undefined) throw new Error('la formula finisce troppo presto');
      if (x === 'not') { k++; return { op: 'not', a: unaria() }; }
      if (x === '(') {
        k++;
        const dentro = livello(0);
        if (vedi() !== ')') throw new Error('manca una parentesi chiusa');
        k++;
        return dentro;
      }
      if (typeof x === 'object') { k++; return { op: 'var', n: x.lettera }; }
      if (x === ')') throw new Error('c\'è una parentesi chiusa di troppo, o manca qualcosa prima');
      throw new Error(`manca una lettera prima di «${SIMBOLO[x]}»`);
    }
    const albero = livello(0);
    if (k < t.length) {
      const x = t[k];
      throw new Error(x === ')' ? 'c\'è una parentesi chiusa di troppo' : 'manca un connettivo tra due pezzi');
    }
    return albero;
  }

  // scrittura con le parentesi intorno a ogni pezzo composto: è il modo più sicuro di leggerla
  function scrivi(f, fuori = true) {
    if (f.op === 'var') return f.n;
    if (f.op === 'not') return SIMBOLO.not + scrivi(f.a, false);
    const s = `${scrivi(f.a, false)} ${SIMBOLO[f.op]} ${scrivi(f.b, false)}`;
    return fuori ? s : `(${s})`;
  }
  function lettere(f, acc = new Set()) {
    if (f.op === 'var') acc.add(f.n);
    else { lettere(f.a, acc); if (f.b) lettere(f.b, acc); }
    return acc;
  }
  function sottoformule(f, acc = []) {
    if (f.op === 'var') return acc;
    sottoformule(f.a, acc);
    if (f.b) sottoformule(f.b, acc);
    const s = scrivi(f);
    if (!acc.some(x => x.testo === s)) acc.push({ testo: s, f });
    return acc;
  }
  function vale(f, v) {
    switch (f.op) {
      case 'var': return v[f.n];
      case 'not': return !vale(f.a, v);
      case 'and': return vale(f.a, v) && vale(f.b, v);
      case 'or': return vale(f.a, v) || vale(f.b, v);
      case 'xor': return vale(f.a, v) !== vale(f.b, v);
      case 'imp': return !vale(f.a, v) || vale(f.b, v);
      default: return vale(f.a, v) === vale(f.b, v);
    }
  }
  // righe nell'ordine del libro: la prima lettera cambia più lentamente, e si parte da tutte vere
  function righe(nomi) {
    const n = nomi.length, out = [];
    for (let i = 0; i < 2 ** n; i++) {
      const v = {};
      nomi.forEach((x, j) => { v[x] = ((i >> (n - 1 - j)) & 1) === 0; });
      out.push(v);
    }
    return out;
  }
  const ordina = insieme => [...insieme].sort((a, b) => a.localeCompare(b, 'it'));
  const VF = b => (b ? 'V' : 'F');
  const descrivi = (nomi, v) => nomi.map(x => `${x} = ${VF(v[x])}`).join(', ');

  /* ---------- pezzi dell'interfaccia ---------- */

  function tastiera(campi) {
    let ultimo = campi[0];
    campi.forEach(c => c.addEventListener('focus', () => { ultimo = c; }));
    const riga = el('div', { class: 'w-chips lg-tasti', role: 'group', 'aria-label': 'Simboli' });
    for (const s of ['¬', '∧', '∨', '⊕', '→', '↔', '(', ')']) {
      const b = el('button', { type: 'button', class: 'btn lg-tasto', text: s, 'aria-label': `scrivi ${s}` });
      b.addEventListener('click', () => {
        const c = ultimo, a = c.selectionStart ?? c.value.length, z = c.selectionEnd ?? c.value.length;
        const pezzo = /[()¬]/.test(s) ? s : ` ${s} `;
        c.value = c.value.slice(0, a) + pezzo + c.value.slice(z);
        c.focus();
        c.setSelectionRange(a + pezzo.length, a + pezzo.length);
        c.dispatchEvent(new Event('input'));
      });
      riga.append(b);
    }
    return riga;
  }
  function campo(etichetta, valore, largo = true) {
    const input = el('input', { type: 'text', class: largo ? 'w-largo lg-formula' : 'lg-formula', spellcheck: 'false',
      autocomplete: 'off', autocapitalize: 'off' });
    input.value = valore || '';
    const id = `lg-${Math.random().toString(36).slice(2, 9)}`;
    input.id = id;
    return { box: el('div', { class: 'w-campo' }, el('label', { for: id, text: etichetta }), input), input };
  }
  const aiuto = () => el('p', { class: 'w-aiuto', text: 'Scrivi con i tasti qui sopra o con la tastiera: ! o ~ per ¬, & per ∧, | per ∨, xor per ⊕, -> per →, <-> per ↔. Le lettere sono le proposizioni (p, q, r…). Al massimo 5 lettere.' });
  function cella(b, classe = '') {
    return el('td', { class: `${b ? 'lg-v' : 'lg-f'}${classe ? ' ' + classe : ''}`, text: VF(b) });
  }
  function testa(nomi, colonne) {
    return el('thead', {}, el('tr', {}, ...nomi.map(x => el('th', { scope: 'col', text: x })),
      ...colonne.map(c => el('th', { scope: 'col', class: c.classe || '', text: c.testo }))));
  }
  const scatola = () => el('div', { class: 'cd-scorre lg-scorre' });
  const errore = (dove, msg) => dove.replaceChildren(el('p', { class: 'w-errore', text: `Non riesco a leggere la formula: ${msg}.` }));

  /* ---------- modo «tavola» ---------- */

  function tavola(fig) {
    const c = campo('Formula', fig.dataset.formula || 'p ∧ ¬q');
    const sotto = scatola();
    const esito = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(tastiera([c.input]), el('div', { class: 'w-riga' }, c.box), aiuto(), sotto, esito);
    function disegna() {
      let f;
      try { f = leggi(c.input.value); } catch (e) { sotto.replaceChildren(); errore(esito, e.message); return; }
      const nomi = ordina(lettere(f));
      if (nomi.length > MAX_LETTERE) { sotto.replaceChildren(); esito.replaceChildren(el('p', { class: 'w-errore', text: `Ci sono ${nomi.length} lettere: la tavola avrebbe ${2 ** nomi.length} righe. Prova con al massimo ${MAX_LETTERE} lettere.` })); return; }
      const parti = sottoformule(f);
      const tutte = righe(nomi);
      const corpo = el('tbody');
      let vere = 0;
      for (const v of tutte) {
        const finale = vale(f, v);
        if (finale) vere++;
        corpo.append(el('tr', {}, ...nomi.map(x => cella(v[x], 'lg-lettera')),
          ...parti.map((p, j) => cella(vale(p.f, v), j === parti.length - 1 ? 'lg-finale' : ''))));
      }
      const colonne = parti.map((p, j) => ({ testo: p.testo, classe: j === parti.length - 1 ? 'lg-finale' : '' }));
      sotto.replaceChildren(el('table', { class: 'cd-tabella lg-tabella' }, testa(nomi, colonne), corpo));
      const n = tutte.length;
      const giudizio = vere === n ? 'È una tautologia: è vera in tutte le righe.'
        : vere === 0 ? 'È una contraddizione: è falsa in tutte le righe.'
          : 'Non è né una tautologia né una contraddizione: dipende dai valori delle lettere.';
      esito.replaceChildren(
        el('p', {}, el('b', { text: 'Come la leggo: ' }), document.createTextNode(scrivi(f))),
        el('p', { text: `${nomi.length} ${nomi.length === 1 ? 'lettera' : 'lettere'}, quindi ${n} righe. La formula è vera in ${vere} ${vere === 1 ? 'riga' : 'righe'} su ${n}.` }),
        el('p', {}, el('b', { text: giudizio })));
    }
    c.input.addEventListener('input', disegna);
    disegna();
  }

  /* ---------- modo «equivalenza» ---------- */

  function equivalenza(fig) {
    const a = campo('Prima formula', fig.dataset.a || '¬(p ∧ q)');
    const b = campo('Seconda formula', fig.dataset.b || '¬p ∨ ¬q');
    const sotto = scatola();
    const esito = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(tastiera([a.input, b.input]), el('div', { class: 'w-riga' }, a.box, b.box), aiuto(), sotto, esito);
    function disegna() {
      let fa, fb;
      try { fa = leggi(a.input.value); } catch (e) { sotto.replaceChildren(); errore(esito, `la prima: ${e.message}`); return; }
      try { fb = leggi(b.input.value); } catch (e) { sotto.replaceChildren(); errore(esito, `la seconda: ${e.message}`); return; }
      const nomi = ordina(new Set([...lettere(fa), ...lettere(fb)]));
      if (nomi.length > MAX_LETTERE) { sotto.replaceChildren(); esito.replaceChildren(el('p', { class: 'w-errore', text: `Troppe lettere: al massimo ${MAX_LETTERE}.` })); return; }
      const corpo = el('tbody');
      const diverse = [];
      for (const v of righe(nomi)) {
        const x = vale(fa, v), y = vale(fb, v);
        if (x !== y) diverse.push({ v, x, y });
        corpo.append(el('tr', { class: x === y ? '' : 'row-bad' }, ...nomi.map(n => cella(v[n], 'lg-lettera')), cella(x, 'lg-finale'), cella(y, 'lg-finale')));
      }
      sotto.replaceChildren(el('table', { class: 'cd-tabella lg-tabella' }, testa(nomi, [{ testo: scrivi(fa), classe: 'lg-finale' }, { testo: scrivi(fb), classe: 'lg-finale' }]), corpo));
      if (!diverse.length) {
        esito.replaceChildren(el('p', {}, el('b', { text: 'Sono equivalenti: ' }), document.createTextNode(`in tutte le ${2 ** nomi.length} righe hanno lo stesso valore.`)));
      } else {
        const d = diverse[0];
        esito.replaceChildren(
          el('p', {}, el('b', { text: 'Non sono equivalenti: ' }), document.createTextNode(`hanno valori diversi in ${diverse.length} ${diverse.length === 1 ? 'riga' : 'righe'}, segnate in rosso.`)),
          el('p', { text: `Per esempio con ${descrivi(nomi, d.v)} la prima vale ${VF(d.x)} e la seconda ${VF(d.y)}.` }));
      }
    }
    a.input.addEventListener('input', disegna);
    b.input.addEventListener('input', disegna);
    disegna();
  }

  /* ---------- modo «argomento» ---------- */

  function argomento(fig) {
    const p = campo('Premesse, separate da ;', fig.dataset.premesse || 'p → q; p');
    const c = campo('Conclusione', fig.dataset.conclusione || 'q', false);
    const sotto = scatola();
    const esito = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(tastiera([p.input, c.input]), el('div', { class: 'w-riga' }, p.box, c.box), aiuto(), sotto, esito);
    function disegna() {
      let premesse, conc;
      const testi = p.input.value.split(';').map(s => s.trim()).filter(Boolean);
      try {
        if (!testi.length) throw new Error('scrivi almeno una premessa');
        premesse = testi.map((s, j) => { try { return leggi(s); } catch (e) { throw new Error(`premessa ${j + 1}: ${e.message}`); } });
      } catch (e) { sotto.replaceChildren(); errore(esito, e.message); return; }
      try { conc = leggi(c.input.value); } catch (e) { sotto.replaceChildren(); errore(esito, `la conclusione: ${e.message}`); return; }
      const tutteLettere = new Set(lettere(conc));
      premesse.forEach(f => lettere(f, tutteLettere));
      const nomi = ordina(tutteLettere);
      if (nomi.length > MAX_LETTERE) { sotto.replaceChildren(); esito.replaceChildren(el('p', { class: 'w-errore', text: `Troppe lettere: al massimo ${MAX_LETTERE}.` })); return; }
      const corpo = el('tbody');
      let critiche = 0;
      const contro = [];
      for (const v of righe(nomi)) {
        const vp = premesse.map(f => vale(f, v));
        const tutte = vp.every(Boolean), vc = vale(conc, v);
        if (tutte) { critiche++; if (!vc) contro.push(v); }
        corpo.append(el('tr', { class: tutte ? (vc ? 'row-ok' : 'row-bad') : '' },
          ...nomi.map(n => cella(v[n], 'lg-lettera')), ...vp.map(x => cella(x)), cella(vc, 'lg-finale')));
      }
      const colonne = premesse.map(f => ({ testo: scrivi(f) })).concat([{ testo: `quindi ${scrivi(conc)}`, classe: 'lg-finale' }]);
      sotto.replaceChildren(el('table', { class: 'cd-tabella lg-tabella' }, testa(nomi, colonne), corpo));
      const frasi = [];
      if (!critiche) {
        frasi.push(el('p', {}, el('b', { text: 'È valida, ma a vuoto: ' }), document.createTextNode('nessuna riga rende vere tutte le premesse insieme.')));
      } else if (!contro.length) {
        frasi.push(el('p', {}, el('b', { text: 'È valida: ' }), document.createTextNode(`le righe con tutte le premesse vere sono ${critiche}, in verde, e in tutte la conclusione è vera.`)));
      } else {
        frasi.push(el('p', {}, el('b', { text: 'Non è valida: ' }), document.createTextNode(`in ${contro.length} ${contro.length === 1 ? 'riga' : 'righe'}, in rosso, le premesse sono tutte vere e la conclusione è falsa.`)),
          el('p', { text: `Un controesempio: ${descrivi(nomi, contro[0])}.` }));
      }
      frasi.push(el('p', { class: 'w-nota', text: 'Le righe senza colore hanno almeno una premessa falsa: per decidere se l\'argomentazione è valida non contano.' }));
      esito.replaceChildren(...frasi);
    }
    p.input.addEventListener('input', disegna);
    c.input.addEventListener('input', disegna);
    disegna();
  }

  const MODI = { tavola, equivalenza, argomento };
  document.querySelectorAll('figure.widget[data-widget="logica"]').forEach(fig => {
    const carica = fig.querySelector('.widget-carica');
    if (carica) carica.remove();
    (MODI[fig.dataset.modo] || tavola)(fig);
  });
})();
