---
corso: MDAG
modulo: AG
lezione: L25
titolo: Teorema spettrale I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L25
descrizione: >-
  Appunti della lezione L25 di Algebra lineare e Geometria (MDAG, parte 2): prodotti hermitiani sugli spazi complessi,
  matrici hermitiane, matrice associata, endomorfismi autoaggiunti e sottospazi invarianti, con quiz nello stile
  dell'esame ed esercizi svolti.
lede: >-
  Per fare geometria con i vettori complessi serve un prodotto che dia lunghezze reali e positive: è il prodotto
  hermitiano, con un coniugio nel posto giusto. Poi arrivano le matrici hermitiane (${}^tH = \bar H$) e gli
  endomorfismi autoaggiunti, $\langle T(v), w \rangle = \langle v, T(w) \rangle$: sono i protagonisti del teorema
  spettrale della prossima lezione.
materiale: dispense
scheda:
  Dispense: lezione 25 · pp. 129–133
  Libro: Martelli, §11.1 e §11.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 100–130 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 25 «Teorema spettrale I»; B. Martelli, Geometria e algebra lineare, §11.1–11.2
appunti_html: appunti/MDAG/L25_teorema_spettrale_1.html
genera_html: true
---

## In breve

- Su $\C^n$ il prodotto «copiato dal caso reale», $x_1 y_1 + \dots + x_n y_n$, non misura lunghezze: il vettore $(1, i)$ avrebbe «lunghezza al quadrato» $1 + i^2 = 0$. Si rimedia **coniugando il secondo vettore**: è il **prodotto hermitiano**.
- Un prodotto hermitiano è lineare nel primo posto e soddisfa $\langle v, w \rangle = \overline{\langle w, v \rangle}$. Ne segue $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$ (è **sesquilineare**) e, soprattutto, che $\langle v, v \rangle$ è **sempre reale**.
- Se $\langle v, v \rangle > 0$ per ogni $v \neq 0$ il prodotto è **definito positivo**: norma, ortogonalità, basi ortonormali e Gram–Schmidt funzionano come nel caso reale. L'esempio base è il **prodotto hermitiano euclideo** $\langle x, y \rangle = {}^t x\, \bar y = x_1 \bar y_1 + \dots + x_n \bar y_n$.
- Una **matrice hermitiana** soddisfa ${}^tH = \bar H$, cioè $H_{ij} = \overline{H_{ji}}$: la diagonale è reale e gli elementi simmetrici sono coniugati. Una matrice **reale** è hermitiana se e solo se è **simmetrica**.
- Ogni prodotto hermitiano su $\C^n$ è $g_H(x, y) = {}^t x\, H\, \bar y$ con $H$ hermitiana: il coefficiente di $x_i \bar y_j$ è $H_{ij}$.
- Un endomorfismo è **autoaggiunto** se $\langle T(v), w \rangle = \langle v, T(w) \rangle$. Rispetto a una base **ortonormale** è autoaggiunto se e solo se la sua matrice è hermitiana (nel caso reale: simmetrica). Con una base non ortonormale questo criterio non vale.
- Un sottospazio $U$ è **$T$-invariante** se $T(U) \subseteq U$. Se $T$ è autoaggiunto e $U$ è invariante, anche $U^\perp$ lo è: è il passo chiave del teorema spettrale (lezione L26).
- All'esame questa lezione vale di solito un quiz (in 9 dei 15 appelli 2023–2026): «quale formula è un prodotto hermitiano?», «quale matrice è hermitiana?», «quale applicazione è autoaggiunta?».

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Prodotti hermitiani (pp. 129–130)

Nelle lezioni L19–L21 i prodotti scalari erano definiti sugli spazi vettoriali **reali**. Proviamo a usare la stessa formula su $\C^2$, lo spazio delle coppie di numeri complessi, e a calcolare la «lunghezza» del vettore $x = (1, i)$:

$$x_1 x_1 + x_2 x_2 = 1 \cdot 1 + i \cdot i = 1 + i^2 = 1 - 1 = 0.$$

Un vettore **non nullo** con lunghezza zero: la geometria salta. Con $x = (i, 0)$ va anche peggio: $i \cdot i = -1$, una «lunghezza al quadrato» negativa.

La cura viene dal modulo dei numeri complessi (lezione L02): $\lvert z \rvert^2 = z \bar z$, dove $\bar z$ è il **coniugato**. Se nel prodotto si coniugano le coordinate del **secondo** vettore, il vettore $(1, i)$ diventa

$$x_1 \bar x_1 + x_2 \bar x_2 = 1 \cdot 1 + i \cdot (-i) = 1 + 1 = 2,$$

cioè $\lvert x_1 \rvert^2 + \lvert x_2 \rvert^2$: un numero reale e positivo, come deve essere una lunghezza al quadrato.

> [!NOTA] Richiamo sul coniugio (lezione L02)
> Se $z = a + bi$, il coniugato è $\bar z = a - bi$. Servono queste regole:
> - $\overline{z + w} = \bar z + \bar w$ e $\overline{z w} = \bar z\, \bar w$ (il coniugio rispetta somme e prodotti; per il prodotto: $\overline{(a + bi)(c + di)} = (ac - bd) - (ad + bc)i = (a - bi)(c - di)$);
> - $\bar{\bar z} = z$;
> - $z$ è reale se e solo se $z = \bar z$;
> - $z \bar z = a^2 + b^2 = \lvert z \rvert^2$, reale e non negativo, zero solo per $z = 0$.

Le dispense traducono l'idea in assiomi, come per i prodotti scalari.

> [!DEF] 25.1 · Prodotto hermitiano
> Sia $V$ uno spazio vettoriale complesso. Un **prodotto hermitiano** su $V$ è un'applicazione
> $$V \times V \longrightarrow \C, \qquad (v, w) \longmapsto \langle v, w \rangle$$
> che soddisfa i seguenti assiomi:
> 1. $\langle v + v', w \rangle = \langle v, w \rangle + \langle v', w \rangle$,
> 2. $\langle \lambda v, w \rangle = \lambda \langle v, w \rangle$,
> 3. $\langle v, w \rangle = \overline{\langle w, v \rangle}$,
>
> per ogni $v, v', w \in V$ e ogni $\lambda \in \C$.

Pezzo per pezzo:

- **spazio vettoriale complesso**: gli scalari sono numeri complessi, e il risultato $\langle v, w \rangle$ è un numero complesso;
- (1) e (2) dicono che il prodotto è **lineare nel primo posto**, esattamente come un prodotto scalare;
- (3) è la differenza: scambiando i due vettori il risultato **si coniuga**. Nel caso reale era $\langle v, w \rangle = \langle w, v \rangle$.

Dagli assiomi le dispense ricavano altre proprietà, per ogni $v, w, w' \in V$ e $\lambda \in \C$:

4. $\langle v, w + w' \rangle = \langle v, w \rangle + \langle v, w' \rangle$;
5. $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$;
6. $\langle 0, w \rangle = \langle v, 0 \rangle = 0$;
7. $\langle v, v \rangle$ è un **numero reale**, per ogni $v \in V$.

Le dimostrazioni sono brevi e usano solo (1), (2), (3) e le regole del coniugio.

- **(5)**, come nelle dispense: $\langle v, \lambda w \rangle \overset{(3)}{=} \overline{\langle \lambda w, v \rangle} \overset{(2)}{=} \overline{\lambda \langle w, v \rangle} = \bar\lambda\, \overline{\langle w, v \rangle} \overset{(3)}{=} \bar\lambda \langle v, w \rangle$.
- **(4)**, allo stesso modo: $\langle v, w + w' \rangle = \overline{\langle w + w', v \rangle} = \overline{\langle w, v \rangle + \langle w', v \rangle} = \overline{\langle w, v \rangle} + \overline{\langle w', v \rangle} = \langle v, w \rangle + \langle v, w' \rangle$.
- **(6)**: con $\lambda = 0$ in (2), $\langle 0, w \rangle = \langle 0 \cdot 0, w \rangle = 0 \cdot \langle 0, w \rangle = 0$; poi $\langle v, 0 \rangle = \overline{\langle 0, v \rangle} = \bar 0 = 0$.
- **(7)**: con $w = v$, l'assioma (3) dice $\langle v, v \rangle = \overline{\langle v, v \rangle}$, e un numero uguale al proprio coniugato è reale.

Le dispense lo dicono in modo esplicito: **il coniugio in (3) è un trucco per ottenere che $\langle v, v \rangle$ sia un numero reale.** Solo così ha senso chiedersi se è positivo.

> [!OSSERVAZIONE] Lineare una volta e mezzo (p. 130)
> Gli assiomi (1), (2) e la proprietà (4) sono gli stessi dei prodotti scalari, mentre la (5) è diversa: il prodotto hermitiano è **lineare a sinistra** e **antilineare a destra**. Mettendo insieme le due cose si dice che è **sesquilineare** invece che bilineare, dal latino *sesqui*, che vuol dire «uno e mezzo»: in un certo senso il prodotto hermitiano è lineare una volta e mezzo, ma non due.

| | Prodotto scalare (reale) | Prodotto hermitiano (complesso) |
|---|---|---|
| scalari e risultato | numeri reali | numeri complessi |
| primo posto | lineare | lineare |
| secondo posto | lineare: $\langle v, \lambda w \rangle = \lambda \langle v, w \rangle$ | antilineare: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$ |
| scambio | $\langle v, w \rangle = \langle w, v \rangle$ | $\langle v, w \rangle = \overline{\langle w, v \rangle}$ |
| $\langle v, v \rangle$ | reale | reale (proprietà 7) |
| matrice associata | simmetrica | hermitiana |

> [!TRAPPOLA] Lo scalare esce coniugato solo da destra
> $\langle \lambda v, w \rangle = \lambda \langle v, w \rangle$ ma $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$. Con il prodotto hermitiano euclideo (sezione successiva) e $v = w = (1, 0)$: $\langle i v, v \rangle = i$, mentre $\langle v, i v \rangle = \bar i = -i$. In questo corso, come nelle dispense e nel libro, il prodotto è lineare nel **primo** posto: alcuni testi di fisica fanno la scelta opposta.

Siccome $\langle v, v \rangle$ è reale, ha senso chiedersi se è positivo.

> [!DEF] 25.2 · Prodotto hermitiano definito positivo
> Un prodotto hermitiano è **definito positivo** se $\langle v, v \rangle > 0$ per ogni $v \neq 0$.

Con un prodotto hermitiano definito positivo si ripetono le costruzioni del caso reale. La **norma** di un vettore è

$$\lVert v \rVert = \sqrt{\langle v, v \rangle},$$

due vettori sono **ortogonali** se $\langle v, w \rangle = 0$ (e allora anche $\langle w, v \rangle = \bar 0 = 0$), si parla di **spazio ortogonale** $U^\perp$ e di **base ortonormale**, e il procedimento di **Gram–Schmidt** funziona anche in questo contesto.

## Il prodotto hermitiano euclideo (p. 130)

> [!ESEMPIO] 25.3 · Il prodotto hermitiano euclideo
> Se $x \in \C^n$ è un vettore e, più in generale, $A \in M(m, n, \C)$ è una matrice a coefficienti complessi, indichiamo con $\bar x$ e $\bar A$ il vettore o la matrice ottenuti coniugando ogni singolo elemento. Il **prodotto hermitiano euclideo** su $\C^n$ è dato da
> $$\langle x, y \rangle = {}^t x\, \bar y.$$
> È effettivamente un prodotto hermitiano, analogo al prodotto scalare euclideo: il coniugio sulla variabile $y$ rende valido l'assioma (3), infatti
> $$\overline{\langle y, x \rangle} = \overline{{}^t y\, \bar x} = {}^t \bar y\, x = {}^t x\, \bar y = \langle x, y \rangle.$$
> Come nel caso reale, il prodotto hermitiano euclideo è definito positivo, perché per ogni $x \in \C^n$ non nullo troviamo
> $$\langle x, x \rangle = {}^t x\, \bar x = x_1 \bar x_1 + \dots + x_n \bar x_n = \lvert x_1 \rvert^2 + \dots + \lvert x_n \rvert^2 > 0.$$

In coordinate: $\langle x, y \rangle = x_1 \bar y_1 + x_2 \bar y_2 + \dots + x_n \bar y_n$. Nella catena che verifica l'assioma (3), il penultimo passaggio usa che ${}^t \bar y\, x$ e ${}^t x\, \bar y$ sono la stessa somma $\sum_k \bar y_k x_k$ scritta in un altro ordine.

> [!ESEMPIO] Conti con il prodotto hermitiano euclideo
> Siano $x = (1, i)$ e $y = (2, 1 + i)$ in $\C^2$.
> - $\langle x, y \rangle = 1 \cdot \bar 2 + i \cdot \overline{1 + i} = 2 + i(1 - i) = 2 + i - i^2 = 3 + i$.
> - $\langle y, x \rangle = 2 \cdot \bar 1 + (1 + i) \cdot \bar i = 2 + (1 + i)(-i) = 2 - i - i^2 = 3 - i$: è il coniugato di $3 + i$, come vuole l'assioma (3).
> - $\lVert x \rVert^2 = \lvert 1 \rvert^2 + \lvert i \rvert^2 = 2$ e $\lVert y \rVert^2 = \lvert 2 \rvert^2 + \lvert 1 + i \rvert^2 = 4 + 2 = 6$: $\lVert x \rVert = \sqrt 2$, $\lVert y \rVert = \sqrt 6$.

> [!ESEMPIO] Vettori ortogonali e una base ortonormale di $\C^2$
> $\langle (1, i), (1, -i) \rangle = 1 \cdot 1 + i \cdot \overline{-i} = 1 + i \cdot i = 0$: i due vettori sono **ortogonali**. Entrambi hanno norma $\sqrt 2$, quindi
> $$\left\{ \tfrac{1}{\sqrt 2}(1, i),\ \tfrac{1}{\sqrt 2}(1, -i) \right\}$$
> è una base ortonormale di $\C^2$.
>
> Si arriva allo stesso risultato con **Gram–Schmidt**, partendo da $v_1 = (1, i)$ e $v_2 = (1, 0)$. Si pone $w_1 = v_1$ e
> $$w_2 = v_2 - \frac{\langle v_2, w_1 \rangle}{\langle w_1, w_1 \rangle} w_1 = (1, 0) - \frac{1}{2}(1, i) = \left(\tfrac 12, -\tfrac i2\right),$$
> dove $\langle v_2, w_1 \rangle = 1 \cdot \bar 1 + 0 \cdot \bar i = 1$. Controllo: $\langle w_2, w_1 \rangle = \frac 12 \cdot 1 + \left(-\frac i2\right) \cdot (-i) = \frac 12 + \frac{i^2}{2} = 0$. Normalizzando ($\lVert w_2 \rVert^2 = \frac 14 + \frac 14 = \frac 12$) si ritrova $\frac{1}{\sqrt 2}(1, -i)$.

> [!TRAPPOLA] L'ordine nel coefficiente di Gram–Schmidt
> Il coefficiente è $\frac{\langle v_2, w_1 \rangle}{\langle w_1, w_1 \rangle}$, con il vettore da correggere **a sinistra**. Scrivendo $\langle w_1, v_2 \rangle$ si ottiene il coniugato e il vettore trovato non è più ortogonale (nel caso reale l'ordine non contava). Il motivo: si vuole $\langle v_2 - c\, w_1, w_1 \rangle = 0$, cioè $\langle v_2, w_1 \rangle - c \langle w_1, w_1 \rangle = 0$, e $c$ esce senza coniugio solo perché sta nel **primo** posto.

## Matrici hermitiane (pp. 130–131)

Nei prodotti scalari le matrici **simmetriche** avevano un ruolo centrale (lezioni L19–L20). Nei prodotti hermitiani lo stesso ruolo tocca alle matrici hermitiane.

> [!DEF] 25.4 · Matrice hermitiana
> Una **matrice hermitiana** è una matrice quadrata complessa $H$ per cui
> $${}^t H = \bar H.$$
> In altre parole vale $H_{ij} = \overline{H_{ji}}$ per ogni $i, j$.

Pezzo per pezzo:

- ${}^t H$ scambia righe e colonne, $\bar H$ coniuga ogni elemento: la condizione dice che **trasporre è come coniugare**;
- elemento per elemento: quello in riga $i$ e colonna $j$ è il **coniugato** di quello in riga $j$ e colonna $i$, il suo «specchio» rispetto alla diagonale;
- sulla diagonale ($i = j$) la condizione diventa $H_{ii} = \overline{H_{ii}}$: **gli elementi della diagonale sono reali**.

L'esempio delle dispense:

$$\begin{pmatrix} 2 & 1 + i \\ 1 - i & 1 \end{pmatrix}.$$

La diagonale ($2$ e $1$) è reale e gli elementi fuori diagonale sono coniugati: $\overline{1 - i} = 1 + i$.

> [!OSSERVAZIONE] Matrici reali (p. 131)
> Una matrice quadrata a coefficienti **reali** è hermitiana se e solo se è **simmetrica**: per un numero reale il coniugio non cambia niente, quindi $\bar H = H$ e la condizione diventa ${}^t H = H$.

> [!METODO] Riconoscere una matrice hermitiana
> 1. La matrice deve essere **quadrata**.
> 2. La **diagonale** deve essere **reale**: un solo $i$ sulla diagonale basta a escluderla.
> 3. Ogni elemento sotto la diagonale deve essere il **coniugato** del suo specchio sopra: si cambia il segno della parte immaginaria, **non** quello della parte reale.

| Matrice | Hermitiana? | Perché |
|---|---|---|
| $\begin{pmatrix} 1 & 3 - 2i \\ 3 + 2i & -4 \end{pmatrix}$ | sì | diagonale reale, $\overline{3 + 2i} = 3 - 2i$ |
| $\begin{pmatrix} 1 & 3 - 2i \\ 3 - 2i & -4 \end{pmatrix}$ | no | è simmetrica, ma $\overline{3 - 2i} = 3 + 2i \neq 3 - 2i$ |
| $\begin{pmatrix} 1 & 3 - 2i \\ -3 - 2i & -4 \end{pmatrix}$ | no | $\overline{-3 - 2i} = -3 + 2i$: è stato cambiato anche il segno della parte reale |
| $\begin{pmatrix} i & 0 \\ 0 & 2 \end{pmatrix}$ | no | la diagonale contiene $i$ |
| $\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$ | sì | $\overline{i} = -i$ |

### Dalla matrice al prodotto

Una matrice simmetrica $S$ definisce il prodotto scalare $g_S$ su $\R^n$. Allo stesso modo una matrice hermitiana $H$ definisce un prodotto hermitiano su $\C^n$:

$$g_H(x, y) = {}^t x\, H\, \bar y.$$

Le dispense verificano l'assioma (3) con questa catena; ecco il motivo di ogni passaggio.

$$g_H(x, y) = {}^t x H \bar y \overset{(a)}{=} {}^t\big({}^t x H \bar y\big) \overset{(b)}{=} {}^t \bar y\, {}^t H\, x \overset{(c)}{=} {}^t \bar y\, \bar H x \overset{(d)}{=} \overline{{}^t y H \bar x} = \overline{g_H(y, x)}.$$

- (a) ${}^t x H \bar y$ è una matrice $1 \times 1$, cioè un numero, ed è uguale alla sua trasposta;
- (b) la trasposta di un prodotto è il prodotto delle trasposte **in ordine inverso**, e ${}^t({}^t x) = x$;
- (c) $H$ è hermitiana: ${}^t H = \bar H$;
- (d) il coniugio rispetta i prodotti: $\overline{{}^t y H \bar x} = {}^t \bar y\, \bar H\, x$.

Gli assiomi (1) e (2) si verificano come per i prodotti scalari. Inoltre, come per i prodotti scalari,

$$g_H(e_i, e_j) = {}^t e_i H \bar e_j = {}^t e_i H e_j = H_{ij},$$

dove $e_1, \dots, e_n$ è la base canonica di $\C^n$ (i suoi vettori sono reali, quindi $\bar e_j = e_j$).

In coordinate: $g_H(x, y) = \sum_{i, j} H_{ij}\, x_i \bar y_j$, cioè **il coefficiente di $x_i \bar y_j$ è $H_{ij}$**. In $\C^2$:

$$g_H(x, y) = H_{11} x_1 \bar y_1 + H_{12} x_1 \bar y_2 + H_{21} x_2 \bar y_1 + H_{22} x_2 \bar y_2.$$

Con la matrice delle dispense: $g_H(x, y) = 2 x_1 \bar y_1 + (1 + i) x_1 \bar y_2 + (1 - i) x_2 \bar y_1 + x_2 \bar y_2$.

> [!METODO] Decidere se una formula è un prodotto hermitiano
> È la domanda più frequente dell'esame su questa lezione. Per una formula su $\C^2$ del tipo $a\, x_1 \bar y_1 + b\, x_1 \bar y_2 + c\, x_2 \bar y_1 + d\, x_2 \bar y_2$:
> 1. controlla che ci sia il **coniugio sul secondo vettore** in ogni termine (le $y$ con la sbarra); una formula senza sbarre è bilineare, non hermitiana;
> 2. scrivi la matrice $H = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$: la riga è l'indice di $x$, la colonna quello di $\bar y$;
> 3. controlla che $H$ sia hermitiana: $a$ e $d$ **reali**, e $c = \bar b$.

> [!OLTRE] Hermitiano non vuol dire definito positivo
> La Definizione 25.1 non chiede la positività. La matrice $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ è hermitiana (è reale e simmetrica), quindi $g(x, y) = x_1 \bar y_1 - x_2 \bar y_2$ è un prodotto hermitiano; però $g(e_2, e_2) = -1 < 0$: non è definito positivo. Nei quiz d'esame la domanda è quasi sempre «quale è un prodotto hermitiano», e la risposta giusta può benissimo non essere definita positiva.

## La matrice associata (p. 131)

Come nel caso reale, un prodotto hermitiano si descrive con una matrice una volta scelta una base. Se $V$ è uno spazio vettoriale complesso con un prodotto hermitiano e $\mathcal B = \{v_1, \dots, v_n\}$ è una base di $V$, la **matrice associata** $H$ è

$$H_{ij} = \langle v_i, v_j \rangle \quad \text{per ogni } i, j.$$

Le dispense usano la lettera $H$ invece di $S$ perché questa matrice non è simmetrica ma **hermitiana**: per l'assioma (3), $H_{ij} = \langle v_i, v_j \rangle = \overline{\langle v_j, v_i \rangle} = \overline{H_{ji}}$.

Per ogni coppia di vettori $v, w \in V$ vale

$$\langle v, w \rangle = {}^t[v]_{\mathcal B} \cdot H \cdot \overline{[w]_{\mathcal B}},$$

dove $[v]_{\mathcal B}$ è il vettore delle coordinate di $v$ nella base $\mathcal B$. Si dimostra esattamente come per un prodotto scalare, stando attenti alla sesquilinearità (le coordinate di $w$ escono coniugate, per la proprietà 5). Ne segue che **qualsiasi prodotto hermitiano su $\C^n$ è della forma $g_H$** per una matrice hermitiana $H$: basta prendere la base canonica.

> [!ESEMPIO] La matrice del prodotto euclideo in un'altra base
> In $\C^2$ con il prodotto hermitiano euclideo prendiamo la base $\mathcal B = \{b_1, b_2\}$ con $b_1 = (1, i)$ e $b_2 = (0, 1)$.
> - $H_{11} = \langle b_1, b_1 \rangle = 1 + i \cdot \bar i = 2$;
> - $H_{12} = \langle b_1, b_2 \rangle = 1 \cdot \bar 0 + i \cdot \bar 1 = i$;
> - $H_{21} = \langle b_2, b_1 \rangle = 0 \cdot \bar 1 + 1 \cdot \bar i = -i$;
> - $H_{22} = \langle b_2, b_2 \rangle = 1$.
>
> Quindi $H = \begin{pmatrix} 2 & i \\ -i & 1 \end{pmatrix}$, hermitiana. Controllo della formula con $v = b_1 + b_2 = (1, 1 + i)$ e $w = b_2 = (0, 1)$:
> - direttamente, $\langle v, w \rangle = 1 \cdot 0 + (1 + i) \cdot 1 = 1 + i$;
> - con le coordinate $[v]_{\mathcal B} = (1, 1)$ e $[w]_{\mathcal B} = (0, 1)$ (reali, quindi il coniugio non le cambia): $H \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} i \\ 1 \end{pmatrix}$ e $(1, 1) \begin{pmatrix} i \\ 1 \end{pmatrix} = i + 1$.
>
> Stesso risultato.

## Endomorfismi autoaggiunti (pp. 132–133)

In questa sezione e nella successiva $V$ è uno spazio vettoriale **reale** con un prodotto scalare definito positivo, oppure uno spazio vettoriale **complesso** con un prodotto hermitiano definito positivo.

Partiamo da un conto in $\R^2$ con il prodotto scalare euclideo. Sia $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ e confrontiamo $\langle A e_1, e_2 \rangle$ con $\langle e_1, A e_2 \rangle$:

- $A e_1 = (2, 1)$ e $\langle (2, 1), (0, 1) \rangle = 1$;
- $A e_2 = (1, 1)$ e $\langle (1, 0), (1, 1) \rangle = 1$.

Uguali. Con la matrice $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ invece: $\langle B e_1, e_2 \rangle = \langle (1, 0), (0, 1) \rangle = 0$, ma $\langle e_1, B e_2 \rangle = \langle (1, 0), (1, 1) \rangle = 1$. La differenza: $A$ è simmetrica, $B$ no. In generale, con il prodotto euclideo, $\langle Av, w \rangle = {}^t v\, {}^t A\, w$ e $\langle v, Aw \rangle = {}^t v\, A\, w$, che coincidono per ogni $v, w$ proprio quando ${}^t A = A$.

> [!DEF] 25.5 · Endomorfismo autoaggiunto
> Un endomorfismo $T \colon V \to V$ è **autoaggiunto** se
> $$\langle T(v), w \rangle = \langle v, T(w) \rangle \quad \text{per ogni } v, w \in V.$$

Pezzo per pezzo:

- un **endomorfismo** è un'applicazione lineare da $V$ in sé stesso (lezione L16);
- «autoaggiunto»: $T$ si può **spostare da un lato all'altro** del prodotto senza cambiare il risultato;
- la definizione ricorda quella di **isometria** (lezione L22), che chiede $\langle v, w \rangle = \langle T(v), T(w) \rangle$. Le dispense avvertono: ci sono analogie, ma anche differenze importanti.

| | Isometria | Endomorfismo autoaggiunto |
|---|---|---|
| condizione | $\langle T(v), T(w) \rangle = \langle v, w \rangle$ | $\langle T(v), w \rangle = \langle v, T(w) \rangle$ |
| $T$ compare | in tutti e due i posti | in un posto solo |
| matrice in base ortonormale (reale) | ortogonale: ${}^t A A = I$ | simmetrica: ${}^t A = A$ |
| esempio in $\R^2$ | rotazione $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ |

Come per le isometrie, la definizione si traduce in una condizione concreta sulla matrice, **purché la base sia ortonormale**. Sia $\mathcal B$ una base ortonormale di $V$, $T \colon V \to V$ un endomorfismo e $A = [T]^{\mathcal B}_{\mathcal B}$ la sua matrice associata.

> [!PROP] 25.6
> L'endomorfismo $T$ è autoaggiunto se e solo se la matrice $A$ è hermitiana.

La dimostrazione delle dispense, con i passaggi spiegati.

1. **Basta controllare i vettori della base.** Per bilinearità (o sesquilinearità nel caso complesso), se l'uguaglianza della Definizione 25.5 vale per $v = v_i$ e $w = v_j$ elementi della base, vale per tutte le combinazioni lineari, cioè per tutti i vettori.
2. **La matrice del prodotto è l'identità.** La base è ortonormale, quindi $\langle v_i, v_j \rangle$ vale $1$ se $i = j$ e $0$ altrimenti: la matrice associata al prodotto è $I_n$, e $\langle v, w \rangle = {}^t[v]_{\mathcal B}\, I_n\, \overline{[w]_{\mathcal B}}$.
3. **Primo calcolo.** $[T(v_i)]_{\mathcal B} = A^i$ è la colonna $i$ di $A$, e $[v_j]_{\mathcal B} = e_j$. Quindi
$$\langle T(v_i), v_j \rangle = {}^t A^i\, e_j = A_{ji},$$
cioè la $j$-esima coordinata della colonna $i$.
4. **Secondo calcolo.** $[v_i]_{\mathcal B} = e_i$ e $[T(v_j)]_{\mathcal B} = A^j$, che va coniugata:
$$\langle v_i, T(v_j) \rangle = {}^t e_i\, \overline{A^j} = \overline{A_{ij}}.$$
5. **Conclusione.** $T$ è autoaggiunto se e solo se $A_{ji} = \overline{A_{ij}}$ per ogni $i, j$, cioè se e solo se $A$ è hermitiana. Il caso reale è identico, senza coniugi: la condizione diventa $A_{ji} = A_{ij}$, cioè $A$ simmetrica.

Prendendo la base canonica di $\R^n$ o di $\C^n$, che è ortonormale per il prodotto euclideo, si ottiene il criterio che si usa nei quiz.

> [!COROLLARIO] 25.7
> Sia $A$ una matrice $n \times n$. L'endomorfismo $L_A \colon \C^n \to \C^n$ è autoaggiunto rispetto al prodotto hermitiano euclideo di $\C^n$ se e solo se la matrice $A$ è hermitiana. Analogamente, se $A$ è reale, l'endomorfismo $L_A \colon \R^n \to \R^n$ è autoaggiunto rispetto al prodotto scalare euclideo di $\R^n$ se e solo se la matrice $A$ è simmetrica.

> [!METODO] Un'applicazione data con una formula è autoaggiunta?
> 1. Scrivi la matrice nella base canonica: per $T(x, y) = (ax + by,\ cx + dy)$ la matrice è $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ (ogni **riga** contiene i coefficienti di una **componente**).
> 2. Sui reali: autoaggiunta se e solo se la matrice è **simmetrica**, cioè $b = c$.
> 3. Sui complessi: autoaggiunta se e solo se la matrice è **hermitiana**: $a$, $d$ reali e $c = \bar b$.

> [!ESEMPIO] Tre applicazioni di $\C^2$
> - $T(x, y) = \big(x + (1 - i)y,\ (1 + i)x + 2y\big)$ ha matrice $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 2 \end{pmatrix}$: diagonale reale e $\overline{1 + i} = 1 - i$. È hermitiana, quindi $T$ è autoaggiunto.
> - $T(x, y) = (ix,\ y)$ ha matrice $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$, con $i$ sulla diagonale: non è autoaggiunto. Controllo diretto con $v = w = e_1$: $\langle T(e_1), e_1 \rangle = \langle (i, 0), (1, 0) \rangle = i$, mentre $\langle e_1, T(e_1) \rangle = \langle (1, 0), (i, 0) \rangle = \bar i = -i$.
> - $T(x, y) = (x + iy,\ ix + y)$ ha matrice $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$: è simmetrica, ma $\bar i = -i \neq i$, quindi **non** è hermitiana e $T$ non è autoaggiunto. Sui complessi «simmetrica» non basta.

> [!OSSERVAZIONE] Il doppio ruolo delle matrici hermitiane (p. 132)
> Le matrici hermitiane (o simmetriche) compaiono in due ruoli: come matrici che rappresentano un **prodotto** hermitiano (o scalare), e come matrici che rappresentano un **endomorfismo** autoaggiunto rispetto a una base ortonormale. Sono due oggetti ben distinti, anche se si rappresentano con lo stesso tipo di matrice: il primo prende due vettori e restituisce un numero, il secondo trasforma un vettore in un vettore. Non vanno confusi.

### Perché serve una base ortonormale

La Proposizione 25.6 vale solo con una base ortonormale. L'esempio delle dispense lo mostra; per scrivere un endomorfismo in un'altra base si usa la formula della lezione L16, $[T]^{\mathcal B}_{\mathcal B} = M^{-1} A M$, dove $M = [\id]^{\mathcal B}_{\mathcal C}$ ha come colonne i vettori di $\mathcal B$.

> [!ESEMPIO] 25.8
> Consideriamo $\R^2$ con il prodotto scalare euclideo. L'endomorfismo $L_A$ definito dalla matrice $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ è autoaggiunto, perché la matrice $A$ è simmetrica e stiamo usando la base canonica, che è ortonormale.
>
> Se scriviamo $L_A$ rispetto a un'altra base ortonormale, per esempio $\mathcal B = \left\{ \begin{pmatrix} 0 \\ 1 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \end{pmatrix} \right\}$, otteniamo una nuova matrice simmetrica:
> $$A' = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}.$$
> Questo è coerente con la Proposizione 25.6. Se però scriviamo $A$ rispetto a una base non ortonormale, per esempio $\mathcal B = \left\{ \begin{pmatrix} -1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \end{pmatrix} \right\}$, la nuova matrice associata può non essere simmetrica. In questo caso otteniamo
> $$A' = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -1 & 3 \end{pmatrix},$$
> che non è una matrice simmetrica.

I conti, un prodotto alla volta.

1. **Prima base.** $M = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (colonne $(0, 1)$ e $(-1, 0)$), con $\det M = 0 \cdot 0 - (-1) \cdot 1 = 1$ e inversa $M^{-1} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$. Siccome la base è ortonormale, $M$ è ortogonale e $M^{-1} = {}^t M$. Poi $M^{-1} A = \begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}$ e $(M^{-1} A) M = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$.
2. **Seconda base.** $M = \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix}$, con $\det M = 0 - 1 = -1$ e inversa $M^{-1} = \frac{1}{-1}\begin{pmatrix} 0 & -1 \\ -1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$. Poi $M^{-1} A = \begin{pmatrix} 1 & 1 \\ 3 & 2 \end{pmatrix}$ e $(M^{-1} A) M = \begin{pmatrix} 0 & 1 \\ -1 & 3 \end{pmatrix}$.

L'endomorfismo è sempre lo stesso, ed è autoaggiunto (la definizione non parla di basi); è la **matrice** che, in una base non ortonormale, perde la simmetria.

> [!TRAPPOLA] «La matrice non è simmetrica, quindi $T$ non è autoaggiunto»
> Questa conclusione è corretta solo se la base è **ortonormale**. Nei quiz le applicazioni sono quasi sempre date con una formula in coordinate canoniche, e allora il criterio del Corollario 25.7 si applica senza problemi.

## Sottospazi invarianti (p. 133)

Prendi $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ e la retta $U = \Span((1, 1))$. Siccome $A(1, 1) = (3, 3) = 3\,(1, 1)$, ogni vettore di $U$ viene mandato in $U$: la retta «resta al suo posto». Anche la retta perpendicolare $U^\perp = \Span((1, -1))$ resta al suo posto: $A(1, -1) = (1, -1)$. Non è un caso.

> [!DEF] 25.9 · Sottospazio invariante
> Sia $T \colon V \to V$ un endomorfismo. Un sottospazio $U \subseteq V$ è **$T$-invariante** se $T(U) \subseteq U$, cioè se $T$ manda gli elementi di $U$ in $U$.

Esempi che conosci già:

- $\{0\}$ e $V$ sono sempre invarianti;
- se $v$ è un **autovettore**, $T(v) = \lambda v$, la retta $\Span(v)$ è invariante: $T(t v) = t \lambda v \in \Span(v)$;
- ogni **autospazio** $V_\lambda$ è invariante (oltre le dispense: anche nucleo e immagine lo sono).

> [!PROP] 25.10
> Sia $T \colon V \to V$ un endomorfismo autoaggiunto e $U \subseteq V$ un sottospazio. Se $T(U) \subseteq U$, allora $T(U^\perp) \subseteq U^\perp$. In altre parole, se $U$ è $T$-invariante allora anche $U^\perp$ è $T$-invariante.

La dimostrazione delle dispense:

1. prendo un vettore qualsiasi $v \in U^\perp$: devo mostrare che $T(v) \in U^\perp$, cioè che $T(v)$ è ortogonale a ogni $u \in U$;
2. per ogni $u \in U$: $\langle T(v), u \rangle = \langle v, T(u) \rangle$, perché $T$ è autoaggiunto;
3. $T(u) \in U$ perché $U$ è invariante, e $v \in U^\perp$: quindi $\langle v, T(u) \rangle = 0$;
4. allora $\langle T(v), u \rangle = 0$ per ogni $u \in U$, cioè $T(v) \in U^\perp$. $\square$

> [!ESEMPIO] Senza l'ipotesi «autoaggiunto» la proposizione è falsa
> Con $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ (non simmetrica) la retta $U = \Span(e_1)$ è invariante, perché $B e_1 = e_1$. Ma $U^\perp = \Span(e_2)$ non lo è: $B e_2 = (1, 1) \notin \Span(e_2)$.

> [!IDEA] A che cosa serve
> È il motore della dimostrazione del teorema spettrale (lezione L26): trovato un autovettore $v$ di un $T$ autoaggiunto, la retta $\Span(v)$ è invariante, quindi anche $U = \Span(v)^\perp$ lo è; allora $T$ si restringe a un endomorfismo di $U$, che ha una dimensione in meno, e si ricomincia lì dentro. Passo dopo passo si costruisce una base ortonormale di autovettori.

```widget matrice
titolo: Una matrice simmetrica: le rette di autovettori sono invarianti e perpendicolari
a: 2 1; 1 2
x: 1 1
```

Lo strumento disegna le due rette di autovettori di $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$: sono $\Span((1, 1))$ (autovalore $3$) e $\Span((1, -1))$ (autovalore $1$), e sono **perpendicolari**. Trascina il vettore $x$ lungo una di esse: $Ax$ resta sulla stessa retta, cioè la retta è invariante. Poi premi il pulsante «taglio», che carica $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: l'asse $x$ resta invariante, ma l'asse $y$ no, come nell'esempio sopra.

> [!OLTRE] Dove trovarlo nel libro
> Nel libro di Martelli: prodotti hermitiani nel §11.1 (pp. 347–350: definizione 11.1.1, definito positivo 11.1.3, prodotto hermitiano euclideo e matrici hermitiane nei §11.1.3–11.1.4, un esempio con gli integrali di funzioni complesse nel §11.1.5, matrice associata nel §11.1.6); endomorfismi autoaggiunti e sottospazi invarianti nel §11.2 (pp. 350–352: Proposizione 11.2.1 = 25.6, Corollario 11.2.2 = 25.7, Esempio 11.2.3 = 25.8, Proposizione 11.2.5 = 25.10).

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha **10 quiz** a 5 risposte (una sola giusta) e **2 problemi da 11 punti**, corretti solo con **almeno 6 quiz giusti**; dura **2 ore**, **senza calcolatrice**, e si può portare solo un foglio di **4 facciate scritte a mano**. Gli appelli 2026/27 sono il **22/01/2027** e il **05/02/2027** alle 14:00. Tutti i dettagli nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026.** Solo quiz, ma frequenti: ce n'è uno in 9 dei 15 appelli. Sono punti facili, se si conosce il metodo.

- **«Quale delle seguenti è un prodotto hermitiano su $\C^2$?»**: appelli del 24/01/2024 (domanda 4), 16/01/2025 (domanda 9), 07/02/2025 (domanda 6), 02/09/2025 (domanda 7), 15/01/2026 (domanda 2). Le cinque formule differiscono per i coefficienti e per la presenza delle sbarre del coniugio.
- **«Quale matrice è (o non è) hermitiana?»**: 10/06/2024 (domanda 9), 10/07/2024 (domanda 10).
- **«Quale applicazione è (o non è) autoaggiunta?»**: 08/02/2024 (domanda 9, su $\C^2$), 03/06/2026 (domanda 9, su $\R^2$).

Tre quiz veri, svolti.

*Appello del 15/01/2026, domanda 2.* Scriviamo $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$. Quale delle seguenti è un prodotto hermitiano? (a) $x_1 \bar y_1 + 3i x_1 \bar y_2 + 2i x_2 \bar y_1 + x_2 \bar y_2$; (b) $x_1 y_1 + 2i x_1 y_2 - 2i x_2 y_1 + 2 x_2 y_2$; (c) $3i x_1 \bar y_1 + 2 x_1 \bar y_2 + 2 x_2 \bar y_1 + x_2 \bar y_2$; (d) $x_1 \bar y_1 + 2 x_1 \bar y_2 - 2 x_2 \bar y_1 + 2 x_2 \bar y_2$; (e) $3 x_1 \bar y_1 + i x_1 \bar y_2 - i x_2 \bar y_1 - x_2 \bar y_2$.

Svolgimento: (b) non ha sbarre, quindi è bilineare, scartata. Per le altre scrivo $H$: (a) $\begin{pmatrix} 1 & 3i \\ 2i & 1 \end{pmatrix}$, e $\overline{2i} = -2i \neq 3i$; (c) ha $3i$ sulla diagonale; (d) $\begin{pmatrix} 1 & 2 \\ -2 & 2 \end{pmatrix}$, e $-2 \neq \bar 2 = 2$; (e) $\begin{pmatrix} 3 & i \\ -i & -1 \end{pmatrix}$, diagonale reale e $\overline{-i} = i$: **risposta (e)**. Nota che (e) non è definita positiva ($g(e_2, e_2) = -1$): la domanda non lo chiedeva.

*Appello del 03/06/2026, domanda 9.* Quale delle seguenti applicazioni lineari $T \colon \R^2 \to \R^2$ è autoaggiunta rispetto al prodotto scalare euclideo? (a) $T(x, y) = (2x - y, -x + y)$; (b) $T(x, y) = (x - y, x + y)$; (c) $T(x, y) = (x, x)$; (d) $T(x, y) = (-x + y, 2x - y)$; (e) $T(x, y) = (x + y, y)$.

Svolgimento: le matrici sono (a) $\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$, (b) $\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$, (c) $\begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$, (d) $\begin{pmatrix} -1 & 1 \\ 2 & -1 \end{pmatrix}$, (e) $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. L'unica simmetrica è la (a): **risposta (a)**, per il Corollario 25.7.

*Appello del 10/06/2024, domanda 9.* Quale delle seguenti matrici **non** è hermitiana? (a) $\begin{pmatrix} \sqrt 2 & -2i \\ 2i & 3 \end{pmatrix}$; (b) $\begin{pmatrix} 1 & 0 & i \\ 0 & -1 & -2i \\ -i & 2i & 0 \end{pmatrix}$; (c) $\begin{pmatrix} 0 & 0 \\ 0 & \sqrt 7 \end{pmatrix}$; (d) $\begin{pmatrix} 2 & 1 - 2i \\ 1 + 2i & -2 \end{pmatrix}$; (e) $\begin{pmatrix} -2i & 3 \\ 3 & 2i \end{pmatrix}$.

Svolgimento: la (e) ha $-2i$ e $2i$ sulla diagonale, che non sono reali: **risposta (e)**. Le altre sono hermitiane: in (a) $\overline{2i} = -2i$; in (b) $\overline{-i} = i$ e $\overline{2i} = -2i$; (c) è reale e simmetrica; in (d) $\overline{1 + 2i} = 1 - 2i$.

> [!ESAME] Attenzione alle sbarre
> Negli appelli del 16/01/2025 e del 07/02/2025 le formule dei prodotti hermitiani sono stampate **senza** le sbarre del coniugio, con le variabili chiamate $(x_1, y_1)$ e $(x_2, y_2)$. Le soluzioni ufficiali ragionano comunque sulla **matrice dei coefficienti**: diagonale reale e coefficienti fuori diagonale coniugati. Se ti capita un testo così, usa lo stesso criterio.

**Errori da evitare.**

- Dimenticare di controllare la **diagonale**: un solo coefficiente non reale sulla diagonale esclude la matrice.
- Coniugare cambiando il segno della parte **reale**: $\overline{a + bi} = a - bi$, non $-a - bi$.
- Credere che una matrice complessa **simmetrica** sia hermitiana.
- Leggere la matrice di $T(x, y)$ per colonne invece che per righe: la prima **componente** di $T$ dà la prima **riga**.
- Pensare che «hermitiano» implichi «definito positivo».

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la definizione di prodotto hermitiano con le proprietà (4)–(7); ${}^tH = \bar H$ e il metodo «diagonale reale, specchi coniugati»; $g_H(x, y) = \sum H_{ij} x_i \bar y_j$; autoaggiunto $\iff$ matrice hermitiana (simmetrica) **in base ortonormale**; la Proposizione 25.10.

## Quiz

```quiz
D: Scriviamo $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$. Quale delle seguenti è un prodotto hermitiano?
+ $x_1 \bar y_1 + (1 - i) x_1 \bar y_2 + (1 + i) x_2 \bar y_1 + 3 x_2 \bar y_2$
- $x_1 \bar y_1 + (1 - i) x_1 \bar y_2 + (1 - i) x_2 \bar y_1 + 3 x_2 \bar y_2$
- $i x_1 \bar y_1 + x_1 \bar y_2 + x_2 \bar y_1 + x_2 \bar y_2$
- $x_1 y_1 + (1 - i) x_1 y_2 + (1 + i) x_2 y_1 + 3 x_2 y_2$
- $x_1 \bar y_1 + 2 x_1 \bar y_2 - 2 x_2 \bar y_1 + x_2 \bar y_2$
= La matrice $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 3 \end{pmatrix}$ ha diagonale reale e $\overline{1 + i} = 1 - i$: è hermitiana. Nella seconda $\overline{1 - i} = 1 + i \neq 1 - i$; nella terza c'è $i$ sulla diagonale; la quarta non ha coniugi (è bilineare); nella quinta $\overline{-2} = -2 \neq 2$. Simile agli appelli del 24/01/2024, 16/01/2025, 07/02/2025, 02/09/2025 e 15/01/2026.

D: Quale di queste matrici è hermitiana?
+ $\begin{pmatrix} 3 & 2 + i \\ 2 - i & 0 \end{pmatrix}$
- $\begin{pmatrix} 3 & 2 + i \\ 2 + i & 0 \end{pmatrix}$
- $\begin{pmatrix} i & 1 \\ 1 & i \end{pmatrix}$
- $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 + i \\ -1 + i & 2 \end{pmatrix}$
= Nella prima la diagonale è reale e $\overline{2 - i} = 2 + i$. La seconda e la quarta sono simmetriche ma non hermitiane ($\overline{2 + i} = 2 - i$, $\bar i = -i$); la terza ha $i$ sulla diagonale; nella quinta $\overline{-1 + i} = -1 - i \neq 1 + i$ (si è cambiato anche il segno della parte reale). Simile agli appelli del 10/06/2024 e del 10/07/2024.

D: Con il prodotto hermitiano euclideo di $\C^2$, quanto vale $\langle (1, i), (i, 1) \rangle$?
+ $0$
- $2i$
- $-2i$
- $2$
- $1 + i$
= $\langle x, y \rangle = x_1 \bar y_1 + x_2 \bar y_2 = 1 \cdot \bar i + i \cdot \bar 1 = -i + i = 0$: i due vettori sono ortogonali. $2i$ è il risultato dimenticando il coniugio ($1 \cdot i + i \cdot 1$).

D: Con il prodotto hermitiano euclideo di $\C^2$, quanto vale $\langle v, v \rangle$ per $v = (1 + i, 2i)$?
N: 6
= $\langle v, v \rangle = \lvert 1 + i \rvert^2 + \lvert 2i \rvert^2 = 2 + 4 = 6$, quindi $\lVert v \rVert = \sqrt 6$. Senza coniugio si otterrebbe $(1 + i)^2 + (2i)^2 = 2i - 4$, che non è nemmeno reale.

D: Sia $\langle\ ,\ \rangle$ un prodotto hermitiano su $V$ e $\lambda \in \C$. Quale uguaglianza vale per ogni $v, w \in V$?
+ $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lambda \langle v, w \rangle$
- $\langle \lambda v, w \rangle = \bar\lambda \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lvert \lambda \rvert \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lambda \langle w, v \rangle$
= È la proprietà (5): $\langle v, \lambda w \rangle = \overline{\langle \lambda w, v \rangle} = \overline{\lambda \langle w, v \rangle} = \bar\lambda \langle v, w \rangle$. Dal primo posto invece $\lambda$ esce senza coniugio (assioma 2).

D: In una matrice hermitiana gli elementi della diagonale sono:
+ sempre reali
- sempre nulli
- sempre immaginari puri
- sempre positivi
- numeri complessi qualsiasi
= Da $H_{ii} = \overline{H_{ii}}$ segue che $H_{ii}$ è reale. Non devono essere positivi: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ è hermitiana.

D: Quale di queste applicazioni $T \colon \R^2 \to \R^2$ è autoaggiunta rispetto al prodotto scalare euclideo?
+ $T(x, y) = (3x + 2y,\ 2x - y)$
- $T(x, y) = (3x + 2y,\ -2x - y)$
- $T(x, y) = (x + y,\ y)$
- $T(x, y) = (y,\ -x)$
- $T(x, y) = (2x,\ x + y)$
= Per il Corollario 25.7 basta che la matrice nella base canonica sia simmetrica. Solo la prima lo è: $\begin{pmatrix} 3 & 2 \\ 2 & -1 \end{pmatrix}$. Le altre hanno matrici $\begin{pmatrix} 3 & 2 \\ -2 & -1 \end{pmatrix}$, $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ (una rotazione), $\begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$. Simile all'appello del 03/06/2026 (domanda 9).

D: Quale di queste applicazioni $T \colon \C^2 \to \C^2$ **non** è autoaggiunta rispetto al prodotto hermitiano euclideo?
+ $T(x, y) = (x + iy,\ ix + y)$
- $T(x, y) = (x + iy,\ -ix + y)$
- $T(x, y) = (2x,\ 3y)$
- $T(x, y) = \big((1 + i)y,\ (1 - i)x\big)$
- $T(x, y) = (x + 2y,\ 2x)$
= La matrice $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$ è simmetrica ma non hermitiana ($\bar i = -i \neq i$). Le altre matrici sono $\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$, $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$, $\begin{pmatrix} 0 & 1 + i \\ 1 - i & 0 \end{pmatrix}$ e $\begin{pmatrix} 1 & 2 \\ 2 & 0 \end{pmatrix}$, tutte hermitiane. Simile all'appello del 08/02/2024 (domanda 9).

D: Sia $T$ un endomorfismo autoaggiunto di $\R^2$ con il prodotto scalare euclideo. Rispetto a quale tipo di base la matrice di $T$ è **sicuramente** simmetrica?
+ Una qualsiasi base ortonormale.
- Una base qualsiasi.
- Una base che contiene il vettore $e_1$.
- Una base formata da vettori di norma $2$.
- Una base la cui matrice di cambiamento ha determinante positivo.
= È la Proposizione 25.6: la condizione vale per le basi ortonormali. L'Esempio 25.8 mostra che in una base non ortonormale, come $\{(-1, 1), (1, 0)\}$, la matrice può non essere simmetrica.

D: Sia $T$ un endomorfismo autoaggiunto di $\R^3$ e sia $v$ un vettore con $T(v) = 2v$. Detto $U = \Span(v)$, quale affermazione è vera?
+ $U^\perp$ è $T$-invariante.
- $U^\perp = \Ker T$.
- $T(U^\perp) \subseteq U$.
- $T(U^\perp) = \{0\}$.
- Ogni vettore di $U^\perp$ è un autovettore con autovalore $2$.
= $U$ è invariante perché $v$ è un autovettore, e per la Proposizione 25.10 anche $U^\perp$ lo è. Le altre sono false in generale: per esempio con $T = \operatorname{diag}(2, 1, 3)$ e $v = e_1$ si ha $U^\perp = \Span(e_2, e_3)$, $T(e_2) = e_2$ e $T(e_3) = 3e_3$.
```

## Esercizi

::: esercizio base Conti con il prodotto hermitiano euclideo
Siano $x = (2 - i, 1)$ e $y = (i, 1 - i)$ in $\C^2$. Calcola $\langle x, y \rangle$, $\langle y, x \rangle$, $\lVert x \rVert$ e $\lVert y \rVert$, e verifica l'assioma (3).
::: soluzione
- $\langle x, y \rangle = (2 - i)\,\bar i + 1 \cdot \overline{1 - i} = (2 - i)(-i) + (1 + i) = -2i + i^2 + 1 + i = -2i - 1 + 1 + i = -i$.
- $\langle y, x \rangle = i \cdot \overline{2 - i} + (1 - i) \cdot \bar 1 = i(2 + i) + 1 - i = 2i + i^2 + 1 - i = 2i - 1 + 1 - i = i$.

Infatti $\overline{-i} = i$: l'assioma (3) è verificato.

- $\lVert x \rVert^2 = \lvert 2 - i \rvert^2 + \lvert 1 \rvert^2 = 5 + 1 = 6$, quindi $\lVert x \rVert = \sqrt 6$.
- $\lVert y \rVert^2 = \lvert i \rvert^2 + \lvert 1 - i \rvert^2 = 1 + 2 = 3$, quindi $\lVert y \rVert = \sqrt 3$.
:::

::: esercizio base Le proprietà che seguono dagli assiomi
Usando solo gli assiomi (1), (2), (3) della Definizione 25.1 e le regole del coniugio, dimostra che per ogni $v, w \in V$ e $\lambda, \mu \in \C$: (a) $\langle v, 0 \rangle = 0$; (b) $\langle \lambda v, \mu w \rangle = \lambda \bar\mu \langle v, w \rangle$; (c) $\langle v, w \rangle = 0$ se e solo se $\langle w, v \rangle = 0$.
::: soluzione
(a) Dall'assioma (2) con $\lambda = 0$: $\langle 0, v \rangle = \langle 0 \cdot 0, v \rangle = 0 \cdot \langle 0, v \rangle = 0$. Per l'assioma (3), $\langle v, 0 \rangle = \overline{\langle 0, v \rangle} = \bar 0 = 0$.

(b) Prima tiro fuori $\lambda$ dal primo posto (assioma 2), poi $\mu$ dal secondo (proprietà 5, dimostrata nella teoria): $\langle \lambda v, \mu w \rangle = \lambda \langle v, \mu w \rangle = \lambda \bar\mu \langle v, w \rangle$.

(c) Per l'assioma (3), $\langle w, v \rangle = \overline{\langle v, w \rangle}$, e un numero complesso è zero se e solo se è zero il suo coniugato. Quindi l'ortogonalità è una relazione simmetrica anche nel caso complesso.
:::

::: esercizio base Completare una matrice hermitiana
Completa la matrice in modo che sia hermitiana, poi stabilisci quali delle altre matrici sono hermitiane:
$$H = \begin{pmatrix} 1 & 2 - i & \ast \\ \ast & 0 & i \\ 3 & \ast & -2 \end{pmatrix}, \quad A = \begin{pmatrix} 5 & 1 + 4i \\ 1 - 4i & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 2i \\ 2i & 0 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 2 \\ 2 & 7 \end{pmatrix}.$$
::: soluzione
Ogni asterisco è il coniugato del suo specchio: $H_{21} = \overline{H_{12}} = \overline{2 - i} = 2 + i$; $H_{13} = \overline{H_{31}} = \bar 3 = 3$; $H_{32} = \overline{H_{23}} = \bar i = -i$. La diagonale $1, 0, -2$ è già reale:
$$H = \begin{pmatrix} 1 & 2 - i & 3 \\ 2 + i & 0 & i \\ 3 & -i & -2 \end{pmatrix}.$$

$A$ è hermitiana ($\overline{1 - 4i} = 1 + 4i$). $B$ no: è simmetrica, ma $\overline{2i} = -2i \neq 2i$. $C$ sì: è reale e simmetrica (Osservazione di p. 131).
:::

::: esercizio medio Dalla formula alla matrice e ritorno
Sia $g(x, y) = 2 x_1 \bar y_1 + (1 + 2i) x_1 \bar y_2 + (1 - 2i) x_2 \bar y_1 + 5 x_2 \bar y_2$ su $\C^2$. (a) Scrivi la matrice $H$ e verifica che $g$ è un prodotto hermitiano. (b) Calcola $g(v, w)$ con $v = (1, 1)$ e $w = (0, i)$, sia con la formula sia con ${}^t v H \bar w$.
::: soluzione
(a) Il coefficiente di $x_i \bar y_j$ è $H_{ij}$:
$$H = \begin{pmatrix} 2 & 1 + 2i \\ 1 - 2i & 5 \end{pmatrix}.$$
Diagonale reale e $\overline{1 - 2i} = 1 + 2i$: $H$ è hermitiana, quindi $g = g_H$ è un prodotto hermitiano.

(b) **Con la formula**: $\bar w = (0, -i)$, quindi $\bar w_1 = 0$ e $\bar w_2 = -i$. I termini con $\bar y_1$ spariscono:
$$g(v, w) = (1 + 2i) \cdot 1 \cdot (-i) + 5 \cdot 1 \cdot (-i) = (-i - 2i^2) - 5i = 2 - 6i.$$
**Con le matrici**: $H \bar w = \begin{pmatrix} (1 + 2i)(-i) \\ 5(-i) \end{pmatrix} = \begin{pmatrix} 2 - i \\ -5i \end{pmatrix}$, e ${}^t v H \bar w = (2 - i) + (-5i) = 2 - 6i$.
:::

::: esercizio medio La matrice associata in una base
In $\C^2$ con il prodotto hermitiano euclideo sia $\mathcal B = \{b_1, b_2\}$ con $b_1 = (1, 1)$ e $b_2 = (1, i)$. (a) Calcola la matrice associata $H$. (b) Verifica la formula $\langle v, w \rangle = {}^t[v]_{\mathcal B}\, H\, \overline{[w]_{\mathcal B}}$ con $v = b_1 + i\, b_2$ e $w = b_2$.
::: soluzione
(a) $H_{11} = \langle b_1, b_1 \rangle = 1 + 1 = 2$; $H_{12} = \langle b_1, b_2 \rangle = 1 \cdot \bar 1 + 1 \cdot \bar i = 1 - i$; $H_{21} = \langle b_2, b_1 \rangle = 1 + i \cdot \bar 1 = 1 + i$; $H_{22} = \langle b_2, b_2 \rangle = 1 + i \bar i = 2$. Quindi
$$H = \begin{pmatrix} 2 & 1 - i \\ 1 + i & 2 \end{pmatrix},$$
hermitiana come deve essere.

(b) In coordinate canoniche $v = (1, 1) + i(1, i) = (1 + i,\ 1 + i^2) = (1 + i, 0)$, e $\langle v, w \rangle = (1 + i) \cdot \bar 1 + 0 = 1 + i$.

Con la formula: $[v]_{\mathcal B} = (1, i)$, $[w]_{\mathcal B} = (0, 1)$, $\overline{[w]_{\mathcal B}} = (0, 1)$. Allora $H \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 - i \\ 2 \end{pmatrix}$ e ${}^t[v]_{\mathcal B} \begin{pmatrix} 1 - i \\ 2 \end{pmatrix} = 1 \cdot (1 - i) + i \cdot 2 = 1 + i$. Stesso risultato.
:::

::: esercizio medio Autoaggiunto o no?
Stabilisci quali endomorfismi sono autoaggiunti rispetto al prodotto euclideo (scalare o hermitiano): (a) $T \colon \C^2 \to \C^2$, $T(x, y) = \big(x + (1 - i)y,\ (1 + i)x + 2y\big)$; (b) $T \colon \C^2 \to \C^2$, $T(x, y) = (ix, y)$; (c) $T \colon \R^3 \to \R^3$, $T(x, y, z) = (x + 2z,\ 3y,\ 2x - z)$. Per (b) trova esplicitamente due vettori per cui la Definizione 25.5 fallisce.
::: soluzione
(a) Matrice $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 2 \end{pmatrix}$: diagonale reale, $\overline{1 + i} = 1 - i$. Hermitiana: $T$ è autoaggiunto (Corollario 25.7).

(b) Matrice $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$: non hermitiana, quindi $T$ non è autoaggiunto. Con $v = w = e_1$: $\langle T(e_1), e_1 \rangle = \langle (i, 0), (1, 0) \rangle = i$, mentre $\langle e_1, T(e_1) \rangle = \langle (1, 0), (i, 0) \rangle = 1 \cdot \bar i = -i$.

(c) Matrice $\begin{pmatrix} 1 & 0 & 2 \\ 0 & 3 & 0 \\ 2 & 0 & -1 \end{pmatrix}$: reale e simmetrica, quindi $T$ è autoaggiunto.
:::

::: esercizio medio La stessa matrice in due basi
Sia $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$, che definisce un endomorfismo autoaggiunto di $\R^2$. Calcola la matrice di $L_A$ (a) nella base ortonormale $\mathcal B = \left\{ \frac{1}{\sqrt 2}(1, 1), \frac{1}{\sqrt 2}(1, -1) \right\}$; (b) nella base $\mathcal B' = \{(1, 0), (1, 1)\}$. Commenta alla luce della Proposizione 25.6.
::: soluzione
(a) $M = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ è ortogonale e $M^{-1} = {}^t M = M$ (è anche simmetrica). Conviene notare che $A(1, 1) = (3, 3)$ e $A(1, -1) = (-1, 1)$: i vettori della base sono **autovettori**, con autovalori $3$ e $-1$. Quindi
$$[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix},$$
diagonale, e in particolare simmetrica, come prevede la Proposizione 25.6. (È un'anteprima del teorema spettrale.)

(b) $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $M^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$. Poi $M^{-1} A = \begin{pmatrix} -1 & 1 \\ 2 & 1 \end{pmatrix}$ e
$$M^{-1} A M = \begin{pmatrix} -1 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 2 & 3 \end{pmatrix},$$
che non è simmetrica: la base $\mathcal B'$ non è ortonormale ($\langle (1, 0), (1, 1) \rangle = 1 \neq 0$), e la Proposizione 25.6 non si applica.
:::

::: esercizio medio Sottospazi invarianti di una matrice simmetrica
Sia $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$. (a) Verifica che $U = \Span((0, 1, 1))$ è $L_A$-invariante. (b) Trova $U^\perp$ e verifica direttamente che è invariante, come prevede la Proposizione 25.10.
::: soluzione
(a) $A(0, 1, 1) = (0, 2, 2) = 2\,(0, 1, 1) \in U$: il generatore è un autovettore, quindi $U$ è invariante.

(b) $U^\perp = \{(x, y, z) \mid y + z = 0\} = \Span((1, 0, 0), (0, 1, -1))$. Controllo sui generatori: $A(1, 0, 0) = (2, 0, 0) \in U^\perp$ e $A(0, 1, -1) = (0, 0, 0) \in U^\perp$. Siccome $A$ è lineare, basta controllare i generatori: $U^\perp$ è invariante.
:::

::: esercizio difficile Autovalori e autovettori di un autoaggiunto
Sia $T$ un endomorfismo autoaggiunto di uno spazio con prodotto hermitiano (o scalare) definito positivo. Dimostra che: (a) se $T(v) = \lambda v$ con $v \neq 0$, allora $\lambda$ è reale; (b) se $T(v) = \lambda v$ e $T(w) = \mu w$ con $\lambda \neq \mu$, allora $\langle v, w \rangle = 0$. (Sono due fatti che userai nella lezione L26.)
::: soluzione
(a) Calcolo $\langle T(v), v \rangle$ in due modi. Da un lato $\langle \lambda v, v \rangle = \lambda \langle v, v \rangle$. Dall'altro, siccome $T$ è autoaggiunto, $\langle T(v), v \rangle = \langle v, T(v) \rangle = \langle v, \lambda v \rangle = \bar\lambda \langle v, v \rangle$. Quindi $(\lambda - \bar\lambda) \langle v, v \rangle = 0$, e siccome $\langle v, v \rangle > 0$ (definito positivo, $v \neq 0$), $\lambda = \bar\lambda$: $\lambda$ è reale.

(b) Per (a) anche $\mu$ è reale, quindi $\bar\mu = \mu$. Allora
$$\lambda \langle v, w \rangle = \langle T(v), w \rangle = \langle v, T(w) \rangle = \langle v, \mu w \rangle = \bar\mu \langle v, w \rangle = \mu \langle v, w \rangle.$$
Quindi $(\lambda - \mu) \langle v, w \rangle = 0$ e, siccome $\lambda \neq \mu$, $\langle v, w \rangle = 0$.
:::

::: esercizio difficile Hermitiana ma non definita positiva
Sia $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$. (a) Verifica che $H$ è hermitiana. (b) Trova un vettore $v \neq 0$ con $g_H(v, v) = 0$: il prodotto $g_H$ non è definito positivo.
::: soluzione
(a) Diagonale reale e $\overline{-i} = i$: hermitiana.

(b) $g_H(x, y) = x_1 \bar y_1 + i x_1 \bar y_2 - i x_2 \bar y_1 + x_2 \bar y_2$. Provo $v = (1, -i)$, quindi $\bar v = (1, i)$:
$$g_H(v, v) = 1 \cdot 1 + i \cdot 1 \cdot i + (-i)(-i) \cdot 1 + (-i) \cdot i = 1 - 1 - 1 + 1 = 0.$$
Un vettore non nullo con $g_H(v, v) = 0$: $g_H$ è hermitiano ma non definito positivo. (Si arriva a questo $v$ cercando un vettore del nucleo di $H$ e coniugandolo: $H \bar v = 0$ dà $g_H(v, v) = {}^t v\, H \bar v = 0$. Nella lezione L26 vedrai che gli autovalori di $H$ sono $0$ e $2$.)
:::

::: esercizio esame Un prodotto hermitiano con un parametro
Scriviamo $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$ e, per $a \in \C$, sia $g_a(x, y) = x_1 \bar y_1 + a\, x_1 \bar y_2 + (2 + i)\, x_2 \bar y_1 + 4\, x_2 \bar y_2$. (1) Per quali $a$ la formula è un prodotto hermitiano? (2) Per quel valore scrivi la matrice $H$ e calcola $g_a(v, v)$ con $v = (1, 1)$. (3) Trova un vettore $w \neq 0$ ortogonale a $e_1$ e calcola $g_a(w, w)$: il prodotto è definito positivo?
::: soluzione
(1) La matrice è $\begin{pmatrix} 1 & a \\ 2 + i & 4 \end{pmatrix}$: la diagonale è reale, e serve $a = \overline{2 + i} = 2 - i$. Solo per $a = 2 - i$.

(2) $H = \begin{pmatrix} 1 & 2 - i \\ 2 + i & 4 \end{pmatrix}$. Con $v = (1, 1)$ (reale, quindi $\bar v = v$) si sommano tutti gli elementi: $g(v, v) = 1 + (2 - i) + (2 + i) + 4 = 9$. È reale, come deve essere per la proprietà (7).

(3) $g(w, e_1) = \sum_i H_{i1} w_i = w_1 + (2 + i) w_2$ (perché $\bar e_1 = e_1$). Imponendo $g(w, e_1) = 0$: per esempio $w_2 = 1$ e $w_1 = -(2 + i)$, cioè $w = (-2 - i, 1)$. Allora, con $\bar w = (-2 + i, 1)$:
$$g(w, w) = (-2 - i)(-2 + i) + (2 - i)(-2 - i) + (2 + i)(-2 + i) + 4 = 5 - 5 - 5 + 4 = -1.$$
(Conti: $(-2 - i)(-2 + i) = 4 - i^2 = 5$; $(2 - i)(-2 - i) = -(2 - i)(2 + i) = -5$; $(2 + i)(-2 + i) = -(2 + i)(2 - i) = -5$.) Un vettore non nullo con $g(w, w) < 0$: il prodotto **non** è definito positivo.
:::

::: esercizio esame Un endomorfismo autoaggiunto di $\C^2$
Sia $T \colon \C^2 \to \C^2$, $T(x, y) = \big(2x + (1 - i)y,\ (1 + i)x + 3y\big)$. (1) Scrivi la matrice $A$ di $T$ nella base canonica e mostra che $T$ è autoaggiunto rispetto al prodotto hermitiano euclideo. (2) Verifica direttamente che $\langle T(e_1), e_2 \rangle = \langle e_1, T(e_2) \rangle$. (3) Verifica che $U = \Span((-1 + i, 1))$ è $T$-invariante, trova $U^\perp$ e verifica che anche $U^\perp$ è invariante.
::: soluzione
(1) $A = \begin{pmatrix} 2 & 1 - i \\ 1 + i & 3 \end{pmatrix}$: diagonale reale e $\overline{1 + i} = 1 - i$. È hermitiana, quindi $T$ è autoaggiunto (Corollario 25.7).

(2) $T(e_1) = (2, 1 + i)$ e $\langle (2, 1 + i), (0, 1) \rangle = (1 + i) \cdot \bar 1 = 1 + i$. $T(e_2) = (1 - i, 3)$ e $\langle (1, 0), (1 - i, 3) \rangle = 1 \cdot \overline{1 - i} = 1 + i$. Uguali.

(3) $T(-1 + i, 1) = \big(2(-1 + i) + (1 - i),\ (1 + i)(-1 + i) + 3\big) = (-1 + i,\ -2 + 3) = (-1 + i, 1)$: il generatore è un autovettore con autovalore $1$, quindi $U$ è invariante. (Conto: $(1 + i)(-1 + i) = -1 + i - i + i^2 = -2$.)

$U^\perp$ è formato dai $w$ con $\langle w, (-1 + i, 1) \rangle = w_1 \cdot \overline{-1 + i} + w_2 \cdot 1 = (-1 - i) w_1 + w_2 = 0$, cioè $w_2 = (1 + i) w_1$: $U^\perp = \Span((1, 1 + i))$. Controllo: $T(1, 1 + i) = \big(2 + (1 - i)(1 + i),\ (1 + i) + 3(1 + i)\big) = (4,\ 4 + 4i) = 4\,(1, 1 + i)$. Anche $U^\perp$ è invariante (è la retta degli autovettori di autovalore $4$), come prevede la Proposizione 25.10.
:::

## Domande di ripasso

::: domanda Perché su $\C^n$ non si può usare la formula $x_1 y_1 + \dots + x_n y_n$ per misurare le lunghezze?
Perché darebbe valori non reali o nulli per vettori non nulli: per $(1, i)$ si ottiene $1 + i^2 = 0$. Coniugando il secondo vettore si ottiene $\lvert x_1 \rvert^2 + \dots + \lvert x_n \rvert^2$, reale e positivo.
:::

::: domanda Quali sono gli assiomi di un prodotto hermitiano?
(1) $\langle v + v', w \rangle = \langle v, w \rangle + \langle v', w \rangle$; (2) $\langle \lambda v, w \rangle = \lambda \langle v, w \rangle$; (3) $\langle v, w \rangle = \overline{\langle w, v \rangle}$, per ogni $v, v', w$ e ogni $\lambda \in \C$.
:::

::: domanda Che cosa vuol dire sesquilineare? Come esce uno scalare dal secondo posto?
Lineare nel primo posto e antilineare nel secondo: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$. «Sesqui» vuol dire uno e mezzo.
:::

::: domanda Perché $\langle v, v \rangle$ è sempre reale?
Per l'assioma (3) con $w = v$: $\langle v, v \rangle = \overline{\langle v, v \rangle}$, e un numero uguale al suo coniugato è reale.
:::

::: domanda Che cos'è il prodotto hermitiano euclideo? È definito positivo?
$\langle x, y \rangle = {}^t x\, \bar y = x_1 \bar y_1 + \dots + x_n \bar y_n$ su $\C^n$. È definito positivo: $\langle x, x \rangle = \lvert x_1 \rvert^2 + \dots + \lvert x_n \rvert^2 > 0$ per $x \neq 0$.
:::

::: domanda Che cos'è una matrice hermitiana? Che cosa si può dire della sua diagonale?
Una matrice quadrata complessa con ${}^t H = \bar H$, cioè $H_{ij} = \overline{H_{ji}}$. Gli elementi della diagonale sono reali. Una matrice reale è hermitiana se e solo se è simmetrica.
:::

::: domanda Come si passa da una formula $g(x, y) = \sum a_{ij} x_i \bar y_j$ alla matrice, e come si decide se è un prodotto hermitiano?
La matrice ha $H_{ij} = a_{ij}$ (riga = indice di $x$, colonna = indice di $\bar y$). La formula è un prodotto hermitiano se e solo se $H$ è hermitiana, e se tutti i termini hanno il coniugio sul secondo vettore.
:::

::: domanda Che cos'è la matrice associata a un prodotto hermitiano in una base?
$H_{ij} = \langle v_i, v_j \rangle$. È hermitiana e $\langle v, w \rangle = {}^t[v]_{\mathcal B}\, H\, \overline{[w]_{\mathcal B}}$.
:::

::: domanda Che cos'è un endomorfismo autoaggiunto? Che differenza c'è con un'isometria?
$T$ è autoaggiunto se $\langle T(v), w \rangle = \langle v, T(w) \rangle$ per ogni $v, w$. Un'isometria invece soddisfa $\langle T(v), T(w) \rangle = \langle v, w \rangle$. In base ortonormale reale: autoaggiunto vuol dire matrice simmetrica, isometria vuol dire matrice ortogonale.
:::

::: domanda Che cosa dice la Proposizione 25.6? Perché serve la base ortonormale?
In una base ortonormale, $T$ è autoaggiunto se e solo se la sua matrice è hermitiana (simmetrica nel caso reale). La dimostrazione usa che la matrice del prodotto in quella base è l'identità; in una base non ortonormale la matrice di un autoaggiunto può non essere simmetrica (Esempio 25.8).
:::

::: domanda Come si stabilisce se $T(x, y) = (ax + by, cx + dy)$ è autoaggiunto?
Si scrive la matrice $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ nella base canonica (ortonormale) e si controlla che sia simmetrica (caso reale) o hermitiana (caso complesso), per il Corollario 25.7.
:::

::: domanda Che cos'è un sottospazio invariante? Che cosa dice la Proposizione 25.10?
$U$ è $T$-invariante se $T(U) \subseteq U$. Se $T$ è autoaggiunto e $U$ è invariante, allora anche $U^\perp$ è invariante: per $v \in U^\perp$ e $u \in U$, $\langle T(v), u \rangle = \langle v, T(u) \rangle = 0$.
:::

## Glossario

```glossario
Coniugato | Di $z = a + bi$ è $\bar z = a - bi$; vale $z \bar z = \lvert z \rvert^2$.
Prodotto hermitiano | Applicazione $V \times V \to \C$ lineare nel primo posto con $\langle v, w \rangle = \overline{\langle w, v \rangle}$ (Definizione 25.1).
Sesquilineare | Lineare nel primo posto e antilineare nel secondo: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$.
Antilineare | Che fa uscire gli scalari coniugati: $f(\lambda w) = \bar\lambda f(w)$.
Prodotto hermitiano definito positivo | Con $\langle v, v \rangle > 0$ per ogni $v \neq 0$ (Definizione 25.2).
Norma (caso complesso) | $\lVert v \rVert = \sqrt{\langle v, v \rangle}$, per un prodotto hermitiano definito positivo.
Prodotto hermitiano euclideo | Su $\C^n$: $\langle x, y \rangle = {}^t x\, \bar y = x_1 \bar y_1 + \dots + x_n \bar y_n$.
Matrice coniugata | $\bar A$: la matrice con tutti gli elementi coniugati.
Matrice hermitiana | Matrice quadrata con ${}^t H = \bar H$, cioè $H_{ij} = \overline{H_{ji}}$; ha la diagonale reale.
Prodotto $g_H$ | Il prodotto hermitiano $g_H(x, y) = {}^t x\, H\, \bar y$ definito da una matrice hermitiana $H$; il coefficiente di $x_i \bar y_j$ è $H_{ij}$.
Matrice associata (caso hermitiano) | $H_{ij} = \langle v_i, v_j \rangle$ rispetto a una base; vale $\langle v, w \rangle = {}^t[v]\, H\, \overline{[w]}$.
Endomorfismo autoaggiunto | $T$ con $\langle T(v), w \rangle = \langle v, T(w) \rangle$ per ogni $v, w$ (Definizione 25.5).
Base ortonormale | Base di vettori di norma $1$ a due a due ortogonali; in essa la matrice del prodotto è l'identità.
Sottospazio $T$-invariante | Sottospazio $U$ con $T(U) \subseteq U$ (Definizione 25.9).
Complemento ortogonale $U^\perp$ | Insieme dei vettori ortogonali a tutti i vettori di $U$.
```

## Checklist

```checklist
- So spiegare perché sui complessi serve il coniugio nel prodotto, con l'esempio del vettore $(1, i)$.
- So enunciare gli assiomi del prodotto hermitiano e dimostrare le proprietà (4), (5), (6), (7).
- So calcolare prodotti hermitiani e norme in $\C^n$ senza dimenticare i coniugi.
- So usare Gram–Schmidt in $\C^n$ con il coefficiente $\frac{\langle v, w \rangle}{\langle w, w \rangle}$ nell'ordine giusto.
- So riconoscere a colpo d'occhio una matrice hermitiana: diagonale reale, elementi simmetrici coniugati.
- So passare da una formula $\sum a_{ij} x_i \bar y_j$ alla matrice e decidere se è un prodotto hermitiano.
- So calcolare la matrice associata a un prodotto hermitiano in una base e usare la formula ${}^t[v] H \overline{[w]}$.
- So definire un endomorfismo autoaggiunto e distinguerlo da un'isometria.
- So stabilire se un'applicazione data con una formula è autoaggiunta, e so che il criterio richiede una base ortonormale.
- So dimostrare che, per $T$ autoaggiunto, se $U$ è invariante anche $U^\perp$ lo è.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 25 «Teorema spettrale I», pp. 129–133: sezioni 25.A (prodotti hermitiani), 25.B (matrici hermitiane), 25.C (matrice associata), 25.D (endomorfismi autoaggiunti) e 25.E (sottospazi invarianti), seguite in ordine con la numerazione originale (Definizioni 25.1, 25.2, 25.4, 25.5, 25.9; Esempio 25.3; Proposizioni 25.6, 25.10; Corollario 25.7; Esempio 25.8). Dalle lezioni precedenti: coniugio e modulo (lezione 2), cambiamento di base per gli endomorfismi (lezione 16), isometrie (lezione 22). Questa lezione delle dispense non ha una sezione di esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §11.1 (prodotti hermitiani, matrici hermitiane, matrice associata) e §11.2 (endomorfismi autoaggiunti, sottospazi invarianti).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): testo riportato del 15/01/2026 (domanda 2), del 03/06/2026 (domanda 9) e del 10/06/2024 (domanda 9), con soluzioni scritte per questi appunti; citati per tipo di domanda gli appelli del 24/01/2024, 08/02/2024, 10/07/2024, 16/01/2025, 07/02/2025 e 02/09/2025.
- Le parti **«Oltre le dispense»** (motivazione con il vettore $(1, i)$, richiamo sul coniugio, esempi numerici, Gram–Schmidt in $\C^2$, criterio per le formule, «hermitiano non vuol dire definito positivo», esercizi) sono aggiunte di questi appunti per collegare la lezione al libro e all'esame.
