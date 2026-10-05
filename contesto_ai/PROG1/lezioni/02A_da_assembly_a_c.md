---
corso: PROG1
lezione: 02A
titolo: Dal linguaggio macchina al C
data: 2026-09-30
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 02A
descrizione: >-
  Appunti della lezione 02A di Programmazione I (canale B): linguaggio macchina e assembly, addizione e moltiplicazione
  in assembly con un simulatore della macchina di Von Neumann, FORTRAN e linguaggi di alto livello, storia e
  caratteristiche del C, il primo programma, printf e sequenze di escape, sintassi, identificatori, compilazione con
  gcc, errori di compilazione, a runtime e logici.
lede: >-
  Dai bit nei registri al primo programma in C. Prima si programma la macchina di Von Neumann in assembly, istruzione
  per istruzione, e si capisce perché è faticoso; poi si passa ai linguaggi di alto livello, dal FORTRAN al C. Infine la
  «radiografia» del primo programma C, le regole di sintassi e il percorso dal file sorgente all'eseguibile con gcc,
  con i messaggi d'errore veri del compilatore.
materiale: slide
scheda:
  Slide: 02A_da_assembly_a_c · 50 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Slide «Dal linguaggio macchina al C» (02A_da_assembly_a_c), Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/02A_da_assembly_a_c.html
genera_html: true
---

## In breve

- Il **linguaggio macchina** è fatto di numeri (sequenze di bit) che il processore esegue direttamente; ogni architettura ha il suo *instruction set*, quindi **non è portabile**.
- L'**assembly** scrive le stesse istruzioni con nomi leggibili (`LOAD`, `ADD`, `STORE`…); un programma chiamato **assembler** lo traduce in linguaggio macchina.
- Nell'esempio delle slide un'addizione richiede **4 istruzioni** e la moltiplicazione della lezione 01A ne richiede **10**, con `CMP` e i salti `JMPEQ` e `JMP`.
- Programmare in assembly è lungo, facile da sbagliare, legato alla CPU: dagli anni '50 nascono i **linguaggi di alto livello**, a partire dal **FORTRAN**, che un **compilatore** traduce per la macchina.
- Il **C** nasce nel 1972 (Dennis Ritchie, Bell Labs) per riscrivere Unix: efficiente e **portabile**. È **compilato**, **imperativo**, **strutturato** e **tipizzato**.
- Il primo programma: commenti `//`, direttiva `#include <stdio.h>`, la funzione `main`, un blocco tra graffe, `printf` con le **sequenze di escape** (`\n`, `\t`, `\\`, `\"`, `\0`); ogni istruzione finisce con `;`.
- Si compila con `gcc -Wall -Werror sorgente.c -o eseguibile`: **preprocessore**, **compilatore**, **assemblatore**, **linker**.
- Tre tipi di errore: di **compilazione** (sintassi), a **runtime** (per esempio divisione per zero) e **logici** (il programma gira ma fa la cosa sbagliata).

> [!CANALI] Sei del canale A o C?
> **Canale A (Fiandrotti):** il deck «Dal linguaggio assembly al C» (52 slide) ha gli stessi contenuti. Aggiunge un esempio che carica un solo dato dalla memoria (slide 5) e la stessa moltiplicazione nel linguaggio **BASIC**, scritta con i numeri di riga e i `GOTO`, come esempio di linguaggio **non strutturato** (slide 23).
>
> **Canale C (Mazzei):** assembly, moltiplicazione in assembly e FORTRAN sono alla fine della lezione 01 «Introduzione» (slide 67–83), con istruzioni leggermente diverse (per esempio `JEQ` al posto di `JMPEQ`). La parte sul C (`main`, `printf`, gcc) è nella lezione 02 «Il C», non ancora pubblicata al 30/09/2026.
>
> L'esame è unico per i tre canali.

## Linguaggio macchina e assembly (slide 2–4)

I primi computer si programmavano direttamente in **linguaggio macchina**, cambiando i bit dei registri con **interruttori** o **schede perforate**. È un po' come l'esecuzione passo per passo che si usa ancora oggi per controllare l'hardware mentre lo si progetta.

> [!DEF] Linguaggio macchina · slide 3
> È il linguaggio **direttamente eseguibile dal processore**:
> - è fatto di **codici numerici** (sequenze di bit) che identificano istruzioni e operandi;
> - ogni architettura definisce il proprio insieme di istruzioni macchina (*instruction set*);
> - quindi **dipende dal processore** e **non è portabile** tra architetture diverse.

> [!DEF] Linguaggio assembly · slide 3
> È una **rappresentazione testuale e simbolica** del linguaggio macchina:
> - usa **mnemonici** come `mov`, `add`, `ldr` al posto dei codici numerici;
> - viene tradotto in linguaggio macchina da un programma chiamato **assembler**;
> - è più leggibile per chi programma, ma resta **strettamente legato all'architettura** hardware.

In pratica ogni riga di assembly corrisponde a **una** istruzione macchina: l'assembler sostituisce ogni nome con il suo codice numerico (slide 4).

| Assembly (per le persone) | Linguaggio macchina (per la CPU) |
|---|---|
| `LOAD, R0, @A` | `0010000110010000` |
| `LOAD, R1, @B` | `0010010110010010` |
| `ADD, R0, R1` | `0100000100000000` |
| `STORE, R0, @A` | `0011000100000000` |

> [!TRAPPOLA] Portabile non vuol dire «che funziona ovunque così com'è»
> Un programma in linguaggio macchina scritto per una CPU non gira su una CPU con un *instruction set* diverso: va **riscritto**. È il problema che i linguaggi di alto livello risolvono (più avanti in questa lezione).

## L'addizione in assembly, passo per passo (slide 5–14)

**Il problema**: sommare due numeri interi che stanno in memoria agli indirizzi $A = 400$ e $B = 404$, e mettere il risultato nella cella all'indirizzo $A$. Il linguaggio è un assembly di tipo RISC, come quello del processore MIPS32. Il programma fa quattro cose:

1. definisce gli indirizzi `A` e `B`;
2. carica i due numeri nei registri `R0` e `R1` della CPU, con due istruzioni `LOAD`;
3. li somma con un'istruzione `ADD` tra i registri `R0` e `R1`;
4. copia il risultato dal registro `R0` all'indirizzo `A` della memoria, con un'istruzione `STORE`.

```text
ADDR  A = 400        ; definisce l'indirizzo A
ADDR  B = 404        ; definisce l'indirizzo B
LOAD,  R0, @A        ; carica in R0 il numero all'indirizzo A
LOAD,  R1, @B        ; carica in R1 il numero all'indirizzo B
ADD,   R0, R1        ; R0 ← R0 + R1
STORE, R0, @A        ; copia R0 all'indirizzo A
```

Il simbolo `@A` vuol dire «**il contenuto della memoria all'indirizzo A**», non il numero 400. Le righe `ADDR` non diventano istruzioni: servono solo a dare un nome agli indirizzi.

### Che cosa succede nella macchina (slide 7–14)

In memoria il programma occupa i byte 0–15 (4 istruzioni da 4 byte), i dati stanno a 400 (il numero 12) e a 404 (il numero $-8$). Le slide seguono l'esecuzione con due passi per istruzione: prima il **prelievo** («carica la prossima istruzione leggendo il program counter nell'instruction register»), poi l'**esecuzione** («decodifica IR ed esegue l'istruzione elementare»).

| Istruzione | PC | IR | R0 | R1 | memoria[400] |
|---|--:|---|--:|--:|--:|
| (inizio) | 0 | — | — | — | 12 |
| `LOAD, R0, @A` | 0 | LOAD | **12** | — | 12 |
| `LOAD, R1, @B` | 4 | LOAD | 12 | **−8** | 12 |
| `ADD, R0, R1` | 8 | ADD | **4** | −8 | 12 |
| `STORE, R0, @A` | 12 | STORE | 4 | −8 | **4** |

Il PC avanza di 4 in 4 (0, 4, 8, 12), perché ogni istruzione occupa una parola da 32 bit. Alla fine all'indirizzo 400 non c'è più 12 ma $4 = 12 + (-8)$: il risultato è nello **stato finale della memoria**, come diceva la lezione 01B.

```widget macchina
programma: addizione
titolo: Simulatore della macchina di Von Neumann: premi «Passo» e guarda PC, IR, registri e memoria
```

> [!IDEA] · perché passare dai registri
> La ALU lavora solo sui **registri** (lezione 01B): non sa sommare direttamente due celle di memoria. Per questo servono `LOAD` (memoria → registro), `ADD` (registro + registro) e `STORE` (registro → memoria).

## La moltiplicazione in assembly (slide 15–16)

Ora la stessa **moltiplicazione per somme ripetute** della lezione 01A. I numeri stanno agli indirizzi simbolici `m` e `n`; il risultato va all'indirizzo `m`. Si usano l'accumulatore $s$ (nel registro `R0`) e il contatore $i$ (in `R1`).

```text
 1.  LOAD,  R0, 0         // inizializza R0 come accumulatore s
 2.  LOAD,  R1, 0         // inizializza R1 come contatore i
 3.  LOAD,  R2, @m        // carica il valore all'indirizzo m in R2
 4.  LOAD,  R3, @n        // carica il valore all'indirizzo n in R3
 5.  CMP    R1, R3        // confronta R1 ed R3, cioè i ed n
 6.  JMPEQ  <riga 10>     // se i = n salta alla riga 10, altrimenti continua
 7.  ADD,   R0, R2        // R0 ← R0 + R2, cioè s ← s + m
 8.  INC,   R1            // R1 ← R1 + 1, cioè i ← i + 1
 9.  JMP    <riga 5>      // salto incondizionato alla riga 5
10.  STORE, R0, @m        // salva R0, cioè il risultato s, all'indirizzo di m
```

Le istruzioni nuove:

| Istruzione | Che cosa fa |
|---|---|
| `LOAD, R0, 0` | mette nel registro il **numero** 0 (senza `@`: è un valore, non un indirizzo) |
| `CMP R1, R3` | **confronta** i due registri; l'esito (uguali o no) resta nella CPU, nel registro di stato |
| `JMPEQ <riga 10>` | **salto condizionato**: salta alla riga 10 solo se l'ultimo confronto ha dato «uguali» (*jump if equal*) |
| `INC R1` | aggiunge 1 al registro (*increment*) |
| `JMP <riga 5>` | **salto incondizionato**: salta sempre alla riga 5 |

È **esattamente** la versione V6 della lezione 01A, riga per riga:

| Lezione 01A, versione V6 | Assembly |
|---|---|
| `s ← 0, i ← 0` | righe 1–2 |
| (i dati $m$, $n$ sono già noti) | righe 3–4: si caricano nei registri |
| `se i = n allora salta alla riga 7` | righe 5–6: `CMP` + `JMPEQ` (salto condizionato) |
| `s ← s + m` | riga 7: `ADD` |
| `i ← i + 1` | riga 8: `INC` |
| `salta alla riga 3` | riga 9: `JMP` (salto non condizionato) |
| `Fine` | riga 10: il risultato va in memoria |

> [!ESAME] Prima verificare, poi eseguire
> Anche qui il confronto (riga 5) viene **prima** della somma (riga 7): con $n = 0$ si salta subito alla riga 10 e il risultato è 0. È il principio della lezione 01A, «tipica fonte di errori, anche in sede d'esame».

Prova il simulatore con $m = 4$, $n = 3$ e poi con $n = 0$: conta quante volte viene eseguita la riga 5.

```widget macchina
programma: moltiplicazione
m: 4
n: 3
titolo: La moltiplicazione per somme ripetute, eseguita dalla macchina
```

> [!NOTA] Due piccole differenze nella slide 20
> Nella slide 20 lo stesso programma compare con `ADD, R1, 1` al posto di `INC, R1` (fa la stessa cosa: aggiunge 1) e con `STORE, R0, A` alla riga 10.

## Verso i linguaggi di alto livello (slide 17–22)

### Perché l'assembly non basta (slide 17)

- È **faticoso** e **facile sbagliare**: 4 righe per un'addizione, 10 per una moltiplicazione.
- Richiede di **conoscere l'architettura della CPU** (registri, istruzioni).
- **Non si vede la struttura** del codice né la logica: dove comincia e dove finisce la ripetizione?
- Il codice scritto per la CPU X va **riscritto da capo** per la CPU Y, se i linguaggi macchina sono diversi.

Per questo, dagli anni '50, si sviluppano **linguaggi di programmazione** con istruzioni di **livello semantico** più vicino al linguaggio **matematico e naturale**, che permettono di **astrarre** il programma dalle caratteristiche dell'hardware.

### Il FORTRAN (slide 18–20)

All'inizio degli anni '50 IBM progetta il calcolatore **modello 704** per i calcoli scientifici, con due requisiti:

- gli scienziati devono potersi concentrare sulla **programmazione di formule**, ignorando i dettagli della CPU;
- i programmi devono potersi **trasportare** sui futuri modelli IBM **senza riscriverli** da capo.

Per il 704 nasce il **FORTRAN** (*FORmula TRANslator*):

- un **compilatore** traduce ogni istruzione FORTRAN in **una o più** istruzioni assembly della macchina usata;
- se cambia la macchina, **basta ricompilare** il programma;
- insieme a LISP, ALGOL e COBOL è tra i capostipiti dei **linguaggi di terza generazione**, la famiglia del C originario che studierai in questo corso;
- le versioni moderne (FORTRAN 90) hanno costrutti come `if` e `while`.

La moltiplicazione in FORTRAN (slide 20):

```text
Program Hello
INTEGER :: m
INTEGER :: n
INTEGER :: s
INTEGER :: i

WRITE(*,*) 'Inserisci m:'
READ(*,*) m
WRITE(*,*) 'Inserisci n:'
READ(*,*) n

s = 0
i = 0
do while (i<n)
    s = s + m
    i = i + 1
end do

WRITE(*,*) "Risultato :",s
End Program Hello
```

Le 10 righe di assembly diventano 6 righe leggibili (da `s = 0` a `end do`): la ripetizione è un blocco `do while … end do` e **i salti non si vedono più**, li scrive il compilatore. In più il programma chiede $m$ e $n$ a chi lo usa (`READ`) e stampa il risultato (`WRITE`).

### L'albero dei linguaggi (slide 21–22)

La slide 21 mostra come i linguaggi discendono uno dall'altro, dal 1956 al 2004: dal **Fortran I** e da **ALGOL 60** nasce, tra gli altri, il **C** (versione K&R, fine anni '70), da cui discendono **C++**, e poi **Java**, **C#**, e in parte **Python**. Imparare il C vuol dire imparare la base di molti linguaggi usati oggi.

Punti chiave della prima parte (slide 22):

- abbiamo scritto un semplice algoritmo per moltiplicare interi come **somma ripetuta**;
- si può programmare la macchina **a basso livello** (assembly), ma scrivere programmi è **lungo e difficile**;
- i linguaggi di **alto livello** come il C **nascondono** molti dettagli dell'hardware sottostante.

> [!OLTRE] · che cosa scrive davvero il compilatore
> Ecco la moltiplicazione in C e un pezzo dell'assembly x86-64 che gcc ne ricava con `gcc -S` (compilatore gcc 16.1, senza ottimizzazioni):
>
> ```c
> while (i < n) {
>     s = s + m;
>     i = i + 1;
> }
> ```
>
> ```text
>         jmp  .L2                      ; salta subito al controllo
> .L3:    mov  eax, DWORD PTR -12[rbp]  ; carica m (LOAD)
>         add  DWORD PTR -4[rbp], eax   ; s ← s + m (ADD)
>         add  DWORD PTR -8[rbp], 1     ; i ← i + 1 (INC)
> .L2:    mov  eax, DWORD PTR -8[rbp]   ; carica i
>         cmp  eax, DWORD PTR -16[rbp]  ; confronta i con n (CMP)
>         jl   .L3                      ; se i < n torna al corpo (salto condizionato)
> ```
>
> Le istruzioni hanno nomi diversi, ma l'idea è quella delle slide: caricare, sommare, confrontare, saltare. E il compilatore rispetta «prima verificare, poi eseguire»: la prima istruzione salta al controllo.

## Il linguaggio C: un po' di storia (slide 23–26)

- **1969**: Ken Thompson (Bell Labs, AT&T) sviluppa il sistema operativo **Unix** per il minicomputer PDP-7, scritto inizialmente in **assembly**.
- L'esperienza mostra che l'assembly rende lo sviluppo di un sistema operativo **oneroso e poco flessibile**.
- **Dennis Ritchie** progetta allora il **linguaggio C**, pensato per unire **efficienza** e **portabilità**.
- Unix viene riscritto progressivamente in C: si diffonde (a partire dalle università) e influenza in modo decisivo la storia dell'informatica.
- **1972**: prima versione del C, per uso interno sui PDP-7 e PDP-11, oggi nota come **K&R C** (dalle iniziali di Kernighan e Ritchie, autori del libro che lo descrisse).
- Alla **fine degli anni '80** il C viene **standardizzato** da ANSI e ISO (**ANSI C**, **C89**), per usarlo su hardware molto diversi.
- Lo standard è stato aggiornato più volte: **C99, C11, C17, C23**. Il libro di testo del corso fa riferimento al **C11**.

Nonostante l'età, il C è ancora centrale: è il linguaggio di riferimento per **sistemi operativi**, **compilatori**, **driver**, **librerie di basso livello**, applicazioni ad **alte prestazioni** e **sistemi embedded/IoT**. Offre un **controllo diretto** su hardware e memoria, restando molto più astratto dell'assembly.

## Le caratteristiche del C (slide 27)

| Il C è… | Che cosa vuol dire | Esempio |
|---|---|---|
| **compilato** | un **compilatore** traduce i sorgenti C nel linguaggio macchina del computer | `gcc` produce un eseguibile |
| **imperativo** | il programma è un insieme di **istruzioni**, pensate come ordini | `s = s + m;` è un ordine: «aggiorna s» |
| **strutturato** | il codice è organizzato in **blocchi** racchiusi da delimitatori | le graffe `{ … }` (lezione 01A, blocchi Inizio/Fine) |
| **fortemente tipizzato** | chi programma deve **specificare il tipo** di ogni variabile | `int s = 0;` dice che `s` è un intero |

## La radiografia del primo programma (slide 28–36)

```c
// Un primo programma in C
#include <stdio.h>

// La funzione "main" e' il punto di ingresso del programma
int main(void) {
    printf("Buongiorno dal C.\n");
}
// fine della funzione main
```

Compilato con `gcc -Wall -Werror` stampa `Buongiorno dal C.` e va a capo. Vediamolo pezzo per pezzo.

### Commenti (slide 28)

Le righe che iniziano con `//` sono **commenti**: non sono istruzioni e il compilatore le **ignora**. Servono a chi legge: un commento prima di una funzione o di un gruppo di istruzioni ne chiarisce lo **scopo** (slide 32). Il codice deve essere comprensibile per un programmatore, non solo per il compilatore.

> [!OLTRE] · l'altro tipo di commento
> Il C ha anche i commenti su più righe, tra `/*` e `*/`: `/* questo è un commento */`.

### La direttiva `#include` (slide 29)

- Le righe che iniziano con `#` sono **direttive per il preprocessore** (argomento che si vedrà poco qui e meglio in Programmazione II).
- `#include <stdio.h>` **include** nel programma il file `stdio.h` (*standard input/output header*) e ne importa le definizioni.
- I file `.h` si chiamano **file di intestazione** (*header*): contengono le **dichiarazioni** di funzioni, per esempio quelle delle librerie di sistema (`printf()` sta nella libreria C, `libc`).
- `stdio.h` dichiara funzioni come `printf()` e `scanf()`.
- Nelle slide a volte gli `#include` sono omessi, solo per ragioni di spazio.

> [!TRAPPOLA] Senza `#include <stdio.h>`
> Se lo dimentichi e usi `printf`, gcc 16 si ferma con un errore: `implicit declaration of function 'printf'`, e ti suggerisce `include '<stdio.h>'`.

### La funzione `main` (slide 30–31)

- I programmi C sono organizzati in moduli chiamati **funzioni**, che contengono le istruzioni da eseguire. Ogni funzione ha un **input** e un **output**.
- La funzione **`main`** è **obbligatoria**: è il punto da cui **comincia l'esecuzione**.
- `(void)` vuol dire che `main` riceve un **input vuoto**.
- `int` vuol dire che `main` restituisce un **intero**: un codice di successo o di errore per il sistema operativo (nel corso non lo useremo). Il compilatore permette di ometterlo, ma si può scrivere esplicitamente `return 0;` prima della graffa finale.
- Per ora tutto il codice va **dentro il `main`**.

### Blocchi e programmazione strutturata (slide 32–33)

- Le parentesi **graffe** `{ }` delimitano il **corpo** (*body*) della funzione, cioè un **blocco** di istruzioni. Devono essere **sempre bilanciate**: ogni `{` ha la sua `}`.
- Un blocco è un'**unità logica** e può contenere: **dichiarazioni** di dati (le **variabili**), **comandi**, **chiamate** di altre funzioni e **altri blocchi** (annidati, sempre tra graffe).
- Per convenzione il codice C si **indenta** con le tabulazioni (il tasto Tab).

Sono i blocchi Inizio/Fine della versione V6 della lezione 01A, scritti con le graffe.

### Programmare per la chiarezza (slide 34)

> «Il codice è letto molto più spesso di quanto venga scritto: programmate per la chiarezza, non per la brevità.» (citazione attribuita a Donald Knuth nella slide 34)

Per mantenere il codice chiaro:

- **indentazione corretta**, che mostri la struttura logica;
- **commenti significativi**, soprattutto per funzioni e parti complesse;
- **nomi descrittivi** per variabili e funzioni, così che il codice si spieghi da solo;
- **blocchi non troppo lunghi**: meglio spezzare in funzioni più piccole e riutilizzabili (lo vedrai più avanti).

### `printf`, istruzioni e stringhe (slide 35–36)

- `printf(…)` è una **chiamata di funzione** (*function call*): si chiama la funzione passandole i **parametri** di input tra parentesi.
- Ogni istruzione (*statement*) termina con il **punto e virgola** `;`.
- Una **stringa** è un pezzo di testo tra **doppi apici** `"…"`.
- Dentro le stringhe possono comparire **sequenze di escape** (sequenze speciali), che cominciano con la barra rovesciata `\` (*backslash*).

| Sequenza | Che cosa produce |
|---|---|
| `\n` | nuova riga: va a capo |
| `\t` | tabulazione (Tab) |
| `\\` | il carattere backslash `\` |
| `\"` | il doppio apice `"` |
| `\0` | il terminatore della stringa (lo userai più avanti) |

Per ora `printf` si usa solo con testo tra doppi apici. Per esempio:

```c
printf("Ha detto \"ciao\"\n");     // stampa: Ha detto "ciao"
printf("C:\\corso\\lab1\n");        // stampa: C:\corso\lab1
printf("nome\tvoto\n");             // stampa nome e voto separati da una tabulazione
```

> [!TRAPPOLA] Il backslash da solo
> Un `\` isolato in una stringa inizia sempre una sequenza di escape. Per stampare un backslash ne servono **due**: `\\`. E per stampare un doppio apice serve `\"`, altrimenti il compilatore crede che la stringa finisca lì.

## Sintassi, identificatori e indentazione (slide 37–41)

### Sintassi e token (slide 37–38)

Il C va **compilato**: il codice sorgente, che è testo, viene tradotto in linguaggio macchina. Durante la compilazione l'**analizzatore lessicale** (*parser*) divide il codice in **token**, le unità sintattiche: parole chiave, identificatori, operatori, punteggiatura, stringhe, costanti. Come una lingua naturale, un linguaggio di programmazione ha una **sintassi**, più formale, con le regole per scrivere programmi corretti. Se una regola non è rispettata, il compilatore segnala un **errore di compilazione** e **non** produce il programma.

Tre regole da sapere subito:

1. **Ogni istruzione termina con `;`**. Errore tipico: dimenticarlo. gcc risponde `expected ';' before …`.
2. Un'istruzione può occupare **più righe**: si può andare a capo **ovunque sia ammesso uno spazio**. Due stringhe una dopo l'altra vengono unite:
   ```c
   printf("Questo è un messaggio "
          "spezzato su più righe\n");
   ```
3. **Non** si va a capo **dentro una stringa** senza chiuderla: errore `missing terminating " character`.

### Identificatori (slide 39–40)

Gli **identificatori** sono i **nomi** che dai agli elementi del programma (variabili, funzioni, costanti, tipi…), per poterli riconoscere e usare.

- Maiuscole e minuscole **contano** (*case-sensitive*): `Var`, `var` e `VAR` sono tre identificatori diversi.
- Scegli nomi **chiari**: evita nomi troppo simili tra loro o senza significato. Esempi: `somma`, `accumulatore`.
- **Non** si possono usare le **parole chiave** del linguaggio:

  `auto break case char const continue default do double else enum extern float for goto if int long register return short signed sizeof static struct switch typedef union unsigned void volatile while`

- **Non** usare i nomi delle funzioni della libreria standard, come `main` e `printf` (anche se non le usi, come `sin` e `cos`), né i nomi definiti nei file di intestazione.

> [!OLTRE] · quali caratteri sono ammessi
> Un identificatore contiene **lettere**, **cifre** e il trattino basso `_`, e **non comincia con una cifra**: `x2` e `conto_totale` vanno bene, `2x` e `conto-totale` no (il trattino è il segno meno). Gli spazi non sono ammessi. Evita anche i nomi che cominciano con `_`: sono riservati in molti casi.

### Indentazione (slide 41)

Le istruzioni di un blocco (**non** le graffe) si scrivono **rientrate** di un numero fisso di spazi (per esempio 4) o, meglio, con il carattere Tab. L'indentazione aiuta a capire il flusso del programma, e va fatta **mentre si programma**, non dopo.

```c
if (a > 15) {
    x = 5;
    y = 2;
    z = a + b;
}
```

L'`if` arriverà nelle prossime settimane: qui conta la forma, con le tre istruzioni rientrate dentro le graffe.

## Dal sorgente all'eseguibile (slide 42–45)

Il percorso (slide 42): i **file sorgente** (`.c`, il codice in forma di testo; ognuno è un'**unità di compilazione**) includono i **file di intestazione** (`.h`). Preprocessore, compilatore e assemblatore trasformano ogni sorgente in un **file oggetto** (linguaggio macchina); il **collegatore** (*linker*) unisce i file oggetto in un **programma eseguibile**.

Il compilatore del corso è **gcc** (la slide dice GNU C Compiler; oggi il nome è *GNU Compiler Collection*): libero, conforme agli standard, disponibile per i principali sistemi operativi, capace di produrre codice per molte architetture. È un *frontend* per un sistema di compilazione a più stadi (slide 43–44):

| Stadio | Programma | Che cosa fa |
|---|---|---|
| 1. preprocessore | `cpp` | elabora le direttive `#include`, `#define`… e produce un sorgente intermedio |
| 2. compilatore | `cc` | traduce il C in assembly, con opzioni per ottimizzare velocità o dimensione, oppure senza ottimizzazione per il debug (opzione `-g`) |
| 3. assemblatore | `as` | produce il file oggetto `.o` in linguaggio macchina |
| 4. linker | `ld` | unisce i file oggetto dei sorgenti C, altri file oggetto (anche da altri linguaggi) e le **librerie** (input/output, matematica, rete…) in un eseguibile |

### Compilare ed eseguire (slide 45)

Per ora si compila così:

```text
Unix:     gcc -Wall -Werror sorgente.c -o eseguibile
Windows:  gcc -Wall -Werror sorgente.c -o eseguibile.exe
```

- `-Wall` attiva gli **avvisi** (*warning*) più utili;
- `-Werror` trasforma ogni avviso in **errore**: con un solo avviso il programma non viene prodotto;
- `-o eseguibile` sceglie il **nome** del file prodotto.

Poi si esegue: `./buongiorno` nella shell di Unix, `buongiorno` nel Prompt dei comandi di Windows.

> [!ESAME] Le opzioni dell'esame
> `-Wall -Werror` sono le opzioni usate all'esame negli anni scorsi: allenati da subito così. Un programma che non compila non passa nessun test.

## Errori di compilazione, a runtime e logici (slide 46–48)

Un programma può **compilare** senza errori di sintassi e contenere lo stesso errori che si vedono solo **durante l'esecuzione** (*runtime*). Le cause possono essere:

- una **progettazione sbagliata** dell'algoritmo, per esempio eseguire un ciclo **prima** di verificarne la condizione di terminazione (è il bug della versione V2 della lezione 01A);
- una **realizzazione sbagliata** del programma, per esempio una divisione per zero o un accesso non valido alla memoria.

| Tipo | Quando si vede | Esempio |
|---|---|---|
| **di compilazione** | subito, lo segnala il compilatore | manca un `;`, stringa non chiusa |
| **a runtime** | durante l'esecuzione | divisione per zero |
| **logico** | mai da solo: il programma gira ma fa la cosa sbagliata | somma da 0 a $n - 1$ invece che da 1 a $n$ |

### Un errore di compilazione (slide 47)

```c
#include <stdio.h>

int main(void) {
    printf("Buongiorno dal C.\n")
}
```

Manca il `;` alla riga 4. gcc 16.1 risponde così (verificato):

```text
manca.c:4:34: error: expected ';' before '}' token
```

I numeri `4:34` sono **riga** e **colonna**: il compilatore dice dove si è accorto del problema. A volte è la riga **dopo** l'errore vero, perché se ne accorge solo quando trova il simbolo successivo (qui la `}` della riga 5): guarda sempre anche la riga prima.

### Un errore a runtime (slide 48)

```c
#include <stdio.h>
int main(void) {
    int x = 5;
    int y = 0;
    printf("5/2 uguale a %d\n", x/y);
}
```

Il programma **compila senza errori** anche con `-Wall -Werror`, ma all'esecuzione divide per zero. Nella slide, su Linux, il programma si interrompe con il messaggio `Eccezione in virgola mobile` (anche se la divisione è tra interi: il nome del segnale è storico). Su Windows il programma si interrompe in modo anomalo senza stampare il risultato. Il `%d` dentro la stringa serve a stampare un numero intero: lo vedrai presto.

> [!TRAPPOLA] «Compila» non vuol dire «funziona»
> Il compilatore controlla la **sintassi**, non la **logica**. Dopo averlo compilato, un programma va **provato** (test), anche sui casi limite come $n = 0$.

## Come si sviluppa un programma C (slide 49–50)

1. **Scrivi o modifica** il sorgente con un editor di testo (per esempio Notepad++).
2. **Salva** il file con estensione `.c` in una cartella.
3. **Compila** con gcc.
4. **Analizza e correggi** gli errori di sintassi: **leggi con attenzione che cosa dice il compilatore**.
5. **Esegui** il programma.
6. **Verifica** che si comporti in modo corretto (test).
7. Se qualcosa non va, **correggi** e ricomincia.

Prerequisiti: saper scrivere e gestire file di testo, muoversi tra le cartelle, usare la **linea di comando** (shell) per le cose essenziali. Sul tuo PC dovrai installare un ambiente con il compilatore gcc (se ne occupano i laboratori). Per iniziare senza installare niente c'è l'ambiente online [pythontutor.com/c.html](https://pythontutor.com/c.html#mode=edit), che mostra anche lo stato della memoria passo per passo.

## Verso l'esame

L'esame di Programmazione I è al PC su Moodle, con esercizi in C corretti anche da **test automatici** (CodeRunner), comune ai canali A, B e C. Questa lezione ti dà gli strumenti di base:

- **compilare sempre con `-Wall -Werror`**, come all'esame: anche un solo avviso blocca la compilazione;
- **leggere i messaggi del compilatore**: riga, colonna e descrizione (`expected ';'`, `missing terminating " character`, `implicit declaration of function`);
- all'esame si scrive in un **editor di testo semplice**, senza IDE né completamento automatico: esercitati così, anche con Notepad++;
- **provare** i programmi su più casi, compresi quelli limite: i test automatici lo faranno;
- il modello «istruzione dopo istruzione» dell'assembly è la base degli esercizi sullo **stato della memoria**.

> [!ESAME] Cosa fare già da questa settimana
> - Primo laboratorio (Lab01, riga di comando e compilatore): turno 2 (matricola pari) lunedì 5/10, turno 1 (matricola dispari) martedì 6/10, 14–17, laboratorio Turing.
> - Copia il programma «Buongiorno dal C.», compilalo con `gcc -Wall -Werror` e poi **rompilo di proposito** (togli un `;`, una graffa, una virgoletta) per imparare a riconoscere i messaggi d'errore.

## Esercizi

::: esercizio base Traccia dell'addizione con altri dati
Esegui a mano il programma dell'addizione (slide 5–14) con 7 all'indirizzo $A = 400$ e 5 all'indirizzo $B = 404$. Scrivi dopo ogni istruzione il PC, R0, R1 e il contenuto dell'indirizzo 400. Controlla con il simulatore.
::: soluzione
| Istruzione | PC | R0 | R1 | memoria[400] |
|---|--:|--:|--:|--:|
| `LOAD, R0, @A` | 0 | 7 | — | 7 |
| `LOAD, R1, @B` | 4 | 7 | 5 | 7 |
| `ADD, R0, R1` | 8 | 12 | 5 | 7 |
| `STORE, R0, @A` | 12 | 12 | 5 | **12** |

Dopo l'ultima istruzione il PC vale 16 e il programma è finito: all'indirizzo 400 c'è $7 + 5 = 12$. Nota che il valore 5 all'indirizzo 404 non cambia.
:::

::: esercizio base Quante istruzioni per una moltiplicazione
Quante istruzioni esegue il programma della moltiplicazione (slide 16) con $n = 3$? E con $n = 0$? Trova una formula per $n$ qualsiasi.
::: soluzione
Contiamo le righe eseguite:
- righe 1–4 una volta sola: **4**;
- per ogni giro del ciclo le righe 5, 6, 7, 8, 9: **5 per giro**, e i giri sono $n$;
- alla fine le righe 5 e 6 un'ultima volta (il confronto che fa uscire) e la riga 10: **3**.

Totale: $4 + 5n + 3 = 5n + 7$.
- $n = 3$: $5 \cdot 3 + 7 = 22$ istruzioni (44 passi nel simulatore, che conta prelievo ed esecuzione separati).
- $n = 0$: $7$ istruzioni: righe 1–4, 5, 6 (salto) e 10.
:::

::: esercizio medio Il doppio di un numero in assembly
Con le istruzioni delle slide (`LOAD`, `STORE`, `ADD`, `INC`, `CMP`, `JMPEQ`, `JMP`) scrivi un programma che calcola $2m$ e lo salva all'indirizzo di $m$.
::: soluzione
```text
1.  LOAD,  R0, @m        // R0 ← m
2.  ADD,   R0, R0        // R0 ← R0 + R0 = 2m
3.  STORE, R0, @m        // salva il risultato all'indirizzo di m
```
Un registro si può sommare a sé stesso. Una soluzione più lunga ma corretta carica $m$ in due registri e poi li somma.
:::

::: esercizio medio Somma dei primi n numeri in assembly
Scrivi in assembly un programma che calcola $1 + 2 + \dots + n$ (con $n \ge 0$ all'indirizzo `n`) e salva il risultato all'indirizzo di `n`. Suggerimento: è l'esercizio 6 della lezione 01A.
::: soluzione
```text
1.  LOAD,  R0, 0         // s ← 0
2.  LOAD,  R1, 0         // i ← 0
3.  LOAD,  R3, @n        // R3 ← n
4.  CMP    R1, R3        // i = n ?
5.  JMPEQ  <riga 9>      // se sì, fine del ciclo
6.  INC,   R1            // i ← i + 1   (prima avanzo il contatore...)
7.  ADD,   R0, R1        // s ← s + i   (...poi lo sommo)
8.  JMP    <riga 4>      // torna al confronto
9.  STORE, R0, @n        // salva s
```
Traccia con $n = 3$: $(i, s) = (0, 0) \to (1, 1) \to (2, 3) \to (3, 6)$, poi $3 = 3$ e salto alla riga 9: il risultato è 6. Con $n = 0$ si salta subito e il risultato è 0. Se scambi le righe 6 e 7 sommi $0 + 1 + 2 = 3$: il solito errore «di uno».
:::

::: esercizio base Trova gli errori
Il programma seguente non compila. Trova i due errori e scrivi che cosa dice gcc.
```c
#include <stdio.h>

int main(void) {
    printf("Ciao\n")
    printf("Seconda riga\n);
}
```
::: soluzione
1. Riga 4: manca il `;`. gcc: `4:21: error: expected ';' before 'printf'` (se ne accorge quando trova il `printf` della riga dopo).
2. Riga 5: la stringa non è chiusa, manca il `"` prima di `)`. gcc: `5:12: error: missing terminating " character`.

Versione corretta:
```c
#include <stdio.h>

int main(void) {
    printf("Ciao\n");
    printf("Seconda riga\n");
}
```
:::

::: esercizio base Sequenze di escape
Scrivi le istruzioni `printf` che stampano esattamente queste tre righe (nella terza, tra `nome` e `voto` c'è una tabulazione):
```text
Il file si trova in C:\corso\lab1
Ha detto "ciao"
nome	voto
```
::: soluzione
```c
printf("Il file si trova in C:\\corso\\lab1\n");
printf("Ha detto \"ciao\"\n");
printf("nome\tvoto\n");
```
Ogni `\` da stampare diventa `\\`, ogni `"` diventa `\"`, la tabulazione è `\t`, e ogni riga finisce con `\n`. Verificato con `gcc -Wall -Werror`.
:::

::: esercizio base Identificatori validi
Quali di questi sono identificatori validi e adatti? `somma`, `Somma`, `2x`, `x2`, `int`, `conto-totale`, `conto_totale`, `printf`.
::: soluzione
| Nome | Valido? | Perché |
|---|---|---|
| `somma` | sì | |
| `Somma` | sì | ma è **diverso** da `somma` (maiuscole e minuscole contano): meglio evitare nomi così simili |
| `2x` | no | comincia con una cifra |
| `x2` | sì | |
| `int` | no | è una parola chiave |
| `conto-totale` | no | il `-` è il segno meno: il compilatore legge «conto meno totale» |
| `conto_totale` | sì | il trattino basso è ammesso |
| `printf` | da non usare | è il nome di una funzione della libreria standard (slide 40) |
:::

::: esercizio medio Quale stadio si lamenta?
Per ciascun errore di' quale stadio della compilazione lo segnala: (a) `#include <stdoi.h>` (nome del file sbagliato); (b) un `;` mancante; (c) una funzione dichiarata e chiamata, ma mai scritta:
```c
void saluta(void);
int main(void) { saluta(); return 0; }
```
::: soluzione
(a) Il **preprocessore**, che cerca il file da includere: `fatal error: stdoi.h: No such file or directory`.

(b) Il **compilatore**, che controlla la sintassi: `expected ';' before …`.

(c) Il **linker**: il compilatore accetta la chiamata perché la funzione è dichiarata, ma al momento di unire i pezzi il linker non trova il suo codice: `undefined reference to 'saluta'` e poi `ld returned 1 exit status`.

Tutti e tre i messaggi sono quelli di gcc 16.1.
:::

::: esercizio medio Dal FORTRAN al C
Riscrivi in C la moltiplicazione FORTRAN della slide 20, con $m = 4$ e $n = 3$ fissati nel codice (la lettura dei numeri arriverà con `scanf`). Stampa il risultato con `printf("%d x %d = %d\n", m, n, s);`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int m = 4, n = 3;
    int s = 0;          // accumulatore
    int i = 0;          // contatore
    while (i < n) {     // do while (i<n)
        s = s + m;
        i = i + 1;
    }                   // end do
    printf("%d x %d = %d\n", m, n, s);
    return 0;
}
```
Stampa `4 x 3 = 12` (verificato con `gcc -Wall -Werror`). Il `while` del C corrisponde al `do while … end do` del FORTRAN e alle righe 5–9 dell'assembly.
:::

::: esercizio difficile Un errore logico che compila
Questa versione compila senza avvisi e con $m = 4$, $n = 3$ stampa 12. Che cosa succede con $n = 0$? Che tipo di errore è?
```c
int s = 0, i = 0;
do {
    s = s + m;
    i = i + 1;
} while (i != n);
```
::: soluzione
Il `do … while` esegue il corpo **prima** di controllare la condizione, come la versione V2 della lezione 01A. Con $n = 0$: dopo il primo giro $i = 1$, e la condizione $i \ne 0$ resta vera per sempre: il ciclo non termina (dopo miliardi di giri `i` supererebbe il valore massimo di un `int`, e in C quello è un comportamento non definito). È un **errore logico** (di progettazione): il compilatore non può accorgersene, perché la sintassi è corretta. Correzione: controllare prima, con `while (i != n) { … }`.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra linguaggio macchina e assembly?
Il linguaggio macchina è fatto di codici numerici (bit) eseguiti direttamente dal processore e dipende dall'architettura. L'assembly scrive le stesse istruzioni con nomi simbolici (mnemonici) più leggibili; un assembler lo traduce in linguaggio macchina. Anche l'assembly resta legato all'architettura.
:::

::: domanda Quali istruzioni servono per sommare due numeri in memoria, e perché?
Due `LOAD` per portare i numeri dalla memoria nei registri, una `ADD` tra registri (la ALU lavora solo sui registri) e una `STORE` per riportare il risultato in memoria.
:::

::: domanda Che cosa vuol dire `@A` e che differenza c'è con `LOAD, R0, 0`?
`@A` indica il contenuto della memoria all'indirizzo A. In `LOAD, R0, 0` lo 0 è un valore: il registro viene messo a zero.
:::

::: domanda Come si realizza un ciclo in assembly?
Con un confronto (`CMP`) seguito da un salto condizionato (`JMPEQ`) che esce dal ciclo quando la condizione è vera, e da un salto incondizionato (`JMP`) alla fine del corpo che torna al confronto.
:::

::: domanda Perché sono nati i linguaggi di alto livello?
Perché l'assembly è faticoso, facile da sbagliare, richiede di conoscere la CPU, non mostra la struttura del programma e va riscritto per ogni architettura. I linguaggi di alto livello usano istruzioni vicine al linguaggio matematico e naturale e un compilatore li traduce per ogni macchina.
:::

::: domanda Che cosa ha di nuovo il FORTRAN?
È un linguaggio per scrivere formule, nato per l'IBM 704: un compilatore traduce ogni istruzione in una o più istruzioni assembly; se cambia la macchina basta ricompilare. È tra i capostipiti dei linguaggi di terza generazione.
:::

::: domanda Perché è nato il C e chi l'ha progettato?
Dennis Ritchie lo progettò ai Bell Labs per riscrivere Unix, che Ken Thompson aveva scritto in assembly: serviva un linguaggio efficiente e portabile. La prima versione è del 1972 (K&R C); fu standardizzato alla fine degli anni '80 (C89) e poi aggiornato (C99, C11, C17, C23).
:::

::: domanda Quali sono le quattro caratteristiche del C secondo la slide 27?
Compilato (un compilatore lo traduce in linguaggio macchina), imperativo (istruzioni come ordini), strutturato (blocchi tra graffe), fortemente tipizzato (bisogna dichiarare il tipo di ogni variabile).
:::

::: domanda Che cosa fanno `#include <stdio.h>` e la funzione `main`?
La direttiva chiede al preprocessore di includere l'header stdio.h, che dichiara funzioni come printf e scanf. `main` è la funzione obbligatoria da cui parte l'esecuzione: `int main(void)` non riceve input e restituisce un intero al sistema operativo.
:::

::: domanda Quali sono le sequenze di escape principali?
`\n` nuova riga, `\t` tabulazione, `\\` backslash, `\"` doppio apice, `\0` terminatore della stringa.
:::

::: domanda Quali regole valgono per gli identificatori?
Distinguono maiuscole e minuscole; non possono essere parole chiave né nomi della libreria standard; devono essere chiari e non troppo simili tra loro. In più: solo lettere, cifre e trattino basso, senza cominciare con una cifra.
:::

::: domanda Quali sono gli stadi della compilazione con gcc?
Preprocessore (direttive come #include), compilatore (dal C all'assembly), assemblatore (dall'assembly al file oggetto in linguaggio macchina), linker (unisce file oggetto e librerie in un eseguibile).
:::

::: domanda Che cosa fanno le opzioni `-Wall` e `-Werror`?
`-Wall` attiva i principali avvisi del compilatore; `-Werror` li trasforma in errori, così con un solo avviso il programma non viene prodotto. Sono le opzioni dell'esame.
:::

::: domanda Che differenza c'è tra errori di compilazione, a runtime e logici?
Quelli di compilazione violano la sintassi e li trova subito il compilatore; quelli a runtime emergono durante l'esecuzione (divisione per zero, accesso non valido alla memoria); quelli logici lasciano girare il programma, che però fa la cosa sbagliata.
:::

## Glossario

```glossario
Linguaggio macchina | Istruzioni in forma numerica (bit), eseguite direttamente dal processore; diverso per ogni architettura.
Instruction set | L'insieme delle istruzioni macchina di un'architettura.
Assembly | Rappresentazione simbolica del linguaggio macchina, con mnemonici come LOAD, ADD, STORE.
Assembler | Programma che traduce l'assembly in linguaggio macchina.
LOAD / STORE | Copiano un dato dalla memoria a un registro / da un registro alla memoria.
CMP | Confronta due registri; l'esito resta nella CPU (registro di stato).
Salto condizionato / incondizionato | JMPEQ salta solo se l'ultimo confronto ha dato «uguali»; JMP salta sempre.
Linguaggio di alto livello | Linguaggio con istruzioni vicine al linguaggio matematico e naturale, indipendente dall'hardware.
Compilatore | Programma che traduce un linguaggio di alto livello in linguaggio macchina (o in assembly).
Portabilità | Possibilità di usare lo stesso programma su macchine diverse, ricompilandolo.
FORTRAN | FORmula TRANslator, linguaggio IBM degli anni '50 per il calcolo scientifico.
Commento | Testo ignorato dal compilatore: da `//` a fine riga, oppure tra `/*` e `*/`.
Direttiva del preprocessore | Riga che inizia con #, come #include.
File di intestazione (header) | File .h con dichiarazioni di funzioni, come stdio.h.
Funzione main | La funzione obbligatoria da cui comincia l'esecuzione.
Blocco | Gruppo di istruzioni tra graffe { }; i blocchi si possono annidare.
Istruzione (statement) | Un comando del programma; in C termina con ;.
Stringa | Testo tra doppi apici.
Sequenza di escape | Coppia di caratteri che inizia con la barra rovesciata e rappresenta un carattere speciale: `\n`, `\t`, `\\`, `\"`, `\0`.
Token | Unità sintattica in cui il parser divide il codice: parole chiave, identificatori, operatori, stringhe, costanti.
Identificatore | Nome di una variabile, funzione, costante o tipo; distingue maiuscole e minuscole.
Parola chiave (keyword) | Parola riservata del C, come int, while, return.
File oggetto | Unità di compilazione tradotta in linguaggio macchina (.o).
Linker | Unisce file oggetto e librerie in un programma eseguibile.
gcc | Il compilatore del corso (GNU Compiler Collection).
Errore a runtime | Errore che si manifesta durante l'esecuzione.
Errore logico | Il programma gira ma non fa ciò che dovrebbe.
```

## Checklist

```checklist
- So spiegare la differenza tra linguaggio macchina e assembly e perché nessuno dei due è portabile.
- So eseguire a mano il programma dell'addizione, con PC, registri e memoria dopo ogni istruzione.
- So leggere il programma della moltiplicazione in assembly e collegarlo riga per riga alla versione V6 della lezione 01A.
- So spiegare CMP, JMPEQ e JMP e come formano un ciclo.
- So dire perché sono nati i linguaggi di alto livello e che cosa fa un compilatore.
- So raccontare in breve la nascita del C e le sue quattro caratteristiche.
- So spiegare ogni riga del programma «Buongiorno dal C.».
- So usare le sequenze di escape `\n`, `\t`, `\\`, `\"` in `printf`.
- So riconoscere un identificatore valido e le parole chiave.
- So elencare gli stadi della compilazione e compilare con gcc -Wall -Werror.
- So distinguere errori di compilazione, a runtime e logici, e leggere un messaggio di gcc.
```

## Fonti

- **Slide della lezione**: «Dal linguaggio macchina al C. Dai bit e registri alla programmazione strutturata di alto livello e portabile» (02A_da_assembly_a_c), Programmazione I – Teoria, canale B, A.A. 2026/27, 50 pagine; il numero di slide è accanto a ogni titolo.
- **Canali A e C**: deck «Dal linguaggio assembly al C» del canale A e lezione 01 «Introduzione» del canale C sulle pagine Moodle 2026/27 ([canale A](https://informatica.i-learn.unito.it/course/view.php?id=3701), [canale C](https://informatica.i-learn.unito.it/course/view.php?id=3767)), consultate il 30/09/2026.
- **Messaggi del compilatore e assembly**: ottenuti con gcc 16.1 (MinGW-w64) compilando gli esempi con `-Wall -Werror`; l'assembly con `gcc -S -O0 -masm=intel`.
- **Esame e laboratori**: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Le parti **«Oltre le slide»** (assembly prodotto da gcc, commenti su più righe, caratteri degli identificatori) e gli esercizi sono aggiunte di questi appunti.
