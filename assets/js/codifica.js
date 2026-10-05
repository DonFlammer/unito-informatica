// Strumenti interattivi della lezione 02 di Fondamenti dell'Informatica: testo, colori, suoni e numeri scritti in bit.
// Il compilatore (strumenti/lezioni.mjs) scrive <figure class="widget" data-widget="codifica" data-modo="…">; qui si disegna
// lo strumento. Modi: «testo» (punti di codice Unicode e byte di UTF-8 di una parola), «colori» (rosso, verde e blu di un
// pixel), «suono» (un'onda, i suoi campioni e il suono ricostruito, più il conto dei byte), «binario» (bit da cambiare con
// un clic, con il valore di ogni posizione, anche dopo la virgola), «divisioni» (dalla base 10 alla base 2 con le divisioni
// per 2), «somma» (somma in colonna di due numeri in binario, di solito 8 bit, con i riporti e l'overflow).
// Per le lezioni 03 e 04: «interi» (lo stesso byte senza segno, in complemento a 2 e in eccesso, con cambia segno, +1 e −1),
// «somma» con «complemento: si» e «n: 4» (somma con segno e overflow con la regola del segno), «virgola» (il formato a 8 bit
// del libro: decodifica dai bit e codifica da un numero, con il troncamento), «parita» (bit di parità ed errori simulati),
// «hamming» (il codice a 6 bit del libro, distanze e simbolo più vicino).
// I modi hanno anche i nomi inglesi (text, colours, sound, binary, divisions, addition, integers, floating, parity) per le pagine del sito in inglese.
// Solo nodi creati con il DOM, nessun HTML scritto come testo.
(() => {
  'use strict';
  const en = (document.documentElement.lang || '').startsWith('en');
  const t = (it, eng) => (en ? eng : it);
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attr = {}, ...figli) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attr)) {
      if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v; else e.setAttribute(k, v);
    }
    figli.forEach(f => e.append(f));
    return e;
  };
  const sv = (tag, attr = {}) => {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attr)) e.setAttribute(k, v);
    return e;
  };
  const num = n => n.toLocaleString(en ? 'en-GB' : 'it-IT', { maximumFractionDigits: 6 });
  const mega = byte => num(byte < 1e7 ? Math.round(byte / 1e5) / 10 : Math.round(byte / 1e6));   // MB, con un decimale sotto i 10
  const campo = (etichetta, controllo) => el('div', { class: 'w-campo' }, el('label', { text: etichetta }), controllo);
  const dato = (fig, ...nomi) => { for (const n of nomi) if (fig.dataset[n] !== undefined) return fig.dataset[n]; return undefined; };
  const bin = (v, n) => v.toString(2).padStart(n, '0');
  // come le tabelle della pagina (lezione.js): se la tabella non entra nel riquadro prende la classe cd-stretta, che
  // nasconde le colonne meno importanti; si ricontrolla quando cambia la larghezza
  function stringi(contenitore) {
    const adatta = () => {
      const tab = contenitore.firstElementChild;
      if (!tab) return;
      tab.classList.remove('cd-stretta');
      if (contenitore.scrollWidth > contenitore.clientWidth + 1) tab.classList.add('cd-stretta');
    };
    let larghezza = -1;
    if ('ResizeObserver' in window) new ResizeObserver(voci => {
      const w = Math.round(voci[0].contentRect.width);
      if (w !== larghezza) { larghezza = w; adatta(); }
    }).observe(contenitore);
    if (document.fonts) document.fonts.ready.then(adatta);      // con i caratteri definitivi le misure cambiano
    return adatta;
  }
  const hex2 = v => v.toString(16).toUpperCase().padStart(2, '0');

  /* ---------- testo: Unicode e UTF-8 ---------- */

  // byte di UTF-8 di un punto di codice, con la parte fissa di ogni byte (0, 110, 1110, 11110 nel primo, 10 negli altri)
  function utf8(cp) {
    if (cp >= 0xD800 && cp <= 0xDFFF) cp = 0xFFFD;   // metà di una coppia di surrogati: non è un simbolo
    if (cp < 0x80) return [[cp, 1]];
    if (cp < 0x800) return [[0xC0 | (cp >> 6), 3], [0x80 | (cp & 63), 2]];
    if (cp < 0x10000) return [[0xE0 | (cp >> 12), 4], [0x80 | ((cp >> 6) & 63), 2], [0x80 | (cp & 63), 2]];
    return [[0xF0 | (cp >> 18), 5], [0x80 | ((cp >> 12) & 63), 2], [0x80 | ((cp >> 6) & 63), 2], [0x80 | (cp & 63), 2]];
  }
  const nomeSimbolo = (ch, cp) => (cp === 32 ? t('spazio', 'space') : cp < 32 || cp === 127 ? t('comando', 'control') : ch);

  function testo(fig) {
    const ingresso = el('input', { type: 'text', class: 'w-largo', maxlength: '24', spellcheck: 'false', autocomplete: 'off',
      value: dato(fig, 'testo', 'text') || 'Ciao, è 5€!', 'aria-label': t('testo da scrivere in UTF-8', 'text to encode in UTF-8') });
    const aiuto = el('p', { class: 'w-aiuto', text: t('Nell\'ultima colonna le parti fisse dello schema di UTF-8 sono sbiadite: gli altri sono i bit del punto di codice.',
      'In the last column the fixed parts of the UTF-8 pattern are faded: the others are the bits of the code point.') });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(el('div', { class: 'w-riga' }, campo(t('Testo', 'Text'), ingresso)), aiuto, tabella, lettura);
    const adatta = stringi(tabella);

    function disegna() {
      const simboli = Array.from(ingresso.value).slice(0, 24);
      let byte = 0, ascii = true;
      const righe = simboli.map(ch => {
        const cp = ch.codePointAt(0);
        const b = utf8(cp);
        byte += b.length;
        if (cp > 127) ascii = false;
        const bit = el('td', { class: 'cd-bit cd-lista' });       // si va a capo solo tra un byte e l'altro
        b.forEach(([v, fissi], k) => {
          const s = bin(v, 8);
          if (k) bit.append(' ');
          bit.append(el('span', { class: 'cd-byte' }, el('span', { class: 'cd-fisso', text: s.slice(0, fissi) }), el('span', { class: 'cd-dati', text: s.slice(fissi) })));
        });
        // le colonne «cd-largo» spariscono quando la tabella non entra, per esempio su un telefono
        return el('tr', {},
          el('td', { class: 'cd-simbolo', text: nomeSimbolo(ch, cp) }),
          el('td', { text: 'U+' + cp.toString(16).toUpperCase().padStart(4, '0') }),
          el('td', { class: 'cd-largo', text: String(cp) }),
          el('td', { class: 'cd-largo', text: String(b.length) }),
          el('td', { class: 'cd-bit cd-largo', text: b.map(([v]) => hex2(v)).join(' ') }),
          bit);
      });
      if (!simboli.length) {
        tabella.replaceChildren();
        lettura.replaceChildren(el('p', { text: t('Scrivi qualcosa nel riquadro.', 'Type something in the box.') }));
        return;
      }
      const testa = el('tr', {}, ...[[t('Simbolo', 'Symbol')], [t('Punto di codice', 'Code point')], [t('In decimale', 'In decimal'), 'cd-largo'],
        [t('Byte', 'Bytes'), 'cd-largo'], [t('UTF-8 in esadecimale', 'UTF-8 in hexadecimal'), 'cd-largo'], [t('UTF-8 in bit', 'UTF-8 in bits')]]
        .map(([x, c]) => el('th', c ? { class: c, text: x } : { text: x })));
      tabella.replaceChildren(el('table', { class: 'cd-tabella' }, el('thead', {}, testa), el('tbody', {}, ...righe)));
      adatta();
      const quanti = simboli.length === 1 ? t('1 simbolo, ', '1 symbol, ') : t(`${simboli.length} simboli, `, `${simboli.length} symbols, `);
      lettura.replaceChildren(
        el('p', {}, quanti, el('b', { text: byte === 1 ? t('1 byte in UTF-8', '1 byte in UTF-8') : t(`${byte} byte in UTF-8`, `${byte} bytes in UTF-8`) }), '.'),
        el('p', { text: ascii ? t('Tutti i simboli stanno in ASCII: in UTF-8 ognuno occupa un byte, uguale a quello di ASCII.', 'Every symbol is in ASCII: in UTF-8 each one takes one byte, the same as in ASCII.')
          : t('Alcuni simboli non stanno in ASCII, che ha solo i punti di codice fino a 127: in UTF-8 occupano più di un byte.', 'Some symbols are not in ASCII, which only has the code points up to 127: in UTF-8 they take more than one byte.') }));
    }
    ingresso.addEventListener('input', disegna);
    disegna();
  }

  /* ---------- colori: rosso, verde e blu ---------- */

  const NOMI_COLORI = [
    [t('nero', 'black'), 0, 0, 0], [t('bianco', 'white'), 255, 255, 255], [t('rosso', 'red'), 255, 0, 0], [t('verde', 'green'), 0, 255, 0],
    [t('blu', 'blue'), 0, 0, 255], [t('giallo', 'yellow'), 255, 255, 0], [t('ciano', 'cyan'), 0, 255, 255], [t('magenta', 'magenta'), 255, 0, 255],
    [t('grigio', 'grey'), 128, 128, 128], [t('arancione', 'orange'), 255, 128, 0]];

  function colori(fig) {
    const st = [dato(fig, 'r'), dato(fig, 'g'), dato(fig, 'b')].map(v => Math.max(0, Math.min(255, parseInt(v, 10) || 0)));
    const nomi = [t('Rosso', 'Red'), t('Verde', 'Green'), t('Blu', 'Blue')];
    const cursori = [], numeri = [];
    const righe = nomi.map((nome, k) => {
      const c = el('input', { type: 'range', min: '0', max: '255', step: '1', value: String(st[k]), 'aria-label': nome });
      const n = el('input', { type: 'number', min: '0', max: '255', value: String(st[k]), 'aria-label': nome });
      c.addEventListener('input', () => { st[k] = Number(c.value); disegna(); });
      n.addEventListener('input', () => { const v = Number(n.value); if (Number.isInteger(v) && v >= 0 && v <= 255) { st[k] = v; disegna(n); } });
      cursori.push(c); numeri.push(n);
      return el('div', { class: 'cd-cursore' }, el('span', { class: 'w-etichetta', text: nome }), c, n);
    });
    const campione = el('div', { class: 'cd-campione', role: 'img' });
    const bottoni = el('div', { class: 'w-chips' }, ...NOMI_COLORI.map(([nome, r, g, b]) => {
      const x = el('button', { type: 'button', class: 'btn', text: nome });
      x.addEventListener('click', () => { st[0] = r; st[1] = g; st[2] = b; disegna(); });
      return x;
    }));
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(el('div', { class: 'cd-colore' }, el('div', { class: 'cd-cursori' }, ...righe), campione), bottoni, lettura);

    function disegna(dalNumero) {
      st.forEach((v, k) => { cursori[k].value = String(v); if (numeri[k] !== dalNumero) numeri[k].value = String(v); });
      const [r, g, b] = st;
      campione.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      const esa = '#' + st.map(hex2).join('');
      const noto = NOMI_COLORI.find(([, a, c, d]) => a === r && c === g && d === b);
      campione.setAttribute('aria-label', t(`colore ${esa}`, `colour ${esa}`));
      const bit = el('span', { class: 'cd-bit' });
      st.forEach((v, k) => { if (k) bit.append(' '); bit.append(el('span', { class: 'cd-dati', text: bin(v, 8) })); });
      lettura.replaceChildren(
        el('p', {}, el('b', { text: `(${r}, ${g}, ${b})` }), ` · ${t('in esadecimale', 'in hexadecimal')} `, el('b', { text: esa }),
          noto ? ` · ${noto[0]}` : r === g && g === b ? ` · ${t('un grigio', 'a grey')}` : ''),
        el('p', {}, t('I 24 bit del pixel: ', 'The 24 bits of the pixel: '), bit),
        el('p', { class: 'w-nota', text: t('Ogni colore va da 0 a 255, cioè un byte: in tutto 256 · 256 · 256 = 16.777.216 colori.', 'Each colour goes from 0 to 255, that is one byte: 256 · 256 · 256 = 16,777,216 colours in all.') }));
    }
    disegna();
  }

  /* ---------- suono: campioni ---------- */

  function suono(fig) {
    const L = 560, A = 200, M = 14;                      // misure del disegno e margine
    const onda = x => 0.62 * Math.sin(2 * Math.PI * 1.5 * x) + 0.3 * Math.sin(2 * Math.PI * 4 * x + 0.6);   // x da 0 a 1
    const quanti = el('input', { type: 'range', min: '4', max: '64', step: '1', value: dato(fig, 'campioni', 'samples') || '16', 'aria-label': t('campioni nel disegno', 'samples in the drawing') });
    const bitSel = el('select', { 'aria-label': t('bit per campione', 'bits per sample') });
    for (const b of [2, 3, 4, 8]) bitSel.append(el('option', { value: String(b), text: `${b} ${t('bit', 'bits')} · ${2 ** b} ${t('livelli', 'levels')}` }));
    bitSel.value = dato(fig, 'bit', 'bits') || '3';
    if (!bitSel.value) bitSel.value = '3';
    const disegno = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    // conto dei byte
    const freq = el('select', { 'aria-label': t('campioni al secondo', 'samples per second') });
    for (const [v, nome] of [[8000, t('8000 (telefono)', '8000 (telephone)')], [22050, t('22 050', '22,050')], [44100, t('44 100 (CD)', '44,100 (CD)')], [48000, t('48 000 (video)', '48,000 (video)')]]) freq.append(el('option', { value: String(v), text: nome }));
    freq.value = '44100';
    const bitCampione = el('select', { 'aria-label': t('bit per campione', 'bits per sample') });
    for (const b of [8, 16, 24]) bitCampione.append(el('option', { value: String(b), text: `${b} ${t('bit', 'bits')}` }));
    bitCampione.value = '16';
    const canali = el('select', { 'aria-label': t('canali', 'channels') });
    canali.append(el('option', { value: '1', text: t('1 (mono)', '1 (mono)') }), el('option', { value: '2', text: t('2 (stereo)', '2 (stereo)') }));
    canali.value = '2';
    const minuti = el('input', { type: 'number', min: '1', max: '600', value: '60', 'aria-label': t('minuti', 'minutes') });
    const conto = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(
      el('div', { class: 'w-riga' }, el('div', { class: 'w-campo w-cursore' }, el('label', { text: t('Campioni nel disegno', 'Samples in the drawing') }), quanti), campo(t('Bit per campione', 'Bits per sample'), bitSel)),
      el('p', { class: 'w-aiuto', text: t('La linea grigia è l\'onda vera, i pallini sono i campioni, la linea a gradini è il suono che si ricostruisce tenendo ogni campione fino al successivo.',
        'The grey line is the real wave, the dots are the samples, the stepped line is the sound rebuilt by holding each sample until the next one.') }),
      disegno, lettura,
      el('p', { class: 'w-etichetta', text: t('Quanti byte occupa', 'How many bytes it takes') }),
      el('div', { class: 'w-riga' }, campo(t('Campioni al secondo', 'Samples per second'), freq), campo(t('Bit per campione', 'Bits per sample'), bitCampione),
        campo(t('Canali', 'Channels'), canali), campo(t('Minuti', 'Minutes'), minuti)),
      conto);

    const px = x => M + x * (L - 2 * M), py = y => A / 2 - y * (A / 2 - M);
    function disegna() {
      const n = Number(quanti.value), b = Number(bitSel.value), livelli = 2 ** b;
      const q = y => Math.round((y + 1) / 2 * (livelli - 1)) / (livelli - 1) * 2 - 1;   // il livello più vicino
      const s = sv('svg', { viewBox: `0 0 ${L} ${A}`, class: 'cd-svg', role: 'img',
        'aria-label': t(`Un'onda con ${n} campioni da ${b} bit`, `A wave with ${n} samples of ${b} bits`) });
      for (let k = 0; k < livelli && livelli <= 16; k++) {     // le righe dei livelli possibili, se non sono troppe
        const y = py(k / (livelli - 1) * 2 - 1);
        s.append(sv('line', { x1: M, x2: L - M, y1: y, y2: y, class: 'livello' }));
      }
      s.append(sv('line', { x1: M, x2: L - M, y1: py(0), y2: py(0), class: 'asse' }));
      const vera = [];
      for (let i = 0; i <= 240; i++) vera.push(`${px(i / 240).toFixed(1)},${py(onda(i / 240)).toFixed(1)}`);
      s.append(sv('polyline', { points: vera.join(' '), class: 'onda' }));
      const passi = [];
      let errore = 0;
      for (let k = 0; k < n; k++) {
        const x0 = k / n, x1 = (k + 1) / n, v = q(onda(x0));
        errore += Math.abs(v - onda((x0 + x1) / 2));
        passi.push(`${px(x0).toFixed(1)},${py(v).toFixed(1)} ${px(x1).toFixed(1)},${py(v).toFixed(1)}`);
      }
      s.append(sv('polyline', { points: passi.join(' '), class: 'ricostruito' }));
      for (let k = 0; k < n; k++) {
        const x = px(k / n), y = py(q(onda(k / n)));
        s.append(sv('line', { x1: x, x2: x, y1: py(0), y2: y, class: 'asta' }), sv('circle', { cx: x, cy: y, r: n > 32 ? 3 : 4.5, class: 'punto' }));
      }
      disegno.replaceChildren(s);
      const bitTotali = n * b;
      lettura.replaceChildren(
        el('p', {}, el('b', { text: t(`${n} campioni da ${b} bit`, `${n} samples of ${b} bits`) }),
          t(`: ogni campione può avere ${livelli} valori, e in tutto servono ${n} · ${b} = ${bitTotali} bit.`, `: each sample can take ${livelli} values, and ${n} · ${b} = ${bitTotali} bits are needed in all.`)),
        el('p', { class: 'w-nota', text: t(`Distanza media tra il suono ricostruito e l'onda vera: ${num(Math.round(errore / n * 1000) / 1000)}. Più campioni e più bit la fanno scendere, ma occupano più spazio.`,
          `Average distance between the rebuilt sound and the real wave: ${num(Math.round(errore / n * 1000) / 1000)}. More samples and more bits bring it down, but take more space.`) }));
      const f = Number(freq.value), c = Number(canali.value), bit = Number(bitCampione.value), m = Number(minuti.value);
      if (!Number.isInteger(m) || m < 1 || m > 600) { conto.replaceChildren(el('p', { class: 'w-errore', text: t('Scegli da 1 a 600 minuti.', 'Choose from 1 to 600 minutes.') })); return; }
      const alSecondo = f * (bit / 8) * c, tot = alSecondo * 60 * m;
      conto.replaceChildren(
        el('p', { text: t(`Ogni secondo: ${num(f)} · ${bit / 8} byte · ${c} = ${num(alSecondo)} byte.`, `Each second: ${num(f)} · ${bit / 8} ${bit === 8 ? 'byte' : 'bytes'} · ${c} = ${num(alSecondo)} bytes.`) }),
        el('p', {}, m === 1 ? t('In un minuto, cioè 60 secondi: ', 'In one minute, that is 60 seconds: ')
          : t(`In ${m} minuti, cioè ${num(60 * m)} secondi: `, `In ${m} minutes, that is ${num(60 * m)} seconds: `), el('b', { text: `${num(tot)} ${t('byte', 'bytes')}` }),
          t(`, circa ${mega(tot)} MB.`, `, about ${mega(tot)} MB.`)));
    }
    [quanti, bitSel, freq, bitCampione, canali, minuti].forEach(x => x.addEventListener('input', disegna));
    disegna();
  }

  /* ---------- binario: bit e valore delle posizioni ---------- */

  const mcd = (a, b) => (b ? mcd(b, a % b) : a);
  // un numero con al massimo 6 bit dopo la virgola: parte intera e frazione (numeratore, denominatore) ridotta
  function aParole(intero, numeratore, denominatore) {
    if (!numeratore) return String(intero);
    const g = mcd(numeratore, denominatore), fr = `${numeratore / g}/${denominatore / g}`;
    return intero ? t(`${intero} e ${fr}`, `${intero} and ${fr}`) : fr;
  }

  function binario(fig) {
    let tutti = (dato(fig, 'bit', 'bits') || '00100101').replace(/[^01]/g, '').slice(0, 16);
    const f = Math.max(0, Math.min(6, parseInt(dato(fig, 'frazioni', 'fractions') || '0', 10) || 0));
    if (tutti.length <= f) tutti = '0'.repeat(f + 1 - tutti.length) + tutti;
    const st = tutti.split('').map(Number), interi = st.length - f;
    const pesi = st.map((_, i) => interi - 1 - i);              // esponente del 2 di ogni posizione
    const aiuto = el('p', { class: 'w-aiuto', text: f ? t('Clicca su un bit per cambiarlo. Sopra ogni bit c\'è il valore della sua posizione: dopo la virgola 1/2, 1/4, 1/8…',
      'Click a bit to change it. Above each bit you see the value of its position: after the point 1/2, 1/4, 1/8…')
      : t('Clicca su un bit per cambiarlo. Sopra ogni bit c\'è il valore della sua posizione.', 'Click a bit to change it. Above each bit you see the value of its position.') });
    const riga = el('div', { class: 'cd-bits' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    const piu = el('button', { type: 'button', class: 'btn', text: '+ 1' });
    const meno = el('button', { type: 'button', class: 'btn', text: '− 1' });
    const zero = el('button', { type: 'button', class: 'btn', text: t('Tutti a 0', 'All 0') });
    fig.append(aiuto, el('div', { class: 'cd-scorre' }, riga), el('div', { class: 'w-riga' }, piu, meno, zero), lettura);

    const intero = () => st.slice(0, interi).reduce((v, b) => 2 * v + b, 0);
    const imposta = v => { for (let i = interi - 1; i >= 0; i--) { st[i] = v & 1; v = Math.floor(v / 2); } };
    let nota = '';
    piu.addEventListener('click', () => {
      const v = intero() + 1;
      nota = v === 2 ** interi ? t(`Con ${interi} bit dopo ${2 ** interi - 1} si torna a 0: è l'overflow.`, `With ${interi} bits, after ${2 ** interi - 1} you go back to 0: that is overflow.`) : '';
      imposta(v % 2 ** interi); disegna();
    });
    meno.addEventListener('click', () => {
      const v = intero() - 1;
      nota = v < 0 ? t(`Sotto lo 0 si torna a ${2 ** interi - 1}: gli interi senza segno non hanno numeri negativi.`, `Below 0 you go back to ${2 ** interi - 1}: unsigned integers have no negative numbers.`) : '';
      imposta((v + 2 ** interi) % 2 ** interi); disegna();
    });
    zero.addEventListener('click', () => { st.fill(0); nota = ''; disegna(); });

    function disegna(fuoco = -1) {
      const celle = [];
      st.forEach((b, i) => {
        if (i === interi && f) celle.push(el('div', { class: 'cd-colonnina' }, el('span', { class: 'cd-peso', text: '' }), el('span', { class: 'cd-virgola', text: en ? '.' : ',' })));
        const e = pesi[i];
        const bt = el('button', { type: 'button', class: 'pt-bit', text: String(b), 'aria-pressed': b ? 'true' : 'false',
          'aria-label': t(`bit che vale ${e >= 0 ? 2 ** e : '1/' + 2 ** -e}, ora ${b}`, `bit worth ${e >= 0 ? 2 ** e : '1/' + 2 ** -e}, now ${b}`) });
        bt.addEventListener('click', () => { st[i] = 1 - st[i]; nota = ''; disegna(i); });
        celle.push(el('div', { class: 'cd-colonnina' }, el('span', { class: 'cd-peso', text: e >= 0 ? String(2 ** e) : `1/${2 ** -e}` }), bt));
      });
      riga.replaceChildren(...celle);
      const voci = [];
      let numeratore = 0;
      st.forEach((b, i) => {
        if (!b) return;
        const e = pesi[i];
        voci.push(e >= 0 ? String(2 ** e) : `1/${2 ** -e}`);
        if (e < 0) numeratore += 2 ** (f + e);
      });
      const v = intero(), den = 2 ** f;
      const scritto = st.slice(0, interi).join('') + (f ? (en ? '.' : ',') + st.slice(interi).join('') : '');
      const decimale = v + numeratore / den;
      // 101,101 = 4 + 1 + 1/2 + 1/8 = 5 e 5/8 = 5,625, senza ripetere due volte la stessa cosa (00100000 = 32)
      const addendi = voci.join(' + ') || '0', parole = aParole(v, numeratore, den);
      const conto = el('p', {}, el('b', { text: scritto }));
      if (addendi !== parole) conto.append(` = ${addendi}`);
      conto.append(' = ', el('b', { text: parole }));
      if (numeratore) conto.append(` = ${num(decimale)}`);
      const frasi = [conto];
      if (!f && interi % 4 === 0) frasi.push(el('p', { class: 'w-nota', text: t(`In esadecimale: ${v.toString(16).toUpperCase().padStart(interi / 4, '0')}.`, `In hexadecimal: ${v.toString(16).toUpperCase().padStart(interi / 4, '0')}.`) }));
      if (nota) frasi.push(el('p', { class: 'cd-overflow', text: nota }));
      lettura.replaceChildren(...frasi);
      if (fuoco >= 0) riga.querySelectorAll('.pt-bit')[fuoco].focus();
    }
    if (f) { piu.hidden = true; meno.hidden = true; }
    disegna();
  }

  /* ---------- divisioni per 2 ---------- */

  function divisioni(fig) {
    const ingresso = el('input', { type: 'number', min: '0', max: '1000000', value: dato(fig, 'numero', 'number') || '13', 'aria-label': t('numero in base 10', 'number in base ten') });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(el('div', { class: 'w-riga' }, campo(t('Numero in base 10', 'Number in base ten'), ingresso)), tabella, lettura);

    function disegna() {
      const n = Number(ingresso.value);
      if (!Number.isInteger(n) || n < 0 || n > 1000000) {
        tabella.replaceChildren();
        lettura.replaceChildren(el('p', { class: 'w-errore', text: t(`Scegli un intero da 0 a ${num(1e6)}.`, `Choose a whole number from 0 to ${num(1e6)}.`) }));
        return;
      }
      if (n === 0) { tabella.replaceChildren(); lettura.replaceChildren(el('p', { text: t('0 in binario è 0: non c\'è niente da dividere.', '0 in binary is 0: there is nothing to divide.') })); return; }
      const righe = [], resti = [];
      for (let x = n; x > 0; x = Math.floor(x / 2)) {
        resti.push(x % 2);
        righe.push(el('tr', {}, el('td', { text: `${num(x)} : 2` }), el('td', { text: num(Math.floor(x / 2)) }), el('td', { class: 'cd-dati', text: String(x % 2) })));
      }
      tabella.replaceChildren(el('table', { class: 'cd-tabella' },
        el('thead', {}, el('tr', {}, el('th', { text: t('Divisione', 'Division') }), el('th', { text: t('Quoziente', 'Quotient') }), el('th', { text: t('Resto', 'Remainder') }))),
        el('tbody', {}, ...righe)));
      const binarioLetto = resti.slice().reverse().join('');
      const somma = [];
      resti.forEach((r, k) => { if (r) somma.unshift(num(2 ** k)); });
      lettura.replaceChildren(
        el('p', {}, t('I resti dall\'ultimo al primo: ', 'The remainders from the last to the first: '), el('b', { class: 'cd-bit', text: binarioLetto }), '.'),
        el('p', { class: 'w-nota', text: t(`Controllo: ${somma.join(' + ')} = ${num(n)}.`, `Check: ${somma.join(' + ')} = ${num(n)}.`) }));
    }
    ingresso.addEventListener('input', disegna);
    disegna();
  }

  /* ---------- somma in colonna ---------- */

  function somma(fig) {
    const pulisci = s => (s || '').replace(/[^01]/g, '');
    const a = pulisci(dato(fig, 'a')) || '00111010', b = pulisci(dato(fig, 'b')) || '00011011';
    const scelto = parseInt(dato(fig, 'n') || '', 10);
    // tanti bit quanti ne ha il numero più lungo, oppure quelli della chiave «n»
    const n = scelto >= 3 && scelto <= 12 ? scelto : Math.max(4, Math.min(12, Math.max(a.length, b.length)));
    const leggi = s => s.slice(-n).padStart(n, '0').split('').map(Number);
    const A = leggi(a), B = leggi(b);
    if (si(dato(fig, 'complemento', 'twos'))) { sommaConSegno(fig, n, A, B); return; }   // numeri in complemento a 2
    const aiuto = el('p', { class: 'w-aiuto', text: t(`Clicca sui bit dei due numeri. La somma si fa colonna per colonna, da destra; nella prima riga ci sono i riporti. Con ${n} bit gli interi senza segno vanno da 0 a ${2 ** n - 1}.`,
      `Click the bits of the two numbers. The sum goes column by column, from the right; the first row holds the carries. With ${n} bits, unsigned integers go from 0 to ${2 ** n - 1}.`) });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(aiuto, tabella, lettura);
    const adatta = stringi(tabella);                             // su uno schermo stretto spariscono le etichette delle righe
    const valore = v => v.reduce((x, b) => 2 * x + b, 0);

    function disegna(fuoco = '') {
      const riporti = Array(n + 1).fill(0), s = Array(n).fill(0);
      for (let i = n - 1; i >= 0; i--) {
        const c = A[i] + B[i] + riporti[i + 1];
        s[i] = c % 2;
        riporti[i] = c >> 1;                                   // riporti[i] va nella colonna a sinistra di i
      }
      const fuori = riporti[0];
      const bottoni = (v, nome) => v.map((b, i) => {
        const bt = el('button', { type: 'button', class: 'pt-bit', text: String(b), 'aria-pressed': b ? 'true' : 'false', 'data-k': `${nome}${i}`,
          'aria-label': t(`${nome === 'a' ? 'primo' : 'secondo'} numero, bit ${i + 1} di ${n}, vale ${b}`, `${nome === 'a' ? 'first' : 'second'} number, bit ${i + 1} of ${n}, value ${b}`) });
        bt.addEventListener('click', () => { v[i] = 1 - v[i]; disegna(`${nome}${i}`); });
        return el('td', {}, bt);
      });
      const va = valore(A), vb = valore(B), vs = valore(s);
      // prima dei bit c'è una colonna in più: lì finisce il riporto dell'ultima colonna, che nel risultato non ha posto
      const riga = (nome, extra, celle, classe = '') => el('tr', { class: classe }, el('th', { text: nome }), extra, ...celle);
      const vuota = () => el('td', { class: 'cd-fuori' });
      tabella.replaceChildren(el('table', { class: 'cd-tabella cd-colonne' }, el('tbody', {},
        riga(t('riporti', 'carries'), el('td', { class: 'cd-fuori cd-riporto', text: fuori ? '1' : '' }),
          riporti.slice(1).map(r => el('td', { class: 'cd-riporto', text: r ? '1' : '' }))),
        riga(String(va), vuota(), bottoni(A, 'a')),
        riga(`+ ${vb}`, vuota(), bottoni(B, 'b')),
        riga(`= ${vs}`, el('td', fuori ? { class: 'cd-fuori cd-perso', text: '1', title: t('bit perso', 'lost bit') } : { class: 'cd-fuori' }),
          s.map(b => el('td', { class: 'cd-dati cd-somma', text: String(b) })), 'cd-totale'))));
      adatta();
      const frasi = [el('p', {}, `${va} + ${vb} = ${va + vb}`, ' · ', el('b', { class: 'cd-bit', text: (fuori ? '1' : '') + s.join('') }))];
      if (fuori) frasi.push(el('p', { class: 'cd-overflow', text: t(`Overflow: l'ultima colonna a sinistra dà un riporto che non ha posto. Con ${n} bit resta ${s.join('')}, cioè ${vs} invece di ${va + vb}: sbagliato di ${2 ** n}.`,
        `Overflow: the last column on the left gives a carry that has no room. With ${n} bits what is left is ${s.join('')}, that is ${vs} instead of ${va + vb}: wrong by ${2 ** n}.`) }));
      else frasi.push(el('p', { class: 'w-nota', text: t(`Nessun overflow: ${va + vb} sta in ${n} bit, che arrivano a ${2 ** n - 1}.`, `No overflow: ${va + vb} fits in ${n} bits, which go up to ${2 ** n - 1}.`) }));
      lettura.replaceChildren(...frasi);
      if (fuoco) { const b = tabella.querySelector(`[data-k="${fuoco}"]`); if (b) b.focus(); }
    }
    disegna();
  }

  /* ---------- strumenti della lezione 03 e 04: interi con segno, virgola mobile, parità, Hamming ---------- */
  // I testi di questi modi sono solo in italiano.

  const soloBit = s => (s || '').replace(/[^01]/g, '');
  const conSegno = v => (v < 0 ? '−' + (-v) : String(v));          // il meno tipografico, come nel testo delle lezioni
  const valoreBit = v => v.reduce((x, b) => 2 * x + b, 0);
  const si = s => /^(si|sì|yes|true|1)$/i.test((s || '').trim());
  // un bit da cliccare, con il peso sopra (vuoto se non serve)
  function cellaBit(b, peso, etichetta, alClic, dati = {}) {
    const bt = el('button', { type: 'button', class: 'pt-bit', text: String(b), 'aria-pressed': b ? 'true' : 'false', 'aria-label': etichetta, ...dati });
    bt.addEventListener('click', alClic);
    return el('div', { class: 'cd-colonnina' }, el('span', { class: 'cd-peso', text: peso }), bt);
  }
  const passiLista = righe => el('ol', { class: 'cd-passi' }, ...righe.map(r => el('li', {}, ...[].concat(r))));
  function rimettiFuoco(cont, k) { if (k) { const b = cont.querySelector(`[data-k="${k}"]`); if (b) b.focus(); } }

  /* ---------- interi: senza segno, complemento a 2, eccesso ---------- */

  function interi(fig) {
    const dati = soloBit(dato(fig, 'bit', 'bits')) || '10110110';
    let n = parseInt(dato(fig, 'n') || '', 10);
    if (!(n >= 3 && n <= 8)) n = Math.max(3, Math.min(8, dati.length));
    const st = dati.slice(-n).padStart(n, '0').split('').map(Number);
    const M = 2 ** n, meta = M / 2;
    const c2 = u => (u >= meta ? u - M : u);
    const aiuto = el('p', { class: 'w-aiuto', text: `Clicca sui bit per cambiarli. Gli stessi ${n} bit si leggono in tre modi: senza segno, in complemento a 2 e in eccesso ${meta}.` });
    const riga = el('div', { class: 'cd-bits' });
    const bottone = testo => el('button', { type: 'button', class: 'btn', text: testo });
    const cambia = bottone('Cambia segno'), piu = bottone('+ 1'), meno = bottone('− 1'), zero = bottone('Tutti a 0');
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(aiuto, el('div', { class: 'cd-scorre' }, riga), el('div', { class: 'w-riga' }, cambia, piu, meno, zero), tabella, lettura);
    const adatta = stringi(tabella);
    const imposta = v => { for (let i = n - 1; i >= 0; i--) { st[i] = v & 1; v = Math.floor(v / 2); } };
    let nota = [];

    cambia.addEventListener('click', () => {
      const u = valoreBit(st), prima = st.join(''), inv = st.map(b => 1 - b).join(''), uInv = M - 1 - u, dopo = (uInv + 1) % M;
      nota = [el('p', { class: 'w-etichetta', text: 'Cambiare segno in complemento a 2' }), passiLista([
        `Inverti ogni bit, gli 0 diventano 1 e gli 1 diventano 0: ${prima} diventa ${inv}.`,
        `Aggiungi 1: ${inv} + 1 = ${bin(dopo, n)}${uInv + 1 === M ? ' (il riporto che esce a sinistra si butta)' : ''}.`])];
      if (u === meta) nota.push(el('p', { class: 'cd-overflow', text: `Attenzione: ${prima} vale ${conSegno(-meta)}, il numero più negativo con ${n} bit. Il suo opposto, ${meta}, non c'è: con ${n} bit si arriva solo a ${meta - 1}. Cambiando segno si torna allo stesso numero.` }));
      else if (u === 0) nota.push(el('p', { class: 'w-nota', text: 'Lo 0 resta 0: è l\'opposto di sé stesso.' }));
      else nota.push(el('p', { class: 'w-nota', text: `Prima ${conSegno(c2(u))}, ora ${conSegno(c2(dopo))}: stesso numero, segno opposto.` }));
      imposta(dopo); disegna();
    });
    piu.addEventListener('click', () => {
      const v = valoreBit(st) + 1;
      nota = v === M ? [el('p', { class: 'cd-overflow', text: `Come un contachilometri: dopo ${bin(M - 1, n)} si torna a ${bin(0, n)}. Senza segno è un overflow, ${M - 1} + 1 non ci sta; in complemento a 2 invece è giusto, −1 + 1 = 0.` })]
        : v === meta ? [el('p', { class: 'cd-overflow', text: `In complemento a 2, dopo ${meta - 1} viene ${conSegno(-meta)}: è un overflow, perché ${meta} con ${n} bit non ci sta. Senza segno invece è giusto: ${meta - 1} + 1 = ${meta}.` })] : [];
      imposta(v % M); disegna();
    });
    meno.addEventListener('click', () => {
      const v = valoreBit(st) - 1;
      nota = v < 0 ? [el('p', { class: 'cd-overflow', text: `Come un contachilometri all'indietro: sotto ${bin(0, n)} si torna a ${bin(M - 1, n)}. Senza segno è un overflow, perché lo 0 non ha numeri sotto; in complemento a 2 invece è giusto, 0 − 1 = −1.` })]
        : v === meta - 1 ? [el('p', { class: 'cd-overflow', text: `In complemento a 2, sotto ${conSegno(-meta)} si torna a ${meta - 1}: è un overflow. Senza segno invece è giusto: ${meta} − 1 = ${meta - 1}.` })] : [];
      imposta((v + M) % M); disegna();
    });
    zero.addEventListener('click', () => { st.fill(0); nota = []; disegna(); });

    function disegna(fuoco = '') {
      riga.replaceChildren(...st.map((b, i) => cellaBit(b, String(2 ** (n - 1 - i)), `bit che vale ${2 ** (n - 1 - i)}, ora ${b}`,
        () => { st[i] = 1 - st[i]; nota = []; disegna(`i${i}`); }, { 'data-k': `i${i}` })));
      const u = valoreBit(st), s = st.join('');
      const monete = st.map((b, i) => (b ? 2 ** (n - 1 - i) : 0)).filter(Boolean);
      const somma = monete.length > 1 ? `${monete.join(' + ')} = ${u}` : String(u);
      // in complemento a 2 la moneta di sinistra vale con il segno meno (lezione 03)
      const comp = !st[0] ? `bit di segno 0, come senza segno: ${u}`
        : monete.length > 1 ? `bit di segno 1, moneta −${meta}: ${['−' + meta, ...monete.slice(1)].join(' + ')} = ${conSegno(u - M)}`
        : `bit di segno 1 e nessun'altra moneta: −${meta}`;
      const ecc = `${u} − ${meta} = ${conSegno(u - meta)}`;
      const r = (nome, conto, valore) => el('tr', {}, el('th', { text: nome }), el('td', { class: 'cd-lista cd-largo', text: conto }), el('td', { class: 'cd-dati cd-valore', text: valore }));
      tabella.replaceChildren(el('table', { class: 'cd-tabella cd-letture' },
        el('thead', {}, el('tr', {}, el('th', { text: `${s} letto` }), el('th', { class: 'cd-largo', text: 'Conto' }), el('th', { text: 'Vale' }))),
        el('tbody', {}, r('senza segno', somma, String(u)), r('complemento a 2', comp, conSegno(c2(u))), r(`eccesso ${meta}`, ecc, conSegno(u - meta)))));
      adatta();
      lettura.replaceChildren(
        el('p', { class: 'w-nota', text: `Con ${n} bit: senza segno da 0 a ${M - 1}; in complemento a 2 e in eccesso ${meta} da ${conSegno(-meta)} a ${meta - 1}.` }),
        ...nota);
      rimettiFuoco(riga, fuoco);
    }
    disegna();
  }

  /* ---------- somma in complemento a 2 (variante di «somma») ---------- */

  function sommaConSegno(fig, n, A, B) {
    const meta = 2 ** (n - 1), M = 2 ** n;
    const c2 = u => (u >= meta ? u - M : u);
    const aiuto = el('p', { class: 'w-aiuto', text: `Clicca sui bit dei due numeri, scritti in complemento a 2 con ${n} bit: vanno da ${conSegno(-meta)} a ${meta - 1}. La somma si fa in colonna come senza segno; il riporto che esce a sinistra si butta.` });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(aiuto, tabella, lettura);
    const adatta = stringi(tabella);
    function disegna(fuoco = '') {
      const riporti = Array(n + 1).fill(0), s = Array(n).fill(0);
      for (let i = n - 1; i >= 0; i--) { const c = A[i] + B[i] + riporti[i + 1]; s[i] = c % 2; riporti[i] = c >> 1; }
      const fuori = riporti[0];
      const bottoni = (v, nome) => v.map((b, i) => {
        const bt = el('button', { type: 'button', class: 'pt-bit', text: String(b), 'aria-pressed': b ? 'true' : 'false', 'data-k': `${nome}${i}`,
          'aria-label': `${nome === 'a' ? 'primo' : 'secondo'} numero, bit ${i + 1} di ${n}, vale ${b}` });
        bt.addEventListener('click', () => { v[i] = 1 - v[i]; disegna(`${nome}${i}`); });
        return el('td', {}, bt);
      });
      const va = c2(valoreBit(A)), vb = c2(valoreBit(B)), vs = c2(valoreBit(s)), vero = va + vb;
      const riga = (nome, extra, celle, classe = '') => el('tr', { class: classe }, el('th', { text: nome }), extra, ...celle);
      const vuota = () => el('td', { class: 'cd-fuori' });
      tabella.replaceChildren(el('table', { class: 'cd-tabella cd-colonne' }, el('tbody', {},
        riga('riporti', el('td', { class: 'cd-fuori cd-riporto', text: fuori ? '1' : '' }), riporti.slice(1).map(r => el('td', { class: 'cd-riporto', text: r ? '1' : '' }))),
        riga(conSegno(va), vuota(), bottoni(A, 'a')),
        riga(`+ ${vb < 0 ? '(' + conSegno(vb) + ')' : vb}`, vuota(), bottoni(B, 'b')),
        riga(`= ${conSegno(vs)}`, el('td', fuori ? { class: 'cd-fuori cd-perso', text: '1', title: 'riporto buttato' } : { class: 'cd-fuori' }),
          s.map(b => el('td', { class: 'cd-dati cd-somma', text: String(b) })), 'cd-totale'))));
      adatta();
      const segno = v => (v < 0 ? 'negativo' : 'positivo o zero');
      const frasi = [el('p', {}, `${conSegno(va)} + ${vb < 0 ? '(' + conSegno(vb) + ')' : vb} = ${conSegno(vero)}`, ' · ', el('b', { class: 'cd-bit', text: s.join('') }), ` · letto in complemento a 2: ${conSegno(vs)}`)];
      const overflow = A[0] === B[0] && s[0] !== A[0];
      if (overflow) frasi.push(el('p', { class: 'cd-overflow', text: `Overflow: i due numeri sono ${A[0] ? 'negativi' : 'positivi'}, ma il risultato comincia con ${s[0]}, cioè è ${segno(vs)}. È la regola del segno: ${conSegno(vero)} con ${n} bit non ci sta.` }));
      else {
        frasi.push(el('p', { class: 'w-nota', text: A[0] !== B[0] ? 'Nessun overflow: i due numeri hanno segno diverso, e allora la somma sta sempre tra i due.'
          : `Nessun overflow: i due numeri e il risultato hanno lo stesso segno, ${segno(vs)}.` }));
        if (fuori) frasi.push(el('p', { class: 'w-nota', text: 'Il riporto uscito a sinistra si butta: in complemento a 2 non vuol dire overflow.' }));
      }
      lettura.replaceChildren(...frasi);
      rimettiFuoco(tabella, fuoco);
    }
    disegna();
  }

  /* ---------- virgola mobile a 8 bit, come nel libro (§1.7) ---------- */

  // un numero come frazione p/q (q > 0), da «2,625», «2.625», «21/8», «2 5/8», «-0,375»
  function leggiNumero(s) {
    const t0 = (s || '').trim().replace(/[−–]/g, '-').replace(/\s+/g, ' ');
    let m = t0.match(/^([+-]?)(\d{1,4})(?:[.,](\d{1,8}))?$/);
    if (m) {
      const q = 10 ** (m[3] || '').length, p = Number(m[2]) * q + Number(m[3] || 0);
      return [m[1] === '-' ? -p : p, q];
    }
    m = t0.match(/^([+-]?)(?:(\d{1,4}) )?(\d{1,6})\/(\d{1,6})$/);
    if (m && Number(m[4]) > 0) {
      const q = Number(m[4]), p = Number(m[2] || 0) * q + Number(m[3]);
      return [m[1] === '-' ? -p : p, q];
    }
    return null;
  }
  function frazione(p, q) {                       // «2 e 3/4», «−5/8», «3»
    const segno = p < 0 ? '−' : '';
    p = Math.abs(p);
    const g = mcd(p, q) || 1;
    p /= g; q /= g;
    const intero = Math.floor(p / q), resto = p % q;
    if (!resto) return segno + intero;
    return segno + (intero ? `${intero} e ${resto}/${q}` : `${resto}/${q}`);
  }
  const decimale = x => x.toLocaleString('it-IT', { maximumFractionDigits: 8 }).replace('-', '−');

  function virgola(fig) {
    const iniziale = soloBit(dato(fig, 'bit', 'bits'));
    const st = (iniziale || '01101011').slice(0, 8).padEnd(8, '0').split('').map(Number);
    const testoNumero = dato(fig, 'numero', 'number');
    const ingresso = el('input', { type: 'text', class: 'w-largo', inputmode: 'decimal', spellcheck: 'false', autocomplete: 'off', maxlength: '20',
      value: testoNumero || '', placeholder: 'per esempio 2,625 o 21/8', 'aria-label': 'numero da scrivere nel formato a 8 bit' });
    const aiuto = el('p', { class: 'w-aiuto', text: 'Il formato del libro: 1 bit di segno, 3 di esponente in eccesso 4, 4 di mantissa con la virgola subito a sinistra. Scrivi un numero per codificarlo, oppure clicca sui bit per leggerli.' });
    const riga = el('div', { class: 'cd-bits' });
    const codifica = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(el('div', { class: 'w-riga' }, campo('Numero da codificare', ingresso)), aiuto, el('div', { class: 'cd-scorre' }, riga), codifica, lettura);
    const PESI = ['±', '4', '2', '1', '1/2', '1/4', '1/8', '1/16'];
    const PARTI = ['segno', 'esponente', 'esponente', 'esponente', 'mantissa', 'mantissa', 'mantissa', 'mantissa'];

    function codificaNumero() {
      const fr = leggiNumero(ingresso.value);
      if (!ingresso.value.trim()) { codifica.replaceChildren(); return; }
      if (!fr) { codifica.replaceChildren(el('p', { class: 'w-errore', text: 'Non capisco il numero: scrivilo come 2,625 oppure 21/8 oppure 2 5/8.' })); return; }
      let [p, q] = fr;
      const neg = p < 0; p = Math.abs(p);
      if (p === 0) {
        st.fill(0);
        codifica.replaceChildren(el('p', { class: 'w-nota', text: 'Lo 0 non ha un 1 da mettere subito dopo la virgola, quindi non si può normalizzare: di solito si scrive con tutti i bit a 0, 00000000.' }));
        disegna(); return;
      }
      // cifre in base 2: parte intera e fino a 16 bit dopo la virgola
      const intero = Math.floor(p / q);
      let r = p % q, dopo = '';
      for (let k = 0; k < 16 && r; k++) { r *= 2; if (r >= q) { dopo += '1'; r -= q; } else dopo += '0'; }
      const infinito = r !== 0;
      const prima = intero.toString(2);
      const scritto = prima + (dopo ? ',' + dopo + (infinito ? '…' : '') : '');
      // esponente: di quanti posti si sposta la virgola per avere 0,1…
      const cifre = (intero ? prima : '') + dopo;
      const primoUno = dopo.indexOf('1');
      const E = intero ? prima.length : primoUno < 0 ? -99 : -primoUno;
      const significative = intero ? cifre : primoUno < 0 ? '' : dopo.slice(primoUno);
      const mant = significative.slice(0, 4).padEnd(4, '0');
      const persi = infinito ? significative.slice(4) : significative.slice(4).replace(/0+$/, '');
      const tronco = /1/.test(persi) || infinito;
      const pot = e => ['2', el('sup', { text: conSegno(e) })];       // «2» con l'esponente in alto
      const mostra = '0,' + (significative.replace(/0+$/, '') || '0') + (infinito ? '…' : '');
      const passi = [
        `In base 2: ${neg ? '−' : ''}${frazione(p, q)} = ${neg ? '−' : ''}${scritto}${infinito ? '' : '.'}`,
        E > 0 ? [`Sposta la virgola di ${E} ${E === 1 ? 'posto' : 'posti'} a sinistra, così subito dopo la virgola c'è il primo 1: ${mostra} × `, ...pot(E), `. L'esponente è ${E}.`]
          : E === 0 ? "Il primo 1 è già subito dopo la virgola: l'esponente è 0."
          : E === -99 ? 'Il primo 1 arriva dopo più di 16 cifre: il numero è troppo vicino a 0.'
          : [`Sposta la virgola di ${-E} ${E === -1 ? 'posto' : 'posti'} a destra, così subito dopo la virgola c'è il primo 1: ${mostra} × `, ...pot(E), `. L'esponente è ${conSegno(E)}.`]];
      if (E > 3 || E < -4) {
        const fuori = E > 3 ? [`Con 3 bit in eccesso 4 l'esponente va da −4 a 3: ${E} è troppo grande. Il numero non ci sta: è un overflow. Il massimo è 0,1111 × `, ...pot(3), ' = 7,5.']
          : ["Con 3 bit in eccesso 4 l'esponente va da −4 a 3: qui è troppo piccolo, e il numero non ci sta. Il più piccolo positivo con la mantissa che comincia con 1 è 0,1000 × ", ...pot(-4), ' = 1/32.'];
        passi.push(el('span', { class: 'cd-overflow' }, ...fuori));
        codifica.replaceChildren(el('p', { class: 'w-etichetta', text: 'Codificare' }), passiLista(passi));
        return;
      }
      const eBit = bin(E + 4, 3);
      passi.push(`Mantissa: le prime 4 cifre dopo la virgola, ${mant}.` + (tronco ? ` Le cifre dopo (${persi.length > 8 ? persi.slice(0, 8) + '…' : persi + (infinito ? '…' : '')}) non ci stanno e si perdono: è un errore di troncamento.` : ''));
      passi.push(`Esponente in eccesso 4: ${conSegno(E)} + 4 = ${E + 4}, cioè ${eBit}.`);
      passi.push(`Segno: ${neg ? '1, perché il numero è negativo' : '0, perché il numero è positivo'}.`);
      const tutti = (neg ? '1' : '0') + eBit + mant;
      tutti.split('').forEach((c, i) => { st[i] = Number(c); });
      passi.push(`Insieme: ${neg ? 1 : 0} | ${eBit} | ${mant}, cioè ${tutti}.`);
      const vale = (neg ? -1 : 1) * parseInt(mant, 2) * 2 ** (E - 4);
      const voleva = (neg ? -1 : 1) * p / q;
      const fine = tronco ? el('p', { class: 'cd-overflow', text: `Troncamento: ${tutti} vale ${decimale(vale)} invece di ${decimale(voleva)}: si perde ${decimale(Math.abs(voleva - vale))}.` })
        : el('p', { class: 'w-nota', text: 'Nessun troncamento: il numero ci sta esatto.' });
      codifica.replaceChildren(el('p', { class: 'w-etichetta', text: 'Codificare' }), passiLista(passi), fine);
      disegna();
    }

    function disegna(fuoco = '') {
      const celle = [];
      st.forEach((b, i) => {
        if (i === 1 || i === 4) celle.push(el('span', { class: 'cd-separa', 'aria-hidden': 'true' }));
        celle.push(cellaBit(b, PESI[i], `${PARTI[i]}, bit ${i + 1} di 8, ora ${b}`, () => { st[i] = 1 - st[i]; codifica.replaceChildren(); disegna(`v${i}`); }, { 'data-k': `v${i}` }));
      });
      riga.replaceChildren(...celle);
      const s = st[0], e = valoreBit(st.slice(1, 4)), m = st.slice(4).join(''), E = e - 4;
      const mv = parseInt(m, 2);                              // la mantissa in sedicesimi
      // la mantissa 0,mmmm spostata di E posti: le cifre in base 2 con la virgola al posto giusto
      const cifre = m, pos = E;                                 // la virgola va dopo «pos» cifre della mantissa
      let spostato;
      if (pos <= 0) spostato = '0,' + '0'.repeat(-pos) + cifre;
      else if (pos >= 4) spostato = cifre + '0'.repeat(pos - 4);
      else spostato = cifre.slice(0, pos) + ',' + cifre.slice(pos);
      spostato = spostato.replace(/^0+(?=\d)/, '').replace(/(,\d*?)0+$/, '$1').replace(/,$/, '');
      if (spostato.startsWith(',')) spostato = '0' + spostato;
      const p = (s ? -1 : 1) * mv, q = 2 ** (4 - E);           // valore = ± mv/16 · 2^E = ± mv / 2^(4−E)
      const valore = p / q;
      const passi = [
        `Segno: ${s}, quindi il numero è ${s ? 'negativo' : 'positivo'}.`,
        `Esponente: ${st.slice(1, 4).join('')} vale ${e}; in eccesso 4 si toglie 4: ${e} − 4 = ${conSegno(E)}.`,
        `Mantissa: ${m}, con la virgola a sinistra: 0,${m}.`,
        E === 0 ? `L'esponente è 0: la virgola resta dov'è, ${spostato}.`
          : E > 0 ? `Sposta la virgola di ${E} ${E === 1 ? 'posto' : 'posti'} a destra: 0,${m} diventa ${spostato}.`
          : `Sposta la virgola di ${-E} ${E === -1 ? 'posto' : 'posti'} a sinistra: 0,${m} diventa ${spostato}.`,
        el('span', {}, 'Valore: ', el('b', { text: `${s ? '−' : ''}${spostato} in base 2 = ${frazione(p, q)}` }), mv && !Number.isInteger(valore) ? ` = ${decimale(valore)}.` : '.')];
      const finale = [el('p', { class: 'w-etichetta', text: `Leggere ${st.join('')}` }), passiLista(passi)];
      if (mv && !st[4]) finale.push(el('p', { class: 'w-nota', text: 'La mantissa comincia con 0: il numero non è normalizzato. Il libro vuole il primo bit della mantissa a 1.' }));
      if (!mv) finale.push(el('p', { class: 'w-nota', text: 'Con la mantissa tutta a 0 il numero vale 0.' }));
      lettura.replaceChildren(...finale);
      rimettiFuoco(riga, fuoco);
    }
    ingresso.addEventListener('input', codificaNumero);
    disegna();
    if (testoNumero) codificaNumero();
  }

  /* ---------- bit di parità ---------- */

  function parita(fig) {
    const dati = (soloBit(dato(fig, 'bit', 'bits')) || '1010001').slice(0, 12).split('').map(Number);
    let dispari = !/^(pari|even)$/i.test((dato(fig, 'parita', 'parity') || '').trim());
    const k = dati.length;
    let errori = new Set();                                    // posizioni cambiate nel viaggio, 0 = bit di parità
    const sceltaD = el('button', { type: 'button', class: 'btn', text: 'Parità dispari' });
    const sceltaP = el('button', { type: 'button', class: 'btn', text: 'Parità pari' });
    const uno = el('button', { type: 'button', class: 'btn', text: 'Un errore' });
    const due = el('button', { type: 'button', class: 'btn', text: 'Due errori' });
    const nessuno = el('button', { type: 'button', class: 'btn', text: 'Nessun errore' });
    const aiuto = el('p', { class: 'w-aiuto', text: 'Clicca sui bit dei dati. Il bit di parità, a sinistra, si calcola da solo. Nella riga «arrivati» puoi cliccare per sbagliare un bit, come un disturbo sulla linea.' });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(el('div', { class: 'w-riga pt-ingressi' }, sceltaD, sceltaP), aiuto, tabella, el('div', { class: 'w-riga' }, uno, due, nessuno), lettura);
    const adatta = stringi(tabella);
    sceltaD.addEventListener('click', () => { dispari = true; disegna(); });
    sceltaP.addEventListener('click', () => { dispari = false; disegna(); });
    uno.addEventListener('click', () => { errori = new Set([Math.min(2, k)]); disegna(); });
    due.addEventListener('click', () => { errori = new Set([Math.min(2, k), Math.min(k, 5)]); if (errori.size < 2) errori.add(0); disegna(); });
    nessuno.addEventListener('click', () => { errori = new Set(); disegna(); });

    function disegna(fuoco = '') {
      sceltaD.setAttribute('aria-pressed', String(dispari)); sceltaP.setAttribute('aria-pressed', String(!dispari));
      const uni = dati.filter(Boolean).length;
      const pb = dispari ? (uni % 2 ? 0 : 1) : uni % 2;
      const inviati = [pb, ...dati];
      const arrivati = inviati.map((b, i) => (errori.has(i) ? 1 - b : b));
      const cella = (b, cl) => el('td', {}, el('span', { class: cl, text: String(b) }));
      const rigaDati = el('tr', {}, el('th', { text: 'dati' }), el('td', {}, el('span', { class: 'cd-vuoto' })), ...dati.map((b, i) => {
        const bt = el('button', { type: 'button', class: 'pt-bit', text: String(b), 'aria-pressed': b ? 'true' : 'false', 'data-k': `d${i}`, 'aria-label': `bit dei dati ${i + 1} di ${k}, ora ${b}` });
        bt.addEventListener('click', () => { dati[i] = 1 - dati[i]; errori = new Set(); disegna(`d${i}`); });
        return el('td', {}, bt);
      }));
      const rigaInviati = el('tr', {}, el('th', { text: 'inviati' }), ...inviati.map((b, i) => cella(b, i ? 'cd-bitfisso' : 'cd-bitfisso cd-paritabit')));
      const rigaArrivati = el('tr', { class: 'cd-totale' }, el('th', { text: 'arrivati' }), ...arrivati.map((b, i) => {
        const bt = el('button', { type: 'button', class: 'pt-bit' + (errori.has(i) ? ' cd-sbagliato' : ''), text: String(b), 'aria-pressed': errori.has(i) ? 'true' : 'false', 'data-k': `r${i}`,
          'aria-label': `${i ? `bit arrivato ${i} dei dati` : 'bit di parità arrivato'}, ora ${b}${errori.has(i) ? ', sbagliato' : ''}` });
        bt.addEventListener('click', () => { if (errori.has(i)) errori.delete(i); else errori.add(i); disegna(`r${i}`); });
        return el('td', {}, bt);
      }));
      tabella.replaceChildren(el('table', { class: 'cd-tabella cd-colonne' }, el('tbody', {}, rigaDati, rigaInviati, rigaArrivati)));
      adatta();
      const voglio = dispari ? 'dispari' : 'pari';
      const arrivatiUni = arrivati.filter(Boolean).length;
      const va = dispari ? arrivatiUni % 2 === 1 : arrivatiUni % 2 === 0;
      const frasi = [
        el('p', {}, `I dati hanno ${uni} ${uni === 1 ? 'uno' : 'uni'}. Con la parità ${voglio} il totale degli 1 deve essere ${voglio}: il bit di parità è `, el('b', { text: String(pb) }),
          `, e si invia `, el('b', { class: 'cd-bit', text: inviati.join('') }), ` (${uni + pb} ${uni + pb === 1 ? 'uno' : 'uni'}).`),
        el('p', {}, `Nei bit arrivati ${arrivatiUni === 1 ? "c'è 1 uno" : `ci sono ${arrivatiUni} uni`}: `, el('b', { text: va ? `un numero ${voglio}, il controllo dice «tutto a posto».` : `un numero ${dispari ? 'pari' : 'dispari'}, il controllo dice «c'è un errore».` }))];
      const ne = errori.size;
      if (ne === 0) frasi.push(el('p', { class: 'w-nota', text: 'Nessun bit è cambiato nel viaggio.' }));
      else if (va) frasi.push(el('p', { class: 'cd-overflow', text: `Ma i bit sbagliati sono ${ne}! Con un numero pari di errori gli 1 cambiano di un numero pari: la parità torna giusta e il controllo non se ne accorge.` }));
      else frasi.push(el('p', { class: 'w-nota', text: `${ne === 1 ? 'Un bit è sbagliato' : `I bit sbagliati sono ${ne}`}: il controllo se ne accorge, ma non sa quale bit è cambiato, quindi non può correggerlo.` }));
      lettura.replaceChildren(...frasi);
      rimettiFuoco(tabella, fuoco);
    }
    disegna();
  }

  /* ---------- codice di Hamming a 6 bit del libro ---------- */

  const CODICE = [['A', '000000'], ['B', '001111'], ['C', '010011'], ['D', '011100'], ['E', '100110'], ['F', '101001'], ['G', '110101'], ['H', '111010']];
  function hamming(fig) {
    const st = (soloBit(dato(fig, 'parola', 'word')) || '010100').slice(0, 6).padEnd(6, '0').split('').map(Number);
    const aiuto = el('p', { class: 'w-aiuto', text: 'È arrivata questa parola di 6 bit: clicca sui bit per cambiarla. Per ogni simbolo del codice la tabella conta i bit diversi, cioè la distanza di Hamming; i bit diversi sono evidenziati.' });
    const riga = el('div', { class: 'cd-bits' });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(aiuto, el('div', { class: 'cd-scorre' }, riga), tabella, lettura);
    const adatta = stringi(tabella);
    function disegna(fuoco = '') {
      riga.replaceChildren(...st.map((b, i) => cellaBit(b, String(i + 1), `bit ${i + 1} della parola arrivata, ora ${b}`, () => { st[i] = 1 - st[i]; disegna(`h${i}`); }, { 'data-k': `h${i}` })));
      const parola = st.join('');
      const dist = CODICE.map(([, c]) => c.split('').filter((x, i) => x !== parola[i]).length);
      const minimo = Math.min(...dist);
      const vicini = CODICE.filter((_, j) => dist[j] === minimo).map(([s]) => s);
      tabella.replaceChildren(el('table', { class: 'cd-tabella cd-distanze' },
        el('thead', {}, el('tr', {}, el('th', { text: 'Simbolo' }), el('th', { text: 'Codice' }), el('th', { text: 'Bit diversi' }))),
        el('tbody', {}, ...CODICE.map(([s, c], j) => el('tr', dist[j] === minimo ? { class: 'cd-vicino' } : {},
          el('td', { class: 'cd-simbolo', text: s }),
          el('td', { class: 'cd-bit' }, ...c.split('').map((x, i) => el('span', { class: x !== parola[i] ? 'cd-diverso' : 'cd-uguale', text: x }))),
          el('td', { text: String(dist[j]) }))))));
      adatta();
      const frasi = [];
      if (minimo === 0) frasi.push(el('p', {}, el('b', { text: `${parola} è proprio il codice di ${vicini[0]}` }), ': nessun errore.'));
      else if (vicini.length === 1) frasi.push(el('p', {}, `${parola} non è nel codice. Il simbolo più vicino è `, el('b', { text: vicini[0] }), `, a distanza ${minimo}.`),
        el('p', { class: minimo === 1 ? 'w-nota' : 'cd-overflow', text: minimo === 1 ? `Con un solo bit sbagliato la correzione è sicura: nel codice ogni coppia di simboli differisce in almeno 3 bit, quindi nessun altro simbolo è a distanza 1.`
          : `Attenzione: ${minimo} bit sbagliati sono troppi per essere sicuri. Il codice corregge con certezza un errore solo.` }));
      else frasi.push(el('p', { class: 'cd-overflow', text: `${parola} è alla stessa distanza, ${minimo}, da ${vicini.join(', ').replace(/, ([^,]*)$/, ' e $1')}: non si sa quale simbolo scegliere. Si scopre l'errore, ma non si può correggere.` }));
      lettura.replaceChildren(...frasi);
      rimettiFuoco(riga, fuoco);
    }
    disegna();
  }

  const MODI = { testo, text: testo, colori, colours: colori, colors: colori, suono, sound: suono, binario, binary: binario,
    divisioni, divisions: divisioni, somma, addition: somma, interi, integers: interi, virgola, floating: virgola,
    parita, parity: parita, hamming };
  const avvia = fig => {
    const carica = fig.querySelector('.widget-carica');
    if (carica) carica.remove();
    (MODI[fig.dataset.modo || fig.dataset.mode] || binario)(fig);
  };
  // ogni strumento si prepara quando si avvicina allo schermo, come le tabelle in lezione.js: le tabelle degli strumenti
  // misurano se entrano nel riquadro, e prepararli tutti all'apertura obbligava il browser a impaginare subito anche le
  // sezioni lontane (content-visibility). Prima di stampare si preparano tutti
  const figure = [...document.querySelectorAll('figure.widget[data-widget="codifica"]')], pronti = new Set();
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver(voci => voci.forEach(v => { if (v.isIntersecting) prepara(v.target); }), { rootMargin: '100% 0px' })
    : null;
  function prepara(fig) { if (pronti.has(fig)) return; pronti.add(fig); if (io) io.unobserve(fig); avvia(fig); }
  figure.forEach(fig => (io ? io.observe(fig) : prepara(fig)));
  window.addEventListener('beforeprint', () => figure.forEach(prepara));
})();
