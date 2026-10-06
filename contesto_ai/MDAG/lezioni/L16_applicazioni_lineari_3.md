---
corso: MDAG
modulo: AG
lezione: L16
titolo: Applicazioni lineari III
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L16
descrizione: >-
  Appunti della lezione L16 di Algebra lineare e Geometria (MDAG, parte 2): matrice di cambiamento di base,
  composizione di applicazioni lineari e prodotto di matrici, endomorfismi e matrici simili, con quiz nello stile
  dell'esame ed esercizi svolti.
lede: >-
  Lo stesso vettore si può dire in lingue diverse, come una lunghezza in metri o in piedi: la matrice di
  cambiamento di base fa da traduttore. Poi perché mettere due macchine una dopo l'altra vuol dire moltiplicare le
  loro matrici, e quando due matrici descrivono la stessa macchina in due lingue: le matrici simili.
materiale: dispense
scheda:
  Dispense: lezione 16 · pp. 79–84
  Libro: Martelli, §4.2.4, §4.3.3, §4.3.5 e §4.4
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 16 «Applicazioni lineari III»; B. Martelli, Geometria e algebra lineare, §4.2.4, §4.3 e §4.4
appunti_html: appunti/MDAG/L16_applicazioni_lineari_3.html
genera_html: true
---

## In breve

- Le coordinate di un vettore dipendono dalla base, come una misura dipende dall'unità. La **matrice di cambiamento di base** è il traduttore: prende le coordinate in una base e restituisce quelle nell'altra.
- Se la base di arrivo è quella canonica, il traduttore si scrive subito: i vettori della base di partenza **in colonna**. Per tradurre nel verso opposto si usa la matrice inversa.
- Mettere due macchine lineari **una dopo l'altra** dà ancora una macchina lineare, e la sua matrice è il **prodotto** delle due matrici. La macchina che agisce per prima sta **a destra**.
- Una macchina è un isomorfismo esattamente quando la sua matrice è invertibile; la matrice della macchina inversa è la matrice inversa.
- Un **endomorfismo** è una macchina che parte e arriva nello stesso spazio. Cambiando base, la sua matrice cambia secondo la formula $M^{-1}AM$.
- Due matrici sono **simili** quando descrivono la stessa macchina in due basi diverse. Hanno lo stesso rango, lo stesso determinante e la stessa traccia, ma questo non basta per dire che sono simili.
- All'esame: matrici di cambiamento di base, matrici di una composizione e matrici in una base data sono tra le domande più frequenti.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Il traduttore tra due basi (pp. 79–80)

Una stanza è lunga 3 metri, cioè circa 9,84 piedi. La lunghezza è la stessa; cambiano i numeri, perché cambia l'unità di misura. Con i vettori succede lo stesso: un vettore resta lo stesso, ma le sue **coordinate** cambiano se cambia la base (lezione L15).

Come nelle dispense, i vettori di $\K^n$ sono colonne; nel testo li scriviamo in riga, $(1, 2)$, per risparmiare spazio.

### Un esempio per cominciare

Nel piano prendi due basi. La prima, che chiamo $\mathcal B$, è fatta dai vettori $(1, 1)$ e $(1, -1)$. La seconda è la base canonica, che chiamo $\mathcal C$. Un vettore ha coordinate $(2, 1)$ nella prima base: si arriva con due passi lungo $(1, 1)$ e un passo lungo $(1, -1)$. Che vettore è? Basta rifare la ricetta:

$$v = 2 \cdot (1, 1) + 1 \cdot (1, -1) = (3, 1).$$

Nella base canonica le coordinate sono i numeri stessi del vettore: $(3, 1)$.

Lo stesso conto si scrive come un prodotto, mettendo **in colonna** i vettori di $\mathcal B$:

$$\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 + 1 \\ 2 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}.$$

La matrice che ha in colonna i due vettori della prima base traduce le coordinate da quella base alla base canonica. È la matrice della macchina **identità**, quella che lascia ogni vettore com'è, scritta con $\mathcal B$ in partenza e $\mathcal C$ in arrivo: la colonna $j$ è $[\id(v_j)]_{\mathcal C} = [v_j]_{\mathcal C}$. Le dispense le danno un nome.

> [!DEF] 16.1 · Matrice di cambiamento di base
> Sia $V$ uno spazio vettoriale e $\mathcal B = \{v_1, \dots, v_n\}$ e $\mathcal C = \{w_1, \dots, w_n\}$ due basi di $V$. La **matrice di cambiamento di base da $\mathcal B$ a $\mathcal C$** è la matrice
> $$A = [\id]^{\mathcal B}_{\mathcal C}.$$

**Come si legge.**

- È la matrice della macchina identità, con $\mathcal B$ in partenza (in alto) e $\mathcal C$ in arrivo (in basso). È quadrata $n \times n$.
- **Ogni colonna** contiene le coordinate di un vettore della base di partenza, scritte nella base di arrivo: $A^j = [v_j]_{\mathcal C}$.
- **L'inversa** è il traduttore nel verso opposto: $A^{-1} = [\id]^{\mathcal C}_{\mathcal B}$. Che sia proprio l'inversa lo dimostra il Corollario 16.7, più avanti.

Dalla Proposizione 15.9 della lezione L15, con la macchina identità, viene subito la regola per tradurre.

> [!PROP] 16.2
> Per ogni $v \in V$ vale
> $$[v]_{\mathcal C} = A \cdot [v]_{\mathcal B}.$$

**Come si legge.** Le coordinate nella base $\mathcal C$ sono il traduttore per le coordinate nella base $\mathcal B$.

> [!NOTA] Un rimando da correggere
> Nelle dispense, a p. 79, la Proposizione 16.2 è introdotta con «Dalla Proposizione 15.10 ricaviamo». Il risultato usato è la **Proposizione 15.9** ($[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$); il numero 15.10 è un esempio.

> [!TRAPPOLA] In quale verso traduce la matrice?
> $[\id]^{\mathcal B}_{\mathcal C}$ **prende** coordinate rispetto a $\mathcal B$ (in alto) e **restituisce** coordinate rispetto a $\mathcal C$ (in basso). Nelle colonne ha i vettori **di $\mathcal B$** scritti nella base $\mathcal C$. L'errore tipico è usare la matrice con i vettori di $\mathcal B$ in colonna per passare dalle coordinate canoniche a quelle rispetto a $\mathcal B$: per quello serve l'**inversa**.
>
> Nell'esempio, per tornare indietro si usa l'inversa $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}^{-1} = \frac 12 \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, e infatti $\frac 12 (3 + 1,\ 3 - 1) = (2, 1)$: sono di nuovo le coordinate nella prima base.

> [!METODO] La matrice di cambiamento di base, due casi
> 1. **La base di arrivo è quella canonica.** Le coordinate di un vettore nella base canonica sono i suoi numeri, quindi il traduttore si scrive subito: **i vettori della base di partenza in colonna**, nell'ordine. Per il verso opposto si calcola l'inversa.
> 2. **Nessuna delle due basi è canonica.** Si risolve un sistema per ogni vettore della base di partenza, come nella Soluzione 1 qui sotto. Oppure si passa dalla base canonica $\mathcal E$: $[\id]^{\mathcal B}_{\mathcal C} = [\id]^{\mathcal E}_{\mathcal C}\,[\id]^{\mathcal B}_{\mathcal E} = \big([\id]^{\mathcal C}_{\mathcal E}\big)^{-1}[\id]^{\mathcal B}_{\mathcal E}$. È la regola delle macchine una dopo l'altra, che vedi nella prossima sezione.

::: prova Nella base $\{(2, 1), (1, 1)\}$ un vettore ha coordinate $(1, 3)$. Chi è il vettore?
Il traduttore verso la base canonica ha i due vettori in colonna: $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 + 3 \\ 1 + 3 \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \end{pmatrix}$.
:::

### Un esempio svolto in due modi

Le dispense chiamano questo esempio «Esercizio 16.3» e lo risolvono nel testo, con due metodi.

> [!ESEMPIO] Esercizio 16.3 · Dalla base canonica alla base $\mathcal B$
> Siano $\mathcal A = \{e_1, e_2, e_3\}$ la base canonica di $\R^3$ e $\mathcal B = \{w_1, w_2, w_3\}$ definita da
> $$w_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \qquad w_2 = \begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix}, \qquad w_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$
> Vogliamo trovare la matrice di cambiamento di base $A = [\id]^{\mathcal A}_{\mathcal B}$.
>
> **Soluzione 1.** Per costruzione $A = (a_{ij})$, dove gli $a_{ij}$ sono le soluzioni del sistema
> $$\begin{cases} e_1 = a_{11} w_1 + a_{21} w_2 + a_{31} w_3 \\ e_2 = a_{12} w_1 + a_{22} w_2 + a_{32} w_3 \\ e_3 = a_{13} w_1 + a_{23} w_2 + a_{33} w_3. \end{cases}$$
> La prima equazione, componente per componente, diventa
> $$\begin{cases} a_{11} = 1 \\ 2a_{11} + 2a_{21} + a_{31} = 0 \\ 3a_{11} + a_{21} + a_{31} = 0 \end{cases}$$
> Con $a_{11} = 1$: $2a_{21} + a_{31} = -2$ e $a_{21} + a_{31} = -3$. Sottraendo, $a_{21} = 1$, e poi $a_{31} = -3 - 1 = -4$. Allo stesso modo:
> - per $e_2$: $a_{12} = 0$, $2a_{22} + a_{32} = 1$, $a_{22} + a_{32} = 0$, quindi $a_{22} = 1$ e $a_{32} = -1$;
> - per $e_3$: $a_{13} = 0$, $2a_{23} + a_{33} = 0$, $a_{23} + a_{33} = 1$, quindi $a_{23} = -1$ e $a_{33} = 2$.
>
> Mettendo le soluzioni in colonna:
> $$A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}.$$
>
> **Soluzione 2.** Calcoliamo prima $A^{-1} = [\id]^{\mathcal B}_{\mathcal A}$. La sua colonna $j$ è $[w_j]_{\mathcal A}$, e siccome $\mathcal A$ è la base canonica $[w_j]_{\mathcal A} = w_j$. Quindi
> $$A^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 2 & 1 \\ 3 & 1 & 1 \end{pmatrix}, \qquad A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 2 & 1 \\ 3 & 1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}.$$

L'inversa della Soluzione 2 si calcola con i cofattori (lezione L10). Il determinante, lungo la prima riga, è $1 \cdot (2 \cdot 1 - 1 \cdot 1) = 1$. La trasposta dei cofattori, divisa per 1, dà proprio $A$. Controllo sulla prima colonna: $1 \cdot w_1 + 1 \cdot w_2 - 4 \cdot w_3 = (1 + 0 - 0,\ 2 + 2 - 4,\ 3 + 1 - 4) = (1, 0, 0) = e_1$.

Nello strumento qui sotto la matrice è già $A^{-1}$: i vettori di $\mathcal B$ in colonna, cioè scritti per righe come $1\ 0\ 0;\ 2\ 2\ 1;\ 3\ 1\ 1$. Premi il pulsante e guarda le mosse di Gauss che trasformano $(A^{-1} \mid I)$ in $(I \mid A)$.

```widget gauss
titolo: L'inversa di $[\id]^{\mathcal B}_{\mathcal A}$ è $[\id]^{\mathcal A}_{\mathcal B}$
matrice: 1 0 0; 2 2 1; 3 1 1
modo: inversa
modi: inversa, determinante
```

> [!RICORDA]
> - La matrice di cambiamento di base traduce le coordinate da una base all'altra. Nelle colonne ha i vettori della base di partenza, scritti nella base di arrivo.
> - Verso la base canonica: i vettori in colonna. Nel verso opposto: l'inversa.

## Due macchine una dopo l'altra (pp. 80–81)

Oltre a sommarle (lezione L15), le macchine lineari si possono mettere **in fila**: prima agisce $f$, poi sull'uscita agisce $g$. La nuova macchina si chiama **composizione** e si scrive $g \circ f$, che si legge «g dopo f».

> [!ESEMPIO] · comporre e moltiplicare
> Siano $f(x, y) = (x + y,\ y)$ e $g(u, v) = (2u,\ u - v)$, dal piano al piano. Allora
> $$(g \circ f)(x, y) = g(x + y,\ y) = \big(2(x + y),\ (x + y) - y\big) = (2x + 2y,\ x).$$
> Le matrici nelle basi canoniche sono $[f] = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e $[g] = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}$, e il prodotto
> $$[g]\,[f] = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 \cdot 1 + 0 \cdot 0 & 2 \cdot 1 + 0 \cdot 1 \\ 1 \cdot 1 - 1 \cdot 0 & 1 \cdot 1 - 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 1 & 0 \end{pmatrix}$$
> è proprio la matrice di $g \circ f$. Controllo su un vettore: $f(3, 5) = (8, 5)$ e $g(8, 5) = (16, 3)$; con la matrice, $(2 \cdot 3 + 2 \cdot 5,\ 3) = (16, 3)$.

Per prima cosa, la nuova macchina è ancora lineare. Le dispense lo scrivono così.

> [!PROP] 16.4
> Se $f : V \to W$ e $g : W \to Z$ sono funzioni lineari, anche la composizione
> $$g \circ f : V \to Z$$
> lo è.

**Come si legge.** Due macchine che rispettano somme e multipli, messe in fila, danno una macchina che rispetta somme e multipli.

> [!DIM] della Proposizione 16.4 (le dispense non la riportano)
> Per $v, v'$ in $V$ e un numero $\lambda$:
> $$(g \circ f)(v + v') = g\big(f(v) + f(v')\big) = g(f(v)) + g(f(v')), \qquad (g \circ f)(\lambda v) = g\big(\lambda f(v)\big) = \lambda\, g(f(v)).$$
> Nel primo passaggio di ciascuna catena si usa la linearità di $f$, nel secondo quella di $g$.

Per le macchine date da una matrice, la composizione è proprio il prodotto delle matrici. Le dispense lo scrivono così.

> [!PROP] 16.5
> Siano $A \in M(k, m, \K)$ e $B \in M(m, n, \K)$. Consideriamo
> $$L_A : \K^m \to \K^k, \qquad L_B : \K^n \to \K^m.$$
> Vale la relazione
> $$L_A \circ L_B = L_{AB}.$$

**Come si legge.** Moltiplicare prima per una matrice e poi per un'altra è come moltiplicare una volta sola per il loro prodotto. Il motivo, per ogni colonna $x$:

$$L_A(L_B(x)) = A(Bx) = (AB)x = L_{AB}(x).$$

Il passaggio in mezzo è la regola delle parentesi del prodotto di matrici (lezione L08). Anche le taglie tornano. Per esempio, se $B$ è $3 \times 2$ trasforma coppie di numeri in terne. Se poi $A$ è $4 \times 3$, trasforma le terne in liste di 4 numeri. Il prodotto $AB$ è $4 \times 2$: va direttamente dalle coppie alle liste di 4 numeri.

Lo stesso vale con basi qualsiasi. Le dispense lo scrivono così.

> [!PROP] 16.6
> Siano $f : U \to V$ e $g : V \to W$ due applicazioni lineari. Siano $\mathcal B$, $\mathcal C$ e $\mathcal D$ basi di $U$, $V$ e $W$. Troviamo
> $$[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f]^{\mathcal B}_{\mathcal C}.$$

**Come si legge.** La matrice delle due macchine in fila è il prodotto delle due matrici, con quella della prima macchina a destra. La base $\mathcal C$ dello spazio di mezzo compare in tutte e due le matrici e «sparisce» nel risultato.

La dimostrazione delle dispense, con i passaggi:

1. Sia $\mathcal B = \{v_1, \dots, v_n\}$. Nella colonna $i$ della matrice di $g \circ f$ ci sono le coordinate di $g(f(v_i))$.
2. Per la Proposizione 15.9, con la macchina $g$ e il vettore $f(v_i)$: $[g(f(v_i))]_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f(v_i)]_{\mathcal C}$.
3. Ma le coordinate di $f(v_i)$ sono proprio la colonna $i$ della matrice di $f$. E una colonna di un prodotto di due matrici è la prima matrice per la colonna corrispondente della seconda.
4. Quindi le due matrici hanno le stesse colonne: sono uguali.

> [!TRAPPOLA] L'ordine: si legge da destra a sinistra
> «g dopo f» vuol dire che agisce prima $f$, e nel prodotto la sua matrice sta **a destra**: $[g][f]$. Il prodotto di matrici non rispetta lo scambio, quindi $[f][g]$ di solito è un'altra matrice, o non si può nemmeno calcolare se le taglie non tornano. Un aiuto: nella formula le basi si incastrano come tessere del domino, $[g]^{\mathcal C}_{\mathcal D}[f]^{\mathcal B}_{\mathcal C}$, e la base $\mathcal C$ in mezzo deve essere la stessa sopra e sotto.

> [!ESEMPIO] · composizione con i polinomi
> Siano $f : \R^2 \to \R_2[x]$, $f(u, v) = u x^2 + v$, e $g : \R_2[x] \to \R^2$, $g(p) = (p(1),\ p(2))$. Con le basi canoniche $\mathcal E$ di $\R^2$ e $\mathcal B = \{1, x, x^2\}$ dei polinomi:
> - $f(e_1) = x^2$ e $f(e_2) = 1$, con coordinate $(0, 0, 1)$ e $(1, 0, 0)$, quindi $[f]^{\mathcal E}_{\mathcal B} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \\ 1 & 0 \end{pmatrix}$;
> - $g(1) = (1, 1)$, $g(x) = (1, 2)$, $g(x^2) = (1, 4)$, quindi $[g]^{\mathcal B}_{\mathcal E} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}$.
>
> Per la Proposizione 16.6:
> $$[g \circ f]^{\mathcal E}_{\mathcal E} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 4 & 1 \end{pmatrix}.$$
> Controllo diretto: $(g \circ f)(u, v) = g(ux^2 + v) = (u + v,\ 4u + v)$, che ha proprio questa matrice.

::: prova Siano $f(x, y) = (2x, y)$ e $g(x, y) = (y, x)$. Qual è la matrice di $g \circ f$?
$[g][f] = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$. Controllo: $g(f(x, y)) = g(2x, y) = (y, 2x)$.
:::

### Isomorfismi e matrici invertibili

Una macchina ha un'inversa, cioè si può disfare, esattamente quando la sua matrice si può invertire. Le dispense lo scrivono così.

> [!COROLLARIO] 16.7
> La funzione $f$ è un isomorfismo se e solo se la matrice associata $[f]^{\mathcal B}_{\mathcal C}$ è invertibile, e in questo caso la sua inversa è
> $$\big[f^{-1}\big]^{\mathcal C}_{\mathcal B}.$$

**Come si legge.** Per sapere se una macchina è un isomorfismo, basta guardare la sua matrice: deve essere quadrata con determinante diverso da zero. E la matrice della macchina inversa è la matrice inversa.

> [!DIM] del Corollario 16.7
> La dimostrazione delle dispense, spiegata.
> 1. **Se $f$ è un isomorfismo, la matrice è invertibile.** C'è la macchina inversa $f^{-1}$, con $f^{-1} \circ f = \id_V$ e $f \circ f^{-1} = \id_W$. Per la Proposizione 16.6 e la Proposizione 15.11 ($[\id]^{\mathcal B}_{\mathcal B} = I_n$):
> $$[f^{-1}]^{\mathcal C}_{\mathcal B}\,[f]^{\mathcal B}_{\mathcal C} = [f^{-1} \circ f]^{\mathcal B}_{\mathcal B} = I_n \qquad\text{e}\qquad [f]^{\mathcal B}_{\mathcal C}\,[f^{-1}]^{\mathcal C}_{\mathcal B} = [f \circ f^{-1}]^{\mathcal C}_{\mathcal C} = I_n,$$
> quindi $[f^{-1}]^{\mathcal C}_{\mathcal B}$ è l'inversa di $[f]^{\mathcal B}_{\mathcal C}$.
> 2. **Se la matrice è invertibile, $f$ è un isomorfismo.** Sia $A = [f]^{\mathcal B}_{\mathcal C}$. Per il Teorema 15.12 ogni matrice è la matrice di una macchina lineare: c'è $g$ con $[g]^{\mathcal C}_{\mathcal B} = A^{-1}$. Allora $[g \circ f]^{\mathcal B}_{\mathcal B} = A^{-1}A = I_n = [\id_V]^{\mathcal B}_{\mathcal B}$, e siccome la matrice decide la macchina, $g \circ f = \id_V$. Allo stesso modo $f \circ g = \id_W$. Quindi $g$ è l'inversa di $f$.

> [!ESEMPIO] · un isomorfismo tra polinomi e coppie di numeri
> Sia $f(p) = (p(0),\ p(1))$, dai polinomi di grado al massimo 1 al piano. Con la base $\{1, x\}$ e la base canonica: $f(1) = (1, 1)$ e $f(x) = (0, 1)$, quindi
> $$[f] = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}, \qquad \det [f] = 1.$$
> Il determinante non è zero: $f$ è un isomorfismo. La matrice dell'inversa è la matrice inversa: con la regola delle $2 \times 2$ (lezione L10), $[f^{-1}] = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$. Quindi $f^{-1}(a, b)$ ha coordinate $(a,\ b - a)$:
> $$f^{-1}(a, b) = a + (b - a)x.$$
> È il polinomio di grado al massimo 1 che vale $a$ in 0 e $b$ in 1. Controllo: $p(0) = a$ e $p(1) = a + b - a = b$.

### Cambiare le basi di una macchina

Con la regola delle macchine in fila si può cambiare base a qualsiasi macchina: la si scrive come «traduci, applica, traduci di nuovo». Le dispense lo scrivono così.

> [!COROLLARIO] 16.8
> Sia $f : V \to W$ un'applicazione lineare. Siano $\mathcal B_1, \mathcal B_2$ due basi di $V$ e $\mathcal C_1, \mathcal C_2$ due basi di $W$. Applicando la Proposizione 16.6 troviamo
> $$[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2} \cdot [f]^{\mathcal B_1}_{\mathcal C_1} \cdot [\id_V]^{\mathcal B_2}_{\mathcal B_1}.$$

**Come si legge.** Per passare dalla matrice in certe basi alla matrice in altre basi, si moltiplica a sinistra e a destra per due traduttori. Il motivo: $f = \id_W \circ f \circ \id_V$, e le basi si incastrano come nel domino. Si legge da destra a sinistra:

1. il traduttore a destra porta le coordinate di partenza dalla base nuova a quella che conosci;
2. $[f]^{\mathcal B_1}_{\mathcal C_1}$ applica la macchina nelle basi che conosci già;
3. il traduttore a sinistra porta il risultato nella nuova base di arrivo.

> [!ESEMPIO] · l'Esempio 15.8 rifatto con il Corollario 16.8
> Nella lezione L15 la macchina $f(p) = (p(2), p(-2))$, dai polinomi di grado al massimo 2 al piano, aveva matrice $\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}$ con la base canonica $\mathcal C$ in arrivo. La base $\mathcal C' = \{(1, -1), (0, 1)\}$ in arrivo richiedeva tre sistemi. Con il corollario la base di partenza non cambia, quindi il traduttore a destra è l'identità:
> - $[\id]^{\mathcal C'}_{\mathcal C} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$, con i vettori di $\mathcal C'$ in colonna; quindi $[\id]^{\mathcal C}_{\mathcal C'} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$;
> - $$[f]^{\mathcal B}_{\mathcal C'} = [\id]^{\mathcal C}_{\mathcal C'}\,[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 4 \\ 2 & 0 & 8 \end{pmatrix}.$$
>
> È la matrice dell'Esempio 15.8. Lo stesso conto è l'Esempio 4.3.14 del libro di Martelli.

> [!RICORDA]
> - Due macchine in fila: la matrice è il prodotto, con la prima macchina a destra.
> - Una macchina è un isomorfismo esattamente quando la sua matrice è invertibile.
> - Per cambiare base: traduttore a sinistra, matrice, traduttore a destra.

## La stessa macchina in due lingue: le matrici simili (pp. 81–83)

Molte macchine partono e arrivano nello stesso spazio: girare il piano, derivare i polinomi, trasporre le matrici quadrate. Le dispense danno loro un nome.

> [!DEF] 16.9 · Endomorfismo
> Sia $V$ uno spazio vettoriale. Un **endomorfismo** è un'applicazione lineare
> $$f : V \to V.$$

**Come si legge.** Un endomorfismo è una macchina lineare che parte e arriva nello **stesso** spazio. Esempi che conosci già: la macchina di una matrice quadrata; la derivata, dai polinomi di grado al massimo $n$ a sé stessi; la trasposta, dalle matrici quadrate a sé stesse; la moltiplicazione per un numero fisso, $v \mapsto \lambda v$.

Per un endomorfismo è naturale usare **la stessa base** in partenza e in arrivo. Con una base $\mathcal B$, ogni endomorfismo ha una matrice quadrata $[f]^{\mathcal B}_{\mathcal B}$, e due endomorfismi in fila hanno come matrice il prodotto (Proposizione 16.6 con tre basi uguali):

$$[f \circ g]^{\mathcal B}_{\mathcal B} = [f]^{\mathcal B}_{\mathcal B}\,[g]^{\mathcal B}_{\mathcal B}.$$

### Come cambia la matrice di un endomorfismo

Siano $\mathcal B$ e $\mathcal C$ due basi dello stesso spazio, e sia

$$M = [\id]^{\mathcal B}_{\mathcal C}$$

il traduttore da $\mathcal B$ a $\mathcal C$. Allora

$$[f]^{\mathcal B}_{\mathcal B} = M^{-1}\,[f]^{\mathcal C}_{\mathcal C}\,M.$$

Da dove viene: è il Corollario 16.8 con $\mathcal B_1 = \mathcal C_1 = \mathcal C$ e $\mathcal B_2 = \mathcal C_2 = \mathcal B$:

$$[f]^{\mathcal B}_{\mathcal B} = [\id]^{\mathcal C}_{\mathcal B}\,[f]^{\mathcal C}_{\mathcal C}\,[\id]^{\mathcal B}_{\mathcal C} = M^{-1}\,[f]^{\mathcal C}_{\mathcal C}\,M,$$

perché il traduttore nel verso opposto è l'inverso di $M$. A parole, leggendo da destra: traduci dalla base nuova a quella vecchia, applica la macchina nella base vecchia, traduci il risultato nella base nuova.

> [!METODO] Cambio di base per un endomorfismo, in quattro passi
> 1. $A = [f]^{\mathcal C}_{\mathcal C}$ nella base canonica $\mathcal C$: si legge dai numeri davanti alle lettere.
> 2. $M = [\id]^{\mathcal B}_{\mathcal C}$: i vettori della nuova base $\mathcal B$ **in colonna**.
> 3. L'inversa $M^{-1}$: per una $2 \times 2$ scambia la diagonale, cambia segno agli altri due e dividi per il determinante; per una $3 \times 3$ usa i cofattori o Gauss.
> 4. $[f]^{\mathcal B}_{\mathcal B} = M^{-1}AM$. **Controllo** senza inversa: la colonna $j$ deve dare le coordinate di $f(v_j)$ nella nuova base. Oppure moltiplica: $M$ per il risultato deve essere uguale ad $A$ per $M$.

Ecco l'esempio delle dispense: una base in cui la matrice della macchina si legge a colpo d'occhio.

> [!ESEMPIO] 16.10 · Una base in cui la matrice diventa diagonale
> Prendiamo $f : \R^2 \to \R^2$ dato da
> $$f\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x + y \\ -y \end{pmatrix}.$$
> Rispetto alla base canonica $\mathcal C = \{e_1, e_2\}$ troviamo
> $$[f]^{\mathcal C}_{\mathcal C} = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}.$$
> Prendiamo adesso come base
> $$\mathcal B = \left\{ \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} -1 \\ 2 \end{pmatrix} \right\}.$$
> La matrice di cambiamento di base da $\mathcal B$ a $\mathcal C$ ha in colonna i vettori di $\mathcal B$:
> $$M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix},$$
> e la sua inversa ($\det M = 2$) è
> $$M^{-1} = [\id]^{\mathcal C}_{\mathcal B} = \frac 12 \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1/2 \\ 0 & 1/2 \end{pmatrix}.$$
> Quindi la matrice associata a $f$ nella base $\mathcal B$ è
> $$[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M = \begin{pmatrix} 1 & 1/2 \\ 0 & 1/2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.$$
> Passaggio intermedio: $[f]^{\mathcal C}_{\mathcal C}M = \begin{pmatrix} 1 & 1 \\ 0 & -2 \end{pmatrix}$, e $M^{-1}$ per questa dà $\begin{pmatrix} 1 + 0 & 1 - 1 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$.
>
> Possiamo verificare direttamente il risultato: il primo vettore della base $\mathcal B$ viene mandato in se stesso, mentre il secondo viene mandato nel suo opposto:
> $$f\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \qquad f\begin{pmatrix} -1 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 \\ -2 \end{pmatrix}.$$

> [!NOTA] Un simbolo mancante
> Nelle dispense, a p. 82, l'ultima formula dell'Esempio 16.10 comincia con «${}^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$»: manca il $[f]$ davanti, va letto $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$.

Nel disegno $f$ è uno **specchio** obliquo (nel libro di Martelli è l'Esempio 4.4.2): lascia ferma la retta di $(1, 0)$ e ribalta la retta di $(-1, 2)$. Nella base canonica la matrice non lo mostra. Nella base $\mathcal B$, fatta di vettori speciali per $f$, la matrice è diagonale e si legge tutto. È proprio l'idea degli **autovettori** della lezione L17.

```grafico
titolo: $f(x, y) = (x + y, -y)$ fissa $v_1$ e ribalta $v_2$: nella base $\{v_1, v_2\}$ la matrice è diagonale
x: -2.5 2.5
y: -2.5 2.5
retta: 0 0 1 0 | accento | tratteggio | sottile
retta: 0 0 -1 2 | viola | tratteggio | sottile
vettore: 1 0 | accento | spesso | $v_1 = f(v_1)$ | n
vettore: -1 2 | viola | spesso | $v_2$ | o
vettore: 1 -2 | rosa | spesso | $f(v_2) = -v_2$ | e
```

Nello strumento qui sotto la matrice è quella dell'Esempio 16.10 nella base canonica. Le due rette tratteggiate che compaiono sono quelle su cui $f$ agisce senza girare i vettori: sono proprio le rette dei due vettori della nuova base, $(1, 0)$ e $(-1, 2)$. Trascina il vettore $x$ su una di queste rette e guarda $Ax$.

```widget matrice
titolo: La riflessione dell'Esempio 16.10
a: 1 1; 0 -1
x: -1 2
raggio: 3
```

### Il nome: matrici simili

Le due matrici dell'Esempio 16.10 descrivono la stessa macchina, in due lingue. Le dispense danno un nome a questa parentela.

> [!DEF] 16.11 · Matrici simili
> Sia $M(n)$ l'insieme delle matrici quadrate $n \times n$. Diciamo che due matrici $A, B \in M(n)$ sono **simili** (o **coniugate**) se esiste una matrice invertibile $M \in M(n)$ tale che
> $$A = M^{-1}BM.$$
> Se $A$ e $B$ sono simili scriviamo $A \sim B$.

**Come si legge.**

- Due matrici simili descrivono **la stessa macchina in due basi diverse**.
- $M$ deve essere **invertibile**: è un traduttore, e le sue colonne formano una base.
- Nella formula $A = M^{-1}BM$, la matrice $B$ descrive la macchina nella base «vecchia». La matrice $A$ la descrive nella base nuova, quella che ha i vettori nelle colonne di $M$.
- Il simbolo $\sim$ si legge «è simile a». Nell'Esempio 16.10: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \sim \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$, con $M = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}$.

Le dispense osservano che essere simili è una parentela «ben fatta».

> [!PROP] 16.12
> La similitudine è una relazione di equivalenza in $M(n)$.

**Come si legge.** Ci sono tre regole. Ogni matrice è simile a sé stessa. Se una matrice è simile a una seconda, anche la seconda è simile alla prima. Se la prima è simile alla seconda e la seconda a una terza, la prima è simile alla terza. Quindi le matrici quadrate si dividono in famiglie separate: ogni famiglia raccoglie tutte le matrici della stessa macchina, al variare della base (lezione D03 di Matematica Discreta).

> [!DIM] della Proposizione 16.12 (dal libro di Martelli, Proposizione 4.4.5)
> Bisogna controllare le tre proprietà di una relazione di equivalenza.
> 1. **Riflessiva**, ogni $A$ è simile a sé stessa: con $M = I_n$ viene $A = I_n^{-1} A I_n$.
> 2. **Simmetrica**, se $A$ è simile a $B$ allora $B$ è simile ad $A$: da $A = M^{-1}BM$, moltiplicando a sinistra per $M$ e a destra per $M^{-1}$, viene $B = MAM^{-1}$. Con $N = M^{-1}$, che è invertibile, $B = N^{-1}AN$.
> 3. **Transitiva**, se $A$ è simile a $B$ e $B$ a $C$ allora $A$ è simile a $C$: da $A = M^{-1}BM$ e $B = N^{-1}CN$ viene
> $$A = M^{-1}N^{-1}CNM = (NM)^{-1}\,C\,(NM),$$
> perché $(NM)^{-1} = M^{-1}N^{-1}$. E $NM$ è invertibile, prodotto di invertibili.

### Che cosa hanno in comune le matrici simili

Se due matrici descrivono la stessa macchina, le proprietà della macchina devono vedersi in tutte e due. Per esempio di quanto la macchina ingrandisce le aree, cioè il determinante. Le dispense lo scrivono così.

> [!PROP] 16.13
> Se $A \sim B$ allora
> $$\rk(A) = \rk(B), \qquad \det(A) = \det(B).$$
> In particolare
> $$A \text{ è invertibile} \iff B \text{ è invertibile}.$$

**Come si legge.** Matrici simili hanno lo stesso rango e lo stesso determinante. Quindi sono tutte e due invertibili o tutte e due no.

Il perché, con i passaggi delle dispense. Sia $A = M^{-1}BM$.

1. **Determinante.** Per il teorema di Binet (lezione L10) e il Corollario 10.5, il determinante di $M^{-1}$ è $\frac{1}{\det M}$:
$$\det A = \det(M^{-1})\,\det B\,\det M = \frac{1}{\det M}\,\det B\,\det M = \det B.$$
2. **Rango.** Moltiplicare a sinistra o a destra per una matrice invertibile non cambia il rango, quindi $\rk(A) = \rk(M^{-1}BM) = \rk(B)$.
3. **Invertibilità.** Una matrice quadrata è invertibile esattamente quando ha determinante diverso da zero (Proposizione 10.8), e i due determinanti sono uguali.

> [!ESEMPIO] · simili oppure no?
> - $\begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}$ e $\begin{pmatrix} -1 & 2 \\ 1 & 1 \end{pmatrix}$ **non** sono simili: i determinanti sono $1 - 2 = -1$ e $-1 - 2 = -3$.
> - $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $\begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ **sono** simili. Con $M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, che scambia l'ordine dei due vettori della base e ha $M^{-1} = M$, viene $M^{-1}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}M = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ (esercizio 10).

> [!TRAPPOLA] Stesso rango e stesso determinante non bastano
> La Proposizione 16.13 va in un verso solo. Un controesempio: $I_2$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ hanno tutte e due rango 2 e determinante 1, ma **non** sono simili. Infatti $I_2$ è simile solo a sé stessa: $M^{-1}I_2M = M^{-1}M = I_2$ per ogni $M$ invertibile. La macchina identità lascia tutto com'è, in qualsiasi lingua. Lo stesso vale per ogni multiplo $\lambda I_n$.

> [!OLTRE] anche la traccia non cambia
> Anche la **traccia**, la somma dei numeri sulla diagonale (lezione L08), è la stessa per matrici simili. Si usa la regola $\tr(XY) = \tr(YX)$ della Proposizione 8.13, con $X = M^{-1}$ e $Y = BM$:
> $$\tr(M^{-1}BM) = \tr(BMM^{-1}) = \tr(B).$$
> Nel quiz è un modo veloce per escludere risposte: due matrici con tracce diverse non sono simili. Nella lezione L17 vedrai il controllo più potente, il polinomio caratteristico.

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: §4.2.4 «Composizione di applicazioni lineari» (pp. 126–127), §4.3.3 (pp. 132–134: composizione e Corollario 4.3.10, che è il nostro 16.7), §4.3.5 «Matrice di cambiamento di base» (pp. 135–137, con gli Esempi 4.3.14 e 4.3.15 che rifanno gli esempi della lezione L15), §4.4.1–4.4.3 «Endomorfismi» e «Similitudine fra matrici» (pp. 137–140), §4.4.5 sulla traccia (p. 141).

::: prova Le matrici $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$ e $\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$ sono simili?
No: i determinanti sono 2 e 4, diversi.
:::

> [!RICORDA]
> - Un endomorfismo parte e arriva nello stesso spazio; cambiando base la sua matrice diventa $M^{-1}AM$.
> - Matrici simili = stessa macchina in due basi. Hanno stesso rango, determinante e traccia, ma queste uguaglianze non bastano per essere simili.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\id$ | «identità» | la macchina che lascia tutto com'è | |
| $[\id]^{\mathcal B}_{\mathcal C}$ | «matrice di cambiamento di base da B a C» | il traduttore delle coordinate | vettori di $\mathcal B$ in colonna, se $\mathcal C$ è canonica |
| $g \circ f$ | «g dopo f» | prima agisce $f$, poi $g$ | |
| $L_A$ | «elle a» | la macchina che moltiplica per $A$ | $L_A \circ L_B = L_{AB}$ |
| $f^{-1}$ | «effe alla meno uno» | la macchina inversa | |
| $M^{-1}AM$ | «emme alla meno uno, a, emme» | la matrice della stessa macchina nella base nuova | |
| $\sim$ | «è simile a» | stessa macchina in due basi | $A \sim B$ |
| $\tr$ | «traccia» | somma dei numeri sulla diagonale | $\tr \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = 5$ |
| $\rk$ | «rango» | quante colonne dicono qualcosa di nuovo | |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame.** I cambi di base e le matrici associate sono tra gli esercizi più ricorrenti di Algebra lineare. Negli appelli 2023–2026:

| Tipo di domanda | Dove |
|---|---|
| matrice di cambiamento di base nel piano, nello spazio o tra polinomi | 10/06/2024 d. 8; 06/09/2024 d. 5; 10/07/2025 d. 6 (basi canoniche permutate); 02/09/2025 d. 8 (tre basi) |
| matrice di due macchine in fila, o formula della composizione | 08/02/2024 d. 5; 16/01/2025 d. 5; 15/01/2026 d. 10 (nucleo di $S \circ T$); 03/07/2026 d. 5 ($T \circ S = 0$) |
| matrice $[T]^{\mathcal B}_{\mathcal B}$ in una base data, o $A$ ricavata da $[L_A]^{\mathcal B}_{\mathcal B}$ | 24/01/2024 d. 3; 03/06/2025 d. 5; 15/01/2026 d. 8 |
| problema aperto: matrici di cambiamento di base, $[T]^{\mathcal A}_{\mathcal A}$ e $[T]^{\mathcal B}_{\mathcal B}$ | 07/09/2026 problema 11; matrice della macchina inversa: 10/07/2024 problema 11 |

### Una domanda vera, letta insieme

**Appello del 24/01/2024, domanda 3** (anche foglio 3 del tutorato, esercizio 5). Il testo: «La matrice associata a $T(x, y) = (2x + y,\ x + 2y)$ rispetto alla base $\mathcal B = \{(0, 1), (1, 2)\}$ è…».

**In pratica chiede:** la stessa macchina, scritta nella lingua della base $(0, 1), (1, 2)$ invece che in quella canonica.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: la matrice nella base canonica.** Dai numeri davanti alle lettere: $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.
>
> **Passo 2: il traduttore.** I vettori della base in colonna: $M = \begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$, con determinante $0 - 1 = -1$.
>
> **Passo 3: l'inversa.** Scambio la diagonale, cambio segno agli altri due, divido per $-1$: $M^{-1} = \begin{pmatrix} -2 & 1 \\ 1 & 0 \end{pmatrix}$.
>
> **Passo 4: il prodotto, un pezzo alla volta.**
> $$AM = \begin{pmatrix} 1 & 4 \\ 2 & 5 \end{pmatrix}, \qquad M^{-1}(AM) = \begin{pmatrix} -2 + 2 & -8 + 5 \\ 1 & 4 \end{pmatrix} = \begin{pmatrix} 0 & -3 \\ 1 & 4 \end{pmatrix}.$$
>
> **Passo 5: controllo senza inversa.** $T(0, 1) = (1, 2)$, che è il secondo vettore della base: coordinate $(0, 1)$, la prima colonna. $T(1, 2) = (4, 5) = -3 \cdot (0, 1) + 4 \cdot (1, 2)$: coordinate $(-3, 4)$, la seconda colonna.
>
> **La risposta** è $\begin{pmatrix} 0 & -3 \\ 1 & 4 \end{pmatrix}$. Tra le risposte c'era anche la trasposta $\begin{pmatrix} 0 & 1 \\ -3 & 4 \end{pmatrix}$: le coordinate vanno in colonna.

### Altre due domande vere

> [!ESAME] Appello del 16/01/2025, domanda 5
> *Siano $f : \R^2 \to \R_2[x]$, $f(u, v) = ux^2 + vx$, e $g : \R_2[x] \to \R^2$, $g(p) = (p(1) + p(2),\ p(1) - p(-1))$. La matrice di $g \circ f$ rispetto alle basi canoniche è …*
>
> **Soluzione.** La via più corta è far lavorare le due macchine in fila sui vettori della base.
> 1. $g(f(e_1)) = g(x^2) = (1 + 4,\ 1 - 1) = (5, 0)$.
> 2. $g(f(e_2)) = g(x) = (1 + 2,\ 1 - (-1)) = (3, 2)$.
>
> Quindi la matrice è $\begin{pmatrix} 5 & 3 \\ 0 & 2 \end{pmatrix}$. Con il prodotto: $[g] = \begin{pmatrix} 2 & 3 & 5 \\ 0 & 2 & 0 \end{pmatrix}$ (colonne $g(1), g(x), g(x^2)$), $[f] = \begin{pmatrix} 0 & 0 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$, e $[g][f] = \begin{pmatrix} 5 & 3 \\ 0 & 2 \end{pmatrix}$. Una delle risposte sbagliate conteneva le lettere $u$ e $v$: una matrice associata contiene solo numeri.

> [!ESAME] Appello del 07/09/2026, problema 11 (punti 1–3)
> *$\mathcal A$ base canonica di $\R^3$; $\mathcal B = \{v_1, v_2, v_3\}$ con*
> $$v_1 = (1, 1, 0), \quad v_2 = (1, 0, 1), \quad v_3 = (1, 1, 1);$$
> *$T(a, b, c) = (2a + c,\ a + b,\ -a + b + 3c)$. (1) Determinare $[\id]^{\mathcal B}_{\mathcal A}$ e $[\id]^{\mathcal A}_{\mathcal B}$. (2) Trovare $[T]^{\mathcal A}_{\mathcal A}$. (3) Trovare $[T]^{\mathcal B}_{\mathcal B}$.*
>
> **Soluzione.**
> 1. $M = [\id]^{\mathcal B}_{\mathcal A} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}$, con i $v_j$ in colonna. Il determinante è $-1$, e $[\id]^{\mathcal A}_{\mathcal B} = M^{-1} = \begin{pmatrix} 1 & 0 & -1 \\ 1 & -1 & 0 \\ -1 & 1 & 1 \end{pmatrix}$. Controllo: $MM^{-1} = I_3$.
> 2. Dai numeri davanti alle lettere: $[T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ -1 & 1 & 3 \end{pmatrix}$.
> 3. $[T]^{\mathcal B}_{\mathcal B} = M^{-1}[T]^{\mathcal A}_{\mathcal A}M = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$. Controllo senza inverse: $T(v_1) = (2, 2, 0) = 2v_1$; $T(v_2) = (3, 1, 2) = v_1 + 2v_2$; $T(v_3) = (3, 2, 3) = v_2 + 2v_3$. Le coordinate sono proprio le colonne.
>
> Il punto (4), gli autovalori, si risolve con la lezione L17: la matrice nella base $\mathcal B$ è triangolare, con 2 sulla diagonale.

**Errori da evitare.**

- Confondere il traduttore con il suo inverso: i vettori di $\mathcal B$ in colonna portano dalle coordinate in $\mathcal B$ a quelle canoniche, non il contrario.
- Scrivere $MAM^{-1}$ al posto di $M^{-1}AM$, o il contrario. Con $M$ che ha in colonna la base nuova, la matrice nella base nuova è $M^{-1}AM$. Nel dubbio, controlla una colonna calcolando $f(v_1)$.
- Invertire l'ordine nella composizione: la matrice di $g \circ f$ è $[g][f]$.
- Dimenticare che l'ordine dei vettori di una base cambia l'ordine delle righe e delle colonne.
- Pensare che rango e determinante uguali bastino per essere simili.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: «colonne di $[\id]^{\mathcal B}_{\mathcal C}$ = vettori di $\mathcal B$ in coordinate $\mathcal C$; $[v]_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$»; «$[g \circ f] = [g][f]$, basi come nel domino»; «$[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$ con $M = [\id]^{\mathcal B}_{\mathcal C}$»; l'inversa $2 \times 2$; «matrici simili: stesso rango, determinante e traccia».

## Quiz

```quiz
D: In $\R_1[x]$, la matrice di cambiamento di base $[\id]^{\mathcal B}_{\mathcal C}$ da $\mathcal B = \{3x, 2\}$ a $\mathcal C = \{x + 1, x - 1\}$ è:
+ $\begin{pmatrix} 3/2 & 1 \\ 3/2 & -1 \end{pmatrix}$
- $\begin{pmatrix} 3/2 & 3/2 \\ 1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1/3 & 1/3 \\ 1/2 & -1/2 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$
= Nelle colonne vanno le coordinate dei vettori di $\mathcal B$ rispetto a $\mathcal C$. Per $3x = a(x + 1) + b(x - 1)$ servono $a + b = 3$ e $a - b = 0$, cioè $a = b = \frac 32$. Per $2 = a(x + 1) + b(x - 1)$ servono $a + b = 0$ e $a - b = 2$, cioè $a = 1$ e $b = -1$. La risposta più insidiosa è la seconda, la trasposta, con le coordinate in riga. La terza è il traduttore nel verso opposto, $[\id]^{\mathcal C}_{\mathcal B}$. Simile all'appello del 10/06/2024, domanda 8.

D: La matrice di cambiamento di base $[\id]^{\mathcal B}_{\mathcal C}$ da $\mathcal B = \{e_3, e_1, e_2\}$ a $\mathcal C = \{e_1, e_2, e_3\}$ in $\R^3$ è:
+ $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$
- Il problema non è ben definito.
= La colonna $j$ contiene le coordinate del vettore $j$ di $\mathcal B$ nella base canonica: $e_3$ dà $(0, 0, 1)$, $e_1$ dà $(1, 0, 0)$, $e_2$ dà $(0, 1, 0)$. La risposta più insidiosa è la seconda, la trasposta, che è il traduttore nel verso opposto. L'identità sarebbe giusta solo con le due basi nello stesso ordine. Simile all'appello del 10/07/2025, domanda 6.

D: Siano $\mathcal A, \mathcal B, \mathcal C$ tre basi di $\R^2$ con $[\id]^{\mathcal A}_{\mathcal B} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e $[\id]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$. Allora $[\id]^{\mathcal A}_{\mathcal C}$ è:
+ $\begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} -1 & 1 \\ -2 & 1 \end{pmatrix}$
- $\begin{pmatrix} -1 & -1 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
= Le basi si incastrano come nel domino: $[\id]^{\mathcal A}_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[\id]^{\mathcal A}_{\mathcal B}$. Il primo fattore è il traduttore inverso di quello dato: $\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}$. Il prodotto è $\begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}$. La risposta più insidiosa è la seconda: è il prodotto delle due matrici date, senza invertire. Le altre vengono da prodotti nell'ordine sbagliato. Simile all'appello del 02/09/2025, domanda 8.

D: Siano $f : \R^2 \to \R_2[x]$, $f(u, v) = ux^2 + v$, e $g : \R_2[x] \to \R^2$, $g(p) = (p(1),\ p(2))$. La matrice di $g \circ f$ rispetto alla base canonica di $\R^2$ è:
+ $\begin{pmatrix} 1 & 1 \\ 4 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 4 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}$
- $\begin{pmatrix} u & 1 \\ v & 4 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 5 & 2 \end{pmatrix}$
= Le due macchine in fila sui vettori della base: $(g \circ f)(e_1) = g(x^2) = (1, 4)$ e $(g \circ f)(e_2) = g(1) = (1, 1)$. Sono le due colonne. La risposta più insidiosa è la seconda, la trasposta. In una matrice associata non compaiono le lettere $u$ e $v$; la terza risposta è la sola matrice di $g$, che è $2 \times 3$. Simile all'appello del 16/01/2025, domanda 5.

D: Sia $\mathcal B = \{(1, 1), (0, 1)\}$ e sia $A \in M(2, \R)$ tale che $[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$. Allora $A$ è:
+ $\begin{pmatrix} -1 & 2 \\ -2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 3 & 2 \\ -2 & -1 \end{pmatrix}$
- $\begin{pmatrix} -1 & -2 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}$
= Il traduttore ha i vettori di $\mathcal B$ in colonna, $M = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$, e vale $[L_A]^{\mathcal B}_{\mathcal B} = M^{-1}AM$. Per ricavare $A$ si gira la formula: $A = M\,[L_A]^{\mathcal B}_{\mathcal B}\,M^{-1} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ -2 & 3 \end{pmatrix}$. Controllo: $A(1, 1) = (1, 1)$, con coordinate $(1, 0)$ nella base $\mathcal B$, la prima colonna data. La risposta più insidiosa è la terza, che usa la formula al contrario, $M^{-1}\,[L_A]^{\mathcal B}_{\mathcal B}\,M$. Simile all'appello del 03/06/2025, domanda 5.

D: Se $A, B \in M(2, \R)$ sono simili, quale affermazione è necessariamente vera?
+ $\det A = \det B$
- $A = B$
- $AB = BA$
- $A$ e $B$ hanno la stessa prima riga.
- $\rk(A) = \rk(B) + 1$
= Per la Proposizione 16.13 matrici simili hanno lo stesso determinante e lo stesso rango; quindi l'ultima risposta è sempre falsa. Le altre tre non sono obbligatorie: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ e $\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$ sono simili (Esempio 16.10), ma sono diverse, non si scambiano nel prodotto e hanno prima riga diversa. La più insidiosa è $A = B$: simili vuol dire stessa macchina, non stessa matrice.

D: Quale di queste matrici è simile alla matrice identità $I_2$?
+ $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & 1/2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$
= Per ogni $M$ invertibile, $M^{-1}I_2M = I_2$: l'identità è simile solo a sé stessa. La macchina che lascia tutto com'è resta così in qualsiasi base. Le altre quattro hanno tutte rango 2 e determinante $1$ o $-1$; la più insidiosa è $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, che ha anche la stessa traccia e lo stesso determinante: ma queste uguaglianze non bastano.

D: Siano $f, g : \R^3 \to \R^3$ lineari con $g \circ f = 0$ (l'applicazione nulla) e $f \neq 0$. Quale affermazione è sempre vera?
+ $\Imm f \subseteq \Ker g$
- $\Ker g = \{0\}$
- $g$ è un isomorfismo.
- $\Imm g \subseteq \Ker f$
- $f$ è suriettiva.
= Per ogni $v$, $g(f(v)) = 0$: ogni uscita di $f$ viene schiacciata da $g$, cioè sta nel nucleo di $g$. Se il nucleo di $g$ fosse solo lo zero, o se $g$ fosse un isomorfismo, allora tutte le uscite di $f$ sarebbero zero, contro $f \neq 0$. La risposta più insidiosa è quella con i ruoli scambiati: con $f(x, y, z) = (0, x, 0)$ e $g(x, y, z) = (x, 0, 0)$ viene $g \circ f = 0$, ma $f(g(e_1)) = e_2$, non zero. E questa $f$ non è suriettiva. Simile all'appello del 03/07/2026, domanda 5.

D: Siano $T : \R^2 \to \R^3$, $T(x, y) = (x,\ x + y,\ y)$, e $S : \R^3 \to \R^2$, $S(a, b, c) = (a - b,\ b + c)$. La composizione $S \circ T$ è:
+ $(x, y) \mapsto (-y,\ x + 2y)$
- $(x, y, z) \mapsto (x - y,\ y + z)$
- $(x, y) \mapsto (x - y,\ 2y)$
- $(x, y, z) \mapsto (x - y,\ x + z,\ y + z)$
- Non è ben definita.
= Prima agisce $T$, poi $S$: $S(T(x, y)) = S(x,\ x + y,\ y) = \big(x - (x + y),\ (x + y) + y\big) = (-y,\ x + 2y)$. È una macchina dal piano al piano, quindi le risposte con tre lettere in entrata sono sbagliate già per la partenza. La più insidiosa è la seconda, che è $S$ da sola. Simile all'appello dell'08/02/2024, domanda 5.

D: Sia $T(x, y) = (4x - 2y,\ x + y)$ e sia $\mathcal B = \{(1, 1), (2, 1)\}$. La matrice $[T]^{\mathcal B}_{\mathcal B}$ è:
+ $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 6 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}$
= $T(1, 1) = (2, 2) = 2 \cdot (1, 1)$ e $T(2, 1) = (6, 3) = 3 \cdot (2, 1)$: le coordinate sono $(2, 0)$ e $(0, 3)$. La risposta più insidiosa è $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$: i numeri giusti, ma l'ordine sulla diagonale segue l'ordine della base. La quarta mette le uscite senza passare alle coordinate; la terza è la matrice nella base canonica.
```

## Esercizi

::: esercizio base Riscaldamento: la base in colonna
Nella base $\mathcal B = \{(2, 1), (1, 1)\}$ del piano scrivi il traduttore $[\id]^{\mathcal B}_{\mathcal C}$ verso la base canonica $\mathcal C$. Poi trova il vettore che ha coordinate $(1, 3)$ nella base $\mathcal B$.
::: soluzione
1. La base di arrivo è canonica: i vettori di $\mathcal B$ in colonna, $[\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$.
2. $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 + 3 \\ 1 + 3 \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \end{pmatrix}$.

Controllo con la ricetta: $1 \cdot (2, 1) + 3 \cdot (1, 1) = (5, 4)$.
:::

::: esercizio base Riscaldamento: due macchine in fila
Siano $f(x, y) = (2x, y)$ e $g(x, y) = (y, x)$. Scrivi le loro matrici nella base canonica e la matrice di $g \circ f$. Controlla con la formula.
::: soluzione
1. $[f] = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$ e $[g] = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
2. $[g \circ f] = [g][f] = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$.
3. Controllo: $g(f(x, y)) = g(2x, y) = (y, 2x)$, che ha proprio questa matrice.
:::

::: esercizio base Riscaldamento: l'ordine conta
Con le macchine dell'esercizio precedente, calcola la matrice di $f \circ g$. È uguale a quella di $g \circ f$?
::: soluzione
1. $[f \circ g] = [f][g] = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix}$.
2. Controllo: $f(g(x, y)) = f(y, x) = (2y, x)$.

È diversa da $\begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$: mettere le macchine in fila in un altro ordine dà un'altra macchina.
:::

::: esercizio base Riscaldamento: simili o no?
(a) $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$ e $\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$ sono simili? (b) E $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$ e $\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$?
::: soluzione
1. (a) No: i determinanti sono 2 e 4.
2. (b) Sì. È la stessa macchina con i due vettori della base in ordine scambiato. Con $M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, che è l'inversa di sé stessa: $M^{-1}\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}M = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$.
:::

::: esercizio base Cambiamento di base in $\R^3$ (foglio 3 del tutorato, esercizio 1)
Siano $v_1 = (1, 0, 2)$, $v_2 = (2, 0, 1)$, $v_3 = (0, 1, 1)$. Verifica che $\mathcal B = \{v_1, v_2, v_3\}$ è una base di $\R^3$ e trova la matrice di cambiamento di base da $\mathcal B$ alla base canonica $\mathcal E$ e viceversa.
::: soluzione
Il traduttore verso la base canonica ha i vettori in colonna: $M = [\id]^{\mathcal B}_{\mathcal E} = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \\ 2 & 1 & 1 \end{pmatrix}$. Sviluppo lungo la seconda riga, che ha un solo numero diverso da zero (casella $(2, 3)$, segno meno):
$$\det M = -1 \cdot \det\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} = -(1 - 4) = 3.$$
Il determinante non è zero: i tre vettori sono indipendenti e, siccome sono tre nello spazio, formano una base (Teorema 7.12).

Il traduttore nel verso opposto, $[\id]^{\mathcal E}_{\mathcal B}$, è l'inversa, con i cofattori o con Gauss:
$$M^{-1} = \frac 13 \begin{pmatrix} -1 & -2 & 2 \\ 2 & 1 & -1 \\ 0 & 3 & 0 \end{pmatrix}.$$
Controllo su una colonna: la prima colonna di $M^{-1}$ deve dare le coordinate di $e_1$: $-\frac 13 v_1 + \frac 23 v_2 + 0 v_3 = \left(-\frac 13 + \frac 43,\ 0,\ -\frac 23 + \frac 23\right) = (1, 0, 0)$.
:::

::: esercizio base Composizioni nei due ordini
Siano $f : \R^2 \to \R^3$, $f(x, y) = (x,\ x + y,\ 2y)$, e $g : \R^3 \to \R^2$, $g(a, b, c) = (a + c,\ b - c)$. Calcola le matrici di $g \circ f$ e di $f \circ g$ nelle basi canoniche, e controlla il risultato con le formule.
::: soluzione
$[f] = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 2 \end{pmatrix}$ è $3 \times 2$, $[g] = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix}$ è $2 \times 3$.

$$[g \circ f] = [g][f] = \begin{pmatrix} 1 + 0 + 0 & 0 + 0 + 2 \\ 0 + 1 + 0 & 0 + 1 - 2 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}.$$
Controllo: $g(f(x, y)) = g(x,\ x + y,\ 2y) = (x + 2y,\ x + y - 2y) = (x + 2y,\ x - y)$.

$$[f \circ g] = [f][g] = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 2 & -2 \end{pmatrix}.$$
Controllo: $f(g(a, b, c)) = f(a + c,\ b - c) = (a + c,\ a + b,\ 2b - 2c)$.

Nota che $f \circ g$ passa per il piano, quindi la sua immagine ha dimensione al massimo 2. Infatti il determinante di $[f \circ g]$ è $1 \cdot (-2 - 0) - 0 + 1 \cdot (2 - 0) = 0$, e il rango è 2.
:::

::: esercizio medio Esercizio 16.14 delle dispense: un endomorfismo che diventa diagonale
Consideriamo l'endomorfismo $f : \R^2 \to \R^2$ definito da $f(x, y) = (2x + y,\ x + 2y)$. Siano $\mathcal C = \{e_1, e_2\}$ la base canonica e $\mathcal B = \{v_1, v_2\}$ con $v_1 = (1, 1)$, $v_2 = (1, -1)$.
(1) Trovare la matrice $A = [f]^{\mathcal C}_{\mathcal C}$.
(2) Trovare la matrice di cambiamento di base $M = [\id]^{\mathcal B}_{\mathcal C}$.
(3) Calcolare $[f]^{\mathcal B}_{\mathcal B}$ usando la formula di cambiamento di base.
(4) Verificare il risultato calcolando direttamente $f(v_1)$ e $f(v_2)$.
::: soluzione
(1) Dai numeri davanti alle lettere: $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, con colonne $f(e_1) = (2, 1)$ e $f(e_2) = (1, 2)$.

(2) La base di arrivo è canonica: i vettori di $\mathcal B$ in colonna, $M = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$.

(3) Il determinante di $M$ è $-1 - 1 = -2$, quindi
$$M^{-1} = \frac{1}{-2}\begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}.$$
Poi, un prodotto alla volta:
$$M^{-1}A = \begin{pmatrix} 3/2 & 3/2 \\ 1/2 & -1/2 \end{pmatrix}, \qquad (M^{-1}A)M = \begin{pmatrix} 3/2 & 3/2 \\ 1/2 & -1/2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$
Quindi $[f]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$.

(4) $f(v_1) = f(1, 1) = (3, 3) = 3v_1 + 0v_2$ e $f(v_2) = f(1, -1) = (1, -1) = 0v_1 + 1v_2$. Le coordinate $(3, 0)$ e $(0, 1)$ sono le colonne trovate. Nella base $\mathcal B$ la macchina allunga di 3 la direzione $(1, 1)$ e lascia ferma la direzione $(1, -1)$.
:::

::: esercizio medio Polinomi centrati in 1 (foglio 3 del tutorato, esercizio 2)
In $\R_3[x]$ calcola la matrice del cambio di base da $\mathcal B = \{1,\ x - 1,\ (x - 1)^2,\ (x - 1)^3\}$ alla base canonica $\mathcal C = \{1, x, x^2, x^3\}$, e viceversa.
::: soluzione
**Da $\mathcal B$ a $\mathcal C$**: sviluppo ogni polinomio di $\mathcal B$ e leggo i numeri (termine noto, $x$, $x^2$, $x^3$):
- $1$ dà $(1, 0, 0, 0)$;
- $x - 1$ dà $(-1, 1, 0, 0)$;
- $(x - 1)^2 = 1 - 2x + x^2$ dà $(1, -2, 1, 0)$;
- $(x - 1)^3 = -1 + 3x - 3x^2 + x^3$ dà $(-1, 3, -3, 1)$.

$$[\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & -1 & 1 & -1 \\ 0 & 1 & -2 & 3 \\ 0 & 0 & 1 & -3 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

**Da $\mathcal C$ a $\mathcal B$**: invece di invertire, scrivo $x = (x - 1) + 1$ e sviluppo le potenze:
- $1$ dà $(1, 0, 0, 0)$;
- $x = 1 + (x - 1)$ dà $(1, 1, 0, 0)$;
- $x^2 = \big(1 + (x - 1)\big)^2 = 1 + 2(x - 1) + (x - 1)^2$ dà $(1, 2, 1, 0)$;
- $x^3 = 1 + 3(x - 1) + 3(x - 1)^2 + (x - 1)^3$ dà $(1, 3, 3, 1)$.

$$[\id]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$
Nelle colonne compaiono i numeri del triangolo di Tartaglia. Controllo: il prodotto delle due matrici è $I_4$.
:::

::: esercizio medio Un isomorfismo e la sua inversa con le matrici
Sia $f : \R_2[x] \to \R^3$, $f(p) = (p(-1),\ p(0),\ p(1))$. (a) Scrivi $[f]$ rispetto a $\{1, x, x^2\}$ e alla base canonica e mostra che $f$ è un isomorfismo. (b) Usa il Corollario 16.7 per scrivere $f^{-1}(a, b, c)$. (c) Qual è il polinomio di grado al massimo 2 che vale $1$ in $-1$, $0$ in $0$ e $3$ in $1$?
::: soluzione
(a) Le uscite: $f(1) = (1, 1, 1)$, $f(x) = (-1, 0, 1)$, $f(x^2) = (1, 0, 1)$.
$$[f] = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 0 & 0 \\ 1 & 1 & 1 \end{pmatrix}.$$
Sviluppo lungo la seconda riga, con un solo numero diverso da zero (casella $(2, 1)$, segno meno): $\det [f] = -1 \cdot \det\begin{pmatrix} -1 & 1 \\ 1 & 1 \end{pmatrix} = -(-1 - 1) = 2$. Non è zero: la matrice è invertibile e $f$ è un isomorfismo.

(b) $[f^{-1}] = [f]^{-1} = \frac 12 \begin{pmatrix} 0 & 2 & 0 \\ -1 & 0 & 1 \\ 1 & -2 & 1 \end{pmatrix}$; controllo: $[f]\,[f]^{-1} = I_3$. Le coordinate di $f^{-1}(a, b, c)$ sono $\left(b,\ \frac{c - a}{2},\ \frac{a - 2b + c}{2}\right)$, quindi
$$f^{-1}(a, b, c) = b + \frac{c - a}{2}\,x + \frac{a - 2b + c}{2}\,x^2.$$
Controllo: in 0 vale $b$; in 1 vale $b + \frac{c - a}{2} + \frac{a - 2b + c}{2} = b + \frac{2c - 2b}{2} = c$; in $-1$ vale $b - \frac{c - a}{2} + \frac{a - 2b + c}{2} = b + \frac{2a - 2b}{2} = a$.

(c) $a = 1$, $b = 0$, $c = 3$: $p = 0 + \frac{3 - 1}{2}x + \frac{1 - 0 + 3}{2}x^2 = x + 2x^2$. Controllo: $p(-1) = -1 + 2 = 1$, $p(0) = 0$, $p(1) = 3$.
:::

::: esercizio medio Simili oppure no
(a) Mostra che $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ sono simili, trovando $M$. (b) Mostra che $A$ e $C = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix}$ non sono simili. (c) $A$ e $D = \begin{pmatrix} 4 & 2 \\ 3 & 1 \end{pmatrix}$ possono essere simili?
::: soluzione
(a) Pensa ad $A$ come alla matrice di $L_A$ nella base $\{e_1, e_2\}$, e prova la base in ordine inverso, $\{e_2, e_1\}$. Il traduttore è $M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, e $M^{-1} = M$: scambiare due volte non cambia niente. Allora
$$M^{-1}AM = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix} = B.$$
Moltiplicare a sinistra per $M$ scambia le righe, a destra scambia le colonne.

(b) $\det A = 4 - 6 = -2$ e $\det C = 5 - 6 = -1$: determinanti diversi, quindi non simili (Proposizione 16.13).

(c) Qui i controlli visti finora non aiutano: $\det D = 4 - 6 = -2 = \det A$, il rango è 2 per tutte e due, e anche la traccia è la stessa ($1 + 4 = 5$ e $4 + 1 = 5$). Quindi possono essere simili, ma queste uguaglianze da sole non lo dimostrano. Nella lezione L17 vedrai che hanno lo stesso polinomio caratteristico, $\lambda^2 - 5\lambda - 2$, con due radici reali diverse. Nella lezione L18 vedrai che per questo sono tutte e due simili alla stessa matrice diagonale, e quindi, per la proprietà transitiva, simili fra loro.
:::

::: esercizio medio Una matrice con basi diverse in partenza e in arrivo (foglio 3 del tutorato, esercizio 3)
Sia $T : \R^3 \to \R^3$, $T(x_1, x_2, x_3) = (3x_1 + x_2,\ x_1 + x_3,\ x_2 - x_3)$. Siano $\mathcal A$ la base canonica, $\mathcal B = \{(1, -1, 1), (0, 3, 1), (0, 2, 1)\}$ e $\mathcal C = \{(1, 2, 3), (0, 2, 1), (0, 1, 1)\}$. Trova $[T]^{\mathcal A}_{\mathcal A}$ e $[T]^{\mathcal B}_{\mathcal C}$.
::: soluzione
Dai numeri davanti alle lettere: $[T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 3 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix}$.

Per il Corollario 16.8: $[T]^{\mathcal B}_{\mathcal C} = [\id]^{\mathcal A}_{\mathcal C}\,[T]^{\mathcal A}_{\mathcal A}\,[\id]^{\mathcal B}_{\mathcal A}$. La base $\mathcal C$ è quella dell'Esercizio 16.3, quindi il traduttore $[\id]^{\mathcal A}_{\mathcal C} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}$ è già pronto. Invece di moltiplicare tre matrici, conviene calcolare le uscite dei vettori di $\mathcal B$ e poi tradurle nella base $\mathcal C$:
- $T(1, -1, 1) = (3 - 1,\ 1 + 1,\ -1 - 1) = (2, 2, -2)$, tradotto: $(2,\ 2 + 2 + 2,\ -8 - 2 - 4) = (2, 6, -14)$;
- $T(0, 3, 1) = (3, 1, 2)$, tradotto: $(3,\ 3 + 1 - 2,\ -12 - 1 + 4) = (3, 2, -9)$;
- $T(0, 2, 1) = (2, 1, 1)$, tradotto: $(2,\ 2 + 1 - 1,\ -8 - 1 + 2) = (2, 2, -7)$.

$$[T]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 2 & 3 & 2 \\ 6 & 2 & 2 \\ -14 & -9 & -7 \end{pmatrix}.$$
Controllo sulla prima colonna: $2(1, 2, 3) + 6(0, 2, 1) - 14(0, 1, 1) = (2,\ 4 + 12 - 14,\ 6 + 6 - 14) = (2, 2, -2)$.
:::

::: esercizio esame Come all'esame: due basi e un endomorfismo di $\R^3$
Sia $\mathcal A$ la base canonica di $\R^3$ e sia $\mathcal B = \{v_1, v_2, v_3\}$ con $v_1 = (1, 0, 1)$, $v_2 = (0, 1, 1)$, $v_3 = (1, 1, 1)$. Sia $T : \R^3 \to \R^3$, $T(a, b, c) = (2a + 2b - c,\ a + 3b - c,\ 2b + c)$.
(1) Determina $[\id]^{\mathcal B}_{\mathcal A}$ e $[\id]^{\mathcal A}_{\mathcal B}$.
(2) Scrivi $[T]^{\mathcal A}_{\mathcal A}$.
(3) Calcola $[T]^{\mathcal B}_{\mathcal B}$ con la formula del cambiamento di base.
(4) Controlla il risultato calcolando $T(v_1)$, $T(v_2)$, $T(v_3)$, e verifica che $\det [T]^{\mathcal A}_{\mathcal A} = \det [T]^{\mathcal B}_{\mathcal B}$.
::: soluzione
(1) $M = [\id]^{\mathcal B}_{\mathcal A} = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$. Determinante lungo la prima riga: $1 \cdot (1 - 1) - 0 + 1 \cdot (0 - 1) = -1$. L'inversa, con i cofattori divisi per $-1$:
$$[\id]^{\mathcal A}_{\mathcal B} = M^{-1} = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \\ 1 & 1 & -1 \end{pmatrix}.$$
Controllo: la prima riga di $M$ per le colonne di $M^{-1}$ dà $(0 + 0 + 1,\ -1 + 0 + 1,\ 1 + 0 - 1) = (1, 0, 0)$, e così via.

(2) $A = [T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 2 & 2 & -1 \\ 1 & 3 & -1 \\ 0 & 2 & 1 \end{pmatrix}$.

(3) Prima $AM$, colonna per colonna: $Av_1 = (2 - 1,\ 1 - 1,\ 0 + 1) = (1, 0, 1)$, $Av_2 = (2 - 1,\ 3 - 1,\ 2 + 1) = (1, 2, 3)$, $Av_3 = (2 + 2 - 1,\ 1 + 3 - 1,\ 2 + 1) = (3, 3, 3)$. Poi $M^{-1}$ per ciascuna colonna:
- $M^{-1}(1, 0, 1) = (0 + 0 + 1,\ -1 + 0 + 1,\ 1 + 0 - 1) = (1, 0, 0)$;
- $M^{-1}(1, 2, 3) = (0 - 2 + 3,\ -1 + 0 + 3,\ 1 + 2 - 3) = (1, 2, 0)$;
- $M^{-1}(3, 3, 3) = (0 - 3 + 3,\ -3 + 0 + 3,\ 3 + 3 - 3) = (0, 0, 3)$.

$$[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$

(4) $T(v_1) = (1, 0, 1) = v_1$; $T(v_2) = (1, 2, 3) = v_1 + 2v_2$, infatti $(1, 0, 1) + (0, 2, 2) = (1, 2, 3)$; $T(v_3) = (3, 3, 3) = 3v_3$. Le coordinate $(1, 0, 0)$, $(1, 2, 0)$, $(0, 0, 3)$ sono le colonne trovate. Determinanti: quello di $[T]^{\mathcal B}_{\mathcal B}$ è $1 \cdot 2 \cdot 3 = 6$ (triangolare), e $\det A = 2(3 + 2) - 2(1 - 0) + (-1)(2 - 0) = 10 - 2 - 2 = 6$. Uguali, come vuole la Proposizione 16.13.
:::

::: esercizio esame Come all'esame: la traslazione dei polinomi
Sia $f : \R_2[x] \to \R_2[x]$, $f(p)(x) = p(x + 1)$ (per esempio $f(x^2) = (x + 1)^2$).
(1) Mostra che $f$ è lineare e scrivi la sua matrice rispetto a $\mathcal B = \{1, x, x^2\}$.
(2) Mostra che $f$ è un isomorfismo e scrivi la matrice di $f^{-1}$; quanto vale $f^{-1}(x^2)$?
(3) Scrivi la matrice di $f \circ f$ e spiega il risultato.
::: soluzione
(1) Linearità: $f(p + q)(x) = (p + q)(x + 1) = p(x + 1) + q(x + 1)$ e $f(\lambda p)(x) = \lambda p(x + 1)$. Le uscite della base: $f(1) = 1$, $f(x) = x + 1$, $f(x^2) = x^2 + 2x + 1$, con coordinate $(1, 0, 0)$, $(1, 1, 0)$, $(1, 2, 1)$:
$$[f]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}.$$

(2) La matrice è triangolare con determinante $1 \cdot 1 \cdot 1 = 1$: non è zero, quindi $f$ è un isomorfismo (Corollario 16.7). L'inversa è lo spostamento all'indietro, $p(x) \mapsto p(x - 1)$: $1$ va in $1$, $x$ va in $x - 1$, $x^2$ va in $x^2 - 2x + 1$. Quindi
$$[f^{-1}]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix},$$
e il prodotto con $[f]$ è $I_3$. Allora le coordinate di $f^{-1}(x^2)$ sono $[f^{-1}](0, 0, 1) = (1, -2, 1)$, cioè $f^{-1}(x^2) = 1 - 2x + x^2 = (x - 1)^2$.

(3) $[f \circ f] = [f]^2 = \begin{pmatrix} 1 & 2 & 4 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}$. Spostare due volte di 1 è spostare di 2: $f(f(p))(x) = p(x + 2)$. Infatti $(x + 2)^2 = 4 + 4x + x^2$ ha coordinate $(4, 4, 1)$, la terza colonna.
:::

::: esercizio difficile Similitudine: equivalenza e traccia
(a) Dimostra la Proposizione 16.12 (la similitudine è una relazione di equivalenza). (b) Dimostra che matrici simili hanno la stessa traccia. (c) Trova due matrici $2 \times 2$ con la stessa traccia e lo stesso determinante che non sono simili.
::: soluzione
(a) Riflessiva con $M = I_n$. Simmetrica: da $A = M^{-1}BM$ viene $B = MAM^{-1}$, cioè $B = N^{-1}AN$ con $N = M^{-1}$. Transitiva: da $A = M^{-1}BM$ e $B = N^{-1}CN$ viene $A = (NM)^{-1}C(NM)$. I dettagli sono nel riquadro della dimostrazione, nella sezione sulle matrici simili.

(b) Con la regola $\tr(XY) = \tr(YX)$ (Proposizione 8.13), $X = M^{-1}$ e $Y = BM$: $\tr(M^{-1}BM) = \tr(BMM^{-1}) = \tr B$.

(c) $I_2$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: traccia 2 e determinante 1 per tutte e due, ma $I_2$ è simile solo a sé stessa.
:::

## Domande di ripasso

::: domanda Che cos'è la matrice di cambiamento di base da $\mathcal B$ a $\mathcal C$, e com'è fatta?
È $[\id]^{\mathcal B}_{\mathcal C}$, la matrice della macchina identità con $\mathcal B$ in partenza e $\mathcal C$ in arrivo: il traduttore. La colonna $j$ contiene le coordinate del vettore $j$ di $\mathcal B$ rispetto a $\mathcal C$.
:::

::: domanda A che cosa serve? Scrivi la formula.
A tradurre le coordinate: $[v]_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$ (Proposizione 16.2). Per il verso opposto si usa l'inversa, $[\id]^{\mathcal C}_{\mathcal B}$.
:::

::: domanda Come si scrive in fretta il traduttore se la base di arrivo è quella canonica?
Mettendo in colonna i vettori della base di partenza, nell'ordine: nella base canonica le coordinate sono i numeri del vettore.
:::

::: domanda Perché la composizione di macchine lineari è lineare?
Perché $(g \circ f)(v + v') = g(f(v) + f(v')) = g(f(v)) + g(f(v'))$ e $(g \circ f)(\lambda v) = g(\lambda f(v)) = \lambda g(f(v))$: si usa prima la linearità di $f$, poi quella di $g$.
:::

::: domanda Qual è la matrice di una composizione?
Il prodotto delle due matrici, con la macchina che agisce per prima a destra: $[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}[f]^{\mathcal B}_{\mathcal C}$ (Proposizione 16.6). La base dello spazio in mezzo è la stessa nei due fattori. Per le macchine delle matrici: $L_A \circ L_B = L_{AB}$.
:::

::: domanda Come si riconosce un isomorfismo dalla matrice, e qual è la matrice dell'inversa?
È un isomorfismo esattamente quando la sua matrice è invertibile: quadrata, con determinante diverso da zero. La matrice della macchina inversa è la matrice inversa (Corollario 16.7).
:::

::: domanda Come si passa dalla matrice in certe basi alla matrice in altre basi?
Moltiplicando a sinistra e a destra per due traduttori: $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2}[f]^{\mathcal B_1}_{\mathcal C_1}[\id_V]^{\mathcal B_2}_{\mathcal B_1}$ (Corollario 16.8).
:::

::: domanda Che cos'è un endomorfismo? Come cambia la sua matrice con la base?
Una macchina lineare che parte e arriva nello stesso spazio. Con la stessa base in partenza e in arrivo, se $M = [\id]^{\mathcal B}_{\mathcal C}$ allora $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$.
:::

::: domanda Quando due matrici sono simili, e che cosa significa?
Quando $A = M^{-1}BM$ per qualche $M$ invertibile. Significa che $A$ e $B$ descrivono la stessa macchina in due basi diverse.
:::

::: domanda Perché la similitudine è una relazione di equivalenza?
Riflessiva con $M = I_n$; simmetrica perché $A = M^{-1}BM$ dà $B = MAM^{-1}$; transitiva perché $A = M^{-1}BM$ e $B = N^{-1}CN$ danno $A = (NM)^{-1}C(NM)$.
:::

::: domanda Che cosa hanno in comune due matrici simili?
Rango e determinante (Proposizione 16.13), quindi sono tutte e due invertibili o tutte e due no. Anche la traccia, e dalla lezione L17 il polinomio caratteristico.
:::

::: domanda Due matrici con lo stesso determinante e lo stesso rango sono simili?
Non per forza: $I_2$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ hanno rango 2 e determinante 1, ma $I_2$ è simile solo a sé stessa.
:::

## Glossario

```glossario
Matrice di cambiamento di base | $[\id]^{\mathcal B}_{\mathcal C}$: il traduttore delle coordinate da $\mathcal B$ a $\mathcal C$; la colonna $j$ è $[v_j]_{\mathcal C}$ (Definizione 16.1).
Cambiamento di base inverso | $[\id]^{\mathcal C}_{\mathcal B}$, l'inversa del traduttore: traduce nel verso opposto.
Composizione | $g \circ f$: prima agisce $f$, poi $g$; è lineare se lo sono $f$ e $g$ (Proposizione 16.4).
Matrice della composizione | Il prodotto delle matrici, con la prima macchina a destra: $[g \circ f] = [g][f]$; per le $L_A$, $L_A \circ L_B = L_{AB}$.
Associatività | La regola delle parentesi $A(BC) = (AB)C$: è il motivo per cui $L_A(L_B(x)) = L_{AB}(x)$.
Isomorfismo e matrice invertibile | Una macchina è un isomorfismo esattamente quando la sua matrice è invertibile; la matrice dell'inversa è la matrice inversa (Corollario 16.7).
Formula del cambiamento di base | Traduttore a sinistra, matrice, traduttore a destra (Corollario 16.8).
Endomorfismo | Una macchina lineare che parte e arriva nello stesso spazio (Definizione 16.9).
Matrice di un endomorfismo | $[f]^{\mathcal B}_{\mathcal B}$, con la stessa base in partenza e in arrivo.
Matrici simili (coniugate) | $A = M^{-1}BM$ con $M$ invertibile: la stessa macchina in due basi (Definizione 16.11).
Relazione di equivalenza | Una parentela riflessiva, simmetrica e transitiva; la similitudine lo è (Proposizione 16.12).
Invarianti per similitudine | Numeri uguali per matrici simili: rango, determinante, traccia (e il polinomio caratteristico, lezione L17).
Teorema di Binet | Il determinante di un prodotto è il prodotto dei determinanti (lezione L10); da qui $\det(M^{-1}BM) = \det B$.
Inversa di una $2 \times 2$ | Scambia la diagonale, cambia segno agli altri due, dividi per $ad - bc$, se non è zero.
```

## Checklist

```checklist
- So scrivere la matrice di cambiamento di base e so in quale verso traduce le coordinate.
- So scrivere in un attimo il traduttore verso la base canonica, e ottenere quello nel verso opposto con l'inversa.
- So passare da una base non canonica a un'altra, risolvendo sistemi oppure passando dalla base canonica.
- So spiegare perché due macchine lineari in fila danno una macchina lineare e perché $L_A \circ L_B = L_{AB}$.
- So calcolare la matrice di una composizione nell'ordine giusto e con le taglie giuste.
- So riconoscere un isomorfismo dalla matrice e scrivere la matrice dell'inversa.
- So usare la formula «traduttore, matrice, traduttore» per cambiare le basi di una macchina.
- So calcolare $M^{-1}AM$ per un endomorfismo e controllare il risultato con le uscite dei vettori della base.
- So la definizione di matrici simili e perché la similitudine è una relazione di equivalenza.
- So che matrici simili hanno stesso rango, determinante e traccia, e che il contrario è falso.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 16 «Applicazioni lineari III», pp. 79–84: le sezioni 16.A (matrice di cambiamento di base), 16.B (composizione), 16.C (endomorfismi e similitudine) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizioni 16.1, 16.9, 16.11; Proposizioni 16.2, 16.4–16.6, 16.12, 16.13; Corollari 16.7 e 16.8; Esempio 16.10); l'Esercizio 16.3, risolto nel testo delle dispense, è riportato come esempio, e l'Esercizio 16.14 della sezione 16.D è svolto come esercizio 7.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §4.2.4 (composizione), §4.3.3 e §4.3.5 (proprietà della matrice associata, cambiamento di base, Esempi 4.3.14–4.3.15), §4.4.1–4.4.3 (endomorfismi e similitudine, con la dimostrazione della Proposizione 16.12 e l'Esempio 4.4.2 della riflessione), §4.4.5 (traccia).
- **Esame**: appelli del 24/01/2024 (domanda 3), 08/02/2024 (domanda 5), 10/06/2024 (domanda 8), 10/07/2024 (problema 11), 06/09/2024 (domanda 5), 16/01/2025 (domanda 5), 03/06/2025 (domanda 5), 10/07/2025 (domanda 6), 02/09/2025 (domanda 8), 15/01/2026 (domande 8 e 10), 03/07/2026 (domanda 5), 07/09/2026 (problema 11); foglio 3 del tutorato 2025/26 (esercizi 1, 2, 3 e 5). Testi e soluzioni ufficiali sul Moodle 2025/26 ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); le soluzioni riportate qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (la dimostrazione della Proposizione 16.4, quella della 16.12 dal libro, la traccia come invariante, gli esempi e gli esercizi aggiunti) servono a collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
