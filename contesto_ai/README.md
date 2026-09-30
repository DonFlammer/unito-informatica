# Contesto per le AI

Questa cartella raccoglie in Markdown tutto ciò che serve a un'AI per aiutare negli studi del primo anno di Informatica a UniTo **senza rifare le ricerche da zero**: com'è organizzato il corso di laurea, come sono fatti gli esami, le schede di tutti i corsi per i canali A, B e C, gli appunti di ogni lezione ed esercizi d'esame svolti. Io, DonFlammer, che curo questa raccolta, seguo il **canale B**: gli appunti delle lezioni sono scritti sulle slide del canale B; programma ufficiale ed esame sono comuni ai tre canali, quindi dovrebbero valere in gran parte anche per A e C, ma slide, ordine degli argomenti, esempi e parti del programma effettivamente svolte possono cambiare.

> **⚠️ Avvertenze.** Le ricerche (corso di laurea, schede dei corsi, esami, esercizi d'esame) vengono da fonti pubbliche e, per alcune schede (Fondamenti, in particolare il canale B e la pagina d'esame su Moodle Esami, e MDAG), anche da pagine Moodle visibili solo con il login UniTo, consultate da me; gli appunti delle lezioni rielaborano le slide dei docenti. Sono accurati e con fonti, ma possono contenere errori o dati superati. **Non mi assumo alcuna responsabilità, per niente**; chi li usa lo fa a proprio rischio e deve verificare le informazioni importanti sulle fonti ufficiali. Aggiorno i file lezione per lezione, niente di più. Testo completo: [../AVVERTENZE.md](../AVVERTENZE.md).

## Uso rapido

**Un solo file:** allega `_TUTTO_IN_UNO.md`, che contiene tutti gli altri file (viene rigenerato a ogni aggiornamento).

**Oppure solo i file che servono:** sempre `istruzioni_per_ai.md` e `studente.md`, poi `unito_informatica.md` e la scheda del corso di cui parli (per esempio `PROG1/corso.md` più la lezione in `PROG1/lezioni/`).

Prompt da incollare insieme ai file:

```text
Ti allego i file di contesto dei miei studi (Informatica, Università di Torino, 1° anno, A.A. 2026/27, canale <A/B/C>).
Leggi prima istruzioni_per_ai.md e seguine le regole; usa questi file come fonte principale
invece di rifare le ricerche, e dimmi se qualcosa ti sembra superato.
La mia richiesta: <scrivi qui la domanda>
```

## Mappa dei file

| File | Contenuto |
|---|---|
| `istruzioni_per_ai.md` | regole per l'AI: come usare le fonti, politica dei docenti sugli LLM, regole d'esame per il codice C, formato degli appunti |
| `studente.md` | chi sono e come voglio essere aiutato (chi fa un fork può adattarlo a sé) |
| `unito_informatica.md` | corso di laurea, canali e turni, **docenti e orari per canale**, appelli del 1° semestre, calendario 2026/27, regole d'esame, Moodle, gruppi Telegram |
| `PROG1/corso.md` | Programmazione I: docenti e orari dei tre canali, sequenza delle lezioni per canale, esame e regole, trappole, convenzioni, materiale |
| `PROG1/esercizi_esame.md` | esercizi d'esame tipo di Programmazione I con soluzioni verificate |
| `PROG1/indice_lezioni.md` | lezioni già studiate con concetti chiave e collegamenti |
| `PROG1/lezioni/*.md` | appunti completi di ogni lezione (slide del canale B, con i riferimenti ad A e C) |
| `MDAG/indice_lezioni.md` | le 26 lezioni di Algebra lineare e Geometria con pagine delle dispense, argomenti e collegamenti |
| `MDAG/lezioni/*.md` | appunti di Algebra lineare e Geometria, lezione per lezione (dispense del corso, comuni ai canali A, B e C) |
| `formato_lezioni.md` | come sono scritti i file delle lezioni: riquadri, quiz, esercizi, formule |
| `FDA/corso.md` | Fondamenti dell'Informatica |
| `MDAG/corso.md` | Matematica Discreta, Algebra e Geometria |
| `ANMAT/corso.md` | Analisi Matematica |
| `ARCH/corso.md` | Architettura degli Elaboratori |
| `PROG2/corso.md` | Programmazione II |
| `RO/corso.md` | Ricerca Operativa |
| `INGLESE/corso.md` | Lingua Inglese I (anche riconoscimento delle certificazioni) |
| `_TUTTO_IN_UNO.md` | tutti i file precedenti uniti (generato da `strumenti/unisci_contesto.py`) |

Gli stessi appunti in versione HTML interattiva sono online: https://donflammer.github.io/unito-informatica/
English version of this folder, for those who don't speak Italian (an English translation; if the two differ, the Italian version prevails): [ai_context/](https://github.com/DonFlammer/unito-computer-science/tree/main/ai_context) in DonFlammer/unito-computer-science.
Sono DonFlammer · Telegram @rapsodico (https://t.me/rapsodico), senza impegno di risposta.

Ultimo aggiornamento: 30/09/2026 (Algebra lineare e Geometria, tutte le lezioni L01–L26 e indice delle lezioni; Programmazione I, lezioni 01B e 02A; formato delle lezioni in `formato_lezioni.md`). Prima: 28/09/2026 (schede di tutti i corsi del 1° anno per i canali A, B, C; Programmazione I, lezione 01A; Fondamenti, programma del canale B, regole ufficiali d'esame e libro; MDAG, Moodle 2026/27 e mercoledì per canale; traduzione inglese di tutto il repository in DonFlammer/unito-computer-science).
