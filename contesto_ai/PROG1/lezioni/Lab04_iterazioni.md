---
corso: PROG1
lezione: Lab04
titolo: "Laboratorio 04: iterazioni"
data: 2026-10-26
docenti: Elisa Marengo (turno B2) e Valerio Basile (turno B1); teoria Elvio Amparore
sopratitolo: Canale B · Laboratorio 04 · Programmazione I
descrizione: >-
  Appunti del quarto laboratorio di Programmazione I (canale B, Lab04): quando usare for e quando while, i sei cicli
  for della slide 4, la somma dei pari, numeri da 0 a n e fattoriale, sequenze terminate da 0 con il valore restituito
  da scanf, la media di una sequenza e l'input da file, divisori, triangolo di Floyd, il quadrato di caratteri, «per
  ogni» ed «esiste» su una sequenza, Fibonacci con la variabile temporanea, il gioco dell'indovina il numero e la
  strategia per dimezzamento, con tutti i programmi provati.
lede: >-
  Il quarto laboratorio mette in pratica la lezione 04A sui cicli: si sceglie il ciclo adatto, si leggono sequenze di
  lunghezza sconosciuta, si annidano due cicli per disegnare figure e si scrive un programma che indovina un numero
  dimezzando ogni volta l'intervallo. Qui trovi ogni esercizio risolto e provato, e due sviste delle slide.
materiale: slide
scheda:
  Slide: Lab04 «Iterazioni», laboratorio canale B · 25 pagine, esercizi anche su CodeRunner
  Laboratorio: Elisa Marengo (turno B2, lun 26/10) e Valerio Basile (turno B1, mar 27/10) · 14–17 · laboratorio Turing
  Tempo di studio: 2–3 ore, davanti a un computer
fonte: >-
  Slide «Iterazioni» (Lezione nº 4 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27; lezione
  04A di Amparore; pre-esame 2023/24 dalla raccolta di esercizi d'esame
appunti_html: appunti/PROG1/Lab04_iterazioni.html
genera_html: true
---

## In breve

- Si usa il **`for`** quando il numero di giri è noto prima di partire, il **`while`** quando lo decide quello che succede durante i giri, per esempio un numero letto da tastiera.
- Una **sequenza terminata da 0** si legge con `while (1 == scanf("%d", &x) && x != 0)`: `scanf` restituisce quante variabili ha letto, e l'`&&` non guarda `x` se la lettura è fallita.
- Per una **media** servono un accumulatore e un contatore; prima di dividere si controlla che il contatore non sia 0.
- Con `programma < file.txt` il programma legge dal file invece che dalla tastiera. Funziona su Linux, macOS e nel Prompt dei comandi di Windows, ma non in PowerShell.
- Le figure (il triangolo di Floyd, il quadrato) si disegnano con **due cicli annidati**: quello esterno per le righe, quelli interni per i caratteri di una riga.
- **«Per ogni»** su una sequenza: una variabile che parte da `true` e diventa `false` al primo controesempio. **«Esiste»**: parte da `false` e diventa `true` al primo esempio.
- Nella successione di Fibonacci l'aggiornamento di due variabili insieme richiede una **variabile temporanea**.
- Per indovinare un numero tra 0 e 99 provando sempre il **punto medio** bastano al massimo 7 tentativi; provandoli tutti in fila ne possono servire 100.

> [!CANALI]
> **Canale B.** È il quarto laboratorio, al laboratorio Turing, dalle 14 alle 17: turno **B2** lunedì 26/10 con **Elisa Marengo**, turno **B1** martedì 27/10 con **Valerio Basile**. Gli esercizi riprendono la lezione [04A](04A_iterazioni.html) sui cicli; l'ultimo esempio usa gli array della [05A](05A_array_stringhe.html). Gli appunti del laboratorio 03 non ci sono ancora: non ho le slide.
>
> **Canali A e C.** Secondo la scheda del corso i laboratori hanno la stessa sequenza nei tre canali e gli stessi esercizi su CodeRunner. Le slide 2026/27 dei canali A e C per questo laboratorio non le ho viste: controlla il giorno del tuo turno su Moodle.
>
> I tre esercizi su CodeRunner (Lab04-Es1, Es2 ed Es3) e il codice di partenza (la cartella `input_media_seq` e `fai_indovinare_numero.c`) sono su Moodle e non li ho: qui ci sono soluzioni mie degli stessi problemi, da adattare al testo esatto. Tutti i programmi li ho compilati con `gcc -Wall -Werror` (gcc 16.1, Windows 11 a 64 bit) ed eseguiti.

## for o while (slide 2–5)

Le slide danno una regola pratica per scegliere il ciclo. Il **`for`** va bene quando si sa già quanti giri fare: «stampa i numeri da 1 a 100», «scorri un array di `n` elementi». La variabile di controllo nasce nel `for`, cambia solo nell'aggiornamento e il corpo la usa senza modificarla:

```c
for (int i = 0; i < n; i++) {
    // codice che usa ma non cambia i
}
```

Il **`while`** va bene quando la fine si scopre solo durante i giri: «leggi numeri finché non arriva lo 0». Spesso la condizione è una variabile booleana che il corpo mette a `false` quando è ora di smettere, oppure un indice che avanza di passi non fissi.

La slide 4 chiede come cambia la variabile `i` in sei cicli. Le risposte della slide 5, con i valori che ho fatto stampare:

| Ciclo | Valori di `i` | Giri |
|---|---|---|
| `for (int i = 1; i <= 100; ++i)` | 1, 2, …, 100 | 100 |
| `for (int i = 100; i >= 1; --i)` | 100, 99, …, 1 | 100 |
| `for (int i = 7; i <= 77; i += 7)` | 7, 14, …, 77 | 11 |
| `for (int i = 20; i >= 2; i -= 7)` | 20, 13, 6 | 3 |
| `for (size_t i = 0; i < 10; ++i)` | 0, 1, …, 9: l'intervallo $[0, 10)$ | 10 |
| `for (ptrdiff_t i = 100; i >= 0; --i)` | 100, 99, …, 0 | 101 |

> [!TRAPPOLA] Il quarto ciclo non arriva a 2
> La slide 5 dice che `i` «varia da 20 a 2 inclusi». Non è così: dopo 6 il valore successivo è $-1$, che non soddisfa `i >= 2`. Il 2 compare nella condizione, ma `i` ci arriva solo se la distanza tra 20 e 2, cioè 18, è un multiplo del passo. Qui il passo è 7. Nel terzo ciclo invece 77 c'è: $77 - 7 = 70$ è un multiplo di 7.

L'ultimo ciclo conta all'indietro fino a 0 compreso e per questo usa `ptrdiff_t`, il tipo con il segno che fa coppia con `size_t` (si dichiara in `<stddef.h>` e si stampa con `%td`). Con `size_t i` la condizione `i >= 0` sarebbe sempre vera e il ciclo non finirebbe: è la trappola vista nella [05A](05A_array_stringhe.html).

::: prova Quante volte gira `for (int i = 3; i < 30; i += 5)`, e qual è l'ultimo valore di `i` dentro il ciclo?
I valori sono 3, 8, 13, 18, 23, 28: 6 giri, l'ultimo è 28. Il successivo, 33, non soddisfa `i < 30`.
:::

> [!RICORDA]
> - `for` quando il numero di giri si sa prima, `while` quando si scopre durante.
> - Il valore scritto nella condizione non è per forza raggiunto: dipende dal passo.

## La somma dei numeri pari (slide 6–7)

Il primo esempio somma i pari da 2 a 100. La versione della slide 6 scorre tutti i numeri da 0 a 100 e somma solo quelli con resto 0 nella divisione per 2; quella della slide 7 fa partire il ciclo da 2 e avanza di 2, così ogni giro trova un pari e non serve l'`if`:

```c
int sum = 0;                                  // accumulatore
for (int number = 2; number <= 100; number += 2) {
    sum += number;
}
printf("La somma è %d\n", sum);
```

Tutte e due stampano `La somma è 2550`. La seconda fa 50 giri invece di 101: quando il passo si conosce, conviene metterlo nell'aggiornamento invece di filtrare con un `if`.

> [!TRAPPOLA] Le virgolette delle slide
> Nelle slide le stringhe sono scritte con le virgolette tipografiche, “ e ”, che PowerPoint mette al posto di quelle dritte. Il C accetta solo `"`. Se copi il codice dalla slide, gcc risponde con `error: stray '\342' in program` (342 è il primo byte di “ in UTF-8) e poi con una serie di errori che non c'entrano. Si correggono riscrivendo le virgolette a mano.

::: prova Come cambia il ciclo della slide 7 per sommare i dispari da 1 a 99? Quanto viene?
`for (int number = 1; number <= 99; number += 2)`. La somma è 2500: i primi 50 dispari sommano $50^2$.
:::

> [!RICORDA]
> - Un accumulatore si inizializza prima del ciclo, a 0 per una somma.
> - Se i valori da visitare hanno un passo fisso, il passo va nell'aggiornamento del `for`.

## Primi esercizi: iterazioni_n.c (slide 8)

L'esercizio chiede tre cose su un intero positivo `n` letto con `scanf`: stampare i numeri da 0 a `n` e poi da `n` a 0, poi i dispari fino a `n`, poi il fattoriale $n! = 1 \cdot 2 \cdots n$. La domanda della slide è quale ciclo usare: il `for`, perché in tutti e tre i casi il numero di giri dipende solo da `n`, che si conosce prima di cominciare.

```c
#include <stdio.h>

int main(void) {
    int n;
    printf("Inserisci un intero positivo: ");
    scanf("%d", &n);

    // 1. da 0 a n e poi da n a 0
    for (int i = 0; i <= n; i++) {
        printf("%d ", i);
    }
    printf("\n");
    for (int i = n; i >= 0; i--) {
        printf("%d ", i);
    }
    printf("\n");

    // 2. i dispari da 0 a n
    for (int i = 1; i <= n; i += 2) {
        printf("%d ", i);
    }
    printf("\n");

    // 3. il fattoriale di n
    unsigned long long fatt = 1;
    for (int i = 2; i <= n; i++) {
        fatt = fatt * i;
    }
    printf("%d! = %llu\n", n, fatt);
}
```

Con l'input 6 stampa `0 1 2 3 4 5 6`, poi `6 5 4 3 2 1 0`, poi `1 3 5` e infine `6! = 720`. Il fattoriale parte da 1, non da 0: è un accumulatore di prodotti, e moltiplicare per 0 darebbe sempre 0. Con $n = 0$ o $n = 1$ il ciclo non gira e il risultato resta 1, che è il valore giusto di $0!$ e $1!$.

> [!TRAPPOLA] Il fattoriale cresce in fretta
> Con un `int` il risultato è giusto solo fino a $12! = 479\,001\,600$: per 13 il mio programma stampa 1932053504, mentre $13! = 6\,227\,020\,800$ supera il massimo di un `int`, 2 147 483 647. Con `unsigned long long` (specificatore `%llu`) si arriva a $20! = 2\,432\,902\,008\,176\,640\,000$; con 21 il risultato ricomincia da capo e il programma stampa un numero sbagliato senza nessun avviso.

::: prova Che cosa stampa la seconda parte con l'input 1? E con l'input 0?
Con 1 stampa `1`: il ciclo parte da 1 e $1 \le 1$. Con 0 non stampa niente, solo l'a capo: la condizione $1 \le 0$ è falsa subito e il ciclo fa zero giri.
:::

> [!RICORDA]
> - Un prodotto si accumula partendo da 1.
> - Prima di usare un tipo, chiediti fino a dove arriva il risultato.

## Sequenze terminate da 0 (slide 9–11)

Ora il programma deve sommare dei numeri letti da tastiera, e non sa quanti sono: la sequenza finisce quando arriva uno 0, che fa da **terminatore** e non fa parte dei dati. Il numero di giri si scopre solo leggendo, quindi serve un `while`. La prima versione della slide 10 usa una variabile booleana:

```c
int sum = 0;
bool continua = true;
while (continua) {
    int number;
    scanf("%d", &number);           // legge il prossimo numero
    if (number == 0)
        continua = false;           // sequenza terminata
    else
        sum += number;
}
printf("La somma è %d\n", sum);
```

La seconda versione, della slide 11, mette la lettura direttamente nella condizione:

```c
int sum = 0;
int number;
while (1 == scanf("%d", &number) && number != 0) {
    sum += number;
}
printf("La somma è %d\n", sum);
```

Funziona per due motivi. Il primo: `scanf` **restituisce un numero**, quante variabili è riuscita a leggere. Con `"%d"` restituisce 1 se ha letto un intero, e un altro valore se l'input non è un numero o è finito. Il secondo: l'`&&` valuta la parte destra solo se la sinistra è vera. Se la lettura fallisce, `number != 0` non viene nemmeno guardato, e meno male: `number` non conterrebbe niente di sensato. È la valutazione cortocircuitata vista nella [03C](03C_booleani.html).

```grafico
titolo: Il ciclo della slide 11. La condizione fa due cose in ordine, da sinistra: prima legge un numero, poi lo confronta con 0. Se la lettura fallisce si esce subito dal ramo in basso a destra, senza guardare il numero.
x: 0 10
y: 0.4 10
assi: no
griglia: no
poligono: 3.4 9 6.6 9 6.6 9.7 3.4 9.7 | rosa
testo: 5 9.35 | rosa | "sum = 0"
freccia: 5 9 5 8.35 | grigio
poligono: 5 8.3 7.4 7.5 5 6.7 2.6 7.5 | verde
testo: 5 7.5 | verde | "scanf letto 1?"
freccia: 5 6.7 5 5.95 | grigio
testo: 5.6 6.3 | verde | "sì"
poligono: 5 5.9 7.4 5.1 5 4.3 2.6 5.1 | verde
testo: 5 5.1 | verde | "number != 0 ?"
freccia: 5 4.3 5 3.55 | grigio
testo: 5.6 3.9 | verde | "sì"
poligono: 3.4 2.8 6.6 2.8 6.6 3.5 3.4 3.5 | ambra
testo: 5 3.15 | ambra | "sum += number"
segmento: 3.4 3.15 1.3 3.15 | grigio
segmento: 1.3 3.15 1.3 7.5 | grigio
freccia: 1.3 7.5 2.55 7.5 | grigio
segmento: 7.4 7.5 8.8 7.5 | rosa
testo: 8.1 7.9 | rosa | "no"
segmento: 7.4 5.1 8.8 5.1 | rosa
testo: 8.1 5.5 | rosa | "no"
segmento: 8.8 7.5 8.8 1.15 | rosa
freccia: 8.8 1.15 6.65 1.15 | rosa
poligono: 3.4 0.8 6.6 0.8 6.6 1.5 3.4 1.5 | blu
testo: 5 1.15 | blu | "stampa sum"
```

::: prova Con l'input `5 7 abc 3 0`, che cosa stampa la versione della slide 11?
`La somma è 12`. Letti 5 e 7, la terza `scanf` trova `abc`, non legge niente e restituisce 0: il ciclo finisce senza arrivare né al 3 né allo 0.
:::

> [!RICORDA]
> - Quando la fine si scopre leggendo, serve un `while`.
> - `scanf` restituisce quante variabili ha letto: `1 == scanf("%d", &x)` controlla che la lettura sia riuscita.
> - L'`&&` valuta la destra solo se la sinistra è vera.

## La media di una sequenza: media_seq.c (slide 12–13)

Stessa sequenza terminata da 0, ma ora si vuole la **media**, con la virgola. Con l'input `4 8 10 2 0` deve uscire 6. Come suggerisce la slide servono due variabili: un accumulatore per la somma e un contatore dei numeri letti. La media si calcola dopo il ciclo.

```c
#include <stdio.h>

int main(void) {
    int somma = 0;      // accumulatore
    int quanti = 0;     // contatore
    int numero;
    while (1 == scanf("%d", &numero) && numero != 0) {
        somma += numero;
        quanti++;
    }
    if (quanti > 0) {
        printf("%f\n", (double)somma / quanti);
    } else {
        printf("Sequenza vuota\n");
    }
}
```

Con `4 8 10 2 0` stampa `6.000000`, con `1 2 0` stampa `1.500000`. Due dettagli contano. Il **cast** `(double)somma` rende reale la divisione: senza, `3 / 2` farebbe 1, come nel [Lab02](Lab02_operatori_tipi.html). Il **controllo su `quanti`** serve perché se la sequenza è vuota, cioè il primo numero è già 0, la divisione sarebbe per zero: sul mio Windows la stampa è `-nan(ind)`, su Linux `-nan`, cioè «non è un numero».

### Leggere l'input da un file

La slide 13 propone di non digitare ogni volta la sequenza: il codice di partenza ha una cartella `input_media_seq` con un file per sequenza. Il simbolo `<` sulla riga di comando collega il file al posto della tastiera, e `scanf` legge dal file:

```
./media_seq < input01.txt          (Linux e macOS)
media_seq.exe < input01.txt        (Windows, nel Prompt dei comandi)
```

> [!TRAPPOLA] In PowerShell il < non funziona
> Il terminale di Windows apre spesso PowerShell, non il Prompt dei comandi. Lì `.\media_seq.exe < input01.txt` dà l'errore `The '<' operator is reserved for future use` (in italiano: «L'operatore '<' è riservato per un utilizzo futuro»). In PowerShell si scrive `Get-Content input01.txt | .\media_seq.exe`, che passa il contenuto del file al programma; oppure si apre il Prompt dei comandi con `cmd`. Al laboratorio Turing, su Linux, il `<` funziona.

::: prova Che cosa stampa il programma se il file contiene solo `0`? E se contiene `7` senza lo 0 finale?
Con `0` stampa `Sequenza vuota`. Con `7` stampa `7.000000`: dopo il 7 il file finisce, la seconda `scanf` non legge niente e il ciclo si chiude anche senza lo 0.
:::

> [!RICORDA]
> - Media: accumulatore e contatore nel ciclo, divisione dopo, con un cast a `double`.
> - Prima di dividere per un contatore, controlla che non sia 0.
> - `programma < file` legge dal file; in PowerShell si usa `Get-Content file | programma`.

## Divisori interi (slide 14, Lab04-Es1 su CodeRunner)

Il primo esercizio su CodeRunner si chiama «Divisori Interi» e chiede di completare un programma finché passa tutti i test. Il testo esatto è su Moodle e non l'ho. Il problema di fondo è trovare i divisori di un intero $n$: i numeri $d$ tra 1 e $n$ per cui la divisione $n / d$ ha resto 0. I candidati sono un numero fisso, da 1 a $n$, quindi la risposta alla domanda della slide è il **`for`**.

```c
int n;
scanf("%d", &n);                 // si assume n >= 1
int quanti = 0;
for (int d = 1; d <= n; d++) {
    if (n % d == 0) {            // d divide n
        printf("%d ", d);
        quanti++;
    }
}
printf("\n%d ha %d divisori\n", n, quanti);
```

Con 12 stampa `1 2 3 4 6 12` e `12 ha 6 divisori`. Un numero maggiore di 1 è **primo** se ha esattamente due divisori, 1 e sé stesso: basta controllare `quanti == 2`.

::: prova Quanti giri fa il ciclo con $n = 100$, e quanti divisori trova?
Fa 100 giri e trova 9 divisori: 1, 2, 4, 5, 10, 20, 25, 50, 100.
:::

> [!RICORDA]
> - «$d$ divide $n$» in C si scrive `n % d == 0`.
> - Se i candidati sono un intervallo noto, il ciclo è un `for`.

## Cicli annidati: Floyd e il quadrato (slide 15–16)

Per stampare una figura si usano due cicli uno dentro l'altro: quello **esterno** fa un giro per riga, quello **interno** stampa i caratteri della riga. A ogni giro esterno il ciclo interno riparte da capo.

### Il triangolo di Floyd

Il triangolo di Floyd scrive i numeri naturali in fila, uno nella prima riga, due nella seconda, tre nella terza. Con $n = 5$:

```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

La riga numero `riga` contiene `riga` numeri, e il numero da scrivere non dipende dalla posizione nella riga: continua dalla riga prima. Per questo si tiene un contatore `prossimo`, dichiarato **fuori** da tutti e due i cicli.

```c
int n;
scanf("%d", &n);
int prossimo = 1;                       // il numero da scrivere
for (int riga = 1; riga <= n; riga++) {
    for (int k = 1; k <= riga; k++) {   // la riga r ha r numeri
        printf("%d ", prossimo);
        prossimo++;
    }
    printf("\n");
}
```

Se `prossimo` fosse dichiarato dentro il ciclo esterno, ripartirebbe da 1 a ogni riga e il programma stamperebbe `1`, `1 2`, `1 2 3`.

### Il quadrato

Il quadrato di lato $n$ ha nella riga $i$ (contando da 0) prima $i$ asterischi, poi una barra rovesciata sulla diagonale, poi $n - 1 - i$ volte i due punti. Con $n = 6$:

```
\:::::
*\::::
**\:::
***\::
****\:
*****\
```

Ogni riga ha tre pezzi, quindi dentro il ciclo esterno ci sono due cicli interni e una `printf` in mezzo:

```c
for (int i = 0; i < n; i++) {            // una riga per giro
    for (int j = 0; j < i; j++) {        // i asterischi
        printf("*");
    }
    printf("\\");                        // la diagonale
    for (int j = i + 1; j < n; j++) {    // n - 1 - i due punti
        printf(":");
    }
    printf("\n");
}
```

> [!TRAPPOLA] La barra rovesciata si scrive doppia
> Nelle stringhe del C la barra `\` comincia una sequenza speciale, come `\n`. Per stampare una barra vera si scrive `"\\"`. Con `printf("\")` la barra si mangia la virgoletta di chiusura e gcc risponde `missing terminating " character`.

::: prova Nel triangolo di Floyd con $n = 10$, qual è l'ultimo numero stampato?
55: le righe contengono $1 + 2 + \dots + 10 = 55$ numeri, e si parte da 1.
:::

> [!RICORDA]
> - Ciclo esterno per le righe, cicli interni per i caratteri di una riga, `\n` alla fine di ogni riga.
> - Un contatore che deve continuare da una riga all'altra si dichiara fuori dai cicli.

## «Per ogni» ed «esiste» su una sequenza (slide 17–20)

Molte domande su una sequenza hanno la forma «tutti i numeri soddisfano una condizione?» oppure «c'è almeno un numero che la soddisfa?». Sono i due quantificatori della logica, ∀ ed ∃, visti nella [lezione 09 di Fondamenti](../FDA/09_quantificatori.html). In C si risponde con una variabile booleana che accumula la risposta, come un accumulatore accumula una somma.

Per **«per ogni»** la variabile parte da `true`: finché non si trova un controesempio, la risposta è sì. Al primo numero che non va bene diventa `false`, e non torna più indietro:

```c
bool tutti = true;
while (1 == scanf("%d", &n) && n != 0) {
    if (!(n > 0))                // un controesempio
        tutti = false;
}
```

Per **«esiste»** è il contrario: parte da `false`, e al primo numero che va bene diventa `true`:

```c
bool esiste = false;
while (1 == scanf("%d", &n) && n != 0) {
    if (n % 2 == 0)              // un esempio
        esiste = true;
}
```

Su una sequenza vuota, cioè con lo 0 subito, «per ogni» risponde sì e «esiste» risponde no. È la stessa regola della logica: un «per ogni» su un insieme vuoto è vero, un «esiste» è falso.

> [!TRAPPOLA] Non rimettere mai la variabile al valore iniziale
> Se scrivi `tutti = (n > 0);` invece di `if (!(n > 0)) tutti = false;`, la variabile alla fine dice solo se l'**ultimo** numero va bene. Con `-3 5 0` risponderebbe «tutti positivi»: il 5 ha cancellato il controesempio.

### Fermarsi presto (slide 19)

Quando i dati sono già in memoria, per esempio in un array, non serve guardarli tutti: «per ogni» si può fermare al primo controesempio, «esiste» al primo esempio. Basta mettere la variabile booleana nella condizione del ciclo:

```c
int v[] = {4, 7, -2, 9, 5};
size_t n = 5;
bool tutti = true;
size_t i = 0;
while (i < n && tutti) {
    if (!(v[i] > 0))
        tutti = false;
    i++;
}
```

Il ciclo guarda 4, 7 e −2, poi si ferma: `tutti` è `false` e `i` vale 3. È lo schema che all'esame sostituisce il `break`, che non si può usare. Le slide lo riprendono in un prossimo laboratorio.

### Lab04-Es2 su CodeRunner

Il secondo esercizio su Moodle, «Condizioni su sequenza», chiede di scrivere correttamente diverse condizioni «esiste» e «per ogni» su una sequenza. Il testo non l'ho; ecco tre condizioni dello stesso tipo in un solo ciclo, compresa una che confronta ogni numero con il precedente:

```c
bool tutti_positivi = true;      // per ogni: parte vero
bool esiste_pari = false;        // esiste: parte falso
bool crescente = true;           // ogni numero maggiore del precedente
bool primo = true;               // stiamo leggendo il primo numero?
int precedente = 0;
int n;
while (1 == scanf("%d", &n) && n != 0) {
    if (!(n > 0))
        tutti_positivi = false;
    if (n % 2 == 0)
        esiste_pari = true;
    if (!primo && !(n > precedente))
        crescente = false;
    precedente = n;
    primo = false;
}
```

Con `3 5 8 11 0` le tre risposte sono sì; con `3 -1 0` sono tutte e tre no. La variabile `primo` serve perché il primo numero non ha un precedente con cui confrontarsi.

::: prova Scrivi la variabile e l'`if` per «esiste un multiplo di 5 maggiore di 100».
`bool esiste = false;` prima del ciclo, e nel ciclo `if (n % 5 == 0 && n > 100) esiste = true;`.
:::

> [!RICORDA]
> - «Per ogni» parte da `true` e diventa `false` al primo controesempio; «esiste» parte da `false` e diventa `true` al primo esempio.
> - Per fermarsi presto, la variabile booleana va nella condizione del ciclo, non serve il `break`.

## Fibonacci (slide 21)

La successione di Fibonacci comincia con 0 e 1, e ogni numero dopo è la somma dei due precedenti: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Il programma tiene in due variabili gli ultimi due numeri, `n` e `m`, e a ogni giro le fa avanzare di un posto: la nuova `n` è la vecchia `m`, la nuova `m` è la somma delle vecchie.

La domanda della slide è se per questo aggiornamento serve una variabile temporanea. Sì: se scrivi prima `n = m;`, il vecchio valore di `n` è perso e la somma viene sbagliata; se scrivi prima `m = n + m;`, è perso il vecchio `m`. È lo stesso problema dello scambio di variabili della [03A](03A_scambio_variabili.html).

```c
int k;
scanf("%d", &k);                 // si assume k >= 2
int n = 0, m = 1;
printf("%d  %d", n, m);
for (int i = 3; i <= k; i++) {
    int somma = n + m;           // la variabile temporanea
    n = m;
    m = somma;
    printf("  %d", m);
}
printf("\n");
```

Con $k = 10$ stampa `0  1  1  2  3  5  8  13  21  34`. Il ciclo parte da 3 perché i primi due numeri sono già stampati.

```grafico
titolo: Un giro del ciclo, con n = 3 e m = 5. Prima si salva la somma, 8, nella temporanea; poi n prende il valore di m e m quello della temporanea. Senza la temporanea uno dei due valori vecchi andrebbe perso prima di essere usato.
x: 0 12
y: 0.2 5.4
assi: no
griglia: no
proporzioni: libere
testo: 2 5 | grigio | "prima del giro"
poligono: 0.8 3.6 3.2 3.6 3.2 4.4 0.8 4.4 | blu
testo: 2 4 | blu | "n = 3"
poligono: 0.8 2.4 3.2 2.4 3.2 3.2 0.8 3.2 | ambra
testo: 2 2.8 | ambra | "m = 5"
testo: 6 2.5 | grigio | "somma = n + m"
poligono: 4.8 1.2 7.2 1.2 7.2 2 4.8 2 | rosa
testo: 6 1.6 | rosa | "somma = 8"
testo: 10 5 | grigio | "dopo il giro"
poligono: 8.8 3.6 11.2 3.6 11.2 4.4 8.8 4.4 | blu
testo: 10 4 | blu | "n = 5"
poligono: 8.8 2.4 11.2 2.4 11.2 3.2 8.8 3.2 | ambra
testo: 10 2.8 | ambra | "m = 8"
freccia: 3.3 2.8 8.7 4 | grigio
freccia: 7.3 1.6 8.7 2.5 | rosa
testo: 6 0.5 | grigio | "n = m;   poi   m = somma;"
```

> [!APPROFONDIMENTO] Si può fare senza temporanea
> Con gli interi esiste un trucco: `m = n + m; n = m - n;`. Dopo la prima istruzione `m` contiene la somma; nella seconda, la somma meno il vecchio `n` dà il vecchio `m`. Funziona, ma è meno leggibile e va in overflow prima: all'esame conviene la temporanea.

::: prova Che cosa stampa il programma se al posto delle tre righe nel ciclo scrivi `n = m; m = n + m;`, con $k = 6$?
`0  1  2  4  8  16`: dopo `n = m` le due variabili sono uguali, e `m = n + m` raddoppia. Sono le potenze di 2, non Fibonacci.
:::

> [!RICORDA]
> - Per aggiornare due variabili che dipendono una dall'altra, salva prima il valore che verrebbe perso.

## Indovinare un numero (slide 22–25)

L'ultimo blocco è un gioco. Nella prima parte il computer sceglie un numero a caso tra 0 e 99 e tu provi a indovinarlo: a ogni tentativo il programma risponde «maggiore» o «minore». Il codice di partenza `fai_indovinare_numero.c` è su Moodle; questa è una versione mia, con `rand()` per il numero a caso:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

int main(void) {
    srand(time(NULL));                  // semina il generatore con l'ora
    int segreto = rand() % 100;         // un numero in [0, 100)
    int tentativi = 0;
    bool indovinato = false;
    while (!indovinato) {
        int t;
        printf("Tentativo: ");
        scanf("%d", &t);
        tentativi++;
        if (t < segreto)
            printf("Il numero e' maggiore di %d!\n", t);
        else if (t > segreto)
            printf("Il numero e' minore di %d!\n", t);
        else
            indovinato = true;
    }
    printf("Indovinato in %d tentativi\n", tentativi);
}
```

`rand()` restituisce un intero grande e `% 100` lo riduce a un numero da 0 a 99. `srand(time(NULL))` cambia il punto di partenza dei numeri a caso con l'ora: senza, il programma sceglierebbe lo stesso numero a ogni esecuzione. Il ciclo è un `while`, perché non si sa quanti tentativi serviranno.

### Due strategie

La slide 22 chiede che strategia usa una persona per indovinare. Le slide 23 e 24 ne confrontano due, con il numero segreto 62. La prima prova i numeri in fila, 0, 1, 2, …: a ogni risposta «maggiore» l'intervallo possibile perde un solo numero, e nel caso peggiore, con il 99, servono 100 tentativi. La seconda prova sempre il **punto medio** dell'intervallo possibile $[basso, alto)$: a ogni risposta l'intervallo si dimezza.

> [!TRAPPOLA] Un conto sbagliato nella slide 24
> La slide scrive «tentativo: 62 = (51+75) / 2». Ma $51 + 75 = 126$ e $126 / 2 = 63$. Con il segreto 62 il terzo tentativo è 63, la risposta è «minore», e servono altri tre tentativi: 57, 60, 62. In tutto 6, non 3. L'ho controllato con il programma qui sotto.

```grafico
titolo: La ricerca per dimezzamento del numero 62. Ogni barra è l'intervallo ancora possibile, il punto è il tentativo. Dopo ogni risposta l'intervallo si riduce a circa la metà, e al sesto tentativo resta solo il 62.
x: -4 104
y: 0 8
assi: no
griglia: no
proporzioni: libere
segmento: 0 7 100 7 | blu
punto: 50 7 | rosa
testo: -2 7 | grigio | "1"
segmento: 51 6 100 6 | blu
punto: 75 6 | rosa
testo: -2 6 | grigio | "2"
segmento: 51 5 75 5 | blu
punto: 63 5 | rosa
testo: -2 5 | grigio | "3"
segmento: 51 4 63 4 | blu
punto: 57 4 | rosa
testo: -2 4 | grigio | "4"
segmento: 58 3 63 3 | blu
punto: 60 3 | rosa
testo: -2 3 | grigio | "5"
segmento: 61 2 63 2 | blu
punto: 62 2 | verde
testo: -2 2 | grigio | "6"
testo: 0 1 | grigio | "0"
testo: 50 1 | grigio | "50"
testo: 100 1 | grigio | "100"
```

### Indovina tu il numero (Lab04-Es3 su CodeRunner)

L'esercizio extra rovescia il gioco: è il programma che deve indovinare, nel numero massimo di tentativi concessi. Il testo e i test sono su Moodle; questa versione mia prende il numero segreto da input, così si possono provare tutti i casi:

```c
int segreto;
scanf("%d", &segreto);
int basso = 0, alto = 100;          // intervallo possibile [basso, alto)
int tentativi = 0;
bool trovato = false;
while (!trovato) {
    int t = (basso + alto) / 2;
    tentativi++;
    printf("tentativo: %d", t);
    if (t < segreto) {
        printf(" -> maggiore, [%d, %d)\n", t + 1, alto);
        basso = t + 1;
    } else if (t > segreto) {
        printf(" -> minore, [%d, %d)\n", basso, t);
        alto = t;
    } else {
        printf(" -> trovato\n");
        trovato = true;
    }
}
printf("%d tentativi\n", tentativi);
```

L'ho fatto girare su tutti i segreti da 0 a 99: non servono mai più di **7 tentativi**. Un solo numero si trova al primo, 2 al secondo, 4 al terzo, poi 8, 16, 32, e i 37 che restano al settimo. Il motivo: dopo $k$ risposte l'intervallo è diviso per 2 circa $k$ volte, e $2^7 = 128$ è la prima potenza di 2 che supera 100. Il ciclo adatto è il `while`: il numero di tentativi dipende dalle risposte.

La stessa idea, dimezzare l'intervallo, torna all'esame nella **ricorsione dicotomica**, con un intervallo $[l, r)$ diviso nel punto medio (esercizio D2 del pre-esame 2023/24 nella [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md)).

::: prova Con la ricerca per dimezzamento tra 0 e 99, quali sono i tentativi per il segreto 10?
50 (minore, $[0, 50)$), 25 (minore, $[0, 25)$), 12 (minore, $[0, 12)$), 6 (maggiore, $[7, 12)$), 9 (maggiore, $[10, 12)$), 11 (minore, $[10, 11)$), 10: sette tentativi.
:::

> [!RICORDA]
> - `rand() % 100` dà un numero da 0 a 99; `srand(time(NULL))` cambia i numeri a ogni esecuzione.
> - Dimezzando l'intervallo, con 100 numeri bastano 7 tentativi; provandoli in fila ne servono fino a 100.

## I simboli di questa lezione

| Scrittura | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `1 == scanf("%d", &x)` | «scanf ha letto un numero» | `scanf` restituisce quante variabili ha letto | condizione del ciclo di lettura |
| `%llu` | «per cento elle elle u» | specificatore di `unsigned long long` | `printf("%llu", fatt)` |
| `ptrdiff_t`, `%td` | «ptrdiff t» | intero con segno che fa coppia con `size_t` | `for (ptrdiff_t i = 100; i >= 0; --i)` |
| `"\\"` | «barra rovesciata» | stampa una sola `\` | la diagonale del quadrato |
| `rand() % 100` | «rand modulo 100» | numero a caso da 0 a 99 | il segreto del gioco |
| `programma < file` | «programma con input dal file» | `scanf` legge dal file | `./media_seq < input01.txt` |

## Verso l'esame

L'esame è al PC, con **CodeRunner**: il codice viene compilato con `-Wall -Werror` e le sue stampe confrontate con quelle attese. L'esercizio iterativo, `e1`, è una funzione con uno o due cicli, e spesso è proprio un «per ogni» con dentro un «esiste» (un esempio vero del pre-esame 2023/24 è nella [04A](04A_iterazioni.html)). Questo laboratorio allena:

1. **scegliere il ciclo**: `for` con un numero di giri noto, `while` quando la fine dipende dai dati;
2. **le sentinelle booleane**: «per ogni» da `true`, «esiste» da `false`, nella condizione del ciclo per fermarsi presto, perché `break` è vietato;
3. **i casi limite**: sequenza vuota, un solo elemento, divisione per un contatore che vale 0;
4. **i tipi**: un risultato che cresce in fretta, come il fattoriale, non sta in un `int`;
5. **il formato delle stampe**: CodeRunner confronta anche spazi e a capo, come in Fibonacci con due spazi tra i numeri.

> [!METODO] Prima di consegnare un esercizio con un ciclo
> 1. Compila con `gcc -Wall -Werror`.
> 2. Segui a mano i primi due giri e l'ultimo: valori delle variabili, condizione, stampa.
> 3. Prova i casi limite: zero giri, un giro, il valore più grande.
> 4. Se leggi una sequenza, prova anche la sequenza vuota e una senza il terminatore.

## Quiz

```quiz
D: Quanti giri fa `for (int i = 20; i >= 2; i -= 7)`?
+ 3
- 2
- 4
- 18
- il ciclo non finisce
= I valori sono 20, 13 e 6; il successivo, −1, non soddisfa `i >= 2`. La risposta più insidiosa è 4: si conta anche il 2, che `i` non raggiunge mai perché 18 non è un multiplo di 7.

D: Che cosa restituisce `scanf("%d", &x)` se l'input è `ciao`?
+ 0, perché non ha letto nessun intero
- 1, perché ha letto una parola
- il valore di `x`
- −1, sempre
- il numero di caratteri letti
= `scanf` restituisce quante variabili ha riempito: qui nessuna. La risposta più insidiosa è «−1, sempre»: `scanf` restituisce −1 (`EOF`) solo quando l'input è finito, non quando c'è qualcosa che non è un numero.

D: Nel ciclo `while (1 == scanf("%d", &n) && n != 0)`, perché l'ordine delle due condizioni conta?
+ Se la lettura fallisce, `n != 0` non viene valutato, e `n` non contiene un valore letto
- Perché `&&` valuta prima la parte destra
- Perché `scanf` va chiamata dopo il confronto
- Non conta: le due condizioni si possono scambiare
- Perché `n != 0` modifica `n`
= L'`&&` valuta la parte destra solo se la sinistra è vera. Scambiandole si confronterebbe `n` prima di averlo letto: al primo giro `n` non è inizializzata. La risposta più insidiosa è «non conta»: logicamente l'«e» è simmetrico, ma in C l'ordine decide che cosa viene eseguito.

D: Una variabile `tutti` deve dire se tutti i numeri letti sono positivi. Quale codice è giusto?
+ `bool tutti = true;` e nel ciclo `if (!(n > 0)) tutti = false;`
- `bool tutti = false;` e nel ciclo `if (n > 0) tutti = true;`
- `bool tutti = true;` e nel ciclo `tutti = (n > 0);`
- `bool tutti = false;` e nel ciclo `tutti = (n > 0);`
- `bool tutti = true;` e nel ciclo `if (n > 0) tutti = true;`
= «Per ogni» parte da vero e diventa falso al primo controesempio. La risposta più insidiosa è `tutti = (n > 0);`: alla fine dice solo se l'ultimo numero è positivo. La seconda risponde a «esiste un positivo».

D: Che cosa stampa il programma della media con l'input `0` se manca il controllo `quanti > 0`?
+ `-nan` o `-nan(ind)`: è una divisione 0.0 / 0, il risultato non è un numero
- `0.000000`
- il programma non compila
- `Sequenza vuota`
- un errore di compilazione per divisione per zero
= Senza il controllo si calcola `(double)0 / 0`, che con i `double` dà un valore «non numero», stampato come `-nan` o `nan`. La risposta più insidiosa è `0.000000`: sembra ragionevole, ma la media di nessun numero non esiste.

D: Nell'aggiornamento di Fibonacci, quale sequenza di istruzioni è giusta?
+ `int somma = n + m; n = m; m = somma;`
- `n = m; m = n + m;`
- `m = n + m; n = m;`
- `n = n + m; m = n;`
- `int somma = n + m; m = somma; n = m;`
= Si salva la somma, poi `n` prende il vecchio `m` e `m` la somma. La risposta più insidiosa è l'ultima: aggiorna `m` prima di copiarlo in `n`, così `n` e `m` diventano uguali.

D: Con la ricerca per dimezzamento tra 0 e 99, quanti tentativi servono al massimo?
N: 7
= Ogni risposta dimezza l'intervallo, e $2^7 = 128$ è la prima potenza di 2 più grande di 100. L'ho controllato provando tutti i 100 segreti.

D: Come si stampa una sola barra rovesciata con `printf`?
+ `printf("\\");`
- `printf("\");`
- `printf('\');`
- `printf("/");`
- `printf("%\");`
= Nelle stringhe `\` comincia una sequenza speciale, come `\n`: la barra vera si scrive `\\`. La risposta più insidiosa è `printf("\");`: la barra si mangia la virgoletta e gcc dice `missing terminating " character`.
```

## Esercizi

::: esercizio base Riscaldamento: i valori di i
Scrivi i valori che prende `i` e conta i giri: (a) `for (int i = 0; i < 12; i += 4)`; (b) `for (int i = 10; i > 0; i -= 3)`; (c) `for (int i = 1; i <= 64; i *= 2)`; (d) `for (int i = 5; i < 5; i++)`.
::: soluzione
(a) 0, 4, 8: 3 giri. (b) 10, 7, 4, 1: 4 giri. (c) 1, 2, 4, 8, 16, 32, 64: 7 giri; l'aggiornamento può essere qualsiasi assegnamento. (d) Nessun giro: $5 < 5$ è falso subito.
:::

::: esercizio base Riscaldamento: for o while
Che ciclo usi per: (a) stampare la tabellina del 7; (b) leggere voti finché non arriva un voto negativo; (c) contare le cifre di un numero dividendo per 10 finché diventa 0; (d) sommare gli elementi di un array di 20 numeri?
::: soluzione
(a) `for`: 10 giri. (b) `while`: la fine dipende dall'input. (c) `while`: il numero di cifre non si sa prima. (d) `for`: 20 giri.
:::

::: esercizio medio Il massimo di una sequenza
Leggi una sequenza di interi terminata da 0 e stampa il più grande. Se la sequenza è vuota, stampa `Sequenza vuota`.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int massimo = 0;
    bool vuota = true;
    int n;
    while (1 == scanf("%d", &n) && n != 0) {
        if (vuota || n > massimo) {
            massimo = n;
        }
        vuota = false;
    }
    if (vuota) {
        printf("Sequenza vuota\n");
    } else {
        printf("%d\n", massimo);
    }
}
```
Il massimo non si può inizializzare a 0: con `-5 -2 0` il risultato sarebbe 0, che non è nella sequenza. Per questo il primo numero letto diventa il massimo, riconosciuto con `vuota`. Con `-5 -2 0` stampa `-2`.
:::

::: esercizio medio La piramide di asterischi
Leggi $n$ e stampa una piramide di $n$ righe, centrata: la riga $i$ (da 1 a $n$) ha $n - i$ spazi e $2i - 1$ asterischi. Con $n = 3$: `  *`, ` ***`, `*****`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n - i; j++) {
            printf(" ");
        }
        for (int j = 0; j < 2 * i - 1; j++) {
            printf("*");
        }
        printf("\n");
    }
}
```
Come il quadrato: un ciclo esterno per le righe, due cicli interni per i due pezzi della riga.
:::

::: esercizio esame Primo, senza break
Leggi un intero $n \ge 2$ e stampa `primo` o `non primo`. Il ciclo deve fermarsi al primo divisore trovato, senza `break`.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int n;
    scanf("%d", &n);
    bool trovato = false;            // esiste un divisore tra 2 e n-1?
    int d = 2;
    while (d < n && !trovato) {
        if (n % d == 0) {
            trovato = true;
        }
        d++;
    }
    printf(trovato ? "non primo\n" : "primo\n");
}
```
È un «esiste» con la sentinella nella condizione: con 91 si ferma dopo aver provato 7, perché $91 = 7 \cdot 13$. Si potrebbe fermare anche a $d \cdot d \le n$: se $n$ ha un divisore, ne ha uno non più grande della sua radice.
:::

::: esercizio esame Tutte le cifre pari
Leggi un intero positivo e stampa `si` se tutte le sue cifre sono pari, `no` altrimenti. Le cifre si ottengono con `% 10` e `/ 10`.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int n;
    scanf("%d", &n);
    bool tutte_pari = true;          // per ogni cifra: parte da true
    while (n > 0 && tutte_pari) {
        int cifra = n % 10;          // l'ultima cifra
        if (cifra % 2 != 0) {
            tutte_pari = false;
        }
        n = n / 10;                  // toglie l'ultima cifra
    }
    printf(tutte_pari ? "si\n" : "no\n");
}
```
Con 2486 stampa `si`, con 2476 stampa `no` e si ferma alla cifra 7, la seconda guardata. Il ciclo è un `while`: il numero di cifre non si sa prima.
:::

## Domande di ripasso

::: domanda Quando conviene un for e quando un while?
Il `for` quando il numero di giri si conosce prima di cominciare; il `while` quando la fine si scopre durante i giri, per esempio leggendo l'input.
:::

::: domanda Che cosa restituisce scanf?
Il numero di variabili che è riuscita a leggere: 1 con `"%d"` se ha letto un intero, 0 se ha trovato altro, −1 (`EOF`) se l'input è finito.
:::

::: domanda Come si calcola la media di una sequenza terminata da 0?
Con un accumulatore e un contatore aggiornati nel ciclo; dopo il ciclo, se il contatore non è 0, si divide la somma convertita in `double` per il contatore.
:::

::: domanda Come si controlla un «per ogni» su una sequenza?
Con una variabile booleana che parte da `true` e diventa `false` al primo controesempio. Per «esiste», parte da `false` e diventa `true` al primo esempio.
:::

::: domanda Perché nell'aggiornamento di Fibonacci serve una variabile temporanea?
Perché le due variabili si aggiornano a vicenda: la prima assegnazione cancellerebbe un valore che serve ancora alla seconda.
:::

::: domanda Perché la ricerca per dimezzamento è più veloce?
Ogni tentativo scarta metà dell'intervallo invece di un solo numero: con 100 numeri bastano 7 tentativi invece di 100.
:::

## Glossario

```glossario
Terminatore | Valore speciale che segna la fine di una sequenza e non fa parte dei dati, come lo 0 delle slide.
Valore restituito da scanf | Il numero di variabili lette con successo; 1 con "%d" se è stato letto un intero.
Accumulatore | Variabile che raccoglie un risultato giro dopo giro: una somma parte da 0, un prodotto da 1.
Contatore | Variabile che conta quante volte succede qualcosa nel ciclo.
Cicli annidati | Un ciclo dentro un altro: quello interno riparte da capo a ogni giro di quello esterno.
Sentinella booleana | Variabile bool che accumula la risposta a un «per ogni» (da true) o a un «esiste» (da false).
Variabile temporanea | Variabile che conserva un valore che un assegnamento cancellerebbe.
Ricerca per dimezzamento | Strategia che prova il punto medio dell'intervallo e ne scarta metà a ogni passo.
Redirezione dell'input | Con programma < file il programma legge dal file invece che dalla tastiera.
```

## Checklist

```checklist
- So scegliere tra for e while e contare i giri di un for con un passo qualsiasi.
- So leggere una sequenza terminata da 0 con il valore restituito da scanf.
- So calcolare una media senza dividere per zero.
- So dare l'input da file con < e so che in PowerShell serve Get-Content.
- So stampare figure con due cicli annidati.
- So scrivere «per ogni» ed «esiste» con una variabile booleana, anche fermandomi presto senza break.
- So aggiornare due variabili che dipendono una dall'altra.
- So spiegare perché dimezzando l'intervallo bastano 7 tentativi su 100 numeri.
```

## Fonti

- Slide «Iterazioni» (Lezione nº 4 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27: for e while (slide 2–5), sommatoria (slide 6–7), iterazioni_n.c (slide 8), sequenze (slide 9–11), media_seq.c (slide 12–13), Lab04-Es1 Divisori Interi (slide 14), Floyd (slide 15), quadrato (slide 16), quantificazione universale ed esistenziale (slide 17–19), Lab04-Es2 Condizioni su sequenza (slide 20), Fibonacci (slide 21), indovina il numero (slide 22–25).
- I testi degli esercizi su CodeRunner e il codice di partenza (`input_media_seq`, `fai_indovinare_numero.c`) sono sul Moodle del laboratorio: non li ho visti, le soluzioni qui sono mie.
- Lezioni [04A](04A_iterazioni.html) e [05A](05A_array_stringhe.html) di Amparore; esercizi `e1` e D2 del pre-esame 2023/24 dalla [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md).
- Tutti i programmi li ho compilati con gcc 16.1 su Windows 11 a 64 bit, con `-Wall -Werror`, ed eseguiti; le stampe e gli errori citati sono quelli veri, compreso il messaggio di PowerShell sul `<`. La ricerca per dimezzamento l'ho provata su tutti i segreti da 0 a 99. Le soluzioni, i quiz e gli esercizi sono di questi appunti.
