---
corso: MDAG
modulo: AG
lezione: L20
titolo: Prodotti scalari II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L20
descrizione: >-
  Appunti della lezione L20 di Algebra lineare e Geometria (MDAG, parte 2): come cambia la matrice di un prodotto
  scalare cambiando base, forme quadratiche, norma, disuguaglianza di Cauchy–Schwarz e triangolare, distanze e angoli
  tra vettori, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Il prodotto scalare della lezione L19 diventa geometria. Vedrai come cambia la sua matrice quando cambi base
  (${}^tMSM$), che cosa sono le forme quadratiche, e soprattutto come si misurano lunghezze
  $\|v\| = \sqrt{\langle v, v\rangle}$, distanze e angoli, grazie alla disuguaglianza di Cauchy–Schwarz. Con lo stesso
  metodo misurerai anche polinomi e vettori con prodotti scalari diversi da quello euclideo.
materiale: dispense
scheda:
  Dispense: lezione 20 · pp. 100–104
  Libro: Martelli, §7.1.5, §7.2.2 e §8.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 20 «Prodotti scalari II»; B. Martelli, Geometria e algebra
  lineare, §7.1.5, §7.2.2, §8.1.1–8.1.4
file_en: L20_scalar_products_2.html
appunti_html: appunti/MDAG/L20_prodotti_scalari_2.html
genera_html: true
---

## In breve

- Lo stesso prodotto scalare ha matrici diverse in basi diverse. Se $M = [\id]^{\mathcal B'}_{\mathcal B}$ è la matrice di cambiamento di base, allora $S' = {}^tM\,S\,M$: con la **trasposta**, non con l'inversa come per gli endomorfismi.
- Una **forma quadratica** è un polinomio omogeneo di grado 2, come $x_1^2 - 6x_1x_2$. Ogni forma quadratica è $q_S(x) = {}^tx\,S\,x$ per un'unica matrice simmetrica $S$: sulla diagonale i coefficienti dei quadrati, fuori diagonale **metà** del coefficiente di $x_ix_j$.
- $g_S$ è definito positivo se e solo se $q_S(x) > 0$ per ogni $x \neq 0$. Per il resto della lezione, e nelle lezioni L21–L22, il prodotto scalare è sempre **definito positivo**.
- La **norma** $\|v\| = \sqrt{\langle v, v\rangle}$ è la lunghezza di $v$. Nel prodotto euclideo è il teorema di Pitagora: $\|(3, 4)\| = 5$.
- Quattro proprietà: $\|v\| > 0$ se $v \neq 0$; $\|\lambda v\| = |\lambda|\,\|v\|$; **Cauchy–Schwarz** $|\langle v, w\rangle| \le \|v\|\,\|w\|$; **disuguaglianza triangolare** $\|v + w\| \le \|v\| + \|w\|$.
- La **distanza** tra due punti è $d(P, Q) = \|Q - P\|$; è positiva, simmetrica e rispetta la disuguaglianza triangolare.
- L'**angolo** tra due vettori non nulli è il $\vartheta \in [0, \pi]$ con $\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}$. Il segno di $\langle v, w\rangle$ dice se è acuto, retto o ottuso.
- All'esame: norme e angoli con un $g_S$ dato (quiz e primo punto dei problemi), matrice di una forma quadratica, cambiamento di base. Tutto senza calcolatrice: servono i coseni degli angoli notevoli.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Cambiamento di base (p. 100)

Nella lezione L19 hai visto due matrici per lo **stesso** prodotto scalare, quello euclideo di $\R^2$: nella base canonica è $I_2$, nella base $\mathcal B = \{(1, 0), (1, 1)\}$ è $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ (Esempio 19.14). Che legame c'è tra le due? Serve una formula, come quella della lezione L16 per gli endomorfismi.

**Il ricordo della lezione L16.** Se $\mathcal B = \{v_1, \dots, v_n\}$ e $\mathcal B' = \{v_1', \dots, v_n'\}$ sono due basi di $V$, la **matrice di cambiamento di base** da $\mathcal B'$ a $\mathcal B$ è

$$M = [\id]^{\mathcal B'}_{\mathcal B}.$$

La sua colonna $i$-esima, che le dispense indicano con $M^i$, contiene le **coordinate del vettore nuovo $v_i'$ nella base vecchia** $\mathcal B$: $M^i = [v_i']_{\mathcal B}$.

**Il conto.** Siano $S = [g]_{\mathcal B}$ e $S' = [g]_{\mathcal B'}$ le matrici dello stesso prodotto scalare $g$ nelle due basi. Per definizione e per il Corollario 19.16 (calcolo in coordinate nella base $\mathcal B$):

$$S'_{ij} = g(v_i', v_j') = {}^t[v_i']_{\mathcal B}\,S\,[v_j']_{\mathcal B} = {}^t(M^i)\,S\,M^j.$$

A destra c'è la riga ${}^t(M^i)$, cioè la riga $i$ della matrice ${}^tM$, per $S$, per la colonna $j$ di $M$: è esattamente l'entrata $(i, j)$ del prodotto ${}^tM\,S\,M$.

> [!PROP] 20.1
> Vale
> $$S' = {}^tM\,S\,M.$$

> [!ESEMPIO] 20.2 · Il prodotto euclideo nella base $\{(1, 0), (1, 1)\}$
> Per il prodotto scalare euclideo di $\R^2$, rispetto alla base $\mathcal B = \{(1, 0), (1, 1)\}$ abbiamo già trovato $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. Qui la base «vecchia» è quella canonica $\mathcal C$, dove la matrice è $I_2$. La matrice di cambiamento di base è
> $$M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$$
> (colonne: i vettori di $\mathcal B$ scritti nella base canonica), e infatti
> $$\begin{aligned} {}^tM\,I_2\,M &= \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \\ &= \begin{pmatrix} 1 \cdot 1 + 0 \cdot 0 & 1 \cdot 1 + 0 \cdot 1 \\ 1 \cdot 1 + 1 \cdot 0 & 1 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}. \end{aligned}$$

Nelle dispense, in questo esempio, la matrice nella nuova base si chiama $S$ e quella vecchia è $I_2$: i nomi cambiano, la regola no. **Vecchia** matrice in mezzo, $M$ a destra, ${}^tM$ a sinistra.

> [!ESEMPIO] Una base in cui $g_S$ diventa l'identità
> Prendi $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ (Esempio 19.11) e la nuova base $\mathcal B' = \{(1, -1), (0, 1)\}$. La base vecchia è quella canonica, quindi $M = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$. Un prodotto alla volta:
> $$SM = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix},$$
> $${}^tM(SM) = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$
> È lo stesso risultato che nella lezione L19 (esercizio 5) si otteneva entrata per entrata: nella base $\mathcal B'$ il prodotto $g_S$ ha matrice $I_2$.

> [!TRAPPOLA] Trasposta per i prodotti scalari, inversa per gli endomorfismi
> Con la stessa $M = [\id]^{\mathcal B'}_{\mathcal B}$:
> - un **endomorfismo** cambia come $A' = M^{-1}A\,M$ (lezione L16);
> - un **prodotto scalare** cambia come $S' = {}^tM\,S\,M$.
>
> Le due formule danno risultati diversi. Con $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e $I_2$: come endomorfismo (l'identità) resta $M^{-1}I_2M = I_2$; come prodotto scalare diventa ${}^tMI_2M = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. Le due formule danno lo stesso risultato per ogni matrice quando ${}^tM = M^{-1}$: sono le matrici ortogonali della lezione L22.

> [!METODO] Due modi per trovare $[g]_{\mathcal B'}$
> 1. **Entrata per entrata** (lezione L19): $S'_{ij} = g(v_i', v_j')$. Comodo se $n = 2$ o se $g$ è dato con una formula.
> 2. **Con la formula** $S' = {}^tM\,S\,M$: metti nelle colonne di $M$ le coordinate dei vettori nuovi nella base in cui conosci $S$; calcola prima $SM$, poi ${}^tM(SM)$.
>
> In entrambi i casi controlla alla fine che $S'$ sia **simmetrica**: se non lo è, c'è un errore di conto.

> [!OLTRE] Il segno del determinante non cambia
> Per il Teorema di Binet (Teorema 10.4) e $\det({}^tM) = \det M$:
> $$\det S' = \det({}^tM)\det S\det M = (\det M)^2\det S.$$
> Siccome $M$ è invertibile, $(\det M)^2 > 0$: $\det S'$ ha **lo stesso segno** di $\det S$. In particolare $S'$ è degenere se e solo se lo è $S$ (è lo stesso prodotto scalare). È un buon controllo veloce all'esame. Martelli chiama **congruenti** due matrici simmetriche legate da $S' = {}^tM\,S\,M$ con $M$ invertibile (§7.2.3).

## Forme quadratiche (pp. 100–102)

Se in un prodotto scalare metti lo **stesso** vettore nei due posti, ottieni un polinomio di secondo grado nelle coordinate. Per esempio con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$:

$$\begin{aligned} g_S(x, x) &= 2x_1x_1 + x_1x_2 + x_2x_1 + x_2x_2 \\ &= 2x_1^2 + 2x_1x_2 + x_2^2. \end{aligned}$$

I due termini misti $x_1x_2$ e $x_2x_1$ ora sono **lo stesso monomio** e si sommano. Questi polinomi hanno un nome.

**Polinomi omogenei.** Un polinomio nelle variabili $x_1, \dots, x_n$ è **omogeneo** se tutti i suoi monomi hanno lo stesso grado. Gli esempi delle dispense:

| Polinomio | Monomi e gradi | Omogeneo di grado |
|---|---|--:|
| $x_1 + x_2 - 3x_3$ | tre monomi di grado 1 | 1 |
| $2x_1x_2 - x_3^2 + x_1x_3$ | tre monomi di grado 2 | 2 |
| $x_1^3 - x_2x_3^2$ | due monomi di grado 3 | 3 |

Invece $x_1^2 + x_2$ non è omogeneo (un monomio di grado 2 e uno di grado 1), e nemmeno $x_1x_2 + 1$ (la costante ha grado 0).

> [!DEF] 20.3 · Forma quadratica
> Una **forma quadratica** è un polinomio omogeneo di grado 2 nelle variabili $x_1, \dots, x_n$.

In pratica una forma quadratica è una somma di termini del tipo (numero) $\cdot\, x_i^2$ e (numero) $\cdot\, x_ix_j$, senza termini di grado 1 né costanti.

> [!PROP] 20.4
> Ogni forma quadratica si scrive in modo unico come
> $$q(x) = g_S(x, x) = \sum_{i,j=1}^n x_iS_{ij}x_j$$
> per un'opportuna matrice simmetrica $S$.

La dimostrazione delle dispense, con i passaggi spiegati.

1. Una forma quadratica si scrive $q(x) = \sum_{1 \le i \le j \le n} a_{ij}x_ix_j$. La condizione $i \le j$ serve a non contare due volte lo stesso monomio: $x_1x_2$ e $x_2x_1$ sono lo stesso, e compare una sola volta, con coefficiente $a_{12}$.
2. Definisci $S_{ii} = a_{ii}$ sulla diagonale e $S_{ij} = S_{ji} = \frac12 a_{ij}$ per $i < j$: il coefficiente del monomio misto si **divide a metà** tra le due caselle simmetriche.
3. Nella somma $\sum_{i,j} S_{ij}x_ix_j$ il monomio $x_ix_j$ con $i < j$ compare due volte, come $S_{ij}x_ix_j$ e come $S_{ji}x_jx_i$: in totale $\frac12 a_{ij} + \frac12 a_{ij} = a_{ij}$, il coefficiente giusto. I quadrati compaiono una volta sola, con $S_{ii} = a_{ii}$. Quindi $\sum_{i,j} S_{ij}x_ix_j = q(x)$.
4. La costruzione determina $S$ in modo unico: una matrice **simmetrica** con $g_S(x, x) = q(x)$ deve avere sulla diagonale i coefficienti dei quadrati, e in ogni coppia di caselle $(i, j)$, $(j, i)$ due numeri uguali con somma $a_{ij}$, quindi entrambi $\frac12 a_{ij}$. $\square$

> [!METODO] Dalla forma alla matrice e ritorno
> - **Forma → matrice.** Il coefficiente di $x_i^2$ va al posto $(i, i)$. Il coefficiente di $x_ix_j$ ($i \ne j$) si **divide per 2** e va sia al posto $(i, j)$ sia al posto $(j, i)$. Le variabili che non compaiono danno righe e colonne di zeri.
> - **Matrice → forma.** $q_S(x) = \sum_i S_{ii}x_i^2 + \sum_{i < j} 2S_{ij}\,x_ix_j$: i quadrati con il coefficiente della diagonale, i termini misti con il **doppio** dell'entrata fuori diagonale.

> [!ESEMPIO] 20.5 · Andata e ritorno
> Le matrici simmetriche
> $$\begin{pmatrix} 1 & -3 \\ -3 & 0 \end{pmatrix}, \qquad \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \qquad \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$$
> definiscono rispettivamente le forme quadratiche
> $$x_1^2 - 6x_1x_2, \quad x_1^2 + x_2^2 - x_3^2, \quad 2x_1x_2 + 2x_2x_3 + 2x_3x_1.$$
> Viceversa, $q(x) = x_1^2 + 4x_1x_2 - x_2^2 + 4x_3^2$ è descritta dalla matrice
> $$S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & -1 & 0 \\ 0 & 0 & 4 \end{pmatrix}.$$

Controlla i passaggi. Nella prima matrice $S_{12} = -3$, quindi il termine misto è $2 \cdot (-3)\,x_1x_2 = -6x_1x_2$; $S_{22} = 0$, quindi $x_2^2$ non compare. Nella terza ogni entrata fuori diagonale vale 1 e dà $2x_ix_j$. Nell'ultima il coefficiente 4 di $x_1x_2$ si divide in $2 + 2$ ai posti $(1, 2)$ e $(2, 1)$, mentre $4x_3^2$ va sulla diagonale **intero**; $x_3$ non compare in termini misti, quindi riga e colonna 3 hanno zeri fuori diagonale.

> [!TRAPPOLA] Metà sì, metà no
> Si divide per due **solo il coefficiente dei termini misti**, e solo per le **forme quadratiche**. Nella formula di un prodotto scalare $g(x, y)$ i termini $x_1y_2$ e $x_2y_1$ sono diversi e vanno in matrice senza dimezzare (lezione L19). Nell'appello dell'08/02/2024 (domanda 7) tra le risposte sbagliate c'erano proprio le matrici con il coefficiente misto non dimezzato.

**La forma di una matrice e la definita positività.** Le dispense indicano con

$$q_S(x) = g_S(x, x)$$

la forma quadratica definita dalla matrice simmetrica $S$. Per definizione di prodotto definito positivo (Definizione 19.2), con $v = x$:

$$g_S \text{ definito positivo} \iff q_S(x) > 0 \quad \forall\, x \neq 0.$$

Quindi per decidere se $g_S$ è definito positivo basta studiare il **segno** di un polinomio di secondo grado.

> [!OLTRE] Completare i quadrati, e tornare dalla forma al prodotto
> **Completare i quadrati.** Per vedere che una forma è positiva si riscrive come somma di quadrati con coefficienti positivi. Per $q = 2x_1^2 + 2x_1x_2 + 2x_2^2$:
> $$q = 2\left(x_1 + \frac{x_2}2\right)^2 + \frac32 x_2^2,$$
> oppure
> $$q = x_1^2 + x_2^2 + (x_1 + x_2)^2.$$
> In entrambe le scritture $q \ge 0$, e $q = 0$ solo se $x_2 = 0$ e $x_1 = 0$. Per le matrici $2 \times 2$ c'è anche il criterio della lezione L19: $\begin{pmatrix} a & b \\ b & c \end{pmatrix}$ è definita positiva se e solo se $a > 0$ e $ac - b^2 > 0$.
>
> **Dalla forma al prodotto (polarizzazione).** La forma quadratica contiene tutta l'informazione sul prodotto scalare. Sviluppando $q(x + y) = g(x + y, x + y) = q(x) + 2g(x, y) + q(y)$ (lezione L19) si ricava
> $$g(x, y) = \frac12\big(q(x + y) - q(x) - q(y)\big).$$

Le dispense lo dicono in modo esplicito: **per il resto della lezione il prodotto scalare è sempre definito positivo**. Serve per le radici quadrate della prossima sezione.

## La norma: la lunghezza di un vettore (pp. 102–103)

Nel piano, il vettore $v = (3, 4)$ è l'ipotenusa di un triangolo rettangolo con cateti 3 e 4. Per il teorema di Pitagora la sua lunghezza è

$$\sqrt{3^2 + 4^2} = \sqrt{25} = 5.$$

Sotto la radice c'è proprio $\langle v, v\rangle = 3 \cdot 3 + 4 \cdot 4$. L'idea della norma è questa: **la lunghezza è la radice del prodotto scalare di un vettore con sé stesso**, qualunque sia il prodotto scalare.

```grafico
titolo: $\|(3, 4)\| = \sqrt{3^2 + 4^2} = 5$: la norma euclidea è il teorema di Pitagora
x: -1 5
y: -1 5
poligono: 0 0 3 0 3 4 | tenue
vettore: 3 4 | accento | spesso | $v = (3, 4)$ | no
segmento: 0 0 3 0 | blu | $3$ | s
segmento: 3 0 3 4 | ambra | $4$ | e
```

> [!DEF] 20.6 · Norma
> Sia $V$ uno spazio vettoriale munito di un prodotto scalare definito positivo. La **norma** di $v \in V$ è
> $$\|v\| = \sqrt{\langle v, v\rangle}.$$

Pezzo per pezzo:

- la norma va interpretata come la **lunghezza** del vettore;
- serve che il prodotto sia **definito positivo**: così $\langle v, v\rangle \ge 0$ e la radice quadrata ha senso in $\R$ (per questo il campo è $\R$);
- il simbolo $\|v\|$ ha due stanghette per non confonderlo con il valore assoluto $|x|$ di un numero;
- la norma **dipende dal prodotto scalare**: lo stesso vettore può avere lunghezze diverse con prodotti diversi.

> [!ESEMPIO] 20.8 · La norma euclidea
> Per il prodotto scalare euclideo su $\R^n$:
> $$\|x\| = \sqrt{x_1^2 + \dots + x_n^2}.$$
> Per esempio $\|(3, 4)\| = 5$, $\|(1, 2, 2)\| = \sqrt{1 + 4 + 4} = 3$, $\|(1, 1, 1, 1)\| = \sqrt 4 = 2$.

> [!ESEMPIO] 20.9 · Una norma diversa
> Consideriamo il prodotto scalare $g_S$ su $\R^2$ definito da $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$. La norma di $x$ è
> $$\|x\| = \sqrt{2x_1^2 + 2x_1x_2 + x_2^2}.$$
> Sotto la radice c'è la forma quadratica $q_S(x)$. Qualche valore:
>
> | $x$ | $q_S(x) = 2x_1^2 + 2x_1x_2 + x_2^2$ | $\|x\|$ con $g_S$ | $\|x\|$ euclidea |
> |---|---|---|---|
> | $(1, 0)$ | $2$ | $\sqrt 2$ | $1$ |
> | $(0, 1)$ | $1$ | $1$ | $1$ |
> | $(1, -1)$ | $2 - 2 + 1 = 1$ | $1$ | $\sqrt 2$ |
> | $(1, 1)$ | $2 + 2 + 1 = 5$ | $\sqrt 5$ | $\sqrt 2$ |

Le proprietà che fanno della norma una buona «lunghezza» sono quattro.

> [!PROP] 20.7
> Per ogni $v, w \in V$ e $\lambda \in \R$ valgono:
> 1. $\|v\| > 0$ se $v \neq 0$ e $\|0\| = 0$,
> 2. $\|\lambda v\| = |\lambda|\,\|v\|$,
> 3. $|\langle v, w\rangle| \le \|v\|\,\|w\|$,
> 4. $\|v + w\| \le \|v\| + \|w\|$.
>
> La (3) è la **disuguaglianza di Cauchy–Schwarz** e la (4) è la **disuguaglianza triangolare**.

Pezzo per pezzo, con i numeri:

- **(1)** solo il vettore nullo ha lunghezza zero. È la definita positività.
- **(2)** moltiplicare un vettore per $\lambda$ moltiplica la lunghezza per $|\lambda|$: $\|-3v\| = 3\|v\|$. Il valore assoluto serve perché le lunghezze non sono mai negative.
- **(3)** il prodotto scalare non supera mai, in valore assoluto, il prodotto delle lunghezze. Con $v = (1, 2)$ e $w = (3, 1)$: $|\langle v, w\rangle| = 5$ e $\|v\|\,\|w\| = \sqrt 5\sqrt{10} = \sqrt{50} \approx 7{,}07$. Con $w = (2, 4) = 2v$ vale l'uguaglianza: $\langle v, w\rangle = 10 = \sqrt 5 \cdot \sqrt{20}$.
- **(4)** in un triangolo un lato non supera la somma degli altri due. Con $v = (3, 0)$ e $w = (0, 4)$: $\|v + w\| = \|(3, 4)\| = 5 \le 3 + 4 = 7$.

**Dimostrazione dei punti (1) e (2).** Il punto (1) viene dalla definita positività: se $v \ne 0$, allora $\langle v, v\rangle > 0$ e la sua radice è positiva; $\langle 0, 0\rangle = 0$. Per il punto (2), con gli assiomi (2) e (5) della lezione L19:

$$\|\lambda v\| = \sqrt{\langle \lambda v, \lambda v\rangle} = \sqrt{\lambda^2\langle v, v\rangle} = \sqrt{\lambda^2}\,\sqrt{\langle v, v\rangle} = |\lambda|\,\|v\|,$$

perché $\sqrt{\lambda^2} = |\lambda|$ (per esempio $\sqrt{(-3)^2} = 3$).

**Dimostrazione di Cauchy–Schwarz.** Se $w = 0$ entrambi i membri valgono 0. Sia allora $w \neq 0$ e chiama $c = \frac{\langle v, w\rangle}{\langle w, w\rangle}$. L'idea: il vettore $v - cw$ è «quello che resta di $v$ dopo avergli tolto la parte nella direzione di $w$» (nella lezione L21 $cw$ si chiamerà **proiezione** di $v$ su $w$). La sua norma al quadrato è $\ge 0$:

1. sviluppa con la bilinearità (come $(a - b)^2$):
   $$0 \le \|v - cw\|^2 = \langle v, v\rangle - 2c\langle v, w\rangle + c^2\langle w, w\rangle;$$
2. sostituisci $c = \frac{\langle v, w\rangle}{\|w\|^2}$:
   $$0 \le \|v\|^2 - 2\,\frac{\langle v, w\rangle^2}{\|w\|^2} + \frac{\langle v, w\rangle^2}{\|w\|^4}\,\|w\|^2 = \|v\|^2 - \frac{\langle v, w\rangle^2}{\|w\|^2};$$
3. moltiplica per $\|w\|^2 > 0$: $\langle v, w\rangle^2 \le \|v\|^2\|w\|^2$;
4. prendi la radice quadrata di entrambi i membri (sono $\ge 0$): $\sqrt{\langle v, w\rangle^2} = |\langle v, w\rangle|$, quindi $|\langle v, w\rangle| \le \|v\|\,\|w\|$. $\square$

**Dimostrazione della disuguaglianza triangolare.** Sviluppa il quadrato (lezione L19) e usa Cauchy–Schwarz:

$$\begin{aligned} \|v + w\|^2 &= \|v\|^2 + \|w\|^2 + 2\langle v, w\rangle \\ &\le \|v\|^2 + \|w\|^2 + 2\|v\|\,\|w\| = \big(\|v\| + \|w\|\big)^2. \end{aligned}$$

Il passaggio con $\le$ usa $\langle v, w\rangle \le |\langle v, w\rangle| \le \|v\|\,\|w\|$. Infine si prende la radice dei due membri, entrambi $\ge 0$. $\square$

> [!OLTRE] Quando vale l'uguaglianza
> In Cauchy–Schwarz vale $=$ esattamente quando $v$ e $w$ sono **paralleli** (uno è multiplo dell'altro): nel passaggio 1 l'uguaglianza vuol dire $\|v - cw\| = 0$, cioè $v = cw$. Nella triangolare vale $=$ quando in più puntano nello **stesso verso** (serve $\langle v, w\rangle = \|v\|\,\|w\|$, non con il segno meno).

**Vettori unitari.** Un vettore di norma 1 si dice **unitario**. Per la proprietà (2), se $v \neq 0$ il vettore $\frac{v}{\|v\|}$ ha norma $\frac{1}{\|v\|}\,\|v\| = 1$: dividere per la norma si dice **normalizzare**. Per esempio $\frac{(3, 4)}{5} = \left(\frac35, \frac45\right)$. Le dispense usano i vettori normalizzati nella prossima sezione e le basi ortonormali nella lezione L21.

## Distanze (p. 103)

Con una lunghezza si misura subito una distanza: la distanza tra due punti è la lunghezza del vettore che va dall'uno all'altro. Se $P, Q \in V$, si pone

$$\overrightarrow{PQ} = Q - P.$$

Il vettore $\overrightarrow{PQ}$ parte da $P$ e arriva in $Q$: si calcola «arrivo meno partenza».

> [!DEF] 20.10 · Distanza
> La **distanza** fra $P$ e $Q$ è
> $$d(P, Q) = \|Q - P\|.$$

Esempi con il prodotto euclideo:

- $P = (1, 2)$, $Q = (4, 6)$: $Q - P = (3, 4)$ e $d(P, Q) = 5$;
- $P = (1, 0, 2)$, $Q = (3, 1, 0)$: $Q - P = (2, 1, -2)$ e $d(P, Q) = \sqrt{4 + 1 + 4} = 3$.

Con un altro prodotto cambiano anche le distanze. Con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ la distanza tra $P = (0, 0)$ e $Q = (1, -1)$ è $\|(1, -1)\|_S = 1$ (tabella dell'Esempio 20.9), mentre quella euclidea è $\sqrt 2$.

> [!PROP] 20.11
> Per ogni $P, Q, R \in V$:
> 1. $d(P, Q) > 0$ se $P \neq Q$ e $d(P, P) = 0$,
> 2. $d(P, Q) = d(Q, P)$,
> 3. $d(P, R) \le d(P, Q) + d(Q, R)$.

La spiegazione, punto per punto:

1. se $P \neq Q$ il vettore $Q - P$ non è nullo, quindi ha norma positiva (Proposizione 20.7, punto 1); $d(P, P) = \|0\| = 0$;
2. $P - Q = (-1)(Q - P)$, quindi $\|P - Q\| = |-1|\,\|Q - P\| = \|Q - P\|$ (punto 2 della norma);
3. si spezza il percorso da $P$ a $R$ passando per $Q$: $R - P = (Q - P) + (R - Q)$. Per la disuguaglianza triangolare della norma
   $$\begin{aligned} d(P, R) &= \|(Q - P) + (R - Q)\| \\ &\le \|Q - P\| + \|R - Q\| = d(P, Q) + d(Q, R). \end{aligned}$$

```grafico
titolo: $d(P, R) = 5 \le d(P, Q) + d(Q, R) = 3 + 4$
x: 0 6
y: 0 6
punto: 1 1 | accento | $P$ | so
punto: 4 1 | accento | $Q$ | se
punto: 4 5 | accento | $R$ | ne
segmento: 1 1 4 1 | blu | $3$ | s
segmento: 4 1 4 5 | ambra | $4$ | e
segmento: 1 1 4 5 | verde | spesso | $5$ | no
```

## Angoli (p. 104)

In fisica si impara la formula $\langle v, w\rangle = \|v\|\,\|w\|\cos\vartheta$, dove $\vartheta$ è l'angolo tra i due vettori. Il corso la **rovescia** e la usa come definizione dell'angolo: il prodotto scalare e le norme si sanno calcolare, e da loro si ricava $\cos\vartheta$.

> [!DEF] 20.12 · Angolo
> Sia $V$ munito di un prodotto scalare definito positivo. L'**angolo** fra due vettori non nulli $v, w \in V$ è il numero $\vartheta \in [0, \pi]$ tale che
> $$\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}.$$

Pezzo per pezzo:

- i vettori devono essere **non nulli**, altrimenti si dividerebbe per zero;
- l'angolo è in **radianti** e sta in $[0, \pi]$, cioè tra 0° e 180°: l'angolo tra due vettori non ha verso e non supera l'angolo piatto;
- **la definizione ha senso grazie a Cauchy–Schwarz**: dividendo $|\langle v, w\rangle| \le \|v\|\,\|w\|$ per $\|v\|\,\|w\| > 0$ si ottiene
  $$-1 \le \frac{\langle v, w\rangle}{\|v\|\,\|w\|} \le 1,$$
  e per ogni numero in $[-1, 1]$ esiste **uno e un solo** $\vartheta \in [0, \pi]$ con quel coseno;
- lo stesso si scrive con l'arcocoseno: $\vartheta = \arccos\frac{\langle v, w\rangle}{\|v\|\,\|w\|}$.

Il segno del prodotto scalare decide il tipo di angolo, perché $\|v\|\,\|w\| > 0$ e il coseno in $[0, \pi]$ è positivo prima di $\frac\pi2$ e negativo dopo:

| $\langle v, w\rangle$ | $\cos\vartheta$ | L'angolo $\vartheta$ è |
|---|---|---|
| $> 0$ | $> 0$ | **acuto**, $0 \le \vartheta < \frac\pi2$ |
| $= 0$ | $= 0$ | **retto**, $\vartheta = \frac\pi2$ |
| $< 0$ | $< 0$ | **ottuso**, $\frac\pi2 < \vartheta \le \pi$ |

**Senza calcolatrice**: all'esame si riconoscono i coseni degli angoli notevoli. Conviene averli sul foglio.

| $\vartheta$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\frac{2\pi}3$ | $\frac{3\pi}4$ | $\frac{5\pi}6$ | $\pi$ |
|---|---|---|---|---|---|---|---|---|---|
| gradi | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
| $\cos\vartheta$ | $1$ | $\frac{\sqrt3}2$ | $\frac{\sqrt2}2$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt2}2$ | $-\frac{\sqrt3}2$ | $-1$ |

> [!ESEMPIO] Quattro angoli con il prodotto euclideo
> 1. $v = (1, 0)$, $w = (1, 1)$: $\langle v, w\rangle = 1$, $\|v\| = 1$, $\|w\| = \sqrt 2$, quindi $\cos\vartheta = \frac1{\sqrt2} = \frac{\sqrt2}2$ e $\vartheta = \frac\pi4$.
> 2. $v = (1, 2)$, $w = (-2, 1)$: $\langle v, w\rangle = -2 + 2 = 0$, quindi $\vartheta = \frac\pi2$.
> 3. $v = (1, 0)$, $w = (-1, \sqrt3)$: $\langle v, w\rangle = -1$, $\|w\| = \sqrt{1 + 3} = 2$, quindi $\cos\vartheta = -\frac12$ e $\vartheta = \frac{2\pi}3$.
> 4. $v = (1, 1, 1)$, $w = (1, 2, 3)$: $\langle v, w\rangle = 6$, $\|v\| = \sqrt3$, $\|w\| = \sqrt{14}$, quindi $\cos\vartheta = \frac6{\sqrt{42}}$ e $\vartheta = \arccos\frac{6}{\sqrt{42}}$, che non è un angolo notevole. È la domanda 10 dell'appello del 07/09/2026.

```grafico
titolo: $v = (1, 0)$ e $w = (-1, \sqrt 3)$: $\cos\vartheta = -\frac12$, quindi $\vartheta = \frac{2\pi}{3}$ (ottuso)
x: -2 2
y: -0.5 2
vettore: 1 0 | accento | spesso | $v$ | s
vettore: -1 sqrt(3) | blu | spesso | $w$ | no
arco: 0 0 0.45 0 2pi/3 | ambra | $\vartheta$
```

Prova con lo strumento: trascina $v$ in modo che il prodotto $u \cdot v$ cambi segno, e guarda l'angolo passare da acuto a retto a ottuso. Quando $u \cdot v = 0$ lo strumento scrive che i vettori sono ortogonali. Attenzione: lo strumento scrive l'angolo in **gradi** (90° corrisponde a $\frac\pi2$), mentre all'esame si usano i radianti.

```widget vettori
titolo: Norme, prodotto scalare e angolo
u: 2 1
v: -1 3
modo: scalare
modi: scalare
raggio: 5
```

**Angoli con un prodotto non euclideo.** La definizione vale per **ogni** prodotto definito positivo. Con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, per esempio, $e_1$ ed $e_2$ non sono più perpendicolari: $g_S(e_1, e_2) = 1$, $\|e_1\| = \sqrt2$, $\|e_2\| = 1$, quindi $\cos\vartheta = \frac1{\sqrt2}$ e l'angolo tra $e_1$ ed $e_2$ è $\frac\pi4$ (esercizio 7).

> [!NOTA] Collegamento con l'informatica: similarità coseno
> Le dispense chiudono la lezione con un collegamento. In molte applicazioni (motori di ricerca, sistemi di raccomandazione, riconoscimento di immagini) un oggetto, per esempio una parola, un documento o un'immagine, viene rappresentato da un vettore $x \in \R^n$, spesso chiamato **embedding**. Per confrontare due rappresentazioni $x$ e $y$ si usa la **similarità coseno**
> $$\operatorname{sim}(x, y) = \frac{\langle x, y\rangle}{\|x\|\,\|y\|} = \cos\vartheta.$$
> Dipende dall'angolo e **non dalla lunghezza** dei vettori. Se gli embedding sono normalizzati ($\|x\| = \|y\| = 1$), la similarità coseno è semplicemente il prodotto scalare $\langle x, y\rangle$. Vettori che puntano in direzioni simili hanno similarità vicina a 1.
>
> Un esempio piccolo: tre documenti descritti dal numero di volte in cui compaiono quattro parole, $d_1 = (2, 1, 0, 1)$, $d_2 = (4, 2, 0, 2)$, $d_3 = (0, 1, 3, 0)$. Il secondo è il primo «scritto due volte»: $\operatorname{sim}(d_1, d_2) = 1$, anche se $d_2$ è più lungo. Invece $\operatorname{sim}(d_1, d_3) = \frac{1}{\sqrt6\sqrt{10}} = \frac{\sqrt{15}}{30} \approx 0{,}13$: parlano di cose diverse.

> [!OLTRE] Dove trovarlo nel libro
> Martelli: §7.2.2 «Cambiamento di base» (p. 212) e §7.2.3 sulle matrici congruenti (p. 213); §7.1.5 «Forme quadratiche» (pp. 203–204); capitolo 8, §8.1.1 «Norma» (pp. 240–241), §8.1.2 con le applicazioni di Cauchy–Schwarz e la legge del parallelogramma (pp. 241–242), §8.1.3 «Angoli» (pp. 242–243), §8.1.4 «Distanze» (pp. 243–244). Il libro dimostra Cauchy–Schwarz in modo un po' diverso, con $\|av + bw\|^2 \ge 0$ per $a = \|w\|^2$ e $b = -\langle v, w\rangle$.

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; dura 2 ore, senza calcolatrice, con solo 4 facciate di appunti scritti a mano. Appelli 2026/27: 22/01 e 05/02/2027, alle 14:00. I dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026**

1. **Norma e angolo (quiz).** Appello del 07/09/2026: domanda 5 (norma di ${}^t(1, 1, 1)$ con una $S$ di ordine 3) e domanda 10 (angolo euclideo tra ${}^t(1, 1, 1)$ e ${}^t(1, 2, 3)$). Appello del 03/06/2025, domanda 6 (angolo con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$). Appello dell'08/02/2024, domanda 8 (angolo tra i polinomi $x$ e $x^2$).
2. **Forma quadratica → matrice (quiz).** Appello dell'08/02/2024, domanda 7.
3. **Cambiamento di base (quiz).** Appelli del 10/06/2024 e del 03/06/2026, domanda 4: la matrice di $g_S$ in una base nuova, con ${}^tMSM$ oppure entrata per entrata.
4. **Problemi.** Il punto (1) del problema 12 del 03/07/2026 chiede norme e coseno dell'angolo con un $g_S$ su $\R^3$; il punto (2) del problema 12 del 07/02/2025 chiede norme e angolo di due polinomi; il punto (2) del problema 12 del 05/02/2026 chiede per quali valori di un parametro due vettori sono ortogonali rispetto a $g_S$.

> [!METODO] Norma e angolo con un $g_S$
> 1. Calcola **una volta** i vettori $Sv$ e $Sw$.
> 2. $\|v\|^2 = {}^tv\,(Sv)$, $\|w\|^2 = {}^tw\,(Sw)$, $g_S(v, w) = {}^tv\,(Sw)$: sono prodotti euclidei tra vettori già noti.
> 3. $\cos\vartheta = \frac{g_S(v, w)}{\|v\|\,\|w\|}$. Semplifica le radici ($\frac{1}{\sqrt2} = \frac{\sqrt2}2$, $\frac{3}{\sqrt{12}} = \frac{\sqrt3}2$) e confronta con la tabella degli angoli notevoli.
> 4. Se nessun angolo notevole torna, la risposta resta nella forma $\arccos(\dots)$: nel quiz cerca l'opzione equivalente, magari scritta con il denominatore razionalizzato.

**Tre domande vere, risolte**

> [!ESEMPIO] Appello del 07/09/2026, domanda 5
> Su $\R^3$ è dato $g_S$ con $S = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}$. Qual è la norma di $v = {}^t(1, 1, 1)$? (Opzioni: $\sqrt2$, $2$, $\sqrt7$, $\sqrt3$, $3$.)
>
> **Soluzione.** $Sv = (2 + 1 + 1,\ 1 + 2 + 0,\ 1 + 0 + 1) = (4, 3, 2)$, poi $\|v\|^2 = {}^tv\,(Sv) = 4 + 3 + 2 = 9$, quindi $\|v\| = 3$. L'errore tipico è rispondere $\sqrt3$, la norma **euclidea** di $(1, 1, 1)$: qui il prodotto è $g_S$.

> [!ESEMPIO] Appello del 03/06/2025, domanda 6
> Con $g_S(v, w) = {}^tv\,S\,w$ e $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, qual è l'angolo tra $u = {}^t(0, 2)$ e $w = {}^t(\sqrt3, 1 - \sqrt3)$? (Opzioni: $\frac\pi4$, $0$, $\frac\pi3$, $\arccos\frac{1 - \sqrt3}{\sqrt{7 - 2\sqrt3}}$, $\frac\pi2$.)
>
> **Soluzione.**
> - $Sw = \big(2\sqrt3 + 1 - \sqrt3,\ \sqrt3 + 1 - \sqrt3\big) = (\sqrt3 + 1,\ 1)$;
> - $g_S(u, w) = {}^tu\,(Sw) = 0 \cdot (\sqrt3 + 1) + 2 \cdot 1 = 2$;
> - $Su = (2, 2)$ e $\|u\|^2 = 0 \cdot 2 + 2 \cdot 2 = 4$, quindi $\|u\| = 2$;
> - $\|w\|^2 = {}^tw\,(Sw) = \sqrt3(\sqrt3 + 1) + (1 - \sqrt3) \cdot 1 = 3 + \sqrt3 + 1 - \sqrt3 = 4$, quindi $\|w\| = 2$.
>
> $\cos\vartheta = \frac{2}{2 \cdot 2} = \frac12$, quindi $\vartheta = \frac\pi3$. L'opzione con l'arcocoseno è il coseno calcolato con il prodotto **euclideo**: $\frac{0 \cdot \sqrt3 + 2(1 - \sqrt3)}{2\sqrt{3 + (1 - \sqrt3)^2}} = \frac{1 - \sqrt3}{\sqrt{7 - 2\sqrt3}}$, la trappola per chi dimentica $S$.

> [!ESEMPIO] Appello del 10/06/2024, domanda 4
> Data $S = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 2 \end{pmatrix}$, qual è la matrice di $g_S$ nella base $\mathcal B = \{{}^t(1, 0, 0), {}^t(1, 1, 0), {}^t(1, 1, 1)\}$?
>
> **Soluzione con ${}^tMSM$.** $M = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ (colonne: i vettori della base). Prima $SM = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \\ 1 & 1 & 3 \end{pmatrix}$, poi
> $${}^tM(SM) = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \\ 1 & 1 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 7 \end{pmatrix}.$$
> Controlli: il risultato è simmetrico; $\det S = -2$ e $\det M = 1$, quindi anche il risultato deve avere determinante $-2$ (e infatti $1(21 - 16) - 2(14 - 12) + 3(8 - 9) = 5 - 4 - 3 = -2$).
>
> Le risposte sbagliate sono istruttive: una era $M$ stessa, che non è simmetrica e si scarta subito; una era $S$, la matrice nella base canonica; una era ${}^tM\,M = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 2 \\ 1 & 2 & 3 \end{pmatrix}$, cioè la matrice del prodotto **euclideo** nella base $\mathcal B$, per chi dimentica $S$. Il modo più veloce per scegliere è calcolare una sola entrata: $S'_{22} = g_S(v_2, v_2) = {}^t(1, 1, 0)\,S\,(1, 1, 0) = {}^t(1, 1, 0)\,(2, 1, 1) = 3$, e solo una delle cinque matrici ha 3 al posto $(2, 2)$.

**Errori da evitare**

- Usare il prodotto **euclideo** quando è dato un $g_S$ (vedi le due trappole qui sopra).
- Dimenticare la **radice**: $\|v\|^2 = 9$ vuol dire $\|v\| = 3$.
- Usare $M^{-1}SM$ al posto di ${}^tMSM$.
- Non dimezzare i coefficienti misti di una forma quadratica.
- Dare l'angolo in gradi o fuori da $[0, \pi]$: un coseno negativo dà un angolo **ottuso**, non un angolo negativo.

> [!ESAME] Sul foglio da 4 facciate
> - $S' = {}^tM\,S\,M$ con $M = [\id]^{\mathcal B'}_{\mathcal B}$ (colonne = vettori nuovi nella base vecchia); $\det S' = (\det M)^2\det S$.
> - Forma quadratica: diagonale = coefficienti dei quadrati, fuori diagonale = **metà** dei coefficienti misti.
> - $\|v\| = \sqrt{\langle v, v\rangle}$; $|\langle v, w\rangle| \le \|v\|\,\|w\|$; $\|v + w\|^2 = \|v\|^2 + 2\langle v, w\rangle + \|w\|^2$.
> - $d(P, Q) = \|Q - P\|$; $\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}$, $\vartheta \in [0, \pi]$.
> - La tabella dei coseni degli angoli notevoli.

## Quiz

```quiz
D: La forma quadratica $q(x) = x_1^2 - 4x_1x_2 + 3x_3^2$ si scrive come $q_S(x) = {}^tx\,S\,x$ con $S$ simmetrica uguale a:
+ $\begin{pmatrix} 1 & -2 & 0 \\ -2 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -4 & 0 \\ -4 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -4 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -2 & 0 \\ -2 & 3 & 0 \\ 0 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
= Sulla diagonale i coefficienti dei quadrati: $1$ per $x_1^2$, $0$ per $x_2^2$, $3$ per $x_3^2$. Il coefficiente $-4$ di $x_1x_2$ si divide: $-2$ ai posti $(1, 2)$ e $(2, 1)$. La seconda matrice dà $-8x_1x_2$; la terza dà la forma giusta ma non è simmetrica; la quarta mette $3$ su $x_2^2$; l'ultima ha il segno sbagliato. Simile all'appello dell'08/02/2024, domanda 7.

D: Quale forma quadratica è definita dalla matrice $S = \begin{pmatrix} 0 & 1 & -1 \\ 1 & 2 & 0 \\ -1 & 0 & 0 \end{pmatrix}$?
+ $2x_2^2 + 2x_1x_2 - 2x_1x_3$
- $2x_2^2 + x_1x_2 - x_1x_3$
- $2x_2^2 + 2x_1x_2 + 2x_1x_3$
- $x_1^2 + 2x_2^2 + 2x_1x_2 - 2x_1x_3$
- $2x_2^2 + 4x_1x_2 - 4x_1x_3$
= $q_S(x) = \sum_i S_{ii}x_i^2 + \sum_{i < j} 2S_{ij}x_ix_j$: dalla diagonale solo $2x_2^2$; fuori diagonale $2 \cdot 1 \cdot x_1x_2$ e $2 \cdot (-1) \cdot x_1x_3$; $S_{23} = 0$. Chi dimentica di raddoppiare ottiene la seconda risposta.

D: Su $\R^3$ sia $g_S$ il prodotto scalare con $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}$. Qual è la norma di $v = {}^t(1, 1, 1)$ rispetto a $g_S$?
+ $\sqrt{10}$
- $10$
- $\sqrt3$
- $3$
- $\sqrt7$
= $Sv = (1 + 1,\ 1 + 3 + 1,\ 1 + 2) = (2, 5, 3)$ e $\|v\|^2 = {}^tv\,(Sv) = 2 + 5 + 3 = 10$, quindi $\|v\| = \sqrt{10}$. $10$ è il quadrato della norma; $\sqrt3$ è la norma euclidea. Simile all'appello del 07/09/2026, domanda 5.

D: Rispetto al prodotto scalare euclideo, qual è l'angolo tra ${}^t(1, 0, 1)$ e ${}^t(1, 1, 0)$?
+ $\frac\pi3$
- $\frac\pi6$
- $\frac\pi4$
- $\frac{2\pi}3$
- $\arccos\frac14$
= Prodotto $1 + 0 + 0 = 1$, norme $\sqrt2$ e $\sqrt2$: $\cos\vartheta = \frac{1}{2}$, quindi $\vartheta = \frac\pi3$. Il coseno è positivo, quindi l'angolo è acuto: $\frac{2\pi}3$ ha coseno $-\frac12$. Simile all'appello del 07/09/2026, domanda 10.

D: Sia $g_S$ il prodotto scalare su $\R^2$ con $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Qual è l'angolo tra ${}^t(1, 0)$ e ${}^t(1, 1)$ rispetto a $g_S$?
+ $\frac\pi6$
- $\frac\pi4$
- $\frac\pi3$
- $0$
- $\arccos\frac34$
= $g_S(e_1, (1, 1)) = S_{11} + S_{12} = 3$; $\|e_1\|^2 = S_{11} = 2$; $\|(1, 1)\|^2 = 2 + 1 + 1 + 2 = 6$. Quindi $\cos\vartheta = \frac{3}{\sqrt2\sqrt6} = \frac{3}{\sqrt{12}} = \frac{\sqrt3}2$ e $\vartheta = \frac\pi6$. La risposta $\frac\pi4$ è l'angolo **euclideo**. Simile all'appello del 03/06/2025, domanda 6.

D: Su $\R_2[x]$ si consideri il prodotto $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. L'angolo tra $p(x) = x$ e $q(x) = x + x^2$ è:
+ $\frac\pi4$
- $\frac\pi2$
- $\frac\pi3$
- $0$
- $\frac\pi6$
= Valori in $-1, 0, 1$: $x \to (-1, 0, 1)$, $x + x^2 \to (0, 0, 2)$. Allora $\langle p, q\rangle = 0 + 0 + 2 = 2$, $\|p\| = \sqrt2$, $\|q\| = 2$, e $\cos\vartheta = \frac{2}{2\sqrt2} = \frac{\sqrt2}2$: $\vartheta = \frac\pi4$. Simile all'appello dell'08/02/2024, domanda 8.

D: Siano $S = [g]_{\mathcal B}$ e $S' = [g]_{\mathcal B'}$ le matrici dello stesso prodotto scalare in due basi, e sia $M = [\id]^{\mathcal B'}_{\mathcal B}$. Quale relazione vale sempre?
+ $S' = {}^tM\,S\,M$
- $S' = M^{-1}S\,M$
- $S' = M\,S\,{}^tM$
- $S' = {}^tM\,S$
- $S' = S$
= È la Proposizione 20.1: $S'_{ij} = g(v_i', v_j') = {}^t(M^i)\,S\,M^j$. La formula con l'inversa vale per gli endomorfismi. La matrice di un prodotto scalare dipende dalla base, quindi $S' = S$ è falsa in generale. Serve negli appelli del 10/06/2024 e del 03/06/2026, domanda 4.

D: Quale affermazione è vera per ogni coppia di vettori $v, w$ di uno spazio con prodotto scalare definito positivo?
+ $|\langle v, w\rangle| \le \|v\|\,\|w\|$
- $\|v + w\| = \|v\| + \|w\|$
- $\|v + w\|^2 = \|v\|^2 + \|w\|^2$
- $\|\lambda v\| = \lambda\,\|v\|$ per ogni $\lambda \in \R$
- $\langle v, w\rangle \ge 0$
= È Cauchy–Schwarz. La seconda vale solo per vettori paralleli e con lo stesso verso; la terza (Pitagora) solo se $\langle v, w\rangle = 0$; la quarta è falsa per $\lambda < 0$ (serve $|\lambda|$); l'ultima è falsa per $w = -v \ne 0$.

D: Quanto vale la distanza euclidea tra i punti $P = (1, 2, 3)$ e $Q = (3, 3, 5)$?
N: 3
= $Q - P = (2, 1, 2)$ e $d(P, Q) = \sqrt{4 + 1 + 4} = \sqrt9 = 3$.

D: Siano $v, w$ vettori con $\|v\| = 2$, $\|w\| = 3$ e $\langle v, w\rangle = 1$. Quanto vale $\|v + w\|^2$?
N: 15
= $\|v + w\|^2 = \|v\|^2 + 2\langle v, w\rangle + \|w\|^2 = 4 + 2 + 9 = 15$ (sviluppo del quadrato con la bilinearità).
```

## Esercizi

::: esercizio medio Esercizio 20.13 delle dispense
Su $\R^2$ consideriamo il prodotto scalare $g(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + 2x_2y_2$.
1. Trovare la matrice associata a $g$ rispetto alla base canonica e la forma quadratica corrispondente.
2. Verificare che $g$ è definito positivo.
3. Calcolare le norme di $e_1, e_2$ e l'angolo fra questi due vettori.
4. Trovare la matrice associata a $g$ rispetto alla base $\mathcal B = \{(1, 1), (1, -1)\}$.
::: soluzione
**1.** Il coefficiente di $x_iy_j$ va al posto $(i, j)$ (lezione L19):
$$S = [g]_{\mathcal C} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}.$$
La forma quadratica è $q(x) = g(x, x) = 2x_1^2 + x_1x_2 + x_2x_1 + 2x_2^2 = 2x_1^2 + 2x_1x_2 + 2x_2^2$.

**2.** Completo il quadrato:
$$\begin{aligned} q(x) &= 2\left(x_1^2 + x_1x_2\right) + 2x_2^2 \\ &= 2\left(x_1 + \frac{x_2}2\right)^2 - \frac{x_2^2}2 + 2x_2^2 \\ &= 2\left(x_1 + \frac{x_2}2\right)^2 + \frac32 x_2^2. \end{aligned}$$
Entrambi gli addendi sono $\ge 0$; la somma è 0 solo se $x_2 = 0$ e poi $x_1 = 0$. Quindi $q(x) > 0$ per ogni $x \neq 0$: $g$ è definito positivo. (Con il criterio $2 \times 2$: $2 > 0$ e $\det S = 3 > 0$.)

**3.** Per il Corollario 19.9: $\|e_1\|^2 = S_{11} = 2$ e $\|e_2\|^2 = S_{22} = 2$, quindi $\|e_1\| = \|e_2\| = \sqrt2$. Poi $g(e_1, e_2) = S_{12} = 1$:
$$\cos\vartheta = \frac{1}{\sqrt2\,\sqrt2} = \frac12, \qquad \vartheta = \frac\pi3.$$
Per questo prodotto $e_1$ ed $e_2$ formano un angolo di 60°, non di 90°.

**4.** Con $M = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ (colonne: i vettori di $\mathcal B$):
$$SM = \begin{pmatrix} 2 + 1 & 2 - 1 \\ 1 + 2 & 1 - 2 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix},$$
$${}^tM(SM) = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix} = \begin{pmatrix} 6 & 0 \\ 0 & 2 \end{pmatrix}.$$
Controllo entrata per entrata: $g((1, 1), (1, 1)) = 2 + 1 + 1 + 2 = 6$; $g((1, 1), (1, -1)) = 2 - 1 + 1 - 2 = 0$; $g((1, -1), (1, -1)) = 2 - 1 - 1 + 2 = 2$. ✓ La matrice è diagonale: i due vettori di $\mathcal B$ sono ortogonali per $g$ (lezione L21).
:::

::: esercizio base Norme e distanze euclidee
(a) Calcola $\|(2, -1, 2)\|$ e normalizza il vettore. (b) Calcola la distanza tra $P = (1, 1, 1)$ e $Q = (3, -1, 2)$. (c) Normalizza $(1, 1, 1, 1)$ in $\R^4$.
::: soluzione
(a) $\|(2, -1, 2)\| = \sqrt{4 + 1 + 4} = 3$; normalizzato: $\frac13(2, -1, 2) = \left(\frac23, -\frac13, \frac23\right)$. Controllo: $\frac{4 + 1 + 4}{9} = 1$. ✓

(b) $Q - P = (2, -2, 1)$ e $d(P, Q) = \sqrt{4 + 4 + 1} = 3$.

(c) $\|(1, 1, 1, 1)\| = \sqrt4 = 2$; normalizzato: $\left(\frac12, \frac12, \frac12, \frac12\right)$.
:::

::: esercizio base Cinque angoli euclidei
Calcola l'angolo tra: (a) $(1, 2, 2)$ e $(2, -1, 2)$; (b) $(1, 1)$ e $(1, -1)$; (c) $(1, \sqrt3)$ e $(\sqrt3, 1)$; (d) $(1, 0, 1)$ e $(0, 1, 1)$; (e) $(1, 1, 0)$ e $(-1, 0, -1)$.
::: soluzione
(a) $\langle v, w\rangle = 2 - 2 + 4 = 4$, norme $3$ e $3$: $\cos\vartheta = \frac49$, $\vartheta = \arccos\frac49$ (acuto, non notevole).

(b) $\langle v, w\rangle = 1 - 1 = 0$: $\vartheta = \frac\pi2$.

(c) $\langle v, w\rangle = \sqrt3 + \sqrt3 = 2\sqrt3$, norme $\sqrt{1 + 3} = 2$ e $2$: $\cos\vartheta = \frac{2\sqrt3}4 = \frac{\sqrt3}2$, $\vartheta = \frac\pi6$.

(d) $\langle v, w\rangle = 0 + 0 + 1 = 1$, norme $\sqrt2$ e $\sqrt2$: $\cos\vartheta = \frac12$, $\vartheta = \frac\pi3$.

(e) $\langle v, w\rangle = -1 + 0 + 0 = -1$, norme $\sqrt2$ e $\sqrt2$: $\cos\vartheta = -\frac12$, $\vartheta = \frac{2\pi}3$ (ottuso).
:::

::: esercizio base Forme quadratiche e matrici
(a) Scrivi le matrici simmetriche di $q_1 = x_1^2 - 2x_1x_2 + 3x_2^2$ su $\R^2$, di $q_2 = x_2^2 + x_1x_3$ su $\R^3$ e di $q_3 = x_1^2 + 4x_1x_2$ su $\R^3$. (b) Scrivi le forme quadratiche delle matrici $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$ e $\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 2 \\ 0 & 2 & -1 \end{pmatrix}$.
::: soluzione
(a) Diagonale = coefficienti dei quadrati, fuori diagonale = metà dei coefficienti misti:
$$S_1 = \begin{pmatrix} 1 & -1 \\ -1 & 3 \end{pmatrix}, \qquad S_2 = \begin{pmatrix} 0 & 0 & \frac12 \\ 0 & 1 & 0 \\ \frac12 & 0 & 0 \end{pmatrix},$$
$$S_3 = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
In $S_3$ la variabile $x_3$ non compare: riga e colonna 3 sono nulle (e la matrice va comunque scritta $3 \times 3$, perché la forma è su $\R^3$).

(b) Quadrati dalla diagonale, termini misti con il doppio dell'entrata:
$$3x_1^2 + 2x_1x_2, \qquad 2x_1x_2 + 4x_2x_3 - x_3^2.$$
:::

::: esercizio medio Cambiare base per vedere che un prodotto è definito positivo
Sia $S = \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$ e $\mathcal B' = \{(1, 0), (-2, 1)\}$. (a) Calcola $[g_S]_{\mathcal B'}$ con la Proposizione 20.1. (b) Deduci che $g_S$ è definito positivo.
::: soluzione
(a) $M = \begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}$. Prima
$$SM = \begin{pmatrix} 1 & -2 + 2 \\ 2 & -4 + 5 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix},$$
poi
$${}^tM(SM) = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ -2 + 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$

(b) In coordinate rispetto a $\mathcal B'$ il prodotto diventa $g_S(v, v) = \lambda_1^2 + \lambda_2^2$ (Corollario 19.16 con la matrice $I_2$), dove $(\lambda_1, \lambda_2) = [v]_{\mathcal B'}$. Se $v \neq 0$ le sue coordinate non sono entrambe nulle, quindi $g_S(v, v) > 0$. È lo stesso risultato del completamento del quadrato $x_1^2 + 4x_1x_2 + 5x_2^2 = (x_1 + 2x_2)^2 + x_2^2$: le nuove coordinate sono proprio $\lambda_1 = x_1 + 2x_2$ e $\lambda_2 = x_2$.
:::

::: esercizio medio Cauchy–Schwarz e disuguaglianza triangolare con i numeri
Siano $v = (1, -2, 2)$ e $w = (3, 0, 4)$. (a) Verifica Cauchy–Schwarz. (b) Verifica la disuguaglianza triangolare. (c) Trova un vettore $w'$ per cui Cauchy–Schwarz diventa un'uguaglianza.
::: soluzione
(a) $\langle v, w\rangle = 3 + 0 + 8 = 11$; $\|v\| = \sqrt{1 + 4 + 4} = 3$; $\|w\| = \sqrt{9 + 16} = 5$. Infatti $11 \le 15$.

(b) $v + w = (4, -2, 6)$ e $\|v + w\| = \sqrt{16 + 4 + 36} = \sqrt{56} = 2\sqrt{14}$. Siccome $56 < 64$, vale $\sqrt{56} < 8 = 3 + 5$. ✓ (Senza calcolatrice si confrontano i quadrati.)

(c) Serve un vettore parallelo a $v$, per esempio $w' = -2v = (-2, 4, -4)$: $|\langle v, w'\rangle| = |{-2}\langle v, v\rangle| = 18$ e $\|v\|\,\|w'\| = 3 \cdot 6 = 18$.
:::

::: esercizio medio Misurare con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$
Con il prodotto $g_S$: (a) calcola la distanza tra $P = (1, 2)$ e $Q = (2, 1)$ e confrontala con quella euclidea; (b) calcola l'angolo tra $e_1$ ed $e_2$.
::: soluzione
(a) $Q - P = (1, -1)$ e $\|(1, -1)\|^2 = 2 \cdot 1 + 2 \cdot 1 \cdot (-1) + 1 = 1$, quindi $d_S(P, Q) = 1$. La distanza euclidea è $\sqrt{1 + 1} = \sqrt2$.

(b) $g_S(e_1, e_2) = S_{12} = 1$, $\|e_1\| = \sqrt{S_{11}} = \sqrt2$, $\|e_2\| = \sqrt{S_{22}} = 1$. Quindi $\cos\vartheta = \frac{1}{\sqrt2} = \frac{\sqrt2}2$ e $\vartheta = \frac\pi4$.
:::

::: esercizio medio Angoli tra polinomi
Su $\R_2[x]$ sia $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. Calcola: (a) $\|x\|$; (b) l'angolo tra $1$ e $x^2$; (c) l'angolo tra $x$ e $1 + x^2$.
::: soluzione
Valori in $-1, 0, 1$: $1 \to (1, 1, 1)$, $x \to (-1, 0, 1)$, $x^2 \to (1, 0, 1)$, $1 + x^2 \to (2, 1, 2)$.

(a) $\|x\|^2 = 1 + 0 + 1 = 2$, quindi $\|x\| = \sqrt2$.

(b) $\langle 1, x^2\rangle = 1 + 0 + 1 = 2$, $\|1\| = \sqrt3$, $\|x^2\| = \sqrt2$: $\cos\vartheta = \frac{2}{\sqrt6} = \frac{2\sqrt6}{6} = \frac{\sqrt6}3$, quindi $\vartheta = \arccos\frac{\sqrt6}3$.

(c) $\langle x, 1 + x^2\rangle = -2 + 0 + 2 = 0$: i due polinomi sono ortogonali, $\vartheta = \frac\pi2$.
:::

::: esercizio difficile Legge del parallelogramma e polarizzazione
Dimostra che in ogni spazio con prodotto scalare definito positivo (a) $\|v + w\|^2 + \|v - w\|^2 = 2\big(\|v\|^2 + \|w\|^2\big)$; (b) $\langle v, w\rangle = \frac14\big(\|v + w\|^2 - \|v - w\|^2\big)$. (c) Controlla entrambe con $v = (1, 2)$, $w = (3, -1)$.
::: soluzione
Sviluppando con la bilinearità (lezione L19):
$$\begin{aligned} \|v + w\|^2 &= \|v\|^2 + 2\langle v, w\rangle + \|w\|^2, \\ \|v - w\|^2 &= \|v\|^2 - 2\langle v, w\rangle + \|w\|^2. \end{aligned}$$

(a) Sommando, i termini $\pm 2\langle v, w\rangle$ si cancellano: $2\|v\|^2 + 2\|w\|^2$. Geometricamente: in un parallelogramma la somma dei quadrati delle diagonali è uguale alla somma dei quadrati dei quattro lati.

(b) Sottraendo, si cancellano $\|v\|^2$ e $\|w\|^2$: $\|v + w\|^2 - \|v - w\|^2 = 4\langle v, w\rangle$.

(c) $v + w = (4, 1)$, $v - w = (-2, 3)$: $\|v + w\|^2 = 17$, $\|v - w\|^2 = 13$. (a): $17 + 13 = 30 = 2(5 + 10)$. ✓ (b): $\frac14(17 - 13) = 1 = \langle v, w\rangle = 3 - 2$. ✓
:::

::: esercizio difficile Gli angoli di un triangolo nello spazio
Siano $A = (1, 0, 0)$, $B = (0, 1, 0)$, $C = (0, 0, 2)$. Calcola i coseni dei tre angoli del triangolo $ABC$ e verifica che il triangolo è isoscele. Poi controlla che l'angolo in $C$ vale $\pi$ meno il doppio dell'angolo in $A$.
::: soluzione
L'angolo in un vertice è l'angolo tra i due vettori che partono da quel vertice.

- In $A$: $B - A = (-1, 1, 0)$, $C - A = (-1, 0, 2)$; prodotto $1$, norme $\sqrt2$ e $\sqrt5$: $\cos\alpha = \frac{1}{\sqrt{10}}$.
- In $B$: $A - B = (1, -1, 0)$, $C - B = (0, -1, 2)$; prodotto $1$, norme $\sqrt2$ e $\sqrt5$: $\cos\beta = \frac{1}{\sqrt{10}}$.
- In $C$: $A - C = (1, 0, -2)$, $B - C = (0, 1, -2)$; prodotto $4$, norme $\sqrt5$ e $\sqrt5$: $\cos\gamma = \frac45$.

$\alpha = \beta$ e i lati $AC$ e $BC$ hanno la stessa lunghezza $\sqrt5$: il triangolo è isoscele. Ora calcolo il coseno di $\pi - 2\alpha$ con le formule $\cos(\pi - t) = -\cos t$ e $\cos 2\alpha = 2\cos^2\alpha - 1$:
$$\cos(\pi - 2\alpha) = -(2\cos^2\alpha - 1) = -\left(\frac{2}{10} - 1\right) = \frac45 = \cos\gamma.$$
Siccome $\cos\alpha = \frac{1}{\sqrt{10}} > 0$, l'angolo $\alpha$ è acuto, quindi $\pi - 2\alpha$ sta in $[0, \pi]$, come $\gamma$; e in $[0, \pi]$ il coseno assume ogni valore una volta sola. Quindi $\gamma = \pi - 2\alpha$, cioè $\alpha + \beta + \gamma = \pi$, come deve essere in un triangolo.
:::

::: esercizio esame Norme, angolo e distanza con un $g_S$ su $\R^3$
Sia $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ (definita positiva, lezione L19, esercizio 11), $u = {}^t(1, 0, 1)$, $v = {}^t(0, 1, 1)$. Calcola rispetto a $g_S$: (a) $\|u\|$ e $\|v\|$; (b) il coseno dell'angolo tra $u$ e $v$; (c) la distanza tra $u$ e $v$.
::: soluzione
Prima i vettori $Su$ e $Sv$:
$$\begin{aligned} Su &= (1 + 0 + 0,\ 1 + 0 + 0,\ 0 + 0 + 3) = (1, 1, 3), \\ Sv &= (0 + 1 + 0,\ 0 + 2 + 0,\ 0 + 0 + 3) = (1, 2, 3). \end{aligned}$$

(a) $\|u\|^2 = {}^tu\,(Su) = 1 + 0 + 3 = 4$, quindi $\|u\| = 2$; $\|v\|^2 = {}^tv\,(Sv) = 0 + 2 + 3 = 5$, quindi $\|v\| = \sqrt5$.

(b) $g_S(u, v) = {}^tu\,(Sv) = 1 + 0 + 3 = 4$, quindi
$$\cos\vartheta = \frac{4}{2\sqrt5} = \frac{2}{\sqrt5} = \frac{2\sqrt5}5.$$

(c) $v - u = (-1, 1, 0)$ e $S(v - u) = Sv - Su = (0, 1, 0)$, quindi $\|v - u\|^2 = {}^t(-1, 1, 0)\,(0, 1, 0) = 1$ e $d(u, v) = 1$. Controllo con lo sviluppo del quadrato: $\|v - u\|^2 = \|v\|^2 - 2g_S(u, v) + \|u\|^2 = 5 - 8 + 4 = 1$. ✓
:::

::: esercizio esame Ortogonalità con un parametro
Sia $g_S$ su $\R^2$ con $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. (a) Per quale $k$ i vettori $u = (1, 0)$ e $v = (k, 1)$ sono ortogonali rispetto a $g_S$? (b) Per quel $k$, quanto vale $\|v\|$? (c) Qual è l'angolo tra $u$ e $(1, 1)$?
::: soluzione
(a) $g_S(u, v) = {}^tu\,S\,v$; la riga ${}^tu\,S$ è la prima riga di $S$, $(2, 1)$, quindi $g_S(u, v) = 2k + 1$. Vale 0 per $k = -\frac12$.

(b) $v = \left(-\frac12, 1\right)$, $Sv = \left(-1 + 1,\ -\frac12 + 2\right) = \left(0, \frac32\right)$, quindi $\|v\|^2 = -\frac12 \cdot 0 + 1 \cdot \frac32 = \frac32$ e $\|v\| = \sqrt{\frac32} = \frac{\sqrt6}2$.

(c) $g_S(u, (1, 1)) = 2 + 1 = 3$, $\|u\|^2 = 2$, $\|(1, 1)\|^2 = 2 + 1 + 1 + 2 = 6$: $\cos\vartheta = \frac{3}{\sqrt{12}} = \frac{\sqrt3}2$, quindi $\vartheta = \frac\pi6$. (Con il prodotto euclideo sarebbe $\frac\pi4$.)
:::

## Domande di ripasso

::: domanda Come cambia la matrice di un prodotto scalare quando cambi base? Da dove viene la formula?
$S' = {}^tM\,S\,M$ con $M = [\id]^{\mathcal B'}_{\mathcal B}$. Viene da $S'_{ij} = g(v_i', v_j') = {}^t[v_i']_{\mathcal B}\,S\,[v_j']_{\mathcal B}$ e dal fatto che $[v_i']_{\mathcal B}$ è la colonna $i$ di $M$.
:::

::: domanda Che differenza c'è con la formula di cambiamento di base per gli endomorfismi?
Per un endomorfismo $A' = M^{-1}A\,M$; per un prodotto scalare $S' = {}^tM\,S\,M$. Le due formule danno lo stesso risultato per ogni matrice quando ${}^tM = M^{-1}$, cioè quando $M$ è ortogonale (lezione L22).
:::

::: domanda Che cos'è una forma quadratica? Come si trova la sua matrice?
Un polinomio omogeneo di grado 2 in $x_1, \dots, x_n$. La matrice simmetrica $S$ con $q = q_S$ è unica: sulla diagonale i coefficienti di $x_i^2$, ai posti $(i, j)$ e $(j, i)$ metà del coefficiente di $x_ix_j$.
:::

::: domanda Come si legge la definita positività di $g_S$ sulla forma quadratica?
$g_S$ è definito positivo se e solo se $q_S(x) = {}^tx\,S\,x > 0$ per ogni $x \neq 0$. Per verificarlo si può completare il quadrato, o per $2 \times 2$ controllare $a > 0$ e $\det S > 0$.
:::

::: domanda Che cos'è la norma di un vettore? Perché serve un prodotto definito positivo?
$\|v\| = \sqrt{\langle v, v\rangle}$, la lunghezza di $v$. Serve $\langle v, v\rangle \ge 0$ per poter fare la radice, e $\langle v, v\rangle > 0$ per $v \ne 0$ perché solo il vettore nullo abbia lunghezza zero.
:::

::: domanda Perché $\|\lambda v\| = |\lambda|\,\|v\|$ e non $\lambda\|v\|$?
Perché $\|\lambda v\| = \sqrt{\lambda^2\langle v, v\rangle}$ e $\sqrt{\lambda^2} = |\lambda|$. Con $\lambda = -1$: $\|-v\| = \|v\|$, un vettore e il suo opposto sono lunghi uguali.
:::

::: domanda Enuncia Cauchy–Schwarz e spiega l'idea della dimostrazione.
$|\langle v, w\rangle| \le \|v\|\,\|w\|$. Per $w \ne 0$ si usa $0 \le \|v - cw\|^2$ con $c = \frac{\langle v, w\rangle}{\langle w, w\rangle}$: sviluppando si ottiene $0 \le \|v\|^2 - \frac{\langle v, w\rangle^2}{\|w\|^2}$, cioè $\langle v, w\rangle^2 \le \|v\|^2\|w\|^2$.
:::

::: domanda Come si ricava la disuguaglianza triangolare da Cauchy–Schwarz?
$\|v + w\|^2 = \|v\|^2 + \|w\|^2 + 2\langle v, w\rangle \le \|v\|^2 + \|w\|^2 + 2\|v\|\,\|w\| = (\|v\| + \|w\|)^2$, poi si prende la radice.
:::

::: domanda Come si definisce la distanza tra due punti? Quali proprietà ha?
$d(P, Q) = \|Q - P\|$. È positiva per $P \ne Q$ e nulla per $P = Q$, è simmetrica, e $d(P, R) \le d(P, Q) + d(Q, R)$ perché $R - P = (Q - P) + (R - Q)$.
:::

::: domanda Come si definisce l'angolo tra due vettori? Perché la definizione ha senso?
È il $\vartheta \in [0, \pi]$ con $\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}$, per $v, w \ne 0$. Per Cauchy–Schwarz il rapporto sta in $[-1, 1]$, e il coseno assume ogni valore di $[-1, 1]$ esattamente una volta in $[0, \pi]$.
:::

::: domanda Come capisci se un angolo è acuto, retto o ottuso senza calcolarlo?
Dal segno di $\langle v, w\rangle$: positivo acuto, zero retto, negativo ottuso.
:::

::: domanda Che cos'è la similarità coseno e perché non dipende dalla lunghezza dei vettori?
$\operatorname{sim}(x, y) = \frac{\langle x, y\rangle}{\|x\|\,\|y\|} = \cos\vartheta$. Se moltiplichi $x$ per $\lambda > 0$, numeratore e denominatore si moltiplicano entrambi per $\lambda$, e il rapporto non cambia.
:::

## Glossario

```glossario
Matrice di cambiamento di base | $M = [\id]^{\mathcal B'}_{\mathcal B}$: la colonna $i$ contiene le coordinate del vettore nuovo $v_i'$ nella base vecchia $\mathcal B$.
Formula ${}^tMSM$ | Legame tra le matrici dello stesso prodotto scalare in due basi: $[g]_{\mathcal B'} = {}^tM\,[g]_{\mathcal B}\,M$.
Matrici congruenti | (Termine di Martelli.) Matrici simmetriche con $S' = {}^tM\,S\,M$ per una $M$ invertibile; hanno determinanti dello stesso segno.
Polinomio omogeneo | Polinomio i cui monomi hanno tutti lo stesso grado.
Forma quadratica | Polinomio omogeneo di grado 2; si scrive in modo unico come $q_S(x) = {}^tx\,S\,x$ con $S$ simmetrica.
$q_S$ | La forma quadratica $q_S(x) = g_S(x, x)$ della matrice simmetrica $S$.
Norma | $\lVert v \rVert = \sqrt{\langle v, v\rangle}$, la lunghezza di $v$ (con un prodotto definito positivo).
Norma euclidea | $\lVert x \rVert = \sqrt{x_1^2 + \dots + x_n^2}$ su $\R^n$: il teorema di Pitagora.
Vettore unitario | Vettore di norma 1.
Normalizzare | Dividere un vettore non nullo per la sua norma, ottenendo un vettore unitario con la stessa direzione e lo stesso verso.
Disuguaglianza di Cauchy–Schwarz | $\lvert\langle v, w\rangle\rvert \le \lVert v \rVert\,\lVert w \rVert$; vale l'uguaglianza se e solo se $v$ e $w$ sono paralleli.
Disuguaglianza triangolare | $\lVert v + w \rVert \le \lVert v \rVert + \lVert w \rVert$; per le distanze $d(P, R) \le d(P, Q) + d(Q, R)$.
Vettore $\overrightarrow{PQ}$ | Il vettore $Q - P$, che va dal punto $P$ al punto $Q$.
Distanza | $d(P, Q) = \lVert Q - P \rVert$.
Angolo tra due vettori | Il $\vartheta \in [0, \pi]$ con $\cos\vartheta = \frac{\langle v, w\rangle}{\lVert v \rVert\,\lVert w \rVert}$, per $v, w \ne 0$.
Arcocoseno | La funzione $\arccos : [-1, 1] \to [0, \pi]$ che a un numero associa l'angolo con quel coseno.
Similarità coseno | $\operatorname{sim}(x, y) = \cos\vartheta$ tra due vettori, usata per confrontare embedding; non dipende dalle lunghezze.
```

## Checklist

```checklist
- So scrivere la matrice $M = [\id]^{\mathcal B'}_{\mathcal B}$ e calcolare $[g]_{\mathcal B'} = {}^tM\,S\,M$, controllando che il risultato sia simmetrico.
- So spiegare perché per i prodotti scalari si usa ${}^tM$ e per gli endomorfismi $M^{-1}$.
- So passare da una forma quadratica alla sua matrice simmetrica e viceversa, dimezzando o raddoppiando i termini misti.
- So decidere se una forma quadratica di due variabili è definita positiva completando il quadrato.
- So calcolare norme e distanze con il prodotto euclideo e con un $g_S$ dato.
- So enunciare e dimostrare le quattro proprietà della norma, compresa Cauchy–Schwarz.
- So ricavare la disuguaglianza triangolare per le distanze da quella della norma.
- So calcolare l'angolo tra due vettori (anche tra polinomi) e riconoscere gli angoli notevoli senza calcolatrice.
- So dire se un angolo è acuto, retto o ottuso guardando il segno del prodotto scalare.
- So spiegare che cos'è la similarità coseno e perché non dipende dalla lunghezza dei vettori.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 20 «Prodotti scalari II», pp. 100–104: sezioni 20.A (cambiamento di base), 20.B (forme quadratiche), 20.C (norma), 20.D (distanze), 20.E (angoli, con il riquadro sulla similarità coseno) e 20.F (Esercizio 20.13, risolto qui come primo esercizio). La numerazione è quella delle dispense (Proposizioni 20.1, 20.4, 20.7, 20.11; Definizioni 20.3, 20.6, 20.10, 20.12; Esempi 20.2, 20.5, 20.8, 20.9). Richiami: lezioni L16 (cambiamento di base), L19 (prodotti scalari, Corollario 19.16), Teorema di Binet (Teorema 10.4).
- **B. Martelli, *Geometria e algebra lineare***: §7.1.5 (forme quadratiche), §7.2.2–7.2.3 (cambiamento di base, matrici congruenti), §8.1.1–8.1.4 (norma, applicazioni, angoli, distanze). Il libro è gratuito: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Appelli d'esame** (Moodle 2025/26): domande dell'08/02/2024 (7 e 8), del 10/06/2024 (4), del 03/06/2025 (6), del 03/06/2026 (4), del 07/09/2026 (5 e 10); problemi 12 del 07/02/2025, del 05/02/2026 e del 03/07/2026. Le tre domande riportate sono risolte in questi appunti.
- Le parti **«Oltre le dispense»** (segno del determinante e matrici congruenti, completamento dei quadrati e polarizzazione, casi di uguaglianza, collocazione nel libro) e gli esercizi dopo il primo sono aggiunte di questi appunti, per collegare la lezione al resto del corso e all'esame.
