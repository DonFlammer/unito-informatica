---
corso: MDAG
modulo: AG
lezione: L08
titolo: Matrici I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L08
descrizione: >-
  Appunti della lezione L08 di Algebra lineare e Geometria (MDAG, parte 2): trasposta di una matrice, matrici
  simmetriche, rango per righe e per colonne, prodotto riga per colonna e sue proprietà, traccia, con quiz nello
  stile dell'esame ed esercizi svolti.
lede: >-
  Quattro cose che si possono fare con una tabella di numeri: girarla, contare quante colonne dicono davvero
  qualcosa di nuovo, moltiplicarla per un'altra tabella e sommare i numeri della sua diagonale. Sono i conti che
  trovi in quasi ogni quiz d'esame, spesso con un tranello.
materiale: dispense
scheda:
  Dispense: lezione 8 · pp. 36–40
  Libro: Martelli, §2.3.10, §3.2.3, §3.2.6, §3.4.1–3.4.5 e §4.4.5
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 8 «Matrici I»; B. Martelli, Geometria e algebra lineare, §2.3.10, §3.2.3, §3.2.6, §3.4.1–3.4.5 e §4.4.5
file_en: L08_matrices_1.html
appunti_html: appunti/MDAG/L08_matrici_1.html
genera_html: true
---

## In breve

- Una **matrice** è una tabella di numeri. La sua **taglia** si scrive mettendo prima il numero delle righe e poi quello delle colonne: una matrice «2 per 3» ha 2 righe e 3 colonne.
- La **trasposta** è la stessa tabella girata: le righe diventano colonne e le colonne diventano righe. Una matrice quadrata che girata resta uguale si chiama **simmetrica**.
- Il **rango** conta quante colonne dicono davvero qualcosa di nuovo, cioè non si ottengono mescolando le altre. Se conti le righe al posto delle colonne viene lo stesso numero.
- Il **prodotto riga per colonna** funziona come il conto della spesa: quantità per prezzi, poi si somma. Si può fare solo se le colonne della prima matrice sono tante quante le righe della seconda.
- Nel prodotto **l'ordine conta**: se scambi le due matrici, di solito il risultato cambia. E un prodotto può dare una tabella di soli zeri anche se nessuna delle due matrici è fatta di soli zeri.
- La **traccia** di una matrice quadrata è la somma dei numeri sulla diagonale. Se scambi le due matrici di un prodotto, la traccia resta la stessa.
- All'esame trovi quasi sempre tre domande su questa lezione: «quale identità vale?» tra due prodotti, la traccia di un prodotto e un rango da calcolare.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Le matrici: tabelle di numeri (p. 36)

Una matrice è una tabella con dei numeri dentro. Questa sezione ripassa come si legge e come si scrive: è quello che le dispense ricordano all'inizio della lezione, prima delle operazioni nuove.

Partiamo da un esempio. Anna e Bruno vanno in cartoleria. Anna compra 2 quaderni e 3 penne. Bruno compra 1 quaderno e 5 penne. Tutto questo sta in una tabella.

| | quaderni | penne |
|---|---|---|
| Anna | 2 | 3 |
| Bruno | 1 | 5 |

Ora togli le scritte e tieni solo i numeri, chiusi tra due parentesi tonde grandi:

$$\begin{pmatrix} 2 & 3 \\ 1 & 5 \end{pmatrix}$$

Questa è una **matrice**: una tabella rettangolare di numeri. A una matrice si dà un nome con una lettera maiuscola, per esempio $A$.

### Righe, colonne e taglia

Le **righe** sono le file orizzontali: si leggono da sinistra a destra. Le **colonne** sono le file verticali: si leggono dall'alto in basso.

Nella matrice di Anna e Bruno la prima riga contiene 2 e 3. La seconda riga contiene 1 e 5. La prima colonna contiene 2 e 1. La seconda colonna contiene 3 e 5.

La **taglia** di una matrice dice quante righe e quante colonne ha. Si scrive con il segno $\times$, che qui si legge «per». La matrice di Anna e Bruno ha 2 righe e 2 colonne: è una matrice $2 \times 2$, «due per due».

Guarda quest'altra matrice:

$$\begin{pmatrix} 3 & 0 & -1 \\ 2 & 5 & 4 \end{pmatrix}$$

Ha 2 righe e 3 colonne. Quindi è una matrice $2 \times 3$, «due per tre».

> [!TRAPPOLA] Prima le righe, poi le colonne
> Nella taglia il primo numero è sempre quello delle righe. Una matrice $2 \times 3$ ha 2 righe e 3 colonne. Una matrice $3 \times 2$ ha 3 righe e 2 colonne: è un'altra cosa.

Per parlare di una matrice qualsiasi le dispense scrivono «matrice $m \times n$». Le lettere $m$ e $n$ stanno al posto di due numeri: $m$ è il numero delle righe, $n$ è il numero delle colonne.

Una matrice con tante righe quante colonne si chiama **quadrata**: per esempio una $2 \times 2$ oppure una $3 \times 3$. Una matrice fatta di soli zeri si chiama **matrice nulla** e si indica con $0$, come il numero.

### L'indirizzo di ogni numero

Ogni numero della tabella ha un indirizzo: la riga e la colonna in cui si trova. Funziona come al cinema: fila 2, posto 3.

Diamo un nome alla matrice di prima:

$$A = \begin{pmatrix} 3 & 0 & -1 \\ 2 & 5 & 4 \end{pmatrix}$$

Il numero che sta nella riga 2 e nella colonna 3 è il 4. Si scrive così:

$$a_{23} = 4$$

Si legge «a due tre», non «a ventitré». I due numerini in basso si chiamano **indici**. Sono l'indirizzo della casella: **il primo indice è la riga, il secondo è la colonna**. La lettera è minuscola perché indica un numero dentro la matrice che si chiama $A$.

Un altro esempio: $a_{12}$ è il numero nella riga 1 e nella colonna 2. Nella matrice qui sopra è lo 0.

Per una casella qualsiasi le dispense scrivono $a_{ij}$. Vuol dire: il numero nella riga $i$ e nella colonna $j$. Le lettere $i$ e $j$ stanno al posto dei due numeri dell'indirizzo. A volte le dispense scrivono $A_{ij}$, con la lettera maiuscola: è la stessa cosa.

### I nomi delle righe e delle colonne

Anche una riga intera e una colonna intera hanno un nome.

- La riga numero 2 si scrive $A_2$, con l'indice **in basso**.
- La colonna numero 3 si scrive $A^3$, con l'indice **in alto**.

Nella matrice $A$ di prima la riga $A_2$ contiene i numeri 2, 5 e 4. La colonna $A^3$ contiene $-1$ sopra e 4 sotto.

> [!TRAPPOLA] Un numero in alto non è sempre una potenza
> In questa lezione $A^3$ può voler dire «la terza colonna di $A$». Più avanti la stessa scrittura vorrà dire «$A$ moltiplicata per sé stessa tre volte». Di solito la frase intorno chiarisce quale dei due significati vale. In questi appunti, quando c'è il rischio di confondersi, trovi scritto «la colonna 3» a parole.

Una riga è una lista ordinata di numeri. Anche una colonna lo è. Le liste ordinate di numeri le conosci già: sono i **vettori** della lezione L05. Quindi ogni riga e ogni colonna di una matrice è un vettore.

Conta quanti numeri ci sono in ciascuna.

- Una **colonna** ha un numero per ogni riga della matrice. In una matrice con 2 righe, ogni colonna è un vettore con 2 numeri.
- Una **riga** ha un numero per ogni colonna della matrice. In una matrice con 3 colonne, ogni riga è un vettore con 3 numeri.

> [!ESEMPIO] · Leggere una matrice
> $$A = \begin{pmatrix} 3 & 0 & -1 \\ 2 & 5 & 4 \end{pmatrix}$$
> **La taglia.** Le righe sono 2, le colonne sono 3. Quindi $A$ è una matrice $2 \times 3$.
>
> **Due caselle.**
>
> - $a_{23}$: riga 2, colonna 3. Nella seconda riga il terzo numero è 4. Quindi $a_{23} = 4$.
> - $a_{12}$: riga 1, colonna 2. Nella prima riga il secondo numero è 0. Quindi $a_{12} = 0$.
>
> **Una riga e una colonna.** La seconda riga è $A_2 = (2, 5, 4)$. La terza colonna è
> $$A^3 = \begin{pmatrix} -1 \\ 4 \end{pmatrix}.$$
>
> **Quanti numeri hanno.** Ogni colonna ha 2 numeri, tanti quante sono le righe: le colonne sono vettori di $\R^2$. Ogni riga ha 3 numeri, tanti quante sono le colonne: le righe sono vettori di $\R^3$. La scrittura $\R^2$ si legge «erre due» e indica tutti i vettori fatti di 2 numeri reali. $\R^3$ indica quelli fatti di 3 numeri reali (lezione L05).

### Una matrice qualsiasi, scritta con le lettere

Quando non si vuole parlare di una matrice precisa ma di una matrice qualsiasi, al posto dei numeri si mettono delle lettere con gli indici. Le dispense scrivono così una matrice con $m$ righe e $n$ colonne:

$$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}$$

**Come si legge.** È una tabella di cui sono scritti solo i quattro angoli.

- In alto a sinistra c'è $a_{11}$: riga 1, colonna 1.
- In alto a destra c'è $a_{1n}$: riga 1, ultima colonna. L'ultima colonna è la numero $n$, perché le colonne sono $n$.
- In basso a sinistra c'è $a_{m1}$: ultima riga, colonna 1. L'ultima riga è la numero $m$.
- In basso a destra c'è $a_{mn}$: ultima riga, ultima colonna.
- I puntini vogliono dire «e avanti così»: in mezzo ci sono tutte le altre caselle, che non si scrivono per non riempire la pagina.

Tutte le matrici della stessa taglia si mettono in un insieme. Un insieme è un sacchetto di oggetti (lezione L01). Questo sacchetto ha un nome:

$$M(m, n, \K)$$

**Come si legge.** «Le matrici $m$ per $n$ a coefficienti in $\K$». Un pezzo alla volta:

- la $M$ sta per «matrici»;
- $m$ e $n$ sono la taglia: righe e colonne;
- i **coefficienti** sono i numeri scritti nella tabella;
- $\K$ dice che tipo di numeri sono. Le dispense scrivono $\K$ per dire «$\R$ oppure $\C$», cioè i numeri reali oppure i numeri complessi. In questa lezione puoi pensare sempre ai numeri reali.

Un esempio: $M(2, 3, \R)$ è l'insieme di tutte le matrici $2 \times 3$ fatte di numeri reali. La matrice $A$ dell'esempio sta lì dentro. Con il simbolo $\in$, che si legge «appartiene a», si scrive $A \in M(2, 3, \R)$.

Per le matrici quadrate, che hanno $n$ righe e $n$ colonne, basta un numero solo: si scrive $M(n, \K)$, o ancora più corto $M(n)$. Per esempio $M(2)$ sono le matrici $2 \times 2$.

Una matrice con una sola colonna è un **vettore colonna**: un vettore scritto in verticale. Per questo le matrici con $m$ righe e 1 colonna sono la stessa cosa dei vettori con $m$ numeri, che si indicano con $\K^m$.

### Le due operazioni che conosci già

Le dispense ricordano le due operazioni della lezione L06. Tutte e due si fanno **casella per casella**.

**Sommare due matrici della stessa taglia.** Sommi i numeri che stanno nello stesso posto.

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & -2 \\ 5 & 1 \end{pmatrix} = \begin{pmatrix} 1 + 0 & 2 + (-2) \\ 3 + 5 & 4 + 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 8 & 5 \end{pmatrix}$$

**Moltiplicare una matrice per un numero.** Moltiplichi ogni casella per quel numero.

$$3 \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 \cdot 1 & 3 \cdot 2 \\ 3 \cdot 3 & 3 \cdot 4 \end{pmatrix} = \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix}$$

Il numero davanti alla matrice si chiama **scalare**, cioè un numero normale come 3 o $-2$. Le dispense lo indicano con la lettera greca $\lambda$, che si legge «lambda».

Con le lettere, le due regole si scrivono così:

$$(A + B)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda A)_{ij} = \lambda a_{ij}.$$

**Come si legge.** La prima: nella casella di riga $i$ e colonna $j$ della somma c'è il numero di $A$ più il numero di $B$ che stanno in quella stessa casella. La seconda: nella casella di riga $i$ e colonna $j$ di $\lambda A$ c'è il numero di $A$ moltiplicato per $\lambda$.

### Quanti numeri servono per fare una matrice

Con queste due operazioni le matrici si comportano come i vettori: si sommano e si moltiplicano per un numero, con le solite regole. Per questo le dispense ricordano che $M(m, n, \K)$ è uno **spazio vettoriale** (lezione L05).

Ogni spazio vettoriale ha una **dimensione**: quanti numeri servono per dire quale dei suoi elementi hai in mano (lezione L07). Per scegliere una matrice $2 \times 2$ servono 4 numeri, uno per casella. Infatti ogni matrice $2 \times 2$ si costruisce con quattro mattoni, ognuno con un solo 1 e il resto zeri:

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = 1 \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + 2 \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} + 3 \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} + 4 \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$

I mattoni sono 4, cioè 2 per 2. Quindi lo spazio delle matrici $2 \times 2$ ha dimensione 4.

Per una taglia qualsiasi il conto è lo stesso: le caselle sono $m$ per $n$, quindi la dimensione di $M(m, n, \K)$ è $mn$. È l'Esercizio 7.13 delle dispense. Il mattone con l'1 nella casella di riga $i$ e colonna $j$ si indica con $e_{ij}$.

### Le quattro operazioni nuove

Ecco che cosa arriva in questa lezione. La tabella ti serve come mappa: a ogni riga corrisponde una delle prossime sezioni.

| Operazione | Simbolo | Quando si può fare | Che cosa viene fuori |
|---|---|---|---|
| trasposta | ${}^tA$ | sempre | una matrice con righe e colonne scambiate |
| rango | $\rk(A)$ | sempre | un numero intero |
| prodotto | $AB$ | solo se le colonne di $A$ sono tante quante le righe di $B$ | una matrice |
| traccia | $\tr A$ | solo se $A$ è quadrata | un numero |

::: prova Che taglia ha la matrice $\begin{pmatrix} 1 & 0 \\ 2 & 7 \\ 5 & 3 \end{pmatrix}$? Quanto valgono $a_{21}$ e $a_{32}$?
Ha 3 righe e 2 colonne: è una matrice $3 \times 2$.

$a_{21}$ è nella riga 2 e nella colonna 1: vale 2.

$a_{32}$ è nella riga 3 e nella colonna 2: vale 3.
:::

::: prova Nella stessa matrice, chiamala $A$: quali numeri contiene la riga $A_3$? E la colonna $A^1$?
La riga $A_3$ è la terza riga: contiene 5 e 3.

La colonna $A^1$ è la prima colonna: contiene 1, 2 e 5, dall'alto in basso.
:::

::: prova Quanto fa $\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} + \begin{pmatrix} 1 & 1 \\ 4 & -3 \end{pmatrix}$? E quanto fa $2 \begin{pmatrix} 1 & -1 \\ 0 & 4 \end{pmatrix}$?
La somma si fa casella per casella: $2 + 1 = 3$, $1 + 1 = 2$, $0 + 4 = 4$, $3 + (-3) = 0$. Il risultato è $\begin{pmatrix} 3 & 2 \\ 4 & 0 \end{pmatrix}$.

Nel multiplo ogni casella si moltiplica per 2: $2 \cdot 1 = 2$, $2 \cdot (-1) = -2$, $2 \cdot 0 = 0$, $2 \cdot 4 = 8$. Il risultato è $\begin{pmatrix} 2 & -2 \\ 0 & 8 \end{pmatrix}$.
:::

> [!RICORDA]
> - Una **matrice** è una tabella di numeri. La taglia $m \times n$ dice: $m$ righe e $n$ colonne. Prima le righe.
> - $a_{ij}$ è il numero nella riga $i$ e nella colonna $j$: primo indice la riga, secondo la colonna.
> - La riga numero $i$ si scrive $A_i$ (indice in basso), la colonna numero $j$ si scrive $A^j$ (indice in alto).
> - Somma e multiplo si fanno casella per casella.

## La trasposta: scambiare righe e colonne (p. 36)

La stessa tabella si può scrivere in due versi.

Torna agli acquisti di Anna e Bruno. Avevamo messo le persone sulle righe e gli articoli sulle colonne.

| | quaderni | penne |
|---|---|---|
| Anna | 2 | 3 |
| Bruno | 1 | 5 |

Nessuno vieta di fare il contrario: gli articoli sulle righe e le persone sulle colonne.

| | Anna | Bruno |
|---|---|---|
| quaderni | 2 | 1 |
| penne | 3 | 5 |

Le informazioni sono le stesse: Anna ha sempre 2 quaderni e 3 penne. È cambiato solo il verso della tabella. Quello che prima era una riga, «Anna: 2 e 3», adesso è una colonna.

Con i soli numeri, la prima tabella e la seconda sono queste due matrici:

$$\begin{pmatrix} 2 & 3 \\ 1 & 5 \end{pmatrix} \qquad\qquad \begin{pmatrix} 2 & 1 \\ 3 & 5 \end{pmatrix}$$

La seconda matrice si chiama **trasposta** della prima.

> [!IDEA]
> **Trasporre** una matrice vuol dire scambiare le righe con le colonne. La prima riga diventa la prima colonna, la seconda riga diventa la seconda colonna, e avanti così.

La trasposta di una matrice $A$ si scrive ${}^tA$, con una piccola $t$ in alto **a sinistra**. Si legge «$A$ trasposta». In altri libri trovi la lettera in alto a destra, maiuscola o minuscola: è la stessa cosa.

### Un esempio passo per passo

Prendiamo una matrice che non è quadrata, così si vede meglio che cosa succede.

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$$

Ha 2 righe e 3 colonne. Costruiamo la trasposta una riga alla volta.

1. La prima riga di $A$ contiene 1, 2, 3. La scrivo in verticale: è la prima colonna della trasposta.
2. La seconda riga di $A$ contiene 4, 5, 6. La scrivo in verticale: è la seconda colonna della trasposta.
3. Le righe di $A$ sono finite, quindi la trasposta è completa.

$${}^tA = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}$$

Guarda che cosa è cambiato.

- **La taglia si è scambiata.** La matrice di partenza era $2 \times 3$, la trasposta è $3 \times 2$. Le 2 righe sono diventate 2 colonne, le 3 colonne sono diventate 3 righe.
- **Gli indirizzi si sono scambiati.** Nella matrice di partenza il 6 stava nella riga 2 e nella colonna 3. Nella trasposta sta nella riga 3 e nella colonna 2.

C'è un altro modo di vedere la stessa mossa: ribaltare la tabella attorno alla diagonale che scende dall'angolo in alto a sinistra. I numeri su quella diagonale, qui l'1 e il 5, restano dove sono. Tutti gli altri saltano dall'altra parte.

### Come lo scrivono le dispense

Ecco la definizione con le parole e i simboli delle dispense.

> [!DEF] 8.1 · Trasposta
> La **trasposta** di una matrice $A \in M(m, n, \K)$ è la matrice
> $${}^tA \in M(n, m, \K)$$
> definita scambiando righe e colonne, cioè:
> $$({}^tA)_{ij} = A_{ji}.$$

**Come si legge.**

- $A \in M(m, n, \K)$: la matrice $A$ ha $m$ righe e $n$ colonne.
- ${}^tA \in M(n, m, \K)$: le due lettere si sono scambiate. La trasposta ha $n$ righe e $m$ colonne.
- L'ultima riga è la regola degli indirizzi. A sinistra c'è il numero che la trasposta ha nella riga $i$ e nella colonna $j$. A destra c'è il numero che $A$ ha nella riga $j$ e nella colonna $i$. I due indici sono scambiati.

Con i numeri dell'esempio di prima la regola degli indirizzi diventa:

$$({}^tA)_{32} = A_{23} = 6$$

A parole: il numero che la trasposta ha nella riga 3 e nella colonna 2 è quello che $A$ ha nella riga 2 e nella colonna 3, cioè 6.

> [!ESEMPIO] 8.2 · Una matrice $3 \times 2$ e la sua trasposta
> Le dispense partono da questa matrice, che ha 3 righe e 2 colonne:
> $$A = \begin{pmatrix} 2 & 1 \\ -1 & 0 \\ 5 & 7 \end{pmatrix}$$
> Questa volta costruiamo la trasposta guardando le colonne.
>
> 1. La prima colonna di $A$, letta dall'alto in basso, contiene $2, -1, 5$. Diventa la prima riga della trasposta.
> 2. La seconda colonna di $A$ contiene $1, 0, 7$. Diventa la seconda riga della trasposta.
>
> $${}^tA = \begin{pmatrix} 2 & -1 & 5 \\ 1 & 0 & 7 \end{pmatrix}$$
> $A$ è $3 \times 2$, la sua trasposta è $2 \times 3$.
>
> Controllo di due caselle con la regola degli indirizzi.
>
> - $({}^tA)_{13}$ deve essere uguale ad $A_{31}$. In $A$, nella riga 3 e colonna 1, c'è 5. In ${}^tA$, nella riga 1 e colonna 3, c'è 5. Torna.
> - $({}^tA)_{21}$ deve essere uguale ad $A_{12}$. In $A$, nella riga 1 e colonna 2, c'è 1. In ${}^tA$, nella riga 2 e colonna 1, c'è 1. Torna.

Nel primo esempio abbiamo trasformato le righe in colonne, nel secondo le colonne in righe. È la stessa mossa vista da due lati, e il risultato non cambia.

::: prova Scrivi la trasposta di $\begin{pmatrix} 1 & 0 & 2 \\ 3 & 1 & 4 \end{pmatrix}$. Che taglia ha?
La prima riga, che contiene $1, 0, 2$, diventa la prima colonna. La seconda riga, che contiene $3, 1, 4$, diventa la seconda colonna.

La trasposta è $\begin{pmatrix} 1 & 3 \\ 0 & 1 \\ 2 & 4 \end{pmatrix}$. La matrice di partenza era $2 \times 3$, la trasposta è $3 \times 2$.
:::

### Somme e multipli: prima o dopo è lo stesso

Se devi sommare due matrici e poi trasporre il risultato, puoi anche fare al contrario: prima trasporre e poi sommare. Vediamolo con i numeri. Prendiamo due matrici:

$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \qquad B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

**Prima strada: sommo, poi traspongo.**

1. La somma, casella per casella:
   $$A + B = \begin{pmatrix} 1 & 3 \\ 4 & 4 \end{pmatrix}$$
2. La trasposta della somma (le righe diventano colonne):
   $${}^t(A + B) = \begin{pmatrix} 1 & 4 \\ 3 & 4 \end{pmatrix}$$

**Seconda strada: traspongo, poi sommo.**

1. Le due trasposte:
   $${}^tA = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} \qquad {}^tB = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$
2. La loro somma, casella per casella:
   $${}^tA + {}^tB = \begin{pmatrix} 1 & 4 \\ 3 & 4 \end{pmatrix}$$

Le due strade portano alla stessa matrice. Il motivo: trasporre sposta le caselle, sommare lavora casella per casella. Spostare e poi sommare, oppure sommare e poi spostare, mette gli stessi numeri negli stessi posti.

Lo stesso succede con i multipli. Moltiplichiamo la matrice $A$ di prima per 3, in due modi.

- Prima moltiplico per 3 e poi traspongo:
  $$3A = \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix} \qquad \text{trasposta:} \qquad \begin{pmatrix} 3 & 9 \\ 6 & 12 \end{pmatrix}$$
- Prima traspongo e poi moltiplico per 3:
  $${}^tA = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} \qquad \text{per 3:} \qquad \begin{pmatrix} 3 & 9 \\ 6 & 12 \end{pmatrix}$$

Stesso risultato. In breve: la trasposta **rispetta le somme e i multipli**. Dalla lezione L14 una trasformazione con questa proprietà si chiamerà *lineare*.

### Matrici che girate restano uguali

Alcune matrici quadrate, quando le giri, restano identiche. Guarda questa:

$$S = \begin{pmatrix} 1 & 4 & 5 \\ 4 & 2 & 6 \\ 5 & 6 & 3 \end{pmatrix}$$

La prima riga contiene 1, 4, 5. Anche la prima colonna contiene 1, 4, 5. La seconda riga contiene 4, 2, 6, e la seconda colonna pure. La terza riga contiene 5, 6, 3, e la terza colonna pure. Ogni riga è uguale alla colonna con lo stesso numero. Quindi scambiare righe e colonne non cambia niente: la trasposta di $S$ è ancora $S$.

Una matrice quadrata fatta così si chiama **simmetrica**. La diagonale che scende da sinistra a destra fa da specchio: ogni numero sopra la diagonale ha un gemello sotto, nella casella ribaltata.

L'hai già incontrata nella lezione L06 (Definizione 6.3), scritta con gli indici: $a_{ij} = a_{ji}$ in ogni casella. A parole: il numero di riga $i$ e colonna $j$ è uguale al numero di riga $j$ e colonna $i$.

Esiste anche il caso «a specchio, ma con il segno cambiato»:

$$N = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix}$$

Qui ogni numero ha, dall'altra parte della diagonale, il suo opposto. Una matrice quadrata fatta così si chiama **antisimmetrica**. Con gli indici: $a_{ij} = -a_{ji}$ in ogni casella. Se la giri, ottieni la stessa matrice con tutti i segni cambiati.

> [!ESEMPIO] · Una simmetrica e un'antisimmetrica
> **La matrice $S$ è simmetrica.** Controllo le tre coppie di caselle fuori dalla diagonale.
>
> | Casella sopra la diagonale | Numero | Casella ribaltata | Numero |
> |---|---|---|---|
> | riga 1, colonna 2 | $4$ | riga 2, colonna 1 | $4$ |
> | riga 1, colonna 3 | $5$ | riga 3, colonna 1 | $5$ |
> | riga 2, colonna 3 | $6$ | riga 3, colonna 2 | $6$ |
>
> I numeri sono uguali a coppie, quindi ${}^tS = S$.
>
> **La matrice $N$ è antisimmetrica.** Stesso controllo.
>
> | Casella sopra la diagonale | Numero | Casella ribaltata | Numero |
> |---|---|---|---|
> | riga 1, colonna 2 | $2$ | riga 2, colonna 1 | $-2$ |
> | riga 1, colonna 3 | $-1$ | riga 3, colonna 1 | $1$ |
> | riga 2, colonna 3 | $3$ | riga 3, colonna 2 | $-3$ |
>
> I numeri sono opposti a coppie, quindi ${}^tN = -N$. La scrittura $-N$ indica la matrice $N$ con tutti i segni cambiati.
>
> **La diagonale di $N$ è fatta di zeri, e non è un caso.** Una casella sulla diagonale, ribaltata, resta sé stessa. Quindi il suo numero deve essere uguale al proprio opposto. L'unico numero uguale al proprio opposto è lo 0. Con gli indici: da $a_{ii} = -a_{ii}$ viene $2a_{ii} = 0$, cioè $a_{ii} = 0$.

### Le proprietà, come le scrivono le dispense

Tutto quello che abbiamo visto sta in tre righe delle dispense.

> [!PROP] · Proprietà della trasposta (p. 36)
> - ${}^t(A + B) = {}^tA + {}^tB$, $\quad {}^t(\lambda A) = \lambda({}^tA)$.
> - Se $A \in M(n)$, allora anche ${}^tA \in M(n)$.
> - $A \in M(n)$ è simmetrica $\iff {}^tA = A$; $A \in M(n)$ è antisimmetrica $\iff {}^tA = -A$.

**Come si legge.**

- **Prima riga.** La trasposta di una somma è la somma delle trasposte. La trasposta di un multiplo è il multiplo della trasposta. La lettera $\lambda$ («lambda») sta per un numero qualsiasi.
- **Seconda riga.** $A \in M(n)$ vuol dire che $A$ è quadrata, con $n$ righe e $n$ colonne. La riga dice che anche la sua trasposta è quadrata, della stessa taglia. In più i numeri sulla diagonale non si muovono: la loro casella, ribaltata, è la stessa casella.
- **Terza riga.** Il simbolo $\iff$ si legge «se e solo se», cioè «esattamente quando». Una matrice quadrata è simmetrica esattamente quando è uguale alla sua trasposta. È antisimmetrica esattamente quando la sua trasposta è la matrice con tutti i segni cambiati.

La terza riga è quella che serve di più. Per controllare se una matrice è simmetrica non devi ricordare formule: la giri e guardi se è rimasta uguale.

> [!OLTRE] · altre tre proprietà utili
> **Girare due volte.** Se trasponi due volte torni alla matrice di partenza: le righe diventano colonne e poi di nuovo righe. Con i simboli: ${}^t({}^tA) = A$.
>
> **La differenza tra la trasposta e la matrice.** Per una matrice quadrata, ${}^tA - A$ è la matrice nulla esattamente quando $A$ è simmetrica. Per questo alcuni problemi d'esame chiedono di calcolarla (la trovi in «Verso l'esame»). In più ${}^tA - A$ è sempre antisimmetrica.
>
> **Ogni matrice quadrata è la somma di una simmetrica e di un'antisimmetrica** (Martelli, Esempio 2.3.33). La formula è questa:
> $$A = \underbrace{\frac{A + {}^tA}2}_{\text{simmetrica}} + \underbrace{\frac{A - {}^tA}2}_{\text{antisimmetrica}}.$$
> Proviamo con una matrice $2 \times 2$ e la sua trasposta:
> $$A = \begin{pmatrix} 1 & 2 \\ 4 & 3 \end{pmatrix} \qquad {}^tA = \begin{pmatrix} 1 & 4 \\ 2 & 3 \end{pmatrix}$$
> Primo pezzo: sommo le due matrici e divido ogni casella per 2.
> $$A + {}^tA = \begin{pmatrix} 2 & 6 \\ 6 & 6 \end{pmatrix} \qquad \frac{A + {}^tA}2 = \begin{pmatrix} 1 & 3 \\ 3 & 3 \end{pmatrix}$$
> Secondo pezzo: sottraggo e divido ogni casella per 2.
> $$A - {}^tA = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix} \qquad \frac{A - {}^tA}2 = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$
> Il primo pezzo è una matrice simmetrica, il secondo è antisimmetrica. Sommati ridanno la matrice di partenza:
> $$\begin{pmatrix} 1 & 3 \\ 3 & 3 \end{pmatrix} + \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 4 & 3 \end{pmatrix}$$
> L'esercizio 5 rifà lo stesso conto con una matrice $3 \times 3$.

### Vettori scritti in riga: la piccola t

Un vettore colonna occupa tanto spazio sulla pagina: tre numeri, tre righe di testo. Per risparmiare spazio lo si scrive in riga, con una piccola $t$ davanti:

$${}^t(1, 2, 3) = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$$

La $t$ è quella della trasposta. Dice: «prendi questa riga e girala», cioè mettila in verticale.

Negli appelli questa scrittura è dappertutto. Trovi per esempio «$v_1 = {}^t(1, 0, -1)$». Vuol dire sempre la stessa cosa: il vettore **colonna** con quei numeri, letti dall'alto in basso.

::: prova La matrice $\begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$ è simmetrica? E la matrice $\begin{pmatrix} 1 & 2 \\ 3 & 1 \end{pmatrix}$?
La prima sì. Fuori dalla diagonale ci sono due caselle, una il ribaltamento dell'altra, e contengono tutte e due 2.

La seconda no. Nella riga 1 e colonna 2 c'è 2, nella riga 2 e colonna 1 c'è 3. Sono diversi.
:::

::: prova Una matrice ha taglia $2 \times 4$. Che taglia ha la sua trasposta?
$4 \times 2$. Le 2 righe diventano 2 colonne, le 4 colonne diventano 4 righe.
:::

::: prova Scrivi in verticale il vettore ${}^t(7, -2, 0)$.
È il vettore colonna $\begin{pmatrix} 7 \\ -2 \\ 0 \end{pmatrix}$: il primo numero in alto, l'ultimo in basso.
:::

> [!RICORDA]
> - La **trasposta** ${}^tA$ si ottiene scambiando righe e colonne. Una matrice $m \times n$ diventa $n \times m$.
> - La regola degli indirizzi: $({}^tA)_{ij} = A_{ji}$.
> - Una matrice quadrata è **simmetrica** se ${}^tA = A$, **antisimmetrica** se ${}^tA = -A$.
> - ${}^t(1, 2, 3)$ è un vettore colonna scritto in riga per risparmiare spazio.

## Il rango: quante colonne contano davvero (p. 37)

Una tabella può essere grande e dire poco.

Guarda il listino di una cartoleria che vende quaderni e penne in tre confezioni.

| | quaderni | penne |
|---|---|---|
| confezione piccola | 1 | 2 |
| confezione media | 2 | 4 |
| confezione grande | 3 | 6 |

Le righe sono tre, ma la seconda e la terza non dicono niente di nuovo. La confezione media è fatta di due confezioni piccole. La confezione grande è fatta di tre confezioni piccole. Chi conosce la prima riga può ricostruire le altre due.

Adesso guarda le colonne. In ogni confezione le penne sono il doppio dei quaderni. Quindi la colonna delle penne è la colonna dei quaderni moltiplicata per 2. Anche qui: chi conosce la prima colonna può ricostruire la seconda.

In questa tabella c'è **un solo** pezzo di informazione, sia guardando le righe sia guardando le colonne. Il numero che conta i pezzi di informazione di una matrice si chiama **rango**. Il rango di questa tabella è 1.

> [!IDEA]
> Il **rango** di una matrice è il numero di colonne che dicono davvero qualcosa di nuovo: quelle che non si possono ottenere mescolando le altre. Se al posto delle colonne conti le righe, viene lo stesso numero.

Il rango serve in quasi tutto il resto del corso. Nelle lezioni L11 e L12 dice quante soluzioni ha un sistema di equazioni. Nella lezione L14 dice quanto «spazio» riesce a produrre una macchina che trasforma vettori. All'esame c'è quasi sempre una domanda che chiede il rango di una matrice.

Per dire in modo preciso che cosa vuol dire «mescolare» e «qualcosa di nuovo» servono quattro parole delle lezioni precedenti.

> [!RIPASSO] quattro parole delle lezioni L06 e L07
> **Combinazione lineare** (lezione L06). È una ricetta: prendi dei vettori, moltiplichi ognuno per un numero e sommi i risultati. Per esempio «2 parti del primo vettore più 3 parti del secondo»:
> $$2 \cdot (1, 0) + 3 \cdot (0, 1) = (2, 0) + (0, 3) = (2, 3)$$
>
> **Span** (lezione L06). Lo Span di alcuni vettori è l'insieme di tutto quello che si ottiene con le loro ricette. Lo Span di un solo vettore, che non sia fatto di soli zeri, contiene tutti i suoi multipli: è una retta. Lo Span di due vettori che non stanno sulla stessa retta è un piano.
>
> **Dipendenti e indipendenti** (lezione L07). Dei vettori sono **dipendenti** quando almeno uno è un doppione: si ottiene con una ricetta fatta con gli altri. Sono **indipendenti** quando nessuno è un doppione. Per due vettori il controllo è rapido: sono dipendenti esattamente quando uno è un multiplo dell'altro.
>
> **Dimensione** (lezione L07). È il numero di vettori indipendenti che servono per ottenere tutto uno spazio. Una retta ha dimensione 1, un piano ha dimensione 2, lo spazio in cui viviamo ha dimensione 3.

### Un esempio da guardare in figura

Prendiamo questa matrice:

$$A = \begin{pmatrix} 2 & 4 & -2 \\ 1 & 2 & -1 \end{pmatrix}$$

Le colonne sono tre. Ognuna ha 2 numeri, quindi è un vettore di $\R^2$: una freccia disegnata sul piano, che parte dall'origine.

| Colonna | Vettore | Confronto con la prima colonna |
|---|---|---|
| $A^1$ | $(2, 1)$ | |
| $A^2$ | $(4, 2)$ | è la prima moltiplicata per $2$ |
| $A^3$ | $(-2, -1)$ | è la prima moltiplicata per $-1$ |

Guarda la figura. Le tre frecce stanno tutte sulla stessa retta, quella tratteggiata. La seconda colonna è la prima allungata del doppio. La terza è la prima girata dalla parte opposta.

```grafico
titolo: Le tre colonne di $A$ stanno sulla stessa retta: lo spazio che generano ha dimensione 1
x: -3 5
y: -2 3
retta: 0 0 2 1 | grigio | tratteggio
vettore: 4 2 | blu | $A^2$ | ne
vettore: 2 1 | accento | spesso | $A^1$ | no
vettore: -2 -1 | viola | $A^3$ | so
```

Che cosa si ottiene con le ricette fatte con queste tre colonne? Solo multipli della prima, cioè punti di quella retta. Lo Span delle tre colonne è la retta tratteggiata. Una retta ha dimensione 1. Quindi il rango di $A$ è 1: tre colonne, ma un solo pezzo di informazione.

Per confronto, guarda una matrice con due colonne che **non** stanno sulla stessa retta:

$$B = \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}$$

```grafico
titolo: Le due colonne di $B$ puntano in direzioni diverse: insieme riempiono tutto il piano
x: -3 5
y: -2 3
vettore: 2 1 | accento | spesso | $B^1$ | ne
vettore: -1 2 | blu | $B^2$ | no
```

Qui nessuna delle due colonne è un multiplo dell'altra. Con le ricette fatte con queste due frecce si raggiunge ogni punto del piano. Lo Span delle colonne è tutto il piano, che ha dimensione 2. Quindi il rango di $B$ è 2.

### Come lo scrivono le dispense

Le dispense dicono la stessa cosa con i simboli.

> [!DEF] 8.3 · Rango
> Sia $A$ una matrice $m \times n$ a coefficienti in $\K$, con colonne $A^1, \dots, A^n$; ciascun $A^i$ è un vettore in $\K^m$. Il **rango** di $A$ (o **rango per colonne** di $A$) è la dimensione dello spazio
> $$\Span(A^1, \dots, A^n) \subset \K^m.$$
> Viene comunemente indicato con $\rk(A)$.

**Come si legge.**

- $A^1, \dots, A^n$ è l'elenco delle colonne. La prima si chiama $A^1$, l'ultima $A^n$, e sono $n$ in tutto. I numeri in alto sono indici, non potenze.
- «Ciascun $A^i$ è un vettore in $\K^m$»: ogni colonna ha $m$ numeri, uno per ogni riga della matrice.
- $\Span(A^1, \dots, A^n)$ è l'insieme di tutto quello che si ottiene mescolando le colonne con delle ricette.
- Il simbolo $\subset$ si legge «è contenuto in». Lo Span delle colonne è un pezzo di $\K^m$: può essere una retta, un piano, oppure tutto.
- $\rk(A)$ si legge «rango di $A$». Le due lettere vengono dall'inglese *rank*.

Tutta insieme: il rango è la dimensione dello spazio che le colonne riescono a riempire. Nel primo esempio le colonne riempiono solo una retta, e il rango è 1. Nel secondo riempiono tutto il piano, e il rango è 2.

### Un altro modo di dirlo: contare le colonne indipendenti

Torna alla matrice $A$ con le tre colonne sulla stessa retta. Quante colonne indipendenti riesci a scegliere, al massimo? Una sola: appena ne prendi due, una è un multiplo dell'altra. E il rango era proprio 1.

Nella matrice $B$ le due colonne sono indipendenti, e il rango era 2. Non è un caso.

> [!PROP] 8.4
> Il rango di $A$ è il massimo numero di colonne linearmente indipendenti di $A$.

**Come si legge.** «Linearmente indipendenti» è il nome completo di «indipendenti»: nessuna colonna è un doppione delle altre. Guarda tutti i gruppi di colonne indipendenti che puoi scegliere, e prendi il gruppo più numeroso. Il numero delle sue colonne è il rango.

Il perché, a parole. Se tra le colonne c'è un doppione, puoi toglierlo senza perdere niente: tutto quello che si otteneva usandolo si ottiene anche con le altre colonne. Togli un doppione alla volta. Quando non ce ne sono più, le colonne rimaste sono indipendenti e riempiono ancora lo stesso spazio di prima. Il loro numero è la dimensione di quello spazio, cioè il rango.

> [!DIM] della Proposizione 8.4
> Le dispense la ricavano «con un'osservazione della lezione 7». Ecco i passi.
>
> 1. Chiamiamo $W$ lo Span delle colonne. Le colonne **generano** $W$: ogni vettore di $W$ è una loro combinazione lineare, per come è fatto lo Span.
> 2. Se le colonne sono dipendenti, una di loro è combinazione lineare delle altre (Proposizione 7.2). La togliamo. Lo Span non cambia: ogni ricetta che usava quella colonna si riscrive usando le altre.
> 3. Ripetiamo il passo 2 finché le colonne rimaste sono indipendenti.
> 4. Le colonne rimaste sono indipendenti e generano $W$. Quindi sono una **base** di $W$ (lezione L07), e il loro numero è la dimensione di $W$, cioè $\rk(A)$.
> 5. Un gruppo di colonne indipendenti più numeroso non esiste: in uno spazio di dimensione $d$, più di $d$ vettori sono sempre dipendenti (Martelli, §2.3).
>
> Quindi il massimo numero di colonne indipendenti è proprio la dimensione di $W$. Martelli chiama questa procedura **algoritmo di estrazione** di una base da un insieme di generatori.

### Le righe al posto delle colonne

Tutto quello che abbiamo fatto con le colonne si può rifare con le righe. Torna alla matrice $A$ di prima:

$$A = \begin{pmatrix} 2 & 4 & -2 \\ 1 & 2 & -1 \end{pmatrix}$$

Le righe sono due. La prima è il doppio della seconda: $2 \cdot 1 = 2$, poi $2 \cdot 2 = 4$, poi $2 \cdot (-1) = -2$. Quindi anche tra le righe c'è un solo pezzo di informazione.

> [!DEF] 8.5 · Rango per righe
> Definiamo il **rango per righe** di $A$ come la dimensione dello spazio generato dalle righe
> $$\Span(A_1, \dots, A_m) \subset \K^n.$$
> In altre parole, il rango per righe di $A$ è il rango della trasposta ${}^tA$.

**Come si legge.**

- $A_1, \dots, A_m$ è l'elenco delle righe. Sono $m$ e hanno l'indice in basso.
- Ogni riga ha $n$ numeri, uno per ogni colonna. Per questo lo Span delle righe è contenuto in $\K^n$.
- «In altre parole»: le righe di una matrice sono le colonne della sua trasposta. Quindi contare le righe indipendenti di $A$ è come contare le colonne indipendenti di ${}^tA$.

A prima vista le righe e le colonne non hanno motivo di dare lo stesso numero. In una matrice $2 \times 5$ le colonne sono cinque vettori con 2 numeri. Le righe sono due vettori con 5 numeri. Sono oggetti diversi, che stanno in posti diversi. Eppure il conteggio viene sempre uguale.

> [!PROP] 8.6
> Per ogni matrice $A$ il rango per righe è uguale al rango per colonne. Vale allora $\rk({}^tA) = \rk(A)$.

**Come si legge.** Conta le righe indipendenti oppure le colonne indipendenti: viene lo stesso numero. La formula dice la stessa cosa usando la trasposta: una matrice e la sua trasposta hanno lo stesso rango. In pratica, quando devi calcolare un rango puoi guardare le righe oppure le colonne, come ti è più comodo.

> [!ESEMPIO] · Righe e colonne di una matrice $2 \times 5$
> $$C = \begin{pmatrix} 1 & 2 & 0 & 1 & 3 \\ 2 & 4 & 1 & 0 & 5 \end{pmatrix}$$
> **Le righe.** Sono due: $C_1 = (1, 2, 0, 1, 3)$ e $C_2 = (2, 4, 1, 0, 5)$. Sono una il multiplo dell'altra? Guardo il terzo posto: la prima riga ha 0, la seconda ha 1.
>
> - La seconda riga non è un multiplo della prima: qualunque numero moltiplicato per 0 dà 0, mai 1.
> - La prima riga non è un multiplo della seconda: per ottenere 0 da 1 dovrei moltiplicare per 0, ma allora tutta la riga diventerebbe zero.
>
> Le due righe sono indipendenti. Il rango per righe è 2.
>
> **Le colonne.** Sono cinque vettori con 2 numeri, cioè cinque frecce nel piano. Non possono essere indipendenti tutte e cinque: il piano ha dimensione 2, e lì più di due vettori sono sempre dipendenti. Ma due colonne indipendenti ci sono. Prendo la prima, che contiene 1 e 2, e la terza, che contiene 0 e 1. Guardo il numero in alto: 1 nella prima, 0 nella terza. Per lo stesso motivo di prima, nessuna delle due è un multiplo dell'altra. Il rango per colonne è 2.
>
> I due ranghi coincidono, come dice la Proposizione 8.6.

### Un tetto per il rango

C'è una conseguenza che non ha bisogno di conti. Il rango conta colonne indipendenti: non possono essere più delle colonne che ci sono. Conta anche righe indipendenti: non possono essere più delle righe che ci sono. Quindi il rango non supera né il numero delle righe né quello delle colonne. Per una matrice con $m$ righe e $n$ colonne si scrive così:

$$\rk(A) \le \min(m, n)$$

**Come si legge.** Il simbolo $\le$ si legge «minore o uguale». La scrittura $\min(m, n)$ si legge «il minimo tra $m$ e $n$»: è il più piccolo dei due numeri. Tutta insieme: il rango è al massimo il più piccolo tra il numero delle righe e il numero delle colonne.

Due esempi. Una matrice $3 \times 5$ ha rango al massimo 3. Una matrice $4 \times 2$ ha rango al massimo 2.

> [!OLTRE] · perché righe e colonne danno lo stesso rango
> Le dispense non lo dimostrano in questa lezione. Il libro di Martelli (Proposizione 3.2.20) usa le **mosse di Gauss**, che vedrai nelle lezioni L11 e L12. Sono tre modi di cambiare le righe di una matrice che lasciano uguali sia il rango per righe sia il rango per colonne. Con queste mosse si arriva a una matrice «a scalini». Lì i due ranghi si leggono a occhio e sono uguali: tutti e due valgono il numero dei **pivot**, cioè dei primi numeri diversi da zero di ogni riga.
>
> Da qui viene anche il metodo pratico che userai all'esame: **il rango è il numero di righe non nulle di una riduzione a scalini**.

### Calcolare il rango a mano

Per le matrici piccole, come quelle del quiz, spesso basta guardare bene.

> [!METODO] Il rango senza mosse di Gauss
> 1. Guarda se la matrice è fatta di soli zeri. Se sì, il rango è 0. Se c'è almeno un numero diverso da zero, il rango è almeno 1.
> 2. Scrivi il tetto: il rango non supera il più piccolo tra il numero delle righe e quello delle colonne.
> 3. Scegli se guardare le righe o le colonne. Il rango è lo stesso: prendi le più comode.
> 4. Cerca i doppioni: una riga di soli zeri, due righe uguali, una riga multipla di un'altra, una riga che è la somma di altre. Toglili: il rango non cambia.
> 5. Controlla che le righe rimaste siano indipendenti. Se sono due, basta che non siano una il multiplo dell'altra. Se sono tre o più, serve il controllo della lezione L07.
> 6. Conta le righe rimaste: è il rango.

> [!ESEMPIO] · Quattro ranghi
> **Prima matrice.**
> $$I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$
> Le colonne sono i tre vettori $e_1$, $e_2$, $e_3$: ognuno ha un solo 1 e due zeri. Sono indipendenti (lezione L07, Esempio 7.5): nessuno si ottiene dagli altri due, perché ha un 1 proprio dove gli altri due hanno 0. Il rango è 3.
>
> **Seconda matrice.**
> $$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$$
> La prima colonna contiene 1 e 3, la seconda contiene 2 e 4. La seconda è un multiplo della prima? In alto, per passare da 1 a 2 devo moltiplicare per 2. Ma allora in basso verrebbe $3 \cdot 2 = 6$, e invece c'è 4. Non sono multiple, quindi sono indipendenti. Il rango è 2.
>
> **Terza matrice.**
> $$\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix}$$
> La terza colonna è la somma delle prime due:
> $$\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 + 0 \\ 0 + 1 \\ 1 + 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}$$
> Quindi è un doppione, e la tolgo. Le prime due colonne non sono una il multiplo dell'altra: in alto la prima ha 1 e la seconda ha 0, nel mezzo la prima ha 0 e la seconda ha 1. Restano 2 colonne indipendenti. Il rango è 2.
>
> **Quarta matrice.**
> $$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$$
> Qui conviene guardare le righe. La terza riga si ottiene dalle prime due: è due volte la seconda, meno la prima.
>
> | | primo numero | secondo numero | terzo numero |
> |---|---|---|---|
> | 2 volte la riga 2 | $2 \cdot 4 = 8$ | $2 \cdot 5 = 10$ | $2 \cdot 6 = 12$ |
> | riga 1 | $1$ | $2$ | $3$ |
> | differenza | $8 - 1 = 7$ | $10 - 2 = 8$ | $12 - 3 = 9$ |
>
> Viene $(7, 8, 9)$, che è proprio la terza riga: è un doppione, e la tolgo. Le prime due righe non sono una il multiplo dell'altra: per passare da 1 a 4 devo moltiplicare per 4, ma allora al secondo posto verrebbe $2 \cdot 4 = 8$, e invece c'è 5. Restano 2 righe indipendenti. Il rango è 2.

Nello strumento qui sotto trovi la quarta matrice. Premi «Calcola». Lo strumento la trasforma con le mosse di Gauss, che vedrai nelle lezioni L10 e L11, e conta le righe che alla fine non sono fatte di soli zeri. Poi prova a scrivere altre matrici. Con `1 0 0; 0 1 0; 0 0 1` deve venire rango 3. Con `1 2; 2 4` deve venire rango 1.

```widget gauss
titolo: Il rango di una matrice, con i passaggi
matrice: 1 2 3; 4 5 6; 7 8 9
modo: rango
modi: rango
```

> [!TRAPPOLA] Tre errori tipici sul rango
> - Il rango **non** è il numero delle righe. E non è nemmeno il numero delle righe che contengono qualche numero diverso da zero. La quarta matrice dell'esempio ha tre righe piene di numeri, ma il suo rango è 2.
> - Il rango non supera mai il più piccolo tra il numero delle righe e quello delle colonne. Una matrice $2 \times 5$ non può avere rango 5.
> - Il controllo «non sono multipli» basta solo per **due** vettori. Tre vettori possono essere dipendenti anche se, presi a due a due, non sono multipli (lezione L07, Esempio 7.4). Succede nella terza e nella quarta matrice dell'esempio: non fermarti ai controlli a coppie.

::: prova Qual è il rango di $\begin{pmatrix} 1 & 3 \\ 2 & 6 \end{pmatrix}$?
La seconda colonna è la prima moltiplicata per 3: $3 \cdot 1 = 3$ e $3 \cdot 2 = 6$. È un doppione. Resta una colonna sola, che non è fatta di zeri. Il rango è 1.
:::

::: prova Qual è il rango di $\begin{pmatrix} 1 & 1 & 0 \\ 2 & 2 & 0 \end{pmatrix}$?
Guardo le righe: la seconda è il doppio della prima. Resta una riga sola. Il rango è 1.

Con le colonne viene lo stesso numero: la seconda colonna è uguale alla prima, e la terza è fatta di zeri.
:::

::: prova Una matrice ha 4 righe e 3 colonne. Può avere rango 4?
No. Il rango è al massimo il più piccolo tra 4 e 3, cioè 3.
:::

::: prova Qual è il rango di $\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 1 & 3 & 4 \end{pmatrix}$?
La terza riga è la somma delle prime due: $1 + 0 = 1$, poi $2 + 1 = 3$, poi $3 + 1 = 4$. È un doppione. Le prime due righe non sono una il multiplo dell'altra: la prima comincia con 1, la seconda con 0. Il rango è 2.
:::

> [!RICORDA]
> - Il **rango** $\rk(A)$ è il massimo numero di colonne indipendenti. È la dimensione dello spazio che le colonne riempiono.
> - Con le righe viene lo stesso numero: $\rk({}^tA) = \rk(A)$.
> - Il rango è al massimo il più piccolo tra il numero delle righe e quello delle colonne.
> - In pratica: togli i doppioni e conta quello che resta.

## Il prodotto riga per colonna (pp. 37–38)

Moltiplicare due matrici è come fare il conto della spesa.

È l'operazione più importante della lezione, e quella che all'esame compare più spesso. Non si fa casella per casella, come la somma. Si fa incrociando le righe della prima matrice con le colonne della seconda.

> [!RIPASSO] una somma di prodotti
> Un conto come $2 \cdot 4 + 3 \cdot 1$ è una *somma di prodotti*. Il puntino $\cdot$ è il segno «per». Si fanno **prima le moltiplicazioni e poi la somma**:
> $$2 \cdot 4 + 3 \cdot 1 = 8 + 3 = 11$$
> Con i numeri negativi valgono le regole dei segni: più per meno fa meno, meno per meno fa più. Un numero negativo dopo il puntino si scrive tra parentesi. Due esempi:
> $$1 \cdot (-1) + 2 \cdot 3 = -1 + 6 = 5 \qquad\qquad (-1) \cdot (-1) + 1 \cdot 3 = 1 + 3 = 4$$

### Un conto solo: una riga per una colonna

Anna compra 2 quaderni e 3 penne. Nel negozio X un quaderno costa 4 euro e una penna costa 1 euro. Quanto spende Anna?

1. Per i quaderni: 2 quaderni da 4 euro, cioè $2 \cdot 4 = 8$ euro.
2. Per le penne: 3 penne da 1 euro, cioè $3 \cdot 1 = 3$ euro.
3. In tutto: $8 + 3 = 11$ euro.

Ora scrivi le quantità in riga e i prezzi in colonna. Il conto di prima diventa:

$$\begin{pmatrix} 2 & 3 \end{pmatrix} \begin{pmatrix} 4 \\ 1 \end{pmatrix} = 2 \cdot 4 + 3 \cdot 1 = 11$$

Questa è la mossa di base: **una riga per una colonna**. Moltiplichi il primo numero della riga per il primo della colonna, il secondo per il secondo, e poi sommi tutto. Il risultato è un numero solo.

Perché il conto si possa fare, la riga e la colonna devono contenere **lo stesso numero di numeri**: a ogni quantità deve corrispondere il suo prezzo.

### Tutti i conti insieme: una matrice per una matrice

Adesso le persone sono due e i negozi sono due.

La tabella degli **acquisti**: ogni riga è una persona, ogni colonna è un articolo.

| | quaderni | penne |
|---|---|---|
| Anna | 2 | 3 |
| Bruno | 1 | 5 |

La tabella dei **prezzi**: ogni riga è un articolo, ogni colonna è un negozio.

| | negozio X | negozio Y |
|---|---|---|
| quaderno | 4 | 3 |
| penna | 1 | 2 |

Quanto spende ciascuno in ciascun negozio? Sono quattro conti. Ogni conto è una riga degli acquisti (una persona) per una colonna dei prezzi (un negozio).

| | negozio X | negozio Y |
|---|---|---|
| Anna | $2 \cdot 4 + 3 \cdot 1 = 11$ | $2 \cdot 3 + 3 \cdot 2 = 12$ |
| Bruno | $1 \cdot 4 + 5 \cdot 1 = 9$ | $1 \cdot 3 + 5 \cdot 2 = 13$ |

Con le matrici si scrive così:

$$\begin{pmatrix} 2 & 3 \\ 1 & 5 \end{pmatrix} \begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 11 & 12 \\ 9 & 13 \end{pmatrix}$$

La matrice a destra dell'uguale è il **prodotto** delle due matrici a sinistra. Le due matrici si scrivono una accanto all'altra, senza nessun segno in mezzo.

Guarda dove finisce ogni risultato. Il 12 sta nella riga 1 e nella colonna 2 del prodotto. Viene dalla riga 1 degli acquisti (Anna) e dalla colonna 2 dei prezzi (il negozio Y). Funziona così per ogni casella.

> [!IDEA]
> Per riempire la casella di riga $i$ e colonna $j$ del prodotto: prendi la riga $i$ della prima matrice e la colonna $j$ della seconda, e fai «riga per colonna».

### Quando si può fare, e di che taglia viene

Guarda le etichette delle tre tabelle.

| Tabella | Sulle righe | Sulle colonne |
|---|---|---|
| acquisti | le persone | gli articoli |
| prezzi | gli articoli | i negozi |
| spesa | le persone | i negozi |

Il prodotto si può fare perché le **colonne** della prima tabella e le **righe** della seconda parlano delle stesse cose: gli articoli. Se Anna e Bruno comprassero anche le gomme, la tabella degli acquisti avrebbe 3 colonne. Allora alla tabella dei prezzi servirebbero 3 righe, una per articolo. Altrimenti a qualche quantità mancherebbe il prezzo.

Il risultato prende le **righe** dalla prima tabella (le persone) e le **colonne** dalla seconda (i negozi). Gli articoli, che stavano in mezzo, non compaiono più.

Con le taglie la regola diventa questa. Scrivi le due taglie una accanto all'altra, per esempio:

$$(2 \times 3) \cdot (3 \times 4)$$

- I due numeri **interni**, quelli vicini al puntino, devono essere **uguali**. Qui sono 3 e 3: il prodotto si può fare.
- I due numeri **esterni** danno la taglia del risultato. Qui sono 2 e 4: il prodotto è una matrice $2 \times 4$.

Se i due numeri interni sono diversi, il prodotto **non esiste**.

| Prima matrice | Seconda matrice | Numeri interni | Si può fare? | Taglia del prodotto |
|---|---|---|---|---|
| $2 \times 2$ | $2 \times 2$ | 2 e 2 | sì | $2 \times 2$ |
| $3 \times 2$ | $2 \times 4$ | 2 e 2 | sì | $3 \times 4$ |
| $2 \times 4$ | $3 \times 2$ | 4 e 3 | no | |
| $2 \times 3$ | $3 \times 1$ | 3 e 3 | sì | $2 \times 1$ |

### Come lo scrivono le dispense

Le dispense mettono tutto questo in una definizione sola: quando il prodotto si può fare, che taglia ha e come si calcola ogni casella.

> [!DEF] 8.7 · Prodotto riga per colonna
> Se $A$ è una matrice $m \times n$ e $B$ è una matrice $n \times p$, il prodotto $AB$ è una nuova matrice $m \times p$ definita nel modo seguente: l'elemento $(AB)_{ij}$ della nuova matrice $AB$ è
> $$(AB)_{ij} = \sum_{k=1}^n A_{ik}B_{kj} = A_{i1}B_{1j} + \dots + A_{in}B_{nj}.$$
> Questo tipo di prodotto fra matrici si chiama **prodotto riga per colonna** perché l'elemento $(AB)_{ij}$ si ottiene facendo un opportuno prodotto fra la riga $i$-esima $A_i$ di $A$ e la colonna $j$-esima $B^j$ di $B$.

**Come si legge.**

- **Le taglie.** La prima matrice ha $m$ righe e $n$ colonne. La seconda ha $n$ righe e $p$ colonne. La lettera $n$ compare due volte: sono i due numeri interni, che devono essere uguali. Il prodotto ha $m$ righe e $p$ colonne, cioè i due numeri esterni.
- $AB$ si legge «$A$ per $B$».
- $(AB)_{ij}$ è il numero che il prodotto ha nella riga $i$ e nella colonna $j$. Le dispense lo chiamano **elemento**: è un altro nome per il numero che sta in una casella.
- **Il simbolo $\sum$** è una sigma maiuscola, la S dell'alfabeto greco. Si legge «somma». Sotto c'è scritto da dove parte il contatore $k$, sopra dove arriva. Qui il contatore parte da 1 e arriva a $n$: scrivi il pezzo che segue con $k = 1$, poi con $k = 2$, e avanti fino a $n$. Poi sommi tutto.
- $A_{ik}B_{kj}$ è un prodotto di due numeri: il numero di posto $k$ nella riga $i$ di $A$, per il numero di posto $k$ nella colonna $j$ di $B$.
- Dopo il secondo uguale c'è la stessa somma scritta per esteso: il primo della riga per il primo della colonna, più il secondo per il secondo, e avanti fino all'ultimo.
- «Riga $i$-esima» vuol dire «la riga numero $i$». La scrittura «-esima» è quella di «terza», «quarta», «quinta», con una lettera al posto del numero.

Proviamo la formula sulla spesa. La casella di riga 1 e colonna 2 del prodotto è:

$$(AB)_{12} = A_{11}B_{12} + A_{12}B_{22} = 2 \cdot 3 + 3 \cdot 2 = 12$$

Il contatore $k$ fa solo due passi, perché la riga ha due numeri. È lo stesso conto di Anna nel negozio Y.

Lo schema qui sotto mostra dove va a finire un risultato. I puntini stanno al posto dei numeri che in quel momento non servono.

$$\begin{pmatrix} \cdot & \cdot \\ a & b \\ \cdot & \cdot \end{pmatrix} \begin{pmatrix} \cdot & x & \cdot \\ \cdot & y & \cdot \end{pmatrix} = \begin{pmatrix} \cdot & \cdot & \cdot \\ \cdot & ax + by & \cdot \\ \cdot & \cdot & \cdot \end{pmatrix}$$

La riga 2 della prima matrice per la colonna 2 della seconda dà un numero. Quel numero va nella casella di riga 2 e colonna 2 del prodotto: **stessa riga della riga usata, stessa colonna della colonna usata**.

> [!ESEMPIO] 8.8 · Una $3 \times 2$ per una $2 \times 4$
> $$A = \begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix}, \qquad B = \begin{pmatrix} -1 & 2 & 0 & 1 \\ 3 & 0 & 3 & 0 \end{pmatrix}$$
> **Si può fare?** $A$ è $3 \times 2$ e $B$ è $2 \times 4$. I numeri interni sono 2 e 2: il prodotto $AB$ esiste. I numeri esterni sono 3 e 4: il prodotto è una matrice $3 \times 4$, con dodici caselle da riempire.
>
> **Che cosa serve.** Le righe di $A$ sono $(1, 2)$, $(-1, 1)$ e $(0, 3)$. Le colonne di $B$, lette dall'alto in basso, contengono $-1$ e $3$, poi $2$ e $0$, poi $0$ e $3$, poi $1$ e $0$.
>
> **I dodici conti.** In ogni casella: la riga di $A$ scritta a sinistra per la colonna di $B$ scritta in alto.
>
> | | colonna 1 | colonna 2 | colonna 3 | colonna 4 |
> |---|---|---|---|---|
> | riga 1 | $1 \cdot (-1) + 2 \cdot 3 = 5$ | $1 \cdot 2 + 2 \cdot 0 = 2$ | $1 \cdot 0 + 2 \cdot 3 = 6$ | $1 \cdot 1 + 2 \cdot 0 = 1$ |
> | riga 2 | $(-1)(-1) + 1 \cdot 3 = 4$ | $(-1) \cdot 2 + 1 \cdot 0 = -2$ | $(-1) \cdot 0 + 1 \cdot 3 = 3$ | $(-1) \cdot 1 + 1 \cdot 0 = -1$ |
> | riga 3 | $0 \cdot (-1) + 3 \cdot 3 = 9$ | $0 \cdot 2 + 3 \cdot 0 = 0$ | $0 \cdot 0 + 3 \cdot 3 = 9$ | $0 \cdot 1 + 3 \cdot 0 = 0$ |
>
> **Il risultato.**
> $$AB = \begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix} \cdot \begin{pmatrix} -1 & 2 & 0 & 1 \\ 3 & 0 & 3 & 0 \end{pmatrix} = \begin{pmatrix} 5 & 2 & 6 & 1 \\ 4 & -2 & 3 & -1 \\ 9 & 0 & 9 & 0 \end{pmatrix}.$$
> Possiamo fare il prodotto $AB$ perché il numero di colonne di $A$ è pari al numero di righe di $B$. Viceversa, **non** possiamo fare il prodotto $BA$: il numero di colonne di $B$ è 4, mentre il numero di righe di $A$ è 3.

Nello strumento qui sotto ci sono le due matrici dell'Esempio 8.8. Premi «Calcola» e confronta i dodici conti con la tabella. Poi scambia le due matrici: scrivi la seconda nel primo riquadro e la prima nel secondo. Lo strumento ti avvisa che il prodotto non si può fare.

```widget gauss
titolo: Il prodotto riga per colonna, un elemento alla volta
matrice: 1 2; -1 1; 0 3
b: -1 2 0 1; 3 0 3 0
modo: prodotto
modi: prodotto
```

::: prova Calcola la riga per colonna $\begin{pmatrix} 1 & 2 & 3 \end{pmatrix} \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$.
Primo per primo, secondo per secondo, terzo per terzo, poi sommo: $1 \cdot 2 + 2 \cdot 0 + 3 \cdot 1 = 2 + 0 + 3 = 5$.
:::

::: prova $A$ è una matrice $3 \times 2$ e $B$ è una matrice $2 \times 5$. Si può fare $AB$? Di che taglia viene? E $BA$?
Per $AB$ scrivo $(3 \times 2) \cdot (2 \times 5)$. I numeri interni sono 2 e 2: si può fare. I numeri esterni sono 3 e 5: viene una matrice $3 \times 5$.

Per $BA$ scrivo $(2 \times 5) \cdot (3 \times 2)$. I numeri interni sono 5 e 3: sono diversi, quindi $BA$ non esiste.
:::

::: prova Calcola $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$.
Riga 1 per colonna 1: $1 \cdot 1 + 2 \cdot 2 = 5$.

Riga 1 per colonna 2: $1 \cdot 0 + 2 \cdot 1 = 2$.

Riga 2 per colonna 1: $3 \cdot 1 + 4 \cdot 2 = 11$.

Riga 2 per colonna 2: $3 \cdot 0 + 4 \cdot 1 = 4$.

Il prodotto è $\begin{pmatrix} 5 & 2 \\ 11 & 4 \end{pmatrix}$.
:::

### Una matrice per un vettore

C'è un caso speciale che userai moltissimo: la seconda matrice ha una sola colonna. Cioè è un vettore colonna.

Le taglie dicono subito che cosa viene fuori. Una matrice $3 \times 2$ per un vettore con 2 numeri è $(3 \times 2) \cdot (2 \times 1)$. I numeri interni sono uguali, e il risultato è $3 \times 1$: un vettore colonna con 3 numeri. In breve: **matrice per vettore dà un vettore**.

> [!ESEMPIO] 8.9 · Matrice per vettore
> Se $A$ è una matrice $m \times n$ e $x$ è una matrice $n \times 1$, cioè un vettore colonna $x \in \K^n$, allora il prodotto $Ax$ è una matrice $m \times 1$, cioè un vettore colonna in $\K^m$. Ad esempio:
> $$\begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2 \cdot (-1) \\ (-1) \cdot 1 + 1 \cdot (-1) \\ 0 \cdot 1 + 3 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ -3 \end{pmatrix}.$$
> I tre conti, uno per ogni riga della matrice:
>
> | Riga della matrice | Riga per il vettore | Risultato |
> |---|---|---|
> | $(1, 2)$ | $1 \cdot 1 + 2 \cdot (-1) = 1 - 2$ | $-1$ |
> | $(-1, 1)$ | $(-1) \cdot 1 + 1 \cdot (-1) = -1 - 1$ | $-2$ |
> | $(0, 3)$ | $0 \cdot 1 + 3 \cdot (-1) = 0 - 3$ | $-3$ |
>
> La matrice ha 3 righe, quindi il risultato ha 3 numeri. Il vettore di partenza ne aveva 2.

> [!OLTRE] · una matrice per un vettore è una ricetta fatta con le colonne
> Guarda di nuovo l'Esempio 8.9, questa volta **per colonne**. Prendi 1 volta la prima colonna della matrice e $-1$ volte la seconda:
> $$1 \cdot \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} + (-1) \cdot \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 - 2 \\ -1 - 1 \\ 0 - 3 \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ -3 \end{pmatrix}.$$
> Viene lo stesso vettore di prima. Succede sempre: il prodotto di una matrice per un vettore è la **combinazione lineare delle colonne** della matrice, e le quantità della ricetta sono i numeri del vettore. Con le lettere:
> $$Ax = x_1 A^1 + x_2 A^2 + \dots + x_n A^n.$$
> Qui $x_1, \dots, x_n$ sono i numeri del vettore $x$, e $A^1, \dots, A^n$ sono le colonne di $A$.
>
> Questo spiega due cose. La prima riguarda il rango: i vettori che si possono ottenere come $Ax$ sono tutte le ricette fatte con le colonne, cioè lo Span delle colonne. Il rango è la dimensione di questo Span.
>
> La seconda riguarda i sistemi di equazioni. Prendi il sistema
> $$\begin{cases} 2x + 3y = 5 \\ x - y = 1 \end{cases}$$
> Si scrive in una riga sola con un prodotto:
> $$\begin{pmatrix} 2 & 3 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}.$$
> Infatti la riga 1 della matrice per il vettore dà $2x + 3y$, e la riga 2 dà $x - y$: sono i lati sinistri delle due equazioni. In breve si scrive $Ax = b$ (Martelli, §3.4.2). Dalla lezione L11 i sistemi si scrivono così. È il motivo per cui il prodotto riga per colonna, che a prima vista sembra strano, è quello giusto.

::: prova Calcola $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
Riga 1 per il vettore: $1 \cdot 1 + 2 \cdot 1 = 3$.

Riga 2 per il vettore: $3 \cdot 1 + 4 \cdot 1 = 7$.

Il risultato è il vettore colonna $\begin{pmatrix} 3 \\ 7 \end{pmatrix}$.
:::

> [!RICORDA]
> - **Riga per colonna**: primo per primo, secondo per secondo, poi si somma tutto.
> - La casella di riga $i$ e colonna $j$ del prodotto è la riga $i$ della prima matrice per la colonna $j$ della seconda.
> - Taglie: $(m \times n) \cdot (n \times p)$ dà $m \times p$. I numeri interni devono essere uguali, quelli esterni danno la taglia.
> - Una matrice per un vettore dà un vettore.

## Nel prodotto l'ordine conta (pp. 38–39)

Con i numeri l'ordine di una moltiplicazione non conta: tre per cinque e cinque per tre fanno tutti e due quindici. Con le matrici non è più così.

La proprietà «l'ordine non conta» si chiama **commutativa** (lezione L01). Il prodotto di matrici **non è commutativo**. È il tranello più usato nei quiz d'esame, quindi vale la pena di guardarlo bene.

Prendi due matrici $A$ e $B$. Il prodotto con $A$ a sinistra si scrive $AB$. Quello con $B$ a sinistra si scrive $BA$. Quando scambi le due matrici possono succedere tre cose.

**Primo caso: uno dei due prodotti non esiste.** È quello che succede nell'Esempio 8.8. Lì $A$ è $3 \times 2$ e $B$ è $2 \times 4$, e $AB$ si può fare. Per $BA$ le taglie sono $(2 \times 4) \cdot (3 \times 2)$: i numeri interni sono 4 e 3, quindi il prodotto non esiste.

**Secondo caso: esistono tutti e due, ma hanno taglie diverse.** Se $A$ è $3 \times 2$ e $B$ è $2 \times 3$, allora $AB$ è una matrice $3 \times 3$ e $BA$ è una matrice $2 \times 2$. Due matrici di taglia diversa non possono essere uguali. È l'Esercizio 8.15 delle dispense, che qui trovi come esercizio 6.

**Terzo caso: stessa taglia, numeri diversi.** Se $A$ e $B$ sono quadrate della stessa taglia, i due prodotti esistono e hanno la stessa taglia. Ma di solito contengono numeri diversi.

Proviamo con le due tabelle della spesa. Con gli acquisti a sinistra e i prezzi a destra avevamo trovato:

$$\begin{pmatrix} 2 & 3 \\ 1 & 5 \end{pmatrix} \begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 11 & 12 \\ 9 & 13 \end{pmatrix}$$

Adesso mettiamo i prezzi a sinistra e gli acquisti a destra:

$$\begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 2 & 3 \\ 1 & 5 \end{pmatrix} = \begin{pmatrix} 4 \cdot 2 + 3 \cdot 1 & 4 \cdot 3 + 3 \cdot 5 \\ 1 \cdot 2 + 2 \cdot 1 & 1 \cdot 3 + 2 \cdot 5 \end{pmatrix} = \begin{pmatrix} 11 & 27 \\ 4 & 13 \end{pmatrix}$$

È un'altra matrice. Del resto questo secondo conto, per la spesa, non ha nemmeno un significato: incrocia i negozi con le persone al posto degli articoli.

Le dispense fanno un esempio ancora più piccolo, con matrici quasi vuote.

> [!ESEMPIO] 8.10 · $AB \neq BA$
> Le dispense prendono queste due matrici $2 \times 2$:
> $$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \qquad B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$$
> I due prodotti esistono tutti e due, perché le matrici sono quadrate e della stessa taglia.
>
> **Il prodotto $AB$.** Le righe di $A$ per le colonne di $B$.
>
> | | colonna 1 di $B$ | colonna 2 di $B$ |
> |---|---|---|
> | riga 1 di $A$ | $1 \cdot 0 + 0 \cdot 0 = 0$ | $1 \cdot 1 + 0 \cdot 0 = 1$ |
> | riga 2 di $A$ | $0 \cdot 0 + 0 \cdot 0 = 0$ | $0 \cdot 1 + 0 \cdot 0 = 0$ |
>
> **Il prodotto $BA$.** Le righe di $B$ per le colonne di $A$.
>
> | | colonna 1 di $A$ | colonna 2 di $A$ |
> |---|---|---|
> | riga 1 di $B$ | $0 \cdot 1 + 1 \cdot 0 = 0$ | $0 \cdot 0 + 1 \cdot 0 = 0$ |
> | riga 2 di $B$ | $0 \cdot 1 + 0 \cdot 0 = 0$ | $0 \cdot 0 + 0 \cdot 0 = 0$ |
>
> **Il confronto.**
> $$AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = B, \qquad BA = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = 0,$$
> quindi $AB \neq BA$. Il simbolo $\neq$ si legge «diverso da». Lo $0$ dopo l'ultimo uguale è la matrice nulla, quella fatta di soli zeri.

L'esempio mostra anche altre due cose che con i numeri non succedono mai.

> [!RIPASSO] due regole dei numeri che qui si perdono
> **Se un prodotto di due numeri fa zero, almeno uno dei due è zero.** Per esempio da $3 \cdot x = 0$ si ricava che $x$ è 0.
>
> **Si può dividere.** Se $a \cdot b = b$ e $b$ non è zero, dividendo tutti e due i lati per $b$ si ricava che $a$ è 1.

> [!TRAPPOLA] Con le matrici non si «semplifica»
> - **Un prodotto può essere nullo anche se nessun fattore lo è.** Nell'Esempio 8.10 $BA$ è la matrice nulla. Ma né $A$ né $B$ sono la matrice nulla: tutte e due contengono un 1.
> - **Non si può «dividere» per una matrice.** Nell'esempio $AB = B$. Con i numeri si dividerebbe per $B$ e si concluderebbe che $A$ «vale 1». Qui no: $A$ non è la matrice che nel prodotto non cambia niente. Quella si chiama matrice identità, e la trovi più sotto.
> - **L'ordine dei fattori va sempre rispettato.** Il quadrato di una somma è $(A + B)(A + B) = A^2 + AB + BA + B^2$, dove $A^2$ vuol dire $A$ per $A$. Di solito **non** è uguale ad $A^2 + 2AB + B^2$, perché $AB$ e $BA$ sono diversi (esercizio 9).

### Le regole che restano vere

Tre regole dei numeri valgono anche per le matrici. Prima le controlliamo su un esempio.

> [!ESEMPIO] · Parentesi, somme e numeri: tre controlli
> $$A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \qquad B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} \qquad C = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$
> **Primo controllo: le parentesi si possono spostare.** Le parentesi dicono quale prodotto va fatto per primo. Vogliamo vedere che $(AB)C$ e $A(BC)$ danno la stessa matrice.
>
> Prima strada. Calcolo $AB$:
> $$AB = \begin{pmatrix} 1 \cdot 1 + 2 \cdot 1 & 1 \cdot 0 + 2 \cdot 1 \\ 0 \cdot 1 + 1 \cdot 1 & 0 \cdot 0 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix}$$
> Poi moltiplico il risultato per $C$:
> $$(AB)C = \begin{pmatrix} 3 \cdot 0 + 2 \cdot 1 & 3 \cdot 1 + 2 \cdot 0 \\ 1 \cdot 0 + 1 \cdot 1 & 1 \cdot 1 + 1 \cdot 0 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 1 & 1 \end{pmatrix}$$
> Seconda strada. Calcolo $BC$:
> $$BC = \begin{pmatrix} 1 \cdot 0 + 0 \cdot 1 & 1 \cdot 1 + 0 \cdot 0 \\ 1 \cdot 0 + 1 \cdot 1 & 1 \cdot 1 + 1 \cdot 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$$
> Poi moltiplico $A$ per il risultato:
> $$A(BC) = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 1 \\ 0 \cdot 0 + 1 \cdot 1 & 0 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 1 & 1 \end{pmatrix}$$
> Le due strade danno la stessa matrice.
>
> **Secondo controllo: moltiplicare per una somma.** Vogliamo vedere che $A(B + C)$ e $AB + AC$ danno la stessa matrice.
>
> Prima strada. Sommo $B$ e $C$ casella per casella, poi moltiplico $A$ per la somma:
> $$B + C = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix} \qquad A(B + C) = \begin{pmatrix} 1 \cdot 1 + 2 \cdot 2 & 1 \cdot 1 + 2 \cdot 1 \\ 0 \cdot 1 + 1 \cdot 2 & 0 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 5 & 3 \\ 2 & 1 \end{pmatrix}$$
> Seconda strada. $AB$ l'ho già. Calcolo $AC$ e poi sommo:
> $$AC = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 0 \\ 0 \cdot 0 + 1 \cdot 1 & 0 \cdot 1 + 1 \cdot 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}$$
> $$AB + AC = \begin{pmatrix} 3 + 2 & 2 + 1 \\ 1 + 1 & 1 + 0 \end{pmatrix} = \begin{pmatrix} 5 & 3 \\ 2 & 1 \end{pmatrix}$$
> Anche qui le due strade danno la stessa matrice.
>
> **Terzo controllo: un numero si può spostare.** Moltiplico per 2 in due modi. Il doppio del prodotto $AB$ è
> $$2(AB) = 2 \begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 6 & 4 \\ 2 & 2 \end{pmatrix}$$
> Se invece raddoppio prima $A$ e poi moltiplico per $B$:
> $$2A = \begin{pmatrix} 2 & 4 \\ 0 & 2 \end{pmatrix} \qquad (2A)B = \begin{pmatrix} 2 \cdot 1 + 4 \cdot 1 & 2 \cdot 0 + 4 \cdot 1 \\ 0 \cdot 1 + 2 \cdot 1 & 0 \cdot 0 + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} 6 & 4 \\ 2 & 2 \end{pmatrix}$$
> Stessa matrice.

Le dispense raccolgono queste tre regole in una proposizione.

> [!PROP] 8.11
> Per ogni $A, B, C$ matrici per cui i prodotti e le somme abbiano senso e per ogni $\lambda \in \K$, abbiamo
> 1. $A(BC) = (AB)C$ (associatività),
> 2. $A(B + C) = AB + AC$ e $(A + B)C = AC + BC$ (distributività),
> 3. $\lambda(AB) = (\lambda A)B = A(\lambda B)$.

**Come si legge.**

- «Per cui i prodotti e le somme abbiano senso»: le taglie devono andare d'accordo. In ogni prodotto i numeri interni devono essere uguali, e si sommano solo matrici della stessa taglia.
- $\lambda \in \K$ vuol dire che $\lambda$ è un numero qualsiasi.
- **Riga 1, associatività.** In un prodotto di tre matrici puoi cominciare da dove vuoi: dal prodotto delle ultime due oppure dal prodotto delle prime due. Per questo si scrive $ABC$ senza parentesi. Attenzione: si spostano le parentesi, **non le lettere**. $ABC$ e $ACB$ sono due cose diverse.
- **Riga 2, distributività.** Moltiplicare per una somma è come moltiplicare per i due pezzi e poi sommare. Le versioni sono due perché l'ordine conta. Nella prima $A$ moltiplica da sinistra e resta a sinistra. Nella seconda $C$ moltiplica da destra e resta a destra.
- **Riga 3.** Un numero si può mettere dove si vuole: davanti a tutto, dentro la prima matrice o dentro la seconda. Solo le matrici devono restare in ordine.

> [!DIM] della Proposizione 8.11, punti (1) e (2)
> Seguiamo Martelli (Proposizione 3.4.2). L'idea è confrontare i due lati **una casella alla volta**, con la formula del prodotto.
>
> **Distributività.** Guardiamo la casella di riga $i$ e colonna $j$ di $A(B + C)$.
>
> 1. Per la formula del prodotto, è la somma dei numeri $A_{ik}(B + C)_{kj}$ al variare del contatore $k$.
> 2. La somma di matrici si fa casella per casella: $(B + C)_{kj} = B_{kj} + C_{kj}$.
> 3. Tra numeri vale la proprietà distributiva: $A_{ik}(B_{kj} + C_{kj}) = A_{ik}B_{kj} + A_{ik}C_{kj}$.
> 4. I primi pezzi, sommati, danno la casella di $AB$. I secondi pezzi, sommati, danno la casella di $AC$.
>
> In una riga:
> $$(A(B + C))_{ij} = \sum_k A_{ik}(B + C)_{kj} = \sum_k A_{ik}B_{kj} + \sum_k A_{ik}C_{kj} = (AB)_{ij} + (AC)_{ij}.$$
> **Associatività.** Si scrivono tutti e due i lati come somme doppie, cioè con due contatori $k$ e $h$:
> $$(A(BC))_{ij} = \sum_k A_{ik}(BC)_{kj} = \sum_k \sum_h A_{ik}B_{kh}C_{hj},$$
> $$((AB)C)_{ij} = \sum_h (AB)_{ih}C_{hj} = \sum_h \sum_k A_{ik}B_{kh}C_{hj}.$$
> Sono le stesse somme di prodotti $A_{ik}B_{kh}C_{hj}$, su tutte le coppie $(k, h)$, solo in ordine diverso. Quindi i due lati sono uguali.
>
> **Il punto (3).** La casella di riga $i$ e colonna $j$ di $\lambda(AB)$ è $\lambda$ per la somma dei prodotti $A_{ik}B_{kj}$. Tra numeri, $\lambda$ si può portare dentro la somma e attaccare al primo fattore oppure al secondo:
> $$\lambda \sum_k A_{ik}B_{kj} = \sum_k (\lambda A_{ik})B_{kj} = \sum_k A_{ik}(\lambda B_{kj}).$$
> La seconda scrittura è la casella di $(\lambda A)B$, la terza è la casella di $A(\lambda B)$.

### La trasposta di un prodotto: l'ordine si rovescia

C'è un'ultima regola in cui l'ordine conta, e nei quiz viene chiesta. Riguarda la trasposta di un prodotto. Le dispense la lasciano come esercizio (Esercizio 8.14): la trasposta di $AB$ è il prodotto delle due trasposte, ma **in ordine rovesciato**.

$${}^t(AB) = {}^tB\,{}^tA$$

**Come si legge.** A sinistra: fai il prodotto e poi giri il risultato. A destra: giri le due matrici e poi le moltiplichi, mettendo per prima la trasposta di $B$.

> [!ESEMPIO] · Un controllo con i numeri
> $$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \qquad B = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$$
> **Lato sinistro.** Prima il prodotto, poi la trasposta:
> $$AB = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 1 \\ 3 \cdot 0 + 4 \cdot 1 & 3 \cdot 1 + 4 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 4 & 7 \end{pmatrix} \qquad {}^t(AB) = \begin{pmatrix} 2 & 4 \\ 3 & 7 \end{pmatrix}$$
> **Lato destro.** Prima le due trasposte:
> $${}^tB = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} \qquad {}^tA = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$$
> Qui ${}^tB$ è uguale a $B$, perché $B$ è simmetrica. Poi il prodotto, con ${}^tB$ a sinistra:
> $${}^tB\,{}^tA = \begin{pmatrix} 0 \cdot 1 + 1 \cdot 2 & 0 \cdot 3 + 1 \cdot 4 \\ 1 \cdot 1 + 1 \cdot 2 & 1 \cdot 3 + 1 \cdot 4 \end{pmatrix} = \begin{pmatrix} 2 & 4 \\ 3 & 7 \end{pmatrix}$$
> I due lati sono uguali.
>
> **Nell'ordine sbagliato.** Con ${}^tA$ a sinistra viene un'altra matrice:
> $${}^tA\,{}^tB = \begin{pmatrix} 1 \cdot 0 + 3 \cdot 1 & 1 \cdot 1 + 3 \cdot 1 \\ 2 \cdot 0 + 4 \cdot 1 & 2 \cdot 1 + 4 \cdot 1 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 4 & 6 \end{pmatrix}$$

Il motivo del rovesciamento si vede già dalle taglie. Se $A$ è $3 \times 2$ e $B$ è $2 \times 4$, le trasposte sono $2 \times 3$ e $4 \times 2$. Nell'ordine rovesciato le taglie sono $(4 \times 2) \cdot (2 \times 3)$, e il prodotto si può fare. Nell'ordine di partenza sarebbero $(2 \times 3) \cdot (4 \times 2)$, e il prodotto non esiste nemmeno. La dimostrazione completa è nell'esercizio 11.

> [!OLTRE] · la matrice identità e le potenze
> **La matrice identità.** È la matrice quadrata con 1 sulla diagonale e 0 in tutte le altre caselle. Si indica con $I_n$, dove $n$ è il numero delle righe:
> $$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \qquad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$
> Nel prodotto fa la parte del numero 1: moltiplicare per lei non cambia niente. Un controllo:
> $$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 5 & 7 \\ 2 & 9 \end{pmatrix} = \begin{pmatrix} 1 \cdot 5 + 0 \cdot 2 & 1 \cdot 7 + 0 \cdot 9 \\ 0 \cdot 5 + 1 \cdot 2 & 0 \cdot 7 + 1 \cdot 9 \end{pmatrix} = \begin{pmatrix} 5 & 7 \\ 2 & 9 \end{pmatrix}$$
> Con i simboli: $I_n A = A I_n = A$ per ogni matrice quadrata $A$ con $n$ righe (Martelli, Proposizione 3.4.4). Le dispense introducono la matrice identità nella lezione L09 (Definizione 9.4).
>
> **Le potenze.** Una matrice quadrata si può moltiplicare per sé stessa. $A^2$ vuol dire $A$ per $A$, $A^3$ vuol dire $A$ per $A$ per $A$, e avanti così. Per esempio:
> $$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \quad A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \quad A^3 = A^2 A = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}.$$
> I conti, casella per casella, sono nell'esercizio 9. In Matematica Discreta vedrai che le matrici quadrate, con la somma e il prodotto, formano un **anello non commutativo** (se hanno almeno 2 righe).

> [!METODO] «Quale identità vale?»
> È una domanda d'esame molto frequente. Ti danno due matrici quadrate $A$ e $B$, di solito $3 \times 3$, e cinque uguaglianze: $AB = BA$, $AB = A$, $AB = B$, $BA = A$, $BA = B$. Una sola è vera.
>
> 1. Calcola $AB$ una riga alla volta: sono nove conti. Le matrici hanno quasi sempre molti 0 e molti 1: sfruttali.
> 2. Confronta $AB$ con $A$ e con $B$.
> 3. Se non è uguale a nessuna delle due, calcola $BA$. Confrontala con $A$, con $B$ e con $AB$.
> 4. Per **scartare** un'uguaglianza basta **una** casella diversa: non serve finire tutto il prodotto.

::: prova Calcola $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e poi il prodotto con le due matrici scambiate. Vengono uguali?
Primo prodotto. Riga 1: $0 \cdot 1 + 1 \cdot 3 = 3$ e $0 \cdot 2 + 1 \cdot 4 = 4$. Riga 2: $1 \cdot 1 + 0 \cdot 3 = 1$ e $1 \cdot 2 + 0 \cdot 4 = 2$. Viene $\begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$.

Secondo prodotto, cioè $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Riga 1: $1 \cdot 0 + 2 \cdot 1 = 2$ e $1 \cdot 1 + 2 \cdot 0 = 1$. Riga 2: $3 \cdot 0 + 4 \cdot 1 = 4$ e $3 \cdot 1 + 4 \cdot 0 = 3$. Viene $\begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$.

Non sono uguali. Nel primo caso si sono scambiate le due righe della matrice con 1, 2, 3, 4. Nel secondo si sono scambiate le due colonne.
:::

::: prova Per tre matrici quadrate della stessa taglia è sempre vero che $ABC = ACB$?
No. L'associatività permette di spostare le parentesi, non le lettere. Per passare da $ABC$ ad $ACB$ bisognerebbe scambiare $B$ e $C$, e di solito $BC$ e $CB$ sono diversi.
:::

::: prova Il prodotto $AB$ è la matrice nulla. Si può concludere che $A$ oppure $B$ è la matrice nulla?
No. Nell'Esempio 8.10 il prodotto $BA$ è la matrice nulla, ma tutte e due le matrici contengono un 1.
:::

> [!RICORDA]
> - Di solito $AB$ e $BA$ sono diversi: il prodotto di matrici **non è commutativo**.
> - Un prodotto può essere la matrice nulla anche se nessun fattore lo è. Non si «divide» per una matrice.
> - Valgono l'associatività e la distributività: si spostano le parentesi, mai le lettere.
> - La trasposta di un prodotto rovescia l'ordine: ${}^t(AB) = {}^tB\,{}^tA$.

## La traccia: la somma della diagonale (p. 39)

L'ultima operazione della lezione è la più corta: una somma.

In una matrice quadrata la **diagonale principale** è la fila di caselle che scende dall'angolo in alto a sinistra all'angolo in basso a destra. Sono le caselle in cui il numero della riga è uguale al numero della colonna: riga 1 e colonna 1, riga 2 e colonna 2, e avanti così.

Guarda questa matrice:

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$$

Sulla diagonale principale ci sono 1 e 4. La loro somma è 5. Questa somma si chiama **traccia** della matrice.

La traccia di una matrice $A$ si scrive $\tr A$ e si legge «traccia di $A$». Le due lettere vengono dall'inglese *trace*.

Un esempio con una matrice $3 \times 3$. I numeri sulla diagonale sono 2, $-3$ e 6:

$$\tr \begin{pmatrix} 2 & 7 & -1 \\ 0 & -3 & 5 \\ 4 & 1 & 6 \end{pmatrix} = 2 + (-3) + 6 = 5$$

Tutti gli altri numeri della matrice non contano.

Le dispense la scrivono così.

> [!DEF] 8.12 · Traccia
> La **traccia** di una matrice quadrata $A \in M(n)$ è il numero
> $$\tr A = A_{11} + \dots + A_{nn}.$$
> Cioè, la traccia di $A$ è la somma dei numeri presenti sulla diagonale principale di $A$.

**Come si legge.**

- $A \in M(n)$: la matrice $A$ è quadrata, con $n$ righe e $n$ colonne.
- $A_{11}$ è il numero di riga 1 e colonna 1. $A_{nn}$ è il numero dell'ultima riga e dell'ultima colonna. Sono il primo e l'ultimo numero della diagonale.
- I puntini in mezzo vogliono dire «e avanti così»: si sommano tutti i numeri con i due indici uguali.

Due cose da notare.

- La traccia si calcola solo per le matrici **quadrate**. In una matrice $2 \times 3$ la diagonale che parte dall'angolo in alto a sinistra non arriva all'angolo in basso a destra.
- La matrice identità con $n$ righe ha $n$ numeri 1 sulla diagonale. Quindi la sua traccia è $n$. Per esempio $\tr I_3 = 1 + 1 + 1 = 3$.

::: prova Calcola la traccia di $\begin{pmatrix} 3 & 1 \\ 4 & -2 \end{pmatrix}$ e quella di $\begin{pmatrix} 5 & 0 & 0 \\ 1 & 2 & 0 \\ 7 & 8 & -4 \end{pmatrix}$.
Nella prima la diagonale contiene 3 e $-2$: la traccia è $3 + (-2) = 1$.

Nella seconda la diagonale contiene 5, 2 e $-4$: la traccia è $5 + 2 + (-4) = 3$.
:::

### Scambiare i due fattori non cambia la traccia

Il prodotto di matrici non è commutativo, ma la traccia «non se ne accorge». Vediamolo prima con i numeri.

> [!ESEMPIO] · Prodotti diversi, stessa traccia
> $$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \qquad B = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$$
> **Il prodotto con $A$ a sinistra.**
> $$AB = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 1 \\ 3 \cdot 0 + 4 \cdot 1 & 3 \cdot 1 + 4 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 4 & 7 \end{pmatrix}$$
> **Il prodotto con $B$ a sinistra.**
> $$BA = \begin{pmatrix} 0 \cdot 1 + 1 \cdot 3 & 0 \cdot 2 + 1 \cdot 4 \\ 1 \cdot 1 + 1 \cdot 3 & 1 \cdot 2 + 1 \cdot 4 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 4 & 6 \end{pmatrix}$$
> Le due matrici sono diverse: $AB \neq BA$.
>
> **Le due tracce.** Per $AB$ la diagonale contiene 2 e 7: la traccia è $2 + 7 = 9$. Per $BA$ la diagonale contiene 3 e 6: la traccia è $3 + 6 = 9$.
>
> Prodotti diversi, stessa traccia.

Succede sempre.

> [!PROP] 8.13
> Se $A, B \in M(n)$, vale la relazione $\tr(AB) = \tr(BA)$.

**Come si legge.** $A, B \in M(n)$ vuol dire che $A$ e $B$ sono due matrici quadrate della stessa taglia. La formula dice: la traccia del prodotto fatto in un ordine è uguale alla traccia del prodotto fatto nell'altro ordine. Vale anche quando i due prodotti sono matrici diverse.

Perché succede? Guardiamo il caso $2 \times 2$ con le lettere al posto dei numeri. Chiamiamo $a_{11}, a_{12}, a_{21}, a_{22}$ i quattro numeri di $A$. Chiamiamo $b_{11}, b_{12}, b_{21}, b_{22}$ i quattro numeri di $B$.

Per la traccia di $AB$ servono le due caselle diagonali di $AB$.

| Casella di $AB$ | Conto | Risultato |
|---|---|---|
| riga 1, colonna 1 | riga 1 di $A$ per colonna 1 di $B$ | $a_{11}b_{11} + a_{12}b_{21}$ |
| riga 2, colonna 2 | riga 2 di $A$ per colonna 2 di $B$ | $a_{21}b_{12} + a_{22}b_{22}$ |

Sommando le due caselle:

$$\tr(AB) = a_{11}b_{11} + a_{12}b_{21} + a_{21}b_{12} + a_{22}b_{22}$$

Rifacciamo il conto per $BA$.

| Casella di $BA$ | Conto | Risultato |
|---|---|---|
| riga 1, colonna 1 | riga 1 di $B$ per colonna 1 di $A$ | $b_{11}a_{11} + b_{12}a_{21}$ |
| riga 2, colonna 2 | riga 2 di $B$ per colonna 2 di $A$ | $b_{21}a_{12} + b_{22}a_{22}$ |

Sommando le due caselle:

$$\tr(BA) = b_{11}a_{11} + b_{12}a_{21} + b_{21}a_{12} + b_{22}a_{22}$$

Confronta le due somme: contengono gli stessi quattro prodotti, scritti in un altro ordine. Per esempio il secondo pezzo della prima somma e il terzo della seconda sono lo stesso numero. Tra numeri, infatti, l'ordine di un prodotto non conta.

> [!DIM] della Proposizione 8.13
> La spiegazione delle dispense è una riga:
> $$\tr(AB) = \sum_{i, j = 1}^n A_{ij}B_{ji} = \sum_{j, i = 1}^n B_{ji}A_{ij} = \tr(BA).$$
> Eccola passo per passo.
>
> 1. La casella di riga $i$ e colonna $i$ di $AB$ è la riga $i$ di $A$ per la colonna $i$ di $B$: $(AB)_{ii} = \sum_{j} A_{ij}B_{ji}$. Qui il contatore della somma si chiama $j$.
> 2. La traccia somma queste caselle per tutti gli $i$: $\tr(AB) = \sum_i \sum_j A_{ij}B_{ji}$. È una somma con un addendo per **ogni coppia** $(i, j)$. La scrittura $\sum_{i, j = 1}^n$ vuol dire proprio questo: $i$ e $j$ vanno tutti e due da 1 a $n$.
> 3. Con lo stesso conto per $BA$: $(BA)_{jj} = \sum_i B_{ji}A_{ij}$, quindi $\tr(BA) = \sum_j \sum_i B_{ji}A_{ij}$.
> 4. I due totali contengono gli stessi addendi, perché $A_{ij}B_{ji} = B_{ji}A_{ij}$: tra **numeri** il prodotto è commutativo. E li contengono per le stesse coppie $(i, j)$. Quindi sono uguali.

### La scorciatoia per i quiz

Per la traccia di un prodotto servono solo le caselle sulla diagonale. Le altre non vanno calcolate.

In un prodotto di matrici $3 \times 3$ vuol dire fare tre conti «riga per colonna» al posto di nove: la riga 1 per la colonna 1, la riga 2 per la colonna 2, la riga 3 per la colonna 3. Poi si sommano i tre risultati.

Con le matrici dell'esempio di prima bastano due conti:

1. riga 1 di $A$ per colonna 1 di $B$: $1 \cdot 0 + 2 \cdot 1 = 2$;
2. riga 2 di $A$ per colonna 2 di $B$: $3 \cdot 1 + 4 \cdot 1 = 7$;
3. la traccia di $AB$ è $2 + 7 = 9$.

> [!OLTRE] · altre proprietà della traccia, utili nei quiz
> **La traccia rispetta somme e multipli.** La traccia di una somma è la somma delle tracce: $\tr(A + B) = \tr A + \tr B$. La traccia di un multiplo è il multiplo della traccia: $\tr(\lambda A) = \lambda \tr A$. In più una matrice e la sua trasposta hanno la stessa traccia, perché trasponendo la diagonale non si muove.
>
> **La traccia non rispetta i prodotti.** Di solito $\tr(AB)$ è diversa da $\tr A \cdot \tr B$. Basta provare con due copie della matrice identità $I_2$. Il loro prodotto è ancora $I_2$, che ha traccia 2. Invece il prodotto delle due tracce è $2 \cdot 2 = 4$.
>
> **Vale anche per matrici non quadrate.** Se $A$ è $m \times n$ e $B$ è $n \times m$, i prodotti $AB$ e $BA$ hanno taglie diverse ma la stessa traccia. La dimostrazione è la stessa. Lo controlli con i numeri nell'esercizio 6.
>
> **Con tre fattori si può far girare, non scambiare.** Vale $\tr(ABC) = \tr(BCA) = \tr(CAB)$: l'ultima matrice passa davanti, come in un girotondo. Basta usare la Proposizione 8.13 con le due matrici $A$ e $BC$. Invece scambiare due matrici vicine può cambiare il risultato: $\tr(ACB)$ può essere diversa (esercizio 15).
>
> **Una matrice per la sua trasposta.** Per una matrice di numeri reali, $\tr(A\,{}^tA)$ è la **somma dei quadrati di tutti i suoi numeri**. Il motivo: la casella diagonale numero $i$ di $A\,{}^tA$ è la riga $i$ di $A$ per sé stessa. Con la matrice che contiene 1, 2, 3, 4 viene $1 + 4 + 9 + 16 = 30$. Un esempio svolto è in «Verso l'esame».

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: la trasposta è nel §2.3.10 (p. 73), le matrici simmetriche e antisimmetriche nel §2.3.11 (pp. 73–74). Il rango è nel §3.2.3 (pp. 88–89: Definizione 3.2.7, Proposizione 3.2.8, Corollario 3.2.11), il rango per righe e per colonne nel §3.2.6 (p. 92, Proposizione 3.2.20 e Corollario 3.2.21). Il prodotto fra matrici e le sue proprietà sono nei §3.4.1–3.4.5 (pp. 104–107), con l'Esercizio 3.4.3 sulla trasposta del prodotto. La traccia è nel §4.4.5 (p. 141, Proposizione 4.4.11).

::: prova Calcola $\tr(AB)$ con $A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$ e $B = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$, facendo solo due conti.
Riga 1 di $A$ per colonna 1 di $B$: $1 \cdot 2 + 1 \cdot 1 = 3$.

Riga 2 di $A$ per colonna 2 di $B$: $0 \cdot 0 + 2 \cdot 1 = 2$.

La traccia è $3 + 2 = 5$.
:::

::: prova Si può calcolare la traccia di una matrice $2 \times 3$?
No. La traccia esiste solo per le matrici quadrate.
:::

> [!RICORDA]
> - La **traccia** $\tr A$ è la somma dei numeri sulla diagonale principale. Esiste solo per le matrici quadrate.
> - $\tr(AB) = \tr(BA)$, anche quando $AB$ e $BA$ sono diversi.
> - Per la traccia di un prodotto bastano le caselle diagonali del prodotto.
> - Di solito $\tr(AB)$ **non** è $\tr A \cdot \tr B$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $m \times n$ | «emme per enne» | la taglia: $m$ righe e $n$ colonne | una matrice $2 \times 3$ ha 2 righe e 3 colonne |
| $a_{ij}$, $A_{ij}$ | «a i gei» | il numero nella riga $i$ e nella colonna $j$ | $a_{23}$: riga 2, colonna 3 |
| $A_i$ | «A con i in basso» | la riga numero $i$ | $A_2$ è la seconda riga |
| $A^j$ | «A con gei in alto» | la colonna numero $j$ (in questa lezione non è una potenza) | $A^3$ è la terza colonna |
| $\K$ | «cappa» | i numeri che si usano: $\R$ oppure $\C$ | |
| $M(m, n, \K)$ | «emme di emme, enne, cappa» | l'insieme delle matrici $m \times n$ con numeri in $\K$ | $M(2, 3, \R)$ |
| $M(n)$ | «emme di enne» | le matrici quadrate con $n$ righe e $n$ colonne | $M(2)$: le matrici $2 \times 2$ |
| $\in$ | «appartiene a» | sta dentro l'insieme | $A \in M(2, 3, \R)$ |
| $\R^2$, $\K^m$ | «erre due», «cappa alla emme» | i vettori con 2 numeri, con $m$ numeri | $(2, 1) \in \R^2$ |
| $\lambda$ | «lambda» | un numero qualsiasi (uno scalare) | $3A$: qui $\lambda = 3$ |
| ${}^tA$ | «A trasposta» | la matrice con righe e colonne scambiate | la trasposta di una $2 \times 3$ è $3 \times 2$ |
| ${}^t(x, y, z)$ | «il trasposto di x, y, z» | il vettore colonna con quei numeri | ${}^t(1, 2, 3)$ |
| $-A$ | «meno A» | la matrice con tutti i segni cambiati | |
| $\iff$ | «se e solo se» | esattamente quando | simmetrica $\iff {}^tA = A$ |
| $\Span(\dots)$ | «Span di…» | tutto quello che si ottiene con le ricette fatte con quei vettori | lo Span di un vettore è una retta |
| $\subset$ | «è contenuto in» | sta dentro, come insieme | una retta del piano $\subset \R^2$ |
| $\rk(A)$ | «rango di A» | il massimo numero di colonne (o di righe) indipendenti | $\rk(I_3) = 3$ |
| $\min(m, n)$ | «il minimo tra emme ed enne» | il più piccolo dei due numeri | $\min(3, 5) = 3$ |
| $\le$ | «minore o uguale» | più piccolo, oppure uguale | $\rk(A) \le 3$ |
| $AB$ | «A per B» | il prodotto riga per colonna | $(2 \times 3) \cdot (3 \times 4)$ dà $2 \times 4$ |
| $(AB)_{ij}$ | «A B, i gei» | il numero di riga $i$ e colonna $j$ del prodotto | riga $i$ di $A$ per colonna $j$ di $B$ |
| $\sum_{k=1}^n$ | «somma per k da 1 a enne» | somma dei pezzi che si ottengono con $k = 1, 2, \dots, n$ | $\sum_{k=1}^3 k = 1 + 2 + 3$ |
| $\neq$ | «diverso da» | non uguale | di solito $AB \neq BA$ |
| $0$ | «zero», «matrice nulla» | tra matrici: la matrice fatta di soli zeri | $BA = 0$ nell'Esempio 8.10 |
| $I_n$ | «i con enne», «identità» | la matrice con 1 sulla diagonale e 0 altrove | $I_2$ ha due righe |
| $A^2$, $A^3$ | «A alla seconda», «A alla terza» | $A$ per $A$, $A$ per $A$ per $A$ (quando si parla di potenze) | |
| $\tr A$ | «traccia di A» | la somma dei numeri sulla diagonale principale | $\tr I_3 = 3$ |
| $e_{ij}$ | «e i gei» | la matrice con un 1 nella riga $i$ e colonna $j$, e 0 altrove | |
| $\dots$, $\cdots$, $\vdots$ | «e avanti così» | i numeri in mezzo, che non si scrivono | $A_{11} + \dots + A_{nn}$ |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 quiz, ognuno con 5 risposte. Servono almeno 6 risposte giuste perché vengano corretti i 2 problemi, che valgono 11 punti l'uno. Dura 2 ore, senza calcolatrice, e puoi portare solo 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. I dettagli sono nella lezione L01.

**Che cosa viene chiesto di questa lezione**

Le operazioni di questa lezione compaiono in **quasi ogni appello** dal 2023 al 2026.

| Tipo di domanda | Appelli (numero della domanda) | Che cosa serve |
|---|---|---|
| «Quale identità vale?» tra $AB$, $BA$, $A$, $B$ | 24/01/2024 (6), 10/06/2024 (5), 10/07/2024 (3), 15/01/2026 (1), 03/06/2026 (5) | il prodotto riga per colonna, e ricordare che l'ordine conta |
| traccia di un prodotto | 08/02/2024 (4), 06/09/2024 (8), 16/01/2025 (3), 10/07/2025 (9), 05/02/2026 (3), 03/07/2026 (9), 07/09/2026 (8) | solo la diagonale del prodotto |
| prodotto di tre matrici $2 \times 2$ | 07/02/2025 (3) | associatività, ordine dei fattori |
| rango di una matrice $3 \times 3$, $4 \times 4$ o $5 \times 5$ | 10/06/2024 (10), 16/01/2025 (6), 07/02/2025 (4), 05/02/2026 (4), 07/09/2026 (9) | doppioni tra righe o colonne, poi Gauss (lezioni L11–L12) |
| calcolare ${}^tA - A$ in un problema | 24/01/2024 (11), 15/01/2026 (11) | trasposta, matrici simmetriche |

**Una domanda vera, letta insieme**

È la domanda 1 dell'appello del 15/01/2026. Il testo dice:

«Siano $A = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$. Quale identità vale? (a) $AB = BA$; (b) $BA = B$; (c) $AB = B$; (d) $AB = A$; (e) $BA = A$.»

**In pratica chiede:** calcola il prodotto con $A$ a sinistra e il prodotto con $B$ a sinistra. Poi guarda se uno dei due è uguale ad $A$, oppure a $B$, oppure se i due prodotti sono uguali tra loro. «Identità» qui vuol dire soltanto «uguaglianza». Delle cinque uguaglianze una sola è vera.

> [!ESEMPIO] Appello del 15/01/2026, domanda 1: la soluzione
> **Passo 1: calcolo $AB$.** Le righe di $A$ per le colonne di $B$. Le colonne di $B$, lette dall'alto in basso, contengono $1, 0, 0$, poi $-1, 1, 0$, poi $0, -1, 1$.
>
> | | colonna 1 di $B$ | colonna 2 di $B$ | colonna 3 di $B$ |
> |---|---|---|---|
> | riga 1 di $A$: $(1, 1, 1)$ | $1 \cdot 1 + 1 \cdot 0 + 1 \cdot 0 = 1$ | $1 \cdot (-1) + 1 \cdot 1 + 1 \cdot 0 = 0$ | $1 \cdot 0 + 1 \cdot (-1) + 1 \cdot 1 = 0$ |
> | riga 2 di $A$: $(0, 1, 1)$ | $0 \cdot 1 + 1 \cdot 0 + 1 \cdot 0 = 0$ | $0 \cdot (-1) + 1 \cdot 1 + 1 \cdot 0 = 1$ | $0 \cdot 0 + 1 \cdot (-1) + 1 \cdot 1 = 0$ |
> | riga 3 di $A$: $(0, 0, 1)$ | $0 \cdot 1 + 0 \cdot 0 + 1 \cdot 0 = 0$ | $0 \cdot (-1) + 0 \cdot 1 + 1 \cdot 0 = 0$ | $0 \cdot 0 + 0 \cdot (-1) + 1 \cdot 1 = 1$ |
>
> **Passo 2: confronto.** Il prodotto ha 1 sulla diagonale e 0 in tutte le altre caselle:
> $$AB = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} = I_3$$
> È la matrice identità. Non è uguale ad $A$ e non è uguale a $B$. Quindi le risposte (c) e (d) sono false.
>
> **Passo 3: calcolo $BA$.** Le righe di $B$ per le colonne di $A$. Le colonne di $A$ contengono $1, 0, 0$, poi $1, 1, 0$, poi $1, 1, 1$.
>
> | | colonna 1 di $A$ | colonna 2 di $A$ | colonna 3 di $A$ |
> |---|---|---|---|
> | riga 1 di $B$: $(1, -1, 0)$ | $1 \cdot 1 + (-1) \cdot 0 + 0 \cdot 0 = 1$ | $1 \cdot 1 + (-1) \cdot 1 + 0 \cdot 0 = 0$ | $1 \cdot 1 + (-1) \cdot 1 + 0 \cdot 1 = 0$ |
> | riga 2 di $B$: $(0, 1, -1)$ | $0 \cdot 1 + 1 \cdot 0 + (-1) \cdot 0 = 0$ | $0 \cdot 1 + 1 \cdot 1 + (-1) \cdot 0 = 1$ | $0 \cdot 1 + 1 \cdot 1 + (-1) \cdot 1 = 0$ |
> | riga 3 di $B$: $(0, 0, 1)$ | $0 \cdot 1 + 0 \cdot 0 + 1 \cdot 0 = 0$ | $0 \cdot 1 + 0 \cdot 1 + 1 \cdot 0 = 0$ | $0 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 = 1$ |
>
> Anche $BA$ è la matrice identità $I_3$. Quindi le risposte (b) ed (e) sono false.
>
> **Passo 4: la risposta.** I due prodotti sono uguali tra loro: la risposta giusta è la **(a)**.
>
> Di solito $AB$ e $BA$ sono diversi. Qui sono uguali perché le due matrici sono una l'*inversa* dell'altra: un'idea che arriva nella lezione L10.

**Una traccia con il tranello**

È la domanda 9 dell'appello del 10/07/2025. Il testo dice:

«Data la matrice $A = \begin{pmatrix} 2 & 1 \\ 0 & 1 \\ 0 & 1 \end{pmatrix}$, la traccia di $A \cdot {}^tA$ è: (a) 7; (b) 9; (c) non si può calcolare, poiché $A$ non è una matrice quadrata; (d) 6; (e) 0.»

**In pratica chiede:** moltiplica la matrice per la sua trasposta, poi somma i numeri sulla diagonale del risultato. Il tranello è la risposta (c): la matrice di partenza non è quadrata, ma la traccia si calcola del **prodotto**, non della matrice di partenza.

> [!ESEMPIO] Appello del 10/07/2025, domanda 9: la soluzione
> **Passo 1: le taglie.** $A$ è $3 \times 2$, quindi la sua trasposta è $2 \times 3$. Il prodotto ha taglie $(3 \times 2) \cdot (2 \times 3)$: i numeri interni sono uguali, e il risultato è $3 \times 3$. È una matrice **quadrata**, quindi la traccia esiste. La (c) è falsa.
>
> **Passo 2: servono solo le tre caselle diagonali.** La casella diagonale numero $i$ del prodotto è la riga $i$ di $A$ per la colonna $i$ di ${}^tA$. Ma la colonna $i$ della trasposta contiene gli stessi numeri della riga $i$ di $A$. Quindi ogni casella diagonale è una riga di $A$ moltiplicata per sé stessa.
>
> | Riga di $A$ | La riga per sé stessa | Risultato |
> |---|---|---|
> | $(2, 1)$ | $2 \cdot 2 + 1 \cdot 1$ | $5$ |
> | $(0, 1)$ | $0 \cdot 0 + 1 \cdot 1$ | $1$ |
> | $(0, 1)$ | $0 \cdot 0 + 1 \cdot 1$ | $1$ |
>
> **Passo 3: la traccia.** $5 + 1 + 1 = 7$. La risposta giusta è la **(a)**.
>
> **Controllo.** Scambio i due fattori: la traccia non deve cambiare. Il prodotto con la trasposta a sinistra è una matrice $2 \times 2$:
> $${}^tA\,A = \begin{pmatrix} 2 & 0 & 0 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 0 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 \cdot 2 + 0 \cdot 0 + 0 \cdot 0 & 2 \cdot 1 + 0 \cdot 1 + 0 \cdot 1 \\ 1 \cdot 2 + 1 \cdot 0 + 1 \cdot 0 & 1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 2 & 3 \end{pmatrix}$$
> La sua traccia è $4 + 3 = 7$. Torna.

**Una trasposta dentro un problema**

È la prima parte del punto (2) del problema 11 dell'appello del 15/01/2026. Il testo dice:

«Data $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, con $k$ parametro reale, calcolare ${}^tA - A$.»

**In pratica chiede:** scrivi la trasposta della matrice e poi fai la differenza, casella per casella. La lettera $k$ è un **parametro**: un numero che non conosci. Nei conti resta scritto come lettera. La scrittura $k^2$ vuol dire $k$ per $k$.

> [!ESEMPIO] Appello del 15/01/2026, problema 11, punto (2), prima parte: la soluzione
> **Passo 1: la trasposta.** Le righe diventano colonne. La prima riga di $A$ contiene $1, k^2, 0$ e diventa la prima colonna. La seconda riga contiene $k, k + 1, k$ e diventa la seconda colonna. La terza riga contiene $0, k, 1$ e diventa la terza colonna.
> $${}^tA = \begin{pmatrix} 1 & k & 0 \\ k^2 & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$$
> **Passo 2: la differenza, casella per casella.** In ogni casella: il numero di ${}^tA$ meno il numero di $A$.
>
> | | colonna 1 | colonna 2 | colonna 3 |
> |---|---|---|---|
> | riga 1 | $1 - 1 = 0$ | $k - k^2$ | $0 - 0 = 0$ |
> | riga 2 | $k^2 - k$ | $(k + 1) - (k + 1) = 0$ | $k - k = 0$ |
> | riga 3 | $0 - 0 = 0$ | $k - k = 0$ | $1 - 1 = 0$ |
>
> $${}^tA - A = \begin{pmatrix} 0 & k - k^2 & 0 \\ k^2 - k & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
> **Passo 3: quando $A$ è simmetrica.** La matrice è simmetrica esattamente quando questa differenza è la matrice nulla. Serve che $k - k^2$ sia zero. Raccolgo $k$: $k - k^2 = k \cdot (1 - k)$. Un prodotto di due numeri è zero quando uno dei due è zero. Quindi $k = 0$, oppure $1 - k = 0$, cioè $k = 1$.
>
> **Solo per $k = 0$ e per $k = 1$ la matrice $A$ è simmetrica.** Nel resto del problema serviva proprio questo: le matrici reali simmetriche hanno autovalori reali e una base ortonormale di autovettori (teorema spettrale, lezioni L25–L26).
>
> **Controllo.** Il risultato del passo 2 è una matrice antisimmetrica, come deve essere: la diagonale è fatta di zeri, e le due caselle $k - k^2$ e $k^2 - k$ sono una l'opposto dell'altra.

**I metodi**

Per la domanda «quale identità vale?» il metodo è nel riquadro alla fine della sezione sull'ordine nel prodotto. Per il rango e per la traccia eccone altri due.

> [!METODO] Il rango nel quiz
> 1. Cerca i doppioni a occhio: due colonne uguali, una riga multipla di un'altra, una riga che è la somma di altre due.
> 2. Se non ne vedi, prova una combinazione con numeri piccoli, come $-2$ e $3$. Nei quiz degli ultimi anni un doppione c'era quasi sempre. Nelle matrici $3 \times 3$: una colonna doppia di un'altra, oppure una riga somma delle altre due. Nella $4 \times 4$ del 05/02/2026 due righe erano combinazioni delle prime due.
> 3. Controlla che le righe rimaste siano indipendenti.
> 4. Se non trovi niente, riduci la matrice a scalini con Gauss (lezioni L11–L12). Per una matrice quadrata puoi anche calcolare il determinante (lezioni L09–L10): se è diverso da zero, il rango è il più grande possibile.

> [!METODO] La traccia di un prodotto
> 1. Controlla che il prodotto finale sia quadrato. I fattori possono anche non esserlo.
> 2. Non calcolare tutto il prodotto. Servono solo le caselle diagonali: la riga 1 per la colonna 1, la riga 2 per la colonna 2, e avanti così.
> 3. Somma i risultati.
> 4. Con tre fattori, come in $\tr(ABC)$: calcola per intero il prodotto delle prime due, poi solo la diagonale del prodotto con la terza. Se conviene, prima fai girare i fattori: $\tr(ABC) = \tr(CAB)$.
> 5. Nelle domande con radici e $\pi$ (appelli dell'08/02/2024 e del 07/09/2026) i numeri scomodi quasi sempre si cancellano: fidati del conto.

**Gli errori da evitare**

- Moltiplicare colonna per riga al posto di riga per colonna, oppure scambiare l'ordine dei due fattori.
- Dare per scontato che $AB$ e $BA$ siano uguali.
- Pensare che, se $AB$ è la matrice nulla, allora $A$ oppure $B$ sia la matrice nulla.
- Scrivere che la traccia di un prodotto è il prodotto delle tracce.
- Dimenticare che nella trasposta di un prodotto l'ordine si rovescia: ${}^t(AB) = {}^tB\,{}^tA$.
- Rispondere «non si può calcolare» quando il prodotto finale è quadrato, anche se i fattori non lo sono.
- Dichiarare un rango più grande del numero delle righe o del numero delle colonne.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione conviene copiare queste righe.
>
> - Taglie del prodotto: $(m \times n) \cdot (n \times p)$ dà $m \times p$. La formula: $(AB)_{ij} = \sum_k A_{ik}B_{kj}$.
> - Di solito $AB \neq BA$. Un prodotto può essere nullo senza che lo sia un fattore.
> - Trasposta di un prodotto: ${}^t(AB) = {}^tB\,{}^tA$.
> - Tracce: $\tr(AB) = \tr(BA)$ e $\tr(ABC) = \tr(CAB)$. In più $\tr(A\,{}^tA)$ è la somma dei quadrati dei numeri di $A$.
> - Rango: $\rk(A) = \rk({}^tA) \le \min(m, n)$.
> - Simmetrica vuol dire ${}^tA = A$. Antisimmetrica vuol dire ${}^tA = -A$.

## Quiz

```quiz
D: Siano $A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{pmatrix}$. Quale identità vale?
+ $AB = BA$
- $AB = A$
- $AB = B$
- $BA = A$
- $BA = B$
= La domanda chiede di calcolare i due prodotti e di confrontarli con $A$, con $B$ e tra loro. Si usa la regola riga per colonna. Per $AB$: la riga 1 di $A$ è $(1, 0, 0)$ e con le tre colonne di $B$ dà $1$, $0$, $0$. La riga 2 è $(1, 1, 0)$ e dà $1 - 1 = 0$, poi $0 + 1 = 1$, poi $0$. La riga 3 è $(1, 1, 1)$ e dà $1 - 1 + 0 = 0$, poi $0 + 1 - 1 = 0$, poi $1$. Quindi $AB$ ha 1 sulla diagonale e 0 altrove: è la matrice identità $I_3$. Per $BA$: la riga 1 di $B$ è $(1, 0, 0)$ e con le tre colonne di $A$ dà $1$, $0$, $0$. La riga 2 è $(-1, 1, 0)$ e dà $-1 + 1 = 0$, poi $1$, poi $0$. La riga 3 è $(0, -1, 1)$ e dà $-1 + 1 = 0$, poi $-1 + 1 = 0$, poi $1$. Anche $BA$ è $I_3$, quindi vale $AB = BA$. Le altre risposte sono false, perché $I_3$ non è né $A$ né $B$. È simile alla domanda 1 dell'appello del 15/01/2026.

D: Siano $A = \begin{pmatrix} 0 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} 3 & 1 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$. Quale identità vale?
+ $AB = A$
- $AB = B$
- $BA = A$
- $BA = B$
- $AB = BA$
= La domanda chiede di calcolare i prodotti e di vedere se uno è uguale ad $A$ oppure a $B$. Si usa la regola riga per colonna. Le colonne di $B$ contengono $3, 0, 0$, poi $1, 1, 0$, poi $-1, 0, 1$. La riga 1 di $A$ è $(0, 1, 2)$. Con la colonna 1 di $B$ dà $0 \cdot 3 + 1 \cdot 0 + 2 \cdot 0 = 0$. Con la colonna 2 dà $0 \cdot 1 + 1 \cdot 1 + 2 \cdot 0 = 1$. Con la colonna 3 dà $0 \cdot (-1) + 1 \cdot 0 + 2 \cdot 1 = 2$. Viene $(0, 1, 2)$, cioè di nuovo la riga 1 di $A$. La riga 2 di $A$ è $(0, 1, 1)$, e gli stessi tre conti danno $0$, $1$, $1$: di nuovo la riga di partenza. La riga 3 è fatta di zeri e dà zeri. Quindi $AB = A$. La risposta $AB = BA$ è la più tentatrice, ma è falsa. La riga 1 di $B$ è $(3, 1, -1)$, e con le colonne di $A$ dà $0$, poi $3 + 1 = 4$, poi $6 + 1 = 7$. La prima riga di $BA$ è $(0, 4, 7)$, diversa da quella di $AB$, di $A$ e di $B$. È simile alle domande 5 del 03/06/2026 e 6 del 24/01/2024.

D: Siano $A = \begin{pmatrix} \sqrt 5 & 0 & -\pi \\ 0 & \sqrt 2 & \sqrt 2 \\ \pi & \sqrt 5 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} \sqrt 5 & \pi & \sqrt 5 \\ \pi & 0 & -\pi \\ 0 & \sqrt 2 & \sqrt 2 \end{pmatrix}$. Quanto vale $\tr(AB)$?
+ $7$
- $(\sqrt 5 + \sqrt 2)^2$
- $5 + 2\pi^2$
- $\sqrt 7$
- $2\pi\sqrt 5$
= La domanda chiede la somma dei numeri sulla diagonale del prodotto. Bastano le tre caselle diagonali: riga 1 per colonna 1, riga 2 per colonna 2, riga 3 per colonna 3. Prima casella: $\sqrt 5 \cdot \sqrt 5 + 0 \cdot \pi + (-\pi) \cdot 0 = 5$, perché radice di 5 per radice di 5 fa 5. Seconda casella: $0 \cdot \pi + \sqrt 2 \cdot 0 + \sqrt 2 \cdot \sqrt 2 = 2$. Terza casella: $\pi \cdot \sqrt 5 + \sqrt 5 \cdot (-\pi) + 0 \cdot \sqrt 2 = 0$, perché i primi due pezzi sono uno l'opposto dell'altro. La traccia è $5 + 2 + 0 = 7$. Le risposte con $\pi$ e con le radici sono trappole: i numeri scomodi si cancellano. È simile alle domande 8 del 07/09/2026 e 4 dell'08/02/2024.

D: Data $A = \begin{pmatrix} 1 & 0 & 2 \\ 3 & 1 & 0 \end{pmatrix}$, quanto vale $\tr(A \cdot {}^tA)$?
+ $15$
- Non si può calcolare, poiché $A$ non è quadrata.
- $2$
- $7$
- $49$
= La domanda chiede di moltiplicare $A$ per la sua trasposta e di sommare la diagonale del risultato. $A$ è $2 \times 3$ e la sua trasposta è $3 \times 2$, quindi il prodotto è $2 \times 2$: è quadrato, e la traccia esiste. La risposta «non si può calcolare» è la trappola: a non essere quadrata è $A$, non il prodotto. Ogni casella diagonale del prodotto è una riga di $A$ per sé stessa. Riga 1: $1 \cdot 1 + 0 \cdot 0 + 2 \cdot 2 = 5$. Riga 2: $3 \cdot 3 + 1 \cdot 1 + 0 \cdot 0 = 10$. La traccia è $5 + 10 = 15$, cioè la somma dei quadrati di tutti i numeri di $A$. Il $2$ è la somma $a_{11} + a_{22}$, il $7$ è la somma di tutti i numeri di $A$. È simile alla domanda 9 dell'appello del 10/07/2025.

D: Qual è il rango della matrice $\begin{pmatrix} 2 & 1 & 3 \\ 1 & 1 & 2 \\ 3 & 2 & 5 \end{pmatrix}$?
+ $2$
- $3$
- $1$
- $0$
- $5$
= La domanda chiede quante righe indipendenti ha la matrice. Si cercano i doppioni. La terza riga è la somma delle prime due: $2 + 1 = 3$, poi $1 + 1 = 2$, poi $3 + 2 = 5$. Quindi si può togliere. Le prime due righe non sono una il multiplo dell'altra: al primo posto, per passare da $1$ a $2$ si moltiplica per 2, ma al secondo posto $1 \cdot 2$ fa $2$ e non $1$. Restano 2 righe indipendenti: il rango è 2. La risposta $3$ è la trappola: tre righe piene di numeri non vogliono dire rango 3. È simile alle domande 9 del 07/09/2026 e 6 del 16/01/2025.

D: $A$ è una matrice $2 \times 3$ e $B$ è una matrice $3 \times 4$. Quale affermazione è vera?
+ $AB$ è una matrice $2 \times 4$ e $BA$ non è definito.
- $AB$ e $BA$ sono entrambi definiti.
- $AB$ è una matrice $3 \times 3$.
- $AB$ non è definito, $BA$ è una matrice $4 \times 3$.
- $AB$ è $2 \times 4$ e $BA$ è $4 \times 2$.
= La domanda chiede quali prodotti si possono fare e di che taglia vengono. Si scrivono le due taglie una accanto all'altra. Per $AB$: $(2 \times 3) \cdot (3 \times 4)$. I numeri interni sono 3 e 3, quindi il prodotto esiste. I numeri esterni sono 2 e 4, quindi è una matrice $2 \times 4$. Per $BA$: $(3 \times 4) \cdot (2 \times 3)$. I numeri interni sono 4 e 2: sono diversi, quindi $BA$ non esiste. «Non è definito» vuol dire proprio «non esiste». L'ultima risposta è la più tentatrice, perché la taglia di $AB$ è giusta: ma sbaglia su $BA$.

D: Per matrici $A$ e $B$ per cui il prodotto $AB$ è definito, ${}^t(AB)$ è uguale a:
+ ${}^tB\,{}^tA$
- ${}^tA\,{}^tB$
- $AB$
- $BA$
- ${}^tA\,B$
= La domanda chiede la regola per la trasposta di un prodotto. È l'Esercizio 8.14 delle dispense: la trasposta di un prodotto è il prodotto delle trasposte **in ordine rovesciato**, cioè ${}^tB\,{}^tA$. La risposta ${}^tA\,{}^tB$ è la trappola, e di solito quel prodotto non esiste nemmeno. Se $A$ è $3 \times 2$ e $B$ è $2 \times 4$, le trasposte sono $2 \times 3$ e $4 \times 2$. Nell'ordine sbagliato le taglie sarebbero $(2 \times 3) \cdot (4 \times 2)$, con i numeri interni 3 e 4 diversi.

D: Per quali $k \in \R$ la matrice $A = \begin{pmatrix} 1 & k^2 & 2 \\ k & 0 & 1 \\ 2 & 1 & 3 \end{pmatrix}$ è simmetrica?
+ Per $k = 0$ oppure $k = 1$.
- Solo per $k = 1$.
- Solo per $k = 0$.
- Per $k = \pm 1$.
- Per nessun valore di $k$.
= La domanda chiede per quali numeri $k$ la matrice è uguale alla sua trasposta. Si confrontano le caselle ribaltate rispetto alla diagonale. Riga 1 e colonna 3 contro riga 3 e colonna 1: c'è $2$ in tutte e due. Riga 2 e colonna 3 contro riga 3 e colonna 2: c'è $1$ in tutte e due. Resta la coppia riga 1 e colonna 2 contro riga 2 e colonna 1: serve $k^2 = k$. Porto tutto a sinistra: $k^2 - k = 0$. Raccolgo $k$: $k \cdot (k - 1) = 0$. Un prodotto di due numeri è zero quando uno dei due è zero: $k = 0$ oppure $k = 1$. Le risposte con un valore solo dimenticano l'altro. Con $k = -1$ le due caselle sarebbero $1$ e $-1$, che sono diverse. È simile al problema 11 dell'appello del 15/01/2026.

D: Siano $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Quanto vale $\tr(ABA)$?
N: 4
= La domanda chiede la traccia di un prodotto di tre matrici. Prima si calcola per intero $AB$, poi bastano le due caselle diagonali di $(AB)A$. Prima riga di $AB$: $1 \cdot 0 + 2 \cdot 1 = 2$ e $1 \cdot 1 + 2 \cdot 0 = 1$. Seconda riga: $0 \cdot 0 + 1 \cdot 1 = 1$ e $0 \cdot 1 + 1 \cdot 0 = 0$. Quindi $AB = \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}$. Prima casella diagonale di $(AB)A$: la riga $(2, 1)$ per la colonna 1 di $A$, che contiene $1$ e $0$, dà $2 \cdot 1 + 1 \cdot 0 = 2$. Seconda casella diagonale: la riga $(1, 0)$ per la colonna 2 di $A$, che contiene $2$ e $1$, dà $1 \cdot 2 + 0 \cdot 1 = 2$. La traccia è $2 + 2 = 4$. L'errore tipico è moltiplicare le tre tracce: $2 \cdot 0 \cdot 2 = 0$. Ma la traccia di un prodotto non è il prodotto delle tracce. È simile alla domanda 3 dell'appello del 05/02/2026.

D: Sia $A$ una matrice $3 \times 5$ a coefficienti reali. Quale affermazione è sempre vera?
+ $\rk(A) \le 3$.
- $\rk(A)$ può essere uguale a $5$.
- $\rk({}^tA)$ può essere diverso da $\rk(A)$.
- $\rk(A) = 3$.
- Le 5 colonne di $A$ sono linearmente indipendenti.
= La domanda chiede che cosa si può dire del rango conoscendo solo la taglia. Il rango non supera né il numero delle righe né quello delle colonne. Qui le righe sono 3 e le colonne sono 5, quindi il rango è al massimo 3: è la risposta giusta. Il rango non può essere 5: le colonne hanno 3 numeri, e in $\R^3$ più di tre vettori sono sempre dipendenti. Per lo stesso motivo le 5 colonne non sono mai indipendenti. La risposta «il rango è 3» è la più tentatrice, ma non è **sempre** vera: la matrice nulla, per esempio, ha rango 0. Infine una matrice e la sua trasposta hanno sempre lo stesso rango (Proposizione 8.6).
```

## Esercizi

::: esercizio base Leggere una matrice
Prendi la matrice $A = \begin{pmatrix} 4 & -1 & 0 \\ 2 & 3 & 7 \end{pmatrix}$. (a) Che taglia ha? (b) Quanto valgono $a_{13}$ e $a_{21}$? (c) Scrivi la riga $A_2$ e la colonna $A^2$.
::: soluzione
(a) Conto le righe: sono 2. Conto le colonne: sono 3. La taglia è $2 \times 3$: prima le righe, poi le colonne.

(b) $a_{13}$ è il numero nella riga 1 e nella colonna 3. Nella prima riga il terzo numero è 0. Quindi $a_{13} = 0$.

$a_{21}$ è il numero nella riga 2 e nella colonna 1. Nella seconda riga il primo numero è 2. Quindi $a_{21} = 2$.

(c) L'indice in basso indica una riga: $A_2$ è la seconda riga, cioè $(2, 3, 7)$.

L'indice in alto indica una colonna: $A^2$ è la seconda colonna. Contiene $-1$ sopra e 3 sotto:
$$A^2 = \begin{pmatrix} -1 \\ 3 \end{pmatrix}.$$
:::

::: esercizio base Una trasposta e due controlli di simmetria
(a) Scrivi la trasposta di $\begin{pmatrix} 1 & 0 & 2 \\ -3 & 5 & 4 \end{pmatrix}$. (b) Quale di queste due matrici è simmetrica? $\begin{pmatrix} 2 & 7 \\ 7 & 1 \end{pmatrix}$ e $\begin{pmatrix} 0 & 3 \\ -3 & 1 \end{pmatrix}$.
::: soluzione
(a) Le righe diventano colonne.

1. La prima riga contiene $1, 0, 2$: diventa la prima colonna.
2. La seconda riga contiene $-3, 5, 4$: diventa la seconda colonna.

La trasposta è
$$\begin{pmatrix} 1 & -3 \\ 0 & 5 \\ 2 & 4 \end{pmatrix}.$$
La matrice di partenza era $2 \times 3$, la trasposta è $3 \times 2$.

(b) Una matrice è simmetrica quando le caselle ribaltate rispetto alla diagonale contengono lo stesso numero. In una $2 \times 2$ c'è una sola coppia da controllare: riga 1 e colonna 2 contro riga 2 e colonna 1.

- Prima matrice: 7 e 7. Sono uguali, quindi è **simmetrica**.
- Seconda matrice: 3 e $-3$. Sono diversi, quindi **non è simmetrica**.

La seconda matrice non è nemmeno antisimmetrica. I due numeri fuori dalla diagonale sono opposti, ma sulla diagonale c'è un 1, mentre in una matrice antisimmetrica la diagonale è fatta di zeri.
:::

::: esercizio base Quali prodotti si possono fare?
$A$ è una matrice $2 \times 3$, $B$ è una matrice $3 \times 3$, $C$ è una matrice $3 \times 2$. Per ciascuno dei prodotti $AB$, $BA$, $AC$, $CA$, $BC$, $CB$ di' se si può fare e di che taglia viene.
::: soluzione
Per ogni prodotto scrivo le due taglie una accanto all'altra. Se i due numeri interni sono uguali il prodotto si può fare, e i due numeri esterni danno la taglia.

| Prodotto | Taglie | Numeri interni | Si può fare? | Taglia del prodotto |
|---|---|---|---|---|
| $AB$ | $(2 \times 3) \cdot (3 \times 3)$ | 3 e 3 | sì | $2 \times 3$ |
| $BA$ | $(3 \times 3) \cdot (2 \times 3)$ | 3 e 2 | no | |
| $AC$ | $(2 \times 3) \cdot (3 \times 2)$ | 3 e 3 | sì | $2 \times 2$ |
| $CA$ | $(3 \times 2) \cdot (2 \times 3)$ | 2 e 2 | sì | $3 \times 3$ |
| $BC$ | $(3 \times 3) \cdot (3 \times 2)$ | 3 e 3 | sì | $3 \times 2$ |
| $CB$ | $(3 \times 2) \cdot (3 \times 3)$ | 2 e 3 | no | |

Nota le righe di $AC$ e $CA$: i due prodotti esistono tutti e due, ma hanno taglie diverse.
:::

::: esercizio base Un prodotto $2 \times 2$ e due tracce
Prendi $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$. Calcola $AB$ e $BA$. Poi calcola le due tracce.
::: soluzione
**Il prodotto $AB$.** Le righe di $A$ sono $(1, 2)$ e $(0, 1)$. Le colonne di $B$ contengono 3 e 1, poi 1 e 0.

| | colonna 1 di $B$ | colonna 2 di $B$ |
|---|---|---|
| riga 1 di $A$ | $1 \cdot 3 + 2 \cdot 1 = 5$ | $1 \cdot 1 + 2 \cdot 0 = 1$ |
| riga 2 di $A$ | $0 \cdot 3 + 1 \cdot 1 = 1$ | $0 \cdot 1 + 1 \cdot 0 = 0$ |

$$AB = \begin{pmatrix} 5 & 1 \\ 1 & 0 \end{pmatrix}$$

**Il prodotto $BA$.** Le righe di $B$ sono $(3, 1)$ e $(1, 0)$. Le colonne di $A$ contengono 1 e 0, poi 2 e 1.

| | colonna 1 di $A$ | colonna 2 di $A$ |
|---|---|---|
| riga 1 di $B$ | $3 \cdot 1 + 1 \cdot 0 = 3$ | $3 \cdot 2 + 1 \cdot 1 = 7$ |
| riga 2 di $B$ | $1 \cdot 1 + 0 \cdot 0 = 1$ | $1 \cdot 2 + 0 \cdot 1 = 2$ |

$$BA = \begin{pmatrix} 3 & 7 \\ 1 & 2 \end{pmatrix}$$

**Le tracce.** Sommo i numeri sulla diagonale. Per $AB$: $5 + 0 = 5$. Per $BA$: $3 + 2 = 5$.

I due prodotti sono matrici diverse, ma le tracce sono uguali: è la Proposizione 8.13.
:::

::: esercizio base Trasposta, parte simmetrica e parte antisimmetrica
Prendi $A = \begin{pmatrix} 1 & 4 & 2 \\ 0 & 3 & 5 \\ -2 & 1 & 6 \end{pmatrix}$. (a) Calcola ${}^tA$. (b) Calcola $S = \frac{A + {}^tA}2$ e $N = \frac{A - {}^tA}2$ e verifica che $S$ è simmetrica, $N$ è antisimmetrica e $S + N = A$. (c) Calcola $\tr A$ e $\tr({}^tA)$.
::: soluzione
(a) Le righe di $A$ diventano le colonne della trasposta.

1. La prima riga contiene $1, 4, 2$: diventa la prima colonna.
2. La seconda riga contiene $0, 3, 5$: diventa la seconda colonna.
3. La terza riga contiene $-2, 1, 6$: diventa la terza colonna.

$${}^tA = \begin{pmatrix} 1 & 0 & -2 \\ 4 & 3 & 1 \\ 2 & 5 & 6 \end{pmatrix}.$$

(b) **La somma**, casella per casella:
$$A + {}^tA = \begin{pmatrix} 1 + 1 & 4 + 0 & 2 + (-2) \\ 0 + 4 & 3 + 3 & 5 + 1 \\ -2 + 2 & 1 + 5 & 6 + 6 \end{pmatrix} = \begin{pmatrix} 2 & 4 & 0 \\ 4 & 6 & 6 \\ 0 & 6 & 12 \end{pmatrix}$$

**La differenza**, casella per casella:
$$A - {}^tA = \begin{pmatrix} 1 - 1 & 4 - 0 & 2 - (-2) \\ 0 - 4 & 3 - 3 & 5 - 1 \\ -2 - 2 & 1 - 5 & 6 - 6 \end{pmatrix} = \begin{pmatrix} 0 & 4 & 4 \\ -4 & 0 & 4 \\ -4 & -4 & 0 \end{pmatrix}$$

**Divido per 2** ogni casella delle due matrici:
$$S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 3 & 3 \\ 0 & 3 & 6 \end{pmatrix}, \qquad N = \begin{pmatrix} 0 & 2 & 2 \\ -2 & 0 & 2 \\ -2 & -2 & 0 \end{pmatrix}.$$

**$S$ è simmetrica.** Le coppie di caselle ribaltate contengono lo stesso numero: 2 e 2, poi 0 e 0, poi 3 e 3.

**$N$ è antisimmetrica.** La diagonale è fatta di zeri. Le coppie di caselle ribaltate contengono numeri opposti: 2 e $-2$ in tutte e tre le coppie.

**La somma ridà $A$.**
$$S + N = \begin{pmatrix} 1 + 0 & 2 + 2 & 0 + 2 \\ 2 - 2 & 3 + 0 & 3 + 2 \\ 0 - 2 & 3 - 2 & 6 + 0 \end{pmatrix} = \begin{pmatrix} 1 & 4 & 2 \\ 0 & 3 & 5 \\ -2 & 1 & 6 \end{pmatrix} = A$$

(c) La diagonale di $A$ contiene 1, 3 e 6: $\tr A = 1 + 3 + 6 = 10$. La diagonale della trasposta contiene gli stessi numeri, quindi $\tr({}^tA) = 10$. Trasponendo, la diagonale non cambia.
:::

::: esercizio base Esercizio 8.15 delle dispense: $AB$, $BA$ e le loro tracce
Siano $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$. Calcolare $AB$ e $BA$. Calcolare la traccia di $AB$ e di $BA$.
::: soluzione
**Le taglie.** $A$ è $3 \times 2$ e $B$ è $2 \times 3$.

- Per $AB$: $(3 \times 2) \cdot (2 \times 3)$. I numeri interni sono 2 e 2: si può fare, e viene una $3 \times 3$.
- Per $BA$: $(2 \times 3) \cdot (3 \times 2)$. I numeri interni sono 3 e 3: si può fare, e viene una $2 \times 2$.

I due prodotti esistono tutti e due, ma hanno taglie diverse.

**Il prodotto $AB$.** Le righe di $A$ sono $(1, 2)$, $(3, 4)$, $(5, 6)$. Le colonne di $B$ contengono 1 e 4, poi 2 e 5, poi 3 e 6.

| | colonna 1 di $B$ | colonna 2 di $B$ | colonna 3 di $B$ |
|---|---|---|---|
| riga 1 di $A$ | $1 \cdot 1 + 2 \cdot 4 = 9$ | $1 \cdot 2 + 2 \cdot 5 = 12$ | $1 \cdot 3 + 2 \cdot 6 = 15$ |
| riga 2 di $A$ | $3 \cdot 1 + 4 \cdot 4 = 19$ | $3 \cdot 2 + 4 \cdot 5 = 26$ | $3 \cdot 3 + 4 \cdot 6 = 33$ |
| riga 3 di $A$ | $5 \cdot 1 + 6 \cdot 4 = 29$ | $5 \cdot 2 + 6 \cdot 5 = 40$ | $5 \cdot 3 + 6 \cdot 6 = 51$ |

$$AB = \begin{pmatrix} 9 & 12 & 15 \\ 19 & 26 & 33 \\ 29 & 40 & 51 \end{pmatrix}, \qquad \tr(AB) = 9 + 26 + 51 = 86.$$

**Il prodotto $BA$.** Le righe di $B$ sono $(1, 2, 3)$ e $(4, 5, 6)$. Le colonne di $A$ contengono 1, 3, 5 e poi 2, 4, 6.

| | colonna 1 di $A$ | colonna 2 di $A$ |
|---|---|---|
| riga 1 di $B$ | $1 \cdot 1 + 2 \cdot 3 + 3 \cdot 5 = 22$ | $1 \cdot 2 + 2 \cdot 4 + 3 \cdot 6 = 28$ |
| riga 2 di $B$ | $4 \cdot 1 + 5 \cdot 3 + 6 \cdot 5 = 49$ | $4 \cdot 2 + 5 \cdot 4 + 6 \cdot 6 = 64$ |

$$BA = \begin{pmatrix} 22 & 28 \\ 49 & 64 \end{pmatrix}, \qquad \tr(BA) = 22 + 64 = 86.$$

**Che cosa si nota.** Le due tracce sono uguali anche se le due matrici hanno taglie diverse. La Proposizione 8.13 parla di matrici quadrate, ma la sua dimostrazione funziona anche quando $A$ è $m \times n$ e $B$ è $n \times m$.
:::

::: esercizio medio Quattro ranghi
Determina il rango delle matrici
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 0 \\ 0 & 3 & 6 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & -1 & 2 \\ -2 & 2 & -4 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 1 & 3 & 2 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}.$$
::: soluzione
Per ogni matrice cerco i doppioni tra le righe (o tra le colonne), li tolgo e conto quello che resta.

**La matrice $A$** (dal Foglio di esercizi 2 del tutorato 2025). Provo a ottenere la terza riga dalle prime due: due volte la prima, meno la seconda.

| | primo numero | secondo numero | terzo numero |
|---|---|---|---|
| 2 volte la riga 1 | $2 \cdot 1 = 2$ | $2 \cdot 2 = 4$ | $2 \cdot 3 = 6$ |
| riga 2 | $2$ | $1$ | $0$ |
| differenza | $2 - 2 = 0$ | $4 - 1 = 3$ | $6 - 0 = 6$ |

Viene $(0, 3, 6)$, che è la terza riga: è un doppione. Le prime due righe sono $(1, 2, 3)$ e $(2, 1, 0)$. Non sono una il multiplo dell'altra: al primo posto si passa da 1 a 2 moltiplicando per 2, ma al secondo posto $2 \cdot 2 = 4$ e non 1. Restano 2 righe indipendenti: $\rk(A) = 2$.

**La matrice $B$.** La seconda riga è la prima moltiplicata per $-2$:
$$-2 \cdot (1, -1, 2) = (-2, 2, -4).$$
È un doppione. Resta una riga sola, che non è fatta di zeri: $\rk(B) = 1$.

**La matrice $C$.** La terza riga è la somma delle prime due: $1 + 0 = 1$, poi $0 + 1 = 1$, poi $2 + 1 = 3$, poi $1 + 1 = 2$. È un doppione. Le prime due righe non sono una il multiplo dell'altra: la prima comincia con 1 e la seconda con 0, e al secondo posto succede il contrario. Restano 2 righe: $\rk(C) = 2$, anche se le colonne sono quattro.

**La matrice $D$.** Ha 3 righe e 2 colonne, quindi il rango è al massimo 2. Guardo le due colonne: contengono $1, 3, 5$ e $2, 4, 6$. In alto si passa da 1 a 2 moltiplicando per 2. Ma nel mezzo $3 \cdot 2 = 6$ e non 4. Le colonne non sono una il multiplo dell'altra, quindi sono indipendenti: $\rk(D) = 2$, il più grande possibile per questa taglia.
:::

::: esercizio medio Un prodotto nullo con fattori non nulli
Prendi $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 2 & -4 \\ -1 & 2 \end{pmatrix}$. Calcola $AB$ e $BA$. Che cosa impari?
::: soluzione
**Il prodotto $AB$.**
$$AB = \begin{pmatrix} 1 \cdot 2 + 2 \cdot (-1) & 1 \cdot (-4) + 2 \cdot 2 \\ 2 \cdot 2 + 4 \cdot (-1) & 2 \cdot (-4) + 4 \cdot 2 \end{pmatrix} = \begin{pmatrix} 2 - 2 & -4 + 4 \\ 4 - 4 & -8 + 8 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

**Il prodotto $BA$.**
$$BA = \begin{pmatrix} 2 \cdot 1 + (-4) \cdot 2 & 2 \cdot 2 + (-4) \cdot 4 \\ (-1) \cdot 1 + 2 \cdot 2 & (-1) \cdot 2 + 2 \cdot 4 \end{pmatrix} = \begin{pmatrix} 2 - 8 & 4 - 16 \\ -1 + 4 & -2 + 8 \end{pmatrix} = \begin{pmatrix} -6 & -12 \\ 3 & 6 \end{pmatrix}$$

**Che cosa si impara.** Tre cose.

1. Il prodotto $AB$ è la matrice nulla, ma né $A$ né $B$ sono la matrice nulla.
2. $AB$ è la matrice nulla e $BA$ no. Quindi $AB \neq BA$.
3. Non si può «semplificare». Anche $A$ per la matrice nulla dà la matrice nulla. Quindi $A$ per $B$ e $A$ per la matrice nulla danno lo stesso risultato, ma $B$ non è la matrice nulla.

**Perché succede.** La seconda colonna di $A$ è il doppio della prima: $A$ ha rango 1. Ogni colonna di $AB$ è una ricetta fatta con le colonne di $A$, e le quantità sono i numeri di una colonna di $B$. La prima colonna di $B$ contiene 2 e $-1$: la ricetta è «due volte la prima colonna di $A$, meno la seconda». Viene $(2 - 2,\ 4 - 4)$, cioè zero. La seconda colonna di $B$ contiene $-4$ e 2: la ricetta è «$-4$ volte la prima colonna di $A$, più due volte la seconda». Viene $(-4 + 4,\ -8 + 8)$, di nuovo zero.
:::

::: esercizio medio Potenze e il quadrato di una somma
Prendi $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$. (a) Calcola $A^2$ e $A^3$ e indovina $A^n$. (b) Calcola $(A + B)^2$ e $A^2 + 2AB + B^2$: sono uguali?
::: soluzione
Qui il numero in alto è una potenza: $A^2$ vuol dire $A$ per $A$, e $A^3$ vuol dire $A^2$ per $A$.

(a) **Il quadrato.**
$$A^2 = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 1 \cdot 0 & 1 \cdot 1 + 1 \cdot 1 \\ 0 \cdot 1 + 1 \cdot 0 & 0 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$$

**Il cubo.** Moltiplico il quadrato per $A$:
$$A^3 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2 \cdot 0 & 1 \cdot 1 + 2 \cdot 1 \\ 0 \cdot 1 + 1 \cdot 0 & 0 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$$

**La regola.** Ogni volta il numero in alto a destra aumenta di 1, e gli altri restano fermi. Quindi dopo $n$ moltiplicazioni:
$$A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}$$
Il controllo: se moltiplico questa matrice ancora per $A$, in alto a destra viene $1 \cdot 1 + n \cdot 1 = n + 1$. Il numero aumenta di 1 a ogni passo, come previsto.

(b) **Il lato sinistro.** Prima la somma, poi il quadrato:
$$A + B = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \qquad (A + B)^2 = \begin{pmatrix} 1 \cdot 1 + 1 \cdot 1 & 1 \cdot 1 + 1 \cdot 1 \\ 1 \cdot 1 + 1 \cdot 1 & 1 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$$

**I pezzi del lato destro.**
$$AB = \begin{pmatrix} 1 \cdot 0 + 1 \cdot 1 & 1 \cdot 0 + 1 \cdot 0 \\ 0 \cdot 0 + 1 \cdot 1 & 0 \cdot 0 + 1 \cdot 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$$
$$B^2 = \begin{pmatrix} 0 \cdot 0 + 0 \cdot 1 & 0 \cdot 0 + 0 \cdot 0 \\ 1 \cdot 0 + 0 \cdot 1 & 1 \cdot 0 + 0 \cdot 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$
Anche qui un prodotto è nullo senza che lo sia il fattore $B$.

**Il lato destro.**
$$A^2 + 2AB + B^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 2 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix}$$
Non è uguale a $(A + B)^2$: i due lati sono diversi.

**La formula giusta.** Il quadrato di una somma è $(A + B)(A + B) = A^2 + AB + BA + B^2$. Serve anche $BA$:
$$BA = \begin{pmatrix} 0 \cdot 1 + 0 \cdot 0 & 0 \cdot 1 + 0 \cdot 1 \\ 1 \cdot 1 + 0 \cdot 0 & 1 \cdot 1 + 0 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$$
$$A^2 + AB + BA + B^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$$
Questa volta torna. Il «doppio prodotto» imparato a scuola funziona solo quando $AB$ e $BA$ sono uguali.
:::

::: esercizio medio Esercizio 8.16 delle dispense: associatività sì, commutatività no
Siano $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$, $C = \begin{pmatrix} -1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & -1 & 0 \end{pmatrix}$. Calcolare $(AB)C$, $A(BC)$, $(BA)C$ e $C(BA)$.
::: soluzione
Le parentesi dicono quale prodotto va fatto per primo. Servono sette prodotti in tutto. In ogni tabella: la riga scritta a sinistra per la colonna scritta in alto.

**1. Il prodotto $AB$.** Le colonne di $B$ contengono $1, 0, 1$, poi $0, 1, 0$, poi $1, 0, 1$.

| | colonna 1 di $B$ | colonna 2 di $B$ | colonna 3 di $B$ |
|---|---|---|---|
| riga 1 di $A$: $(1, 2, 3)$ | $1 \cdot 1 + 2 \cdot 0 + 3 \cdot 1 = 4$ | $1 \cdot 0 + 2 \cdot 1 + 3 \cdot 0 = 2$ | $1 \cdot 1 + 2 \cdot 0 + 3 \cdot 1 = 4$ |
| riga 2 di $A$: $(4, 5, 6)$ | $4 \cdot 1 + 5 \cdot 0 + 6 \cdot 1 = 10$ | $4 \cdot 0 + 5 \cdot 1 + 6 \cdot 0 = 5$ | $4 \cdot 1 + 5 \cdot 0 + 6 \cdot 1 = 10$ |
| riga 3 di $A$: $(7, 8, 9)$ | $7 \cdot 1 + 8 \cdot 0 + 9 \cdot 1 = 16$ | $7 \cdot 0 + 8 \cdot 1 + 9 \cdot 0 = 8$ | $7 \cdot 1 + 8 \cdot 0 + 9 \cdot 1 = 16$ |

$$AB = \begin{pmatrix} 4 & 2 & 4 \\ 10 & 5 & 10 \\ 16 & 8 & 16 \end{pmatrix}$$

**2. Il prodotto $(AB)C$.** Le colonne di $C$ contengono $-1, 0, 0$, poi $0, 0, -1$, poi $0, -1, 0$. In ogni colonna c'è un solo numero diverso da zero. Quindi in ogni conto resta un pezzo solo: gli altri due sono moltiplicati per 0.

| | colonna 1 di $C$ | colonna 2 di $C$ | colonna 3 di $C$ |
|---|---|---|---|
| riga 1 di $AB$: $(4, 2, 4)$ | $4 \cdot (-1) = -4$ | $4 \cdot (-1) = -4$ | $2 \cdot (-1) = -2$ |
| riga 2 di $AB$: $(10, 5, 10)$ | $10 \cdot (-1) = -10$ | $10 \cdot (-1) = -10$ | $5 \cdot (-1) = -5$ |
| riga 3 di $AB$: $(16, 8, 16)$ | $16 \cdot (-1) = -16$ | $16 \cdot (-1) = -16$ | $8 \cdot (-1) = -8$ |

Nella prima colonna si usa il primo numero della riga. Nella seconda colonna si usa il terzo, perché il $-1$ di quella colonna sta in basso. Nella terza colonna si usa il secondo.

$$(AB)C = \begin{pmatrix} -4 & -4 & -2 \\ -10 & -10 & -5 \\ -16 & -16 & -8 \end{pmatrix}$$

**3. Il prodotto $BC$.** Stesso criterio: in ogni conto resta un pezzo solo.

| | colonna 1 di $C$ | colonna 2 di $C$ | colonna 3 di $C$ |
|---|---|---|---|
| riga 1 di $B$: $(1, 0, 1)$ | $1 \cdot (-1) = -1$ | $1 \cdot (-1) = -1$ | $0 \cdot (-1) = 0$ |
| riga 2 di $B$: $(0, 1, 0)$ | $0 \cdot (-1) = 0$ | $0 \cdot (-1) = 0$ | $1 \cdot (-1) = -1$ |
| riga 3 di $B$: $(1, 0, 1)$ | $1 \cdot (-1) = -1$ | $1 \cdot (-1) = -1$ | $0 \cdot (-1) = 0$ |

$$BC = \begin{pmatrix} -1 & -1 & 0 \\ 0 & 0 & -1 \\ -1 & -1 & 0 \end{pmatrix}$$

**4. Il prodotto $A(BC)$.** Le colonne di $BC$ contengono $-1, 0, -1$, poi di nuovo $-1, 0, -1$, poi $0, -1, 0$.

| | colonna 1 di $BC$ | colonna 2 di $BC$ | colonna 3 di $BC$ |
|---|---|---|---|
| riga 1 di $A$: $(1, 2, 3)$ | $1 \cdot (-1) + 2 \cdot 0 + 3 \cdot (-1) = -4$ | $1 \cdot (-1) + 2 \cdot 0 + 3 \cdot (-1) = -4$ | $1 \cdot 0 + 2 \cdot (-1) + 3 \cdot 0 = -2$ |
| riga 2 di $A$: $(4, 5, 6)$ | $4 \cdot (-1) + 5 \cdot 0 + 6 \cdot (-1) = -10$ | $4 \cdot (-1) + 5 \cdot 0 + 6 \cdot (-1) = -10$ | $4 \cdot 0 + 5 \cdot (-1) + 6 \cdot 0 = -5$ |
| riga 3 di $A$: $(7, 8, 9)$ | $7 \cdot (-1) + 8 \cdot 0 + 9 \cdot (-1) = -16$ | $7 \cdot (-1) + 8 \cdot 0 + 9 \cdot (-1) = -16$ | $7 \cdot 0 + 8 \cdot (-1) + 9 \cdot 0 = -8$ |

$$A(BC) = \begin{pmatrix} -4 & -4 & -2 \\ -10 & -10 & -5 \\ -16 & -16 & -8 \end{pmatrix} = (AB)C$$

Le due matrici sono uguali, come dice l'associatività (Proposizione 8.11).

**5. Il prodotto $BA$.** Le colonne di $A$ contengono $1, 4, 7$, poi $2, 5, 8$, poi $3, 6, 9$.

| | colonna 1 di $A$ | colonna 2 di $A$ | colonna 3 di $A$ |
|---|---|---|---|
| riga 1 di $B$: $(1, 0, 1)$ | $1 \cdot 1 + 0 \cdot 4 + 1 \cdot 7 = 8$ | $1 \cdot 2 + 0 \cdot 5 + 1 \cdot 8 = 10$ | $1 \cdot 3 + 0 \cdot 6 + 1 \cdot 9 = 12$ |
| riga 2 di $B$: $(0, 1, 0)$ | $0 \cdot 1 + 1 \cdot 4 + 0 \cdot 7 = 4$ | $0 \cdot 2 + 1 \cdot 5 + 0 \cdot 8 = 5$ | $0 \cdot 3 + 1 \cdot 6 + 0 \cdot 9 = 6$ |
| riga 3 di $B$: $(1, 0, 1)$ | $1 \cdot 1 + 0 \cdot 4 + 1 \cdot 7 = 8$ | $1 \cdot 2 + 0 \cdot 5 + 1 \cdot 8 = 10$ | $1 \cdot 3 + 0 \cdot 6 + 1 \cdot 9 = 12$ |

$$BA = \begin{pmatrix} 8 & 10 & 12 \\ 4 & 5 & 6 \\ 8 & 10 & 12 \end{pmatrix}$$

**6. Il prodotto $(BA)C$.** Come al punto 2: in ogni conto resta un pezzo solo.

| | colonna 1 di $C$ | colonna 2 di $C$ | colonna 3 di $C$ |
|---|---|---|---|
| riga 1 di $BA$: $(8, 10, 12)$ | $8 \cdot (-1) = -8$ | $12 \cdot (-1) = -12$ | $10 \cdot (-1) = -10$ |
| riga 2 di $BA$: $(4, 5, 6)$ | $4 \cdot (-1) = -4$ | $6 \cdot (-1) = -6$ | $5 \cdot (-1) = -5$ |
| riga 3 di $BA$: $(8, 10, 12)$ | $8 \cdot (-1) = -8$ | $12 \cdot (-1) = -12$ | $10 \cdot (-1) = -10$ |

$$(BA)C = \begin{pmatrix} -8 & -12 & -10 \\ -4 & -6 & -5 \\ -8 & -12 & -10 \end{pmatrix}$$

**7. Il prodotto $C(BA)$.** Adesso $C$ sta a sinistra, quindi si usano le sue righe: $(-1, 0, 0)$, $(0, 0, -1)$, $(0, -1, 0)$. Le colonne di $BA$ contengono $8, 4, 8$, poi $10, 5, 10$, poi $12, 6, 12$.

| | colonna 1 di $BA$ | colonna 2 di $BA$ | colonna 3 di $BA$ |
|---|---|---|---|
| riga 1 di $C$: $(-1, 0, 0)$ | $(-1) \cdot 8 = -8$ | $(-1) \cdot 10 = -10$ | $(-1) \cdot 12 = -12$ |
| riga 2 di $C$: $(0, 0, -1)$ | $(-1) \cdot 8 = -8$ | $(-1) \cdot 10 = -10$ | $(-1) \cdot 12 = -12$ |
| riga 3 di $C$: $(0, -1, 0)$ | $(-1) \cdot 4 = -4$ | $(-1) \cdot 5 = -5$ | $(-1) \cdot 6 = -6$ |

La riga 1 di $C$ usa il primo numero di ogni colonna, la riga 2 usa il terzo, la riga 3 usa il secondo.

$$C(BA) = \begin{pmatrix} -8 & -10 & -12 \\ -8 & -10 & -12 \\ -4 & -5 & -6 \end{pmatrix}$$

**La morale.** $(AB)C$ e $A(BC)$ sono uguali: le parentesi si possono spostare. Invece $(BA)C$ e $C(BA)$ sono diverse: le lettere non si possono scambiare. Nota che moltiplicare per $C$ **a destra** cambia segno e scambia due **colonne**, mentre moltiplicare per $C$ **a sinistra** cambia segno e scambia due **righe**.
:::

::: esercizio medio Esercizio 8.14 delle dispense: la trasposta di un prodotto
Dimostrare che vale la relazione ${}^t(AB) = {}^tB\,{}^tA$.
::: soluzione
**L'idea.** Due matrici sono uguali quando hanno la stessa taglia e lo stesso numero in ogni casella. Quindi controllo la taglia, e poi una casella qualsiasi.

Chiamo $m \times n$ la taglia di $A$ e $n \times p$ la taglia di $B$. Così il prodotto $AB$ esiste ed è $m \times p$.

1. **Le taglie tornano.** La trasposta di $AB$ è $p \times m$. La trasposta di $B$ è $p \times n$ e quella di $A$ è $n \times m$. I numeri interni sono uguali, quindi ${}^tB\,{}^tA$ esiste ed è $p \times m$. Nell'ordine sbagliato le taglie sarebbero $(n \times m) \cdot (p \times n)$, e di solito quel prodotto non esiste.
2. **La casella di riga $i$ e colonna $j$ del lato sinistro.** Per la regola della trasposta è la casella di riga $j$ e colonna $i$ di $AB$. Per la formula del prodotto è la riga $j$ di $A$ per la colonna $i$ di $B$:
   $$({}^t(AB))_{ij} = (AB)_{ji} = \sum_{k=1}^n A_{jk}B_{ki}.$$
3. **La casella di riga $i$ e colonna $j$ del lato destro.** Per la formula del prodotto è la riga $i$ di ${}^tB$ per la colonna $j$ di ${}^tA$. Per la regola della trasposta, in ogni pezzo gli indici si scambiano:
   $$({}^tB\,{}^tA)_{ij} = \sum_{k=1}^n ({}^tB)_{ik}({}^tA)_{kj} = \sum_{k=1}^n B_{ki}A_{jk}.$$
4. **Il confronto.** Le due somme hanno gli stessi pezzi: $A_{jk}B_{ki}$ e $B_{ki}A_{jk}$ sono lo stesso numero, perché tra numeri l'ordine di un prodotto non conta. Le due matrici hanno la stessa taglia e lo stesso numero in ogni casella: sono uguali.

**Lo stesso ragionamento a parole.** La riga $i$ di ${}^tB$ contiene i numeri della colonna $i$ di $B$. La colonna $j$ di ${}^tA$ contiene i numeri della riga $j$ di $A$. Quindi «riga $i$ di ${}^tB$ per colonna $j$ di ${}^tA$» usa gli stessi numeri di «riga $j$ di $A$ per colonna $i$ di $B$». E quest'ultimo conto è la casella di $AB$ che, dopo la trasposizione, finisce nella riga $i$ e nella colonna $j$.

**Controllo con i numeri** dell'Esempio 8.8. Lì avevamo trovato
$$AB = \begin{pmatrix} 5 & 2 & 6 & 1 \\ 4 & -2 & 3 & -1 \\ 9 & 0 & 9 & 0 \end{pmatrix}$$
La prima riga della trasposta di $AB$ è la prima colonna di $AB$: contiene $5, 4, 9$.

Dall'altro lato, la prima riga di ${}^tB$ è la prima colonna di $B$: $(-1, 3)$. Le colonne di ${}^tA$ sono le righe di $A$: contengono 1 e 2, poi $-1$ e 1, poi 0 e 3. I tre conti:

- $(-1) \cdot 1 + 3 \cdot 2 = -1 + 6 = 5$;
- $(-1) \cdot (-1) + 3 \cdot 1 = 1 + 3 = 4$;
- $(-1) \cdot 0 + 3 \cdot 3 = 0 + 9 = 9$.

Viene $5, 4, 9$: la stessa riga.
:::

::: esercizio difficile Le matrici che commutano con una matrice data
Trova tutte le matrici $X = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in M(2, \R)$ per cui $AX = XA$, dove $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.
::: soluzione
Due matrici **commutano** quando il loro prodotto è lo stesso nei due ordini. Le lettere $a$, $b$, $c$, $d$ sono i quattro numeri di $X$, che non conosciamo: l'esercizio chiede quali valori possono avere.

**1. Il prodotto $AX$.** Le righe di $A$ sono $(1, 1)$ e $(0, 1)$. Le colonne di $X$ contengono $a$ e $c$, poi $b$ e $d$.
$$AX = \begin{pmatrix} 1 \cdot a + 1 \cdot c & 1 \cdot b + 1 \cdot d \\ 0 \cdot a + 1 \cdot c & 0 \cdot b + 1 \cdot d \end{pmatrix} = \begin{pmatrix} a + c & b + d \\ c & d \end{pmatrix}$$

**2. Il prodotto $XA$.** Le righe di $X$ sono $(a, b)$ e $(c, d)$. Le colonne di $A$ contengono 1 e 0, poi 1 e 1.
$$XA = \begin{pmatrix} a \cdot 1 + b \cdot 0 & a \cdot 1 + b \cdot 1 \\ c \cdot 1 + d \cdot 0 & c \cdot 1 + d \cdot 1 \end{pmatrix} = \begin{pmatrix} a & a + b \\ c & c + d \end{pmatrix}$$

**3. Uguaglio casella per casella.** Le due matrici sono uguali quando lo sono tutte e quattro le caselle.

| Casella | Condizione | Che cosa dice |
|---|---|---|
| riga 1, colonna 1 | $a + c = a$ | tolgo $a$ dai due lati: $c = 0$ |
| riga 1, colonna 2 | $b + d = a + b$ | tolgo $b$ dai due lati: $d = a$ |
| riga 2, colonna 1 | $c = c$ | sempre vera |
| riga 2, colonna 2 | $d = c + d$ | tolgo $d$ dai due lati: di nuovo $c = 0$ |

**4. La risposta.** Serve $c = 0$ e $d = a$. I numeri $a$ e $b$ restano liberi: puoi sceglierli come vuoi. Le matrici cercate sono
$$X = \begin{pmatrix} a & b \\ 0 & a \end{pmatrix} = a \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + b \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad a, b \in \R.$$
Sono tutte le ricette fatte con due matrici fisse. Per questo formano un sottospazio di $M(2, \R)$ di dimensione 2.

**Controllo** con $a = 2$ e $b = 3$, cioè $X = \begin{pmatrix} 2 & 3 \\ 0 & 2 \end{pmatrix}$:
$$AX = \begin{pmatrix} 1 \cdot 2 + 1 \cdot 0 & 1 \cdot 3 + 1 \cdot 2 \\ 0 \cdot 2 + 1 \cdot 0 & 0 \cdot 3 + 1 \cdot 2 \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ 0 & 2 \end{pmatrix} \qquad XA = \begin{pmatrix} 2 \cdot 1 + 3 \cdot 0 & 2 \cdot 1 + 3 \cdot 1 \\ 0 \cdot 1 + 2 \cdot 0 & 0 \cdot 1 + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ 0 & 2 \end{pmatrix}$$
I due prodotti sono uguali.

Una matrice con $c$ diverso da zero, invece, **non** commuta con $A$. È il caso della matrice $B$ dell'esercizio 9, che ha $c = 1$: lì $AB$ e $BA$ sono diverse. Commutare è un'eccezione, non la regola.
:::

::: esercizio difficile La traccia di $A\,{}^tA$
(a) Dimostra che per ogni matrice reale $A$ di taglia $m \times n$ vale $\tr(A\,{}^tA) = \sum_{i, j} a_{ij}^2$. (b) Deduci che se $\tr(A\,{}^tA) = 0$ allora $A = 0$. (c) Mostra con $A = \begin{pmatrix} 1 & i \\ 0 & 0 \end{pmatrix} \in M(2, \C)$ che (b) è falso sui numeri complessi.
::: soluzione
A parole, il punto (a) dice: la traccia di una matrice per la sua trasposta è la **somma dei quadrati di tutti i suoi numeri**. La scrittura $\sum_{i, j} a_{ij}^2$ vuol dire proprio questo: si somma $a_{ij}^2$ per tutte le caselle.

(a) **Passo 1: la traccia esiste.** $A$ è $m \times n$ e la sua trasposta è $n \times m$. Il prodotto $A\,{}^tA$ è $m \times m$: è quadrato.

**Passo 2: una casella diagonale.** La casella di riga $i$ e colonna $i$ del prodotto è la riga $i$ di $A$ per la colonna $i$ di ${}^tA$. Ma la colonna $i$ della trasposta contiene i numeri della riga $i$ di $A$. Quindi è la riga $i$ per sé stessa: ogni numero della riga viene moltiplicato per sé stesso, e poi si somma.
$$(A\,{}^tA)_{ii} = \sum_{j=1}^n A_{ij}({}^tA)_{ji} = \sum_{j=1}^n A_{ij}A_{ij} = \sum_{j=1}^n a_{ij}^2.$$
È la somma dei quadrati dei numeri della riga $i$.

**Passo 3: la traccia.** La traccia somma le caselle diagonali, una per ogni riga. Sommando le righe si ottiene la somma dei quadrati di tutti i numeri della matrice.

**Un controllo con i numeri.** Per la matrice $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ le due caselle diagonali del prodotto sono $1 \cdot 1 + 2 \cdot 2 = 5$ e $3 \cdot 3 + 4 \cdot 4 = 25$. La traccia è $5 + 25 = 30$. La somma dei quadrati è $1 + 4 + 9 + 16 = 30$.

(b) Il quadrato di un numero reale non è mai negativo: è zero solo per il numero zero, altrimenti è positivo. Una somma di numeri che non sono mai negativi fa zero solo se sono **tutti** zero. Quindi ogni $a_{ij}^2$ è zero, cioè ogni $a_{ij}$ è zero. La matrice $A$ è la matrice nulla.

(c) Qui $i$ non è un indice: è l'unità immaginaria della lezione L02, il numero per cui $i \cdot i = -1$. La trasposta è ${}^tA = \begin{pmatrix} 1 & 0 \\ i & 0 \end{pmatrix}$. Il prodotto:
$$A\,{}^tA = \begin{pmatrix} 1 & i \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ i & 0 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + i \cdot i & 1 \cdot 0 + i \cdot 0 \\ 0 \cdot 1 + 0 \cdot i & 0 \cdot 0 + 0 \cdot 0 \end{pmatrix} = \begin{pmatrix} 1 - 1 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$
La traccia è 0, ma $A$ non è la matrice nulla. Con i numeri complessi i quadrati possono cancellarsi tra loro: $1^2 + i^2 = 1 - 1 = 0$. È uno dei motivi per cui, per i vettori complessi, nella lezione L25 arriverà il prodotto hermitiano.
:::

::: esercizio esame Quale identità vale?
Siano $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 2 & -1 & 3 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 3 & -1 & 0 \end{pmatrix}$. Quale identità vale? (a) $AB = BA$; (b) $AB = A$; (c) $AB = B$; (d) $BA = A$; (e) $BA = B$.
::: soluzione
Seguo il metodo «Quale identità vale?»: calcolo $AB$, lo confronto con $A$ e con $B$, poi calcolo $BA$.

**1. Il prodotto $AB$.** Le colonne di $B$ contengono $1, 0, 3$, poi $2, 1, -1$, poi $0, 0, 0$.

| | colonna 1 di $B$ | colonna 2 di $B$ | colonna 3 di $B$ |
|---|---|---|---|
| riga 1 di $A$: $(1, 0, 0)$ | $1 \cdot 1 + 0 \cdot 0 + 0 \cdot 3 = 1$ | $1 \cdot 2 + 0 \cdot 1 + 0 \cdot (-1) = 2$ | $0$ |
| riga 2 di $A$: $(0, 1, 0)$ | $0 \cdot 1 + 1 \cdot 0 + 0 \cdot 3 = 0$ | $0 \cdot 2 + 1 \cdot 1 + 0 \cdot (-1) = 1$ | $0$ |
| riga 3 di $A$: $(2, -1, 3)$ | $2 \cdot 1 + (-1) \cdot 0 + 3 \cdot 3 = 11$ | $2 \cdot 2 + (-1) \cdot 1 + 3 \cdot (-1) = 0$ | $0$ |

Nella terza colonna viene sempre 0, perché la terza colonna di $B$ è fatta di zeri.

$$AB = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 11 & 0 & 0 \end{pmatrix}$$

**2. Il confronto.** Guardo la casella di riga 3 e colonna 1. In $AB$ c'è 11, in $A$ c'è 2, in $B$ c'è 3. Basta questa casella: $AB$ non è uguale ad $A$ e non è uguale a $B$. Le risposte (b) e (c) sono false.

**3. Il prodotto $BA$.** Le colonne di $A$ contengono $1, 0, 2$, poi $0, 1, -1$, poi $0, 0, 3$.

| | colonna 1 di $A$ | colonna 2 di $A$ | colonna 3 di $A$ |
|---|---|---|---|
| riga 1 di $B$: $(1, 2, 0)$ | $1 \cdot 1 + 2 \cdot 0 + 0 \cdot 2 = 1$ | $1 \cdot 0 + 2 \cdot 1 + 0 \cdot (-1) = 2$ | $1 \cdot 0 + 2 \cdot 0 + 0 \cdot 3 = 0$ |
| riga 2 di $B$: $(0, 1, 0)$ | $0 \cdot 1 + 1 \cdot 0 + 0 \cdot 2 = 0$ | $0 \cdot 0 + 1 \cdot 1 + 0 \cdot (-1) = 1$ | $0 \cdot 0 + 1 \cdot 0 + 0 \cdot 3 = 0$ |
| riga 3 di $B$: $(3, -1, 0)$ | $3 \cdot 1 + (-1) \cdot 0 + 0 \cdot 2 = 3$ | $3 \cdot 0 + (-1) \cdot 1 + 0 \cdot (-1) = -1$ | $3 \cdot 0 + (-1) \cdot 0 + 0 \cdot 3 = 0$ |

$$BA = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 3 & -1 & 0 \end{pmatrix} = B$$

**4. La risposta.** $BA = B$: la risposta giusta è la **(e)**. Le altre due sono false. La (d) perché $BA$ è uguale a $B$, e $B$ è diversa da $A$. La (a) perché nella riga 3 e colonna 1 il prodotto $AB$ ha 11 e il prodotto $BA$ ha 3.
:::

::: esercizio esame Una traccia di tre fattori e un rango $4 \times 4$
(a) Siano $A = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}$. Calcola $\tr(ABC)$ e confrontala con $\tr(ACB)$. (b) Determina il rango di $M = \begin{pmatrix} 1 & 0 & 1 & 2 \\ 0 & 3 & 0 & 1 \\ 1 & 6 & 1 & 4 \\ 2 & 3 & 2 & 5 \end{pmatrix}$.
::: soluzione
(a) Seguo il metodo per le tracce: calcolo per intero il prodotto delle prime due matrici, poi solo le caselle diagonali del prodotto con la terza.

**1. Il prodotto $AB$.**
$$AB = \begin{pmatrix} 1 \cdot 2 + (-1) \cdot 1 & 1 \cdot 0 + (-1) \cdot 1 \\ 0 \cdot 2 + 2 \cdot 1 & 0 \cdot 0 + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 2 & 2 \end{pmatrix}$$

**2. La diagonale di $(AB)C$.** Le colonne di $C$ contengono 0 e 1, poi 1 e $-1$.

- Riga 1 di $AB$ per colonna 1 di $C$: $1 \cdot 0 + (-1) \cdot 1 = -1$.
- Riga 2 di $AB$ per colonna 2 di $C$: $2 \cdot 1 + 2 \cdot (-1) = 0$.

Quindi $\tr(ABC) = -1 + 0 = -1$.

**3. Il prodotto $AC$.**
$$AC = \begin{pmatrix} 1 \cdot 0 + (-1) \cdot 1 & 1 \cdot 1 + (-1) \cdot (-1) \\ 0 \cdot 0 + 2 \cdot 1 & 0 \cdot 1 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ 2 & -2 \end{pmatrix}$$

**4. La diagonale di $(AC)B$.** Le colonne di $B$ contengono 2 e 1, poi 0 e 1.

- Riga 1 di $AC$ per colonna 1 di $B$: $(-1) \cdot 2 + 2 \cdot 1 = 0$.
- Riga 2 di $AC$ per colonna 2 di $B$: $2 \cdot 0 + (-2) \cdot 1 = -2$.

Quindi $\tr(ACB) = 0 + (-2) = -2$.

**5. Il confronto.** Le due tracce sono diverse: $-1$ e $-2$. Far girare i fattori ($BCA$, $CAB$) non cambia la traccia. Scambiare due fattori vicini, come $B$ e $C$, può cambiarla.

(b) Cerco i doppioni tra le righe. Le chiamo riga 1, riga 2, riga 3 e riga 4.

**La riga 3 è la riga 1 più due volte la riga 2.**

| | primo numero | secondo numero | terzo numero | quarto numero |
|---|---|---|---|---|
| riga 1 | $1$ | $0$ | $1$ | $2$ |
| 2 volte la riga 2 | $2 \cdot 0 = 0$ | $2 \cdot 3 = 6$ | $2 \cdot 0 = 0$ | $2 \cdot 1 = 2$ |
| somma | $1 + 0 = 1$ | $0 + 6 = 6$ | $1 + 0 = 1$ | $2 + 2 = 4$ |

Viene $(1, 6, 1, 4)$: è la riga 3.

**La riga 4 è due volte la riga 1 più la riga 2.**

| | primo numero | secondo numero | terzo numero | quarto numero |
|---|---|---|---|---|
| 2 volte la riga 1 | $2 \cdot 1 = 2$ | $2 \cdot 0 = 0$ | $2 \cdot 1 = 2$ | $2 \cdot 2 = 4$ |
| riga 2 | $0$ | $3$ | $0$ | $1$ |
| somma | $2 + 0 = 2$ | $0 + 3 = 3$ | $2 + 0 = 2$ | $4 + 1 = 5$ |

Viene $(2, 3, 2, 5)$: è la riga 4.

Le righe 3 e 4 sono doppioni, e le tolgo. Restano la riga 1 e la riga 2. Non sono una il multiplo dell'altra: la riga 1 ha 0 al secondo posto, dove la riga 2 ha 3. La riga 2 ha 0 al primo posto, dove la riga 1 ha 1. Quindi sono indipendenti, e $\rk(M) = 2$.

Si poteva notare anche che la terza colonna è uguale alla prima. Ma questo dice solo che il rango è al massimo 3: per arrivare a 2 servono le relazioni tra le righe.
:::

::: esercizio esame Quando $A$ è simmetrica?
Prendi $A = \begin{pmatrix} 2 & k & 1 \\ k^2 & 1 & k \\ 1 & 1 & 0 \end{pmatrix}$, con $k \in \R$. (a) Calcola ${}^tA - A$. (b) Per quali $k$ la matrice $A$ è simmetrica? (c) Verifica che ${}^tA - A$ è antisimmetrica per ogni $k$.
::: soluzione
La lettera $k$ è un parametro: un numero reale che non conosciamo, e che nei conti resta scritto come lettera.

(a) **La trasposta.** Le righe diventano colonne. La prima riga contiene $2, k, 1$. La seconda contiene $k^2, 1, k$. La terza contiene $1, 1, 0$.
$${}^tA = \begin{pmatrix} 2 & k^2 & 1 \\ k & 1 & 1 \\ 1 & k & 0 \end{pmatrix}$$

**La differenza, casella per casella.** In ogni casella: il numero di ${}^tA$ meno il numero di $A$.

| | colonna 1 | colonna 2 | colonna 3 |
|---|---|---|---|
| riga 1 | $2 - 2 = 0$ | $k^2 - k$ | $1 - 1 = 0$ |
| riga 2 | $k - k^2$ | $1 - 1 = 0$ | $1 - k$ |
| riga 3 | $1 - 1 = 0$ | $k - 1$ | $0 - 0 = 0$ |

$${}^tA - A = \begin{pmatrix} 0 & k^2 - k & 0 \\ k - k^2 & 0 & 1 - k \\ 0 & k - 1 & 0 \end{pmatrix}.$$

(b) La matrice è simmetrica esattamente quando ${}^tA - A$ è la matrice nulla. Servono due condizioni **insieme**.

1. $k^2 - k = 0$. Raccolgo $k$: $k \cdot (k - 1) = 0$. Un prodotto di due numeri è zero quando uno dei due è zero: $k = 0$ oppure $k = 1$.
2. $1 - k = 0$, cioè $k = 1$.

Il solo valore che va bene per tutte e due è $k = 1$. Quindi $A$ è simmetrica **solo per $k = 1$**.

**Controllo.** Con $k = 1$ la matrice diventa $\begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}$, che è simmetrica. Con $k = 0$ diventa $\begin{pmatrix} 2 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 1 & 0 \end{pmatrix}$: nella riga 2 e colonna 3 c'è 0, nella riga 3 e colonna 2 c'è 1. Non è simmetrica.

(c) Guardo la matrice del punto (a). La diagonale è fatta di zeri. Le coppie di caselle ribaltate contengono numeri opposti:

- $k^2 - k$ e $k - k^2$;
- $0$ e $0$;
- $1 - k$ e $k - 1$.

Quindi la matrice è antisimmetrica, qualunque sia $k$. Vale per ogni matrice quadrata: se trasponi ${}^tA - A$ ottieni $A - {}^tA$, perché trasporre due volte riporta ad $A$. E $A - {}^tA$ è la matrice di partenza con tutti i segni cambiati.
:::

## Domande di ripasso

::: domanda Che cos'è la trasposta di una matrice e che taglia ha?
È la matrice che si ottiene scambiando le righe con le colonne: la prima riga diventa la prima colonna, la seconda riga la seconda colonna, e avanti così. Si scrive ${}^tA$. Se la matrice di partenza è $m \times n$, la trasposta è $n \times m$. La regola degli indirizzi è $({}^tA)_{ij} = A_{ji}$.
:::

::: domanda Come si riconoscono con la trasposta le matrici simmetriche e antisimmetriche? Perché un'antisimmetrica ha la diagonale nulla?
Una matrice quadrata è simmetrica se è uguale alla sua trasposta: ${}^tA = A$. È antisimmetrica se la sua trasposta è la matrice con tutti i segni cambiati: ${}^tA = -A$.

Una casella della diagonale, ribaltata, resta sé stessa. In una matrice antisimmetrica il suo numero deve quindi essere uguale al proprio opposto. L'unico numero così è lo 0.
:::

::: domanda Che cosa vuol dire la scrittura ${}^t(1, 0, -1)$?
È il vettore colonna con i numeri 1, 0 e $-1$, letti dall'alto in basso. Si scrive in riga, con la piccola $t$ davanti, per risparmiare spazio.
:::

::: domanda Come si definisce il rango di una matrice?
È la dimensione dello spazio generato dalle colonne, cioè dello Span delle colonne. Lo stesso numero si ottiene contando quante colonne indipendenti si possono scegliere al massimo (Proposizione 8.4).
:::

::: domanda Perché il rango è il massimo numero di colonne indipendenti?
Le colonne generano il loro Span. Se una colonna è un doppione, cioè una combinazione lineare delle altre, si può togliere: lo Span non cambia. Togliendo un doppione alla volta restano colonne indipendenti che generano lo stesso spazio. Sono una base, e il loro numero è la dimensione. Un gruppo più numeroso sarebbe dipendente.
:::

::: domanda Che relazione c'è tra rango per righe e rango per colonne?
Sono uguali per ogni matrice (Proposizione 8.6). Con la trasposta si scrive $\rk({}^tA) = \rk(A)$. Per calcolare un rango si possono guardare le righe oppure le colonne, a scelta.
:::

::: domanda Perché $\rk(A) \le \min(m, n)$?
Il rango conta colonne indipendenti, che non possono essere più delle $n$ colonne della matrice. Conta anche righe indipendenti, che non possono essere più delle $m$ righe. Quindi non supera il più piccolo dei due numeri.
:::

::: domanda Quando si può fare il prodotto $AB$, e che taglia ha?
Quando le colonne di $A$ sono tante quante le righe di $B$. Scrivendo le taglie una accanto all'altra, i due numeri interni devono essere uguali. I due numeri esterni danno la taglia del prodotto: $(m \times n) \cdot (n \times p)$ dà una matrice $m \times p$.
:::

::: domanda Come si calcola l'elemento $(AB)_{ij}$?
Si prende la riga $i$ di $A$ e la colonna $j$ di $B$. Si moltiplica il primo numero della riga per il primo della colonna, il secondo per il secondo, e avanti così. Poi si somma tutto. Con i simboli: $(AB)_{ij} = A_{i1}B_{1j} + \dots + A_{in}B_{nj}$.
:::

::: domanda Il prodotto di matrici è commutativo? Fai un esempio.
No: di solito scambiando le due matrici il risultato cambia. Nell'Esempio 8.10, con $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, il prodotto $AB$ è uguale a $B$ e il prodotto $BA$ è la matrice nulla.
:::

::: domanda Quali proprietà valgono per il prodotto di matrici?
Tre (Proposizione 8.11). L'associatività: $A(BC) = (AB)C$. La distributività, in due versioni: $A(B + C) = AB + AC$ e $(A + B)C = AC + BC$. E un numero si può spostare: $\lambda(AB) = (\lambda A)B = A(\lambda B)$.

Non vale la proprietà commutativa. E un prodotto può essere la matrice nulla anche se nessuno dei due fattori lo è.
:::

::: domanda Che cos'è la traccia e che cosa dice la Proposizione 8.13?
La traccia di una matrice quadrata è la somma dei numeri sulla diagonale principale. La Proposizione 8.13 dice che $\tr(AB) = \tr(BA)$ per due matrici quadrate della stessa taglia, anche quando $AB$ e $BA$ sono matrici diverse.
:::

::: domanda Qual è la trasposta di un prodotto?
Il prodotto delle trasposte in ordine rovesciato: ${}^t(AB) = {}^tB\,{}^tA$ (Esercizio 8.14 delle dispense).
:::

::: domanda Come si calcola in fretta $\tr(AB)$ in un quiz?
Si calcolano solo le caselle diagonali del prodotto: la riga 1 di $A$ per la colonna 1 di $B$, la riga 2 per la colonna 2, e avanti così. Poi si sommano. Per $\tr(A\,{}^tA)$ basta sommare i quadrati di tutti i numeri di $A$.
:::

## Glossario

```glossario
Matrice $m \times n$ | Una tabella di numeri con $m$ righe e $n$ colonne. Il numero nella riga $i$ e nella colonna $j$ si scrive $a_{ij}$ oppure $A_{ij}$.
Taglia | Quante righe e quante colonne ha una matrice, in quest'ordine. Una matrice $2 \times 3$ ha 2 righe e 3 colonne.
Matrice quadrata | Una matrice con tante righe quante colonne, come una $2 \times 2$ o una $3 \times 3$.
Matrice nulla | La matrice fatta di soli zeri. Si indica con $0$.
$M(m, n, \K)$, $M(n)$ | L'insieme di tutte le matrici $m \times n$ con numeri in $\K$: è uno spazio vettoriale di dimensione $mn$. $M(n)$ sono le matrici quadrate con $n$ righe.
Riga $A_i$ e colonna $A^j$ | La riga numero $i$, con l'indice in basso, e la colonna numero $j$, con l'indice in alto. Sono vettori: la riga ha $n$ numeri, la colonna ne ha $m$.
Diagonale principale | In una matrice quadrata, le caselle che scendono dall'angolo in alto a sinistra a quello in basso a destra: riga 1 e colonna 1, riga 2 e colonna 2, e avanti così.
Trasposta ${}^tA$ | La matrice con le righe e le colonne scambiate: $({}^tA)_{ij} = A_{ji}$. Una matrice $m \times n$ diventa $n \times m$.
${}^t(x, y, z)$ | Il vettore colonna con i numeri $x, y, z$ letti dall'alto in basso, scritto in riga per risparmiare spazio.
Matrice simmetrica | Una matrice quadrata uguale alla sua trasposta: ${}^tA = A$. La diagonale fa da specchio.
Matrice antisimmetrica | Una matrice quadrata con ${}^tA = -A$: ogni numero ha, dall'altra parte della diagonale, il suo opposto. La diagonale è fatta di zeri.
Rango $\rk(A)$ | Il massimo numero di colonne indipendenti. È la dimensione dello spazio generato dalle colonne.
Rango per righe | La dimensione dello spazio generato dalle righe, cioè il rango della trasposta. È sempre uguale al rango.
Prodotto riga per colonna | Il prodotto $AB$: nella riga $i$ e colonna $j$ c'è la riga $i$ di $A$ per la colonna $j$ di $B$. Si fa solo se le colonne di $A$ sono tante quante le righe di $B$.
Prodotto matrice per vettore | Una matrice per un vettore colonna dà un vettore colonna. È la combinazione lineare delle colonne della matrice, con i numeri del vettore come quantità.
Non commutatività | Di solito $AB$ e $BA$ sono diversi, anche per matrici quadrate: nel prodotto l'ordine conta.
Associatività e distributività | Le parentesi si possono spostare: $A(BC) = (AB)C$. Un prodotto si distribuisce sulla somma: $A(B + C) = AB + AC$ e $(A + B)C = AC + BC$.
Potenza di una matrice | Una matrice quadrata moltiplicata per sé stessa: $A^2$ è $A$ per $A$, $A^3$ è $A$ per $A$ per $A$.
Traccia $\tr A$ | La somma dei numeri sulla diagonale principale di una matrice quadrata. Vale $\tr(AB) = \tr(BA)$.
Matrice identità $I_n$ | La matrice quadrata con 1 sulla diagonale e 0 altrove. Nel prodotto non cambia niente: $I_nA = AI_n = A$ (lezione L09).
```

## Checklist

```checklist
- So leggere una matrice: la taglia $m \times n$, il numero $a_{ij}$, la riga $A_i$, la colonna $A^j$.
- So scrivere la trasposta di una matrice e riconoscere una matrice simmetrica o antisimmetrica.
- So leggere la scrittura ${}^t(x, y, z)$ per i vettori colonna.
- So dire che cos'è il rango e perché è il massimo numero di colonne indipendenti.
- So che con le righe e con le colonne viene lo stesso rango, e che $\rk(A) \le \min(m, n)$.
- So trovare il rango di una matrice piccola cercando i doppioni tra le righe o tra le colonne.
- So dire se un prodotto $AB$ si può fare, di che taglia viene, e calcolarlo riga per colonna senza errori.
- So mostrare con un esempio che $AB \neq BA$, e che un prodotto può essere nullo senza che lo sia un fattore.
- So enunciare associatività e distributività e usare ${}^t(AB) = {}^tB\,{}^tA$.
- So calcolare una traccia e usare $\tr(AB) = \tr(BA)$ per risparmiare conti nei quiz.
- So rispondere alla domanda d'esame «quale identità vale tra $AB$, $BA$, $A$ e $B$?».
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 8 «Matrici I», pp. 36–40: il richiamo iniziale e le sezioni 8.A (trasposta), 8.B (rango), 8.C (prodotto fra matrici), 8.D (traccia) ed 8.E (esercizi) sono seguiti in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni, esempi ed esercizi mantengono la loro numerazione (Definizioni 8.1, 8.3, 8.5, 8.7, 8.12; Proposizioni 8.4, 8.6, 8.11, 8.13; Esempi 8.2, 8.8, 8.9, 8.10; Esercizi 8.14, 8.15, 8.16). Per i richiami: lezioni 6 e 7 (Definizioni 6.1, 6.3, 6.6, 7.11, Proposizione 7.2, Esercizio 7.13).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §2.3.10–2.3.11 (trasposta, simmetriche e antisimmetriche, Esempio 2.3.33), §3.2.3 e §3.2.6 (rango, Proposizioni 3.2.8 e 3.2.20, Corollario 3.2.11), §3.4.1–3.4.5 (prodotto, Proposizioni 3.4.2 e 3.4.4, sistemi scritti come $Ax = b$), §4.4.5 (traccia).
- **Esame**: testi degli appelli di Algebra lineare dal 24/01/2024 al 07/09/2026 (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); riportate con soluzione propria le domande 1 del 15/01/2026 e 9 del 10/07/2025 e il problema 11 (punto 2) del 15/01/2026; le altre sono citate per numero. Foglio di esercizi 2 del tutorato (11/11/2025), esercizio 8.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi sono di questi appunti. Le parti **«Oltre le dispense»** (proprietà in più della trasposta e della traccia, prodotto come combinazione di colonne, identità e potenze, metodi per il quiz, esercizi senza numero) collegano la lezione al resto del corso e all'esame.
