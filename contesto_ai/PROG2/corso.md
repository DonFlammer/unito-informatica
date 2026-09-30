# Programmazione II — scheda del corso (canali A, B, C · A.A. 2026/27)

Aggiornato al 28/09/2026. Fonti: scheda INF0330 (https://laurea.informatica.unito.it/do/corsi.pl/Show?_id=dm23, aggiornata al 18/04/2026) e schede storiche, bacheca Esse3, calendari University Planner 2025/26, elenco delle pagine Moodle, guida degli studenti TSI. Corso del 2° semestre: orari non ancora pubblicati, Moodle chiusi agli ospiti.

## Dati essenziali

| Voce | Valore |
|---|---|
| Codice | INF0330 · 6 CFU · caratterizzante, INF/01 · 1° anno, **2° semestre** |
| Linguaggio | **C** (prosegue Programmazione I) |
| Ore | 32 h di teoria in aula (senza computer) + 20 h di laboratorio in turni (1 = matricola dispari, 2 = pari); tutorato facoltativo |
| Periodo | 22/02/2027 – 04/06/2027 |
| Esame | **progetti di laboratorio obbligatori + esonero + scritto**, uguale per i tre canali |
| Prerequisiti | tutto Programmazione I: assegnamenti, condizionali, cicli, array, struct, stringhe, **puntatori**, funzioni, ricorsione, I/O |
| Libro | la scheda dice che la scelta del libro "è in corso": nessun testo ufficiale per ora (la slide di Prog I indica il Deitel come testo comune, ma non è confermato) |

## Docenti e Moodle

| Canale | Teoria | Laboratorio turno 1 (dispari) | Laboratorio turno 2 (pari) |
|---|---|---|---|
| **A** (cognomi A–D) | Ferruccio Damiani | Ferruccio Damiani | Ferruccio Damiani |
| **B** (cognomi E–O) | Robert Birke | Gianluca Torta | Gianluca Torta |
| **C** (cognomi P–Z) | Michele Garetto | Michele Garetto | Giorgio Audrito |

- Pagine Moodle 2026/27 già create (serve il login): canale A teoria [id=3651](https://informatica.i-learn.unito.it/course/view.php?id=3651), lab A1 id=3653, lab A2 id=3655; lab C2 id=3757. Le pagine di B e di teoria C/lab C1 non sono ancora uscite.
- **Orari 2026/27 non ancora pubblicati.** Riferimento 2025/26: teoria 2 volte a settimana in Aula A/B, laboratori al Turing.

## Esame (uguale per A, B, C)

Tre fasi, uguali per tutti i canali: gli studenti dei tre canali sostengono insieme lo stesso esonero e poi, in un altro giorno, lo stesso scritto (due prove distinte, con due iscrizioni Esse3):

1. **Progetti di laboratorio** (obbligatori, senza voto): consegnati su Moodle con test automatici. **Tutti** i progetti devono essere consegnati con **tutti i test superati** per essere ammessi a esonero ed esame. Si possono fare da soli o in coppia (in coppia consegnano entrambi). Contano solo le consegne fatte entro la chiusura delle iscrizioni all'esonero; le consegne vengono chiuse nei periodi d'esame. I test verdi sono necessari ma non sufficienti: i docenti possono segnalare altri problemi.
2. **Esonero**: un esercizio di programmazione sulla Piattaforma Esami in laboratorio (e/o su carta). Esito: insufficiente (da ripetere) oppure **sufficiente = 1, buono = 2, ottimo = 3 punti**. Vale **un anno solare**.
3. **Esame scritto** ("TEORIA"): domande a risposta chiusa e aperta, 0–30, superato con **almeno 17** (nel 2025/26 serviva 18).

- **Voto finale = esonero (1–3) + scritto (17–30)**; 31 o più diventa **30 e lode**.
- Su Esse3 sono **due appelli distinti**, "PROGRAMMAZIONE II- ESONERO" e "PROGRAMMAZIONE II-TEORIA", entrambi da prenotare (chiudono una settimana prima). Nel 2025/26 l'esonero era il giorno prima della teoria, alle 9:00 nei laboratori Turing, Dijkstra e Von Neumann, con turni se gli iscritti sono molti.
- **Appelli:** per le matricole 2026/27 i primi saranno nella sessione estiva 2027 (non ancora pubblicati). Riferimento 2025/26: quattro coppie esonero + teoria (esonero il giorno prima della teoria): 15–16/06, 20–21/07, 09–10/09 e 28–29/09/2026.

## Programma ufficiale (comune)

1. Ripasso della programmazione imperativa e del C.
2. Leggere e capire una consegna.
3. Gestione esplicita della memoria: `malloc`/`free`.
4. Strutture dinamiche lineari (liste collegate, anche ordinate), con approccio iterativo e ricorsivo.
5. Tipi di dato astratti pila e coda, con array e con liste.
6. Programmi su più file, header e compilazione.
7. Alberi binari.
8. Tipi `union`.
9. I/O formattato su file (`fopen`, `fscanf`, `fprintf`, `fclose`).

## Materiale

- **Guida TSI** (`Materie/PROG2`): la "Bibbia-PROG2" con 9 esercizi in C capitati agli esami (liste `IntList` e alberi `IntTree`, iterativi e ricorsivi, spesso "senza allocare nuova memoria"), ciascuno con test automatici e Makefile: ottimo allenamento per l'esonero. Più un file di domande di teoria con risposte scritte da studenti (non tutte affidabili). Gli appunti Notion e gli esercizi Java della cartella riguardano il **vecchio** Programmazione II in Java: non usarli.

## Consigli e trappole

- **I progetti sono il vero sbarramento**: consegnali durante il semestre, prima della sessione estiva.
- Servono **due iscrizioni separate** (esonero e teoria): chi ne dimentica una non entra.
- Esonero "ottimo" (3) + scritto 28 = 30 e lode: l'esonero pesa.
- Per la teoria allenati su tipi e puntatori (`typedef struct`, puntatori a puntatori, `.` e `->`), `union` ed `enum`, tracing di codice con accessi fuori limite e cicli che non terminano.
- Arriva a febbraio con i puntatori di Programmazione I ben solidi: sono il prerequisito dichiarato.
- Prova il codice anche con `-Wall -Wextra` e con strumenti come valgrind o i sanitizer per trovare errori di memoria (consiglio, non requisito ufficiale).
