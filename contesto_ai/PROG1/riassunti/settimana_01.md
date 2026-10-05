---
corso: PROG1
lezione: S1
tipo: riassunto
titolo: "Settimana 1: l'algoritmo, la macchina di Von Neumann, il primo programma in C"
data: 2026-10-02
docenti: Elvio Amparore
sopratitolo: Riassunto settimanale · Programmazione I · Canale B · 28/09 – 02/10/2026
descrizione: >-
  Riassunto della settimana 1 di Programmazione I (canale B): che cos'è un algoritmo, le sette versioni della
  moltiplicazione per somme ripetute e il bug del caso n = 0, la macchina di Von Neumann e il ciclo della CPU,
  dal linguaggio macchina all'assembly e al C, il primo programma, gcc e i tre tipi di errore.
lede: >-
  Le tre lezioni della settimana in poche pagine: le idee da sapere, i metodi, le trappole e le domande per
  controllarti. Per i dettagli e gli esercizi c'è la lezione completa, collegata in ogni sezione.
materiale: slide
scheda:
  Lezioni: "[01A](01A_primo_algoritmo.html) lun 28/09 · [01B](01B_architettura.html) mar 29/09 · [02A](02A_da_assembly_a_c.html) mer 30/09"
  Tempo di ripasso: 30–40 minuti
fonte: >-
  Gli appunti delle lezioni 01A, 01B e 02A di Programmazione I (canale B), scritti sulle slide di E. G. Amparore
appunti_html: appunti/PROG1/riassunto_settimana_01.html
genera_html: true
---

## In breve

- Un **algoritmo** è una ricetta precisa: operazioni ordinate, non ambigue ed eseguibili, che danno un risultato e finiscono sempre.
- La regola d'oro del corso: **prima verificare le condizioni, poi eseguire**. Il caso iniziale ($n = 0$) è «tipica fonte di errori, anche in sede d'esame».
- Il computer è una **macchina di Von Neumann**: CPU, memoria con programma **e** dati, memoria secondaria, bus. La CPU ripete prelievo, decodifica, esecuzione.
- La CPU capisce solo il **linguaggio macchina**; l'**assembly** lo scrive con nomi leggibili; il **C** si scrive come un linguaggio vero e lo traduce un **compilatore**.
- Si compila con `gcc -Wall -Werror`. Un programma che compila non è per forza giusto: va provato, anche sui casi limite.

## 01A · Un primo algoritmo (lun 28/09)

L'informatica studia gli **algoritmi**, non i computer: il computer sta all'informatica come il telescopio all'astronomia (frase attribuita a Dijkstra).

> [!DEF] Algoritmo
> Un insieme **ordinato** di operazioni **non ambigue** ed **effettivamente eseguibili** che, eseguito, **produce un risultato** e **si arresta in un tempo finito**.

In informatica **tutto è numero**: testo, immagini, istruzioni. La programmazione **imperativa** dice alla macchina, passo per passo, che cosa fare.

**Il problema guida.** Calcolare $m \times n$ (interi, $n \ge 0$) con una macchina che sa solo sommare, assegnare e confrontare. L'idea: sommare $m$ a sé stesso $n$ volte, partendo da 0, l'elemento neutro della somma. Servono due variabili:

- l'**accumulatore** `s`, la somma fatta finora;
- il **contatore** `i`, quante somme ho fatto.

Wirth: «Programma = Algoritmi + Strutture dati». Nella notazione delle slide `←` vuol dire «assegna» (`s ← s + m`), `=` vuol dire «confronta» (`i = n?`).

| Versione | Che cosa cambia |
|---|---|
| V1 | l'idea a parole: «somma m a s esattamente n volte», troppo vaga |
| V2 | passi elementari, ma il controllo «i = n?» sta **alla fine**: con n = 0 non termina |
| V3 | **prima il controllo**, poi la somma: giusta anche con n = 0 |
| V4 | notazione formale: `←`, `=`, `▷` per i commenti, il rientro per ciò che dipende dalla condizione |
| V5 | salti espliciti («salta alla riga 6») e un'istruzione Fine |
| V6 | blocchi Inizio/Fine; salto **condizionato** (solo se i = n) e **non condizionato** (sempre) |
| V7 | blocchi annidati, niente numeri di riga: è la forma del `while` del C |

```text
Inizio Algoritmo
    s ← 0,  i ← 0
    Inizio Ripetizione Condizionata
    se i = n salta alla Fine Ripetizione Condizionata, altrimenti
        s ← s + m
        i ← i + 1
        salta all'Inizio Ripetizione Condizionata
    Fine Ripetizione Condizionata
Fine Algoritmo
```

> [!TRAPPOLA] Il bug del caso n = 0
> La V2 prima somma e porta `i` a 1, poi controlla «1 = 0?»: no, ripete. Poi «2 = 0?», e così via: `i` non torna mai a 0 e l'algoritmo **non termina**. Con la V3 il primo controllo è «0 = 0?»: sì, fine, e `s = 0` è il risultato giusto.

> [!RICORDA]
> - Prova sempre i **casi limite**: $n = 0$, $n = 1$, $m = 0$, valori negativi.
> - La **traccia** a mano, una riga per passo e una colonna per variabile, è l'abilità che serve negli esercizi sullo stato della memoria.
> - Dal ciclo si esce solo tramite la condizione: da qui le regole d'esame (una sola `return` nelle funzioni iterative, niente `break`, `continue`, `switch`).

## 01B · Architettura del calcolatore (mar 29/09)

| Tappa | Che cosa porta |
|---|---|
| Abaco, Pascalina | aiutano a calcolare (la Pascalina fa il riporto da sola), ma la logica la mette chi li usa |
| Calcolatori cablati | fanno solo le operazioni costruite nell'hardware, come un frullatore |
| Babbage, circa 1840 | macchina analitica: schede perforate, salti condizionati, l'idea di programma |
| Turing, 1936 | la macchina universale: una sola macchina può eseguire qualunque algoritmo |
| ENIAC, 1943–46 | primo computer elettronico general purpose, decimale, programmato spostando cavi |
| EDVAC | **programma memorizzato**, **stessa memoria** per istruzioni e dati, numeri in **binario** |

- **Calcolatore programmabile**: la stessa macchina fa compiti diversi cambiando la sequenza di istruzioni, senza toccare l'hardware.
- Un **bit** vale 0 o 1; con $N$ bit si distinguono $2^N$ informazioni. Un **byte** sono 8 bit, cioè 256 valori. Si scrive b per il bit, B per il byte: 100 Mb/s sono 12,5 MB/s.
- **Architettura di Von Neumann**: CPU (unità di controllo, ALU, registri), memoria principale (RAM) con programma e dati, memoria secondaria, tutto collegato dal **bus di sistema**.
- La memoria è una fila di byte, ognuno con un **indirizzo** che parte da 0: con 1024 byte gli indirizzi vanno da 0 a **1023**. I numeri stanno in **parole**, per esempio di 32 bit, cioè 4 byte.
- Lo **stato** è la fotografia di memoria e registri in un istante. Eseguire un programma vuol dire passare da uno stato al successivo.

> [!METODO] Il ciclo della CPU
> 1. **Prelievo** (*fetch*): legge l'istruzione all'indirizzo scritto nel **PC** (*program counter*) e la copia nell'**IR** (*instruction register*).
> 2. **Decodifica**: capisce che cosa chiede l'istruzione.
> 3. **Esecuzione**: la ALU lavora sui registri, oppure si legge o scrive la memoria.
> 4. Il PC passa all'istruzione dopo, oppure salta dove dice l'istruzione. Si ricomincia.
>
> Stesso programma e stesso stato iniziale danno sempre lo stesso risultato.

## 02A · Dal linguaggio macchina al C (mer 30/09)

- **Linguaggio macchina**: numeri eseguiti direttamente dalla CPU. Ogni architettura ha il suo *instruction set*, quindi non è portabile.
- **Assembly**: le stesse istruzioni con nomi leggibili, tradotte da un **assembler**. Resta legato alla CPU.
- La ALU lavora solo sui **registri**: per sommare due celle servono `LOAD` (memoria → registro), `ADD` (registro + registro) e `STORE` (registro → memoria). Un'addizione costa 4 istruzioni.
- La moltiplicazione della 01A in assembly costa 10 istruzioni, con `CMP` (confronta), `JMPEQ` (salta se uguali), `INC` (aggiunge 1) e `JMP` (salta sempre). È la V6, e il confronto viene **prima** della somma.
- Dagli anni '50 i **linguaggi di alto livello**, a partire dal FORTRAN: li traduce un **compilatore**, e per un'altra CPU basta ricompilare.
- Il **C** nasce nel 1972 (Dennis Ritchie, Bell Labs) per riscrivere Unix. È **compilato**, **imperativo**, **strutturato** e **tipizzato**.

```c
// Un primo programma in C
#include <stdio.h>

// La funzione "main" e' il punto di ingresso del programma
int main(void) {
    printf("Buongiorno dal C.\n");
}
```

| Pezzo | Che cosa fa |
|---|---|
| `// …` | commento, ignorato dal compilatore |
| `#include <stdio.h>` | direttiva per il preprocessore: porta la dichiarazione di `printf`. Senza, gcc si ferma con «implicit declaration of function 'printf'» |
| `int main(void) { … }` | il punto da cui parte il programma; le graffe racchiudono un blocco |
| `printf("…");` | stampa una stringa; ogni istruzione finisce con `;` |
| `\n`, `\t`, `\\`, `\"`, `\0` | sequenze di escape: a capo, tabulazione, backslash, doppio apice, carattere nullo |

- **Identificatori**: lettere, cifre e `_`, mai una cifra all'inizio. Maiuscole e minuscole contano (`var` e `Var` sono diversi). Niente parole chiave (`int`, `while`, `return`…) e niente nomi di libreria (`printf`, `main`).
- **gcc** fa quattro passi: preprocessore, compilatore, assemblatore (file oggetto `.o`) e **linker**, che unisce i file oggetto e le librerie nell'eseguibile.
- Comando dell'esame: `gcc -Wall -Werror sorgente.c -o eseguibile`, poi `./eseguibile`. Con `-Werror` ogni avviso blocca la compilazione.

> [!TRAPPOLA] «Compila» non vuol dire «funziona»
> Tre tipi di errore: di **compilazione** (sintassi: il programma non nasce), a **runtime** (per esempio una divisione per zero) e **logici** (il programma gira ma fa la cosa sbagliata). Il compilatore controlla solo la sintassi: un programma va sempre provato.

## Verso l'esame

- **Laboratorio** del canale B, aula Turing, 14–17: turno 2 (matricola pari) il lunedì dal 05/10 con Elisa Marengo; turno 1 (matricola dispari) il martedì dal 06/10 con Valerio Basile. Il Lab01 è su riga di comando e compilatore.
- L'esame si fa al computer nei laboratori, con un editor semplice, senza IDE né completamento automatico: allenati da subito con un editor di testo e `gcc -Wall -Werror`.
- Appelli 2026/27: lunedì 25/01/2027 e giovedì 11/02/2027, alle 9:00.
- Da fare adesso: copia «Buongiorno dal C.», compilalo, poi **rompilo apposta** (togli un `;`, una graffa, una virgoletta) e leggi i messaggi di gcc.

## Domande di ripasso

::: domanda Quali sono le proprietà di un algoritmo?
Operazioni ordinate, non ambigue ed eseguibili; produce un risultato; termina in un tempo finito.
:::

::: domanda Perché la V2 della moltiplicazione è sbagliata? Con quale valore lo scopri?
Controlla «i = n» dopo aver sommato. Con $n = 0$, `i` vale già 1 al primo controllo e non torna mai a 0, quindi il ciclo non finisce.
:::

::: domanda Che differenza c'è tra `s ← s + m` e `i = n`?
La prima assegna a `s` il valore `s + m`. La seconda chiede se `i` e `n` sono uguali: la risposta è vero o falso.
:::

::: domanda Con 1024 byte di memoria, qual è l'ultimo indirizzo?
1023, perché gli indirizzi partono da 0.
:::

::: domanda Che cosa contengono il PC e l'IR?
Il PC contiene l'indirizzo della prossima istruzione, l'IR l'istruzione che si sta eseguendo.
:::

::: domanda Perché per sommare due celle di memoria servono LOAD e STORE?
Perché la ALU lavora solo sui registri: si carica dalla memoria in un registro (`LOAD`), si somma (`ADD`), si riscrive in memoria (`STORE`).
:::

::: domanda Quali sono i quattro passi di gcc?
Preprocessore, compilatore, assemblatore, linker.
:::

::: domanda Un programma compila senza errori ma stampa un risultato sbagliato: che tipo di errore è?
Un errore logico.
:::

## Fonti

- Le lezioni complete: [01A · Un primo algoritmo](01A_primo_algoritmo.html), [01B · Architettura del calcolatore](01B_architettura.html), [02A · Dal linguaggio macchina al C](02A_da_assembly_a_c.html), con esercizi, quiz e i riferimenti alle slide.
- Laboratori e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
