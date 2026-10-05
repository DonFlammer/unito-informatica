---
corso: MDAG
modulo: AG
lezione: L19
titolo: Prodotti scalari I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L19
descrizione: >-
  Appunti della lezione L19 di Algebra lineare e Geometria (MDAG, parte 2): che cos'è un prodotto scalare, prodotti
  degeneri e definiti positivi, il prodotto scalare euclideo, le matrici simmetriche e la matrice associata a un
  prodotto scalare in una base, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Finora con i vettori sapevi fare due cose: sommarli e moltiplicarli per un numero. Qui impari a moltiplicare due
  vettori tra loro ottenendo un numero solo: il prodotto scalare. Da questo attrezzo nelle prossime lezioni nascono
  lunghezze, angoli e perpendicolarità, e all'esame va saputo riassumere in una tabella di numeri.
materiale: dispense
scheda:
  Dispense: lezione 19 · pp. 96–99
  Libro: Martelli, §7.1 e §7.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 19 «Prodotti scalari I»; B. Martelli, Geometria e algebra
  lineare, §7.1 e §7.2
appunti_html: appunti/MDAG/L19_prodotti_scalari_1.html
genera_html: true
---

## In breve

- Un **prodotto scalare** è una regola che prende due vettori e restituisce **un numero solo**. Un vettore è una lista di numeri.
- Il più usato è quello **euclideo**: moltiplichi i numeri che stanno nello stesso posto e sommi i risultati, come nel conto della spesa. Per i vettori $(1, 3)$ e $(-2, 1)$ il risultato è 1.
- Il segno del risultato dice come sono messi i due vettori: positivo se puntano più o meno dalla stessa parte, zero se sono perpendicolari, negativo se puntano da parti opposte.
- In generale un prodotto scalare è qualunque regola che rispetta tre richieste: una somma si può spezzare, un numero si può portare fuori, l'ordine dei due vettori non conta.
- Un prodotto scalare è **definito positivo** se ogni vettore non nullo, moltiplicato per sé stesso, dà un numero positivo. È **degenere** se c'è un vettore non nullo che dà zero con tutti gli altri.
- Una **matrice simmetrica**, cioè una tabella di numeri uguale alla sua immagine allo specchio, dà un prodotto scalare. E ogni prodotto scalare, scelta una base, si riassume in una tabella: la **matrice associata**.
- All'esame la domanda tipica è: calcolare la matrice associata a un prodotto scalare in una base data. Si fa una casella alla volta.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Da due vettori a un numero: il conto della spesa (p. 96)

Al mercato compri 2 chili di mele e 3 chili di pere. Le mele costano 4 euro al chilo, le pere 1 euro al chilo. Quanto spendi?

Il conto lo sai già fare. Nei conti il puntino $\cdot$ è il segno «per».

1. Le mele: $2 \cdot 4 = 8$ euro.
2. Le pere: $3 \cdot 1 = 3$ euro.
3. Il totale: $8 + 3 = 11$ euro.

Guarda che cosa hai usato. Avevi due liste di numeri: la lista delle quantità e la lista dei prezzi.

$$\text{quantità: } (2, 3) \qquad\qquad \text{prezzi: } (4, 1)$$

Hai moltiplicato i numeri che stanno **nello stesso posto**: il primo con il primo, il secondo con il secondo. Poi hai sommato i risultati. Da due liste è uscito **un numero solo**: 11.

Questo conto è un **prodotto scalare**. È l'operazione di cui parla tutta la lezione.

### Le liste sono vettori

Nel corso una lista ordinata di numeri si chiama **vettore** (lezione L05). Un vettore fatto di due numeri si può leggere come uno spostamento su una mappa a quadretti. Per esempio $(2, 3)$ vuol dire «2 passi a destra e 3 in su».

I vettori fatti di due numeri reali formano un insieme che si scrive $\R^2$ e si legge «erre due». Quelli fatti di tre numeri formano $\R^3$. Quelli fatti di $n$ numeri formano $\R^n$, «erre enne»: la lettera $n$ dice quanti numeri ci sono nella lista.

Rifacciamo il conto con i due vettori dell'esempio delle dispense. Il primo lo chiamiamo $u$, il secondo $v$.

$$u = (1, 3) \qquad\qquad v = (-2, 1)$$

1. Primo posto: $1 \cdot (-2) = -2$.
2. Secondo posto: $3 \cdot 1 = 3$.
3. Somma: $-2 + 3 = 1$.

Il prodotto scalare di $u$ e $v$ è 1.

### Come si scrive

Il prodotto scalare di due vettori si scrive mettendo i due vettori tra parentesi a punta, separati da una virgola.

$$\langle u, v\rangle = 1$$

Si legge «prodotto scalare di $u$ e $v$». Le parentesi a punta si chiamano anche parentesi angolari. Alcuni libri scrivono $u \cdot v$, con un puntino: è la stessa cosa.

Perché «scalare»? Nel corso **scalare** vuol dire «numero» (lezione L05). Il prodotto scalare si chiama così perché il suo risultato è uno scalare, cioè un numero, e non un vettore.

### Che cosa dice il segno

Il numero che esce non è un numero qualunque. Il suo **segno** dice come sono messi i due vettori, uno rispetto all'altro.

> [!RIPASSO] angolo acuto, retto, ottuso
> Due frecce che partono dallo stesso punto formano un angolo.
>
> - **Angolo retto**: è quello dell'angolo di un foglio, 90 gradi. Due frecce che formano un angolo retto sono **perpendicolari**.
> - **Angolo acuto**: è più stretto di un angolo retto. Le due frecce puntano più o meno dalla stessa parte.
> - **Angolo ottuso**: è più largo di un angolo retto. Le due frecce puntano da parti quasi opposte.

Facciamo una prova. Teniamo fisso il vettore $u = (2, 1)$ e cambiamo il secondo vettore tre volte.

| Secondo vettore | Conto | Prodotto con $u$ | Nel disegno |
|---|---|--:|---|
| $a = (1, 2)$ | $2 \cdot 1 + 1 \cdot 2$ | $4$ | $a$ forma con $u$ un angolo **acuto** |
| $b = (-1, 2)$ | $2 \cdot (-1) + 1 \cdot 2$ | $0$ | $b$ è **perpendicolare** a $u$ |
| $c = (-2, 1)$ | $2 \cdot (-2) + 1 \cdot 1$ | $-3$ | $c$ forma con $u$ un angolo **ottuso** |

Guarda la figura. La freccia spessa è $u$. Le altre tre sono i vettori della tabella: confronta l'angolo che ognuna forma con $u$ e il segno del prodotto.

```grafico
titolo: Con $u = (2, 1)$: $\langle u, a\rangle = 4 > 0$, $\langle u, b\rangle = 0$, $\langle u, c\rangle = -3 < 0$
x: -3 3
y: -1 3
vettore: 2 1 | accento | spesso | $u$ | se
vettore: 1 2 | verde | $a$ | ne
vettore: -1 2 | blu | $b$ | n
vettore: -2 1 | rosa | $c$ | no
```

> [!IDEA]
> Il prodotto scalare dice quanto due vettori puntano dalla stessa parte. **Positivo**: angolo acuto. **Zero**: perpendicolari. **Negativo**: angolo ottuso.

Per ora è un'osservazione su tre esempi. La formula precisa per l'angolo arriva nella lezione L20. Prima bisogna capire bene l'attrezzo: quali regole rispetta questo conto, e quali altri conti gli assomigliano.

> [!NOTA] Perché da qui in poi i numeri sono solo reali
> Le dispense cominciano la lezione con un avviso. Nelle lezioni precedenti i numeri potevano essere reali oppure complessi: le dispense scrivevano $\K$ per dire «$\R$ oppure $\C$». In tutte le lezioni sui prodotti scalari i numeri sono **solo reali**, per due motivi.
>
> - Serve l'**ordine**: bisogna poter dire che un numero è positivo. Tra i numeri complessi non ha senso dire che uno è maggiore di un altro (lezione L02).
> - Serve la **radice quadrata** di un numero positivo, per calcolare le lunghezze nella lezione L20. Tra le frazioni certe radici mancano, per esempio $\sqrt 2$ (lezione L01).
>
> Quindi tutti gli spazi di vettori di queste lezioni sono **reali**. La versione con i numeri complessi si chiama prodotto hermitiano e arriva nella lezione L25.

::: prova Calcola il prodotto scalare di $(3, 1)$ e $(2, 5)$.
Primo posto: $3 \cdot 2 = 6$. Secondo posto: $1 \cdot 5 = 5$. Somma: $6 + 5 = 11$.
:::

::: prova Calcola $\langle (1, 2), (4, -2)\rangle$. Che cosa dice il risultato sui due vettori?
Primo posto: $1 \cdot 4 = 4$. Secondo posto: $2 \cdot (-2) = -4$. Somma: $4 - 4 = 0$.

Il prodotto è zero, quindi i due vettori sono perpendicolari.
:::

> [!RICORDA]
> - Il **prodotto scalare** prende due vettori e restituisce **un numero**.
> - Quello del conto della spesa: moltiplica i numeri nello stesso posto e somma. Si scrive $\langle u, v\rangle$.
> - Positivo: angolo acuto. Zero: perpendicolari. Negativo: angolo ottuso.
> - In queste lezioni i numeri sono sempre reali.

## Le tre regole di un prodotto scalare (p. 96)

Il conto della spesa rispetta tre regole che usi senza pensarci.

Le vediamo prima con i numeri. Poi diventano una definizione: in matematica si chiama prodotto scalare **qualunque** operazione che rispetta quelle tre regole, non solo il conto della spesa.

I dati sono quelli di prima: mele a 4 euro e pere a 1 euro, cioè il vettore dei prezzi $(4, 1)$.

### Prima regola: due scontrini oppure uno solo

Lunedì compri 2 chili di mele e 3 di pere. Martedì compri 1 chilo di mele e 1 di pere. Quanto hai speso in tutto? Puoi fare il conto in due modi.

| Modo | Conto | Totale |
|---|---|--:|
| due scontrini: lunedì | $2 \cdot 4 + 3 \cdot 1$ | $11$ |
| due scontrini: martedì | $1 \cdot 4 + 1 \cdot 1$ | $5$ |
| due scontrini: somma | $11 + 5$ | $16$ |
| uno scontrino solo, con le quantità sommate $(3, 4)$ | $3 \cdot 4 + 4 \cdot 1$ | $16$ |

Viene lo stesso numero. A parole: **sommare i vettori e poi fare il prodotto dà lo stesso risultato di fare i due prodotti e poi sommare**.

Con le parentesi a punta la regola si scrive così.

$$\langle (2, 3) + (1, 1),\ (4, 1)\rangle = \langle (2, 3), (4, 1)\rangle + \langle (1, 1), (4, 1)\rangle$$

### Seconda regola: il triplo della spesa costa il triplo

Compri il triplo di tutto: 6 chili di mele e 9 di pere. Il vettore delle quantità è il triplo di quello di prima.

$$3 \cdot (2, 3) = (6, 9)$$

Il conto diretto dà $6 \cdot 4 + 9 \cdot 1 = 33$ euro. È il triplo degli 11 euro di prima.

A parole: **un numero che moltiplica un vettore si può portare fuori dal prodotto scalare**.

$$\langle 3 \cdot (2, 3),\ (4, 1)\rangle = 3 \cdot \langle (2, 3), (4, 1)\rangle$$

### Terza regola: l'ordine non conta

Scambia le due liste: prima i prezzi, poi le quantità. Il conto diventa $4 \cdot 2 + 1 \cdot 3 = 11$. È lo stesso di prima, perché nei prodotti tra numeri l'ordine non conta.

$$\langle (2, 3), (4, 1)\rangle = \langle (4, 1), (2, 3)\rangle$$

> [!IDEA]
> Un **prodotto scalare** è una regola che da due vettori dà un numero e rispetta tre richieste: una somma si può spezzare, un numero si può portare fuori, l'ordine non conta.

### Come lo scrivono le dispense

Le dispense scrivono le tre regole con le lettere, perché devono valere per tutti i vettori e non solo per quelli della spesa. Prima di leggere la definizione, ecco le lettere che usano.

- $V$ è uno **spazio vettoriale reale**: un insieme di vettori che si possono sommare tra loro e moltiplicare per un numero reale (lezione L05). Per ora pensa a $\R^2$.
- $v$ e $w$ sono due vettori di $V$.
- Anche $v'$ e $w'$ sono vettori. L'apostrofo si legge «primo»: $v'$ è «vu primo». Serve solo a dare un nome a un altro vettore.
- $\lambda$ è la lettera greca *lambda*. Qui indica un numero reale qualsiasi.

> [!DEF] 19.1 · Prodotto scalare
> Sia $V$ uno spazio vettoriale reale. Un **prodotto scalare** su $V$ è un'applicazione
> $$V \times V \longrightarrow \R, \qquad (v, w) \longmapsto \langle v, w\rangle$$
> che soddisfa i seguenti assiomi:
> 1. $\langle v + v', w\rangle = \langle v, w\rangle + \langle v', w\rangle$,
> 2. $\langle \lambda v, w\rangle = \lambda\langle v, w\rangle$,
> 3. $\langle v, w\rangle = \langle w, v\rangle$,
>
> per ogni $v, v', w, w' \in V$ e ogni $\lambda \in \R$.

**Come si legge.**

- «Un'applicazione» è una macchina: qualcosa entra, qualcosa esce (lezione L14).
- $V \times V$ si legge «$V$ per $V$». È l'insieme delle **coppie** di vettori di $V$. Dice che cosa entra nella macchina: due vettori, un primo e un secondo.
- La freccia lunga $\longrightarrow$ si legge «va in». Dopo la freccia c'è $\R$: dalla macchina esce un numero reale.
- La freccia con la barretta $\longmapsto$ si legge «viene mandato in». La coppia $(v, w)$ viene mandata nel numero $\langle v, w\rangle$.
- «Assiomi» vuol dire «regole richieste».
- L'assioma (1) è la regola dei due scontrini: una somma nel primo posto si può spezzare.
- L'assioma (2) è la regola del triplo. La scrittura $\lambda v$ vuol dire «il vettore $v$ moltiplicato per il numero $\lambda$». Il numero esce fuori.
- L'assioma (3) è la regola dell'ordine. Ha un nome: **simmetria**.
- Nell'ultima riga il simbolo $\in$ si legge «appartiene a». La riga dice che le regole devono valere per tutti i vettori dello spazio e per tutti i numeri reali, non solo in qualche caso fortunato.

> [!TRAPPOLA] Prodotto scalare e prodotto per scalare
> I due nomi si assomigliano, ma sono due operazioni diverse.
>
> - Il **prodotto per uno scalare** (lezione L05) prende un numero e un vettore e restituisce un **vettore**: $3 \cdot (1, 2) = (3, 6)$.
> - Il **prodotto scalare** prende due vettori e restituisce un **numero**: $\langle (1, 2), (3, 6)\rangle = 3 + 12 = 15$.

### Le stesse regole valgono nel secondo posto

Gli assiomi (1) e (2) parlano solo del **primo** vettore. Ma le stesse due regole valgono anche per il **secondo**.

Controllo con la spesa. Raddoppiano i prezzi: da $(4, 1)$ a $(8, 2)$. Le quantità restano $(2, 3)$. Il conto diventa $2 \cdot 8 + 3 \cdot 2 = 22$ euro: il doppio di 11.

Il motivo è la simmetria. Scambi i due vettori, così quello che stava al secondo posto passa al primo. Lì usi la regola che conosci già. Poi scambi di nuovo.

Le dispense numerano (4) e (5) queste due regole «a destra».

$$\text{(4)}\quad \langle v, w + w'\rangle = \langle v, w\rangle + \langle v, w'\rangle \qquad\qquad \text{(5)}\quad \langle v, \lambda w\rangle = \lambda\langle v, w\rangle$$

> [!DIM] le regole (4) e (5), un passo alla volta
> **Regola (4).**
>
> 1. Parto da $\langle v, w + w'\rangle$. Per la simmetria (3) scambio i due posti e ottengo $\langle w + w', v\rangle$.
> 2. Ora la somma sta nel primo posto. Per l'assioma (1) la spezzo: $\langle w, v\rangle + \langle w', v\rangle$.
> 3. Per la simmetria (3) scambio di nuovo i posti in tutti e due i pezzi: $\langle v, w\rangle + \langle v, w'\rangle$.
>
> **Regola (5).**
>
> 1. Parto da $\langle v, \lambda w\rangle$. Per la simmetria (3) scambio i due posti: $\langle \lambda w, v\rangle$.
> 2. Ora il numero sta nel primo posto. Per l'assioma (2) esce fuori: $\lambda\langle w, v\rangle$.
> 3. Per la simmetria (3) scambio di nuovo: $\lambda\langle v, w\rangle$.

Due parole da conoscere, perché le dispense le usano spesso.

- Le regole (1), (2), (4) e (5) insieme dicono che il prodotto è **bilineare**. «Bi» vuol dire «due volte»: le regole della somma e del multiplo valgono due volte, nel primo posto e nel secondo.
- La regola (3) dice che il prodotto è **simmetrico**.

Quindi, in breve: un prodotto scalare è una regola **bilineare e simmetrica** che da due vettori dà un numero.

### Con il vettore nullo viene sempre zero

Il **vettore nullo** è il vettore fatto di soli zeri, per esempio $(0, 0)$. Si scrive $0$, come il numero zero: dal contesto si capisce quale dei due è.

Nel conto della spesa: se non compri niente, non paghi niente. Le quantità sono $(0, 0)$ e il totale è $0 \cdot 4 + 0 \cdot 1 = 0$.

Le dispense notano che succede con **ogni** prodotto scalare, qualunque sia il vettore $v$.

$$\langle v, 0\rangle = 0$$

Il perché sta in tre righe.

1. Il vettore nullo sommato a sé stesso dà ancora il vettore nullo. Quindi al posto di $0$ posso scrivere $0 + 0$.
2. Per la regola (4) la somma nel secondo posto si spezza:
   $$\langle v, 0\rangle = \langle v, 0 + 0\rangle = \langle v, 0\rangle + \langle v, 0\rangle$$
3. Chiama $a$ il numero $\langle v, 0\rangle$. La riga sopra dice che $a = a + a$. Togli $a$ da tutti e due i lati: resta $0 = a$.

Per la simmetria vale anche con i posti scambiati: $\langle 0, v\rangle = 0$.

A che cosa serve? A scartare in fretta le formule che **non** sono prodotti scalari. Se una formula dà un numero diverso da zero quando uno dei due vettori è nullo, non è un prodotto scalare.

### Un nome per il prodotto

A volte nello stesso discorso ci sono più prodotti scalari diversi, e le parentesi a punta non bastano per distinguerli. Allora si dà un nome al prodotto: una lettera, di solito $g$. Al posto di $\langle v, w\rangle$ si scrive $g(v, w)$, che si legge «gi di $v$ e $w$».

Le dispense scrivono $g : V \times V \to \R$. Si legge «$g$ va da $V$ per $V$ a $\R$»: la macchina $g$ prende una coppia di vettori e restituisce un numero reale. La freccia corta $\to$ vuol dire lo stesso della freccia lunga di prima: «va in».

> [!OLTRE] · il quadrato di una somma, con i vettori
> Con i numeri il quadrato di una somma si apre così: $(a + b)^2 = a^2 + 2ab + b^2$. Con un prodotto scalare succede la stessa cosa, se al posto del quadrato metti il prodotto di un vettore con sé stesso.
> $$\langle v + w, v + w\rangle = \langle v, v\rangle + 2\langle v, w\rangle + \langle w, w\rangle$$
> Il motivo: la somma si spezza nel primo posto e poi nel secondo, e vengono quattro pezzi. I due pezzi misti sono uguali per la simmetria. I passaggi sono nella lezione L20, dove la formula serve per la disuguaglianza triangolare.

::: prova Sai che $\langle v, w\rangle = 5$ e che $\langle v', w\rangle = -2$. Quanto valgono $\langle 2v, w\rangle$, $\langle w, v\rangle$ e $\langle v + v', w\rangle$?
$\langle 2v, w\rangle = 2 \cdot 5 = 10$: il numero 2 esce fuori (assioma 2).

$\langle w, v\rangle = 5$: l'ordine non conta (assioma 3).

$\langle v + v', w\rangle = 5 + (-2) = 3$: la somma nel primo posto si spezza (assioma 1).
:::

::: prova Che differenza c'è tra $2 \cdot (1, 3)$ e $\langle (2, 0), (1, 3)\rangle$?
Il primo è un prodotto per uno scalare e dà un vettore: $(2, 6)$.

Il secondo è un prodotto scalare e dà un numero: $2 \cdot 1 + 0 \cdot 3 = 2$.
:::

> [!RICORDA]
> - Un prodotto scalare è una regola che da due vettori dà un numero. È **bilineare** (somme e multipli si spezzano, in tutti e due i posti) e **simmetrica** (l'ordine non conta).
> - Si scrive $\langle v, w\rangle$ oppure, con un nome, $g(v, w)$.
> - Con il vettore nullo il risultato è sempre zero.
> - Non confonderlo con il prodotto per uno scalare, che dà un vettore.

## Questa formula è un prodotto scalare? (p. 96)

Il conto della spesa non è l'unico prodotto scalare.

Cambiando la formula si ottengono altre regole che da due vettori danno un numero. Alcune rispettano i tre assiomi, altre no. In questa sezione impari a distinguerle: è una domanda possibile del quiz d'esame.

### I nomi dei numeri dentro un vettore

Per scrivere una formula che valga per tutti i vettori servono dei nomi per i numeri che stanno dentro il vettore. Un vettore di $\R^2$ si scrive così.

$$x = (x_1, x_2)$$

Il numerino in basso si chiama **indice** e dice il posto. La scrittura $x_1$ si legge «x con uno» ed è il primo numero del vettore. La scrittura $x_2$ si legge «x con due» ed è il secondo. Per il vettore $(5, 7)$ il primo numero è 5 e il secondo è 7.

Un secondo vettore si scrive $y = (y_1, y_2)$.

Con questi nomi il conto della spesa diventa una formula.

$$\langle x, y\rangle = x_1y_1 + x_2y_2$$

Si legge: «il primo di $x$ per il primo di $y$, più il secondo di $x$ per il secondo di $y$». Due lettere attaccate, come $x_1y_1$, sono moltiplicate tra loro: il puntino non si scrive.

### Una formula che funziona

Cambiamo un po' la formula del conto della spesa. Moltiplichiamo il primo pezzo per 2 e il secondo per 3. Il risultato lo chiamiamo $g$.

$$g(x, y) = 2x_1y_1 + 3x_2y_2$$

È come un conto in cui il primo pezzo «pesa» il doppio e il secondo il triplo. Facciamo un conto di prova, con i vettori $(1, 1)$ e $(1, -1)$.

$$g\big((1, 1), (1, -1)\big) = 2 \cdot 1 \cdot 1 + 3 \cdot 1 \cdot (-1) = 2 - 3 = -1$$

È un prodotto scalare? Per dirlo bisogna controllare i tre assiomi. Il controllo completo è nel riquadro.

> [!ESEMPIO] Una formula che funziona: $g(x, y) = 2x_1y_1 + 3x_2y_2$ su $\R^2$
> **Assioma (3): l'ordine non conta.** Scambio $x$ e $y$. La formula diventa $2y_1x_1 + 3y_2x_2$. È lo stesso numero di prima, perché nei prodotti tra numeri l'ordine non conta: $y_1x_1 = x_1y_1$.
>
> **Assioma (2): un numero esce fuori.** Al posto di $x$ metto il vettore $\lambda x$, cioè $(\lambda x_1, \lambda x_2)$.
> $$g(\lambda x, y) = 2\lambda x_1y_1 + 3\lambda x_2y_2$$
> Il numero $\lambda$ compare in tutti e due i pezzi, quindi lo raccolgo.
> $$g(\lambda x, y) = \lambda\,(2x_1y_1 + 3x_2y_2) = \lambda\, g(x, y)$$
>
> **Assioma (1): una somma si spezza.** Al posto di $x$ metto la somma $x + x'$, dove $x' = (x_1', x_2')$ è un altro vettore. I numeri della somma sono $x_1 + x_1'$ e $x_2 + x_2'$.
> $$g(x + x', y) = 2(x_1 + x_1')y_1 + 3(x_2 + x_2')y_2$$
> Apro le parentesi.
> $$g(x + x', y) = 2x_1y_1 + 2x_1'y_1 + 3x_2y_2 + 3x_2'y_2$$
> Metto insieme i pezzi senza apostrofo e, a parte, quelli con l'apostrofo.
> $$g(x + x', y) = (2x_1y_1 + 3x_2y_2) + (2x_1'y_1 + 3x_2'y_2) = g(x, y) + g(x', y)$$
>
> I tre assiomi valgono: $g$ è un prodotto scalare.

Che cosa ha fatto funzionare tutto? Ogni pezzo della formula ha la stessa forma: un numero fisso, per **un** numero di $x$, per **un** numero di $y$. È la forma giusta. In più, scambiando $x$ con $y$ la formula non cambia.

### Tre formule che non funzionano

Per dire che una formula **non** è un prodotto scalare basta **un** esempio con i numeri in cui **una** regola fallisce.

Negli esempi tornano utili due vettori speciali di $\R^2$.

$$e_1 = (1, 0) \qquad\qquad e_2 = (0, 1)$$

Si leggono «e con uno» ed «e con due». Sulla mappa il primo è un passo a destra, il secondo è un passo in su. Insieme formano la **base canonica** di $\R^2$ (lezione L07).

> [!ESEMPIO] Tre formule che non funzionano
> **Prima formula: $g(x, y) = x_1y_2$.** Non è simmetrica.
>
> - Metto $x = e_1 = (1, 0)$ e $y = e_2 = (0, 1)$. Allora $x_1 = 1$ e $y_2 = 1$, quindi $g(e_1, e_2) = 1 \cdot 1 = 1$.
> - Scambio i posti: $x = e_2 = (0, 1)$ e $y = e_1 = (1, 0)$. Allora $x_1 = 0$ e $y_2 = 0$, quindi $g(e_2, e_1) = 0 \cdot 0 = 0$.
>
> I due risultati sono diversi: l'assioma (3) fallisce.
>
> **Seconda formula: $g(x, y) = x_1y_1 + x_2y_2 + 1$.** Non dà zero con il vettore nullo.
>
> - Metto il vettore nullo al posto di $x$ e di $y$: $g(0, 0) = 0 + 0 + 1 = 1$.
>
> Un prodotto scalare con il vettore nullo dà sempre 0. Qui dà 1, quindi la formula non è bilineare.
>
> **Terza formula: $g(x, y) = x_1^2y_1^2$.** Un numero non esce fuori. Il piccolo 2 in alto è il quadrato: $x_1^2$ vuol dire $x_1 \cdot x_1$.
>
> - Con $x = e_1$ e $y = e_1$: $g(e_1, e_1) = 1^2 \cdot 1^2 = 1$.
> - Raddoppio il primo vettore: $2e_1 = (2, 0)$. Allora $g(2e_1, e_1) = 2^2 \cdot 1^2 = 4$.
>
> Per l'assioma (2) doveva venire il doppio di 1, cioè 2. È venuto 4: l'assioma (2) fallisce.

> [!METODO] Decidere se una formula è un prodotto scalare
> 1. Guarda ogni pezzo della formula. Deve essere fatto così: un numero fisso, per **un** numero di $x$, per **un** numero di $y$. Un pezzo con una $x$ da sola, un numero da solo come $+1$, un pezzo con due $x$ o con un quadrato dicono che la formula non è bilineare.
> 2. Controlla la simmetria: il numero davanti a $x_1y_2$ deve essere uguale al numero davanti a $x_2y_1$.
> 3. Se un controllo fallisce, scrivi un esempio con i numeri che lo mostra. Quasi sempre bastano i due vettori della base canonica e il vettore nullo.

::: prova La formula $g(x, y) = x_1y_1 + 5$ è un prodotto scalare?
No. Con il vettore nullo al posto di $x$ e di $y$ viene $g(0, 0) = 0 \cdot 0 + 5 = 5$. Un prodotto scalare deve dare 0.
:::

::: prova La formula $g(x, y) = 4x_1y_1 + x_2y_2$ è un prodotto scalare? Quanto vale per $x = (1, 2)$ e $y = (3, 1)$?
Sì. Ogni pezzo è un numero fisso per un numero di $x$ per un numero di $y$. Scambiando $x$ con $y$ la formula non cambia.

Il valore: $4 \cdot 1 \cdot 3 + 2 \cdot 1 = 12 + 2 = 14$.
:::

> [!RICORDA]
> - Una formula è un prodotto scalare se ogni pezzo è «numero fisso per un numero di $x$ per un numero di $y$» e se, scambiando $x$ con $y$, non cambia.
> - Per dire di no basta un esempio con i numeri.
> - Primo controllo veloce: con il vettore nullo deve venire 0.

## Due parole nuove: degenere e definito positivo (p. 96)

Non tutti i prodotti scalari si comportano bene come il conto della spesa.

Le dispense danno un nome a un pregio e a un difetto. Il pregio si chiama «definito positivo», il difetto «degenere». All'esame bisogna saperli distinguere.

### Il pregio: un vettore con sé stesso dà un numero positivo

Prendi un vettore e fai il conto della spesa del vettore **con sé stesso**. Per esempio con il vettore $v = (3, 4)$.

$$\langle v, v\rangle = 3 \cdot 3 + 4 \cdot 4 = 9 + 16 = 25$$

Ogni numero del vettore viene moltiplicato per sé stesso: esce una somma di quadrati. Un quadrato non è mai negativo. Quindi il risultato non è mai negativo, ed è zero solo quando tutti i numeri del vettore sono zero.

Questo risultato ha un significato geometrico: è il quadrato della **lunghezza** della freccia.

> [!RIPASSO] il teorema di Pitagora
> In un triangolo con un angolo retto, i due lati corti si chiamano *cateti* e il lato lungo si chiama *ipotenusa*. Il quadrato dell'ipotenusa è la somma dei quadrati dei due cateti.
>
> Il vettore $(3, 4)$ è «3 passi a destra e 4 in su». La freccia è l'ipotenusa di un triangolo con i cateti lunghi 3 e 4. Il quadrato della sua lunghezza è $3^2 + 4^2 = 25$, quindi la lunghezza è $\sqrt{25} = 5$.

Guarda la figura: i due cateti sono i passi a destra e i passi in su, la freccia è l'ipotenusa.

```grafico
titolo: Il vettore $(3, 4)$ è lungo 5. Con sé stesso dà $9 + 16 = 25$, il quadrato di 5
x: -1 5
y: -1 5
segmento: 0 0 3 0 | blu | spesso | $3$ | s
segmento: 3 0 3 4 | blu | spesso | $4$ | e
vettore: 3 4 | accento | spesso | $v = (3, 4)$ | no
```

Un prodotto scalare con questo pregio si chiama **definito positivo**: ogni vettore diverso dal vettore nullo, moltiplicato per sé stesso, dà un numero positivo. Sono i prodotti scalari con cui le lunghezze hanno senso. La lezione L20 parte da qui.

### Il difetto: un vettore che il prodotto non vede

Ora un prodotto difettoso. Su $\R^2$ prendi questa formula.

$$g(x, y) = x_1y_1$$

Usa solo i primi numeri dei due vettori e ignora i secondi. È un prodotto scalare: ha un solo pezzo, della forma giusta, e scambiando $x$ con $y$ non cambia.

Guarda che cosa succede al vettore $e_2 = (0, 1)$, che ha il primo numero uguale a zero. Proviamo a moltiplicarlo con quattro vettori diversi.

| Secondo vettore | Conto | Risultato |
|---|---|--:|
| $(1, 0)$ | $0 \cdot 1$ | $0$ |
| $(5, 2)$ | $0 \cdot 5$ | $0$ |
| $(-3, 7)$ | $0 \cdot (-3)$ | $0$ |
| $(0, 1)$, cioè $e_2$ stesso | $0 \cdot 0$ | $0$ |

Viene sempre zero, con qualunque vettore. Per questo prodotto il vettore $e_2$ è invisibile: si comporta come il vettore nullo, anche se non lo è.

Un prodotto scalare che ha un vettore così si chiama **degenere**.

> [!IDEA]
> **Definito positivo**: ogni vettore non nullo, moltiplicato per sé stesso, dà un numero positivo. **Degenere**: c'è un vettore non nullo che il prodotto non vede, perché dà zero con tutti.

Le dispense lo scrivono così.

> [!DEF] 19.2 · Degenere, definito positivo
> Un prodotto scalare su $V$ è:
> - **degenere** se esiste $v \neq 0$ tale che $\langle v, w\rangle = 0$ per ogni $w \in V$;
> - **definito positivo** se $\langle v, v\rangle > 0$ per ogni $v \in V$ non nullo.

**Come si legge.**

- $v \neq 0$ si legge «$v$ diverso da zero». Vuol dire che $v$ non è il vettore nullo.
- La riga di «degenere» dice: esiste un vettore non nullo $v$ per cui $\langle v, w\rangle$ fa zero, qualunque sia il vettore $w$. Fai attenzione a due parole. **Esiste** un $v$: ne basta uno. **Per ogni** $w$: deve dare zero con tutti i vettori, compreso sé stesso.
- La riga di «definito positivo» dice: il prodotto di $v$ con sé stesso è maggiore di zero. Il simbolo $>$ si legge «maggiore di». Deve valere per **tutti** i vettori tranne quello nullo. Per il vettore nullo viene sempre zero.
- Un prodotto che non è degenere si chiama **non degenere**. Vuol dire che nessun vettore è invisibile: per ogni vettore non nullo c'è almeno un vettore con cui il prodotto non fa zero.

Le due definizioni guardano cose diverse. «Degenere» guarda il prodotto di un vettore con **tutti gli altri**. «Definito positivo» guarda solo il prodotto di ogni vettore **con sé stesso**.

### Definito positivo è più forte di non degenere

Le due proprietà sono legate: un prodotto definito positivo di sicuro non è degenere.

Il motivo a parole. Un vettore invisibile dà zero con tutti, quindi anche con sé stesso. Ma in un prodotto definito positivo nessun vettore non nullo dà zero con sé stesso. Quindi di vettori invisibili non ce ne sono.

> [!PROP] 19.3
> Un prodotto scalare definito positivo non è degenere.

> [!DIM] la spiegazione delle dispense, un passo alla volta
> È un ragionamento per assurdo (lezione L01): si fa finta che sia vero il contrario e si arriva a una cosa impossibile.
>
> 1. Faccio finta che il prodotto sia definito positivo **e anche** degenere.
> 2. Siccome è degenere, esiste un vettore $v \neq 0$ che dà zero con **ogni** vettore $w$.
> 3. Tra tutti i vettori $w$ posso scegliere proprio $v$. Quindi $\langle v, v\rangle = 0$.
> 4. Ma il prodotto è definito positivo e $v$ non è nullo, quindi $\langle v, v\rangle > 0$.
> 5. Lo stesso numero non può essere uguale a zero e insieme maggiore di zero. L'ipotesi del passo 1 è impossibile: il prodotto non è degenere.

### Il contrario non vale: tre prodotti a confronto

Attenzione: il contrario è falso. Un prodotto può essere non degenere senza essere definito positivo. Il riquadro mette a confronto tre prodotti su $\R^2$.

> [!ESEMPIO] Tre prodotti scalari su $\R^2$ a confronto
> **Primo prodotto: $g(x, y) = x_1y_1 + x_2y_2$**, il conto della spesa. È **definito positivo**.
>
> Un vettore con sé stesso dà $g(x, x) = x_1^2 + x_2^2$: una somma di due quadrati. Se il vettore non è nullo, almeno uno dei suoi due numeri non è zero, e il suo quadrato è positivo. Per esempio $g\big((3, 4), (3, 4)\big) = 9 + 16 = 25$.
>
> **Secondo prodotto: $g(x, y) = x_1y_1$.** È **degenere**.
>
> Il vettore $e_2 = (0, 1)$ non è nullo. Il suo primo numero è 0, quindi $g(e_2, w) = 0 \cdot w_1 = 0$ per ogni vettore $w$.
>
> **Terzo prodotto: $g(x, y) = x_1y_1 - x_2y_2$.** Non è degenere, ma **non è definito positivo**.
>
> Non è definito positivo, perché il vettore $e_2$ con sé stesso dà un numero negativo:
> $$g(e_2, e_2) = 0 \cdot 0 - 1 \cdot 1 = -1$$
> Non è degenere, perché nessun vettore non nullo è invisibile. Prendo un vettore non nullo qualsiasi $v = (a, b)$. Lo moltiplico per il vettore $w = (a, -b)$, che ha il secondo numero cambiato di segno.
> $$g(v, w) = a \cdot a - b \cdot (-b) = a^2 + b^2$$
> È una somma di due quadrati, e almeno uno tra $a$ e $b$ non è zero. Quindi il risultato è positivo: non è zero. Con i numeri: per $v = (2, 3)$ prendo $w = (2, -3)$ e ottengo $4 + 9 = 13$.

> [!TRAPPOLA] Zero con sé stesso non vuol dire degenere
> Nel terzo prodotto il vettore $v = (1, 1)$ dà zero con sé stesso: $g(v, v) = 1 - 1 = 0$. Eppure il prodotto **non** è degenere.
>
> Infatti $v$ non dà zero con tutti. Con il vettore $(1, 0)$ dà $1 \cdot 1 - 1 \cdot 0 = 1$.
>
> Per essere degenere serve un vettore che dà zero con **tutti**, non solo con sé stesso. Il libro di Martelli chiama **isotropo** un vettore che dà zero con sé stesso.

Tutti i prodotti visti finora, in una tabella.

| Prodotto su $\R^2$ | Degenere? | Definito positivo? | Motivo in una riga |
|---|---|---|---|
| $x_1y_1 + x_2y_2$ | no | sì | un vettore con sé stesso dà $x_1^2 + x_2^2$ |
| $2x_1y_1 + 3x_2y_2$ | no | sì | un vettore con sé stesso dà $2x_1^2 + 3x_2^2$ |
| $x_1y_1$ | sì | no | $e_2$ dà zero con tutti |
| $x_1y_1 - x_2y_2$ | no | no | $e_2$ con sé stesso dà $-1$ |

::: prova Il prodotto $g(x, y) = x_2y_2$ su $\R^2$ è degenere? Quale vettore non vede?
Sì. Usa solo i secondi numeri, quindi non vede il vettore $e_1 = (1, 0)$, che ha il secondo numero uguale a 0: $g(e_1, w) = 0 \cdot w_2 = 0$ per ogni vettore $w$.
:::

::: prova Nel prodotto $g(x, y) = x_1y_1 - x_2y_2$, quanto vale $g(v, v)$ per $v = (1, 2)$? Che cosa ne ricavi?
$1 \cdot 1 - 2 \cdot 2 = 1 - 4 = -3$.

È negativo, quindi il prodotto non è definito positivo.
:::

> [!RICORDA]
> - **Definito positivo**: ogni vettore non nullo con sé stesso dà un numero positivo.
> - **Degenere**: c'è un vettore non nullo che dà zero con tutti.
> - Se un prodotto è definito positivo, allora non è degenere. Il contrario è falso: $x_1y_1 - x_2y_2$ non è degenere e non è definito positivo.

## Un prodotto scalare tra polinomi (p. 97)

Un prodotto scalare non esiste solo tra liste di numeri.

La definizione chiede soltanto uno spazio in cui si possa sommare e moltiplicare per un numero. I polinomi formano uno spazio così (lezione L05). Quindi anche tra due polinomi si può costruire un prodotto scalare. All'esame capita: per esempio nella domanda 7 dell'appello del 24/01/2024.

Qui l'immagine delle frecce non funziona più: un polinomio non si disegna come uno spostamento sulla mappa. Le tre regole però restano, e bastano quelle.

> [!RIPASSO] polinomi e valore in un punto
> Un **polinomio** è un'espressione come $1 + 2x + x^2$: numeri fissi, i *coefficienti*, moltiplicati per potenze di una lettera $x$ (lezione L04). Il **grado** è l'esponente più alto: qui è 2.
>
> Un polinomio è una macchina: metti un numero al posto di $x$ ed esce un numero. Il numero che esce si chiama **valore** del polinomio in quel punto. Se il polinomio si chiama $p$, il suo valore in 2 si scrive $p(2)$ e si legge «pi di due».
>
> Per il polinomio $p(x) = 1 + 2x + x^2$:
>
> - $p(0) = 1 + 2 \cdot 0 + 0^2 = 1$;
> - $p(1) = 1 + 2 \cdot 1 + 1^2 = 4$;
> - $p(2) = 1 + 2 \cdot 2 + 2^2 = 9$.
>
> Una **radice** di un polinomio è un numero in cui il valore è zero. Il **polinomio nullo** è quello che vale zero in ogni punto: è il vettore nullo dello spazio dei polinomi.
>
> La scrittura $\R_2[x]$ si legge «erre due di x». È lo spazio dei polinomi di grado al massimo 2 con i coefficienti reali, cioè dei polinomi $a + bx + cx^2$. Le dispense scrivono «grado $\le 2$»: il simbolo $\le$ si legge «minore o uguale». Una base di questo spazio è $\{1, x, x^2\}$ (lezione L07).

### L'idea: una tabella di valori, poi il conto della spesa

L'idea delle dispense è questa. Scegli tre punti, per esempio 0, 1 e 2. Di ogni polinomio calcoli i valori in questi tre punti: così ogni polinomio diventa una lista di tre numeri. Poi fai il conto della spesa tra le due liste.

Proviamo con i polinomi $p(x) = x$ e $q(x) = x^2$.

| | in 0 | in 1 | in 2 |
|---|--:|--:|--:|
| valori di $p(x) = x$ | $0$ | $1$ | $2$ |
| valori di $q(x) = x^2$ | $0$ | $1$ | $4$ |
| prodotto dei due valori | $0 \cdot 0 = 0$ | $1 \cdot 1 = 1$ | $2 \cdot 4 = 8$ |

Somma dell'ultima riga: $0 + 1 + 8 = 9$. Quindi il prodotto scalare dei due polinomi è 9.

> [!IDEA]
> Per moltiplicare due polinomi con un prodotto scalare di questo tipo: scrivi la tabella dei valori, moltiplica i valori punto per punto, somma.

### Tre punti: un prodotto definito positivo

Con i tre punti 0, 1 e 2 la formula del prodotto è questa.

$$\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$$

A parole: i valori dei due polinomi in 0 moltiplicati tra loro, più quelli in 1, più quelli in 2.

**È un prodotto scalare.** Scambiando i due polinomi non cambia niente, perché in ogni pezzo si moltiplicano due numeri. Somme e multipli si spezzano, perché il valore di una somma di polinomi è la somma dei valori, e il valore di un multiplo è il multiplo del valore. Per esempio $x + 1$ in 2 vale 3, cioè $2 + 1$.

**È definito positivo.** Un polinomio con sé stesso dà la somma dei quadrati dei suoi tre valori.

$$\langle p, p\rangle = p(0)^2 + p(1)^2 + p(2)^2$$

Per esempio il polinomio $1 + x$ vale 1, 2 e 3 nei tre punti. Con sé stesso dà $1 + 4 + 9 = 14$.

Una somma di quadrati non è mai negativa. Può fare zero solo se i tre valori sono tutti zero, cioè se il polinomio ha **tre** radici diverse: 0, 1 e 2. Ma un polinomio non nullo di grado al massimo 2 ha al massimo due radici (Teorema 4.6, lezione L04). Quindi solo il polinomio nullo dà zero con sé stesso.

### Due punti soli: un prodotto degenere

Togliamo il terzo punto.

$$\langle p, q\rangle = p(0)q(0) + p(1)q(1)$$

Il ragionamento di prima non funziona più. Con due punti soli, un polinomio di grado 2 può valere zero in tutti e due. Eccone uno.

$$p(x) = x(1 - x) = x - x^2$$

In 0 vale $0 \cdot 1 = 0$. In 1 vale $1 \cdot 0 = 0$. Non è il polinomio nullo: in 2 vale $2 \cdot (-1) = -2$.

Con questo polinomio il prodotto fa zero qualunque sia l'altro polinomio $q$.

$$\langle p, q\rangle = 0 \cdot q(0) + 0 \cdot q(1) = 0$$

Il prodotto non vede il polinomio $x - x^2$. Quindi è **degenere**.

### Un segno meno: non degenere, ma non definito positivo

Rimettiamo il terzo punto, ma con il segno meno.

$$\langle p, q\rangle = p(0)q(0) + p(1)q(1) - p(2)q(2)$$

Prendi il polinomio $p(x) = x - 1$. I suoi valori nei tre punti sono $-1$, $0$ e $1$. Con sé stesso dà zero.

$$\langle p, p\rangle = (-1)^2 + 0^2 - 1^2 = 1 + 0 - 1 = 0$$

Un polinomio non nullo che con sé stesso dà zero: il prodotto **non è definito positivo**. Con altri polinomi il risultato cambia segno.

- Il polinomio $1$, che vale sempre 1, con sé stesso dà $1 + 1 - 1 = 1$: positivo.
- Il polinomio $x$ ha valori 0, 1 e 2. Con sé stesso dà $0 + 1 - 4 = -3$: negativo.

Le dispense dicono anche che questo prodotto **non è degenere**, senza dimostrarlo. Il motivo è nel riquadro qui sotto.

> [!APPROFONDIMENTO] perché il terzo prodotto non è degenere
> L'idea: costruire tre polinomi «interruttore». Ognuno è acceso, cioè vale 1, in uno solo dei tre punti. Negli altri due è spento, cioè vale 0.
> $$q_0 = \frac{(x - 1)(x - 2)}{2} \qquad q_1 = 2x - x^2 \qquad q_2 = \frac{x(x - 1)}{2}$$
>
> | | in 0 | in 1 | in 2 |
> |---|--:|--:|--:|
> | $q_0$ | $1$ | $0$ | $0$ |
> | $q_1$ | $0$ | $1$ | $0$ |
> | $q_2$ | $0$ | $0$ | $1$ |
>
> Controllo della prima riga. In 0 il polinomio $q_0$ vale $\frac{(-1) \cdot (-2)}{2} = 1$. In 1 vale 0, perché c'è il fattore $x - 1$. In 2 vale 0, perché c'è il fattore $x - 2$.
>
> Se moltiplichi un polinomio qualsiasi $p$ per un interruttore, del prodotto resta un solo pezzo.
> $$\langle p, q_0\rangle = p(0) \qquad \langle p, q_1\rangle = p(1) \qquad \langle p, q_2\rangle = -p(2)$$
> Ora prendi un polinomio $p$ che dà zero con **tutti** i polinomi. Allora dà zero anche con i tre interruttori. Quindi $p(0) = 0$, $p(1) = 0$ e $p(2) = 0$: ha tre radici. Un polinomio di grado al massimo 2 con tre radici è il polinomio nullo.
>
> Quindi nessun polinomio non nullo è invisibile: il prodotto non è degenere.

### Come lo scrivono le dispense

Le dispense riassumono i tre casi in un solo esempio.

> [!ESEMPIO] 19.4 · Tre prodotti scalari su $\R_2[x]$
> Sono i tre prodotti appena visti, tutti sullo spazio $\R_2[x]$ dei polinomi di grado al massimo 2.
>
> | Il prodotto $\langle p, q\rangle$ | Che cosa è | Il motivo delle dispense |
> |---|---|---|
> | $p(0)q(0) + p(1)q(1) + p(2)q(2)$ | definito positivo | un polinomio non nullo non può valere zero nei tre punti 0, 1 e 2 |
> | $p(0)q(0) + p(1)q(1)$ | degenere | il polinomio $x(1 - x)$ dà zero con ogni polinomio |
> | $p(0)q(0) + p(1)q(1) - p(2)q(2)$ | non degenere, ma non definito positivo | il polinomio $x - 1$ con sé stesso dà $(-1)^2 - 1^2 = 0$ |
>
> Nell'ultima riga le dispense non scrivono il pezzo di mezzo, perché il polinomio $x - 1$ vale zero in 1.

::: prova Con il primo prodotto (punti 0, 1 e 2) calcola $\langle 1, x\rangle$. Il polinomio $1$ è quello che vale sempre 1.
Valori di $1$ nei tre punti: 1, 1, 1. Valori di $x$: 0, 1, 2.

Prodotti punto per punto: $1 \cdot 0 = 0$, poi $1 \cdot 1 = 1$, poi $1 \cdot 2 = 2$. Somma: $0 + 1 + 2 = 3$.
:::

::: prova Con il secondo prodotto (punti 0 e 1) quanto vale $\langle x - x^2,\ 1\rangle$?
Il polinomio $x - x^2$ vale 0 in 0 e vale 0 in 1. Quindi il prodotto è $0 \cdot 1 + 0 \cdot 1 = 0$.

Con questo polinomio viene zero qualunque sia il secondo.
:::

> [!RICORDA]
> - Un prodotto scalare tra polinomi: calcola i valori dei due polinomi negli stessi punti, moltiplica i valori punto per punto, somma.
> - Su $\R_2[x]$: con tre punti e tutti i segni più è definito positivo. Con due punti soli è degenere. Con un segno meno non è definito positivo.
> - Prima di ogni conto scrivi la tabella dei valori.

## Il conto della spesa ha un nome: prodotto euclideo (p. 97)

Il conto della spesa dell'inizio ha un nome ufficiale: prodotto scalare euclideo.

«Euclideo» viene da Euclide, il matematico greco della geometria che si studia a scuola. È il prodotto scalare «normale» dei vettori fatti di numeri. Quando un esercizio non dice quale prodotto scalare usare, è questo.

Finora l'hai usato con vettori di due numeri. Con più numeri la regola è la stessa: moltiplica i numeri che stanno nello stesso posto e somma tutto.

> [!ESEMPIO] Il prodotto euclideo con due, tre e quattro numeri
> **In $\R^2$**, l'esempio delle dispense:
> $$\langle (1, 3), (-2, 1)\rangle = 1 \cdot (-2) + 3 \cdot 1 = -2 + 3 = 1$$
> **In $\R^3$:**
> $$\langle (1, 2, 3), (4, -5, 6)\rangle = 1 \cdot 4 + 2 \cdot (-5) + 3 \cdot 6 = 4 - 10 + 18 = 12$$
> **In $\R^4$:**
> $$\langle (1, 0, -1, 2), (3, 5, 1, 1)\rangle = 1 \cdot 3 + 0 \cdot 5 + (-1) \cdot 1 + 2 \cdot 1 = 3 + 0 - 1 + 2 = 4$$

### Tre modi di scrivere lo stesso conto

Le dispense scrivono il prodotto euclideo in tre modi. Dicono tutti la stessa cosa.

**Primo modo: per esteso.** Un vettore con $n$ numeri si scrive $x = (x_1, \dots, x_n)$. I tre puntini vogliono dire «e avanti così»: il primo numero si chiama $x_1$, l'ultimo $x_n$.

$$\langle x, y\rangle = x_1y_1 + x_2y_2 + \dots + x_ny_n$$

**Secondo modo: con il simbolo di somma.** Serve un simbolo che forse non ricordi.

> [!RIPASSO] il simbolo di somma
> La lettera greca $\sum$ è una sigma maiuscola e si legge «somma». Serve a scrivere in breve una somma di tanti pezzi fatti tutti nello stesso modo.
> $$\sum_{i=1}^{3} x_iy_i = x_1y_1 + x_2y_2 + x_3y_3$$
> Si legge «somma, per $i$ da 1 a 3, di $x_i$ per $y_i$». La lettera $i$ è un contatore. Parte dal numero scritto sotto il simbolo, arriva a quello scritto sopra, e per ogni suo valore c'è un pezzo della somma.

**Terzo modo: riga per colonna.** Serve un ripasso sulle matrici.

> [!RIPASSO] vettori in colonna, trasposta, riga per colonna
> Nelle dispense un vettore di $\R^n$ è scritto **in colonna**, cioè in verticale.
> $$x = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$$
> La **trasposta** di $x$ è lo stesso vettore scritto **in riga**, cioè in orizzontale. Si scrive ${}^tx$, con una piccola $t$ in alto a sinistra, e si legge «$x$ trasposto» (lezione L08).
> $${}^tx = \begin{pmatrix} 1 & 3 \end{pmatrix}$$
> Una riga si può moltiplicare per una colonna con lo stesso numero di posti. Il risultato è un numero: primo per primo, più secondo per secondo, e avanti così.
> $$\begin{pmatrix} 1 & 3 \end{pmatrix}\begin{pmatrix} -2 \\ 1 \end{pmatrix} = 1 \cdot (-2) + 3 \cdot 1 = 1$$
> È proprio il conto della spesa.

Quindi il prodotto euclideo di due vettori è la riga del primo moltiplicata per la colonna del secondo. Si scrive ${}^tx\,y$.

Le dispense mettono insieme il terzo modo e il secondo.

> [!DEF] 19.5 · Prodotto scalare euclideo
> Il **prodotto scalare euclideo** su $\R^n$ è definito come
> $$\langle x, y\rangle = {}^tx\,y = \sum_{i=1}^n x_iy_i.$$

**Come si legge.** «Il prodotto scalare di $x$ e $y$ è uguale a $x$ trasposto per $y$, cioè alla somma, per $i$ da 1 a $n$, di $x_i$ per $y_i$.» Il primo uguale è il modo «riga per colonna». Il secondo uguale è il modo con il simbolo di somma. La lettera $n$ è il numero di posti dei due vettori.

In questi appunti, per occupare meno spazio, un vettore colonna è scritto spesso in riga, con le parentesi tonde e le virgole: $(1, 3)$. Negli appelli trovi anche la scrittura ${}^t(1, 3)$. Vuol dire «la riga trasposta», cioè la colonna con i numeri 1 e 3.

### È un prodotto definito positivo

Le dispense riassumono in una riga quello che abbiamo visto sul conto della spesa.

> [!PROP] 19.6
> Il prodotto scalare euclideo è un prodotto scalare definito positivo su $\R^n$.

**Come si legge.** La frase dice due cose. La prima: il conto della spesa rispetta i tre assiomi, quindi è davvero un prodotto scalare. La seconda: è definito positivo, e lo è per i vettori con un numero qualsiasi di posti.

Il motivo della seconda l'hai già visto con il vettore $(3, 4)$: un vettore con sé stesso dà una somma di quadrati.

$$\langle x, x\rangle = x_1^2 + x_2^2 + \dots + x_n^2$$

Se il vettore non è nullo, almeno uno dei suoi numeri non è zero. Il quadrato di quel numero è positivo, e gli altri quadrati non sono negativi. Quindi la somma è positiva.

> [!DIM] la dimostrazione, dal libro di Martelli (Proposizione 7.1.5)
> Le dispense non riportano la dimostrazione. Eccola in tre passi.
>
> 1. **Somme e multipli si spezzano.** Viene dalle regole del prodotto tra matrici (lezione L08): ${}^t(x + x')\,y = {}^tx\,y + {}^tx'\,y$ e ${}^t(\lambda x)\,y = \lambda\,{}^tx\,y$.
> 2. **Simmetria.** In ogni pezzo $x_iy_i$ i due numeri si possono scambiare.
> 3. **Definito positivo.** Se $x \neq 0$, almeno un numero $x_i$ non è zero. Il suo quadrato è positivo e rende positiva la somma $x_1^2 + \dots + x_n^2$.

### Prova con lo strumento

Lo strumento qui sotto disegna due vettori del piano, $u$ e $v$, e calcola il loro prodotto scalare euclideo. Lo scrive con il puntino, $u \cdot v$. Trascina le punte delle due frecce e prova queste due cose.

1. Cerca una posizione in cui il prodotto vale zero. Le due frecce devono essere perpendicolari.
2. Cerca una posizione in cui il prodotto è negativo. L'angolo tra le due frecce deve essere ottuso.

Lo strumento mostra anche l'angolo e la proiezione: sono argomenti delle lezioni L20 e L21.

```widget vettori
titolo: Il prodotto scalare euclideo nel piano
u: 1 3
v: -2 1
modo: scalare
modi: scalare
raggio: 5
```

> [!OLTRE] · il prodotto scalare della fisica
> In fisica il prodotto scalare di due frecce si calcola con le lunghezze e con l'angolo: la lunghezza della prima, per la lunghezza della seconda, per il coseno dell'angolo tra le due.
> $$\langle v, w\rangle = \lVert v \rVert\,\lVert w \rVert\cos\vartheta$$
> Le doppie barre indicano la lunghezza del vettore. La lettera greca $\vartheta$, *theta*, è l'angolo.
>
> Il corso fa la strada al contrario: prima il prodotto scalare, poi da quello ricava lunghezze e angoli (lezione L20). Il vantaggio è che la stessa costruzione funziona anche dove le frecce non si possono disegnare, come nello spazio dei polinomi.

::: prova Calcola $\langle (2, 0, 1), (1, 5, 3)\rangle$.
$2 \cdot 1 + 0 \cdot 5 + 1 \cdot 3 = 2 + 0 + 3 = 5$.
:::

::: prova Scrivi per esteso $\sum_{i=1}^{2} x_iy_i$ e calcolala per $x = (4, 1)$ e $y = (2, 3)$.
Per esteso: $x_1y_1 + x_2y_2$.

Con i numeri: $4 \cdot 2 + 1 \cdot 3 = 8 + 3 = 11$.
:::

> [!RICORDA]
> - Il **prodotto scalare euclideo** di $\R^n$: moltiplica i numeri nello stesso posto e somma.
> - Tre scritture, un solo conto: per esteso, con il simbolo $\sum$, oppure ${}^tx\,y$ (riga per colonna).
> - È definito positivo: un vettore con sé stesso dà la somma dei quadrati dei suoi numeri.

## Una matrice simmetrica dà un prodotto scalare (pp. 97–98)

Nel conto della spesa ogni numero del primo vettore incontra solo il numero che sta nello stesso posto del secondo.

Primo con primo, secondo con secondo. Ma hai già visto formule con dei «pesi», come quella con il 2 e il 3 davanti ai due pezzi. E niente vieta di far incontrare anche numeri che stanno in posti diversi: il primo di $x$ con il secondo di $y$, e il secondo di $x$ con il primo di $y$.

Un prodotto così, su $\R^2$, ha al massimo quattro pezzi. Per esempio questo.

$$g(x, y) = 2\,x_1y_1 + 1\,x_1y_2 + 1\,x_2y_1 + 1\,x_2y_2$$

Ogni pezzo ha il suo peso: il numero che ha davanti. I quattro pesi si possono mettere in una tabella. La riga dice quale numero di $x$ c'è nel pezzo, la colonna quale numero di $y$.

| | $y_1$ | $y_2$ |
|---|--:|--:|
| $x_1$ | $2$ | $1$ |
| $x_2$ | $1$ | $1$ |

Una tabella di numeri è una **matrice** (lezione L08). Quella dei pesi la chiamiamo $S$. Ha due righe e due colonne: in breve, è una matrice $2 \times 2$, che si legge «due per due».

$$S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$$

> [!IDEA]
> Una matrice è una tabella di pesi. Il numero nella riga $i$ e nella colonna $j$ dice quanto pesa, nel conto, il pezzo «numero di posto $i$ di $x$ per numero di posto $j$ di $y$».

I numeri di una matrice si indicano con due indici. La scrittura $S_{ij}$ si legge «esse i gei» ed è il numero che sta nella riga $i$ e nella colonna $j$. Nella matrice qui sopra, per esempio, $S_{11} = 2$ e $S_{12} = 1$.

### Perché la matrice deve essere simmetrica

Un prodotto scalare deve essere simmetrico: scambiando i due vettori il risultato non cambia.

Guarda i due pezzi «misti». Scambiando $x$ con $y$, il pezzo $x_1y_2$ diventa $y_1x_2$, cioè $x_2y_1$. I due pezzi misti si scambiano tra loro. Quindi il risultato resta uguale solo se hanno lo **stesso peso**: il numero nella riga 1 e colonna 2 deve essere uguale al numero nella riga 2 e colonna 1.

Una matrice così si chiama simmetrica.

> [!RIPASSO] matrice simmetrica e trasposta
> La **diagonale** di una matrice quadrata è la fila di numeri che va dall'angolo in alto a sinistra all'angolo in basso a destra.
>
> Una matrice è **simmetrica** se è uguale alla sua immagine allo specchio rispetto alla diagonale. Il numero nella riga $i$ e colonna $j$ è uguale a quello nella riga $j$ e colonna $i$ (lezione L08).
> $$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \text{ è simmetrica} \qquad\qquad \begin{pmatrix} 2 & 5 \\ 1 & 1 \end{pmatrix} \text{ non lo è}$$
> La **trasposta** di una matrice si ottiene scambiando le righe con le colonne. Si scrive ${}^tS$. Una matrice è simmetrica esattamente quando è uguale alla sua trasposta: ${}^tS = S$.
>
> C'è anche una regola per la trasposta di un prodotto: si traspongono i due pezzi e si scambia il loro ordine.
> $${}^t(AB) = {}^tB\,{}^tA$$

### Il conto: riga, matrice, colonna

Il prodotto con i pesi si scrive in modo compatto: la riga ${}^tx$, per la matrice $S$, per la colonna $y$.

$$g_S(x, y) = {}^tx\,S\,y$$

La scrittura $g_S$ si legge «gi con esse». È il nome del prodotto scalare costruito con la matrice $S$.

> [!ESEMPIO] Il conto riga, matrice, colonna, un passo alla volta
> La matrice è $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$. I vettori sono $x = (1, 2)$ e $y = (3, 1)$.
>
> 1. **Matrice per colonna.** Ogni riga della matrice va moltiplicata per la colonna $y$. I due risultati vanno uno sotto l'altro.
>    $$S\,y = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \cdot 3 + 1 \cdot 1 \\ 1 \cdot 3 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 7 \\ 4 \end{pmatrix}$$
> 2. **Riga per colonna.** La riga ${}^tx$ va moltiplicata per la colonna appena trovata.
>    $$\begin{pmatrix} 1 & 2 \end{pmatrix}\begin{pmatrix} 7 \\ 4 \end{pmatrix} = 1 \cdot 7 + 2 \cdot 4 = 15$$
> 3. **Controllo con la formula dei quattro pezzi.** Metto $x_1 = 1$, $x_2 = 2$, $y_1 = 3$, $y_2 = 1$.
>    $$2 \cdot 1 \cdot 3 + 1 \cdot 1 \cdot 1 + 1 \cdot 2 \cdot 3 + 1 \cdot 2 \cdot 1 = 6 + 1 + 6 + 2 = 15$$
>
> I due conti danno lo stesso numero: $g_S(x, y) = 15$.

Le dispense lo scrivono così.

> [!PROP] 19.7
> Una matrice simmetrica $S$ definisce un prodotto scalare $g_S$ su $\R^n$ ponendo
> $$g_S(x, y) = {}^tx\,S\,y.$$

**Come si legge.** «Una matrice simmetrica $S$ dà un prodotto scalare sui vettori di $\R^n$. Il prodotto si chiama $g_S$ e la sua regola è: $x$ trasposto, per $S$, per $y$.» La parola «ponendo» vuol dire «con questa regola». La matrice ha $n$ righe e $n$ colonne, tante quanti sono i numeri di un vettore.

Perché è vero? Somme e multipli si spezzano, perché il prodotto tra matrici rispetta somme e multipli. La simmetria del prodotto viene dalla simmetria della matrice: l'hai visto sopra con i due pezzi misti.

> [!DIM] la dimostrazione delle dispense, con tutti i passaggi
> 1. **Il risultato è un numero.** La riga ${}^tx$ ha $n$ numeri. La matrice $S$ ha $n$ righe e $n$ colonne. La colonna $y$ ha $n$ numeri. Quindi i prodotti si possono fare, e il risultato è una matrice con una riga e una colonna: un numero.
> 2. **Bilinearità.** Viene dalle regole del prodotto tra matrici: il prodotto si distribuisce sulla somma, e i numeri escono fuori. Per esempio ${}^t(x + x')\,S\,y = {}^tx\,S\,y + {}^tx'\,S\,y$.
> 3. **Simmetria.** Le dispense scrivono questa catena di uguali.
>    $$g_S(x, y) = {}^tx\,S\,y = {}^t\big({}^tx\,S\,y\big) = {}^ty\,{}^tS\,x = {}^ty\,S\,x = g_S(y, x)$$
>    - Il secondo uguale: ${}^tx\,S\,y$ è un numero, cioè una matrice con una sola casella. Trasporla non la cambia.
>    - Il terzo uguale: la trasposta di un prodotto di tre pezzi è il prodotto delle trasposte nell'ordine inverso. E la trasposta di ${}^tx$ è di nuovo $x$.
>    - Il quarto uguale usa l'ipotesi: $S$ è simmetrica, cioè ${}^tS = S$. Senza questa ipotesi la catena si ferma qui.

### La formula per esteso

Per i conti a mano conviene la formula con tutti i pezzi scritti. Per una matrice simmetrica $2 \times 2$, fatta con tre numeri qualsiasi $a$, $b$ e $c$, è questa.

$$S = \begin{pmatrix} a & b \\ b & c \end{pmatrix} \qquad\qquad g_S(x, y) = a\,x_1y_1 + b\,x_1y_2 + b\,x_2y_1 + c\,x_2y_2$$

Ci sono quattro pezzi, uno per ogni casella della matrice. La regola da ricordare è una sola: **il numero $S_{ij}$ della matrice è il numero che sta davanti a $x_iy_j$ nella formula**.

Con vettori di $n$ numeri le caselle sono $n \cdot n$, e i pezzi altrettanti. Le dispense li scrivono tutti con un solo simbolo di somma.

> [!PROP] 19.8
> Vale
> $$g_S(x, y) = {}^tx\,S\,y = \sum_{i,j=1}^n x_iS_{ij}y_j.$$

**Come si legge.** A destra c'è una somma **doppia**. Sotto il simbolo c'è scritto $i, j = 1$ e sopra c'è $n$: i contatori sono due, e ognuno va da 1 a $n$ per conto suo. C'è un pezzo per ogni coppia di valori dei due contatori. Ogni pezzo è fatto così: il numero di posto $i$ di $x$, per il peso $S_{ij}$, per il numero di posto $j$ di $y$. Con $n = 2$ sono i quattro pezzi di prima.

> [!DIM] perché vale, in tre passi
> 1. Il vettore $Sy$ ha, al posto $i$, la riga $i$ della matrice moltiplicata per la colonna $y$:
>    $$(Sy)_i = \sum_{j=1}^n S_{ij}y_j$$
> 2. Il prodotto ${}^tx\,(Sy)$ è una riga per una colonna:
>    $${}^tx\,(Sy) = \sum_{i=1}^n x_i(Sy)_i$$
> 3. Metto il passo 1 dentro il passo 2 e ottengo la somma doppia:
>    $${}^tx\,S\,y = \sum_{i,j=1}^n x_iS_{ij}y_j$$

### I vettori della base canonica leggono le caselle

Che cosa succede se nel prodotto metti due vettori della base canonica? Ricorda che $e_1 = (1, 0)$ ed $e_2 = (0, 1)$. Con più numeri è lo stesso: il vettore $e_i$ ha un 1 al posto $i$ e zeri in tutti gli altri posti.

Prova con la matrice dei pesi di prima. Metti $x = e_1$ e $y = e_2$ nella formula dei quattro pezzi. In tre pezzi c'è almeno uno zero, e spariscono. Sopravvive solo il pezzo con $x_1y_2$, che vale il suo peso: il numero nella riga 1 e colonna 2.

> [!COROLLARIO] 19.9
> Per i vettori della base canonica vale
> $$g_S(e_i, e_j) = S_{ij}.$$

**Come si legge.** «Il prodotto $g_S$ tra il vettore numero $i$ e il vettore numero $j$ della base canonica è il numero della matrice che sta nella riga $i$ e nella colonna $j$.» In breve: il primo vettore sceglie la riga, il secondo sceglie la colonna.

Le dispense danno due esempi.

> [!ESEMPIO] 19.10 · La matrice identità
> La **matrice identità** ha 1 su tutta la diagonale e 0 in tutte le altre caselle. Si scrive $I_n$, dove $n$ è il numero di righe. Per esempio $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.
>
> Per $S = I_n$ si ottiene il prodotto scalare euclideo:
> $$g_{I_n}(x, y) = {}^tx\,y = x_1y_1 + \dots + x_ny_n.$$
> Il motivo: i pesi fuori dalla diagonale sono 0, quindi i pezzi misti spariscono. Restano i pezzi «stesso posto con stesso posto», tutti con peso 1. Con due numeri:
> $$g_{I_2}(x, y) = 1\,x_1y_1 + 0\,x_1y_2 + 0\,x_2y_1 + 1\,x_2y_2 = x_1y_1 + x_2y_2$$

> [!ESEMPIO] 19.11 · Una matrice non diagonale
> La matrice
> $$S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$$
> definisce su $\R^2$ il prodotto scalare
> $$g_S(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + x_2y_2.$$
> È la matrice dei pesi usata in tutta questa sezione. Tre conti in più.
>
> **Due vettori della base canonica.** $g_S(e_1, e_2) = S_{12} = 1$. Con il prodotto euclideo questi due vettori danno zero. Con questo prodotto no.
>
> **Un vettore con sé stesso.** Con $x = y = (1, -1)$:
> $$g_S(x, x) = 2 \cdot 1 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 + (-1) \cdot (-1) = 2 - 1 - 1 + 1 = 1$$
>
> **È definito positivo?** Metto $y = x$ nella formula. I due pezzi misti diventano uguali.
> $$g_S(x, x) = 2x_1^2 + x_1x_2 + x_2x_1 + x_2^2 = 2x_1^2 + 2x_1x_2 + x_2^2$$
> Spezzo $2x_1^2$ in $x_1^2 + x_1^2$. Poi riconosco il quadrato di una somma: $x_1^2 + 2x_1x_2 + x_2^2 = (x_1 + x_2)^2$.
> $$g_S(x, x) = x_1^2 + (x_1 + x_2)^2$$
> Una somma di due quadrati non è mai negativa. Fa zero solo se $x_1 = 0$ e $x_1 + x_2 = 0$, cioè solo per il vettore nullo. Quindi sì: questo prodotto è definito positivo.

::: prova Scrivi la formula di $g_S$ per la matrice $S = \begin{pmatrix} 1 & 3 \\ 3 & 2 \end{pmatrix}$.
$g_S(x, y) = x_1y_1 + 3x_1y_2 + 3x_2y_1 + 2x_2y_2$. Ogni casella è il peso del suo pezzo.
:::

::: prova Per la stessa matrice, quanto valgono $g_S(e_2, e_2)$ e $g_S(e_1, e_2)$?
$g_S(e_2, e_2) = S_{22} = 2$: riga 2, colonna 2.

$g_S(e_1, e_2) = S_{12} = 3$: riga 1, colonna 2.
:::

> [!RICORDA]
> - Una matrice simmetrica $S$ dà il prodotto scalare $g_S(x, y) = {}^tx\,S\,y$.
> - Il numero nella riga $i$ e colonna $j$ è il peso del pezzo $x_iy_j$.
> - I vettori della base canonica leggono le caselle: $g_S(e_i, e_j) = S_{ij}$.
> - Con la matrice identità si ritrova il prodotto euclideo.

## Dalla formula alla matrice, e ritorno (p. 98)

All'esame un prodotto scalare può essere dato in due modi: con una formula oppure con una matrice.

Bisogna saper passare dall'una all'altra in fretta. La regola è quella di prima: il numero nella riga $i$ e colonna $j$ è il numero davanti a $x_iy_j$.

> [!METODO] Tra la matrice e la formula
> **Dalla matrice alla formula.**
>
> 1. Per ogni casella scrivi un pezzo: il numero della casella, per la $x$ con l'indice della riga, per la $y$ con l'indice della colonna.
> 2. Somma tutti i pezzi. Le caselle con 0 non danno pezzi.
>
> **Dalla formula alla matrice.**
>
> 1. Controlla che ogni pezzo sia un numero per **una** $x$ per **una** $y$. Se c'è un pezzo di un altro tipo, la formula non è bilineare: non è un prodotto scalare.
> 2. Metti il numero davanti a $x_iy_j$ nella riga $i$ e nella colonna $j$. Un pezzo che manca vale 0.
> 3. Controlla che la matrice sia simmetrica. Se non lo è, la formula non è un prodotto scalare.

> [!ESEMPIO] Andata e ritorno
> **Dalla formula alla matrice.** La formula è $g(x, y) = 3x_1y_1 - 2x_1y_2 - 2x_2y_1 + 5x_2y_2$.
>
> | Pezzo | Numero davanti | Casella |
> |---|--:|---|
> | $x_1y_1$ | $3$ | riga 1, colonna 1 |
> | $x_1y_2$ | $-2$ | riga 1, colonna 2 |
> | $x_2y_1$ | $-2$ | riga 2, colonna 1 |
> | $x_2y_2$ | $5$ | riga 2, colonna 2 |
>
> $$S = \begin{pmatrix} 3 & -2 \\ -2 & 5 \end{pmatrix}$$
> La matrice è simmetrica: la formula è un prodotto scalare.
>
> **Dalla matrice alla formula.** La matrice è $S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & -1 \\ 0 & -1 & 3 \end{pmatrix}$, quindi i vettori hanno tre numeri. Scrivo i pezzi una riga alla volta.
>
> - Riga 1: $1\,x_1y_1 + 2\,x_1y_2 + 0\,x_1y_3$.
> - Riga 2: $2\,x_2y_1 + 0\,x_2y_2 - 1\,x_2y_3$.
> - Riga 3: $0\,x_3y_1 - 1\,x_3y_2 + 3\,x_3y_3$.
>
> Tolgo i pezzi con lo 0 e sommo.
> $$g_S(x, y) = x_1y_1 + 2x_1y_2 + 2x_2y_1 - x_2y_3 - x_3y_2 + 3x_3y_3$$
>
> **Una formula che non passa il controllo.** La formula è $g(x, y) = x_1y_2 + 2x_2y_1$. Il numero davanti a $x_1y_2$ è 1, quello davanti a $x_2y_1$ è 2. La matrice sarebbe $\begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$, che non è simmetrica. Quindi la formula **non** è un prodotto scalare.

> [!TRAPPOLA] Non dividere per due
> In un prodotto scalare i pezzi $x_1y_2$ e $x_2y_1$ sono **due pezzi diversi**, e ognuno ha la sua casella. Il numero davanti va nella matrice **così com'è**.
>
> La divisione per due serve in un'altra situazione: le **forme quadratiche** della lezione L20. Lì c'è un solo vettore, e i due pezzi misti si fondono in uno solo.

::: prova Scrivi la matrice di $g(x, y) = x_1y_1 + 4x_1y_2 + 4x_2y_1$ su $\R^2$.
$\begin{pmatrix} 1 & 4 \\ 4 & 0 \end{pmatrix}$. Il pezzo $x_2y_2$ manca, quindi nella riga 2 e colonna 2 c'è 0.
:::

::: prova La formula $g(x, y) = x_1y_1 + 3x_1y_2 - 3x_2y_1$ è un prodotto scalare?
No. La matrice sarebbe $\begin{pmatrix} 1 & 3 \\ -3 & 0 \end{pmatrix}$, che non è simmetrica: da una parte c'è 3, dall'altra $-3$.
:::

> [!RICORDA]
> - Il numero davanti a $x_iy_j$ va nella riga $i$ e colonna $j$. Un pezzo che manca vale 0.
> - La matrice deve venire simmetrica. Se non lo è, la formula non è un prodotto scalare.
> - Non si divide per due.

## Tre scorciatoie che guardano la matrice (oltre le dispense)

Guardando la matrice si capisce in fretta se il prodotto è degenere oppure definito positivo.

Le dispense non danno questi criteri: vengono dal libro di Martelli. Negli esercizi e nei problemi d'esame fanno risparmiare tempo. Una matrice simmetrica si chiama **definita positiva** quando lo è il suo prodotto scalare.

> [!RIPASSO] il determinante di una matrice $2 \times 2$
> Il **determinante** è un numero che si calcola da una matrice quadrata (lezione L09). Si scrive $\det$. Per una matrice $2 \times 2$: il prodotto dei due numeri sulla diagonale, meno il prodotto degli altri due.
> $$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc \qquad\qquad \det\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = 1 \cdot 4 - 2 \cdot 2 = 0$$
> Il determinante è zero esattamente quando c'è un vettore non nullo che la matrice manda nel vettore nullo (lezione L10).

### Prima scorciatoia: degenere quando il determinante è zero

Prendi la matrice del ripasso, quella con determinante zero. Il vettore $v = (2, -1)$ viene mandato nel vettore nullo.

$$\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}\begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 2 + 2 \cdot (-1) \\ 2 \cdot 2 + 4 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

Questo vettore è invisibile per il prodotto: dà zero con tutti. Quindi il prodotto è degenere. Vale in generale.

> [!OLTRE] · il criterio del determinante (Martelli, Proposizione 7.1.23)
> Il prodotto $g_S$ è **degenere** esattamente quando $\det S = 0$.
>
> I vettori invisibili sono quelli che la matrice manda nel vettore nullo, cioè i vettori del nucleo di $S$.

> [!DIM] perché il criterio del determinante funziona
> **Se la matrice manda in zero un vettore non nullo, il prodotto è degenere.** Chiamo $v$ quel vettore: $Sv = 0$. Per ogni vettore $w$ vale
> $$g_S(v, w) = {}^tv\,S\,w = {}^t(Sv)\,w = 0$$
> Il secondo uguale usa la regola della trasposta di un prodotto e la simmetria: ${}^t(Sv) = {}^tv\,{}^tS = {}^tv\,S$.
>
> **Se il prodotto è degenere, la matrice manda in zero un vettore non nullo.** Chiamo $v$ il vettore non nullo che dà zero con tutti. Tra tutti i vettori $w$ scelgo $w = Sv$.
> $$0 = g_S(v, Sv) = {}^tv\,S\,(Sv) = {}^t(Sv)\,(Sv)$$
> L'ultimo pezzo è il prodotto euclideo di $Sv$ con sé stesso. Il prodotto euclideo è definito positivo, quindi $Sv$ è il vettore nullo.
>
> Infine: esiste un vettore non nullo con $Sv = 0$ esattamente quando $\det S = 0$ (lezione L10).

### Seconda scorciatoia: le matrici diagonali

Una matrice **diagonale** ha numeri solo sulla diagonale. Tutte le altre caselle sono 0. Allora nella formula non ci sono pezzi misti, e un vettore con sé stesso dà una somma di quadrati con i pesi della diagonale.

Per esempio, con 5 e 1 sulla diagonale un vettore con sé stesso dà $5x_1^2 + x_2^2$. I due pesi sono positivi, quindi il risultato è positivo per ogni vettore non nullo.

> [!OLTRE] · matrici diagonali (Martelli, §7.1.6)
> Prendi una matrice diagonale, con i numeri $d_1, \dots, d_n$ sulla diagonale. Un vettore con sé stesso dà
> $$g_S(x, x) = d_1x_1^2 + \dots + d_nx_n^2$$
>
> - Il prodotto è **definito positivo** esattamente quando tutti i numeri sulla diagonale sono positivi.
> - Il prodotto è **non degenere** esattamente quando tutti i numeri sulla diagonale sono diversi da zero.

| Numeri sulla diagonale | Che prodotto è | Perché |
|---|---|---|
| $5$ e $1$ | definito positivo | sono tutti positivi |
| $1$ e $-3$ | non degenere, ma non definito positivo | nessuno è zero, ma uno è negativo: $e_2$ con sé stesso dà $-3$ |
| $0$ e $1$ | degenere | c'è uno zero: il prodotto non vede $e_1$ |

### Terza scorciatoia: le matrici due per due

Per una matrice simmetrica $2 \times 2$ bastano due numeri: quello in alto a sinistra e il determinante.

> [!OLTRE] · il criterio per le matrici $2 \times 2$
> La matrice simmetrica $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ è **definita positiva** esattamente quando valgono tutte e due queste condizioni:
>
> - il numero in alto a sinistra è positivo: $a > 0$;
> - il determinante è positivo: $ac - b^2 > 0$.

Due esempi.

- Per la matrice dei pesi $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$: in alto a sinistra c'è 2, positivo. Il determinante è $2 \cdot 1 - 1 \cdot 1 = 1$, positivo. È definita positiva, come avevamo trovato nell'Esempio 19.11.
- Per la matrice $\begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}$: in alto a sinistra c'è 1, positivo. Ma il determinante è $1 \cdot 3 - 2 \cdot 2 = -1$, negativo. Non è definita positiva.

> [!DIM] perché il criterio funziona
> Un vettore con sé stesso dà $a\,x_1^2 + 2b\,x_1x_2 + c\,x_2^2$. Se $a$ non è zero, si riscrive come somma di due pezzi con un quadrato ciascuno. Il trucco si chiama «completare il quadrato».
> $$a\,x_1^2 + 2b\,x_1x_2 + c\,x_2^2 = a\left(x_1 + \frac ba x_2\right)^2 + \frac{ac - b^2}{a}\,x_2^2$$
>
> **Se le due condizioni valgono**, i due pezzi a destra non sono mai negativi. Fanno zero insieme solo quando $x_2 = 0$ e poi $x_1 = 0$, cioè per il vettore nullo.
>
> **Se il prodotto è definito positivo**, allora $a = g_S(e_1, e_1)$ è positivo. Poi prendo il vettore $(-b, a)$, che non è nullo. Con sé stesso dà $ab^2 - 2ab^2 + ca^2 = a\,(ac - b^2)$. Questo numero è positivo e $a$ è positivo, quindi anche $ac - b^2$ è positivo.

::: prova Il prodotto $g_S$ con $S = \begin{pmatrix} 2 & 3 \\ 3 & 5 \end{pmatrix}$ è definito positivo?
Sì. In alto a sinistra c'è 2, positivo. Il determinante è $2 \cdot 5 - 3 \cdot 3 = 10 - 9 = 1$, positivo.
:::

::: prova Il prodotto $g_S$ con $S = \begin{pmatrix} 3 & 6 \\ 6 & 12 \end{pmatrix}$ è degenere?
Sì. Il determinante è $3 \cdot 12 - 6 \cdot 6 = 36 - 36 = 0$.
:::

> [!RICORDA]
> - Il prodotto $g_S$ è degenere esattamente quando $\det S = 0$.
> - Matrice diagonale: definita positiva quando i numeri sulla diagonale sono tutti positivi.
> - Matrice $2 \times 2$: definita positiva quando il numero in alto a sinistra è positivo e il determinante è positivo.

## La matrice associata: la tabella dei prodotti (pp. 98–99)

Alle elementari si impara la tabellina: una tabella con i prodotti dei numeri da 1 a 10.

Con quella tabella, e con la regola per spezzare le somme, si fa qualunque moltiplicazione. Per esempio 23 per 4 si spezza in 20 per 4 più 3 per 4.

Per un prodotto scalare succede la stessa cosa. Basta conoscere i prodotti tra i vettori di una **base**: tutti gli altri prodotti si ricavano da quelli, spezzando somme e multipli. La tabella con i prodotti tra i vettori della base si chiama matrice associata. È la domanda d'esame più frequente di questa lezione.

> [!RIPASSO] base e coordinate
> Una **base** di uno spazio vettoriale è un elenco di vettori con cui si costruisce ogni altro vettore dello spazio, in un modo solo (lezione L07). «Costruire» vuol dire fare una **combinazione lineare**: una ricetta del tipo «2 parti del primo più 3 parti del secondo».
>
> Le quantità della ricetta si chiamano **coordinate** del vettore rispetto a quella base (lezione L13).
>
> Un esempio in $\R^2$, con la base formata da $v_1 = (1, 0)$ e $v_2 = (1, 1)$. Il vettore $(3, 2)$ si ottiene con 1 parte di $v_1$ e 2 parti di $v_2$.
> $$1 \cdot (1, 0) + 2 \cdot (1, 1) = (1, 0) + (2, 2) = (3, 2)$$
> Quindi le sue coordinate in questa base sono 1 e 2.
>
> Una base si indica con una B in corsivo, $\mathcal B$, e i suoi vettori si scrivono tra parentesi graffe: $\mathcal B = \{v_1, v_2\}$. La colonna delle coordinate di un vettore $v$ si scrive $[v]_{\mathcal B}$. Nell'esempio le coordinate di $(3, 2)$ sono la colonna con i numeri 1 e 2.
>
> La **base canonica** di $\R^n$ è formata dai vettori $e_1, \dots, e_n$ e si indica con $\mathcal C$. In questa base le coordinate di un vettore sono i suoi stessi numeri.

### Costruire la tabella

Partiamo dall'esempio delle dispense. Il prodotto è quello euclideo su $\R^2$. La base è quella del ripasso: $v_1 = (1, 0)$ e $v_2 = (1, 1)$.

Facciamo la tabellina. In ogni casella va il prodotto scalare tra il vettore della riga e il vettore della colonna.

| | $v_1 = (1, 0)$ | $v_2 = (1, 1)$ |
|---|--:|--:|
| $v_1 = (1, 0)$ | $1 \cdot 1 + 0 \cdot 0 = 1$ | $1 \cdot 1 + 0 \cdot 1 = 1$ |
| $v_2 = (1, 1)$ | $1 \cdot 1 + 1 \cdot 0 = 1$ | $1 \cdot 1 + 1 \cdot 1 = 2$ |

I quattro risultati, scritti come matrice, sono la **matrice associata** al prodotto scalare in questa base.

$$\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$$

> [!IDEA]
> La **matrice associata** è la tabellina del prodotto scalare. Nella riga $i$ e nella colonna $j$ c'è il prodotto tra il vettore numero $i$ e il vettore numero $j$ della base.

La matrice associata si scrive $[g]_{\mathcal B}$: il nome del prodotto tra parentesi quadre, e in basso il nome della base. Si legge «matrice di $g$ nella base $\mathcal B$».

Le dispense lo scrivono così.

> [!DEF] 19.12 · Matrice associata
> Sia $V$ uno spazio vettoriale reale, sia $g : V \times V \to \R$ un prodotto scalare e sia $\mathcal B = \{v_1, \dots, v_n\}$ una base di $V$. La **matrice associata** a $g$ nella base $\mathcal B$ è la matrice simmetrica
> $$S = [g]_{\mathcal B}, \qquad S_{ij} = g(v_i, v_j).$$

**Come si legge.**

- $\mathcal B = \{v_1, \dots, v_n\}$ è una base con $n$ vettori. Il primo si chiama $v_1$, l'ultimo $v_n$. Il numero $n$ è la dimensione dello spazio.
- $S = [g]_{\mathcal B}$ vuol dire: la matrice associata la chiamiamo $S$.
- $S_{ij} = g(v_i, v_j)$ vuol dire: il numero nella riga $i$ e nella colonna $j$ è il prodotto scalare tra il vettore numero $i$ e il vettore numero $j$ della base.
- La matrice ha $n$ righe e $n$ colonne: una riga e una colonna per ogni vettore della base.
- Sulla diagonale ci sono i prodotti di ogni vettore della base con sé stesso.
- È **simmetrica**, perché il prodotto scalare è simmetrico: scambiando i due vettori il risultato non cambia. Quindi basta calcolare la diagonale e le caselle sopra la diagonale. Le altre si copiano allo specchio.
- **Dipende dalla base.** Lo stesso prodotto, in una base diversa, ha una matrice diversa. Come cambia lo vedrai nella lezione L20.

> [!ESEMPIO] 19.13 · La base canonica
> La scrittura $M(n, \R)$ indica l'insieme delle matrici con $n$ righe e $n$ colonne di numeri reali.
>
> Se $S \in M(n, \R)$ è simmetrica, la matrice associata a $g_S$ rispetto alla base canonica $\mathcal C$ è $S$ stessa:
> $$[g_S]_{\mathcal C} = S.$$
> Il motivo è il Corollario 19.9. Nella riga $i$ e colonna $j$ della matrice associata c'è il prodotto $g_S(e_i, e_j)$, che vale $S_{ij}$.
>
> Con la matrice dei pesi $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$: i tre prodotti sono $g_S(e_1, e_1) = 2$, poi $g_S(e_1, e_2) = 1$, poi $g_S(e_2, e_2) = 1$. La tabellina è la matrice di partenza.

> [!ESEMPIO] 19.14 · Il prodotto euclideo in un'altra base
> Il prodotto è quello euclideo su $\R^2$. La base è
> $$\mathcal B = \left\{ v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, v_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix} \right\}.$$
> La matrice associata è
> $$[g]_{\mathcal B} = \begin{pmatrix} g(v_1, v_1) & g(v_1, v_2) \\ g(v_2, v_1) & g(v_2, v_2) \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}.$$
> I quattro conti sono quelli della tabellina qui sopra. La casella $g(v_2, v_1)$ è uguale alla casella $g(v_1, v_2)$ per la simmetria.
>
> Nella base canonica lo stesso prodotto ha come matrice la matrice identità $I_2$. Stesso prodotto, due basi, due matrici diverse.

### A che cosa serve: tutti gli altri prodotti

La tabellina basta per calcolare il prodotto di due vettori qualsiasi. Vediamolo con la base dell'Esempio 19.14.

Prendi due vettori scritti come ricette con i vettori della base.

$$v = 1\,v_1 + 2\,v_2 \qquad\qquad w = 2\,v_1 - 1\,v_2$$

Il loro prodotto si apre come il prodotto di due somme tra numeri: ogni pezzo della prima per ogni pezzo della seconda. Vengono quattro pezzi. In ogni pezzo i due numeri escono fuori e resta un prodotto della tabellina.

| Pezzo di $v$ | Pezzo di $w$ | Numeri che escono | Dalla tabellina | Risultato |
|---|---|--:|--:|--:|
| $1\,v_1$ | $2\,v_1$ | $1 \cdot 2 = 2$ | $g(v_1, v_1) = 1$ | $2 \cdot 1 = 2$ |
| $1\,v_1$ | $-1\,v_2$ | $1 \cdot (-1) = -1$ | $g(v_1, v_2) = 1$ | $-1 \cdot 1 = -1$ |
| $2\,v_2$ | $2\,v_1$ | $2 \cdot 2 = 4$ | $g(v_2, v_1) = 1$ | $4 \cdot 1 = 4$ |
| $2\,v_2$ | $-1\,v_2$ | $2 \cdot (-1) = -2$ | $g(v_2, v_2) = 2$ | $-2 \cdot 2 = -4$ |

Somma dell'ultima colonna: $2 - 1 + 4 - 4 = 1$. Quindi $g(v, w) = 1$.

Controllo diretto. Le due ricette danno i vettori $v = (3, 2)$ e $w = (1, -1)$. Il loro prodotto euclideo è $3 \cdot 1 + 2 \cdot (-1) = 1$. Torna.

Le dispense scrivono questa regola con le lettere.

> [!PROP] 19.15
> Se
> $$v = \lambda_1v_1 + \dots + \lambda_nv_n, \qquad w = \mu_1v_1 + \dots + \mu_nv_n,$$
> allora
> $$g(v, w) = \sum_{i,j=1}^n \lambda_i\mu_j\,g(v_i, v_j).$$

**Come si legge.**

- La prima riga dice che $v$ e $w$ sono scritti come ricette con i vettori della base. Le quantità della ricetta di $v$ si chiamano $\lambda_1, \dots, \lambda_n$. Quelle di $w$ si chiamano $\mu_1, \dots, \mu_n$. La lettera greca $\mu$ si legge «mi».
- La seconda riga è una somma doppia: c'è un pezzo per ogni coppia formata da un vettore della ricetta di $v$ e da uno della ricetta di $w$.
- Ogni pezzo è fatto così: una quantità di $v$, per una quantità di $w$, per un numero della tabellina. È la tabella a quattro righe di prima, con le lettere al posto dei numeri.

> [!DIM] perché vale, con una base di due vettori
> Le dispense dicono solo che la formula viene dalla bilinearità. Ecco i passaggi con $v = \lambda_1v_1 + \lambda_2v_2$ e $w = \mu_1v_1 + \mu_2v_2$.
>
> 1. Spezzo nel primo posto, con gli assiomi (1) e (2). Il vettore $w$ resta fermo.
>    $$g(v, w) = \lambda_1\,g(v_1, w) + \lambda_2\,g(v_2, w)$$
> 2. Spezzo $w$ nel secondo posto di ognuno dei due pezzi, con le regole (4) e (5). Vengono quattro pezzi, uno per ogni coppia di indici.
>    $$g(v, w) = \lambda_1\mu_1\,g(v_1, v_1) + \lambda_1\mu_2\,g(v_1, v_2) + \lambda_2\mu_1\,g(v_2, v_1) + \lambda_2\mu_2\,g(v_2, v_2)$$

La stessa regola, scritta con le matrici, è ancora più corta.

> [!COROLLARIO] 19.16
> Per ogni $v, w \in V$ vale
> $$g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}.$$

**Come si legge.** «Il prodotto di $v$ e $w$ è: la riga delle coordinate di $v$, per la matrice associata, per la colonna delle coordinate di $w$.» È lo stesso conto «riga, matrice, colonna» di $g_S$. A parole: **una volta scelta una base, ogni prodotto scalare diventa un prodotto $g_S$**. La matrice $S$ è la matrice associata, e al posto dei vettori ci sono le loro coordinate.

### Calcolare con le coordinate

> [!ESEMPIO] Il Corollario 19.16 al lavoro
> Il prodotto è quello euclideo su $\R^2$. La base è $\mathcal B = \{(1, 0), (1, 1)\}$, con matrice associata $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ (Esempio 19.14). Vogliamo il prodotto di $v = (3, 2)$ e $w = (1, -1)$.
>
> 1. **Coordinate di $v$.** Cerco due numeri $a$ e $b$ con $a \cdot (1, 0) + b \cdot (1, 1) = (3, 2)$. A sinistra il vettore è $(a + b,\ b)$. Il secondo numero dice $b = 2$. Il primo dice $a + 2 = 3$, quindi $a = 1$. Le coordinate sono $(1, 2)$.
> 2. **Coordinate di $w$.** Stesso conto con $(a + b,\ b) = (1, -1)$. Il secondo numero dice $b = -1$. Il primo dice $a - 1 = 1$, quindi $a = 2$. Le coordinate sono $(2, -1)$.
> 3. **Matrice per colonna.** La matrice associata per la colonna delle coordinate di $w$.
>    $$\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 2 + 1 \cdot (-1) \\ 1 \cdot 2 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$$
> 4. **Riga per colonna.** La riga delle coordinate di $v$ per il risultato.
>    $$\begin{pmatrix} 1 & 2 \end{pmatrix}\begin{pmatrix} 1 \\ 0 \end{pmatrix} = 1 \cdot 1 + 2 \cdot 0 = 1$$
> 5. **Controllo diretto.** $\langle (3, 2), (1, -1)\rangle = 3 \cdot 1 + 2 \cdot (-1) = 1$. Torna.

> [!ESEMPIO] La matrice di un prodotto sui polinomi
> Lo spazio è $\R_2[x]$, con il prodotto $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$. La base è quella canonica: $\{1, x, x^2\}$.
>
> **Primo passo: la tabella dei valori** dei tre polinomi della base nei punti 0, 1 e 2.
>
> | | in 0 | in 1 | in 2 |
> |---|--:|--:|--:|
> | $1$ | $1$ | $1$ | $1$ |
> | $x$ | $0$ | $1$ | $2$ |
> | $x^2$ | $0$ | $1$ | $4$ |
>
> **Secondo passo: i prodotti.** Per ogni coppia moltiplico le due righe punto per punto e sommo. Bastano sei conti: la diagonale e le caselle sopra la diagonale.
>
> | Coppia | Conto | Valore |
> |---|---|--:|
> | $\langle 1, 1\rangle$ | $1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1$ | $3$ |
> | $\langle 1, x\rangle$ | $1 \cdot 0 + 1 \cdot 1 + 1 \cdot 2$ | $3$ |
> | $\langle 1, x^2\rangle$ | $1 \cdot 0 + 1 \cdot 1 + 1 \cdot 4$ | $5$ |
> | $\langle x, x\rangle$ | $0 \cdot 0 + 1 \cdot 1 + 2 \cdot 2$ | $5$ |
> | $\langle x, x^2\rangle$ | $0 \cdot 0 + 1 \cdot 1 + 2 \cdot 4$ | $9$ |
> | $\langle x^2, x^2\rangle$ | $0 \cdot 0 + 1 \cdot 1 + 4 \cdot 4$ | $17$ |
>
> **Terzo passo: la matrice.** La prima riga e la prima colonna sono quelle del polinomio $1$, le seconde quelle di $x$, le terze quelle di $x^2$. Le caselle sotto la diagonale si copiano allo specchio.
> $$\begin{pmatrix} 3 & 3 & 5 \\ 3 & 5 & 9 \\ 5 & 9 & 17 \end{pmatrix}$$
>
> **Controllo con il Corollario 19.16.** Calcolo $\langle 1 + x,\ x^2\rangle$ in due modi.
>
> - Con le coordinate. Il polinomio $1 + x$ ha coordinate $(1, 1, 0)$: una parte di $1$, una parte di $x$, zero parti di $x^2$. Il polinomio $x^2$ ha coordinate $(0, 0, 1)$. Il conto «riga, matrice, colonna» prende la terza colonna della matrice, cioè $(5, 9, 17)$, e la moltiplica per $(1, 1, 0)$: viene $5 + 9 + 0 = 14$.
> - Direttamente. Il polinomio $1 + x$ vale 1, 2 e 3 nei tre punti. Il polinomio $x^2$ vale 0, 1 e 4. Il prodotto è $1 \cdot 0 + 2 \cdot 1 + 3 \cdot 4 = 14$. Torna.

> [!METODO] Calcolare la matrice associata
> 1. Scrivi i vettori della base **nell'ordine dato**. L'ordine decide le righe e le colonne.
> 2. Se il prodotto è tra polinomi e usa i valori in alcuni punti, scrivi prima la tabella dei valori di ogni polinomio della base.
> 3. Calcola i prodotti della diagonale e delle caselle sopra la diagonale. Con una base di 2 vettori sono 3 conti, con una base di 3 vettori sono 6.
> 4. Riempi la matrice. Le caselle sotto la diagonale si copiano allo specchio da quelle sopra.
> 5. Se il prodotto è un $g_S$ su $\R^n$, la casella nella riga $i$ e colonna $j$ è ${}^tv_i\,S\,v_j$. Calcola una volta sola le colonne $Sv_j$ e riusale per tutta la colonna.

> [!OLTRE] · dove trovarlo nel libro
> Martelli, capitolo 7 «Prodotti scalari»: §7.1.1–7.1.3 (definizione, degenere e definito positivo, prodotto euclideo, pp. 199–201), §7.1.4 (matrici simmetriche, pp. 201–203), §7.1.6 (matrici diagonali, pp. 204–205), §7.1.10 (i prodotti sui polinomi dell'Esempio 19.4, p. 209), §7.2.1 (matrice associata, pp. 210–212). Nel libro trovi anche le parole **vettore isotropo** (§7.1.8) e **radicale** (§7.1.9), che le dispense non usano.

::: prova Il prodotto è quello euclideo su $\R^2$. La base è $\{(1, 1), (0, 2)\}$. Calcola la matrice associata.
Primo vettore con sé stesso: $1 \cdot 1 + 1 \cdot 1 = 2$.

Primo con secondo: $1 \cdot 0 + 1 \cdot 2 = 2$.

Secondo con sé stesso: $0 \cdot 0 + 2 \cdot 2 = 4$.

La matrice è $\begin{pmatrix} 2 & 2 \\ 2 & 4 \end{pmatrix}$.
:::

::: prova In una base $\{v_1, v_2\}$ la matrice associata a $g$ è $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. Quanto vale $g(v_1 + v_2,\ v_2)$?
Spezzo la somma nel primo posto: $g(v_1, v_2) + g(v_2, v_2)$.

Leggo i due numeri nella tabellina: riga 1, colonna 2 e riga 2, colonna 2. Viene $1 + 2 = 3$.
:::

> [!RICORDA]
> - La **matrice associata** $[g]_{\mathcal B}$ è la tabella dei prodotti tra i vettori della base: nella riga $i$ e colonna $j$ c'è $g(v_i, v_j)$.
> - È sempre simmetrica e dipende dalla base.
> - Con le coordinate: $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$.
> - È la domanda d'esame più frequente di questa lezione.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $(2, 3)$ | «due, tre» | un vettore: una lista ordinata di numeri | 2 passi a destra e 3 in su |
| $\R^2$, $\R^3$, $\R^n$ | «erre due», «erre tre», «erre enne» | i vettori fatti di 2, di 3, di $n$ numeri reali | $(1, 3)$ sta in $\R^2$ |
| $\cdot$ | «per» | il segno della moltiplicazione | $2 \cdot 4 = 8$ |
| $\langle v, w\rangle$ | «prodotto scalare di $v$ e $w$» | il numero che il prodotto scalare dà per quei due vettori | $\langle (1, 3), (-2, 1)\rangle = 1$ |
| $g(v, w)$ | «gi di $v$ e $w$» | lo stesso, quando il prodotto scalare ha un nome | $g(e_1, e_2)$ |
| $x_1$, $x_2$, $x_i$ | «x con uno», «x con due», «x con i» | il numero di posto 1, 2, $i$ del vettore $x$ | per $x = (5, 7)$: $x_2 = 7$ |
| $v'$ | «vu primo» | un altro vettore, diverso da $v$ | |
| $\lambda$, $\mu$ | «lambda», «mi» | lettere greche che indicano numeri reali | $\lambda v$ |
| $\in$ | «appartiene a» | sta dentro l'insieme | $\lambda \in \R$ |
| $\neq$ | «diverso da» | non uguale | $v \neq 0$ |
| $0$ | «zero» | il numero zero, oppure il vettore nullo | $(0, 0)$ |
| $V \times V$ | «$V$ per $V$» | le coppie di vettori di $V$ | $(v, w)$ |
| $\longrightarrow$, $\to$ | «va in» | separa ciò che entra da ciò che esce | $V \times V \to \R$ |
| $\longmapsto$ | «viene mandato in» | dice che cosa esce per una certa entrata | $(v, w) \longmapsto \langle v, w\rangle$ |
| $e_1$, $e_2$, $e_i$ | «e con uno», «e con due», «e con i» | i vettori della base canonica | $e_2 = (0, 1)$ |
| $p(2)$ | «pi di due» | il valore del polinomio $p$ nel punto 2 | per $p(x) = x^2$: $p(2) = 4$ |
| $\R_2[x]$ | «erre due di x» | i polinomi di grado al massimo 2 | $1 + x^2$ |
| $\le$ | «minore o uguale» | più piccolo, oppure uguale | grado $\le 2$ |
| ${}^tx$ | «$x$ trasposto» | il vettore colonna scritto in riga | |
| ${}^tx\,y$ | «$x$ trasposto per $y$» | riga per colonna: il prodotto euclideo | per $(1, 3)$ e $(-2, 1)$ vale 1 |
| $\sum_{i=1}^n$ | «somma, per $i$ da 1 a $n$» | somma di $n$ pezzi fatti nello stesso modo | $\sum_{i=1}^2 x_iy_i = x_1y_1 + x_2y_2$ |
| $\sum_{i,j=1}^n$ | «somma, per $i$ e $j$ da 1 a $n$» | somma doppia: un pezzo per ogni coppia di indici | con $n = 2$: quattro pezzi |
| $S_{ij}$ | «esse i gei» | il numero della matrice $S$ nella riga $i$ e colonna $j$ | $S_{12}$ |
| ${}^tS$ | «$S$ trasposta» | la matrice con righe e colonne scambiate | simmetrica: ${}^tS = S$ |
| $g_S$ | «gi con esse» | il prodotto scalare dato dalla matrice simmetrica $S$ | $g_S(x, y) = {}^tx\,S\,y$ |
| $I_n$ | «i con enne» | la matrice identità: 1 sulla diagonale, 0 altrove | $I_2$ |
| $2 \times 2$ | «due per due» | una matrice con due righe e due colonne | |
| $\det S$ | «determinante di $S$» | un numero calcolato dalla matrice; zero quando $g_S$ è degenere | $\det I_2 = 1$ |
| $M(n, \R)$ | «emme di enne, erre» | le matrici con $n$ righe e $n$ colonne di numeri reali | |
| $\mathcal B$, $\mathcal C$ | «bi», «ci» | una base; la base canonica | $\mathcal B = \{v_1, v_2\}$ |
| $[g]_{\mathcal B}$ | «matrice di $g$ nella base $\mathcal B$» | la matrice associata: la tabella dei prodotti tra i vettori della base | |
| $[v]_{\mathcal B}$ | «coordinate di $v$ nella base $\mathcal B$» | la colonna delle quantità della ricetta di $v$ | |
| $\lVert v \rVert$ | «norma di $v$» | la lunghezza del vettore (lezione L20) | $\lVert (3, 4) \rVert = 5$ |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla, ognuna con 5 risposte e una sola giusta. Poi ci sono 2 problemi da 11 punti, che vengono corretti solo a chi fa almeno 6 punti nel quiz. La prova dura 2 ore, senza calcolatrice, con solo 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027, alle 14:00. I dettagli sono nella lezione L01.

### Che cosa compare negli appelli 2023–2026

1. **La matrice associata in una base (quiz).** È la domanda più frequente. Negli appelli del 24/01/2024 (domanda 7), del 10/07/2024 (domanda 9) e del 15/01/2026 (domanda 9) il prodotto è dato da una formula insolita su $\R_1[x]$ o su $\R^2$. Bisogna trovare la matrice associata tra cinque matrici.
2. **La matrice associata a un prodotto $g_S$ in una base nuova (quiz).** Negli appelli del 10/06/2024 (domanda 4) e del 03/06/2026 (domanda 4) è data una matrice $S$ con tre righe e tre colonne, e una base nuova. Si fa una casella alla volta, oppure con la formula ${}^tMSM$ della lezione L20.
3. **Il primo punto dei problemi.** Nei problemi 12 del 16/01/2025, del 07/02/2025 e del 05/02/2026 il punto (1) chiede la matrice associata, nella base canonica di $\R_2[x]$ o in una base di $\R^3$. I punti successivi usano norme, angoli, Gram–Schmidt e proiezioni (lezioni L20 e L21).
4. **Teoria.** Distinguere degenere, non degenere e definito positivo. Sapere che $g_S$ è un prodotto scalare solo se la matrice $S$ è simmetrica.

Lo spazio $\R_1[x]$ è quello dei polinomi di grado al massimo 1, cioè dei polinomi $a + bx$. Una sua base ha due polinomi, quindi la matrice associata ha due righe e due colonne.

> [!METODO] La domanda «quanto vale la matrice associata?»
> 1. Segui il metodo «Calcolare la matrice associata» della sezione sulla matrice associata: ordine della base, tabella dei valori, prodotti della diagonale e sopra la diagonale.
> 2. Metti i numeri nella formula un pezzo alla volta, nell'ordine in cui è scritta.
> 3. Nel quiz scarta subito le risposte non simmetriche. Poi calcola una casella alla volta e scarta le risposte che non la rispettano.

### Una domanda vera, letta insieme

È la domanda 9 dell'appello del 15/01/2026. Il testo è questo.

«Dati $x = {}^t(x_1, x_2)$ e $y = {}^t(y_1, y_2) \in \R^2$, sia dato il prodotto scalare $g(x, y) = x_1y_2 + x_2y_1 - x_2y_2$. Data la base $\mathcal B = \{{}^t(1, 1), {}^t(0, 1)\}$, allora:» Seguono cinque matrici, e bisogna scegliere quella uguale a $[g]_{\mathcal B}$.

**In pratica chiede:** c'è un prodotto scalare tra vettori di due numeri, dato da una formula con tre pezzi. C'è una base con due vettori. Fai la tabellina dei prodotti tra i due vettori della base e trova la matrice giusta.

Le cinque risposte sono queste.

$$\text{(a)}\ \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \quad \text{(b)}\ \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \text{(c)}\ \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} \quad \text{(d)}\ \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \quad \text{(e)}\ \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$$

**Prima di ogni conto.** Una matrice associata è sempre simmetrica. La (c) e la (d) non lo sono: si scartano subito. Restano (a), (b) ed (e).

**I conti.** I vettori della base sono $v_1 = (1, 1)$ e $v_2 = (0, 1)$. La piccola $t$ davanti dice solo che sono colonne.

1. **Il primo vettore con sé stesso.** Metto $x = (1, 1)$ e $y = (1, 1)$ nella formula, un pezzo alla volta.
   $$g(v_1, v_1) = 1 \cdot 1 + 1 \cdot 1 - 1 \cdot 1 = 1$$
2. **Il primo con il secondo.** Metto $x = (1, 1)$ e $y = (0, 1)$.
   $$g(v_1, v_2) = 1 \cdot 1 + 1 \cdot 0 - 1 \cdot 1 = 0$$
   Fuori dalla diagonale c'è 0. La (e) ha 1: si scarta. Restano (a) e (b).
3. **Il secondo con sé stesso.** Metto $x = (0, 1)$ e $y = (0, 1)$.
   $$g(v_2, v_2) = 0 \cdot 1 + 1 \cdot 0 - 1 \cdot 1 = -1$$

**La risposta.** La matrice è quella con 1 e $-1$ sulla diagonale e 0 fuori: è la **(a)**. La (b) è la più tentatrice: è la matrice identità, e differisce da quella giusta solo per un segno nell'ultima casella.

In più: nella casella in basso a destra c'è un numero negativo. Quindi questo prodotto non è definito positivo. Non è nemmeno degenere: il determinante della matrice associata è $-1$, diverso da zero. Il criterio del determinante vale con la matrice associata in qualsiasi base.

### Altre due domande vere, risolte

> [!ESEMPIO] Appello del 24/01/2024, domanda 7
> **Il testo.** Su $\R_1[x]$ è dato il prodotto scalare $g(p, q) = q(1)p(1) - q(0)p(0)$ e la base $\mathcal B = \{x + 1, 2\}$. Quanto vale $[g]_{\mathcal B}$?
>
> **In pratica chiede:** il prodotto tra due polinomi si calcola con i loro valori in 1 e in 0. Si moltiplicano i due valori in 1 e si tolgono i due valori in 0 moltiplicati tra loro. La base ha due polinomi: $x + 1$ e il polinomio costante $2$. Fai la tabellina.
>
> **Tabella dei valori.**
>
> | | in 1 | in 0 |
> |---|--:|--:|
> | $x + 1$ | $2$ | $1$ |
> | $2$ | $2$ | $2$ |
>
> **I tre prodotti.**
>
> - $g(x + 1, x + 1) = 2 \cdot 2 - 1 \cdot 1 = 3$.
> - $g(x + 1, 2) = 2 \cdot 2 - 2 \cdot 1 = 2$.
> - $g(2, 2) = 2 \cdot 2 - 2 \cdot 2 = 0$.
>
> **La risposta.** $[g]_{\mathcal B} = \begin{pmatrix} 3 & 2 \\ 2 & 0 \end{pmatrix}$, che nel testo è la risposta (a).
>
> **L'errore tipico.** La risposta (e) è $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$. È quella che si ottiene usando per sbaglio il polinomio $1$ al posto di $2$. Il secondo vettore della base vale 2 in ogni punto, non 1.

> [!ESEMPIO] Appello del 07/02/2025, problema 12, punto (1)
> **Il testo.** Su $\R_2[x]$ è definito $g(p, q) = p(1)q(1) + p(-1)q(-1) + p(1)q(0) + p(0)q(1) + 2p(0)q(0)$. Trovare la matrice associata a $g$ nella base canonica $\{1, x, x^2\}$.
>
> **In pratica chiede:** la formula ha cinque pezzi e usa i valori dei polinomi nei punti $1$, $-1$ e $0$. Fai la tabella dei valori dei tre polinomi della base, poi i sei prodotti.
>
> **Tabella dei valori.**
>
> | | in $1$ | in $-1$ | in $0$ |
> |---|--:|--:|--:|
> | $1$ | $1$ | $1$ | $1$ |
> | $x$ | $1$ | $-1$ | $0$ |
> | $x^2$ | $1$ | $1$ | $0$ |
>
> **I sei prodotti**, con i cinque pezzi nell'ordine della formula.
>
> | Coppia | I cinque pezzi | Valore |
> |---|---|--:|
> | $g(1, 1)$ | $1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 + 2 \cdot 1 \cdot 1$ | $6$ |
> | $g(1, x)$ | $1 \cdot 1 + 1 \cdot (-1) + 1 \cdot 0 + 1 \cdot 1 + 2 \cdot 1 \cdot 0$ | $1$ |
> | $g(1, x^2)$ | $1 \cdot 1 + 1 \cdot 1 + 1 \cdot 0 + 1 \cdot 1 + 2 \cdot 1 \cdot 0$ | $3$ |
> | $g(x, x)$ | $1 \cdot 1 + (-1) \cdot (-1) + 1 \cdot 0 + 0 \cdot 1 + 2 \cdot 0 \cdot 0$ | $2$ |
> | $g(x, x^2)$ | $1 \cdot 1 + (-1) \cdot 1 + 1 \cdot 0 + 0 \cdot 1 + 2 \cdot 0 \cdot 0$ | $0$ |
> | $g(x^2, x^2)$ | $1 \cdot 1 + 1 \cdot 1 + 1 \cdot 0 + 0 \cdot 1 + 2 \cdot 0 \cdot 0$ | $2$ |
>
> **La matrice.**
> $$[g]_{\{1, x, x^2\}} = \begin{pmatrix} 6 & 1 & 3 \\ 1 & 2 & 0 \\ 3 & 0 & 2 \end{pmatrix}$$
>
> **Controllo della simmetria su una coppia.** Calcolo $g(x, 1)$, con i posti scambiati: $1 \cdot 1 + (-1) \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 2 \cdot 0 \cdot 1 = 1$. È uguale a $g(1, x)$.
>
> I punti (2) e (3) del problema continuano nelle lezioni L20 e L21.

### Errori da evitare

- Confondere l'**ordine dei vettori** della base. Con la base scritta al contrario, i due numeri sulla diagonale si scambiano di posto.
- Nei prodotti tra polinomi, sbagliare un valore. Scrivi **prima** la tabella dei valori, poi fai i prodotti.
- Dimenticare che la matrice associata è **sempre simmetrica**. Nel quiz scarta subito le matrici non simmetriche.
- Dividere per due i numeri davanti ai pezzi misti. Si divide per due solo nelle forme quadratiche (lezione L20).
- Dimenticare un segno meno della formula, come nella domanda letta insieme.

> [!ESAME] Sul foglio da 4 facciate
> - Prodotto da una matrice simmetrica: $g_S(x, y) = {}^tx\,S\,y$. Il numero $S_{ij}$ sta davanti a $x_iy_j$, senza dividere per due.
> - Matrice associata: nella riga $i$ e colonna $j$ c'è $g(v_i, v_j)$. È sempre simmetrica.
> - Con le coordinate: $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$.
> - Degenere: un vettore non nullo dà zero con tutti. Succede esattamente quando il determinante della matrice è zero.
> - Definito positivo: ogni vettore non nullo con sé stesso dà un numero positivo. Se è definito positivo allora non è degenere, ma non vale il contrario.
> - Matrice $2 \times 2$ con $a$ in alto a sinistra, $b$ fuori dalla diagonale e $c$ in basso a destra: definita positiva quando $a > 0$ e $ac - b^2 > 0$.

## Quiz

```quiz
D: Quale di queste formule definisce un prodotto scalare su $\R^2$? (Qui $x = (x_1, x_2)$ e $y = (y_1, y_2)$.)
+ $g(x, y) = x_1y_1 + x_1y_2 + x_2y_1$
- $g(x, y) = x_1y_2 - x_2y_1$
- $g(x, y) = x_1y_1 + x_2$
- $g(x, y) = x_1x_2y_1y_2$
- $g(x, y) = x_1y_1 + x_2y_2 + 1$
= La domanda chiede quale formula rispetta i tre assiomi. La regola pratica: ogni pezzo deve essere un numero per una $x$ per una $y$, e davanti a $x_1y_2$ e a $x_2y_1$ deve esserci lo stesso numero. La prima formula è a posto: i suoi pesi formano la matrice $\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, che è simmetrica. La seconda è la più tentatrice, perché ha i pezzi della forma giusta. Ma non è simmetrica: $g(e_1, e_2) = 1$ e $g(e_2, e_1) = -1$. La terza ha il pezzo $x_2$ senza nessuna $y$: con $x = e_2$ e $y$ nullo dà 1 invece di 0. La quarta ha due $x$ nello stesso pezzo: raddoppiando $x$ il risultato si moltiplica per 4, non per 2. La quinta ha un $+1$: con i due vettori nulli dà 1 invece di 0.

D: Su $\R_1[x]$ sia $g(p, q) = p(1)q(2) + p(2)q(1)$ e sia $\mathcal B = \{x - 1, x - 2\}$. Allora $[g]_{\mathcal B}$ è:
+ $\begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & -2 \\ -2 & 0 \end{pmatrix}$
- $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$
= La domanda chiede la tabellina dei prodotti tra i due polinomi della base. Prima servono i valori nei punti 1 e 2. Il polinomio $x - 1$ vale 0 in 1 e vale 1 in 2. Il polinomio $x - 2$ vale $-1$ in 1 e vale 0 in 2. La formula dice: valore del primo in 1 per valore del secondo in 2, più valore del primo in 2 per valore del secondo in 1. Primo polinomio con sé stesso: $0 \cdot 1 + 1 \cdot 0 = 0$. Primo con secondo: $0 \cdot 0 + 1 \cdot (-1) = -1$. Secondo con sé stesso: $(-1) \cdot 0 + 0 \cdot (-1) = 0$. La risposta con $+1$ fuori dalla diagonale è la più tentatrice: è quella di chi perde il segno meno del valore di $x - 2$ in 1. È simile alla domanda 9 dell'appello del 10/07/2024.

D: Qual è la matrice $S$ tale che $g(x, y) = x_1y_2 + x_2y_1 + 3x_2y_2$ sia uguale a $g_S(x, y) = {}^tx\,S\,y$?
+ $\begin{pmatrix} 0 & 1 \\ 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1/2 \\ 1/2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$
= La domanda chiede la matrice dei pesi della formula. La regola: il numero nella riga $i$ e colonna $j$ è quello davanti a $x_iy_j$. Il pezzo $x_1y_1$ manca, quindi in alto a sinistra c'è 0. Davanti a $x_1y_2$ e davanti a $x_2y_1$ c'è 1, quindi fuori dalla diagonale c'è 1. Davanti a $x_2y_2$ c'è 3, quindi in basso a destra c'è 3. La risposta più tentatrice è quella con $1/2$ fuori dalla diagonale, ma qui non si divide per due: $x_1y_2$ e $x_2y_1$ sono due pezzi diversi. Confronta con la domanda 7 dell'appello dell'08/02/2024: lì era data una **forma quadratica**, e in quel caso il numero del pezzo misto va diviso per due (lezione L20).

D: Su $\R_1[x]$ si consideri il prodotto scalare $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$ e la base $\mathcal B = \{x, x + 1\}$. Allora $[\,\langle\ ,\ \rangle\,]_{\mathcal B}$ è:
+ $\begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 5 \end{pmatrix}$
- $\begin{pmatrix} 5 & 2 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$
= La domanda chiede la tabellina dei prodotti tra i due polinomi della base, nell'ordine dato. Valori nei punti 0 e 1: il polinomio $x$ vale 0 e poi 1, il polinomio $x + 1$ vale 1 e poi 2. Primo polinomio con sé stesso: $0 \cdot 0 + 1 \cdot 1 = 1$. Primo con secondo: $0 \cdot 1 + 1 \cdot 2 = 2$. Secondo con sé stesso: $1 \cdot 1 + 2 \cdot 2 = 5$. La più tentatrice è la matrice con 5 in alto a sinistra: è quella di chi usa la base nell'ordine inverso. È simile alla domanda 7 dell'appello del 24/01/2024.

D: Su $\R^2$ sia $g(x, y) = x_1y_1 + x_1y_2 + x_2y_1$ e sia $\mathcal B = \{{}^t(1, 0), {}^t(1, -1)\}$. Allora $[g]_{\mathcal B}$ è:
+ $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 1 & -1 \end{pmatrix}$
= La domanda chiede la tabellina dei prodotti tra $v_1 = (1, 0)$ e $v_2 = (1, -1)$, con la formula data, che ha tre pezzi. Primo vettore con sé stesso: $1 \cdot 1 + 1 \cdot 0 + 0 \cdot 1 = 1$. Primo con secondo, cioè $x = (1, 0)$ e $y = (1, -1)$: $1 \cdot 1 + 1 \cdot (-1) + 0 \cdot 1 = 0$. Secondo con sé stesso: $1 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 = -1$. La seconda risposta è la più tentatrice: è la matrice dei pesi della formula, cioè la matrice associata nella base canonica e non nella base data. L'ultima risposta non è simmetrica, quindi non può essere una matrice associata. È simile alla domanda 9 dell'appello del 15/01/2026.

D: Quale matrice simmetrica definisce un prodotto scalare **degenere** su $\R^2$?
+ $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
= La domanda chiede quale prodotto ha un vettore invisibile. La regola: il prodotto $g_S$ è degenere esattamente quando il determinante di $S$ è zero. Per una matrice $2 \times 2$ il determinante è il prodotto dei due numeri sulla diagonale meno il prodotto degli altri due. La prima matrice dà $1 \cdot 4 - 2 \cdot 2 = 0$: è lei. Il suo vettore invisibile è $(2, -1)$. Le altre quattro hanno determinante $-1$, $1$, $-1$ e $6$, tutti diversi da zero. La più tentatrice è la matrice con gli zeri sulla diagonale: lì $e_1$ con sé stesso dà zero, ma questo non basta per essere degenere.

D: Quale affermazione è vera per ogni prodotto scalare su uno spazio vettoriale reale?
+ Se è definito positivo, allora non è degenere.
- Se non è degenere, allora è definito positivo.
- Se $\langle v, v\rangle = 0$ per qualche $v \neq 0$, allora è degenere.
- Ogni matrice simmetrica $S$ definisce un prodotto scalare definito positivo.
- Può succedere che $\langle v, 0\rangle \neq 0$.
= La domanda chiede quale frase vale per tutti i prodotti scalari. La prima è la Proposizione 19.3: un vettore che dà zero con tutti darebbe zero anche con sé stesso, e in un prodotto definito positivo questo non succede. La seconda è la più tentatrice, perché è la prima letta al contrario. Ma il prodotto $x_1y_1 - x_2y_2$ non è degenere e non è definito positivo. Lo stesso prodotto smentisce la terza: il vettore $(1, 1)$ dà zero con sé stesso, eppure il prodotto non è degenere. La quarta è falsa per la matrice diagonale con $-1$ e $-1$ sulla diagonale. La quinta è falsa perché con il vettore nullo ogni prodotto scalare dà zero.

D: Sia $S = \begin{pmatrix} 4 & 1 & -2 \\ 1 & 0 & 5 \\ -2 & 5 & 3 \end{pmatrix}$. Quanto vale $g_S(e_1 + e_2, e_3)$?
N: 3
= La domanda chiede un prodotto in cui il primo vettore è una somma. Si usano due regole: la somma nel primo posto si spezza, e i vettori della base canonica leggono le caselle della matrice (Corollario 19.9). Quindi $g_S(e_1 + e_2, e_3) = g_S(e_1, e_3) + g_S(e_2, e_3)$. Il primo pezzo è il numero nella riga 1 e colonna 3, cioè $-2$. Il secondo è il numero nella riga 2 e colonna 3, cioè $5$. La somma è $-2 + 5 = 3$.

D: Sia $S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$ e $\mathcal B = \{{}^t(2, 0, 0), {}^t(0, 1, 0), {}^t(0, 0, -1)\}$. La matrice associata a $g_S$ nella base $\mathcal B$ è:
+ $\begin{pmatrix} 4 & 4 & 0 \\ 4 & 1 & -1 \\ 0 & -1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 4 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & 4 & 0 \\ 2 & 1 & -1 \\ 0 & 1 & -3 \end{pmatrix}$
- $\begin{pmatrix} 4 & 4 & 0 \\ 4 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
= La domanda chiede la tabellina dei prodotti tra i tre vettori della base. Ogni vettore è un multiplo di un vettore della base canonica: $v_1 = 2e_1$, $v_2 = e_2$, $v_3 = -e_3$. I numeri escono fuori dal prodotto, e quello che resta è una casella di $S$. I sei conti: $g_S(v_1, v_1) = 2 \cdot 2 \cdot 1 = 4$; $g_S(v_1, v_2) = 2 \cdot 1 \cdot 2 = 4$; $g_S(v_1, v_3) = 2 \cdot (-1) \cdot 0 = 0$; $g_S(v_2, v_2) = 1 \cdot 1 \cdot 1 = 1$; $g_S(v_2, v_3) = 1 \cdot (-1) \cdot 1 = -1$; $g_S(v_3, v_3) = (-1) \cdot (-1) \cdot 3 = 3$. La più tentatrice è l'ultima risposta, che dimentica il segno meno di $v_3$ nella casella con $-1$. La quarta non è simmetrica. È simile alla domanda 4 degli appelli del 10/06/2024 e del 03/06/2026.

D: Su $\R_2[x]$, quale di questi prodotti scalari è **definito positivo**?
+ $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$
- $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$
- $\langle p, q\rangle = p(0)q(0) + p(1)q(1) - p(2)q(2)$
- $\langle p, q\rangle = p(0)q(1) + p(1)q(0)$
- $\langle p, q\rangle = p(1)q(1)$
= La domanda chiede in quale prodotto ogni polinomio non nullo, con sé stesso, dà un numero positivo. Nel primo un polinomio con sé stesso dà la somma dei quadrati dei suoi valori in 0, 1 e 2. Fa zero solo se il polinomio ha tre radici diverse, e un polinomio non nullo di grado al massimo 2 ne ha al massimo due (Esempio 19.4). Il secondo è degenere: il polinomio $x - x^2$ vale zero in 0 e in 1. Il terzo è il più tentatore, perché usa gli stessi tre punti: ma il polinomio $x - 1$ con sé stesso dà $1 + 0 - 1 = 0$. Il quarto, per un polinomio con sé stesso, dà $2p(0)p(1)$: per $p = 1 - 2x$ viene $2 \cdot 1 \cdot (-1) = -2$. Il quinto è degenere: il polinomio $x - 1$ vale zero in 1, quindi dà zero con tutti.
```

## Esercizi

Le dispense non hanno esercizi per questa lezione. Quelli qui sotto sono costruiti per questi appunti. I primi quattro sono di riscaldamento, gli ultimi due sono modellati sugli appelli.

::: esercizio base Tre prodotti euclidei nel piano
Calcola i tre prodotti scalari euclidei: (a) $\langle (2, 3), (4, 1)\rangle$; (b) $\langle (1, -1), (5, 5)\rangle$; (c) $\langle (0, 2), (7, 3)\rangle$.
::: soluzione
La regola: moltiplica i numeri nello stesso posto e somma.

(a) $2 \cdot 4 + 3 \cdot 1 = 8 + 3 = 11$.

(b) $1 \cdot 5 + (-1) \cdot 5 = 5 - 5 = 0$. Il prodotto è zero: i due vettori sono perpendicolari.

(c) $0 \cdot 7 + 2 \cdot 3 = 0 + 6 = 6$.
:::

::: esercizio base Usare le tre regole
Di un prodotto scalare sai che $\langle v, w\rangle = 4$ e che $\langle v', w\rangle = -1$. Calcola: (a) $\langle w, v\rangle$; (b) $\langle 3v, w\rangle$; (c) $\langle v + v', w\rangle$; (d) $\langle v, 0\rangle$, dove $0$ è il vettore nullo.
::: soluzione
(a) L'ordine non conta (assioma 3): $\langle w, v\rangle = \langle v, w\rangle = 4$.

(b) Il numero 3 esce fuori (assioma 2): $3 \cdot 4 = 12$.

(c) La somma nel primo posto si spezza (assioma 1): $4 + (-1) = 3$.

(d) Con il vettore nullo ogni prodotto scalare dà $0$.
:::

::: esercizio base Leggere le caselle di una matrice
Prendi la matrice $S = \begin{pmatrix} 5 & -1 \\ -1 & 2 \end{pmatrix}$. (a) Quanto vale $g_S(e_1, e_2)$? (b) Quanto vale $g_S(e_2, e_2)$? (c) Scrivi la formula di $g_S(x, y)$.
::: soluzione
I vettori della base canonica leggono le caselle: il primo sceglie la riga, il secondo la colonna (Corollario 19.9).

(a) Riga 1, colonna 2: $g_S(e_1, e_2) = -1$.

(b) Riga 2, colonna 2: $g_S(e_2, e_2) = 2$.

(c) Ogni casella è il numero davanti al suo pezzo: $g_S(x, y) = 5x_1y_1 - x_1y_2 - x_2y_1 + 2x_2y_2$.
:::

::: esercizio base La tabellina di una base
Il prodotto è quello euclideo su $\R^2$. Calcola la matrice associata nella base $\{v_1 = (2, 0),\ v_2 = (1, 1)\}$.
::: soluzione
Servono tre prodotti: la diagonale e la casella sopra la diagonale.

1. Primo vettore con sé stesso: $2 \cdot 2 + 0 \cdot 0 = 4$.
2. Primo con secondo: $2 \cdot 1 + 0 \cdot 1 = 2$.
3. Secondo con sé stesso: $1 \cdot 1 + 1 \cdot 1 = 2$.

La casella sotto la diagonale si copia allo specchio. La matrice associata è $\begin{pmatrix} 4 & 2 \\ 2 & 2 \end{pmatrix}$.
:::

::: esercizio base Prodotto scalare o no?
Per ciascuna formula su $\R^2$ di' se è un prodotto scalare; se non lo è, indica una regola che fallisce con un esempio numerico.
(a) $2x_1y_1 + 3x_2y_2$; (b) $x_1y_2$; (c) $x_1y_1 + x_2y_2 + 1$; (d) $x_1y_1 - 4x_1y_2 - 4x_2y_1 + x_2y_2$; (e) $x_1^2y_1^2$.
::: soluzione
Per ogni formula faccio i due controlli del metodo: la forma dei pezzi e la simmetria.

(a) **Sì.** Ogni pezzo è un numero per una $x$ per una $y$, e non ci sono pezzi misti. La matrice dei pesi è $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$, simmetrica (Proposizione 19.7).

(b) **No**, non è simmetrica. Con $x = e_1$ e $y = e_2$ viene $1 \cdot 1 = 1$. Con i posti scambiati viene $0 \cdot 0 = 0$.

(c) **No**, non è bilineare. Con i due vettori nulli viene $0 + 0 + 1 = 1$, mentre un prodotto scalare deve dare 0.

(d) **Sì.** Ogni pezzo ha una $x$ e una $y$. Davanti a $x_1y_2$ e davanti a $x_2y_1$ c'è lo stesso numero, $-4$. La matrice dei pesi è $\begin{pmatrix} 1 & -4 \\ -4 & 1 \end{pmatrix}$, simmetrica. In più: non è definito positivo, perché il vettore $(1, 1)$ con sé stesso dà $1 - 4 - 4 + 1 = -6$.

(e) **No**, un numero non esce fuori. Con $x = e_1$ e $y = e_1$ viene $1^2 \cdot 1^2 = 1$. Raddoppiando il primo vettore viene $2^2 \cdot 1^2 = 4$. Doveva venire il doppio, cioè 2.
:::

::: esercizio base Conti con il prodotto euclideo
(a) Calcola $\langle (2, -1, 3), (1, 4, 1)\rangle$. (b) Calcola $\langle (1, 1, 1, 1), (1, -1, 1, -1)\rangle$. (c) Trova il numero $k \in \R$ per cui $\langle (1, k, 2), (3, 1, -k)\rangle = 0$.
::: soluzione
(a) Moltiplico posto per posto e sommo: $2 \cdot 1 + (-1) \cdot 4 + 3 \cdot 1 = 2 - 4 + 3 = 1$.

(b) $1 \cdot 1 + 1 \cdot (-1) + 1 \cdot 1 + 1 \cdot (-1) = 1 - 1 + 1 - 1 = 0$. I due vettori di $\R^4$ sono perpendicolari.

(c) La lettera $k$ sta al posto di un numero che non conosco. Faccio il conto lasciandola scritta.

1. Posto per posto: $1 \cdot 3 + k \cdot 1 + 2 \cdot (-k) = 3 + k - 2k$.
2. Una volta $k$ meno due volte $k$ fa $-k$. Resta $3 - k$.
3. Il prodotto deve fare zero: $3 - k = 0$, quindi $k = 3$.

Controllo: con $k = 3$ i vettori sono $(1, 3, 2)$ e $(3, 1, -3)$. Il prodotto è $3 + 3 - 6 = 0$.
:::

::: esercizio base Dalla matrice alla formula e ritorno
(a) Scrivi $g_S(x, y)$ per $S = \begin{pmatrix} 1 & -2 & 0 \\ -2 & 3 & 4 \\ 0 & 4 & -1 \end{pmatrix}$. (b) Trova la matrice di $g(x, y) = x_1y_1 + 3x_1y_2 + 3x_2y_1 - x_2y_2 + 2x_1y_3 + 2x_3y_1$ su $\R^3$. (c) Calcola $g_S(e_2, e_3)$ per la matrice del punto (a).
::: soluzione
(a) Per ogni casella scrivo un pezzo: il numero della casella, per la $x$ con l'indice della riga, per la $y$ con l'indice della colonna. Le caselle con 0 le salto.

- Riga 1: $x_1y_1 - 2x_1y_2$.
- Riga 2: $-2x_2y_1 + 3x_2y_2 + 4x_2y_3$.
- Riga 3: $4x_3y_2 - x_3y_3$.

$$g_S(x, y) = x_1y_1 - 2x_1y_2 - 2x_2y_1 + 3x_2y_2 + 4x_2y_3 + 4x_3y_2 - x_3y_3$$

(b) Il numero davanti a $x_iy_j$ va nella riga $i$ e colonna $j$. Un pezzo che manca vale 0.

- Riga 1: davanti a $x_1y_1$ c'è 1, davanti a $x_1y_2$ c'è 3, davanti a $x_1y_3$ c'è 2.
- Riga 2: davanti a $x_2y_1$ c'è 3, davanti a $x_2y_2$ c'è $-1$. Il pezzo $x_2y_3$ manca.
- Riga 3: davanti a $x_3y_1$ c'è 2. I pezzi $x_3y_2$ e $x_3y_3$ mancano.

$$S = \begin{pmatrix} 1 & 3 & 2 \\ 3 & -1 & 0 \\ 2 & 0 & 0 \end{pmatrix}$$

Controllo: la matrice è simmetrica, quindi la formula è davvero un prodotto scalare.

(c) Per il Corollario 19.9 basta leggere la casella nella riga 2 e colonna 3: $g_S(e_2, e_3) = 4$.
:::

::: esercizio medio Degenere, definito positivo o nessuno dei due?
Per ciascuna matrice di' se $g_S$ su $\R^2$ è degenere, definito positivo, o non degenere ma non definito positivo:
$$S_1 = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}, \qquad S_2 = \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}, \qquad S_3 = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}.$$
::: soluzione
Uso le scorciatoie: prima il determinante, poi il numero in alto a sinistra.

**La matrice $S_1$: degenere.**

1. Il determinante è $1 \cdot 4 - 2 \cdot 2 = 0$. Quindi il prodotto è degenere.
2. Il vettore invisibile è un vettore non nullo che la matrice manda nel vettore nullo. La prima riga chiede $x_1 + 2x_2 = 0$: va bene $v = (2, -1)$.
3. Controllo: la prima riga dà $1 \cdot 2 + 2 \cdot (-1) = 0$, la seconda dà $2 \cdot 2 + 4 \cdot (-1) = 0$.

**La matrice $S_2$: definito positivo.**

1. In alto a sinistra c'è 1, positivo. Il determinante è $1 \cdot 5 - 2 \cdot 2 = 1$, positivo. Per il criterio delle matrici $2 \times 2$ il prodotto è definito positivo.
2. Controllo con un altro metodo. Un vettore con sé stesso dà $x_1^2 + 4x_1x_2 + 5x_2^2$. Spezzo $5x_2^2$ in $4x_2^2 + x_2^2$ e riconosco un quadrato:
   $$x_1^2 + 4x_1x_2 + 4x_2^2 + x_2^2 = (x_1 + 2x_2)^2 + x_2^2$$
   È una somma di due quadrati: fa zero solo se $x_2 = 0$ e $x_1 + 2x_2 = 0$, cioè solo per il vettore nullo.

**La matrice $S_3$: non degenere, ma non definito positivo.**

1. Il determinante è $1 \cdot 3 - 2 \cdot 2 = -1$. Non è zero, quindi il prodotto non è degenere.
2. Il determinante è negativo, quindi per il criterio il prodotto non è definito positivo.
3. Un vettore che lo mostra è $(2, -1)$. Con sé stesso dà $x_1^2 + 4x_1x_2 + 3x_2^2$, cioè $4 - 8 + 3 = -1$: un numero negativo.
:::

::: esercizio medio Una base in cui $g_S$ sembra euclideo
Prendi la matrice $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ (Esempio 19.11) e la base $\mathcal B = \{v_1 = (1, -1),\ v_2 = (0, 1)\}$. Calcola $[g_S]_{\mathcal B}$. Che cosa osservi?
::: soluzione
La formula del prodotto è $g_S(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + x_2y_2$. Servono tre prodotti.

1. **Primo vettore con sé stesso.** Metto $x = (1, -1)$ e $y = (1, -1)$:
   $$2 \cdot 1 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 + (-1) \cdot (-1) = 2 - 1 - 1 + 1 = 1$$
2. **Primo con secondo.** Metto $x = (1, -1)$ e $y = (0, 1)$:
   $$2 \cdot 1 \cdot 0 + 1 \cdot 1 + (-1) \cdot 0 + (-1) \cdot 1 = 0 + 1 + 0 - 1 = 0$$
3. **Secondo con sé stesso.** Metto $x = (0, 1)$ e $y = (0, 1)$:
   $$2 \cdot 0 \cdot 0 + 0 \cdot 1 + 1 \cdot 0 + 1 \cdot 1 = 1$$

$$[g_S]_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

**Che cosa si osserva.** La matrice associata è la matrice identità: la stessa del prodotto euclideo nella base canonica. Con le coordinate di questa base, il prodotto $g_S$ diventa il conto della spesa.

Una base così si chiama **ortonormale**. Nella lezione L21 impari a costruirne una con l'algoritmo di Gram–Schmidt.
:::

::: esercizio medio Un prodotto sui polinomi in tre punti simmetrici
Su $\R_2[x]$ prendi il prodotto $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. (a) Trova la matrice associata nella base $\{1, x, x^2\}$. (b) È definito positivo? (c) Quanto vale $\langle x, x^2\rangle$?
::: soluzione
(a) Prima la tabella dei valori nei punti $-1$, $0$ e $1$.

| | in $-1$ | in $0$ | in $1$ |
|---|--:|--:|--:|
| $1$ | $1$ | $1$ | $1$ |
| $x$ | $-1$ | $0$ | $1$ |
| $x^2$ | $1$ | $0$ | $1$ |

Poi i sei prodotti: moltiplico due righe punto per punto e sommo.

| Coppia | Conto | Valore |
|---|---|--:|
| $\langle 1, 1\rangle$ | $1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1$ | $3$ |
| $\langle 1, x\rangle$ | $1 \cdot (-1) + 1 \cdot 0 + 1 \cdot 1$ | $0$ |
| $\langle 1, x^2\rangle$ | $1 \cdot 1 + 1 \cdot 0 + 1 \cdot 1$ | $2$ |
| $\langle x, x\rangle$ | $(-1) \cdot (-1) + 0 \cdot 0 + 1 \cdot 1$ | $2$ |
| $\langle x, x^2\rangle$ | $(-1) \cdot 1 + 0 \cdot 0 + 1 \cdot 1$ | $0$ |
| $\langle x^2, x^2\rangle$ | $1 \cdot 1 + 0 \cdot 0 + 1 \cdot 1$ | $2$ |

La matrice associata, che chiamo $S$:
$$S = \begin{pmatrix} 3 & 0 & 2 \\ 0 & 2 & 0 \\ 2 & 0 & 2 \end{pmatrix}$$

(b) Sì, con il ragionamento dell'Esempio 19.4. Un polinomio con sé stesso dà la somma dei quadrati dei suoi tre valori. Fa zero solo se il polinomio ha le tre radici $-1$, $0$ e $1$. Un polinomio non nullo di grado al massimo 2 ha al massimo due radici (Teorema 4.6).

(c) È la casella nella riga 2 e colonna 3 della matrice: $\langle x, x^2\rangle = 0$. Per questo prodotto i polinomi $x$ e $x^2$ sono «perpendicolari».

È il conto che serviva nella domanda 8 dell'appello dell'08/02/2024, che chiedeva l'angolo tra $x$ e $x^2$. Nella lezione L20 vedrai che l'angolo è $\frac\pi2$, cioè un angolo retto.
:::

::: esercizio medio Il Corollario 19.16 con i polinomi
Con il prodotto e la matrice $S$ dell'esercizio precedente, calcola $\langle 1 + 2x,\ x - x^2\rangle$ in due modi: con le coordinate e direttamente.
::: soluzione
**Primo modo: con le coordinate.**

1. Le coordinate nella base $\{1, x, x^2\}$ sono i coefficienti. Il polinomio $1 + 2x$ ha coordinate $(1, 2, 0)$. Il polinomio $x - x^2$ ha coordinate $(0, 1, -1)$.
2. Matrice per colonna: ogni riga di $S$ per la colonna $(0, 1, -1)$.
   $$S\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \cdot 0 + 0 \cdot 1 + 2 \cdot (-1) \\ 0 \cdot 0 + 2 \cdot 1 + 0 \cdot (-1) \\ 2 \cdot 0 + 0 \cdot 1 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -2 \\ 2 \\ -2 \end{pmatrix}$$
3. Riga per colonna: la riga $(1, 2, 0)$ per la colonna trovata.
   $$1 \cdot (-2) + 2 \cdot 2 + 0 \cdot (-2) = -2 + 4 + 0 = 2$$

**Secondo modo: direttamente.**

1. Valori di $1 + 2x$ nei punti $-1$, $0$, $1$: $1 - 2 = -1$, poi $1$, poi $1 + 2 = 3$.
2. Valori di $x - x^2$ negli stessi punti: $-1 - 1 = -2$, poi $0$, poi $1 - 1 = 0$.
3. Prodotto punto per punto e somma: $(-1) \cdot (-2) + 1 \cdot 0 + 3 \cdot 0 = 2$.

I due modi danno lo stesso numero: 2.
:::

::: esercizio difficile Due punti bastano per $\R_1[x]$, non per $\R_2[x]$
Prendi il prodotto $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$. (a) Dimostra che su $\R_1[x]$ è definito positivo. (b) Su $\R_2[x]$ trova la matrice associata nella base $\{1, x, x^2\}$ e tutti i polinomi $p$ per cui $\langle p, q\rangle = 0$ per ogni $q$.
::: soluzione
Lo spazio $\R_1[x]$ è quello dei polinomi di grado al massimo 1, cioè dei polinomi $a + bx$.

(a) Un polinomio con sé stesso dà $p(0)^2 + p(1)^2$: una somma di due quadrati, mai negativa.

1. Fa zero solo se $p(0) = 0$ e $p(1) = 0$, cioè se il polinomio ha due radici diverse.
2. Un polinomio non nullo di grado 1 ha al massimo una radice (Teorema 4.6). Un polinomio costante non nullo non ne ha nessuna.
3. Quindi un polinomio di grado al massimo 1 con due radici è il polinomio nullo.

Ogni polinomio non nullo con sé stesso dà un numero positivo: il prodotto è definito positivo.

(b) Nei punti 0 e 1 il polinomio $1$ vale 1 e 1. I polinomi $x$ e $x^2$ valgono tutti e due 0 e poi 1.

1. Il polinomio $1$ con sé stesso: $1 \cdot 1 + 1 \cdot 1 = 2$.
2. Il polinomio $1$ con $x$ oppure con $x^2$: $1 \cdot 0 + 1 \cdot 1 = 1$.
3. Gli altri tre prodotti, cioè $x$ con $x$, $x$ con $x^2$ e $x^2$ con $x^2$: $0 \cdot 0 + 1 \cdot 1 = 1$.

$$S = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$$

La seconda e la terza riga sono uguali, quindi il determinante è zero (lezione L10). Il prodotto è degenere.

Ora cerco i polinomi invisibili. Scrivo $p = a + bx + cx^2$, con $a$, $b$, $c$ numeri da trovare.

1. Un polinomio dà zero con tutti esattamente quando dà zero con i tre polinomi della base. Il motivo: ogni polinomio $q$ è una ricetta fatta con $1$, $x$ e $x^2$, e il prodotto si spezza.
2. Prodotto con $1$: $a\langle 1, 1\rangle + b\langle x, 1\rangle + c\langle x^2, 1\rangle = 2a + b + c$.
3. Prodotto con $x$: $a\langle 1, x\rangle + b\langle x, x\rangle + c\langle x^2, x\rangle = a + b + c$.
4. Prodotto con $x^2$: $a\langle 1, x^2\rangle + b\langle x, x^2\rangle + c\langle x^2, x^2\rangle = a + b + c$.
5. I tre risultati devono fare zero. La terza richiesta è uguale alla seconda, quindi restano due equazioni:
   $$\begin{cases} 2a + b + c = 0 \\ a + b + c = 0 \end{cases}$$
6. Tolgo la seconda equazione dalla prima: $a = 0$. Metto $a = 0$ nella seconda: $b + c = 0$, quindi $c = -b$.

I polinomi invisibili sono $p = bx - bx^2 = b\,(x - x^2)$, con $b$ un numero qualsiasi. Sono i multipli di $x - x^2 = x(1 - x)$: il polinomio dell'Esempio 19.4.

Controllo: $x - x^2$ vale 0 in 0 e vale $1 - 1 = 0$ in 1. Quindi con ogni polinomio $q$ dà $0 \cdot q(0) + 0 \cdot q(1) = 0$.
:::

::: esercizio difficile Un prodotto scalare sulle matrici
Su $M(2, \R)$ prendi $g(A, B) = \operatorname{tr}({}^tA\,B)$ (la traccia è la somma degli elementi sulla diagonale). (a) Scrivi $g(A, B)$ in funzione delle entrate. (b) Dimostra che è un prodotto scalare definito positivo. (c) Trova la matrice associata nella base $\{E_{11}, E_{12}, E_{21}, E_{22}\}$ delle matrici con un solo 1. (d) Calcola $g(A, B)$ per $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 3 & 0 \\ 1 & -1 \end{pmatrix}$.

Qui i «vettori» sono matrici con due righe e due colonne, e le «entrate» sono i numeri dentro la matrice. Ogni matrice della base ha un 1 in una casella e 0 nelle altre tre: i due numerini in basso dicono la riga e la colonna dell'1.
::: soluzione
(a) Do un nome alle entrate delle due matrici.
$$A = \begin{pmatrix} a_1 & a_2 \\ a_3 & a_4 \end{pmatrix} \qquad\qquad B = \begin{pmatrix} b_1 & b_2 \\ b_3 & b_4 \end{pmatrix}$$

1. La trasposta di $A$ scambia righe e colonne: ${}^tA = \begin{pmatrix} a_1 & a_3 \\ a_2 & a_4 \end{pmatrix}$.
2. Del prodotto ${}^tA\,B$ servono solo le due caselle sulla diagonale. In alto a sinistra: prima riga di ${}^tA$ per prima colonna di $B$, cioè $a_1b_1 + a_3b_3$. In basso a destra: seconda riga per seconda colonna, cioè $a_2b_2 + a_4b_4$.
3. La traccia è la somma di queste due caselle.

$$g(A, B) = a_1b_1 + a_2b_2 + a_3b_3 + a_4b_4$$

(b) La formula del punto (a) è il conto della spesa: ogni entrata di $A$ per l'entrata di $B$ nello stesso posto, e poi la somma. È il prodotto euclideo di $\R^4$, scritto sulle quattro entrate. Quindi è bilineare, simmetrico e definito positivo (Proposizione 19.6). Una matrice con sé stessa dà $a_1^2 + a_2^2 + a_3^2 + a_4^2$, che è positivo se la matrice non è quella nulla.

(c) Ogni matrice della base, letta come lista di quattro numeri, ha un 1 e tre 0. Una di loro con sé stessa dà $1 \cdot 1 = 1$. Due diverse danno 0, perché gli 1 stanno in posti diversi. La matrice associata è la matrice identità con quattro righe e quattro colonne, $I_4$.

(d) Entrata per entrata: $1 \cdot 3 + 2 \cdot 0 + 0 \cdot 1 + 1 \cdot (-1) = 3 + 0 + 0 - 1 = 2$.
:::

::: esercizio esame Matrice associata su $\R_1[x]$
Su $\R_1[x]$ prendi $g(p, q) = p(2)q(2) - p(0)q(0)$ e la base $\mathcal B = \{x + 1, 1\}$. (a) Calcola $[g]_{\mathcal B}$. (b) $g$ è degenere? (c) $g$ è definito positivo?
::: soluzione
(a) Tabella dei valori nei punti 2 e 0.

| | in 2 | in 0 |
|---|--:|--:|
| $x + 1$ | $3$ | $1$ |
| $1$ | $1$ | $1$ |

La formula dice: i due valori in 2 moltiplicati tra loro, meno i due valori in 0 moltiplicati tra loro.

1. Primo polinomio con sé stesso: $3 \cdot 3 - 1 \cdot 1 = 8$.
2. Primo con secondo: $3 \cdot 1 - 1 \cdot 1 = 2$.
3. Secondo con sé stesso: $1 \cdot 1 - 1 \cdot 1 = 0$.

$$[g]_{\mathcal B} = \begin{pmatrix} 8 & 2 \\ 2 & 0 \end{pmatrix}$$

(b) **No, non è degenere.** Il determinante della matrice associata è $8 \cdot 0 - 2 \cdot 2 = -4$, diverso da zero. Il criterio del determinante vale per la matrice associata in qualsiasi base, perché con le coordinate il prodotto diventa un $g_S$ (Corollario 19.16).

Lo stesso risultato senza il determinante. Prendo un polinomio $p$ che dà zero con tutti.

1. Con $q = 1$, che vale 1 in tutti e due i punti: $p(2) - p(0) = 0$.
2. Con $q = x$, che vale 2 in 2 e vale 0 in 0: $2p(2) - 0 = 0$, quindi $p(2) = 0$.
3. Dal passo 1 allora anche $p(0) = 0$.
4. Il polinomio $p$ ha grado al massimo 1 e due radici, quindi è il polinomio nullo.

(c) **No, non è definito positivo.** Il polinomio $1$ non è nullo, ma con sé stesso dà $0$: è la casella in basso a destra della matrice.

In più il segno cambia. Il polinomio $x$ con sé stesso dà $2 \cdot 2 - 0 \cdot 0 = 4$, positivo. Il polinomio $x - 2$ vale 0 in 2 e vale $-2$ in 0: con sé stesso dà $0 - 4 = -4$, negativo.
:::

::: esercizio esame Matrice associata a $g_S$ in una base di $\R^3$
Prendi la matrice $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$. (a) Dimostra che $g_S$ è definito positivo. (b) Calcola $[g_S]_{\mathcal B}$ per $\mathcal B = \{v_1 = (1, 0, 1),\ v_2 = (0, 1, 1),\ v_3 = (1, 1, 0)\}$. (c) Calcola $g_S(v_1 + v_2, v_3)$ in due modi.
::: soluzione
(a) Scrivo il prodotto di un vettore con sé stesso. Ogni casella non nulla dà un pezzo.

1. Dalla matrice: $g_S(x, x) = x_1^2 + x_1x_2 + x_2x_1 + 2x_2^2 + 3x_3^2$.
2. I due pezzi misti sono uguali: $x_1^2 + 2x_1x_2 + 2x_2^2 + 3x_3^2$.
3. Spezzo $2x_2^2$ in $x_2^2 + x_2^2$ e riconosco il quadrato di una somma:
   $$g_S(x, x) = (x_1 + x_2)^2 + x_2^2 + 3x_3^2$$
4. I tre pezzi non sono mai negativi. Fanno zero tutti insieme solo se $x_3 = 0$, $x_2 = 0$ e $x_1 + x_2 = 0$, cioè solo per il vettore nullo.

(b) Seguo il metodo: calcolo una volta sola le tre colonne $Sv_1$, $Sv_2$, $Sv_3$. Ogni riga di $S$ va moltiplicata per il vettore.

- $Sv_1$, con $v_1 = (1, 0, 1)$: $(1 + 0 + 0,\ 1 + 0 + 0,\ 0 + 0 + 3) = (1, 1, 3)$.
- $Sv_2$, con $v_2 = (0, 1, 1)$: $(0 + 1 + 0,\ 0 + 2 + 0,\ 0 + 0 + 3) = (1, 2, 3)$.
- $Sv_3$, con $v_3 = (1, 1, 0)$: $(1 + 1 + 0,\ 1 + 2 + 0,\ 0 + 0 + 0) = (2, 3, 0)$.

Ogni casella è un conto della spesa tra un vettore della base e una di queste colonne.

| Casella | Conto | Valore |
|---|---|--:|
| $g_S(v_1, v_1)$ | $(1, 0, 1)$ con $(1, 1, 3)$: $1 + 0 + 3$ | $4$ |
| $g_S(v_1, v_2)$ | $(1, 0, 1)$ con $(1, 2, 3)$: $1 + 0 + 3$ | $4$ |
| $g_S(v_1, v_3)$ | $(1, 0, 1)$ con $(2, 3, 0)$: $2 + 0 + 0$ | $2$ |
| $g_S(v_2, v_2)$ | $(0, 1, 1)$ con $(1, 2, 3)$: $0 + 2 + 3$ | $5$ |
| $g_S(v_2, v_3)$ | $(0, 1, 1)$ con $(2, 3, 0)$: $0 + 3 + 0$ | $3$ |
| $g_S(v_3, v_3)$ | $(1, 1, 0)$ con $(2, 3, 0)$: $2 + 3 + 0$ | $5$ |

$$[g_S]_{\mathcal B} = \begin{pmatrix} 4 & 4 & 2 \\ 4 & 5 & 3 \\ 2 & 3 & 5 \end{pmatrix}$$

(c) **Primo modo: con la matrice associata.** La somma nel primo posto si spezza: $g_S(v_1, v_3) + g_S(v_2, v_3)$. Sono le caselle nella riga 1 e colonna 3 e nella riga 2 e colonna 3: $2 + 3 = 5$.

**Secondo modo: direttamente.** La somma è $v_1 + v_2 = (1, 1, 2)$. La colonna $Sv_3$ è $(2, 3, 0)$. Il conto della spesa dà $1 \cdot 2 + 1 \cdot 3 + 2 \cdot 0 = 5$.

I due modi danno lo stesso numero: 5.
:::

## Domande di ripasso

::: domanda Che cos'è un prodotto scalare su uno spazio vettoriale reale $V$?
Una regola che prende due vettori di $V$ e restituisce un numero reale, scritto $\langle v, w\rangle$. Deve rispettare tre richieste: una somma nel primo posto si spezza, un numero nel primo posto esce fuori, l'ordine dei due vettori non conta. Da queste tre viene che le stesse regole valgono anche nel secondo posto: il prodotto è bilineare e simmetrico.
:::

::: domanda Perché nelle lezioni sui prodotti scalari il campo è $\R$ e non $\C$ o $\Q$?
Per due motivi. Serve poter dire che un numero è positivo, e tra i numeri complessi questo non ha senso. E servono le radici quadrate dei numeri positivi, per le lunghezze della lezione L20: tra le frazioni certe radici mancano, per esempio $\sqrt 2$.
:::

::: domanda Come si ricava $\langle v, \lambda w\rangle = \lambda\langle v, w\rangle$ dagli assiomi?
In tre mosse. Con la simmetria scambio i due posti e ottengo $\langle \lambda w, v\rangle$. Ora il numero sta nel primo posto e per l'assioma (2) esce: $\lambda\langle w, v\rangle$. Con la simmetria scambio di nuovo: $\lambda\langle v, w\rangle$.
:::

::: domanda Perché $\langle v, 0\rangle = 0$ per ogni $v$?
Il vettore nullo è uguale a sé stesso più sé stesso. Quindi, spezzando la somma, $\langle v, 0\rangle$ è uguale a $\langle v, 0\rangle + \langle v, 0\rangle$. Un numero uguale al suo doppio è zero: basta togliere quel numero da tutti e due i lati.
:::

::: domanda Che differenza c'è tra «degenere» e «definito positivo»? Fai un esempio per ciascuno.
Degenere: c'è un vettore non nullo che dà zero con tutti i vettori. Esempio: il prodotto $x_1y_1$ su $\R^2$ non vede il vettore $e_2$.

Definito positivo: ogni vettore non nullo con sé stesso dà un numero positivo. Esempio: il prodotto euclideo.

La prima proprietà guarda il prodotto di un vettore con tutti gli altri. La seconda guarda il prodotto di ogni vettore con sé stesso.
:::

::: domanda Perché un prodotto definito positivo non è degenere? Vale il viceversa?
Un vettore non nullo che dà zero con tutti darebbe zero anche con sé stesso. In un prodotto definito positivo questo non succede mai. Il viceversa è falso: il prodotto $x_1y_1 - x_2y_2$ non è degenere, ma il vettore $e_2$ con sé stesso dà $-1$.
:::

::: domanda Che cos'è il prodotto scalare euclideo e perché è definito positivo?
È il conto della spesa su $\R^n$: si moltiplicano i numeri nello stesso posto e si somma. Si scrive anche ${}^tx\,y$. È definito positivo perché un vettore con sé stesso dà la somma dei quadrati dei suoi numeri. Questa somma è positiva appena un numero del vettore non è zero.
:::

::: domanda Come si ottiene un prodotto scalare da una matrice? Perché la matrice deve essere simmetrica?
Con la regola «riga, matrice, colonna»: $g_S(x, y) = {}^tx\,S\,y$. Somme e multipli si spezzano grazie alle regole del prodotto tra matrici. Scambiando $x$ con $y$ i due pezzi misti si scambiano tra loro. Il risultato resta uguale solo se hanno lo stesso peso, cioè se la matrice è simmetrica.
:::

::: domanda Quanto vale $g_S(e_i, e_j)$? E come si legge la matrice dalla formula di $g_S$?
Vale $S_{ij}$: il primo vettore sceglie la riga, il secondo la colonna. Per questo il numero nella riga $i$ e colonna $j$ è il numero che nella formula sta davanti a $x_iy_j$, senza dividere per due.
:::

::: domanda Che cos'è la matrice associata $[g]_{\mathcal B}$? Perché è simmetrica?
È la tabella dei prodotti tra i vettori della base $\mathcal B$. Nella riga $i$ e colonna $j$ c'è il prodotto del vettore numero $i$ con il vettore numero $j$. È simmetrica perché in un prodotto scalare l'ordine dei due vettori non conta.
:::

::: domanda Come si calcola $g(v, w)$ conoscendo $[g]_{\mathcal B}$?
Con le coordinate: la riga delle coordinate di $v$, per la matrice associata, per la colonna delle coordinate di $w$ (Corollario 19.16). Funziona perché il prodotto si spezza. Scrivendo $v$ e $w$ come ricette con i vettori della base, restano solo i prodotti della tabella, moltiplicati per le quantità delle due ricette.
:::

::: domanda Perché $p(0)q(0) + p(1)q(1) + p(2)q(2)$ è definito positivo su $\R_2[x]$, mentre $p(0)q(0) + p(1)q(1)$ è degenere?
Nel primo un polinomio con sé stesso dà zero solo se ha tre radici diverse. Per un polinomio non nullo di grado al massimo 2 è impossibile. Nel secondo bastano due radici: il polinomio $x(1 - x)$ non è nullo, vale zero in 0 e in 1, e quindi dà zero con ogni polinomio.
:::

## Glossario

```glossario
Prodotto scalare | Una regola bilineare e simmetrica che da due vettori dà un numero. Si scrive $\langle v, w\rangle$ oppure $g(v, w)$. L'esempio di partenza è il conto della spesa.
Bilineare | Somme e multipli si spezzano sia nel primo posto sia nel secondo. Per esempio $\langle 2v, w\rangle = 2\langle v, w\rangle$.
Simmetrico | L'ordine dei due vettori non conta: $\langle v, w\rangle = \langle w, v\rangle$.
Degenere | Un prodotto scalare con un vettore non nullo che dà zero con tutti i vettori. Per $g_S$ succede esattamente quando $\det S = 0$.
Non degenere | Un prodotto scalare senza vettori invisibili: per ogni vettore non nullo ce n'è almeno uno con cui il prodotto non fa zero.
Definito positivo | Un prodotto scalare in cui ogni vettore non nullo, con sé stesso, dà un numero positivo. Un prodotto definito positivo non è mai degenere.
Prodotto scalare euclideo | Il conto della spesa su $\R^n$: si moltiplicano i numeri nello stesso posto e si somma. Si scrive anche ${}^tx\,y$. È definito positivo.
Trasposta ${}^tx$ | Il vettore colonna $x$ scritto in riga. Il prodotto ${}^tx\,y$, riga per colonna, dà un numero.
Matrice simmetrica | Una matrice quadrata uguale alla sua immagine allo specchio rispetto alla diagonale: ${}^tS = S$.
$g_S$ | Il prodotto scalare dato da una matrice simmetrica $S$: $g_S(x, y) = {}^tx\,S\,y$. Il numero $S_{ij}$ sta davanti a $x_iy_j$.
Base canonica | I vettori $e_1, \dots, e_n$: ognuno ha un 1 in un posto e 0 negli altri. Vale $g_S(e_i, e_j) = S_{ij}$.
Matrice associata $[g]_{\mathcal B}$ | La tabella dei prodotti tra i vettori della base $\mathcal B$: nella riga $i$ e colonna $j$ c'è $g(v_i, v_j)$. È sempre simmetrica.
Coordinate $[v]_{\mathcal B}$ | Le quantità della ricetta che costruisce $v$ con i vettori della base $\mathcal B$, scritte in colonna.
$\R_k[x]$ | Lo spazio dei polinomi di grado al massimo $k$ con i coefficienti reali. Ha dimensione $k + 1$ e base canonica $\{1, x, \dots, x^k\}$.
Vettore nullo | Il vettore fatto di soli zeri. Con il vettore nullo ogni prodotto scalare dà zero.
Prodotto per uno scalare | Un numero per un vettore: il risultato è un vettore. Non va confuso con il prodotto scalare, che dà un numero.
Vettore isotropo | Parola del libro di Martelli: un vettore che con sé stesso dà zero. In un prodotto definito positivo l'unico è il vettore nullo.
Radicale | Parola del libro di Martelli: l'insieme dei vettori che danno zero con tutti. Per $g_S$ è il nucleo di $S$. Contiene solo il vettore nullo quando il prodotto non è degenere.
```

## Checklist

```checklist
- So calcolare il prodotto scalare euclideo di due vettori e leggere dal segno se l'angolo è acuto, retto o ottuso.
- So dire i tre assiomi del prodotto scalare e spiegare perché le stesse regole valgono anche nel secondo posto.
- So spiegare perché con il vettore nullo viene sempre zero.
- So riconoscere se una formula su $\R^2$ o $\R^3$ è un prodotto scalare, e mostrare con un esempio con i numeri quando non lo è.
- So distinguere degenere, non degenere e definito positivo, con un esempio per ogni caso.
- So spiegare perché un prodotto definito positivo non è degenere, e perché il contrario è falso.
- So scrivere il prodotto euclideo in $\R^n$ per esteso, con il simbolo di somma e come ${}^tx\,y$.
- So passare da una matrice simmetrica $S$ alla formula di $g_S$ e dalla formula alla matrice, senza dividere per due.
- So calcolare la matrice associata $[g]_{\mathcal B}$ in una base qualsiasi, anche per prodotti tra polinomi.
- So usare la formula $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$.
- So decidere con il determinante se $g_S$ è degenere, e so quando una matrice $2 \times 2$ è definita positiva.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 19 «Prodotti scalari I», pp. 96–99: le sezioni 19.A (definizioni), 19.B (matrici simmetriche) e 19.C (matrice associata) sono seguite in ordine, con la stessa numerazione (Definizioni 19.1, 19.2, 19.5, 19.12; Proposizioni 19.3, 19.6, 19.7, 19.8, 19.15; Corollari 19.9, 19.16; Esempi 19.4, 19.10, 19.11, 19.13, 19.14). Le dispense non hanno esercizi per questa lezione. Richiami da altre lezioni: Teorema 4.6 (radici di un polinomio), lezioni L08 (trasposta), L10 (determinante), L15 (coordinate).
- **B. Martelli, *Geometria e algebra lineare***, capitolo 7: §7.1 (in particolare la dimostrazione della Proposizione 7.1.5, i criteri per le matrici diagonali del §7.1.6, la Proposizione 7.1.23 sul radicale e le parole «isotropo» e «radicale») e §7.2.1 (matrice associata). Il libro è gratuito: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Appelli d'esame** (Moodle 2025/26): testi degli appelli del 24/01/2024 (domanda 7), 10/06/2024 (domanda 4), 10/07/2024 (domanda 9), 16/01/2025 e 07/02/2025 (problema 12), 15/01/2026 (domanda 9), 05/02/2026 (problema 12), 03/06/2026 (domanda 4). Le tre domande riportate sono risolte in questi appunti.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi sono di questi appunti. Le parti **«Oltre le dispense»** (il quadrato di una somma, il prodotto della fisica, i criteri con il determinante, le matrici diagonali e il criterio per le matrici $2 \times 2$) e l'approfondimento sulla non degenerazione del terzo prodotto dell'Esempio 19.4 collegano la lezione al resto del corso e all'esame.
