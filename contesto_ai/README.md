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
| `MDAG/indice_lezioni.md` | le 26 lezioni della parte 2 di MDAG (modB, Algebra lineare e Geometria) con pagine delle dispense, argomenti e collegamenti |
| `MDAG/lezioni/*.md` | appunti di MDAG lezione per lezione: parte 2 (modB, Algebra lineare e Geometria), L01–L26 sulle dispense del corso; parte 1 (modA, Matematica Discreta), D01 e seguenti sul libro di Mori. Programma ed esame sono comuni ai canali A, B e C |
| `<CORSO>/riassunti/*.md` | riassunti settimanali: le lezioni di una settimana in poche pagine, per ripassare (PROG1, FDA, MDAG parte 1 e parte 2) |
| `FDA/lezioni/*.md` | appunti di Fondamenti dell'Informatica lezione per lezione (canale B, sul libro di testo, con i riferimenti ad A e C) |
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
Sono DonFlammer · Telegram @rapsodico (https://t.me/rapsodico), senza impegno di risposta.

Ultimo aggiornamento: 07/10/2026 (Programmazione I: lezione 02C, indirizzi, scanf e puntatori). Prima: 06/10/2026 (Programmazione I: lezione 02B, memoria e variabili, assegnamento ed espressioni; Algebra lineare e Geometria: tutte le lezioni ora sono scritte con più esempi e spiegazioni a parole, riscritte L03, L04, L06, L07, L09, L10, L12, L13, L14, L15, L16, L18, L20, L21, L23, L24, L25 e L26). Prima: 05/10/2026 (Matematica Discreta: lezione D03, prodotto cartesiano e relazioni di equivalenza; Fondamenti dell'Informatica: lezione 03, complemento a 2, notazione in eccesso e virgola mobile; lezioni 04, compressione ed errori di comunicazione, e 05, esercizi sulla parte 1, scritte prima delle lezioni del 08 e del 09/10; strumenti interattivi per complemento a 2, virgola mobile, parità e distanza di Hamming; Programmazione I: Laboratorio 01, la prima lezione di laboratorio; tolta la versione inglese). Prima: 03/10/2026 (riassunti settimanali in fondo alle pagine dei corsi, a partire dalla settimana 1; Matematica Discreta: lezione D02 del 02/10, unione e intersezione, complementare e leggi di De Morgan, assiomi di Peano e induzione, insieme delle parti, ricoprimenti e partizioni; Fondamenti dell'Informatica: la lezione del 02/10 torna a essere la 02, con esercizi nuovi su overflow e significato dei bit). Prima: 02/10/2026 (Fondamenti dell'Informatica, canale B: la lezione 01 ora copre anche memoria centrale e memorie di massa, §1.2–1.3, con la data del 01/10; nuova lezione 02, §1.4–1.5: testo in ASCII e UTF-8, colori, suoni, sistema binario; nella scheda del corso i riassunti delle lezioni del canale B). Prima: 01/10/2026 (prima lezione di Matematica Discreta, D01, e di Fondamenti dell'Informatica, 01; le due parti di MDAG si chiamano anche modA e modB, come nell'orario; tolta da tutte le lezioni la sezione «Prima di cominciare»; tra i materiali di MDAG gli appunti di Matematica Discreta di uno studente, Rigurgiti di Unicorno; MDAG: gli appunti di Algebra lineare e Geometria sono quelli della parte 2 del corso; lezioni L01, L02, L05, L08, L11, L17, L19 e L22 riscritte con più esempi e spiegazioni a parole).
