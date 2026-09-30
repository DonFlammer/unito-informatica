---
corso: MDAG
modulo: AG
lezione: L15
titolo: Applicazioni lineari II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L15
descrizione: >-
  Appunti della lezione L15 di Algebra lineare e Geometria (MDAG, parte 2): isomorfismi, spazi vettoriali isomorfi,
  coordinate e matrice associata a un'applicazione lineare rispetto a due basi, con quiz nello stile dell'esame ed
  esercizi svolti.
lede: >-
  Quando due spazi vettoriali sono «lo stesso spazio con nomi diversi» (gli isomorfismi), e come si trasforma
  qualsiasi applicazione lineare $f : V \to W$ in una matrice $[f]^{\mathcal B}_{\mathcal C}$ scegliendo una base in
  partenza e una in arrivo. Da qui in poi ogni conto su polinomi, matrici o vettori astratti diventa un conto con le
  matrici: è lo strumento che serve per i cambi di base (L16) e per gli autovalori (L17–L18).
materiale: dispense
scheda:
  Dispense: lezione 15 · pp. 74–78
  Libro: Martelli, §4.2.5, §4.2.7 e §4.3
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 15 «Applicazioni lineari II»; B. Martelli, Geometria e algebra lineare, §4.2.5, §4.2.7 e §4.3
file_en: L15_linear_maps_2.html
appunti_html: appunti/MDAG/L15_applicazioni_lineari_2.html
genera_html: true
---

## In breve

- Un **isomorfismo** è un'applicazione lineare **biettiva** (iniettiva e suriettiva). La sua inversa $f^{-1}$ è ancora lineare.
- Le dimensioni dicono già molto: se $f : V \to W$ è iniettiva allora $\dim V \le \dim W$; se è suriettiva allora $\dim V \ge \dim W$; se è un isomorfismo allora $\dim V = \dim W$.
- Vale anche il viceversa dell'ultimo punto: due spazi di dimensione finita sono **isomorfi** se e solo se hanno la **stessa dimensione**. Ogni spazio di dimensione $n$ su $\K$ è isomorfo a $\K^n$: l'isomorfismo manda ogni vettore nelle sue **coordinate** $[v]_{\mathcal B}$ e dipende dalla base scelta.
- Fissate una base $\mathcal B = \{v_1, \dots, v_n\}$ di $V$ e una base $\mathcal C = \{w_1, \dots, w_m\}$ di $W$, ogni $f : V \to W$ lineare ha una **matrice associata** $[f]^{\mathcal B}_{\mathcal C}$, di taglia $m \times n$: la **colonna $j$** contiene le coordinate di $f(v_j)$ rispetto a $\mathcal C$.
- Regola della notazione: la base **di partenza** sta **in alto**, quella **di arrivo** sta **in basso**.
- Per $L_A : \K^n \to \K^m$ con le basi canoniche la matrice associata è proprio $A$.
- La formula chiave è $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}$: in coordinate, **ogni** applicazione lineare diventa una moltiplicazione matrice per vettore.
- La matrice dipende dalle basi: la stessa $f$ ha matrici diverse in basi diverse. Con la stessa base in partenza e in arrivo, l'identità ha sempre matrice $I_n$.
- Le applicazioni lineari $V \to W$ formano uno spazio vettoriale, e $f \mapsto [f]^{\mathcal A}_{\mathcal B}$ è un isomorfismo con $M(m, n, \K)$.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Isomorfismi: lo stesso spazio con nomi diversi (p. 74)

Nella lezione L14 hai visto che cos'è un'applicazione lineare, il nucleo $\Ker f$, l'immagine $\Imm f$ e il teorema della dimensione. Qui ci chiediamo: quando due spazi vettoriali diversi si comportano **esattamente allo stesso modo**?

Una convenzione di scrittura, come nelle dispense: i vettori di $\K^n$ sono **colonne**; nel testo, per risparmiare spazio, li scriviamo spesso in riga, come $(1, 2)$. Negli appelli trovi anche la scrittura ${}^t(1, 2)$, cioè «la trasposta della riga $(1, 2)$», che è di nuovo la colonna.

### Un esempio per cominciare: polinomi e terne di numeri

Prendi lo spazio $\R_2[x]$ dei polinomi di grado al massimo 2. Un polinomio $a + bx + cx^2$ è individuato dai suoi tre coefficienti, quindi possiamo abbinarlo alla terna $(a, b, c) \in \R^3$. Guarda che cosa succede ai conti:

| In $\R_2[x]$ | In $\R^3$ |
|---|---|
| $p = 1 + 2x + 3x^2$ | $(1, 2, 3)$ |
| $q = -1 + x^2$ | $(-1, 0, 1)$ |
| $p + q = 2x + 4x^2$ | $(1, 2, 3) + (-1, 0, 1) = (0, 2, 4)$ |
| $2q = -2 + 2x^2$ | $2 \cdot (-1, 0, 1) = (-2, 0, 2)$ |

Sommare polinomi e poi prendere i coefficienti dà lo stesso risultato che prendere i coefficienti e poi sommare le terne. Lo stesso per i multipli. In più l'abbinamento è **biunivoco**: a ogni polinomio corrisponde una sola terna e a ogni terna un solo polinomio. Dal punto di vista dell'algebra lineare, $\R_2[x]$ e $\R^3$ sono **lo stesso spazio con nomi diversi**. Il nome tecnico è *isomorfi* (dal greco: «della stessa forma»).

### La definizione

Ricorda tre parole sulle funzioni (le vedi in dettaglio in Matematica Discreta). Una funzione $f : V \to W$ è:

- **iniettiva** se vettori diversi hanno immagini diverse; per un'applicazione lineare questo equivale a $\Ker f = \{0\}$ (Proposizione 14.11);
- **suriettiva** se ogni $w \in W$ è immagine di qualche $v \in V$, cioè $\Imm f = W$;
- **biettiva** se è sia iniettiva sia suriettiva. In questo caso ogni $w \in W$ è immagine di **uno e un solo** $v$, e si può definire la funzione **inversa** $f^{-1} : W \to V$ che fa il percorso al contrario: $f^{-1}(f(v)) = v$ e $f(f^{-1}(w)) = w$.

> [!DEF] 15.1 · Isomorfismo e spazi isomorfi
> Un'applicazione lineare $f : V \to W$ è un **isomorfismo** se è biettiva. (Ricordiamo che una funzione $f$ è biettiva se e solo se è contemporaneamente iniettiva e suriettiva.)
>
> Diciamo che due spazi vettoriali $V$ e $W$ sullo stesso campo $\K$ sono **isomorfi** se esiste un isomorfismo $f : V \to W$.

Pezzo per pezzo:

- «applicazione lineare» viene prima di tutto: una funzione biettiva ma non lineare **non** è un isomorfismo di spazi vettoriali.
- «biettiva» si controlla in due metà: $\Ker f = \{0\}$ (iniettiva) e $\Imm f = W$ (suriettiva).
- «sullo stesso campo»: si confrontano spazi con gli stessi scalari, per esempio due spazi reali.
- «isomorfi» è una proprietà della **coppia** di spazi: basta che esista **un** isomorfismo fra loro, anche se molte altre applicazioni lineari fra gli stessi spazi non lo sono.

> [!ESEMPIO] · tre applicazioni, una sola è un isomorfismo
> **(a)** $f = L_A : \R^2 \to \R^2$ con $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, cioè $f(x, y) = (2x + y,\ x + y)$.
> Nucleo: $2x + y = 0$ e $x + y = 0$; sottraendo le due equazioni resta $x = 0$, e poi $y = 0$. Quindi $\Ker f = \{0\}$ e $f$ è iniettiva. Per il teorema della dimensione $\dim \Imm f = 2 - 0 = 2$, quindi $\Imm f = \R^2$ e $f$ è suriettiva. È un **isomorfismo**.
>
> **(b)** La derivata $D : \R_2[x] \to \R_2[x]$, $D(p) = p'$. Poiché $D(5) = 0$, il polinomio costante $5$ sta nel nucleo: $\Ker D \neq \{0\}$, quindi $D$ **non** è iniettiva e non è un isomorfismo. (Non è nemmeno suriettiva: la derivata di un polinomio di grado al massimo 2 ha grado al massimo 1, quindi $x^2 \notin \Imm D$.)
>
> **(c)** $g : \R^2 \to \R^3$, $g(x, y) = (x, y, 0)$. È iniettiva (se $(x, y, 0) = (0, 0, 0)$ allora $x = y = 0$) ma non suriettiva: $(0, 0, 1)$ non è immagine di niente. **Non** è un isomorfismo.

### L'inversa di un isomorfismo è lineare

> [!PROP] 15.2
> Se una funzione lineare $f : V \to W$ è biettiva, l'inversa $f^{-1} : W \to V$ è anch'essa lineare.

Vediamolo sull'esempio (a). Per trovare $f^{-1}(a, b)$ cerchiamo $(x, y)$ con $f(x, y) = (a, b)$:

$$\begin{cases} 2x + y = a \\ x + y = b \end{cases} \quad\Longrightarrow\quad x = a - b, \qquad y = b - x = -a + 2b.$$

Quindi $f^{-1}(a, b) = (a - b,\ -a + 2b)$, che è di nuovo lineare: è $L_{A^{-1}}$ con $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$. Controllo: $f(3, 1) = (7, 4)$ e $f^{-1}(7, 4) = (7 - 4,\ -7 + 8) = (3, 1)$.

> [!DIM] della Proposizione 15.2 (dal libro di Martelli, §4.2.5; le dispense non la riportano)
> Siano $w, w' \in W$ e $\lambda \in \K$. Chiamiamo $v = f^{-1}(w)$ e $v' = f^{-1}(w')$, cioè $f(v) = w$ e $f(v') = w'$.
> 1. **Somma.** Per la linearità di $f$: $f(v + v') = f(v) + f(v') = w + w'$. Quindi $v + v'$ è *il* vettore che $f$ manda in $w + w'$, cioè $f^{-1}(w + w') = v + v' = f^{-1}(w) + f^{-1}(w')$.
> 2. **Multipli.** $f(\lambda v) = \lambda f(v) = \lambda w$, quindi $f^{-1}(\lambda w) = \lambda v = \lambda f^{-1}(w)$.
>
> In ogni passo si usa che $f$ è biettiva: il vettore che va in $w + w'$ (o in $\lambda w$) è **unico**, quindi è proprio quello trovato.

### Che cosa dicono le dimensioni

> [!PROP] 15.3
> Sia $f : V \to W$ un'applicazione lineare.
> 1. Se $f$ è iniettiva, allora $\dim V \le \dim W$. (Infatti $\dim V = \dim \Imm f \le \dim W$.)
> 2. Se $f$ è suriettiva, allora $\dim V \ge \dim W$. (Infatti $\dim V \ge \dim \Imm f = \dim W$.)
> 3. Se $f$ è un isomorfismo, allora $\dim V = \dim W$. (Dai due punti precedenti.)

Le giustificazioni tra parentesi usano il **teorema della dimensione** della lezione L14, $\dim V = \dim \Ker f + \dim \Imm f$:

1. se $f$ è iniettiva, $\Ker f = \{0\}$, quindi $\dim V = 0 + \dim \Imm f$; e $\Imm f$ è un sottospazio di $W$, quindi $\dim \Imm f \le \dim W$;
2. se $f$ è suriettiva, $\Imm f = W$, quindi $\dim V = \dim \Ker f + \dim W \ge \dim W$;
3. un isomorfismo è sia iniettivo sia suriettivo, quindi valgono entrambe le disuguaglianze.

In pratica, **guardando solo le dimensioni** si possono escludere molte cose:

| Dimensioni | Può essere iniettiva? | Può essere suriettiva? | Può essere un isomorfismo? |
|---|---|---|---|
| $\dim V < \dim W$ (per esempio $\R^2 \to \R^3$) | sì | **mai** | **mai** |
| $\dim V > \dim W$ (per esempio $\R^4 \to \R^2$) | **mai** | sì | **mai** |
| $\dim V = \dim W$ | sì | sì | sì |

> [!TRAPPOLA] Le dimensioni escludono, non garantiscono
> $\dim V \le \dim W$ **non** basta per dire che $f$ è iniettiva: l'applicazione nulla $\R^2 \to \R^3$, $f(v) = 0$, ha $\dim V = 2 \le 3$ ma nucleo uguale a tutto $\R^2$. La Proposizione 15.3 dice solo che cosa succede **se** $f$ è iniettiva (o suriettiva). Per dimostrare che una $f$ precisa è iniettiva bisogna calcolare il nucleo.

### Stessa dimensione, spazi isomorfi

Vale anche il viceversa dell'ultimo punto:

> [!PROP] 15.4
> Siano $V$ e $W$ due spazi vettoriali di dimensione finita. Allora
> $$V \text{ e } W \text{ sono isomorfi} \iff \dim V = \dim W.$$
> In particolare, tutti gli spazi vettoriali su $\K$ di dimensione $n$ sono isomorfi a $\K^n$.

Le dispense precisano quale isomorfismo usare: la mappa $V \to \K^n$ che manda ogni vettore $v \in V$ nelle sue **coordinate** rispetto a una base di $V$ (le hai viste nella lezione L13, Definizione 13.5). Questo isomorfismo **dipende dalla scelta della base**.

> [!ESEMPIO] · lo stesso polinomio, due coordinate diverse
> In $\R_2[x]$ prendi la base canonica $\mathcal B = \{1, x, x^2\}$ e la base $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$. Il polinomio $x^2$ ha coordinate $(0, 0, 1)$ rispetto a $\mathcal B$. Rispetto a $\mathcal B'$ cerchiamo $a, b, c$ con
> $$x^2 = a \cdot 1 + b\,(x - 1) + c\,(x - 1)^2 = (a - b + c) + (b - 2c)\,x + c\,x^2.$$
> Confrontando i coefficienti: $c = 1$, poi $b - 2c = 0$ dà $b = 2$, poi $a - b + c = 0$ dà $a = 1$. Quindi le coordinate sono $(1, 2, 1)$. Controllo: $1 + 2(x - 1) + (x - 1)^2 = 1 + 2x - 2 + x^2 - 2x + 1 = x^2$.
>
> Le due basi danno due isomorfismi diversi $\R_2[x] \to \R^3$: il primo manda $x^2$ in $(0, 0, 1)$, il secondo in $(1, 2, 1)$.

Qualche coppia di spazi isomorfi che incontrerai spesso:

| Spazio | Dimensione | È isomorfo a |
|---|--:|---|
| $\R_n[x]$ (polinomi di grado al massimo $n$) | $n + 1$ | $\R^{n+1}$ |
| $M(m, n, \R)$ (matrici $m \times n$) | $mn$ | $\R^{mn}$ |
| $M(2, \R)$ | 4 | $\R^4$, e anche $\R_3[x]$ |
| $\C$ visto come spazio vettoriale **su $\R$** | 2 | $\R^2$ (il piano complesso della lezione L02) |
| il piano $\{(x, y, z) \in \R^3 \mid x + y + z = 0\}$ | 2 | $\R^2$ |

> [!OLTRE] come si costruisce l'isomorfismo, e una scorciatoia utile
> **Perché vale $\Leftarrow$** (Martelli, Proposizione 4.2.30). Se $\dim V = \dim W = n$, scegli una base $v_1, \dots, v_n$ di $V$ e una base $w_1, \dots, w_n$ di $W$, e definisci $f$ imponendo $f(v_i) = w_i$ ed estendendo per linearità, $f(\lambda_1 v_1 + \dots + \lambda_n v_n) = \lambda_1 w_1 + \dots + \lambda_n w_n$ (Martelli, Proposizione 4.1.18). L'immagine contiene tutti i $w_i$, quindi $\Imm f = W$; per il teorema della dimensione $\dim \Ker f = n - n = 0$. Dunque $f$ è biettiva.
>
> **La scorciatoia** (Martelli, Proposizione 4.2.24). Se $\dim V = \dim W$, per un'applicazione lineare $f : V \to W$ le tre cose «iniettiva», «suriettiva», «isomorfismo» sono **equivalenti**: basta controllarne una. Infatti $\dim \Ker f = 0 \iff \dim \Imm f = n \iff \Imm f = W$. Per una matrice quadrata $A$ questo si riassume così: $L_A$ è un isomorfismo $\iff \det A \neq 0 \iff \rk A = n$.

## Coordinate di un vettore (p. 74)

Tutto il resto della lezione usa le coordinate, quindi rivediamole con calma. Se $\mathcal B = \{v_1, \dots, v_n\}$ è una base di $V$, ogni $v \in V$ si scrive **in un solo modo** (Proposizione 13.4) come
$$v = \lambda_1 v_1 + \dots + \lambda_n v_n.$$
La colonna dei coefficienti si chiama **vettore delle coordinate** di $v$ rispetto a $\mathcal B$ e si indica con
$$[v]_{\mathcal B} = \begin{pmatrix} \lambda_1 \\ \vdots \\ \lambda_n \end{pmatrix} \in \K^n.$$

> [!ESEMPIO] · coordinate in una base non canonica di $\R^2$
> Sia $\mathcal B = \{v_1, v_2\}$ con $v_1 = (1, 1)$ e $v_2 = (1, -1)$, e sia $v = (3, 1)$. Cerchiamo $\lambda_1, \lambda_2$ con $\lambda_1 (1, 1) + \lambda_2 (1, -1) = (3, 1)$:
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
> Una base, per le coordinate, è una lista **ordinata**. Con $\mathcal B' = \{v_2, v_1\}$ (stessi vettori, ordine scambiato) lo stesso $v$ ha coordinate $(1, 2)$. Per questo, anche se si scrive con le graffe, $\mathcal B = \{v_1, \dots, v_n\}$ va letta come una lista in quell'ordine.

## La matrice associata a un'applicazione lineare (pp. 74–75)

### L'idea

Nella lezione L14 hai visto che un'applicazione lineare rispetta le combinazioni lineari:
$$f(\lambda_1 v_1 + \dots + \lambda_n v_n) = \lambda_1 f(v_1) + \dots + \lambda_n f(v_n).$$
Quindi, se conosci le **immagini dei vettori di una base**, $f(v_1), \dots, f(v_n)$, conosci $f$ dappertutto. Ogni $f(v_j)$ è un vettore di $W$: lo memorizziamo con le sue $m$ coordinate rispetto a una base $\mathcal C$ di $W$. Otteniamo $n$ colonne di $m$ numeri: una **matrice $m \times n$**. Questa è la matrice associata.

> [!DEF] 15.5 · Matrice associata
> Sia $f : V \to W$ un'applicazione lineare fra spazi vettoriali definiti su $\K$. Siano inoltre
> $$\mathcal B = \{v_1, \dots, v_n\}, \qquad \mathcal C = \{w_1, \dots, w_m\}$$
> due basi rispettivamente di $V$ e di $W$. Sappiamo che
> $$\begin{aligned} f(v_1) &= a_{11} w_1 + \dots + a_{m1} w_m, \\ &\ \ \vdots \\ f(v_n) &= a_{1n} w_1 + \dots + a_{mn} w_m \end{aligned}$$
> per qualche insieme di coefficienti $a_{ij} \in \K$. Definiamo la **matrice associata** a $f$ nelle basi $\mathcal B$ e $\mathcal C$ come la matrice $m \times n$
> $$A = (a_{ij})$$
> che raggruppa questi coefficienti, e la indichiamo con il simbolo $A = [f]^{\mathcal B}_{\mathcal C}$.

Pezzo per pezzo:

- **Taglia $m \times n$**: tante **righe** quanta è la dimensione dello spazio **di arrivo** ($m = \dim W$), tante **colonne** quanta è la dimensione dello spazio **di partenza** ($n = \dim V$).
- **L'elemento $a_{ij}$** è la $i$-esima coordinata di $f(v_j)$: l'indice $j$ dice *quale vettore della base di partenza* stai trasformando, l'indice $i$ dice *quale coordinata* dell'immagine stai leggendo.
- **La notazione** $[f]^{\mathcal B}_{\mathcal C}$ ricorda che la matrice dipende da tre cose: $f$, $\mathcal B$ e $\mathcal C$. Come dicono le dispense, «la base in partenza» $\mathcal B$ sta **in alto**, «la base in arrivo» $\mathcal C$ sta **in basso**.
- **La colonna $j$**, che le dispense chiamano $A^j$, contiene le coordinate di $f(v_j)$ rispetto a $\mathcal C$:
$$A^j = \begin{pmatrix} a_{1j} \\ \vdots \\ a_{mj} \end{pmatrix} = [f(v_j)]_{\mathcal C}.$$

> [!TRAPPOLA] I coefficienti vanno in colonna, non in riga
> Nella definizione la prima equazione, $f(v_1) = a_{11} w_1 + \dots + a_{m1} w_m$, riempie la **prima colonna**. Se scrivi le coordinate di $f(v_1)$ nella prima **riga** ottieni la trasposta, che è sbagliata. Negli appelli la trasposta compare quasi sempre tra le risposte sbagliate.

> [!METODO] La matrice associata in tre passi
> 1. Calcola le immagini $f(v_1), \dots, f(v_n)$ dei vettori della base **di partenza**, nell'ordine dato.
> 2. Scrivi ogni $f(v_j)$ in coordinate rispetto alla base **di arrivo** $\mathcal C$. Se $\mathcal C$ è la base canonica di $\K^m$ le coordinate sono le componenti stesse; altrimenti risolvi il sistema $f(v_j) = x_1 w_1 + \dots + x_m w_m$.
> 3. Metti $[f(v_j)]_{\mathcal C}$ nella colonna $j$.
>
> Controllo veloce: la matrice deve avere $\dim W$ righe e $\dim V$ colonne.

### Il caso delle basi canoniche

> [!ESEMPIO] 15.6 · La matrice di $L_A$
> La matrice associata a $L_A$ rispetto alle basi canoniche di $\K^n$ e $\K^m$ è proprio $A$. Infatti, per costruzione, $f(e_j) = a_{1j} e_1 + \dots + a_{mj} e_m$.

Con i numeri: sia $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \end{pmatrix}$, quindi $L_A : \R^3 \to \R^2$. Allora $L_A(e_1) = A e_1$ è la prima colonna di $A$, cioè $(1, 0) = 1 \cdot e_1 + 0 \cdot e_2$; le sue coordinate rispetto alla base canonica sono $(1, 0)$, e finiscono nella prima colonna. Lo stesso per $e_2$ e $e_3$: si ritrova $A$. È il motivo per cui, con le basi canoniche, la matrice associata di $f(x, y, z) = (x + 2y,\ y + 3z)$ si legge dai coefficienti: prima riga $1, 2, 0$, seconda riga $0, 1, 3$.

### Un esempio con i polinomi

> [!ESEMPIO] 15.7 · Valori di un polinomio in $2$ e in $-2$
> Consideriamo l'applicazione lineare
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

### Stessa applicazione, altra base in arrivo

> [!ESEMPIO] 15.8 · Cambiamo la base di arrivo
> Prendiamo l'applicazione lineare $f$ e la base $\mathcal B$ come nell'esempio precedente, ma in arrivo prendiamo la base
> $$\mathcal C' = \left\{ \begin{pmatrix} 1 \\ -1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix} \right\}$$
> invece della base canonica $\mathcal C$. Le immagini sono le stesse di prima; cambia il passo 2: bisogna calcolare le coordinate di ciascuna immagine rispetto a $\mathcal C'$, cioè trovare $a, b$ con $a (1, -1) + b (0, 1) = (a,\ -a + b)$ uguale all'immagine.
> - $f(1) = (1, 1)$: prima componente $a = 1$; seconda $-1 + b = 1$, quindi $b = 2$. Dunque $(1, 1) = 1 \cdot (1, -1) + 2 \cdot (0, 1)$.
> - $f(x) = (2, -2)$: $a = 2$; $-2 + b = -2$, quindi $b = 0$. Dunque $(2, -2) = 2 \cdot (1, -1) + 0 \cdot (0, 1)$.
> - $f(x^2) = (4, 4)$: $a = 4$; $-4 + b = 4$, quindi $b = 8$. Dunque $(4, 4) = 4 \cdot (1, -1) + 8 \cdot (0, 1)$.
>
> La matrice associata diventa quindi
> $$[f]^{\mathcal B}_{\mathcal C'} = \begin{pmatrix} 1 & 2 & 4 \\ 2 & 0 & 8 \end{pmatrix}.$$

La stessa $f$ ha due matrici diverse: **la matrice associata dipende dalle basi**. Nella lezione L16 vedrai la formula che passa da una all'altra con un prodotto di matrici. Nell'esercizio 6 trovi una terza base di arrivo che rende la matrice più semplice.

Per risolvere i sistemi del passo 2 puoi usare lo strumento qui sotto. È già impostato sul sistema dell'esercizio 15.13 (esercizio 1): le prime tre colonne sono i vettori $w_1 = (1, 1, 0)$, $w_2 = (0, 1, 1)$, $w_3 = (1, 0, 1)$ della base di arrivo, l'ultima è il vettore $f(v_1) = (0, 2, 1)$ di cui cerchi le coordinate. La soluzione $(x_1, x_2, x_3)$ è la colonna $[f(v_1)]_{\mathcal C}$. Prova poi a cambiare l'ultima colonna in $(2, 2, -1)$ per ottenere la seconda colonna della matrice.

```widget gauss
titolo: Coordinate rispetto alla base di arrivo = soluzione di un sistema
matrice: 1 0 1 0; 1 1 0 2; 0 1 1 1
modo: sistema
modi: sistema, nucleo
```

## Calcolare le immagini con la matrice (pp. 76–77)

Dalla matrice associata possiamo calcolare l'immagine di qualsiasi vettore. Sia $f : V \to W$ un'applicazione lineare e siano $\mathcal B = \{v_1, \dots, v_n\}$ e $\mathcal C = \{w_1, \dots, w_m\}$ basi di $V$ e $W$.

> [!PROP] 15.9
> Per ogni $v \in V$ troviamo
> $$[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}.$$

In parole: per trovare le coordinate di $f(v)$ rispetto a $\mathcal C$ basta **moltiplicare la matrice associata per le coordinate di $v$** rispetto a $\mathcal B$. La dimostrazione delle dispense, con i passaggi spiegati:

1. Scriviamo $v$ nella base $\mathcal B$: $v = \lambda_1 v_1 + \dots + \lambda_n v_n$, quindi $[v]_{\mathcal B} = (\lambda_1, \dots, \lambda_n)$.
2. Per la linearità di $f$: $f(v) = \lambda_1 f(v_1) + \dots + \lambda_n f(v_n)$.
3. Anche il passaggio alle coordinate è lineare (è l'isomorfismo della Proposizione 15.4), quindi
$$[f(v)]_{\mathcal C} = \lambda_1 [f(v_1)]_{\mathcal C} + \dots + \lambda_n [f(v_n)]_{\mathcal C}.$$
4. Ma $[f(v_j)]_{\mathcal C}$ è la colonna $j$ della matrice associata $A = (a_{ij})$. E una combinazione delle colonne con coefficienti $\lambda_1, \dots, \lambda_n$ è proprio il prodotto riga per colonna $A \cdot (\lambda_1, \dots, \lambda_n)$: la componente $i$ della combinazione è $a_{i1}\lambda_1 + \dots + a_{in}\lambda_n$, cioè esattamente la riga $i$ del prodotto. Quindi il risultato è $[f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}$. $\square$

> [!OSSERVAZIONE] Ogni applicazione lineare, in coordinate, è una $L_A$
> Se scriviamo $x = [v]_{\mathcal B}$, $A = [f]^{\mathcal B}_{\mathcal C}$ e $y = [f(v)]_{\mathcal C}$, allora
> $$y = Ax = L_A(x).$$
> Questo vuol dire che, dopo aver scelto due basi per $V$ e $W$, qualsiasi applicazione lineare $V \to W$ può essere interpretata in coordinate come un'applicazione del tipo $L_A : \K^n \to \K^m$. È sufficiente sostituire i vettori $v$ e $f(v)$ con le loro coordinate $x$ e $y$, e usare la matrice associata $A$.

Lo schema qui sotto riassume l'osservazione: si arriva da $v$ alle coordinate di $f(v)$ per due strade, e il risultato è lo stesso. In alto si lavora con i vettori veri (polinomi, matrici, …), in basso solo con colonne di numeri.

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
> Attenzione: $(23, 26)$ **non** è $f(p)$, sono le sue coordinate rispetto a $\mathcal C'$. Per tornare al vettore si fa la combinazione: $23 \cdot (1, -1) + 26 \cdot (0, 1) = (23,\ -23 + 26) = (23, 3)$. Stesso risultato di prima, come deve essere.

> [!TRAPPOLA] Coordinate o vettore?
> Il prodotto $[f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}$ dà le **coordinate** di $f(v)$ rispetto a $\mathcal C$. Coincidono con $f(v)$ solo se $\mathcal C$ è la base canonica di $\K^m$. E prima di moltiplicare bisogna mettere $v$ **in coordinate** rispetto a $\mathcal B$: per un polinomio, i coefficienti nell'ordine della base (per $\{1, x, x^2\}$: termine noto, poi $x$, poi $x^2$).

## La matrice dell'identità (p. 77)

Un caso particolare, utile nel futuro:

> [!PROP] 15.11
> Sia $\mathcal B$ una qualsiasi base di uno spazio $V$ di dimensione $n$. Troviamo
> $$[\id]^{\mathcal B}_{\mathcal B} = I_n.$$

Il motivo: $\id(v_j) = v_j = 0 \cdot v_1 + \dots + 1 \cdot v_j + \dots + 0 \cdot v_n$, quindi la colonna $j$ è il vettore $e_j$, con un 1 al posto $j$ e zeri altrove. Tutte le colonne insieme formano la matrice identità.

> [!TRAPPOLA] Con due basi diverse l'identità non ha matrice $I_n$
> La Proposizione 15.11 chiede la **stessa** base in partenza e in arrivo. Con $\mathcal B = \{(1, 1), (1, -1)\}$ in partenza e la base canonica $\mathcal C$ in arrivo, le colonne sono $[\id(v_1)]_{\mathcal C} = (1, 1)$ e $[\id(v_2)]_{\mathcal C} = (1, -1)$:
> $$[\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \neq I_2.$$
> Questa è una **matrice di cambiamento di base**, il tema della lezione L16.

## Lo spazio delle applicazioni lineari (pp. 77–78)

Le applicazioni lineari si possono sommare e moltiplicare per uno scalare, «punto per punto». Se $V, W$ sono spazi vettoriali e $f, g : V \to W$ due applicazioni lineari, per $\lambda \in \K$ si definisce
$$(f + g)(v) = f(v) + g(v), \qquad (\lambda f)(v) = \lambda f(v).$$
Con queste due operazioni l'insieme di tutte le applicazioni lineari tra $V$ e $W$ diventa uno spazio vettoriale: lo zero è l'applicazione nulla, e le proprietà di somma e prodotto si ereditano da quelle di $W$.

> [!ESEMPIO] · sommare applicazioni = sommare matrici
> Siano $f, g : \R^2 \to \R^2$ con $f(x, y) = (x + y,\ 0)$ e $g(x, y) = (x,\ y)$. Allora
> $$(f + g)(x, y) = (x + y + x,\ 0 + y) = (2x + y,\ y), \qquad (3f)(x, y) = (3x + 3y,\ 0).$$
> Con le basi canoniche: $[f] = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, $[g] = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ e
> $$[f + g] = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = [f] + [g], \qquad [3f] = \begin{pmatrix} 3 & 3 \\ 0 & 0 \end{pmatrix} = 3\,[f].$$

> [!TEOREMA] 15.12
> Siano $V, W$ due spazi vettoriali di dimensione finita con basi $\mathcal A = \{v_1, \dots, v_n\}$, $\mathcal B = \{w_1, \dots, w_m\}$, rispettivamente. Allora l'insieme delle applicazioni lineari $f : V \to W$ è uno spazio vettoriale, e la mappa
> $$f \longmapsto [f]^{\mathcal A}_{\mathcal B}$$
> dall'insieme delle applicazioni lineari $f : V \to W$ a $M(m, n, \K)$ è un isomorfismo.

Pezzo per pezzo (attenzione: qui le basi si chiamano $\mathcal A$ e $\mathcal B$, con $\mathcal B$ base di $W$):

- **È lineare**: la colonna $j$ di $[f + g]$ è $[f(v_j) + g(v_j)]_{\mathcal B} = [f(v_j)]_{\mathcal B} + [g(v_j)]_{\mathcal B}$, quindi $[f + g] = [f] + [g]$; allo stesso modo $[\lambda f] = \lambda [f]$. È quello che hai visto nell'esempio.
- **È iniettiva**: se $[f] = 0$, tutte le immagini $f(v_j)$ sono nulle, e allora $f$ è l'applicazione nulla.
- **È suriettiva**: ogni matrice $A = (a_{ij})$ è la matrice di qualche $f$. Basta definire $f$ sulla base, $f(v_j) = a_{1j} w_1 + \dots + a_{mj} w_m$, ed estendere per linearità.

In pratica: **una volta scelte le basi, applicazioni lineari e matrici sono la stessa cosa**. Tutto ciò che si dimostra per le matrici vale per le applicazioni lineari, e viceversa.

> [!OLTRE] Hom e la sua dimensione
> Nel libro di Martelli (§4.3.4) l'insieme delle applicazioni lineari $V \to W$ si chiama $\mathrm{Hom}(V, W)$, da «omomorfismo», sinonimo di applicazione lineare. Poiché è isomorfo a $M(m, n, \K)$, ha dimensione $mn$ (Corollario 4.3.12). Per esempio le applicazioni lineari $\R^3 \to \R^2$ formano uno spazio di dimensione $2 \cdot 3 = 6$.

Un modo per vedere la matrice associata in azione è lo strumento qui sotto: una matrice $2 \times 2$ come trasformazione del piano. Con $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, l'isomorfismo dell'esempio (a), le colonne sono le immagini di $e_1$ ed $e_2$ e il quadrato unitario diventa un parallelogramma di area $|\det A| = 1$. Prova poi a scrivere $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$: il piano si schiaccia su una retta, il nucleo non è più $\{0\}$ e $L_A$ non è un isomorfismo.

```widget matrice
titolo: Una matrice $2 \times 2$ come applicazione lineare del piano
a: 2 1; 1 1
x: 1 1
raggio: 4
```

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: §4.2.5 «Isomorfismi» (pp. 127–128, con la dimostrazione della Proposizione 15.2 e la scorciatoia della Proposizione 4.2.24), §4.2.7 «Spazi vettoriali isomorfi» (p. 129), §4.3 «Matrice associata» fino a §4.3.4 «Hom» (pp. 130–135). Gli Esempi 4.3.2 e 4.3.3 del libro sono gli Esempi 15.7–15.8 e l'Esercizio 15.13 delle dispense.

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste; dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **La matrice associata** è una delle domande più frequenti del quiz. Negli appelli 2023–2026 compare così: matrice di $T : \R^2 \to \R^2$ rispetto a una base non canonica (appello del 24/01/2024, domanda 3, e del 15/01/2026, domanda 8); coordinate $[T(v_1)]_{\mathcal B}$ di un'immagine (05/02/2026, domanda 6); matrice di una composizione (16/01/2025, domanda 5, che vedrai nella lezione L16). Il foglio 3 del tutorato (esercizi 4 e 5) allena proprio questo.
2. **Gli argomenti di dimensione** della Proposizione 15.3 danno la risposta in una riga: appello del 02/09/2025, domanda 5.
3. **Nei problemi aperti** si chiede spesso di scrivere la matrice di $T$ nella base canonica e di dire se $T$ è biettiva (appello del 10/07/2024, problema 11), oppure di calcolare nucleo e immagine a partire dalla matrice.
4. **Tutta la parte sugli autovalori** (lezioni L17–L18) usa la matrice associata: per un endomorfismo di $\R_2[x]$ si lavora con la sua matrice $3 \times 3$.

### Tre domande vere, risolte

> [!ESAME] Appello del 15/01/2026, domanda 8
> *La matrice associata a $T : \R^2 \to \R^2$, $T(x, y) = (2x, 3y)$, rispetto alla base $\mathcal B = \{(0, 1), (1, 2)\}$ è …* (si intende $[T]^{\mathcal B}_{\mathcal B}$, stessa base in partenza e in arrivo).
>
> Soluzione. Passo 1: $T(0, 1) = (0, 3)$ e $T(1, 2) = (2, 6)$. Passo 2, coordinate rispetto a $\mathcal B$: $a (0, 1) + b (1, 2) = (b,\ a + 2b)$.
> - $(0, 3)$: $b = 0$, $a = 3$, quindi $[T(v_1)]_{\mathcal B} = (3, 0)$;
> - $(2, 6)$: $b = 2$, $a + 4 = 6$ cioè $a = 2$, quindi $[T(v_2)]_{\mathcal B} = (2, 2)$.
>
> Passo 3: $[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 2 \\ 0 & 2 \end{pmatrix}$. Tra le risposte c'erano anche $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ (la matrice nella base canonica) e $\begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$ (i vettori della base): sono le due trappole classiche.

> [!ESAME] Appello del 05/02/2026, domanda 6
> *Data $T(x, y) = (3x,\ x + 2y)$ e la base $\mathcal B = \{v_1 = (0, 1),\ v_2 = (1, 1)\}$, il vettore di coordinate $[T(v_1)]_{\mathcal B}$ è …*
>
> Soluzione. $T(v_1) = T(0, 1) = (0, 2)$. Cerchiamo $a, b$ con $a (0, 1) + b (1, 1) = (b,\ a + b) = (0, 2)$: $b = 0$ e $a = 2$. Quindi $[T(v_1)]_{\mathcal B} = (2, 0)$. La risposta sbagliata più attraente era $(0, 2)$, cioè $T(v_1)$ stesso: ma la domanda chiede le **coordinate**.

> [!ESAME] Appello del 02/09/2025, domanda 5
> *Sia $f : V \to W$ lineare con $\dim V = 4$ e $\dim W = 2$. Quale è necessariamente vera?*
>
> Soluzione. Per il teorema della dimensione $\dim \Ker f = 4 - \dim \Imm f \ge 4 - 2 = 2$, quindi il nucleo non è mai $\{0\}$: **$f$ non può essere iniettiva** (è il punto 1 della Proposizione 15.3 letto al contrario). Le altre risposte («deve essere suriettiva», «non può essere suriettiva», «deve essere iniettiva», «è un isomorfismo») sono false: l'applicazione nulla non è suriettiva, mentre $(x_1, x_2, x_3, x_4) \mapsto (x_1, x_2)$ lo è.

### Errori da evitare

- Scrivere le immagini **in riga** invece che in colonna (si ottiene la trasposta).
- Mettere nella colonna $f(v_j)$ invece delle sue **coordinate** rispetto alla base di arrivo.
- Confondere la taglia: $[f]^{\mathcal B}_{\mathcal C}$ ha $\dim W$ righe e $\dim V$ colonne.
- Cambiare l'ordine dei vettori della base: l'ordine delle colonne segue l'ordine di $\mathcal B$, l'ordine delle righe segue quello di $\mathcal C$.
- Per i polinomi, dimenticare che le coordinate rispetto a $\{1, x, x^2\}$ sono i coefficienti **dal termine noto in su**.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione bastano tre righe: «colonna $j$ di $[f]^{\mathcal B}_{\mathcal C}$ = $[f(v_j)]_{\mathcal C}$ (partenza in alto, arrivo in basso)»; «$[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} [v]_{\mathcal B}$»; «$f$ iniettiva $\Rightarrow \dim V \le \dim W$, suriettiva $\Rightarrow \dim V \ge \dim W$, isomorfi $\iff$ stessa dimensione».

## Quiz

```quiz
D: Sia $f : \R^2 \to \R^3$ un'applicazione lineare. Quale affermazione è necessariamente vera?
- $f$ deve essere iniettiva.
+ $f$ non può essere suriettiva.
- $f$ non può essere iniettiva.
- $f$ è un isomorfismo.
- $f$ deve essere suriettiva.
= $\dim \Imm f \le \dim \R^2 = 2 < 3$, quindi $\Imm f \neq \R^3$: $f$ non è mai suriettiva (Proposizione 15.3, punto 2). Può essere iniettiva ($(x, y) \mapsto (x, y, 0)$) ma non deve esserlo (l'applicazione nulla). Simile all'appello del 02/09/2025, domanda 5.

D: Quale coppia di spazi vettoriali reali è formata da spazi isomorfi?
+ $\R_2[x]$ e $\R^3$
- $\R_2[x]$ e $\R^2$
- $M(2, \R)$ e $\R^3$
- $\R^2$ e $\R^3$
- $M(2, 3, \R)$ e $\R^5$
= Due spazi di dimensione finita sono isomorfi se e solo se hanno la stessa dimensione (Proposizione 15.4). $\dim \R_2[x] = 3 = \dim \R^3$. Nelle altre coppie le dimensioni sono $3$ e $2$, $4$ e $3$, $2$ e $3$, $6$ e $5$.

D: La matrice associata a $f : \R^3 \to \R^2$, $f(x, y, z) = (x - z,\ 2y + z)$, rispetto alle basi canoniche è:
+ $\begin{pmatrix} 1 & 0 & -1 \\ 0 & 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 2 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}$
= Le colonne sono $f(e_1) = (1, 0)$, $f(e_2) = (0, 2)$, $f(e_3) = (-1, 1)$. La matrice è $2 \times 3$ (arrivo $\R^2$, partenza $\R^3$) e si legge dai coefficienti riga per riga. La seconda risposta è la trasposta.

D: La matrice della derivata $D : \R_2[x] \to \R_1[x]$, $D(p) = p'$, rispetto alle basi $\{1, x, x^2\}$ e $\{1, x\}$ è:
+ $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 \\ 1 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$
= $D(1) = 0 \to (0, 0)$, $D(x) = 1 \to (1, 0)$, $D(x^2) = 2x \to (0, 2)$: sono le tre colonne. La taglia è $2 \times 3$ perché $\dim \R_1[x] = 2$ e $\dim \R_2[x] = 3$; la seconda risposta è la trasposta, la terza ha la taglia di un endomorfismo di $\R_2[x]$.

D: Sia $T : \R^2 \to \R^2$, $T(x, y) = (x + y,\ 2x)$, e sia $\mathcal B = \{v_1 = (1, 0),\ v_2 = (1, 1)\}$. Il vettore di coordinate $[T(v_1)]_{\mathcal B}$ è:
+ $(-1, 2)$
- $(1, 2)$
- $(2, -1)$
- $(1, 0)$
- $(2, 2)$
= $T(v_1) = (1, 2)$. Coordinate: $a (1, 0) + b (1, 1) = (a + b,\ b) = (1, 2)$ dà $b = 2$ e $a = -1$. La risposta $(1, 2)$ è $T(v_1)$ stesso, non le sue coordinate. Simile all'appello del 05/02/2026, domanda 6.

D: Sia $T(x, y) = (y, x)$ e sia $\mathcal B = \{(1, 2), (0, 1)\}$. La matrice $[T]^{\mathcal B}_{\mathcal B}$ è:
+ $\begin{pmatrix} 2 & 1 \\ -3 & -2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 2 & -3 \\ 1 & -2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}$
= $T(1, 2) = (2, 1) = 2 (1, 2) - 3 (0, 1)$ e $T(0, 1) = (1, 0) = 1 (1, 2) - 2 (0, 1)$: le colonne sono $(2, -3)$ e $(1, -2)$. La seconda risposta è la matrice nella base canonica, la terza la trasposta, la quinta mette le immagini senza passare alle coordinate. Simile agli appelli del 24/01/2024 (domanda 3) e del 15/01/2026 (domanda 8).

D: Sia $f(p) = (p(2), p(-2))$ con matrice $\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}$ rispetto a $\{1, x, x^2\}$ e alla base canonica. Quanto vale $f(1 - x + x^2)$?
+ $(3, 7)$
- $(3, -1)$
- $(7, 3)$
- $(1, 7)$
- $(4, 4)$
= $[p]_{\mathcal B} = (1, -1, 1)$, e il prodotto dà $(1 - 2 + 4,\ 1 + 2 + 4) = (3, 7)$. Controllo diretto: $p(2) = 1 - 2 + 4 = 3$ e $p(-2) = 1 + 2 + 4 = 7$.

D: I polinomi $(x + 1)^2$, $x + 1$, $1$ formano una base di $\R_2[x]$. Le coordinate di $q(x) = (x - 1)^2$ in questa base sono:
+ $(1, -4, 4)$
- $(1, -2, 1)$
- $(1, 4, 4)$
- $(4, -4, 1)$
- $(1, 0, 0)$
= Scriviamo $x - 1 = (x + 1) - 2$. Allora $(x - 1)^2 = (x + 1)^2 - 4(x + 1) + 4 \cdot 1$. Controllo: $x^2 + 2x + 1 - 4x - 4 + 4 = x^2 - 2x + 1$. La risposta $(1, -2, 1)$ sono le coordinate nella base $\{x^2, x, 1\}$. Simile all'appello del 06/09/2024, domanda 9.

D: La matrice associata all'inversa di $f = L_A : \R^2 \to \R^2$, con $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, rispetto alla base canonica è:
+ $\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1/2 & 1 \\ 1 & 1 \end{pmatrix}$
- $f$ non è invertibile.
= $\det A = 2 - 1 = 1 \neq 0$, quindi $f$ è un isomorfismo e $f^{-1} = L_{A^{-1}}$ con $A^{-1} = \frac{1}{1}\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$. Controllo: $A A^{-1} = I_2$. Simile all'appello del 10/07/2024, problema 11, punto 2.

D: Qual è la dimensione dello spazio vettoriale di tutte le applicazioni lineari $\R^3 \to \R^2$?
N: 6
= Per il Teorema 15.12 questo spazio è isomorfo a $M(2, 3, \R)$, le matrici $2 \times 3$, che ha dimensione $2 \cdot 3 = 6$.
```

## Esercizi

::: esercizio medio Esercizio 15.13 delle dispense: una matrice con basi non canoniche su $\C$
Consideriamo l'applicazione lineare
$$f : \C^2 \longrightarrow \C^3, \qquad f\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x - y \\ 2x \\ y \end{pmatrix}.$$
Trovare la matrice associata a $f$ rispetto alle basi $v_1 = (1, 1)$, $v_2 = (1, -1)$ in partenza e $w_1 = (1, 1, 0)$, $w_2 = (0, 1, 1)$, $w_3 = (1, 0, 1)$ in arrivo.
::: soluzione
Il campo è $\C$, ma tutti i numeri in gioco sono reali: i conti sono quelli di sempre.

**Passo 1**, le immagini:
$$f(v_1) = f(1, 1) = (1 - 1,\ 2,\ 1) = (0, 2, 1), \qquad f(v_2) = f(1, -1) = (1 + 1,\ 2,\ -1) = (2, 2, -1).$$

**Passo 2**, coordinate rispetto a $w_1, w_2, w_3$. Scriviamo $a w_1 + b w_2 + c w_3 = (a + c,\ a + b,\ b + c)$.

Per $f(v_1) = (0, 2, 1)$:
$$\begin{cases} a + c = 0 \\ a + b = 2 \\ b + c = 1 \end{cases}$$
Dalla prima $c = -a$; la terza diventa $b - a = 1$. Sommandola alla seconda: $2b = 3$, quindi $b = \frac 32$; poi $a = 2 - \frac 32 = \frac 12$ e $c = -\frac 12$. Quindi $[f(v_1)]_{\mathcal C} = \left(\frac 12, \frac 32, -\frac 12\right)$.

Per $f(v_2) = (2, 2, -1)$:
$$\begin{cases} a + c = 2 \\ a + b = 2 \\ b + c = -1 \end{cases}$$
Sottraendo la seconda dalla prima: $c - b = 0$, cioè $b = c$. La terza dà $2c = -1$, quindi $b = c = -\frac 12$ e $a = 2 - c = \frac 52$. Quindi $[f(v_2)]_{\mathcal C} = \left(\frac 52, -\frac 12, -\frac 12\right)$.

**Passo 3**, le colonne:
$$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1/2 & 5/2 \\ 3/2 & -1/2 \\ -1/2 & -1/2 \end{pmatrix} = \frac 12 \begin{pmatrix} 1 & 5 \\ 3 & -1 \\ -1 & -1 \end{pmatrix}.$$
È il risultato indicato nelle dispense. Controllo sulla prima colonna: $\frac 12 (1, 1, 0) + \frac 32 (0, 1, 1) - \frac 12 (1, 0, 1) = \left(\frac 12 - \frac 12,\ \frac 12 + \frac 32,\ \frac 32 - \frac 12\right) = (0, 2, 1)$.

Nella lezione L16 ritroverai lo stesso risultato con la formula del cambiamento di base.
:::

::: esercizio base Isomorfismo oppure no?
Per ciascuna applicazione lineare di' se è un isomorfismo, motivando:
(a) $f : \R^2 \to \R^2$, $f(x, y) = (x + y,\ x - y)$;
(b) $g : \R^3 \to \R^2$, $g(x, y, z) = (x, y)$;
(c) $h : \R_2[x] \to \R^3$, $h(p) = (p(0), p(1), p(2))$;
(d) $k : M(2, \R) \to M(2, \R)$, $k(A) = A - {}^tA$.
::: soluzione
(a) **Sì.** Nucleo: $x + y = 0$ e $x - y = 0$; sommando $2x = 0$, quindi $x = 0$ e $y = 0$. $\Ker f = \{0\}$, quindi $f$ è iniettiva; poiché partenza e arrivo hanno la stessa dimensione 2, per il teorema della dimensione $\dim \Imm f = 2$ e $f$ è anche suriettiva. (In alternativa: $\det \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = -2 \neq 0$.)

(b) **No.** $\dim \R^3 = 3 \neq 2 = \dim \R^2$: per la Proposizione 15.3 un isomorfismo richiede dimensioni uguali. Concretamente $g(0, 0, 1) = (0, 0)$, quindi $g$ non è iniettiva.

(c) **Sì.** Con la base $\{1, x, x^2\}$ in partenza e quella canonica in arrivo: $h(1) = (1, 1, 1)$, $h(x) = (0, 1, 2)$, $h(x^2) = (0, 1, 4)$, quindi
$$[h] = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}, \qquad \det [h] = 1 \cdot (1 \cdot 4 - 1 \cdot 2) = 2 \neq 0$$
(sviluppo lungo la prima riga). Il rango è 3, quindi $\Ker h = \{0\}$ e $\Imm h = \R^3$. In parole: un polinomio di grado al massimo 2 è determinato dai suoi valori in tre punti.

(d) **No.** Se $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, allora $k(A) = \begin{pmatrix} 0 & b - c \\ c - b & 0 \end{pmatrix}$. Tutte le matrici simmetriche ($b = c$) finiscono in 0, per esempio $k(I_2) = 0$. Il nucleo non è $\{0\}$ (ha dimensione 3), quindi $k$ non è iniettiva.
:::

::: esercizio base Coordinate in basi non canoniche
(a) Trova le coordinate di $v = (5, 1)$ rispetto a $\mathcal B = \{(1, 1), (1, -1)\}$.
(b) Trova le coordinate di $p(x) = 2x^2 - x + 3$ rispetto a $\{1, x, x^2\}$ e rispetto a $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$.
::: soluzione
(a) $\lambda_1 (1, 1) + \lambda_2 (1, -1) = (5, 1)$ dà $\lambda_1 + \lambda_2 = 5$ e $\lambda_1 - \lambda_2 = 1$. Sommando: $2\lambda_1 = 6$, $\lambda_1 = 3$; poi $\lambda_2 = 2$. Quindi $[v]_{\mathcal B} = (3, 2)$. Controllo: $3(1, 1) + 2(1, -1) = (5, 1)$.

(b) Rispetto a $\{1, x, x^2\}$ bastano i coefficienti dal termine noto in su: $(3, -1, 2)$.

Rispetto a $\mathcal B'$ cerchiamo $a, b, c$ con
$$a + b(x - 1) + c(x - 1)^2 = (a - b + c) + (b - 2c)\,x + c\,x^2 = 3 - x + 2x^2.$$
Confrontando: $c = 2$; $b - 2c = -1$ dà $b = 3$; $a - b + c = 3$ dà $a = 3 + 3 - 2 = 4$. Quindi $[p]_{\mathcal B'} = (4, 3, 2)$. Controllo: $4 + 3(x - 1) + 2(x^2 - 2x + 1) = 4 + 3x - 3 + 2x^2 - 4x + 2 = 2x^2 - x + 3$.
:::

::: esercizio base Matrice nelle basi canoniche e immagine di un vettore
Sia $f : \R^3 \to \R^2$, $f(x, y, z) = (x + 2y,\ y - z)$. Scrivi la matrice associata rispetto alle basi canoniche e usala per calcolare $f(1, 1, 1)$ e $f(2, -1, 3)$.
::: soluzione
Colonne: $f(e_1) = (1, 0)$, $f(e_2) = (2, 1)$, $f(e_3) = (0, -1)$, quindi
$$[f] = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}.$$
Con le basi canoniche coordinate e vettori coincidono:
$$[f]\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 + 2 + 0 \\ 0 + 1 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}, \qquad [f]\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 - 2 + 0 \\ 0 - 1 - 3 \end{pmatrix} = \begin{pmatrix} 0 \\ -4 \end{pmatrix}.$$
Controllo diretto: $f(2, -1, 3) = (2 - 2,\ -1 - 3) = (0, -4)$.
:::

::: esercizio medio La matrice della derivata
Sia $D : \R_3[x] \to \R_2[x]$, $D(p) = p'$. Scrivi $[D]$ rispetto alle basi $\{1, x, x^2, x^3\}$ e $\{1, x, x^2\}$, e usala per calcolare la derivata di $q(x) = 1 + 2x - x^2 + 4x^3$. Quanto valgono $\dim \Ker D$ e $\dim \Imm D$?
::: soluzione
Immagini della base di partenza: $D(1) = 0$, $D(x) = 1$, $D(x^2) = 2x$, $D(x^3) = 3x^2$. Coordinate rispetto a $\{1, x, x^2\}$: $(0, 0, 0)$, $(1, 0, 0)$, $(0, 2, 0)$, $(0, 0, 3)$. Quindi
$$[D] = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \end{pmatrix}.$$
$[q] = (1, 2, -1, 4)$, e
$$[D]\begin{pmatrix} 1 \\ 2 \\ -1 \\ 4 \end{pmatrix} = \begin{pmatrix} 2 \\ -2 \\ 12 \end{pmatrix},$$
cioè $q'(x) = 2 - 2x + 12x^2$. Controllo diretto: la derivata di $1 + 2x - x^2 + 4x^3$ è $2 - 2x + 12x^2$.

La matrice ha rango 3 (tre pivot), quindi $\dim \Imm D = 3$: $D$ è suriettiva. Per il teorema della dimensione $\dim \Ker D = 4 - 3 = 1$: il nucleo sono i polinomi costanti.
:::

::: esercizio medio Una base di arrivo che semplifica la matrice
Riprendi $f : \R_2[x] \to \R^2$, $f(p) = (p(2), p(-2))$, con $\mathcal B = \{1, x, x^2\}$ in partenza. (a) Calcola $[f]^{\mathcal B}_{\mathcal C''}$ con $\mathcal C'' = \{(1, 1), (1, -1)\}$ in arrivo. (b) Usala per ritrovare $f(3x^2 + 5x + 1) = (23, 3)$.
::: soluzione
(a) Le immagini sono $f(1) = (1, 1)$, $f(x) = (2, -2)$, $f(x^2) = (4, 4)$. Rispetto a $\mathcal C''$:
- $(1, 1) = 1 \cdot (1, 1) + 0 \cdot (1, -1)$, coordinate $(1, 0)$;
- $(2, -2) = 0 \cdot (1, 1) + 2 \cdot (1, -1)$, coordinate $(0, 2)$;
- $(4, 4) = 4 \cdot (1, 1) + 0 \cdot (1, -1)$, coordinate $(4, 0)$.

$$[f]^{\mathcal B}_{\mathcal C''} = \begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 0 \end{pmatrix}.$$
Ci sono molti zeri: la prima riga «vede» solo la parte pari del polinomio ($1$ e $x^2$), la seconda solo la parte dispari ($x$).

(b) $[p]_{\mathcal B} = (1, 5, 3)$ e
$$\begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 13 \\ 10 \end{pmatrix}.$$
Sono le coordinate rispetto a $\mathcal C''$: $13 (1, 1) + 10 (1, -1) = (23, 3)$.
:::

::: esercizio medio Un isomorfismo costruito con una base
In $\R_1[x]$ considera la base $\mathcal B = \{1 + x,\ 1 - x\}$. Scrivi esplicitamente l'isomorfismo $\Phi : \R_1[x] \to \R^2$ che manda $p$ in $[p]_{\mathcal B}$, e la sua inversa. Quanto vale $\Phi(3 + x)$?
::: soluzione
Sia $p = a + bx$. Cerchiamo $\alpha, \beta$ con $\alpha(1 + x) + \beta(1 - x) = (\alpha + \beta) + (\alpha - \beta)x = a + bx$:
$$\begin{cases} \alpha + \beta = a \\ \alpha - \beta = b \end{cases} \quad\Longrightarrow\quad \alpha = \frac{a + b}{2}, \qquad \beta = \frac{a - b}{2}.$$
Quindi
$$\Phi(a + bx) = \left(\frac{a + b}{2},\ \frac{a - b}{2}\right), \qquad \Phi^{-1}(\alpha, \beta) = \alpha(1 + x) + \beta(1 - x) = (\alpha + \beta) + (\alpha - \beta)x.$$
Entrambe sono lineari (come prevede la Proposizione 15.2). Per $p = 3 + x$: $\Phi(3 + x) = (2, 1)$. Controllo: $2(1 + x) + 1(1 - x) = 3 + x$.
:::

::: esercizio medio Una matrice da $M(2, \R)$ a $\R_2[x]$ (foglio 3 del tutorato, esercizio 4)
Calcola la matrice associata a $T : M(2, \R) \to \R_2[x]$,
$$T\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ax^2 + (b + c)x + d,$$
dalla base $\mathcal A = \left\{ \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}, \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \right\}$ alla base $\mathcal B = \{1, x, x^2\}$. Che cosa puoi dire di $\Ker T$ e di $\Imm T$?
::: soluzione
La matrice sarà $3 \times 4$ ($\dim \R_2[x] = 3$, $\dim M(2, \R) = 4$). Chiamiamo $A_1, \dots, A_4$ le matrici della base.
- $T(A_1)$: $a = 1$, $b = c = 0$, $d = -1$, quindi $T(A_1) = x^2 - 1$, coordinate $(-1, 0, 1)$ (termine noto, $x$, $x^2$).
- $T(A_2)$: $a = 0$, $b = c = 1$, $d = 0$, quindi $T(A_2) = 2x$, coordinate $(0, 2, 0)$.
- $T(A_3)$: $a = 0$, $b = 1$, $c = -1$, $d = 0$, quindi $T(A_3) = 0$, coordinate $(0, 0, 0)$.
- $T(A_4)$: $a = 1$, $b = c = 0$, $d = 1$, quindi $T(A_4) = x^2 + 1$, coordinate $(1, 0, 1)$.

$$[T]^{\mathcal A}_{\mathcal B} = \begin{pmatrix} -1 & 0 & 0 & 1 \\ 0 & 2 & 0 & 0 \\ 1 & 0 & 0 & 1 \end{pmatrix}.$$
Le colonne 1, 2 e 4 sono indipendenti (la 1 e la 4 hanno somma $(0, 0, 2)$ e differenza $(2, 0, 0)$, la 2 è $(0, 2, 0)$), quindi il rango è 3: $T$ è suriettiva, $\Imm T = \R_2[x]$. Per il teorema della dimensione $\dim \Ker T = 4 - 3 = 1$, e la colonna nulla dice che $A_3 \in \Ker T$: $\Ker T = \Span(A_3)$, le matrici antisimmetriche.
:::

::: esercizio difficile Iniettiva se e solo se suriettiva
Sia $f : V \to W$ lineare con $\dim V = \dim W = n$. Dimostra che $f$ è iniettiva se e solo se è suriettiva. Poi mostra con un esempio che l'ipotesi $\dim V = \dim W$ non si può togliere.
::: soluzione
Per il teorema della dimensione, $n = \dim \Ker f + \dim \Imm f$.

($\Rightarrow$) Se $f$ è iniettiva, $\Ker f = \{0\}$, quindi $\dim \Imm f = n = \dim W$. Un sottospazio di $W$ con la stessa dimensione di $W$ è tutto $W$: una sua base è formata da $n$ vettori indipendenti di $W$, che per il Teorema 7.12 sono una base di $W$. Quindi $\Imm f = W$: $f$ è suriettiva.

($\Leftarrow$) Se $f$ è suriettiva, $\dim \Imm f = \dim W = n$, quindi $\dim \Ker f = n - n = 0$, cioè $\Ker f = \{0\}$: $f$ è iniettiva.

Senza l'ipotesi: $g : \R^2 \to \R^3$, $g(x, y) = (x, y, 0)$ è iniettiva ma non suriettiva; $h : \R^3 \to \R^2$, $h(x, y, z) = (x, y)$ è suriettiva ma non iniettiva.
:::

::: esercizio esame Come all'esame: una base che rende la matrice semplice
Sia $f : \R_2[x] \to \R^2$, $f(p) = (p(1),\ p'(1))$.
(1) Scrivi la matrice associata a $f$ rispetto alle basi $\mathcal B = \{1, x, x^2\}$ e $\mathcal C = \{e_1, e_2\}$.
(2) Trova $\Ker f$ e $\Imm f$; $f$ è iniettiva? È suriettiva?
(3) Scrivi la matrice di $f$ rispetto a $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$ in partenza e $\mathcal C$ in arrivo.
::: soluzione
(1) $f(1) = (1, 0)$ (la derivata di una costante è 0); $f(x) = (1, 1)$; $f(x^2) = (1, 2)$ perché $(x^2)' = 2x$ vale 2 in 1. Quindi
$$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \end{pmatrix}.$$

(2) La matrice è già a scalini con due pivot: rango 2. Quindi $\dim \Imm f = 2$ e $\Imm f = \R^2$: **$f$ è suriettiva**. Per il teorema della dimensione $\dim \Ker f = 3 - 2 = 1$: **non è iniettiva**. Il nucleo: $a + b + c = 0$ e $b + 2c = 0$ (dove $p = a + bx + cx^2$). Ponendo $c = t$: $b = -2t$, $a = -b - c = t$. Quindi $p = t(1 - 2x + x^2) = t(x - 1)^2$ e
$$\Ker f = \Span\big((x - 1)^2\big).$$
Controllo: $(x - 1)^2$ vale 0 in 1, e la sua derivata $2(x - 1)$ vale 0 in 1.

(3) $f(1) = (1, 0)$; $f(x - 1) = (0, 1)$ perché $x - 1$ vale 0 in 1 e ha derivata 1; $f((x - 1)^2) = (0, 0)$ per il punto (2). Quindi
$$[f]^{\mathcal B'}_{\mathcal C} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}.$$
Con la base «centrata in 1» la matrice è quasi l'identità: leggi subito che $f$ è suriettiva e che il terzo vettore della base genera il nucleo.
:::

::: esercizio esame Come all'esame: basi non canoniche in partenza e in arrivo
Sia $T : \R^3 \to \R^2$, $T(a, b, c) = (a + b,\ b - c)$, e siano $\mathcal B = \{(1, 0, 0), (1, 1, 0), (1, 1, 1)\}$ base di $\R^3$ e $\mathcal C = \{(1, 1), (0, 1)\}$ base di $\R^2$.
(1) Calcola $[T]^{\mathcal B}_{\mathcal C}$.
(2) Calcola $[v]_{\mathcal B}$ per $v = (2, 3, 4)$.
(3) Usa la Proposizione 15.9 per calcolare $T(v)$, e controlla il risultato con la definizione.
::: soluzione
(1) Le immagini: $T(1, 0, 0) = (1, 0)$, $T(1, 1, 0) = (2, 1)$, $T(1, 1, 1) = (2, 0)$. Coordinate rispetto a $\mathcal C$: $\alpha (1, 1) + \beta (0, 1) = (\alpha,\ \alpha + \beta)$, quindi $\alpha$ è la prima componente e $\beta$ = seconda componente $- \alpha$.
- $(1, 0)$: $\alpha = 1$, $\beta = -1$;
- $(2, 1)$: $\alpha = 2$, $\beta = -1$;
- $(2, 0)$: $\alpha = 2$, $\beta = -2$.

$$[T]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 2 & 2 \\ -1 & -1 & -2 \end{pmatrix}.$$

(2) $x (1, 0, 0) + y (1, 1, 0) + z (1, 1, 1) = (x + y + z,\ y + z,\ z) = (2, 3, 4)$: dall'ultima $z = 4$, poi $y = 3 - 4 = -1$, poi $x = 2 - (-1) - 4 = -1$. Quindi $[v]_{\mathcal B} = (-1, -1, 4)$.

(3) $$[T(v)]_{\mathcal C} = \begin{pmatrix} 1 & 2 & 2 \\ -1 & -1 & -2 \end{pmatrix}\begin{pmatrix} -1 \\ -1 \\ 4 \end{pmatrix} = \begin{pmatrix} -1 - 2 + 8 \\ 1 + 1 - 8 \end{pmatrix} = \begin{pmatrix} 5 \\ -6 \end{pmatrix}.$$
Sono coordinate rispetto a $\mathcal C$: $T(v) = 5 (1, 1) - 6 (0, 1) = (5, -1)$. Controllo con la definizione: $T(2, 3, 4) = (2 + 3,\ 3 - 4) = (5, -1)$.
:::

## Domande di ripasso

::: domanda Che cos'è un isomorfismo? Quando due spazi si dicono isomorfi?
Un'applicazione lineare biettiva, cioè iniettiva ($\Ker f = \{0\}$) e suriettiva ($\Imm f = W$). Due spazi sullo stesso campo sono isomorfi se esiste almeno un isomorfismo fra loro.
:::

::: domanda L'inversa di un isomorfismo è lineare? Perché?
Sì (Proposizione 15.2). Se $f(v) = w$ e $f(v') = w'$, allora $f(v + v') = w + w'$ e $f(\lambda v) = \lambda w$; poiché $f$ è biettiva, questo dice che $f^{-1}(w + w') = v + v'$ e $f^{-1}(\lambda w) = \lambda v$.
:::

::: domanda Che cosa si deduce sulle dimensioni se $f : V \to W$ è iniettiva? E se è suriettiva?
Iniettiva: $\dim V = \dim \Imm f \le \dim W$. Suriettiva: $\dim V \ge \dim \Imm f = \dim W$. Isomorfismo: $\dim V = \dim W$. Tutto viene dal teorema della dimensione.
:::

::: domanda Quando due spazi vettoriali di dimensione finita sono isomorfi?
Se e solo se hanno la stessa dimensione (Proposizione 15.4). In particolare ogni spazio di dimensione $n$ su $\K$ è isomorfo a $\K^n$.
:::

::: domanda Quale isomorfismo $V \to \K^n$ indicano le dispense, e da che cosa dipende?
La mappa che manda ogni vettore nelle sue coordinate rispetto a una base di $V$. Dipende dalla base: con basi diverse lo stesso vettore ha coordinate diverse (per esempio $x^2$ è $(0, 0, 1)$ in $\{1, x, x^2\}$ e $(1, 2, 1)$ in $\{1, x - 1, (x - 1)^2\}$).
:::

::: domanda Come è fatta la matrice associata $[f]^{\mathcal B}_{\mathcal C}$?
È una matrice $m \times n$ con $m = \dim W$ e $n = \dim V$; la colonna $j$ contiene le coordinate di $f(v_j)$ rispetto a $\mathcal C$. La base di partenza sta in alto, quella di arrivo in basso.
:::

::: domanda Qual è la matrice associata a $L_A$ rispetto alle basi canoniche?
È $A$ stessa (Esempio 15.6): $L_A(e_j)$ è la colonna $j$ di $A$, e le sue coordinate rispetto alla base canonica sono le sue componenti.
:::

::: domanda Come si calcola $f(v)$ usando la matrice associata?
Si scrive $v$ in coordinate, $[v]_{\mathcal B}$; si moltiplica: $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$; infine, se $\mathcal C$ non è la base canonica, si ricostruisce $f(v)$ come combinazione dei vettori di $\mathcal C$ con quei coefficienti.
:::

::: domanda Perché la stessa applicazione ha matrici diverse?
Perché la matrice registra le coordinate delle immagini, e le coordinate dipendono dalle basi scelte in partenza e in arrivo (Esempi 15.7 e 15.8).
:::

::: domanda Quanto vale $[\id]^{\mathcal B}_{\mathcal B}$? E $[\id]^{\mathcal B}_{\mathcal C}$ con $\mathcal B \neq \mathcal C$?
$[\id]^{\mathcal B}_{\mathcal B} = I_n$ per ogni base $\mathcal B$ (Proposizione 15.11). Con due basi diverse in genere non è $I_n$: le sue colonne sono le coordinate dei vettori di $\mathcal B$ rispetto a $\mathcal C$ (è la matrice di cambiamento di base della lezione L16).
:::

::: domanda Come si sommano due applicazioni lineari, e che cosa succede alle matrici?
$(f + g)(v) = f(v) + g(v)$ e $(\lambda f)(v) = \lambda f(v)$. Fissate le basi, $[f + g] = [f] + [g]$ e $[\lambda f] = \lambda [f]$.
:::

::: domanda Che cosa dice il Teorema 15.12?
Che le applicazioni lineari $V \to W$ formano uno spazio vettoriale e che, fissate le basi, $f \mapsto [f]^{\mathcal A}_{\mathcal B}$ è un isomorfismo con $M(m, n, \K)$: ogni matrice $m \times n$ è la matrice di una e una sola applicazione lineare.
:::

## Glossario

```glossario
Iniettiva | Vettori diversi hanno immagini diverse; per un'applicazione lineare equivale a $\Ker f = \{0\}$.
Suriettiva | Ogni vettore dello spazio di arrivo è immagine di qualcosa: $\Imm f = W$.
Biettiva | Iniettiva e suriettiva; allora esiste l'inversa $f^{-1}$.
Isomorfismo | Applicazione lineare biettiva (Definizione 15.1); la sua inversa è lineare.
Spazi isomorfi | Spazi sullo stesso campo tra cui esiste un isomorfismo; in dimensione finita, spazi con la stessa dimensione.
Coordinate $[v]_{\mathcal B}$ | La colonna dei coefficienti che scrivono $v$ come combinazione dei vettori della base $\mathcal B$, nell'ordine della base.
Base ordinata | Una base usata come lista: l'ordine dei vettori decide l'ordine delle coordinate e delle colonne.
Matrice associata $[f]^{\mathcal B}_{\mathcal C}$ | Matrice $m \times n$ la cui colonna $j$ è $[f(v_j)]_{\mathcal C}$ (Definizione 15.5).
Base di partenza / di arrivo | La base del dominio (in alto nella notazione) e quella del codominio (in basso).
$L_A$ | L'applicazione $x \mapsto Ax$; la sua matrice nelle basi canoniche è $A$.
Formula delle coordinate | $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}\,[v]_{\mathcal B}$ (Proposizione 15.9).
Matrice dell'identità | $[\id]^{\mathcal B}_{\mathcal B} = I_n$ per ogni base $\mathcal B$ (Proposizione 15.11).
Somma di applicazioni | $(f + g)(v) = f(v) + g(v)$; la matrice della somma è la somma delle matrici.
$\mathrm{Hom}(V, W)$ | Nome del libro di Martelli per lo spazio delle applicazioni lineari $V \to W$; ha dimensione $\dim V \cdot \dim W$.
Teorema della dimensione | $\dim V = \dim \Ker f + \dim \Imm f$ (lezione L14): è la base di tutte le proprietà sulle dimensioni.
```

## Checklist

```checklist
- So dire che cos'è un isomorfismo e controllare se una data applicazione lo è (nucleo, immagine o determinante).
- So spiegare perché l'inversa di un isomorfismo è lineare.
- So usare le dimensioni per escludere iniettività, suriettività o isomorfismo (Proposizione 15.3).
- So che due spazi di dimensione finita sono isomorfi se e solo se hanno la stessa dimensione, e so fare esempi ($\R_2[x] \cong \R^3$, $M(2, \R) \cong \R^4$).
- So calcolare le coordinate di un vettore o di un polinomio rispetto a una base non canonica, risolvendo un sistema.
- So scrivere la matrice associata $[f]^{\mathcal B}_{\mathcal C}$ in tre passi, con le coordinate in colonna e la taglia giusta.
- So usare $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$ e ricostruire $f(v)$ dalle sue coordinate.
- So che la matrice associata dipende dalle basi e che $[\id]^{\mathcal B}_{\mathcal B} = I_n$.
- So sommare applicazioni lineari e so che, fissate le basi, applicazioni lineari e matrici $m \times n$ si corrispondono una a una.
- Riconosco al volo le trappole del quiz: trasposta, immagini al posto delle coordinate, ordine della base.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 15 «Applicazioni lineari II», pp. 74–78: le sezioni 15.A (isomorfismi) e 15.B (matrice associata) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizioni 15.1 e 15.5, Proposizioni 15.2–15.4, 15.9, 15.11, Esempi 15.6–15.8 e 15.10, Teorema 15.12); l'Esercizio 15.13 della sezione 15.C è svolto negli esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §4.2.5 e §4.2.7 (isomorfismi, con la dimostrazione della Proposizione 15.2 e la Proposizione 4.2.24), §4.3.1–4.3.4 (matrice associata, proprietà, Hom).
- **Esame**: appelli del 24/01/2024 (domanda 3), 10/07/2024 (problema 11), 06/09/2024 (domanda 9), 16/01/2025 (domanda 5), 02/09/2025 (domanda 5), 15/01/2026 (domanda 8), 05/02/2026 (domanda 6); foglio 3 del tutorato 2025/26 (esercizi 4 e 5). Testi e soluzioni ufficiali sul Moodle 2025/26 ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); le soluzioni riportate qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (la dimostrazione della Proposizione 15.2, la costruzione dell'isomorfismo, la scorciatoia per dimensioni uguali, Hom, gli esempi e gli esercizi aggiunti) servono a collegare la lezione al resto del corso e all'esame.
