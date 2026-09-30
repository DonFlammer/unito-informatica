---
corso: MDAG
modulo: AG
lezione: L23
titolo: Lo spazio euclideo II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L23
descrizione: >-
  Appunti della lezione L23 di Algebra lineare e Geometria (MDAG, parte 2): proprietà del prodotto vettoriale e area
  del parallelogramma, forma cartesiana e parametrica di rette e piani, sottospazi affini e giacitura, intersezioni,
  con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Il prodotto vettoriale $v \times w$ ha una lunghezza che misura un'area e un verso che si trova con la mano destra.
  Poi si passa alla geometria di rette e piani in $\R^3$: come si scrivono (equazioni oppure parametri), come si passa
  da una scrittura all'altra, che cos'è un sottospazio affine $x + W$ e come si calcolano le intersezioni. Sono i conti
  che tornano in quasi tutti i problemi d'esame di geometria.
materiale: dispense
scheda:
  Dispense: lezione 23 · pp. 116–121
  Libro: Martelli, §9.1 e §9.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 23 «Lo spazio euclideo II»; B. Martelli, Geometria e algebra lineare, §9.1–9.2
file_en: L23_euclidean_space_2.html
appunti_html: appunti/MDAG/L23_spazio_euclideo_2.html
genera_html: true
---

## In breve

- Il **prodotto vettoriale** $v \times w$ di due vettori di $\R^3$ (lezione L22) è ortogonale a $v$ e a $w$, e la sua **lunghezza** è l'**area del parallelogramma** con lati $v$ e $w$: $\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta$.
- Tutto discende dall'**identità di Lagrange** $\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2$.
- Il **verso** di $v \times w$ si trova con la **regola della mano destra**: se $v$ e $w$ sono indipendenti, $v, w, v \times w$ è una **base positiva** di $\R^3$ (determinante positivo).
- Il prodotto vettoriale è **bilineare** e **anticommutativo** ($v \times w = -\,w \times v$), ma **non è associativo**: le parentesi contano.
- Un sottospazio si descrive in **forma cartesiana** (equazioni: dicono *chi ci sta dentro*) oppure in **forma parametrica** (generatori: dicono *come sono fatti* i suoi punti).
- Un **sottospazio affine** è un sottospazio vettoriale traslato, $S = x + W$: $W$ è la **giacitura**, $x$ un punto qualsiasi di $S$. Le soluzioni di $Ax = b$, se ci sono, formano un sottospazio affine di dimensione $n - \rk A$.
- In $\R^3$ un piano ha **una** equazione $ax + by + cz = d$. Da $P_0 + t v_1 + s v_2$ la si ottiene così: $(a, b, c) = v_1 \times v_2$, e $d$ si trova imponendo il passaggio per $P_0$.
- Per **intersecare** si risolvono equazioni: si uniscono le equazioni (cartesiana con cartesiana), si sostituisce il punto generico (cartesiana con parametrica), si eguagliano i punti generici (parametrica con parametrica). Se $\operatorname{giac}(S) + \operatorname{giac}(S') = \R^n$, l'intersezione non è vuota.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Da dove ripartiamo: il prodotto vettoriale (pp. 114–116)

Nella lezione L22 hai incontrato un'operazione che esiste **solo in $\R^3$**: prende **due vettori** e restituisce **un vettore** (il prodotto scalare, invece, restituisce un numero). In questi appunti, per risparmiare spazio, i vettori che le dispense scrivono in colonna li scriviamo spesso in riga: $(1, 2, 2)$ vuol dire il vettore colonna ${}^t(1, 2, 2)$.

> [!DEF] 22.14 · Prodotto vettoriale (richiamo dalla lezione L22)
> Dati due vettori $v = (v_1, v_2, v_3)$ e $w = (w_1, w_2, w_3)$ di $\R^3$, il **prodotto vettoriale** fra $v$ e $w$ è il vettore
> $$v \times w = \begin{pmatrix} v_2 w_3 - v_3 w_2 \\ v_3 w_1 - v_1 w_3 \\ v_1 w_2 - v_2 w_1 \end{pmatrix}.$$
> In altre parole $v \times w = (d_1, -d_2, d_3)$, dove $d_i$ è il determinante del minore $2 \times 2$ che si ottiene cancellando la riga $i$-esima dalla matrice $\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}$.

La regola mnemonica delle dispense è un «determinante» fatto con una colonna di vettori (non è una vera matrice, perché $e_1, e_2, e_3$ non sono numeri):

$$\begin{aligned} v \times w &= \det\begin{pmatrix} v_1 & w_1 & e_1 \\ v_2 & w_2 & e_2 \\ v_3 & w_3 & e_3 \end{pmatrix} \\ &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix} e_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix} e_2 + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix} e_3. \end{aligned}$$

In pratica si fa così:

1. scrivi $v$ e $w$ **uno accanto all'altro**, come due colonne;
2. prima componente: copri la **prima riga** e calcola il determinante $2 \times 2$ che resta;
3. seconda componente: copri la **seconda riga**, calcola il determinante e **cambia segno**;
4. terza componente: copri la **terza riga** e calcola il determinante.

> [!ESEMPIO] $v = (1, 2, 2)$ e $w = (0, 3, 4)$
> Le due colonne affiancate danno le righe $(1, 0)$, $(2, 3)$, $(2, 4)$.
> - Copro la prima riga: $\det\begin{pmatrix} 2 & 3 \\ 2 & 4 \end{pmatrix} = 2 \cdot 4 - 3 \cdot 2 = 8 - 6 = 2$.
> - Copro la seconda riga: $\det\begin{pmatrix} 1 & 0 \\ 2 & 4 \end{pmatrix} = 1 \cdot 4 - 0 \cdot 2 = 4$, e cambio segno: $-4$.
> - Copro la terza riga: $\det\begin{pmatrix} 1 & 0 \\ 2 & 3 \end{pmatrix} = 1 \cdot 3 - 0 \cdot 2 = 3$.
>
> Quindi $v \times w = (2, -4, 3)$. Controllo che sia ortogonale a entrambi:
> $$\langle v \times w, v \rangle = 2 \cdot 1 + (-4) \cdot 2 + 3 \cdot 2 = 2 - 8 + 6 = 0,$$
> $$\langle v \times w, w \rangle = 2 \cdot 0 + (-4) \cdot 3 + 3 \cdot 4 = 0 - 12 + 12 = 0.$$

Dalla lezione L22 ti servono anche tre fatti:

- $v \times w$ è **ortogonale** sia a $v$ sia a $w$ (Proposizione 22.15): il controllo appena fatto;
- $v \times w = 0$ **se e solo se** $v$ e $w$ sono **dipendenti**, cioè uno è multiplo dell'altro (Proposizione 22.16);
- se $v$ e $w$ sono indipendenti, $v, w, v \times w$ è una **base** di $\R^3$ (Corollario 22.17).

> [!TRAPPOLA] Il segno della componente centrale
> L'errore più frequente è dimenticare il **meno** davanti al secondo determinante. Controllo rapido che salva sempre: il risultato deve dare **zero** nel prodotto scalare con $v$ e con $w$. Se non dà zero, c'è un errore di conto.

## La lunghezza di $v \times w$ e l'area del parallelogramma (pp. 116–117)

Partiamo da un caso che si disegna sul foglio. Prendi $v = (3, 0, 0)$ e $w = (1, 2, 0)$: stanno tutti e due nel piano $z = 0$. Il parallelogramma con lati $v$ e $w$ ha **base** $3$ e **altezza** $2$, quindi **area** $3 \cdot 2 = 6$.

```grafico
titolo: Il parallelogramma con lati $v = (3, 0)$ e $w = (1, 2)$ nel piano $z = 0$: base $3$, altezza $h = 2$, area $6$
x: -0.5 4.5
y: -0.8 2.8
nomi: $x$ $y$
poligono: 0 0 3 0 4 2 1 2 | ambra
vettore: 3 0 | accento | spesso | $v$ | s
vettore: 1 2 | blu | spesso | $w$ | no
segmento: 1 2 1 0 | grigio | tratteggio | $h$ | e
arco: 0 0 0.6 0 1.107 | grigio | $\vartheta$
```

Ora calcola il prodotto vettoriale. Le righe affiancate sono $(3, 1)$, $(0, 2)$, $(0, 0)$:

$$v \times w = \begin{pmatrix} 0 \cdot 0 - 0 \cdot 2 \\ 0 \cdot 1 - 3 \cdot 0 \\ 3 \cdot 2 - 0 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 6 \end{pmatrix}.$$

Il vettore punta verso l'alto (è ortogonale al piano $z = 0$, dove stanno $v$ e $w$) e ha **lunghezza 6**: proprio l'area. Non è un caso, ed è quello che dimostra questa sezione.

### L'identità di Lagrange

> [!PROP] 23.1
> Per ogni $v, w \in \R^3$ vale l'equazione
> $$\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2.$$

Pezzo per pezzo:

- $\lVert v \rVert = \sqrt{v_1^2 + v_2^2 + v_3^2}$ è la **norma** (lunghezza) di $v$ nel prodotto scalare euclideo (lezione L20), e $\lVert v \rVert^2 = v_1^2 + v_2^2 + v_3^2$;
- $\langle v, w \rangle = v_1 w_1 + v_2 w_2 + v_3 w_3$ è il **prodotto scalare** euclideo;
- l'uguaglianza lega le tre quantità: se conosci due di esse, trovi la terza.

> [!ESEMPIO] Controllo con $v = (1, 2, 2)$ e $w = (0, 3, 4)$
> - $v \times w = (2, -4, 3)$, quindi $\lVert v \times w \rVert^2 = 4 + 16 + 9 = 29$;
> - $\langle v, w \rangle = 0 + 6 + 8 = 14$, quindi $\langle v, w \rangle^2 = 196$;
> - $\lVert v \rVert^2 = 1 + 4 + 4 = 9$ e $\lVert w \rVert^2 = 0 + 9 + 16 = 25$, quindi $\lVert v \rVert^2 \lVert w \rVert^2 = 225$.
>
> E infatti $29 + 196 = 225$.

> [!DIM] della Proposizione 23.1
> Le dispense sviluppano i quadrati: conviene farlo per esteso, una volta.
>
> 1. A sinistra, sviluppando i tre quadrati di $\lVert v \times w \rVert^2 = (v_2 w_3 - v_3 w_2)^2 + (v_1 w_3 - v_3 w_1)^2 + (v_1 w_2 - v_2 w_1)^2$ si ottengono sei quadrati e tre doppi prodotti:
> $$\begin{aligned} &v_2^2 w_3^2 + v_3^2 w_2^2 + v_1^2 w_3^2 + v_3^2 w_1^2 + v_1^2 w_2^2 + v_2^2 w_1^2 \\ &\quad - 2\,(v_2 w_2 v_3 w_3 + v_1 w_1 v_3 w_3 + v_1 w_1 v_2 w_2). \end{aligned}$$
> 2. Il prodotto $(v_1^2 + v_2^2 + v_3^2)(w_1^2 + w_2^2 + w_3^2)$ contiene **tutti i nove** termini $v_i^2 w_j^2$.
> 3. Il quadrato $(v_1 w_1 + v_2 w_2 + v_3 w_3)^2$ contiene i tre termini con indici uguali, $v_1^2 w_1^2 + v_2^2 w_2^2 + v_3^2 w_3^2$, più gli stessi tre doppi prodotti del punto 1 (con il segno $+$).
> 4. Sottraendo, $(v_1^2 + v_2^2 + v_3^2)(w_1^2 + w_2^2 + w_3^2) - (v_1 w_1 + v_2 w_2 + v_3 w_3)^2$ lascia i sei termini $v_i^2 w_j^2$ con $i \neq j$ meno i tre doppi prodotti: è esattamente l'espressione del punto 1.
> 5. Quindi $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 - \langle v, w \rangle^2$, che è l'enunciato. $\square$

### Dall'identità all'area

Supponiamo ora che $v$ e $w$ siano **indipendenti**. Allora stanno in un piano $\pi = \Span(v, w)$, e dentro quel piano c'è il parallelogramma $P$ con lati $v$ e $w$ (la Figura 8 delle dispense lo disegna con $v \times w$ che esce dal piano).

> [!PROP] 23.2
> L'area di $P$ è $\operatorname{Area}(P) = \lVert v \rVert \lVert w \rVert \sin\vartheta$.

Qui $\vartheta$ è l'angolo fra $v$ e $w$ (come nel corollario che segue). Perché vale: prendi $v$ come **base**, lunga $\lVert v \rVert$. L'altezza è la distanza del vertice $w$ dalla retta di $v$: nel triangolo rettangolo con ipotenusa $w$ e angolo $\vartheta$ il cateto opposto a $\vartheta$ misura $\lVert w \rVert \sin\vartheta$ (è la definizione di seno che conosci dalle superiori; il libro di Martelli usa lo stesso argomento). Base per altezza: $\lVert v \rVert \cdot \lVert w \rVert \sin\vartheta$. Nella figura sopra: $3 \cdot \sqrt 5 \cdot \frac{2}{\sqrt 5} = 6$.

> [!COROLLARIO] 23.3
> Il modulo del prodotto vettoriale è
> $$\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta = \operatorname{Area}(P),$$
> dove $\vartheta$ è l'angolo formato da $v$ e $w$ e $P$ è il parallelogramma con lati $v$ e $w$.

La spiegazione delle dispense, un passaggio alla volta:

1. dalla definizione di angolo (lezione L20), $\langle v, w \rangle = \lVert v \rVert \lVert w \rVert \cos\vartheta$;
2. sostituisco nella Proposizione 23.1: $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 - \lVert v \rVert^2 \lVert w \rVert^2 \cos^2\vartheta = \lVert v \rVert^2 \lVert w \rVert^2 (1 - \cos^2\vartheta)$;
3. siccome $\sin^2\vartheta + \cos^2\vartheta = 1$, ottengo $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 \sin^2\vartheta$;
4. estraggo la radice. Qui serve che $\sin\vartheta \ge 0$, e infatti l'angolo fra due vettori sta sempre in $[0, \pi]$, dove il seno non è mai negativo. Quindi $\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta$, che per la Proposizione 23.2 è l'area.

> [!ESEMPIO] L'area con i due metodi
> Con $v = (1, 2, 2)$ e $w = (0, 3, 4)$:
> - **con il prodotto vettoriale**: $\operatorname{Area}(P) = \lVert (2, -4, 3) \rVert = \sqrt{29}$;
> - **con l'angolo**: $\cos\vartheta = \frac{14}{3 \cdot 5} = \frac{14}{15}$, quindi $\sin\vartheta = \sqrt{1 - \frac{196}{225}} = \frac{\sqrt{29}}{15}$ e $\operatorname{Area}(P) = 3 \cdot 5 \cdot \frac{\sqrt{29}}{15} = \sqrt{29}$.
>
> Stesso risultato; il primo metodo non richiede nessun angolo.

> [!ESEMPIO] L'area di un triangolo nello spazio
> Il triangolo con vertici $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$ è **metà** del parallelogramma con lati $\overrightarrow{AB}$ e $\overrightarrow{AC}$ (la diagonale $BC$ lo taglia in due triangoli uguali).
> - $\overrightarrow{AB} = B - A = (-1, 2, 0)$ e $\overrightarrow{AC} = C - A = (-1, 0, 3)$;
> - righe affiancate $(-1, -1)$, $(2, 0)$, $(0, 3)$: $\overrightarrow{AB} \times \overrightarrow{AC} = (2 \cdot 3 - 0 \cdot 0,\ -((-1) \cdot 3 - (-1) \cdot 0),\ (-1) \cdot 0 - (-1) \cdot 2) = (6, 3, 2)$;
> - $\lVert (6, 3, 2) \rVert = \sqrt{36 + 9 + 4} = \sqrt{49} = 7$.
>
> Area del triangolo: $\frac 72$.

```widget spazio
titolo: Prodotto vettoriale e area del parallelogramma
modo: vettoriale
u: 1 2 2
v: 0 3 4
```

Trascina il disegno per girarlo: il parallelogramma giallo ha area $\lVert u \times v \rVert = \sqrt{29} \approx 5{,}385$. Prova poi $v = (2, 4, 4)$, che è il doppio di $u$: il parallelogramma si schiaccia su un segmento e il prodotto vettoriale diventa nullo (Proposizione 22.16). Infine scambia $u$ e $v$: il vettore $u \times v$ si capovolge (lo vedrai nella prossima sezione).

## Il verso di $v \times w$: la regola della mano destra (p. 117)

Se $v$ e $w$ sono **dipendenti**, $v \times w = 0$ e non c'è altro da dire. Se sono **indipendenti**, sappiamo già due cose:

- la **direzione**: $v \times w$ è ortogonale al piano che contiene $v$ e $w$;
- la **lunghezza**: è l'area del parallelogramma.

Queste due informazioni lasciano **due** candidati, opposti tra loro (uno «sopra» il piano, uno «sotto»). Per scegliere il verso giusto si usa la **regola della mano destra** (Figura 9 delle dispense): con la mano **destra**, metti il **pollice** lungo $v$ e l'**indice** lungo $w$; il **medio**, piegato ad angolo retto rispetto al palmo, indica il verso di $v \times w$. Nel primo esempio della sezione precedente $v$ puntava verso destra, $w$ in alto a destra e $v \times w = (0, 0, 6)$ esce dal foglio verso di te.

> [!PROP] 23.4
> Se $v$ e $w$ sono indipendenti, la terna $v, w, v \times w$ è una **base positiva** di $\R^3$, cioè la matrice che ha come colonne $v, w, v \times w$ ha determinante positivo.

Pezzo per pezzo:

- una **base positiva** (o *orientata positivamente*) è una base $u_1, u_2, u_3$ per cui $\det(u_1 \mid u_2 \mid u_3) > 0$: la scrittura $(u_1 \mid u_2 \mid u_3)$ indica la matrice con quelle colonne;
- l'esempio tipico è la base canonica: $\det(e_1 \mid e_2 \mid e_3) = \det I_3 = 1 > 0$, e infatti $e_1 \times e_2 = e_3$;
- la regola della mano destra è la traduzione «fisica» di questo determinante positivo.

> [!DIM] della Proposizione 23.4 (dal libro di Martelli)
> Le dispense non riportano la dimostrazione; quella del libro (Proposizione 9.1.7) è breve.
>
> 1. Scrivo $v \times w = (d_1, -d_2, d_3)$ come nella Definizione 22.14, dove $d_i$ è il minore di $\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}$ senza la riga $i$.
> 2. Sviluppo $\det(v \mid w \mid v \times w)$ con Laplace sulla **terza colonna**. Il cofattore di posto $(i, 3)$ è $(-1)^{i+3} d_i$, cioè $+d_1$, $-d_2$, $+d_3$.
> 3. Quindi $\det(v \mid w \mid v \times w) = d_1 \cdot d_1 + (-d_2) \cdot (-d_2) + d_3 \cdot d_3 = d_1^2 + d_2^2 + d_3^2 = \lVert v \times w \rVert^2$.
> 4. Se $v$ e $w$ sono indipendenti, $v \times w \neq 0$ (Proposizione 22.16), quindi la somma dei quadrati è **strettamente** positiva. $\square$

> [!ESEMPIO] Il determinante della terna
> Con $v = (1, 2, 2)$, $w = (0, 3, 4)$ e $v \times w = (2, -4, 3)$, sviluppando sulla terza colonna:
> $$\begin{aligned} \det\begin{pmatrix} 1 & 0 & 2 \\ 2 & 3 & -4 \\ 2 & 4 & 3 \end{pmatrix} &= 2 \cdot (8 - 6) - (-4) \cdot (4 - 0) + 3 \cdot (3 - 0) \\ &= 4 + 16 + 9 = 29 > 0, \end{aligned}$$
> e $29 = \lVert v \times w \rVert^2$, come dice la dimostrazione.

> [!IDEA] Una definizione geometrica
> A questo punto il prodotto vettoriale di due vettori **indipendenti** si può descrivere senza coordinate: è l'**unico** vettore ortogonale a entrambi, lungo quanto l'area del parallelogramma con lati $v$ e $w$, e orientato positivamente rispetto a $v$ e $w$. Direzione, lunghezza e verso: tre informazioni, un solo vettore.

## Le regole di calcolo (p. 117)

Dalla definizione seguono due regole, che le dispense elencano subito dopo la Proposizione 23.4.

**1. Anticommutatività.** Per ogni $v, w \in \R^3$:

$$v \times w = -\,w \times v.$$

Il motivo: scambiando $v$ e $w$, in ogni componente i due prodotti si scambiano di posto. Per esempio la prima componente diventa $w_2 v_3 - w_3 v_2 = -(v_2 w_3 - v_3 w_2)$. Con i numeri di prima: $w \times v = (-2, 4, -3)$. Conseguenza: $v \times v = -\,v \times v$, quindi $2\,(v \times v) = 0$ e $v \times v = 0$.

**2. Bilinearità.** Il prodotto $\times \colon \R^3 \times \R^3 \to \R^3$ è lineare in ciascuno dei due posti, come il prodotto scalare:

$$(v + v') \times w = v \times w + v' \times w, \qquad (\lambda v) \times w = \lambda\,(v \times w),$$
$$v \times (w + w') = v \times w + v \times w', \qquad v \times (\lambda w) = \lambda\,(v \times w).$$

Il motivo: ogni componente è una somma di termini del tipo «una coordinata di $v$ per una coordinata di $w$», e un'espressione così è lineare in $v$ quando $w$ è fisso (e viceversa). Per esempio $(2v) \times w$ con $v = (1, 2, 2)$, $w = (0, 3, 4)$: $(2, 4, 4) \times (0, 3, 4) = (16 - 12,\ 0 - 8,\ 6 - 0) = (4, -8, 6) = 2\,(2, -4, 3)$.

**I prodotti dei vettori della base canonica**, da tenere a mente:

| $\times$ | $e_1$ | $e_2$ | $e_3$ |
|---|---|---|---|
| $e_1$ | $0$ | $e_3$ | $-e_2$ |
| $e_2$ | $-e_3$ | $0$ | $e_1$ |
| $e_3$ | $e_2$ | $-e_1$ | $0$ |

(Si legge «riga $\times$ colonna»: $e_1 \times e_2 = e_3$.) Il ciclo $e_1 \to e_2 \to e_3 \to e_1$ dà segno $+$, il verso opposto dà segno $-$.

**3. Niente proprietà associativa.** Qui c'è la differenza fondamentale con i prodotti di numeri o di matrici. L'esempio delle dispense:

$$(e_1 \times e_2) \times e_2 = e_3 \times e_2 = -\,e_2 \times e_3 = -e_1, \qquad e_1 \times (e_2 \times e_2) = e_1 \times 0 = 0.$$

Stessi tre vettori, parentesi diverse, risultati diversi.

> [!TRAPPOLA] Tre errori da non fare
> - Scrivere $u \times v \times w$ **senza parentesi**: non ha un significato unico.
> - Scambiare i fattori senza cambiare segno: $w \times v$ è l'**opposto** di $v \times w$.
> - Pensare che $v \times w = 0$ voglia dire $v = 0$ oppure $w = 0$: basta che siano **paralleli**, per esempio $(1, 2, 3) \times (2, 4, 6) = 0$.

## Forma cartesiana e forma parametrica (p. 118)

Il pavimento di una stanza, con l'origine in un angolo, è il piano $z = 0$. Lo puoi descrivere in due modi:

- con una **prova**: «un punto sta sul pavimento se la sua quota $z$ è zero»;
- con una **ricetta**: «i punti del pavimento sono tutti quelli del tipo $(t, s, 0)$, con $t$ e $s$ numeri qualsiasi».

La prima è un'**equazione**, la seconda usa dei **parametri**. Le dispense danno un nome alle due scritture.

> [!DEF] Forma cartesiana e forma parametrica (p. 118)
> Un sottospazio vettoriale di $\R^n$ descritto come **luogo di zeri di un sistema di equazioni lineari omogenee** è detto in **forma cartesiana**. Un sottospazio vettoriale di $\R^n$ descritto come **sottospazio generato da alcuni vettori** è detto in **forma parametrica**. Qualsiasi sottospazio vettoriale di $\R^n$ può essere descritto in entrambi i modi.

L'esempio delle dispense è proprio il pavimento: il piano $W = \{z = 0\}$ di $\R^3$ in forma cartesiana ha l'equazione $z = 0$; in forma parametrica è generato da $e_1$ ed $e_2$:

$$W = \Span(e_1, e_2) = \left\{ t \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + s \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \ \middle|\ s, t \in \R \right\} = \left\{ \begin{pmatrix} t \\ s \\ 0 \end{pmatrix} \ \middle|\ s, t \in \R \right\}.$$

- La forma parametrica è **esplicita**: dice come sono fatti i punti, al variare dei **parametri** ($t$ e $s$).
- La forma cartesiana è **implicita**: descrive $W$ come insieme delle soluzioni di un'equazione (o di un sistema).

Spesso è più comoda la parametrica, proprio perché esplicita, ma dipende da che cosa devi fare:

| Che cosa devi fare | Forma più comoda | Perché |
|---|---|---|
| Decidere se $(2, 5, 0)$ sta in $W$ | cartesiana | sostituisci: $z = 0$, sì |
| Scrivere tre punti di $W$ | parametrica | scegli tre coppie $(t, s)$ |
| Trovare la dimensione | parametrica | conti i generatori indipendenti |
| Intersecare con un altro sottospazio | dipende | lo vedi nella sezione sulle intersezioni |

> [!ESEMPIO] Due passaggi tra le forme, per sottospazi vettoriali
> **Da parametrica a cartesiana.** La retta $L = \Span((1, 2, 3))$ ha i punti $(x, y, z) = (t, 2t, 3t)$. Dalla prima coordinata $t = x$; sostituendo nelle altre, $y = 2x$ e $z = 3x$. Quindi
> $$L = \{2x - y = 0,\ 3x - z = 0\}.$$
> Controllo con il generatore: $2 \cdot 1 - 2 = 0$ e $3 \cdot 1 - 3 = 0$.
>
> **Da cartesiana a parametrica.** Il piano $\{x + y + z = 0\}$: ricavo $x = -y - z$ e lascio libere $y = s$, $z = t$. I punti sono $(-s - t, s, t) = s(-1, 1, 0) + t(-1, 0, 1)$, quindi il piano è $\Span((-1, 1, 0), (-1, 0, 1))$.

## Sottospazi affini (pp. 118–119)

Nel piano $\R^2$ la retta $y = x - 1$ **non passa per l'origine**: $(0, 0)$ non soddisfa l'equazione. Quindi non è un sottospazio vettoriale (che contiene sempre lo zero). Però è la retta $y = x$, che è un sottospazio vettoriale, **spostata** di un passo verso destra: ogni suo punto è $(1, 0)$ più un vettore di $\Span((1, 1))$. Le rette e i piani che non passano per l'origine sono di questo tipo.

> [!DEF] 12.5 · Sottospazio affine (richiamo dalla lezione L12)
> Sia $V$ uno spazio vettoriale. Un **sottospazio affine** di $V$ è un sottoinsieme del tipo
> $$S = \{x + v \mid v \in W\} =: x + W,$$
> dove $x$ è un punto fissato di $V$ e $W \subseteq V$ è un sottospazio vettoriale.

Le dispense ricordano da dove vengono: le soluzioni $S$ di un sistema di equazioni lineari formano **l'insieme vuoto oppure un sottospazio affine** di $\R^n$. Infatti, se $S \neq \emptyset$,

$$S = \{x + v \mid v \in S_0\},$$

dove $x$ è una soluzione **qualsiasi** e $S_0$ è l'insieme delle soluzioni del **sistema omogeneo associato** (stesse equazioni con i termini noti uguali a $0$), che è sempre un sottospazio vettoriale. È quello che hai fatto nella lezione L12: «soluzione particolare più soluzioni dell'omogeneo».

### Quando due scritture danno lo stesso sottospazio

Lo stesso sottospazio affine si può scrivere in molti modi, perché come punto di partenza va bene **qualsiasi** suo punto.

> [!PROP] 23.5
> Gli spazi affini $x + W$ e $x' + W'$ coincidono se e solo se $W = W'$ e $x - x' \in W$.

Pezzo per pezzo:

- $W = W'$: le due scritture devono avere **la stessa direzione** (lo stesso sottospazio vettoriale, anche se scritto con generatori diversi);
- $x - x' \in W$: il vettore che va da un punto di partenza all'altro deve essere **una direzione ammessa**, cioè i due punti di partenza stanno sullo stesso sottospazio affine.

> [!DIM] della Proposizione 23.5 (oltre le dispense)
> Le dispense non la dimostrano; ecco una dimostrazione breve.
>
> ($\Leftarrow$) Supponiamo $W = W'$ e $x - x' \in W$. Un punto di $x + W$ è $x + w$ con $w \in W$, e si riscrive $x + w = x' + \big((x - x') + w\big)$. Il vettore tra parentesi è somma di due vettori di $W$, quindi sta in $W = W'$: il punto sta in $x' + W'$. Scambiando i ruoli (anche $x' - x = -(x - x')$ sta in $W$) si ottiene l'altra inclusione.
>
> ($\Rightarrow$) Supponiamo $x + W = x' + W'$ e chiamiamo $S$ questo insieme. Le **differenze** $p - q$ fra due punti di $S$ sono esattamente i vettori di $W$: se $p = x + w_1$ e $q = x + w_2$, allora $p - q = w_1 - w_2 \in W$; e ogni $w \in W$ è la differenza $(x + w) - x$. Lo stesso ragionamento, partendo da $x'$, dice che le differenze sono esattamente i vettori di $W'$. Quindi $W = W'$. Infine $x = x + 0 \in S = x' + W'$, cioè $x - x' \in W' = W$. $\square$

> [!ESEMPIO] 23.6
> Se $W = \Span\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ in $\R^2$, le due rette affini
> $$r_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + W = \left\{ \begin{pmatrix} t + 1 \\ t \end{pmatrix} \ \middle|\ t \in \R \right\},$$
> $$r_2 = \begin{pmatrix} 0 \\ -1 \end{pmatrix} + W = \left\{ \begin{pmatrix} u \\ u - 1 \end{pmatrix} \ \middle|\ u \in \R \right\}$$
> sono in realtà la stessa retta, di equazione $y = x - 1$.

Controlliamolo in tre modi:

1. **con la Proposizione 23.5**: la giacitura è la stessa, e $(1, 0) - (0, -1) = (1, 1) \in W$;
2. **con l'equazione**: in $r_1$ il punto generico $(t + 1, t)$ ha $y = t = (t + 1) - 1 = x - 1$; in $r_2$ il punto $(u, u - 1)$ ha $y = u - 1 = x - 1$;
3. **con i parametri**: il punto di $r_1$ con parametro $t$ è quello di $r_2$ con parametro $u = t + 1$.

Invece $(0, 0) + W$, cioè la retta $y = x$, è **diversa**: $(1, 0) - (0, 0) = (1, 0)$ non è un multiplo di $(1, 1)$. È una retta **parallela** a $r_1$.

```grafico
titolo: La retta $y = x - 1$ è la retta $W$ spostata: si può partire da $(1, 0)$ oppure da $(0, -1)$
x: -2.5 3.5
y: -2.5 3
retta: 0 0 1 1 | grigio | tratteggio | $W$ | no
retta: 1 0 2 1 | accento | spesso | $r_1 = r_2$ | se
punto: 1 0 | blu | $(1, 0)$ | se
punto: 0 -1 | ambra | $(0, -1)$ | no
vettore: 1 0 2 1 | viola | $(1, 1)$ | no
```

### Giacitura e dimensione

> [!DEF] 23.7
> Nella descrizione di uno spazio affine $S$ come $x + W$, lo spazio vettoriale $W$ è determinato da $S$ ed è detto la **giacitura** di $S$, indicata con $\operatorname{giac}(S)$. Il punto $x$ invece è un **qualsiasi** punto di $S$. La **dimensione** di $S$ è la dimensione della giacitura $W$.

La Proposizione 23.5 spiega perché la definizione ha senso: il punto $x$ si può cambiare, la giacitura no. La giacitura è l'insieme dei vettori $\overrightarrow{PQ} = Q - P$ con $P, Q \in S$: le **direzioni** in cui ci si può muovere restando dentro $S$.

Anche i sottospazi affini hanno le due forme.

- **Forma parametrica** (esplicita):
$$S = x + \Span(v_1, \dots, v_k) = \{x + t_1 v_1 + \dots + t_k v_k \mid t_1, \dots, t_k \in \R\},$$
dove $v_1, \dots, v_k$ formano una **base** della giacitura. In questo caso $\dim S = k$: un parametro per ogni vettore della base.
- **Forma cartesiana** (implicita): $S = \{x \in \R^n \mid Ax = b\}$, con $A \in M(m, n)$ e $b \in \R^m$. Per il **teorema di Rouché–Capelli** (Teorema 12.6):
$$S \neq \emptyset \iff \rk A = \rk(A \mid b), \qquad \text{e in questo caso } \dim S = n - \rk A.$$

> [!ESEMPIO] Contare le dimensioni con Rouché–Capelli
> **Un sistema che dà una retta.** $S = \{x + y + z = 3,\ x - y = 1\}$ in $\R^3$. Le righe $(1, 1, 1)$ e $(1, -1, 0)$ di $A$ non sono proporzionali, quindi $\rk A = 2 = \rk(A \mid b)$ e $\dim S = 3 - 2 = 1$: una retta. Per scriverla: dalla seconda equazione $x = 1 + y$; nella prima $1 + y + y + z = 3$, cioè $z = 2 - 2y$. Con $y = t$:
> $$S = \{(1 + t,\ t,\ 2 - 2t)\} = (1, 0, 2) + \Span((1, 1, -2)).$$
>
> **Un sistema senza soluzioni.** $\{x + y + z = 1,\ x + y + z = 2\}$: sottraendo le equazioni si ottiene $0 = 1$. Qui $\rk A = 1$ ma $\rk(A \mid b) = 2$, e $S = \emptyset$. Geometricamente: due piani **paralleli** distinti.

> [!NOTA] Collegamento con l'informatica: classificatori lineari (p. 119)
> Le dispense collegano questa lezione al *machine learning*. Un **iperpiano** affine di $\R^n$ (un sottospazio affine di dimensione $n - 1$: una retta in $\R^2$, un piano in $\R^3$) si può scrivere come
> $${}^t w\, x + b = 0,$$
> con $w \in \R^n$ non nullo e $b \in \R$. L'iperpiano divide lo spazio in due **semispazi**: quello dove ${}^t w\, x + b$ è positivo e quello dove è negativo. Un semplice **classificatore lineare** assegna a un vettore di dati $x$ una delle due classi guardando il **segno** di ${}^t w\, x + b$. Il vettore $w$ è **ortogonale** all'iperpiano di separazione. La stessa geometria sta alla base del percettrone e delle macchine a vettori di supporto nella loro forma lineare.

> [!ESEMPIO] Un classificatore in $\R^2$
> Con $w = (1, 1)$ e $b = -3$ l'iperpiano è la retta $x + y - 3 = 0$. Classifichiamo tre punti calcolando $x + y - 3$:
> - $(1, 1)$: $1 + 1 - 3 = -1 < 0$, classe «negativa»;
> - $(3, 2)$: $3 + 2 - 3 = 2 > 0$, classe «positiva»;
> - $(1, 2)$: $1 + 2 - 3 = 0$, sta proprio sulla retta di separazione.

```grafico
titolo: La retta $x + y = 3$ separa i punti con $x + y - 3 < 0$ da quelli con $x + y - 3 > 0$; il vettore $w = (1, 1)$ le è ortogonale
x: -0.5 4.5
y: -0.5 4
retta: 3 0 0 3 | accento | $x + y = 3$ | ne
punto: 1 1 | rosa | $(1, 1)$ | so
punto: 3 2 | verde | $(3, 2)$ | ne
punto: 1 2 | grigio | $(1, 2)$ | so
vettore: 1.5 1.5 2.3 2.3 | viola | spesso | $w$ | e
```

## Rette e piani nello spazio (pp. 119–120)

I sottospazi affini di $\R^3$ sono di quattro tipi. Il numero di equazioni indipendenti necessarie è $3 - \dim S$ (Rouché–Capelli con $n = 3$).

| Dimensione | Che cos'è | Forma parametrica | Forma cartesiana |
|---|---|---|---|
| 0 | un punto | $P_0$ | 3 equazioni indipendenti |
| 1 | una retta | $P_0 + t v$ | 2 equazioni indipendenti |
| 2 | un piano | $P_0 + t v_1 + s v_2$ | 1 equazione |
| 3 | tutto $\R^3$ | $P_0 + t e_1 + s e_2 + u e_3$ | nessuna equazione |

- Un **piano** affine $\pi$ in $\R^3$ è descritto da **un'equazione** $\pi = \{ax + by + cz = d\}$ (con $(a, b, c) \neq 0$), oppure da un punto e due vettori indipendenti che generano la giacitura: $\pi = \{P_0 + t v_1 + s v_2 \mid t, s \in \R\}$.
- Una **retta** affine $r$ in $\R^3$ è descritta da **due** equazioni di quel tipo, oppure, più agevolmente, in forma parametrica: $r = \{P_0 + t v \mid t \in \R\}$, con $v \neq 0$ (il **vettore direzione**).

> [!TRAPPOLA] Una sola equazione non basta per una retta nello spazio
> In $\R^2$ la retta $x + 2y = 3$ ha un'equazione sola. In $\R^3$ la stessa equazione $x + 2y = 3$ descrive un **piano** (la $z$ è libera): per una retta nello spazio servono **due** equazioni indipendenti.

> [!IDEA] Il vettore dei coefficienti è ortogonale al piano
> Prendi due punti $P$ e $Q$ del piano $\{ax + by + cz = d\}$ e chiama $n = (a, b, c)$. Allora $\langle n, P \rangle = d$ e $\langle n, Q \rangle = d$, quindi
> $$\langle n, Q - P \rangle = d - d = 0.$$
> Ogni vettore della giacitura è ortogonale a $n$: per questo $n$ si chiama **vettore normale** del piano. La giacitura è proprio il piano vettoriale $\{ax + by + cz = 0\}$, formato dai vettori ortogonali a $n$. Questo fatto tornerà di continuo nella lezione L24 (angoli e distanze).

### Da cartesiana a parametrica

Si risolve il sistema $Ax = b$, per esempio con l'algoritmo di Gauss–Jordan (lezione L11): le variabili libere diventano i parametri.

> [!ESEMPIO] Un piano e una retta, da cartesiana a parametrica
> **Il piano $x + 2y - z = 8$.** Ricavo $z = x + 2y - 8$ e lascio libere $x = s$, $y = t$:
> $$(s,\ t,\ s + 2t - 8) = (0, 0, -8) + s(1, 0, 1) + t(0, 1, 2).$$
> Controllo: $(0, 0, -8)$ soddisfa $0 + 0 - (-8) = 8$; i due vettori soddisfano l'equazione **omogenea**: $1 + 0 - 1 = 0$ e $0 + 2 - 2 = 0$.
>
> **La retta $\{x + y + z = 3,\ x - y = 1\}$** l'abbiamo già risolta sopra: $(1, 0, 2) + \Span((1, 1, -2))$.

### Da parametrica a cartesiana: il trucco del prodotto vettoriale

A volte serve il contrario. Per i **piani di $\R^3$** c'è un metodo rapido. Sia $\pi = \{P_0 + t v_1 + u v_2\}$ con $v_1, v_2$ indipendenti:

1. calcola $v_1 \times v_2$: avrà tre coefficienti $a, b, c$;
2. il piano è $\pi = \{ax + by + cz = d\}$ per un certo $d \in \R$;
3. trovi $d$ imponendo che $P_0 \in \pi$, cioè sostituendo le coordinate di $P_0$.

Perché funziona: $n = v_1 \times v_2$ è ortogonale a $v_1$ e $v_2$ (Proposizione 22.15). Per ogni punto $P = P_0 + t v_1 + u v_2$ del piano
$$\langle n, P \rangle = \langle n, P_0 \rangle + t \langle n, v_1 \rangle + u \langle n, v_2 \rangle = \langle n, P_0 \rangle,$$
quindi tutti i punti del piano soddisfano $ax + by + cz = d$ con $d = \langle n, P_0 \rangle$. Ed $n \neq 0$ perché $v_1, v_2$ sono indipendenti (Proposizione 22.16).

> [!ESEMPIO] 23.8
> Consideriamo
> $$\pi = \left\{ \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} + t \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} + s \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} \right\}.$$
> Troviamo
> $$\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} \times \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}.$$
> Quindi $\pi = \{x + 2y - z = d\}$ per qualche $d \in \R$, che determiniamo imponendo
> $$\begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} \in \pi \ \Rightarrow\ 1 + 4 + 3 = d,$$
> e quindi $d = 8$. Abbiamo trovato un'equazione cartesiana per il piano: $\pi = \{x + 2y - z = 8\}$.

I conti del prodotto vettoriale, riga per riga (righe affiancate $(1, 2)$, $(0, -1)$, $(1, 0)$):

- prima componente, copro la prima riga: $0 \cdot 0 - (-1) \cdot 1 = 1$;
- seconda, copro la seconda riga: $1 \cdot 0 - 2 \cdot 1 = -2$, e cambio segno: $2$;
- terza, copro la terza riga: $1 \cdot (-1) - 2 \cdot 0 = -1$.

Controllo finale con un altro punto del piano, per esempio $t = s = 1$: $P = (1 + 1 + 2,\ 2 + 0 - 1,\ -3 + 1 + 0) = (4, 1, -2)$, e $4 + 2 \cdot 1 - (-2) = 8$.

Nota una cosa: nell'esempio precedente la stessa equazione $x + 2y - z = 8$ ci aveva dato un'**altra** forma parametrica, $(0, 0, -8) + s(1, 0, 1) + t(0, 1, 2)$. Nessuna contraddizione, per la Proposizione 23.5: le giaciture coincidono, perché $(2, -1, 0) = 2\,(1, 0, 1) - (0, 1, 2)$, e la differenza dei punti di partenza $(1, 2, -3) - (0, 0, -8) = (1, 2, 5) = (1, 0, 1) + 2\,(0, 1, 2)$ sta nella giacitura.

```widget spazio
titolo: Il piano dell'Esempio 23.8 con il suo vettore normale
modo: piano
piano: 1 2 -1 = 8
punto: 4 1 -2
```

Il piano viola è $x + 2y - z = 8$ e la freccia $n$ è il vettore normale $(1, 2, -1)$. Il punto $P = (4, 1, -2)$ sta sul piano: lo strumento dice che la sua distanza dal piano è $0$. Prova a cambiare $d$ (per esempio $x + 2y - z = 0$): il piano si sposta **parallelamente a sé stesso**, perché la giacitura non cambia. La distanza di un punto da un piano la studierai nella lezione L24.

> [!OLTRE] Rette da parametrica a cartesiana, e il piano per tre punti
> **Una retta.** Per $r = (1, 2, 3) + t(2, 1, -1)$ si **elimina il parametro**: $x = 1 + 2t$, $y = 2 + t$, $z = 3 - t$. Dalla seconda $t = y - 2$; sostituendo, $x = 1 + 2(y - 2)$, cioè $x - 2y = -3$, e $z = 3 - (y - 2)$, cioè $y + z = 5$. Quindi $r = \{x - 2y = -3,\ y + z = 5\}$. Controllo con $t = 1$, punto $(3, 3, 2)$: $3 - 6 = -3$ e $3 + 2 = 5$.
>
> **Un piano per tre punti non allineati** $P_0, P_1, P_2$: è $P_0 + t\,\overrightarrow{P_0P_1} + s\,\overrightarrow{P_0P_2}$, e poi si usa il prodotto vettoriale come sopra (Martelli, Proposizione 9.2.12). Con $A, B, C$ dell'esempio del triangolo: $\overrightarrow{AB} \times \overrightarrow{AC} = (6, 3, 2)$ e $d = 6 \cdot 1 = 6$, quindi il piano è $6x + 3y + 2z = 6$.

## Intersezioni (pp. 120–121)

Due sottospazi **vettoriali** si incontrano sempre, almeno nell'origine. Due sottospazi **affini** no: i piani $x + y + z = 1$ e $x + y + z = 2$ non hanno punti in comune, perché nessun punto può avere $x + y + z$ uguale a $1$ e a $2$ nello stesso momento.

> [!DEF] Sottospazi incidenti (p. 120)
> Due sottospazi affini $S, S' \subseteq \R^n$ sono **incidenti** se $S \cap S' \neq \emptyset$.

Se sono incidenti, prendi un punto $x \in S \cap S'$ e scrivi entrambi a partire da lì: $S = x + W$ e $S' = x + W'$ (si può, per la Definizione 23.7). Un punto $y$ sta in entrambi esattamente quando $y - x \in W$ e $y - x \in W'$, cioè $y - x \in W \cap W'$. Quindi

$$S \cap S' = x + (W \cap W').$$

In particolare **l'intersezione, se non è vuota, è sempre un sottospazio affine**, con giacitura $W \cap W'$.

### Tre casi, tre metodi

Come si calcola l'intersezione dipende dalla forma in cui sono dati $S$ e $S'$. L'Esempio 23.9 delle dispense mostra i tre casi; li svolgiamo fino in fondo.

> [!ESEMPIO] 23.9 · Primo caso: tutte e due in forma cartesiana
> Se $S$ e $S'$ sono descritti in forma cartesiana, la loro intersezione $S \cap S'$ è descritta in forma cartesiana **unendo le equazioni**. Per esempio, se $S = \{x + y = 1\}$ e $S' = \{x - y + z = 3\}$ sono due piani in $\R^3$, la loro intersezione è l'insieme delle soluzioni di
> $$\begin{cases} x + y = 1 \\ x - y + z = 3. \end{cases}$$

Le dispense si fermano al sistema; risolviamolo. Dalla prima $x = 1 - y$. Sostituisco nella seconda: $1 - y - y + z = 3$, cioè $z = 2 + 2y$. Con $y = t$:

$$S \cap S' = \{(1 - t,\ t,\ 2 + 2t)\} = (1, 0, 2) + \Span((-1, 1, 2)).$$

È una **retta**. Controllo: $(1, 0, 2)$ soddisfa $1 + 0 = 1$ e $1 - 0 + 2 = 3$. Il vettore $(-1, 1, 2)$ soddisfa le equazioni omogenee: $-1 + 1 = 0$ e $-1 - 1 + 2 = 0$.

> [!ESEMPIO] 23.9 · Secondo caso: una cartesiana e una parametrica
> Se $S$ è descritto in forma cartesiana e $S'$ in forma parametrica, per trovare $S \cap S'$ basta **sostituire il punto generico** di $S'$ nelle equazioni di $S$ e trovare i parametri che le soddisfano. Per esempio, se $S = \{x + y - z = 2\}$ è un piano in $\R^3$ e
> $$S' = \left\{ \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} + t \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} \right\} = \left\{ \begin{pmatrix} 1 + t \\ -1 + 2t \\ 1 - 3t \end{pmatrix} \right\}$$
> è una retta, si sostituisce $x = 1 + t$, $y = -1 + 2t$, $z = 1 - 3t$ nell'equazione di $S$:
> $$(1 + t) + (-1 + 2t) - (1 - 3t) = 2 \iff -1 + 6t = 2 \iff t = \tfrac 12,$$
> e l'intersezione è il punto
> $$S \cap S' = \left\{ \begin{pmatrix} 3/2 \\ 0 \\ -1/2 \end{pmatrix} \right\}.$$

Il punto viene da $t = \frac 12$: $\left(1 + \frac 12,\ -1 + 1,\ 1 - \frac 32\right) = \left(\frac 32, 0, -\frac 12\right)$. Controllo nel piano: $\frac 32 + 0 + \frac 12 = 2$. Attenzione al segno: $-(1 - 3t) = -1 + 3t$.

> [!ESEMPIO] 23.9 · Terzo caso: tutte e due in forma parametrica
> Se $S$ e $S'$ sono entrambi in forma parametrica, si **eguaglia il punto generico** di $S$ con quello di $S'$ e si trova quali parametri risolvono il sistema. Le dispense avvertono che può essere più laborioso.

Un esempio nostro. Siano $r = (1, 0, 1) + t(1, 1, 0)$ e $r' = (0, 3, -1) + s(1, -1, 1)$. Eguagliando le coordinate:

$$\begin{cases} 1 + t = s \\ t = 3 - s \\ 1 = -1 + s. \end{cases}$$

Dalla terza $s = 2$; dalla prima $t = s - 1 = 1$; la seconda va **controllata**: $t = 1$ e $3 - s = 1$, torna. Le rette si incontrano nel punto $r(1) = (2, 1, 1)$, e infatti anche $r'(2) = (0 + 2,\ 3 - 2,\ -1 + 2) = (2, 1, 1)$.

> [!METODO] Come si interseca
> 1. **Cartesiana con cartesiana**: metti tutte le equazioni in un unico sistema e risolvilo con Gauss; la soluzione in forma parametrica è l'intersezione.
> 2. **Cartesiana con parametrica**: sostituisci il punto generico (con i parametri) nelle equazioni; trovi i parametri e li rimetti nel punto generico.
> 3. **Parametrica con parametrica**: eguaglia i punti generici, con **nomi diversi** per i parametri ($t$ e $s$, mai $t$ e $t$); risolvi e **controlla tutte le equazioni**. Se una equazione non torna, l'intersezione è vuota.
> 4. In ogni caso, alla fine **sostituisci** il punto trovato nelle due descrizioni: è il controllo più economico che esista.

Con la calcolatrice qui sotto puoi rifare il primo caso: la matrice completa del sistema dell'Esempio 23.9 ha righe $(1, 1, 0 \mid 1)$ e $(1, -1, 1 \mid 3)$. Lo strumento riduce con Gauss–Jordan e scrive le soluzioni con un parametro.

```widget gauss
titolo: L'intersezione dei due piani dell'Esempio 23.9
matrice: 1 1 0 1; 1 -1 1 3
modo: sistema
```

Lo strumento sceglie come parametro la terza incognita e trova $(2, -1, 0) + t\left(-\frac 12, \frac 12, 1\right)$. Sembra un risultato diverso dal nostro, ma è la **stessa retta**, per la Proposizione 23.5: la direzione è metà di $(-1, 1, 2)$, e $(2, -1, 0) - (1, 0, 2) = (1, -1, -2)$ sta nella giacitura.

### Quando l'intersezione è sicuramente non vuota

L'ultima proposizione della lezione dà una condizione sulle **giaciture** che garantisce l'incontro.

> [!PROP] 23.10
> Se $\operatorname{giac}(S) + \operatorname{giac}(S') = \R^n$, allora i sottospazi $S$ e $S'$ sono incidenti.

Pezzo per pezzo:

- $\operatorname{giac}(S) + \operatorname{giac}(S')$ è la **somma** dei due sottospazi vettoriali (lezione L07): tutti i vettori $w + w'$ con $w \in \operatorname{giac}(S)$ e $w' \in \operatorname{giac}(S')$;
- l'ipotesi dice che, muovendosi prima lungo $S$ e poi lungo $S'$, si raggiunge **qualsiasi** vettore di $\R^n$;
- la tesi: $S \cap S' \neq \emptyset$. Non dice **dove** si incontrano: per quello bisogna fare i conti.

> [!DIM] della Proposizione 23.10 (dal libro di Martelli)
> 1. Scrivo $S = \{P + t_1 v_1 + \dots + t_k v_k\}$ e $S' = \{Q + u_1 w_1 + \dots + u_h w_h\}$, con $v_i$ base di $\operatorname{giac}(S)$ e $w_j$ base di $\operatorname{giac}(S')$.
> 2. I due sottospazi sono incidenti se e solo se il sistema $P + t_1 v_1 + \dots + t_k v_k = Q + u_1 w_1 + \dots + u_h w_h$ nelle incognite $t_i, u_j$ ha una soluzione.
> 3. Per ipotesi $v_1, \dots, v_k, w_1, \dots, w_h$ generano $\R^n$. Quindi il vettore $Q - P$ è una loro combinazione lineare: $Q - P = a_1 v_1 + \dots + a_k v_k + b_1 w_1 + \dots + b_h w_h$.
> 4. Allora $t_i = a_i$ e $u_j = -b_j$ risolvono il sistema: $P + \sum a_i v_i = Q - \sum b_j w_j$. $\square$

> [!ESEMPIO] Due applicazioni in $\R^3$
> **Due piani con vettori normali non paralleli**, per esempio $x + y + z = 1$ e $x - y = 5$. Le giaciture sono due piani vettoriali **diversi**, quindi la loro somma contiene strettamente un piano: ha dimensione $3$ ed è tutto $\R^3$. Per la Proposizione 23.10 i piani si incontrano (in una retta).
>
> **Una retta e un piano**, con la direzione della retta fuori dalla giacitura del piano: $r = \{t(1, 1, 1)\}$ e $\pi = \{x + y + z = 7\}$. Il vettore $(1, 1, 1)$ non sta nella giacitura $\{x + y + z = 0\}$, perché $1 + 1 + 1 = 3 \neq 0$. Allora la giacitura del piano (dimensione 2) e la direzione della retta insieme generano $\R^3$, e c'è un punto comune. Sostituendo: $3t = 7$, $t = \frac 73$, punto $\left(\frac 73, \frac 73, \frac 73\right)$.

> [!TRAPPOLA] Il viceversa è falso
> Se la somma delle giaciture **non** è $\R^n$, la proposizione non dice nulla: l'intersezione può esserci oppure no. Due rette di $\R^3$ hanno giaciture di dimensione $1$, la cui somma ha dimensione al massimo $2$: la proposizione non si applica mai. Eppure l'asse $x$ e l'asse $y$ si incontrano (nell'origine), mentre la retta $\{t(1, -1, 0)\}$ e il piano $x + y + z = 7$ no: sostituendo si ottiene $0 = 7$.

> [!OLTRE] Le posizioni reciproche in $\R^3$
> Mettendo insieme giaciture e intersezioni si ottiene questa tabella (Martelli, §9.2.5 e §9.2.7). Due sottospazi affini sono **paralleli** se la giacitura di uno è contenuta in quella dell'altro; due rette che non sono né incidenti né parallele si dicono **sghembe**.
>
> | Coppia | Giaciture | Intersezione |
> |---|---|---|
> | due piani | normali non proporzionali | una retta |
> | due piani | normali proporzionali | vuota (paralleli distinti) oppure lo stesso piano |
> | retta e piano | direzione fuori dalla giacitura del piano | un punto |
> | retta e piano | direzione dentro la giacitura | vuota (retta parallela) oppure tutta la retta |
> | due rette | direzioni proporzionali | vuota (parallele distinte) oppure la stessa retta |
> | due rette | direzioni non proporzionali | un punto (incidenti) oppure vuota (**sghembe**) |
>
> Le rette sghembe esistono solo dallo spazio in su: nel piano due rette non parallele si incontrano sempre (in $\R^2$ le due giaciture diverse sommano a $\R^2$, e vale la Proposizione 23.10).

> [!OLTRE] Dove trovarlo nel libro
> Nel libro di Martelli: prodotto vettoriale e sue proprietà nel §9.1 (pp. 267–272: identità di Lagrange Prop. 9.1.4, area Prop. 9.1.5 e Cor. 9.1.6, base positiva Prop. 9.1.7, prodotto triplo Esercizio 9.1.8, volume del parallelepipedo Prop. 9.1.9); forma parametrica e cartesiana nel §9.2.1 (pp. 272–274, con l'Esempio 9.2.3 che è il nostro 23.8); intersezioni nel §9.2.3 (pp. 275–276, Esempio 9.2.6 e Proposizione 9.2.7); sottospazio generato da punti, parallelismo e posizioni reciproche nei §9.2.4, §9.2.5 e §9.2.7 (pp. 277–283).

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha **10 quiz** a 5 risposte (una sola giusta) e **2 problemi da 11 punti**, corretti solo con **almeno 6 quiz giusti**; dura **2 ore**, **senza calcolatrice**, e si può portare solo un foglio di **4 facciate scritte a mano**. Gli appelli 2026/27 sono il **22/01/2027** e il **05/02/2027** alle 14:00. Tutti i dettagli nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026.** Le intersezioni sono tra gli argomenti più frequenti in assoluto:

- **quiz sull'intersezione retta–piano**: appello del 07/02/2025 (domanda 10) e del 03/07/2026 (domanda 8); le risposte proposte sono sempre del tipo «un punto $P = \dots$», «tutta la retta», «tutto il piano», «vuota»;
- **quiz sull'intersezione di due rette in forma parametrica**: appelli del 03/06/2025 e del 10/07/2025 (domanda 10 in entrambi);
- **problemi aperti**: scrivere la retta $r = \pi_1 \cap \pi_2$ nella forma $P + \Span(v)$ (24/01/2024, 10/07/2024, 06/09/2024, 15/01/2026), dimostrare che una retta e un piano sono incidenti (24/01/2024, 10/07/2024), trovare l'intersezione di tre piani (06/09/2024, 15/01/2026), piani o rette che dipendono da un parametro $k$ (03/06/2025, 02/09/2025).

Un quiz vero, come esempio (appello del 07/02/2025, domanda 10): *l'intersezione della retta $r = {}^t(2, -2, 0) + s\,{}^t(1, -2, 1)$ con il piano $\pi = \{2x - 2y + z = 1\}$ è: (a) tutto il piano; (b) $P = {}^t(-1, -1, 1)$; (c) $P = {}^t(1, 0, -1)$; (d) non hanno un'intersezione; (e) tutta la retta.*

Svolgimento: il punto generico di $r$ è $(2 + s,\ -2 - 2s,\ s)$. Sostituisco: $2(2 + s) - 2(-2 - 2s) + s = 4 + 2s + 4 + 4s + s = 8 + 7s$. L'equazione $8 + 7s = 1$ dà $s = -1$ e il punto $(1, 0, -1)$: risposta (c). Controllo: $2 - 0 - 1 = 1$. Il trucco da quiz: si possono anche **sostituire le risposte** (b) e (c) nell'equazione del piano e nella retta, ed escludere (a) e (e) guardando il prodotto scalare fra direzione e normale, $\langle (1, -2, 1), (2, -2, 1) \rangle = 2 + 4 + 1 = 7 \neq 0$: la retta non è parallela al piano, quindi l'intersezione è **un punto**.

> [!METODO] La retta intersezione di due piani, nella forma $P + \Span(v)$
> 1. Metti le due equazioni in un sistema e riducilo con Gauss (o ricava una variabile e sostituisci).
> 2. Scegli come parametro la variabile libera e scrivi il punto generico.
> 3. Separa la parte costante ($P$) da quella con il parametro ($t\,v$).
> 4. Controllo veloce: $v$ deve essere proporzionale a $n_1 \times n_2$, il prodotto vettoriale dei due vettori normali (è ortogonale a entrambi, quindi sta in tutte e due le giaciture); $P$ deve soddisfare le due equazioni.

> [!METODO] Dimostrare che una retta e un piano sono incidenti
> Due strade, entrambe accettate:
> - **con la Proposizione 23.10**: se la direzione $v$ della retta non sta nella giacitura del piano (per un piano $ax + by + cz = d$: $\langle v, (a, b, c) \rangle \neq 0$; per un piano dato con due generatori $v_1, v_2$: $\det(v_1 \mid v_2 \mid v) \neq 0$), allora le giaciture sommano a $\R^3$ e c'è intersezione;
> - **con il conto**: sostituisci il punto generico della retta nell'equazione del piano e trova il parametro. Se esiste, sono incidenti, e hai anche il punto.

**Errori da evitare.**

- Usare lo **stesso nome** per i parametri di due rette diverse: il sistema diventa sbagliato.
- Nell'intersezione di due rette, non controllare la **terza** equazione: due equazioni su tre possono tornare anche se le rette sono sghembe.
- Scambiare il **vettore normale** di un piano con un vettore **del** piano: $(a, b, c)$ è ortogonale al piano, non ci sta dentro.
- Scrivere una retta di $\R^3$ con una sola equazione.
- Il segno $-$ della seconda componente del prodotto vettoriale.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la formula di $v \times w$ con lo schema «copri la riga, il segno meno al centro»; $\lVert v \times w \rVert = \text{area del parallelogramma}$ e $\frac 12 \lVert \overrightarrow{AB} \times \overrightarrow{AC} \rVert = \text{area del triangolo } ABC$; la tabella dei tipi di sottospazi di $\R^3$ (quante equazioni, quanti parametri); il metodo $n = v_1 \times v_2$, $d = \langle n, P_0 \rangle$; i tre metodi per le intersezioni; la Proposizione 23.10.

## Quiz

```quiz
D: Quanto vale il prodotto vettoriale $(1, 0, 1) \times (2, -1, 0)$?
+ $(1, 2, -1)$
- $(-1, -2, 1)$
- $(1, -2, -1)$
- $(2, 0, 0)$
- $(-1, 2, 1)$
= Righe affiancate $(1, 2)$, $(0, -1)$, $(1, 0)$. Prima componente $0 \cdot 0 - 1 \cdot (-1) = 1$; seconda $-(1 \cdot 0 - 1 \cdot 2) = 2$; terza $1 \cdot (-1) - 0 \cdot 2 = -1$. È il conto dell'Esempio 23.8. $(-1, -2, 1)$ è $(2, -1, 0) \times (1, 0, 1)$, con i fattori scambiati; $(1, -2, -1)$ dimentica il segno meno al centro; $(2, 0, 0)$ moltiplica le coordinate una per una.

D: Qual è l'area del parallelogramma con lati $v = (1, 1, 0)$ e $w = (0, 1, 1)$?
+ $\sqrt 3$
- $\frac{\sqrt 3}{2}$
- $3$
- $1$
- $\sqrt 2$
= $v \times w = (1 \cdot 1 - 0 \cdot 1,\ -(1 \cdot 1 - 0 \cdot 0),\ 1 \cdot 1 - 1 \cdot 0) = (1, -1, 1)$, di norma $\sqrt{1 + 1 + 1} = \sqrt 3$. Per il Corollario 23.3 è l'area. $\frac{\sqrt 3}{2}$ sarebbe l'area del triangolo con lati $v$ e $w$; $3$ è il quadrato della norma.

D: Quale di queste affermazioni sul prodotto vettoriale in $\R^3$ è **falsa**?
+ $(u \times v) \times w = u \times (v \times w)$ per ogni $u, v, w$
- $v \times w = -\,w \times v$ per ogni $v, w$
- $v \times v = 0$ per ogni $v$
- $v \times w$ è ortogonale sia a $v$ sia a $w$
- $(2v) \times w = 2\,(v \times w)$ per ogni $v, w$
= Il prodotto vettoriale non è associativo: $(e_1 \times e_2) \times e_2 = e_3 \times e_2 = -e_1$, mentre $e_1 \times (e_2 \times e_2) = e_1 \times 0 = 0$. Le altre sono l'anticommutatività, la sua conseguenza $v \times v = 0$, la Proposizione 22.15 e la bilinearità.

D: I piani $\pi_1 = \{x + y + z = 3\}$ e $\pi_2 = \{x - y = 1\}$ si intersecano nella retta:
+ $(1, 0, 2) + \Span((1, 1, -2))$
- $(1, 0, 2) + \Span((1, 1, 1))$
- $(0, 0, 3) + \Span((1, 1, -2))$
- $(1, 0, 2) + \Span((1, -1, 0))$
- $(2, 1, 1) + \Span((1, 1, -2))$
= Dalla seconda equazione $x = 1 + y$; nella prima $1 + 2y + z = 3$, cioè $z = 2 - 2y$. Con $y = t$: $(1 + t, t, 2 - 2t)$. Controllo: $(1, 1, 1) \times (1, -1, 0) = (1, 1, -2)$. Le direzioni $(1, 1, 1)$ e $(1, -1, 0)$ sono i vettori normali, che sono ortogonali ai piani; $(0, 0, 3)$ non sta su $\pi_2$; $(2, 1, 1)$ non sta su $\pi_1$. Simile agli appelli del 24/01/2024 e del 10/07/2024 (problema 12, punto 1).

D: Il piano $\pi = \{s\,e_1 + t\,(e_2 + e_3) \mid s, t \in \R\}$ in forma cartesiana è:
+ $\{y - z = 0\}$
- $\{x = 0\}$
- $\{y + z = 0\}$
- $\{x + y + z = 0\}$
- $\{x - y + z = 0\}$
= Il piano passa per l'origine ed è generato da $(1, 0, 0)$ e $(0, 1, 1)$. Il vettore normale è $(1, 0, 0) \times (0, 1, 1) = (0 \cdot 1 - 0 \cdot 1,\ -(1 \cdot 1 - 0 \cdot 0),\ 1 \cdot 1 - 0 \cdot 0) = (0, -1, 1)$, quindi $-y + z = 0$, cioè $y = z$. Controllo: $e_1$ e $e_2 + e_3$ hanno $y = z$. Simile all'appello del 24/01/2024 (problema 12), dove il piano $\pi_3$ era dato proprio così.

D: Il piano $(0, 1, 1) + t(1, 0, 0) + s(0, 1, 2)$ ha un'equazione della forma $2y - z = d$. Quanto vale $d$?
N: 1
= Il vettore normale è $(1, 0, 0) \times (0, 1, 2) = (0, -2, 1)$, cioè l'equazione è $-2y + z = \text{cost}$, equivalente a $2y - z = d$. Sostituendo il punto $(0, 1, 1)$: $d = 2 \cdot 1 - 1 = 1$.

D: Quale di queste rette di $\R^2$ **coincide** con $r = (1, 2) + \Span((2, 1))$?
+ $(5, 4) + \Span((-4, -2))$
- $(2, 1) + \Span((2, 1))$
- $(1, 2) + \Span((1, 2))$
- $(0, 0) + \Span((2, 1))$
- $(3, 2) + \Span((2, 1))$
= Proposizione 23.5: serve la stessa giacitura e che la differenza dei punti stia nella giacitura. $\Span((-4, -2)) = \Span((2, 1))$ e $(5, 4) - (1, 2) = (4, 2) = 2\,(2, 1)$: stessa retta. Per le altre: $(2, 1) - (1, 2) = (1, -1)$, $(0, 0) - (1, 2)$ e $(3, 2) - (1, 2) = (2, 0)$ non sono multipli di $(2, 1)$ (rette parallele distinte); $(1, 2) + \Span((1, 2))$ ha un'altra giacitura.

D: L'intersezione della retta $r = (1, 1, 0) + t\,(1, 0, 2)$ con il piano $\pi = \{x + y + z = 5\}$ è:
+ il punto $(2, 1, 2)$
- il punto $(3, 1, 4)$
- il punto $(1, 1, 0)$
- tutta la retta $r$
- vuota
= Sostituisco $(1 + t, 1, 2t)$: $1 + t + 1 + 2t = 5$, cioè $3t = 3$ e $t = 1$. Il punto è $(2, 1, 2)$; controllo $2 + 1 + 2 = 5$. La direzione $(1, 0, 2)$ ha prodotto scalare $3 \neq 0$ con la normale $(1, 1, 1)$: la retta non è parallela al piano, quindi non può essere né vuota né tutta la retta. Simile agli appelli del 07/02/2025 (domanda 10) e del 03/07/2026 (domanda 8).

D: L'intersezione delle rette $r = (1, 0, 1) + t\,(1, 1, 0)$ e $r' = (0, 3, -1) + s\,(1, -1, 1)$ è:
+ il punto $(2, 1, 1)$
- il punto $(1, 0, 1)$
- il punto $(0, 3, -1)$
- il punto $(3, 2, 1)$
- vuota: le rette sono sghembe
= Eguagliando: $1 + t = s$, $t = 3 - s$, $1 = -1 + s$. Dalla terza $s = 2$, dalla prima $t = 1$, e la seconda torna ($1 = 3 - 2$). Il punto è $(2, 1, 1)$. $(1, 0, 1)$ sta solo su $r$, $(0, 3, -1)$ solo su $r'$, $(3, 2, 1)$ è su $r$ ma non su $r'$. Simile agli appelli del 03/06/2025 e del 10/07/2025 (domanda 10).

D: Quale coppia di sottospazi affini di $\R^3$ ha **sicuramente** intersezione non vuota?
+ Due piani i cui vettori normali non sono proporzionali.
- Due rette con direzioni non proporzionali.
- I piani $\{x + y + z = 1\}$ e $\{x + y + z = 2\}$.
- Una retta e un piano, quando la direzione della retta sta nella giacitura del piano.
- Una retta e un punto.
= Due piani con normali non proporzionali hanno giaciture diverse, che sommano a $\R^3$: per la Proposizione 23.10 sono incidenti. Due rette possono essere sghembe; i due piani con lo stesso $x + y + z$ sono paralleli e disgiunti; una retta parallela a un piano può non toccarlo; un punto può stare fuori da una retta. È l'argomento usato per «dimostrare che $r$ e $\pi_3$ sono incidenti» negli appelli del 24/01/2024 e del 10/07/2024.
```

## Esercizi

::: esercizio base Prodotto vettoriale e identità di Lagrange
Siano $v = (2, 1, -1)$ e $w = (1, 0, 3)$. (a) Calcola $v \times w$ e verifica che è ortogonale a $v$ e a $w$. (b) Verifica l'identità di Lagrange. (c) Quanto vale l'area del parallelogramma con lati $v$ e $w$? (d) Verifica che $\det(v \mid w \mid v \times w) > 0$.
::: soluzione
(a) Righe affiancate $(2, 1)$, $(1, 0)$, $(-1, 3)$:
- prima componente, copro la prima riga: $1 \cdot 3 - 0 \cdot (-1) = 3$;
- seconda, copro la seconda riga: $2 \cdot 3 - 1 \cdot (-1) = 7$, cambio segno: $-7$;
- terza, copro la terza riga: $2 \cdot 0 - 1 \cdot 1 = -1$.

Quindi $v \times w = (3, -7, -1)$. Controlli: $\langle v \times w, v \rangle = 6 - 7 + 1 = 0$ e $\langle v \times w, w \rangle = 3 + 0 - 3 = 0$.

(b) $\lVert v \times w \rVert^2 = 9 + 49 + 1 = 59$; $\langle v, w \rangle = 2 + 0 - 3 = -1$, al quadrato $1$; $\lVert v \rVert^2 = 4 + 1 + 1 = 6$ e $\lVert w \rVert^2 = 1 + 0 + 9 = 10$. Infatti $59 + 1 = 60 = 6 \cdot 10$.

(c) Area $= \lVert v \times w \rVert = \sqrt{59}$.

(d) Per la dimostrazione della Proposizione 23.4 il determinante vale $\lVert v \times w \rVert^2 = 59 > 0$. Controllo diretto, sviluppando sulla terza colonna di $\begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & -7 \\ -1 & 3 & -1 \end{pmatrix}$:
$$3 \cdot (1 \cdot 3 - 0 \cdot (-1)) - (-7) \cdot (2 \cdot 3 - 1 \cdot (-1)) + (-1) \cdot (2 \cdot 0 - 1 \cdot 1) = 9 + 49 + 1 = 59.$$
:::

::: esercizio base Il triangolo e il suo piano
Siano $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$. (a) Calcola l'area del triangolo $ABC$. (b) Scrivi l'equazione cartesiana del piano che contiene i tre punti (è il punto 1 dell'esercizio 6 del foglio 4 del tutorato 2025).
::: soluzione
(a) $\overrightarrow{AB} = (-1, 2, 0)$, $\overrightarrow{AC} = (-1, 0, 3)$. Righe affiancate $(-1, -1)$, $(2, 0)$, $(0, 3)$:
$$\begin{aligned} \overrightarrow{AB} \times \overrightarrow{AC} &= \big(2 \cdot 3 - 0 \cdot 0,\ -((-1) \cdot 3 - (-1) \cdot 0),\ (-1) \cdot 0 - (-1) \cdot 2\big) \\ &= (6, 3, 2). \end{aligned}$$
La norma è $\sqrt{36 + 9 + 4} = 7$: il parallelogramma ha area $7$ e il triangolo, che ne è la metà, ha area $\frac 72$.

(b) Il piano è $A + t\,\overrightarrow{AB} + s\,\overrightarrow{AC}$ e il suo vettore normale è $(6, 3, 2)$. Quindi $6x + 3y + 2z = d$ con $d = 6 \cdot 1 + 0 + 0 = 6$:
$$\pi = \{6x + 3y + 2z = 6\}.$$
Controllo: $B$ dà $3 \cdot 2 = 6$, $C$ dà $2 \cdot 3 = 6$. Dividendo per 6 si ottiene la forma $x + \frac y2 + \frac z3 = 1$: i denominatori sono i punti in cui il piano taglia gli assi.
:::

::: esercizio medio Conti senza coordinate
Sai soltanto che $v \times w = (1, 2, 3)$. Calcola (a) $w \times v$; (b) $(2v + w) \times (v - 3w)$; (c) $\langle v \times w, v \rangle$; (d) $(v + w) \times (v + w)$.
::: soluzione
Usa solo anticommutatività, bilinearità e $u \times u = 0$.

(a) $w \times v = -\,v \times w = (-1, -2, -3)$.

(b) Sviluppo come un prodotto di binomi, **mantenendo l'ordine** dei fattori:
$$(2v + w) \times (v - 3w) = 2\,v \times v - 6\,v \times w + w \times v - 3\,w \times w.$$
Ora $v \times v = w \times w = 0$ e $w \times v = -\,v \times w$, quindi il risultato è $-6\,(v \times w) - (v \times w) = -7\,(v \times w) = (-7, -14, -21)$.

(c) $0$: il prodotto vettoriale è ortogonale a $v$ (Proposizione 22.15).

(d) $0$: è il prodotto vettoriale di un vettore con sé stesso.
:::

::: esercizio base Da parametrica a cartesiana
Scrivi l'equazione cartesiana del piano $\pi = (2, 0, 1) + s\,(1, 2, 0) + t\,(0, 1, 1)$.
::: soluzione
Vettore normale: righe affiancate $(1, 0)$, $(2, 1)$, $(0, 1)$, quindi
$$(1, 2, 0) \times (0, 1, 1) = (2 \cdot 1 - 0 \cdot 1,\ -(1 \cdot 1 - 0 \cdot 0),\ 1 \cdot 1 - 2 \cdot 0) = (2, -1, 1).$$
Il piano è $2x - y + z = d$, e imponendo il passaggio per $(2, 0, 1)$: $d = 4 - 0 + 1 = 5$. Risultato: $\pi = \{2x - y + z = 5\}$.

Controllo con $s = t = 1$: il punto $(3, 3, 2)$ dà $6 - 3 + 2 = 5$.
:::

::: esercizio base Da cartesiana a parametrica
Scrivi in forma parametrica la retta $r = \{x - y + z = 1,\ 2x + y - z = 2\}$ e controlla la direzione con il prodotto vettoriale dei vettori normali.
::: soluzione
Sommando le due equazioni: $3x = 3$, cioè $x = 1$. Nella prima: $1 - y + z = 1$, cioè $z = y$. Con $y = t$:
$$r = \{(1, t, t)\} = (1, 0, 0) + \Span((0, 1, 1)).$$
Controllo: $(1, -1, 1) \times (2, 1, -1)$ con righe affiancate $(1, 2)$, $(-1, 1)$, $(1, -1)$ dà
$$\big((-1)(-1) - 1 \cdot 1,\ -(1 \cdot (-1) - 2 \cdot 1),\ 1 \cdot 1 - 2 \cdot (-1)\big) = (0, 3, 3),$$
che è proporzionale a $(0, 1, 1)$. Il punto $(1, 0, 0)$ soddisfa $1 = 1$ e $2 = 2$.
:::

::: esercizio medio È la stessa retta?
Siano $r_1 = (1, 0, 2) + \Span((1, -1, 1))$, $r_2 = (3, -2, 4) + \Span((-2, 2, -2))$ e $r_3 = (1, 1, 1) + \Span((1, -1, 1))$. Quali coincidono?
::: soluzione
Uso la Proposizione 23.5.

- $r_1$ e $r_2$: le giaciture coincidono, perché $(-2, 2, -2) = -2\,(1, -1, 1)$. La differenza dei punti è $(3, -2, 4) - (1, 0, 2) = (2, -2, 2) = 2\,(1, -1, 1)$, che sta nella giacitura. Quindi $r_1 = r_2$.
- $r_1$ e $r_3$: stessa giacitura, ma $(1, 1, 1) - (1, 0, 2) = (0, 1, -1)$ non è multiplo di $(1, -1, 1)$ (la prima coordinata costringerebbe il multiplo a essere $0$). Quindi $r_3 \neq r_1$: sono rette **parallele distinte**.
:::

::: esercizio medio Tre coppie di rette
Per ogni coppia decidi se le rette si incontrano; in caso affermativo trova il punto. (a) $r = (1, 2, 0) + t\,(1, 0, 1)$ e $r' = (0, 1, 1) + s\,(2, 1, 0)$. (b) L'asse $x$, cioè $r = t\,(1, 0, 0)$, e $r' = (0, 1, 0) + s\,(0, 0, 1)$. (c) $r = t\,(1, 1, 1)$ e $r' = (1, 0, 0) + s\,(2, 2, 2)$.
::: soluzione
(a) Eguaglio: $1 + t = 2s$, $2 = 1 + s$, $t = 1$. Dalla seconda $s = 1$, dalla terza $t = 1$; la prima dà $2 = 2$, torna. Punto comune: $(2, 2, 1)$.

(b) Eguaglio: $t = 0$, $0 = 1$, $0 = s$. La seconda equazione è impossibile: nessun punto comune. Le direzioni $(1, 0, 0)$ e $(0, 0, 1)$ non sono proporzionali, quindi le rette non sono parallele: sono **sghembe**.

(c) Le direzioni sono proporzionali: $(2, 2, 2) = 2\,(1, 1, 1)$. Il punto $(1, 0, 0)$ sta su $r$? Servirebbe $t = 1$ dalla prima coordinata e $t = 0$ dalla seconda: no. Quindi le rette sono **parallele distinte** e non si incontrano.
:::

::: esercizio medio Due piani che non si incontrano
Calcola l'intersezione dei piani $\pi_1 = \{x + 2y - z = 1\}$ e $\pi_2 = \{-2x - 4y + 2z = 3\}$, prima con Rouché–Capelli e poi con un ragionamento geometrico. Che cosa cambia se al posto di $3$ c'è $-2$?
::: soluzione
Matrice completa e una mossa di Gauss:
$$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ -2 & -4 & 2 & 3 \end{array}\right) \xrightarrow{R_2 \to R_2 + 2R_1} \left(\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 0 & 0 & 5 \end{array}\right).$$
La seconda riga dice $0 = 5$: $\rk A = 1$ ma $\rk(A \mid b) = 2$, quindi l'intersezione è **vuota**.

Geometricamente: i vettori normali $(1, 2, -1)$ e $(-2, -4, 2)$ sono proporzionali, quindi i piani hanno la stessa giacitura (sono paralleli). Dividendo la seconda equazione per $-2$ si ottiene $x + 2y - z = -\frac 32$, che è incompatibile con $x + 2y - z = 1$.

Con $-2$ al posto di $3$ la seconda equazione diventa $-2\,(x + 2y - z) = -2$, cioè $x + 2y - z = 1$: è **lo stesso piano**, e l'intersezione è tutto $\pi_1$.
:::

::: esercizio medio Un piano che dipende da un parametro
Per ogni $k \in \R$ sia $\pi_k = \{x + ky + z = 1\}$ e sia $r = \{t\,(1, 1, -1) \mid t \in \R\}$. Per quali $k$ la retta $r$ interseca $\pi_k$? In quel caso, in quale punto?
::: soluzione
Sostituisco il punto generico $(t, t, -t)$: $t + kt - t = 1$, cioè $kt = 1$.

- Se $k \neq 0$: $t = \frac 1k$ e il punto è $\left(\frac 1k, \frac 1k, -\frac 1k\right)$. Controllo: $\frac 1k + k \cdot \frac 1k - \frac 1k = 1$.
- Se $k = 0$: l'equazione diventa $0 = 1$, impossibile. La retta non tocca il piano $\pi_0 = \{x + z = 1\}$.

Lettura con le giaciture: il prodotto scalare fra la direzione $(1, 1, -1)$ e la normale $(1, k, 1)$ vale $1 + k - 1 = k$. Per $k \neq 0$ la direzione è fuori dalla giacitura e la Proposizione 23.10 garantisce l'incontro; per $k = 0$ la retta è parallela al piano e, siccome l'origine (che sta su $r$) non soddisfa $x + z = 1$, non lo tocca.
:::

::: esercizio difficile Il prodotto triplo
(a) Dimostra che per ogni $u, v, w \in \R^3$ vale $\langle u \times v, w \rangle = \det(u \mid v \mid w)$ (Martelli, Esercizio 9.1.8). (b) Deduci che $u, v, w$ sono linearmente dipendenti se e solo se $\langle u \times v, w \rangle = 0$. (c) Stabilisci se i punti $A = (1, 0, 0)$, $B = (0, 1, 0)$, $C = (0, 0, 1)$, $D = (1, 1, -1)$ stanno su uno stesso piano.
::: soluzione
(a) Scrivo $u \times v = (d_1, -d_2, d_3)$, con $d_i$ il minore di $(u \mid v)$ senza la riga $i$. Allora
$$\langle u \times v, w \rangle = d_1 w_1 - d_2 w_2 + d_3 w_3.$$
Questo è esattamente lo sviluppo di Laplace di $\det(u \mid v \mid w)$ sulla **terza colonna**: il cofattore di posto $(i, 3)$ è $(-1)^{i+3} d_i$, cioè $+d_1$, $-d_2$, $+d_3$. È lo stesso argomento della dimostrazione della Proposizione 22.15, dove al posto di $w$ c'era $v$.

(b) Tre vettori di $\R^3$ sono dipendenti se e solo se il determinante della matrice che li ha come colonne è zero (lezioni L09–L10). Per (a) quel determinante è $\langle u \times v, w \rangle$.

(c) I quattro punti sono complanari se e solo se $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{AD}$ sono dipendenti. $\overrightarrow{AB} = (-1, 1, 0)$, $\overrightarrow{AC} = (-1, 0, 1)$, $\overrightarrow{AD} = (0, 1, -1)$. Sviluppo sulla prima riga:
$$\det\begin{pmatrix} -1 & -1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix} = -1 \cdot (0 \cdot (-1) - 1 \cdot 1) - (-1) \cdot (1 \cdot (-1) - 1 \cdot 0) + 0 = 1 - 1 = 0.$$
Sono complanari: infatti tutti e quattro soddisfano $x + y + z = 1$ (per $D$: $1 + 1 - 1 = 1$).
:::

::: esercizio esame Tre piani (appello del 15/01/2026, problema 12)
Siano $\pi_1 = \{x + y + z = 2\}$, $\pi_2 = \{x - y - 2z = 1\}$ e $\pi_3 = \{x + y - z = 0\}$ tre piani in $\R^3$. (1) Trovare il punto $P = \pi_1 \cap \pi_2 \cap \pi_3$. (2) Trovare un vettore $v \in \R^3$ tale che $\pi_1 \cap \pi_2 = P + \Span(v)$. (3) Trovare due vettori $w_1$ e $w_2$ ortogonali tali che $\pi_3 = \Span(w_1, w_2)$. (4) Trovare la proiezione ortogonale di $v$ sul piano $\pi_3$.
::: soluzione
(1) Sottraggo la terza equazione dalla prima: $(x + y + z) - (x + y - z) = 2 - 0$, cioè $2z = 2$ e $z = 1$. Allora la prima dà $x + y = 1$ e la seconda $x - y = 1 + 2z = 3$. Sommando: $2x = 4$, $x = 2$, e quindi $y = -1$. $P = (2, -1, 1)$. Controllo: $2 - 1 + 1 = 2$, $2 + 1 - 2 = 1$, $2 - 1 - 1 = 0$.

(2) $\pi_1 \cap \pi_2$ è una retta (i vettori normali $(1, 1, 1)$ e $(1, -1, -2)$ non sono proporzionali) che passa per $P$. La sua direzione è ortogonale a entrambi i vettori normali, quindi posso prendere il loro prodotto vettoriale (righe affiancate $(1, 1)$, $(1, -1)$, $(1, -2)$):
$$v = \big(1 \cdot (-2) - 1 \cdot (-1),\ -(1 \cdot (-2) - 1 \cdot 1),\ 1 \cdot (-1) - 1 \cdot 1\big) = (-1, 3, -2).$$
Controllo: $-1 + 3 - 2 = 0$ e $-1 - 3 + 4 = 0$. Quindi $\pi_1 \cap \pi_2 = (2, -1, 1) + \Span((-1, 3, -2))$.

(3) $\pi_3$ passa per l'origine, quindi è un sottospazio vettoriale. Scelgo un vettore che soddisfa $x + y - z = 0$, per esempio $w_1 = (1, -1, 0)$. Per il secondo mi serve un vettore di $\pi_3$ (ortogonale alla normale $n_3 = (1, 1, -1)$) e ortogonale a $w_1$: il prodotto vettoriale $n_3 \times w_1$ fa proprio questo. Righe affiancate $(1, 1)$, $(1, -1)$, $(-1, 0)$:
$$\begin{aligned} n_3 \times w_1 &= \big(1 \cdot 0 - (-1)(-1),\ -(1 \cdot 0 - 1 \cdot (-1)),\ 1 \cdot (-1) - 1 \cdot 1\big) \\ &= (-1, -1, -2). \end{aligned}$$
Prendo $w_2 = (1, 1, 2)$. Controlli: $1 + 1 - 2 = 0$ (sta in $\pi_3$) e $\langle w_1, w_2 \rangle = 1 - 1 + 0 = 0$.

(4) Con la base ortogonale $w_1, w_2$ la proiezione è (lezione L21)
$$p_{\pi_3}(v) = \frac{\langle v, w_1 \rangle}{\langle w_1, w_1 \rangle} w_1 + \frac{\langle v, w_2 \rangle}{\langle w_2, w_2 \rangle} w_2.$$
$\langle v, w_1 \rangle = -1 - 3 + 0 = -4$ e $\langle w_1, w_1 \rangle = 2$; $\langle v, w_2 \rangle = -1 + 3 - 4 = -2$ e $\langle w_2, w_2 \rangle = 6$. Quindi
$$p_{\pi_3}(v) = -2\,(1, -1, 0) - \tfrac 13\,(1, 1, 2) = \left(-\tfrac 73,\ \tfrac 53,\ -\tfrac 23\right).$$
Controllo: $v - p_{\pi_3}(v) = \left(\frac 43, \frac 43, -\frac 43\right) = \frac 43\,(1, 1, -1)$ è proporzionale alla normale di $\pi_3$, come deve essere.
:::

::: esercizio esame Una retta, due piani e un punto d'incontro
Siano $\pi_1 = \{x + y - z = 2\}$ e $\pi_2 = \{x - y + 2z = 1\}$. (1) Scrivi la retta $r = \pi_1 \cap \pi_2$ nella forma $P + \Span(v)$. (2) Dimostra che $r$ e il piano $\pi_3 = \{x + y + z = 0\}$ sono incidenti. (3) Trova il punto di intersezione. (4) Scrivi l'equazione cartesiana del piano che contiene $r$ e l'origine.
::: soluzione
(1) Sommo le equazioni: $2x + z = 3$, quindi $z = 3 - 2x$. Dalla prima $y = 2 - x + z = 2 - x + 3 - 2x = 5 - 3x$. Con $x = t$:
$$r = \{(t,\ 5 - 3t,\ 3 - 2t)\} = (0, 5, 3) + \Span((1, -3, -2)).$$
Controlli: $(0, 5, 3)$ dà $0 + 5 - 3 = 2$ e $0 - 5 + 6 = 1$; inoltre $(1, 1, -1) \times (1, -1, 2) = (1 \cdot 2 - (-1)(-1),\ -(1 \cdot 2 - (-1) \cdot 1),\ 1 \cdot (-1) - 1 \cdot 1) = (1, -3, -2)$.

(2) Il prodotto scalare fra la direzione $(1, -3, -2)$ e la normale $(1, 1, 1)$ di $\pi_3$ vale $1 - 3 - 2 = -4 \neq 0$: la direzione non sta nella giacitura di $\pi_3$, quindi $\operatorname{giac}(r) + \operatorname{giac}(\pi_3) = \R^3$ e, per la Proposizione 23.10, $r$ e $\pi_3$ sono incidenti.

(3) Sostituisco il punto generico: $t + (5 - 3t) + (3 - 2t) = 0$, cioè $8 - 4t = 0$ e $t = 2$. Il punto è $Q = (2, -1, -1)$. Controllo: $2 - 1 - 1 = 0$, e $Q$ sta anche su $\pi_1$ ($2 - 1 + 1 = 2$) e su $\pi_2$ ($2 + 1 - 2 = 1$).

(4) Il piano contiene l'origine $O$, il punto $P = (0, 5, 3)$ e la direzione $v = (1, -3, -2)$: è $O + s\,\overrightarrow{OP} + t\,v$. Vettore normale (righe affiancate $(1, 0)$, $(-3, 5)$, $(-2, 3)$):
$$\begin{aligned} v \times \overrightarrow{OP} &= \big((-3) \cdot 3 - (-2) \cdot 5,\ -(1 \cdot 3 - (-2) \cdot 0),\ 1 \cdot 5 - (-3) \cdot 0\big) \\ &= (1, -3, 5). \end{aligned}$$
Passa per l'origine, quindi $d = 0$: il piano è $x - 3y + 5z = 0$. Controllo: $P$ dà $-15 + 15 = 0$ e $Q$ dà $2 + 3 - 5 = 0$.
:::

## Domande di ripasso

::: domanda Che cosa dice l'identità di Lagrange?
$\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2$ per ogni $v, w \in \R^3$ (Proposizione 23.1). Si dimostra sviluppando i quadrati.
:::

::: domanda Perché la lunghezza di $v \times w$ è l'area del parallelogramma con lati $v$ e $w$?
Perché, sostituendo $\langle v, w \rangle = \lVert v \rVert \lVert w \rVert \cos\vartheta$ nell'identità di Lagrange, si ottiene $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 \sin^2\vartheta$; con $\sin\vartheta \ge 0$ (perché $\vartheta \in [0, \pi]$) resta $\lVert v \rVert \lVert w \rVert \sin\vartheta$, che è base per altezza.
:::

::: domanda Come si sceglie il verso di $v \times w$? Che cos'è una base positiva?
Con la regola della mano destra: pollice su $v$, indice su $w$, il medio indica $v \times w$. In formule: se $v, w$ sono indipendenti, $\det(v \mid w \mid v \times w) > 0$, cioè $v, w, v \times w$ è una base positiva (Proposizione 23.4). Il determinante vale proprio $\lVert v \times w \rVert^2$.
:::

::: domanda Il prodotto vettoriale è commutativo? Associativo? Bilineare?
Non è commutativo ma anticommutativo: $v \times w = -\,w \times v$. Non è associativo: $(e_1 \times e_2) \times e_2 = -e_1$ ma $e_1 \times (e_2 \times e_2) = 0$. È bilineare: lineare in ciascuno dei due fattori.
:::

::: domanda Che differenza c'è tra forma cartesiana e forma parametrica?
La cartesiana (implicita) descrive il sottospazio con equazioni: serve a decidere se un punto ci sta. La parametrica (esplicita) lo descrive con un punto e dei generatori, al variare di parametri: serve a produrre i punti e a leggere la dimensione.
:::

::: domanda Che cos'è un sottospazio affine? E la sua giacitura?
Un sottoinsieme del tipo $x + W = \{x + v \mid v \in W\}$, con $W$ sottospazio vettoriale. $W$ è la giacitura, determinata dal sottospazio (sono le differenze di due suoi punti); $x$ è un suo punto qualsiasi. La dimensione è $\dim W$.
:::

::: domanda Quando $x + W$ e $x' + W'$ sono lo stesso sottospazio affine?
Se e solo se $W = W'$ e $x - x' \in W$ (Proposizione 23.5).
:::

::: domanda Quanto vale la dimensione delle soluzioni di $Ax = b$?
Se $\rk A = \rk(A \mid b)$, le soluzioni formano un sottospazio affine di dimensione $n - \rk A$, dove $n$ è il numero di incognite; se $\rk A < \rk(A \mid b)$ non ci sono soluzioni (Rouché–Capelli).
:::

::: domanda Come si passa dalla forma parametrica alla cartesiana di un piano di $\R^3$, e perché funziona?
Si calcola $(a, b, c) = v_1 \times v_2$ e si trova $d$ sostituendo $P_0$ in $ax + by + cz = d$. Funziona perché $v_1 \times v_2$ è ortogonale a $v_1$ e $v_2$, quindi $\langle v_1 \times v_2, P \rangle$ è lo stesso numero per tutti i punti $P = P_0 + t v_1 + s v_2$.
:::

::: domanda Quante equazioni servono per una retta di $\R^3$? E per un piano?
Una retta ha dimensione 1: servono $3 - 1 = 2$ equazioni indipendenti. Un piano ha dimensione 2: basta $3 - 2 = 1$ equazione.
:::

::: domanda Come si calcola un'intersezione nei tre casi?
Cartesiana con cartesiana: si uniscono le equazioni. Cartesiana con parametrica: si sostituisce il punto generico nelle equazioni. Parametrica con parametrica: si eguagliano i punti generici (con parametri di nomi diversi) e si risolve il sistema, controllando tutte le equazioni.
:::

::: domanda Perché l'intersezione di due sottospazi affini, se non è vuota, è un sottospazio affine?
Se $x \in S \cap S'$, si scrive $S = x + W$ e $S' = x + W'$; allora $S \cap S' = x + (W \cap W')$, e $W \cap W'$ è un sottospazio vettoriale.
:::

::: domanda Che cosa dice la Proposizione 23.10? Vale il viceversa?
Se $\operatorname{giac}(S) + \operatorname{giac}(S') = \R^n$, allora $S$ e $S'$ si incontrano. Il viceversa è falso: due rette di $\R^3$ possono incontrarsi anche se le loro giaciture sommano soltanto a un piano (per esempio gli assi $x$ e $y$).
:::

::: domanda Che cosa sono due rette sghembe?
Due rette dello spazio che non si incontrano e non sono parallele (direzioni non proporzionali). Nel piano non esistono.
:::

## Glossario

```glossario
Prodotto vettoriale | Il vettore $v \times w = (v_2 w_3 - v_3 w_2,\ v_3 w_1 - v_1 w_3,\ v_1 w_2 - v_2 w_1)$, definito solo in $\R^3$.
Identità di Lagrange | $\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2$ (Proposizione 23.1).
Parallelogramma con lati $v$ e $w$ | La figura con vertici $0$, $v$, $v + w$, $w$; la sua area è $\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta$.
Base positiva | Base $u_1, u_2, u_3$ di $\R^3$ con $\det(u_1 \mid u_2 \mid u_3) > 0$; per esempio $v, w, v \times w$ con $v, w$ indipendenti.
Regola della mano destra | Pollice su $v$, indice su $w$: il medio indica il verso di $v \times w$.
Anticommutatività | $v \times w = -\,w \times v$; in particolare $v \times v = 0$.
Bilinearità | Linearità in ciascuno dei due fattori: $(v + v') \times w = v \times w + v' \times w$, $(\lambda v) \times w = \lambda\,(v \times w)$, e lo stesso a destra.
Forma cartesiana | Descrizione di un sottospazio come insieme delle soluzioni di un sistema di equazioni lineari (implicita).
Forma parametrica | Descrizione di un sottospazio con un punto e dei generatori, al variare di parametri (esplicita).
Sottospazio affine | Un insieme $x + W = \{x + v \mid v \in W\}$ con $W$ sottospazio vettoriale: un sottospazio vettoriale traslato.
Giacitura | Il sottospazio vettoriale $W = \operatorname{giac}(S)$ di un sottospazio affine $S = x + W$: l'insieme delle differenze di due punti di $S$.
Dimensione di un sottospazio affine | La dimensione della giacitura; per $\{Ax = b\}$ non vuoto vale $n - \rk A$.
Vettore normale | Per il piano $ax + by + cz = d$, il vettore $(a, b, c)$, ortogonale a tutti i vettori della giacitura.
Iperpiano | Sottospazio affine di dimensione $n - 1$ in $\R^n$, del tipo ${}^t w\, x + b = 0$ con $w \neq 0$.
Classificatore lineare | Regola che assegna a un vettore di dati $x$ una classe secondo il segno di ${}^t w\, x + b$.
Sottospazi incidenti | Due sottospazi affini con intersezione non vuota.
Sottospazi paralleli | Due sottospazi affini in cui la giacitura di uno è contenuta in quella dell'altro (Martelli, §9.2.5).
Rette sghembe | Due rette dello spazio né incidenti né parallele.
```

## Checklist

```checklist
- So calcolare $v \times w$ con lo schema «copri la riga» senza sbagliare il segno della componente centrale, e so controllare il risultato con i prodotti scalari.
- So enunciare l'identità di Lagrange e usarla per trovare $\lVert v \times w \rVert$ da norme e prodotto scalare.
- So calcolare l'area di un parallelogramma e di un triangolo nello spazio con il prodotto vettoriale.
- So spiegare la regola della mano destra e che cosa vuol dire che $v, w, v \times w$ è una base positiva.
- So usare anticommutatività e bilinearità, e so che il prodotto vettoriale non è associativo.
- So passare dalla forma cartesiana alla parametrica (Gauss) e dalla parametrica alla cartesiana (prodotto vettoriale per i piani, eliminazione del parametro per le rette).
- So riconoscere quando due scritture $x + W$ e $x' + W'$ descrivono lo stesso sottospazio affine.
- So calcolare la dimensione di un sottospazio affine con Rouché–Capelli e so quante equazioni servono per rette e piani di $\R^3$.
- So intersecare due sottospazi nei tre casi (cartesiana e cartesiana, cartesiana e parametrica, parametrica e parametrica) e controllo sempre il risultato.
- So usare la Proposizione 23.10 per dimostrare che una retta e un piano sono incidenti, e so che il viceversa è falso.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 23 «Lo spazio euclideo II», pp. 116–121: sezioni 23.A (altre proprietà del prodotto vettoriale), 23.B (forma cartesiana e parametrica), 23.C (spazi affini) e 23.D (intersezioni), seguite in ordine con la numerazione originale (Proposizioni 23.1, 23.2, 23.4, 23.5, 23.10, Corollario 23.3, Definizione 23.7, Esempi 23.6, 23.8, 23.9). Il richiamo iniziale viene dalla lezione 22 (Definizione 22.14, Proposizioni 22.15 e 22.16, Corollario 22.17, pp. 114–115) e dalla lezione 12 (Definizione 12.5, Teorema 12.6). Questa lezione delle dispense non ha una sezione di esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §9.1 (prodotto vettoriale; da lì vengono le dimostrazioni delle Proposizioni 23.2 e 23.4 e l'Esercizio 9.1.8 sul prodotto triplo) e §9.2 (sottospazi affini, intersezioni con la dimostrazione della Proposizione 9.2.7 = 23.10, posizioni reciproche).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): testo riportato del 07/02/2025 (domanda 10) e del 15/01/2026 (problema 12), con soluzioni scritte per questi appunti; citati per tipo di domanda gli appelli del 24/01/2024, 10/07/2024, 06/09/2024, 03/06/2025, 10/07/2025, 02/09/2025 e 03/07/2026. Foglio 4 del tutorato 2025 (esercizio 6).
- Le parti **«Oltre le dispense»** (dimostrazione della Proposizione 23.5, rette da parametrica a cartesiana, piano per tre punti, posizioni reciproche, esempi ed esercizi aggiuntivi) sono aggiunte di questi appunti per collegare la lezione al libro e all'esame.
