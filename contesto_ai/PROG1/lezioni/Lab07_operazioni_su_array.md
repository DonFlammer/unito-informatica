---
corso: PROG1
lezione: Lab07
titolo: "Laboratorio 07: operazioni su array"
data: 2026-11-23
docenti: Elisa Marengo (turno B2) e Valerio Basile (turno B1); teoria Elvio Amparore
sopratitolo: Canale B · Laboratorio 07 · Programmazione I
descrizione: >-
  Appunti del settimo laboratorio di Programmazione I (canale B, Lab07): tre domande sui puntatori, il modello
  dimensione-capacità, trasformazione, filtro, riduzione sul posto e duplicazione di un array, le stesse operazioni
  con la memoria dinamica, stringhe con l'aritmetica dei puntatori, eliminare le vocali sul posto, intervalli
  semiaperti di indici e match con errori, con tutti i programmi provati.
lede: >-
  Il settimo laboratorio mette insieme array, puntatori e heap delle ultime lezioni di teoria. Gli esercizi sembrano
  tanti, ma girano intorno a quattro schemi e a una convenzione sugli indici: una volta presi quelli, il codice si
  scrive quasi da solo.
materiale: slide
scheda:
  Slide: Lab07 «Operazioni su array», laboratorio canale B · 46 pagine, quattro esercizi su CodeRunner
  Laboratorio: Elisa Marengo (turno B2, lun 23/11) e Valerio Basile (turno B1) · 14–17 · laboratorio Turing
  Tempo di studio: 3 ore, davanti a un computer
fonte: >-
  Slide «Operazioni su array» (Lezione nº 7 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27;
  per il formato di tre esercizi CodeRunner, le soluzioni di uno studente del 2025/26
appunti_html: appunti/PROG1/Lab07_operazioni_su_array.html
genera_html: true
---

## In breve

- Un array con dello spazio di riserva si descrive con due numeri: la **dimensione**, cioè quanti elementi sono in uso, e la **capacità**, cioè quanti ce ne stanno.
- Una funzione che **cambia la dimensione** la riceve attraverso un puntatore. Una che la legge soltanto la riceve per valore.
- Quattro schemi coprono quasi tutti gli esercizi: **trasformazione**, **filtro** in un secondo array, **riduzione sul posto**, **duplicazione** selettiva.
- Quando si scrive in un array con capacità limitata, la condizione del ciclo controlla anche che ci sia ancora posto.
- Con lo **heap** il risultato ha la misura esatta: si conta, si alloca, si copia. Chi riceve il blocco fa la `free`.
- Una stringa si scorre con un puntatore fino al terminatore. Per togliere caratteri sul posto servono due puntatori: uno legge, l'altro scrive.
- Un pezzo di array si indica con un **intervallo semiaperto** di indici: il sinistro è compreso, il destro è escluso.

> [!CANALI]
> **Canale B.** È il settimo laboratorio, al laboratorio Turing, dalle 14 alle 17: turno **B2** lunedì 23/11 con **Elisa Marengo** (sul Moodle del corso c'è la registrazione di quel giorno). Il turno **B1** con **Valerio Basile** dovrebbe averlo fatto martedì 24/11: il laboratorio B2 annullato del 16/11 ha rimesso in pari i due turni. Gli esercizi usano il modello dimensione-capacità della [07A](07A_algoritmi_su_array.html), `malloc` e `free` della [08A](08A_memoria_dinamica.html), le stringhe della [05A](05A_array_stringhe.html) e il passaggio di puntatori della [06B](06B_chiamata_funzioni.html).
>
> **Canali A e C.** Le slide 2026/27 dei canali A e C non le ho viste. Negli anni scorsi i laboratori erano gli stessi nei tre canali.
>
> **Il materiale che ho e quello che non ho.** Ho le slide. Non ho il «codice iniziale07» (`modifica_array.c`, `modifica_array_memoria_dinamica.c`, `codifica.c`, `sottosequenze.c`, `my_string.c`), che è su Moodle: le funzioni di questi appunti le ho scritte io seguendo le slide, e nei file veri i nomi e i parametri possono essere diversi. Non ho nemmeno i testi dei quattro esercizi CodeRunner. Per tre di loro (Regole trasformazione array, Elimina vocali, Sottosequenze con errori) ho ricavato il formato di ingresso e di uscita dalle soluzioni di uno studente del 2025/26: i testi 2026/27 possono essere diversi. Del quarto (Funzioni su array, memoria dinamica) conosco solo il titolo. Tutti i programmi li ho compilati con `gcc -Wall -Werror` (gcc 16.1, Windows 11 a 64 bit) ed eseguiti.

## Tre domande sui puntatori (slide 2–7)

Il laboratorio comincia con tre pezzi di codice da leggere. Sono tre errori che si fanno davvero.

**Prima domanda.** Che cosa definisce questa riga?

```c
int* countPtr, count;
```

Definisce un puntatore a `int`, `countPtr`, e un `int` normale, `count`. L'asterisco appartiene al nome che lo segue, non al tipo: vale solo per `countPtr`. Per avere due puntatori si scrive `int *p, *q;`, oppure una dichiarazione per riga. Nessuna delle due variabili è inizializzata; la slide 3 propone `int* countPtr = NULL, count = 0;`.

**Seconda domanda.** Che cosa fa questo codice?

```c
int count = 3;
int* pC = &count;
int* pC2 = &pC;
printf("%d %d\n", count, pC);
```

Non compila. Gli errori sono due, e gcc li dice così:

```text
error: initialization of 'int *' from incompatible pointer type 'int **' [-Wincompatible-pointer-types]
error: format '%d' expects argument of type 'int', but argument 3 has type 'int *' [-Werror=format=]
```

Il primo: `&pC` è l'indirizzo di un puntatore a `int`, quindi è un puntatore a puntatore, di tipo `int**`, e non può finire in una variabile `int*`. Con gcc 16 è un errore anche senza opzioni. Il secondo: `pC` è un indirizzo, e `%d` vuole un intero; per stampare il valore puntato serve `*pC`. La versione giusta:

```c
int count = 3;
int* pC = &count;
int** pC2 = &pC;
printf("%d %d %d\n", count, *pC, **pC2);   // stampa: 3 3 3
```

Nella slide 5, quella della soluzione, la riga `int* pC2 = &pC;` è rimasta com'era: il testo accanto dice che è sbagliata, ma il codice non è stato corretto.

**Terza domanda.** Quali di queste istruzioni spostano il puntatore, e quali cambiano il valore puntato?

```c
*p++;      // sposta il puntatore
*(p++);    // sposta il puntatore: è la stessa cosa
(*p)++;    // incrementa il valore puntato
*p += 1;   // incrementa il valore puntato
```

Il `++` scritto dopo ha la precedenza sull'asterisco. Quindi `*p++` vuol dire `*(p++)`: legge il valore puntato, e poi sposta `p` sull'elemento dopo. Per incrementare il valore servono le parentesi intorno a `*p`.

L'ho provato su un array `{10, 20, 30}`, partendo con `p` sul primo elemento:

```text
dopo p++:      *p = 20, v = {10, 20, 30}
dopo (*p)++:   *p = 21, v = {10, 21, 30}
dopo *p += 1:  *p = 22, v = {10, 22, 30}
dopo x = *p++: x = 22, *p = 30
```

Il codice della slide 6, scritto così com'è, con `-Wall -Werror` non compila: `*p++;` da solo legge un valore e lo butta via (`value computed is not used`), e `p` non è inizializzato (`'p' is used uninitialized`).

Un ultimo pezzo, con le due scritture una dopo l'altra:

```c
int v[3] = {5, 6, 7};
int* p = v;
int x = *p++;
int y = (*p)++;
printf("%d %d %d %d\n", x, y, v[0], v[1]);
```

::: prova Che cosa stampa il codice qui sopra? Decidilo prima di compilarlo.
`5 6 5 7`. `x = *p++` legge `v[0]`, che vale 5, e sposta `p` su `v[1]`. `y = (*p)++` legge `v[1]`, che vale 6, e poi lo porta a 7. `v[0]` non è cambiato. Provato.
:::

> [!RICORDA]
> - In una dichiarazione l'asterisco vale solo per il nome che lo segue.
> - L'indirizzo di un `int*` è un `int**`.
> - `*p++` sposta il puntatore; `(*p)++` incrementa il valore puntato.

## Il modello dimensione-capacità (slide 8–12)

Molti esercizi lavorano su array il cui numero di elementi cambia: se ne tolgono alcuni, se ne aggiungono altri. Un array del C però non si allunga e non si accorcia. Si prepara allora un array più grande del necessario, e si tiene a parte il conto di quanti elementi sono davvero in uso. È il modello della [07A](07A_algoritmi_su_array.html).

```grafico
titolo: Un array di capacità 10 con 6 elementi in uso. Gli indici validi vanno da 0 a 5. Le caselle da 6 a 9 esistono, ma il loro contenuto non conta: aLen dice dove finisce la parte in uso, ed è anche l'indice della prima casella libera
x: 0 12
y: 0 4.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.5 2 1.6 2 1.6 3 0.5 3 | blu | tenue
poligono: 1.6 2 2.7 2 2.7 3 1.6 3 | blu | tenue
poligono: 2.7 2 3.8 2 3.8 3 2.7 3 | blu | tenue
poligono: 3.8 2 4.9 2 4.9 3 3.8 3 | blu | tenue
poligono: 4.9 2 6 2 6 3 4.9 3 | blu | tenue
poligono: 6 2 7.1 2 7.1 3 6 3 | blu | tenue
poligono: 7.1 2 8.2 2 8.2 3 7.1 3 | grigio | tratteggio
poligono: 8.2 2 9.3 2 9.3 3 8.2 3 | grigio | tratteggio
poligono: 9.3 2 10.4 2 10.4 3 9.3 3 | grigio | tratteggio
poligono: 10.4 2 11.5 2 11.5 3 10.4 3 | grigio | tratteggio
testo: 1.05 2.5 | blu | "17"
testo: 2.15 2.5 | blu | "21"
testo: 3.25 2.5 | blu | "−3"
testo: 4.35 2.5 | blu | "8"
testo: 5.45 2.5 | blu | "19"
testo: 6.55 2.5 | blu | "7"
testo: 7.65 2.5 | grigio | "??"
testo: 8.75 2.5 | grigio | "??"
testo: 9.85 2.5 | grigio | "??"
testo: 10.95 2.5 | grigio | "??"
testo: 1.05 1.5 | grigio | "0"
testo: 2.15 1.5 | grigio | "1"
testo: 3.25 1.5 | grigio | "2"
testo: 4.35 1.5 | grigio | "3"
testo: 5.45 1.5 | grigio | "4"
testo: 6.55 1.5 | grigio | "5"
testo: 7.65 1.5 | grigio | "6"
testo: 8.75 1.5 | grigio | "7"
testo: 9.85 1.5 | grigio | "8"
testo: 10.95 1.5 | grigio | "9"
testo: 3.8 3.6 | blu | "aLen = 6: in uso"
testo: 9.3 3.6 | grigio | "liberi"
freccia: 7.1 0.9 7.1 1.9 | ambra
testo: 7.1 0.5 | ambra | "aLen"
testo: 3.2 0.5 | grigio | "capacità AMAX = 10"
```

> [!DEF] Dimensione e capacità (slide 9)
> - La **capacità** è il numero di caselle dell'array: quanti elementi ci stanno al massimo. Non cambia.
> - La **dimensione** è il numero di elementi in uso, che occupano le prime caselle. Può crescere e calare, restando tra 0 e la capacità.
> - Gli **indici validi** sono quelli da 0 alla dimensione esclusa.

**Come si legge.** Con dimensione `aLen` e capacità `AMAX`, vale sempre `0 <= aLen <= AMAX`, e un indice `i` è valido quando `0 <= i < aLen`. Le caselle da `aLen` in poi esistono, ma contengono valori che non contano: leggerle è un errore di logica, anche se il programma non si ferma. La dimensione ha un secondo significato utile: è l'indice della **prima casella libera**, quella in cui scrivere per aggiungere un elemento.

Le dichiarazioni (slide 10):

```c
#define AMAX 10
int a[AMAX];        // capacità fissata nel programma
size_t aLen = 0;    // dimensione: all'inizio l'array è vuoto
```

Con una capacità decisa mentre il programma gira, si usano una variabile `size_t aCap` e un array `int a[aCap]`.

Il punto delicato è come si passano queste cose a una funzione. Le slide 11–12 danno due forme: `const size_t aLen, const size_t aCap, int a[]` se la dimensione non cambia, e `size_t* p_aLen, const size_t aCap, int a[]` se la funzione la cambia. In pratica si passa solo quello che alla funzione serve:

| La funzione | Parametri |
|---|---|
| legge soltanto | `const size_t aLen, const int a[]` |
| cambia gli elementi, non il loro numero | `const size_t aLen, int a[]` |
| scrive in un array che può riempirsi | `const size_t aCap, int a[]`, e restituisce la dimensione |
| cambia la dimensione di un array già pieno di dati | `size_t* p_aLen, const size_t aCap, int a[]` |

Nell'ultima riga la dimensione arriva come **puntatore**: la funzione la legge con `*p_aLen`, la cambia, e il chiamante vede il valore nuovo. È lo stesso meccanismo dello scambio con i puntatori della [06B](06B_chiamata_funzioni.html).

> [!TRAPPOLA] La dimensione passata per valore
> Questa funzione toglie dall'array gli elementi minori di 3, ma riceve `aLen` per valore:
>
> ```c
> void riduci_sbagliata(size_t aLen, int a[]) {
>     size_t j = 0;
>     for (size_t i = 0; i < aLen; i++) {
>         if (a[i] >= 3) {
>             a[j] = a[i];
>             j++;
>         }
>     }
>     aLen = j;   // cambia solo la copia locale
> }
> ```
>
> Con `{0, 3, 2, 4, 3}` il chiamante dopo la chiamata stampa `len=5: 3 4 3 4 3`. Gli elementi sono stati spostati, perché l'array è condiviso, ma la dimensione nel chiamante è rimasta 5. Compila senza nessun avviso, anche con `-Wall -Werror`: se ne accorge solo chi prova il programma.

::: prova Un array ha capacità 8 e dimensione 5. Quali indici sono validi? In quale casella si scrive un elemento nuovo, e quanto vale la dimensione subito dopo? Quanti elementi si possono ancora aggiungere, dopo quello?
Sono validi gli indici da 0 a 4. L'elemento nuovo va nella casella 5, e la dimensione diventa 6. Poi restano due caselle libere, la 6 e la 7.
:::

> [!RICORDA]
> - Dimensione: elementi in uso. Capacità: caselle disponibili. Sempre `0 <= aLen <= aCap`.
> - Indici validi: da 0 ad `aLen` escluso. `aLen` è la prima casella libera.
> - Se la funzione cambia la dimensione, la riceve come `size_t*`.

## Quattro schemi sugli array (slide 13–19)

Le slide presentano quattro operazioni. Negli esempi il criterio `Cond` tiene i numeri maggiori o uguali a 3, e l'array di partenza è sempre `{0, 3, 2, 4, 3}`.

### Trasformazione

Ogni elemento viene sostituito dal risultato di una funzione applicata a lui stesso. La dimensione non cambia, quindi arriva per valore.

```c
void trasforma(const size_t aLen, int a[]) {
    for (size_t i = 0; i < aLen; i++) {
        a[i] = tr(a[i]);
    }
}
```

### Filtro in un secondo array

Si copiano in un altro array `b` solo gli elementi che rispettano il criterio. In `b` si scrive sempre nella prima casella libera, che è `bLen`.

```grafico
titolo: Il filtro con il criterio «maggiore o uguale a 3». L'indice iA scorre tutto a; in b si scrive solo quando l'elemento passa il criterio, nella prima casella libera, che è bLen. Alla fine bLen vale 3 e tre caselle di b restano libere
x: 0 11
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
testo: 0.7 4.3 | blu | "a"
poligono: 1.4 3.8 2.8 3.8 2.8 4.8 1.4 4.8 | grigio | tenue
poligono: 2.8 3.8 4.2 3.8 4.2 4.8 2.8 4.8 | ambra | tenue
poligono: 4.2 3.8 5.6 3.8 5.6 4.8 4.2 4.8 | grigio | tenue
poligono: 5.6 3.8 7 3.8 7 4.8 5.6 4.8 | ambra | tenue
poligono: 7 3.8 8.4 3.8 8.4 4.8 7 4.8 | ambra | tenue
testo: 2.1 4.3 | grigio | "0"
testo: 3.5 4.3 | ambra | "3"
testo: 4.9 4.3 | grigio | "2"
testo: 6.3 4.3 | ambra | "4"
testo: 7.7 4.3 | ambra | "3"
testo: 0.7 1.3 | verde | "b"
poligono: 1.4 0.8 2.8 0.8 2.8 1.8 1.4 1.8 | verde | tenue
poligono: 2.8 0.8 4.2 0.8 4.2 1.8 2.8 1.8 | verde | tenue
poligono: 4.2 0.8 5.6 0.8 5.6 1.8 4.2 1.8 | verde | tenue
poligono: 5.6 0.8 7 0.8 7 1.8 5.6 1.8 | grigio | tratteggio
poligono: 7 0.8 8.4 0.8 8.4 1.8 7 1.8 | grigio | tratteggio
poligono: 8.4 0.8 9.8 0.8 9.8 1.8 8.4 1.8 | grigio | tratteggio
testo: 2.1 1.3 | verde | "3"
testo: 3.5 1.3 | verde | "4"
testo: 4.9 1.3 | verde | "3"
testo: 6.3 1.3 | grigio | "??"
testo: 7.7 1.3 | grigio | "??"
testo: 9.1 1.3 | grigio | "??"
freccia: 3.5 3.7 2.2 1.9 | ambra
freccia: 6.3 3.7 3.6 1.9 | ambra
freccia: 7.7 3.7 5.0 1.9 | ambra
testo: 3.5 0.3 | verde | "bLen = 3"
testo: 8.2 0.3 | grigio | "BMAX = 6"
testo: 9.6 4.3 | blu | "aLen = 5"
```

```c
size_t filtra(const size_t aLen, const int a[], const size_t bCap, int b[]) {
    size_t bLen = 0;
    for (size_t iA = 0; iA < aLen && bLen < bCap; iA++) {
        if (Cond(a[iA])) {
            b[bLen] = a[iA];
            bLen++;
        }
    }
    return bLen;
}
```

Gli indici sono due e avanzano a velocità diverse: `iA` a ogni giro, `bLen` solo quando si copia. La condizione del ciclo ha due parti: ci sono ancora elementi da guardare, **e** in `b` c'è ancora posto. Se `b` si riempie il ciclo si ferma, e gli elementi rimasti non vengono copiati: con una capacità di 2, il filtro dell'esempio dà solo `3 4`.

### Riduzione sul posto

Stessa selezione, ma senza un secondo array: gli elementi che restano vengono ricopiati all'inizio dello stesso array.

```grafico
titolo: La riduzione sul posto con lo stesso criterio. Gli elementi che restano scivolano verso sinistra, nella casella j. Alla fine j vale 3: è la nuova dimensione. Nelle ultime due caselle restano i valori vecchi, che non fanno più parte dell'array
x: 0 11
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
testo: 0.9 4.3 | grigio | "prima"
poligono: 2 3.8 3.4 3.8 3.4 4.8 2 4.8 | grigio | tenue
poligono: 3.4 3.8 4.8 3.8 4.8 4.8 3.4 4.8 | ambra | tenue
poligono: 4.8 3.8 6.2 3.8 6.2 4.8 4.8 4.8 | grigio | tenue
poligono: 6.2 3.8 7.6 3.8 7.6 4.8 6.2 4.8 | ambra | tenue
poligono: 7.6 3.8 9 3.8 9 4.8 7.6 4.8 | ambra | tenue
testo: 2.7 4.3 | grigio | "0"
testo: 4.1 4.3 | ambra | "3"
testo: 5.5 4.3 | grigio | "2"
testo: 6.9 4.3 | ambra | "4"
testo: 8.3 4.3 | ambra | "3"
testo: 0.9 1.3 | grigio | "dopo"
poligono: 2 0.8 3.4 0.8 3.4 1.8 2 1.8 | verde | tenue
poligono: 3.4 0.8 4.8 0.8 4.8 1.8 3.4 1.8 | verde | tenue
poligono: 4.8 0.8 6.2 0.8 6.2 1.8 4.8 1.8 | verde | tenue
poligono: 6.2 0.8 7.6 0.8 7.6 1.8 6.2 1.8 | grigio | tratteggio
poligono: 7.6 0.8 9 0.8 9 1.8 7.6 1.8 | grigio | tratteggio
testo: 2.7 1.3 | verde | "3"
testo: 4.1 1.3 | verde | "4"
testo: 5.5 1.3 | verde | "3"
testo: 6.9 1.3 | grigio | "4"
testo: 8.3 1.3 | grigio | "3"
freccia: 4.1 3.7 2.8 1.9 | ambra
freccia: 6.9 3.7 4.2 1.9 | ambra
freccia: 8.3 3.7 5.6 1.9 | ambra
freccia: 6.2 0.1 6.2 0.7 | verde
testo: 4.3 0.3 | verde | "j = 3"
testo: 8.6 0.3 | grigio | "non più in uso"
```

```c
void riduci(size_t* p_aLen, int a[]) {
    size_t j = 0;
    for (size_t i = 0; i < *p_aLen; i++) {
        if (Cond(a[i])) {
            a[j] = a[i];
            j++;
        }
    }
    *p_aLen = j;
}
```

L'indice `i` legge, l'indice `j` scrive. Funziona perché `j` non supera mai `i`: si scrive sempre in una casella già letta, quindi non si perde nessun elemento ancora da guardare. Alla fine `j` è il numero di elementi rimasti, cioè la nuova dimensione, che esce dal puntatore.

### Duplicazione selettiva

Si copiano in `b` tutti gli elementi, e quelli che rispettano il criterio si copiano due volte.

```c
size_t duplica(const size_t aLen, const int a[], const size_t bCap, int b[]) {
    size_t bLen = 0;
    for (size_t iA = 0; iA < aLen && bLen < bCap; iA++) {
        b[bLen] = a[iA];
        bLen++;
        if (Cond(a[iA]) && bLen < bCap) {
            b[bLen] = a[iA];
            bLen++;
        }
    }
    return bLen;
}
```

Qui il controllo sul posto libero compare **due volte**: nella condizione del ciclo, e di nuovo prima della seconda copia. Tra le due scritture `bLen` è cresciuto, e l'array potrebbe essersi riempito proprio in quel momento.

I risultati sull'array dell'esempio. Il filtro con capacità 6, la riduzione e la duplicazione danno gli stessi valori delle slide 15, 17 e 19:

| Operazione | Risultato |
|---|---|
| filtro, capacità 6 | `len=3: [ 3 4 3 ]` |
| filtro, capacità 2 | `len=2: [ 3 4 ]` |
| riduzione sul posto | `len=3: [ 3 4 3 ]` |
| duplicazione, capacità 5 | `len=5: [ 0 3 3 2 4 ]` |
| trasformazione con il doppio, dopo la riduzione | `len=3: [ 6 8 6 ]` |

Nella duplicazione con capacità 5 il 4 entra una volta sola e l'ultimo 3 resta fuori: l'array si è riempito.

::: prova Esegui a mano la riduzione sul posto su `{5, 1, 8, 2}` con lo stesso criterio. Quanto vale `j` alla fine? Che cosa contengono le quattro caselle?
`j` vale 2. Le caselle contengono `5 8 8 2`: il 5 viene ricopiato su sé stesso, l'8 va nella casella 1, e nelle ultime due caselle restano i valori vecchi, che non fanno più parte dell'array. Provato.
:::

> [!RICORDA]
> - Due indici: uno legge e avanza sempre, l'altro scrive e avanza solo quando si copia.
> - Scrivendo in un array con capacità: `bLen < bCap` nella condizione, prima di **ogni** scrittura.
> - Sul posto: l'indice che scrive non supera mai quello che legge.

## Regole di copia: Lab07-Es1 (slide 20–21)

Il primo esercizio chiede di completare le funzioni di `modifica_array.c`, che non ho: sono con ogni probabilità le quattro operazioni della sezione precedente. Il secondo è su Moodle, **Lab07-Es1 «Regole trasformazione array»**: completare una funzione `trasforma_array`, con il `main` e le funzioni di lettura e stampa già scritti.

Il testo non ce l'ho. Dalla soluzione di uno studente del 2025/26 le regole risultano queste: per ogni elemento dell'array `A`, si decide quante volte copiarlo in `B`.

| L'elemento è | Copie in `B` |
|---|---|
| minore di 10 | nessuna |
| multiplo di 4 | quattro |
| pari, ma non multiplo di 4 | due |
| dispari e multiplo di 3 | nessuna |
| tutti gli altri | una |

È la duplicazione selettiva, con più casi. Conviene separare le due domande: una funzione dice **quante copie**, l'altra **copia** stando attenta alla capacità.

```c
size_t copie(const int x) {
    size_t n = 1;
    if (x < 10) {
        n = 0;
    } else if (x % 4 == 0) {
        n = 4;
    } else if (x % 2 == 0) {
        n = 2;
    } else if (x % 3 == 0) {
        n = 0;
    }
    return n;
}

size_t trasforma_array(const int* pA, const size_t lenA,
                       int* pB, const size_t nmaxB) {
    size_t lenB = 0;
    for (size_t i = 0; i < lenA && lenB < nmaxB; i++) {
        size_t n = copie(pA[i]);
        for (size_t k = 0; k < n && lenB < nmaxB; k++) {
            pB[lenB] = pA[i];
            lenB++;
        }
    }
    return lenB;
}
```

L'ordine degli `if` conta: un multiplo di 4 è anche pari, quindi il controllo sul 4 va prima di quello sul 2. Il programma legge il numero di elementi e poi gli elementi, con una capacità di 10 per tutti e due gli array. Con l'ingresso `8 3 12 14 9 15 25 16 10` stampa:

```text
len=10: [ 12 12 12 12 14 14 25 16 16 16 ]
```

Il 3 e il 9 sono minori di 10; il 15 è dispari e multiplo di 3; il 16 entra solo tre volte perché `B` si riempie, e il 10 resta fuori.

::: prova Con le stesse regole, che cosa stampa il programma con l'ingresso `4 11 22 33 44`?
`len=7: [ 11 22 22 44 44 44 44 ]`. L'11 è dispari e non multiplo di 3: una copia. Il 22 è pari e non multiplo di 4: due. Il 33 è dispari e multiplo di 3: nessuna. Il 44 è multiplo di 4: quattro. Provato.
:::

> [!RICORDA]
> - Più regole: una funzione che decide quante copie, una che copia.
> - Negli `if` in cascata i casi più specifici vanno prima.

## Le stesse operazioni con lo heap (slide 22–31)

Con gli array statici il risultato di un filtro ha un difetto: non si sa prima quanto sarà lungo, quindi si prepara un array grande e si spera che basti. Con la memoria dinamica della [08A](08A_memoria_dinamica.html) si alloca un blocco della **misura esatta**. Le slide 23–26 ripassano `malloc` e `free`; le slide 28–29 riprendono la selezione in tre fasi.

> [!METODO] Costruire un array nello heap in tre fasi (slide 29)
> 1. **Calcolo della dimensione**: un primo ciclo conta quanti elementi avrà il risultato.
> 2. **Allocazione**: `malloc(count * sizeof(int))`, controllando che non ritorni `NULL`.
> 3. **Copia**: un secondo ciclo, uguale al primo, che questa volta scrive.

Il filtro diventa:

```c
int* filtra_heap(const size_t bLen, const int b[], size_t* p_aLen) {
    assert(p_aLen != NULL);
    int* a = NULL;
    *p_aLen = 0;

    size_t count = 0;                       // 1) quanti sono?
    for (size_t i = 0; i < bLen; i++) {
        if (Cond(b[i])) {
            count++;
        }
    }
    if (count > 0) {                        // 2) allocazione
        a = malloc(count * sizeof(int));
    }
    if (a != NULL) {                        // 3) copia
        size_t j = 0;
        for (size_t i = 0; i < bLen; i++) {
            if (Cond(b[i])) {
                a[j] = b[i];
                j++;
            }
        }
        *p_aLen = count;
    }
    return a;
}
```

La funzione restituisce due cose: l'indirizzo del blocco, con la `return`, e la sua lunghezza, attraverso `p_aLen`. Se nessun elemento passa il criterio, o se la memoria non basta, ritorna `NULL` con lunghezza 0. Non c'è più una capacità che taglia il risultato: per questo nella copia non serve il controllo `j < count`.

Per la duplicazione cambia solo il conteggio: ogni elemento vale uno, e quelli che rispettano il criterio valgono due. Con `{0, 3, 2, 4, 3}` il blocco ha $5 + 3 = 8$ interi:

```text
filtro:       len=3: [ 3 4 3 ]
duplicazione: len=8: [ 0 3 3 2 4 4 3 3 ]
```

Rispetto alla versione statica con capacità 5, qui non si perde niente.

Il blocco è di chi chiama la funzione, che deve liberarlo:

```c
size_t aLen = 0;
int* a = filtra_heap(5, b, &aLen);
// ... usa a[0] ... a[aLen - 1] ...
free(a);
a = NULL;
```

La slide 25 consiglia di azzerare il puntatore dopo la `free`: così un uso sbagliato dopo la liberazione si nota subito. `free(NULL)` non fa niente, quindi la `free` va bene anche quando la funzione ha ritornato `NULL`.

Gli esercizi sono due: completare `modifica_array_memoria_dinamica.c`, e su Moodle **Lab07-Es2 «Funzioni su array (memoria dinamica)»**. Di tutti e due non ho il testo.

::: prova Una funzione costruisce nello heap un array con tutti gli elementi di `b`, tre volte quelli pari e una volta gli altri. Con `b = {4, 7, 10}`, quanti `int` deve allocare?
Sette: $3 + 1 + 3$. Il conteggio della prima fase somma 3 per ogni pari e 1 per ogni dispari.
:::

> [!RICORDA]
> - Tre fasi: contare, allocare, copiare.
> - Il blocco e la sua lunghezza escono insieme: indirizzo con la `return`, lunghezza con un puntatore.
> - Ogni `malloc` ha la sua `free`, e la fa chi ha ricevuto il blocco.

## Stringhe e aritmetica dei puntatori (slide 32–34)

Una stringa è un array di `char` che finisce con il terminatore. Non serve la lunghezza: si parte dal primo carattere e si avanza finché non si incontra il terminatore. Con un puntatore, invece che con un indice:

```c
while (*pStr != '\0') {
    /* usa *pStr */
    pStr++;
}
```

`*pStr` è il carattere corrente, `pStr++` passa al successivo. Spostare `pStr` non crea problemi al chiamante: il parametro è una copia del suo puntatore. Nella slide 33 il parametro si chiama `pStrInput` e il ciclo usa `pStr`: è uno schizzo, i due nomi vanno resi uguali.

L'esercizio 5 chiede due funzioni in `codifica.c`. `codifica` cambia sul posto le lettere maiuscole, ognuna con la successiva, e la Z con la A; `decodifica` fa il contrario. Gli altri caratteri restano come sono.

```c
void codifica(char* pStr) {
    while (*pStr != '\0') {
        if (*pStr >= 'A' && *pStr < 'Z') {
            (*pStr)++;
        } else if (*pStr == 'Z') {
            *pStr = 'A';
        }
        pStr++;
    }
}

void decodifica(char* pStr) {
    for ( ; *pStr != '\0'; pStr++) {
        if (*pStr > 'A' && *pStr <= 'Z') {
            (*pStr)--;
        } else if (*pStr == 'A') {
            *pStr = 'Z';
        }
    }
}
```

Qui tornano le due scritture della terza domanda iniziale: `(*pStr)++` cambia il carattere, `pStr++` sposta il puntatore. Le lettere maiuscole nella tabella ASCII sono una dopo l'altra, quindi «la lettera successiva» è il codice più uno ([05A](05A_array_stringhe.html)). Con la stringa `"ABC, Zoo e XYZ"`:

```text
BCD, Aoo e YZA
ABC, Zoo e XYZ
```

> [!TRAPPOLA] `const char*` per una stringa da modificare
> La slide 33 passa la stringa come `const char*`. Va bene per una funzione che **legge**. Una funzione che modifica i caratteri con quel parametro non compila:
>
> ```text
> error: assignment of read-only location '*pStr'
> ```
>
> Per `codifica` il parametro è `char*`. Il `const` protegge i caratteri, non il puntatore: `pStr++` si può fare in tutti e due i casi.

::: prova Che cosa diventa la stringa `"ZAINO 2026"` dopo `codifica`?
`"ABJOP 2026"`. Z diventa A, A diventa B, I diventa J, N diventa O, O diventa P. Lo spazio e le cifre non cambiano. Provato.
:::

> [!RICORDA]
> - Una stringa si scorre finché `*pStr != '\0'`.
> - `(*pStr)++` cambia il carattere; `pStr++` passa al successivo.
> - `const char*` se la funzione legge, `char*` se modifica.

## Eliminare caratteri sul posto (slide 35–38)

Togliere le vocali da una stringa è la riduzione sul posto di prima, con i puntatori al posto degli indici e il terminatore al posto della dimensione. La funzione `elimina_vocali` trasforma `"informazione"` in `"nfrmzn"`.

Servono due puntatori, che partono tutti e due dall'inizio della stringa. `pSrc` legge: scorre ogni carattere. `pDst` scrive: riceve il carattere e avanza solo quando il carattere va tenuto.

```grafico
titolo: La stringa «informazione» prima e dopo. Le consonanti, in verde, vengono ricopiate verso sinistra una dopo l'altra. Alla fine pSrc è arrivato al terminatore vecchio e pDst è fermo dove va scritto quello nuovo. I caratteri in grigio dopo il terminatore nuovo sono ancora in memoria, ma la stringa finisce prima
x: 0 12.4
y: -0.2 5.4
assi: no
griglia: no
proporzioni: libere
testo: 6.2 5.0 | grigio | "prima"
poligono: 0.35 3.6 1.25 3.6 1.25 4.6 0.35 4.6 | grigio | tenue
poligono: 1.25 3.6 2.15 3.6 2.15 4.6 1.25 4.6 | verde | tenue
poligono: 2.15 3.6 3.05 3.6 3.05 4.6 2.15 4.6 | verde | tenue
poligono: 3.05 3.6 3.95 3.6 3.95 4.6 3.05 4.6 | grigio | tenue
poligono: 3.95 3.6 4.85 3.6 4.85 4.6 3.95 4.6 | verde | tenue
poligono: 4.85 3.6 5.75 3.6 5.75 4.6 4.85 4.6 | verde | tenue
poligono: 5.75 3.6 6.65 3.6 6.65 4.6 5.75 4.6 | grigio | tenue
poligono: 6.65 3.6 7.55 3.6 7.55 4.6 6.65 4.6 | verde | tenue
poligono: 7.55 3.6 8.45 3.6 8.45 4.6 7.55 4.6 | grigio | tenue
poligono: 8.45 3.6 9.35 3.6 9.35 4.6 8.45 4.6 | grigio | tenue
poligono: 9.35 3.6 10.25 3.6 10.25 4.6 9.35 4.6 | verde | tenue
poligono: 10.25 3.6 11.15 3.6 11.15 4.6 10.25 4.6 | grigio | tenue
poligono: 11.15 3.6 12.05 3.6 12.05 4.6 11.15 4.6 | ambra | tenue
testo: 0.8 4.1 | grigio | "i"
testo: 1.7 4.1 | verde | "n"
testo: 2.6 4.1 | verde | "f"
testo: 3.5 4.1 | grigio | "o"
testo: 4.4 4.1 | verde | "r"
testo: 5.3 4.1 | verde | "m"
testo: 6.2 4.1 | grigio | "a"
testo: 7.1 4.1 | verde | "z"
testo: 8 4.1 | grigio | "i"
testo: 8.9 4.1 | grigio | "o"
testo: 9.8 4.1 | verde | "n"
testo: 10.7 4.1 | grigio | "e"
testo: 11.6 4.1 | ambra | "\0"
testo: 6.2 2.7 | grigio | "dopo"
poligono: 0.35 1.3 1.25 1.3 1.25 2.3 0.35 2.3 | verde | tenue
poligono: 1.25 1.3 2.15 1.3 2.15 2.3 1.25 2.3 | verde | tenue
poligono: 2.15 1.3 3.05 1.3 3.05 2.3 2.15 2.3 | verde | tenue
poligono: 3.05 1.3 3.95 1.3 3.95 2.3 3.05 2.3 | verde | tenue
poligono: 3.95 1.3 4.85 1.3 4.85 2.3 3.95 2.3 | verde | tenue
poligono: 4.85 1.3 5.75 1.3 5.75 2.3 4.85 2.3 | verde | tenue
poligono: 5.75 1.3 6.65 1.3 6.65 2.3 5.75 2.3 | ambra | tenue
poligono: 6.65 1.3 7.55 1.3 7.55 2.3 6.65 2.3 | grigio | tratteggio
poligono: 7.55 1.3 8.45 1.3 8.45 2.3 7.55 2.3 | grigio | tratteggio
poligono: 8.45 1.3 9.35 1.3 9.35 2.3 8.45 2.3 | grigio | tratteggio
poligono: 9.35 1.3 10.25 1.3 10.25 2.3 9.35 2.3 | grigio | tratteggio
poligono: 10.25 1.3 11.15 1.3 11.15 2.3 10.25 2.3 | grigio | tratteggio
poligono: 11.15 1.3 12.05 1.3 12.05 2.3 11.15 2.3 | grigio | tratteggio
testo: 0.8 1.8 | verde | "n"
testo: 1.7 1.8 | verde | "f"
testo: 2.6 1.8 | verde | "r"
testo: 3.5 1.8 | verde | "m"
testo: 4.4 1.8 | verde | "z"
testo: 5.3 1.8 | verde | "n"
testo: 6.2 1.8 | ambra | "\0"
testo: 7.1 1.8 | grigio | "z"
testo: 8 1.8 | grigio | "i"
testo: 8.9 1.8 | grigio | "o"
testo: 9.8 1.8 | grigio | "n"
testo: 10.7 1.8 | grigio | "e"
testo: 11.6 1.8 | grigio | "\0"
freccia: 6.2 0.4 6.2 1.2 | ambra
testo: 6.2 0.1 | ambra | "pDst"
freccia: 11.6 0.4 11.6 1.2 | blu
testo: 11.6 0.1 | blu | "pSrc"
```

```c
void elimina_vocali(char* pStr) {
    const char* pSrc = pStr;   // legge
    char* pDst = pStr;         // scrive
    while (*pSrc != '\0') {
        if (!is_vocale(*pSrc)) {
            *pDst = *pSrc;
            pDst++;
        }
        pSrc++;
    }
    *pDst = '\0';
}
```

L'ultima riga è quella che si dimentica. Finito il ciclo, `pDst` indica la prima posizione non più usata: lì va scritto il terminatore nuovo. Senza, la stringa continuerebbe fino al terminatore vecchio, e stamperebbe `nfrmznazione`. La stringa si è accorciata senza che nessuno abbia passato o restituito una lunghezza: nelle stringhe la dimensione è la posizione del terminatore.

Per decidere se un carattere è una vocale basta un «esiste» su un elenco:

```c
bool is_vocale(const char ch) {
    const char vocali[] = "aeiouAEIOU";
    bool trovata = false;
    for (size_t i = 0; vocali[i] != '\0' && !trovata; i++) {
        if (ch == vocali[i]) {
            trovata = true;
        }
    }
    return trovata;
}
```

Su Moodle l'esercizio è **Lab07-Es3 «Elimina vocali»**. Dalla soluzione del 2025/26 il programma legge una parola e la stampa senza vocali. Il mio `main` legge con `scanf("%49s", parola)` in un array di 50 caratteri. Prove: `informazione` dà `nfrmzn`; `Rhythm` resta `Rhythm`; `AEIOU` dà una riga vuota.

::: prova Con la stringa `"AEIOU"`, dove si trova `pDst` alla fine del ciclo? Che cosa contiene la memoria dopo l'ultima riga della funzione?
`pDst` non si è mai mosso: indica ancora il primo carattere. L'ultima riga scrive lì il terminatore. La memoria contiene il terminatore seguito da `EIOU` e dal terminatore vecchio, ma la stringa è vuota: finisce al primo terminatore.
:::

> [!RICORDA]
> - `pSrc` legge e avanza sempre; `pDst` scrive e avanza solo quando si tiene il carattere.
> - Alla fine il terminatore va scritto in `*pDst`.
> - In una stringa accorciata i caratteri vecchi restano in memoria dopo il terminatore, senza farne parte.

## Intervalli semiaperti di indici (slide 39–45)

Molte funzioni non lavorano su tutto l'array ma su un suo pezzo: «la somma dal terzo al sesto elemento», «cerca nella seconda metà». Per indicare un pezzo servono due indici, e una convenzione su quale dei due è compreso.

La convenzione del corso è l'**intervallo semiaperto**: il sinistro compreso, il destro escluso. È la stessa degli indici validi, che vanno da 0 alla dimensione esclusa.

```grafico
titolo: L'intervallo semiaperto [2, 6) in un array di 10 elementi. L'indice left è compreso, l'indice right è escluso: gli elementi sono quelli di indice 2, 3, 4 e 5. Sono right meno left, cioè 4
x: 0 12
y: -0.2 4.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.5 2 1.6 2 1.6 3 0.5 3 | blu | tenue
poligono: 1.6 2 2.7 2 2.7 3 1.6 3 | blu | tenue
poligono: 2.7 2 3.8 2 3.8 3 2.7 3 | ambra | tenue
poligono: 3.8 2 4.9 2 4.9 3 3.8 3 | ambra | tenue
poligono: 4.9 2 6 2 6 3 4.9 3 | ambra | tenue
poligono: 6 2 7.1 2 7.1 3 6 3 | ambra | tenue
poligono: 7.1 2 8.2 2 8.2 3 7.1 3 | blu | tenue
poligono: 8.2 2 9.3 2 9.3 3 8.2 3 | blu | tenue
poligono: 9.3 2 10.4 2 10.4 3 9.3 3 | blu | tenue
poligono: 10.4 2 11.5 2 11.5 3 10.4 3 | blu | tenue
testo: 1.05 2.5 | blu | "17"
testo: 2.15 2.5 | blu | "21"
testo: 3.25 2.5 | ambra | "−3"
testo: 4.35 2.5 | ambra | "8"
testo: 5.45 2.5 | ambra | "19"
testo: 6.55 2.5 | ambra | "7"
testo: 7.65 2.5 | blu | "2"
testo: 8.75 2.5 | blu | "61"
testo: 9.85 2.5 | blu | "1"
testo: 10.95 2.5 | blu | "11"
testo: 1.05 1.5 | grigio | "0"
testo: 2.15 1.5 | grigio | "1"
testo: 3.25 1.5 | grigio | "2"
testo: 4.35 1.5 | grigio | "3"
testo: 5.45 1.5 | grigio | "4"
testo: 6.55 1.5 | grigio | "5"
testo: 7.65 1.5 | grigio | "6"
testo: 8.75 1.5 | grigio | "7"
testo: 9.85 1.5 | grigio | "8"
testo: 10.95 1.5 | grigio | "9"
freccia: 3.25 0.5 3.25 1.2 | ambra
testo: 3.25 0.15 | ambra | "left = 2"
freccia: 7.65 0.5 7.65 1.2 | rosa
testo: 7.65 0.15 | rosa | "right = 6"
testo: 4.9 3.6 | ambra | "[2, 6): 4 elementi"
```

> [!DEF] Intervallo semiaperto di indici (slide 40–42)
> L'intervallo $[\mathit{left}, \mathit{right})$ di un array di dimensione `len` è l'insieme degli indici `i` con `left <= i < right`. Deve valere `0 <= left <= right <= len`.

**Come si legge.** La parentesi quadra vuol dire «compreso», la tonda «escluso». Tutto l'array è l'intervallo da 0 a `len`. Da questa scelta escono formule senza «più uno» e «meno uno» da ricordare:

| Domanda | Risposta |
|---|---|
| quanti elementi ha? | `right - left` |
| è vuoto? | `left == right` |
| l'indice `i` ci sta? | `left <= i && i < right` |
| primo elemento, se non è vuoto | `a[left]` |
| ultimo elemento, se non è vuoto | `a[right - 1]` |
| come si scorre | `for (size_t i = left; i < right; i++)` |

Due intervalli consecutivi si attaccano senza buchi e senza doppioni: l'intervallo da 0 a `m` e quello da `m` a `len` insieme fanno tutto l'array, e `m` sta solo nel secondo. Per questo la convenzione va bene per gli algoritmi che dividono un array in due, come la ricerca binaria, che la slide 44 cita tra gli usi degli intervalli.

La slide 41 scrive `assert(len >= 0)`. Con `len` di tipo `size_t` il controllo è sempre vero, perché un `size_t` non è mai negativo: compila con `-Wall`, ma non controlla niente. Il controllo che serve è quello della slide 42, `assert(right >= left)`.

Tre funzioni nello stile dell'esercizio 7 (`sottosequenze.c`, che non ho):

```c
// somma degli elementi con indice in [left, right)
int somma_intervallo(const int a[], const size_t left, const size_t right) {
    assert(right >= left);
    int somma = 0;
    for (size_t i = left; i < right; i++) {
        somma += a[i];
    }
    return somma;
}

// vero se gli elementi di a in [left, right) sono uguali, uno per uno, a quelli di b
bool intervallo_uguale(const int a[], const size_t left, const size_t right,
                       const int b[], const size_t bLen) {
    assert(right >= left);
    bool uguali = (right - left == bLen);
    for (size_t k = 0; k < bLen && uguali; k++) {
        if (a[left + k] != b[k]) {
            uguali = false;
        }
    }
    return uguali;
}

// cerca b dentro a: ritorna l'indice sinistro della prima occorrenza, oppure aLen
size_t cerca_sottosequenza(const int a[], const size_t aLen,
                           const int b[], const size_t bLen) {
    size_t pos = aLen;
    for (size_t left = 0; left + bLen <= aLen && pos == aLen; left++) {
        if (intervallo_uguale(a, left, left + bLen, b, bLen)) {
            pos = left;
        }
    }
    return pos;
}
```

Nella ricerca, `left + bLen <= aLen` garantisce che l'intervallo da provare stia tutto dentro `a`. Il valore «non trovato» è `aLen`, che non è un indice valido: con `size_t` non si può usare $-1$. Sull'array della figura la somma in $[2, 6)$ vale 31, la somma in $[4, 4)$ vale 0, la sequenza `{8, 19, 7}` si trova all'indice 3 e `{7, 3}` non si trova: la funzione ritorna 10.

> [!TRAPPOLA] `right - 1` con `size_t`
> In un ciclo che guarda le coppie di vicini viene da scrivere `i < right - 1`. Se `right` vale 0, con `size_t` la sottrazione dà un numero enorme e il ciclo esce dall'array. Si scrive `i + 1 < right`, che è la stessa condizione senza sottrazioni.

L'esercizio 8 chiede di riscrivere in `my_string.c` alcune funzioni sulle stringhe **senza** `<string.h>`. Non sapendo quali, ne ho scritte quattro classiche; le due più istruttive:

```c
size_t my_strlen(const char* pStr) {
    const char* p = pStr;
    while (*p != '\0') {
        p++;
    }
    return (size_t)(p - pStr);
}

int my_strcmp(const char* pA, const char* pB) {
    while (*pA != '\0' && *pA == *pB) {
        pA++;
        pB++;
    }
    return (unsigned char)*pA - (unsigned char)*pB;
}
```

In `my_strlen` la lunghezza è la **differenza tra due puntatori**: quello arrivato al terminatore meno quello di partenza. È un intervallo semiaperto di puntatori: la slide 43 lo presenta, e dice che non verrà trattato. `my_strcmp` si ferma alla prima posizione in cui le stringhe differiscono, o alla fine, e restituisce la differenza tra i due caratteri: zero se sono uguali.

::: prova Nell'array della figura, quali elementi stanno nell'intervallo $[6, 9)$, e quanti sono? E nell'intervallo $[4, 4)$?
In $[6, 9)$ ci sono gli elementi di indice 6, 7 e 8: 2, 61 e 1. Sono $9 - 6 = 3$. L'intervallo $[4, 4)$ è vuoto: sinistro e destro coincidono.
:::

> [!RICORDA]
> - Sinistro compreso, destro escluso. Elementi: `right - left`. Vuoto: `left == right`.
> - Si scorre con `for (size_t i = left; i < right; i++)`.
> - «Non trovato» si segnala con la dimensione, non con un numero negativo.
> - Mai `right - 1` in una condizione con `size_t` senza sapere che `right` è positivo.

## Match con al più n errori (slide 46)

L'ultimo esercizio, segnato come extra, confronta due sequenze in modo tollerante: possono differire in qualche posizione, purché non troppe.

```grafico
titolo: Due sequenze di lunghezza 5 confrontate posizione per posizione. Sono diverse in due posizioni, la 2 e la 4: sono in match con al più 2 errori, e anche con al più 3, ma non con al più 1
x: 0 11.5
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
testo: 1.0 4.3 | blu | "a"
poligono: 2 3.8 3.4 3.8 3.4 4.8 2 4.8 | blu | tenue
poligono: 3.4 3.8 4.8 3.8 4.8 4.8 3.4 4.8 | blu | tenue
poligono: 4.8 3.8 6.2 3.8 6.2 4.8 4.8 4.8 | rosa | tenue
poligono: 6.2 3.8 7.6 3.8 7.6 4.8 6.2 4.8 | blu | tenue
poligono: 7.6 3.8 9 3.8 9 4.8 7.6 4.8 | rosa | tenue
testo: 2.7 4.3 | blu | "0"
testo: 4.1 4.3 | blu | "3"
testo: 5.5 4.3 | rosa | "2"
testo: 6.9 4.3 | blu | "4"
testo: 8.3 4.3 | rosa | "3"
testo: 1.0 1.3 | verde | "b"
poligono: 2 0.8 3.4 0.8 3.4 1.8 2 1.8 | verde | tenue
poligono: 3.4 0.8 4.8 0.8 4.8 1.8 3.4 1.8 | verde | tenue
poligono: 4.8 0.8 6.2 0.8 6.2 1.8 4.8 1.8 | rosa | tenue
poligono: 6.2 0.8 7.6 0.8 7.6 1.8 6.2 1.8 | verde | tenue
poligono: 7.6 0.8 9 0.8 9 1.8 7.6 1.8 | rosa | tenue
testo: 2.7 1.3 | verde | "0"
testo: 4.1 1.3 | verde | "3"
testo: 5.5 1.3 | rosa | "1"
testo: 6.9 1.3 | verde | "4"
testo: 8.3 1.3 | rosa | "5"
testo: 2.7 2.8 | grigio | "="
testo: 4.1 2.8 | grigio | "="
testo: 5.5 2.8 | rosa | "≠"
testo: 6.9 2.8 | grigio | "="
testo: 8.3 2.8 | rosa | "≠"
testo: 10.2 2.8 | rosa | "2 errori"
```

> [!DEF] Match con al più n errori (slide 46)
> Due sequenze `a` e `b` della stessa lunghezza `len` sono in **match con al più n errori** se gli elementi nelle stesse posizioni sono uguali, tranne al più `n` posizioni.

**Come si legge.** Si confrontano il primo con il primo, il secondo con il secondo, e così via. Ogni coppia diversa è un errore. Si contano gli errori e si confrontano con `n`. Con `n` uguale a 0 è l'uguaglianza normale.

```c
size_t conta_errori(const int a[], const int b[], const size_t len) {
    size_t errori = 0;
    for (size_t i = 0; i < len; i++) {
        if (a[i] != b[i]) {
            errori++;
        }
    }
    return errori;
}

bool match_con_errori(const int a[], const int b[], const size_t len, const size_t n) {
    return conta_errori(a, b, len) <= n;
}
```

Su Moodle l'esercizio è **Lab07-Es4 «Sottosequenze con errori»**. Dalla soluzione del 2025/26 il programma legge una sequenza modello, il numero massimo di errori, e poi una serie di sequenze. Per ognuna cerca il primo intervallo in match con il modello e lo stampa, oppure stampa `NO`. La ricerca è `cerca_sottosequenza`, con il conteggio degli errori al posto dell'uguaglianza:

```c
size_t cerca_con_errori(const int seq[], const size_t seqLen,
                        const int pat[], const size_t patLen,
                        const size_t n, size_t* p_errori) {
    size_t pos = seqLen;
    for (size_t left = 0; left + patLen <= seqLen && pos == seqLen; left++) {
        size_t e = conta_errori(seq + left, pat, patLen);
        if (e <= n) {
            pos = left;
            *p_errori = e;
        }
    }
    return pos;
}
```

`seq + left` è l'indirizzo dell'elemento di indice `left`: passarlo a `conta_errori` vuol dire «considera la sequenza che comincia da lì». Con il modello `{3, 2, 4}` e al più 1 errore:

| Sequenza | Uscita |
|---|---|
| `0 3 2 4 3` | `[1, 4) errori=0` |
| `0 3 1 4 5` | `[1, 4) errori=1` |
| `9 9 9 9` | `NO` |
| `3 2` | `NO` |

L'uscita usa gli intervalli semiaperti: il match occupa gli indici 1, 2 e 3. L'ultima sequenza è più corta del modello, quindi nessun intervallo va bene. Il formato esatto delle righe viene dalla soluzione del 2025/26: quello di quest'anno va controllato su Moodle.

::: prova Le sequenze `{1, 2, 3, 4}` e `{1, 5, 3, 7}` sono in match con al più 1 errore? E con al più 2?
Differiscono in due posizioni, la 1 e la 3. Con al più 1 errore no; con al più 2 sì.
:::

> [!RICORDA]
> - Match con al più `n` errori: stessa lunghezza, al più `n` posizioni diverse.
> - Cercare un modello in una sequenza: un ciclo sugli intervalli possibili, con `left + patLen <= seqLen`.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `aLen` | «a len» | dimensione: elementi in uso | `aLen = 6` |
| `aCap`, `AMAX` | «a cap», «a max» | capacità: caselle disponibili | `int a[AMAX]` |
| `size_t* p_aLen` | «puntatore alla dimensione» | la funzione può cambiare la dimensione | `riduci(&aLen, a)` |
| `[0, aLen)` | «da zero ad a len escluso» | gli indici validi | con `aLen = 6`: da 0 a 5 |
| `[left, right)` | «da left a right escluso» | un intervallo semiaperto di indici | `[2, 6)`: indici 2, 3, 4, 5 |
| `*p++` | «il valore puntato, poi avanti» | legge e sposta il puntatore | `x = *p++` |
| `(*p)++` | «incrementa il puntato» | cambia il valore, non il puntatore | `(*pStr)++` |
| `pSrc`, `pDst` | «sorgente», «destinazione» | il puntatore che legge e quello che scrive | `*pDst = *pSrc` |
| `int**` | «puntatore a puntatore a intero» | l'indirizzo di un `int*` | `int** pp = &p` |

## Verso l'esame

All'esame si programma al PC con CodeRunner, che compila con `-Wall -Werror` e confronta l'output carattere per carattere. Di questo laboratorio servono:

1. **gli schemi con due indici**: filtro, riduzione sul posto, duplicazione, anche sulle stringhe;
2. **la dimensione che cambia**, passata come puntatore, e la capacità da non superare;
3. **le tre fasi con lo heap**, per le funzioni che restituiscono un array nuovo;
4. **gli intervalli semiaperti**, che tornano nella ricerca binaria e nella ricorsione;
5. **le regole**: una sola `return` nelle funzioni iterative, niente `break`, quindi sentinelle nelle condizioni dei cicli.

### Una domanda sul modello, letta insieme

Viene dal pre-esame 2023/24, dove una funzione doveva filtrare una stringa sul posto con questa regola: un carattere si tiene solo se non compare di nuovo nel resto della stringa. Lì la funzione era ricorsiva; questa è la versione con un ciclo, che è quella di questo laboratorio.

«Scrivere una funzione iterativa `solo_ultime` che modifica sul posto una stringa: un carattere viene mantenuto solo se non esistono altre sue occorrenze nel resto della stringa. La stringa va terminata con il terminatore.»

**In pratica chiede:** `elimina_vocali` con un altro criterio. Il criterio è un «non esiste» sul pezzo di stringa che viene dopo.

```c
// vero se il carattere c compare nella stringa pStr
bool compare_in(const char c, const char* pStr) {
    bool trovato = false;
    while (*pStr != '\0' && !trovato) {
        if (*pStr == c) {
            trovato = true;
        }
        pStr++;
    }
    return trovato;
}

void solo_ultime(char* pStr) {
    const char* pSrc = pStr;
    char* pDst = pStr;
    while (*pSrc != '\0') {
        if (!compare_in(*pSrc, pSrc + 1)) {
            *pDst = *pSrc;
            pDst++;
        }
        pSrc++;
    }
    *pDst = '\0';
}
```

`pSrc + 1` è «il resto della stringa», da passare alla ricerca. Il resto non è ancora stato toccato, perché `pDst` scrive solo in posizioni già lette: per questo si può cercare lì mentre si modifica. Con `"abracadabra"` il risultato è `"cdbra"`; con `"aaa"` è `"a"`; la stringa vuota resta vuota. Provato.

> [!METODO] Un filtro sul posto all'esame
> 1. Due indici, o due puntatori: uno legge, uno scrive, tutti e due dall'inizio.
> 2. Il ciclo avanza sempre con quello che legge.
> 3. Dentro il ciclo: se l'elemento resta, si copia e avanza anche quello che scrive.
> 4. Alla fine si sistema la dimensione: `*p_aLen = j` per un array, il terminatore per una stringa.
> 5. Il criterio complicato va in una funzione a parte.

### Errori da evitare

- Passare la dimensione per valore a una funzione che la deve cambiare.
- Dimenticare il controllo sulla capacità prima di una scrittura, soprattutto della seconda.
- Scrivere `*p++` per incrementare il valore puntato.
- Dimenticare il terminatore dopo aver accorciato una stringa.
- Usare `const char*` per una stringa che la funzione modifica.
- Scrivere `i < right - 1` con indici `size_t`.
- Restituire $-1$ come «non trovato» da una funzione che ritorna `size_t`.
- Dimenticare la `free` di un array costruito da una funzione.

## Quiz

```quiz
D: Dopo `int* a, b;`, di che tipo sono `a` e `b`?
+ `a` è un puntatore a `int`, `b` è un `int`
- sono tutti e due puntatori a `int`
- sono tutti e due `int`
- `a` è un `int`, `b` è un puntatore a `int`
- la riga non compila
= L'asterisco vale solo per il nome che lo segue. La più insidiosa è «sono tutti e due puntatori a `int`»: è quello che la scrittura `int*` fa pensare, ed è il motivo per cui conviene una dichiarazione per riga.

D: `p` punta a un elemento di un array di `int`. Quale istruzione incrementa di uno il valore puntato, senza spostare `p`?
+ `(*p)++;`
- `*p++;`
- `*(p++);`
- `p++;`
- `&p++;`
= Le parentesi fanno applicare il `++` al valore puntato. La più insidiosa è `*p++;`: il `++` ha la precedenza sull'asterisco, quindi sposta il puntatore, come `*(p++);`.

D: Un array ha capacità 10 e dimensione 6. Quali indici sono validi?
+ da 0 a 5
- da 0 a 6
- da 1 a 6
- da 0 a 9
- da 0 a 10
= Gli indici validi vanno da 0 alla dimensione esclusa. La più insidiosa è «da 0 a 9»: quelle caselle esistono tutte, ma dalla 6 in poi il contenuto non fa parte dell'array.

D: Una funzione toglie da un array gli elementi negativi, sul posto. Quale intestazione va bene?
+ `void togli(size_t* p_aLen, int a[])`
- `void togli(size_t aLen, int a[])`
- `void togli(const size_t aLen, const int a[])`
- `void togli(int a[])`
- `void togli(size_t* p_aLen, const int a[])`
= La dimensione cambia, quindi serve un puntatore, e gli elementi vengono spostati, quindi l'array non può essere `const`. La più insidiosa è `void togli(size_t aLen, int a[])`: compila e sposta gli elementi, ma il chiamante non vede la dimensione nuova.

D: Nel filtro `for (size_t iA = 0; iA < aLen && bLen < bCap; iA++)`, a che cosa serve la parte `bLen < bCap`?
+ a fermarsi quando l'array di destinazione è pieno
- a fermarsi quando l'array di partenza è finito
- a saltare gli elementi che non rispettano il criterio
- a inizializzare `bLen`
- a niente: è sempre vera
= `bLen` è la prima casella libera di `b`: quando arriva alla capacità non c'è più posto. La più insidiosa è «a fermarsi quando l'array di partenza è finito»: quello lo fa l'altra metà della condizione, `iA < aLen`.

D: Una funzione costruisce nello heap un array con gli elementi di `b`, due volte quelli pari. Con `b = {2, 5, 8, 8}`, quanti `int` alloca?
N: 7
= Uno per ogni elemento, più uno per ogni pari: $4 + 3 = 7$.

D: Quanti elementi ha l'intervallo semiaperto di indici `[3, 8)`?
N: 5
= `right - left`, cioè $8 - 3$: gli indici 3, 4, 5, 6 e 7.

D: In `elimina_vocali`, che cosa succede se manca l'ultima riga, `*pDst = '\0';`?
+ la stringa continua con i caratteri vecchi fino al terminatore di prima
- la stringa resta uguale a quella di partenza
- il programma non compila
- la stringa diventa vuota
- le vocali tornano al loro posto
= I caratteri tenuti sono stati ricopiati all'inizio, ma senza un terminatore nuovo la stringa finisce dove finiva prima: `"informazione"` diventa `"nfrmznazione"`. La più insidiosa è «la stringa resta uguale a quella di partenza»: i primi caratteri sono già stati sovrascritti.
```

## Esercizi

::: esercizio base Riscaldamento: leggere una dichiarazione
Per ogni riga di' il tipo di ogni variabile: (a) `char* s, c;` (b) `int *p, *q;` (c) `int x, *px = &x;` (d) `int** pp, *p;`
::: soluzione
(a) `s` è un puntatore a `char`, `c` è un `char`. (b) Due puntatori a `int`. (c) `x` è un `int`, `px` è un puntatore a `int` inizializzato con l'indirizzo di `x`. (d) `pp` è un puntatore a puntatore a `int`, `p` è un puntatore a `int`.
:::

::: esercizio base Riscaldamento: aggiungere in fondo
Scrivi `bool aggiungi(size_t* p_aLen, const size_t aCap, int a[], const int x)`, che aggiunge `x` in fondo all'array se c'è posto, e dice se ci è riuscita.
::: soluzione
```c
bool aggiungi(size_t* p_aLen, const size_t aCap, int a[], const int x) {
    bool fatto = false;
    if (*p_aLen < aCap) {
        a[*p_aLen] = x;
        (*p_aLen)++;
        fatto = true;
    }
    return fatto;
}
```
La casella in cui scrivere è proprio la dimensione. Attenzione a `(*p_aLen)++`: senza parentesi si sposterebbe il puntatore.
:::

::: esercizio base Riscaldamento: intervalli
Per un array di dimensione 12: (a) quanti elementi ha `[5, 12)`? (b) quale intervallo indica gli ultimi tre elementi? (c) quali due intervalli dividono l'array a metà?
::: soluzione
(a) Sette. (b) `[9, 12)`. (c) `[0, 6)` e `[6, 12)`: l'indice 6 sta solo nel secondo.
:::

::: esercizio base Riscaldamento: contare le maiuscole
Scrivi `size_t conta_maiuscole(const char* pStr)` usando un puntatore e non un indice.
::: soluzione
```c
size_t conta_maiuscole(const char* pStr) {
    size_t quante = 0;
    while (*pStr != '\0') {
        if (*pStr >= 'A' && *pStr <= 'Z') {
            quante++;
        }
        pStr++;
    }
    return quante;
}
```
Il parametro è `const char*`: la funzione legge soltanto.
:::

::: esercizio medio Togliere i negativi e contarli
Scrivi una funzione che toglie sul posto gli elementi negativi di un array e restituisce quanti ne ha tolti.
::: soluzione
```c
size_t togli_negativi(size_t* p_aLen, int a[]) {
    size_t j = 0;
    for (size_t i = 0; i < *p_aLen; i++) {
        if (a[i] >= 0) {
            a[j] = a[i];
            j++;
        }
    }
    size_t tolti = *p_aLen - j;
    *p_aLen = j;
    return tolti;
}
```
Con `{4, -1, 0, -7, -2, 9, 3, -5}` ne toglie 4 e restano `4 0 9 3`. Il numero dei tolti va calcolato **prima** di aggiornare la dimensione. Provato.
:::

::: esercizio medio La duplicazione nello heap
Scrivi `duplica_heap`, che restituisce un array nuovo con tutti gli elementi di `b`, due volte quelli che rispettano `Cond`.
::: soluzione
```c
int* duplica_heap(const size_t bLen, const int b[], size_t* p_aLen) {
    assert(p_aLen != NULL);
    int* a = NULL;
    *p_aLen = 0;

    size_t count = bLen;
    for (size_t i = 0; i < bLen; i++) {
        if (Cond(b[i])) {
            count++;
        }
    }
    if (count > 0) {
        a = malloc(count * sizeof(int));
    }
    if (a != NULL) {
        size_t j = 0;
        for (size_t i = 0; i < bLen; i++) {
            a[j] = b[i];
            j++;
            if (Cond(b[i])) {
                a[j] = b[i];
                j++;
            }
        }
        *p_aLen = count;
    }
    return a;
}
```
Con `{0, 3, 2, 4, 3}` e il criterio «maggiore o uguale a 3» dà `0 3 3 2 4 4 3 3`, lunghezza 8. Il conteggio parte da `bLen` e non da 0. Provato.
:::

::: esercizio medio Un intervallo è ordinato?
Scrivi `bool intervallo_ordinato(const int a[], size_t left, size_t right)`: vero se gli elementi dell'intervallo sono in ordine non decrescente.
::: soluzione
```c
bool intervallo_ordinato(const int a[], const size_t left, const size_t right) {
    assert(right >= left);
    bool ordinato = true;
    for (size_t i = left; i + 1 < right && ordinato; i++) {
        if (a[i] > a[i + 1]) {
            ordinato = false;
        }
    }
    return ordinato;
}
```
Sull'array della figura è vero per `[2, 5)`, cioè $-3$, 8, 19, e falso per `[2, 6)`, perché dopo il 19 viene il 7. Un intervallo vuoto o con un solo elemento è ordinato. La condizione è `i + 1 < right`, non `i < right - 1`. Provato.
:::

::: esercizio esame Copiare e concatenare senza la libreria
Scrivi `my_strcpy` e `my_strcat` senza `<string.h>`, con i puntatori.
::: soluzione
```c
void my_strcpy(char* pDst, const char* pSrc) {
    while (*pSrc != '\0') {
        *pDst = *pSrc;
        pDst++;
        pSrc++;
    }
    *pDst = '\0';
}

void my_strcat(char* pDst, const char* pSrc) {
    while (*pDst != '\0') {
        pDst++;
    }
    my_strcpy(pDst, pSrc);
}
```
`my_strcat` porta `pDst` sul terminatore della prima stringa e da lì copia la seconda. Copiando `"infor"` e concatenando `"matica"` viene `"informatica"`, di lunghezza 11. Tutte e due danno per scontato che la destinazione abbia spazio a sufficienza: è il chiamante a doverlo garantire. Provato.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra dimensione e capacità?
La capacità è il numero di caselle dell'array e non cambia. La dimensione è il numero di elementi in uso, tra 0 e la capacità.
:::

::: domanda Quando la dimensione va passata come puntatore?
Quando la funzione la cambia: aggiunge o toglie elementi. Se la legge soltanto basta il valore.
:::

::: domanda Perché nella riduzione sul posto non si perde nessun elemento?
Perché l'indice che scrive non supera mai quello che legge: si sovrascrivono solo caselle già lette.
:::

::: domanda Quali sono le tre fasi per costruire un array filtrato nello heap?
Contare quanti elementi avrà, allocare un blocco di quella misura, copiare.
:::

::: domanda Che differenza c'è tra `*p++` e `(*p)++`?
La prima legge il valore puntato e sposta il puntatore. La seconda incrementa il valore puntato e lascia fermo il puntatore.
:::

::: domanda Come si accorcia una stringa sul posto?
Con due puntatori: uno legge tutti i caratteri, l'altro scrive quelli da tenere. Alla fine si scrive il terminatore dove è arrivato il secondo.
:::

::: domanda Che cos'è un intervallo semiaperto di indici, e quanti elementi ha?
L'insieme degli indici dal sinistro compreso al destro escluso. Ha tanti elementi quanti la differenza tra destro e sinistro.
:::

## Glossario

```glossario
Capacità | Numero di caselle di un array: il massimo di elementi che può contenere.
Dimensione | Numero di elementi in uso, nelle prime caselle dell'array.
Filtro selettivo | Copia in un secondo array dei soli elementi che rispettano un criterio.
Riduzione sul posto | Selezione fatta nello stesso array, ricopiando all'inizio gli elementi che restano.
Duplicazione selettiva | Copia in cui gli elementi che rispettano un criterio compaiono due volte.
Puntatore a puntatore | Variabile che contiene l'indirizzo di un puntatore; per gli interi il tipo è int**.
Intervallo semiaperto | Insieme di indici con il sinistro compreso e il destro escluso.
Match con errori | Uguaglianza tra due sequenze della stessa lunghezza, a meno di un numero massimo di posizioni diverse.
```

## Checklist

```checklist
- So leggere una dichiarazione con più nomi e un asterisco.
- So distinguere `*p++` da `(*p)++`.
- So dire quali indici sono validi in un array con dimensione e capacità.
- So scegliere i parametri di una funzione secondo quello che fa all'array.
- So scrivere trasformazione, filtro, riduzione sul posto e duplicazione.
- So dove va il controllo sulla capacità, e perché nella duplicazione compare due volte.
- So costruire un array nello heap in tre fasi e dire chi fa la `free`.
- So scorrere una stringa con un puntatore.
- So togliere caratteri da una stringa sul posto, terminatore compreso.
- So contare gli elementi di un intervallo semiaperto e scorrerlo.
- So cercare una sequenza dentro un'altra, anche con un numero massimo di errori.
```

## Fonti

- Slide «Operazioni su array» (Lezione nº 7 di laboratorio, Lab07), Programmazione I – Laboratorio, canale B, A.A. 2026/27: tre domande sui puntatori (slide 2–7), modello dimensione-capacità (8–12), trasformazione, filtro, riduzione sul posto e duplicazione (13–19), esercizi sugli array statici (20–21), array dinamici e selezione in tre fasi (22–31), stringhe e aritmetica dei puntatori (32–34), elimina caratteri (35–38), intervalli semiaperti (39–45), sottosequenze con errori (46).
- Moodle del corso, settimana del 23 novembre (pagina visibile agli ospiti): i titoli dei quattro esercizi CodeRunner e la data della registrazione del laboratorio.
- Soluzioni di uno studente del 2025/26 per tre esercizi CodeRunner del Lab07: da lì vengono le regole dell'esercizio sulla trasformazione e il formato di ingresso e di uscita. I testi ufficiali, e quelli del 2026/27, non li ho.
- Tutti i programmi li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror`, ed eseguiti sugli esempi citati; i messaggi del compilatore riportati sono quelli veri. Le funzioni, la domanda sul modello, i quiz e gli esercizi sono di questi appunti.
