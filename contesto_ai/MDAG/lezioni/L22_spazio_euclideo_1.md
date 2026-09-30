---
corso: MDAG
modulo: AG
lezione: L22
titolo: Lo spazio euclideo I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L22
descrizione: >-
  Appunti della lezione L22 di Algebra lineare e Geometria (MDAG, parte 2): rotazioni e riflessioni del piano,
  isometrie tra spazi con prodotto scalare, matrici ortogonali, classificazione delle isometrie del piano e dello
  spazio, prodotto vettoriale in R3, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Quali trasformazioni lineari muovono le figure senza deformarle? Nel piano sono solo rotazioni e riflessioni, e le
  loro matrici sono le matrici ortogonali, quelle con ${}^tAA = I$. Nello spazio si aggiungono le antirotazioni. In
  chiusura, il prodotto vettoriale $v \times w$: il modo più rapido per trovare un vettore perpendicolare a due vettori
  di $\R^3$, che userai in tutte le lezioni sulla geometria dello spazio.
materiale: dispense
scheda:
  Dispense: lezione 22 · pp. 111–115
  Libro: Martelli, §4.4.8–4.4.9, §7.5, §8.2 e §9.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 22 «Lo spazio euclideo I»; B. Martelli, Geometria e algebra
  lineare, §4.4.8–4.4.9, §7.5, §8.2 e §9.1
file_en: L22_euclidean_space_1.html
appunti_html: appunti/MDAG/L22_spazio_euclideo_1.html
genera_html: true
---

## In breve

- In queste lezioni sullo spazio euclideo $\R^n$ ha sempre il **prodotto scalare euclideo**. Le **isometrie lineari** sono le trasformazioni lineari che non cambiano lunghezze, distanze e angoli; fissano l'origine.
- La **rotazione** di angolo $\vartheta$ (in senso antiorario) ha matrice $\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$, con determinante $1$.
- La **riflessione** rispetto alla retta che forma un angolo $\frac\vartheta2$ con l'asse $x$ ha matrice $\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}$, con determinante $-1$. Attenzione: la retta ha angolo $\frac\vartheta2$, non $\vartheta$.
- Un'**isometria** è un isomorfismo che conserva il prodotto scalare. Basta controllarlo sui vettori di una base; con un prodotto definito positivo equivale a conservare le norme, o le distanze.
- $L_A$ è un'isometria di $\R^n$ se e solo se ${}^tAA = I_n$: $A$ si dice **ortogonale**. Le sue colonne formano una base ortonormale, $A^{-1} = {}^tA$ e $\det A = \pm1$.
- Le matrici ortogonali $2 \times 2$ sono tutte e sole le $\mathrm{Rot}_\vartheta$ e le $\mathrm{Rif}_\vartheta$: le isometrie del piano sono **rotazioni e riflessioni**. Nello spazio sono **rotazioni e antirotazioni**.
- Il **prodotto vettoriale** di $v, w \in \R^3$ è $v \times w = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$: è ortogonale sia a $v$ sia a $w$, ed è nullo se e solo se $v$ e $w$ sono dipendenti.
- Se $v$ e $w$ sono indipendenti, $v, w, v \times w$ è una base di $\R^3$. All'esame il prodotto vettoriale serve soprattutto per trovare direzioni di rette e vettori normali ai piani (lezioni L23–L24).

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Trasformazioni che non deformano (p. 111)

Prendi un foglio con un disegno e fallo ruotare sul tavolo intorno a un punto fisso, oppure giralo a faccia in giù come in uno specchio: il disegno si sposta, ma nessuna lunghezza e nessun angolo cambia. Queste trasformazioni si chiamano **isometrie** («stessa misura»).

In queste lezioni le dispense usano sempre il **prodotto scalare euclideo** sullo **spazio euclideo** $\R^n$, e considerano soltanto **isometrie lineari**, cioè isometrie che fissano l'origine: sono applicazioni lineari $L_A(x) = Ax$ (lezione L14), quindi mandano $0$ in $0$. Le traslazioni, che spostano anche l'origine, non sono lineari e restano fuori da queste lezioni.

Un ricordo che servirà di continuo: **le colonne di $A$ sono le immagini dei vettori della base canonica**, $Ae_1 = A^1$ e $Ae_2 = A^2$. Per scrivere la matrice di una trasformazione del piano basta sapere dove vanno $e_1$ ed $e_2$.

## Rotazioni del piano (p. 111)

Ruota il piano di un angolo $\vartheta$ in senso antiorario intorno all'origine. Il vettore $e_1 = (1, 0)$ sta sulla circonferenza di raggio 1 all'angolo 0: dopo la rotazione sta all'angolo $\vartheta$, cioè nel punto $(\cos\vartheta, \sin\vartheta)$. Il vettore $e_2 = (0, 1)$ sta all'angolo $\frac\pi2$ e finisce all'angolo $\vartheta + \frac\pi2$, cioè nel punto $\left(\cos\left(\vartheta + \frac\pi2\right), \sin\left(\vartheta + \frac\pi2\right)\right) = (-\sin\vartheta, \cos\vartheta)$. Queste due immagini sono le colonne della matrice.

```grafico
titolo: La rotazione di $\frac\pi6$ manda $e_1$ in $(\cos\frac\pi6, \sin\frac\pi6)$ ed $e_2$ in $(-\sin\frac\pi6, \cos\frac\pi6)$
x: -1.2 1.4
y: -0.4 1.3
vettore: 1 0 | grigio | $e_1$ | s
vettore: 0 1 | grigio | $e_2$ | e
vettore: sqrt(3)/2 1/2 | accento | spesso | $\mathrm{Rot}\,e_1$ | e
vettore: -1/2 sqrt(3)/2 | blu | spesso | $\mathrm{Rot}\,e_2$ | no
arco: 0 0 0.45 0 pi/6 | ambra | $\vartheta$
arco: 0 0 0.45 pi/2 2pi/3 | ambra | $\vartheta$
```

> [!DEF] 22.1 · Rotazione
> Una **rotazione** di angolo $\vartheta$ è la trasformazione $L_A : \R^2 \to \R^2$ determinata dalla matrice $A = \mathrm{Rot}_\vartheta$, con
> $$\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}.$$

Esempi da saper scrivere al volo:

| $\vartheta$ | $\mathrm{Rot}_\vartheta$ | Che cosa fa |
|---|---|---|
| $\frac\pi2$ | $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $(x, y) \mapsto (-y, x)$: per esempio $(1, 2) \mapsto (-2, 1)$ |
| $\pi$ | $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ | $(x, y) \mapsto (-x, -y)$: il mezzo giro è $-I_2$ |
| $\frac\pi3$ | $\begin{pmatrix} \frac12 & -\frac{\sqrt3}2 \\ \frac{\sqrt3}2 & \frac12 \end{pmatrix}$ | $(2, 0) \mapsto (1, \sqrt3)$ |
| $\frac\pi4$ | $\frac{\sqrt2}2\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$ | $(1, 0) \mapsto \left(\frac{\sqrt2}2, \frac{\sqrt2}2\right)$ |

> [!PROP] 22.2
> La trasformazione $L_A$ è effettivamente una rotazione antioraria del piano di angolo $\vartheta$ intorno all'origine.

> [!DIM] della Proposizione 22.2 (dal libro di Martelli)
> Le dispense non la dimostrano; ecco l'argomento di Martelli (Proposizione 4.4.15). Scrivi un punto in **coordinate polari**: $x = \varrho\cos\varphi$, $y = \varrho\sin\varphi$, dove $\varrho$ è la distanza dall'origine e $\varphi$ l'angolo con l'asse $x$. Allora
> $$\begin{aligned} \mathrm{Rot}_\vartheta\begin{pmatrix} \varrho\cos\varphi \\ \varrho\sin\varphi \end{pmatrix} &= \begin{pmatrix} \varrho(\cos\vartheta\cos\varphi - \sin\vartheta\sin\varphi) \\ \varrho(\sin\vartheta\cos\varphi + \cos\vartheta\sin\varphi) \end{pmatrix} \\ &= \begin{pmatrix} \varrho\cos(\vartheta + \varphi) \\ \varrho\sin(\vartheta + \varphi) \end{pmatrix}, \end{aligned}$$
> per le formule di addizione del coseno e del seno. Il punto di coordinate polari $(\varrho, \varphi)$ va nel punto $(\varrho, \varphi + \vartheta)$: stessa distanza dall'origine, angolo aumentato di $\vartheta$. È la rotazione antioraria di angolo $\vartheta$.

Le dispense notano che la matrice $\mathrm{Rot}_\vartheta$ ha sempre determinante

$$\begin{aligned} \det\mathrm{Rot}_\vartheta &= \cos\vartheta\cos\vartheta - (-\sin\vartheta)\sin\vartheta \\ &= \cos^2\vartheta + \sin^2\vartheta = 1. \end{aligned}$$

Geometricamente (Martelli, §3.3.10) il valore assoluto del determinante è il fattore per cui si moltiplicano le aree, e il segno dice se l'orientazione si conserva: una rotazione conserva le aree e non «specchia» le figure.

> [!OLTRE] Comporre e invertire rotazioni
> - Ruotare di $\beta$ e poi di $\alpha$ è ruotare di $\alpha + \beta$: $\mathrm{Rot}_\alpha\,\mathrm{Rot}_\beta = \mathrm{Rot}_{\alpha + \beta}$ (moltiplicando le matrici compaiono di nuovo le formule di addizione). È la stessa regola della moltiplicazione dei numeri complessi di modulo 1 (lezione L03): gli angoli si sommano.
> - L'inversa di $\mathrm{Rot}_\vartheta$ è la rotazione all'indietro, $\mathrm{Rot}_{-\vartheta}$, e coincide con la **trasposta**: ${}^t\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ -\sin\vartheta & \cos\vartheta \end{pmatrix} = \mathrm{Rot}_{-\vartheta}$. Vedrai tra poco che è una proprietà di tutte le matrici ortogonali.

Prova con lo strumento: la matrice iniziale è $\begin{pmatrix} 0{,}6 & -0{,}8 \\ 0{,}8 & 0{,}6 \end{pmatrix} = \mathrm{Rot}_\vartheta$ con $\cos\vartheta = \frac35$ e $\sin\vartheta = \frac45$. Sposta il cursore «da I ad A»: la griglia gira senza deformarsi, il quadrato colorato conserva l'area ($\det A = 1$) e lo strumento segnala che non ci sono autovettori reali (lezione L17). Poi premi «rotazione di 90°», «rotazione di 45°» e «riflessione», oppure scrivi la matrice $\begin{pmatrix} 0{,}6 & 0{,}8 \\ 0{,}8 & -0{,}6 \end{pmatrix}$, la riflessione della prossima sezione: il quadrato cambia colore perché l'orientazione si inverte.

```widget matrice
titolo: Rotazioni e riflessioni come trasformazioni del piano
a: 0.6 -0.8; 0.8 0.6
x: 2 1
raggio: 3
```

## Riflessioni del piano (p. 111)

Tre riflessioni facili da immaginare, con le immagini di $e_1$ ed $e_2$ come colonne:

| Riflessione rispetto a | $e_1 \mapsto$ | $e_2 \mapsto$ | Matrice |
|---|---|---|---|
| l'asse $x$ | $(1, 0)$ | $(0, -1)$ | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ |
| la bisettrice $y = x$ | $(0, 1)$ | $(1, 0)$ | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ |
| l'asse $y$ | $(-1, 0)$ | $(0, 1)$ | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ |

In generale si fissa un angolo $\vartheta$ e si considera la retta vettoriale $r$ che forma un angolo $\frac\vartheta2$ con l'asse delle $x$. Perché proprio $\frac\vartheta2$? Riflettendo rispetto a $r$, il vettore $e_1$ (angolo 0) va nel vettore simmetrico rispetto a $r$, che ha angolo $2 \cdot \frac\vartheta2 = \vartheta$: la prima colonna è $(\cos\vartheta, \sin\vartheta)$, come nella rotazione. È comodo che l'angolo nella matrice sia $\vartheta$, e la retta allora ha angolo $\frac\vartheta2$.

> [!DEF] 22.3 · Riflessione
> Una **riflessione** (ortogonale) rispetto alla retta $r$ è la trasformazione $L_A : \R^2 \to \R^2$ determinata dalla matrice $A = \mathrm{Rif}_\vartheta$, con
> $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}.$$

Le tre riflessioni della tabella sono $\mathrm{Rif}_0$ (asse $x$, angolo $0$), $\mathrm{Rif}_{\pi/2}$ (bisettrice, angolo $\frac\pi4$) e $\mathrm{Rif}_\pi$ (asse $y$, angolo $\frac\pi2$).

> [!PROP] 22.4
> La trasformazione $L_A$ è effettivamente una riflessione del piano rispetto a $r$.

> [!DIM] della Proposizione 22.4 (dal libro di Martelli)
> Come per la rotazione (Martelli, Proposizione 4.4.17), in coordinate polari:
> $$\begin{aligned} \mathrm{Rif}_\vartheta\begin{pmatrix} \varrho\cos\varphi \\ \varrho\sin\varphi \end{pmatrix} &= \begin{pmatrix} \varrho(\cos\vartheta\cos\varphi + \sin\vartheta\sin\varphi) \\ \varrho(\sin\vartheta\cos\varphi - \cos\vartheta\sin\varphi) \end{pmatrix} \\ &= \begin{pmatrix} \varrho\cos(\vartheta - \varphi) \\ \varrho\sin(\vartheta - \varphi) \end{pmatrix}. \end{aligned}$$
> Il punto con angolo $\varphi$ va nel punto con angolo $\vartheta - \varphi$, alla stessa distanza dall'origine. I due angoli $\varphi$ e $\vartheta - \varphi$ hanno media $\frac\vartheta2$: sono simmetrici rispetto alla retta $r$. In particolare i punti di $r$ ($\varphi = \frac\vartheta2$) restano fermi.

Le dispense notano che la matrice $\mathrm{Rif}_\vartheta$ ha sempre determinante

$$\det\mathrm{Rif}_\vartheta = -\cos^2\vartheta - \sin^2\vartheta = -1.$$

Il segno meno dice che la riflessione **inverte l'orientazione**: un giro in senso antiorario diventa orario, come la mano destra allo specchio.

> [!OSSERVAZIONE] La riflessione in una base comoda
> Sia $s$ la retta ortogonale a $r$, cioè quella che forma un angolo $\frac\vartheta2 + \frac\pi2$ con l'asse $x$, e siano $v_1$ e $v_2$ vettori in direzione delle rette $r$ e $s$, rispettivamente. La riflessione $f$ si rappresenta più agevolmente rispetto alla base $\mathcal B = \{v_1, v_2\}$: poiché $f(v_1) = v_1$ e $f(v_2) = -v_2$, la matrice associata alla riflessione rispetto a $\mathcal B$ è semplicemente
> $$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.$$

In altre parole $v_1$ è un autovettore di autovalore $1$ e $v_2$ un autovettore di autovalore $-1$ (lezione L17): la riflessione è **diagonalizzabile**, e le due rette di autovettori sono perpendicolari.

> [!ESEMPIO] La riflessione rispetto alla retta di $(2, 1)$, in tre modi
> **1. Con l'angolo.** La retta $r = \Span((2, 1))$ forma con l'asse $x$ un angolo $\frac\vartheta2$ con $\tan\frac\vartheta2 = \frac12$. Con le formule di duplicazione, posto $t = \tan\frac\vartheta2 = \frac12$:
> $$\begin{aligned} \cos\vartheta &= \frac{1 - t^2}{1 + t^2} = \frac{3/4}{5/4} = \frac35, \\ \sin\vartheta &= \frac{2t}{1 + t^2} = \frac{1}{5/4} = \frac45, \end{aligned}$$
> $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \frac35 & \frac45 \\ \frac45 & -\frac35 \end{pmatrix}.$$
> Controllo: $\mathrm{Rif}_\vartheta\,(2, 1) = \left(\frac65 + \frac45, \frac85 - \frac35\right) = (2, 1)$ resta ferma, e $(-1, 2)$, perpendicolare a $r$, va in $\left(-\frac35 + \frac85, -\frac45 - \frac65\right) = (1, -2)$, il suo opposto. ✓
>
> **2. Con la proiezione** (lezione L21). Con $n = (-1, 2)$ perpendicolare a $r$, riflettere vuol dire togliere **due volte** la componente lungo $n$: $f(v) = v - 2\,\frac{\langle v, n\rangle}{\langle n, n\rangle}\,n$. Allora $f(e_1) = (1, 0) - 2 \cdot \frac{-1}{5}(-1, 2) = \left(\frac35, \frac45\right)$ e $f(e_2) = (0, 1) - 2 \cdot \frac25(-1, 2) = \left(\frac45, -\frac35\right)$: sono le colonne trovate sopra.
>
> **3. Con il cambiamento di base** (lezione L16). Nella base $\mathcal B = \{(2, 1), (-1, 2)\}$ la matrice è $D = \operatorname{diag}(1, -1)$. Con $M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}$ e $M^{-1} = \frac15\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$:
> $$M\,D\,M^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}\cdot\frac15\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix} = \frac15\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}.$$

```grafico
titolo: La riflessione rispetto a $r = \Span((2, 1))$ manda $v = (1, 2)$ in $\left(\frac{11}5, -\frac25\right)$
x: -1.5 3
y: -1 2.5
retta: 0 0 2 1 | viola | $r$ | ne
vettore: 1 2 | accento | spesso | $v$ | n
vettore: 11/5 -2/5 | blu | spesso | $f(v)$ | se
segmento: 1 2 11/5 -2/5 | grigio | tratteggio
punto: 8/5 4/5 | ambra
```

Il punto giallo è il punto medio tra $v$ e $f(v)$: sta sulla retta $r$, e il segmento tratteggiato è perpendicolare a $r$. È la definizione di simmetria rispetto a una retta.

> [!TRAPPOLA] L'angolo della retta è la metà
> $\mathrm{Rif}_\vartheta$ riflette rispetto alla retta di angolo $\frac\vartheta2$, **non** $\vartheta$. Per esempio $\mathrm{Rif}_{\pi/2} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ riflette rispetto alla bisettrice $y = x$ (angolo $\frac\pi4$), non rispetto all'asse $y$. Per non sbagliare, trova la retta come **autospazio dell'autovalore 1**: i vettori con $Av = v$.

## Isometrie tra spazi con prodotto scalare (p. 112)

Rotazioni e riflessioni conservano lunghezze e angoli. Serve una definizione che funzioni per ogni spazio con un prodotto scalare, come i polinomi.

> [!DEF] 22.5 · Isometria
> Siano $V$ e $W$ due spazi vettoriali dotati ciascuno di un prodotto scalare. Un'**isometria** è un isomorfismo $T : V \to W$ tale che
> $$\langle v, w\rangle = \langle T(v), T(w)\rangle \qquad \forall\, v, w \in V.$$

Pezzo per pezzo:

- $T$ è un **isomorfismo**: lineare e biunivoca (lezione L16);
- a sinistra c'è il prodotto scalare di $V$, a destra quello di $W$: possono essere diversi;
- conservare il prodotto scalare vuol dire conservare **tutto** ciò che se ne ricava: norme, distanze, angoli, ortogonalità.

> [!ESEMPIO] Una rotazione conserva il prodotto scalare
> Con $x = (1, 2)$, $y = (3, -1)$ e $\mathrm{Rot}_{\pi/2}$: $\mathrm{Rot}_{\pi/2}\,x = (-2, 1)$ e $\mathrm{Rot}_{\pi/2}\,y = (1, 3)$. Prima: $\langle x, y\rangle = 3 - 2 = 1$. Dopo: $\langle (-2, 1), (1, 3)\rangle = -2 + 3 = 1$. ✓
>
> Due trasformazioni invertibili che **non** sono isometrie: la dilatazione $\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$ manda $e_1$ in $(2, 0)$, che ha norma 2; il taglio $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ manda $e_2$ in $(1, 1)$, che ha norma $\sqrt2$.

In realtà basta controllare la condizione sui vettori di una base fissata $\mathcal B = \{v_1, \dots, v_n\}$ di $V$.

> [!PROP] 22.6
> Un isomorfismo $T$ è un'isometria se e solo se
> $$\langle v_i, v_j\rangle = \langle T(v_i), T(v_j)\rangle \qquad \forall\, i, j.$$

La spiegazione delle dispense, con i passaggi. La condizione è necessaria, perché è la definizione applicata ai vettori della base. Viceversa, scrivi due vettori qualsiasi come combinazioni $v = \sum_i \lambda_iv_i$ e $w = \sum_j \mu_jv_j$. Per la bilinearità (Proposizione 19.15) e la linearità di $T$:

$$\begin{aligned} \langle v, w\rangle &= \sum_{i,j} \lambda_i\mu_j\,\langle v_i, v_j\rangle, \\ \langle T(v), T(w)\rangle &= \Big\langle \sum_i \lambda_iT(v_i), \sum_j \mu_jT(v_j)\Big\rangle \\ &= \sum_{i,j} \lambda_i\mu_j\,\langle T(v_i), T(v_j)\rangle. \end{aligned}$$

Se i prodotti tra i vettori della base sono uguali, anche le due somme sono uguali.

Con un prodotto definito positivo ci sono altri due modi equivalenti di dire «isometria».

> [!PROP] 22.7
> Sia $T : V \to W$ un isomorfismo fra spazi dotati di un prodotto scalare definito positivo. I fatti seguenti sono equivalenti:
> 1. $T$ è un'isometria,
> 2. $T$ preserva la norma, cioè $\|T(v)\| = \|v\|$ $\forall\, v \in V$,
> 3. $T$ preserva la distanza, cioè $d(v, w) = d(T(v), T(w))$ $\forall\, v, w \in V$.

> [!DIM] della Proposizione 22.7 (dal libro di Martelli)
> Le dispense non la dimostrano; ecco gli argomenti di Martelli (Proposizione 8.2.1).
> - **(1) ⇒ (2).** $\|T(v)\|^2 = \langle T(v), T(v)\rangle = \langle v, v\rangle = \|v\|^2$.
> - **(2) ⇒ (3).** Per la linearità, $d(T(v), T(w)) = \|T(v) - T(w)\| = \|T(v - w)\| = \|v - w\| = d(v, w)$.
> - **(3) ⇒ (2).** Siccome $T(0) = 0$: $\|v\| = d(0, v) = d(T(0), T(v)) = d(0, T(v)) = \|T(v)\|$.
> - **(2) ⇒ (1).** Si ricostruisce il prodotto scalare dalle norme (polarizzazione, lezione L20):
>   $$\begin{aligned} \langle v, w\rangle &= \frac{\|v + w\|^2 - \|v\|^2 - \|w\|^2}{2} \\ &= \frac{\|T(v) + T(w)\|^2 - \|T(v)\|^2 - \|T(w)\|^2}{2} = \langle T(v), T(w)\rangle, \end{aligned}$$
>   dove nel secondo passaggio si usa $\|v + w\| = \|T(v + w)\| = \|T(v) + T(w)\|$.

**Il linguaggio delle matrici.** Siano $V$ e $V'$ spazi muniti di prodotti scalari $g$ e $g'$ e di basi $\mathcal B$ e $\mathcal B'$, e sia $T : V \to V'$ un isomorfismo. Siano

$$S = [g]_{\mathcal B}, \qquad S' = [g']_{\mathcal B'}, \qquad A = [T]^{\mathcal B}_{\mathcal B'}$$

le matrici associate a tutti gli attori in scena: i due prodotti scalari (lezione L19) e l'applicazione (lezione L15).

> [!PROP] 22.8
> L'isomorfismo $T$ è un'isometria se e solo se
> $$S = {}^tA\,S'\,A.$$

La spiegazione: per la Proposizione 22.6 basta controllare i vettori della base. La colonna $A^i$ contiene le coordinate di $T(v_i)$ nella base $\mathcal B'$, cioè $A^i = [T(v_i)]_{\mathcal B'}$. Per il Corollario 19.16 nella base $\mathcal B'$:

$$({}^tA\,S'\,A)_{ij} = {}^t(A^i)\,S'\,A^j = g'(T(v_i), T(v_j)),$$

mentre $S_{ij} = g(v_i, v_j)$. Le due matrici sono uguali esattamente quando $g(v_i, v_j) = g'(T(v_i), T(v_j))$ per ogni $i, j$.

## Matrici ortogonali (p. 113)

Il caso che ci sta più a cuore è $\R^n$ con il suo prodotto scalare euclideo, e un endomorfismo $L_A : \R^n \to \R^n$ con $A \in M(n)$. Nella Proposizione 22.8 prendi come basi quella canonica: allora $S = S' = I_n$ e $A$ è la matrice di $L_A$, quindi la condizione diventa $I_n = {}^tA\,I_n\,A$.

> [!COROLLARIO] 22.9
> L'endomorfismo $L_A$ è un'isometria $\iff {}^tA\,A = I_n$.

> [!DEF] 22.10 · Matrice ortogonale
> Una matrice $A \in M(n)$ a coefficienti reali tale che ${}^tA\,A = I_n$ è detta **ortogonale**.

Che cosa vuol dire ${}^tA\,A = I_n$ in pratica? L'entrata $(i, j)$ di ${}^tA\,A$ è la riga $i$ di ${}^tA$ per la colonna $j$ di $A$, cioè il prodotto scalare tra le colonne $A^i$ e $A^j$. Quindi:

$${}^tA\,A = I_n \iff \langle A^i, A^j\rangle = \begin{cases} 1 & \text{se } i = j, \\ 0 & \text{se } i \neq j, \end{cases}$$

cioè ${}^tA\,A = I_n$ esattamente quando **le colonne di $A$ formano una base ortonormale di $\R^n$**.

> [!OLTRE] Le proprietà delle matrici ortogonali
> Da ${}^tA\,A = I_n$ seguono (Martelli, §8.2.2):
> - **l'inversa è la trasposta**: $A^{-1} = {}^tA$, quindi anche $A\,{}^tA = I_n$ (le **righe** sono anch'esse ortonormali);
> - $\det A = \pm1$: per il Teorema di Binet $1 = \det I_n = \det({}^tA)\det A = (\det A)^2$;
> - gli eventuali **autovalori reali** sono $\pm1$: se $Av = \lambda v$ con $v \neq 0$, allora $\|v\| = \|Av\| = |\lambda|\,\|v\|$, quindi $|\lambda| = 1$;
> - il prodotto di due matrici ortogonali è ortogonale: ${}^t(AB)(AB) = {}^tB\,({}^tA\,A)\,B = {}^tB\,B = I_n$.

> [!ESEMPIO] Ortogonale o no?
> 1. $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$: colonne $\frac15(3, 4)$ e $\frac15(-4, 3)$, entrambe di norma $\frac{\sqrt{9 + 16}}{5} = 1$, e prodotto $\frac{-12 + 12}{25} = 0$. **Ortogonale** (è $\mathrm{Rot}_\vartheta$ con $\cos\vartheta = \frac35$).
> 2. $\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$: colonne ortogonali ($1 - 1 = 0$) ma di norma $\sqrt2$. **Non ortogonale**: è $\sqrt2\,\mathrm{Rot}_{-\pi/4}$, una rotazione seguita da un ingrandimento.
> 3. $\frac13\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{pmatrix}$: ogni colonna ha norma $\frac{\sqrt{1 + 4 + 4}}{3} = 1$ e i prodotti tra colonne sono $\frac{2 + 2 - 4}{9} = 0$, $\frac{2 - 4 + 2}{9} = 0$, $\frac{4 - 2 - 2}{9} = 0$. **Ortogonale**, con determinante $-1$.

> [!TRAPPOLA] Due condizioni che non bastano
> - Colonne **ortogonali** non bastano: servono colonne **ortonormali** (esempio 2 qui sopra). Il nome «matrice ortogonale» inganna.
> - $\det A = \pm1$ non basta: $\begin{pmatrix} 0 & 2 \\ \frac12 & 0 \end{pmatrix}$ ha determinante $-1$ ma le colonne hanno norme $\frac12$ e $2$. Il determinante $\pm1$ è una conseguenza dell'ortogonalità, non una caratterizzazione.

## Tutte le isometrie del piano (p. 113)

Vogliamo classificare completamente le isometrie del piano $\R^2$ con il prodotto scalare euclideo. Per il Corollario 22.9 basta classificare le matrici ortogonali $2 \times 2$, e bastano poche righe per descriverle tutte.

> [!PROP] 22.11
> Le matrici ortogonali in $M(2)$ sono le seguenti:
> $$\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix},$$
> $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}$$
> al variare di $\vartheta \in [0, 2\pi)$.

La dimostrazione delle dispense, con i passaggi:

1. Le colonne $A^1$ e $A^2$ di una matrice ortogonale $A$ formano una base ortonormale di $\R^2$.
2. $A^1$ è un vettore unitario: sta sulla circonferenza di raggio 1, quindi si scrive $A^1 = (\cos\vartheta, \sin\vartheta)$ per un unico $\vartheta \in [0, 2\pi)$.
3. $A^2$ deve essere ortogonale ad $A^1$: per l'Esempio 21.1 sta sulla retta $\Span((-\sin\vartheta, \cos\vartheta))$. Deve anche essere unitario, e su quella retta ci sono solo due vettori di norma 1, che differiscono per il segno: $A^2 = \pm(-\sin\vartheta, \cos\vartheta)$.
4. Con il segno $+$ si ottiene $\mathrm{Rot}_\vartheta$, con il segno $-$ si ottiene $\mathrm{Rif}_\vartheta$. Viceversa, entrambe le matrici sono ortogonali (lo si verifica come nell'esempio precedente). $\square$

> [!COROLLARIO] 22.12
> Le isometrie di $\R^2$ sono rotazioni e riflessioni.

Il determinante le distingue: **$\det A = 1$ rotazione, $\det A = -1$ riflessione**.

> [!METODO] Riconoscere un'isometria del piano
> 1. Controlla che $A$ sia ortogonale: colonne di norma 1 e ortogonali tra loro.
> 2. Calcola $\det A$.
> 3. Se $\det A = 1$ è la rotazione $\mathrm{Rot}_\vartheta$: leggi $\cos\vartheta = a_{11}$ e $\sin\vartheta = a_{21}$ dalla prima colonna, e trova $\vartheta \in [0, 2\pi)$.
> 4. Se $\det A = -1$ è una riflessione: l'asse è l'autospazio dell'autovalore 1, cioè le soluzioni di $(A - I)v = 0$ (oppure la retta di angolo $\frac\vartheta2$, con $\vartheta$ letto dalla prima colonna).

> [!ESEMPIO] Due matrici da riconoscere
> - $A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$: colonne $(0, -1)$ e $(1, 0)$, ortonormali; $\det A = 0 - (1)(-1) = 1$. È una rotazione con $\cos\vartheta = 0$ e $\sin\vartheta = -1$, cioè $\vartheta = \frac{3\pi}2$: un quarto di giro in senso **orario**. Controllo: $A e_1 = (0, -1)$.
> - $B = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$: $\det B = -1$, riflessione. La prima colonna $(-1, 0)$ dà $\vartheta = \pi$, quindi l'asse ha angolo $\frac\pi2$: è l'asse $y$. Controllo: $B(0, 1) = (0, 1)$.

> [!ESAME] L'insieme delle matrici ortogonali non è un sottospazio
> L'insieme $O(2)$ delle matrici ortogonali $2 \times 2$ non è un sottospazio di $M(2, \R)$: non contiene la matrice nulla, e la somma di due matrici ortogonali in generale non è ortogonale. Per la Proposizione 22.11 è fatto di due «circonferenze» di matrici, $\mathrm{Rot}_\vartheta$ e $\mathrm{Rif}_\vartheta$, parametrizzate dall'angolo $\vartheta$. Un appello ci ha costruito sopra una domanda: la trovi risolta in «Verso l'esame».

## Isometrie dello spazio (p. 113)

Con un po' più di lavoro, ma in modo simile, si classificano le isometrie di $\R^3$. Prima i due tipi di trasformazione che compaiono.

- La **rotazione** di angolo $\vartheta$ intorno a un asse $r$ (una retta per l'origine) fa girare lo spazio intorno a $r$: i punti di $r$ restano fermi, il piano $r^\perp$ gira come nel piano. Intorno all'asse $z$ la matrice è
  $$\begin{pmatrix} \cos\vartheta & -\sin\vartheta & 0 \\ \sin\vartheta & \cos\vartheta & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad \det = 1.$$
- Un'**antirotazione** fa la stessa rotazione e poi riflette rispetto al piano $U = r^\perp$ perpendicolare all'asse. Intorno all'asse $z$ il piano $U$ è $\{z = 0\}$, che riflettendo cambia segno alla coordinata $z$:
  $$\begin{pmatrix} \cos\vartheta & -\sin\vartheta & 0 \\ \sin\vartheta & \cos\vartheta & 0 \\ 0 & 0 & -1 \end{pmatrix}, \qquad \det = -1.$$

> [!TEOREMA] 22.13
> Ogni isometria di $\R^3$ è una rotazione o un'antirotazione. Qui, un'antirotazione $T : \R^3 \to \R^3$ è la composizione di una rotazione intorno ad un asse $r$ e di una riflessione rispetto al piano $U = r^\perp$.

Pezzo per pezzo:

- anche qui il determinante distingue i due casi: **rotazione se $\det = 1$, antirotazione se $\det = -1$**;
- casi particolari (Martelli, §8.2.5–8.2.6): la rotazione di angolo $0$ è l'identità, quella di angolo $\pi$ è la riflessione rispetto alla retta $r$; l'antirotazione di angolo $0$ è la riflessione rispetto al piano $U$, quella di angolo $\pi$ è $-I_3$, la riflessione rispetto all'origine.

> [!OLTRE] Riconoscere asse e angolo
> Martelli (p. 261) dà una ricetta per una matrice ortogonale $A$ di ordine 3, con $\det A = \pm1$:
> $$\operatorname{tr}A = \det A + 2\cos\vartheta, \quad \text{cioè} \quad \cos\vartheta = \frac{\operatorname{tr}A - \det A}{2}.$$
> L'asse è l'autospazio dell'autovalore $1$ per una rotazione, di $-1$ per un'antirotazione (se $\vartheta \neq 0, \pi$). Esempio: $A = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ manda $e_1 \to e_2 \to e_3 \to e_1$. È ortogonale (le colonne sono i vettori della base canonica in un altro ordine), $\det A = 1$, $\operatorname{tr}A = 0$, quindi è una rotazione con $\cos\vartheta = -\frac12$, cioè $\vartheta = \frac{2\pi}3$. L'asse è $\Ker(A - I) = \Span((1, 1, 1))$: infatti $A(1, 1, 1) = (1, 1, 1)$. Tre applicazioni della rotazione riportano ogni vettore al posto di partenza, come deve essere per $3 \cdot \frac{2\pi}{3} = 2\pi$.
>
> **Perché il teorema è vero** (idea della dimostrazione di Martelli, Teorema 8.2.13): il polinomio caratteristico di $A$ ha grado 3, quindi ha almeno una radice reale; per quanto visto sopra è $\pm1$, con un autovettore $v$ di norma 1. Il piano $v^\perp$ viene mandato in sé, e lì $A$ agisce come un'isometria del piano: una rotazione o una riflessione. Mettendo insieme i casi si ottengono rotazioni e antirotazioni.

## Il prodotto vettoriale (pp. 114–115)

Nello spazio capita di continuo di cercare un vettore **perpendicolare a due vettori dati**: la direzione normale a un piano, la direzione della retta intersezione di due piani. Si può risolvere un sistema (lezione L21: $W^\perp$), ma c'è una formula diretta.

> [!DEF] 22.14 · Prodotto vettoriale
> Consideriamo due vettori $v, w \in \R^3$:
> $$v = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}, \qquad w = \begin{pmatrix} w_1 \\ w_2 \\ w_3 \end{pmatrix}.$$
> Il **prodotto vettoriale** fra $v$ e $w$ è il vettore
> $$v \times w = \begin{pmatrix} v_2w_3 - v_3w_2 \\ v_3w_1 - v_1w_3 \\ v_1w_2 - v_2w_1 \end{pmatrix}.$$

Pezzo per pezzo:

- a differenza del prodotto scalare, il risultato è un **vettore** di $\R^3$, e il prodotto è definito **solo in $\R^3$**;
- ogni coordinata è un «determinante $2 \times 2$» fatto con le **altre due** coordinate: la prima usa le coordinate 2 e 3, la seconda le coordinate 3 e 1, la terza le coordinate 1 e 2 (l'ordine ciclico $1 \to 2 \to 3 \to 1$ aiuta a ricordare i segni).

**Con i minori.** Le dispense notano che

$$v \times w = \begin{pmatrix} d_1 \\ -d_2 \\ d_3 \end{pmatrix},$$

dove $d_i$ è il determinante del minore $2 \times 2$ ottenuto cancellando la $i$-esima riga dalla matrice

$$A = \begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}.$$

Attenzione al **segno meno** davanti a $d_2$: $d_2 = v_1w_3 - v_3w_1$, e la seconda coordinata è $-d_2 = v_3w_1 - v_1w_3$.

**La regola mnemonica.** Si ottiene il prodotto vettoriale calcolando formalmente il determinante di questa «matrice», sviluppato lungo la terza colonna (sviluppo di Laplace, Teorema 9.6):

$$\begin{aligned} v \times w &= \det\begin{pmatrix} v_1 & w_1 & e_1 \\ v_2 & w_2 & e_2 \\ v_3 & w_3 & e_3 \end{pmatrix} \\ &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}e_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix}e_2 + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix}e_3. \end{aligned}$$

È solo una regola mnemonica: quella matrice non è una vera matrice, perché $e_1, e_2, e_3$ non sono numeri ma i vettori della base canonica.

> [!ESEMPIO] Calcolare $(1, 2, 3) \times (4, 5, 6)$
> Con $v = (1, 2, 3)$ e $w = (4, 5, 6)$, coordinata per coordinata:
> - prima: $v_2w_3 - v_3w_2 = 2 \cdot 6 - 3 \cdot 5 = 12 - 15 = -3$;
> - seconda: $v_3w_1 - v_1w_3 = 3 \cdot 4 - 1 \cdot 6 = 12 - 6 = 6$;
> - terza: $v_1w_2 - v_2w_1 = 1 \cdot 5 - 2 \cdot 4 = 5 - 8 = -3$.
>
> Quindi $v \times w = (-3, 6, -3)$. Con i minori di $A = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}$: $d_1 = 2 \cdot 6 - 5 \cdot 3 = -3$, $d_2 = 1 \cdot 6 - 4 \cdot 3 = -6$, $d_3 = 1 \cdot 5 - 4 \cdot 2 = -3$, e $(d_1, -d_2, d_3) = (-3, 6, -3)$. ✓
>
> Controllo di ortogonalità: $\langle (-3, 6, -3), (1, 2, 3)\rangle = -3 + 12 - 9 = 0$ e $\langle (-3, 6, -3), (4, 5, 6)\rangle = -12 + 30 - 18 = 0$. ✓

> [!ESEMPIO] La base canonica
> $e_1 \times e_2 = e_3$, $e_2 \times e_3 = e_1$, $e_3 \times e_1 = e_2$ (Martelli, Esempio 9.1.1). Per esempio $e_1 \times e_2 = (0 \cdot 0 - 0 \cdot 1,\ 0 \cdot 0 - 1 \cdot 0,\ 1 \cdot 1 - 0 \cdot 0) = (0, 0, 1)$. Scambiando l'ordine il segno cambia: $e_2 \times e_1 = -e_3$.

> [!PROP] 22.15
> Il vettore $v \times w$ è ortogonale sia a $v$ che a $w$.

La dimostrazione delle dispense è elegante: il prodotto scalare con $v$ si ottiene sostituendo $e_1, e_2, e_3$ con $v_1, v_2, v_3$ nella regola mnemonica.

$$\begin{aligned} \langle v \times w, v\rangle &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}v_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix}v_2 \\ &\quad + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix}v_3 \\ &= \det\begin{pmatrix} v_1 & w_1 & v_1 \\ v_2 & w_2 & v_2 \\ v_3 & w_3 & v_3 \end{pmatrix} = 0. \end{aligned}$$

- La seconda uguaglianza è lo **sviluppo di Laplace sull'ultima colonna** (i segni $+, -, +$ sono quelli delle caselle $(1, 3)$, $(2, 3)$, $(3, 3)$).
- Il determinante è nullo perché la matrice ha **due colonne uguali** (la prima e la terza).
- Allo stesso modo, con $w$ al posto di $v$ nella terza colonna, si trova $\langle v \times w, w\rangle = 0$. $\square$

> [!PROP] 22.16
> Il vettore $v \times w$ è nullo $\iff$ $v$ e $w$ sono dipendenti.

La dimostrazione delle dispense è una catena di equivalenze, con la notazione dei minori:

$$\begin{aligned} v \times w = 0 &\iff d_1 = d_2 = d_3 = 0 \\ &\iff \rk A \le 1 \\ &\iff v \text{ e } w \text{ sono dipendenti}. \end{aligned}$$

- La prima equivalenza è la definizione con i minori.
- La terza: $\rk A$ è la dimensione dello spazio generato dalle colonne $v$ e $w$ (lezione L08), e vale $\le 1$ esattamente quando $v$ e $w$ sono dipendenti.
- La seconda, il passaggio non scritto: se $\rk A \le 1$, le due colonne sono proporzionali (o una è nulla), e in ogni minore $2 \times 2$ lo sono ancora, quindi ogni $d_i = 0$. Se invece $\rk A = 2$, anche il rango per righe è 2 (Proposizione 8.6): ci sono due righe indipendenti, e il minore formato da quelle due righe ha righe indipendenti, quindi determinante non nullo. $\square$

Esempio: $(1, 2, 3) \times (2, 4, 6) = (12 - 12,\ 6 - 6,\ 4 - 4) = (0, 0, 0)$, perché $(2, 4, 6) = 2(1, 2, 3)$.

> [!COROLLARIO] 22.17
> Se $v$ e $w$ sono indipendenti, la terna $v, w, v \times w$ è una base di $\R^3$.

Le dispense non riportano la dimostrazione; ecco un modo con quello che sai. Tre vettori in $\R^3$ sono una base se sono indipendenti. Supponi $a\,v + b\,w + c\,(v \times w) = 0$ e fai il prodotto scalare con $v \times w$: per la Proposizione 22.15 i primi due termini danno zero, e resta $c\,\|v \times w\|^2 = 0$. Per la Proposizione 22.16 $v \times w \neq 0$, quindi $c = 0$; allora $a\,v + b\,w = 0$ e, essendo $v, w$ indipendenti, $a = b = 0$. $\square$

> [!OLTRE] Altre proprietà utili (le vedrai nella lezione L23)
> - **Anticommutativo**: $w \times v = -(v \times w)$ (nella definizione si scambiano i ruoli, e ogni coordinata cambia segno); in particolare $v \times v = 0$.
> - **Bilineare**: $(v + v') \times w = v \times w + v' \times w$ e $(\lambda v) \times w = \lambda(v \times w)$, e lo stesso nel secondo posto.
> - **Non associativo**: $(e_1 \times e_2) \times e_2 = e_3 \times e_2 = -e_1$, mentre $e_1 \times (e_2 \times e_2) = e_1 \times 0 = 0$.
> - **Lunghezza e verso**: $\|v \times w\|$ è l'area del parallelogramma di lati $v$ e $w$, e il verso segue la regola della mano destra (pollice $v$, indice $w$, medio $v \times w$).
> - **Equazione di un piano**: se $W = \Span(v, w)$ con $v, w$ indipendenti, allora $W = \{x \in \R^3 \mid \langle v \times w, x\rangle = 0\}$: le coordinate di $v \times w$ sono i coefficienti dell'equazione cartesiana (Martelli, Esempio 9.1.10). Per esempio $(1, 0, 2) \times (0, 1, 1) = (-2, -1, 1)$, quindi $\Span((1, 0, 2), (0, 1, 1)) = \{-2x - y + z = 0\}$.

Prova con lo strumento: trascina il disegno per girarlo e guarda $u \times v$ (in giallo) perpendicolare al parallelogramma di lati $u$ e $v$. Scambia $u$ e $v$: il prodotto cambia verso. Scrivi $v = 4\ 0\ 0$, parallelo a $u$: il prodotto diventa nullo (Proposizione 22.16).

```widget spazio
titolo: Il prodotto vettoriale nello spazio
modo: vettoriale
u: 2 0 0
v: 1 2 0
```

> [!OLTRE] Dove trovarlo nel libro
> Martelli: §4.4.8 «Rotazioni nel piano» e §4.4.9 «Riflessioni ortogonali nel piano» (pp. 143–144), §4.4.11 sulle rotazioni intorno all'asse $z$ (p. 145); §7.5 «Isometrie» (pp. 227–229), con il Lemma 7.5.5 e la Proposizione 7.5.8; §8.2 «Isometrie» (pp. 253–261): definizioni equivalenti, matrici ortogonali, riflessioni, isometrie del piano, rotazioni e antirotazioni, isometrie dello spazio; §9.1 «Prodotto vettoriale» (pp. 267–272).

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; dura 2 ore, senza calcolatrice, con solo 4 facciate di appunti scritti a mano. Appelli 2026/27: 22/01 e 05/02/2027, alle 14:00. I dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026**

1. **Matrici ortogonali (quiz).** L'appello del 10/07/2024 (domanda 2) chiedeva la dimensione di $O(2)$: la risposta è che non è un sottospazio (vedi il riquadro nella sezione sulle isometrie del piano). Le matrici ortogonali tornano con il teorema spettrale (lezioni L25–L26), dove una matrice simmetrica si diagonalizza con una matrice ortogonale.
2. **Prodotto vettoriale come strumento (problemi).** Nei problemi sulle rette e i piani di $\R^3$ il prodotto vettoriale dà in un colpo la direzione della retta intersezione di due piani: appelli del 24/01/2024, del 10/07/2024, del 06/09/2024 e del 15/01/2026 (problema 12). Nelle domande sulla distanza tra due rette (08/02/2024, 06/09/2024, 05/02/2026, 03/06/2026, 07/09/2026) serve un vettore perpendicolare alle direzioni delle due rette: di nuovo un prodotto vettoriale. Le formule su rette e piani sono nelle lezioni L23–L24.
3. Negli appelli 2023–2026 non ci sono domande sulle isometrie di $\R^3$ (rotazioni e antirotazioni).

**Due domande vere, risolte**

> [!ESEMPIO] Appello del 10/07/2024, domanda 2
> Sia $V = M(2, \R)$ e $O(2)$ il sottoinsieme delle matrici ortogonali. La dimensione di $O(2)$ è: (a) non ha una dimensione perché non è un sottospazio vettoriale; (b) due; (c) quattro; (d) tre; (e) uno.
>
> **Soluzione.** La dimensione si definisce solo per gli spazi vettoriali. $O(2)$ non è un sottospazio: non contiene la matrice nulla, perché ${}^t0\,0 = 0 \ne I_2$. Quindi la risposta è (a). (Un secondo motivo: $I_2 \in O(2)$ ma $I_2 + I_2 = 2I_2 \notin O(2)$.)

> [!ESEMPIO] Appello del 24/01/2024, problema 12, punto (1)
> Siano $\pi_1 = \{2x + y - z = 1\}$ e $\pi_2 = \{x + 2y + z = 2\}$. Calcolare la retta $r = \pi_1 \cap \pi_2$ nella forma $r = P + \Span(v)$.
>
> **Soluzione con il prodotto vettoriale.** La direzione $v$ della retta sta in entrambi i piani «vettoriali» $\{2x + y - z = 0\}$ e $\{x + 2y + z = 0\}$, quindi è ortogonale ai due vettori normali $n_1 = (2, 1, -1)$ e $n_2 = (1, 2, 1)$:
> $$\begin{aligned} n_1 \times n_2 &= \big(1 \cdot 1 - (-1) \cdot 2,\ (-1) \cdot 1 - 2 \cdot 1,\ 2 \cdot 2 - 1 \cdot 1\big) \\ &= (3, -3, 3), \end{aligned}$$
> e posso prendere $v = (1, -1, 1)$. Un punto $P$: pongo $z = 0$ e risolvo $2x + y = 1$, $x + 2y = 2$; dalla prima $y = 1 - 2x$, e sostituendo $x + 2 - 4x = 2$, quindi $x = 0$ e $y = 1$. Allora $P = (0, 1, 0)$ e
> $$r = (0, 1, 0) + \Span((1, -1, 1)).$$
> Controlli: $P$ sta nei due piani ($0 + 1 - 0 = 1$ e $0 + 2 + 0 = 2$), e $v$ soddisfa le due equazioni omogenee ($2 - 1 - 1 = 0$ e $1 - 2 + 1 = 0$). ✓

**Errori da evitare**

- Leggere l'asse di $\mathrm{Rif}_\vartheta$ all'angolo $\vartheta$ invece che $\frac\vartheta2$.
- Credere che bastino colonne ortogonali, o $\det A = \pm1$, perché una matrice sia ortogonale.
- Sbagliare il segno della seconda coordinata del prodotto vettoriale: è $v_3w_1 - v_1w_3$, cioè $-d_2$.
- Dimenticare che $w \times v = -(v \times w)$: l'ordine conta per il verso, non per la direzione.
- Non controllare il risultato: $v \times w$ deve dare prodotto scalare zero con $v$ e con $w$.

> [!ESAME] Sul foglio da 4 facciate
> - $\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$ ($\det 1$); $\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}$ ($\det -1$, asse all'angolo $\frac\vartheta2$).
> - $L_A$ isometria $\iff {}^tAA = I \iff$ colonne ortonormali; allora $A^{-1} = {}^tA$, $\det A = \pm1$.
> - Isometrie: nel piano rotazioni ($\det 1$) e riflessioni ($\det -1$); nello spazio rotazioni e antirotazioni, $\cos\vartheta = \frac{\operatorname{tr}A - \det A}2$.
> - $v \times w = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$; ortogonale a $v$ e $w$; nullo $\iff$ dipendenti.

## Quiz

```quiz
D: Quale di queste matrici è ortogonale?
+ $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & \frac12 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 \\ \frac12 & 0 \end{pmatrix}$
= Solo la prima ha colonne di norma 1 e ortogonali: $\frac{3^2 + 4^2}{25} = 1$ e $\frac{-12 + 12}{25} = 0$. La seconda ha colonne ortogonali ma di norma $\sqrt2$; la terza e l'ultima hanno determinante $\pm1$ ma colonne di norma $2$ e $\frac12$; la quarta (un taglio) ha la seconda colonna di norma $\sqrt2$. Collegata all'appello del 10/07/2024, domanda 2, sulle matrici ortogonali.

D: Qual è l'immagine di $v = (3, 1)$ tramite la rotazione antioraria di angolo $\frac\pi2$?
+ $(-1, 3)$
- $(1, -3)$
- $(-3, 1)$
- $(1, 3)$
- $(-3, -1)$
= $\mathrm{Rot}_{\pi/2} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ manda $(x, y)$ in $(-y, x)$, quindi $(3, 1) \mapsto (-1, 3)$. Controllo: $\langle (3, 1), (-1, 3)\rangle = 0$ e le norme sono uguali. $(1, -3)$ è la rotazione **oraria**.

D: La matrice $\mathrm{Rif}_{\pi/2} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ rappresenta la riflessione rispetto a:
+ la retta $y = x$
- l'asse $y$
- l'asse $x$
- la retta $y = -x$
- l'origine
= L'asse di $\mathrm{Rif}_\vartheta$ forma un angolo $\frac\vartheta2 = \frac\pi4$ con l'asse $x$: è la bisettrice $y = x$. Controllo: $(1, 1) \mapsto (1, 1)$ resta fermo, $(1, -1) \mapsto (-1, 1)$ cambia segno. L'asse $y$ è l'errore di chi legge l'angolo $\vartheta$ invece di $\frac\vartheta2$.

D: Sia $O(2) \subset M(2, \R)$ l'insieme delle matrici ortogonali $2 \times 2$. Quale affermazione è vera?
+ $O(2)$ non è un sottospazio vettoriale di $M(2, \R)$.
- $O(2)$ è un sottospazio di dimensione 4.
- $O(2)$ contiene la matrice nulla.
- La somma di due matrici ortogonali è sempre ortogonale.
- $O(2)$ contiene solo matrici di rotazione.
= La matrice nulla non è ortogonale, e $I_2 + I_2 = 2I_2$ non lo è: $O(2)$ non è chiuso rispetto alla somma, quindi non è un sottospazio. Contiene anche le riflessioni (Proposizione 22.11). Simile all'appello del 10/07/2024, domanda 2.

D: Se $A \in M(3, \R)$ è una matrice ortogonale, allora sicuramente:
+ $\det A = \pm1$
- $\det A = 1$
- $A$ è simmetrica
- $A^{-1} = A$
- $\operatorname{tr}A = 3$
= Da ${}^tAA = I$ e Binet: $(\det A)^2 = 1$. Il determinante può essere $-1$ (una riflessione, come $\operatorname{diag}(1, 1, -1)$). Una rotazione di $\frac\pi2$ intorno all'asse $z$ è ortogonale ma non simmetrica, non coincide con la sua inversa e ha traccia $1$. Vale invece sempre $A^{-1} = {}^tA$.

D: Quanto vale il prodotto vettoriale $(1, 2, 0) \times (0, 1, 3)$?
+ $(6, -3, 1)$
- $(6, 3, 1)$
- $(-6, 3, -1)$
- $(0, 2, 0)$
- $(6, -3, -1)$
= $(2 \cdot 3 - 0 \cdot 1,\ 0 \cdot 0 - 1 \cdot 3,\ 1 \cdot 1 - 2 \cdot 0) = (6, -3, 1)$. Controllo: $\langle (6, -3, 1), (1, 2, 0)\rangle = 6 - 6 = 0$ e $\langle (6, -3, 1), (0, 1, 3)\rangle = -3 + 3 = 0$. $(-6, 3, -1)$ è $(0, 1, 3) \times (1, 2, 0)$; $(0, 2, 0)$ è il prodotto coordinata per coordinata. È il conto che serve per la direzione di una retta intersezione di piani, come nell'appello del 15/01/2026 (problema 12, punto 2).

D: Per quale di queste coppie di vettori il prodotto vettoriale è il vettore nullo?
+ $(1, -2, 3)$ e $(-2, 4, -6)$
- $(1, 0, 0)$ e $(0, 1, 0)$
- $(1, 1, 0)$ e $(1, -1, 0)$
- $(1, 2, 3)$ e $(3, 2, 1)$
- $(0, 0, 1)$ e $(1, 1, 1)$
= $v \times w = 0$ esattamente quando $v, w$ sono dipendenti (Proposizione 22.16): $(-2, 4, -6) = -2(1, -2, 3)$. Le altre coppie danno $(0, 0, 1)$, $(0, 0, -2)$, $(-4, 8, -4)$, $(-1, 1, 0)$. Nelle domande sulla distanza tra rette (per esempio appello del 07/09/2026, domanda 7) si controlla così che le direzioni non siano parallele.

D: Quale di queste trasformazioni lineari del piano **non** è un'isometria (con il prodotto euclideo)?
+ $(x, y) \mapsto (x + y, y)$
- $(x, y) \mapsto (y, x)$
- $(x, y) \mapsto (-x, -y)$
- $(x, y) \mapsto \left(\frac{x - \sqrt3 y}{2}, \frac{\sqrt3 x + y}{2}\right)$
- $(x, y) \mapsto (x, -y)$
= Il taglio $(x, y) \mapsto (x + y, y)$ manda $e_2$ in $(1, 1)$, di norma $\sqrt2 \neq 1$. Le altre sono $\mathrm{Rif}_{\pi/2}$, $\mathrm{Rot}_\pi$, $\mathrm{Rot}_{\pi/3}$ e $\mathrm{Rif}_0$: tutte con matrice ortogonale.

D: Un'isometria lineare di $\R^3$ con determinante $-1$ è:
+ un'antirotazione
- una rotazione
- una traslazione
- una proiezione ortogonale su un piano
- una rotazione di angolo $\pi$ intorno a un asse
= Per il Teorema 22.13 ogni isometria di $\R^3$ è una rotazione ($\det 1$) o un'antirotazione ($\det -1$). Le traslazioni non sono lineari; le proiezioni non sono invertibili; una rotazione, di qualsiasi angolo, ha determinante $1$. Casi particolari di antirotazione sono $-I_3$ (angolo $\pi$) e le riflessioni rispetto a un piano (angolo $0$).

D: Quanto vale la norma di $(1, 0, 0) \times (0, 3, 4)$?
N: 5
= $(1, 0, 0) \times (0, 3, 4) = (0 \cdot 4 - 0 \cdot 3,\ 0 \cdot 0 - 1 \cdot 4,\ 1 \cdot 3 - 0 \cdot 0) = (0, -4, 3)$, di norma $\sqrt{16 + 9} = 5$. Nella lezione L23 vedrai che è l'area del parallelogramma con lati i due vettori (come nell'esercizio 7 del foglio 4 del tutorato).
```

## Esercizi

Le dispense non hanno esercizi per questa lezione: questi sono tutti costruiti per gli appunti; gli ultimi due sono modellati sugli appelli e sul foglio 4 del tutorato.

::: esercizio base Scrivere e usare le rotazioni
(a) Scrivi $\mathrm{Rot}_{\pi/6}$ e $\mathrm{Rot}_{2\pi/3}$. (b) Ruota $(2, 0)$ di $\frac\pi3$ e $(1, 2)$ di $\frac\pi2$. (c) Verifica che $\mathrm{Rot}_{\pi/6}$ conserva la norma di $(2, 0)$.
::: soluzione
(a) Con $\cos\frac\pi6 = \frac{\sqrt3}2$, $\sin\frac\pi6 = \frac12$, $\cos\frac{2\pi}3 = -\frac12$, $\sin\frac{2\pi}3 = \frac{\sqrt3}2$:
$$\mathrm{Rot}_{\pi/6} = \begin{pmatrix} \frac{\sqrt3}2 & -\frac12 \\ \frac12 & \frac{\sqrt3}2 \end{pmatrix}, \qquad \mathrm{Rot}_{2\pi/3} = \begin{pmatrix} -\frac12 & -\frac{\sqrt3}2 \\ \frac{\sqrt3}2 & -\frac12 \end{pmatrix}.$$

(b) $\mathrm{Rot}_{\pi/3}(2, 0) = 2 \cdot$ (prima colonna) $= 2\left(\frac12, \frac{\sqrt3}2\right) = (1, \sqrt3)$. $\mathrm{Rot}_{\pi/2}(1, 2) = (-2, 1)$.

(c) $\mathrm{Rot}_{\pi/6}(2, 0) = (\sqrt3, 1)$, di norma $\sqrt{3 + 1} = 2 = \|(2, 0)\|$. ✓
:::

::: esercizio base La riflessione rispetto alla retta $y = -x$
Trova la matrice della riflessione rispetto alla retta $y = -x$ e verifica il risultato su due vettori.
::: soluzione
La retta $y = -x$ forma con l'asse $x$ un angolo di $-\frac\pi4$ (oppure $\frac{3\pi}4$). Con $\frac\vartheta2 = -\frac\pi4$ si ha $\vartheta = -\frac\pi2$, e $\cos\left(-\frac\pi2\right) = 0$, $\sin\left(-\frac\pi2\right) = -1$:
$$\mathrm{Rif}_{-\pi/2} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}, \qquad (x, y) \mapsto (-y, -x).$$
(Con $\vartheta = \frac{3\pi}2 \in [0, 2\pi)$ si ottiene la stessa matrice.) Verifica: $(1, -1)$, che sta sulla retta, va in $(1, -1)$ e resta fermo; $(1, 1)$, perpendicolare alla retta, va in $(-1, -1)$, il suo opposto. ✓
:::

::: esercizio base Matrici ortogonali e inverse
Per ciascuna matrice di' se è ortogonale; se lo è, scrivi l'inversa senza fare conti:
$$A_1 = \frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}, \quad A_2 = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix},$$
$$A_3 = \frac13\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{pmatrix}, \quad A_4 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}.$$
::: soluzione
- $A_1$: ortogonale (colonne unitarie e ortogonali). $A_1^{-1} = {}^tA_1 = \frac15\begin{pmatrix} 3 & 4 \\ -4 & 3 \end{pmatrix}$.
- $A_2$: **non** ortogonale, le colonne hanno norma $\sqrt2$. (La sua inversa esiste, ma non è la trasposta: è $\frac12\,{}^tA_2$.)
- $A_3$: ortogonale (conti nell'esempio della sezione sulle matrici ortogonali). $A_3$ è anche simmetrica, quindi $A_3^{-1} = {}^tA_3 = A_3$: applicarla due volte dà l'identità. È la riflessione rispetto al piano $\{-x + y + z = 0\}$: la formula $f(v) = v - 2\,\frac{\langle v, n\rangle}{\langle n, n\rangle}n$ con $n = (-1, 1, 1)$ dà $f(e_1) = (1, 0, 0) - 2 \cdot \frac{-1}{3}(-1, 1, 1) = \left(\frac13, \frac23, \frac23\right)$, la prima colonna.
- $A_4$: ortogonale, le colonne sono $e_3, e_1, e_2$ (la base canonica in un altro ordine). $A_4^{-1} = {}^tA_4 = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$.
:::

::: esercizio medio La riflessione rispetto alla retta di $(1, 2)$
Trova la matrice della riflessione del piano rispetto alla retta $r = \Span((1, 2))$ in due modi: con $\mathrm{Rif}_\vartheta$ e con il cambiamento di base.
::: soluzione
**Con $\mathrm{Rif}_\vartheta$.** L'angolo $\frac\vartheta2$ della retta ha $t = \tan\frac\vartheta2 = 2$. Allora
$$\begin{aligned} \cos\vartheta &= \frac{1 - t^2}{1 + t^2} = \frac{1 - 4}{5} = -\frac35, \\ \sin\vartheta &= \frac{2t}{1 + t^2} = \frac45, \end{aligned}$$
$$\mathrm{Rif}_\vartheta = \begin{pmatrix} -\frac35 & \frac45 \\ \frac45 & \frac35 \end{pmatrix}.$$

**Con il cambiamento di base.** Nella base $\{(1, 2), (-2, 1)\}$ (un vettore su $r$, uno perpendicolare) la matrice è $\operatorname{diag}(1, -1)$. Con $M = \begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}$, $M^{-1} = \frac15\begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix}$:
$$\begin{aligned} M\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}M^{-1} &= \begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}\cdot\frac15\begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix} \\ &= \frac15\begin{pmatrix} -3 & 4 \\ 4 & 3 \end{pmatrix}. \end{aligned}$$
Stesso risultato. Controllo: $(1, 2) \mapsto \left(\frac{-3 + 8}{5}, \frac{4 + 6}{5}\right) = (1, 2)$ e $(-2, 1) \mapsto \left(\frac{6 + 4}{5}, \frac{-8 + 3}{5}\right) = (2, -1)$. ✓
:::

::: esercizio medio Riconoscere rotazioni e riflessioni
Di' che isometria rappresentano $A = \frac15\begin{pmatrix} 4 & -3 \\ 3 & 4 \end{pmatrix}$ e $B = \frac15\begin{pmatrix} 4 & 3 \\ 3 & -4 \end{pmatrix}$: angolo per la rotazione, asse per la riflessione.
::: soluzione
Entrambe hanno colonne unitarie ($\frac{16 + 9}{25} = 1$) e ortogonali: sono ortogonali.

- $\det A = \frac{16 + 9}{25} = 1$: **rotazione** con $\cos\vartheta = \frac45$ e $\sin\vartheta = \frac35$, cioè $\vartheta = \arccos\frac45$ (circa 37°, non è un angolo notevole).
- $\det B = \frac{-16 - 9}{25} = -1$: **riflessione**. L'asse è $\Ker(B - I)$: la prima riga di $B - I$ è $\left(-\frac15, \frac35\right)$, quindi $-x + 3y = 0$, cioè $x = 3y$: l'asse è $\Span((3, 1))$. Controllo: $B(3, 1) = \left(\frac{12 + 3}{5}, \frac{9 - 4}{5}\right) = (3, 1)$. ✓
:::

::: esercizio medio Due riflessioni fanno una rotazione
(a) Calcola $\mathrm{Rif}_{\pi/2}\,\mathrm{Rif}_0$ e riconosci il risultato. (b) Dimostra che in generale $\mathrm{Rif}_\alpha\,\mathrm{Rif}_\beta = \mathrm{Rot}_{\alpha - \beta}$.
::: soluzione
(a) $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \mathrm{Rot}_{\pi/2}$: riflettere rispetto all'asse $x$ e poi rispetto alla bisettrice è ruotare di un quarto di giro.

(b) Riga per colonna, le quattro entrate di $\mathrm{Rif}_\alpha\,\mathrm{Rif}_\beta$ sono:

- posto $(1, 1)$: $\cos\alpha\cos\beta + \sin\alpha\sin\beta$;
- posto $(1, 2)$: $\cos\alpha\sin\beta - \sin\alpha\cos\beta$;
- posto $(2, 1)$: $\sin\alpha\cos\beta - \cos\alpha\sin\beta$;
- posto $(2, 2)$: $\sin\alpha\sin\beta + \cos\alpha\cos\beta$.

Per le formule di sottrazione, $\cos\alpha\cos\beta + \sin\alpha\sin\beta = \cos(\alpha - \beta)$ e $\sin\alpha\cos\beta - \cos\alpha\sin\beta = \sin(\alpha - \beta)$; l'entrata in alto a destra è $-\sin(\alpha - \beta)$. Quindi il prodotto è $\mathrm{Rot}_{\alpha - \beta}$. Anche il determinante torna: $(-1)(-1) = 1$.
:::

::: esercizio medio Prodotti vettoriali e basi
(a) Calcola $(2, -1, 1) \times (1, 3, -2)$ e verifica che è ortogonale ai due vettori. (b) Spiega perché $(2, -1, 1)$, $(1, 3, -2)$ e il loro prodotto vettoriale formano una base di $\R^3$.
::: soluzione
(a) Con $v = (2, -1, 1)$ e $w = (1, 3, -2)$:
- prima: $v_2w_3 - v_3w_2 = (-1)(-2) - 1 \cdot 3 = 2 - 3 = -1$;
- seconda: $v_3w_1 - v_1w_3 = 1 \cdot 1 - 2 \cdot (-2) = 1 + 4 = 5$;
- terza: $v_1w_2 - v_2w_1 = 2 \cdot 3 - (-1) \cdot 1 = 6 + 1 = 7$.

$v \times w = (-1, 5, 7)$. Controlli: $\langle (-1, 5, 7), v\rangle = -2 - 5 + 7 = 0$ e $\langle (-1, 5, 7), w\rangle = -1 + 15 - 14 = 0$. ✓

(b) $v$ e $w$ non sono proporzionali (il prodotto vettoriale non è nullo, Proposizione 22.16), quindi per il Corollario 22.17 la terna è una base.
:::

::: esercizio medio Il piano generato da due vettori
Sia $W = \Span((1, 0, 2), (0, 1, 1))$. (a) Trova un vettore ortogonale a $W$ e un'equazione cartesiana di $W$. (b) Il vettore $(1, 1, 3)$ sta in $W$? E $(1, 1, 1)$?
::: soluzione
(a) $(1, 0, 2) \times (0, 1, 1) = (0 \cdot 1 - 2 \cdot 1,\ 2 \cdot 0 - 1 \cdot 1,\ 1 \cdot 1 - 0 \cdot 0) = (-2, -1, 1)$. Un vettore $x$ sta in $W$ se e solo se è ortogonale a questo vettore (lezione L21: $W = (W^\perp)^\perp$ e $W^\perp$ è la retta generata da $(-2, -1, 1)$). Equazione: $-2x - y + z = 0$, oppure $2x + y - z = 0$.

(b) $(1, 1, 3)$: $2 + 1 - 3 = 0$, sta in $W$ (è la somma dei due generatori). $(1, 1, 1)$: $2 + 1 - 1 = 2 \neq 0$, non sta in $W$.
:::

::: esercizio difficile Proprietà del prodotto vettoriale dalla definizione
Dimostra, usando solo la Definizione 22.14: (a) $w \times v = -(v \times w)$; (b) $v \times v = 0$; (c) $(\lambda v) \times w = \lambda(v \times w)$. (d) Controlla con $v = (1, 2, 3)$, $w = (4, 5, 6)$ l'identità $\|v \times w\|^2 + \langle v, w\rangle^2 = \|v\|^2\|w\|^2$, che le dispense dimostrano nella lezione L23.
::: soluzione
(a) Scambiando $v$ e $w$ la prima coordinata diventa $w_2v_3 - w_3v_2 = -(v_2w_3 - v_3w_2)$, e lo stesso per le altre due: ogni coordinata cambia segno.

(b) Con $w = v$ ogni coordinata è del tipo $v_2v_3 - v_3v_2 = 0$. (Oppure: per (a), $v \times v = -(v \times v)$, quindi $v \times v = 0$.)

(c) Ogni coordinata di $(\lambda v) \times w$ è, per esempio, $(\lambda v_2)w_3 - (\lambda v_3)w_2 = \lambda(v_2w_3 - v_3w_2)$.

(d) $v \times w = (-3, 6, -3)$, quindi $\|v \times w\|^2 = 9 + 36 + 9 = 54$; $\langle v, w\rangle = 4 + 10 + 18 = 32$, quindi $\langle v, w\rangle^2 = 1024$. A destra: $\|v\|^2 = 14$, $\|w\|^2 = 16 + 25 + 36 = 77$, e $14 \cdot 77 = 1078 = 54 + 1024$. ✓
:::

::: esercizio difficile Un'isometria dello spazio
Sia $A = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}$. (a) Verifica che $A$ è ortogonale. (b) È una rotazione o un'antirotazione? (c) Trova l'asse e l'angolo.
::: soluzione
(a) Le colonne sono $(0, 1, 0)$, $(-1, 0, 0)$, $(0, 0, -1)$: unitarie e a due a due ortogonali.

(b) Sviluppo lungo la terza riga: $\det A = (-1) \cdot \det\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = (-1) \cdot 1 = -1$. È un'**antirotazione**.

(c) $Ae_3 = (0, 0, -1) = -e_3$: l'asse è l'asse $z$, $\Span(e_3)$. Sul piano $\{z = 0\}$ la matrice agisce come $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \mathrm{Rot}_{\pi/2}$. Quindi $A$ è la rotazione di $\frac\pi2$ intorno all'asse $z$ seguita dalla riflessione rispetto al piano $\{z = 0\}$. Con la formula di Martelli: $\cos\vartheta = \frac{\operatorname{tr}A - \det A}{2} = \frac{-1 + 1}{2} = 0$, cioè $\vartheta = \frac\pi2$. ✓
:::

::: esercizio esame Completare una matrice ortogonale
Sia $A = \frac15\begin{pmatrix} 3 & a \\ 4 & b \end{pmatrix}$. (1) Trova tutti gli $a, b \in \R$ per cui $A$ è ortogonale. (2) Per ciascuna soluzione di' se $L_A$ è una rotazione o una riflessione (con angolo o asse). (3) Calcola $A^{-1}$.
::: soluzione
(1) La prima colonna $\frac15(3, 4)$ è già unitaria. La seconda, $\frac15(a, b)$, deve essere unitaria, $a^2 + b^2 = 25$, e ortogonale alla prima, $3a + 4b = 0$. Dalla seconda condizione $a = -\frac43 b$; sostituendo, $\frac{16}9 b^2 + b^2 = 25$, cioè $\frac{25}9 b^2 = 25$, quindi $b = \pm3$ e $a = \mp4$. Le soluzioni sono $(a, b) = (-4, 3)$ e $(a, b) = (4, -3)$.

(2) Con $(-4, 3)$: $A = \frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$, $\det A = \frac{9 + 16}{25} = 1$: rotazione con $\cos\vartheta = \frac35$, $\sin\vartheta = \frac45$. Con $(4, -3)$: $A = \frac15\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}$, $\det A = -1$: riflessione, con asse $\Span((2, 1))$ (è la matrice dell'esempio della sezione sulle riflessioni; controllo: $A(2, 1) = \left(\frac{6 + 4}{5}, \frac{8 - 3}{5}\right) = (2, 1)$).

(3) Per una matrice ortogonale $A^{-1} = {}^tA$. Rotazione: $A^{-1} = \frac15\begin{pmatrix} 3 & 4 \\ -4 & 3 \end{pmatrix}$ (la rotazione all'indietro). Riflessione: $A$ è simmetrica, quindi $A^{-1} = A$ (riflettere due volte riporta al punto di partenza).
:::

::: esercizio esame Prodotto vettoriale, piano e base
Siano $v = (2, 1, 0)$ e $w = (1, 0, 1)$. (1) Calcola un vettore ortogonale a $\Span(v, w)$ e un vettore unitario con la stessa direzione. (2) Scrivi un'equazione cartesiana del piano $\Span(v, w)$. (3) Dimostra che $v, w, v \times w$ è una base di $\R^3$ calcolando un determinante. (4) Anticipa la lezione L23: quanto vale l'area del parallelogramma di lati $v$ e $w$?
::: soluzione
(1) $v \times w = (1 \cdot 1 - 0 \cdot 0,\ 0 \cdot 1 - 2 \cdot 1,\ 2 \cdot 0 - 1 \cdot 1) = (1, -2, -1)$. Controllo: $\langle (1, -2, -1), v\rangle = 2 - 2 + 0 = 0$, $\langle (1, -2, -1), w\rangle = 1 + 0 - 1 = 0$. ✓ Norma $\sqrt{1 + 4 + 1} = \sqrt6$, versore $\frac{1}{\sqrt6}(1, -2, -1)$.

(2) $x - 2y - z = 0$. Controllo: $v$ dà $2 - 2 - 0 = 0$, $w$ dà $1 - 0 - 1 = 0$. ✓

(3) Con le colonne $v, w, v \times w$, sviluppo lungo la prima riga:
$$\begin{aligned} \det\begin{pmatrix} 2 & 1 & 1 \\ 1 & 0 & -2 \\ 0 & 1 & -1 \end{pmatrix} &= 2(0 + 2) - 1(-1 - 0) + 1(1 - 0) \\ &= 4 + 1 + 1 = 6 \neq 0. \end{aligned}$$
Quindi i tre vettori sono indipendenti: una base. Il valore $6 = \|v \times w\|^2$ non è un caso: sviluppando lungo la terza colonna, il determinante della matrice di colonne $v, w, v \times w$ vale sempre $d_1^2 + d_2^2 + d_3^2 = \|v \times w\|^2 > 0$ (nella lezione L23 è la Proposizione 23.4).

(4) $\|v \times w\| = \sqrt6$.
:::

## Domande di ripasso

::: domanda Che cos'è un'isometria lineare? Perché fissa l'origine?
Un isomorfismo che conserva il prodotto scalare: $\langle T(v), T(w)\rangle = \langle v, w\rangle$. Essendo lineare, manda $0$ in $0$; per questo le traslazioni non ne fanno parte.
:::

::: domanda Come si ricava la matrice della rotazione di angolo $\vartheta$?
Le colonne sono le immagini di $e_1$ ed $e_2$: $e_1$ va in $(\cos\vartheta, \sin\vartheta)$ ed $e_2$ va in $(-\sin\vartheta, \cos\vartheta)$. Quindi $\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$, con determinante 1.
:::

::: domanda Rispetto a quale retta riflette $\mathrm{Rif}_\vartheta$? Qual è il suo determinante?
Rispetto alla retta per l'origine che forma un angolo $\frac\vartheta2$ con l'asse $x$. Il determinante è $-\cos^2\vartheta - \sin^2\vartheta = -1$.
:::

::: domanda Perché una riflessione ha matrice $\operatorname{diag}(1, -1)$ in una base opportuna?
Se $v_1$ sta sulla retta $r$ e $v_2$ sulla retta perpendicolare, la riflessione lascia fermo $v_1$ e cambia segno a $v_2$: $f(v_1) = v_1$, $f(v_2) = -v_2$.
:::

::: domanda Perché per verificare che un isomorfismo è un'isometria bastano i vettori di una base?
Perché, per bilinearità e linearità, $\langle v, w\rangle$ e $\langle T(v), T(w)\rangle$ sono le stesse combinazioni dei prodotti $\langle v_i, v_j\rangle$ e $\langle T(v_i), T(v_j)\rangle$.
:::

::: domanda Quali condizioni equivalenti definiscono un'isometria con un prodotto definito positivo?
Conservare il prodotto scalare, conservare le norme ($\|T(v)\| = \|v\|$), conservare le distanze ($d(T(v), T(w)) = d(v, w)$).
:::

::: domanda Quando $L_A$ è un'isometria di $\R^n$? Che cosa vuol dire sulle colonne di $A$?
Quando ${}^tAA = I_n$, cioè $A$ è ortogonale. L'entrata $(i, j)$ di ${}^tAA$ è $\langle A^i, A^j\rangle$, quindi le colonne formano una base ortonormale.
:::

::: domanda Che proprietà hanno le matrici ortogonali?
$A^{-1} = {}^tA$; $\det A = \pm1$; gli autovalori reali sono $\pm1$; anche le righe sono ortonormali; il prodotto di due matrici ortogonali è ortogonale.
:::

::: domanda Perché le matrici ortogonali $2 \times 2$ sono solo rotazioni e riflessioni?
La prima colonna è unitaria, quindi $(\cos\vartheta, \sin\vartheta)$; la seconda è unitaria e ortogonale alla prima, quindi $\pm(-\sin\vartheta, \cos\vartheta)$. Con il segno $+$ si ha $\mathrm{Rot}_\vartheta$, con il segno $-$ si ha $\mathrm{Rif}_\vartheta$.
:::

::: domanda Che cosa sono le isometrie di $\R^3$?
Rotazioni intorno a un asse ($\det 1$) e antirotazioni ($\det -1$): una rotazione intorno a un asse $r$ composta con la riflessione rispetto al piano $r^\perp$.
:::

::: domanda Come si calcola il prodotto vettoriale? Come si ricorda il segno?
$v \times w = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$, oppure $(d_1, -d_2, d_3)$ con i minori della matrice di colonne $v$ e $w$, oppure con il determinante formale con $e_1, e_2, e_3$ nell'ultima colonna.
:::

::: domanda Perché $v \times w$ è ortogonale a $v$? Quando è nullo?
$\langle v \times w, v\rangle$ è il determinante della matrice con colonne $v, w, v$, che ha due colonne uguali, quindi è 0. È nullo esattamente quando $v$ e $w$ sono dipendenti (tutti i minori $2 \times 2$ nulli, rango $\le 1$).
:::

## Glossario

```glossario
Isometria | Isomorfismo $T$ tra spazi con prodotto scalare tale che $\langle T(v), T(w)\rangle = \langle v, w\rangle$ per ogni $v, w$.
Isometria lineare | Isometria di $\R^n$ del tipo $L_A(x) = Ax$; fissa l'origine.
Rotazione del piano | $L_A$ con $A = \mathrm{Rot}_\vartheta$: gira il piano di $\vartheta$ in senso antiorario; $\det = 1$.
$\mathrm{Rot}_\vartheta$ | La matrice con colonne $(\cos\vartheta, \sin\vartheta)$ e $(-\sin\vartheta, \cos\vartheta)$.
Riflessione del piano | $L_A$ con $A = \mathrm{Rif}_\vartheta$: simmetria rispetto alla retta di angolo $\frac\vartheta2$; $\det = -1$.
$\mathrm{Rif}_\vartheta$ | La matrice con colonne $(\cos\vartheta, \sin\vartheta)$ e $(\sin\vartheta, -\cos\vartheta)$.
Matrice ortogonale | Matrice reale quadrata con ${}^tAA = I_n$: colonne ortonormali, $A^{-1} = {}^tA$, $\det A = \pm1$.
$O(2)$ | L'insieme delle matrici ortogonali $2 \times 2$: le $\mathrm{Rot}_\vartheta$ e le $\mathrm{Rif}_\vartheta$. Non è un sottospazio.
Orientazione | Il «verso di rotazione» del piano o dello spazio; le trasformazioni con determinante negativo la invertono.
Rotazione dello spazio | Isometria di $\R^3$ che fissa una retta $r$ (l'asse) e ruota il piano $r^\perp$; $\det = 1$.
Antirotazione | Composizione di una rotazione intorno a un asse $r$ e della riflessione rispetto al piano $r^\perp$; $\det = -1$.
Asse | La retta fissata da una rotazione ($\Ker(A - I)$), o quella mandata nel suo opposto da un'antirotazione.
Traccia | $\operatorname{tr}A$, somma degli elementi sulla diagonale; per le isometrie di $\R^3$, $\cos\vartheta = \frac{\operatorname{tr}A - \det A}{2}$.
Prodotto vettoriale | $v \times w = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$, definito solo in $\R^3$.
Minori $d_i$ | Determinanti $2 \times 2$ della matrice $3 \times 2$ di colonne $v, w$ senza la riga $i$; $v \times w = (d_1, -d_2, d_3)$.
Regola mnemonica | $v \times w$ come determinante formale con $e_1, e_2, e_3$ nell'ultima colonna, sviluppato con Laplace.
Anticommutatività | $w \times v = -(v \times w)$; in particolare $v \times v = 0$.
```

## Checklist

```checklist
- So scrivere $\mathrm{Rot}_\vartheta$ e $\mathrm{Rif}_\vartheta$ e ricavarle dalle immagini di $e_1$ ed $e_2$.
- So che l'asse di $\mathrm{Rif}_\vartheta$ ha angolo $\frac\vartheta2$ e so trovarlo come autospazio dell'autovalore 1.
- So scrivere la matrice della riflessione rispetto a una retta data (con l'angolo, con la proiezione o con il cambiamento di base).
- So la definizione di isometria e perché basta controllarla su una base.
- So che, con un prodotto definito positivo, isometria vuol dire conservare norme o distanze.
- So riconoscere una matrice ortogonale (${}^tAA = I$, colonne ortonormali) e usarne le proprietà ($A^{-1} = {}^tA$, $\det = \pm1$).
- So classificare un'isometria del piano con il determinante e trovare angolo o asse.
- So che le isometrie di $\R^3$ sono rotazioni e antirotazioni e le distinguo con il determinante.
- So calcolare $v \times w$ con la formula, con i minori o con la regola mnemonica, e controllare il risultato con l'ortogonalità.
- So usare il prodotto vettoriale per trovare un vettore normale a un piano o la direzione della retta intersezione di due piani.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 22 «Lo spazio euclideo I», pp. 111–115: sezioni 22.A (isometrie lineari del piano), 22.B (isometrie dello spazio) e 22.C (prodotto vettoriale), seguite in ordine con la loro numerazione (Definizioni 22.1, 22.3, 22.5, 22.10, 22.14; Proposizioni 22.2, 22.4, 22.6, 22.7, 22.8, 22.11, 22.15, 22.16; Corollari 22.9, 22.12, 22.17; Teorema 22.13; l'Osservazione sulla base comoda per le riflessioni). Le dispense non hanno esercizi per questa lezione. Richiami: Proposizione 8.6 (rango per righe), Teorema 9.6 (Laplace), Teorema 10.4 (Binet), lezioni L16, L17, L19–L21.
- **B. Martelli, *Geometria e algebra lineare***: §4.4.8–4.4.9 e §4.4.11 (dimostrazioni delle Proposizioni 22.2 e 22.4 con le coordinate polari), §7.5 (isometrie), §8.2 (Proposizione 8.2.1, matrici ortogonali, riflessioni, rotazioni e antirotazioni, Teorema 8.2.13 e la formula con la traccia), §9.1 (prodotto vettoriale). Il libro è gratuito: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Appelli d'esame** (Moodle 2025/26): domanda 2 del 10/07/2024; problemi 12 del 24/01/2024, del 10/07/2024, del 06/09/2024 e del 15/01/2026; domande sulla distanza tra rette dell'08/02/2024, del 06/09/2024, del 05/02/2026, del 03/06/2026 e del 07/09/2026. **Foglio 4 del tutorato** (esercizio 7, prodotto vettoriale e area). Le due domande riportate sono risolte in questi appunti.
- Le parti **«Oltre le dispense»** (composizione e inversa delle rotazioni, proprietà delle matrici ortogonali, asse e angolo delle isometrie di $\R^3$, altre proprietà del prodotto vettoriale, collocazione nel libro), le dimostrazioni prese dal libro di Martelli e tutti gli esercizi sono aggiunte di questi appunti, per collegare la lezione al resto del corso e all'esame.
