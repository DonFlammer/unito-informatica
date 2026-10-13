---
corso: PROG1
lezione: 03B
titolo: Numeri reali in C, float e double, conversioni di tipo
data: 2026-10-13
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 03B
descrizione: >-
  Appunti della lezione 03B di Programmazione I (canale B): i tipi float e double, precisione e intervallo, la stampa
  con %f, %e e %g e la lettura dei double con %lf, le operazioni sui reali e la libreria math.h, le conversioni di tipo
  implicite e le loro conseguenze, la promozione di tipo, la divisione tra interi che perde la parte frazionaria, il
  cast esplicito, con tutti i programmi delle slide provati, quiz ed esercizi.
lede: >-
  I numeri con la virgola in C si chiamano float e double. Qui vedi come si stampano e si leggono, quante cifre
  tengono davvero, e soprattutto che cosa succede quando mescoli interi e reali nella stessa espressione: è lì che
  5 diviso 2 diventa 2 invece di 2,5.
materiale: slide
scheda:
  Slide: 03B_floats («Numeri reali in C. Float, double, precisione, conversione») · 25 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 90 minuti, meglio con gcc a portata di mano
fonte: >-
  Slide «Numeri reali in C. Float, double, precisione, conversione» (03B_floats), Programmazione I – Teoria, canale B,
  A.A. 2026/27
appunti_html: appunti/PROG1/03B_floats.html
genera_html: true
---

## In breve

- I numeri con la virgola in C sono di due tipi: **`float`**, di solito 4 byte e circa 7 cifre giuste, e **`double`**, di solito 8 byte e circa 15–16 cifre giuste.
- Si stampano con **`%f`** (notazione normale, 6 cifre dopo la virgola), **`%e`** (notazione scientifica) e **`%g`** (la più corta delle due). `%.3f` tiene 3 cifre dopo la virgola.
- Con `scanf`, un `double` si legge con **`%lf`**, non con `%f`.
- Sui reali ci sono `+`, `-`, `*`, `/`, ma **non** il resto `%`. Radici, potenze e altre funzioni sono nella libreria **`math.h`**.
- Quando un'espressione mescola tipi diversi, il C li **converte** da solo: il tipo «più piccolo» diventa quello «più grande». Un intero con un reale dà un reale.
- Ma **tra due interi** la divisione resta intera: in `float z = 5 / 2;` la divisione fa 2, e solo dopo il 2 diventa 2.000000.
- Mettere un reale in un `int` **taglia** la parte dopo la virgola, senza avvisi.
- Il **cast** `(float)y` converte un valore quando lo decidi tu: `x / (float)y` fa la divisione con la virgola.

> [!CANALI]
> **Canale B.** È la seconda parte della lezione di martedì 13/10, dalle 11 alle 13, dopo la [03A](03A_scambio_variabili.html) sullo scambio di variabili. Riprende la tabella dei tipi della [02B](02B_assegnamento_memory_model.html).
>
> **Fondamenti dell'Informatica.** Le slide rimandano a Fondamenti per la codifica dei reali, lo standard **IEEE 754**. L'idea è nella [lezione 03 di Fondamenti](../FDA/03_interi_con_segno_virgola_mobile.html): segno, esponente e mantissa, con un formato da 8 bit invece di 32 o 64.
>
> **Canali A e C.** Le slide 2026/27 dei canali A e C per questa lezione non le ho viste. L'esame è unico, e le conversioni di tipo sono una fonte di errori in tutti gli esercizi con le medie.
>
> **Laboratorio.** Il [Laboratorio 02](Lab02_operatori_tipi.html) fa provare tutto questo con `aritmetica.c`, `media.c` e `circonferenza.c`.

## I numeri con la virgola: float e double (slide 2–3)

Per contare le persone in aula bastano gli interi. Ma per la media dei voti, il prezzo al chilo dei pomodori o la velocità di un'auto servono i numeri con la virgola: una parte intera e una parte frazionaria. In C si chiamano **numeri reali** e hanno due tipi principali.

| Tipo | Dimensione tipica | Cifre giuste, circa | Intervallo, circa | Quando usarlo |
|---|---|---|---|---|
| `float` | 32 bit, 4 byte | 7 cifre decimali | da $10^{-38}$ a $10^{38}$ | per risparmiare memoria, o per calcoli poco delicati |
| `double` | 64 bit, 8 byte | 15–16 cifre decimali | da $10^{-308}$ a $10^{308}$ | calcoli scientifici, quando serve precisione |

Il nome `double` viene da «doppia precisione»: usa il doppio dei bit di `float`. In memoria funzionano come la virgola mobile della lezione 03 di Fondamenti: un bit di segno, un esponente che dice dove sta la virgola, e una mantissa con le cifre. Lo standard che lo descrive si chiama **IEEE 754**.

### Le cifre giuste sono poche

«Circa 7 cifre» vuol dire proprio questo: dopo la settima cifra il numero è approssimato. Ho provato sul mio PC tre stampe con tante cifre:

```c
float f = 0.1f;
double d = 0.1;
printf("%.20f\n%.20f\n", f, d);
```

```
0.10000000149011611938
0.10000000000000000555
```

Un decimo non si scrive esattamente in base 2, come un terzo non si scrive esattamente in base 10. Il `float` sbaglia dall'ottava cifra, il `double` dalla diciottesima. Per la stessa ragione `0.1 + 0.2` in `double` vale `0.30000000000000004`.

> [!TRAPPOLA] I reali non si confrontano con ==
> Siccome quasi tutti i reali sono approssimati, due calcoli che «dovrebbero» dare lo stesso numero spesso differiscono nell'ultima cifra. Confrontare due `double` con `==` è quasi sempre un errore. Lo vedrai con le condizioni: si controlla che la differenza sia molto piccola.

### Le operazioni

Sui reali ci sono le quattro operazioni: `+`, `-`, `*`, `/`. La divisione `/` tra due reali è quella vera, con la virgola: `5.0 / 2.0` fa `2.5`.

Il resto **`%` non c'è**: con due `double` gcc si ferma con `error: invalid operands to binary % (have 'double' and 'double')`. Le slide avvisano che esiste una funzione di libreria, `fmod`, ma nel corso non si usa.

::: prova Quale tipo usi per: (a) il numero di studenti in aula; (b) la temperatura in gradi; (c) un risultato di fisica con 12 cifre giuste?
(a) `int`: è un numero intero. (b) `float` o `double`: ha la virgola; basta anche `float`. (c) `double`: il `float` ha solo circa 7 cifre giuste.
:::

> [!RICORDA]
> - `float`: 4 byte, circa 7 cifre. `double`: 8 byte, circa 15–16 cifre.
> - I reali sono quasi sempre approssimati: niente `==` tra reali.
> - Niente `%` tra reali.

## Stampare e leggere i reali (slide 4–5)

Con `printf` un reale si può stampare in tre modi. Con `double z = 2.5;`:

| Specificatore | Che cosa stampa | Esempio | Quando usarlo |
|---|---|---|---|
| `%f` | notazione con la virgola fissa, 6 cifre dopo la virgola | `2.500000` | la scrittura «naturale» di un numero |
| `%e` | notazione scientifica | `2.500000e+00` | numeri molto grandi o molto piccoli |
| `%g` | la più corta tra `%f` e `%e`, senza zeri inutili | `2.5` | una stampa compatta |

`e+00` vuol dire «per 10 alla 0». Così `1.5e+03` è $1{,}5 \cdot 10^3 = 1500$.

### Quante cifre dopo la virgola

Tra il `%` e la lettera si può scrivere un punto e un numero: è quante cifre stampare dopo la virgola.

```c
printf("z vale %f\n", z);      // z vale 2.500000
printf("z vale %.3f\n", z);    // z vale 2.500
printf("z vale %.3e\n", z);    // z vale 2.500e+00
```

Le slide dicono «troncata al terzo decimale». In realtà `printf` **arrotonda** all'ultima cifra stampata: `printf("%.2f", 1.0 / 3)` stampa `0.33`, e `printf("%.2f", 2.0 / 3)` stampa `0.67`.

Un'altra cosa da sapere: `printf` usa `%f` sia per i `float` sia per i `double`. Quando passi un `float` a `printf`, il C lo trasforma da solo in `double`. Per questo i messaggi di errore di gcc su `%f` parlano sempre di `double`.

### Leggere un double

Con `scanf` le cose cambiano. `scanf` non riceve un valore ma un **indirizzo** (lezione 02C), e deve sapere quanti byte scrivere: 4 per un `float`, 8 per un `double`. Per questo:

- un `float` si legge con `%f`;
- un `double` si legge con **`%lf`** (o `%le`, `%lg`).

```c
double x;
float y;
int letti = scanf("%lf %f", &x, &y);
```

Con l'input `3.25 1.5` il programma legge tutti e due i valori: `letti` vale 2.

> [!TRAPPOLA] %f con un double in scanf
> `double x; scanf("%f", &x);` con `-Wall -Werror` non compila: `error: format '%f' expects argument of type 'float *', but argument 2 has type 'double *'`. Senza le opzioni compila, ma scrive solo 4 degli 8 byte di `x` e il valore letto è sbagliato. In `printf` invece `%f` va bene per tutti e due.

::: prova Che cosa stampano `printf("%.1f", 3.14159)` e `printf("%g", 0.5)`? E come leggi un `double` chiamato `peso`?
`3.1` e `0.5`. Il `double` si legge con `scanf("%lf", &peso);`.
:::

> [!RICORDA]
> - `printf`: `%f`, `%e`, `%g` per `float` e `double`; `%.3f` dà 3 cifre dopo la virgola.
> - `scanf`: `%f` per `float`, `%lf` per `double`.

## Calcoli con i reali e math.h (slide 6–10)

Il primo programma delle slide divide due `float`:

```c
#include <stdio.h>

int main(void) {
    float x = 5, y = 2, z;
    z = x / y;
    printf("La var x vale %f\n", x);
    printf("La var y vale %f\n", y);
    printf("La var z vale %f\n", z);
}
```

```
La var x vale 5.000000
La var y vale 2.000000
La var z vale 2.500000
```

`float x = 5` mette nel `float` il numero 5, che diventa 5.0. La divisione tra due `float` è con la virgola: 2.5.

Le slide 7 e 8 rifanno lo stesso programma con i `double`, e poi con `x` e `y` di tipo `float` e `z` di tipo `double`. Il risultato stampato è sempre 2.500000; cambia solo lo spazio in memoria: 4 byte per ogni `float`, 8 per ogni `double`.

### La libreria math.h

Gli operatori del C fanno solo le operazioni di base. Per radici, potenze, logaritmi e trigonometria c'è la libreria **`math.h`**, da includere con `#include <math.h>`. Le funzioni più usate:

| Funzione | Che cosa calcola | Esempio |
|---|---|---|
| `sqrt(x)` | la radice quadrata | `sqrt(9.0)` vale 3.0 |
| `pow(x, y)` | $x$ elevato alla $y$ | `pow(9.0, 2)` vale 81.0 |
| `sin(x)`, `cos(x)` | seno e coseno, con l'angolo in radianti | `cos(0.0)` vale 1.0 |
| `floor(x)`, `ceil(x)`, `round(x)` | arrotonda per difetto, per eccesso, al più vicino | `round(2.5)` vale 3.0 |

```c
#include <stdio.h>
#include <math.h>

int main(void) {
    float num = 9.0, radice, quadrato;
    quadrato = pow(num, 2);
    radice = sqrt(num);
    printf("Il quadrato di %.0f e' %.2f\n", num, quadrato);
    printf("La radice di %.0f e' %.2f\n", num, radice);
}
```

```
Il quadrato di 9 e' 81.00
La radice di 9 e' 3.00
```

> [!NOTA] -lm su Linux
> Su Linux le funzioni di `math.h` stanno in una libreria a parte, e va aggiunta quando si compila: `gcc programma.c -lm`. La `m` sta per *math*. Su Windows con gcc, sul mio PC, non serve, ma aggiungerla non fa danni. Al laboratorio Turing, che usa Linux, mettila. Tutto il riferimento della libreria è su [cppreference](https://en.cppreference.com/w/c/header/math.html).

::: prova Scrivi l'espressione C per la diagonale di un rettangolo con lati `a` e `b`, cioè la radice di $a^2 + b^2$.
`sqrt(a * a + b * b)`, oppure `sqrt(pow(a, 2) + pow(b, 2))`. Serve `#include <math.h>`.
:::

> [!RICORDA]
> - Divisione tra due reali: con la virgola.
> - `math.h` per `sqrt`, `pow`, `floor`, `ceil`, `round` e le altre; su Linux si compila con `-lm`.

## Mescolare i tipi: le conversioni (slide 11–14)

In un'espressione puoi mettere insieme un `int`, un `float` e un `char`. Ma i tre tipi sono scritti in memoria in modi diversi: per fare il conto, il C deve prima portarli tutti allo stesso formato. Questo passaggio si chiama **conversione di tipo**, e ce ne sono di due modi:

- **conversione implicita**: la fa il compilatore da solo, senza che tu scriva niente;
- **conversione esplicita**, o **cast**: la chiedi tu, scrivendo il tipo tra parentesi.

Tutte e due possono **perdere informazione**: cifre, o l'intera parte dopo la virgola.

> [!IDEA]
> È come versare un liquido da un contenitore all'altro. Da un bicchiere in una caraffa non perdi niente. Dalla caraffa al bicchiere, quello che non ci sta va perso.

### Le conversioni dell'assegnamento

L'assegnamento è il caso più comune: il valore a destra viene convertito nel tipo della variabile a sinistra. La tabella delle slide, con i valori che ho ottenuto sul mio PC:

| Conversione | Si perde qualcosa? | Esempio | Risultato |
|---|---|---|---|
| `int` → `float` | no, tranne con interi molto grandi | `int x = 5; float y = x;` | `y` vale 5.0 |
| `float` → `int` | sì, la parte dopo la virgola | `float x = 3.7; int y = x;` | `y` vale 3 |
| `int` → `double` | no | `int x = 42; double y = x;` | `y` vale 42.0 |
| `double` → `int` | sì, la parte dopo la virgola; comportamento indefinito se il numero non ci sta | `double x = 9.9; int y = x;` | `y` vale 9 |
| `double` → `float` | sì, cifre di precisione | `double a = 3.14159; float b = a;` | `b` circa 3.14159, meno preciso |
| `char` → `int` | no: il codice ASCII | `char c = 'A'; int x = c;` | `x` vale 65 |
| `int` → `int*` | non si può | `int x = 5; int *p = x;` | errore di compilazione |

Tre osservazioni.

1. **La parte dopo la virgola viene tagliata, non arrotondata.** 9.9 diventa 9, non 10. Con i negativi il taglio va verso lo zero: −2.7 diventa −2.
2. **Gli interi molto grandi** non stanno in un `float`, che ha solo 24 bit di mantissa. 16 777 217 messo in un `float` diventa 16 777 216.
3. **Un `double` fuori dall'intervallo degli `int`**, come 3 miliardi, non si può convertire: il comportamento è indefinito. Sul mio PC `(int)3e9` dà −2 147 483 648, ma non è garantito.

L'ultima riga della tabella è un errore vero: con gcc 16.1, anche senza opzioni, `int *p = x;` dà `error: initialization of 'int *' from 'int' makes pointer from integer without a cast`. Un numero e un indirizzo non sono la stessa cosa (lezione 02C).

> [!TRAPPOLA] Il compilatore non avvisa
> Le conversioni con perdita di dati della tabella **non** danno errori né avvisi, nemmeno con `-Wall -Werror`. `int y = 3.7;` compila e mette 3 in `y`, in silenzio. gcc ha un'opzione che avvisa, `-Wconversion`, ma non fa parte di `-Wall` (lezione 02B).

::: prova Quanto valgono `a`, `b` e `c` dopo `int a = 7.99; int b = -7.99; char ch = 'C'; int c = ch;`?
`a` vale 7 e `b` vale −7: la parte dopo la virgola è tagliata verso lo zero. `c` vale 67, il codice ASCII di `C` (65 è `A`).
:::

> [!RICORDA]
> - Da un tipo più piccolo a uno più grande non si perde niente; al contrario sì.
> - Reale in un `int`: la parte dopo la virgola sparisce, in silenzio.

## La promozione di tipo (slide 15–16)

Quando un operatore come `+` o `/` riceve due valori di tipo diverso, il compilatore li porta allo stesso tipo **prima** di fare il conto. Per non perdere informazione sceglie sempre il tipo **più ampio**. Questo si chiama **promozione di tipo**.

- I tipi interi piccoli salgono: `char` → `short` → `int` → `long`.
- I reali salgono: `float` → `double`.
- Un intero con un reale diventa un **reale**.

Esempi delle slide:

- `char + int`: il `char` diventa `int`, il risultato è `int`. Così `'A' + 2` vale 67, e `'a' - 'A'` vale 32.
- `int + double`: l'`int` diventa `double`, il risultato è `double`. Così `3 + 0.5` vale 3.5.

> [!METODO] Leggere il tipo di un'espressione
> 1. Parti dalle operazioni più interne, rispettando le precedenze della lezione 02B.
> 2. Per ogni operatore guarda i tipi dei due valori. Se sono interi tutti e due, il risultato è intero, e la divisione è intera. Se almeno uno è reale, il risultato è reale.
> 3. Solo alla fine, nell'assegnamento, il risultato si converte nel tipo della variabile.

Il passo 2 è il punto chiave: la promozione guarda **un operatore alla volta**, non tutta l'espressione. Lo mostra la prossima sezione.

::: prova Di che tipo è, e quanto vale, ciascuna espressione? (a) `7 / 2`; (b) `7 / 2.0`; (c) `7.0 / 2`; (d) `'B' - 'A'`.
(a) `int`, 3: divisione intera. (b) `double`, 3.5. (c) `double`, 3.5. (d) `int`, 1.
:::

> [!RICORDA]
> - Due tipi diversi: si sale al più ampio. Intero con reale: reale.
> - La promozione si decide operatore per operatore.

## La divisione che inganna (slide 17–22)

Ecco il caso più traditore della lezione. Il risultato va in un `float`, eppure la divisione perde la virgola.

```c
int main(void) {
    int x = 5, y = 2;
    float z = x / y;
    printf("La var x vale %d\n", x);
    printf("La var y vale %d\n", y);
    printf("La var z vale %f\n", z);
}
```

```
La var x vale 5
La var y vale 2
La var z vale 2.000000
```

Perché 2.000000 e non 2.500000? Segui il metodo: l'operatore `/` riceve due `int`, quindi fa la **divisione intera**, che dà 2. Solo **dopo**, nell'assegnamento, il 2 viene convertito in `float` e diventa 2.000000. Il fatto che `z` sia un `float` arriva troppo tardi: la parte frazionaria è già persa.

> [!IDEA]
> Il tipo della variabile a sinistra non cambia il modo in cui si calcola la destra. Prima si calcola la destra, con i suoi tipi; poi il risultato si converte.

### Il caso opposto

Le slide 20–22 fanno il contrario: due `float` e il risultato in un `int`.

```c
float x = 5, y = 2;
int z = x / y;
```

Qui la divisione è tra due reali e dà 2.5, giusto. Ma poi l'assegnamento mette 2.5 in un `int`: la parte dopo la virgola sparisce e `z` vale 2. Il risultato è lo stesso del caso di prima, ma la perdita avviene in un momento diverso: nell'assegnamento, non nella divisione.

| Programma | Divisione | Risultato della divisione | Assegnamento | `z` |
|---|---|---|---|---|
| `int x, y; float z = x / y;` | tra interi | 2 | `int` → `float` | 2.000000 |
| `float x, y; int z = x / y;` | tra reali | 2.5 | `float` → `int` | 2 |
| `float x, y; float z = x / y;` | tra reali | 2.5 | nessuna conversione | 2.500000 |

::: prova Con `int a = 7, b = 2;` quanto vale `double r = a / b * 2.0;`? E `double s = a * 2.0 / b;`?
`r` vale 6.0: prima `a / b` tra interi fa 3, poi `3 * 2.0` fa 6.0. `s` vale 7.0: prima `a * 2.0` fa 14.0, un reale, e poi `14.0 / 2` fa 7.0. Stessi numeri, ordine diverso, risultato diverso.
:::

> [!RICORDA]
> - `float z = 5 / 2;` dà 2.0: la divisione tra interi taglia prima dell'assegnamento.
> - `int z = 5.0 / 2.0;` dà 2: l'assegnamento taglia dopo la divisione.

## Il cast: convertire a comando (slide 23–25)

Per avere 2.5 da due `int` bisogna fare in modo che la divisione veda **almeno un reale**. Si fa con il **cast esplicito**: il nome del tipo tra parentesi, davanti al valore da convertire.

```c
int x = 5, y = 2;
float z = x / (float)y;   // y convertito in float: risultato 2.5
```

`(float)y` vale 2.0, un `float`. Ora la divisione è tra un `int` e un `float`: per la promozione l'`int` sale a `float`, e il risultato è 2.5.

> [!DEF] Cast (slide 23 e 25)
> Il **cast** `(tipo)espressione` converte il valore dell'espressione nel tipo scritto tra parentesi. Agisce solo sull'espressione **immediatamente alla sua destra**, e cambia il tipo del valore solo durante quel calcolo: non cambia il tipo delle variabili.

**Come si legge.** `(float)y` si legge «y convertito in float». Dopo il calcolo `y` è ancora un `int` che vale 2: il cast ha creato un valore nuovo, non ha cambiato `y`.

### Dove si mette il cast

La posizione delle parentesi decide tutto. Con `int x = 5, y = 2;`, ho provato tre versioni:

| Espressione | Che cosa succede | Valore |
|---|---|---|
| `x / (float)y` | `y` diventa 2.0, divisione con la virgola | 2.5 |
| `(float)x / y` | `x` diventa 5.0, divisione con la virgola | 2.5 |
| `(float)(x / y)` | prima `x / y` tra interi fa 2, poi 2 diventa 2.0 | 2.0 |

Nel terzo caso il cast arriva troppo tardi: la parte dopo la virgola è persa dentro la parentesi. È lo stesso errore della sezione prima, scritto con il cast.

> [!NOTA] Un dettaglio nella slide 24
> Nella slide 24 il codice stampa `x` e `y` con `%d`, ma il terminale disegnato mostra `5.000000` e `2.000000`. Con il codice della slide l'uscita vera è `La var x vale 5` e `La var y vale 2`, e poi `La var z vale 2.500000`. È solo una svista del disegno: il punto della slide, il 2.5, è giusto.

> [!TRAPPOLA] Il cast di un intero già diviso
> `(double)(somma / n)` sembra calcolare una media con la virgola, ma la divisione dentro la parentesi è tra interi. Il cast va su uno dei due valori **prima** della divisione: `(double)somma / n`.

::: prova Con `int somma = 17, n = 4;` scrivi un'espressione che calcoli la media 4.25 con un cast, e una che sembri giusta ma dia 4.0.
Giusta: `(double)somma / n`, oppure `somma / (double)n`. Sbagliata: `(double)(somma / n)`, che divide tra interi e dà 4, poi lo converte in 4.0.
:::

> [!RICORDA]
> - `(tipo)espressione` converte solo l'espressione subito a destra.
> - Il cast non cambia il tipo delle variabili.
> - Per una divisione con la virgola tra interi, il cast va **su un operando**, non sul risultato.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `float` | «float» | reale, 4 byte, circa 7 cifre | `float t = 21.5f;` |
| `double` | «dabol» | reale, 8 byte, circa 15–16 cifre | `double pi = 3.14159265;` |
| `%f` | «percento effe» | in `printf`: reale con 6 cifre dopo la virgola | `2.500000` |
| `%.2f` | «percento punto due effe» | reale con 2 cifre dopo la virgola | `2.50` |
| `%e` | «percento e» | notazione scientifica | `2.500000e+00` |
| `%g` | «percento gi» | la scrittura più corta | `2.5` |
| `%lf` | «percento elle effe» | in `scanf`: un `double` | `scanf("%lf", &x);` |
| `(float)y` | «y convertito in float» | cast esplicito | `x / (float)y` |
| `math.h` | «math punto acca» | libreria delle funzioni matematiche | `sqrt(2.0)` |
| `-lm` | «meno elle emme» | opzione di gcc per la libreria matematica su Linux | `gcc p.c -lm` |

## Verso l'esame

L'esame di Programmazione I è al PC, unico per i tre canali: appelli **lunedì 25/01/2027** e **giovedì 11/02/2027**. CodeRunner confronta le stampe del tuo programma con quelle attese, carattere per carattere: un 2.000000 al posto di 2.500000 è un test fallito.

**Gli errori che costano**

1. **La media tra interi.** Sommare interi e dividere per il numero di elementi dà una divisione intera. Serve un cast su un operando, o una costante reale come `3.0`.
2. **`%lf` dimenticato in `scanf`** con un `double`: con `-Wall -Werror` non compila.
3. **Lo specificatore sbagliato in `printf`**: `%d` con un `double`, o `%f` con un `int`, non compila con `-Wall -Werror`.
4. **Il numero di cifre**: se il testo chiede due cifre dopo la virgola, serve `%.2f`; con `%f` ne escono sei e il test fallisce.
5. **I reali confrontati con `==`**: con le condizioni, nelle prossime lezioni.

> [!METODO] Prima di dividere
> 1. Guarda i tipi dei due operandi del `/`.
> 2. Se sono tutti e due interi e vuoi la virgola, metti un cast su **uno** dei due, oppure usa una costante con la virgola.
> 3. Controlla con un esempio a mano: 5 diviso 2 deve dare 2.5.

> [!ESAME] La media di tre numeri
> Il programma `media.c` del [Laboratorio 02](Lab02_operatori_tipi.html) è proprio questo esercizio: con i voti 1, 2, 5, la media intera dà 2, la media con il cast sul risultato dà 2.000000, quella giusta dà 2.666667. È un modello di errore che negli esercizi d'esame si ripete in ogni calcolo di media.

## Quiz

```quiz
D: Con `int x = 5, y = 2;` quanto vale `float z = x / y;`?
+ 2.0
- 2.5
- 3.0
- 2.25
- non compila
= `/` tra due `int` è la divisione intera: dà 2. Solo dopo il 2 diventa il `float` 2.0. La risposta più insidiosa è 2.5: il tipo di `z` non cambia il calcolo a destra. Nessun arrotondamento porta a 3.

D: Con `float x = 5, y = 2;` quanto vale `int z = x / y;`?
+ 2
- 2.5
- 3
- 2.0, perché resta un float
- non compila
= La divisione tra `float` dà 2.5; l'assegnamento a un `int` taglia la parte dopo la virgola: 2. La risposta più insidiosa è 3: il C non arrotonda, taglia. Compila senza avvisi, anche con `-Wall`.

D: Con `int x = 5, y = 2;` quale espressione vale 2.5?
+ `x / (float)y`
- `(float)(x / y)`
- `x / y`
- `(int)(x / 2.0)`
- `x / y * 1.0`
= Il cast su `y` rende reale un operando, e la divisione è con la virgola. La risposta più insidiosa è `(float)(x / y)`: la divisione tra interi avviene dentro la parentesi, e il cast converte il 2 in 2.0. `(int)(x / 2.0)` taglia 2.5 a 2. `x / y * 1.0` fa prima la divisione intera, 2, e poi la moltiplica: 2.0.

D: Come si legge un `double` chiamato `d` con `scanf`?
+ `scanf("%lf", &d);`
- `scanf("%f", &d);`
- `scanf("%d", &d);`
- `scanf("%lf", d);`
- `scanf("%e", d);`
= Per un `double` serve `%lf`, e `scanf` vuole l'indirizzo. La risposta più insidiosa è `scanf("%f", &d);`: `%f` va bene in `printf`, ma in `scanf` è per i `float`, e con `-Wall -Werror` non compila. Le ultime due passano il valore invece dell'indirizzo.

D: Che cosa stampa `printf("%.2f\n", 2.0 / 3);`?
+ `0.67`
- `0.66`
- `0.666667`
- `0`
- `0.67e+00`
= `2.0 / 3` è una divisione con la virgola, perché 2.0 è reale: 0.6666… Con `%.2f` si stampano 2 cifre, arrotondate: 0.67. La risposta più insidiosa è `0.66`: `printf` arrotonda, non taglia. `0.666667` sarebbe con `%f`.

D: Quale riga dà un errore di compilazione con gcc 16.1, anche senza opzioni?
+ `int x = 5; int *p = x;`
- `int x = 3.7;`
- `double d = 7;`
- `char c = 'A'; int n = c;`
- `float f = 1e10;`
= Un intero non diventa un indirizzo da solo: gcc si ferma con «makes pointer from integer without a cast». La risposta più insidiosa è `int x = 3.7;`: perde la parte dopo la virgola, ma compila senza avvisi. Le altre sono conversioni normali.

D: Con `int a = 7, b = 2;` quanto vale `double r = a / b * 2.0;`?
N: 6
= Si calcola da sinistra: `a / b` tra interi fa 3, poi `3 * 2.0` fa 6.0. La divisione intera avviene prima che il 2.0 entri in gioco.

D: Di che tipo è il risultato di `'A' + 1.5`?
+ `double`
- `char`
- `int`
- `float`
- non si può sommare un carattere e un numero
= `'A'` è un `char`, che sale a `int`; con un `double` come 1.5 si sale a `double`. La risposta più insidiosa è `float`: le costanti con la virgola senza la `f` finale sono `double`. Il risultato vale 66.5.

D: Che cosa vale `(int)-3.7`?
+ -3
- -4
- 3
- -3.7
- 0
= Il cast a `int` taglia verso lo zero: −3.7 diventa −3. La risposta più insidiosa è −4, che sarebbe l'arrotondamento per difetto di `floor`. Il segno resta.
```

## Esercizi

::: esercizio base Riscaldamento: il tipo e il valore
Con `int i = 9; double d = 2.0;` scrivi tipo e valore di: (a) `i / 2`; (b) `i / d`; (c) `i % 2`; (d) `(double)i / 2`; (e) `(double)(i / 2)`.
::: soluzione
(a) `int`, 4. (b) `double`, 4.5. (c) `int`, 1. (d) `double`, 4.5: il cast è su `i`. (e) `double`, 4.0: la divisione intera avviene prima del cast.
:::

::: esercizio base Riscaldamento: stampe dei reali
Con `double z = 1234.5678;` scrivi che cosa stampano `%f`, `%.1f`, `%e` e `%g`. Poi provalo.
::: soluzione
- `%f`: `1234.567800`
- `%.1f`: `1234.6`, arrotondato
- `%e`: `1.234568e+03`
- `%g`: `1234.57`: `%g` tiene 6 cifre significative in tutto
:::

::: esercizio base Riscaldamento: assegnamenti che perdono
Che cosa valgono le variabili? `int a = 9.99; int b = -9.99; float c = 1/4; float d = 1.0/4; double e = 'a';`
::: soluzione
`a` = 9 e `b` = −9: taglio verso lo zero. `c` = 0.0: divisione intera, 1/4 fa 0. `d` = 0.25. `e` = 97.0: il codice ASCII di `a`.
:::

::: esercizio medio Il programma delle slide 17–19, corretto
Il programma con `int x = 5, y = 2; float z = x / y;` stampa 2.000000. Correggilo in due modi diversi perché stampi 2.500000, senza cambiare il tipo di `x` e `y`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int x = 5, y = 2;
    float z1 = x / (float)y;   // cast su un operando
    float z2 = (float)x / y;   // cast sull'altro operando
    printf("%f %f\n", z1, z2);
}
```
Stampa `2.500000 2.500000`. Anche `x * 1.0 / y` funziona, ma con il cast chi legge vede subito che vuoi una divisione con la virgola.
:::

::: esercizio medio Radice e potenza
Scrivi un programma che legge un `double` con `scanf` e stampa il suo quadrato e la sua radice quadrata con 3 cifre dopo la virgola. Prova con 2.
::: soluzione
```c
#include <stdio.h>
#include <math.h>

int main(void) {
    double x;
    printf("Inserisci un numero: ");
    scanf("%lf", &x);
    printf("Quadrato: %.3f\n", pow(x, 2));
    printf("Radice: %.3f\n", sqrt(x));
}
```
Con 2 stampa `Quadrato: 4.000` e `Radice: 1.414`. Su Linux si compila con `gcc -Wall -Werror radice.c -o radice -lm`.
:::

::: esercizio esame La media di tre voti
Scrivi un programma che legge tre voti interi e stampa la loro media con 2 cifre dopo la virgola. Con 1, 2, 5 deve stampare `2.67`. Poi spiega che cosa stamperebbe con `double m = (a + b + c) / 3;`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    double m = (a + b + c) / 3.0;
    printf("%.2f\n", m);
}
```
Stampa `2.67`. Con `(a + b + c) / 3` la somma 8 è divisa per l'intero 3: divisione intera, 2, poi convertito in 2.0. Stamperebbe `2.00`. Programma provato con gcc 16.1 e `-Wall -Werror`.
:::

::: esercizio esame Trova i tre errori
Questo programma dovrebbe leggere il lato di un quadrato con la virgola e stampare l'area con 2 cifre. Trova gli errori: `double lato; scanf("%f", &lato); int area = lato * lato; printf("Area: %.2f\n", area);`
::: soluzione
1. `scanf("%f", &lato)`: per un `double` serve `%lf`. Con `-Wall -Werror` non compila.
2. `int area`: l'area con la virgola va in un `double`; in un `int` perde la parte frazionaria.
3. `printf("%.2f", area)` con un `int`: lo specificatore non corrisponde al tipo. Con `-Wall -Werror` non compila.

Corretto: `double lato; scanf("%lf", &lato); double area = lato * lato; printf("Area: %.2f\n", area);`.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra float e double?
`float` usa di solito 4 byte e ha circa 7 cifre giuste; `double` usa 8 byte e ha circa 15–16 cifre giuste, con un intervallo molto più ampio.
:::

::: domanda Con quale specificatore si legge un double con scanf? E si stampa con printf?
Si legge con `%lf`. Si stampa con `%f`, `%e` o `%g`, perché `printf` riceve i `float` già convertiti in `double`.
:::

::: domanda Perché `float z = 5 / 2;` vale 2.0?
Perché `5 / 2` è una divisione tra due interi e dà 2. Solo dopo, nell'assegnamento, il 2 diventa il `float` 2.0.
:::

::: domanda Che cosa succede mettendo 3.7 in un int?
La parte dopo la virgola viene tagliata, senza arrotondare e senza avvisi: l'`int` vale 3.
:::

::: domanda Che cos'è la promozione di tipo?
La conversione automatica dei due operandi di un operatore al tipo più ampio, prima di fare il conto: un intero con un reale diventa un reale.
:::

::: domanda Che differenza c'è tra `(double)a / b` e `(double)(a / b)` con a e b interi?
Nel primo il cast è su `a`, e la divisione è con la virgola. Nel secondo la divisione tra interi avviene prima, e il cast converte un risultato già tagliato.
:::

::: domanda Perché non si confrontano due double con ==?
Perché quasi tutti i reali sono approssimati: due calcoli che dovrebbero dare lo stesso valore possono differire nell'ultima cifra.
:::

## Glossario

```glossario
float | Tipo reale, di solito 4 byte, con circa 7 cifre decimali giuste.
double | Tipo reale in doppia precisione, di solito 8 byte, con circa 15–16 cifre decimali giuste.
IEEE 754 | Lo standard che descrive come sono scritti in memoria i numeri reali: segno, esponente e mantissa.
%f, %e, %g | Specificatori di printf per i reali: virgola fissa, notazione scientifica, scrittura più corta.
%lf | Specificatore di scanf per leggere un double.
math.h | Libreria del C con le funzioni matematiche: sqrt, pow, floor, ceil, round, sin, cos.
Conversione implicita | Cambio di tipo fatto dal compilatore da solo, per esempio in un assegnamento o in un'espressione mista.
Promozione di tipo | Conversione automatica degli operandi al tipo più ampio prima di un'operazione.
Cast | Conversione esplicita scritta con il tipo tra parentesi, come `(float)y`; vale solo per l'espressione subito a destra.
Comportamento indefinito | Situazione in cui il linguaggio non dice che cosa succede, come un double troppo grande messo in un int.
```

## Checklist

```checklist
- So la differenza tra float e double, in byte e in cifre giuste.
- So stampare un reale con %f, %e, %g e con un numero fissato di cifre.
- So leggere un double con %lf.
- So usare sqrt e pow di math.h e so quando serve -lm.
- So che cosa si perde nelle conversioni dell'assegnamento.
- So decidere il tipo di un'espressione, operatore per operatore.
- So perché `float z = 5 / 2;` vale 2.0, e come correggerlo con un cast.
- So dove mettere il cast per fare una media con la virgola.
```

## Fonti

- Slide «Numeri reali in C. Float, double, precisione, conversione» (03B_floats), Programmazione I – Teoria, canale B, A.A. 2026/27, Elvio Amparore: float e double (slide 2–3), formati di stampa (slide 4–5), programmi con float e double (slide 6–8), math.h (slide 9–10), conversioni implicite e tabella delle conseguenze (slide 11–14), promozione di tipo (slide 15–16), divisione tra interi (slide 17–22), cast esplicito (slide 23–25).
- Laboratorio 02 «Operatori e Tipi», canale B: `media.c`, `aritmetica.c`, `circonferenza.c`.
- [cppreference, `<math.h>`](https://en.cppreference.com/w/c/header/math.html), il riferimento citato nelle slide.
- I programmi di questi appunti sono stati compilati con gcc 16.1 su Windows 11 a 64 bit, con `-Wall -Werror`, ed eseguiti; gli errori del compilatore citati sono quelli veri. Le prove sulla precisione (0.1, 16 777 217, 3 miliardi), le tabelle dei casi, i quiz e gli esercizi sono di questi appunti.
