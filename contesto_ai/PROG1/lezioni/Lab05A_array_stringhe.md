---
corso: PROG1
lezione: Lab05A
titolo: "Laboratorio 05: array e stringhe"
data: 2026-11-02
docenti: Elisa Marengo (turno B2) e Valerio Basile (turno B1); teoria Elvio Amparore
sopratitolo: Canale B · Laboratorio 05 · Programmazione I
descrizione: >-
  Appunti del quinto laboratorio di Programmazione I (canale B, Lab05A): array con size_t e #define, la somma di un
  array letto da tastiera, le frequenze delle risposte a un questionario, la somma selettiva, stringhe e terminatore,
  l'alfabeto in un array, la montagna più alta, «per ogni» ed «esiste» su un array, le funzioni di ctype.h, le
  proprietà di una password e Indovina chi?, con tutti i programmi provati.
lede: >-
  Il quinto laboratorio mette in pratica la lezione 05A: array di numeri e di caratteri, riempiti con un ciclo,
  contati, filtrati, confrontati. Qui trovi ogni esercizio risolto e provato, i tre esercizi CodeRunner con il testo
  dell'anno scorso, e una trappola delle funzioni sui caratteri che la slide non dice.
materiale: slide
scheda:
  Slide: Lab05A «Array e stringhe», laboratorio canale B · 18 pagine, esercizi anche su CodeRunner
  Laboratorio: Elisa Marengo (turno B2, lun 02/11) e Valerio Basile (turno B1) · 14–17 · laboratorio Turing
  Tempo di studio: 2–3 ore, davanti a un computer
fonte: >-
  Slide «Array e stringhe» (Lezione nº 5 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27;
  codice di partenza e soluzioni del Lab05 2025/26 dai Moodle dei canali A e B
appunti_html: appunti/PROG1/Lab05A_array_stringhe.html
genera_html: true
---

## In breve

- Un array si scorre con un indice `size_t` da 0 a `n` escluso, e la lunghezza sta in una `#define` o in una variabile: a una funzione si passa la coppia «lunghezza, puntatore ai dati».
- Per **contare quante volte compare ogni valore** si usa un array di contatori: `frequenze[v - 1]++` per un valore `v` tra 1 e 5.
- Se il risultato dipende da un valore che si conosce solo alla fine (il minimo di tutta la sequenza), i dati vanno **memorizzati** in un array e scorsi una seconda volta.
- Una **stringa** è un array di `char` che finisce con `'\0'`. Si riempie a mano con un ciclo e poi si aggiunge il terminatore; si legge con `%20s`, senza `&`.
- Per **copiare una stringa** si copia carattere per carattere fino al terminatore, e poi il terminatore.
- **«Per ogni»** su un array: sentinella da `true`; **«esiste»**: sentinella da `false`. Le stesse della [07A](07A_algoritmi_su_array.html).
- Le funzioni di `ctype.h` (`isdigit`, `isupper`…) dicono che tipo di carattere è. Restituiscono un `int` **diverso da zero** per vero, non per forza 1: per stamparle con 0 e 1 si passa da un `bool`.

> [!CANALI]
> **Canale B.** È il quinto laboratorio, al laboratorio Turing, dalle 14 alle 17: turno **B2** lunedì 02/11 con **Elisa Marengo**. Il turno **B1** con **Valerio Basile** il 03/11 ha fatto il [Lab04](Lab04_iterazioni.html), recuperando la settimana del 27/10; il calendario ha il prossimo laboratorio B1 martedì 10/11, quindi il Lab05A dovrebbe toccargli lì. Gli esercizi riprendono la [05A](05A_array_stringhe.html) su array e stringhe; i quantificatori delle slide 14–15 sono spiegati per intero nella [07A](07A_algoritmi_su_array.html).
>
> **Canali A e C.** Nel 2025/26 il Lab05 era uguale nei tre canali, con gli stessi esercizi CodeRunner. Le slide 2026/27 dei canali A e C non le ho viste.
>
> **Il materiale che ho e quello che non ho.** Il codice di partenza 2026/27 è su Moodle e non l'ho visto; uso quello del 2025/26 (canale B: `array.c`, `questionari.c`, `stringhe.c`), che ha gli stessi nomi delle slide. I testi dei quattro esercizi CodeRunner 2026/27 non li ho: quelli del 2025/26, con gli stessi nomi, li ho ricostruiti dalle soluzioni pubblicate sul Moodle del canale A e dagli appunti di uno studente. Le soluzioni qui sono mie, provate sugli esempi; confrontale con il testo esatto su Moodle. Tutti i programmi li ho compilati con `gcc -Wall -Werror` (gcc 16.1, Windows 11 a 64 bit) ed eseguiti.

## Array, size_t e la somma (slide 2–4)

La slide 2 ripete le regole della [05A](05A_array_stringhe.html): un array è una sequenza di variabili dello stesso tipo, con indici interi non negativi da 0. Il tipo dell'indice è **`size_t`**, che lo standard raccomanda per le dimensioni e gli indici degli array (Deitel, p. 247), e si stampa e si legge con **`%zu`**. Per ora gli array stanno sullo stack e hanno una dimensione fissata; più avanti nel corso arriveranno gli array sullo heap.

Per usare un array serve sempre sapere quanto è lungo. Le strade, per ora, sono due:

- una **`#define`** con la dimensione, usata ovunque compare l'array;
- una **variabile** con la dimensione. Allora l'array viaggia in coppia: «numero di elementi, puntatore all'inizio dei dati», proprio come nei parametri della [06B](06B_chiamata_funzioni.html).

### array.c

Il programma di partenza `array.c` riassume le dichiarazioni della 05A: un array azzerato con un ciclo, una lista di inizializzazione `{23, 56, 12, -6, 31}`, una lista corta `{100}` che completa con zeri, un array senza dimensione `int values3[] = {0, 1, 2, 3}` che ne prende 4 dalla lista, e un VLA `int inseriti[sz]` con la dimensione letta da tastiera. Manca la fine: calcolare e stampare la somma degli elementi di `inseriti`. È un accumulatore che parte da 0:

```c
    int somma = 0;
    for (size_t i = 0; i < sz; i++) {
        somma = somma + inseriti[i];
    }
    printf("La somma degli elementi e' %d\n", somma);
```

Con dimensione 3 e valori 4, −1, 10 stampa `La somma degli elementi e' 13`. Due dettagli del programma di partenza: con dimensione 0 il VLA `int inseriti[0]` non è valido in C (la 05A diceva lunghezza almeno 1); e il valore letto non viene controllato, quindi un numero enorme fa esaurire lo stack.

::: prova Che cosa contiene `values2` dopo `int values2[5] = {100};`?
`{100, 0, 0, 0, 0}`: gli elementi non scritti nella lista valgono 0.
:::

> [!RICORDA]
> - Indici `size_t`, da stampare con `%zu`. La lunghezza sta in una `#define` o in una variabile che viaggia con l'array.

## Questionari: contare le frequenze (slide 5)

Venti persone hanno dato un voto da 1 a 5 stelle:

```c
#define NUM_RISP 20
int risposte[NUM_RISP] = {
    1, 2, 5, 4, 3,  5, 2, 1, 3, 1,
    4, 3, 3, 3, 2,  3, 3, 2, 2, 5
};
```

Bisogna contare quante risposte hanno 1 stella, quante 2, e così via, e stampare un istogramma. L'idea: un array di 5 contatori, uno per voto. Il voto `v` va nel contatore `frequenze[v - 1]`, perché gli indici partono da 0 e le stelle da 1. Un solo ciclo sulle risposte basta:

```c
#include <stdio.h>

#define NUM_RISP 20   // numero di risposte al questionario
#define MAX_STELLE 5  // le risposte vanno da 1 a 5

int main(void) {
    const int risposte[NUM_RISP] = {
        1, 2, 5, 4, 3,  5, 2, 1, 3, 1,
        4, 3, 3, 3, 2,  3, 3, 2, 2, 5
    };

    // frequenze[s - 1] conta le risposte con s stelle
    int frequenze[MAX_STELLE] = {0};
    for (size_t i = 0; i < NUM_RISP; i++) {
        frequenze[risposte[i] - 1]++;
    }

    printf("Stelle  Frequenza\n");
    for (size_t s = 0; s < MAX_STELLE; s++) {
        printf("%zu %10d   ", s + 1, frequenze[s]);
        for (int k = 0; k < frequenze[s]; k++) {
            printf("#");
        }
        printf("\n");
    }
    return 0;
}
```

Stampa esattamente l'istogramma della slide: 3, 5, 7, 2, 3, che sommati fanno 20.

```grafico
titolo: Come lavora `frequenze[risposte[i] - 1]++`. Ogni risposta sceglie con il suo valore quale contatore incrementare: un 3 incrementa la casella 2, un 1 la casella 0. Alla fine le caselle contengono 3, 5, 7, 2, 3
x: 0 12.4
y: 0 4.4
assi: no
griglia: no
proporzioni: libere
poligono: 0.4 3.0 1.4 3.0 1.4 3.8 0.4 3.8 | blu | pieno
testo: 0.9 3.4 | blu | "1"
poligono: 1.4 3.0 2.4 3.0 2.4 3.8 1.4 3.8 | blu | pieno
testo: 1.9 3.4 | blu | "2"
poligono: 2.4 3.0 3.4 3.0 3.4 3.8 2.4 3.8 | blu | pieno
testo: 2.9 3.4 | blu | "5"
poligono: 3.4 3.0 4.4 3.0 4.4 3.8 3.4 3.8 | blu | pieno
testo: 3.9 3.4 | blu | "4"
poligono: 4.4 3.0 5.4 3.0 5.4 3.8 4.4 3.8 | blu | pieno
testo: 4.9 3.4 | blu | "3"
testo: 6.6 3.4 | grigio | "… risposte"
poligono: 3.4 0.6 4.6 0.6 4.6 1.4 3.4 1.4 | verde | pieno
testo: 4.0 1.0 | verde | "3"
poligono: 4.6 0.6 5.8 0.6 5.8 1.4 4.6 1.4 | verde | pieno
testo: 5.2 1.0 | verde | "5"
poligono: 5.8 0.6 7.0 0.6 7.0 1.4 5.8 1.4 | verde | pieno
testo: 6.4 1.0 | verde | "7"
poligono: 7.0 0.6 8.2 0.6 8.2 1.4 7.0 1.4 | verde | pieno
testo: 7.6 1.0 | verde | "2"
poligono: 8.2 0.6 9.4 0.6 9.4 1.4 8.2 1.4 | verde | pieno
testo: 8.8 1.0 | verde | "3"
testo: 4.0 0.25 | grigio | "[0]"
testo: 5.2 0.25 | grigio | "[1]"
testo: 6.4 0.25 | grigio | "[2]"
testo: 7.6 0.25 | grigio | "[3]"
testo: 8.8 0.25 | grigio | "[4]"
testo: 10.9 1.0 | verde | "frequenze"
freccia: 0.9 2.9 3.9 1.5 | grigio
freccia: 4.9 2.9 6.3 1.5 | grigio
testo: 1.6 2.2 | grigio | "1 → [0]"
testo: 6.3 2.4 | grigio | "3 → [2]"
```

> [!TRAPPOLA] Un voto fuori da 1–5
> Se nelle risposte ci fosse un 0 o un 6, `frequenze[risposte[i] - 1]` scriverebbe fuori dall'array, senza nessun errore del compilatore. Con dati letti da tastiera, prima di incrementare si controlla `1 <= v && v <= 5`.

::: prova Come cambia il programma se le risposte vanno da 0 a 10?
Servono 11 contatori, `int frequenze[11] = {0};`, e l'indice è il voto stesso: `frequenze[risposte[i]]++`.
:::

> [!RICORDA]
> - Contare per categorie: un array di contatori, indicizzato dal valore.

## Somma selettiva (slide 6, Lab05-Es1)

Il testo dell'esercizio CodeRunner del 2025/26, con lo stesso nome:

> [!NOTA] Lab05-Es1 Somma selettiva (testo 2025/26)
> Leggere un intero non negativo `N`, poi una sequenza di `N` interi da memorizzare in un array; `N` non supera `MAX_N = 20`. Stampare `Vuoto.` se la sequenza non ha elementi, `Errore: numero di elementi non valido.` se `N` non è valido, altrimenti la somma degli elementi **maggiori o uguali al quadrato del minimo** della sequenza. Esempio: con `4` e poi `2 3 4 6` stampa `10`.

Nell'esempio il minimo è 2, il quadrato 4, e gli elementi da 4 in su sono 4 e 6: somma 10.

La domanda della slide: **si può fare a meno di memorizzare la sequenza in un array?** No. Se la sequenza è `3 4`, il minimo è 3, la soglia 9, e la somma è 0. Se dopo arriva un `1`, il minimo diventa 1, la soglia 1, e la somma diventa 8: il 3 e il 4 ora contano. Finché non si è letta tutta la sequenza non si sa quali elementi sommare, quindi bisogna tenerli. Si fanno due passate sull'array: la prima trova il minimo, la seconda somma.

```c
#include <stdio.h>

#define MAX_N 20

int main(void) {
    size_t n = 0;
    scanf("%zu", &n);
    if (n == 0) {
        printf("Vuoto.\n");
    } else if (n > MAX_N) {
        printf("Errore: numero di elementi non valido.\n");
    } else {
        int a[MAX_N];
        for (size_t i = 0; i < n; i++) {
            scanf("%d", &a[i]);
        }
        // primo passaggio: il minimo
        int min = a[0];
        for (size_t i = 1; i < n; i++) {
            if (a[i] < min) {
                min = a[i];
            }
        }
        // secondo passaggio: la somma selettiva
        int soglia = min * min;
        int somma = 0;
        for (size_t i = 0; i < n; i++) {
            if (a[i] >= soglia) {
                somma = somma + a[i];
            }
        }
        printf("%d\n", somma);
    }
    return 0;
}
```

Provato: `4` e `2 3 4 6` dà 10; `3` e `3 4 1` dà 8; `2` e `3 4` dà 0; `3` e `-2 1 7` dà 7 (minimo −2, soglia 4); `0` dà `Vuoto.`; `25` dà l'errore. Con `-3` dà l'errore anche lui: `%zu` legge il segno meno e il numero diventa enorme, maggiore di 20.

Il minimo si inizializza con `a[0]`, non con 0: con tutti elementi positivi, partire da 0 darebbe minimo 0. È la precondizione «non vuoto» della [05A](05A_array_stringhe.html), garantita qui dal ramo `n == 0`.

::: prova Con la sequenza `5 6 7`, che cosa stampa?
0. Il minimo è 5, la soglia 25, e nessun elemento arriva a 25.
:::

> [!RICORDA]
> - Se la decisione dipende da un dato che arriva alla fine, si memorizza tutto e si fanno due passate.

## Le stringhe (slide 7–11)

Nel C il testo è un array di `char`. Un `char` contiene il codice numerico di un carattere, secondo la tabella **ASCII** (si legge «àski»): la slide 8 la mostra intera, 128 caratteri. Da ricordare i caratteri di controllo che compaiono nel codice:

| Codice | Nome | Nel codice C |
|---|---|---|
| 0 | NUL, il terminatore | `'\0'` |
| 9 | tabulazione | `'\t'` |
| 10 | a capo (line feed) | `'\n'` |
| 13 | ritorno carrello | `'\r'` |

e le tre file consecutive: cifre da 48 (`'0'`), maiuscole da 65 (`'A'`), minuscole da 97 (`'a'`). Nel corso si usa solo il testo **a un byte per carattere**, adatto ad ASCII e Latin-1; il C conosce anche i caratteri larghi (`wchar_t`) e le codifiche a più byte, che qui non si vedono.

Una stringa ha in più, rispetto a un array qualunque, il **terminatore** `'\0'` alla fine. `"ciao"` occupa 5 `char`: `'c'`, `'i'`, `'a'`, `'o'`, `'\0'`. Si dichiara in tre modi:

```c
char txt1[] = { 'c', 'i', 'a', 'o', '\0' };   // array, terminatore scritto a mano
char txt2[] = "ciao";                         // array, terminatore aggiunto dal compilatore
const char* txt3 = "ciao";                    // puntatore a un letterale, in sola lettura
```

### stringhe.c

Il programma di partenza fa vedere le stringhe come array. Le parti da capire:

1. `char testoA[] = "testo";` poi `testoA[1] = 'E'`, `testoA[4] = 'A'`, `testoA[3] = '\0'`. La `printf` stampa **`tEs`**: si ferma al primo terminatore, in posizione 3. La `'A'` in posizione 4 è ancora lì in memoria, ma non fa più parte della stringa.
2. `scanf("%20s", testo_input)` con `char testo_input[21]`: legge al massimo 20 caratteri e si ferma al primo spazio. Con `due parole` legge solo `due`; con una parola di 26 lettere ne legge 20, e le altre restano nell'input.
3. Il ciclo stampa ogni carattere con il suo codice, terminatore compreso: `'d' ha valore 100`, `'u' ha valore 117`, `'e' ha valore 101`, e per ultimo il terminatore, che vale 0.
4. `'7' - '0'` vale 7: le cifre sono consecutive nella tabella, quindi la differenza dal carattere `'0'` è il valore della cifra. Al contrario, `'0' + i` è il carattere della cifra `i`.

```grafico
titolo: Che cosa c'è in `testoA` dopo le tre modifiche. La stringa finisce al primo `'\0'`, nella casella 3: `printf` stampa `tEs`. La `'A'` nella casella 4 e il terminatore originale nella 5 restano in memoria, ma fuori dalla stringa
x: 0 12.4
y: 0 3.2
assi: no
griglia: no
proporzioni: libere
poligono: 1.0 1.3 2.6 1.3 2.6 2.3 1.0 2.3 | blu | pieno
testo: 1.8 1.8 | blu | "'t'"
poligono: 2.6 1.3 4.2 1.3 4.2 2.3 2.6 2.3 | blu | pieno
testo: 3.4 1.8 | blu | "'E'"
poligono: 4.2 1.3 5.8 1.3 5.8 2.3 4.2 2.3 | blu | pieno
testo: 5.0 1.8 | blu | "'s'"
poligono: 5.8 1.3 7.4 1.3 7.4 2.3 5.8 2.3 | rosa | pieno
testo: 6.6 1.8 | rosa | "'\0'"
poligono: 7.4 1.3 9.0 1.3 9.0 2.3 7.4 2.3 | grigio | tratteggio
testo: 8.2 1.8 | grigio | "'A'"
poligono: 9.0 1.3 10.6 1.3 10.6 2.3 9.0 2.3 | grigio | tratteggio
testo: 9.8 1.8 | grigio | "'\0'"
testo: 1.8 0.9 | grigio | "0"
testo: 3.4 0.9 | grigio | "1"
testo: 5.0 0.9 | grigio | "2"
testo: 6.6 0.9 | grigio | "3"
testo: 8.2 0.9 | grigio | "4"
testo: 9.8 0.9 | grigio | "5"
testo: 3.4 2.8 | blu | "la stringa: tEs"
```

### Alfabeto (slide 12)

Un array di 27 `char`: le 26 lettere dalla `'A'` alla `'Z'` riempite con un ciclo, più il terminatore.

```c
#include <stdio.h>

#define LETTERE 26

int main(void) {
    char alfabeto[LETTERE + 1];          // 26 lettere + il terminatore
    for (size_t i = 0; i < LETTERE; i++) {
        alfabeto[i] = 'A' + i;
    }
    alfabeto[LETTERE] = '\0';
    printf("%s\n", alfabeto);
    return 0;
}
```

Stampa `ABCDEFGHIJKLMNOPQRSTUVWXYZ`. Senza la riga del terminatore, `printf` continuerebbe a leggere la memoria dopo l'array finché non trova per caso uno 0.

::: prova Quanti `char` servono per memorizzare `"Monviso"`? E che cosa vale `sizeof("Monviso")`?
8 tutti e due: 7 lettere più il terminatore.
:::

> [!RICORDA]
> - Stringa = array di `char` + `'\0'`. Riempita a mano, il terminatore va aggiunto a mano.
> - `printf("%s")` si ferma al primo `'\0'`. `'7' - '0'` vale 7.

## Montagne (slide 13, Lab05-Es2)

Il secondo esercizio CodeRunner chiede il massimo di una sequenza, ma il risultato è un nome. Il testo del 2025/26:

> [!NOTA] Lab05-Es2 Montagne (testo 2025/26)
> Leggere una sequenza di coppie `<nome_montagna> <altezza>`, con il nome di al massimo 50 caratteri e l'altezza intera maggiore di 0. La sequenza finisce quando non si riesce più a leggere. Alla fine stampare il nome della montagna più alta. Suggerimenti: leggere una coppia con una sola `scanf`, che deve restituire 2; usare un secondo array per il nome della più alta trovata fin lì.

È il massimo della [05A](05A_array_stringhe.html), con una differenza: insieme al numero bisogna ricordare un **nome**, e un array non si copia con `=` (05A: `b = a` non compila). Si copia carattere per carattere:

```c
#include <stdio.h>

#define MAX_S 50

int main(void) {
    char nome[MAX_S + 1];
    char piuAlta[MAX_S + 1] = "";   // stringa vuota se non arriva niente
    int altezza = 0;
    int altezzaMax = 0;             // le altezze sono maggiori di 0

    while (2 == scanf("%50s %d", nome, &altezza)) {
        if (altezza > altezzaMax) {
            altezzaMax = altezza;
            // copia nome in piuAlta, terminatore compreso
            size_t i = 0;
            while (nome[i] != '\0') {
                piuAlta[i] = nome[i];
                i++;
            }
            piuAlta[i] = '\0';
        }
    }
    printf("%s\n", piuAlta);
    return 0;
}
```

Con l'esempio del testo, `Corno_Nero 4222`, `Rocciamelone 3538`, `Punta_Nordend 4609`, `Monviso 3841`, stampa `Punta_Nordend`. I nomi non hanno spazi perché `%50s` si ferma al primo spazio. Il massimo può partire da 0 perché le altezze sono maggiori di 0, ed è la risposta giusta anche per la sequenza vuota. Ho inizializzato `piuAlta` con `""`: la soluzione del 2025/26 non lo fa, e con l'input vuoto stamperebbe memoria a caso.

::: prova Due montagne hanno la stessa altezza massima. Quale nome stampa il programma?
La prima letta: il confronto è `>`, quindi la seconda, uguale, non la sostituisce. Con `>=` stamperebbe l'ultima.
:::

> [!RICORDA]
> - Leggere coppie: `while (2 == scanf(...))`.
> - Una stringa si copia carattere per carattere, poi il terminatore.

## «Per ogni» ed «esiste» sugli array (slide 14–15)

Le slide 14–15 riprendono le sentinelle del [Lab04](Lab04_iterazioni.html), su un array:

```c
bool tutti = true;                         // per ogni
for (size_t i = 0; i < len && tutti; i++) {
    if (!Cond(a[i])) {
        tutti = false;
    }
}

bool esiste = false;                       // esiste
for (size_t i = 0; i < len && !esiste; i++) {
    if (Cond(a[i])) {
        esiste = true;
    }
}
```

Il ciclo finisce o perché `i == len` (per ogni: tutti soddisfano; esiste: nessuno soddisfa) o perché la sentinella è cambiata. La slide dice che in quel caso «`a[i]` è il primo che soddisfa» (o non soddisfa). Attenzione: con il `for` non è così. Quando la sentinella cambia, il `for` esegue comunque l'incremento `i++` prima di ricontrollare la condizione, quindi all'uscita `i` indica l'elemento **dopo**. Se serve la posizione, si usa il `while` con `i++` solo nel ramo `else`, come nella [07A](07A_algoritmi_su_array.html), oppure si usa `i - 1`.

::: prova Con `a = {3, 8, 5}`, il `for` di «esiste un pari» finisce con `i` uguale a quanto?
2. Il pari è `a[1] = 8`: la sentinella diventa vera con `i == 1`, poi il `for` incrementa a 2 e la condizione lo ferma.
:::

> [!RICORDA]
> - Con il `for`, all'uscita `i` è uno dopo l'elemento trovato. Per la posizione esatta, il `while` della 07A.

## Le funzioni di ctype.h (slide 16)

`ctype.h` contiene funzioni che classificano un carattere:

| Funzione | Vero se il carattere è |
|---|---|
| `isalpha(c)` | una lettera |
| `isdigit(c)` | una cifra |
| `isalnum(c)` | una lettera o una cifra |
| `islower(c)`, `isupper(c)` | una minuscola, una maiuscola |
| `isspace(c)` | uno spazio, una tabulazione, un a capo |
| `ispunct(c)` | un segno di punteggiatura: ``!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~`` |

più `tolower(c)` e `toupper(c)`, che restituiscono la lettera minuscola o maiuscola, e il carattere invariato se non è una lettera: `toupper('q')` è `'Q'`, `toupper('7')` è `'7'`.

> [!TRAPPOLA] Non restituiscono true e false
> La slide le scrive come `bool isalpha(char ch)`. Le intestazioni vere sono `int isalpha(int c)`: restituiscono **0 per falso e un numero diverso da 0 per vero**, non per forza 1. Sul mio PC `isdigit('7')` vale 1 ma `islower('q')` vale 2, `isspace(' ')` 8, `ispunct('!')` 16. Dentro un `if` non cambia niente; ma un `printf("%d", ispunct(c))` stampa 16 dove CodeRunner si aspetta 1. Si passa da un `bool`: `bool p = ispunct(c);` vale 1. E per i caratteri con codice oltre 127 (le lettere accentate in Latin-1) il `char` può essere negativo, e passarlo a queste funzioni è un comportamento indefinito: si scrive `isalpha((unsigned char)c)`.

::: prova Che cosa stampa `printf("%d %d", isupper('A') != 0, isupper('a') != 0);`?
`1 0`. Il confronto `!= 0` trasforma qualunque valore diverso da zero in 1.
:::

> [!RICORDA]
> - `ctype.h`: vero = diverso da 0. Per stampare 0 e 1, passare da un `bool`.

## Passwords (slide 17, Lab05-Es3)

Il terzo esercizio CodeRunner controlla cinque proprietà di una stringa. Il testo del 2025/26:

> [!NOTA] Lab05-Es3 Passwords (testo 2025/26)
> Leggere una stringa di al massimo 20 caratteri e stampare `<password> P1 P2 P3 P4 P5`, con 1 o 0 per ogni proprietà. P1: esiste almeno una cifra. P2: tutti i caratteri sono lettere. P3: ci sono almeno due lettere maiuscole. P4: ci sono almeno due cifre consecutive. P5: gli ultimi due caratteri sono segni di punteggiatura. Esempio: `pippo12345!` dà `pippo12345! 1 0 0 1 0`.

Cinque proprietà, cinque schemi già visti:

| Proprietà | Schema | Sentinella o contatore |
|---|---|---|
| P1 esiste una cifra | esiste | `false`, poi `true` |
| P2 tutte lettere | per ogni | `true`, poi `false` |
| P3 almeno due maiuscole | conteggio, ci si ferma a 2 | contatore da 0 |
| P4 due cifre consecutive | esiste, sulle coppie `(i-1, i)` | `false`, poi `true` |
| P5 ultimi due punteggiatura | controllo diretto, se la lunghezza è almeno 2 | nessuna |

```c
#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>

#define MAX_STR 20

int main(void) {
    char pwd[MAX_STR + 1] = "";
    scanf("%20s", pwd);

    // lunghezza: si conta fino al terminatore
    size_t len = 0;
    while (pwd[len] != '\0') {
        len++;
    }

    // P1: esiste una cifra
    bool p1 = false;
    for (size_t i = 0; i < len && !p1; i++) {
        if (isdigit((unsigned char)pwd[i])) {
            p1 = true;
        }
    }
    // P2: tutti i caratteri sono lettere
    bool p2 = true;
    for (size_t i = 0; i < len && p2; i++) {
        if (!isalpha((unsigned char)pwd[i])) {
            p2 = false;
        }
    }
    // P3: almeno due maiuscole
    int maiuscole = 0;
    for (size_t i = 0; i < len && maiuscole < 2; i++) {
        if (isupper((unsigned char)pwd[i])) {
            maiuscole++;
        }
    }
    bool p3 = (maiuscole >= 2);
    // P4: esistono due cifre consecutive (coppie i-1, i con i in [1, len))
    bool p4 = false;
    for (size_t i = 1; i < len && !p4; i++) {
        if (isdigit((unsigned char)pwd[i - 1]) && isdigit((unsigned char)pwd[i])) {
            p4 = true;
        }
    }
    // P5: gli ultimi due caratteri sono segni di punteggiatura
    bool p5 = (len >= 2)
              && ispunct((unsigned char)pwd[len - 1])
              && ispunct((unsigned char)pwd[len - 2]);

    printf("%s %d %d %d %d %d\n", pwd, p1, p2, p3, p4, p5);
    return 0;
}
```

Provato: `pippo12345!` dà `1 0 0 1 0` come nel testo; `CiaoMondo` dà `0 1 1 0 0`; `Ab12..` dà `1 0 0 1 1`; `x` dà `0 1 0 0 0`; `A1b2C3!?` dà `1 0 1 0 1`.

- In P5 il `len >= 2` viene **prima**: con una stringa di un carattere, `pwd[len - 2]` sarebbe fuori dall'array, e il cortocircuito dell'`&&` evita di calcolarlo.
- In P2, la stringa vuota darebbe 1, «tutti lettere» per vacuità, come nella [07A](07A_algoritmi_su_array.html). Con `scanf("%20s")` non può capitare, perché `%s` salta gli spazi e legge almeno un carattere.
- Gli appunti di uno studente riportano P5 come «gli ultimi due **non** sono punteggiatura»; la soluzione ufficiale e l'esempio vanno con «sono». Controlla il testo su Moodle.

::: prova Che cosa stampa il programma con `Ciao2026!!`?
`Ciao2026!! 1 0 0 1 1`: c'è una cifra, non sono tutte lettere, una sola maiuscola, cifre consecutive, e gli ultimi due sono `!`.
:::

> [!RICORDA]
> - Una proprietà, uno schema: esiste, per ogni, conteggio, coppie adiacenti.
> - Controllare la lunghezza **prima** di guardare `pwd[len - 2]`.

## Indovina chi? (slide 18, Lab05-Es4, extra)

Il gioco da tavolo: 24 personaggi, ognuno con degli attributi codificati da lettere (nel codice dell'esercizio, un array `nomi` e un array `attributi` di stringhe, per esempio `"drco"` per Claire). Si legge una stringa di indizi: una lettera **minuscola** vuol dire «ha questo attributo», una **maiuscola** «non ce l'ha». Si stampano i personaggi che rispettano tutti gli indizi, uno per riga, e alla fine quanti sono.

Sono due quantificatori annidati: un personaggio è sospetto se **per ogni** indizio vale la condizione, e la condizione è «**esiste** quella lettera tra i suoi attributi» (o «non esiste»). Il pezzo «esiste la lettera nella stringa» va bene in una funzione, come nella [06A](06A_funzioni.html):

```c
// true se il carattere c compare nella stringa s
bool contiene(const char* s, char c) {
    bool trovato = false;
    size_t k = 0;
    while (s[k] != '\0' && !trovato) {
        if (s[k] == c) {
            trovato = true;
        } else {
            k++;
        }
    }
    return trovato;
}
```

e nel `main`, per ogni personaggio `p`:

```c
        bool tuttiOk = true;
        size_t j = 0;
        while (indizi[j] != '\0' && tuttiOk) {
            char ch = indizi[j];
            bool ce = contiene(attributi[p], (char)tolower((unsigned char)ch));
            if (isupper((unsigned char)ch)) {
                tuttiOk = !ce;        // maiuscola: non deve averlo
            } else {
                tuttiOk = ce;         // minuscola: deve averlo
            }
            j++;
        }
```

con un contatore dei sospetti e la stampa del nome se `tuttiOk`. Con gli indizi `dc` stampa Claire, Maria e 2; con `bO` stampa Eric, Anita, David, Charles e 4. Ho confrontato il programma intero con la soluzione ufficiale del 2025/26 su cinque input: risultati uguali.

::: prova Con gli indizi `dc`, perché Claire (`"drco"`) è tra i sospetti e Eric (`"bc"`) no?
Claire ha sia la `d` sia la `c`. Eric ha la `c` ma non la `d`: il primo indizio lo esclude, e il ciclo sugli indizi si ferma lì.
:::

> [!RICORDA]
> - «Per ogni indizio, esiste (o non esiste) l'attributo»: due sentinelle annidate. Il pezzo interno sta bene in una funzione.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `%zu` | «zeta u» | formato di `size_t` in `printf` e `scanf` | `printf("%zu", i)` |
| `frequenze[v - 1]++` | «incrementa il contatore di v» | conteggio per categorie | voti da 1 a 5 |
| `'\0'` | «terminatore» | carattere di codice 0 che chiude una stringa | `alfabeto[26] = '\0'` |
| `%50s` | «stringa di al massimo 50 caratteri» | legge una parola, senza `&` | `scanf("%50s", nome)` |
| `c - '0'` | «valore della cifra» | da carattere cifra a numero | `'7' - '0'` vale 7 |
| `isdigit(c)` | «è una cifra» | diverso da 0 se vero | `isdigit('7')` |
| `(unsigned char)c` | «c senza segno» | conversione da fare prima di `ctype.h` | `isalpha((unsigned char)c)` |

## Verso l'esame

All'esame si programma al PC con CodeRunner, che confronta l'output con quello atteso carattere per carattere e compila con `-Wall -Werror`. Da questo laboratorio servono:

1. **le sentinelle** per «per ogni» ed «esiste», con il valore iniziale giusto, senza `break`;
2. **i contatori per categoria** e le **due passate** quando serve un dato che arriva alla fine;
3. **le stringhe**: terminatore, `%Ns` con la dimensione giusta, copia a mano;
4. **l'output esatto**: 0 e 1 dove il testo li chiede, quindi `bool` e non il valore grezzo di `ctype.h`; niente stampe in più.

Questi esercizi chiedono un programma intero con `main`; all'esame la consegna è quasi sempre una **funzione** con l'intestazione data. Conviene riscriverli così: per esempio `int sommaSelettiva(size_t n, const int a[])` per l'Es1 e `bool tutteLettere(const char* s)` per P2, con un `main` di prova.

> [!METODO] Un esercizio CodeRunner su stringhe
> 1. Scrivi l'array con un posto in più per il terminatore, e la `scanf` con la larghezza giusta: `char s[21]` e `%20s`.
> 2. Trova la lunghezza con un ciclo fino a `'\0'`, se serve.
> 3. Per ogni proprietà scegli lo schema: esiste, per ogni, conteggio, coppie adiacenti.
> 4. Prova i casi limite: un solo carattere, nessuna cifra, tutte cifre.
> 5. Stampa esattamente il formato richiesto, spazi e a capo compresi.

## Quiz

```quiz
D: Con `int risposte[] = {2, 2, 5}` e `int frequenze[5] = {0}`, che cosa contiene `frequenze` dopo `frequenze[risposte[i] - 1]++` per ogni `i`?
+ `{0, 2, 0, 0, 1}`
- `{0, 0, 2, 0, 0}`
- `{2, 2, 5, 0, 0}`
- `{0, 2, 0, 1, 0}`
- `{1, 1, 1, 0, 0}`
= Il voto 2 va nella casella 1 (due volte), il voto 5 nella casella 4. La più insidiosa è la quarta: dimentica che anche il 5 va spostato di uno.

D: Che cosa stampa `printf("%s", t)` dopo `char t[] = "testo"; t[3] = '\0';`?
+ `tes`
- `testo`
- `tes o`
- `test`
- niente
= La stringa finisce al primo terminatore, in posizione 3. La più insidiosa è `test`: la casella 3 è la quarta lettera, che viene sostituita.

D: Perché la somma selettiva deve memorizzare la sequenza in un array?
+ perché quali elementi sommare dipende dal minimo, che si conosce solo alla fine
- perché `scanf` non può leggere numeri dentro un ciclo
- perché la somma di più di 20 numeri va in overflow
- perché CodeRunner lo richiede
- non serve: si può fare con una passata sola
= Un elemento escluso con il minimo attuale può diventare buono quando arriva un minimo più piccolo. La più insidiosa è l'ultima: con una passata sola non si può decidere elemento per elemento.

D: Quanto vale `'9' - '0'`?
+ 9
- 57
- 48
- `'9'`
- non compila
= Le cifre sono consecutive in ASCII, da 48 a 57: la differenza è il valore della cifra. La più insidiosa è 57, il codice di `'9'`.

D: Che cosa può stampare `printf("%d", islower('q'))`?
+ un numero diverso da zero, non per forza 1
- sempre 1
- sempre `true`
- 0
- `'q'`
= Le funzioni di `ctype.h` restituiscono un `int`: 0 per falso, un valore qualunque diverso da 0 per vero. Sul mio PC stampa 2. La più insidiosa è «sempre 1», che è quello che suggerisce la slide.

D: Nel programma Passwords, perché `len >= 2` va scritto prima di `ispunct(pwd[len - 2])`?
+ perché con una stringa di un carattere `pwd[len - 2]` sarebbe fuori dall'array, e l'`&&` non lo calcola se la prima condizione è falsa
- perché `ispunct` richiede almeno due caratteri
- per una regola di stile senza effetti
- perché altrimenti non compila
- perché `len` potrebbe essere negativo
= Cortocircuito: l'`&&` si ferma al primo falso. La più insidiosa è l'ultima: `len` è `size_t`, mai negativo; il problema è che `len - 2` con `len == 1` dà un numero enorme.

D: Qual è la dichiarazione giusta per leggere con `scanf` una parola di al massimo 50 caratteri?
+ `char nome[51];` e `scanf("%50s", nome);`
- `char nome[50];` e `scanf("%50s", nome);`
- `char nome[51];` e `scanf("%50s", &nome);`
- `char nome[51];` e `scanf("%51s", nome);`
- `char nome;` e `scanf("%s", &nome);`
= 50 caratteri più il terminatore fanno 51 posti, e la larghezza in `%50s` non conta il terminatore. La più insidiosa è la seconda: 50 posti lasciano fuori il terminatore.
```

## Esercizi

::: esercizio base Riscaldamento: frequenze delle cifre
Scrivi un programma che legge una parola di al massimo 30 caratteri e stampa quante volte compare ogni cifra da 0 a 9 (solo quelle che compaiono).
::: soluzione
```c
#include <stdio.h>
#include <ctype.h>

int main(void) {
    char s[31] = "";
    scanf("%30s", s);
    int conta[10] = {0};
    for (size_t i = 0; s[i] != '\0'; i++) {
        if (isdigit((unsigned char)s[i])) {
            conta[s[i] - '0']++;
        }
    }
    for (int c = 0; c < 10; c++) {
        if (conta[c] > 0) {
            printf("%d: %d\n", c, conta[c]);
        }
    }
    return 0;
}
```
Con `a1b22c333` stampa `1: 1`, `2: 2`, `3: 3`. È lo schema dei questionari, con `s[i] - '0'` come indice. Provato.
:::

::: esercizio base Riscaldamento: maiuscole
Scrivi un programma che legge una parola e la stampa tutta in maiuscolo, modificando l'array.
::: soluzione
```c
#include <stdio.h>
#include <ctype.h>

int main(void) {
    char s[31] = "";
    scanf("%30s", s);
    for (size_t i = 0; s[i] != '\0'; i++) {
        s[i] = (char)toupper((unsigned char)s[i]);
    }
    printf("%s\n", s);
    return 0;
}
```
Con `Ciao2026!` stampa `CIAO2026!`: cifre e punteggiatura restano come sono. Provato.
:::

::: esercizio medio Somma selettiva come funzione
Riscrivi la somma selettiva come funzione `int sommaSelettiva(size_t n, const int a[])`, per `n >= 1`, con una sola `return`.
::: soluzione
```c
int sommaSelettiva(size_t n, const int a[]) {
    int min = a[0];
    for (size_t i = 1; i < n; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    int soglia = min * min;
    int somma = 0;
    for (size_t i = 0; i < n; i++) {
        if (a[i] >= soglia) {
            somma = somma + a[i];
        }
    }
    return somma;
}
```
`sommaSelettiva(4, (int[]){2, 3, 4, 6})` vale 10. L'array è `const` perché la funzione lo legge soltanto (06B). Provato.
:::

::: esercizio medio È palindroma?
Scrivi `bool palindroma(const char* s)` che dice se una parola si legge uguale nei due versi, con due indici che si vengono incontro e una sentinella.
::: soluzione
```c
#include <stdbool.h>
#include <stddef.h>

bool palindroma(const char* s) {
    size_t len = 0;
    while (s[len] != '\0') {
        len++;
    }
    bool ok = true;                 // per ogni coppia simmetrica i, len-1-i
    size_t i = 0;
    while (i < len / 2 && ok) {
        if (s[i] != s[len - 1 - i]) {
            ok = false;
        } else {
            i++;
        }
    }
    return ok;
}
```
`radar`, `osso` e la stringa vuota danno `true`; `ciao` dà `false`. È un «per ogni» sulle coppie simmetriche, che sono `len / 2`. Provato.
:::

::: esercizio esame Tutte cifre e almeno una pari, nello stile di `e1`
Scrivi una funzione iterativa `bool e1(const char* s)` che restituisce `true` se `s` non è vuota, tutti i suoi caratteri sono cifre **ed** esiste una cifra pari. Niente `break`, una sola `return`.
::: soluzione
```c
#include <stdbool.h>
#include <ctype.h>

bool e1(const char* s) {
    bool tutteCifre = true;     // per ogni carattere: è una cifra
    bool esistePari = false;    // esiste una cifra pari
    size_t i = 0;
    while (s[i] != '\0' && tutteCifre) {
        if (!isdigit((unsigned char)s[i])) {
            tutteCifre = false;
        } else {
            if ((s[i] - '0') % 2 == 0) {
                esistePari = true;
            }
            i++;
        }
    }
    return i > 0 && tutteCifre && esistePari;
}
```
`"1357"` dà `false` (nessuna pari), `"1352"` `true`, `"12a4"` `false`, `""` `false` (il testo chiede una stringa non vuota: `i > 0`). Il ciclo del «per ogni» non si ferma al primo pari, perché deve controllare ancora che le cifre siano tutte cifre. Provato.
:::

::: esercizio difficile Copia di una stringa senza le vocali
Scrivi `void senzaVocali(const char* src, char dst[], size_t dstCap)` che copia in `dst` i caratteri di `src` che non sono vocali (maiuscole o minuscole), senza superare la capacità e chiudendo sempre con il terminatore. Precondizione: `dstCap >= 1`.
::: soluzione
```c
#include <stdbool.h>
#include <stddef.h>
#include <ctype.h>

bool vocale(char c) {
    char m = (char)tolower((unsigned char)c);
    return m == 'a' || m == 'e' || m == 'i' || m == 'o' || m == 'u';
}

void senzaVocali(const char* src, char dst[], size_t dstCap) {
    size_t j = 0;                          // dimensione di dst
    for (size_t i = 0; src[i] != '\0' && j < dstCap - 1; i++) {
        if (!vocale(src[i])) {
            dst[j] = src[i];
            j++;
        }
    }
    dst[j] = '\0';
}
```
È la selezione della [07A](07A_algoritmi_su_array.html) su una stringa: `j` è la dimensione, e il posto `dstCap - 1` resta per il terminatore. `Programmazione` con capacità 20 dà `Prgrmmzn`; con capacità 5 dà `Prgr`. Provato.
:::

## Domande di ripasso

::: domanda Come si contano le frequenze di valori da 1 a 5?
Con un array di 5 contatori a zero e `frequenze[v - 1]++` per ogni valore `v`.
:::

::: domanda Quando bisogna memorizzare una sequenza invece di elaborarla mentre la si legge?
Quando la decisione su ogni elemento dipende da un dato che si conosce solo alla fine, come il minimo nella somma selettiva.
:::

::: domanda Perché `char nome[50]` non basta per un nome di 50 caratteri?
Perché serve un posto in più per il terminatore `'\0'`.
:::

::: domanda Come si copia una stringa in un altro array senza `strcpy`?
Carattere per carattere finché non si trova `'\0'`, e poi si scrive il terminatore nella destinazione.
:::

::: domanda Che cosa restituisce `isupper('Q')`, e come lo si trasforma in 1?
Un `int` diverso da zero. Assegnandolo a un `bool`, oppure con `isupper('Q') != 0`.
:::

## Glossario

```glossario
size_t | Tipo intero senza segno per dimensioni e indici degli array; si stampa con %zu.
Contatori per categoria | Array di contatori, uno per ogni valore possibile, incrementati con il valore come indice.
ASCII | Tabella di 128 codici per lettere, cifre, simboli e caratteri di controllo.
Terminatore | Il carattere '\0', di codice 0, che chiude una stringa.
%Ns | Formato di scanf che legge una parola di al massimo N caratteri.
ctype.h | Libreria con le funzioni che classificano e convertono i caratteri.
Cortocircuito | L'operatore && non calcola la seconda condizione se la prima è falsa.
CodeRunner | Il sistema di Moodle che compila il programma e confronta l'output con quello atteso.
```

## Checklist

```checklist
- So dichiarare, riempire e sommare un array con indici size_t.
- So contare le frequenze con un array di contatori.
- So quando servono due passate su un array.
- So dichiarare e riempire una stringa, con il terminatore.
- So leggere una parola con %Ns e la dimensione giusta.
- So copiare una stringa carattere per carattere.
- So usare le funzioni di ctype.h e stamparne il risultato come 0 o 1.
- So scrivere «per ogni» ed «esiste» su un array e su una stringa.
- So riconoscere lo schema giusto per ogni proprietà di una password.
```

## Fonti

- Slide «Array e stringhe» (Lezione nº 5 di laboratorio, Lab05A), Programmazione I – Laboratorio, canale B, A.A. 2026/27: array e `size_t` (slide 2–4), questionari (5), somma selettiva (6), stringhe, ASCII e terminatore (7–11), alfabeto (12), montagne (13), quantificatori (14–15), `ctype.h` (16), passwords (17), Indovina chi? (18).
- Codice di partenza del Lab05 2025/26 (Moodle canale B, `codice_iniziale05`) e soluzioni del canale A 2025/26: i testi degli esercizi CodeRunner riportati qui vengono da quelle soluzioni e dagli appunti di uno studente; i testi 2026/27 su Moodle possono essere diversi.
- P. Deitel, H. Deitel, *C: How to Program*, p. 247, citato nella slide 2.
- Tutti i programmi li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror`, ed eseguiti sugli esempi citati. Le soluzioni, i quiz e gli esercizi sono di questi appunti.
