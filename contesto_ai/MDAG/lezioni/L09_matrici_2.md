---
corso: MDAG
modulo: AG
lezione: L09
titolo: Matrici II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L09
descrizione: >-
  Appunti della lezione L09 di Algebra lineare e Geometria (MDAG, parte 2): il determinante di una matrice quadrata
  definito con le permutazioni, le formule per le matrici 2×2 e 3×3, matrici triangolari e matrice identità, lo
  sviluppo di Laplace e le prime proprietà del determinante, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Il determinante è un numero che si calcola da una matrice quadrata e che dice moltissimo su di essa. Qui impari a
  calcolarlo in tutti i modi che servono: la definizione con le permutazioni, le formule per $2 \times 2$ e
  $3 \times 3$, il caso facile delle matrici triangolari, lo sviluppo di Laplace lungo la riga o la colonna più
  comoda, e che cosa succede moltiplicando una riga per un numero.
materiale: dispense
scheda:
  Dispense: lezione 9 · pp. 41–45
  Libro: Martelli, §3.3.1–3.3.4 e §3.3.10
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 100–130 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 9 «Matrici II»; B. Martelli, Geometria e algebra lineare, §3.3.1–3.3.4, §3.3.10 e §3.4.6
appunti_html: appunti/MDAG/L09_matrici_2.html
genera_html: true
---

## In breve

- Il **determinante** $\det A$ è un numero associato a ogni matrice **quadrata**. Per le matrici non quadrate non esiste.
- Per le $2 \times 2$: $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$. In valore assoluto è l'area del parallelogramma che ha per lati le colonne.
- La definizione generale è una somma su tutte le $n!$ **permutazioni** $\sigma$ di $\{1, \dots, n\}$: ogni addendo è un prodotto $a_{1\sigma(1)} \cdots a_{n\sigma(n)}$ che prende un numero da ogni riga e da ogni colonna, con il segno $\sgn(\sigma) = \pm 1$.
- Per le $3 \times 3$ gli addendi sono sei, tre col più e tre col meno (si ricordano con la regola di Sarrus).
- Per una matrice **triangolare** il determinante è il prodotto dei numeri sulla diagonale; in particolare $\det I_n = 1$. Inoltre $\det({}^tA) = \det A$.
- **Sviluppo di Laplace**: $\det A = \sum_j (-1)^{i+j} a_{ij} \det C_{ij}$ lungo una riga $i$ qualsiasi, e lo stesso lungo una colonna. I segni $(-1)^{i+j}$ vanno **a scacchiera**; conviene la riga o la colonna con più zeri.
- Una riga (o colonna) di zeri dà $\det A = 0$; moltiplicare una riga per $c$ moltiplica il determinante per $c$; quindi $\det(cA) = c^n \det A$.
- All'esame: «il determinante di $A$ è…» con matrici $4 \times 4$ o $5 \times 5$ piene di zeri, con $\pi$ ed $e$ da raccogliere, oppure il tranello della matrice non quadrata.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Il determinante di una matrice quadrata (pp. 41–42)

### Il caso $2 \times 2$: un numero che misura un'area

Prendi la matrice $A = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$ e disegna le sue colonne $A^1 = {}^t(3, 1)$ e $A^2 = {}^t(1, 2)$ come frecce nel piano. Insieme formano un parallelogramma. Quanto è grande?

```grafico
titolo: Il parallelogramma con lati ${}^t(3, 1)$ e ${}^t(1, 2)$ ha area $3 \cdot 2 - 1 \cdot 1 = 5$
x: -0.5 4.5
y: -0.5 3.5
poligono: 0 0 3 1 4 3 1 2 | verde
vettore: 3 1 | accento | spesso | $A^1$ | se
vettore: 1 2 | blu | spesso | $A^2$ | no
```

Il parallelogramma sta dentro il rettangolo $[0, 4] \times [0, 3]$, di area $12$. Togliendo i pezzi che avanzano (due triangoli di area $\frac{3 \cdot 1}2$, due di area $\frac{1 \cdot 2}2$ e due quadratini $1 \times 1$) resta $12 - 3 - 2 - 2 = 5$. Lo stesso numero si ottiene in un colpo con la formula

$$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc, \qquad \det \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix} = 3 \cdot 2 - 1 \cdot 1 = 5.$$

Questo numero è il **determinante**. Per le matrici più grandi la formula si complica, e per scriverla servono le permutazioni.

> [!OLTRE] · il determinante misura aree e volumi
> Martelli (§3.3.10) mostra che per una matrice $2 \times 2$ reale $|\det A|$ è l'area del parallelogramma che ha per lati le due colonne, e per una $3 \times 3$ è il volume del parallelepipedo che ha per spigoli le tre colonne. Il **segno** dice come sono orientate le colonne: se scambi le due colonne ottieni $\det \begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix} = 1 - 6 = -5$, stessa area ma segno opposto. Se le colonne sono parallele, il parallelogramma si schiaccia su un segmento e il determinante vale $0$. Ne riparliamo alla fine della lezione, con uno strumento interattivo.

### Permutazioni e segno

Una **permutazione** di $\{1, \dots, n\}$ è un modo di rimettere in fila i numeri da 1 a $n$, ciascuno una e una sola volta. Le dispense scrivono una permutazione $\sigma$ elencando i suoi valori tra parentesi quadre:

$$\sigma = [\sigma(1)\ \sigma(2)\ \cdots\ \sigma(n)].$$

Per esempio $\sigma = [2\ 3\ 1]$ è la permutazione con $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$. L'insieme di tutte le permutazioni di $\{1, \dots, n\}$ si chiama $S_n$ e ha $n! = 1 \cdot 2 \cdots n$ elementi (le vedrai in dettaglio nella parte di Matematica Discreta del corso): $S_2$ ne ha $2! = 2$, $S_3$ ne ha $3! = 6$, $S_4$ ne ha $4! = 24$.

- Una **trasposizione** è una permutazione che scambia due elementi e lascia fermi tutti gli altri, come $[2\ 1\ 3]$ (scambia 1 e 2) o $[3\ 2\ 1]$ (scambia 1 e 3).
- Ogni permutazione si ottiene da $[1\ 2\ \cdots\ n]$ con una sequenza di scambi. Se ne servono $k$, il **segno** è $\sgn(\sigma) = (-1)^k$: $+1$ se gli scambi sono in numero pari, $-1$ se sono dispari. Si può arrivare alla stessa permutazione con sequenze diverse, ma il numero di scambi ha sempre la stessa parità (lo dimostra la Matematica Discreta), quindi il segno è ben definito.
- $\sgn(\mathrm{id}) = +1$ (zero scambi) e ogni trasposizione ha segno $-1$.

Le sei permutazioni di $S_3$, con il numero di scambi (di due posti della lista) che le producono da $[1\ 2\ 3]$:

| $\sigma$ | Come si ottiene da $[1\ 2\ 3]$ | Scambi | $\sgn(\sigma)$ |
|---|---|--:|--:|
| $[1\ 2\ 3] = \mathrm{id}$ | nessuno scambio | 0 | $+1$ |
| $[1\ 3\ 2]$ | scambio il secondo e il terzo posto | 1 | $-1$ |
| $[3\ 2\ 1]$ | scambio il primo e il terzo posto | 1 | $-1$ |
| $[2\ 1\ 3]$ | scambio il primo e il secondo posto | 1 | $-1$ |
| $[2\ 3\ 1]$ | $[1\ 2\ 3] \to [2\ 1\ 3] \to [2\ 3\ 1]$ | 2 | $+1$ |
| $[3\ 1\ 2]$ | $[1\ 2\ 3] \to [1\ 3\ 2] \to [3\ 1\ 2]$ | 2 | $+1$ |

> [!OLTRE] · il segno contando le inversioni
> Un modo veloce per trovare il segno: conta le **inversioni**, cioè le coppie di numeri in cui un numero più grande sta prima di uno più piccolo. Se sono in numero pari il segno è $+1$, se dispari è $-1$. In $[3\ 1\ 2]$ le inversioni sono $(3, 1)$ e $(3, 2)$: due, segno $+1$. In $[2\ 1\ 4\ 3]$ sono $(2, 1)$ e $(4, 3)$: segno $+1$. In $[3\ 2\ 1]$ sono $(3, 2)$, $(3, 1)$, $(2, 1)$: tre, segno $-1$.

### La definizione

> [!DEF] 9.1 · Determinante
> Sia $A$ una matrice quadrata $n \times n$. Il **determinante** di $A$ è il numero
> $$\det A = \sum_{\sigma \in S_n} \sgn(\sigma)\, a_{1\sigma(1)} \cdots a_{n\sigma(n)}.$$
> Qui $S_n$ indica l'insieme delle $n!$ permutazioni di $\{1, \dots, n\}$: questa è una sommatoria su $n!$ elementi. Il termine $\sgn(\sigma) = \pm 1$ indica il segno della permutazione $\sigma$ ed è $1$ oppure $-1$ a seconda di $\sigma$. Se $\sigma$ è un prodotto di $k$ trasposizioni (permutazioni che scambiano due elementi e lasciano tutti gli altri elementi), allora $\sgn(\sigma) = (-1)^k$. La permutazione $\sigma$ si indica con il simbolo $[\sigma(1) \cdots \sigma(n)]$.

Pezzo per pezzo:

- **Solo matrici quadrate.** La definizione usa lo stesso $n$ per le righe e per le colonne: una matrice $2 \times 3$ non ha determinante.
- **Un addendo per ogni permutazione.** Per ogni $\sigma \in S_n$ si moltiplicano $n$ numeri: $a_{1\sigma(1)}$ dalla riga 1, $a_{2\sigma(2)}$ dalla riga 2, e così via. Le colonne $\sigma(1), \dots, \sigma(n)$ sono tutte diverse, perché $\sigma$ è una permutazione. Quindi **ogni addendo prende esattamente un numero da ogni riga e uno da ogni colonna**, come $n$ torri su una scacchiera che non si possono mangiare (l'immagine è di Martelli).
- **Il segno.** Ogni prodotto va sommato col segno di $\sigma$: più se $\sigma$ si ottiene con un numero pari di scambi, meno se dispari.
- **Quanti addendi.** $n!$: 2 per $n = 2$, 6 per $n = 3$, 24 per $n = 4$, 120 per $n = 5$. Per questo per $n \ge 4$ la definizione non si usa mai direttamente: servono metodi migliori, come lo sviluppo di Laplace.

### I casi $n = 1$, $2$, $3$

Le dispense esaminano i primi tre casi.

**$n = 1$.** La matrice è un numero, $A = (a_{11})$. $S_1$ contiene solo $\mathrm{id} = [1]$, di segno positivo:

$$\det A = a_{11}.$$

**$n = 2$.** $S_2$ contiene $\mathrm{id} = [1\ 2]$ (segno $+1$) e la trasposizione $[2\ 1]$ (segno $-1$). I due addendi sono $a_{11}a_{22}$ e $a_{12}a_{21}$:

$$\det \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = a_{11}a_{22} - a_{12}a_{21}.$$

In parole: diagonale principale meno l'altra diagonale.

**$n = 3$.** Le sei permutazioni della tabella danno sei addendi. Le tre trasposizioni hanno segno $-1$, le altre tre $+1$:

$$\det A = a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} - a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}.$$

Controlla un addendo con la tabella: $[2\ 3\ 1]$ ha $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$, quindi dà $+a_{12}a_{23}a_{31}$.

> [!OLTRE] · la regola di Sarrus, solo per le $3 \times 3$
> Per ricordare la formula: ricopia le prime due colonne a destra della matrice. Le tre diagonali che **scendono** verso destra danno gli addendi col più, le tre che **salgono** quelli col meno:
> $$\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}\!\begin{matrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \end{matrix} \qquad \begin{aligned} &+\ a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} \\ &-\ a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} \end{aligned}$$
> Attenzione: **funziona solo per $n = 3$**. Per una $4 \times 4$ le «diagonali» sarebbero 8, mentre gli addendi veri sono $4! = 24$.

> [!ESEMPIO] 9.2 · Tre determinanti
> Il determinante delle matrici
> $$(3), \qquad \begin{pmatrix} 1 & 2 \\ -1 & 4 \end{pmatrix}, \qquad \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & 2 \\ -1 & 0 & 1 \end{pmatrix}$$
> è rispettivamente $3$, $\ 4 - (-2) = 6$, $\ -6$. Vediamo i conti.
> - $1 \times 1$: $\det(3) = 3$.
> - $2 \times 2$: $1 \cdot 4 - 2 \cdot (-1) = 4 - (-2) = 6$.
> - $3 \times 3$, con la formula (addendo per addendo, nell'ordine della formula):
>   $$\underbrace{1 \cdot 1 \cdot 1}_{a_{11}a_{22}a_{33}} - \underbrace{1 \cdot 2 \cdot 0}_{a_{11}a_{23}a_{32}} - \underbrace{1 \cdot 1 \cdot (-1)}_{a_{13}a_{22}a_{31}} - \underbrace{2 \cdot 2 \cdot 1}_{a_{12}a_{21}a_{33}} + \underbrace{2 \cdot 2 \cdot (-1)}_{a_{12}a_{23}a_{31}} + \underbrace{1 \cdot 2 \cdot 0}_{a_{13}a_{21}a_{32}}$$
>   $$= 1 - 0 + 1 - 4 - 4 + 0 = -6.$$
>
> Con Sarrus: le diagonali che scendono danno $1 \cdot 1 \cdot 1 + 2 \cdot 2 \cdot (-1) + 1 \cdot 2 \cdot 0 = -3$, quelle che salgono $1 \cdot 1 \cdot (-1) + 1 \cdot 2 \cdot 0 + 2 \cdot 2 \cdot 1 = 3$, e $-3 - 3 = -6$. Le dispense sommano gli stessi sei addendi in un altro ordine: $1 - 0 - 4 + (-4) + 0 - (-1) = -6$.

> [!TRAPPOLA] Il segno di $ad - bc$
> Nella $2 \times 2$ si sottrae il prodotto dell'**altra** diagonale, con i suoi segni: $\det \begin{pmatrix} 1 & 2 \\ -1 & 4 \end{pmatrix} = 4 - (2)(-1) = 4 + 2 = 6$, non $4 - 2 = 2$. Metti sempre le parentesi attorno ai numeri negativi.

## Matrici triangolari, identità e trasposta (pp. 42–43)

Per le matrici triangolari il determinante si legge sulla diagonale.

> [!PROP] 9.3 · Determinante di una matrice triangolare
> Sia $A \in M(n)$ una matrice **triangolare superiore**
> $$A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ 0 & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & a_{nn} \end{pmatrix}.$$
> Vale
> $$\det A = a_{11}a_{22} \cdots a_{nn}.$$

La spiegazione delle dispense: nella formula del determinante, per una matrice triangolare superiore tutti i prodotti sono nulli tranne quello della permutazione identità. Ecco perché, passo per passo.

1. Sotto la diagonale ci sono solo zeri: $a_{ij} = 0$ quando $i > j$.
2. Un addendo $a_{1\sigma(1)} \cdots a_{n\sigma(n)}$ può essere diverso da zero solo se nessun fattore sta sotto la diagonale, cioè se $\sigma(i) \ge i$ per ogni riga $i$.
3. Nell'ultima riga: $\sigma(n) \ge n$, quindi $\sigma(n) = n$. Nella penultima: $\sigma(n - 1) \ge n - 1$ e $\sigma(n - 1) \neq n$ (la colonna $n$ è già usata), quindi $\sigma(n - 1) = n - 1$. Risalendo così, $\sigma(i) = i$ per ogni $i$: $\sigma = \mathrm{id}$.
4. Resta solo l'addendo dell'identità, che ha segno $+1$: $\det A = a_{11}a_{22} \cdots a_{nn}$.

Lo stesso risultato vale per le matrici **triangolari inferiori** (zeri sopra la diagonale), con lo stesso ragionamento partendo dalla prima riga. E vale per le **diagonali**, che sono triangolari in entrambi i sensi.

> [!ESEMPIO] · Tre determinanti senza fatica
> $$\det \begin{pmatrix} 2 & 5 & -1 \\ 0 & 3 & 4 \\ 0 & 0 & -1 \end{pmatrix} = 2 \cdot 3 \cdot (-1) = -6, \qquad \det \begin{pmatrix} 1 & 0 & 0 \\ 7 & 2 & 0 \\ -3 & 5 & 4 \end{pmatrix} = 1 \cdot 2 \cdot 4 = 8,$$
> $$\det \begin{pmatrix} 5 & 9 & \pi \\ 0 & 0 & \sqrt 2 \\ 0 & 0 & 7 \end{pmatrix} = 5 \cdot 0 \cdot 7 = 0.$$
> I numeri sopra la diagonale non contano affatto, e basta uno zero sulla diagonale per avere determinante nullo.

Le dispense introducono qui una matrice che avrà un ruolo fondamentale in tutto il corso.

> [!DEF] 9.4 · Matrice identità
> La **matrice identità** di taglia $n \times n$ è la matrice
> $$I_n = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}$$
> i cui coefficienti sono 1 sulla diagonale principale e 0 altrove.

$I_n$ è diagonale, quindi per la Proposizione 9.3

$$\det(I_n) = 1 \cdot 1 \cdots 1 = 1.$$

Nel prodotto di matrici fa la parte del numero 1: $I_nA = AI_n = A$ (lo abbiamo anticipato nella lezione L08), ed è il punto di partenza per le matrici inverse della lezione L10.

Un'altra proprietà che, dicono le dispense, segue direttamente dalla definizione:

> [!PROP] 9.5
> Vale $\det({}^tA) = \det A$.

Per una $2 \times 2$ basta un conto: ${}^tA = \begin{pmatrix} a_{11} & a_{21} \\ a_{12} & a_{22} \end{pmatrix}$ ha determinante $a_{11}a_{22} - a_{21}a_{12}$, lo stesso di $A$. Per la matrice $3 \times 3$ dell'Esempio 9.2, la trasposta $\begin{pmatrix} 1 & 2 & -1 \\ 2 & 1 & 0 \\ 1 & 2 & 1 \end{pmatrix}$ ha di nuovo determinante $-6$ (prova con Sarrus).

> [!DIM] della Proposizione 9.5
> Trasponendo, la casella $(i, j)$ va in $(j, i)$. Un addendo di $\det({}^tA)$ è $({}^tA)_{1\sigma(1)} \cdots ({}^tA)_{n\sigma(n)} = a_{\sigma(1)1} \cdots a_{\sigma(n)n}$: prende ancora un numero da ogni riga e da ogni colonna di $A$. Riordinando i fattori per riga, è l'addendo di $\det A$ della permutazione inversa $\sigma^{-1}$, quella che «disfa» $\sigma$. E $\sigma^{-1}$ ha lo stesso segno di $\sigma$: se $\sigma$ si ottiene con $k$ scambi, $\sigma^{-1}$ si ottiene con gli stessi $k$ scambi fatti in ordine inverso. Quindi $\det({}^tA)$ e $\det A$ sono somme degli stessi addendi con gli stessi segni (Martelli, Proposizione 3.3.2).

La conseguenza pratica: **tutto ciò che vale per le righe vale anche per le colonne**, perché le righe di $A$ sono le colonne di ${}^tA$ e il determinante è lo stesso.

## Lo sviluppo di Laplace (pp. 43–44)

La definizione con le permutazioni è scomoda già per $n = 4$ (24 addendi). Lo **sviluppo di Laplace** riduce un determinante $n \times n$ a determinanti $(n - 1) \times (n - 1)$, e così via fino ai $2 \times 2$.

Sia $A$ una matrice $n \times n$ con $n \ge 2$. Indichiamo con $C_{ij}$ la sottomatrice $(n - 1) \times (n - 1)$ ottenuta da $A$ **rimuovendo la riga $i$ e la colonna $j$**. Per esempio, con

$$A = \begin{pmatrix} 1 & -1 & 0 \\ 2 & -1 & 5 \\ 1 & 1 & -1 \end{pmatrix}: \quad C_{11} = \begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix}, \quad C_{12} = \begin{pmatrix} 2 & 5 \\ 1 & -1 \end{pmatrix}, \quad C_{23} = \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}.$$

Per $C_{12}$ si cancellano la riga 1 e la colonna 2: restano $2, 5$ dalla seconda riga e $1, -1$ dalla terza.

> [!TEOREMA] 9.6 · Sviluppo di Laplace
> Per ogni $i$ fissato vale l'uguaglianza
> $$\det A = \sum_{j=1}^n (-1)^{i+j} a_{ij} \det C_{ij}.$$

Pezzo per pezzo:

- Si sceglie **una riga**, la $i$-esima, qualsiasi: il risultato non dipende dalla scelta.
- Per ogni numero $a_{ij}$ di quella riga si cancellano la sua riga e la sua colonna, si calcola il determinante $\det C_{ij}$ di ciò che resta e lo si moltiplica per $a_{ij}$.
- Ogni prodotto riceve il segno $(-1)^{i+j}$: $+$ se $i + j$ è pari, $-$ se è dispari.
- Si somma tutto. Se $a_{ij} = 0$ il suo addendo sparisce: **non serve calcolare $\det C_{ij}$**.

Grazie a $\det({}^tA) = \det A$ lo stesso vale per le colonne.

> [!COROLLARIO] 9.7 · Sviluppo lungo una colonna
> Per ogni $j$ fissato vale l'uguaglianza
> $$\det A = \sum_{i=1}^n (-1)^{i+j} a_{ij} \det C_{ij}.$$

I segni $(-1)^{i+j}$ si dispongono **come su una scacchiera**, con il $+$ in alto a sinistra:

$$\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix} \qquad \begin{pmatrix} + & - & + & - \\ - & + & - & + \\ + & - & + & - \\ - & + & - & + \end{pmatrix}$$

> [!ESEMPIO] 9.8 · Sviluppo lungo la prima riga
> Per calcolare il determinante seguente, sviluppiamo lungo la prima riga (cioè prendiamo $i = 1$):
> $$\det \begin{pmatrix} 1 & -1 & 0 \\ 2 & -1 & 5 \\ 1 & 1 & -1 \end{pmatrix} = 1 \cdot \det \begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix} - (-1) \cdot \det \begin{pmatrix} 2 & 5 \\ 1 & -1 \end{pmatrix} + 0 \cdot \det \begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix}.$$
> I segni sono $+, -, +$ (prima riga della scacchiera). I tre determinanti $2 \times 2$:
> - $\det C_{11} = (-1)(-1) - 5 \cdot 1 = 1 - 5 = -4$;
> - $\det C_{12} = 2 \cdot (-1) - 5 \cdot 1 = -2 - 5 = -7$;
> - il terzo non serve, perché è moltiplicato per $0$.
>
> Totale: $1 \cdot (-4) - (-1) \cdot (-7) + 0 = -4 - 7 + 0 = -11$.

Verifichiamo che il risultato non dipende dalla riga o dalla colonna scelta: sviluppiamo la stessa matrice lungo la **prima colonna** ($j = 1$), con i segni $+, -, +$:

$$1 \cdot \det \begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix} - 2 \cdot \det \begin{pmatrix} -1 & 0 \\ 1 & -1 \end{pmatrix} + 1 \cdot \det \begin{pmatrix} -1 & 0 \\ -1 & 5 \end{pmatrix}$$

$$= 1 \cdot (-4) - 2 \cdot 1 + 1 \cdot (-5) = -11.$$

Stesso risultato, ma con tre determinanti $2 \times 2$ invece di due. Per questo le dispense osservano che conviene sviluppare lungo una riga (o colonna) che contiene degli zeri.

> [!ESEMPIO] 9.9 · Sviluppo lungo una colonna quasi vuota
> Sviluppando la matrice seguente sulla seconda colonna otteniamo:
> $$\det \begin{pmatrix} 1 & 0 & 1 \\ 2 & 0 & 1 \\ \pi & 3 & \sqrt 7 \end{pmatrix} = (-1) \cdot 3 \cdot \det \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix} = 3.$$
> Nella seconda colonna l'unico numero diverso da zero è $a_{32} = 3$, in posizione $(3, 2)$: segno $(-1)^{3+2} = -1$. Cancellando la riga 3 e la colonna 2 resta $C_{32} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}$, con determinante $1 - 2 = -1$. Quindi $(-1) \cdot 3 \cdot (-1) = 3$. I numeri $\pi$ e $\sqrt 7$, che sembravano complicare tutto, non entrano nel conto.
>
> Nello sviluppo si deve sempre fare attenzione al segno $(-1)^{i+j}$ associato alla casella $ij$, che varia come su di una scacchiera.

> [!DIM] · perché lo sviluppo di Laplace funziona (caso $3 \times 3$)
> Prendi la formula per $n = 3$ e raccogli i sei addendi secondo il numero della prima riga che contengono:
> $$\det A = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31}).$$
> Le tre parentesi sono esattamente $\det C_{11}$, $\det C_{12}$ e $\det C_{13}$, e i segni sono $+, -, +$. È lo sviluppo lungo la prima riga. In generale (Martelli, Teorema 3.3.5) gli addendi che contengono $a_{ij}$ sono, a parte il fattore $a_{ij}$, proprio gli addendi di $\det C_{ij}$, con un segno in più $(-1)^{i+j}$.

> [!METODO] Calcolare un determinante con Laplace
> 1. Controlla che la matrice sia **quadrata**; se non lo è, il determinante non esiste.
> 2. Se è triangolare, moltiplica la diagonale (Proposizione 9.3) e hai finito.
> 3. Scegli la riga o la colonna con **più zeri**.
> 4. Per ogni numero non nullo di quella riga: segno della scacchiera, numero, determinante della sottomatrice che resta cancellando la sua riga e la sua colonna.
> 5. Ripeti sulle sottomatrici finché arrivi a $2 \times 2$ (o a matrici triangolari).
> 6. Controllo: sviluppa lungo un'altra riga o colonna, oppure, per una $3 \times 3$, usa Sarrus.

> [!ESEMPIO] · Una $4 \times 4$ con una colonna quasi vuota
> $$M = \begin{pmatrix} 2 & 0 & 1 & 3 \\ 1 & 0 & 0 & 2 \\ 0 & 1 & 4 & -1 \\ 3 & 0 & 2 & 1 \end{pmatrix}$$
> La seconda colonna ha un solo numero non nullo, $m_{32} = 1$, con segno $(-1)^{3+2} = -1$. Cancellando la riga 3 e la colonna 2:
> $$\det M = -1 \cdot \det \begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & 2 \\ 3 & 2 & 1 \end{pmatrix}.$$
> Sviluppo la $3 \times 3$ lungo la seconda riga, che ha uno zero (segni $-, +, -$):
> $$\det \begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & 2 \\ 3 & 2 & 1 \end{pmatrix} = -1 \cdot \det \begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix} + 0 - 2 \cdot \det \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$$
> $$= -1 \cdot (1 - 6) - 2 \cdot (4 - 3) = 5 - 2 = 3.$$
> Quindi $\det M = -3$. Invece di 24 addendi, tre determinanti $2 \times 2$.

Nello strumento qui sotto puoi controllare i tuoi determinanti: scrivi la matrice e premi «Calcola». Lo strumento non usa Laplace ma le **mosse di Gauss**, che trasformano la matrice in una triangolare cambiando il determinante in modo controllato: è il metodo della prossima lezione, L10. Prova la matrice dell'Esempio 9.8 (già inserita) e poi la $M$ qui sopra (`2 0 1 3; 1 0 0 2; 0 1 4 -1; 3 0 2 1`).

```widget gauss
titolo: Controlla un determinante
matrice: 1 -1 0; 2 -1 5; 1 1 -1
modo: determinante
modi: determinante
```

## Proprietà del determinante (p. 44)

Tre proprietà seguono subito dallo sviluppo di Laplace.

> [!PROP] 9.10 · Riga o colonna nulla
> Se gli elementi di una riga (o colonna) di $A$ sono tutti nulli, allora $\det(A) = 0$.

È una conseguenza diretta dello sviluppo di Laplace: basta calcolare il determinante sviluppando secondo la riga (o colonna) tutta nulla. Ogni addendo è «$0$ per qualcosa». Per esempio $\det \begin{pmatrix} 4 & 7 & 1 \\ 0 & 0 & 0 \\ 2 & 9 & 5 \end{pmatrix} = 0$ senza fare conti.

> [!PROP] 9.11 · Moltiplicare una riga per un numero
> Se la matrice $A'$ si ottiene dalla matrice $A$ moltiplicando tutti gli elementi di una riga (o colonna) per il numero $c$, allora $\det(A') = c \cdot \det(A)$.

Il perché: sviluppa $\det A'$ lungo la riga moltiplicata. Le sottomatrici $C_{ij}$ **non contengono** quella riga, quindi sono le stesse di $A$; cambiano solo i numeri $c\,a_{ij}$ davanti. Ogni addendo è moltiplicato per $c$, e quindi anche la somma.

Con i numeri: $\det \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = 4 - 6 = -2$; moltiplicando la prima riga per 5, $\det \begin{pmatrix} 5 & 10 \\ 3 & 4 \end{pmatrix} = 20 - 30 = -10 = 5 \cdot (-2)$.

Letta al contrario, la proposizione permette di **portare fuori** un fattore comune a una riga o a una colonna:

$$\det \begin{pmatrix} 6 & 9 \\ 2 & 5 \end{pmatrix} = 3 \det \begin{pmatrix} 2 & 3 \\ 2 & 5 \end{pmatrix} = 3 \cdot (10 - 6) = 12.$$

Controllo diretto: $6 \cdot 5 - 9 \cdot 2 = 30 - 18 = 12$ ✓. È il trucco decisivo quando nella matrice compaiono $\pi$, $e$, $\sqrt 2$ o $i$ (Esercizio 9.14 e «Verso l'esame»).

> [!COROLLARIO] 9.12 · Il determinante di $cA$
> Dalla proposizione otteniamo subito
> $$\det(cA) = c^n \cdot \det(A)$$
> e in particolare
> $$\det(-A) = (-1)^n \cdot \det(A).$$

Il perché: $cA$ ha **tutte le $n$ righe** moltiplicate per $c$. Applicando la Proposizione 9.11 una riga alla volta, il fattore $c$ esce $n$ volte. Con $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$:

$$\det(3A) = \det \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix} = 36 - 54 = -18 = 3^2 \cdot (-2).$$

E per $n$ pari $\det(-A) = \det A$, per $n$ dispari $\det(-A) = -\det A$.

> [!TRAPPOLA] $\det(cA)$ non è $c \det A$, e $\det(A + B)$ non è $\det A + \det B$
> - Se $A$ è $3 \times 3$ con $\det A = 5$, allora $\det(2A) = 2^3 \cdot 5 = 40$, non $10$.
> - Il determinante **non** è additivo (Martelli, Osservazione 3.4.9): con $A = I_2$ e $B = -I_2$ si ha $\det(A + B) = \det \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = 0$, mentre $\det A + \det B = 1 + 1 = 2$.
> - La Proposizione 9.11 riguarda **una** riga: moltiplicare due righe per $c$ moltiplica il determinante per $c^2$.

## Il significato geometrico (oltre le dispense)

> [!OLTRE] · area, orientazione e volume
> Per una matrice reale $2 \times 2$ con colonne $v_1 = {}^t(a, c)$ e $v_2 = {}^t(b, d)$ (Martelli, §3.3.10):
> - $|\det A| = |ad - bc|$ è l'**area** del parallelogramma con lati $v_1$ e $v_2$;
> - il **segno** dice l'orientazione: $\det A > 0$ se, girando da $v_1$ verso $v_2$ per l'angolo più piccolo, si va in senso antiorario (come da $e_1$ a $e_2$), $\det A < 0$ se si va in senso orario;
> - $\det A = 0$ esattamente quando $v_1$ e $v_2$ sono paralleli: il parallelogramma è schiacciato.
>
> Per una $3 \times 3$, $|\det A|$ è il **volume** del parallelepipedo che ha per spigoli le tre colonne (lo ritroverai col prodotto vettoriale, lezione L22). Per esempio $\det \begin{pmatrix} 3 & -1 & 0 \\ 1 & 3 & 0 \\ 0 & 0 & 4 \end{pmatrix} = 4 \cdot (9 + 1) = 40$: un parallelepipedo di base un quadrato di area 10 e altezza 4.

Nello strumento qui sotto la matrice $A$ trasforma il quadrato di lati $e_1$ ed $e_2$ nel parallelogramma colorato, che ha per lati le colonne $Ae_1$ e $Ae_2$. Cambia i quattro numeri e guarda come cambiano l'area e il colore: verde se $\det A > 0$, rosa se $\det A < 0$, giallo se $\det A = 0$. Prova i pulsanti: «taglio» ($\det = 1$: la forma cambia, l'area no), «riflessione» ($\det = -1$: stessa area, orientazione invertita), «proiezione» ($\det = 0$: il quadrato si schiaccia su un segmento). Le righe sugli autovalori riguardano la lezione L17: per ora ignorale.

```widget matrice
titolo: Il determinante come area con il segno
a: 3 1; 1 2
x: 1 1
raggio: 5
```

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli il determinante è nel §3.3 (pp. 93–103): la definizione e i casi $n = 1, 2, 3$ nel §3.3.1 (pp. 93–95, con la rappresentazione con le «colorazioni» e la Proposizione 3.3.2 su $\det({}^tA)$), le matrici triangolari nel §3.3.2 (Proposizione 3.3.3), la matrice identità nel §3.3.3 (Definizione 3.3.4), lo sviluppo di Laplace nel §3.3.4 (pp. 96–97, Teorema 3.3.5), il significato geometrico nel §3.3.10 (pp. 101–103). Le permutazioni e il loro segno sono nel §1.2.5; il determinante di $\lambda A$ è l'Esercizio 3.10.

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 quiz a 5 risposte (servono almeno 6 risposte giuste perché vengano corretti i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. I dettagli sono nella lezione L01.

Il determinante compare in quasi ogni appello, in tre forme (e serve comunque per gli autovalori, dalla lezione L17):

| Tipo di domanda | Appelli (numero della domanda) | Lezione |
|---|---|---|
| «Il determinante di $A$ è…» con $A$ di taglia $3 \times 3$, $4 \times 4$ o $5 \times 5$ | 10/06/2024 (2), 10/07/2024 (4), 10/07/2025 (4), 02/09/2025 (3), 03/06/2026 (2) | questa |
| determinante di un prodotto o di una potenza: $\det(AB)$, $\det(A^3)$, $\det(A\,{}^tA)$ | 06/09/2024 (4), 16/01/2025 (3), 07/02/2025 (5), 03/06/2025 (9), 05/02/2026 (5), 03/07/2026 (6) | L10 (teorema di Binet) |
| problema: «per quali $k$ la matrice è invertibile?» | 24/01/2024, 06/09/2024, 07/02/2025, 15/01/2026, 05/02/2026, 03/07/2026 (problema 11) | L10 |

Tre domande vere del primo tipo, con la soluzione svolta.

> [!ESAME] Appello del 10/07/2025, domanda 4
> Sia $A = \begin{pmatrix} 1 & -1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 2 & -1 & 0 \end{pmatrix}$. Qual è il determinante di $A$? (a) $1$; (b) $0$; (c) $\det(A)$ non è definito; (d) $2$; (e) $-1$.
>
> **Soluzione.** Conta righe e colonne prima di tutto: 3 righe e 4 colonne. La matrice non è quadrata, quindi il determinante **non esiste**: risposta **(c)**. Chi sviluppa senza guardare trova numeri che sembrano plausibili (la parte $3 \times 3$ a sinistra, sviluppata lungo la sua terza colonna, ha determinante $-1 \cdot (1 \cdot 1 - 0) = -1$, che è tra le risposte): il tranello è tutto lì.

> [!ESAME] Appello del 02/09/2025, domanda 3
> Calcolare il determinante di $A = \begin{pmatrix} 1 & 2 & 0 & 0 & 0 \\ 0 & 1 & 3 & 0 & 0 \\ 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 & 2 \\ 1 & 0 & 0 & 0 & 1 \end{pmatrix}$: (a) $12$; (b) $13$; (c) $0$; (d) $11$; (e) $1$.
>
> **Soluzione.** La prima colonna ha due numeri non nulli: $a_{11} = 1$ (segno $+$) e $a_{51} = 1$ (segno $(-1)^{5+1} = +1$). Sviluppo lungo la prima colonna:
> - cancellando riga 1 e colonna 1 resta $C_{11} = \begin{pmatrix} 1 & 3 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 1 \end{pmatrix}$, triangolare superiore: $\det C_{11} = 1$;
> - cancellando riga 5 e colonna 1 resta $C_{51} = \begin{pmatrix} 2 & 0 & 0 & 0 \\ 1 & 3 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 2 \end{pmatrix}$, triangolare inferiore: $\det C_{51} = 2 \cdot 3 \cdot 1 \cdot 2 = 12$.
>
> $\det A = 1 \cdot 1 + 1 \cdot 12 = 13$: risposta **(b)**. Il distrattore $12$ è quello di chi dimentica il primo addendo.

> [!ESAME] Appello del 03/06/2026, domanda 2
> Il determinante di $\begin{pmatrix} 1 & e & 1 & 1 \\ \pi & 2\pi e & 3\pi & \pi \\ 1 & e & 2 & 0 \\ 0 & e & 0 & 3 \end{pmatrix}$ è uguale a: (a) $1$; (b) $0$; (c) $\pi e$; (d) $\pi + e$; (e) $6 + 2\pi e$.
>
> **Soluzione.** La seconda riga ha il fattore comune $\pi$ e la seconda colonna il fattore comune $e$: li porto fuori con la Proposizione 9.11 (per righe e per colonne):
> $$\det = \pi e \cdot \det \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 1 \\ 1 & 1 & 2 & 0 \\ 0 & 1 & 0 & 3 \end{pmatrix}.$$
> Sviluppo lungo la quarta riga, $(0, 1, 0, 3)$: restano $a_{42} = 1$ (segno $(-1)^{4+2} = +$) e $a_{44} = 3$ (segno $+$).
> - $C_{42} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 0 \end{pmatrix}$: lungo la terza colonna, $1 \cdot (2 - 3) - 1 \cdot (2 - 1) + 0 = -1 - 1 = -2$;
> - $C_{44} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 1 & 2 \end{pmatrix}$: con Sarrus, $(4 + 3 + 1) - (2 + 3 + 2) = 8 - 7 = 1$.
>
> Il determinante tra parentesi è $1 \cdot (-2) + 3 \cdot 1 = 1$, quindi il totale è $\pi e$: risposta **(c)**.

Negli altri due appelli del primo tipo (10/07/2024 e 10/06/2024) le matrici avevano righe dipendenti e il determinante era $0$: con gli strumenti della lezione L10 si vede quasi senza conti.

**Il metodo, in ordine.** (1) È quadrata? (2) È triangolare? (3) C'è una riga o colonna nulla? (4) Ci sono fattori comuni da portare fuori ($\pi$, $e$, radici, numeri grandi)? (5) Laplace lungo la riga o colonna con più zeri. (6) Per una $3 \times 3$ finale, Sarrus. Senza calcolatrice conviene sempre ridurre i numeri prima di moltiplicare.

Errori da evitare:

- dimenticare il segno della scacchiera, soprattutto nelle posizioni «dispari» come $(1, 2)$, $(2, 3)$, $(5, 4)$;
- usare Sarrus su una $4 \times 4$;
- scrivere $\det(2A) = 2\det A$: per una $n \times n$ è $2^n \det A$;
- rispondere con un numero quando la matrice non è quadrata.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$; la regola di Sarrus per le $3 \times 3$ (con il disegno); lo sviluppo di Laplace con la scacchiera dei segni; triangolare $\Rightarrow$ prodotto della diagonale; $\det({}^tA) = \det A$; riga nulla $\Rightarrow 0$; una riga per $c$ $\Rightarrow$ determinante per $c$; $\det(cA) = c^n \det A$.

## Quiz

```quiz
D: Sia $A = \begin{pmatrix} 2 & 0 & 1 \\ -1 & 3 & 0 \end{pmatrix}$. Qual è il determinante di $A$?
+ $\det(A)$ non è definito.
- $0$
- $6$
- $-6$
- $1$
= $A$ ha 2 righe e 3 colonne: non è quadrata, e il determinante esiste solo per le matrici quadrate (Definizione 9.1). Simile all'appello del 10/07/2025, domanda 4.

D: Il determinante di $A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \\ 3 & 0 & 0 & 1 \end{pmatrix}$ è:
+ $-5$
- $7$
- $1$
- $0$
- $5$
= Lungo la prima colonna: $a_{11} = 1$ con segno $+$ e sottomatrice $C_{11}$ triangolare superiore con diagonale $1, 1, 1$, quindi $1$; poi $a_{41} = 3$ con segno $(-1)^{4+1} = -1$ e $C_{41} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, triangolare inferiore con determinante $2$. Totale $1 - 3 \cdot 2 = -5$. Chi dimentica il segno trova $7$. Simile all'appello del 02/09/2025, domanda 3.

D: Il determinante di $\begin{pmatrix} 1 & \pi & 2 \\ e & 2\pi e & e \\ 0 & \pi & 3 \end{pmatrix}$ è uguale a:
+ $4\pi e$
- $0$
- $\pi e$
- $4$
- $\pi + e$
= Porto fuori $e$ dalla seconda riga e $\pi$ dalla seconda colonna: $\pi e \det \begin{pmatrix} 1 & 1 & 2 \\ 1 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$. Lungo la prima colonna: $1 \cdot (6 - 1) - 1 \cdot (3 - 2) + 0 = 5 - 1 = 4$. Totale $4\pi e$. Simile all'appello del 03/06/2026, domanda 2.

D: Sia $A$ una matrice $3 \times 3$ con $\det A = 5$. Quanto vale $\det(2A)$?
+ $40$
- $10$
- $25$
- $8$
- $30$
= $2A$ ha tutte e tre le righe moltiplicate per 2, quindi (Corollario 9.12) $\det(2A) = 2^3 \det A = 8 \cdot 5 = 40$. $10 = 2 \cdot 5$ è l'errore di chi moltiplica una riga sola.

D: Sia $A$ una matrice $4 \times 4$ con $\det A = 3$. Quanto vale $\det(-A)$?
+ $3$
- $-3$
- $81$
- $-81$
- $-12$
= $\det(-A) = (-1)^4 \det A = \det A = 3$: con $n$ pari il segno non cambia (Corollario 9.12).

D: Quanti addendi ha la formula del determinante (Definizione 9.1) per una matrice $5 \times 5$?
+ $120$
- $25$
- $5$
- $10$
- $60$
= Un addendo per ogni permutazione di $\{1, 2, 3, 4, 5\}$: sono $5! = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 120$. Per questo si usa Laplace.

D: Siano $A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}$. Quanto valgono $\det(AB)$ e $\tr(AB)$?
+ $\det(AB) = 1$, $\tr(AB) = 8$.
- $\det(AB) = 1$, $\tr(AB) = 9$.
- $\det(AB) = 2$, $\tr(AB) = 8$.
- $\det(AB) = 0$, $\tr(AB) = 8$.
- $\det(AB) = 3$, $\tr(AB) = 3$.
= Riga per colonna, $AB = \begin{pmatrix} 1 & 1 & 0 \\ 2 & 3 & 3 \\ 0 & 1 & 4 \end{pmatrix}$: traccia $1 + 3 + 4 = 8$ (non $\tr A \cdot \tr B = 9$). Lungo la prima riga: $\det(AB) = 1 \cdot (12 - 3) - 1 \cdot (8 - 0) = 1$. Con la lezione L10 si fa prima: $\det(AB) = \det A \det B = 1 \cdot 1$, perché sono triangolari con diagonale di 1. Simile all'appello del 16/01/2025, domanda 3.

D: Il determinante di $\begin{pmatrix} 2 & 3 & 4 \\ 5 & 6 & 7 \\ 8 & 9 & 10 \end{pmatrix}$ è:
+ $0$
- $\det$ non è definito.
- $1$
- $-3$
- $10!$
= Con Sarrus: diagonali che scendono $2 \cdot 6 \cdot 10 + 3 \cdot 7 \cdot 8 + 4 \cdot 5 \cdot 9 = 120 + 168 + 180 = 468$, diagonali che salgono $4 \cdot 6 \cdot 8 + 2 \cdot 7 \cdot 9 + 3 \cdot 5 \cdot 10 = 192 + 126 + 150 = 468$; differenza $0$. La terza riga è $2 \cdot (5, 6, 7) - (2, 3, 4)$: nella lezione L10 vedrai che allora il determinante è sempre $0$. Simile all'appello del 10/07/2024, domanda 4.

D: Quale di queste affermazioni è **falsa** per matrici quadrate reali?
+ $\det(A + B) = \det A + \det B$ per ogni $A, B \in M(2)$.
- $\det({}^tA) = \det A$.
- $\det(I_n) = 1$.
- Se una colonna di $A$ è nulla, allora $\det A = 0$.
- $\det(-A) = \det A$ per ogni $A \in M(2)$.
= Con $A = I_2$ e $B = -I_2$: $\det(A + B) = \det(0) = 0$, ma $\det A + \det B = 2$. Le altre sono le Proposizioni 9.5, 9.10, la Definizione 9.4 con la Proposizione 9.3, e il Corollario 9.12 con $n = 2$.

D: Calcola il determinante di $\begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 5 \\ 1 & 0 & 4 \end{pmatrix}$.
N: 29
= Lungo la prima riga: $3 \cdot (2 \cdot 4 - 5 \cdot 0) - 1 \cdot (0 \cdot 4 - 5 \cdot 1) + 0 = 3 \cdot 8 - 1 \cdot (-5) = 24 + 5 = 29$.
```

## Esercizi

::: esercizio difficile Esercizio 9.13 delle dispense: una $4 \times 4$ complessa
Calcoliamo il determinante della matrice
$$A = \begin{pmatrix} 2 + i & 0 & -5 & 0 \\ 3 - i & 1 & 2i & 0 \\ 4 + 4i & -2 & -1 & 0 \\ -\frac 12 & i & 1 - i & i \end{pmatrix}.$$
::: soluzione
Le regole sono le stesse con i numeri complessi: cambiano solo i conti (lezioni L02 e L03).

**Passo 1: la colonna migliore.** La quarta colonna ha un solo numero non nullo, $a_{44} = i$, con segno $(-1)^{4+4} = +1$. Sviluppo lungo la quarta colonna (Corollario 9.7):
$$\det A = i \cdot \det C_{44}, \qquad C_{44} = \begin{pmatrix} 2 + i & 0 & -5 \\ 3 - i & 1 & 2i \\ 4 + 4i & -2 & -1 \end{pmatrix}.$$
I numeri $-\frac 12$, $i$, $1 - i$ dell'ultima riga non servono più.

**Passo 2: la $3 \times 3$ lungo la prima riga**, che ha uno zero (segni $+, -, +$):
$$\det C_{44} = (2 + i) \det \begin{pmatrix} 1 & 2i \\ -2 & -1 \end{pmatrix} - 0 + (-5) \det \begin{pmatrix} 3 - i & 1 \\ 4 + 4i & -2 \end{pmatrix}.$$

**Passo 3: le due $2 \times 2$.**
- $\det \begin{pmatrix} 1 & 2i \\ -2 & -1 \end{pmatrix} = 1 \cdot (-1) - 2i \cdot (-2) = -1 + 4i$;
- $\det \begin{pmatrix} 3 - i & 1 \\ 4 + 4i & -2 \end{pmatrix} = (3 - i)(-2) - 1 \cdot (4 + 4i) = -6 + 2i - 4 - 4i = -10 - 2i$.

**Passo 4: i prodotti.**
- $(2 + i)(-1 + 4i) = -2 + 8i - i + 4i^2 = -2 + 7i - 4 = -6 + 7i$ (ricorda $i^2 = -1$);
- $(-5)(-10 - 2i) = 50 + 10i$.

Quindi $\det C_{44} = (-6 + 7i) + (50 + 10i) = 44 + 17i$.

**Passo 5.** $\det A = i(44 + 17i) = 44i + 17i^2 = -17 + 44i$.
:::

::: esercizio difficile Esercizio 9.14 delle dispense: radici e unità immaginaria
Calcoliamo il determinante della matrice
$$B = \begin{pmatrix} 5i & 4\sqrt 2 & 0 & \sqrt 2 \\ 5i & 8\sqrt 2 & 0 & -\sqrt 2 \\ -5i & -4\sqrt 2 & -1 & 2\sqrt 2 \\ -10i & 4\sqrt 2 & 1 & \sqrt 2 \end{pmatrix}.$$
::: soluzione
**Passo 1: portare fuori i fattori comuni** (Proposizione 9.11, per colonne). La prima colonna è $5i \cdot {}^t(1, 1, -1, -2)$, la seconda è $4\sqrt 2 \cdot {}^t(1, 2, -1, 1)$, la quarta è $\sqrt 2 \cdot {}^t(1, -1, 2, 1)$. Quindi
$$\det B = 5i \cdot 4\sqrt 2 \cdot \sqrt 2 \cdot \det M = 40i \det M, \qquad M = \begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 2 & 0 & -1 \\ -1 & -1 & -1 & 2 \\ -2 & 1 & 1 & 1 \end{pmatrix}$$
(perché $\sqrt 2 \cdot \sqrt 2 = 2$ e $5 \cdot 4 \cdot 2 = 40$).

**Passo 2: Laplace lungo la terza colonna** di $M$, che ha due zeri. Restano $m_{33} = -1$ (segno $(-1)^{3+3} = +$) e $m_{43} = 1$ (segno $(-1)^{4+3} = -$):
$$\det M = +(-1) \det C_{33} - 1 \cdot \det C_{43}.$$

**Passo 3: le due $3 \times 3$.**
- $C_{33}$ (senza riga 3 e colonna 3) $= \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & -1 \\ -2 & 1 & 1 \end{pmatrix}$. Lungo la prima riga: $1 \cdot (2 + 1) - 1 \cdot (1 - 2) + 1 \cdot (1 + 4) = 3 + 1 + 5 = 9$.
- $C_{43}$ (senza riga 4 e colonna 3) $= \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix}$. Lungo la prima riga: $1 \cdot (4 - 1) - 1 \cdot (2 - 1) + 1 \cdot (-1 + 2) = 3 - 1 + 1 = 3$.

Quindi $\det M = -9 - 3 = -12$.

**Passo 4.** $\det B = 40i \cdot (-12) = -480i$.

Senza il passo 1 i conti si fanno lo stesso, ma con prodotti come $5i \cdot 8\sqrt 2 \cdot \sqrt 2$ a ogni riga: portare fuori i fattori comuni è il modo per non sbagliare.
:::

::: esercizio base Quattro determinanti $2 \times 2$
Calcola: (a) $\det \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$; (b) $\det \begin{pmatrix} 2 & -3 \\ 4 & -6 \end{pmatrix}$; (c) $\det \begin{pmatrix} \cos t & -\sin t \\ \sin t & \cos t \end{pmatrix}$; (d) $\det \begin{pmatrix} 1 + i & 2 \\ 1 & 1 - i \end{pmatrix}$.
::: soluzione
(a) $3 \cdot 2 - 1 \cdot 4 = 6 - 4 = 2$.

(b) $2 \cdot (-6) - (-3) \cdot 4 = -12 + 12 = 0$. Le colonne ${}^t(2, 4)$ e ${}^t(-3, -6)$ sono multiple ($-\frac 32$ volte la prima): il parallelogramma è schiacciato.

(c) $\cos t \cdot \cos t - (-\sin t) \cdot \sin t = \cos^2 t + \sin^2 t = 1$ per ogni $t$: questa matrice ruota il piano dell'angolo $t$, e le rotazioni non cambiano le aree (lezione L22).

(d) $(1 + i)(1 - i) - 2 \cdot 1 = (1 - i^2) - 2 = (1 + 1) - 2 = 0$.
:::

::: esercizio base Una $3 \times 3$ in due modi
Calcola $\det A$ per $A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 3 & -1 \\ 0 & 1 & 4 \end{pmatrix}$ (a) con la formula dei sei addendi e (b) con Laplace lungo la prima riga.
::: soluzione
(a) Addendo per addendo, nell'ordine della formula:
- $a_{11}a_{22}a_{33} = 2 \cdot 3 \cdot 4 = 24$;
- $-a_{11}a_{23}a_{32} = -2 \cdot (-1) \cdot 1 = 2$;
- $-a_{13}a_{22}a_{31} = -1 \cdot 3 \cdot 0 = 0$;
- $-a_{12}a_{21}a_{33} = -0 \cdot 1 \cdot 4 = 0$;
- $+a_{12}a_{23}a_{31} = 0 \cdot (-1) \cdot 0 = 0$;
- $+a_{13}a_{21}a_{32} = 1 \cdot 1 \cdot 1 = 1$.

Totale $24 + 2 + 1 = 27$.

(b) Lungo la prima riga, segni $+, -, +$, e $a_{12} = 0$:
$$\det A = 2 \det \begin{pmatrix} 3 & -1 \\ 1 & 4 \end{pmatrix} - 0 + 1 \cdot \det \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$$

$$= 2 \cdot (12 + 1) + 1 \cdot (1 - 0) = 26 + 1 = 27.$$
Stesso risultato: Laplace è solo un modo ordinato di raccogliere gli stessi sei addendi.
:::

::: esercizio medio Permutazioni e addendi
(a) Trova il segno delle permutazioni $[2\ 1\ 4\ 3]$, $[4\ 3\ 2\ 1]$ e $[2\ 3\ 4\ 1]$ di $S_4$. (b) Scrivi, con il suo segno, l'addendo della formula del determinante $4 \times 4$ che corrisponde a $[2\ 3\ 4\ 1]$. (c) Nella formula del determinante $4 \times 4$ può comparire il prodotto $a_{11}a_{21}a_{33}a_{44}$?
::: soluzione
(a) Con gli scambi di posti:
- $[2\ 1\ 4\ 3]$: da $[1\ 2\ 3\ 4]$ scambio i primi due posti e gli ultimi due: 2 scambi, segno $+1$.
- $[4\ 3\ 2\ 1]$: scambio il primo con il quarto posto ($[4\ 2\ 3\ 1]$) e il secondo con il terzo ($[4\ 3\ 2\ 1]$): 2 scambi, segno $+1$.
- $[2\ 3\ 4\ 1]$: $[1\ 2\ 3\ 4] \to [2\ 1\ 3\ 4] \to [2\ 3\ 1\ 4] \to [2\ 3\ 4\ 1]$: 3 scambi, segno $-1$. Con le inversioni: $(2, 1)$, $(3, 1)$, $(4, 1)$, tre, segno $-1$ ✓.

(b) $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 4$, $\sigma(4) = 1$: l'addendo è $-a_{12}a_{23}a_{34}a_{41}$.

(c) No: $a_{11}$ e $a_{21}$ stanno entrambi nella **colonna 1**. Ogni addendo prende un solo numero da ogni colonna.
:::

::: esercizio medio Una $4 \times 4$ con Laplace
Calcola $\det \begin{pmatrix} 1 & 2 & 0 & 3 \\ 0 & 1 & 0 & 0 \\ 4 & 1 & 2 & 1 \\ 1 & 0 & 0 & 2 \end{pmatrix}$.
::: soluzione
La seconda riga ha un solo numero non nullo, $a_{22} = 1$, con segno $(-1)^{2+2} = +$. Cancellando riga 2 e colonna 2:
$$\det = 1 \cdot \det \begin{pmatrix} 1 & 0 & 3 \\ 4 & 2 & 1 \\ 1 & 0 & 2 \end{pmatrix}.$$
Nella nuova matrice la seconda colonna ha un solo numero non nullo, $2$ in posizione $(2, 2)$, segno $+$:
$$\det \begin{pmatrix} 1 & 0 & 3 \\ 4 & 2 & 1 \\ 1 & 0 & 2 \end{pmatrix} = 2 \det \begin{pmatrix} 1 & 3 \\ 1 & 2 \end{pmatrix} = 2 \cdot (2 - 3) = -2.$$
Il determinante cercato è $-2$. Due sviluppi furbi e un solo determinante $2 \times 2$.
:::

::: esercizio medio Proprietà senza conti
Sia $A$ una matrice $3 \times 3$ con $\det A = 5$. Calcola: (a) $\det({}^tA)$; (b) $\det(2A)$; (c) $\det(-A)$; (d) il determinante della matrice ottenuta da $A$ moltiplicando la seconda riga per 3; (e) il determinante della matrice ottenuta da $A$ sostituendo la prima colonna con una colonna di zeri.
::: soluzione
(a) $\det({}^tA) = \det A = 5$ (Proposizione 9.5).

(b) $\det(2A) = 2^3 \cdot 5 = 40$ (Corollario 9.12, $n = 3$).

(c) $\det(-A) = (-1)^3 \cdot 5 = -5$.

(d) Una sola riga moltiplicata per 3: $3 \cdot 5 = 15$ (Proposizione 9.11).

(e) $0$, perché una colonna è nulla (Proposizione 9.10), qualunque fosse $A$.
:::

::: esercizio difficile Le antisimmetriche di ordine dispari
(a) Dimostra che ogni matrice reale antisimmetrica $A$ di taglia $n \times n$ con $n$ dispari ha $\det A = 0$ (Martelli, Esercizio 3.11). (b) Controlla con $N = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix}$. (c) Mostra che per $n = 2$ non è vero.
::: soluzione
(a) Tre uguaglianze:
1. $\det({}^tA) = \det A$ (Proposizione 9.5);
2. $A$ è antisimmetrica, cioè ${}^tA = -A$, quindi $\det({}^tA) = \det(-A)$;
3. $\det(-A) = (-1)^n \det A = -\det A$, perché $n$ è dispari (Corollario 9.12).

Mettendole insieme: $\det A = -\det A$, cioè $2\det A = 0$, quindi $\det A = 0$.

(b) Con Sarrus: le diagonali che scendono danno $0 \cdot 0 \cdot 0 + 2 \cdot 3 \cdot 1 + (-1) \cdot (-2) \cdot (-3) = 0 + 6 - 6 = 0$; quelle che salgono $(-1) \cdot 0 \cdot 1 + 0 \cdot 3 \cdot (-3) + 2 \cdot (-2) \cdot 0 = 0$. Differenza $0$ ✓.

(c) $\det \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} = 0 - (1)(-1) = 1 \neq 0$: con $n$ pari $(-1)^n = 1$ e il ragionamento non dice niente.
:::

::: esercizio esame Il determinante di una $5 \times 5$
Calcolare il determinante di $A = \begin{pmatrix} 2 & 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 2 & 0 \\ 0 & 0 & 0 & 1 & 1 \\ 1 & 0 & 0 & 0 & 3 \end{pmatrix}$. Risposte possibili: (a) $6$; (b) $8$; (c) $0$; (d) $4$; (e) $12$.
::: soluzione
Nella prima colonna i numeri non nulli sono $a_{11} = 2$ (segno $+$) e $a_{51} = 1$ (segno $(-1)^{5+1} = +$).

- Cancellando riga 1 e colonna 1: $C_{11} = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 3 \end{pmatrix}$, triangolare superiore, $\det C_{11} = 1 \cdot 1 \cdot 1 \cdot 3 = 3$.
- Cancellando riga 5 e colonna 1: $C_{51} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \end{pmatrix}$, triangolare inferiore, $\det C_{51} = 1 \cdot 1 \cdot 2 \cdot 1 = 2$.

$\det A = 2 \cdot 3 + 1 \cdot 2 = 6 + 2 = 8$: risposta **(b)**. Il distrattore $6$ è di chi dimentica il secondo addendo, $4$ di chi lo sottrae.
:::

::: esercizio esame Per quali $k$ il determinante è nullo?
Sia $A = \begin{pmatrix} k & 1 & 0 \\ 1 & k & 1 \\ 0 & 1 & k \end{pmatrix}$ con $k \in \R$. Calcola $\det A$ in funzione di $k$ e trova i valori di $k$ per cui $\det A = 0$.
::: soluzione
Lungo la prima riga (segni $+, -, +$, e $a_{13} = 0$):
$$\det A = k \det \begin{pmatrix} k & 1 \\ 1 & k \end{pmatrix} - 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 0 & k \end{pmatrix} + 0$$

$$= k(k^2 - 1) - (k - 0) = k^3 - k - k = k^3 - 2k.$$
Raccogliendo: $\det A = k(k^2 - 2)$, che si annulla per $k = 0$ oppure $k^2 = 2$, cioè $k = \sqrt 2$ o $k = -\sqrt 2$.

Controllo con $k = 0$: $A = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ ha la prima e la terza riga uguali, e con Sarrus il determinante è $0 + 0 + 0 - (0 + 0 + 0) = 0$ ✓. Nella lezione L10 scoprirai che questi sono esattamente i $k$ per cui $A$ **non è invertibile**: è la prima domanda di molti problemi d'esame.
:::

::: esercizio esame Raccogliere $\pi$ ed $e$
Calcola il determinante di $\begin{pmatrix} 2 & \pi & 1 \\ 4 & 3\pi & 0 \\ e & 2\pi e & e \end{pmatrix}$. Risposte possibili: (a) $7\pi e$; (b) $0$; (c) $\pi e$; (d) $7$; (e) $6\pi + e$.
::: soluzione
La terza riga ha il fattore comune $e$: $(e, 2\pi e, e) = e \cdot (1, 2\pi, 1)$. Poi la seconda colonna diventa $(\pi, 3\pi, 2\pi) = \pi \cdot (1, 3, 2)$. Portando fuori i due fattori (Proposizione 9.11):
$$\det = \pi e \det \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 0 \\ 1 & 2 & 1 \end{pmatrix}.$$
Lungo la terza colonna (segni $+, -, +$, e $0$ al centro):
$$\det \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 0 \\ 1 & 2 & 1 \end{pmatrix} = 1 \cdot \det \begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix} - 0 + 1 \cdot \det \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$$

$$= (8 - 3) + (6 - 4) = 5 + 2 = 7.$$
Il determinante è $7\pi e$: risposta **(a)**.
:::

::: esercizio medio L'area di un triangolo (oltre le dispense)
Usa il determinante per calcolare l'area del triangolo di vertici $P = (1, 1)$, $Q = (4, 2)$, $R = (2, 5)$.
::: soluzione
Il triangolo è metà del parallelogramma costruito sui lati $Q - P = (3, 1)$ e $R - P = (1, 4)$. L'area del parallelogramma è il valore assoluto del determinante della matrice che ha questi vettori come colonne:
$$\det \begin{pmatrix} 3 & 1 \\ 1 & 4 \end{pmatrix} = 12 - 1 = 11.$$
Area del triangolo: $\frac{11}2 = 5{,}5$. Il segno positivo dice anche che percorrendo $P \to Q \to R$ si gira in senso antiorario.
:::

## Domande di ripasso

::: domanda Per quali matrici esiste il determinante?
Solo per le matrici quadrate $n \times n$. Una matrice $3 \times 4$ non ha determinante.
:::

::: domanda Qual è la formula del determinante $2 \times 2$ e che cosa misura?
$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$. In valore assoluto è l'area del parallelogramma che ha per lati le colonne; il segno dice l'orientazione.
:::

::: domanda Che cos'è il segno di una permutazione?
Se la permutazione si ottiene da $[1\ 2\ \cdots\ n]$ con $k$ scambi, il segno è $(-1)^k$: $+1$ se $k$ è pari, $-1$ se è dispari. Ogni trasposizione ha segno $-1$, l'identità $+1$.
:::

::: domanda Come si legge la Definizione 9.1 del determinante?
È la somma, su tutte le $n!$ permutazioni $\sigma$, del prodotto $a_{1\sigma(1)} \cdots a_{n\sigma(n)}$ con il segno di $\sigma$. Ogni prodotto prende un numero da ogni riga e da ogni colonna.
:::

::: domanda Quanti addendi ha la formula per $n = 3$ e quali segni hanno?
Sei: tre col più ($a_{11}a_{22}a_{33}$, $a_{12}a_{23}a_{31}$, $a_{13}a_{21}a_{32}$) e tre col meno ($a_{11}a_{23}a_{32}$, $a_{13}a_{22}a_{31}$, $a_{12}a_{21}a_{33}$), quelli delle tre trasposizioni.
:::

::: domanda Quanto vale il determinante di una matrice triangolare, e perché?
Il prodotto degli elementi della diagonale principale: nella formula tutti gli addendi contengono almeno uno zero, tranne quello della permutazione identità.
:::

::: domanda Quanto vale $\det I_n$?
$1$: $I_n$ è diagonale con tutti 1 sulla diagonale.
:::

::: domanda Che cosa dice la Proposizione 9.5 e a che cosa serve?
$\det({}^tA) = \det A$. Serve a trasferire alle colonne tutto ciò che vale per le righe, per esempio lo sviluppo di Laplace lungo una colonna.
:::

::: domanda Enuncia lo sviluppo di Laplace lungo la riga $i$.
$\det A = \sum_{j=1}^n (-1)^{i+j} a_{ij} \det C_{ij}$, dove $C_{ij}$ è la sottomatrice ottenuta cancellando la riga $i$ e la colonna $j$.
:::

::: domanda Come si ricordano i segni $(-1)^{i+j}$?
Come una scacchiera, con il $+$ in alto a sinistra: $+$ quando $i + j$ è pari, $-$ quando è dispari.
:::

::: domanda Quale riga o colonna conviene scegliere per Laplace?
Quella con più zeri: gli addendi con $a_{ij} = 0$ spariscono e non serve calcolare i loro $\det C_{ij}$.
:::

::: domanda Che cosa succede al determinante se si moltiplica una riga per $c$? E se si moltiplica tutta la matrice?
Una riga per $c$: il determinante è moltiplicato per $c$ (Proposizione 9.11). Tutta la matrice $n \times n$: per $c^n$, perché le righe moltiplicate sono $n$ (Corollario 9.12).
:::

::: domanda Perché una matrice con una riga nulla ha determinante zero?
Sviluppando lungo quella riga ogni addendo contiene un fattore $0$ (Proposizione 9.10).
:::

## Glossario

```glossario
Determinante $\det A$ | Numero associato a una matrice quadrata: $\sum_{\sigma \in S_n} \sgn(\sigma) a_{1\sigma(1)} \cdots a_{n\sigma(n)}$.
Permutazione | Riordinamento di $\{1, \dots, n\}$; si scrive $[\sigma(1) \cdots \sigma(n)]$.
$S_n$ | L'insieme delle $n!$ permutazioni di $\{1, \dots, n\}$.
Trasposizione | Permutazione che scambia due elementi e lascia fermi gli altri; ha segno $-1$.
Segno $\sgn(\sigma)$ | $(-1)^k$, dove $k$ è il numero di scambi con cui si ottiene $\sigma$.
Inversione | Coppia di numeri in cui il più grande precede il più piccolo; la parità delle inversioni dà il segno.
Regola di Sarrus | Schema per le sole $3 \times 3$: diagonali che scendono col più, diagonali che salgono col meno.
Matrice triangolare | Matrice quadrata con zeri sotto (superiore) o sopra (inferiore) la diagonale; il determinante è il prodotto della diagonale.
Matrice identità $I_n$ | 1 sulla diagonale e 0 altrove; $\det I_n = 1$.
Sottomatrice $C_{ij}$ | La matrice $(n - 1) \times (n - 1)$ ottenuta cancellando la riga $i$ e la colonna $j$.
Sviluppo di Laplace | $\det A = \sum_j (-1)^{i+j} a_{ij} \det C_{ij}$ lungo una riga, o la formula analoga lungo una colonna.
Scacchiera dei segni | La disposizione dei segni $(-1)^{i+j}$, con $+$ in alto a sinistra e segni alternati.
Riga nulla | Se una riga o colonna è tutta di zeri, il determinante è $0$.
Riga moltiplicata per $c$ | Moltiplicare una riga (o colonna) per $c$ moltiplica il determinante per $c$; quindi $\det(cA) = c^n \det A$.
Area con segno | Per le $2 \times 2$ reali, $\det A$ è l'area del parallelogramma delle colonne, con il segno dell'orientazione.
```

## Checklist

```checklist
- So dire per quali matrici esiste il determinante e riconosco il tranello della matrice non quadrata.
- So calcolare un determinante $2 \times 2$ e spiegare che cosa misura.
- So trovare il segno di una permutazione e leggere la Definizione 9.1.
- So scrivere i sei addendi del determinante $3 \times 3$ e usare la regola di Sarrus.
- So calcolare il determinante di una matrice triangolare e so che $\det I_n = 1$.
- So che $\det({}^tA) = \det A$ e perché permette di lavorare anche sulle colonne.
- So sviluppare un determinante con Laplace lungo qualsiasi riga o colonna, con i segni della scacchiera.
- So scegliere la riga o colonna più comoda e ridurre una $4 \times 4$ o $5 \times 5$ a pochi conti.
- So portare fuori un fattore comune da una riga o da una colonna.
- So usare $\det(cA) = c^n \det A$ ed evitare $\det(A + B) = \det A + \det B$.
- So calcolare determinanti con numeri complessi, radici, $\pi$ ed $e$ senza calcolatrice.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 9 «Matrici II», pp. 41–45: le sezioni 9.A (determinante, matrici triangolari, identità), 9.B (sviluppo di Laplace), 9.C (proprietà) e 9.D (esercizi) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizioni 9.1 e 9.4, Proposizioni 9.3, 9.5, 9.10, 9.11, Teorema 9.6, Corollari 9.7 e 9.12, Esempi 9.2, 9.8, 9.9, Esercizi 9.13 e 9.14).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §3.3.1–3.3.4 (definizione, colorazioni, Proposizione 3.3.2, matrici triangolari, identità, Teorema 3.3.5), §3.3.10 (basi positive e negative, area e volume), §3.4.6 (Osservazione 3.4.9 sul determinante della somma), Esercizi 3.10 e 3.11.
- **Esame**: testi degli appelli di Algebra lineare dal 24/01/2024 al 07/09/2026 (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); riportate con soluzione propria le domande 4 del 10/07/2025, 3 del 02/09/2025 e 2 del 03/06/2026; le altre sono citate per numero.
- Le parti **«Oltre le dispense»** (significato geometrico, regola di Sarrus, segno con le inversioni, dimostrazioni di 9.5 e dell'idea di Laplace, esercizi senza numero) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
