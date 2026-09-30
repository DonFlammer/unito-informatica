---
corso: MDAG
modulo: AG
lezione: L08
titolo: Matrici I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L08
descrizione: >-
  Appunti della lezione L08 di Algebra lineare e Geometria (MDAG, parte 2): trasposta di una matrice, matrici
  simmetriche, rango per righe e per colonne, prodotto riga per colonna e sue proprietà, traccia, con quiz nello
  stile dell'esame ed esercizi svolti.
lede: >-
  Le matrici smettono di essere semplici tabelle e diventano strumenti di calcolo: la trasposta ${}^tA$, il rango
  $\rk(A)$ (quante colonne indipendenti ci sono davvero), il prodotto riga per colonna, che non è commutativo, e la
  traccia $\tr A$. Sono le operazioni che compaiono in quasi ogni quiz d'esame, spesso con un tranello.
materiale: dispense
scheda:
  Dispense: lezione 8 · pp. 36–40
  Libro: Martelli, §2.3.10, §3.2.3, §3.2.6, §3.4.1–3.4.5 e §4.4.5
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 100–130 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 8 «Matrici I»; B. Martelli, Geometria e algebra lineare, §2.3.10, §3.2.3, §3.2.6, §3.4.1–3.4.5 e §4.4.5
file_en: L08_matrices_1.html
appunti_html: appunti/MDAG/L08_matrici_1.html
genera_html: true
---

## In breve

- Una matrice $m \times n$ ha $m$ righe e $n$ colonne. Le matrici $m \times n$ a coefficienti in $\K$ formano lo spazio vettoriale $M(m, n, \K)$, di dimensione $mn$. Le righe si indicano $A_1, \dots, A_m$ (indice in basso), le colonne $A^1, \dots, A^n$ (indice in alto).
- La **trasposta** ${}^tA$ scambia righe e colonne: $({}^tA)_{ij} = A_{ji}$, e una matrice $m \times n$ diventa $n \times m$. Una matrice quadrata è **simmetrica** se ${}^tA = A$, **antisimmetrica** se ${}^tA = -A$.
- Il **rango** $\rk(A)$ è la dimensione dello spazio generato dalle colonne, cioè il **massimo numero di colonne linearmente indipendenti**.
- Rango per righe e rango per colonne coincidono: $\rk({}^tA) = \rk(A)$. Di conseguenza $\rk(A) \le \min(m, n)$.
- Il **prodotto riga per colonna** $AB$ esiste solo se $A$ ha tante colonne quante sono le righe di $B$: $(m \times n) \cdot (n \times p)$ dà una matrice $m \times p$, con $(AB)_{ij} = A_{i1}B_{1j} + \dots + A_{in}B_{nj}$.
- Il prodotto **non è commutativo**: di solito $AB \neq BA$, e può succedere che $AB = 0$ con $A \neq 0$ e $B \neq 0$. Valgono però l'associatività e la distributività.
- La **traccia** di una matrice quadrata è la somma dei numeri sulla diagonale principale, e $\tr(AB) = \tr(BA)$ anche quando $AB \neq BA$.
- All'esame compaiono quasi sempre una domanda «quale identità vale tra $AB$, $BA$, $A$ e $B$?», una traccia di un prodotto e un rango da calcolare.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Da dove ripartiamo: le matrici (p. 36)

Una **matrice** è una tabella rettangolare di numeri. Nella lezione L06 l'abbiamo definita così: una matrice con $m$ righe e $n$ colonne a coefficienti in un campo $\K$ (per noi quasi sempre $\K = \R$ o $\K = \C$) è

$$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}.$$

Si dice brevemente che $A$ è una matrice $m \times n$ (si legge «$m$ per $n$»): **prima le righe, poi le colonne**.

- Il numero $a_{ij}$ sta nella riga $i$ e nella colonna $j$: **il primo indice è la riga, il secondo la colonna**. Le dispense lo scrivono anche $A_{ij}$: è la stessa cosa.
- La riga $i$-esima si indica $A_i$ (indice in basso), la colonna $j$-esima $A^j$ (indice in alto). Attenzione: qui $A^2$ vuol dire «seconda colonna», non «$A$ al quadrato»; di solito il contesto chiarisce.
- $M(m, n, \K)$ è l'insieme di tutte le matrici $m \times n$ a coefficienti in $\K$; le matrici quadrate $n \times n$ formano $M(n, \K)$, o più brevemente $M(n)$.
- Una matrice $m \times 1$ è un **vettore colonna**: $M(m, 1, \K) = \K^m$.

> [!ESEMPIO] · Leggere una matrice
> $$A = \begin{pmatrix} 3 & 0 & -1 \\ 2 & 5 & 4 \end{pmatrix}$$
> è una matrice $2 \times 3$: due righe e tre colonne. Il numero nella riga 2 e colonna 3 è $a_{23} = 4$; quello nella riga 1 e colonna 2 è $a_{12} = 0$. La seconda riga è $A_2 = (2, 5, 4)$, la terza colonna è
> $$A^3 = \begin{pmatrix} -1 \\ 4 \end{pmatrix} \in \R^2.$$
> Ogni colonna ha tanti numeri quante sono le righe (qui 2), quindi le colonne sono vettori di $\R^2$; ogni riga ha tanti numeri quante sono le colonne (qui 3), quindi le righe sono vettori di $\R^3$.

Le dispense ricordano le due operazioni già viste nella lezione L06, entrambe **casella per casella**: la somma di due matrici della stessa taglia e il prodotto per uno scalare $\lambda \in \K$,

$$(A + B)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda A)_{ij} = \lambda a_{ij}.$$

Per esempio:

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & -2 \\ 5 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 8 & 5 \end{pmatrix}, \qquad 3 \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix}.$$

Con queste due operazioni $M(m, n, \K)$ è uno **spazio vettoriale di dimensione $mn$** (Esercizio 7.13 delle dispense): una base è formata dalle $mn$ matrici $e_{ij}$ che hanno un 1 nella casella $(i, j)$ e 0 altrove. In questa lezione arrivano quattro operazioni nuove.

| Operazione | Si può fare se | Parte da | Dà |
|---|---|---|---|
| trasposta ${}^tA$ | sempre | $A$ di taglia $m \times n$ | una matrice $n \times m$ |
| rango $\rk(A)$ | sempre | $A$ di taglia $m \times n$ | un numero intero tra $0$ e $\min(m, n)$ |
| prodotto $AB$ | colonne di $A$ = righe di $B$ | $A$ di taglia $m \times n$, $B$ di taglia $n \times p$ | una matrice $m \times p$ |
| traccia $\tr A$ | $A$ quadrata | $A$ di taglia $n \times n$ | un numero |

## La trasposta di una matrice (p. 36)

Prendi una matrice e **ribaltala lungo la diagonale** che scende dall'angolo in alto a sinistra: la prima colonna diventa la prima riga, la seconda colonna diventa la seconda riga, e così via. Il risultato è la trasposta.

> [!DEF] 8.1 · Trasposta
> La **trasposta** di una matrice $A \in M(m, n, \K)$ è la matrice
> $${}^tA \in M(n, m, \K)$$
> definita scambiando righe e colonne, cioè:
> $$({}^tA)_{ij} = A_{ji}.$$

Pezzo per pezzo:

- ${}^tA$ si legge «$A$ trasposta». La $t$ piccola **in alto a sinistra** è la notazione del corso; in altri libri trovi $A^T$ o $A^t$.
- $A \in M(m, n, \K)$ e ${}^tA \in M(n, m, \K)$: le dimensioni **si scambiano**. Da $3 \times 2$ si passa a $2 \times 3$.
- $({}^tA)_{ij} = A_{ji}$: il numero che la trasposta ha nella riga $i$ e colonna $j$ è quello che $A$ ha nella riga $j$ e colonna $i$. Gli indici si scambiano, proprio come righe e colonne.
- Di conseguenza la riga $i$ di ${}^tA$ contiene gli stessi numeri della colonna $i$ di $A$, e la colonna $j$ di ${}^tA$ gli stessi numeri della riga $j$ di $A$.

> [!ESEMPIO] 8.2 · Una matrice $3 \times 2$ e la sua trasposta
> $$A = \begin{pmatrix} 2 & 1 \\ -1 & 0 \\ 5 & 7 \end{pmatrix} \quad\Longrightarrow\quad {}^tA = \begin{pmatrix} 2 & -1 & 5 \\ 1 & 0 & 7 \end{pmatrix}$$
> La prima colonna di $A$, cioè $2, -1, 5$ letta dall'alto in basso, è diventata la prima riga di ${}^tA$; la seconda colonna $1, 0, 7$ è diventata la seconda riga. Controllo di due caselle con la definizione:
> - $({}^tA)_{13} = A_{31} = 5$ (riga 3 e colonna 1 di $A$);
> - $({}^tA)_{21} = A_{12} = 1$ (riga 1 e colonna 2 di $A$).
>
> $A$ è $3 \times 2$, ${}^tA$ è $2 \times 3$.

Le dispense elencano subito alcune proprietà.

> [!PROP] · Proprietà della trasposta (p. 36)
> - ${}^t(A + B) = {}^tA + {}^tB$, $\quad {}^t(\lambda A) = \lambda({}^tA)$.
> - Se $A \in M(n)$, allora anche ${}^tA \in M(n)$.
> - $A \in M(n)$ è simmetrica $\iff {}^tA = A$; $A \in M(n)$ è antisimmetrica $\iff {}^tA = -A$.

Vediamole una alla volta.

1. **Somma e multipli.** Sommare e poi trasporre dà lo stesso risultato che trasporre e poi sommare: in entrambi i casi nella casella $(i, j)$ c'è $a_{ji} + b_{ji}$. Con i numeri:
   $${}^t\left(\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right) = {}^t\begin{pmatrix} 1 & 3 \\ 4 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 4 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} + \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}.$$
   Lo stesso vale per i multipli: moltiplicare ogni numero per $\lambda$ e poi ribaltare, oppure il contrario, porta alla stessa matrice. In altre parole la trasposizione **rispetta somme e multipli**: dalla lezione L14 una funzione con questa proprietà si chiamerà *lineare*.
2. **Quadrate restano quadrate.** Da $n \times n$ si passa a $n \times n$. La diagonale principale (le caselle $a_{11}, a_{22}, \dots, a_{nn}$) **non si muove**: $({}^tA)_{ii} = A_{ii}$.
3. **Simmetriche e antisimmetriche.** Nella lezione L06 (Definizione 6.3) una matrice quadrata è simmetrica se $a_{ij} = a_{ji}$ per ogni $i, j$, antisimmetrica se $a_{ij} = -a_{ji}$ per ogni $i, j$. Con la trasposta si dice in una formula: ${}^tA = A$ vuol dire proprio $A_{ji} = A_{ij}$ in ogni casella.

> [!ESEMPIO] · Una simmetrica e un'antisimmetrica
> $$S = \begin{pmatrix} 1 & 4 & 5 \\ 4 & 2 & 6 \\ 5 & 6 & 3 \end{pmatrix}, \qquad N = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix}.$$
> In $S$ la diagonale fa da **specchio**: il 4 in posizione $(1, 2)$ ritorna in posizione $(2, 1)$, il 5 in $(1, 3)$ e $(3, 1)$, il 6 in $(2, 3)$ e $(3, 2)$. Quindi ${}^tS = S$.
>
> In $N$ ogni numero ritorna dall'altra parte **col segno cambiato**: $2$ e $-2$, $-1$ e $1$, $3$ e $-3$. Quindi ${}^tN = -N$. La diagonale di un'antisimmetrica è tutta nulla: da $a_{ii} = -a_{ii}$ segue $2a_{ii} = 0$, cioè $a_{ii} = 0$.

> [!OLTRE] · altre due proprietà utili
> - Trasporre due volte riporta alla matrice di partenza: ${}^t({}^tA) = A$.
> - Ogni matrice quadrata è somma di una simmetrica e di un'antisimmetrica (Martelli, Esempio 2.3.33):
>   $$A = \underbrace{\frac{A + {}^tA}2}_{\text{simmetrica}} + \underbrace{\frac{A - {}^tA}2}_{\text{antisimmetrica}}.$$
>   Per esempio con $A = \begin{pmatrix} 1 & 2 \\ 4 & 3 \end{pmatrix}$ si trova $\frac{A + {}^tA}2 = \begin{pmatrix} 1 & 3 \\ 3 & 3 \end{pmatrix}$ e $\frac{A - {}^tA}2 = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, che sommate ridanno $A$.
> - La matrice ${}^tA - A$ è sempre antisimmetrica, ed è nulla **esattamente** quando $A$ è simmetrica. Per questo alcuni problemi d'esame chiedono di calcolarla (vedi «Verso l'esame»).

### Vettori scritti in riga: la notazione ${}^t(x, y, z)$

Un vettore colonna occupa tre righe di testo. Per risparmiare spazio lo si scrive come **trasposto di una riga**:

$${}^t(1, 2, 3) = {}^t\begin{pmatrix} 1 & 2 & 3 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}.$$

Negli appelli è ovunque: «$v_1 = {}^t(1, 0, -1)$», «$T({}^t(x, y, z)) = {}^t(x + 2y, \dots)$»; nei testi scansionati la $t$ può comparire staccata, come $t(1, 2)$. Vuol dire sempre: il vettore **colonna** con quelle coordinate.

## Il rango di una matrice (p. 37)

Guarda questa matrice:

$$A = \begin{pmatrix} 2 & 4 & -2 \\ 1 & 2 & -1 \end{pmatrix}.$$

Ha tre colonne, $A^1 = {}^t(2, 1)$, $A^2 = {}^t(4, 2)$ e $A^3 = {}^t(-2, -1)$, ma sono tutte **multiple della prima**: $A^2 = 2A^1$ e $A^3 = -A^1$. Stanno tutte sulla stessa retta. Tre colonne, ma un solo «pezzo di informazione»: il rango misura proprio questo.

```grafico
titolo: Le tre colonne di $A$ stanno sulla retta $y = \frac x2$: lo spazio che generano ha dimensione 1
x: -3 5
y: -2 3
retta: 0 0 2 1 | grigio | tratteggio
vettore: 4 2 | blu | $A^2$ | ne
vettore: 2 1 | accento | spesso | $A^1$ | no
vettore: -2 -1 | viola | $A^3$ | so
```

> [!DEF] 8.3 · Rango
> Sia $A$ una matrice $m \times n$ a coefficienti in $\K$, con colonne $A^1, \dots, A^n$; ciascun $A^i$ è un vettore in $\K^m$. Il **rango** di $A$ (o **rango per colonne** di $A$) è la dimensione dello spazio
> $$\Span(A^1, \dots, A^n) \subset \K^m.$$
> Viene comunemente indicato con $\rk(A)$.

Pezzo per pezzo:

- $A^1, \dots, A^n$ sono le colonne: ognuna ha $m$ numeri, quindi è un vettore di $\K^m$.
- $\Span(A^1, \dots, A^n)$ è l'insieme di **tutte** le combinazioni lineari $\lambda_1 A^1 + \dots + \lambda_n A^n$ (lezione L06, Definizione 6.6): è un sottospazio di $\K^m$.
- La **dimensione** è il numero di vettori di una sua base (lezione L07, Definizione 7.11).
- $\rk$ viene dall'inglese *rank*, «rango».

Nell'esempio sopra $\Span(A^1, A^2, A^3) = \Span(A^1)$ è una retta, che ha dimensione 1: $\rk(A) = 1$.

> [!PROP] 8.4
> Il rango di $A$ è il massimo numero di colonne linearmente indipendenti di $A$.

Le dispense la ricavano «con un'osservazione della lezione 7». Ecco il ragionamento, passo per passo.

1. Le colonne $A^1, \dots, A^n$ **generano** $W = \Span(A^1, \dots, A^n)$, per definizione.
2. Se sono linearmente dipendenti, una di loro è combinazione lineare delle altre (Proposizione 7.2). Togliendola lo Span **non cambia**: ogni combinazione che la usava si può riscrivere con le altre.
3. Si ripete finché le colonne rimaste sono indipendenti. A quel punto sono indipendenti e generano $W$: sono una **base** di $W$, quindi il loro numero è $\dim W = \rk(A)$.
4. Nessun gruppo di colonne indipendenti può essere più numeroso: in uno spazio di dimensione $d$, più di $d$ vettori sono sempre dipendenti (Martelli, §2.3).

Quindi il massimo numero di colonne indipendenti è esattamente $\dim W$. Martelli chiama questa procedura **algoritmo di estrazione** di una base da un insieme di generatori.

Si può fare lo stesso discorso con le righe.

> [!DEF] 8.5 · Rango per righe
> Definiamo il **rango per righe** di $A$ come la dimensione dello spazio generato dalle righe
> $$\Span(A_1, \dots, A_m) \subset \K^n.$$
> In altre parole, il rango per righe di $A$ è il rango della trasposta ${}^tA$.

Le righe hanno $n$ numeri, quindi stanno in $\K^n$. «In altre parole»: le colonne di ${}^tA$ sono proprio le righe di $A$, quindi lo Span delle righe di $A$ è lo Span delle colonne di ${}^tA$.

A prima vista rango per righe e rango per colonne non hanno niente in comune: in una matrice $2 \times 5$ le colonne sono cinque vettori di $\K^2$, le righe due vettori di $\K^5$. Invece:

> [!PROP] 8.6
> Per ogni matrice $A$ il rango per righe è uguale al rango per colonne. Vale allora $\rk({}^tA) = \rk(A)$.

> [!ESEMPIO] · Righe e colonne di una matrice $2 \times 5$
> $$C = \begin{pmatrix} 1 & 2 & 0 & 1 & 3 \\ 2 & 4 & 1 & 0 & 5 \end{pmatrix}$$
> **Righe.** $C_1 = (1, 2, 0, 1, 3)$ e $C_2 = (2, 4, 1, 0, 5)$ non sono una multipla dell'altra (nella terza posizione $C_1$ ha $0$ e $C_2$ ha $1$), quindi sono indipendenti: il rango per righe è 2.
>
> **Colonne.** Cinque vettori di $\R^2$: non possono essere indipendenti tutti e cinque, perché $\dim \R^2 = 2$. Ma $C^1 = {}^t(1, 2)$ e $C^3 = {}^t(0, 1)$ non sono multipli, quindi sono indipendenti: il rango per colonne è 2.
>
> I due ranghi coincidono, come dice la Proposizione 8.6.

Una conseguenza da ricordare, che non ha bisogno di calcoli:

$$\rk(A) \le \min(m, n).$$

Infatti $\Span(A^1, \dots, A^n)$ è un sottospazio di $\K^m$, quindi ha dimensione al più $m$; ed è generato da $n$ vettori, quindi ha dimensione al più $n$. Una matrice $3 \times 5$ ha rango al massimo 3, una $4 \times 2$ al massimo 2.

> [!OLTRE] · perché righe e colonne danno lo stesso rango
> Le dispense non lo dimostrano qui. Martelli (Proposizione 3.2.20) usa le **mosse di Gauss** sulle righe, che vedrai nelle lezioni L11 e L12: non cambiano né il rango per righe né quello per colonne, e trasformano la matrice in una matrice «a scalini», in cui i due ranghi sono entrambi uguali al numero di **pivot** (i primi numeri non nulli delle righe). Da lì segue anche il metodo pratico: **il rango è il numero di righe non nulle di una riduzione a scalini**.

### Calcolare il rango a mano

> [!METODO] Il rango senza mosse di Gauss
> 1. Se $A$ è la matrice nulla, $\rk(A) = 0$; se ha almeno un numero diverso da zero, $\rk(A) \ge 1$.
> 2. Scrivi subito il limite $\rk(A) \le \min(m, n)$.
> 3. Cerca colonne **oppure righe** (il rango è lo stesso, scegli le più comode) nulle, uguali, multiple di altre o somme di altre: toglierle non cambia lo Span.
> 4. Controlla che quelle rimaste siano indipendenti: due vettori lo sono se non sono multipli; con tre o più risolvi $\lambda_1 v_1 + \lambda_2 v_2 + \dots = 0$.
> 5. Quante ne restano, tanto vale il rango.

> [!ESEMPIO] · Quattro ranghi
> 1. $I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$: le colonne sono $e_1, e_2, e_3$, indipendenti (lezione L07, Esempio 7.5). $\rk = 3$.
> 2. $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$: le colonne ${}^t(1, 3)$ e ${}^t(2, 4)$ non sono multiple (servirebbe $2 = 1 \cdot c$ e $4 = 3 \cdot c$, cioè $c = 2$ e $c = \frac 43$ insieme). $\rk = 2$.
> 3. $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix}$: la terza colonna è la somma delle prime due, ${}^t(1, 1, 2) = {}^t(1, 0, 1) + {}^t(0, 1, 1)$, e le prime due non sono multiple. $\rk = 2$.
> 4. $\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$: qui conviene guardare le righe. La terza è $2 \cdot (4, 5, 6) - (1, 2, 3) = (8 - 1, 10 - 2, 12 - 3) = (7, 8, 9)$, e le prime due non sono multiple. $\rk = 2$.

Nello strumento qui sotto trovi l'ultima matrice. Premi «Calcola»: lo strumento la trasforma con le mosse di Gauss (le vedrai nelle lezioni L10 e L11) e conta le righe non nulle che restano. Poi prova $I_3$ (scrivi `1 0 0; 0 1 0; 0 0 1`), che ha rango 3, e `1 2; 2 4`, che ha rango 1.

```widget gauss
titolo: Il rango di una matrice, con i passaggi
matrice: 1 2 3; 4 5 6; 7 8 9
modo: rango
modi: rango
```

> [!TRAPPOLA] Tre errori tipici sul rango
> - Il rango **non** è il numero di righe, né il numero di righe con qualche numero diverso da zero: la matrice $4$ dell'esempio ha tre righe non nulle ma rango 2.
> - Il rango non supera mai $\min(m, n)$: una matrice $2 \times 5$ non può avere rango 5.
> - Due vettori sono dipendenti solo se sono **multipli**; tre vettori possono essere dipendenti anche se a due a due non lo sono (lezione L07, Esempio 7.4). Non fermarti ai controlli a coppie.

## Il prodotto fra matrici (pp. 37–38)

### L'idea con un esempio di tutti i giorni

Anna compra 2 quaderni e 3 penne; Bruno compra 1 quaderno e 5 penne. Nel negozio X un quaderno costa 4 € e una penna 1 €; nel negozio Y un quaderno costa 3 € e una penna 2 €. Quanto spende ciascuno in ciascun negozio?

Per Anna nel negozio X: $2 \cdot 4 + 3 \cdot 1 = 11$ €. È una «riga» (quello che compra Anna) per una «colonna» (i prezzi di X): primo per primo, secondo per secondo, e si somma. Mettendo tutto in due tabelle:

$$\underbrace{\begin{pmatrix} 2 & 3 \\ 1 & 5 \end{pmatrix}}_{\text{acquisti: persone} \times \text{articoli}} \underbrace{\begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix}}_{\text{prezzi: articoli} \times \text{negozi}} = \begin{pmatrix} 2 \cdot 4 + 3 \cdot 1 & 2 \cdot 3 + 3 \cdot 2 \\ 1 \cdot 4 + 5 \cdot 1 & 1 \cdot 3 + 5 \cdot 2 \end{pmatrix} = \underbrace{\begin{pmatrix} 11 & 12 \\ 9 & 13 \end{pmatrix}}_{\text{spesa: persone} \times \text{negozi}}.$$

Il 12 nella riga 1 e colonna 2 è quanto spende Anna (riga 1) nel negozio Y (colonna 2). Nota due cose che valgono sempre: il prodotto si può fare perché le **colonne** della prima tabella e le **righe** della seconda parlano delle stesse cose (gli articoli); il risultato ha le **righe** della prima (le persone) e le **colonne** della seconda (i negozi).

> [!DEF] 8.7 · Prodotto riga per colonna
> Se $A$ è una matrice $m \times n$ e $B$ è una matrice $n \times p$, il prodotto $AB$ è una nuova matrice $m \times p$ definita nel modo seguente: l'elemento $(AB)_{ij}$ della nuova matrice $AB$ è
> $$(AB)_{ij} = \sum_{k=1}^n A_{ik}B_{kj} = A_{i1}B_{1j} + \dots + A_{in}B_{nj}.$$
> Questo tipo di prodotto fra matrici si chiama **prodotto riga per colonna** perché l'elemento $(AB)_{ij}$ si ottiene facendo un opportuno prodotto fra la riga $i$-esima $A_i$ di $A$ e la colonna $j$-esima $B^j$ di $B$.

Pezzo per pezzo:

- **Le taglie.** $(m \times \mathbf{n}) \cdot (\mathbf{n} \times p) = m \times p$: i due numeri «interni» devono essere **uguali**, quelli «esterni» danno la taglia del risultato. Se i numeri interni sono diversi, il prodotto **non esiste**.
- **Il simbolo $\sum$** (sigma maiuscola) è una somma: $\sum_{k=1}^n x_k$ vuol dire $x_1 + x_2 + \dots + x_n$. L'indice $k$ scorre da 1 a $n$.
- **Riga per colonna.** La riga $A_i = (A_{i1}, \dots, A_{in})$ e la colonna $B^j = {}^t(B_{1j}, \dots, B_{nj})$ hanno entrambe $n$ numeri: si moltiplicano **il primo con il primo, il secondo con il secondo**, e così via, e si sommano i risultati. Per questo servono tanti numeri nella riga quanti nella colonna.
- Il risultato va nella casella che sta **nella stessa riga della riga usata e nella stessa colonna della colonna usata**. Schematicamente, riga 2 per colonna 2:
  $$\begin{pmatrix} \cdot & \cdot \\ a & b \\ \cdot & \cdot \end{pmatrix} \begin{pmatrix} \cdot & x & \cdot \\ \cdot & y & \cdot \end{pmatrix} = \begin{pmatrix} \cdot & \cdot & \cdot \\ \cdot & ax + by & \cdot \\ \cdot & \cdot & \cdot \end{pmatrix}$$

> [!ESEMPIO] 8.8 · Una $3 \times 2$ per una $2 \times 4$
> $$A = \begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix}, \qquad B = \begin{pmatrix} -1 & 2 & 0 & 1 \\ 3 & 0 & 3 & 0 \end{pmatrix}$$
> $A$ è $3 \times 2$ e $B$ è $2 \times 4$: i numeri interni sono $2$ e $2$, quindi $AB$ esiste ed è $3 \times 4$. Le righe di $A$ sono $(1, 2)$, $(-1, 1)$, $(0, 3)$; le colonne di $B$ sono ${}^t(-1, 3)$, ${}^t(2, 0)$, ${}^t(0, 3)$, ${}^t(1, 0)$. I dodici conti:
>
> | | colonna 1 | colonna 2 | colonna 3 | colonna 4 |
> |---|---|---|---|---|
> | riga 1 | $1 \cdot (-1) + 2 \cdot 3 = 5$ | $1 \cdot 2 + 2 \cdot 0 = 2$ | $1 \cdot 0 + 2 \cdot 3 = 6$ | $1 \cdot 1 + 2 \cdot 0 = 1$ |
> | riga 2 | $(-1)(-1) + 1 \cdot 3 = 4$ | $(-1) \cdot 2 + 1 \cdot 0 = -2$ | $(-1) \cdot 0 + 1 \cdot 3 = 3$ | $(-1) \cdot 1 + 1 \cdot 0 = -1$ |
> | riga 3 | $0 \cdot (-1) + 3 \cdot 3 = 9$ | $0 \cdot 2 + 3 \cdot 0 = 0$ | $0 \cdot 0 + 3 \cdot 3 = 9$ | $0 \cdot 1 + 3 \cdot 0 = 0$ |
>
> $$AB = \begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix} \cdot \begin{pmatrix} -1 & 2 & 0 & 1 \\ 3 & 0 & 3 & 0 \end{pmatrix} = \begin{pmatrix} 5 & 2 & 6 & 1 \\ 4 & -2 & 3 & -1 \\ 9 & 0 & 9 & 0 \end{pmatrix}.$$
> Possiamo fare il prodotto $AB$ perché il numero di colonne di $A$ è pari al numero di righe di $B$. Viceversa, **non** possiamo fare il prodotto $BA$: il numero di colonne di $B$ è 4, mentre il numero di righe di $A$ è 3.

Nello strumento qui sotto ci sono le matrici dell'Esempio 8.8: premi «Calcola» e confronta i dodici conti con la tabella. Poi scambia le due matrici (scrivi $B$ nel primo riquadro e $A$ nel secondo): lo strumento ti avvisa che il prodotto non si può fare.

```widget gauss
titolo: Il prodotto riga per colonna, un elemento alla volta
matrice: 1 2; -1 1; 0 3
b: -1 2 0 1; 3 0 3 0
modo: prodotto
modi: prodotto
```

Un caso speciale importantissimo: il secondo fattore è un vettore colonna.

> [!ESEMPIO] 8.9 · Matrice per vettore
> Se $A$ è una matrice $m \times n$ e $x$ è una matrice $n \times 1$, cioè un vettore colonna $x \in \K^n$, allora il prodotto $Ax$ è una matrice $m \times 1$, cioè un vettore colonna in $\K^m$. Ad esempio:
> $$\begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2 \cdot (-1) \\ (-1) \cdot 1 + 1 \cdot (-1) \\ 0 \cdot 1 + 3 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ -3 \end{pmatrix}.$$

> [!OLTRE] · $Ax$ è una combinazione delle colonne di $A$
> Guarda di nuovo l'Esempio 8.9, questa volta **per colonne**:
> $$1 \cdot \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} + (-1) \cdot \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ -3 \end{pmatrix}.$$
> In generale $Ax = x_1 A^1 + x_2 A^2 + \dots + x_n A^n$: il prodotto matrice per vettore è la **combinazione lineare delle colonne** con coefficienti le coordinate di $x$. Quindi l'insieme di tutti i vettori $Ax$ è $\Span(A^1, \dots, A^n)$, e il rango è la sua dimensione.
>
> È anche il motivo per cui questo prodotto, all'apparenza strano, è quello giusto: il sistema $\begin{cases} 2x + 3y = 5 \\ x - y = 1 \end{cases}$ si scrive in una riga come
> $$\begin{pmatrix} 2 & 3 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix},$$
> cioè $Ax = b$ (Martelli, §3.4.2). Sui sistemi lineari scritti così si lavora dalla lezione L11.

### Il prodotto non è commutativo

Se $A$ e $B$ sono due matrici $n \times n$, si possono fare sia $AB$ sia $BA$, e il risultato è $n \times n$ in entrambi i casi. Ma **in generale questi due prodotti non sono uguali**: il prodotto di matrici **non è commutativo**.

> [!ESEMPIO] 8.10 · $AB \neq BA$
> Siano $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
>
> $AB$, casella per casella: $(1, 1)$: $1 \cdot 0 + 0 \cdot 0 = 0$; $(1, 2)$: $1 \cdot 1 + 0 \cdot 0 = 1$; $(2, 1)$: $0 \cdot 0 + 0 \cdot 0 = 0$; $(2, 2)$: $0 \cdot 1 + 0 \cdot 0 = 0$.
>
> $BA$: $(1, 1)$: $0 \cdot 1 + 1 \cdot 0 = 0$; $(1, 2)$: $0 \cdot 0 + 1 \cdot 0 = 0$; $(2, 1)$: $0 \cdot 1 + 0 \cdot 0 = 0$; $(2, 2)$: $0 \cdot 0 + 0 \cdot 0 = 0$.
> $$AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = B, \qquad BA = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = 0,$$
> quindi $AB \neq BA$.

L'esempio mostra anche che alcune regole dei numeri, con le matrici, non valgono più.

> [!TRAPPOLA] Con le matrici non si «semplifica»
> - $BA = 0$ anche se $A \neq 0$ e $B \neq 0$: un prodotto nullo **non** implica che un fattore sia nullo.
> - $AB = B$, ma $A$ non è la matrice che «non cambia niente» (la matrice identità $I_2$, lezione L09): da $AB = B$ **non** si può «dividere per $B$» e concludere $A = I_2$.
> - L'ordine dei fattori va sempre rispettato: $(A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2$, che in generale **non** è $A^2 + 2AB + B^2$ (esercizio 6).

Anche quando $AB$ e $BA$ esistono entrambi, possono avere **taglie diverse**: se $A$ è $3 \times 2$ e $B$ è $2 \times 3$, allora $AB$ è $3 \times 3$ e $BA$ è $2 \times 2$ (Esercizio 8.15). Le regole che invece funzionano come con i numeri sono queste.

> [!PROP] 8.11
> Per ogni $A, B, C$ matrici per cui i prodotti e le somme abbiano senso e per ogni $\lambda \in \K$, abbiamo
> 1. $A(BC) = (AB)C$ (associatività),
> 2. $A(B + C) = AB + AC$ e $(A + B)C = AC + BC$ (distributività),
> 3. $\lambda(AB) = (\lambda A)B = A(\lambda B)$.

Pezzo per pezzo:

- «Per cui i prodotti e le somme abbiano senso»: le taglie devono essere compatibili. Per esempio in (1) $A$ è $m \times n$, $B$ è $n \times p$, $C$ è $p \times q$.
- **Associatività**: si può scrivere $ABC$ senza parentesi e calcolarlo come si preferisce, $(AB)C$ oppure $A(BC)$. Ma **l'ordine delle lettere resta quello**: $ABC$ non è $ACB$.
- **Distributività** in due versioni, perché il prodotto non è commutativo: nella prima $A$ moltiplica **a sinistra** e resta a sinistra, nella seconda $C$ moltiplica **a destra** e resta a destra.
- Gli **scalari** invece si spostano liberamente: $\lambda(AB) = (\lambda A)B = A(\lambda B)$.

> [!DIM] della Proposizione 8.11, punti (1) e (2)
> Seguiamo Martelli (Proposizione 3.4.2). Per la distributività, con la definizione di prodotto e di somma:
> $$(A(B + C))_{ij} = \sum_k A_{ik}(B + C)_{kj} = \sum_k A_{ik}B_{kj} + \sum_k A_{ik}C_{kj} = (AB)_{ij} + (AC)_{ij}.$$
> Per l'associatività si scrivono entrambi i membri come somme doppie:
> $$(A(BC))_{ij} = \sum_k A_{ik}(BC)_{kj} = \sum_k \sum_h A_{ik}B_{kh}C_{hj},$$
> $$((AB)C)_{ij} = \sum_h (AB)_{ih}C_{hj} = \sum_h \sum_k A_{ik}B_{kh}C_{hj}.$$
> Sono le stesse somme di prodotti $A_{ik}B_{kh}C_{hj}$, su tutte le coppie $(k, h)$, solo in ordine diverso: quindi coincidono. Il punto (3) si verifica allo stesso modo.

> [!OLTRE] · la matrice identità e le potenze
> La **matrice identità** $I_n$ ha 1 sulla diagonale e 0 altrove; le dispense la introducono nella lezione L09 (Definizione 9.4). Nel prodotto fa la parte del numero 1: $I_n A = A I_n = A$ per ogni $A \in M(n)$ (Martelli, Proposizione 3.4.4). Con le matrici quadrate si possono fare le **potenze**: $A^2 = AA$, $A^3 = AAA$, e così via. Per esempio
> $$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \quad A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \quad A^3 = A^2 A = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}.$$
> In Matematica Discreta dirai che $M(n)$, con somma e prodotto, è un **anello non commutativo** (per $n \ge 2$).

> [!METODO] «Quale identità vale?»
> È una domanda d'esame frequentissima: date $A$ e $B$ quadrate $3 \times 3$, quale tra $AB = BA$, $AB = A$, $AB = B$, $BA = A$, $BA = B$ è vera?
> 1. Calcola $AB$ riga per riga (nove conti). Spesso le matrici hanno molti zeri e molti 1: sfruttali.
> 2. Confronta $AB$ con $A$ e con $B$.
> 3. Se nessuna delle due va bene, calcola $BA$ e confrontala con $A$, con $B$ e con $AB$.
> 4. Per **escludere** un'uguaglianza basta **una** casella diversa: non serve finire tutto il prodotto.

## La traccia di una matrice quadrata (p. 39)

Nella matrice $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ la diagonale principale contiene 1 e 4: la loro somma, 5, è la traccia.

> [!DEF] 8.12 · Traccia
> La **traccia** di una matrice quadrata $A \in M(n)$ è il numero
> $$\tr A = A_{11} + \dots + A_{nn}.$$
> Cioè, la traccia di $A$ è la somma dei numeri presenti sulla diagonale principale di $A$.

- Si calcola solo per le matrici **quadrate**: in una $2 \times 3$ la diagonale principale non arriva «da angolo ad angolo».
- $\tr$ viene dall'inglese *trace*.
- Per esempio $\tr \begin{pmatrix} 2 & 7 & -1 \\ 0 & -3 & 5 \\ 4 & 1 & 6 \end{pmatrix} = 2 + (-3) + 6 = 5$, e $\tr I_n = 1 + \dots + 1 = n$.

Il prodotto non è commutativo, ma la traccia «non se ne accorge».

> [!PROP] 8.13
> Se $A, B \in M(n)$, vale la relazione $\tr(AB) = \tr(BA)$.

La spiegazione delle dispense è una riga:

$$\tr(AB) = \sum_{i, j = 1}^n A_{ij}B_{ji} = \sum_{j, i = 1}^n B_{ji}A_{ij} = \tr(BA).$$

Eccola passo per passo.

1. L'elemento diagonale $(AB)_{ii}$ è la riga $i$ di $A$ per la colonna $i$ di $B$: $(AB)_{ii} = \sum_{j} A_{ij}B_{ji}$ (qui l'indice della somma si chiama $j$).
2. Sommando su $i$: $\tr(AB) = \sum_i \sum_j A_{ij}B_{ji}$, una somma con un addendo per **ogni coppia** $(i, j)$.
3. Allo stesso modo $(BA)_{jj} = \sum_i B_{ji}A_{ij}$, quindi $\tr(BA) = \sum_j \sum_i B_{ji}A_{ij}$.
4. I due totali contengono gli stessi addendi ($A_{ij}B_{ji} = B_{ji}A_{ij}$, perché tra **numeri** il prodotto è commutativo), per le stesse coppie $(i, j)$: sono uguali.

Nel caso $2 \times 2$ si vede a occhio: con $A = (a_{ij})$ e $B = (b_{ij})$,

$$\tr(AB) = a_{11}b_{11} + a_{12}b_{21} + a_{21}b_{12} + a_{22}b_{22},$$

$$\tr(BA) = b_{11}a_{11} + b_{12}a_{21} + b_{21}a_{12} + b_{22}a_{22}:$$

sono gli stessi quattro prodotti.

> [!ESEMPIO] · Prodotti diversi, stessa traccia
> $$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}: \qquad AB = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 1 \\ 3 \cdot 0 + 4 \cdot 1 & 3 \cdot 1 + 4 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 4 & 7 \end{pmatrix},$$
> $$BA = \begin{pmatrix} 0 \cdot 1 + 1 \cdot 3 & 0 \cdot 2 + 1 \cdot 4 \\ 1 \cdot 1 + 1 \cdot 3 & 1 \cdot 2 + 1 \cdot 4 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 4 & 6 \end{pmatrix}.$$
> $AB \neq BA$, ma $\tr(AB) = 2 + 7 = 9$ e $\tr(BA) = 3 + 6 = 9$.

> [!OLTRE] · altre proprietà della traccia, utili nei quiz
> - È lineare: $\tr(A + B) = \tr A + \tr B$ e $\tr(\lambda A) = \lambda \tr A$. Inoltre $\tr({}^tA) = \tr A$, perché la diagonale non si muove.
> - **Non** è moltiplicativa: $\tr(AB) \neq \tr A \cdot \tr B$ in generale. Con $A = B = I_2$: $\tr(I_2 I_2) = 2$, mentre $\tr I_2 \cdot \tr I_2 = 4$.
> - La stessa dimostrazione funziona se $A$ è $m \times n$ e $B$ è $n \times m$: $AB$ e $BA$ hanno taglie diverse ma la stessa traccia (lo verifichi nell'Esercizio 8.15).
> - Con tre fattori si può «ruotare»: $\tr(ABC) = \tr(BCA) = \tr(CAB)$ (basta applicare la Proposizione 8.13 ad $A$ e $BC$), ma **non** scambiare due fattori: $\tr(ACB)$ può essere diversa (esercizio 11).
> - Per $\tr(AB)$ bastano gli elementi diagonali: $\tr(AB) = \sum_i (\text{riga } i \text{ di } A) \cdot (\text{colonna } i \text{ di } B)$. E per una matrice reale $\tr(A\,{}^tA)$ è la **somma dei quadrati di tutti i suoi numeri**, perché $(A\,{}^tA)_{ii}$ è la riga $i$ di $A$ per sé stessa.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: la trasposta nel §2.3.10 (p. 73) e le matrici simmetriche e antisimmetriche nel §2.3.11 (pp. 73–74); il rango nel §3.2.3 (pp. 88–89: Definizione 3.2.7, Proposizione 3.2.8, Corollario 3.2.11) e rango per righe e per colonne nel §3.2.6 (p. 92, Proposizione 3.2.20 e Corollario 3.2.21); il prodotto fra matrici e le sue proprietà nei §3.4.1–3.4.5 (pp. 104–107), con l'Esercizio 3.4.3 sulla trasposta del prodotto; la traccia nel §4.4.5 (p. 141, Proposizione 4.4.11).

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 quiz a 5 risposte (servono almeno 6 risposte giuste perché vengano corretti i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. I dettagli sono nella lezione L01.

Le operazioni di questa lezione compaiono in **quasi ogni appello** dal 2023 al 2026:

| Tipo di domanda | Appelli (numero della domanda) | Che cosa serve |
|---|---|---|
| «Quale identità vale?» tra $AB$, $BA$, $A$, $B$ | 24/01/2024 (6), 10/06/2024 (5), 10/07/2024 (3), 15/01/2026 (1), 03/06/2026 (5) | prodotto riga per colonna, $AB \neq BA$ |
| traccia di un prodotto | 08/02/2024 (4), 06/09/2024 (8), 16/01/2025 (3), 10/07/2025 (9), 05/02/2026 (3), 03/07/2026 (9), 07/09/2026 (8) | solo la diagonale del prodotto |
| prodotto di tre matrici $2 \times 2$ | 07/02/2025 (3) | associatività, ordine dei fattori |
| rango di una matrice $3 \times 3$, $4 \times 4$ o $5 \times 5$ | 10/06/2024 (10), 16/01/2025 (6), 07/02/2025 (4), 05/02/2026 (4), 07/09/2026 (9) | relazioni tra righe o colonne, poi Gauss (L11–L12) |
| calcolare ${}^tA - A$ in un problema | 24/01/2024 (11), 15/01/2026 (11) | trasposta, matrici simmetriche |

Tre domande vere, con la soluzione svolta.

> [!ESAME] Appello del 15/01/2026, domanda 1
> Siano $A = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$. Quale identità vale? (a) $AB = BA$; (b) $BA = B$; (c) $AB = B$; (d) $AB = A$; (e) $BA = A$.
>
> **Soluzione.** Calcolo $AB$ riga per riga. La riga 1 di $A$ è $(1, 1, 1)$: per le tre colonne di $B$ dà $1 + 0 + 0 = 1$, poi $-1 + 1 + 0 = 0$, poi $0 - 1 + 1 = 0$. La riga 2, $(0, 1, 1)$, dà $0$, $1$, $-1 + 1 = 0$. La riga 3, $(0, 0, 1)$, dà $0, 0, 1$. Quindi $AB = I_3$, che non è né $A$ né $B$: (c) e (d) sono false. Rifacendo il conto nell'altro ordine si trova anche $BA = I_3$ (riga 2 di $B$ per le colonne di $A$: $0$, $1$, $1 - 1 = 0$, e così via). Quindi $AB = BA$: risposta **(a)**. Le due matrici sono una l'inversa dell'altra, un concetto della lezione L10.

> [!ESAME] Appello del 10/07/2025, domanda 9
> Data la matrice $A = \begin{pmatrix} 2 & 1 \\ 0 & 1 \\ 0 & 1 \end{pmatrix}$, la traccia di $A \cdot {}^tA$ è: (a) 7; (b) 9; (c) non si può calcolare, poiché $A$ non è una matrice quadrata; (d) 6; (e) 0.
>
> **Soluzione.** $A$ è $3 \times 2$ e ${}^tA$ è $2 \times 3$, quindi $A \cdot {}^tA$ è $3 \times 3$: è **quadrata**, e la traccia esiste. La (c) è il tranello. Servono solo gli elementi diagonali: $(A\,{}^tA)_{ii}$ è la riga $i$ di $A$ per sé stessa, cioè $2^2 + 1^2 = 5$, poi $0^2 + 1^2 = 1$, poi $0^2 + 1^2 = 1$. Traccia: $5 + 1 + 1 = 7$, risposta **(a)**. Controllo con la Proposizione 8.13: ${}^tA\,A = \begin{pmatrix} 4 & 2 \\ 2 & 3 \end{pmatrix}$ ha traccia $4 + 3 = 7$.

> [!ESAME] Appello del 15/01/2026, problema 11, punto (2), prima parte
> Data $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, con $k$ parametro reale, calcolare ${}^tA - A$.
>
> **Soluzione.** ${}^tA = \begin{pmatrix} 1 & k & 0 \\ k^2 & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ (la prima riga di $A$ diventa la prima colonna, eccetera). Sottraendo casella per casella:
> $${}^tA - A = \begin{pmatrix} 0 & k - k^2 & 0 \\ k^2 - k & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
> È nulla se e solo se $k - k^2 = k(1 - k) = 0$, cioè per $k = 0$ oppure $k = 1$: **solo per questi valori $A$ è simmetrica**. Nel resto del problema serviva proprio questo, perché le matrici reali simmetriche hanno autovalori reali e una base ortonormale di autovettori (teorema spettrale, lezioni L25–L26). Nota che il risultato è antisimmetrico, come deve essere.

**Il metodo per le domande sul rango.** Prima cerca relazioni evidenti tra righe o colonne: colonne uguali, righe multiple, una riga somma di altre due. Nei quiz degli ultimi anni c'erano quasi sempre: nelle matrici $3 \times 3$ una colonna doppia di un'altra, oppure una riga somma delle altre due, oppure una combinazione con coefficienti piccoli (come $-2$ e $3$); nella $4 \times 4$ del 05/02/2026 due righe erano combinazioni delle prime due. Poi controlla che le righe rimaste siano indipendenti. Se non vedi niente, riduci a scalini con Gauss (lezioni L11–L12) oppure, per una matrice quadrata, calcola il determinante (lezioni L09–L10: $\det A \neq 0$ vuol dire rango massimo).

**Il metodo per le tracce.** Non calcolare tutto il prodotto: servono solo gli elementi diagonali, cioè $n$ prodotti «riga $i$ per colonna $i$». Con tre fattori, $\tr(ABC)$, calcola prima $AB$ (serve tutta) e poi solo la diagonale di $(AB)C$; oppure usa $\tr(ABC) = \tr(CAB)$ se conviene. Nelle domande con radici e $\pi$ (08/02/2024, 07/09/2026) i numeri «brutti» si cancellano quasi sempre: fidati del conto.

Errori da evitare:

- moltiplicare **colonna per riga** invece che riga per colonna, o scambiare l'ordine dei fattori;
- dare per scontato che $AB = BA$, oppure che $AB = 0$ implichi $A = 0$ o $B = 0$;
- scrivere $\tr(AB) = \tr A \cdot \tr B$;
- dimenticare che ${}^t(AB) = {}^tB\,{}^tA$ (con l'ordine **rovesciato**);
- rispondere «non si può calcolare» quando il prodotto finale è quadrato anche se i fattori non lo sono;
- dichiarare un rango maggiore di $\min(m, n)$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: $(m \times n)(n \times p) = m \times p$ e $(AB)_{ij} = \sum_k A_{ik}B_{kj}$; $AB \neq BA$ in generale; ${}^t(AB) = {}^tB\,{}^tA$; $\tr(AB) = \tr(BA)$, $\tr(ABC) = \tr(CAB)$, $\tr(A\,{}^tA)$ uguale alla somma dei quadrati dei numeri di $A$; $\rk(A) = \rk({}^tA) \le \min(m, n)$; simmetrica $\iff {}^tA = A$.

## Quiz

```quiz
D: Siano $A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{pmatrix}$. Quale identità vale?
+ $AB = BA$
- $AB = A$
- $AB = B$
- $BA = A$
- $BA = B$
= Riga per colonna: la riga 2 di $A$, $(1, 1, 0)$, per le colonne di $B$ dà $1 - 1 = 0$, $1$, $0$; la riga 3, $(1, 1, 1)$, dà $1 - 1 + 0 = 0$, $1 - 1 = 0$, $1$. Quindi $AB = I_3$, e allo stesso modo $BA = I_3$: vale $AB = BA$. Le altre sono false perché $I_3$ non è né $A$ né $B$. Simile all'appello del 15/01/2026, domanda 1.

D: Siano $A = \begin{pmatrix} 0 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} 3 & 1 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$. Quale identità vale?
+ $AB = A$
- $AB = B$
- $BA = A$
- $BA = B$
- $AB = BA$
= Ogni riga di $A$ ha 0 al primo posto, quindi la prima riga di $B$ viene moltiplicata per 0; le altre righe di $B$ sono $(0, 1, 0)$ e $(0, 0, 1)$ e ricopiano il resto. Per esempio la riga 1 di $AB$ è $0 \cdot (3, 1, -1) + 1 \cdot (0, 1, 0) + 2 \cdot (0, 0, 1) = (0, 1, 2)$. Quindi $AB = A$. Invece la prima riga di $BA$ è $3(0, 1, 2) + (0, 1, 1) - (0, 0, 0) = (0, 4, 7)$, diversa da quelle di $A$, di $B$ e di $AB$. Simile agli appelli del 03/06/2026 (domanda 5) e del 24/01/2024 (domanda 6).

D: Siano $A = \begin{pmatrix} \sqrt 5 & 0 & -\pi \\ 0 & \sqrt 2 & \sqrt 2 \\ \pi & \sqrt 5 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} \sqrt 5 & \pi & \sqrt 5 \\ \pi & 0 & -\pi \\ 0 & \sqrt 2 & \sqrt 2 \end{pmatrix}$. Quanto vale $\tr(AB)$?
+ $7$
- $(\sqrt 5 + \sqrt 2)^2$
- $5 + 2\pi^2$
- $\sqrt 7$
- $2\pi\sqrt 5$
= Servono solo gli elementi diagonali. $(AB)_{11} = \sqrt 5 \cdot \sqrt 5 + 0 \cdot \pi + (-\pi) \cdot 0 = 5$; $(AB)_{22} = 0 \cdot \pi + \sqrt 2 \cdot 0 + \sqrt 2 \cdot \sqrt 2 = 2$; $(AB)_{33} = \pi\sqrt 5 + \sqrt 5 \cdot (-\pi) + 0 \cdot \sqrt 2 = 0$. Totale $7$. Simile agli appelli del 07/09/2026 (domanda 8) e dell'08/02/2024 (domanda 4).

D: Data $A = \begin{pmatrix} 1 & 0 & 2 \\ 3 & 1 & 0 \end{pmatrix}$, quanto vale $\tr(A \cdot {}^tA)$?
+ $15$
- Non si può calcolare, poiché $A$ non è quadrata.
- $2$
- $7$
- $49$
= $A$ è $2 \times 3$, quindi $A \cdot {}^tA$ è $2 \times 2$: quadrata, la traccia esiste. Gli elementi diagonali sono le righe di $A$ per sé stesse: $1 + 0 + 4 = 5$ e $9 + 1 + 0 = 10$, totale $15$, cioè la somma dei quadrati di tutti i numeri di $A$. Il $2$ è la somma $a_{11} + a_{22}$ di $A$, il $7$ la somma dei suoi numeri. Simile all'appello del 10/07/2025, domanda 9.

D: Qual è il rango della matrice $\begin{pmatrix} 2 & 1 & 3 \\ 1 & 1 & 2 \\ 3 & 2 & 5 \end{pmatrix}$?
+ $2$
- $3$
- $1$
- $0$
- $5$
= La terza riga è la somma delle prime due: $(2 + 1, 1 + 1, 3 + 2) = (3, 2, 5)$. Le prime due non sono multiple (servirebbe $2 = c \cdot 1$ e $1 = c \cdot 1$ insieme). Quindi le righe indipendenti sono al massimo 2, e 2 ci sono: rango 2. Simile agli appelli del 07/09/2026 (domanda 9) e del 16/01/2025 (domanda 6).

D: $A$ è una matrice $2 \times 3$ e $B$ è una matrice $3 \times 4$. Quale affermazione è vera?
+ $AB$ è una matrice $2 \times 4$ e $BA$ non è definito.
- $AB$ e $BA$ sono entrambi definiti.
- $AB$ è una matrice $3 \times 3$.
- $AB$ non è definito, $BA$ è una matrice $4 \times 3$.
- $AB$ è $2 \times 4$ e $BA$ è $4 \times 2$.
= $(2 \times 3)(3 \times 4)$: i numeri interni coincidono, il risultato è $2 \times 4$. Per $BA$ servirebbe che le 4 colonne di $B$ fossero tante quante le 2 righe di $A$: non lo sono, quindi $BA$ non esiste.

D: Per matrici $A$ e $B$ per cui il prodotto $AB$ è definito, ${}^t(AB)$ è uguale a:
+ ${}^tB\,{}^tA$
- ${}^tA\,{}^tB$
- $AB$
- $BA$
- ${}^tA\,B$
= È l'Esercizio 8.14 delle dispense: la trasposta di un prodotto è il prodotto delle trasposte in ordine rovesciato. ${}^tA\,{}^tB$ in generale non è nemmeno definito: con $A$ $3 \times 2$ e $B$ $2 \times 4$ sarebbe $(2 \times 3)(4 \times 2)$.

D: Per quali $k \in \R$ la matrice $A = \begin{pmatrix} 1 & k^2 & 2 \\ k & 0 & 1 \\ 2 & 1 & 3 \end{pmatrix}$ è simmetrica?
+ Per $k = 0$ oppure $k = 1$.
- Solo per $k = 1$.
- Solo per $k = 0$.
- Per $k = \pm 1$.
- Per nessun valore di $k$.
= ${}^tA = A$ vuol dire $a_{ij} = a_{ji}$: $a_{13} = a_{31} = 2$ e $a_{23} = a_{32} = 1$ vanno già bene, resta $a_{12} = a_{21}$, cioè $k^2 = k$, che dà $k(k - 1) = 0$. Con $k = -1$ si avrebbe $a_{12} = 1 \neq -1 = a_{21}$. Simile all'appello del 15/01/2026, problema 11.

D: Siano $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Quanto vale $\tr(ABA)$?
N: 4
= $AB = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 0 \\ 0 + 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}$, poi $(ABA)_{11} = 2 \cdot 1 + 1 \cdot 0 = 2$ e $(ABA)_{22} = 1 \cdot 2 + 0 \cdot 1 = 2$: traccia $4$. Attenzione: $\tr A \cdot \tr B \cdot \tr A = 2 \cdot 0 \cdot 2 = 0$ è sbagliato. Simile all'appello del 05/02/2026, domanda 3.

D: Sia $A$ una matrice $3 \times 5$ a coefficienti reali. Quale affermazione è sempre vera?
+ $\rk(A) \le 3$.
- $\rk(A)$ può essere uguale a $5$.
- $\rk({}^tA)$ può essere diverso da $\rk(A)$.
- $\rk(A) = 3$.
- Le 5 colonne di $A$ sono linearmente indipendenti.
= Le colonne stanno in $\R^3$, quindi lo spazio che generano ha dimensione al più 3: $\rk(A) \le \min(3, 5) = 3$. Cinque vettori di $\R^3$ sono sempre dipendenti. Il rango può essere minore di 3 (per esempio la matrice nulla ha rango 0), e $\rk({}^tA) = \rk(A)$ sempre (Proposizione 8.6).
```

## Esercizi

::: esercizio base Esercizio 8.15 delle dispense: $AB$, $BA$ e le loro tracce
Siano $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$. Calcolare $AB$ e $BA$. Calcolare la traccia di $AB$ e di $BA$.
::: soluzione
**Taglie.** $A$ è $3 \times 2$, $B$ è $2 \times 3$: $AB$ è $(3 \times 2)(2 \times 3) = 3 \times 3$, $BA$ è $(2 \times 3)(3 \times 2) = 2 \times 2$. Esistono entrambi, ma hanno taglie diverse.

**$AB$.** Le righe di $A$ sono $(1, 2)$, $(3, 4)$, $(5, 6)$; le colonne di $B$ sono ${}^t(1, 4)$, ${}^t(2, 5)$, ${}^t(3, 6)$.
- riga 1: $1 + 8 = 9$, $\ 2 + 10 = 12$, $\ 3 + 12 = 15$;
- riga 2: $3 + 16 = 19$, $\ 6 + 20 = 26$, $\ 9 + 24 = 33$;
- riga 3: $5 + 24 = 29$, $\ 10 + 30 = 40$, $\ 15 + 36 = 51$.

$$AB = \begin{pmatrix} 9 & 12 & 15 \\ 19 & 26 & 33 \\ 29 & 40 & 51 \end{pmatrix}, \qquad \tr(AB) = 9 + 26 + 51 = 86.$$

**$BA$.** Le righe di $B$ sono $(1, 2, 3)$ e $(4, 5, 6)$; le colonne di $A$ sono ${}^t(1, 3, 5)$ e ${}^t(2, 4, 6)$.
- riga 1: $1 + 6 + 15 = 22$, $\ 2 + 8 + 18 = 28$;
- riga 2: $4 + 15 + 30 = 49$, $\ 8 + 20 + 36 = 64$.

$$BA = \begin{pmatrix} 22 & 28 \\ 49 & 64 \end{pmatrix}, \qquad \tr(BA) = 22 + 64 = 86.$$

Le due tracce coincidono anche se le matrici hanno taglie diverse: la dimostrazione della Proposizione 8.13 funziona anche per $A$ di taglia $m \times n$ e $B$ di taglia $n \times m$.
:::

::: esercizio medio Esercizio 8.16 delle dispense: associatività sì, commutatività no
Siano $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$, $C = \begin{pmatrix} -1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & -1 & 0 \end{pmatrix}$. Calcolare $(AB)C$, $A(BC)$, $(BA)C$ e $C(BA)$.
::: soluzione
Conviene prima capire che cosa fanno $B$ e $C$, usando l'osservazione «$Ax$ è una combinazione delle colonne di $A$» (e l'analoga per le righe).

**$AB$.** Le colonne di $B$ sono ${}^t(1, 0, 1)$, ${}^t(0, 1, 0)$, ${}^t(1, 0, 1)$, quindi le colonne di $AB$ sono $A^1 + A^3$, $A^2$, $A^1 + A^3$. Con $A^1 = {}^t(1, 4, 7)$, $A^2 = {}^t(2, 5, 8)$, $A^3 = {}^t(3, 6, 9)$:
$$AB = \begin{pmatrix} 4 & 2 & 4 \\ 10 & 5 & 10 \\ 16 & 8 & 16 \end{pmatrix}.$$
Controllo di una casella con la definizione: $(AB)_{21} = 4 \cdot 1 + 5 \cdot 0 + 6 \cdot 1 = 10$ ✓.

**Moltiplicare a destra per $C$.** Le colonne di $C$ sono $-e_1$, $-e_3$, $-e_2$: le colonne di $XC$ sono $-X^1$, $-X^3$, $-X^2$ (cambio di segno e scambio della seconda con la terza). Quindi
$$(AB)C = \begin{pmatrix} -4 & -4 & -2 \\ -10 & -10 & -5 \\ -16 & -16 & -8 \end{pmatrix}.$$

**$A(BC)$.** $BC$ ha colonne $-B^1$, $-B^3$, $-B^2$: $BC = \begin{pmatrix} -1 & -1 & 0 \\ 0 & 0 & -1 \\ -1 & -1 & 0 \end{pmatrix}$. Riga per colonna, per esempio $(A(BC))_{11} = 1 \cdot (-1) + 2 \cdot 0 + 3 \cdot (-1) = -4$ e $(A(BC))_{23} = 4 \cdot 0 + 5 \cdot (-1) + 6 \cdot 0 = -5$. Completando:
$$A(BC) = \begin{pmatrix} -4 & -4 & -2 \\ -10 & -10 & -5 \\ -16 & -16 & -8 \end{pmatrix} = (AB)C,$$
come garantisce l'associatività (Proposizione 8.11).

**$BA$.** Moltiplicare **a sinistra** per $B$ agisce sulle righe: le righe di $BA$ sono $A_1 + A_3$, $A_2$, $A_1 + A_3$:
$$BA = \begin{pmatrix} 8 & 10 & 12 \\ 4 & 5 & 6 \\ 8 & 10 & 12 \end{pmatrix}.$$

**$(BA)C$**: colonne $-X^1, -X^3, -X^2$ con $X = BA$:
$$(BA)C = \begin{pmatrix} -8 & -12 & -10 \\ -4 & -6 & -5 \\ -8 & -12 & -10 \end{pmatrix}.$$

**$C(BA)$**: a sinistra $C$ agisce sulle righe, che diventano $-X_1$, $-X_3$, $-X_2$:
$$C(BA) = \begin{pmatrix} -8 & -10 & -12 \\ -8 & -10 & -12 \\ -4 & -5 & -6 \end{pmatrix}.$$

Morale: $(AB)C = A(BC)$, ma $(BA)C \neq C(BA)$, perché $C$ e $BA$ non commutano.
:::

::: esercizio medio Esercizio 8.14 delle dispense: la trasposta di un prodotto
Dimostrare che vale la relazione ${}^t(AB) = {}^tB\,{}^tA$.
::: soluzione
Sia $A$ di taglia $m \times n$ e $B$ di taglia $n \times p$, così che $AB$ esiste ed è $m \times p$.

1. **Le taglie tornano.** ${}^t(AB)$ è $p \times m$. ${}^tB$ è $p \times n$ e ${}^tA$ è $n \times m$, quindi ${}^tB\,{}^tA$ esiste ed è $p \times m$. (Invece ${}^tA\,{}^tB$ sarebbe $(n \times m)(p \times n)$, che in generale non esiste.)
2. **Casella $(i, j)$ del primo membro.** Per la definizione di trasposta e poi di prodotto:
   $$({}^t(AB))_{ij} = (AB)_{ji} = \sum_{k=1}^n A_{jk}B_{ki}.$$
3. **Casella $(i, j)$ del secondo membro.** Per la definizione di prodotto e poi di trasposta:
   $$({}^tB\,{}^tA)_{ij} = \sum_{k=1}^n ({}^tB)_{ik}({}^tA)_{kj} = \sum_{k=1}^n B_{ki}A_{jk}.$$
4. Le due somme hanno gli stessi addendi, perché $A_{jk}B_{ki} = B_{ki}A_{jk}$ (sono numeri). Le matrici hanno la stessa taglia e le stesse caselle: sono uguali. $\square$

**Controllo con i numeri** (Esempio 8.8): ${}^t(AB) = {}^t\begin{pmatrix} 5 & 2 & 6 & 1 \\ 4 & -2 & 3 & -1 \\ 9 & 0 & 9 & 0 \end{pmatrix}$ ha prima riga $(5, 4, 9)$. E la prima riga di ${}^tB\,{}^tA$ è la riga $(-1, 3)$ di ${}^tB$ per le colonne ${}^t(1, 2)$, ${}^t(-1, 1)$, ${}^t(0, 3)$ di ${}^tA$: $-1 + 6 = 5$, $1 + 3 = 4$, $0 + 9 = 9$ ✓.
:::

::: esercizio base Trasposta, parte simmetrica e parte antisimmetrica
Sia $A = \begin{pmatrix} 1 & 4 & 2 \\ 0 & 3 & 5 \\ -2 & 1 & 6 \end{pmatrix}$. (a) Calcola ${}^tA$. (b) Calcola $S = \frac{A + {}^tA}2$ e $N = \frac{A - {}^tA}2$ e verifica che $S$ è simmetrica, $N$ è antisimmetrica e $S + N = A$. (c) Calcola $\tr A$ e $\tr({}^tA)$.
::: soluzione
(a) Le righe di ${}^tA$ sono le colonne di $A$:
$${}^tA = \begin{pmatrix} 1 & 0 & -2 \\ 4 & 3 & 1 \\ 2 & 5 & 6 \end{pmatrix}.$$

(b) Somma e differenza casella per casella:
$$A + {}^tA = \begin{pmatrix} 2 & 4 & 0 \\ 4 & 6 & 6 \\ 0 & 6 & 12 \end{pmatrix}, \qquad A - {}^tA = \begin{pmatrix} 0 & 4 & 4 \\ -4 & 0 & 4 \\ -4 & -4 & 0 \end{pmatrix},$$
quindi
$$S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 3 & 3 \\ 0 & 3 & 6 \end{pmatrix}, \qquad N = \begin{pmatrix} 0 & 2 & 2 \\ -2 & 0 & 2 \\ -2 & -2 & 0 \end{pmatrix}.$$
$S$ è simmetrica: i numeri fuori diagonale si specchiano ($2$ e $2$, $0$ e $0$, $3$ e $3$). $N$ è antisimmetrica: diagonale nulla e numeri specchiati col segno cambiato. Infine $S + N = \begin{pmatrix} 1 & 4 & 2 \\ 0 & 3 & 5 \\ -2 & 1 & 6 \end{pmatrix} = A$ ✓.

(c) $\tr A = 1 + 3 + 6 = 10$ e $\tr({}^tA) = 1 + 3 + 6 = 10$: la diagonale non cambia trasponendo.
:::

::: esercizio medio Quattro ranghi
Determina il rango delle matrici
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 0 \\ 0 & 3 & 6 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & -1 & 2 \\ -2 & 2 & -4 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 1 & 3 & 2 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}.$$
::: soluzione
**$A$** (dal Foglio di esercizi 2 del tutorato 2025). Cerco una relazione tra le righe: $2A_1 - A_2 = (2 - 2, 4 - 1, 6 - 0) = (0, 3, 6) = A_3$. Quindi la terza riga è combinazione delle prime due, che non sono multiple ($(1, 2, 3)$ e $(2, 1, 0)$: la terza coordinata darebbe $3c = 0$, cioè $c = 0$, impossibile). $\rk(A) = 2$.

**$B$.** La seconda riga è $-2$ volte la prima: $(-2, 2, -4) = -2(1, -1, 2)$. La matrice non è nulla, quindi $\rk(B) = 1$.

**$C$.** $C_3 = C_1 + C_2 = (1, 1, 3, 2)$ ✓, e $C_1$, $C_2$ non sono multiple (nella prima posizione $1$ e $0$, nella seconda $0$ e $1$). $\rk(C) = 2$, anche se $C$ ha quattro colonne.

**$D$.** $\rk(D) \le \min(3, 2) = 2$. Le due colonne ${}^t(1, 3, 5)$ e ${}^t(2, 4, 6)$ non sono multiple ($2 = c \cdot 1$ dà $c = 2$, ma $4 \neq 2 \cdot 3$). $\rk(D) = 2$: rango massimo.
:::

::: esercizio medio Potenze e il quadrato di una somma
Siano $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$. (a) Calcola $A^2$ e $A^3$ e indovina $A^n$. (b) Calcola $(A + B)^2$ e $A^2 + 2AB + B^2$: sono uguali?
::: soluzione
(a) $A^2 = AA = \begin{pmatrix} 1 \cdot 1 + 1 \cdot 0 & 1 \cdot 1 + 1 \cdot 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, e $A^3 = A^2 A = \begin{pmatrix} 1 & 1 + 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$. Ogni volta il numero in alto a destra aumenta di 1: $A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}$ (si dimostra per induzione: $A^{n+1} = A^n A = \begin{pmatrix} 1 & n + 1 \\ 0 & 1 \end{pmatrix}$).

(b) $A + B = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, quindi $(A + B)^2 = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$ (ogni casella è $1 \cdot 1 + 1 \cdot 1$).

Poi $AB = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$, $BA = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$ e $B^2 = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ (anche qui un prodotto nullo con $B \neq 0$). Quindi
$$A^2 + 2AB + B^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 2 & 0 \end{pmatrix} = \begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix} \neq (A + B)^2.$$
La formula giusta è $(A + B)^2 = A^2 + AB + BA + B^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$ ✓. Il «$2AB$» della scuola funziona solo se $AB = BA$.
:::

::: esercizio difficile Le matrici che commutano con una matrice data
Trova tutte le matrici $X = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in M(2, \R)$ tali che $AX = XA$, dove $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.
::: soluzione
Calcolo i due prodotti:
$$AX = \begin{pmatrix} a + c & b + d \\ c & d \end{pmatrix}, \qquad XA = \begin{pmatrix} a & a + b \\ c & c + d \end{pmatrix}.$$
Uguaglio casella per casella:
- $(1, 1)$: $a + c = a$, quindi $c = 0$;
- $(1, 2)$: $b + d = a + b$, quindi $d = a$;
- $(2, 1)$: $c = c$, sempre vera;
- $(2, 2)$: $d = c + d$, quindi di nuovo $c = 0$.

Le matrici cercate sono
$$X = \begin{pmatrix} a & b \\ 0 & a \end{pmatrix} = a \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + b \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad a, b \in \R.$$
Formano un sottospazio di $M(2, \R)$ di dimensione 2. Per esempio $X = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$ ($c = 1$) **non** commuta con $A$: commutare è un'eccezione, non la regola.
:::

::: esercizio medio Un prodotto nullo con fattori non nulli
Siano $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 2 & -4 \\ -1 & 2 \end{pmatrix}$. Calcola $AB$ e $BA$. Che cosa impari?
::: soluzione
$$AB = \begin{pmatrix} 1 \cdot 2 + 2 \cdot (-1) & 1 \cdot (-4) + 2 \cdot 2 \\ 2 \cdot 2 + 4 \cdot (-1) & 2 \cdot (-4) + 4 \cdot 2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix},$$
$$BA = \begin{pmatrix} 2 \cdot 1 + (-4) \cdot 2 & 2 \cdot 2 + (-4) \cdot 4 \\ (-1) \cdot 1 + 2 \cdot 2 & (-1) \cdot 2 + 2 \cdot 4 \end{pmatrix} = \begin{pmatrix} -6 & -12 \\ 3 & 6 \end{pmatrix}.$$
Tre lezioni in un esercizio: (1) $AB = 0$ anche se $A \neq 0$ e $B \neq 0$; (2) $AB = 0$ ma $BA \neq 0$, quindi $AB \neq BA$; (3) non si può «semplificare»: per esempio $AB = A \cdot 0$ ma $B \neq 0$. Il motivo: le colonne di $B$, ${}^t(2, -1)$ e ${}^t(-4, 2)$, sono combinazioni delle colonne di $A$ che danno zero ($2A^1 - A^2 = 0$), e $A$ ha rango 1.
:::

::: esercizio difficile La traccia di $A\,{}^tA$
(a) Dimostra che per ogni matrice reale $A$ di taglia $m \times n$ vale $\tr(A\,{}^tA) = \sum_{i, j} a_{ij}^2$. (b) Deduci che se $\tr(A\,{}^tA) = 0$ allora $A = 0$. (c) Mostra con $A = \begin{pmatrix} 1 & i \\ 0 & 0 \end{pmatrix} \in M(2, \C)$ che (b) è falso sui numeri complessi.
::: soluzione
(a) $A\,{}^tA$ è $m \times m$. Il suo elemento diagonale $(i, i)$ è la riga $i$ di $A$ per la colonna $i$ di ${}^tA$, che è di nuovo la riga $i$ di $A$:
$$(A\,{}^tA)_{ii} = \sum_{j=1}^n A_{ij}({}^tA)_{ji} = \sum_{j=1}^n A_{ij}A_{ij} = \sum_{j=1}^n a_{ij}^2.$$
Sommando su $i$ si ottiene la somma dei quadrati di tutti i numeri di $A$.

(b) Una somma di quadrati di numeri **reali** è zero solo se ogni quadrato è zero, perché nessun addendo è negativo. Quindi ogni $a_{ij} = 0$ e $A = 0$.

(c) $A\,{}^tA = \begin{pmatrix} 1 & i \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ i & 0 \end{pmatrix} = \begin{pmatrix} 1 + i^2 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$, quindi la traccia è $0$ ma $A \neq 0$. Con i complessi $1^2 + i^2 = 0$: i quadrati possono cancellarsi. È uno dei motivi per cui, per i vettori complessi, nella lezione L25 arriverà il prodotto hermitiano.
:::

::: esercizio esame Quale identità vale?
Siano $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 2 & -1 & 3 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 3 & -1 & 0 \end{pmatrix}$. Quale identità vale? (a) $AB = BA$; (b) $AB = A$; (c) $AB = B$; (d) $BA = A$; (e) $BA = B$.
::: soluzione
**$AB$.** Moltiplicare a sinistra per $A$ agisce sulle righe di $B$: le righe di $AB$ sono $1 \cdot B_1$, $1 \cdot B_2$ e $2B_1 - B_2 + 3B_3$.
- riga 1: $(1, 2, 0)$; riga 2: $(0, 1, 0)$;
- riga 3: $2(1, 2, 0) - (0, 1, 0) + 3(3, -1, 0) = (2 + 9, 4 - 1 - 3, 0) = (11, 0, 0)$.

$AB = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 11 & 0 & 0 \end{pmatrix}$: basta la casella $(3, 1)$ (11 contro 2 in $A$ e 3 in $B$) per escludere (b) e (c).

**$BA$.** Le righe di $BA$ sono combinazioni delle righe di $A$ con i coefficienti delle righe di $B$. La terza colonna di $B$ è nulla, quindi la terza riga di $A$ non entra mai; le prime due righe di $A$ sono $(1, 0, 0)$ e $(0, 1, 0)$ e ricopiano i coefficienti:
- riga 1: $1 \cdot (1, 0, 0) + 2 \cdot (0, 1, 0) = (1, 2, 0)$;
- riga 2: $(0, 1, 0)$;
- riga 3: $3 \cdot (1, 0, 0) - 1 \cdot (0, 1, 0) = (3, -1, 0)$.

Quindi $BA = B$: risposta **(e)**. Le altre sono false: $BA = B \neq A$ esclude la (d), e $AB \neq BA$ (casella $(3, 1)$: 11 contro 3) esclude la (a).
:::

::: esercizio esame Una traccia di tre fattori e un rango $4 \times 4$
(a) Siano $A = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}$. Calcola $\tr(ABC)$ e confrontala con $\tr(ACB)$. (b) Determina il rango di $M = \begin{pmatrix} 1 & 0 & 1 & 2 \\ 0 & 3 & 0 & 1 \\ 1 & 6 & 1 & 4 \\ 2 & 3 & 2 & 5 \end{pmatrix}$.
::: soluzione
(a) Prima $AB = \begin{pmatrix} 1 \cdot 2 + (-1) \cdot 1 & 1 \cdot 0 + (-1) \cdot 1 \\ 0 \cdot 2 + 2 \cdot 1 & 0 \cdot 0 + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 2 & 2 \end{pmatrix}$. Di $(AB)C$ servono solo le caselle diagonali:
- $((AB)C)_{11} = 1 \cdot 0 + (-1) \cdot 1 = -1$;
- $((AB)C)_{22} = 2 \cdot 1 + 2 \cdot (-1) = 0$.

$\tr(ABC) = -1$. Per confronto, $AC = \begin{pmatrix} -1 & 2 \\ 2 & -2 \end{pmatrix}$ e $(ACB)_{11} = -2 + 2 = 0$, $(ACB)_{22} = 0 - 2 = -2$: $\tr(ACB) = -2 \neq \tr(ABC)$. Le rotazioni ($BCA$, $CAB$) conservano la traccia, gli scambi no.

(b) Cerco relazioni tra le righe. $M_1 + 2M_2 = (1, 6, 1, 2 + 2) = (1, 6, 1, 4) = M_3$ e $2M_1 + M_2 = (2, 3, 2, 4 + 1) = (2, 3, 2, 5) = M_4$. Le righe 3 e 4 sono combinazioni delle prime due, che non sono multiple ($M_1$ ha $0$ al secondo posto, $M_2$ ha $0$ al primo). Quindi $\rk(M) = 2$. Si poteva notare anche che la terza colonna è uguale alla prima: il rango è al massimo 3, ma serve comunque trovare le relazioni tra le righe.
:::

::: esercizio esame Quando $A$ è simmetrica?
Sia $A = \begin{pmatrix} 2 & k & 1 \\ k^2 & 1 & k \\ 1 & 1 & 0 \end{pmatrix}$, con $k \in \R$. (a) Calcola ${}^tA - A$. (b) Per quali $k$ la matrice $A$ è simmetrica? (c) Verifica che ${}^tA - A$ è antisimmetrica per ogni $k$.
::: soluzione
(a) ${}^tA = \begin{pmatrix} 2 & k^2 & 1 \\ k & 1 & 1 \\ 1 & k & 0 \end{pmatrix}$, quindi
$${}^tA - A = \begin{pmatrix} 0 & k^2 - k & 0 \\ k - k^2 & 0 & 1 - k \\ 0 & k - 1 & 0 \end{pmatrix}.$$

(b) $A$ è simmetrica se e solo se ${}^tA - A = 0$, cioè se valgono insieme $k^2 - k = 0$ (quindi $k = 0$ oppure $k = 1$) e $1 - k = 0$ (quindi $k = 1$). Entrambe: **solo $k = 1$**. Controllo: con $k = 1$, $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ è simmetrica. Con $k = 0$ invece $a_{23} = 0 \neq 1 = a_{32}$.

(c) La diagonale è nulla, e le caselle simmetriche hanno segni opposti: $k^2 - k$ e $k - k^2$, $1 - k$ e $k - 1$. In generale ${}^t({}^tA - A) = A - {}^tA = -({}^tA - A)$.
:::

## Domande di ripasso

::: domanda Che cos'è la trasposta di una matrice e che taglia ha?
È la matrice ${}^tA$ ottenuta scambiando righe e colonne: $({}^tA)_{ij} = A_{ji}$. Se $A$ è $m \times n$, ${}^tA$ è $n \times m$: la riga $i$ di ${}^tA$ è la colonna $i$ di $A$.
:::

::: domanda Come si riconoscono con la trasposta le matrici simmetriche e antisimmetriche? Perché un'antisimmetrica ha la diagonale nulla?
$A$ quadrata è simmetrica se ${}^tA = A$ e antisimmetrica se ${}^tA = -A$. Sulla diagonale la trasposta non cambia niente, quindi in un'antisimmetrica $a_{ii} = -a_{ii}$, cioè $a_{ii} = 0$.
:::

::: domanda Che cosa vuol dire la scrittura ${}^t(1, 0, -1)$?
È il vettore colonna con coordinate $1, 0, -1$, scritto come trasposto di una riga per risparmiare spazio.
:::

::: domanda Come si definisce il rango di una matrice?
$\rk(A)$ è la dimensione del sottospazio di $\K^m$ generato dalle colonne: $\rk(A) = \dim \Span(A^1, \dots, A^n)$. Equivale al massimo numero di colonne linearmente indipendenti (Proposizione 8.4).
:::

::: domanda Perché il rango è il massimo numero di colonne indipendenti?
Perché dalle colonne, che generano lo Span, si possono togliere una alla volta quelle che sono combinazione delle altre senza cambiare lo Span, finché restano colonne indipendenti: sono una base, e il loro numero è la dimensione. Più colonne di così sarebbero dipendenti.
:::

::: domanda Che relazione c'è tra rango per righe e rango per colonne?
Sono uguali per ogni matrice (Proposizione 8.6): $\rk({}^tA) = \rk(A)$. Per calcolare il rango si possono quindi guardare le righe o le colonne, a scelta.
:::

::: domanda Perché $\rk(A) \le \min(m, n)$?
Lo Span delle colonne è un sottospazio di $\K^m$, quindi ha dimensione al più $m$, ed è generato da $n$ vettori, quindi ha dimensione al più $n$.
:::

::: domanda Quando si può fare il prodotto $AB$, e che taglia ha?
Quando il numero di colonne di $A$ è uguale al numero di righe di $B$: $(m \times n)(n \times p)$ dà una matrice $m \times p$.
:::

::: domanda Come si calcola l'elemento $(AB)_{ij}$?
Riga $i$ di $A$ per colonna $j$ di $B$: si moltiplicano i numeri corrispondenti e si sommano, $(AB)_{ij} = A_{i1}B_{1j} + \dots + A_{in}B_{nj}$.
:::

::: domanda Il prodotto di matrici è commutativo? Fai un esempio.
No. Con $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ si trova $AB = B$ e $BA = 0$ (Esempio 8.10).
:::

::: domanda Quali proprietà valgono per il prodotto di matrici?
L'associatività $A(BC) = (AB)C$, le due distributività $A(B + C) = AB + AC$ e $(A + B)C = AC + BC$, e $\lambda(AB) = (\lambda A)B = A(\lambda B)$ (Proposizione 8.11). Non vale la commutatività, e un prodotto può essere nullo con entrambi i fattori non nulli.
:::

::: domanda Che cos'è la traccia e che cosa dice la Proposizione 8.13?
La traccia di una matrice quadrata è la somma dei numeri sulla diagonale principale. La Proposizione 8.13 dice che $\tr(AB) = \tr(BA)$ per $A, B \in M(n)$, anche quando $AB \neq BA$.
:::

::: domanda Qual è la trasposta di un prodotto?
${}^t(AB) = {}^tB\,{}^tA$: il prodotto delle trasposte in ordine rovesciato (Esercizio 8.14).
:::

::: domanda Come si calcola in fretta $\tr(AB)$ in un quiz?
Si calcolano solo gli elementi diagonali di $AB$, cioè per ogni $i$ la riga $i$ di $A$ per la colonna $i$ di $B$, e si sommano. Per $\tr(A\,{}^tA)$ basta sommare i quadrati di tutti i numeri di $A$.
:::

## Glossario

```glossario
Matrice $m \times n$ | Tabella di numeri con $m$ righe e $n$ colonne; $a_{ij}$ (o $A_{ij}$) è il numero nella riga $i$ e colonna $j$.
$M(m, n, \K)$, $M(n)$ | L'insieme delle matrici $m \times n$ a coefficienti in $\K$, spazio vettoriale di dimensione $mn$; $M(n)$ sono le quadrate $n \times n$.
Riga $A_i$ e colonna $A^j$ | La riga $i$-esima (indice in basso, vettore di $\K^n$) e la colonna $j$-esima (indice in alto, vettore di $\K^m$).
Diagonale principale | Le caselle $a_{11}, a_{22}, \dots, a_{nn}$ di una matrice quadrata.
Trasposta ${}^tA$ | La matrice con righe e colonne scambiate: $({}^tA)_{ij} = A_{ji}$; da $m \times n$ diventa $n \times m$.
${}^t(x, y, z)$ | Il vettore colonna di coordinate $x, y, z$, scritto come trasposto di una riga.
Matrice simmetrica | Matrice quadrata con ${}^tA = A$, cioè $a_{ij} = a_{ji}$.
Matrice antisimmetrica | Matrice quadrata con ${}^tA = -A$; ha la diagonale nulla.
Rango $\rk(A)$ | Dimensione dello spazio generato dalle colonne; massimo numero di colonne linearmente indipendenti.
Rango per righe | Dimensione dello spazio generato dalle righe, cioè $\rk({}^tA)$; è sempre uguale al rango.
Prodotto riga per colonna | $(AB)_{ij} = \sum_k A_{ik}B_{kj}$; si fa se le colonne di $A$ sono tante quante le righe di $B$, e $(m \times n)(n \times p) = m \times p$.
Prodotto matrice per vettore | $Ax$, con $x \in \K^n$: un vettore di $\K^m$, uguale a $x_1A^1 + \dots + x_nA^n$.
Non commutatività | In generale $AB \neq BA$, anche per matrici quadrate.
Associatività e distributività | $A(BC) = (AB)C$; $A(B + C) = AB + AC$ e $(A + B)C = AC + BC$.
Potenza di una matrice | Per $A$ quadrata, $A^2 = AA$, $A^3 = AAA$, e così via.
Traccia $\tr A$ | Somma degli elementi della diagonale principale di una matrice quadrata; $\tr(AB) = \tr(BA)$.
Matrice identità $I_n$ | La matrice quadrata con 1 sulla diagonale e 0 altrove; $I_nA = AI_n = A$ (lezione L09).
```

## Checklist

```checklist
- So leggere una matrice: taglia $m \times n$, elemento $a_{ij}$, riga $A_i$, colonna $A^j$.
- So calcolare la trasposta e riconoscere con essa una matrice simmetrica o antisimmetrica.
- So leggere la notazione ${}^t(x, y, z)$ per i vettori colonna.
- So la definizione di rango e perché è il massimo numero di colonne indipendenti.
- So che rango per righe e per colonne coincidono e che $\rk(A) \le \min(m, n)$.
- So trovare il rango di una matrice piccola cercando relazioni tra righe o colonne.
- So dire se un prodotto $AB$ esiste, che taglia ha, e calcolarlo riga per colonna senza errori.
- So spiegare con un esempio che $AB \neq BA$ e che $AB = 0$ non implica $A = 0$ o $B = 0$.
- So enunciare associatività e distributività e usare ${}^t(AB) = {}^tB\,{}^tA$.
- So calcolare una traccia e usare $\tr(AB) = \tr(BA)$ per risparmiare conti nei quiz.
- So rispondere alla domanda d'esame «quale identità vale tra $AB$, $BA$, $A$ e $B$?».
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 8 «Matrici I», pp. 36–40: il richiamo iniziale e le sezioni 8.A (trasposta), 8.B (rango), 8.C (prodotto fra matrici), 8.D (traccia) ed 8.E (esercizi) sono seguiti in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni, esempi ed esercizi mantengono la loro numerazione (Definizioni 8.1, 8.3, 8.5, 8.7, 8.12; Proposizioni 8.4, 8.6, 8.11, 8.13; Esempi 8.2, 8.8, 8.9, 8.10; Esercizi 8.14, 8.15, 8.16). Per i richiami: lezioni 6 e 7 (Definizioni 6.1, 6.3, 6.6, 7.11, Proposizione 7.2, Esercizio 7.13).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §2.3.10–2.3.11 (trasposta, simmetriche e antisimmetriche, Esempio 2.3.33), §3.2.3 e §3.2.6 (rango, Proposizioni 3.2.8 e 3.2.20, Corollario 3.2.11), §3.4.1–3.4.5 (prodotto, Proposizioni 3.4.2 e 3.4.4, sistemi scritti come $Ax = b$), §4.4.5 (traccia).
- **Esame**: testi degli appelli di Algebra lineare dal 24/01/2024 al 07/09/2026 (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); riportate con soluzione propria le domande 1 del 15/01/2026 e 9 del 10/07/2025 e il problema 11 (punto 2) del 15/01/2026; le altre sono citate per numero. Foglio di esercizi 2 del tutorato (11/11/2025), esercizio 8.
- Le parti **«Oltre le dispense»** (proprietà in più della trasposta e della traccia, prodotto come combinazione di colonne, identità e potenze, metodi per il quiz, esercizi senza numero) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
