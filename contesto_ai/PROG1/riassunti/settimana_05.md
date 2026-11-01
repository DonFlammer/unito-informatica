---
corso: PROG1
lezione: S5
tipo: riassunto
titolo: "Settimana 5: array, stringhe, funzioni e il laboratorio sui cicli"
data: 2026-10-28
docenti: Elvio Amparore
sopratitolo: Riassunto settimanale · Programmazione I · Canale B · 26/10 – 30/10/2026
descrizione: >-
  Riassunto della settimana 5 di Programmazione I (canale B): la seconda parte della lezione 05A, con somma,
  conteggio e massimo, array e puntatori, VLA, gli errori con gli indici, ASCII e Unicode, le stringhe con il
  terminatore e la loro lettura; il Laboratorio 04 sui cicli, con le sequenze terminate da 0, le medie, i cicli
  annidati, le sentinelle per «per ogni» ed «esiste», Fibonacci e la ricerca per dimezzamento; la lezione 06A sulle
  funzioni, con prototipo, definizione e chiamata, passaggio per valore, una sola return e divide et impera.
lede: >-
  Le due lezioni e il laboratorio della settimana in poche pagine: come si scorre un array e una stringa senza uscire
  dai limiti, come si legge una sequenza di lunghezza sconosciuta, come si esce da un ciclo senza break, come si scrive
  una funzione, e le domande per controllarti.
materiale: slide
scheda:
  Lezioni: "[Lab04](Lab04_iterazioni.html) lun 26/10 (B2) · [05A](05A_array_stringhe.html) mar 27/10, slide 9–35 · [06A](06A_funzioni.html) mer 28/10"
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni 05A e 06A e del Laboratorio 04 di Programmazione I (canale B), scritti sulle slide di
  E. G. Amparore e del laboratorio
appunti_html: appunti/PROG1/riassunto_settimana_05.html
genera_html: true
---

## In breve

- Martedì 27/10 Amparore ha finito le slide 05A: dopo la scansione, somma, conteggio e massimo, array e puntatori, VLA, errori, caratteri e stringhe.
- `v[i]` è la stessa cosa di `*(v + i)`: il nome dell'array diventa il puntatore al primo elemento.
- Il C **non controlla gli indici**: `v[n]` compila e legge memoria che non è dell'array.
- Una **stringa** è un array di `char` che finisce con `'\0'`; si scorre finché non si trova il terminatore.
- Nel laboratorio, una **sequenza terminata da 0** si legge con `while (1 == scanf("%d", &x) && x != 0)`.
- **«Per ogni»** e **«esiste»** su una sequenza si fanno con una variabile `bool` che parte da `true` o da `false`, messa nella condizione del ciclo al posto del `break`.
- Indovinare un numero tra 0 e 99 provando il **punto medio** richiede al massimo 7 tentativi.
- Mercoledì 28/10, la 06A: una **funzione** ha prototipo, definizione e chiamata; i parametri passano **per valore**, cioè come copie, e all'esame la `return` è una sola.

> [!NOTA] Le altre lezioni della settimana
> Il Laboratorio 04 il turno B2 l'ha fatto lunedì 26/10 con Elisa Marengo; il turno B1 lo fa martedì 03/11 con Valerio Basile. Le slide della lezione di mercoledì 28/10, la 06A sulle funzioni, sono arrivate il 01/11.

## 05A · Array e stringhe, seconda parte (mar 27/10)

Dopo un ripasso veloce delle slide 3–9, la lezione riparte dalla scansione con un accumulatore.

- **Somma, conteggio, massimo**: un ciclo `for (size_t i = 0; i < n; i++)` con una variabile che accumula. Il massimo parte dal primo elemento, non da 0, altrimenti un array di soli negativi dà 0.
- **Array e puntatori**: nelle espressioni il nome dell'array è l'indirizzo del primo elemento, e `v[i]` vuol dire `*(v + i)`. Con `int *p = v + 1;`, `p[0]` è `v[1]` e `p[-1]` è `v[0]`.
- **VLA**: `int v[n];` con `n` letto da tastiera. Non si inizializza con una lista di valori: gcc 16 accetta solo `= {}`, che lo azzera. Un `n` troppo grande esaurisce lo stack.
- **Errori**: `v[5]` in un array di 5 elementi compila, e gcc avvisa solo con le ottimizzazioni (`-O2`). Gli array non si assegnano con `=` e non si confrontano con `==`.
- **Caratteri**: un `char` è un numero, il suo codice ASCII: `'A'` è 65, `'a'` è 97, `'0'` è 48. Quindi `c - '0'` trasforma la cifra `'7'` nel numero 7.
- **Stringhe**: un array di `char` con il terminatore `'\0'` dopo l'ultimo carattere. `"ciao"` occupa 5 byte. Durante la spiegazione Amparore ha aperto il manuale con `man 3 printf`: la sezione 3 è quella delle funzioni della libreria del C.

```grafico
titolo: La memoria di `char s[6] = "ciao";`. I quattro caratteri, poi il terminatore. L'ultima cella non è nella stringa ma vale anch'essa 0, perché un array inizializzato in parte ha il resto a zero
x: -0.2 6.4
y: -0.2 2
assi: no
griglia: no
proporzioni: libere
poligono: 0 0.6 1 0.6 1 1.6 0 1.6 | blu
testo: 0.5 1.1 | blu | "'c'"
poligono: 1 0.6 2 0.6 2 1.6 1 1.6 | blu
testo: 1.5 1.1 | blu | "'i'"
poligono: 2 0.6 3 0.6 3 1.6 2 1.6 | blu
testo: 2.5 1.1 | blu | "'a'"
poligono: 3 0.6 4 0.6 4 1.6 3 1.6 | blu
testo: 3.5 1.1 | blu | "'o'"
poligono: 4 0.6 5 0.6 5 1.6 4 1.6 | rosa | pieno
testo: 4.5 1.1 | rosa | "'\0'"
poligono: 5 0.6 6 0.6 6 1.6 5 1.6 | grigio
testo: 5.5 1.1 | grigio | "0"
testo: 0.5 0.25 | grigio | "0"
testo: 1.5 0.25 | grigio | "1"
testo: 2.5 0.25 | grigio | "2"
testo: 3.5 0.25 | grigio | "3"
testo: 4.5 0.25 | grigio | "4"
testo: 5.5 0.25 | grigio | "5"
```

- **Scorrere una stringa**: `for (size_t i = 0; s[i] != '\0'; i++)`. Non serve sapere la lunghezza: ci si ferma al terminatore.
- **Leggere stringhe**: `scanf("%19s", nome)` legge una parola in un array di 20, senza `&`, perché il nome dell'array è già un indirizzo. Per una riga con gli spazi: `scanf(" %49[^\n]", frase)`.
- **Errori con le stringhe**: dimenticare lo spazio per `'\0'`, leggere senza limite di lunghezza, confrontare due stringhe con `==`, che confronta gli indirizzi.

::: prova Con `int v[4] = {10, 20, 30, 40};` e `int *p = v + 1;`, quanto vale `*(p + 2)`?
`p` punta a `v[1]`, quindi `p + 2` punta a `v[3]`: vale 40.
:::

> [!RICORDA]
> - `v[i]` è `*(v + i)`; gli indici validi sono da 0 a `n - 1`, e il C non li controlla.
> - Una stringa finisce con `'\0'`: servono `n + 1` byte per `n` caratteri.
> - `scanf("%19s", nome)` senza `&`, con il limite.

## Lab04 · Iterazioni (lun 26/10)

Il laboratorio mette in pratica i cicli della 04A con esercizi su CodeRunner.

- **`for` o `while`**: il `for` quando il numero di giri è noto prima di partire, il `while` quando lo decide l'input.
- **Sequenze terminate da 0**: `while (1 == scanf("%d", &x) && x != 0)`. `scanf` restituisce quante variabili ha letto; se l'input finisce o non è un numero, il ciclo si ferma e l'`&&` non guarda `x`.
- **Media**: accumulatore e contatore; prima di dividere si controlla che il contatore non sia 0. Con `programma < file.txt` l'input arriva da un file; in PowerShell serve `Get-Content file.txt | .\programma`.
- **Cicli annidati**: il triangolo di Floyd e il quadrato, con un ciclo per le righe e uno per i caratteri della riga.
- **«Per ogni» ed «esiste»**: una variabile `bool` che parte da `true` («per ogni») o da `false` («esiste») e cambia al primo controesempio o esempio. Va nella condizione del ciclo: all'esame niente `break`.
- **Fibonacci**: per aggiornare due variabili insieme serve una variabile temporanea.
- **Indovina il numero**: provando sempre il punto medio dell'intervallo rimasto, l'intervallo si dimezza a ogni tentativo.

```grafico
titolo: La ricerca per dimezzamento del numero 70 tra 0 e 99. A ogni tentativo si prova il punto medio (in rosa) e si tiene solo la metà giusta: al quinto tentativo il numero è trovato. Su tutti i numeri da 0 a 99 non servono mai più di 7 tentativi
x: -12 106
y: 0.3 6
assi: no
griglia: no
proporzioni: libere
segmento: 0 5.2 99 5.2 | blu | spesso
punto: 49 5.2 | rosa
testo: 49 5.65 | rosa | "49"
testo: -6 5.2 | grigio | "1"
segmento: 50 4.2 99 4.2 | blu | spesso
punto: 74 4.2 | rosa
testo: 74 4.65 | rosa | "74"
testo: -6 4.2 | grigio | "2"
segmento: 50 3.2 73 3.2 | blu | spesso
punto: 61 3.2 | rosa
testo: 61 3.65 | rosa | "61"
testo: -6 3.2 | grigio | "3"
segmento: 62 2.2 73 2.2 | blu | spesso
punto: 67 2.2 | rosa
testo: 67 2.65 | rosa | "67"
testo: -6 2.2 | grigio | "4"
segmento: 68 1.2 73 1.2 | blu | spesso
punto: 70 1.2 | verde
testo: 70 1.65 | verde | "70"
testo: -6 1.2 | grigio | "5"
testo: 0 0.6 | grigio | "0"
testo: 99 0.6 | grigio | "99"
```

::: prova Con l'input `3 5 a 7 0`, che somma stampa il ciclo `while (1 == scanf("%d", &x) && x != 0) { somma += x; }`?
8. Quando arriva `a`, `scanf` non riesce a leggere un intero e restituisce 0: il ciclo si ferma prima del 7.
:::

> [!RICORDA]
> - Sequenze: `1 == scanf(...)` e il valore di fine nella stessa condizione.
> - «Per ogni» parte da `true`, «esiste» da `false`; la sentinella va nella condizione.
> - Media: niente divisione per zero.

## 06A · Funzioni (mer 28/10)

Una funzione dà un nome a un calcolo: si scrive una volta e si chiama dove serve. In C ha tre parti.

- **Prototipo**: `float square(float x);`, con il punto e virgola, annuncia nome e tipi. Serve se la funzione è definita dopo il punto in cui si usa: altrimenti gcc 16 si ferma con `implicit declaration of function`.
- **Definizione**: `float square(float x) { return x * x; }`. Il tipo del parametro fa da dominio, il tipo di ritorno da codominio, il corpo da regola.
- **Chiamata**: `square(a)`. Gli argomenti vanno ai parametri in ordine, e le conversioni avvengono in silenzio: `max(2, 3.5)` con parametri `int` vale 3.

Le forme sono quattro, con o senza parametri e con o senza risultato (`void`). A differenza di una funzione matematica, una funzione C può avere **effetti collaterali**, come leggere l'input o stampare, e quindi dare risultati diversi con gli stessi argomenti.

Il passaggio è **per valore**: il parametro è una copia. `incr(a)` non cambia `a`; `incrPtr(&a)` sì, perché riceve una copia dell'indirizzo e con `*p` arriva alla variabile.

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

- **Un solo valore di ritorno**; gli altri risultati passano per puntatore. Ogni percorso deve arrivare a una `return`, altrimenti gcc dà `control reaches end of non-void function`.
- **Divide et impera**: il programma del cerchio si divide in `leggiRaggio`, `circonferenza`, `area` e `stampaRisultati`, e `main` le chiama in ordine.
- **Una svista delle slide**: la `leggiRaggio` della slide 25 con un input come `abc` stampa l'errore all'infinito, perché `scanf` lascia `abc` nell'input. Va scartato con `scanf("%*[^\n]")`, e l'`EOF` va gestito: la versione corretta è negli appunti.

::: prova Perché `float media(int a, int b) { return (a + b) / 2; }` con `media(3, 4)` dà 3?
`a + b` e `2` sono interi: la divisione è intera. Serve `/ 2.0f`.
:::

> [!RICORDA]
> - Prototipo con `;`, definizione con il corpo, chiamata con gli argomenti in ordine.
> - Per valore: la funzione lavora su copie. Per cambiare una variabile del chiamante, il suo indirizzo.
> - Una sola `return`, alla fine.

## Verso l'esame

- **Programmazione**: l'esercizio iterativo è una funzione con un ciclo su un array; una sola `return`, niente `break`, la sentinella nella condizione del ciclo.
- **Stato della memoria**: array e stringhe sono celle consecutive; dopo una stringa c'è il terminatore, e le celle mai scritte di un array locale valgono «?».
- **Funzioni**: ogni esercizio di programmazione chiede una funzione con un'intestazione data. Va copiata al carattere, con una sola `return` e senza stampe non richieste.
- **Casi limite** da provare sempre: array vuoto, un elemento, l'ultimo indice, la stringa vuota, l'input che finisce subito.
- Appelli 2026/27: lunedì 25/01/2027 e giovedì 11/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Perché `v[n]` è un errore anche se compila?
Gli indici validi vanno da 0 a `n - 1`: `v[n]` legge la cella dopo l'array, che appartiene ad altro. Il C non controlla.
:::

::: domanda Quanti byte servono per una stringa di 10 caratteri?
11: uno in più per il terminatore `'\0'`.
:::

::: domanda Perché `scanf("%19s", nome)` non ha la `&`?
Perché il nome dell'array, nelle espressioni, è già l'indirizzo del primo elemento.
:::

::: domanda Che cosa restituisce `scanf`, e perché si confronta con 1?
Il numero di variabili lette. Con una sola variabile, 1 vuol dire che la lettura è riuscita; 0 o `EOF` che l'input non va bene o è finito.
:::

::: domanda Perché `incr(a)` non cambia `a`, e come si fa a cambiarlo?
Perché il parametro è una copia di `a`. Si passa l'indirizzo: `incrPtr(&a)`, e nella funzione si scrive `(*p)++`.
:::

::: domanda Come si esce da un ciclo «per ogni» senza `break`?
Con una variabile `bool` nella condizione: `while (i < n && tutti)`, e nel corpo `tutti = false` al primo controesempio.
:::

## Quiz d'esame

L'esame di Programmazione I non ha domande a crocette. Ha due esercizi di teoria su CodeRunner, «correttezza» e «stato della memoria», e tre di programmazione. Le domande qui sotto sono **sul modello** di questi esercizi, con gli argomenti della settimana. Ho compilato e provato tutto il codice con gcc 16.1 e `-Wall -Werror`.

```quiz
D: Sul modello dello stato della memoria. Dopo `char s[6] = "ciao";`, quanto valgono `s[4]` e `s[5]`?
+ tutti e due 0
- `s[4]` è `'o'` e `s[5]` è 0
- `s[4]` è 0 e `s[5]` è indeterminato
- tutti e due indeterminati
- il codice non compila: la stringa ha 4 caratteri e l'array 6
= `s[4]` è il terminatore. `s[5]` vale 0 perché un array inizializzato in parte ha il resto a zero. La più insidiosa è la terza: le celle mai scritte sono indeterminate solo se l'array non è inizializzato affatto.

D: Sul modello dello stato della memoria. Con `int v[4] = {10, 20, 30, 40};` e `int *p = v + 1;`, quanto vale `p[-1]`?
+ 10
- 20
- 40
- non compila: gli indici negativi sono vietati
- un valore fuori dall'array
= `p` punta a `v[1]`, quindi `p[-1]` è `*(p - 1)`, cioè `v[0]`. La più insidiosa è «fuori dall'array»: lo sarebbe `v[-1]`, ma `p` parte da una cella più avanti.

D: Sul modello della correttezza. Con `int w[3] = {3, -1, 4};`, quanto vale `i` alla fine di `size_t i = 0; bool tutti = true; while (i < 3 && tutti) { if (w[i] <= 0) { tutti = false; } i++; }`?
+ 2
- 1
- 3
- 0
- il ciclo non finisce
= Al primo giro `w[0] = 3` va bene e `i` diventa 1; al secondo `w[1] = -1` mette `tutti` a `false` e `i` diventa 2; poi la condizione è falsa. La più insidiosa è 1, di chi dimentica che l'`i++` si esegue anche nel giro del controesempio.

D: Sul modello della correttezza. Con l'input `4 -2 0 9`, che cosa vale `somma` dopo `while (1 == scanf("%d", &x) && x != 0) { somma += x; }`, partendo da 0?
+ 2
- 11
- 4
- 0
- il programma si blocca
= Si leggono 4 e −2, poi lo 0 ferma il ciclo, e il 9 non viene letto. La più insidiosa è 11, di chi somma tutto l'input.

D: Sul modello della correttezza. Dopo `int a = 0, b = 1; for (int k = 0; k < 5; k++) { int t = a + b; a = b; b = t; }`, quanto vale `a`?
N: 5
= I valori di `a` dopo ogni giro sono 1, 1, 2, 3, 5: i numeri di Fibonacci.

D: Sul modello degli esercizi del Lab04. Quanti numeri stampa un triangolo di Floyd di 4 righe, con $r$ numeri nella riga $r$?
N: 10
= $1 + 2 + 3 + 4 = 10$: il ciclo interno fa $r$ giri per ogni riga $r$.

D: Sul modello degli esercizi del Lab04. Provando sempre il punto medio, quanti tentativi servono al massimo per indovinare un numero tra 0 e 99?
N: 7
= Ogni tentativo dimezza l'intervallo: 100, 50, 25, 12, 6, 3, 1. Con $2^7 = 128 \ge 100$ bastano 7 tentativi, e c'è un numero che li richiede tutti.

D: Sul modello della correttezza. Che cosa stampa `void incr(int x) { x++; }` chiamata con `int a = 5; incr(a); printf("%d", a);`?
+ 5
- 6
- 0
- non compila: `incr` non restituisce niente
- un valore a caso
= `x` è una copia di `a`, e l'incremento cambia solo la copia. La più insidiosa è 6, che sarebbe giusta con `incrPtr(&a)`.

D: Sul modello degli errori di compilazione. `main` chiama `square(3)`, e `square` è definita più in basso nel file, senza prototipo. Che cosa fa gcc 16?
+ si ferma con `implicit declaration of function 'square'`
- compila senza avvisi
- compila con un avviso, e il programma funziona
- compila, ma `square` restituisce sempre 0
- chiede di spostare `main` in fondo
= Da gcc 14 la dichiarazione implicita è un errore anche senza `-Wall`. Serve il prototipo in cima, o la definizione prima di `main`. La più insidiosa è «compila con un avviso»: era vero con i gcc più vecchi.

D: Sul modello degli errori della 05A. In una funzione con i parametri `const char *a` e `const char *b`, quale di queste condizioni confronta davvero il contenuto delle due stringhe?
+ nessuna: per il contenuto serve un ciclo carattere per carattere
- `a == b`
- `*a == *b`
- `a[0] == b[0]`
- `&a == &b`
= `a == b` confronta gli indirizzi, che sono diversi anche con lo stesso testo. Con due array gcc lo ferma (`comparison between two arrays`), ma con due puntatori `char *`, per esempio i parametri di una funzione, compila senza avvisi e dà sempre «diversi». `*a == *b` e `a[0] == b[0]` guardano solo il primo carattere. La più insidiosa è proprio `a == b`.
```

## Fonti

- Le lezioni complete: [05A · Array e stringhe](05A_array_stringhe.html), [06A · Funzioni](06A_funzioni.html), [Lab04 · Iterazioni](Lab04_iterazioni.html), con i programmi provati, i quiz e gli esercizi.
- Slide del canale B: 05A_array_stringhe e 06A_funzioni (E. G. Amparore) e Lab04 - Iterazioni; video della lezione del 27/10.
- Regole d'esame dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md) e dalla [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md).
