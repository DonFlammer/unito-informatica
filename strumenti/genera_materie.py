"""Genera le pagine per materia (appunti/<MATERIA>/index.html) e l'elenco delle materie nella pagina iniziale.

Ogni lezione è un file appunti/<MATERIA>/<codice>_<titolo>.html che nell'<head> ha:
    <title>01A · Un primo algoritmo</title>
    <meta name="lezione" content="01A">
    <meta name="data" content="2026-09-28">
    <meta name="modulo" content="MD">      (solo per le materie divise in moduli, come MDAG)

Le lezioni scritte in Markdown (contesto_ai/<MATERIA>/lezioni/*.md con «genera_html: true») diventano prima pagine
HTML con strumenti/lezioni.mjs, che questo script lancia da solo (serve Node.js, e «npm ci» nella cartella strumenti).

Uso, dalla radice del repository, dopo ogni nuova lezione:
    python strumenti/genera_materie.py
"""

import base64
import hashlib
import html
import re
import subprocess
from pathlib import Path

RADICE = Path(__file__).resolve().parent.parent
APPUNTI = RADICE / "appunti"
INDEX = RADICE / "index.html"
GH = "https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/"
# versione inglese (repository DonFlammer/unito-computer-science): stesse sigle, tranne INGLESE → ENGLISH
SITO_EN = "https://donflammer.github.io/unito-computer-science/"
SIGLA_EN = {"INGLESE": "ENGLISH"}
INIZIO = "<!-- MATERIE:INIZIO"
FINE = "<!-- MATERIE:FINE -->"
# materie divise in parti (MDAG): la sigla del modulo diventa «Parte 1», «Parte 2» negli elenchi delle lezioni
PARTI = {"MD": "Parte 1", "AG": "Parte 2"}

MATERIE = [
    {
        "sigla": "PROG1", "nome": "Programmazione I", "insegnamento": "MFN0582", "cfu": 9, "semestre": 1,
        "extra": "linguaggio C",
        "esame": "Esame al PC su Moodle, unico per i tre canali: esercizi in C con test automatici, e il codice viene anche letto.",
        "appelli": "25/01 e 11/02/2027",
        "moodle": [("Canale A · cognomi A–D", 3701), ("Canale B · cognomi E–O", 3773), ("Canale C · cognomi P–Z", 3767)],
        "link": [("Scheda del corso ed esame", "PROG1/corso.md"),
                 ("Esercizi d'esame tipo", "PROG1/esercizi_esame.md"),
                 ("Indice e collegamenti tra lezioni", "PROG1/indice_lezioni.md")],
    },
    {
        "sigla": "FDA", "nome": "Fondamenti dell'Informatica", "insegnamento": "INF0348", "cfu": 9, "semestre": 1,
        "esame": "Scritto su Moodle Esami, unico per i tre canali: 9 quiz (almeno 18) e una domanda aperta facoltativa, fino a 33.",
        "nota": ("Attenzione: nel \"Programma per il 2026\" del suo Moodle il canale B omette alcune sezioni del libro "
                 "che la mappa comune dei tre docenti (\"Argomenti del corso e dove trovarli\") include: §1.8 della Parte 1 "
                 "e §2.3, §3.1, §3.3, §3.4 e parte di §12.3 della Parte 2. Gli appunti seguono le lezioni del canale B e "
                 "quindi potrebbero non coprirle, ma l'esame è unico per i tre canali: studiale sul libro (dettagli nella "
                 "scheda del corso)."),
        "appelli": "29/01 e 18/02/2027",
        "moodle": [("Canale A · cognomi A–D", 3851), ("Canale B · cognomi E–O", 3747), ("Canale C · cognomi P–Z", 3635),
                   ("Pagina d'esame su Moodle Esami, comune ai tre canali", "https://esami.i-learn.unito.it/course/view.php?id=2673")],
        "link": [("Scheda del corso ed esame", "FDA/corso.md")],
    },
    {
        "sigla": "MDAG", "nome": "Matematica Discreta, Algebra e Geometria", "insegnamento": "INF0328", "cfu": 12,
        "semestre": 1,
        "esame": "Due prove scritte separate, parte 1 (Matematica Discreta) e parte 2 (Algebra lineare e Geometria); il voto è la media.",
        "appelli": "Parte 1 (Matematica Discreta) 19/01 e 03/02, parte 2 (Geometria) 22/01 e 05/02/2027",
        "moduli": [("MD", "Parte 1 · Matematica Discreta"), ("AG", "Parte 2 · Algebra lineare e Geometria")],
        "moodle": [("Parte 1 · Matematica Discreta, canali A, B e C", 3829),
                   ("Parte 2 · Algebra lineare e Geometria, canali A, B e C", 3831)],
        "nota": ("Il corso ha due parti, con lezioni, pagine Moodle e prove scritte separate: la parte 1 è Matematica "
                 "Discreta, la parte 2 è Algebra lineare e Geometria. Gli appunti della parte 2 coprono già tutte le "
                 "26 lezioni delle dispense 2026, comuni ai tre canali: sono pronti in anticipo, quindi in aula il "
                 "ritmo può essere diverso. Gli appunti della parte 1 non ci sono ancora."),
        "link": [("Scheda del corso ed esame", "MDAG/corso.md"),
                 ("Indice delle lezioni della parte 2, Algebra lineare e Geometria", "MDAG/indice_lezioni.md")],
    },
    {
        "sigla": "ANMAT", "nome": "Analisi Matematica", "insegnamento": "MFN0570", "cfu": 9, "semestre": 2,
        "esame": "Tre prove al PC: quiz, teoria, esercizi.",
        "moodle": [("Pagina unica per i canali A, B e C", 3703)],
        "link": [("Scheda del corso ed esame", "ANMAT/corso.md")],
    },
    {
        "sigla": "ARCH", "nome": "Architettura degli Elaboratori", "insegnamento": "INF0326", "cfu": 6, "semestre": 2,
        "esame": "Scritto al PC con laboratorio RISC-V, poi orale.",
        "moodle": [("Pagina unica per i canali A, B e C", 3833)],
        "link": [("Scheda del corso ed esame", "ARCH/corso.md")],
    },
    {
        "sigla": "PROG2", "nome": "Programmazione II", "insegnamento": "INF0330", "cfu": 6, "semestre": 2,
        "esame": "Progetti obbligatori, esonero e scritto.",
        "moodle": [("Canale A · teoria", 3651), ("Canale A · laboratorio A1, matricola dispari", 3653),
                   ("Canale A · laboratorio A2, matricola pari", 3655), ("Canale B · non ancora su Moodle (30/09/2026)", None),
                   ("Canale C · teoria e laboratorio C1: non ancora su Moodle (30/09/2026)", None),
                   ("Canale C · laboratorio C2, matricola pari", 3757)],
        "link": [("Scheda del corso ed esame", "PROG2/corso.md")],
    },
    {
        "sigla": "RO", "nome": "Ricerca Operativa", "insegnamento": "INF0327", "cfu": 6, "semestre": 2,
        "esame": "Scritto al PC e orale facoltativo.",
        "moodle": [("Pagina unica per i canali A, B e C", 3719)],
        "link": [("Scheda del corso ed esame", "RO/corso.md")],
    },
    {
        "sigla": "INGLESE", "nome": "Lingua Inglese I", "insegnamento": "MFN0590", "cfu": 3, "semestre": 2,
        "esame": "Test SET senza voto (idoneità), oppure riconoscimento di una certificazione almeno B1 (con tutte e 4 le abilità).",
        "lede": ("Il corso inizia nel secondo semestre ed è unico per i canali A, B e C (esercitazioni online, "
                 "nessuna divisione per canale): per ora c'è la scheda con esame, materiale e riconoscimento delle "
                 "certificazioni. Gli appunti arriveranno lezione per lezione."),
        "moodle": [("Pagina unica per i canali A, B e C", 3805)],
        "link": [("Scheda del corso ed esame", "INGLESE/corso.md")],
    },
]

# Aspetto: foglio di stile e script condivisi in assets/ (vedi assets/css/appunti.css); qui solo la struttura delle pagine.
ICONA = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' "
         "rx='8' fill='%23080d19'/%3E%3Crect x='1' y='1' width='30' height='30' rx='7' fill='none' stroke='%233fe0cc' "
         "stroke-opacity='.55'/%3E%3Ctext x='16' y='22.5' font-family='Consolas,monospace' font-size='18' font-weight='700' "
         "text-anchor='middle' fill='%233fe0cc'%3E%C2%A7%3C/text%3E%3C/svg%3E")
REPO = "https://github.com/DonFlammer/unito-informatica"
OFA = "https://donflammer.github.io/unito-ofa-matematica/"
# Moodle 2026/27 (I-Learn Informatica): pagine dei corsi e catalogo del primo anno, verificati il 30/09/2026
MOODLE = "https://informatica.i-learn.unito.it/course/view.php?id="
MOODLE_PRIMO_ANNO = "https://informatica.i-learn.unito.it/course/index.php?categoryid=485"
LICENZA = "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.it"

e = html.escape


def testa_html(radice, titolo, descrizione, url_en):
    """<head> comune: tema e animazioni scelti prima del disegno, caratteri, foglio di stile."""
    return f"""<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(titolo)}</title>
<meta name="description" content="{e(descrizione)}">
<meta name="theme-color" content="#000000">
<link rel="alternate" hreflang="en" href="{url_en}">
<link rel="icon" href="{ICONA}">
<script>
  var t = null; try {{ t = localStorage.getItem('appunti:tema'); if (localStorage.getItem('appunti:moto') === 'ridotto') document.documentElement.classList.add('meno-moto'); }} catch (e) {{}} if (t !== 'dark') document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'oled');
</script>
<link rel="preload" href="{radice}assets/fonts/plex-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{radice}assets/css/appunti.css">"""


def testata(radice, url_en, attiva=""):
    """Barra in alto, uguale in tutte le pagine; radice = percorso relativo della pagina iniziale."""
    corsi = ' aria-current="page"' if attiva == "corsi" else ""
    return f"""<a class="salta" href="#contenuto">Vai al contenuto</a>
<canvas id="rete" aria-hidden="true"></canvas>
<script src="{radice}assets/js/rete.js"></script>
<header class="barra">
  <div class="barra-in">
    <a class="marchio" href="{radice}index.html"><span class="glifo" aria-hidden="true">§</span><span class="nome"><b>Appunti di Informatica</b><small>UniTo · 2026/27</small></span></a>
    <button type="button" class="menu-btn" aria-label="Menu" aria-expanded="false"><span></span></button>
    <nav aria-label="Sito">
      <a href="{radice}index.html#corsi"{corsi}>Corsi</a>
      <a href="{GH}unito_informatica.md">Informazioni</a>
      <a href="{REPO}/tree/main/contesto_ai">Per le AI</a>
      <a href="{OFA}">OFA</a>
      <a href="{REPO}">GitHub</a>
      <a class="lingua" href="{url_en}" hreflang="en" lang="en">English</a>
      <button type="button" class="theme solo-icona" id="theme-toggle" aria-label="Tema: scuro" title="Tema: scuro"><span class="testo-btn">Tema: scuro</span></button>
      <button type="button" class="theme oled-btn" id="oled-toggle" aria-pressed="true" title="Nero OLED: sfondo nero e colore principale bianco">OLED</button>
      <button type="button" class="theme solo-icona anim-btn" id="anim-toggle" aria-pressed="true" aria-label="Animazioni: attive" title="Animazioni: attive"><span class="testo-btn">Animazioni: attive</span></button>
    </nav>
  </div>
  <div class="avanzamento" aria-hidden="true"></div>
</header>"""


def piede(radice):
    return f"""<footer class="piede">
  <div class="piede-in">
    <div>
      <h2>Appunti di Informatica</h2>
      <p>Appunti del primo anno di Informatica all'Università di Torino, A.A. 2026/27, per i canali A, B e C. Possono contenere errori; non mi assumo alcuna responsabilità: leggi le <a href="{REPO}/blob/main/AVVERTENZE.md">avvertenze</a>.</p>
      <p>Le citazioni dalle slide restano dei rispettivi autori. Per date, regole e scadenze fanno fede solo Moodle, il sito del corso di laurea ed Esse3.</p>
    </div>
    <div>
      <h2>Il sito</h2>
      <ul>
        <li><a href="{radice}index.html#corsi">Corsi del primo anno</a></li>
        <li><a href="{GH}unito_informatica.md">Informazioni generali</a></li>
        <li><a href="{REPO}/tree/main/contesto_ai">Contesto per le AI</a></li>
        <li><a href="{OFA}">Guida all'OFA di matematica</a></li>
      </ul>
    </div>
    <div>
      <h2>Progetto</h2>
      <ul>
        <li><a href="{REPO}">Sorgente su GitHub</a></li>
        <li><a href="https://t.me/rapsodico">Telegram @rapsodico</a></li>
        <li><a href="{LICENZA}">Licenza CC BY-NC-SA 4.0</a></li>
        <li><a href="{SITO_EN}" hreflang="en" lang="en">English version</a></li>
      </ul>
    </div>
    <div class="piede-fondo"><span>Appunti di DonFlammer · CC BY-NC-SA 4.0 · non è un sito dell'Università di Torino</span><button type="button" class="interruttore" id="interruttore-moto" aria-pressed="false"><span class="pista" aria-hidden="true"></span>Animazioni</button></div>
  </div>
</footer>
<script src="{radice}assets/js/appunti.js" defer></script>
<script src="{radice}assets/js/studio.js" defer></script>"""


def meta(testo, nome):
    m = re.search(rf'<meta\s+name="{nome}"\s+content="([^"]*)"', testo)
    return html.unescape(m.group(1)).strip() if m else ""


def lezioni(sigla):
    """Legge titolo, codice, data e modulo di ogni lezione della materia."""
    cartella = APPUNTI / sigla
    trovate = []
    for f in sorted(cartella.glob("*.html")) if cartella.is_dir() else []:
        if f.name == "index.html":
            continue
        testo = f.read_text(encoding="utf-8")
        titolo = re.search(r"<title>(.*?)</title>", testo, re.S)
        titolo = html.unescape(titolo.group(1)).strip() if titolo else f.stem
        codice = meta(testo, "lezione") or f.stem.split("_")[0]
        titolo = re.sub(rf"^\s*{re.escape(codice)}\s*·\s*", "", titolo)
        trovate.append({"file": f.name, "codice": codice, "titolo": titolo, "sigla": sigla,
                        "data": meta(testo, "data"), "modulo": meta(testo, "modulo")})
    return sorted(trovate, key=lambda l: (l["modulo"], l["codice"]))


def data_it(iso):
    m = re.fullmatch(r"(\d{4})-(\d{2})-(\d{2})", iso)
    return f"{m.group(3)}/{m.group(2)}/{m.group(1)}" if m else iso


def elenco_lezioni(lez):
    # le lezioni scritte in anticipo (per esempio dalle dispense complete) non hanno ancora una data
    righe = "\n".join(
        f'      <li><span class="nodo" aria-hidden="true">{e(l["codice"])}</span><a href="{e(l["file"])}">'
        f'<span class="tit">{e(l["titolo"])}</span><span class="tenue">{e((PARTI.get(l["modulo"], l["modulo"]) + " · ") if l["modulo"] else "")}Lezione {e(l["codice"])}</span>'
        + (f'<time datetime="{e(l["data"])}">{e(data_it(l["data"]))}</time>' if l["data"] else "") + '</a></li>'
        for l in lez)
    return f'<ol class="lezioni">\n{righe}\n    </ol>'


VUOTO = '<p class="vuoto">Ancora nessuna lezione: gli appunti arrivano lezione per lezione.</p>'


def pagina_materia(m, lez):
    url_en = f"{SITO_EN}notes/{SIGLA_EN.get(m['sigla'], m['sigla'])}/"
    sem = f"{m['semestre']}° semestre"
    etichetta = " · ".join(x for x in ["Primo anno", sem, m["insegnamento"], m.get("extra", "")] if x)
    if lez:
        lede = ("Seguo il canale B: gli appunti di ogni lezione sono scritti sulle slide del canale B, "
                "con i riferimenti ai canali A e C. Programma ufficiale ed esame sono comuni, quindi valgono in gran parte "
                "anche per A e C, ma slide, ordine, esempi e parti del programma svolte possono cambiare. "
                "Docenti, orari, Moodle ed esame "
                "per tutti e tre i canali sono nella scheda del corso.")
    elif m["semestre"] == 2:
        lede = ("Il corso inizia nel secondo semestre: per ora c'è la scheda con docenti, esame e materiale "
                "per i canali A, B e C. Gli appunti arriveranno lezione per lezione, sulle slide del canale B, "
                "quello che seguo: dovrebbero valere in gran parte anche per A e C, ma docenti, slide, ordine "
                "ed esempi possono cambiare.")
    else:
        lede = ("Gli appunti arrivano lezione per lezione, sulle slide del canale B, quello che seguo, con i "
                "riferimenti ai canali A e C: programma ufficiale ed esame sono comuni, ma slide, esempi e parti del "
                "programma svolte possono cambiare. "
                "Intanto la scheda del corso ha docenti, orari, Moodle ed esame per tutti e tre i canali.")
    if m.get("lede"):
        lede = m["lede"]
    nota = f'\n    <p class="nota">{e(m["nota"])}</p>' if m.get("nota") else ""

    if not lez:
        corpo = VUOTO
    elif m.get("moduli"):
        blocchi = []
        for sigla_mod, nome_mod in m["moduli"]:
            parte = [l for l in lez if l["modulo"] == sigla_mod]
            blocchi.append(f'<h3 class="modulo-titolo">{e(nome_mod)}</h3>\n    ' + (elenco_lezioni(parte) if parte else VUOTO))
        altre = [l for l in lez if l["modulo"] not in {s for s, _ in m["moduli"]}]
        if altre:
            blocchi.append('<h3 class="modulo-titolo">Altre lezioni</h3>\n    ' + elenco_lezioni(altre))
        corpo = "\n    ".join(blocchi)
    else:
        corpo = elenco_lezioni(lez)

    dati = [("Esame", e(m["esame"]), "")]
    if m.get("appelli"):
        dati.append(("Appelli", e(m["appelli"]), ""))
    dati += [("CFU", str(m["cfu"]), " grande"), ("Lezioni", str(len(lez)) if lez else "—", " grande")]
    scheda = "\n".join(f'      <div class="dato"><dt>{t}</dt><dd class="{c.strip()}">{v}</dd></div>' if c else
                       f'      <div class="dato"><dt>{t}</dt><dd>{v}</dd></div>' for t, v, c in dati)
    link = "\n".join(f'      <li><a href="{GH}{u}">{e(t)}</a></li>' for t, u in m["link"])
    # pagine Moodle del corso: un id di I-Learn, un indirizzo completo, oppure None se la pagina non esiste ancora
    moodle = "\n".join(
        f'      <li><span class="manca">{e(t)}</span></li>' if dove is None else
        f'      <li><a href="{dove if isinstance(dove, str) else MOODLE + str(dove)}">{e(t)}</a></li>' for t, dove in m["moodle"])
    titolo = f"{m['nome']} · Appunti di Informatica UniTo"
    descr = f"Appunti di {m['nome']} (Informatica UniTo, A.A. 2026/27): lezioni, esame e scheda del corso per i canali A, B e C."
    return f"""<!doctype html>
<html lang="it">
<head>
{testa_html("../../", titolo, descr, url_en)}
<!-- pagina generata da strumenti/genera_materie.py: non modificarla a mano -->
</head>
<body class="materia" data-corso="{m['sigla']}">
{testata("../../", url_en, "corsi")}
<main class="pagina" id="contenuto">
  <header class="testata rivela">
    <nav class="briciole" aria-label="Percorso"><a href="../../index.html">Appunti</a><span class="sep">/</span><span>{e(m['nome'])}</span></nav>
    <span class="etichetta">{e(etichetta)}</span>
    <h1>{e(m['nome'])}</h1>
    <p class="intro">{e(lede)}</p>{nota}
  </header>
  <dl class="scheda n{len(dati)} rivela" style="--i:1">
{scheda}
  </dl>

  <section class="sezione" aria-labelledby="h-lezioni">
    <div class="sez-testa"><h2 id="h-lezioni">Lezioni</h2></div>
    {corpo}
  </section>

  <section class="sezione" aria-labelledby="h-link">
    <div class="sez-testa"><h2 id="h-link">Per approfondire</h2><p>Le schede in Markdown del contesto per le AI: docenti, orari e Moodle dei tre canali, esame e materiale.</p></div>
    <ul class="link-lista">
{link}
    </ul>
  </section>

  <section class="sezione" aria-labelledby="h-moodle">
    <div class="sez-testa"><h2 id="h-moodle">Moodle</h2><p>Le pagine del corso su Moodle, A.A. 2026/27. Di solito serve il login UniTo; alcune si aprono anche come ospite. Tutti i corsi del primo anno: <a href="{MOODLE_PRIMO_ANNO}">elenco su Moodle</a>.</p></div>
    <ul class="link-lista">
{moodle}
    </ul>
  </section>
</main>
{piede("../../")}
</body>
</html>
"""


def scheda_corso(m, lez, k, compatta=False):
    base = f"appunti/{m['sigla']}/"
    date = f'\n        <p class="date">Appelli: {e(m["appelli"])}</p>' if m.get("appelli") and not compatta else ""
    n = len(lez)
    conta = f"{n} {'lezione' if n == 1 else 'lezioni'}" if n else "scheda del corso"
    return f"""      <a class="corso rivela" style="--i:{k}" data-corso="{m['sigla']}" href="{base}index.html">
        <span class="riga"><span class="chip c">{e(m['insegnamento'])}</span><span class="chip">{m['cfu']} CFU</span>{f'<span class="chip">{e(m["extra"])}</span>' if m.get("extra") else ''}</span>
        <h3>{e(m['nome'])}</h3>
        <p class="esame">{e(m['esame'])}</p>{date}
        <span class="piede-card"><span>{conta}</span><span class="apri">apri →</span></span>
      </a>"""


def primo_appello(m):
    """Giorno e mese del primo appello citato, per ordinare il riquadro «Prossimi appelli»."""
    d = re.search(r"(\d{2})/(\d{2})", m.get("appelli", ""))
    return (int(d.group(2)) + (12 if int(d.group(2)) >= 9 else 0), int(d.group(1))) if d else (99, 99)


def blocco_appelli():
    corsi = sorted((m for m in MATERIE if m["semestre"] == 1 and m.get("appelli")), key=primo_appello)
    voci = []
    for m in corsi:
        giorno = re.search(r"\d{2}/\d{2}", m["appelli"]).group(0)
        voci.append(f'        <li><span class="quando">{e(giorno)}</span>'
                    f'<span class="cosa">{e(m["nome"])}</span><span class="dett">{e(m["appelli"])}</span></li>')
    voci = "\n".join(voci)
    return (f"{INIZIO_APP} (generato da strumenti/genera_materie.py: non modificare a mano) -->\n"
            f'    <aside class="pannello prossimi rivela" style="--i:2" aria-labelledby="h-appelli">\n'
            f'      <h2 id="h-appelli">Primi appelli · sessione invernale</h2>\n      <ol>\n{voci}\n      </ol>\n'
            f'      <p class="fonte">Date dalle schede dei corsi; fanno fede Esse3 e il Moodle del corso.</p>\n'
            f"    </aside>\n    {FINE_APP}")


def blocco_index(tutte):
    """Sezioni dei corsi della pagina iniziale, con le ultime lezioni."""
    nomi = {m["sigla"]: m["nome"] for m in MATERIE}
    ultime = sorted((l for lez in tutte.values() for l in lez if l["data"]),
                    key=lambda l: (l["data"], l["sigla"], l["modulo"], l["codice"]), reverse=True)[:5]
    if ultime:
        righe = "\n".join(
            f'        <li style="--c:var(--c-{l["sigla"].lower()})"><time datetime="{e(l["data"])}">{e(data_it(l["data"]))}</time>'
            f'<a href="appunti/{l["sigla"]}/{e(l["file"])}">{e((PARTI.get(l["modulo"], l["modulo"]) + " · ") if l["modulo"] else "")}{e(l["codice"])} · {e(l["titolo"])}</a>'
            f'<span class="di">{e(nomi[l["sigla"]])}</span></li>'
            for l in ultime)
        recenti = f'<ol class="flusso">\n{righe}\n      </ol>'
    else:
        recenti = '<p class="vuoto">Ancora nessuna lezione.</p>'
    sem1 = [m for m in MATERIE if m["semestre"] == 1]
    sem2 = [m for m in MATERIE if m["semestre"] == 2]
    schede1 = "\n".join(scheda_corso(m, tutte[m["sigla"]], k) for k, m in enumerate(sem1))
    schede2 = "\n".join(scheda_corso(m, tutte[m["sigla"]], k, True) for k, m in enumerate(sem2))
    return (f"{INIZIO} (generato da strumenti/genera_materie.py: non modificare a mano) -->\n"
            f'  <section class="sezione" id="corsi" aria-labelledby="h-sem1">\n'
            f'    <div class="sez-testa rivela"><div><span class="etichetta">Primo semestre · da settembre</span><h2 id="h-sem1">I corsi di adesso</h2></div>'
            f'<p>Appunti lezione per lezione e schede con esame, appelli, docenti e orari dei tre canali.</p></div>\n'
            f'    <div class="griglia-corsi">\n{schede1}\n    </div>\n'
            f'    <div class="ultime rivela"><h3>Ultime lezioni</h3>\n      {recenti}\n    </div>\n  </section>\n\n'
            f'  <section class="sezione" id="secondo-semestre" aria-labelledby="h-sem2">\n'
            f'    <div class="sez-testa rivela"><div><span class="etichetta">Secondo semestre · da febbraio 2027</span><h2 id="h-sem2">I corsi che verranno</h2></div>'
            f'<p>Per ora ci sono le schede con docenti, esame e materiale; gli appunti arriveranno con le lezioni.</p></div>\n'
            f'    <div class="griglia-corsi compatta">\n{schede2}\n    </div>\n  </section>\n  {FINE}')


INIZIO_APP = "<!-- APPELLI:INIZIO"
FINE_APP = "<!-- APPELLI:FINE -->"


def sostituisci(testo, inizio, fine, nuovo):
    i, j = testo.find(inizio), testo.find(fine)
    if i < 0 or j < 0:
        raise SystemExit(f"index.html: mancano i segnaposto {inizio} / {fine}")
    return testo[:i] + nuovo + testo[j + len(fine):]


def lezioni_markdown():
    """Le lezioni scritte in Markdown (genera_html: true) diventano pagine con strumenti/lezioni.mjs (serve Node.js)."""
    script = RADICE / "strumenti" / "lezioni.mjs"
    if not script.exists():
        return
    if not (RADICE / "strumenti" / "node_modules" / "katex").is_dir():
        raise SystemExit("mancano i pacchetti di Node: esegui «npm ci» nella cartella strumenti, poi rilancia")
    esito = subprocess.run(["node", str(script)], cwd=RADICE)
    if esito.returncode:
        raise SystemExit("strumenti/lezioni.mjs ha trovato errori: correggi il Markdown e rilancia")


def barre_lezioni():
    """Barra in alto e piede delle lezioni generate dal Markdown, uguali a quelli delle altre pagine."""
    for pagina in sorted(APPUNTI.glob("*/*.html")):
        if pagina.name == "index.html":
            continue
        testo = pagina.read_text(encoding="utf-8")
        if "<!-- TESTATA:INIZIO" not in testo:
            continue
        en = re.search(r'<link rel="alternate" hreflang="en" href="([^"]+)"', testo)
        nuovo = sostituisci(testo, "<!-- TESTATA:INIZIO", "<!-- TESTATA:FINE -->",
                            f"<!-- TESTATA:INIZIO (generata da strumenti/genera_materie.py) -->\n"
                            f"{testata('../../', en.group(1) if en else SITO_EN)}\n<!-- TESTATA:FINE -->")
        nuovo = sostituisci(nuovo, "<!-- PIEDE:INIZIO", "<!-- PIEDE:FINE -->",
                            f"<!-- PIEDE:INIZIO (generato da strumenti/genera_materie.py) -->\n{piede('../../')}\n<!-- PIEDE:FINE -->")
        if nuovo != testo:
            pagina.write_text(nuovo, encoding="utf-8", newline="\n")


def main():
    lezioni_markdown()
    barre_lezioni()
    tutte = {}
    for m in MATERIE:
        lez = lezioni(m["sigla"])
        tutte[m["sigla"]] = lez
        cartella = APPUNTI / m["sigla"]
        cartella.mkdir(parents=True, exist_ok=True)
        (cartella / "index.html").write_text(pagina_materia(m, lez), encoding="utf-8", newline="\n")
        print(f"appunti/{m['sigla']}/index.html - {len(lez)} lezioni")

    testo = INDEX.read_text(encoding="utf-8")
    testo = sostituisci(testo, INIZIO, FINE, blocco_index(tutte))
    testo = sostituisci(testo, INIZIO_APP, FINE_APP, blocco_appelli())
    # barra in alto e piede della pagina iniziale: uguali a quelli delle altre pagine
    testo = sostituisci(testo, "<!-- TESTATA:INIZIO", "<!-- TESTATA:FINE -->",
                        f"<!-- TESTATA:INIZIO (generata da strumenti/genera_materie.py) -->\n{testata('', SITO_EN)}\n<!-- TESTATA:FINE -->")
    testo = sostituisci(testo, "<!-- PIEDE:INIZIO", "<!-- PIEDE:FINE -->",
                        f"<!-- PIEDE:INIZIO (generato da strumenti/genera_materie.py) -->\n{piede('')}\n<!-- PIEDE:FINE -->")
    INDEX.write_text(testo, encoding="utf-8", newline="\n")
    print("index.html aggiornato")
    aggiorna_csp()


# ---------- politica di sicurezza dei contenuti (CSP) ----------
# GitHub Pages non permette intestazioni HTTP: la politica va in un <meta> subito dopo il charset, in ogni pagina.
# Solo gli script del sito più quelli in linea di ciascuna pagina (con la loro impronta SHA-256), niente gestori in linea
# (onclick, onerror…), niente risorse esterne. Si ricalcola a ogni esecuzione: dopo aver scritto o modificato una lezione
# basta rilanciare questo script, altrimenti lo script in linea della lezione verrebbe bloccato.
CSP = ("default-src 'none'; script-src 'self'{impronte}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; "
       "font-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'")
ESCLUSE = {".git", "slide", "slides", "moodle", "guida_degli_studenti_di", "node_modules", "__pycache__"}


def aggiorna_csp(radice=RADICE):
    for pagina in sorted(radice.rglob("*.html")):
        if ESCLUSE.intersection(pagina.relative_to(radice).parts):
            continue
        testo = pagina.read_text(encoding="utf-8")
        impronte = []
        for m in re.finditer(r"<script(\s[^>]*)?>(.*?)</script>", testo, re.S | re.I):
            attributi, codice = m.group(1) or "", m.group(2)
            if re.search(r"\bsrc\s*=", attributi, re.I):
                continue
            tipo = re.search(r"\btype\s*=\s*[\"']?([^\"'\s>]+)", attributi, re.I)
            if tipo and tipo.group(1).lower() not in ("text/javascript", "application/javascript", "module"):
                continue                                   # blocchi di dati (application/json): non si eseguono
            h = base64.b64encode(hashlib.sha256(codice.replace("\r\n", "\n").encode("utf-8")).digest()).decode()
            if h not in impronte:
                impronte.append(h)
        meta = ('<meta http-equiv="Content-Security-Policy" content="'
                + CSP.format(impronte="".join(f" 'sha256-{h}'" for h in impronte)) + '">\n'
                + '<meta name="referrer" content="strict-origin-when-cross-origin">\n')
        memoria = '../' * (len(pagina.relative_to(radice).parts) - 1) + 'assets/js/memoria.js'
        meta += f'<script src="{memoria}"></script>\n'
        pulito = re.sub(r'<script src="[^"]*assets/js/memoria\.js"></script>\n', '', testo)
        nuovo = re.sub(r'<meta http-equiv="Content-Security-Policy"[^>]*>\n|<meta name="referrer"[^>]*>\n', "", pulito)
        nuovo, n = re.subn(r'<meta charset="utf-8">\n', lambda m: m.group(0) + meta, nuovo, count=1, flags=re.I)
        if not n:
            raise SystemExit(f'{pagina}: manca <meta charset="utf-8"> in testa')
        if nuovo != testo:
            pagina.write_text(nuovo, encoding="utf-8", newline="\n")
            print(f"CSP aggiornata: {pagina.relative_to(radice).as_posix()} ({len(impronte)} script in linea)")


if __name__ == "__main__":
    main()
