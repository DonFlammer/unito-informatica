---
corso: PROG1
lezione: Lab02
titolo: "Laboratorio 02: operatori e tipi"
data: 2026-10-12
docenti: Elisa Marengo (turno B2) e Valerio Basile (turno B1); teoria Elvio Amparore
sopratitolo: Canale B · Laboratorio 02 · Programmazione I
descrizione: >-
  Appunti del secondo laboratorio di Programmazione I (canale B, Lab02): divisione intera e reale, resto, overflow,
  ordine di valutazione delle espressioni, circonferenza e area con const, gli errori di compilazione da trovare,
  la media di tre numeri con le conversioni e gli arrotondamenti, la tabella dei tipi e degli specificatori, le
  dimensioni dei tipi e dei puntatori, la documentazione del C, il programma della spesa e gli scambi di variabili,
  con tutti i programmi del codice di partenza provati e gli esercizi svolti.
lede: >-
  Il secondo laboratorio mette alla prova le lezioni 02B, 02C, 03A e 03B: si leggono programmi già scritti, si
  indovina che cosa stampano, si cercano gli errori e si scrivono programmi piccoli. Qui trovi ogni esercizio con la
  soluzione provata, e il perché di ogni risultato strano.
materiale: slide
scheda:
  Slide: Lab02 «Operatori e Tipi», laboratorio canale B · 18 pagine, con la tabella dei tipi e il codice di partenza
  Laboratorio: Elisa Marengo (turno B2, lun 12/10) e Valerio Basile (turno B1, mar 13/10) · 14–17 · laboratorio Turing
  Tempo di studio: 2–3 ore, davanti a un computer
fonte: >-
  Slide «Operatori e Tipi» (Lezione nº 2 di laboratorio), «Tabella dei tipi e specificatori di conversione» e codice di
  partenza (aritmetica.c, circonferenza.c, dim_tipi.c, errori.c, media.c, scambio.c), Programmazione I – Laboratorio,
  canale B, A.A. 2026/27
appunti_html: appunti/PROG1/Lab02_operatori_tipi.html
genera_html: true
---

## In breve

- Il laboratorio usa sei programmi già pronti, il **codice di partenza**: si leggono, si provano, si completano o si correggono. Poi si scrivono tre programmi nuovi.
- **Divisione**: tra due interi `/` dà la parte intera, `%` il resto. Basta un reale per avere la divisione con la virgola: `99 / 50` fa 1, `99 / 50.0` fa 1.98.
- Un `int` che supera il massimo, 2 147 483 647, **va in overflow** e ricomincia dai negativi: il compilatore non avvisa.
- Le espressioni seguono le **precedenze**: `*`, `/`, `%` prima di `+` e `-`, da sinistra a destra. Le parentesi cambiano l'ordine.
- `const` dichiara una **costante**: un valore che il programma non può cambiare.
- Una **media** si calcola dividendo per `3.0`, non per `3`. Per arrotondare ci sono `floor`, `ceil` e `round`, mentre il cast a `int` taglia.
- I numeri con la virgola sono approssimati: `8.136 * 1000` convertito in `int` dà **8135**.
- Tutti i **puntatori** hanno la stessa dimensione, 8 byte su un computer a 64 bit: contengono un indirizzo, qualunque sia il tipo puntato.

> [!CANALI]
> **Canale B.** È il secondo laboratorio, al laboratorio Turing, dalle 14 alle 17: turno **B2** lunedì 12/10 con **Elisa Marengo**, turno **B1** martedì 13/10 con **Valerio Basile**. Gli esercizi riprendono la teoria delle lezioni [02B](02B_assegnamento_memory_model.html) (tipi, operatori, precedenze), [02C](02C_referenziamento_scanf_puntatori.html) (`scanf`, puntatori), [03A](03A_scambio_variabili.html) (scambio) e [03B](03B_floats.html) (reali e conversioni).
>
> **Canali A e C.** Secondo la scheda del corso i laboratori hanno la stessa sequenza nei tre canali e gli stessi esercizi su CodeRunner. Le slide 2026/27 dei canali A e C per questo laboratorio non le ho viste: controlla il giorno del tuo turno su Moodle.
>
> I programmi del codice di partenza li ho compilati e provati tutti con gcc 16.1 su Windows 11 a 64 bit. Dove il risultato su Linux, al laboratorio Turing, può essere diverso, lo dico.

## Aritmetica e overflow: aritmetica.c (slide 2)

Il primo programma va **letto prima di eseguirlo**: per ogni `printf` prova a indovinare che cosa stampa, poi controlla. La slide dice di compilarlo con:

```
gcc -Wall aritmetica.c -o aritmetica        (Linux e macOS)
gcc -Wall aritmetica.c -o aritmetica.exe    (Windows)
```

> [!NOTA] Senza -Werror, per una volta
> Il programma dichiara tre variabili che non usa, `n1`, `p` e `t`. Con `-Wall` gcc stampa tre avvisi `unused variable`; con `-Wall -Werror` non compila. Per questo la slide usa solo `-Wall`: gli avvisi si leggono, ma il programma parte. All'esame invece vale `-Werror`, e le variabili inutili vanno tolte.

### Le divisioni

```c
printf("99 / 50 = %d\n", 99 / 50);       // divisione intera
printf("99 %% 50 = %d\n", 99 % 50);      // resto della divisione intera
printf("99 / 50.0 = %f\n", 99 / 50.0);   // divisione reale
printf("99.0 / 50 = %f\n", 99.0 / 50);   // divisione reale
```

```
99 / 50 = 1
99 % 50 = 49
99 / 50.0 = 1.980000
99.0 / 50 = 1.980000
```

Due cose da notare.

- `%%` dentro la stringa di `printf` stampa un solo `%`. Un `%` da solo sarebbe l'inizio di uno specificatore.
- Basta **un** reale, a sinistra o a destra, per avere la divisione con la virgola: è la promozione di tipo della lezione 03B.

Poi il programma prova il cast in due posti diversi, con `int m = 99` e `int n = 50`:

```
m / n, con cast su m: 1.980000
m / n, con cast sul risultato: 1.000000
```

`(double) m / n` converte `m` prima della divisione; `(double) (m / n)` converte il risultato di una divisione già intera. È la trappola della lezione 03B.

### L'overflow

```c
int max = INT_MAX;
printf("INT_MAX = %d\n", max);
max = max + 3;
printf("dopo aver sommato 3 = %d\n", max);
```

```
INT_MIN = -2147483648
INT_MAX = 2147483647
dopo aver sommato 3 = -2147483646
```

`INT_MAX` e `INT_MIN` sono il massimo e il minimo di un `int`, definiti in `limits.h`. Aggiungendo 3 al massimo, il numero esce dall'intervallo e **ricomincia dai negativi**, come il contachilometri all'indietro della [lezione 03 di Fondamenti](../FDA/03_interi_con_segno_virgola_mobile.html): è l'**overflow** in complemento a 2. Il compilatore non avvisa.

> [!TRAPPOLA] L'overflow degli int con il segno non è garantito
> Per lo standard del C, l'overflow di un intero con il segno è un **comportamento indefinito**: il risultato −2 147 483 646 è quello che succede quasi sempre, ma il linguaggio non lo promette. Il programma va scritto in modo che l'overflow non capiti.

L'ultima riga stampa l'indirizzo di `max` con `%p`: cambia a ogni esecuzione, come nella lezione 02C.

::: prova Che cosa stampano `printf("%d", 17 / 5)`, `printf("%d", 17 % 5)` e `printf("%f", 17 / 5.0)`?
`3`, `2` e `3.400000`.
:::

> [!RICORDA]
> - Tra interi: `/` dà la parte intera, `%` il resto. Con un reale: divisione con la virgola.
> - `%%` stampa un `%`. Superare `INT_MAX` è overflow.

## Operazioni su interi (slide 3)

Il primo programma da scrivere da zero: `operazioni_su_interi.c`. Chiede due interi `n1` e `n2`, e stampa la somma, il prodotto, la divisione intera, la divisione reale e il resto.

```c
#include <stdio.h>

int main(void) {
    int n1;
    int n2;
    printf("Inserisci due numeri interi: ");
    scanf("%d %d", &n1, &n2);

    int somma = n1 + n2;
    printf("Somma: %d\n", somma);
    printf("Prodotto: %d\n", n1 * n2);
    printf("Divisione intera: %d\n", n1 / n2);
    printf("Divisione reale: %f\n", (double)n1 / n2);
    printf("Resto: %d\n", n1 % n2);
}
```

Con l'input `17 5` stampa somma 22, prodotto 85, divisione intera 3, divisione reale 3.400000 e resto 2.

> [!TRAPPOLA] Con i negativi
> Con `-17 5` il programma stampa divisione intera −3 e resto −2. In C la divisione intera **taglia verso lo zero**, e il resto ha il segno del primo numero. In matematica, nella lezione di Matematica Discreta, il resto è sempre positivo: lì −17 diviso 5 dà quoziente −4 e resto 3. Attenzione quando usi `%` con i negativi.

Il programma non controlla `n2 = 0`: con `0` come secondo numero, la divisione intera fa fallire il programma. Lo saprai sistemare con le condizioni.

::: prova Che cosa stampa il programma con l'input `7 2`?
Somma 9, prodotto 14, divisione intera 3, divisione reale 3.500000, resto 1.
:::

> [!RICORDA]
> - La divisione reale tra due `int` si ottiene con un cast su un operando.
> - In C, con i negativi, `/` taglia verso lo zero e `%` ha il segno del primo numero.

## L'ordine di valutazione (slide 4–7)

Le slide chiedono di calcolare a mano tre espressioni, prima di provarle. Si usano le precedenze della lezione 02B: prima le parentesi, poi `*`, `/` e `%` da sinistra a destra, poi `+` e `-` da sinistra a destra.

| Espressione | Passi | Risultato |
|---|---|---|
| `7 + 3 * 6 / 2 - 1` | `3 * 6` = 18, `18 / 2` = 9, `7 + 9` = 16, `16 - 1` = 15 | **15** |
| `2 % 2 + 2 * 2 - 2 / 2` | `2 % 2` = 0, `2 * 2` = 4, `2 / 2` = 1, `0 + 4 - 1` = 3 | **3** |
| `(3 * 9 * (3 + (9 * 3 / (3))))` | `9 * 3 / 3` = 9, `3 + 9` = 12, `3 * 9 * 12` = 324 | **324** |

Sono i risultati delle slide 5, e quelli che stampa il programma.

### Quale formula è $y = ax^3 + 7$?

La slide 6 dà sei espressioni e chiede quali calcolano $ax^3 + 7$. La regola: la moltiplicazione viene prima della somma, e le parentesi intorno a una moltiplicazione non cambiano niente.

| # | Espressione | Giusta? | Perché |
|:-:|---|:-:|---|
| 1 | `a * x * x * x + 7` | sì | le moltiplicazioni prima, poi `+ 7` |
| 2 | `a * x * x * (x + 7)` | no | la parentesi fa sommare 7 a `x` prima |
| 3 | `(a * x) * x * (x + 7)` | no | stesso errore della 2 |
| 4 | `(a * x) * x * x + 7` | sì | la parentesi intorno a `a * x` non cambia niente |
| 5 | `a * (x * x * x) + 7` | sì | come la 4 |
| 6 | `a * x * (x * x + 7)` | no | il 7 entra nella moltiplicazione |

Ho controllato con `a = 2` e `x = 3`: la formula vale 61. Le espressioni 1, 4 e 5 danno 61; la 2 e la 3 danno 180; la 6 dà 96.

::: prova Quanto vale `10 - 4 - 3`? E `10 - (4 - 3)`?
3, perché `-` si fa da sinistra: `10 - 4` = 6, poi `6 - 3` = 3. Con le parentesi: `4 - 3` = 1, poi `10 - 1` = 9.
:::

> [!RICORDA]
> - `*`, `/`, `%` prima di `+` e `-`; a parità, da sinistra a destra.
> - Una parentesi intorno a una moltiplicazione non cambia niente; una intorno a una somma sì.

## Circonferenza e area: circonferenza.c (slide 8)

Il programma `circonferenza.c` legge il raggio e deve stampare circonferenza e area. Le due righe di calcolo sono lasciate da completare: ricorda che la circonferenza è $2 \pi r$ e l'area è $\pi r^2$.

```c
#include <stdio.h>

int main(void) {
    // La costante pi greco
    const float PI_GRECO = 3.1415926535f;

    // Chiediamo all'utente il raggio
    printf("Inserisci il raggio del cerchio: ");
    float r;
    scanf("%f", &r);

    // Calcolo della circonferenza e dell'area
    float circonferenza = 2 * PI_GRECO * r;
    printf("La circonferenza del cerchio e': %f\n", circonferenza);

    float area = PI_GRECO * r * r;
    printf("L'area del cerchio e': %f\n", area);
}
```

Con il raggio 3 stampa `18.849556` e `28.274334`. Così com'è, il codice di partenza non compila nemmeno con `-Wall`: `circonferenza` e `area` sono usate nelle `printf` ma non dichiarate.

> [!NOTA] Prova con il raggio 2
> Con il raggio 2 la circonferenza e l'area vengono **uguali**, tutte e due 12.566371. Non è un errore: $2 \cdot \pi \cdot 2$ e $\pi \cdot 2^2$ fanno tutti e due $4\pi$. Per controllare il programma usa un altro raggio.

### La domanda: che cosa vuol dire const?

`const` davanti a una dichiarazione la rende una **costante**: il valore si dà all'inizio e poi non si può più cambiare. Se scrivi `PI_GRECO = 3;` più avanti, gcc si ferma con `error: assignment of read-only variable 'PI_GRECO'`. Il nome tutto maiuscolo è una convenzione per le costanti, non un obbligo.

Il commento del codice ricorda che `math.h` ha già la costante **`M_PI`**. Le slide avvisano che, su Linux, usando `math.h` può servire l'opzione `-lm`.

::: prova Con il raggio 1, che cosa devono stampare circonferenza e area?
La circonferenza $2\pi$, circa 6.283185, e l'area $\pi$, circa 3.141593.
:::

> [!RICORDA]
> - `const` fa una variabile che non si può più modificare.
> - Per provare un programma, scegli dati che non diano risultati uguali per caso.

## Trovare gli errori (slide 9–11)

All'esame il compilatore ti dice dove ha trovato un errore, ma non sempre perché. Qui si allena l'occhio: prima si cercano gli errori leggendo, poi si controlla con gcc.

### Il programma della slide 9

```c
#include <stdio.h>
int main() {
int x, y;
printf("Inserisci due interi: ");
scanf("%d %d", &x, y)
z = x + y;
printf("La somma %d + %d vale ", x, y);
printf("%d\n", &z);
}
```

Gli errori sono quattro:

1. in `scanf` manca la `&` davanti a `y`: `scanf` vuole un indirizzo;
2. manca il `;` dopo la `scanf`;
3. `z` non è dichiarata;
4. l'ultima `printf` stampa `&z`, l'indirizzo, invece del valore `z`.

gcc con `-Wall -Werror` ne trova subito tre: `format '%d' expects argument of type 'int *', but argument 3 has type 'int'`, `expected ';' before 'z'` e `'z' undeclared`. Il quarto lo segnala dopo aver corretto gli altri. Il programma corretto:

```c
#include <stdio.h>

int main(void) {
    int x, y;
    printf("Inserisci due interi: ");
    scanf("%d %d", &x, &y);
    int z = x + y;
    printf("La somma %d + %d vale ", x, y);
    printf("%d\n", z);
}
```

### errori.c: gli otto errori

La slide 11 chiede di trovare, **senza compilare**, gli 8 errori di `errori.c`. Prova da solo prima di leggere.

```c
#include <stdio.h>

int main(void) {
    float f1, f2;
    printf("Inserisci due numeri reali: ");
    scanf("%f %d", &f1, &f2);

    float risultato = (f1 + f2) / 2);
    printf("Risultato = %f %d\n", &risultato);

    // Calcoliamo il quadrato
    // float quadrato = risultato * risultato;
    printf("Il quadrato e' \n", quadrato) }
}
```

| # | Riga | Errore | Correzione |
|:-:|---|---|---|
| 1 | `scanf("%f %d", …)` | `%d` per un `float` | `%f %f` |
| 2 | `(f1 + f2) / 2);` | una parentesi chiusa di troppo | `(f1 + f2) / 2;` |
| 3 | `printf(…, &risultato)` | passa l'indirizzo invece del valore | `risultato` |
| 4 | `"Risultato = %f %d\n"` | `%d` senza un valore da stampare | togliere `%d` |
| 5 | `// float quadrato = …` | la dichiarazione è commentata: `quadrato` non esiste | togliere `//` |
| 6 | `"Il quadrato e' \n"` | manca lo specificatore per `quadrato` | `%f` |
| 7 | `printf(…) }` | manca il `;` dopo la `printf` | `;` |
| 8 | `}` finale | una graffa chiusa di troppo | togliere una `}` |

Compilando il file originale con `-Wall -Werror`, gcc 16.1 segnala gli errori 1, 2, 3, 4, 5, 7 e 8. Il 6 lo segnala solo dopo le altre correzioni, come «troppi argomenti per il formato». Il programma corretto, con 3 e 4, stampa `Risultato = 3.500000` e `Il quadrato e' 12.250000`.

::: prova Perché `printf("%d\n", &z);` è un errore anche se compila senza -Wall?
Perché `&z` è l'indirizzo di `z`, non il suo valore: il programma stamperebbe un numero senza senso. Con `-Wall -Werror` gcc lo blocca, perché `%d` vuole un `int` e riceve un `int *`.
:::

> [!RICORDA]
> - In `scanf` serve la `&`; in `printf` no.
> - Ogni specificatore vuole un valore del tipo giusto, nello stesso ordine.
> - Il primo errore può nasconderne altri: correggi e ricompila.

## La media di tre numeri: media.c (slide 12)

`media.c` legge tre interi `x`, `y`, `z` e calcola la media in tre modi. Con l'input 8, 2, 3, che danno somma 13:

| Riga del programma | Che cosa fa | Stampa |
|---|---|---|
| `int media1 = (x + y + z) / 3;` | divisione intera | `4` |
| `double media2 = (x + y + z) / 3;` | divisione intera, poi convertita in `double` | `4.000000` |
| `double media3 = (x + y + z) / 3.0;` | divisione con la virgola | `4.333333` |

Solo la terza è giusta: è la divisione che inganna della lezione 03B.

### Le tre varianti del commento

Il codice chiede che cosa fanno tre modi di scrivere `media3`, e dove avviene la conversione da `int` a `double`. Con 1, 2, 5, che danno somma 8:

| Variante | Tipi delle operazioni | Dove si converte | Valore |
|---|---|---|---|
| `(x + y + z) / 3.0` | somma `int`; divisione tra `int` e `double` | la somma diventa `double` per la divisione | 2.666667 |
| `(double)(x + y + z) / 3` | somma `int`; cast; divisione tra `double` e `int` | il cast sulla somma, poi il 3 diventa `double` | 2.666667 |
| `(double)((x + y + z) / 3)` | somma `int`; divisione **intera**; cast | il cast sul risultato, quando la virgola è già persa | 2.000000 |

### Arrotondare

Il programma arrotonda `media3` in quattro modi. Con 1, 2, 5, cioè 2.666667:

| Espressione | Che cosa fa | Risultato |
|---|---|---|
| `(int)media3` | taglia la parte dopo la virgola | 2 |
| `(int)floor(media3)` | arrotonda per difetto | 2 |
| `(int)round(media3)` | arrotonda al più vicino | 3 |
| `(int)ceil(media3)` | arrotonda per eccesso | 3 |

Con i numeri positivi il cast e `floor` danno lo stesso risultato. Con i negativi no: con −2.5 il cast dà −2, `floor` dà −3, `ceil` dà −2 e `round` dà −3, perché a metà strada `round` si allontana dallo zero.

### 8.136 per 1000

L'ultima parte del programma calcola `(int)(f * 1000)` con `f = 8.136`, e stampa **8135**, non 8136. Il motivo è quello della lezione 03B: 8.136 non si scrive esattamente in base 2. In memoria è un po' meno di 8.136, e `f * 1000` vale 8135.99999999999909… Il cast a `int` **taglia**, e resta 8135. Con `(int)round(f * 1000)` si ottiene 8136.

::: prova Con l'input 8, 2, 3, che cosa stampa `(int)ceil(media3)`?
5: `media3` vale 4.333333, e `ceil` arrotonda per eccesso a 5.
:::

> [!RICORDA]
> - Per una media con la virgola si divide per `3.0`, o si fa un cast su un operando.
> - Il cast a `int` taglia; per arrotondare al più vicino serve `round`.

## La tabella dei tipi e dim_tipi.c (slide 13–15)

Le slide 13 e 14, e il foglio a parte, riportano la tabella dei tipi del C con dimensione, intervallo e specificatore. La slide 14 lo dice in grande: **non serve impararla a memoria**. La versione con le spiegazioni è nella [lezione 02B](02B_assegnamento_memory_model.html).

| Tipo | Uso | Byte (64 bit) | Specificatore |
|---|---|:-:|---|
| `char` | caratteri ASCII | 1 | `%c` |
| `short` | interi | 2 | `%hd` |
| `int` | interi | 4 | `%d` |
| `long` | interi | 8 su Linux, 4 su Windows | `%ld` |
| `long long` | interi | 8 | `%lld` |
| `unsigned int` | naturali | 4 | `%u` |
| `size_t` | dimensioni | 8 | `%zu` |
| `float` | reali | 4 | `%f` |
| `double` | reali | 8 | `%lf` in `scanf`, `%f` in `printf` |

Gli `unsigned` partono da 0 e arrivano al doppio: un `unsigned char` va da 0 a 255, un `unsigned int` da 0 a 4 294 967 295.

### Che cosa stampa dim_tipi.c

`dim_tipi.c` stampa la dimensione di ogni tipo con `sizeof` e il suo intervallo, con le costanti di `limits.h` e `float.h`. Sul mio PC, Windows 11 a 64 bit:

```
sizeof(long)     = 4  intervallo: -2147483648, 2147483647
sizeof(long long)= 8  intervallo: -9223372036854775808, 9223372036854775807
...
sizeof(float) = 4  intervallo: 1.175494e-38, 3.402823e+38
sizeof(double)= 8  intervallo: 2.225074e-308, 1.797693e+308
...
sizeof(char*)    = 8
sizeof(int*)     = 8
sizeof(double*)  = 8
```

`long` vale 4 byte su Windows e 8 su Linux: la tabella lo avvisa, le dimensioni dipendono dal sistema. Al laboratorio Turing, con Linux, vedrai 8.

### La domanda: che cosa hanno di speciale i puntatori?

Tutti i tipi puntatore hanno la **stessa dimensione**: 8 byte su un computer a 64 bit. Il perché è nella lezione 02C: un puntatore contiene un **indirizzo**, e tutti gli indirizzi di una macchina hanno la stessa lunghezza, qualunque cosa ci sia a quell'indirizzo. Un `char` è di 1 byte e un `double` di 8, ma i loro indirizzi sono tutti e due di 8 byte.

L'ultima parte del programma usa `size_t`, il tipo senza segno restituito da `sizeof`: 100 `int` occupano `100 * sizeof(int)` = 400 byte.

::: prova Su un computer a 64 bit, quanto valgono `sizeof(char)`, `sizeof(char*)` e `sizeof(int) * 10`?
1, 8 e 40.
:::

> [!RICORDA]
> - La tabella dei tipi non va imparata a memoria: servono gli specificatori più usati.
> - Ogni puntatore occupa 8 byte su 64 bit, qualunque sia il tipo puntato.

## La documentazione del C (slide 16)

Nessuno ricorda tutte le funzioni e tutti gli specificatori: si cercano nella **documentazione**. Il riferimento più usato è **cppreference**, che ha una versione da scaricare e usare senza Internet. La slide spiega come:

1. vai su [cppreference.com/w/c](https://en.cppreference.com/w/c);
2. in fondo alla pagina, «Offline version»: scarica la versione più recente;
3. apri la pagina `html-book/reference/en/c.html`;
4. nella sezione degli header cerca `<stdio.h>` e leggi la documentazione completa di `printf`.

La slide avverte che la documentazione vera è molto più dettagliata di quello visto a lezione. Serve proprio a imparare a cercare: nella pagina di `printf` trovi, per esempio, che `%%` stampa un `%` e che `%.3f` fissa le cifre dopo la virgola.

::: prova Nella pagina di printf, quale specificatore stampa un intero in esadecimale?
`%x`, con le lettere minuscole, o `%X` con le maiuscole. `printf("%x", 255)` stampa `ff`.
:::

> [!RICORDA]
> - cppreference è il riferimento del C, anche senza Internet.
> - Per ogni funzione nuova, guarda prima la sua pagina.

## La spesa al mercato (slide 17)

Il programma `mercato.c` calcola la spesa per 3 pacchi di orecchiette a 1.50 euro e 1 kg e mezzo di pomodori a 2.50 euro al kg. Le slide chiedono variabili con tipi adatti, una variabile per il totale, indentazione e commenti.

```c
#include <stdio.h>

int main(void) {
    // prezzi unitari, in euro
    double prezzoOrecchiette = 1.50;   // un pacco
    double prezzoPomodori = 2.50;      // al kg

    // quantita' acquistate
    int pacchiOrecchiette = 3;
    double kgPomodori = 1.5;

    double totale = pacchiOrecchiette * prezzoOrecchiette + kgPomodori * prezzoPomodori;
    printf("Spesa totale: %.2f euro\n", totale);
}
```

Stampa `Spesa totale: 8.25 euro`: 3 per 1.50 fa 4.50, 1.5 per 2.50 fa 3.75.

Le scelte dei tipi: i pacchi si contano, quindi `int`; i chili e i prezzi hanno la virgola, quindi `double`. Il `%.2f` stampa i centesimi.

### Con le quantità da tastiera

La seconda parte chiede di leggere le quantità da tastiera invece di scriverle nel codice. Servono due `scanf`, con lo specificatore giusto per ogni tipo:

```c
int pacchiOrecchiette;
double kgPomodori;
printf("Pacchi di orecchiette: ");
scanf("%d", &pacchiOrecchiette);
printf("Kg di pomodori: ");
scanf("%lf", &kgPomodori);
```

Con 3 pacchi e 2 kg stampa `Spesa totale: 9.50 euro`. Il `%lf` per il `double` è obbligatorio: con `%f`, `-Wall -Werror` non compila.

::: prova Se i prezzi fossero in centesimi, che tipo useresti?
`int`: 150 e 250 centesimi sono interi esatti. Molti programmi che contano soldi fanno così, per evitare le approssimazioni dei reali.
:::

> [!RICORDA]
> - Le cose che si contano sono `int`; le misure con la virgola sono `double`.
> - Leggere un `double`: `%lf`.

## Gli scambi di variabili (slide 18)

L'ultimo esercizio riprende la [lezione 03A](03A_scambio_variabili.html). Prima si legge e si prova `scambio.c`, che scambia `x = 5` e `y = 8` con una variabile intermedia e stampa `x: 8, y: 5`. Poi si scrive `scambio4.c`: quattro variabili, in cui `v1` prende il valore di `v2`, `v2` di `v3`, `v3` di `v4` e `v4` di `v1`.

La soluzione completa, provata, è nella lezione 03A, nell'esercizio «scambio4.c del Laboratorio 02». L'idea: una sola variabile d'appoggio, che salva `v1` prima che venga sovrascritta.

```c
int temp = v1;
v1 = v2;
v2 = v3;
v3 = v4;
v4 = temp;
```

Con 10, 20, 30, 40 alla fine i valori sono 20, 30, 40, 10.

::: prova E se volessi il giro al contrario, con `v1` che prende il valore di `v4`?
Si salva la variabile sovrascritta per prima, che ora è `v4`: `int temp = v4; v4 = v3; v3 = v2; v2 = v1; v1 = temp;`.
:::

> [!RICORDA]
> - Una rotazione di quattro variabili richiede una sola variabile d'appoggio.
> - Si salva per prima la variabile che verrà sovrascritta per prima.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `%` | «modulo» | il resto della divisione intera | `99 % 50` vale 49 |
| `%%` | «percento percento» | in `printf`: stampa un `%` | `printf("100%%")` |
| `INT_MAX`, `INT_MIN` | «int max», «int min» | il massimo e il minimo di un `int`, da `limits.h` | 2147483647 |
| `const` | «const» | la variabile non si può modificare | `const float PI = 3.14f;` |
| `M_PI` | «emme pi» | la costante pi greco di `math.h` | |
| `floor`, `ceil`, `round` | «floor», «ceil», «round» | arrotondano per difetto, per eccesso, al più vicino | `ceil(4.3)` vale 5 |
| `sizeof` | «size of» | i byte occupati da un tipo | `sizeof(int)` vale 4 |
| `%zu` | «percento zeta u» | specificatore per `size_t` | |
| `-Wall` | «meno W all» | gcc mostra gli avvisi | |

## Verso l'esame

L'esame è al PC, con **CodeRunner**: il tuo codice viene compilato con `-Wall -Werror` e le sue stampe confrontate con quelle attese. Questo laboratorio allena quasi tutto quello che serve per non perdere punti nei primi esercizi:

1. **leggere gli errori del compilatore** e correggerli uno alla volta, come in `errori.c`;
2. **scegliere i tipi**: `int` per contare, `double` per misurare;
3. **le divisioni**: intera quando vuoi la parte intera, con la virgola quando vuoi la media;
4. **gli specificatori** giusti in `printf` e in `scanf`, compresi `%lf` e `%.2f`;
5. **niente variabili inutilizzate**: con `-Werror` bloccano la compilazione.

> [!METODO] Prima di consegnare un esercizio
> 1. Compila con `gcc -Wall -Werror`. Se ci sono errori, correggi **il primo** e ricompila.
> 2. Prova con dati scelti bene: un caso normale, uno con la virgola, uno con i negativi o lo zero.
> 3. Calcola a mano almeno un risultato e confrontalo con la stampa.
> 4. Controlla la forma della stampa: spazi, a capo, numero di cifre.

## Quiz

```quiz
D: Che cosa stampa `printf("%d %d", 99 / 50, 99 % 50);`?
+ `1 49`
- `1.98 0`
- `1 1`
- `49 1`
- `2 49`
= Tra interi `/` dà la parte intera, 1, e `%` il resto, 49. La risposta più insidiosa è `2 49`: la divisione intera non arrotonda, taglia.

D: Quanto vale `7 + 3 * 6 / 2 - 1` in C?
N: 15
= Prima `3 * 6` = 18, poi `18 / 2` = 9, poi `7 + 9 - 1` = 15.

D: Quale espressione calcola $ax^3 + 7$?
+ `a * (x * x * x) + 7`
- `a * x * x * (x + 7)`
- `a * x * (x * x + 7)`
- `(a * x) * x * (x + 7)`
- `a * x * x * x * 7`
= Le moltiplicazioni prima, poi si somma 7. La risposta più insidiosa è `a * x * x * (x + 7)`: la parentesi fa sommare 7 a `x` prima di moltiplicare. L'ultima moltiplica per 7 invece di sommarlo.

D: Con `int x = 1, y = 2, z = 5;` quanto vale `(double)((x + y + z) / 3)`?
+ 2.0
- 2.666667
- 3.0
- 2.67
- 8.0
= La divisione dentro la parentesi è tra interi: 8 / 3 fa 2, e il cast lo converte in 2.0. La risposta più insidiosa è 2.666667: si otterrebbe con il cast sulla somma, prima della divisione.

D: Che cosa stampa `printf("%d", (int)(8.136 * 1000));`?
+ `8135`
- `8136`
- `8136.0`
- `8137`
- non compila
= 8.136 in memoria è un po' meno di 8.136, quindi il prodotto è 8135.999…, e il cast a `int` taglia: 8135. La risposta più insidiosa è 8136, il risultato «giusto» a mano: si otterrebbe con `round`.

D: Su un computer a 64 bit, quanto vale `sizeof(char*)`?
+ 8
- 1
- 4
- 2
- dipende dal carattere puntato
= Un puntatore contiene un indirizzo, e gli indirizzi sono di 8 byte su 64 bit. La risposta più insidiosa è 1: è `sizeof(char)`, la dimensione del carattere, non del suo indirizzo.

D: Perché `aritmetica.c` non compila con `-Wall -Werror`?
+ Dichiara variabili che non usa
- Usa `INT_MAX` senza `limits.h`
- La divisione `99 / 50` è un errore
- `%%` non è valido in `printf`
- Va in overflow
= `n1`, `p` e `t` sono dichiarate e mai usate: con `-Werror` l'avviso `unused variable` diventa un errore. La risposta più insidiosa è l'overflow: è un problema vero, ma il compilatore non lo segnala. `limits.h` è incluso.

D: Quale riga legge correttamente i chili di pomodori in `double kg`?
+ `scanf("%lf", &kg);`
- `scanf("%f", &kg);`
- `scanf("%d", &kg);`
- `scanf("%lf", kg);`
- `scanf("%.2f", &kg);`
= Per un `double` in `scanf` serve `%lf`, con la `&`. La risposta più insidiosa è `%f`: va bene per un `float`, non per un `double`. `%.2f` è un formato di stampa, non di lettura.

D: Con `-17` e `5`, che cosa stampa `printf("%d %d", -17 / 5, -17 % 5);`?
+ `-3 -2`
- `-4 3`
- `-3 2`
- `-4 -2`
- `3 2`
= In C la divisione intera taglia verso lo zero, −3.4 diventa −3, e il resto ha il segno del primo numero: −17 = 5 · (−3) − 2. La risposta più insidiosa è `-4 3`: è la divisione con il resto positivo della matematica, non quella del C.
```

## Esercizi

::: esercizio base Riscaldamento: indovina le stampe
Senza compilare, scrivi che cosa stampano: (a) `printf("%d", 20 / 3);` (b) `printf("%d", 20 % 3);` (c) `printf("%f", 20 / 3.0);` (d) `printf("%.1f", 20 / 3.0);` (e) `printf("%d%%", 50);`
::: soluzione
(a) `6`. (b) `2`. (c) `6.666667`. (d) `6.7`, arrotondato. (e) `50%`.
:::

::: esercizio base Riscaldamento: precedenze
Calcola a mano: (a) `8 - 2 * 3`; (b) `(8 - 2) * 3`; (c) `20 / 4 / 5`; (d) `20 / (4 / 5)`; (e) `7 % 3 * 2`.
::: soluzione
(a) 2. (b) 18. (c) 1, da sinistra: `20 / 4` = 5, poi `5 / 5` = 1. (d) Errore a runtime: `4 / 5` tra interi fa 0, e dividere per zero fa fallire il programma. (e) 2: `7 % 3` = 1, poi `1 * 2` = 2.
:::

::: esercizio base Riscaldamento: il tipo giusto
Che tipo usi per: (a) l'età in anni; (b) la media dei voti; (c) il numero di byte di un file; (d) la lettera iniziale di un nome; (e) il prezzo in euro con i centesimi?
::: soluzione
(a) `int`. (b) `double`. (c) `size_t`, il tipo delle dimensioni, o `long long` se il file è enorme. (d) `char`. (e) `double`, oppure un `int` che conta i centesimi.
:::

::: esercizio medio Secondi in ore, minuti e secondi
Scrivi un programma che legge un numero di secondi e stampa ore, minuti e secondi. Con 3725 deve stampare `1 h 2 min 5 s`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int totale;
    scanf("%d", &totale);
    int ore = totale / 3600;
    int minuti = (totale % 3600) / 60;
    int secondi = totale % 60;
    printf("%d h %d min %d s\n", ore, minuti, secondi);
}
```
3725 / 3600 fa 1 ora; il resto, 125, diviso 60 fa 2 minuti; 3725 % 60 fa 5 secondi. `/` e `%` insieme separano le unità.
:::

::: esercizio medio Le temperature
Scrivi un programma che legge una temperatura in gradi Celsius, un `double`, e la stampa in gradi Fahrenheit con una cifra dopo la virgola. La formula è $F = C \cdot 9/5 + 32$. Attenzione a come scrivi 9/5.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    double c;
    scanf("%lf", &c);
    double f = c * 9.0 / 5.0 + 32;
    printf("%.1f\n", f);
}
```
Con 100 stampa `212.0`, con 37 stampa `98.6`. Se scrivi `c * (9 / 5) + 32`, la parentesi fa la divisione intera `9 / 5` = 1, e il risultato è sbagliato: con 100 viene 132.0.
:::

::: esercizio esame Media e arrotondamenti
Scrivi un programma che legge quattro voti interi e stampa la media con 2 cifre dopo la virgola, poi la media arrotondata al voto intero più vicino. Con 27, 28, 30, 24 deve stampare `27.25` e `27`.
::: soluzione
```c
#include <stdio.h>
#include <math.h>

int main(void) {
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    double media = (a + b + c + d) / 4.0;
    printf("%.2f\n", media);
    printf("%d\n", (int)round(media));
}
```
La somma 109 divisa per 4.0 fa 27.25; `round` dà 27. Con i voti 27, 28, 30, 25 la media è 27.5 e `round` dà 28. Su Linux si compila con `-lm`.
:::

::: esercizio esame Trova gli errori
Il programma dovrebbe leggere base e altezza di un triangolo, due `double`, e stampare l'area. Trova e correggi gli errori: `double b, h; scanf("%lf %lf", b, h); double area = 1 / 2 * b * h; printf("Area: %d\n", area);`
::: soluzione
1. In `scanf` mancano le `&`: `&b, &h`. Con `-Wall -Werror` non compila.
2. `1 / 2` è una divisione intera e fa 0: l'area sarebbe sempre 0. Va scritto `b * h / 2` oppure `0.5 * b * h`.
3. `%d` per un `double`: serve `%f`. Con `-Wall -Werror` non compila.

Corretto: `scanf("%lf %lf", &b, &h); double area = b * h / 2; printf("Area: %f\n", area);`.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra `99 / 50` e `99 / 50.0`?
Il primo è una divisione tra interi e dà 1. Nel secondo c'è un reale, quindi la divisione è con la virgola e dà 1.98.
:::

::: domanda Che cosa succede sommando 3 a INT_MAX?
Il numero esce dall'intervallo degli `int` e, di solito, ricomincia dai negativi: −2 147 483 646. È un overflow, e per il C è comportamento indefinito.
:::

::: domanda A che cosa serve const?
A dichiarare una costante: il valore si dà all'inizio e il programma non può più cambiarlo.
:::

::: domanda Che differenza c'è tra `(int)x`, `floor(x)` e `round(x)`?
`(int)x` taglia la parte dopo la virgola, verso lo zero. `floor` arrotonda per difetto, `round` al più vicino. Con −2.5: −2, −3 e −3.
:::

::: domanda Perché `(int)(8.136 * 1000)` dà 8135?
Perché 8.136 non si scrive esattamente in base 2: il prodotto è 8135.999…, e il cast a `int` taglia.
:::

::: domanda Perché tutti i puntatori hanno la stessa dimensione?
Perché contengono un indirizzo, e su una macchina tutti gli indirizzi hanno la stessa lunghezza: 8 byte su 64 bit.
:::

::: domanda Dove si cercano le informazioni su printf e sulle altre funzioni del C?
Nella documentazione, per esempio su cppreference, che ha anche una versione da usare senza Internet.
:::

## Glossario

```glossario
Codice di partenza | I programmi già scritti forniti con il laboratorio, da leggere, provare e completare.
Divisione intera | `/` tra due interi: tiene solo la parte intera, tagliando verso lo zero.
Modulo | `%`: il resto della divisione intera; in C ha il segno del primo numero.
Overflow | Un risultato intero che supera il massimo del suo tipo; per gli int con il segno è comportamento indefinito.
INT_MAX, INT_MIN | Massimo e minimo di un int, definiti in limits.h.
const | Parola chiave che rende una variabile non modificabile.
floor, ceil, round | Funzioni di math.h che arrotondano per difetto, per eccesso e al più vicino.
sizeof | Operatore che dà quanti byte occupa un tipo o una variabile.
cppreference | Sito di documentazione del C e del C++, scaricabile per l'uso senza Internet.
-Wall | Opzione di gcc che mostra gli avvisi; con -Werror ogni avviso diventa un errore.
```

## Checklist

```checklist
- So prevedere il risultato di `/` e `%` tra interi, anche con i negativi.
- So che cos'è l'overflow di un int e perché il compilatore non lo segnala.
- So calcolare un'espressione rispettando le precedenze.
- So completare circonferenza.c e spiegare che cosa fa const.
- So trovare gli errori di un programma, anche senza compilarlo.
- So calcolare una media con la virgola e arrotondarla nei quattro modi.
- So spiegare perché 8.136 per 1000 dà 8135.
- So che i puntatori hanno tutti la stessa dimensione, e perché.
- So scrivere mercato.c, anche con le quantità da tastiera.
- So ruotare quattro variabili con una sola variabile d'appoggio.
```

## Fonti

- Slide «Operatori e Tipi» (Lezione nº 2 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27: aritmetica.c (slide 2), operazioni su interi (slide 3), ordine di valutazione (slide 4–7), circonferenza (slide 8), errori in C (slide 9–11), media (slide 12), tabella dei tipi (slide 13–14), dimensioni dei tipi (slide 15), documentazione (slide 16), mercato (slide 17), scambio di variabili (slide 18).
- «Tabella dei tipi e specificatori di conversione», foglio del laboratorio canale B.
- Codice di partenza del laboratorio: aritmetica.c, circonferenza.c, dim_tipi.c, errori.c, media.c, scambio.c.
- [cppreference, la documentazione del C](https://en.cppreference.com/w/c).
- Tutti i programmi, del codice di partenza e delle soluzioni, sono stati compilati con gcc 16.1 su Windows 11 a 64 bit ed eseguiti; le stampe e gli errori riportati sono quelli veri. Le soluzioni, i quiz e gli esercizi sono di questi appunti.
