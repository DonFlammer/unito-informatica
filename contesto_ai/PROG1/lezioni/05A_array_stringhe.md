---
corso: PROG1
lezione: 05A
titolo: Array e stringhe
data: 2026-10-21
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 05A
descrizione: >-
  Appunti della lezione 05A di Programmazione I (canale B): array statici, indici da 0 e intervallo semiaperto,
  size_t e %zu, inizializzazione, #define, scansione in avanti e all'indietro, somma, conteggio e massimo, legame tra
  array e puntatori, VLA, gli errori più comuni, caratteri e codice ASCII, da ASCII a Unicode, stringhe con il
  terminatore, scansione con indice e con puntatore, lettura con %s e con la maschera di scansione, con tutti i
  programmi delle slide provati, quiz ed esercizi.
lede: >-
  Finora ogni variabile conteneva un valore solo. Un array ne contiene molti dello stesso tipo, uno dopo l'altro in
  memoria, e con un ciclo for si possono leggere tutti. Una stringa è un array di caratteri con un segnale di fine.
materiale: slide
scheda:
  Slide: 05A_array_stringhe («Array e stringhe») · 35 pagine
  Lezioni: mercoledì 21/10 (fino alla slide 9) e martedì 27/10 (dalla 9 alla 35)
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 100 minuti, meglio con gcc a portata di mano
fonte: >-
  Slide «Array e stringhe. Rappresentazione dei dati sequenziali, array statici, VLA e stringhe» (05A_array_stringhe),
  Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/05A_array_stringhe.html
genera_html: true
---

## In breve

- Un **array** è una fila di valori dello **stesso tipo**, uno accanto all'altro in memoria. `int voti[5];` ne crea cinque.
- Gli elementi si raggiungono con l'**indice**, che parte da **0**: in un array di lunghezza `n` gli indici validi sono `[0, n)`. Indici e lunghezze hanno il tipo **`size_t`**, che si stampa con **`%zu`**.
- Per leggere tutto l'array basta un `for (size_t i = 0; i < n; i++)`: è la **scansione**. Somma, conteggio e massimo sono scansioni con un accumulatore.
- Il nome dell'array, nelle espressioni, diventa il **puntatore al primo elemento**: `v[i]` è la stessa cosa di `*(v + i)`.
- Il C **non controlla** gli indici: `v[5]` in un array di 5 elementi compila, e legge memoria che non è dell'array. E gli array non si assegnano né si confrontano con `=` e `==`.
- Un **carattere** (`char`) è un numero, il suo codice **ASCII**: `'A'` vale 65, `'a'` vale 97, `'0'` vale 48.
- Una **stringa** è un array di `char` che finisce con il carattere **`'\0'`**: `"ciao"` occupa 5 byte.
- `scanf("%19s", nome)` legge una parola, senza `&`; per una frase con gli spazi serve `scanf(" %49[^\n]", frase)`.

> [!CANALI]
> **Canale B.** Amparore ha usato queste slide in due lezioni: mercoledì 21/10, dalle 9 alle 11, fino alla scansione (slide 9), e martedì 27/10, dalle 11 alle 13, con un ripasso veloce delle slide 3–9 e poi tutto il resto, dagli esempi con i cicli alle stringhe. La seconda parte l'ho ricontrollata sul video del 27/10: le slide sono le stesse del PDF. Usa i cicli della [04A](04A_iterazioni.html) e i puntatori della [02C](02C_referenziamento_scanf_puntatori.html); i codici dei caratteri si sono già visti nella [lezione 02 di Fondamenti](../FDA/02_testo_colori_suoni_binario.html).
>
> **Canali A e C.** Secondo l'elenco delle lezioni 2025/26 nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md), array e stringhe vengono dopo i cicli anche negli altri canali. Le slide 2026/27 dei canali A e C non le ho viste. L'esame è unico.
>
> **Un avviso sulle slide.** Nelle slide 24–25, sulla storia di Unicode, alcuni numeri vanno corretti: li sistemo nella sezione su Unicode. Non servono per l'esame.
>
> Tutti i programmi li ho compilati e provati con gcc 16.1, con `-Wall -Werror`.

## Da una variabile a tante (slide 2–3)

Per la media di cinque voti potresti dichiarare `voto1`, `voto2`, …, `voto5`. Con trenta studenti diventano trenta variabili, e nessun ciclo può scorrerle, perché hanno nomi diversi. Serve **un solo nome** per tutti i voti, con un numero che dice quale: `voti[0]`, `voti[1]`, … È un **array**.

> [!DEF] Array
> Una sequenza di valori dello stesso tipo, detti **elementi**, memorizzati in posizioni contigue della memoria. Ogni elemento si raggiunge con un **indice**. Il numero di elementi, la **lunghezza**, è fissato: gli indici validi vanno da 0 a lunghezza − 1.

**Come si legge.** Quattro cose: tutti gli elementi hanno lo stesso tipo; stanno attaccati in memoria, uno dopo l'altro; si chiamano per numero; il primo numero è 0, non 1. Per questo l'ultimo indice di un array di 5 elementi è 4.

Gli indici validi formano l'intervallo semiaperto della [04A](04A_iterazioni.html): `[0, lunghezza)`, con lo 0 dentro e la lunghezza fuori. È lo stesso intervallo del `for` che conta da 0 a `n` escluso, e non è un caso: il `for` è fatto per scorrere gli array.

Per lunghezze e indici il C ha un tipo apposta, **`size_t`**: un intero **senza segno** (quindi mai negativo), abbastanza grande per qualunque dimensione. È definito in `<stddef.h>`, e arriva anche con `<stdio.h>`. Il libro di Deitel consiglia di usarlo per ogni variabile che rappresenta una dimensione o un indice di array.

::: prova Un array ha lunghezza 8. Quali sono il primo e l'ultimo indice validi? Che cosa succede con l'indice 8?
Il primo è 0, l'ultimo 7. L'indice 8 è fuori dall'array: `[0, 8)` lascia fuori l'8.
:::

> [!RICORDA]
> - Array: valori dello stesso tipo, attaccati in memoria, raggiunti con un indice.
> - Indici validi: da 0 a lunghezza − 1, cioè `[0, lunghezza)`.
> - Indici e lunghezze: `size_t`.

## Dichiarare e usare un array (slide 4–6)

Si dichiara con il tipo degli elementi, il nome e la lunghezza tra quadre; si usa con il nome e l'indice tra quadre:

```c
// array statico di 4 interi nello stack
int numeri[4];
numeri[0] = 10; // primo elemento
numeri[1] = 20; // secondo elemento
printf("%d\n", numeri[0]); // stampa 10
```

`numeri[1] = 20` si comporta come l'assegnamento a una variabile: ogni elemento **è** una variabile `int`, con il suo indirizzo. Gli elementi 2 e 3 non sono stati assegnati, e il loro valore è indeterminato, come quello di una variabile locale senza inizializzazione.

In memoria gli elementi stanno in celle consecutive della stessa dimensione. Con `int` da 4 byte, se `numeri[0]` sta all'indirizzo `0x1000`, gli altri sono a `0x1004`, `0x1008`, `0x100C`:

```grafico
titolo: L'array int numeri[4] in memoria: quattro celle da 4 byte, una dopo l'altra. Sopra l'indice, dentro il valore, sotto l'indirizzo. Gli elementi 2 e 3 non sono stati assegnati e valgono «?».
x: 0 10
y: 0.8 4.4
assi: no
griglia: no
proporzioni: libere
testo: 1.75 3.9 | grigio | "numeri[0]"
testo: 3.95 3.9 | grigio | "numeri[1]"
testo: 6.15 3.9 | grigio | "numeri[2]"
testo: 8.35 3.9 | grigio | "numeri[3]"
poligono: 0.7 2.2 2.8 2.2 2.8 3.4 0.7 3.4 | blu
testo: 1.75 2.8 | blu | "10"
poligono: 2.9 2.2 5 2.2 5 3.4 2.9 3.4 | blu
testo: 3.95 2.8 | blu | "20"
poligono: 5.1 2.2 7.2 2.2 7.2 3.4 5.1 3.4 | grigio
testo: 6.15 2.8 | grigio | "?"
poligono: 7.3 2.2 9.4 2.2 9.4 3.4 7.3 3.4 | grigio
testo: 8.35 2.8 | grigio | "?"
testo: 1.75 1.7 | ambra | "0x1000"
testo: 3.95 1.7 | ambra | "0x1004"
testo: 6.15 1.7 | ambra | "0x1008"
testo: 8.35 1.7 | ambra | "0x100C"
testo: 5.05 1.05 | grigio | "+4 byte a ogni cella"
```

In matematica un array si scrive come un vettore, `numeri = (a₀, a₁, a₂, a₃)`. Attenzione: in matematica gli indici partono di solito da 1, in C **sempre** da 0.

### Dare i valori iniziali

Un array si può riempire già nella dichiarazione, con i valori tra graffe:

```c
int voti[5] = {18, 19, 24, 21, 30};
int voti[] = {18, 19, 24, 21, 30};   // uguale: la lunghezza la conta il compilatore
int voti[5] = {0};                   // tutti a zero
int voti[5];                         // valori indeterminati
```

La terza riga funziona per una regola generale: se i valori tra graffe sono **meno** della lunghezza, gli elementi rimasti valgono 0. Con `int v[5] = {18, 19};` l'ho provato: `v[2]`, `v[3]` e `v[4]` valgono 0.

::: prova Dopo `int w[6] = {1, 2, 3};`, quanto valgono `w[2]` e `w[3]`? Quanti elementi ha `w`?
`w[2]` vale 3, `w[3]` vale 0 (completato con zeri). Gli elementi sono 6.
:::

> [!RICORDA]
> - `tipo nome[lunghezza];` per dichiarare, `nome[indice]` per usare.
> - Celle consecutive: l'indirizzo cresce di `sizeof(tipo)` a ogni elemento.
> - Con meno valori iniziali della lunghezza, il resto è 0. Senza valori iniziali, è indeterminato.

## La scansione di un array (slide 7–10)

La lunghezza di un array statico si scrive di solito con una **costante**, definita in cima con `#define`:

```c
#define N 5
int voti[N] = {18, 24, 28, 30, 19};

for (size_t i = 0; i < N; i++) {
    printf("Voto %zu: %d\n", i, voti[i]);
}
```

`#define N 5` dice al compilatore di sostituire `N` con `5` dappertutto, prima di compilare. Se la lunghezza cambia, la cambi in un punto solo. La variabile `i` è un `size_t`, perché è un indice, e si stampa con **`%zu`**.

Il ciclo che passa per tutti gli indici validi si chiama **scansione** dell'array (*array traversal*, *linear scan*). Gli indici sono `[0, lunghezza)`, quindi la scansione ha sempre questa forma:

```c
for (size_t i = 0; i < length; i++) { /* usa v[i] */ }
```

### All'indietro

Scorrere al contrario è più delicato, perché `size_t` non va sotto zero. La forma che viene in mente non funziona:

```c
for (size_t i = N - 1; i >= 0; i--)   // SBAGLIATO: non finisce mai
```

Un `size_t` è **sempre** `>= 0`: quando `i` vale 0 e fa `i--`, non diventa −1 ma il numero più grande possibile, e il ciclo continua leggendo fuori dall'array. gcc con `-Wall -Werror` **lo compila**; solo con `-Wextra` lo ferma (`comparison of unsigned expression in '>= 0' is always true`). Le slide danno due forme corrette:

```c
for (size_t i = length; i > 0; i--) { /* usa v[i-1] */ }
```

```c
for (ptrdiff_t i = (ptrdiff_t)length - 1; i >= 0; i--) { /* usa v[i] */ }
```

Nella prima `i` va da `length` a 1, e si usa `v[i-1]`, che va da `v[length-1]` a `v[0]`. Nella seconda si usa **`ptrdiff_t`**, l'intero **con** segno per gli indici, che può scendere a −1 e far finire il ciclo; si stampa con `%td`.

L'esempio completo della slide 10, provato:

```c
#include <stdio.h>
#include <stddef.h>    // definisce size_t e ptrdiff_t

int main(void) {
    #define N 5
    int v[N] = {10, 20, 30, 40, 50};

    // Scansione in avanti: indici [0, N)
    printf("Scansione in avanti:\n");
    for (size_t i = 0; i < N; i++) {
        printf("v[%zu] = %d\n", i, v[i]);
    }

    // Scansione all'indietro: indici [N-1, 0]
    printf("\nScansione all'indietro:\n");
    for (ptrdiff_t i = N - 1; i >= 0; i--) {
        printf("v[%td] = %d\n", i, v[i]);
    }
}
```

Stampa `v[0] = 10` … `v[4] = 50`, poi `v[4] = 50` … `v[0] = 10`.

::: prova Con `#define N 4` e `int v[N] = {1, 2, 3, 4};`, che cosa stampa `for (size_t i = N; i > 0; i--) { printf("%d ", v[i-1]); }`?
`4 3 2 1`. `i` vale 4, 3, 2, 1, e si stampa l'elemento prima: `v[3]`, `v[2]`, `v[1]`, `v[0]`.
:::

> [!RICORDA]
> - Scansione in avanti: `for (size_t i = 0; i < n; i++)`.
> - All'indietro con `size_t`: `i` da `n` a 1 e `v[i-1]`. Mai `i >= 0` con un `size_t`.
> - `%zu` per `size_t`, `%td` per `ptrdiff_t`.

## Somma, conteggio e massimo (slide 8, 11, 12)

Quasi tutto quello che si fa con un array è una scansione con un accumulatore, come nella [04A](04A_iterazioni.html). Le slide ne mostrano tre.

### La media

```c
#define N 5
int voti[N] = {18, 19, 24, 21, 30};
int somma = 0;
for (size_t i = 0; i < N; i++) {
    somma += voti[i];
}
printf("Media: %f\n", somma / (float)N);
```

Stampa `Media: 22.400000`. Le slide scrivono la stessa cosa in notazione matematica: la media è la somma di tutti i `voti[i]`, per `i` da 0 a `N − 1`, divisa per `N`. Il simbolo della somma è la sigma maiuscola Σ, con sotto il primo indice e sopra l'ultimo:

$$\mathbb{E}[voti] = \frac{\sum_{i=0}^{N-1} voti[i]}{N}$$

$\mathbb{E}$ è il simbolo della media (il «valore atteso»). Con gli indici che partono da 1, come in matematica, la somma andrebbe da 1 a $N$: lo stesso conto, numerato in un altro modo.

### Contare

```c
#define N 8
double temperature[N] = {18.5, 21.1, 25.2, 28.2,
                         19.4, 22.0, 26.3, 21.8};
int conta = 0;
for (size_t i = 0; i < N; i++) {
    if (temperature[i] > 22.0) {
        conta++;
    }
}
printf("Giorni caldi: %d su %d\n", conta, N);
```

Stampa `Giorni caldi: 3 su 8`: 25.2, 28.2 e 26.3. Il 22.0 non conta, perché la condizione è `>` e non `>=`. Le slide lo scrivono come la cardinalità di un insieme, $C$ = le temperature maggiori di 22.0, e conta = $|C|$. Una differenza da tenere a mente: un insieme non ha doppioni, un array sì. Se due giorni avessero entrambi 25.2, l'insieme avrebbe un elemento solo, mentre il programma conta due giorni.

### Il massimo

```c
#define N 6
int numeri[N] = {3, 7, 2, 9, 5, 1};
int max = numeri[0];
for (size_t i = 1; i < N; i++) {
    if (numeri[i] > max) {
        max = numeri[i];
    }
}
printf("Massimo: %d\n", max);
```

Stampa `Massimo: 9`. Il candidato parte dal primo elemento, e il ciclo parte da `i = 1`, perché `numeri[0]` è già stato guardato. È lo schema del massimo di tre numeri della [03D](03D_decisioni.html), ripetuto per tutto l'array.

Le slide descrivono il ciclo con una frase che resta vera a ogni giro:

| Momento | Che cosa contiene `max` |
|---|---|
| inizio, `i = 1` | il massimo di `[0, 1)`, cioè di `numeri[0]` |
| all'inizio del giro `i` | il massimo di `[0, i)`, gli elementi già visti |
| fine, `i = N` | il massimo di `[0, N)`, tutto l'array |

Una frase così si chiama **invariante** del ciclo, e tornerà quando si parlerà di correttezza.

La slide chiede: **quale problema ha questo programma?** Funziona solo se l'array **non è vuoto**. Con lunghezza 0, `numeri[0]` non esiste, e la prima riga legge fuori dall'array. Il titolo della slide lo dice, «massimo in un array non vuoto»: è una **precondizione**, una cosa che deve essere vera prima di chiamare il codice.

```grafico
titolo: La scansione per il massimo su {3, 7, 2, 9, 5, 1}. In verde gli elementi che hanno aggiornato max: 3 all'inizio, poi 7, poi 9. Gli altri (grigi) non superano il massimo del momento.
x: 0 12.5
y: 0.6 3.8
assi: no
griglia: no
proporzioni: libere
poligono: 0.5 1.8 2.3 1.8 2.3 3 0.5 3 | verde
testo: 1.4 2.4 | verde | "3"
poligono: 2.5 1.8 4.3 1.8 4.3 3 2.5 3 | verde
testo: 3.4 2.4 | verde | "7"
poligono: 4.5 1.8 6.3 1.8 6.3 3 4.5 3 | grigio
testo: 5.4 2.4 | grigio | "2"
poligono: 6.5 1.8 8.3 1.8 8.3 3 6.5 3 | verde
testo: 7.4 2.4 | verde | "9"
poligono: 8.5 1.8 10.3 1.8 10.3 3 8.5 3 | grigio
testo: 9.4 2.4 | grigio | "5"
poligono: 10.5 1.8 12.3 1.8 12.3 3 10.5 3 | grigio
testo: 11.4 2.4 | grigio | "1"
testo: 1.4 1.2 | grigio | "max = 3"
testo: 3.4 1.2 | grigio | "7"
testo: 5.4 1.2 | grigio | "7"
testo: 7.4 1.2 | grigio | "9"
testo: 9.4 1.2 | grigio | "9"
testo: 11.4 1.2 | grigio | "9"
testo: 6.4 3.45 | grigio | "indice 0, 1, 2, 3, 4, 5"
```

::: prova Come cambi il programma del massimo per avere anche la **posizione** del massimo?
Aggiungi `size_t pos = 0;` prima del ciclo e, dentro l'`if`, `pos = i;` insieme a `max = numeri[i];`. Alla fine `pos` vale 3.
:::

> [!RICORDA]
> - Somma: accumulatore da 0. Conteggio: contatore e `if`. Massimo: candidato dal primo elemento, ciclo da 1.
> - Il massimo ha bisogno di un array non vuoto.
> - L'invariante dice che cosa resta vero a ogni giro.

## Array e puntatori (slide 13–14)

Nella [02C](02C_referenziamento_scanf_puntatori.html) un puntatore era l'indirizzo di una variabile. Un array è una fila di variabili, e il suo nome ha un legame stretto con gli indirizzi.

Con `int v[5] = {10, 20, 30, 40, 50};`:

```c
printf("%p\n", v);       // indirizzo del primo elemento
printf("%p\n", &v[0]);   // stesso indirizzo
printf("%d\n", v[2]);    // 30
printf("%d\n", *(v+2));  // 30 (equivalente)
scanf("%d", &v[2]);      // leggi da input e modifica v[2]
size_t array_sz = sizeof(v); // dimensione dell'intero array
```

Le prime due righe stampano lo stesso indirizzo. Il nome `v`, usato in un'espressione, **viene convertito** in un puntatore `int*` al primo elemento, cioè `&v[0]`.

Un array e un puntatore restano però oggetti diversi. `v` è un `int[5]`: `sizeof(v)` vale **20**, i cinque `int` da 4 byte, mentre un puntatore occupa 8 byte. Solo l'**espressione** `v`, quando serve, diventa un `int*`.

### L'aritmetica dei puntatori

In C l'indicizzazione è definita così:

```
v[i]   ≡   *(v + i)
```

`v + i` è il puntatore all'elemento di indice `i`, e la `*` ne prende il valore. Sommare `i` a un puntatore non aggiunge `i` byte, ma `i` **elementi**:

```
v + i   =   indirizzo di v[0] + i * sizeof(tipo dell'elemento)
```

Con gli `int` da 4 byte, `v + 1` è 4 byte dopo `v`. Da me `v` era `00000018D21FF980` e `v + 1` era `00000018D21FF984`: lo stesso indirizzo di `&v[1]`.

```grafico
titolo: v[i] è *(v + i). Il nome v diventa il puntatore al primo elemento; v + 2 avanza di due elementi, cioè di 8 byte; la * prende il valore che trova lì, 30.
x: 0 12
y: 0.2 4.6
assi: no
griglia: no
proporzioni: libere
poligono: 0.8 1.8 2.8 1.8 2.8 2.9 0.8 2.9 | blu
testo: 1.8 2.35 | blu | "10"
poligono: 3 1.8 5 1.8 5 2.9 3 2.9 | blu
testo: 4 2.35 | blu | "20"
poligono: 5.2 1.8 7.2 1.8 7.2 2.9 5.2 2.9 | verde
testo: 6.2 2.35 | verde | "30"
poligono: 7.4 1.8 9.4 1.8 9.4 2.9 7.4 2.9 | blu
testo: 8.4 2.35 | blu | "40"
poligono: 9.6 1.8 11.6 1.8 11.6 2.9 9.6 2.9 | blu
testo: 10.6 2.35 | blu | "50"
testo: 1.8 4.2 | ambra | "v"
freccia: 1.8 3.95 1.8 3.0 | ambra
testo: 4 4.2 | ambra | "v + 1"
freccia: 4 3.95 4 3.0 | ambra
testo: 6.2 4.2 | verde | "v + 2"
freccia: 6.2 3.95 6.2 3.0 | verde
testo: 1.8 1.3 | grigio | "v[0]"
testo: 4 1.3 | grigio | "v[1]"
testo: 6.2 1.3 | verde | "v[2]"
testo: 6.2 0.6 | verde | "*(v + 2) = v[2] = 30"
testo: 8.4 1.3 | grigio | "v[3]"
testo: 10.6 1.3 | grigio | "v[4]"
```

Negli appunti useremo quasi sempre `v[i]`. Sapere che è un'operazione sugli indirizzi serve a capire due cose: perché gli indici partono da 0 (`v[0]` è `*(v + 0)`, il primo elemento), e perché un indice sbagliato legge la memoria vicina invece di dare errore.

::: prova Con `int a[4] = {5, 6, 7, 8};` e `int *q = a;`, quanto valgono `*(q + 3)` e `q[1] + a[2]`?
`*(q + 3)` è `a[3]`, cioè 8. `q[1] + a[2]` è 6 + 7 = 13. Anche un puntatore si può usare con le quadre. L'ho provato.
:::

> [!RICORDA]
> - Nelle espressioni il nome dell'array diventa `&v[0]`.
> - `v[i]` è `*(v + i)`; `v + i` avanza di `i` elementi, non di `i` byte.
> - `sizeof(v)` dà la dimensione di tutto l'array: 20 byte per 5 `int`.

## Array di lunghezza variabile, i VLA (slide 15–16)

Un array statico ha la lunghezza scritta nel codice. Se il numero di persone lo decide l'utente, non va bene. Dal C99 esistono i **VLA** (*Variable Length Array*): array sullo stack, con la lunghezza decisa **mentre il programma gira**. Cambia solo la dichiarazione:

```c
size_t len;
scanf("%zu", &len);
int v[len];   // lunghezza len decisa a runtime
```

L'esempio delle slide legge le altezze di `n` persone e le stampa in tabella:

```c
#include <stdio.h>

int main(void) {
    size_t n;
    printf("Quante persone? ");
    scanf("%zu", &n);

    int altezze[n];  // dimensione VLA indicata dall'utente

    // Caricamento da input
    for (size_t i = 0; i < n; i++) {
        printf("Inserisci altezza persona %zu (in cm): ", i + 1);
        scanf("%d", &altezze[i]);
    }

    // Stampa tabella
    printf("\nTabella delle altezze:\n");
    for (size_t i = 0; i < n; i++) {
        printf("Persona %zu: %d cm\n", i + 1, altezze[i]);
    }
}
```

Con 3, 170, 182, 165 stampa `Persona 1: 170 cm` e così via. La stampa usa `i + 1` perché le persone si contano da 1, gli indici da 0.

Tre limiti dei VLA, che le slide non dicono:

- **non si inizializzano** con una lista: `int v[n] = {0};` dà `error: variable-sized object may not be initialized except with an empty initializer`. Si azzerano con un ciclo; con gcc 16 è ammesso solo `= {}`, una novità del C23;
- la lunghezza deve essere **almeno 1**: con 0 il comportamento non è definito. Conviene controllare `n` prima di dichiarare l'array;
- lo stack è piccolo (su Windows di solito 1 MB): un VLA di milioni di elementi non ci sta, e il programma termina con un errore.

::: prova Perché nel programma dei VLA la `scanf` delle altezze ha `&altezze[i]` con la `&`?
Perché `altezze[i]` è un `int`, e `scanf` vuole il suo indirizzo, come per una variabile qualunque. Si poteva scrivere anche `altezze + i`.
:::

> [!RICORDA]
> - VLA: `int v[n];` con `n` letto in input. Vive sullo stack.
> - Niente lista di valori iniziali; lunghezza almeno 1.

## Gli errori più comuni con gli array (slide 17–18)

Due errori tornano sempre: trattare un array come una variabile sola, e uscire dai suoi limiti. Per ognuno ho controllato che cosa fa gcc.

### Assegnare o confrontare un array intero

```c
int a[3] = {1, 2, 3};
int b[3];
b = a;    // ERRORE: non si può assegnare un intero array
```

gcc: `error: assignment to expression with array type`. Gli array non si comportano come le variabili scalari: non si assegnano, non si copiano e non si confrontano tutti insieme. Si copia **un elemento alla volta**:

```c
for (size_t i = 0; i < 3; i++)
    b[i] = a[i];
```

Anche `a == b` non confronta gli elementi: confronta gli **indirizzi** dei due array, che sono sempre diversi. gcc con `-Wall -Werror` lo ferma: `comparison between two arrays [-Werror=array-compare]`. Per sapere se due array sono uguali serve una scansione con una sentinella.

### Uscire dai limiti

```c
int v[5] = {10, 20, 30, 40, 50};
printf("%d\n", v[5]); // ERRORE: indice 5 fuori dall'intervallo [0, 5)
```

Il C **non controlla** gli indici. `v[5]` è `*(v + 5)`: il programma legge i 4 byte subito dopo l'array, qualunque cosa ci sia. È **comportamento indefinito**: il linguaggio non garantisce niente, e il programma può stampare un numero a caso, corrompere altre variabili o terminare.

Con `-Wall -Werror` questo programma **compila**. gcc se ne accorge solo con le ottimizzazioni, `-O2`: `array subscript 5 is above array bounds of 'int[5]'`. E se l'indice viene da una variabile, non se ne accorge mai. La difesa è scrivere i cicli in modo che l'indice resti sempre in `[0, lunghezza)`.

| Errore | Esempio | gcc con `-Wall -Werror` |
|---|---|---|
| assegnare un array | `b = a;` | `error: assignment to expression with array type` |
| confrontare due array | `a == b` | `error: comparison between two arrays` |
| indice fuori dai limiti | `v[5]` con 5 elementi | compila (con `-O2`: `array subscript 5 is above array bounds`) |
| scansione all'indietro con `size_t` | `i >= 0` | compila (con `-Wextra`: `always true`) |
| VLA con lista iniziale | `int v[n] = {0};` | `error: variable-sized object may not be initialized` |

::: prova In `int v[5];` scrivi un ciclo che mette in ogni elemento il doppio del suo indice. Che cosa contiene `v` alla fine?
`for (size_t i = 0; i < 5; i++) { v[i] = 2 * i; }`. Contiene 0, 2, 4, 6, 8. Con `i <= 5` l'ultimo giro scriverebbe in `v[5]`, fuori dall'array.
:::

> [!RICORDA]
> - Copia e confronto si fanno elemento per elemento.
> - Il C non controlla gli indici: un `<=` di troppo scrive fuori dall'array, e gcc non dice niente.

## Caratteri e codice ASCII (slide 19–21)

Il testo, in C, è fatto di **caratteri**: lettere, cifre, spazi, simboli. Il tipo per un carattere è **`char`**, un byte. Dentro quel byte c'è un **numero**: ogni carattere ha un codice, fissato da uno standard. Lo standard di base è l'**ASCII** (*American Standard Code for Information Interchange*, si legge «àski»), con 128 caratteri, i codici da 0 a 127.

Non serve impararlo a memoria. Bastano tre blocchi e quattro caratteri speciali:

```grafico
titolo: I tre blocchi dell'ASCII da ricordare. Le cifre sono consecutive da 48, le maiuscole da 65, le minuscole da 97: tra una maiuscola e la sua minuscola ci sono sempre 32 posti.
x: 0 12
y: 0.2 4.6
assi: no
griglia: no
proporzioni: libere
poligono: 0.4 3.2 3.6 3.2 3.6 4.2 0.4 4.2 | ambra
testo: 2 3.7 | ambra | "'0' … '9'"
testo: 2 2.8 | ambra | "48 … 57"
poligono: 4.4 3.2 7.6 3.2 7.6 4.2 4.4 4.2 | blu
testo: 6 3.7 | blu | "'A' … 'Z'"
testo: 6 2.8 | blu | "65 … 90"
poligono: 8.4 3.2 11.6 3.2 11.6 4.2 8.4 4.2 | verde
testo: 10 3.7 | verde | "'a' … 'z'"
testo: 10 2.8 | verde | "97 … 122"
freccia: 6.6 2.2 9.4 2.2 | grigio
testo: 8 1.75 | grigio | "+ 32"
testo: 2.5 1.2 | rosa | "'\0' = 0"
testo: 6 1.2 | grigio | "'\t' = 9"
testo: 9.5 1.2 | grigio | "'\n' = 10"
testo: 4 0.55 | grigio | "'\r' = 13"
testo: 8 0.55 | grigio | "' ' = 32"
```

Siccome un `char` è un numero, con i caratteri si fanno i conti. L'ho provato:

- `'7' - '0'` vale 7: è il modo per trasformare una cifra scritta in testo nel suo valore;
- `'a' - 32` è `'A'`, e `'C' + 1` è `'D'`;
- `printf("%d", 'A')` stampa 65, `printf("%c", 65)` stampa `A`: lo stesso numero, letto in due modi.

I caratteri da 0 a 31, e il 127, sono **caratteri di controllo**, che non si vedono. Quelli che userai sono quattro:

- `'\0'`, NUL, codice 0: il terminatore delle stringhe;
- `'\n'`, a capo (*line feed*), codice 10;
- `'\t'`, tabulazione, codice 9;
- `'\r'`, ritorno carrello, codice 13, che Windows mette prima di `'\n'` nei file di testo.

Un carattere si scrive tra **apici singoli**, `'A'`; una stringa tra **doppi apici**, `"A"`. Sono cose diverse: `'A'` è un numero, `"A"` è un array di due `char`, `'A'` e `'\0'`. Le stringhe scritte tra doppi apici nel codice si chiamano **letterali stringa**, e le usi da sempre in `printf`.

::: prova Come controlli con un `if` che il `char c` sia una lettera minuscola? E come la trasformi in maiuscola?
`if ('a' <= c && c <= 'z')`, poi `c = c - 32;`, oppure `c = c - 'a' + 'A';`, che non obbliga a ricordare il 32.
:::

> [!RICORDA]
> - Un `char` è un numero da un byte: il codice del carattere.
> - `'0'` = 48, `'A'` = 65, `'a'` = 97; maiuscola e minuscola distano 32.
> - `'A'` è un carattere, `"A"` è una stringa di due byte.

## Da ASCII a Unicode (slide 22–26)

128 caratteri bastano per l'inglese, non per il resto del mondo: mancano le lettere accentate, il greco, il cirillico, l'arabo, gli ideogrammi cinesi, giapponesi e coreani (CJK), e molti simboli come ∞. La storia raccontata nelle slide:

| Quando | Che cosa | Il problema |
|---|---|---|
| 1963 | **ASCII**, 7 bit, 128 caratteri | solo l'alfabeto latino senza accenti |
| anni '70–'80 | **codepage**: i 128 codici in più di un byte (da 128 a 255) cambiano significato a seconda di un'impostazione del sistema; la più usata in Europa e negli USA è la **ISO 8859-1**, o **Latin-1**, con le lettere accentate | un file si legge bene solo sapendo con quale codepage è stato scritto; di codepage ce ne sono più di 1400 |
| dal 1988 | **Unicode**: un numero unico per ogni carattere del mondo, il **code point**; i primi 256 sono ASCII più Latin-1 | 16 bit non bastano: solo gli ideogrammi CJK unificati sono quasi centomila |
| dal 1996 | **Unicode 2.0** e successivi: code point fino a 21 bit; la **definizione** dei caratteri si separa dalla loro **codifica** in byte | |

Le codifiche di Unicode sono di due famiglie:

- **a larghezza fissa**: ogni carattere occupa sempre lo stesso spazio, 16 o 32 bit. Semplice da gestire, ma un testo inglese occupa due o quattro volte tanto;
- **a lunghezza variabile**, come **UTF-8**: ogni carattere occupa da 1 a 4 byte. I caratteri ASCII restano di 1 byte, con lo stesso codice. È efficiente, ma un carattere non corrisponde più a un byte.

L'ultimo punto si vede con gcc. Il file sorgente è salvato in UTF-8, quindi `"è"` occupa 2 byte più il terminatore: `sizeof("è")` vale **3**, mentre `sizeof("e")` vale 2. L'ho provato.

> [!NOTA] Alcuni numeri delle slide 24–25
> - La proposta di Unicode è del 1988; la versione 1.0 è uscita nel 1991.
> - I code point possibili non sono 2 097 152 (tutti i numeri a 21 bit), ma 1 114 112: da `U+0000` a `U+10FFFF`. I 149 813 caratteri e i 161 alfabeti delle slide sono i numeri della versione 15.1, del 2023.
> - Le codifiche a 16 e 32 bit si chiamano **UCS-2** e **UTF-16** (16 bit; UTF-16 usa due unità da 16 bit per i caratteri oltre i primi 65 536) e **UTF-32** (32 bit), non «UCS-16» e «UCS-32».
> - UTF-8 arrivava a 6 byte nella prima versione; dal 2003 (RFC 3629) arriva a **4**.
>
> Nessuno di questi numeri serve per l'esame.

Il C ha tre modi di trattare il testo: un `char` per carattere (va bene per ASCII e Latin-1), i caratteri larghi `wchar_t`, e il multi-byte, sempre con `char` ma con più byte per carattere. **In Programmazione I si usa solo il primo**: un carattere, un `char`, un byte. Per questo negli esercizi il testo è senza lettere accentate.

::: prova Quanti byte occupa la stringa `"perché"` in un sorgente UTF-8, terminatore compreso?
8: `p`, `e`, `r`, `c`, `h` da un byte, `é` da due, più il `'\0'`. Con `sizeof` si controlla.
:::

> [!RICORDA]
> - ASCII: 128 caratteri, 7 bit. Unicode: un numero per ogni carattere del mondo.
> - UTF-8: da 1 a 4 byte per carattere, ASCII invariato.
> - In Programmazione I: un carattere = un `char` = un byte.

## Stringhe e terminatore (slide 27)

Una stringa è un array di `char`. Ma rispetto agli altri array ha una cosa in più: per convenzione finisce **sempre** con il carattere `'\0'`, il **terminatore** (NUL, codice 0). È un valore sentinella, come l'altezza negativa della [04A](04A_iterazioni.html): dice «il testo finisce qui».

La parola `"ciao"` è un array di **5** `char`:

```grafico
titolo: La stringa "ciao" in memoria: quattro caratteri e il terminatore '\0'. Sotto, il codice ASCII di ogni carattere. La lunghezza del testo è 4, lo spazio occupato è 5 byte.
x: 0 11
y: 0.6 4
assi: no
griglia: no
proporzioni: libere
testo: 1.5 3.6 | grigio | "0"
testo: 3.5 3.6 | grigio | "1"
testo: 5.5 3.6 | grigio | "2"
testo: 7.5 3.6 | grigio | "3"
testo: 9.5 3.6 | grigio | "4"
poligono: 0.6 2.1 2.4 2.1 2.4 3.2 0.6 3.2 | blu
testo: 1.5 2.65 | blu | "'c'"
poligono: 2.6 2.1 4.4 2.1 4.4 3.2 2.6 3.2 | blu
testo: 3.5 2.65 | blu | "'i'"
poligono: 4.6 2.1 6.4 2.1 6.4 3.2 4.6 3.2 | blu
testo: 5.5 2.65 | blu | "'a'"
poligono: 6.6 2.1 8.4 2.1 8.4 3.2 6.6 3.2 | blu
testo: 7.5 2.65 | blu | "'o'"
poligono: 8.6 2.1 10.4 2.1 10.4 3.2 8.6 3.2 | rosa
testo: 9.5 2.65 | rosa | "'\0'"
testo: 1.5 1.6 | grigio | "99"
testo: 3.5 1.6 | grigio | "105"
testo: 5.5 1.6 | grigio | "97"
testo: 7.5 1.6 | grigio | "111"
testo: 9.5 1.6 | rosa | "0"
testo: 5.5 0.9 | grigio | "indici sopra, codici ASCII sotto"
```

Tre modi di crearla:

```c
char txt[] = { 'c', 'i', 'a', 'o', '\0' };  // carattere per carattere
char txt[] = "ciao";                        // il compilatore aggiunge il '\0'
const char* txt = "ciao";                   // un puntatore a un letterale
```

Le prime due creano un array di 5 `char` **modificabile**: `sizeof(txt)` vale 5, e i codici sono 99, 105, 97, 111, 0. L'ho provato. La terza non crea un array: `txt` è un puntatore a un letterale stringa, che sta in una zona di memoria in sola lettura.

C'è un caso che il compilatore accetta e che è quasi sempre un errore:

```c
char nome[4] = "Anna";   // compila: ma il '\0' non ci sta
```

L'array ha 4 posti, e `"Anna"` ne vuole 5. In C questa riga è permessa: il compilatore mette le quattro lettere e **lascia fuori il terminatore**, senza avvisi. Il risultato non è una stringa. Se non devi contare a mano, lascia le quadre vuote: `char nome[] = "Anna";` riserva sempre il posto giusto.

> [!NOTA] Il manuale di printf
> Il 27/10, parlando del terminatore, Amparore ha aperto nel terminale il manuale di `printf` con `man 3 printf`. Il 3 è la sezione del manuale dedicata alle funzioni della libreria del C; dentro si scorre con le frecce e si esce con `q`. Il comando c'è su Linux, quindi al laboratorio Turing, e su macOS; su Windows con MinGW no, ma le stesse pagine si trovano sul web cercando «man 3 printf».

::: prova Quanto vale `sizeof` di `char s[] = "pane";`? E dopo `s[0] = 'c';`, che cosa stampa `printf("%s", s)`?
5, quattro lettere e il terminatore. Stampa `cane`: l'array è modificabile.
:::

> [!RICORDA]
> - Stringa = array di `char` che finisce con `'\0'`.
> - `"ciao"` occupa 5 byte: la lunghezza del testo più uno.
> - `char nome[] = "...";` riserva lo spazio giusto; una lunghezza scritta a mano può lasciare fuori il `'\0'`.

## Scorrere una stringa (slide 28–29)

La lunghezza di una stringa non serve saperla: basta scorrere fino al terminatore. Ci sono due modi.

**Con un indice**, come un array, ma con la condizione «finché non sei sul terminatore»:

```c
char parola[] = "ciao";

for (size_t i = 0; parola[i] != '\0'; i++) {
    printf("%c\n", parola[i]);
}
```

**Con un puntatore**, che parte dal primo carattere e avanza di uno a ogni giro:

```c
char parola[] = "ciao";
char* p = parola; // parola diventa &parola[0]

while (*p != '\0') {
    printf("%c\n", *p);
    p++;   // passa al carattere successivo
}
```

Tutti e due stampano `c`, `i`, `a`, `o`, uno per riga. Nel secondo `p` è un `char*`: `p++` lo sposta di un `char`, cioè di un byte, e `*p` è il carattere su cui si trova. Quando `*p` è `'\0'` il ciclo finisce.

```grafico
titolo: La scansione con il puntatore. p parte da parola[0] e a ogni giro p++ lo sposta di una cella. Il ciclo si ferma quando *p è il terminatore: a quel punto p ha fatto 4 passi, la lunghezza del testo.
x: 0 11
y: 0.6 4.4
assi: no
griglia: no
proporzioni: libere
poligono: 0.6 1.4 2.4 1.4 2.4 2.5 0.6 2.5 | blu
testo: 1.5 1.95 | blu | "'c'"
poligono: 2.6 1.4 4.4 1.4 4.4 2.5 2.6 2.5 | blu
testo: 3.5 1.95 | blu | "'i'"
poligono: 4.6 1.4 6.4 1.4 6.4 2.5 4.6 2.5 | blu
testo: 5.5 1.95 | blu | "'a'"
poligono: 6.6 1.4 8.4 1.4 8.4 2.5 6.6 2.5 | blu
testo: 7.5 1.95 | blu | "'o'"
poligono: 8.6 1.4 10.4 1.4 10.4 2.5 8.6 2.5 | rosa
testo: 9.5 1.95 | rosa | "'\0'"
testo: 1.5 4 | ambra | "p"
freccia: 1.5 3.7 1.5 2.6 | ambra
freccia: 2.1 3.3 2.9 3.3 | grigio
freccia: 4.1 3.3 4.9 3.3 | grigio
freccia: 6.1 3.3 6.9 3.3 | grigio
freccia: 8.1 3.3 8.9 3.3 | grigio
testo: 2.5 3.75 | grigio | "p++"
testo: 4.5 3.75 | grigio | "p++"
testo: 6.5 3.75 | grigio | "p++"
testo: 8.5 3.75 | grigio | "p++"
testo: 9.5 4 | rosa | "stop"
freccia: 9.5 3.7 9.5 2.6 | rosa
testo: 5.5 0.95 | grigio | "while (*p != '\0')"
```

Contando i giri si ottiene la **lunghezza** del testo: la funzione `strlen`, che vedrai più avanti, fa esattamente questo.

::: prova Scrivi un ciclo che conta le lettere `'a'` in `char s[] = "banana";`.
`int conta = 0; for (size_t i = 0; s[i] != '\0'; i++) { if (s[i] == 'a') { conta++; } }`. Alla fine `conta` vale 3.
:::

> [!RICORDA]
> - Con l'indice: `for (size_t i = 0; s[i] != '\0'; i++)`.
> - Con il puntatore: `while (*p != '\0') { …; p++; }`.
> - I giri fino al terminatore sono la lunghezza del testo.

## Leggere stringhe dall'input (slide 30–32)

Una stringa si legge con `scanf`, come un numero, ma con due specifiche diverse: una per una parola sola, una per una riga intera.

### Una parola: %s

```c
#include <stdio.h>

int main(void) {
    char nome[20];   // spazio per massimo 19 caratteri + '\0'
    printf("Inserisci il tuo nome: ");
    scanf("%19s", nome);  // legge una parola (senza spazi)
    printf("Ciao, %s!\n", nome);
}
```

Tre cose da notare:

- **niente `&`** davanti a `nome`: è un array, e come argomento diventa già il puntatore `&nome[0]`;
- **`%s` legge una parola**: si ferma al primo spazio, tab o a capo. Con `Mario Rossi` stampa `Ciao, Mario!`, e `Rossi` resta nell'input;
- **il 19** dice a `scanf` di leggere al massimo 19 caratteri, per lasciare posto al `'\0'` nei 20 dell'array. `scanf` non sa quanto è grande l'array: senza limite, una parola lunga scriverebbe oltre la fine (*buffer overflow*).

### Una frase: la maschera di scansione

Per leggere anche gli spazi si usa una **maschera di scansione**:

```c
char frase[50];
printf("Inserisci una frase: ");
scanf(" %49[^\n]", frase);
printf("Hai scritto: %s\n", frase);
```

| Parte | Significato |
|---|---|
| `" "` (lo spazio prima del `%`) | salta spazi e a capo all'inizio, compreso l'a capo rimasto da una `scanf` precedente |
| `%` | inizio della specifica |
| `49` | al massimo 49 caratteri: lascia posto al `'\0'` |
| `[^\n]` | legge tutti i caratteri **tranne** l'a capo, cioè fino alla fine della riga |

Con `   Mario Rossi va al mare` (spazi all'inizio compresi) stampa `Hai scritto: Mario Rossi va al mare`. Se la riga è più lunga di 49 caratteri, il resto rimane nell'input per la prossima lettura. Per input più complessi esiste `fgets()`, che nel corso non si usa.

::: prova Che cosa contiene `nome` dopo `scanf("%19s", nome);` se l'utente scrive `   Luca  Bianchi`?
`Luca`. `%s` salta gli spazi iniziali e si ferma allo spazio dopo `Luca`.
:::

> [!RICORDA]
> - `scanf("%19s", nome)`: una parola, senza `&`, con il limite di lunghezza − 1.
> - `scanf(" %49[^\n]", frase)`: tutta la riga, spazi compresi.

## Gli errori più comuni con le stringhe (slide 33–35)

Gli errori sulle stringhe hanno quasi sempre la stessa causa: il programma scrive o legge dove non dovrebbe, e il compilatore spesso non se ne accorge.

### Il terminatore dimenticato

```c
char nome[4] = {'A', 'n', 'n', 'a'};   // ERRORE: manca '\0'
printf("%s\n", nome);  // comportamento indefinito
```

Compila senza avvisi. `printf` con `%s` scrive caratteri finché non trova uno 0: qui non c'è, quindi continua nella memoria dopo l'array, e stampa quello che trova. Tutte le funzioni sulle stringhe (`printf`, `scanf`, `strlen`) assumono che il terminatore ci sia. Si corregge con `char nome[5] = {'A', 'n', 'n', 'a', '\0'};` o, meglio, con `char nome[] = "Anna";`.

### Modificare un letterale

```c
char* s = "ciao";
s[0] = 'm';    // ERRORE: comportamento indefinito
```

Compila, ma `s` punta a un letterale, che sta in memoria in sola lettura: sui sistemi di oggi il programma si blocca quando prova a scrivere. Con un array invece si ottiene una copia modificabile:

```c
char s[] = "ciao";
s[0] = 'm';         // ok: "miao"
```

Scrivendo `const char* s = "ciao";`, come nella slide 27, l'errore lo trova gcc: `error: assignment of read-only location '*s'`. L'ho provato. Per un puntatore a un letterale, `const` va messo sempre.

### La & con %s

```c
char parola[20];
scanf("%s", &parola);   // ERRORE: & non necessario
```

`parola` diventa già un `char*`. `&parola` invece è l'indirizzo di tutto l'array, di tipo `char (*)[20]`, «puntatore a un array di 20 `char`». Il valore è lo stesso indirizzo, ma il tipo è sbagliato, e con `-Wall -Werror` non compila: `format '%s' expects argument of type 'char *', but argument 2 has type 'char (*)[20]'`. La forma giusta è `scanf("%19s", parola);`, con il limite.

| Errore | gcc con `-Wall -Werror` | Che cosa succede |
|---|---|---|
| `char nome[4] = {'A','n','n','a'};` e poi `%s` | compila | stampa oltre la fine dell'array |
| `char nome[4] = "Anna";` | compila | il `'\0'` non c'è |
| `char* s = "ciao"; s[0] = 'm';` | compila | il programma si blocca |
| lo stesso con `const char*` | `error: assignment of read-only location` | non compila |
| `scanf("%s", &parola)` | `error: format '%s' expects argument of type 'char *'` | non compila |
| `scanf("%s", parola)` senza limite | compila | una parola lunga scrive fuori dall'array |

::: prova Quale di queste righe crea una stringa che puoi modificare? (a) `char* a = "ok";` (b) `char b[] = "ok";` (c) `const char* c = "ok";`
Solo (b): è un array con la sua copia del testo. (a) e (c) puntano a un letterale in sola lettura; con (c) gcc ti ferma se provi a scriverci.
:::

> [!RICORDA]
> - Senza `'\0'` non è una stringa, e `%s` legge oltre la fine.
> - I letterali non si modificano: per un puntatore usa `const char*`, per un testo da cambiare un array.
> - `scanf` con `%s`: niente `&`, sempre il limite.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `int v[5];` | «array di 5 int» | dichiara un array di lunghezza 5 | `int voti[5] = {0};` |
| `v[i]` | «v di i» | l'elemento di indice `i`, uguale a `*(v + i)` | `v[0]` è il primo |
| `{…}` | lista di inizializzazione | i valori iniziali; quelli mancanti valgono 0 | `{18, 19, 24}` |
| `#define N 5` | «definisci N come 5» | costante sostituita prima di compilare | `int v[N];` |
| `size_t` | «size t» | intero senza segno per indici e lunghezze | `for (size_t i = 0; …)` |
| `ptrdiff_t` | «pointer diff t» | intero con segno per indici che scendono sotto 0 | scansione all'indietro |
| `%zu`, `%td` | specifiche di `printf` | stampano `size_t` e `ptrdiff_t` | `printf("%zu", i);` |
| `'a'` | carattere | un `char`, cioè il suo codice ASCII | `'a'` vale 97 |
| `"ciao"` | stringa | array di `char` con `'\0'` in fondo | 5 byte |
| `'\0'` | NUL, terminatore | il carattere di codice 0 che chiude le stringhe | `s[i] != '\0'` |
| `%s`, `%19s` | specifica per le stringhe | stampa o legge una parola | `scanf("%19s", nome);` |
| `%49[^\n]` | maschera di scansione | legge fino all'a capo, al massimo 49 caratteri | `scanf(" %49[^\n]", f);` |

## Verso l'esame

Gli array sono in quasi tutti gli esercizi d'esame di Programmazione I. Le cose da avere in mano:

1. **all'esame un array si passa come coppia (lunghezza, array)**, per esempio `(size_t aLen, int a[])`: la lunghezza viaggia sempre insieme all'array, e la scansione è `for (size_t i = 0; i < aLen; i++)`;
2. **l'array vuoto è un caso da provare sempre**: con lunghezza 0 il ciclo non gira, e il risultato deve avere comunque senso. Il massimo di un array vuoto non esiste: leggi bene la consegna;
3. **niente `break`**: per cercare un elemento, la sentinella va nella condizione (`i < aLen && !trovato`), come nella [04A](04A_iterazioni.html);
4. **controlla ogni indice**: `<` e non `<=`, `v[i-1]` solo se `i > 0`;
5. **le stringhe finiscono con `'\0'`**: negli esercizi sulle stringhe la scansione si ferma al terminatore, e una stringa modificata va richiusa con `'\0'`.

Negli esercizi sullo **stato della memoria** un array locale occupa tante caselle consecutive sullo stack, una per elemento, e gli elementi non inizializzati valgono «?». Nell'esercizio B4 della [raccolta](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md) la trappola è proprio questa: alcune celle non vengono mai scritte, e il loro valore resta indeterminato.

> [!METODO] Scrivere un ciclo su un array senza sbagliare gli indici
> 1. Scrivi l'intervallo degli indici che ti servono: tutto l'array è `[0, n)`, dal secondo elemento è `[1, n)`.
> 2. Traduci l'intervallo nel `for`: `[a, b)` diventa `for (size_t i = a; i < b; i++)`.
> 3. Se dentro usi `v[i+1]` o `v[i-1]`, controlla che resti nell'intervallo anche al primo e all'ultimo giro.
> 4. Prova a mano con `n = 0`, `n = 1` e `n = 2`.

## Quiz

```quiz
D: In `int v[8];`, qual è l'ultimo indice valido?
+ 7
- 8
- 9
- 0
- dipende dal compilatore
= Gli indici sono `[0, 8)`: da 0 a 7. La risposta più insidiosa è 8, la lunghezza: `v[8]` è il primo indice fuori dall'array, e il C non lo segnala.

D: Che cosa stampa `int w[6] = {1, 2, 3}; printf("%d %d", w[2], w[3]);`?
+ `3 0`
- `3 ?` (un valore a caso)
- `2 3`
- non compila
- `3 3`
= Con meno valori della lunghezza, gli elementi rimasti valgono 0. La risposta più insidiosa è il valore a caso: vale per `int w[6];` senza lista, non quando la lista c'è.

D: Quanto vale `sizeof(s)` con `char s[] = "pane";`?
N: 5
= Quattro lettere più il terminatore `'\0'`, che il compilatore aggiunge da solo.

D: Che cosa fa `for (size_t i = N - 1; i >= 0; i--) { printf("%d ", v[i]); }`?
+ Non finisce: un `size_t` è sempre `>= 0`, e dopo 0 diventa enorme
- Stampa l'array al contrario
- Non compila con `-Wall -Werror`
- Stampa l'array al contrario e poi `v[-1]`
- Non stampa niente
= `size_t` è senza segno: `0 - 1` non dà −1 ma il numero più grande possibile, e il ciclo legge fuori dall'array. La risposta più insidiosa è «non compila»: con `-Wall` compila, l'avviso arriva solo con `-Wextra`.

D: Con `int a[3] = {1, 2, 3}, b[3];`, quale riga copia `a` in `b`?
+ `for (size_t i = 0; i < 3; i++) { b[i] = a[i]; }`
- `b = a;`
- `b[3] = a[3];`
- `*b = *a;`
- `b[] = a[];`
= Gli array si copiano un elemento alla volta. La risposta più insidiosa è `b = a;`, che non compila (`assignment to expression with array type`). `b[3] = a[3]` scrive e legge fuori dai due array; `*b = *a` copia solo il primo elemento.

D: Con `int v[5] = {10, 20, 30, 40, 50};`, quanto vale `*(v + 3)`?
N: 40
= `*(v + 3)` è `v[3]`: il quarto elemento, perché si conta da 0. `v + 3` avanza di 3 elementi, cioè di 12 byte.

D: Quale riga legge un nome di al massimo 29 caratteri in `char nome[30];`?
+ `scanf("%29s", nome);`
- `scanf("%30s", nome);`
- `scanf("%29s", &nome);`
- `scanf("%s", nome[30]);`
- `scanf("%c", nome);`
= Il limite è la lunghezza meno uno, per il `'\0'`, e niente `&`. La risposta più insidiosa è `%30s`: 30 caratteri più il terminatore fanno 31 byte, uno oltre l'array. Con `&nome` gcc dà errore di formato.

D: Che cosa stampa `printf("%c%c", 'b' - 1, '0' + 7);`?
+ `a7`
- `a0`
- `977`
- `b7`
- `a55`
= `'b' - 1` è il codice di `'a'`; `'0' + 7` è il codice 55, cioè il carattere `'7'`. Con `%c` si stampano i caratteri, non i numeri: la risposta più insidiosa è `a55`, che sarebbe con `%d` per il secondo.

D: Quale di queste dichiarazioni crea una stringa **non** terminata?
+ `char n[4] = "Anna";`
- `char n[] = "Anna";`
- `char n[5] = "Anna";`
- `char n[5] = {'A', 'n', 'n', 'a', '\0'};`
- `char n[10] = "Anna";`
= `"Anna"` vuole 5 byte; con 4 il C lascia fuori il `'\0'` senza avvisi. La risposta più insidiosa è l'ultima: 10 posti sono troppi, ma gli avanzati valgono 0, quindi la stringa è terminata.
```

## Esercizi

::: esercizio base Riscaldamento: che cosa stampa?
`int v[5] = {3, 1, 4, 1, 5}; int s = 0; for (size_t i = 0; i < 5; i += 2) { s += v[i]; } printf("%d", s);`
::: soluzione
Il ciclo guarda gli indici 0, 2, 4: 3 + 4 + 5 = 12. Stampa `12`.
:::

::: esercizio base Riscaldamento: trova l'errore
Ogni riga ha un errore. (a) `int v[3] = {1, 2, 3}; printf("%d", v[3]);` (b) `char s[10]; scanf("%s", &s);` (c) `int a[4], b[4]; if (a == b) { … }` (d) `size_t n = 0; int v[n];`
::: soluzione
(a) L'indice 3 è fuori da `[0, 3)`: compila, ma legge memoria non dell'array. (b) La `&` non serve, e manca il limite: `scanf("%9s", s);`. Con `&s` gcc non compila. (c) `a == b` confronta gli indirizzi, non gli elementi; con `-Wall -Werror` non compila (`comparison between two arrays`). (d) Un VLA deve avere lunghezza almeno 1.
:::

::: esercizio base Riscaldamento: la lunghezza a mano
Scrivi un programma che legge una parola (al massimo 49 caratteri) e ne stampa la lunghezza senza usare `strlen`.
::: soluzione
```c
#include <stdio.h>
#include <stddef.h>

int main(void) {
    char parola[50];
    if (scanf("%49s", parola) == 1) {
        size_t len = 0;
        while (parola[len] != '\0') {
            len++;
        }
        printf("%zu\n", len);
    }
    return 0;
}
```
Provato: `ciao` dà 4, `x` dà 1, `precipitevolissimevolmente` dà 26. Alla fine del ciclo `len` è l'indice del terminatore, che è proprio il numero di caratteri prima.
:::

::: esercizio medio Contare le vocali
Scrivi un programma che legge una frase (anche con spazi, al massimo 99 caratteri) e stampa quante vocali contiene, maiuscole o minuscole.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    char frase[100];
    int vocali = 0;
    if (scanf(" %99[^\n]", frase) == 1) {
        for (size_t i = 0; frase[i] != '\0'; i++) {
            char c = frase[i];
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
                c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
                vocali++;
            }
        }
    }
    printf("%d\n", vocali);
    return 0;
}
```
Provato: `Ciao a tutti` dà 6, `xyz` dà 0, `AEIOU aeiou` dà 10, una riga vuota dà 0 (la `scanf` non legge niente e restituisce un valore diverso da 1).
:::

::: esercizio medio Invertire un array
Scrivi un programma che inverte sul posto l'array `int v[N] = {1, 2, 3, 4, 5, 6};`, cioè senza un secondo array, e lo stampa.
::: soluzione
```c
#include <stdio.h>
#include <stddef.h>

#define N 6

int main(void) {
    int v[N] = {1, 2, 3, 4, 5, 6};
    for (size_t i = 0; i < N / 2; i++) {
        int temp = v[i];            // scambio di v[i] e v[N - 1 - i]
        v[i] = v[N - 1 - i];
        v[N - 1 - i] = temp;
    }
    for (size_t i = 0; i < N; i++) {
        printf("%d ", v[i]);
    }
    printf("\n");
    return 0;
}
```
Stampa `6 5 4 3 2 1`. Si scambiano il primo con l'ultimo, il secondo con il penultimo, e così via, con lo scambio della [03A](03A_scambio_variabili.html). Il ciclo va solo fino a metà: se arrivasse in fondo, ogni coppia verrebbe scambiata due volte e l'array tornerebbe com'era. Con `N = 5` l'elemento centrale resta al suo posto, e stampa `5 4 3 2 1`: provato anche questo.
:::

::: esercizio esame Tutti pari?
Scrivi un programma che legge `n`, poi `n` interi in un VLA, e stampa `Tutti pari` se lo sono tutti, altrimenti la posizione e il valore del **primo** dispari. Niente `break`. Se `n` non è valido o è 0, stampa `Input non valido`.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>
#include <stddef.h>

int main(void) {
    size_t n;
    if (scanf("%zu", &n) != 1 || n == 0) {
        printf("Input non valido\n");
    }
    else {
        int v[n];
        for (size_t i = 0; i < n; i++) {
            scanf("%d", &v[i]);
        }
        bool tuttiPari = true;          // "per ogni": parte da true
        size_t i = 0;
        while (i < n && tuttiPari) {
            if (v[i] % 2 != 0) {
                tuttiPari = false;      // controesempio trovato in posizione i
            }
            else {
                i++;
            }
        }
        if (tuttiPari) {
            printf("Tutti pari\n");
        }
        else {
            printf("Il primo dispari e' v[%zu] = %d\n", i, v[i]);
        }
    }
    return 0;
}
```
Provato: `4 2 8 6 0` dà `Tutti pari`; `5 2 4 7 6 9` dà `v[2] = 7`; `1 -3` dà `v[0] = -3` (con i negativi `% 2` vale −1, che è comunque diverso da 0); `0` e `x` danno `Input non valido`. Il controllo `n == 0` viene prima della dichiarazione del VLA. Quando trova il dispari, il ciclo **non** incrementa `i`: così dopo il ciclo `i` è proprio la posizione del controesempio.
:::

::: esercizio difficile Il cifrario di Cesare
Scrivi un programma che legge una riga e sposta ogni lettera minuscola di 3 posti nell'alfabeto, ricominciando da capo dopo la `z` (`x` → `a`, `y` → `b`, `z` → `c`). Gli altri caratteri restano uguali.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    char s[100];
    if (scanf(" %99[^\n]", s) == 1) {
        for (size_t i = 0; s[i] != '\0'; i++) {
            if ('a' <= s[i] && s[i] <= 'z') {
                s[i] = (char)('a' + (s[i] - 'a' + 3) % 26);
            }
        }
        printf("%s\n", s);
    }
    return 0;
}
```
Provato: `ciao zaino` diventa `fldr cdlqr`, `xyz ABC` diventa `abc ABC`. Il trucco è passare dalla lettera alla sua posizione nell'alfabeto (`s[i] - 'a'`, da 0 a 25) e sommare 3. Il resto della divisione per 26 fa ricominciare da capo, e `'a' + …` torna alla lettera.
:::

## Domande di ripasso

::: domanda Che cos'è un array?
Una sequenza di valori dello stesso tipo, memorizzati in celle consecutive e raggiunti con un indice da 0 a lunghezza − 1.
:::

::: domanda Perché per gli indici si usa `size_t`, e quando invece serve `ptrdiff_t`?
`size_t` è l'intero senza segno pensato per dimensioni e indici. `ptrdiff_t` ha il segno, e serve quando l'indice deve scendere sotto 0, come nella scansione all'indietro con `i >= 0`.
:::

::: domanda Che legame c'è tra `v[i]` e i puntatori?
`v[i]` è per definizione `*(v + i)`: il nome dell'array diventa il puntatore al primo elemento, e `v + i` avanza di `i` elementi.
:::

::: domanda Che cosa succede se si legge `v[n]` in un array di lunghezza `n`?
Comportamento indefinito: il C non controlla gli indici, e si legge la memoria subito dopo l'array.
:::

::: domanda Che cosa distingue una stringa da un array di `char` qualunque?
Il terminatore `'\0'` in fondo, che segnala dove finisce il testo.
:::

::: domanda Quanti byte occupa `"ciao"`?
5: quattro caratteri più il terminatore.
:::

::: domanda Perché in `scanf("%19s", nome)` non c'è la `&`?
Perché `nome` è un array, e come argomento diventa già il puntatore al primo elemento.
:::

::: domanda Come si legge una riga intera con gli spazi?
Con la maschera di scansione: `scanf(" %49[^\n]", frase);`.
:::

## Glossario

```glossario
Array | Sequenza di valori dello stesso tipo, in celle consecutive, raggiunti con un indice.
Elemento | Uno dei valori di un array.
Indice | Il numero di un elemento, da 0 a lunghezza − 1.
Lunghezza | Il numero di elementi di un array.
size_t | Intero senza segno per lunghezze e indici; si stampa con %zu.
ptrdiff_t | Intero con segno per indici che possono scendere sotto 0; si stampa con %td.
Scansione | Il ciclo che passa per tutti gli indici validi di un array.
Invariante | Una frase che resta vera a ogni giro di un ciclo.
Precondizione | Una condizione che deve valere prima di eseguire il codice, come «l'array non è vuoto».
VLA | Array sullo stack con la lunghezza decisa mentre il programma gira.
Comportamento indefinito | Situazione in cui il linguaggio non garantisce niente, come un indice fuori dai limiti.
char | Il tipo di un carattere: un byte che contiene il suo codice.
ASCII | Il codice standard di 128 caratteri, da 0 a 127.
Unicode | Lo standard che dà un numero a ogni carattere del mondo.
UTF-8 | Codifica di Unicode da 1 a 4 byte per carattere, compatibile con ASCII.
Stringa | Array di char che finisce con il terminatore '\0'.
Terminatore | Il carattere '\0', di codice 0, che chiude una stringa.
Letterale stringa | Una stringa scritta tra doppi apici nel codice; non si può modificare.
Maschera di scansione | Specifica di scanf come %49[^\n], che dice quali caratteri leggere.
Buffer overflow | Scrittura oltre la fine di un array, per esempio con %s senza limite.
```

## Checklist

```checklist
- So dichiarare, inizializzare e usare un array, anche con una lista più corta della lunghezza.
- So che gli indici validi sono [0, n) e scrivere la scansione con size_t e %zu.
- So scorrere un array all'indietro senza il ciclo infinito di size_t.
- So scrivere somma, media, conteggio e massimo, e so perché il massimo vuole un array non vuoto.
- So che v[i] è *(v + i) e che sizeof dell'array è diverso da sizeof di un puntatore.
- So dichiarare un VLA e conoscerne i limiti.
- So che gli array non si assegnano e non si confrontano con = e ==.
- So che il C non controlla gli indici e che gcc spesso non avvisa.
- So usare i codici ASCII per fare conti con i caratteri.
- So che una stringa finisce con '\0' e quanti byte occupa.
- So scorrere una stringa con un indice e con un puntatore.
- So leggere una parola con %19s e una riga con la maschera di scansione.
- So riconoscere il terminatore dimenticato, il letterale modificato e la & di troppo.
```

## Fonti

- Slide «Array e stringhe. Rappresentazione dei dati sequenziali, array statici, VLA e stringhe» (05A_array_stringhe), Programmazione I – Teoria, canale B, A.A. 2026/27, E. G. Amparore: array e `size_t` (slide 2–3), array statici e memoria (4–6), esempi e scansione (7–12), array e puntatori (13–14), VLA (15–16), errori comuni (17–18), caratteri e ASCII (19–21), da ASCII a Unicode (22–26), terminatore (27), scansione delle stringhe (28–29), lettura con `scanf` (30–32), errori sulle stringhe (33–35).
- P. Deitel, H. Deitel, *C How to Program*, citato nella slide 3 per l'uso di `size_t` (p. 247).
- The Unicode Consortium, *The Unicode Standard*, versione 15.1 (2023), per i numeri di caratteri e alfabeti; F. Yergeau, RFC 3629, «UTF-8, a transformation format of ISO 10646» (2003), per la lunghezza massima di 4 byte.
- Esercizio B4 e regole d'esame dalla [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md) e dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Tutti i programmi delle slide e delle soluzioni li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror` (alcuni anche con `-O2` e `-Wextra`, dove lo dico), ed eseguiti, tranne quelli che si bloccano; gli errori e le stampe citati sono quelli veri. Le soluzioni, i quiz e gli esercizi sono di questi appunti.
