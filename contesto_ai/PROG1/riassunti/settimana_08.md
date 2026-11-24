---
corso: PROG1
lezione: S8
tipo: riassunto
titolo: "Settimana 8: la memoria dinamica"
data: 2026-11-18
docenti: Elvio Amparore
sopratitolo: Riassunto settimanale · Programmazione I · Canale B · 16/11 – 20/11/2026
descrizione: >-
  Riassunto della settimana 8 di Programmazione I (canale B): la lezione 08A sulla memoria dinamica, con il puntatore
  appeso, lo heap, malloc e free, l'array allocato nello heap, gli errori tipici, la selezione con copia in tre fasi e
  la responsabilità della memoria.
lede: >-
  Una settimana su un solo argomento: la memoria che si chiede e si restituisce a mano. Perché un array locale non si
  può ritornare, come si usa malloc, quali errori si fanno con free, e lo schema in tre fasi per restituire un array
  nuovo da una funzione.
materiale: slide
scheda:
  Lezioni: "[08A](08A_memoria_dinamica.html) mar 17/11 e mer 18/11"
  Tempo di ripasso: 30 minuti
fonte: >-
  Gli appunti della lezione 08A di Programmazione I (canale B), scritti sulle slide di E. G. Amparore
appunti_html: appunti/PROG1/riassunto_settimana_08.html
genera_html: true
---

## In breve

- Una variabile locale, anche un array a lunghezza variabile, vive quanto il **frame** della sua funzione. Ritornarne l'indirizzo dà un **puntatore appeso**: con `-Wall -Werror` è un errore di compilazione.
- Lo **heap** è la zona di memoria che si gestisce a mano: un blocco esiste da `malloc` a `free`, in qualunque funzione ci si trovi.
- `malloc(n * sizeof(int))` dà un blocco di `n` interi contigui e **non inizializzati**, oppure `NULL`. Il risultato si controlla.
- `free(p); p = NULL;` vanno scritte insieme. **Ogni `malloc` ha la sua `free`.**
- Gli errori: blocco mai liberato (**memory leak**), indirizzo perso, uso dopo la `free`, doppia `free`, lettura di memoria non inizializzata, ipotesi sulla vicinanza di due blocchi.
- Per restituire un array di lunghezza non nota: **conta, alloca, copia**, con la lunghezza in un parametro di uscita.
- Chi riceve da una funzione un blocco allocato ne ha la **responsabilità**: deve liberarlo lui.

> [!NOTA] Le lezioni della settimana
> Due lezioni di teoria, martedì 17/11 e mercoledì 18/11, tutte e due sulle slide 08A: sul Moodle del corso la settimana si intitola «Memoria Dinamica». Il laboratorio del turno B2 di lunedì 16/11 è stato annullato. Il riassunto è diviso in due parti per argomento: dove sia finita la prima lezione non lo so.

## 08A · Dallo stack allo heap (mar 17/11 e mer 18/11)

Il problema di partenza: una funzione che legge `n` e poi `n` interi, e restituisce la sequenza. L'array deve crearlo la funzione, perché solo lei conosce `n`.

- **Perché lo stack non basta.** Con `int a[n]; ... return a;` l'array sta nel frame della funzione, che al `return` viene tolto. Il chiamante riceve l'indirizzo di una zona non più valida: un puntatore appeso. gcc dice `function returns address of local variable`.
- **Lo heap.** Nel modello della memoria i segmenti sono codice, dati, heap e stack. Heap e stack si dividono lo spazio libero e crescono uno verso l'altro.
- **`malloc`.** `void* malloc(size_t sz)` riserva `sz` byte contigui e ne ritorna l'indirizzo; `void*` è un indirizzo senza tipo, che lo prende quando lo si assegna a un `int*`. Per `n` interi i byte sono `n * sizeof(int)`.
- **`free`.** Restituisce il blocco. Vuole lo stesso indirizzo dato da `malloc`. Dopo, il puntatore contiene ancora il vecchio indirizzo: per questo lo si mette a `NULL`. `free(NULL)` non fa niente.
- **La soluzione.** `int* a = malloc(n * sizeof(int));` al posto di `int a[n];`. Ora `return a` è giusto: si ritorna l'indirizzo di un blocco che sopravvive al ritorno. La `free` la fa il `main`.

```grafico
titolo: La memoria dopo il ritorno di leggiArray, con l'input 3 e poi 10 20 30. Nello stack resta solo il frame di main, con la lunghezza e un puntatore. Il blocco con i tre interi sta nello heap, e ci resta finché main non chiama free
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
freccia: 3.2 2.3 6.7 2.3 | ambra
testo: 8.75 1.3 | grigio | "blocco di 3 interi"
```

Il puntatore `a` sta nello stack, il blocco nello heap: sono due oggetti diversi, e vivono per tempi diversi.

::: prova Quanti byte chiede `malloc(6 * sizeof(double))`, se un `double` occupa 8 byte? Di che tipo è la variabile che riceve il risultato?
48 byte. La variabile è un `double*`.
:::

> [!RICORDA]
> - Mai ritornare l'indirizzo di una variabile locale.
> - `malloc(n * sizeof(T))`, poi il controllo con `NULL`.
> - `free(p); p = NULL;`
> - `malloc` in una funzione e `free` in un'altra è il caso normale.

## 08A · Errori, selezione e responsabilità

Niente controlla che la memoria dinamica sia gestita bene. I sei errori delle slide:

| Errore | Che cosa succede | gcc avvisa? |
|---|---|---|
| allocare senza liberare | memory leak: il blocco resta occupato fino alla fine | mai |
| riassegnare il puntatore prima della `free` | il primo blocco è perso per sempre | mai |
| usare il puntatore dopo la `free` | comportamento indefinito | solo nei casi diretti: `pointer 'p' used after 'free'` |
| fare due `free` dello stesso blocco | crash o heap rovinato | solo nei casi diretti |
| leggere il blocco prima di scriverci | valori indeterminati | solo nei casi diretti: `'*a' is used uninitialized` |
| trattare due blocchi come vicini | si scrive fuori dal blocco | mai |

**Stack o heap.** Nello heap i dati di dimensione non nota in anticipo e quelli che devono sopravvivere alla funzione. Nello stack le variabili piccole e gli array di dimensione fissa.

**Selezione con copia.** Copiare in un array nuovo gli elementi di `b` che rispettano una condizione. La lunghezza del risultato non si sa prima di aver guardato tutto `b`, quindi:

1. **conta**: una scansione di `b` che conta gli elementi buoni;
2. **alloca**: `malloc(count * sizeof(int))`, solo se `count > 0`, e si continua solo se il risultato non è `NULL`;
3. **copia**: una seconda scansione, con un indice `j` per l'array nuovo.

La funzione `selectCopy` delle slide parte da `a = NULL` e `*out_len = 0`, che sono già la risposta giusta se non c'è niente da selezionare, e ha una sola `return`. Con `b = {12, 1, 3, 4, 8}` e la condizione «pari» ritorna 12, 4, 8 e scrive 3 nella lunghezza.

**Responsabilità.** `selectCopy` alloca e non libera: consegna il blocco al chiamante, che dovrà fare la `free`. Lo fa anche `strdup` della libreria, che ritorna una copia di una stringa nello heap. Va scritto nel commento della funzione.

::: prova In `int* p = malloc(8); int* q = p; free(p); p = NULL;`, quanti blocchi restano allocati? C'è un puntatore appeso?
Nessun blocco: c'è una `malloc` e una `free`. `q` è appeso: contiene ancora l'indirizzo del blocco liberato, e mettere `p` a `NULL` non lo protegge.
:::

> [!RICORDA]
> - Leak, indirizzo perso, uso dopo `free`, doppia `free`, memoria non inizializzata, blocchi «vicini».
> - Il compilatore vede solo i casi diretti, e i leak mai.
> - Conta, alloca, copia.
> - Chi riceve il blocco fa la `free`.

## Verso l'esame

- **Funzione che restituisce un array nuovo**: ritorna `int*`, lunghezza in `size_t* out_len`, valori di partenza `NULL` e 0, controllo di `malloc`, una sola `return`. È la tipologia «heap» della raccolta di esercizi d'esame.
- **Stato della memoria**: disegnare stack e heap dopo una serie di istruzioni, dicendo quali blocchi restano e quali puntatori sono appesi.
- **Correttezza**: riconoscere in un frammento un leak, un uso dopo la `free`, una `malloc` con la misura sbagliata.
- **Compilazione**: con `-Wall -Werror` ritornare un array locale non compila, e l'esercizio vale zero.
- Appelli 2026/27: lunedì 25/01/2027 e giovedì 11/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Perché una funzione non può ritornare un suo array locale?
Perché l'array sta nel suo frame, che viene tolto dallo stack al ritorno: l'indirizzo ritornato non è più valido.
:::

::: domanda Che cosa ritorna `malloc`, e che cosa contiene il blocco?
L'indirizzo del primo byte di un blocco contiguo, oppure `NULL`. Il contenuto non è inizializzato.
:::

::: domanda Perché si scrive `p = NULL` dopo `free(p)`?
Perché `p` contiene ancora il vecchio indirizzo. Con `NULL` un uso sbagliato ferma subito il programma, e una seconda `free` non fa danni.
:::

::: domanda Che cos'è un memory leak?
Un blocco allocato e mai liberato, per esempio perché si è perso il suo indirizzo.
:::

::: domanda Quali sono le tre fasi della selezione con copia, e perché servono due scansioni?
Conta, alloca, copia. La prima scansione serve a sapere quanto dev'essere grande l'array, la seconda a riempirlo.
:::

::: domanda Chi deve liberare un array ritornato da una funzione?
Il chiamante: ritornando il puntatore la funzione gli passa la responsabilità del blocco.
:::

## Quiz d'esame

L'esame di Programmazione I non ha domande a crocette. Ha due esercizi di teoria su CodeRunner, «correttezza» e «stato della memoria», e tre di programmazione. Le domande qui sotto sono **sul modello** di questi esercizi, con gli argomenti della settimana. Ho compilato e provato tutto il codice con gcc 16.1 e `-Wall -Werror`.

```quiz
D: Sul modello della correttezza. Che cosa succede compilando con `-Wall -Werror` una funzione che finisce con `int a[n]; ... return a;`?
+ non compila: `function returns address of local variable`
- compila, e il chiamante riceve una copia dell'array
- compila, e il chiamante riceve `NULL`
- compila, ma dà errore solo durante l'esecuzione
- non compila: gli array a lunghezza variabile sono vietati
= gcc riconosce il ritorno diretto dell'indirizzo di una variabile locale, e con `-Werror` l'avviso diventa un errore. La più insidiosa è «compila, ma dà errore solo durante l'esecuzione»: è quello che succede senza `-Werror`, o quando l'indirizzo passa per un'altra variabile.

D: Sul modello dello stato della memoria. Dopo `int* p1 = malloc(20); int* p2 = malloc(32); double* p3 = malloc(16); free(p2); p2 = NULL; char* p4 = malloc(20); free(p1); p1 = NULL;`, quanti blocchi sono allocati nello heap?
N: 2
= Quattro `malloc` e due `free`: restano i blocchi di `p3` e di `p4`. È l'esempio delle slide 18–19.

D: Sul modello della correttezza. Quanti byte alloca `malloc(10 * sizeof(int))`, con `sizeof(int)` uguale a 4?
N: 40
= Dieci interi da 4 byte. Con `malloc(10)` sarebbero 10 byte, che non bastano nemmeno per tre interi.

D: Sul modello dello stato della memoria. Il programma `leggiArray` della lezione riceve in input `3` e poi `10 20 30`. Dopo `int* a = leggiArray(&aLen);`, dove stanno `aLen`, `a` e i tre interi?
+ `aLen` e `a` nello stack, nel frame di `main`; i tre interi nello heap
- tutti nello stack, nel frame di `leggiArray`
- tutti nello heap
- `aLen` nello stack; `a` e i tre interi nello heap
- `a` nello stack; `aLen` e i tre interi nello heap
= `aLen` e `a` sono variabili locali di `main`; `a` contiene l'indirizzo del blocco, che è nello heap. La più insidiosa è «`aLen` nello stack; `a` e i tre interi nello heap»: il puntatore è una variabile come le altre, e sta nello stack.

D: Sul modello della correttezza. Quale frammento produce un memory leak?
+ `int* p = malloc(8); p = malloc(16); free(p);`
- `int* p = malloc(8); free(p); p = NULL;`
- `int* p = NULL; free(p);`
- `int* p = malloc(8); int* q = p; free(q);`
- `int x = 3; int* p = &x;`
= Il primo blocco perde il suo unico indirizzo quando `p` viene riassegnato. La più insidiosa è `int* p = malloc(8); int* q = p; free(q);`: `p` e `q` contengono lo stesso indirizzo, e una sola `free` basta.

D: Sul modello della programmazione iterativa. `selectCopy` con la condizione «pari» riceve `b = {12, 1, 3, 4, 8}`. Quanto vale `*out_len` alla fine?
N: 3
= I pari sono 12, 4 e 8. Provato.

D: Sul modello della programmazione iterativa. La stessa `selectCopy` riceve `b = {1, 3, 5}`. Che cosa ritorna?
+ `NULL`, con `*out_len` uguale a 0
- un blocco vuoto, con `*out_len` uguale a 0
- un blocco di 3 interi non inizializzati
- un puntatore a `b`
- dipende da `malloc`
= `count` è 0: la funzione non alloca niente e restano i valori di partenza. Provato. La più insidiosa è «un blocco vuoto, con `*out_len` uguale a 0»: la funzione chiama `malloc` solo se `count > 0`.

D: Sul modello della programmazione iterativa. Una funzione `e3` restituisce un array nuovo con gli elementi strettamente positivi di `{7, -2, 0, 9}`. Quanti elementi ha l'array restituito?
N: 2
= 7 e 9: lo zero non è strettamente positivo. Provato.
```

## Fonti

- La lezione completa: [08A · Memoria dinamica](08A_memoria_dinamica.html), con gli esempi, i disegni e gli esercizi.
- Slide di E. G. Amparore «08A Memoria Dinamica», canale B, A.A. 2026/27; pagina Moodle del corso per le date e gli avvisi.
- Le domande del quiz sono di questi appunti, sul modello degli esercizi d'esame; il codice è compilato con gcc 16.1 e `-Wall -Werror` ed eseguito.
