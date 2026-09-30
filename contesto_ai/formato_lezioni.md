# Formato dei file delle lezioni

I file delle lezioni più recenti (`<CORSO>/lezioni/*.md` con `genera_html: true` nell'intestazione) sono la fonte da cui viene generata la pagina HTML della lezione sul sito, con `strumenti/lezioni.mjs`. Il contenuto è lo stesso; il Markdown ha in più qualche convenzione, spiegata qui per chi lo legge (persone o AI).

## Intestazione YAML

`corso`, `modulo` (per MDAG: `MD` Matematica Discreta, `AG` Algebra lineare e Geometria), `lezione` (codice, per esempio `01B` o `L05`), `titolo`, `data` (solo per le lezioni già svolte), `docenti`, `fonte` (slide o dispense usate), `scheda` (i dati mostrati in cima alla pagina), `materiale` (`slide` o `dispense`), più i campi tecnici per la pagina (`descrizione`, `lede`, `file_en`, `appunti_html`, `genera_html`).

## Struttura

- `## In breve`: i punti chiave della lezione.
- Sezioni `## Titolo (slide 2–5)` o `## Titolo (pp. 20–21)`: tra parentesi le slide o le pagine delle dispense da cui viene la sezione.
- `## Verso l'esame`, `## Quiz`, `## Esercizi`, `## Domande di ripasso`, `## Glossario`, `## Checklist`, `## Fonti`.

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
| `OLTRE` | **non** viene dal materiale del corso: aggiunta degli appunti (esempi, collegamenti, richiami) |
| `NOTA`, `OSSERVAZIONE` | osservazioni |
| `DIM` | dimostrazione |
| `CANALI` | differenze e corrispondenze tra i canali A, B e C |

Tutto ciò che sta fuori da un riquadro `OLTRE` (o da una sezione con «oltre le slide/dispense» nel titolo) segue le slide o le dispense. Le lezioni più vecchie, come `PROG1/lezioni/01A_primo_algoritmo.md`, usano ancora il segno **[OLTRE LE SLIDE]**.

## Esercizi, domande, quiz

- `::: esercizio livello titolo` … `::: soluzione` … `:::`, con livello `base`, `medio`, `difficile` o `esame`.
- `::: domanda testo della domanda` … risposta … `:::`.
- Blocco `quiz`: `D:` domanda; `+` risposta giusta, `-` risposta sbagliata (nella pagina l'ordine viene mescolato); `N:` risposta numerica; `=` spiegazione.

## Altri blocchi

- `glossario`: una riga per termine, `Termine | definizione`.
- `checklist`: le voci «So …» da spuntare.
- `grafico`: una figura statica (punti, vettori, rette, poligoni, cerchi), una riga per elemento.
- `widget`: uno strumento interattivo della pagina HTML (piano complesso, vettori, matrici 2×2, calcolatrice di Gauss, Ruffini, spazio in 3D, simulatore della macchina di Von Neumann). Nel Markdown restano solo i parametri iniziali.
