---
corso: PROG1
lezione: 04A
titolo: Cicli e ripetizioni, while, for e do-while
data: 2026-10-20
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 04A
descrizione: >-
  Appunti della lezione 04A di Programmazione I (canale B): il ciclo while con inizializzazione, condizione e
  aggiornamento, accumulatori e contatori, il valore di terminazione, la visibilità delle variabili dichiarate nel
  ciclo, il ciclo for e la sua equivalenza con il while, gli intervalli, i cicli annidati, gli errori più comuni, le
  variabili sentinella al posto di break e continue, il do-while, con tutti i programmi delle slide provati, quiz ed
  esercizi.
lede: >-
  Con if ed else il programma sceglie; con while e for ripete. È l'iterazione, la terza struttura della programmazione
  strutturata, e con lei si possono scrivere programmi che lavorano su quantità di dati non note in anticipo.
materiale: slide
scheda:
  Slide: 04A_iterazioni («Cicli e ripetizioni») · 38 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 90 minuti, meglio con gcc a portata di mano
fonte: >-
  Slide «Cicli e ripetizioni. Iterazioni strutturate per eseguire azioni più volte» (04A_iterazioni),
  Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/04A_iterazioni.html
genera_html: true
---

## In breve

- **`while (condizione) { … }`** ripete il blocco finché la condizione è vera. Se è falsa già all'inizio, il blocco non viene eseguito nemmeno una volta.
- Ogni ciclo ha tre pezzi: **inizializzazione**, **condizione**, **aggiornamento**. Se manca l'aggiornamento, il ciclo non finisce più.
- Un **accumulatore** raccoglie un risultato giro dopo giro (una somma), un **contatore** conta i giri utili.
- Quando non sai quante volte ripetere, ti fermi su un **valore sentinella**, per esempio un numero negativo letto in input.
- Una variabile dichiarata **dentro** il ciclo viene creata a ogni giro e sparisce alla `}`.
- **`for (init; condizione; aggiornamento)`** è un `while` con i tre pezzi scritti sulla stessa riga. Si usa per contare su un intervallo, come `[0, 10)`.
- `break` e `continue` esistono, ma **all'esame sono vietati**: si esce dal ciclo solo con la condizione, aiutandosi con una **variabile sentinella** `bool`.
- **`do { … } while (condizione);`** esegue il blocco almeno una volta, e controlla la condizione alla fine.

> [!CANALI]
> **Canale B.** È la lezione di martedì 20/10, dalle 11 alle 13. Riprende le espressioni booleane della [03C](03C_booleani.html) e la visibilità nei blocchi della [03D](03D_decisioni.html); il ciclo della moltiplicazione nella [01A](01A_primo_algoritmo.html) era già un `while` scritto a parole.
>
> **Canali A e C.** Secondo l'elenco delle lezioni 2025/26 nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md), i cicli vengono subito dopo `if-else` anche nei canali A e C. Le slide 2026/27 dei canali A e C non le ho viste. L'esame è unico.
>
> **Due avvisi sulle slide.** Nella slide 38 la condizione del `do-while` è sbagliata: `!(1 <= x || x <= 10)` è sempre falsa, e il programma accetta anche 50. La versione giusta, con `&&`, è nella sezione sul `do-while`. Nella slide 8, se il primo numero letto è già negativo, la media divide per zero e stampa `-nan(ind)` (su Linux `-nan`).
>
> Tutti i programmi li ho compilati e provati con gcc 16.1, con `-Wall -Werror`.

## Il ciclo while (slide 2–5)

Per stampare i numeri da 0 a 9 potresti scrivere dieci `printf`. Per stamparli fino a 1000 no: serve un modo per dire «ripeti». Il primo è il `while`, «finché»:

```c
while (condizione) {
    // blocco di istruzioni da ripetere
}
```

1. Il programma valuta la condizione.
2. Se è **vera**, esegue il blocco e torna al punto 1.
3. Se è **falsa**, salta dopo la `}` e va avanti.

Ogni esecuzione del blocco si chiama **iterazione**, o giro. L'esempio delle slide:

```c
#include <stdio.h>

int main(void) {
    int i = 0;

    while (i < 10) {
        printf("%d\n", i);
        i++;
    }
}
```

Stampa 0, 1, 2, …, 9, uno per riga. Quando `i` arriva a 10, `i < 10` è falsa e il ciclo finisce: il 10 non viene stampato.

Il ciclo regge su tre pezzi, e le slide li chiamano la **terna fondamentale**:

| Pezzo | Nel programma | A che cosa serve |
|---|---|---|
| **inizializzazione** | `int i = 0;` | dà il valore di partenza alla variabile che controlla il ciclo |
| **condizione** | `i < 10` | decide se fare un altro giro |
| **aggiornamento** | `i++;` | cambia la variabile, così prima o poi la condizione diventa falsa |

```grafico
titolo: Il while della slide 5 come diagramma di flusso. In rosa l'inizializzazione, in verde la condizione, in ambra l'aggiornamento. La freccia a sinistra riporta alla condizione dopo ogni giro; si esce solo dal ramo «falso».
x: 0 10
y: 0.4 10
assi: no
griglia: no
poligono: 3.4 9 6.6 9 6.6 9.7 3.4 9.7 | grigio
testo: 5 9.35 | grigio | "inizio"
freccia: 5 9 5 8.35 | grigio
poligono: 3.4 7.6 6.6 7.6 6.6 8.3 3.4 8.3 | rosa
testo: 5 7.95 | rosa | "i = 0"
freccia: 5 7.6 5 6.95 | grigio
poligono: 5 6.9 7.2 6.1 5 5.3 2.8 6.1 | verde
testo: 5 6.1 | verde | "i < 10 ?"
freccia: 5 5.3 5 4.55 | grigio
testo: 5.85 4.9 | verde | "vero"
poligono: 3.4 3.8 6.6 3.8 6.6 4.5 3.4 4.5 | blu
testo: 5 4.15 | blu | "stampa i"
freccia: 5 3.8 5 3.15 | grigio
poligono: 3.4 2.4 6.6 2.4 6.6 3.1 3.4 3.1 | ambra
testo: 5 2.75 | ambra | "i++"
segmento: 3.4 2.75 1.3 2.75 | grigio
segmento: 1.3 2.75 1.3 6.1 | grigio
freccia: 1.3 6.1 2.75 6.1 | grigio
segmento: 7.2 6.1 8.7 6.1 | rosa
testo: 7.95 6.5 | rosa | "falso"
segmento: 8.7 6.1 8.7 1.15 | rosa
freccia: 8.7 1.15 6.65 1.15 | rosa
poligono: 3.4 0.8 6.6 0.8 6.6 1.5 3.4 1.5 | grigio
testo: 5 1.15 | grigio | "fine"
```

Se la condizione è falsa **già all'inizio**, per esempio con `int i = 20;`, il blocco non viene eseguito nemmeno una volta e il programma non stampa niente. Se invece la condizione resta **sempre vera**, il ciclo non finisce mai: è un **ciclo infinito** (più avanti c'è un esempio).

::: prova Con `int i = 3;` e la condizione `i < 6`, quante volte gira il ciclo della slide? Che cosa stampa?
Tre volte: stampa 3, 4 e 5. Al quarto controllo `i` vale 6 e `6 < 6` è falsa.
:::

> [!RICORDA]
> - `while` controlla la condizione **prima** di ogni giro.
> - Inizializzazione, condizione, aggiornamento: senza uno dei tre il ciclo non funziona.
> - Condizione falsa all'inizio: zero giri.

## Contare all'indietro e accumulare (slide 6–7)

Non si conta solo in avanti. Il conto alla rovescia ha la stessa terna, con la condizione e l'aggiornamento girati:

```c
int i = 5;
while (i > 0) {
    printf("%d\n", i);
    i--;
}
```

Stampa 5, 4, 3, 2, 1. La forma del ciclo non è fissa: la decide il problema.

Spesso il ciclo serve a **costruire un risultato** un pezzo alla volta. Per sommare i numeri da 1 a `n` si usa una variabile che parte da 0 e a ogni giro riceve un numero in più. Si chiama **accumulatore**:

```c
int n = 5, i = 1, somma = 0;
while (i <= n) {
    somma = somma + i;
    i++;
}
printf("Somma = %d\n", somma);
```

Stampa `Somma = 15`. Ecco i valori **dopo** ogni giro:

| Giro | `i` usato nel giro | `somma` dopo il giro | `i` dopo il giro |
|:-:|:-:|:-:|:-:|
| prima del ciclo | | 0 | 1 |
| 1 | 1 | 1 | 2 |
| 2 | 2 | 3 | 3 |
| 3 | 3 | 6 | 4 |
| 4 | 4 | 10 | 5 |
| 5 | 5 | 15 | 6 |

Al sesto controllo `6 <= 5` è falsa e il ciclo finisce. L'accumulatore deve partire dal valore «neutro»: 0 per una somma, 1 per un prodotto. Se parte da un valore a caso, perché non l'hai inizializzato, il risultato è sbagliato.

::: prova Come cambi il programma per calcolare il prodotto 1 · 2 · 3 · 4 · 5?
`int prodotto = 1;` al posto di `somma = 0`, e nel ciclo `prodotto = prodotto * i;`. Stampa 120. Se il prodotto partisse da 0, resterebbe 0 per sempre.
:::

> [!RICORDA]
> - L'aggiornamento può essere `i++`, `i--`, `i += 2`: dipende dal problema.
> - Accumulatore: parte da 0 per le somme, da 1 per i prodotti.

## Il valore di terminazione (slide 8, 23)

Vuoi la media delle altezze di un gruppo, ma non sai quante persone sono. Ti metti d'accordo con chi usa il programma: quando ha finito, scrive un numero negativo. Quel numero non è un dato, è il segnale di fine. Si chiama **valore di terminazione**, o **valore sentinella**.

```c
int somma = 0, count = 0, altezza = 0;

while (altezza >= 0) {
    printf("Inserisci altezza: ");
    scanf("%d", &altezza);

    if (altezza >= 0) {
        somma += altezza;
        count++;
    }
}
printf("Media = %f\n", somma / (float)count);
```

Qui lavorano due variabili:

- `somma` è l'**accumulatore** delle altezze;
- `count` è un **contatore**: conta le altezze valide, e alla fine serve per dividere.

L'`if` dentro il ciclo è necessario: senza, anche il numero negativo finirebbe nella somma. Il cast `(float)count` fa la divisione con la virgola, come nella [03B](03B_floats.html). Con 170, 180, 175 e −1 stampa `Media = 175.000000`.

C'è un caso che il programma delle slide non gestisce: se il **primo** numero è già negativo, `count` resta 0 e la divisione è 0 / 0. Con i `float` non si blocca: stampa `Media = -nan(ind)` su Windows, `-nan` su Linux, cioè «non è un numero». Si corregge con un `if (count > 0)` prima della divisione.

Il ciclo può anche finire per un successo. Nell'esempio del PIN si ripete finché il numero letto non è quello giusto:

```c
int segreto = 12345, guess = -1;
while (guess != segreto) {
    printf("Indovina il pin segreto: ");
    scanf("%d", &guess);
}
printf("Bravo, hai indovinato!\n");
```

`guess` parte da −1 apposta: serve un valore diverso dal segreto, altrimenti il ciclo non comincerebbe nemmeno.

::: prova Nel programma delle altezze, perché `altezza` è inizializzata a 0 e non lasciata senza valore?
Perché la condizione `altezza >= 0` viene controllata prima della prima `scanf`. Con un valore indeterminato il ciclo potrebbe non partire; con 0 la condizione è vera e si arriva alla lettura.
:::

> [!RICORDA]
> - Valore sentinella: un valore che non è un dato e segnala la fine (qui un'altezza negativa).
> - Accumulatore per il risultato, contatore per il numero di dati.
> - Prima di dividere per il contatore, controlla che non sia 0.

## Le variabili dentro il ciclo (slide 9–22)

Il blocco di un `while` è un blocco come quello di un `if`, e vale la regola della [03D](03D_decisioni.html): una variabile dichiarata dentro esiste solo dalla dichiarazione alla `}`. La novità è che il blocco si ripete, quindi la variabile **nasce e sparisce a ogni giro**.

```c
#include <stdio.h>

int main(void) {
    int x = 1;

    while (x < 3) {
        int y = x * 2;
        printf("x=%d, y=%d\n", x, y);
        x++;
    }
    printf("x finale=%d", x);
}
```

Stampa:

```
x=1, y=2
x=2, y=4
x finale=3
```

Le slide 10–22 seguono il programma riga per riga sullo stack:

| Momento | `x` | `y` |
|---|:-:|:-:|
| `int x = 1;` | 1 | non esiste |
| 1º giro, `int y = x * 2;` | 1 | 2 |
| 1º giro, `x++;` | 2 | 2 |
| `}` del 1º giro | 2 | non esiste |
| 2º giro, `int y = x * 2;` | 2 | 4 |
| 2º giro, `x++;` | 3 | 4 |
| `}` del 2º giro | 3 | non esiste |
| controllo `3 < 3`: falso, si esce | 3 | non esiste |

```grafico
titolo: Lo stack in tre momenti. A ogni giro y viene creata sotto x e alla } del ciclo viene tolta; al giro dopo nasce di nuovo, con un valore nuovo. x invece resta per tutto il main.
x: 0 12
y: 1.2 5.2
assi: no
griglia: no
proporzioni: libere
testo: 2 4.75 | grigio | "1º giro"
poligono: 0.8 3.4 3.2 3.4 3.2 4.2 0.8 4.2 | blu
testo: 2 3.8 | blu | "x = 1"
poligono: 0.8 2.5 3.2 2.5 3.2 3.3 0.8 3.3 | ambra
testo: 2 2.9 | ambra | "y = 2"
testo: 6 4.75 | grigio | "dopo la }"
poligono: 4.8 3.4 7.2 3.4 7.2 4.2 4.8 4.2 | blu
testo: 6 3.8 | blu | "x = 2"
testo: 6 2.9 | grigio | "(y non c'è)"
testo: 10 4.75 | grigio | "2º giro"
poligono: 8.8 3.4 11.2 3.4 11.2 4.2 8.8 4.2 | blu
testo: 10 3.8 | blu | "x = 2"
poligono: 8.8 2.5 11.2 2.5 11.2 3.3 8.8 3.3 | ambra
testo: 10 2.9 | ambra | "y = 4"
freccia: 3.4 3.8 4.6 3.8 | grigio
freccia: 7.4 3.8 8.6 3.8 | grigio
testo: 6 1.7 | grigio | "lo stack cresce verso il basso: y sta sotto x"
```

Dopo il ciclo `y` non esiste più. Se scrivi `printf("%d", y);` dopo la `}`, gcc si ferma con `error: 'y' undeclared`. L'ho provato. Se il valore di `y` ti serve dopo il ciclo, le slide danno due strade:

- dichiari `y` **prima** del ciclo, e dentro le assegni solo il valore;
- prima della fine del ciclo copi il valore in una variabile dichiarata fuori.

::: prova Nel programma, quante volte viene creata `y`? Che valore ha l'ultima `y` creata?
Due volte, una per giro. L'ultima vale 4. Al terzo controllo la condizione è falsa e `y` non viene creata.
:::

> [!RICORDA]
> - Una variabile dichiarata nel blocco del ciclo nasce e sparisce a ogni giro.
> - Dopo il ciclo non esiste: se ti serve, dichiarala prima.

## Il ciclo infinito (slide 24)

Il primo errore con i cicli è dimenticare l'aggiornamento:

```c
int i = 0;
while (i < 10) {
    printf("%d\n", i);
    // manca i++;
}
```

`i` resta 0, `0 < 10` è sempre vero, e il programma stampa 0 all'infinito. gcc non dà nessun avviso: per lui è un programma corretto. Lo fermi dal terminale con **Ctrl+C**.

Lo stesso succede quando l'aggiornamento c'è ma va **nel verso sbagliato**: con `i--` al posto di `i++`, `i` scende verso i negativi e resta sempre minore di 10.

::: prova `int k = 1; while (k != 10) { k = k + 2; }` finisce?
No: `k` vale 1, 3, 5, 7, 9, 11, … e salta il 10. La condizione `k != 10` resta vera. Con `k < 10` il ciclo finirebbe a 11.
:::

> [!RICORDA]
> - Senza aggiornamento, o con l'aggiornamento nel verso sbagliato, il ciclo non finisce.
> - gcc non se ne accorge. Ctrl+C ferma il programma.
> - Con `!=` nella condizione, controlla che la variabile passi davvero per quel valore.

## Il ciclo for (slide 25–29)

Nella maggior parte dei cicli che contano, i tre pezzi della terna sono sparsi: l'inizializzazione prima del `while`, la condizione in alto, l'aggiornamento in fondo al blocco. Il `for` li mette **sulla stessa riga**:

```c
for (inizializzazione; condizione; aggiornamento) {
    // blocco di istruzioni da ripetere
}
```

- l'**inizializzazione** si esegue una volta sola, prima di tutto;
- la **condizione** si controlla prima di ogni giro;
- l'**aggiornamento** si esegue alla fine di ogni giro.

I numeri da 0 a 9 diventano:

```c
for (int i = 0; i < 10; i++) {
    printf("%d\n", i);
}
```

Il `for` è un modo più compatto di scrivere un `while`. Questi due pezzi di codice fanno la stessa cosa:

```c
for (int i = 0; i < 10; i++) {
    printf("%d\n", i);
}
```

```c
{
    int i = 0;
    while (i < 10) {
        printf("%d\n", i);
        i++;
    }
}
```

Le graffe esterne della seconda versione contano: la `i` dichiarata nel `for` esiste **solo dentro il for**. Dopo, come per `y` nella sezione prima, gcc dice `error: 'i' undeclared`.

### Contare su un intervallo

Il `for` è fatto per percorrere un **intervallo** di numeri. Bastano tre cose: il valore iniziale, la condizione per restare nell'intervallo e il **passo**.

| Intervallo | Valori | Ciclo |
|---|---|---|
| da 0 a 10 escluso, `[0, 10)` | 0, 1, …, 9 | `for (int i = 0; i < 10; i++)` |
| pari da 0 a 40 incluso, `[0, 40]` | 0, 2, …, 40 | `for (int i = 0; i <= 40; i += 2)` |
| da `n` a 0, all'indietro | `n`, …, 1, 0 | `for (int i = n; i >= 0; i--)` |
| da 1 a `N` incluso, `[1, N]` | 1, 2, …, N | `for (int i = 1; i <= N; i++)` |

La parentesi quadra vuol dire «incluso», la tonda «escluso»: `[0, 10)` è un **intervallo semiaperto**, con lo 0 dentro e il 10 fuori. Con `i < 10` il 10 resta fuori, con `i <= 10` dentro. Il ciclo sui pari gira 21 volte, perché conta anche lo 0 e il 40.

Un modo veloce per contare i giri: con passo 1, l'intervallo `[a, b)` dà `b − a` giri. `[0, 10)` dà 10 giri, `[1, N]`, che è `[1, N + 1)`, ne dà `N`.

Gli ultimi due esempi delle slide:

```c
int somma = 0;
for (int i = 1; i <= N; i++) {
    somma += i;
}
```

```c
for (int i = 1; i <= 10; i++) {
    printf("%d x 5 = %d\n", i, i*5);
}
```

Con `N = 10` la somma vale 55; la tabellina stampa da `1 x 5 = 5` a `10 x 5 = 50`.

::: prova Scrivi un `for` che stampa i multipli di 3 da 3 a 30 inclusi. Quanti giri fa?
`for (int i = 3; i <= 30; i += 3) { printf("%d\n", i); }`. Fa 10 giri: 3, 6, …, 30.
:::

> [!RICORDA]
> - `for (init; condizione; aggiornamento)` è un `while` con la terna su una riga.
> - La variabile dichiarata nell'inizializzazione esiste solo dentro il `for`.
> - `[a, b)`: `a` incluso, `b` escluso. Con passo 1 sono `b − a` giri.

## I cicli annidati (slide 30)

Un ciclo può stare dentro un altro. Per ogni giro del ciclo esterno, quello interno fa **tutti** i suoi giri, poi si ricomincia:

```c
for (int r = 0; r < 3; r++) {
    for (int c = 0; c < 3; c++) {
        printf("(%d,%d) ", r, c);
    }
    printf("\n");
}
```

Stampa:

```
(0,0) (0,1) (0,2)
(1,0) (1,1) (1,2)
(2,0) (2,1) (2,2)
```

```grafico
titolo: L'ordine in cui il ciclo annidato visita le coppie: r sceglie la riga, c scorre tutta la riga, poi printf("\n") va a capo e r passa alla riga dopo. Le coppie sono 3 × 3 = 9.
x: 0 10.5
y: 0.6 6.3
assi: no
griglia: no
proporzioni: libere
testo: 2.4 5.9 | grigio | "c = 0"
testo: 4.8 5.9 | grigio | "c = 1"
testo: 7.2 5.9 | grigio | "c = 2"
testo: 0.7 4.9 | blu | "r = 0"
poligono: 1.6 4.4 3.2 4.4 3.2 5.4 1.6 5.4 | blu
testo: 2.4 4.9 | blu | "(0,0)"
freccia: 3.25 4.9 3.95 4.9 | blu
poligono: 4 4.4 5.6 4.4 5.6 5.4 4 5.4 | blu
testo: 4.8 4.9 | blu | "(0,1)"
freccia: 5.65 4.9 6.35 4.9 | blu
poligono: 6.4 4.4 8 4.4 8 5.4 6.4 5.4 | blu
testo: 7.2 4.9 | blu | "(0,2)"
testo: 9.3 4.9 | grigio | "a capo"
testo: 0.7 3.2 | ambra | "r = 1"
poligono: 1.6 2.7 3.2 2.7 3.2 3.7 1.6 3.7 | ambra
testo: 2.4 3.2 | ambra | "(1,0)"
freccia: 3.25 3.2 3.95 3.2 | ambra
poligono: 4 2.7 5.6 2.7 5.6 3.7 4 3.7 | ambra
testo: 4.8 3.2 | ambra | "(1,1)"
freccia: 5.65 3.2 6.35 3.2 | ambra
poligono: 6.4 2.7 8 2.7 8 3.7 6.4 3.7 | ambra
testo: 7.2 3.2 | ambra | "(1,2)"
testo: 9.3 3.2 | grigio | "a capo"
testo: 0.7 1.5 | verde | "r = 2"
poligono: 1.6 1 3.2 1 3.2 2 1.6 2 | verde
testo: 2.4 1.5 | verde | "(2,0)"
freccia: 3.25 1.5 3.95 1.5 | verde
poligono: 4 1 5.6 1 5.6 2 4 2 | verde
testo: 4.8 1.5 | verde | "(2,1)"
freccia: 5.65 1.5 6.35 1.5 | verde
poligono: 6.4 1 8 1 8 2 6.4 2 | verde
testo: 7.2 1.5 | verde | "(2,2)"
testo: 9.3 1.5 | grigio | "a capo"
```

Le regole di visibilità si sommano: `r` esiste in tutto il ciclo esterno, quindi anche in quello interno; `c` esiste solo nel ciclo interno, e viene ricreata a ogni giro di `r`.

::: prova Quante volte viene chiamata `printf` in tutto, contando anche quella che va a capo?
12: 9 per le coppie e 3 per andare a capo, una per riga.
:::

> [!RICORDA]
> - Per ogni giro del ciclo esterno, l'interno fa tutti i suoi giri.
> - 3 giri fuori × 3 giri dentro = 9 esecuzioni del blocco interno.

## Gli errori più comuni con il for (slide 31)

Le slide raccolgono cinque errori. Per ognuno ho controllato che cosa fanno gcc e il programma.

| Errore | Esempio | Che cosa succede | gcc con `-Wall -Werror` |
|---|---|---|---|
| condizione sempre vera | `for (int i = 0; i >= 0; i++)` | ciclo infinito: `i` cresce e resta positiva | compila |
| aggiornamento mancante | `for (int i = 0; i < 10; )` | `i` resta 0: ciclo infinito | compila |
| un giro in più (*off-by-one*) | `for (int i = 0; i <= 10; i++)` | 11 giri invece di 10 | compila |
| contatore cambiato nel blocco | `i = i + 2;` dentro il `for` | `i` avanza di 3 a ogni giro: stampa 0 3 6 9 | compila |
| contatore usato dopo il `for` | `printf("%d", i);` dopo la `}` | `i` non esiste più | `error: 'i' undeclared` |

Solo l'ultimo viene fermato dal compilatore. Gli altri compilano e danno un risultato sbagliato, e li trovi solo provando il programma o contando i giri a mano.

L'*off-by-one*, «sbagliato di uno», è il più frequente: `<` e `<=` differiscono di un solo giro, e quel giro può leggere un dato che non c'è. Con gli array della [05A](05A_array_stringhe.html) diventa un accesso fuori dai limiti.

Il quarto errore è più sottile: la `i` del `for` va **usata**, non modificata nel blocco. Chi legge `for (int i = 0; i < 10; i++)` si aspetta dieci giri, e dentro il blocco non deve trovare altre modifiche.

::: prova Quanti giri fa `for (int i = 1; i <= 10; i++)`? E `for (int i = 1; i < 10; i++)`?
10 il primo, da 1 a 10. 9 il secondo, da 1 a 9.
:::

> [!RICORDA]
> - Quasi tutti gli errori dei cicli compilano: si trovano contando i giri.
> - `<` o `<=`: decidi se l'ultimo valore è incluso, poi scrivi la condizione.
> - Nel blocco di un `for`, il contatore si legge e non si cambia.

## while o for? (slide 32)

I due cicli fanno le stesse cose: si sceglie quello che si legge meglio.

| Usa `for` quando | Usa `while` quando |
|---|---|
| sai già quante iterazioni servono | non lo sai in anticipo |
| percorri un intervallo di numeri, con passo costante | la condizione dipende dall'input o da un evento |
| il contatore avanza in modo regolare | l'aggiornamento è irregolare, o non è un numero |

Stampare la tabellina del 5: `for`. Leggere altezze finché non arriva un negativo: `while`.

::: prova Quale ciclo useresti per chiedere un PIN finché non è giusto? E per sommare i numeri da 1 a 100?
`while` per il PIN: non sai quanti tentativi servono. `for` per la somma: l'intervallo `[1, 100]` è noto.
:::

> [!RICORDA]
> - Numero di giri noto, intervallo regolare: `for`.
> - Fine decisa da un evento o dall'input: `while`.

## Le sentinelle (slide 33–36)

Nella sezione sul valore di terminazione il ciclo si fermava guardando un dato. Le slide ora separano due idee.

- **Valore sentinella**: un valore speciale nei dati che dice «basta». Altri nomi: valore di terminazione, marcatore di fine input, codice di arresto, EOF (*end of file*).
- **Variabile sentinella**: una variabile `bool` che dice al ciclo se continuare. Altri nomi: flag di controllo, *loop flag*.

Spesso lavorano insieme: quando arriva il valore sentinella, il programma mette la variabile sentinella a `false`, e il ciclo si ferma al controllo successivo.

> [!DEF] Variabile sentinella
> Una variabile `bool` che compare nella condizione del ciclo. Il ciclo continua finché ha il valore iniziale; dentro il blocco, quando il lavoro è finito, le si assegna l'altro valore.

**Come si legge.** È il modo di far finire un ciclo senza `break`: la decisione di smettere si prende dentro il blocco, ma l'uscita avviene sempre dalla condizione. Il nome dice che cosa si aspetta, come `trovato` o `continua`.

L'esempio delle slide cerca il primo numero il cui quadrato supera 500:

```c
int n = 1;
bool trovato = false; // variabile sentinella

while (!trovato) {
    int q = n * n;
    if (q > 500) {
        trovato = true;
    }
    else {
        n++;
    }
}
printf("%d x %d = %d\n", n, n, n*n);
```

Stampa `23 x 23 = 529`: 22 × 22 = 484 non basta. La stessa ricerca si scrive anche in tre righe, mettendo il valore sentinella direttamente nella condizione:

```c
int n = 1;
while (n * n <= 500) {
    n++;
}
```

Danno lo stesso risultato. La versione con `trovato` si allunga, ma regge meglio quando i motivi per fermarsi diventano due o tre.

La media delle altezze, riscritta con una variabile sentinella:

```c
int somma = 0, count = 0;
bool continua = true;   // variabile sentinella

while (continua) {
    int altezza;
    printf("Inserisci altezza (negativa per terminare): ");
    scanf("%d", &altezza);

    if (altezza >= 0) {
        somma += altezza;
        count++;
    }
    else { // altezza è un valore sentinella (<0)
        continua = false; // aggiorna la sentinella, il ciclo finisce
    }
}
printf("Media = %f\n", somma / (float)count);
```

Rispetto alla prima versione, `altezza` sta dentro il ciclo e non serve più inizializzarla a 0: la condizione guarda `continua`, non `altezza`. Con 170, 180, 175 e −1 stampa ancora `Media = 175.000000`.

Le slide usano `bool` senza `#include <stdbool.h>`. Con gcc 16, che segue lo standard C23, compila lo stesso, perché in C23 `bool`, `true` e `false` fanno parte del linguaggio. Con un compilatore più vecchio serve l'`#include`, quindi conviene scriverlo sempre, come nella [03C](03C_booleani.html).

::: prova Con una variabile sentinella `trovato`, scrivi un ciclo che cerca il primo multiplo di 7 maggiore di 50.
`int n = 51; bool trovato = false; while (!trovato) { if (n % 7 == 0) { trovato = true; } else { n++; } }`. Alla fine `n` vale 56.
:::

> [!RICORDA]
> - Valore sentinella: un dato speciale che segnala la fine.
> - Variabile sentinella: un `bool` nella condizione del ciclo.
> - Il ciclo finisce sempre dalla condizione, mai da un salto in mezzo al blocco.

## break e continue, e perché non si usano (slide 37)

Il C ha due parole per saltare dentro un ciclo:

- **`break`** interrompe subito il ciclo, e il programma riprende dopo la `}`;
- **`continue`** salta il resto del blocco e passa al controllo della condizione, cioè al giro dopo.

```c
for (int i = 0; i < 10; i++) {
    if (i == 5)
        break;   // stop al ciclo
    printf("%d ", i);
}
```

Stampa `0 1 2 3 4`.

```c
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0)
        continue; // salta i pari
    printf("%d ", i);
}
```

Stampa `1 3 5 7 9`.

Funzionano, ma rendono il ciclo più difficile da leggere: per sapere quando finisce non basta guardare la condizione, bisogna cercare i `break` nel blocco. Per questo nel corso non si usano, e le **regole d'esame li vietano**. Si riscrivono così:

- il primo diventa `for (int i = 0; i < 5; i++)`: la condizione dice da sola quando fermarsi;
- il secondo diventa `for (int i = 1; i < 10; i += 2)`, oppure un `if (i % 2 != 0)` intorno alla `printf`.

::: prova Riscrivi senza `break`: `for (int i = 0; i < n; i++) { if (v == i * i) break; }`. Ti serve sapere se `v` è un quadrato.
Con una sentinella nella condizione: `bool trovato = false; for (int i = 0; i < n && !trovato; i++) { if (v == i * i) { trovato = true; } }`. Il ciclo si ferma al giro dopo aver trovato il quadrato, senza salti.
:::

> [!RICORDA]
> - `break` esce dal ciclo, `continue` salta al giro dopo.
> - All'esame sono vietati: metti la sentinella nella condizione, con `&& !trovato`.

## Il ciclo do-while (slide 38)

A volte il blocco va eseguito **almeno una volta**, perché solo dopo averlo eseguito sai se ripetere. È il caso dell'input: prima chiedi il numero, poi controlli se va bene. Per questo c'è il `do-while`:

```c
do {
    // blocco di istruzioni da ripetere
} while (condizione);
```

La condizione è in fondo, e dopo la `)` c'è il **punto e virgola**. Il blocco gira una volta, poi si ripete finché la condizione è vera.

Nell'esempio delle slide il programma chiede un numero tra 1 e 10, e lo richiede finché non lo è. La condizione delle slide è sbagliata:

```c
} while (retval == 0 || !(1 <= x || x <= 10));   // SBAGLIATA
```

`1 <= x || x <= 10` è vera per ogni intero: qualunque numero è almeno 1 oppure al massimo 10. La negazione è sempre falsa, e il ciclo accetta tutto. L'ho provato: con 50 stampa `Hai inserito 50`. La condizione giusta usa `&&`, come gli intervalli della [03C](03C_booleani.html):

```c
int x, retval;
do {
    printf("Inserisci un numero [1,10]: ");
    retval = scanf("%d", &x);
    // ripeti se l'input non è valido o non è in [1,10]
} while (retval == 0 || !(1 <= x && x <= 10));

printf("Hai inserito %d\n", x);
```

Con 50, poi 0, poi 7 chiede tre volte e stampa `Hai inserito 7`.

Resta un caso: se scrivi una lettera, il programma richiede il numero all'infinito. La lettera rimane nell'input, ogni `scanf` la trova di nuovo, non riesce a leggerla e restituisce 0. Per toglierla si legge la parola e la si butta via con `scanf("%*s")`: l'asterisco vuol dire «leggi, ma non salvare da nessuna parte». La versione completa è negli esercizi.

::: prova Che cosa stampa `int n = 100; do { n = n * 3; } while (n < 50); printf("%d", n);`?
300. Il blocco gira una volta comunque; poi `300 < 50` è falso e il ciclo finisce. Con un `while` normale il blocco non girerebbe e stamperebbe 100.
:::

> [!RICORDA]
> - `do { … } while (c);`: il blocco gira almeno una volta, la condizione è in fondo.
> - Dopo `while (c)` ci vuole il `;`.
> - Un intervallo è `1 <= x && x <= 10`, con `&&`.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `while (c) { … }` | «finché» | ripete il blocco finché `c` è vera; controlla prima di ogni giro | `while (i < 10) { … }` |
| `for (init; c; agg) { … }` | «for» | un `while` con la terna sulla stessa riga | `for (int i = 0; i < 10; i++)` |
| `do { … } while (c);` | «fai… finché» | esegue il blocco almeno una volta, controlla alla fine | validare un input |
| `i++`, `i--`, `i += 2` | aggiornamento | fa avanzare il contatore | |
| `[a, b)` | da `a` incluso a `b` escluso | intervallo semiaperto | `[0, 10)` sono 0, …, 9 |
| `break` | «interrompi» | esce dal ciclo; vietato all'esame | |
| `continue` | «continua» | salta al giro dopo; vietato all'esame | |
| `%*s` | asterisco in `scanf` | legge una parola senza salvarla | `scanf("%*s");` |

## Verso l'esame

All'esame, su CodeRunner, l'esercizio iterativo è una funzione con uno o due cicli. Le cose da avere in mano:

1. **niente `break` e `continue`** (né `switch`): si esce dal ciclo solo con la condizione, usando una variabile sentinella;
2. **una sola `return`** nelle funzioni iterative, alla fine: la sentinella serve anche a questo;
3. **«per ogni» parte da `true`, «esiste» parte da `false`**: è lo schema degli esercizi d'esame, e lo trovi già nel controllo dei numeri primi qui sotto;
4. **conta i giri** dei casi limite: zero giri (condizione falsa subito), un giro solo, l'ultimo giro (`<` o `<=`);
5. **inizializza accumulatori e contatori** prima del ciclo.

Un esercizio vero del pre-esame 2023/24 chiede se in ogni riga di una matrice esiste un multiplo di 7. Le matrici arrivano più avanti, ma lo schema della soluzione è questo (semplificato: tolgo il controllo sulla lunghezza delle righe), con due sentinelle nelle condizioni dei cicli:

```c
bool ok = true;                        // "per ogni riga": parte da true
for (size_t i = 0; i < rows && ok; i++) {
    bool found = false;                // "esiste un multiplo di 7": parte da false
    for (size_t j = 0; j < rags[i] && !found; j++) {
        if (mat[i][j] % 7 == 0) {
            found = true;
        }
    }
    ok = found;
}
```

È la stessa idea del programma che controlla un quantificatore nella [lezione 09 di Fondamenti](../FDA/09_quantificatori.html): «per ogni» si ferma al primo controesempio, «esiste» al primo testimone. La soluzione completa è nella [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md).

Negli esercizi sullo **stato della memoria** compaiono cicli con variabili dichiarate nel blocco: la loro casella si crea a ogni giro e si cancella alla `}`.

> [!METODO] Seguire un ciclo a mano
> 1. Scrivi i valori iniziali di tutte le variabili.
> 2. Calcola la condizione con i valori di quel momento: se è falsa, hai finito.
> 3. Esegui il blocco una riga alla volta e scrivi una riga della tabella alla fine del giro.
> 4. Esegui l'aggiornamento (nel `for` dopo il blocco) e torna al punto 2.
> 5. Per un `do-while`, comincia dal punto 3.

## Quiz

```quiz
D: Quante volte stampa questo ciclo? `int i = 10; while (i < 10) { printf("x"); i++; }`
+ nessuna
- una
- dieci
- undici
- all'infinito
= La condizione `10 < 10` è falsa già al primo controllo, quindi il blocco non gira mai. La risposta più insidiosa è «una»: lo sarebbe con un `do-while`, che esegue il blocco prima di controllare.

D: Che cosa stampa `for (int i = 0; i < 10; i++) { printf("%d ", i); i = i + 2; }`?
+ `0 3 6 9`
- `0 2 4 6 8`
- `0 1 2 … 9`
- `0 3 6`
- niente: non compila
= A ogni giro `i` aumenta di 2 nel blocco e di 1 nell'aggiornamento, cioè di 3. Dopo il 9 diventa 12 e il ciclo finisce. La risposta più insidiosa è `0 2 4 6 8`, che si avrebbe con il solo `i += 2` nell'aggiornamento. Compila senza avvisi: l'ho provato.

D: Sul modello del laboratorio 04 del 2025/26: quante volte gira `for (int i = 20; i >= 2; i -= 7)`?
N: 3
= `i` vale 20, 13, 6. Al passo dopo vale −1, e `−1 >= 2` è falso.

D: Sul modello del laboratorio 04 del 2025/26: quante volte gira `for (int i = 7; i <= 77; i += 7)`?
N: 11
= `i` vale 7, 14, …, 77: i multipli di 7 da 1·7 a 11·7. Il 77 è incluso perché la condizione è `<=`.

D: Che cosa stampa `int n = 1; do { n = n * 3; } while (n < 50); printf("%d", n);`?
+ `81`
- `27`
- `50`
- `243`
- `3`
= `n` vale 3, 9, 27, 81: dopo 27 la condizione `27 < 50` è ancora vera, quindi c'è un altro giro. La risposta più insidiosa è 27, l'ultimo valore sotto 50: ma il controllo viene dopo la moltiplicazione.

D: Che cosa succede compilando con `-Wall -Werror` un programma che dopo `for (int i = 0; i < 5; i++) { … }` fa `printf("%d", i);`?
+ Non compila: `i` esiste solo dentro il `for`
- Stampa 5
- Stampa 4
- Stampa un valore a caso
- Compila con un avviso
= gcc dà `error: 'i' undeclared`. La risposta più insidiosa è 5, il valore che `i` avrebbe se fosse dichiarata prima del `for`, come nella versione con il `while`.

D: Quale condizione ripete la lettura finché `x` non è tra 1 e 10 inclusi?
+ `while (!(1 <= x && x <= 10));`
- `while (!(1 <= x || x <= 10));`
- `while (1 <= x && x <= 10);`
- `while (1 <= x <= 10);`
- `while (x < 1 && x > 10);`
= Si ripete quando x **non** è nell'intervallo. La risposta più insidiosa è la seconda, quella delle slide: con `||` la parte tra parentesi è sempre vera e il ciclo non ripete mai. La quarta è il confronto doppio che in C non funziona, la quinta non è mai vera.

D: Quante volte viene eseguito `t++` in `for (int r = 0; r < 3; r++) { for (int q = r; q < 3; q++) { t++; } }`?
N: 6
= Il ciclo interno parte da `r`: fa 3 giri con r = 0, 2 con r = 1, 1 con r = 2. In tutto 3 + 2 + 1 = 6.

D: Quale ciclo calcola la somma dei pari da 2 a 100 senza `if`?
+ `for (int k = 2; k <= 100; k += 2) { s += k; }`
- `for (int k = 2; k < 100; k += 2) { s += k; }`
- `for (int k = 0; k <= 100; k++) { s += k; }`
- `for (int k = 2; k <= 100; k++) { s += 2; }`
- `while (k <= 100) { s += k; }`
= Si parte da 2 e si avanza di 2, con il 100 incluso. La risposta più insidiosa è la seconda, che si ferma a 98: il classico errore di uno. La terza somma tutti i numeri, la quarta somma 2 per 99 volte, la quinta non aggiorna `k`.
```

## Esercizi

::: esercizio base Riscaldamento: segui il ciclo
Che cosa stampa? `int s = 0; for (int i = 1; i <= 4; i++) { s = s + i * i; } printf("%d", s);`
::: soluzione
`s` vale 1, poi 1 + 4 = 5, poi 5 + 9 = 14, poi 14 + 16 = 30. Stampa `30`, la somma dei quadrati da 1 a 4.
:::

::: esercizio base Riscaldamento: conta i giri
Quanti giri fa ciascun ciclo? (a) `for (int i = 3; i < 20; i += 4)` (b) `int x = 10; while (x > 1) { x = x / 2; }` (c) `for (int i = 0; i != 7; i += 2)`
::: soluzione
(a) 5: `i` vale 3, 7, 11, 15, 19. (b) 3: `x` passa da 10 a 5, a 2, a 1 (divisione intera). (c) Infinito: `i` vale 0, 2, 4, 6, 8, … e non passa mai per 7. Con `i < 7` farebbe 4 giri.
:::

::: esercizio base Riscaldamento: trova l'errore
Ogni ciclo ha un errore. Trovalo. (a) `int i = 0; while (i < 10) { printf("%d", i); }` (b) `for (int i = 0; i <= 10; i++)` per stampare 10 numeri (c) `do { scanf("%d", &x); } while (x < 0)` (d) `int somma; for (int i = 1; i <= 5; i++) { somma += i; }`
::: soluzione
(a) Manca l'aggiornamento `i++`: ciclo infinito. (b) Un giro in più: da 0 a 10 sono 11 numeri, serve `i < 10`. (c) Manca il `;` dopo la `)`: gcc dà `error: expected ';' before 'return'` (o prima dell'istruzione che segue). (d) `somma` non è inizializzata: parte da un valore indeterminato. Con `-Wall -Werror` compila lo stesso, e da me ha stampato 32773; solo aggiungendo `-O2` gcc se ne accorge (`'somma' is used uninitialized`). Scrivi sempre `int somma = 0;`.
:::

::: esercizio medio La somma delle cifre
Scrivi un programma che legge un intero non negativo e stampa la somma delle sue cifre: con 4072 stampa 13. Se l'input non è valido o è negativo, stampa `Input non valido`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int n;
    if (scanf("%d", &n) == 1 && n >= 0) {
        int somma = 0;
        while (n > 0) {
            somma += n % 10;   // l'ultima cifra
            n = n / 10;        // toglie l'ultima cifra
        }
        printf("%d\n", somma);
    }
    else {
        printf("Input non valido\n");
    }
    return 0;
}
```
Provato: 4072 dà 13, 0 dà 0, 7 dà 7, −5 e `x` danno `Input non valido`. È un `while` perché il numero di cifre non è noto in anticipo: `% 10` prende l'ultima cifra, `/ 10` la toglie.
:::

::: esercizio medio Il triangolo
Scrivi un programma che legge `n` e stampa un triangolo di asterischi con `n` righe: la riga 1 ha un asterisco, la riga 2 ne ha due, e così via.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int n;
    scanf("%d", &n);
    for (int riga = 1; riga <= n; riga++) {
        for (int k = 0; k < riga; k++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```
Con 4 stampa `*`, `**`, `***`, `****`; con 0 non stampa niente. Il ciclo interno usa la variabile di quello esterno: alla riga `riga` fa `riga` giri.
:::

::: esercizio esame Il numero è primo?
Scrivi un programma che legge `n` e dice se è primo, senza `break`. Un numero è primo se è almeno 2 e **nessun** numero tra 2 e `n − 1` lo divide.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int n;
    scanf("%d", &n);
    bool primo = (n >= 2);              // 0 e 1 non sono primi
    for (int d = 2; d < n && primo; d++) {
        if (n % d == 0) {
            primo = false;              // trovato un divisore: si esce dal ciclo
        }
    }
    if (primo) {
        printf("%d e' primo\n", n);
    }
    else {
        printf("%d non e' primo\n", n);
    }
    return 0;
}
```
Provato con 1, 2, 9, 13, 25 e 97: sono primi solo 2, 13 e 97. «Nessun divisore» è un «per ogni» (ogni `d` non divide `n`), quindi la sentinella parte da vero e il ciclo si ferma al primo controesempio. Con `n = 2` il ciclo non gira mai, e 2 risulta primo.
:::

::: esercizio esame Il massimo di una sequenza
Scrivi un programma che legge interi finché non arriva 0 (o finisce l'input) e stampa il più grande. Se non c'è nessun numero prima dello 0, stampa `Nessun numero`. Niente `break`; attenzione ai numeri negativi.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int x, max = 0;
    bool trovato = false;               // ho letto almeno un numero?
    bool continua = true;
    while (continua) {
        if (scanf("%d", &x) != 1 || x == 0) {
            continua = false;           // 0 o input finito: valore sentinella
        }
        else if (!trovato || x > max) {
            max = x;
            trovato = true;
        }
    }
    if (trovato) {
        printf("Massimo: %d\n", max);
    }
    else {
        printf("Nessun numero\n");
    }
    return 0;
}
```
Provato: `4 -2 9 3 0` dà 9, `-7 -3 -9 0` dà −3, `0` dà `Nessun numero`, `5 8` senza zero dà 8. Il punto delicato sono i negativi: se `max` partisse da 0 e il primo numero non venisse preso comunque, con tutti negativi il programma stamperebbe 0, che non è nella sequenza. Per questo il primo numero si prende sempre (`!trovato`).
:::

::: esercizio difficile La lettura a prova di lettere
Completa il `do-while` della slide 38 in modo che, se l'utente scrive una parola al posto del numero, il programma la scarti e chieda di nuovo, invece di ripetere la domanda all'infinito.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int x, retval;
    do {
        printf("Inserisci un numero [1,10]: ");
        retval = scanf("%d", &x);
        if (retval == 0) {
            scanf("%*s");   // scarta la parola che non e' un numero
        }
    } while (retval == 0 || (retval == 1 && !(1 <= x && x <= 10)));
    if (retval == 1) {
        printf("Hai inserito %d\n", x);
    }
    return 0;
}
```
Provato con `ciao 50 0 7`: chiede quattro volte e stampa `Hai inserito 7`. Con `abc` e poi la fine dell'input chiede due volte ed esce senza stampare: quando l'input finisce `scanf` restituisce `EOF` (−1), che non è né 0 né 1, e il ciclo si ferma.
:::

## Domande di ripasso

::: domanda Quali sono i tre pezzi di ogni ciclo?
Inizializzazione, condizione, aggiornamento.
:::

::: domanda Qual è la differenza tra `while` e `do-while`?
Il `while` controlla la condizione prima di ogni giro, quindi può fare zero giri. Il `do-while` la controlla alla fine, quindi fa sempre almeno un giro.
:::

::: domanda Come si scrive un `for` con un `while`?
`{ init; while (condizione) { blocco; aggiornamento; } }`. Le graffe esterne limitano la visibilità della variabile dichiarata nell'inizializzazione.
:::

::: domanda Quanti giri fa un `for` sull'intervallo `[a, b)` con passo 1?
`b − a`.
:::

::: domanda Che differenza c'è tra valore sentinella e variabile sentinella?
Il valore sentinella è un dato speciale che segnala la fine (un'altezza negativa). La variabile sentinella è un `bool` nella condizione del ciclo, che il blocco cambia quando bisogna smettere.
:::

::: domanda Perché all'esame non si usano `break` e `continue`?
Perché le regole d'esame li vietano: il ciclo deve finire solo dalla condizione, che così dice da sola quando ci si ferma.
:::

::: domanda Che cosa succede a una variabile dichiarata nel blocco di un ciclo?
Viene creata a ogni giro e tolta dallo stack alla `}`. Dopo il ciclo non esiste.
:::

## Glossario

```glossario
Iterazione | Una ripetizione del blocco di un ciclo; anche la struttura «ripeti» della programmazione strutturata.
Ciclo while | Ripete un blocco finché la condizione è vera, controllandola prima di ogni giro.
Ciclo for | Un while con inizializzazione, condizione e aggiornamento sulla stessa riga.
Ciclo do-while | Esegue il blocco almeno una volta e controlla la condizione alla fine.
Terna fondamentale | Inizializzazione, condizione e aggiornamento di un ciclo.
Ciclo infinito | Un ciclo la cui condizione non diventa mai falsa.
Accumulatore | Variabile che raccoglie un risultato giro dopo giro, come una somma.
Contatore | Variabile che conta i giri o i dati validi.
Valore sentinella | Un dato speciale che segnala la fine dei dati.
Variabile sentinella | Variabile bool nella condizione del ciclo che decide se continuare.
Intervallo semiaperto | [a, b): a incluso, b escluso.
Off-by-one | Errore di un giro in più o in meno, di solito < al posto di <= o il contrario.
Ciclo annidato | Un ciclo dentro il blocco di un altro.
break | Esce subito dal ciclo; vietato all'esame.
continue | Salta al giro successivo; vietato all'esame.
```

## Checklist

```checklist
- So scrivere un while con inizializzazione, condizione e aggiornamento.
- So seguire un ciclo a mano con una tabella dei valori.
- So usare un accumulatore e un contatore, e inizializzarli bene.
- So fermare un ciclo con un valore sentinella letto in input.
- So che una variabile dichiarata nel ciclo nasce e sparisce a ogni giro.
- So riconoscere un ciclo infinito e fermarlo con Ctrl+C.
- So scrivere un for su un intervallo e contarne i giri.
- So passare da un for a un while e viceversa.
- So come gira un ciclo annidato.
- So usare una variabile sentinella al posto di break.
- So quando serve un do-while e scrivere la condizione di un intervallo con &&.
```

## Fonti

- Slide «Cicli e ripetizioni. Iterazioni strutturate per eseguire azioni più volte» (04A_iterazioni), Programmazione I – Teoria, canale B, A.A. 2026/27, E. G. Amparore: `while` e terna fondamentale (slide 2–5), conto alla rovescia e accumulatori (6–7), valore di terminazione (8), visibilità nei blocchi (9–22), PIN (23), ciclo infinito (24), `for`, equivalenza e intervalli (25–29), cicli annidati (30), errori comuni (31), `for` o `while` (32), sentinelle (33–36), `break` e `continue` (37), `do-while` (38).
- Laboratorio 04 «Iterazioni», Programmazione I, A.A. 2025/26: le domande su come cambia la variabile di controllo dei `for`.
- Esercizio `e1` del pre-esame 2023/24 e regole d'esame dalla [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md) e dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Tutti i programmi delle slide e delle soluzioni li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror`, ed eseguiti; gli errori e le stampe citati sono quelli veri. Le soluzioni, i quiz e gli esercizi sono di questi appunti.
