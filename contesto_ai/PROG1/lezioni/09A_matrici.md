---
corso: PROG1
lezione: 09A
titolo: Matrici
data: 2026-11-24
docenti: Elvio Amparore
simboli_logici: quantificatori
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 09A
descrizione: >-
  Appunti della lezione 09A di Programmazione I (canale B): le matrici in C come array a due dimensioni, la
  disposizione in memoria per righe e la formula dell'indirizzo, i cicli annidati, le matrici come parametri di
  funzione, somma degli elementi, somma, trasposta e prodotto di matrici, ricerca del massimo con selezione, verifica
  di proprietà e test d'ipotesi annidati, con tutti i programmi provati, quiz ed esercizi.
lede: >-
  Una tabella di voti, un'immagine, una mappa: dati con due dimensioni. In C si mettono in una matrice, che in memoria
  è una sola fila di caselle letta riga per riga. Sopra ci girano due cicli, uno dentro l'altro, e gli stessi schemi
  degli array: accumulatori, sentinelle, «per ogni» ed «esiste».
materiale: slide
scheda:
  Slide: 09A_matrici («Matrici. Array multidimensionali, algoritmi per gestire dati su più dimensioni») · 58 pagine
  Lezione: martedì 24/11
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 110 minuti, con gcc a portata di mano
fonte: >-
  Slide «Matrici. Array multidimensionali, algoritmi per gestire dati su più dimensioni» (09A_matrici), Programmazione
  I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/09A_matrici.html
genera_html: true
---

## In breve

- Una **matrice** è una tabella di valori dello stesso tipo, con righe e colonne. In C: `int m[ROWS][COLS];`.
- L'elemento della riga `i` e della colonna `j` è `m[i][j]`: **prima la riga, poi la colonna**, tutti e due contati da 0.
- In memoria la matrice è **una sola fila contigua**, con le righe una dopo l'altra (*row-major order*). `m[i][j]` è l'elemento di posto `i * COLS + j` di quella fila.
- Per scorrerla servono **due cicli annidati**: quello esterno sulle righe, quello interno sulle colonne. Ogni indice ha il suo ciclo.
- Per passarla a una funzione si passano **prima le dimensioni, poi la matrice**: `(size_t rows, size_t cols, const int m[rows][cols])`.
- `m[i]` è la riga `i`, e si può passare alle funzioni che lavorano su un array.
- Gli schemi sono quelli degli array: accumulatore per la somma, sentinelle per «per ogni» ed «esiste», parametri puntatore per restituire una posizione.
- Una proprietà come «esiste una riga di soli zeri» è un «esiste» con dentro un «per ogni»: due sentinelle, una per ciclo.

> [!CANALI]
> **Canale B.** Lezione di martedì 24/11, dalle 11 alle 13: sul Moodle del corso queste slide sono nella settimana del 23 novembre, «Matrici». Le slide sono 58: se Amparore non le ha finite, il resto va alla lezione di mercoledì 25/11, e aggiorno qui. Servono gli array della [05A](05A_array_stringhe.html), i cicli annidati della [04A](04A_iterazioni.html), i parametri array e puntatore della [06B](06B_chiamata_funzioni.html) e le sentinelle della [07A](07A_algoritmi_su_array.html).
>
> **Canali A e C.** Le slide 2026/27 dei canali A e C su questo argomento non le ho viste. L'esame è unico.
>
> **Due avvisi sulle slide.**
>
> - Il `main` di prova del prodotto di matrici (slide 40) stampa `stampaMatrice(M, P, s)`, ma la matrice si chiama `prod`: così non si compila. Il messaggio è riportato sotto.
> - L'output della somma di matrici (slide 33) è scritto senza parentesi quadre; la funzione `stampaMatrice` della slide 20 le mette.
>
> La trasposizione, il prodotto per uno scalare, il prodotto di matrici e i due esercizi finali nelle slide sono lasciati da fare: le soluzioni qui sono mie. Tutti i programmi li ho compilati con gcc 16.1, con `-Wall -Werror`, ed eseguiti.
>
> **Per chi segue Algebra lineare.** Somma, trasposta e prodotto di matrici sono nelle lezioni [L08](../MDAG/L08_matrici_1.html), [L09](../MDAG/L09_matrici_2.html) e [L10](../MDAG/L10_matrici_3.html). Lì gli indici partono da 1, in C da 0.

## Dati con due dimensioni (slide 2–5)

Un array rappresenta una sequenza: le temperature di una settimana, i voti di uno studente. Molti dati però hanno due dimensioni, e metterli in fila fa perdere la loro forma.

Le slide fanno quattro esempi:

- **i voti**, studenti per materie. Si possono fare le medie per studente, lungo una riga, e per materia, lungo una colonna;
- **un'immagine in scala di grigi**: ogni numero è l'intensità di un pixel, da 0 (nero) a 255 (bianco);
- **le vendite**, prodotti per mesi, e **una mappa di altitudini**;
- **le reti neurali**, dove i pesi tra uno strato e il successivo sono una tabella.

La tabella dei voti delle slide:

| | Matematica Discreta | Fondamenti | Programmazione 1 |
|---|---|---|---|
| Anna | 28 | 30 | 27 |
| Luca | 25 | 24 | 30 |
| Giulia | 30 | 29 | 30 |

> [!DEF] Matrice (slide 5)
> Fissati un insieme di valori $T$ e due numeri naturali `rows` e `cols`, una **matrice** è una tabella rettangolare di valori di $T$, con `rows` righe e `cols` colonne.

**Come si legge.** «Rettangolare» vuol dire che tutte le righe hanno la stessa lunghezza. $T$ è il tipo degli elementi: interi, reali, booleani, caratteri. L'insieme di tutte le matrici di quella forma si scrive $T^{rows \times cols}$: quella dei voti sta in $\mathbb{Z}^{3 \times 3}$.

::: prova Nella tabella dei voti, che cosa calcoli sommando una riga? E sommando una colonna?
Sommando una riga, il totale dei voti di uno studente: per Anna 85. Sommando una colonna, il totale di una materia: per Programmazione 1 è 87.
:::

> [!RICORDA]
> - Matrice: tabella rettangolare di valori dello stesso tipo.
> - Due dimensioni: righe e colonne.

## Le matrici in C (slide 6–7)

In C una matrice si dichiara come un array con due coppie di parentesi quadre: prima il numero di righe, poi quello di colonne.

```c
#define ROWS 2
#define COLS 3
int m[ROWS][COLS] = { {0,1,2}, {3,4,5} };
printf("%d", m[1][2]); // stampa 5
```

L'inizializzazione ha una coppia di graffe per ogni riga. L'accesso è `m[i][j]`, con:

- `i` **indice di riga**, valido nell'intervallo semiaperto `[0, ROWS)`;
- `j` **indice di colonna**, valido in `[0, COLS)`.

```grafico
titolo: La matrice m con 2 righe e 3 colonne. L'indice di riga i sta a sinistra, l'indice di colonna j in alto. L'elemento evidenziato è m[1][2]: riga 1, colonna 2, valore 5
x: -1.6 6.4
y: 0 4.4
assi: no
griglia: no
proporzioni: libere
poligono: 0 2 2 2 2 3 0 3 | blu | tenue
poligono: 2 2 4 2 4 3 2 3 | blu | tenue
poligono: 4 2 6 2 6 3 4 3 | blu | tenue
poligono: 0 1 2 1 2 2 0 2 | blu | tenue
poligono: 2 1 4 1 4 2 2 2 | blu | tenue
poligono: 4 1 6 1 6 2 4 2 | ambra | pieno
testo: 1 2.5 | blu | "0"
testo: 3 2.5 | blu | "1"
testo: 5 2.5 | blu | "2"
testo: 1 1.5 | blu | "3"
testo: 3 1.5 | blu | "4"
testo: 5 1.5 | ambra | "5"
testo: 1 3.5 | grigio | "j = 0"
testo: 3 3.5 | grigio | "j = 1"
testo: 5 3.5 | grigio | "j = 2"
testo: -0.8 2.5 | grigio | "i = 0"
testo: -0.8 1.5 | grigio | "i = 1"
testo: 3 0.45 | ambra | "m[1][2] vale 5"
```

Come per gli array, gli indici partono da 0: l'ultima riga è la `ROWS - 1`, l'ultima colonna la `COLS - 1`. La dichiarazione dice **quante** righe e colonne ci sono, l'accesso dice **quale**: `m[2][3]` nella dichiarazione è la forma, `m[1][2]` nell'accesso è l'angolo in basso a destra.

Se l'inizializzazione ha meno valori del necessario, il resto è zero: `int t[2][3] = { {1, 2}, {3} };` dà le righe `1 2 0` e `3 0 0`. Provato.

::: prova Per `int v[3][4]`, quanti elementi ci sono? Qual è l'elemento in basso a destra? `v[3][0]` esiste?
12 elementi. In basso a destra c'è `v[2][3]`. `v[3][0]` non esiste: le righe valide sono 0, 1 e 2.
:::

> [!RICORDA]
> - `int m[ROWS][COLS]`: prima le righe, poi le colonne.
> - `m[i][j]`: riga `i`, colonna `j`, da 0.
> - Indici validi: `[0, ROWS)` e `[0, COLS)`.

## Come sta in memoria (slide 8–10)

La memoria è una fila di celle: non ha righe e colonne. Il C mette la matrice in una zona contigua, **una riga dopo l'altra**. Si chiama *row-major order*, ordine per righe.

```grafico
titolo: La stessa matrice vista come tabella e come sta in memoria. Le due righe sono messe in fila: prima tutta la riga 0, poi tutta la riga 1. Sotto ogni cella c'è il suo posto nella fila, che vale i per 3 più j
x: -0.4 12.4
y: 0 6.6
assi: no
griglia: no
proporzioni: libere
poligono: 3 4.8 5 4.8 5 5.8 3 5.8 | blu | tenue
poligono: 5 4.8 7 4.8 7 5.8 5 5.8 | blu | tenue
poligono: 7 4.8 9 4.8 9 5.8 7 5.8 | blu | tenue
poligono: 3 3.8 5 3.8 5 4.8 3 4.8 | verde | tenue
poligono: 5 3.8 7 3.8 7 4.8 5 4.8 | verde | tenue
poligono: 7 3.8 9 3.8 9 4.8 7 4.8 | verde | tenue
testo: 4 5.3 | blu | "0"
testo: 6 5.3 | blu | "1"
testo: 8 5.3 | blu | "2"
testo: 4 4.3 | verde | "3"
testo: 6 4.3 | verde | "4"
testo: 8 4.3 | verde | "5"
testo: 1.6 5.3 | blu | "riga 0"
testo: 1.6 4.3 | verde | "riga 1"
poligono: 0 1.6 2 1.6 2 2.6 0 2.6 | blu | tenue
poligono: 2 1.6 4 1.6 4 2.6 2 2.6 | blu | tenue
poligono: 4 1.6 6 1.6 6 2.6 4 2.6 | blu | tenue
poligono: 6 1.6 8 1.6 8 2.6 6 2.6 | verde | tenue
poligono: 8 1.6 10 1.6 10 2.6 8 2.6 | verde | tenue
poligono: 10 1.6 12 1.6 12 2.6 10 2.6 | verde | tenue
testo: 1 2.1 | blu | "0"
testo: 3 2.1 | blu | "1"
testo: 5 2.1 | blu | "2"
testo: 7 2.1 | verde | "3"
testo: 9 2.1 | verde | "4"
testo: 11 2.1 | verde | "5"
testo: 1 1.1 | grigio | "posto 0"
testo: 3 1.1 | grigio | "1"
testo: 5 1.1 | grigio | "2"
testo: 7 1.1 | grigio | "3"
testo: 9 1.1 | grigio | "4"
testo: 11 1.1 | grigio | "5"
freccia: 6 3.6 6 2.8 | ambra
testo: 6 0.4 | grigio | "memoria: indirizzi crescenti"
```

Per arrivare a `m[i][j]` bisogna saltare `i` righe intere, ognuna di `COLS` elementi, e poi altri `j` elementi.

> [!DEF] Indirizzo di un elemento (slide 10)
> L'elemento `m[i][j]` di una matrice con `COLS` colonne e tipo `T` sta all'indirizzo
>
> `base(m) + (i * COLS + j) * sizeof(T)` byte
>
> dove `base(m)` è l'indirizzo di `m[0][0]`.

**Come si legge.** `i * COLS + j` è il posto dell'elemento nella fila: per `m[1][2]`, con 3 colonne, è $1 \cdot 3 + 2 = 5$, l'ultimo. Moltiplicato per la misura di un elemento dà la distanza in byte dall'inizio. Nelle slide `m[0][0]` è a `0x3E8` e `m[1][2]` a `0x3FC`, 20 byte dopo: 5 elementi da 4 byte.

Ho stampato le distanze sul mio PC: 0, 4, 8, 12, 16, 20 byte, come dice la formula. E `sizeof(m)` vale 24, `sizeof(m[0])` vale 12: una riga è un array di 3 interi.

Nella formula compare `COLS` e non `ROWS`. Per trovare un elemento il compilatore deve sapere **quanto è lunga una riga**, non quante righe ci sono. È il motivo per cui, più avanti, nei parametri di una funzione il numero di colonne è obbligatorio e quello di righe no.

> [!TRAPPOLA] Fuori riga non vuol dire fuori matrice
> Con 3 colonne, `m[0][3]` non esiste. Ma la formula dà il posto $0 \cdot 3 + 3 = 3$, che è quello di `m[1][0]`: ho controllato, i due indirizzi coincidono. Un indice di colonna troppo grande non dà errore: legge o scrive **un'altra riga**. È comunque un accesso non valido, e non va usato.

::: prova In `int a[4][5]`, qual è il posto nella fila di `a[2][3]`? Quanti byte dopo l'inizio sta, se un `int` occupa 4 byte?
$2 \cdot 5 + 3 = 13$. Sta 52 byte dopo l'inizio.
:::

> [!RICORDA]
> - In memoria: una fila contigua, riga dopo riga.
> - Posto di `m[i][j]`: `i * COLS + j`.
> - Serve la lunghezza della riga, non il numero di righe.

## Due cicli annidati (slide 11–13)

Per visitare tutti gli elementi servono due cicli, uno dentro l'altro: quello esterno sceglie la riga, quello interno scorre le colonne di quella riga. Il principio delle slide: **ogni indice ha il suo ciclo**.

```c
for (size_t i = 0; i < ROWS; i++) {      // ciclo esterno
    for (size_t j = 0; j < COLS; j++) {  // ciclo interno
        // uso m[i][j]
    }
}
```

Per ogni valore di `i` il ciclo interno riparte da `j = 0` e fa tutti i suoi giri. Con 2 righe e 3 colonne il corpo viene eseguito 6 volte, in quest'ordine:

| `i` | `j` | Elemento | Valore |
|---|---|---|---|
| 0 | 0 | `m[0][0]` | 0 |
| 0 | 1 | `m[0][1]` | 1 |
| 0 | 2 | `m[0][2]` | 2 |
| 1 | 0 | `m[1][0]` | 3 |
| 1 | 1 | `m[1][1]` | 4 |
| 1 | 2 | `m[1][2]` | 5 |

È lo stesso ordine in cui gli elementi stanno in memoria.

Quello che si scrive **tra** i due cicli viene eseguito una volta per riga. Serve per le cose «di riga»: aprire e chiudere una parentesi, andare a capo, azzerare un accumulatore di riga.

```c
for (size_t i = 0; i < ROWS; i++) {
    // INIZIO RIGA
    printf("[ ");
    for (size_t j = 0; j < COLS; j++) {
        // stampa elementi della riga
        printf("%d ", m[i][j]);
    }
    // FINE RIGA
    printf("]\n");
}
```

Stampa:

```text
[ 0 1 2 ]
[ 3 4 5 ]
```

::: prova Scambiando i due cicli, con `j` fuori e `i` dentro, e lasciando `m[i][j]` nel corpo, in che ordine vengono visitati i valori?
Per colonne: 0, 3, 1, 4, 2, 5. Va bene quando serve lavorare colonna per colonna, per esempio per la media di ogni materia.
:::

> [!RICORDA]
> - Ciclo esterno: righe. Ciclo interno: colonne.
> - Il ciclo interno riparte da capo per ogni riga.
> - Tra i due cicli: quello che va fatto una volta per riga.

## Le matrici come parametri (slide 14–20)

Una matrice si passa a una funzione, ma il modo di scrivere il parametro dipende da come sono note le dimensioni. Prima serve sapere di che tipo sono i pezzi di una matrice.

| Espressione | Che cos'è | Tipo |
|---|---|---|
| `m` | la matrice; usata in un'espressione diventa un puntatore alla prima riga | `int[ROWS][COLS]`, convertibile in `int(*)[COLS]` |
| `m[i]` | la riga `i`: un array di `COLS` interi | `int[COLS]`, convertibile in `int*` |
| `m[i][j]` | il valore di un elemento | `int` |
| `&m[i][j]` | l'indirizzo di un elemento | `int*` |

Una matrice è un **array di array**: un array di `ROWS` elementi, ognuno dei quali è un array di `COLS` interi. Come per gli array della [06B](06B_chiamata_funzioni.html), alla funzione arriva un indirizzo, non una copia: la funzione lavora sulla matrice del chiamante.

### Dimensioni fisse

Se le dimensioni sono costanti definite con `#define`, il prototipo le riporta:

```c
void fn(int m[ROWS][COLS]); // prototipo
fn(mat);                    // chiamata
```

`ROWS` qui documenta la forma attesa, ma non fa parte del tipo: il C permette di ometterlo e scrivere `int m[][COLS]` oppure `int (*m)[COLS]`. `COLS` invece è obbligatorio, per la formula dell'indirizzo. Senza, gcc dice:

```text
senzacols.c:3:13: error: array type has incomplete element type 'int[]'
    3 | void fn(int m[][]);
      |             ^
senzacols.c:3:13: note: declaration of 'm' as multidimensional array must have bounds for all dimensions except the first
```

### Dimensioni variabili

Dal C99 righe e colonne possono essere decise durante l'esecuzione, e la funzione le riceve come parametri:

```c
void fn(const size_t rows, const size_t cols, int m[rows][cols]);
fn(rows, cols, mat);        // chiamata
```

È la forma che Amparore usa di più, ed è quella degli esercizi d'esame. **L'ordine dei parametri conta**: `rows` e `cols` devono venire prima di `m`, perché il tipo di `m` li usa. Al contrario gcc dice:

```text
ordine.c:4:30: error: 'rows' undeclared here (not in a function)
    4 | int sommaMatrice(const int m[rows][cols], size_t rows, size_t cols);
      |                              ^~~~
```

Una matrice a dimensioni variabili non si può inizializzare con una lista: `int mat[rows][cols] = { {0,1,2}, {3,4,5} };` dà `variable-sized object may not be initialized except with an empty initializer`. Si riempie con i cicli.

### Una riga come array

`m[i]` è un array di `COLS` interi, e si passa a qualunque funzione che lavora su un array:

```c
void fn_su_array(const size_t aLen, int a[]);
fn_su_array(COLS, mat[i]);       // qui aLen = COLS
```

Tutte le funzioni della [07A](07A_algoritmi_su_array.html) funzionano così su una riga, senza cambiare una virgola: con una `sommaArray` ho calcolato la somma della riga 1 della matrice di prima, 12.

### La funzione di stampa

```c
// Stampa gli elementi di una matrice di interi m[rows][cols].
// Ogni riga della matrice è visualizzata tra parentesi quadre.
void stampaMatrice(size_t rows, size_t cols, const int m[rows][cols]) {
    for (size_t i = 0; i < rows; i++) {
        printf("[ ");
        for (size_t j = 0; j < cols; j++) {
            printf("%d ", m[i][j]);   // stampa elementi della riga
        }
        printf("]\n");
    }
}
```

`const` dice che la funzione legge la matrice e non la modifica. La chiamata è `stampaMatrice(ROWS, COLS, m);`.

::: prova Scrivi il prototipo di una funzione `azzera` che mette a 0 tutti gli elementi di una matrice di `double` a dimensioni variabili. Ci va `const`?
`void azzera(size_t rows, size_t cols, double m[rows][cols]);`. Niente `const` sulla matrice: la funzione la modifica.
:::

> [!RICORDA]
> - Prima `rows` e `cols`, poi `m[rows][cols]`.
> - Il numero di colonne nel parametro è obbligatorio.
> - Arriva l'indirizzo: la funzione lavora sulla matrice del chiamante.
> - `m[i]` è un array: si passa alle funzioni sugli array.
> - `const` se la funzione non modifica.

## Somma degli elementi ed errori tipici (slide 21–27)

Sommare tutti i valori di una matrice è una sommatoria doppia: per ogni riga, per ogni colonna, si aggiunge `m[i][j]` a un accumulatore. L'accumulatore parte da 0, il valore che non cambia una somma, come nella [04A](04A_iterazioni.html).

```c
int sommaMatrice(const size_t rows, const size_t cols, const int m[rows][cols]) {
    int s = 0; // accumulatore
    for (size_t i = 0; i < rows; i++) {        // ciclo righe
        for (size_t j = 0; j < cols; j++) {    // ciclo colonne
            s += m[i][j];                      // accumulo elemento
        }
    }
    return s;
}
```

Con la matrice `{ {0,1,2}, {3,4,5} }` e la chiamata `sommaMatrice(ROWS, COLS, m)` dà 15. Si chiama **scansione completa**: ogni elemento viene visitato una volta. La versione a dimensioni fisse è identica, con `ROWS` e `COLS` al posto dei parametri e il prototipo `int sommaMatrice(const int m[ROWS][COLS]);`.

L'accumulatore è dichiarato **fuori** dai due cicli, perché la somma è di tutta la matrice. Se servisse la somma di ogni riga, andrebbe azzerato tra i due cicli, a ogni riga nuova.

Gli errori tipici delle slide:

- **accumulatore o indici inizializzati male**: `s` non azzerato, o un ciclo che parte da 1;
- **indici scambiati**: `m[j][i]` al posto di `m[i][j]`. In una matrice quadrata legge la matrice per colonne, e la somma torna lo stesso; in una rettangolare esce dalla matrice;
- **accesso fuori intervallo**: il C non controlla gli indici. Con `i >= rows` o `j >= cols` il comportamento è indefinito: si leggono o si scrivono celle di altre variabili.

> [!TRAPPOLA] gcc non avvisa sugli indici
> `printf("%d\n", m[2][0]);` su una matrice con 2 righe si compila con `-Wall -Werror` senza nessun messaggio. Che il programma si compili non dice che gli indici siano giusti.

Le buone pratiche:

- **`size_t` per gli indici**: è il tipo delle dimensioni e non può essere negativo;
- **dimensioni con un nome**, `ROWS` e `COLS`, invece di numeri scritti nel codice;
- **una funzione per ogni operazione**: si riusa e si prova da sola;
- **`const` sui parametri che non vengono modificati**: evita modifiche per sbaglio e dice a chi legge che la funzione fa solo lettura.

::: prova Che cosa cambia in `sommaMatrice` per ottenere la somma della sola riga `r`?
Sparisce il ciclo esterno: resta `for (size_t j = 0; j < cols; j++) { s += m[r][j]; }`, con `r` come parametro in più. Oppure si chiama una funzione sugli array con `m[r]`.
:::

> [!RICORDA]
> - Somma: accumulatore a 0, due cicli, `s += m[i][j]`.
> - `m[i][j]`, non `m[j][i]`.
> - Nessun controllo sugli indici, né dal compilatore né durante l'esecuzione.

## Somma, trasposta e prodotto (slide 28–40)

Sono le operazioni di Algebra lineare, tradotte in cicli. In tutte la matrice del risultato è un parametro in più, senza `const`: la prepara il chiamante e la funzione la riempie.

### Somma di due matrici

La somma di due matrici della stessa forma si fa elemento per elemento: $C_{ij} = A_{ij} + B_{ij}$. Nell'esempio delle slide:

$$\begin{bmatrix} 0 & 1 & 2 \\ 3 & 4 & 5 \end{bmatrix} + \begin{bmatrix} 6 & 7 & 8 \\ 9 & 10 & 11 \end{bmatrix} = \begin{bmatrix} 6 & 8 & 10 \\ 12 & 14 & 16 \end{bmatrix}$$

```c
void sommaMatrici(size_t rows, size_t cols,
                  const int a[rows][cols],
                  const int b[rows][cols],
                        int c[rows][cols])
{
    for (size_t i = 0; i < rows; i++) {
        for (size_t j = 0; j < cols; j++) {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
}
```

La stessa coppia `(i, j)` serve per le tre matrici. `const` separa i due ingressi dall'uscita. Provata: stampa `[ 6 8 10 ]` e `[ 12 14 16 ]`.

### Trasposta sul posto

La trasposta scambia righe e colonne: $(A^T)_{ij} = A_{ji}$. Per una matrice quadrata si può fare **sul posto** (*in-place*), cioè modificando la matrice stessa senza usarne un'altra: ogni elemento sopra la diagonale si scambia con quello nella posizione speculare.

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} \qquad A^T = \begin{bmatrix} 1 & 4 & 7 \\ 2 & 5 & 8 \\ 3 & 6 & 9 \end{bmatrix}$$

Le slide danno il prototipo e lasciano il corpo come esercizio. La mia soluzione:

```c
// Trasposizione in-place di una matrice quadrata n×n
void trasponiMatrice(size_t n, int a[n][n]) {
    for (size_t i = 0; i < n; i++) {
        for (size_t j = i + 1; j < n; j++) {   // solo sopra la diagonale
            int tmp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = tmp;
        }
    }
}
```

> [!TRAPPOLA] Con `j` da 0 non succede niente
> Se il ciclo interno parte da `j = 0`, ogni coppia viene scambiata **due volte**: una quando si passa da `(i, j)` e una quando si passa da `(j, i)`. La matrice torna com'era. L'ho provato: l'uscita è uguale all'ingresso. Il ciclo interno deve partire da `i + 1`, così ogni coppia si incontra una volta sola; gli elementi della diagonale restano dove sono.

### Prodotto per uno scalare

Ogni elemento viene moltiplicato per lo stesso numero `k`: $C_{ij} = k \cdot A_{ij}$.

```c
void prodottoScalareMatrice(size_t rows, size_t cols, int k,
                            const int a[rows][cols],
                                  int c[rows][cols]) {
    for (size_t i = 0; i < rows; i++) {
        for (size_t j = 0; j < cols; j++) {
            c[i][j] = k * a[i][j];
        }
    }
}
```

### Prodotto di due matrici

Il prodotto di una matrice $A$ con `m` righe e `n` colonne per una matrice $B$ con `n` righe e `p` colonne è una matrice $C$ con `m` righe e `p` colonne. Le colonne di $A$ devono essere tante quante le righe di $B$.

$$C_{ij} = \sum_{k=0}^{n-1} A_{ik} \cdot B_{kj}$$

A parole: l'elemento `(i, j)` del risultato si ottiene dalla **riga `i` di $A$** e dalla **colonna `j` di $B$**, moltiplicando gli elementi che hanno lo stesso posto e sommando i prodotti. Nell'esempio delle slide:

$$\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \times \begin{bmatrix} 7 & 8 \\ 9 & 10 \\ 11 & 12 \end{bmatrix} = \begin{bmatrix} 58 & 64 \\ 139 & 154 \end{bmatrix}$$

Il primo elemento: $1 \cdot 7 + 2 \cdot 9 + 3 \cdot 11 = 7 + 18 + 33 = 58$.

La formula ha tre indici, e ogni indice ha il suo ciclo: i cicli sono **tre**. I due esterni scelgono l'elemento del risultato; il terzo è la sommatoria, con il suo accumulatore.

```c
// Calcola il prodotto di due matrici A (m×n) e B (n×p)
void prodottoMatrici(size_t m, size_t n, size_t p,
                     const int a[m][n],
                     const int b[n][p],
                           int c[m][p]) {
    for (size_t i = 0; i < m; i++) {
        for (size_t j = 0; j < p; j++) {
            int s = 0;                      // accumulatore per c[i][j]
            for (size_t k = 0; k < n; k++) {
                s += a[i][k] * b[k][j];
            }
            c[i][j] = s;
        }
    }
}
```

L'accumulatore `s` è dichiarato dentro il secondo ciclo: riparte da 0 per ogni elemento del risultato. Provata con le matrici delle slide: stampa `[ 58 64 ]` e `[ 139 154 ]`.

Nel `main` di prova della slide 40 l'ultima riga è `stampaMatrice(M, P, s);`, ma la matrice del risultato si chiama `prod`. gcc:

```text
slide40.c:17:25: error: 's' undeclared (first use in this function)
   17 |     stampaMatrice(M, P, s);
      |                         ^
```

::: prova Nel prodotto delle slide, come si calcola l'elemento in basso a destra, 154?
Riga 1 di $A$ per colonna 1 di $B$: $4 \cdot 8 + 5 \cdot 10 + 6 \cdot 12 = 32 + 50 + 72 = 154$.
:::

> [!RICORDA]
> - Il risultato è un parametro senza `const`, preparato dal chiamante.
> - Trasposta sul posto: il ciclo interno parte da `i + 1`.
> - Prodotto: tre cicli, e un accumulatore azzerato per ogni elemento.

## Il massimo con selezione (slide 41–46)

Il problema: trovare **dove** sta l'elemento positivo più grande. Gli elementi che non sono positivi non contano, e può darsi che non ce ne sia nessuno.

> [!DEF] Ricerca del massimo positivo (slide 42)
> **Ingresso**: una matrice `m` di interi, `rows` per `cols`, di cui si considerano solo gli elementi strettamente positivi. **Uscita**: la posizione `(iMax, jMax)` dell'elemento positivo di valore massimo, e `true`. Se non ci sono elementi positivi: `false`, con `iMax = rows` e `jMax = cols`.

**Come si legge.** La funzione deve restituire tre cose: un booleano e due indici. Con `return` ne esce una sola, quindi i due indici escono da parametri puntatore, come nella [06B](06B_chiamata_funzioni.html). I valori `rows` e `cols` sono **sentinelle**: non sono indici validi, e per questo possono voler dire «non trovato», come `aLen` nella ricerca lineare della [07A](07A_algoritmi_su_array.html).

Per `{ {0, -1, 2}, {3, 5, 4} }` il massimo positivo è 5, in posizione `(1, 1)`.

```c
bool ricercaMaxPos(size_t rows, size_t cols, const int m[rows][cols],
                   size_t *iMax, size_t *jMax)
{
    int max = 0;                // valore sentinella per il massimo
    *iMax = rows;               // valori sentinella iniziali per le posizioni
    *jMax = cols;
    bool esistePos = false;     // non abbiamo ancora iniziato la scansione

    for (size_t i = 0; i < rows; i++) { // ciclo esterno sulle righe
        for (size_t j = 0; j < cols; j++) { // ciclo interno sulle colonne
            if (m[i][j] > 0 && m[i][j] > max) {
                max = m[i][j];
                *iMax = i;
                *jMax = j;
                esistePos = true; // trovato un elemento positivo
            }
        }
    }
    return esistePos;
}
```

Come è costruita:

- **I valori di partenza sono già la risposta del caso «nessun positivo»**: posizioni sentinella e `false`. Se la scansione non trova niente, non c'è altro da fare.
- **`max = 0`** va bene solo perché si cercano i positivi: qualunque elemento positivo supera 0. Per il massimo di una matrice qualunque, 0 sarebbe sbagliato: con tutti gli elementi negativi resterebbe 0, che nella matrice non c'è.
- **Le due condizioni in una**: `m[i][j] > 0 && m[i][j] > max` è «selezionato» e «migliore del massimo finora».
- **La scansione è completa**: nessuna sentinella nelle condizioni dei cicli. Per il massimo bisogna guardare tutto, perché l'ultimo elemento potrebbe essere il più grande.

Provata: `(1, 1)` e `true` per l'esempio; `(2, 3)` e `false` per una matrice 2 per 3 senza positivi. Con il massimo ripetuto, `{ {5, 1, 5}, {2, 5, 0} }`, dà `(0, 0)`: il confronto è `>`, quindi vince il **primo** incontrato.

::: prova Che cosa cambierebbe scrivendo `m[i][j] >= max` al posto di `m[i][j] > max`?
Con il massimo ripetuto verrebbe restituita la posizione dell'**ultimo**: nell'esempio `(1, 1)` invece di `(0, 0)`. Il valore massimo sarebbe lo stesso.
:::

> [!RICORDA]
> - Più risultati: uno con `return`, gli altri con parametri puntatore.
> - Posizioni sentinella `(rows, cols)`: fuori intervallo, quindi «non trovato».
> - Il massimo vuole una scansione completa.
> - `max = 0` va bene solo per i positivi.

## Verificare una proprietà (slide 47–51)

Il problema: dire se **tutti** gli elementi di una matrice rispettano una condizione `Cond`. Con «pari» come condizione, `{ {2,4}, {6,8} }` dà `true` e `{ {2,3}, {6,8} }` dà `false`, perché 3 non è pari.

È il test d'ipotesi della [07A](07A_algoritmi_su_array.html), su due indici invece di uno:

- **ipotesi di partenza**: tutti gli elementi rispettano la condizione, $\forall (i,j) : Cond(m[i][j])$;
- **ipotesi alternativa**: ce n'è almeno uno che non la rispetta, $\exists (i,j) : \lnot Cond(m[i][j])$.

Si parte credendo alla prima, con una sentinella a `true`, e si cerca un controesempio. Al primo che si trova la sentinella diventa `false` e la ricerca si ferma. Se si arriva in fondo senza trovarne, l'ipotesi di partenza è confermata.

```c
// Verifica che tutti gli elementi della matrice siano pari
bool verificaTuttiPari(size_t rows, size_t cols, const int m[rows][cols]) {
    bool tuttiOk = true; // Assumiamo H0 inizialmente vera, tutti soddisfano
    for (size_t i = 0; i < rows && tuttiOk; i++) {
        for (size_t j = 0; j < cols && tuttiOk; j++) {
            if (m[i][j] % 2 != 0) {
                tuttiOk = false; // violazione trovata, H0 rifiutata
            }
        }
    }
    return tuttiOk; // H0 accettata
}
```

La sentinella sta nella condizione di **tutti e due** i cicli. Nel ciclo interno ferma la scansione della riga; nel ciclo esterno impedisce di cominciare le righe successive. Se la si mette solo nel ciclo interno, il risultato è giusto lo stesso, ma dopo il controesempio il ciclo esterno fa ancora un giro a vuoto per ogni riga rimasta.

Niente `break`, che all'esame è vietato, e una sola `return`.

Il test è `m[i][j] % 2 != 0`, non `== 1`: con un numero negativo dispari il resto è −1, e il confronto con 1 lo prenderebbe per pari.

::: prova Come cambia la funzione per rispondere a «esiste un elemento negativo»?
La sentinella parte da `false`, per esempio `bool esiste = false;`. Le condizioni dei cicli diventano `i < rows && !esiste` e `j < cols && !esiste`. Il test è `m[i][j] < 0`, e quando è vero si mette `esiste = true`.
:::

> [!RICORDA]
> - «Per ogni»: sentinella a `true`, si cerca un controesempio.
> - La sentinella va nella condizione di tutti e due i cicli.
> - Niente `break`, una sola `return`.

## Due test uno dentro l'altro (slide 52–58)

La proprietà «**esiste una riga di soli zeri**» ha due quantificatori. Le slide la scrivono in due passi: prima che cosa vuol dire che la riga `i` è di soli zeri, poi che una riga così esiste.

$$RowZero(i) : \ \forall j \in [0, cols) : M_{ij} = 0 \qquad\qquad \exists i \in [0, rows) : RowZero(i)$$

Un «esiste» sulle righe, con dentro un «per ogni» sulle colonne. Ogni quantificatore ha la sua sentinella, con il valore di partenza giusto per lui, e il suo ciclo.

```c
bool existsRowAllZeros(size_t rows, size_t cols, const int m[rows][cols]) {
    bool esisteRiga = false;      // ipotesi H0: non ci sono righe di tutti zeri
    for (size_t i = 0; i < rows && !esisteRiga; ++i) {
        bool allZero = true;      // ipotesi H0b: la riga i è tutta a zeri
        for (size_t j = 0; j < cols && allZero; ++j) {
            if (m[i][j] != 0) {   // trovato un elemento ≠ 0 nella riga i
                allZero = false;  // H1b: la riga i NON è tutta a zeri
            }
        }
        if (allZero) { // trovata riga tutta zero
            esisteRiga = true;    // H1: esiste riga di soli zeri
        }
    }
    return esisteRiga;
}
```

```grafico
titolo: I due test sulla matrice di prova delle slide. La riga 0 viene scartata al primo elemento, che non è zero. La riga 1 viene letta tutta: è di soli zeri, e la ricerca si ferma. La riga 2 non viene nemmeno guardata
x: -2.6 11.6
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
poligono: 0 3 1.6 3 1.6 4 0 4 | rosa | tenue
poligono: 1.6 3 3.2 3 3.2 4 1.6 4 | grigio | tenue
poligono: 3.2 3 4.8 3 4.8 4 3.2 4 | grigio | tenue
poligono: 4.8 3 6.4 3 6.4 4 4.8 4 | grigio | tenue
testo: 0.8 3.5 | rosa | "1"
testo: 2.4 3.5 | grigio | "0"
testo: 4.0 3.5 | grigio | "2"
testo: 5.6 3.5 | grigio | "0"
poligono: 0 2 1.6 2 1.6 3 0 3 | verde | tenue
poligono: 1.6 2 3.2 2 3.2 3 1.6 3 | verde | tenue
poligono: 3.2 2 4.8 2 4.8 3 3.2 3 | verde | tenue
poligono: 4.8 2 6.4 2 6.4 3 4.8 3 | verde | tenue
testo: 0.8 2.5 | verde | "0"
testo: 2.4 2.5 | verde | "0"
testo: 4.0 2.5 | verde | "0"
testo: 5.6 2.5 | verde | "0"
poligono: 0 1 1.6 1 1.6 2 0 2 | grigio | tenue
poligono: 1.6 1 3.2 1 3.2 2 1.6 2 | grigio | tenue
poligono: 3.2 1 4.8 1 4.8 2 3.2 2 | grigio | tenue
poligono: 4.8 1 6.4 1 6.4 2 4.8 2 | grigio | tenue
testo: 0.8 1.5 | grigio | "5"
testo: 2.4 1.5 | grigio | "6"
testo: 4.0 1.5 | grigio | "0"
testo: 5.6 1.5 | grigio | "7"
testo: -1.3 3.5 | grigio | "riga 0"
testo: -1.3 2.5 | grigio | "riga 1"
testo: -1.3 1.5 | grigio | "riga 2"
testo: 9.0 3.5 | rosa | "allZero: false"
testo: 9.0 2.5 | verde | "allZero: true"
testo: 9.0 1.5 | grigio | "non guardata"
testo: 3.2 0.4 | verde | "esisteRiga: true"
```

I due test, uno per livello:

| | Test esterno, sulla matrice | Test interno, sulla riga `i` |
|---|---|---|
| Quantificatore | esiste una riga… | per ogni colonna… |
| Sentinella | `esisteRiga = false` | `allZero = true` |
| Si ferma quando | trova una riga di soli zeri | trova un elemento diverso da 0 |
| Condizione del ciclo | `i < rows && !esisteRiga` | `j < cols && allZero` |

Tre dettagli che nel codice contano:

- **`allZero` è dichiarata dentro il ciclo esterno**: è una domanda sulla riga, e riparte da `true` a ogni riga nuova. Dichiarata fuori, dopo la prima riga scartata resterebbe `false` per sempre.
- **Il collegamento tra i due test** è l'`if (allZero)` dopo il ciclo interno: la risposta del test interno diventa il «trovato» del test esterno.
- **Alla fine** `esisteRiga` falso vuol dire che ogni riga ha almeno un elemento diverso da zero: è la negazione della formula, con i quantificatori scambiati, come in [Fondamenti](../FDA/11_quantificatori_annidati.html).

I casi limite seguono dalle sentinelle, senza codice in più:

- con **zero righe** la risposta è `false`: non esiste nessuna riga;
- con **zero colonne** e almeno una riga la risposta è `true`: una riga senza elementi è di soli zeri a vuoto, perché non ha controesempi.

I cinque test delle slide passano tutti, compreso `existsRowAllZeros(0, 0, NULL)`.

Le slide finiscono con due esercizi da fare; li trovi svolti negli esercizi qui sotto.

::: prova Per «**ogni** riga contiene **almeno uno** zero», quali sono le due sentinelle e i loro valori di partenza?
Fuori un «per ogni»: `bool tutte = true;`. Dentro un «esiste»: `bool trovato = false;`, dichiarata nel ciclo esterno. Dopo il ciclo interno: `if (!trovato) { tutte = false; }`.
:::

> [!RICORDA]
> - Un quantificatore, una sentinella, un ciclo.
> - «Esiste» parte da `false`, «per ogni» da `true`.
> - La sentinella interna si dichiara dentro il ciclo esterno.
> - Dopo il ciclo interno, il suo risultato aggiorna la sentinella esterna.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `int m[R][C]` | «m, R per C» | matrice di interi con `R` righe e `C` colonne | `int m[2][3]` |
| `m[i][j]` | «m di i, j» | l'elemento della riga `i` e della colonna `j` | `m[1][2]` vale 5 |
| `m[i]` | «m di i» | la riga `i`, un array di `C` elementi | `sommaArray(COLS, m[1])` |
| `i * COLS + j` | «i per COLS più j» | il posto di `m[i][j]` nella fila in memoria | $1 \cdot 3 + 2 = 5$ |
| $T^{rows \times cols}$ | «T alla rows per cols» | l'insieme delle matrici di quella forma | $\mathbb{Z}^{2 \times 3}$ |
| $A^T$ | «A trasposta» | la matrice con righe e colonne scambiate | $(A^T)_{ij} = A_{ji}$ |
| $\sum_{k=0}^{n-1}$ | «somma per k da 0 a n meno 1» | un ciclo con accumulatore | il terzo ciclo del prodotto |
| $\forall$, $\exists$ | «per ogni», «esiste» | i due quantificatori | $\exists i : \forall j : M_{ij} = 0$ |

## Verso l'esame

All'esame l'esercizio di programmazione iterativa (`e1`) è molto spesso su una matrice, con una proprietà fatta di «per ogni» ed «esiste» annidati. Le regole: una sola `return`, niente `break`, compilazione con `-Wall -Werror`. Di questa lezione servono:

1. **il prototipo con le dimensioni prima della matrice**, e `const` se la matrice è solo letta;
2. **i due cicli annidati** con gli intervalli semiaperti, senza scambiare `i` e `j`;
3. **una sentinella per quantificatore**, con il valore di partenza giusto, nella condizione dei cicli;
4. **dove dichiarare le variabili di riga**: dentro il ciclo esterno;
5. **i casi limite**, zero righe e zero colonne, controllati a mano.

L'esercizio vero che ho, quello del pre-esame 2023/24, è svolto nella [07A](07A_algoritmi_su_array.html): «per ogni riga, la riga è lunga almeno `rows` ed esiste un multiplo di 7». Usa una matrice irregolare, con un array `rags` che dà la lunghezza di ogni riga: è un argomento delle prossime lezioni, ma lo schema dei due test annidati è quello di oggi.

### Una domanda sul modello, letta insieme

È il secondo esercizio della slide 58, scritto come un testo d'esame.

«Scrivere una funzione iterativa `e1` che riceve una matrice di interi (`rows`, `cols`, `m`) e ritorna `true` se esiste almeno una riga in cui tutte le coppie di elementi adiacenti sono in ordine non decrescente, `false` altrimenti.»

**In pratica chiede:** esiste una riga `i` in cui, per ogni `j` da 1 a `cols - 1`, vale `m[i][j-1] <= m[i][j]`. Un «esiste» con dentro un «per ogni»: la stessa struttura della riga di zeri, con il test di ordinamento della 07A al posto del confronto con zero.

**Soluzione.**

1. Sentinella esterna `esiste = false`, condizione `i < rows && !esiste`.
2. Per ogni riga, sentinella interna `ordinata = true`.
3. Il ciclo interno parte da `j = 1` e confronta ogni elemento con il precedente; condizione `j < cols && ordinata`.
4. Al primo `m[i][j-1] > m[i][j]`, `ordinata = false`.
5. Dopo il ciclo interno: se `ordinata`, allora `esiste = true`.

```c
bool e1(size_t rows, size_t cols, const int m[rows][cols]) {
    bool esiste = false;               // "esiste una riga": parte da false
    for (size_t i = 0; i < rows && !esiste; i++) {
        bool ordinata = true;          // "per ogni coppia adiacente": parte da true
        for (size_t j = 1; j < cols && ordinata; j++) {
            if (m[i][j - 1] > m[i][j]) {
                ordinata = false;
            }
        }
        if (ordinata) {
            esiste = true;
        }
    }
    return esiste;
}
```

Provata: `{ {3, 1, 2}, {5, 4, 6} }` dà `false`; `{ {3, 1, 2}, {4, 4, 6} }` dà `true`, perché «non decrescente» permette i valori uguali. Con zero righe dà `false`. Con una sola colonna dà `true`: una riga di un elemento non ha coppie, ed è ordinata a vuoto.

> [!METODO] Da una proprietà con due quantificatori al codice
> 1. Scrivi la proprietà con «per ogni» ed «esiste», dicendo su che cosa corre ogni indice.
> 2. Il quantificatore esterno è il ciclo esterno, quello interno il ciclo interno.
> 3. Una sentinella per ciascuno: `true` per «per ogni», `false` per «esiste». Quella interna dichiarata dentro il ciclo esterno.
> 4. Ogni ciclo ha nella condizione la sua sentinella, e si ferma appena la risposta è decisa.
> 5. Dopo il ciclo interno, un `if` passa il suo risultato alla sentinella esterna.
> 6. Controlla zero righe e zero colonne: le sentinelle devono già dare la risposta giusta.

### Errori da evitare

- Scrivere il parametro matrice prima di `rows` e `cols`.
- Scambiare `i` e `j`, o usare `rows` come limite del ciclo sulle colonne.
- Dichiarare la sentinella di riga fuori dal ciclo esterno.
- Dimenticare la sentinella nella condizione del ciclo esterno.
- Nella trasposta sul posto, far partire il ciclo interno da 0.
- Nel prodotto, non azzerare l'accumulatore per ogni elemento.

## Quiz

```quiz
D: Dopo `int m[2][3] = { {0,1,2}, {3,4,5} };`, quanto vale `m[1][0]`?
N: 3
= Riga 1, colonna 0: il primo elemento della seconda riga.

D: In `int a[4][6]`, in quale posto della fila in memoria sta `a[2][5]`, contando da 0?
N: 17
= Si saltano 2 righe da 6 elementi e poi altri 5: 12 + 5.

D: Qual è il prototipo giusto per una funzione che legge una matrice a dimensioni variabili?
+ `int f(size_t rows, size_t cols, const int m[rows][cols]);`
- `int f(const int m[rows][cols], size_t rows, size_t cols);`
- `int f(size_t rows, size_t cols, const int m[][]);`
- `int f(const int m[][]);`
- `int f(size_t rows, size_t cols, const int m);`
= Le dimensioni devono essere dichiarate prima di essere usate nel tipo di `m`. La più insidiosa è `int f(const int m[rows][cols], size_t rows, size_t cols);`: sembra la stessa cosa in un altro ordine, ma gcc dice `'rows' undeclared here`.

D: Perché nel parametro di una funzione il numero di colonne è obbligatorio e quello di righe no?
+ perché per trovare `m[i][j]` serve sapere quanto è lunga una riga
- perché le righe si contano da sole con `sizeof`
- perché le colonne sono sempre più delle righe
- perché il C controlla gli indici di colonna ma non quelli di riga
- non è vero: sono obbligatori tutti e due
= Il posto dell'elemento è `i * COLS + j`: il numero di righe non compare. La più insidiosa è «perché il C controlla gli indici di colonna ma non quelli di riga»: il C non controlla nessun indice.

D: Che cosa stampa il ciclo `for (size_t j = 0; j < 3; j++) { for (size_t i = 0; i < 2; i++) { printf("%d ", m[i][j]); } }` sulla matrice `{ {0,1,2}, {3,4,5} }`?
+ `0 3 1 4 2 5`
- `0 1 2 3 4 5`
- `0 3 1 4`
- `3 4 5 0 1 2`
- `0 1 3 4 2 5`
= Il ciclo esterno è sulle colonne: la matrice viene letta colonna per colonna. La più insidiosa è `0 1 2 3 4 5`, che è l'ordine per righe.

D: In `verificaTuttiPari`, quale valore ha la sentinella `tuttiOk` all'inizio, e perché?
+ `true`: si parte dall'ipotesi che tutti rispettino la condizione e si cerca un controesempio
- `false`: finché non si è guardato niente non si sa
- `true`: perché la matrice ha almeno un elemento
- `false`: diventa `true` al primo elemento pari
- non importa, viene assegnata nel ciclo
= È un «per ogni». Con `false` e «diventa `true` al primo pari» si risponderebbe a «esiste un pari», che è un'altra domanda: è la più insidiosa.

D: Nel prodotto di una matrice 2 per 3 per una matrice 3 per 2, quante volte viene eseguita l'istruzione `s += a[i][k] * b[k][j];`?
N: 12
= Il risultato ha 2 per 2 elementi, e per ognuno la sommatoria ha 3 termini: 4 per 3.

D: `existsRowAllZeros` riceve una matrice con 3 righe e 0 colonne. Che cosa ritorna?
+ `true`: la prima riga non ha elementi, quindi non ha controesempi
- `false`: senza elementi non ci sono zeri
- `false`: il ciclo esterno non parte
- dipende dal contenuto della memoria
- non termina
= Il ciclo interno non fa giri, `allZero` resta `true`, e la riga 0 conta come riga di soli zeri. La più insidiosa è «`false`: il ciclo esterno non parte»: quello succede con zero **righe**.
```

## Esercizi

::: esercizio base Riscaldamento: indici e posti
Per `int m[3][4]`: (a) quanti elementi ha; (b) il posto in memoria di `m[2][1]`; (c) a quale elemento corrisponde il posto 7; (d) quali di `m[3][0]`, `m[0][3]`, `m[2][4]` sono validi.
::: soluzione
(a) 12. (b) $2 \cdot 4 + 1 = 9$. (c) $7 = 1 \cdot 4 + 3$: è `m[1][3]`. (d) Solo `m[0][3]`: le righe valide sono da 0 a 2, le colonne da 0 a 3.
:::

::: esercizio base Riscaldamento: la traccia
Scrivi `int traccia(size_t n, const int a[n][n])`, che ritorna la somma degli elementi della diagonale principale. Quanti cicli servono?
::: soluzione
Uno solo: gli elementi della diagonale hanno i due indici uguali.
```c
int traccia(size_t n, const int a[n][n]) {
    int s = 0;
    for (size_t i = 0; i < n; i++) {
        s += a[i][i];
    }
    return s;
}
```
Provata: per `{ {1,2,3}, {4,5,6}, {7,8,9} }` dà 15.
:::

::: esercizio medio Il massimo di ogni colonna
Scrivi `void massimiColonne(size_t rows, size_t cols, const int m[rows][cols], int out[cols])`, che mette in `out[j]` il massimo della colonna `j`. Supponi `rows >= 1`.
::: soluzione
Il ciclo esterno è sulle colonne, perché il risultato è uno per colonna. Il massimo parte dal primo elemento della colonna, non da 0.
```c
void massimiColonne(size_t rows, size_t cols, const int m[rows][cols], int out[cols]) {
    for (size_t j = 0; j < cols; j++) {
        int max = m[0][j];
        for (size_t i = 1; i < rows; i++) {
            if (m[i][j] > max) {
                max = m[i][j];
            }
        }
        out[j] = max;
    }
}
```
Provata sulla tabella dei voti: 30, 30, 30.
:::

::: esercizio medio Matrice simmetrica
Scrivi `bool simmetrica(size_t n, const int a[n][n])`, che ritorna `true` se `a[i][j] == a[j][i]` per ogni coppia di indici.
::: soluzione
Un solo «per ogni», su due indici: una sentinella. Basta controllare sopra la diagonale, come nella trasposta.
```c
bool simmetrica(size_t n, const int a[n][n]) {
    bool ok = true;
    for (size_t i = 0; i < n && ok; i++) {
        for (size_t j = i + 1; j < n && ok; j++) {
            if (a[i][j] != a[j][i]) {
                ok = false;
            }
        }
    }
    return ok;
}
```
Provata: `{ {1,2,3}, {2,5,6}, {3,6,9} }` dà `true`, la trasposta dell'esempio delle slide dà `false`.
:::

::: esercizio esame Ogni riga ha un elemento nell'intervallo (slide 58)
Scrivi una funzione che riceve una matrice di interi e due valori `minVal` e `maxVal`, e ritorna `true` se **tutte** le righe hanno **almeno un** elemento compreso in `[minVal, maxVal]`.
::: soluzione
Un «per ogni» sulle righe con dentro un «esiste» sulle colonne: le sentinelle sono al contrario rispetto alla riga di zeri.
```c
bool ogniRigaHaInIntervallo(size_t rows, size_t cols, const int m[rows][cols], int minVal, int maxVal) {
    bool tutte = true;                 // "per ogni riga": parte da true
    for (size_t i = 0; i < rows && tutte; i++) {
        bool trovato = false;          // "esiste un elemento": parte da false
        for (size_t j = 0; j < cols && !trovato; j++) {
            if (minVal <= m[i][j] && m[i][j] <= maxVal) {
                trovato = true;
            }
        }
        if (!trovato) {
            tutte = false;
        }
    }
    return tutte;
}
```
Provata su `{ {1, 9, 20}, {4, 30, 2}, {7, 7, 7} }`: con `[1, 7]` dà `true`; con `[3, 8]` dà `false`, perché la riga 0 non ha elementi tra 3 e 8. Con zero righe dà `true`; con zero colonne e almeno una riga dà `false`. L'intervallo si scrive con due confronti uniti da `&&`: `minVal <= x <= maxVal` in C vuol dire un'altra cosa, come nel [Lab03](Lab03_condizioni_booleane.html).
:::

::: esercizio difficile Quante righe hanno somma pari
Scrivi `size_t righeSommaPari(size_t rows, size_t cols, const int m[rows][cols])`, che conta le righe la cui somma è pari. Dove va dichiarato l'accumulatore della somma? Qui servono le sentinelle?
::: soluzione
L'accumulatore `s` è una variabile di riga: va dichiarato dentro il ciclo esterno, così riparte da 0 a ogni riga. Niente sentinelle: è un conteggio, quindi una scansione completa.
```c
size_t righeSommaPari(size_t rows, size_t cols, const int m[rows][cols]) {
    size_t count = 0;
    for (size_t i = 0; i < rows; i++) {
        int s = 0;
        for (size_t j = 0; j < cols; j++) {
            s += m[i][j];
        }
        if (s % 2 == 0) {
            count++;
        }
    }
    return count;
}
```
Provata: per `{ {1,2,3}, {4,5,6}, {7,8,9} }` le somme sono 6, 15 e 24, e il risultato è 2. Per la tabella dei voti le somme sono 85, 79 e 89: il risultato è 0.
:::

## Domande di ripasso

::: domanda Come si dichiara una matrice e come si accede a un elemento?
`int m[ROWS][COLS];`, con le righe prima delle colonne. L'elemento della riga `i` e della colonna `j` è `m[i][j]`, con gli indici da 0.
:::

::: domanda Come è disposta una matrice in memoria?
In una zona contigua, una riga dopo l'altra. `m[i][j]` è l'elemento di posto `i * COLS + j`.
:::

::: domanda Perché servono due cicli annidati?
Perché ci sono due indici, e ogni indice ha il suo ciclo: quello esterno sceglie la riga, quello interno scorre le colonne.
:::

::: domanda Come si passa una matrice a dimensioni variabili a una funzione?
Con le dimensioni prima della matrice: `(size_t rows, size_t cols, int m[rows][cols])`. Alla funzione arriva l'indirizzo, non una copia.
:::

::: domanda Perché `ricercaMaxPos` usa parametri puntatore?
Perché deve restituire tre cose, un booleano e due indici, e con `return` ne esce una sola.
:::

::: domanda Come si traduce «esiste una riga in cui tutti gli elementi…» in codice?
Con due sentinelle: una esterna che parte da `false`, per «esiste», e una interna che parte da `true`, per «tutti», dichiarata dentro il ciclo esterno.
:::

## Glossario

```glossario
Matrice | Tabella rettangolare di valori dello stesso tipo, con righe e colonne.
Indice di riga, indice di colonna | I due numeri che individuano un elemento; in C partono da 0.
Row-major order | Disposizione in memoria per righe: prima tutta la riga 0, poi la riga 1, e così via.
Cicli annidati | Un ciclo dentro un altro: quello interno fa tutti i suoi giri per ogni giro di quello esterno.
Scansione completa | Visita di tutti gli elementi, senza fermarsi prima.
Trasposta | La matrice che si ottiene scambiando righe e colonne.
In-place (sul posto) | Detto di un'operazione che modifica la matrice stessa, senza usarne una seconda.
Valore sentinella | Valore fuori dall'intervallo valido usato per dire «non trovato»: qui rows e cols.
Test d'ipotesi | Schema con una variabile sentinella: si parte da un'ipotesi e si cerca un elemento che la smentisce.
```

## Checklist

```checklist
- So dichiarare e inizializzare una matrice, e accedere a un elemento.
- So calcolare il posto in memoria di un elemento con la formula.
- So scrivere i due cicli annidati, per righe e per colonne.
- So scrivere il prototipo di una funzione che riceve una matrice a dimensioni variabili.
- So passare una riga a una funzione che lavora su un array.
- So scrivere la somma degli elementi, e dire dove va l'accumulatore.
- So scrivere somma, trasposta sul posto e prodotto di matrici.
- So restituire una posizione con due parametri puntatore e valori sentinella.
- So verificare una proprietà «per ogni» con una sentinella nei due cicli.
- So tradurre in codice una proprietà con due quantificatori annidati.
- So controllare a mano i casi con zero righe e con zero colonne.
```

## Fonti

- Slide «Matrici. Array multidimensionali, algoritmi per gestire dati su più dimensioni» (09A_matrici), Programmazione I – Teoria, canale B, prof. Elvio Amparore, A.A. 2026/27: 58 pagine. Sul Moodle del corso sono nella settimana del 23 novembre.
- Tutti i programmi sono stati compilati con gcc 16.1 (`-Wall -Werror`) ed eseguiti; i messaggi di errore riportati sono quelli veri del compilatore. I corpi di `trasponiMatrice`, `prodottoScalareMatrice` e `prodottoMatrici` e le soluzioni dei due esercizi della slide 58 sono miei.
- [Raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md): esercizio iterativo del pre-esame 2023/24.
