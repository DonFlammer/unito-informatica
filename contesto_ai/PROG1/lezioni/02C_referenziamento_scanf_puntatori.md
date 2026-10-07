---
corso: PROG1
lezione: 02C
titolo: Indirizzi, scanf e puntatori
data: 2026-10-07
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 02C
descrizione: >-
  Appunti della lezione 02C di Programmazione I (canale B): l'indirizzo di una variabile e l'operatore &, la stampa
  degli indirizzi con %p, la lettura da tastiera con scanf e il suo valore di ritorno, i puntatori T*, l'operatore di
  dereferenziamento *, l'aliasing, i puntatori non inizializzati, NULL, la dimensione dei puntatori e i quattro usi
  del simbolo *.
lede: >-
  Ogni variabile abita a un indirizzo, come una casa. Con & lo scopri, con un puntatore lo scrivi su un biglietto, con *
  vai a quell'indirizzo e leggi o cambi quello che c'è dentro. È anche il motivo della & in scanf: è il corriere che
  consegna il numero letto, e senza indirizzo non sa dove portarlo.
materiale: slide
scheda:
  Slide: 02C_referenziamento_scanf_puntatori («Referenziamento, Input e Puntatori in C») · 56 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 90–120 minuti, meglio con gcc a portata di mano
fonte: >-
  Slide «Referenziamento, Input e Puntatori in C. Dall'indirizzo di memoria ai puntatori»
  (02C_referenziamento_scanf_puntatori), Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/02C_referenziamento_scanf_puntatori.html
genera_html: true
---

## In breve

- Ogni variabile ha un **valore** (che cosa c'è dentro) e un **indirizzo** (dove sta in memoria). L'operatore **`&`** dà l'indirizzo: `&x` si legge «l'indirizzo di `x`».
- `printf` stampa un indirizzo con **`%p`**. Il numero cambia da un'esecuzione all'altra: non va mai usato nella logica del programma.
- **`scanf("%d", &x);`** legge un intero da tastiera e lo scrive in `x`. Serve la `&` perché `scanf` deve sapere **dove** scrivere.
- `scanf` **restituisce** quanti valori ha letto. Se l'input non va bene si ferma e non tocca le variabili rimaste: se non avevano un valore, restano «?».
- Un **puntatore** è una variabile che contiene un indirizzo. Per ogni tipo `T` c'è il tipo **`T*`**: `int* pX = &x;` mette in `pX` l'indirizzo di `x`.
- L'operatore **`*`** davanti a un puntatore va all'indirizzo che contiene: `*pX` è la variabile `x` stessa. Leggere `*pX` legge `x`, scrivere `*pX = 10;` cambia `x`.
- Più puntatori allo stesso indirizzo sono **alias** della stessa variabile. Si può usare `*p` solo se `p` contiene un **indirizzo valido**: mai con un puntatore non inizializzato o **`NULL`**.
- Un puntatore occupa 8 byte su una macchina a 64 bit, qualunque sia il tipo a cui punta. `&` e `*` si annullano a vicenda.

> [!CANALI]
> **Canale A (Fiandrotti).** Il deck 02C «referenziamento, `scanf`, puntatori» ha la stessa struttura di questo; nel 2025/26 i testi erano quasi identici. Il deck 2026/27 del canale A per questa lezione non l'ho ancora visto.
>
> **Canale C (Mazzei).** Gli stessi argomenti sono nella lezione 03 «Dai numeri ai puntatori».
>
> **Laboratorio.** `scanf` con la `&` l'hai già usata nel Laboratorio 01, come una formula da ricopiare. Qui scopri che cosa vuol dire quella `&`.
>
> L'esame è unico per i tre canali, e i puntatori ci entrano negli esercizi sullo **stato della memoria** e nelle funzioni che restituiscono un risultato «attraverso un puntatore».

## L'indirizzo di una variabile (slide 2–7)

Nella lezione 02B ogni variabile era una casella con quattro cose: nome, tipo, indirizzo e valore. Finora abbiamo usato solo il valore. Adesso tocca all'indirizzo.

Pensa a una via con le case numerate. In ogni casa abita qualcuno. Il **numero civico** dice **dove** sta la casa; chi ci abita è **che cosa** c'è dentro. Sono due informazioni diverse: se cambia l'inquilino, il numero civico resta lo stesso.

In memoria è uguale:

- il **valore** di `x` è quello che c'è nella casella, per esempio 5;
- l'**indirizzo** di `x` è il numero della casella, per esempio `0x03FC`.

L'indirizzo è un numero **senza segno**, unico per ogni posizione della memoria. Si scrive di solito in **esadecimale**, con il prefisso `0x` (lezione 01 di Fondamenti), perché è più corto.

> [!DEF] Operatore di referenziamento & (slide 3, 27)
> L'operatore `&` (si legge «e commerciale», in inglese *ampersand*), applicato a una variabile, ne restituisce l'**indirizzo di memoria**. `&x` è «l'indirizzo della variabile `x`».

**Come si legge.** `x` è il contenuto della casella, `&x` è il suo numero civico. Il nome «referenziamento» viene dall'inglese *reference*, riferimento: con `&x` ottieni un riferimento a `x`.

### Stampare gli indirizzi con %p (slide 5–6)

`printf` ha uno specificatore apposta per gli indirizzi: **`%p`** (da *pointer*). Il programma delle slide:

```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int y = 2;
    int z = x + y;

    printf("La var x all'indirizzo %p vale %d \n", &x, x);
    printf("La var y all'indirizzo %p vale %d \n", &y, y);
    printf("La var z all'indirizzo %p vale %d \n", &z, z);
}
```

Sul computer delle slide (Linux) ha stampato:

```text
La var x all'indirizzo 0x7fffd0624e0c vale 5
La var y all'indirizzo 0x7fffd0624e08 vale 2
La var z all'indirizzo 0x7fffd0624e04 vale 7
```

Sul mio (Windows, gcc 16.1, con `-Wall -Werror`) ha stampato:

```text
La var x all'indirizzo 00000076D3DFF75C vale 5
La var y all'indirizzo 00000076D3DFF758 vale 2
La var z all'indirizzo 00000076D3DFF754 vale 7
```

Tre cose da notare:

1. **Il formato dipende dal sistema.** Linux scrive `0x` e le lettere minuscole; Windows scrive tutte le 16 cifre, senza `0x`, con le maiuscole.
2. **Gli indirizzi scendono di 4 in 4.** Le tre variabili sono una sotto l'altra sullo stack, ognuna da 4 byte, come nel modello della memoria della 02B: lo stack cresce verso il basso.
3. **Il numero cambia ogni volta.** Rilanciando il programma si ottengono indirizzi diversi. Il valore concreto di un indirizzo non deve mai entrare nella logica del programma (slide 6): conta solo che indichi una posizione.

Negli schemi le slide usano indirizzi **simbolici** corti, come `0x03FC`, `0x03F8`, `0x03F4`, per non scrivere 12 cifre ogni volta (slide 7). Lo faremo anche qui.

| Variabile | Indirizzo (simbolico) | Valore |
|---|---|---|
| `x` | `0x03FC` | 5 |
| `y` | `0x03F8` | 2 |
| `z` | `0x03F4` | 7 |

> [!OLTRE] · %p vuole un void *
> Lo standard del C chiede che l'argomento di `%p` sia di tipo `void *`, il puntatore «generico». A rigore si scrive `printf("%p", (void *)&x);`. Le slide passano `&x` direttamente: gcc lo accetta anche con `-Wall -Werror` e funziona sui computer di tutti i giorni. Lo segnala solo con l'opzione `-Wpedantic`.

::: prova Se `int a` sta all'indirizzo `0x1008` e subito dopo dichiari `int b`, dove ti aspetti `b`?
A `0x1004`: 4 byte più in basso, perché lo stack cresce verso il basso e un `int` occupa 4 byte. Nella realtà il compilatore può anche scegliere un altro ordine; negli esercizi del corso si usa questo.
:::

> [!RICORDA]
> - `x` è il valore, `&x` è l'indirizzo: due informazioni diverse.
> - `printf` stampa gli indirizzi con `%p`; il numero cambia da un'esecuzione all'altra.

## Leggere da tastiera con scanf (slide 8–17)

Finora i programmi stampavano soltanto. Un programma utile spesso deve anche **ricevere** dati: un numero, un voto, una quantità. In C si usa la funzione **`scanf`**.

Immagina `scanf` come un **corriere**. Va alla tastiera, prende il numero che scrivi e lo deve consegnare in una casella della memoria. Per farlo gli serve l'**indirizzo** della casella, non il suo contenuto. Per questo si scrive:

```c
scanf("%d", &x);
```

- `"%d"` dice che cosa leggere: un intero, come in `printf`;
- `&x` dice **dove** scriverlo: all'indirizzo di `x`.

`scanf` aspetta che tu scriva il numero e prema **Invio**; solo allora va avanti.

### Il programma passo per passo (slide 10–13)

```c
#include <stdio.h>

int main(void) {
    int x, y, z;
    printf("Inserisci x: ");
    scanf("%d", &x);
    printf("Inserisci y: ");
    scanf("%d", &y);
    z = x + y;
    printf("%d + %d = %d\n", x, y, z);
}
```

Seguiamolo nella memoria, scrivendo 5 e poi 2.

| Dopo la riga | `x` @`0x03FC` | `y` @`0x03F8` | `z` @`0x03F4` | Sullo schermo |
|---|---|---|---|---|
| `int x, y, z;` | ? | ? | ? | |
| `printf("Inserisci x: ");` | ? | ? | ? | `Inserisci x: ` |
| `scanf("%d", &x);` (scrivi 5) | **5** | ? | ? | `Inserisci x: 5` |
| `scanf("%d", &y);` (scrivi 2) | 5 | **2** | ? | `Inserisci y: 2` |
| `z = x + y;` | 5 | 2 | **7** | |
| `printf(…)` | 5 | 2 | 7 | `5 + 2 = 7` |

`scanf` ha ricevuto gli indirizzi `0x03FC` e `0x03F8`, ed è lì che ha scritto 5 e 2.

### Due numeri con una sola scanf (slide 14–17)

Una `scanf` può leggere più valori: un `%d` e un indirizzo per ciascuno.

```c
scanf("%d%d", &x, &y);
```

Scrivendo `5 2` e Invio, il 5 va in `x` e il 2 in `y`. I due numeri possono essere separati da **uno o più spazi**, e anche da Invio: ho provato `5`, una riga vuota e `   2`, e il risultato è lo stesso. Per `%d` gli spazi e gli a capo davanti a un numero vengono saltati.

> [!TRAPPOLA] Dimenticare la &
> `scanf("%d", x);` passa a `scanf` il **contenuto** di `x`, un numero a caso, invece del suo indirizzo: il corriere va a consegnare in una casa che non esiste. Con `-Wall -Werror` gcc 16.1 non lo compila:
> ```text
> senza_amp.c:5:13: error: format '%d' expects argument of type 'int *', but argument 2 has type 'int' [-Werror=format=]
>     5 |     scanf("%d", n);
>       |            ~^   ~
>       |             |   |
>       |             |   int
>       |             int *
> ```
> Si legge: `%d` vuole un `int *`, cioè l'indirizzo di un intero, e ha ricevuto un `int`. Tra poco vedrai che `int *` è proprio il tipo dei puntatori.

::: prova Con `int a, b;` scrivi la riga che legge prima `b` e poi `a` con una sola scanf.
`scanf("%d%d", &b, &a);`. L'ordine degli indirizzi decide in quale variabile va ogni numero.
:::

> [!RICORDA]
> - `scanf("%d", &x);` legge un intero e lo scrive all'indirizzo di `x`.
> - Un `%d` e un indirizzo per ogni valore; i numeri si separano con spazi o Invio.

## Quando l'input è sbagliato (slide 18–23)

Chi usa il programma può scrivere qualunque cosa: una lettera, un numero con la virgola, niente. `scanf` prova a leggere seguendo il formato, e quando trova qualcosa che non va **si ferma**. In più **restituisce** un numero: quanti valori è riuscito a leggere.

```c
int x, y;
int n = scanf("%d%d", &x, &y);
```

| `n` | Che cosa è successo |
|---|---|
| 2 | letti tutti e due i valori |
| 1 | letto solo il primo; `y` non è stata toccata |
| 0 | non letto niente; `x` e `y` non sono state toccate |

### Tre prove (slide 19–21)

Il programma delle slide:

```c
#include <stdio.h>

int main(void) {
    int x;
    printf("Inserisci un intero: ");
    int n = scanf("%d", &x);
    printf("Valori letti correttamente: %d\n", n);
    printf("x vale %d \n", x);
}
```

Le tre prove, rifatte sul mio computer:

| Scrivo | `n` | Stampa per `x` | Perché |
|---|---|---|---|
| `1234` | 1 | 1234 | un intero, tutto a posto |
| `1234.56` | 1 | 1234 | legge `1234` e si ferma al punto; `.56` resta da leggere |
| `A` | 0 | `2127058656` | `A` non è un numero: `x` non viene toccata e contiene quello che c'era prima |

Nel caso di `1234.56` il `.56` non sparisce: resta in attesa, e la prossima `scanf("%d", …)` lo troverebbe. Ho provato con due `scanf` di fila: la seconda restituisce 0, perché un numero non può cominciare con il punto.

Nel caso di `A` il numero stampato è a caso: le slide scrivono `?????`. Leggere una variabile mai inizializzata è un **comportamento indefinito** (slide 21): il C non promette niente su quello che succede.

> [!NOTA] Indirizzo sì, valore no (slide 22)
> Chiedere `&x` quando `x` non ha ancora un valore va benissimo: usi il **numero civico**, non chi ci abita. Il problema nasce solo se poi **leggi** `x` senza che nessuno l'abbia scritta. Le slide lo riassumono così: dichiarare una variabile, conoscerne l'indirizzo e averla inizializzata sono tre cose diverse.

### Un valore di partenza (slide 23)

Se dai a `x` un valore iniziale, il caso sbagliato diventa riconoscibile:

```c
int x = -1;
```

Con `A` il programma stampa `Letti con successo 0 interi` e `x vale -1`: la `scanf` fallita ha lasciato `x` com'era. Ma attenzione: **il controllo vero è `n`**, non il -1, perché anche chi usa il programma potrebbe scrivere proprio -1.

> [!OLTRE] · decidere che cosa fare
> Per reagire a un input sbagliato serve un `if` su `n`, che arriva tra qualche lezione. Per ora ti basta sapere che il valore di ritorno di `scanf` esiste e che cosa vuol dire.

::: prova Con `int x = -1, y = -1;` e `int n = scanf("%d%d", &x, &y);` scrivi `5 A`. Quanto valgono `n`, `x` e `y`?
`n` = 1, `x` = 5, `y` = -1. Il 5 è letto, la `A` ferma tutto e `y` resta com'era. Provato con gcc.
:::

> [!RICORDA]
> - `scanf` restituisce quanti valori ha letto; si ferma al primo carattere che non va bene.
> - Le variabili non lette non cambiano: se non avevano un valore, restano «?».

## I puntatori (slide 24–37)

`&x` vale `0x03FC`. Dove si può **conservare** questo numero? Un biglietto su cui è scritto un indirizzo: ecco che cos'è un **puntatore**.

> [!DEF] Puntatore (slide 25–26)
> Un **puntatore** è una variabile che memorizza l'indirizzo di memoria di un'altra variabile, detta **variabile puntata**. Per ogni tipo `T` esiste il tipo puntatore **`T*`** («T star»): le variabili di tipo `T*` contengono indirizzi di variabili di tipo `T`.

**Come si legge.**

- `int` è il tipo degli interi; `int*` è il tipo dei puntatori a interi: contiene indirizzi di variabili `int`.
- `float*` è il puntatore a `float`, `char*` il puntatore a `char`, e così via.
- Per abitudine i nomi dei puntatori cominciano con **`p`**: `pX` è il puntatore a `x`. All'esame si usano nomi come `pA`, `pSrc`, `pDst` (scheda del corso).

```c
int x = 5;
int* pX = &x;   // pX riceve l'indirizzo di x
```

Pezzo per pezzo (slide 27):

| Scrittura | Che cos'è | Tipo |
|---|---|---|
| `x` | la variabile intera, valore 5 | `int` |
| `&x` | un'espressione che vale l'indirizzo di `x` | `int*` |
| `pX` | il puntatore che conserva quell'indirizzo | `int*` |

La regola dei tipi: **se `x` è `int`, allora `&x` è `int*`**. Per questo l'assegnamento `pX = &x` è compatibile: a sinistra e a destra c'è lo stesso tipo.

### Anche il puntatore è una casella (slide 28–32)

`pX` è una variabile come le altre: occupa memoria e ha un **suo** indirizzo. Il programma delle slide:

```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int* pX;
    pX = &x;
    printf("Il ptr pX all'ind %p vale %p \n", &pX, pX);
}
```

| Dopo la riga | `x` @`0x03FC` | `pX` @`0x03F8` |
|---|---|---|
| `int x = 5;` | 5 | |
| `int* pX;` | 5 | ? |
| `pX = &x;` | 5 | **`0x03FC`** |
| `printf(…)` | 5 | `0x03FC` |

Stampa (con gli indirizzi simbolici) `Il ptr pX all'ind 0x03F8 vale 0x03FC`. Sul mio computer: `Il ptr pX all'ind 000000C7033FFD40 vale 000000C7033FFD4C`. Le due cose stampate sono diverse: `&pX` è il numero civico **del biglietto**, `pX` è l'indirizzo **scritto sul biglietto**.

Negli schemi il contenuto di un puntatore si disegna spesso con una **freccia** dalla casella di `pX` alla casella di `x`: da qui il nome, il puntatore «punta» a `x`.

### Un puntatore passato a scanf (slide 33–35)

`scanf` vuole un indirizzo. Un puntatore **contiene** un indirizzo: quindi si può passare il puntatore, senza `&`.

```c
#include <stdio.h>

int main(void) {
    int x;
    int* pX = &x;
    printf("Inserisci un intero: ");
    scanf("%d", pX);
    printf("La var x all'ind %p vale %d \n", pX, x);
}
```

`pX = &x` si può fare anche se `x` non ha ancora un valore: serve il suo indirizzo, che esiste già. `scanf` riceve `0x03FC` e scrive lì il numero: scrivendo 5, `x` vale 5.

### Due errori del compilatore (slide 36–37)

**Usare una variabile prima di dichiararla.** Il C legge dall'alto in basso: alla riga `int* pX = &x;` la variabile `x` non esiste ancora.

```text
pointer_ex1.c:4:16: error: 'x' undeclared (first use in this function)
    4 |     int* pX = &x;
      |                ^
```

**Tipi che non corrispondono.** Con `float x = 5.0;` l'espressione `&x` è un `float*`, e non va in un `int*`:

```c
float x = 5.0;
int* pX = &x;
```

Nelle slide gcc dà un avviso (*warning*). **gcc 16.1 dà un errore**, anche senza `-Wall` e senza `-Werror`: dalla versione 14 questo controllo è diventato un errore.

```text
pointer_ex2.c:3:15: error: initialization of 'int *' from incompatible pointer type 'float *' [-Wincompatible-pointer-types]
    3 |     int* pX = &x;
      |               ^
```

Ha senso: un `int*` promette che all'indirizzo c'è un intero. Se ci fosse un `float`, i bit verrebbero letti con la regola sbagliata (lezione 02B: il tipo dice come leggere i bit).

> [!TRAPPOLA] & solo su una casella vera
> `&` vuole qualcosa che abbia un posto in memoria (slide 27). `&5` e `&(x + 1)` sono sbagliati: 5 e `x + 1` sono valori calcolati al momento, senza un numero civico. gcc dice `lvalue required as unary '&' operand`: serve un *lvalue*, cioè qualcosa che possa stare a sinistra di un `=` (lezione 02B).

> [!NOTA] int* pX oppure int *pX (slide 38)
> Le due scritture sono uguali per il compilatore. Le slide usano tutte e due. Attenzione a una conseguenza: in `int* p, q;` solo `p` è un puntatore, `q` è un `int`. Per questo conviene dichiarare un puntatore per riga.

::: prova Con `char c = 'A';` di che tipo è `&c`? Lo puoi mettere in un `int*`?
`&c` è un `char*`. Non va in un `int*`: con gcc 16.1 è un errore di compilazione.
:::

> [!RICORDA]
> - Un puntatore `T*` contiene l'indirizzo di una variabile di tipo `T`; se `x` è `int`, `&x` è `int*`.
> - Il puntatore ha anche un suo indirizzo: `&pX` e `pX` sono cose diverse.
> - A `scanf` si può passare `&x` oppure un puntatore che contiene `&x`.

## Andare all'indirizzo: l'operatore * (slide 38–46)

Hai il biglietto con l'indirizzo. Per vedere chi abita là, o per cambiarlo, devi **andarci**. È quello che fa l'operatore `*` davanti a un puntatore.

> [!DEF] Operatore di dereferenziamento * (slide 39–40)
> L'operatore unario `*`, detto di **dereferenziamento** (*dereference* o *indirect access*), permette di accedere alla variabile puntata attraverso l'indirizzo memorizzato nel puntatore. Se `p` ha tipo `T*`, l'espressione `*p` ha tipo `T`.

**Come si legge.** `*pX` si legge «la variabile puntata da `pX`», o «star pi ics». Non è una copia di `x`: è **la stessa casella**. «Unario» vuol dire che lavora su una cosa sola, quella alla sua destra.

`*pX` si può usare in due modi (slide 40):

| Uso | Codice | Effetto |
|---|---|---|
| in **lettura** | `printf("%d\n", *pX);` | legge il valore di `x`: stampa 5 |
| in **scrittura** | `*pX = 10;` | scrive nella casella di `x`: ora `x` vale 10 |

### Il programma delle slide 41–42

```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int *pX = &x;

    printf("x = %d\n", x);
    printf("*pX = %d\n", *pX);
    *pX = 10;
    printf("x = %d\n", x);
}
```

| Dopo la riga | `x` @`0x03FC` | `pX` @`0x03F8` | Stampa |
|---|---|---|---|
| `int x = 5;` | 5 | | |
| `int *pX = &x;` | 5 | `0x03FC` | |
| `printf("x = %d\n", x);` | 5 | `0x03FC` | `x = 5` |
| `printf("*pX = %d\n", *pX);` | 5 | `0x03FC` | `*pX = 5` |
| `*pX = 10;` | **10** | `0x03FC` | |
| `printf("x = %d\n", x);` | 10 | `0x03FC` | `x = 10` |

Nella riga `*pX = 10;` il programma legge l'indirizzo in `pX`, cioè `0x03FC`, e scrive 10 **in quella casella**. `pX` non cambia; cambia `x`, senza che il suo nome compaia nella riga.

> [!TRAPPOLA] Il simbolo * in due posti diversi
> In `int *pX = &x;` l'asterisco fa parte del **tipo**: dichiara che `pX` è un puntatore, e il valore `&x` va in `pX`. In `*pX = 10;` l'asterisco è l'**operatore**: va all'indirizzo e scrive in `x`. Stesso simbolo, due mestieri.

### Rileggere scanf (slide 43–46)

Adesso la `&` di `scanf` ha un nome preciso. La documentazione di `scanf` chiede, per ogni conversione, un **puntatore** al tipo giusto: per `%d` serve un `int*`. Con `int x`, l'espressione `&x` è proprio un `int*`, ed è lì che `scanf` scrive. Per questo funzionano tutte e due le forme:

```c
scanf("%d", &x);   // l'indirizzo calcolato al momento
scanf("%d", pX);   // l'indirizzo conservato in pX
```

Nel programma delle slide 44–46, con `int x = 5;` e `int* pX = &x;`, si scrive 1234: dopo `scanf("%d", pX);` il programma stampa `La var x vale 1234`.

::: prova Con `int a = 3; int* p = &a;` che cosa vale `a` dopo `*p = *p * 4;`?
12. A destra `*p` legge `a`, cioè 3, e lo moltiplica per 4; poi `*p = …` scrive 12 nella casella di `a`.
:::

> [!RICORDA]
> - `*p` è la variabile puntata da `p`: leggerla legge quella variabile, assegnarle un valore la cambia.
> - Se `p` è `T*`, `*p` è `T`. Per `%d`, `scanf` vuole un `int*`.

## Più nomi per una casella: l'aliasing (slide 47–51)

Una persona può avere più nomi: il nome di battesimo, un soprannome, «il vicino del terzo piano». Sono **alias**: modi diversi per indicare la stessa persona. Con i puntatori succede lo stesso a una variabile.

```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int* pX = &x;
    int* pXbis = pX;
    *pXbis = 1234;
    printf("x = %d\n", x);
    printf("*pX = %d\n", *pX);
    printf("*pXbis = %d\n", *pXbis);
}
```

`int* pXbis = pX;` copia in `pXbis` l'indirizzo scritto in `pX`: due biglietti con lo stesso indirizzo. Poi `*pXbis = 1234;` va a quell'indirizzo e scrive 1234.

| Variabile | Indirizzo | Valore dopo `*pXbis = 1234;` |
|---|---|---|
| `x` | `0x03FC` | **1234** |
| `pX` | `0x03F8` | `0x03FC` |
| `pXbis` | `0x03F0` | `0x03FC` |

Stampa `x = 1234`, `*pX = 1234`, `*pXbis = 1234`: provato.

> [!DEF] Alias e aliasing (slide 50–51)
> Quando più puntatori contengono lo stesso indirizzo, esistono più modi per accedere e modificare la stessa cella di memoria: tramite il nome della variabile (`x`) e tramite i puntatori (`*pX`, `*pXbis`). Questi modi si chiamano **alias**, e il fenomeno **aliasing**. Modificando la variabile attraverso un alias, anche gli altri «vedono» il nuovo valore.

**Come si legge.** `x`, `*pX` e `*pXbis` sono tre nomi della stessa casella. `pX` e `pXbis` invece sono **due variabili diverse**, ognuna con il suo indirizzo, che contengono lo stesso numero. Per questo `scanf("%d", &x);`, `scanf("%d", pX);` e `scanf("%d", pXbis);` fanno esattamente la stessa cosa (slide 50).

::: prova Con `int a = 1; int* p = &a; int* q = p;` che cosa stampa `*q = 7; printf("%d\n", a);`?
7. `q` contiene l'indirizzo di `a`, quindi `*q = 7` scrive in `a`.
:::

> [!RICORDA]
> - Due puntatori con lo stesso indirizzo danno due alias della stessa variabile.
> - Scrivere attraverso un alias cambia la variabile per tutti gli altri nomi.

## Puntatori non validi e NULL (slide 52–53)

Un biglietto bianco, o con un indirizzo inventato, non porta da nessuna parte. È il caso di un puntatore **non inizializzato**:

```c
int* pX;     // non inizializzato
*pX = 10;    // ERRORE
```

Dopo la dichiarazione `pX` contiene un valore indeterminato, «?», come ogni variabile locale. Usato come indirizzo porta in un punto a caso della memoria. Con `-Wall -Werror` gcc 16.1 lo ferma:

```text
non_init.c:3:9: error: 'pX' is used uninitialized [-Werror=uninitialized]
    3 |     *pX = 10;
      |     ~~~~^~~~
```

> [!ESAME] La regola più importante
> **Si può usare `*p` solo se `p` contiene un indirizzo valido**: l'indirizzo di una variabile che esiste. Le slide la ripetono due volte (slide 49 e 52).

### Il puntatore nullo

Per dire «questo puntatore non punta a niente» c'è un valore apposta: **`NULL`**.

> [!DEF] NULL (slide 53)
> `NULL` è un valore di puntatore che indica esplicitamente che il puntatore non fa riferimento ad alcuna variabile. Si usa come valore iniziale, o come valore sentinella per indicare che un puntatore non sta puntando a nulla.

**Come si legge.** `NULL` è il biglietto con scritto «nessun indirizzo». Serve a due cose:

- **inizializzare** un puntatore senza lasciarlo «?»: `int *p = NULL;`;
- **riconoscere** il caso «non punta a niente», confrontando il puntatore con `NULL` (con l'`if`, più avanti).

Ma `NULL` non è un indirizzo a cui andare:

```c
int *p = NULL;   // inizializzazione sicura
*p = 10;         // ERRORE: comportamento indefinito
```

Questo programma **compila** anche con `-Wall -Werror`: il compilatore non se ne accorge. Quando lo esegui, di solito il programma viene fermato dal sistema operativo. Su Linux compare `Segmentation fault`. Per questo non l'ho lanciato: su Windows un programma che va in crash può aprire una finestra di errore.

> [!NOTA] Da dove viene NULL
> `NULL` è definito in diversi file di intestazione, tra cui `<stdio.h>` e `<stddef.h>`. Se il programma include già `<stdio.h>`, `NULL` c'è.

::: prova Quale di queste righe è sbagliata? `int *p = NULL;` · `int *q;` · `*q = 3;` · `p = &x;` (con `int x` già dichiarata)
`*q = 3;`: `q` non è inizializzato, quindi non contiene un indirizzo valido. Le altre vanno bene, e dopo `p = &x;` si può usare `*p`.
:::

> [!RICORDA]
> - Un puntatore non inizializzato contiene «?»: non si può usare `*` su di lui.
> - `NULL` vuol dire «non punta a niente»: è un buon valore iniziale, ma `*` su `NULL` è un errore.

## Ultime cose sui puntatori (slide 54–56)

Tre fatti per chiudere: quanto spazio occupa un puntatore, come si combinano & e *, e i tanti mestieri dell'asterisco.

### Quanto è grande un puntatore (slide 54)

Un puntatore contiene un indirizzo, e gli indirizzi hanno sempre la stessa lunghezza su una data macchina, qualunque cosa ci sia a quell'indirizzo. Provato sul mio computer a 64 bit:

```text
sizeof(x) 4 B
sizeof(pX) 8 B
sizeof(c) 1 B, sizeof(pC) 8 B
sizeof(d) 8 B, sizeof(pD) 8 B
```

`int`, `char` e `double` occupano 4, 1 e 8 byte; i puntatori a loro sempre 8. La dimensione di `T*` dipende dalla **piattaforma**, non da `T`: tipicamente 8 byte su una CPU a 64 bit e 4 byte su una a 32 bit.

### & e * si annullano (slide 55)

`&` va dalla casella al suo indirizzo; `*` va dall'indirizzo alla casella. Uno dopo l'altro si annullano:

- `*&a` è `a`: prendi l'indirizzo di `a` e ci vai;
- `&*pA` è `pA`: vai alla casella puntata e ne prendi l'indirizzo.

Il programma della slide 55 lo mostra stampando lo stesso indirizzo quattro volte: `&a`, `pA`, `&*pA` e `*&pA`. Sul mio computer erano tutti `000000C2FEDFFC3C`.

### I quattro usi del simbolo * (slide 56)

| Uso | Esempio | Che cosa fa |
|---|---|---|
| moltiplicazione | `int x = a * b;` | due operandi, a sinistra e a destra |
| dichiarazione di un puntatore | `int* pX = &x;` | fa parte del tipo |
| dereferenziamento | `int x = *pX;` | va all'indirizzo contenuto in `pX` |
| puntatore a puntatore | `int** ppX = &pX;` | un puntatore che contiene l'indirizzo di un puntatore: il corso non lo usa |

Il trucco per non confonderli: se `*` sta **tra due valori** è una moltiplicazione; se sta **dopo un tipo** in una dichiarazione è parte del tipo; se sta **davanti a un puntatore** in un'espressione è il dereferenziamento.

::: prova In `*p = *p * 2;` quante volte compare l'operatore di dereferenziamento? E la moltiplicazione?
Due dereferenziamenti, `*p` a sinistra e `*p` a destra, e una moltiplicazione, `* 2`. La riga raddoppia la variabile puntata.
:::

> [!RICORDA]
> - Un puntatore occupa 8 byte su una macchina a 64 bit, per qualunque tipo puntato.
> - `*&a` è `a` e `&*pA` è `pA`.
> - Il simbolo `*` ha quattro usi: si capiscono dalla posizione.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `&x` | «indirizzo di x» | l'indirizzo della variabile `x` | `int* pX = &x;` |
| `%p` | «percento pi» | in `printf`: un indirizzo | `printf("%p", &x);` |
| `scanf("%d", &x)` | «scanf percento di, indirizzo di x» | legge un intero da tastiera e lo scrive in `x` | |
| `T*` | «T star», «puntatore a T» | il tipo delle variabili che contengono indirizzi di `T` | `int*`, `float*` |
| `*p` | «star pi», «la variabile puntata da p» | la casella all'indirizzo contenuto in `p` | `*pX = 10;` |
| `NULL` | «null» | il puntatore che non punta a niente | `int *p = NULL;` |
| `0x03FC` | «zero ics zero tre effe ci» | un indirizzo in esadecimale | |
| @`0x03FC` | «all'indirizzo» | negli schemi: dove sta una variabile | `x` @`0x03FC` |
| `int**` | «puntatore a puntatore a int» | indirizzo di un `int*`; il corso non lo usa | |

## Verso l'esame

L'esame di Programmazione I è al PC, unico per i tre canali: appelli **lunedì 25/01/2027** e **giovedì 11/02/2027**. Da questa lezione in poi i puntatori ci sono sempre.

**Esercizi sullo stato della memoria.** Si chiede il valore di ogni variabile dopo una sequenza di istruzioni. Con i puntatori la regola in più è una: nella casella di un puntatore si scrive un **indirizzo**, e `*p` legge o scrive nella casella che sta a quell'indirizzo. Più avanti lo stesso schema avrà una parte per le chiamate di funzione e una per la memoria chiesta con `malloc`. Nel 2025/26, nel canale C, l'esercizio era proprio sullo stack e sullo heap.

> [!METODO] Stato della memoria con i puntatori
> 1. Una riga per variabile, con il suo indirizzo simbolico, nell'ordine di dichiarazione; ogni nuova variabile 4 byte più in basso (8 se è un puntatore e vuoi essere preciso, ma negli esercizi si usano gli indirizzi dati dal testo).
> 2. `p = &x;` scrive **l'indirizzo di `x`** nella casella di `p`.
> 3. `q = p;` copia l'indirizzo: ora `p` e `q` puntano alla stessa variabile.
> 4. `*p = …;` calcola la destra, poi scrive nella casella **il cui indirizzo è in `p`**. La casella di `p` non cambia.
> 5. Un puntatore con «?» o `NULL` non si usa con `*`: se il testo lo fa, il risultato è un errore.

**Esercizi di programmazione.** Le funzioni d'esame a volte restituiscono un secondo risultato **attraverso un puntatore** (scheda del corso): è proprio `*p = valore;` dentro una funzione, che vedrai con le funzioni. Gli errori che costano:

1. **dimenticare la `&`** in `scanf`: con `-Wall -Werror` non compila;
2. **usare `*p` con `p` non inizializzato**: non compila se il compilatore se ne accorge, altrimenti crash;
3. **tipi di puntatore diversi** (`int*` con un `float`): con gcc 16.1 non compila nemmeno senza opzioni;
4. **stampare indirizzi** quando l'esercizio chiede valori: CodeRunner confronta il testo, e gli indirizzi cambiano a ogni esecuzione.

> [!ESAME] Nomi dei puntatori
> Nelle soluzioni d'esame i puntatori hanno il prefisso `p`: `pA`, `pStr`, `pSrc`, `pDst` (scheda del corso). Usalo anche tu: chi legge capisce subito che a destra serve un indirizzo.

## Quiz

```quiz
D: Con `int x = 5;` che differenza c'è tra `x` e `&x`?
+ `x` è il valore 5, `&x` è l'indirizzo della casella di `x`
- Nessuna: sono due modi di scrivere la stessa cosa
- `&x` è il valore di `x` raddoppiato
- `x` è l'indirizzo, `&x` il valore
- `&x` è una copia di `x` in un'altra casella
= `x` è il contenuto della casella, `&x` il suo numero civico. La risposta più insidiosa è «nessuna»: sono due informazioni diverse, e infatti `printf("%p %d", &x, x)` stampa due numeri diversi.

D: Quale riga legge correttamente un intero da tastiera nella variabile `int n`?
+ `scanf("%d", &n);`
- `scanf("%d", n);`
- `scanf("%p", &n);`
- `scanf(&n, "%d");`
- `scanf("%d", *n);`
= `scanf` vuole il formato e poi l'indirizzo dove scrivere. La risposta più insidiosa è `scanf("%d", n);`: passa il valore invece dell'indirizzo, e con `-Wall -Werror` non compila. `*n` non ha senso, perché `n` non è un puntatore.

D: Con `int x = -1;` e `int k = scanf("%d", &x);` l'utente scrive `12.9`. Quanto valgono `k` e `x`?
+ `k` = 1 e `x` = 12
- `k` = 1 e `x` = 13
- `k` = 0 e `x` = -1
- `k` = 2 e `x` = 12
- `k` = 1 e `x` = 12.9
= `scanf` legge le cifre `12` e si ferma al punto: ha letto un valore, quindi restituisce 1. La risposta più insidiosa è `x` = 13: non c'è nessun arrotondamento, la lettura si ferma e basta. Il `.9` resta in attesa per la prossima lettura.

D: Con `int x = -1;` e `int k = scanf("%d", &x);` l'utente scrive `ciao`. Che cosa stampa `printf("%d %d\n", k, x);`?
+ `0 -1`
- `1 -1`
- `0 0`
- `0` seguito da un numero a caso
- Il programma non compila
= Nessun valore letto, quindi `k` = 0, e `x` non viene toccata: resta -1. La risposta più insidiosa è «un numero a caso»: succederebbe se `x` non avesse un valore iniziale, ma qui ce l'ha.

D: Dopo `int x = 5; int* p = &x; *p = 8;` quanto vale `x`?
N: 8
= `p` contiene l'indirizzo di `x`, quindi `*p = 8` scrive 8 nella casella di `x`.

D: Con `int x = 5;` quale di queste dichiarazioni NON compila con gcc 16.1?
+ `float* pF = &x;`
- `int* p = &x;`
- `int *q = &x;`
- `int* r = NULL;`
- `int* s;`
= `&x` è un `int*` e non va in un `float*`: con gcc 16.1 è un errore anche senza opzioni. La risposta più insidiosa è `int *q = &x;`: lo spazio prima o dopo l'asterisco non cambia niente. `int* s;` compila: è solo un puntatore non ancora usato (con `-Werror` darebbe errore solo perché non usato).

D: Dopo `int a = 2; int* p = &a; int* q = p; *q = *p + 3;` quanto vale `a`?
N: 5
= `p` e `q` contengono tutti e due l'indirizzo di `a`: sono alias. `*p` legge 2, si somma 3, e `*q = 5` scrive 5 in `a`.

D: Quale di queste istruzioni ha un comportamento indefinito?
+ `int* p; *p = 1;`
- `int x; int* p = &x;`
- `int* p = NULL;`
- `int x = 3; int* p = &x; *p = 1;`
- `int x; scanf("%d", &x);`
= `p` non è inizializzato: `*p` va a un indirizzo a caso. La risposta più insidiosa è `int x; int* p = &x;`: `x` non ha un valore, ma prendere il suo indirizzo va benissimo. Anche `scanf("%d", &x)` va bene: scrive in `x`, non la legge.

D: Su una macchina a 64 bit, quanto vale `sizeof(double*)`?
+ 8
- 4
- 16
- 1
- dipende dal valore puntato
= Un puntatore contiene un indirizzo, e su una macchina a 64 bit gli indirizzi sono di 8 byte, qualunque sia il tipo puntato. La risposta più insidiosa è 8 «perché un `double` è di 8 byte»: il risultato è giusto, il motivo no. Anche `sizeof(char*)` vale 8.

D: Con `int a = 4; int* pA = &a;` quale di queste espressioni NON vale l'indirizzo di `a`?
+ `*pA`
- `&a`
- `pA`
- `&*pA`
- `*&pA`
= `*pA` è la variabile `a`, cioè 4. Le altre valgono tutte l'indirizzo: `&*pA` e `*&pA` si riducono a `pA`, perché `&` e `*` si annullano. La risposta più insidiosa è `*&pA`: sembra un dereferenziamento, ma prima viene `&pA`, e `*` ci riporta a `pA`.
```

## Esercizi

::: esercizio base Riscaldamento: valore o indirizzo
Con `int n = 42;` che a un'esecuzione sta all'indirizzo `0x2000`, che cosa vale ciascuna espressione? `n`, `&n`, `n + 1`.
::: soluzione
1. `n` vale 42: il contenuto.
2. `&n` vale `0x2000`: l'indirizzo. A un'altra esecuzione può essere diverso.
3. `n + 1` vale 43: si calcola con il valore, non con l'indirizzo.
:::

::: esercizio base Riscaldamento: il tipo giusto
Scrivi il tipo di ciascuna espressione, con `int a; float b; char c;`: `&a`, `&b`, `&c`, `a`.
::: soluzione
1. `&a` è `int*`.
2. `&b` è `float*`.
3. `&c` è `char*`.
4. `a` è `int`: senza `&` è la variabile stessa.
:::

::: esercizio base Riscaldamento: tre letture
Scrivi un programma che chiede tre interi, li legge con una sola `scanf`, stampa quanti ne ha letti e la loro somma.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a;
    int b;
    int c;
    printf("Inserisci tre interi: ");
    int letti = scanf("%d%d%d", &a, &b, &c);
    printf("Letti: %d\n", letti);
    printf("Somma: %d\n", a + b + c);
}
```
Con `1 2 3` stampa `Letti: 3` e `Somma: 6`. Compila con `-Wall -Werror`. Se l'input è sbagliato la somma usa variabili «?»: con un `if` su `letti`, più avanti, si potrà evitare.
:::

::: esercizio base Riscaldamento: seguire un puntatore
Con `int x = 3; int* p = &x;` che cosa vale `*p`? E dopo `x = 9;`?
::: soluzione
1. `*p` vale 3: è la variabile `x`.
2. Dopo `x = 9;` vale 9: `p` contiene ancora l'indirizzo di `x`, e `*p` legge quello che c'è adesso.
:::

::: esercizio base Stato della memoria con un puntatore
Disegna lo stato della memoria dopo ogni riga e scrivi che cosa viene stampato. Usa gli indirizzi `0x03FC` per `a`, `0x03F8` per `b`, `0x03F4` per `p`.
```c
int main(void) {
    int a = 2;
    int b = 6;
    int* p = &a;
    *p = b + 1;
    p = &b;
    *p = *p - a;
    printf("%d %d %d\n", a, b, *p);
}
```
::: soluzione
| Dopo | `a` @`0x03FC` | `b` @`0x03F8` | `p` @`0x03F4` |
|---|---|---|---|
| `int a = 2;` | 2 | | |
| `int b = 6;` | 2 | 6 | |
| `int* p = &a;` | 2 | 6 | `0x03FC` |
| `*p = b + 1;` | **7** | 6 | `0x03FC` |
| `p = &b;` | 7 | 6 | **`0x03F8`** |
| `*p = *p - a;` | 7 | **-1** | `0x03F8` |

Stampa `7 -1 -1`: `*p` alla fine è `b`. Nella riga `*p = *p - a;` si legge `b` = 6, si toglie `a` = 7 e il risultato -1 va in `b`.
:::

::: esercizio base Leggere attraverso i puntatori
Scrivi un programma con due variabili `base` e `altezza` e due puntatori `pBase` e `pAltezza` che le puntano. Leggi i due valori con una `scanf` che usa **i puntatori**, poi calcola l'area del rettangolo usando solo i puntatori.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int base = 0;
    int altezza = 0;
    int* pBase = &base;
    int* pAltezza = &altezza;
    printf("Base e altezza: ");
    scanf("%d%d", pBase, pAltezza);
    int area = *pBase * *pAltezza;
    printf("Area: %d\n", area);
}
```
Con `4 6` stampa `Area: 24`. In `*pBase * *pAltezza` ci sono due dereferenziamenti e, in mezzo, una moltiplicazione. Senza `&` nella `scanf`: i puntatori contengono già gli indirizzi.
:::

::: esercizio medio Trova gli errori
Questo programma ha quattro errori. Trovali e correggili.
```c
#include <stdio.h>

int main(void) {
    float prezzo;
    int quantita;
    int* pPrezzo = &prezzo;
    int* pQ;
    scanf("%d", quantita);
    *pQ = quantita * 2;
    printf("%d\n", *pQ);
}
```
::: soluzione
1. `int* pPrezzo = &prezzo;`: `&prezzo` è un `float*`. Con gcc 16.1 non compila. Va scritto `float* pPrezzo = &prezzo;`.
2. `scanf("%d", quantita);`: manca la `&`. Va scritto `scanf("%d", &quantita);`.
3. `*pQ = …`: `pQ` non è inizializzato. Prima serve un indirizzo valido, per esempio `int doppio; int* pQ = &doppio;`.
4. `pPrezzo` non viene mai usato: con `-Wall -Werror` è un errore (`unused variable`). Si toglie, oppure si usa per leggere il prezzo.

Una versione corretta:
```c
#include <stdio.h>

int main(void) {
    int quantita;
    int doppio;
    int* pQ = &doppio;
    scanf("%d", &quantita);
    *pQ = quantita * 2;
    printf("%d\n", *pQ);
}
```
Compila con `-Wall -Werror`; con 5 stampa 10.
:::

::: esercizio medio Lo scambio attraverso i puntatori
Con `int a = 3, b = 8;` e due puntatori `pA = &a` e `pB = &b`, scambia i valori di `a` e `b` scrivendo **solo** attraverso `pA` e `pB` (puoi usare una variabile di appoggio). Alla fine il programma deve stampare `a = 8, b = 3`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a = 3;
    int b = 8;
    int* pA = &a;
    int* pB = &b;
    int tmp = *pA;
    *pA = *pB;
    *pB = tmp;
    printf("a = %d, b = %d\n", a, b);
}
```
Stampa `a = 8, b = 3`. È lo scambio della lezione 02B, con `*pA` al posto di `a` e `*pB` al posto di `b`. Questa forma tornerà con le funzioni: una funzione che scambia due variabili deve riceverne gli indirizzi.
:::

::: esercizio medio Che cosa legge scanf
Con `int x = 0, y = 0;` e `int n = scanf("%d%d", &x, &y);` scrivi `n`, `x` e `y` per ciascun input: (a) `7 8`; (b) `7` a capo `8`; (c) `7 x`; (d) `x 7`; (e) `7.5 8`.
::: soluzione
1. `7 8`: `n` = 2, `x` = 7, `y` = 8.
2. `7` a capo `8`: uguale, l'a capo conta come spazio.
3. `7 x`: `n` = 1, `x` = 7, `y` = 0.
4. `x 7`: `n` = 0, `x` = 0, `y` = 0: si ferma subito.
5. `7.5 8`: `n` = 1, `x` = 7, `y` = 0. Il secondo `%d` trova `.5`, che non può cominciare un intero.
:::

::: esercizio difficile Due puntatori che si scambiano i ruoli
Che cosa stampa questo programma? Disegna lo stato della memoria.
```c
#include <stdio.h>

int main(void) {
    int a = 4;
    int b = 7;
    int* p = &a;
    int* q = &b;
    *p = *q + 1;
    p = q;
    *p = *p * 2;
    q = &a;
    *q = *q - *p;
    printf("a = %d, b = %d, *p = %d, *q = %d\n", a, b, *p, *q);
}
```
::: soluzione
| Dopo | `a` | `b` | `p` | `q` |
|---|---|---|---|---|
| dichiarazioni | 4 | 7 | `&a` | `&b` |
| `*p = *q + 1;` | **8** | 7 | `&a` | `&b` |
| `p = q;` | 8 | 7 | **`&b`** | `&b` |
| `*p = *p * 2;` | 8 | **14** | `&b` | `&b` |
| `q = &a;` | 8 | 14 | `&b` | **`&a`** |
| `*q = *q - *p;` | **-6** | 14 | `&b` | `&a` |

Stampa `a = -6, b = 14, *p = 14, *q = -6`, provato con gcc. Il punto delicato è `p = q;`: da lì `p` punta a `b`, e `*p` non è più `a`.
:::

::: esercizio esame Stato della memoria e stampa
Nello stile degli esercizi d'esame sullo stato della memoria: indica il valore di ogni variabile dopo l'ultima riga (scrivi «?» se indeterminato) e che cosa stampa il programma. Indirizzi: `x` @`0x0100`, `y` @`0x00FC`, `pX` @`0x00F8`, `pY` @`0x00F0`.
```c
#include <stdio.h>

int main(void) {
    int x = 10;
    int y;
    int* pX = &x;
    int* pY = pX;
    *pY = *pX + 5;
    pY = &y;
    *pY = x * 2;
    printf("%d %d\n", x, y);
}
```
::: soluzione
| Dopo | `x` | `y` | `pX` | `pY` |
|---|---|---|---|---|
| `int x = 10;` | 10 | | | |
| `int y;` | 10 | ? | | |
| `int* pX = &x;` | 10 | ? | `0x0100` | |
| `int* pY = pX;` | 10 | ? | `0x0100` | `0x0100` |
| `*pY = *pX + 5;` | **15** | ? | `0x0100` | `0x0100` |
| `pY = &y;` | 15 | ? | `0x0100` | **`0x00FC`** |
| `*pY = x * 2;` | 15 | **30** | `0x0100` | `0x00FC` |

Stampa `15 30`. Alla quarta riga `pX` e `pY` sono alias di `x`; dopo `pY = &y;` non più. `y` smette di essere «?» solo all'ultima assegnazione.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra il valore e l'indirizzo di una variabile?
Il valore è quello che c'è nella casella, l'indirizzo è la posizione della casella in memoria. `x` dà il valore, `&x` l'indirizzo.
:::

::: domanda Perché in scanf serve la &?
Perché `scanf` deve scrivere il dato letto in una variabile, e per farlo deve sapere dove sta: le serve l'indirizzo, non il valore. Per `%d` vuole un `int*`, e `&x` con `x` di tipo `int` è proprio un `int*`.
:::

::: domanda Che cosa restituisce scanf e che cosa succede con un input sbagliato?
Restituisce quanti valori è riuscita a leggere. Al primo carattere che non va bene si ferma; le variabili non lette restano com'erano, e quello che non è stato letto resta in attesa.
:::

::: domanda Che cos'è un puntatore e di che tipo è?
Una variabile che contiene l'indirizzo di un'altra variabile. Per ogni tipo `T` c'è il tipo `T*`: un `int*` contiene indirizzi di `int`.
:::

::: domanda Che cosa fa l'operatore * davanti a un puntatore?
Va all'indirizzo contenuto nel puntatore: `*p` è la variabile puntata. Si può leggere (`printf("%d", *p)`) o scrivere (`*p = 10`), e scrivere cambia la variabile puntata.
:::

::: domanda Che cos'è l'aliasing?
Il fatto che la stessa variabile si possa raggiungere con più nomi: il suo nome e uno o più puntatori che contengono il suo indirizzo. Cambiando la variabile attraverso un alias, tutti gli altri vedono il nuovo valore.
:::

::: domanda Quando si può usare *p?
Solo quando `p` contiene un indirizzo valido. Mai con un puntatore non inizializzato, mai con `NULL`.
:::

::: domanda A che cosa serve NULL?
A dire esplicitamente che un puntatore non punta a niente: come valore iniziale sicuro e per riconoscere quel caso. Usare `*` su `NULL` è un errore.
:::

::: domanda Quanto occupa un puntatore?
Dipende dalla piattaforma, non dal tipo puntato: 8 byte su una tipica macchina a 64 bit, 4 byte su una a 32 bit.
:::

::: domanda Quali sono i quattro usi del simbolo *?
Moltiplicazione, dichiarazione di un puntatore, dereferenziamento, puntatore a puntatore.
:::

## Glossario

```glossario
Indirizzo | Il numero che indica la posizione di una variabile in memoria, di solito scritto in esadecimale.
Referenziamento | L'operazione `&x`, che dà l'indirizzo della variabile `x`.
%p | Lo specificatore di `printf` per stampare un indirizzo.
scanf | Funzione che legge dati da tastiera secondo un formato e li scrive agli indirizzi ricevuti; restituisce quanti valori ha letto.
Valore di ritorno di scanf | Il numero di valori letti con successo: può essere minore di quelli chiesti se l'input non va bene.
Puntatore | Una variabile che contiene l'indirizzo di un'altra variabile, detta variabile puntata.
Tipo puntatore T* | Il tipo delle variabili che contengono indirizzi di variabili di tipo `T`.
Dereferenziamento | L'operazione `*p`, che accede alla variabile all'indirizzo contenuto in `p`.
Alias | Un altro modo di raggiungere la stessa variabile, per esempio `*p` quando `p` contiene il suo indirizzo.
Aliasing | Il fatto che una variabile sia raggiungibile con più alias.
Puntatore non inizializzato | Un puntatore che contiene un valore indeterminato: non si può dereferenziare.
NULL | Il valore di puntatore che vuol dire «non punta a nessuna variabile».
Comportamento indefinito | Una situazione in cui il C non garantisce niente, per esempio leggere una variabile mai scritta o dereferenziare `NULL`.
lvalue | Qualcosa che ha un posto in memoria e può stare a sinistra di `=`; `&` si applica solo agli lvalue.
```

## Checklist

```checklist
- So spiegare la differenza tra `x` e `&x` e stampare un indirizzo con `%p`.
- So leggere uno o più interi con `scanf` e spiegare perché serve la `&`.
- So che cosa restituisce `scanf` e che cosa succede con input come `12.5` o `A`.
- So dichiarare un puntatore del tipo giusto e assegnargli l'indirizzo di una variabile.
- So usare `*p` per leggere e per scrivere la variabile puntata.
- So disegnare lo stato della memoria con i puntatori, scrivendo gli indirizzi nelle loro caselle.
- So riconoscere gli alias e prevedere che cosa cambia scrivendo attraverso un puntatore.
- So perché non si può usare `*` su un puntatore non inizializzato o `NULL`.
- So quanto occupa un puntatore e che `&` e `*` si annullano.
- So distinguere i quattro usi del simbolo `*` dalla posizione.
```

## Fonti

- **Slide della lezione**: «Referenziamento, Input e Puntatori in C. Dall'indirizzo di memoria ai puntatori» (02C_referenziamento_scanf_puntatori), Programmazione I – Teoria, canale B, A.A. 2026/27, 56 pagine; il numero di slide è accanto a ogni titolo.
- **Canali A e C**: elenco delle lezioni dalle pagine Moodle 2025/26 aperte agli ospiti (deck 02C del canale A, lezione 03 «Dai numeri ai puntatori» del canale C), riassunto nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- **Prove**: tutti i programmi, gli output e i messaggi d'errore sono ottenuti con gcc 16.1 (MinGW-w64, Windows 11 a 64 bit) e `-Wall -Werror -std=c11`; gli indirizzi stampati cambiano a ogni esecuzione. Il programma con `*p` su `NULL` è stato solo compilato, non eseguito.
- **Esame**: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md) (stato della memoria, risultato restituito attraverso un puntatore, nomi `pA`, `pSrc`, `pDst`).
- I riquadri **«Oltre le slide»** (`%p` e `void *`, il controllo con `if` sul valore di `scanf`), la nota sull'errore di gcc 16.1 per i tipi di puntatore, i «Prova tu» e gli esercizi sono aggiunte di questi appunti.
