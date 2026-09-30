# Programmazione I (canale B, 2026/27) — lezioni studiate

Scheda completa del corso: `corso.md`. Esercizi d'esame tipo: `esercizi_esame.md`. Sequenza prevista delle prossime lezioni: `corso.md` → "Sequenza prevista delle lezioni".

| # | Data | Titolo | File | Concetti chiave |
|---|---|---|---|---|
| 01A | 28/09/2026 | Un primo algoritmo | `lezioni/01A_primo_algoritmo.md` · HTML: `appunti/PROG1/01A_primo_algoritmo.html` | informatica = studio degli algoritmi (Dijkstra); definizione di algoritmo (ordinato, non ambiguo, effettivamente computabile, produce un risultato, termina); tutto è numero; programmazione imperativa; m × n per somme ripetute da 0; accumulatore `s` e contatore `i`; Wirth "Programma = Algoritmi + Strutture Dati"; 7 versioni dell'algoritmo; bug del caso n = 0 → **prima verificare, poi eseguire**; `←` vs `=`; salti condizionati/non condizionati; blocchi Inizio/Fine e indentazione; diagramma di flusso; basso/alto livello; implementare vs tradurre; prossimo: Von Neumann |

## Fili conduttori (da ricollegare nelle prossime lezioni)

- **Caso iniziale / casi limite** (n = 0, array vuoti, valore iniziale delle sentinelle) — slide 01A-20: "tipica fonte di errori, anche in sede d'esame".
- **Programmazione strutturata → regole d'esame**: nelle funzioni iterative una sola `return`, variabili sentinella, niente `break`, `switch`, `case` (nel 2025/26 anche niente `static`); nelle ricorsive niente cicli `for`/`while`, mentre i `return` multipli sono ammessi. Dal ciclo si esce solo tramite la condizione (V7 della 01A).
- **Accumulatore e contatore** → cicli `for`/`while`, quantificatori con sentinella (`true` per "per ogni", `false` per "esiste").
- **Invariante `s = m × i`, pre/postcondizioni** → correttezza con `assert` e ragionamento all'indietro.
- **Traccia di esecuzione** → modello della memoria (stack di frame) negli esercizi d'esame.
- `while (i != n)` ↔ V7; `do-while` ↔ V2 (corpo eseguito almeno una volta).
