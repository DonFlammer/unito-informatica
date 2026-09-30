---
corso: MDAG
modulo: AG
lezione: L06
titolo: Spazi vettoriali II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L06
descrizione: >-
  Appunti della lezione L06 di Algebra lineare e Geometria (MDAG, parte 2): lo spazio delle matrici, i sottospazi
  vettoriali, le matrici diagonali, triangolari, simmetriche e antisimmetriche, le combinazioni lineari e il
  sottospazio generato (Span), con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Dentro uno spazio vettoriale ce ne sono altri più piccoli: i sottospazi. Qui impari a riconoscerli con tre
  controlli, conosci lo spazio delle matrici $M(m, n, \K)$ e i suoi sottospazi più importanti (matrici diagonali,
  triangolari, simmetriche, antisimmetriche) e scopri il modo principale per costruire sottospazi: prendere tutte le
  combinazioni lineari di alcuni vettori, cioè il loro $\Span$.
materiale: dispense
scheda:
  Dispense: lezione 6 · pp. 26–30
  Libro: Martelli, §2.2.5–2.2.16
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 6 «Spazi vettoriali II»; B. Martelli, Geometria e algebra lineare, §2.2.5–2.2.16
file_en: L06_vector_spaces_2.html
appunti_html: appunti/MDAG/L06_spazi_vettoriali_2.html
genera_html: true
---

## In breve

- Una **matrice** $m \times n$ è una tabella di numeri con $m$ righe e $n$ colonne. Le matrici $m \times n$, con somma e prodotto per scalare fatti casella per casella, formano lo spazio vettoriale $M(m, n, \K)$; in particolare $M(m, 1, \K) = \K^m$.
- Un **sottospazio** di $V$ è un sottoinsieme $W$ che contiene lo $0$ ed è **chiuso** rispetto alla somma e al prodotto per scalare. Con le operazioni di $V$, è a sua volta uno spazio vettoriale.
- Ogni spazio $V$ ha il sottospazio banale $\{0\}$ e il sottospazio totale $V$; ogni altro sottospazio sta in mezzo: $\{0\} \subset W \subset V$.
- Esempi: $\K_k[x] \subset \K[x]$; nel piano, le rette **per l'origine**; tra le matrici quadrate, le diagonali $D(n)$, le triangolari superiori $T^s(n)$ e inferiori $T^i(n)$, le simmetriche $S(n)$ e le antisimmetriche $A(n)$ (Proposizione 6.5).
- Per dire che un insieme **non** è un sottospazio basta un controesempio. Il più rapido: **non contiene lo zero**, come una retta che non passa per l'origine.
- Una **combinazione lineare** di $v_1, \dots, v_k$ è un vettore del tipo $\lambda_1 v_1 + \dots + \lambda_k v_k$, con $\lambda_1, \dots, \lambda_k$ scalari qualsiasi.
- Lo **Span** di $v_1, \dots, v_k$ è l'insieme di tutte le loro combinazioni lineari, ed è sempre un sottospazio (Proposizione 6.7). Per esempio $\Span(v)$, con $v \neq 0$, è la retta per l'origine con la direzione di $v$.
- Per capire se un vettore $u$ sta in $\Span(v_1, \dots, v_k)$ si cercano dei coefficienti con $\lambda_1 v_1 + \dots + \lambda_k v_k = u$: è un sistema lineare.
- All'esame «quale di questi insiemi è (o non è) un sottospazio?» esce quasi a ogni appello: 08/02/2024, 03/06/2025, 05/02/2026, 07/09/2026.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Lo spazio delle matrici (p. 26)

Nella lezione L05 i vettori di $\K^n$ erano colonne di numeri. Ora si mettono più colonne una accanto all'altra e si ottiene una **tabella**: una matrice. Per esempio

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$$

ha $2$ righe e $3$ colonne. Le matrici sono l'«altro esempio fondamentale» di spazio vettoriale con cui le dispense aprono la lezione, e da qui in poi compariranno ovunque.

> [!DEF] 6.1 · Matrice
> Sia come sempre $\K$ un campo fissato. Una **matrice** con $m$ **righe** e $n$ **colonne** a coefficienti in $\K$ è una tabella rettangolare del tipo
> $$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}$$
> in cui tutti gli $mn$ coefficienti $a_{ij}$ appartengono a $\K$. Diciamo brevemente che $A$ è una **matrice $m \times n$**. Le sue righe sono indicate con $A_1, \dots, A_m$ e le sue colonne con $A^1, \dots, A^n$.

Pezzo per pezzo:

- **$m \times n$** si legge «$m$ per $n$»: prima il numero di righe, poi quello di colonne. La matrice $A$ qui sopra è $2 \times 3$.
- **$a_{ij}$** è il coefficiente nella riga $i$ e nella colonna $j$: **prima la riga, poi la colonna**. Nella matrice $A$ sopra, $a_{12} = 2$ (riga 1, colonna 2) e $a_{21} = 4$ (riga 2, colonna 1).
- In tutto ci sono $m \cdot n$ coefficienti: $A$ ne ha $2 \cdot 3 = 6$.
- **$A_i$**, con l'indice **in basso**, è la riga $i$; **$A^j$**, con l'indice **in alto**, è la colonna $j$. Nella matrice $A$ sopra: $A_2 = (4, 5, 6)$ e $A^3 = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$.

> [!TRAPPOLA] $A^1$ non è una potenza
> Nelle dispense $A^1, \dots, A^n$ sono le **colonne** di $A$: l'indice in alto è solo un'etichetta. $A^2$ è la seconda colonna, non $A$ per $A$.

> [!ESEMPIO] · le matrici delle dispense
> Due matrici a coefficienti in $\R$:
> $$B = \begin{pmatrix} 1 & \sqrt 2 \\ 0 & -5 \\ 7 & \pi \end{pmatrix}, \qquad C = \begin{pmatrix} 5 & 0 & \sqrt 3 \end{pmatrix}.$$
> $B$ è $3 \times 2$: $b_{12} = \sqrt 2$, $b_{32} = \pi$, la riga $B_2 = (0, -5)$, la colonna $B^1 = {}^t(1, 0, 7)$. $C$ è $1 \times 3$: una sola riga.

### Somma e prodotto per scalare

Due matrici $A = (a_{ij})$ e $B = (b_{ij})$ della **stessa taglia** si sommano componente per componente; anche il prodotto per scalare è definito componente per componente:

$$(A + B)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda A)_{ij} = \lambda a_{ij}.$$

In parole: la casella $(i, j)$ della somma è la somma delle caselle $(i, j)$, e $\lambda A$ moltiplica ogni casella per $\lambda$.

> [!ESEMPIO] · somma e multiplo di matrici
> $$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix} + \begin{pmatrix} 0 & -1 & 2 \\ 1 & 1 & -3 \end{pmatrix} = \begin{pmatrix} 1 + 0 & 2 - 1 & 3 + 2 \\ 4 + 1 & 5 + 1 & 6 - 3 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 5 \\ 5 & 6 & 3 \end{pmatrix},$$
> $$2\begin{pmatrix} 1 & -1 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -2 \\ 0 & 6 \end{pmatrix}.$$

L'insieme di tutte le matrici $m \times n$ a coefficienti in $\K$, con queste operazioni, si indica con $M(m, n, \K)$, oppure $M(m, n)$ quando il campo è sottinteso. Le dispense osservano che $M(m, n, \K)$ è uno spazio vettoriale. Il motivo è quello della lezione L05: le operazioni si fanno casella per casella, quindi ogni assioma si riduce a una proprietà del campo, una casella alla volta. In pratica una matrice $m \times n$ si comporta come un vettore di $\K^{mn}$ scritto su più righe. Il vettore nullo è la **matrice nulla**, con tutti i coefficienti $0$; l'opposto di $A$ è $-A$, con tutti i coefficienti cambiati di segno.

Infine, una matrice $m \times 1$ ha una sola colonna: è un vettore colonna. Quindi

$$M(m, 1, \K) = \K^m.$$

> [!TRAPPOLA] Solo matrici della stessa taglia
> $\begin{pmatrix} 1 & 2 \end{pmatrix} + \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ non ha senso: la prima è $1 \times 2$, la seconda $2 \times 1$. Il prodotto **tra** matrici esiste, ma è un'altra operazione, che non fa parte della struttura di spazio vettoriale: arriva nella lezione L08.

## Sottospazi vettoriali (pp. 26–27)

Guarda nel piano $\R^2$ la retta $r$ di equazione $y = 2x$. Contiene l'origine. Se prendi due suoi punti, per esempio $(1, 2)$ e $(-3, -6)$, la loro somma $(-2, -4)$ sta ancora su $r$. Se moltiplichi un suo punto per un numero, per esempio $5 \cdot (1, 2) = (5, 10)$, resti su $r$. Con la somma e il prodotto per scalare **non si esce mai** da $r$: $r$ è un piccolo spazio vettoriale dentro $\R^2$.

La retta $s$ di equazione $y = 2x + 1$, parallela alla prima, invece non funziona. Non passa per l'origine, perché $0 \neq 2 \cdot 0 + 1$. E la somma esce: $(0, 1)$ e $(1, 3)$ stanno su $s$, ma $(0, 1) + (1, 3) = (1, 4)$ no, perché $2 \cdot 1 + 1 = 3 \neq 4$.

```grafico
titolo: La retta $y = 2x$ passa per l'origine ed è un sottospazio; la retta $y = 2x + 1$ no: la somma di due suoi punti esce
x: -4 4
y: -3 5
retta: 0 0 1.5 3 | accento | $y = 2x$ | e
retta: 0 1 -1.5 -2 | rosa | tratteggio | $y = 2x + 1$ | o
punto: 0 0 | accento | $O$ | se
punto: 0 1 | rosa | $(0, 1)$ | o
punto: 1 3 | rosa | $(1, 3)$ | o
punto: 1 4 | ambra | $(1, 4)$ | no
```

Le dispense definiscono con precisione quando uno spazio vettoriale «ne contiene un altro».

> [!DEF] 6.2 · Sottospazio vettoriale
> Sia $V$ uno spazio vettoriale su un campo $\K$. Un **sottospazio vettoriale** di $V$ è un sottoinsieme $W \subset V$ che soddisfa i seguenti tre assiomi:
> 1. $0 \in W$;
> 2. se $v, v' \in W$, allora anche $v + v' \in W$;
> 3. se $v \in W$ e $\lambda \in \K$, allora $\lambda v \in W$.

Pezzo per pezzo:

- $W \subset V$: si parte da uno spazio vettoriale $V$ già noto e si prende una parte dei suoi vettori.
- **Assioma 1**: il vettore nullo **di $V$** deve stare in $W$. È il primo controllo, e il più rapido.
- **Assioma 2**: la somma di due vettori di $W$ non esce da $W$. Si dice che $W$ è **chiuso rispetto alla somma**.
- **Assioma 3**: ogni multiplo di un vettore di $W$, con **qualsiasi** scalare (anche negativo o zero), resta in $W$. Si dice che $W$ è **chiuso rispetto al prodotto per scalare**.

Con le operazioni «ereditate» da $V$, ogni sottospazio $W$ è esso stesso uno spazio vettoriale. Il perché, con i dettagli che le dispense lasciano sottintesi:

1. le operazioni restano in $W$, per gli assiomi 2 e 3;
2. gli assiomi 2–5 della Definizione 5.4, e le proprietà associativa e commutativa, valgono per tutti i vettori di $V$, quindi anche per quelli di $W$;
3. il vettore nullo sta in $W$ per l'assioma 1;
4. l'opposto di $v \in W$ sta in $W$: è $-v = (-1)v$ (lezione L05, esercizio 8), che è in $W$ per l'assioma 3.

### Il sottospazio banale e quello totale (p. 27)

Ogni spazio vettoriale $V$ ha sempre due sottospazi:

- il **sottospazio banale** $\{0\}$, formato dalla sola origine: $0 + 0 = 0$ e $\lambda 0 = 0$, quindi non si esce;
- il **sottospazio totale** $V$, formato da tutti i vettori.

Ogni altro sottospazio sta in mezzo:

$$\{0\} \subset W \subset V.$$

Un esempio già incontrato è $\K_k[x] \subset \K[x]$, formato dai polinomi di grado $\le k$ (Esercizio 5.7): contiene il polinomio nullo, e somme e multipli di polinomi di grado $\le k$ hanno ancora grado $\le k$.

> [!ESEMPIO] · la retta $y = 2x$, con le lettere
> Sia $W = \{(x, y) \in \R^2 \mid y = 2x\}$. Controlliamo i tre assiomi con vettori generici.
> 1. $(0, 0) \in W$, perché $0 = 2 \cdot 0$.
> 2. Se $(x, y)$ e $(x', y')$ stanno in $W$, cioè $y = 2x$ e $y' = 2x'$, la somma $(x + x', y + y')$ soddisfa $y + y' = 2x + 2x' = 2(x + x')$: sta in $W$.
> 3. Se $(x, y) \in W$ e $\lambda \in \R$, allora $\lambda y = \lambda \cdot 2x = 2(\lambda x)$: anche $(\lambda x, \lambda y)$ sta in $W$.
>
> Quindi $W$ è un sottospazio di $\R^2$.

> [!ESEMPIO] · tre insiemi che non sono sottospazi di $\R^2$
> - **$\{(x, y) \mid y = 2x + 1\}$**: non contiene $(0, 0)$. Fallisce l'assioma 1.
> - **Il primo quadrante $\{(x, y) \mid x \ge 0,\ y \ge 0\}$**: contiene l'origine ed è chiuso rispetto alla somma, ma $(-1) \cdot (1, 1) = (-1, -1)$ esce. Fallisce l'assioma 3.
> - **L'unione dei due assi $\{(x, y) \mid xy = 0\}$**: contiene l'origine ed è chiusa rispetto ai multipli, ma $(1, 0) + (0, 1) = (1, 1)$ esce, perché $1 \cdot 1 \neq 0$. Fallisce l'assioma 2.

> [!TRAPPOLA] Un solo assioma non basta
> Il primo quadrante è chiuso rispetto alla somma ma non ai multipli; l'unione degli assi è chiusa rispetto ai multipli ma non alla somma. Vanno controllati **tutti e tre** gli assiomi. Per dire di sì servono tutti e tre; per dire di no ne basta uno che fallisce, con un esempio concreto.

> [!OLTRE] · i sottospazi più comuni, dal libro di Martelli
> - **Sistemi lineari omogenei** (Proposizione 2.2.2). Le soluzioni di un sistema di equazioni lineari **con termine noto zero**, come $\{x + 2y - z = 0,\ x - y = 0\}$ in $\R^3$, formano un sottospazio. Il motivo: se $a_1 x_1 + \dots + a_n x_n = 0$ vale per $x$ e per $y$, vale anche per $x + y$ e per $\lambda x$, perché $a_1(x_1 + y_1) + \dots = 0 + 0 = 0$ e $a_1 (\lambda x_1) + \dots = \lambda \cdot 0 = 0$. Con un termine noto diverso da zero invece l'origine non è una soluzione (Osservazione 2.2.3).
> - **Polinomi che si annullano in un punto** (Proposizione 2.2.5). Fissato $a \in \K$, i polinomi con $p(a) = 0$ formano un sottospazio di $\K[x]$: $(p + q)(a) = 0 + 0 = 0$ e $(\lambda p)(a) = \lambda \cdot 0 = 0$. Quelli con $p(a) = 1$ no, perché non contengono il polinomio nullo (Osservazione 2.2.6).
> - **Intersezione** (Proposizione 2.2.11). Se $U$ e $W$ sono sottospazi, anche $U \cap W$ lo è. L'**unione** invece in generale no: l'unione dei due assi di $\R^2$ vista sopra è l'esempio del libro (Esempio 2.2.14, e l'esercizio 12).

## Matrici diagonali, triangolari, simmetriche e antisimmetriche (pp. 27–28)

Dentro lo spazio delle matrici ci sono molti sottospazi: si ottengono imponendo condizioni sui coefficienti. I più importanti riguardano le matrici **quadrate**.

> [!DEF] 6.3 · Matrici quadrate, diagonali, triangolari, simmetriche e antisimmetriche
> Una matrice $n \times n$ è detta **quadrata**. Una matrice $A$ quadrata $n \times n$ è:
> - **diagonale** se $a_{ij} = 0,\ \forall i \neq j$;
> - **triangolare superiore** se $a_{ij} = 0,\ \forall i > j$;
> - **triangolare inferiore** se $a_{ij} = 0,\ \forall i < j$;
> - **triangolare** se è triangolare inferiore o superiore;
> - **simmetrica** se $a_{ij} = a_{ji},\ \forall i, j$;
> - **antisimmetrica** se $a_{ij} = -a_{ji},\ \forall i, j$.

Pezzo per pezzo:

- Gli elementi $a_{11}, a_{22}, \dots, a_{nn}$, quelli con i due indici uguali, formano la **diagonale principale**: la linea che scende da in alto a sinistra a in basso a destra.
- **Diagonale**: tutto ciò che sta fuori dalla diagonale principale è zero. Sulla diagonale può esserci qualsiasi numero, anche $0$.
- **Triangolare superiore**: $i > j$ vuol dire «indice di riga maggiore di quello di colonna», cioè le caselle **sotto** la diagonale. Quelle devono essere zero; i numeri stanno sopra e sulla diagonale.
- **Triangolare inferiore**: al contrario, sono zero le caselle **sopra** la diagonale ($i < j$).
- **Simmetrica**: la casella $(i, j)$ è uguale alla casella $(j, i)$. La matrice è **speculare** rispetto alla diagonale principale.
- **Antisimmetrica**: la casella $(i, j)$ è l'opposto della casella $(j, i)$. Con $i = j$ la condizione dice $a_{ii} = -a_{ii}$, cioè $2a_{ii} = 0$, e dividendo per $2$ si ottiene $a_{ii} = 0$: sulla diagonale di una matrice antisimmetrica ci sono **solo zeri**. Le dispense lo osservano alla fine dell'Esempio 6.4 (p. 28).

> [!NOTA] Una precisazione sul campo
> Il passaggio da $2a_{ii} = 0$ ad $a_{ii} = 0$ divide per $2$, e si può fare nei campi del corso, $\Q$, $\R$ e $\C$. Nel campo $\{0, 1\}$ dell'Esercizio 5.9, dove $2 = 1 + 1 = 0$, invece no: lì $a = -a$ per ogni $a$, e una matrice antisimmetrica può avere la diagonale non nulla. Il libro di Martelli lo segnala in una nota al §2.2.14; le dispense sottintendono che il campo sia $\Q$, $\R$ o $\C$.

La forma generale di ciascuna classe, per le matrici $3 \times 3$ (le lettere sono numeri qualsiasi):

| diagonale | triangolare superiore | triangolare inferiore | simmetrica | antisimmetrica |
|---|---|---|---|---|
| $\begin{pmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix}$ | $\begin{pmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{pmatrix}$ | $\begin{pmatrix} a & 0 & 0 \\ b & c & 0 \\ d & e & f \end{pmatrix}$ | $\begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix}$ | $\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix}$ |

> [!ESEMPIO] 6.4 · Una matrice per ogni classe
> Le matrici seguenti sono, nell'ordine, diagonale, triangolare superiore, triangolare inferiore, simmetrica e antisimmetrica:
> $$\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}, \quad \begin{pmatrix} 1 & 9 \\ 0 & \sqrt 2 \end{pmatrix}, \quad \begin{pmatrix} -1 & 0 \\ 7 & 2 \end{pmatrix}, \quad \begin{pmatrix} -1 & 2 \\ 2 & 4 \end{pmatrix}, \quad \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}.$$
> Una stessa matrice può appartenere a più classi: per esempio
> $$\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$
> è diagonale, triangolare superiore, triangolare inferiore e simmetrica. La matrice nulla appartiene a tutte e cinque le classi.

Controlliamo l'esempio casella per casella, per le matrici $2 \times 2$, dove le caselle fuori dalla diagonale sono solo $a_{12}$ (sopra) e $a_{21}$ (sotto):

| Matrice | $a_{12}$ | $a_{21}$ | classe |
|---|---:|---:|---|
| $\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}$ | $0$ | $0$ | diagonale (e anche triangolare e simmetrica) |
| $\begin{pmatrix} 1 & 9 \\ 0 & \sqrt 2 \end{pmatrix}$ | $9$ | $0$ | triangolare superiore: è zero la casella sotto |
| $\begin{pmatrix} -1 & 0 \\ 7 & 2 \end{pmatrix}$ | $0$ | $7$ | triangolare inferiore: è zero la casella sopra |
| $\begin{pmatrix} -1 & 2 \\ 2 & 4 \end{pmatrix}$ | $2$ | $2$ | simmetrica: $a_{12} = a_{21}$ |
| $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ | $1$ | $-1$ | antisimmetrica: $a_{12} = -a_{21}$ e diagonale nulla |

La prima matrice è anche triangolare (superiore e inferiore) e simmetrica: la prima riga della tabella lo ricorda. Nell'elenco delle dispense ogni matrice è l'esempio della sua classe, ma non è detto che appartenga soltanto a quella.

### Cinque sottospazi di $M(n)$ (p. 28)

Lo spazio delle matrici quadrate $n \times n$ si indica con $M(n, \K)$, o più semplicemente $M(n)$. Le dispense indicano con

$$D(n), \qquad T^s(n), \qquad T^i(n), \qquad S(n), \qquad A(n)$$

i sottoinsiemi formati, rispettivamente, dalle matrici diagonali, triangolari superiori, triangolari inferiori, simmetriche e antisimmetriche.

> [!PROP] 6.5
> I sottoinsiemi $D(n)$, $T^s(n)$, $T^i(n)$, $S(n)$, $A(n)$ sono tutti sottospazi vettoriali di $M(n)$.

La spiegazione delle dispense: per ciascuno dei cinque sottoinsiemi basta verificare che la matrice nulla gli appartiene e che somma e prodotto per scalare preservano la proprietà che lo definisce. Eccola per esteso.

**Le matrici simmetriche $S(n)$.**
1. La matrice nulla è simmetrica: $0 = 0$ in ogni casella.
2. Se $A$ e $B$ sono simmetriche, cioè $a_{ij} = a_{ji}$ e $b_{ij} = b_{ji}$, allora
   $$(A + B)_{ij} = a_{ij} + b_{ij} = a_{ji} + b_{ji} = (A + B)_{ji}.$$
3. Se $A$ è simmetrica e $\lambda \in \K$, allora $(\lambda A)_{ij} = \lambda a_{ij} = \lambda a_{ji} = (\lambda A)_{ji}$.

**Le matrici antisimmetriche $A(n)$.** Stessi passaggi con il segno meno: $(A + B)_{ij} = a_{ij} + b_{ij} = -a_{ji} - b_{ji} = -(A + B)_{ji}$ e $(\lambda A)_{ij} = \lambda a_{ij} = -\lambda a_{ji} = -(\lambda A)_{ji}$.

**Le triangolari superiori $T^s(n)$.** Se $i > j$, allora $a_{ij} = 0$ e $b_{ij} = 0$, quindi $(A + B)_{ij} = 0 + 0 = 0$ e $(\lambda A)_{ij} = \lambda \cdot 0 = 0$: gli zeri sotto la diagonale restano zeri. Lo stesso per $T^i(n)$, con $i < j$, e per $D(n)$, con $i \neq j$.

> [!ESEMPIO] · la somma di due simmetriche è simmetrica
> $$\begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix} + \begin{pmatrix} 0 & -1 \\ -1 & 5 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 8 \end{pmatrix}, \qquad -3\begin{pmatrix} 0 & 4 \\ -4 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -12 \\ 12 & 0 \end{pmatrix}.$$
> La prima somma è ancora speculare rispetto alla diagonale; il multiplo di un'antisimmetrica è ancora antisimmetrico.

> [!NOTA] La trasposta, in anticipo
> Nella spiegazione della Proposizione 6.5 le dispense scrivono ${}^t(A + B) = A + B$ e ${}^t(\lambda A) = \lambda A$. Il simbolo ${}^tA$ è la **trasposta** di $A$, che si ottiene scambiando righe e colonne: $({}^tA)_{ij} = a_{ji}$. La definisce la lezione L08. Con questa notazione, $A$ è simmetrica se e solo se ${}^tA = A$, e antisimmetrica se e solo se ${}^tA = -A$.

> [!TRAPPOLA] «Triangolari» non è un sottospazio
> La Proposizione 6.5 parla di triangolari **superiori** e di triangolari **inferiori**, separatamente. L'insieme di tutte le matrici triangolari (superiori oppure inferiori) non è un sottospazio:
> $$\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix},$$
> somma di una triangolare superiore e di una inferiore, non è triangolare. È di nuovo il problema dell'unione di due sottospazi.

> [!OLTRE] · relazioni tra le cinque classi
> Il libro di Martelli (Esempio 2.2.13) nota che $D(n) = T^s(n) \cap T^i(n)$: una matrice è diagonale esattamente quando è triangolare sia superiore sia inferiore. E $S(n) \cap A(n) = \{0\}$: se $a_{ij} = a_{ji}$ e $a_{ij} = -a_{ji}$, allora $a_{ij} = -a_{ij}$, quindi $2a_{ij} = 0$ e $a_{ij} = 0$ (dividendo per $2$, come nella nota sopra: nel campo $\{0, 1\}$, dove $1 + 1 = 0$, simmetrico e antisimmetrico sono invece la stessa cosa).

## Combinazioni lineari (p. 28)

Con la somma e il prodotto per scalare si possono costruire nuovi vettori a partire da alcuni vettori dati: si moltiplica ciascuno per un numero e si sommano i risultati.

> [!DEF] Combinazione lineare (p. 28)
> Sia $V$ uno spazio vettoriale e siano $v_1, \dots, v_k \in V$. Una **combinazione lineare** dei vettori $v_1, \dots, v_k$ è un vettore del tipo
> $$v = \lambda_1 v_1 + \dots + \lambda_k v_k,$$
> dove $\lambda_1, \dots, \lambda_k \in \K$.

Pezzo per pezzo:

- I numeri $\lambda_1, \dots, \lambda_k$ si chiamano **coefficienti** della combinazione. Sono scalari qualsiasi: positivi, negativi, frazioni, anche zero.
- «Lineare» vuol dire che si usano **solo** le due operazioni dello spazio vettoriale: nessun prodotto tra vettori, nessun quadrato.
- Con tutti i coefficienti uguali a $0$ si ottiene sempre il vettore nullo; con $\lambda_i = 1$ e gli altri $0$ si ottiene $v_i$ stesso.

> [!ESEMPIO] · combinazioni in tre spazi diversi
> - In $\R^3$: $2\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 - 0 \\ 0 - 1 \\ 2 - 1 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$.
> - Tra i polinomi: $3(x^2 + 1) - 2(x - 1) = 3x^2 + 3 - 2x + 2 = 3x^2 - 2x + 5$.
> - Tra le matrici: $a\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} a & b \\ b & a \end{pmatrix}$, che è la forma delle matrici dell'Esercizio 6.9.

L'esempio delle dispense è in $\R^3$, con

$$v_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \qquad \lambda_1 v_1 + \lambda_2 v_2 = \begin{pmatrix} \lambda_1 \\ \lambda_2 \\ 0 \end{pmatrix}.$$

Al variare di $\lambda_1$ e $\lambda_2$ si ottiene **precisamente** il piano $z = 0$. «Precisamente» vuol dire due cose:

1. ogni combinazione ha la terza coordinata uguale a $0$, quindi sta nel piano $z = 0$;
2. viceversa, ogni punto $(a, b, 0)$ del piano si ottiene, con $\lambda_1 = a$ e $\lambda_2 = b$.

Nello strumento qui sotto $u$ e $v$ sono due vettori del piano e il punto giallo è la combinazione $\lambda u + \mu v$. Muovi i cursori $\lambda$ e $\mu$: con $u = (1, 2)$ e $v = (3, 1)$ il punto raggiunge qualsiasi posizione del piano. Poi trascina $v$ sulla retta di $u$, per esempio in $(2, 4)$: da quel momento le combinazioni restano sulla retta rossa, qualunque siano $\lambda$ e $\mu$.

```widget vettori
titolo: Le combinazioni lineari $\lambda u + \mu v$
u: 1 2
v: 3 1
modo: combinazione
modi: combinazione
lambda: 2
mu: -1
```

## Il sottospazio generato: Span (pp. 28–29)

L'esempio del piano $z = 0$ suggerisce di guardare **tutte insieme** le combinazioni lineari di alcuni vettori.

> [!DEF] 6.6 · Sottospazio generato
> Sia $V$ uno spazio vettoriale e $v_1, \dots, v_k \in V$ dei vettori arbitrari. Il **sottospazio generato** da $v_1, \dots, v_k$ è il sottoinsieme di $V$ formato da tutte le loro combinazioni lineari e viene indicato con $\Span(v_1, \dots, v_k)$. In simboli:
> $$\Span(v_1, \dots, v_k) = \{\lambda_1 v_1 + \dots + \lambda_k v_k \mid \lambda_1, \dots, \lambda_k \in \K\}.$$

Pezzo per pezzo:

- *Span* è una parola inglese: *to span* vuol dire, in questo contesto, «generare», «ricoprire».
- È un **insieme**, e di solito infinito: contiene una combinazione per ogni scelta dei coefficienti.
- Contiene i vettori di partenza (per $v_1$: $\lambda_1 = 1$ e gli altri coefficienti $0$) e il vettore nullo (tutti i coefficienti $0$).
- La barretta $\mid$ si legge «al variare di»: $\lambda_1, \dots, \lambda_k$ prendono tutti i valori possibili in $\K$.
- Si dice anche che $v_1, \dots, v_k$ **generano** $\Span(v_1, \dots, v_k)$, e che ne sono dei **generatori**.

Il nome «sottospazio generato» anticipa un fatto da dimostrare: lo Span è davvero un sottospazio.

> [!PROP] 6.7
> Il sottoinsieme $\Span(v_1, \dots, v_k)$ è un sottospazio vettoriale di $V$.

Dimostrazione (dalle dispense, con le giustificazioni). Chiamiamo $W = \Span(v_1, \dots, v_k)$ e controlliamo i tre assiomi della Definizione 6.2.

1. **$0 \in W$.** Con $\lambda_1 = \dots = \lambda_k = 0$ si ottiene $0v_1 + \dots + 0v_k = 0 + \dots + 0 = 0$, per la Proposizione 5.5. Quindi $0$ è una combinazione lineare dei $v_i$: sta in $W$.
2. **Chiuso rispetto alla somma.** Se $v, w \in W$, per definizione si scrivono come combinazioni:
   $$v = \lambda_1 v_1 + \dots + \lambda_k v_k, \qquad w = \mu_1 v_1 + \dots + \mu_k v_k.$$
   Sommando e raccogliendo ogni $v_i$ (proprietà associativa e commutativa della somma e assioma 3):
   $$v + w = (\lambda_1 + \mu_1)v_1 + \dots + (\lambda_k + \mu_k)v_k,$$
   che è ancora una combinazione lineare dei $v_i$, con coefficienti $\lambda_i + \mu_i$. Quindi $v + w \in W$.
3. **Chiuso rispetto al prodotto per scalare.** Se $v \in W$ e $\lambda \in \K$, per gli assiomi 2 e 4:
   $$\lambda v = \lambda(\lambda_1 v_1 + \dots + \lambda_k v_k) = (\lambda\lambda_1)v_1 + \dots + (\lambda\lambda_k)v_k \in W. \qquad \square$$

> [!ESEMPIO] 6.8 · Lo Span di un solo vettore
> Se $v$ è un singolo vettore, allora $\Span(v) = \{\lambda v \mid \lambda \in \K\}$: sono tutti i multipli di $v$. Per esempio, in $\R^2$,
> $$\Span\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \left\{ \begin{pmatrix} t \\ 2t \end{pmatrix} \;\middle|\; t \in \R \right\},$$
> che è la retta $y = 2x$.

Perché proprio la retta $y = 2x$? Un punto $(x, y)$ sta nello Span se esiste $t$ con $x = t$ e $y = 2t$. La prima equazione dice $t = x$; sostituendo nella seconda, $y = 2x$. Viceversa, se $y = 2x$, basta prendere $t = x$. È la retta dei multipli di $(1, 2)$ disegnata nella lezione L05.

Che forma può avere uno Span nel piano e nello spazio? Una tabella per orientarsi (il perché preciso arriva con la dimensione, nella lezione L07):

| Generatori | Span in $\R^2$ | Span in $\R^3$ |
|---|---|---|
| solo il vettore nullo | $\{0\}$ | $\{0\}$ |
| un vettore $v \neq 0$ | la retta per l'origine con la direzione di $v$ | la retta per l'origine con la direzione di $v$ |
| due vettori non multipli uno dell'altro | tutto $\R^2$ | il piano per l'origine che li contiene |
| due vettori multipli uno dell'altro (non entrambi nulli) | una retta | una retta |

> [!TRAPPOLA] $\Span(v_1, v_2)$ non è $\{v_1, v_2\}$
> $\{v_1, v_2\}$ è un insieme con **due** elementi; $\Span(v_1, v_2)$ contiene **tutte** le combinazioni, infinite se i vettori non sono nulli. E generatori diversi possono dare lo stesso Span: $\Span\big((1, 2)\big) = \Span\big((2, 4)\big) = \Span\big((-1, -2)\big)$, sempre la retta $y = 2x$.

> [!OLTRE] · lo Span è il più piccolo sottospazio che contiene i vettori
> Se un sottospazio $U$ contiene $v_1, \dots, v_k$, contiene anche tutti i loro multipli (assioma 3) e tutte le somme di multipli (assioma 2): quindi $\Span(v_1, \dots, v_k) \subset U$. Conseguenza pratica, utilissima nei quiz: **per mostrare che $\Span(v_1, \dots, v_k) \subset U$ basta controllare che ogni $v_i$ stia in $U$**. Per mostrare l'uguaglianza serve anche il contrario: ogni vettore di $U$ è una combinazione dei $v_i$.

### Un vettore sta nello Span? (pp. 29–30)

È la domanda dell'Esercizio 6.10, e una delle più frequenti di tutto il corso.

> [!METODO] · $u \in \Span(v_1, \dots, v_k)$?
> 1. Scrivi l'incognita: cerchi dei coefficienti $\lambda_1, \dots, \lambda_k$ con $\lambda_1 v_1 + \dots + \lambda_k v_k = u$.
> 2. Calcola la combinazione e uguaglia coordinata per coordinata (o coefficiente per coefficiente, per i polinomi): ottieni un **sistema lineare** nelle incognite $\lambda_i$.
> 3. Risolvi il sistema. Per ora con sostituzioni; dalla lezione L11 con il metodo di Gauss.
> 4. Se il sistema ha una soluzione, $u$ sta nello Span, e i $\lambda_i$ trovati lo dimostrano: sostituiscili e controlla. Se il sistema porta a una contraddizione, come $3 = 4$, $u$ non sta nello Span.

> [!ESEMPIO] · un polinomio nello Span di altri due
> Il polinomio $x^2 + 2x + 3$ sta in $\Span(x^2 + 1,\ x + 1)$? Cerchiamo $a, b$ con
> $$a(x^2 + 1) + b(x + 1) = ax^2 + bx + (a + b) = x^2 + 2x + 3.$$
> Uguagliando i coefficienti: $a = 1$ (di $x^2$), $b = 2$ (di $x$), $a + b = 3$ (termine noto). Le prime due danno $a = 1$ e $b = 2$, e la terza è soddisfatta: $1 + 2 = 3$. Quindi sì: $x^2 + 2x + 3 = (x^2 + 1) + 2(x + 1)$.
>
> Con $x^2 + 2x + 4$ invece la terza equazione diventerebbe $1 + 2 = 4$, falsa: quel polinomio **non** sta nello Span.

Per i sistemi più grandi lo strumento qui sotto fa i passaggi di Gauss al posto tuo (il metodo si impara nella lezione L11). Scrivi nelle colonne i vettori $v_1, \dots, v_k$ e, nell'ultima colonna, il vettore $u$ da provare. La matrice già inserita è quella dell'Esercizio 6.10 con $u = (1, 2, 3)$: lo strumento trova una sola soluzione, $x_1 = 1$ e $x_2 = 2$ (chiama $x_1, x_2$ quelli che qui sono $\lambda_1, \lambda_2$). Poi cambia l'ultimo numero da $3$ a $4$, cioè prova $w = (1, 2, 4)$, e premi «Calcola»: nessuna soluzione.

```widget gauss
titolo: Il vettore dell'ultima colonna sta nello Span delle altre colonne?
matrice: 1 0 1; 0 1 2; 1 1 3
modo: sistema
modi: sistema
```

> [!OLTRE] · forma parametrica e forma cartesiana
> Il libro di Martelli (§2.2.11) dà un nome ai due modi di descrivere un sottospazio di $\K^n$. In **forma parametrica** lo si descrive come Span di alcuni vettori: $\Span((1, 0, 1), (0, 1, 1)) = \{(s, t, s + t) \mid s, t \in \R\}$. In **forma cartesiana** lo si descrive con equazioni lineari omogenee: lo stesso insieme è il piano $z = x + y$. Nell'Esercizio 6.10 si passa dalla prima alla seconda. I due modi torneranno per rette e piani nelle lezioni L22–L24.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: le matrici e lo spazio $M(m, n, \K)$ nel **§2.2.5** (pp. 49–50); sottospazi, sottospazio banale e totale nei **§2.2.6–2.2.7** (pp. 50–51); sistemi omogenei nel **§2.2.8** (pp. 51–52); combinazioni lineari e Span nei **§2.2.9–2.2.10** (pp. 52–54, Proposizione 2.2.4 = Proposizione 6.7); forma cartesiana e parametrica e polinomi con restrizioni nei **§2.2.11–2.2.12** (pp. 54–55); matrici diagonali, triangolari, simmetriche e antisimmetriche nel **§2.2.14** (pp. 56–57, Proposizione 2.2.10 = Proposizione 6.5); intersezione e unione nei **§2.2.15–2.2.16** (pp. 57–58).

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla con 5 risposte (servono almeno 6 punti per far correggere i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate scritte a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **«È un sottospazio?»** È la domanda più frequente di questa parte del corso: appelli dell'08/02/2024 (domanda 2), del 10/07/2024 (domanda 2, l'insieme $O(2)$ delle matrici ortogonali, che non contiene la matrice nulla), del 03/06/2025 (domanda 2), del 05/02/2026 (domanda 2) e del 07/09/2026 (domanda 3). Due esempi, con la soluzione.

> [!ESAME] Appello dell'08/02/2024, domanda 2
> **Testo.** Quale dei seguenti insiemi **non** è un sottospazio di $\R_2[x]$? (a) $\{p(x) \in \R_2[x] \mid p(0) = 0\}$; (b) $\{(t + s)x^2 - tx - s \mid s, t \in \R\}$; (c) $\{p(x) = ax^2 + bx + c \mid a = 2c,\ b = 0\}$; (d) $\{(1 + t)x^2 + tx \mid t \in \R\}$; (e) $\{p(x) \in \R_2[x] \mid p(1) = 0 = p(2)\}$.
>
> **Soluzione.** È la (d). Per avere il polinomio nullo servirebbero $1 + t = 0$ e $t = 0$ insieme, cioè $t = -1$ e $t = 0$: impossibile. Quindi il polinomio nullo non c'è. Le altre sono sottospazi: (a) ed (e) sono polinomi che si annullano in certi punti; (b) si riscrive $t(x^2 - x) + s(x^2 - 1)$, quindi è $\Span(x^2 - x,\ x^2 - 1)$; (c) è definito da equazioni lineari omogenee nei coefficienti ($a - 2c = 0$, $b = 0$).

> [!ESAME] Appello del 03/06/2025, domanda 2
> **Testo.** Quale dei seguenti insiemi di punti $(x, y, z) \in \R^3$ è un sottospazio vettoriale di $\R^3$? (a) $x^2 - 2x + 1 = 0$; (b) $x + 2yz + 3z = 7$; (c) $-x + 7y + z = 5$; (d) $x + \frac y2 - 5\pi z = 0$; (e) $x + 3iy + 5z = 0$.
>
> **Soluzione.** È la (d): un'equazione lineare omogenea a coefficienti reali. Le altre: in (a) l'equazione è $(x - 1)^2 = 0$, cioè $x = 1$, e l'origine non la soddisfa; (b) e (c) hanno termine noto diverso da zero, quindi l'origine non c'è (in (b) c'è anche il prodotto $yz$). La (e) ha un coefficiente non reale e la soluzione ufficiale la scarta perché «non è definita sui numeri reali». A rigore, per un vettore reale l'equazione chiede che si annullino separatamente la parte reale e quella immaginaria, $x + 5z = 0$ e $3y = 0$, e l'insieme risultante è una retta per l'origine; ma l'intenzione della domanda è chiara, e la risposta attesa è la (d).

2. **«$U = \Span(\dots)$».** Un'altra domanda ricorrente chiede quale Span è uguale a un sottospazio di polinomi (24/01/2024, domanda 1; 15/01/2026, domanda 7).

> [!ESAME] Appello del 24/01/2024, domanda 1
> **Testo.** Siano $a(x) = x - 1$, $b(x) = x + 2$, $c(x) = 2x^2 - 2$, $d(x) = x^2 - x$, $e(x) = 2x^3 + 1$, $f(x) = x^3 - x^2$ in $\R_3[x]$, e sia $U = \{p(x) \in \R_3[x] \mid p(1) = 0\}$. Vale: (a) $U = \Span(a, c)$; (b) $U = \Span(a, c, f)$; (c) $U = \Span(c, d, e, f)$; (d) $U = \Span(b, e, f)$; (e) $U = \Span(a, c, d)$.
>
> **Soluzione.** È la (b), e la si può dimostrare con gli strumenti di questa lezione.
> - Scarta (c) e (d): $e(1) = 3 \neq 0$ e $b(1) = 3 \neq 0$, quindi $e, b \notin U$ e quegli Span escono da $U$.
> - Scarta (a) ed (e): i loro generatori hanno grado $\le 2$, quindi ogni loro combinazione ha grado $\le 2$; ma $U$ contiene $x^3 - 1$, di grado $3$.
> - Conferma (b). Da un lato $a(1) = c(1) = f(1) = 0$, quindi $\Span(a, c, f) \subset U$ (riquadro sullo Span più piccolo). Dall'altro, se $p(1) = 0$ allora $p(x) = (x - 1)q(x)$ con $q$ di grado $\le 2$ (lezione L04), quindi $p$ è una combinazione di $x - 1$, $x(x - 1) = x^2 - x$ e $x^2(x - 1) = x^3 - x^2$. E questi tre sono combinazioni di $a$, $c$, $f$: $x - 1 = a$, $x^2 - x = \frac 12 c - a$, $x^3 - x^2 = f$. Quindi $U \subset \Span(a, c, f)$.

3. **Le matrici speciali.** Nelle domande sulla dimensione compaiono $T^s(3)$ (24/01/2024, domanda 5) e $S(3)$ (15/01/2026, domanda 4): la dimensione si calcola nella lezione L07, ma che siano sottospazi è la Proposizione 6.5. L'appello dell'08/02/2024 (domanda 6) chiede per quali matrici $A + {}^tA = 0$: sono le antisimmetriche.
4. **Lo Span nei problemi.** Nei problemi da 11 punti lo Span serve per scrivere rette e piani: «calcolare la retta $r = \pi_1 \cap \pi_2$ in forma $r = P + \Span(v)$» (24/01/2024, problema 12). Lo vedrai nelle lezioni L22–L24.

> [!METODO] · «È un sottospazio?»: i segnali da riconoscere
> | Se l'insieme è descritto da… | allora… |
> |---|---|
> | equazioni lineari **omogenee** nelle coordinate o nei coefficienti ($x - 2y = 0$, $a = 2c$, $p(1) = 0$, $p(1) = p(2)$) | è un sottospazio |
> | un'equazione con termine noto diverso da zero ($x + y = 1$, $p(0) = 1$, $a_{11} = 1$) | non contiene lo zero: **no** |
> | disuguaglianze ($x \ge 0$, $b > 0$) | quasi sempre no: prova a moltiplicare per $-1$ |
> | prodotti o potenze delle incognite ($xy = 0$, $x = y^2$) | quasi sempre no: prova una somma o un multiplo |
> | un parametro con un pezzo fisso, come $\{(1 + t)x^2 + tx\}$ | quasi sempre no: con nessun $t$ si ottiene lo zero |
> | uno Span, o «tutte le combinazioni di…» | sì, sempre (Proposizione 6.7) |
>
> Per rispondere **no** scrivi un controesempio concreto; per rispondere **sì**, riscrivi l'insieme come Span oppure controlla i tre assiomi con vettori generici.

> [!TRAPPOLA] Gli errori più comuni
> - Controllare solo lo zero: il primo quadrante contiene lo zero ma non è un sottospazio.
> - Dimenticare gli scalari negativi nel controllo dell'assioma 3.
> - Pensare che «triangolari» (superiori oppure inferiori) sia un sottospazio: lo sono $T^s(n)$ e $T^i(n)$ separatamente.
> - Confondere $\Span(v_1, v_2)$ con l'insieme $\{v_1, v_2\}$.
> - Nel controllo «$u \in \Span$?» fermarsi alle prime equazioni senza verificare anche l'ultima.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: i tre assiomi di sottospazio; la tabella dei segnali «sì / no»; le forme generali $3 \times 3$ delle cinque classi di matrici; la definizione di $\Span$ e il metodo «$u \in \Span$?».

## Quiz

```quiz
D: Quale di questi insiemi **non** è un sottospazio di $\R_2[x]$?
- $\{p(x) \in \R_2[x] \mid p(2) = 0\}$
- $\{p(x) \in \R_2[x] \mid p(0) = p(1)\}$
- $\Span(x,\ x^2 + 1)$
+ $\{x^2 + t \mid t \in \R\}$
- $\{ax^2 + bx + c \mid a = b = c\}$
= Nessun polinomio della forma $x^2 + t$ è nullo, perché il coefficiente di $x^2$ è sempre $1$: manca lo zero. Gli altri sono sottospazi: $p(2) = 0$ e $p(0) - p(1) = 0$ sono condizioni lineari omogenee, uno Span lo è sempre, e $\{a = b = c\}$ è $\Span(x^2 + x + 1)$. Simile agli appelli dell'08/02/2024 e del 05/02/2026 (domanda 2).

D: Quale di questi insiemi è un sottospazio vettoriale di $\R^3$?
+ $\{(x, y, z) \mid x - 2y + 3z = 0\}$
- $\{(x, y, z) \mid x + y + z = 1\}$
- $\{(x, y, z) \mid xyz = 0\}$
- $\{(x, y, z) \mid x \ge 0\}$
- $\{(x, y, z) \mid x = y^2\}$
= È un'equazione lineare omogenea: se due vettori la soddisfano, la soddisfano anche la somma e i multipli. Controesempi per gli altri: l'origine non soddisfa $x + y + z = 1$; $(1, 1, 0) + (0, 0, 1) = (1, 1, 1)$ ha $xyz = 1$; $(-1)(1, 0, 0)$ ha $x < 0$; $(1, 1, 0)$ soddisfa $x = y^2$ ma $2 \cdot (1, 1, 0) = (2, 2, 0)$ no, perché $2 \neq 4$. Simile all'appello del 03/06/2025, domanda 2.

D: La matrice $\begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix}$ è:
+ antisimmetrica, e di nessuna delle altre quattro classi
- simmetrica
- triangolare superiore
- diagonale
- sia simmetrica sia antisimmetrica
= $a_{12} = 2 = -a_{21}$ e la diagonale è nulla: è antisimmetrica. Non è simmetrica ($2 \neq -2$), né triangolare (entrambe le caselle fuori dalla diagonale sono diverse da zero), né diagonale. Solo la matrice nulla è insieme simmetrica e antisimmetrica.

D: Quale di questi vettori appartiene a $\Span\big((1, 0, 1),\ (0, 1, 1)\big)$?
+ $(1, 1, 2)$
- $(1, 1, 1)$
- $(2, 1, 1)$
- $(0, 0, 1)$
- $(1, -1, 1)$
= Le combinazioni sono $a(1, 0, 1) + b(0, 1, 1) = (a, b, a + b)$: la terza coordinata è la somma delle prime due. Solo $(1, 1, 2)$ lo soddisfa, con $a = b = 1$. Negli altri la terza coordinata dovrebbe essere $2$, $3$, $0$ e $0$.

D: In $\R^2$, che cos'è $\Span\big((1, 2)\big)$?
+ La retta $y = 2x$.
- La retta $x = 2y$.
- La retta $y = x + 2$.
- Tutto il piano $\R^2$.
- L'insieme $\{(1, 2)\}$, con un solo elemento.
= $\Span((1, 2)) = \{(t, 2t) \mid t \in \R\}$ (Esempio 6.8): i punti con $y = 2x$. La retta $x = 2y$ non contiene $(1, 2)$; $y = x + 2$ non passa per l'origine, quindi non è nemmeno un sottospazio; un solo vettore non nullo genera una retta, non il piano.

D: L'insieme delle matrici $A \in M(2, \R)$ con $a_{11} = 1$ è:
- un sottospazio, perché è definito da un'equazione lineare
- un sottospazio, perché contiene la matrice identità
+ non un sottospazio: per esempio non contiene la matrice nulla
- un sottospazio, perché è chiuso rispetto al prodotto per scalare
- uguale a tutto $M(2, \R)$
= La matrice nulla ha $a_{11} = 0 \neq 1$. L'equazione $a_{11} = 1$ è lineare ma non omogenea; contenere l'identità non basta; e non è nemmeno chiuso rispetto ai multipli, perché $2A$ ha $a_{11} = 2$. Simile all'appello del 10/07/2024, domanda 2 ($O(2)$ non è un sottospazio perché non contiene la matrice nulla).

D: Per quale valore di $k$ il vettore $(1, k, 3)$ appartiene a $\Span\big((1, 0, 1),\ (0, 1, 1)\big)$?
N: 2
= Si cerca $(a, b, a + b) = (1, k, 3)$: quindi $a = 1$, $b = k$ e $1 + k = 3$, cioè $k = 2$. Controllo: $(1, 0, 1) + 2(0, 1, 1) = (1, 2, 3)$.

D: Sia $U = \{p(x) \in \R_2[x] \mid p(1) = 0\}$. Quale uguaglianza è vera?
+ $U = \Span(x - 1,\ x^2 - 1)$
- $U = \Span(x - 1)$
- $U = \Span(x + 1,\ x^2 - 1)$
- $U = \Span(x^2 - 1,\ x^2 - x,\ x^2 + x)$
- $U = \Span(1,\ x,\ x^2)$
= $x - 1$ e $x^2 - 1$ si annullano in $1$, quindi il loro Span sta in $U$. Viceversa, se $p(1) = 0$ allora $p(x) = (x - 1)(ax + b) = a(x^2 - x) + b(x - 1) = a(x^2 - 1) + (b - a)(x - 1)$. Le altre: $\Span(x - 1)$ non contiene $x^2 - 1$; $x + 1$ e $x^2 + x$ valgono $2$ in $1$, quindi non stanno in $U$; $\Span(1, x, x^2)$ è tutto $\R_2[x]$. Simile agli appelli del 24/01/2024 (domanda 1) e del 15/01/2026 (domanda 7).

D: Quale affermazione è vera?
+ Ogni sottospazio di $V$ contiene il vettore nullo di $V$.
- L'unione di due sottospazi è sempre un sottospazio.
- $\Span(v)$ contiene solo il vettore $v$.
- $\{0\}$ non è un sottospazio, perché ha un solo elemento.
- In $\R^2$ una retta che non passa per l'origine può essere un sottospazio.
= È l'assioma 1 della Definizione 6.2. L'unione dei due assi di $\R^2$ non è un sottospazio; $\Span(v)$ contiene tutti i multipli di $v$; $\{0\}$ è il sottospazio banale; una retta che non passa per l'origine non contiene lo zero.

D: L'insieme delle matrici $A \in M(2, \R)$ tali che $A + {}^tA = 0$ (dove ${}^tA$ è la trasposta, $({}^tA)_{ij} = a_{ji}$) è:
+ lo spazio $A(2)$ delle matrici antisimmetriche
- lo spazio $S(2)$ delle matrici simmetriche
- lo spazio $D(2)$ delle matrici diagonali
- l'insieme che contiene solo la matrice nulla
- l'insieme vuoto
= $A + {}^tA = 0$ vuol dire $a_{ij} + a_{ji} = 0$ per ogni $i, j$, cioè $a_{ij} = -a_{ji}$: è la definizione di matrice antisimmetrica. Per esempio $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ soddisfa la condizione e non è nulla. Simile all'appello dell'08/02/2024, domanda 6.
```

## Esercizi

::: esercizio medio Esercizio 6.9 delle dispense: le matrici del tipo $\begin{pmatrix} a & b \\ b & a \end{pmatrix}$
Consideriamo il sottoinsieme $W \subset M(2, \R)$ formato dalle matrici del tipo
$$\begin{pmatrix} a & b \\ b & a \end{pmatrix}, \qquad a, b \in \R.$$
Dimostra che $W$ è un sottospazio vettoriale di $M(2, \R)$ e verifica che
$$W = \Span\left(\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right).$$
::: soluzione
**$W$ è un sottospazio.** Controllo i tre assiomi della Definizione 6.2.
1. La matrice nulla sta in $W$: è il caso $a = b = 0$.
2. Somma: $\begin{pmatrix} a & b \\ b & a \end{pmatrix} + \begin{pmatrix} a' & b' \\ b' & a' \end{pmatrix} = \begin{pmatrix} a + a' & b + b' \\ b + b' & a + a' \end{pmatrix}$, che ha ancora la stessa forma, con $a + a'$ e $b + b'$ al posto di $a$ e $b$.
3. Multipli: $\lambda \begin{pmatrix} a & b \\ b & a \end{pmatrix} = \begin{pmatrix} \lambda a & \lambda b \\ \lambda b & \lambda a \end{pmatrix}$, stessa forma con $\lambda a$ e $\lambda b$.

**$W$ è lo Span delle due matrici.** Chiamo $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ e $J = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Per ogni $a, b$:
$$aI + bJ = \begin{pmatrix} a & 0 \\ 0 & a \end{pmatrix} + \begin{pmatrix} 0 & b \\ b & 0 \end{pmatrix} = \begin{pmatrix} a & b \\ b & a \end{pmatrix}.$$
Letta da sinistra a destra, dice che ogni combinazione di $I$ e $J$ sta in $W$; letta da destra a sinistra, che ogni elemento di $W$ è una combinazione di $I$ e $J$. Quindi $W = \Span(I, J)$.

Nota: con questa seconda parte il primo punto diventa automatico, perché ogni Span è un sottospazio (Proposizione 6.7). È il modo più rapido per dimostrare che un insieme è un sottospazio: riscriverlo come Span.
:::

::: esercizio medio Esercizio 6.10 delle dispense: uno Span in $\R^3$
In $\R^3$ siano
$$v_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$
Descrivi esplicitamente $\Span(v_1, v_2)$ e determina quali dei vettori
$$u = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \qquad w = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}$$
appartengono a questo sottospazio.
::: soluzione
**Descrizione esplicita.** Una combinazione generica è
$$a v_1 + b v_2 = \begin{pmatrix} a \\ 0 \\ a \end{pmatrix} + \begin{pmatrix} 0 \\ b \\ b \end{pmatrix} = \begin{pmatrix} a \\ b \\ a + b \end{pmatrix}, \qquad a, b \in \R.$$
Quindi $\Span(v_1, v_2) = \{(a, b, a + b) \mid a, b \in \R\}$: i vettori in cui la terza coordinata è la somma delle prime due. In forma cartesiana è il **piano** $z = x + y$, cioè $x + y - z = 0$, che passa per l'origine. Infatti un punto $(x, y, z)$ è del tipo $(a, b, a + b)$ esattamente quando $z = x + y$: basta prendere $a = x$ e $b = y$.

**Il vettore $u$.** Cerco $a, b$ con $(a, b, a + b) = (1, 2, 3)$: dalle prime due coordinate $a = 1$ e $b = 2$; la terza richiede $a + b = 3$, e $1 + 2 = 3$. Sì: $u = v_1 + 2v_2 \in \Span(v_1, v_2)$. Controllo: $(1, 0, 1) + 2(0, 1, 1) = (1, 2, 3)$.

**Il vettore $w$.** Di nuovo $a = 1$ e $b = 2$, ma la terza coordinata richiede $a + b = 4$, mentre $1 + 2 = 3$. Contraddizione: $w \notin \Span(v_1, v_2)$. Con l'equazione del piano: $1 + 2 - 4 = -1 \neq 0$.
:::

::: esercizio base Conti con le matrici
Siano $A = \begin{pmatrix} 2 & -1 & 0 \\ 1 & 3 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 1 & -2 \\ 0 & -1 & 5 \end{pmatrix}$.
(a) Di che taglia sono? Quanto valgono $a_{13}$, $a_{21}$, la riga $A_2$ e la colonna $A^2$?
(b) Calcola $A + B$ e $3A - 2B$.
(c) Trova la matrice $X$ tale che $A + X = B$.
::: soluzione
(a) Sono entrambe $2 \times 3$. $a_{13} = 0$ (riga 1, colonna 3), $a_{21} = 1$ (riga 2, colonna 1), $A_2 = (1, 3, 4)$, $A^2 = {}^t(-1, 3)$.

(b) Casella per casella:
$$A + B = \begin{pmatrix} 3 & 0 & -2 \\ 1 & 2 & 9 \end{pmatrix}, \qquad 3A - 2B = \begin{pmatrix} 6 - 2 & -3 - 2 & 0 + 4 \\ 3 - 0 & 9 + 2 & 12 - 10 \end{pmatrix} = \begin{pmatrix} 4 & -5 & 4 \\ 3 & 11 & 2 \end{pmatrix}.$$

(c) Sommando $-A$ a entrambi i membri, $X = B - A = \begin{pmatrix} -1 & 2 & -2 \\ -1 & -4 & 1 \end{pmatrix}$. Controllo: $A + X = B$.
:::

::: esercizio base Riconoscere le classi di matrici
Per ciascuna matrice di' a quali delle cinque classi della Definizione 6.3 appartiene:
$$M_1 = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \quad M_2 = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 5 & 6 \\ 3 & 6 & 0 \end{pmatrix}, \quad M_3 = \begin{pmatrix} 0 & 1 & -2 \\ -1 & 0 & 3 \\ 2 & -3 & 0 \end{pmatrix}, \quad M_4 = \begin{pmatrix} 1 & 0 & 0 \\ 4 & 2 & 0 \\ 5 & 6 & 3 \end{pmatrix}, \quad M_5 = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}.$$
::: soluzione
- $M_1$: fuori dalla diagonale solo zeri, quindi è **diagonale**; di conseguenza è anche **triangolare superiore**, **triangolare inferiore** e **simmetrica**. Non è antisimmetrica, perché la diagonale non è nulla.
- $M_2$: $a_{12} = a_{21} = 2$, $a_{13} = a_{31} = 3$, $a_{23} = a_{32} = 6$: **simmetrica**, e basta (ci sono numeri sia sopra sia sotto la diagonale).
- $M_3$: diagonale nulla e $a_{12} = 1 = -a_{21}$, $a_{13} = -2 = -a_{31}$, $a_{23} = 3 = -a_{32}$: **antisimmetrica**, e basta.
- $M_4$: sopra la diagonale solo zeri: **triangolare inferiore** (quindi triangolare), e basta.
- $M_5$: $a_{12} = 1 = -a_{21}$, ma la diagonale non è nulla, quindi non è antisimmetrica; non è simmetrica perché $1 \neq -1$; non è triangolare. Non appartiene a **nessuna** delle cinque classi.
:::

::: esercizio medio Sottospazi di $\R^3$
Di' quali dei seguenti sottoinsiemi di $\R^3$ sono sottospazi. Se sì, dimostralo; se no, trova un controesempio.
(a) $W_1 = \{(x, y, z) \mid x + 2y - z = 0\}$
(b) $W_2 = \{(x, y, z) \mid x = y = z\}$
(c) $W_3 = \{(x, y, z) \mid x + y + z = 1\}$
(d) $W_4 = \{(x, y, z) \mid x^2 = y^2\}$
(e) $W_5 = \{(t, t^2, 0) \mid t \in \R\}$
::: soluzione
(a) **Sì.** $(0, 0, 0)$ soddisfa l'equazione. Se $x + 2y - z = 0$ e $x' + 2y' - z' = 0$, sommando si ottiene $(x + x') + 2(y + y') - (z + z') = 0$; moltiplicando per $\lambda$, $\lambda x + 2\lambda y - \lambda z = 0$. È un piano per l'origine.

(b) **Sì.** Si riscrive $W_2 = \{(t, t, t) \mid t \in \R\} = \Span((1, 1, 1))$, che è un sottospazio per la Proposizione 6.7: la retta per l'origine con la direzione di $(1, 1, 1)$.

(c) **No.** L'origine non c'è: $0 + 0 + 0 = 0 \neq 1$.

(d) **No.** Contiene l'origine ed è chiuso rispetto ai multipli, ma non alla somma: $(1, 1, 0)$ e $(1, -1, 0)$ stanno in $W_4$ (in entrambi $x^2 = y^2 = 1$), la loro somma $(2, 0, 0)$ no, perché $4 \neq 0$. $W_4$ è l'unione dei due piani $x = y$ e $x = -y$.

(e) **No.** $(1, 1, 0) \in W_5$ (con $t = 1$), ma $2 \cdot (1, 1, 0) = (2, 2, 0)$ no: per avere prima coordinata $2$ serve $t = 2$, e allora la seconda sarebbe $4$.
:::

::: esercizio esame Come all'esame: sottospazi di $\R_2[x]$
Per ciascun sottoinsieme di $\R_2[x]$ stabilisci se è un sottospazio. Per quelli che lo sono, scrivilo come Span di pochi polinomi.
(a) $\{p(x) \in \R_2[x] \mid p(1) = 0\}$
(b) $\{p(x) \in \R_2[x] \mid p(0) = 1\}$
(c) $\{ax^2 + bx + c \mid a = c,\ b = 0\}$
(d) $\{ax^2 + bx + c \mid b > 0\}$
(e) $\{(1 + t)x^2 + tx \mid t \in \R\}$
(f) $\{(t + s)x^2 - tx - s \mid s, t \in \R\}$
::: soluzione
(a) **Sì.** Il polinomio nullo si annulla in $1$; se $p(1) = q(1) = 0$ allora $(p + q)(1) = 0$ e $(\lambda p)(1) = 0$. Per scriverlo come Span: $p(x) = ax^2 + bx + c$ ha $p(1) = a + b + c = 0$, cioè $c = -a - b$, quindi
$$p(x) = ax^2 + bx - a - b = a(x^2 - 1) + b(x - 1).$$
L'insieme è $\Span(x^2 - 1,\ x - 1)$.

(b) **No**: il polinomio nullo ha $p(0) = 0 \neq 1$.

(c) **Sì**: i polinomi sono $ax^2 + a = a(x^2 + 1)$, quindi l'insieme è $\Span(x^2 + 1)$.

(d) **No**: $x$ ha $b = 1 > 0$, ma $(-1) \cdot x = -x$ ha $b = -1$. (E manca anche il polinomio nullo, che ha $b = 0$.)

(e) **No**: per il polinomio nullo servirebbero $1 + t = 0$ e $t = 0$ insieme, impossibile.

(f) **Sì**: raccogliendo $t$ e $s$,
$$(t + s)x^2 - tx - s = t(x^2 - x) + s(x^2 - 1),$$
quindi l'insieme è $\Span(x^2 - x,\ x^2 - 1)$.

Nella lezione L07 calcolerai la dimensione di ciascuno: $2$, $1$ e $2$.
:::

::: esercizio base Span nel piano
(a) Descrivi $\Span((2, -1))$ con un'equazione.
(b) Descrivi $\Span((1, 2), (2, 4))$.
(c) Dimostra che $\Span((1, 0), (1, 1)) = \R^2$, trovando esplicitamente i coefficienti per un vettore qualsiasi $(a, b)$.
::: soluzione
(a) $\Span((2, -1)) = \{(2t, -t) \mid t \in \R\}$. Da $x = 2t$ e $y = -t$ si ricava $t = -y$ e $x = -2y$: è la retta $x + 2y = 0$.

(b) $(2, 4) = 2 \cdot (1, 2)$, quindi ogni combinazione $\lambda(1, 2) + \mu(2, 4) = (\lambda + 2\mu)(1, 2)$ è un multiplo di $(1, 2)$. Lo Span è la retta $y = 2x$, come $\Span((1, 2))$: il secondo vettore non aggiunge niente.

(c) Cerco $\lambda, \mu$ con $\lambda(1, 0) + \mu(1, 1) = (\lambda + \mu, \mu) = (a, b)$. Dalla seconda coordinata $\mu = b$; dalla prima $\lambda = a - b$. Quindi
$$(a, b) = (a - b)(1, 0) + b(1, 1)$$
per ogni $a, b$: ogni vettore del piano è una combinazione, e lo Span è tutto $\R^2$. Controllo con $(3, 5)$: $-2 \cdot (1, 0) + 5 \cdot (1, 1) = (3, 5)$.
:::

::: esercizio medio Uno Span con un parametro
Per quali valori di $k \in \R$ il vettore $u_k = (1, 2, k)$ appartiene a $\Span\big((1, 1, 0),\ (0, 1, 1)\big)$? Per quei valori scrivi $u_k$ come combinazione lineare.
::: soluzione
Cerco $a, b$ con $a(1, 1, 0) + b(0, 1, 1) = (a,\ a + b,\ b) = (1, 2, k)$. Coordinata per coordinata:
$$a = 1, \qquad a + b = 2, \qquad b = k.$$
Dalle prime due, $a = 1$ e $b = 1$. La terza allora richiede $k = 1$. Quindi $u_k$ sta nello Span **solo per $k = 1$**, e in quel caso
$$(1, 2, 1) = (1, 1, 0) + (0, 1, 1).$$
Per $k \neq 1$ la terza equazione contraddice le prime due. In forma cartesiana lo Span è $\{(a, a + b, b)\}$, cioè il piano $y = x + z$: $u_k$ ci sta quando $2 = 1 + k$.
:::

::: esercizio medio Le matrici antisimmetriche $3 \times 3$ come Span
Dimostra che $A(3)$, le matrici antisimmetriche $3 \times 3$, è lo Span di tre matrici, e trovale. Controlla con la tua descrizione che la somma di due matrici antisimmetriche è antisimmetrica.
::: soluzione
Una matrice antisimmetrica $3 \times 3$ ha la diagonale nulla, e le caselle sotto la diagonale sono gli opposti di quelle sopra. Quindi è determinata da $a = a_{12}$, $b = a_{13}$, $c = a_{23}$:
$$\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix} = a\begin{pmatrix} 0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ -1 & 0 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & 0 \end{pmatrix}.$$
Chiamando $F_1, F_2, F_3$ le tre matrici a destra, ogni matrice antisimmetrica è una loro combinazione e ogni loro combinazione è antisimmetrica: $A(3) = \Span(F_1, F_2, F_3)$. Per la Proposizione 6.7 è un sottospazio.

Somma: con $a, b, c$ e $a', b', c'$ si ottiene la matrice con $a + a'$, $b + b'$, $c + c'$ nelle stesse posizioni e i loro opposti sotto la diagonale, che ha ancora la forma antisimmetrica. Nella lezione L07 vedrai che $F_1, F_2, F_3$ sono una base, quindi $\dim A(3) = 3$ (è l'Esercizio 1 del Foglio 2 del tutorato 2025).
:::

::: esercizio esame Come all'esame: un sottospazio di $\R_3[x]$
Sia $U = \{p(x) \in \R_3[x] \mid p(1) = p(-1)\}$.
(1) Dimostra che $U$ è un sottospazio di $\R_3[x]$.
(2) Dimostra che $U = \Span(1,\ x^2,\ x^3 - x)$.
(3) Quali tra $x^2 - 1$, $x^3 + x$, $x^3 - x + 5$ e $x$ stanno in $U$?
::: soluzione
(1) Il polinomio nullo vale $0$ in $1$ e in $-1$, quindi sta in $U$. Se $p(1) = p(-1)$ e $q(1) = q(-1)$, allora $(p + q)(1) = p(1) + q(1) = p(-1) + q(-1) = (p + q)(-1)$ e $(\lambda p)(1) = \lambda p(1) = \lambda p(-1) = (\lambda p)(-1)$. I tre assiomi valgono.

(2) Scrivo $p(x) = ax^3 + bx^2 + cx + d$. Allora
$$p(1) = a + b + c + d, \qquad p(-1) = -a + b - c + d.$$
La condizione $p(1) = p(-1)$ diventa $a + c = -a - c$, cioè $2a + 2c = 0$, cioè $c = -a$. Quindi i polinomi di $U$ sono
$$ax^3 + bx^2 - ax + d = a(x^3 - x) + b\,x^2 + d \cdot 1,$$
con $a, b, d$ qualsiasi: esattamente le combinazioni di $x^3 - x$, $x^2$ e $1$. Quindi $U = \Span(1, x^2, x^3 - x)$.

(3) Basta controllare la condizione $c = -a$ (coefficiente di $x$ uguale all'opposto di quello di $x^3$), oppure calcolare $p(1)$ e $p(-1)$.
- $x^2 - 1$: $a = 0$, $c = 0$. **Sta in $U$** ($p(1) = p(-1) = 0$).
- $x^3 + x$: $a = 1$, $c = 1 \neq -1$. **Non sta in $U$** ($p(1) = 2$, $p(-1) = -2$).
- $x^3 - x + 5$: $a = 1$, $c = -1$. **Sta in $U$** ($p(1) = p(-1) = 5$).
- $x$: $a = 0$, $c = 1 \neq 0$. **Non sta in $U$** ($p(1) = 1$, $p(-1) = -1$).

Il quiz dell'appello del 15/01/2026 (domanda 7) chiede proprio quale Span è uguale a questo $U$: tra le risposte c'è $\Span(x^3 - x,\ x^2 - 1,\ x^2 + 1)$, che coincide con $\Span(1, x^2, x^3 - x)$ perché $1 = \frac 12\big((x^2 + 1) - (x^2 - 1)\big)$ e $x^2 = \frac 12\big((x^2 + 1) + (x^2 - 1)\big)$.
:::

::: esercizio esame Come all'esame: sottoinsiemi di $M(2, \R)$
Per ciascun sottoinsieme di $M(2, \R)$ stabilisci se è un sottospazio; se lo è, scrivilo come Span.
(a) $W_1 = \{A \mid a_{11} + a_{22} = 0\}$
(b) $W_2 = \{A \mid a_{11} a_{22} = 0\}$
(c) $W_3 = \{A \mid a_{12} = 2a_{21}\}$
(d) $W_4 = \{A \mid A \text{ è simmetrica e } a_{11} = 1\}$
::: soluzione
(a) **Sì.** La condizione è lineare omogenea nei coefficienti. Da $a_{22} = -a_{11}$:
$$\begin{pmatrix} a & b \\ c & -a \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix},$$
quindi $W_1$ è lo Span di queste tre matrici.

(b) **No.** $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ e $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ stanno in $W_2$ (il prodotto $a_{11}a_{22}$ vale $0$), ma la loro somma è l'identità, con $a_{11}a_{22} = 1$.

(c) **Sì.** Condizione lineare omogenea; posto $a_{21} = t$, $a_{12} = 2t$:
$$\begin{pmatrix} a & 2t \\ t & d \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + t\begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} + d\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}.$$

(d) **No.** La matrice nulla ha $a_{11} = 0 \neq 1$.
:::

::: esercizio difficile Intersezione e unione di sottospazi
Siano $U$ e $W$ sottospazi di uno spazio vettoriale $V$.
(a) Dimostra che $U \cap W$ è un sottospazio.
(b) Mostra con un esempio in $\R^2$ che $U \cup W$ può non essere un sottospazio.
(c) Dimostra che $U \cup W$ è un sottospazio se e solo se $U \subset W$ oppure $W \subset U$.
::: soluzione
(a) $0 \in U$ e $0 \in W$, quindi $0 \in U \cap W$. Se $v, v' \in U \cap W$, allora $v + v' \in U$ (perché $U$ è un sottospazio) e $v + v' \in W$ (perché lo è $W$): quindi $v + v' \in U \cap W$. Lo stesso per $\lambda v$.

(b) $U = \Span((1, 0))$ (l'asse $x$) e $W = \Span((0, 1))$ (l'asse $y$): $(1, 0) + (0, 1) = (1, 1)$ non sta su nessuno dei due assi.

(c) Se $U \subset W$, allora $U \cup W = W$, che è un sottospazio; lo stesso se $W \subset U$.

Viceversa, supponi che $U \cup W$ sia un sottospazio ma che nessuno dei due contenga l'altro: esistono allora $u \in U$ con $u \notin W$ e $w \in W$ con $w \notin U$. La somma $u + w$ sta in $U \cup W$, quindi sta in $U$ oppure in $W$.
- Se $u + w \in U$, allora $w = (u + w) - u \in U$, perché $U$ è chiuso rispetto a somme e multipli: contraddizione.
- Se $u + w \in W$, allora $u = (u + w) - w \in W$: contraddizione.

Quindi uno dei due contiene l'altro. È l'Esercizio 2.2.15 del libro di Martelli.
:::

## Domande di ripasso

::: domanda Che cos'è una matrice $m \times n$, e che cosa indicano $a_{ij}$, $A_i$ e $A^j$?
È una tabella di $mn$ numeri di $\K$ con $m$ righe e $n$ colonne. $a_{ij}$ è il coefficiente in riga $i$ e colonna $j$; $A_i$ è la riga $i$; $A^j$ è la colonna $j$ (l'indice in alto non è una potenza).
:::

::: domanda Perché $M(m, n, \K)$ è uno spazio vettoriale, e chi è il suo vettore nullo?
Perché somma e prodotto per scalare si fanno casella per casella, e ogni assioma si riduce alla stessa proprietà nel campo, una casella alla volta. Il vettore nullo è la matrice nulla.
:::

::: domanda Quali sono i tre assiomi di sottospazio?
$W \subset V$ è un sottospazio se (1) $0 \in W$; (2) $v, v' \in W \Rightarrow v + v' \in W$; (3) $v \in W$, $\lambda \in \K \Rightarrow \lambda v \in W$.
:::

::: domanda Perché un sottospazio è a sua volta uno spazio vettoriale?
Le operazioni restano in $W$ (assiomi 2 e 3); le proprietà di calcolo valgono in tutto $V$, quindi anche in $W$; lo zero sta in $W$ (assioma 1); l'opposto di $v$ è $(-1)v$, che sta in $W$ per l'assioma 3.
:::

::: domanda Quali sono i sottospazi di $V$ sempre presenti?
Il sottospazio banale $\{0\}$ e il sottospazio totale $V$; ogni sottospazio $W$ soddisfa $\{0\} \subset W \subset V$.
:::

::: domanda Perché la retta $y = 2x + 1$ non è un sottospazio di $\R^2$, mentre $y = 2x$ sì?
$y = 2x + 1$ non passa per l'origine (e la somma di due suoi punti esce dalla retta). $y = 2x$ contiene l'origine ed è chiusa rispetto a somme e multipli: è $\Span((1, 2))$.
:::

::: domanda Definisci matrice diagonale, triangolare superiore, simmetrica e antisimmetrica.
Diagonale: $a_{ij} = 0$ per $i \neq j$. Triangolare superiore: $a_{ij} = 0$ per $i > j$ (zeri sotto la diagonale). Simmetrica: $a_{ij} = a_{ji}$. Antisimmetrica: $a_{ij} = -a_{ji}$, e quindi diagonale nulla.
:::

::: domanda Perché sulla diagonale di una matrice antisimmetrica ci sono solo zeri?
Con $i = j$ la condizione $a_{ij} = -a_{ji}$ diventa $a_{ii} = -a_{ii}$, cioè $2a_{ii} = 0$, e dividendo per $2$ (lo si può fare in $\Q$, $\R$ e $\C$) si ottiene $a_{ii} = 0$.
:::

::: domanda Le matrici triangolari (superiori oppure inferiori) formano un sottospazio?
No: la somma di una triangolare superiore e di una inferiore può non essere triangolare, per esempio $\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$. Sono sottospazi $T^s(n)$ e $T^i(n)$ separatamente.
:::

::: domanda Che cos'è una combinazione lineare? Che cos'è $\Span(v_1, \dots, v_k)$?
Una combinazione lineare è un vettore $\lambda_1 v_1 + \dots + \lambda_k v_k$ con scalari $\lambda_i$ qualsiasi. $\Span(v_1, \dots, v_k)$ è l'insieme di **tutte** queste combinazioni, al variare dei coefficienti.
:::

::: domanda Ripeti la dimostrazione che lo Span è un sottospazio.
Con tutti i coefficienti nulli si ottiene $0$. La somma di due combinazioni è la combinazione con coefficienti $\lambda_i + \mu_i$. Un multiplo di una combinazione è la combinazione con coefficienti $\lambda\lambda_i$.
:::

::: domanda Come si decide se un vettore $u$ sta in $\Span(v_1, \dots, v_k)$?
Si cercano $\lambda_1, \dots, \lambda_k$ con $\lambda_1 v_1 + \dots + \lambda_k v_k = u$: uguagliando le coordinate si ottiene un sistema lineare. Se ha soluzione $u$ sta nello Span, altrimenti no.
:::

::: domanda Come si dimostra in fretta che un insieme è un sottospazio?
Riscrivendolo come Span di alcuni vettori: ogni Span è un sottospazio per la Proposizione 6.7. Per esempio $\{(t + s)x^2 - tx - s\} = \Span(x^2 - x, x^2 - 1)$.
:::

## Glossario

```glossario
Matrice $m \times n$ | Tabella di $mn$ elementi di $\K$ con $m$ righe e $n$ colonne; $a_{ij}$ è il coefficiente in riga $i$ e colonna $j$.
Righe e colonne $A_i$, $A^j$ | $A_i$ è la riga $i$ di $A$, $A^j$ la colonna $j$; l'indice in alto non è una potenza.
$M(m, n, \K)$ | Lo spazio vettoriale delle matrici $m \times n$ a coefficienti in $\K$; $M(m, 1, \K) = \K^m$.
Matrice quadrata, $M(n)$ | Matrice $n \times n$; $M(n) = M(n, n, \K)$.
Diagonale principale | Gli elementi $a_{11}, a_{22}, \dots, a_{nn}$.
Matrice diagonale | Quadrata con $a_{ij} = 0$ per $i \neq j$; spazio $D(n)$.
Triangolare superiore / inferiore | Quadrata con zeri sotto la diagonale ($a_{ij} = 0$ per $i > j$, spazio $T^s(n)$) o sopra ($i < j$, spazio $T^i(n)$).
Matrice simmetrica | $a_{ij} = a_{ji}$ per ogni $i, j$; spazio $S(n)$. Equivale a ${}^tA = A$.
Matrice antisimmetrica | $a_{ij} = -a_{ji}$ per ogni $i, j$, quindi diagonale nulla; spazio $A(n)$. Equivale a ${}^tA = -A$.
Sottospazio vettoriale | Sottoinsieme $W \subset V$ con $0 \in W$, chiuso rispetto alla somma e al prodotto per scalare.
Chiuso rispetto a un'operazione | Applicando l'operazione a elementi dell'insieme si resta nell'insieme.
Sottospazio banale e totale | $\{0\}$ e $V$ stesso: ogni sottospazio sta tra i due.
Combinazione lineare | Un vettore $\lambda_1 v_1 + \dots + \lambda_k v_k$, con coefficienti $\lambda_i \in \K$.
Coefficienti | Gli scalari $\lambda_1, \dots, \lambda_k$ di una combinazione lineare.
Span, sottospazio generato | $\Span(v_1, \dots, v_k)$: l'insieme di tutte le combinazioni lineari dei $v_i$; è un sottospazio.
Generatori | Vettori $v_1, \dots, v_k$ tali che $W = \Span(v_1, \dots, v_k)$.
Trasposta ${}^tA$ | La matrice con righe e colonne scambiate, $({}^tA)_{ij} = a_{ji}$ (lezione L08).
Forma parametrica e cartesiana | Un sottospazio di $\K^n$ descritto come Span oppure con equazioni lineari omogenee.
```

## Checklist

```checklist
- So leggere una matrice: taglia, coefficiente $a_{ij}$, righe $A_i$ e colonne $A^j$.
- So sommare matrici della stessa taglia e moltiplicarle per uno scalare.
- So enunciare i tre assiomi di sottospazio e spiegare perché un sottospazio è uno spazio vettoriale.
- So dimostrare che un insieme è un sottospazio controllando i tre assiomi con vettori generici.
- So trovare un controesempio quando un insieme non è un sottospazio (manca lo zero, la somma esce, un multiplo esce).
- So riconoscere le matrici diagonali, triangolari, simmetriche e antisimmetriche e scriverne la forma generale $3 \times 3$.
- So dimostrare che $S(n)$ e $A(n)$ sono sottospazi, e perché «triangolari» non lo è.
- So calcolare una combinazione lineare di vettori, polinomi e matrici.
- So dire che cos'è $\Span(v_1, \dots, v_k)$ e dimostrare che è un sottospazio.
- So decidere se un vettore sta in uno Span impostando e risolvendo il sistema dei coefficienti.
- So riscrivere un sottospazio definito da condizioni come Span di pochi vettori.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 6 «Spazi vettoriali II», pp. 26–30: lo spazio delle matrici e le sezioni 6.A–6.D seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni, esempi ed esercizi mantengono la loro numerazione (Definizioni 6.1, 6.2, 6.3 e 6.6, Esempi 6.4 e 6.8, Proposizioni 6.5 e 6.7, Esercizi 6.9 e 6.10).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §2.2.5–2.2.16 (matrici, sottospazi, sistemi omogenei, combinazioni lineari e Span, forma parametrica e cartesiana, polinomi con restrizioni, matrici speciali, intersezione e unione di sottospazi, Esercizio 2.2.15).
- **Appelli citati** (testi e soluzioni sul Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (domande 1 e 5, problema 12), 08/02/2024 (domande 2 e 6), 10/07/2024 (domanda 2), 03/06/2025 (domanda 2), 15/01/2026 (domande 4 e 7), 05/02/2026 (domanda 2), 07/09/2026 (domanda 3). Le domande del 24/01/2024 (1), dell'08/02/2024 (2) e del 03/06/2025 (2) sono riportate con soluzioni scritte per questi appunti. Foglio di esercizi 2 del tutorato 2025 (Buzano, Radeschi), esercizi 1 e 2, come modello di due esercizi.
- Le parti **«Oltre le dispense»** (sistemi omogenei, polinomi che si annullano in un punto, intersezione e unione, relazioni tra le classi di matrici, lo Span come più piccolo sottospazio, forma parametrica e cartesiana, il metodo per l'esame e gli esercizi 3–12) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
