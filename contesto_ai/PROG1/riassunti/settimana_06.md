---
corso: PROG1
lezione: S6
tipo: riassunto
titolo: "Settimana 6: chiamata di funzione, puntatori come parametri e il laboratorio sulle stringhe"
data: 2026-11-04
docenti: Elvio Amparore
sopratitolo: Riassunto settimanale · Programmazione I · Canale B · 02/11 – 06/11/2026
descrizione: >-
  Riassunto della settimana 6 di Programmazione I (canale B): il Laboratorio 05 su array e stringhe, con i contatori
  per categoria, le due passate, le stringhe e ctype.h; le due lezioni sulla 06B, con lo stack delle chiamate, i
  frame, il passaggio per valore, lo scambio con i puntatori, array e stringhe come parametri, const, strncpy e le
  asserzioni.
lede: >-
  Le due lezioni e il laboratorio della settimana in poche pagine: che cosa succede in memoria quando si chiama una
  funzione, perché per cambiare una variabile del chiamante serve un puntatore, come si passa un array, e a che cosa
  servono le asserzioni.
materiale: slide
scheda:
  Lezioni: "[Lab05A](Lab05A_array_stringhe.html) lun 02/11 (B2) · [06B](06B_chiamata_funzioni.html) mar 03/11 e mer 04/11"
  Tempo di ripasso: 30 minuti
fonte: >-
  Gli appunti della lezione 06B e del Laboratorio 05 di Programmazione I (canale B), scritti sulle slide di
  E. G. Amparore e del laboratorio
appunti_html: appunti/PROG1/riassunto_settimana_06.html
genera_html: true
---

## In breve

- Ogni chiamata di funzione crea sullo **stack** un **frame** con i parametri e le variabili locali; al ritorno il frame viene tolto.
- I parametri sono **copie**: una funzione che scambia i suoi due parametri non scambia le variabili del chiamante. Per farlo riceve i loro **indirizzi**.
- Un **array** passato a una funzione arriva come puntatore al primo elemento: la lunghezza va passata a parte. Con `const` la funzione promette di non modificarlo.
- Le **stringhe** arrivano come `const char *` e finiscono a `'\0'`: `strlen` e `strcmp` contano su quello, e `strncpy` può lasciare una stringa senza terminatore.
- Un'**asserzione**, `assert(condizione)`, ferma il programma quando una cosa che deve essere vera non lo è: serve per gli errori del programmatore, non per l'input.
- Nel laboratorio: contatori per categoria con `frequenze[v - 1]++`, stringhe con il terminatore, e le funzioni di `ctype.h`, che restituiscono un valore diverso da zero, non per forza 1.

> [!NOTA] Le lezioni della settimana
> Amparore ha usato le slide 06B in tutte e due le lezioni, martedì 03/11 e mercoledì 04/11: sul Moodle del corso ci sono le due registrazioni. Le slide 07A sugli algoritmi su array sono della settimana dopo (10/11). Il Laboratorio 05 il turno B2 l'ha fatto lunedì 02/11 con Elisa Marengo; il turno B1, che il 03/11 ha recuperato il Lab04, una settimana dopo.

## Lab05A · Array e stringhe (lun 02/11)

Il laboratorio mette in pratica la 05A. Le idee che restano:

- **Contare per categoria.** Per sapere quante volte compare ogni voto da 1 a 5 si usa un array di 5 contatori a zero, e per ogni voto `v` si fa `frequenze[v - 1]++`. Il valore sceglie il contatore.
- **Due passate.** Se la decisione su ogni elemento dipende da un dato che si conosce solo alla fine, come il minimo di tutta la sequenza, i dati vanno memorizzati in un array e scorsi una seconda volta.
- **Stringhe.** Una stringa è un array di `char` chiuso da `'\0'`. Per 20 caratteri servono 21 posti, e si legge con `%20s`, senza `&`. Si copia carattere per carattere, e poi si scrive il terminatore.
- **`ctype.h`.** `isdigit`, `isupper`, `isalpha` dicono che tipo di carattere è. Restituiscono un `int` **diverso da zero**: con gcc 16 su Windows `islower('q')` vale 2. Per stampare 0 o 1 si passa da un `bool`.

::: prova Con i voti `1 3 3 5 1 3`, che cosa contiene `frequenze` alla fine?
`{2, 0, 3, 0, 1}`: due 1, tre 3, un 5.
:::

> [!RICORDA]
> - `frequenze[v - 1]++`: il valore fa da indice.
> - Stringa: un posto in più per `'\0'`, e chi la costruisce scrive il terminatore.
> - `ctype.h`: diverso da zero, non 1.

## 06B · Chiamata e ritorno (mar 03/11 e mer 04/11)

Quando un programma chiama una funzione, deve ricordare dove tornare e dove tenere parametri e variabili locali. Lo fa con lo **stack delle chiamate**: una pila in cui ogni chiamata aggiunge un blocco, il **frame**, e ogni ritorno lo toglie. In cima alla pila c'è sempre la funzione in esecuzione.

- **La chiamata**: si calcolano gli argomenti, si crea il frame della funzione chiamata, si copiano i valori nei parametri, e l'esecuzione salta al suo codice.
- **Il ritorno**: il valore restituito viene consegnato al chiamante, il frame viene tolto, e si riprende dall'istruzione dopo la chiamata. Le variabili locali della funzione non esistono più.
- **Passaggio per valore**: nei parametri finiscono **copie**. Modificare un parametro non tocca la variabile del chiamante.

::: prova `main` chiama `f`, e `f` chiama `g`. Mentre gira `g`, quanti frame ci sono sullo stack, e in che ordine vengono tolti?
Tre: `main` sotto, poi `f`, poi `g` in cima. Si toglie prima quello di `g`, poi quello di `f`: l'ultimo arrivato è il primo ad andarsene.
:::

> [!RICORDA]
> - Una chiamata, un frame; al ritorno il frame sparisce con le sue variabili.
> - Nei parametri finiscono copie dei valori.

## 06B · Puntatori, array e asserzioni

Una funzione che scambia i suoi due parametri non scambia niente per chi l'ha chiamata. `swapSbagliato(int a, int b)` scambia le sue copie e poi sparisce con il suo frame. `swap(int *a, int *b)` riceve gli indirizzi e scrive, con l'asterisco, nelle variabili del chiamante.

```grafico
titolo: Lo stack durante `swap(&x, &y)`. In basso il frame di `main`, con x e y. In alto il frame di `swap`: a e b non contengono numeri ma gli indirizzi di x e y (frecce). Scrivendo in `*a` e `*b` la funzione cambia le caselle di `main`
x: 0 12.4
y: 0 5.0
assi: no
griglia: no
proporzioni: libere
poligono: 3.0 0.4 9.4 0.4 9.4 2.0 3.0 2.0 | blu | tenue
testo: 1.6 1.2 | blu | "main"
poligono: 4.0 0.8 5.6 0.8 5.6 1.6 4.0 1.6 | blu | pieno
testo: 4.8 1.2 | blu | "x: 3"
poligono: 6.8 0.8 8.4 0.8 8.4 1.6 6.8 1.6 | blu | pieno
testo: 7.6 1.2 | blu | "y: 8"
poligono: 3.0 2.8 9.4 2.8 9.4 4.4 3.0 4.4 | ambra | tenue
testo: 1.6 3.6 | ambra | "swap"
poligono: 4.0 3.2 5.6 3.2 5.6 4.0 4.0 4.0 | ambra | pieno
testo: 4.8 3.6 | ambra | "a"
poligono: 6.8 3.2 8.4 3.2 8.4 4.0 6.8 4.0 | ambra | pieno
testo: 7.6 3.6 | ambra | "b"
freccia: 4.8 3.1 4.8 1.7 | ambra
freccia: 7.6 3.1 7.6 1.7 | ambra
testo: 11.0 3.6 | grigio | "in cima"
```

- **Array come parametri**: il nome dell'array diventa un puntatore al primo elemento. Dentro la funzione `sizeof` dà la dimensione del puntatore, quindi la lunghezza si passa in un altro parametro.
- **`const`**: `const int v[]` rende l'array di sola lettura dentro la funzione; un tentativo di scrivere è un errore di compilazione.
- **Stringhe**: `strlen` dà la lunghezza senza il terminatore, `strcmp` confronta nell'ordine del dizionario, `strncpy` copia al massimo un certo numero di caratteri e può lasciare la stringa **senza terminatore**.
- **Asserzioni**: `assert(condizione)` ferma il programma se la condizione è falsa, e dice file e riga. Serve a controllare quello che deve essere vero in quel punto; con `-DNDEBUG` sparisce.

::: prova Dopo `int x = 3, y = 8; swapSbagliato(x, y); swap(&x, &y);`, quanto valgono `x` e `y`?
8 e 3. La prima chiamata non cambia niente, la seconda scambia.
:::

> [!RICORDA]
> - Per modificare una variabile del chiamante: indirizzo nella chiamata, asterisco nella funzione.
> - Array: puntatore più lunghezza, `const` se si legge soltanto.
> - `assert` per le ipotesi del programmatore; `-DNDEBUG` le spegne.

## Verso l'esame

- **Stato della memoria**: è uno dei due esercizi di teoria. Si disegnano i frame con parametri e variabili locali, e si seguono i puntatori: è la 06B.
- **Programmazione**: le funzioni d'esame ricevono array e stringhe come parametri, e restituiscono più risultati attraverso i puntatori.
- **Intestazioni**: la lunghezza prima dell'array, come in `bool f(size_t n, const int a[])`, e `const` dove si legge soltanto. Vanno copiate dal testo.
- **Stringhe**: il posto per il terminatore si conta sempre; dopo una copia fatta a mano o con `strncpy` il terminatore va scritto.
- Appelli 2026/27: lunedì 25/01/2027 e giovedì 11/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Che cosa contiene un frame, e quando viene tolto?
I parametri e le variabili locali di una chiamata, con le informazioni per tornare al chiamante. Viene tolto al ritorno della funzione.
:::

::: domanda Perché `swapSbagliato(x, y)` non scambia `x` e `y`?
Perché riceve copie dei due valori: scambia le copie nel suo frame, che al ritorno sparisce.
:::

::: domanda Perché dentro una funzione non si può usare `sizeof` per sapere la lunghezza di un array ricevuto?
Perché il parametro è un puntatore: `sizeof` dà la dimensione del puntatore.
:::

::: domanda Perché `strncpy` può lasciare una stringa senza terminatore?
Perché copia al massimo il numero di caratteri indicato: se la sorgente è lunga almeno quanto quel numero, il `'\0'` non viene copiato.
:::

::: domanda A che cosa serve `assert`, e a che cosa non serve?
A fermare il programma quando un'ipotesi del programmatore è falsa, cioè quando c'è un errore nel codice. Non serve per l'input sbagliato dell'utente, che va gestito con un controllo normale.
:::

::: domanda Come si contano le occorrenze di ogni voto da 1 a 5?
Con un array di 5 contatori a zero e, per ogni voto `v`, `frequenze[v - 1]++`.
:::

## Quiz d'esame

L'esame di Programmazione I non ha domande a crocette. Ha due esercizi di teoria su CodeRunner, «correttezza» e «stato della memoria», e tre di programmazione. Le domande qui sotto sono **sul modello** di questi esercizi, con gli argomenti della settimana. Ho compilato e provato tutto il codice con gcc 16.1 e `-Wall -Werror`.

```quiz
D: Sul modello dello stato della memoria. Con `int f(int a, int *p) { a = a + 1; *p = *p + a; return a * 2; }` e, nel `main`, `int u = 4, w = 10; int r = f(u, &w);`, quanto valgono `u`, `w` e `r` alla fine?
+ 4, 15, 10
- 5, 15, 10
- 4, 10, 10
- 5, 10, 8
- 4, 15, 8
= `a` è una copia di `u`: diventa 5 nel frame di `f`, e `u` resta 4. `*p` è `w`: diventa 10 + 5. Il ritorno è 5 · 2. La più insidiosa è la seconda, che fa cambiare anche `u`.

D: Sul modello dello stato della memoria. Mentre è in esecuzione `swap`, chiamata da `main` con `swap(&x, &y)`, quanti frame ci sono sullo stack e quale è in cima?
+ due, e in cima c'è quello di `swap`
- due, e in cima c'è quello di `main`
- uno solo, quello di `swap`
- uno solo, quello di `main`
- tre: `main`, `swap` e uno per i puntatori
= Il frame di `main` resta sotto, quello di `swap` viene aggiunto sopra e tolto al ritorno. La più insidiosa è la terza: il frame del chiamante non sparisce durante la chiamata.

D: Sul modello della correttezza. Dopo `int x = 3, y = 8; swapSbagliato(x, y);`, dove `void swapSbagliato(int a, int b) { int t = a; a = b; b = t; }`, che cosa stampa `printf("%d %d", x, y)`?
+ `3 8`
- `8 3`
- `3 3`
- `8 8`
- non compila
= La funzione scambia le sue copie. La più insidiosa è `8 3`: è quello che farebbe la versione con i puntatori.

D: Sul modello degli esercizi del Lab05A. Con `int risposte[] = {1, 3, 3, 5, 1, 3}` e `int freq[5] = {0}`, dopo `freq[risposte[i] - 1]++` per ogni `i`, quanto vale `freq[2]`?
N: 3
= `freq[2]` conta i voti uguali a 3, che sono tre.

D: Sul modello degli errori della 06B. Dopo `char t[6] = "cane"; t[2] = '\0';`, che cosa stampa `printf("%s", t)` e quanto vale `strlen(t)`?
+ stampa `ca`, e `strlen` vale 2
- stampa `cane`, e `strlen` vale 4
- stampa `ca e`, e `strlen` vale 4
- stampa `ca`, e `strlen` vale 6
- stampa `can`, e `strlen` vale 3
= La stringa finisce al primo terminatore, nella casella 2. La più insidiosa è l'ultima: il terminatore sostituisce la `n`, non viene dopo.

D: Sul modello degli errori della 06B. Con `char d[4];` e `const char *s = "ciao";`, che cosa c'è in `d` dopo `strncpy(d, s, 4)`?
+ i quattro caratteri `c`, `i`, `a`, `o`, senza terminatore
- `cia` seguito da `'\0'`
- `ciao` seguito da `'\0'`
- niente: `strncpy` non copia se non c'è posto
- quattro terminatori
= `strncpy` copia al massimo 4 caratteri, e il terminatore sarebbe il quinto. La più insidiosa è la seconda: sarebbe comodo, ma `strncpy` non accorcia la copia per fare posto al terminatore.

D: Sul modello degli errori del Lab05A. Con gcc 16 su Windows `islower('q')` vale 2. Quale condizione è scritta bene per «`c` è una lettera minuscola»?
+ `if (islower(c))`
- `if (islower(c) == 1)`
- `if (islower(c) == true)`
- `if (islower(c) == 'q')`
- `if (!islower(c))`
= Le funzioni di `ctype.h` restituiscono zero oppure un numero diverso da zero, non per forza 1. La più insidiosa è la terza: `true` vale 1, quindi è lo stesso errore della seconda.

D: Sul modello degli esercizi del Lab05A. Quanti elementi deve avere, come minimo, l'array `nome` per leggere con `scanf("%20s", nome)`?
N: 21
= Venti caratteri più il terminatore.

D: Sul modello delle intestazioni d'esame. Quale intestazione va bene per una funzione che conta gli elementi pari di un array senza modificarlo?
+ `size_t contaPari(size_t n, const int a[])`
- `size_t contaPari(const int a[])`
- `void contaPari(size_t n, int a[])`
- `size_t contaPari(int n, int *a[])`
- `bool contaPari(size_t n, const int a[])`
= Servono la lunghezza e l'array in sola lettura, e il risultato è un conteggio. La più insidiosa è la seconda: senza la lunghezza la funzione non sa dove fermarsi.
```

## Fonti

- Le lezioni complete: [Lab05A · Array e stringhe](Lab05A_array_stringhe.html), [06B · Chiamata di funzione e ritorno](06B_chiamata_funzioni.html), con gli esempi, i disegni e gli esercizi.
- Slide di E. G. Amparore «06B Chiamata di funzione», e slide del laboratorio «Array e stringhe» (Lab05A), canale B, A.A. 2026/27.
- Le domande del quiz sono di questi appunti, sul modello degli esercizi d'esame; il codice è compilato con gcc 16.1 e `-Wall -Werror` ed eseguito.
