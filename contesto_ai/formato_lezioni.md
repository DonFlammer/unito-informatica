# Formato dei file delle lezioni

I file delle lezioni più recenti (`<CORSO>/lezioni/*.md` con `genera_html: true` nell'intestazione) sono la fonte da cui viene generata la pagina HTML della lezione sul sito, con `strumenti/lezioni.mjs`. Il contenuto è lo stesso; il Markdown ha in più qualche convenzione, spiegata qui per chi lo legge (persone o AI).

## Intestazione YAML

`corso`, `modulo` (per MDAG: `MD` Matematica Discreta, `AG` Algebra lineare e Geometria), `lezione` (codice, per esempio `01B` o `L05`), `titolo`, `data` (solo per le lezioni già svolte), `docenti`, `fonte` (slide o dispense usate), `scheda` (i dati mostrati in cima alla pagina), `materiale` (`slide` o `dispense`), più i campi tecnici per la pagina (`descrizione`, `lede`, `appunti_html`, `genera_html`).

## Struttura

- `## In breve`: i punti chiave della lezione. Subito dopo si parte con il contenuto: niente sezione introduttiva su che cosa serve sapere o che cosa si saprà fare alla fine.
- Sezioni `## Titolo (slide 2–5)` o `## Titolo (pp. 20–21)`: tra parentesi le slide o le pagine delle dispense da cui viene la sezione.
- `## Verso l'esame`, `## Quiz`, `## Esercizi`, `## Domande di ripasso`, `## Glossario`, `## Checklist`, `## Fonti`.

Le lezioni riscritte nel formato nuovo (Algebra lineare e Geometria `MDAG/lezioni/L*.md`, Matematica Discreta `D*.md`, Fondamenti dell'Informatica) hanno in più `## I simboli di questa lezione` (una tabella: simbolo, come si legge, che cosa vuol dire, esempio) prima di «Verso l'esame». In ogni sezione l'ordine è: un esempio concreto, l'idea a parole, poi l'enunciato delle dispense in un riquadro, seguito da un paragrafo «**Come si legge.**» che lo traduce a parole.

## Formule

LaTeX tra `$…$` (nel testo) e `$$…$$` (in un blocco a sé). Abbreviazioni: `\R \N \Z \Q \C \K` per gli insiemi numerici e il campo, `\rk` rango, `\Span`, `\Ker` nucleo, `\Imm` immagine, `\tr` traccia, `\Mat`, `\sgn`, `\id`. `{}^tA` è la trasposta.

## Riquadri

Righe che cominciano con `> [!TIPO] titolo`:

| Tipo | Significato |
|---|---|
| `DEF` | definizione da sapere |
| `PROP`, `TEOREMA`, `LEMMA`, `COROLLARIO` | enunciati, con la numerazione delle dispense o delle slide |
| `ESEMPIO` | esempio svolto |
| `IDEA`, `METODO` | l'idea intuitiva, il procedimento passo per passo |
| `TRAPPOLA` | errore tipico |
| `ESAME` | conta all'esame |
| `OLTRE` | **non** viene dal materiale del corso: aggiunta degli appunti (argomenti, metodi, collegamenti) |
| `NOTA`, `OSSERVAZIONE` | osservazioni e avvisi |
| `DIM` | dimostrazione (nella pagina è chiusa e si apre con un clic) |
| `APPROFONDIMENTO` | enunciati più formali o curiosità che si possono saltare (nella pagina è chiuso) |
| `RICORDA` | «Da ricordare»: il succo di una sezione in poche righe |
| `RIPASSO` | richiamo di matematica di scuola che serve in quel punto |
| `CANALI` | differenze e corrispondenze tra i canali A, B e C |

Gli enunciati nei riquadri `DEF`, `PROP`, `TEOREMA` seguono le slide o le dispense, con la loro numerazione. Gli argomenti che vanno oltre il materiale del corso stanno in un riquadro `OLTRE` o in una sezione con «oltre le slide/dispense» nel titolo. Le spiegazioni a parole, gli esempi con i numeri, i riquadri `RIPASSO` e i «Prova tu» sono degli appunti. Le lezioni più vecchie, come `PROG1/lezioni/01A_primo_algoritmo.md`, usano ancora il segno **[OLTRE LE SLIDE]**.

## Esercizi, domande, quiz

- `::: esercizio livello titolo` … `::: soluzione` … `:::`, con livello `base`, `medio`, `difficile` o `esame`.
- `::: domanda testo della domanda` … risposta … `:::`.
- `::: prova testo della domanda` … risposta … `:::`: un «Prova tu» in mezzo alla spiegazione, cioè una domanda breve con la risposta subito sotto (nella pagina è nascosta finché non la apri).
- Blocco `quiz`: `D:` domanda; `+` risposta giusta, `-` risposta sbagliata (nella pagina l'ordine viene mescolato); `N:` risposta numerica; `=` spiegazione.

## Altri blocchi

- `glossario`: una riga per termine, `Termine | definizione`.
- `checklist`: le voci «So …» da spuntare.
- `grafico`: una figura statica (punti, vettori, rette, poligoni, cerchi), una riga per elemento.
- `widget`: uno strumento interattivo della pagina HTML (piano complesso, vettori, matrici 2×2, calcolatrice di Gauss, Ruffini, spazio in 3D, simulatore della macchina di Von Neumann, porte logiche con `modo: porte`, `modo: flipflop`, `modo: esadecimale` o `modo: memoria`; testo, colori, suoni e numeri in bit con `widget codifica` e `modo: testo`, `colori`, `suono`, `binario`, `divisioni` o `somma`; numeri con il segno e con la virgola, parità e codici con `modo: interi` (chiavi `bit`, `n`: lo stesso byte senza segno, in complemento a 2 e in eccesso), `somma` con `complemento: si` e `n`, `virgola` (formato a 8 bit del libro: chiave `bit` per decodificare o `numero` per codificare), `parita` (chiavi `bit`, `parita: dispari|pari`) e `hamming` (chiave `parola`, codice a 6 bit del libro). Nel Markdown restano solo i parametri iniziali.

## Riassunti settimanali

Ogni settimana, per ogni corso, un riassunto delle lezioni in `<CORSO>/riassunti/settimana_NN.md` (per MDAG uno per parte: `settimana_NN_MD.md` e `settimana_NN_AG.md`). Il formato è quello delle lezioni, con `tipo: riassunto` e `lezione: S<N>` nell'intestazione: la pagina va in `appunti/<CORSO>/riassunto_settimana_NN….html` e compare nella sezione «Riassunti settimanali» in fondo alla pagina del corso, non tra le lezioni. Contiene «In breve», una sezione per lezione con i punti, le tabelle e i metodi da sapere, «Verso l'esame», «Domande di ripasso» e le «Fonti» con i link alle lezioni complete.
