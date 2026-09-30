# Programmazione I (canale B, 2026/27) — lezioni studiate

Scheda completa del corso: `corso.md`. Esercizi d'esame tipo: `esercizi_esame.md`. Sequenza prevista delle prossime lezioni: `corso.md` → "Sequenza prevista delle lezioni".

| # | Data | Titolo | File | Concetti chiave |
|---|---|---|---|---|
| 01A | 28/09/2026 | Un primo algoritmo | `lezioni/01A_primo_algoritmo.md` · HTML: `appunti/PROG1/01A_primo_algoritmo.html` | informatica = studio degli algoritmi (Dijkstra); definizione di algoritmo (ordinato, non ambiguo, effettivamente computabile, produce un risultato, termina); tutto è numero; programmazione imperativa; m × n per somme ripetute da 0; accumulatore `s` e contatore `i`; Wirth "Programma = Algoritmi + Strutture Dati"; 7 versioni dell'algoritmo; bug del caso n = 0 → **prima verificare, poi eseguire**; `←` vs `=`; salti condizionati/non condizionati; blocchi Inizio/Fine e indentazione; diagramma di flusso; basso/alto livello; implementare vs tradurre; prossimo: Von Neumann |
| 01B | 29/09/2026 | Architettura del calcolatore | `lezioni/01B_architettura.md` · HTML: `appunti/PROG1/01B_architettura.html` | abaco e Pascalina (riporto meccanico); calcolatori cablati vs **programmabili** (operazioni elementari + sequenza codificata con numeri); Babbage (macchina analitica, schede perforate, salti condizionati), Turing 1936 (macchina universale); ENIAC (decimale, cavi) → **EDVAC** (programma memorizzato, memoria unificata, binario); bit, byte, $2^N$; **architettura di Von Neumann** (CPU = unità di controllo + ALU + registri, RAM, memoria secondaria, bus); memoria come fila di byte con **indirizzi** da 0, **parole** da 32 bit; ciclo prelievo–decodifica–esecuzione, **PC** e **IR**; determinismo |
| 02A | 30/09/2026 | Dal linguaggio macchina al C | `lezioni/02A_da_assembly_a_c.md` · HTML: `appunti/PROG1/02A_da_assembly_a_c.html` | linguaggio macchina vs **assembly** (mnemonici, assembler, non portabili); addizione in assembly (`LOAD`, `ADD`, `STORE`, `@A` = contenuto all'indirizzo A, PC 0-4-8-12); moltiplicazione in assembly (`CMP`, `JMPEQ`, `INC`, `JMP`) = versione V6 della 01A; FORTRAN e linguaggi di alto livello (compilatore, ricompilare = portabilità); storia del C (Thompson, Ritchie, Unix, K&R 1972, C89…C23); C compilato, imperativo, strutturato, tipizzato; radiografia di `Buongiorno dal C.`: commenti, `#include <stdio.h>`, `main`, blocchi, `;`, stringhe, **sequenze di escape**; identificatori e parole chiave; stadi di gcc (preprocessore, compilatore, assemblatore, linker); `gcc -Wall -Werror`; errori di compilazione, a runtime, logici |

## Fili conduttori (da ricollegare nelle prossime lezioni)

- **Caso iniziale / casi limite** (n = 0, array vuoti, valore iniziale delle sentinelle) — slide 01A-20: "tipica fonte di errori, anche in sede d'esame".
- **Programmazione strutturata → regole d'esame**: nelle funzioni iterative una sola `return`, variabili sentinella, niente `break`, `switch`, `case` (nel 2025/26 anche niente `static`); nelle ricorsive niente cicli `for`/`while`, mentre i `return` multipli sono ammessi. Dal ciclo si esce solo tramite la condizione (V7 della 01A).
- **Accumulatore e contatore** → cicli `for`/`while`, quantificatori con sentinella (`true` per "per ogni", `false` per "esiste").
- **Invariante `s = m × i`, pre/postcondizioni** → correttezza con `assert` e ragionamento all'indietro.
- **Traccia di esecuzione** → modello della memoria (stack di frame) negli esercizi d'esame.
- `while (i != n)` ↔ V7; `do-while` ↔ V2 (corpo eseguito almeno una volta).
- **Salti e program counter** (01B, 02A): il «salta alla riga» della V6 è una scrittura nel PC; in assembly il ciclo è `CMP` + `JMPEQ` (uscita) + `JMP` (ritorno), e anche gcc compila `while` saltando prima al controllo.
- **Stato della macchina e traccia** (01A, 01B, 02A): eseguire = passare da uno stato della memoria al successivo, istruzione per istruzione; è la base degli esercizi d'esame sullo stato della memoria.
- **Indirizzi da 0** (01B): memoria come fila di byte numerati da 0 → indirizzi delle variabili e puntatori (settimana 2), indici degli array.
- **`-Wall -Werror` e messaggi del compilatore** (02A): allenarsi a leggere riga, colonna e descrizione dell'errore, come all'esame.
