---
corso: PROG1
lezione: S2
tipo: riassunto
titolo: "Settimana 2: il laboratorio, le variabili in memoria, gli indirizzi e i puntatori"
data: 2026-10-07
docenti: Elvio Amparore
sopratitolo: Riassunto settimanale · Programmazione I · Canale B · 05/10 – 09/10/2026
descrizione: >-
  Riassunto della settimana 2 di Programmazione I (canale B): il primo laboratorio con la riga di comando, i percorsi
  e gcc; tipi, variabili, il modello della memoria con FP e SP, l'assegnamento e le espressioni intere; indirizzi e
  operatore &, scanf e il suo valore di ritorno, i puntatori, l'operatore *, l'aliasing e NULL.
lede: >-
  Il laboratorio e le due lezioni della settimana in poche pagine: i comandi da sapere, il modello della memoria che
  serve negli esercizi d'esame, la differenza tra valore e indirizzo, e le domande per controllarti.
materiale: slide
scheda:
  Lezioni: "[Lab01](Lab01_introduzione.html) lun 05/10 (B2) e mar 06/10 (B1) · [02B](02B_assegnamento_memory_model.html) mar 06/10 · [02C](02C_referenziamento_scanf_puntatori.html) mer 07/10"
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti del Laboratorio 01 e delle lezioni 02B e 02C di Programmazione I (canale B), scritti sulle slide del
  laboratorio e di E. G. Amparore
appunti_html: appunti/PROG1/riassunto_settimana_02.html
genera_html: true
---

## In breve

- Al **laboratorio** si lavora dalla **riga di comando**: si scrive un ordine, si preme Invio, si legge la risposta. Un comando ha nome, opzioni e argomenti.
- Si compila con `gcc -Wall -Werror sorgente.c -o programma` e si esegue con `./programma`. Con `-Werror` basta un avviso per fermare tutto, come all'esame.
- Una **variabile** ha nome, tipo, indirizzo e valore. Dichiarata e non assegnata, contiene un valore **indeterminato**, «?».
- Nel **modello della memoria** le variabili di `main` stanno sullo **stack**, in ordine di dichiarazione, tra **FP** e **SP**. L'assegnamento calcola la destra e copia il valore a sinistra.
- Tra interi `/` taglia la parte dopo la virgola e `%` dà il resto. `*`, `/`, `%` vengono prima di `+` e `-`.
- `&x` è l'**indirizzo** di `x`. `scanf("%d", &x)` scrive all'indirizzo di `x` e restituisce quanti valori ha letto.
- Un **puntatore** `int* p = &x;` contiene un indirizzo; `*p` è la variabile puntata. Mai `*p` con `p` non inizializzato o `NULL`.

## Lab01 · Riga di comando e gcc (lun 05/10, mar 06/10)

Il laboratorio sono 10 incontri da 3 ore al laboratorio Turing, dalle 14 alle 17: turno B2 (matricola pari) il lunedì con Elisa Marengo, turno B1 (matricola dispari) il martedì con Valerio Basile. Quando esci dal PC del laboratorio i file vengono cancellati: salvali prima.

- Un **percorso assoluto** parte dalla radice, `/` su Linux e `C:\` su Windows. Un **percorso relativo** parte dalla cartella in cui sei. `.` è la cartella attuale, `..` quella che la contiene.
- `command not found` vuol dire che il nome è sbagliato, o che il programma non è in una cartella del PATH.

| Che cosa fare | Linux e macOS | Windows |
|---|---|---|
| dove sono | `pwd` | `cd` |
| che cosa c'è | `ls` | `dir` |
| cambiare cartella | `cd nome` | `cd nome` |
| creare una cartella | `mkdir nome` | `mkdir nome` |
| copiare, spostare | `cp`, `mv` | `copy`, `move` |
| cancellare | `rm` | `del` |
| leggere un file | `cat` | `type` |

> [!METODO] Dal file al programma
> 1. Scrivi il sorgente con un editor semplice, senza completamento automatico, come all'esame.
> 2. `gcc -Wall -Werror buongiorno.c -o buongiorno`: se gcc non scrive niente, il programma è compilato.
> 3. `./buongiorno` su Linux e macOS, `buongiorno` su Windows.
> 4. Per provare un programma che legge un numero senza scriverlo a mano: `echo 7 | ./programma`.

::: prova Sei nella cartella `/home/anna/prog1`. Dove ti porta `cd ..`? E che percorso assoluto ha il file `lab01/buongiorno.c`?
`cd ..` porta a `/home/anna`, la cartella che contiene `prog1`. Il file è `/home/anna/prog1/lab01/buongiorno.c`.
:::

> [!RICORDA]
> - `rm` e `del` non usano il cestino.
> - All'esame CodeRunner compila con `-Wall -Werror` e confronta le stampe carattere per carattere.

## 02B · Memoria, assegnamento, espressioni (mar 06/10)

Un **tipo** dice come leggere i bit: quanti byte, quali valori, quali operazioni. I tipi del C sono **finiti**: un `int` va da circa −2,1 a +2,1 miliardi, un `float` ha circa 7 cifre giuste.

| Tipo | Byte di solito | Specificatore in `printf` |
|---|:-:|---|
| `char` | 1 | `%c` |
| `int` | 4 | `%d` |
| `long` | 8 su Linux, 4 su Windows | `%ld` |
| `float` | 4 | `%f` |
| `double` | 8 | `%f` |
| `size_t` | 8 | `%zu` |

> [!METODO] Lo stato della memoria
> 1. Una riga per variabile, nell'ordine di dichiarazione: la prima sotto FP, ognuna 4 byte più in basso per gli `int`. SP indica la prossima casella libera.
> 2. Una variabile dichiarata e non assegnata contiene «?».
> 3. A ogni assegnamento si calcola la destra con i valori **di quel momento**, poi si scrive il risultato nella casella a sinistra, cancellando il valore di prima.

- Tra interi: `13 / 3` fa 4, `13 % 3` fa 1. Ordine: parentesi, poi `*`, `/`, `%`, poi `+`, `-`, da sinistra a destra, e l'assegnamento per ultimo.
- `x += 3` vuol dire `x = x + 3`; `x++` aggiunge 1.
- Un `int` troppo grande **gira** (overflow), un reale messo in un `int` perde la parte dopo la virgola: gcc non avvisa.

::: prova Dopo `int a = 4; int b; b = a * 3 % 5; a = a + b;` quanto valgono `a` e `b`?
`a * 3` fa 12, `12 % 5` fa 2: `b` vale 2. Poi `a` = 4 + 2 = 6.
:::

> [!RICORDA]
> - Variabile = nome + tipo + indirizzo + valore.
> - `printf`: uno specificatore per ogni valore, nell'ordine e del tipo giusto.

## 02C · Indirizzi, scanf e puntatori (mer 07/10)

Ogni variabile ha un **valore**, che cosa c'è dentro, e un **indirizzo**, dove sta: come una casa ha un inquilino e un numero civico.

- `&x` è l'indirizzo di `x`; si stampa con `%p`, e cambia da un'esecuzione all'altra.
- `scanf("%d", &x);` riceve l'indirizzo perché deve sapere **dove** scrivere. Restituisce quanti valori ha letto: con `12.9` legge 12 e si ferma al punto; con `ciao` restituisce 0 e non tocca `x`.

| Scrittura | Che cos'è | Con `int x = 5; int* p = &x;` |
|---|---|---|
| `x` | il valore | 5 |
| `&x` | l'indirizzo di `x` | per esempio `0x03FC` |
| `p` | un puntatore: contiene un indirizzo | lo stesso indirizzo di `x` |
| `*p` | la variabile all'indirizzo contenuto in `p` | è `x`: vale 5 |
| `*p = 8;` | scrive nella variabile puntata | ora `x` vale 8 |

```grafico
titolo: Dopo `int x = 5; int* p = &x;` la casella di `p` contiene l'indirizzo di `x`, qui 0x03FC. `*p` vuol dire «la casella a quell'indirizzo»: `*p = 8;` cambia `x`, non `p`.
x: 0 10
y: 0 4.4
assi: no
griglia: no
poligono: 3 2.6 6 2.6 6 3.6 3 3.6 | blu
poligono: 3 0.8 6 0.8 6 1.8 3 1.8 | ambra
testo: 4.5 3.1 | blu | "5"
testo: 4.5 1.3 | ambra | "0x03FC"
testo: 2.6 3.1 | blu | "x" | o
testo: 2.6 1.3 | ambra | "p" | o
testo: 4.5 3.95 | grigio | "indirizzo 0x03FC"
freccia: 6.1 1.3 7.4 1.3 | ambra
freccia: 7.4 1.3 7.4 3.1 | ambra
freccia: 7.4 3.1 6.1 3.1 | ambra
testo: 7.5 2.2 | ambra | "*p" | e
```

- Due puntatori con lo stesso indirizzo sono **alias**: scrivere con uno cambia la variabile per tutti.
- Un puntatore non inizializzato contiene «?»; `NULL` vuol dire «non punta a niente». Su tutti e due **non** si usa `*`.
- Ogni puntatore occupa 8 byte su 64 bit, qualunque sia il tipo puntato. `&` e `*` si annullano: `*&x` è `x`.

> [!TRAPPOLA] I tipi dei puntatori
> `int*` e `float*` non si mescolano: con gcc 16.1 mettere `&x` di un `int` in un `float*` è un **errore**, anche senza opzioni. Nelle slide è ancora un avviso.

::: prova Dopo `int a = 1, b = 2; int* p = &a; int* q = &b; *p = *q; q = p; *q = 7;` quanto valgono `a` e `b`?
`*p = *q` copia 2 in `a`. `q = p` fa puntare `q` ad `a`. `*q = 7` scrive 7 in `a`. Alla fine `a` vale 7 e `b` vale 2.
:::

> [!RICORDA]
> - `scanf` vuole l'indirizzo, `printf` il valore.
> - `*p` si usa solo se `p` contiene l'indirizzo di una variabile vera.

## Verso l'esame

- **Stato della memoria**: è il tipo di esercizio che parte da queste lezioni. Una riga per variabile, i valori aggiornati a ogni assegnamento, gli indirizzi nelle caselle dei puntatori.
- **CodeRunner** confronta le stampe: niente indirizzi stampati, niente specificatori sbagliati, niente variabili inutilizzate con `-Werror`.
- Appelli 2026/27: lunedì 25/01/2027 e giovedì 11/02/2027, alle 9:00.
- Da fare adesso: rifai gli esercizi del Lab01 dalla riga di comando, e disegna lo stato della memoria del programma con i puntatori della 02C.

## Domande di ripasso

::: domanda Che differenza c'è tra un percorso assoluto e uno relativo?
Il percorso assoluto parte dalla radice del disco e funziona da qualunque cartella. Quello relativo parte dalla cartella in cui ti trovi.
:::

::: domanda Che cosa fanno le opzioni `-Wall` e `-Werror` di gcc?
`-Wall` mostra gli avvisi, `-Werror` li trasforma in errori: basta un avviso perché il programma non venga compilato.
:::

::: domanda Quali sono le quattro cose che ha una variabile?
Nome, tipo, indirizzo e valore.
:::

::: domanda Quanto valgono `17 / 5` e `17 % 5` in C?
3 e 2.
:::

::: domanda Perché in `scanf` serve la `&`?
Perché `scanf` deve sapere dove scrivere il valore letto: le serve l'indirizzo della variabile, non il suo valore.
:::

::: domanda Che cosa restituisce `scanf`?
Il numero di valori letti con successo. Se il primo valore non va bene, restituisce 0.
:::

::: domanda Con `int x = 3; int* p = &x; *p = *p + 1;` quanto vale `x`?
4: `*p` è `x`, quindi l'assegnamento aggiunge 1 a `x`.
:::

::: domanda Perché non si può usare `*p` se `p` vale `NULL`?
Perché `NULL` non è l'indirizzo di nessuna variabile: non c'è niente da leggere o da scrivere.
:::

## Quiz d'esame

L'esame di Programmazione I non ha domande a crocette. Ha due esercizi di teoria su CodeRunner, «correttezza di una sequenza di assegnazioni» e «stato della memoria», e tre di programmazione. Le prime due domande sono l'esercizio vero di correttezza della pagina Moodle 2023/24 («Corr. Ass. 1») e una sua variante vista negli appelli: si risolvono con gli assegnamenti di questa settimana. Le altre sono sul modello dell'esercizio sullo stato della memoria e degli errori che fanno fallire i test. Ho provato tutto con gcc.

```quiz
D: Moodle 2023/24, esercizio «Corr. Ass. 1». Il programma esegue `r = r + 2;` e poi `r = r * 3;`. Alla fine deve valere `33 <= r && r <= 39`. Per quali valori interi iniziali di `r` succede?
+ `9 <= r && r <= 11`
- `11 <= r && r <= 13`
- `11 <= r && r <= 12`
- `31 <= r && r <= 37`
- `33 <= r && r <= 39`
= Si ragiona all'indietro, dall'ultima istruzione: prima di `r = r * 3` serve $33 \le 3r \le 39$, cioè $11 \le r \le 13$; prima di `r = r + 2` serve $11 \le r + 2 \le 13$, cioè $9 \le r \le 11$. Controllo: 9 diventa 33, 11 diventa 39. La risposta più insidiosa è `11 <= r && r <= 13`: si ferma a metà strada. `11 <= r && r <= 12` applica le istruzioni nell'ordine sbagliato. Nella pagina Moodle la stessa condizione era scritta come `33 <= (r+2)*3 && r <= 11`.

D: Variante dello stesso esercizio vista negli appelli. Con le stesse istruzioni, `r = r + 2;` e `r = r * 3;`, alla fine deve valere `r == 33`. Che cosa deve valere `r` all'inizio?
- `r == 11`
+ `r == 9`
- `r == 31`
- `r == 33`
- nessun valore intero va bene
= All'indietro: $3r = 33$ dà $r = 11$, e $r + 2 = 11$ dà $r = 9$. Controllo: $(9 + 2) \cdot 3 = 33$. La risposta più insidiosa è `r == 11`: è il valore a metà, dopo `r = r + 2`.

D: Sul modello di «Corr. Ass. 1». Con le stesse istruzioni, alla fine deve valere `34 <= r`. Da quale valore iniziale intero di `r` in su funziona?
- da 11
- da 32
+ da 10
- da 34
- da 9
= Serve $3(r + 2) \ge 34$. Tra gli interi, $3 \cdot 11 = 33$ non basta e $3 \cdot 12 = 36$ sì: quindi $r + 2 \ge 12$, cioè $r \ge 10$. La risposta più insidiosa è 9: andrebbe bene con 33, non con 34. Negli interi si arrotonda per eccesso quando si divide un «almeno»: è la trappola segnalata nelle soluzioni.

D: Sul modello dell'esercizio sullo stato della memoria. Dopo `int x = 5, y = 8; int *p = &x; *p = *p + y; p = &y; *p = x - 1;` quanto valgono `x` e `y`?
- `x = 5`, `y = 12`
+ `x = 13`, `y = 12`
- `x = 13`, `y = 8`
- `x = 13`, `y = 4`
- `x = 4`, `y = 8`
= `*p = *p + y` scrive in `x`, perché `p` contiene l'indirizzo di `x`: $5 + 8 = 13$. Poi `p = &y` sposta il puntatore, e `*p = x - 1` scrive in `y`: $13 - 1 = 12$. La risposta più insidiosa è `x = 13`, `y = 4`: usa il vecchio valore di `x` nell'ultima riga. Ricorda: a destra si usano i valori di quel momento.

D: Sul modello degli errori che fanno fallire i test. Con `int a = 7, b = 2; double m = a / b;`, che cosa stampa `printf("%f", m);`?
+ `3.000000`
- `3.500000`
- `3`
- `4.000000`
- non compila
= `a / b` è una divisione tra interi e fa 3; solo dopo il 3 diventa `3.000000`. Per avere 3,5 serve `(double)a / b`. La risposta più insidiosa è `3.500000`: è il risultato «giusto» a mano, ma il C fa prima la divisione intera.

D: Sul modello della lettura con `scanf`. Con `int a = 0, b = -1;` e l'input `12.9`, che cosa restituisce `scanf("%d %d", &a, &b)` e che cosa c'è in `a` e `b`?
- restituisce 2, `a = 12`, `b = 9`
+ restituisce 1, `a = 12`, `b = -1`
- restituisce 0, `a = 0`, `b = -1`
- restituisce 2, `a = 12`, `b = 0`
- restituisce 1, `a = 13`, `b = -1`
= `scanf` legge 12 e si ferma al punto, che non può far parte di un intero. Per il secondo `%d` trova `.9` e si arrende: ha letto un solo valore, e `b` non viene toccata. La risposta più insidiosa è «2, `a = 12`, `b = 9`»: il punto non è uno spazio, quindi il 9 non viene letto. Con `13` si arrotonderebbe, ma `scanf` non arrotonda mai.
```

## Fonti

- Le lezioni complete: [Lab01 · La riga di comando, gcc e i primi programmi](Lab01_introduzione.html), [02B · Memoria e variabili, assegnamento ed espressioni](02B_assegnamento_memory_model.html), [02C · Indirizzi, scanf e puntatori](02C_referenziamento_scanf_puntatori.html), con esercizi, quiz e i riferimenti alle slide.
- Laboratori e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
