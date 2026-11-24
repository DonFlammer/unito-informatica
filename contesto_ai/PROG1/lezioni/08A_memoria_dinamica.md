---
corso: PROG1
lezione: 08A
titolo: Memoria dinamica
data: 2026-11-17
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 08A
descrizione: >-
  Appunti della lezione 08A di Programmazione I (canale B): perché lo stack non basta, il puntatore appeso, lo heap,
  malloc e free nel modello della memoria, l'array allocato nello heap, gli errori tipici (memory leak, uso dopo la
  free, doppia free, memoria non inizializzata), la selezione con copia in tre fasi e la responsabilità della memoria,
  con tutti i programmi provati, quiz ed esercizi.
lede: >-
  Finora ogni variabile nasceva e spariva da sola, insieme alla funzione che la dichiarava. Per restituire un array
  costruito dentro una funzione questo non basta: serve memoria che resti viva finché lo decidi tu. Si chiede con
  malloc, si restituisce con free, e da quel momento gli errori di memoria sono affare tuo.
materiale: slide
scheda:
  Slide: 08A_memoria_dinamica («Memoria Dinamica. Gestione non automatica della memoria, lo heap e le funzioni malloc/free») · 50 pagine
  Lezione: martedì 17/11 e mercoledì 18/11
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 100 minuti, con carta e penna per disegnare stack e heap
fonte: >-
  Slide «Memoria Dinamica. Gestione non automatica della memoria, lo heap e le funzioni malloc/free»
  (08A_memoria_dinamica), Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/08A_memoria_dinamica.html
genera_html: true
---

## In breve

- Le variabili locali stanno nello **stack** e spariscono quando la funzione ritorna. Un puntatore a una di loro, restituito al chiamante, è un **puntatore appeso** (*dangling pointer*): l'indirizzo c'è ancora, la variabile no.
- Lo **heap** è una zona di memoria che gestisci a mano: un blocco esiste da quando lo chiedi a quando lo restituisci, in qualunque funzione tu sia.
- `malloc(n * sizeof(int))` chiede un blocco di `n` interi **contigui** e **non inizializzati**, e ritorna l'indirizzo del primo; ritorna `NULL` se la memoria non c'è.
- `free(p)` restituisce il blocco. Dopo, `p` non si può più usare: si scrive `free(p); p = NULL;`.
- **Ogni `malloc` ha la sua `free`**. Un blocco mai liberato è un **memory leak**.
- Gli errori tipici: dimenticare la `free`, usare il puntatore dopo la `free`, fare due `free`, perdere l'indirizzo del blocco, leggere memoria non inizializzata, credere che due blocchi siano vicini.
- **Selezione con copia in tre fasi**: conta quanti elementi servono, alloca un array di quella misura, copia.
- **Responsabilità** (*ownership*): per ogni blocco c'è un punto del programma che deve liberarlo. Una funzione che ritorna un blocco allocato passa la responsabilità a chi la chiama.

> [!CANALI]
> **Canale B.** Lezioni di martedì 17/11, dalle 11 alle 13, e di mercoledì 18/11, dalle 9 alle 11: sul Moodle del corso queste slide sono nella settimana del 16 novembre, «Memoria Dinamica», con le registrazioni dei due giorni. Dove sia finita la prima lezione non lo so: gli appunti seguono le slide dall'inizio alla fine. Il laboratorio del turno B2 di lunedì 16/11 è stato annullato. Servono lo stack e i frame della [06B](06B_chiamata_funzioni.html), i puntatori come parametri di uscita della stessa lezione, gli array e i VLA della [05A](05A_array_stringhe.html) e la selezione con dimensione e capacità della [07A](07A_algoritmi_su_array.html).
>
> **Canali A e C.** Le slide 2026/27 dei canali A e C su questo argomento non le ho viste. L'esame è unico.
>
> **Tre avvisi sulle slide.**
>
> - Il programma `leggiArraySbagliato` (slide 3–12) con le opzioni d'esame **non si compila**: gcc si accorge che la funzione ritorna l'indirizzo di una variabile locale. Lo stesso vale per tre degli «errori comuni». I messaggi sono riportati sotto.
> - Il programma con `strdup` (slide 49) usa `assert` senza `#include <assert.h>`: così non si compila.
> - `leggiArray` (slide 21) non controlla il risultato di `malloc`. Va bene per seguire la memoria passo per passo; negli esercizi il controllo va messo, come fa `selectCopy`.
>
> Tutti i programmi li ho compilati con gcc 16.1, con `-Wall -Werror`, ed eseguiti.

## Perché lo stack non basta (slide 2–13)

Il problema di partenza sembra innocuo: una funzione `leggiArray` che legge un numero `n`, poi `n` interi, e restituisce al chiamante la sequenza letta.

Il chiamante non può preparare l'array, perché non sa quanto è lungo: `n` lo conosce solo la funzione, dopo averlo letto. Quindi l'array deve crearlo la funzione. Il primo tentativo usa un array a lunghezza variabile, un VLA:

```c
int* leggiArraySbagliato(size_t* out_n) {
    size_t n;
    scanf("%zu", &n);
    int a[n];    // VLA su stack (vita limitata al frame)
    for (size_t i = 0; i < n; ++i)
        scanf("%d", &a[i]);
    *out_n = n;
    return a;    // ERRORE: l'array a sparisce al ritorno
}
```

La lunghezza esce da un parametro puntatore, come nella [06B](06B_chiamata_funzioni.html). L'errore è nell'ultima riga. `a` è una variabile locale: sta nel frame di `leggiArraySbagliato`, e il frame viene tolto dallo stack al momento del `return`. La funzione restituisce l'indirizzo di una zona che un istante dopo non le appartiene più.

```grafico
titolo: Lo stack prima e dopo il ritorno di leggiArraySbagliato. A sinistra il frame della funzione esiste e contiene l'array. A destra il frame è stato tolto: il puntatore a di main contiene ancora quell'indirizzo, ma lì non c'è più niente di valido
x: 0 12
y: 0 6.6
assi: no
griglia: no
proporzioni: libere
testo: 2.6 6.2 | grigio | "durante la chiamata"
poligono: 0.6 4.2 4.6 4.2 4.6 5.6 0.6 5.6 | blu | tenue
testo: 2.6 5.2 | blu | "main"
testo: 2.6 4.6 | blu | "aLen: ?   a: ?"
poligono: 0.6 1.0 4.6 1.0 4.6 4.2 0.6 4.2 | viola | tenue
testo: 2.6 3.7 | viola | "la funzione"
testo: 2.6 3.1 | viola | "n: 3"
poligono: 1.0 1.3 4.2 1.3 4.2 2.5 1.0 2.5 | verde | tenue
testo: 2.6 1.9 | verde | "a: 10 20 30"
testo: 8.9 6.2 | grigio | "dopo il return"
poligono: 6.9 4.2 10.9 4.2 10.9 5.6 6.9 5.6 | blu | tenue
testo: 8.9 5.2 | blu | "main"
testo: 8.9 4.6 | blu | "aLen: 3   a: •"
poligono: 6.9 1.0 10.9 1.0 10.9 4.2 6.9 4.2 | grigio | tratteggio
testo: 8.6 3.6 | grigio | "frame tolto"
testo: 8.9 2.3 | rosa | "?? ?? ??"
freccia: 10.4 4.4 10.0 2.7 | rosa | tratteggio
testo: 8.9 1.5 | rosa | "a è appeso"
```

> [!DEF] Puntatore appeso (slide 12–13)
> Un **puntatore appeso** (*dangling pointer*) è un puntatore che contiene l'indirizzo di una zona di memoria che non è più valida.

**Come si legge.** Il puntatore non cambia: il numero che contiene è lo stesso di prima. È cambiato quello che c'è a quell'indirizzo. Lo spazio del frame tolto verrà riusato dalla prossima chiamata di funzione, e già la `printf` del `main` ci scrive sopra. Usare quel puntatore è un comportamento indefinito: può stampare i numeri giusti, numeri a caso, o far terminare il programma.

Con le opzioni d'esame il programma non arriva nemmeno a partire. Questo è il messaggio vero di gcc:

```text
sbagliato.c: In function 'leggiArraySbagliato':
sbagliato.c:11:12: error: function returns address of local variable [-Werror=return-local-addr]
   11 |     return a;    // ERRORE
      |            ^
```

La regola che ne esce vale per ogni variabile locale, non solo per i VLA:

> [!TRAPPOLA] Mai ritornare l'indirizzo di una variabile locale
> Non si ritorna un array locale, e non si ritorna `&x` con `x` variabile locale. Il compilatore se ne accorge solo nei casi più diretti: se l'indirizzo passa prima per un'altra variabile o per un'altra funzione, non avvisa, e l'errore resta.

Serve una zona di memoria che non segua le regole dello stack.

::: prova Una funzione dichiara `int x = 5;` e fa `return &x;`. Che cosa riceve il chiamante? E se la funzione facesse `return x;`?
Con `return &x` riceve un puntatore appeso: l'indirizzo di una variabile che non esiste più. Con `return x` riceve il valore 5, copiato: quello va benissimo, perché i valori si copiano e gli indirizzi no.
:::

> [!RICORDA]
> - Le variabili locali, VLA compresi, vivono quanto il frame della loro funzione.
> - Ritornare il loro indirizzo dà un puntatore appeso.
> - gcc: `function returns address of local variable`.

## Lo heap, malloc e free (slide 14–17)

Lo **heap** è una zona di memoria gestita dal programmatore, non dal meccanismo delle chiamate. Un blocco nello heap comincia a esistere quando lo chiedi e smette quando lo restituisci: i ritorni delle funzioni non lo toccano.

Si chiama memoria **dinamica** perché non è fissata alla compilazione, come le variabili globali, e non è creata in automatico durante l'esecuzione, come lo stack: viene chiesta e restituita dal programma mentre gira.

Nel modello della memoria di Amparore i segmenti sono quattro:

```grafico
titolo: Il modello della memoria, con gli indirizzi che crescono verso l'alto. Codice e dati hanno dimensione fissa. Heap e stack si dividono lo spazio libero in mezzo: lo heap cresce verso l'alto, lo stack verso il basso
x: 0 10
y: 0 8.2
assi: no
griglia: no
proporzioni: libere
poligono: 2.5 0.4 6.5 0.4 6.5 1.4 2.5 1.4 | grigio | tenue
testo: 4.5 0.9 | grigio | "codice"
poligono: 2.5 1.4 6.5 1.4 6.5 2.4 2.5 2.4 | grigio | tenue
testo: 4.5 1.9 | grigio | "dati"
poligono: 2.5 2.4 6.5 2.4 6.5 3.8 2.5 3.8 | verde | tenue
testo: 4.5 3.1 | verde | "heap"
poligono: 2.5 3.8 6.5 3.8 6.5 6.0 2.5 6.0 | grigio | tratteggio
testo: 4.5 4.9 | grigio | "memoria libera"
poligono: 2.5 6.0 6.5 6.0 6.5 7.6 2.5 7.6 | blu | tenue
testo: 4.5 6.8 | blu | "stack"
freccia: 7.0 2.9 7.0 3.8 | verde
freccia: 7.0 7.0 7.0 6.1 | blu
testo: 8.4 3.3 | verde | "malloc"
testo: 8.4 6.6 | blu | "chiamate"
freccia: 1.5 0.6 1.5 7.4 | grigio | sottile
testo: 0.9 4.0 | grigio | "↑"
```

- **codice**: le istruzioni del programma;
- **dati**: le variabili globali e statiche;
- **heap**: la memoria dinamica;
- **stack**: i frame, con le variabili automatiche.

### Chiedere memoria: malloc

Per avere un blocco nello heap si chiama una funzione di libreria, dicendole quanti byte servono. Per tre interi da 4 byte si chiedono 12 byte, e si riceve l'indirizzo del primo.

> [!DEF] malloc (slide 16)
> `void* malloc(size_t sz);`, dichiarata in `<stdlib.h>`, riserva nello heap `sz` byte **contigui** e ritorna un puntatore al primo byte del blocco. Se la memoria non è disponibile ritorna `NULL`. I byte **non sono inizializzati**.

**Come si legge.** `malloc` ragiona in byte e non sa che cosa metterai nel blocco. Per questo il tipo di ritorno è `void*`: un indirizzo a cui non è ancora stato dato un tipo. Il tipo arriva con l'assegnamento a un puntatore.

```c
int* a = malloc(n * sizeof(int));
if (a == NULL) {
    printf("Memoria insufficiente\n");
}
```

Tre cose in due righe:

1. **La misura.** Un array è una fila di valori dello stesso tipo in posizioni contigue. `n` interi occupano `n * sizeof(int)` byte: su questo PC `sizeof(int)` vale 4, quindi tre interi sono 12 byte. Non si scrive il 4 a mano: `sizeof` lo calcola il compilatore, ed è giusto su ogni macchina.
2. **Il tipo.** L'assegnamento a un `int*` dice che quel blocco verrà letto come interi. Da qui in poi `a[0]`, `a[1]`, … funzionano come per un array: l'operatore `[]` lavora su un puntatore al primo elemento, come nella [06B](06B_chiamata_funzioni.html).
3. **Il controllo.** Se `malloc` ritorna `NULL`, usare `a[0]` fa terminare il programma. Prima di usare il blocco si controlla.

### Restituire memoria: free

Quando il blocco non serve più lo si restituisce allo heap, che potrà darlo a una `malloc` successiva. Nessuno lo fa al posto tuo.

> [!DEF] free (slide 17)
> `void free(void* ptr);`, dichiarata in `<stdlib.h>`, libera il blocco che era stato ottenuto con `malloc` e di cui `ptr` è l'indirizzo.

**Come si legge.** `free` vuole **lo stesso indirizzo** che aveva dato `malloc`: quello del primo byte. Non serve dire quanto è lungo il blocco, lo heap lo sa. Dopo la `free` la variabile `ptr` contiene ancora il vecchio indirizzo, ma è diventata un puntatore appeso. Per questo Amparore scrive sempre le due istruzioni insieme:

```c
free(a);
a = NULL;
```

Con `NULL` dentro, un uso sbagliato fa fermare subito il programma invece di lavorare in silenzio su memoria non sua. E `free(NULL)` è permesso: non fa niente.

**Regola: ogni `malloc` deve avere una `free` corrispondente.**

::: prova Che cosa chiede `malloc(10 * sizeof(double))`? Di che tipo dev'essere la variabile che riceve il risultato?
Un blocco per 10 `double` contigui: 80 byte, perché su questo PC `sizeof(double)` vale 8. La variabile dev'essere un `double*`.
:::

> [!RICORDA]
> - `malloc(n * sizeof(T))`: `n` elementi di tipo `T`, contigui, non inizializzati. Ritorna `NULL` se non c'è memoria.
> - Dopo `malloc` si controlla il risultato.
> - `free(p); p = NULL;`, sempre insieme.
> - Ogni `malloc` ha la sua `free`.

## I blocchi nello heap, passo per passo (slide 18–19)

Le slide seguono sei istruzioni guardando che cosa succede nello heap:

```c
int* p1 = malloc(20);
int* p2 = malloc(32);
double* p3 = malloc(16);
free(p2); p2 = NULL;
char* p4 = malloc(20);
free(p1); p1 = NULL;
```

| Dopo l'istruzione | Blocchi nello heap | `p1` | `p2` | `p3` | `p4` |
|---|---|---|---|---|---|
| `p1 = malloc(20)` | 1 | blocco 1 | ?? | ?? | ?? |
| `p2 = malloc(32)` | 1, 2 | blocco 1 | blocco 2 | ?? | ?? |
| `p3 = malloc(16)` | 1, 2, 3 | blocco 1 | blocco 2 | blocco 3 | ?? |
| `free(p2); p2 = NULL` | 1, 3 | blocco 1 | `NULL` | blocco 3 | ?? |
| `p4 = malloc(20)` | 1, 3, 4 | blocco 1 | `NULL` | blocco 3 | blocco 4 |
| `free(p1); p1 = NULL` | 3, 4 | `NULL` | `NULL` | blocco 3 | blocco 4 |

Che cosa mostra:

- le variabili `p1`, …, `p4` stanno nello **stack**, nel frame di `main`; i blocchi stanno nello **heap**. Sono due cose diverse: il puntatore è la maniglia, il blocco è l'oggetto;
- ogni blocco vive per conto suo. Liberare il 2 non tocca l'1 e il 3;
- lo spazio liberato può essere riusato: nelle slide il blocco 4 finisce dove stava il 2. È una possibilità, non una garanzia: sul mio PC è finito da un'altra parte;
- alla fine il blocco 3 e il blocco 4 sono ancora allocati. Se il programma finisse così, sarebbero due blocchi mai liberati.

Lo stesso blocco di 20 byte è usato una volta come interi (`p1`, cinque `int`) e una volta come caratteri (`p4`): `malloc` dà byte, il tipo lo decide il puntatore.

::: prova Nella tabella, dopo la quarta istruzione, che cosa succede se scrivi `p2[0] = 7;`?
`p2` vale `NULL`: il programma termina con un errore di accesso alla memoria. Senza il `p2 = NULL`, la stessa istruzione avrebbe scritto in un blocco già restituito, senza nessun segnale.
:::

> [!RICORDA]
> - Il puntatore sta nello stack, il blocco nello heap.
> - Un blocco resta allocato finché non lo liberi, qualunque cosa succeda agli altri.
> - Dove finisce un blocco nuovo lo decide lo heap: non ci si conta.

## leggiArray con lo heap (slide 20–32)

Con `malloc` il problema iniziale si risolve cambiando una riga: l'array non è più una variabile locale, è un blocco nello heap.

```c
#include <stdlib.h>
#include <stdio.h>

int* leggiArray(size_t* out_n) {
    size_t n;
    scanf("%zu", &n);
    int* a = malloc(n * sizeof(int));
    for (size_t i = 0; i < n; i++)
        scanf("%d", &a[i]);
    *out_n = n;
    return a;
}

int main(void) {
    size_t aLen;
    int* a = leggiArray(&aLen);
    for (size_t i = 0; i < aLen; i++)
        printf("a[%zu] = %d\n", i, a[i]);
    free(a); a = NULL;
}
```

Scrivendo `3` e poi `10 20 30`, stampa:

```text
a[0] = 10
a[1] = 20
a[2] = 30
```

Ora `return a` è corretto. La variabile `a` di `leggiArray` è locale e sparisce, ma quello che viene ritornato è il suo **valore**, cioè l'indirizzo del blocco. Il blocco sta nello heap e il ritorno della funzione non lo tocca.

```grafico
titolo: La memoria dopo il ritorno di leggiArray. Il frame della funzione non c'è più, ma il blocco nello heap sì. La variabile a di main contiene il suo indirizzo: il puntatore è valido
x: 0 12
y: 0 5.6
assi: no
griglia: no
proporzioni: libere
testo: 2.4 5.2 | blu | "stack"
poligono: 0.6 1.6 4.2 1.6 4.2 4.6 0.6 4.6 | blu | tenue
testo: 2.4 4.1 | blu | "main"
poligono: 1.0 2.9 3.8 2.9 3.8 3.7 1.0 3.7 | blu
testo: 2.4 3.3 | blu | "aLen: 3"
poligono: 1.0 1.9 3.8 1.9 3.8 2.7 1.0 2.7 | blu
testo: 2.4 2.3 | blu | "a: •"
testo: 8.8 5.2 | verde | "heap"
poligono: 6.8 1.9 8.1 1.9 8.1 2.7 6.8 2.7 | verde | tenue
poligono: 8.1 1.9 9.4 1.9 9.4 2.7 8.1 2.7 | verde | tenue
poligono: 9.4 1.9 10.7 1.9 10.7 2.7 9.4 2.7 | verde | tenue
testo: 7.45 2.3 | verde | "10"
testo: 8.75 2.3 | verde | "20"
testo: 10.05 2.3 | verde | "30"
testo: 7.45 1.4 | grigio | "a[0]"
testo: 8.75 1.4 | grigio | "a[1]"
testo: 10.05 1.4 | grigio | "a[2]"
freccia: 3.2 2.3 6.7 2.3 | ambra
testo: 8.75 3.3 | verde | "3 * sizeof(int) byte"
```

Seguendo le slide, la memoria passa per questi stati:

| Momento | Stack | Heap |
|---|---|---|
| in `main`, prima della chiamata | `aLen: ??`, `a: ??` | vuoto |
| in `leggiArray`, dopo `malloc` | in più il frame con `n: 3`, `a:` indirizzo | un blocco di 3 interi, `?? ?? ??` |
| dopo il ciclo di lettura | uguale | `10 20 30` |
| dopo il `return` | solo `main`: `aLen: 3`, `a:` indirizzo | `10 20 30` |
| dopo `free(a); a = NULL` | `aLen: 3`, `a: NULL` | vuoto |

La `malloc` è in una funzione e la `free` in un'altra. È normale, ed è il motivo per cui lo heap esiste: il blocco deve vivere più a lungo della funzione che lo crea.

> [!NOTA] La versione con i controlli
> Il codice delle slide è ridotto al minimo per seguire la memoria. Una versione da esercizio controlla la lettura, il caso `n == 0` e il risultato di `malloc`, con una sola `return`:
>
> ```c
> int* leggiArray(size_t* out_n) {
>     size_t n = 0;
>     int* a = NULL;
>     *out_n = 0;
>     if (scanf("%zu", &n) == 1 && n > 0) {
>         a = malloc(n * sizeof(int));
>         if (a != NULL) {
>             for (size_t i = 0; i < n; i++) {
>                 scanf("%d", &a[i]);
>             }
>             *out_n = n;
>         }
>     }
>     return a;
> }
> ```
>
> Se qualcosa va storto ritorna `NULL` con lunghezza 0, e il `main` di prima funziona lo stesso: il ciclo non fa giri e `free(NULL)` non fa niente.

::: prova Nel `main`, che cosa succede se togli la riga `free(a); a = NULL;`? Il programma stampa cose diverse?
Stampa le stesse cose. Ma il blocco resta allocato fino alla fine del programma: è un memory leak. In un programma così corto non si nota; in uno che gira a lungo sì.
:::

> [!RICORDA]
> - Si ritorna l'indirizzo del blocco: il blocco è nello heap e sopravvive al ritorno.
> - `malloc` in una funzione, `free` in un'altra: è il caso normale.
> - Negli esercizi: controllo di `malloc`, una sola `return`.

## Gli errori tipici (slide 33–38)

La memoria dinamica si gestisce solo attraverso i puntatori, e niente controlla che lo si faccia bene. Amparore lo riassume così: «Chi semina `malloc`, raccoglie memory leaks», intendendo le `malloc` senza la loro `free`.

> [!DEF] Memory leak (slide 33)
> Un **memory leak**, o perdita di memoria, è un blocco allocato che non viene mai liberato. Il caso peggiore è il blocco di cui si è perso l'indirizzo: non è più raggiungibile, e non si può più liberare.

**Come si legge.** Il blocco resta occupato fino alla fine del programma. Non c'è nessun errore visibile: il programma usa solo più memoria del necessario. Se la perdita è dentro un ciclo, la memoria usata cresce a ogni giro finché finisce.

I sei errori delle slide, con quello che dice gcc quando dice qualcosa:

**1. Allocare senza liberare.**

```c
void f(void) {
    int* a = malloc(100 * sizeof(int));
    // uso dell'array
} // MEMORY LEAK: manca free(a)
```

Al ritorno di `f` la variabile `a` sparisce, ed era l'unica a contenere l'indirizzo. Il blocco resta nello heap, irraggiungibile. gcc non dice niente. Per trovare questi errori esistono strumenti appositi, come Valgrind.

**2. Perdere l'indirizzo prima di liberare.**

```c
int* p = malloc(10 * sizeof(int));
p = malloc(20 * sizeof(int)); // MEMORY LEAK: il primo blocco è perso per sempre
```

Il secondo assegnamento sovrascrive l'unico indirizzo del primo blocco. Anche qui gcc non dice niente.

**3. Usare un puntatore dopo la free.**

```c
int* p = malloc(sizeof(int));
*p = 5;
free(p);
printf("%d\n", *p); // ERRORE: uso di memoria già liberata
```

Dopo la `free`, `p` è un puntatore appeso. Il comportamento è indefinito: può sembrare che funzioni. In questo caso diretto gcc se ne accorge:

```text
uaf.c:8:5: error: pointer 'p' used after 'free' [-Werror=use-after-free]
    8 |     printf("%d\n", *p); // ERRORE: uso di memoria gia' liberata
      |     ^~~~~~~~~~~~~~~~~~
uaf.c:7:5: note: call to 'free' here
```

**4. Liberare due volte lo stesso blocco.**

```c
int* p = malloc(sizeof(int));
free(p);
free(p); // ERRORE: doppia free
```

La seconda `free` restituisce una zona già restituita: il programma può terminare subito o rovinare la struttura interna dello heap. gcc dà lo stesso messaggio di prima, `pointer 'p' used after 'free'`. Con `p = NULL` dopo la prima, la seconda sarebbe una `free(NULL)`, che non fa danni.

**5. Leggere memoria non inizializzata.**

```c
int* a = malloc(5 * sizeof(int));
printf("%d", a[0]); // ERRORE: a[0] non è stato inizializzato
```

`malloc` riserva il blocco ma non ci scrive niente: finché non assegni un valore, quello che leggi è indeterminato. gcc, in questo caso diretto:

```text
noninit.c:6:5: error: '*a' is used uninitialized [-Werror=uninitialized]
```

**6. Fare ipotesi sugli indirizzi.**

```c
int* p1 = malloc(sizeof(int));
int* p2 = malloc(sizeof(int));
p1[0] = 10;
p1[1] = 20; // ERRORE: non sto accedendo a p2
```

La contiguità è garantita **dentro** un blocco, non tra due blocchi. Sul mio PC, in una prova, i due blocchi sono finiti a quasi 26 000 byte di distanza. `p1[1]` scrive fuori dal blocco di `p1`, in memoria che non è sua.

> [!TRAPPOLA] Il compilatore vede solo i casi diretti
> I messaggi di sopra compaiono perché `free` e uso sbagliato sono nella stessa funzione, uno sotto l'altro. Appena il puntatore passa per un'altra funzione o per un `if`, gcc non riesce più a seguirlo e non avvisa. E sui memory leak non avvisa mai. Che il programma si compili non dice niente sulla gestione della memoria.

::: prova Che errore c'è in `int* a = malloc(4 * sizeof(int)); a = a + 1; free(a);`?
`free` riceve un indirizzo che non è quello dato da `malloc`: è spostato di un elemento. Il comportamento è indefinito. A `free` va passato l'indirizzo del primo byte del blocco, quindi il puntatore originale va conservato.
:::

> [!RICORDA]
> - Leak: blocco mai liberato, o indirizzo perso.
> - Dopo `free`: niente uso, niente seconda `free`. `p = NULL` protegge da tutti e due.
> - La memoria di `malloc` va inizializzata prima di leggerla.
> - Due blocchi diversi non sono vicini.

## Stack o heap? (slide 39)

Con due posti dove mettere i dati serve un criterio. Quello delle slide:

| Nello heap | Nello stack |
|---|---|
| i dati di dimensione non nota in anticipo: array, matrici, strutture | le variabili locali piccole |
| i dati che devono sopravvivere alla funzione che li crea | puntatori, indici, contatori |
| | gli array di dimensione fissa o limitata |

Lo stack è comodo perché si gestisce da solo, ma è piccolo, di solito pochi megabyte, e ogni cosa ci vive solo quanto il suo blocco. Lo heap è grande e i suoi blocchi vivono quanto vuoi, ma ogni blocco è una responsabilità.

Prima dello standard C99 i VLA non esistevano: anche per un piccolo array di dimensione decisa durante l'esecuzione bisognava usare lo heap.

::: prova Dove metti: (a) un contatore `size_t i`; (b) un array la cui lunghezza viene letta da tastiera e che va restituito al chiamante; (c) un array di 7 temperature usato solo dentro la funzione?
(a) Stack. (b) Heap: la dimensione non è nota e deve sopravvivere al ritorno. (c) Stack: dimensione fissa e piccola, vita limitata alla funzione.
:::

> [!RICORDA]
> - Heap: dimensione non nota in anticipo, o vita più lunga della funzione.
> - Stack: variabili piccole e array di dimensione fissa.

## Selezione con copia in tre fasi (slide 40–47)

La selezione della [07A](07A_algoritmi_su_array.html) copia in un secondo array gli elementi che rispettano una condizione. Lì il secondo array aveva una capacità fissata prima, e bisognava controllare di non superarla. Con lo heap l'array del risultato si può creare **della misura esatta**.

> [!DEF] Selezione (slide 42)
> Presi un array `b` di lunghezza `bLen` e una condizione `Cond`, la **selezione** copia in un altro array `a` tutti e soli gli elementi `b[i]` per cui `Cond(b[i])` è vera, nello stesso ordine.

**Come si legge.** «Tutti e soli»: nessuno di quelli che rispettano la condizione resta fuori, e nessun altro entra. La lunghezza di `a` non si conosce finché non si è guardato tutto `b`: per questo le fasi sono tre.

1. **Calcolo della dimensione.** Si scorre `b` senza copiare niente, contando quanti elementi rispettano la condizione. Il risultato `count` è la lunghezza esatta del nuovo array.
2. **Allocazione.** Si chiede allo heap un array di `count` elementi.
3. **Selezione e copia.** Si scorre `b` una seconda volta e si copia ogni elemento buono nel primo posto libero di `a`. Servono due indici: `i` per `b`, `j` per `a`.

```grafico
titolo: La selezione dei numeri pari da b verso un array nuovo nello heap. Prima si conta: i pari sono 3. Poi si alloca un blocco di 3 interi. Poi si copia: l'indice i scorre tutto b, l'indice j avanza solo quando si copia
x: 0 11
y: 0 5.6
assi: no
griglia: no
proporzioni: libere
testo: 0.7 4.3 | blu | "b"
poligono: 1.4 3.8 2.8 3.8 2.8 4.8 1.4 4.8 | ambra | tenue
poligono: 2.8 3.8 4.2 3.8 4.2 4.8 2.8 4.8 | grigio | tenue
poligono: 4.2 3.8 5.6 3.8 5.6 4.8 4.2 4.8 | grigio | tenue
poligono: 5.6 3.8 7.0 3.8 7.0 4.8 5.6 4.8 | ambra | tenue
poligono: 7.0 3.8 8.4 3.8 8.4 4.8 7.0 4.8 | ambra | tenue
testo: 2.1 4.3 | ambra | "12"
testo: 3.5 4.3 | grigio | "1"
testo: 4.9 4.3 | grigio | "3"
testo: 6.3 4.3 | ambra | "4"
testo: 7.7 4.3 | ambra | "8"
testo: 9.6 4.3 | blu | "stack"
testo: 0.7 1.3 | verde | "a"
poligono: 1.4 0.8 2.8 0.8 2.8 1.8 1.4 1.8 | verde | tenue
poligono: 2.8 0.8 4.2 0.8 4.2 1.8 2.8 1.8 | verde | tenue
poligono: 4.2 0.8 5.6 0.8 5.6 1.8 4.2 1.8 | verde | tenue
testo: 2.1 1.3 | verde | "12"
testo: 3.5 1.3 | verde | "4"
testo: 4.9 1.3 | verde | "8"
testo: 6.8 1.3 | verde | "heap"
freccia: 2.1 3.7 2.1 1.9 | ambra
freccia: 6.3 3.7 3.6 1.9 | ambra
freccia: 7.7 3.7 5.0 1.9 | ambra
testo: 9.0 2.7 | grigio | "count = 3"
```

La funzione delle slide, `selectCopy`:

```c
int* selectCopy(size_t bLen, const int b[], size_t* out_len) {
    assert(bLen == 0 || b != NULL);
    assert(out_len != NULL);
    *out_len = 0;
    int* a = NULL;

    // 1) Calcolo della dimensione
    size_t count = 0;
    for (size_t i = 0; i < bLen; i++)
        if (Cond(b[i]))
            count++;

    // 2) Allocazione
    if (count > 0) {
        a = malloc(count * sizeof(int));
        if (a != NULL) {
            // 3) Selezione e copia
            size_t j = 0;
            for (size_t i = 0; i < bLen; i++) {
                if (Cond(b[i])) {
                    a[j] = b[i];
                    j++;
                }
            }
            assert(count == j);
            *out_len = count;
        }
    }
    return a;
}
```

Con `Cond(x)` uguale a `x % 2 == 0` e `b = {12, 1, 3, 4, 8}`, il programma delle slide stampa:

```text
Selezionati 3 elementi:
a[0] = 12
a[1] = 4
a[2] = 8
```

Come è costruita:

- **I valori di partenza sono già la risposta del caso peggiore**: `*out_len = 0` e `a = NULL`. Se niente va a buon fine, non serve toccarli. È lo stesso modo di ragionare delle sentinelle della 07A.
- **Il caso limite**: se nessun elemento è selezionato, `count` è 0, non si alloca niente e la funzione ritorna `NULL` con lunghezza 0. L'ho provato con `{1, 3, 5}` e con l'array vuoto.
- **Il controllo di `malloc`**: la copia si fa solo se `a != NULL`.
- **`assert(count == j)`**: le due scansioni devono aver trovato lo stesso numero di elementi. È un controllo sul programma, non sui dati: se fallisse, ci sarebbe un errore nel codice.
- **Una sola `return`**, alla fine: va bene per le regole d'esame.
- **`const int b[]`**: la funzione legge `b` e non lo modifica.

Nel `main` delle slide, dopo la stampa, c'è `free(a); a = NULL;`. Funziona anche quando `a` è `NULL`.

::: prova Con `b = {5, 6, 7, 8, 10}` e la stessa condizione, quanto vale `count` dopo la prima fase? Che cosa contiene `a` alla fine, e quanto vale `j`?
`count` vale 3. `a` contiene 6, 8, 10 e `j` vale 3: per questo l'`assert` passa.
:::

> [!RICORDA]
> - Tre fasi: conta, alloca, copia.
> - Due scansioni di `b`, due indici nella copia.
> - Nessun elemento selezionato: `NULL` e lunghezza 0.
> - Il chiamante deve fare la `free`.

## Di chi è il blocco: la responsabilità (slide 48–50)

`selectCopy` alloca un blocco e non lo libera. Non è un leak, perché lo consegna a qualcuno: chi l'ha chiamata.

> [!DEF] Responsabilità della memoria (slide 48)
> Per ogni blocco allocato c'è un punto del programma che ha la **responsabilità** (*ownership*) di liberarlo. Chi chiama `malloc` ce l'ha per primo; ritornando il puntatore la **trasferisce** al chiamante, che può trasferirla ancora. L'ultimo che usa il blocco chiama `free`.

**Come si legge.** È una convenzione tra chi scrive una funzione e chi la usa, e il linguaggio non la controlla. Per questo va scritta nel commento della funzione: «ritorna un array allocato nello heap; il chiamante deve liberarlo con `free`». In ogni momento un blocco ha un solo responsabile: così non viene liberato due volte e non viene dimenticato.

Lo fa anche la libreria standard. `strdup`, in `<string.h>`, crea nello heap una copia di una stringa, terminatore compreso, e ne ritorna l'indirizzo: chi la chiama deve fare la `free`.

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

int main(void) {
    const char* src = "Programmazione 1";
    char* copy = strdup(src);  // copia nello heap
    assert(copy != NULL);
    printf("Originale: %s\nCopia: %s\n", src, copy);
    free(copy); copy = NULL; // il chiamante è responsabile della deallocazione
}
```

Stampa due volte `Programmazione 1`. La copia è un blocco diverso dall'originale: ho controllato che i due indirizzi sono diversi, e cambiando `copy[0]` l'originale resta com'era.

Nelle slide manca la riga `#include <assert.h>`. Senza, gcc dice:

```text
strdup_slide.c:8:5: error: implicit declaration of function 'assert' [-Wimplicit-function-declaration]
strdup_slide.c:4:1: note: 'assert' is defined in header '<assert.h>'; this is probably fixable by adding '#include <assert.h>'
```

In Programmazione II e in Algoritmi la memoria dinamica servirà per le strutture dati che cambiano dimensione e non sono contigue: liste, alberi, grafi.

::: prova Una funzione `int* creaTabella(size_t n)` ritorna un array allocato con `malloc`. Chi la chiama la usa così: `stampa(n, creaTabella(n));`. Che cosa non va?
L'indirizzo ritornato viene passato a `stampa` e non viene salvato da nessuna parte: dopo la chiamata nessuno può più fare la `free`. È un memory leak. Bisogna salvare il puntatore in una variabile, usarlo, e poi liberarlo.
:::

> [!RICORDA]
> - Ogni blocco ha un responsabile, che deve liberarlo.
> - Ritornare il puntatore trasferisce la responsabilità al chiamante.
> - Va scritto nel commento della funzione.
> - `strdup` alloca: dopo serve una `free`.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `malloc(sz)` | «malloc di sz» | chiede `sz` byte contigui nello heap; ritorna l'indirizzo o `NULL` | `malloc(3 * sizeof(int))` |
| `free(p)` | «free di p» | restituisce il blocco di indirizzo `p` | `free(a); a = NULL;` |
| `sizeof(T)` | «sizeof di T» | quanti byte occupa un valore di tipo `T` | `sizeof(int)` vale 4 su questo PC |
| `void*` | «puntatore a void» | un indirizzo senza un tipo | il risultato di `malloc` |
| `NULL` | «null» | il puntatore che non indica niente | `if (a == NULL)` |
| `size_t* out_len` | «puntatore a size_t» | parametro di uscita per una lunghezza | `*out_len = count;` |
| `??` | «valore sconosciuto» | memoria non inizializzata, nei disegni | il blocco appena allocato |

## Verso l'esame

All'esame si scrive al PC con CodeRunner, e le funzioni vengono compilate con `-Wall -Werror`. Le regole restano quelle di sempre: una sola `return` nelle funzioni iterative, niente `break`. Di questa lezione servono:

1. **lo schema a tre fasi** per restituire un array nuovo: conta, alloca, copia, con la lunghezza in un parametro di uscita;
2. **il controllo di `malloc`** e il caso in cui non c'è niente da restituire;
3. **non ritornare mai l'indirizzo di una variabile locale**: con `-Werror` è un errore di compilazione, e l'esercizio vale zero;
4. **disegnare stack e heap** dopo una serie di istruzioni: è il modo più sicuro per trovare leak e puntatori appesi, ed era un esercizio fisso negli esami degli anni in cui il corso si faceva in Java.

### Una domanda sul modello, letta insieme

Nella [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md) questa tipologia c'è per il canale C del 2025/26: una funzione che restituisce un array allocato e la lunghezza in un parametro di uscita. Un testo d'esame vero non ce l'ho; questo è nello stesso stile.

«Scrivere una funzione `e3` che riceve un array di interi (`aLen`, `a`) e restituisce un nuovo array, allocato nello heap, con gli elementi strettamente positivi di `a`, nell'ordine in cui compaiono. La lunghezza del nuovo array va scritta in `*out_len`. Se non ci sono elementi positivi, `e3` restituisce `NULL` e scrive 0.»

**In pratica chiede:** `selectCopy` con la condizione `x > 0`.

**Soluzione.**

1. Valori di partenza: risultato `NULL`, `*out_len = 0`.
2. Prima scansione: conto i positivi.
3. Se ce ne sono, alloco `count * sizeof(int)` byte e controllo il risultato.
4. Seconda scansione: copio con un secondo indice.
5. Una sola `return`.

```c
int* e3(size_t aLen, const int a[], size_t* out_len) {
    int* p = NULL;
    size_t count = 0;
    *out_len = 0;
    for (size_t i = 0; i < aLen; i++) {
        if (a[i] > 0) {
            count++;
        }
    }
    if (count > 0) {
        p = malloc(count * sizeof(int));
        if (p != NULL) {
            size_t j = 0;
            for (size_t i = 0; i < aLen; i++) {
                if (a[i] > 0) {
                    p[j] = a[i];
                    j++;
                }
            }
            *out_len = count;
        }
    }
    return p;
}
```

Provata: con `{7, -2, 0, 9}` ritorna un array di 2 elementi, 7 e 9. Lo zero non è strettamente positivo.

> [!METODO] Una funzione che restituisce un array nuovo
> 1. Prototipo: ritorna `int*`, riceve la lunghezza di uscita come `size_t* out_len`.
> 2. Parti dal caso peggiore: puntatore `NULL`, lunghezza 0.
> 3. Calcola quanti elementi servono.
> 4. `malloc(count * sizeof(int))`, e continua solo se il risultato non è `NULL`.
> 5. Riempi **tutte** le caselle: quello che `malloc` dà non è inizializzato.
> 6. Scrivi la lunghezza, ritorna il puntatore, e nel commento di' che il chiamante deve fare la `free`.

### Errori da evitare

- Ritornare un array locale o un VLA.
- Scrivere `malloc(n)` invece di `malloc(n * sizeof(int))`: alloca `n` byte, non `n` interi.
- Dimenticare la `free`, o farla nella funzione che deve restituire l'array.
- Usare il puntatore dopo la `free`.
- Passare a `free` un puntatore spostato rispetto a quello dato da `malloc`.
- Leggere il blocco prima di averci scritto.

## Quiz

```quiz
D: Che cosa ritorna al chiamante una funzione che fa `int a[n]; ... return a;`?
+ un puntatore appeso: l'indirizzo di un array che dopo il ritorno non esiste più
- una copia dell'array
- un puntatore a un blocco nello heap
- `NULL`
- l'array stesso, che resta valido finché il chiamante lo usa
= L'array è nel frame della funzione, che viene tolto dallo stack al ritorno. La più insidiosa è «una copia dell'array»: in C un array non si copia con `return`; quello che viaggia è l'indirizzo del primo elemento.

D: Quale istruzione alloca un array di 10 interi nello heap?
+ `int* a = malloc(10 * sizeof(int));`
- `int* a = malloc(10);`
- `int a[10] = malloc(sizeof(int));`
- `int* a = malloc(sizeof(10));`
- `int a = malloc(10 * sizeof(int));`
= `malloc` vuole il numero di byte: 10 volte la misura di un intero. La più insidiosa è `malloc(10)`: si compila, ma alloca 10 byte, che bastano per due interi e mezzo.

D: Che cosa contiene il blocco subito dopo `int* a = malloc(5 * sizeof(int));`?
+ valori indeterminati
- cinque zeri
- cinque volte `NULL`
- i valori dell'ultimo array liberato
- niente: il blocco è vuoto finché non ci si scrive
= `malloc` riserva la memoria e non la inizializza. La più insidiosa è «cinque zeri»: a volte succede davvero, per caso, e il programma sembra funzionare.

D: Dopo `free(p);`, che cosa vale `p`?
+ lo stesso indirizzo di prima, che ora non è più valido
- `NULL`
- 0
- l'indirizzo del prossimo blocco libero
- un valore indeterminato
= `free` riceve una copia dell'indirizzo e non può cambiare la variabile. Per questo si scrive `p = NULL` subito dopo. La più insidiosa è `NULL`: è quello che vorresti, ma devi farlo tu.

D: Quale di questi frammenti produce un memory leak?
+ `int* p = malloc(8); p = malloc(16); free(p);`
- `int* p = malloc(8); free(p); p = NULL;`
- `int* p = NULL; free(p);`
- `int* p = malloc(8); int* q = p; free(q);`
- `int x = 3; int* p = &x;`
= Il primo blocco perde il suo unico indirizzo quando `p` viene riassegnato. La più insidiosa è `int* p = malloc(8); int* q = p; free(q);`: `q` e `p` contengono lo stesso indirizzo, e una sola `free` basta, con uno qualunque dei due.

D: Nel programma `int* p1 = malloc(20); int* p2 = malloc(32); double* p3 = malloc(16); free(p2); char* p4 = malloc(20); free(p1);`, quanti blocchi sono ancora allocati alla fine?
N: 2
= Quattro `malloc` e due `free`: restano i blocchi di `p3` e di `p4`.

D: In `selectCopy`, con `b = {12, 1, 3, 4, 8}` e la condizione «pari», quanti byte chiede la `malloc`, se `sizeof(int)` vale 4?
N: 12
= I pari sono tre: 12, 4 e 8. Tre interi da 4 byte.

D: Una funzione ritorna un array allocato con `malloc`. Chi deve chiamare `free`?
+ il chiamante, quando l'array non gli serve più
- la funzione stessa, prima della `return`
- nessuno: lo heap si libera da solo al ritorno
- il sistema operativo, a ogni chiamata
- chiunque, anche più volte
= La funzione trasferisce la responsabilità del blocco a chi la chiama. La più insidiosa è «la funzione stessa, prima della `return`»: se la funzione liberasse il blocco prima di ritornarlo, il chiamante riceverebbe un puntatore appeso.
```

## Esercizi

::: esercizio base Riscaldamento: stack o heap
Per ogni riga di' dove sta l'oggetto nominato: (a) la variabile `p` in `int* p = malloc(4 * sizeof(int));` dentro `main`; (b) i quattro interi; (c) `size_t n` dichiarata in una funzione; (d) l'array `int v[3]` dichiarato in una funzione.
::: soluzione
(a) Nello stack, nel frame di `main`: è una variabile locale, anche se contiene un indirizzo dello heap. (b) Nello heap. (c) Nello stack. (d) Nello stack.
:::

::: esercizio base Riscaldamento: segui i blocchi
Per `int* a = malloc(8); int* b = malloc(8); int* c = a; free(a); a = NULL; b = malloc(8);` di' quanti blocchi sono allocati alla fine, quali sono persi e quali puntatori sono appesi.
::: soluzione
Tre `malloc` e una `free`: due blocchi allocati. Il secondo, quello che era di `b`, è **perso**: `b` è stato riassegnato senza liberarlo. `c` è **appeso**: contiene l'indirizzo del primo blocco, che è stato liberato attraverso `a`. Mettere `a = NULL` non ha protetto `c`.
:::

::: esercizio medio Copia di un array
Scrivi `int* copiaArray(size_t aLen, const int a[])`, che ritorna una copia di `a` nello heap, oppure `NULL` se `aLen` è 0 o manca la memoria.
::: soluzione
```c
int* copiaArray(size_t aLen, const int a[]) {
    int* c = NULL;
    if (aLen > 0) {
        c = malloc(aLen * sizeof(int));
        if (c != NULL) {
            for (size_t i = 0; i < aLen; i++) {
                c[i] = a[i];
            }
        }
    }
    return c;
}
```
Qui la lunghezza del risultato è quella di partenza: non serve la fase di conteggio. Provata: cambiando `c[0]` l'originale non cambia, perché sono due blocchi diversi.
:::

::: esercizio medio Concatenare due array
Scrivi `int* concatena(size_t aLen, const int a[], size_t bLen, const int b[], size_t* out_len)`: ritorna un array nuovo con gli elementi di `a` seguiti da quelli di `b`.
::: soluzione
```c
int* concatena(size_t aLen, const int a[], size_t bLen, const int b[], size_t* out_len) {
    int* c = NULL;
    *out_len = 0;
    if (aLen + bLen > 0) {
        c = malloc((aLen + bLen) * sizeof(int));
        if (c != NULL) {
            for (size_t i = 0; i < aLen; i++) {
                c[i] = a[i];
            }
            for (size_t i = 0; i < bLen; i++) {
                c[aLen + i] = b[i];
            }
            *out_len = aLen + bLen;
        }
    }
    return c;
}
```
Il secondo ciclo scrive a partire dal posto `aLen`. Provata con `{7, -2, 0, 9}` e `{5, 6}`: dà 7, −2, 0, 9, 5, 6.
:::

::: esercizio esame Trova gli errori
Di' tutti gli errori di memoria di questa funzione, e riscrivila.
```c
int* doppi(size_t n, const int a[]) {
    int* d = malloc(n);
    for (size_t i = 0; i <= n; i++)
        d[i] = 2 * a[i];
    free(d);
    return d;
}
```
::: soluzione
Quattro errori. **(1)** `malloc(n)` alloca `n` byte, non `n` interi. **(2)** Manca il controllo del risultato. **(3)** `i <= n` scrive `d[n]` e legge `a[n]`, fuori dai due array. **(4)** `free(d)` prima della `return`: il chiamante riceve un puntatore appeso. La `free` spetta al chiamante.
```c
int* doppi(size_t n, const int a[]) {
    int* d = NULL;
    if (n > 0) {
        d = malloc(n * sizeof(int));
        if (d != NULL) {
            for (size_t i = 0; i < n; i++) {
                d[i] = 2 * a[i];
            }
        }
    }
    return d;
}
```
:::

::: esercizio difficile Rovesciare in un array nuovo
Scrivi `int* rovescia(size_t aLen, const int a[])`, che ritorna un array nuovo con gli elementi di `a` in ordine inverso. Poi scrivi il `main` che la usa su `{7, -2, 0, 9}`, stampa il risultato e non perde memoria.
::: soluzione
```c
int* rovescia(size_t aLen, const int a[]) {
    int* r = NULL;
    if (aLen > 0) {
        r = malloc(aLen * sizeof(int));
        if (r != NULL) {
            for (size_t i = 0; i < aLen; i++) {
                r[i] = a[aLen - 1 - i];
            }
        }
    }
    return r;
}
```
Nel `main`: `int* r = rovescia(4, a);`, poi, se `r != NULL`, il ciclo di stampa, e alla fine `free(r); r = NULL;`. Provata: stampa 9, 0, −2, 7. L'indice `aLen - 1 - i` è sicuro perché si calcola solo con `i < aLen`: con `size_t` una sottrazione che va sotto zero darebbe un numero enorme.
:::

## Domande di ripasso

::: domanda Perché non si può ritornare un array locale?
Perché sta nel frame della funzione, che viene tolto dallo stack al ritorno: il chiamante riceverebbe un puntatore appeso.
:::

::: domanda Che cosa fa `malloc`, e che cosa ritorna?
Riserva nello heap il numero di byte chiesto, contigui e non inizializzati, e ritorna l'indirizzo del primo. Ritorna `NULL` se la memoria non c'è.
:::

::: domanda Perché dopo `free(p)` si scrive `p = NULL`?
Perché `p` contiene ancora il vecchio indirizzo. Con `NULL`, un uso sbagliato ferma subito il programma e una seconda `free` non fa danni.
:::

::: domanda Che cos'è un memory leak?
Un blocco allocato e mai liberato, per esempio perché si è perso il suo indirizzo.
:::

::: domanda Quali sono le tre fasi della selezione con copia?
Contare gli elementi da selezionare, allocare un array di quella misura, copiare gli elementi con un secondo indice.
:::

::: domanda Che cosa vuol dire che il chiamante ha la responsabilità del blocco?
Che la funzione gli ha consegnato il puntatore a un blocco allocato, e tocca a lui chiamare `free` quando non gli serve più.
:::

## Glossario

```glossario
Heap | Zona di memoria gestita a mano dal programma, con malloc e free.
Memoria dinamica | Memoria chiesta e restituita dal programma durante l'esecuzione.
malloc | Funzione di <stdlib.h> che riserva un blocco di byte contigui nello heap.
free | Funzione di <stdlib.h> che restituisce allo heap un blocco ottenuto con malloc.
Blocco | Una zona contigua dello heap ottenuta con una chiamata a malloc.
Puntatore appeso (dangling pointer) | Puntatore che contiene l'indirizzo di memoria non più valida.
Memory leak | Blocco allocato e mai liberato.
Doppia free | Liberare due volte lo stesso blocco: comportamento indefinito.
void* | Puntatore a una zona di memoria senza un tipo assegnato.
Responsabilità (ownership) | Il dovere di liberare un blocco; passa a chi riceve il puntatore.
```

## Checklist

```checklist
- So spiegare perché un array locale non si può ritornare.
- So che cos'è un puntatore appeso e riconosco i due modi in cui nasce.
- So disegnare codice, dati, heap e stack nel modello della memoria.
- So scrivere una malloc per n elementi di un tipo, con sizeof e con il controllo del risultato.
- So che la memoria di malloc non è inizializzata.
- So scrivere free seguita da NULL, e so perché.
- So riconoscere i sei errori tipici in un frammento di codice.
- So seguire una serie di malloc e free dicendo quali blocchi restano.
- So scrivere la selezione con copia in tre fasi, con una sola return.
- So dire chi deve liberare un blocco ritornato da una funzione.
```

## Fonti

- Slide «Memoria Dinamica. Gestione non automatica della memoria, lo heap e le funzioni malloc/free» (08A_memoria_dinamica), Programmazione I – Teoria, canale B, prof. Elvio Amparore, A.A. 2026/27: 50 pagine. Sul Moodle del corso sono nella settimana del 16 novembre.
- Tutti i programmi sono stati compilati con gcc 16.1 (`-Wall -Werror`) ed eseguiti; i messaggi di errore riportati sono quelli veri del compilatore.
- [Raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md), tipologia «heap».
