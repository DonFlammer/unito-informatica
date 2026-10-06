---
corso: MDAG
modulo: AG
lezione: L15
titolo: Applicazioni lineari II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L15
descrizione: >-
  Appunti della lezione L15 di Algebra lineare e Geometria (MDAG, parte 2): isomorfismi, spazi vettoriali isomorfi,
  coordinate e matrice associata a un'applicazione lineare rispetto a due basi, con quiz nello stile dell'esame ed
  esercizi svolti.
lede: >-
  Quando due spazi sono lo stesso spazio con nomi diversi, come un polinomio di grado 2 e la lista dei suoi tre
  numeri. Poi come si scrive qualsiasi macchina lineare con una tabella di numeri, scegliendo una base in partenza e
  una in arrivo. Da qui in poi ogni conto su polinomi o matrici diventa un conto con le tabelle.
materiale: dispense
scheda:
  Dispense: lezione 15 · pp. 74–78
  Libro: Martelli, §4.2.5, §4.2.7 e §4.3
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 15 «Applicazioni lineari II»; B. Martelli, Geometria e algebra lineare, §4.2.5, §4.2.7 e §4.3
appunti_html: appunti/MDAG/L15_applicazioni_lineari_2.html
genera_html: true
---

## In breve

- Un **isomorfismo** è una macchina lineare che fa da **dizionario perfetto** tra due spazi: a ogni vettore di partenza corrisponde uno e un solo vettore di arrivo, e viceversa. La macchina che torna indietro è ancora lineare.
- Le dimensioni dicono già molto. Una macchina lineare che non perde niente non può arrivare in uno spazio più piccolo; una che produce tutto non può partire da uno spazio più piccolo.
- Due spazi sono **isomorfi**, cioè lo stesso spazio con nomi diversi, esattamente quando hanno la **stessa dimensione**. Per esempio i polinomi di grado al massimo 2 e le liste di 3 numeri.
- Scelta una base in partenza e una in arrivo, ogni macchina lineare si scrive con una **matrice associata**: nella colonna $j$ ci sono le coordinate di dove va il vettore $j$ della base di partenza.
- Nella scrittura $[f]^{\mathcal B}_{\mathcal C}$ la base di partenza sta **in alto**, quella di arrivo **in basso**.
- Con la matrice associata ogni macchina diventa un prodotto: le coordinate dell'uscita sono la matrice per le coordinate dell'entrata.
- La stessa macchina ha matrici diverse in basi diverse. L'identità, con la stessa base in partenza e in arrivo, ha sempre la matrice identità.
- All'esame la matrice associata è una delle domande più frequenti del quiz.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Lo stesso spazio con nomi diversi: gli isomorfismi (p. 74)

Nella lezione L14 hai visto le macchine lineari, con il loro nucleo (quello che si perde) e la loro immagine (quello che esce). Qui la domanda è: quando due spazi diversi si comportano **esattamente allo stesso modo**?

Una convenzione di scrittura, come nelle dispense: i vettori di $\K^n$ sono **colonne**. Nel testo, per risparmiare spazio, li scriviamo spesso in riga, come $(1, 2)$. Negli appelli trovi anche la scrittura ${}^t(1, 2)$, «la trasposta della riga $(1, 2)$», che è di nuovo la colonna.

### Un dizionario tra polinomi e liste di numeri

Prendi i polinomi di grado al massimo 2, come $1 + 2x + 3x^2$. Ognuno è deciso dai suoi tre numeri, quindi lo posso abbinare alla lista $(1, 2, 3)$. Guarda che cosa succede ai conti:

| Con i polinomi | Con le liste di numeri |
|---|---|
| $p = 1 + 2x + 3x^2$ | $(1, 2, 3)$ |
| $q = -1 + x^2$ | $(-1, 0, 1)$ |
| $p + q = 2x + 4x^2$ | $(1, 2, 3) + (-1, 0, 1) = (0, 2, 4)$ |
| $2q = -2 + 2x^2$ | $2 \cdot (-1, 0, 1) = (-2, 0, 2)$ |

Sommare i polinomi e poi prendere i numeri dà lo stesso risultato che prendere i numeri e poi sommare le liste. Lo stesso per i multipli.

E il dizionario è **perfetto**: a ogni polinomio corrisponde una sola lista, e a ogni lista un solo polinomio. Per l'algebra lineare i polinomi di grado al massimo 2 e le liste di tre numeri sono **lo stesso spazio con nomi diversi**. Il nome tecnico è *isomorfi*, dal greco «della stessa forma».

### Le parole che servono

Ricorda tre parole sulle funzioni, che vedi meglio in Matematica Discreta. Una funzione $f : V \to W$ è:

- **iniettiva** se entrate diverse danno sempre uscite diverse. Per una macchina lineare vuol dire che il nucleo contiene solo lo zero (Proposizione 14.11);
- **suriettiva** se ogni vettore di $W$ esce da qualche entrata, cioè l'immagine è tutto $W$;
- **biettiva** se è tutte e due le cose. Allora ogni vettore di $W$ esce da **una e una sola** entrata, e c'è una macchina che fa il percorso al contrario: l'**inversa** $f^{-1}$, «effe alla meno uno».

Le dispense chiamano isomorfismo una macchina lineare di questo tipo.

> [!DEF] 15.1 · Isomorfismo e spazi isomorfi
> Un'applicazione lineare $f : V \to W$ è un **isomorfismo** se è biettiva. (Ricordiamo che una funzione $f$ è biettiva se e solo se è contemporaneamente iniettiva e suriettiva.)
>
> Diciamo che due spazi vettoriali $V$ e $W$ sullo stesso campo $\K$ sono **isomorfi** se esiste un isomorfismo $f : V \to W$.

**Come si legge.**

- Un isomorfismo è prima di tutto una macchina **lineare**. Una funzione biettiva ma non lineare non è un isomorfismo.
- «Biettiva» si controlla in due metà: il nucleo è solo lo zero (iniettiva) e l'immagine è tutto lo spazio di arrivo (suriettiva).
- «Sullo stesso campo»: si confrontano spazi con gli stessi numeri, per esempio due spazi reali.
- Due spazi sono isomorfi quando esiste **almeno un** dizionario perfetto tra loro, anche se tante altre macchine tra gli stessi spazi non lo sono.

> [!ESEMPIO] · tre macchine, un solo isomorfismo
> **(a)** $f(x, y) = (2x + y,\ x + y)$, dal piano al piano. È la macchina della matrice $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$.
> - Nucleo: $2x + y = 0$ e $x + y = 0$. Togliendo la seconda dalla prima resta $x = 0$, e poi $y = 0$. Il nucleo è solo lo zero: iniettiva.
> - Per il teorema della dimensione l'immagine ha dimensione $2 - 0 = 2$: è tutto il piano, quindi suriettiva.
>
> È un **isomorfismo**.
>
> **(b)** La derivata $D$, dai polinomi di grado al massimo 2 a sé stessi. La derivata del polinomio costante 5 è 0, quindi 5 sta nel nucleo: $D$ **non** è iniettiva e non è un isomorfismo. Non è nemmeno suriettiva: la derivata ha grado al massimo 1, quindi $x^2$ non esce mai.
>
> **(c)** $g(x, y) = (x, y, 0)$, dal piano allo spazio. È iniettiva: se $(x, y, 0) = (0, 0, 0)$ allora $x = y = 0$. Ma non è suriettiva: $(0, 0, 1)$ non esce mai. **Non** è un isomorfismo.

::: prova La macchina $f(x, y) = (x + y,\ x + y)$ è un isomorfismo?
No: $f(1, -1) = (0, 0)$, quindi $(1, -1)$ sta nel nucleo e la macchina non è iniettiva.
:::

### La macchina che torna indietro è lineare

Ecco l'inversa dell'esempio (a). Per trovare $f^{-1}(a, b)$ cerco l'entrata $(x, y)$ con $f(x, y) = (a, b)$:

$$\begin{cases} 2x + y = a \\ x + y = b \end{cases}$$

Togliendo la seconda dalla prima: $x = a - b$. Poi $y = b - x = -a + 2b$. Quindi

$$f^{-1}(a, b) = (a - b,\ -a + 2b),$$

che è di nuovo lineare: è la macchina della matrice inversa $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$ (lezione L10). Controllo: $f(3, 1) = (7, 4)$ e $f^{-1}(7, 4) = (7 - 4,\ -7 + 8) = (3, 1)$.

Succede sempre. Le dispense lo scrivono così.

> [!PROP] 15.2
> Se una funzione lineare $f : V \to W$ è biettiva, l'inversa $f^{-1} : W \to V$ è anch'essa lineare.

**Come si legge.** Se un dizionario perfetto rispetta somme e multipli in un verso, li rispetta anche nell'altro.

> [!DIM] della Proposizione 15.2 (dal libro di Martelli, §4.2.5; le dispense non la riportano)
> Siano $w, w'$ due vettori di $W$ e $\lambda$ un numero. Chiamo $v = f^{-1}(w)$ e $v' = f^{-1}(w')$, cioè $f(v) = w$ e $f(v') = w'$.
> 1. **Somma.** Per la linearità di $f$: $f(v + v') = f(v) + f(v') = w + w'$. Quindi $v + v'$ è *il* vettore che $f$ manda in $w + w'$: $f^{-1}(w + w') = v + v' = f^{-1}(w) + f^{-1}(w')$.
> 2. **Multipli.** $f(\lambda v) = \lambda f(v) = \lambda w$, quindi $f^{-1}(\lambda w) = \lambda v = \lambda f^{-1}(w)$.
>
> In ogni passo si usa che $f$ è biettiva: il vettore che va in $w + w'$, o in $\lambda w$, è **unico**, quindi è proprio quello trovato.

### Che cosa dicono le dimensioni

Una macchina dal piano allo spazio non può produrre tutto lo spazio: l'immagine ha dimensione al massimo 2. Una macchina dallo spazio al piano deve perdere qualcosa: il nucleo ha dimensione almeno $3 - 2 = 1$. Le dispense lo scrivono così.

> [!PROP] 15.3
> Sia $f : V \to W$ un'applicazione lineare.
> 1. Se $f$ è iniettiva, allora $\dim V \le \dim W$. (Infatti $\dim V = \dim \Imm f \le \dim W$.)
> 2. Se $f$ è suriettiva, allora $\dim V \ge \dim W$. (Infatti $\dim V \ge \dim \Imm f = \dim W$.)
> 3. Se $f$ è un isomorfismo, allora $\dim V = \dim W$. (Dai due punti precedenti.)

**Come si legge.** Le spiegazioni tra parentesi usano il **teorema della dimensione** della lezione L14: quello che entra è uguale a quello che si perde più quello che esce, $\dim V = \dim \Ker f + \dim \Imm f$.

1. Se $f$ è iniettiva, non si perde niente: il nucleo ha dimensione 0, quindi $\dim V$ è la dimensione dell'immagine. E l'immagine sta dentro $W$, quindi non è più grande di $W$.
2. Se $f$ è suriettiva, l'immagine è tutto $W$, quindi $\dim V = \dim \Ker f + \dim W$, che è almeno $\dim W$.
3. Un isomorfismo è tutte e due le cose, quindi valgono tutte e due le disuguaglianze.

In pratica, **guardando solo le dimensioni** si escludono molte cose:

| Dimensioni | Può essere iniettiva? | Può essere suriettiva? | Può essere un isomorfismo? |
|---|---|---|---|
| partenza più piccola (per esempio dal piano allo spazio) | sì | **mai** | **mai** |
| partenza più grande (per esempio da 4 a 2 dimensioni) | **mai** | sì | **mai** |
| stessa dimensione | sì | sì | sì |

> [!TRAPPOLA] Le dimensioni escludono, non garantiscono
> Partire da uno spazio più piccolo **non** basta per essere iniettiva. La macchina nulla dal piano allo spazio, che manda tutto in zero, ha partenza più piccola ma nucleo uguale a tutto il piano. La Proposizione 15.3 dice solo che cosa succede **se** $f$ è iniettiva, o suriettiva. Per dimostrare che una macchina precisa è iniettiva bisogna calcolare il nucleo.

::: prova Una macchina lineare va da uno spazio di dimensione 5 a uno di dimensione 3. Può essere iniettiva? Può essere suriettiva?
Iniettiva no: il nucleo ha dimensione almeno $5 - 3 = 2$. Suriettiva sì, può esserlo.
:::

### Stessa dimensione, spazi isomorfi

Vale anche il contrario dell'ultimo punto. Le dispense lo scrivono così.

> [!PROP] 15.4
> Siano $V$ e $W$ due spazi vettoriali di dimensione finita. Allora
> $$V \text{ e } W \text{ sono isomorfi} \iff \dim V = \dim W.$$
> In particolare, tutti gli spazi vettoriali su $\K$ di dimensione $n$ sono isomorfi a $\K^n$.

**Come si legge.** Due spazi sono lo stesso spazio con nomi diversi esattamente quando hanno la stessa dimensione. In particolare ogni spazio di dimensione $n$ è, a parte i nomi, lo spazio delle liste di $n$ numeri.

Le dispense dicono anche quale dizionario usare: quello che manda ogni vettore nelle sue **coordinate** rispetto a una base (lezione L13, Definizione 13.5). Questo dizionario **dipende dalla base** scelta.

> [!ESEMPIO] · lo stesso polinomio, due coordinate diverse
> Tra i polinomi di grado al massimo 2 prendi la base canonica $\mathcal B = \{1, x, x^2\}$ e la base $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$. Il polinomio $x^2$ ha coordinate $(0, 0, 1)$ rispetto a $\mathcal B$. Rispetto a $\mathcal B'$ cerco $a$, $b$, $c$ con
> $$x^2 = a \cdot 1 + b\,(x - 1) + c\,(x - 1)^2 = (a - b + c) + (b - 2c)\,x + c\,x^2.$$
> Confronto i numeri davanti alle potenze:
> 1. davanti a $x^2$: $c = 1$;
> 2. davanti a $x$: $b - 2c = 0$, quindi $b = 2$;
> 3. termine noto: $a - b + c = 0$, quindi $a = 1$.
>
> Le coordinate sono $(1, 2, 1)$. Controllo: $1 + 2(x - 1) + (x - 1)^2 = 1 + 2x - 2 + x^2 - 2x + 1 = x^2$.
>
> Le due basi danno due dizionari diversi: il primo traduce $x^2$ in $(0, 0, 1)$, il secondo in $(1, 2, 1)$.

Alcune coppie di spazi isomorfi che incontrerai spesso:

| Spazio | Dimensione | È isomorfo a |
|---|--:|---|
| $\R_n[x]$ (polinomi di grado al massimo $n$) | $n + 1$ | $\R^{n+1}$ |
| $M(m, n, \R)$ (matrici $m \times n$) | $mn$ | $\R^{mn}$ |
| $M(2, \R)$ | 4 | $\R^4$, e anche $\R_3[x]$ |
| $\C$ visto come spazio **sui reali** | 2 | $\R^2$ (il piano dei numeri complessi, lezione L02) |
| il piano $\{(x, y, z) \in \R^3 \mid x + y + z = 0\}$ | 2 | $\R^2$ |

> [!OLTRE] come si costruisce il dizionario, e una scorciatoia utile
> **Perché stessa dimensione basta** (Martelli, Proposizione 4.2.30). Supponi che $V$ e $W$ abbiano tutti e due dimensione $n$. Scegli una base di $V$, $v_1, \dots, v_n$, e una base di $W$, $w_1, \dots, w_n$. Definisci la macchina mandando $v_i$ in $w_i$ e ogni ricetta nella ricetta con le stesse dosi: $f(\lambda_1 v_1 + \dots + \lambda_n v_n) = \lambda_1 w_1 + \dots + \lambda_n w_n$ (Martelli, Proposizione 4.1.18). L'immagine contiene tutti i $w_i$, quindi è tutto $W$; per il teorema della dimensione il nucleo ha dimensione $n - n = 0$. Quindi $f$ è biettiva.
>
> **La scorciatoia** (Martelli, Proposizione 4.2.24). Se partenza e arrivo hanno la stessa dimensione, per una macchina lineare «iniettiva», «suriettiva» e «isomorfismo» vogliono dire la stessa cosa: basta controllarne una (esercizio 15). Per la macchina di una matrice quadrata: è un isomorfismo esattamente quando il determinante non è zero, cioè quando il rango è $n$.

> [!RICORDA]
> - Un isomorfismo è una macchina lineare biettiva: un dizionario perfetto. La sua inversa è lineare.
> - Due spazi sono isomorfi esattamente quando hanno la stessa dimensione.
> - Partenza più piccola: mai suriettiva. Partenza più grande: mai iniettiva.

## Coordinate di un vettore (p. 74)

Tutto il resto della lezione usa le coordinate, quindi rivediamole con calma. Con una base $\mathcal B = \{v_1, \dots, v_n\}$, ogni vettore $v$ ha **una sola** ricetta (Proposizione 13.4):

$$v = \lambda_1 v_1 + \dots + \lambda_n v_n.$$

Le dosi, scritte in colonna, sono il **vettore delle coordinate** di $v$ rispetto a $\mathcal B$:

$$[v]_{\mathcal B} = \begin{pmatrix} \lambda_1 \\ \vdots \\ \lambda_n \end{pmatrix}.$$

> [!ESEMPIO] · coordinate in una base non canonica del piano
> Sia $\mathcal B = \{v_1, v_2\}$ con $v_1 = (1, 1)$ e $v_2 = (1, -1)$, e sia $v = (3, 1)$. Cerco le dosi con $\lambda_1 (1, 1) + \lambda_2 (1, -1) = (3, 1)$:
> $$\begin{cases} \lambda_1 + \lambda_2 = 3 \\ \lambda_1 - \lambda_2 = 1 \end{cases}$$
> Sommando le equazioni: $2\lambda_1 = 4$, cioè $\lambda_1 = 2$; poi $\lambda_2 = 3 - 2 = 1$. Quindi $[v]_{\mathcal B} = (2, 1)$: per arrivare in $v$ si fanno due passi lungo $v_1$ e uno lungo $v_2$.

```grafico
titolo: $v = (3, 1)$ ha coordinate $(2, 1)$ rispetto a $\mathcal B = \{v_1, v_2\}$
x: -1 4
y: -2 3
freccia: 0 0 2 2 | accento | tratteggio | $2v_1$ | no
freccia: 2 2 3 1 | blu | tratteggio | $+\,v_2$ | ne
vettore: 1 1 | accento | spesso | $v_1$ | se
vettore: 1 -1 | blu | spesso | $v_2$ | se
vettore: 3 1 | ambra | spesso | $v = 2v_1 + v_2$ | se
```

> [!TRAPPOLA] L'ordine dei vettori della base conta
> Per le coordinate una base è una lista **in ordine**. Con $\mathcal B' = \{v_2, v_1\}$, stessi vettori in ordine scambiato, lo stesso $v$ ha coordinate $(1, 2)$. Per questo, anche se si scrive con le graffe, $\mathcal B = \{v_1, \dots, v_n\}$ va letta come una lista in quell'ordine.

::: prova Quali sono le coordinate di $(5, 1)$ nella base $(1, 1), (1, -1)$?
$\lambda_1 + \lambda_2 = 5$ e $\lambda_1 - \lambda_2 = 1$. Sommando: $\lambda_1 = 3$, poi $\lambda_2 = 2$. Coordinate $(3, 2)$; controllo: $3(1, 1) + 2(1, -1) = (5, 1)$.
:::

> [!RICORDA]
> - Le coordinate rispetto a una base sono le dosi della ricetta, scritte in colonna, nell'ordine della base.
> - Si trovano risolvendo un sistema.

## La macchina scritta con i numeri (pp. 74–75)

Nella lezione L14 hai visto che una macchina lineare rispetta le ricette:

$$f(\lambda_1 v_1 + \dots + \lambda_n v_n) = \lambda_1 f(v_1) + \dots + \lambda_n f(v_n).$$

Quindi, se sai dove vanno i vettori di una base, sai dove va **tutto**. Ogni uscita $f(v_j)$ è un vettore dello spazio di arrivo, e la scrivo con le sue coordinate rispetto a una base di arrivo. Ottengo una colonna di numeri per ogni vettore della base di partenza: una tabella. Questa tabella è la matrice associata.

Un esempio piccolo. La macchina $f(x, y) = (x + 2y,\ 3y)$, con le basi canoniche:

1. $f(1, 0) = (1, 0)$: è la prima colonna;
2. $f(0, 1) = (2, 3)$: è la seconda colonna.

La matrice è $\begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$: nelle colonne c'è scritto dove vanno i vettori della base.

Le dispense scrivono la definizione così.

> [!DEF] 15.5 · Matrice associata
> Sia $f : V \to W$ un'applicazione lineare fra spazi vettoriali definiti su $\K$. Siano inoltre
> $$\mathcal B = \{v_1, \dots, v_n\}, \qquad \mathcal C = \{w_1, \dots, w_m\}$$
> due basi rispettivamente di $V$ e di $W$. Sappiamo che
> $$\begin{aligned} f(v_1) &= a_{11} w_1 + \dots + a_{m1} w_m, \\ &\ \ \vdots \\ f(v_n) &= a_{1n} w_1 + \dots + a_{mn} w_m \end{aligned}$$
> per qualche insieme di coefficienti $a_{ij} \in \K$. Definiamo la **matrice associata** a $f$ nelle basi $\mathcal B$ e $\mathcal C$ come la matrice $m \times n$
> $$A = (a_{ij})$$
> che raggruppa questi coefficienti, e la indichiamo con il simbolo $A = [f]^{\mathcal B}_{\mathcal C}$.

**Come si legge.**

- **Taglia**: tante **righe** quanta è la dimensione dello spazio **di arrivo**, tante **colonne** quanta è la dimensione dello spazio **di partenza**.
- **Il numero $a_{ij}$** è la coordinata numero $i$ dell'uscita $f(v_j)$. L'indice $j$ dice quale vettore della base di partenza entra; l'indice $i$ dice quale coordinata dell'uscita stai leggendo.
- **La scrittura** $[f]^{\mathcal B}_{\mathcal C}$ ricorda che la matrice dipende da tre cose: la macchina e le due basi. La base di partenza $\mathcal B$ sta **in alto**, quella di arrivo $\mathcal C$ **in basso**.
- **La colonna $j$**, che le dispense chiamano $A^j$, contiene le coordinate di $f(v_j)$ rispetto a $\mathcal C$:
$$A^j = \begin{pmatrix} a_{1j} \\ \vdots \\ a_{mj} \end{pmatrix} = [f(v_j)]_{\mathcal C}.$$

> [!TRAPPOLA] Le coordinate vanno in colonna, non in riga
> Nella definizione la prima equazione, quella di $f(v_1)$, riempie la **prima colonna**. Se scrivi le coordinate di $f(v_1)$ nella prima **riga** ottieni la trasposta, che è sbagliata. Negli appelli la trasposta compare quasi sempre tra le risposte sbagliate.

> [!METODO] La matrice associata in tre passi
> 1. Calcola le uscite $f(v_1), \dots, f(v_n)$ dei vettori della base **di partenza**, nell'ordine dato.
> 2. Scrivi ogni uscita con le coordinate rispetto alla base **di arrivo** $\mathcal C$. Se $\mathcal C$ è la base canonica, le coordinate sono i numeri stessi del vettore; altrimenti risolvi un sistema.
> 3. Metti le coordinate di $f(v_j)$ nella colonna $j$.
>
> Controllo veloce: la matrice deve avere tante righe quanta è la dimensione di arrivo e tante colonne quanta è quella di partenza.

::: prova Qual è la matrice di $f(x, y) = (3x - y,\ x + 2y)$ con le basi canoniche?
$f(1, 0) = (3, 1)$ è la prima colonna, $f(0, 1) = (-1, 2)$ la seconda: $\begin{pmatrix} 3 & -1 \\ 1 & 2 \end{pmatrix}$.
:::

### Il caso delle basi canoniche

Con le basi canoniche la matrice di una macchina data da una matrice è la matrice stessa. Le dispense lo scrivono così.

> [!ESEMPIO] 15.6 · La matrice di $L_A$
> La matrice associata a $L_A$ rispetto alle basi canoniche di $\K^n$ e $\K^m$ è proprio $A$. Infatti, per costruzione, $f(e_j) = a_{1j} e_1 + \dots + a_{mj} e_m$.

Con i numeri: $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \end{pmatrix}$ dà la macchina $L_A$ dallo spazio al piano. $L_A(e_1) = Ae_1$ è la prima colonna di $A$, cioè $(1, 0)$; nella base canonica le sue coordinate sono $(1, 0)$, e finiscono nella prima colonna. Lo stesso per $e_2$ ed $e_3$: si ritrova $A$. Per questo, con le basi canoniche, la matrice di $f(x, y, z) = (x + 2y,\ y + 3z)$ si legge dai numeri davanti alle lettere: prima riga $1, 2, 0$, seconda riga $0, 1, 3$.

### Un esempio con i polinomi

Ecco l'esempio delle dispense: una macchina che prende un polinomio e restituisce due numeri.

> [!ESEMPIO] 15.7 · Valori di un polinomio in $2$ e in $-2$
> Prendiamo l'applicazione lineare
> $$f : \R_2[x] \longrightarrow \R^2, \qquad f(p) = \begin{pmatrix} p(2) \\ p(-2) \end{pmatrix}$$
> che assegna a ogni polinomio i suoi valori in $2$ e in $-2$. Scriviamo la matrice associata a $f$ nelle basi canoniche $\mathcal B = \{1, x, x^2\}$ di $\R_2[x]$ e $\mathcal C = \{e_1, e_2\}$ di $\R^2$.
>
> **Passo 1**, le immagini della base di partenza:
> - $p = 1$ (il polinomio costante): $p(2) = 1$ e $p(-2) = 1$, quindi $f(1) = (1, 1)$;
> - $p = x$: $p(2) = 2$ e $p(-2) = -2$, quindi $f(x) = (2, -2)$;
> - $p = x^2$: $p(2) = 4$ e $p(-2) = (-2)^2 = 4$, quindi $f(x^2) = (4, 4)$.
>
> **Passo 2**: la base di arrivo è quella canonica, quindi le coordinate sono le componenti stesse.
>
> **Passo 3**, le tre colonne una accanto all'altra:
> $$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}.$$
> È $2 \times 3$: $\dim \R^2 = 2$ righe, $\dim \R_2[x] = 3$ colonne.

### Stessa macchina, altra base in arrivo

Ora la stessa macchina, ma con un'altra base in arrivo. Cambia solo il passo 2.

> [!ESEMPIO] 15.8 · Cambiamo la base di arrivo
> Prendiamo l'applicazione lineare $f$ e la base $\mathcal B$ come nell'esempio precedente, ma in arrivo prendiamo la base
> $$\mathcal C' = \left\{ \begin{pmatrix} 1 \\ -1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix} \right\}$$
> invece della base canonica $\mathcal C$. Le immagini sono le stesse di prima; cambia il passo 2: bisogna calcolare le coordinate di ciascuna immagine rispetto a $\mathcal C'$, cioè trovare $a, b$ con $a (1, -1) + b (0, 1) = (a,\ -a + b)$ uguale all'immagine.
> - $f(1) = (1, 1)$: prima componente $a = 1$; seconda $-1 + b = 1$, quindi $b = 2$. Quindi $(1, 1) = 1 \cdot (1, -1) + 2 \cdot (0, 1)$.
> - $f(x) = (2, -2)$: $a = 2$; $-2 + b = -2$, quindi $b = 0$. Quindi $(2, -2) = 2 \cdot (1, -1) + 0 \cdot (0, 1)$.
> - $f(x^2) = (4, 4)$: $a = 4$; $-4 + b = 4$, quindi $b = 8$. Quindi $(4, 4) = 4 \cdot (1, -1) + 8 \cdot (0, 1)$.
>
> La matrice associata diventa quindi
> $$[f]^{\mathcal B}_{\mathcal C'} = \begin{pmatrix} 1 & 2 & 4 \\ 2 & 0 & 8 \end{pmatrix}.$$

La stessa macchina ha due matrici diverse: **la matrice associata dipende dalle basi**. È come descrivere la stessa cosa in due lingue diverse. Nella lezione L16 vedrai la formula che passa da una all'altra con un prodotto di matrici. Nell'esercizio 9 trovi una terza base di arrivo che rende la matrice più semplice.

Per risolvere i sistemi del passo 2 puoi usare lo strumento qui sotto. È già impostato sul sistema dell'Esercizio 15.13 delle dispense (esercizio 12): le prime tre colonne sono i vettori $w_1 = (1, 1, 0)$, $w_2 = (0, 1, 1)$, $w_3 = (1, 0, 1)$ della base di arrivo, l'ultima è il vettore $f(v_1) = (0, 2, 1)$ di cui cerchi le coordinate. La soluzione $(x_1, x_2, x_3)$ è la colonna $[f(v_1)]_{\mathcal C}$. Prova poi a cambiare l'ultima colonna in $(2, 2, -1)$ per ottenere la seconda colonna della matrice.

```widget gauss
titolo: Coordinate rispetto alla base di arrivo = soluzione di un sistema
matrice: 1 0 1 0; 1 1 0 2; 0 1 1 1
modo: sistema
modi: sistema, nucleo
```

> [!RICORDA]
> - Nella colonna $j$ della matrice associata ci sono le coordinate, rispetto alla base di arrivo, di dove va il vettore $j$ della base di partenza.
> - Righe = dimensione di arrivo, colonne = dimensione di partenza. Partenza in alto, arrivo in basso.
> - La matrice cambia se cambiano le basi.

## Far lavorare la macchina con la matrice (pp. 76–77)

Con la matrice associata si calcola l'uscita di qualsiasi vettore: basta un prodotto riga per colonna (lezione L08). Le dispense lo scrivono così.

> [!PROP] 15.9
> Per ogni $v \in V$ troviamo
> $$[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}.$$

**Come si legge.** Per trovare le coordinate dell'uscita rispetto alla base di arrivo, si moltiplica la matrice associata per le coordinate dell'entrata rispetto alla base di partenza.

Il perché, con i passaggi delle dispense:

1. Scrivo $v$ nella base $\mathcal B$: $v = \lambda_1 v_1 + \dots + \lambda_n v_n$, quindi $[v]_{\mathcal B} = (\lambda_1, \dots, \lambda_n)$.
2. La macchina rispetta le ricette: $f(v) = \lambda_1 f(v_1) + \dots + \lambda_n f(v_n)$.
3. Anche il passaggio alle coordinate rispetta le ricette: è il dizionario della Proposizione 15.4. Quindi
$$[f(v)]_{\mathcal C} = \lambda_1 [f(v_1)]_{\mathcal C} + \dots + \lambda_n [f(v_n)]_{\mathcal C}.$$
4. Ma $[f(v_j)]_{\mathcal C}$ è la colonna $j$ della matrice associata. E una ricetta con le colonne, con dosi $\lambda_1, \dots, \lambda_n$, è proprio il prodotto della matrice per la colonna delle dosi: la riga $i$ del prodotto è $a_{i1}\lambda_1 + \dots + a_{in}\lambda_n$.

> [!OSSERVAZIONE] Ogni applicazione lineare, in coordinate, è una $L_A$
> Se scriviamo $x = [v]_{\mathcal B}$, $A = [f]^{\mathcal B}_{\mathcal C}$ e $y = [f(v)]_{\mathcal C}$, allora
> $$y = Ax = L_A(x).$$
> Questo vuol dire che, dopo aver scelto due basi per $V$ e $W$, qualsiasi applicazione lineare $V \to W$ può essere interpretata in coordinate come un'applicazione del tipo $L_A : \K^n \to \K^m$. È sufficiente sostituire i vettori $v$ e $f(v)$ con le loro coordinate $x$ e $y$, e usare la matrice associata $A$.

Lo schema qui sotto riassume l'osservazione: da $v$ alle coordinate di $f(v)$ ci sono due strade, e il risultato è lo stesso. In alto si lavora con i vettori veri (polinomi, matrici, …), in basso solo con colonne di numeri.

```grafico
titolo: Due strade, stesso risultato: prima $f$ poi le coordinate, oppure prima le coordinate poi $A$
assi: no
griglia: no
x: 0 10
y: 0 4.4
testo: 2 3.6 | $v \in V$
testo: 8 3.6 | $f(v) \in W$
testo: 2 0.8 | $[v]_{\mathcal B} \in \K^n$
testo: 8 0.8 | $[f(v)]_{\mathcal C} \in \K^m$
freccia: 3.1 3.6 6.8 3.6 | accento | spesso
freccia: 3.4 0.8 6.5 0.8 | blu | spesso
freccia: 2 3.1 2 1.3 | grigio
freccia: 8 3.1 8 1.3 | grigio
testo: 4.95 4.05 | accento | $f$
testo: 4.95 0.35 | blu | $A = [f]^{\mathcal B}_{\mathcal C}$
testo: 3.1 2.2 | "coordinate"
testo: 6.9 2.2 | "coordinate"
```

> [!ESEMPIO] 15.10 · L'immagine di un polinomio calcolata con la matrice
> Riprendiamo la matrice associata rispetto alle basi canoniche
> $$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}.$$
> Usiamola per calcolare in coordinate l'immagine di $p(x) = 3x^2 + 5x + 1$, che ha come coordinate rispetto a $\mathcal B = \{1, x, x^2\}$ i suoi coefficienti **in ordine inverso**: $[p]_{\mathcal B} = (1, 5, 3)$. Quindi $f(p)$ ha coordinate
> $$\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix} \begin{pmatrix} 1 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2 \cdot 5 + 4 \cdot 3 \\ 1 \cdot 1 - 2 \cdot 5 + 4 \cdot 3 \end{pmatrix} = \begin{pmatrix} 1 + 10 + 12 \\ 1 - 10 + 12 \end{pmatrix} = \begin{pmatrix} 23 \\ 3 \end{pmatrix}.$$
> Verifichiamo con la definizione di $f$: $p(2) = 3 \cdot 4 + 5 \cdot 2 + 1 = 23$ e $p(-2) = 3 \cdot 4 - 10 + 1 = 3$. Quindi $f(p) = (23, 3)$.

> [!NOTA] Un rimando da correggere
> Nelle dispense, a p. 77, l'Esempio 15.10 comincia con «Nell'Esempio 15.8 sopra, abbiamo ottenuto la matrice associata … rispetto alle basi canoniche». La matrice rispetto alle basi canoniche, $\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}$, è quella dell'Esempio **15.7**; l'Esempio 15.8 usa in arrivo la base $\mathcal C'$.

> [!ESEMPIO] · lo stesso conto con la base $\mathcal C'$
> Con la matrice dell'Esempio 15.8:
> $$[f(p)]_{\mathcal C'} = \begin{pmatrix} 1 & 2 & 4 \\ 2 & 0 & 8 \end{pmatrix} \begin{pmatrix} 1 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 + 10 + 12 \\ 2 + 0 + 24 \end{pmatrix} = \begin{pmatrix} 23 \\ 26 \end{pmatrix}.$$
> Attenzione: $(23, 26)$ **non** è $f(p)$, sono le sue coordinate rispetto a $\mathcal C'$. Per tornare al vettore si rifà la ricetta: $23 \cdot (1, -1) + 26 \cdot (0, 1) = (23,\ -23 + 26) = (23, 3)$. Stesso risultato di prima, come deve essere.

> [!TRAPPOLA] Coordinate o vettore?
> Il prodotto della matrice per le coordinate dà le **coordinate** dell'uscita rispetto a $\mathcal C$. Coincidono con l'uscita solo se $\mathcal C$ è la base canonica. E prima di moltiplicare bisogna mettere l'entrata **in coordinate** rispetto a $\mathcal B$: per un polinomio, i numeri nell'ordine della base (per $\{1, x, x^2\}$: termine noto, poi $x$, poi $x^2$).

::: prova Con la matrice $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ e le basi canoniche, dove va $(3, 1)$?
$\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 + 2 \\ 0 + 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$.
:::

> [!RICORDA]
> - Coordinate dell'uscita = matrice associata per coordinate dell'entrata.
> - Se la base di arrivo non è quella canonica, alla fine si rifà la ricetta per avere il vettore vero.

## La macchina che non fa niente (p. 77)

La macchina identità lascia ogni vettore com'è. Con la stessa base in partenza e in arrivo, ogni vettore della base va in sé stesso. Le dispense lo scrivono così.

> [!PROP] 15.11
> Sia $\mathcal B$ una qualsiasi base di uno spazio $V$ di dimensione $n$. Troviamo
> $$[\id]^{\mathcal B}_{\mathcal B} = I_n.$$

**Come si legge.** L'identità, con la stessa base in partenza e in arrivo, ha come matrice la matrice identità: 1 sulla diagonale e 0 altrove.

Il motivo: $\id(v_j) = v_j = 0 \cdot v_1 + \dots + 1 \cdot v_j + \dots + 0 \cdot v_n$. Quindi nella colonna $j$ c'è un 1 al posto $j$ e zeri altrove. Tutte le colonne insieme formano la matrice identità.

> [!TRAPPOLA] Con due basi diverse l'identità non ha la matrice identità
> La Proposizione 15.11 chiede la **stessa** base in partenza e in arrivo. Con $\mathcal B = \{(1, 1), (1, -1)\}$ in partenza e la base canonica $\mathcal C$ in arrivo, le colonne sono $[\id(v_1)]_{\mathcal C} = (1, 1)$ e $[\id(v_2)]_{\mathcal C} = (1, -1)$:
> $$[\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \neq I_2.$$
> Questa è una **matrice di cambiamento di base**, il tema della lezione L16: la stessa cosa detta in due lingue.

::: prova Qual è la matrice dell'identità dei polinomi di grado al massimo 2, con la base $\{1, x, x^2\}$ in partenza e in arrivo?
La matrice identità $3 \times 3$: ogni polinomio della base va in sé stesso.
:::

> [!RICORDA]
> - Con la stessa base in partenza e in arrivo, l'identità ha la matrice identità.
> - Con due basi diverse no: è una matrice di cambiamento di base.

## Sommare macchine (pp. 77–78)

Due macchine lineari con la stessa partenza e lo stesso arrivo si possono sommare: l'uscita della somma è la somma delle uscite. Con $f$ e $g$ e un numero $\lambda$:

$$(f + g)(v) = f(v) + g(v), \qquad (\lambda f)(v) = \lambda f(v).$$

Con queste due operazioni tutte le macchine lineari tra $V$ e $W$ formano uno spazio vettoriale. Lo zero è la macchina nulla, e le regole della somma vengono da quelle di $W$.

> [!ESEMPIO] · sommare macchine = sommare matrici
> Siano $f(x, y) = (x + y,\ 0)$ e $g(x, y) = (x,\ y)$, dal piano al piano. Allora
> $$(f + g)(x, y) = (x + y + x,\ 0 + y) = (2x + y,\ y), \qquad (3f)(x, y) = (3x + 3y,\ 0).$$
> Con le basi canoniche: $[f] = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, $[g] = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ e
> $$[f + g] = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = [f] + [g], \qquad [3f] = \begin{pmatrix} 3 & 3 \\ 0 & 0 \end{pmatrix} = 3\,[f].$$

Succede sempre. Le dispense lo scrivono così.

> [!TEOREMA] 15.12
> Siano $V, W$ due spazi vettoriali di dimensione finita con basi $\mathcal A = \{v_1, \dots, v_n\}$, $\mathcal B = \{w_1, \dots, w_m\}$, rispettivamente. Allora l'insieme delle applicazioni lineari $f : V \to W$ è uno spazio vettoriale, e la mappa
> $$f \longmapsto [f]^{\mathcal A}_{\mathcal B}$$
> dall'insieme delle applicazioni lineari $f : V \to W$ a $M(m, n, \K)$ è un isomorfismo.

**Come si legge.** Attenzione: qui le basi si chiamano $\mathcal A$ e $\mathcal B$, con $\mathcal B$ base dello spazio di arrivo. Una volta scelte le basi, **macchine lineari e matrici sono la stessa cosa**: ogni macchina ha una sola matrice, e ogni matrice della taglia giusta è la matrice di una sola macchina.

- **Rispetta le somme**: la colonna $j$ di $[f + g]$ è $[f(v_j) + g(v_j)]_{\mathcal B} = [f(v_j)]_{\mathcal B} + [g(v_j)]_{\mathcal B}$. Quindi $[f + g] = [f] + [g]$, e allo stesso modo $[\lambda f] = \lambda [f]$. È quello che hai visto nell'esempio.
- **È iniettiva**: se la matrice è tutta di zeri, tutte le uscite $f(v_j)$ sono zero, e allora $f$ è la macchina nulla.
- **È suriettiva**: ogni matrice è la matrice di qualche macchina. Basta decidere dove vanno i vettori della base, $f(v_j) = a_{1j} w_1 + \dots + a_{mj} w_m$, e mandare ogni ricetta nella ricetta con le stesse dosi.

> [!APPROFONDIMENTO] Hom e la sua dimensione
> Nel libro di Martelli (§4.3.4) l'insieme delle macchine lineari da $V$ a $W$ si chiama $\mathrm{Hom}(V, W)$, da «omomorfismo», un altro nome per applicazione lineare. Siccome è isomorfo allo spazio delle matrici $m \times n$, ha dimensione $mn$ (Corollario 4.3.12). Per esempio le macchine lineari dallo spazio al piano formano uno spazio di dimensione $2 \cdot 3 = 6$.

Un modo per vedere la matrice associata in azione è lo strumento qui sotto: una matrice $2 \times 2$ come trasformazione del piano. Con $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, l'isomorfismo dell'esempio (a), le colonne sono le uscite di $e_1$ ed $e_2$, e il quadrato di lato 1 diventa un parallelogramma di area $|\det A| = 1$. Prova poi a scrivere $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$: il piano si schiaccia su una retta, il nucleo non è più solo lo zero e la macchina non è un isomorfismo.

```widget matrice
titolo: Una matrice $2 \times 2$ come applicazione lineare del piano
a: 2 1; 1 1
x: 1 1
raggio: 4
```

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: §4.2.5 «Isomorfismi» (pp. 127–128, con la dimostrazione della Proposizione 15.2 e la scorciatoia della Proposizione 4.2.24), §4.2.7 «Spazi vettoriali isomorfi» (p. 129), §4.3 «Matrice associata» fino a §4.3.4 «Hom» (pp. 130–135). Gli Esempi 4.3.2 e 4.3.3 del libro sono gli Esempi 15.7–15.8 e l'Esercizio 15.13 delle dispense.

::: prova Due macchine dal piano al piano hanno matrici $\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$ e $\begin{pmatrix} 0 & 3 \\ 1 & 1 \end{pmatrix}$. Qual è la matrice della loro somma?
La somma delle matrici, casella per casella: $\begin{pmatrix} 1 & 3 \\ 3 & 2 \end{pmatrix}$.
:::

> [!RICORDA]
> - Le macchine lineari si sommano e si moltiplicano per un numero, come le loro matrici.
> - Scelte le basi, macchine lineari e matrici sono la stessa cosa.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $f : V \to W$ | «effe da vu a vu doppio» | la macchina $f$ parte da $V$ e arriva in $W$ | |
| $f^{-1}$ | «effe alla meno uno» | la macchina inversa, che torna indietro | $f^{-1}(7, 4) = (3, 1)$ |
| $\Ker f$, $\Imm f$ | «nucleo», «immagine» | quello che si perde, quello che esce (lezione L14) | |
| $\cong$ | «è isomorfo a» | stesso spazio con nomi diversi | $\R_2[x] \cong \R^3$ |
| $[v]_{\mathcal B}$ | «coordinate di v nella base B» | le dosi della ricetta, in colonna | |
| $[f]^{\mathcal B}_{\mathcal C}$ | «matrice di f, da B a C» | la macchina scritta con i numeri; partenza in alto, arrivo in basso | |
| $A^j$ | «a alla j» | la colonna $j$ della matrice | |
| $L_A$ | «elle a» | la macchina che moltiplica per la matrice $A$ | $L_A(x) = Ax$ |
| $\id$ | «identità» | la macchina che lascia tutto com'è | $[\id]^{\mathcal B}_{\mathcal B} = I_n$ |
| $\mathrm{Hom}(V, W)$ | «hom di vu, vu doppio» | tutte le macchine lineari da $V$ a $W$ | dimensione $mn$ |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **La matrice associata** è una delle domande più frequenti del quiz. Negli appelli 2023–2026 compare così: la matrice di una macchina dal piano al piano rispetto a una base non canonica (appelli del 24/01/2024, domanda 3, e del 15/01/2026, domanda 8); le coordinate dell'uscita di un vettore (05/02/2026, domanda 6); la matrice di due macchine una dopo l'altra (16/01/2025, domanda 5, che vedrai nella lezione L16). Il foglio 3 del tutorato, esercizi 4 e 5, allena proprio questo.
2. **Gli argomenti di dimensione** della Proposizione 15.3 danno la risposta in una riga: appello del 02/09/2025, domanda 5.
3. **Nei problemi aperti** si chiede spesso di scrivere la matrice di una macchina nella base canonica e di dire se è biettiva (appello del 10/07/2024, problema 11). Oppure si chiede di calcolare nucleo e immagine a partire dalla matrice.
4. **Tutta la parte sugli autovalori** (lezioni L17–L18) usa la matrice associata: per una macchina sui polinomi di grado al massimo 2 si lavora con la sua matrice $3 \times 3$.

### Una domanda vera, letta insieme

**Appello del 15/01/2026, domanda 8.** Il testo: «La matrice associata a $T : \R^2 \to \R^2$, $T(x, y) = (2x, 3y)$, rispetto alla base $\mathcal B = \{(0, 1), (1, 2)\}$ è…». Si intende la stessa base in partenza e in arrivo.

**In pratica chiede:** la macchina raddoppia la prima coordinata e triplica la seconda. Scritta con la base $(0, 1), (1, 2)$ invece che con quella canonica, che tabella diventa?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: dove vanno i vettori della base.**
> - $T(0, 1) = (2 \cdot 0,\ 3 \cdot 1) = (0, 3)$;
> - $T(1, 2) = (2 \cdot 1,\ 3 \cdot 2) = (2, 6)$.
>
> **Passo 2: le coordinate delle uscite rispetto alla stessa base.** Una ricetta con la base è $a(0, 1) + b(1, 2) = (b,\ a + 2b)$.
> - Per $(0, 3)$: la prima coordinata dice $b = 0$, la seconda $a = 3$. Coordinate $(3, 0)$.
> - Per $(2, 6)$: $b = 2$, poi $a + 4 = 6$, quindi $a = 2$. Coordinate $(2, 2)$.
>
> **Passo 3: le colonne.**
> $$[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 2 \\ 0 & 2 \end{pmatrix}.$$
>
> **Controllo** sulla seconda colonna: $2 \cdot (0, 1) + 2 \cdot (1, 2) = (2, 6)$.
>
> **Le due trappole classiche** tra le risposte: $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ è la matrice nella base canonica; $\begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$ ha i vettori della base, non le loro uscite.

### Altre due domande vere

> [!ESAME] Appello del 05/02/2026, domanda 6
> *Data $T(x, y) = (3x,\ x + 2y)$ e la base $\mathcal B = \{v_1 = (0, 1),\ v_2 = (1, 1)\}$, il vettore di coordinate $[T(v_1)]_{\mathcal B}$ è …*
>
> **Soluzione.**
> 1. $T(v_1) = T(0, 1) = (0, 2)$.
> 2. Cerco $a$ e $b$ con $a(0, 1) + b(1, 1) = (b,\ a + b) = (0, 2)$: $b = 0$ e $a = 2$.
>
> Quindi $[T(v_1)]_{\mathcal B} = (2, 0)$. La risposta sbagliata più attraente era $(0, 2)$, cioè $T(v_1)$ stesso: ma la domanda chiede le **coordinate**.

> [!ESAME] Appello del 02/09/2025, domanda 5
> *Sia $f : V \to W$ lineare con $\dim V = 4$ e $\dim W = 2$. Quale è necessariamente vera?*
>
> **Soluzione.** Per il teorema della dimensione il nucleo ha dimensione $4 - \dim \Imm f$, e l'immagine ha dimensione al massimo 2. Quindi il nucleo ha dimensione almeno 2, e non è mai solo lo zero: **$f$ non può essere iniettiva**. È il punto 1 della Proposizione 15.3 letto al contrario. Le altre risposte («deve essere suriettiva», «non può essere suriettiva», «deve essere iniettiva», «è un isomorfismo») sono false: la macchina nulla non è suriettiva, mentre $(x_1, x_2, x_3, x_4) \mapsto (x_1, x_2)$ lo è.

**Errori da evitare.**

- Scrivere le uscite **in riga** invece che in colonna: si ottiene la trasposta.
- Mettere nella colonna l'uscita $f(v_j)$ invece delle sue **coordinate** rispetto alla base di arrivo.
- Sbagliare la taglia: la matrice ha tante righe quanta è la dimensione di arrivo e tante colonne quanta è quella di partenza.
- Cambiare l'ordine della base: l'ordine delle colonne segue la base di partenza, quello delle righe la base di arrivo.
- Per i polinomi, dimenticare che le coordinate rispetto a $\{1, x, x^2\}$ sono i numeri **dal termine noto in su**.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione bastano tre righe: «colonna $j$ di $[f]^{\mathcal B}_{\mathcal C}$ = $[f(v_j)]_{\mathcal C}$, partenza in alto, arrivo in basso»; «$[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} [v]_{\mathcal B}$»; «iniettiva: partenza non più grande dell'arrivo; suriettiva: partenza non più piccola; isomorfi esattamente con la stessa dimensione».

## Quiz

```quiz
D: Sia $f : \R^2 \to \R^3$ un'applicazione lineare. Quale affermazione è necessariamente vera?
- $f$ deve essere iniettiva.
+ $f$ non può essere suriettiva.
- $f$ non può essere iniettiva.
- $f$ è un isomorfismo.
- $f$ deve essere suriettiva.
= L'immagine ha dimensione al massimo 2, quella del piano di partenza, mentre lo spazio di arrivo ha dimensione 3: l'immagine non è mai tutto lo spazio, quindi $f$ non è mai suriettiva (Proposizione 15.3, punto 2). La risposta più insidiosa è «deve essere iniettiva»: può esserlo, come $(x, y) \mapsto (x, y, 0)$, ma non deve, come la macchina nulla. Simile all'appello del 02/09/2025, domanda 5.

D: Quale coppia di spazi vettoriali reali è formata da spazi isomorfi?
+ $\R_2[x]$ e $\R^3$
- $\R_2[x]$ e $\R^2$
- $M(2, \R)$ e $\R^3$
- $\R^2$ e $\R^3$
- $M(2, 3, \R)$ e $\R^5$
= Due spazi sono isomorfi esattamente quando hanno la stessa dimensione (Proposizione 15.4). I polinomi di grado al massimo 2 hanno dimensione 3, come $\R^3$. La risposta più insidiosa è $\R_2[x]$ e $\R^2$: chi conta 2 per i polinomi di grado 2 dimentica il termine noto. Nelle altre coppie le dimensioni sono 4 e 3, 2 e 3, 6 e 5.

D: La matrice associata a $f : \R^3 \to \R^2$, $f(x, y, z) = (x - z,\ 2y + z)$, rispetto alle basi canoniche è:
+ $\begin{pmatrix} 1 & 0 & -1 \\ 0 & 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 2 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}$
= Le colonne sono le uscite della base canonica: $f(e_1) = (1, 0)$, $f(e_2) = (0, 2)$, $f(e_3) = (-1, 1)$. La matrice è $2 \times 3$, perché si arriva nel piano partendo dallo spazio, e si legge dai numeri davanti alle lettere riga per riga. La risposta più insidiosa è la seconda, la trasposta, con le uscite messe in riga. La quarta sbaglia il segno di $-z$.

D: La matrice della derivata $D : \R_2[x] \to \R_1[x]$, $D(p) = p'$, rispetto alle basi $\{1, x, x^2\}$ e $\{1, x\}$ è:
+ $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 \\ 1 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$
= $D(1) = 0$ ha coordinate $(0, 0)$, $D(x) = 1$ ha coordinate $(1, 0)$, $D(x^2) = 2x$ ha coordinate $(0, 2)$: sono le tre colonne. La taglia è $2 \times 3$, perché l'arrivo ha dimensione 2 e la partenza 3. La seconda risposta è la trasposta; la terza, la più insidiosa, ha la taglia di una macchina che arriva nei polinomi di grado al massimo 2, non 1.

D: Sia $T : \R^2 \to \R^2$, $T(x, y) = (x + y,\ 2x)$, e sia $\mathcal B = \{v_1 = (1, 0),\ v_2 = (1, 1)\}$. Il vettore di coordinate $[T(v_1)]_{\mathcal B}$ è:
+ $(-1, 2)$
- $(1, 2)$
- $(2, -1)$
- $(1, 0)$
- $(2, 2)$
= $T(v_1) = (1, 2)$. Le coordinate: $a(1, 0) + b(1, 1) = (a + b,\ b) = (1, 2)$ dà $b = 2$ e $a = -1$. La risposta più insidiosa è $(1, 2)$: è $T(v_1)$ stesso, non le sue coordinate. $(2, -1)$ ha le coordinate in ordine scambiato. Simile all'appello del 05/02/2026, domanda 6.

D: Sia $T(x, y) = (y, x)$ e sia $\mathcal B = \{(1, 2), (0, 1)\}$. La matrice $[T]^{\mathcal B}_{\mathcal B}$ è:
+ $\begin{pmatrix} 2 & 1 \\ -3 & -2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 2 & -3 \\ 1 & -2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}$
= $T(1, 2) = (2, 1) = 2(1, 2) - 3(0, 1)$ e $T(0, 1) = (1, 0) = 1(1, 2) - 2(0, 1)$: le colonne sono $(2, -3)$ e $(1, -2)$. La risposta più insidiosa è la seconda, la matrice nella base canonica. La terza è la trasposta; la quinta mette le uscite senza passare alle coordinate; la quarta ha i vettori della base. Simile agli appelli del 24/01/2024 (domanda 3) e del 15/01/2026 (domanda 8).

D: Sia $f(p) = (p(2), p(-2))$ con matrice $\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}$ rispetto a $\{1, x, x^2\}$ e alla base canonica. Quanto vale $f(1 - x + x^2)$?
+ $(3, 7)$
- $(3, -1)$
- $(7, 3)$
- $(1, 7)$
- $(4, 4)$
= Le coordinate del polinomio nella base $\{1, x, x^2\}$ sono $(1, -1, 1)$, e il prodotto dà $(1 - 2 + 4,\ 1 + 2 + 4) = (3, 7)$. Controllo diretto: $p(2) = 1 - 2 + 4 = 3$ e $p(-2) = 1 + 2 + 4 = 7$. La risposta più insidiosa è $(7, 3)$, con i due valori scambiati.

D: I polinomi $(x + 1)^2$, $x + 1$, $1$ formano una base di $\R_2[x]$. Le coordinate di $q(x) = (x - 1)^2$ in questa base sono:
+ $(1, -4, 4)$
- $(1, -2, 1)$
- $(1, 4, 4)$
- $(4, -4, 1)$
- $(1, 0, 0)$
= Si scrive $x - 1 = (x + 1) - 2$. Allora $(x - 1)^2 = (x + 1)^2 - 4(x + 1) + 4 \cdot 1$. Controllo: $x^2 + 2x + 1 - 4x - 4 + 4 = x^2 - 2x + 1$. La risposta più insidiosa è $(1, -2, 1)$: sono le coordinate nella base $\{x^2, x, 1\}$, non in quella data. $(4, -4, 1)$ ha l'ordine al contrario. Simile all'appello del 06/09/2024, domanda 9.

D: La matrice associata all'inversa di $f = L_A : \R^2 \to \R^2$, con $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, rispetto alla base canonica è:
+ $\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1/2 & 1 \\ 1 & 1 \end{pmatrix}$
- $f$ non è invertibile.
= Il determinante è $2 - 1 = 1$, non zero: $f$ è un isomorfismo, e la sua inversa è la macchina della matrice inversa. Con la regola delle $2 \times 2$ (lezione L10): scambio la diagonale, cambio segno agli altri due, divido per 1. Viene $\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$; controllo: $A A^{-1} = I_2$. La risposta più insidiosa è la terza, che cambia i segni ma non scambia la diagonale. La quarta inverte casella per casella. Simile all'appello del 10/07/2024, problema 11, punto 2.

D: Qual è la dimensione dello spazio vettoriale di tutte le applicazioni lineari $\R^3 \to \R^2$?
N: 6
= Per il Teorema 15.12, scelte le basi, le macchine lineari dallo spazio al piano sono la stessa cosa delle matrici $2 \times 3$. Lo spazio delle matrici $2 \times 3$ ha dimensione $2 \cdot 3 = 6$.
```

## Esercizi

::: esercizio base Riscaldamento: stessa dimensione?
Quali coppie di spazi sono isomorfe? (a) $\R^3$ e i polinomi di grado al massimo 2; (b) $\R^4$ e le matrici $2 \times 2$; (c) il piano e lo spazio; (d) i polinomi di grado al massimo 3 e le matrici $2 \times 2$.
::: soluzione
Si confrontano le dimensioni.
1. (a) 3 e 3: isomorfi.
2. (b) 4 e 4: isomorfi.
3. (c) 2 e 3: non isomorfi.
4. (d) 4 e 4: isomorfi.
:::

::: esercizio base Riscaldamento: la matrice nelle basi canoniche
Scrivi la matrice di $f(x, y) = (2x + y,\ x - 3y,\ 4y)$ con le basi canoniche.
::: soluzione
1. $f(1, 0) = (2, 1, 0)$: prima colonna.
2. $f(0, 1) = (1, -3, 4)$: seconda colonna.

La matrice è $\begin{pmatrix} 2 & 1 \\ 1 & -3 \\ 0 & 4 \end{pmatrix}$: 3 righe, perché si arriva nello spazio, e 2 colonne, perché si parte dal piano.
:::

::: esercizio base Riscaldamento: righe e colonne
Quante righe e quante colonne ha la matrice associata di una macchina lineare (a) da $\R^4$ a $\R^2$; (b) dai polinomi di grado al massimo 2 a quelli di grado al massimo 3; (c) dalle matrici $2 \times 2$ a $\R$?
::: soluzione
Righe = dimensione di arrivo, colonne = dimensione di partenza.
1. (a) 2 righe e 4 colonne.
2. (b) 4 righe e 3 colonne.
3. (c) 1 riga e 4 colonne.
:::

::: esercizio base Riscaldamento: dalla matrice all'uscita
Una macchina ha matrice $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ con le basi canoniche. Dove va $(3, 1)$? E $(0, 2)$?
::: soluzione
1. $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 + 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$.
2. $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 0 \\ 2 \end{pmatrix} = \begin{pmatrix} 0 + 4 \\ 2 \end{pmatrix} = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$.
:::

::: esercizio base Isomorfismo oppure no?
Per ciascuna applicazione lineare di' se è un isomorfismo, motivando:
(a) $f : \R^2 \to \R^2$, $f(x, y) = (x + y,\ x - y)$;
(b) $g : \R^3 \to \R^2$, $g(x, y, z) = (x, y)$;
(c) $h : \R_2[x] \to \R^3$, $h(p) = (p(0), p(1), p(2))$;
(d) $k : M(2, \R) \to M(2, \R)$, $k(A) = A - {}^tA$.
::: soluzione
(a) **Sì.** Nucleo: $x + y = 0$ e $x - y = 0$; sommando, $2x = 0$, quindi $x = 0$ e $y = 0$. Il nucleo è solo lo zero: iniettiva. Partenza e arrivo hanno la stessa dimensione 2, quindi per il teorema della dimensione l'immagine ha dimensione 2: suriettiva. Oppure: $\det \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = -2$, non zero.

(b) **No.** La partenza ha dimensione 3 e l'arrivo 2: per la Proposizione 15.3 un isomorfismo vuole dimensioni uguali. Con i numeri: $g(0, 0, 1) = (0, 0)$, quindi $g$ non è iniettiva.

(c) **Sì.** Con la base $\{1, x, x^2\}$ in partenza e quella canonica in arrivo: $h(1) = (1, 1, 1)$, $h(x) = (0, 1, 2)$, $h(x^2) = (0, 1, 4)$. Quindi
$$[h] = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}, \qquad \det [h] = 1 \cdot (1 \cdot 4 - 1 \cdot 2) = 2,$$
sviluppando lungo la prima riga. Il determinante non è zero: il rango è 3, il nucleo è solo lo zero e l'immagine è tutto lo spazio. A parole: un polinomio di grado al massimo 2 è deciso dai suoi valori in tre punti.

(d) **No.** Se $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, allora $k(A) = \begin{pmatrix} 0 & b - c \\ c - b & 0 \end{pmatrix}$. Tutte le matrici simmetriche ($b = c$) vanno in zero, per esempio $k(I_2) = 0$. Il nucleo non è solo lo zero (ha dimensione 3), quindi $k$ non è iniettiva.
:::

::: esercizio base Coordinate in basi non canoniche
(a) Trova le coordinate di $v = (5, 1)$ rispetto a $\mathcal B = \{(1, 1), (1, -1)\}$.
(b) Trova le coordinate di $p(x) = 2x^2 - x + 3$ rispetto a $\{1, x, x^2\}$ e rispetto a $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$.
::: soluzione
(a) $\lambda_1 (1, 1) + \lambda_2 (1, -1) = (5, 1)$ dà $\lambda_1 + \lambda_2 = 5$ e $\lambda_1 - \lambda_2 = 1$. Sommando: $2\lambda_1 = 6$, quindi $\lambda_1 = 3$; poi $\lambda_2 = 2$. Coordinate $(3, 2)$. Controllo: $3(1, 1) + 2(1, -1) = (5, 1)$.

(b) Rispetto a $\{1, x, x^2\}$ bastano i numeri dal termine noto in su: $(3, -1, 2)$.

Rispetto a $\mathcal B'$ cerco $a$, $b$, $c$ con
$$a + b(x - 1) + c(x - 1)^2 = (a - b + c) + (b - 2c)\,x + c\,x^2 = 3 - x + 2x^2.$$
1. Davanti a $x^2$: $c = 2$.
2. Davanti a $x$: $b - 2c = -1$, quindi $b = 3$.
3. Termine noto: $a - b + c = 3$, quindi $a = 3 + 3 - 2 = 4$.

Coordinate $(4, 3, 2)$. Controllo: $4 + 3(x - 1) + 2(x^2 - 2x + 1) = 4 + 3x - 3 + 2x^2 - 4x + 2 = 2x^2 - x + 3$.
:::

::: esercizio base Matrice nelle basi canoniche e immagine di un vettore
Sia $f : \R^3 \to \R^2$, $f(x, y, z) = (x + 2y,\ y - z)$. Scrivi la matrice associata rispetto alle basi canoniche e usala per calcolare $f(1, 1, 1)$ e $f(2, -1, 3)$.
::: soluzione
Le colonne sono le uscite della base canonica: $f(e_1) = (1, 0)$, $f(e_2) = (2, 1)$, $f(e_3) = (0, -1)$. Quindi
$$[f] = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}.$$
Con le basi canoniche coordinate e vettori coincidono:
$$[f]\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 + 2 + 0 \\ 0 + 1 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}, \qquad [f]\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 - 2 + 0 \\ 0 - 1 - 3 \end{pmatrix} = \begin{pmatrix} 0 \\ -4 \end{pmatrix}.$$
Controllo diretto: $f(2, -1, 3) = (2 - 2,\ -1 - 3) = (0, -4)$.
:::

::: esercizio medio La matrice della derivata
Sia $D : \R_3[x] \to \R_2[x]$, $D(p) = p'$. Scrivi $[D]$ rispetto alle basi $\{1, x, x^2, x^3\}$ e $\{1, x, x^2\}$, e usala per calcolare la derivata di $q(x) = 1 + 2x - x^2 + 4x^3$. Quanto valgono $\dim \Ker D$ e $\dim \Imm D$?
::: soluzione
Le uscite della base di partenza: $D(1) = 0$, $D(x) = 1$, $D(x^2) = 2x$, $D(x^3) = 3x^2$. Le loro coordinate rispetto a $\{1, x, x^2\}$: $(0, 0, 0)$, $(1, 0, 0)$, $(0, 2, 0)$, $(0, 0, 3)$. Quindi
$$[D] = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \end{pmatrix}.$$
Le coordinate di $q$ sono $(1, 2, -1, 4)$, e
$$[D]\begin{pmatrix} 1 \\ 2 \\ -1 \\ 4 \end{pmatrix} = \begin{pmatrix} 2 \\ -2 \\ 12 \end{pmatrix},$$
cioè $q'(x) = 2 - 2x + 12x^2$. Controllo diretto: la derivata di $1 + 2x - x^2 + 4x^3$ è $2 - 2x + 12x^2$.

La matrice ha rango 3, con tre pivot, quindi l'immagine ha dimensione 3: $D$ è suriettiva. Per il teorema della dimensione il nucleo ha dimensione $4 - 3 = 1$: sono i polinomi costanti.
:::

::: esercizio medio Una base di arrivo che semplifica la matrice
Riprendi $f : \R_2[x] \to \R^2$, $f(p) = (p(2), p(-2))$, con $\mathcal B = \{1, x, x^2\}$ in partenza. (a) Calcola $[f]^{\mathcal B}_{\mathcal C''}$ con $\mathcal C'' = \{(1, 1), (1, -1)\}$ in arrivo. (b) Usala per ritrovare $f(3x^2 + 5x + 1) = (23, 3)$.
::: soluzione
(a) Le uscite sono $f(1) = (1, 1)$, $f(x) = (2, -2)$, $f(x^2) = (4, 4)$. Rispetto a $\mathcal C''$:
- $(1, 1) = 1 \cdot (1, 1) + 0 \cdot (1, -1)$, coordinate $(1, 0)$;
- $(2, -2) = 0 \cdot (1, 1) + 2 \cdot (1, -1)$, coordinate $(0, 2)$;
- $(4, 4) = 4 \cdot (1, 1) + 0 \cdot (1, -1)$, coordinate $(4, 0)$.

$$[f]^{\mathcal B}_{\mathcal C''} = \begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 0 \end{pmatrix}.$$
Ci sono molti zeri: la prima riga vede solo le potenze pari del polinomio ($1$ e $x^2$), la seconda solo quella dispari ($x$).

(b) Le coordinate del polinomio sono $(1, 5, 3)$, e
$$\begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 13 \\ 10 \end{pmatrix}.$$
Sono le coordinate rispetto a $\mathcal C''$. Rifaccio la ricetta: $13 (1, 1) + 10 (1, -1) = (23, 3)$.
:::

::: esercizio medio Un isomorfismo costruito con una base
In $\R_1[x]$ considera la base $\mathcal B = \{1 + x,\ 1 - x\}$. Scrivi esplicitamente l'isomorfismo $\Phi : \R_1[x] \to \R^2$ che manda $p$ in $[p]_{\mathcal B}$, e la sua inversa. Quanto vale $\Phi(3 + x)$?
::: soluzione
Sia $p = a + bx$. Cerco $\alpha$ e $\beta$ con $\alpha(1 + x) + \beta(1 - x) = (\alpha + \beta) + (\alpha - \beta)x = a + bx$:
$$\begin{cases} \alpha + \beta = a \\ \alpha - \beta = b \end{cases}$$
Sommando: $\alpha = \frac{a + b}{2}$. Togliendo: $\beta = \frac{a - b}{2}$. Quindi
$$\Phi(a + bx) = \left(\frac{a + b}{2},\ \frac{a - b}{2}\right), \qquad \Phi^{-1}(\alpha, \beta) = \alpha(1 + x) + \beta(1 - x) = (\alpha + \beta) + (\alpha - \beta)x.$$
Tutte e due sono lineari, come prevede la Proposizione 15.2. Per $p = 3 + x$: $\Phi(3 + x) = (2, 1)$. Controllo: $2(1 + x) + 1 \cdot (1 - x) = 3 + x$.
:::

::: esercizio medio Una matrice da $M(2, \R)$ a $\R_2[x]$ (foglio 3 del tutorato, esercizio 4)
Calcola la matrice associata a $T : M(2, \R) \to \R_2[x]$,
$$T\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ax^2 + (b + c)x + d,$$
dalla base $\mathcal A = \left\{ \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}, \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \right\}$ alla base $\mathcal B = \{1, x, x^2\}$. Che cosa puoi dire di $\Ker T$ e di $\Imm T$?
::: soluzione
La matrice sarà $3 \times 4$: l'arrivo ha dimensione 3 e la partenza 4. Chiamo $A_1, \dots, A_4$ le matrici della base.
- $T(A_1)$: $a = 1$, $b = c = 0$, $d = -1$, quindi $T(A_1) = x^2 - 1$, coordinate $(-1, 0, 1)$ (termine noto, $x$, $x^2$).
- $T(A_2)$: $a = 0$, $b = c = 1$, $d = 0$, quindi $T(A_2) = 2x$, coordinate $(0, 2, 0)$.
- $T(A_3)$: $a = 0$, $b = 1$, $c = -1$, $d = 0$, quindi $T(A_3) = 0$, coordinate $(0, 0, 0)$.
- $T(A_4)$: $a = 1$, $b = c = 0$, $d = 1$, quindi $T(A_4) = x^2 + 1$, coordinate $(1, 0, 1)$.

$$[T]^{\mathcal A}_{\mathcal B} = \begin{pmatrix} -1 & 0 & 0 & 1 \\ 0 & 2 & 0 & 0 \\ 1 & 0 & 0 & 1 \end{pmatrix}.$$
Le colonne 1, 2 e 4 sono indipendenti: la 1 e la 4 hanno somma $(0, 0, 2)$ e differenza $(2, 0, 0)$, e la 2 è $(0, 2, 0)$. Quindi il rango è 3: $T$ è suriettiva, l'immagine è tutto lo spazio dei polinomi di grado al massimo 2. Per il teorema della dimensione il nucleo ha dimensione $4 - 3 = 1$, e la colonna di zeri dice che $A_3$ sta nel nucleo: il nucleo è lo Span di $A_3$, le matrici antisimmetriche.
:::

::: esercizio medio Esercizio 15.13 delle dispense: una matrice con basi non canoniche su $\C$
Consideriamo l'applicazione lineare
$$f : \C^2 \longrightarrow \C^3, \qquad f\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x - y \\ 2x \\ y \end{pmatrix}.$$
Trovare la matrice associata a $f$ rispetto alle basi $v_1 = (1, 1)$, $v_2 = (1, -1)$ in partenza e $w_1 = (1, 1, 0)$, $w_2 = (0, 1, 1)$, $w_3 = (1, 0, 1)$ in arrivo.
::: soluzione
I numeri sono complessi, ma tutti quelli in gioco sono reali: i conti sono quelli di sempre.

**Passo 1**, le uscite:
$$f(v_1) = f(1, 1) = (1 - 1,\ 2,\ 1) = (0, 2, 1), \qquad f(v_2) = f(1, -1) = (1 + 1,\ 2,\ -1) = (2, 2, -1).$$

**Passo 2**, coordinate rispetto a $w_1, w_2, w_3$. Una ricetta con la base di arrivo è $a w_1 + b w_2 + c w_3 = (a + c,\ a + b,\ b + c)$.

Per $f(v_1) = (0, 2, 1)$:
$$\begin{cases} a + c = 0 \\ a + b = 2 \\ b + c = 1 \end{cases}$$
1. Dalla prima, $c = -a$; la terza diventa $b - a = 1$.
2. Sommandola alla seconda: $2b = 3$, quindi $b = \frac 32$.
3. Poi $a = 2 - \frac 32 = \frac 12$ e $c = -\frac 12$.

Coordinate $\left(\frac 12, \frac 32, -\frac 12\right)$.

Per $f(v_2) = (2, 2, -1)$:
$$\begin{cases} a + c = 2 \\ a + b = 2 \\ b + c = -1 \end{cases}$$
1. Togliendo la seconda dalla prima: $c - b = 0$, cioè $b = c$.
2. La terza dà $2c = -1$, quindi $b = c = -\frac 12$.
3. Poi $a = 2 - c = \frac 52$.

Coordinate $\left(\frac 52, -\frac 12, -\frac 12\right)$.

**Passo 3**, le colonne:
$$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1/2 & 5/2 \\ 3/2 & -1/2 \\ -1/2 & -1/2 \end{pmatrix} = \frac 12 \begin{pmatrix} 1 & 5 \\ 3 & -1 \\ -1 & -1 \end{pmatrix}.$$
È il risultato indicato nelle dispense. Controllo sulla prima colonna: $\frac 12 (1, 1, 0) + \frac 32 (0, 1, 1) - \frac 12 (1, 0, 1) = \left(\frac 12 - \frac 12,\ \frac 12 + \frac 32,\ \frac 32 - \frac 12\right) = (0, 2, 1)$.

Nella lezione L16 ritroverai lo stesso risultato con la formula del cambiamento di base.
:::

::: esercizio esame Come all'esame: una base che rende la matrice semplice
Sia $f : \R_2[x] \to \R^2$, $f(p) = (p(1),\ p'(1))$.
(1) Scrivi la matrice associata a $f$ rispetto alle basi $\mathcal B = \{1, x, x^2\}$ e $\mathcal C = \{e_1, e_2\}$.
(2) Trova $\Ker f$ e $\Imm f$; $f$ è iniettiva? È suriettiva?
(3) Scrivi la matrice di $f$ rispetto a $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$ in partenza e $\mathcal C$ in arrivo.
::: soluzione
(1) Le uscite:
- $f(1) = (1, 0)$: il polinomio costante vale 1 in 1, e la sua derivata è 0;
- $f(x) = (1, 1)$;
- $f(x^2) = (1, 2)$, perché la derivata $2x$ vale 2 in 1.

$$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \end{pmatrix}.$$

(2) La matrice è già a scalini con due pivot: rango 2. L'immagine ha dimensione 2 ed è tutto il piano: **$f$ è suriettiva**. Per il teorema della dimensione il nucleo ha dimensione $3 - 2 = 1$: **non è iniettiva**.

Il nucleo, con $p = a + bx + cx^2$: $a + b + c = 0$ e $b + 2c = 0$. Con $c = t$: $b = -2t$ e $a = -b - c = t$. Quindi $p = t(1 - 2x + x^2) = t(x - 1)^2$, e il nucleo è lo Span di $(x - 1)^2$. Controllo: $(x - 1)^2$ vale 0 in 1, e la sua derivata $2(x - 1)$ vale 0 in 1.

(3) Le uscite della nuova base:
- $f(1) = (1, 0)$;
- $f(x - 1) = (0, 1)$: $x - 1$ vale 0 in 1 e ha derivata 1;
- $f((x - 1)^2) = (0, 0)$, per il punto (2).

$$[f]^{\mathcal B'}_{\mathcal C} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}.$$
Con la base «centrata in 1» la matrice è quasi l'identità: si legge subito che $f$ è suriettiva e che il terzo vettore della base genera il nucleo.
:::

::: esercizio esame Come all'esame: basi non canoniche in partenza e in arrivo
Sia $T : \R^3 \to \R^2$, $T(a, b, c) = (a + b,\ b - c)$, e siano $\mathcal B = \{(1, 0, 0), (1, 1, 0), (1, 1, 1)\}$ base di $\R^3$ e $\mathcal C = \{(1, 1), (0, 1)\}$ base di $\R^2$.
(1) Calcola $[T]^{\mathcal B}_{\mathcal C}$.
(2) Calcola $[v]_{\mathcal B}$ per $v = (2, 3, 4)$.
(3) Usa la Proposizione 15.9 per calcolare $T(v)$, e controlla il risultato con la definizione.
::: soluzione
(1) Le uscite: $T(1, 0, 0) = (1, 0)$, $T(1, 1, 0) = (2, 1)$, $T(1, 1, 1) = (2, 0)$. Una ricetta con la base di arrivo è $\alpha (1, 1) + \beta (0, 1) = (\alpha,\ \alpha + \beta)$: quindi $\alpha$ è la prima coordinata del vettore, e $\beta$ è la seconda meno $\alpha$.
- $(1, 0)$: $\alpha = 1$, $\beta = -1$;
- $(2, 1)$: $\alpha = 2$, $\beta = -1$;
- $(2, 0)$: $\alpha = 2$, $\beta = -2$.

$$[T]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 2 & 2 \\ -1 & -1 & -2 \end{pmatrix}.$$

(2) $x (1, 0, 0) + y (1, 1, 0) + z (1, 1, 1) = (x + y + z,\ y + z,\ z) = (2, 3, 4)$. Dall'ultima $z = 4$, poi $y = 3 - 4 = -1$, poi $x = 2 - (-1) - 4 = -1$. Quindi $[v]_{\mathcal B} = (-1, -1, 4)$.

(3) $$[T(v)]_{\mathcal C} = \begin{pmatrix} 1 & 2 & 2 \\ -1 & -1 & -2 \end{pmatrix}\begin{pmatrix} -1 \\ -1 \\ 4 \end{pmatrix} = \begin{pmatrix} -1 - 2 + 8 \\ 1 + 1 - 8 \end{pmatrix} = \begin{pmatrix} 5 \\ -6 \end{pmatrix}.$$
Sono coordinate rispetto a $\mathcal C$; rifaccio la ricetta: $T(v) = 5 (1, 1) - 6 (0, 1) = (5, -1)$. Controllo con la definizione: $T(2, 3, 4) = (2 + 3,\ 3 - 4) = (5, -1)$.
:::

::: esercizio difficile Iniettiva se e solo se suriettiva
Sia $f : V \to W$ lineare con $\dim V = \dim W = n$. Dimostra che $f$ è iniettiva se e solo se è suriettiva. Poi mostra con un esempio che l'ipotesi $\dim V = \dim W$ non si può togliere.
::: soluzione
Per il teorema della dimensione, $n = \dim \Ker f + \dim \Imm f$.

**Se $f$ è iniettiva, è suriettiva.** Il nucleo è solo lo zero, quindi l'immagine ha dimensione $n$, come $W$. Un sottospazio di $W$ con la stessa dimensione di $W$ è tutto $W$: una sua base è fatta di $n$ vettori indipendenti di $W$, che per il Teorema 7.12 sono una base di $W$. Quindi l'immagine è tutto $W$.

**Se $f$ è suriettiva, è iniettiva.** L'immagine è tutto $W$, quindi ha dimensione $n$. Allora il nucleo ha dimensione $n - n = 0$: è solo lo zero.

Senza l'ipotesi non funziona: $g(x, y) = (x, y, 0)$, dal piano allo spazio, è iniettiva ma non suriettiva; $h(x, y, z) = (x, y)$, dallo spazio al piano, è suriettiva ma non iniettiva.
:::

## Domande di ripasso

::: domanda Che cos'è un isomorfismo? Quando due spazi sono isomorfi?
Una macchina lineare biettiva: iniettiva, cioè con nucleo fatto solo dallo zero, e suriettiva, cioè con immagine uguale a tutto l'arrivo. Due spazi sullo stesso campo sono isomorfi se esiste almeno un isomorfismo fra loro: sono lo stesso spazio con nomi diversi.
:::

::: domanda L'inversa di un isomorfismo è lineare? Perché?
Sì (Proposizione 15.2). Se $f(v) = w$ e $f(v') = w'$, allora $f(v + v') = w + w'$ e $f(\lambda v) = \lambda w$. Siccome $f$ è biettiva, il vettore che va in $w + w'$ è unico, quindi $f^{-1}(w + w') = v + v'$; lo stesso per i multipli.
:::

::: domanda Che cosa si deduce sulle dimensioni se una macchina è iniettiva? E se è suriettiva?
Iniettiva: la partenza non è più grande dell'arrivo. Suriettiva: la partenza non è più piccola dell'arrivo. Isomorfismo: stessa dimensione. Tutto viene dal teorema della dimensione.
:::

::: domanda Quando due spazi vettoriali di dimensione finita sono isomorfi?
Esattamente quando hanno la stessa dimensione (Proposizione 15.4). In particolare ogni spazio di dimensione $n$ è isomorfo allo spazio delle liste di $n$ numeri.
:::

::: domanda Quale dizionario con le liste di numeri indicano le dispense, e da che cosa dipende?
Quello che manda ogni vettore nelle sue coordinate rispetto a una base. Dipende dalla base: per esempio $x^2$ è $(0, 0, 1)$ nella base $\{1, x, x^2\}$ e $(1, 2, 1)$ nella base $\{1, x - 1, (x - 1)^2\}$.
:::

::: domanda Come è fatta la matrice associata $[f]^{\mathcal B}_{\mathcal C}$?
Ha tante righe quanta è la dimensione di arrivo e tante colonne quanta è quella di partenza. Nella colonna $j$ ci sono le coordinate, rispetto alla base di arrivo, di dove va il vettore $j$ della base di partenza. La base di partenza sta in alto, quella di arrivo in basso.
:::

::: domanda Qual è la matrice associata a $L_A$ rispetto alle basi canoniche?
È $A$ stessa (Esempio 15.6): $L_A(e_j)$ è la colonna $j$ di $A$, e le sue coordinate nella base canonica sono i suoi numeri.
:::

::: domanda Come si calcola l'uscita di un vettore usando la matrice associata?
Si scrive l'entrata in coordinate rispetto alla base di partenza; si moltiplica la matrice per quelle coordinate; se la base di arrivo non è quella canonica, si rifà la ricetta con i vettori di arrivo e le dosi trovate.
:::

::: domanda Perché la stessa macchina ha matrici diverse?
Perché la matrice registra le coordinate delle uscite, e le coordinate dipendono dalle basi scelte in partenza e in arrivo (Esempi 15.7 e 15.8). È la stessa macchina descritta in lingue diverse.
:::

::: domanda Quanto vale $[\id]^{\mathcal B}_{\mathcal B}$? E con due basi diverse?
Con la stessa base in partenza e in arrivo è la matrice identità (Proposizione 15.11). Con due basi diverse di solito no: le sue colonne sono le coordinate dei vettori della prima base rispetto alla seconda. È la matrice di cambiamento di base della lezione L16.
:::

::: domanda Come si sommano due macchine lineari, e che cosa succede alle matrici?
L'uscita della somma è la somma delle uscite, e l'uscita di $\lambda f$ è $\lambda$ volte l'uscita di $f$. Scelte le basi, la matrice della somma è la somma delle matrici, e quella di $\lambda f$ è $\lambda$ volte la matrice di $f$.
:::

::: domanda Che cosa dice il Teorema 15.12?
Che le macchine lineari da $V$ a $W$ formano uno spazio vettoriale e che, scelte le basi, passare alla matrice associata è un isomorfismo con le matrici $m \times n$: ogni matrice è la matrice di una e una sola macchina lineare.
:::

## Glossario

```glossario
Iniettiva | Entrate diverse danno uscite diverse; per una macchina lineare, il nucleo è solo lo zero.
Suriettiva | Ogni vettore dello spazio di arrivo esce da qualche entrata: l'immagine è tutto l'arrivo.
Biettiva | Iniettiva e suriettiva; allora c'è la macchina inversa $f^{-1}$.
Isomorfismo | Una macchina lineare biettiva (Definizione 15.1): un dizionario perfetto. La sua inversa è lineare.
Spazi isomorfi | Spazi sullo stesso campo tra cui c'è un isomorfismo; in dimensione finita, spazi con la stessa dimensione.
Coordinate $[v]_{\mathcal B}$ | Le dosi della ricetta che dà $v$ con la base $\mathcal B$, in colonna e nell'ordine della base.
Base ordinata | Una base usata come lista: l'ordine dei vettori decide l'ordine delle coordinate e delle colonne.
Matrice associata $[f]^{\mathcal B}_{\mathcal C}$ | La macchina scritta con i numeri: la colonna $j$ è $[f(v_j)]_{\mathcal C}$ (Definizione 15.5).
Base di partenza / di arrivo | La base dello spazio da cui si parte (in alto nella scrittura) e quella dello spazio in cui si arriva (in basso).
$L_A$ | La macchina che moltiplica per la matrice $A$; la sua matrice nelle basi canoniche è $A$.
Formula delle coordinate | Coordinate dell'uscita = matrice associata per coordinate dell'entrata (Proposizione 15.9).
Matrice dell'identità | Con la stessa base in partenza e in arrivo è la matrice identità (Proposizione 15.11).
Somma di applicazioni | L'uscita della somma è la somma delle uscite; la matrice della somma è la somma delle matrici.
$\mathrm{Hom}(V, W)$ | Il nome del libro di Martelli per lo spazio delle macchine lineari da $V$ a $W$; ha dimensione $\dim V \cdot \dim W$.
Teorema della dimensione | Quello che entra = quello che si perde + quello che esce (lezione L14): da qui vengono tutte le regole sulle dimensioni.
```

## Checklist

```checklist
- So dire che cos'è un isomorfismo e controllare se una macchina lo è, con il nucleo, l'immagine o il determinante.
- So spiegare perché l'inversa di un isomorfismo è lineare.
- So usare le dimensioni per escludere iniettività, suriettività o isomorfismo (Proposizione 15.3).
- So che due spazi sono isomorfi esattamente quando hanno la stessa dimensione, e so fare esempi.
- So calcolare le coordinate di un vettore o di un polinomio rispetto a una base non canonica, risolvendo un sistema.
- So scrivere la matrice associata in tre passi, con le coordinate in colonna e la taglia giusta.
- So usare la formula «coordinate dell'uscita = matrice per coordinate dell'entrata» e ricostruire il vettore vero.
- So che la matrice associata dipende dalle basi e che l'identità, con la stessa base, ha la matrice identità.
- So sommare macchine lineari e so che, scelte le basi, macchine e matrici si corrispondono una a una.
- Riconosco al volo le trappole del quiz: trasposta, uscite al posto delle coordinate, ordine della base.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 15 «Applicazioni lineari II», pp. 74–78: le sezioni 15.A (isomorfismi) e 15.B (matrice associata) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizioni 15.1 e 15.5, Proposizioni 15.2–15.4, 15.9, 15.11, Esempi 15.6–15.8 e 15.10, Teorema 15.12); l'Esercizio 15.13 della sezione 15.C è svolto come esercizio 12.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §4.2.5 e §4.2.7 (isomorfismi, con la dimostrazione della Proposizione 15.2 e la Proposizione 4.2.24), §4.3.1–4.3.4 (matrice associata, proprietà, Hom).
- **Esame**: appelli del 24/01/2024 (domanda 3), 10/07/2024 (problema 11), 06/09/2024 (domanda 9), 16/01/2025 (domanda 5), 02/09/2025 (domanda 5), 15/01/2026 (domanda 8), 05/02/2026 (domanda 6); foglio 3 del tutorato 2025/26 (esercizi 4 e 5). Testi e soluzioni ufficiali sul Moodle 2025/26 ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); le soluzioni riportate qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (la dimostrazione della Proposizione 15.2, la costruzione dell'isomorfismo, la scorciatoia per dimensioni uguali, Hom, gli esempi e gli esercizi aggiunti) servono a collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
