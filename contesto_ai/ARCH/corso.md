# Architettura degli Elaboratori — scheda del corso (canali A, B, C · A.A. 2026/27)

Aggiornato al 28/09/2026. Fonti: scheda INF0326 (https://laurea.informatica.unito.it/do/corsi.pl/Show?_id=7x2d, aggiornata al 21/08/2026) e schede storiche, bacheca Esse3, calendari University Planner 2025/26, guida degli studenti TSI. Corso del 2° semestre: orari e Moodle 2026/27 non ancora consultabili (il Moodle richiede il login).

## Dati essenziali

| Voce | Valore |
|---|---|
| Codice | INF0326 · 6 CFU (4 teoria + 2 laboratorio) · caratterizzante, INF/01 · 1° anno, **2° semestre** |
| Ore | 32 h di teoria + 20 h di laboratorio di programmazione **assembly RISC-V**; laboratorio in turni (1 = matricola dispari, 2 = pari) |
| Periodo | 22/02/2027 – 04/06/2027 |
| Esame | **scritto al computer + orale obbligatorio**, uguale per i tre canali |
| Lingua | italiano; il corso è segnato "English-friendly" (per il corso di laurea: materiale in inglese per preparare l'esame e possibilità di sostenerlo in inglese; https://laurea.informatica.unito.it/do/home.pl/View?doc=International_students.html) |
| Competenze attese | Programmazione I e Fondamenti dell'Informatica (1° semestre) |
| Libro | D. A. Patterson, J. L. Hennessy, *Struttura e progetto dei calcolatori – Progettare con RISC-V*, 2ª ed., Zanichelli 2023 |
| Simulatore | **ARES** (https://ares-sim.github.io), nel browser, RISC-V a 32 bit, dal 2025/26; fino al 2024/25 si usava RARS (a 64 bit) |

## Docenti e Moodle

| Canale | Teoria | Laboratorio turno 1 (dispari) | Laboratorio turno 2 (pari) |
|---|---|---|---|
| **A** (cognomi A–D) | Rossano Gaeta | Rossano Gaeta | Rossano Gaeta |
| **B** (cognomi E–O) | Idilio Drago | Idilio Drago | Maurizio Lucenteforte |
| **C** (cognomi P–Z) | Claudio Schifanella | Claudio Schifanella | Gianluca Torta |

- **Moodle unico** "Architettura degli Elaboratori (A, B, C)": [id=3833](https://informatica.i-learn.unito.it/course/view.php?id=3833), serve il login UniTo. Regole d'esame, soglie e materiali sono lì.
- **Orari 2026/27 non ancora pubblicati.** Riferimento 2025/26: 2 blocchi di teoria da 2 h a settimana per canale e 1 blocco di laboratorio da 2 h per turno al laboratorio Turing; laboratori dalla 3ª settimana (primi laboratori tra il 02/03 e il 05/03/2026, con il semestre iniziato il 16/02/2026).

## Esame (uguale per A, B, C)

**Scheda 2026/27:** prove scritte e una prova orale, voto in trentesimi con lode. **Tutte le parti vanno superate.**

| Parte | Contenuto | Punti |
|---|---|---|
| Ammissione | competenze elementari, domande a correzione automatica | 10 |
| Teoria | enunciare e descrivere proprietà e tecniche, applicarle a esempi (scritto e/o orale) | 14 |
| Laboratorio | programma assembly RISC-V, corretto sia nella sintassi sia nell'algoritmo, verificato con i simulatori | 8 |

- Totale 32. Le soglie di ciascuna parte non sono sulla scheda: vengono pubblicate su Moodle.
- Nel 2023/24 (punteggi 8/10/14) il flusso era: quiz Moodle (soglia 4/8) e laboratorio su Moodle (soglia 5/10, almeno 1 punto per esercizio) lo stesso giorno, poi **orale su tutto il programma**; superato con totale ≥ 18. È probabile che oggi sia analogo con i nuovi punteggi: verificare su Moodle.
- All'appello ogni canale ha il **proprio turno Esse3** ("ARCHIT. ELAB. CORSO A/B/C"), con stessa data, ora e laboratori (appello del 01/10/2026: tutti e tre alle 9:00 nei laboratori Turing, Dijkstra e Von Neumann, verificato su Esse3 il 28/09/2026): iscriversi a quello del proprio canale. Iscrizioni aperte circa 20 giorni prima, chiuse 7 giorni prima.

**Appelli:** per le matricole 2026/27 i primi saranno nella sessione estiva 2027 (non ancora pubblicati). Riferimento 2025/26: 08/06, 03/07, 14/09, 01/10/2026 (circa 250–290 iscritti ai primi due).

## Programma ufficiale (comune)

**Teoria:** calcolatori, astrazioni e tecnologia · ISA RISC-V (bit, byte, parole, operandi, indirizzi, rappresentazione delle istruzioni, assembler, linker, loader, virgola mobile) · processore RISC-V (ALU, registri, temporizzazione, datapath, implementazione semplice) · bus e I/O (arbitraggio, polling, interrupt, DMA, eccezioni RISC-V) · gerarchia delle memorie (località, tecnologie, cache).

**Laboratorio:** linguaggio assembly RISC-V; operandi in memoria, indirizzi, registri; operazioni logiche; if-then-else e cicli; procedure (registri, stack, heap); compilazione e traduzione; simulazione di una ALU.

## Materiale

- **Guida TSI** (`Materie/ARCH`, 2023/24): appunti digitati di Davide Trapani dalle lezioni di Schifanella (84 pagine, tutto il programma: il file più utile); cheat sheet svolti per la prova di ammissione (prestazioni, CPI, cache a mappatura diretta, ALU) e per il laboratorio (formati delle istruzioni); soluzioni dei laboratori L01–L09 in assembly. **Attenzione:** quel materiale usa RARS a 64 bit (`ld`/`sd`, offset di 8 byte); con ARES a 32 bit si usano `lw`/`sw` e offset di 4 byte.
- Gruppo Telegram studentesco del corso: vedi `../unito_informatica.md`.

## Consigli e trappole

- Iscriviti al Moodle comune appena parte il semestre: regole e soglie sono solo lì.
- Tutte le parti devono essere superate: un laboratorio insufficiente fa fallire l'esame anche con una buona teoria.
- Usa ARES fin da subito, compreso il controllo delle convenzioni di chiamata: errori tipici sono non salvare `ra` e i registri `s*` sullo stack, disallineare `sp`, confondere registri caller-saved e callee-saved.
- Prova di ammissione: esercitati su prestazioni (CPI, frequenza, tempo), codifica delle istruzioni, esecuzione passo passo, cache, uscite della ALU.
- Per l'orale prepara definizioni precise di tutti gli argomenti (bus sincrono/asincrono, arbitraggio, località, tipi di cache, interrupt e DMA, eccezioni, assembler a due passate, linker e loader).
- Consolida già adesso cicli, array e ricorsione in C (Programmazione I) e binario, esadecimale e complemento a 2 (Fondamenti).
