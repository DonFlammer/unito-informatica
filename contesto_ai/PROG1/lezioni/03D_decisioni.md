---
corso: PROG1
lezione: 03D
titolo: Dal flusso sequenziale alle decisioni, if ed else
data: 2026-10-14
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 03D
descrizione: >-
  Appunti della lezione 03D di Programmazione I (canale B): sequenza, selezione e iterazione, il teorema di
  Böhm-Jacopini, i costrutti if, if-else ed else if, gli errori più comuni, lo scambio condizionato e la visibilità di
  una variabile dichiarata in un blocco, gli annidamenti inutili e gli schemi ricorrenti (massimo, controllo
  dell'input, divisione protetta, intervallo), con tutti i programmi delle slide provati, quiz ed esercizi.
lede: >-
  Con le espressioni booleane della 03C il programma valuta una condizione; con if ed else sceglie quale blocco di
  istruzioni eseguire. È la selezione, la seconda delle tre strutture della programmazione strutturata.
materiale: slide
scheda:
  Slide: 03D_decisioni («Dal flusso sequenziale alle decisioni») · 25 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 75 minuti, meglio con gcc a portata di mano
fonte: >-
  Slide «Dal flusso sequenziale alle decisioni. Introduzione al controllo di flusso nella programmazione strutturata»
  (03D_decisioni), Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/03D_decisioni.html
genera_html: true
---

## In breve

- Ogni programma si costruisce con tre strutture: **sequenza** (una istruzione dopo l'altra), **selezione** (scegliere) e **iterazione** (ripetere). Bastano per qualunque algoritmo: è il **teorema di Böhm-Jacopini** del 1966.
- **`if (condizione) { … }`** esegue il blocco solo se la condizione è vera; altrimenti lo salta.
- **`if … else`** sceglie tra due blocchi: uno se la condizione è vera, l'altro se è falsa.
- **`else if`** mette in fila più domande: si entra nel primo blocco con la condizione vera, e gli altri si saltano.
- Gli errori più comuni: `=` al posto di `==`, le graffe dimenticate, le condizioni nell'ordine sbagliato. Con `-Wall -Werror` i primi due non compilano.
- Una variabile dichiarata **dentro** un blocco esiste solo lì: alla `}` sparisce dallo stack.
- Gli schemi da sapere: il massimo di due numeri, il controllo dell'input con `scanf`, la divisione protetta, il controllo di un intervallo.

> [!CANALI]
> **Canale B.** È la seconda parte della lezione di mercoledì 14/10, dalle 9 alle 11, dopo la [03C](03C_booleani.html) sulle espressioni booleane. Lo scambio condizionato riprende la [03A](03A_scambio_variabili.html), e il disegno della memoria è quello della [02B](02B_assegnamento_memory_model.html).
>
> **Canali A e C.** Secondo l'elenco delle lezioni 2025/26 nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md), nel canale A (Fiandrotti) c'è un deck su `if-else` dopo quello sui booleani; nel canale C (Mazzei) è la lezione 05 «IF». Le slide 2026/27 dei canali A e C non le ho viste. L'esame è unico.
>
> **Un avviso sulle slide.** Gli esempi delle slide 13–20 cominciano con `void main()`. Con gcc 16.1 e `-Wall -Werror`, come all'esame, non compilano: `error: return type of 'main' is not 'int'`. In questi appunti li scrivo con `int main(void)`. Senza opzioni compilano, e le stampe sono quelle delle slide.
>
> Tutti i programmi li ho compilati e provati con gcc 16.1, con `-Wall -Werror`.

## Tre strutture bastano (slide 2–3)

Un algoritmo è fatto di passi in fila, di scelte («se l'input è negativo, cambia segno») e di ripetizioni («leggi finché il numero non è valido»). La **programmazione strutturata** dà a ciascuno dei tre una **struttura di controllo**:

| Struttura | Che cosa fa | In C |
|---|---|---|
| **sequenza** | esegue le istruzioni una dopo l'altra, nell'ordine | quello fatto finora |
| **selezione** | sceglie tra strade diverse con una condizione | `if`, `else` |
| **iterazione** | ripete un blocco finché una condizione è vera | `while`, `for`, `do-while` |

Negli anni '60 non era ancora chiaro quali strumenti servissero per descrivere l'ordine delle istruzioni: molti programmi saltavano da un punto all'altro, come la versione V5 della [lezione 01A](01A_primo_algoritmo.html). Nel 1966 **Corrado Böhm** e **Giuseppe Jacopini**, due informatici italiani, hanno dimostrato che **sequenza, selezione e iterazione bastano** per scrivere qualunque algoritmo. È il **teorema di Böhm-Jacopini**, e da lì vengono i linguaggi di oggi: pochi pezzi semplici, che si mettono uno dentro l'altro per costruire programmi complicati quanto si vuole.

In questa lezione c'è la selezione. L'iterazione arriva con `while` e `for`.

::: prova Nella frase «ripeti finché non hai letto un numero valido, e se è negativo cambiagli segno», quali strutture ci sono?
Un'iterazione («ripeti finché») e una selezione («se è negativo»). Le due istruzioni, leggere e cambiare segno, sono in sequenza.
:::

> [!RICORDA]
> - Le tre strutture: sequenza, selezione, iterazione.
> - Per il teorema di Böhm-Jacopini bastano per qualunque algoritmo.

## Il costrutto if (slide 4–5)

Il **flusso** di un programma è l'ordine in cui le istruzioni vengono eseguite. Con un `if` il flusso arriva a un bivio: il programma valuta una condizione e prende una delle due strade. Si chiama **controllo di flusso condizionato**.

La forma più semplice ha una sola strada in più:

```c
if (condizione) {
    // codice eseguito solo se la condizione è vera
}
```

- Se la condizione è **vera** (cioè diversa da 0), il programma **entra** nel blocco tra le graffe.
- Se è **falsa** (cioè 0), **salta** il blocco e continua dopo la `}`.

La condizione è un'espressione booleana della [03C](03C_booleani.html), sempre **tra parentesi tonde**. L'esempio delle slide:

```c
int voto = 25;
if (voto >= 18) {
    printf("Esame superato!\n");
}
```

Stampa `Esame superato!`. Con `voto = 15` non stampa niente: il blocco viene saltato.

::: prova Che cosa stampa questo codice con `n = 4`? E con `n = 9`? `if (n % 2 == 0) { printf("pari "); } printf("fine");`
Con 4 stampa `pari fine`. Con 9 stampa solo `fine`: la seconda `printf` è fuori dal blocco e viene eseguita sempre.
:::

> [!RICORDA]
> - `if (condizione) { … }`: il blocco si esegue solo se la condizione è vera.
> - Quello che sta dopo la `}` si esegue sempre.

## Due strade: if-else (slide 6)

Con `else`, «altrimenti», il programma ha **due** strade, e ne percorre sempre esattamente una:

```c
if (condizione) {
    // blocco A: se la condizione è vera
}
else {
    // blocco B: se la condizione è falsa
}
```

L'esempio delle slide è la batteria del telefono:

```c
int batteria = 15;

if (batteria < 20) {
    printf("Batteria quasi scarica! Collega il caricatore.\n");
}
else {
    printf("Batteria sufficiente.\n");
}
```

Con 15 stampa il primo messaggio, con 20 o più il secondo. Non succede mai che stampi tutti e due, e nemmeno che non ne stampi nessuno.

::: prova Scrivi un `if-else` che stampa `positivo o zero` se `x` è almeno 0, e `negativo` altrimenti.
`if (x >= 0) { printf("positivo o zero\n"); } else { printf("negativo\n"); }`.
:::

> [!RICORDA]
> - Con `if-else` si esegue sempre uno e un solo blocco dei due.
> - `else` non ha una condizione: vale «in tutti gli altri casi».

## Più strade: else if (slide 7–8)

A volte le strade sono più di due. Il semaforo dell'esempio ha tre colori, più il caso di un colore sbagliato. Le condizioni si mettono **in fila**, con `else if`:

```c
char colore = 'G';   // R = Rosso, G = Giallo, V = Verde
if (colore == 'R') {
    printf("Fermati!\n");
}
else if (colore == 'G') {
    printf("Attenzione, rallenta.\n");
}
else if (colore == 'V') {
    printf("Puoi passare.\n");
}
else {
    printf("Colore non valido!\n");
}
```

Il programma controlla le condizioni **dall'alto in basso**:

1. il colore è `'R'`? No, allora passa alla domanda dopo;
2. il colore è `'G'`? Sì: stampa `Attenzione, rallenta.` e **salta tutto il resto**, fino alla fine della catena.

Se nessuna condizione è vera, entra nell'`else` finale, il **caso di default**. Ho provato tutti i casi: `'R'`, `'G'` e `'V'` danno i loro messaggi; `'g'` minuscolo dà `Colore non valido!`, perché `'g'` e `'G'` sono caratteri diversi, con codici ASCII 103 e 71.

> [!NOTA] I caratteri si confrontano con ==
> Un `char` è un piccolo numero, il codice ASCII del carattere. Per questo `colore == 'R'` funziona come un confronto tra numeri. Il carattere va tra apici singoli: `'R'` è un carattere, `"R"` è una stringa, che si confronta in un altro modo.

> [!TRAPPOLA] All'esame niente switch
> Il C ha anche un'istruzione `switch` per scegliere tra molti valori. Le regole d'esame di Programmazione I la **vietano**, come `break` e `continue`: le catene di scelte si scrivono con `if` ed `else if`.

::: prova Con il programma del semaforo e `colore = 'V'`, quante condizioni vengono controllate prima di stampare?
Tre: `'R'`, poi `'G'`, poi `'V'`, che è vera.
:::

> [!RICORDA]
> - Le condizioni di una catena `else if` si controllano dall'alto in basso.
> - Si entra nel primo blocco con la condizione vera; tutti gli altri si saltano.
> - L'`else` finale raccoglie i casi rimasti.

## Gli errori più comuni (slide 9–12)

Gli `if` sono semplici da scrivere e facili da sbagliare. Le slide raccolgono gli errori che si vedono più spesso. Per ognuno ho controllato che cosa fa gcc.

### Un uguale solo

```c
if (a = 5) { ... }  // ERRORE: assegnamento
```

`a = 5` non confronta: **mette** 5 in `a`, e vale 5, cioè vero. Il blocco viene eseguito **sempre**, qualunque cosa ci fosse in `a`. gcc con `-Wall` avvisa: `suggest parentheses around assignment used as truth value`. Con `-Werror` non compila, ed è una fortuna.

### Le graffe dimenticate

```c
if (x > 0)
    printf("Positivo\n");
    printf("Errore!\n"); // eseguito sempre
```

Senza graffe, l'`if` comanda **una sola istruzione**, la prima. La seconda `printf` è rientrata come se dipendesse dall'`if`, ma per il C il rientro non conta niente: viene eseguita sempre. gcc con `-Wall` avvisa: `this 'if' clause does not guard...`, e con `-Werror` non compila. Le slide consigliano di mettere **sempre** le graffe, anche con una sola istruzione.

### L'ordine sbagliato

```c
if (num % 2 == 0) {
    printf("Pari non nullo\n");
}
else if (num == 0) {
    printf("Zero\n");   // Mai raggiunto
}
```

Lo 0 è pari: con `num = 0` la prima condizione è già vera, e il programma stampa `Pari non nullo`, che è falso. Il blocco `Zero` non viene mai raggiunto. Si corregge mettendo **prima il caso più specifico**:

```c
if (num == 0) {
    printf("Zero\n");
}
else if (num % 2 == 0) {
    printf("Pari non nullo\n");
}
```

Ho provato: con 0 la prima versione stampa `Pari non nullo`, la seconda `Zero`. Con 4 tutte e due stampano `Pari non nullo`.

### Condizioni che non diventano mai vere

```c
if (x > 10) {
    ...
}
else if (x > 20) {
    ... // mai eseguito!
}
```

Ogni numero maggiore di 20 è anche maggiore di 10, quindi entra già nel primo blocco. Il secondo non si raggiunge mai. Qui gcc **non avvisa**: l'errore è di logica, e lo trovi solo ragionando. Le soglie vanno in ordine dalla più alta alla più bassa (`x > 20` prima di `x > 10`), oppure con intervalli precisi.

### L'else mancante

È buona norma gestire **tutti** i casi, con un `else` finale anche solo per stampare un errore. Così il programma non arriva mai in una situazione che non hai previsto.

### Condizioni troppo lunghe

```c
if (a > 10 && b < 5 || c == 7 && !(d%2)) {
    ...
}
```

Come nella [03C](03C_booleani.html), una condizione così si spezza in variabili `bool` con un nome:

```c
bool condA = (a > 10 && b < 5);
bool condB = (c == 7 && d % 2 == 0);

if (condA || condB) { ... }
```

La prima versione, tra l'altro, con `-Wall -Werror` non compila: gcc chiede le parentesi intorno agli `&&` dentro l'`||`.

| Errore | gcc con `-Wall` | Con `-Werror` |
|---|---|---|
| `if (a = 5)` | avviso `-Wparentheses` | non compila |
| graffe dimenticate, rientro ingannevole | avviso `-Wmisleading-indentation` | non compila |
| `&&` dentro `\|\|` senza parentesi | avviso `-Wparentheses` | non compila |
| ordine sbagliato delle condizioni | niente | compila, risultato sbagliato |
| condizione mai raggiungibile | niente | compila, risultato sbagliato |

::: prova Che cosa stampa questo codice con `x = 25`? `if (x > 10) { printf("A"); } else if (x > 20) { printf("B"); } else { printf("C"); }`
`A`: 25 è maggiore di 10, quindi si entra nel primo blocco e gli altri si saltano. `B` non viene mai stampato, per nessun valore.
:::

> [!RICORDA]
> - Sempre le graffe, anche per una sola istruzione.
> - Prima i casi più specifici, poi quelli generali.
> - gcc trova gli errori di scrittura, non quelli di ordine: quelli si trovano provando i casi limite.

## Lo scambio condizionato (slide 13–20)

L'esempio delle slide: leggere due interi `x` e `y` e stamparli dal più piccolo al più grande. La prima idea è stampare in due ordini diversi:

```c
#include <stdio.h>

int main(void) {
    int x, y;
    printf("Inserisci x:");
    scanf("%d", &x);
    printf("Inserisci y:");
    scanf("%d", &y);
    if (y < x) {
        printf("%d %d", y, x);
    }
    else { // y >= x
        printf("%d %d", x, y);
    }
}
```

La seconda idea è più utile: se sono nell'ordine sbagliato, **si scambiano**. Dopo l'`if` le variabili sono in ordine, e basta una sola `printf`. È lo scambio con la variabile d'appoggio della [03A](03A_scambio_variabili.html), fatto solo quando serve: uno **scambio condizionato**.

```c
#include <stdio.h>

int main(void) {
    int x, y;
    printf("Inserisci x:");
    scanf("%d", &x);
    printf("Inserisci y:");
    scanf("%d", &y);
    if (y < x) {
        //scambio condizionato
        int temp = x;
        x = y;
        y = temp;
    }
    printf("%d %d", x, y);
}
```

Con 10 e 5 stampa `5 10`; con 3 e 8 stampa `3 8`, senza scambio.

### Che cosa succede nella memoria

Le slide 15–20 seguono il programma con l'input 10 e 5, una riga alla volta. Ogni riga della tabella è lo stato della memoria **dopo** l'istruzione indicata.

| Dopo l'istruzione | `x` | `y` | `temp` |
|---|:-:|:-:|:-:|
| `int x, y;` | ? | ? | non esiste |
| le due `scanf` | 10 | 5 | non esiste |
| `int temp = x;` | 10 | 5 | 10 |
| `x = y;` | 5 | 5 | 10 |
| `y = temp;` | 5 | 10 | 10 |
| la `}` dell'`if` | 5 | 10 | non esiste |

La cosa nuova è l'ultima colonna. `temp` è dichiarata **dentro** il blocco dell'`if`: nasce sullo stack quando il programma arriva alla sua dichiarazione, e alla `}` del blocco **viene tolta dallo stack**. Dopo l'`if` non esiste più.

> [!DEF] Visibilità di una variabile
> Una variabile dichiarata in un blocco `{ … }` è **visibile**, cioè si può usare, solo dalla sua dichiarazione alla `}` che chiude quel blocco. Fuori dal blocco il suo nome non esiste.

**Come si legge.** È la regola delle variabili locali della [02B](02B_assegnamento_memory_model.html), applicata ai blocchi dell'`if`. Se dopo l'`if` scrivi `printf("%d", temp);`, gcc si ferma: `error: 'temp' undeclared`. L'ho provato.

Questo è utile: `temp` serve solo per lo scambio, e dichiararla dentro il blocco evita che qualcuno la usi per sbaglio più avanti.

::: prova Con l'input 4 e 4, quante volte viene creata `temp`? Che cosa stampa il programma?
Nessuna: `4 < 4` è falso, quindi il blocco viene saltato e `temp` non nasce. Stampa `4 4`.
:::

> [!RICORDA]
> - Scambio condizionato: si scambia solo se l'ordine è sbagliato.
> - Una variabile dichiarata in un blocco sparisce alla `}` del blocco.

## Niente scale di if inutili (slide 21)

Un `if` dentro un `else` funziona, ma spinge il codice sempre più a destra e si legge male. L'esempio delle slide è il prezzo del biglietto: gratis sotto i 6 anni, ridotto sotto i 18, intero dai 18 in su.

```c
if (eta < 6) {
    printf("Biglietto gratuito\n");
}
else {
    if (eta < 18) {
        printf("Biglietto ridotto\n");
    }
    else {
        printf("Biglietto intero\n");
    }
}
```

La stessa scelta con `else if` sta su un solo livello:

```c
if (eta < 6) {
    printf("Biglietto gratuito\n");
}
else if (eta < 18) {
    printf("Biglietto ridotto\n");
}
else {
    printf("Biglietto intero\n");
}
```

Le due versioni fanno esattamente la stessa cosa. Ho provato i **casi limite**, quelli sul confine tra due fasce: 5 dà gratuito, 6 ridotto, 17 ridotto, 18 intero.

Nota che la seconda condizione è solo `eta < 18`, non `6 <= eta && eta < 18`: se il programma arriva lì, `eta < 6` è già falso, quindi `eta` è almeno 6. Un `else if` sa già che tutte le condizioni prima sono false.

::: prova Aggiungi una fascia: dai 65 anni in su il biglietto è ridotto. Dove metti la condizione?
Prima dell'`else` finale: `else if (eta >= 65) { printf("Biglietto ridotto\n"); }`. Oppure, per non ripetere il messaggio, `else if (eta < 18 || eta >= 65)` al posto di `else if (eta < 18)`.
:::

> [!RICORDA]
> - Un `if` dentro un `else` si scrive meglio con `else if`.
> - Ogni `else if` sa già che le condizioni precedenti sono false.

## Schemi che tornano sempre (slide 22–25)

Alcuni `if` compaiono in quasi tutti i programmi. Vale la pena saperli scrivere senza pensarci.

### Il massimo di due numeri

```c
int a, b, max;
scanf("%d%d", &a, &b);
// determina il massimo tra a e b
if (a > b) {
    max = a;
}
else {
    max = b;
}
// in questo punto max contiene il massimo tra a e b
```

Con 4 e 9, `max` vale 9. Con due numeri uguali va bene lo stesso: si prende `b`, che vale quanto `a`.

### Controllare l'input

Prima di usare un valore letto, si controlla che `scanf` l'abbia letto davvero, come nella [02C](02C_referenziamento_scanf_puntatori.html):

```c
int valore;
if (scanf("%d", &valore) == 1) {
    printf("Hai inserito: %d\n", valore);
}
else {
    printf("Input non valido\n");
}
```

### Proteggere un'operazione

Prima di dividere, si controlla che il divisore non sia zero:

```c
if (divisore != 0) {
    printf("Risultato: %d\n", dividendo / divisore);
}
else {
    printf("Errore: divisione per zero!\n");
}
```

### Controllare un intervallo

```c
float temperatura;
bool inputOk = scanf("%f", &temperatura) == 1;
// 0 <= temperatura_valida <= 100
if (inputOk && 0 <= temperatura && temperatura <= 100) {
    printf("Temperatura entro i limiti\n");
}
else {
    printf("Temperatura fuori intervallo o lettura errata\n");
}
```

Qui lavorano insieme tre idee della [03C](03C_booleani.html): l'intervallo con due confronti, il cortocircuito che non guarda `temperatura` se la lettura è fallita, e una variabile `bool` con un nome chiaro. Ho provato: 25 e 100 sono entro i limiti; −3, 100.5 e `ciao` danno il secondo messaggio.

::: prova Con il programma della temperatura e l'input `0`, che cosa stampa? Perché?
`Temperatura entro i limiti`: l'intervallo è chiuso, `0 <= temperatura` è vero anche con 0.
:::

> [!RICORDA]
> - Massimo: un `if-else` che sceglie quale copiare in `max`.
> - Prima di usare un input, controlla che `scanf` restituisca 1.
> - Prima di dividere, controlla il divisore.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `if (c) { … }` | «se» | esegue il blocco se `c` è vera | `if (voto >= 18) { … }` |
| `else { … }` | «altrimenti» | il blocco da eseguire se la condizione è falsa | |
| `else if (c) { … }` | «altrimenti se» | un'altra condizione, controllata solo se le precedenti erano false | |
| `{ }` | graffe | un blocco di istruzioni; le variabili dichiarate dentro vivono solo lì | |
| `'R'` | carattere | un `char`, tra apici singoli | `colore == 'R'` |

## Verso l'esame

All'esame, su CodeRunner, quasi ogni esercizio ha degli `if`. Le cose da avere in mano:

1. **compila con `-Wall -Werror`** e leggi gli avvisi: `=` al posto di `==` e le graffe dimenticate vengono fermati qui;
2. **`int main(void)`**, non `void main()`;
3. **niente `switch`, `break` e `continue`**: le scelte si fanno con `if` ed `else if`;
4. **prova i casi limite**: lo zero, i numeri uguali, i valori sul confine tra due fasce (17 e 18, 5 e 6);
5. **un `else` finale** per i casi che non ti aspetti, come l'input non valido.

Negli esercizi sullo **stato della memoria** può comparire un `if` con una variabile dichiarata dentro: la sua casella esiste solo mentre il programma è nel blocco, e alla `}` si cancella.

> [!METODO] Seguire un programma con gli if
> 1. Scrivi i valori iniziali delle variabili.
> 2. A ogni `if`, calcola la condizione con i valori di quel momento e scrivi «vero» o «falso».
> 3. Segui solo il blocco scelto; in una catena `else if`, fermati alla prima condizione vera.
> 4. Aggiorna la tabella dei valori dopo ogni assegnamento, e cancella le variabili del blocco alla sua `}`.

## Quiz

```quiz
D: Che cosa stampa `int n = 0; if (n % 2 == 0) { printf("A"); } else if (n == 0) { printf("B"); } else { printf("C"); }`?
+ `A`
- `B`
- `AB`
- `C`
- niente
= 0 % 2 vale 0, quindi la prima condizione è vera: stampa `A` e salta il resto. La risposta più insidiosa è `B`: il caso dello zero è scritto, ma dopo un caso più generale che lo cattura prima.

D: Che cosa stampa questo codice con `x = -3`? `if (x > 0) printf("P"); printf("Q");`
+ `Q`
- `PQ`
- niente
- `P`
- non compila mai
= Senza graffe l'`if` comanda solo la prima `printf`. La seconda si esegue sempre. La risposta più insidiosa è «niente»: il rientro e la riga sotto fanno credere che anche `Q` dipenda dall'`if`. Scritto su due righe rientrate, gcc con `-Wall -Werror` lo ferma.

D: Con `int a = 0;`, che cosa stampa `if (a = 7) { printf("%d", a); }` compilato senza opzioni?
+ `7`
- niente
- `0`
- `1`
- un indirizzo
= `a = 7` assegna 7 e vale 7, quindi la condizione è vera e si stampa il nuovo valore di `a`. La risposta più insidiosa è «niente», che si avrebbe con `a == 7`. Con `-Wall -Werror` non compilerebbe.

D: Perché `void main() { … }` non va bene all'esame?
+ Con `-Wall -Werror` gcc non lo compila: `main` deve restituire `int`
- Il C non permette `void`
- Manca `return 0`
- Non si possono dichiarare variabili dentro `main`
- `void main` non può usare `scanf`
= gcc avvisa `return type of 'main' is not 'int'`, e con `-Werror` l'avviso diventa un errore. La risposta più insidiosa è `return 0`: in `int main(void)` si può anche omettere, per `main` vale 0 da solo.

D: Dopo questo codice, che cosa succede alla riga `printf("%d", temp);`? `int x = 2, y = 1; if (y < x) { int temp = x; x = y; y = temp; } printf("%d", temp);`
+ Non compila: `temp` non è dichiarata in quel punto
- Stampa 2
- Stampa 1
- Stampa un valore a caso
- Stampa 0
= `temp` vive solo dentro il blocco dell'`if`: alla `}` sparisce, e gcc dà `error: 'temp' undeclared`. La risposta più insidiosa è 2, il valore che `temp` aveva nel blocco.

D: Quale catena dà il prezzo giusto per ogni età: gratis sotto i 6, ridotto da 6 a 17, intero dai 18?
+ `if (eta < 6) … else if (eta < 18) … else …`
- `if (eta < 18) … else if (eta < 6) … else …`
- `if (eta < 6) … if (eta < 18) … else …`
- `if (eta <= 6) … else if (eta <= 18) … else …`
- `if (eta < 6) … else if (eta > 18) … else …`
= Le domande vanno dalla più specifica. La risposta più insidiosa è la seconda: con 3 anni `eta < 18` è già vera, e il caso gratuito non arriva mai. La terza, con due `if` separati, a 3 anni stampa due messaggi; la quarta sbaglia i confini 6 e 18; la quinta dà il ridotto a 18 anni.

D: Con `int x = 7, y = 3, z;` e poi `if (x > y) { z = x - y; } else { z = y - x; }`, quanto vale `z`?
N: 4
= 7 > 3 è vero, quindi si esegue il primo blocco: z = 7 − 3 = 4. In tutti e due i casi `z` è la distanza tra i due numeri.

D: Quale riga legge un intero e lo usa solo se la lettura è riuscita?
+ `if (scanf("%d", &v) == 1) { … }`
- `if (scanf("%d", &v)) == 1 { … }`
- `if (scanf("%d", v) == 1) { … }`
- `if (v == scanf("%d", &v)) { … }`
- `if (scanf("%d", &v) = 1) { … }`
= `scanf` restituisce quanti valori ha letto, e serve la `&`. La risposta più insidiosa è quella con `= 1`: è un assegnamento, e non compila nemmeno, perché non si può assegnare al risultato di una funzione. La seconda ha le parentesi nel posto sbagliato.
```

## Esercizi

::: esercizio base Riscaldamento: che cosa stampa?
Con `int x = 7, y = 3, z = 0;` esegui: `if (x > y) { z = x - y; } else { z = y - x; }` e poi `if (z % 2 == 0) { x = x + z; } else if (z > 3) { y = y + z; } else { x = 0; }`. Quanto valgono `x`, `y`, `z`?
::: soluzione
`z = 4`. Poi `4 % 2 == 0` è vero, quindi `x = 7 + 4 = 11`, e il resto della catena si salta. Alla fine `x = 11`, `y = 3`, `z = 4`. Il programma che stampa i tre valori dà `11 3 4`.
:::

::: esercizio base Riscaldamento: trova gli errori
Ogni riga ha un errore. Trovalo. (a) `if (n = 0) { printf("zero"); }` (b) `if n > 0 { printf("positivo"); }` (c) `if (x > 0); { printf("positivo"); }` (d) `else (x < 0) { printf("negativo"); }`
::: soluzione
(a) `=` al posto di `==`. (b) Mancano le parentesi tonde intorno alla condizione: `if (n > 0)`. (c) Il `;` dopo la parentesi chiude l'`if` con un'istruzione vuota: il blocco si esegue sempre. gcc con `-Wall` se ne accorge quando il blocco sta sulla stessa riga (`this 'if' clause does not guard...`). (d) `else` non ha condizione: serve `else if (x < 0)`.
:::

::: esercizio base Riscaldamento: i casi limite
Per il codice del biglietto (gratis sotto i 6, ridotto sotto i 18, intero altrimenti), quali età proveresti per controllarlo? Perché proprio quelle?
::: soluzione
5 e 6, 17 e 18: sono i valori ai due lati di ogni confine, dove un `<` scritto al posto di `<=` cambia il risultato. In più un valore in mezzo a ogni fascia, per esempio 2, 10 e 40, e magari 0.
:::

::: esercizio medio Il massimo di tre numeri
Scrivi un programma che legge tre interi e stampa il più grande. Prova con 4 9 2, con −1 −5 −3 e con 7 7 7.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    int max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    printf("%d\n", max);
    return 0;
}
```
Stampa 9, −1 e 7. L'idea: si parte da un candidato e lo si aggiorna quando si trova di meglio. Qui gli `if` sono **separati**, non in catena, perché ogni confronto va fatto comunque. È lo stesso schema che userai con i cicli per il massimo di un array.
:::

::: esercizio medio Il voto in parole
Scrivi un `if-else if` che legge un voto da 0 a 30 e stampa `insufficiente` sotto il 18, `sufficiente` da 18 a 23, `buono` da 24 a 27, `ottimo` da 28 in su. Con quali voti lo provi?
::: soluzione
```c
if (v < 18) {
    printf("insufficiente\n");
}
else if (v < 24) {
    printf("sufficiente\n");
}
else if (v < 28) {
    printf("buono\n");
}
else {
    printf("ottimo\n");
}
```
Provato con 17, 18, 24, 27, 28 e 30: danno insufficiente, sufficiente, buono, buono, ottimo, ottimo. Ogni `else if` sa già che il voto non è sotto la soglia precedente.
:::

::: esercizio esame Ordinare tre numeri
Scrivi un programma che legge tre interi `a`, `b`, `c` e li stampa dal più piccolo al più grande, usando solo scambi condizionati. Se la lettura non riesce, stampa `Input non valido`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a, b, c;
    if (scanf("%d %d %d", &a, &b, &c) == 3) {
        // porta il piu' piccolo in a
        if (b < a) {
            int temp = a;
            a = b;
            b = temp;
        }
        if (c < a) {
            int temp = a;
            a = c;
            c = temp;
        }
        // ora a e' il minimo: sistema b e c
        if (c < b) {
            int temp = b;
            b = c;
            c = temp;
        }
        printf("%d %d %d\n", a, b, c);
    }
    else {
        printf("Input non valido\n");
    }
    return 0;
}
```
Provato con 3 1 2, 9 8 7, 5 5 1 e 1 2 3: stampa sempre i numeri in ordine. Con `x` stampa `Input non valido`. Ogni `temp` vive solo nel suo blocco, quindi lo stesso nome si può usare tre volte.
:::

::: esercizio esame La tariffa del parcheggio
Un parcheggio costa: la prima ora gratis, poi 2 euro per ogni ora dopo la prima, fino a 5 ore; oltre le 5 ore 12 euro fissi. Scrivi un programma che legge le ore (un intero) e stampa il prezzo, con un messaggio di errore se l'input non è valido o è negativo.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int ore;
    bool letto = (scanf("%d", &ore) == 1);
    if (!letto || ore < 0) {
        printf("Input non valido\n");
    }
    else if (ore <= 1) {
        printf("Gratis\n");
    }
    else if (ore <= 5) {
        printf("%d euro\n", (ore - 1) * 2);
    }
    else {
        printf("12 euro\n");
    }
    return 0;
}
```
Provato: 0 e 1 danno `Gratis`, 3 dà `4 euro`, 5 dà `8 euro`, 6 dà `12 euro`, −2 e `boh` danno `Input non valido`. Il primo controllo usa il cortocircuito: se `letto` è falso, `ore` non viene guardata.
:::

## Domande di ripasso

::: domanda Quali sono le tre strutture della programmazione strutturata?
Sequenza, selezione e iterazione.
:::

::: domanda Che cosa dice il teorema di Böhm-Jacopini?
Che sequenza, selezione e iterazione bastano per scrivere qualunque algoritmo.
:::

::: domanda In una catena `if … else if … else`, quanti blocchi vengono eseguiti?
Uno solo: il primo con la condizione vera, oppure l'`else` se nessuna è vera.
:::

::: domanda Perché conviene mettere sempre le graffe?
Perché senza graffe l'`if` comanda solo l'istruzione dopo, e una seconda riga rientrata sembra dipendere dall'`if` ma viene eseguita sempre.
:::

::: domanda In che ordine vanno le condizioni di una catena `else if`?
Dalla più specifica alla più generale: altrimenti un caso generale cattura prima quello specifico.
:::

::: domanda Dove si può usare una variabile dichiarata dentro il blocco di un `if`?
Solo dentro quel blocco, dalla dichiarazione alla `}`. Fuori non esiste.
:::

::: domanda Come si controlla che `scanf` abbia letto un intero?
Con `if (scanf("%d", &x) == 1)`: `scanf` restituisce quanti valori ha letto.
:::

## Glossario

```glossario
Flusso di controllo | L'ordine in cui il programma esegue le istruzioni.
Programmazione strutturata | Scrivere i programmi solo con sequenza, selezione e iterazione.
Teorema di Böhm-Jacopini | Sequenza, selezione e iterazione bastano per qualunque algoritmo (1966).
Selezione | Scegliere quale blocco eseguire in base a una condizione.
if | Esegue un blocco solo se la condizione è vera.
else | Il blocco da eseguire quando la condizione è falsa.
else if | Una nuova condizione, controllata solo se le precedenti erano false.
Blocco | Istruzioni tra graffe; le variabili dichiarate dentro esistono solo lì.
Visibilità | La parte di programma in cui un nome di variabile si può usare.
Scambio condizionato | Scambiare due variabili solo se sono nell'ordine sbagliato.
Caso limite | Un valore sul confine tra due casi, dove gli errori si vedono meglio.
```

## Checklist

```checklist
- So nominare le tre strutture e il teorema di Böhm-Jacopini.
- So scrivere `if`, `if-else` e una catena `else if`.
- So che in una catena si esegue un solo blocco, il primo con la condizione vera.
- So riconoscere `=` al posto di `==` e le graffe dimenticate.
- So mettere le condizioni dalla più specifica alla più generale.
- So che una variabile dichiarata in un blocco sparisce alla sua `}`.
- So scrivere lo scambio condizionato e seguirlo nella memoria.
- So scrivere senza pensarci il massimo, il controllo dell'input, la divisione protetta e l'intervallo.
- So scegliere i casi limite per provare un programma con gli `if`.
```

## Fonti

- Slide «Dal flusso sequenziale alle decisioni. Introduzione al controllo di flusso nella programmazione strutturata» (03D_decisioni), Programmazione I – Teoria, canale B, A.A. 2026/27, E. G. Amparore: programmazione strutturata e Böhm-Jacopini (slide 2–3), `if`, `if-else`, `else if` (4–8), errori comuni e buona prassi (9–12), stampa in ordine e visibilità nei blocchi (13–20), annidamenti (21), schemi ricorrenti (22–25).
- C. Böhm, G. Jacopini, «Flow diagrams, Turing machines and languages with only two formation rules», *Communications of the ACM*, 1966.
- Regole d'esame e lezioni dei canali A e C dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Tutti i programmi delle slide e delle soluzioni li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror` (gli esempi con `void main()` anche senza opzioni), ed eseguiti; gli avvisi citati sono quelli veri. Le soluzioni, i quiz e gli esercizi sono di questi appunti.
