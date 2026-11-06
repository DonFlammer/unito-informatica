---
corso: PROG1
lezione: 07A
titolo: Algoritmi su array
data: 2026-11-04
docenti: Elvio Amparore
simboli_logici: quantificatori
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 07A
descrizione: >-
  Appunti della lezione 07A di Programmazione I (canale B): ricerca lineare, la ricerca come test d'ipotesi con il
  quantificatore esistenziale, la verifica di una proprietà con il quantificatore universale, il caso dell'array
  vuoto, la selezione con il modello dimensione-capacità, il test di ordinamento sulle coppie adiacenti e il bubble
  sort, con tutti i programmi provati, quiz ed esercizi.
lede: >-
  Cercare un elemento, controllare che tutti gli elementi rispettino una condizione, copiare quelli che la rispettano,
  ordinare: quasi ogni esercizio d'esame su array è fatto di questi pezzi. Amparore li ricava dalla logica, «esiste»
  e «per ogni», e da lì vengono le variabili sentinella, il valore iniziale giusto e il comportamento con l'array vuoto.
materiale: slide
scheda:
  Slide: 07A_algoritmi_su_array («Algoritmi su array. Ricerca, filtro e ordinamento») · 84 pagine
  Lezione: mercoledì 04/11
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 110 minuti, con gcc a portata di mano
fonte: >-
  Slide «Algoritmi su array. Ricerca, filtro e ordinamento» (07A_algoritmi_su_array), Programmazione I – Teoria,
  canale B, A.A. 2026/27
appunti_html: appunti/PROG1/07A_algoritmi_su_array.html
genera_html: true
---

## In breve

- **Ricerca lineare**: si scorre l'array finché si trova `key` o finché l'array finisce. Una variabile sentinella `trovato` parte da `false` e ferma il ciclo; alla fine `i` è la posizione trovata, oppure `aLen` se `key` non c'è.
- Cercare è rispondere a «**esiste** un `i` con `a[i] == key`?». Controllare una proprietà è rispondere a «**per ogni** `i` vale `Cond(a[i])`?». Si parte dall'ipotesi più comoda e si cerca un esempio che la smentisce.
- **Esiste**: la sentinella parte da `false` e diventa `true` al primo testimone. **Per ogni**: parte da `true` e diventa `false` al primo controesempio. In tutti e due i casi il ciclo si ferma subito, e `i` indica l'elemento trovato.
- Con l'**array vuoto** il ciclo non fa nessun giro: «per ogni» resta vero, «esiste» resta falso. Sono le risposte giuste, senza casi speciali.
- **Selezione**: si copiano in un altro array gli elementi che rispettano una condizione. Servono due indici, e il **modello dimensione-capacità**: capacità = posti disponibili, dimensione = posti usati.
- **Ordinato** vuol dire che ogni **coppia adiacente** è in ordine: per ogni `i` in `[1, aLen)`, `a[i-1] <= a[i]`.
- **Bubble sort**: si scorrono le coppie adiacenti e si scambiano quelle in ordine sbagliato; si ripete finché una passata non fa scambi.

> [!CANALI]
> **Canale B.** Lezione di mercoledì 04/11, dalle 9 alle 11, dopo la [06B](06B_chiamata_funzioni.html) del 03/11. Le slide sono molte (84, ma tante sono animazioni): se Amparore non le ha finite, la parte che manca andrà alla lezione di martedì 10/11, e aggiorno qui. Usa i cicli e le sentinelle della [04A](04A_iterazioni.html), gli array della [05A](05A_array_stringhe.html), i puntatori come parametri della [06B](06B_chiamata_funzioni.html) e i quantificatori di [Fondamenti](../FDA/09_quantificatori.html).
>
> **Canali A e C.** Le slide 2026/27 dei canali A e C su questi algoritmi non le ho viste. L'esame è unico.
>
> **Due avvisi sulle slide.** Il primo codice di ricerca (slide 7) non è solo «migliorabile»: se `key` è nell'array **non termina**, perché quando lo trova non incrementa più `i` e il ciclo continua a controllare la stessa casella. L'ho provato con un tempo massimo. Nella slide 49 `int b[bLen] = ...` è uno schema: un array a lunghezza variabile non si può inizializzare con una lista, e gcc dà `variable-sized object may not be initialized except with an empty initializer`.
>
> Tutti i programmi li ho compilati con gcc 16.1, con `-Wall -Werror`, ed eseguiti; quelli con i test `assert` delle slide passano tutti.

## La ricerca lineare (slide 3–9)

Uno sgabuzzino con gli scatoloni numerati da 0 a `aLen - 1`, e un disco in vinile da ritrovare. La strategia: si aprono gli scatoloni in ordine, finché si trova il disco oppure finché sono finiti.

> [!DEF] Ricerca lineare (slide 5)
> Dato un array `a` di lunghezza `aLen` e un valore `key`, alla fine la variabile `i` contiene un indice valido, in `[0, aLen)`, con `a[i] == key`, oppure il **valore sentinella** `i == aLen` se e solo se `key` non c'è.

**Come si legge.** `i` fa due lavori: durante la ricerca scorre l'array, alla fine dice dove si è fermata. Con `a = {6, 12, 4, 9, -1}`: cercando 4 si ferma con `i == 2`; cercando 20 arriva a `i == 5`, che non è un indice valido e quindi vuol dire «non c'è».

Il codice ha bisogno di una seconda variabile, la sentinella `trovato`, che ferma il ciclo:

```c
bool trovato = false;   // ipotesi iniziale: key non c'è
size_t i = 0;           // indice della scansione
while (i < aLen && !trovato) {
    if (a[i] == key) {
        trovato = true; // trovato: il ciclo si ferma con i sulla casella giusta
    } else {
        i++;
    }
}
// trovato == true: i è l'indice della prima occorrenza
// trovato == false: i == aLen, nessuna occorrenza
```

La condizione `i < aLen && !trovato` si legge: «finché `i` è un indice valido e non ho ancora trovato, continua». Il ciclo si ferma per uno dei due motivi, e la variabile `trovato` dice quale.

> [!TRAPPOLA] Il ciclo della slide 7 non finisce
> Nella slide 7 la condizione è solo `i < aLen`. Quando trova `key`, il codice mette `trovato = true` ma non incrementa `i`: al giro dopo ricontrolla la stessa casella, la ritrova, e così per sempre. Con `key = 4` e l'array sopra, l'ho fermato dopo due miliardi di giri con `i == 2`. La versione giusta è quella della slide 8, con `!trovato` nella condizione.

::: prova Con `a = {6, 12, 4, 9, 4}`, dove si ferma la ricerca di 4? E quella di 7?
4: si ferma con `i == 2`, la **prima** occorrenza. 7: arriva a `i == 5`, cioè `aLen`, e `trovato` resta `false`.
:::

> [!RICORDA]
> - Ricerca lineare: sentinella `trovato` da `false`, condizione `i < aLen && !trovato`.
> - Alla fine `i` è la prima occorrenza, oppure `aLen` se non c'è.

## Cercare vuol dire «esiste» (slide 9–18)

La ricerca risponde alla domanda: esiste un indice `i` con `a[i] == key`? Nella notazione di Fondamenti:

$$\exists\, i \in [0, aLen) : a[i] = key$$

Si legge «esiste un `i` tra 0 e `aLen` escluso tale che `a[i]` è uguale a `key`». La ricerca lineare è la versione in codice del quantificatore «esiste» su un array. Al posto di `a[i] == key` si può mettere qualunque condizione `Cond(a[i])`: «esiste un elemento pari», «esiste un negativo».

### Il ragionamento come test d'ipotesi

Amparore ricava il codice dalla formula, con un ragionamento in due ipotesi che si escludono:

- **ipotesi iniziale** $H_0$: nessun elemento soddisfa la condizione. In codice: `esiste = false`;
- **ipotesi alternativa** $H_1$: almeno un elemento la soddisfa.

Si parte da $H_0$ e si cerca un **controesempio** a $H_0$, cioè un elemento che soddisfa `Cond`. Appena lo si trova, $H_0$ è falsa e vale $H_1$: `esiste = true`. Se si arriva in fondo senza trovarlo, si accetta $H_0$.

### Dal quantificatore al codice

Il C non ha un'operazione «esiste». Ma «esiste un elemento che soddisfa `Cond`» è un **OR** di tutte le condizioni, una per elemento:

$$Cond(a[0]) \lor Cond(a[1]) \lor \dots \lor Cond(a[aLen-1])$$

Le slide lo scrivono $\bigvee_{i \in [0, aLen)} Cond(a[i])$, «OR aggregativo». Un OR si calcola con un accumulatore che parte da `false`, il valore che non cambia il risultato:

```c
bool esiste = false;           // H0: nessun elemento soddisfa Cond
size_t i = 0;
while (i < aLen) {
    esiste = esiste || Cond(a[i]);
    i++;
}
```

È giusto, ma guarda sempre tutto l'array. Un OR diventa vero al primo termine vero, e da lì non cambia più. Quindi ci si può fermare al primo indice che soddisfa `Cond`: è il **cortocircuito**, e porta alla versione con la sentinella nella condizione:

```c
bool esiste = false;           // H0: nessun elemento soddisfa Cond
size_t i = 0;
while (i < aLen && !esiste) {  // finché H0 regge e l'array non è finito
    if (Cond(a[i])) {
        esiste = true;         // controesempio a H0: vale H1, e i è il primo indice buono
    } else {
        i++;
    }
}
```

È la ricerca lineare della sezione prima, con `Cond(a[i])` al posto di `a[i] == key`. Per esempio, «esiste un elemento pari»:

```c
bool esistePari = false;
size_t i = 0;
while (i < aLen && !esistePari) {
    if (a[i] % 2 == 0) {
        esistePari = true;     // a[i] è il primo elemento pari
    } else {
        i++;
    }
}
```

::: prova Perché l'accumulatore dell'OR parte da `false` e non da `true`?
Perché `false || x` vale `x`: `false` non cambia il risultato. Partendo da `true` l'OR sarebbe vero comunque, anche con un array senza elementi buoni.
:::

> [!RICORDA]
> - «Esiste» = OR di tutte le condizioni. Sentinella da `false`, diventa `true` al primo testimone.
> - Cortocircuito: ci si ferma al primo testimone, e `i` lo indica.

## Il codice non dice perché funziona (slide 19–22)

Il codice della ricerca è corto, ma dietro c'è un ragionamento che nel codice non si vede. Le slide lo dividono in quattro livelli:

| Livello | Domanda | Per la ricerca |
|---|---|---|
| specifica | che cosa deve fare il programma? | dire se esiste un elemento che soddisfa `Cond` |
| strategia | come raggiungere l'obiettivo? | supporre che non ci sia, poi scorrere finché se ne trova uno |
| ragionamento | perché la strategia è corretta? | `esiste` diventa `true` esattamente quando esiste un `i` con `Cond(a[i])` |
| codice | come si esegue? | le sei righe del ciclo |

Il ragionamento si appoggia a un **invariante**, una proprietà che vale a ogni giro: se `esiste` è vero, allora esiste già un $j$ in $[0, i]$ con $Cond(a[j])$. In parole: quando la sentinella è vera, un testimone c'è davvero, tra le caselle guardate fin qui. Da questo invariante viene la correttezza; la terminazione (il ciclo finisce perché `i` cresce o `esiste` diventa vero) completa il discorso. È la «scomoda verità» della slide 22: il codice mostra come fare, non perché funziona. Commenti, `assert` e specifiche servono a scriverlo.

::: prova Nella ricerca di `key`, qual è la specifica e qual è la strategia?
Specifica: alla fine `i` è la prima posizione di `key`, oppure `aLen` se non c'è. Strategia: supporre che non ci sia e guardare le caselle in ordine finché lo si trova o finiscono.
:::

> [!RICORDA]
> - Specifica, strategia, ragionamento, codice: il codice è solo l'ultimo livello.
> - L'invariante è il pezzo di ragionamento che vale a ogni giro.

## Verificare una proprietà: «per ogni» (slide 23–28)

Il problema gemello: tutti gli elementi soddisfano `Cond`?

$$\forall\, i \in [0, aLen) : Cond(a[i])$$

«Per ogni» è un **AND** di tutte le condizioni. Le ipotesi si scelgono in modo da poter smentire subito l'iniziale:

- **ipotesi iniziale** $H_0$: tutti soddisfano `Cond`. In codice: `tutti = true`;
- **ipotesi alternativa** $H_1$: esiste un elemento che **non** soddisfa `Cond`.

Al primo controesempio, $H_0$ cade. L'accumulatore di un AND parte da `true`, il valore che non cambia il risultato, e con il cortocircuito ci si ferma al primo `false`:

```c
bool tuttiPositivi = true;     // H0: tutti gli elementi sono positivi
size_t i = 0;
while (i < aLen && tuttiPositivi) {
    if (a[i] <= 0) {
        tuttiPositivi = false; // basta un elemento <= 0 per smentire H0
    } else {
        i++;
    }
}
// tuttiPositivi == true: tutti > 0, e i == aLen
// tuttiPositivi == false: i è l'indice del primo elemento <= 0
```

| | «esiste» | «per ogni» |
|---|---|---|
| formula | $\exists\, i : Cond(a[i])$ | $\forall\, i : Cond(a[i])$ |
| operazione | OR di tutte le condizioni | AND di tutte le condizioni |
| sentinella iniziale | `false` | `true` |
| il ciclo continua finché | `!esiste` | `tutti` |
| si ferma su | il primo elemento che soddisfa | il primo elemento che **non** soddisfa |

::: prova Scrivi la condizione del ciclo e il test dentro il ciclo per «tutti gli elementi sono minori di 100».
Condizione `i < aLen && tutti`; dentro, `if (a[i] >= 100) { tutti = false; } else { i++; }`. Si cerca il controesempio, cioè la negazione di `a[i] < 100`.
:::

> [!RICORDA]
> - «Per ogni» = AND. Sentinella da `true`, diventa `false` al primo controesempio.
> - Dentro il ciclo si controlla la condizione **negata**.

## L'array vuoto (slide 29–36)

Una funzione deve dare una risposta per tutti gli input ammessi, anche quelli limite. Che cosa vuol dire «tutti gli elementi soddisfano `Cond`» quando gli elementi non ci sono?

- «Per ogni» è falso solo se c'è un **controesempio**. In un array vuoto non ce ne sono. Quindi «per ogni» sul dominio vuoto è **vero**: si chiama **vero per vacuità**.
- «Esiste» è vero solo se c'è un **testimone**. In un array vuoto non ce ne sono. Quindi «esiste» sul dominio vuoto è **falso**.

Il codice dà già le risposte giuste: con `aLen == 0` il ciclo non fa nessun giro, e la sentinella resta al valore iniziale.

| Quantificatore | Sul dominio vuoto | Perché | Valore iniziale della sentinella |
|---|---|---|---|
| per ogni, AND | vero | nessun controesempio | `true` |
| esiste, OR | falso | nessun testimone | `false` |

Questo è il motivo profondo per cui le sentinelle partono da quei valori: **il valore iniziale è la risposta giusta per l'array vuoto**. Se lo è, il caso vuoto non richiede un `if` a parte.

```grafico
titolo: Le due sentinelle. In alto «esiste»: parte da false e diventa true al primo testimone (in verde). In basso «per ogni»: parte da true e diventa false al primo controesempio (in rosa). In tutti e due i casi il ciclo si ferma lì, e con l'array vuoto la sentinella resta com'era
x: 0 12.4
y: 0 5
assi: no
griglia: no
proporzioni: libere
testo: 1.3 4.1 | blu | "esiste pari?"
poligono: 3.0 3.7 4.4 3.7 4.4 4.5 3.0 4.5 | grigio
testo: 3.7 4.1 | grigio | "7"
poligono: 4.4 3.7 5.8 3.7 5.8 4.5 4.4 4.5 | grigio
testo: 5.1 4.1 | grigio | "3"
poligono: 5.8 3.7 7.2 3.7 7.2 4.5 5.8 4.5 | verde | pieno
testo: 6.5 4.1 | verde | "8"
poligono: 7.2 3.7 8.6 3.7 8.6 4.5 7.2 4.5 | grigio | tratteggio
testo: 7.9 4.1 | grigio | "5"
testo: 10.5 4.1 | verde | "true, i = 2"
testo: 1.3 3.1 | grigio | "false → false → true: stop"
testo: 1.3 1.9 | blu | "tutti positivi?"
poligono: 3.0 1.5 4.4 1.5 4.4 2.3 3.0 2.3 | grigio
testo: 3.7 1.9 | grigio | "5"
poligono: 4.4 1.5 5.8 1.5 5.8 2.3 4.4 2.3 | rosa | pieno
testo: 5.1 1.9 | rosa | "-1"
poligono: 5.8 1.5 7.2 1.5 7.2 2.3 5.8 2.3 | grigio | tratteggio
testo: 6.5 1.9 | grigio | "4"
poligono: 7.2 1.5 8.6 1.5 8.6 2.3 7.2 2.3 | grigio | tratteggio
testo: 7.9 1.9 | grigio | "9"
testo: 10.5 1.9 | rosa | "false, i = 1"
testo: 1.3 0.9 | grigio | "true → false: stop"
testo: 6.2 0.25 | grigio | "tratteggiate: caselle mai guardate"
```

::: prova Un array è vuoto. Che cosa rispondono «tutti gli elementi sono pari» ed «esiste un elemento pari»?
Il primo **vero** (nessun controesempio), il secondo **falso** (nessun testimone). Il codice con le sentinelle lo fa da solo.
:::

> [!RICORDA]
> - Dominio vuoto: «per ogni» vero, «esiste» falso.
> - La sentinella parte dalla risposta giusta per il caso vuoto.

## Due funzioni con il risultato in più (slide 37–39)

Le slide chiedono di trasformare i due cicli in funzioni che restituiscono la risposta con `return` e l'indice trovato attraverso un puntatore, come nella [06B](06B_chiamata_funzioni.html). Le precondizioni: se `aLen > 0` allora `a != NULL`, e il puntatore per l'indice non è `NULL`.

```c
#include <stdbool.h>
#include <stddef.h>

// true se e solo se a[i] > 0 per ogni i in [0, aLen);
// in *firstBad il primo indice con a[i] <= 0, oppure aLen
bool tuttiPositivi(const int a[], size_t aLen, size_t *firstBad) {
    bool tutti = true;
    size_t i = 0;
    while (i < aLen && tutti) {
        if (a[i] <= 0) {
            tutti = false;
        } else {
            i++;
        }
    }
    *firstBad = i;
    return tutti;
}

// true se e solo se esiste i in [0, aLen) con a[i] pari;
// in *firstEven il primo indice pari, oppure aLen
bool esistePari(const int a[], size_t aLen, size_t *firstEven) {
    bool esiste = false;
    size_t i = 0;
    while (i < aLen && !esiste) {
        if (a[i] % 2 == 0) {
            esiste = true;
        } else {
            i++;
        }
    }
    *firstEven = i;
    return esiste;
}
```

Le slide danno anche i test, con `assert`. Li ho eseguiti tutti e passano:

| Chiamata | Risultato | Indice |
|---|---|---|
| `tuttiPositivi(NULL, 0, &idx)` | `true` | 0 |
| `tuttiPositivi({1, 2, 3}, 3, &idx)` | `true` | 3 |
| `tuttiPositivi({5, 4, -1, 7}, 4, &idx)` | `false` | 2 |
| `esistePari(NULL, 0, &idx)` | `false` | 0 |
| `esistePari({1, 3, 5, 7}, 4, &idx)` | `false` | 4 |
| `esistePari({1, 3, -6}, 3, &idx)` | `true` | 2 |

Nell'ultima riga, `-6 % 2` vale 0: anche i negativi pari passano il test `% 2 == 0`. Attenzione invece a `x % 2 == 1` per i dispari: con `-7` vale `-1`, come nella [03C](03C_booleani.html).

::: prova Come si chiama `tuttiPositivi` su un array `v` di 4 elementi, e dove si legge l'indice del primo elemento non positivo?
`size_t idx; bool ok = tuttiPositivi(v, 4, &idx);`: la risposta è in `ok`, l'indice in `idx`. Si passa `&idx` perché la funzione deve scriverci.
:::

> [!RICORDA]
> - Risposta con `return`, indice con un puntatore. Una sola `return`.

## Selezione, dimensione e capacità (slide 40–54)

**Selezione** (o filtro, o copia con filtro): da un array `b` si copiano in un altro array `a` tutti e soli gli elementi che soddisfano `Cond`, nello stesso ordine.

L'esempio delle slide: `b = {18, 9, 30}`, e si copiano gli elementi maggiori o uguali a 18.

```grafico
titolo: Selezione con il modello dimensione-capacità: da `b = {18, 9, 30}` si copiano in `a` gli elementi maggiori o uguali a 18. Due indici: `i` scorre `b`, `aLen` dice dove scrivere in `a`. Alla fine `aLen` vale 2: le celle `[0, 2)` sono valide, la cella 2 resta libera
x: 0 12.4
y: 0 4.4
assi: no
griglia: no
proporzioni: libere
poligono: 1.60 2.90 3.00 2.90 3.00 3.70 1.60 3.70 | blu | pieno
testo: 2.30 3.30 | blu | "18"
testo: 2.30 3.95 | grigio | "b[0]"
poligono: 1.60 0.60 3.00 0.60 3.00 1.40 1.60 1.40 | verde | pieno
testo: 2.30 1.00 | verde | "18"
testo: 2.30 0.3 | grigio | "a[0]"
poligono: 3.00 2.90 4.40 2.90 4.40 3.70 3.00 3.70 | blu
testo: 3.70 3.30 | blu | "9"
testo: 3.70 3.95 | grigio | "b[1]"
poligono: 3.00 0.60 4.40 0.60 4.40 1.40 3.00 1.40 | verde | pieno
testo: 3.70 1.00 | verde | "30"
testo: 3.70 0.3 | grigio | "a[1]"
poligono: 4.40 2.90 5.80 2.90 5.80 3.70 4.40 3.70 | blu | pieno
testo: 5.10 3.30 | blu | "30"
testo: 5.10 3.95 | grigio | "b[2]"
poligono: 4.40 0.60 5.80 0.60 5.80 1.40 4.40 1.40 | grigio
testo: 5.10 1.00 | grigio | "?"
testo: 5.10 0.3 | grigio | "a[2]"
testo: 0.7 3.3 | blu | "b"
testo: 0.7 1.0 | verde | "a"
freccia: 2.30 2.85 2.30 1.45 | verde
freccia: 5.10 2.85 3.70 1.45 | verde
testo: 7.4 3.3 | grigio | e | "9 < 18: non passa il filtro"
testo: 7.4 1.0 | grigio | e | "aLen = 2, aCap = 3"
```

Gli elementi copiati **non hanno lo stesso indice** in `a` e in `b`: il 30 è `b[2]` ma diventa `a[1]`. Servono due indici: `i` scorre `b`, un secondo indice dice dove scrivere in `a`. Alla fine quel secondo indice è proprio il numero di elementi copiati.

### Capacità e dimensione

`a` deve avere posto per il caso peggiore, in cui tutti passano il filtro: qui 3. Dopo la selezione ne sono usati solo 2. Due concetti diversi:

- **capacità**: quanti elementi l'array può contenere (`AMAX` o `aCap`);
- **dimensione**: quanti elementi validi contiene ora (`aLen`).

Gli indici `[0, aLen)` sono gli elementi validi, `[aLen, aCap)` i posti liberi, e sempre $0 \le aLen \le aCap$. `aLen` fa da cursore: si aggiunge un elemento in fondo scrivendo in `a[aLen]` e incrementando `aLen`.

```c
// a ha capacità aCap e all'inizio è vuoto
size_t aLen = 0;
for (size_t i = 0; i < bLen && aLen < aCap; i++) {
    if (Cond(b[i])) {
        a[aLen] = b[i];   // copia nel primo posto libero
        aLen++;
    }
}
// aLen è il numero di elementi copiati
```

La capacità si può fissare con `#define AMAX ...` e `int a[AMAX]`, oppure tenere in una variabile `aCap` con un VLA `int a[aCap]`.

### Passare a una funzione un array con dimensione e capacità

- Se la funzione **non cambia** la dimensione, basta `size_t aLen, int a[]`, come un array normale.
- Se la funzione **cambia** la dimensione, riceve `size_t *p_aLen, size_t aCap, int a[]`: la capacità per sapere fin dove può scrivere, e la dimensione **per puntatore**, per comunicarla al chiamante.

### L'esercizio selectInRange (slide 51–54)

Copiare in `a` gli elementi di `b` compresi in `[minVal, maxVal]`; restituire `false` se la capacità non basta (copiando comunque quello che ci sta), `true` altrimenti.

```c
bool selectInRange(size_t bLen, const int b[],
                   size_t aCap, size_t *p_aLen, int a[],
                   int minVal, int maxVal) {
    size_t aLen = 0;
    bool overflow = false;
    size_t i = 0;
    while (i < bLen && !overflow) {
        if (minVal <= b[i] && b[i] <= maxVal) {
            if (aLen < aCap) {
                a[aLen] = b[i];
                aLen++;
            } else {
                overflow = true;   // un elemento buono che non ci sta
            }
        }
        i++;
    }
    *p_aLen = aLen;
    return !overflow;
}
```

Passa tutti i test della slide 54: intervallo che non seleziona niente (`aLen == 0`), selezione di `{0, 2, 2}` da `{-3, 0, 2, 2, 8}`, overflow con capacità 2 (copia `{1, 2}` e restituisce `false`), array vuoto. Ho aggiunto un caso limite: capacità piena esattamente, `{1, 50, 2}` con capacità 2 e intervallo `[0, 10]`, che deve dare `true`. Lo dà, perché `overflow` diventa vero solo se arriva un elemento buono quando non c'è più posto.

::: prova Perché nel ciclo della selezione la condizione contiene anche `aLen < aCap`?
Per non scrivere oltre la fine di `a`: con `aLen == aCap` l'array è pieno, e `a[aLen]` sarebbe fuori dai limiti.
:::

> [!RICORDA]
> - Selezione: due indici, `i` su `b` e `aLen` su `a`.
> - Capacità = posti, dimensione = posti usati, $0 \le aLen \le aCap$.
> - Se una funzione cambia la dimensione, la riceve per puntatore.

## Il test di ordinamento (slide 55–64)

`a = {2, 4, 4, 6, 9}` è ordinato in modo **non decrescente**: $2 \le 4 \le 4 \le 6 \le 9$. «Non decrescente» e non «crescente» perché ci sono due 4. Ordinato non è una proprietà di un elemento da solo: è una proprietà delle **coppie adiacenti**.

Per le coppie si usa l'indice del secondo elemento: la coppia `i` è `(a[i-1], a[i])`, con `i` in `[1, aLen)`.

```grafico
titolo: Indici degli elementi e indici delle coppie. Con 5 elementi le coppie adiacenti sono 4, e la coppia numero `i` è `(a[i-1], a[i])`: gli indici delle coppie vanno da 1 a `aLen - 1`, cioè l'intervallo `[1, aLen)`
x: 0 12.4
y: 0 3.6
assi: no
griglia: no
proporzioni: libere
poligono: 1.60 1.80 3.20 1.80 3.20 2.60 1.60 2.60 | blu | pieno
testo: 2.40 2.20 | blu | "2"
testo: 2.40 2.95 | grigio | "0"
poligono: 3.20 1.80 4.80 1.80 4.80 2.60 3.20 2.60 | blu | pieno
testo: 4.00 2.20 | blu | "4"
testo: 4.00 2.95 | grigio | "1"
poligono: 4.80 1.80 6.40 1.80 6.40 2.60 4.80 2.60 | blu | pieno
testo: 5.60 2.20 | blu | "4"
testo: 5.60 2.95 | grigio | "2"
poligono: 6.40 1.80 8.00 1.80 8.00 2.60 6.40 2.60 | blu | pieno
testo: 7.20 2.20 | blu | "6"
testo: 7.20 2.95 | grigio | "3"
poligono: 8.00 1.80 9.60 1.80 9.60 2.60 8.00 2.60 | blu | pieno
testo: 8.80 2.20 | blu | "9"
testo: 8.80 2.95 | grigio | "4"
segmento: 2.40 1.6 2.40 1.3 | ambra
segmento: 4.00 1.6 4.00 1.3 | ambra
segmento: 2.40 1.3 4.00 1.3 | ambra
testo: 3.20 0.9 | ambra | "1"
segmento: 4.00 1.6 4.00 1.3 | ambra
segmento: 5.60 1.6 5.60 1.3 | ambra
segmento: 4.00 1.3 5.60 1.3 | ambra
testo: 4.80 0.9 | ambra | "2"
segmento: 5.60 1.6 5.60 1.3 | ambra
segmento: 7.20 1.6 7.20 1.3 | ambra
segmento: 5.60 1.3 7.20 1.3 | ambra
testo: 6.40 0.9 | ambra | "3"
segmento: 7.20 1.6 7.20 1.3 | ambra
segmento: 8.80 1.6 8.80 1.3 | ambra
segmento: 7.20 1.3 8.80 1.3 | ambra
testo: 8.00 0.9 | ambra | "4"
testo: 0.6 2.95 | grigio | "elementi"
testo: 0.6 0.9 | ambra | "coppie"
```

Con $N \ge 1$ elementi le coppie sono $N - 1$; con 0 o 1 elemento non ce ne sono. Ordinato diventa una proprietà «per ogni»:

$$\forall\, i \in [1, aLen) : a[i-1] \le a[i]$$

e non ordinato vuol dire che esiste un controesempio, una coppia con `a[i-1] > a[i]`. Con 0 o 1 elemento non ci sono coppie, quindi niente controesempi: **un array vuoto o di un elemento è ordinato**, per vacuità, senza casi speciali.

```c
bool ordinatoNonDecr(size_t aLen, const int a[]) {
    bool ordinato = true;          // all'inizio supponiamo che sia ordinato
    size_t i = 1;                  // i indica la coppia (a[i-1], a[i])
    while (i < aLen && ordinato) {
        if (a[i - 1] > a[i]) {
            ordinato = false;      // coppia fuori ordine: controesempio
        } else {
            i++;
        }
    }
    return ordinato;
}
```

`{2, 4, 4, 7}` dà `true` (tre coppie in ordine); `{2, 5, 3, 7}` dà `false` alla seconda coppia, 5 > 3; l'array vuoto dà `true`.

> [!TRAPPOLA] i <= aLen - 1 con size_t
> L'intervallo `[1, aLen)` diventa `for (size_t i = 1; i < aLen; i++)`, che va bene anche con `aLen` pari a 0 o 1. Scrivere invece `i <= aLen - 1` è un errore: `aLen` è `size_t`, senza segno, e con `aLen == 0` il conto `aLen - 1` non dà −1 ma **18446744073709551615** (l'ho stampato). Il ciclo partirebbe e leggerebbe fuori dall'array. Gli intervalli semiaperti con `<` evitano il problema.

::: prova `{3, 3, 3}` è ordinato in modo non decrescente? E in modo crescente?
Non decrescente sì: ogni coppia ha `a[i-1] <= a[i]`. Crescente, cioè con `<`, no: $3 < 3$ è falso.
:::

> [!RICORDA]
> - Ordinato = per ogni coppia adiacente `a[i-1] <= a[i]`, con `i` in `[1, aLen)`.
> - Vuoto e un elemento: ordinati. Mai `i <= aLen - 1` con `size_t`.

## Bubble sort (slide 64–84)

Il test di ordinamento trova la prima coppia fuori ordine e si ferma. Il **bubble sort**, ordinamento a bolle, usa la stessa coppia in modo diverso: quando la trova, la **corregge** scambiando i due elementi, e va avanti.

> [!DEF] Bubble sort (slide 66–68)
> Algoritmo di ordinamento **sul posto** (modifica l'array, senza copiarlo in un altro) fatto di **fasi**. In ogni fase, per ogni `i` in `[1, aLen)`, si confronta la coppia `(a[i-1], a[i])` e la si scambia se `a[i-1] > a[i]`. Se una fase ha fatto almeno uno scambio, si fa un'altra fase; se non ne ha fatto nessuno, l'array è ordinato e l'algoritmo termina.

**Come si legge.** Una fase senza scambi è un test di ordinamento che non ha trovato controesempi: tutte le coppie sono in ordine. Una fase con scambi ha trovato e corretto almeno un controesempio, quindi l'array è cambiato e va ricontrollato.

L'esempio della slide 69, con `{6, 2, -8, 10, 4}`:

```grafico
titolo: Il bubble sort della slide 69 su `{6, 2, -8, 10, 4}`, una riga per fase. In ogni fase si confrontano le coppie adiacenti da sinistra a destra e si scambiano quelle in ordine sbagliato. Alla fine di ogni fase il più grande dei rimasti è arrivato in fondo (in verde). Nella terza fase non c'è nessuno scambio: l'array è ordinato
x: 0 12.4
y: 0 4.4
assi: no
griglia: no
proporzioni: libere
poligono: 5.60 3.40 6.70 3.40 6.70 4.10 5.60 4.10 | blu
testo: 6.15 3.75 | blu | "6"
poligono: 6.70 3.40 7.80 3.40 7.80 4.10 6.70 4.10 | blu
testo: 7.25 3.75 | blu | "2"
poligono: 7.80 3.40 8.90 3.40 8.90 4.10 7.80 4.10 | blu
testo: 8.35 3.75 | blu | "-8"
poligono: 8.90 3.40 10.00 3.40 10.00 4.10 8.90 4.10 | blu
testo: 9.45 3.75 | blu | "10"
poligono: 10.00 3.40 11.10 3.40 11.10 4.10 10.00 4.10 | blu
testo: 10.55 3.75 | blu | "4"
testo: 5.3 3.75 | grigio | o | "inizio"
poligono: 5.60 2.40 6.70 2.40 6.70 3.10 5.60 3.10 | blu
testo: 6.15 2.75 | blu | "2"
poligono: 6.70 2.40 7.80 2.40 7.80 3.10 6.70 3.10 | blu
testo: 7.25 2.75 | blu | "-8"
poligono: 7.80 2.40 8.90 2.40 8.90 3.10 7.80 3.10 | blu
testo: 8.35 2.75 | blu | "6"
poligono: 8.90 2.40 10.00 2.40 10.00 3.10 8.90 3.10 | blu
testo: 9.45 2.75 | blu | "4"
poligono: 10.00 2.40 11.10 2.40 11.10 3.10 10.00 3.10 | verde | pieno
testo: 10.55 2.75 | verde | "10"
testo: 5.3 2.75 | grigio | o | "dopo la fase 1"
poligono: 5.60 1.40 6.70 1.40 6.70 2.10 5.60 2.10 | blu
testo: 6.15 1.75 | blu | "-8"
poligono: 6.70 1.40 7.80 1.40 7.80 2.10 6.70 2.10 | blu
testo: 7.25 1.75 | blu | "2"
poligono: 7.80 1.40 8.90 1.40 8.90 2.10 7.80 2.10 | blu
testo: 8.35 1.75 | blu | "4"
poligono: 8.90 1.40 10.00 1.40 10.00 2.10 8.90 2.10 | verde | pieno
testo: 9.45 1.75 | verde | "6"
poligono: 10.00 1.40 11.10 1.40 11.10 2.10 10.00 2.10 | verde | pieno
testo: 10.55 1.75 | verde | "10"
testo: 5.3 1.75 | grigio | o | "dopo la fase 2"
poligono: 5.60 0.40 6.70 0.40 6.70 1.10 5.60 1.10 | verde | pieno
testo: 6.15 0.75 | verde | "-8"
poligono: 6.70 0.40 7.80 0.40 7.80 1.10 6.70 1.10 | verde | pieno
testo: 7.25 0.75 | verde | "2"
poligono: 7.80 0.40 8.90 0.40 8.90 1.10 7.80 1.10 | verde | pieno
testo: 8.35 0.75 | verde | "4"
poligono: 8.90 0.40 10.00 0.40 10.00 1.10 8.90 1.10 | verde | pieno
testo: 9.45 0.75 | verde | "6"
poligono: 10.00 0.40 11.10 0.40 11.10 1.10 10.00 1.10 | verde | pieno
testo: 10.55 0.75 | verde | "10"
testo: 5.3 0.75 | grigio | o | "fase 3: nessuno scambio"
```

1. **Fase 1**: 6 e 2 si scambiano, poi 6 e −8, poi 6 e 10 restano, poi 10 e 4 si scambiano: `{2, -8, 6, 4, 10}`. Il 10, il più grande, è «salito» in fondo come una bolla.
2. **Fase 2**: 2 e −8 si scambiano, 6 e 4 si scambiano: `{-8, 2, 4, 6, 10}`.
3. **Fase 3**: nessuno scambio. Ordinato.

Lo scambio è la `swap` con i puntatori della [06B](06B_chiamata_funzioni.html):

```c
#include <stdio.h>
#include <stdbool.h>

void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

void bubbleSort(const size_t aLen, int a[]) {
    bool ordinato = false;
    while (!ordinato) {
        ordinato = true;                 // nuova fase: ipotesi «è ordinato»
        for (size_t i = 1; i < aLen; i++) {
            if (a[i-1] > a[i]) {
                swap(&a[i-1], &a[i]);    // controesempio trovato e corretto
                ordinato = false;        // servirà un'altra fase
            }
        }
    }
}

#define LEN 5
int main(void) {
    int v[LEN] = {6, 2, -8, 10, 4};
    bubbleSort(LEN, v);
    printf("Array ordinato:\n");
    for (size_t i = 0; i < LEN; i++) {
        printf("%d ", v[i]);
    }
    printf("\n");
}
```

Stampa `-8 2 4 6 10`. La variabile `ordinato` è una sentinella per l'**uscita anticipata**: senza, bisognerebbe fare sempre `aLen - 1` fasi, che bastano sempre. Con la sentinella, un array già ordinato richiede una fase sola; il caso peggiore, un array decrescente, ne richiede `aLen` (con `{6, 5, 4, 3, 2, 1}` ne ho contate 6: cinque con scambi e l'ultima di controllo).

### Il bubble sort in memoria (slide 74–82)

Le slide seguono la prima fase su `{6, 2, -8}` con lo stack della 06B. Le cose da notare:

- `bubbleSort` riceve in `a` l'**indirizzo** di `v`, non una copia: gli scambi cambiano proprio `v` nel frame di `main`;
- `swap(&a[0], &a[1])` crea un terzo frame, con `x` e `y` che puntano a due celle di `v`, e `temp = 6`;
- dopo `*x = *y` e `*y = temp`, `v` diventa `{2, 6, -8}`; il frame di `swap` sparisce e `bubbleSort` mette `ordinato = false`.

### Il test d'ipotesi dentro il bubble sort (slide 83)

Ogni fase è un test d'ipotesi: $H_0$ = «ogni coppia è in ordine», cioè `ordinato = true` all'inizio della fase; $H_1$ = «esiste una coppia fuori ordine», che la scansione cerca. La differenza con `ordinatoNonDecr`: la fase non si ferma al primo controesempio, lo corregge e continua.

::: prova Quante fasi fa il bubble sort su `{1, 2, 3, 4}`? E su `{2, 1, 3, 4}`?
Su `{1, 2, 3, 4}` una: nessuno scambio, ordinato subito. Su `{2, 1, 3, 4}` due: la prima scambia 2 e 1, la seconda non trova niente.
:::

> [!RICORDA]
> - Bubble sort: fasi di confronti e scambi tra coppie adiacenti, finché una fase non scambia niente.
> - Dopo ogni fase il più grande dei rimasti è in fondo.
> - La sentinella `ordinato` permette di fermarsi appena l'array è ordinato.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\exists\, i \in [0, n) : C$ | «esiste un `i` tra 0 e `n` escluso per cui vale C» | almeno un elemento soddisfa C | ricerca lineare |
| $\forall\, i \in [0, n) : C$ | «per ogni `i` tra 0 e `n` escluso vale C» | tutti gli elementi soddisfano C | `tuttiPositivi` |
| $\bigvee_i C_i$ | «OR di tutte le $C_i$» | vero se almeno una è vera | sentinella da `false` |
| $\bigwedge_i C_i$ | «AND di tutte le $C_i$» | vero se tutte sono vere | sentinella da `true` |
| $H_0$, $H_1$ | «acca zero», «acca uno» | ipotesi iniziale e alternativa | `esiste = false` è $H_0$ |
| `aLen`, `aCap` | «dimensione», «capacità» | posti usati e posti disponibili | $0 \le aLen \le aCap$ |
| `[1, aLen)` | «da 1 ad `aLen` escluso» | indici delle coppie adiacenti | `for (size_t i = 1; i < aLen; i++)` |

## Verso l'esame

All'esame, l'esercizio di programmazione iterativa (`e1`) chiede quasi sempre di controllare una proprietà con «per ogni» ed «esiste», a volte annidati, e di restituire un risultato. Le regole d'esame vietano `break`: il ciclo si ferma con la sentinella nella condizione, come in tutta questa lezione. Di questa lezione servono:

1. **tradurre la consegna in una formula** con «per ogni» ed «esiste», prima di scrivere il codice;
2. **il valore iniziale delle sentinelle**: `true` per «per ogni», `false` per «esiste», che danno da sole la risposta giusta sull'array vuoto;
3. **la sentinella nella condizione del ciclo**, niente `break`, una sola `return`;
4. **gli intervalli semiaperti** `[0, aLen)` e `[1, aLen)` con `<`;
5. **dimensione e capacità** quando la funzione riempie un array.

### Una domanda vera, letta insieme

*Pre-esame 2023/24, esercizio iterativo.* «Scrivere una funzione iterativa `e1` che riceve una matrice irregolare (`rows`, `cols`, `mat`, `rags`) di interi; `e1` determina se le righe sono tutte lunghe almeno quanto `rows` e se in ciascuna riga esiste un elemento multiplo di 7. In questo caso ritorna la somma dei primi multipli di 7 (quelli più a sinistra) di ciascuna riga, altrimenti ritorna 0.» `rags[i]` è la lunghezza della riga `i`.

**In pratica chiede**: per ogni riga, la riga è lunga almeno `rows` **ed** esiste un multiplo di 7. Un «per ogni» con dentro un «esiste»: le due sentinelle di questa lezione, una dentro l'altra.

**Soluzione.**

1. Sentinella esterna `ok = true` («per ogni riga»), condizione `i < rows && ok`.
2. Per ogni riga, `ok = rags[i] >= rows`, poi la sentinella interna `found = false` («esiste un multiplo di 7»), condizione `j < rags[i] && ok && !found`.
3. Al primo multiplo di 7 lo si somma e si mette `found = true`: è il più a sinistra.
4. Dopo la riga, `ok = ok && found`.
5. Alla fine, se `ok` è falso il risultato è 0. Una sola `return`.

```c
int e1(size_t rows, size_t cols, const int mat[rows][cols], const size_t rags[rows]) {
    int sum = 0;
    bool ok = true;                        // "per ogni riga": parte da true
    for (size_t i = 0; i < rows && ok; i++) {
        ok = rags[i] >= rows;
        bool found = false;                // "esiste un multiplo di 7": parte da false
        for (size_t j = 0; j < rags[i] && ok && !found; j++) {
            if (mat[i][j] % 7 == 0) {
                sum = sum + mat[i][j];
                found = true;
            }
        }
        ok = ok && found;
    }
    if (!ok) {
        sum = 0;
    }
    return sum;                            // una sola return
}
```

La soluzione viene dalla [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md), dove è provata: con `rows == 0` dà 0, perché «per ogni» è vero sul vuoto e la somma vuota è 0. Le matrici si fanno più avanti nel corso; lo schema delle sentinelle è già tutto qui.

> [!METODO] Da «per ogni» ed «esiste» al ciclo
> 1. Scrivi la proprietà con le parole «per ogni» ed «esiste», e l'intervallo degli indici.
> 2. Per ogni quantificatore una sentinella: `true` per «per ogni», `false` per «esiste».
> 3. Condizione del ciclo: `i < n &&` sentinella (`tutti`, oppure `!esiste`).
> 4. Nel corpo: per «per ogni» cerca la condizione **negata**, per «esiste» la condizione; quando la trovi, cambia la sentinella e non incrementare `i`, se ti serve la posizione.
> 5. Controlla a mano il caso vuoto: la sentinella deve già essere la risposta giusta.

## Quiz

```quiz
D: Che valore iniziale deve avere la sentinella per «tutti gli elementi sono pari»?
+ `true`
- `false`
- 0
- `aLen`
- dipende dal primo elemento
= «Per ogni» è un AND, e si cerca un controesempio: si parte da vero. Sull'array vuoto la risposta giusta è proprio vero. La più insidiosa è «dipende dal primo elemento»: inizializzare con `a[0] % 2 == 0` rompe il caso vuoto.

D: Con `a = {6, 12, 4, 9, -1}` e `key = 20`, quanto vale `i` alla fine della ricerca lineare?
+ 5
- 4
- -1
- 0
- non è definito
= `key` non c'è: il ciclo arriva a `i == aLen`, il valore sentinella. La più insidiosa è −1, che altri linguaggi usano per «non trovato»: qui `i` è `size_t` e il segnale è `aLen`.

D: Che cosa risponde «esiste un elemento negativo» su un array vuoto?
+ falso, perché non c'è nessun testimone
- vero, per vacuità
- dipende da come è scritto il ciclo
- la funzione deve segnalare un errore
- non si può dire
= «Esiste» è vero solo con un testimone. La più insidiosa è «vero, per vacuità»: la verità per vacuità vale per «per ogni».

D: Perché il ciclo della slide 7 (condizione solo `i < aLen`, e `i++` solo nel ramo `else`) è sbagliato?
+ se trova `key` non termina più
- non trova mai l'ultima occorrenza
- legge fuori dall'array
- non compila
- restituisce sempre `aLen`
= Quando trova `key` mette `trovato = true` ma non avanza, e la condizione resta vera: ricontrolla la stessa casella all'infinito. La più insidiosa è «legge fuori dall'array»: `i` non supera mai `aLen - 1`.

D: Che cosa succede con `for (size_t i = 1; i <= aLen - 1; i++)` e `aLen == 0`?
+ `aLen - 1` vale un numero enorme e il ciclo legge fuori dall'array
- il ciclo non fa nessun giro
- il ciclo fa un giro solo
- non compila con `-Wall -Werror`
- `aLen - 1` vale −1 e il ciclo si ferma
= `size_t` non ha segno: 0 − 1 dà 18446744073709551615. La più insidiosa è l'ultima, che sarebbe vera con un `int`.

D: Quante fasi fa il bubble sort con la sentinella su `{6, 2, -8, 10, 4}`?
+ 3
- 2
- 4
- 5
- 1
= Due fasi con scambi e una senza, che conferma l'ordine. La più insidiosa è 2: dopo la seconda fase l'array è ordinato, ma l'algoritmo lo scopre solo con la terza.

D: Una funzione riempie un array `a` con dimensione e capacità. Quale intestazione permette al chiamante di conoscere la nuova dimensione?
+ `void f(size_t *p_aLen, size_t aCap, int a[])`
- `void f(size_t aLen, size_t aCap, int a[])`
- `void f(size_t aCap, int a[])`
- `void f(const size_t *p_aLen, size_t aCap, int a[])`
- `void f(size_t aLen, const int a[])`
= La dimensione cambia, quindi passa per puntatore. La più insidiosa è la quarta: con `const` la funzione non potrebbe scrivere in `*p_aLen`.

D: Dopo la prima fase del bubble sort, quale elemento è sicuramente al suo posto finale?
+ il più grande, nell'ultima casella
- il più piccolo, nella prima casella
- nessuno
- quello che era nella prima casella
- tutti quelli già scambiati
= Il più grande vince tutti i confronti e viene spinto fino in fondo. La più insidiosa è la seconda: il più piccolo scende di una sola casella per fase.
```

## Esercizi

::: esercizio base Riscaldamento: quale sentinella?
Per ognuna, di' se è un «per ogni» o un «esiste», il valore iniziale della sentinella e la risposta sull'array vuoto: (a) c'è uno zero; (b) sono tutti minori di 10; (c) nessun elemento è negativo; (d) c'è un elemento uguale al successivo.
::: soluzione
(a) esiste, `false`, falso. (b) per ogni, `true`, vero. (c) «nessuno è negativo» = per ogni elemento, non negativo: per ogni, `true`, vero. (d) esiste una coppia `i` in `[1, aLen)` con `a[i-1] == a[i]`: esiste, `false`, falso (anche con un elemento solo, perché non ci sono coppie).
:::

::: esercizio base Riscaldamento: bubble sort a mano
Scrivi l'array dopo ogni fase del bubble sort su `{5, 1, 4, 2}`, e conta le fasi.
::: soluzione
Fase 1: `{1, 4, 2, 5}`. Fase 2: `{1, 2, 4, 5}`. Fase 3: nessuno scambio. **3 fasi**. Controllato con il programma.
:::

::: esercizio medio Ultima occorrenza
Scrivi `bool ultimaOccorrenza(size_t aLen, const int a[], int key, size_t *pos)` che cerca `key` partendo dal fondo, con una sola `return`. In `*pos` va l'indice dell'ultima occorrenza, oppure `aLen` se `key` non c'è.
::: soluzione
```c
bool ultimaOccorrenza(size_t aLen, const int a[], int key, size_t *pos) {
    bool trovato = false;
    size_t i = aLen;               // i - 1 è la casella da guardare
    while (i > 0 && !trovato) {
        if (a[i - 1] == key) {
            trovato = true;
        } else {
            i--;
        }
    }
    *pos = trovato ? i - 1 : aLen;
    return trovato;
}
```
Con `{4, 7, 4, 1}` e `key = 4` dà `true` e 2; con `key = 9` dà `false` e 4; con l'array vuoto `false` e 0. Si guarda la casella `i - 1` e si confronta `i > 0`, perché con `size_t` la condizione `i >= 0` sarebbe sempre vera (05A). Provato.
:::

::: esercizio medio Conta e copia i pari
Scrivi `size_t copiaPari(size_t bLen, const int b[], size_t aCap, int a[])` che copia in `a` gli elementi pari di `b`, fino a riempire la capacità, e restituisce quanti ne ha copiati.
::: soluzione
```c
size_t copiaPari(size_t bLen, const int b[], size_t aCap, int a[]) {
    size_t aLen = 0;
    for (size_t i = 0; i < bLen && aLen < aCap; i++) {
        if (b[i] % 2 == 0) {
            a[aLen] = b[i];
            aLen++;
        }
    }
    return aLen;
}
```
Con `{3, 8, -2, 7, 10}` e capacità 5 copia `{8, -2, 10}` e restituisce 3; con capacità 2 copia `{8, -2}` e restituisce 2. Qui la dimensione esce con `return`, perché è l'unico risultato. Provato.
:::

::: esercizio esame Tutti distinti dal precedente, nello stile di `e1`
Scrivi una funzione iterativa `bool e1(size_t aLen, const int a[], size_t *firstEq)` che restituisce `true` se nessuna coppia di elementi adiacenti è uguale. In `*firstEq` va l'indice `i` della prima coppia `(a[i-1], a[i])` con elementi uguali, oppure `aLen` se non ce ne sono. Niente `break`, una sola `return`.
::: soluzione
Formula: per ogni `i` in `[1, aLen)`, `a[i-1] != a[i]`. Sentinella da `true`, si cerca il controesempio `a[i-1] == a[i]`.
```c
bool e1(size_t aLen, const int a[], size_t *firstEq) {
    bool distinti = true;
    size_t i = 1;
    while (i < aLen && distinti) {
        if (a[i - 1] == a[i]) {
            distinti = false;
        } else {
            i++;
        }
    }
    *firstEq = distinti ? aLen : i;
    return distinti;
}
```
Attenzione al caso `aLen == 0`: il ciclo non parte e `i` vale 1, non `aLen`; per questo `*firstEq` si calcola alla fine con il `? :`. Con `{1, 2, 2, 3}` dà `false` e 2; con `{1, 2, 1}` dà `true` e 3; con l'array vuoto `true` e 0. Provato.
:::

::: esercizio difficile Bubble sort che si accorcia (slide 84)
Dopo ogni fase gli elementi oltre l'ultimo scambio sono già al loro posto. Scrivi una versione del bubble sort che ricorda la posizione dell'ultimo scambio, `newLast`, e nella fase successiva confronta solo le coppie fino a lì. Niente `break`.
::: soluzione
```c
void bubbleSortLast(const size_t aLen, int a[]) {
    size_t last = aLen;            // si controllano le coppie i in [1, last)
    while (last > 1) {
        size_t newLast = 0;        // se non ci sono scambi resta 0 e il ciclo finisce
        for (size_t i = 1; i < last; i++) {
            if (a[i-1] > a[i]) {
                swap(&a[i-1], &a[i]);
                newLast = i;       // da a[i] in poi è tutto al suo posto
            }
        }
        last = newLast;
    }
}
```
`newLast` fa anche da sentinella: una fase senza scambi lo lascia a 0, e `last > 1` diventa falsa. Su `{6, 2, -8, 10, 4}` fa 3 fasi come l'originale, ma la seconda e la terza controllano meno coppie. L'ho confrontata con `qsort` della libreria su 20 000 array casuali, da 0 a 11 elementi: stesso risultato ogni volta.
:::

## Domande di ripasso

::: domanda Che cosa contiene `i` alla fine di una ricerca lineare?
L'indice della prima occorrenza, se l'elemento c'è; altrimenti `aLen`, il valore sentinella.
:::

::: domanda Perché la sentinella di «esiste» parte da `false` e quella di «per ogni» da `true`?
Perché sono i valori che non cambiano un OR e un AND, e sono anche le risposte giuste sull'array vuoto: nessun testimone, nessun controesempio.
:::

::: domanda Che differenza c'è tra capacità e dimensione?
La capacità è il numero di posti dell'array, la dimensione il numero di elementi validi, sempre tra 0 e la capacità.
:::

::: domanda Perché un array di un solo elemento è ordinato?
Perché non ha coppie adiacenti, quindi non ci sono controesempi alla proprietà «per ogni coppia».
:::

::: domanda Quando si ferma il bubble sort?
Dopo la prima fase senza scambi: vuol dire che ogni coppia adiacente è in ordine.
:::

## Glossario

```glossario
Ricerca lineare | Scansione dell'array in ordine finché si trova l'elemento o l'array finisce.
Valore sentinella | Valore che segnala un caso speciale, come i == aLen per «non trovato».
Variabile sentinella | Variabile booleana che registra un evento e ferma il ciclo, come trovato o tutti.
Ipotesi iniziale (H0) | L'ipotesi da cui parte il ciclo, che si cerca di smentire.
Controesempio | Elemento che smentisce un «per ogni».
Testimone | Elemento che rende vero un «esiste».
Cortocircuito | Fermarsi appena il risultato di un OR o di un AND è deciso.
Vero per vacuità | Un «per ogni» su un dominio vuoto è vero, perché non ci sono controesempi.
Invariante | Proprietà che vale a ogni giro del ciclo.
Selezione | Copia in un altro array degli elementi che soddisfano una condizione.
Capacità | Numero massimo di elementi che un array può contenere.
Dimensione | Numero di elementi validi in un array.
Ordinamento non decrescente | Ogni elemento è minore o uguale al successivo.
Bubble sort | Ordinamento per fasi di confronti e scambi tra elementi adiacenti.
Sul posto | Detto di un algoritmo che modifica l'array stesso, senza copiarlo.
```

## Checklist

```checklist
- So scrivere la ricerca lineare con la sentinella nella condizione, senza break.
- So tradurre «esiste» e «per ogni» in un ciclo con il giusto valore iniziale della sentinella.
- So che cosa rispondono «esiste» e «per ogni» sull'array vuoto, e perché.
- So restituire un risultato con return e un indice con un puntatore.
- So scrivere una selezione con dimensione e capacità.
- So passare a una funzione la dimensione per puntatore quando la funzione la cambia.
- So controllare se un array è ordinato sulle coppie adiacenti, con l'intervallo [1, aLen).
- So perché i <= aLen - 1 è pericoloso con size_t.
- So eseguire a mano il bubble sort fase per fase e scriverlo in C.
```

## Fonti

- Slide «Algoritmi su array. Ricerca, filtro e ordinamento» (07A_algoritmi_su_array), Programmazione I – Teoria, canale B, A.A. 2026/27, E. G. Amparore: ricerca lineare (slide 3–9), quantificazione esistenziale come test d'ipotesi (10–18), specifica, strategia e invarianti (19–22), verifica di proprietà e quantificazione universale (23–28), casi limite e dominio vuoto (29–36), esercizi `tuttiPositivi` ed `esistePari` con i test (37–39), selezione e modello dimensione-capacità (40–50), esercizio `selectInRange` (51–54), test di ordinamento (55–64), bubble sort, esecuzione nello stack e test d'ipotesi (65–83), esercizio su `new_last` (84).
- Esercizio `e1` del pre-esame 2023/24: [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md); regole d'esame dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Tutti i programmi delle slide e delle soluzioni li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror`, ed eseguiti; il ciclo della slide 7 con un tempo massimo. Gli errori e le stampe citati sono quelli veri. Quiz, esercizi e figure sono di questi appunti.
