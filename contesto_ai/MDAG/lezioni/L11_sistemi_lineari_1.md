---
corso: MDAG
modulo: AG
lezione: L11
titolo: Sistemi lineari I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L11
descrizione: >-
  Appunti della lezione L11 di Algebra lineare e Geometria (MDAG, parte 2): sistemi lineari e matrice completa,
  mosse di Gauss, pivot e matrici a scalini, algoritmi di Gauss e di Gauss–Jordan, come si scrivono tutte le
  soluzioni di un sistema, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Come si risolve qualsiasi sistema lineare, con qualsiasi numero di equazioni e di incognite: si scrive la
  matrice completa $(A \mid b)$, la si porta a scalini con tre mosse che non cambiano le soluzioni e poi le
  soluzioni si leggono, una sola, nessuna o infinite con i loro parametri liberi. È il conto che torna in quasi
  ogni prova d'esame.
materiale: dispense
scheda:
  Dispense: lezione 11 · pp. 50–55
  Libro: Martelli, §3.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 11 «Sistemi lineari I»; B. Martelli, Geometria e algebra lineare, §3.1
file_en: L11_linear_systems_1.html
appunti_html: appunti/MDAG/L11_sistemi_lineari_1.html
genera_html: true
---

## In breve

- Un **sistema lineare** è un elenco di equazioni di primo grado nelle stesse incognite $x_1, \dots, x_n$. Si scrive in modo compatto con la **matrice completa** $C = (A \mid b)$: i coefficienti a sinistra della barra, i termini noti a destra.
- Risolvere il sistema vuol dire trovare l'insieme $S \subset \K^n$ di **tutti** i vettori che soddisfano **tutte** le equazioni insieme.
- Tre **mosse di Gauss** sulle righe non cambiano $S$: scambiare due righe, moltiplicare una riga per un numero $\lambda \neq 0$, sommare a una riga un multiplo di un'altra riga.
- Il **pivot** di una riga è il suo primo elemento diverso da zero. Una matrice è **a scalini** se le righe nulle stanno in fondo e ogni pivot sta strettamente più a destra del pivot della riga sopra.
- L'**algoritmo di Gauss** porta qualsiasi matrice a scalini, colonna dopo colonna. L'**algoritmo di Gauss–Jordan** prosegue finché i pivot valgono 1 e sopra i pivot ci sono solo zeri.
- Dalla forma ridotta le soluzioni si leggono subito. Un pivot nella colonna dei termini noti è l'equazione $0 = 1$: **nessuna soluzione**.
- Altrimenti ogni incognita la cui colonna non ha pivot diventa un **parametro libero** $t_1, t_2, \dots$ e le altre si ricavano da quelle: i parametri sono tanti quante le incognite meno i pivot.
- All'esame il quiz «il sistema lineare con matrice completa … ha un numero di soluzioni pari a» è uscito in 9 appelli su 15, e quasi ogni problema aperto finisce con una riduzione di Gauss.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Che cos'è un sistema lineare (p. 50)

Parti da un indovinello di scuola: *due numeri hanno somma 5 e differenza 1; quali sono?* Chiami $x$ e $y$ i due numeri e traduci le due frasi in due equazioni:

$$\begin{cases} x + y = 5 \\ x - y = 1 \end{cases}$$

Sommando le due equazioni membro a membro ottieni $2x = 6$, quindi $x = 3$; dalla prima, $y = 5 - 3 = 2$. Controllo: $3 + 2 = 5$ e $3 - 2 = 1$. La coppia $(3, 2)$ risolve **tutte e due** le equazioni nello stesso momento: è una **soluzione del sistema**.

Questo è un sistema **lineare** perché le incognite compaiono solo **al primo grado**, moltiplicate per numeri e sommate tra loro. Niente quadrati, niente prodotti tra incognite, niente radici o seni.

| Equazione | Lineare? | Perché |
|---|---|---|
| $2x - 3y + z = 7$ | sì | ogni incognita al primo grado, per un numero |
| $x_1 + x_4 = 0$ | sì | le incognite che mancano hanno coefficiente $0$ |
| $\sqrt 2\, x - \pi y = \frac 13$ | sì | i coefficienti possono essere numeri qualsiasi |
| $x^2 + y = 1$ | no | $x$ compare al quadrato |
| $xy = 4$ | no | c'è un prodotto tra due incognite |
| $x + \sin y = 0$ | no | l'incognita $y$ è dentro una funzione |

### La definizione

> [!DEF] 11.1 · Sistema lineare
> Un **sistema lineare** è un insieme di $k$ equazioni lineari in $n$ variabili
> $$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = b_1, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = b_k. \end{cases}$$
> I numeri $a_{ij}$ sono i **coefficienti** e i $b_i$ sono i **termini noti** del sistema. Sia i coefficienti sia i termini noti sia le variabili sono in un certo campo fissato $\K$. Possiamo raggruppare i coefficienti e i termini noti in una matrice $k \times n$ e in un vettore colonna:
> $$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{k1} & \cdots & a_{kn} \end{pmatrix}, \qquad b = \begin{pmatrix} b_1 \\ \vdots \\ b_k \end{pmatrix}.$$
> Parliamo della **matrice dei coefficienti** e del **vettore dei termini noti**. Possiamo poi unire tutto in un'unica matrice $k \times (n + 1)$
> $$C = (A \mid b),$$
> chiamata **matrice completa**.

Pezzo per pezzo:

- $k$ è il numero di **equazioni** (le righe), $n$ il numero di **incognite** (le variabili $x_1, \dots, x_n$). Possono essere diversi: 2 equazioni in 4 incognite, 3 equazioni in 2 incognite, e così via.
- $a_{ij}$ ha due indici: il primo, $i$, dice **in quale equazione** sei (la riga); il secondo, $j$, dice **quale incognita** moltiplica (la colonna). Per esempio $a_{23}$ è il coefficiente di $x_3$ nella seconda equazione.
- $b_i$ è il numero a destra dell'uguale nella $i$-esima equazione.
- $\K$ è il campo in cui lavori (lezioni L01 e L05): quasi sempre $\K = \R$, a volte $\K = \C$.
- La **matrice completa** $C = (A \mid b)$ è la matrice $A$ con in più, a destra, la colonna $b$. La barra verticale serve solo a ricordare dove finiscono i coefficienti: per i conti $C$ è una matrice $k \times (n + 1)$ come le altre.

> [!ESEMPIO] Dal sistema alla matrice completa
> Il sistema dell'indovinello ha $k = 2$ equazioni e $n = 2$ incognite:
> $$\begin{cases} x + y = 5 \\ x - y = 1 \end{cases} \qquad A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \quad b = \begin{pmatrix} 5 \\ 1 \end{pmatrix}, \quad C = \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right).$$
> Un sistema con 3 equazioni e 3 incognite:
> $$\begin{cases} x + y + 2z = 9 \\ 2x + 4y - 3z = 1 \\ 3x + 6y - 5z = 0 \end{cases} \qquad C = \left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 2 & 4 & -3 & 1 \\ 3 & 6 & -5 & 0 \end{array}\right).$$
> Ogni riga di $C$ è un'equazione; ogni colonna prima della barra è un'incognita ($x$, $y$, $z$ nell'ordine); l'ultima colonna contiene i termini noti.

> [!TRAPPOLA] Prima di scrivere la matrice, metti in ordine il sistema
> Tre errori frequenti quando si passa dal sistema alla matrice:
> 1. le incognite vanno scritte **nello stesso ordine** in ogni riga;
> 2. un'incognita che **manca** in un'equazione ha coefficiente $0$, e lo $0$ va scritto nella matrice;
> 3. i numeri senza incognita vanno portati **a destra** dell'uguale, cambiando segno.
>
> Per esempio $\begin{cases} 2x - y = 3 - z \\ x = 4y \\ 5 + z = 2 \end{cases}$ diventa prima $\begin{cases} 2x - y + z = 3 \\ x - 4y = 0 \\ z = -3 \end{cases}$ e poi $\left(\begin{array}{ccc|c} 2 & -1 & 1 & 3 \\ 1 & -4 & 0 & 0 \\ 0 & 0 & 1 & -3 \end{array}\right)$.

### L'insieme delle soluzioni

Una **soluzione** del sistema è un vettore $x = (x_1, \dots, x_n) \in \K^n$ che rende vere **tutte** le $k$ equazioni. Le dispense chiamano $S \subset \K^n$ l'insieme di **tutte** le soluzioni: lo scopo della lezione è descrivere $S$ esattamente.

Per il sistema dell'indovinello $S = \{(3, 2)\}$. Il vettore $(4, 1)$ invece **non** è una soluzione: soddisfa la prima equazione ($4 + 1 = 5$) ma non la seconda ($4 - 1 = 3 \neq 1$). Basta una sola equazione falsa per escludere un vettore.

> [!OLTRE] tre situazioni possibili, viste nel piano
> Con due incognite ogni equazione lineare è una **retta** del piano, e le soluzioni del sistema sono i punti comuni a tutte le rette. Con due equazioni succede sempre una di queste tre cose: le rette si incontrano in **un punto** (una soluzione), sono **parallele** e distinte (nessuna soluzione), oppure sono **la stessa retta** (infinite soluzioni). Nella lezione L12 il teorema di Rouché–Capelli dirà che anche con più incognite le possibilità sono sempre e solo queste tre: nessuna, una, infinite.

```grafico
titolo: $x + y = 5$ e $x - y = 1$ si incontrano in un punto: una sola soluzione, $(3, 2)$
x: -1 6
y: -2 5
retta: 0 5 4.5 0.5 | accento | $x + y = 5$ | ne
retta: 1 0 4 3 | blu | $x - y = 1$ | se
punto: 3 2 | ambra | $(3, 2)$ | e
```

```grafico
titolo: $x + y = 2$ e $x + y = 4$ sono parallele: nessun punto comune, nessuna soluzione
x: -1 5
y: -1 5
retta: 2 0 0 2 | accento | $x + y = 2$ | ne
retta: 4 0 0.5 3.5 | blu | $x + y = 4$ | ne
```

```grafico
titolo: $x + y = 2$ e $2x + 2y = 4$ sono la stessa retta: infinite soluzioni
x: -1 5
y: -1 5
retta: 2 0 0 2 | accento | spesso | $x + y = 2$ | ne
retta: 0 2 1.5 0.5 | blu | tratteggio | $2x + 2y = 4$ | ne
```

## Le mosse di Gauss (pp. 50–51)

Per risolvere l'indovinello hai sommato le due equazioni. È una mossa lecita: non aggiunge e non toglie soluzioni. Le dispense elencano esattamente **tre** mosse di questo tipo, e con queste tre si risolve **ogni** sistema lineare.

> [!DEF] 11.2 · Mosse di Gauss
> Le mosse che non cambiano l'insieme delle soluzioni sono le seguenti e sono note come **mosse di Gauss**:
> - (I) scambiare due righe;
> - (II) moltiplicare una riga per un numero $\lambda \neq 0$;
> - (III) aggiungere ad una riga un'altra riga moltiplicata per $\lambda$ qualsiasi.
>
> Indicando con $R_i$ la $i$-esima riga di $C$, possiamo scrivere le mosse così:
> $$\text{(I)}\ R_i \longleftrightarrow R_j, \qquad \text{(II)}\ R_i \longrightarrow \lambda R_i,\ \lambda \neq 0, \qquad \text{(III)}\ R_i \longrightarrow R_i + \lambda R_j.$$

Pezzo per pezzo:

- Le mosse agiscono sulle **righe intere** di $C$, **compresa l'ultima colonna** dei termini noti: ogni riga è un'equazione e si trasforma tutta.
- (I) **scambio**: $R_1 \leftrightarrow R_3$ vuol dire che la prima e la terza equazione si scambiano di posto.
- (II) **riscalamento**: $R_2 \to 3R_2$ moltiplica per 3 ogni numero della seconda riga. Il numero deve essere **diverso da zero**: moltiplicare per $0$ trasformerebbe l'equazione in $0 = 0$, e l'informazione che conteneva andrebbe persa.
- (III) **sostituzione**: $R_2 \to R_2 - 4R_1$ vuol dire «alla seconda riga togli 4 volte la prima». Qui $\lambda$ può essere qualsiasi numero (con $\lambda = 0$ la mossa non fa niente), ma le due righe devono essere **diverse**: $j \neq i$.

> [!ESEMPIO] 11.3 · Tre mosse in fila
> Una mossa di tipo (I), una di tipo (II) e una di tipo (III):
> $$\begin{pmatrix} 1 & 2 \\ 3 & 0 \\ 4 & -2 \end{pmatrix} \xrightarrow{R_1 \leftrightarrow R_3} \begin{pmatrix} 4 & -2 \\ 3 & 0 \\ 1 & 2 \end{pmatrix}$$
> $$\xrightarrow{R_1 \to \frac 12 R_1} \begin{pmatrix} 2 & -1 \\ 3 & 0 \\ 1 & 2 \end{pmatrix} \xrightarrow{R_2 \to R_2 + 2R_3} \begin{pmatrix} 2 & -1 \\ 5 & 4 \\ 1 & 2 \end{pmatrix}.$$
> I conti, uno per mossa:
> 1. $R_1 \leftrightarrow R_3$: la prima riga $(1, 2)$ e la terza $(4, -2)$ si scambiano di posto.
> 2. $R_1 \to \frac 12 R_1$: la nuova prima riga è $\frac 12 (4, -2) = (2, -1)$.
> 3. $R_2 \to R_2 + 2R_3$: la nuova seconda riga è $(3, 0) + 2 \cdot (1, 2) = (3 + 2,\ 0 + 4) = (5, 4)$. La terza riga, usata per il conto, resta com'era.

### Perché le mosse non cambiano le soluzioni

> [!PROP] 11.4
> Le mosse di Gauss su $C = (A \mid b)$ non cambiano l'insieme $S \subset \K^n$ delle soluzioni del sistema lineare.

La dimostrazione controlla le tre mosse una alla volta. In ogni caso bisogna far vedere due cose: chi risolveva il sistema vecchio risolve quello nuovo, e viceversa.

1. **Mossa (I).** Scambiare due righe vuol dire scrivere le stesse equazioni in un altro ordine. Un vettore rende vere tutte le equazioni prima dello scambio se e solo se le rende vere dopo: $S$ non cambia.
2. **Mossa (II).** La riga $i$, cioè l'equazione $a_{i1}x_1 + \cdots + a_{in}x_n = b_i$, diventa
   $$\lambda a_{i1}x_1 + \cdots + \lambda a_{in}x_n = \lambda b_i.$$
   Se $x$ risolve la vecchia equazione, moltiplicando i due membri per $\lambda$ risolve la nuova. Viceversa, se $x$ risolve la nuova, moltiplicando per $\frac 1\lambda$ torna la vecchia: qui serve $\lambda \neq 0$, perché $\frac 1\lambda$ deve esistere. Le altre equazioni non cambiano.
3. **Mossa (III).** Cambia solo la riga $i$. Le due equazioni $i$ e $j$
   $$a_{i1}x_1 + \cdots + a_{in}x_n = b_i, \qquad a_{j1}x_1 + \cdots + a_{jn}x_n = b_j$$
   diventano
   $$(a_{i1} + \lambda a_{j1})x_1 + \cdots + (a_{in} + \lambda a_{jn})x_n = b_i + \lambda b_j,$$
   $$a_{j1}x_1 + \cdots + a_{jn}x_n = b_j.$$
   - Se $x$ risolve le due vecchie, sommando all'equazione $i$ l'equazione $j$ moltiplicata per $\lambda$ ottieni proprio la nuova riga $i$.
   - Viceversa, se $x$ risolve le due nuove, togliendo dalla nuova riga $i$ la riga $j$ moltiplicata per $\lambda$ ritrovi la vecchia riga $i$. Questo funziona perché la riga $j$ è rimasta **intatta**: ecco perché serve $j \neq i$.
4. In tutti e tre i casi i vettori che risolvono il sistema sono gli stessi: $S$ non cambia. $\square$

> [!IDEA] ogni mossa si può annullare
> Il cuore della dimostrazione è che ogni mossa ha una **mossa inversa** dello stesso tipo, che rimette tutto com'era: (I) si annulla ripetendo lo stesso scambio; (II) con $\lambda$ si annulla con (II) con $\frac 1\lambda$; (III) $R_i \to R_i + \lambda R_j$ si annulla con $R_i \to R_i - \lambda R_j$. Una trasformazione che si può sempre disfare non può né perdere né creare soluzioni.

> [!ESEMPIO] L'indovinello risolto con le mosse
> $$\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right) \xrightarrow{R_2 \to R_2 - R_1} \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 0 & -2 & -4 \end{array}\right)$$
> $$\xrightarrow{R_2 \to -\frac 12 R_2} \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 0 & 1 & 2 \end{array}\right) \xrightarrow{R_1 \to R_1 - R_2} \left(\begin{array}{cc|c} 1 & 0 & 3 \\ 0 & 1 & 2 \end{array}\right)$$
> I conti: $(1, -1, 1) - (1, 1, 5) = (0, -2, -4)$; poi $-\frac 12 (0, -2, -4) = (0, 1, 2)$; poi $(1, 1, 5) - (0, 1, 2) = (1, 0, 3)$. L'ultima matrice dice $x = 3$ e $y = 2$: è lo stesso conto di prima, scritto con le mosse.

> [!TRAPPOLA] Una mossa alla volta
> Non fare due mosse **contemporaneamente** usando le righe vecchie. Parti da $\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right)$ e fai insieme $R_1 \to R_1 - R_2$ e $R_2 \to R_2 - R_1$, calcolate tutte e due con le righe di partenza:
> $$\left(\begin{array}{cc|c} 0 & 2 & 4 \\ 0 & -2 & -4 \end{array}\right).$$
> Ora il sistema dice solo $2y = 4$: $y = 2$ e $x$ qualsiasi, cioè infinite soluzioni. Ma il sistema di partenza ne aveva **una sola**, $(3, 2)$. Che cosa è successo? La seconda riga nuova è $-1$ volte la prima: un'equazione è andata persa. La regola: dopo ogni mossa, la mossa successiva usa le righe **nuove**. Si possono fare più mosse nello stesso passaggio solo se la riga che si usa per modificare le altre resta ferma, come nel passo (2) dell'algoritmo di Gauss.

> [!TRAPPOLA] Solo righe, mai colonne
> Per risolvere un sistema le mosse si fanno sulle **righe**. Una mossa sulle colonne mescola le incognite tra loro (la colonna 1 è $x$, la colonna 2 è $y$) oppure mescola un'incognita con i termini noti, e cambia le soluzioni. Per esempio, sommare la prima colonna alla colonna dei termini noti trasforma $x + y = 5$, $x - y = 1$ in $x + y = 6$, $x - y = 2$, che ha la soluzione $(4, 2)$ invece di $(3, 2)$.

## Matrici a scalini (pp. 51–52)

Perché trasformare la matrice? Perché alcuni sistemi si risolvono quasi da soli. Guarda questo:

$$\begin{cases} x + 2y - z = 2 \\ \phantom{x + {}} y + 3z = 5 \\ \phantom{x + y + {}} 2z = 4 \end{cases}$$

Si parte **dal basso**: l'ultima equazione dà $z = 2$. La seconda diventa $y + 6 = 5$, quindi $y = -1$. La prima diventa $x + 2 \cdot (-1) - 2 = 2$, quindi $x = 6$. Controllo: $6 - 2 - 2 = 2$, $-1 + 6 = 5$, $2 \cdot 2 = 4$. Questo modo di risolvere si chiama **sostituzione all'indietro**. Funziona perché ogni equazione ha **un'incognita in meno** di quella sopra: la matrice completa ha una forma a **scala**.

$$\left(\begin{array}{ccc|c} \boxed{1} & 2 & -1 & 2 \\ 0 & \boxed{1} & 3 & 5 \\ 0 & 0 & \boxed{2} & 4 \end{array}\right)$$

> [!DEF] 11.5 · Pivot e matrice a scalini
> Sia $C$ una matrice qualsiasi. Per ogni riga $R_i$ di $C$ chiamiamo **pivot** il primo elemento non nullo della riga. Una **matrice a scalini** è una matrice in cui tutte le righe nulle sono in fondo e il pivot di ogni riga non nulla è strettamente più a destra del pivot della riga non nulla precedente.

Pezzo per pezzo:

- Il **pivot** si trova leggendo la riga da sinistra: è il primo numero diverso da $0$. Nella riga $(0, 0, 3, 5)$ il pivot è il $3$, nella terza colonna. Una riga fatta **solo di zeri** non ha pivot.
- «Le righe nulle sono in fondo»: una riga di zeri non può stare sopra una riga che ha un pivot.
- «**Strettamente** più a destra»: scendendo di una riga, il pivot si sposta di **almeno** una colonna verso destra. Può anche saltare più colonne: gli scalini possono essere larghi.
- Di conseguenza, sotto ogni pivot ci sono solo zeri.

> [!ESEMPIO] 11.6 · Scalini sì, scalini no
> Sono matrici a scalini:
> $$\begin{pmatrix} 1 & 0 & 5 \\ 0 & -1 & -1 \end{pmatrix}, \qquad \begin{pmatrix} 7 & -2 & 9 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
> Nella prima i pivot sono $1$ (colonna 1) e $-1$ (colonna 2). Nella seconda i pivot sono $7$ (colonna 1) e $1$ (colonna 3): lo scalino salta la colonna 2, ed è permesso; la riga nulla è in fondo.
>
> Non sono matrici a scalini:
> $$\begin{pmatrix} 1 & 2 & -1 \\ 4 & 0 & 6 \\ 0 & 7 & 0 \end{pmatrix}, \qquad \begin{pmatrix} 0 & 8 \\ 0 & 1 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}.$$
> Nella prima il pivot della seconda riga è il $4$, in colonna 1: non è più a destra del pivot $1$ della prima riga, che sta anche lui in colonna 1. Nella seconda i pivot delle prime due righe, $8$ e $1$, sono tutti e due in colonna 2: il secondo non è **strettamente** più a destra.

| Matrice | A scalini? | Motivo |
|---|---|---|
| $\begin{pmatrix} 2 & 1 & 0 & 3 \\ 0 & 0 & 5 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$ | sì | pivot in colonna 1 e 3, riga nulla in fondo |
| $\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 4 & 5 \end{pmatrix}$ | no | la riga nulla non è in fondo |
| $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ | no | il pivot della riga 3 (colonna 2) è a sinistra di quello della riga 2 (colonna 3) |
| $\begin{pmatrix} 0 & 3 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ | sì | la prima colonna può essere tutta nulla: i pivot sono in colonna 2 e 3 |

> [!TRAPPOLA] Gli scalini non devono stare sulla diagonale
> In una matrice a scalini i pivot **non** devono per forza essere in posizione $(1,1), (2,2), (3,3), \dots$ Conta solo che scendendo si spostino verso destra. Viceversa, una matrice con i numeri giusti sulla diagonale può non essere a scalini, se sotto c'è qualcosa che non va (terza riga della tabella).

## L'algoritmo di Gauss (pp. 52–53)

L'algoritmo di Gauss trasforma **qualsiasi** matrice in una matrice a scalini usando solo le tre mosse. L'idea: si sistema la prima colonna (un pivot in alto e zeri sotto), poi si ignorano la prima riga e la prima colonna e si ripete sul resto.

> [!METODO] L'algoritmo di Gauss (p. 52)
> 1. Se $C_{11} = 0$ e $C_{i1} \neq 0$ per qualche $i$, scambiamo la prima riga con una riga in modo da ottenere $C_{11} \neq 0$. Se invece $C_{i1} = 0$ per ogni $i$, continuiamo dal punto (1) lavorando sulla sottomatrice ottenuta togliendo soltanto la prima colonna.
> 2. Per ogni riga $R_i$ con $i \ge 2$ e con $C_{i1} \neq 0$ sostituiamo $R_i$ con la riga
>    $$R_i - \frac{C_{i1}}{C_{11}} R_1.$$
>    In questo modo la nuova riga $R_i$ avrà $C_{i1} = 0$.
> 3. Abbiamo ottenuto $C_{i1} = 0$ per ogni $i \ge 2$. Continuiamo dal punto (1) lavorando sulla sottomatrice ottenuta togliendo la prima riga e la prima colonna.

Che cosa fa ogni passo:

- $C_{ij}$ indica il numero nella riga $i$ e nella colonna $j$ della matrice (quella del momento: dopo ogni mossa la matrice si chiama ancora $C$).
- **Passo (1)** cerca un pivot per la prima colonna. Se in alto c'è uno zero si scambia con una riga che sotto ha un numero diverso da zero (mossa I). Se la colonna è **tutta nulla** non c'è niente da fare: si passa alla colonna successiva, sempre partendo dalla stessa riga.
- **Passo (2)** mette zeri sotto il pivot con mosse di tipo (III). Il numero da togliere è scelto apposta: il nuovo elemento in colonna 1 è
  $$C_{i1} - \frac{C_{i1}}{C_{11}} \cdot C_{11} = C_{i1} - C_{i1} = 0.$$
  Qui la riga $R_1$ resta ferma e serve a modificare tutte le altre: per questo si possono fare tutte insieme.
- **Passo (3)** «dimentica» la prima riga e la prima colonna, ormai a posto, e ricomincia sul pezzo che resta. Quando non resta niente la matrice è a scalini.

> [!ESEMPIO] 11.7 · Gauss passo per passo
> Partiamo dalla matrice
> $$C = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 1 & 1 & 2 & -3 \\ -1 & 2 & 1 & 1 \end{pmatrix}.$$
> 1. $C_{11} = 0$, ma $C_{21} = 1 \neq 0$: scambiamo $R_1$ e $R_2$ (passo 1).
>    $$C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ -1 & 2 & 1 & 1 \end{pmatrix}.$$
> 2. Sotto il pivot $C_{11} = 1$: la riga 2 ha già $0$; la riga 3 ha $C_{31} = -1 \neq 0$. Il passo 2 dice $R_3 \to R_3 - \frac{-1}{1} R_1 = R_3 + R_1$:
>    $$(-1, 2, 1, 1) + (1, 1, 2, -3) = (0, 3, 3, -2), \qquad C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 3 & 3 & -2 \end{pmatrix}.$$
> 3. La prima riga e la prima colonna sono a posto: si lavora sul resto. Il nuovo «angolo» è $C_{22} = 1 \neq 0$; sotto c'è $C_{32} = 3$. Mossa $R_3 \to R_3 - 3R_2$:
>    $$(0, 3, 3, -2) - 3 \cdot (0, 1, 1, 0) = (0, 0, 0, -2), \qquad C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$
> 4. Resta la sottomatrice fatta della riga 3 senza le prime due colonne, cioè $(0, -2)$: la colonna 3 è nulla, si passa alla 4, dove c'è il pivot $-2$. Non ci sono righe sotto: la matrice è a scalini e l'algoritmo termina. I pivot sono $1$, $1$, $-2$, nelle colonne 1, 2 e 4.

```widget gauss
titolo: Prova l'algoritmo sulla matrice dell'Esempio 11.7, poi cambia i numeri
matrice: 0 1 1 0; 1 1 2 -3; -1 2 1 1
modo: scala
modi: scala ridotta
```

Nello strumento qui sopra premi «Calcola»: vedrai le stesse mosse delle dispense, una per riga, con le righe cambiate in evidenza. Poi prova a mettere uno zero in un altro posto, per esempio `1 1 2; 2 2 5; 3 3 1`: la seconda colonna, sotto la prima riga, diventa tutta nulla e l'algoritmo salta alla terza colonna, come dice il passo (1).

> [!OLTRE] come fare meno conti a mano
> Martelli (§3.1.3) osserva che non serve seguire l'algoritmo alla lettera: **qualsiasi** sequenza di mosse di Gauss va bene, purché si arrivi a una matrice a scalini. Tre trucchi utili senza calcolatrice:
> 1. se in prima colonna c'è un $1$ (o un $-1$), porta quella riga in cima con uno scambio: i moltiplicatori $\frac{C_{i1}}{C_{11}}$ diventano interi;
> 2. per evitare le frazioni puoi combinare le mosse (II) e (III) in una sola, $R_i \to a R_i - c R_1$ con $a \neq 0$: per esempio con pivot $2$ e sotto un $3$, la mossa $R_2 \to 2R_2 - 3R_1$ mette lo zero senza frazioni;
> 3. se una riga ha tutti i numeri divisibili per lo stesso intero, dividila subito (mossa II): i conti dopo sono più piccoli.

## L'algoritmo di Gauss–Jordan (pp. 53–54)

Una matrice a scalini si risolve già con la sostituzione all'indietro. Si può però andare oltre e arrivare a una forma in cui le soluzioni si **leggono** senza fare altri conti: sopra ogni pivot solo zeri, e ogni pivot uguale a 1. Si ottiene con altre mosse di Gauss:

- gli zeri **sopra** i pivot si ottengono con mosse (III), togliendo alle righe precedenti un multiplo opportuno della riga del pivot;
- i pivot diventano $1$ con mosse (II), dividendo ogni riga per il suo pivot.

> [!ESEMPIO] 11.8 · Zeri sopra i pivot
> Nella matrice ottenuta nell'Esempio 11.7 il secondo pivot è $C_{22} = 1$ e sopra di lui c'è $C_{12} = 1 \neq 0$. Con $R_1 \to R_1 - R_2$:
> $$(1, 1, 2, -3) - (0, 1, 1, 0) = (1, 0, 1, -3), \qquad C = \begin{pmatrix} 1 & 0 & 1 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$
> Il terzo pivot è $C_{34} = -2$ e sopra di lui c'è $C_{14} = -3 \neq 0$ (mentre $C_{24}$ è già $0$). Con $R_1 \to R_1 - \frac 32 R_3$:
> $$(1, 0, 1, -3) - \frac 32 \cdot (0, 0, 0, -2) = (1, 0, 1, -3 + 3) = (1, 0, 1, 0), \qquad C = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$

> [!ESEMPIO] 11.9 · Pivot uguali a 1
> Nella matrice precedente i pivot $C_{11}$ e $C_{22}$ valgono già $1$, invece $C_{34} = -2$. Dividiamo la terza riga per $-2$, cioè $R_3 \to -\frac 12 R_3$ (mossa II):
> $$C = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

> [!METODO] L'algoritmo di Gauss–Jordan (p. 54)
> L'algoritmo appena descritto si chiama **algoritmo di Gauss–Jordan** e consiste in due fasi:
> 1. trasformare la matrice a scalini tramite l'algoritmo di Gauss;
> 2. ottenere solo zeri sopra i pivot con mosse (III) e tutti i pivot uguali a $1$ con mosse (II).

La matrice che si ottiene alla fine (a scalini, pivot uguali a 1, zeri sopra e sotto ogni pivot) si chiama spesso **forma a scalini ridotta**. Nelle colonne dei pivot c'è un solo $1$ e poi tutti zeri.

> [!ESEMPIO] 11.10 · Gauss–Jordan con le mosse sopra le frecce
> $$\begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 1 & 0 & 4 \end{pmatrix} \xrightarrow{R_3 \to R_3 - R_1} \begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 0 & 1 & 1 \end{pmatrix} \xrightarrow{R_3 \to R_3 - \frac 12 R_2} \begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$
> $$\xrightarrow{R_1 \to R_1 + \frac 12 R_2} \begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 2 \\ 0 & 0 & 0 \end{pmatrix} \xrightarrow{R_2 \to \frac 12 R_2} \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$
> I conti riga per riga:
> 1. $R_3 - R_1 = (1, 0, 4) - (1, -1, 3) = (0, 1, 1)$;
> 2. $R_3 - \frac 12 R_2 = (0, 1, 1) - (0, 1, 1) = (0, 0, 0)$: la matrice è a scalini, con pivot $1$ e $2$ nelle colonne 1 e 2 (fine della fase 1);
> 3. $R_1 + \frac 12 R_2 = (1, -1, 3) + (0, 1, 1) = (1, 0, 4)$: zero sopra il secondo pivot;
> 4. $\frac 12 R_2 = (0, 1, 1)$: il secondo pivot diventa $1$ (fine della fase 2).

> [!OLTRE] la forma a scalini non è unica, quella ridotta sì
> Con mosse diverse si arriva a matrici a scalini diverse: nell'Esempio 11.7, moltiplicando alla fine la seconda riga per 5 si ottiene un'altra matrice a scalini, altrettanto valida. Invece la forma ridotta di Gauss–Jordan è **sempre la stessa**, qualunque strada si segua (è un teorema che nel corso non si dimostra). Una cosa però non cambia mai, neanche tra forme a scalini diverse: il **numero** dei pivot e le **colonne** in cui stanno. Nella lezione L12 quel numero diventerà il rango.

## Leggere le soluzioni (pp. 54–55)

Adesso hai tutto per risolvere un sistema. Con Gauss–Jordan porti $C = (A \mid b)$ nella forma ridotta; poi guardi **dove** sono i pivot. Le dispense mostrano una matrice «tipo», in cui i punti interrogativi sono numeri qualsiasi:

$$\left(\begin{array}{cccccc|c} 0 & 1 & ? & 0 & 0 & ? & ? \\ 0 & 0 & 0 & 1 & 0 & ? & ? \\ 0 & 0 & 0 & 0 & 1 & ? & ? \end{array}\right)$$

Qui i pivot sono nelle colonne 2, 4 e 5. Ogni colonna con un pivot contiene un $1$ al posto del pivot e $0$ in tutte le altre caselle. Ci sono due casi.

### Primo caso: un pivot nella colonna dei termini noti

Se la colonna $b$ contiene un pivot, la matrice è di questo tipo:

$$\left(\begin{array}{cccccc|c} 0 & 1 & ? & 0 & 0 & ? & ? \\ 0 & 0 & 0 & 1 & 0 & ? & ? \\ 0 & 0 & 0 & 0 & 0 & 0 & 1 \end{array}\right)$$

L'ultima riga rappresenta l'equazione $0x_1 + 0x_2 + \cdots + 0x_6 = 1$, cioè $0 = 1$, che non ha nessuna soluzione. Allora il sistema non ha soluzioni: $S = \emptyset$ (l'insieme vuoto).

> [!ESEMPIO] La matrice dell'Esempio 11.7 come sistema
> Pensa la matrice $C$ dell'Esempio 11.7 come la matrice completa di un sistema in tre incognite:
> $$\begin{cases} y + z = 0 \\ x + y + 2z = -3 \\ -x + 2y + z = 1 \end{cases}$$
> Gauss–Jordan (Esempi 11.7–11.9) l'ha portata a $\left(\begin{array}{ccc|c} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array}\right)$. L'ultima riga dice $0 = 1$: il sistema **non ha soluzioni**. Già la forma a scalini dell'Esempio 11.7 lo diceva, con la riga $(0, 0, 0 \mid -2)$, cioè $0 = -2$: quando compare un pivot nell'ultima colonna ci si può fermare.

### Secondo caso: nessun pivot nell'ultima colonna

Se l'ultima colonna non contiene pivot, la matrice è di questo tipo:

$$\left(\begin{array}{cccccc|c} 0 & 1 & a_{13} & 0 & 0 & a_{16} & b_1 \\ 0 & 0 & 0 & 1 & 0 & a_{26} & b_2 \\ 0 & 0 & 0 & 0 & 1 & a_{36} & b_3 \end{array}\right)$$

Ogni colonna corrisponde a un'incognita $x_1, \dots, x_6$, tranne l'ultima, che contiene i termini noti. La ricetta delle dispense:

1. assegna un **parametro** $t_1, t_2, \dots$ a ogni incognita la cui colonna **non** contiene un pivot. Qui le colonne senza pivot sono la 1, la 3 e la 6: $x_1 = t_1$, $x_3 = t_2$, $x_6 = t_3$;
2. riscrivi il sistema con i parametri:
   $$\begin{cases} x_2 + a_{13}t_2 + a_{16}t_3 = b_1 \\ x_4 + a_{26}t_3 = b_2 \\ x_5 + a_{36}t_3 = b_3 \end{cases}$$
3. porta i parametri a destra dell'uguale:
   $$\begin{cases} x_2 = b_1 - a_{13}t_2 - a_{16}t_3 \\ x_4 = b_2 - a_{26}t_3 \\ x_5 = b_3 - a_{36}t_3 \end{cases}$$
4. aggiungi le equazioni dei parametri e scrivi tutte le incognite in ordine:
   $$\begin{cases} x_1 = t_1 \\ x_2 = b_1 - a_{13}t_2 - a_{16}t_3 \\ x_3 = t_2 \\ x_4 = b_2 - a_{26}t_3 \\ x_5 = b_3 - a_{36}t_3 \\ x_6 = t_3 \end{cases}$$

Il sistema è risolto. I parametri $t_1, t_2, \dots$ sono **liberi**: possono assumere qualsiasi valore in $\K$, e ogni scelta dei parametri dà una soluzione diversa. Le altre incognite dipendono dai parametri come indicato.

Pezzo per pezzo:

- Le incognite con il pivot (qui $x_2, x_4, x_5$) si chiamano spesso **variabili dipendenti**; quelle senza pivot (qui $x_1, x_3, x_6$) **variabili libere**.
- Il numero di parametri è
  $$\text{numero di incognite} - \text{numero di pivot} = 6 - 3 = 3.$$
- Se **ogni** colonna di $A$ ha un pivot non ci sono parametri: la soluzione è **una sola**, e si legge nell'ultima colonna.
- Le righe fatte solo di zeri, $(0, \dots, 0 \mid 0)$, dicono $0 = 0$: sono vere sempre e si possono ignorare.

> [!ESEMPIO] Una sola soluzione: la matrice dell'Esempio 11.10
> Pensa la matrice dell'Esempio 11.10 come matrice completa di un sistema di 3 equazioni in 2 incognite:
> $$\begin{cases} x - y = 3 \\ 2y = 2 \\ x = 4 \end{cases} \qquad \longrightarrow \qquad \left(\begin{array}{cc|c} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{array}\right).$$
> Nessun pivot nell'ultima colonna, e tutte e due le colonne di $A$ hanno un pivot: nessun parametro. La soluzione è una sola, $x = 4$, $y = 1$. Controllo: $4 - 1 = 3$, $2 \cdot 1 = 2$, $x = 4$. Tre equazioni in due incognite possono benissimo avere una soluzione: la terza qui non dice niente di nuovo.

> [!ESEMPIO] Infinite soluzioni con un parametro
> Risolviamo
> $$\begin{cases} x + 2y + z = 1 \\ 2x + 4y + 3z = 3 \\ 3x + 6y + 5z = 5 \end{cases}$$
> Gauss: $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - 3R_1$ (la riga 1 resta ferma):
> $$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 2 & 4 & 3 & 3 \\ 3 & 6 & 5 & 5 \end{array}\right) \longrightarrow \left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 2 & 2 \end{array}\right)$$
> $$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
> I conti: $(2, 4, 3, 3) - 2(1, 2, 1, 1) = (0, 0, 1, 1)$; $(3, 6, 5, 5) - 3(1, 2, 1, 1) = (0, 0, 2, 2)$; $(0, 0, 2, 2) - 2(0, 0, 1, 1) = 0$. Nella seconda colonna, sotto la prima riga, ci sono solo zeri: lo scalino salta alla terza colonna. Gauss–Jordan: $R_1 \to R_1 - R_2$ dà $(1, 2, 0, 0)$:
> $$\left(\begin{array}{ccc|c} 1 & 2 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right).$$
> Pivot nelle colonne 1 e 3, nessuno nell'ultima. La colonna 2 ($y$) non ha pivot: $y = t$. Allora $z = 1$ e $x + 2t = 0$, cioè
> $$x = -2t, \qquad y = t, \qquad z = 1, \qquad t \in \R.$$
> Controllo nella seconda equazione: $2(-2t) + 4t + 3 \cdot 1 = 3$. Per $t = 0$ la soluzione $(0, 0, 1)$, per $t = 1$ la soluzione $(-2, 1, 1)$, e così via: infinite soluzioni, che dipendono da **un** parametro ($3$ incognite $- 2$ pivot).

> [!ESEMPIO] Due parametri (dal libro di Martelli, Esempio 3.1.2)
> Il sistema $\begin{cases} x_1 + 3x_2 + 4x_5 = 1 \\ x_3 - 2x_4 = 3 \end{cases}$ è già in forma ridotta: la matrice completa è
> $$\left(\begin{array}{ccccc|c} 1 & 3 & 0 & 0 & 4 & 1 \\ 0 & 0 & 1 & -2 & 0 & 3 \end{array}\right).$$
> Pivot nelle colonne 1 e 3; le incognite libere sono $x_2$, $x_4$, $x_5$: tre parametri ($5 - 2 = 3$). Con $x_2 = t_1$, $x_4 = t_2$, $x_5 = t_3$:
> $$\begin{cases} x_1 = 1 - 3t_1 - 4t_3 \\ x_2 = t_1 \\ x_3 = 3 + 2t_2 \\ x_4 = t_2 \\ x_5 = t_3 \end{cases}$$
> Nota i segni: $3x_2$ e $4x_5$, portati a destra, diventano $-3t_1$ e $-4t_3$; $-2x_4$ diventa $+2t_2$.

```widget gauss
titolo: Risolvi un sistema: l'ultima colonna è quella dei termini noti
matrice: 1 2 1 1; 2 4 3 3; 3 6 5 5
modo: sistema
```

Lo strumento esegue Gauss–Jordan sulla matrice completa, dice se ci sono soluzioni e le scrive con i parametri $t_1, t_2, \dots$ Qui trovi il sistema dell'esempio con un parametro. Prova a cambiare l'ultimo numero da $5$ a $6$: la terza equazione non è più compatibile con le altre e compare la riga $0 = 1$.

> [!TRAPPOLA] I parametri: quanti e a chi
> Due errori classici. (1) **Dimenticare un'incognita libera.** Se un'incognita non compare in nessuna equazione, la sua colonna in $A$ è tutta di zeri, non ha pivot e prende anche lei un parametro. In $\R^3$ il sistema fatto della sola equazione $x + z = 1$ ha matrice $\left(\begin{array}{ccc|c} 1 & 0 & 1 & 1 \end{array}\right)$: le colonne 2 e 3 sono senza pivot, quindi $y = t_1$, $z = t_2$, $x = 1 - t_2$, con **due** parametri. (2) **Contare le incognite dalle colonne di $C$** invece che da quelle di $A$: la colonna dei termini noti **non** è un'incognita. Una matrice completa $3 \times 5$ ha **4** incognite.

> [!OLTRE] le soluzioni scritte come vettori
> Martelli (p. 84) scrive le soluzioni anche in **forma vettoriale**, raccogliendo i parametri. Nell'esempio con un parametro:
> $$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} -2t \\ t \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + t \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}.$$
> È una **retta** di $\R^3$: il punto $(0, 0, 1)$ più tutti i multipli del vettore $(-2, 1, 0)$. In generale le soluzioni hanno la forma $x_0 + t_1 v_1 + \cdots + t_h v_h$, con un vettore $v_i$ per ogni parametro. Nella lezione L12 vedrai che cosa sono $x_0$ (una «soluzione particolare») e i $v_i$ (le soluzioni del sistema con tutti i termini noti uguali a zero).

> [!OLTRE] dove trovarlo nel libro
> Tutta la lezione segue il libro di Martelli, **§3.1 «Algoritmi di risoluzione»** (pp. 79–85 del libro): mosse di Gauss e Proposizione 3.1.1 (pp. 79–80), algoritmo di Gauss (pp. 80–82), algoritmo di Gauss–Jordan (pp. 82–83), risoluzione di un sistema e forma vettoriale delle soluzioni (pp. 83–85, con l'Esempio 3.1.2). Nel libro le righe si chiamano $C_i$ invece di $R_i$.

## Verso l'esame

La prova scritta di AG ha 10 quiz a 5 risposte (servono almeno 6 punti perché vengano corretti i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **Il quiz sul numero di soluzioni.** Nei 15 appelli dal 2023/24 al 2025/26 la domanda «Il sistema lineare con matrice completa … ha un numero di soluzioni pari a» è uscita 9 volte: appelli del 24/01/2024 (domanda 10), del 10/06/2024 (domanda 7), del 10/07/2024 (domanda 5), del 16/01/2025 (domanda 10), del 03/06/2025 (domanda 4), del 10/07/2025 (domanda 5), del 02/09/2025 (domanda 1), del 15/01/2026 (domanda 6) e del 03/06/2026 (domanda 7). Le cinque risposte sono sempre le stesse: una, zero, infinite con 1 parametro, infinite con 2 parametri, un numero finito maggiore di 1. Nell'appello del 07/09/2026 (domanda 3) la stessa idea torna con un parametro: «per quale $k$ il sistema non ha soluzioni?» (lezione L12).
2. **Trovare tutte le soluzioni.** Nell'appello del 10/07/2024 (domanda 6) bisognava scegliere, tra cinque, la descrizione giusta di tutte le soluzioni di un sistema $3 \times 3$ (è lo stesso sistema dell'Esercizio 12.11 delle dispense, nella lezione L12).
3. **I problemi aperti.** I sistemi con un parametro (lezione L12) sono uno dei due problemi da 11 punti in molti appelli (07/02/2025, 05/02/2026, 03/07/2026), e quasi tutti gli altri problemi (autospazi, nuclei, intersezioni di piani) finiscono con una riduzione di Gauss. Fare Gauss senza errori di conto vale metà della prova.

> [!METODO] Il quiz «quante soluzioni?»
> 1. Riduci la matrice completa **a scalini** con Gauss: per contare le soluzioni non serve Gauss–Jordan.
> 2. Se una riga diventa $(0, \dots, 0 \mid c)$ con $c \neq 0$, c'è un pivot nell'ultima colonna: **zero** soluzioni.
> 3. Altrimenti conta i pivot, $r$, e le incognite, $n$ (le colonne **prima** della barra). Se $r = n$: **una** soluzione. Se $r < n$: **infinite**, che dipendono da $n - r$ parametri.
> 4. La risposta «un numero finito, maggiore di 1» con coefficienti reali è sempre sbagliata: il perché è il Corollario 12.7 (lezione L12).
> 5. Prima di cominciare, guarda se ci sono **righe proporzionali**: nell'appello del 02/09/2025 (domanda 1) le tre righe erano multiple di $(1, 4, 2 \mid 7)$, quindi un solo pivot e $3 - 1 = 2$ parametri, senza fare conti.

> [!TRAPPOLA] Gli errori che costano punti
> - Fare una mossa e **dimenticare l'ultima colonna**: la mossa va applicata alla riga intera.
> - Fare due mosse **insieme** con le righe vecchie (vedi la trappola nella sezione sulle mosse).
> - Contare le incognite dalle colonne di $C$: nell'appello del 16/01/2025 (domanda 10) la matrice completa era $3 \times 5$, quindi le incognite erano **4**, e la risposta giusta era «infinite, che dipendono da 2 parametri».
> - Errori di segno nel portare i parametri a destra dell'uguale. Rimedio: alla fine **sostituisci** una soluzione (per esempio con tutti i parametri uguali a zero) nelle equazioni di partenza.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: le tre mosse di Gauss (con $\lambda \neq 0$ nella II e $j \neq i$ nella III); la definizione di pivot e di matrice a scalini; la regola di lettura «pivot nell'ultima colonna $\Rightarrow$ nessuna soluzione; altrimenti $n - r$ parametri, uno per ogni colonna di $A$ senza pivot».

## Quiz

```quiz
D: Quale di queste è una mossa di Gauss sulla matrice completa di un sistema lineare?
+ La mossa $R_2 \to R_2 - 3R_1$.
- La mossa $R_2 \to 0 \cdot R_2$.
- Sommare $1$ a tutti i numeri della prima riga.
- Scambiare la prima e l'ultima colonna.
- Elevare al quadrato tutti i numeri della seconda riga.
= $R_2 \to R_2 - 3R_1$ è una mossa di tipo (III). Moltiplicare per $0$ non è permesso (nella mossa II serve $\lambda \neq 0$), sommare un numero o elevare al quadrato non sono mosse, e le mosse si fanno sulle righe, non sulle colonne.

D: Quale di queste cinque matrici è a scalini? $M_1 = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 4 & 5 \end{pmatrix}$, $M_2 = \begin{pmatrix} 2 & 1 & 0 & 3 \\ 0 & 0 & 5 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$, $M_3 = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}$, $M_4 = \begin{pmatrix} 0 & 1 & 2 \\ 0 & 3 & 4 \\ 0 & 0 & 5 \end{pmatrix}$, $M_5 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$.
- La prima.
+ La seconda.
- La terza.
- La quarta.
- La quinta.
= $M_2$ ha i pivot $2$ (colonna 1) e $5$ (colonna 3) e la riga nulla in fondo. In $M_1$ la riga nulla non è in fondo; in $M_3$ e in $M_4$ il pivot della seconda riga è nella stessa colonna di quello della prima; in $M_5$ il pivot della terza riga (colonna 2) è a sinistra di quello della seconda (colonna 3).

D: Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 2 & 3 & 10 \\ 4 & 5 & 6 & 11 \\ 7 & 8 & 9 & 12 \end{array}\right)$ ha un numero di soluzioni pari a:
- Una.
+ Infinite, che dipendono da 1 parametro.
- Zero.
- Infinite, che dipendono da 2 parametri.
- Un numero finito, maggiore di 1.
= Appello del 24/01/2024, domanda 10. $R_2 \to R_2 - 4R_1$ dà $(0, -3, -6 \mid -29)$, $R_3 \to R_3 - 7R_1$ dà $(0, -6, -12 \mid -58)$, poi $R_3 \to R_3 - 2R_2$ dà la riga nulla. Due pivot, nelle colonne 1 e 2, nessuno nell'ultima: infinite soluzioni con $3 - 2 = 1$ parametro.

D: Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 3 & 12 & 6 & 21 \\ 5 & 20 & 10 & 35 \\ 4 & 16 & 8 & 28 \end{array}\right)$ ha un numero di soluzioni pari a:
- Zero.
+ Infinite, che dipendono da 2 parametri.
- Un numero finito, maggiore di 1.
- Una.
- Infinite, che dipendono da 1 parametro.
= Appello del 02/09/2025, domanda 1. Le righe sono $3$, $5$ e $4$ volte la riga $(1, 4, 2 \mid 7)$: dopo Gauss resta una sola riga non nulla, con un solo pivot e nessun pivot nell'ultima colonna. Le incognite sono 3, quindi $3 - 1 = 2$ parametri.

D: Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 2 & 3 & 4 & 5 \\ 3 & 4 & 5 & 7 \end{array}\right)$ ha un numero di soluzioni pari a:
+ Zero.
- Una.
- Infinite, che dipendono da 1 parametro.
- Infinite, che dipendono da 2 parametri.
- Un numero finito, maggiore di 1.
= Simile all'appello del 10/07/2024, domanda 5. $R_2 - 2R_1 = (0, -1, -2 \mid -3)$, $R_3 - 3R_1 = (0, -2, -4 \mid -5)$, poi $R_3 - 2R_2 = (0, 0, 0 \mid 1)$: la riga dice $0 = 1$, c'è un pivot nell'ultima colonna e il sistema non ha soluzioni.

D: La forma ridotta della matrice completa di un sistema nelle incognite $x, y, z$ è $\left(\begin{array}{ccc|c} 1 & 0 & 2 & 3 \\ 0 & 1 & -1 & 1 \end{array}\right)$. Qual è l'insieme di tutte le soluzioni ($t \in \R$)?
+ $x = 3 - 2t,\ y = 1 + t,\ z = t$
- $x = 3 + 2t,\ y = 1 - t,\ z = t$
- Solo $x = 3,\ y = 1,\ z = 0$
- $x = -2t,\ y = t,\ z = t$
- Il sistema non ha soluzioni.
= Simile all'appello del 10/07/2024, domanda 6. La colonna di $z$ non ha pivot: $z = t$. Le righe dicono $x + 2z = 3$ e $y - z = 1$, quindi $x = 3 - 2t$ e $y = 1 + t$. La terza risposta dà una sola soluzione (quella con $t = 0$), non tutte; la seconda sbaglia i segni portando $t$ a destra.

D: Riducendo a scalini la matrice completa di un sistema in 3 incognite compare la riga $(0, 0, 0 \mid 5)$. Che cosa puoi concludere?
+ Il sistema non ha soluzioni.
- $z = 5$.
- Il sistema ha infinite soluzioni.
- La riga si può cancellare e si continua.
- L'unica soluzione è $x = y = z = 0$.
= La riga rappresenta l'equazione $0x + 0y + 0z = 5$, cioè $0 = 5$, falsa per ogni scelta delle incognite. C'è un pivot nell'ultima colonna, quindi $S = \emptyset$. Si cancella invece una riga $(0, 0, 0 \mid 0)$, che dice $0 = 0$.

D: Nella matrice $\left(\begin{array}{cc|c} 1 & 2 & 4 \\ 3 & 1 & 7 \end{array}\right)$ si fa la mossa $R_2 \to R_2 - 3R_1$. Quale diventa la seconda riga?
+ $(0, -5 \mid -5)$
- $(0, -5 \mid 5)$
- $(0, 5 \mid 5)$
- $(0, -5 \mid 19)$
- $(2, -1 \mid 3)$
= $(3, 1, 7) - 3 \cdot (1, 2, 4) = (3 - 3,\ 1 - 6,\ 7 - 12) = (0, -5, -5)$. La mossa si applica anche all'ultima colonna; $(2, -1 \mid 3)$ è $R_2 - R_1$, non $R_2 - 3R_1$.

D: Un sistema di 3 equazioni in 5 incognite, ridotto a scalini, ha 3 pivot e nessuno di questi è nell'ultima colonna. Quante sono le soluzioni?
+ Infinite, che dipendono da 2 parametri.
- Infinite, che dipendono da 3 parametri.
- Una.
- Zero.
- Infinite, che dipendono da 5 parametri.
= Simile all'appello del 16/01/2025, domanda 10 (dove le incognite erano 4). Nessun pivot nell'ultima colonna, quindi ci sono soluzioni; i parametri sono tanti quante le incognite senza pivot: $5 - 3 = 2$.

D: Risolvi il sistema a scalini $x - y + 2z = 5$, $3y - z = 1$, $2z = 4$. Quanto vale $x$?
N: 2
= Dal basso: $z = 2$; poi $3y - 2 = 1$, quindi $y = 1$; infine $x - 1 + 4 = 5$, quindi $x = 2$.
```

## Esercizi

::: esercizio medio Esercizio 11.11 delle dispense: un sistema 3 × 3
Risolvi il sistema lineare
$$\begin{cases} x + y + 2z = 9 \\ 2x + 4y - 3z = 1 \\ 3x + 6y - 5z = 0 \end{cases}$$
::: soluzione
**Matrice completa e fase 1 (Gauss).** Il pivot della prima colonna è già $1$. Tolgo $2R_1$ dalla seconda riga e $3R_1$ dalla terza:
$$\left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 2 & 4 & -3 & 1 \\ 3 & 6 & -5 & 0 \end{array}\right) \longrightarrow \left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 0 & 2 & -7 & -17 \\ 0 & 3 & -11 & -27 \end{array}\right)$$
I conti: $(2, 4, -3, 1) - 2(1, 1, 2, 9) = (0, 2, -7, -17)$ e $(3, 6, -5, 0) - 3(1, 1, 2, 9) = (0, 3, -11, -27)$.

Ora il pivot della seconda colonna è $2$ e sotto c'è $3$. Per non avere frazioni uso $R_3 \to 2R_3 - 3R_2$ (una mossa II seguita da una III):
$$2 \cdot (0, 3, -11, -27) - 3 \cdot (0, 2, -7, -17) = (0,\ 6 - 6,\ -22 + 21,\ -54 + 51) = (0, 0, -1, -3).$$
$$\left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 0 & 2 & -7 & -17 \\ 0 & 0 & -1 & -3 \end{array}\right)$$
(Seguendo l'algoritmo alla lettera, $R_3 \to R_3 - \frac 32 R_2$, la terza riga viene $(0, 0, -\frac 12, -\frac 32)$: è la stessa equazione divisa per 2.)

**Lettura.** Tre pivot in tre colonne di $A$, nessuno nell'ultima colonna: una sola soluzione. Sostituzione all'indietro:
1. $-z = -3$, quindi $z = 3$;
2. $2y - 7 \cdot 3 = -17$, cioè $2y = 4$, quindi $y = 2$;
3. $x + 2 + 2 \cdot 3 = 9$, quindi $x = 1$.

**Controllo** nelle equazioni di partenza: $1 + 2 + 6 = 9$; $2 + 8 - 9 = 1$; $3 + 12 - 15 = 0$. La soluzione è $(x, y, z) = (1, 2, 3)$, come indicano le dispense.
:::

::: esercizio base Dal sistema alla matrice completa
Scrivi la matrice dei coefficienti, il vettore dei termini noti e la matrice completa dei sistemi
$$\text{(a)} \begin{cases} 3x - z = 2 \\ y + 4z = -1 \end{cases} \qquad \text{(b)} \begin{cases} x_1 + x_2 = x_3 \\ 2x_3 - 7 = x_1 \\ x_2 = 5 \end{cases}$$
Quante sono le equazioni e quante le incognite?
::: soluzione
(a) Due equazioni ($k = 2$) in tre incognite ($n = 3$, nell'ordine $x, y, z$). Nella prima manca $y$, nella seconda manca $x$: coefficienti $0$.
$$A = \begin{pmatrix} 3 & 0 & -1 \\ 0 & 1 & 4 \end{pmatrix}, \quad b = \begin{pmatrix} 2 \\ -1 \end{pmatrix}, \quad C = \left(\begin{array}{ccc|c} 3 & 0 & -1 & 2 \\ 0 & 1 & 4 & -1 \end{array}\right).$$

(b) Prima si mette in ordine: le incognite a sinistra, nell'ordine $x_1, x_2, x_3$, i numeri a destra.
$$\begin{cases} x_1 + x_2 - x_3 = 0 \\ -x_1 + 2x_3 = 7 \\ x_2 = 5 \end{cases} \qquad C = \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\ -1 & 0 & 2 & 7 \\ 0 & 1 & 0 & 5 \end{array}\right).$$
Tre equazioni in tre incognite. Nota il $-7$ portato a destra, che diventa $+7$, e i due zeri per le incognite che mancano.
:::

::: esercizio base Pivot e scalini
Per ciascuna matrice di' se è a scalini e, se lo è, indica i pivot e le colonne in cui stanno.
$$M_1 = \begin{pmatrix} 0 & 2 & 1 & 4 \\ 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \quad M_2 = \begin{pmatrix} 1 & 5 \\ 0 & 0 \\ 0 & 2 \end{pmatrix}, \quad M_3 = \begin{pmatrix} 3 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}, \quad M_4 = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 6 & 7 \end{pmatrix}.$$
::: soluzione
- $M_1$: sì. Pivot $2$ in colonna 2 e $3$ in colonna 4; la riga nulla è in fondo. La prima colonna tutta nulla non dà fastidio.
- $M_2$: no. La riga nulla $(0, 0)$ sta sopra la riga $(0, 2)$, che ha un pivot. Scambiando le ultime due righe diventa a scalini.
- $M_3$: sì. Un solo pivot, $3$, in colonna 1, e la riga nulla in fondo.
- $M_4$: no. Il pivot della terza riga, $6$, è in colonna 2 come quello della seconda. Con $R_3 \to R_3 - \frac 32 R_2$ la terza riga diventa $(0, 0, 7 - \frac{15}2) = (0, 0, -\frac 12)$ e la matrice è a scalini.
:::

::: esercizio medio Gauss–Jordan completo, con una colonna senza pivot
Risolvi con l'algoritmo di Gauss–Jordan il sistema con matrice completa
$$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 0 \\ 1 & 2 & 2 & -3 \end{array}\right).$$
::: soluzione
**Fase 1.** $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - R_1$:
$$(2, 4, 1, 0) - 2(1, 2, -1, 3) = (0, 0, 3, -6), \qquad (1, 2, 2, -3) - (1, 2, -1, 3) = (0, 0, 3, -6).$$
La seconda colonna sotto la prima riga è tutta nulla: si passa alla terza, dove il pivot è $3$. $R_3 \to R_3 - R_2$ dà la riga nulla:
$$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 0 & 0 & 3 & -6 \\ 0 & 0 & 0 & 0 \end{array}\right).$$
**Fase 2.** $R_2 \to \frac 13 R_2$ dà $(0, 0, 1, -2)$; poi $R_1 \to R_1 + R_2$ dà $(1, 2, 0, 1)$:
$$\left(\begin{array}{ccc|c} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right).$$
**Lettura.** Pivot nelle colonne 1 e 3, nessuno nell'ultima. La colonna 2 non ha pivot: $y = t$. Allora $z = -2$ e $x = 1 - 2t$:
$$(x, y, z) = (1 - 2t,\ t,\ -2), \qquad t \in \R.$$
**Controllo** con $t = 0$, cioè $(1, 0, -2)$: $1 + 0 + 2 = 3$; $2 + 0 - 2 = 0$; $1 + 0 - 4 = -3$.
:::

::: esercizio medio Due equazioni, quattro incognite
Trova tutte le soluzioni di
$$\begin{cases} x_1 + x_2 - x_3 + 2x_4 = 1 \\ 2x_1 + 2x_2 + x_3 + x_4 = 5 \end{cases}$$
::: soluzione
$R_2 \to R_2 - 2R_1$: $(2, 2, 1, 1, 5) - 2(1, 1, -1, 2, 1) = (0, 0, 3, -3, 3)$. Poi $R_2 \to \frac 13 R_2$ dà $(0, 0, 1, -1, 1)$ e $R_1 \to R_1 + R_2$ dà $(1, 1, 0, 1, 2)$:
$$\left(\begin{array}{cccc|c} 1 & 1 & 0 & 1 & 2 \\ 0 & 0 & 1 & -1 & 1 \end{array}\right).$$
Pivot nelle colonne 1 e 3. Le colonne 2 e 4 non hanno pivot: $x_2 = s$, $x_4 = t$. Le righe dicono $x_1 + s + t = 2$ e $x_3 - t = 1$:
$$x_1 = 2 - s - t, \qquad x_2 = s, \qquad x_3 = 1 + t, \qquad x_4 = t, \qquad s, t \in \R.$$
Infinite soluzioni, con $4 - 2 = 2$ parametri. **Controllo** nella seconda equazione: $2(2 - s - t) + 2s + (1 + t) + t = 4 - 2s - 2t + 2s + 1 + 2t = 5$.
:::

::: esercizio medio Un sistema impossibile
Mostra che il sistema $\begin{cases} x + y + z = 1 \\ x - y + 2z = 0 \\ 2x + 3z = 2 \end{cases}$ non ha soluzioni.
::: soluzione
$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & -1 & 2 & 0 \\ 2 & 0 & 3 & 2 \end{array}\right) \xrightarrow[R_3 \to R_3 - 2R_1]{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & -2 & 1 & -1 \\ 0 & -2 & 1 & 0 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - R_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & -2 & 1 & -1 \\ 0 & 0 & 0 & 1 \end{array}\right)$$
I conti: $(1, -1, 2, 0) - (1, 1, 1, 1) = (0, -2, 1, -1)$; $(2, 0, 3, 2) - 2(1, 1, 1, 1) = (0, -2, 1, 0)$; $(0, -2, 1, 0) - (0, -2, 1, -1) = (0, 0, 0, 1)$.

L'ultima riga dice $0 = 1$: pivot nell'ultima colonna, $S = \emptyset$. Si vede anche a occhio: la terza equazione meno la somma delle prime due dà $0 = 1$, perché $(2x + 3z) - (x + y + z) - (x - y + 2z) = 0$ mentre $2 - 1 - 0 = 1$.
:::

::: esercizio medio Dove sta l'errore?
Uno studente risolve $\begin{cases} 2x + y = 4 \\ x + 3y = 7 \end{cases}$ facendo nello stesso passaggio $R_1 \to R_1 - 2R_2$ e $R_2 \to R_2 - \frac 12 R_1$, tutte e due con le righe di partenza. Che cosa ottiene? Perché è sbagliato? Risolvi correttamente.
::: soluzione
**Il conto dello studente**, con le righe di partenza $R_1 = (2, 1 \mid 4)$ e $R_2 = (1, 3 \mid 7)$:
$$R_1 - 2R_2 = (0, -5 \mid -10), \qquad R_2 - \tfrac 12 R_1 = (0, \tfrac 52 \mid 5).$$
Le due righe nuove sono una multipla dell'altra (la seconda è $-\frac 12$ la prima): restano l'unica equazione $y = 2$ e $x$ sembra libera, cioè «infinite soluzioni».

**Perché è sbagliato.** Ognuna delle due mosse, da sola, è lecita; fatte insieme non lo sono, perché la seconda usa la riga $R_1$ che nel frattempo è stata cambiata dalla prima. Il risultato non si può più riportare indietro: un'equazione è andata persa.

**Correttamente**, una mossa alla volta: $R_1 \leftrightarrow R_2$, poi $R_2 \to R_2 - 2R_1$:
$$\left(\begin{array}{cc|c} 1 & 3 & 7 \\ 2 & 1 & 4 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & 3 & 7 \\ 0 & -5 & -10 \end{array}\right)$$
Quindi $y = 2$ e $x = 7 - 6 = 1$. Controllo: $2 + 2 = 4$, $1 + 6 = 7$. La soluzione è una sola, $(1, 2)$.
:::

::: esercizio medio Il sistema omogeneo dell'Esempio 11.10
Usa la matrice dell'Esempio 11.10 come matrice dei coefficienti del sistema in tre incognite con tutti i termini noti uguali a zero:
$$\begin{cases} x_1 - x_2 + 3x_3 = 0 \\ 2x_2 + 2x_3 = 0 \\ x_1 + 4x_3 = 0 \end{cases}$$
Trova tutte le soluzioni.
::: soluzione
La colonna dei termini noti è tutta di zeri e nessuna mossa di Gauss la cambia (combinazioni di zeri danno zero): basta ridurre la matrice dei coefficienti. L'Esempio 11.10 l'ha già fatto:
$$\begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 1 & 0 & 4 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
Pivot nelle colonne 1 e 2: la colonna 3 è libera, $x_3 = t$. Le righe dicono $x_1 + 4t = 0$ e $x_2 + t = 0$:
$$(x_1, x_2, x_3) = (-4t, -t, t) = t\,(-4, -1, 1), \qquad t \in \R.$$
**Controllo** con $t = 1$: $-4 + 1 + 3 = 0$; $-2 + 2 = 0$; $-4 + 4 = 0$. Le soluzioni sono i multipli di un vettore: una retta per l'origine. Nella lezione L12 questo si chiamerà il **sistema omogeneo**, e vedrai che le sue soluzioni formano sempre un sottospazio.
:::

::: esercizio difficile Quando il sistema dipende da un numero
Per quali valori di $a \in \R$ il sistema $\begin{cases} x + y = 1 \\ x + ay = 2 \end{cases}$ ha soluzioni? Quando ce ne sono, trovale.
::: soluzione
$R_2 \to R_2 - R_1$: $(1, a, 2) - (1, 1, 1) = (0, a - 1, 1)$.
$$\left(\begin{array}{cc|c} 1 & 1 & 1 \\ 0 & a - 1 & 1 \end{array}\right)$$
Ora bisogna distinguere, perché il secondo pivot è $a - 1$ e **può essere zero**.

- **Se $a = 1$** la seconda riga è $(0, 0 \mid 1)$: $0 = 1$, nessuna soluzione. Infatti il sistema diventa $x + y = 1$ e $x + y = 2$: due rette parallele.
- **Se $a \neq 1$** il pivot $a - 1$ è diverso da zero e posso dividere: $y = \frac 1{a - 1}$, poi $x = 1 - y = \frac{a - 2}{a - 1}$. Una sola soluzione.

**Controllo** nella seconda equazione: $x + ay = \frac{a - 2}{a - 1} + \frac a{a - 1} = \frac{2a - 2}{a - 1} = 2$. Per esempio con $a = 3$: $y = \frac 12$, $x = \frac 12$, e infatti $\frac 12 + \frac 32 = 2$.

La trappola: dividere per $a - 1$ senza chiedersi se può valere zero. Con i parametri, ogni volta che un pivot contiene il parametro si studia a parte il caso in cui si annulla (lezione L12).
:::

::: esercizio esame Come all'esame: quante soluzioni? (appello del 15/01/2026, domanda 6)
Il sistema lineare con matrice completa
$$\left(\begin{array}{ccc|c} 0 & 1 & 2 & 3 \\ 4 & 5 & 6 & 7 \\ 8 & 9 & 10 & 11 \end{array}\right)$$
ha un numero di soluzioni pari a: (a) un numero finito, maggiore di 1; (b) zero; (c) infinite, che dipendono da 2 parametri; (d) infinite, che dipendono da 1 parametro; (e) una. Trova poi tutte le soluzioni.
::: soluzione
**Passo (1) dell'algoritmo.** $C_{11} = 0$: scambio $R_1 \leftrightarrow R_2$.
$$\left(\begin{array}{ccc|c} 4 & 5 & 6 & 7 \\ 0 & 1 & 2 & 3 \\ 8 & 9 & 10 & 11 \end{array}\right) \xrightarrow{R_3 \to R_3 - 2R_1} \left(\begin{array}{ccc|c} 4 & 5 & 6 & 7 \\ 0 & 1 & 2 & 3 \\ 0 & -1 & -2 & -3 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 + R_2} \left(\begin{array}{ccc|c} 4 & 5 & 6 & 7 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
I conti: $(8, 9, 10, 11) - 2(4, 5, 6, 7) = (0, -1, -2, -3)$; poi sommando $R_2$ si ottiene la riga nulla.

**Risposta al quiz.** Due pivot (colonne 1 e 2), nessuno nell'ultima colonna, tre incognite: infinite soluzioni con $3 - 2 = 1$ parametro, risposta **(d)**.

**Tutte le soluzioni.** $z = t$. Dalla seconda riga $y = 3 - 2t$. Dalla prima $4x = 7 - 5(3 - 2t) - 6t = 7 - 15 + 10t - 6t = -8 + 4t$, quindi $x = -2 + t$:
$$(x, y, z) = (-2 + t,\ 3 - 2t,\ t), \qquad t \in \R.$$
**Controllo** con $t = 0$, cioè $(-2, 3, 0)$: $0 + 3 + 0 = 3$; $-8 + 15 + 0 = 7$; $-16 + 27 + 0 = 11$.
:::

::: esercizio esame Come all'esame: trovare tutte le soluzioni
Trova tutte le soluzioni del sistema
$$\begin{cases} x + 2y + 3z = 1 \\ 2x + 5y + 7z = 3 \\ x + 3y + 4z = 2 \end{cases}$$
e scegli la risposta giusta tra: (a) nessuna soluzione; (b) $x = -1 - t,\ y = 1 - t,\ z = t$; (c) $x = 1,\ y = 0,\ z = 0$; (d) $x = -1 + t,\ y = 1 + t,\ z = t$; (e) $x = 1 - 2s,\ y = s,\ z = 0$.
::: soluzione
**Gauss.** $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - R_1$:
$$(2, 5, 7, 3) - 2(1, 2, 3, 1) = (0, 1, 1, 1), \qquad (1, 3, 4, 2) - (1, 2, 3, 1) = (0, 1, 1, 1).$$
Le due righe sono uguali: $R_3 \to R_3 - R_2$ dà la riga nulla. Gauss–Jordan: $R_1 \to R_1 - 2R_2$ dà $(1, 0, 1, -1)$.
$$\left(\begin{array}{ccc|c} 1 & 0 & 1 & -1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
**Lettura.** $z = t$ (colonna senza pivot), $x = -1 - t$, $y = 1 - t$: risposta **(b)**.

**Come scartare le altre senza rifare i conti** (utile nel quiz): (c) è una soluzione? Nella prima equazione $1 + 0 + 0 = 1$ sì, nella seconda $2 \neq 3$: no. (d) con $t = 1$ dà $(0, 2, 1)$: nella prima $0 + 4 + 3 = 7 \neq 1$, no. (e) con $s = 0$ dà $(1, 0, 0)$, già scartato. (a) è falsa perché (b) funziona: con $t = 0$, $(-1, 1, 0)$ dà $-1 + 2 = 1$, $-2 + 5 = 3$, $-1 + 3 = 2$.
:::

## Domande di ripasso

::: domanda Che cos'è un sistema lineare e che cos'è la sua matrice completa?
Un insieme di $k$ equazioni di primo grado nelle stesse $n$ incognite, con coefficienti e termini noti in un campo $\K$. La matrice completa $C = (A \mid b)$ è la matrice $k \times (n + 1)$ che ha a sinistra i coefficienti $a_{ij}$ (riga = equazione, colonna = incognita) e nell'ultima colonna i termini noti $b_i$.
:::

::: domanda Che cos'è l'insieme $S$ delle soluzioni?
L'insieme di tutti i vettori $x \in \K^n$ che rendono vere tutte le equazioni del sistema insieme. Può essere vuoto, avere un solo elemento o averne infiniti.
:::

::: domanda Quali sono le tre mosse di Gauss?
(I) scambiare due righe, $R_i \leftrightarrow R_j$; (II) moltiplicare una riga per $\lambda \neq 0$, $R_i \to \lambda R_i$; (III) sommare a una riga un multiplo di un'altra riga, $R_i \to R_i + \lambda R_j$ con $j \neq i$ e $\lambda$ qualsiasi.
:::

::: domanda Perché nella mossa (II) serve $\lambda \neq 0$?
Perché moltiplicando per $0$ l'equazione diventa $0 = 0$ e si perde l'informazione che conteneva: le soluzioni possono aumentare. Con $\lambda \neq 0$ invece la mossa si annulla moltiplicando per $\frac 1\lambda$.
:::

::: domanda Perché le mosse di Gauss non cambiano le soluzioni (Proposizione 11.4)?
Perché ogni mossa trasforma equazioni vere in equazioni vere, e ogni mossa si può annullare con un'altra mossa dello stesso tipo (lo stesso scambio, la moltiplicazione per $\frac 1\lambda$, la mossa $R_i \to R_i - \lambda R_j$). Quindi un vettore risolve il sistema prima della mossa se e solo se lo risolve dopo.
:::

::: domanda Che cos'è un pivot? Quando una matrice è a scalini?
Il pivot di una riga è il suo primo elemento non nullo, leggendo da sinistra. Una matrice è a scalini se le righe nulle sono in fondo e ogni pivot sta strettamente più a destra del pivot della riga non nulla sopra.
:::

::: domanda Come funziona l'algoritmo di Gauss?
(1) Si cerca un elemento non nullo nella prima colonna e con uno scambio lo si porta in alto; se la colonna è tutta nulla si passa alla successiva. (2) Si mettono zeri sotto il pivot con le mosse $R_i \to R_i - \frac{C_{i1}}{C_{11}} R_1$. (3) Si ripete sulla sottomatrice senza la prima riga e la prima colonna.
:::

::: domanda Che cosa aggiunge l'algoritmo di Gauss–Jordan?
Dopo la forma a scalini, mette zeri anche sopra i pivot (mosse III) e rende tutti i pivot uguali a $1$ (mosse II). Dalla forma ridotta le soluzioni si leggono senza altri conti.
:::

::: domanda Come si riconosce dalla forma a scalini che un sistema non ha soluzioni?
C'è un pivot nella colonna dei termini noti, cioè una riga $(0, \dots, 0 \mid c)$ con $c \neq 0$: rappresenta l'equazione $0 = c$, impossibile. Allora $S = \emptyset$.
:::

::: domanda Se non c'è un pivot nell'ultima colonna, come si scrivono le soluzioni?
Si dà un parametro $t_1, t_2, \dots$ a ogni incognita la cui colonna non ha pivot; dalle righe si ricavano le incognite con il pivot, portando i parametri a destra dell'uguale. I parametri sono $n - r$, dove $n$ è il numero di incognite e $r$ il numero di pivot; se $r = n$ la soluzione è una sola.
:::

::: domanda Che differenza c'è tra una riga $(0, 0, 0 \mid 0)$ e una riga $(0, 0, 0 \mid 3)$?
La prima dice $0 = 0$, sempre vera: non toglie soluzioni e si può ignorare. La seconda dice $0 = 3$, sempre falsa: il sistema non ha soluzioni.
:::

::: domanda Perché non si possono fare insieme $R_1 \to R_1 - R_2$ e $R_2 \to R_2 - R_1$?
Perché la seconda mossa userebbe la riga $R_1$ vecchia, che nel frattempo è cambiata: il risultato non corrisponde a una sequenza di mosse di Gauss e si possono perdere equazioni (le due righe nuove sono una l'opposta dell'altra). Dopo ogni mossa si lavora con le righe nuove.
:::

## Glossario

```glossario
Sistema lineare | Insieme di $k$ equazioni di primo grado nelle stesse $n$ incognite, con coefficienti e termini noti in un campo $\K$.
Coefficiente $a_{ij}$ | Il numero che moltiplica l'incognita $x_j$ nell'equazione $i$.
Termine noto $b_i$ | Il numero a destra dell'uguale nell'equazione $i$.
Matrice dei coefficienti $A$ | La matrice $k \times n$ dei coefficienti $a_{ij}$.
Vettore dei termini noti $b$ | Il vettore colonna $(b_1, \dots, b_k)$.
Matrice completa $C = (A \mid b)$ | La matrice $k \times (n + 1)$ formata da $A$ con la colonna $b$ aggiunta a destra.
Soluzione | Un vettore di $\K^n$ che rende vere tutte le equazioni del sistema.
Insieme delle soluzioni $S$ | Il sottoinsieme di $\K^n$ di tutte le soluzioni; può essere vuoto.
Mosse di Gauss | Scambiare due righe; moltiplicare una riga per $\lambda \neq 0$; sommare a una riga un multiplo di un'altra riga.
Pivot | Il primo elemento non nullo di una riga.
Matrice a scalini | Matrice con le righe nulle in fondo e ogni pivot strettamente più a destra del pivot della riga sopra.
Sostituzione all'indietro | Risolvere un sistema a scalini partendo dall'ultima equazione e risalendo.
Algoritmo di Gauss | Procedimento che porta qualsiasi matrice a scalini, sistemando una colonna alla volta.
Algoritmo di Gauss–Jordan | Gauss, più zeri sopra i pivot e pivot uguali a 1.
Forma a scalini ridotta | Il risultato di Gauss–Jordan: pivot uguali a 1, unici elementi non nulli della loro colonna.
Variabile libera (parametro) | Incognita la cui colonna non contiene un pivot: può assumere qualsiasi valore.
Sistema impossibile | Sistema senza soluzioni ($S = \emptyset$); nella forma a scalini ha un pivot nell'ultima colonna.
```

## Checklist

```checklist
- So scrivere la matrice completa di un sistema, mettendo in ordine le incognite, gli zeri e i termini noti.
- So elencare le tre mosse di Gauss con le loro condizioni ($\lambda \neq 0$ nella II, $j \neq i$ nella III).
- So spiegare perché le mosse di Gauss non cambiano l'insieme delle soluzioni.
- So trovare i pivot e dire se una matrice è a scalini.
- So applicare l'algoritmo di Gauss, anche quando $C_{11} = 0$ o una colonna è tutta nulla.
- So completare con Gauss–Jordan: zeri sopra i pivot e pivot uguali a 1.
- So riconoscere un sistema impossibile dalla riga $(0, \dots, 0 \mid c)$ con $c \neq 0$.
- So scrivere tutte le soluzioni con i parametri liberi, uno per ogni colonna di $A$ senza pivot.
- So rispondere in pochi minuti al quiz «quante soluzioni?» contando pivot e incognite.
- So controllare una soluzione sostituendola nelle equazioni di partenza.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 11 «Sistemi Lineari I», pp. 50–55: le sezioni 11.A–11.E sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizione ed esempi mantengono la loro numerazione (Definizioni 11.1, 11.2 e 11.5, Proposizione 11.4, Esempi 11.3 e 11.6–11.10, Esercizio 11.11).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §3.1 «Algoritmi di risoluzione» (pp. 79–85), da cui vengono anche l'Esempio 3.1.2, la forma vettoriale delle soluzioni e l'osservazione sulla libertà nella scelta delle mosse.
- **Appelli d'esame** di Algebra lineare 2023/24–2025/26 con soluzioni ufficiali (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): riportate le domande 10 del 24/01/2024, 1 del 02/09/2025 e 6 del 15/01/2026; citate le domande sul numero di soluzioni degli altri appelli e la domanda 6 del 10/07/2024. Le soluzioni qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (le tre situazioni nel piano, i trucchi per i conti a mano, l'unicità della forma ridotta, la forma vettoriale delle soluzioni, gli esercizi non numerati) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
