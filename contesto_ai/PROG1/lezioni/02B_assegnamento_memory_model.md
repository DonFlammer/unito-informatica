---
corso: PROG1
lezione: 02B
titolo: Memoria e variabili, assegnamento ed espressioni
data: 2026-10-06
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 02B
descrizione: >-
  Appunti della lezione 02B di Programmazione I (canale B): i tipi del C e perché sono finiti, le variabili con nome,
  tipo, indirizzo e valore, dimensioni e sizeof, identificatori, visibilità e durata, il primo modello della memoria con
  area codice, area dati, stack, frame pointer e stack pointer, l'assegnamento, le espressioni intere con precedenza,
  divisione intera e modulo, printf con gli specificatori, gli assegnamenti composti e gli operatori ++ e --.
lede: >-
  Che cosa c'è dietro int x = 10? Un nome, un tipo, una casella di memoria e un valore. Qui impari a disegnare la
  memoria di un programma C riga per riga, come negli esercizi d'esame sullo stato della memoria, e a fare i primi
  conti con gli interi, sapendo dove il C ti sorprende: numeri troppo grandi, virgole che spariscono.
materiale: slide
scheda:
  Slide: 02B_assegnamento_memory_model («Memoria e Variabili») · 41 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 90–120 minuti, meglio con gcc a portata di mano
fonte: >-
  Slide «Memoria e Variabili. Modello della memoria per il linguaggio C, dalle variabili alle espressioni»
  (02B_assegnamento_memory_model), Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/02B_assegnamento_memory_model.html
genera_html: true
---

## In breve

- Un **tipo** dice come leggere i bit in memoria: quanti byte occupano, quali valori sono ammessi, quali operazioni si possono fare. Senza tipi ci sarebbero solo sequenze di 0 e 1.
- Una **variabile** ha quattro cose: un **nome** (`contatore`), un **tipo** (`int`), un **indirizzo** (dove sta in memoria) e un **valore** (che cosa contiene adesso). L'indirizzo lo sceglie il sistema, non tu.
- I tipi numerici del C sono **finiti**: `int` contiene solo gli interi da circa −2,1 miliardi a +2,1 miliardi, `float` approssima i reali con un numero limitato di cifre.
- Con la **dichiarazione** `int x;` si riserva lo spazio per `x` in una zona della memoria chiamata **stack** (pila). Il valore iniziale è **indeterminato**: negli schemi si scrive «?».
- Nel **modello della memoria** ci sono un'area codice e un'area dati. **PC** indica l'istruzione da eseguire, **FP** l'inizio delle variabili di `main`, **SP** la prossima casella libera. Lo stack si disegna in alto e cresce verso il basso.
- L'**assegnamento** `variabile = espressione;` calcola prima il valore a destra, poi lo copia nella casella a sinistra.
- Sugli interi: `+`, `-`, `*`, `/` (divisione **intera**: `13 / 3` fa 4) e `%` (resto: `13 % 3` fa 1). `*`, `/`, `%` vengono prima di `+` e `-`, da sinistra a destra. `printf` usa gli **specificatori**: `%d` per `int`, `%f` per `float`, `%zu` per `size_t`.
- Scorciatoie: `x += 3` vuol dire `x = x + 3` (e così `-=`, `*=`, `/=`, `%=`); `x++` aumenta `x` di 1, `x--` lo diminuisce di 1.

> [!CANALI]
> **Canale A (Fiandrotti).** Il deck 2025/26 «Assegnazione, memory model, scambio» (55 slide) ha gli stessi contenuti di questa lezione e in più lo **scambio di due variabili** (`swap`), che nel canale B 2025/26 era una lezione a parte, la settimana dopo. Il deck 2026/27 del canale A per questa settimana non l'ho ancora visto.
>
> **Canale C (Mazzei).** Tipi, variabili, assegnamento, modello della memoria con FP e SP e scambio sono nella lezione 02 «Introduzione al C» (70 slide), insieme a `main`, `printf` e gcc.
>
> **Canale B 2025/26.** La lezione «Memoria e Variabili, operatore di assegnamento» (39 slide) era quasi uguale a questa.
>
> L'esame è unico per i tre canali, e gli esercizi sullo **stato della memoria** partono proprio da questo modello.

## Dai bit ai tipi (slide 2–3)

In memoria ci sono solo bit. Prendi questi 8 bit:

```text
0100 0001
```

Che cosa sono? Dipende da come li leggi:

- come **numero intero** sono 65 (64 + 1, ricordi la base 2 della lezione 02 di Fondamenti);
- come **carattere** sono la lettera `A`, perché nel codice ASCII la `A` ha il numero 65;
- come pezzo di un numero più lungo non vogliono dire niente da soli.

I bit da soli non bastano: serve una regola per leggerli. Questa regola è il **tipo**. Le slide lo dicono così: un tipo è un ponte tra i bit e il senso che vogliamo dare ai dati.

Un tipo del C stabilisce sei cose (slide 3):

| Che cosa | Esempio |
|---|---|
| **nome**, usato nel codice | `int`, `float`, `struct Persona` |
| **dimensione** in memoria | `int` di solito 4 byte, `double` 8 byte |
| **dominio**: i valori ammessi | `int`: gli interi in un certo intervallo |
| **operazioni** consentite | somma tra interi, radice quadrata sui reali |
| **rappresentazione** dei bit | complemento a 2 per gli interi, IEEE 754 per i reali |
| **compatibilità** con altri tipi | regole di conversione automatiche e con il *cast* |

La rappresentazione dei bit (complemento a 2, IEEE 754) la studi in Fondamenti dell'Informatica (lezione 03) e in Architettura degli Elaboratori. Qui ti basta sapere che esiste.

::: prova Gli stessi 8 bit `0011 0000` letti come intero valgono 48. Che cosa sono letti come carattere ASCII?
Il carattere `0` (la cifra zero): nella tabella ASCII le cifre partono dal codice 48. È un esempio di come lo stesso contenuto cambi senso cambiando il tipo.
:::

> [!RICORDA]
> Un tipo dice come leggere i bit: quanti byte, quali valori, quali operazioni, come sono codificati, come si convertono in altri tipi.

## Le variabili (slide 4–6)

Nella macchina di Von Neumann della lezione 02A le istruzioni lavoravano sugli **indirizzi**: `LOAD, R0, @400`. Programmare così vuol dire ricordarsi a memoria che all'indirizzo 400 c'è il prezzo e al 404 la quantità. I linguaggi di alto livello danno un **nome** a quelle caselle: invece di «la casella 400» scrivi `prezzo`. Questo nome con il suo tipo è una **variabile**.

Pensa a un cassetto di una cassettiera:

- sull'etichetta c'è scritto il **nome**;
- la forma del cassetto dice che cosa ci può stare: è il **tipo**;
- la posizione del cassetto nella cassettiera è l'**indirizzo**;
- quello che c'è dentro adesso è il **valore**, e può cambiare.

> [!DEF] Variabile (slide 4–5)
> Una variabile associa un **nome** e un **tipo** a una porzione di memoria che contiene un **valore**. È definita da: nome, tipo, indirizzo (la posizione in memoria) e valore (il contenuto attuale, che può cambiare durante l'esecuzione).

**Come si legge.** Una variabile è una casella di memoria a cui dai un nome. Il tipo dice quanti byte occupa e come leggerli. Il valore è quello che c'è dentro in questo momento.

L'esempio della slide 5:

```c
int contatore = 1;
float media = 60.54;
```

| | `contatore` | `media` |
|---|---|---|
| nome | `contatore` | `media` |
| tipo | `int` | `float` |
| indirizzo (esempio) | `0x904A` | `0x367F` |
| valore | 1 | 60.54 |

Gli indirizzi si scrivono di solito in **esadecimale**, con il prefisso `0x` (lezione 01 di Fondamenti). Quelli della tabella sono inventati: l'indirizzo vero lo decidono il compilatore e il sistema quando il programma parte, e cambia da un'esecuzione all'altra. Il programmatore non lo sceglie: sceglie il **tipo**, cioè quali valori può contenere la variabile, come sono codificati, quali operazioni si possono fare e come interagisce con altri tipi (slide 6).

> [!NOTA] «Solo in parte automatica»
> La slide 6 avverte che in C la gestione della memoria è solo **parzialmente** automatica. Le variabili di questa lezione nascono e spariscono da sole. Più avanti nel corso vedrai la memoria che chiedi e restituisci tu, con `malloc` e `free`.

::: prova Quali delle quattro proprietà di una variabile possono cambiare mentre il programma gira?
Solo il valore. Nome, tipo e indirizzo restano gli stessi per tutta la vita della variabile.
:::

> [!RICORDA]
> Variabile = nome + tipo + indirizzo + valore. Tu scegli nome e tipo; l'indirizzo lo sceglie il sistema; il valore cambia con gli assegnamenti.

## I tipi del C (slide 7–9, 12)

La slide 7 mostra la famiglia completa dei tipi del C:

- **tipi primitivi** (già pronti nel linguaggio): interi, naturali (senza segno), reali;
- **tipi derivati**, costruiti da altri: puntatori, array, `struct`, `union`, `enum`, funzioni;
- **`void`**, il tipo «vuoto»;
- **`typedef`**, per dare un nome nuovo a un tipo;
- **qualificatori** come `const`, che si aggiungono a un tipo.

Per ora ne bastano pochi (slide 8):

| Tipo | Per che cosa | Nota |
|---|---|---|
| `int` | numeri interi ($\Z$) | ci sono anche `short`, `long`, `long long` |
| `unsigned int` | numeri naturali ($\N$), senza segno | |
| `float` | numeri con la virgola ($\R$) | c'è anche `double`, più preciso |
| `char` | caratteri | occupa 1 byte (8 bit) |
| `size_t` | dimensioni, numeri di elementi | intero senza segno, da `<stddef.h>` |
| `bool` | vero o falso (`true`/`false`, cioè 1/0) | da `<stdbool.h>` |

La slide 12 li raggruppa per uso: numeri **naturali** (le versioni `unsigned`), **interi** (`short`, `int`, `long`, `long long`), **reali** (`float`, `double`), **dimensioni** (`size_t`, `ptrdiff_t`), **caratteri e byte** (`char`, `unsigned char`), **logico** (`bool`).

### I numeri del C sono finiti (slide 9)

Gli insiemi della matematica $\N$, $\Z$ e $\R$ sono **infiniti**. Una variabile occupa un numero fisso di byte, quindi un tipo può contenere solo un numero **finito** di valori.

Un `int` occupa di solito 4 byte, cioè 32 bit: le combinazioni possibili sono $2^{32}$, circa 4,3 miliardi. Metà vanno ai negativi e metà allo zero e ai positivi:

$$-2\,147\,483\,648 \le \text{int} \le 2\,147\,483\,647, \qquad \text{cioè da } -2^{31} \text{ a } 2^{31} - 1.$$

Un `unsigned int` usa gli stessi 32 bit solo per lo zero e i positivi: da 0 a $2^{32} - 1 = 4\,294\,967\,295$.

Per i reali il limite è un altro: `float` e `double` hanno un numero limitato di cifre, quindi molti numeri vengono **approssimati**. La lezione 03 di Fondamenti mostra come funziona la virgola mobile.

> [!IDEA] Un contachilometri
> Un contachilometri a 6 cifre arriva a 999 999 e poi torna a 000 000. Un `int` fa qualcosa di simile quando supera il valore massimo: è l'**overflow**, che vedi nella sezione sull'assegnamento.

::: prova Quanti valori diversi può contenere un tipo da 1 byte? E da 2 byte?
1 byte = 8 bit: $2^8 = 256$ valori. 2 byte = 16 bit: $2^{16} = 65\,536$ valori.
:::

> [!RICORDA]
> I tipi del C sono modelli **finiti** dei numeri della matematica: gli interi hanno un minimo e un massimo, i reali hanno una precisione limitata.

## Dichiarare una variabile (slide 10)

Prima di usare una casella bisogna chiederla, dicendo il nome e il tipo:

```c
int x;
```

Questa riga è una **dichiarazione**: dice al compilatore che esiste una variabile di nome `x` e di tipo `int`. Quando il programma arriva a questa riga, riserva lo spazio per un `int` (4 byte) in una zona della memoria chiamata **pila** o **stack**. Da quel momento puoi usare la casella con il nome `x`.

Il nome `x` esiste solo nel sorgente C. Nell'assembly della lezione 02A non ci sono nomi: il compilatore trasforma ogni nome in un **indirizzo**. Per questo le slide dicono che l'identificatore è **simbolico**.

::: prova Dopo `int voti;` il programma sa già quanti byte occupa `voti`? Sa già che valore contiene?
Sa quanti byte occupa: il tipo `int` lo dice (di solito 4). Non sa che valore contiene: nessuno ce l'ha ancora scritto.
:::

> [!RICORDA]
> Ogni variabile va dichiarata con tipo e nome prima di usarla. La dichiarazione riserva lo spazio sullo stack.

## Stampare i valori con printf (slide 11, 37–38)

La prima cosa che si fa con una variabile è guardarne il valore.

```c
int x = 10;          // variabile intera
float y = 3.14f;     // variabile reale (in virgola mobile)
printf("La variabile x vale: %d\n", x);   // %d → int
printf("La variabile y vale: %f\n", y);   // %f → float
```

Stampa:

```text
La variabile x vale: 10
La variabile y vale: 3.140000
```

`printf` riceve prima una **stringa di formato**, poi i valori da stampare, separati da virgole. Dentro la stringa:

- il testo normale viene stampato così com'è;
- ogni **specificatore di formato** (`%d`, `%f`, …) è un posto da riempire: il primo specificatore prende il primo valore dopo la stringa, il secondo il secondo, e così via.

```c
printf("x vale %d, y vale %d\n", x, y);
```

Il primo `%d` stampa `x`, il secondo `%d` stampa `y` (slide 37).

`%f` stampa sei cifre dopo la virgola: per questo 3.14 diventa `3.140000`. La `f` in fondo a `3.14f` dice che la costante è un `float`; senza, `3.14` sarebbe un `double`.

### Larghezza e zeri (slide 38)

| Istruzione | Stampa (con `x = 7`) | Che cosa fa |
|---|---|---|
| `printf("x vale %d\n", x);` | `x vale 7` | quante cifre servono |
| `printf("x vale %6d\n", x);` | `x vale      7` | almeno 6 posizioni, spazi a sinistra |
| `printf("x vale %06d\n", x);` | `x vale 000007` | almeno 6 posizioni, zeri a sinistra |

Risultati provati con gcc 16.1. Tutti i formati sono nel manuale della libreria GNU C (link nella slide 38 e nelle fonti).

> [!TRAPPOLA] Lo specificatore deve corrispondere al tipo
> `printf("%f", x)` con `x` di tipo `int` è un errore: `printf` legge i bit dell'intero come se fossero un reale e stampa un numero senza senso. Con `-Wall -Werror` gcc lo blocca:
> ```text
> error: format '%f' expects argument of type 'double', but argument 2 has type 'int' [-Werror=format=]
> ```
> (`printf` riceve i `float` già convertiti in `double`: per questo il messaggio parla di `double`.)

::: prova Che cosa stampa `printf("%d + %d = %d\n", 2, 3, 2 + 3);`?
`2 + 3 = 5`. Tre specificatori, tre valori nell'ordine; il terzo è il risultato dell'espressione `2 + 3`.
:::

> [!RICORDA]
> `printf("testo con %d", valore)`: uno specificatore per ogni valore, nello stesso ordine, e del tipo giusto (`%d` int, `%f` float, `%zu` size_t, `%c` char).

## Quanto spazio occupa un tipo: sizeof (slide 13–15)

Il C non fissa la dimensione esatta dei tipi, perché deve funzionare su macchine molto diverse, dai microcontrollori ai server. Fissa solo un **ordine**:

$$\texttt{sizeof(char)} \le \texttt{sizeof(short)} \le \texttt{sizeof(int)} \le \texttt{sizeof(long)} \le \texttt{sizeof(long long)}$$

$$\texttt{sizeof(float)} \le \texttt{sizeof(double)}$$

`sizeof` è un **operatore** che dice quanti byte occupa un tipo o una variabile. Il risultato ha tipo `size_t`, e si stampa con `%zu`:

```c
printf("int occupa %zu byte\n", sizeof(int));
```

Le slide 14–15 danno una tabella di riferimento per le macchine a 32 e 64 bit, con intervalli e specificatori. Le righe principali:

| Tipo | Byte (tipico) | Intervallo | Specificatore |
|---|--:|---|---|
| `char` | 1 | da −128 a 127 | `%c` (come carattere) |
| `short` | 2 | da $-2^{15}$ a $2^{15} - 1$ | `%hd` |
| `int` | 4 | da $-2^{31}$ a $2^{31} - 1$ | `%d` |
| `long` | 4 o 8 | dipende dalla macchina | `%ld` |
| `long long` | 8 | da $-2^{63}$ a $2^{63} - 1$ | `%lld` |
| `unsigned int` | 4 | da 0 a $2^{32} - 1$ | `%u` |
| `size_t` | 4 (32 bit) o 8 (64 bit) | da 0 in su | `%zu` |
| `float` | 4 | circa da $10^{-38}$ a $10^{38}$ | `%f` |
| `double` | 8 | circa da $10^{-308}$ a $10^{308}$ | `%lf` (in `scanf`) |

La slide 15 dice esplicitamente: **non serve impararle a memoria**. Servono gli specificatori più usati (`%d`, `%u`, `%f`, `%c`, `%zu`) e l'idea che ogni tipo ha un intervallo.

> [!NOTA] Su Windows `long` è da 4 byte
> La tabella delle slide dà `long` da 8 byte sulle macchine a 64 bit. È vero su Linux e macOS, ma non su Windows: sul mio PC (Windows 11 a 64 bit, gcc 16.1) `sizeof(long)` vale **4**. È proprio il motivo per cui il C fissa solo l'ordine tra i tipi e non le dimensioni. Sullo stesso PC: `char` 1, `short` 2, `int` 4, `long long` 8, `float` 4, `double` 8, `bool` 1, `size_t` 8.

> [!NOTA] Due refusi nella tabella
> Nella slide 14 lo specificatore di `ptrdiff_t` è scritto `%t`: quello vero è `%td`. Nella slide 15 compare «unsigned signed int», che non è un tipo del C: il nome è `unsigned int`.

::: prova Che cosa stampa `printf("%zu\n", sizeof(char));` su qualunque macchina?
`1`. Lo standard del C fissa `sizeof(char)` uguale a 1: il `char` è l'unità con cui si misurano gli altri tipi.
:::

> [!RICORDA]
> `sizeof(tipo)` dà i byte, di tipo `size_t`, stampati con `%zu`. Il C garantisce solo l'ordine `char` ≤ `short` ≤ `int` ≤ `long` ≤ `long long`: le dimensioni vere dipendono dalla macchina.

## I nomi delle variabili (slide 16–17)

Le regole per gli **identificatori** (lezione 02A):

- possono contenere lettere, cifre e trattino basso `_`;
- devono cominciare con una lettera o con `_` (di solito una lettera minuscola);
- niente spazi né simboli speciali;
- devono essere **unici** nel loro ambito: due variabili nello stesso blocco non possono avere lo stesso nome.

Esempio della slide 16: `int laMiaPrimaVariabile;`.

Oltre alle regole ci sono le **convenzioni** del corso (slide 17):

- tutto minuscolo, oppure **camelCase** per i nomi di più parole: `sommaTot`, `media7giorni`, `elementoTrovato` (la prima parola minuscola, le altre con l'iniziale maiuscola);
- nomi che dicono il **ruolo** del dato: `somma`, `media`, `massimoTrovato`;
- nomi corti come `s`, `m`, `flag` solo quando il senso è chiaro dal contesto;
- mai nomi senza senso come `pippo` o `nonSoCheNomeDare`.

Il nome non è un dettaglio: un buon nome rende il codice leggibile, riduce gli errori e aiuta a ragionare. All'esame il codice viene anche letto da un docente.

> [!TRAPPOLA] Un nome che comincia con una cifra
> `int 2x = 3;` non compila. gcc 16.1:
> ```text
> error: invalid suffix 'x' on integer constant
> ```
> Il compilatore legge `2` come un numero e `x` come un «suffisso» sbagliato del numero.

::: prova Quali di questi nomi sono validi? `media7giorni`, `7giorni`, `somma_tot`, `somma tot`.
Validi: `media7giorni` (la cifra non è all'inizio) e `somma_tot`. Non validi: `7giorni` (comincia con una cifra) e `somma tot` (contiene uno spazio).
:::

> [!RICORDA]
> Lettere, cifre e `_`, senza cominciare con una cifra. Nomi che dicono il ruolo, in camelCase: `sommaTot`, `elementoTrovato`.

## Dove e per quanto vive una variabile (slide 18)

Una variabile ha due proprietà in più, legate a **dove** e **quando** esiste.

La **visibilità** (*scope*) dice in quale parte del codice puoi usare il nome:

- **locale** (o automatica, il caso normale): dichiarata dentro una funzione o un blocco `{ … }`, si usa solo lì dentro;
- **globale**: dichiarata fuori da tutte le funzioni, si vede in tutto il file (e in altri file, se dichiarata `extern`);
- **statica**: con `static`, conserva il valore tra una chiamata e l'altra ma resta visibile solo nel suo blocco.

La **durata** (*lifetime*) dice per quanto tempo la variabile occupa memoria:

- le variabili **locali** stanno sullo **stack** e spariscono quando finisce il blocco;
- le variabili **globali** e **statiche** esistono per tutto il programma;
- le variabili **dinamiche** stanno in un'altra zona, lo **heap**: le crei tu con `malloc()` e restano finché non le liberi (più avanti nel corso).

::: prova Una variabile dichiarata dentro le graffe di `main` è locale o globale? Dove sta in memoria?
È locale: si vede solo dentro `main`. Sta sullo stack e sparisce quando `main` finisce.
:::

Per capire il C bisogna sapere come la memoria viene presa e restituita. Il corso usa per questo un **modello della memoria**, che vedi nella prossima sezione.

> [!ESAME] Niente `static` e niente globali
> Nelle regole d'esame (scheda del corso) `static` è **vietato** negli esercizi di programmazione. Anche le variabili globali non servono: usa solo variabili locali e parametri.

> [!RICORDA]
> Locali: visibili nel loro blocco, vivono sullo stack finché il blocco dura. Globali e statiche: vivono per tutto il programma. Dinamiche: nello heap, finché non le liberi.

## Il modello della memoria (slide 19–26)

Negli esercizi d'esame sullo **stato della memoria** si disegna la memoria di un programma riga per riga. Il modello è questo.

### Area codice e area dati (slide 19–21)

Quando lanci un programma, il sistema lo **carica** dal disco in memoria centrale e gli riserva una zona divisa in due:

- l'**area codice**, con le istruzioni del programma: ha una dimensione **fissa**;
- l'**area dati**, con le variabili: può crescere, ma fino a un massimo.

Le variabili vengono messe nell'area dati **una dopo l'altra, nell'ordine in cui sono dichiarate**. Nel disegno ogni riga è una parola di 32 bit (4 byte).

### Tre indirizzi speciali (slide 22)

Tre registri della CPU tengono il segno di dove si è arrivati:

| Nome | Sigla | Che cosa indica |
|---|---|---|
| program counter | PC | l'istruzione da eseguire, nell'area codice (all'inizio: la prima istruzione di `main`) |
| frame pointer | FP | l'indirizzo da cui cominciano le variabili di `main` |
| stack pointer | SP | l'indirizzo in cui verrà messa la prossima variabile |

All'inizio, prima di qualunque dichiarazione, FP e SP coincidono.

### Lo stack cresce verso il basso (slide 23–24)

La parte dell'area dati che contiene le variabili si chiama **stack** (pila). Nel modello si disegna in **alto** e cresce verso gli indirizzi **più bassi**: ogni nuova variabile va sotto la precedente.

È come una pila di piatti appesa al soffitto: ogni piatto nuovo si aggiunge sotto. Quando dichiari `int x;`, SP scende di 4 byte (la dimensione di un `int`) e la casella tra il vecchio e il nuovo SP diventa `x`.

> [!NOTA] Una convenzione di disegno
> La direzione in cui cresce lo stack dipende dal processore e dal sistema operativo. Nel corso si usa sempre questa: stack in alto, crescita verso il basso (slide 23).

Se le variabili sono troppe e lo spazio dello stack finisce, il programma si interrompe con un errore a runtime di tipo **stack overflow** (slide 24).

### Il valore iniziale è «?» (slide 25)

```c
int main(void) {
    int x;
}
```

Dopo `int x;` lo spazio è riservato, ma nessuno ci ha scritto: dentro c'è quello che era rimasto in quei byte da prima. Il valore è **indeterminato**, e negli schemi si scrive **«?»**.

Ho provato a stamparlo:

```c
#include <stdio.h>
int main(void) {
    int x;
    printf("x vale %d\n", x);
    return 0;
}
```

Senza `-Werror` gcc avvisa (`warning: 'x' is used uninitialized`) e il programma stampa un numero a caso, sul mio PC `x vale 32758`. Con `-Wall -Werror` non compila:

```text
error: 'x' is used uninitialized [-Werror=uninitialized]
```

> [!TRAPPOLA] «?» non vuol dire 0
> Una variabile locale non inizializzata **non** vale 0: vale quello che capita. Negli esercizi sullo stato della memoria, una casella mai assegnata si scrive «?», e un calcolo che la usa dà «?».

### Più variabili (slide 26)

```c
int main(void) {
    int x;
    int y;
    int z;
}
```

Tre `int` da 4 byte: 12 byte, nell'ordine di dichiarazione. Lo stato dopo l'ultima dichiarazione:

| Indirizzo | Contenuto | Nome |
|---|---|---|
| FP − 4 | ? | `x` |
| FP − 8 | ? | `y` |
| FP − 12 | ? | `z` ← SP |

(In alto gli indirizzi più grandi: la riga di `x` è la prima sotto FP, e SP è sceso di 12 byte.)

::: prova Dopo `int a; int b;` di quanti byte è sceso SP rispetto a FP? E in che riga sta `b`?
Di 8 byte (due `int` da 4). `b` sta sotto `a`, all'indirizzo FP − 8, perché è stata dichiarata dopo.
:::

> [!RICORDA]
> Area codice fissa, area dati con lo stack in alto che cresce verso il basso. PC = istruzione corrente, FP = inizio delle variabili di `main`, SP = prossima casella libera. Variabili in ordine di dichiarazione, valore iniziale «?».

## L'assegnamento (slide 27–29)

Una casella con «?» non serve a molto. Per metterci un valore si usa l'operatore `=`:

```c
int x;
x = 10;
```

Oppure tutto in una riga, dichiarazione e primo valore insieme: è una **definizione con inizializzazione**.

```c
int x = 10;
```

### Come funziona (slide 29)

La forma generale è:

```c
variabile = espressione;
```

Si esegue in tre passi:

1. si **calcola** l'espressione a destra (in gergo: viene **valutata**);
2. il calcolo produce un **valore**;
3. il valore viene **copiato** nella casella della variabile a sinistra; quello che c'era prima va perso.

I due lati hanno nomi tecnici:

- il lato sinistro è l'**lvalue** (da *left value*): deve indicare una casella di memoria, cioè una variabile;
- il lato destro è l'**rvalue** (*right value*): un valore o un'espressione da calcolare.

Per questo `x = x + 1` ha senso in C: prima si calcola `x + 1` con il valore vecchio, poi il risultato va in `x`. Non è un'equazione, è un ordine: «metti in `x` il valore di `x + 1`». E per questo `10 = x` non compila: 10 non è una casella.

> [!TRAPPOLA] `=` non è il confronto
> In C `=` **assegna**. Per chiedere «sono uguali?» si usa `==`, che vedrai con le condizioni. Nello pseudocodice della lezione 01A l'assegnamento si scriveva con la freccia `←`.

### Quando il valore non ci sta (slide 28)

L'assegnamento deve rispettare il **tipo**. Tre casi:

| Istruzione | Che cosa succede | Stampa |
|---|---|---|
| `int x = -8;` | normale | `x vale -8` |
| `int x = 2147483649;` | il numero supera il massimo di `int` ($2^{31} - 1$): **overflow** | `x vale -2147483647` |
| `int x = 8.89;` | un `int` non ha la virgola: la parte decimale viene **tagliata** | `x vale 8` |

Ho compilato gli ultimi due con gcc 16.1 e `-Wall -Werror`: **compilano tutti e due senza nessun avviso**, e stampano esattamente quello che dicono le slide. Il compilatore non ti protegge: le slide parlano di overflow «non rilevabili dal compilatore».

- Nel primo caso il numero 2 147 483 649 è $2^{31} + 1$: per entrare in 32 bit «gira» come il contachilometri e diventa $-2^{31} + 1 = -2\,147\,483\,647$.
- Nel secondo `8.89` diventa 8: la virgola viene **troncata**, non arrotondata (anche 8.99 diventerebbe 8).

> [!NOTA] Gli spazi nel numero
> La slide 28 scrive `int x = 2 147 483 649;` con gli spazi per leggerlo meglio. In C un numero non può contenere spazi: nel codice va scritto `2147483649`.

> [!OLTRE] Un avviso che -Wall non dà
> gcc può avvisare della virgola persa con l'opzione `-Wconversion`, che non fa parte di `-Wall`: `warning: conversion from 'double' to 'int' changes value from '8.89…' to '8'`. All'esame si usa solo `-Wall -Werror`, quindi conta saperlo tu.

::: prova Dopo `int a = 5; a = a * 2 + 1;` quanto vale `a`?
11. Si calcola prima la destra con il valore vecchio: $5 \cdot 2 + 1 = 11$, poi 11 va in `a`.
:::

> [!RICORDA]
> `variabile = espressione;`: prima si calcola la destra, poi il valore si copia a sinistra. Il valore deve stare nel tipo: un intero troppo grande «gira» (overflow), un reale messo in un `int` perde la parte decimale. gcc non lo segnala.

## Le espressioni con gli interi (slide 30–32)

Per ora solo espressioni con variabili **intere**. Gli operatori:

| Operatore | Che cosa fa | Esempio | Risultato |
|---|---|---|---|
| `+` | somma | `7 + 2` | 9 |
| `-` | sottrazione | `7 - 2` | 5 |
| `*` | moltiplicazione | `7 * 2` | 14 |
| `/` | divisione **intera** | `7 / 2` | 3 |
| `%` | **resto** della divisione (modulo) | `7 % 2` | 1 |
| `( )` | raggruppa | `(7 + 2) * 2` | 18 |

Esempi della slide 30:

```c
int incasso = biglietti * prezzoBiglietto;
int utile = incasso - costoSala;
```

### Divisione intera e resto (slide 32)

Dividere 13 caramelle in 3 sacchetti uguali: in ogni sacchetto ne vanno 4 e ne avanza 1.

```c
int a = 13, b = 3;
int quot = a / b;    // 4
int r = a % b;       // 1, perche' 13 = 3*4 + 1
```

- `/` tra due interi dà solo la **parte intera** del quoziente. La parte decimale viene **scartata**, non arrotondata: `7 / 2` fa 3, non 3,5 e non 4.
- `%` dà il **resto**: quello che avanza.

Il resto serve molto per la **parità**: se `n % 2` vale 0 il numero è pari, se vale 1 è dispari (per `n` positivo o zero).

> [!OLTRE] Con i numeri negativi
> Il C tronca verso lo zero: `-13 / 3` fa **−4** (non −5) e `-13 % 3` fa **−1**. Vale sempre `(a / b) * b + a % b == a`. Per questo il controllo di parità di un negativo dispari dà −1, non 1: meglio scrivere `n % 2 != 0` per «dispari». Risultati provati con gcc 16.1.

> [!TRAPPOLA] Divisione per zero
> `x / 0` e `x % 0` tra interi compilano, ma all'esecuzione il programma si interrompe (lezione 02A, errori a runtime).

### Chi viene prima (slide 31)

Quando un'espressione ha più operatori, contano le **precedenze**:

1. le **parentesi** `( )` prima di tutto, anche annidate;
2. poi `*`, `/`, `%`;
3. poi `+` e `-`;
4. a parità di livello, **da sinistra a destra**;
5. l'assegnamento `=` per ultimo.

| Espressione | Come si calcola | Risultato |
|---|---|---|
| `2 + 3 * 4` | prima `3 * 4` | 14 |
| `(2 + 3) * 4` | prima la parentesi | 20 |
| `20 / 4 * 2` | da sinistra: `20 / 4` = 5, poi `5 * 2` | 10 |
| `7 / 2 * 2` | `7 / 2` = 3, poi `3 * 2` | 6 |

Risultati provati. L'ultima riga mostra che con gli interi `7 / 2 * 2` **non** torna 7: la divisione ha già perso il resto.

::: prova Quanto vale `10 - 4 % 3 * 2`?
8. Prima `%` e `*` da sinistra: `4 % 3` = 1, poi `1 * 2` = 2. Poi la sottrazione: `10 - 2` = 8.
:::

> [!RICORDA]
> Tra interi `/` taglia la parte decimale e `%` dà il resto. Ordine: parentesi, poi `* / %`, poi `+ -`, da sinistra a destra, e `=` alla fine.

## Un programma seguito nella memoria (slide 33–36)

Il programma «treVariabili» delle slide, eseguito riga per riga:

```c
#include <stdio.h>

int main(void) {
    int x;
    int y;
    int z;
    x = 5;
    y = 2;
    z = x + y;
    printf("Le var x, y  e z valgono %d, %d, %d\n", x, y, z);
}
```

| Dopo la riga | `x` (FP − 4) | `y` (FP − 8) | `z` (FP − 12) | Che cosa è successo |
|---|---|---|---|---|
| `int x; int y; int z;` | ? | ? | ? | 12 byte riservati, SP è sceso a FP − 12 |
| `x = 5;` | **5** | ? | ? | assegnamento di un numero |
| `y = 2;` | 5 | **2** | ? | |
| `z = x + y;` | 5 | 2 | **7** | si leggono `x` e `y`, si somma, si scrive in `z` |
| `printf(…)` | 5 | 2 | 7 | stampa `Le var x, y  e z valgono 5, 2, 7` |

Nella slide 35 la riga `z = x + y;` è affiancata dalle istruzioni assembly che fa davvero la macchina, come nella lezione 02A:

```text
LOAD,  R0, @x      ; copia x in un registro
LOAD,  R1, @y      ; copia y in un altro registro
ADD,   R0, R1      ; somma nei registri
STORE, R0, @z      ; scrive il risultato nella casella di z
```

Una riga di C diventa quattro istruzioni macchina. Il nome `x` è diventato l'indirizzo `@x`.

> [!METODO] Disegnare lo stato della memoria
> 1. Una riga per ogni variabile, nell'ordine di dichiarazione, sotto FP.
> 2. Al momento della dichiarazione scrivi «?».
> 3. A ogni assegnamento: calcola la destra con i valori **attuali**, poi sostituisci il valore della variabile a sinistra.
> 4. Le altre caselle non cambiano.
> 5. Se un calcolo usa una casella «?», il risultato è «?».

::: prova Disegna lo stato dopo `int a = 4; int b; b = a % 3; a = a + b;`.
`a` = 4, `b` = ?; poi `b` = `4 % 3` = 1; poi `a` = `4 + 1` = 5. Stato finale: `a` = 5, `b` = 1.
:::

> [!RICORDA]
> Lo stato della memoria cambia solo con gli assegnamenti, una casella alla volta. Una riga di C come `z = x + y;` corrisponde a più istruzioni macchina: LOAD, LOAD, ADD, STORE.

## Tutti i modi di dare un valore (slide 39–41)

La slide 39 riassume i quattro modi di mettere un valore in una variabile:

| Modo | Codice | Nota |
|---|---|---|
| inizializzazione nella dichiarazione | `int x = 10;` | valore dato subito |
| assegnamento dopo | `int x;` poi `x = 10;` | in mezzo `x` vale «?» |
| da tastiera | `int n;` poi `scanf("%d", &n);` | serve la `&` (Lab01) |
| assegnamento multiplo | `a = b = c = 0;` | si legge da destra: `c = 0`, poi `b = c`, poi `a = b` |

L'assegnamento multiplo funziona perché un assegnamento è anche un'**espressione** che vale il valore assegnato: `c = 0` vale 0, e quel valore va in `b`, e così via.

### Assegnamenti composti (slide 40)

Capita spesso di aggiornare una variabile partendo dal suo valore: `somma = somma + voto`. Il C ha una scorciatoia:

| Operatore | Vuol dire | Esempio | Risultato |
|---|---|---|---|
| `x += y` | `x = x + y` | `x = 5; x += 3;` | 8 |
| `x -= y` | `x = x - y` | `x = 5; x -= 2;` | 3 |
| `x *= y` | `x = x * y` | `x = 5; x *= 4;` | 20 |
| `x /= y` | `x = x / y` | `x = 20; x /= 5;` | 4 |
| `x %= y` | `x = x % y` | `x = 20; x %= 6;` | 2 |

Risultati provati.

### Più uno e meno uno (slide 41)

```c
x++;    // come x = x + 1
x--;    // come x = x - 1
```

Servono ogni volta che si conta: i contatori dei cicli, che arriveranno presto. Le slide li usano solo come **istruzioni a sé**, su una riga da soli. Dentro un'espressione più grande (`y = x++ * 2`) hanno un comportamento più sottile, che il corso non tratta: non usarli così.

::: prova Con `int n = 10;` che cosa vale `n` dopo `n -= 3; n *= 2; n++;`?
15. `10 - 3` = 7, poi `7 * 2` = 14, poi `14 + 1` = 15.
:::

> [!RICORDA]
> `x op= y` vuol dire `x = x op y`. `x++` e `x--` aggiungono o tolgono 1: usali da soli, su una riga.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `=` | «uguale», «prende» | assegnamento: copia il valore di destra nella variabile di sinistra | `x = 10;` |
| `+ - * / %` | più, meno, per, diviso, modulo | operazioni sugli interi; `/` intera, `%` resto | `13 / 3` = 4, `13 % 3` = 1 |
| `+=` `-=` `*=` `/=` `%=` | «più uguale», … | aggiorna la variabile con un'operazione | `x += 3` |
| `++`, `--` | «più più», «meno meno» | aumenta o diminuisce di 1 | `x++` |
| `%d` | «percento di» | in `printf`: un `int` | `printf("%d", x)` |
| `%f` | «percento effe» | in `printf`: un `float` o `double` | `printf("%f", y)` |
| `%zu` | «percento zeta u» | un `size_t`, per esempio un `sizeof` | `printf("%zu", sizeof(int))` |
| `%6d`, `%06d` | | almeno 6 posizioni, con spazi o con zeri | `000007` |
| `sizeof` | «size of» | byte occupati da un tipo o da una variabile | `sizeof(int)` = 4 |
| `0x` | «zero ics» | numero in esadecimale, usato per gli indirizzi | `0x904A` |
| `3.14f` | | costante `float` (senza `f` è `double`) | `float y = 3.14f;` |
| PC, FP, SP | program counter, frame pointer, stack pointer | istruzione corrente, inizio delle variabili, prossima casella libera | |
| ? | «indeterminato» | casella riservata ma mai assegnata | `int x;` |
| $\Z$, $\N$, $\R$ | interi, naturali, reali | gli insiemi della matematica che i tipi approssimano | `int` ≈ $\Z$ |

## Verso l'esame

L'esame di Programmazione I è al PC, unico per i tre canali: appelli **lunedì 25/01/2027** e **giovedì 11/02/2027**. Questa lezione entra in due tipi di esercizio.

**Esercizi sullo stato della memoria.** Nel 2025/26 erano uno dei due esercizi di teoria del canale C (scheda del corso). Si chiede il valore delle variabili dopo una sequenza di istruzioni, che cosa viene stampato, quali caselle sono ancora «?». Il metodo è quello della sezione «Un programma seguito nella memoria»: una colonna per variabile, una riga per istruzione. Più avanti nel corso lo stesso schema si allarga alle chiamate di funzione, con un frame per ogni chiamata.

**Esercizi di programmazione.** Ogni programma usa variabili, assegnamenti, `printf`. Gli errori che costano:

1. **specificatore sbagliato** in `printf` (`%f` per un `int`): con `-Wall -Werror` il programma non compila;
2. **variabile usata prima di darle un valore**: non compila con `-Werror`, e se compilasse darebbe valori a caso;
3. **divisione intera** dove serviva quella con la virgola (`7 / 2` fa 3);
4. **overflow** con numeri grandi: il compilatore non avvisa;
5. **stampe diverse** da quelle richieste: CodeRunner confronta il testo carattere per carattere, spazi compresi.

> [!ESAME] Nomi e leggibilità
> Le soluzioni vengono anche lette (riepilogo d'esame 2025/26 del canale C). Nomi chiari in camelCase, una variabile per ogni ruolo, niente `static` (vietato) né variabili globali.

## Quiz

```quiz
D: Quale tra queste NON è una delle quattro cose che definiscono una variabile, secondo la slide 5?
+ Il numero di volte che viene usata
- Il nome
- Il tipo
- L'indirizzo
- Il valore
= Una variabile è definita da nome, tipo, indirizzo e valore. Quante volte la usi nel programma non fa parte della variabile.

D: Dopo queste righe, quanto vale `r`? `int a = 17, b = 5; int r = a % b;`
N: 2
= 17 = 5 · 3 + 2: il quoziente intero è 3, il resto 2.

D: Che cosa stampa `printf("%d\n", 7 / 2 * 2);`?
+ 6
- 7
- 7.0
- 8
- 3
= Le operazioni `/` e `*` hanno la stessa precedenza e si fanno da sinistra: `7 / 2` è la divisione intera e fa 3, poi `3 * 2` fa 6. Il 7 si otterrebbe solo con la divisione con la virgola, che tra interi non c'è.

D: Dopo `int x;` (variabile locale, senza altre istruzioni), che cosa contiene `x` nel modello della memoria?
+ Un valore indeterminato, che si scrive «?»
- 0
- 1
- Il suo indirizzo
- Niente: la memoria per `x` viene riservata solo al primo assegnamento
= La dichiarazione riserva lo spazio sullo stack, ma non scrive niente: dentro resta quello che c'era. Non è 0, e la memoria è già riservata.

D: Nel modello della memoria del corso, dopo `int a; int b; int c;` in `main`, di quanti byte è sceso lo stack pointer rispetto al frame pointer (int da 4 byte)?
N: 12
= Tre variabili da 4 byte, una sotto l'altra: SP scende di 12 byte.

D: Che cosa stampa questo programma (compilato senza `-Werror`)? `int x = 8.89; printf("x vale %d\n", x);`
+ `x vale 8`
- `x vale 9`
- `x vale 8.89`
- Non compila
- `x vale 8.890000`
= Un `int` non ha la virgola: la parte decimale viene tagliata, non arrotondata. Il programma compila anche con `-Wall -Werror`, senza nessun avviso.

D: Quale istruzione stampa `x vale 000042` con `int x = 42;`?
+ `printf("x vale %06d\n", x);`
- `printf("x vale %6d\n", x);`
- `printf("x vale 0000%d\n", x);`
- `printf("x vale %d000\n", x);`
- `printf("x vale %f\n", x);`
= `%06d` usa almeno 6 posizioni e riempie a sinistra con zeri. `%6d` riempie con spazi. `0000%d` funziona solo per numeri di 2 cifre. `%f` con un `int` non compila con `-Wall -Werror`.

D: Con `int n = 4;` quanto vale `n` dopo `n += 2; n *= 3; n--;`?
N: 17
= `4 + 2` = 6, poi `6 * 3` = 18, poi `18 - 1` = 17.

D: Quale di questi identificatori NON è valido in C?
+ `2risultati`
- `risultati2`
- `_tmp`
- `sommaTot`
- `media_voti`
= Un identificatore non può cominciare con una cifra. Gli altri sono validi; `_tmp` comincia con il trattino basso, ammesso.

D: Su quale di queste affermazioni sulle dimensioni dei tipi il C dà una garanzia?
+ `sizeof(int) <= sizeof(long)`
- `sizeof(int)` vale 4
- `sizeof(long)` vale 8 sulle macchine a 64 bit
- `sizeof(float) == sizeof(double)`
- `sizeof(char)` vale 2
= Il C garantisce solo l'ordine `char` ≤ `short` ≤ `int` ≤ `long` ≤ `long long` (e `sizeof(char)` uguale a 1). Che `int` sia di 4 byte è tipico ma non garantito, e su Windows a 64 bit `long` è di 4 byte, non 8.
```

## Esercizi

::: esercizio base Stato della memoria
Disegna lo stato della memoria (valori di tutte le variabili) dopo ogni riga, e scrivi che cosa viene stampato.
```c
int main(void) {
    int a = 3;
    int b;
    int c = a * 4;
    b = c - a;
    a = a + b;
    printf("%d %d %d\n", a, b, c);
}
```
::: soluzione
| Dopo | `a` | `b` | `c` |
|---|---|---|---|
| `int a = 3;` | 3 | | |
| `int b;` | 3 | ? | |
| `int c = a * 4;` | 3 | ? | 12 |
| `b = c - a;` | 3 | 9 | 12 |
| `a = a + b;` | 12 | 9 | 12 |

Stampa `12 9 12`. Nella riga `a = a + b` si usa il valore vecchio di `a` (3): $3 + 9 = 12$. Verificato con gcc.
:::

::: esercizio base Precedenze
Calcola a mano, poi controlla con un programma: (a) `5 + 12 / 4 * 2`; (b) `(5 + 12) / 4 * 2`; (c) `5 + 12 / (4 * 2)`; (d) `17 % 5 * 3 - 1`.
::: soluzione
(a) `12 / 4` = 3, `3 * 2` = 6, `5 + 6` = **11**.
(b) `17 / 4` = 4 (intera), `4 * 2` = **8**.
(c) `4 * 2` = 8, `12 / 8` = 1, `5 + 1` = **6**.
(d) `17 % 5` = 2, `2 * 3` = 6, `6 - 1` = **5**.
Verificati con gcc 16.1.
:::

::: esercizio base Ore e minuti
Scrivi un programma che, dato `int minuti = 135;`, stampa `135 minuti = 2 ore e 15 minuti` usando `/` e `%`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int minuti = 135;
    int ore = minuti / 60;
    int resto = minuti % 60;
    printf("%d minuti = %d ore e %d minuti\n", minuti, ore, resto);
    return 0;
}
```
Stampa `135 minuti = 2 ore e 15 minuti` (compilato con `-Wall -Werror`). `135 / 60` = 2, `135 % 60` = 15.
:::

::: esercizio medio Le cifre di un numero
Con `int n = 4827;` stampa separatamente le unità, le decine, le centinaia e le migliaia, usando solo `/` e `%`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int n = 4827;
    int unita = n % 10;
    int decine = n / 10 % 10;
    int centinaia = n / 100 % 10;
    int migliaia = n / 1000;
    printf("%d %d %d %d\n", migliaia, centinaia, decine, unita);
    return 0;
}
```
Stampa `4 8 2 7`. `n / 10` toglie l'ultima cifra (482), `% 10` prende quella che ora è l'ultima (2). È lo stesso trucco della conversione in base 2 di Fondamenti, con 10 al posto di 2.
:::

::: esercizio medio Trova gli errori
Il programma seguente con `gcc -Wall -Werror` non compila. Trova i problemi.
```c
#include <stdio.h>

int main(void) {
    int totale;
    float media = 7.5f;
    int 1voto = 28;
    totale = totale + 28;
    printf("totale %f, media %f\n", totale, media);
    return 0;
}
```
::: soluzione
1. `int 1voto` comincia con una cifra: `invalid suffix 'voto' on integer constant`. Si chiama per esempio `voto1`.
2. `totale = totale + 28;` usa `totale` mai inizializzato: `'totale' is used uninitialized`. Va scritto `int totale = 0;`.
3. Nel `printf` `totale` è un `int` stampato con `%f`: `format '%f' expects argument of type 'double', but argument 2 has type 'int'`. Va `%d`.

gcc 16.1 al primo tentativo segnala gli errori 1 e 3. L'errore 2 compare solo dopo aver corretto il nome: finché la riga di `1voto` non compila, gcc non arriva a controllare i valori delle variabili. Per questo si ricompila dopo ogni correzione.

Versione corretta:
```c
#include <stdio.h>

int main(void) {
    int totale = 0;
    float media = 7.5f;
    int voto1 = 28;
    totale = totale + voto1;
    printf("totale %d, media %f\n", totale, media);
    return 0;
}
```
Stampa `totale 28, media 7.500000`.
:::

::: esercizio medio Media che non torna
Con `int a = 7, b = 8;` il programma calcola `int media = (a + b) / 2;` e stampa 7. Perché non 7,5? Come si ottiene 7,5?
::: soluzione
`(a + b) / 2` è una divisione tra interi: $15 / 2$ fa 7, il resto si perde. E anche mettendo il risultato in un `float` (`float media = (a + b) / 2;`) si ottiene 7.000000, perché la divisione è già stata fatta tra interi. Per avere 7,5 uno dei due operandi deve essere reale: `float media = (a + b) / 2.0f;` stampa `7.500000`. Le conversioni tra tipi le vedrai nel laboratorio 02.
:::

::: esercizio difficile Lo scambio di due variabili
Con `int x = 3, y = 8;` scrivi le istruzioni che scambiano i valori: alla fine `x` deve valere 8 e `y` 3. Perché `x = y; y = x;` non funziona?
::: soluzione
`x = y;` mette 8 in `x` e il 3 si perde; poi `y = x;` copia 8 in `y`. Alla fine valgono tutti e due 8. Serve una terza variabile che conservi il valore:
```c
int x = 3, y = 8;
int tmp = x;    // tmp = 3
x = y;          // x = 8
y = tmp;        // y = 3
```
| Dopo | `x` | `y` | `tmp` |
|---|---|---|---|
| inizio | 3 | 8 | |
| `int tmp = x;` | 3 | 8 | 3 |
| `x = y;` | 8 | 8 | 3 |
| `y = tmp;` | 8 | 3 | 3 |

Lo scambio è l'argomento della prossima lezione nel canale B 2025/26 e nel deck del canale A.
:::

::: esercizio esame Che cosa stampa
Senza compilare, scrivi l'output esatto.
```c
#include <stdio.h>

int main(void) {
    int a = 10, b = 4, c;
    c = a / b;
    a %= b;
    b *= c;
    c = a + b * 2;
    printf("a=%d b=%03d c=%4d\n", a, b, c);
    return 0;
}
```
::: soluzione
- `c = 10 / 4` = 2.
- `a %= b`: `a = 10 % 4` = 2.
- `b *= c`: `b = 4 * 2` = 8.
- `c = a + b * 2` = `2 + 16` = 18.

Stampa `a=2 b=008 c=  18`: `%03d` su 3 posizioni con zeri, `%4d` su 4 posizioni con due spazi davanti a 18. Verificato con gcc 16.1.
:::

## Domande di ripasso

::: domanda Che cos'è un tipo e quali cose stabilisce?
Una regola che dà significato ai bit in memoria. Stabilisce nome, dimensione in byte, valori ammessi, operazioni possibili, rappresentazione interna e regole di conversione verso altri tipi.
:::

::: domanda Quali sono le quattro proprietà di una variabile? Quale sceglie il programmatore?
Nome, tipo, indirizzo e valore. Il programmatore sceglie nome e tipo; l'indirizzo lo decidono compilatore e sistema; il valore cambia durante l'esecuzione.
:::

::: domanda Perché un `int` non può contenere qualunque intero?
Perché occupa un numero fisso di byte (di solito 4, cioè 32 bit): può rappresentare solo $2^{32}$ valori, da $-2^{31}$ a $2^{31} - 1$. I tipi del C sono modelli finiti degli insiemi infiniti della matematica.
:::

::: domanda Che cosa garantisce il C sulle dimensioni dei tipi?
Solo l'ordine: char ≤ short ≤ int ≤ long ≤ long long, e float ≤ double; più sizeof(char) uguale a 1. Le dimensioni vere dipendono dalla macchina (su Windows a 64 bit long è di 4 byte).
:::

::: domanda Che cosa succede in memoria quando si dichiara `int x;`?
Viene riservato lo spazio per un int (4 byte) sullo stack: lo stack pointer scende di 4. Il contenuto resta indeterminato («?») finché non si assegna un valore.
:::

::: domanda Che cosa indicano PC, FP e SP nel modello della memoria?
PC: l'istruzione da eseguire nell'area codice. FP: l'indirizzo da cui partono le variabili di main. SP: dove verrà messa la prossima variabile. All'inizio FP e SP coincidono.
:::

::: domanda Come si esegue un assegnamento `variabile = espressione;`?
Si valuta l'espressione a destra, si ottiene un valore e lo si copia nella casella della variabile a sinistra (lvalue), cancellando il valore precedente.
:::

::: domanda Che cosa fanno `/` e `%` tra interi?
`/` dà il quoziente intero, scartando la parte decimale (13 / 3 = 4); `%` dà il resto (13 % 3 = 1).
:::

::: domanda Qual è l'ordine di valutazione in `a + b * c - d / e`?
Prima `b * c` e `d / e` (precedenza più alta, da sinistra), poi la somma e la sottrazione da sinistra a destra: `(a + (b * c)) - (d / e)`.
:::

::: domanda Che cosa vogliono dire `%d`, `%f`, `%zu`, `%6d` e `%06d`?
Intero; reale; size_t (per esempio il risultato di sizeof); intero su almeno 6 posizioni con spazi a sinistra; intero su almeno 6 posizioni con zeri a sinistra.
:::

::: domanda Che differenza c'è tra visibilità e durata di una variabile?
La visibilità (scope) dice dove si può usare il nome; la durata (lifetime) dice per quanto tempo la variabile occupa memoria. Una locale è visibile nel suo blocco e vive sullo stack finché il blocco dura; una globale si vede in tutto il file e vive per tutto il programma.
:::

::: domanda Che cosa fanno `x *= 3` e `x--`?
`x *= 3` equivale a `x = x * 3`; `x--` equivale a `x = x - 1`.
:::

## Glossario

```glossario
Tipo | Regola che dà significato ai bit: dimensione, valori ammessi, operazioni, rappresentazione, conversioni.
Variabile | Nome e tipo associati a una porzione di memoria che contiene un valore.
Indirizzo | Posizione in memoria di una variabile; lo decide il sistema, spesso scritto in esadecimale (0x…).
Dichiarazione | Riga che introduce una variabile con tipo e nome, per esempio `int x;`.
Inizializzazione | Primo valore dato a una variabile nella dichiarazione: `int x = 10;`.
Assegnamento | `variabile = espressione;`: calcola la destra e copia il valore nella variabile.
lvalue / rvalue | Lato sinistro (una casella di memoria) e lato destro (un valore da calcolare) di un assegnamento.
Overflow | Valore che non sta nel tipo: un int oltre il massimo «gira» verso i negativi.
Stack (pila) | Zona dell'area dati dove stanno le variabili locali; nel modello del corso cresce verso il basso.
Heap | Zona della memoria per le variabili dinamiche, create con malloc e liberate a mano.
Program counter (PC) | Registro con l'indirizzo dell'istruzione da eseguire.
Frame pointer (FP) | Indirizzo da cui partono le variabili della funzione in esecuzione (per ora main).
Stack pointer (SP) | Indirizzo in cui verrà messa la prossima variabile.
Stack overflow | Errore a runtime: lo spazio dello stack è finito.
Valore indeterminato («?») | Contenuto di una variabile locale dichiarata e mai assegnata.
sizeof | Operatore che dà i byte occupati da un tipo o da una variabile; il risultato è un size_t.
size_t | Tipo intero senza segno per dimensioni e conteggi, da stddef.h; si stampa con %zu.
Specificatore di formato | Codice come %d o %f in printf che indica dove e come stampare un valore.
Divisione intera | `/` tra interi: tiene solo la parte intera del quoziente.
Modulo | `%`: il resto della divisione intera.
Precedenza | Regola che dice quale operatore si calcola prima.
camelCase | Convenzione per i nomi composti: sommaTot, elementoTrovato.
Visibilità (scope) | Parte del codice in cui si può usare un nome.
Durata (lifetime) | Tempo in cui una variabile occupa memoria.
Assegnamento composto | `x += y` e simili: aggiorna una variabile con un'operazione.
```

## Checklist

```checklist
- So dire che cos'è un tipo e quali sei cose stabilisce.
- So elencare nome, tipo, indirizzo e valore di una variabile e chi li sceglie.
- So spiegare perché int, unsigned int e float sono finiti e qual è l'intervallo di un int a 32 bit.
- So usare sizeof e stamparlo con %zu, e so che il C garantisce solo l'ordine tra le dimensioni.
- So scegliere un nome valido e leggibile in camelCase.
- So distinguere visibilità e durata, e variabili locali, globali, statiche e dinamiche.
- So disegnare area codice, area dati, PC, FP e SP e mettere le variabili sullo stack in ordine di dichiarazione.
- So che una variabile locale non inizializzata vale «?» e che gcc con -Werror non compila se la uso.
- So eseguire un assegnamento: prima la destra, poi la copia a sinistra.
- So prevedere overflow e troncamento negli assegnamenti, anche se gcc non avvisa.
- So calcolare espressioni intere con /, % e le precedenze.
- So usare printf con %d, %f, %6d, %06d.
- So usare +=, -=, *=, /=, %=, ++ e --.
- So seguire un programma riga per riga scrivendo lo stato della memoria.
```

## Fonti

- **Slide della lezione**: «Memoria e Variabili. Modello della memoria per il linguaggio C, dalle variabili alle espressioni» (02B_assegnamento_memory_model), Programmazione I – Teoria, canale B, A.A. 2026/27, 41 pagine; il numero di slide è accanto a ogni titolo.
- **Canali A e C e canale B 2025/26**: deck «Assegnazione, memory model, scambio» (canale A 2025/26), lezione 02 «Introduzione al C» (canale C 2026/27), «Memoria e Variabili, operatore di assegnamento» (canale B 2025/26), dalle pagine Moodle aperte agli ospiti.
- **Formati di printf**: [manuale della libreria GNU C, Formatted Output](https://www.gnu.org/software/libc/manual/html_node/Formatted-Output.html) (citato nella slide 38).
- **Prove**: tutti i programmi e i risultati (dimensioni con sizeof, overflow, troncamento, valore non inizializzato, messaggi d'errore) ottenuti con gcc 16.1 (MinGW-w64, Windows 11 a 64 bit) e `-Wall -Werror -std=c11`.
- **Esame**: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md) (regole d'esame, esercizi sullo stato della memoria).
- I riquadri **«Oltre le slide»** (divisione con i negativi, `-Wconversion`), il riquadro su `long` in Windows, i «Prova tu» e gli esercizi sono aggiunte di questi appunti.
