---
corso: MDAG
modulo: AG
lezione: L05
titolo: Spazi vettoriali I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L05
descrizione: >-
  Appunti della lezione L05 di Algebra lineare e Geometria (MDAG, parte 2): lo spazio euclideo, somma di vettori e
  prodotto per scalare, gruppi, campi, definizione di spazio vettoriale ed esempi (polinomi, funzioni, successioni),
  con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Che cos'è un vettore: una lista di numeri, da leggere come uno spostamento su una mappa a quadretti. Impari a
  sommare due vettori e a moltiplicarli per un numero. Poi vedi che le stesse regole valgono anche per i polinomi e
  per le funzioni: ogni posto in cui valgono si chiama spazio vettoriale.
materiale: dispense
scheda:
  Dispense: lezione 5 · pp. 20–25
  Libro: Martelli, §1.5, §2.1 e §2.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 5 «Spazi vettoriali I»; B. Martelli, Geometria e algebra lineare, §1.5, §2.1 e §2.2.1–2.2.4
appunti_html: appunti/MDAG/L05_spazi_vettoriali_1.html
genera_html: true
---

## In breve

- Un **vettore** è una lista ordinata di numeri, come $(3, 2)$. Puoi leggerlo come uno spostamento su una mappa a quadretti: 3 passi a destra e 2 in su.
- I vettori si **sommano** numero per numero: è come fare uno spostamento dopo l'altro. Si **moltiplicano per un numero** moltiplicando ogni numero della lista: è come ripetere lo stesso spostamento, oppure farlo al contrario.
- Queste due operazioni seguono otto regole, simili a quelle dei conti con i numeri. Un insieme in cui si può sommare e moltiplicare per un numero con queste regole, senza mai uscire, si chiama **spazio vettoriale**.
- Anche i polinomi, le funzioni e le liste infinite di numeri formano spazi vettoriali. Per questo in matematica si chiamano «vettori» anche loro.
- Ci sono **due zeri** diversi: il numero zero e il vettore zero, quello che non sposta niente. Qualunque vettore moltiplicato per il numero zero dà il vettore zero.
- **Gruppo** e **campo** sono i nomi di due liste di regole. Servono a scrivere la definizione in modo preciso: è la parte più teorica della lezione.
- All'esame devi saper dire se un insieme è uno spazio vettoriale. Per dire di no basta un esempio: manca il vettore zero, oppure una somma o un multiplo escono dall'insieme.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Un vettore è una lista di numeri (pp. 20–21)

Immagina una mappa a quadretti, come un foglio di quaderno. Sei fermo su un incrocio e devi spiegare a un amico dove andare.

Gli dici: «3 quadretti a destra e 2 in su». Bastano due numeri: il 3 e il 2. In matematica si scrivono tra parentesi tonde, separati da una virgola:

$$(3, 2)$$

Questa lista di due numeri è un **vettore**. Si legge «tre, due».

```grafico
titolo: Il vettore $(3, 2)$ è lo spostamento «3 a destra e 2 in su»
x: -1 5
y: -1 4
segmento: 0 0 3 0 | blu | tratteggio
segmento: 3 0 3 2 | blu | tratteggio
vettore: 3 2 | accento | spesso | $(3, 2)$ | n
testo: 1.5 -0.4 | blu | "3 a destra"
testo: 3.8 1 | blu | "2 in su"
```

Guarda la figura. I due tratti blu sono i passi: prima 3 a destra, poi 2 in su. La freccia va dritta dalla partenza all'arrivo. È il disegno del vettore.

### L'ordine conta

Il primo numero dice sempre quanto ti muovi in orizzontale. Il secondo dice quanto ti muovi in verticale.

Quindi $(3, 2)$ e $(2, 3)$ sono due vettori diversi. Il secondo vuol dire «2 a destra e 3 in su», e ti porta in un altro posto.

I numeri possono essere anche negativi, oppure zero. Un numero negativo al primo posto vuol dire «a sinistra». Un numero negativo al secondo posto vuol dire «in giù».

| Vettore | Spostamento |
|---|---|
| $(3, 2)$ | 3 a destra, 2 in su |
| $(-3, 1)$ | 3 a sinistra, 1 in su |
| $(2, -4)$ | 2 a destra, 4 in giù |
| $(0, 5)$ | fermo in orizzontale, 5 in su |
| $(0, 0)$ | resti dove sei |

> [!RIPASSO] il piano cartesiano
> Il **piano cartesiano** è la mappa a quadretti con due righe di riferimento. Una è orizzontale e si chiama *asse $x$*. L'altra è verticale e si chiama *asse $y$*. Il punto in cui si incrociano si chiama **origine**.
>
> Ogni punto della mappa si indica con due numeri. Il primo dice quanti passi fare dall'origine in orizzontale. Il secondo dice quanti passi fare in verticale.
>
> Per esempio il punto $(2, 3)$ si raggiunge così: dall'origine fai 2 passi a destra e 3 passi in su.

### I nomi: coordinate e spazio euclideo

I numeri che formano un vettore si chiamano **coordinate**. Le dispense li chiamano anche *componenti*. Il vettore $(3, 2)$ ha due coordinate: la prima è 3, la seconda è 2.

Tutti i vettori con due coordinate, messi insieme, formano un insieme. Si indica con $\R^2$ e si legge «erre due».

- La $\R$ è l'insieme dei **numeri reali**: tutti i numeri della retta, anche quelli con la virgola (lezione L01).
- Il piccolo 2 in alto dice quanti numeri ci sono in ogni lista.

Per dire che un vettore sta in questo insieme si usa il simbolo $\in$ della lezione L01. Si legge «appartiene a».

$$(3, 2) \in \R^2$$

Vuol dire: «tre, due» è una lista di 2 numeri reali.

Una lista può avere anche tre numeri, come $(1, 4, 2)$. Serve per muoversi in una stanza invece che su un foglio: 1 passo a destra, 4 passi in avanti, 2 passi verso l'alto. L'insieme delle liste di tre numeri si chiama $\R^3$, «erre tre».

Il simbolo di prima con una sbarra sopra, $\notin$, si legge «non appartiene a». Per esempio $(3, 2) \notin \R^3$: la lista ha due numeri, non tre.

E si può andare avanti. Una lista di quattro numeri, come $(1, 0, -2, 5)$, è un vettore di $\R^4$. Non si può più disegnare, perché manca una quarta direzione in cui muoversi. Ma i conti si fanno nello stesso modo, e per il corso è questo che conta.

In generale il numero di coordinate si indica con la lettera $n$. L'insieme delle liste di $n$ numeri reali si scrive $\R^n$ e si legge «erre enne». Si chiama **spazio euclideo**. Con $n = 2$ è il piano, con $n = 3$ è lo spazio.

### Dare un nome a un vettore e alle sue coordinate

Per non riscrivere ogni volta tutta la lista, a un vettore si dà un nome: una lettera minuscola, come $x$, $v$ o $w$.

$$x = (3, 2)$$

Le coordinate prendono il nome del vettore, con un numerino in basso che dice il posto. Il numerino si chiama **indice**.

- $x_1$ si legge «ics uno»: è la prima coordinata. Qui $x_1 = 3$.
- $x_2$ si legge «ics due»: è la seconda coordinata. Qui $x_2 = 2$.

Per un vettore con $n$ coordinate le dispense scrivono $(x_1, \dots, x_n)$. Vuol dire: una lista di numeri. Il primo si chiama $x_1$ e l'ultimo $x_n$. I tre puntini stanno per tutti quelli in mezzo.

Il vettore fatto di soli zeri ha un nome: **origine**. Sulla mappa è lo spostamento «resta dove sei». Si indica con $0$, oppure con la lettera $O$.

### Come lo scrivono le dispense

Ecco la definizione con le parole delle dispense.

> [!DEF] 5.1 · Spazio euclideo
> Sia $n \ge 1$ un numero naturale. Lo **spazio euclideo $n$-dimensionale** è l'insieme
> $$\R^n = \underbrace{\R \times \cdots \times \R}_{n \text{ volte}}.$$
> I suoi elementi sono successioni $(x_1, \dots, x_n)$ di $n$ numeri reali.

**Come si legge.** Un pezzo alla volta:

- $n \ge 1$ si legge «enne maggiore o uguale a 1». La lettera $n$ è il numero di coordinate, e deve essere almeno 1.
- «$n$-dimensionale» vuol dire «con $n$ coordinate». Il piano ha 2 dimensioni, lo spazio ne ha 3.
- Il simbolo $\times$ qui non è una moltiplicazione tra numeri. La scrittura $\R \times \R$ si legge «erre per erre» e indica tutte le coppie ordinate di numeri reali. Si chiama **prodotto cartesiano**.
- La graffa orizzontale con la scritta «$n$ volte» dice che la $\R$ è ripetuta $n$ volte. Con tre $\R$ si ottengono le liste di tre numeri.
- Qui «successioni» vuol dire liste **finite e ordinate** di numeri. Nella lezione L01 la stessa parola indicava liste infinite.

Tutta insieme: «$\R^n$ è l'insieme delle liste ordinate di $n$ numeri reali».

### Punto o vettore?

La stessa lista di numeri si può disegnare in due modi.

- Come un **punto**: il posto della mappa in cui arrivi.
- Come un **vettore**: la freccia che parte dall'origine e arriva in quel posto. È lo spostamento.

Sono due disegni della stessa lista. Di solito si usano le lettere maiuscole $P$ e $Q$ quando si pensa ai punti, e le minuscole $v$ e $w$ quando si pensa ai vettori.

```grafico
titolo: Due elementi di $\R^2$: $(2, 3)$ disegnato come punto e $(-3, 1)$ disegnato come vettore
x: -4 4
y: -1 4
punto: 2 3 | ambra | $P = (2, 3)$ | e
vettore: -3 1 | accento | spesso | $v = (-3, 1)$ | n
```

Guarda la figura. A destra c'è un pallino: è la lista «due, tre» disegnata come punto. A sinistra c'è una freccia: è la lista «meno tre, uno» disegnata come vettore. Nelle dispense la freccia di un vettore parte sempre dall'origine.

### Scrivere un vettore in verticale

Le dispense scrivono spesso i vettori in verticale, con i numeri uno sotto l'altro:

$$\begin{pmatrix} 3 \\ 2 \end{pmatrix}$$

È lo stesso vettore di prima: in alto la prima coordinata, sotto la seconda. Scritto così si chiama **vettore colonna**.

Per un vettore con $n$ coordinate le dispense scrivono:

$$x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$$

I tre puntini in verticale vogliono dire «e avanti così, fino all'ultima coordinata».

Il motivo della scrittura in verticale si capisce con il prodotto tra matrici, nella lezione L08. In questi appunti i vettori compaiono spesso in riga, come $(1, 2, 3)$, per occupare meno spazio. È lo stesso vettore.

> [!NOTA] La scrittura degli appelli
> Negli appelli un vettore colonna scritto in riga compare spesso come ${}^t(1, 2, 3)$, con una piccola $t$ in alto a sinistra. La $t$ sta per «trasposto» e vuol dire «questa riga, messa in verticale». La trasposta si vede nella lezione L08.

> [!TRAPPOLA] Mai le graffe per un vettore
> La scrittura $\{3, 2\}$ con le graffe indica un insieme, e in un insieme l'ordine non conta (lezione L01). In un vettore l'ordine conta: per questo si usano sempre le parentesi tonde.

::: prova Che spostamento indica il vettore $(-1, 4)$? E il vettore $(0, -2)$?
$(-1, 4)$: 1 passo a sinistra e 4 in su. Il primo numero è negativo, quindi si va a sinistra.

$(0, -2)$: fermo in orizzontale e 2 passi in giù.
:::

::: prova Se $x = (7, 0, -2)$, quanto valgono $x_1$ e $x_3$?
$x_1 = 7$: è la prima coordinata. $x_3 = -2$: è la terza.
:::

> [!RICORDA]
> - Un **vettore** è una lista ordinata di numeri, scritta con le parentesi tonde. I numeri si chiamano **coordinate**.
> - Nel piano si legge come uno spostamento: il primo numero è «a destra», il secondo «in su». Con il segno meno il verso è quello contrario.
> - $\R^n$ è l'insieme delle liste di $n$ numeri reali. $\R^2$ è il piano, $\R^3$ lo spazio.
> - La lista di soli zeri si chiama **origine**.

## Sommare: uno spostamento dopo l'altro (pp. 20–21)

Fai due spostamenti di fila sulla mappa.

- Primo spostamento: 1 a destra e 2 in su. È il vettore $(1, 2)$.
- Secondo spostamento: 3 a destra e 1 in su. È il vettore $(3, 1)$.

Di quanto ti sei spostato in tutto? Conta i passi in orizzontale e quelli in verticale, separati.

- In orizzontale: $1 + 3 = 4$ passi a destra.
- In verticale: $2 + 1 = 3$ passi in su.

In tutto ti sei spostato di 4 a destra e 3 in su. Questo spostamento totale è la **somma** dei due vettori:

$$(1, 2) + (3, 1) = (1 + 3,\ 2 + 1) = (4, 3)$$

> [!IDEA]
> Sommare due vettori vuol dire fare uno spostamento dopo l'altro. Il conto si fa un posto alla volta: il primo numero con il primo, il secondo con il secondo.

Le dispense dicono che la somma si fa **componente per componente**. È la stessa cosa: una coordinata alla volta.

```grafico
titolo: Prima lo spostamento $v = (1, 2)$, poi $w = (3, 1)$: l'arrivo è $(4, 3)$
x: -1 5
y: -1 4
vettore: 4 3 | ambra | tratteggio | $v + w = (4, 3)$ | n
vettore: 1 2 | accento | spesso
freccia: 1 2 4 3 | blu | spesso
testo: 0.2 1.3 | accento | $v$
testo: 2.4 2.9 | blu | $w$
```

Guarda la figura. La prima freccia, $v$, parte dall'origine. La seconda, $w$, è disegnata a partire dalla punta della prima. La freccia tratteggiata va dall'origine al punto di arrivo: è la somma.

### Cambiando l'ordine si arriva nello stesso posto

Fai i due spostamenti nell'ordine contrario: prima quello da 3 a destra e 1 in su, poi quello da 1 a destra e 2 in su.

- In orizzontale: $3 + 1 = 4$.
- In verticale: $1 + 2 = 3$.

Arrivi nello stesso punto. Hai solo fatto un'altra strada.

Le due strade insieme disegnano un **parallelogramma**, cioè una figura con quattro lati, paralleli a due a due. La somma è la diagonale che parte dall'origine. Per questo la somma di due vettori del piano si chiama anche **regola del parallelogramma**. In fisica si usa per sommare due forze.

```grafico
titolo: La somma $v + w$ è la diagonale del parallelogramma costruito su $v = (1, 2)$ e $w = (3, 1)$
x: -1 5
y: -1 4
poligono: 0 0 1 2 4 3 3 1 | ambra | tenue
segmento: 1 2 4 3 | blu | tratteggio
segmento: 3 1 4 3 | accento | tratteggio
vettore: 4 3 | ambra | spesso | $v + w = (4, 3)$ | n
vettore: 1 2 | accento | spesso | $v$ | no
vettore: 3 1 | blu | spesso | $w$ | se
```

Guarda la figura. Le due frecce piene sono i due vettori, disegnati dall'origine. I lati tratteggiati sono gli stessi spostamenti fatti per secondi. La diagonale arriva nel punto «quattro, tre».

### Un esempio con quattro coordinate

Con liste più lunghe il disegno non c'è più, ma il conto è lo stesso.

> [!ESEMPIO] · somme in $\R^2$ e in $\R^4$
> **Con due coordinate**, scrivendo i vettori in colonna. Si somma riga per riga:
> $$\begin{pmatrix} 1 \\ 2 \end{pmatrix} + \begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 + 3 \\ 2 + 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$$
>
> **Con quattro coordinate.** Vogliamo sommare $(1, 0, -2, 5)$ e $(3, 1, 2, -5)$. Un posto alla volta:
>
> | Posto | Primo vettore | Secondo vettore | Somma |
> |---|---|---|---|
> | 1 | $1$ | $3$ | $1 + 3 = 4$ |
> | 2 | $0$ | $1$ | $0 + 1 = 1$ |
> | 3 | $-2$ | $2$ | $-2 + 2 = 0$ |
> | 4 | $5$ | $-5$ | $5 - 5 = 0$ |
>
> Quindi la somma è $(4, 1, 0, 0)$.

### Come lo scrivono le dispense

Ecco la stessa regola con le lettere al posto dei numeri.

> [!DEF] Somma di vettori (p. 20)
> Lo spazio $\R^n$ è dotato di una somma definita **componente per componente**: se
> $$x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}, \qquad y = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix}, \qquad \text{allora} \qquad x + y = \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix}.$$

**Come si legge.**

- Le lettere $x$ e $y$ sono i nomi di due vettori con $n$ coordinate, scritti in colonna.
- In alto nella colonna della somma c'è $x_1 + y_1$: la prima coordinata dell'uno più la prima coordinata dell'altro.
- In basso c'è $x_n + y_n$: l'ultima più l'ultima.
- I puntini in mezzo dicono che si fa così per tutte le altre coordinate.

> [!TRAPPOLA] Solo vettori con lo stesso numero di coordinate
> Si sommano solo vettori lunghi uguale. La scrittura $(1, 2) + (1, 2, 3)$ non ha senso: al terzo numero del secondo vettore manca il compagno.

::: prova Quanto fa $(2, 5) + (1, -3)$?
Un posto alla volta: $(2 + 1,\ 5 - 3) = (3, 2)$.
:::

::: prova Quanto fa $(1, 0, 4) + (2, 2, -4)$?
$(1 + 2,\ 0 + 2,\ 4 - 4) = (3, 2, 0)$.
:::

::: prova Parti dall'origine. Fai lo spostamento $(2, 1)$ e poi lo spostamento $(-2, 3)$. Dove arrivi?
Sommi i due vettori: $(2 - 2,\ 1 + 3) = (0, 4)$. Sei 4 quadretti sopra il punto di partenza: i passi a destra e quelli a sinistra si sono annullati.
:::

> [!RICORDA]
> - Sommare due vettori vuol dire fare uno spostamento dopo l'altro.
> - Il conto si fa un posto alla volta: $(1, 2) + (3, 1) = (4, 3)$.
> - Nel piano la somma è la diagonale del parallelogramma costruito sui due vettori.
> - Si sommano solo vettori con lo stesso numero di coordinate.

## Multipli: ripetere lo stesso spostamento (p. 21)

Fai due volte di fila lo stesso spostamento: 1 a destra e 2 in su, e poi ancora 1 a destra e 2 in su.

In tutto hai fatto 2 passi a destra e 4 in su. Ogni numero è raddoppiato:

$$2 \cdot (1, 2) = (2 \cdot 1,\ 2 \cdot 2) = (2, 4)$$

Il puntino $\cdot$ è il segno «per». Lo stesso si può fare con altri numeri.

- **Metà spostamento.** Moltiplica per $\frac 12$, cioè dividi tutto a metà: viene $(\frac 12, 1)$. Stessa direzione, metà strada.
- **Lo spostamento al contrario.** Moltiplica per $-1$: viene $(-1, -2)$, cioè 1 a sinistra e 2 in giù. È la strada per tornare indietro.
- **Zero volte.** Moltiplica per 0: viene $(0, 0)$. Resti dove sei.

> [!IDEA]
> Moltiplicare un vettore per un numero vuol dire moltiplicare per quel numero **ogni** coordinata. La freccia si allunga o si accorcia. Se il numero è negativo, si gira dalla parte opposta.

### I nomi: scalare e multiplo

Il numero che moltiplica il vettore si chiama **scalare**. Uno scalare è un numero normale, come 2 o $-3$: la parola serve solo a distinguerlo dai vettori. Viene da «scala»: cambia la scala del disegno, come lo zoom di una mappa.

L'operazione si chiama **prodotto per scalare**. Il risultato si chiama **multiplo** del vettore.

Per indicare uno scalare qualsiasi le dispense usano la lettera greca $\lambda$, che si legge «lambda» (lezione L01).

Tra lo scalare e il vettore il puntino di solito non si scrive. La scrittura $2v$ vuol dire «2 per $v$», e $\lambda x$ vuol dire «lambda per $x$».

### Tutti i multipli di un vettore

Prendiamo il vettore $v = (1, 2)$ e moltiplichiamolo per sei scalari diversi.

| Scalare | Conto | Multiplo | Che cosa succede alla freccia |
|--:|---|---|---|
| $2$ | $(2 \cdot 1,\ 2 \cdot 2)$ | $(2, 4)$ | stesso verso, lunga il doppio |
| $\frac 12$ | $(\frac 12 \cdot 1,\ \frac 12 \cdot 2)$ | $(\frac 12, 1)$ | stesso verso, lunga la metà |
| $1$ | $(1 \cdot 1,\ 1 \cdot 2)$ | $(1, 2)$ | resta uguale |
| $0$ | $(0 \cdot 1,\ 0 \cdot 2)$ | $(0, 0)$ | si riduce all'origine |
| $-1$ | $(-1 \cdot 1,\ -1 \cdot 2)$ | $(-1, -2)$ | verso opposto, stessa lunghezza |
| $-2$ | $(-2 \cdot 1,\ -2 \cdot 2)$ | $(-2, -4)$ | verso opposto, lunga il doppio |

```grafico
titolo: I multipli di $v = (1, 2)$ stanno tutti sulla retta $y = 2x$
x: -4 4
y: -5 5
retta: 0 0 2.3 4.6 | grigio | tratteggio | $y = 2x$ | e
vettore: 2 4 | blu | $2v$ | e
vettore: 1 2 | accento | spesso | $v$ | o
vettore: -2 -4 | rosa | $-2v$ | e
```

Guarda la figura. Tutti i multipli stanno sulla stessa retta: quella che passa per l'origine e per la punta di $v$. In ogni punto di questa retta il secondo numero è il doppio del primo. Per questo la retta ha l'etichetta $y = 2x$, che si legge «ipsilon uguale due ics».

Questa osservazione torna nella lezione L06: l'insieme di tutti i multipli di un vettore lì riceve un nome e un simbolo.

### Come lo scrivono le dispense

Ecco la regola con le lettere.

> [!DEF] Prodotto per scalare (p. 21)
> Dato $x \in \R^n$ e uno scalare $\lambda \in \R$, definiamo
> $$\lambda x = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix}.$$
> Il numero reale $\lambda$ è detto **scalare**; l'operazione $x \mapsto \lambda x$ è detta **prodotto per scalare**.

**Come si legge.**

- $x \in \R^n$ si legge «ics appartiene a erre enne». Vuol dire: $x$ è un vettore con $n$ coordinate.
- $\lambda \in \R$ si legge «lambda appartiene a erre». Vuol dire: lo scalare è un numero reale.
- Nella colonna ogni coordinata è moltiplicata per lo stesso scalare. La prima diventa $\lambda x_1$, l'ultima $\lambda x_n$.
- La freccia $\mapsto$ si legge «va in». La scrittura $x \mapsto \lambda x$ vuol dire: a ogni vettore l'operazione fa corrispondere il suo multiplo.

Le dispense aggiungono la lettura sul disegno. Il vettore si allunga o si accorcia di un fattore $|\lambda|$, e se lo scalare è negativo cambia verso. Le due barre verticali sono il **valore assoluto**: il numero senza il segno meno. Per esempio $|-2| = 2$: moltiplicare per $-2$ raddoppia la lunghezza e gira la freccia.

Nello strumento qui sotto puoi trascinare le punte delle due frecce, che si chiamano $u$ e $v$. Prova queste due cose.

1. Nel modo «u + v» guarda il parallelogramma. Sposta una punta e controlla che la somma cambia un posto alla volta.
2. Passa al modo «multiplo λu» e muovi il cursore. Con uno scalare tra 0 e 1 la freccia si accorcia, con uno scalare negativo si ribalta, con 0 si riduce all'origine.

```widget vettori
titolo: Somma e prodotto per scalare nel piano
u: 1 2
v: 3 1
modo: somma
modi: somma multiplo
lambda: -2
```

All'apertura il cursore è su $-2$: è lo stesso disegno della Figura 6 delle dispense.

### L'opposto e la differenza

Il multiplo con lo scalare $-1$ ha un nome: **opposto** del vettore. Si scrive con un segno meno davanti. L'opposto di $v = (1, 2)$ è $-v = (-1, -2)$.

Un vettore più il suo opposto dà l'origine. È come andare e tornare:

$$(1, 2) + (-1, -2) = (1 - 1,\ 2 - 2) = (0, 0)$$

Con l'opposto si fa anche la **differenza** di due vettori. «$v$ meno $w$» vuol dire «$v$ più l'opposto di $w$». In pratica si sottrae un posto alla volta:

$$(5, 1) - (2, 3) = (5 - 2,\ 1 - 3) = (3, -2)$$

> [!ESEMPIO] · multipli e differenza nello stesso conto
> Calcoliamo $2 \cdot (1, 2, 0) - 3 \cdot (1, 0, -1)$. Prima i due multipli, poi la differenza.
>
> 1. Primo multiplo: $2 \cdot (1, 2, 0) = (2 \cdot 1,\ 2 \cdot 2,\ 2 \cdot 0) = (2, 4, 0)$.
> 2. Secondo multiplo: $3 \cdot (1, 0, -1) = (3 \cdot 1,\ 3 \cdot 0,\ 3 \cdot (-1)) = (3, 0, -3)$.
> 3. Differenza, un posto alla volta: $(2 - 3,\ 4 - 0,\ 0 - (-3)) = (-1, 4, 3)$.
>
> Attenzione al terzo posto. Togliere un numero negativo vuol dire aggiungere: $0 - (-3) = 0 + 3 = 3$.
>
> Il risultato è $(-1, 4, 3)$.

::: prova Quanto fa $3 \cdot (2, -1)$? E $-2 \cdot (1, 0, 4)$?
$3 \cdot (2, -1) = (3 \cdot 2,\ 3 \cdot (-1)) = (6, -3)$.

$-2 \cdot (1, 0, 4) = (-2 \cdot 1,\ -2 \cdot 0,\ -2 \cdot 4) = (-2, 0, -8)$.
:::

::: prova Quanto fa $(6, 2) - 2 \cdot (1, 3)$?
Prima il multiplo: $2 \cdot (1, 3) = (2, 6)$. Poi la differenza: $(6 - 2,\ 2 - 6) = (4, -4)$.
:::

> [!RICORDA]
> - Uno **scalare** è un numero. Moltiplicare un vettore per uno scalare vuol dire moltiplicare ogni coordinata.
> - Scalare maggiore di 1: la freccia si allunga. Tra 0 e 1: si accorcia. Negativo: si gira.
> - Tutti i multipli di un vettore stanno su una retta che passa per l'origine.
> - L'**opposto** di un vettore è il suo multiplo con lo scalare $-1$.

## Le otto regole dei conti con i vettori (pp. 21–22)

Con i numeri usi delle regole senza pensarci. Per esempio sai che in una somma l'ordine non conta: $2 + 5$ e $5 + 2$ danno lo stesso risultato (lezione L01).

Con i vettori succede lo stesso. La somma e il prodotto per scalare seguono otto regole. Le dispense le elencano nella definizione di spazio vettoriale, che trovi più avanti. Conviene conoscerle adesso, sui vettori del piano.

Per controllarle usiamo sempre gli stessi tre vettori e gli stessi due scalari:

$$v = (1, 2) \qquad w = (3, -1) \qquad u = (0, 5) \qquad \text{scalari: } 2 \text{ e } 3$$

| N. | La regola a parole | Controllo con i numeri |
|---|---|---|
| 1 | in una somma l'ordine non conta | $(1, 2) + (3, -1) = (4, 1)$ e $(3, -1) + (1, 2) = (4, 1)$ |
| 2 | in una somma di tre vettori puoi cominciare da dove vuoi | $(4, 1) + (0, 5) = (4, 6)$ e $(1, 2) + (3, 4) = (4, 6)$ |
| 3 | sommare il vettore di soli zeri non cambia niente | $(1, 2) + (0, 0) = (1, 2)$ |
| 4 | ogni vettore ha un opposto: sommati danno il vettore di soli zeri | $(1, 2) + (-1, -2) = (0, 0)$ |
| 5 | il multiplo di una somma è la somma dei multipli | $2 \cdot (4, 1) = (8, 2)$ e $(2, 4) + (6, -2) = (8, 2)$ |
| 6 | moltiplicare per la somma di due scalari è come fare i due multipli e sommarli | $5 \cdot (1, 2) = (5, 10)$ e $(2, 4) + (3, 6) = (5, 10)$ |
| 7 | moltiplicare per due scalari uno dopo l'altro è come moltiplicare per il loro prodotto | $6 \cdot (1, 2) = (6, 12)$ e $2 \cdot (3, 6) = (6, 12)$ |
| 8 | moltiplicare per 1 non cambia niente | $1 \cdot (1, 2) = (1, 2)$ |

Nella tabella i conti sono scritti in breve. Controlliamo per intero le regole 5 e 6, che sono le meno immediate.

**Regola 5.** A sinistra prima si somma, poi si raddoppia.

1. $v + w = (1 + 3,\ 2 - 1) = (4, 1)$.
2. Il doppio: $(2 \cdot 4,\ 2 \cdot 1) = (8, 2)$.

A destra prima si raddoppiano i due vettori, poi si somma.

1. Il doppio di $v$ è $(2, 4)$. Il doppio di $w$ è $(6, -2)$.
2. La somma: $(2 + 6,\ 4 - 2) = (8, 2)$.

Stesso risultato.

**Regola 6.** A sinistra prima si sommano i due scalari: $2 + 3 = 5$. Poi si moltiplica: $5 \cdot (1, 2) = (5, 10)$.

A destra prima si fanno i due multipli, che sono $(2, 4)$ e $(3, 6)$. Poi si sommano: $(2 + 3,\ 4 + 6) = (5, 10)$.

Stesso risultato.

### Perché valgono

Ogni conto tra vettori è fatto di conti tra numeri, un posto alla volta. E per i numeri queste regole valgono già: sono le nove regole della lezione L01.

Guarda la regola 1. Al primo posto c'è $1 + 3$ da una parte e $3 + 1$ dall'altra. Sono uguali perché nella somma di due numeri l'ordine non conta. Al secondo posto succede lo stesso.

I nomi delle regole sono quelli della lezione L01: la regola 1 è la proprietà **commutativa**, la regola 2 è la proprietà **associativa**. Le regole 5 e 6 sono due forme della proprietà **distributiva**.

::: prova Controlla la regola 5 con lo scalare 3 e i vettori $(1, 1)$ e $(2, 0)$.
A sinistra: prima la somma, $(1 + 2,\ 1 + 0) = (3, 1)$. Poi il triplo: $(9, 3)$.

A destra: il triplo di $(1, 1)$ è $(3, 3)$, il triplo di $(2, 0)$ è $(6, 0)$. La somma: $(3 + 6,\ 3 + 0) = (9, 3)$.

Stesso risultato.
:::

::: prova Quale regola dice che $(2, 7) + (0, 0) = (2, 7)$? E quale dice che $1 \cdot (2, 7) = (2, 7)$?
La prima è la regola 3: sommare il vettore di soli zeri non cambia niente. La seconda è la regola 8: moltiplicare per 1 non cambia niente.
:::

> [!RICORDA]
> - La somma di vettori e il prodotto per scalare seguono otto regole.
> - Quattro parlano solo della somma: l'ordine non conta, si può cominciare da dove si vuole, c'è il vettore di soli zeri, ogni vettore ha l'opposto.
> - Quattro parlano dei multipli: due distributive, quella dei due scalari uno dopo l'altro, e quella dello scalare 1.
> - Valgono perché valgono per i numeri, una coordinata alla volta.

## Gruppi: un'operazione e tre regole (pp. 21–22)

Per due sezioni lasciamo da parte i vettori e parliamo solo di regole.

> [!NOTA] Serve per capire, non per l'esame
> Questa sezione e la prossima spiegano due parole, **gruppo** e **campo**. Le dispense le usano per scrivere in modo preciso la definizione di spazio vettoriale. Negli appelli dal 2024 al 2026 non c'è nessuna domanda sulle regole dei gruppi, e la parola «campo» compare solo dentro domande sugli spazi vettoriali. Se hai poco tempo, leggi i due riquadri «Da ricordare» e passa alla sezione «Che cos'è uno spazio vettoriale».

### Che cosa succede con gli interi e la somma

Prendi i numeri interi, cioè $\dots, -2, -1, 0, 1, 2, \dots$, e l'operazione di somma. Succedono quattro cose.

1. **Non si esce.** La somma di due interi è sempre un intero: $3 + (-5) = -2$.
2. **C'è un numero che non cambia niente.** È lo zero: $0 + 7 = 7$.
3. **Le parentesi si possono spostare.** $(2 + 3) + 4$ fa $5 + 4 = 9$. Anche $2 + (3 + 4)$ fa $2 + 7 = 9$.
4. **Ogni numero ha un compagno che lo annulla.** Il compagno di 7 è $-7$: sommati fanno zero.

Ora prendi i numeri naturali, cioè $0, 1, 2, 3, \dots$, sempre con la somma. Le prime tre cose valgono ancora. La quarta no: il compagno di 3 sarebbe $-3$, che non è un numero naturale.

> [!IDEA]
> Un **gruppo** è un insieme con un'operazione che non fa uscire dall'insieme e che rispetta tre regole: c'è un elemento che non cambia niente, le parentesi si possono spostare, ogni elemento ha un compagno che lo annulla.

Gli interi con la somma sono un gruppo. I naturali con la somma no.

### I nomi delle tre regole

- L'elemento che non cambia niente si chiama **elemento neutro**. Per la somma è lo 0. Per il prodotto è l'1, perché $1 \cdot 7 = 7$.
- «Le parentesi si possono spostare» è la proprietà **associativa**.
- Il compagno che annulla si chiama **inverso**. «Annullare» vuol dire: riportare all'elemento neutro.

Per la somma l'inverso è l'opposto: quello di 7 è $-7$, perché sommati fanno 0. Per il prodotto l'inverso è il numero che moltiplicato dà 1: quello di 7 è $\frac 17$.

Un'operazione che prende due elementi di un insieme e ne restituisce uno **dello stesso insieme** si chiama **operazione binaria** (lezione L01). La sottrazione non è un'operazione binaria sui naturali: $2 - 5$ fa $-3$, che esce dall'insieme.

Se in più nell'operazione l'ordine non conta, il gruppo si chiama **commutativo**.

Le tre regole valgono per la somma degli interi. Valgono anche per altre operazioni, per esempio per il prodotto delle frazioni diverse da zero. Per scriverle una volta sola, qualunque sia l'operazione, le dispense usano tre segni.

- L'asterisco $*$ sta per «l'operazione, qualunque sia». La scrittura $a * b$ vuol dire «il risultato dell'operazione tra $a$ e $b$». Nei casi concreti al posto dell'asterisco c'è il segno più oppure il segno per.
- La lettera $e$ indica l'elemento neutro.
- $a'$ si legge «a primo» e indica l'inverso di $a$.

### Come lo scrivono le dispense

Ecco la definizione delle dispense.

> [!DEF] 5.2 · Gruppo
> Un **gruppo** è un insieme $G$ dotato di un'operazione binaria, cioè di una funzione che associa a ogni coppia $a, b$ di elementi in $G$ un nuovo elemento di $G$ che indichiamo con $a * b$. Il simbolo $*$ indica l'operazione binaria. L'operazione deve soddisfare i seguenti tre assiomi:
> 1. $\exists\, e \in G : e * a = a * e = a,\ \forall a \in G$ (esistenza dell'elemento neutro $e$);
> 2. $a * (b * c) = (a * b) * c,\ \forall a, b, c \in G$ (proprietà associativa);
> 3. $\forall a \in G,\ \exists\, a' \in G : a * a' = a' * a = e$ (esistenza dell'inverso).
>
> Il gruppo $G$ è **commutativo** se vale anche la proprietà commutativa $a * b = b * a,\ \forall a, b \in G$.

**Come si legge.** La definizione usa due simboli della lezione L01: $\forall$ si legge «per ogni» ed $\exists$ si legge «esiste». I due punti dopo «esiste» si leggono «per cui».

- **La prima frase.** La lettera $G$ è il nome dell'insieme. L'operazione prende due elementi dell'insieme e ne restituisce uno dello stesso insieme: non si esce.
- **Assioma 1.** A parole: «esiste un elemento $e$ che, combinato con qualunque elemento $a$, restituisce $a$». È l'elemento neutro, ed è lo stesso per tutti.
- **Assioma 2.** Le parentesi si possono spostare. Quindi in una scrittura con tre elementi si possono anche togliere.
- **Assioma 3.** A parole: «per ogni elemento $a$ esiste un elemento $a'$ che, combinato con $a$, restituisce l'elemento neutro». È l'inverso, e cambia da elemento a elemento.
- **L'ultima riga.** Il gruppo è commutativo se l'ordine non conta.

La parola **assioma** indica una regola che fa parte di una definizione.

### Quali sono gruppi e quali no

Per indicare un insieme con la sua operazione si scrive una coppia tra parentesi. Per esempio $(\Z, +)$ vuol dire «gli interi con la somma».

Ricorda le lettere della lezione L01: $\N$ sono i naturali, $\Z$ gli interi, $\Q$ le frazioni, $\R$ i reali, $\C$ i complessi. La scrittura $\Q \setminus \{0\}$ si legge «cu senza lo zero»: sono tutte le frazioni tranne lo 0.

Ecco gli esempi delle dispense, con il motivo.

| Insieme e operazione | Elemento neutro | Inverso di $a$ | È un gruppo commutativo? |
|---|---|---|---|
| $(\Z, +)$ | $0$ | $-a$ | sì |
| $(\Q, +)$, $(\R, +)$, $(\C, +)$ | $0$ | $-a$ | sì |
| $(\Q \setminus \{0\}, \cdot)$, $(\R \setminus \{0\}, \cdot)$, $(\C \setminus \{0\}, \cdot)$ | $1$ | $a^{-1} = \frac 1a$ | sì |
| $(\N, +)$ | $0$ | manca: quello di $1$ sarebbe $-1$, che non è un naturale | **no**: fallisce l'assioma 3 |
| $(\Z, \cdot)$ e $(\Z \setminus \{0\}, \cdot)$ | $1$ | manca: quello di $2$ sarebbe $\frac 12$, che non è un intero | **no**: fallisce l'assioma 3 |

Nella terza riga compare $a^{-1}$, che si legge «a alla meno uno». È un altro modo di scrivere l'inverso per il prodotto, cioè $\frac 1a$.

> [!ESEMPIO] · i conti in $(\Q \setminus \{0\}, \cdot)$
> Controlliamo che le frazioni diverse da zero, con il prodotto, formano un gruppo.
>
> - **Non si esce.** Per esempio $\frac 23 \cdot \left(-\frac 94\right) = -\frac{18}{12} = -\frac 32$: è ancora una frazione diversa da zero.
> - **Elemento neutro.** È $1$, perché $1 \cdot \frac 23 = \frac 23$.
> - **Inverso.** Si scambiano il numero sopra e il numero sotto. L'inverso di $-\frac 34$ è $-\frac 43$: moltiplicati danno $\frac{12}{12} = 1$.
> - **Perché si toglie lo zero.** Lo $0$ non ha inverso: qualunque numero moltiplicato per $0$ dà $0$, mai $1$.

> [!TRAPPOLA] Togliere lo zero serve per il prodotto, non per la somma
> Le frazioni senza lo zero sono un gruppo con il prodotto, ma **non** con la somma. Infatti $1 + (-1) = 0$ esce dall'insieme. E manca l'elemento neutro della somma, che è proprio lo 0.

> [!OLTRE] · due fatti utili sui gruppi
> Vengono dal libro di Martelli (§1.5.1). Servono tra poco, con i vettori.
>
> **L'inverso è uno solo.** Negli interi con la somma, l'unico numero che sommato a 7 dà 0 è $-7$. Lo stesso vale in ogni gruppo: un elemento non può avere due inversi diversi.
>
> **Si può semplificare.** Negli interi: se $5 + x$ e $5 + y$ danno lo stesso risultato, allora $x$ e $y$ sono uguali. Basta sommare $-5$ a tutti e due i lati. Lo stesso vale in ogni gruppo, e quindi anche per la somma di vettori.

::: prova Negli interi con la somma, qual è l'inverso di $-4$? E qual è l'elemento neutro?
L'inverso di $-4$ è $4$, perché $-4 + 4 = 0$. L'elemento neutro è $0$.
:::

::: prova I numeri naturali con il prodotto formano un gruppo?
No. L'elemento neutro c'è, ed è l'1. Ma manca l'inverso di 2: sarebbe $\frac 12$, che non è un naturale. Fallisce l'assioma 3.
:::

> [!RICORDA]
> - Un **gruppo** è un insieme con un'operazione che non fa uscire dall'insieme e rispetta tre regole: elemento neutro, proprietà associativa, inverso di ogni elemento.
> - Se in più l'ordine non conta, il gruppo è **commutativo**.
> - Gli interi con la somma sono un gruppo. I naturali con la somma no: manca l'opposto.

## Campi: dove si fanno le quattro operazioni (p. 22)

Negli insiemi di numeri le operazioni sono due: la somma e il prodotto.

Un **campo** è un insieme di numeri in cui le due operazioni funzionano bene insieme. In pratica: puoi fare più, meno, per e diviso senza mai uscire dall'insieme. C'è un solo divieto: non si divide per zero.

Un esempio. Prendi l'indovinello «quale numero, moltiplicato per 2, dà 1?». Tra le frazioni la risposta c'è: è $\frac 12$. Tra gli interi non c'è, perché $\frac 12$ non è un intero. Le frazioni formano un campo, gli interi no.

Nella lezione L01 un campo era «un insieme in cui valgono le nove regole dei conti». Qui le dispense dicono la stessa cosa in tre righe, usando la parola «gruppo».

> [!DEF] 5.3 · Campo
> Un **campo** è un insieme $A$ dotato di due operazioni binarie $+$ e $\cdot$ che soddisfano questi assiomi:
> 1. $A$ è un gruppo commutativo con l'operazione $+$, con elemento neutro $0_A$;
> 2. $A \setminus \{0_A\}$ è un gruppo commutativo con l'operazione $\cdot$, con elemento neutro $1_A$;
> 3. vale la proprietà distributiva $a \cdot (b + c) = (a \cdot b) + (a \cdot c),\ \forall a, b, c \in A$.

**Come si legge.**

- La lettera $A$ è il nome dell'insieme.
- $0_A$ si legge «zero di $A$». È l'elemento neutro della somma. La piccola lettera in basso ricorda di quale insieme si parla.
- $1_A$ si legge «uno di $A$». È l'elemento neutro del prodotto.
- $A \setminus \{0_A\}$ si legge «$A$ senza lo zero».
- **Assioma 1.** Con la somma, l'insieme è un gruppo commutativo. Dentro ci sono quattro regole: c'è lo zero, ogni elemento ha l'opposto, le parentesi si spostano, l'ordine non conta.
- **Assioma 2.** Tolto lo zero, l'insieme è un gruppo commutativo anche con il prodotto. Sono altre quattro regole: c'è l'uno, ogni elemento diverso da zero ha l'inverso, le parentesi si spostano, l'ordine non conta.
- **Assioma 3.** È la proprietà **distributiva**, che lega le due operazioni. Con i numeri: $3 \cdot (2 + 5)$ fa 21, e anche $3 \cdot 2 + 3 \cdot 5$ fa 21. Il simbolo $\forall$ si legge «per ogni».

Quattro regole, più quattro, più una: sono le nove regole della lezione L01 (Proposizione 1.5), raggruppate in un altro modo.

### Quali insiemi sono campi

| Insieme, con somma e prodotto | È un campo? | Perché |
|---|---|---|
| $\Q$, $\R$, $\C$ | sì | valgono tutte le regole; per esempio l'inverso di $\frac 23$ è $\frac 32$ |
| $\Z$ | no | $2$ non ha inverso: $\frac 12$ non è un intero |
| $\N$ | no | già con la somma non è un gruppo: manca $-1$ |
| $\R \setminus \{0\}$ | no | la somma esce dall'insieme: $1 + (-1) = 0$ |
| $\{0, 1\}$ con $1 + 1 = 0$ | sì | è il campo con due elementi, qui sotto |

Per dire che un insieme **non** è un campo basta una regola che fallisce, con un esempio.

### Un campo con due soli elementi

Un campo non deve per forza avere infiniti elementi. Nell'Esercizio 5.9 le dispense ne costruiscono uno che ne ha solo due: lo 0 e l'1.

Somme e prodotti si fanno come negli interi, con una sola eccezione: $1 + 1 = 0$.

Un modo per ricordarlo: leggi 0 come «pari» e 1 come «dispari». Dispari più dispari fa pari, quindi $1 + 1 = 0$. Dispari per dispari fa dispari, quindi $1 \cdot 1 = 1$. Sono le regole dei numeri pari e dispari.

In informatica questo è il campo dei **bit**. La somma è l'operazione XOR e il prodotto è l'operazione AND. Che le regole dei campi valgano davvero si controlla nell'esercizio 8.

> [!NOTA] Il campo del corso
> Nelle dispense il campo si indica con la lettera $\K$, che si legge «cappa». Sta per «un campo qualsiasi». Nel corso è quasi sempre $\R$, i numeri reali, oppure $\C$, i numeri complessi. Quello che si dimostra per $\K$ vale per tutti e due.

::: prova Nel campo con due elementi, quanto fa $1 + 1 + 1$?
Prima $1 + 1 = 0$. Poi $0 + 1 = 1$. Quindi fa $1$: tre numeri dispari sommati danno un numero dispari.
:::

::: prova I numeri naturali sono un campo? E i numeri razionali?
I naturali no: manca già l'opposto di 1, che sarebbe $-1$. I razionali sì: valgono tutte e nove le regole.
:::

> [!RICORDA]
> - Un **campo** è un insieme di numeri in cui si fanno le quattro operazioni senza uscire, dividendo solo per numeri diversi da zero.
> - $\Q$, $\R$ e $\C$ sono campi. $\N$ e $\Z$ no.
> - La lettera $\K$ indica un campo qualsiasi: nel corso è $\R$ oppure $\C$.

## Che cos'è uno spazio vettoriale (pp. 20 e 22–23)

Finora i vettori erano liste di numeri. Adesso guarda oggetti di tutt'altro tipo: i polinomi.

> [!RIPASSO] che cos'è un polinomio
> Un **polinomio** è una somma di potenze di una lettera, di solito $x$, ognuna moltiplicata per un numero (lezione L04). Per esempio $x^2 + 1$ oppure $2x - 3$. I numeri che moltiplicano le potenze si chiamano **coefficienti**.
>
> Il **grado** è l'esponente più alto. Il primo esempio ha grado 2, il secondo ha grado 1.
>
> Due polinomi si **sommano** mettendo insieme i pezzi con la stessa potenza:
> $$(x^2 + 1) + (2x - 3) = x^2 + 2x + (1 - 3) = x^2 + 2x - 2$$
>
> Un polinomio si **moltiplica per un numero** moltiplicando ogni coefficiente:
> $$2 \cdot (x^2 + 1) = 2x^2 + 2$$

Mettiamo le liste e i polinomi uno accanto all'altro.

| | Liste di due numeri | Polinomi |
|---|---|---|
| due elementi | $(1, 2)$ e $(3, 1)$ | $x^2 + 1$ e $2x - 3$ |
| la loro somma | $(4, 3)$ | $x^2 + 2x - 2$ |
| il doppio del primo | $(2, 4)$ | $2x^2 + 2$ |
| l'elemento che non cambia niente | $(0, 0)$ | il polinomio $0$ |

In tutti e due i casi succedono tre cose.

- Sommando due elementi ottieni un elemento **dello stesso tipo**.
- Moltiplicando per un numero resti **nello stesso tipo**.
- Valgono le **otto regole** della sezione precedente.

> [!IDEA]
> Uno **spazio vettoriale** è un insieme in cui puoi sommare due elementi e moltiplicare un elemento per un numero, senza mai uscire dall'insieme e con le otto regole.

Gli elementi di uno spazio vettoriale si chiamano **vettori**, qualunque cosa siano. Qui l'immagine della freccia non regge più: un polinomio non è uno spostamento su una mappa. Da questo punto in poi «vettore» vuol dire solo «elemento di uno spazio vettoriale».

### A che cosa serve un'idea così generale

Se dimostri una cosa usando **solo** le otto regole, quella cosa vale in una volta sola per le liste, per i polinomi e per ogni altro spazio vettoriale. Non devi rifare il lavoro ogni volta.

Le dispense citano tre esempi che userai spesso: gli insiemi di soluzioni dei sistemi lineari (lezioni L11–L13), gli spazi di funzioni (più avanti in questa lezione) e gli spazi di matrici (lezione L06).

### Le lettere della definizione

Nella definizione delle dispense compaiono queste lettere.

- $V$ è l'insieme dei vettori.
- $v$ e $w$ sono due vettori qualsiasi.
- $\lambda$ e $\mu$ sono due scalari qualsiasi. La seconda è la lettera greca «mi» (lezione L01).
- $\K$ è l'insieme da cui si prendono gli scalari. Deve essere un campo, perché con gli scalari servono tutte e quattro le operazioni. Se hai saltato la sezione sui campi, leggi «i numeri reali».

> [!DEF] 5.4 · Spazio vettoriale
> Fissiamo un campo $\K$. Questo per noi è generalmente o il campo $\K = \R$ dei numeri reali o il campo $\K = \C$ dei numeri complessi (però per la definizione può essere qualsiasi campo). Gli elementi di $\K$ sono detti **scalari**. Uno **spazio vettoriale** su $\K$ è un insieme $V$ di elementi, detti **vettori**, dotato di due operazioni:
> - un'operazione detta **somma** che associa a due vettori $v, w \in V$ un terzo vettore $v + w \in V$;
> - un'operazione detta **prodotto per scalare** che associa a un vettore $v \in V$ e a uno scalare $\lambda \in \K$ un vettore $\lambda v \in V$.
>
> Queste due operazioni devono soddisfare le stesse proprietà delle corrispondenti operazioni dello spazio euclideo, cioè:
> 1. l'insieme $V$ è un gruppo commutativo con la somma $+$;
> 2. $\lambda(v + w) = \lambda v + \lambda w$;
> 3. $(\lambda + \mu)v = \lambda v + \mu v$;
> 4. $(\lambda\mu)v = \lambda(\mu v)$;
> 5. $1v = v$.
>
> Le proprietà devono valere per ogni $v, w \in V$ e ogni $\lambda, \mu \in \K$.

**Come si legge.** Un pezzo alla volta:

- **«Fissiamo un campo».** Prima di tutto si decide quali numeri usare come scalari.
- **«Uno spazio vettoriale su $\K$».** La parola «su» dice da dove vengono gli scalari. Con i numeri reali si scrive «su $\R$».
- **La somma.** $v + w \in V$ si legge «vu più vu doppia appartiene a $V$». Vuol dire: la somma di due vettori dell'insieme sta ancora nell'insieme.
- **Il prodotto per scalare.** $\lambda v \in V$ dice la stessa cosa per i multipli: non si esce.
- **Proprietà 1.** «Gruppo commutativo con la somma» riassume le regole da 1 a 4 della tabella: l'ordine non conta, le parentesi si spostano, c'è un vettore che non cambia niente, ogni vettore ha l'opposto.
- **Proprietà 2.** È la regola 5: il multiplo di una somma di vettori.
- **Proprietà 3.** È la regola 6: la somma di due scalari. Attenzione: a sinistra il segno più sta tra due numeri, a destra sta tra due vettori.
- **Proprietà 4.** È la regola 7. La scrittura $\lambda\mu$ è il prodotto dei due scalari.
- **Proprietà 5.** È la regola 8: lo scalare 1 non cambia niente.
- **L'ultima riga.** Le proprietà devono valere per tutti i vettori e per tutti gli scalari, non solo per qualche esempio.

In tutto: due operazioni che non fanno uscire dall'insieme, più otto regole. Le dispense chiamano le cinque proprietà anche **assiomi** dello spazio vettoriale.

> [!TRAPPOLA] Tra due vettori non c'è un prodotto
> In uno spazio vettoriale si sommano due vettori e si moltiplica un vettore per uno **scalare**. Un prodotto «vettore per vettore» non fa parte della definizione. Il prodotto scalare tra due vettori arriva nella lezione L19, ed è un'altra cosa.

La proprietà 5 sembra scontata, ma non si ricava dalle altre quattro. L'esercizio 12 mostra un prodotto per scalare «strano» che rispetta le prime quattro e non la quinta.

::: prova L'insieme che contiene il solo vettore $(1, 2)$ è uno spazio vettoriale?
No. La somma $(1, 2) + (1, 2) = (2, 4)$ non sta nell'insieme: si esce.
:::

::: prova Prendi le liste di due numeri **interi**, come $(1, 2)$ e $(-3, 0)$, con gli scalari reali. I multipli restano nell'insieme?
No. Per esempio $\frac 12 \cdot (1, 2) = (\frac 12, 1)$, e $\frac 12$ non è un intero. Un multiplo è uscito dall'insieme, quindi non è uno spazio vettoriale.
:::

> [!RICORDA]
> - Uno **spazio vettoriale** è un insieme con una somma e un prodotto per scalare che non fanno uscire dall'insieme e rispettano le otto regole.
> - I suoi elementi si chiamano **vettori**, anche quando non sono liste di numeri.
> - Gli **scalari** sono i numeri di un campo: nel corso i reali oppure i complessi.
> - Tra due vettori non c'è un prodotto.

## Due zeri da non confondere (p. 23)

In ogni spazio vettoriale c'è un vettore speciale: quello che, sommato a un altro, non cambia niente.

Sulla mappa è lo spostamento «resta dove sei», cioè $(0, 0)$. Tra i polinomi è il polinomio $0$.

Questo vettore si chiama **vettore nullo**, oppure **origine** dello spazio. Le dispense lo scrivono $0$. Quando serve ricordare che è un vettore dell'insieme $V$, scrivono $0_V$, che si legge «zero di $V$».

Il problema è che anche il numero zero si scrive $0$. Sono due cose diverse.

- Il **numero zero** è uno scalare.
- Il **vettore nullo** è un vettore.

| Spazio vettoriale | Lo zero degli scalari | Il vettore nullo |
|---|---|---|
| le liste di tre numeri reali | il numero $0$ | la lista $(0, 0, 0)$ |
| i polinomi | il numero $0$ | il polinomio con tutti i coefficienti uguali a 0 |

Le dispense avvertono: in questo corso il simbolo $0$ può indicare cose diverse, e il significato si capisce dal contesto.

### Un vettore per il numero zero

Moltiplica un vettore per il numero zero:

$$0 \cdot (3, -1) = (0 \cdot 3,\ 0 \cdot (-1)) = (0, 0)$$

Viene il vettore nullo. Con un polinomio succede lo stesso:

$$0 \cdot (x^2 + 1) = 0 \cdot x^2 + 0 \cdot 1 = 0$$

Viene il polinomio nullo. Le dispense dicono che succede sempre.

> [!PROP] 5.5
> Vale la relazione $0v = 0$.

**Come si legge.** Nella formula ci sono due zeri diversi. Il primo, quello attaccato a $v$, è il numero zero. Il secondo, dopo l'uguale, è il vettore nullo. A parole: **un vettore qualsiasi, moltiplicato per il numero zero, dà il vettore nullo**.

Per le liste di numeri basta fare il conto, come sopra. Ma la proposizione dice di più: vale in **ogni** spazio vettoriale, anche in quelli che non hai ancora visto. Per questo la dimostrazione usa solo le regole della definizione.

L'idea è quella vista nella lezione L01 per i numeri. Si scrive lo zero come «zero più zero», si usa la proprietà 3 e poi si semplifica.

> [!DIM] · la Proposizione 5.5, un passo alla volta
> 1. Tra i numeri vale $0 + 0 = 0$. Quindi $0v$ è uguale a $(0 + 0)v$.
> 2. Per la proprietà 3 della definizione, $(0 + 0)v = 0v + 0v$.
> 3. Mettendo insieme i due passi: $0v = 0v + 0v$.
> 4. Per scrivere meno, chiamiamo $w$ il vettore $0v$. La riga del passo 3 diventa $w = w + w$.
> 5. Sommiamo a tutti e due i lati l'opposto $-w$, che esiste per la proprietà 1. A sinistra viene $w + (-w) = 0_V$.
> 6. A destra viene $(w + w) + (-w)$. Spostiamo le parentesi: $w + (w + (-w)) = w + 0_V = w$.
> 7. Quindi $0_V = w$, cioè $0v = 0_V$.
>
> Le dispense scrivono solo $0v = (0 + 0)v = 0v + 0v$ e poi «semplificando deduciamo che $0v = 0$». I passi da 4 a 7 sono quel «semplificando»: in un gruppo si semplifica sommando l'opposto a tutti e due i lati.

> [!OLTRE] · altre tre conseguenze delle regole
> Con lo stesso tipo di ragionamento si dimostrano altri tre fatti, veri in ogni spazio vettoriale. Le dimostrazioni sono nell'esercizio 11.
>
> - **Uno scalare per il vettore nullo dà il vettore nullo.** Con i numeri: $5 \cdot (0, 0) = (0, 0)$.
> - **Moltiplicare per $-1$ dà l'opposto.** Con i numeri: $-1 \cdot (1, 2) = (-1, -2)$.
> - **Un multiplo è il vettore nullo solo in due casi:** quando lo scalare è zero, oppure quando il vettore è già quello nullo.
>
> L'ultimo fatto usa l'inverso dello scalare. È uno dei motivi per cui gli scalari devono stare in un campo.

::: prova Quanto fa $0 \cdot (7, -2, 5)$? E $5 \cdot (0, 0)$?
$0 \cdot (7, -2, 5) = (0 \cdot 7,\ 0 \cdot (-2),\ 0 \cdot 5) = (0, 0, 0)$: il numero zero per un vettore dà il vettore nullo.

$5 \cdot (0, 0) = (5 \cdot 0,\ 5 \cdot 0) = (0, 0)$: uno scalare per il vettore nullo dà il vettore nullo.
:::

::: prova Nella scrittura $0v = 0$, quale zero è un numero e quale è un vettore?
Il primo è un numero: è lo scalare che moltiplica $v$. Il secondo è un vettore: è il risultato, cioè il vettore nullo.
:::

> [!RICORDA]
> - Il **vettore nullo** è il vettore che sommato non cambia niente. Si scrive $0$ oppure $0_V$.
> - Non va confuso con il **numero zero**, che è uno scalare.
> - Un vettore qualsiasi per il numero zero dà il vettore nullo (Proposizione 5.5).

## I primi esempi: numeri e liste di numeri (pp. 23–24)

Le dispense presentano cinque esempi di spazi vettoriali.

Per ognuno bisogna dire tre cose: chi sono i vettori, come si sommano e come si moltiplicano per uno scalare. Poi si controlla che valgano le regole. In questa sezione ci sono i primi due esempi.

### I numeri da soli

Il primo esempio è il più piccolo: i numeri reali, senza liste.

Un numero è come una lista con una sola coordinata. Sommare due vettori vuol dire sommare due numeri. Moltiplicare per uno scalare vuol dire moltiplicare due numeri. Sulla mappa è come muoversi avanti e indietro lungo una sola riga: la retta dei numeri.

Le dispense lo dicono per un campo qualsiasi: un campo è uno spazio vettoriale **su se stesso**. «Su se stesso» vuol dire che i vettori e gli scalari sono presi dallo stesso insieme.

Le cinque proprietà della definizione valgono perché sono regole dei numeri. Nella terza colonna c'è un controllo con gli scalari 2 e 3 e con i «vettori» 4 e 5.

| Proprietà | Perché vale tra i numeri | Controllo |
|---|---|---|
| 1. gruppo commutativo con la somma | è l'assioma 1 dei campi | $4 + 5 = 5 + 4 = 9$ |
| 2. il multiplo di una somma | proprietà distributiva | $2 \cdot (4 + 5) = 18$ e $2 \cdot 4 + 2 \cdot 5 = 18$ |
| 3. la somma di due scalari | proprietà commutativa e distributiva | $(2 + 3) \cdot 4 = 20$ e $2 \cdot 4 + 3 \cdot 4 = 20$ |
| 4. due scalari uno dopo l'altro | proprietà associativa del prodotto | $(2 \cdot 3) \cdot 4 = 24$ e $2 \cdot (3 \cdot 4) = 24$ |
| 5. lo scalare 1 | l'1 è l'elemento neutro del prodotto | $1 \cdot 4 = 4$ |

### Le liste di numeri, con un campo qualsiasi

L'esempio principale è quello da cui siamo partiti: le liste di numeri reali.

Le dispense ripetono la stessa costruzione con un campo qualsiasi al posto dei numeri reali. L'insieme delle liste di $n$ numeri presi dal campo $\K$ si scrive $\K^n$ e si legge «cappa enne».

> [!DEF] Lo spazio $\K^n$ (pp. 23–24)
> Sia $n \ge 1$ un numero naturale. Lo spazio $\K^n$ è l'insieme delle sequenze $(x_1, \dots, x_n)$ di numeri in $\K$, descritte generalmente come vettori colonna. La somma e la moltiplicazione per scalare sono definite termine a termine:
> $$\begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} + \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} = \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix}, \qquad \lambda \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix}.$$

**Come si legge.** È la definizione già vista per le liste di numeri reali, con un campo qualsiasi al posto di $\R$.

- «Sequenze» vuol dire liste ordinate.
- «Termine a termine» vuol dire «un posto alla volta».
- La prima uguaglianza è la somma: la prima coordinata con la prima, e avanti così fino all'ultima.
- La seconda uguaglianza è il multiplo: ogni coordinata viene moltiplicata per lo scalare $\lambda$.

### Vettori di numeri complessi

Se il campo è quello dei numeri complessi si ottiene $\C^n$: le liste di $n$ numeri complessi. Qui anche gli scalari sono numeri complessi.

> [!RIPASSO] i conti con i numeri complessi
> Un **numero complesso** si scrive come $1 + 2i$: un numero reale, più un altro numero reale moltiplicato per $i$ (lezione L02). Il primo pezzo si chiama *parte reale*, il secondo *parte immaginaria*.
>
> La lettera $i$ è un numero nuovo con una sola regola speciale: $i \cdot i = -1$. In breve: $i^2 = -1$.
>
> **Somma.** Parte reale con parte reale, parte immaginaria con parte immaginaria:
> $$(1 + 2i) + (3 + i) = (1 + 3) + (2 + 1)i = 4 + 3i$$
>
> **Prodotto.** Si moltiplica ogni pezzo per ogni pezzo, come con le lettere. Poi al posto di $i^2$ si scrive $-1$:
> $$(1 + i) \cdot i = 1 \cdot i + i \cdot i = i + i^2 = i - 1$$

> [!ESEMPIO] · i due conti delle dispense in $\C^2$
> **Somma.** Vogliamo sommare questi due vettori, una riga alla volta:
> $$\begin{pmatrix} 1 + i \\ -2 \end{pmatrix} + \begin{pmatrix} 3i \\ 1 - i \end{pmatrix}$$
>
> 1. Prima riga: $(1 + i) + 3i = 1 + (1 + 3)i = 1 + 4i$.
> 2. Seconda riga: $-2 + (1 - i) = (-2 + 1) - i = -1 - i$.
>
> La somma è il vettore con le coordinate $1 + 4i$ e $-1 - i$:
> $$\begin{pmatrix} 1 + i \\ -2 \end{pmatrix} + \begin{pmatrix} 3i \\ 1 - i \end{pmatrix} = \begin{pmatrix} 1 + 4i \\ -1 - i \end{pmatrix}.$$
>
> **Prodotto per scalare.** Lo scalare è $2 + i$, e moltiplica tutte e due le righe del vettore:
> $$(2 + i)\begin{pmatrix} 3 \\ 1 - i \end{pmatrix}$$
>
> 1. Prima riga: $(2 + i) \cdot 3 = 2 \cdot 3 + i \cdot 3 = 6 + 3i$.
> 2. Seconda riga: $(2 + i) \cdot (1 - i)$. Ogni pezzo per ogni pezzo: $2 \cdot 1 = 2$, poi $2 \cdot (-i) = -2i$, poi $i \cdot 1 = i$, poi $i \cdot (-i) = -i^2$.
> 3. Sommo i quattro pezzi: $2 - 2i + i - i^2 = 2 - i - i^2$.
> 4. Al posto di $i^2$ scrivo $-1$: $2 - i - (-1) = 2 - i + 1 = 3 - i$.
>
> Il risultato:
> $$(2 + i)\begin{pmatrix} 3 \\ 1 - i \end{pmatrix} = \begin{pmatrix} 6 + 3i \\ 3 - i \end{pmatrix}.$$

### Perché le liste rispettano le regole

Resta da controllare che le liste rispettino davvero le otto regole. Le dispense controllano la proprietà 2: il multiplo di una somma è la somma dei multipli.

Proviamo prima con i numeri. Lo scalare è 2, i vettori sono $(1, 3)$ e $(4, -1)$.

A sinistra, prima la somma e poi il doppio:

1. $(1, 3) + (4, -1) = (1 + 4,\ 3 - 1) = (5, 2)$.
2. Il doppio: $(2 \cdot 5,\ 2 \cdot 2) = (10, 4)$.

A destra, prima i due doppi e poi la somma:

1. Il doppio del primo vettore è $(2, 6)$. Il doppio del secondo è $(8, -2)$.
2. La somma: $(2 + 8,\ 6 - 2) = (10, 4)$.

Stesso risultato. Il motivo si vede guardando un posto solo. Al primo posto, a sinistra c'è $2 \cdot (1 + 4)$ e a destra c'è $2 \cdot 1 + 2 \cdot 4$. Sono uguali per la proprietà distributiva dei numeri.

> [!IDEA]
> Ogni regola delle liste si riduce alla stessa regola dei numeri, una coordinata alla volta.

> [!DIM] · la proprietà 2 per le liste, con le lettere (p. 24)
> Le dispense scrivono lo stesso controllo con le lettere, in una catena di cinque uguaglianze:
> $$\begin{aligned} \lambda(x + y) &= \lambda \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix} = \begin{pmatrix} \lambda(x_1 + y_1) \\ \vdots \\ \lambda(x_n + y_n) \end{pmatrix} \\ &= \begin{pmatrix} \lambda x_1 + \lambda y_1 \\ \vdots \\ \lambda x_n + \lambda y_n \end{pmatrix} = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix} + \begin{pmatrix} \lambda y_1 \\ \vdots \\ \lambda y_n \end{pmatrix} = \lambda x + \lambda y. \end{aligned}$$
>
> Ogni uguaglianza ha il suo motivo.
>
> 1. La definizione della somma: si somma un posto alla volta.
> 2. La definizione del prodotto per scalare: ogni coordinata viene moltiplicata per $\lambda$.
> 3. La proprietà distributiva dei numeri del campo, in ognuna delle $n$ coordinate.
> 4. La definizione della somma, letta da destra a sinistra.
> 5. La definizione del prodotto per scalare, letta da destra a sinistra.
>
> Le altre proprietà si controllano con lo stesso metodo: sono nell'esercizio 9.

> [!TRAPPOLA] Con le liste di numeri complessi anche gli scalari sono complessi
> In $\C^2$ puoi moltiplicare un vettore per $i$. Per esempio $i \cdot (1, 0) = (i, 0)$. Con le liste di numeri reali non puoi farlo senza uscire dall'insieme: la lista $(i, 0)$ non è fatta di numeri reali. Per questo $\R^2$ è uno spazio vettoriale su $\R$, ma **non** su $\C$.

::: prova Calcola in $\C^2$ la somma $(1 + i,\ 2) + (3,\ i)$.
Un posto alla volta. Primo posto: $(1 + i) + 3 = 4 + i$. Secondo posto: $2 + i$. Risultato: $(4 + i,\ 2 + i)$.
:::

::: prova Calcola in $\C^2$ il multiplo $i \cdot (1,\ i)$.
Primo posto: $i \cdot 1 = i$. Secondo posto: $i \cdot i = i^2 = -1$. Risultato: $(i,\ -1)$.
:::

> [!RICORDA]
> - I numeri da soli formano uno spazio vettoriale: sono liste con una sola coordinata.
> - $\K^n$ è l'insieme delle liste di $n$ numeri del campo $\K$. Somma e multiplo si fanno un posto alla volta.
> - In $\C^n$ le coordinate e gli scalari sono numeri complessi: nei conti ricorda che $i^2 = -1$.
> - Le regole valgono perché valgono per i numeri, una coordinata alla volta.

## Successioni, funzioni e polinomi come vettori (pp. 24–25)

Gli ultimi tre esempi delle dispense non sono liste finite di numeri.

In tutti e tre il modo di fare i conti è lo stesso: si somma e si moltiplica **un pezzo alla volta**.

### Liste che non finiscono: le successioni

Una **successione** è una lista di numeri che non finisce mai (lezione L01). Per esempio $(1, 2, 3, 4, \dots)$. È come un vettore con infinite coordinate.

Si somma e si moltiplica come con le liste finite: un posto alla volta.

> [!ESEMPIO] · due successioni reali
> Prendiamo due successioni. La prima è $x = (1, 2, 3, 4, \dots)$: i numeri in fila. La seconda è $y = (1, 1, 1, 1, \dots)$: sempre 1.
>
> - **Somma.** Un posto alla volta: $x + y = (1 + 1,\ 2 + 1,\ 3 + 1,\ 4 + 1,\ \dots) = (2, 3, 4, 5, \dots)$.
> - **Multiplo.** Ogni termine per 3: $3x = (3, 6, 9, 12, \dots)$.
> - **Differenza.** Un posto alla volta: $x - y = (1 - 1,\ 2 - 1,\ 3 - 1,\ 4 - 1,\ \dots) = (0, 1, 2, 3, \dots)$.
>
> Il vettore nullo è la successione di soli zeri, $(0, 0, 0, \dots)$. L'opposto di $x$ è $(-1, -2, -3, \dots)$.

Per indicare una successione qualsiasi le dispense usano questa scrittura:

$$(x_n)_{n \in \N} = (x_0, x_1, x_2, \dots)$$

Si legge «la successione degli ics enne, con enne nei naturali». Il termine $x_0$ è il primo, $x_1$ è il secondo. L'indice comincia da 0 perché i numeri naturali cominciano da 0. Ogni termine è un numero del campo.

Le due operazioni, scritte con le lettere:

$$(x_n)_{n \in \N} + (y_n)_{n \in \N} = (x_n + y_n)_{n \in \N}, \qquad \lambda (x_n)_{n \in \N} = (\lambda x_n)_{n \in \N}.$$

A parole: in ogni posto, il termine della somma è la somma dei due termini di quel posto. E il termine del multiplo è lo scalare per il termine di quel posto. Le dispense dicono che con queste operazioni le successioni formano uno spazio vettoriale.

### Un numero per ogni punto: le funzioni

> [!RIPASSO] che cos'è una funzione
> Una **funzione** è una regola: per ogni numero che entra dice quale numero esce. Di solito si chiama $f$. La scrittura $f(x)$ si legge «effe di ics» ed è il numero che esce quando entra $x$.
>
> Per esempio la regola «eleva al quadrato» si scrive $f(x) = x^2$. Se entra 3, esce $f(3) = 3^2 = 9$. Se entra $\frac 12$, esce $\frac 12 \cdot \frac 12 = \frac 14$.
>
> Bisogna dire anche quali numeri possono entrare. Qui sono quelli dell'intervallo $[0, 1]$: tutti i numeri reali tra 0 e 1, compresi lo 0 e l'1 (lezione L01).

Le dispense scrivono $f : [0, 1] \to \K$. Si legge «effe, da zero-uno a cappa». Vuol dire: entrano i numeri tra 0 e 1, escono numeri del campo.

Come si sommano due funzioni? In una successione c'è un numero per ogni posto. In una funzione c'è un numero per ogni punto dell'intervallo. L'idea è la stessa: si somma **punto per punto**. Per ogni numero che entra, si sommano i due numeri che escono.

> [!ESEMPIO] · somma di due funzioni, punto per punto
> Prendiamo $f(x) = x^2$ e $g(x) = 1 - x$. Calcoliamo la somma $f + g$ e il multiplo $3f$ in quattro punti.
>
> | Entra $x$ | $0$ | $\frac 14$ | $\frac 12$ | $1$ |
> |---|---|---|---|---|
> | esce da $f$ | $0$ | $\frac 1{16}$ | $\frac 14$ | $1$ |
> | esce da $g$ | $1$ | $\frac 34$ | $\frac 12$ | $0$ |
> | esce da $f + g$ | $1$ | $\frac{13}{16}$ | $\frac 34$ | $1$ |
> | esce da $3f$ | $0$ | $\frac 3{16}$ | $\frac 34$ | $3$ |
>
> Il conto della colonna di $\frac 14$, per intero. Da $f$ esce $\frac 14 \cdot \frac 14 = \frac 1{16}$. Da $g$ esce $1 - \frac 14 = \frac 34$, cioè $\frac{12}{16}$. La somma è $\frac 1{16} + \frac{12}{16} = \frac{13}{16}$. Il triplo di $\frac 1{16}$ è $\frac 3{16}$.
>
> Ogni colonna si somma come una coordinata di una lista. Con le formule: la somma è la funzione $x^2 + (1 - x) = x^2 - x + 1$, e il multiplo è la funzione $3x^2$.

Le dispense lo scrivono così.

> [!DEF] Somma e multiplo di funzioni (p. 24)
> Per due funzioni $f, g : [0, 1] \to \K$ e uno scalare $\lambda$ definiamo le funzioni
> $$(f + g)(x) = f(x) + g(x), \qquad (\lambda f)(x) = \lambda f(x), \qquad \forall x \in [0, 1].$$

**Come si legge.**

- $f + g$ è una funzione nuova. La scrittura $(f + g)(x)$ indica il numero che esce da questa funzione quando entra $x$.
- La prima uguaglianza dice come si calcola: fai uscire un numero da $f$, uno da $g$, e li sommi.
- $\lambda f$ è un'altra funzione nuova. La seconda uguaglianza dice che in ogni punto vale lo scalare per il numero che esce da $f$.
- Il simbolo $\forall$ si legge «per ogni». L'ultimo pezzo dice che le due regole valgono per ogni numero dell'intervallo.

Il vettore nullo di questo spazio è la **funzione nulla**: quella che fa uscire 0 qualunque numero entri. L'opposto di una funzione fa uscire, in ogni punto, lo stesso numero con il segno cambiato.

### I polinomi

I polinomi li hai già incontrati nella sezione sulla definizione. L'insieme di tutti i polinomi con i coefficienti presi dal campo $\K$ si scrive $\K[x]$ e si legge «cappa di ics». Con i coefficienti reali si scrive $\R[x]$.

> [!ESEMPIO] · i conti delle dispense
> **Somma.** Vogliamo sommare $x^3 - 2x + 1$ e $4x^4 + x - 3$. Si mettono insieme i pezzi con la stessa potenza.
>
> - Potenza 4: c'è solo $4x^4$.
> - Potenza 3: c'è solo $x^3$.
> - Potenza 1: $-2x + x = (-2 + 1)x = -x$.
> - Numeri senza la $x$: $1 - 3 = -2$.
>
> Il risultato:
> $$(x^3 - 2x + 1) + (4x^4 + x - 3) = 4x^4 + x^3 - x - 2.$$
>
> **Multiplo.** Si moltiplica ogni coefficiente per lo scalare:
> $$3(x^3 - 2x) = 3 \cdot x^3 - 3 \cdot 2x = 3x^3 - 6x.$$

Se scrivi i coefficienti in una tabella, una colonna per ogni potenza, la somma dei due polinomi diventa una somma di liste.

| | $x^4$ | $x^3$ | $x^2$ | $x$ | senza $x$ |
|---|---:|---:|---:|---:|---:|
| $x^3 - 2x + 1$ | $0$ | $1$ | $0$ | $-2$ | $1$ |
| $4x^4 + x - 3$ | $4$ | $0$ | $0$ | $1$ | $-3$ |
| somma | $4$ | $1$ | $0$ | $-1$ | $-2$ |

Dove una potenza manca, il coefficiente è 0. L'ultima riga si legge $4x^4 + x^3 - x - 2$: lo stesso risultato di prima.

Il vettore nullo è il **polinomio nullo**, quello con tutti i coefficienti uguali a 0. L'opposto di un polinomio si ottiene cambiando il segno a tutti i coefficienti.

> [!TRAPPOLA] Il prodotto tra polinomi non c'entra
> Due polinomi si possono anche moltiplicare tra loro. Ma questa operazione **non** fa parte dello spazio vettoriale: qui contano solo la somma e il prodotto per uno scalare.

### Polinomi con il grado limitato

Spesso non servono tutti i polinomi, ma solo quelli che non superano un certo grado. L'insieme dei polinomi di grado **al massimo** $k$ si scrive $\K_k[x]$. Per esempio $\R_2[x]$ contiene i polinomi reali di grado al massimo 2:

$$\R_2[x] = \{ax^2 + bx + c \mid a, b, c \in \R\}$$

Si legge: «i polinomi $ax^2 + bx + c$, dove $a$, $b$ e $c$ sono numeri reali». La barretta verticale si legge «dove». Dentro ci sono anche i polinomi di grado più basso, come $3x + 1$, e il polinomio nullo: basta prendere qualche coefficiente uguale a 0.

Questo insieme è uno spazio vettoriale: è l'Esercizio 5.7 delle dispense, qui esercizio 10. Sommando due polinomi di grado al massimo 2 il grado non sale. Moltiplicando per uno scalare nemmeno.

> [!TRAPPOLA] Grado al massimo $k$ sì, grado esattamente $k$ no
> I polinomi di grado **esattamente** 2 non formano uno spazio vettoriale. Prendi $x^2$ e $-x^2 + x$: hanno tutti e due grado 2. La loro somma è $x$, che ha grado 1: è uscita dall'insieme. Inoltre il polinomio nullo non ha grado 2, quindi manca il vettore nullo.

### Tutti gli esempi in una tabella

| Spazio | Un vettore è | Somma e multiplo si fanno | Vettore nullo |
|---|---|---|---|
| $\K$ | un numero | come tra i numeri | $0$ |
| $\K^n$ | una lista di $n$ numeri | una coordinata alla volta | $(0, \dots, 0)$ |
| successioni | una lista infinita | un termine alla volta | $(0, 0, 0, \dots)$ |
| funzioni $[0, 1] \to \K$ | una funzione | un punto alla volta | la funzione nulla |
| $\K[x]$ | un polinomio | un coefficiente alla volta | il polinomio nullo |

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli:
>
> - gruppi, anelli e campi sono nel **§1.5 «Strutture algebriche»** (pp. 34–36);
> - lo spazio euclideo, la somma e il prodotto per scalare sono nel **§2.1** (pp. 43–46);
> - la definizione di spazio vettoriale, la Proposizione 2.2.1 ($0v = 0$) e gli esempi (liste, polinomi, funzioni) sono nei **§2.2.1–2.2.4** (pp. 46–49);
> - le matrici (§2.2.5) sono nella lezione L06.

::: prova Scrivi i primi quattro termini della somma delle successioni $(1, 2, 3, 4, \dots)$ e $(10, 10, 10, 10, \dots)$.
Un posto alla volta: $(11, 12, 13, 14, \dots)$.
:::

::: prova Con $f(x) = 2x$ e $g(x) = x^2$, quanto vale $(f + g)(1)$? E $(5g)(1)$?
Quando entra 1, da $f$ esce $2 \cdot 1 = 2$ e da $g$ esce $1^2 = 1$. Quindi $(f + g)(1) = 2 + 1 = 3$.

Poi $(5g)(1) = 5 \cdot 1 = 5$.
:::

::: prova Quanto fa $(x^2 + 3x) + (2x^2 - x + 1)$?
Potenza 2: $1 + 2 = 3$. Potenza 1: $3 - 1 = 2$. Senza la $x$: $0 + 1 = 1$. Risultato: $3x^2 + 2x + 1$.
:::

> [!RICORDA]
> - Successioni, funzioni e polinomi si sommano e si moltiplicano per uno scalare un pezzo alla volta: termine per termine, punto per punto, coefficiente per coefficiente.
> - Il vettore nullo è, nei tre casi: la successione di soli zeri, la funzione che vale sempre 0, il polinomio nullo.
> - I polinomi di grado **al massimo** $k$ formano uno spazio vettoriale. Quelli di grado **esattamente** $k$ no.

## Come si vede che non è uno spazio vettoriale (oltre le dispense)

All'esame la domanda tipica è: «quale di questi insiemi è uno spazio vettoriale?».

Di solito l'insieme è un pezzo di uno spazio già noto: alcune liste, alcuni polinomi, alcune funzioni. Le operazioni sono quelle solite. In questo caso le otto regole non vanno ricontrollate: valgono per tutti i vettori dello spazio grande, quindi anche per quelli del pezzo.

Resta una sola cosa da controllare: che facendo somme e multipli **non si esca** dal pezzo. Può andare storto in tre modi.

### Primo modo: manca il vettore nullo

Prendi le liste di due numeri la cui somma fa 1, come $(1, 0)$, $(0, 1)$ e $(3, -2)$. Sulla mappa formano una retta.

Negli appelli un insieme così è scritto con le graffe e con una condizione:

$$\{(x, y) \in \R^2 \mid x + y = 1\}$$

Si legge: «le liste $(x, y)$ di $\R^2$ tali che $x + y$ fa 1». La barretta verticale si legge «tali che»: a sinistra dice dove si cercano gli elementi, a destra la condizione che devono rispettare.

Il vettore nullo non sta in questo insieme: i suoi due numeri sommati fanno 0, non 1. E senza vettore nullo non c'è uno spazio vettoriale.

```grafico
titolo: Due rette: quella che passa per l'origine è uno spazio vettoriale, l'altra no
x: -3 3
y: -3 3
retta: 0 0 2 -2 | accento | spesso | $x + y = 0$ | so
retta: 0 1 -1.5 2.5 | rosa | tratteggio | $x + y = 1$ | ne
punto: 0 0 | accento
punto: 1 0 | rosa
punto: 0 1 | rosa
punto: 1 1 | ambra | $(1, 1)$ | ne
```

Guarda la figura. La retta tratteggiata è l'insieme appena visto: non passa per l'origine. La retta continua è fatta delle liste in cui la somma dei due numeri fa 0: passa per l'origine.

### Secondo modo: una somma esce

Resta sulla retta tratteggiata e somma due suoi elementi:

$$(1, 0) + (0, 1) = (1, 1)$$

Nel risultato i due numeri sommati fanno 2, non 1. La somma è uscita dall'insieme. Nella figura è il pallino fuori dalla retta tratteggiata.

Succede lo stesso con i polinomi di grado esattamente 2, visti nella sezione precedente.

### Terzo modo: un multiplo esce

Prendi le liste di due numeri in cui il primo numero non è negativo, come $(1, 0)$ e $(2, 5)$. Sulla mappa è la metà di destra.

Qui il vettore nullo c'è. E la somma di due elementi resta dentro: due numeri non negativi sommati danno un numero non negativo. Ma moltiplica per $-1$:

$$-1 \cdot (1, 0) = (-1, 0)$$

Il primo numero è diventato negativo: il multiplo è uscito dall'insieme.

### Quando la risposta è sì

Prendi le liste in cui la somma dei due numeri fa 0, come $(1, -1)$ e $(2, -2)$. È la retta continua della figura.

- Il vettore nullo c'è: $0 + 0 = 0$.
- Una somma: $(1, -1) + (2, -2) = (3, -3)$. È rimasta dentro, perché $3 - 3 = 0$.
- Un multiplo: $5 \cdot (1, -1) = (5, -5)$. È rimasto dentro, perché $5 - 5 = 0$.

Gli esempi non bastano per dire sì: serve un motivo che valga per tutti gli elementi. Qui il motivo è questo. In ogni lista dell'insieme il secondo numero è l'opposto del primo. Sommando due liste così, il secondo numero resta l'opposto del primo. Moltiplicandone una per uno scalare, anche.

Quindi questo insieme è uno spazio vettoriale. Nella lezione L06 un insieme così si chiamerà **sottospazio**.

> [!IDEA]
> Per dire **no** basta un solo esempio che esce dall'insieme. Per dire **sì** serve un ragionamento che valga per tutti i vettori e per tutti gli scalari.

::: prova Le liste di due numeri con il secondo numero uguale a 1, come $(0, 1)$ e $(4, 1)$, formano uno spazio vettoriale?
No. Il vettore nullo $(0, 0)$ ha il secondo numero uguale a 0, non a 1: non sta nell'insieme.
:::

::: prova Le liste in cui il secondo numero è il doppio del primo, come $(1, 2)$ e $(-3, -6)$, formano uno spazio vettoriale?
Sì. Il vettore nullo c'è, perché 0 è il doppio di 0. Sommando due liste così il secondo numero resta il doppio del primo: per esempio $(1, 2) + (-3, -6) = (-2, -4)$. Lo stesso succede con i multipli: per esempio $3 \cdot (1, 2) = (3, 6)$.

Sono i multipli del vettore $(1, 2)$: la retta della figura nella sezione sui multipli.
:::

::: prova I polinomi che in 0 valgono 1, come $x + 1$ e $x^2 + 1$, formano uno spazio vettoriale?
No. Il polinomio nullo in 0 vale 0, non 1: manca il vettore nullo. Anche la somma esce: $(x + 1) + (x^2 + 1) = x^2 + x + 2$, che in 0 vale 2.
:::

> [!RICORDA]
> - Per un pezzo di uno spazio noto, con le operazioni solite, bastano tre controlli: c'è il vettore nullo? Le somme restano dentro? I multipli restano dentro?
> - Se uno dei tre controlli fallisce, non è uno spazio vettoriale. Basta un esempio.
> - Una retta che passa per l'origine supera i tre controlli. Una retta che non passa per l'origine no.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $(3, 2)$ | «tre, due» | un vettore: una lista ordinata di numeri | 3 a destra e 2 in su |
| $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$ | «tre, due», in colonna | lo stesso vettore scritto in verticale | |
| ${}^t(1, 2, 3)$ | «trasposto di uno, due, tre» | la riga messa in verticale: scrittura degli appelli | |
| $\R^n$ | «erre enne» | l'insieme delle liste di $n$ numeri reali | $(3, 2) \in \R^2$ |
| $\in$, $\notin$ | «appartiene a», «non appartiene a» | sta dentro l'insieme, non sta dentro l'insieme | $(3, 2) \notin \R^3$ |
| $\subset$ | «è contenuto in» | tutti gli elementi del primo insieme stanno nel secondo | $\R \subset \C$ |
| $\ge$ | «maggiore o uguale» | confronto tra due numeri, con l'uguale permesso | $n \ge 1$ |
| $x_1$, $x_n$ | «ics uno», «ics enne» | la prima e l'ultima coordinata del vettore $x$ | se $x = (3, 2)$, allora $x_1 = 3$ |
| $\times$ | «per» | prodotto cartesiano: le coppie ordinate | $\R \times \R = \R^2$ |
| $\lambda$, $\mu$ | «lambda», «mi» | due scalari, cioè due numeri | $\lambda = 2$ |
| $\lambda v$ | «lambda per vu» | il multiplo: ogni coordinata per lo scalare | $2(1, 2) = (2, 4)$ |
| $-v$ | «meno vu» | l'opposto: il multiplo con lo scalare $-1$ | $-(1, 2) = (-1, -2)$ |
| $\mapsto$ | «va in» | a questo elemento corrisponde quest'altro | $x \mapsto 2x$ |
| $\lvert \lambda \rvert$ | «valore assoluto di lambda» | il numero senza il segno meno | $\lvert -2 \rvert = 2$ |
| $a * b$ | «a asterisco b» | il risultato di un'operazione qualsiasi | $2 + 3$ oppure $2 \cdot 3$ |
| $e$, $a'$ | «e», «a primo» | in un gruppo: l'elemento neutro e l'inverso di $a$ | con la somma: $0$ e $-a$ |
| $a^{-1}$ | «a alla meno uno» | l'inverso per il prodotto | $7^{-1} = \frac 17$ |
| $\setminus$ | «senza» | il primo insieme, tolti gli elementi del secondo | $\Q \setminus \{0\}$ |
| $\forall$, $\exists$ | «per ogni», «esiste» | vale per tutti gli elementi; ce n'è almeno uno | $\forall a \in G$ |
| $\K$ | «cappa» | un campo qualsiasi: nel corso $\R$ oppure $\C$ | |
| $0_A$, $1_A$ | «zero di A», «uno di A» | gli elementi neutri di somma e prodotto in un campo | $0$ e $1$ |
| $0_V$ | «zero di vu» | il vettore nullo dello spazio vettoriale $V$ | $(0, 0)$ in $\R^2$ |
| $\K^n$, $\C^n$ | «cappa enne», «ci enne» | le liste di $n$ numeri del campo | $(i, 0) \in \C^2$ |
| $(x_n)_{n \in \N}$ | «la successione degli ics enne» | una lista infinita $x_0, x_1, x_2, \dots$ | $(1, 2, 3, \dots)$ |
| $f : [0, 1] \to \K$ | «effe, da zero-uno a cappa» | una funzione: entra un numero tra 0 e 1, esce un numero del campo | $f(x) = x^2$ |
| $\K[x]$, $\K_k[x]$ | «cappa di ics» | tutti i polinomi; quelli di grado al massimo $k$ | $3x + 1$ sta in $\R_2[x]$ |
| $\mid$ | «tali che» | introduce la condizione da rispettare | $\{(x, y) \in \R^2 \mid x + y = 0\}$ |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla, ognuna con 5 risposte. Servono almeno 6 risposte giuste per far correggere i 2 problemi, che valgono 11 punti l'uno. La prova dura 2 ore, senza calcolatrice. Si possono portare solo 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa viene chiesto di questa lezione**

1. **Riconoscere uno spazio vettoriale.** Nel quiz compaiono domande di teoria con cinque risposte, ognuna con la sua motivazione. Un esempio è la domanda 2 dell'appello del 07/02/2025, che leggiamo insieme qui sotto.
2. **Scartare la risposta «non è uno spazio vettoriale».** Nelle domande sulla dimensione (lezione L07) c'è spesso una risposta trappola di questo tipo. Tre esempi veri sono nell'elenco qui sotto.
3. **Sottospazi.** La domanda più frequente di questa parte è «quale di questi insiemi è (o non è) un sottospazio?». Compare negli appelli dell'08/02/2024 (domanda 2), del 03/06/2025 (domanda 2), del 05/02/2026 (domanda 2) e del 07/09/2026 (domanda 6). Si risolve con i tre controlli di questa lezione e con la definizione di sottospazio della lezione L06.
4. **Conti un posto alla volta.** Somme e multipli di liste, anche con i numeri complessi, e di polinomi. Servono in quasi tutti gli esercizi del corso.

Le tre risposte trappola del punto 2:

- «$T^s(3)$ non ha una dimensione perché non è uno spazio vettoriale» (24/01/2024, domanda 5);
- «$S(3)$ non ha una dimensione perché non è uno spazio vettoriale» (15/01/2026, domanda 4);
- «$X$ non è necessariamente uno spazio vettoriale», dove $X = \Span(v_1, v_2, v_3)$ (15/01/2026, domanda 3).

I simboli di queste tre frasi si spiegano nella lezione L06. I primi due sono insiemi di tabelle di numeri, cioè di matrici: quelle triangolari e quelle simmetriche. Il terzo è l'insieme di tutto ciò che si ottiene sommando multipli di tre vettori. Per ora basta sapere che sono sempre spazi vettoriali. Quindi le tre risposte sono sbagliate.

> [!METODO] · «È uno spazio vettoriale?» in quattro controlli
> 1. **Chi è chi.** Scrivi chi sono i vettori, chi sono gli scalari e quali sono le due operazioni.
> 2. **Si resta dentro?** Prova con elementi concreti. Somma due elementi. Moltiplica un elemento per uno scalare: prova anche con $-1$ e con 0.
> 3. **Il vettore nullo c'è?** Deve stare nell'insieme.
> 4. **Le regole.** Se l'insieme è un pezzo di uno spazio noto, con le stesse operazioni, le otto regole valgono già. Se le operazioni sono insolite, prova ogni regola con numeri piccoli.
>
> Per rispondere **no** basta **un** esempio che non torna. Per rispondere **sì** serve un ragionamento che valga per tutti i vettori e per tutti gli scalari.

**Una domanda vera, letta insieme**

> [!ESAME] Appello del 07/02/2025, domanda 2
> «Identificate la risposta corretta alla domanda “$\C$ ammette una struttura di spazio vettoriale su $\R$?”»
>
> - (a) «No, poiché $\C$ è già uno spazio vettoriale su $\C$ stesso.»
> - (b) «Sì, perché ogni campo è uno spazio vettoriale su $\R$.»
> - (c) «No, ma poiché $\C$ contiene $\R$, $\R$ è uno spazio vettoriale su $\C$.»
> - (d) «No, in quanto $\C$ e $\R$ sono campi diversi.»
> - (e) «Sì, $\R$ è sottoinsieme di $\C$ e le operazioni $+$, $\cdot$ su $\R$ sono le stesse che in $\C$.»

**In pratica chiede:** i numeri complessi sono uno spazio vettoriale, se come scalari si usano solo i numeri reali? «Ammette una struttura di» vuol dire «si può vedere come».

Primo controllo del metodo: chi è chi.

- I vettori sono i numeri complessi, come $2 + 3i$.
- Gli scalari sono i numeri reali, come 5.
- La somma è quella solita tra numeri complessi.
- Il prodotto per scalare è il prodotto solito tra un numero reale e un numero complesso.

Poi gli altri controlli.

1. **Le somme restano dentro?** Sì: la somma di due numeri complessi è un numero complesso. Per esempio $(2 + 3i) + (1 - i) = 3 + 2i$.
2. **I multipli restano dentro?** Sì: un numero reale per un numero complesso è un numero complesso. Per esempio $5 \cdot (2 + 3i) = 10 + 15i$.
3. **Il vettore nullo c'è?** Sì: è il numero complesso 0.
4. **Le otto regole valgono?** Sì. Sono regole dei conti tra numeri complessi, usate nel caso in cui uno dei due numeri è reale.

Quindi la risposta è sì. Restano la (b) e la (e): per scegliere bisogna guardare la motivazione.

- La (e) dà il motivo giusto. «$\R$ è sottoinsieme di $\C$» vuol dire che ogni numero reale è anche un numero complesso. Con i simboli della lezione L01 si scrive $\R \subset \C$, che si legge «erre è contenuto in ci». Per questo le operazioni dei complessi funzionano anche quando uno dei numeri è reale.
- La (b) dice sì, ma con un motivo falso. Non ogni campo è uno spazio vettoriale sui reali. Le frazioni, per esempio, no: $\sqrt 2 \cdot 1 = \sqrt 2$ non è una frazione, quindi un multiplo esce.
- La (a) e la (d) dicono cose vere, che però non impediscono niente. Lo stesso insieme può essere uno spazio vettoriale su due campi diversi.
- La (c) è falsa. I reali non sono uno spazio vettoriale sui complessi: $i \cdot 1 = i$ non è un numero reale.

La risposta giusta è la **(e)**. La soluzione ufficiale dice lo stesso: (a) e (d) sono affermazioni vere che non rispondono alla domanda, (b) e (c) danno motivazioni false.

> [!TRAPPOLA] Gli errori più comuni
> - Confondere il numero zero con il vettore nullo.
> - Dimenticare di controllare che somme e multipli restino nell'insieme.
> - Credere che «grado esattamente $k$» vada bene come «grado al massimo $k$».
> - Nei conti con i numeri complessi, dimenticare che $i^2 = -1$.
> - Dire «è uno spazio vettoriale» senza dire **su quale campo**. I numeri complessi lo sono su $\R$ e su $\C$. Le liste di due numeri reali lo sono su $\R$, ma non su $\C$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione conviene copiare:
>
> - le cinque proprietà della definizione, con le quattro regole contenute nella prima;
> - le due righe $0v = 0_V$ e $(-1)v = -v$;
> - la tabella dei cinque esempi, ognuno con il suo vettore nullo;
> - i tre modi di uscire da un insieme: manca il vettore nullo, una somma esce, un multiplo esce.

## Quiz

```quiz
D: Con la somma e il prodotto per scalare usuali (coordinata per coordinata), $\R^2$ è uno spazio vettoriale sul campo $\C$?
- Sì, perché $\R \subset \C$.
+ No: per esempio $i \cdot (1, 0) = (i, 0)$ non sta in $\R^2$.
- Sì, perché ogni spazio vettoriale su $\R$ lo è anche su $\C$.
- No, perché $\R^2$ con la somma non è un gruppo commutativo.
- No, perché $\C$ non è un campo.
= Un prodotto per scalare non deve far uscire dall'insieme. Provo con lo scalare $i$ e il vettore $(1, 0)$: viene $(i \cdot 1,\ i \cdot 0) = (i, 0)$. La prima coordinata non è un numero reale: il multiplo è uscito da $\R^2$. La risposta «Sì, perché $\R \subset \C$» è la più tentatrice, ma ragiona al contrario: va bene quando gli scalari sono una parte dei numeri usati per le coordinate, come per $\C$ su $\R$ (Esercizio 5.8). Simile all'appello del 07/02/2025, domanda 2.

D: $\R$, con la somma usuale e il prodotto per numeri razionali, è uno spazio vettoriale su $\Q$?
+ Sì: un razionale per un reale è un reale, e gli assiomi seguono dalle proprietà del campo $\R$.
- No, perché $\sqrt 2 \notin \Q$.
- No: semmai è $\Q$ a essere uno spazio vettoriale su $\R$.
- Sì, ma solo se ci si limita ai numeri razionali.
- No, perché $\R$ e $\Q$ sono campi diversi.
= Qui i vettori sono i numeri reali e gli scalari sono le frazioni. Una frazione per un numero reale è ancora un numero reale: i multipli restano dentro. Le regole valgono perché sono regole dei conti tra numeri reali. La risposta «No, perché $\sqrt 2 \notin \Q$» è la più tentatrice: dice una cosa vera che non c'entra, perché qui $\sqrt 2$ è un vettore e non uno scalare. È falso invece il contrario: $\Q$ non è uno spazio vettoriale su $\R$, perché $\sqrt 2 \cdot 1$ non è una frazione. Simile all'appello del 07/02/2025, domanda 2.

D: Quale di questi, con l'operazione indicata, è un gruppo commutativo?
- $(\N, +)$
- $(\Z, \cdot)$
+ $(\Q \setminus \{0\}, \cdot)$
- $(\R, \cdot)$
- $(\Z \setminus \{0\}, \cdot)$
= Tra le frazioni diverse da zero, cioè in $\Q \setminus \{0\}$, il prodotto non fa uscire, l'elemento neutro è $1$ e l'inverso di $\frac 23$ è $\frac 32$. Gli altri falliscono sull'inverso. In $(\N, +)$ manca l'opposto di $1$. In $(\Z, \cdot)$ e in $(\Z \setminus \{0\}, \cdot)$ manca l'inverso di $2$. La risposta più tentatrice è $(\R, \cdot)$: dentro c'è lo $0$, che non ha inverso.

D: Quale di questi insiemi, con le operazioni indicate, è un campo?
- $\Z$, con somma e prodotto usuali.
- $\N$, con somma e prodotto usuali.
+ $\{0, 1\}$, con $1 + 1 = 0$ e le altre somme e i prodotti come negli interi.
- $\R \setminus \{0\}$, con somma e prodotto usuali.
- $\{0, 1, 2, 3\}$, con somma e prodotto dei resti nella divisione per $4$.
= L'insieme $\{0, 1\}$ con $1 + 1 = 0$ è il campo dell'Esercizio 5.9: sono le regole dei numeri pari e dispari. In $\Z$ il numero $2$ non ha inverso. In $\N$ manca l'opposto di $1$. In $\R \setminus \{0\}$ la somma esce: $1 + (-1) = 0$. La risposta con i resti della divisione per $4$ è la più tentatrice, perché assomiglia a quella giusta. Ma lì $2$ non ha inverso: $2 \cdot 1 = 2$, poi $2 \cdot 2 = 4$ ha resto $0$, poi $2 \cdot 3 = 6$ ha resto $2$.

D: In $\C^2$, quanto vale $(1 + i)\begin{pmatrix} 2 \\ i \end{pmatrix}$?
+ $\begin{pmatrix} 2 + 2i \\ -1 + i \end{pmatrix}$
- $\begin{pmatrix} 2 + 2i \\ 1 + i \end{pmatrix}$
- $\begin{pmatrix} 2 + 2i \\ i \end{pmatrix}$
- $\begin{pmatrix} 3 + i \\ 1 + 2i \end{pmatrix}$
- $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$
= Lo scalare moltiplica tutte e due le coordinate. Prima coordinata: $(1 + i) \cdot 2 = 2 + 2i$. Seconda coordinata: $(1 + i) \cdot i = i + i^2 = i - 1$, perché $i^2 = -1$. La risposta con $1 + i$ al secondo posto è la più tentatrice: nasce dallo scrivere $i^2 = 1$. Quella con $3 + i$ al primo posto somma lo scalare invece di moltiplicare.

D: In $\R^3$, quanto vale $2\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} - 3\begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$?
+ $(2, -3, -8)$
- $(2, -3, 4)$
- $(2, 3, -8)$
- $(2, -1, -4)$
- $(2, -3, -7)$
= Primo multiplo: $2 \cdot (1, 0, -1) = (2, 0, -2)$. Secondo multiplo: $3 \cdot (0, 1, 2) = (0, 3, 6)$. Differenza, un posto alla volta: $(2 - 0,\ 0 - 3,\ -2 - 6) = (2, -3, -8)$. La risposta $(2, -3, 4)$ è la più tentatrice: nasce dal fare $-2 + 6$ all'ultimo posto. Il segno meno vale per tutte le coordinate del secondo vettore.

D: Con la somma e il prodotto per scalare usuali, quale di questi insiemi di polinomi a coefficienti reali è uno spazio vettoriale su $\R$?
- I polinomi di grado esattamente $2$.
- I polinomi $p(x)$ con $p(0) = 1$.
+ I polinomi di grado minore o uguale a $2$, cioè $\R_2[x]$.
- I polinomi con tutti i coefficienti maggiori o uguali a $0$.
- I polinomi della forma $x^2 + bx + c$, con $b, c \in \R$.
= In $\R_2[x]$ il grado non supera mai 2, né sommando né moltiplicando per uno scalare, e il polinomio nullo c'è: è lo spazio dell'Esercizio 5.7. La risposta «grado esattamente 2» è la più tentatrice, ma $x^2$ più $-x^2 + x$ fa $x$, che ha grado 1. La scrittura $p(0) = 1$ vuol dire che il polinomio vale 1 quando al posto di $x$ metti 0: il polinomio nullo lì vale 0. Con i coefficienti non negativi un multiplo esce: $-1 \cdot x = -x$. Con la forma $x^2 + bx + c$ una somma esce: $x^2 + 1$ più se stesso fa $2x^2 + 2$. Simile agli appelli dell'08/02/2024 (domanda 2) e del 07/09/2026 (domanda 6), che chiedono quale insieme di polinomi è (o non è) un sottospazio.

D: Con le operazioni di $\R^2$, quale di questi sottoinsiemi è uno spazio vettoriale su $\R$?
+ $\{(x, y) \in \R^2 \mid x + y = 0\}$
- $\{(x, y) \in \R^2 \mid x + y = 1\}$
- $\{(x, y) \in \R^2 \mid x \ge 0\}$
- $\{(x, y) \in \R^2 \mid xy = 0\}$
- $\{(x, y) \in \R^2 \mid y = x^2\}$
= La barretta verticale si legge «tali che». Sono pezzi di $\R^2$ con le operazioni solite, quindi bastano tre controlli: vettore nullo, somme, multipli. Con $x + y = 0$ il secondo numero è l'opposto del primo, e resta così sommando due liste o moltiplicandone una per uno scalare. Con $x + y = 1$ manca il vettore nullo: è la risposta più tentatrice, perché cambia solo un numero. Con $x \ge 0$ un multiplo esce: $-1 \cdot (1, 0) = (-1, 0)$. Con $xy = 0$ una somma esce: $(1, 0) + (0, 1) = (1, 1)$. Con $y = x^2$ una somma esce: $(1, 1) + (1, 1) = (2, 2)$, ma $2^2$ fa 4. Simile all'appello del 03/06/2025, domanda 2.

D: Le funzioni $f : [0, 1] \to \R$ con $f(0) = 1$, con le operazioni punto per punto, formano uno spazio vettoriale su $\R$?
- Sì, come tutte le funzioni da $[0, 1]$ in $\R$.
+ No: per esempio la funzione nulla non ci sta, e se $f(0) = g(0) = 1$ allora $(f + g)(0) = 2$.
- Sì, perché $1$ è l'elemento neutro del prodotto.
- No, perché le funzioni non sono vettori.
- Sì, ma solo se ci si limita ai polinomi.
= La funzione nulla, che è il vettore nullo, in 0 vale 0 e non 1: non sta nell'insieme. Anche una somma esce: se due funzioni in 0 valgono 1, la loro somma in 0 vale 2. La risposta «Sì, come tutte le funzioni» è la più tentatrice: tutte le funzioni insieme formano uno spazio vettoriale, ma un loro pezzo può non esserlo. È lo stesso motivo dell'appello del 10/07/2024, domanda 2: l'insieme $O(2)$ delle matrici ortogonali non è un sottospazio perché non contiene la matrice nulla.

D: Nel campo $\{0, 1, 2\}$ con somma e prodotto dei resti nella divisione per $3$ (Esercizio 5.10), qual è l'inverso di $2$ rispetto al prodotto?
N: 2
= L'inverso di 2 è l'elemento che moltiplicato per 2 dà 1. Si calcola come negli interi e poi si tiene il resto della divisione per 3. $2 \cdot 1 = 2$. $2 \cdot 2 = 4$, che diviso 3 dà resto 1. Quindi in questo campo $2 \cdot 2 = 1$: l'inverso di 2 è 2 stesso.
```

## Esercizi

::: esercizio base Somme, un posto alla volta
Calcola: (a) $(2, 1) + (1, 3)$; (b) $(1, 0, -2) + (4, 5, 2)$; (c) $(3, -1) + (-3, 1)$.
::: soluzione
Si somma il primo numero con il primo, il secondo con il secondo, e avanti così.

(a) $(2 + 1,\ 1 + 3) = (3, 4)$.

(b) $(1 + 4,\ 0 + 5,\ -2 + 2) = (5, 5, 0)$.

(c) $(3 - 3,\ -1 + 1) = (0, 0)$. Viene il vettore nullo: il secondo vettore è l'opposto del primo.
:::

::: esercizio base Multipli di un vettore
Calcola: (a) $3 \cdot (1, -2)$; (b) $-1 \cdot (2, 0, 5)$; (c) $\frac 12 \cdot (4, 6)$; (d) $0 \cdot (3, 3)$.
::: soluzione
Lo scalare moltiplica ogni coordinata.

(a) $(3 \cdot 1,\ 3 \cdot (-2)) = (3, -6)$.

(b) $(-1 \cdot 2,\ -1 \cdot 0,\ -1 \cdot 5) = (-2, 0, -5)$. È l'opposto del vettore di partenza.

(c) $(\frac 12 \cdot 4,\ \frac 12 \cdot 6) = (2, 3)$. Moltiplicare per $\frac 12$ vuol dire dividere a metà.

(d) $(0 \cdot 3,\ 0 \cdot 3) = (0, 0)$. Il numero zero per un vettore dà il vettore nullo (Proposizione 5.5).
:::

::: esercizio base Polinomi e funzioni, un pezzo alla volta
(a) Somma i polinomi $x^2 + 2x$ e $3x + 1$. (b) Calcola $2 \cdot (x^2 - 1)$. (c) Con $f(x) = x + 1$ e $g(x) = x^2$, quanto vale $(f + g)(1)$?
::: soluzione
(a) Si mettono insieme i pezzi con la stessa potenza.

- Potenza 2: c'è solo $x^2$.
- Potenza 1: $2x + 3x = 5x$.
- Senza la $x$: c'è solo $1$.

Risultato: $x^2 + 5x + 1$.

(b) Lo scalare moltiplica ogni coefficiente: $2 \cdot x^2 - 2 \cdot 1 = 2x^2 - 2$.

(c) Quando entra 1, da $f$ esce $1 + 1 = 2$ e da $g$ esce $1^2 = 1$. La somma è $2 + 1 = 3$.
:::

::: esercizio base Il vettore nullo c'è?
Per ogni insieme di' se contiene il vettore nullo: (a) le liste $(x, y)$ con $y = 3$; (b) le liste $(x, y)$ con $y = 3x$; (c) i polinomi di grado esattamente $1$; (d) le funzioni che in $1$ valgono $0$.
::: soluzione
(a) **No.** Il vettore nullo è $(0, 0)$: il suo secondo numero è 0, non 3.

(b) **Sì.** In $(0, 0)$ il secondo numero è 0, e il triplo del primo è $3 \cdot 0 = 0$. La condizione è rispettata.

(c) **No.** Il vettore nullo è il polinomio nullo, che non ha grado 1.

(d) **Sì.** Il vettore nullo è la funzione nulla, che vale 0 in ogni punto, quindi anche in 1.

Che cosa se ne ricava: (a) e (c) non sono spazi vettoriali. Per (b) e (d) il primo controllo è superato. Restano da controllare le somme e i multipli.
:::

::: esercizio base Conti in $\R^3$, in $\C^2$ e tra polinomi
Calcola:
(a) $2u - 3v$ con $u = (1, 0, -1)$ e $v = (2, -1, 1)$ in $\R^3$;
(b) $iz + w$ con $z = (1 + i, 2)$ e $w = (3, -i)$ in $\C^2$;
(c) $2p - q$ con $p(x) = x^3 - x + 2$ e $q(x) = 2x^3 + x^2 - 4$;
(d) il vettore $x \in \R^3$ per cui $x + (1, 2, 3) = (4, 0, 3)$.
::: soluzione
(a) Prima i due multipli, poi la differenza.

1. $2u = (2 \cdot 1,\ 2 \cdot 0,\ 2 \cdot (-1)) = (2, 0, -2)$.
2. $3v = (3 \cdot 2,\ 3 \cdot (-1),\ 3 \cdot 1) = (6, -3, 3)$.
3. $2u - 3v = (2 - 6,\ 0 - (-3),\ -2 - 3) = (-4, 3, -5)$.

Al secondo posto si toglie un numero negativo: $0 - (-3) = 0 + 3 = 3$.

(b) Prima il multiplo con lo scalare $i$, poi la somma.

1. Primo posto di $iz$: $i \cdot (1 + i) = i + i^2 = i - 1$, cioè $-1 + i$.
2. Secondo posto di $iz$: $i \cdot 2 = 2i$.
3. Quindi $iz = (-1 + i,\ 2i)$.
4. Somma con $w$, primo posto: $(-1 + i) + 3 = 2 + i$.
5. Somma con $w$, secondo posto: $2i + (-i) = i$.

Risultato: $iz + w = (2 + i,\ i)$.

(c) Prima il doppio di $p$, poi la differenza, una potenza alla volta.

1. $2p(x) = 2x^3 - 2x + 4$.
2. Potenza 3: $2 - 2 = 0$. Il pezzo con $x^3$ sparisce.
3. Potenza 2: in $2p$ non c'è, quindi $0 - 1 = -1$. Viene $-x^2$.
4. Potenza 1: in $q$ non c'è, quindi $-2 - 0 = -2$. Viene $-2x$.
5. Senza la $x$: $4 - (-4) = 4 + 4 = 8$.

Risultato: $2p(x) - q(x) = -x^2 - 2x + 8$.

(d) Bisogna togliere $(1, 2, 3)$ da tutti e due i lati, cioè sommare il suo opposto.

1. A sinistra resta $x$.
2. A destra: $(4, 0, 3) - (1, 2, 3) = (4 - 1,\ 0 - 2,\ 3 - 3) = (3, -2, 0)$.

Quindi $x = (3, -2, 0)$.

Controllo: $(3, -2, 0) + (1, 2, 3) = (3 + 1,\ -2 + 2,\ 0 + 3) = (4, 0, 3)$.
:::

::: esercizio base Gruppo o no?
Per ciascun caso di' se è un gruppo. Se lo è, indica l'elemento neutro e l'inverso di un elemento; se non lo è, indica che cosa fallisce, con un esempio.
(a) I numeri pari $\{\dots, -2, 0, 2, 4, \dots\}$ con la somma.
(b) I numeri dispari con la somma.
(c) $\Z$ con la sottrazione, $a * b = a - b$.
(d) $\{1, -1\}$ con il prodotto.
(e) I numeri reali positivi con il prodotto.
::: soluzione
Per ogni caso si controlla: si resta dentro? C'è l'elemento neutro? Le parentesi si spostano? Ogni elemento ha l'inverso?

(a) **Sì**, ed è commutativo. La somma di due numeri pari è pari: per esempio $2 + 4 = 6$. L'elemento neutro è 0, che è pari. L'inverso di 4 è $-4$, che è pari. La proprietà associativa vale perché vale per tutti gli interi.

(b) **No.** Si esce dall'insieme: $1 + 3 = 4$, che non è dispari. Manca anche l'elemento neutro, perché lo 0 è pari.

(c) **No.** La sottrazione non è associativa.

- A sinistra: $(5 - 3) - 1 = 2 - 1 = 1$.
- A destra: $5 - (3 - 1) = 5 - 2 = 3$.

I due risultati sono diversi. Manca anche l'elemento neutro. Lo 0 funziona solo se sta a destra: $5 - 0 = 5$, ma $0 - 5 = -5$.

(d) **Sì**, ed è commutativo. I prodotti possibili sono tre: $1 \cdot 1 = 1$, poi $1 \cdot (-1) = -1$, poi $(-1) \cdot (-1) = 1$. Non si esce mai. L'elemento neutro è 1. L'inverso di $-1$ è $-1$ stesso.

(e) **Sì**, ed è commutativo. Il prodotto di due numeri positivi è positivo. L'elemento neutro è 1. L'inverso di 5 è $\frac 15$, che è ancora positivo.
:::

::: esercizio base Esercizio 5.8 delle dispense: $\C$ è uno spazio vettoriale su $\R$
Nel primo esempio $\C$ è uno spazio vettoriale sul campo $\C$. Dimostra che è anche uno spazio vettoriale su $\R$.
::: soluzione
**Chi è chi.**

- I vettori sono i numeri complessi. Un numero complesso si scrive $a + bi$, con $a$ e $b$ reali.
- Gli scalari sono i numeri reali.
- La somma è quella solita dei numeri complessi.
- Il prodotto per scalare è il prodotto solito tra un reale e un complesso: $\lambda(a + bi) = \lambda a + (\lambda b)i$.

**Si resta dentro?** Sì. La somma di due complessi è un complesso. Un reale per un complesso è un complesso: per esempio $5 \cdot (2 + 3i) = 10 + 15i$.

**Le cinque proprietà della Definizione 5.4.** Chiamo $z$ e $w$ due numeri complessi, e $\lambda$ e $\mu$ due numeri reali.

1. I complessi con la somma sono un gruppo commutativo. È l'assioma 1 dei campi, e $\C$ è un campo.
2. $\lambda(z + w) = \lambda z + \lambda w$. È la proprietà distributiva di $\C$: vale per tutti i complessi, quindi anche quando il primo numero è reale.
3. $(\lambda + \mu)z = \lambda z + \mu z$. Sono le proprietà distributiva e commutativa di $\C$.
4. $(\lambda\mu)z = \lambda(\mu z)$. È la proprietà associativa del prodotto di $\C$.
5. $1z = z$. L'1 è l'elemento neutro del prodotto di $\C$.

Ogni proprietà è una regola dei numeri complessi, usata nel caso in cui uno dei numeri è reale. Quindi $\C$ è uno spazio vettoriale su $\R$.

**Controllo con i numeri** della proprietà 2, con lo scalare 2 e i vettori $1 + i$ e $3 - 2i$. A sinistra: la somma è $4 - i$, e il doppio è $8 - 2i$. A destra: i due doppi sono $2 + 2i$ e $6 - 4i$, e la loro somma è $8 - 2i$.

**Con le coordinate.** Al numero $a + bi$ fai corrispondere la lista $(a, b)$. La somma di due numeri complessi diventa la somma di due liste. Il multiplo $\lambda(a + bi)$ diventa il multiplo $\lambda(a, b)$. Come spazio vettoriale su $\R$, l'insieme $\C$ si comporta come il piano $\R^2$: è il piano di Gauss della lezione L02.

**Attenzione al contrario.** $\R$ **non** è uno spazio vettoriale su $\C$ con il prodotto solito: $i \cdot 1 = i$ non è un numero reale.
:::

::: esercizio medio Esercizio 5.9 delle dispense: il campo con due elementi
Sia $\K = \{0, 1\}$ con le operazioni
$$0 + 0 = 0, \quad 0 + 1 = 1, \quad 1 + 0 = 1, \quad 1 + 1 = 0, \qquad 0 \cdot 0 = 0, \quad 0 \cdot 1 = 0, \quad 1 \cdot 0 = 0, \quad 1 \cdot 1 = 1.$$
Dimostra che $(\K, +, \cdot)$ è un campo.
::: soluzione
Bisogna controllare i tre assiomi della Definizione 5.3.

**Assioma 1: con la somma è un gruppo commutativo, e l'elemento neutro è 0.**

- Non si esce: i risultati delle quattro somme sono solo 0 e 1.
- Elemento neutro: $0 + 0 = 0$ e $0 + 1 = 1 + 0 = 1$. Lo 0 non cambia niente.
- Inversi: $0 + 0 = 0$, quindi l'opposto di 0 è 0. E $1 + 1 = 0$, quindi l'opposto di 1 è 1.
- Commutativa: $0 + 1 = 1 + 0$. Negli altri due casi i due numeri sono uguali.
- Associativa: le scelte possibili di tre elementi sono $2 \cdot 2 \cdot 2 = 8$. Sono tutte nella tabella qui sotto.

| $a$ | $b$ | $c$ | $(a + b) + c$ | $a + (b + c)$ |
|---|---|---|---|---|
| $0$ | $0$ | $0$ | $0 + 0 = 0$ | $0 + 0 = 0$ |
| $0$ | $0$ | $1$ | $0 + 1 = 1$ | $0 + 1 = 1$ |
| $0$ | $1$ | $0$ | $1 + 0 = 1$ | $0 + 1 = 1$ |
| $0$ | $1$ | $1$ | $1 + 1 = 0$ | $0 + 0 = 0$ |
| $1$ | $0$ | $0$ | $1 + 0 = 1$ | $1 + 0 = 1$ |
| $1$ | $0$ | $1$ | $1 + 1 = 0$ | $1 + 1 = 0$ |
| $1$ | $1$ | $0$ | $0 + 0 = 0$ | $1 + 1 = 0$ |
| $1$ | $1$ | $1$ | $0 + 1 = 1$ | $1 + 0 = 1$ |

Le ultime due colonne sono uguali in ogni riga.

**Assioma 2: tolto lo 0, con il prodotto è un gruppo commutativo, e l'elemento neutro è 1.** Tolto lo 0 resta il solo elemento 1. L'unico prodotto possibile è $1 \cdot 1 = 1$. Non si esce. L'1 è l'elemento neutro ed è l'inverso di se stesso. Le proprietà associativa e commutativa valgono perché c'è un solo prodotto da fare.

**Assioma 3: la proprietà distributiva** $a \cdot (b + c) = a \cdot b + a \cdot c$.

- Se $a = 0$: a sinistra $0 \cdot (b + c) = 0$. A destra $0 + 0 = 0$.
- Se $a = 1$: a sinistra $1 \cdot (b + c) = b + c$. A destra $b + c$.

Vale in tutti e due i casi, quindi vale sempre.

**Il perché, in breve.** Leggi 0 come «pari» e 1 come «dispari»: le due tabelle sono le regole dei numeri pari e dispari. Le proprietà della somma e del prodotto degli interi passano ai resti della divisione per 2. Questo campo si indica spesso con $\mathbb{F}_2$ oppure con $\Z_2$.
:::

::: esercizio medio Esercizio 5.6 delle dispense: i cinque assiomi per tutti gli esempi
Per tutti gli esempi di spazi vettoriali visti sopra ($\K$ su se stesso, $\K^n$, le successioni, le funzioni $[0, 1] \to \K$, i polinomi $\K[x]$) verifica i 5 assiomi, come le dispense hanno controllato l'assioma 2 per $\K^n$.
::: soluzione
L'idea è una sola. In tutti gli esempi le operazioni si fanno un pezzo alla volta: una coordinata, un termine, un punto, un coefficiente. Ogni pezzo è un numero del campo, quindi ogni proprietà si riduce a una regola dei numeri.

**Le liste.** Chiamo $x$, $y$ e $z$ tre liste, e $\lambda$ e $\mu$ due scalari. La coordinata di posto $k$ della lista $x$ si scrive $x_k$. Le operazioni non fanno uscire: somme e prodotti di numeri del campo sono numeri del campo. La tabella dice che cosa succede in un posto qualsiasi.

| Proprietà | Che cosa succede al posto $k$ | Regola dei numeri usata |
|---|---|---|
| 1, associativa | $(x_k + y_k) + z_k = x_k + (y_k + z_k)$ | associativa della somma |
| 1, vettore nullo | $x_k + 0 = x_k$: è la lista di soli zeri | lo 0 è l'elemento neutro della somma |
| 1, opposto | $x_k + (-x_k) = 0$: è la lista con i segni cambiati | ogni numero ha l'opposto |
| 1, commutativa | $x_k + y_k = y_k + x_k$ | commutativa della somma |
| 2 | $\lambda(x_k + y_k) = \lambda x_k + \lambda y_k$ | distributiva |
| 3 | $(\lambda + \mu)x_k = \lambda x_k + \mu x_k$ | distributiva |
| 4 | $(\lambda\mu)x_k = \lambda(\mu x_k)$ | associativa del prodotto |
| 5 | $1 \cdot x_k = x_k$ | l'1 è l'elemento neutro del prodotto |

Ogni riga vale in tutti i posti, quindi vale per le liste intere.

Controllo con i numeri della proprietà 3, con gli scalari 2 e 3 e la lista $(1, 4)$. A sinistra: $5 \cdot (1, 4) = (5, 20)$. A destra: $(2, 8) + (3, 12) = (5, 20)$.

**I numeri da soli.** Sono le liste con una sola coordinata.

**Le successioni.** Stesso controllo, con «termine di posto $k$» al posto di «coordinata di posto $k$». I posti sono infiniti, ma ogni controllo riguarda un posto alla volta. Il vettore nullo è la successione di soli zeri.

**Le funzioni.** Stesso controllo, punto per punto. Due funzioni sono uguali quando fanno uscire lo stesso numero per ogni numero che entra. Per esempio la proprietà 2: per ogni $x$ dell'intervallo,
$$\big(\lambda(f + g)\big)(x) = \lambda\big(f(x) + g(x)\big) = \lambda f(x) + \lambda g(x) = (\lambda f + \lambda g)(x).$$
La prima e l'ultima uguaglianza sono la definizione di somma e di multiplo di funzioni. Quella in mezzo è la proprietà distributiva dei numeri. Il vettore nullo è la funzione nulla.

**I polinomi.** Le due operazioni agiscono un coefficiente alla volta. Si ripete il controllo delle liste, con «coefficiente di $x^k$» al posto di «coordinata di posto $k$». La somma di due polinomi è ancora un polinomio: il suo grado non supera il più grande dei due gradi. Il vettore nullo è il polinomio nullo.
:::

::: esercizio medio Esercizio 5.7 delle dispense: grado al massimo $k$
Controlla che l'insieme $\K_k[x]$ dei polinomi a coefficienti in $\K$ di grado $\le k$ sia uno spazio vettoriale. Perché l'insieme dei polinomi di grado **esattamente** $k$ non è uno spazio vettoriale se $k \ge 1$?
::: soluzione
**Prima parte: i polinomi di grado al massimo $k$ formano uno spazio vettoriale.**

Per fissare le idee prendo $k = 2$: i polinomi $ax^2 + bx + c$. Qualche coefficiente può essere 0, anche il primo.

1. **Le somme restano dentro.** Sommo $ax^2 + bx + c$ e $px^2 + qx + r$, una potenza alla volta:
   $$(a + p)x^2 + (b + q)x + (c + r).$$
   Non compaiono potenze più alte di $x^2$: il grado resta al massimo 2.
2. **I multipli restano dentro.** $\lambda(ax^2 + bx + c) = \lambda a x^2 + \lambda b x + \lambda c$. Anche qui non compaiono potenze più alte.
3. **Il vettore nullo c'è.** Il polinomio nullo ha tutti i coefficienti uguali a 0, e sta nell'insieme.
4. **Le otto regole.** Valgono per tutti i polinomi (esercizio 9), quindi anche per quelli di grado al massimo 2.

Con un $k$ qualsiasi il ragionamento è lo stesso. Un polinomio di grado al massimo $k$ si scrive $a_k x^k + \dots + a_1 x + a_0$. I numeri $a_0, a_1, \dots, a_k$ sono i coefficienti, uno per ogni potenza. Sommando due polinomi così, o moltiplicandone uno per uno scalare, non compaiono potenze più alte di $x^k$.

In breve: un polinomio di grado al massimo $k$ è la lista dei suoi $k + 1$ coefficienti. Per esempio $\R_2[x]$ si comporta come $\R^3$.

**Seconda parte: grado esattamente $k$, con $k \ge 1$.** Basta un esempio che esce dall'insieme.

- Una somma abbassa il grado. I polinomi $x^k + 1$ e $-x^k$ hanno grado $k$. La loro somma è $1$, che ha grado 0.
- Il vettore nullo manca: il polinomio nullo non ha grado $k$.

Con $k = 2$: i polinomi $x^2 + 1$ e $-x^2$ hanno grado 2. La loro somma è $1$, che non ha grado 2.

**Perché l'esercizio chiede $k \ge 1$?** I polinomi di grado 0 sono i numeri, visti come polinomi senza la $x$. Qui la risposta dipende da una scelta: il polinomio nullo ha grado 0, oppure non ha grado? Nel primo caso l'insieme contiene tutti i numeri del campo, ed è uno spazio vettoriale. Nel secondo caso manca il vettore nullo. L'esercizio evita questo caso.
:::

::: esercizio medio Tre conseguenze degli assiomi
Usando solo gli assiomi della Definizione 5.4 e la Proposizione 5.5, dimostra che in ogni spazio vettoriale $V$ su $\K$:
(a) $\lambda 0_V = 0_V$ per ogni $\lambda \in \K$;
(b) $(-1)v = -v$ per ogni $v \in V$;
(c) se $\lambda v = 0_V$, allora $\lambda = 0$ oppure $v = 0_V$.
::: soluzione
(a) A parole: uno scalare per il vettore nullo dà il vettore nullo. È il ragionamento della Proposizione 5.5, con i ruoli scambiati.

1. Il vettore nullo sommato a se stesso non cambia: $0_V + 0_V = 0_V$.
2. Quindi $\lambda 0_V = \lambda(0_V + 0_V)$.
3. Per la proprietà 2, $\lambda(0_V + 0_V) = \lambda 0_V + \lambda 0_V$.
4. Mettendo insieme: $\lambda 0_V = \lambda 0_V + \lambda 0_V$.
5. Sommo a tutti e due i lati l'opposto di $\lambda 0_V$. A sinistra resta $0_V$. A destra resta $\lambda 0_V$.

Quindi $0_V = \lambda 0_V$.

Controllo con i numeri: $5 \cdot (0, 0) = (5 \cdot 0,\ 5 \cdot 0) = (0, 0)$.

(b) A parole: moltiplicare per $-1$ dà l'opposto. Basta mostrare che $(-1)v$, sommato a $v$, dà il vettore nullo.

1. $v = 1v$, per la proprietà 5.
2. Quindi $v + (-1)v = 1v + (-1)v$.
3. Per la proprietà 3, letta da destra a sinistra, $1v + (-1)v = (1 + (-1))v$.
4. Tra i numeri $1 + (-1) = 0$. Quindi viene $0v$.
5. Per la Proposizione 5.5, $0v = 0_V$.

Quindi $v + (-1)v = 0_V$: il vettore $(-1)v$ è un opposto di $v$. In un gruppo l'opposto è uno solo (riquadro «due fatti utili sui gruppi»). Quindi $(-1)v = -v$.

Controllo con i numeri: $(1, 2) + (-1) \cdot (1, 2) = (1, 2) + (-1, -2) = (0, 0)$.

(c) A parole: un multiplo è il vettore nullo solo se lo scalare è zero, oppure se il vettore è nullo. Supponiamo che $\lambda v = 0_V$. I casi sono due.

- Se $\lambda = 0$, la frase è già vera.
- Se $\lambda$ non è zero, bisogna mostrare che $v = 0_V$.

Nel secondo caso si usa l'inverso di $\lambda$, che si scrive $\lambda^{-1}$. Esiste perché gli scalari stanno in un campo.

1. $v = 1v$, per la proprietà 5.
2. Un numero per il suo inverso dà 1, cioè $\lambda^{-1}\lambda = 1$. Quindi $v = (\lambda^{-1}\lambda)v$.
3. Per la proprietà 4, $(\lambda^{-1}\lambda)v = \lambda^{-1}(\lambda v)$.
4. Avevamo supposto $\lambda v = 0_V$. Quindi viene $\lambda^{-1} 0_V$.
5. Per il punto (a), $\lambda^{-1} 0_V = 0_V$.

Quindi $v = 0_V$.

Controllo con i numeri: se $2 \cdot (x, y) = (0, 0)$ allora $2x = 0$ e $2y = 0$. Dividendo per 2 viene $x = 0$ e $y = 0$: il vettore è quello nullo.
:::

::: esercizio esame Un prodotto per scalare strano
Su $V = \R^2$ considera la somma usuale e il prodotto per scalare
$$\lambda \star (x, y) = (\lambda x, 0).$$
(1) Calcola $3 \star (2, 5)$ e $1 \star (2, 5)$.
(2) Verifica gli assiomi 2, 3 e 4 della Definizione 5.4.
(3) $V$, con queste operazioni, è uno spazio vettoriale su $\R$?
(4) Vale ancora $0 \star v = 0_V$ per ogni $v$?
::: soluzione
La stella $\star$ indica un prodotto per scalare diverso da quello solito. La regola dice: moltiplica il primo numero per lo scalare, e al secondo posto metti 0.

(1) Applico la regola.

- $3 \star (2, 5) = (3 \cdot 2,\ 0) = (6, 0)$.
- $1 \star (2, 5) = (1 \cdot 2,\ 0) = (2, 0)$.

(2) Chiamo $v = (x, y)$ e $w = (a, b)$ due vettori, e $\lambda$ e $\mu$ due scalari.

*Assioma 2.*

- A sinistra: $v + w = (x + a,\ y + b)$. Quindi $\lambda \star (v + w) = (\lambda(x + a),\ 0) = (\lambda x + \lambda a,\ 0)$.
- A destra: $\lambda \star v + \lambda \star w = (\lambda x, 0) + (\lambda a, 0) = (\lambda x + \lambda a,\ 0)$.

Sono uguali: vale.

*Assioma 3.*

- A sinistra: $(\lambda + \mu) \star v = ((\lambda + \mu)x,\ 0) = (\lambda x + \mu x,\ 0)$.
- A destra: $\lambda \star v + \mu \star v = (\lambda x, 0) + (\mu x, 0) = (\lambda x + \mu x,\ 0)$.

Sono uguali: vale.

*Assioma 4.*

- A sinistra: $(\lambda\mu) \star v = (\lambda\mu x,\ 0)$.
- A destra: prima $\mu \star v = (\mu x, 0)$. Poi $\lambda \star (\mu x, 0) = (\lambda\mu x,\ 0)$.

Sono uguali: vale.

(3) **No.** L'assioma 1 vale, perché la somma è quella solita. Ma l'assioma 5 fallisce: $1 \star (2, 5) = (2, 0)$, che è diverso da $(2, 5)$. Basta un assioma falso.

(4) **Sì**: $0 \star (x, y) = (0 \cdot x,\ 0) = (0, 0)$. Non è un caso. La dimostrazione della Proposizione 5.5 usa solo gli assiomi 1 e 3, che qui valgono.

All'esame una domanda così compare a risposta multipla, nella forma «è uno spazio vettoriale?». La motivazione giusta è l'esempio che fa fallire l'assioma 5.
:::

::: esercizio esame Come all'esame: è uno spazio vettoriale su $\R$?
Per ciascuno dei seguenti insiemi, con le operazioni indicate, stabilisci se è uno spazio vettoriale su $\R$, motivando la risposta.
(a) $\C$, con la somma usuale e il prodotto per numeri reali.
(b) $\R^2$, con la somma usuale e $\lambda \cdot (x, y) = (\lambda x, y)$.
(c) I polinomi reali di grado esattamente $3$, con le operazioni usuali.
(d) Le funzioni $f : [0, 1] \to \R$ con $f(1) = 0$, con le operazioni punto per punto.
(e) I numeri reali positivi, con la «somma» $x \oplus y = xy$ e il «prodotto per scalare» $\lambda \odot x = x^\lambda$.
::: soluzione
(a) **Sì.** È l'Esercizio 5.8 delle dispense (qui esercizio 7), ed è la domanda 2 dell'appello del 07/02/2025.

(b) **No**: fallisce l'assioma 3. Qui lo scalare moltiplica solo il primo numero e lascia il secondo com'è. Provo con gli scalari 1 e 1 e con il vettore $(0, 1)$.

- A sinistra: $(1 + 1) \cdot (0, 1) = 2 \cdot (0, 1) = (2 \cdot 0,\ 1) = (0, 1)$.
- A destra: $1 \cdot (0, 1) + 1 \cdot (0, 1) = (0, 1) + (0, 1) = (0, 2)$.

I due risultati sono diversi. Si vede anche dalla Proposizione 5.5: qui $0 \cdot (0, 1) = (0, 1)$, che non è il vettore nullo.

(c) **No.** Una somma esce: $(x^3 + x) + (-x^3) = x$, che ha grado 1. E il polinomio nullo non ha grado 3.

(d) **Sì.** L'insieme è un pezzo dello spazio di tutte le funzioni, con le stesse operazioni. Bastano i tre controlli.

1. Il vettore nullo c'è: la funzione nulla in 1 vale 0.
2. Le somme restano dentro: se $f(1) = 0$ e $g(1) = 0$, allora $(f + g)(1) = 0 + 0 = 0$.
3. I multipli restano dentro: $(\lambda f)(1) = \lambda \cdot 0 = 0$.

Nella lezione L06 un insieme così si chiamerà **sottospazio**.

(e) **Sì**, anche se sembra strano. I simboli $\oplus$ e $\odot$ sono un più e un per dentro un cerchio: servono a non confondere queste operazioni con quelle solite. La «somma» di due vettori è il loro prodotto come numeri. Il «multiplo» è una potenza. Per esempio $2 \oplus 3 = 2 \cdot 3 = 6$ e $3 \odot 2 = 2^3 = 8$.

Si resta dentro: il prodotto di due numeri positivi è positivo, e una potenza di un numero positivo è positiva.

- Assioma 1. La «somma» è il prodotto dei numeri positivi, che è un gruppo commutativo (esercizio 6, punto (e)). Il «vettore nullo» è il numero 1, perché $x \oplus 1 = x \cdot 1 = x$. L'«opposto» di $x$ è $\frac 1x$.
- Assioma 2. $\lambda \odot (x \oplus y) = (xy)^\lambda = x^\lambda y^\lambda = (\lambda \odot x) \oplus (\lambda \odot y)$.
- Assioma 3. $(\lambda + \mu) \odot x = x^{\lambda + \mu} = x^\lambda x^\mu = (\lambda \odot x) \oplus (\mu \odot x)$.
- Assioma 4. $(\lambda\mu) \odot x = x^{\lambda\mu} = (x^\mu)^\lambda = \lambda \odot (\mu \odot x)$.
- Assioma 5. $1 \odot x = x^1 = x$.

I passaggi in mezzo sono le regole delle potenze. Per esempio la somma degli esponenti, con i numeri: $2^{2 + 3} = 32$ e $2^2 \cdot 2^3 = 4 \cdot 8 = 32$.

Controllo con la Proposizione 5.5: $0 \odot x = x^0 = 1$, che è proprio il vettore nullo di questo spazio.

Che cosa insegna: i vettori possono essere qualsiasi cosa, e le operazioni possono avere un aspetto insolito. Conta solo che rispettino le regole.
:::

::: esercizio difficile Esercizio 5.10 delle dispense: un campo con tre elementi
Sia $\K = \{0, 1, 2\}$. Trova, in modo simile all'Esercizio 5.9 (qui esercizio 8), due operazioni $+$ e $\cdot$ che rendano $(\K, +, \cdot)$ un campo. Per chi è molto coraggioso: prova a generalizzare a $\K = \{0, 1, 2, \dots, p - 1\}$ con $p$ numero primo.
::: soluzione
**L'idea.** Nel campo con due elementi le operazioni erano quelle dei resti della divisione per 2. Qui si usano i **resti della divisione per 3**: si calcola come negli interi e poi si tiene il resto.

Due esempi.

- $2 + 2 = 4$. Poi 4 diviso 3 fa 1 con resto 1. Quindi in questo campo $2 + 2 = 1$.
- $2 \cdot 2 = 4$, che ha resto 1. Quindi in questo campo $2 \cdot 2 = 1$.

Le due tabelle complete:

| $+$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $0$ | $0$ | $1$ | $2$ |
| $1$ | $1$ | $2$ | $0$ |
| $2$ | $2$ | $0$ | $1$ |

| $\cdot$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $0$ | $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ | $2$ |
| $2$ | $0$ | $2$ | $1$ |

**Il controllo dei tre assiomi della Definizione 5.3.**

1. Con la somma è un gruppo commutativo. L'elemento neutro è 0. Gli opposti: quello di 0 è 0, quello di 1 è 2 perché $1 + 2 = 3$ ha resto 0, quello di 2 è 1. La tabella è simmetrica, quindi l'ordine non conta. La proprietà associativa passa dagli interi: $(a + b) + c$ e $a + (b + c)$ sono lo stesso numero intero, quindi hanno lo stesso resto.
2. Tolto lo 0 restano 1 e 2. I prodotti sono $1 \cdot 1 = 1$, poi $1 \cdot 2 = 2$, poi $2 \cdot 2 = 1$. Non si esce e non compare mai lo 0. L'elemento neutro è 1. L'inverso di 1 è 1, l'inverso di 2 è 2. Le proprietà commutativa e associativa passano dagli interi.
3. La proprietà distributiva vale negli interi, e prendere il resto rispetta somme e prodotti. Quindi vale anche per i resti.

Controllo con i numeri della proprietà distributiva, su $2 \cdot (1 + 2)$.

- A sinistra: $1 + 2 = 0$, poi $2 \cdot 0 = 0$.
- A destra: $2 \cdot 1 = 2$ e $2 \cdot 2 = 1$, poi $2 + 1 = 0$.

Stesso risultato.

**Il caso generale, con $p$ primo.** Un numero **primo** è un numero maggiore di 1 che si divide solo per 1 e per se stesso, come 2, 3, 5 e 7. Sull'insieme $\{0, 1, \dots, p - 1\}$ si usano la somma e il prodotto dei resti della divisione per $p$. Tutte le proprietà passano dagli interi, come sopra. Ne resta una da dimostrare: ogni elemento diverso da 0 ha un inverso.

Vediamolo prima con $p = 5$ e con l'elemento 2. Moltiplico 2 per tutti gli elementi diversi da zero e tengo i resti: $2 \cdot 1 = 2$, poi $2 \cdot 2 = 4$, poi $2 \cdot 3 = 6$ che ha resto 1, poi $2 \cdot 4 = 8$ che ha resto 3. I resti sono 2, 4, 1 e 3: tutti i numeri da 1 a 4, in un altro ordine. Tra loro c'è l'1, che viene da $2 \cdot 3$. Quindi l'inverso di 2 è 3.

In generale chiamo $a$ un elemento diverso da 0 e lo moltiplico per tutti gli elementi da 1 a $p - 1$.

1. I resti che ottengo sono tutti diversi tra loro. Se $ab$ e $ac$ avessero lo stesso resto, $p$ dividerebbe la differenza $a(b - c)$. Un numero primo che divide un prodotto divide uno dei due pezzi. Ma $a$ sta tra 1 e $p - 1$, e $b - c$ sta tra $-(p - 2)$ e $p - 2$. L'unica possibilità è $b - c = 0$, cioè $b = c$.
2. Nessun resto è 0, per lo stesso motivo: $p$ dovrebbe dividere $a$ oppure $b$.
3. Sono quindi $p - 1$ resti, diversi tra loro e diversi da zero: ci sono tutti i numeri da 1 a $p - 1$. Uno di loro è 1, e l'elemento che lo produce è l'inverso di $a$.

**Perché serve che $p$ sia primo.** Con $\{0, 1, 2, 3\}$ e i resti della divisione per 4 non si ottiene un campo: il 2 non ha inverso. Infatti $2 \cdot 1 = 2$, poi $2 \cdot 2 = 4$ ha resto 0, poi $2 \cdot 3 = 6$ ha resto 2. Questi insiemi di resti si studiano in Matematica Discreta, con il nome di aritmetica modulare.
:::

## Domande di ripasso

::: domanda Che cos'è $\R^n$, e in quali due modi si può leggere un suo elemento?
È l'insieme delle liste ordinate di $n$ numeri reali. Un suo elemento si può leggere come un punto, cioè un posto. Oppure come un vettore, cioè la freccia che va dall'origine a quel posto: uno spostamento.
:::

::: domanda Come si sommano due vettori di $\R^n$, e che cosa vuol dire la somma in $\R^2$?
Un posto alla volta: il primo numero con il primo, il secondo con il secondo, fino all'ultimo. Per esempio $(1, 2) + (3, 1) = (4, 3)$. Nel piano vuol dire fare uno spostamento dopo l'altro. Sul disegno la somma è la diagonale del parallelogramma costruito sui due vettori.
:::

::: domanda Che effetto ha il prodotto per scalare $\lambda v$ al variare di $\lambda$?
Ogni coordinata viene moltiplicata per lo scalare. Con uno scalare maggiore di 1 la freccia si allunga. Con uno scalare tra 0 e 1 si accorcia. Con uno scalare negativo cambia verso. Con lo scalare 0 viene il vettore nullo, con $-1$ viene l'opposto. Tutti i multipli di un vettore non nullo stanno sulla retta che passa per l'origine e per la punta di quel vettore.
:::

::: domanda Quali sono gli assiomi di gruppo? Fai un esempio e un controesempio.
Sono tre: c'è un elemento neutro, vale la proprietà associativa, ogni elemento ha un inverso. In più l'operazione non deve far uscire dall'insieme. Se l'ordine non conta, il gruppo è commutativo. Esempio: gli interi con la somma, con elemento neutro 0 e inverso $-a$. Controesempio: i naturali con la somma, perché 1 non ha opposto tra i naturali.
:::

::: domanda Perché $\Q \setminus \{0\}$ è un gruppo con il prodotto e $\Z \setminus \{0\}$ no?
Tra le frazioni diverse da zero ogni elemento ha l'inverso: quello di $\frac 23$ è $\frac 32$, ed è ancora una frazione diversa da zero. Tra gli interi diversi da zero il 2 non ha inverso, perché $\frac 12$ non è un intero.
:::

::: domanda Che cos'è un campo? Perché $\Z$ non lo è?
È un insieme con una somma e un prodotto che rispettano tre assiomi. Con la somma è un gruppo commutativo. Tolto lo zero, con il prodotto è un gruppo commutativo. Vale la proprietà distributiva. In pratica: si fanno le quattro operazioni senza uscire. $\Z$ non è un campo perché 2 non ha inverso per il prodotto.
:::

::: domanda Quali sono i cinque assiomi di spazio vettoriale? Che cosa contiene il primo?
(1) Con la somma i vettori formano un gruppo commutativo. (2) Il multiplo di una somma è la somma dei multipli: $\lambda(v + w) = \lambda v + \lambda w$. (3) $(\lambda + \mu)v = \lambda v + \mu v$. (4) $(\lambda\mu)v = \lambda(\mu v)$. (5) $1v = v$.

Il primo contiene quattro regole: associativa, vettore nullo, opposto, commutativa. Inoltre la somma e il prodotto per scalare non devono far uscire dall'insieme.
:::

::: domanda Qual è la differenza tra lo $0$ del campo e l'origine $0_V$?
Lo 0 del campo è uno scalare, cioè un numero. L'origine $0_V$ è un vettore: quello che sommato non cambia niente. In $\R^3$ è la lista $(0, 0, 0)$. Tra i polinomi è il polinomio nullo. Tra le funzioni è la funzione nulla.
:::

::: domanda Enuncia e dimostra la Proposizione 5.5.
Dice che $0v = 0_V$: un vettore qualsiasi per il numero zero dà il vettore nullo.

Dimostrazione. Siccome $0 + 0 = 0$, vale $0v = (0 + 0)v$. Per la proprietà 3 questo è uguale a $0v + 0v$. Quindi $0v = 0v + 0v$. Sommando a tutti e due i lati l'opposto di $0v$ resta $0_V = 0v$.
:::

::: domanda Perché $\C$ è uno spazio vettoriale su $\R$, mentre $\R$ non lo è su $\C$?
Un numero reale per un numero complesso è un numero complesso: i multipli restano dentro. E le regole sono regole dei conti tra numeri complessi. Al contrario, uno scalare complesso per un numero reale può non essere reale: $i \cdot 1 = i$. Un multiplo esce.
:::

::: domanda Come si sommano due funzioni $[0, 1] \to \R$? Qual è il vettore nullo?
Punto per punto. Per ogni numero che entra si sommano i due numeri che escono: $(f + g)(x) = f(x) + g(x)$. Per il multiplo: $(\lambda f)(x) = \lambda f(x)$. Il vettore nullo è la funzione che vale 0 in ogni punto.
:::

::: domanda Perché i polinomi di grado esattamente $2$ non formano uno spazio vettoriale, mentre $\R_2[x]$ sì?
Perché una somma può abbassare il grado: $x^2$ più $-x^2 + x$ fa $x$, che ha grado 1. E il polinomio nullo non ha grado 2. In $\R_2[x]$ invece ci sono tutti i polinomi di grado al massimo 2: somme e multipli restano dentro, e il polinomio nullo c'è.
:::

::: domanda Come si dimostra che un insieme, con certe operazioni, non è uno spazio vettoriale?
Con un solo esempio concreto. Il vettore nullo non sta nell'insieme. Oppure la somma di due elementi esce dall'insieme. Oppure un multiplo esce. Oppure una delle regole fallisce per certi numeri.
:::

## Glossario

```glossario
Vettore | Un elemento di uno spazio vettoriale. Nel caso più comune è una lista ordinata di numeri, come $(3, 2)$: nel piano si legge «3 a destra e 2 in su».
Spazio euclideo $\R^n$ | L'insieme delle liste ordinate di $n$ numeri reali. $\R^2$ è il piano, $\R^3$ lo spazio. Somma e multiplo si fanno un posto alla volta.
Prodotto cartesiano | $A \times B$ è l'insieme delle coppie ordinate con il primo elemento preso da $A$ e il secondo da $B$. Per esempio $\R \times \R$ è $\R^2$.
Vettore colonna | Un vettore scritto in verticale, con i numeri uno sotto l'altro. Negli appelli, scritto in riga, compare come ${}^t(1, 2, 3)$.
Coordinate | I numeri che formano un vettore. In $x = (3, 2)$ la prima coordinata è $x_1 = 3$ e la seconda è $x_2 = 2$.
Origine | Il vettore fatto di soli zeri, come $(0, 0)$. In uno spazio vettoriale qualsiasi è il vettore nullo $0_V$.
Scalare | Un numero che moltiplica un vettore. Nel corso è un numero reale oppure complesso.
Prodotto per scalare | L'operazione che moltiplica un vettore per uno scalare. Nelle liste si moltiplica ogni coordinata: $2 \cdot (1, 2) = (2, 4)$.
Regola del parallelogramma | Nel piano la somma di due vettori è la diagonale del parallelogramma che ha i due vettori come lati.
Operazione binaria | Una regola che prende due elementi di un insieme e ne restituisce uno dello stesso insieme, come la somma tra interi.
Assioma | Una regola che fa parte di una definizione. Un gruppo ha tre assiomi, un campo tre, uno spazio vettoriale cinque.
Gruppo | Un insieme con un'operazione binaria che ha un elemento neutro, è associativa e dà a ogni elemento un inverso. Esempio: gli interi con la somma.
Gruppo commutativo | Un gruppo in cui l'ordine non conta: $a * b = b * a$ per tutti gli elementi.
Campo | Un insieme con somma e prodotto in cui si fanno le quattro operazioni senza uscire, dividendo solo per elementi diversi da zero. Esempi: $\Q$, $\R$, $\C$.
Spazio vettoriale | Un insieme con una somma e un prodotto per scalare che non fanno uscire dall'insieme e rispettano le cinque proprietà della Definizione 5.4.
Vettore nullo $0_V$ | Il vettore che sommato non cambia niente: $v + 0_V = v$. Nelle liste è la lista di soli zeri.
Opposto $-v$ | Il vettore che sommato a $v$ dà il vettore nullo. È il multiplo con lo scalare $-1$: l'opposto di $(1, 2)$ è $(-1, -2)$.
Lo spazio $\K^n$ | Le liste di $n$ numeri del campo $\K$, con somma e multiplo un posto alla volta. Per esempio $\C^2$.
Polinomi $\K[x]$ e $\K_k[x]$ | $\K[x]$ contiene tutti i polinomi con i coefficienti nel campo. $\K_k[x]$ contiene quelli di grado al massimo $k$. Sono tutti e due spazi vettoriali.
Operazioni punto per punto | Per le funzioni: in ogni punto si sommano i due numeri che escono, $(f + g)(x) = f(x) + g(x)$. Per il multiplo: $(\lambda f)(x) = \lambda f(x)$.
```

## Checklist

```checklist
- So scrivere un elemento di $\R^n$ come punto, come vettore e come vettore colonna.
- So sommare due vettori e moltiplicarli per uno scalare, anche con i numeri complessi, e so disegnare la somma nel piano con il parallelogramma.
- So elencare le tre regole di un gruppo e spiegare perché i naturali con la somma e gli interi con il prodotto non sono gruppi.
- So dire che cos'è un campo e perché $\Z$ non lo è, mentre $\{0, 1\}$ con $1 + 1 = 0$ sì.
- So scrivere le cinque proprietà di uno spazio vettoriale e le quattro regole contenute nella prima.
- Distinguo il numero zero dal vettore nullo $0_V$ e so dimostrare che $0v = 0_V$.
- So spiegare perché le liste, le successioni, le funzioni e i polinomi sono spazi vettoriali, e so dire qual è il vettore nullo in ognuno.
- So dimostrare che $\C$ è uno spazio vettoriale su $\R$ e spiegare perché $\R^2$ non lo è su $\C$.
- So trovare un esempio quando un insieme non è uno spazio vettoriale: manca il vettore nullo, oppure una somma o un multiplo escono.
- So controllare una proprietà con operazioni insolite, come negli esercizi 12 e 13.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 5 «Spazi vettoriali I», pp. 20–25: le sezioni 5.A–5.D sono seguite in ordine, con la pagina indicata accanto a ogni titolo (l'introduzione di p. 20 è ripresa nella sezione sulla definizione); definizioni, proposizioni ed esercizi mantengono la loro numerazione (Definizioni 5.1–5.4, Proposizione 5.5, Esercizi 5.6–5.10).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.5 (gruppi, unicità dell'inverso, semplificazione, anelli e campi), §2.1 (spazio euclideo, somma, prodotto per scalare e loro proprietà), §2.2.1–2.2.4 (definizione di spazio vettoriale, Proposizione 2.2.1, gli spazi $\K^n$, $\K[x]$ e $F(X, \K)$).
- **Appelli citati** (testi e soluzioni sul Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (domanda 5), 08/02/2024 (domanda 2), 10/07/2024 (domanda 2), 07/02/2025 (domanda 2, riportata con una soluzione scritta per questi appunti), 03/06/2025 (domanda 2), 15/01/2026 (domande 3 e 4), 05/02/2026 (domanda 2), 07/09/2026 (domanda 6).
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi sono di questi appunti. Le parti **«Oltre le dispense»** (i due fatti sui gruppi, le altre conseguenze delle regole, la sezione su come si riconosce ciò che non è uno spazio vettoriale e il metodo per l'esame) collegano la lezione al resto del corso e all'esame.
