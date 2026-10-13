---
corso: PROG1
lezione: 03A
titolo: Scambiare due variabili
data: 2026-10-13
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 03A
descrizione: >-
  Appunti della lezione 03A di Programmazione I (canale B): scambiare il contenuto di due variabili, perché lo scambio
  ovvio x = y; y = x; non funziona, lo scambio con la variabile d'appoggio passo per passo nel modello della memoria,
  l'ordine delle istruzioni, la rotazione di tre e quattro variabili, con programmi provati, quiz ed esercizi.
lede: >-
  Due tazze, una di tè verde e una di tè nero: come le scambi senza mescolarle? Serve una terza tazza vuota, e i
  travasi vanno fatti nell'ordine giusto. Con le variabili è lo stesso, ed è un'operazione che ritroverai in tutti gli
  algoritmi di ordinamento.
materiale: slide
scheda:
  Slide: 03A_scambio_variabili («Scambiare variabili. Uso delle variabili temporanee») · 16 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 45–60 minuti
fonte: >-
  Slide «Scambiare variabili. Uso delle variabili temporanee» (03A_scambio variabili), Programmazione I – Teoria,
  canale B, A.A. 2026/27
appunti_html: appunti/PROG1/03A_scambio_variabili.html
genera_html: true
---

## In breve

- **Scambiare** due variabili vuol dire che, alla fine, ognuna contiene il valore che aveva l'altra. È un'operazione che serve in molti algoritmi, per esempio per ordinare un elenco.
- Lo scambio «ovvio», `x = y;` seguito da `y = x;`, **non funziona**: il primo assegnamento cancella il vecchio valore di `x`, e alla fine le due variabili valgono uguale.
- Serve una **variabile d'appoggio**, dello stesso tipo, che conservi per un momento uno dei due valori. Si chiama di solito `temp` o `aux`.
- Lo scambio corretto ha tre passi, in quest'ordine: `temp = x;`, poi `x = y;`, poi `y = temp;`.
- L'**ordine** conta: con gli stessi tre assegnamenti in un altro ordine il valore di `x` si perde di nuovo.
- È come scambiare due tazze di tè senza mescolarle: serve una tazza vuota, e i travasi vanno fatti nell'ordine giusto.

> [!CANALI]
> **Canale B.** È la prima parte della lezione di martedì 13/10, dalle 11 alle 13, insieme alla [03B](03B_floats.html) sui numeri reali. Riprende il modello della memoria della [02B](02B_assegnamento_memory_model.html): l'assegnamento copia un valore e cancella quello di prima.
>
> **Canali A e C.** Le slide 2026/27 dei canali A e C per questa lezione non le ho viste. Lo scambio con la variabile d'appoggio è un argomento comune, e l'esame è unico per i tre canali.
>
> **Laboratorio.** Nel [Laboratorio 02](Lab02_operatori_tipi.html) c'è il programma `scambio.c` e l'esercizio `scambio4.c`, che scambia quattro variabili in giro.

## Due tazze da scambiare (slide 2–4)

Hai due tazze: una contiene tè verde, l'altra tè nero. Vuoi **scambiarne il contenuto**: alla fine il tè verde deve stare nella tazza che era del nero, e viceversa. Però non puoi versare l'uno nell'altro: i due tè si mescolerebbero.

La prima idea delle slide usa **due** tazze vuote in più. Versi il verde nella prima tazza vuota, il nero nella seconda, poi rimetti ognuno al suo nuovo posto. Funziona, ma usa il doppio dello spazio.

Si può fare di meglio, con **una sola** tazza vuota:

1. versi il tè verde nella tazza vuota;
2. versi il tè nero nella tazza che era del verde, ora libera;
3. versi il tè verde dalla tazza d'appoggio nella tazza che era del nero, ora libera.

> [!IDEA]
> Per scambiare due contenuti senza mescolarli serve un posto libero dove mettere da parte uno dei due. Poi i passaggi vanno fatti in un ordine preciso: si libera una tazza prima di riempirla.

Le slide insistono su questo: la soluzione con una tazza sola funziona ed è efficiente, **ma i travasi devono avvenire nell'ordine giusto**. Se al passo 1 versassi il nero nella tazza del verde, mescoleresti tutto.

::: prova Nella soluzione con una tazza d'appoggio, quante tazze sono piene dopo il passo 1? E dopo il passo 2?
Dopo il passo 1 sono piene la tazza del nero e la tazza d'appoggio: quella del verde è libera. Dopo il passo 2 sono piene la tazza del verde, che ora contiene il nero, e la tazza d'appoggio: è libera quella che era del nero.
:::

> [!RICORDA]
> - Per scambiare senza mescolare serve un posto in più, vuoto.
> - L'ordine dei travasi conta: prima si libera una tazza, poi la si riempie.

## Lo scambio che non funziona (slide 5–10)

Con le variabili il problema è lo stesso. Le tazze sono le caselle della memoria, e il tè è il valore. Ma c'è una differenza importante con l'acqua: l'**assegnamento** della [lezione 02B](02B_assegnamento_memory_model.html) non versa, **copia** e **cancella**. Con `x = y;` il valore di `y` viene copiato in `x`, e quello che c'era prima in `x` è perso.

Il primo modo che viene in mente, e che le slide chiamano «naïve», è questo:

```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int y = 2;
    x = y;      // assegno il contenuto di y a x
    y = x;      // assegno il contenuto di x a y
    printf("Le var x, y valgono %d, %d\n", x, y);
}
```

Ci si aspetta `2, 5`. Invece il programma stampa:

```
Le var x, y valgono 2, 2
```

### Passo per passo

Le slide seguono le caselle di `x` e `y` dopo ogni istruzione, nel modello della memoria della lezione 02B. Ecco la stessa cosa come tabella: una colonna per variabile, una riga per istruzione.

| Dopo l'istruzione | `x` | `y` | Che cosa è successo |
|---|:-:|:-:|---|
| `int x = 5;` | 5 | | |
| `int y = 2;` | 5 | 2 | |
| `x = y;` | **2** | 2 | il 2 di `y` è copiato in `x`: il **5 è perso** |
| `y = x;` | 2 | **2** | il 2 di `x` è copiato in `y`, che vale già 2 |

Il problema è la terza riga. Dopo `x = y;` il valore 5 non c'è più da nessuna parte. La quarta istruzione non può rimetterlo in `y`: sovrascrive `y` con sé stessa.

> [!TRAPPOLA] Il compilatore non ti avvisa
> `x = y; y = x;` compila senza errori e senza avvisi, anche con `-Wall -Werror`: per il C sono due assegnamenti corretti. Lo sbaglio è nella logica, non nella sintassi. Lo trovi solo seguendo i valori, come nella tabella.

::: prova Con `int a = 7; int b = 3;` che cosa valgono `a` e `b` dopo `b = a; a = b;`?
Tutte e due 7. `b = a;` copia 7 in `b` e perde il 3. Poi `a = b;` copia 7 in `a`, che valeva già 7.
:::

> [!RICORDA]
> - L'assegnamento copia e cancella: dopo `x = y;` il vecchio valore di `x` non esiste più.
> - `x = y; y = x;` lascia le due variabili uguali, con il valore di `y`.

## Lo scambio con la variabile d'appoggio (slide 11–16)

Per scambiare correttamente serve una **terza variabile**, dello stesso tipo, che conservi per un momento il valore che sta per essere cancellato. È la tazza vuota. Le slide chiamano questo metodo **scambio con variabile temporanea**, o con **variabile d'appoggio**.

I tre passi sono quelli delle tazze:

1. salvo il valore di `x` nella variabile d'appoggio;
2. copio il valore di `y` in `x`;
3. copio il valore della variabile d'appoggio in `y`.

```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int y = 2;
    int temp;
    temp = x;   // [1] salvo x
    x = y;      // [2] copio y in x
    y = temp;   // [3] copio il vecchio x in y
    printf("Le var x, y valgono %d, %d\n", x, y);
}
```

Stampa:

```
Le var x, y valgono 2, 5
```

### Passo per passo

| Dopo l'istruzione | `x` | `y` | `temp` | Che cosa è successo |
|---|:-:|:-:|:-:|---|
| `int x = 5;` | 5 | | | |
| `int y = 2;` | 5 | 2 | | |
| `int temp;` | 5 | 2 | ? | `temp` esiste ma non ha ancora un valore |
| `temp = x;` | 5 | 2 | **5** | il 5 è al sicuro in `temp` |
| `x = y;` | **2** | 2 | 5 | il 5 in `x` è perso, ma c'è una copia |
| `y = temp;` | 2 | **5** | 5 | lo scambio è fatto |

Il «?» è il valore indeterminato della lezione 02B: una variabile dichiarata e non ancora assegnata contiene bit a caso. Qui non è un problema, perché `temp` viene scritta prima di essere letta. Alla fine `temp` contiene ancora 5: non serve più, e non dà fastidio.

> [!NOTA] I nomi delle variabili d'appoggio
> Le slide elencano i nomi più usati: `temp`, `aux`, `prevX`, `savedX`, `backup`. Il nome dice a chi legge che la variabile serve solo a tenere un valore per poco. Si può anche dichiarare e assegnare in una riga sola: `int temp = x;`, come nel programma `scambio.c` del laboratorio.

### L'ordine conta

Con gli stessi tre assegnamenti in un altro ordine, lo scambio fallisce. Prova a mettere prima `x = y;`:

```c
int x = 5;
int y = 2;
int temp;
x = y;      // il 5 è perso subito
temp = x;   // temp riceve il 2
y = temp;   // y riceve il 2
```

Il programma stampa `2, 2`, come lo scambio sbagliato. La variabile d'appoggio c'è, ma arriva tardi: quando salvi `x`, il 5 è già stato cancellato. È la tazza vuota usata dopo aver già mescolato i tè.

> [!METODO] Scrivere uno scambio senza sbagliare
> 1. Scegli quale variabile salvare per prima, per esempio `x`.
> 2. Primo assegnamento: `temp = x;`. Ora `x` si può sovrascrivere.
> 3. Secondo: `x = y;`. Ora `y` si può sovrascrivere.
> 4. Terzo: `y = temp;`.
>
> Ogni riga comincia con la variabile che la riga prima ha appena «liberato». È la catena `temp ← x ← y ← temp`.

::: prova Scambia `a` e `b` usando `aux`, salvando per prima `b`. Scrivi le tre righe.
`aux = b;` poi `b = a;` poi `a = aux;`. La catena è `aux ← b ← a ← aux`: ogni riga riempie la variabile liberata dalla riga prima.
:::

> [!RICORDA]
> - Tre passi: `temp = x;`, `x = y;`, `y = temp;`.
> - La variabile d'appoggio è dello stesso tipo delle altre due.
> - Se salvi `x` dopo averlo sovrascritto, lo scambio fallisce.

## Scambiare più di due variabili

Lo stesso metodo funziona con più variabili. Pensa a una **rotazione**: ogni variabile prende il valore della successiva, e l'ultima prende quello della prima. Basta ancora **una sola** variabile d'appoggio.

Con tre variabili `a`, `b`, `c`, che valgono 1, 2, 3, la rotazione vuole `a` = 2, `b` = 3, `c` = 1:

```c
int temp = a;   // salvo a, che sarà sovrascritta per prima
a = b;
b = c;
c = temp;
```

| Dopo l'istruzione | `a` | `b` | `c` | `temp` |
|---|:-:|:-:|:-:|:-:|
| inizio | 1 | 2 | 3 | |
| `int temp = a;` | 1 | 2 | 3 | 1 |
| `a = b;` | 2 | 2 | 3 | 1 |
| `b = c;` | 2 | 3 | 3 | 1 |
| `c = temp;` | 2 | 3 | 1 | 1 |

Ogni riga riempie la variabile che la riga prima ha liberato. È la stessa catena dello scambio, solo più lunga. L'esercizio `scambio4.c` del [Laboratorio 02](Lab02_operatori_tipi.html) chiede proprio questo, con quattro variabili.

> [!OLTRE] Scambiare senza variabile d'appoggio
> Con gli interi c'è un trucco: `x = x + y; y = x - y; x = x - y;`. Con 5 e 2: `x` diventa 7, poi `y` = 7 − 2 = 5, poi `x` = 7 − 5 = 2. Funziona, ma è più difficile da leggere, e se `x + y` supera il massimo di un `int` va in overflow (lezione 02B). Non funziona con i `float`, che perdono cifre. Con la variabile d'appoggio non c'è nessun rischio: è il modo da usare sempre, anche all'esame.

::: prova Con `int p = 10, q = 20, r = 30;` scrivi le righe che portano a `p` = 30, `q` = 10, `r` = 20.
È la rotazione al contrario: ognuno prende il valore della variabile prima. `int temp = r;` poi `r = q;` poi `q = p;` poi `p = temp;`.
:::

> [!RICORDA]
> - Per ruotare $n$ variabili basta una variabile d'appoggio.
> - Si salva per prima la variabile che verrà sovrascritta per prima.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `x = y;` | «x prende y» | copia il valore di `y` in `x`; il vecchio `x` è perso | |
| `temp`, `aux` | «temp», «aux» | nomi tipici della variabile d'appoggio | `int temp = x;` |
| ? | «indeterminato» | negli schemi: variabile senza un valore assegnato | `int temp;` |
| swap | «suop» | il nome inglese dello scambio | |

## Verso l'esame

L'esame di Programmazione I è al PC, unico per i tre canali: appelli **lunedì 25/01/2027** e **giovedì 11/02/2027**. Lo scambio tornerà almeno in tre modi.

1. **Esercizi sullo stato della memoria.** Si chiede il valore delle variabili dopo una sequenza di assegnamenti. Lo scambio sbagliato e quello con l'ordine sbagliato sono trappole perfette: la tabella «una riga per istruzione» li smaschera.
2. **Ordinare un array.** Gli algoritmi di ordinamento, come il *bubble sort* citato nelle slide, scambiano due elementi a ogni passo. Lo scambio è sempre quello con la variabile d'appoggio.
3. **Una funzione che scambia.** Con i puntatori della [lezione 02C](02C_referenziamento_scanf_puntatori.html) si scriverà una funzione che scambia due variabili del chiamante: dentro ci sono gli stessi tre passi, con `*pA` e `*pB` al posto di `x` e `y`.

> [!METODO] Le domande sugli scambi
> 1. Fai la tabella: una colonna per variabile, una riga per istruzione.
> 2. A ogni assegnamento, **cancella** il valore vecchio della variabile a sinistra e scrivi quello nuovo.
> 3. Controlla alla fine: i valori di partenza ci sono ancora tutti? Se un valore è sparito, lo scambio è sbagliato.

**Errori da evitare**

- Scrivere `x = y; y = x;`.
- Salvare nella variabile d'appoggio dopo aver già sovrascritto.
- Usare una variabile d'appoggio di un tipo diverso: con `int temp` e due `double` la parte dopo la virgola si perde (lezione 03B).
- Dimenticare che `temp` non serve più dopo lo scambio: non va stampata, non è un risultato.

## Quiz

```quiz
D: Con `int x = 4, y = 9;` che cosa valgono `x` e `y` dopo `x = y; y = x;`?
+ `x` = 9, `y` = 9
- `x` = 9, `y` = 4
- `x` = 4, `y` = 4
- `x` = 4, `y` = 9
- Il programma non compila
= `x = y;` copia 9 in `x` e perde il 4. `y = x;` copia 9 in `y`. La risposta più insidiosa è `x` = 9, `y` = 4: è lo scambio che si voleva, ma il 4 non esiste più quando serve. Il codice compila senza avvisi.

D: Quale sequenza scambia correttamente `x` e `y`?
+ `temp = x; x = y; y = temp;`
- `x = y; temp = x; y = temp;`
- `temp = x; y = x; x = temp;`
- `x = y; y = x;`
- `temp = y; x = y; y = temp;`
= Si salva `x`, poi si sovrascrive `x`, poi si mette il vecchio `x` in `y`. La risposta più insidiosa è `x = y; temp = x; y = temp;`: ha gli stessi tre pezzi, ma salva `x` quando il suo valore è già perso. L'ultima salva `y` e poi sovrascrive `x` senza averlo salvato.

D: Con `int a = 1, b = 2;` che cosa stampa `int t = a; a = b; b = t; printf("%d %d", a, b);`?
+ `2 1`
- `1 2`
- `2 2`
- `1 1`
- `2 1 1`
= È lo scambio corretto: alla fine `a` vale 2 e `b` vale 1. La risposta più insidiosa è `2 1 1`: `t` vale ancora 1, ma `printf` stampa solo `a` e `b`.

D: Per scambiare due variabili `double`, di che tipo deve essere la variabile d'appoggio?
+ `double`
- `int`
- `float`
- un tipo qualsiasi
- non serve una variabile d'appoggio con i `double`
= La variabile d'appoggio deve contenere esattamente il valore salvato, quindi deve avere lo stesso tipo. La risposta più insidiosa è `float`: è un tipo reale, ma ha meno cifre e il valore salvato verrebbe approssimato. Con `int` si perderebbe tutta la parte dopo la virgola.

D: Con `int a = 1, b = 2, c = 3;` quanto vale `c` dopo `int t = a; a = b; b = c; c = t;`?
N: 1
= È la rotazione: `a` prende 2, `b` prende 3, `c` prende il vecchio valore di `a`, che era 1 ed era salvato in `t`.

D: Quanti assegnamenti servono, al minimo, per scambiare due variabili con la variabile d'appoggio, contando anche quello in `temp`?
+ 3
- 2
- 4
- 1
- 6
= Salvare, sovrascrivere la prima, sovrascrivere la seconda. La risposta più insidiosa è 2: con due soli assegnamenti un valore si perde sempre, come in `x = y; y = x;`.

D: Perché `x = y; y = x;` compila senza avvisi anche con `-Wall -Werror`?
+ Sono due assegnamenti corretti: l'errore è nella logica, non nella sintassi
- Perché `-Wall` non controlla gli assegnamenti
- Perché gcc corregge da solo lo scambio
- Perché gli `int` non danno mai avvisi
- In realtà gcc dà un avviso
= Per il compilatore sono due istruzioni valide: non sa che cosa volevi fare. La risposta più insidiosa è «gcc corregge da solo»: il compilatore traduce quello che hai scritto, senza indovinare le intenzioni.
```

## Esercizi

::: esercizio base Riscaldamento: segui i valori
Con `int x = 8; int y = 3; int z = 0;` che cosa valgono le tre variabili dopo `z = x; x = y; y = z;`? E dopo `z = x; y = x; x = z;`, ripartendo dagli stessi valori?
::: soluzione
1. Prima sequenza: `z` = 8, poi `x` = 3, poi `y` = 8. Alla fine `x` = 3, `y` = 8, `z` = 8: è uno scambio corretto, con `z` come variabile d'appoggio.
2. Seconda sequenza: `z` = 8, poi `y` = 8, poi `x` = 8. Alla fine valgono tutte 8: il 3 di `y` è stato perso al secondo passo.
:::

::: esercizio base Riscaldamento: il programma scambio.c del laboratorio
Il programma `scambio.c` del Laboratorio 02 scambia `x = 5` e `y = 8` e stampa i valori prima e dopo. Scrivilo tu, compila con `-Wall -Werror` e controlla le due righe stampate.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int y = 8;
    printf("x: %d, y: %d\n", x, y);

    // scambio x con y usando una variabile intermedia
    int temp = x;
    x = y;
    y = temp;

    printf("x: %d, y: %d\n", x, y);
}
```
Stampa:
```
x: 5, y: 8
x: 8, y: 5
```
:::

::: esercizio base Riscaldamento: due double
Scrivi lo scambio di `double a = 1.5;` e `double b = -4.25;` e stampa i valori con `%f`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    double a = 1.5;
    double b = -4.25;
    double tmp = a;
    a = b;
    b = tmp;
    printf("a = %f, b = %f\n", a, b);
}
```
Stampa `a = -4.250000, b = 1.500000`. La variabile d'appoggio è `double`, come le altre due.
:::

::: esercizio medio Rotazione di tre variabili
Con `int a = 1, b = 2, c = 3;` scrivi le istruzioni che portano a `a` = 2, `b` = 3, `c` = 1, usando una sola variabile d'appoggio. Poi fai la tabella dei valori.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a = 1;
    int b = 2;
    int c = 3;
    int tmp = a;
    a = b;
    b = c;
    c = tmp;
    printf("a = %d, b = %d, c = %d\n", a, b, c);
}
```
Stampa `a = 2, b = 3, c = 1`. La tabella è quella della sezione «Scambiare più di due variabili».
:::

::: esercizio medio Trova l'errore
Uno studente vuole scambiare `x` e `y` e scrive `int temp = y; y = x; x = y;`. Che cosa ottiene con `x = 5`, `y = 2`? Correggi cambiando una sola riga.
::: soluzione
`temp` = 2, poi `y` = 5, poi `x` = 5: tutte e due valgono 5, e il 2 è rimasto in `temp` senza essere usato. L'ultima riga deve prendere il valore salvato: `x = temp;`. Con la correzione la catena è `temp ← y ← x ← temp`.
:::

::: esercizio esame Stato della memoria
Scrivi il valore di ogni variabile dopo ogni istruzione, partendo da `int a = 4; int b = 7; int c = 1; int t;`: (1) `t = a;` (2) `a = c;` (3) `c = b;` (4) `b = t;` (5) `t = c;`. Alla fine, che cosa è successo ai valori di partenza?
::: soluzione
| Dopo | `a` | `b` | `c` | `t` |
|---|:-:|:-:|:-:|:-:|
| dichiarazioni | 4 | 7 | 1 | ? |
| `t = a;` | 4 | 7 | 1 | 4 |
| `a = c;` | 1 | 7 | 1 | 4 |
| `c = b;` | 1 | 7 | 7 | 4 |
| `b = t;` | 1 | 4 | 7 | 4 |
| `t = c;` | 1 | 4 | 7 | 7 |

I tre valori 4, 7, 1 ci sono ancora tutti: è una rotazione, `a` ha preso il valore di `c`, `c` quello di `b`, `b` quello di `a`. L'ultima istruzione cambia solo `t`, che non conta.
:::

::: esercizio esame scambio4.c del Laboratorio 02
Scrivi un programma che prende quattro variabili intere `v1`, `v2`, `v3`, `v4`, con valori a scelta, e le scambia così: `v1` prende il valore di `v2`, `v2` quello di `v3`, `v3` quello di `v4`, `v4` quello di `v1`. Stampa i valori prima e dopo.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int v1 = 10;
    int v2 = 20;
    int v3 = 30;
    int v4 = 40;
    printf("prima: v1 = %d, v2 = %d, v3 = %d, v4 = %d\n", v1, v2, v3, v4);

    int temp = v1;   // salvo v1, che verra' sovrascritto per primo
    v1 = v2;
    v2 = v3;
    v3 = v4;
    v4 = temp;

    printf("dopo:  v1 = %d, v2 = %d, v3 = %d, v4 = %d\n", v1, v2, v3, v4);
}
```
Stampa:
```
prima: v1 = 10, v2 = 20, v3 = 30, v4 = 40
dopo:  v1 = 20, v2 = 30, v3 = 40, v4 = 10
```
Provato con gcc 16.1 e `-Wall -Werror`. Una sola variabile d'appoggio basta per qualunque rotazione.
:::

## Domande di ripasso

::: domanda Perché `x = y; y = x;` non scambia le due variabili?
Perché l'assegnamento cancella il valore di prima: dopo `x = y;` il vecchio valore di `x` non c'è più, e `y = x;` copia in `y` il valore che aveva già.
:::

::: domanda Quali sono i tre passi dello scambio con la variabile d'appoggio?
`temp = x;` per salvare `x`; `x = y;` per mettere `y` in `x`; `y = temp;` per mettere il vecchio `x` in `y`.
:::

::: domanda Perché l'ordine dei tre passi conta?
Perché si può sovrascrivere una variabile solo dopo averne salvato il valore. Se si scrive prima `x = y;`, il valore di `x` è perso prima di essere salvato.
:::

::: domanda Di che tipo deve essere la variabile d'appoggio?
Dello stesso tipo delle variabili da scambiare, altrimenti il valore salvato può essere cambiato o approssimato.
:::

::: domanda Quante variabili d'appoggio servono per ruotare quattro variabili?
Una sola: si salva la prima che verrà sovrascritta, e ogni assegnamento riempie la variabile liberata da quello prima.
:::

## Glossario

```glossario
Scambio (swap) | Operazione che mette in ciascuna di due variabili il valore che aveva l'altra.
Variabile d'appoggio | Variabile in più, dello stesso tipo, che conserva per poco un valore che sta per essere sovrascritto; detta anche variabile temporanea.
Sovrascrivere | Assegnare un nuovo valore a una variabile: il valore di prima è perso.
Rotazione | Scambio a catena tra più variabili: ognuna prende il valore della successiva, l'ultima quello della prima.
Valore indeterminato | Contenuto di una variabile dichiarata e non ancora assegnata; negli schemi «?».
```

## Checklist

```checklist
- So spiegare perché `x = y; y = x;` non scambia due variabili.
- So scrivere lo scambio con la variabile d'appoggio, nell'ordine giusto.
- So seguire uno scambio con la tabella «una riga per istruzione».
- So scegliere il tipo giusto per la variabile d'appoggio.
- So ruotare tre o quattro variabili con una sola variabile d'appoggio.
```

## Fonti

- Slide «Scambiare variabili. Uso delle variabili temporanee» (03A_scambio variabili), Programmazione I – Teoria, canale B, A.A. 2026/27, Elvio Amparore: le tazze di tè (slide 2–4), lo scambio sbagliato passo per passo (slide 5–10), lo scambio con la variabile d'appoggio passo per passo (slide 11–16).
- Laboratorio 02 «Operatori e Tipi», canale B: il programma `scambio.c` e l'esercizio `scambio4.c` (slide 18).
- I programmi di questi appunti sono stati compilati con gcc 16.1 e `-Wall -Werror` ed eseguiti; le stampe riportate sono quelle vere. La rotazione di tre variabili, il trucco con le somme, le tabelle passo per passo, i quiz e gli esercizi senza indicazione sono di questi appunti.
