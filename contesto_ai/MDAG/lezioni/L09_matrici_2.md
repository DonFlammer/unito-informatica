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
  Il determinante è un numero che si calcola da una tabella quadrata e dice di quanto la matrice ingrandisce le aree.
  Qui impari a calcolarlo in tutti i modi che servono all'esame: la formula per le tabelle piccole, il caso facile
  delle triangolari e il metodo di Laplace, che riduce una tabella grande a tabelle più piccole.
materiale: dispense
scheda:
  Dispense: lezione 9 · pp. 41–45
  Libro: Martelli, §3.3.1–3.3.4 e §3.3.10
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 9 «Matrici II»; B. Martelli, Geometria e algebra lineare, §3.3.1–3.3.4, §3.3.10 e §3.4.6
appunti_html: appunti/MDAG/L09_matrici_2.html
genera_html: true
---

## In breve

- Il **determinante** è un numero che si calcola da una matrice **quadrata**, con tante righe quante colonne. Le matrici non quadrate non hanno determinante.
- Per le matrici $2 \times 2$ è «diagonale meno l'altra diagonale». Senza segno è l'area del parallelogramma che ha per lati le due colonne.
- Per le matrici più grandi la definizione delle dispense somma tanti prodotti con un segno. È la parte teorica: all'esame non si usa direttamente.
- Per una matrice **triangolare** il determinante è il prodotto dei numeri sulla diagonale.
- Lo **sviluppo di Laplace** riduce un determinante grande a determinanti più piccoli. Conviene scegliere la riga o la colonna con più zeri, e i segni vanno a scacchiera.
- Una riga di zeri dà determinante zero. Moltiplicare una riga per un numero moltiplica il determinante per quel numero.
- All'esame: «il determinante di questa matrice è…», con matrici grandi piene di zeri, con $\pi$ ed $e$ da tirare fuori, oppure con il tranello della matrice non quadrata.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Un numero che misura un'area (pp. 41–42)

Prendi la matrice

$$A = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}.$$

Le sue due colonne sono le frecce $(3, 1)$ e $(1, 2)$. Disegnale nel piano partendo dall'origine: insieme formano un parallelogramma. Quanto è grande?

```grafico
titolo: Il parallelogramma con lati ${}^t(3, 1)$ e ${}^t(1, 2)$ ha area $3 \cdot 2 - 1 \cdot 1 = 5$
x: -0.5 4.5
y: -0.5 3.5
poligono: 0 0 3 1 4 3 1 2 | verde
vettore: 3 1 | accento | spesso | $A^1$ | se
vettore: 1 2 | blu | spesso | $A^2$ | no
```

Guarda la figura. Il parallelogramma sta dentro il rettangolo largo 4 e alto 3, che ha area 12. Tolgo i pezzi che avanzano:

1. due triangoli con lati 3 e 1, ciascuno di area $\frac{3 \cdot 1}2 = 1{,}5$: in tutto 3;
2. due triangoli con lati 1 e 2, ciascuno di area $\frac{1 \cdot 2}2 = 1$: in tutto 2;
3. due quadratini di lato 1: in tutto 2.

Resta $12 - 3 - 2 - 2 = 5$.

Lo stesso numero si ottiene in un colpo: moltiplico i due numeri sulla diagonale principale, $3 \cdot 2 = 6$, e tolgo il prodotto dei due numeri sull'altra diagonale, $1 \cdot 1 = 1$. Viene $6 - 1 = 5$.

Questo numero si chiama **determinante** della matrice, e si scrive $\det A$. Per una matrice $2 \times 2$ qualsiasi:

$$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc.$$

A parole: **diagonale principale meno l'altra diagonale**.

> [!IDEA]
> Una matrice quadrata trasforma le figure del piano. Il determinante dice di quanto le ingrandisce: le aree vengono moltiplicate per il determinante, senza segno. Se il determinante è zero, la figura viene schiacciata su una linea.

### Il segno

Scambia le due colonne: $\begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix}$. Il parallelogramma è lo stesso, ma il determinante diventa $1 \cdot 1 - 3 \cdot 2 = 1 - 6 = -5$. Stessa area, segno opposto. Il segno dice in che **ordine** girano le due colonne: in senso antiorario o orario.

E se le due colonne sono parallele, come $(1, 2)$ e $(2, 4)$? Il parallelogramma si schiaccia su un segmento e non ha area: $\det \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = 1 \cdot 4 - 2 \cdot 2 = 0$.

::: prova Quanto vale il determinante di $\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$?
Diagonale principale: $4 \cdot 3 = 12$. Altra diagonale: $1 \cdot 2 = 2$. Determinante: $12 - 2 = 10$.
:::

> [!TRAPPOLA] Il segno di $ad - bc$
> Si toglie il prodotto dell'**altra** diagonale, con i suoi segni. Per esempio $\det \begin{pmatrix} 1 & 2 \\ -1 & 4 \end{pmatrix} = 1 \cdot 4 - 2 \cdot (-1) = 4 + 2 = 6$, non $4 - 2 = 2$. Metti sempre le parentesi attorno ai numeri negativi.

> [!OLTRE] · il determinante misura aree e volumi
> Martelli (§3.3.10) mostra che per una matrice $2 \times 2$ reale il determinante senza segno è l'area del parallelogramma che ha per lati le due colonne. Per una $3 \times 3$ è il volume della «scatola storta» (il parallelepipedo) che ha per spigoli le tre colonne. Ne riparliamo alla fine della lezione, con uno strumento interattivo.

> [!RICORDA]
> - Il determinante esiste solo per le matrici quadrate.
> - Per le $2 \times 2$: diagonale principale meno l'altra diagonale, $ad - bc$.
> - Senza segno è un'area; il segno dice l'ordine delle colonne; zero vuol dire figura schiacciata.

## La definizione delle dispense (pp. 41–42)

Per le matrici più grandi la formula si allunga. Le dispense la scrivono con le **permutazioni**, cioè i modi di rimettere in fila dei numeri.

> [!NOTA] Serve per capire, non per l'esame
> In questa sezione c'è la definizione generale del determinante. All'esame non si usa mai direttamente: si usano la formula delle $2 \times 2$, la regola di Sarrus per le $3 \times 3$ e lo sviluppo di Laplace. Leggila per sapere da dove vengono quelle regole; se vuoi, passa subito alla sezione sulle matrici triangolari.

### Rimettere in fila dei numeri

Una **permutazione** dei numeri da 1 a $n$ è un modo di rimetterli in fila, ognuno una volta sola. Per esempio con 1, 2, 3 si possono fare sei file:

$$[1\ 2\ 3], \quad [1\ 3\ 2], \quad [2\ 1\ 3], \quad [2\ 3\ 1], \quad [3\ 1\ 2], \quad [3\ 2\ 1].$$

Le dispense chiamano una permutazione con la lettera greca $\sigma$, «sigma», e scrivono tra parentesi quadre la nuova fila. Per esempio in $\sigma = [2\ 3\ 1]$ al primo posto c'è il 2, al secondo il 3, al terzo l'1. Si scrive $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$.

Quante sono le permutazioni di $n$ numeri? Per il primo posto ci sono $n$ scelte, per il secondo $n - 1$, e così via: in tutto $n \cdot (n - 1) \cdots 2 \cdot 1$. Questo numero si scrive $n!$ e si legge «$n$ fattoriale».

| $n$ | $n!$ | quante permutazioni |
|---|---|--:|
| 2 | $2 \cdot 1$ | 2 |
| 3 | $3 \cdot 2 \cdot 1$ | 6 |
| 4 | $4 \cdot 3 \cdot 2 \cdot 1$ | 24 |
| 5 | $5 \cdot 4 \cdot 3 \cdot 2 \cdot 1$ | 120 |

L'insieme di tutte le permutazioni di $n$ numeri si chiama $S_n$. Le vedrai meglio nella parte di Matematica Discreta del corso.

### Il segno di una permutazione

Ogni fila si ottiene da quella in ordine, $[1\ 2\ \cdots\ n]$, scambiando due numeri alla volta. Uno scambio di due numeri soli si chiama **trasposizione**.

- Se servono un numero **pari** di scambi, la permutazione ha segno $+1$.
- Se servono un numero **dispari** di scambi, ha segno $-1$.

Il segno si scrive $\sgn(\sigma)$, «segno di sigma». La fila già in ordine si chiama identità, $\mathrm{id}$, e ha segno $+1$: zero scambi.

| $\sigma$ | Come si ottiene da $[1\ 2\ 3]$ | Scambi | $\sgn(\sigma)$ |
|---|---|--:|--:|
| $[1\ 2\ 3] = \mathrm{id}$ | nessuno scambio | 0 | $+1$ |
| $[1\ 3\ 2]$ | scambio il secondo e il terzo posto | 1 | $-1$ |
| $[3\ 2\ 1]$ | scambio il primo e il terzo posto | 1 | $-1$ |
| $[2\ 1\ 3]$ | scambio il primo e il secondo posto | 1 | $-1$ |
| $[2\ 3\ 1]$ | $[1\ 2\ 3] \to [2\ 1\ 3] \to [2\ 3\ 1]$ | 2 | $+1$ |
| $[3\ 1\ 2]$ | $[1\ 2\ 3] \to [1\ 3\ 2] \to [3\ 1\ 2]$ | 2 | $+1$ |

Alla stessa fila si può arrivare con scambi diversi, ma il loro numero è sempre pari o sempre dispari (lo dimostra la Matematica Discreta). Quindi il segno non dipende da come si fanno gli scambi.

> [!APPROFONDIMENTO] il segno contando le inversioni
> Un modo veloce per trovare il segno: conta le **inversioni**, cioè le coppie in cui un numero più grande sta prima di uno più piccolo. Se sono in numero pari il segno è $+1$, se dispari è $-1$. In $[3\ 1\ 2]$ le inversioni sono $(3, 1)$ e $(3, 2)$: due, segno $+1$. In $[2\ 1\ 4\ 3]$ sono $(2, 1)$ e $(4, 3)$: segno $+1$. In $[3\ 2\ 1]$ sono $(3, 2)$, $(3, 1)$, $(2, 1)$: tre, segno $-1$.

### La formula

Ecco come le dispense definiscono il determinante.

> [!DEF] 9.1 · Determinante
> Sia $A$ una matrice quadrata $n \times n$. Il **determinante** di $A$ è il numero
> $$\det A = \sum_{\sigma \in S_n} \sgn(\sigma)\, a_{1\sigma(1)} \cdots a_{n\sigma(n)}.$$
> Qui $S_n$ indica l'insieme delle $n!$ permutazioni di $\{1, \dots, n\}$: questa è una sommatoria su $n!$ elementi. Il termine $\sgn(\sigma) = \pm 1$ indica il segno della permutazione $\sigma$ ed è $1$ oppure $-1$ a seconda di $\sigma$. Se $\sigma$ è un prodotto di $k$ trasposizioni (permutazioni che scambiano due elementi e lasciano tutti gli altri elementi), allora $\sgn(\sigma) = (-1)^k$. La permutazione $\sigma$ si indica con il simbolo $[\sigma(1) \cdots \sigma(n)]$.

**Come si legge.**

- $\sum$ si legge «somma»: si sommano tanti pezzi, uno per ogni permutazione $\sigma$ di $S_n$.
- Ogni pezzo è un prodotto di $n$ numeri della matrice. Dalla riga 1 si prende il numero nella colonna $\sigma(1)$, dalla riga 2 quello nella colonna $\sigma(2)$, e così via.
- Siccome $\sigma$ è una permutazione, le colonne sono tutte diverse. Quindi **ogni prodotto prende esattamente un numero da ogni riga e uno da ogni colonna**, come $n$ torri su una scacchiera che non si possono mangiare (l'immagine è di Martelli).
- Ogni prodotto va sommato con il segno della sua permutazione.
- **Solo matrici quadrate**: la formula usa lo stesso $n$ per righe e colonne.
- **Quanti pezzi**: $n!$. Già per $n = 4$ sono 24, per $n = 5$ sono 120. Per questo con le matrici grandi si usa lo sviluppo di Laplace.

### I casi piccoli

**Matrici $1 \times 1$.** La matrice è un numero solo, e c'è una sola permutazione, $[1]$, con segno $+1$. Il determinante è il numero stesso: $\det(a_{11}) = a_{11}$.

**Matrici $2 \times 2$.** Le permutazioni sono $[1\ 2]$, con segno $+1$, e $[2\ 1]$, con segno $-1$. I due prodotti sono $a_{11}a_{22}$ e $a_{12}a_{21}$:

$$\det \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = a_{11}a_{22} - a_{12}a_{21}.$$

È la formula «diagonale meno l'altra diagonale» della prima sezione.

**Matrici $3 \times 3$.** Le sei permutazioni della tabella danno sei prodotti. Le tre con uno scambio hanno segno meno, le altre tre più:

$$\det A = a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} - a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}.$$

Controlla un prodotto con la tabella: $[2\ 3\ 1]$ ha $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$, quindi dà $+a_{12}a_{23}a_{31}$.

> [!METODO] La regola di Sarrus, solo per le $3 \times 3$
> Per ricordare i sei prodotti:
> 1. ricopia le prime due colonne a destra della matrice;
> 2. le tre diagonali che **scendono** verso destra danno i prodotti con il più;
> 3. le tre che **salgono** verso destra danno quelli con il meno.
> $$\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}\!\begin{matrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \end{matrix} \qquad \begin{aligned} &+\ a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} \\ &-\ a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} \end{aligned}$$
> Attenzione: **funziona solo per le $3 \times 3$**. Per una $4 \times 4$ le «diagonali» sarebbero 8, mentre i prodotti veri sono 24.

> [!ESEMPIO] 9.2 · Tre determinanti
> Il determinante delle matrici
> $$(3), \qquad \begin{pmatrix} 1 & 2 \\ -1 & 4 \end{pmatrix}, \qquad \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & 2 \\ -1 & 0 & 1 \end{pmatrix}$$
> è $3$ per la prima, $\ 4 - (-2) = 6$ per la seconda e $\ -6$ per la terza. Vediamo i conti.
> - $1 \times 1$: il determinante è il numero stesso, 3.
> - $2 \times 2$: $1 \cdot 4 - 2 \cdot (-1) = 4 - (-2) = 6$.
> - $3 \times 3$, con Sarrus. Le diagonali che scendono: $1 \cdot 1 \cdot 1 + 2 \cdot 2 \cdot (-1) + 1 \cdot 2 \cdot 0 = 1 - 4 + 0 = -3$. Le diagonali che salgono: $1 \cdot 1 \cdot (-1) + 1 \cdot 2 \cdot 0 + 2 \cdot 2 \cdot 1 = -1 + 0 + 4 = 3$. Determinante: $-3 - 3 = -6$.
>
> Con la formula dei sei prodotti, nell'ordine della formula:
> $$\underbrace{1 \cdot 1 \cdot 1}_{a_{11}a_{22}a_{33}} - \underbrace{1 \cdot 2 \cdot 0}_{a_{11}a_{23}a_{32}} - \underbrace{1 \cdot 1 \cdot (-1)}_{a_{13}a_{22}a_{31}} - \underbrace{2 \cdot 2 \cdot 1}_{a_{12}a_{21}a_{33}} + \underbrace{2 \cdot 2 \cdot (-1)}_{a_{12}a_{23}a_{31}} + \underbrace{1 \cdot 2 \cdot 0}_{a_{13}a_{21}a_{32}} = 1 - 0 + 1 - 4 - 4 + 0 = -6.$$

::: prova Quanti prodotti ha la formula del determinante per una matrice $4 \times 4$?
Uno per ogni permutazione di 4 numeri: $4! = 4 \cdot 3 \cdot 2 \cdot 1 = 24$.
:::

> [!RICORDA]
> - La definizione somma un prodotto per ogni permutazione, con il suo segno: ogni prodotto prende un numero da ogni riga e da ogni colonna.
> - Per le $3 \times 3$ i prodotti sono sei, e si ricordano con la regola di Sarrus, che vale solo per le $3 \times 3$.

## Le matrici triangolari (pp. 42–43)

Prendi una matrice con tutti zeri sotto la diagonale:

$$\begin{pmatrix} 2 & 5 & -1 \\ 0 & 3 & 4 \\ 0 & 0 & -1 \end{pmatrix}.$$

Calcolo il determinante con Sarrus. Le diagonali che scendono danno $2 \cdot 3 \cdot (-1) + 5 \cdot 4 \cdot 0 + (-1) \cdot 0 \cdot 0 = -6$. Quelle che salgono contengono tutte uno zero: danno 0. Il determinante è $-6$, cioè proprio $2 \cdot 3 \cdot (-1)$, il prodotto dei numeri sulla diagonale.

Succede sempre. Le dispense lo scrivono così.

> [!PROP] 9.3 · Determinante di una matrice triangolare
> Sia $A \in M(n)$ una matrice **triangolare superiore**
> $$A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ 0 & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & a_{nn} \end{pmatrix}.$$
> Vale
> $$\det A = a_{11}a_{22} \cdots a_{nn}.$$

**Come si legge.** Per una matrice triangolare superiore (zeri sotto la diagonale, lezione L06) il determinante è il prodotto dei numeri sulla diagonale. I numeri sopra la diagonale non contano affatto.

Il motivo, a parole: nella formula delle permutazioni ogni prodotto prende un numero da ogni riga e da ogni colonna. Se si vuole evitare gli zeri sotto la diagonale, l'unico modo è prendere proprio i numeri sulla diagonale. Tutti gli altri prodotti contengono uno zero.

> [!DIM] della Proposizione 9.3
> La spiegazione delle dispense, passo per passo.
> 1. Sotto la diagonale ci sono solo zeri: $a_{ij} = 0$ quando $i > j$.
> 2. Un prodotto $a_{1\sigma(1)} \cdots a_{n\sigma(n)}$ può essere diverso da zero solo se nessun fattore sta sotto la diagonale, cioè se $\sigma(i) \ge i$ per ogni riga $i$.
> 3. Nell'ultima riga: $\sigma(n) \ge n$, quindi $\sigma(n) = n$. Nella penultima: $\sigma(n - 1) \ge n - 1$ e $\sigma(n - 1)$ non può essere $n$ (la colonna $n$ è già usata), quindi $\sigma(n - 1) = n - 1$. Risalendo così, $\sigma(i) = i$ per ogni $i$: $\sigma$ è l'identità.
> 4. Resta solo il prodotto dell'identità, che ha segno $+1$: $\det A = a_{11}a_{22} \cdots a_{nn}$.

Lo stesso vale per le matrici **triangolari inferiori** (zeri sopra la diagonale), con lo stesso ragionamento partendo dalla prima riga. E vale per le **diagonali**, che sono triangolari in tutti e due i sensi.

> [!ESEMPIO] · Tre determinanti senza fatica
> $$\det \begin{pmatrix} 2 & 5 & -1 \\ 0 & 3 & 4 \\ 0 & 0 & -1 \end{pmatrix} = 2 \cdot 3 \cdot (-1) = -6, \qquad \det \begin{pmatrix} 1 & 0 & 0 \\ 7 & 2 & 0 \\ -3 & 5 & 4 \end{pmatrix} = 1 \cdot 2 \cdot 4 = 8,$$
> $$\det \begin{pmatrix} 5 & 9 & \pi \\ 0 & 0 & \sqrt 2 \\ 0 & 0 & 7 \end{pmatrix} = 5 \cdot 0 \cdot 7 = 0.$$
> I numeri sopra la diagonale non contano, e basta uno zero sulla diagonale per avere determinante zero.

### La matrice identità

Le dispense introducono qui una matrice che avrà un ruolo centrale in tutto il corso.

> [!DEF] 9.4 · Matrice identità
> La **matrice identità** di taglia $n \times n$ è la matrice
> $$I_n = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}$$
> i cui coefficienti sono 1 sulla diagonale principale e 0 altrove.

**Come si legge.** $I_n$, «i con enne», è la matrice quadrata con 1 sulla diagonale e 0 dappertutto altrove. Per esempio $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

È diagonale, quindi per la Proposizione 9.3

$$\det(I_n) = 1 \cdot 1 \cdots 1 = 1.$$

Nel prodotto tra matrici fa la parte del numero 1: $I_nA = AI_n = A$ (lo hai visto nella lezione L08). Nel disegno non cambia niente: ogni figura resta com'è, e infatti le aree vengono moltiplicate per 1. È il punto di partenza per le matrici inverse della lezione L10.

::: prova Quanto vale il determinante di $\begin{pmatrix} 2 & 0 & 0 \\ 5 & 3 & 0 \\ 1 & 7 & -1 \end{pmatrix}$?
È triangolare inferiore: zeri sopra la diagonale. Il determinante è il prodotto della diagonale, $2 \cdot 3 \cdot (-1) = -6$.
:::

### La trasposta ha lo stesso determinante

Prendi $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e la sua trasposta, con righe e colonne scambiate (lezione L08): ${}^tA = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$. I determinanti sono $4 - 6 = -2$ e $4 - 6 = -2$: uguali.

Le dispense dicono che succede sempre, e che segue direttamente dalla definizione.

> [!PROP] 9.5
> Vale $\det({}^tA) = \det A$.

**Come si legge.** Scambiare righe e colonne non cambia il determinante.

Per la matrice $3 \times 3$ dell'Esempio 9.2, la trasposta $\begin{pmatrix} 1 & 2 & -1 \\ 2 & 1 & 0 \\ 1 & 2 & 1 \end{pmatrix}$ ha di nuovo determinante $-6$: prova con Sarrus.

> [!DIM] della Proposizione 9.5
> Trasponendo, la casella $(i, j)$ va in $(j, i)$. Un prodotto di $\det({}^tA)$ è $({}^tA)_{1\sigma(1)} \cdots ({}^tA)_{n\sigma(n)} = a_{\sigma(1)1} \cdots a_{\sigma(n)n}$: prende ancora un numero da ogni riga e da ogni colonna di $A$. Riordinando i fattori per riga, è il prodotto di $\det A$ della permutazione inversa $\sigma^{-1}$, quella che «disfa» $\sigma$. E $\sigma^{-1}$ ha lo stesso segno di $\sigma$: se $\sigma$ si ottiene con $k$ scambi, $\sigma^{-1}$ si ottiene con gli stessi $k$ scambi fatti in ordine inverso. Quindi $\det({}^tA)$ e $\det A$ sono somme degli stessi prodotti con gli stessi segni (Martelli, Proposizione 3.3.2).

La conseguenza pratica: **tutto quello che vale per le righe vale anche per le colonne**, perché le righe di $A$ sono le colonne di ${}^tA$ e il determinante è lo stesso.

> [!RICORDA]
> - Triangolare (superiore, inferiore o diagonale): il determinante è il prodotto della diagonale.
> - La matrice identità ha determinante 1.
> - La trasposta ha lo stesso determinante: le regole sulle righe valgono anche per le colonne.

## Ridurre il problema: lo sviluppo di Laplace (pp. 43–44)

Con le matrici grandi la formula delle permutazioni ha troppi prodotti: 24 per una $4 \times 4$, 120 per una $5 \times 5$. Lo **sviluppo di Laplace** riduce un determinante grande a determinanti più piccoli di un passo: una $4 \times 4$ diventa qualche $3 \times 3$, una $3 \times 3$ diventa qualche $2 \times 2$. E se nella matrice ci sono molti zeri, molti pezzi spariscono.

### Le sottomatrici

Per prima cosa serve un'operazione: cancellare una riga e una colonna. Da una matrice quadrata, togliendo la riga $i$ e la colonna $j$, resta una matrice più piccola di un passo. Le dispense la chiamano $C_{ij}$.

Un esempio con

$$A = \begin{pmatrix} 1 & -1 & 0 \\ 2 & -1 & 5 \\ 1 & 1 & -1 \end{pmatrix}.$$

- $C_{11}$: tolgo la riga 1 e la colonna 1. Resta $\begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix}$.
- $C_{12}$: tolgo la riga 1 e la colonna 2. Dalla seconda riga restano 2 e 5, dalla terza 1 e $-1$: $\begin{pmatrix} 2 & 5 \\ 1 & -1 \end{pmatrix}$.
- $C_{23}$: tolgo la riga 2 e la colonna 3. Resta $\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$.

### I segni a scacchiera

Ogni casella riceve un segno, più o meno, disposti come le caselle bianche e nere di una scacchiera, con il più in alto a sinistra:

$$\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix} \qquad \begin{pmatrix} + & - & + & - \\ - & + & - & + \\ + & - & + & - \\ - & + & - & + \end{pmatrix}$$

Il segno della casella nella riga $i$ e nella colonna $j$ è $(-1)^{i+j}$: più se $i + j$ è pari, meno se è dispari. Per esempio la casella $(2, 3)$ ha $2 + 3 = 5$, dispari: segno meno.

### Il metodo

Ecco lo sviluppo lungo la prima riga della matrice $A$, passo per passo.

1. Scelgo la prima riga: i numeri sono 1, $-1$, 0. I segni della prima riga della scacchiera sono $+, -, +$.
2. Per ogni numero della riga: prendo il suo segno, il numero, e il determinante della sottomatrice che resta cancellando la sua riga e la sua colonna.
3. Sommo tutto:
   $$\det A = +1 \cdot \det C_{11} - (-1) \cdot \det C_{12} + 0 \cdot \det C_{13}.$$
4. Il terzo pezzo è moltiplicato per 0: **non serve calcolarlo**.

Le dispense scrivono il metodo così.

> [!TEOREMA] 9.6 · Sviluppo di Laplace
> Per ogni $i$ fissato vale l'uguaglianza
> $$\det A = \sum_{j=1}^n (-1)^{i+j} a_{ij} \det C_{ij}.$$

**Come si legge.**

- Si sceglie **una riga** qualsiasi, la riga numero $i$. Il risultato non dipende dalla scelta.
- $\sum_{j=1}^n$ si legge «somma per $j$ da 1 a $n$»: si fa un pezzo per ogni numero $a_{ij}$ di quella riga, colonna per colonna.
- Ogni pezzo è: il segno della scacchiera $(-1)^{i+j}$, per il numero $a_{ij}$, per il determinante della sottomatrice $C_{ij}$.
- Se un numero è zero, il suo pezzo sparisce.

Siccome la trasposta ha lo stesso determinante, lo stesso vale per le colonne.

> [!COROLLARIO] 9.7 · Sviluppo lungo una colonna
> Per ogni $j$ fissato vale l'uguaglianza
> $$\det A = \sum_{i=1}^n (-1)^{i+j} a_{ij} \det C_{ij}.$$

**Come si legge.** Stessa cosa, ma scegliendo una **colonna**: si fa un pezzo per ogni numero di quella colonna, riga per riga.

> [!ESEMPIO] 9.8 · Sviluppo lungo la prima riga
> Per calcolare il determinante seguente, sviluppiamo lungo la prima riga (cioè prendiamo $i = 1$):
> $$\det \begin{pmatrix} 1 & -1 & 0 \\ 2 & -1 & 5 \\ 1 & 1 & -1 \end{pmatrix} = 1 \cdot \det \begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix} - (-1) \cdot \det \begin{pmatrix} 2 & 5 \\ 1 & -1 \end{pmatrix} + 0 \cdot \det \begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix}.$$
> I segni sono $+, -, +$ (prima riga della scacchiera). I tre determinanti $2 \times 2$:
> - $\det C_{11} = (-1)(-1) - 5 \cdot 1 = 1 - 5 = -4$;
> - $\det C_{12} = 2 \cdot (-1) - 5 \cdot 1 = -2 - 5 = -7$;
> - il terzo non serve, perché è moltiplicato per $0$.
>
> Totale: $1 \cdot (-4) - (-1) \cdot (-7) + 0 = -4 - 7 + 0 = -11$.

Controllo che il risultato non dipende dalla scelta: sviluppo la stessa matrice lungo la **prima colonna**, con i segni $+, -, +$.

$$1 \cdot \det \begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix} - 2 \cdot \det \begin{pmatrix} -1 & 0 \\ 1 & -1 \end{pmatrix} + 1 \cdot \det \begin{pmatrix} -1 & 0 \\ -1 & 5 \end{pmatrix}$$

$$= 1 \cdot (-4) - 2 \cdot 1 + 1 \cdot (-5) = -11.$$

Stesso risultato, ma con tre determinanti $2 \times 2$ invece di due. Per questo le dispense consigliano di sviluppare lungo una riga o una colonna con degli zeri.

> [!ESEMPIO] 9.9 · Sviluppo lungo una colonna quasi vuota
> Sviluppando la matrice seguente sulla seconda colonna otteniamo:
> $$\det \begin{pmatrix} 1 & 0 & 1 \\ 2 & 0 & 1 \\ \pi & 3 & \sqrt 7 \end{pmatrix} = (-1) \cdot 3 \cdot \det \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix} = 3.$$
> Nella seconda colonna l'unico numero diverso da zero è $a_{32} = 3$, in posizione $(3, 2)$: segno $(-1)^{3+2} = -1$. Cancellando la riga 3 e la colonna 2 resta $C_{32} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}$, con determinante $1 - 2 = -1$. Quindi $(-1) \cdot 3 \cdot (-1) = 3$. I numeri $\pi$ e $\sqrt 7$, che sembravano complicare tutto, non entrano nel conto.
>
> Nello sviluppo bisogna sempre stare attenti al segno $(-1)^{i+j}$ della casella, che cambia come su una scacchiera.

::: prova Che segno ha la casella $(3, 4)$ nella scacchiera? E la casella $(4, 4)$?
$(3, 4)$: $3 + 4 = 7$, dispari, segno meno. $(4, 4)$: $4 + 4 = 8$, pari, segno più.
:::

> [!DIM] · perché lo sviluppo di Laplace funziona (caso $3 \times 3$)
> Prendi la formula dei sei prodotti e raccogli i pezzi secondo il numero della prima riga che contengono:
> $$\det A = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31}).$$
> Le tre parentesi sono esattamente $\det C_{11}$, $\det C_{12}$ e $\det C_{13}$, e i segni sono $+, -, +$. È lo sviluppo lungo la prima riga. In generale (Martelli, Teorema 3.3.5) i prodotti che contengono $a_{ij}$ sono, a parte il fattore $a_{ij}$, proprio i prodotti di $\det C_{ij}$, con un segno in più $(-1)^{i+j}$.

> [!METODO] Calcolare un determinante con Laplace
> 1. Controlla che la matrice sia **quadrata**; se non lo è, il determinante non esiste.
> 2. Se è triangolare, moltiplica la diagonale e hai finito.
> 3. Scegli la riga o la colonna con **più zeri**.
> 4. Per ogni numero diverso da zero di quella riga: segno della scacchiera, numero, determinante della sottomatrice che resta cancellando la sua riga e la sua colonna.
> 5. Ripeti sulle sottomatrici finché arrivi a $2 \times 2$, oppure a matrici triangolari.
> 6. Controllo: sviluppa lungo un'altra riga o colonna, oppure, per una $3 \times 3$, usa Sarrus.

> [!ESEMPIO] · Una $4 \times 4$ con una colonna quasi vuota
> $$M = \begin{pmatrix} 2 & 0 & 1 & 3 \\ 1 & 0 & 0 & 2 \\ 0 & 1 & 4 & -1 \\ 3 & 0 & 2 & 1 \end{pmatrix}$$
> 1. La seconda colonna ha un solo numero diverso da zero: l'1 nella riga 3. La casella $(3, 2)$ ha segno meno.
> 2. Cancello la riga 3 e la colonna 2:
>    $$\det M = -1 \cdot \det \begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & 2 \\ 3 & 2 & 1 \end{pmatrix}.$$
> 3. Sviluppo la $3 \times 3$ lungo la seconda riga, che ha uno zero (segni $-, +, -$):
>    $$-1 \cdot \det \begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix} + 0 - 2 \cdot \det \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix} = -1 \cdot (1 - 6) - 2 \cdot (4 - 3) = 5 - 2 = 3.$$
> 4. Quindi $\det M = -1 \cdot 3 = -3$.
>
> Invece di 24 prodotti, tre determinanti $2 \times 2$.

Nello strumento qui sotto puoi controllare i tuoi determinanti: scrivi la matrice e premi «Calcola». Lo strumento non usa Laplace ma le **mosse di Gauss**, che trasformano la matrice in una triangolare cambiando il determinante in modo controllato: è il metodo della prossima lezione, L10. Prova la matrice dell'Esempio 9.8 (già inserita) e poi la $M$ qui sopra (`2 0 1 3; 1 0 0 2; 0 1 4 -1; 3 0 2 1`).

```widget gauss
titolo: Controlla un determinante
matrice: 1 -1 0; 2 -1 5; 1 1 -1
modo: determinante
modi: determinante
```

> [!RICORDA]
> - Laplace: si sceglie una riga o una colonna; per ogni suo numero, segno della scacchiera per numero per determinante della sottomatrice.
> - I numeri zero fanno sparire il loro pezzo: si sceglie la riga o la colonna con più zeri.
> - I segni sono a scacchiera, con il più in alto a sinistra.

## Tre regole che fanno risparmiare conti (p. 44)

Dallo sviluppo di Laplace vengono subito tre regole. Servono a calcolare i determinanti senza fare tutti i conti.

### Una riga di zeri

Se in una riga ci sono solo zeri, sviluppo lungo quella riga: ogni pezzo è «zero per qualcosa». Il determinante è zero. Per esempio

$$\det \begin{pmatrix} 4 & 7 & 1 \\ 0 & 0 & 0 \\ 2 & 9 & 5 \end{pmatrix} = 0$$

senza fare conti. Le dispense lo scrivono così.

> [!PROP] 9.10 · Riga o colonna nulla
> Se gli elementi di una riga (o colonna) di $A$ sono tutti nulli, allora $\det(A) = 0$.

**Come si legge.** Una riga o una colonna tutta di zeri rende il determinante zero.

### Una riga moltiplicata per un numero

Prendi $\det \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = 4 - 6 = -2$. Moltiplico la prima riga per 5:

$$\det \begin{pmatrix} 5 & 10 \\ 3 & 4 \end{pmatrix} = 20 - 30 = -10 = 5 \cdot (-2).$$

Il determinante è stato moltiplicato per 5. Le dispense lo scrivono così.

> [!PROP] 9.11 · Moltiplicare una riga per un numero
> Se la matrice $A'$ si ottiene dalla matrice $A$ moltiplicando tutti gli elementi di una riga (o colonna) per il numero $c$, allora $\det(A') = c \cdot \det(A)$.

**Come si legge.** $A'$, «a primo», è la matrice nuova. Se una sola riga, o una sola colonna, viene moltiplicata per un numero, il determinante viene moltiplicato per lo stesso numero.

Il perché: sviluppo il determinante lungo la riga moltiplicata. Le sottomatrici non contengono quella riga, quindi sono le stesse di prima; cambiano solo i numeri davanti, tutti moltiplicati per $c$. Ogni pezzo è moltiplicato per $c$, e quindi anche la somma.

Letta al contrario, la regola permette di **tirare fuori** un numero che compare in tutta una riga o in tutta una colonna:

$$\det \begin{pmatrix} 6 & 9 \\ 2 & 5 \end{pmatrix} = 3 \det \begin{pmatrix} 2 & 3 \\ 2 & 5 \end{pmatrix} = 3 \cdot (10 - 6) = 12.$$

Controllo diretto: $6 \cdot 5 - 9 \cdot 2 = 30 - 18 = 12$. È il trucco decisivo quando nella matrice compaiono $\pi$, $e$, $\sqrt 2$ o $i$ (Esercizio 9.14 e «Verso l'esame»).

### Tutta la matrice moltiplicata per un numero

La matrice $3A$ ha **tutte** le righe moltiplicate per 3. Per la regola di prima, il 3 esce una volta per ogni riga. Le dispense lo scrivono così.

> [!COROLLARIO] 9.12 · Il determinante di $cA$
> Dalla proposizione otteniamo subito
> $$\det(cA) = c^n \cdot \det(A)$$
> e in particolare
> $$\det(-A) = (-1)^n \cdot \det(A).$$

**Come si legge.** Moltiplicando tutta la matrice $n \times n$ per $c$, il determinante viene moltiplicato per $c$ elevato alla $n$: $c$ esce $n$ volte, una per riga. Con $c = -1$: per $n$ pari il segno non cambia, per $n$ dispari cambia.

Un esempio con $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, che ha determinante $-2$:

$$\det(3A) = \det \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix} = 36 - 54 = -18 = 3^2 \cdot (-2).$$

::: prova Una matrice $3 \times 3$ ha determinante 4. Quanto vale il determinante del suo doppio?
$2^3 \cdot 4 = 8 \cdot 4 = 32$: il 2 esce tre volte, una per riga.
:::

> [!TRAPPOLA] Il doppio di $A$ non raddoppia il determinante, e la somma non si spezza
> - Se $A$ è $3 \times 3$ con determinante 5, il determinante di $2A$ è $2^3 \cdot 5 = 40$, non 10.
> - Il determinante **non** si spezza sulle somme (Martelli, Osservazione 3.4.9). Con $A = I_2$ e $B = -I_2$: $A + B$ è la matrice nulla, con determinante 0; invece $\det A + \det B = 1 + 1 = 2$.
> - La Proposizione 9.11 parla di **una** riga: moltiplicare due righe per $c$ moltiplica il determinante per $c^2$.

> [!RICORDA]
> - Una riga o colonna di zeri: determinante zero.
> - Una riga per $c$: determinante per $c$. Si può tirare fuori un numero comune a una riga o a una colonna.
> - Tutta la matrice $n \times n$ per $c$: determinante per $c^n$.

## Il significato geometrico (oltre le dispense)

Nella prima sezione il determinante era un'area. Ecco il quadro completo, dal libro di Martelli.

> [!OLTRE] · area, orientazione e volume
> Per una matrice reale $2 \times 2$ con colonne $v_1 = {}^t(a, c)$ e $v_2 = {}^t(b, d)$ (Martelli, §3.3.10):
> - il determinante senza segno, $|ad - bc|$, è l'**area** del parallelogramma con lati $v_1$ e $v_2$;
> - il **segno** dice l'orientazione: positivo se, girando da $v_1$ verso $v_2$ per l'angolo più piccolo, si va in senso antiorario (come da $e_1$ a $e_2$), negativo se si va in senso orario;
> - il determinante è zero esattamente quando $v_1$ e $v_2$ sono paralleli: il parallelogramma è schiacciato.
>
> Per una $3 \times 3$, il determinante senza segno è il **volume** della scatola storta che ha per spigoli le tre colonne (lo ritroverai con il prodotto vettoriale, lezione L22). Per esempio $\det \begin{pmatrix} 3 & -1 & 0 \\ 1 & 3 & 0 \\ 0 & 0 & 4 \end{pmatrix} = 4 \cdot (9 + 1) = 40$: una scatola con la base di area 10 e l'altezza 4.

Nello strumento qui sotto la matrice $A$ trasforma il quadrato di lati $e_1$ ed $e_2$ nel parallelogramma colorato, che ha per lati le colonne $Ae_1$ e $Ae_2$. Cambia i quattro numeri e guarda come cambiano l'area e il colore: verde se il determinante è positivo, rosa se è negativo, giallo se è zero. Prova i pulsanti: «taglio» (determinante 1: la forma cambia, l'area no), «riflessione» (determinante $-1$: stessa area, orientazione girata), «proiezione» (determinante 0: il quadrato si schiaccia su un segmento). Le righe sugli autovalori riguardano la lezione L17: per ora ignorale.

```widget matrice
titolo: Il determinante come area con il segno
a: 3 1; 1 2
x: 1 1
raggio: 5
```

::: prova Usa il determinante per trovare l'area del parallelogramma con lati $(2, 0)$ e $(1, 3)$.
Metto i due vettori come colonne: $\det \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} = 6 - 0 = 6$. L'area è 6: base 2, altezza 3.
:::

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli il determinante è nel §3.3 (pp. 93–103). La definizione e i casi $n = 1, 2, 3$ sono nel §3.3.1 (pp. 93–95), con le «colorazioni» e la Proposizione 3.3.2 sulla trasposta. Poi: le matrici triangolari nel §3.3.2 (Proposizione 3.3.3), la matrice identità nel §3.3.3 (Definizione 3.3.4), lo sviluppo di Laplace nel §3.3.4 (pp. 96–97, Teorema 3.3.5), il significato geometrico nel §3.3.10 (pp. 101–103). Le permutazioni e il loro segno sono nel §1.2.5; il determinante di $\lambda A$ è l'Esercizio 3.10.

> [!RICORDA]
> - Senza segno, il determinante di una $2 \times 2$ è un'area; di una $3 \times 3$ è un volume.
> - Il segno dice l'orientazione; zero vuol dire che la figura è schiacciata.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\det A$ | «determinante di A» | il numero della matrice quadrata $A$ | $\det \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix} = 5$ |
| $a_{ij}$ | «a i j» | il numero nella riga $i$ e nella colonna $j$ (lezione L06) | $a_{12} = 1$ |
| $n!$ | «enne fattoriale» | $n \cdot (n - 1) \cdots 2 \cdot 1$ | $4! = 24$ |
| $\sigma$ | «sigma» | una permutazione: un modo di rimettere in fila i numeri | $[2\ 3\ 1]$ |
| $\sigma(i)$ | «sigma di i» | il numero al posto $i$ nella nuova fila | in $[2\ 3\ 1]$, $\sigma(1) = 2$ |
| $S_n$ | «esse enne» | tutte le permutazioni di $n$ numeri | $S_3$ ne ha 6 |
| $\sgn(\sigma)$ | «segno di sigma» | $+1$ con scambi pari, $-1$ con scambi dispari | $\sgn([2\ 1\ 3]) = -1$ |
| $\mathrm{id}$ | «identità» | la fila già in ordine | $[1\ 2\ 3]$ |
| $\sum$ | «somma» | somma di tanti pezzi dello stesso tipo | $\sum_{j=1}^3$: tre pezzi |
| $I_n$ | «i con enne» | la matrice identità: 1 sulla diagonale, 0 altrove | $\det I_n = 1$ |
| ${}^tA$ | «a trasposta» | righe e colonne scambiate | $\det({}^tA) = \det A$ |
| $C_{ij}$ | «ci i j» | la sottomatrice senza la riga $i$ e la colonna $j$ | |
| $(-1)^{i+j}$ | «meno uno alla i più j» | il segno della scacchiera | casella $(2, 3)$: meno |
| $\lvert x \rvert$ | «valore assoluto di x» | il numero senza segno | $\lvert -5 \rvert = 5$ |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 quiz a 5 risposte e 2 problemi da 11 punti. I problemi si correggono solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. I dettagli sono nella lezione L01.

Il determinante compare in quasi ogni appello, in tre forme. E serve comunque per gli autovalori, dalla lezione L17.

| Tipo di domanda | Appelli (numero della domanda) | Lezione |
|---|---|---|
| «Il determinante di $A$ è…» con $A$ di taglia $3 \times 3$, $4 \times 4$ o $5 \times 5$ | 10/06/2024 (2), 10/07/2024 (4), 10/07/2025 (4), 02/09/2025 (3), 03/06/2026 (2) | questa |
| determinante di un prodotto o di una potenza: $\det(AB)$, $\det(A^3)$, $\det(A\,{}^tA)$ | 06/09/2024 (4), 16/01/2025 (3), 07/02/2025 (5), 03/06/2025 (9), 05/02/2026 (5), 03/07/2026 (6) | L10 (teorema di Binet) |
| problema: «per quali $k$ la matrice è invertibile?» | 24/01/2024, 06/09/2024, 07/02/2025, 15/01/2026, 05/02/2026, 03/07/2026 (problema 11) | L10 |

### Una domanda vera, letta insieme

**Appello del 02/09/2025, domanda 3.** Il testo: «Calcolare il determinante di $A = \begin{pmatrix} 1 & 2 & 0 & 0 & 0 \\ 0 & 1 & 3 & 0 & 0 \\ 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 & 2 \\ 1 & 0 & 0 & 0 & 1 \end{pmatrix}$: (a) 12; (b) 13; (c) 0; (d) 11; (e) 1».

**In pratica chiede:** il determinante di una tabella $5 \times 5$, senza calcolatrice. Con la formula sarebbero 120 prodotti: serve Laplace, lungo la riga o la colonna con più zeri.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: è quadrata?** 5 righe e 5 colonne: sì.
>
> **Passo 2: scelgo la colonna.** La prima colonna ha solo due numeri diversi da zero: l'1 nella riga 1 e l'1 nella riga 5. Sviluppo lungo la prima colonna.
>
> **Passo 3: i segni.** La casella $(1, 1)$ ha segno più. La casella $(5, 1)$ ha $5 + 1 = 6$, pari: segno più.
>
> **Passo 4: la prima sottomatrice.** Tolgo la riga 1 e la colonna 1:
> $$C_{11} = \begin{pmatrix} 1 & 3 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$
> È triangolare superiore: il determinante è il prodotto della diagonale, $1 \cdot 1 \cdot 1 \cdot 1 = 1$.
>
> **Passo 5: la seconda sottomatrice.** Tolgo la riga 5 e la colonna 1:
> $$C_{51} = \begin{pmatrix} 2 & 0 & 0 & 0 \\ 1 & 3 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 2 \end{pmatrix}.$$
> È triangolare inferiore: $2 \cdot 3 \cdot 1 \cdot 2 = 12$.
>
> **Passo 6: sommo.** $\det A = +1 \cdot 1 + 1 \cdot 12 = 13$. Risposta **(b)**.
>
> **Perché la (a) è sbagliata.** 12 è il risultato di chi dimentica il primo pezzo, quello della casella $(1, 1)$.

### Altre due domande vere

> [!ESAME] Appello del 10/07/2025, domanda 4
> Sia $A = \begin{pmatrix} 1 & -1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 2 & -1 & 0 \end{pmatrix}$. Qual è il determinante di $A$? (a) $1$; (b) $0$; (c) $\det(A)$ non è definito; (d) $2$; (e) $-1$.
>
> **Soluzione.** Prima di tutto conta righe e colonne: 3 righe e 4 colonne. La matrice non è quadrata, quindi il determinante **non esiste**: risposta **(c)**. Chi sviluppa senza guardare trova numeri che sembrano plausibili: la parte $3 \times 3$ a sinistra, sviluppata lungo la sua terza colonna, ha determinante $-1 \cdot (1 \cdot 1 - 0) = -1$, che è tra le risposte. Il tranello è tutto lì.

> [!ESAME] Appello del 03/06/2026, domanda 2
> Il determinante di $\begin{pmatrix} 1 & e & 1 & 1 \\ \pi & 2\pi e & 3\pi & \pi \\ 1 & e & 2 & 0 \\ 0 & e & 0 & 3 \end{pmatrix}$ è uguale a: (a) $1$; (b) $0$; (c) $\pi e$; (d) $\pi + e$; (e) $6 + 2\pi e$.
>
> **Soluzione.**
> 1. **Tiro fuori i numeri comuni.** Tutta la seconda riga contiene $\pi$, tutta la seconda colonna contiene $e$. Li tiro fuori con la Proposizione 9.11, per righe e per colonne:
>    $$\det = \pi e \cdot \det \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 1 \\ 1 & 1 & 2 & 0 \\ 0 & 1 & 0 & 3 \end{pmatrix}.$$
> 2. **Laplace lungo la quarta riga**, $(0, 1, 0, 3)$. Restano due pezzi: la casella $(4, 2)$, con segno più, e la casella $(4, 4)$, con segno più.
> 3. **La prima sottomatrice**, senza riga 4 e colonna 2: $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 0 \end{pmatrix}$. Lungo la terza colonna: $1 \cdot (2 - 3) - 1 \cdot (2 - 1) + 0 = -1 - 1 = -2$.
> 4. **La seconda sottomatrice**, senza riga 4 e colonna 4: $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 1 & 2 \end{pmatrix}$. Con Sarrus: $(4 + 3 + 1) - (2 + 3 + 2) = 8 - 7 = 1$.
> 5. **Sommo.** Il determinante tra parentesi è $1 \cdot (-2) + 3 \cdot 1 = 1$, quindi il totale è $\pi e$: risposta **(c)**.

Negli altri due appelli del primo tipo (10/07/2024 e 10/06/2024) le matrici avevano righe dipendenti e il determinante era 0: con gli strumenti della lezione L10 si vede quasi senza conti.

> [!METODO] Il determinante all'esame, in ordine
> 1. È quadrata? Se no, il determinante non esiste.
> 2. È triangolare? Prodotto della diagonale.
> 3. C'è una riga o una colonna di zeri? Determinante zero.
> 4. Ci sono numeri comuni da tirare fuori ($\pi$, $e$, radici, numeri grandi)?
> 5. Laplace lungo la riga o la colonna con più zeri.
> 6. Per una $3 \times 3$ finale, Sarrus.
>
> Senza calcolatrice conviene sempre rimpicciolire i numeri prima di moltiplicare.

**Errori da evitare.**

- Dimenticare il segno della scacchiera, soprattutto nelle caselle «dispari» come $(1, 2)$, $(2, 3)$, $(5, 4)$.
- Usare Sarrus su una $4 \times 4$.
- Scrivere che il determinante di $2A$ è il doppio di quello di $A$: per una $n \times n$ è $2^n$ volte.
- Rispondere con un numero quando la matrice non è quadrata.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$; la regola di Sarrus per le $3 \times 3$, con il disegno; lo sviluppo di Laplace con la scacchiera dei segni; triangolare: prodotto della diagonale; la trasposta ha lo stesso determinante; riga nulla: zero; una riga per $c$: determinante per $c$; $\det(cA) = c^n \det A$.

## Quiz

```quiz
D: Sia $A = \begin{pmatrix} 2 & 0 & 1 \\ -1 & 3 & 0 \end{pmatrix}$. Qual è il determinante di $A$?
+ $\det(A)$ non è definito.
- $0$
- $6$
- $-6$
- $1$
= La prima cosa da controllare è se la matrice è quadrata: $A$ ha 2 righe e 3 colonne, quindi non lo è. Il determinante esiste solo per le matrici quadrate (Definizione 9.1), quindi non è definito. La risposta più insidiosa è 6: è il determinante del pezzo $2 \times 2$ a sinistra, $2 \cdot 3 - 0 \cdot (-1)$, che però non è la matrice data. Simile all'appello del 10/07/2025, domanda 4.

D: Il determinante di $A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \\ 3 & 0 & 0 & 1 \end{pmatrix}$ è:
+ $-5$
- $7$
- $1$
- $0$
- $5$
= Si sviluppa lungo la prima colonna, che ha due numeri diversi da zero. Il primo è l'1 nella casella $(1, 1)$, segno più: la sottomatrice senza riga 1 e colonna 1 è triangolare superiore con diagonale 1, 1, 1, quindi determinante 1. Il secondo è il 3 nella casella $(4, 1)$, con $4 + 1 = 5$ dispari, segno meno: la sottomatrice $\begin{pmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ è triangolare inferiore con determinante 2. Totale $1 - 3 \cdot 2 = -5$. La risposta più insidiosa è 7, di chi dimentica il segno meno della casella $(4, 1)$. Simile all'appello del 02/09/2025, domanda 3.

D: Il determinante di $\begin{pmatrix} 1 & \pi & 2 \\ e & 2\pi e & e \\ 0 & \pi & 3 \end{pmatrix}$ è uguale a:
+ $4\pi e$
- $0$
- $\pi e$
- $4$
- $\pi + e$
= Si tirano fuori i numeri comuni: $e$ da tutta la seconda riga e $\pi$ da tutta la seconda colonna. Resta $\pi e \cdot \det \begin{pmatrix} 1 & 1 & 2 \\ 1 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$. Lungo la prima colonna: $1 \cdot (6 - 1) - 1 \cdot (3 - 2) + 0 = 5 - 1 = 4$. Il totale è $4\pi e$. La risposta più insidiosa è 4: è il determinante giusto della matrice piccola, ma dimentica i due numeri tirati fuori. Simile all'appello del 03/06/2026, domanda 2.

D: Sia $A$ una matrice $3 \times 3$ con $\det A = 5$. Quanto vale $\det(2A)$?
+ $40$
- $10$
- $25$
- $8$
- $30$
= Nella matrice $2A$ tutte e tre le righe sono moltiplicate per 2, e ogni riga moltiplicata per 2 raddoppia il determinante (Proposizione 9.11). Quindi il 2 esce tre volte: $2^3 \cdot 5 = 8 \cdot 5 = 40$ (Corollario 9.12). La risposta più insidiosa è 10: è l'errore di chi moltiplica una riga sola.

D: Sia $A$ una matrice $4 \times 4$ con $\det A = 3$. Quanto vale $\det(-A)$?
+ $3$
- $-3$
- $81$
- $-81$
- $-12$
= Nella matrice $-A$ tutte e quattro le righe sono moltiplicate per $-1$, quindi il $-1$ esce quattro volte: $(-1)^4 \cdot 3 = 1 \cdot 3 = 3$ (Corollario 9.12). Con un numero pari di righe il segno non cambia. La risposta più insidiosa è $-3$, di chi cambia il segno una volta sola.

D: Quanti addendi ha la formula del determinante (Definizione 9.1) per una matrice $5 \times 5$?
+ $120$
- $25$
- $5$
- $10$
- $60$
= La formula ha un prodotto per ogni permutazione dei numeri da 1 a 5: sono $5! = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 120$. La risposta più insidiosa è 25, il numero di caselle della matrice, che non c'entra. Proprio perché sono tanti, per le matrici grandi si usa Laplace.

D: Siano $A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}$. Quanto valgono $\det(AB)$ e $\tr(AB)$?
+ $\det(AB) = 1$, $\tr(AB) = 8$.
- $\det(AB) = 1$, $\tr(AB) = 9$.
- $\det(AB) = 2$, $\tr(AB) = 8$.
- $\det(AB) = 0$, $\tr(AB) = 8$.
- $\det(AB) = 3$, $\tr(AB) = 3$.
= Il prodotto riga per colonna (lezione L08) è $AB = \begin{pmatrix} 1 & 1 & 0 \\ 2 & 3 & 3 \\ 0 & 1 & 4 \end{pmatrix}$. La traccia è la somma della diagonale, $1 + 3 + 4 = 8$. Il determinante, lungo la prima riga, è $1 \cdot (12 - 3) - 1 \cdot (8 - 0) = 9 - 8 = 1$. La risposta più insidiosa ha traccia 9: è il prodotto delle due tracce, $3 \cdot 3$, ma la traccia di un prodotto non funziona così. Con la lezione L10 si fa prima: il determinante del prodotto è il prodotto dei determinanti, $1 \cdot 1$, perché $A$ e $B$ sono triangolari con diagonale di 1. Simile all'appello del 16/01/2025, domanda 3.

D: Il determinante di $\begin{pmatrix} 2 & 3 & 4 \\ 5 & 6 & 7 \\ 8 & 9 & 10 \end{pmatrix}$ è:
+ $0$
- $\det$ non è definito.
- $1$
- $-3$
- $10!$
= Con Sarrus: le diagonali che scendono danno $2 \cdot 6 \cdot 10 + 3 \cdot 7 \cdot 8 + 4 \cdot 5 \cdot 9 = 120 + 168 + 180 = 468$, quelle che salgono $4 \cdot 6 \cdot 8 + 2 \cdot 7 \cdot 9 + 3 \cdot 5 \cdot 10 = 192 + 126 + 150 = 468$. La differenza è 0. Il motivo profondo: la terza riga è $2 \cdot (5, 6, 7) - (2, 3, 4)$, una ricetta con le altre due, e nella lezione L10 vedrai che allora il determinante è sempre zero. La risposta «non è definito» è sbagliata: la matrice è quadrata. Simile all'appello del 10/07/2024, domanda 4.

D: Quale di queste affermazioni è **falsa** per matrici quadrate reali?
+ $\det(A + B) = \det A + \det B$ per ogni $A, B \in M(2)$.
- $\det({}^tA) = \det A$.
- $\det(I_n) = 1$.
- Se una colonna di $A$ è nulla, allora $\det A = 0$.
- $\det(-A) = \det A$ per ogni $A \in M(2)$.
= Basta un esempio: con $A = I_2$ e $B = -I_2$ la somma è la matrice nulla, con determinante 0, mentre $\det A + \det B = 1 + 1 = 2$. Quindi il determinante non si spezza sulle somme. Le altre sono vere: la trasposta ha lo stesso determinante (Proposizione 9.5), l'identità ha determinante 1 (Definizione 9.4 con la Proposizione 9.3), una colonna di zeri dà zero (Proposizione 9.10). La più insidiosa è l'ultima, che sembra falsa: ma per le $2 \times 2$ il $-1$ esce due volte, e $(-1)^2 = 1$ (Corollario 9.12).

D: Calcola il determinante di $\begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 5 \\ 1 & 0 & 4 \end{pmatrix}$.
N: 29
= Lungo la prima riga, con i segni $+, -, +$ e lo zero in fondo: $3 \cdot (2 \cdot 4 - 5 \cdot 0) - 1 \cdot (0 \cdot 4 - 5 \cdot 1) + 0 = 3 \cdot 8 - 1 \cdot (-5) = 24 + 5 = 29$. Attenzione al segno meno davanti al secondo pezzo: moltiplicato per $-5$ diventa più.
```

## Esercizi

::: esercizio base Riscaldamento: una $2 \times 2$
Calcola $\det \begin{pmatrix} 5 & 2 \\ 3 & 4 \end{pmatrix}$ e $\det \begin{pmatrix} -1 & 3 \\ 2 & -6 \end{pmatrix}$.
::: soluzione
1. Diagonale principale $5 \cdot 4 = 20$, altra diagonale $2 \cdot 3 = 6$: il determinante è $20 - 6 = 14$.
2. Diagonale principale $(-1) \cdot (-6) = 6$, altra diagonale $3 \cdot 2 = 6$: il determinante è $6 - 6 = 0$. Le due colonne $(-1, 2)$ e $(3, -6)$ sono una il $-3$ volte dell'altra: il parallelogramma è schiacciato.
:::

::: esercizio base Riscaldamento: una triangolare
Calcola il determinante di $\begin{pmatrix} 3 & 7 & -2 & 5 \\ 0 & -1 & 4 & 1 \\ 0 & 0 & 2 & 9 \\ 0 & 0 & 0 & 1 \end{pmatrix}$.
::: soluzione
1. Sotto la diagonale ci sono solo zeri: è triangolare superiore.
2. Il determinante è il prodotto della diagonale: $3 \cdot (-1) \cdot 2 \cdot 1 = -6$.
:::

::: esercizio base Riscaldamento: esiste?
Quali di queste matrici hanno un determinante? $\begin{pmatrix} 1 & 2 \end{pmatrix}$, $\begin{pmatrix} 7 \end{pmatrix}$, $\begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 2 & 2 \end{pmatrix}$, $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.
::: soluzione
1. $\begin{pmatrix} 1 & 2 \end{pmatrix}$ è $1 \times 2$: non quadrata, niente determinante.
2. $\begin{pmatrix} 7 \end{pmatrix}$ è $1 \times 1$: il determinante è 7.
3. La terza è $3 \times 2$: non quadrata, niente determinante.
4. L'ultima è $2 \times 2$: il determinante è $4 - 6 = -2$.
:::

::: esercizio base Riscaldamento: i segni della scacchiera
In una matrice $4 \times 4$, che segno hanno le caselle $(1, 1)$, $(1, 2)$, $(2, 3)$, $(4, 1)$ e $(4, 4)$?
::: soluzione
Il segno è più quando la somma di riga e colonna è pari, meno quando è dispari.
1. $(1, 1)$: $1 + 1 = 2$, più.
2. $(1, 2)$: $1 + 2 = 3$, meno.
3. $(2, 3)$: $2 + 3 = 5$, meno.
4. $(4, 1)$: $4 + 1 = 5$, meno.
5. $(4, 4)$: $4 + 4 = 8$, più.
:::

::: esercizio base Quattro determinanti $2 \times 2$
Calcola: (a) $\det \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$; (b) $\det \begin{pmatrix} 2 & -3 \\ 4 & -6 \end{pmatrix}$; (c) $\det \begin{pmatrix} \cos t & -\sin t \\ \sin t & \cos t \end{pmatrix}$; (d) $\det \begin{pmatrix} 1 + i & 2 \\ 1 & 1 - i \end{pmatrix}$.
::: soluzione
(a) $3 \cdot 2 - 1 \cdot 4 = 6 - 4 = 2$.

(b) $2 \cdot (-6) - (-3) \cdot 4 = -12 + 12 = 0$. Le colonne $(2, 4)$ e $(-3, -6)$ sono una multipla dell'altra ($-\frac 32$ volte la prima): il parallelogramma è schiacciato.

(c) $\cos t \cdot \cos t - (-\sin t) \cdot \sin t = \cos^2 t + \sin^2 t = 1$ per ogni angolo $t$ (lezione L03). Questa matrice gira il piano dell'angolo $t$, e girare non cambia le aree (lezione L22).

(d) $(1 + i)(1 - i) - 2 \cdot 1 = (1 - i^2) - 2 = (1 + 1) - 2 = 0$.
:::

::: esercizio base Una $3 \times 3$ in due modi
Calcola $\det A$ per $A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 3 & -1 \\ 0 & 1 & 4 \end{pmatrix}$ (a) con la formula dei sei addendi e (b) con Laplace lungo la prima riga.
::: soluzione
(a) Prodotto per prodotto, nell'ordine della formula:
1. $a_{11}a_{22}a_{33} = 2 \cdot 3 \cdot 4 = 24$;
2. $-a_{11}a_{23}a_{32} = -2 \cdot (-1) \cdot 1 = 2$;
3. $-a_{13}a_{22}a_{31} = -1 \cdot 3 \cdot 0 = 0$;
4. $-a_{12}a_{21}a_{33} = -0 \cdot 1 \cdot 4 = 0$;
5. $+a_{12}a_{23}a_{31} = 0 \cdot (-1) \cdot 0 = 0$;
6. $+a_{13}a_{21}a_{32} = 1 \cdot 1 \cdot 1 = 1$.

Totale $24 + 2 + 1 = 27$.

(b) Lungo la prima riga, segni $+, -, +$, e il secondo numero è 0:
$$\det A = 2 \det \begin{pmatrix} 3 & -1 \\ 1 & 4 \end{pmatrix} - 0 + 1 \cdot \det \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix} = 2 \cdot (12 + 1) + 1 \cdot (1 - 0) = 26 + 1 = 27.$$
Stesso risultato: Laplace è solo un modo ordinato di raccogliere gli stessi sei prodotti.
:::

::: esercizio medio Permutazioni e addendi
(a) Trova il segno delle permutazioni $[2\ 1\ 4\ 3]$, $[4\ 3\ 2\ 1]$ e $[2\ 3\ 4\ 1]$ di $S_4$. (b) Scrivi, con il suo segno, l'addendo della formula del determinante $4 \times 4$ che corrisponde a $[2\ 3\ 4\ 1]$. (c) Nella formula del determinante $4 \times 4$ può comparire il prodotto $a_{11}a_{21}a_{33}a_{44}$?
::: soluzione
(a) Con gli scambi di posto:
- $[2\ 1\ 4\ 3]$: da $[1\ 2\ 3\ 4]$ scambio i primi due posti e gli ultimi due. 2 scambi, segno $+1$.
- $[4\ 3\ 2\ 1]$: scambio il primo con il quarto posto, $[4\ 2\ 3\ 1]$, poi il secondo con il terzo, $[4\ 3\ 2\ 1]$. 2 scambi, segno $+1$.
- $[2\ 3\ 4\ 1]$: $[1\ 2\ 3\ 4] \to [2\ 1\ 3\ 4] \to [2\ 3\ 1\ 4] \to [2\ 3\ 4\ 1]$. 3 scambi, segno $-1$. Controllo con le inversioni: $(2, 1)$, $(3, 1)$, $(4, 1)$, tre, segno $-1$.

(b) $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 4$, $\sigma(4) = 1$: il prodotto è $-a_{12}a_{23}a_{34}a_{41}$.

(c) No: $a_{11}$ e $a_{21}$ stanno tutti e due nella **colonna 1**. Ogni prodotto della formula prende un solo numero da ogni colonna.
:::

::: esercizio medio Una $4 \times 4$ con Laplace
Calcola $\det \begin{pmatrix} 1 & 2 & 0 & 3 \\ 0 & 1 & 0 & 0 \\ 4 & 1 & 2 & 1 \\ 1 & 0 & 0 & 2 \end{pmatrix}$.
::: soluzione
1. La seconda riga ha un solo numero diverso da zero: l'1 nella casella $(2, 2)$, segno più.
2. Cancello la riga 2 e la colonna 2:
   $$\det = 1 \cdot \det \begin{pmatrix} 1 & 0 & 3 \\ 4 & 2 & 1 \\ 1 & 0 & 2 \end{pmatrix}.$$
3. Nella nuova matrice la seconda colonna ha un solo numero diverso da zero: il 2 nella casella $(2, 2)$, segno più.
   $$\det \begin{pmatrix} 1 & 0 & 3 \\ 4 & 2 & 1 \\ 1 & 0 & 2 \end{pmatrix} = 2 \det \begin{pmatrix} 1 & 3 \\ 1 & 2 \end{pmatrix} = 2 \cdot (2 - 3) = -2.$$

Il determinante cercato è $-2$: due sviluppi furbi e un solo determinante $2 \times 2$.
:::

::: esercizio medio Proprietà senza conti
Sia $A$ una matrice $3 \times 3$ con $\det A = 5$. Calcola: (a) $\det({}^tA)$; (b) $\det(2A)$; (c) $\det(-A)$; (d) il determinante della matrice ottenuta da $A$ moltiplicando la seconda riga per 3; (e) il determinante della matrice ottenuta da $A$ sostituendo la prima colonna con una colonna di zeri.
::: soluzione
(a) La trasposta ha lo stesso determinante: 5 (Proposizione 9.5).

(b) Tutte e tre le righe per 2: $2^3 \cdot 5 = 40$ (Corollario 9.12).

(c) Tutte e tre le righe per $-1$: $(-1)^3 \cdot 5 = -5$.

(d) Una sola riga per 3: $3 \cdot 5 = 15$ (Proposizione 9.11).

(e) Una colonna di zeri: 0 (Proposizione 9.10), qualunque fosse $A$.
:::

::: esercizio medio L'area di un triangolo (oltre le dispense)
Usa il determinante per calcolare l'area del triangolo di vertici $P = (1, 1)$, $Q = (4, 2)$, $R = (2, 5)$.
::: soluzione
1. Il triangolo è metà del parallelogramma costruito sui lati che partono da $P$.
2. I due lati: $Q - P = (4 - 1,\ 2 - 1) = (3, 1)$ e $R - P = (2 - 1,\ 5 - 1) = (1, 4)$.
3. L'area del parallelogramma è il determinante senza segno della matrice con questi vettori come colonne:
   $$\det \begin{pmatrix} 3 & 1 \\ 1 & 4 \end{pmatrix} = 12 - 1 = 11.$$
4. L'area del triangolo è la metà: $\frac{11}2 = 5{,}5$.

Il segno positivo dice anche che percorrendo $P$, $Q$, $R$ si gira in senso antiorario.
:::

::: esercizio difficile Esercizio 9.13 delle dispense: una $4 \times 4$ complessa
Calcoliamo il determinante della matrice
$$A = \begin{pmatrix} 2 + i & 0 & -5 & 0 \\ 3 - i & 1 & 2i & 0 \\ 4 + 4i & -2 & -1 & 0 \\ -\frac 12 & i & 1 - i & i \end{pmatrix}.$$
::: soluzione
Le regole sono le stesse con i numeri complessi: cambiano solo i conti (lezioni L02 e L03).

**Passo 1: la colonna migliore.** La quarta colonna ha un solo numero diverso da zero: $i$, nella casella $(4, 4)$, segno più. Sviluppo lungo la quarta colonna (Corollario 9.7):
$$\det A = i \cdot \det C_{44}, \qquad C_{44} = \begin{pmatrix} 2 + i & 0 & -5 \\ 3 - i & 1 & 2i \\ 4 + 4i & -2 & -1 \end{pmatrix}.$$
I numeri $-\frac 12$, $i$, $1 - i$ dell'ultima riga non servono più.

**Passo 2: la $3 \times 3$ lungo la prima riga**, che ha uno zero (segni $+, -, +$):
$$\det C_{44} = (2 + i) \det \begin{pmatrix} 1 & 2i \\ -2 & -1 \end{pmatrix} - 0 + (-5) \det \begin{pmatrix} 3 - i & 1 \\ 4 + 4i & -2 \end{pmatrix}.$$

**Passo 3: le due $2 \times 2$.**
- $\det \begin{pmatrix} 1 & 2i \\ -2 & -1 \end{pmatrix} = 1 \cdot (-1) - 2i \cdot (-2) = -1 + 4i$;
- $\det \begin{pmatrix} 3 - i & 1 \\ 4 + 4i & -2 \end{pmatrix} = (3 - i)(-2) - 1 \cdot (4 + 4i) = -6 + 2i - 4 - 4i = -10 - 2i$.

**Passo 4: i prodotti.**
- $(2 + i)(-1 + 4i) = -2 + 8i - i + 4i^2 = -2 + 7i - 4 = -6 + 7i$, perché $i^2 = -1$;
- $(-5)(-10 - 2i) = 50 + 10i$.

Quindi $\det C_{44} = (-6 + 7i) + (50 + 10i) = 44 + 17i$.

**Passo 5.** $\det A = i(44 + 17i) = 44i + 17i^2 = -17 + 44i$.
:::

::: esercizio difficile Esercizio 9.14 delle dispense: radici e unità immaginaria
Calcoliamo il determinante della matrice
$$B = \begin{pmatrix} 5i & 4\sqrt 2 & 0 & \sqrt 2 \\ 5i & 8\sqrt 2 & 0 & -\sqrt 2 \\ -5i & -4\sqrt 2 & -1 & 2\sqrt 2 \\ -10i & 4\sqrt 2 & 1 & \sqrt 2 \end{pmatrix}.$$
::: soluzione
**Passo 1: tiro fuori i numeri comuni** (Proposizione 9.11, per colonne). La prima colonna è $5i$ per $(1, 1, -1, -2)$, la seconda è $4\sqrt 2$ per $(1, 2, -1, 1)$, la quarta è $\sqrt 2$ per $(1, -1, 2, 1)$. Quindi
$$\det B = 5i \cdot 4\sqrt 2 \cdot \sqrt 2 \cdot \det M = 40i \det M, \qquad M = \begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 2 & 0 & -1 \\ -1 & -1 & -1 & 2 \\ -2 & 1 & 1 & 1 \end{pmatrix},$$
perché $\sqrt 2 \cdot \sqrt 2 = 2$ e $5 \cdot 4 \cdot 2 = 40$.

**Passo 2: Laplace lungo la terza colonna** di $M$, che ha due zeri. Restano il $-1$ nella casella $(3, 3)$, segno più, e l'1 nella casella $(4, 3)$, segno meno:
$$\det M = +(-1) \det C_{33} - 1 \cdot \det C_{43}.$$

**Passo 3: le due $3 \times 3$.**
- $C_{33}$, senza riga 3 e colonna 3, è $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & -1 \\ -2 & 1 & 1 \end{pmatrix}$. Lungo la prima riga: $1 \cdot (2 + 1) - 1 \cdot (1 - 2) + 1 \cdot (1 + 4) = 3 + 1 + 5 = 9$.
- $C_{43}$, senza riga 4 e colonna 3, è $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix}$. Lungo la prima riga: $1 \cdot (4 - 1) - 1 \cdot (2 - 1) + 1 \cdot (-1 + 2) = 3 - 1 + 1 = 3$.

Quindi $\det M = -9 - 3 = -12$.

**Passo 4.** $\det B = 40i \cdot (-12) = -480i$.

Senza il passo 1 i conti si fanno lo stesso, ma con prodotti come $5i \cdot 8\sqrt 2 \cdot \sqrt 2$ a ogni riga: tirare fuori i numeri comuni è il modo per non sbagliare.
:::

::: esercizio difficile Le antisimmetriche di ordine dispari
(a) Dimostra che ogni matrice reale antisimmetrica $A$ di taglia $n \times n$ con $n$ dispari ha $\det A = 0$ (Martelli, Esercizio 3.11). (b) Controlla con $N = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix}$. (c) Mostra che per $n = 2$ non è vero.
::: soluzione
Ricorda dalla lezione L06: una matrice è antisimmetrica quando la sua trasposta è il suo opposto, ${}^tA = -A$.

(a) Tre uguaglianze:
1. la trasposta ha lo stesso determinante: $\det({}^tA) = \det A$ (Proposizione 9.5);
2. siccome ${}^tA = -A$, vale $\det({}^tA) = \det(-A)$;
3. con $n$ dispari, $\det(-A) = (-1)^n \det A = -\det A$ (Corollario 9.12).

Mettendole insieme: $\det A = -\det A$, cioè $2\det A = 0$, quindi $\det A = 0$.

(b) Con Sarrus. Le diagonali che scendono: $0 \cdot 0 \cdot 0 + 2 \cdot 3 \cdot 1 + (-1) \cdot (-2) \cdot (-3) = 0 + 6 - 6 = 0$. Quelle che salgono: $(-1) \cdot 0 \cdot 1 + 0 \cdot 3 \cdot (-3) + 2 \cdot (-2) \cdot 0 = 0$. Differenza 0.

(c) $\det \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} = 0 - 1 \cdot (-1) = 1$, non zero: con $n$ pari, $(-1)^n = 1$ e il ragionamento non dice niente.
:::

::: esercizio esame Il determinante di una $5 \times 5$
Calcolare il determinante di $A = \begin{pmatrix} 2 & 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 2 & 0 \\ 0 & 0 & 0 & 1 & 1 \\ 1 & 0 & 0 & 0 & 3 \end{pmatrix}$. Risposte possibili: (a) $6$; (b) $8$; (c) $0$; (d) $4$; (e) $12$.
::: soluzione
Nella prima colonna i numeri diversi da zero sono il 2 nella casella $(1, 1)$, segno più, e l'1 nella casella $(5, 1)$, con $5 + 1 = 6$ pari, segno più.

1. Tolgo la riga 1 e la colonna 1: $C_{11} = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 3 \end{pmatrix}$, triangolare superiore, determinante $1 \cdot 1 \cdot 1 \cdot 3 = 3$.
2. Tolgo la riga 5 e la colonna 1: $C_{51} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \end{pmatrix}$, triangolare inferiore, determinante $1 \cdot 1 \cdot 2 \cdot 1 = 2$.
3. Sommo: $\det A = 2 \cdot 3 + 1 \cdot 2 = 6 + 2 = 8$.

Risposta **(b)**. Il 6 è di chi dimentica il secondo pezzo, il 4 di chi lo sottrae.
:::

::: esercizio esame Per quali $k$ il determinante è nullo?
Sia $A = \begin{pmatrix} k & 1 & 0 \\ 1 & k & 1 \\ 0 & 1 & k \end{pmatrix}$ con $k \in \R$. Calcola $\det A$ in funzione di $k$ e trova i valori di $k$ per cui $\det A = 0$.
::: soluzione
1. Sviluppo lungo la prima riga (segni $+, -, +$, e l'ultimo numero è 0):
   $$\det A = k \det \begin{pmatrix} k & 1 \\ 1 & k \end{pmatrix} - 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 0 & k \end{pmatrix} + 0.$$
2. I due determinanti: $k \cdot k - 1 \cdot 1 = k^2 - 1$ e $1 \cdot k - 1 \cdot 0 = k$.
3. Quindi $\det A = k(k^2 - 1) - k = k^3 - k - k = k^3 - 2k$.
4. Raccolgo $k$: $\det A = k(k^2 - 2)$.
5. Il prodotto fa zero quando $k = 0$ oppure $k^2 = 2$, cioè $k = \sqrt 2$ o $k = -\sqrt 2$.

Controllo con $k = 0$: la matrice $\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ ha la prima e la terza riga uguali, e con Sarrus il determinante è $0 + 0 + 0 - (0 + 0 + 0) = 0$.

Nella lezione L10 scoprirai che questi sono esattamente i valori di $k$ per cui $A$ **non è invertibile**: è la prima domanda di molti problemi d'esame.
:::

::: esercizio esame Raccogliere $\pi$ ed $e$
Calcola il determinante di $\begin{pmatrix} 2 & \pi & 1 \\ 4 & 3\pi & 0 \\ e & 2\pi e & e \end{pmatrix}$. Risposte possibili: (a) $7\pi e$; (b) $0$; (c) $\pi e$; (d) $7$; (e) $6\pi + e$.
::: soluzione
1. La terza riga ha il numero comune $e$: $(e, 2\pi e, e)$ è $e$ per $(1, 2\pi, 1)$. Lo tiro fuori.
2. Ora la seconda colonna è $(\pi, 3\pi, 2\pi)$, cioè $\pi$ per $(1, 3, 2)$. Tiro fuori anche $\pi$ (Proposizione 9.11):
   $$\det = \pi e \det \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 0 \\ 1 & 2 & 1 \end{pmatrix}.$$
3. Sviluppo lungo la terza colonna (segni $+, -, +$, e lo zero al centro):
   $$\det \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 0 \\ 1 & 2 & 1 \end{pmatrix} = 1 \cdot \det \begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix} - 0 + 1 \cdot \det \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix} = (8 - 3) + (6 - 4) = 5 + 2 = 7.$$

Il determinante è $7\pi e$: risposta **(a)**.
:::

## Domande di ripasso

::: domanda Per quali matrici esiste il determinante?
Solo per le matrici quadrate, con tante righe quante colonne. Una matrice $3 \times 4$ non ha determinante.
:::

::: domanda Qual è la formula del determinante $2 \times 2$ e che cosa misura?
Diagonale principale meno l'altra diagonale: $ad - bc$. Senza segno è l'area del parallelogramma che ha per lati le due colonne; il segno dice in che ordine girano le colonne.
:::

::: domanda Che cos'è il segno di una permutazione?
Si conta quanti scambi di due numeri servono per arrivare alla permutazione partendo dalla fila in ordine. Se sono pari il segno è $+1$, se sono dispari è $-1$. Uno scambio solo ha segno $-1$, la fila in ordine $+1$.
:::

::: domanda Come si legge la Definizione 9.1 del determinante?
È la somma di un prodotto per ogni permutazione, con il segno della permutazione. Ogni prodotto prende un numero da ogni riga e uno da ogni colonna, come torri su una scacchiera che non si mangiano.
:::

::: domanda Quanti addendi ha la formula per una $3 \times 3$ e quali segni hanno?
Sei: tre con il più ($a_{11}a_{22}a_{33}$, $a_{12}a_{23}a_{31}$, $a_{13}a_{21}a_{32}$) e tre con il meno ($a_{11}a_{23}a_{32}$, $a_{13}a_{22}a_{31}$, $a_{12}a_{21}a_{33}$). La regola di Sarrus li fa ricordare.
:::

::: domanda Quanto vale il determinante di una matrice triangolare, e perché?
Il prodotto dei numeri sulla diagonale. Nella formula tutti gli altri prodotti contengono almeno uno zero: l'unico modo di evitare gli zeri è prendere proprio la diagonale.
:::

::: domanda Quanto vale il determinante della matrice identità?
1: è diagonale con tutti 1 sulla diagonale.
:::

::: domanda Che cosa dice la Proposizione 9.5 e a che cosa serve?
La trasposta ha lo stesso determinante. Serve a usare sulle colonne tutte le regole che valgono per le righe, per esempio lo sviluppo di Laplace lungo una colonna.
:::

::: domanda Come funziona lo sviluppo di Laplace lungo una riga?
Per ogni numero della riga: segno della scacchiera, per il numero, per il determinante della sottomatrice che resta togliendo la sua riga e la sua colonna. Poi si somma tutto.
:::

::: domanda Come si ricordano i segni della scacchiera?
Come le caselle di una scacchiera, con il più in alto a sinistra: più quando riga più colonna è pari, meno quando è dispari.
:::

::: domanda Quale riga o colonna conviene scegliere per Laplace?
Quella con più zeri: i pezzi con un numero zero spariscono, e non serve calcolare le loro sottomatrici.
:::

::: domanda Che cosa succede al determinante se si moltiplica una riga per un numero? E se si moltiplica tutta la matrice?
Una riga per $c$: il determinante viene moltiplicato per $c$. Tutta la matrice $n \times n$ per $c$: il determinante viene moltiplicato per $c^n$, perché le righe moltiplicate sono $n$.
:::

::: domanda Perché una matrice con una riga di zeri ha determinante zero?
Sviluppando lungo quella riga, ogni pezzo contiene un fattore zero.
:::

## Glossario

```glossario
Determinante $\det A$ | Il numero di una matrice quadrata. Per le $2 \times 2$ è $ad - bc$; senza segno dice di quanto la matrice ingrandisce le aree.
Permutazione | Un modo di rimettere in fila i numeri da 1 a $n$, ognuno una volta sola. Si scrive come $[2\ 3\ 1]$.
$S_n$ | L'insieme delle permutazioni di $n$ numeri. Ne contiene $n!$, per esempio 6 per $n = 3$.
Trasposizione | Uno scambio di due soli numeri, con tutti gli altri fermi. Ha segno $-1$.
Segno $\sgn(\sigma)$ | $+1$ se la permutazione si ottiene con un numero pari di scambi, $-1$ se dispari.
Inversione | Una coppia in cui un numero più grande sta prima di uno più piccolo. Contarle dà il segno.
Regola di Sarrus | Un trucco solo per le $3 \times 3$: ricopiate le prime due colonne, le diagonali che scendono vanno col più, quelle che salgono col meno.
Matrice triangolare | Una matrice quadrata con zeri sotto o sopra la diagonale. Il determinante è il prodotto della diagonale.
Matrice identità $I_n$ | La matrice quadrata con 1 sulla diagonale e 0 altrove. Ha determinante 1.
Sottomatrice $C_{ij}$ | La matrice che resta togliendo la riga $i$ e la colonna $j$: un passo più piccola.
Sviluppo di Laplace | Riduce un determinante a determinanti più piccoli, lungo una riga o una colonna: segno, numero, determinante della sottomatrice.
Scacchiera dei segni | I segni più e meno delle caselle, alternati come su una scacchiera, con il più in alto a sinistra.
Riga nulla | Se una riga o colonna è tutta di zeri, il determinante è zero.
Riga moltiplicata per $c$ | Moltiplicare una riga o colonna per $c$ moltiplica il determinante per $c$; tutta la matrice $n \times n$ lo moltiplica per $c^n$.
Area con segno | Per le $2 \times 2$ reali il determinante è l'area del parallelogramma delle colonne, con il segno dell'orientazione.
```

## Checklist

```checklist
- So dire per quali matrici esiste il determinante e riconosco il tranello della matrice non quadrata.
- So calcolare un determinante $2 \times 2$ e spiegare che cosa misura.
- So trovare il segno di una permutazione e leggere la Definizione 9.1.
- So scrivere i sei prodotti del determinante $3 \times 3$ e usare la regola di Sarrus.
- So calcolare il determinante di una matrice triangolare e so che l'identità ha determinante 1.
- So che la trasposta ha lo stesso determinante e perché questo permette di lavorare sulle colonne.
- So sviluppare un determinante con Laplace lungo qualsiasi riga o colonna, con i segni della scacchiera.
- So scegliere la riga o la colonna più comoda e ridurre una $4 \times 4$ o una $5 \times 5$ a pochi conti.
- So tirare fuori un numero comune da una riga o da una colonna.
- So usare $\det(cA) = c^n \det A$ e so che il determinante non si spezza sulle somme.
- So calcolare determinanti con numeri complessi, radici, $\pi$ ed $e$ senza calcolatrice.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 9 «Matrici II», pp. 41–45: le sezioni 9.A (determinante, matrici triangolari, identità), 9.B (sviluppo di Laplace), 9.C (proprietà) e 9.D (esercizi) sono seguite in ordine, con la pagina accanto a ogni titolo; la sezione sull'area è anticipata all'inizio per dare un'idea del determinante prima della definizione. Definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizioni 9.1 e 9.4, Proposizioni 9.3, 9.5, 9.10, 9.11, Teorema 9.6, Corollari 9.7 e 9.12, Esempi 9.2, 9.8, 9.9, Esercizi 9.13 e 9.14, svolti come esercizi 11 e 12).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §3.3.1–3.3.4 (definizione, colorazioni, Proposizione 3.3.2, matrici triangolari, identità, Teorema 3.3.5), §3.3.10 (basi positive e negative, area e volume), §3.4.6 (Osservazione 3.4.9 sul determinante della somma), Esercizi 3.10 e 3.11.
- **Esame**: testi degli appelli di Algebra lineare dal 24/01/2024 al 07/09/2026 (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); riportate con soluzione propria le domande 3 del 02/09/2025, 4 del 10/07/2025 e 2 del 03/06/2026; le altre sono citate per numero.
- Le parti **«Oltre le dispense»** (significato geometrico, regola di Sarrus, segno con le inversioni, dimostrazioni di 9.5 e dell'idea di Laplace, esercizi senza numero) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
