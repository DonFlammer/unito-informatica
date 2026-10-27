---
corso: PROG1
lezione: Lab03
titolo: "Laboratorio 03: condizioni booleane"
data: 2026-10-19
docenti: Elisa Marengo (turno B2) e Valerio Basile (turno B1); teoria Elvio Amparore
sopratitolo: Canale B · Laboratorio 03 · Programmazione I
descrizione: >-
  Appunti del terzo laboratorio di Programmazione I (canale B, Lab03): il valore di espressioni booleane, perché 3 < 5
  < 7 non vuol dire quello che sembra, De Morgan, i sei esercizi di esercizi_booleani.c, il saluto secondo l'ora, come
  funziona CodeRunner, il punto e virgola dopo l'if e l'else senza graffe, il massimo di quattro numeri, il menù di
  operazioni, l'equazione di secondo grado con tutti i casi, sasso-carta-forbici-lucertola-Spock, con i programmi
  provati.
lede: >-
  Il terzo laboratorio mette in pratica le lezioni 03C e 03D: si calcolano espressioni booleane a mano, si scrivono if
  ed else per scegliere tra più casi e si incontra CodeRunner, il sistema dell'esame. Qui trovi ogni esercizio risolto
  e provato, e quello che il compilatore dice davvero sugli errori delle slide.
materiale: slide
scheda:
  Slide: Lab03 «Condizioni booleane», laboratorio canale B · 22 pagine, esercizi anche su CodeRunner
  Laboratorio: Elisa Marengo (turno B2, lun 19/10) e Valerio Basile (turno B1, mar 20/10) · 14–17 · laboratorio Turing
  Tempo di studio: 2–3 ore, davanti a un computer
fonte: >-
  Slide «Condizioni booleane» (Lezione nº 3 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27;
  lezioni 03C e 03D di Amparore
appunti_html: appunti/PROG1/Lab03_condizioni_booleane.html
genera_html: true
---

## In breve

- In C un confronto vale **1 se è vero e 0 se è falso**. Per questo `3 < 5 < 7` non controlla che 5 stia tra 3 e 7: calcola `(3 < 5) < 7`, cioè `1 < 7`. Si scrive `3 < 5 && 5 < 7`.
- Le **leggi di De Morgan** dicono come si nega un «e» e un «o»: `!(a && b)` è come `!a || !b`, e `!(a || b)` è come `!a && !b`.
- Per scegliere tra più casi si usa una catena di `if`, `else if`, `else`: i casi si controllano in ordine e se ne esegue **uno solo**.
- **CodeRunner** compila il tuo programma con `-Wall -Werror`, lo esegue con diversi input e confronta le stampe con quelle attese, carattere per carattere.
- Due errori che le slide definiscono «insidiosi»: il **punto e virgola dopo l'`if`** e l'`else` con due istruzioni **senza graffe**. Con le graffe sempre, non succedono.
- Il **massimo** di più numeri si trova con una variabile di supporto: si parte dal primo e la si aggiorna quando arriva un numero più grande.
- L'equazione di secondo grado ha **sei casi**: indeterminata, impossibile, di primo grado, una radice, due radici reali, radici complesse.

> [!CANALI]
> **Canale B.** È il terzo laboratorio, al laboratorio Turing, dalle 14 alle 17: turno **B2** lunedì 19/10 con **Elisa Marengo**, turno **B1** martedì 20/10 con **Valerio Basile**. Gli esercizi riprendono le lezioni [03C](03C_booleani.html) (espressioni booleane) e [03D](03D_decisioni.html) (`if` ed `else`); il gioco finale usa il valore restituito da `scanf`, della [02C](02C_referenziamento_scanf_puntatori.html).
>
> **Canali A e C.** Secondo la scheda del corso i laboratori hanno la stessa sequenza nei tre canali e gli stessi esercizi su CodeRunner. Le slide 2026/27 dei canali A e C per questo laboratorio non le ho viste.
>
> I tre esercizi su CodeRunner (Lab03-Es1, Es2 ed Es3) e il codice di partenza (`booleani.c`, `esercizi_booleani.c`) sono su Moodle e non li ho: qui ci sono soluzioni mie degli stessi problemi. Tutti i programmi li ho compilati con gcc 16.1 su Windows 11 a 64 bit ed eseguiti.

## Il valore di un'espressione booleana (slide 2–3)

La prima domanda del laboratorio chiede il valore di nove espressioni. In C il risultato di un confronto o di un'operazione logica è un intero: **1** se è vera, **0** se è falsa. Con `printf("%d", ...)` si vede proprio 1 o 0; le slide scrivono `true` e `false`.

| Espressione | Come si calcola | Valore |
|---|---|:-:|
| `3>5 \|\| 10 == 7+3` | falso, oppure vero | 1 |
| `3 != 5 && (6 < 2 \|\| 5+2 == 10 - 3)` | vero, e (falso oppure vero) | 1 |
| `3 < 5 < 7` | `(3 < 5) < 7`, cioè `1 < 7` | 1, ma per il motivo sbagliato |
| `4 > 3 > 2` | `(4 > 3) > 2`, cioè `1 > 2` | 0 |
| `3 < 5 && 5 < 7` | vero e vero | 1 |
| `3 < 5 && 7 < 5` | vero e falso | 0 |
| `true && false` | | 0 |
| `true && 5 < 7` | il `<` si calcola prima dell'`&&` | 1 |
| `false \|\| 5 < 10` | | 1 |

I valori li ho controllati con un programma. Le due righe interessanti sono la terza e la quarta. In matematica $4 > 3 > 2$ è vera; in C gli operatori di confronto si applicano **da sinistra, due alla volta**. Prima `4 > 3`, che vale 1; poi `1 > 2`, che è falso.

> [!TRAPPOLA] gcc avvisa, e con -Werror non compila
> Le slide usano solo `-Wall`. Con `3 < 5 < 7` gcc 16 dà l'avviso `comparisons like 'X<=Y<=Z' do not have their mathematical meaning [-Wparentheses]`: con `-Werror`, cioè all'esame e su CodeRunner, il programma non compila. «5 sta tra 3 e 7» si scrive `3 < 5 && 5 < 7`.

La slide 4 ricorda le **leggi di De Morgan** della [lezione 07 di Fondamenti](../FDA/07_condizionali_equivalenza_logica.html): per negare un «e» si negano i pezzi e si mette un «o», e viceversa. In C: `!(a && b)` è come `!a || !b`, e `!(a || b)` è come `!a && !b`.

::: prova Quanto valgono `!(3 < 5 && 2 > 4)` e `10 > 5 > 1`? E quale delle due fa scattare l'avviso di gcc?
`!(3 < 5 && 2 > 4)` vale 1: dentro la parentesi c'è vero e falso, cioè falso, e il `!` lo gira. `10 > 5 > 1` vale 0: `10 > 5` dà 1, e `1 > 1` è falso. L'avviso è per la seconda.
:::

> [!RICORDA]
> - Vero vale 1, falso vale 0.
> - `a < b < c` in C non vuol dire «b sta tra a e c»: si scrive `a < b && b < c`.

## esercizi_booleani.c: sei condizioni (slide 4–5)

Il codice di partenza ha due file. `booleani.c` va solo letto e provato, per vedere esempi di operazioni booleane. In `esercizi_booleani.c` vanno scritti sei punti. Ecco una soluzione per ognuno: ogni punto legge i suoi valori.

```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int a, b, c;
    bool b1, b2;
    int t1, t2;

    // 1. a multiplo di b: stampa 1 o 0
    printf("a e b: ");
    scanf("%d %d", &a, &b);
    printf("%d\n", b != 0 && a % b == 0);

    // 2. a e' un voto tra 1 e 30?
    printf("voto: ");
    scanf("%d", &a);
    printf("%s\n", (a >= 1 && a <= 30) ? "true" : "false");

    // 3. false se b1 e b2 sono entrambi veri, true altrimenti
    printf("b1 e b2 (0 o 1): ");
    scanf("%d %d", &t1, &t2);
    b1 = t1;
    b2 = t2;
    printf("%s\n", !(b1 && b2) ? "true" : "false");

    // 4. il massimo di due interi
    printf("a e b: ");
    scanf("%d %d", &a, &b);
    if (a > b) {
        printf("%d\n", a);
    } else if (b > a) {
        printf("%d\n", b);
    } else {
        printf("I due valori sono uguali\n");
    }

    // 5. il massimo di tre interi, con max
    printf("a, b e c: ");
    scanf("%d %d %d", &a, &b, &c);
    int max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    printf("%d\n", max);

    // 6. ordinati in modo crescente?
    printf("a, b e c: ");
    scanf("%d %d %d", &a, &b, &c);
    if (a < b && b < c) {
        printf("ordinati\n");
    }
}
```

Con l'input `12 4`, `31`, `1 1`, `7 7`, `3 9 5`, `1 2 3` stampa 1, `false`, `false`, `I due valori sono uguali`, 9 e `ordinati`. Alcuni dettagli:

- **Punto 1.** «$a$ multiplo di $b$» vuol dire che la divisione $a / b$ ha resto 0: `a % b == 0`. Il controllo `b != 0` viene prima, così con $b = 0$ l'`&&` si ferma e la divisione per zero non avviene: è la valutazione cortocircuitata della [03C](03C_booleani.html).
- **Punto 3.** «false se tutti e due sono veri, true altrimenti» è `!(b1 && b2)`, che per De Morgan è anche `!b1 || !b2`. I due booleani si leggono come interi, perché `scanf` non ha uno specificatore per `bool`.
- **Punto 2.** Il `? :` sceglie quale stringa stampare: `condizione ? se_vera : se_falsa`.

::: prova Con il punto 6, l'input `1 1 2` stampa «ordinati»? E se la richiesta fosse «in ordine non decrescente»?
No: `1 < 1` è falso. Per «non decrescente», dove i numeri uguali vanno bene, si scrive `a <= b && b <= c`, e allora stampa «ordinati».
:::

> [!RICORDA]
> - «Multiplo» si controlla con il resto: `a % b == 0`, dopo aver escluso `b == 0`.
> - Le condizioni con «tra», «entrambi», «almeno uno» si traducono con `&&` e `||`.

## Il saluto secondo l'ora: saluta.c (slide 6)

Il programma chiede l'ora e stampa uno di quattro saluti. Gli intervalli li decidi tu: l'importante è che coprano tutte le ore da 0 a 23 senza sovrapposizioni, e che un'ora fuori dall'intervallo dia un messaggio d'errore.

```c
#include <stdio.h>

int main(void) {
    int ora;
    printf("Che ore sono? ");
    scanf("%d", &ora);
    if (ora < 0 || ora > 23) {
        printf("Ora non valida\n");
    } else if (ora >= 6 && ora < 13) {
        printf("Buongiorno\n");
    } else if (ora >= 13 && ora < 18) {
        printf("Buon pomeriggio\n");
    } else if (ora >= 18 && ora < 23) {
        printf("Buonasera\n");
    } else {
        printf("Buona notte\n");
    }
}
```

La catena `else if` si legge dall'alto: appena una condizione è vera si esegue il suo blocco e si salta il resto. L'ultimo `else` prende tutto quello che resta: le ore da 0 a 5 e le 23. Con 3, 9, 15, 20 e 25 stampa `Buona notte`, `Buongiorno`, `Buon pomeriggio`, `Buonasera` e `Ora non valida`.

::: prova Nella catena, la condizione `ora >= 13 && ora < 18` si potrebbe accorciare in `ora < 18`? Perché?
Sì: a quel punto della catena si sa già che l'ora non è minore di 13, altrimenti sarebbe entrata in un ramo precedente. Allo stesso modo `ora >= 18 &&` è superfluo nel ramo dopo. La versione lunga però si legge anche da sola.
:::

> [!RICORDA]
> - In una catena `if`, `else if`, `else` si esegue un solo ramo, il primo con la condizione vera.
> - L'`else` finale raccoglie tutti i casi non elencati.

## CodeRunner (slide 7–10)

Gli esercizi su Moodle con il nome «Lab03-Es…» si fanno su **CodeRunner**, lo stesso sistema dell'esame. Si apre l'esercizio, si preme «Tenta il quiz adesso» e si trova il testo, un'area in cui scrivere il codice e il pulsante per compilare ed eseguire. Il programma viene eseguito con diversi input preparati dai docenti e le sue stampe vengono confrontate con quelle attese.

| Esito | Che cosa vuol dire |
|---|---|
| errore di compilazione | il programma non compila con `-Wall -Werror`: anche un solo avviso lo blocca |
| alcuni test falliti | compila e gira, ma almeno una stampa è diversa da quella attesa |
| tutti i test superati | compila, gira e produce tutte le stampe attese |

Le stampe si confrontano **carattere per carattere**: uno spazio in più, una maiuscola o un `\n` mancante bastano a far fallire un test. In laboratorio puoi verificare quante volte vuoi, e l'esercizio non viene valutato: i messaggi sui punteggi si possono ignorare.

Il primo esercizio, «Lab03-Es1 Scelte su Interi», chiede di scegliere tra più casi su degli interi letti in input. Il testo esatto è su Moodle e non l'ho.

::: prova Un esercizio chiede di stampare `Il massimo e' 9` e tu stampi `il massimo e' 9`. Che esito dà CodeRunner?
Test fallito: la maiuscola iniziale è diversa. Il programma compila e gira, ma la stampa non coincide con quella attesa.
:::

> [!RICORDA]
> - CodeRunner compila con `-Wall -Werror`: un avviso è già un errore.
> - Le stampe devono coincidere carattere per carattere, compresi spazi e a capo.

## Due errori che compilano (slide 11–15)

Le slide mostrano due programmi sbagliati che, dicono, «compilano senza segnalare problemi». Il primo ha un punto e virgola subito dopo l'`if`:

```c
#include <stdio.h>

int main() {
    int voto;
    scanf("%d", &voto);
    if (voto >= 18);
        printf("Esame passato.\n");
}
```

Per il C il `;` è un'**istruzione vuota**: l'`if` controlla quella, e la `printf` dopo viene eseguita sempre. Con il voto 15 il programma stampa `Esame passato.`

Il secondo ha un `else` con due istruzioni e senza graffe:

```c
    if (voto >= 18)
        printf("Esame passato.\n");
    else
        printf("Esame non passato.\n");
        printf("Ripresentarsi al prossimo appello.\n");
```

Senza graffe, l'`else` controlla **solo la prima istruzione** che lo segue. L'ultima `printf` sta fuori, anche se l'indentazione fa pensare il contrario: con il voto 25 il programma stampa `Esame passato.` e poi `Ripresentarsi al prossimo appello.`

```grafico
titolo: Che cosa controlla davvero l'else senza graffe. Il riquadro ambra è il ramo dell'else: contiene solo la prima printf. La seconda, in rosa, sta fuori e viene eseguita sempre, con qualunque voto.
x: 0 12
y: 0.4 6
assi: no
griglia: no
proporzioni: libere
poligono: 1 4.6 11 4.6 11 5.5 1 5.5 | blu
testo: 6 5.05 | blu | "if (voto >= 18) → «Esame passato.»"
poligono: 1 3.2 11 3.2 11 4.1 1 4.1 | ambra
testo: 6 3.65 | ambra | "else → «Esame non passato.»"
poligono: 1 1.4 11 1.4 11 2.3 1 2.3 | rosa
testo: 6 1.85 | rosa | "«Ripresentarsi...»: sempre"
freccia: 6 3.2 6 2.4 | grigio
testo: 6 0.8 | grigio | "l'indentazione non conta: contano le graffe"
```

> [!TRAPPOLA] Con gcc 16 non compilano più in silenzio
> Le slide dicono che i due programmi compilano senza avvisi. Con gcc 16.1 e `-Wall` non è così: per tutti e due gcc avvisa `this 'if' clause does not guard...` (o `this 'else' clause`) `[-Wmisleading-indentation]`, perché l'indentazione fa credere che la `printf` stia dentro. Con `-Werror` il programma non compila. Se però la `printf` non fosse indentata, l'avviso sparirebbe e l'errore resterebbe nascosto. Il punto e virgola vuoto ha anche un suo avviso, `suggest braces around empty body`, ma solo con `-Wextra`.

La regola delle slide (slide 15) risolve tutti e due i problemi: **metti sempre le graffe** attorno ai blocchi di `if` ed `else`, tranne quando il blocco è una riga sola, corta, scritta sulla stessa riga dell'`if`.

::: prova Con le graffe, dove va la `printf` della seconda frase perché sia stampata solo quando l'esame non è passato?
Dentro il blocco dell'`else`: `else { printf("Esame non passato.\n"); printf("Ripresentarsi al prossimo appello.\n"); }`.
:::

> [!RICORDA]
> - Un `;` subito dopo `if (...)` è un'istruzione vuota: l'`if` non controlla più niente.
> - Senza graffe, `if` ed `else` controllano una sola istruzione. Le graffe sempre evitano entrambi gli errori.

## Il massimo di quattro numeri (slide 16, Lab03-Es2)

Il secondo esercizio su CodeRunner, «Emersione del Massimo», estende quello visto a lezione nella [03D](03D_decisioni.html): trovare il più grande di quattro numeri. Il testo esatto è su Moodle. L'idea è la stessa del punto 5 di `esercizi_booleani.c`: una variabile `max` che parte dal primo numero e viene aggiornata ogni volta che arriva un numero più grande. Il massimo «emerge» confronto dopo confronto.

```c
int a, b, c, d;
scanf("%d %d %d %d", &a, &b, &c, &d);
int max = a;            // il primo e' il massimo provvisorio
if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
if (d > max) {
    max = d;
}
printf("%d\n", max);
```

Con `3 -2 9 4` stampa 9, con `-7 -3 -9 -4` stampa −3. Gli `if` sono separati, non una catena con `else`: **ogni** numero va confrontato con il massimo provvisorio. Con i cicli della [04A](04A_iterazioni.html) lo stesso schema funziona per un numero qualsiasi di valori.

> [!TRAPPOLA] Non partire da 0
> Con `int max = 0;` il programma sbaglia quando tutti i numeri sono negativi: con `-7 -3 -9 -4` stamperebbe 0, che non è tra i numeri letti. Il massimo provvisorio deve essere uno dei numeri.

::: prova Quanti confronti fa il programma con 4 numeri? E con 10, con lo stesso schema?
3 confronti: il primo numero non si confronta. Con 10 numeri, 9.
:::

> [!RICORDA]
> - Massimo: `max` parte dal primo valore, poi un `if` separato per ogni altro valore.

## Il menù di operazioni (slide 17)

Il programma legge tre interi, stampa un piccolo menù, legge la scelta e calcola somma, prodotto o media. Se la scelta non è 1, 2 o 3 deve stampare un errore.

```c
#include <stdio.h>

int main(void) {
    int x1, x2, x3, scelta;
    printf("Inserisci tre interi: ");
    scanf("%d %d %d", &x1, &x2, &x3);
    printf("scrivi 1 per calcolare la somma\n");
    printf("scrivi 2 per calcolare il prodotto\n");
    printf("scrivi 3 per calcolare la media\n");
    scanf("%d", &scelta);
    if (scelta == 1) {
        printf("somma: %d\n", x1 + x2 + x3);
    } else if (scelta == 2) {
        printf("prodotto: %d\n", x1 * x2 * x3);
    } else if (scelta == 3) {
        printf("media: %f\n", (x1 + x2 + x3) / 3.0);
    } else {
        printf("Errore: operazione %d non disponibile\n", scelta);
    }
}
```

Con `2 3 4` e la scelta 3 stampa `media: 3.000000`; con la scelta 7, il messaggio d'errore. La media divide per `3.0` e non per `3`, come nel [Lab02](Lab02_operatori_tipi.html): tra interi la divisione taglia la parte decimale.

> [!NOTA] Lo switch è vietato all'esame
> Un menù di questo tipo in C si scrive spesso con `switch` e `case`. Le regole d'esame di Programmazione I lo vietano, insieme a `break`: con la catena di `else if` si fa la stessa cosa.

::: prova Con i numeri `1 2 2` e la scelta 3, che cosa stamperebbe la media scritta come `(x1 + x2 + x3) / 3`?
`1`, e con `%f` il programma sarebbe pure sbagliato: `5 / 3` tra interi fa 1, un `int`, mentre `%f` vuole un `double`. Con `-Wall -Werror` non compilerebbe. La versione giusta stampa `1.666667`.
:::

> [!RICORDA]
> - Un menù si scrive con una catena di `else if` e un `else` finale per le scelte non valide.

## L'equazione di secondo grado (slide 18–20)

Un'equazione di secondo grado può avere due soluzioni, una sola, nessuna reale, oppure non essere nemmeno di secondo grado. Il programma deve distinguere tutti i casi, seguendo il diagramma della slide 19. L'equazione è $ax^2 + bx + c = 0$.

Se $a = 0$ l'equazione è di primo grado, $bx + c = 0$, e ha tre sotto-casi: con $b \neq 0$ la soluzione è $x = -\frac{c}{b}$; con $b = 0$ e $c = 0$ ogni $x$ va bene, ed è **indeterminata**; con $b = 0$ e $c \neq 0$ resta $c = 0$, falso, ed è **impossibile**. Se $a \neq 0$ si calcola il discriminante, che decide il resto:

$$\delta = b^2 - 4ac, \qquad x_{1,2} = \frac{-b \pm \sqrt{\delta}}{2a}.$$

La slide spezza la formula in pezzi: $W = 2a$, $W_1 = -\frac{b}{W}$ e $W_2 = \frac{\sqrt{\lvert\delta\rvert}}{W}$. Con $\delta > 0$ le radici sono $W_1 + W_2$ e $W_1 - W_2$; con $\delta = 0$ c'è una radice sola, $W_1$; con $\delta < 0$ le radici sono complesse, $W_1 \pm W_2\,i$.

```grafico
titolo: Il diagramma della slide 19. A sinistra il caso a = 0, che non è di secondo grado; a destra il discriminante decide. In verde le risposte «sì», in rosa le «no». Con una radice questa è W₁, con due radici reali sono W₁ ± W₂, con le complesse W₁ ± W₂ i.
x: 0 12
y: 1.6 10
assi: no
griglia: no
proporzioni: libere
poligono: 2.8 9.75 4.1 9.2 2.8 8.65 1.5 9.2 | blu
testo: 2.8 9.2 | blu | "a = 0?"
poligono: 2.8 7.75 4.1 7.2 2.8 6.65 1.5 7.2 | blu
testo: 2.8 7.2 | blu | "b = 0?"
poligono: 2 5.55 3.3 5 2 4.45 0.7 5 | blu
testo: 2 5 | blu | "c = 0?"
freccia: 2.8 8.65 2.8 7.8 | verde
freccia: 4.1 7.2 4.6 6.3 | rosa
testo: 4.6 5.9 | grigio | "x = −c/b"
freccia: 2.5 6.75 2.1 5.6 | verde
freccia: 1.4 4.75 1.4 2.95 | verde
testo: 1.9 2.5 | grigio | "indeterminata"
freccia: 3.3 5 4.2 4.05 | rosa
testo: 4.4 3.65 | grigio | "impossibile"
freccia: 4.1 9.2 6.5 9.2 | rosa
poligono: 6.6 8.7 11.8 8.7 11.8 9.7 6.6 9.7 | ambra
testo: 9.2 9.2 | ambra | "δ = b² − 4ac"
freccia: 9.2 8.7 9.2 7.8 | grigio
poligono: 9.2 7.75 10.5 7.2 9.2 6.65 7.9 7.2 | blu
testo: 9.2 7.2 | blu | "δ = 0?"
freccia: 7.9 7.2 7.3 6.25 | verde
testo: 7.3 5.85 | grigio | "una radice"
freccia: 9.2 6.65 9.2 5.6 | rosa
poligono: 9.2 5.55 10.5 5 9.2 4.45 7.9 5 | blu
testo: 9.2 5 | blu | "δ < 0?"
freccia: 8.6 4.7 8 3.45 | verde
testo: 8 3.05 | grigio | "complesse"
freccia: 9.8 4.7 10.5 2.65 | rosa
testo: 10.5 2.25 | grigio | "due reali"
```

```c
#include <stdio.h>
#include <math.h>

int main(void) {
    double a, b, c;
    printf("Coefficienti a, b, c: ");
    scanf("%lf %lf %lf", &a, &b, &c);
    if (a == 0) {                        // non e' di secondo grado
        if (b == 0) {
            if (c == 0) {
                printf("Indeterminata\n");
            } else {
                printf("Impossibile\n");
            }
        } else {
            printf("x1 = %g\n", -c / b);
        }
    } else {
        double delta = b * b - 4 * a * c;
        double W = 2 * a;
        double W1 = -b / W;
        double W2 = sqrt(fabs(delta)) / W;
        if (delta == 0) {
            printf("Singola radice: x1 = %g\n", W1);
        } else if (delta < 0) {
            printf("Radici complesse coniugate: %g + %gi e %g - %gi\n", W1, fabs(W2), W1, fabs(W2));
        } else {
            printf("x1 = %g, x2 = %g\n", W1 + W2, W1 - W2);
        }
    }
}
```

Con i coefficienti della slide 20 dà i risultati della tabella: `0 0 0` indeterminata, `0 0 4` impossibile, `0 2 -4` dà 2, `1 0 -121` dà 11 e −11, `1 2 1` dà −1, `1 -3 10` radici complesse ($1{,}5 \pm 2{,}78i$), `5 20 0` dà 0 e −4. Lo specificatore `%g` stampa il numero senza zeri inutili: `2` invece di `2.000000`.

> [!TRAPPOLA] abs non va bene per un double
> La slide 20 consiglia `abs()` di `<stdlib.h>` per il valore assoluto. `abs` lavora sugli **interi**: con un `double` lo converte in intero e taglia i decimali. `sqrt(abs(-2.5))` vale $\sqrt{2} \approx 1{,}414$ invece di $\sqrt{2{,}5} \approx 1{,}581$, e `-Wall` non avvisa: l'avviso `using integer absolute value function 'abs'` arriva solo con `-Wextra`. Per i `double` si usa `fabs()` di `<math.h>`. `abs` va bene se i coefficienti sono `int`.

> [!NOTA] -lm su Linux
> `sqrt` e `fabs` stanno nella libreria matematica. Su Windows con MinGW basta l'`#include`; al laboratorio Turing, su Linux, può servire aggiungere `-lm` alla fine del comando: `gcc -Wall equaz_secondo.c -o equaz_secondo -lm`.

::: prova Che cosa stampa il programma con `-1 0 4`, cioè $-x^2 + 4 = 0$?
`x1 = -2, x2 = 2`. Con $a = -1$, $W = -2$ è negativo, quindi $W_2 = \frac{4}{-2} = -2$, e le radici escono nell'ordine $W_1 + W_2 = -2$ e $W_1 - W_2 = 2$. Sono comunque $\pm 2$.
:::

> [!RICORDA]
> - Prima il caso $a = 0$, con i suoi tre sotto-casi; poi il discriminante decide tra una, due o nessuna radice reale.
> - Valore assoluto: `fabs` per i `double`, `abs` per gli `int`.

## Sasso-carta-forbici-lucertola-Spock (Lab03-Es3)

Il terzo esercizio su CodeRunner è la morra cinese a cinque mosse, quella della serie *The Big Bang Theory*. Ogni mossa batte altre due: le forbici tagliano la carta e decapitano la lucertola; la carta copre il sasso e smentisce Spock; il sasso schiaccia la lucertola e rompe le forbici; la lucertola avvelena Spock e mangia la carta; Spock rompe le forbici e vaporizza il sasso.

Il testo esatto e il formato dell'input sono su Moodle. Questa versione codifica le mosse con i numeri da 1 a 5 e scrive le regole in un'unica espressione booleana:

```c
#include <stdio.h>
#include <stdbool.h>

// 1 = sasso, 2 = carta, 3 = forbici, 4 = lucertola, 5 = Spock
int main(void) {
    int g1, g2;
    if (2 != scanf("%d %d", &g1, &g2)) {
        printf("Input non letto\n");
    } else if (g1 < 1 || g1 > 5 || g2 < 1 || g2 > 5) {
        printf("Mossa non valida\n");
    } else if (g1 == g2) {
        printf("Pareggio\n");
    } else {
        bool vince1 =
            (g1 == 1 && (g2 == 3 || g2 == 4)) ||   // sasso: forbici, lucertola
            (g1 == 2 && (g2 == 1 || g2 == 5)) ||   // carta: sasso, Spock
            (g1 == 3 && (g2 == 2 || g2 == 4)) ||   // forbici: carta, lucertola
            (g1 == 4 && (g2 == 2 || g2 == 5)) ||   // lucertola: carta, Spock
            (g1 == 5 && (g2 == 1 || g2 == 3));     // Spock: sasso, forbici
        printf(vince1 ? "Vince il giocatore 1\n" : "Vince il giocatore 2\n");
    }
}
```

La nota della slide 22 chiede come capire se «gli input non sono stati letti»: `scanf` restituisce **quante variabili ha letto**. Con `"%d %d"` deve restituire 2; se l'utente scrive una lettera, restituisce meno e le variabili non contengono valori validi. Con `1 3` vince il giocatore 1, con `3 1` il 2, con `2 2` è pareggio, con `6 1` la mossa non è valida, con `x` l'input non è letto.

::: prova Perché il controllo su `scanf` è il primo della catena?
Perché se la lettura fallisce `g1` e `g2` non sono inizializzate: confrontarle con 1 o 5 vorrebbe dire usare valori a caso. Prima si controlla di aver letto, poi si usano i valori.
:::

> [!RICORDA]
> - Prima si controlla che `scanf` abbia letto tutto, poi che i valori siano validi, poi si calcola.
> - Una tabella di regole si può scrivere come «o» di casi, ognuno un «e».

## I simboli di questa lezione

| Scrittura | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `a && b` | «a e b» | vero se tutti e due sono veri | `3 < 5 && 5 < 7` |
| `a \|\| b` | «a o b» | vero se almeno uno è vero | `ora < 0 \|\| ora > 23` |
| `!a` | «non a» | vero se `a` è falso | `!(b1 && b2)` |
| `c ? x : y` | «se c allora x, altrimenti y» | sceglie tra due valori | `max ? "true" : "false"` |
| `%g` | «per cento g» | stampa un `double` senza zeri inutili | `2` invece di `2.000000` |
| `fabs(x)` | «valore assoluto di x» | valore assoluto di un `double`, da `<math.h>` | `fabs(-2.5)` vale 2.5 |

## Verso l'esame

L'esame è al PC, con **CodeRunner**: lo stesso sistema degli esercizi «Lab03-Es…». Il codice viene compilato con `-Wall -Werror` e le stampe confrontate con quelle attese. Da questo laboratorio servono:

1. **le condizioni composte**: «tra», «entrambi», «almeno uno», «nessuno», scritte con `&&`, `||`, `!` e senza confronti a catena;
2. **le catene di `else if`**, perché `switch` e `break` sono vietati;
3. **le graffe sempre**: un `if` o un `else` che controlla meno di quello che credi non dà errori, dà stampe sbagliate;
4. **la lettura sicura**: controllare il valore restituito da `scanf` quando l'input può essere sbagliato;
5. **i casi limite**: numeri uguali, negativi, lo zero, i valori fuori dall'intervallo.

> [!METODO] Prima di consegnare un esercizio con le scelte
> 1. Compila con `gcc -Wall -Werror`: gli avvisi su indentazione e confronti a catena sono errori.
> 2. Fai una lista dei casi: uno per ramo della catena, più i valori al confine (18 per «almeno 18», 0 per «positivo»).
> 3. Prova ogni caso e confronta la stampa, compresi spazi e maiuscole.

## Quiz

```quiz
D: Che valore stampa `printf("%d", 4 > 3 > 2);`?
+ 0, e gcc con -Wall avvisa del confronto a catena
- 1
- 2
- non compila nemmeno con -Wall
- un errore a runtime
= Si calcola `(4 > 3) > 2`, cioè `1 > 2`, falso. La risposta più insidiosa è 1, il valore in matematica. Con `-Wall` è solo un avviso; con `-Werror` diventerebbe un errore.

D: Come si scrive in C «5 sta tra 3 e 7»?
+ `3 < 5 && 5 < 7`
- `3 < 5 < 7`
- `3 < 5 || 5 < 7`
- `(3 < 5) < 7`
- `3 < 5 & < 7`
= Servono due confronti uniti da «e». La risposta più insidiosa è `3 < 5 < 7`: qui dà 1 per caso, perché `1 < 7`, ma con `3 < 9 < 7` darebbe 1 anche se 9 non sta tra 3 e 7.

D: Con il voto 15, che cosa stampa il programma con `if (voto >= 18);` seguito da `printf("Esame passato.\n");`?
+ `Esame passato.`
- niente
- un errore di compilazione, sempre
- `Esame non passato.`
- dipende dall'indentazione
= Il `;` è un'istruzione vuota: l'`if` controlla quella, e la `printf` viene eseguita comunque. La risposta più insidiosa è «dipende dall'indentazione»: l'indentazione non cambia il programma, cambia solo l'avviso di gcc.

D: In `if (x) A; else B; C;` senza graffe, quando viene eseguita `C`?
+ Sempre
- Solo se `x` è falso
- Solo se `x` è vero
- Mai
- Dipende dall'indentazione
= Senza graffe l'`else` controlla solo `B`. La risposta più insidiosa è «solo se `x` è falso»: è quello che suggerisce l'indentazione delle slide, ma il C la ignora.

D: Quale espressione è equivalente a `!(a && b)`?
+ `!a || !b`
- `!a && !b`
- `a || b`
- `!a && b`
- `a && !b`
= È una legge di De Morgan: negando un «e» si ottiene un «o» delle negazioni. La risposta più insidiosa è `!a && !b`, che è la negazione di `a || b`.

D: Il massimo di quattro interi si cerca con `int max = 0;` e tre `if`. Con quale input il programma sbaglia?
+ `-7 -3 -9 -4`
- `3 -2 9 4`
- `0 0 0 0`
- `9 9 9 9`
- `1 2 3 4`
= Con tutti i numeri negativi il massimo provvisorio 0 non viene mai superato, e il programma stampa 0, che non è tra i numeri. La risposta più insidiosa è `0 0 0 0`: lì 0 è giusto per caso.

D: Che valore ha `sqrt(abs(-2.5))` in C, con `<stdlib.h>` e `<math.h>`?
+ circa 1,414, perché `abs` converte −2,5 nell'intero −2
- circa 1,581
- 2,5
- non compila con -Wall
- −1,581
= `abs` lavora sugli interi: taglia −2,5 a −2 e restituisce 2. Per i `double` serve `fabs`, che darebbe $\sqrt{2{,}5} \approx 1{,}581$. Con `-Wall` gcc non avvisa: l'avviso c'è solo con `-Wextra`.

D: `scanf("%d %d", &a, &b)` con l'input `7 ciao`. Che cosa restituisce?
N: 1
= Ha letto un solo intero, il 7: `ciao` non è un numero. Per questo nel gioco si controlla `2 != scanf(...)`.
```

## Esercizi

::: esercizio base Riscaldamento: valori
Calcola a mano: (a) `5 > 2 && !(3 == 3)`; (b) `0 || 7`; (c) `!(1 < 2 || 2 < 1)`; (d) `10 % 3 == 1 && 10 / 3 == 3`.
::: soluzione
(a) 0: `!(3 == 3)` è falso. (b) 1: in C ogni valore diverso da 0 è vero. (c) 0: dentro c'è un «o» vero. (d) 1: tutti e due i confronti sono veri.
:::

::: esercizio base Riscaldamento: tradurre in condizioni
Scrivi la condizione in C: (a) `x` è pari e positivo; (b) `x` è fuori dall'intervallo da 10 a 20; (c) `x` e `y` hanno lo stesso segno, entrambi diversi da 0; (d) almeno uno tra `a`, `b`, `c` è zero.
::: soluzione
(a) `x % 2 == 0 && x > 0`. (b) `x < 10 || x > 20`, la negazione di `x >= 10 && x <= 20` con De Morgan. (c) `(x > 0 && y > 0) || (x < 0 && y < 0)`, oppure `x * y > 0`, che però può andare in overflow con numeri grandi. (d) `a == 0 || b == 0 || c == 0`.
:::

::: esercizio medio L'anno bisestile
Leggi un anno e stampa `bisestile` o `non bisestile`. Un anno è bisestile se è divisibile per 4 ma non per 100, oppure se è divisibile per 400.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int anno;
    scanf("%d", &anno);
    if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
        printf("bisestile\n");
    } else {
        printf("non bisestile\n");
    }
}
```
2024 è bisestile, 1900 no (divisibile per 100 ma non per 400), 2000 sì. Una condizione sola, con le parentesi che separano i due casi.
:::

::: esercizio medio Il triangolo
Leggi tre lunghezze intere positive e stampa `equilatero`, `isoscele`, `scaleno`, oppure `non e' un triangolo` se una lunghezza è maggiore o uguale alla somma delle altre due.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    if (a >= b + c || b >= a + c || c >= a + b) {
        printf("non e' un triangolo\n");
    } else if (a == b && b == c) {
        printf("equilatero\n");
    } else if (a == b || b == c || a == c) {
        printf("isoscele\n");
    } else {
        printf("scaleno\n");
    }
}
```
L'ordine dei rami conta: un triangolo equilatero è anche isoscele, quindi il controllo «equilatero» va prima. Con `3 3 3`, `3 3 5`, `3 4 5` e `1 2 3` stampa equilatero, isoscele, scaleno e non è un triangolo.
:::

::: esercizio esame Il voto in lettere, senza switch
Leggi un voto da 0 a 30 e stampa `insufficiente` sotto 18, `sufficiente` da 18 a 23, `buono` da 24 a 27, `ottimo` da 28 a 30, `voto non valido` fuori da 0–30. Niente `switch`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int voto;
    if (1 != scanf("%d", &voto) || voto < 0 || voto > 30) {
        printf("voto non valido\n");
    } else if (voto < 18) {
        printf("insufficiente\n");
    } else if (voto <= 23) {
        printf("sufficiente\n");
    } else if (voto <= 27) {
        printf("buono\n");
    } else {
        printf("ottimo\n");
    }
}
```
Il primo ramo controlla anche la lettura: se `scanf` non legge, l'`||` si ferma lì e `voto` non viene usato. Dopo, ogni ramo può controllare solo il limite superiore, perché quelli prima hanno già escluso i voti più bassi. Da provare con 17, 18, 23, 24, 27, 28, −1 e 31.
:::

## Domande di ripasso

::: domanda Perché in C `3 < 5 < 7` non controlla che 5 stia tra 3 e 7?
Perché i confronti si calcolano da sinistra, due alla volta: `(3 < 5) < 7` diventa `1 < 7`. Si scrive `3 < 5 && 5 < 7`.
:::

::: domanda Come funziona una catena di `if`, `else if`, `else`?
Le condizioni si controllano in ordine; si esegue il blocco della prima vera e si salta il resto. Se nessuna è vera, si esegue l'`else`.
:::

::: domanda Che cosa fa un `;` subito dopo `if (...)`?
È un'istruzione vuota: l'`if` controlla quella, e l'istruzione dopo viene eseguita sempre.
:::

::: domanda Che cosa controlla CodeRunner?
Che il programma compili con `-Wall -Werror` e che, per ogni input di prova, le stampe coincidano carattere per carattere con quelle attese.
:::

::: domanda Come si trova il massimo di quattro numeri?
Con una variabile che parte dal primo numero e viene aggiornata da un `if` separato per ogni altro numero più grande.
:::

## Glossario

```glossario
Valore di verità in C | Un confronto vale 1 se è vero e 0 se è falso; ogni valore diverso da 0 conta come vero.
Leggi di De Morgan | !(a && b) è come !a || !b; !(a || b) è come !a && !b.
Catena else if | Sequenza di condizioni controllate in ordine: si esegue solo il ramo della prima vera.
Istruzione vuota | Un ; da solo. Dopo un if fa sì che l'if non controlli niente.
CodeRunner | Il sistema di Moodle che compila con -Wall -Werror, esegue con input di prova e confronta le stampe.
Massimo provvisorio | Variabile che contiene il più grande valore visto finora; parte dal primo valore.
Discriminante | δ = b² − 4ac: decide quante radici reali ha un'equazione di secondo grado.
```

## Checklist

```checklist
- So calcolare a mano il valore di un'espressione con &&, || e !.
- So perché 3 < 5 < 7 è sbagliato e come si scrive giusto.
- So applicare De Morgan per negare una condizione.
- So scrivere una catena di else if che copre tutti i casi.
- So riconoscere il ; dopo l'if e l'else senza graffe.
- So come CodeRunner valuta un esercizio.
- So trovare il massimo di più numeri senza partire da 0.
- So risolvere l'equazione di secondo grado con tutti i casi, usando fabs e non abs.
- So controllare il valore restituito da scanf prima di usare i valori letti.
```

## Fonti

- Slide «Condizioni booleane» (Lezione nº 3 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27: espressioni booleane (slide 2–3), booleani.c e De Morgan (slide 4), esercizi_booleani.c (slide 5), saluti (slide 6), CodeRunner (slide 7–10), errori (slide 11–15), Lab03-Es2 Emersione del Massimo (slide 16), selezione operazioni (slide 17), equazioni di secondo grado (slide 18–20), Lab03-Es3 Sasso-carta-forbici-lucertola-Spock (slide 21–22).
- I testi degli esercizi su CodeRunner (Lab03-Es1, Es2, Es3) e il codice di partenza (`booleani.c`, `esercizi_booleani.c`) sono sul Moodle del laboratorio: non li ho visti, le soluzioni qui sono mie.
- Lezioni [03C](03C_booleani.html) e [03D](03D_decisioni.html) di Amparore; regole d'esame dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Tutti i programmi li ho compilati con gcc 16.1 su Windows 11 a 64 bit ed eseguiti; gli avvisi e le stampe citati sono quelli veri, compreso il caso di `abs` con un `double`. Le soluzioni, i quiz e gli esercizi sono di questi appunti.
