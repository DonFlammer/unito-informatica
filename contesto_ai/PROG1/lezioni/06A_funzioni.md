---
corso: PROG1
lezione: 06A
titolo: Funzioni
data: 2026-10-28
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 06A
descrizione: >-
  Appunti della lezione 06A di Programmazione I (canale B): che cos'è una funzione in C, il parallelo con le funzioni
  della matematica e dove finisce, prototipo, definizione e chiamata, le quattro forme con e senza parametri e valore
  di ritorno, le funzioni in memoria, più parametri e un solo valore di ritorno, le regole del return, il passaggio
  per valore, gli errori più comuni, la divisione di un programma in funzioni con l'esempio del cerchio, con tutti i
  programmi delle slide provati, quiz ed esercizi.
lede: >-
  Finora tutto il programma stava dentro main. Una funzione è un pezzo di codice con un nome, che riceve dei valori,
  fa un lavoro e restituisce un risultato: si scrive una volta e si usa quante volte serve. All'esame ogni esercizio di
  programmazione chiede proprio di scrivere una funzione.
materiale: slide
scheda:
  Slide: 06A_funzioni («Funzioni») · 28 pagine
  Lezione: mercoledì 28/10
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 90 minuti, meglio con gcc a portata di mano
fonte: >-
  Slide «Funzioni. Strumenti per organizzare e riutilizzare il codice, definizione e realizzazione delle funzioni»
  (06A_funzioni), Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/06A_funzioni.html
genera_html: true
---

## In breve

- Una **funzione** è un blocco di codice con un nome: riceve dei valori (i **parametri**), esegue delle istruzioni e può restituire un risultato con `return`.
- Il **prototipo** annuncia nome, tipi dei parametri e tipo del risultato; la **definizione** contiene il codice; la **chiamata** la usa, per esempio `square(3.14f)`.
- Una funzione C somiglia a una funzione della matematica, ma può non restituire niente (`void`), leggere l'input, stampare: con gli stessi argomenti può comportarsi in modo diverso.
- Una funzione restituisce **al massimo un valore**. All'esame, nelle funzioni iterative, la `return` è **una sola**, alla fine.
- I parametri passano **per valore**: la funzione riceve una copia e non può cambiare le variabili di chi la chiama. Per cambiarle si passa il loro indirizzo.
- Un programma si divide in funzioni piccole, una per compito: leggere, calcolare, stampare. È il **divide et impera**.

> [!CANALI]
> **Canale B.** Le slide sono arrivate il 01/11. Le metto alla lezione di mercoledì 28/10, dalle 9 alle 11: è la prima dopo la fine della [05A](05A_array_stringhe.html), il 27/10, e le funzioni nel programma del corso stanno proprio in questa settimana. Se Amparore le ha finite nella lezione dopo, aggiorno la data. Usa le variabili e la memoria della [02B](02B_assegnamento_memory_model.html), i puntatori della [02C](02C_referenziamento_scanf_puntatori.html) e l'operatore `? :` della [03C](03C_booleani.html).
>
> **Canali A e C.** Secondo l'elenco delle lezioni 2025/26 nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md), nel canale A le funzioni arrivano dopo array e matrici, nel canale C subito dopo i cicli. Le slide 2026/27 dei canali A e C non le ho viste. L'esame è unico.
>
> **Due avvisi sulle slide.** Il programma del cerchio (slide 24–26) con un input che non è un numero, per esempio `abc`, stampa l'errore all'infinito: la correzione è nella sezione sull'esempio. E `M_PI` non fa parte dello standard del C: con le opzioni predefinite di gcc c'è, con `-std=c17` no.
>
> Tutti i programmi li ho compilati con gcc 16.1, con `-Wall -Werror`, ed eseguiti.

## Perché servono le funzioni (slide 2–3)

Un programma che calcola tre volte il massimo tra due numeri, senza funzioni, ripete tre volte lo stesso `if`. Ogni copia è un'occasione per sbagliare, e se un giorno il calcolo cambia bisogna correggerlo in tre punti. Con una funzione il calcolo si scrive una volta sola, con un nome, e si usa dove serve:

```c
int max(int a, int b) {
    return (a > b) ? a : b;
}
```

Da qui in poi basta scrivere `max(x, y)`. Le slide citano Gerald Weinberg (1971): «il segreto per scrivere programmi grandi è non scrivere mai programmi grandi», cioè spezzarli in pezzi piccoli.

> [!DEF] Funzione (slide 3)
> In C una **funzione** è un blocco di codice con un nome, che può ricevere dati in ingresso (i **parametri**), eseguire istruzioni e restituire un risultato (il **valore di ritorno**). In altri linguaggi si chiamano anche metodi, procedure o subroutine.

::: prova Che cosa vale `max(3, 8)`? E `max(-1, -5)`?
8 e −1. Il `? :` della [03C](03C_booleani.html) sceglie `a` se la condizione `a > b` è vera, altrimenti `b`.
:::

> [!RICORDA]
> - Una funzione dà un nome a un calcolo e lo rende riutilizzabile.
> - Se lo stesso codice compare più volte, è il segnale che serve una funzione.

## Dalla matematica al C (slide 4–6, 9)

Le funzioni del C prendono il nome da quelle della matematica, e il paragone aiuta a leggerne la sintassi. In matematica $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ dice tre cose: da dove vengono gli argomenti (il **dominio**), dove stanno i risultati (il **codominio**) e la regola che lega i due. Scrivere $f(3) = 9$ vuol dire **valutare** la funzione in 3. In C le stesse tre cose si scrivono così:

```c
float square(float x) {
    return x * x;
}
```

```grafico
titolo: La funzione matematica a sinistra e la funzione C a destra. I tipi fanno da dominio e codominio, il corpo realizza la regola, la chiamata corrisponde alla valutazione
x: 0 12.4
y: 0 5
assi: no
griglia: no
proporzioni: libere
testo: 2.3 4.6 | grigio | "matematica"
testo: 8.9 4.6 | grigio | "C"
testo: 2.3 3.6 | blu | "f : ℝ → ℝ"
freccia: 4.3 3.6 5.5 3.6 | grigio
testo: 8.9 3.6 | blu | "float square(float x)"
testo: 2.3 2.3 | ambra | "f(x) = x²"
freccia: 4.3 2.3 5.5 2.3 | grigio
testo: 8.9 2.3 | ambra | "return x * x;"
testo: 2.3 1.0 | verde | "y = f(3)"
freccia: 4.3 1.0 5.5 1.0 | grigio
testo: 8.9 1.0 | verde | "y = square(3);"
```

- Il **tipo del parametro**, `float`, fa da dominio: dice quali valori la funzione accetta.
- Il **tipo di ritorno**, il primo `float`, fa da codominio: dice che tipo di valore esce.
- Il **corpo** tra le graffe realizza la regola.
- La **chiamata** `square(3)` corrisponde alla valutazione $f(3)$.

> [!DEF] Sintassi di una funzione (slide 5)
> `<tipo_ritorno> nomeFunzione(<lista_parametri>) { istruzioni; return valore; }`. Il tipo di ritorno è `int`, `float`… oppure `void` se la funzione non restituisce niente. Ogni parametro ha tipo e nome. La `return` è obbligatoria se il tipo non è `void`.

::: prova Scrivi l'intestazione di una funzione `cubo` che riceve un `int` e restituisce un `int`.
`int cubo(int x)`. Il corpo sarà `{ return x * x * x; }`.
:::

> [!RICORDA]
> - Tipo del parametro = dominio, tipo di ritorno = codominio, corpo = regola, chiamata = valutazione.
> - `void` vuol dire «nessun valore».

## Prototipo, definizione e chiamata (slide 6–8)

Le parti di una funzione in un programma sono tre.

| Parte | Che cosa contiene | Esempio |
|---|---|---|
| **prototipo** (facoltativo) | nome, tipo di ritorno e tipi dei parametri, senza codice, con il punto e virgola | `float square(float x);` |
| **definizione** | lo stesso, più il corpo con le istruzioni | `float square(float x) { return x * x; }` |
| **chiamata** | l'uso della funzione in un'espressione, con gli argomenti | `float r = square(a);` |

Il primo esempio delle slide mette il prototipo prima di `main` e la definizione dopo:

```c
#include <stdio.h>

// PROTOTIPO (dichiarazione)
float square(float x);

int main(void) {
   float a = 3.14f;
   float risultato = square(a);   // CHIAMATA alla funzione
   printf("%f al quadrato = %f\n", a, risultato);
}

// DEFINIZIONE (implementazione)
float square(float x) {
   return x * x;   // RETURN: restituisce un float al chiamante
}
```

Stampa `3.140000 al quadrato = 9.859601`. Il `main` senza `return` va bene: per `main`, e solo per `main`, il C restituisce 0 da solo alla fine.

Durante la chiamata il programma salta dentro la funzione, dove `x` vale una copia di `a`. Esegue il corpo e torna nel punto di partenza con il valore della `return`.

```grafico
titolo: Che cosa succede nella chiamata `square(a)`. Il valore di `a` viene copiato in `x` (freccia in alto), la funzione esegue il corpo, e la `return` riporta il risultato nel punto della chiamata (freccia in basso), dove finisce in `risultato`
x: 0 12.4
y: 0 4.4
assi: no
griglia: no
proporzioni: libere
poligono: 0.2 0.3 4.8 0.3 4.8 3.9 0.2 3.9 | blu
testo: 2.5 3.45 | blu | "main"
testo: 2.5 2.75 | grigio | "a = 3.14"
testo: 2.5 2.05 | accento | "risultato ="
testo: 2.5 1.5 | accento | "square(a)"
testo: 2.5 0.8 | grigio | "printf(...)"
poligono: 7.8 0.9 12.2 0.9 12.2 3.3 7.8 3.3 | ambra
testo: 10.0 2.85 | ambra | "square"
testo: 10.0 2.1 | grigio | "x = 3.14"
testo: 10.0 1.4 | grigio | "return x * x"
freccia: 4.9 2.0 7.7 2.5 | verde
testo: 6.3 2.75 | verde | "copia"
freccia: 7.7 1.4 4.9 1.5 | rosa
testo: 6.3 0.95 | rosa | "9.8596"
```

Il prototipo serve perché il compilatore legge il file dall'alto in basso. Se `main` usa `square` prima di averla vista, gcc 16 si ferma con `error: implicit declaration of function 'square'`, anche senza `-Wall`. Le soluzioni sono due: il prototipo in cima, oppure la definizione intera prima di `main`. Il prototipo deve corrispondere alla definizione in tutto: nome, tipo di ritorno, numero e tipi dei parametri.

> [!TRAPPOLA] Il punto e virgola
> Il prototipo finisce con `;`, la definizione no: dopo la parentesi tonda della definizione vengono subito le graffe.

::: prova In un file `main` viene prima e chiama `media(a, b)`, definita più in basso come `float media(int x, int y)`. Che riga serve in cima perché compili?
Il prototipo `float media(int x, int y);`, con il punto e virgola.
:::

> [!RICORDA]
> - Prototipo: l'annuncio, con `;`. Definizione: il codice. Chiamata: l'uso.
> - Una funzione va dichiarata prima di essere chiamata.

## Quattro forme di funzione (slide 11)

Parametri e valore di ritorno sono tutti e due facoltativi, quindi le combinazioni sono quattro.

| | con valore di ritorno | senza (`void`) |
|---|---|---|
| **con parametri** | `int max(int a, int b)`: riceve e restituisce | `void stampaQuadrato(float x)`: riceve e fa un'azione |
| **senza parametri** | `int leggiNumero(void)`: legge e restituisce | `void saluto(void)`: fa un'azione e basta |

```c
int leggiNumero(void) {
    int x;
    scanf("%d", &x);
    return x;
}

void stampaQuadrato(float x) {
    printf("%f\n", x * x);
}

void saluto(void) {
    printf("Ciao!\n");
}
```

Il `void` tra le parentesi dice che la funzione non vuole argomenti; il `void` davanti dice che non restituisce niente. Una funzione `void` si chiama come un'istruzione, `saluto();`. Non si può usare il suo risultato: `int x = saluto();` non compila (`void value not ignored as it ought to be`), e nemmeno `return 1;` dentro una funzione `void`.

::: prova Di che forma è `float leggiPrezzo(void)`? E `void stampaRiga(int n)`?
La prima non ha parametri e restituisce un `float`. La seconda riceve un `int` e non restituisce niente: stamperà qualcosa.
:::

> [!RICORDA]
> - `void` davanti: nessun risultato. `void` tra le parentesi: nessun parametro.
> - Il risultato di una funzione `void` non si può usare.

## Dove il paragone si ferma (slide 10)

Una funzione matematica è una relazione: a ogni argomento associa un solo risultato, sempre lo stesso. Una funzione C invece è un **comportamento** eseguito da una macchina, e qui le due cose si separano.

- Può **non restituire niente** (`void`).
- Può **leggere o cambiare lo stato** del programma: leggere l'input, stampare, scrivere in memoria attraverso un puntatore. Questi effetti si chiamano **effetti collaterali**.
- Quindi **con gli stessi argomenti può dare risultati diversi**: `leggiNumero()` restituisce ogni volta quello che l'utente scrive.

Una funzione come `square`, che calcola solo dai parametri e non tocca altro, si comporta invece proprio come una funzione matematica.

::: prova `int conta(void)` legge numeri finché arriva 0 e restituisce quanti erano. Chiamata due volte di fila, dà sempre lo stesso risultato?
No: ogni chiamata legge una sequenza diversa dall'input. È un effetto collaterale, la lettura, che la matematica non ha.
:::

> [!RICORDA]
> - Effetto collaterale: tutto quello che una funzione fa oltre a calcolare il risultato (input, output, scritture in memoria).
> - Senza effetti collaterali, stessi argomenti, stesso risultato.

## Le funzioni stanno in memoria (slide 12)

Dopo la compilazione anche il codice delle funzioni sta in memoria, nella **sezione del codice** del programma. Il nome di una funzione rappresenta l'indirizzo della sua prima istruzione: è un **puntatore a funzione**. Le slide lo mostrano stampando con `%p` gli indirizzi di `main` e di `square`:

```c
#include <stdio.h>

int square(int x);

int main(void) {
    printf("main addr %p\n", main);
    printf("square addr %p\n", square);
}

int square(int x) {
 return x * x;
}
```

Gli indirizzi delle slide, `0x0010` e `0x004B`, sono un esempio. Sul mio PC, con Windows, il programma stampa `main addr 00007FF62EA81760` e `square addr 00007FF62EA817A4`, e a ogni avvio gli indirizzi cambiano. Con `-Wall -Werror` compila; con `-Wpedantic` gcc avvisa che `%p` vorrebbe un `void *` e non un puntatore a funzione, perché lo standard del C non garantisce questa conversione. All'esame non serve: basta sapere che una funzione ha un indirizzo come le variabili.

::: prova Nel programma, `square` è scritta dopo `main`. Il suo indirizzo è più alto o più basso di quello di `main`?
Sul mio PC più alto: `…17A4` contro `…1760`, 0x44 byte dopo. Il compilatore ha messo il codice nell'ordine del file, ma lo standard non lo garantisce.
:::

> [!RICORDA]
> - Il codice delle funzioni sta nella sezione del codice; il nome della funzione è il suo indirizzo.

## Più parametri, un solo risultato (slide 13–14)

Una funzione può avere più parametri, separati da virgole, ognuno con il suo tipo. Nella chiamata gli argomenti si assegnano **in ordine**:

```c
float potenza(float base, int exp);   // prototipo

float risultato = potenza(10, 3);     // base = 10, exp = 3
```

Una definizione possibile, con un ciclo della [04A](04A_iterazioni.html):

```c
// base elevato a exp, con exp >= 0
float potenza(float base, int exp) {
    float p = 1;
    for (int i = 0; i < exp; i++) {
        p = p * base;
    }
    return p;
}
```

`potenza(10, 3)` vale 1000, `potenza(2.5f, 2)` vale 6.25, `potenza(7, 0)` vale 1. Nel prototipo i nomi dei parametri si possono omettere, `float potenza(float, int);`, ma con i nomi si capisce meglio che cosa sono.

Il **valore di ritorno è uno solo**. Se una funzione deve dare più risultati, le strade sono due: i parametri di uscita con i puntatori, che vedi più sotto, oppure le `struct`, che nel corso non si fanno.

> [!DEF] Regole per la return (slide 14)
> 1. In una funzione con un tipo di ritorno, **ogni percorso** dell'esecuzione deve arrivare a una `return` con un valore di quel tipo. Buona pratica: **una sola `return`, alla fine**.
> 2. In una funzione `void` la `return` si può omettere; se c'è, è senza valore: `return;`.

**Come si legge.** Se un `if` ha la `return` solo in un ramo, quando si passa dall'altro ramo la funzione arriva alla fine senza valore. gcc lo segnala con `control reaches end of non-void function`, che con `-Werror` è un errore.

> [!ESAME] Una sola return
> All'esame, nelle funzioni **iterative**, la `return` deve essere **una sola** (regola d'esame, nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md)). Il risultato si tiene in una variabile, che il ciclo aggiorna, e si restituisce alla fine, come `p` in `potenza`.

::: prova Che cosa non va in `int segno(int x) { if (x > 0) { return 1; } if (x < 0) { return -1; } }`?
Con `x == 0` non si incontra nessuna `return`: gcc dà `control reaches end of non-void function`. Con una sola `return`: `int s = 0; if (x > 0) { s = 1; } else if (x < 0) { s = -1; } return s;`.
:::

> [!RICORDA]
> - Gli argomenti vanno ai parametri in ordine.
> - Un solo valore di ritorno; per altri risultati, i puntatori.
> - Ogni percorso arriva a una `return`; all'esame, una sola, alla fine.

## Il passaggio per valore (slide 15–17)

Due nomi da non confondere:

- il **parametro formale** è la variabile scritta nella definizione, come `x` in `int square(int x)`: è una variabile locale della funzione, che all'inizio della chiamata contiene il valore passato;
- l'**argomento**, o parametro attuale, è il valore scritto nella chiamata, come `5` in `square(5)` o `y` in `square(y)`.

In C il passaggio è sempre **per valore**: il valore dell'argomento viene **copiato** nel parametro formale. La funzione lavora sulla copia e non può cambiare le variabili di chi l'ha chiamata.

```c
void incr(int x) { x++; }              // non modifica il chiamante
void incrPtr(int *p) { (*p)++; }       // modifica la variabile del chiamante

int main(void) {
    int a = 5;
    incr(a);
    printf("dopo incr: a = %d\n", a);        // 5
    incrPtr(&a);
    printf("dopo incrPtr: a = %d\n", a);     // 6
    return 0;
}
```

```grafico
titolo: A sinistra `incr(a)`: `x` riceve una copia di `a`, e l'incremento cambia solo la copia. A destra `incrPtr(&a)`: `p` riceve una copia dell'indirizzo di `a`, e con `*p` la funzione arriva alla variabile di `main`
x: 0 12.4
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.2 3.0 5.8 3.0 5.8 4.9 0.2 4.9 | blu
testo: 1.1 4.5 | blu | "main"
poligono: 2.0 3.25 4.6 3.25 4.6 4.15 2.0 4.15 | blu | pieno
testo: 3.3 3.7 | blu | "a = 5"
poligono: 0.2 0.2 5.8 0.2 5.8 2.1 0.2 2.1 | ambra
testo: 1.1 1.7 | ambra | "incr"
poligono: 2.0 0.45 4.6 0.45 4.6 1.35 2.0 1.35 | ambra | pieno
testo: 3.3 0.9 | ambra | "x = 5 → 6"
freccia: 3.3 3.2 3.3 1.4 | verde
testo: 4.4 2.5 | verde | "copia"
poligono: 6.6 3.0 12.2 3.0 12.2 4.9 6.6 4.9 | blu
testo: 7.5 4.5 | blu | "main"
poligono: 8.4 3.25 11.0 3.25 11.0 4.15 8.4 4.15 | blu | pieno
testo: 9.7 3.7 | blu | "a = 5 → 6"
poligono: 6.6 0.2 12.2 0.2 12.2 2.1 6.6 2.1 | ambra
testo: 7.6 1.7 | ambra | "incrPtr"
poligono: 8.4 0.45 11.0 0.45 11.0 1.35 8.4 1.35 | ambra | pieno
testo: 9.7 0.9 | ambra | "p = &a"
freccia: 9.7 1.4 9.7 3.2 | rosa
testo: 10.6 2.5 | rosa | "*p"
```

Il passaggio resta per valore anche nel secondo caso: quello che si copia è l'**indirizzo** di `a`. È lo stesso meccanismo di `scanf("%d", &x)`, che nella [02C](02C_referenziamento_scanf_puntatori.html) riceveva l'indirizzo per scriverci dentro. Le slide dicono che questo schema si vede in dettaglio più avanti.

| Termine | Dove si trova | Che cosa è | Esempio |
|---|---|---|---|
| parametro formale | nella definizione | variabile locale che riceve il valore | `x` in `int square(int x)` |
| argomento (parametro attuale) | nella chiamata | il valore passato | `5` in `square(5)` |
| passaggio per valore | sempre, in C | l'argomento è copiato, il chiamante non cambia | `incr(a)` non cambia `a` |
| passaggio di un indirizzo | con i puntatori | si copia un puntatore, e con `*` si arriva alla variabile del chiamante | `incrPtr(&a)` cambia `a` |

::: prova Che cosa stampa `int doppio(int x) { x = x * 2; return x; }` chiamata così: `int a = 4; int b = doppio(a); printf("%d %d", a, b);`?
`4 8`. La funzione raddoppia la sua copia `x` e la restituisce; `a` resta 4.
:::

> [!RICORDA]
> - Parametro formale nella definizione, argomento nella chiamata.
> - Si copia sempre il valore. Per cambiare una variabile del chiamante si passa il suo indirizzo.

## Gli errori più comuni (slide 18–20)

Le slide elencano gli errori tipici. Li ho provati tutti con gcc 16.1 e `-Wall -Werror`.

| Errore | Codice | Che cosa dice gcc |
|---|---|---|
| manca la `return` | `int square(int x) { x * x; }` | `statement with no effect` e `control reaches end of non-void function`: con `-Werror` non compila |
| prototipo e definizione diversi | `float square(float x);` e poi `int square(int x) { … }` | `conflicting types for 'square'` |
| manca un argomento | `int m = max(10);` | `too few arguments to function 'max'; expected 2, have 1` |
| argomento del tipo sbagliato | `int n = max(10, 3.5);` | niente: 3.5 diventa 3 in silenzio |

L'ultima riga è la più pericolosa: la conversione da `double` a `int` avviene senza avvisi, perché `-Wall` non la controlla (servirebbe `-Wconversion`). `max(2, 3.5)` vale 3, non 3.5. Un dettaglio sugli esempi della slide 19: le variabili `m` e `n` non vengono mai usate, quindi con `-Wall -Werror` quel `main` non compila comunque (`unused variable`).

Le slide 19–20 aggiungono due consigli di stile:

- **una funzione, un compito**: una `gestisciTutto` che legge, calcola, stampa e scrive su file va spezzata;
- **nomi chiari**: `int f(int a, int b, int c)` non dice niente, `int calcolaPrezzo(int quantita, int sconto, int iva)` sì.

::: prova Perché `float media(int a, int b) { return (a + b) / 2; }` con `media(3, 4)` restituisce 3 e non 3.5?
`a + b` e `2` sono `int`, quindi la divisione è intera e dà 3; poi il 3 diventa `3.0f`. Serve `(a + b) / 2.0f`. È la divisione intera della [03B](03B_floats.html).
:::

> [!RICORDA]
> - Le conversioni negli argomenti avvengono in silenzio.
> - Una funzione, un compito; nomi che dicono che cosa fa.

## Dividere un programma in funzioni (slide 21–28)

Un programma lungo scritto in un solo blocco è difficile da leggere e da correggere. La strategia delle slide è il **divide et impera**:

1. si individua il problema principale;
2. lo si divide in sottoproblemi;
3. si scrive una funzione per ogni sottoproblema;
4. si combinano le funzioni.

Ogni sottoproblema si può dividere ancora, finché i pezzi sono piccoli.

### L'esempio del cerchio

Il problema: leggere il raggio $r \ge 0$ di un cerchio, ripetendo la lettura se l'input non va bene, e stampare circonferenza $2\pi r$ e area $\pi r^2$. I sottoproblemi sono quattro: leggere e controllare l'input, calcolare la circonferenza, calcolare l'area, stampare.

```grafico
titolo: Il programma del cerchio diviso in funzioni: `main` chiama in ordine una funzione di input, due di calcolo e una di output, e da solo non fa nessun conto
x: 0 12.4
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.2 2.1 3.0 2.1 3.0 3.1 0.2 3.1 | accento
testo: 1.6 2.6 | accento | "main"
poligono: 5.0 4.0 12.2 4.0 12.2 4.9 5.0 4.9 | blu
testo: 8.6 4.45 | blu | "leggiRaggio · input"
poligono: 5.0 2.8 12.2 2.8 12.2 3.7 5.0 3.7 | ambra
testo: 8.6 3.25 | ambra | "circonferenza · calcolo"
poligono: 5.0 1.6 12.2 1.6 12.2 2.5 5.0 2.5 | ambra
testo: 8.6 2.05 | ambra | "area · calcolo"
poligono: 5.0 0.4 12.2 0.4 12.2 1.3 5.0 1.3 | verde
testo: 8.6 0.85 | verde | "stampaRisultati · output"
freccia: 3.1 2.9 4.9 4.4 | grigio
freccia: 3.1 2.75 4.9 3.25 | grigio
freccia: 3.1 2.45 4.9 2.05 | grigio
freccia: 3.1 2.3 4.9 0.85 | grigio
```

Il `main` delle slide legge come un riassunto del programma:

```c
#include <stdio.h>
#include <stdbool.h>
#include <math.h>     // per M_PI
// --- Prototipi ---
float leggiRaggio(void);
float circonferenza(float r);
float area(float r);
void stampaRisultati(float r, float c, float a);
// --- Main ---
int main(void) {
    float r = leggiRaggio();
    float c = circonferenza(r);
    float a = area(r);
    stampaRisultati(r, c, a);
}
```

Le funzioni di calcolo e di stampa sono di una riga o due:

```c
float circonferenza(float r) {
    return 2 * M_PI * r;
}

float area(float r) {
    return M_PI * r * r;
}

void stampaRisultati(float r, float c, float a) {
    printf("Raggio = %.2f\n", r);
    printf("Circonferenza = %.2f\n", c);
    printf("Area = %.2f\n", a);
}
```

Con raggio 2 stampa circonferenza 12.57 e area 12.57; con $-1$ e poi 3 stampa prima l'errore e poi 18.85 e 28.27. `M_PI` è la costante $\pi$ di `math.h`. Non fa parte dello standard: gcc la definisce con le opzioni predefinite, ma con `-std=c17` dà `'M_PI' undeclared`. Se serve, si definisce a mano, per esempio `#define PI 3.14159265358979f`.

### La lettura dell'input, e un errore delle slide

La funzione di input delle slide (slide 25) ripete la lettura con un `do-while` finché il valore non va bene:

```c
float leggiRaggio(void) {
    float r;
    bool ripeti;
    do {
        printf("Inserisci il raggio (>= 0): ");
        int esito = scanf("%f", &r);
        ripeti = false;
        if (esito != 1) {
            printf("Errore: inserisci un numero reale.\n");
            ripeti = true;
        }
        else if (r < 0) {
            printf("Errore: il raggio deve essere non negativo.\n");
            ripeti = true;
        }
    } while (ripeti);
    return r;
}
```

> [!TRAPPOLA] Con un input non numerico il ciclo non finisce
> Se l'utente scrive `abc`, `scanf` non riesce a leggere un `float`, restituisce 0 e **lascia `abc` nell'input**. Al giro dopo trova di nuovo `abc`, fallisce di nuovo, e così per sempre: il programma stampa «Errore: inserisci un numero reale.» all'infinito. Succede lo stesso se l'input finisce: `scanf` restituisce `EOF` a ogni giro. L'ho provato, con un tempo massimo per fermarlo.

La correzione: quando la lettura fallisce si butta via il resto della riga con `scanf("%*[^\n]")`, e quando l'input è finito si smette. Il `*` nella maschera della [05A](05A_array_stringhe.html) vuol dire «leggi e non salvare».

```c
float leggiRaggio(void) {
    float r = 0;
    bool ripeti = true;
    while (ripeti) {
        printf("Inserisci il raggio (>= 0): ");
        int esito = scanf("%f", &r);
        if (esito == EOF) {
            printf("\nInput finito: uso il raggio 0.\n");
            r = 0;
            ripeti = false;
        } else if (esito != 1) {
            printf("Errore: inserisci un numero reale.\n");
            scanf("%*[^\n]");   // butta via il resto della riga sbagliata
        } else if (r < 0) {
            printf("Errore: il raggio deve essere non negativo.\n");
        } else {
            ripeti = false;
        }
    }
    return r;
}
```

L'ho provata in tre modi. Con `abc` e poi 5 dà un errore e poi i risultati; con l'input vuoto si ferma con raggio 0; con −2, `x y` e 4 dà due errori e poi i risultati. Ha una sola `return`, come all'esame.

### Che cosa si guadagna

Le slide 27–28 elencano i vantaggi e qualche regola.

- **Leggibilità**: `main` mostra solo la logica generale.
- **Riutilizzo**: `area` serve anche in un altro programma.
- **Manutenzione**: si corregge una funzione senza toccare il resto, come `leggiRaggio` qui sopra.
- **Verifica**: una funzione piccola si prova da sola, con pochi casi.
- **Top-down** si parte da `main` e poi si scrivono le funzioni; **bottom-up** si parte dalle funzioni elementari. In pratica si usano tutti e due.
- **Una funzione, un compito**: è il *Single Responsibility Principle*. Poi nomi coerenti (verbi per le azioni, come `stampaRisultati`), funzioni di input, di calcolo e di output separate, commenti sul «che cosa» e non sul «come». Questi principi tornano nel corso di Ingegneria del Software.

::: prova Nel programma del cerchio, quali funzioni hanno effetti collaterali?
`leggiRaggio` (legge l'input e stampa i messaggi) e `stampaRisultati` (stampa). `circonferenza` e `area` calcolano solo dai parametri: con lo stesso raggio danno sempre lo stesso risultato.
:::

> [!RICORDA]
> - Divide et impera: un sottoproblema, una funzione.
> - Dopo una `scanf` fallita, il testo sbagliato resta nell'input: va scartato, e l'`EOF` va gestito.
> - `M_PI` non è standard.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `float f(int x);` | «prototipo di f» | annuncia nome, tipi dei parametri e del risultato | `float square(float x);` |
| `return e;` | «restituisci e» | esce dalla funzione con il valore `e` | `return x * x;` |
| `void` | «vuoto» | nessun risultato, o nessun parametro | `void saluto(void)` |
| `f(a, b)` | «f di a e b» | chiamata: gli argomenti vanno ai parametri in ordine | `potenza(10, 3)` |
| `int *p` come parametro | «puntatore a int» | la funzione riceve un indirizzo e con `*p` arriva alla variabile | `void incrPtr(int *p)` |
| `%*[^\n]` | «salta il resto della riga» | maschera di `scanf` che legge senza salvare | `scanf("%*[^\n]");` |
| `M_PI` | «pi greco» | costante di `math.h`, non standard | `2 * M_PI * r` |

## Verso l'esame

All'esame di Programmazione I gli esercizi di programmazione sono tutti **funzioni con un'intestazione data**: la funzione iterativa `e1`, quella ricorsiva `e2` e quella sullo heap. CodeRunner chiama la tua funzione con vari argomenti e confronta i risultati. Di questa lezione servono:

1. **rispettare l'intestazione** al carattere: nome, tipo di ritorno, tipi e ordine dei parametri. Se cambia, i test non compilano;
2. **una sola `return`** nelle funzioni iterative, con il risultato tenuto in una variabile;
3. **non stampare** dentro una funzione che deve restituire un valore, se la consegna non lo chiede: i test controllano il valore restituito, e le stampe in più fanno fallire il confronto;
4. **i risultati in più passano per puntatore**, come `incrPtr`: nella [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md) l'esercizio iterativo ha a volte un «risultato extra via puntatore».

Negli esercizi sullo **stato della memoria** ogni chiamata di funzione ha le sue variabili, separate da quelle di `main`: i parametri sono copie. Nell'elenco del corso la lezione successiva è proprio sulla chiamata di funzione: lì si vede come stanno in memoria.

> [!METODO] Scrivere una funzione da una consegna
> 1. Copia l'intestazione esatta e scrivi sotto, a parole, che cosa deve restituire.
> 2. Prova a mano due casi normali e un caso limite (0, un valore negativo, l'input vuoto).
> 3. Dichiara una variabile per il risultato, con il valore giusto per il caso limite.
> 4. Scrivi il ciclo che la aggiorna; alla fine, una sola `return`.
> 5. Scrivi un `main` di prova con i casi del punto 2, compila con `-Wall -Werror` e controlla.

## Quiz

```quiz
D: Quale riga è un **prototipo**?
+ `float square(float x);`
- `float square(float x) { return x * x; }`
- `float r = square(2.0f);`
- `square(float x);`
- `return square;`
= Il prototipo ha tipo di ritorno, nome e parametri, e finisce con il punto e virgola, senza corpo. La più insidiosa è la seconda: è la definizione, che contiene anche il codice.

D: Che cosa stampa `void incr(int x) { x++; }` chiamata con `int a = 5; incr(a); printf("%d", a);`?
+ 5
- 6
- 0
- non compila: `incr` non restituisce niente
- un valore a caso
= `x` è una copia di `a`: l'incremento cambia la copia, non `a`. La più insidiosa è 6, che sarebbe giusta con `incrPtr(&a)`.

D: Quanto vale `max(2, 3.5)` con `int max(int a, int b) { return (a > b) ? a : b; }`?
+ 3
- 3.5
- 2
- non compila con `-Wall -Werror`
- 4
= 3.5 viene convertito in `int`, cioè 3, senza avvisi; poi il massimo tra 2 e 3 è 3. La più insidiosa è «non compila»: `-Wall` non controlla questa conversione.

D: Che cosa dice gcc 16 con `-Wall -Werror` per `int square(int x) { x * x; }`?
+ due errori: l'istruzione non ha effetto e la funzione arriva alla fine senza `return`
- niente: compila e restituisce `x * x`
- solo un avviso, e il programma si compila lo stesso
- `conflicting types for 'square'`
- `implicit declaration of function 'square'`
= Senza `return` il valore calcolato si perde, e la funzione `int` finisce senza risultato: `statement with no effect` e `control reaches end of non-void function`, errori con `-Werror`. La più insidiosa è la seconda: in C l'ultimo valore calcolato non viene restituito da solo.

D: Quale intestazione va bene per una funzione che stampa una riga di `n` asterischi e non restituisce niente?
+ `void stampaRiga(int n)`
- `int stampaRiga(void)`
- `void stampaRiga(void n)`
- `stampaRiga(int n) void`
- `int stampaRiga(int n);` senza corpo
= Riceve un intero e non restituisce niente: `void` davanti, `int n` tra le parentesi. La più insidiosa è l'ultima, che è un prototipo con il tipo di ritorno sbagliato.

D: Una funzione deve calcolare quoziente e resto di una divisione. Come restituisce i due valori?
+ ne restituisce uno con `return` e scrive l'altro attraverso un parametro puntatore
- con `return q, r;`
- con due `return` di seguito
- stampandoli tutti e due
- non si può fare in C
= Una funzione restituisce al massimo un valore; il secondo passa per puntatore, come in `int divisione(int a, int b, int *resto)`. La più insidiosa è `return q, r;`: senza opzioni gcc la compila e l'operatore virgola restituisce solo `r`; con `-Wall -Werror` si ferma (`left-hand operand of comma expression has no effect`).

D: Il programma del cerchio delle slide riceve `abc` come raggio. Che cosa succede?
+ stampa il messaggio d'errore all'infinito
- stampa l'errore una volta e chiede di nuovo il raggio
- usa il raggio 0
- termina con un errore di esecuzione
- `scanf` legge `abc` come 0 e stampa i risultati
= `scanf` fallisce, restituisce 0 e lascia `abc` nell'input, che al giro dopo fa fallire di nuovo la lettura. La più insidiosa è la seconda: è quello che il programma vorrebbe fare, ma senza scartare `abc` non ci riesce.

D: Quante funzioni del programma del cerchio hanno effetti collaterali?
N: 2
= `leggiRaggio` legge e stampa, `stampaRisultati` stampa. `circonferenza` e `area` calcolano soltanto.
```

## Esercizi

::: esercizio base Riscaldamento: che cosa stampa?
```c
int doppio(int x) {
    x = x * 2;
    return x;
}
```
con `int a = 4; int b = doppio(a); printf("%d %d\n", a, b);`
::: soluzione
`4 8`. `x` è una copia di `a`: raddoppiarla non cambia `a`. Provato.
:::

::: esercizio base Riscaldamento: trova l'errore
Ogni riga ha un errore. (a) `float media(int a, int b)` usata in `main` senza prototipo e definita dopo `main`; (b) `void saluto(void) { return 1; }`; (c) `int segno(int x) { if (x > 0) { return 1; } }`; (d) prototipo `int somma(int a, int b);` e chiamata `somma(3);`.
::: soluzione
(a) `implicit declaration of function 'media'`: serve il prototipo in cima. (b) `'return' with a value, in function returning void`. (c) Con `x <= 0` la funzione arriva alla fine senza `return`: `control reaches end of non-void function`, errore con `-Werror`. (d) `too few arguments to function 'somma'`. Tutti gli errori sono quelli veri di gcc 16.1.
:::

::: esercizio medio Somma delle cifre
Scrivi `int sommaCifre(int n)` che, per `n >= 0`, restituisce la somma delle cifre di `n`, con una sola `return`. Per esempio `sommaCifre(1234)` vale 10.
::: soluzione
```c
// somma delle cifre di n, con n >= 0
int sommaCifre(int n) {
    int somma = 0;
    while (n > 0) {
        somma = somma + n % 10;
        n = n / 10;
    }
    return somma;
}
```
`n % 10` è l'ultima cifra, `n / 10` la toglie. Provata: 0 dà 0, 7 dà 7, 1234 dà 10, 2026 dà 10. Cambiare `n` dentro la funzione non cambia la variabile del chiamante, perché `n` è una copia.
:::

::: esercizio medio Il massimo comun divisore
Scrivi `int mcd(int a, int b)` con l'algoritmo di Euclide, per `a > 0` e `b >= 0`: finché `b` non è 0, si sostituisce la coppia `(a, b)` con `(b, a % b)`; alla fine il risultato è `a`.
::: soluzione
```c
int mcd(int a, int b) {
    while (b != 0) {
        int resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
```
Provata: `mcd(12, 8)` vale 4, `mcd(8, 12)` vale 4 (il primo giro scambia i due numeri), `mcd(7, 0)` vale 7, `mcd(35, 64)` vale 1. Serve una variabile temporanea, come nello scambio della [03A](03A_scambio_variabili.html).
:::

::: esercizio esame Quoziente e resto, sul modello dei «risultati extra via puntatore»
Scrivi `int divisione(int a, int b, int *resto)` che, per `b != 0`, restituisce il quoziente di `a` diviso `b` e scrive il resto nella variabile puntata da `resto`. Scrivi anche il `main` che la usa con 17 e 5.
::: soluzione
```c
#include <stdio.h>

int divisione(int a, int b, int *resto) {
    *resto = a % b;
    return a / b;
}

int main(void) {
    int r;
    int q = divisione(17, 5, &r);
    printf("17 = 5 * %d + %d\n", q, r);
    return 0;
}
```
Stampa `17 = 5 * 3 + 2`; con 20 e 4 dà quoziente 5 e resto 0. Il chiamante passa `&r`, l'indirizzo della sua variabile, come con `scanf`. Compilato con `-Wall -Werror`.
:::

::: esercizio difficile Una lettura che non si blocca
Scrivi `int leggiIntero(int min, int max)` che chiede un intero finché ne arriva uno tra `min` e `max`. Deve sopravvivere a un input non numerico e all'input finito (in quel caso restituisce `min`), con una sola `return`.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int leggiIntero(int min, int max) {
    int x = min;
    bool ripeti = true;
    while (ripeti) {
        printf("Numero tra %d e %d: ", min, max);
        int esito = scanf("%d", &x);
        if (esito == EOF) {
            x = min;
            ripeti = false;
        } else if (esito != 1) {
            printf("Non è un numero.\n");
            scanf("%*[^\n]");
        } else if (x < min || x > max) {
            printf("Fuori dall'intervallo.\n");
        } else {
            ripeti = false;
        }
    }
    return x;
}
```
Provata con `leggiIntero(18, 30)`: con `ciao`, 35 e 27 dà due messaggi e poi 27; con l'input vuoto restituisce 18; con `12x` legge 12 (fuori dall'intervallo), poi scarta `x`, poi trova l'input finito e restituisce 18. È lo schema della `leggiRaggio` corretta.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra prototipo, definizione e chiamata?
Il prototipo annuncia nome e tipi, con il punto e virgola. La definizione contiene anche il codice. La chiamata usa la funzione con degli argomenti.
:::

::: domanda Perché `incr(a)` non cambia `a`?
Perché in C gli argomenti si passano per valore: `incr` lavora su una copia. Per cambiare `a` serve l'indirizzo, `incrPtr(&a)`.
:::

::: domanda Quanti valori può restituire una funzione con `return`, e come se ne ottengono altri?
Al massimo uno. Gli altri si scrivono attraverso parametri puntatore.
:::

::: domanda Che cos'è un effetto collaterale?
Tutto quello che una funzione fa oltre a calcolare il risultato: leggere l'input, stampare, scrivere in memoria attraverso un puntatore. Per questo una funzione C può dare risultati diversi con gli stessi argomenti.
:::

::: domanda Perché il programma del cerchio delle slide si blocca con `abc`?
Perché `scanf` fallisce e lascia `abc` nell'input, e il ciclo la ritrova a ogni giro. Va scartata, per esempio con `scanf("%*[^\n]")`.
:::

## Glossario

```glossario
Funzione | Blocco di codice con un nome, che riceve parametri, esegue istruzioni e può restituire un valore.
Prototipo | Dichiarazione della funzione: tipo di ritorno, nome e tipi dei parametri, senza corpo, con il punto e virgola.
Definizione | La funzione completa, con il corpo.
Chiamata | Uso della funzione con degli argomenti, per esempio square(3).
Parametro formale | Variabile della definizione che riceve il valore passato.
Argomento | Valore passato nella chiamata (detto anche parametro attuale).
Passaggio per valore | L'argomento è copiato nel parametro: la funzione non cambia le variabili del chiamante.
Valore di ritorno | Il risultato restituito con return; al massimo uno.
void | Nessun valore di ritorno, o nessun parametro.
Effetto collaterale | Azione di una funzione oltre al risultato: input, output, scritture in memoria.
Divide et impera | Dividere un problema in sottoproblemi, una funzione per ognuno.
```

## Checklist

```checklist
- So scrivere prototipo, definizione e chiamata di una funzione.
- So riconoscere le quattro forme, con e senza parametri e valore di ritorno.
- So spiegare in che cosa una funzione C somiglia a una funzione matematica e in che cosa no.
- So che una funzione va dichiarata prima di essere chiamata.
- So che gli argomenti si passano per valore, e come si cambia una variabile del chiamante con un puntatore.
- So scrivere una funzione con una sola return, con il risultato in una variabile.
- So riconoscere gli errori di gcc su return mancante, tipi in conflitto e argomenti mancanti.
- So dividere un problema in funzioni di input, calcolo e output.
- So scartare l'input sbagliato dopo una scanf fallita.
```

## Fonti

- Slide «Funzioni. Strumenti per organizzare e riutilizzare il codice, definizione e realizzazione delle funzioni» (06A_funzioni), Programmazione I – Teoria, canale B, A.A. 2026/27, E. G. Amparore: perché le funzioni (slide 2–3), funzione matematica e funzione C (4–6, 9–10), prototipo, definizione e chiamata (7–8), le quattro forme (11), funzioni in memoria (12), più parametri e return (13–14), passaggio dei parametri (15–17), errori comuni e nomi (18–20), divide et impera e l'esempio del cerchio (21–26), vantaggi e buone regole (27–28).
- G. M. Weinberg, *The Psychology of Computer Programming*, 1971, citato nella slide 2.
- Regole d'esame dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md) e dalla [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md).
- Tutti i programmi delle slide e delle soluzioni li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror` (alcuni anche con `-std=c17` o `-Wpedantic`, dove lo dico), ed eseguiti; quelli che non finiscono, con un tempo massimo. Gli errori e le stampe citati sono quelli veri. La correzione di `leggiRaggio`, i quiz e gli esercizi sono di questi appunti.
