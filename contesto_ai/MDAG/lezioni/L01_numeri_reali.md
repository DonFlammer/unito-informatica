---
corso: MDAG
modulo: AG
lezione: L01
titolo: Numeri reali
data: 2026-09-30
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L01
descrizione: >-
  Appunti della lezione L01 di Algebra lineare e Geometria (MDAG, parte 2): insiemi numerici, costruzione dei numeri
  reali, irrazionalità di √2, campi, ordine, notazioni e conti con le radici, con quiz nello stile dell'esame ed
  esercizi svolti.
lede: >-
  Da dove vengono i numeri che useremo per tutto il corso: gli insiemi $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$,
  come si costruiscono i numeri reali, perché $\sqrt 2$ non è una frazione, le nove regole che fanno di $\R$ un campo,
  l'ordine e le parentesi da non confondere. In più: i simboli del linguaggio matematico e i conti con le radici senza
  calcolatrice, che servono in ogni prova d'esame.
materiale: dispense
scheda:
  Dispense: lezione 1 · pp. 2–5
  Libro: Martelli, §1.1 e complemento 1.II
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 1 «Numeri reali»; B. Martelli, Geometria e algebra lineare, §1.1, §1.5 e complemento 1.II
file_en: L01_real_numbers.html
appunti_html: appunti/MDAG/L01_numeri_reali.html
genera_html: true
---

## In breve

- I numeri del corso stanno in insiemi uno dentro l'altro: $\N = \{0, 1, 2, \dots\}$ (lo zero c'è!), poi $\Z$ con i negativi, $\Q$ con le frazioni, $\R$ con tutti i numeri reali; dalla prossima lezione anche $\C$. Si scrive $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$.
- Ogni insieme nuovo serve a risolvere equazioni che prima non avevano soluzione: $x + 5 = 3$ non si risolve in $\N$, $2x = 1$ non si risolve in $\Z$, $x^2 = 2$ non si risolve in $\Q$.
- Un numero reale è un numero con infinite cifre dopo la virgola. Per definirlo con precisione si usano le **successioni di Cauchy**: liste infinite di frazioni che, andando avanti, diventano vicine tra loro quanto si vuole.
- $\R$ è **completo**: non ha «buchi». $\Q$ invece ne ha tantissimi, per esempio dove stanno $\sqrt 2$, $\pi$ ed $e$.
- $\sqrt 2$ non è una frazione: è la prima **dimostrazione per assurdo** del corso, da saper rifare.
- Somma e prodotto in $\R$ rispettano nove regole (elementi neutri, opposti, inversi, proprietà commutativa, associativa e distributiva). Un insieme con queste regole si chiama **campo**: $\Q$, $\R$ e $\C$ lo sono, $\N$ e $\Z$ no.
- $\R$ è **ordinato**: $a > b$ vuol dire che $a - b$ è positivo.
- Parentesi diverse, oggetti diversi: $\{1, 2\}$ è un insieme di due numeri, $(1, 2)$ è un intervallo aperto (oppure un punto del piano), $[1, 2]$ è un intervallo chiuso.

> [!CANALI]
> Algebra lineare e Geometria usa le **stesse dispense** nei tre canali: Buzano insegna nei canali A e B, Radeschi nei canali B e C. Questi appunti seguono le dispense 2026, quindi valgono allo stesso modo per A, B e C. Cambiano solo i giorni delle lezioni: la pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)) avverte che i cambi d'orario vengono annunciati lì e a lezione. Esame e quiz sono comuni ai tre canali.

## Insiemi: il linguaggio di partenza (p. 2)

Prima dei numeri serve una parola: **insieme**. Un insieme è una collezione di oggetti, che si chiamano i suoi **elementi**. Per esempio gli studenti in un'aula formano un insieme, e ogni studente è un elemento di quell'insieme.

In matematica un insieme si scrive con le **parentesi graffe** $\{\ \}$, mettendo dentro gli elementi separati da virgole:

$$A = \{1, 3, 5\}$$

Questo $A$ contiene esattamente tre numeri: 1, 3 e 5. Quando gli elementi sono infiniti se ne scrivono alcuni e poi i **puntini** $\dots$, che vogliono dire «e così via, con la stessa regola».

> [!OLTRE] · due regole sulle graffe
> In un insieme **l'ordine non conta** e **le ripetizioni non contano**: $\{1, 2\}$, $\{2, 1\}$ e $\{1, 1, 2\}$ sono lo stesso insieme, con due elementi. Conta solo *chi c'è dentro*. Per questo le graffe non vanno mai usate per i punti o per i vettori, dove l'ordine conta eccome (vedi la sezione sulle notazioni).

### I simboli che userai subito

| Simbolo | Si legge | Esempio | Vero o falso? |
|---|---|---|---|
| $x \in A$ | «$x$ appartiene ad $A$» | $3 \in \{1, 3, 5\}$ | vero |
| $x \notin A$ | «$x$ non appartiene ad $A$» | $2 \notin \{1, 3, 5\}$ | vero |
| $B \subset A$ | «$B$ è contenuto in $A$» (ogni elemento di $B$ sta anche in $A$) | $\{1, 5\} \subset \{1, 3, 5\}$ | vero |
| $B \subsetneq A$ | «$B$ è contenuto **strettamente** in $A$» ($B \subset A$ e in $A$ c'è almeno un elemento in più) | $\{1, 5\} \subsetneq \{1, 3, 5\}$ | vero: il 3 è in più |
| $\emptyset$ | «insieme vuoto» (nessun elemento) | $\emptyset \subset A$ per ogni insieme $A$ | vero |

Un insieme si può anche descrivere con una **proprietà**, invece di elencare gli elementi:

$$\{x \in \R \mid 1 < x < 2\}$$

si legge: «l'insieme degli $x$ in $\R$ **tali che** $1 < x < 2$». La barretta $\mid$ vuol dire proprio «tale che» (qualcuno usa i due punti $:$ al suo posto). A sinistra della barretta c'è *dove* si cercano gli elementi, a destra la *condizione* che devono rispettare.

> [!NOTA] Dove si approfondisce
> Le dispense ricordano che la teoria degli insiemi si fa in dettaglio nella parte di **Matematica Discreta** del corso (MDAG parte 1). Qui servono solo gli insiemi di numeri.

## I numeri naturali, interi e razionali (p. 2)

> [!DEF] 1.1 · Numeri naturali, interi e razionali
> L'insieme dei **numeri naturali** è $\N = \{0, 1, 2, 3, \dots\}$.
>
> Se aggiungiamo i numeri negativi otteniamo l'insieme dei **numeri interi** $\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$.
>
> Se oltre agli interi consideriamo tutti i numeri esprimibili come frazioni $\frac ab$, otteniamo l'insieme dei **numeri razionali**
> $$\Q = \left\{ \frac ab \ ;\ a, b \in \Z,\ b \neq 0 \right\}.$$

Guardiamo la definizione un pezzo alla volta.

- $\N$ sono i numeri **per contare**: 0, 1, 2, 3 e così via, senza fine.
- $\Z$ aggiunge i **negativi**: $-1, -2, -3, \dots$ Il simbolo viene dal tedesco *Zahlen*, «numeri».
- $\Q$ contiene **tutte le frazioni** $\frac ab$ con $a$ e $b$ interi. La condizione $b \neq 0$ c'è perché **non si divide per zero**. La Q viene da *quoziente*.
- In $\Q$ il punto e virgola dentro le graffe fa lo stesso lavoro della barretta: «dove $a$ e $b$ sono interi e $b$ non è zero».

> [!TRAPPOLA] Lo zero è un numero naturale
> In questo corso (e nel libro di Martelli) $\N$ **comincia da 0**. In alcuni libri di scuola $\N$ comincia da 1: all'esame vale la convenzione del corso.

### Perché servono insiemi sempre più grandi

C'è un filo che lega tutti questi insiemi: ogni volta troviamo un'equazione semplice che **non ha soluzione** nell'insieme che abbiamo, e allora lo allarghiamo.

| Equazione | Soluzione | Nell'insieme vecchio? | Insieme nuovo |
|---|---|---|---|
| $x + 5 = 3$ | $x = -2$ | $-2 \notin \N$ | $\Z$ |
| $2x = 1$ | $x = \frac 12$ | $\frac 12 \notin \Z$ | $\Q$ |
| $x^2 = 2$ | $x = \pm\sqrt 2$ | $\sqrt 2 \notin \Q$ (lo dimostriamo più avanti) | $\R$ |
| $x^2 = -1$ | nessun numero reale | nessun quadrato reale è negativo | $\C$, dalla lezione L02 |

### Una frazione, tante scritture

Lo stesso numero razionale si può scrivere in infiniti modi:

$$\frac 17 = \frac 3{21} = \frac{-8}{-56}$$

Tutte e tre valgono «un settimo». Per costruire $\Q$ in modo preciso bisogna dichiarare che queste frazioni rappresentano **lo stesso numero**: si fa con una *relazione di equivalenza*, un concetto che vedrai bene in Matematica Discreta. In pratica la regola è:

$$\frac ab = \frac cd \quad\Longleftrightarrow\quad ad = bc.$$

Controlliamo con $\frac 17$ e $\frac 3{21}$: $1 \cdot 21 = 21$ e $7 \cdot 3 = 21$. Uguali, quindi sono la stessa frazione.

> [!NOTA] Chi viene prima
> Le dispense precisano che $\N$ è un **concetto primitivo**: non lo si definisce a partire da altro, si parte da lì. Poi $\Z$ si costruisce a partire da $\N$, e $\Q$ a partire da $\Z$.

> [!OLTRE] · le frazioni in forma decimale
> Se fai la divisione, ogni frazione diventa un numero decimale **finito** oppure **periodico**, cioè con un gruppo di cifre che si ripete per sempre:
> $$\frac 14 = 0{,}25 \qquad \frac 13 = 0{,}333\ldots = 0{,}\overline{3} \qquad \frac 17 = 0{,}\overline{142857}$$
> Vale anche il contrario: ogni decimale periodico è una frazione (esercizio 2). Quindi un numero con infinite cifre **che non si ripetono mai** non può essere razionale: sono proprio i numeri irrazionali.

## Dalla scuola a una definizione precisa dei numeri reali (pp. 2–3)

### L'idea di scuola: infinite cifre dopo la virgola

A scuola si impara che un **numero reale** è un numero che può avere infinite cifre dopo la virgola, come $\pi = 3{,}14159\ldots$ Le dispense dicono che questa definizione è **corretta**, con una sola ambiguità da ricordare: due scritture diverse possono indicare lo stesso numero. Per esempio

$$5{,}973\overline{9} = 5{,}9739999\ldots = 5{,}974.$$

Lo stesso succede con $0{,}\overline 9 = 0{,}999\ldots$, che è **esattamente** $1$. Un modo semplice per convincersene:

1. sappiamo che $\frac 13 = 0{,}333\ldots$;
2. moltiplichiamo tutti e due i lati per 3: a sinistra $3 \cdot \frac 13 = 1$, a destra ogni cifra 3 diventa 9;
3. quindi $1 = 0{,}999\ldots$

Non è «un numero appena sotto 1»: è proprio 1, scritto in un altro modo.

### Il problema: come si sommano infinite cifre?

La definizione di scuola però non dice **come si fanno le operazioni**. Per sommare due numeri si parte dalle cifre più a destra, con i riporti. Ma con infinite cifre *non esiste* una cifra più a destra da cui partire. Serve un modo diverso di definire i reali, che le dispense prendono dall'analisi e che ha un pregio in più: non dipende dalla base 10 (che usiamo, scrivono i docenti, solo perché abbiamo dieci dita).

### Successioni

Una **successione** è una lista infinita di numeri, uno per ogni posizione $1, 2, 3, \dots$:

$$a_1,\ a_2,\ a_3,\ a_4,\ \dots$$

Si indica con $(a_n)$. Il numero $a_n$ si chiama **termine** di posto $n$: $a_1$ è il primo, $a_2$ il secondo, e così via.

### Successioni di Cauchy

L'idea è semplice. Prendi una successione di frazioni che, andando avanti, **si stringe**: dopo un po' i termini sono tutti vicinissimi tra loro, vicini *quanto vuoi*. La definizione precisa dice questo, con i simboli.

> [!DEF] Successione di Cauchy (p. 2)
> Una successione $(a_n)$ di numeri razionali $a_n \in \Q$ è **di Cauchy** se per ogni numero razionale $\varepsilon > 0$ esiste un $N > 0$ per cui
> $$|a_m - a_n| < \varepsilon \quad \text{per ogni } m, n > N.$$

Pezzo per pezzo:

- $\varepsilon$ (la lettera greca *epsilon*) è una **tolleranza**: un numero positivo piccolo quanto vuoi, per esempio $0{,}01$ oppure $0{,}000001$.
- $|a_m - a_n|$ è la **distanza** tra due termini: il valore assoluto $|\cdot|$ toglie il segno.
- «esiste un $N$ per cui … per ogni $m, n > N$» vuol dire: **da un certo punto in poi** (dopo il posto $N$), *qualunque* coppia di termini dista meno di $\varepsilon$.
- La tolleranza la scegli **tu**, e la definizione deve funzionare per ogni scelta: più $\varepsilon$ è piccolo, più avanti bisognerà andare (più grande sarà $N$).

> [!ESEMPIO] 1.2 · Il numero $\pi$
> Il numero $\pi = 3{,}1415926\ldots$ corrisponde alla successione di numeri razionali
> $$a_1 = 3{,}1 \quad a_2 = 3{,}14 \quad a_3 = 3{,}141 \quad a_4 = 3{,}1415 \quad \dots$$
> Ogni $a_n$ è razionale: per esempio $a_2 = 3{,}14 = \frac{314}{100}$. Ed è di Cauchy: dopo il posto $n$ tutti i termini hanno le **stesse prime $n + 1$ cifre**, quindi distano tra loro meno di $10^{-n}$. Per esempio da $a_3$ in poi i termini cominciano tutti con $3{,}141$, e distano meno di $0{,}001$.
>
> La successione che definisce un numero reale **non è unica**: anche $3{,}2;\ 3{,}15;\ 3{,}142;\ 3{,}1416;\ \dots$ (le approssimazioni per eccesso) va bene, perché la differenza con la successione di prima tende a zero.

### I numeri reali, finalmente

> [!DEF] Numeri reali (p. 3)
> I **numeri reali** sono definiti come *classi di equivalenza* di successioni di Cauchy di numeri razionali. Due successioni di Cauchy sono **equivalenti** se la loro differenza è una successione che tende a zero.

In modo meno astratto, la procedura funziona così. Prendi una successione di Cauchy di numeri razionali:

- se **converge** a un numero razionale $a_\infty$ (cioè si avvicina sempre di più a quel numero), rappresenta semplicemente quel numero $a_\infty$;
- se **non converge a nessun numero razionale**, «vorrebbe» tendere a qualcosa che in $\Q$ non c'è: allora *definisce un numero nuovo*, che non sta in $\Q$. È un **numero irrazionale**.

Detto con un'immagine: $\Q$ è come un righello con infiniti segni, ma pieno di buchi microscopici. Una successione di Cauchy che «punta» a un buco serve a **riempirlo**.

> [!ESEMPIO] 1.3 · Il numero $e$
> La successione di numeri razionali
> $$a_n = \left(1 + \frac 1n\right)^n$$
> è di Cauchy ma non converge a un numero razionale. Quindi definisce un numero reale nuovo: il **numero di Eulero** $e = 2{,}71828\ldots$
>
> Calcoliamo i primi termini, per vedere che sono davvero frazioni:
> $$a_1 = (1 + 1)^1 = 2, \qquad a_2 = \left(\frac 32\right)^2 = \frac 94 = 2{,}25, \qquad a_3 = \left(\frac 43\right)^3 = \frac{64}{27} \approx 2{,}370.$$

```grafico
titolo: I termini $a_n = \left(1 + \frac 1n\right)^n$ salgono verso $e \approx 2{,}718$ ma nessuno lo raggiunge
proporzioni: libere
x: 0 13
y: 1.8 2.9
nomi: $n$ $a_n$
retta: 0 2.71828 13 2.71828 | ambra | tratteggio | $e$ | no
punto: 1 2 | accento
punto: 2 2.25 | accento
punto: 3 2.37037 | accento
punto: 4 2.44141 | accento
punto: 5 2.48832 | accento
punto: 6 2.52163 | accento
punto: 7 2.5465 | accento
punto: 8 2.56578 | accento
punto: 9 2.58117 | accento
punto: 10 2.59374 | accento
punto: 11 2.6042 | accento
punto: 12 2.61304 | accento
```

### Completezza: in R non ci sono buchi (p. 3)

Intuitivamente puoi lavorare con due idee:

1. ogni numero reale si può **approssimare** con numeri razionali, con la precisione che vuoi (come $3{,}14159$ approssima $\pi$);
2. con questa costruzione abbiamo **tappato tutti i buchi** tra i numeri razionali.

La seconda idea ha un nome preciso.

> [!PROP] · $\R$ è completo
> A differenza di $\Q$, l'insieme $\R$ dei numeri reali è **completo**: ogni successione di Cauchy in $\R$ converge.

Vuol dire che, se rifacessimo tutta la costruzione partendo da successioni di numeri **reali** invece che razionali, **non aggiungeremmo nessun numero nuovo**: i buchi sono già stati riempiti tutti.

> [!OLTRE] · dove trovarlo nel libro
> Il libro di Martelli presenta questa costruzione nel complemento **1.II «Costruzione dei numeri reali»** (pp. 40–42 del libro). Nei due appelli del 2026 (15/01 e 07/09) non ci sono domande sulla costruzione di $\R$: all'esame servono soprattutto gli insiemi, le notazioni e le proprietà di campo.

## Numeri irrazionali: perché $\sqrt 2$ non è una frazione (p. 4)

Riassumiamo gli insiemi visti finora:

$$\N \subsetneq \Z \subsetneq \Q \subsetneq \R$$

Ogni contenimento è **stretto** ($\subsetneq$): ogni insieme ha almeno un elemento che il precedente non ha. Per dimostrarlo basta un esempio per ogni passaggio: $-1 \in \Z$ ma $-1 \notin \N$; $\frac 12 \in \Q$ ma $\frac 12 \notin \Z$; $\sqrt 2 \in \R$ ma $\sqrt 2 \notin \Q$. L'ultimo esempio è il più delicato, e va dimostrato.

```grafico
titolo: Ogni insieme contiene il precedente e ha qualcosa in più
assi: no
griglia: no
x: -1.8 5.4
y: -3.6 3.6
cerchio: 0 0 1 | accento
cerchio: 0.6 0 1.8 | blu
cerchio: 1.2 0 2.6 | viola
cerchio: 1.8 0 3.4 | ambra
testo: 0 0.4 | accento | $\N$
testo: 0 -0.3 | $0,\ 1,\ 2,\ \dots$
testo: 1.75 0.4 | blu | $\Z$
testo: 1.75 -0.3 | $-3$
testo: 3.1 0.4 | viola | $\Q$
testo: 3.1 -0.3 | $\frac 12$
testo: 4.5 0.4 | ambra | $\R$
testo: 4.5 -0.3 | $\sqrt 2,\ \pi$
```

Da dove viene $\sqrt 2$? Da un quadrato con il lato lungo 1: per il teorema di Pitagora la sua diagonale misura $\sqrt{1^2 + 1^2} = \sqrt 2$. È una lunghezza che si disegna benissimo, eppure non è una frazione.

```grafico
titolo: La diagonale di un quadrato di lato 1 è lunga $\sqrt 2$
assi: no
griglia: no
x: -0.4 1.6
y: -0.4 1.4
poligono: 0 0 1 0 1 1 0 1 | blu
segmento: 0 0 1 1 | ambra | spesso | $\sqrt 2$ | no
testo: 0.5 -0.12 | $1$
testo: 1.12 0.5 | $1$
```

### La dimostrazione per assurdo

Per dimostrare che una cosa è vera **per assurdo** si fa così:

1. si suppone che sia vera **la cosa opposta**;
2. si ragiona in modo corretto, passo dopo passo;
3. si arriva a una **contraddizione**, cioè a una cosa impossibile;
4. quindi l'ipotesi del punto 1 era sbagliata, e la tesi è vera.

Martelli lo riassume così: si nega la tesi e si dimostra che questo porta a un assurdo; allora la tesi non può essere falsa, e quindi è vera per esclusione.

> [!PROP] 1.4
> Il numero $\sqrt 2$ non è razionale.

Ecco la dimostrazione delle dispense, con tutti i passaggi spiegati.

1. **Supponiamo per assurdo** che $\sqrt 2$ sia razionale. Allora $\sqrt 2 = \frac ab$ con $a, b$ interi e $b \neq 0$.
2. Possiamo supporre che la frazione sia **ridotta ai minimi termini**, cioè che $a$ e $b$ non abbiano fattori in comune: se ne avessero, basterebbe semplificarla. Questo punto è importante: tra poco lo contraddiremo.
3. **Eleviamo al quadrato**: $2 = \frac{a^2}{b^2}$. Moltiplichiamo entrambi i membri per $b^2$:
   $$a^2 = 2b^2.$$
4. Allora $a^2$ è **pari**, perché è il doppio di un numero intero ($b^2$).
5. Allora anche $a$ è **pari**. Perché? Se $a$ fosse dispari, cioè $a = 2k + 1$, avremmo $a^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, che è dispari. Quindi $a$ non può essere dispari.
6. Essendo pari, $a = 2k$ per qualche intero $k$, e quindi $a^2 = 4k^2$. Sostituendo nel punto 3: $4k^2 = 2b^2$, cioè, dividendo per 2,
   $$b^2 = 2k^2.$$
7. Con lo stesso ragionamento dei punti 4 e 5, anche $b^2$ è pari e quindi **$b$ è pari**.
8. Ma allora $a$ e $b$ sono **entrambi pari**: hanno il fattore 2 in comune, e la frazione $\frac ab$ **non** era ridotta ai minimi termini. Questo contraddice il punto 2.
9. L'ipotesi «$\sqrt 2$ è razionale» porta a un assurdo, quindi è falsa: **$\sqrt 2$ non è razionale**. $\square$

> [!DIM] · un'altra via, dal libro di Martelli
> Martelli arriva anche lui ad $a^2 = 2b^2$ e poi usa la **scomposizione in fattori primi**. In un quadrato ogni fattore primo compare un numero **pari** di volte (per esempio $36 = 2^2 \cdot 3^2$). Allora in $a^2$ il fattore 2 compare un numero pari di volte, mentre in $2b^2$ compare un numero **dispari** di volte (quelle di $b^2$, che sono pari, più una). Due numeri uguali hanno la stessa scomposizione, quindi $a^2 = 2b^2$ è impossibile: il doppio di un quadrato non è mai un quadrato.

> [!IDEA] · il metodo, da ricordare
> Tre ingredienti: (1) scrivere il numero come frazione **ridotta**; (2) elevare al quadrato e togliere i denominatori; (3) mostrare che $a$ e $b$ hanno un fattore in comune. Con la stessa ricetta si dimostra che $\sqrt 3$, $\sqrt 5$, $\sqrt 6$ non sono razionali (esercizi 4 e 9).

> [!OLTRE] · altri numeri irrazionali
> Anche $\pi$ ed $e$ sono irrazionali, ma le dimostrazioni sono molto più difficili e nel corso non servono. In generale $\sqrt n$ è irrazionale ogni volta che $n$ **non** è un quadrato perfetto: $\sqrt 4 = 2$ e $\sqrt 9 = 3$ sono interi, mentre $\sqrt 2$, $\sqrt 3$, $\sqrt 5$, $\sqrt 8$ sono irrazionali.

> [!TRAPPOLA] Irrazionale per irrazionale non fa sempre irrazionale
> $\sqrt 2 \cdot \sqrt 2 = 2$ e $\sqrt 2 + (-\sqrt 2) = 0$ sono razionali. Invece un razionale più un irrazionale è **sempre** irrazionale (esercizio 5): per esempio $1 + \sqrt 2 \notin \Q$.

## Le proprietà di R: che cos'è un campo (p. 4)

Su $\R$ ci sono due **operazioni binarie**: la somma $+$ e il prodotto $\cdot$. «Binaria» vuol dire che prende **due** numeri e ne restituisce **uno**: da $3$ e $4$ la somma dà $7$, il prodotto dà $12$.

> [!PROP] 1.5 · Le nove proprietà di $\R$
> Su $\R$ le operazioni $+$ e $\cdot$ hanno queste proprietà (il simbolo $\forall$ si legge «per ogni»):
> 1. esiste l'**elemento neutro** $0$ per l'addizione: $0 + a = a + 0 = a$, $\forall a \in \R$;
> 2. vale la proprietà **commutativa** $a + b = b + a$, $\forall a, b \in \R$;
> 3. vale la proprietà **associativa** $a + (b + c) = (a + b) + c$, $\forall a, b, c \in \R$;
> 4. ogni elemento $a \in \R$ ha un **inverso** (o **opposto**) $-a$, per cui $a + (-a) = (-a) + a = 0$;
> 5. esiste l'**elemento neutro** $1$ per la moltiplicazione: $1 \cdot a = a \cdot 1 = a$, $\forall a \in \R$;
> 6. vale la proprietà **commutativa** $a \cdot b = b \cdot a$, $\forall a, b \in \R$;
> 7. vale la proprietà **associativa** $a \cdot (b \cdot c) = (a \cdot b) \cdot c$, $\forall a, b, c \in \R$;
> 8. ogni elemento $a \in \R$ con $a \neq 0$ ha un **inverso** $a^{-1}$, per cui $a \cdot a^{-1} = a^{-1} \cdot a = 1$;
> 9. vale la proprietà **distributiva** $a \cdot (b + c) = a \cdot b + a \cdot c$, $\forall a, b, c \in \R$.

Le prime quattro riguardano la somma, dalla 5 alla 8 il prodotto, la 9 li collega. Ecco che cosa dicono, con i numeri:

| # | In parole | Con i numeri |
|---|---|---|
| 1 | sommare 0 non cambia niente | $0 + 7 = 7$ |
| 2 | l'ordine degli addendi non conta | $2 + 5 = 5 + 2 = 7$ |
| 3 | come raggruppi gli addendi non conta | $1 + (2 + 3) = (1 + 2) + 3 = 6$ |
| 4 | ogni numero ha un opposto, che sommato dà 0 | $7 + (-7) = 0$ |
| 5 | moltiplicare per 1 non cambia niente | $1 \cdot 7 = 7$ |
| 6 | l'ordine dei fattori non conta | $2 \cdot 5 = 5 \cdot 2 = 10$ |
| 7 | come raggruppi i fattori non conta | $2 \cdot (3 \cdot 4) = (2 \cdot 3) \cdot 4 = 24$ |
| 8 | ogni numero **diverso da 0** ha un inverso, che moltiplicato dà 1 | $4 \cdot \frac 14 = 1$ |
| 9 | «moltiplicare una somma» = sommare i prodotti | $3 \cdot (2 + 5) = 3 \cdot 2 + 3 \cdot 5 = 21$ |

Nota bene la 8: lo **zero non ha inverso**. Non esiste nessun numero che moltiplicato per 0 dia 1, perché $0 \cdot x = 0$ per ogni $x$. È di nuovo il divieto di dividere per zero.

> [!DEF] Campo
> Un insieme con due operazioni $+$ e $\cdot$ che hanno queste nove proprietà si chiama **campo**.

Le dispense annunciano che il concetto tornerà «in più dettaglio nel futuro»: nella lezione L05 la definizione di campo viene data in modo generale, e da lì in poi **tutto il corso** lavora con vettori «su un campo $\K$» (di solito $\K = \R$ oppure $\K = \C$). Invece di $a \cdot b$ si scrive spesso solo $ab$.

### Quali insiemi sono campi?

| Insieme | opposto di ogni numero (4)? | inverso di ogni numero $\neq 0$ (8)? | È un campo? |
|---|---|---|---|
| $\N$ | no: $-3 \notin \N$ | no: $\frac 13 \notin \N$ | **no** |
| $\Z$ | sì | no: $\frac 12 \notin \Z$ | **no** |
| $\Q$ | sì | sì: l'inverso di $\frac ab$ è $\frac ba$ | **sì** |
| $\R$ | sì | sì | **sì** |
| $\C$ | sì | sì (lezione L02) | **sì** |

Per dire che un insieme **non** è un campo basta **una** proprietà che fallisce, con **un** esempio concreto: «$\Z$ non è un campo perché $2$ non ha inverso in $\Z$» è una risposta completa.

> [!OLTRE] · una piccola conseguenza delle nove regole
> Dalle regole si può dimostrare anche ciò che sembra ovvio, per esempio che $a \cdot 0 = 0$ per ogni $a$:
> $$a \cdot 0 = a \cdot (0 + 0) = a \cdot 0 + a \cdot 0.$$
> Il primo passaggio usa la regola 1 ($0 + 0 = 0$), il secondo la regola 9. Ora sommiamo l'opposto di $a \cdot 0$ a entrambi i membri: a sinistra resta $0$, a destra resta $a \cdot 0$. Quindi $a \cdot 0 = 0$. Nella lezione L05 la stessa idea dimostra che $0v = 0$ per un vettore $v$ (Proposizione 5.5).

## L'ordine: maggiore e minore (p. 5)

$\R$, come $\N$, $\Z$ e $\Q$, è un insieme **ordinato**: c'è una nozione di maggiore e minore, e se $a$ e $b$ sono **distinti** vale sempre una delle due, $a > b$ oppure $b > a$.

La definizione usa un trucco: invece di confrontare due numeri qualsiasi, basta sapere quali numeri sono **positivi**.

> [!DEF] Ordine (p. 5)
> Diciamo che $a > b$ se $a - b > 0$.

Quindi per definire l'ordine basta chiarire quali numeri sono positivi (maggiori di zero) e quali negativi (minori di zero).

- In $\Z$ i positivi sono $1, 2, 3, \dots$ Per esempio $7 > 4$ perché $7 - 4 = 3$ è positivo.
- In $\Q$ i positivi sono le frazioni $\frac ab$ in cui $a$ e $b$ hanno **lo stesso segno**: $\frac 34$ e $\frac{-3}{-4}$ sono positive, $\frac{-3}{4}$ no.
- In $\R$ un numero è positivo se è rappresentato da una successione di Cauchy $(a_n)$ di razionali per cui esiste un razionale $\varepsilon > 0$ con $a_n > \varepsilon$ **definitivamente**, cioè da un certo posto in poi. In parole: i termini, da un certo punto in poi, stanno tutti sopra una soglia positiva fissa.

> [!ESEMPIO] · perché serve «sopra una soglia»
> La successione $a_n = \frac 1n$ ha tutti i termini positivi ($1,\ \frac 12,\ \frac 13,\ \dots$), ma **tende a zero**: rappresenta il numero $0$, che non è positivo. Non esiste una soglia $\varepsilon > 0$ che i termini superino per sempre. Invece $3{,}1;\ 3{,}14;\ 3{,}141;\ \dots$ sta sempre sopra la soglia $\varepsilon = 3$, e infatti $\pi > 0$.

> [!NOTA] Anticipo della lezione L02
> I numeri complessi $\C$ sono un campo, ma **non sono ordinati**: tra due numeri complessi non ha senso dire quale sia il maggiore.

## Notazioni da non confondere (p. 5)

Tre scritture che sembrano simili vogliono dire cose diversissime.

| Scrittura | Che cos'è | Quanti elementi | Per esempio contiene |
|---|---|---|---|
| $\{1, 2\}$ | l'**insieme** che ha esattamente i due elementi 1 e 2 | 2 | solo 1 e 2 |
| $(1, 2)$ | l'**intervallo aperto**: tutti i numeri strettamente tra 1 e 2, estremi **esclusi** | infiniti | $1{,}5$ e $1{,}001$, ma non 1 né 2 |
| $[1, 2]$ | l'**intervallo chiuso**: tutti i numeri tra 1 e 2, estremi **inclusi** | infiniti | $1$, $1{,}5$ e $2$ |

Con la notazione della prima sezione:

$$(1, 2) = \{x \in \R \mid 1 < x < 2\}, \qquad [1, 2] = \{x \in \R \mid 1 \le x \le 2\}.$$

Anche $(1, 2)$ e $[1, 2]$ sono insiemi, ma contengono **infiniti** elementi.

> [!OLTRE] · gli altri intervalli
> Si possono mescolare le parentesi: $[1, 2) = \{x \in \R \mid 1 \le x < 2\}$ include 1 ed esclude 2. Per le semirette si usa $\infty$, sempre con la parentesi tonda perché $\infty$ non è un numero: $[0, +\infty) = \{x \in \R \mid x \ge 0\}$.

C'è un'ultima complicazione: nel corso $(1, 2)$ indica anche un **punto del piano** $\R^2$, oppure un **vettore**. La stessa scrittura può avere significati molto diversi, e quello giusto si capisce dal **contesto**:

- «$x \in (1, 2)$» con $x$ numero reale: è l'intervallo;
- «il punto $P = (1, 2)$» oppure «il vettore $v = (1, 2)$»: è la coppia ordinata, con prima coordinata 1 e seconda coordinata 2, e qui $(1, 2) \neq (2, 1)$.

> [!ESAME] La notazione giusta
> Le dispense insistono: è **essenziale usare sempre la notazione giusta**. In particolare le graffe **non si usano mai** per punti o vettori: scrivere $\{1, 2\}$ per il vettore $(1, 2)$ è un errore, perché in un insieme l'ordine non conta. Negli appelli i vettori colonna compaiono anche come $t(1, 2)$ o ${}^t(1, 2)$, cioè «il trasposto» della riga $(1, 2)$: lo vedrai nella lezione L08.

## L'alfabeto greco del corso (p. 5)

Nel corso si usano regolarmente lettere greche. Le dispense chiedono di imparare queste nove:

| Lettera | Nome | Dove la incontrerai |
|---|---|---|
| $\alpha$ | alfa (*alpha*) | angoli, coefficienti |
| $\varepsilon$ | epsilon | una quantità piccola a piacere (successioni di Cauchy) |
| $\sigma$ | sigma | coefficienti, permutazioni in Matematica Discreta |
| $\vartheta$ | theta | angoli, per esempio l'argomento di un numero complesso |
| $\phi$ | fi (*phi*) | angoli, applicazioni |
| $\pi$ | pi greco | il numero $3{,}14159\ldots$ |
| $\lambda$ | lambda | scalari, e poi gli autovalori |
| $\mu$ | mi (*mu*) | scalari |
| $\varrho$ | rho | raggi e distanze |

Alcune lettere hanno due forme: $\vartheta$ e $\theta$ sono entrambe theta, $\phi$ e $\varphi$ entrambe fi, $\varrho$ e $\rho$ entrambe rho, $\varepsilon$ ed $\epsilon$ entrambe epsilon.

## Il linguaggio dei simboli (oltre le dispense)

> [!OLTRE] · perché questa sezione
> Le dispense usano già da questa lezione simboli come $\forall$ e $\Longleftrightarrow$. Il libro di Martelli li spiega nel §1.1 (pp. 4–7). Ecco un piccolo dizionario per leggere le formule ad alta voce.

| Simbolo | Si legge | Esempio |
|---|---|---|
| $\forall$ | «per ogni» | $\forall a \in \R:\ a + 0 = a$ |
| $\exists$ | «esiste» | $\exists x \in \Z:\ x + 5 = 3$ (vero: $x = -2$) |
| $\exists!$ | «esiste ed è unico» | $\forall x \in \R\ \exists!\, y \in \R:\ 2y = x$ |
| $:$ oppure $\mid$ | «tale che» | $\{x \in \R \mid x > 0\}$ |
| $\Longrightarrow$ | «implica», «se … allora …» | $a = 2 \Longrightarrow a^2 = 4$ |
| $\Longleftrightarrow$ | «se e solo se» (vale in entrambi i versi) | $a - b > 0 \Longleftrightarrow a > b$ |
| $\cup$, $\cap$ | unione («o»), intersezione («e») | $\{1, 2\} \cup \{2, 3\} = \{1, 2, 3\}$, $\{1, 2\} \cap \{2, 3\} = \{2\}$ |
| $A \setminus B$ | «$A$ meno $B$» | $\Z \setminus \N = \{-1, -2, -3, \dots\}$ |

I **quantificatori** $\forall$ ed $\exists$ cambiano tutto il senso di una frase, e **l'ordine conta**. Due esempi dal libro:

- $\forall x \in \R\ \exists y \in \R:\ 2y = x$ è **vera**: ogni numero reale si può dividere per 2 (basta $y = \frac x2$);
- la stessa frase con $\Z$ al posto di $\R$, cioè $\forall x \in \Z\ \exists y \in \Z:\ 2y = x$, è **falsa**: per $x = 1$ non esiste nessun intero $y$ con $2y = 1$.

> [!TRAPPOLA] «Implica» non vuol dire «se e solo se»
> $a = 2 \Longrightarrow a^2 = 4$ è vera, ma al contrario no: $a^2 = 4$ non implica $a = 2$, perché anche $a = -2$ funziona. Quando una proprietà vale nei due versi si scrive $\Longleftrightarrow$.

## Conti con le radici senza calcolatrice (oltre le dispense)

> [!ESAME] Perché ora
> All'esame di Algebra lineare **la calcolatrice è vietata**, e le risposte del quiz sono spesso scritte con radici. Nell'appello del 07/09/2026 le cinque risposte possibili per una distanza erano $3$, $\frac{\sqrt 3}3$, $3\sqrt 3$, $\sqrt 3$ e $3 + \sqrt 3$; per un angolo comparivano $\arccos\frac 3{\sqrt{43}}$, $\arccos\frac 6{\sqrt{42}}$ e simili. Bisogna saper riconoscere a colpo d'occhio che, per esempio, $\frac 1{\sqrt 3} = \frac{\sqrt 3}3$.

Le regole che servono (per $a, b \ge 0$):

| Regola | Esempio |
|---|---|
| $\sqrt{a}\,\sqrt{b} = \sqrt{ab}$ | $\sqrt 2\,\sqrt 8 = \sqrt{16} = 4$ |
| $\sqrt{a^2 b} = a\sqrt b$: si **porta fuori** un quadrato | $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt 3$ |
| $(\sqrt a)^2 = a$ | $(\sqrt 5)^2 = 5$ |
| $\sqrt{x^2} = \lvert x \rvert$ (anche per $x < 0$) | $\sqrt{(-3)^2} = \sqrt 9 = 3$ |
| si somma solo la **stessa** radice | $2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$, ma $\sqrt 2 + \sqrt 3 \neq \sqrt 5$ |
| per togliere una radice dal denominatore si moltiplica sopra e sotto per quella radice | $\frac 6{\sqrt 3} = \frac{6\sqrt 3}{3} = 2\sqrt 3$ |
| con una somma al denominatore si usa $(x - y)(x + y) = x^2 - y^2$ | $\frac 1{\sqrt 2 - 1} = \frac{\sqrt 2 + 1}{(\sqrt 2)^2 - 1^2} = \sqrt 2 + 1$ |

> [!TRAPPOLA] La radice di una somma
> $\sqrt{a + b}$ **non** è $\sqrt a + \sqrt b$. Controllo con i numeri: $\sqrt{9 + 16} = \sqrt{25} = 5$, mentre $\sqrt 9 + \sqrt{16} = 3 + 4 = 7$.

## Verso l'esame

La prova di **Algebra lineare e Geometria** (parte 2 di MDAG) è scritta ed è comune ai canali A, B e C. Al 30/09/2026 le regole del 2026/27 non sono ancora pubblicate (su Moodle: «informazioni seguono»), quindi il riferimento sono quelle del 2025/26, confermate dai testi degli appelli:

- **10 domande a risposta multipla**, ciascuna con 5 risposte (a)–(e) e **una sola giusta**, 1 punto ciascuna;
- **2 problemi a risposta aperta** con sottodomande, 11 punti ciascuno: per avere punti parziali bisogna mostrare il lavoro;
- **sbarramento**: i problemi vengono corretti solo a chi fa **almeno 6 punti su 10** nel quiz;
- **2 ore**, massimo 32 punti, sufficienza con 18;
- materiale ammesso: **solo un foglio protocollo o due fogli A4 (4 facciate) scritti a mano**, con formulario, appunti ed esercizi; **niente calcolatrice** e niente libri;
- nel quiz le risposte si segnano con una **X**, non con un cerchio.

| Appello 2026/27 | Iscrizioni su MyUniTo | Ora e aule |
|---|---|---|
| ven 22/01/2027 | 02/01 – 15/01/2027 | 14:00, aule A, B, C, D, F |
| ven 05/02/2027 | 16/01 – 29/01/2027 | 14:00, aule A, B, C, D, F |

Il voto finale di MDAG è la media delle due prove (Matematica Discreta e Algebra lineare), che si possono sostenere anche in appelli diversi. Attenzione: ripresentarsi a una prova già superata **annulla** il voto precedente, anche se va peggio. Dettagli e fonti nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa di questa lezione serve all'esame**

1. **Campi.** Gli scalari degli spazi vettoriali (lezioni L05–L07) vivono in un campo. Saper dire perché $\Z$ non è un campo è una tipica domanda di teoria da quiz.
2. **Notazioni.** Insiemi, intervalli, punti e vettori con le parentesi giuste: nei problemi si scrivono le risposte con questa notazione.
3. **Conti a mano.** Frazioni e radici compaiono in quasi tutte le domande (norme, angoli, distanze). Allenati adesso con gli esercizi 2 e 8.
4. **Dimostrazioni per assurdo.** Il quiz non chiede dimostrazioni, ma il ragionamento per assurdo torna spesso nel corso.

> [!ESAME] Il foglio da 4 facciate
> È l'unico materiale ammesso: conviene costruirlo lezione per lezione. Da questa lezione bastano due righe: le regole delle radici della sezione precedente e «campo = 9 proprietà; $\N$ e $\Z$ non sono campi».

## Quiz

```quiz
D: Quale di questi insiemi, con la somma e il prodotto usuali, **non** è un campo?
- $\Q$
- $\R$
+ $\Z$
- $\C$
- Sono tutti campi.
= In $\Z$ il numero $2$ non ha inverso moltiplicativo: $\frac 12 \notin \Z$. Manca la proprietà 8, quindi $\Z$ non è un campo. $\Q$, $\R$ e $\C$ invece lo sono.

D: Quale di questi numeri è irrazionale?
- $0{,}125$
- $\frac{22}{7}$
- $\sqrt 9$
+ $\sqrt{12}$
- $0{,}\overline{3}$
= $\sqrt{12} = 2\sqrt 3$ e $\sqrt 3$ è irrazionale. Gli altri sono razionali: $0{,}125 = \frac 18$, $\sqrt 9 = 3$ e $0{,}\overline 3 = \frac 13$; $\frac{22}7$ è una frazione (solo un'approssimazione di $\pi$).

D: Quale affermazione è vera?
+ $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$
- $\Q \subsetneq \Z$
- $\R \subsetneq \Q$
- $\sqrt 2 \in \Q$
- $\Z = \N$
= Ogni insieme è contenuto strettamente nel successivo: $-1 \in \Z \setminus \N$, $\frac 12 \in \Q \setminus \Z$, $\sqrt 2 \in \R \setminus \Q$.

D: L'insieme $\{x \in \R \mid 1 \le x < 2\}$ è:
- $(1, 2)$
- $[1, 2]$
+ $[1, 2)$
- $\{1, 2\}$
- $(1, 2]$
= Il $\le$ include 1 (parentesi quadra), il $<$ esclude 2 (parentesi tonda). $\{1, 2\}$ invece è l'insieme con i soli due numeri 1 e 2.

D: Il numero $0{,}999\ldots$ (con infinite cifre 9) è uguale a:
+ $1$
- un numero appena più piccolo di $1$
- $0{,}9$
- $\frac 9{10}$
- non è un numero reale
= $\frac 13 = 0{,}333\ldots$; moltiplicando per 3 si ottiene $1 = 0{,}999\ldots$. Come $5{,}973\overline 9 = 5{,}974$ nelle dispense: sono due scritture dello stesso numero.

D: Nella dimostrazione che $\sqrt 2 \notin \Q$, a quale assurdo si arriva?
+ $a$ e $b$ sono entrambi pari, mentre la frazione $\frac ab$ era ridotta ai minimi termini.
- $\sqrt 2 = 2$.
- $b = 0$.
- $a^2$ è dispari.
- $2$ non è un numero primo.
= Da $a^2 = 2b^2$ si ricava che $a$ è pari, poi che anche $b$ è pari: allora $a$ e $b$ hanno il fattore 2 in comune, contro l'ipotesi che la frazione fosse ridotta.

D: Quale proprietà manca a $\Z$ per essere un campo?
+ L'esistenza dell'inverso moltiplicativo di ogni elemento non nullo.
- L'esistenza dell'opposto.
- La proprietà commutativa del prodotto.
- La proprietà distributiva.
- L'esistenza dell'elemento neutro della somma.
= In $\Z$ ogni numero ha l'opposto, e somma e prodotto sono commutativi, associativi e distributivi. Ma solo $1$ e $-1$ hanno un inverso intero: per esempio $3$ non ce l'ha.

D: Quanto vale $\sqrt 8 + \sqrt{18}$?
+ $5\sqrt 2$
- $\sqrt{26}$
- $2\sqrt 2$
- $13$
- $6\sqrt 3$
= $\sqrt 8 = \sqrt{4 \cdot 2} = 2\sqrt 2$ e $\sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt 2$, quindi la somma è $5\sqrt 2$. Attenzione: $\sqrt 8 + \sqrt{18} \neq \sqrt{26}$, la radice di una somma non è la somma delle radici.

D: Quanto vale $a_2$ nella successione $a_n = \left(1 + \frac 1n\right)^n$? Scrivi una frazione o un decimale.
N: 9/4
= $a_2 = \left(1 + \frac 12\right)^2 = \left(\frac 32\right)^2 = \frac 94 = 2{,}25$.
```

## Esercizi

::: esercizio base Dove abita ogni numero
Per ciascun numero trova l'insieme **più piccolo** tra $\N$, $\Z$, $\Q$, $\R$ che lo contiene:
$$-4, \qquad 0, \qquad \frac 72, \qquad \sqrt{16}, \qquad \sqrt 7, \qquad 0{,}\overline{12}, \qquad \pi, \qquad -\frac{\sqrt{25}}{5}.$$
::: soluzione
| Numero | Semplificato | Insieme più piccolo | Perché |
|---|---|---|---|
| $-4$ | $-4$ | $\Z$ | negativo, quindi non sta in $\N$ |
| $0$ | $0$ | $\N$ | nel corso lo zero è naturale |
| $\frac 72$ | $3{,}5$ | $\Q$ | frazione che non è un intero |
| $\sqrt{16}$ | $4$ | $\N$ | $4 \cdot 4 = 16$ |
| $\sqrt 7$ | — | $\R$ | 7 non è un quadrato perfetto: irrazionale |
| $0{,}\overline{12}$ | $\frac 4{33}$ | $\Q$ | decimale periodico (vedi esercizio 2) |
| $\pi$ | — | $\R$ | irrazionale |
| $-\frac{\sqrt{25}}5$ | $-\frac 55 = -1$ | $\Z$ | prima si semplifica, poi si decide |

Morale: prima di decidere, **semplifica** sempre. $\sqrt{16}$ sembra irrazionale ma è 4.
:::

::: esercizio base Da decimale periodico a frazione
Scrivi come frazione: (a) $0{,}\overline 7$; (b) $2{,}\overline 3$; (c) $0{,}\overline{12}$.
::: soluzione
Il trucco: chiamo $x$ il numero, lo moltiplico per $10$ (o per $100$ se il periodo ha due cifre) e sottraggo. Le code infinite, identiche, si cancellano.

(a) $x = 0{,}777\ldots$
- $10x = 7{,}777\ldots$
- $10x - x = 7{,}777\ldots - 0{,}777\ldots = 7$, cioè $9x = 7$
- $x = \frac 79$.

(b) $x = 2{,}333\ldots$
- $10x = 23{,}333\ldots$
- $9x = 23{,}333\ldots - 2{,}333\ldots = 21$
- $x = \frac{21}9 = \frac 73$. Controllo: $7 : 3 = 2{,}333\ldots$ ✓

(c) $x = 0{,}1212\ldots$ ha un periodo di **due** cifre, quindi moltiplico per $100$:
- $100x = 12{,}1212\ldots$
- $99x = 12$
- $x = \frac{12}{99} = \frac 4{33}$.
:::

::: esercizio base $0{,}\overline 9 = 1$ con il metodo dell'esercizio 2
Usa lo stesso metodo per mostrare che $0{,}999\ldots = 1$, e poi che $5{,}973\overline 9 = 5{,}974$.
::: soluzione
$x = 0{,}999\ldots$, quindi $10x = 9{,}999\ldots$ e $9x = 9$: $x = 1$.

Per il secondo: $5{,}973\overline 9 = 5{,}973 + 0{,}000\overline 9$, e $0{,}000\overline 9 = \frac{0{,}\overline 9}{1000} = \frac 1{1000} = 0{,}001$. Quindi $5{,}973\overline 9 = 5{,}973 + 0{,}001 = 5{,}974$.
:::

::: esercizio medio $\sqrt 3$ non è razionale
Dimostra per assurdo che $\sqrt 3 \notin \Q$. Suggerimento: ti serve il fatto «se $a^2$ è divisibile per 3, anche $a$ lo è». Dimostra anche questo.
::: soluzione
**Il fatto sui multipli di 3.** Ogni intero $a$ si scrive in uno di tre modi: $a = 3k$, $a = 3k + 1$ oppure $a = 3k + 2$. Nei due ultimi casi:
- $(3k + 1)^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$: resto 1 nella divisione per 3;
- $(3k + 2)^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$: resto 1.

Quindi se $a$ non è multiplo di 3, neanche $a^2$ lo è. Detto al contrario: se $a^2$ è multiplo di 3, anche $a$ lo è.

**La dimostrazione**, come per $\sqrt 2$:
1. Per assurdo $\sqrt 3 = \frac ab$, frazione ridotta ai minimi termini.
2. Al quadrato: $a^2 = 3b^2$. Quindi $a^2$ è multiplo di 3, e per il fatto appena visto anche $a$: $a = 3k$.
3. Sostituisco: $9k^2 = 3b^2$, cioè $b^2 = 3k^2$. Quindi anche $b$ è multiplo di 3.
4. $a$ e $b$ hanno il fattore 3 in comune: la frazione non era ridotta. Assurdo, quindi $\sqrt 3 \notin \Q$.
:::

::: esercizio medio Razionale più irrazionale
(a) Dimostra che se $q \in \Q$ e $x \notin \Q$, allora $q + x \notin \Q$. (b) Trova due numeri irrazionali la cui somma è razionale, e due il cui prodotto è razionale.
::: soluzione
(a) Per assurdo, supponiamo $q + x = r$ con $r \in \Q$. Allora $x = r - q$. Ma la differenza di due razionali è razionale: $\frac ab - \frac cd = \frac{ad - bc}{bd}$. Quindi $x \in \Q$, contro l'ipotesi. Assurdo: $q + x \notin \Q$.

(b) Somma: $\sqrt 2 + (-\sqrt 2) = 0$. Prodotto: $\sqrt 2 \cdot \sqrt 2 = 2$, oppure $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$. Quindi «irrazionale + irrazionale» e «irrazionale · irrazionale» possono essere razionali: non c'è una regola generale.
:::

::: esercizio medio Campo o no?
Per ciascun insieme, con la somma e il prodotto usuali, di' se è un campo; se non lo è, indica **una** proprietà che fallisce, con un esempio: (a) $\N$; (b) $\Z$; (c) i numeri reali positivi $\{x \in \R \mid x > 0\}$; (d) $\Q$.
::: soluzione
(a) $\N$: no. Proprietà 4: $3$ non ha opposto in $\N$, perché $-3 \notin \N$.

(b) $\Z$: no. Proprietà 8: $2$ non ha inverso in $\Z$, perché $\frac 12 \notin \Z$.

(c) Reali positivi: no. Proprietà 1: lo $0$ non ci sta, quindi manca l'elemento neutro della somma (e di conseguenza anche gli opposti).

(d) $\Q$: sì. Tutte le nove proprietà valgono; in particolare l'opposto di $\frac ab$ è $\frac{-a}b$ e, se $a \neq 0$, l'inverso è $\frac ba$, che è ancora una frazione.
:::

::: esercizio base Intervalli
(a) Scrivi con le parentesi l'insieme $\{x \in \R \mid -1 < x \le 3\}$. (b) Scrivi con la notazione insiemistica l'intervallo $[0, 5)$. (c) Quale intervallo è $\{x \in \R \mid x^2 < 4\}$? (d) Quanti elementi hanno $\{0, 5\}$ e $(0, 5)$?
::: soluzione
(a) $(-1, 3]$: tonda a sinistra perché $-1$ è escluso ($<$), quadra a destra perché $3$ è incluso ($\le$).

(b) $\{x \in \R \mid 0 \le x < 5\}$.

(c) $x^2 < 4$ vuol dire che $x$ sta strettamente tra $-2$ e $2$: prova $x = 1{,}9$ ($3{,}61 < 4$, sì) e $x = -2$ ($4 < 4$, no). Quindi è $(-2, 2)$.

(d) $\{0, 5\}$ ha **2** elementi; $(0, 5)$ ne ha **infiniti**.
:::

::: esercizio medio Conti senza calcolatrice
Semplifica: (a) $\sqrt{50}$; (b) $\sqrt{12} \cdot \sqrt 3$; (c) $\frac 6{\sqrt 3}$; (d) $(1 + \sqrt 2)^2$; (e) $\frac 1{\sqrt 2 - 1}$; (f) $\frac{\sqrt 3}3$ e $\frac 1{\sqrt 3}$: sono uguali?
::: soluzione
(a) $\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt 2$.

(b) $\sqrt{12} \cdot \sqrt 3 = \sqrt{36} = 6$.

(c) $\frac 6{\sqrt 3} = \frac{6\sqrt 3}{\sqrt 3 \cdot \sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$.

(d) $(1 + \sqrt 2)^2 = 1^2 + 2 \cdot 1 \cdot \sqrt 2 + (\sqrt 2)^2 = 1 + 2\sqrt 2 + 2 = 3 + 2\sqrt 2$.

(e) Moltiplico sopra e sotto per $\sqrt 2 + 1$:
$$\frac 1{\sqrt 2 - 1} \cdot \frac{\sqrt 2 + 1}{\sqrt 2 + 1} = \frac{\sqrt 2 + 1}{(\sqrt 2)^2 - 1^2} = \frac{\sqrt 2 + 1}{2 - 1} = \sqrt 2 + 1.$$

(f) Sì: $\frac 1{\sqrt 3} = \frac{\sqrt 3}{\sqrt 3 \cdot \sqrt 3} = \frac{\sqrt 3}3$. Nel quiz d'esame lo stesso numero può comparire in una delle due forme.
:::

::: esercizio difficile $\sqrt 2 + \sqrt 3$ è irrazionale
(a) Dimostra che $\sqrt 6 \notin \Q$. (b) Usalo per dimostrare che $\sqrt 2 + \sqrt 3 \notin \Q$.
::: soluzione
(a) Per assurdo $\sqrt 6 = \frac ab$ ridotta. Allora $a^2 = 6b^2 = 2 \cdot 3b^2$ è pari, quindi $a$ è pari: $a = 2k$. Sostituisco: $4k^2 = 6b^2$, cioè $2k^2 = 3b^2$. Allora $3b^2$ è pari; siccome 3 è dispari, $b^2$ deve essere pari (dispari per dispari fa dispari), quindi $b$ è pari. $a$ e $b$ sono entrambi pari: assurdo.

(b) Per assurdo $\sqrt 2 + \sqrt 3 = q$ con $q \in \Q$. Elevo al quadrato:
$$q^2 = (\sqrt 2)^2 + 2\sqrt 2\sqrt 3 + (\sqrt 3)^2 = 5 + 2\sqrt 6.$$
Quindi $\sqrt 6 = \frac{q^2 - 5}2$, che è razionale perché $q$ lo è. Ma per il punto (a) $\sqrt 6$ non è razionale: assurdo. Quindi $\sqrt 2 + \sqrt 3 \notin \Q$.
:::

::: esercizio base I primi termini della successione di $e$
Calcola come frazioni $a_1$, $a_2$, $a_3$, $a_4$ di $a_n = \left(1 + \frac 1n\right)^n$ e controlla che crescono.
::: soluzione
- $a_1 = 2^1 = 2$
- $a_2 = \left(\frac 32\right)^2 = \frac 94 = 2{,}25$
- $a_3 = \left(\frac 43\right)^3 = \frac{64}{27} \approx 2{,}370$
- $a_4 = \left(\frac 54\right)^4 = \frac{625}{256} \approx 2{,}441$

Crescono: $2 < 2{,}25 < 2{,}370 < 2{,}441$, e restano sotto $e \approx 2{,}718$ (vedi il grafico della sezione sui reali). Ogni termine è razionale, ma il numero a cui si avvicinano non lo è.
:::

## Domande di ripasso

::: domanda Che cosa contengono $\N$, $\Z$ e $\Q$? Lo zero sta in $\N$?
$\N = \{0, 1, 2, \dots\}$ sono i naturali, **zero compreso** nella convenzione del corso. $\Z$ aggiunge i negativi. $\Q = \{\frac ab \mid a, b \in \Z,\ b \neq 0\}$ contiene tutte le frazioni.
:::

::: domanda Perché si passa da $\Q$ a $\R$?
Perché in $\Q$ ci sono equazioni semplici senza soluzione, come $x^2 = 2$, e successioni di Cauchy che non convergono (per esempio quella che definisce $e$). I reali riempiono questi «buchi».
:::

::: domanda Che cos'è una successione di Cauchy, in parole?
Una lista infinita di numeri in cui, da un certo punto in poi, tutti i termini sono vicini tra loro quanto si vuole: per ogni tolleranza $\varepsilon > 0$ esiste un posto $N$ dopo il quale $|a_m - a_n| < \varepsilon$.
:::

::: domanda Come si definiscono i numeri reali con le successioni di Cauchy?
Come classi di equivalenza di successioni di Cauchy di razionali; due successioni sono equivalenti se la loro differenza tende a zero. Se una successione converge a un razionale rappresenta quel razionale; altrimenti definisce un numero nuovo, irrazionale.
:::

::: domanda Che cosa vuol dire che $\R$ è completo?
Che ogni successione di Cauchy di numeri reali converge a un numero reale: rifacendo la costruzione partendo da $\R$ non si aggiunge niente di nuovo.
:::

::: domanda Ripeti la dimostrazione che $\sqrt 2$ non è razionale.
Per assurdo $\sqrt 2 = \frac ab$ ridotta. Allora $a^2 = 2b^2$, quindi $a^2$ è pari e anche $a$ è pari: $a = 2k$. Da $4k^2 = 2b^2$ viene $b^2 = 2k^2$, quindi anche $b$ è pari. $a$ e $b$ sono entrambi pari: la frazione non era ridotta, assurdo.
:::

::: domanda Che cos'è un campo? Fai un esempio e un controesempio.
Un insieme con due operazioni $+$ e $\cdot$ che hanno le nove proprietà: neutri 0 e 1, opposti, inversi dei non nulli, commutativa, associativa, distributiva. Esempi: $\Q$, $\R$, $\C$. Controesempio: $\Z$, perché 2 non ha inverso.
:::

::: domanda Perché lo zero non ha inverso?
Perché $0 \cdot x = 0$ per ogni $x$: non esiste nessun $x$ con $0 \cdot x = 1$. Per questo la proprietà 8 chiede l'inverso solo per $a \neq 0$.
:::

::: domanda Come si definisce $a > b$?
$a > b$ se $a - b > 0$. Quindi basta sapere quali numeri sono positivi: in $\Z$ sono $1, 2, 3, \dots$; in $\Q$ le frazioni con numeratore e denominatore dello stesso segno.
:::

::: domanda Che differenza c'è tra $\{1, 2\}$, $(1, 2)$ e $[1, 2]$?
$\{1, 2\}$ è l'insieme con i due elementi 1 e 2. $(1, 2)$ è l'intervallo aperto, estremi esclusi, oppure il punto o il vettore di coordinate 1 e 2, a seconda del contesto. $[1, 2]$ è l'intervallo chiuso, estremi inclusi.
:::

::: domanda Quali sono le nove lettere greche da sapere?
$\alpha$ (alfa), $\varepsilon$ (epsilon), $\sigma$ (sigma), $\vartheta$ (theta), $\phi$ (fi), $\pi$ (pi), $\lambda$ (lambda), $\mu$ (mu), $\varrho$ (rho).
:::

::: domanda Come si toglie una radice dal denominatore?
Si moltiplicano numeratore e denominatore per la stessa radice: $\frac 6{\sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$. Se al denominatore c'è una somma come $\sqrt 2 - 1$, si moltiplica per $\sqrt 2 + 1$ e si usa $(x - y)(x + y) = x^2 - y^2$.
:::

## Glossario

```glossario
Insieme | Collezione di oggetti, detti elementi; si scrive con le graffe. Ordine e ripetizioni non contano.
Appartenenza ($\in$) | $x \in A$: $x$ è un elemento di $A$. Il contrario si scrive $x \notin A$.
Sottoinsieme ($\subset$, $\subsetneq$) | $B \subset A$: ogni elemento di $B$ sta in $A$. $B \subsetneq A$: in più $A$ ha almeno un elemento che $B$ non ha.
Numeri naturali $\N$ | $\{0, 1, 2, \dots\}$, zero compreso.
Numeri interi $\Z$ | $\{\dots, -2, -1, 0, 1, 2, \dots\}$.
Numeri razionali $\Q$ | Le frazioni $\frac ab$ con $a, b \in \Z$ e $b \neq 0$; in forma decimale sono finite o periodiche.
Numeri reali $\R$ | Classi di equivalenza di successioni di Cauchy di razionali; intuitivamente, i numeri con infinite cifre dopo la virgola.
Numero irrazionale | Numero reale che non è razionale, come $\sqrt 2$, $\pi$, $e$.
Successione | Lista infinita $a_1, a_2, a_3, \dots$; si indica con $(a_n)$.
Successione di Cauchy | Successione i cui termini, da un certo posto in poi, distano tra loro meno di qualsiasi tolleranza $\varepsilon > 0$ fissata.
Completezza | Proprietà di $\R$: ogni successione di Cauchy converge. $\Q$ non è completo.
Dimostrazione per assurdo | Si suppone vera la negazione della tesi e si arriva a una contraddizione.
Operazione binaria | Regola che a due elementi ne associa un terzo, come $+$ e $\cdot$.
Elemento neutro | $0$ per la somma ($a + 0 = a$), $1$ per il prodotto ($a \cdot 1 = a$).
Opposto e inverso | L'opposto di $a$ è $-a$ ($a + (-a) = 0$); l'inverso di $a \neq 0$ è $a^{-1}$ ($a \cdot a^{-1} = 1$).
Campo | Insieme con $+$ e $\cdot$ che hanno le nove proprietà della Proposizione 1.5: $\Q$, $\R$, $\C$ sì; $\N$, $\Z$ no.
Ordine | $a > b$ se $a - b > 0$; $\R$ è ordinato, $\C$ no.
Intervallo aperto / chiuso | $(a, b)$ esclude gli estremi, $[a, b]$ li include.
Quantificatori | $\forall$ «per ogni», $\exists$ «esiste», $\exists!$ «esiste ed è unico».
```

## Checklist

```checklist
- So scrivere $\N$, $\Z$, $\Q$ con le parentesi giuste e so che in questo corso $0 \in \N$.
- So spiegare con un'equazione perché serve ogni insieme nuovo ($x + 5 = 3$, $2x = 1$, $x^2 = 2$).
- So trasformare un decimale periodico in frazione e spiegare perché $0{,}\overline 9 = 1$.
- So spiegare in parole che cos'è una successione di Cauchy e come definisce un numero reale.
- So dire che cosa vuol dire che $\R$ è completo e $\Q$ no.
- So rifare da solo la dimostrazione che $\sqrt 2$ non è razionale, giustificando ogni passaggio.
- So elencare le nove proprietà di campo e spiegare perché $\N$ e $\Z$ non sono campi.
- So la definizione di $a > b$ e quali sono i numeri positivi in $\Z$ e in $\Q$.
- Non confondo $\{1, 2\}$, $(1, 2)$ e $[1, 2]$, e so leggere $\forall$, $\exists$, $\Longrightarrow$, $\Longleftrightarrow$.
- So semplificare radici e toglierle dal denominatore senza calcolatrice.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 1 «Numeri reali», pp. 2–5: le sezioni 1.A–1.E sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizione 1.1, Esempi 1.2 e 1.3, Proposizioni 1.4 e 1.5).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.1 (insiemi numerici, dimostrazione per assurdo, sottoinsiemi, notazione insiemistica, quantificatori), §1.5 (strutture algebriche) e complemento 1.II (costruzione dei numeri reali).
- **Pagina Moodle MDAG2 2026/27** ([id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)): calendario, dispense complete L01–L26, capitoli del libro trattati (1–5, 7–9, 11).
- **Esame**: regole 2025/26 e testi degli appelli del 15/01/2026 e del 07/09/2026 (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); date degli appelli 2026/27 dalla bacheca Esse3.
- Le parti **«Oltre le dispense»** (ripasso sugli insiemi, decimali periodici, simboli, conti con le radici, esercizi) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
