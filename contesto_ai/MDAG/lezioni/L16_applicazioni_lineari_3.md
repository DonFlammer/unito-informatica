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
  Come si passa dalle coordinate in una base alle coordinate in un'altra con la matrice $[\id]^{\mathcal B}_{\mathcal C}$,
  perché comporre due applicazioni lineari vuol dire moltiplicare le loro matrici, e come cambia la matrice di un
  endomorfismo quando cambi base: $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$. Le matrici
  legate da questa formula si chiamano simili, e sono il punto di partenza degli autovalori.
materiale: dispense
scheda:
  Dispense: lezione 16 · pp. 79–84
  Libro: Martelli, §4.2.4, §4.3.3, §4.3.5 e §4.4
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 100–130 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 16 «Applicazioni lineari III»; B. Martelli, Geometria e algebra lineare, §4.2.4, §4.3 e §4.4
file_en: L16_linear_maps_3.html
appunti_html: appunti/MDAG/L16_applicazioni_lineari_3.html
genera_html: true
---

## In breve

- La **matrice di cambiamento di base** da $\mathcal B$ a $\mathcal C$ è $[\id]^{\mathcal B}_{\mathcal C}$: la sua colonna $j$ contiene le coordinate del $j$-esimo vettore di $\mathcal B$ rispetto a $\mathcal C$. La sua inversa $[\id]^{\mathcal C}_{\mathcal B}$ fa il percorso contrario.
- Converte le coordinate: $[v]_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}\,[v]_{\mathcal B}$. Se $\mathcal C$ è la base canonica di $\K^n$, basta mettere in colonna i vettori di $\mathcal B$.
- La **composizione** di applicazioni lineari è lineare, e in coordinate diventa il **prodotto** delle matrici: $L_A \circ L_B = L_{AB}$ e $[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f]^{\mathcal B}_{\mathcal C}$ (la base in mezzo si «cancella»).
- $f$ è un isomorfismo se e solo se la sua matrice è invertibile, e allora $[f^{-1}]^{\mathcal C}_{\mathcal B} = \big([f]^{\mathcal B}_{\mathcal C}\big)^{-1}$.
- Per cambiare le basi di un'applicazione si moltiplica a sinistra e a destra per matrici di cambiamento di base: $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2}\,[f]^{\mathcal B_1}_{\mathcal C_1}\,[\id_V]^{\mathcal B_2}_{\mathcal B_1}$.
- Un **endomorfismo** è un'applicazione lineare $f : V \to V$; si usa la stessa base in partenza e in arrivo. Con $M = [\id]^{\mathcal B}_{\mathcal C}$ vale $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$.
- Due matrici quadrate sono **simili** se $A = M^{-1}BM$ con $M$ invertibile: descrivono lo stesso endomorfismo in basi diverse. La similitudine è una relazione di equivalenza.
- Matrici simili hanno lo stesso **rango** e lo stesso **determinante** (e, come vedrai nella lezione L17, lo stesso polinomio caratteristico). Non basta però avere rango e determinante uguali per essere simili.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## La matrice di cambiamento di base (pp. 79–80)

Nella lezione L15 hai visto la matrice associata $[f]^{\mathcal B}_{\mathcal C}$: la colonna $j$ contiene le coordinate di $f(v_j)$ rispetto alla base di arrivo. Adesso prendiamo come $f$ l'applicazione più semplice di tutte, l'identità $\id(v) = v$, ma con **due basi diverse**. Il risultato è uno strumento per tradurre le coordinate da una base all'altra.

Come nelle dispense, i vettori di $\K^n$ sono colonne; nel testo li scriviamo in riga, $(1, 2)$, per risparmiare spazio.

### Un esempio per cominciare

In $\R^2$ prendi la base $\mathcal B = \{v_1, v_2\}$ con $v_1 = (1, 1)$ e $v_2 = (1, -1)$, e la base canonica $\mathcal C = \{e_1, e_2\}$. Un vettore $v$ ha coordinate $[v]_{\mathcal B} = (2, 1)$. Chi è $v$? Per definizione di coordinate
$$v = 2v_1 + 1v_2 = 2(1, 1) + (1, -1) = (3, 1).$$
Lo stesso conto si scrive come un prodotto, mettendo **in colonna** i vettori di $\mathcal B$:
$$\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 + 1 \\ 2 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix} = [v]_{\mathcal C}.$$
La matrice con le colonne $v_1, v_2$ trasforma le coordinate rispetto a $\mathcal B$ nelle coordinate rispetto a $\mathcal C$. È proprio $[\id]^{\mathcal B}_{\mathcal C}$: la colonna $j$ è $[\id(v_j)]_{\mathcal C} = [v_j]_{\mathcal C}$.

> [!DEF] 16.1 · Matrice di cambiamento di base
> Sia $V$ uno spazio vettoriale e $\mathcal B = \{v_1, \dots, v_n\}$ e $\mathcal C = \{w_1, \dots, w_n\}$ due basi di $V$. La **matrice di cambiamento di base da $\mathcal B$ a $\mathcal C$** è la matrice
> $$A = [\id]^{\mathcal B}_{\mathcal C}.$$

Pezzo per pezzo:

- È la matrice associata all'identità $\id : V \to V$, con $\mathcal B$ in partenza (in alto) e $\mathcal C$ in arrivo (in basso). È quadrata $n \times n$.
- **La colonna $j$** di $A$ contiene le coordinate di $v_j$ rispetto a $\mathcal C$: $A^j = [v_j]_{\mathcal C}$.
- **L'inversa** $A^{-1} = [\id]^{\mathcal C}_{\mathcal B}$ è la matrice di cambiamento di base da $\mathcal C$ a $\mathcal B$: ha nelle colonne le coordinate dei vettori di $\mathcal C$ rispetto a $\mathcal B$. (Che sia davvero l'inversa lo dimostra il Corollario 16.7 più avanti: l'identità è un isomorfismo e la sua inversa è ancora l'identità.)

Dalla Proposizione 15.9 della lezione L15, $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$, applicata a $f = \id$, si ricava:

> [!PROP] 16.2
> Per ogni $v \in V$ vale
> $$[v]_{\mathcal C} = A \cdot [v]_{\mathcal B}.$$

> [!NOTA] Un rimando da correggere
> Nelle dispense, a p. 79, la Proposizione 16.2 è introdotta con «Dalla Proposizione 15.10 ricaviamo». Il risultato usato è la **Proposizione 15.9** ($[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$); il numero 15.10 è un esempio.

> [!TRAPPOLA] In quale direzione va la matrice?
> $[\id]^{\mathcal B}_{\mathcal C}$ **prende** coordinate rispetto a $\mathcal B$ (in alto) e **restituisce** coordinate rispetto a $\mathcal C$ (in basso), e nelle colonne ha i vettori **di $\mathcal B$** scritti nella base $\mathcal C$. L'errore tipico è usare la matrice con i vettori di $\mathcal B$ in colonna per passare da coordinate canoniche a coordinate rispetto a $\mathcal B$: per quello serve l'**inversa**.
>
> Nell'esempio: da $[v]_{\mathcal C} = (3, 1)$ si torna a $[v]_{\mathcal B}$ con $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}^{-1} = \frac 12 \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, e infatti $\frac 12 (3 + 1,\ 3 - 1) = (2, 1)$.

> [!METODO] La matrice di cambiamento di base, due casi
> 1. **$\mathcal C$ è la base canonica di $\K^n$.** Le coordinate di un vettore rispetto alla base canonica sono le sue componenti, quindi $[\id]^{\mathcal B}_{\mathcal C}$ si scrive subito: **i vettori di $\mathcal B$ in colonna**, nell'ordine. Se serve la direzione opposta, $[\id]^{\mathcal C}_{\mathcal B}$, si calcola l'inversa.
> 2. **Nessuna delle due è canonica.** O si risolvono $n$ sistemi (uno per ogni vettore di $\mathcal B$, come nella Soluzione 1 qui sotto), oppure si passa dalla base canonica $\mathcal E$: $[\id]^{\mathcal B}_{\mathcal C} = [\id]^{\mathcal E}_{\mathcal C}\,[\id]^{\mathcal B}_{\mathcal E} = \big([\id]^{\mathcal C}_{\mathcal E}\big)^{-1}[\id]^{\mathcal B}_{\mathcal E}$ (è la regola della composizione che vedi nella prossima sezione).

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
> Con $a_{11} = 1$: $2a_{21} + a_{31} = -2$ e $a_{21} + a_{31} = -3$. Sottraendo, $a_{21} = 1$, e poi $a_{31} = -3 - 1 = -4$. In modo simile:
> - per $e_2$: $a_{12} = 0$, $2a_{22} + a_{32} = 1$, $a_{22} + a_{32} = 0$, quindi $a_{22} = 1$ e $a_{32} = -1$;
> - per $e_3$: $a_{13} = 0$, $2a_{23} + a_{33} = 0$, $a_{23} + a_{33} = 1$, quindi $a_{23} = -1$ e $a_{33} = 2$.
>
> Mettendo le soluzioni in colonna:
> $$A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}.$$
>
> **Soluzione 2.** Calcoliamo prima $A^{-1} = [\id]^{\mathcal B}_{\mathcal A}$. La sua colonna $j$ è $[w_j]_{\mathcal A}$, e poiché $\mathcal A$ è la base canonica $[w_j]_{\mathcal A} = w_j$. Quindi
> $$A^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 2 & 1 \\ 3 & 1 & 1 \end{pmatrix}, \qquad A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 2 & 1 \\ 3 & 1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}.$$

L'inversa della Soluzione 2 si calcola con i cofattori (lezione L10). Il determinante, sviluppando lungo la prima riga, è $1 \cdot (2 \cdot 1 - 1 \cdot 1) = 1$. La matrice dei cofattori trasposta, divisa per $\det = 1$, dà proprio $A$. Controllo sulla prima colonna: $1 \cdot w_1 + 1 \cdot w_2 - 4 \cdot w_3 = (1 + 0 - 0,\ 2 + 2 - 4,\ 3 + 1 - 4) = (1, 0, 0) = e_1$.

Nello strumento qui sotto la matrice è già $A^{-1}$ (i vettori di $\mathcal B$ in colonna, cioè scritti per righe come $1\ 0\ 0;\ 2\ 2\ 1;\ 3\ 1\ 1$). Premi il pulsante e guarda le mosse di Gauss–Jordan che trasformano $(A^{-1} \mid I)$ in $(I \mid A)$.

```widget gauss
titolo: L'inversa di $[\id]^{\mathcal B}_{\mathcal A}$ è $[\id]^{\mathcal A}_{\mathcal B}$
matrice: 1 0 0; 2 2 1; 3 1 1
modo: inversa
modi: inversa, determinante
```

## Composizione di applicazioni lineari (pp. 80–81)

Oltre alle operazioni di somma e prodotto per scalare (lezione L15), le applicazioni lineari si possono **comporre**: prima si applica $f$, poi $g$.

> [!ESEMPIO] · comporre e moltiplicare
> Siano $f, g : \R^2 \to \R^2$ con $f(x, y) = (x + y,\ y)$ e $g(u, v) = (2u,\ u - v)$. Allora
> $$(g \circ f)(x, y) = g(x + y,\ y) = \big(2(x + y),\ (x + y) - y\big) = (2x + 2y,\ x).$$
> Le matrici nelle basi canoniche sono $[f] = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $[g] = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}$, e il prodotto
> $$[g]\,[f] = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 \cdot 1 + 0 \cdot 0 & 2 \cdot 1 + 0 \cdot 1 \\ 1 \cdot 1 - 1 \cdot 0 & 1 \cdot 1 - 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 1 & 0 \end{pmatrix}$$
> è proprio la matrice di $g \circ f$. Controllo su un vettore: $f(3, 5) = (8, 5)$ e $g(8, 5) = (16, 3)$; con la matrice, $(2 \cdot 3 + 2 \cdot 5,\ 3) = (16, 3)$.

> [!PROP] 16.4
> Se $f : V \to W$ e $g : W \to Z$ sono funzioni lineari, anche la composizione
> $$g \circ f : V \to Z$$
> lo è.

> [!DIM] della Proposizione 16.4 (le dispense non la riportano)
> Per $v, v' \in V$ e $\lambda \in \K$:
> $$(g \circ f)(v + v') = g\big(f(v) + f(v')\big) = g(f(v)) + g(f(v')), \qquad (g \circ f)(\lambda v) = g\big(\lambda f(v)\big) = \lambda\, g(f(v)).$$
> Nel primo passaggio di ciascuna catena si usa la linearità di $f$, nel secondo quella di $g$.

Per le applicazioni di tipo $L_A$ la composizione corrisponde precisamente al prodotto fra matrici:

> [!PROP] 16.5
> Siano $A \in M(k, m, \K)$ e $B \in M(m, n, \K)$. Consideriamo
> $$L_A : \K^m \to \K^k, \qquad L_B : \K^n \to \K^m.$$
> Vale la relazione
> $$L_A \circ L_B = L_{AB}.$$

La spiegazione delle dispense: per ogni $x \in \K^n$,
$$L_A(L_B(x)) = A(Bx) = (AB)x = L_{AB}(x),$$
dove il passaggio centrale è l'**associatività** del prodotto fra matrici (lezione L08). Le taglie tornano: $B$ è $m \times n$ e manda $\K^n$ in $\K^m$, poi $A$ è $k \times m$ e manda $\K^m$ in $\K^k$; il prodotto $AB$ è $k \times n$.

Lo stesso vale con basi qualsiasi:

> [!PROP] 16.6
> Siano $f : U \to V$ e $g : V \to W$ due applicazioni lineari. Siano $\mathcal B$, $\mathcal C$ e $\mathcal D$ basi di $U$, $V$ e $W$. Troviamo
> $$[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f]^{\mathcal B}_{\mathcal C}.$$

La dimostrazione delle dispense, con i passaggi:

1. Sia $\mathcal B = \{v_1, \dots, v_n\}$. Per definizione di matrice associata, la colonna $i$ di $[g \circ f]^{\mathcal B}_{\mathcal D}$ è $[g(f(v_i))]_{\mathcal D}$.
2. Per la Proposizione 15.9 applicata a $g$ e al vettore $f(v_i)$: $[g(f(v_i))]_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f(v_i)]_{\mathcal C}$.
3. D'altra parte $[f(v_i)]_{\mathcal C}$ è la colonna $i$ di $[f]^{\mathcal B}_{\mathcal C}$. E la colonna $i$ di un prodotto $XY$ è $X$ per la colonna $i$ di $Y$.
4. Quindi le due matrici hanno le stesse colonne, cioè sono uguali. $\square$

> [!TRAPPOLA] L'ordine: si legge da destra a sinistra
> $g \circ f$ vuol dire «prima $f$, poi $g$», e nel prodotto la matrice di $f$ sta **a destra**: $[g][f]$. Il prodotto di matrici non è commutativo, quindi $[f][g]$ è in genere un'altra matrice (o non si può nemmeno calcolare, se le taglie non tornano). Un aiuto per la memoria: nella formula le basi si incastrano come tessere del domino, $[g]^{\mathcal C}_{\mathcal D}[f]^{\mathcal B}_{\mathcal C}$, e la base $\mathcal C$ «in mezzo» deve essere la stessa sopra e sotto.

> [!ESEMPIO] · composizione con i polinomi
> Siano $f : \R^2 \to \R_2[x]$, $f(u, v) = u x^2 + v$, e $g : \R_2[x] \to \R^2$, $g(p) = (p(1),\ p(2))$. Con le basi canoniche $\mathcal E$ di $\R^2$ e $\mathcal B = \{1, x, x^2\}$ di $\R_2[x]$:
> - $f(e_1) = x^2$ e $f(e_2) = 1$, con coordinate $(0, 0, 1)$ e $(1, 0, 0)$, quindi $[f]^{\mathcal E}_{\mathcal B} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \\ 1 & 0 \end{pmatrix}$;
> - $g(1) = (1, 1)$, $g(x) = (1, 2)$, $g(x^2) = (1, 4)$, quindi $[g]^{\mathcal B}_{\mathcal E} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}$.
>
> Per la Proposizione 16.6:
> $$[g \circ f]^{\mathcal E}_{\mathcal E} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 4 & 1 \end{pmatrix}.$$
> Controllo diretto: $(g \circ f)(u, v) = g(ux^2 + v) = (u + v,\ 4u + v)$, che ha proprio questa matrice.

### Isomorfismi e matrici invertibili

> [!COROLLARIO] 16.7
> La funzione $f$ è un isomorfismo se e solo se la matrice associata $[f]^{\mathcal B}_{\mathcal C}$ è invertibile, e in questo caso la sua inversa è
> $$\big[f^{-1}\big]^{\mathcal C}_{\mathcal B}.$$

La dimostrazione delle dispense, spiegata:

1. **($\Rightarrow$)** Se $f$ è un isomorfismo esiste $f^{-1} : W \to V$, e $f^{-1} \circ f = \id_V$, $f \circ f^{-1} = \id_W$. Per la Proposizione 16.6 e la Proposizione 15.11 ($[\id]^{\mathcal B}_{\mathcal B} = I_n$):
$$[f^{-1}]^{\mathcal C}_{\mathcal B}\,[f]^{\mathcal B}_{\mathcal C} = [f^{-1} \circ f]^{\mathcal B}_{\mathcal B} = I_n \qquad\text{e}\qquad [f]^{\mathcal B}_{\mathcal C}\,[f^{-1}]^{\mathcal C}_{\mathcal B} = [f \circ f^{-1}]^{\mathcal C}_{\mathcal C} = I_n,$$
quindi $[f^{-1}]^{\mathcal C}_{\mathcal B}$ è l'inversa di $[f]^{\mathcal B}_{\mathcal C}$.
2. **($\Leftarrow$)** Se $A = [f]^{\mathcal B}_{\mathcal C}$ è invertibile, per il teorema della lezione 15 sulle matrici associate (Teorema 15.12: ogni matrice è la matrice di un'applicazione lineare) esiste $g : W \to V$ lineare con $[g]^{\mathcal C}_{\mathcal B} = A^{-1}$. Allora $[g \circ f]^{\mathcal B}_{\mathcal B} = A^{-1}A = I_n = [\id_V]^{\mathcal B}_{\mathcal B}$, e poiché la matrice determina l'applicazione, $g \circ f = \id_V$; allo stesso modo $f \circ g = \id_W$. Quindi $g = f^{-1}$ e $f$ è un isomorfismo.

In pratica, per decidere se $f$ è un isomorfismo basta scegliere due basi qualsiasi e controllare che la matrice sia quadrata con determinante diverso da zero.

> [!ESEMPIO] · un isomorfismo tra polinomi e coppie di numeri
> Sia $f : \R_1[x] \to \R^2$, $f(p) = (p(0),\ p(1))$. Con $\mathcal B = \{1, x\}$ e la base canonica: $f(1) = (1, 1)$ e $f(x) = (0, 1)$, quindi
> $$[f] = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}, \qquad \det [f] = 1 \neq 0.$$
> $f$ è un isomorfismo, e $[f^{-1}] = [f]^{-1} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$ (per una $2 \times 2$: si scambiano gli elementi della diagonale, si cambia segno agli altri due, si divide per il determinante). Quindi $f^{-1}(a, b)$ ha coordinate $(a,\ b - a)$:
> $$f^{-1}(a, b) = a + (b - a)x.$$
> È il polinomio di grado al massimo 1 che vale $a$ in $0$ e $b$ in $1$: controllo, $p(0) = a$ e $p(1) = a + b - a = b$.

### Cambiare le basi di un'applicazione

> [!COROLLARIO] 16.8
> Sia $f : V \to W$ un'applicazione lineare. Siano $\mathcal B_1, \mathcal B_2$ due basi di $V$ e $\mathcal C_1, \mathcal C_2$ due basi di $W$. Applicando la Proposizione 16.6 troviamo
> $$[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2} \cdot [f]^{\mathcal B_1}_{\mathcal C_1} \cdot [\id_V]^{\mathcal B_2}_{\mathcal B_1}.$$

Questo corollario ci dice che per passare da $[f]^{\mathcal B_1}_{\mathcal C_1}$ a $[f]^{\mathcal B_2}_{\mathcal C_2}$ basta moltiplicare a sinistra e a destra per matrici di cambiamento di base. Il perché: $f = \id_W \circ f \circ \id_V$, e si applica due volte la Proposizione 16.6 scegliendo le basi come tessere del domino. Si legge da destra a sinistra:

1. $[\id_V]^{\mathcal B_2}_{\mathcal B_1}$ traduce le coordinate in partenza da $\mathcal B_2$ a $\mathcal B_1$;
2. $[f]^{\mathcal B_1}_{\mathcal C_1}$ applica $f$ nelle basi che conosci già;
3. $[\id_W]^{\mathcal C_1}_{\mathcal C_2}$ traduce il risultato da $\mathcal C_1$ a $\mathcal C_2$.

> [!ESEMPIO] · l'Esempio 15.8 rifatto con il Corollario 16.8
> Nella lezione L15 la stessa $f : \R_2[x] \to \R^2$, $f(p) = (p(2), p(-2))$, aveva matrice $\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}$ con la base canonica $\mathcal C$ in arrivo, e la base $\mathcal C' = \{(1, -1), (0, 1)\}$ richiedeva tre sistemi. Con il corollario (in partenza la base non cambia, quindi il fattore a destra è $I_3$):
> - $[\id]^{\mathcal C'}_{\mathcal C} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$ (i vettori di $\mathcal C'$ in colonna), quindi $[\id]^{\mathcal C}_{\mathcal C'} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$;
> - $$[f]^{\mathcal B}_{\mathcal C'} = [\id]^{\mathcal C}_{\mathcal C'}\,[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 4 \\ 2 & 0 & 8 \end{pmatrix}.$$
>
> È la matrice dell'Esempio 15.8. (Lo stesso conto è l'Esempio 4.3.14 del libro di Martelli.)

## Endomorfismi e matrici simili (pp. 81–83)

> [!DEF] 16.9 · Endomorfismo
> Sia $V$ uno spazio vettoriale. Un **endomorfismo** è un'applicazione lineare
> $$f : V \to V.$$

Esempi che conosci già: ogni $L_A$ con $A$ quadrata $n \times n$ è un endomorfismo di $\K^n$; la derivata è un endomorfismo di $\R_n[x]$; la trasposizione $A \mapsto {}^tA$ è un endomorfismo di $M(n, \K)$; la moltiplicazione per uno scalare fisso, $v \mapsto \lambda v$, è un endomorfismo di qualsiasi $V$.

Per un endomorfismo è naturale usare **la stessa base** in partenza e in arrivo. Se fissiamo una base $\mathcal B$ per $V$, ogni endomorfismo $f$ è rappresentato da una matrice quadrata $[f]^{\mathcal B}_{\mathcal B}$, e la composizione corrisponde al prodotto (Proposizione 16.6 con $\mathcal B = \mathcal C = \mathcal D$):
$$[f \circ g]^{\mathcal B}_{\mathcal B} = [f]^{\mathcal B}_{\mathcal B}\,[g]^{\mathcal B}_{\mathcal B}.$$

### Come cambia la matrice di un endomorfismo

Se $\mathcal B$ e $\mathcal C$ sono due basi di $V$ e
$$M = [\id]^{\mathcal B}_{\mathcal C},$$
allora
$$[f]^{\mathcal B}_{\mathcal B} = M^{-1}\,[f]^{\mathcal C}_{\mathcal C}\,M.$$

Da dove viene: è il Corollario 16.8 con $\mathcal B_1 = \mathcal C_1 = \mathcal C$ e $\mathcal B_2 = \mathcal C_2 = \mathcal B$:
$$[f]^{\mathcal B}_{\mathcal B} = [\id]^{\mathcal C}_{\mathcal B}\,[f]^{\mathcal C}_{\mathcal C}\,[\id]^{\mathcal B}_{\mathcal C} = M^{-1}\,[f]^{\mathcal C}_{\mathcal C}\,M,$$
perché $[\id]^{\mathcal C}_{\mathcal B}$ è l'inversa di $M = [\id]^{\mathcal B}_{\mathcal C}$. Quindi le matrici che rappresentano lo stesso endomorfismo rispetto a basi diverse sono legate da una relazione del tipo $A = M^{-1}BM$.

> [!METODO] Cambio di base per un endomorfismo di $\K^n$, in quattro passi
> 1. $A = [f]^{\mathcal C}_{\mathcal C}$ nella base canonica $\mathcal C$: si legge dai coefficienti.
> 2. $M = [\id]^{\mathcal B}_{\mathcal C}$: i vettori della nuova base $\mathcal B$ **in colonna**.
> 3. $M^{-1}$ (per una $2 \times 2$: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$; per una $3 \times 3$ con i cofattori o con Gauss–Jordan).
> 4. $[f]^{\mathcal B}_{\mathcal B} = M^{-1}AM$. **Controllo** senza inversa: deve valere $M \cdot [f]^{\mathcal B}_{\mathcal B} = A \cdot M$, oppure la colonna $j$ deve dare le coordinate di $f(v_j)$ rispetto a $\mathcal B$.

> [!ESEMPIO] 16.10 · Una base in cui la matrice diventa diagonale
> Consideriamo $f : \R^2 \to \R^2$ dato da
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

Geometricamente $f$ è una **riflessione** (nel libro di Martelli è l'Esempio 4.4.2): lascia ferma la retta $\Span(1, 0)$ e ribalta la retta $\Span(-1, 2)$. Nella base canonica la matrice non lo mostra; nella base $\mathcal B$, fatta di vettori «speciali» per $f$, la matrice è diagonale e si legge tutto. È esattamente l'idea degli **autovettori** della lezione L17.

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

Nello strumento qui sotto la matrice è $[f]^{\mathcal C}_{\mathcal C}$ dell'Esempio 16.10. Le due rette tratteggiate che compaiono sono quelle su cui $f$ agisce senza girare i vettori: sono proprio $\Span(1, 0)$ e $\Span(-1, 2)$, generate dai vettori della base $\mathcal B$. Trascina il vettore $x$ su una di queste rette e guarda $Ax$.

```widget matrice
titolo: La riflessione dell'Esempio 16.10
a: 1 1; 0 -1
x: -1 2
raggio: 3
```

### Matrici simili

> [!DEF] 16.11 · Matrici simili
> Sia $M(n)$ l'insieme delle matrici quadrate $n \times n$. Diciamo che due matrici $A, B \in M(n)$ sono **simili** (o **coniugate**) se esiste una matrice invertibile $M \in M(n)$ tale che
> $$A = M^{-1}BM.$$
> Se $A$ e $B$ sono simili scriviamo $A \sim B$.

L'interpretazione è che matrici simili descrivono **lo stesso endomorfismo in basi diverse**. Pezzo per pezzo:

- $M$ deve essere **invertibile**: è una matrice di cambiamento di base, e le sue colonne formano una base.
- Se $A = M^{-1}BM$, allora $B$ è la matrice nella base «vecchia», $A$ quella nella base le cui coordinate (rispetto alla vecchia) sono le colonne di $M$.
- Nell'Esempio 16.10: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \sim \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$, con $M = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}$.

> [!PROP] 16.12
> La similitudine è una relazione di equivalenza in $M(n)$.

L'insieme $M(n)$ delle matrici quadrate è quindi partizionato in sottoinsiemi disgiunti formati da matrici simili fra loro: ogni «famiglia» raccoglie tutte le matrici dello stesso endomorfismo, al variare della base.

> [!DIM] della Proposizione 16.12 (dal libro di Martelli, Proposizione 4.4.5)
> Bisogna controllare le tre proprietà di una relazione di equivalenza (Matematica Discreta).
> 1. **Riflessiva**, $A \sim A$: con $M = I_n$ si ha $A = I_n^{-1} A I_n$.
> 2. **Simmetrica**, $A \sim B \Rightarrow B \sim A$: da $A = M^{-1}BM$, moltiplicando a sinistra per $M$ e a destra per $M^{-1}$, si ottiene $B = MAM^{-1}$. Posto $N = M^{-1}$ (invertibile), $B = N^{-1}AN$.
> 3. **Transitiva**, $A \sim B$ e $B \sim C \Rightarrow A \sim C$: se $A = M^{-1}BM$ e $B = N^{-1}CN$, allora
> $$A = M^{-1}N^{-1}CNM = (NM)^{-1}\,C\,(NM),$$
> perché $(NM)^{-1} = M^{-1}N^{-1}$. E $NM$ è invertibile, prodotto di invertibili.

> [!PROP] 16.13
> Se $A \sim B$ allora
> $$\rk(A) = \rk(B), \qquad \det(A) = \det(B).$$
> In particolare
> $$A \text{ è invertibile} \iff B \text{ è invertibile}.$$

La spiegazione delle dispense, con i passaggi. Se $A = M^{-1}BM$:

1. **Determinante.** Per il Teorema di Binet (lezione L10) e il Corollario 10.5, $\det(M^{-1}) = \frac{1}{\det M}$:
$$\det A = \det(M^{-1})\,\det B\,\det M = \frac{1}{\det M}\,\det B\,\det M = \det B.$$
2. **Rango.** La moltiplicazione a sinistra o a destra per una matrice invertibile non cambia il rango, quindi $\rk(A) = \rk(M^{-1}BM) = \rk(B)$.
3. **Invertibilità.** Una matrice quadrata è invertibile se e solo se ha determinante diverso da zero (Proposizione 10.8); i due determinanti sono uguali.

> [!ESEMPIO] · simili oppure no?
> - $\begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}$ e $\begin{pmatrix} -1 & 2 \\ 1 & 1 \end{pmatrix}$ **non** sono simili: i determinanti sono $1 - 2 = -1$ e $-1 - 2 = -3$.
> - $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $\begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ **sono** simili: con $M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (che scambia l'ordine dei due vettori della base, e ha $M^{-1} = M$) si trova $M^{-1}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}M = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ (esercizio 6).

> [!TRAPPOLA] Stesso rango e stesso determinante non bastano
> La Proposizione 16.13 va in una sola direzione. Controesempio: $I_2$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ hanno entrambe rango 2 e determinante 1, ma **non** sono simili. Infatti $I_2$ è simile solo a se stessa: $M^{-1}I_2M = M^{-1}M = I_2$ per ogni $M$ invertibile. Lo stesso vale per ogni $\lambda I_n$.

> [!OLTRE] anche la traccia non cambia
> Anche la **traccia** (somma degli elementi sulla diagonale, lezione L08) è la stessa per matrici simili. Usando $\tr(XY) = \tr(YX)$ (Proposizione 8.13) con $X = M^{-1}$ e $Y = BM$:
> $$\tr(M^{-1}BM) = \tr(BMM^{-1}) = \tr(B).$$
> Nel quiz è un modo veloce per escludere risposte: due matrici con tracce diverse non sono simili. Nella lezione L17 vedrai l'invariante più potente, il polinomio caratteristico.

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: §4.2.4 «Composizione di applicazioni lineari» (pp. 126–127), §4.3.3 (pp. 132–134: composizione e Corollario 4.3.10, che è il nostro 16.7), §4.3.5 «Matrice di cambiamento di base» (pp. 135–137, con gli Esempi 4.3.14 e 4.3.15 che rifanno gli esempi della lezione L15), §4.4.1–4.4.3 «Endomorfismi» e «Similitudine fra matrici» (pp. 137–140), §4.4.5 sulla traccia (p. 141).

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste; dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame.** I cambi di base e le matrici associate sono tra gli esercizi più ricorrenti di Algebra lineare. Negli appelli 2023–2026:

| Tipo di domanda | Dove |
|---|---|
| matrice di cambiamento di base in $\R^2$, $\R^3$ o $\R_1[x]$ | 10/06/2024 d. 8; 06/09/2024 d. 5; 10/07/2025 d. 6 (basi canoniche permutate); 02/09/2025 d. 8 (tre basi) |
| matrice di una composizione, o formula della composizione | 08/02/2024 d. 5; 16/01/2025 d. 5; 15/01/2026 d. 10 (nucleo di $S \circ T$); 03/07/2026 d. 5 ($T \circ S = 0$) |
| matrice $[T]^{\mathcal B}_{\mathcal B}$ in una base data, o $A$ ricavata da $[L_A]^{\mathcal B}_{\mathcal B}$ | 24/01/2024 d. 3; 03/06/2025 d. 5; 15/01/2026 d. 8 |
| problema aperto: matrici di cambiamento di base, $[T]^{\mathcal A}_{\mathcal A}$ e $[T]^{\mathcal B}_{\mathcal B}$ | 07/09/2026 problema 11; matrice di $T^{-1}$: 10/07/2024 problema 11 |

### Tre domande vere, risolte

> [!ESAME] Appello del 24/01/2024, domanda 3 (anche foglio 3 del tutorato, esercizio 5)
> *La matrice associata a $T(x, y) = (2x + y,\ x + 2y)$ rispetto alla base $\mathcal B = \{(0, 1), (1, 2)\}$ è …*
>
> Soluzione con la formula. $A = [T]^{\mathcal C}_{\mathcal C} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, $M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$, $\det M = -1$, $M^{-1} = \begin{pmatrix} -2 & 1 \\ 1 & 0 \end{pmatrix}$. Poi
> $$AM = \begin{pmatrix} 1 & 4 \\ 2 & 5 \end{pmatrix}, \qquad M^{-1}(AM) = \begin{pmatrix} -2 + 2 & -8 + 5 \\ 1 & 4 \end{pmatrix} = \begin{pmatrix} 0 & -3 \\ 1 & 4 \end{pmatrix}.$$
> Controllo diretto: $T(0, 1) = (1, 2) = 0 \cdot (0, 1) + 1 \cdot (1, 2)$, prima colonna $(0, 1)$. Tra le risposte c'era anche la trasposta $\begin{pmatrix} 0 & 1 \\ -3 & 4 \end{pmatrix}$.

> [!ESAME] Appello del 16/01/2025, domanda 5
> *Siano $f : \R^2 \to \R_2[x]$, $f(u, v) = ux^2 + vx$, e $g : \R_2[x] \to \R^2$, $g(p) = (p(1) + p(2),\ p(1) - p(-1))$. La matrice di $g \circ f$ rispetto alle basi canoniche è …*
>
> Soluzione. La via più corta è calcolare $g \circ f$ sui vettori della base: $g(f(e_1)) = g(x^2) = (1 + 4,\ 1 - 1) = (5, 0)$ e $g(f(e_2)) = g(x) = (1 + 2,\ 1 - (-1)) = (3, 2)$. Quindi la matrice è $\begin{pmatrix} 5 & 3 \\ 0 & 2 \end{pmatrix}$. Con il prodotto: $[g] = \begin{pmatrix} 2 & 3 & 5 \\ 0 & 2 & 0 \end{pmatrix}$ (colonne $g(1), g(x), g(x^2)$), $[f] = \begin{pmatrix} 0 & 0 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$, e $[g][f] = \begin{pmatrix} 5 & 3 \\ 0 & 2 \end{pmatrix}$. Una delle risposte sbagliate conteneva le lettere $u$ e $v$: una matrice associata contiene solo numeri.

> [!ESAME] Appello del 07/09/2026, problema 11 (punti 1–3)
> *$\mathcal A$ base canonica di $\R^3$, $\mathcal B = \{v_1, v_2, v_3\}$ con $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$, $v_3 = (1, 1, 1)$, e $T(a, b, c) = (2a + c,\ a + b,\ -a + b + 3c)$. (1) Determinare $[\id]^{\mathcal B}_{\mathcal A}$ e $[\id]^{\mathcal A}_{\mathcal B}$. (2) Trovare $[T]^{\mathcal A}_{\mathcal A}$. (3) Trovare $[T]^{\mathcal B}_{\mathcal B}$.*
>
> Soluzione. (1) $M = [\id]^{\mathcal B}_{\mathcal A} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ (i $v_j$ in colonna), $\det M = -1$, e $[\id]^{\mathcal A}_{\mathcal B} = M^{-1} = \begin{pmatrix} 1 & 0 & -1 \\ 1 & -1 & 0 \\ -1 & 1 & 1 \end{pmatrix}$ (controllo: $MM^{-1} = I_3$).
> (2) Dai coefficienti: $[T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ -1 & 1 & 3 \end{pmatrix}$.
> (3) $[T]^{\mathcal B}_{\mathcal B} = M^{-1}[T]^{\mathcal A}_{\mathcal A}M = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$. Controllo senza inverse: $T(v_1) = (2, 2, 0) = 2v_1$; $T(v_2) = (3, 1, 2) = v_1 + 2v_2$; $T(v_3) = (3, 2, 3) = v_2 + 2v_3$; le coordinate sono proprio le colonne. Il punto (4), gli autovalori, si risolve con la lezione L17: la matrice $[T]^{\mathcal B}_{\mathcal B}$ è triangolare, con 2 sulla diagonale.

### Errori da evitare

- Confondere $[\id]^{\mathcal B}_{\mathcal C}$ con la sua inversa: i vettori di $\mathcal B$ in colonna portano da coordinate $\mathcal B$ a coordinate canoniche, non il contrario.
- Scrivere $MAM^{-1}$ al posto di $M^{-1}AM$ (o viceversa). Con $M = [\id]^{\mathcal B}_{\mathcal C}$ (nuova base in colonna) la formula giusta per la matrice nella nuova base è $M^{-1}[f]^{\mathcal C}_{\mathcal C}M$. Nel dubbio, controlla una colonna calcolando $f(v_1)$.
- Invertire l'ordine nella composizione: $[g \circ f] = [g][f]$.
- Dimenticare che l'ordine dei vettori di una base cambia l'ordine delle righe e delle colonne.
- Pensare che rango e determinante uguali bastino per la similitudine.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: «colonne di $[\id]^{\mathcal B}_{\mathcal C}$ = vettori di $\mathcal B$ in coordinate $\mathcal C$; $[v]_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$»; «$[g \circ f] = [g][f]$, basi come nel domino»; «$[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$ con $M = [\id]^{\mathcal B}_{\mathcal C}$»; l'inversa $2 \times 2$; «simili $\Rightarrow$ stesso rango, determinante, traccia».

## Quiz

```quiz
D: In $\R_1[x]$, la matrice di cambiamento di base $[\id]^{\mathcal B}_{\mathcal C}$ da $\mathcal B = \{3x, 2\}$ a $\mathcal C = \{x + 1, x - 1\}$ è:
+ $\begin{pmatrix} 3/2 & 1 \\ 3/2 & -1 \end{pmatrix}$
- $\begin{pmatrix} 3/2 & 3/2 \\ 1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1/3 & 1/3 \\ 1/2 & -1/2 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$
= Colonne: le coordinate dei vettori di $\mathcal B$ rispetto a $\mathcal C$. $3x = a(x + 1) + b(x - 1)$ dà $a + b = 3$ e $a - b = 0$, cioè $a = b = \frac 32$. $2 = a(x + 1) + b(x - 1)$ dà $a + b = 0$ e $a - b = 2$, cioè $a = 1$, $b = -1$. La seconda risposta è la trasposta, la terza è l'inversa $[\id]^{\mathcal C}_{\mathcal B}$. Simile all'appello del 10/06/2024, domanda 8.

D: La matrice di cambiamento di base $[\id]^{\mathcal B}_{\mathcal C}$ da $\mathcal B = \{e_3, e_1, e_2\}$ a $\mathcal C = \{e_1, e_2, e_3\}$ in $\R^3$ è:
+ $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$
- Il problema non è ben definito.
= Colonna $j$ = coordinate del $j$-esimo vettore di $\mathcal B$ rispetto a $\mathcal C$: $[e_3]_{\mathcal C} = (0, 0, 1)$, $[e_1]_{\mathcal C} = (1, 0, 0)$, $[e_2]_{\mathcal C} = (0, 1, 0)$. La seconda risposta è la trasposta, cioè $[\id]^{\mathcal C}_{\mathcal B}$. Simile all'appello del 10/07/2025, domanda 6.

D: Siano $\mathcal A, \mathcal B, \mathcal C$ tre basi di $\R^2$ con $[\id]^{\mathcal A}_{\mathcal B} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e $[\id]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$. Allora $[\id]^{\mathcal A}_{\mathcal C}$ è:
+ $\begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} -1 & 1 \\ -2 & 1 \end{pmatrix}$
- $\begin{pmatrix} -1 & -1 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
= $[\id]^{\mathcal A}_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[\id]^{\mathcal A}_{\mathcal B}$ (le basi si incastrano) e $[\id]^{\mathcal B}_{\mathcal C} = \big([\id]^{\mathcal C}_{\mathcal B}\big)^{-1} = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}$. Il prodotto è $\begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}$. Le altre risposte vengono da prodotti nell'ordine sbagliato o senza inversa. Simile all'appello del 02/09/2025, domanda 8.

D: Siano $f : \R^2 \to \R_2[x]$, $f(u, v) = ux^2 + v$, e $g : \R_2[x] \to \R^2$, $g(p) = (p(1),\ p(2))$. La matrice di $g \circ f$ rispetto alla base canonica di $\R^2$ è:
+ $\begin{pmatrix} 1 & 1 \\ 4 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 4 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}$
- $\begin{pmatrix} u & 1 \\ v & 4 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 5 & 2 \end{pmatrix}$
= $(g \circ f)(e_1) = g(x^2) = (1, 4)$ e $(g \circ f)(e_2) = g(1) = (1, 1)$: sono le colonne. In una matrice associata non compaiono le variabili $u, v$; la terza risposta è la sola $[g]$, che è $2 \times 3$. Simile all'appello del 16/01/2025, domanda 5.

D: Sia $\mathcal B = \{(1, 1), (0, 1)\}$ e sia $A \in M(2, \R)$ tale che $[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$. Allora $A$ è:
+ $\begin{pmatrix} -1 & 2 \\ -2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 3 & 2 \\ -2 & -1 \end{pmatrix}$
- $\begin{pmatrix} -1 & -2 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}$
= Con $M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$ vale $[L_A]^{\mathcal B}_{\mathcal B} = M^{-1}AM$, quindi $A = M\,[L_A]^{\mathcal B}_{\mathcal B}\,M^{-1} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ -2 & 3 \end{pmatrix}$. Controllo: $A(1, 1) = (1, 1)$, con coordinate $(1, 0)$ rispetto a $\mathcal B$: è la prima colonna data. La terza risposta usa la formula al contrario, $M^{-1}\,[L_A]^{\mathcal B}_{\mathcal B}\,M$. Simile all'appello del 03/06/2025, domanda 5.

D: Se $A, B \in M(2, \R)$ sono simili, quale affermazione è necessariamente vera?
+ $\det A = \det B$
- $A = B$
- $AB = BA$
- $A$ e $B$ hanno la stessa prima riga.
- $\rk(A) = \rk(B) + 1$
= Proposizione 16.13: matrici simili hanno lo stesso determinante e lo stesso rango (quindi l'ultima risposta è sempre falsa). Le altre tre non sono necessarie: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ e $\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$ sono simili (Esempio 16.10) ma sono diverse, non commutano e hanno prima riga diversa.

D: Quale di queste matrici è simile alla matrice identità $I_2$?
+ $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & 1/2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$
= $M^{-1}I_2M = I_2$ per ogni $M$ invertibile: $I_2$ è simile solo a se stessa. Le altre quattro hanno tutte rango 2 e determinante $\pm 1$ (tre di loro proprio 1, come $I_2$), ma non sono $I_2$: avere lo stesso determinante non basta per essere simili.

D: Siano $f, g : \R^3 \to \R^3$ lineari con $g \circ f = 0$ (l'applicazione nulla) e $f \neq 0$. Quale affermazione è sempre vera?
+ $\Imm f \subseteq \Ker g$
- $\Ker g = \{0\}$
- $g$ è un isomorfismo.
- $\Imm g \subseteq \Ker f$
- $f$ è suriettiva.
= Per ogni $v$, $g(f(v)) = 0$: ogni vettore dell'immagine di $f$ sta nel nucleo di $g$. Se fosse $\Ker g = \{0\}$ (o $g$ isomorfismo) allora $f(v) = 0$ per ogni $v$, contro $f \neq 0$. Con $f(x, y, z) = (0, x, 0)$ e $g(x, y, z) = (x, 0, 0)$ si ha $g \circ f = 0$ ma $f(g(e_1)) = e_2 \neq 0$, quindi $\Imm g \not\subseteq \Ker f$; e questa $f$ non è suriettiva. Simile all'appello del 03/07/2026, domanda 5.

D: Siano $T : \R^2 \to \R^3$, $T(x, y) = (x,\ x + y,\ y)$, e $S : \R^3 \to \R^2$, $S(a, b, c) = (a - b,\ b + c)$. La composizione $S \circ T$ è:
+ $(x, y) \mapsto (-y,\ x + 2y)$
- $(x, y, z) \mapsto (x - y,\ y + z)$
- $(x, y) \mapsto (x - y,\ 2y)$
- $(x, y, z) \mapsto (x - y,\ x + z,\ y + z)$
- Non è ben definita.
= $S(T(x, y)) = S(x,\ x + y,\ y) = \big(x - (x + y),\ (x + y) + y\big) = (-y,\ x + 2y)$. È un'applicazione $\R^2 \to \R^2$, quindi le risposte con tre variabili sono sbagliate già per il dominio. Simile all'appello del 08/02/2024, domanda 5.

D: Sia $T(x, y) = (4x - 2y,\ x + y)$ e sia $\mathcal B = \{(1, 1), (2, 1)\}$. La matrice $[T]^{\mathcal B}_{\mathcal B}$ è:
+ $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 6 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}$
= $T(1, 1) = (2, 2) = 2 \cdot (1, 1)$ e $T(2, 1) = (6, 3) = 3 \cdot (2, 1)$: le coordinate sono $(2, 0)$ e $(0, 3)$. L'ordine sulla diagonale segue l'ordine della base, quindi $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$ è sbagliata; la quarta mette le immagini senza passare alle coordinate.
```

## Esercizi

::: esercizio medio Esercizio 16.14 delle dispense: un endomorfismo che diventa diagonale
Consideriamo l'endomorfismo $f : \R^2 \to \R^2$ definito da $f(x, y) = (2x + y,\ x + 2y)$. Siano $\mathcal C = \{e_1, e_2\}$ la base canonica e $\mathcal B = \{v_1, v_2\}$ con $v_1 = (1, 1)$, $v_2 = (1, -1)$.
(1) Trovare la matrice $A = [f]^{\mathcal C}_{\mathcal C}$.
(2) Trovare la matrice di cambiamento di base $M = [\id]^{\mathcal B}_{\mathcal C}$.
(3) Calcolare $[f]^{\mathcal B}_{\mathcal B}$ usando la formula di cambiamento di base.
(4) Verificare il risultato calcolando direttamente $f(v_1)$ e $f(v_2)$.
::: soluzione
(1) Dai coefficienti: $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ (colonne $f(e_1) = (2, 1)$ e $f(e_2) = (1, 2)$).

(2) $\mathcal C$ è la base canonica, quindi basta mettere in colonna i vettori di $\mathcal B$: $M = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$.

(3) $\det M = -1 - 1 = -2$, quindi
$$M^{-1} = \frac{1}{-2}\begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}.$$
Poi, un prodotto alla volta:
$$M^{-1}A = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 3/2 & 3/2 \\ 1/2 & -1/2 \end{pmatrix}, \qquad (M^{-1}A)M = \begin{pmatrix} 3/2 & 3/2 \\ 1/2 & -1/2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$
Quindi $[f]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$.

(4) $f(v_1) = f(1, 1) = (3, 3) = 3v_1 + 0v_2$ e $f(v_2) = f(1, -1) = (1, -1) = 0v_1 + 1v_2$. Le coordinate $(3, 0)$ e $(0, 1)$ sono le colonne trovate. Nella base $\mathcal B$, $f$ allunga di 3 la direzione $(1, 1)$ e lascia ferma la direzione $(1, -1)$.
:::

::: esercizio base Cambiamento di base in $\R^3$ (foglio 3 del tutorato, esercizio 1)
Siano $v_1 = (1, 0, 2)$, $v_2 = (2, 0, 1)$, $v_3 = (0, 1, 1)$. Verifica che $\mathcal B = \{v_1, v_2, v_3\}$ è una base di $\R^3$ e trova la matrice di cambiamento di base da $\mathcal B$ alla base canonica $\mathcal E$ e viceversa.
::: soluzione
$M = [\id]^{\mathcal B}_{\mathcal E} = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \\ 2 & 1 & 1 \end{pmatrix}$ (i vettori in colonna). Sviluppando lungo la seconda riga, che ha un solo elemento non nullo (posto $(2, 3)$, segno $(-1)^{2+3} = -1$):
$$\det M = -1 \cdot \det\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} = -(1 - 4) = 3 \neq 0,$$
quindi i tre vettori sono indipendenti e, essendo tre in $\R^3$, formano una base (Teorema 7.12).

L'inversa, $[\id]^{\mathcal E}_{\mathcal B}$, con i cofattori (o con Gauss–Jordan):
$$M^{-1} = \frac 13 \begin{pmatrix} -1 & -2 & 2 \\ 2 & 1 & -1 \\ 0 & 3 & 0 \end{pmatrix}.$$
Controllo su una colonna: la prima colonna di $M^{-1}$ deve dare le coordinate di $e_1$: $-\frac 13 v_1 + \frac 23 v_2 + 0 v_3 = \left(-\frac 13 + \frac 43,\ 0,\ -\frac 23 + \frac 23\right) = (1, 0, 0)$.
:::

::: esercizio medio Polinomi centrati in 1 (foglio 3 del tutorato, esercizio 2)
In $\R_3[x]$ calcola la matrice del cambio di base da $\mathcal B = \{1,\ x - 1,\ (x - 1)^2,\ (x - 1)^3\}$ alla base canonica $\mathcal C = \{1, x, x^2, x^3\}$, e viceversa.
::: soluzione
**Da $\mathcal B$ a $\mathcal C$**: sviluppo ogni polinomio di $\mathcal B$ e leggo i coefficienti (termine noto, $x$, $x^2$, $x^3$):
- $1 \to (1, 0, 0, 0)$;
- $x - 1 \to (-1, 1, 0, 0)$;
- $(x - 1)^2 = 1 - 2x + x^2 \to (1, -2, 1, 0)$;
- $(x - 1)^3 = -1 + 3x - 3x^2 + x^3 \to (-1, 3, -3, 1)$.

$$[\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & -1 & 1 & -1 \\ 0 & 1 & -2 & 3 \\ 0 & 0 & 1 & -3 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

**Da $\mathcal C$ a $\mathcal B$**: invece di invertire, scrivo $x = (x - 1) + 1$ e sviluppo le potenze con il binomio:
- $1 = 1 \to (1, 0, 0, 0)$;
- $x = 1 + (x - 1) \to (1, 1, 0, 0)$;
- $x^2 = \big(1 + (x - 1)\big)^2 = 1 + 2(x - 1) + (x - 1)^2 \to (1, 2, 1, 0)$;
- $x^3 = 1 + 3(x - 1) + 3(x - 1)^2 + (x - 1)^3 \to (1, 3, 3, 1)$.

$$[\id]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$
Nelle colonne compaiono i coefficienti binomiali (il triangolo di Tartaglia). Controllo: il prodotto delle due matrici è $I_4$.
:::

::: esercizio base Composizioni nei due ordini
Siano $f : \R^2 \to \R^3$, $f(x, y) = (x,\ x + y,\ 2y)$, e $g : \R^3 \to \R^2$, $g(a, b, c) = (a + c,\ b - c)$. Calcola le matrici di $g \circ f$ e di $f \circ g$ nelle basi canoniche, e controlla il risultato con le formule.
::: soluzione
$[f] = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 2 \end{pmatrix}$ ($3 \times 2$), $[g] = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix}$ ($2 \times 3$).

$$[g \circ f] = [g][f] = \begin{pmatrix} 1 + 0 + 0 & 0 + 0 + 2 \\ 0 + 1 + 0 & 0 + 1 - 2 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}.$$
Controllo: $g(f(x, y)) = g(x,\ x + y,\ 2y) = (x + 2y,\ x + y - 2y) = (x + 2y,\ x - y)$.

$$[f \circ g] = [f][g] = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 2 & -2 \end{pmatrix}.$$
Controllo: $f(g(a, b, c)) = f(a + c,\ b - c) = (a + c,\ a + b,\ 2b - 2c)$.

Osserva che $f \circ g : \R^3 \to \R^3$ passa per $\R^2$, quindi la sua immagine ha dimensione al massimo 2: infatti $\det [f \circ g] = 1 \cdot (-2 - 0) - 0 + 1 \cdot (2 - 0) = 0$ e il rango è 2.
:::

::: esercizio medio Un isomorfismo e la sua inversa con le matrici
Sia $f : \R_2[x] \to \R^3$, $f(p) = (p(-1),\ p(0),\ p(1))$. (a) Scrivi $[f]$ rispetto a $\{1, x, x^2\}$ e alla base canonica e mostra che $f$ è un isomorfismo. (b) Usa il Corollario 16.7 per scrivere $f^{-1}(a, b, c)$. (c) Qual è il polinomio di grado al massimo 2 che vale $1$ in $-1$, $0$ in $0$ e $3$ in $1$?
::: soluzione
(a) $f(1) = (1, 1, 1)$, $f(x) = (-1, 0, 1)$, $f(x^2) = (1, 0, 1)$:
$$[f] = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 0 & 0 \\ 1 & 1 & 1 \end{pmatrix}.$$
Sviluppando lungo la seconda riga (un solo elemento non nullo, posto $(2, 1)$, segno $-1$): $\det [f] = -1 \cdot \det\begin{pmatrix} -1 & 1 \\ 1 & 1 \end{pmatrix} = -(-1 - 1) = 2 \neq 0$. Quindi $[f]$ è invertibile e $f$ è un isomorfismo.

(b) $[f^{-1}] = [f]^{-1} = \frac 12 \begin{pmatrix} 0 & 2 & 0 \\ -1 & 0 & 1 \\ 1 & -2 & 1 \end{pmatrix}$ (controllo: $[f]\,[f]^{-1} = I_3$). Le coordinate di $f^{-1}(a, b, c)$ sono $\left(b,\ \frac{c - a}{2},\ \frac{a - 2b + c}{2}\right)$, quindi
$$f^{-1}(a, b, c) = b + \frac{c - a}{2}\,x + \frac{a - 2b + c}{2}\,x^2.$$
Controllo: in $0$ vale $b$; in $1$ vale $b + \frac{c - a}{2} + \frac{a - 2b + c}{2} = b + \frac{2c - 2b}{2} = c$; in $-1$ vale $b - \frac{c - a}{2} + \frac{a - 2b + c}{2} = b + \frac{2a - 2b}{2} = a$.

(c) $a = 1$, $b = 0$, $c = 3$: $p = 0 + \frac{3 - 1}{2}x + \frac{1 - 0 + 3}{2}x^2 = x + 2x^2$. Controllo: $p(-1) = -1 + 2 = 1$, $p(0) = 0$, $p(1) = 3$.
:::

::: esercizio medio Simili oppure no
(a) Mostra che $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ sono simili, trovando $M$. (b) Mostra che $A$ e $C = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix}$ non sono simili. (c) $A$ e $D = \begin{pmatrix} 4 & 2 \\ 3 & 1 \end{pmatrix}$ possono essere simili?
::: soluzione
(a) Pensa ad $A$ come $[L_A]$ nella base $\{e_1, e_2\}$ e prova la base in ordine inverso, $\{e_2, e_1\}$: $M = [\id]^{\{e_2, e_1\}}_{\{e_1, e_2\}} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, con $M^{-1} = M$ (scambiare due volte non cambia niente). Allora
$$M^{-1}AM = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix} = B.$$
Moltiplicare a sinistra per $M$ scambia le righe, a destra scambia le colonne.

(b) $\det A = 4 - 6 = -2$ e $\det C = 5 - 6 = -1$: determinanti diversi, quindi non simili (Proposizione 16.13).

(c) Qui gli invarianti visti finora non aiutano: $\det D = 4 - 6 = -2 = \det A$, il rango è 2 per entrambe e anche la traccia è la stessa ($\tr A = 1 + 4 = 5$, $\tr D = 4 + 1 = 5$). Quindi possono essere simili, ma queste uguaglianze da sole non lo dimostrano. Nella lezione L17 vedrai che hanno lo stesso polinomio caratteristico $\lambda^2 - 5\lambda - 2$, con due radici reali distinte; nella lezione L18, che per questo sono entrambe simili alla stessa matrice diagonale, e quindi (per la transitività) simili fra loro.
:::

::: esercizio medio Una matrice con basi diverse in partenza e in arrivo (foglio 3 del tutorato, esercizio 3)
Sia $T : \R^3 \to \R^3$, $T(x_1, x_2, x_3) = (3x_1 + x_2,\ x_1 + x_3,\ x_2 - x_3)$. Siano $\mathcal A$ la base canonica, $\mathcal B = \{(1, -1, 1), (0, 3, 1), (0, 2, 1)\}$ e $\mathcal C = \{(1, 2, 3), (0, 2, 1), (0, 1, 1)\}$. Trova $[T]^{\mathcal A}_{\mathcal A}$ e $[T]^{\mathcal B}_{\mathcal C}$.
::: soluzione
$[T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 3 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix}$ dai coefficienti.

Per il Corollario 16.8: $[T]^{\mathcal B}_{\mathcal C} = [\id]^{\mathcal A}_{\mathcal C}\,[T]^{\mathcal A}_{\mathcal A}\,[\id]^{\mathcal B}_{\mathcal A}$. La base $\mathcal C$ è quella dell'Esercizio 16.3, quindi $[\id]^{\mathcal A}_{\mathcal C} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}$ è già calcolata. Invece di moltiplicare tre matrici, conviene calcolare le immagini dei vettori di $\mathcal B$ e poi le loro coordinate rispetto a $\mathcal C$ con quella matrice:
- $T(1, -1, 1) = (3 - 1,\ 1 + 1,\ -1 - 1) = (2, 2, -2)$, coordinate $[\id]^{\mathcal A}_{\mathcal C}(2, 2, -2) = (2,\ 2 + 2 + 2,\ -8 - 2 - 4) = (2, 6, -14)$;
- $T(0, 3, 1) = (3, 1, 2)$, coordinate $(3,\ 3 + 1 - 2,\ -12 - 1 + 4) = (3, 2, -9)$;
- $T(0, 2, 1) = (2, 1, 1)$, coordinate $(2,\ 2 + 1 - 1,\ -8 - 1 + 2) = (2, 2, -7)$.

$$[T]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 2 & 3 & 2 \\ 6 & 2 & 2 \\ -14 & -9 & -7 \end{pmatrix}.$$
Controllo sulla prima colonna: $2(1, 2, 3) + 6(0, 2, 1) - 14(0, 1, 1) = (2,\ 4 + 12 - 14,\ 6 + 6 - 14) = (2, 2, -2)$.
:::

::: esercizio difficile Similitudine: equivalenza e traccia
(a) Dimostra la Proposizione 16.12 (la similitudine è una relazione di equivalenza). (b) Dimostra che matrici simili hanno la stessa traccia. (c) Trova due matrici $2 \times 2$ con la stessa traccia e lo stesso determinante che non sono simili.
::: soluzione
(a) Riflessiva con $M = I_n$; simmetrica: da $A = M^{-1}BM$ segue $B = MAM^{-1} = (M^{-1})^{-1}A(M^{-1})$; transitiva: da $A = M^{-1}BM$ e $B = N^{-1}CN$ segue $A = (NM)^{-1}C(NM)$. I dettagli sono nel riquadro della dimostrazione, nella sezione sulle matrici simili.

(b) Con $\tr(XY) = \tr(YX)$ (Proposizione 8.13), $X = M^{-1}$ e $Y = BM$: $\tr(M^{-1}BM) = \tr(BMM^{-1}) = \tr B$.

(c) $I_2$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: traccia 2 e determinante 1 per entrambe, ma $I_2$ è simile solo a se stessa.
:::

::: esercizio esame Come all'esame: due basi e un endomorfismo di $\R^3$
Sia $\mathcal A$ la base canonica di $\R^3$ e sia $\mathcal B = \{v_1, v_2, v_3\}$ con $v_1 = (1, 0, 1)$, $v_2 = (0, 1, 1)$, $v_3 = (1, 1, 1)$. Sia $T : \R^3 \to \R^3$, $T(a, b, c) = (2a + 2b - c,\ a + 3b - c,\ 2b + c)$.
(1) Determina $[\id]^{\mathcal B}_{\mathcal A}$ e $[\id]^{\mathcal A}_{\mathcal B}$.
(2) Scrivi $[T]^{\mathcal A}_{\mathcal A}$.
(3) Calcola $[T]^{\mathcal B}_{\mathcal B}$ con la formula del cambiamento di base.
(4) Controlla il risultato calcolando $T(v_1)$, $T(v_2)$, $T(v_3)$, e verifica che $\det [T]^{\mathcal A}_{\mathcal A} = \det [T]^{\mathcal B}_{\mathcal B}$.
::: soluzione
(1) $M = [\id]^{\mathcal B}_{\mathcal A} = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$. Determinante lungo la prima riga: $1 \cdot (1 - 1) - 0 + 1 \cdot (0 - 1) = -1$. L'inversa (cofattori, divisi per $-1$):
$$[\id]^{\mathcal A}_{\mathcal B} = M^{-1} = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \\ 1 & 1 & -1 \end{pmatrix}.$$
Controllo: la prima riga di $M$ per le colonne di $M^{-1}$ dà $(0 + 0 + 1,\ -1 + 0 + 1,\ 1 + 0 - 1) = (1, 0, 0)$, e così via.

(2) $A = [T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 2 & 2 & -1 \\ 1 & 3 & -1 \\ 0 & 2 & 1 \end{pmatrix}$.

(3) Prima $AM$: colonna per colonna, $A v_1 = (2 - 1,\ 1 - 1,\ 0 + 1) = (1, 0, 1)$, $A v_2 = (2 - 1,\ 3 - 1,\ 2 + 1) = (1, 2, 3)$, $A v_3 = (2 + 2 - 1,\ 1 + 3 - 1,\ 2 + 1) = (3, 3, 3)$. Poi $M^{-1}$ per ciascuna colonna:
- $M^{-1}(1, 0, 1) = (0 + 0 + 1,\ -1 + 0 + 1,\ 1 + 0 - 1) = (1, 0, 0)$;
- $M^{-1}(1, 2, 3) = (0 - 2 + 3,\ -1 + 0 + 3,\ 1 + 2 - 3) = (1, 2, 0)$;
- $M^{-1}(3, 3, 3) = (0 - 3 + 3,\ -3 + 0 + 3,\ 3 + 3 - 3) = (0, 0, 3)$.

$$[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$

(4) $T(v_1) = (1, 0, 1) = v_1$; $T(v_2) = (1, 2, 3) = v_1 + 2v_2$ (infatti $(1, 0, 1) + (0, 2, 2) = (1, 2, 3)$); $T(v_3) = (3, 3, 3) = 3v_3$. Le coordinate $(1, 0, 0)$, $(1, 2, 0)$, $(0, 0, 3)$ sono le colonne trovate. Determinanti: $\det [T]^{\mathcal B}_{\mathcal B} = 1 \cdot 2 \cdot 3 = 6$ (matrice triangolare) e $\det A = 2(3 + 2) - 2(1 - 0) + (-1)(2 - 0) = 10 - 2 - 2 = 6$. Uguali, come vuole la Proposizione 16.13.
:::

::: esercizio esame Come all'esame: la traslazione dei polinomi
Sia $f : \R_2[x] \to \R_2[x]$, $f(p)(x) = p(x + 1)$ (per esempio $f(x^2) = (x + 1)^2$).
(1) Mostra che $f$ è lineare e scrivi la sua matrice rispetto a $\mathcal B = \{1, x, x^2\}$.
(2) Mostra che $f$ è un isomorfismo e scrivi la matrice di $f^{-1}$; quanto vale $f^{-1}(x^2)$?
(3) Scrivi la matrice di $f \circ f$ e spiega il risultato.
::: soluzione
(1) Linearità: $f(p + q)(x) = (p + q)(x + 1) = p(x + 1) + q(x + 1)$ e $f(\lambda p)(x) = \lambda p(x + 1)$. Immagini della base: $f(1) = 1$, $f(x) = x + 1$, $f(x^2) = x^2 + 2x + 1$, con coordinate $(1, 0, 0)$, $(1, 1, 0)$, $(1, 2, 1)$:
$$[f]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}.$$

(2) La matrice è triangolare con determinante $1 \cdot 1 \cdot 1 = 1 \neq 0$, quindi $f$ è un isomorfismo (Corollario 16.7). L'inversa è la traslazione all'indietro $p(x) \mapsto p(x - 1)$: $1 \mapsto 1$, $x \mapsto x - 1$, $x^2 \mapsto x^2 - 2x + 1$, quindi
$$[f^{-1}]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix},$$
e si controlla che il prodotto con $[f]$ è $I_3$. Allora $[f^{-1}(x^2)] = [f^{-1}](0, 0, 1) = (1, -2, 1)$, cioè $f^{-1}(x^2) = 1 - 2x + x^2 = (x - 1)^2$.

(3) $[f \circ f] = [f]^2 = \begin{pmatrix} 1 & 2 & 4 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}$. Traslare due volte di 1 è traslare di 2: $f(f(p))(x) = p(x + 2)$, e infatti $(x + 2)^2 = 4 + 4x + x^2$ ha coordinate $(4, 4, 1)$, la terza colonna.
:::

## Domande di ripasso

::: domanda Che cos'è la matrice di cambiamento di base da $\mathcal B$ a $\mathcal C$, e com'è fatta?
È $[\id]^{\mathcal B}_{\mathcal C}$, la matrice dell'identità con $\mathcal B$ in partenza e $\mathcal C$ in arrivo. La colonna $j$ contiene le coordinate del $j$-esimo vettore di $\mathcal B$ rispetto a $\mathcal C$.
:::

::: domanda A che cosa serve? Scrivi la formula.
A tradurre le coordinate: $[v]_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$ (Proposizione 16.2). Per la direzione opposta si usa l'inversa, $[\id]^{\mathcal C}_{\mathcal B}$.
:::

::: domanda Come si scrive in fretta $[\id]^{\mathcal B}_{\mathcal C}$ se $\mathcal C$ è la base canonica di $\K^n$?
Mettendo in colonna i vettori di $\mathcal B$, nell'ordine: le coordinate rispetto alla base canonica sono le componenti.
:::

::: domanda Perché la composizione di applicazioni lineari è lineare?
Perché $(g \circ f)(v + v') = g(f(v) + f(v')) = g(f(v)) + g(f(v'))$ e $(g \circ f)(\lambda v) = g(\lambda f(v)) = \lambda g(f(v))$: si usa prima la linearità di $f$, poi quella di $g$.
:::

::: domanda Qual è la matrice di una composizione?
$[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}[f]^{\mathcal B}_{\mathcal C}$ (Proposizione 16.6): la matrice di $f$, che agisce per prima, sta a destra; la base $\mathcal C$ dello spazio in mezzo è la stessa nei due fattori. Per le $L_A$: $L_A \circ L_B = L_{AB}$.
:::

::: domanda Come si riconosce un isomorfismo dalla matrice, e qual è la matrice dell'inversa?
$f$ è un isomorfismo se e solo se $[f]^{\mathcal B}_{\mathcal C}$ è invertibile (quadrata con determinante non nullo), e allora $[f^{-1}]^{\mathcal C}_{\mathcal B} = \big([f]^{\mathcal B}_{\mathcal C}\big)^{-1}$ (Corollario 16.7).
:::

::: domanda Come si passa da $[f]^{\mathcal B_1}_{\mathcal C_1}$ a $[f]^{\mathcal B_2}_{\mathcal C_2}$?
Moltiplicando a sinistra e a destra per matrici di cambiamento di base: $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2}[f]^{\mathcal B_1}_{\mathcal C_1}[\id_V]^{\mathcal B_2}_{\mathcal B_1}$ (Corollario 16.8).
:::

::: domanda Che cos'è un endomorfismo? Come cambia la sua matrice con la base?
Un'applicazione lineare $f : V \to V$. Con la stessa base in partenza e in arrivo, se $M = [\id]^{\mathcal B}_{\mathcal C}$ allora $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$.
:::

::: domanda Quando due matrici si dicono simili, e che cosa significa?
$A \sim B$ se $A = M^{-1}BM$ per qualche $M$ invertibile. Significa che $A$ e $B$ rappresentano lo stesso endomorfismo in due basi diverse.
:::

::: domanda Perché la similitudine è una relazione di equivalenza?
Riflessiva con $M = I_n$; simmetrica perché $A = M^{-1}BM$ dà $B = MAM^{-1}$; transitiva perché $A = M^{-1}BM$ e $B = N^{-1}CN$ danno $A = (NM)^{-1}C(NM)$.
:::

::: domanda Che cosa hanno in comune due matrici simili?
Rango e determinante (Proposizione 16.13), quindi sono entrambe invertibili o entrambe non invertibili. Anche la traccia, e dalla lezione L17 il polinomio caratteristico.
:::

::: domanda Due matrici con lo stesso determinante e lo stesso rango sono simili?
Non necessariamente: $I_2$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ hanno rango 2 e determinante 1, ma $I_2$ è simile solo a se stessa.
:::

## Glossario

```glossario
Matrice di cambiamento di base | $[\id]^{\mathcal B}_{\mathcal C}$: la colonna $j$ è $[v_j]_{\mathcal C}$; trasforma coordinate rispetto a $\mathcal B$ in coordinate rispetto a $\mathcal C$ (Definizione 16.1).
Cambiamento di base inverso | $[\id]^{\mathcal C}_{\mathcal B} = \big([\id]^{\mathcal B}_{\mathcal C}\big)^{-1}$.
Composizione | $g \circ f$: prima $f$, poi $g$; è lineare se lo sono $f$ e $g$ (Proposizione 16.4).
Matrice della composizione | $[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}[f]^{\mathcal B}_{\mathcal C}$; per le $L_A$, $L_A \circ L_B = L_{AB}$.
Associatività | $A(BC) = (AB)C$: è il motivo per cui $L_A(L_B(x)) = L_{AB}(x)$.
Isomorfismo e matrice invertibile | $f$ è un isomorfismo se e solo se $[f]^{\mathcal B}_{\mathcal C}$ è invertibile; allora $[f^{-1}]^{\mathcal C}_{\mathcal B} = [f]^{-1}$ (Corollario 16.7).
Formula del cambiamento di base | $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2}[f]^{\mathcal B_1}_{\mathcal C_1}[\id_V]^{\mathcal B_2}_{\mathcal B_1}$ (Corollario 16.8).
Endomorfismo | Applicazione lineare da uno spazio in se stesso, $f : V \to V$ (Definizione 16.9).
Matrice di un endomorfismo | $[f]^{\mathcal B}_{\mathcal B}$, con la stessa base in partenza e in arrivo.
Matrici simili (coniugate) | $A \sim B$ se $A = M^{-1}BM$ con $M$ invertibile (Definizione 16.11).
Relazione di equivalenza | Relazione riflessiva, simmetrica e transitiva; la similitudine lo è (Proposizione 16.12).
Invarianti per similitudine | Quantità uguali per matrici simili: rango, determinante, traccia (e il polinomio caratteristico, lezione L17).
Teorema di Binet | $\det(AB) = \det A \det B$ (lezione L10); dà $\det(M^{-1}BM) = \det B$.
Inversa di una $2 \times 2$ | $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ se $ad - bc \neq 0$.
```

## Checklist

```checklist
- So scrivere la matrice di cambiamento di base $[\id]^{\mathcal B}_{\mathcal C}$ e so in quale direzione trasforma le coordinate.
- So scrivere in un attimo $[\id]^{\mathcal B}_{\mathcal E}$ quando $\mathcal E$ è la base canonica, e so ottenere $[\id]^{\mathcal E}_{\mathcal B}$ con l'inversa.
- So passare da una base non canonica a un'altra, risolvendo sistemi oppure passando dalla base canonica.
- So spiegare perché la composizione di applicazioni lineari è lineare e perché $L_A \circ L_B = L_{AB}$.
- So calcolare la matrice di una composizione con $[g \circ f] = [g][f]$, nell'ordine giusto e con le taglie giuste.
- So riconoscere un isomorfismo dalla matrice e scrivere la matrice dell'inversa.
- So usare la formula $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id]^{\mathcal C_1}_{\mathcal C_2}[f]^{\mathcal B_1}_{\mathcal C_1}[\id]^{\mathcal B_2}_{\mathcal B_1}$.
- So calcolare $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$ per un endomorfismo e controllare il risultato con $f(v_j)$.
- So la definizione di matrici simili e perché la similitudine è una relazione di equivalenza.
- So che matrici simili hanno stesso rango, determinante e traccia, e che il viceversa è falso.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 16 «Applicazioni lineari III», pp. 79–84: le sezioni 16.A (matrice di cambiamento di base), 16.B (composizione), 16.C (endomorfismi e similitudine) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizioni 16.1, 16.9, 16.11; Proposizioni 16.2, 16.4–16.6, 16.12, 16.13; Corollari 16.7 e 16.8; Esempio 16.10); l'Esercizio 16.3, risolto nel testo delle dispense, è riportato come esempio, e l'Esercizio 16.14 della sezione 16.D è svolto negli esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §4.2.4 (composizione), §4.3.3 e §4.3.5 (proprietà della matrice associata, cambiamento di base, Esempi 4.3.14–4.3.15), §4.4.1–4.4.3 (endomorfismi e similitudine, con la dimostrazione della Proposizione 16.12 e l'Esempio 4.4.2 della riflessione), §4.4.5 (traccia).
- **Esame**: appelli del 24/01/2024 (domanda 3), 08/02/2024 (domanda 5), 10/06/2024 (domanda 8), 10/07/2024 (problema 11), 06/09/2024 (domanda 5), 16/01/2025 (domanda 5), 03/06/2025 (domanda 5), 10/07/2025 (domanda 6), 02/09/2025 (domanda 8), 15/01/2026 (domande 8 e 10), 03/07/2026 (domanda 5), 07/09/2026 (problema 11); foglio 3 del tutorato 2025/26 (esercizi 1, 2, 3 e 5). Testi e soluzioni ufficiali sul Moodle 2025/26 ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); le soluzioni riportate qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (la dimostrazione della Proposizione 16.4, quella della 16.12 dal libro, la traccia come invariante, gli esempi e gli esercizi aggiunti) servono a collegare la lezione al resto del corso e all'esame.
