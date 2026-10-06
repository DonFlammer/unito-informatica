---
corso: MDAG
modulo: AG
lezione: L06
titolo: Spazi vettoriali II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L06
descrizione: >-
  Appunti della lezione L06 di Algebra lineare e Geometria (MDAG, parte 2): lo spazio delle matrici, i sottospazi
  vettoriali, le matrici diagonali, triangolari, simmetriche e antisimmetriche, le combinazioni lineari e il
  sottospazio generato (Span), con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Dentro uno spazio vettoriale ci sono spazi più piccoli, come stanze dentro una casa: i sottospazi. Qui impari a
  riconoscerli con tre controlli, a fare i conti con le tabelle di numeri chiamate matrici e a costruire sottospazi
  mescolando alcuni vettori come gli ingredienti di una ricetta. La domanda «è un sottospazio?» esce quasi a ogni appello.
materiale: dispense
scheda:
  Dispense: lezione 6 · pp. 26–30
  Libro: Martelli, §2.2.5–2.2.16
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 6 «Spazi vettoriali II»; B. Martelli, Geometria e algebra lineare, §2.2.5–2.2.16
appunti_html: appunti/MDAG/L06_spazi_vettoriali_2.html
genera_html: true
---

## In breve

- Una **matrice** è una tabella di numeri con un certo numero di righe e di colonne. Le matrici con la stessa forma si sommano casella per casella e si moltiplicano per un numero casella per casella: formano uno spazio vettoriale.
- Un **sottospazio** è una parte di uno spazio vettoriale da cui non si esce: contiene lo zero, e sommando o moltiplicando per un numero i suoi vettori si resta dentro.
- Nel piano, una retta che passa per l'origine è un sottospazio; una retta che non ci passa no.
- Tra le matrici quadrate ci sono cinque sottospazi da conoscere: le **diagonali**, le **triangolari superiori**, le **triangolari inferiori**, le **simmetriche** e le **antisimmetriche**.
- Per dire che un insieme **non** è un sottospazio basta un esempio che non funziona. Il controllo più veloce: manca lo zero.
- Una **combinazione lineare** è una ricetta: alcuni vettori, ciascuno moltiplicato per un numero, poi sommati. Lo **Span** di alcuni vettori è tutto quello che si ottiene con tutte le ricette possibili, ed è sempre un sottospazio.
- All'esame «quale di questi insiemi è (o non è) un sottospazio?» esce quasi a ogni appello: 08/02/2024, 03/06/2025, 05/02/2026, 07/09/2026.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Tabelle di numeri: le matrici (p. 26)

Un negozio vende tre prodotti in due giorni. Le vendite si scrivono in una tabella: una riga per giorno, una colonna per prodotto.

| | pane | latte | uova |
|---|--:|--:|--:|
| lunedì | 1 | 2 | 3 |
| martedì | 4 | 5 | 6 |

In matematica una tabella così, senza le scritte, si chiama **matrice**, e si scrive tra parentesi tonde:

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}.$$

Questa matrice ha 2 righe e 3 colonne. Nella lezione L05 i vettori di $\K^n$ erano liste di numeri scritte in colonna. Una matrice è fatta di più colonne messe una accanto all'altra. Ricorda: $\K$ è il modo delle dispense per dire «i numeri reali $\R$, oppure i numeri complessi $\C$».

Le matrici sono l'altro grande esempio di spazio vettoriale con cui le dispense aprono la lezione, e da qui in poi saranno dappertutto.

### Come si legge una matrice

Per indicare un numero preciso della tabella basta dire in quale riga e in quale colonna sta. Nella matrice $A$:

- il numero nella riga 1 e nella colonna 2 è 2. Si scrive $a_{12} = 2$, e si legge «a uno due»;
- il numero nella riga 2 e nella colonna 1 è 4. Si scrive $a_{21} = 4$.

La regola è sempre la stessa: **prima la riga, poi la colonna**. La lettera è la minuscola del nome della matrice.

Le dispense lo scrivono così.

> [!DEF] 6.1 · Matrice
> Sia come sempre $\K$ un campo fissato. Una **matrice** con $m$ **righe** e $n$ **colonne** a coefficienti in $\K$ è una tabella rettangolare del tipo
> $$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}$$
> in cui tutti gli $mn$ coefficienti $a_{ij}$ appartengono a $\K$. Diciamo brevemente che $A$ è una **matrice $m \times n$**. Le sue righe sono indicate con $A_1, \dots, A_m$ e le sue colonne con $A^1, \dots, A^n$.

**Come si legge.**

- $m$ è il numero di righe, $n$ quello di colonne. I puntini orizzontali, verticali e in diagonale vogliono dire «e così via in quella direzione».
- **$m \times n$** si legge «$m$ per $n$»: prima le righe, poi le colonne. La matrice $A$ del negozio è $2 \times 3$.
- **$a_{ij}$** è il numero nella riga $i$ e nella colonna $j$. In tutto ci sono $m \cdot n$ numeri: $A$ ne ha $2 \cdot 3 = 6$.
- **$A_i$**, con il numerino **in basso**, è la riga numero $i$. **$A^j$**, con il numerino **in alto**, è la colonna numero $j$. Nella matrice $A$: la seconda riga è $A_2 = (4, 5, 6)$, la terza colonna è $A^3 = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$.

> [!TRAPPOLA] $A^1$ non è una potenza
> Nelle dispense $A^1, \dots, A^n$ sono le **colonne** di $A$: il numerino in alto è solo un'etichetta. $A^2$ è la seconda colonna, non $A$ per $A$.

> [!ESEMPIO] · le matrici delle dispense
> Due matrici con numeri reali:
> $$B = \begin{pmatrix} 1 & \sqrt 2 \\ 0 & -5 \\ 7 & \pi \end{pmatrix}, \qquad C = \begin{pmatrix} 5 & 0 & \sqrt 3 \end{pmatrix}.$$
> $B$ è $3 \times 2$: $b_{12} = \sqrt 2$, $b_{32} = \pi$, la riga $B_2 = (0, -5)$, la colonna $B^1 = {}^t(1, 0, 7)$. $C$ è $1 \times 3$: una sola riga.

Nell'esempio la scrittura ${}^t(1, 0, 7)$ vuol dire «la lista $(1, 0, 7)$ scritta in colonna»: la piccola $t$ in alto a sinistra sta per «trasposta» (lezione L08).

::: prova Nella matrice $\begin{pmatrix} 3 & -1 \\ 0 & 5 \end{pmatrix}$ quanto valgono $a_{12}$ e $a_{21}$? Qual è la seconda colonna?
$a_{12}$ è nella riga 1 e nella colonna 2: vale $-1$. $a_{21}$ è nella riga 2 e nella colonna 1: vale 0. La seconda colonna è $\begin{pmatrix} -1 \\ 5 \end{pmatrix}$.
:::

### Somma e moltiplicazione per un numero

Il negozio ha due negozi uguali. Le vendite totali si ottengono sommando le due tabelle **casella per casella**: il pane di lunedì del primo negozio più il pane di lunedì del secondo, e così via. Se le vendite raddoppiano, si moltiplica **ogni casella** per 2.

> [!ESEMPIO] · somma e multiplo di matrici
> $$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix} + \begin{pmatrix} 0 & -1 & 2 \\ 1 & 1 & -3 \end{pmatrix} = \begin{pmatrix} 1 + 0 & 2 - 1 & 3 + 2 \\ 4 + 1 & 5 + 1 & 6 - 3 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 5 \\ 5 & 6 & 3 \end{pmatrix},$$
> $$2\begin{pmatrix} 1 & -1 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -2 \\ 0 & 6 \end{pmatrix}.$$

Con le lettere, per due matrici $A$ e $B$ della **stessa forma**:

$$(A + B)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda A)_{ij} = \lambda a_{ij}.$$

A parole: la casella nella riga $i$ e colonna $j$ della somma è la somma delle due caselle nello stesso posto. E $\lambda A$, «lambda per A», moltiplica ogni casella per il numero $\lambda$. La lettera greca $\lambda$, «lambda», si usa spesso per un numero.

### Le matrici formano uno spazio vettoriale

Tutte le matrici con $m$ righe e $n$ colonne, con queste due operazioni, formano un insieme che si chiama $M(m, n, \K)$, o $M(m, n)$ quando il tipo di numeri è sottinteso. Le dispense osservano che è uno spazio vettoriale.

Il motivo è quello della lezione L05: le operazioni si fanno casella per casella, quindi ogni regola di calcolo si controlla una casella alla volta, dove è una regola dei numeri. In pratica una matrice $2 \times 3$ si comporta come una lista di 6 numeri scritta su due righe.

- Il vettore zero è la **matrice nulla**, con tutti i numeri uguali a 0.
- L'opposto di $A$ è $-A$, con tutti i numeri cambiati di segno.

Una matrice con una sola colonna è un vettore colonna. Quindi le matrici $m \times 1$ sono proprio i vettori di $\K^m$:

$$M(m, 1, \K) = \K^m.$$

> [!TRAPPOLA] Solo matrici della stessa forma
> $\begin{pmatrix} 1 & 2 \end{pmatrix} + \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ non ha senso: la prima è $1 \times 2$, la seconda $2 \times 1$, e le caselle non si corrispondono. Esiste anche un prodotto **tra** matrici, ma è un'altra operazione, che non fa parte della struttura di spazio vettoriale: arriva nella lezione L08.

::: prova Calcola $\begin{pmatrix} 1 & 0 \\ 2 & -1 \end{pmatrix} + 3\begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$.
Prima il multiplo: $3\begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 3 \\ 3 & 3 \end{pmatrix}$. Poi la somma casella per casella: $\begin{pmatrix} 1 + 0 & 0 + 3 \\ 2 + 3 & -1 + 3 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 5 & 2 \end{pmatrix}$.
:::

> [!RICORDA]
> - Una matrice $m \times n$ è una tabella con $m$ righe e $n$ colonne; $a_{ij}$ è il numero nella riga $i$ e nella colonna $j$.
> - Si sommano e si moltiplicano per un numero casella per casella, solo con la stessa forma.
> - Le matrici $m \times n$ formano lo spazio vettoriale $M(m, n, \K)$.

## Stanze da cui non si esce: i sottospazi (pp. 26–27)

Immagina lo spazio vettoriale come una casa. Dentro ci sono delle stanze speciali: in una stanza così, se prendi due vettori e li sommi, resti nella stanza; se prendi un vettore e lo moltiplichi per un numero, resti nella stanza. Una stanza così si chiama **sottospazio**.

### Una retta che funziona

Guarda nel piano la retta dei punti con la seconda coordinata doppia della prima: la retta di equazione $y = 2x$. Ci stanno $(1, 2)$, $(-3, -6)$, $(0, 0)$.

1. Passa per l'origine, il punto $(0, 0)$.
2. Sommo due suoi punti: $(1, 2) + (-3, -6) = (-2, -4)$. Anche qui la seconda coordinata è il doppio della prima: resto sulla retta.
3. Moltiplico un suo punto per un numero: $5 \cdot (1, 2) = (5, 10)$. Resto sulla retta.

Con somme e moltiplicazioni per un numero non si esce mai dalla retta. È una stanza.

### Una retta che non funziona

Ora la retta parallela, spostata in su di 1: la retta di equazione $y = 2x + 1$.

1. Non passa per l'origine: con $x = 0$ dovrebbe essere $y = 1$, non 0.
2. La somma esce. I punti $(0, 1)$ e $(1, 3)$ stanno sulla retta, ma la loro somma $(1, 4)$ no: con $x = 1$ la retta ha $y = 3$, non 4.

Guarda la figura: i due punti rosa sono sulla retta tratteggiata, ma la loro somma, il punto giallo, cade fuori.

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

### I tre controlli

Le dispense mettono in fila i tre controlli che hai appena fatto.

> [!DEF] 6.2 · Sottospazio vettoriale
> Sia $V$ uno spazio vettoriale su un campo $\K$. Un **sottospazio vettoriale** di $V$ è un sottoinsieme $W \subset V$ che soddisfa i seguenti tre assiomi:
> 1. $0 \in W$;
> 2. se $v, v' \in W$, allora anche $v + v' \in W$;
> 3. se $v \in W$ e $\lambda \in \K$, allora $\lambda v \in W$.

**Come si legge.**

- $V$ è la casa: uno spazio vettoriale che conosci già. $W$ è la stanza: una parte dei vettori di $V$. Il simbolo $W \subset V$ si legge «$W$ è contenuto in $V$».
- **Controllo 1**: lo zero di $V$ sta in $W$. Il simbolo $\in$ si legge «appartiene a». È il controllo più veloce.
- **Controllo 2**: se $v$ e $v'$ («v primo», un altro vettore) stanno in $W$, anche la loro somma sta in $W$. In questo caso $W$ si chiama **chiuso rispetto alla somma**.
- **Controllo 3**: se $v$ sta in $W$ e $\lambda$ è un numero **qualsiasi** (anche negativo o zero), anche $\lambda v$ sta in $W$. In questo caso $W$ si chiama **chiuso rispetto alla moltiplicazione per un numero**.

Un sottospazio è a sua volta uno spazio vettoriale, con le stesse operazioni della casa. Il motivo, con i dettagli che le dispense lasciano sottintesi:

1. le operazioni non fanno uscire da $W$, per i controlli 2 e 3;
2. le regole di calcolo della lezione L05 valgono per tutti i vettori di $V$, quindi anche per quelli di $W$;
3. lo zero sta in $W$, per il controllo 1;
4. l'opposto di un vettore $v$ di $W$ sta in $W$: l'opposto è $(-1)v$ (lezione L05, esercizio 11 (b)), che sta in $W$ per il controllo 3.

### La stanza vuota e la casa intera (p. 27)

Ogni spazio vettoriale $V$ ha sempre due sottospazi:

- il sottospazio fatto solo dallo zero, che si scrive $\{0\}$. Le dispense lo chiamano «**sottospazio banale**». Funziona: $0 + 0 = 0$ e $\lambda \cdot 0 = 0$, quindi non si esce;
- il **sottospazio totale**, cioè tutto $V$.

Ogni altro sottospazio sta in mezzo:

$$\{0\} \subset W \subset V.$$

Un esempio già incontrato: i polinomi di grado al massimo $k$, $\K_k[x]$, dentro tutti i polinomi $\K[x]$ (Esercizio 5.7). Contengono il polinomio zero, e sommando o moltiplicando polinomi di grado al massimo $k$ il grado non cresce.

> [!ESEMPIO] · la retta $y = 2x$, con le lettere
> Prendiamo l'insieme $W = \{(x, y) \in \R^2 \mid y = 2x\}$: le graffe dicono «l'insieme dei punti $(x, y)$ del piano», la barretta si legge «per cui». Controlliamo i tre assiomi con punti qualsiasi, non solo con i numeri.
> 1. $(0, 0) \in W$, perché $0 = 2 \cdot 0$.
> 2. Se $(x, y)$ e $(x', y')$ stanno in $W$, cioè $y = 2x$ e $y' = 2x'$, la somma $(x + x', y + y')$ soddisfa $y + y' = 2x + 2x' = 2(x + x')$: sta in $W$.
> 3. Se $(x, y) \in W$ e $\lambda \in \R$, allora $\lambda y = \lambda \cdot 2x = 2(\lambda x)$: anche $(\lambda x, \lambda y)$ sta in $W$.
>
> Quindi $W$ è un sottospazio del piano.

> [!ESEMPIO] · tre insiemi che non sono sottospazi del piano
> - **La retta $y = 2x + 1$**: non contiene l'origine. Fallisce il controllo 1.
> - **Il primo quadrante**, cioè i punti con le due coordinate positive o zero: contiene l'origine, e la somma di due suoi punti ci resta. Ma $(-1) \cdot (1, 1) = (-1, -1)$ esce. Fallisce il controllo 3.
> - **I due assi messi insieme**, cioè i punti con $xy = 0$: contiene l'origine, e i multipli di un punto di un asse restano su quell'asse. Ma $(1, 0) + (0, 1) = (1, 1)$ esce, perché $1 \cdot 1$ non è 0. Fallisce il controllo 2.

> [!TRAPPOLA] Un solo controllo non basta
> Il primo quadrante supera il controllo della somma ma non quello dei multipli. I due assi superano quello dei multipli ma non quello della somma. Per dire **sì** servono tutti e tre i controlli. Per dire **no** ne basta uno che fallisce, con un esempio concreto.

::: prova L'insieme dei punti del piano con $x + y = 3$ è un sottospazio? E quello con $x = 3y$?
$x + y = 3$: no. L'origine dà $0 + 0 = 0$, non 3: manca lo zero.

$x = 3y$: sì. È una retta per l'origine. L'origine c'è; sommando due punti con $x = 3y$ e $x' = 3y'$ viene $x + x' = 3(y + y')$; moltiplicando per $\lambda$ viene $\lambda x = 3(\lambda y)$.
:::

> [!OLTRE] · i sottospazi più comuni, dal libro di Martelli
> - **Sistemi lineari omogenei** (Proposizione 2.2.2). Le soluzioni di un sistema di equazioni lineari **con termine noto zero**, come $\{x + 2y - z = 0,\ x - y = 0\}$ in $\R^3$, formano un sottospazio. Il motivo: prendi un'equazione $a_1 x_1 + \dots + a_n x_n = 0$ che vale per due soluzioni $x$ e $y$. Vale anche per la somma, perché $a_1(x_1 + y_1) + \dots = 0 + 0 = 0$. E vale per i multipli, perché $a_1 (\lambda x_1) + \dots = \lambda \cdot 0 = 0$. Con un termine noto diverso da zero l'origine non è una soluzione (Osservazione 2.2.3).
> - **Polinomi che si annullano in un punto** (Proposizione 2.2.5). Fissato un numero $a$, i polinomi con $p(a) = 0$ formano un sottospazio di $\K[x]$: $(p + q)(a) = 0 + 0 = 0$ e $(\lambda p)(a) = \lambda \cdot 0 = 0$. Quelli con $p(a) = 1$ no, perché non contengono il polinomio nullo (Osservazione 2.2.6).
> - **Intersezione** (Proposizione 2.2.11). Se $U$ e $W$ sono sottospazi, anche la loro parte comune $U \cap W$ lo è. L'**unione** invece in generale no: i due assi del piano sono l'esempio del libro (Esempio 2.2.14, e l'esercizio 13).

> [!RICORDA]
> - Un sottospazio contiene lo zero, ed è chiuso rispetto alla somma e alla moltiplicazione per un numero.
> - Per dire sì servono tutti e tre i controlli; per dire no basta un esempio che non funziona.
> - Nel piano, le rette per l'origine sono sottospazi; quelle che non ci passano no.

## Matrici con una forma speciale (pp. 27–28)

Dentro lo spazio delle matrici ci sono tante stanze. Si ottengono chiedendo che certe caselle siano zero, o che certe caselle siano uguali. Le più importanti riguardano le matrici **quadrate**, quelle con tante righe quante colonne.

### La diagonale principale

In una matrice quadrata le caselle con lo stesso numero di riga e di colonna, $a_{11}, a_{22}, a_{33}, \dots$, formano la **diagonale principale**: la linea che scende da in alto a sinistra a in basso a destra.

$$\begin{pmatrix} \mathbf{1} & 2 & 3 \\ 4 & \mathbf{5} & 6 \\ 7 & 8 & \mathbf{9} \end{pmatrix}$$

Qui la diagonale principale è fatta da 1, 5 e 9. Le caselle con riga maggiore della colonna stanno **sotto** la diagonale (4, 7, 8); quelle con riga minore della colonna stanno **sopra** (2, 3, 6).

### Le cinque classi

Le dispense danno un nome a cinque forme speciali.

> [!DEF] 6.3 · Matrici quadrate, diagonali, triangolari, simmetriche e antisimmetriche
> Una matrice $n \times n$ è detta **quadrata**. Una matrice $A$ quadrata $n \times n$ è:
> - **diagonale** se $a_{ij} = 0,\ \forall i \neq j$;
> - **triangolare superiore** se $a_{ij} = 0,\ \forall i > j$;
> - **triangolare inferiore** se $a_{ij} = 0,\ \forall i < j$;
> - **triangolare** se è triangolare inferiore o superiore;
> - **simmetrica** se $a_{ij} = a_{ji},\ \forall i, j$;
> - **antisimmetrica** se $a_{ij} = -a_{ji},\ \forall i, j$.

**Come si legge.** Il simbolo $\forall$ si legge «per ogni», e $\neq$ si legge «diverso da».

- **Diagonale**: tutte le caselle fuori dalla diagonale principale sono zero. Sulla diagonale può esserci qualsiasi numero, anche 0.
- **Triangolare superiore**: «riga maggiore della colonna» sono le caselle **sotto** la diagonale. Quelle devono essere zero; i numeri stanno sulla diagonale e sopra, a forma di triangolo.
- **Triangolare inferiore**: al contrario, sono zero le caselle **sopra** la diagonale.
- **Simmetrica**: la casella nella riga $i$ e colonna $j$ è uguale a quella nella riga $j$ e colonna $i$. La matrice è come riflessa in uno specchio messo sulla diagonale principale.
- **Antisimmetrica**: le caselle allo specchio sono una l'opposto dell'altra.

Nelle antisimmetriche c'è un fatto in più. Sulla diagonale la casella e la sua immagine allo specchio sono la stessa casella. Quindi deve essere uguale al suo opposto: $a_{ii} = -a_{ii}$, cioè $2a_{ii} = 0$, e dividendo per 2 viene $a_{ii} = 0$. Sulla diagonale di una matrice antisimmetrica ci sono **solo zeri**. Le dispense lo osservano alla fine dell'Esempio 6.4 (p. 28).

> [!NOTA] Una precisazione sul campo
> Il passaggio da $2a_{ii} = 0$ ad $a_{ii} = 0$ divide per 2, e si può fare con i numeri del corso: razionali, reali, complessi. Nel campo con i soli due numeri 0 e 1 dell'Esercizio 5.9, dove $1 + 1 = 0$, invece no: lì ogni numero è uguale al suo opposto, e una matrice antisimmetrica può avere la diagonale non nulla. Il libro di Martelli lo segnala in una nota al §2.2.14; le dispense sottintendono che si lavori con numeri razionali, reali o complessi.

La forma di ciascuna classe per le matrici $3 \times 3$. Le lettere sono numeri qualsiasi.

| diagonale | triangolare superiore | triangolare inferiore | simmetrica | antisimmetrica |
|---|---|---|---|---|
| $\begin{pmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix}$ | $\begin{pmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{pmatrix}$ | $\begin{pmatrix} a & 0 & 0 \\ b & c & 0 \\ d & e & f \end{pmatrix}$ | $\begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix}$ | $\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix}$ |

> [!ESEMPIO] 6.4 · Una matrice per ogni classe
> Le matrici seguenti sono, nell'ordine, diagonale, triangolare superiore, triangolare inferiore, simmetrica e antisimmetrica:
> $$\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}, \quad \begin{pmatrix} 1 & 9 \\ 0 & \sqrt 2 \end{pmatrix}, \quad \begin{pmatrix} -1 & 0 \\ 7 & 2 \end{pmatrix}, \quad \begin{pmatrix} -1 & 2 \\ 2 & 4 \end{pmatrix}, \quad \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}.$$
> Una stessa matrice può appartenere a più classi: per esempio
> $$\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$
> è diagonale, triangolare superiore, triangolare inferiore e simmetrica. La matrice nulla appartiene a tutte e cinque le classi.

Controlliamo l'esempio casella per casella. Nelle matrici $2 \times 2$ le caselle fuori dalla diagonale sono solo due: $a_{12}$, sopra, e $a_{21}$, sotto.

| Matrice | $a_{12}$ | $a_{21}$ | classe |
|---|---:|---:|---|
| $\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}$ | $0$ | $0$ | diagonale (e anche triangolare e simmetrica) |
| $\begin{pmatrix} 1 & 9 \\ 0 & \sqrt 2 \end{pmatrix}$ | $9$ | $0$ | triangolare superiore: è zero la casella sotto |
| $\begin{pmatrix} -1 & 0 \\ 7 & 2 \end{pmatrix}$ | $0$ | $7$ | triangolare inferiore: è zero la casella sopra |
| $\begin{pmatrix} -1 & 2 \\ 2 & 4 \end{pmatrix}$ | $2$ | $2$ | simmetrica: le due caselle sono uguali |
| $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ | $1$ | $-1$ | antisimmetrica: caselle opposte e diagonale nulla |

La prima matrice è anche triangolare, sia superiore sia inferiore, e simmetrica. Nell'elenco delle dispense ogni matrice è l'esempio della sua classe, ma può appartenere anche ad altre.

::: prova A quali classi appartiene $\begin{pmatrix} 4 & 0 \\ 3 & 4 \end{pmatrix}$?
La casella sopra la diagonale è 0: è triangolare inferiore, quindi anche triangolare. Non è diagonale (sotto c'è un 3), non è simmetrica ($0$ e $3$ sono diversi), non è antisimmetrica (la diagonale non è nulla).
:::

### Le cinque classi sono sottospazi (p. 28)

Le matrici quadrate $n \times n$ formano lo spazio $M(n, \K)$, o più brevemente $M(n)$. Le dispense danno un nome alle cinque classi:

- $D(n)$: le matrici diagonali;
- $T^s(n)$: le triangolari superiori;
- $T^i(n)$: le triangolari inferiori;
- $S(n)$: le simmetriche;
- $A(n)$: le antisimmetriche.

Prima un esempio con i numeri. Sommo due matrici simmetriche e moltiplico un'antisimmetrica per un numero:

> [!ESEMPIO] · la somma di due simmetriche è simmetrica
> $$\begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix} + \begin{pmatrix} 0 & -1 \\ -1 & 5 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 8 \end{pmatrix}, \qquad -3\begin{pmatrix} 0 & 4 \\ -4 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -12 \\ 12 & 0 \end{pmatrix}.$$
> La prima somma è ancora uguale allo specchio; il multiplo dell'antisimmetrica è ancora antisimmetrico.

Le dispense dicono che succede sempre.

> [!PROP] 6.5
> I sottoinsiemi $D(n)$, $T^s(n)$, $T^i(n)$, $S(n)$, $A(n)$ sono tutti sottospazi vettoriali di $M(n)$.

**Come si legge.** Ognuna delle cinque classi è una stanza dentro lo spazio delle matrici quadrate: la matrice nulla ci sta, e sommando o moltiplicando per un numero matrici della classe si resta nella classe.

La spiegazione delle dispense: per ciascuna classe la matrice nulla ne fa parte, e la somma e la moltiplicazione per un numero conservano la proprietà che la definisce. Eccola per esteso.

**Le matrici simmetriche $S(n)$.**
1. La matrice nulla è simmetrica: in ogni casella c'è 0, uguale al suo specchio.
2. Se $A$ e $B$ sono simmetriche, cioè $a_{ij} = a_{ji}$ e $b_{ij} = b_{ji}$, allora
   $$(A + B)_{ij} = a_{ij} + b_{ij} = a_{ji} + b_{ji} = (A + B)_{ji}.$$
3. Se $A$ è simmetrica e $\lambda$ è un numero, allora $(\lambda A)_{ij} = \lambda a_{ij} = \lambda a_{ji} = (\lambda A)_{ji}$.

**Le matrici antisimmetriche $A(n)$.** Gli stessi passaggi con il segno meno: $(A + B)_{ij} = a_{ij} + b_{ij} = -a_{ji} - b_{ji} = -(A + B)_{ji}$ e $(\lambda A)_{ij} = \lambda a_{ij} = -\lambda a_{ji} = -(\lambda A)_{ji}$.

**Le triangolari superiori $T^s(n)$.** Sotto la diagonale le caselle di $A$ e di $B$ sono zero. Quindi anche quelle della somma, $0 + 0 = 0$, e quelle del multiplo, $\lambda \cdot 0 = 0$: gli zeri sotto la diagonale restano zeri. Lo stesso per $T^i(n)$, con gli zeri sopra, e per $D(n)$, con gli zeri fuori dalla diagonale.

> [!NOTA] La trasposta, in anticipo
> Nella spiegazione della Proposizione 6.5 le dispense scrivono ${}^t(A + B) = A + B$ e ${}^t(\lambda A) = \lambda A$. Il simbolo ${}^tA$ è la **trasposta** di $A$, che si ottiene scambiando righe e colonne: $({}^tA)_{ij} = a_{ji}$. La definisce la lezione L08. Con questa scrittura, $A$ è simmetrica esattamente quando ${}^tA = A$, e antisimmetrica esattamente quando ${}^tA = -A$.

> [!TRAPPOLA] «Triangolari» non è un sottospazio
> La Proposizione 6.5 parla delle triangolari **superiori** e delle triangolari **inferiori**, separatamente. L'insieme di tutte le matrici triangolari, superiori oppure inferiori, non è un sottospazio:
> $$\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}.$$
> È la somma di una triangolare superiore e di una inferiore, e non è triangolare. È di nuovo il problema dei due assi messi insieme.

::: prova La somma di due matrici diagonali è diagonale? Fai un esempio.
Sì. $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} + \begin{pmatrix} -1 & 0 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 7 \end{pmatrix}$: fuori dalla diagonale, $0 + 0$ resta 0.
:::

> [!OLTRE] · relazioni tra le cinque classi
> Il libro di Martelli (Esempio 2.2.13) nota che $D(n) = T^s(n) \cap T^i(n)$: una matrice è diagonale esattamente quando è triangolare sia superiore sia inferiore. E $S(n) \cap A(n) = \{0\}$: se $a_{ij} = a_{ji}$ e $a_{ij} = -a_{ji}$, allora $a_{ij} = -a_{ij}$, quindi $2a_{ij} = 0$ e $a_{ij} = 0$ (dividendo per 2, come nella nota sopra: nel campo con i soli numeri 0 e 1, dove $1 + 1 = 0$, simmetrico e antisimmetrico sono invece la stessa cosa).

> [!RICORDA]
> - Diagonale: zeri fuori dalla diagonale. Triangolare superiore: zeri sotto. Triangolare inferiore: zeri sopra.
> - Simmetrica: uguale allo specchio sulla diagonale. Antisimmetrica: opposta allo specchio, con la diagonale di zeri.
> - Le cinque classi sono sottospazi; «triangolari» tutte insieme no.

## Ricette con i vettori: combinazioni lineari (p. 28)

In cucina una ricetta dice quanto prendere di ogni ingrediente: «2 parti di farina e 3 parti di zucchero». Con i vettori si fa lo stesso: si prendono alcuni vettori, si moltiplica ciascuno per un numero, e si sommano i risultati.

Un esempio nello spazio a tre coordinate. Gli ingredienti sono $(1, 0, 1)$ e $(0, 1, 1)$; la ricetta è «2 volte il primo, meno 1 volta il secondo»:

$$2\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 - 0 \\ 0 - 1 \\ 2 - 1 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}.$$

Il risultato si chiama **combinazione lineare** dei due vettori. Le dispense lo scrivono così.

> [!DEF] Combinazione lineare (p. 28)
> Sia $V$ uno spazio vettoriale e siano $v_1, \dots, v_k \in V$. Una **combinazione lineare** dei vettori $v_1, \dots, v_k$ è un vettore del tipo
> $$v = \lambda_1 v_1 + \dots + \lambda_k v_k,$$
> dove $\lambda_1, \dots, \lambda_k \in \K$.

**Come si legge.**

- $v_1, \dots, v_k$ è un elenco di vettori: gli ingredienti. Il primo si chiama $v_1$, l'ultimo $v_k$, e $k$ è quanti sono.
- $\lambda_1, \dots, \lambda_k$ sono numeri, uno per ingrediente: le dosi della ricetta. Si chiamano **coefficienti** della combinazione. Possono essere positivi, negativi, frazioni, anche zero.
- «Lineare» vuol dire che si usano **solo** le due operazioni dello spazio vettoriale: somma e moltiplicazione per un numero. Niente prodotti tra vettori, niente quadrati.
- Con tutte le dosi uguali a 0 viene il vettore zero. Con la dose di $v_1$ uguale a 1 e le altre 0 viene $v_1$ stesso.

> [!ESEMPIO] · combinazioni in tre spazi diversi
> - Nello spazio: $2\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$, il conto di prima.
> - Tra i polinomi: $3(x^2 + 1) - 2(x - 1) = 3x^2 + 3 - 2x + 2 = 3x^2 - 2x + 5$.
> - Tra le matrici: $a\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} a & b \\ b & a \end{pmatrix}$, che è la forma delle matrici dell'Esercizio 6.9.

### Tutte le ricette di due vettori

L'esempio delle dispense è nello spazio a tre coordinate, con due ingredienti:

$$v_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \qquad \lambda_1 v_1 + \lambda_2 v_2 = \begin{pmatrix} \lambda_1 \\ \lambda_2 \\ 0 \end{pmatrix}.$$

Cambiando le dosi si ottiene **esattamente** il piano «pavimento», quello con la terza coordinata zero. «Esattamente» vuol dire due cose:

1. ogni ricetta ha la terza coordinata uguale a 0, quindi sta nel pavimento;
2. al contrario, ogni punto del pavimento $(a, b, 0)$ si ottiene con una ricetta: dose $a$ del primo, dose $b$ del secondo.

Nello strumento qui sotto $u$ e $v$ sono due vettori del piano e il punto giallo è la ricetta $\lambda u + \mu v$ ($\mu$ si legge «mi»). Muovi i cursori: con $u = (1, 2)$ e $v = (3, 1)$ il punto raggiunge qualsiasi posizione del piano. Poi trascina $v$ sulla retta di $u$, per esempio in $(2, 4)$: da quel momento le ricette restano sulla retta rossa, qualunque siano le dosi.

```widget vettori
titolo: Le combinazioni lineari $\lambda u + \mu v$
u: 1 2
v: 3 1
modo: combinazione
modi: combinazione
lambda: 2
mu: -1
```

::: prova Quanto fa la combinazione $2(1, 0) + 3(0, 1)$? E $1 \cdot (1, 1) - 1 \cdot (0, 1)$?
$2(1, 0) + 3(0, 1) = (2, 0) + (0, 3) = (2, 3)$.

$(1, 1) - (0, 1) = (1, 0)$.
:::

> [!RICORDA]
> - Una combinazione lineare è una ricetta: ogni vettore moltiplicato per una dose, poi tutto sommato.
> - Le dosi sono numeri qualsiasi e si chiamano coefficienti.

## Tutto quello che si può cucinare: lo Span (pp. 28–29)

Nella sezione di prima, con due ingredienti si poteva cucinare tutto il pavimento, e niente fuori. Conviene dare un nome all'insieme di **tutte** le ricette possibili con certi ingredienti. Le dispense lo scrivono così.

> [!DEF] 6.6 · Sottospazio generato
> Sia $V$ uno spazio vettoriale e $v_1, \dots, v_k \in V$ dei vettori arbitrari. Il **sottospazio generato** da $v_1, \dots, v_k$ è il sottoinsieme di $V$ formato da tutte le loro combinazioni lineari e viene indicato con $\Span(v_1, \dots, v_k)$. In simboli:
> $$\Span(v_1, \dots, v_k) = \{\lambda_1 v_1 + \dots + \lambda_k v_k \mid \lambda_1, \dots, \lambda_k \in \K\}.$$

**Come si legge.**

- *Span* è una parola inglese, «span» o «spen»: in questo senso vuol dire «generare», «coprire». È tutto quello che si può cucinare con quegli ingredienti.
- È un **insieme**, e di solito infinito: c'è un risultato per ogni scelta delle dosi.
- Contiene gli ingredienti stessi (dose 1 per uno, 0 per gli altri) e il vettore zero (tutte le dosi 0).
- La barretta $\mid$ qui si legge «al variare di»: le dosi prendono tutti i valori possibili.
- I vettori $v_1, \dots, v_k$ si chiamano **generatori** dello Span: si usa anche dire che lo **generano**.

Il nome «sottospazio generato» anticipa un fatto da controllare: lo Span è davvero un sottospazio.

> [!PROP] 6.7
> Il sottoinsieme $\Span(v_1, \dots, v_k)$ è un sottospazio vettoriale di $V$.

**Come si legge.** Tutto quello che si può cucinare con certi ingredienti forma sempre una stanza: sommando due piatti o moltiplicando un piatto per un numero si ottiene un altro piatto della stessa cucina.

Il motivo, a parole: sommare due ricette dà ancora una ricetta, con le dosi sommate; moltiplicare una ricetta per un numero dà ancora una ricetta, con tutte le dosi moltiplicate.

> [!DIM] della Proposizione 6.7
> Dalle dispense, con le giustificazioni. Chiamiamo $W$ lo Span e controlliamo i tre assiomi della Definizione 6.2.
> 1. **Lo zero.** Con tutte le dosi uguali a 0 si ottiene $0v_1 + \dots + 0v_k = 0 + \dots + 0 = 0$, per la Proposizione 5.5. Quindi lo zero è una ricetta: sta in $W$.
> 2. **La somma.** Se $v$ e $w$ stanno in $W$, sono due ricette:
>    $$v = \lambda_1 v_1 + \dots + \lambda_k v_k, \qquad w = \mu_1 v_1 + \dots + \mu_k v_k.$$
>    Sommo e metto insieme i pezzi con lo stesso ingrediente (proprietà associativa e commutativa della somma e assioma 3):
>    $$v + w = (\lambda_1 + \mu_1)v_1 + \dots + (\lambda_k + \mu_k)v_k.$$
>    È ancora una ricetta, con le dosi sommate. Quindi $v + w$ sta in $W$.
> 3. **I multipli.** Se $v$ sta in $W$ e $\lambda$ è un numero, per gli assiomi 2 e 4:
>    $$\lambda v = \lambda(\lambda_1 v_1 + \dots + \lambda_k v_k) = (\lambda\lambda_1)v_1 + \dots + (\lambda\lambda_k)v_k.$$
>    È una ricetta con tutte le dosi moltiplicate per $\lambda$: sta in $W$. $\square$

### Lo Span di un solo vettore

Con un solo ingrediente le ricette sono solo i suoi multipli. Le dispense fanno l'esempio nel piano.

> [!ESEMPIO] 6.8 · Lo Span di un solo vettore
> Se $v$ è un singolo vettore, allora $\Span(v) = \{\lambda v \mid \lambda \in \K\}$: sono tutti i multipli di $v$. Per esempio, in $\R^2$,
> $$\Span\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \left\{ \begin{pmatrix} t \\ 2t \end{pmatrix} \;\middle|\; t \in \R \right\},$$
> che è la retta $y = 2x$.

Perché proprio la retta $y = 2x$? I multipli di $(1, 2)$ sono $(1, 2)$, $(2, 4)$, $(-1, -2)$, $(0{,}5;\ 1)$… In tutti la seconda coordinata è il doppio della prima. E al contrario, un punto con la seconda coordinata doppia della prima, come $(3, 6)$, è il multiplo $3 \cdot (1, 2)$. È la retta dei multipli di $(1, 2)$ disegnata nella lezione L05.

Che forma può avere uno Span nel piano e nello spazio? Una tabella per orientarsi; il perché preciso arriva con la dimensione, nella lezione L07.

| Ingredienti | Span nel piano | Span nello spazio |
|---|---|---|
| solo il vettore zero | solo lo zero | solo lo zero |
| un vettore diverso da zero | la retta per l'origine nella sua direzione | la retta per l'origine nella sua direzione |
| due vettori che non sono uno multiplo dell'altro | tutto il piano | il piano per l'origine che li contiene |
| due vettori uno multiplo dell'altro (non tutti e due zero) | una retta | una retta |

> [!TRAPPOLA] Lo Span di due vettori non è l'insieme dei due vettori
> L'insieme $\{v_1, v_2\}$ ha **due** elementi. $\Span(v_1, v_2)$ contiene **tutte** le ricette: infinite, se i vettori non sono zero. E ingredienti diversi possono dare lo stesso Span: $\Span\big((1, 2)\big) = \Span\big((2, 4)\big) = \Span\big((-1, -2)\big)$, sempre la retta $y = 2x$.

::: prova Il vettore $(4, 6)$ sta in $\Span\big((2, 3)\big)$? E il vettore $(4, 5)$?
$(4, 6) = 2 \cdot (2, 3)$: sì, è un multiplo.

Per $(4, 5)$ servirebbe una dose $t$ con $2t = 4$ e $3t = 5$. La prima dà $t = 2$, ma allora $3t = 6$, non 5: no.
:::

> [!OLTRE] · lo Span è il più piccolo sottospazio che contiene i vettori
> Se un sottospazio $U$ contiene $v_1, \dots, v_k$, contiene anche tutti i loro multipli (assioma 3) e tutte le somme di multipli (assioma 2): quindi tutto $\Span(v_1, \dots, v_k)$ sta dentro $U$. Conseguenza pratica, utilissima nei quiz: **per mostrare che uno Span sta dentro un sottospazio basta controllare che ci stiano gli ingredienti**. Per mostrare che sono uguali serve anche il contrario: ogni vettore del sottospazio è una ricetta con quegli ingredienti.

### Un vettore sta nello Span? (pp. 29–30)

È la domanda dell'Esercizio 6.10, e una delle più frequenti di tutto il corso: si può cucinare questo piatto con questi ingredienti? Si cercano le dosi.

> [!ESEMPIO] · un polinomio nello Span di altri due
> Il polinomio $x^2 + 2x + 3$ sta in $\Span(x^2 + 1,\ x + 1)$? Cerchiamo due dosi $a$ e $b$ con
> $$a(x^2 + 1) + b(x + 1) = ax^2 + bx + (a + b) = x^2 + 2x + 3.$$
> Due polinomi sono uguali quando hanno gli stessi numeri davanti a ogni potenza. Quindi:
> 1. davanti a $x^2$: $a = 1$;
> 2. davanti a $x$: $b = 2$;
> 3. il termine noto: $a + b = 3$.
>
> Le prime due danno $a = 1$ e $b = 2$, e la terza è vera: $1 + 2 = 3$. Quindi sì: $x^2 + 2x + 3 = (x^2 + 1) + 2(x + 1)$.
>
> Con $x^2 + 2x + 4$ invece la terza condizione diventerebbe $1 + 2 = 4$, falsa: quel polinomio **non** sta nello Span.

> [!METODO] · «Il vettore sta nello Span?»
> 1. Chiama con delle lettere le dosi che cerchi, una per ingrediente.
> 2. Scrivi la ricetta con le lettere e mettila uguale al vettore dato, coordinata per coordinata (o potenza per potenza, per i polinomi): ottieni un **sistema lineare** nelle dosi.
> 3. Risolvi il sistema. Per ora con le sostituzioni; dalla lezione L11 con il metodo di Gauss.
> 4. Se trovi le dosi, il vettore sta nello Span: rimettile nella ricetta e controlla. Se arrivi a una cosa impossibile, come $3 = 4$, il vettore non sta nello Span.

Per i sistemi più grandi lo strumento qui sotto fa i passaggi di Gauss al posto tuo (il metodo si impara nella lezione L11). Scrivi nelle colonne gli ingredienti e, nell'ultima colonna, il vettore da provare. La matrice già inserita è quella dell'Esercizio 6.10 con il vettore $(1, 2, 3)$: lo strumento trova una sola soluzione, $x_1 = 1$ e $x_2 = 2$ (sono le due dosi). Poi cambia l'ultimo numero da 3 a 4, cioè prova il vettore $(1, 2, 4)$, e premi «Calcola»: nessuna soluzione.

```widget gauss
titolo: Il vettore dell'ultima colonna sta nello Span delle altre colonne?
matrice: 1 0 1; 0 1 2; 1 1 3
modo: sistema
modi: sistema
```

> [!OLTRE] · forma parametrica e forma cartesiana
> Il libro di Martelli (§2.2.11) dà un nome ai due modi di descrivere un sottospazio di $\K^n$. In **forma parametrica** lo si descrive come Span di alcuni vettori: $\Span((1, 0, 1), (0, 1, 1)) = \{(s, t, s + t) \mid s, t \in \R\}$. In **forma cartesiana** lo si descrive con equazioni lineari omogenee: lo stesso insieme è il piano $z = x + y$. Nell'Esercizio 6.10 si passa dalla prima alla seconda. I due modi torneranno per rette e piani nelle lezioni L22–L24.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: le matrici e lo spazio $M(m, n, \K)$ nel **§2.2.5** (pp. 49–50); sottospazi, sottospazio «banale» e totale nei **§2.2.6–2.2.7** (pp. 50–51); sistemi omogenei nel **§2.2.8** (pp. 51–52); combinazioni lineari e Span nei **§2.2.9–2.2.10** (pp. 52–54, Proposizione 2.2.4 = Proposizione 6.7); forma cartesiana e parametrica e polinomi con restrizioni nei **§2.2.11–2.2.12** (pp. 54–55); matrici diagonali, triangolari, simmetriche e antisimmetriche nel **§2.2.14** (pp. 56–57, Proposizione 2.2.10 = Proposizione 6.5); intersezione e unione nei **§2.2.15–2.2.16** (pp. 57–58).

> [!RICORDA]
> - Lo Span di alcuni vettori è l'insieme di tutte le loro combinazioni lineari: tutto quello che si può cucinare.
> - Lo Span è sempre un sottospazio. Lo Span di un vettore diverso da zero è la retta dei suoi multipli.
> - Per sapere se un vettore sta nello Span si cercano le dosi: è un sistema lineare.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\K$ | «kappa» | i numeri usati: reali $\R$ oppure complessi $\C$ | $\K = \R$ |
| $m \times n$ | «emme per enne» | la forma di una matrice: $m$ righe, $n$ colonne | $\begin{pmatrix} 1 & 2 & 3 \end{pmatrix}$ è $1 \times 3$ |
| $a_{ij}$ | «a i j» | il numero nella riga $i$ e nella colonna $j$ | in $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $a_{21} = 3$ |
| $A_i$, $A^j$ | «a con i in basso», «a con j in alto» | la riga $i$ e la colonna $j$ | $A_1 = (1, 2)$ |
| $M(m, n, \K)$, $M(n)$ | «emme di emme enne» | lo spazio delle matrici $m \times n$; delle quadrate $n \times n$ | $M(2)$ |
| $D(n)$, $T^s(n)$, $T^i(n)$ | «di», «ti esse», «ti i» | diagonali, triangolari superiori, triangolari inferiori | $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} \in D(2)$ |
| $S(n)$, $A(n)$ | «esse», «a» | simmetriche, antisimmetriche | $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \in A(2)$ |
| ${}^tA$ | «a trasposta» | righe e colonne scambiate (lezione L08) | ${}^t\begin{pmatrix} 1 & 2 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ |
| $W \subset V$ | «W contenuto in V» | $W$ è una parte di $V$ | $\{0\} \subset V$ |
| $v \in W$ | «v appartiene a W» | $v$ è uno dei vettori di $W$ | $(1, 2) \in \Span((1, 2))$ |
| $\{0\}$ | «l'insieme con solo lo zero» | il sottospazio banale | |
| $\forall$ | «per ogni» | vale per tutti i valori | $a_{ij} = 0\ \forall i \neq j$ |
| $\lambda$, $\mu$ | «lambda», «mi» | numeri, di solito le dosi di una ricetta | $\lambda u + \mu v$ |
| $v_1, \dots, v_k$ | «v uno, …, v kappa» | un elenco di $k$ vettori | |
| $\Span(v_1, \dots, v_k)$ | «span di v uno, …, v kappa» | tutte le combinazioni lineari dei vettori | $\Span((1, 2))$ è la retta $y = 2x$ |
| $\{\ldots \mid \ldots\}$ | «l'insieme di … per cui …» | un insieme descritto con una condizione | $\{(x, y) \mid y = 2x\}$ |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla con 5 risposte, e 2 problemi da 11 punti. I problemi si correggono solo con almeno 6 punti nel quiz. Dura 2 ore, senza calcolatrice e con solo 4 facciate scritte a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **«È un sottospazio?»** È la domanda più frequente di questa parte del corso. È uscita negli appelli dell'08/02/2024 (domanda 2), del 03/06/2025 (domanda 2), del 05/02/2026 (domanda 2) e del 07/09/2026 (domanda 6). Nell'appello del 10/07/2024 (domanda 2) riguardava l'insieme $O(2)$ delle matrici ortogonali, che non contiene la matrice nulla.
2. **«Questo sottospazio è lo Span di…».** Un'altra domanda ricorrente chiede quale Span è uguale a un sottospazio di polinomi (24/01/2024, domanda 1; 15/01/2026, domanda 7).
3. **Le matrici speciali.** Nelle domande sulla dimensione compaiono $T^s(3)$ (24/01/2024, domanda 5) e $S(3)$ (15/01/2026, domanda 4): la dimensione si calcola nella lezione L07, ma che siano sottospazi è la Proposizione 6.5. L'appello dell'08/02/2024 (domanda 6) chiede per quali matrici $A + {}^tA = 0$: sono le antisimmetriche.
4. **Lo Span nei problemi.** Nei problemi da 11 punti lo Span serve per scrivere rette e piani: «calcolare la retta $r = \pi_1 \cap \pi_2$ in forma $r = P + \Span(v)$» (24/01/2024, problema 12). Lo vedrai nelle lezioni L22–L24.

### Una domanda vera, letta insieme

**Appello dell'08/02/2024, domanda 2.** Il testo: «Quale dei seguenti insiemi **non** è un sottospazio di $\R_2[x]$? (a) $\{p(x) \in \R_2[x] \mid p(0) = 0\}$; (b) $\{(t + s)x^2 - tx - s \mid s, t \in \R\}$; (c) $\{p(x) = ax^2 + bx + c \mid a = 2c,\ b = 0\}$; (d) $\{(1 + t)x^2 + tx \mid t \in \R\}$; (e) $\{p(x) \in \R_2[x] \mid p(1) = 0 = p(2)\}$».

**In pratica chiede:** tra cinque gruppi di polinomi di grado al massimo 2, quale non è una stanza? Si parte dal controllo più veloce: c'è il polinomio zero?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: (a) ed (e).** Sono i polinomi che fanno zero in certi numeri. Il polinomio zero fa zero dappertutto, quindi c'è. E sommando o moltiplicando polinomi che fanno zero in un numero, si ottiene ancora zero in quel numero. Sono sottospazi.
>
> **Passo 2: (b).** Metto insieme i pezzi con $t$ e quelli con $s$: $(t + s)x^2 - tx - s = t(x^2 - x) + s(x^2 - 1)$. Sono tutte le ricette con gli ingredienti $x^2 - x$ e $x^2 - 1$: è uno Span, quindi è un sottospazio.
>
> **Passo 3: (c).** Le condizioni $a = 2c$ e $b = 0$ sono equazioni senza termine noto. Il polinomio zero ($a = b = c = 0$) le rispetta; somme e multipli anche. Sottospazio.
>
> **Passo 4: (d).** Per avere il polinomio zero servirebbe che il numero davanti a $x^2$ sia 0, cioè $1 + t = 0$, e che il numero davanti a $x$ sia 0, cioè $t = 0$. Ma $t$ non può essere insieme $-1$ e 0. Il polinomio zero manca.
>
> **La risposta** è la (d).

### Altre due domande vere

> [!ESAME] Appello del 03/06/2025, domanda 2
> **Testo.** Quale dei seguenti insiemi di punti $(x, y, z) \in \R^3$ è un sottospazio vettoriale di $\R^3$? (a) $x^2 - 2x + 1 = 0$; (b) $x + 2yz + 3z = 7$; (c) $-x + 7y + z = 5$; (d) $x + \frac y2 - 5\pi z = 0$; (e) $x + 3iy + 5z = 0$.
>
> **In pratica chiede:** quale di queste equazioni descrive una stanza dello spazio?
>
> **Soluzione.** È la (d): un'equazione con le lettere solo alla prima potenza, numeri reali e niente termine noto. Le altre:
> - in (a) l'equazione è $(x - 1)^2 = 0$, cioè $x = 1$, e l'origine non la rispetta;
> - (b) e (c) hanno un termine noto diverso da zero, quindi l'origine non c'è (in (b) c'è anche il prodotto $yz$);
> - la (e) ha un numero non reale, e la soluzione ufficiale la scarta perché «non è definita sui numeri reali». A rigore, per un punto con coordinate reali l'equazione chiede che si annullino separatamente la parte reale e quella immaginaria: $x + 5z = 0$ e $3y = 0$. L'insieme che ne esce è una retta per l'origine. Ma l'intenzione della domanda è chiara, e la risposta attesa è la (d).

> [!ESAME] Appello del 24/01/2024, domanda 1
> **Testo.** Siano dati in $\R_3[x]$ i polinomi
> $$a(x) = x - 1, \quad b(x) = x + 2, \quad c(x) = 2x^2 - 2, \quad d(x) = x^2 - x, \quad e(x) = 2x^3 + 1, \quad f(x) = x^3 - x^2,$$
> e sia $U = \{p(x) \in \R_3[x] \mid p(1) = 0\}$. Vale: (a) $U = \Span(a, c)$; (b) $U = \Span(a, c, f)$; (c) $U = \Span(c, d, e, f)$; (d) $U = \Span(b, e, f)$; (e) $U = \Span(a, c, d)$.
>
> **In pratica chiede:** $U$ sono i polinomi di grado al massimo 3 che fanno zero in 1. Con quali ingredienti si cucina esattamente $U$?
>
> **Soluzione.** È la (b), e la si può dimostrare con gli strumenti di questa lezione.
> - Scarto (c) e (d): $e(1) = 3$ e $b(1) = 3$, non zero. Quindi $e$ e $b$ non stanno in $U$, e quegli Span escono da $U$.
> - Scarto (a) ed (e): i loro ingredienti hanno grado al massimo 2, quindi ogni ricetta ha grado al massimo 2. Ma $U$ contiene $x^3 - 1$, di grado 3.
> - Confermo (b). Da un lato $a(1) = c(1) = f(1) = 0$, quindi lo Span di $a$, $c$, $f$ sta dentro $U$ (riquadro sullo Span più piccolo). Dall'altro, se $p(1) = 0$ allora $p(x) = (x - 1)q(x)$ con $q$ di grado al massimo 2 (lezione L04). Quindi $p$ è una ricetta con $x - 1$, $x(x - 1) = x^2 - x$ e $x^2(x - 1) = x^3 - x^2$. E questi tre si cucinano con $a$, $c$, $f$: $x - 1 = a$, $x^2 - x = \frac 12 c - a$, $x^3 - x^2 = f$.

### I segnali da riconoscere

> [!METODO] · «È un sottospazio?»: i segnali da riconoscere
> | Se l'insieme è descritto da… | allora… |
> |---|---|
> | equazioni lineari **senza termine noto** nelle coordinate o nei coefficienti ($x - 2y = 0$, $a = 2c$, $p(1) = 0$, $p(1) = p(2)$) | è un sottospazio |
> | un'equazione con termine noto diverso da zero ($x + y = 1$, $p(0) = 1$, $a_{11} = 1$) | non contiene lo zero: **no** |
> | disuguaglianze ($x \ge 0$, $b > 0$) | quasi sempre no: prova a moltiplicare per $-1$ |
> | prodotti o potenze delle lettere ($xy = 0$, $x = y^2$) | quasi sempre no: prova una somma o un multiplo |
> | una lettera con un pezzo fisso, come $\{(1 + t)x^2 + tx\}$ | quasi sempre no: con nessun valore della lettera si ottiene lo zero |
> | uno Span, o «tutte le combinazioni di…» | sì, sempre (Proposizione 6.7) |
>
> Per rispondere **no** scrivi un esempio concreto che non funziona. Per rispondere **sì**, riscrivi l'insieme come Span oppure fai i tre controlli con vettori qualsiasi.

> [!TRAPPOLA] Gli errori più comuni
> - Controllare solo lo zero: il primo quadrante contiene lo zero ma non è un sottospazio.
> - Dimenticare i numeri negativi nel controllo dei multipli.
> - Pensare che «triangolari» (superiori oppure inferiori) sia un sottospazio: lo sono le superiori e le inferiori separatamente.
> - Confondere lo Span di due vettori con l'insieme dei due vettori.
> - Nel controllo «sta nello Span?» fermarsi alle prime condizioni senza controllare anche l'ultima.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: i tre assiomi di sottospazio; la tabella dei segnali «sì / no»; le forme $3 \times 3$ delle cinque classi di matrici; la definizione di Span e il metodo «il vettore sta nello Span?».

## Quiz

```quiz
D: Quale di questi insiemi **non** è un sottospazio di $\R_2[x]$?
- $\{p(x) \in \R_2[x] \mid p(2) = 0\}$
- $\{p(x) \in \R_2[x] \mid p(0) = p(1)\}$
- $\Span(x,\ x^2 + 1)$
+ $\{x^2 + t \mid t \in \R\}$
- $\{ax^2 + bx + c \mid a = b = c\}$
= La domanda cerca l'insieme che non è una stanza, e il controllo più veloce è lo zero. Nei polinomi $x^2 + t$ il numero davanti a $x^2$ è sempre 1, quindi nessuno di loro è il polinomio zero: è la risposta. Gli altri sono sottospazi: «$p(2) = 0$» e «$p(0) = p(1)$» sono condizioni senza termine noto, uno Span è sempre un sottospazio, e i polinomi con $a = b = c$ sono i multipli di $x^2 + x + 1$, cioè uno Span. La risposta più insidiosa è $\{p(0) = p(1)\}$, che sembra strana; ma riscritta diventa $p(0) - p(1) = 0$, senza termine noto. Simile agli appelli dell'08/02/2024 e del 05/02/2026 (domanda 2).

D: Quale di questi insiemi è un sottospazio vettoriale di $\R^3$?
+ $\{(x, y, z) \mid x - 2y + 3z = 0\}$
- $\{(x, y, z) \mid x + y + z = 1\}$
- $\{(x, y, z) \mid xyz = 0\}$
- $\{(x, y, z) \mid x \ge 0\}$
- $\{(x, y, z) \mid x = y^2\}$
= La prima è un'equazione con le lettere alla prima potenza e senza termine noto: se due punti la rispettano, la rispettano anche la somma e i multipli. Per le altre basta un esempio che non funziona: l'origine non rispetta $x + y + z = 1$; $(1, 1, 0)$ e $(0, 0, 1)$ hanno prodotto delle coordinate zero, ma la loro somma $(1, 1, 1)$ no; $(1, 0, 0)$ ha $x \ge 0$, ma moltiplicato per $-1$ no. La risposta più insidiosa è $x = y^2$, che contiene l'origine: però $(1, 1, 0)$ la rispetta e il suo doppio $(2, 2, 0)$ no, perché $2$ non è $4$. Simile all'appello del 03/06/2025, domanda 2.

D: La matrice $\begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix}$ è:
+ antisimmetrica, e di nessuna delle altre quattro classi
- simmetrica
- triangolare superiore
- diagonale
- sia simmetrica sia antisimmetrica
= Si guardano le due caselle fuori dalla diagonale: sopra c'è 2, sotto c'è $-2$, una l'opposto dell'altra, e la diagonale è fatta di zeri. Quindi è antisimmetrica. Non è simmetrica, perché 2 e $-2$ sono diversi; non è triangolare, perché le caselle sopra e sotto sono tutte e due diverse da zero; quindi non è nemmeno diagonale. La risposta più insidiosa è «sia simmetrica sia antisimmetrica»: l'unica matrice che è tutte e due le cose è la matrice nulla.

D: Quale di questi vettori appartiene a $\Span\big((1, 0, 1),\ (0, 1, 1)\big)$?
+ $(1, 1, 2)$
- $(1, 1, 1)$
- $(2, 1, 1)$
- $(0, 0, 1)$
- $(1, -1, 1)$
= Una ricetta con dosi $a$ e $b$ dà $a(1, 0, 1) + b(0, 1, 1) = (a, b, a + b)$: la terza coordinata è sempre la somma delle prime due. Si controllano le risposte: solo $(1, 1, 2)$ lo rispetta, con $a = b = 1$. Negli altri la terza coordinata dovrebbe essere $2$, $3$, $0$ e $0$. La risposta più insidiosa è $(1, 1, 1)$, che somiglia ai due ingredienti; ma sommati danno $(1, 1, 2)$.

D: In $\R^2$, che cos'è $\Span\big((1, 2)\big)$?
+ La retta $y = 2x$.
- La retta $x = 2y$.
- La retta $y = x + 2$.
- Tutto il piano $\R^2$.
- L'insieme $\{(1, 2)\}$, con un solo elemento.
= Lo Span di un solo vettore sono tutti i suoi multipli $(t, 2t)$ (Esempio 6.8): i punti con la seconda coordinata doppia della prima, cioè la retta $y = 2x$. La retta $x = 2y$ non contiene nemmeno $(1, 2)$. $y = x + 2$ non passa per l'origine, quindi non è un sottospazio. Un solo vettore diverso da zero dà una retta, non tutto il piano. La risposta più insidiosa è l'insieme con il solo $(1, 2)$: confonde lo Span con l'insieme degli ingredienti.

D: L'insieme delle matrici $A \in M(2, \R)$ con $a_{11} = 1$ è:
- un sottospazio, perché è definito da un'equazione lineare
- un sottospazio, perché contiene la matrice identità
+ non un sottospazio: per esempio non contiene la matrice nulla
- un sottospazio, perché è chiuso rispetto al prodotto per scalare
- uguale a tutto $M(2, \R)$
= Si fa il controllo dello zero: la matrice nulla ha la prima casella uguale a 0, non a 1, quindi non c'è. La risposta più insidiosa è la prima: l'equazione $a_{11} = 1$ è lineare, ma ha un termine noto diverso da zero, e allora lo zero manca. Contenere l'identità non basta; e l'insieme non è nemmeno chiuso rispetto ai multipli, perché $2A$ ha la prima casella uguale a 2. Simile all'appello del 10/07/2024, domanda 2 ($O(2)$ non è un sottospazio perché non contiene la matrice nulla).

D: Per quale valore di $k$ il vettore $(1, k, 3)$ appartiene a $\Span\big((1, 0, 1),\ (0, 1, 1)\big)$?
N: 2
= Una ricetta con dosi $a$ e $b$ dà $(a, b, a + b)$. Deve essere uguale a $(1, k, 3)$: la prima coordinata dà $a = 1$, la seconda $b = k$, la terza $a + b = 3$. Quindi $1 + k = 3$, cioè $k = 2$. Controllo: $(1, 0, 1) + 2(0, 1, 1) = (1, 2, 3)$.

D: Sia $U = \{p(x) \in \R_2[x] \mid p(1) = 0\}$. Quale uguaglianza è vera?
+ $U = \Span(x - 1,\ x^2 - 1)$
- $U = \Span(x - 1)$
- $U = \Span(x + 1,\ x^2 - 1)$
- $U = \Span(x^2 - 1,\ x^2 - x,\ x^2 + x)$
- $U = \Span(1,\ x,\ x^2)$
= $U$ sono i polinomi di grado al massimo 2 che fanno zero in 1. Gli ingredienti $x - 1$ e $x^2 - 1$ fanno zero in 1, quindi tutte le loro ricette stanno in $U$. Al contrario, se $p(1) = 0$ allora $p(x) = (x - 1)(ax + b) = a(x^2 - x) + b(x - 1) = a(x^2 - 1) + (b - a)(x - 1)$: è una ricetta con i due ingredienti. Le altre risposte: $\Span(x - 1)$ non contiene $x^2 - 1$; $x + 1$ e $x^2 + x$ valgono 2 in 1, quindi escono da $U$; $\Span(1, x, x^2)$ è tutto $\R_2[x]$. La risposta più insidiosa è $\Span(x - 1)$, che contiene polinomi giusti ma non tutti. Simile agli appelli del 24/01/2024 (domanda 1) e del 15/01/2026 (domanda 7).

D: Quale affermazione è vera?
+ Ogni sottospazio di $V$ contiene il vettore nullo di $V$.
- L'unione di due sottospazi è sempre un sottospazio.
- $\Span(v)$ contiene solo il vettore $v$.
- $\{0\}$ non è un sottospazio, perché ha un solo elemento.
- In $\R^2$ una retta che non passa per l'origine può essere un sottospazio.
= È il primo dei tre controlli della Definizione 6.2: ogni stanza contiene lo zero. Le altre sono false: i due assi del piano messi insieme non sono un sottospazio; lo Span di un vettore contiene tutti i suoi multipli; l'insieme con il solo zero è un sottospazio, quello più piccolo; una retta che non passa per l'origine non contiene lo zero. La risposta più insidiosa è quella sull'unione, perché l'intersezione di due sottospazi invece è sempre un sottospazio.

D: L'insieme delle matrici $A \in M(2, \R)$ tali che $A + {}^tA = 0$ (dove ${}^tA$ è la trasposta, $({}^tA)_{ij} = a_{ji}$) è:
+ lo spazio $A(2)$ delle matrici antisimmetriche
- lo spazio $S(2)$ delle matrici simmetriche
- lo spazio $D(2)$ delle matrici diagonali
- l'insieme che contiene solo la matrice nulla
- l'insieme vuoto
= La condizione dice che ogni casella sommata alla sua immagine allo specchio fa zero: $a_{ij} + a_{ji} = 0$, cioè $a_{ij} = -a_{ji}$. È la definizione di matrice antisimmetrica. La risposta più insidiosa è «solo la matrice nulla»: ma $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ rispetta la condizione e non è nulla. Le simmetriche invece rispettano $A - {}^tA = 0$. Simile all'appello dell'08/02/2024, domanda 6.
```

## Esercizi

::: esercizio base Riscaldamento: leggere una matrice
Nella matrice $\begin{pmatrix} 5 & -2 & 0 \\ 1 & 4 & 7 \end{pmatrix}$ trova la forma, $a_{13}$, $a_{22}$, la prima riga e la terza colonna.
::: soluzione
1. Ha 2 righe e 3 colonne: è $2 \times 3$.
2. $a_{13}$ è nella riga 1 e nella colonna 3: vale 0.
3. $a_{22}$ è nella riga 2 e nella colonna 2: vale 4.
4. La prima riga è $(5, -2, 0)$.
5. La terza colonna è $\begin{pmatrix} 0 \\ 7 \end{pmatrix}$.
:::

::: esercizio base Riscaldamento: somma e doppio
Calcola $A + B$ e $2A$ con $A = \begin{pmatrix} 1 & 3 \\ 0 & -2 \end{pmatrix}$ e $B = \begin{pmatrix} 4 & -1 \\ 2 & 2 \end{pmatrix}$.
::: soluzione
1. Somma casella per casella: $A + B = \begin{pmatrix} 1 + 4 & 3 - 1 \\ 0 + 2 & -2 + 2 \end{pmatrix} = \begin{pmatrix} 5 & 2 \\ 2 & 0 \end{pmatrix}$.
2. Doppio casella per casella: $2A = \begin{pmatrix} 2 & 6 \\ 0 & -4 \end{pmatrix}$.
:::

::: esercizio base Riscaldamento: c'è lo zero?
Quali di questi insiemi del piano contengono l'origine? Quali possono essere sottospazi? (a) $x - 5y = 0$; (b) $x - 5y = 2$; (c) $y = 0$; (d) $x = 1$.
::: soluzione
1. (a) $0 - 0 = 0$: l'origine c'è. È una retta per l'origine: sottospazio.
2. (b) $0 - 0 = 0$, non 2: l'origine manca. Non è un sottospazio.
3. (c) l'origine ha $y = 0$: c'è. È l'asse orizzontale: sottospazio.
4. (d) l'origine ha $x = 0$, non 1: manca. Non è un sottospazio.
:::

::: esercizio base Riscaldamento: una ricetta
Calcola $3(1, 2) - 2(0, 1)$. Poi di' se $(3, 4)$ sta in $\Span\big((1, 2),\ (0, 1)\big)$.
::: soluzione
1. $3(1, 2) - 2(0, 1) = (3, 6) - (0, 2) = (3, 4)$.
2. Il conto appena fatto è una ricetta con quegli ingredienti che dà $(3, 4)$, con dosi 3 e $-2$. Quindi sì, $(3, 4)$ sta nello Span.
:::

::: esercizio base Conti con le matrici
Siano $A = \begin{pmatrix} 2 & -1 & 0 \\ 1 & 3 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 1 & -2 \\ 0 & -1 & 5 \end{pmatrix}$.
(a) Di che taglia sono? Quanto valgono $a_{13}$, $a_{21}$, la riga $A_2$ e la colonna $A^2$?
(b) Calcola $A + B$ e $3A - 2B$.
(c) Trova la matrice $X$ tale che $A + X = B$.
::: soluzione
(a) Sono tutte e due $2 \times 3$. $a_{13} = 0$ (riga 1, colonna 3), $a_{21} = 1$ (riga 2, colonna 1), $A_2 = (1, 3, 4)$, $A^2 = {}^t(-1, 3)$, cioè $-1$ e $3$ in colonna.

(b) Casella per casella:
$$A + B = \begin{pmatrix} 3 & 0 & -2 \\ 1 & 2 & 9 \end{pmatrix}, \qquad 3A - 2B = \begin{pmatrix} 6 - 2 & -3 - 2 & 0 + 4 \\ 3 - 0 & 9 + 2 & 12 - 10 \end{pmatrix} = \begin{pmatrix} 4 & -5 & 4 \\ 3 & 11 & 2 \end{pmatrix}.$$

(c) Tolgo $A$ da tutte e due le parti: $X = B - A = \begin{pmatrix} -1 & 2 & -2 \\ -1 & -4 & 1 \end{pmatrix}$.

Controllo: $A + X = \begin{pmatrix} 2 - 1 & -1 + 2 & 0 - 2 \\ 1 - 1 & 3 - 4 & 4 + 1 \end{pmatrix} = B$.
:::

::: esercizio base Riconoscere le classi di matrici
Per ciascuna matrice di' a quali delle cinque classi della Definizione 6.3 appartiene:
$$M_1 = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \quad M_2 = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 5 & 6 \\ 3 & 6 & 0 \end{pmatrix}, \quad M_3 = \begin{pmatrix} 0 & 1 & -2 \\ -1 & 0 & 3 \\ 2 & -3 & 0 \end{pmatrix}, \quad M_4 = \begin{pmatrix} 1 & 0 & 0 \\ 4 & 2 & 0 \\ 5 & 6 & 3 \end{pmatrix}, \quad M_5 = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}.$$
::: soluzione
1. $M_1$: fuori dalla diagonale solo zeri, quindi è **diagonale**. Allora è anche **triangolare superiore**, **triangolare inferiore** e **simmetrica**. Non è antisimmetrica, perché la diagonale non è fatta di zeri.
2. $M_2$: le caselle allo specchio sono uguali (2 e 2, 3 e 3, 6 e 6): **simmetrica**, e basta, perché ci sono numeri sia sopra sia sotto la diagonale.
3. $M_3$: diagonale di zeri, e le caselle allo specchio sono opposte (1 e $-1$, $-2$ e 2, 3 e $-3$): **antisimmetrica**, e basta.
4. $M_4$: sopra la diagonale solo zeri: **triangolare inferiore** (quindi triangolare), e basta.
5. $M_5$: le caselle fuori dalla diagonale sono opposte (1 e $-1$), ma la diagonale non è nulla, quindi non è antisimmetrica; non è simmetrica perché 1 e $-1$ sono diversi; non è triangolare. Non appartiene a **nessuna** delle cinque classi.
:::

::: esercizio base Span nel piano
(a) Descrivi $\Span((2, -1))$ con un'equazione.
(b) Descrivi $\Span((1, 2), (2, 4))$.
(c) Dimostra che $\Span((1, 0), (1, 1)) = \R^2$, trovando esplicitamente i coefficienti per un vettore qualsiasi $(a, b)$.
::: soluzione
(a) I multipli di $(2, -1)$ sono $(2t, -t)$. Da $y = -t$ viene $t = -y$, e allora $x = 2t = -2y$. È la retta $x + 2y = 0$.

(b) $(2, 4) = 2 \cdot (1, 2)$, quindi ogni ricetta $\lambda(1, 2) + \mu(2, 4) = (\lambda + 2\mu)(1, 2)$ è un multiplo di $(1, 2)$. Lo Span è la retta $y = 2x$, come lo Span di $(1, 2)$ da solo: il secondo vettore non aggiunge niente.

(c) Cerco le dosi $\lambda$ e $\mu$ con $\lambda(1, 0) + \mu(1, 1) = (\lambda + \mu, \mu) = (a, b)$.
1. Dalla seconda coordinata: $\mu = b$.
2. Dalla prima: $\lambda + b = a$, quindi $\lambda = a - b$.

Quindi
$$(a, b) = (a - b)(1, 0) + b(1, 1)$$
per ogni $a$ e $b$: ogni vettore del piano è una ricetta, e lo Span è tutto il piano. Controllo con $(3, 5)$: $-2 \cdot (1, 0) + 5 \cdot (1, 1) = (-2 + 5, 5) = (3, 5)$.
:::

::: esercizio medio Esercizio 6.9 delle dispense: le matrici del tipo $\begin{pmatrix} a & b \\ b & a \end{pmatrix}$
Consideriamo il sottoinsieme $W \subset M(2, \R)$ formato dalle matrici del tipo
$$\begin{pmatrix} a & b \\ b & a \end{pmatrix}, \qquad a, b \in \R.$$
Dimostra che $W$ è un sottospazio vettoriale di $M(2, \R)$ e verifica che
$$W = \Span\left(\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right).$$
::: soluzione
**$W$ è un sottospazio.** Faccio i tre controlli della Definizione 6.2.
1. La matrice nulla sta in $W$: è il caso $a = b = 0$.
2. La somma: $\begin{pmatrix} a & b \\ b & a \end{pmatrix} + \begin{pmatrix} a' & b' \\ b' & a' \end{pmatrix} = \begin{pmatrix} a + a' & b + b' \\ b + b' & a + a' \end{pmatrix}$. Ha ancora la stessa forma, con $a + a'$ e $b + b'$ al posto di $a$ e $b$.
3. I multipli: $\lambda \begin{pmatrix} a & b \\ b & a \end{pmatrix} = \begin{pmatrix} \lambda a & \lambda b \\ \lambda b & \lambda a \end{pmatrix}$, stessa forma con $\lambda a$ e $\lambda b$.

**$W$ è lo Span delle due matrici.** Chiamo $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ e $J = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Per ogni $a$ e $b$:
$$aI + bJ = \begin{pmatrix} a & 0 \\ 0 & a \end{pmatrix} + \begin{pmatrix} 0 & b \\ b & 0 \end{pmatrix} = \begin{pmatrix} a & b \\ b & a \end{pmatrix}.$$
Letta da sinistra a destra, l'uguaglianza dice che ogni ricetta con $I$ e $J$ sta in $W$. Letta da destra a sinistra, dice che ogni matrice di $W$ è una ricetta con $I$ e $J$. Quindi $W = \Span(I, J)$.

Nota: con questa seconda parte il primo punto diventa automatico, perché ogni Span è un sottospazio (Proposizione 6.7). È il modo più veloce per dimostrare che un insieme è un sottospazio: riscriverlo come Span.
:::

::: esercizio medio Esercizio 6.10 delle dispense: uno Span in $\R^3$
In $\R^3$ siano
$$v_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$
Descrivi esplicitamente $\Span(v_1, v_2)$ e determina quali dei vettori
$$u = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \qquad w = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}$$
appartengono a questo sottospazio.
::: soluzione
**Descrizione.** Una ricetta qualsiasi, con dosi $a$ e $b$, è
$$a v_1 + b v_2 = \begin{pmatrix} a \\ 0 \\ a \end{pmatrix} + \begin{pmatrix} 0 \\ b \\ b \end{pmatrix} = \begin{pmatrix} a \\ b \\ a + b \end{pmatrix}.$$
Quindi lo Span è fatto dai vettori in cui la terza coordinata è la somma delle prime due. Con un'equazione è il **piano** $z = x + y$, cioè $x + y - z = 0$, che passa per l'origine. Infatti un punto $(x, y, z)$ ha la forma $(a, b, a + b)$ esattamente quando $z = x + y$: basta prendere $a = x$ e $b = y$.

**Il vettore $u$.** Cerco le dosi con $(a, b, a + b) = (1, 2, 3)$.
1. Dalle prime due coordinate: $a = 1$ e $b = 2$.
2. La terza chiede $a + b = 3$, e infatti $1 + 2 = 3$.

Sì: $u = v_1 + 2v_2$ sta nello Span. Controllo: $(1, 0, 1) + 2(0, 1, 1) = (1, 2, 3)$.

**Il vettore $w$.** Di nuovo $a = 1$ e $b = 2$, ma la terza coordinata chiede $a + b = 4$, mentre $1 + 2 = 3$. Impossibile: $w$ non sta nello Span. Con l'equazione del piano: $1 + 2 - 4 = -1$, non zero.
:::

::: esercizio medio Sottospazi di $\R^3$
Di' quali dei seguenti sottoinsiemi di $\R^3$ sono sottospazi. Se sì, dimostralo; se no, trova un controesempio.
(a) $W_1 = \{(x, y, z) \mid x + 2y - z = 0\}$
(b) $W_2 = \{(x, y, z) \mid x = y = z\}$
(c) $W_3 = \{(x, y, z) \mid x + y + z = 1\}$
(d) $W_4 = \{(x, y, z) \mid x^2 = y^2\}$
(e) $W_5 = \{(t, t^2, 0) \mid t \in \R\}$
::: soluzione
(a) **Sì.** L'origine rispetta l'equazione. Se $x + 2y - z = 0$ e $x' + 2y' - z' = 0$, sommando viene $(x + x') + 2(y + y') - (z + z') = 0$; moltiplicando per $\lambda$ viene $\lambda x + 2\lambda y - \lambda z = 0$. È un piano per l'origine.

(b) **Sì.** I punti con le tre coordinate uguali sono $(t, t, t)$, cioè i multipli di $(1, 1, 1)$. È lo Span di $(1, 1, 1)$, quindi un sottospazio per la Proposizione 6.7: la retta per l'origine nella direzione di $(1, 1, 1)$.

(c) **No.** L'origine non c'è: $0 + 0 + 0 = 0$, non 1.

(d) **No.** L'origine c'è e i multipli restano dentro, ma la somma esce. $(1, 1, 0)$ e $(1, -1, 0)$ stanno in $W_4$, perché in tutti e due $x^2 = y^2 = 1$. La loro somma $(2, 0, 0)$ no, perché $4$ non è $0$. In realtà $W_4$ è fatto da due piani messi insieme, $x = y$ e $x = -y$.

(e) **No.** $(1, 1, 0)$ sta in $W_5$, con $t = 1$. Ma il suo doppio $(2, 2, 0)$ no: per avere la prima coordinata 2 serve $t = 2$, e allora la seconda sarebbe 4.
:::

::: esercizio medio Uno Span con un parametro
Per quali valori di $k \in \R$ il vettore $u_k = (1, 2, k)$ appartiene a $\Span\big((1, 1, 0),\ (0, 1, 1)\big)$? Per quei valori scrivi $u_k$ come combinazione lineare.
::: soluzione
Cerco le dosi $a$ e $b$ con $a(1, 1, 0) + b(0, 1, 1) = (a,\ a + b,\ b) = (1, 2, k)$. Coordinata per coordinata:
1. prima coordinata: $a = 1$;
2. seconda: $a + b = 2$, quindi $b = 1$;
3. terza: $b = k$, quindi $k = 1$.

Il vettore sta nello Span **solo per $k = 1$**, e in quel caso
$$(1, 2, 1) = (1, 1, 0) + (0, 1, 1).$$
Per gli altri valori di $k$ la terza condizione contraddice le prime due. Con un'equazione: lo Span è fatto dai vettori $(a, a + b, b)$, cioè il piano $y = x + z$, e $u_k$ ci sta quando $2 = 1 + k$.
:::

::: esercizio medio Le matrici antisimmetriche $3 \times 3$ come Span
Dimostra che $A(3)$, le matrici antisimmetriche $3 \times 3$, è lo Span di tre matrici, e trovale. Controlla con la tua descrizione che la somma di due matrici antisimmetriche è antisimmetrica.
::: soluzione
Una matrice antisimmetrica $3 \times 3$ ha la diagonale di zeri, e sotto la diagonale ci sono gli opposti dei numeri sopra. Quindi basta conoscere i tre numeri sopra la diagonale: chiamo $a = a_{12}$, $b = a_{13}$, $c = a_{23}$.
$$\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix} = a\begin{pmatrix} 0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ -1 & 0 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & 0 \end{pmatrix}.$$
Chiamo $F_1$, $F_2$, $F_3$ le tre matrici a destra. Ogni matrice antisimmetrica è una loro ricetta, e ogni loro ricetta è antisimmetrica: $A(3) = \Span(F_1, F_2, F_3)$. Per la Proposizione 6.7 è un sottospazio.

La somma: con i numeri $a, b, c$ e $a', b', c'$ si ottiene la matrice con $a + a'$, $b + b'$, $c + c'$ sopra la diagonale e i loro opposti sotto. Ha ancora la forma antisimmetrica. Nella lezione L07 vedrai che $F_1$, $F_2$, $F_3$ sono una base, quindi lo spazio ha dimensione 3 (è l'Esercizio 1 del Foglio 2 del tutorato 2025).
:::

::: esercizio difficile Intersezione e unione di sottospazi
Siano $U$ e $W$ sottospazi di uno spazio vettoriale $V$.
(a) Dimostra che $U \cap W$ è un sottospazio.
(b) Mostra con un esempio in $\R^2$ che $U \cup W$ può non essere un sottospazio.
(c) Dimostra che $U \cup W$ è un sottospazio se e solo se $U \subset W$ oppure $W \subset U$.
::: soluzione
Il simbolo $U \cap W$ è l'**intersezione**, la parte comune: i vettori che stanno sia in $U$ sia in $W$. Il simbolo $U \cup W$ è l'**unione**: i vettori che stanno in almeno uno dei due.

(a) Lo zero sta in $U$ e in $W$, quindi nella parte comune. Se $v$ e $v'$ stanno nella parte comune, la loro somma sta in $U$ (perché $U$ è un sottospazio) e sta in $W$ (perché lo è $W$): quindi sta nella parte comune. Lo stesso per i multipli $\lambda v$.

(b) $U$ è l'asse orizzontale, lo Span di $(1, 0)$; $W$ è l'asse verticale, lo Span di $(0, 1)$. La somma $(1, 0) + (0, 1) = (1, 1)$ non sta su nessuno dei due assi.

(c) Se $U$ è contenuto in $W$, l'unione è $W$, che è un sottospazio; lo stesso se $W$ è contenuto in $U$.

Al contrario, supponiamo che l'unione sia un sottospazio ma che nessuno dei due contenga l'altro. Allora c'è un vettore $u$ di $U$ che non sta in $W$, e un vettore $w$ di $W$ che non sta in $U$. La somma $u + w$ sta nell'unione, quindi sta in $U$ oppure in $W$.
- Se $u + w$ sta in $U$, allora $w = (u + w) - u$ sta in $U$, perché $U$ è chiuso rispetto a somme e multipli: impossibile.
- Se $u + w$ sta in $W$, allora $u = (u + w) - w$ sta in $W$: impossibile.

Quindi uno dei due contiene l'altro. È l'Esercizio 2.2.15 del libro di Martelli.
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
(a) **Sì.** Il polinomio zero fa zero in 1. Se $p(1) = q(1) = 0$, allora anche la somma e i multipli fanno zero in 1. Per scriverlo come Span:
1. un polinomio $ax^2 + bx + c$ fa zero in 1 quando $a + b + c = 0$, cioè $c = -a - b$;
2. allora $ax^2 + bx - a - b = a(x^2 - 1) + b(x - 1)$.

L'insieme è $\Span(x^2 - 1,\ x - 1)$.

(b) **No**: il polinomio zero vale 0 in 0, non 1.

(c) **Sì**: i polinomi sono $ax^2 + a = a(x^2 + 1)$, quindi l'insieme è $\Span(x^2 + 1)$.

(d) **No**: $x$ ha $b = 1$, positivo, ma $(-1) \cdot x = -x$ ha $b = -1$. (E manca anche il polinomio zero, che ha $b = 0$.)

(e) **No**: per il polinomio zero servirebbero $1 + t = 0$ e $t = 0$ insieme, impossibile.

(f) **Sì**: raccogliendo $t$ e $s$,
$$(t + s)x^2 - tx - s = t(x^2 - x) + s(x^2 - 1),$$
quindi l'insieme è $\Span(x^2 - x,\ x^2 - 1)$.

Nella lezione L07 calcolerai la dimensione di ciascuno: 2, 1 e 2.
:::

::: esercizio esame Come all'esame: un sottospazio di $\R_3[x]$
Sia $U = \{p(x) \in \R_3[x] \mid p(1) = p(-1)\}$.
(1) Dimostra che $U$ è un sottospazio di $\R_3[x]$.
(2) Dimostra che $U = \Span(1,\ x^2,\ x^3 - x)$.
(3) Quali tra $x^2 - 1$, $x^3 + x$, $x^3 - x + 5$ e $x$ stanno in $U$?
::: soluzione
(1) Il polinomio zero vale 0 in 1 e in $-1$: sta in $U$. Se $p(1) = p(-1)$ e $q(1) = q(-1)$, allora $(p + q)(1) = p(1) + q(1) = p(-1) + q(-1) = (p + q)(-1)$, e $(\lambda p)(1) = \lambda p(1) = \lambda p(-1) = (\lambda p)(-1)$. I tre controlli sono superati.

(2) Scrivo $p(x) = ax^3 + bx^2 + cx + d$.
1. $p(1) = a + b + c + d$ e $p(-1) = -a + b - c + d$.
2. La condizione $p(1) = p(-1)$ diventa $a + c = -a - c$, cioè $2a + 2c = 0$, cioè $c = -a$.
3. Quindi i polinomi di $U$ sono
   $$ax^3 + bx^2 - ax + d = a(x^3 - x) + b\,x^2 + d \cdot 1,$$
   con $a$, $b$, $d$ qualsiasi: esattamente le ricette con $x^3 - x$, $x^2$ e 1.

Quindi $U = \Span(1, x^2, x^3 - x)$.

(3) Basta controllare la condizione $c = -a$ (il numero davanti a $x$ è l'opposto di quello davanti a $x^3$), oppure calcolare $p(1)$ e $p(-1)$.
- $x^2 - 1$: $a = 0$, $c = 0$. **Sta in $U$** ($p(1) = p(-1) = 0$).
- $x^3 + x$: $a = 1$, $c = 1$, che non è $-1$. **Non sta in $U$** ($p(1) = 2$, $p(-1) = -2$).
- $x^3 - x + 5$: $a = 1$, $c = -1$. **Sta in $U$** ($p(1) = p(-1) = 5$).
- $x$: $a = 0$, $c = 1$, che non è 0. **Non sta in $U$** ($p(1) = 1$, $p(-1) = -1$).

Il quiz dell'appello del 15/01/2026 (domanda 7) chiede proprio quale Span è uguale a questo $U$. Tra le risposte c'è $\Span(x^3 - x,\ x^2 - 1,\ x^2 + 1)$, che è lo stesso di $\Span(1, x^2, x^3 - x)$, perché $1 = \frac 12\big((x^2 + 1) - (x^2 - 1)\big)$ e $x^2 = \frac 12\big((x^2 + 1) + (x^2 - 1)\big)$.
:::

::: esercizio esame Come all'esame: sottoinsiemi di $M(2, \R)$
Per ciascun sottoinsieme di $M(2, \R)$ stabilisci se è un sottospazio; se lo è, scrivilo come Span.
(a) $W_1 = \{A \mid a_{11} + a_{22} = 0\}$
(b) $W_2 = \{A \mid a_{11} a_{22} = 0\}$
(c) $W_3 = \{A \mid a_{12} = 2a_{21}\}$
(d) $W_4 = \{A \mid A \text{ è simmetrica e } a_{11} = 1\}$
::: soluzione
(a) **Sì.** La condizione è un'equazione lineare senza termine noto. Da $a_{22} = -a_{11}$:
$$\begin{pmatrix} a & b \\ c & -a \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix},$$
quindi $W_1$ è lo Span di queste tre matrici.

(b) **No.** $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ e $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ stanno in $W_2$, perché il prodotto dei due numeri sulla diagonale fa 0. Ma la loro somma è la matrice con 1 e 1 sulla diagonale, e $1 \cdot 1 = 1$.

(c) **Sì.** Equazione lineare senza termine noto. Chiamo $t$ il numero $a_{21}$; allora $a_{12} = 2t$:
$$\begin{pmatrix} a & 2t \\ t & d \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + t\begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} + d\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}.$$

(d) **No.** La matrice nulla ha la prima casella uguale a 0, non a 1.
:::

## Domande di ripasso

::: domanda Che cos'è una matrice $m \times n$, e che cosa indicano $a_{ij}$, $A_i$ e $A^j$?
È una tabella di $m \cdot n$ numeri con $m$ righe e $n$ colonne. $a_{ij}$ è il numero nella riga $i$ e nella colonna $j$; $A_i$ è la riga $i$; $A^j$ è la colonna $j$ (il numerino in alto non è una potenza).
:::

::: domanda Perché le matrici $m \times n$ formano uno spazio vettoriale, e chi è il suo vettore zero?
Perché somma e moltiplicazione per un numero si fanno casella per casella, e ogni regola di calcolo si riduce alla stessa regola per i numeri, una casella alla volta. Il vettore zero è la matrice nulla.
:::

::: domanda Quali sono i tre controlli di sottospazio?
Un insieme $W$ dentro $V$ è un sottospazio se: (1) contiene lo zero; (2) la somma di due suoi vettori sta ancora in $W$; (3) ogni multiplo di un suo vettore, con un numero qualsiasi, sta ancora in $W$.
:::

::: domanda Perché un sottospazio è a sua volta uno spazio vettoriale?
Le operazioni non fanno uscire da $W$ (controlli 2 e 3); le regole di calcolo valgono in tutto $V$, quindi anche in $W$; lo zero sta in $W$ (controllo 1); l'opposto di un vettore è il suo multiplo per $-1$, che sta in $W$ per il controllo 3.
:::

::: domanda Quali sottospazi ci sono sempre in uno spazio vettoriale $V$?
Il sottospazio fatto solo dallo zero, che le dispense chiamano «banale», e il sottospazio totale, cioè $V$ stesso. Ogni altro sottospazio sta in mezzo ai due.
:::

::: domanda Perché la retta $y = 2x + 1$ non è un sottospazio del piano, mentre $y = 2x$ sì?
$y = 2x + 1$ non passa per l'origine, e la somma di due suoi punti esce dalla retta. $y = 2x$ contiene l'origine ed è chiusa rispetto a somme e multipli: è lo Span di $(1, 2)$.
:::

::: domanda Che cosa sono una matrice diagonale, triangolare superiore, simmetrica e antisimmetrica?
Diagonale: zeri fuori dalla diagonale principale. Triangolare superiore: zeri sotto la diagonale. Simmetrica: ogni casella è uguale alla sua immagine allo specchio sulla diagonale. Antisimmetrica: ogni casella è l'opposto della sua immagine allo specchio, e quindi la diagonale è fatta di zeri.
:::

::: domanda Perché sulla diagonale di una matrice antisimmetrica ci sono solo zeri?
Una casella della diagonale è l'immagine allo specchio di sé stessa, quindi deve essere uguale al suo opposto: $a_{ii} = -a_{ii}$, cioè $2a_{ii} = 0$. Dividendo per 2, che con i numeri razionali, reali e complessi si può fare, viene $a_{ii} = 0$.
:::

::: domanda Le matrici triangolari (superiori oppure inferiori) formano un sottospazio?
No: la somma di una triangolare superiore e di una inferiore può non essere triangolare, per esempio $\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$. Sono sottospazi le superiori e le inferiori, separatamente.
:::

::: domanda Che cos'è una combinazione lineare? Che cos'è lo Span di alcuni vettori?
Una combinazione lineare è una ricetta: ogni vettore moltiplicato per un numero, poi tutto sommato. Lo Span è l'insieme di **tutte** le ricette possibili con quei vettori, cambiando le dosi in tutti i modi.
:::

::: domanda Perché lo Span è un sottospazio?
Con tutte le dosi uguali a zero viene lo zero. La somma di due ricette è la ricetta con le dosi sommate. Il multiplo di una ricetta è la ricetta con tutte le dosi moltiplicate.
:::

::: domanda Come si decide se un vettore sta nello Span di altri vettori?
Si cercano le dosi: si scrive la ricetta con delle lettere, la si mette uguale al vettore coordinata per coordinata e si risolve il sistema. Se ha soluzione il vettore sta nello Span, altrimenti no.
:::

::: domanda Come si dimostra in fretta che un insieme è un sottospazio?
Riscrivendolo come Span di alcuni vettori: ogni Span è un sottospazio per la Proposizione 6.7. Per esempio i polinomi $(t + s)x^2 - tx - s$ sono le ricette con $x^2 - x$ e $x^2 - 1$.
:::

## Glossario

```glossario
Matrice $m \times n$ | Una tabella di numeri con $m$ righe e $n$ colonne. Il numero nella riga $i$ e nella colonna $j$ si scrive $a_{ij}$.
Righe e colonne $A_i$, $A^j$ | $A_i$ è la riga $i$ di $A$, $A^j$ la colonna $j$. Il numerino in alto non è una potenza.
$M(m, n, \K)$ | Lo spazio vettoriale delle matrici $m \times n$. Le matrici con una sola colonna sono i vettori di $\K^m$.
Matrice quadrata, $M(n)$ | Una matrice con tante righe quante colonne. $M(n)$ è lo spazio delle matrici $n \times n$.
Diagonale principale | Le caselle con lo stesso numero di riga e di colonna: da in alto a sinistra a in basso a destra.
Matrice diagonale | Una matrice quadrata con zeri fuori dalla diagonale principale. Formano lo spazio $D(n)$.
Triangolare superiore / inferiore | Una matrice quadrata con zeri sotto la diagonale (superiore, spazio $T^s(n)$) o sopra (inferiore, spazio $T^i(n)$).
Matrice simmetrica | Ogni casella è uguale alla sua immagine allo specchio sulla diagonale. Formano lo spazio $S(n)$.
Matrice antisimmetrica | Ogni casella è l'opposto della sua immagine allo specchio, e la diagonale è fatta di zeri. Formano lo spazio $A(n)$.
Sottospazio vettoriale | Una parte di uno spazio vettoriale che contiene lo zero ed è chiusa rispetto alla somma e alla moltiplicazione per un numero.
Chiuso rispetto a un'operazione | Facendo l'operazione con elementi dell'insieme si resta nell'insieme.
Sottospazio banale e totale | Quello fatto solo dallo zero, e lo spazio intero. Ogni sottospazio sta in mezzo.
Combinazione lineare | Una ricetta con dei vettori: ciascuno moltiplicato per un numero, poi tutto sommato. Per esempio $2(1, 0) + 3(0, 1)$.
Coefficienti | Le dosi di una combinazione lineare: i numeri che moltiplicano i vettori.
Span, sottospazio generato | Tutte le combinazioni lineari di alcuni vettori: tutto quello che si può cucinare con quegli ingredienti. È sempre un sottospazio.
Generatori | Gli ingredienti di uno Span: i vettori con cui si ottiene tutto il sottospazio.
Trasposta ${}^tA$ | La matrice con righe e colonne scambiate (lezione L08). $A$ è simmetrica quando è uguale alla sua trasposta.
Forma parametrica e cartesiana | Due modi di descrivere un sottospazio: come Span di alcuni vettori, oppure con equazioni lineari senza termine noto.
```

## Checklist

```checklist
- So leggere una matrice: forma, numero $a_{ij}$, righe $A_i$ e colonne $A^j$.
- So sommare matrici della stessa forma e moltiplicarle per un numero.
- So dire i tre controlli di sottospazio e perché un sottospazio è uno spazio vettoriale.
- So dimostrare che un insieme è un sottospazio con i tre controlli fatti su vettori qualsiasi.
- So trovare un esempio che non funziona quando un insieme non è un sottospazio (manca lo zero, la somma esce, un multiplo esce).
- So riconoscere le matrici diagonali, triangolari, simmetriche e antisimmetriche e scriverne la forma $3 \times 3$.
- So spiegare perché le simmetriche e le antisimmetriche sono sottospazi, e perché «triangolari» tutte insieme no.
- So calcolare una combinazione lineare di vettori, polinomi e matrici.
- So dire che cos'è lo Span di alcuni vettori e perché è un sottospazio.
- So decidere se un vettore sta in uno Span cercando le dosi con un sistema.
- So riscrivere un sottospazio definito da condizioni come Span di pochi vettori.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 6 «Spazi vettoriali II», pp. 26–30: lo spazio delle matrici e le sezioni 6.A–6.D seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni, esempi ed esercizi mantengono la loro numerazione (Definizioni 6.1, 6.2, 6.3 e 6.6, Esempi 6.4 e 6.8, Proposizioni 6.5 e 6.7, Esercizi 6.9 e 6.10, svolti come esercizi 8 e 9).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §2.2.5–2.2.16 (matrici, sottospazi, sistemi omogenei, combinazioni lineari e Span, forma parametrica e cartesiana, polinomi con restrizioni, matrici speciali, intersezione e unione di sottospazi, Esercizio 2.2.15, svolto come esercizio 13).
- **Appelli citati** (testi e soluzioni sul Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (domande 1 e 5, problema 12), 08/02/2024 (domande 2 e 6), 10/07/2024 (domanda 2), 03/06/2025 (domanda 2), 15/01/2026 (domande 4 e 7), 05/02/2026 (domanda 2), 07/09/2026 (domanda 6). Le domande dell'08/02/2024 (2), del 03/06/2025 (2) e del 24/01/2024 (1) sono riportate con soluzioni scritte per questi appunti. Foglio di esercizi 2 del tutorato 2025 (Buzano, Radeschi), esercizi 1 e 2, come modello di due esercizi.
- Le parti **«Oltre le dispense»** (sistemi omogenei, polinomi che si annullano in un punto, intersezione e unione, relazioni tra le classi di matrici, lo Span come più piccolo sottospazio, forma parametrica e cartesiana, il metodo per l'esame e gli esercizi che non vengono dalle dispense) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
