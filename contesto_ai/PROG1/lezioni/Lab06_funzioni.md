---
corso: PROG1
lezione: Lab06
titolo: "Laboratorio 06: funzioni"
data: 2026-11-09
docenti: Elisa Marengo (turno B2) e Valerio Basile (turno B1); teoria Elvio Amparore
sopratitolo: Canale B · Laboratorio 06 · Programmazione I
descrizione: >-
  Appunti del sesto laboratorio di Programmazione I (canale B, Lab06): come si progetta una funzione (nome, parametri,
  tipo di ritorno), numeri primi, funzioni iterative, cambio in monete con ptrdiff_t, statistiche su sequenze con i
  puntatori, passaggio di array con la lunghezza, funzioni su stringhe, vocali, palindroma e Scale e serpi, con tutti i
  programmi provati.
lede: >-
  Il sesto laboratorio è tutto sulle funzioni delle lezioni 06A e 06B: decidere nome, parametri e tipo di ritorno,
  restituire più risultati con i puntatori, passare un array insieme alla sua lunghezza. Qui trovi ogni esercizio
  risolto e provato, con i testi CodeRunner dell'anno scorso.
materiale: slide
scheda:
  Slide: Lab06 «Funzioni», laboratorio canale B · 20 pagine, quattro esercizi su CodeRunner
  Laboratorio: Elisa Marengo (turno B2, lun 09/11) e Valerio Basile (turno B1) · 14–17 · laboratorio Turing
  Tempo di studio: 2–3 ore, davanti a un computer
fonte: >-
  Slide «Funzioni» (Lezione nº 6 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27; codice di
  partenza e soluzioni del Lab06 2025/26 dai Moodle dei canali A e B
appunti_html: appunti/PROG1/Lab06_funzioni.html
genera_html: true
---

## In breve

- Per ogni compito del programma si scrive una **funzione**, e prima di scriverla si decidono tre cose: un **nome** chiaro, i **parametri** che le servono, il **tipo di ritorno**.
- Una funzione che risponde sì o no restituisce un `bool`; una che fa solo stampe restituisce `void`.
- Una funzione restituisce **un solo valore**. Se i risultati sono di più, gli altri tornano al chiamante attraverso **puntatori** ricevuti come parametri.
- A una funzione un **array** arriva come puntatore al primo elemento: la **lunghezza** va passata a parte, in un secondo parametro.
- Per le **stringhe** la lunghezza non serve: la fine la segna il terminatore.
- Un indice `size_t` non scende mai sotto zero: per un ciclo all'indietro fino a 0 si usa `ptrdiff_t`, oppure si conta da `n` a 1 e si usa `i - 1`.
- All'esame la consegna è quasi sempre una funzione con l'intestazione data: una sola `return`, niente `break`.

> [!CANALI]
> **Canale B.** È il sesto laboratorio, al laboratorio Turing, dalle 14 alle 17: turno **B2** lunedì 09/11 con **Elisa Marengo**. Il turno **B1** con **Valerio Basile** è indietro di un laboratorio dalla settimana del 27/10, quindi dovrebbe farlo martedì 17/11. Il laboratorio B2 di lunedì 16/11 è annullato (avviso sul Moodle del corso del 13/11). Gli esercizi usano le funzioni della [06A](06A_funzioni.html), il passaggio di puntatori e di array della [06B](06B_chiamata_funzioni.html) e gli schemi «esiste» e «per ogni» della [07A](07A_algoritmi_su_array.html).
>
> **Canali A e C.** Nel 2025/26 il Lab06 era uguale nei tre canali, con gli stessi esercizi CodeRunner. Le slide 2026/27 dei canali A e C non le ho viste.
>
> **Il materiale che ho e quello che non ho.** Le slide 2026/27 sono uguali a quelle del 2025/26 del canale B, con due pagine in più sul passaggio di array (slide 14–15). Il codice di partenza 2026/27 è su Moodle e non l'ho visto: uso quello del 2025/26 (`primi.c`, `funzioni_iterative.c`, `monete.c`). I testi dei quattro esercizi CodeRunner sono quelli del 2025/26, presi dalle soluzioni pubblicate sul Moodle del canale A; sul Moodle 2026/27 i quattro esercizi hanno gli stessi nomi (Statistiche sequenze, Funzioni su arrays, Palindroma, Scale e Serpi), ma i testi possono essere diversi. Le soluzioni qui sono mie, confrontate con quelle ufficiali. Tutti i programmi li ho compilati con `gcc -Wall -Werror` (gcc 16.1, Windows 11 a 64 bit) ed eseguiti.

## Progettare una funzione: nome, parametri, ritorno (slide 2–6)

Una funzione isola un compito del programma in un blocco con un nome. La slide 2 dà le tre domande da farsi prima di scrivere una riga di codice: come si chiama, che cosa le serve in ingresso, che cosa restituisce. La forma è quella della [06A](06A_funzioni.html):

```c
tipo_di_ritorno nome_funzione(parametro1, parametro2, ...) {
    // codice della funzione
}
```

Le slide 3–6 fanno le tre domande su quattro compiti. Le mie risposte:

| Compito | Intestazione | Perché |
|---|---|---|
| scrivere «Buongiorno!» sul terminale | `void saluta(void)` | non le serve niente e non calcola niente: stampa e basta |
| dire se un numero positivo è primo | `bool verifica_primalita(int n)` | la risposta è sì o no |
| contare le occorrenze di `x` in un array | `size_t conta_occorrenze(const int a[], size_t n, int x)` | servono l'array, **la sua lunghezza** e il numero cercato; un conteggio è un `size_t` |
| leggere una sequenza e restituire media e varianza, se non ci sono errori | `bool leggi_media_varianza(double *media, double *varianza)` | i risultati sono tre: «è andata bene?», media, varianza |

L'ultima riga è il caso che conta di più. Una funzione ha **un solo** valore di ritorno ([06A](06A_funzioni.html)). Qui i risultati sono tre, quindi uno torna con la `return` e gli altri due passano per **puntatori**: il chiamante dà alla funzione gli indirizzi di due sue variabili, e la funzione ci scrive dentro ([06B](06B_chiamata_funzioni.html), `incrPtr` e `swap`). Di solito con la `return` si restituisce l'esito, così il chiamante può scrivere `if (leggi_media_varianza(&m, &v))`.

La parola `const` davanti a `int a[]` promette che la funzione non modifica l'array: se ci prova, il compilatore dà errore.

> [!METODO] Le tre domande
> 1. **Nome.** Un verbo che dice che cosa fa: `conta_occorrenze`, non `funzione1`.
> 2. **Parametri.** Tutto quello che alla funzione serve e che non può calcolare da sola. Per un array: i dati **e** la lunghezza.
> 3. **Ritorno.** Niente: `void`. Sì o no: `bool`. Un numero: il suo tipo. Più risultati: uno con la `return`, gli altri con i puntatori.

::: prova Che intestazione dai a una funzione che riceve due interi e restituisce il maggiore?
`int massimo(int a, int b)`. Due parametri, un risultato intero: nessun puntatore.
:::

> [!RICORDA]
> - Prima il nome, i parametri e il tipo di ritorno, poi il corpo.
> - Più di un risultato: gli altri tornano attraverso puntatori.

## Numeri primi (slide 7–8)

Un numero maggiore di 1 è primo se lo dividono solo 1 e lui stesso. La slide 7 lo traduce in una ricerca: si cerca se **esiste** un divisore `d` con `2 ≤ d < n`. Per 7 si provano 2, 3, 4, 5, 6: nessuno lo divide, quindi è primo. Per 9 ci si ferma al 3, che lo divide: non è primo, e gli altri controlli non servono.

È lo schema «esiste» della [07A](07A_algoritmi_su_array.html): una sentinella che parte da `false` e ferma il ciclo al primo divisore trovato.

```c
#include <stdio.h>
#include <stdbool.h>

bool verifica_primalita(int n);

int main(void) {
    // stampa i numeri primi minori di 100
    for (int n = 2; n < 100; n++) {
        if (verifica_primalita(n)) {
            printf("%d ", n);
        }
    }
    printf("\n");
    return 0;
}

// true se n e' primo, false altrimenti (false per ogni n < 2)
bool verifica_primalita(int n) {
    bool esiste_divisore = false;
    for (int d = 2; d * d <= n && !esiste_divisore; d++) {
        if (n % d == 0) {
            esiste_divisore = true;
        }
    }
    return n >= 2 && !esiste_divisore;
}
```

Stampa `2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97`, come nella slide 8.

Due cose sul codice:

- **Il tipo di ritorno è `bool`**, la risposta alla domanda della slide. Il prototipo sta prima del `main`, la definizione dopo.
- **La condizione `d * d <= n`** ferma la ricerca alla radice di `n`. Se `n = a · b`, uno dei due fattori è al massimo la radice: per 97 bastano i divisori fino a 9, invece di 95 controlli. La versione della slide, con `d < n`, è giusta lo stesso, solo più lenta. La soluzione ufficiale del 2025/26 scrive `i <= sqrt(n)`, che richiede `math.h` e ricalcola la radice a ogni giro: con il prodotto non serve.

> [!TRAPPOLA] Due `return` nel ciclo
> La versione che viene spontanea è `if (n % d == 0) return false;` dentro il ciclo e `return true;` alla fine. Funziona, ma all'esame le funzioni iterative devono avere **una sola `return`**: si usa la sentinella nella condizione del ciclo, come qui.

::: prova Con `verifica_primalita(1)`, quante volte gira il ciclo e che cosa restituisce?
Zero volte, perché `2 * 2 <= 1` è falso. Restituisce `false`: `n >= 2` è falso.
:::

> [!RICORDA]
> - «È primo?» è un «esiste un divisore?» negato: sentinella da `false`, una sola `return`.

## Funzioni iterative (slide 9)

Il file `funzioni_iterative.c` ha un `main` già scritto, da non toccare, che chiama tre funzioni e stampa accanto il risultato atteso. Vanno scritti i prototipi e i corpi.

```c
int esponenziale(int b, int e);
int prodotto_multipli(int n, int m, int q);
void stampa_al_rovescio(int n);

// b elevato a e, con e >= 0
int esponenziale(int b, int e) {
    int risultato = 1;
    for (int i = 0; i < e; i++) {
        risultato = risultato * b;
    }
    return risultato;
}

// prodotto degli interi tra n e m (inclusi) multipli di q
int prodotto_multipli(int n, int m, int q) {
    int prodotto = 1;
    for (int i = n; i <= m; i++) {
        if (i % q == 0) {
            prodotto = prodotto * i;
        }
    }
    return prodotto;
}

// stampa n, n-1, ..., 0
void stampa_al_rovescio(int n) {
    for (int i = n; i >= 0; i--) {
        printf("%d ", i);
    }
    printf("\n");
}
```

Con il `main` del codice di partenza tutti i risultati coincidono con quelli attesi: `esponenziale(3, 6)` dà 729, `esponenziale(0, 0)` dà 1, `prodotto_multipli(1, 30, 10)` dà 6000 (10 · 20 · 30), `prodotto_multipli(27, 42, 8)` dà 1280 (32 · 40), `stampa_al_rovescio(5)` stampa `5 4 3 2 1 0`.

I tipi si leggono dal `main`: le prime due sono stampate con `%d`, quindi restituiscono `int`; la terza è chiamata da sola su una riga, quindi è `void`.

L'accumulatore di un prodotto parte da **1**, non da 0 ([04A](04A_iterazioni.html)). Così `esponenziale(3, 0)` e `esponenziale(0, 0)` danno 1 senza casi speciali: il ciclo non gira.

In `stampa_al_rovescio` l'indice è un `int`, e la condizione `i >= 0` diventa falsa quando `i` arriva a −1. Con un indice `size_t` non succederebbe: è il tema della prossima sezione.

::: prova Che cosa restituisce `prodotto_multipli(3, 6, 2)`?
24: i multipli di 2 tra 3 e 6 sono 4 e 6.
:::

> [!RICORDA]
> - I tipi di parametri e ritorno si ricavano da come il `main` usa la funzione.
> - Un prodotto si accumula partendo da 1.

## Cambio monete (slide 10–12)

Il programma `monete.c` legge una somma in centesimi e stampa il cambio con il minor numero di monete, con i tagli da 1, 2, 5, 10, 20 e 50. Si parte dal taglio più grande: se ne prendono quante ce ne stanno, e con quello che resta si passa al taglio successivo. Per 95: una da 50 (restano 45), due da 20 (restano 5), una da 5.

```grafico
titolo: Il cambio di 95 centesimi. A ogni passo `cambio_taglio` toglie quante monete può del taglio corrente e restituisce il resto, che diventa la somma del passo dopo. I tagli da 10, 2 e 1 non stampano niente
x: 0 12.4
y: 0 3.0
assi: no
griglia: no
proporzioni: libere
poligono: 0.3 1.0 2.3 1.0 2.3 2.0 0.3 2.0 | blu | pieno
testo: 1.3 1.5 | blu | "95"
freccia: 2.4 1.5 4.0 1.5 | ambra
testo: 3.2 2.0 | ambra | "1 da 50"
poligono: 4.1 1.0 6.1 1.0 6.1 2.0 4.1 2.0 | blu | pieno
testo: 5.1 1.5 | blu | "45"
freccia: 6.2 1.5 7.8 1.5 | ambra
testo: 7.0 2.0 | ambra | "2 da 20"
poligono: 7.9 1.0 9.9 1.0 9.9 2.0 7.9 2.0 | blu | pieno
testo: 8.9 1.5 | blu | "5"
freccia: 10.0 1.5 11.3 1.5 | ambra
testo: 10.65 2.0 | ambra | "1 da 5"
testo: 11.8 1.5 | verde | "0"
testo: 6.2 0.4 | grigio | "resto restituito = somma del passo dopo"
```

La slide 11 suggerisce la funzione: `cambio_taglio` riceve la somma e un taglio, stampa quante monete di quel taglio servono e **restituisce il resto**. Il `main` la chiama una volta per taglio, aggiornando la somma.

```c
#include <stdio.h>
#include <stddef.h>

#define NUM_TAGLI 6

// stampa "x da t cent" se x > 0 e restituisce quello che resta
int cambio_taglio(int ammontare, int taglio) {
    int quante = ammontare / taglio;
    if (quante > 0) {
        printf("%d da %d cent\n", quante, taglio);
    }
    return ammontare - quante * taglio;
}

int main(void) {
    int cent;
    printf("Scrivere l'ammontare da convertire in monete: ");
    scanf("%d", &cent);

    const int tagli_monete[NUM_TAGLI] = {1, 2, 5, 10, 20, 50};

    // dal taglio piu' grande al piu' piccolo: l'indice deve poter scendere sotto 0
    for (ptrdiff_t i = NUM_TAGLI - 1; i >= 0; i--) {
        cent = cambio_taglio(cent, tagli_monete[i]);
    }
    return 0;
}
```

Provato sugli esempi della slide 12: 120 dà `2 da 50` e `1 da 20`; 367 dà `7 da 50`, `1 da 10`, `1 da 5`, `1 da 2`; 473 dà `9 da 50`, `1 da 20`, `1 da 2`, `1 da 1`. Con 0 non stampa niente.

La divisione tra interi `ammontare / taglio` dà già il numero di monete, senza sottrazioni ripetute. Il resto si può scrivere anche `ammontare % taglio`.

> [!TRAPPOLA] `size_t` non scende sotto zero
> L'array dei tagli è crescente, quindi va scorso all'indietro. Con `for (size_t i = NUM_TAGLI - 1; i >= 0; i--)` il ciclo **non finisce**: `size_t` è senza segno, e dopo lo 0 non viene −1 ma il numero più grande possibile. Con un array di 3 elementi ho fatto stampare l'indice: `2`, `1`, `0`, `18446744073709551615`, e poi il programma legge fuori dall'array. Con `-Wall -Werror` **compila senza avvisi**; solo aggiungendo `-Wextra` gcc dice `comparison of unsigned expression in '>= 0' is always true`.

Le soluzioni sono due:

- **`ptrdiff_t`**, come dice la slide: un tipo intero **con segno**, grande come `size_t` (8 byte su questo PC), definito in `stddef.h`. Si stampa con `%td`.
- restare con `size_t` e contare da `NUM_TAGLI` a 1, usando `i - 1` come indice: `for (size_t i = NUM_TAGLI; i > 0; i--)` con `tagli_monete[i - 1]`. È la strada della soluzione ufficiale del 2025/26, e della [05A](05A_array_stringhe.html).

::: prova Che cosa stampa il programma con 8 centesimi?
`1 da 5 cent`, `1 da 2 cent`, `1 da 1 cent`.
:::

> [!RICORDA]
> - Ciclo all'indietro fino a 0: `ptrdiff_t`, oppure `size_t` da `n` a 1 con `i - 1`.
> - Una funzione può stampare **e** restituire un valore: qui restituisce il resto.

## Statistiche su sequenze (slide 13, Lab06-Es1)

È il primo esercizio su CodeRunner. Il testo del 2025/26, con lo stesso nome:

> [!NOTA] Lab06-Es1 Statistiche sequenze (testo 2025/26)
> Leggere una serie di sequenze di interi positivi, ognuna terminata dallo zero. Per ogni sequenza stampare su una riga: la somma degli elementi, la somma dei quadrati, il massimo. Se una sequenza non ha elementi, cioè comincia subito con lo zero, il programma termina. Suggerimento: una funzione `leggi_sequenza` che legge una sequenza, restituisce al `main` le tre quantità e restituisce `true` se la sequenza non è vuota.

La slide chiede quali parametri ha `leggi_sequenza` e che cosa restituisce. I risultati sono quattro: tre numeri e un sì o no. Il sì o no torna con la `return`; i tre numeri attraverso tre puntatori. La slide aggiunge che gli array non servono: somma, somma dei quadrati e massimo si aggiornano mentre si legge.

```c
#include <stdio.h>
#include <stdbool.h>

// legge una sequenza terminata da 0; restituisce false se e' vuota
bool leggi_sequenza(int *somma, int *somma_quadrati, int *massimo) {
    int n, quanti = 0;
    *somma = 0;
    *somma_quadrati = 0;
    *massimo = 0;
    while (scanf("%d", &n) == 1 && n != 0) {
        quanti++;
        *somma += n;
        *somma_quadrati += n * n;
        if (n > *massimo) {
            *massimo = n;
        }
    }
    return quanti > 0;
}

int main(void) {
    int somma, somma_quadrati, massimo;
    while (leggi_sequenza(&somma, &somma_quadrati, &massimo)) {
        printf("%d %d %d\n", somma, somma_quadrati, massimo);
    }
    return 0;
}
```

Con l'input `3 4 5 0 7 0 1 2 0 0` stampa tre righe: `12 50 5`, `7 49 7`, `3 5 2`. Poi legge la sequenza vuota e termina. La soluzione ufficiale dà lo stesso output.

Come si legge il codice:

- nel `main` le tre variabili sono normali `int`; alla funzione si passano i loro **indirizzi**, con `&`;
- nella funzione i parametri sono `int *`, e ogni accesso passa per l'asterisco: `*somma += n` aggiunge `n` alla variabile del `main`;
- la chiamata sta nella condizione del `while`: a ogni giro si legge una sequenza, e si esce quando è vuota;
- il massimo può partire da 0 perché gli elementi sono positivi.

> [!TRAPPOLA] `scanf(...) == 1`, non `scanf(...)` da solo
> La soluzione ufficiale del 2025/26 scrive `while (scanf("%d", &n) && n != 0)`. Se l'input finisce senza lo zero finale, `scanf` restituisce `EOF`, che vale −1: è diverso da zero, quindi «vero», e il ciclo **non termina**. L'ho provato con l'input `3 4 5`: il programma ufficiale va avanti finché non lo si ferma, quello qui sopra stampa `12 50 5` ed esce. I test di CodeRunner hanno sempre lo zero finale, ma il confronto con 1 costa poco.

::: prova Con l'input `2 2 0 0`, che cosa stampa?
Una riga: `4 8 2`. Somma 4, quadrati 4 + 4, massimo 2. Poi trova la sequenza vuota e termina.
:::

> [!RICORDA]
> - Tre risultati più un esito: l'esito con la `return`, i tre numeri con tre puntatori.
> - Nel chiamante `&variabile`, nella funzione `*parametro`.

## Passare un array a una funzione (slide 14–16, Lab06-Es2)

Un array si passa a una funzione scrivendo solo il suo nome, perché il nome di un array vale come puntatore al primo elemento ([06B](06B_chiamata_funzioni.html)). Il parametro si scrive in due modi equivalenti: `void fn(int *dati)` oppure `void fn(int dati[])`.

La slide 14 chiede: qual è il problema? La slide 15 risponde: la funzione riceve il puntatore al primo elemento, ma **non riceve la dimensione**. Dentro la funzione `sizeof(dati)` dà la dimensione di un puntatore, 8 byte, non quella dell'array. Quindi la lunghezza va passata in un secondo parametro.

```grafico
titolo: Che cosa arriva alla funzione. Nel `main` l'array `dati` ha 4 caselle. La funzione riceve solo una copia dell'indirizzo della prima (freccia) e, a parte, il numero 4: senza quel numero non saprebbe dove fermarsi
x: 0 12.4
y: 0 4.4
assi: no
griglia: no
proporzioni: libere
testo: 1.2 3.9 | grigio | "main"
poligono: 2.2 3.0 3.6 3.0 3.6 3.8 2.2 3.8 | blu | pieno
testo: 2.9 3.4 | blu | "7"
poligono: 3.6 3.0 5.0 3.0 5.0 3.8 3.6 3.8 | blu | pieno
testo: 4.3 3.4 | blu | "2"
poligono: 5.0 3.0 6.4 3.0 6.4 3.8 5.0 3.8 | blu | pieno
testo: 5.7 3.4 | blu | "9"
poligono: 6.4 3.0 7.8 3.0 7.8 3.8 6.4 3.8 | blu | pieno
testo: 7.1 3.4 | blu | "2"
testo: 9.2 3.4 | blu | "dati"
testo: 1.2 1.5 | grigio | "fn"
poligono: 2.2 0.6 4.6 0.6 4.6 1.4 2.2 1.4 | ambra | pieno
testo: 3.4 1.0 | ambra | "dati (indirizzo)"
freccia: 2.9 1.5 2.9 2.9 | ambra
poligono: 5.6 0.6 7.0 0.6 7.0 1.4 5.6 1.4 | verde | pieno
testo: 6.3 1.0 | verde | "4"
testo: 8.6 1.0 | verde | "n (lunghezza)"
```

Il secondo esercizio su CodeRunner, testo del 2025/26:

> [!NOTA] Lab06-Es2 Funzioni su arrays (testo 2025/26)
> 1. Una funzione `leggi_array` che legge un naturale N, con 0 ≤ N ≤ 20, seguito da N interi, e li scrive in un array ricevuto in ingresso. 2. Una funzione `conta_univoci` che, dato un array, restituisce il numero di elementi che compaiono **una sola volta**. 3. Una funzione `stampa_elementi_ripetuti` che riceve due array e stampa su una riga gli elementi del primo che compaiono anche nel secondo; se un elemento compare più volte nel primo, viene stampato più volte. 4. Un programma che legge due array, stampa i due risultati di `conta_univoci` e poi, su una nuova riga, gli elementi ripetuti.

```c
#include <stdio.h>
#include <stdbool.h>

#define NMAX 20

// legge N (0 <= N <= 20) e poi N interi nell'array; restituisce N
size_t leggi_array(int *a) {
    size_t n;
    scanf("%zu", &n);
    for (size_t i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }
    return n;
}

// quanti elementi compaiono una volta sola
size_t conta_univoci(const int *a, size_t n) {
    size_t univoci = 0;
    for (size_t i = 0; i < n; i++) {
        bool ripetuto = false;
        for (size_t j = 0; j < n && !ripetuto; j++) {
            if (j != i && a[j] == a[i]) {
                ripetuto = true;
            }
        }
        if (!ripetuto) {
            univoci++;
        }
    }
    return univoci;
}

// stampa gli elementi di a che compaiono anche in b
void stampa_elementi_ripetuti(const int *a, size_t na, const int *b, size_t nb) {
    for (size_t i = 0; i < na; i++) {
        bool trovato = false;
        for (size_t j = 0; j < nb && !trovato; j++) {
            if (a[i] == b[j]) {
                trovato = true;
            }
        }
        if (trovato) {
            printf("%d ", a[i]);
        }
    }
    printf("\n");
}

int main(void) {
    int a[NMAX], b[NMAX];
    size_t na = leggi_array(a);
    size_t nb = leggi_array(b);
    printf("%zu %zu\n", conta_univoci(a, na), conta_univoci(b, nb));
    stampa_elementi_ripetuti(a, na, b, nb);
    return 0;
}
```

Con `5 1 2 2 3 4` e poi `4 2 4 9 9` stampa `3 2` e, sotto, `2 2 4`. Nel primo array compaiono una volta sola 1, 3 e 4; nel secondo 2 e 4. Gli elementi del primo che stanno anche nel secondo sono i due 2 e il 4. Con due array vuoti stampa `0 0` e una riga vuota.

Come si legge il codice:

- **Gli array si creano nel `main`** con la dimensione massima, e si passano alle funzioni. `leggi_array` li riempie e **restituisce la lunghezza vera**: il `main` la conserva in `na` e la ripassa a tutte le altre funzioni.
- `leggi_array` riceve `int *a` senza `const`, perché deve scrivere nell'array. Le altre due ricevono `const int *`, perché lo leggono soltanto.
- `conta_univoci` è un «esiste» dentro un «per ogni»: per ogni elemento si cerca se esiste **un altro** elemento uguale. La condizione `j != i` evita di confrontare un elemento con sé stesso.
- `stampa_elementi_ripetuti` ha quattro parametri: due coppie «puntatore, lunghezza».

> [!TRAPPOLA] `%zu` per leggere un `size_t`
> La soluzione ufficiale del 2025/26 legge la lunghezza con `scanf("%lu", &sz)`. Su Linux a 64 bit funziona. Con gcc 16 su Windows non compila: `format '%lu' expects argument of type 'long unsigned int *', but argument 2 has type 'size_t *' {aka 'long long unsigned int *'}`. Il formato giusto ovunque è **`%zu`**.

::: prova Quanto vale `conta_univoci` sull'array `{5, 5, 5}`?
0: ogni 5 ha un altro elemento uguale.
:::

> [!RICORDA]
> - Un array si passa come coppia: puntatore ai dati e lunghezza.
> - `const` sul parametro se la funzione legge soltanto.
> - Una funzione che riempie un array restituisce quanti elementi ha scritto.

## Funzioni su stringhe e vocali (slide 17–18)

La slide 17 ripete le tre funzioni di `string.h` della [06B](06B_chiamata_funzioni.html): `strlen` dà la lunghezza senza il terminatore; `strcmp` confronta due stringhe nell'ordine del dizionario e dà un valore negativo, zero o positivo; `strncpy` copia al massimo `count` caratteri. Nella slide la destinazione è chiamata una volta `dest` e una volta `dst`: è lo stesso parametro.

L'esercizio `vocali.c` chiede tre funzioni: `is_vowel` dice se un carattere è una vocale tra `AEIOUaeiou`; `esistono_vocali` dice se una stringa ne contiene almeno una; `stampa_vocali` stampa solo le vocali. Il programma stampa 1 o 0, e poi le vocali.

```c
#include <stdio.h>
#include <stdbool.h>

#define MAX_LEN 100

bool is_vowel(char c);
bool esistono_vocali(const char *s);
void stampa_vocali(const char *s);

int main(void) {
    char parola[MAX_LEN + 1];
    scanf("%100s", parola);
    printf("%d\n", esistono_vocali(parola));
    stampa_vocali(parola);
    return 0;
}

// true se c e' una delle lettere AEIOUaeiou
bool is_vowel(char c) {
    const char *vocali = "AEIOUaeiou";
    bool trovata = false;
    for (size_t i = 0; vocali[i] != '\0' && !trovata; i++) {
        if (c == vocali[i]) {
            trovata = true;
        }
    }
    return trovata;
}

// true se nella stringa c'e' almeno una vocale
bool esistono_vocali(const char *s) {
    bool trovata = false;
    for (size_t i = 0; s[i] != '\0' && !trovata; i++) {
        if (is_vowel(s[i])) {
            trovata = true;
        }
    }
    return trovata;
}

// stampa solo le vocali, nell'ordine in cui compaiono
void stampa_vocali(const char *s) {
    for (size_t i = 0; s[i] != '\0'; i++) {
        if (is_vowel(s[i])) {
            printf("%c", s[i]);
        }
    }
    printf("\n");
}
```

Con `Programmazione` stampa `1` e `oaaioe`; con `xyz` stampa `0` e una riga vuota; con `AEIOU` stampa `1` e `AEIOU`.

La domanda della slide: **serve ancora passare la dimensione, come per gli array?** No. Una stringa finisce con il terminatore `'\0'`, quindi la funzione scopre da sola dove fermarsi: la condizione del ciclo è `s[i] != '\0'`. È la differenza tra un array qualsiasi e una stringa.

Le funzioni si chiamano a catena: `esistono_vocali` e `stampa_vocali` usano `is_vowel`, che a sua volta scorre la stringa `"AEIOUaeiou"`. Ogni funzione fa una cosa sola. Stampare un `bool` con `%d` dà 1 o 0, perché in C `true` vale 1.

::: prova Che cosa stampa il programma con `Rhythm`?
`0` e poi una riga vuota: la `y` non è nell'elenco delle vocali.
:::

> [!RICORDA]
> - Stringa: basta il puntatore, la fine è il terminatore.
> - Una funzione piccola (`is_vowel`) usata da altre due evita di ripetere il confronto.

## Palindroma (slide 19, Lab06-Es3)

Una parola è palindroma se letta al contrario resta uguale, come `radar`. Il terzo esercizio su CodeRunner, testo del 2025/26:

> [!NOTA] Lab06-Es3 Palindroma (testo 2025/26)
> Leggere una parola di al massimo 50 caratteri (con `%s`) e determinare con una funzione se è palindroma. Se lo è, stampare `PALINDROMA`. Se non lo è, copiarla al contrario con una funzione `capovolgi`, che riceve una stringa `src` e un array di caratteri `dst`, e stampare la parola originale e quella capovolta.

Per controllare basta confrontare il primo carattere con l'ultimo, il secondo con il penultimo, e così via fino a metà parola.

```grafico
titolo: I confronti per la parola `radar`, di lunghezza 5. Si confronta la casella `i` con la casella `n - 1 - i`: la 0 con la 4, la 1 con la 3. La casella centrale non ha bisogno di confronti, quindi bastano `n / 2 = 2` giri
x: 0 12.4
y: 0 3.6
assi: no
griglia: no
proporzioni: libere
poligono: 2.2 1.2 3.8 1.2 3.8 2.2 2.2 2.2 | blu | pieno
testo: 3.0 1.7 | blu | "r"
poligono: 3.8 1.2 5.4 1.2 5.4 2.2 3.8 2.2 | ambra | pieno
testo: 4.6 1.7 | ambra | "a"
poligono: 5.4 1.2 7.0 1.2 7.0 2.2 5.4 2.2 | grigio | tratteggio
testo: 6.2 1.7 | grigio | "d"
poligono: 7.0 1.2 8.6 1.2 8.6 2.2 7.0 2.2 | ambra | pieno
testo: 7.8 1.7 | ambra | "a"
poligono: 8.6 1.2 10.2 1.2 10.2 2.2 8.6 2.2 | blu | pieno
testo: 9.4 1.7 | blu | "r"
testo: 3.0 0.8 | grigio | "0"
testo: 4.6 0.8 | grigio | "1"
testo: 6.2 0.8 | grigio | "2"
testo: 7.8 0.8 | grigio | "3"
testo: 9.4 0.8 | grigio | "4"
segmento: 3.0 2.3 3.0 3.1 | blu
segmento: 3.0 3.1 9.4 3.1 | blu
segmento: 9.4 3.1 9.4 2.3 | blu
segmento: 4.6 2.3 4.6 2.7 | ambra
segmento: 4.6 2.7 7.8 2.7 | ambra
segmento: 7.8 2.7 7.8 2.3 | ambra
testo: 6.2 3.35 | blu | "i = 0"
```

```c
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define WORD_MAX 50

bool palindroma(const char *s);
void capovolgi(char *dst, const char *src);

int main(void) {
    char parola[WORD_MAX + 1], rovescia[WORD_MAX + 1];
    scanf("%50s", parola);
    if (palindroma(parola)) {
        printf("PALINDROMA\n");
    } else {
        capovolgi(rovescia, parola);
        printf("%s %s\n", parola, rovescia);
    }
    return 0;
}

// confronta il primo con l'ultimo, il secondo con il penultimo, ...
bool palindroma(const char *s) {
    size_t n = strlen(s);
    bool uguali = true;
    for (size_t i = 0; i < n / 2 && uguali; i++) {
        if (s[i] != s[n - 1 - i]) {
            uguali = false;
        }
    }
    return uguali;
}

// copia src in dst al contrario, terminatore compreso
void capovolgi(char *dst, const char *src) {
    size_t n = strlen(src);
    for (size_t i = 0; i < n; i++) {
        dst[i] = src[n - 1 - i];
    }
    dst[n] = '\0';
}
```

Provato: `anna`, `radar`, `abba` e `a` danno `PALINDROMA`; `ciao` dà `ciao oaic`; `ab` dà `ab ba`.

`palindroma` è un «per ogni»: tutte le coppie devono essere uguali, quindi la sentinella parte da `true` e il ciclo si ferma alla prima coppia diversa. `capovolgi` scrive in `dst`, che quindi non è `const`, e legge da `src`, che lo è. L'ultima riga è quella che si dimentica: **senza `dst[n] = '\0'` la copia non è una stringa**, e `printf` va avanti a stampare quello che trova in memoria.

Nel `main` servono due array da 51 caratteri: 50 più il terminatore, con `%50s` nella `scanf`.

::: prova Quanti confronti fa `palindroma` sulla parola `abcba`, e quanti su `abxya`?
Due su `abcba`, lunga 5: le coppie (0, 4) e (1, 3). Due anche su `abxya`: la prima coppia è uguale, la seconda no, e il ciclo si ferma.
:::

> [!RICORDA]
> - Simmetria: casella `i` contro casella `n - 1 - i`, fino a metà.
> - Chi costruisce una stringa scrive anche il terminatore.

## Scale e serpi (slide 20, Lab06-Es4)

Scale e serpi è un gioco di percorso con i dadi, simile al Gioco dell'Oca. Nel quarto esercizio su CodeRunner il codice del gioco è già scritto in parte, e va scritta una sola funzione. Il testo del 2025/26:

> [!NOTA] Lab06-Es4 Scale e serpi (testo 2025/26)
> Due giocatori partono dalla casella 1 di un tabellone 10 × 10 e giocano a turni. Chi ha il turno lancia un dado e avanza. Se arriva sulla **base di una scala**, sale alla casella in cima; se arriva sulla **testa di una serpe**, scende alla coda. Chi fa 6 gioca anche il turno successivo. Vince chi per primo raggiunge o supera la casella 100. Le scale (base, cima): (1, 38) (4, 14) (8, 30) (21, 42) (28, 76) (50, 67) (71, 92) (80, 99). Le serpi (testa, coda): (32, 10) (36, 6) (48, 26) (62, 18) (88, 24) (95, 56) (97, 78). Scrivere `muovi_giocatore(int dado, int *pos)`: aggiorna la casella del giocatore e restituisce `true` se gioca ancora.

La funzione ha di nuovo due risultati: la nuova posizione e «gioca ancora?». La posizione torna attraverso il puntatore `pos`; il sì o no con la `return`.

```c
#define NUM_SCALE 8
const int scala_base[NUM_SCALE] = {  1,  4,  8, 21, 28, 50, 71, 80 };
const int scala_cima[NUM_SCALE] = { 38, 14, 30, 42, 76, 67, 92, 99 };

#define NUM_SERPI 7
const int serpe_testa[NUM_SERPI] = { 32, 36, 48, 62, 88, 95, 97 };
const int serpe_coda[NUM_SERPI]  = { 10,  6, 26, 18, 24, 56, 78 };

// se *pos e' una partenza (base di scala o testa di serpe), salta all'arrivo
void segui(int *pos, const int *da, const int *a, size_t n) {
    for (size_t i = 0; i < n; i++) {
        if (*pos == da[i]) {
            *pos = a[i];
        }
    }
}

bool muovi_giocatore(int dado, int *pos) {
    *pos += dado;
    segui(pos, scala_base, scala_cima, NUM_SCALE);
    segui(pos, serpe_testa, serpe_coda, NUM_SERPI);
    return dado == 6;
}
```

Le scale e le serpi sono quattro **array paralleli**: `scala_base[i]` e `scala_cima[i]` descrivono la stessa scala. Scale e serpi fanno la stessa cosa, «se sei qui, vai là», quindi basta una funzione sola, `segui`, chiamata due volte con array diversi: è il passaggio di array con la lunghezza della sezione precedente. A `segui` si passa `pos` senza `&`, perché in `muovi_giocatore` è già un puntatore.

L'ho provata dentro il codice del gioco del 2025/26, con cinque semi diversi del generatore di numeri casuali: la partita finisce sempre con un giocatore a 100 o più, per esempio `1 53 100` o `2 104 99` (turno, posizione del primo, posizione del secondo). Nessuna cima di scala è una testa di serpe, e nessuna coda è una base, quindi l'ordine delle due chiamate non cambia il risultato.

::: prova Un giocatore è sulla casella 2 e fa 6. Dove finisce, e gioca ancora?
Arriva sulla 8, base di una scala: sale alla 30. Ha fatto 6, quindi gioca ancora: la funzione restituisce `true`.
:::

> [!RICORDA]
> - Posizione con il puntatore, «gioca ancora» con la `return`.
> - Due compiti uguali su dati diversi: una funzione sola, chiamata due volte.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `bool f(int n)` | «f restituisce un booleano» | funzione che risponde sì o no | `verifica_primalita(7)` |
| `void f(void)` | «f non riceve e non restituisce niente» | funzione che fa solo un'azione | `saluta()` |
| `int *p` nei parametri | «puntatore a intero» | la funzione scrive nella variabile del chiamante | `leggi_sequenza(&somma, ...)` |
| `const int *a` | «puntatore a interi che non modifico» | array in sola lettura | `conta_univoci(a, n)` |
| `size_t n` accanto all'array | «lunghezza» | quanti elementi ha l'array | `fn(dati, 4)` |
| `ptrdiff_t` | «intero con segno, grande come un indice» | per indici che scendono sotto 0 | `for (ptrdiff_t i = n - 1; i >= 0; i--)` |
| `%zu`, `%td` | «zeta u», «ti di» | formati di `size_t` e di `ptrdiff_t` | `printf("%zu", n)` |

## Verso l'esame

All'esame si programma al PC con CodeRunner, che compila con `-Wall -Werror` e confronta l'output carattere per carattere. La consegna tipica è proprio quella di questo laboratorio: **una funzione con l'intestazione data**, da completare. Da qui servono:

1. **scegliere il tipo di ritorno e i parametri**, e leggerli dal `main` quando è già scritto;
2. **i risultati multipli**: esito con la `return`, valori con i puntatori;
3. **gli array come coppia** puntatore e lunghezza, con `const` dove si legge soltanto;
4. **le regole**: una sola `return` nelle funzioni iterative, niente `break`, quindi sentinelle nelle condizioni dei cicli.

### Una domanda sul modello, letta insieme

Non è un testo d'esame: è sul modello delle funzioni `e1` degli appelli, come quella del pre-esame 2023/24 svolta nella [07A](07A_algoritmi_su_array.html).

«Scrivere una funzione iterativa `conta_comuni` che riceve due array di interi con le loro lunghezze e restituisce quanti elementi del primo compaiono anche nel secondo.»

**In pratica chiede:** per ogni elemento del primo array, un «esiste» sul secondo, e un contatore.

```c
size_t conta_comuni(const int a[], size_t na, const int b[], size_t nb) {
    size_t comuni = 0;
    for (size_t i = 0; i < na; i++) {
        bool trovato = false;
        for (size_t j = 0; j < nb && !trovato; j++) {
            if (a[i] == b[j]) {
                trovato = true;
            }
        }
        if (trovato) {
            comuni++;
        }
    }
    return comuni;
}
```

Con `{1, 2, 2, 3, 4}` e `{2, 4, 9, 9}` restituisce 3; a ruoli scambiati 2; con il primo array vuoto 0. È `stampa_elementi_ripetuti` con un contatore al posto della stampa: una sola `return`, nessun `break`, sentinella nel ciclo interno.

> [!METODO] Una funzione su array all'esame
> 1. Leggi l'intestazione: quali array, quali lunghezze, che cosa restituisce.
> 2. Traduci la richiesta in schemi: conteggio, «esiste», «per ogni», massimo.
> 3. Dichiara il risultato in cima, con il valore giusto per l'array vuoto.
> 4. Scrivi i cicli con le sentinelle nella condizione.
> 5. Una sola `return`, in fondo.

### Errori da evitare

- Usare `sizeof` dentro la funzione per sapere quanto è lungo l'array ricevuto.
- Dimenticare `&` nella chiamata, o l'asterisco dentro la funzione, quando il risultato torna per puntatore.
- Scrivere due `return` in un ciclo per uscire prima.
- Scendere con un indice `size_t` fino a `i >= 0`.
- Costruire una stringa senza il terminatore.

## Quiz

```quiz
D: Una funzione deve leggere una sequenza e restituire al chiamante somma, massimo e l'informazione «la sequenza era vuota?». Quale intestazione va bene?
+ `bool leggi(int *somma, int *massimo)`
- `int leggi(int somma, int massimo)`
- `bool leggi(int somma, int massimo)`
- `void leggi(void)`
- `int, int, bool leggi(void)`
= I risultati sono tre: uno torna con la `return`, gli altri due attraverso puntatori. La più insidiosa è la terza: con parametri `int` la funzione riceve copie, e le variabili del chiamante non cambiano.

D: Dentro `void fn(int dati[])`, chiamata con un array di 10 `int`, quanto vale `sizeof(dati)` su questo PC a 64 bit?
+ 8
- 40
- 10
- 4
- dipende dal contenuto dell'array
= Il parametro è un puntatore, e un puntatore occupa 8 byte. La più insidiosa è 40, che è la dimensione dell'array nel `main`: per questo la lunghezza si passa a parte.

D: Che cosa fa `for (size_t i = 2; i >= 0; i--) { printf("%zu ", i); }`?
+ stampa 2 1 0 e poi continua con numeri enormi, senza fermarsi
- stampa 2 1 0 e si ferma
- stampa 2 1 e si ferma
- non compila con `-Wall -Werror`
- non stampa niente
= `size_t` è senza segno: dopo 0 viene 18446744073709551615, e `i >= 0` è sempre vero. La più insidiosa è «non compila»: l'avviso arriva solo con `-Wextra`.

D: Nella funzione `bool muovi_giocatore(int dado, int *pos)`, quale istruzione fa avanzare il giocatore?
+ `*pos += dado;`
- `pos += dado;`
- `&pos += dado;`
- `pos = dado;`
- `return pos + dado;`
= Con l'asterisco si modifica la variabile del chiamante. La più insidiosa è la seconda: `pos += dado` sposta il puntatore, non il giocatore, e compila.

D: Perché a `esistono_vocali(const char *s)` non serve la lunghezza della stringa?
+ perché la stringa finisce con il terminatore, e il ciclo si ferma lì
- perché `sizeof(s)` dà la lunghezza
- perché le stringhe hanno sempre 100 caratteri
- perché `const` contiene la lunghezza
- perché `scanf` la salva in una variabile globale
= La fine di una stringa è segnata da `'\0'`. La più insidiosa è la seconda: `sizeof(s)` è la dimensione del puntatore, 8.

D: Quante volte gira il ciclo di `palindroma` sulla parola `anna`?
N: 2
= La lunghezza è 4, quindi `n / 2` vale 2: si confrontano le coppie (0, 3) e (1, 2), tutte uguali.

D: `cambio_taglio(45, 20)` che cosa stampa e che cosa restituisce?
+ stampa `2 da 20 cent` e restituisce 5
- stampa `2 da 20 cent` e restituisce 2
- stampa `5 da 20 cent` e restituisce 2
- non stampa niente e restituisce 45
- stampa `2 da 20 cent` e restituisce 40
= 45 / 20 fa 2 tra interi, e restano 45 − 40 = 5. La più insidiosa è la seconda: la funzione restituisce il resto, non il numero di monete.

D: Quale intestazione promette di non modificare l'array ricevuto?
+ `size_t conta(const int *a, size_t n)`
- `size_t conta(int *a, size_t n)`
- `size_t conta(int a[], const size_t n)`
- `const size_t conta(int *a, size_t n)`
- `size_t conta(int *const a, size_t n)`
= `const int *a` vuol dire «puntatore a interi che non cambio». La più insidiosa è l'ultima: `int *const a` blocca il puntatore, non i dati.
```

## Esercizi

::: esercizio base Riscaldamento: contare le occorrenze (slide 5)
Scrivi la funzione della slide 5: conta quante volte il numero `x` compare in un array di interi.
::: soluzione
```c
size_t conta_occorrenze(const int a[], size_t n, int x) {
    size_t quante = 0;
    for (size_t i = 0; i < n; i++) {
        if (a[i] == x) {
            quante++;
        }
    }
    return quante;
}
```
Con `{3, 7, 3, 1, 3}` e `x = 3` dà 3; con `x = 9` dà 0; con lunghezza 0 dà 0. Tre parametri: i dati, la lunghezza, il numero cercato. Provato.
:::

::: esercizio base Riscaldamento: ordinato?
Scrivi `bool ordinato(const int a[], size_t n)`, che dice se l'array è in ordine crescente (elementi uguali ammessi).
::: soluzione
```c
bool ordinato(const int a[], size_t n) {
    bool ok = true;
    for (size_t i = 1; i < n && ok; i++) {
        if (a[i - 1] > a[i]) {
            ok = false;
        }
    }
    return ok;
}
```
È un «per ogni» sulle coppie vicine, come nella [07A](07A_algoritmi_su_array.html). `{1, 3, 3, 8}` dà vero, `{2, 1, 5}` falso, l'array vuoto vero. Il ciclo parte da 1, così `i - 1` non scende mai sotto zero. Provato.
:::

::: esercizio medio Minimo e massimo insieme
Scrivi una funzione che trova il minimo e il massimo di un array non vuoto e li restituisce tutti e due al chiamante.
::: soluzione
```c
void min_max(const int a[], size_t n, int *min, int *max) {
    *min = a[0];
    *max = a[0];
    for (size_t i = 1; i < n; i++) {
        if (a[i] < *min) {
            *min = a[i];
        }
        if (a[i] > *max) {
            *max = a[i];
        }
    }
}
```
Si chiama con `min_max(c, 4, &mn, &mx)`. Con `{4, -2, 9, 0}` dà −2 e 9. Due risultati, nessun esito da comunicare: la funzione è `void` e tutti e due passano per puntatore. Provato.
:::

::: esercizio medio Media e varianza (slide 6)
Scrivi la funzione della slide 6: legge una sequenza di interi positivi terminata da 0 e, se non ci sono errori, restituisce media e varianza.
::: soluzione
```c
bool leggi_media_varianza(double *media, double *varianza) {
    int n, quanti = 0;
    double somma = 0.0, somma_quadrati = 0.0;
    bool errore = false;
    bool finita = false;
    while (!finita && !errore) {
        if (scanf("%d", &n) != 1 || n < 0) {
            errore = true;
        } else if (n == 0) {
            finita = true;
        } else {
            quanti++;
            somma += n;
            somma_quadrati += (double)n * n;
        }
    }
    bool ok = !errore && quanti > 0;
    if (ok) {
        *media = somma / quanti;
        *varianza = somma_quadrati / quanti - (*media) * (*media);
    }
    return ok;
}
```
Con `2 4 4 4 5 5 7 9 0` dà media 5.00 e varianza 4.00. Restituisce falso con la sequenza vuota, con un numero negativo, con un carattere non numerico e se l'input finisce senza lo zero. La varianza è la media dei quadrati meno il quadrato della media. Le due sentinelle `finita` ed `errore` sostituiscono il `break`. Provato.
:::

::: esercizio medio Capovolgere sul posto
Scrivi `void capovolgi_sul_posto(char *s)`, che capovolge la stringa senza usare un secondo array.
::: soluzione
```c
void capovolgi_sul_posto(char *s) {
    size_t n = strlen(s);
    for (size_t i = 0; i < n / 2; i++) {
        char t = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = t;
    }
}
```
`funzione` diventa `enoiznuf`; la stringa vuota resta vuota. È lo scambio con la variabile temporanea della [03A](03A_scambio_variabili.html), sulle stesse coppie di `palindroma`. Il terminatore non si tocca: resta dov'era. Provato.
:::

::: esercizio esame Stampare un array al contrario, con `size_t`
Scrivi `void stampa_al_contrario(const int a[], size_t n)`, che stampa gli elementi dall'ultimo al primo, usando solo indici `size_t`.
::: soluzione
```c
void stampa_al_contrario(const int a[], size_t n) {
    for (size_t i = n; i > 0; i--) {
        printf("%d ", a[i - 1]);
    }
    printf("\n");
}
```
Con `{4, -2, 9, 0}` stampa `0 9 -2 4`; con l'array vuoto solo l'a capo. L'indice va da `n` a 1 e si usa `a[i - 1]`: la condizione `i > 0` diventa falsa a zero, senza mai sottrarre sotto lo zero. Provato.
:::

## Domande di ripasso

::: domanda Quali tre cose si decidono prima di scrivere una funzione?
Il nome, i parametri in ingresso e il tipo di ritorno.
:::

::: domanda Come fa una funzione a restituire più di un risultato?
Uno con la `return`; gli altri scrivendo, attraverso puntatori ricevuti come parametri, in variabili del chiamante.
:::

::: domanda Perché a una funzione che riceve un array va passata anche la lunghezza?
Perché riceve solo il puntatore al primo elemento: da quello non può sapere quanti elementi ci sono.
:::

::: domanda Perché per le stringhe la lunghezza non serve?
Perché finiscono con il terminatore `'\0'`, che la funzione trova scorrendo.
:::

::: domanda Che cosa succede in un ciclo `for (size_t i = n - 1; i >= 0; i--)`?
Non termina: `size_t` è senza segno e `i >= 0` è sempre vero. Si usa `ptrdiff_t`, o si conta da `n` a 1 con `i - 1`.
:::

::: domanda Quando si mette `const` davanti a un parametro array?
Quando la funzione legge l'array senza modificarlo.
:::

## Glossario

```glossario
Prototipo | La riga con tipo di ritorno, nome e parametri di una funzione, seguita dal punto e virgola.
Tipo di ritorno | Il tipo del valore che la funzione restituisce; void se non restituisce niente.
Parametro puntatore | Parametro che contiene l'indirizzo di una variabile del chiamante, per poterla modificare.
ptrdiff_t | Tipo intero con segno grande come size_t, definito in stddef.h; si stampa con %td.
Array paralleli | Due array della stessa lunghezza in cui gli elementi con lo stesso indice vanno insieme.
Sentinella | Variabile booleana nella condizione di un ciclo, che lo ferma senza break.
Palindroma | Parola che letta al contrario resta uguale.
CodeRunner | Il sistema di Moodle che compila il programma e confronta l'output con quello atteso.
```

## Checklist

```checklist
- So scegliere nome, parametri e tipo di ritorno di una funzione.
- So ricavare i tipi di una funzione da come il main la usa.
- So scrivere una funzione che risponde sì o no con una sola return.
- So restituire più risultati con i puntatori, e chiamare la funzione con &.
- So passare un array con la sua lunghezza, con const dove serve.
- So perché per una stringa la lunghezza non va passata.
- So scrivere un ciclo all'indietro senza sbagliare con size_t.
- So costruire una stringa in un array di destinazione, terminatore compreso.
- So usare la stessa funzione su dati diversi invece di copiarla.
```

## Fonti

- Slide «Funzioni» (Lezione nº 6 di laboratorio, Lab06), Programmazione I – Laboratorio, canale B, A.A. 2026/27: come definire le funzioni (slide 2), i quattro compiti da progettare (3–6), verifica di primalità e `primi.c` (7–8), funzioni iterative (9), cambio monete (10–12), statistiche su sequenze (13), passaggio di array (14–16), funzioni su stringhe e vocali (17–18), palindroma (19), Scale e serpi (20).
- Codice di partenza del Lab06 2025/26 (Moodle dei canali A e B: `primi.c`, `funzioni_iterative.c`, `monete.c`) e soluzioni del canale A 2025/26: i testi degli esercizi CodeRunner riportati qui vengono da quelle soluzioni; i testi 2026/27 su Moodle possono essere diversi.
- Tutti i programmi li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror`, ed eseguiti sugli esempi citati; i messaggi del compilatore riportati sono quelli veri. Le soluzioni, la domanda sul modello, i quiz e gli esercizi sono di questi appunti.
