# Programmazione I — scheda completa del corso (canali A, B, C · A.A. 2026/27)

Aggiornato al 28/09/2026. Fonti primarie: scheda insegnamento MFN0582, Moodle 2026/27 dei tre canali (accesso ospite), calendari University Planner, bacheca Esse3, Regolamento L-31 coorte 2026. Fonti secondarie: materiale degli anni passati (guida studenti TSI, Moodle 2025/26, repository di studenti). Ogni informazione riporta anno/canale di validità quando non è certa per il 2026/27. **Programma ed esame sono unici per i tre canali**; cambiano docenti, orari, slide e ordine degli argomenti.

## Dati essenziali

| Voce | Valore |
|---|---|
| Codice | MFN0582 · 9 CFU (6 teoria + 3 laboratorio) · 1° anno, 1° semestre · SSD INF/01 |
| Linguaggio | C |
| Ore | 48 h teoria (24 lezioni da 2 h) + 30 h laboratorio (10 esercitazioni da 3 h) · carico totale ≈ 225 h |
| Periodo | 28/09/2026 – 15/01/2027 (pausa 23/12/2026 – 06/01/2027) |
| Frequenza | facoltativa ma raccomandata; registrazioni Webex su Moodle "non garantite" e "non sostituiscono la presenza" |
| Prerequisiti | nessuno di programmazione; matematica di base e buon italiano |
| Propedeuticità | nessuna in ingresso; Prog I è competenza attesa per Prog II, Architettura, ASD, PPOO, Sistemi Operativi (consigliata, non vincolante) |

## Docenti, orari e Moodle

| | Canale A (cognomi A–D) | Canale B (cognomi E–O) | Canale C (cognomi P–Z) |
|---|---|---|---|
| **Teoria** | Attilio Fiandrotti · mar 9–11, mer 11–13 · Aula A · dal 29/09 | Elvio G. Amparore · mar 11–13, mer 9–11 · Aula B · 1ª lezione lun 28/09 11–13 | Alessandro Mazzei · lun 14–16, gio 14–16 · Aula A · dal 28/09 |
| **Lab turno 1** (matricola dispari) | Iacopo Colonnelli · gio 14–17 · Turing · dall'08/10 | Valerio Basile · mar 14–17 · Turing · dal 06/10 | Alessandro Mazzei · mer 9–12 · Turing · dal 07/10 |
| **Lab turno 2** (matricola pari) | Alessia Antelmi · mer 14–17 · Turing · dal 07/10 | Elisa Marengo · lun 14–17 · Turing · dal 05/10 | Alessandro Mazzei · mar 9–12 · Turing · dal 06/10 |
| **Moodle 2026/27** (accesso ospite) | [id=3701](https://informatica.i-learn.unito.it/course/view.php?id=3701) | [id=3773](https://informatica.i-learn.unito.it/course/view.php?id=3773) | [id=3767](https://informatica.i-learn.unito.it/course/view.php?id=3767) |
| **Archivio 2025/26** (stessi docenti di teoria) | id=3455 | id=3461 (con i quiz "Preparazione Esame") | id=3507 (con "Riepilogo Esame") |

- Per vedere i materiali basta "Accedi come ospite"; per ricevere gli annunci bisogna iscriversi alla pagina del proprio canale.
- Ultime lezioni: canale A fino al 22/12 e poi 12–13/01; canale B fino al 13/01/2027; canale C fino al 21/12 e poi 7, 11, 14/01/2027. Ultimi laboratori a metà gennaio.
- Tutorato con studenti laureati: nel 2025/26 partiva a fine ottobre (in presenza e su Webex), annunciato nei forum.
- Comunicazioni generali ai docenti: programmazione1-docenti@di.unito.it; ricevimento su appuntamento via email (indirizzi sulle pagine docente del sito del corso di laurea). Scrivere solo da @edu.unito.it con nome, cognome, anno e canale.
- Nel 2025/26 ci sono stati spesso spostamenti e annullamenti (lab annullati per le sedute di laurea, scambi con altri corsi): seguire forum Annunci e University Planner.
- Attenzione alle slide: il canale C (slide 4) indica i canali come "A-E / F-O" e il canale A (slide 2) dice "laboratorio dal 24/9". Fanno fede la divisione A–D / E–O / P–Z e le date di Moodle e University Planner.

## Libro

Deitel, Deitel, Maselli — *Il linguaggio C. Fondamenti e tecniche di programmazione*, IX ed. (Pearson 2022): manuale di riferimento in tutti e tre i canali (capitoli 1–9 o 1–10, più l'allocazione dinamica del cap. 12); copie in biblioteca al 1° piano, disponibile anche in versione elettronica. La slide di Prog I dice che è lo stesso testo di Prog II, ma la scheda di Prog II 2026/27 indica che il libro è ancora da scegliere. Alternativi: Prata *C Primer Plus*; Hanly–Koffman *Problem solving e programmazione in C*. Avvertenza dei docenti: la **correttezza formale** non è nel libro, fanno fede slide e lezioni.

## Programma ufficiale (scheda 2026/27)

Modello di memoria · tipi elementari · assegnazione ed espressioni · stato · puntatori (incremento, decremento, `malloc`, `free`) · selezione e verifica di proprietà · programmazione iterativa (problemi numerici: addizione, moltiplicazione, serie; problemi su array: filtri, riorganizzazioni, conteggi) · funzioni e frame-stack (signature, parametri attuali/formali, variabili locali, rientro, operand stack) · ricorsione e correttezza (numerici, stringhe, co/controvarianti e dicotomici su array, strutture puntate) · schemi avanzati: `struct`, quantificatori alternati su coppie di array e matrici.

## Sequenza prevista delle lezioni

Ricostruita dai Moodle 2025/26 degli stessi docenti; da confermare lezione per lezione.

**Canale A (Fiandrotti)** — deck numerati come il B e con testi quasi identici: 00 introduzione → 01A primo algoritmo → 01B architettura → 02A da assembly a C → 02B assegnazione, modello di memoria, scambio → 02C referenziamento, `scanf`, puntatori → float → booleani → if-else → while e for → array e stringhe → algoritmi su array → matrici → funzioni e chiamata → passaggio per riferimento → passaggio di array e matrici → allocazione dinamica → ricorsione (introduzione, numerica, su array) → ricerca binaria e ricorsione dicotomica → aritmetica dei puntatori → correttezza → esercizi di preparazione all'esame. Particolarità: puntatori già dalla 2ª settimana, array e matrici prima delle funzioni.

**Canale C (Mazzei)** — un deck lungo per lezione: 01 Introduzione (algoritmo, Von Neumann, assembly, FORTRAN) → 02 Il C (main, printf, gcc, tipi, variabili, assegnamento, scambio) → 03 Dai numeri ai puntatori → 04 Booleani → 05 IF → 06 While e For → 07 Funzioni → 08 Array → 09 Matrici → 10 Ancora array e matrici (heap, `malloc`) → 11 Ricorsione → 12 Ricorsione su array e ricerca dicotomica → Assert e correttezza → Riepilogo esame. Particolarità: funzioni prima di array e matrici; ricorsione concentrata in 5 lezioni verso la fine (lezioni 17–21 su 24, dal 17/11 al 01/12/2025), seguite da "Assert e correttezza" (04/12) e dal riepilogo d'esame (11–12/12).

**Canale B (Amparore)**, settimana per settimana:

| Sett. | Teoria | Laboratorio (dal 5/10) |
|---|---|---|
| 1 | Il primo algoritmo (01A) · architettura del calcolatore · programmazione strutturata e linguaggio C | — |
| 2 | Memoria e variabili, assegnamento · referenziamento, input e puntatori in C | Lab01 riga di comando, compilatore |
| 3 | Scambio di variabili · virgola mobile · espressioni e variabili booleane · decisioni | Lab02 operatori e tipi, cast, limiti |
| 4 | Cicli e ripetizioni | Lab03 condizioni booleane, CodeRunner |
| 5 | Array e stringhe · funzioni | Lab04 iterazioni, accumulatori, quantificatori |
| 6 | Chiamata di funzione, asserzioni | Lab05 array e stringhe |
| 7 | Algoritmi su array | Lab06 funzioni |
| 8 | Matrici | Lab07 operazioni su array, memoria dinamica, intervalli semiaperti |
| 9 | Memoria dinamica · ricorsione | Lab08 matrici |
| 10 | Ricorsione su array | Lab09 ricorsione 1: caso base, involucro, co/controvariante |
| 11 | Ricerca binaria · correttezza (invarianti, sentinelle, asserzioni) | Lab10 ricorsione 2: intervalli, dicotomica, coppie di array, matrici |
| 12 | Ultime lezioni (dicembre) | — |

Nota: la colonna laboratori è indicativa e assume un laboratorio a settimana. Nel 2025/26 (Moodle id=3461) le settimane 4 e 8 sono state senza laboratorio e la sequenza reale è stata Lab01 sett. 2, Lab02 sett. 3, Lab03 sett. 5, Lab04 sett. 6, Lab05 sett. 7, Lab06 sett. 9, Lab07 sett. 10, Lab08 sett. 11, Lab09 sett. 12, Lab10 sett. 13. Nel 2026/27 (University Planner) il turno T2 ha 13 date, ogni lunedì dal 05/10 al 21/12 più l'11/01; il turno T1 ne ha 11, ogni martedì dal 06/10 al 22/12 tranne il 27/10 e l'08/12 (festivo), più il 12/01. Quale laboratorio si fa in ciascuna settimana va verificato sul Moodle del canale B.

**Laboratori:** stessa sequenza Lab01–Lab10 e stessi quiz CodeRunner in tutti i canali (introduzione e compilatore → operatori e tipi → condizioni booleane → iterazioni → array e stringhe → funzioni → operazioni su array con heap → matrici → ricorsione 1 → ricorsione 2).

### Dove si trova la lezione 01A negli altri canali
- **Canale A**: deck molto simile "01A_primo_algoritmo" (40 slide, settimana 28/09–02/10). Stesse versioni dell'algoritmo V1–V6, incluso il bug del caso n = 0; mancano la slide "In informatica tutto è numero", la slide "Progettare un algoritmo" (input, output, passi, terminazione), il riquadro su dati/procedure e Wirth, la V7 senza numeri di riga e il confronto tra flow-chart e rappresentazione strutturata, e la slide sul caso iniziale non dice "anche in sede d'esame". Nella stessa settimana c'è anche "01B_architettura" (storia del calcolatore, bit e byte, Von Neumann).
- **Canale C**: sezione "Il Primo Algoritmo" (slide 20–42) della lezione 01 del 28/09. Parte dall'addizione in colonna ("le istruzioni della maestra") e usa "dita" come nome del contatore; **non** presenta le formulazioni sbagliate né il caso n = 0, ma arriva subito allo pseudocodice corretto (righe 0–6, "Se dita == n salta alla riga 6") e al diagramma di flusso. Nella stessa lezione prosegue con Von Neumann, istruzioni macchina (LOAD, STORE, ADD, CMP, JMP) e la stessa moltiplicazione in assembly e in FORTRAN.

## Esame

### Ufficiale 2026/27
- Scheda: *"L'esame è essenzialmente uno scritto che si svolge al calcolatore o su carta."* Verifica progettazione e codifica di algoritmi iterativi e ricorsivi, domande su correttezza e terminazione, simulazione del linguaggio a runtime. *"La somma dei punteggi degli esercizi proposti permetterà di ottenere voti sino al 30 e Lode."* Niente orale, progetto o esoneri.
- Slide "Tipico esame di Programmazione 1" (introduzione canale B 2026/27, identica in A e C): esercizi **in laboratorio su Moodle al PC**; programmazione **iterativa e ricorsiva**; **teoria** (correttezza, tipi); **stato della memoria** (esecuzione simulata). Dettagli ed esercizi simil-esame a fine corso.
- **Appello unico per i canali A, B, C**; commissione: Mazzei (presidente), Amparore, Antelmi, Basile, Fiandrotti, Marengo.
- Appelli 2026/27 già pubblicati: **lun 25/01/2027 ore 9:00** (iscrizioni 05/01–18/01) e **gio 11/02/2027 ore 9:00** (iscrizioni 22/01–04/02), laboratori Turing + Dijkstra + Von Neumann. Riferimento 2025/26: 5 appelli (22/01, 09/02, 11/06, 09/07, 15/09) con 399, 319, 174, 158, 107 iscritti. Il calendario 2026/27 del corso di laurea prevede anche, in via sperimentale, un 3° appello per gli insegnamenti del 1° semestre il 31/03 e l'1–2/04/2027 (dettagli non ancora pubblicati).
- Tempistica canale B: ultima lezione di teoria mer 13/01/2027, ultimi laboratori 11/01 (T2) e 12/01 (T1). Le iscrizioni al 1° appello (05/01–18/01/2027) si aprono negli ultimi due giorni della pausa natalizia (che finisce il 06/01) e restano aperte durante le ultime lezioni: **entro il 18/01 servono piano carriera APPROVATO ed Edumeter di Prog I compilato**. Le iscrizioni al 2° appello aprono il 22/01, prima che si svolga il 1°.

### Logistica e strumenti all'esame (dati certi + deduzioni dagli anni passati)
- **Turni**: i tre laboratori hanno 118 postazioni (Turing 52, Dijkstra 36, Von Neumann 30) contro circa 400 iscritti al 1° appello → l'appello viene diviso in turni su più giorni (5 turni in 3 giorni nel 2023/24, 4 turni in 2 giorni nel 2024/25, "diverse sessioni" nel 2025/26). La convocazione arriva via email @edu.unito.it: presentarsi solo se convocati; impedimenti gravi per un turno vanno segnalati a programmazione1-docenti@di.unito.it entro la scadenza indicata.
- **Credenziali**: al Turing ci si collega con le credenziali SCU/MyUniTo (conoscerle bene; nel 2023/24 si consigliava di cambiare la password almeno una volta prima dell'esame). Per Dijkstra e Von Neumann la pagina del CdL (aggiornata al 2023) richiede un account @educ.di.unito.it, da chiedere a aperturalogin@educ.di.unito.it (lunedì e venerdì, risposta entro 2 giorni lavorativi): chiedere ai docenti se serve anche all'esame.
- **Strumenti**: all'esame si usa "una piattaforma web che vi fornisce un editor di testo semplice", quindi **niente IDE né autocompletamento** (Lab01 2025/26 di Amparore). Esercitarsi con un editor semplice e `gcc -Wall -Werror`, senza Copilot.
- **Piattaforma**: non è documentato se si usi il Moodle del CdL o il Moodle "Esami" di Ateneo. La prova su carta resta formalmente possibile (dal 2023/24 al 2025/26 si è sempre svolta al PC).
- **Tentativi**: al massimo 3 per anno accademico; non è chiarito se un ritiro conti, e la presenza viene comunque registrata → non iscriversi "per provare"; se non ci si presenta, cancellarsi dalla Bacheca prenotazioni entro la chiusura.

### Struttura probabile (anni passati, da confermare a fine corso)
- Canale C 2025/26: **5 esercizi CodeRunner su Moodle**: 2 di teoria (correttezza di una sequenza di assegnazioni; stato della memoria stack) + 3 di programmazione (iterativa, ricorsiva, con heap/`malloc`). 31–32 punti = 30 e lode. *"Passare tutti i test è condizione necessaria ma non sufficiente"*: il codice viene anche letto.
- Canale C 2023/24: 4 esercizi da 8 punti (2 di teoria + iterativo e ricorsivo; niente esercizio sull'heap); 31–32 = 30 e lode.
- Epoca Java 2016–2019: 4 esercizi (iterativo 7, ricorsivo 7, induzione/invariante 10, memoria 8).
- Nel 2025/26 i canali A e B condividevano i quiz Moodle "Preparazione Esame": Esercizi Iterativi, Ricorsivi, Heap, Modello Memoria.

### Regole per gli esercizi di programmazione (esame unico per i canali)

Fonti: le regole sulle funzioni iterative e quelle sulle ricorsive (niente cicli, `return` multipli ammessi) vengono dal riepilogo d'esame 2025/26 del canale C (slide 4–5); `-Wall -Werror` viene dal Lab01 2025/26 del canale B ("in sede di esame useremo -Wall -Werror"); tipo di ricorsione richiesto, formato delle `printf`, array passati come coppia, prototipi e casi limite sono indicazioni pratiche e convenzioni del corso, non regole scritte d'esame.

- Funzioni **iterative**: un solo punto di ingresso e di uscita → **una sola `return`**; usare **variabili sentinella** e buffer; **vietati** `case`, `switch`, `break`, `static` e costrutti non visti a lezione. (Nel 2023/24 le regole erano le stesse tranne il divieto di `static` e dei costrutti non visti a lezione.)
- Funzioni **ricorsive**: **vietati** `for` e `while`; `return` multipli ammessi; rispettare il **tipo di ricorsione** richiesto (co-variante, contro-variante, dicotomica).
- Compilazione con **`-Wall -Werror`** (un warning = errore). CodeRunner confronta l'output con quello atteso: rispettare esattamente il formato delle `printf`.
- Array passati sempre come coppia (lunghezza, puntatore); dichiarare i prototipi.
- Casi limite pesano molto: righe = 0 (vacuamente vero), array vuoti, `NULL`.

### Da chiedere / verificare a fine corso
Durata della prova; numero di esercizi e punti per il 2026/27; materiale consentito; se le ausiliarie delle ricorsive possono essere iterative.

## Tipologie d'esame e trappole

| Tipologia | Forma tipica | Trappole |
|---|---|---|
| Iterativa (`e1`) | funzione con firma data su array/matrici (anche irregolari `rows, cols, mat[rows][cols], rags[rows]`), quantificatori per-ogni/esiste, risultato extra via puntatore | sentinella iniziale sbagliata (`true` per "per ogni", `false` per "esiste"), casi vuoti, `break`, scorrere fino a `cols` invece di `rags[i]` |
| Ricorsiva (`e2` involucro + `e2R`) | tipo imposto; co-variante (caso base `n == 0`, lavora su `a[n-1]`), contro-variante (`i == aLen`), dicotomica su `[l, r)` (`l == r` vuoto, `r - l == 1` singolo, `m = (l + r) / 2`) | cicli nella ricorsiva, tipo sbagliato, leggere `a[l]` su intervallo vuoto, ordine invertito scrivendo dopo la chiamata |
| Heap | funzione che restituisce un array allocato con `malloc` e la lunghezza in un parametro di uscita | dimensione allocata, `NULL`, lunghezza non aggiornata |
| Modello della memoria | quiz: valori nei frame, numero di chiamate, altezza massima dello stack (main compreso), punto di rientro (A)/(B) | aliasing degli array (tutti i frame vedono l'array del main), il caso base crea un frame, istruzioni dopo la chiamata eseguite in risalita, celle non inizializzate |
| Correttezza | ragionamento backward: scegliere gli `assert` e la precondizione (weakest precondition, `Q[E/x]`) | sostituzione nel verso sbagliato, aritmetica intera (33 ≤ 3r ⇔ 11 ≤ r), `<` vs `<=` |

Esempi svolti: `esercizi_esame.md`.

## Convenzioni di notazione del corso

- Pseudocodice delle prime lezioni: `←` assegnamento, `=` confronto, `▷` commento, blocchi Inizio/Fine (lezione 01A).
- In C: `=` assegna, `==` confronta; `bool` da `<stdbool.h>`; `assert()` da `<assert.h>` per pre/postcondizioni; punti di programma numerati nei commenti `//(1) //(2)`, `//PRE`, `//POST`, `//(WP)`.
- Nomi: `aLen`/`lenA` per lunghezze, `size_t` per indici e lunghezze, `rags[]` per le lunghezze di riga, `pA`, `pStr`, `pSrc`/`pDst` per i puntatori, suffisso `R` per le funzioni ricorsive e "involucro" per la funzione che le avvia.
- Intervalli semiaperti `[left, right)`: vuoto se `left == right`, invariante `assert(right >= left)`.
- Stack disegnato a righe con frame: parametri, variabili locali, `retl` (riga di rientro), `retv` (valore restituito).

## Ambiente e strumenti

- Compilare come all'esame: `gcc -Wall -Werror file.c -o file.exe` (Windows) o `-o file` (Linux/macOS).
- Sul PC dello studente: gcc 16.1 (MinGW-w64) disponibile in Git Bash.
- Laboratorio Turing: Windows (TDM-GCC) o Linux; i file si perdono al logout.
- Canale B 2026/27: in laboratorio si può usare il proprio portatile (indicazione del docente, riferita da uno studente il 28/09/2026). Conviene comunque allenarsi anche con un editor semplice e `gcc` da terminale, perché all'esame si usano i PC del laboratorio senza IDE.
- Editor: VS Code o Notepad++; documentazione: cppreference.com.

## Indicazioni dei docenti (introduzioni 2026/27)

- **Uso degli LLM** (canali B e C, con la stessa slide "Programmazione ed AI generativa": n. 11 nel B, n. 15 nel C): servono per rivedere esercizi già svolti o capire perché un programma non compila, **non per delegare la soluzione**. Il canale A chiude l'introduzione con una slide su "Programmazione e AI generativa".
- Metodo: frequentare prendendo appunti; ripassare la lezione precedente; approfondire sul libro; studiare ogni giorno; frequentare i laboratori e usare i tutor; la "maratona" di registrazioni prima dell'esame non funziona; prepararsi alla situazione d'esame.

## Materiale degli anni passati (affidabilità)

- Nel 2023/24 e 2024/25 la teoria del canale B era di **Luca Roversi**: i materiali "canale B" di quegli anni (anche nei repository di studenti) non riflettono lo stile di Amparore. Il riferimento più vicino è il **Moodle canale B 2025/26** (course/view.php?id=3461: slide, laboratori e registrazioni visibili anche da ospite).
- Incoerenze note nelle slide 2026/27, da non prendere per buone: canale C slide 4 ("A-E / F-O", "Amparone": fa fede la divisione A–D / E–O); canale A slide 2 (laboratorio "dal 24/9": il Moodle dice 7/10); canale B slide 4 (il link porta al corso id=2970, il canale A 2024/25).

- Guida studenti TSI, `Materie/PROG1`: laboratori 2023/24 in C (slide di Amparore), esercizi Moodle 2023/24 del canale C (quiz memoria/correttezza), fac-simili Java 2016–2019 (solo per la logica). Soluzioni .c di studenti con errori verificati (`media_seq.c`, `scambio4.c`, `aritmeticaR.c`).
- https://github.com/MrDionesalvi/PROG1 — testi `e1`/`e2` pre-esame 2023/24; soluzioni con bug (rifarle da zero).
- https://github.com/l0gic5/unito-prog1 — laboratori canale B 2024.
- Soluzioni ufficiali canale A 2025/26 (7/1/2026) con errori noti: in `e2_soluzione.c` l'accumulatore `s` di `e2R` non è inizializzato nel ramo ricorsivo e il test `a[n]%2==1` non conta i dispari negativi in posizione dispari (con {0, -3} restituisce 1 invece di 2 anche dopo aver inizializzato `s`); `e3_4_soluzione.c` non moltiplica per 2, usa anch'esso `a[i] % 2 == 1`, che esclude i dispari negativi, e non azzera `*bLen` all'inizio (funziona solo se il chiamante lo inizializza a 0). Verificare sempre con test e `-Wall -Werror`.
