---
corso: MDAG
modulo: AG
lezione: L10
titolo: Matrici III
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L10
descrizione: >-
  Appunti della lezione L10 di Algebra lineare e Geometria (MDAG, parte 2): come cambia il determinante con le mosse
  di Gauss, determinante nullo e righe dipendenti, teorema di Binet, cofattori, matrice inversa e criterio di
  invertibilità, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Come si calcola in fretta un determinante grande, quando vale zero, quanto vale il determinante di un prodotto e
  come si disfa quello che fa una matrice, trovando la sua inversa. Alla fine sai rispondere alla domanda che apre
  molti problemi d'esame: per quali valori del parametro la matrice è invertibile?
materiale: dispense
scheda:
  Dispense: lezione 10 · pp. 46–49
  Libro: Martelli, §3.3.5, §3.3.7, §3.4.5–3.4.7
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 10 «Matrici III»; B. Martelli, Geometria e algebra lineare, §3.3.5, §3.3.7, §3.3.9 e §3.4.5–3.4.8
appunti_html: appunti/MDAG/L10_matrici_3.html
genera_html: true
---

## In breve

- Ci sono tre **mosse sulle righe**, le mosse di Gauss. Scambiare due righe cambia il segno del determinante. Moltiplicare una riga per un numero moltiplica il determinante per quel numero. Aggiungere a una riga un multiplo di un'altra non lo cambia.
- Il metodo pratico per i determinanti grandi: con le mosse si rende la matrice triangolare, poi si moltiplica la diagonale, cambiando segno per ogni scambio.
- Il determinante è zero esattamente quando una riga è un doppione delle altre, cioè si ottiene mescolandole. Due righe uguali o proporzionali danno subito zero.
- **Teorema di Binet**: il determinante di un prodotto di matrici è il prodotto dei determinanti. Per esempio il determinante del cubo di una matrice è il cubo del determinante.
- Una matrice è **invertibile** quando un'altra matrice disfa quello che fa lei. Succede esattamente quando il determinante non è zero.
- L'inversa si calcola con i **cofattori**. Per le $2 \times 2$: scambia la diagonale, cambia segno agli altri due numeri, dividi per il determinante.
- All'esame: «per quali valori di $k$ la matrice è invertibile?» nei problemi; il determinante delle potenze con Binet e i tranelli sulle mosse di Gauss nei quiz.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Tre mosse sulle righe (p. 46)

Prendi la matrice

$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix},$$

che ha determinante $1 \cdot 4 - 2 \cdot 3 = 4 - 6 = -2$ (lezione L09). Ora cambio le sue righe in tre modi diversi e ricalcolo il determinante ogni volta.

| Mossa | Nuova matrice | Determinante | Rispetto a $-2$ |
|---|---|---|---|
| scambio le due righe | $\begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$ | $6 - 4 = 2$ | cambia segno |
| moltiplico la prima riga per 5 | $\begin{pmatrix} 5 & 10 \\ 3 & 4 \end{pmatrix}$ | $20 - 30 = -10$ | moltiplicato per 5 |
| tolgo 3 volte la prima riga dalla seconda | $\begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}$ | $-2 - 0 = -2$ | uguale |

La terza mossa è la più preziosa. Ha creato uno zero **senza cambiare** il determinante, e la matrice è diventata triangolare: adesso il determinante si legge sulla diagonale, $1 \cdot (-2) = -2$.

Succede sempre così. Le dispense lo scrivono in questo modo.

> [!PROP] 10.1 · Il determinante e le mosse sulle righe
> Sia $A$ una matrice $n \times n$.
> 1. Se $A'$ è ottenuta da $A$ scambiando due righe, allora $\det(A') = -\det(A)$.
> 2. Se $A'$ è ottenuta da $A$ moltiplicando una riga di $A$ per uno scalare $\lambda$, allora $\det(A') = \lambda \det(A)$.
> 3. Se $A'$ è ottenuta da $A$ aggiungendo ad una riga il multiplo di un'altra riga, allora $\det(A') = \det A$.
>
> Le identiche regole valgono anche per le colonne (invece delle righe).

**Come si legge.**

- $A'$, «a primo», è la matrice dopo la mossa. $\lambda$, «lambda», è un numero qualsiasi.
- Scambio: il determinante cambia segno.
- Una riga per un numero: il determinante viene moltiplicato per lo stesso numero. È la Proposizione 9.11 della lezione L09.
- Una riga più un multiplo di un'altra: il determinante non cambia. La riga che cambia è una sola; quella usata per il multiplo resta com'è.
- Le stesse regole valgono per le colonne, perché la trasposta ha lo stesso determinante (Proposizione 9.5).

Queste tre operazioni si chiamano **mosse di Gauss**. Nella lezione L11 diventeranno lo strumento per risolvere i sistemi di equazioni. Si scrivono con la lettera $R$, da «riga»: $R_2$ è la seconda riga.

| Tipo | Mossa | Si scrive | Effetto sul determinante |
|---|---|---|---|
| (I) | scambiare due righe | $R_1 \leftrightarrow R_2$ | cambia segno |
| (II) | moltiplicare una riga per un numero diverso da zero | $R_2 \to 5R_2$ | moltiplicato per quel numero |
| (III) | aggiungere a una riga un multiplo di un'altra | $R_2 \to R_2 - 3R_1$ | invariato |

La freccia $\to$ si legge «diventa»: $R_2 \to R_2 - 3R_1$ vuol dire «la seconda riga diventa la seconda riga meno 3 volte la prima». Come mossa di Gauss la (II) si usa solo con numeri diversi da zero: moltiplicare una riga per zero cancellerebbe informazione.

> [!DIM] della Proposizione 10.1
> Le dispense danno una spiegazione in tre righe; eccola con tutti i passaggi.
>
> **(1) Scambio.** Per $n = 2$: $\det \begin{pmatrix} c & d \\ a & b \end{pmatrix} = cb - da = -(ad - bc)$. Per $n \ge 3$ si procede per induzione sull'ordine: c'è almeno una riga $i$ **non toccata** dallo scambio. Sviluppando $\det A'$ lungo quella riga, ogni sottomatrice $C'_{ij}$ è la $C_{ij}$ di $A$ con due righe scambiate, e ha ordine $n - 1$: per l'ipotesi induttiva $\det C'_{ij} = -\det C_{ij}$. Quindi ogni addendo cambia segno, e anche la somma.
>
> **Una conseguenza:** se $A$ ha **due righe uguali**, allora $\det A = 0$. Infatti scambiando le due righe uguali si ottiene la stessa matrice, ma per (1) il determinante cambia segno: $\det A = -\det A$, cioè $\det A = 0$.
>
> **(2)** È la Proposizione 9.11.
>
> **(3) Somma di un multiplo.** Sia $A'$ ottenuta con $R_i \to R_i + \lambda R_k$. Sviluppo $\det A'$ lungo la riga $i$; le sottomatrici $C_{ij}$ non contengono la riga $i$, quindi sono quelle di $A$:
> $$\det A' = \sum_j (-1)^{i+j}(a_{ij} + \lambda a_{kj}) \det C_{ij} = \det A + \lambda \sum_j (-1)^{i+j} a_{kj} \det C_{ij}.$$
> L'ultima somma è lo sviluppo lungo la riga $i$ della matrice che ha la riga $k$ **al posto** della riga $i$: una matrice con due righe uguali, il cui determinante è $0$. Resta $\det A' = \det A$.
>
> **Colonne:** basta applicare tutto a ${}^tA$, perché $\det({}^tA) = \det A$.

::: prova Una matrice $3 \times 3$ ha determinante 7. Scambio la prima e la seconda riga. Quanto vale il nuovo determinante? E se poi tolgo dalla terza riga il doppio della prima?
Dopo lo scambio: $-7$. Togliere un multiplo di un'altra riga non cambia niente: resta $-7$.
:::

### Il metodo di Gauss per i determinanti

Ecco l'esempio delle dispense: un determinante calcolato con due mosse.

> [!ESEMPIO] 10.2 · Un determinante nullo con due mosse
> Sia
> $$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}.$$
> Se togliamo la prima riga di $A$ dalla seconda e dalla terza riga ($R_2 \to R_2 - R_1$, $R_3 \to R_3 - R_1$), otteniamo una nuova matrice
> $$A' = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 3 & 3 \\ 6 & 6 & 6 \end{pmatrix}.$$
> Visto che si tratta di mosse di Gauss del terzo tipo, $\det(A') = \det(A)$. Ora possiamo togliere 2 volte la seconda riga dalla terza ($R_3 \to R_3 - 2R_2$: $(6, 6, 6) - 2 \cdot (3, 3, 3) = (0, 0, 0)$). Otteniamo
> $$A'' = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 3 & 3 \\ 0 & 0 & 0 \end{pmatrix},$$
> con $\det(A'') = \det(A') = \det(A)$. Visto che $A''$ ha una riga con solo entrate $0$, $\det(A'') = 0$ (Proposizione 9.10), e allora anche la matrice $A$ ha determinante $0$.

L'idea generale: con le mosse del terzo tipo si creano zeri sotto la diagonale, finché la matrice è triangolare. Il determinante non cambia, e alla fine si legge sulla diagonale.

> [!METODO] Triangolarizzare e moltiplicare la diagonale
> 1. Con mosse del tipo (III) crea zeri **sotto** la diagonale, una colonna alla volta: nella prima colonna usa la prima riga, nella seconda la seconda, e così via. Il determinante non cambia.
> 2. Se sulla diagonale, dove ti serve un numero diverso da zero, c'è uno 0, **scambia** quella riga con una più in basso (tipo (I)) e **cambia il segno**. Se sotto quello 0 ci sono solo zeri, puoi fermarti: la matrice triangolare finale avrà uno 0 sulla diagonale, quindi il determinante è 0.
> 3. Se usi una mossa (II) per comodità, per esempio per dividere una riga per 2, **ricorda il numero**: alla fine dovrai fare il conto al contrario.
> 4. Quando la matrice è triangolare, il determinante è il prodotto della diagonale (Proposizione 9.3), con un segno meno per ogni scambio.
> 5. Se a metà strada compare una riga di zeri, il determinante è 0 e puoi fermarti.
>
> Si può anche mescolare con Laplace: dopo aver creato zeri in una colonna, sviluppa lungo quella colonna.

> [!ESEMPIO] · Una $3 \times 3$ che richiede uno scambio
> $$B = \begin{pmatrix} 0 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 4 & 5 \end{pmatrix}$$
> 1. Nella casella in alto a sinistra c'è uno 0: scambio le prime due righe. Il determinante cambia segno.
>    $$\begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 2 & 4 & 5 \end{pmatrix}$$
> 2. Tolgo dalla terza riga il doppio della prima ($R_3 \to R_3 - 2R_1$):
>    $$\begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 2 & 3 \end{pmatrix}$$
> 3. Tolgo dalla terza riga la seconda ($R_3 \to R_3 - R_2$):
>    $$\begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$
> 4. Triangolare con diagonale 1, 2, 2: prodotto 4. C'è stato **uno** scambio, quindi il determinante di $B$ è $-4$.
>
> Controllo con Sarrus: $(0 + 4 + 4) - (2 + 0 + 10) = 8 - 12 = -4$.

> [!ESEMPIO] · Una $4 \times 4$ con sole mosse del terzo tipo
> $$C = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 2 & 2 \\ 1 & 2 & 3 & 3 \\ 1 & 2 & 3 & 4 \end{pmatrix} \xrightarrow{\substack{R_2 \to R_2 - R_1 \\ R_3 \to R_3 - R_1 \\ R_4 \to R_4 - R_1}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 1 & 2 & 2 \\ 0 & 1 & 2 & 3 \end{pmatrix}$$
> $$\xrightarrow{\substack{R_3 \to R_3 - R_2 \\ R_4 \to R_4 - R_2}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 2 \end{pmatrix} \xrightarrow{R_4 \to R_4 - R_3} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$
> Nessuno scambio, diagonale di 1: il determinante è 1. Con la definizione sarebbero stati 24 prodotti.

Nello strumento qui sotto c'è la matrice dell'Esempio 10.2. Premi «Calcola»: lo strumento usa mosse diverse da quelle delle dispense ($R_2 \to R_2 - 4R_1$ e $R_3 \to R_3 - 7R_1$, poi $R_3 \to R_3 - 2R_2$), ma il determinante è lo stesso, 0. Prova poi le matrici $B$ e $C$ di questa sezione (`0 2 1; 1 1 1; 2 4 5` e `1 1 1 1; 1 2 2 2; 1 2 3 3; 1 2 3 4`): nel caso di $B$ lo strumento segnala lo scambio di righe e il cambio di segno.

```widget gauss
titolo: Il determinante con le mosse di Gauss
matrice: 1 2 3; 4 5 6; 7 8 9
modo: determinante
modi: determinante
```

> [!TRAPPOLA] La mossa «$R_2 \to 2R_2 - R_1$» non è innocua
> Questa mossa ne contiene due: prima la seconda riga per 2 (tipo (II), determinante per 2), poi meno la prima riga (tipo (III), nessun effetto). Il determinante risulta **moltiplicato per 2**. Chi la usa per evitare le frazioni deve ricordarsene e dividere alla fine. Allo stesso modo, una matrice «ridotta a scalini» con mosse qualsiasi **non** ha lo stesso determinante della matrice di partenza: è un tranello classico dei quiz («Verso l'esame»).

::: prova Calcola con le mosse il determinante di $\begin{pmatrix} 2 & 4 \\ 3 & 1 \end{pmatrix}$.
Tolgo dalla seconda riga $\frac 32$ volte la prima: la seconda riga diventa $(3 - 3,\ 1 - 6) = (0, -5)$. Triangolare con diagonale 2 e $-5$: determinante $-10$. Controllo: $2 \cdot 1 - 4 \cdot 3 = -10$.
:::

> [!RICORDA]
> - Scambio di due righe: il determinante cambia segno. Una riga per un numero: determinante per quel numero. Una riga più un multiplo di un'altra: determinante uguale.
> - Metodo: si rende la matrice triangolare con le mosse e si moltiplica la diagonale, con un segno meno per ogni scambio.

## Determinante zero: una riga di troppo (p. 47)

Nell'Esempio 10.2 il determinante è venuto zero. Guarda le righe: la terza si ottiene dalle altre due,

$$(7, 8, 9) = 2 \cdot (4, 5, 6) - (1, 2, 3).$$

Con le parole della lezione L07: la terza riga è un **doppione**, una ricetta con le altre due. Non è un caso. Le dispense lo scrivono così.

> [!PROP] 10.3 · Determinante nullo
> $\det(A) = 0$ se e solo se una riga (o una colonna) di $A$ è combinazione lineare delle altre.

**Come si legge.** Il determinante è zero esattamente quando una riga è un doppione delle altre, cioè si ottiene mescolandole. Lo stesso con le colonne. «Se e solo se» vuol dire che vale in tutti e due i sensi.

Nel disegno della lezione L09: se una colonna è un doppione, il parallelogramma, o la scatola, si schiaccia. L'area, o il volume, è zero.

Le dispense spiegano un senso: se una riga è un doppione, il determinante è zero. L'idea: con mosse del terzo tipo, che non cambiano il determinante, si toglie il doppione e resta una riga di zeri. Ecco i passaggi, quando il doppione è la prima riga.

Supponiamo che esistano numeri $c_2, \dots, c_n$ con

$$A_1 = c_2A_2 + \dots + c_nA_n,$$

dove $A_1, \dots, A_n$ sono le righe di $A$.

1. Sia $A'$ la matrice che si ottiene da $A$ sostituendo la prima riga con la **riga di zeri**. Per la Proposizione 9.10, $\det(A') = 0$.
2. Ora applico ad $A'$, una dopo l'altra, mosse del terzo tipo: sommo alla prima riga prima $c_2A_2$, poi $c_3A_3$, e così via fino a $c_nA_n$. Il determinante non cambia mai.
3. Alla fine la prima riga è $0 + c_2A_2 + \dots + c_nA_n = A_1$: la matrice finale è esattamente $A$.
4. Quindi $\det(A) = \det(A') = 0$.

Le dispense non dimostrano l'altro senso: se il determinante è zero, allora qualche riga è un doppione.

> [!NOTA] Quale «Proprietà 1»?
> Nelle dispense, a p. 47, il passaggio 1 è giustificato con «per la Proprietà 1»: si tratta della prima proprietà della sezione 9.C, cioè della Proposizione 9.10 (una riga nulla dà determinante nullo), non del punto (1) della Proposizione 10.1 (lo scambio di due righe).

> [!OLTRE] · l'altra direzione, e il collegamento con il rango
> Martelli (Proposizione 3.3.12) dimostra che per una matrice quadrata $n \times n$ il determinante è diverso da zero esattamente quando il rango è $n$ (lezione L08). Usa le mosse di Gauss: le mosse non cambiano il rango e cambiano il determinante solo per numeri diversi da zero. Per una matrice a scalini le due condizioni dicono la stessa cosa: tutti i numeri sulla diagonale sono diversi da zero. Da qui segue l'altro senso della Proposizione 10.3. Se il determinante è zero, il rango è minore di $n$; il rango per righe è lo stesso (Proposizione 8.6), quindi le righe sono dipendenti, e una di loro è un doppione (Proposizione 7.2). Un'altra conseguenza (Martelli, Proposizione 3.3.15): **$n$ vettori di $\K^n$ formano una base esattamente quando la matrice che li ha come colonne ha determinante diverso da zero.**

> [!ESEMPIO] · Determinanti nulli a colpo d'occhio
> $$\det \begin{pmatrix} 1 & 5 & 1 \\ 2 & 7 & 2 \\ 3 & 0 & 3 \end{pmatrix} = 0, \qquad \det \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 5 & 1 & 9 \end{pmatrix} = 0, \qquad \det \begin{pmatrix} 1 & 2 & 3 & 4 \\ 5 & 6 & 7 & 8 \\ 9 & 10 & 11 & 12 \\ 13 & 14 & 15 & 16 \end{pmatrix} = 0.$$
> - Nella prima la prima e la terza **colonna** sono uguali.
> - Nella seconda la seconda riga è il doppio della prima.
> - Nella terza ogni riga supera la precedente di $(4, 4, 4, 4)$. Quindi $R_2 - R_1 = R_3 - R_2$, cioè $R_3 = 2R_2 - R_1$: la terza riga è un doppione.

::: prova Il determinante di $\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 1 & 3 & 7 \end{pmatrix}$ è zero? Cerca un doppione.
Sì: la terza riga è la somma delle prime due, $(1 + 0,\ 2 + 1,\ 3 + 4) = (1, 3, 7)$. È un doppione, quindi il determinante è zero.
:::

> [!RICORDA]
> - Determinante zero esattamente quando una riga, o una colonna, è un doppione delle altre.
> - Righe uguali, proporzionali o somme di altre righe: determinante zero senza conti.

## Il determinante di un prodotto: il teorema di Binet (p. 47)

Ricorda l'idea della lezione L09: una matrice ingrandisce le aree, e il determinante dice di quanto. Se prima applico una matrice che moltiplica le aree per 6, e poi una che le moltiplica per $-2$, in tutto le aree vengono moltiplicate per $6 \cdot (-2) = -12$.

Lo controllo con i numeri. Prendo

$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix},$$

con determinanti $-2$ e $6$. Il prodotto riga per colonna (lezione L08):

$$AB = \begin{pmatrix} 1 \cdot 2 + 2 \cdot 1 & 0 + 2 \cdot 3 \\ 3 \cdot 2 + 4 \cdot 1 & 0 + 4 \cdot 3 \end{pmatrix} = \begin{pmatrix} 4 & 6 \\ 10 & 12 \end{pmatrix}.$$

Il suo determinante è $4 \cdot 12 - 6 \cdot 10 = 48 - 60 = -12$, proprio $(-2) \cdot 6$.

Il determinante del prodotto è il prodotto dei determinanti. Le dispense lo scrivono così, senza dimostrazione.

> [!TEOREMA] 10.4 · Teorema di Binet
> Se $A$ e $B$ sono matrici quadrate dello stesso ordine, allora
> $$\det(A \cdot B) = \det(A) \cdot \det(B).$$

**Come si legge.**

- Servono matrici **quadrate della stessa taglia**: così il prodotto esiste ed è quadrato.
- Il determinante del prodotto si calcola **senza fare il prodotto**: basta moltiplicare i due determinanti.
- **L'ordine non conta**: $\det(AB) = \det(BA)$, anche se di solito le matrici $AB$ e $BA$ sono diverse. Tutti e due valgono $\det A \cdot \det B$, e tra numeri l'ordine del prodotto non conta.
- **Potenze**: $A^2 = A \cdot A$, quindi $\det(A^2) = (\det A)^2$. In generale il determinante di $A^k$ è $(\det A)^k$. Per calcolare il determinante di $A^3$ **non** si calcola $A^3$.
- Il teorema parla solo di prodotti. Con le somme non funziona (lezione L09).

> [!DIM] · il teorema di Binet per le $2 \times 2$
> Siano $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ e $B = \begin{pmatrix} e & f \\ g & h \end{pmatrix}$. Allora $AB = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$ e
> $$\det(AB) = (ae + bg)(cf + dh) - (af + bh)(ce + dg).$$
> Sviluppando, i termini $aecf$ e $afce$ si cancellano, come $bgdh$ e $bhdg$. Restano
> $$aedh + bgcf - afdg - bhce = ad(eh - fg) - bc(eh - fg)$$
> $$= (ad - bc)(eh - fg) = \det A \cdot \det B.$$
> La dimostrazione generale (Martelli, Teorema 3.4.7) usa la definizione con le permutazioni e il fatto che una matrice con due righe uguali ha determinante nullo.

::: prova Una matrice $3 \times 3$ ha determinante 2. Quanto vale il determinante del suo cubo?
Per Binet: $2^3 = 8$. Non serve calcolare il cubo della matrice.
:::

> [!RICORDA]
> - Binet: il determinante di un prodotto è il prodotto dei determinanti.
> - Il determinante di $A^k$ è $(\det A)^k$, e $\det(AB) = \det(BA)$.

## Disfare una matrice: l'inversa (p. 47)

Con i numeri, quasi ogni moltiplicazione si può disfare. Moltiplicare per 2 si disfa moltiplicando per $\frac 12$, perché $2 \cdot \frac 12 = 1$. Il numero $\frac 12$ è l'**inverso** di 2. Il numero 0 invece non ha inverso: $0$ per qualsiasi numero fa 0, mai 1.

Con le matrici succede lo stesso. Il ruolo del numero 1 lo fa la matrice identità $I_n$ (lezione L09), che non cambia niente. Una matrice che disfa $A$ è una matrice $B$ con $AB = I_n$ e $BA = I_n$.

> [!OLTRE] · che cosa vuol dire «invertibile»
> Le dispense usano la parola da qui in poi; la definizione è quella di Martelli (§3.4.5). Una matrice quadrata $A \in M(n)$ è **invertibile** se esiste una matrice $B \in M(n)$ con
> $$AB = BA = I_n.$$
> Una matrice così è **unica** e si chiama **inversa** di $A$. Si scrive $A^{-1}$, «a alla meno uno». Unica perché, se $B$ e $B'$ vanno bene tutte e due, $B = BI_n = B(AB') = (BA)B' = I_nB' = B'$.

> [!ESEMPIO] · Un'inversa e una matrice senza inversa
> $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ ha inversa $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$ (Martelli, §3.4.7). Controllo:
> $$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 2 - 1 & -2 + 2 \\ 1 - 1 & -1 + 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix},$$
> e allo stesso modo $A^{-1}A = I_2$.
>
> $N = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ invece **non** è invertibile, anche se non è la matrice nulla. Per ogni matrice $B$, il prodotto $NB$ ha la seconda riga di zeri: è 0 volte la prima riga di $B$ più 0 volte la seconda. Quindi non può essere l'identità.

Nel disegno, $N$ schiaccia tutto il piano sull'asse orizzontale: due punti con la stessa prima coordinata finiscono nello stesso posto. Una volta schiacciati, non si può più tornare indietro.

Binet dice subito quanto vale il determinante dell'inversa.

> [!COROLLARIO] 10.5 · Determinante dell'inversa
> Sia $A$ una matrice quadrata invertibile. Allora
> $$\det(A^{-1}) = \frac 1{\det(A)}.$$

**Come si legge.** Il determinante dell'inversa è l'inverso del determinante. Se $A$ moltiplica le aree per 3, la sua inversa le divide per 3.

La spiegazione delle dispense. Da $AA^{-1} = I_n$ e da Binet:

$$1 = \det(I_n) = \det(AA^{-1}) = \det(A) \det(A^{-1}),$$

e da qui la formula. In particolare una matrice invertibile ha determinante **diverso da zero**: se fosse zero, il prodotto $\det(A) \det(A^{-1})$ varrebbe 0 e non 1.

> [!TRAPPOLA] Binet vale solo per matrici quadrate
> Se $A$ è $3 \times 2$, scrivere $\det(A\,{}^tA) = \det A \cdot \det({}^tA)$ non ha senso: $A$ non è quadrata, e il suo determinante non esiste. Il prodotto $A\,{}^tA$ invece è $3 \times 3$ e ha un determinante. Per esempio con $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$ si trova $\det(A\,{}^tA) = 0$: le sue colonne sono ricette con le due colonne di $A$, quindi il rango è al massimo 2. Invece ${}^tA\,A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}$ ha determinante $6$.

::: prova Una matrice ha determinante 4. Quanto vale il determinante della sua inversa?
$\frac 14$: l'inverso del determinante.
:::

> [!RICORDA]
> - L'inversa $A^{-1}$ disfa quello che fa $A$: $AA^{-1} = A^{-1}A = I_n$.
> - Il determinante dell'inversa è $\frac 1{\det A}$; una matrice invertibile ha determinante diverso da zero.

## I cofattori (pp. 47–48)

Per costruire l'inversa servono dei numeri che conosci già dallo sviluppo di Laplace (lezione L09). Lì ogni numero della riga scelta veniva moltiplicato per due cose: il segno della scacchiera e il determinante della sottomatrice. Il prodotto di queste due cose ha un nome: **cofattore**.

Un esempio con $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Le sottomatrici sono numeri singoli: togliendo la riga 1 e la colonna 1 resta il 4, e così via. Con i segni della scacchiera:

$$\mathrm{cof}_{11} = +4, \quad \mathrm{cof}_{12} = -3, \quad \mathrm{cof}_{21} = -2, \quad \mathrm{cof}_{22} = +1.$$

Messi nelle loro caselle formano la **matrice dei cofattori**:

$$\mathrm{cof}(A) = \begin{pmatrix} 4 & -3 \\ -2 & 1 \end{pmatrix}.$$

Le dispense scrivono la definizione così.

> [!DEF] 10.6 · Cofattori
> Consideriamo una matrice quadrata $A$. I suoi **cofattori** $\mathrm{cof}_{ij} := (-1)^{i+j} \det(C_{ij})$ formano una matrice quadrata di ordine $n$
> $$\mathrm{cof}(A) = (\mathrm{cof}_{ij})$$
> detta **matrice dei cofattori** di $A$.

**Come si legge.**

- $C_{ij}$ è la sottomatrice che resta togliendo la riga $i$ e la colonna $j$ (lezione L09).
- Il cofattore $\mathrm{cof}_{ij}$ è un **numero**: il determinante di $C_{ij}$, con il segno della scacchiera $(-1)^{i+j}$.
- Il simbolo $:=$ si legge «è definito come».
- La matrice dei cofattori ha la stessa taglia di $A$: nella casella $(i, j)$ c'è il cofattore $\mathrm{cof}_{ij}$.

Con i cofattori lo sviluppo di Laplace lungo una riga $i$ diventa più corto: numeri della riga per i cofattori **della stessa riga**.

$$\det A = a_{i1}\,\mathrm{cof}_{i1} + a_{i2}\,\mathrm{cof}_{i2} + \dots + a_{in}\,\mathrm{cof}_{in} = \sum_{j=1}^n a_{ij}\, \mathrm{cof}_{ij}.$$

E se invece si usano i cofattori di **un'altra** riga? Viene sempre zero. Per ogni coppia di righe diverse $i$ e $k$:

$$\sum_{j=1}^n a_{ij}\, \mathrm{cof}_{kj} = 0.$$

Il motivo: questa somma è lo sviluppo lungo la riga $k$ di una matrice che ha la riga $i$ al posto della riga $k$. Quella matrice ha due righe uguali, quindi determinante zero. È lo stesso conto della dimostrazione della Proposizione 10.1, punto (3).

> [!ESEMPIO] · Cofattori giusti e cofattori «sbagliati»
> $$A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 3 & 1 \end{pmatrix}, \qquad \mathrm{cof}(A) = \begin{pmatrix} 1 & -1 & 3 \\ 3 & 2 & -6 \\ -1 & 1 & 2 \end{pmatrix}.$$
> Per esempio $\mathrm{cof}_{12} = -\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$ e $\mathrm{cof}_{23} = -\det \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} = -6$.
> - Riga 1 per i cofattori della riga 1: $2 \cdot 1 + 0 \cdot (-1) + 1 \cdot 3 = 5$, il determinante.
> - Riga 1 per i cofattori della riga 2: $2 \cdot 3 + 0 \cdot 2 + 1 \cdot (-6) = 0$.
> - Riga 3 per i cofattori della riga 3: $0 \cdot (-1) + 3 \cdot 1 + 1 \cdot 2 = 5$ di nuovo.

### Le due regole insieme

Le due regole, «stessa riga dà il determinante» e «riga diversa dà zero», si possono scrivere in una volta con un prodotto di matrici. Le dispense lo fanno così.

> [!PROP] 10.7
> $$A \cdot {}^t(\mathrm{cof}(A)) = \det(A) \cdot I_n = {}^t(\mathrm{cof}(A)) \cdot A.$$

**Come si legge.** Si prende la matrice dei cofattori e la si traspone, cioè si scambiano righe e colonne. Moltiplicata per $A$, dà una matrice con il determinante di $A$ su tutta la diagonale e zeri altrove.

Con la matrice dell'esempio:

$$A \cdot {}^t(\mathrm{cof}(A)) = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 5 \end{pmatrix} = 5I_3.$$

> [!DIM] della Proposizione 10.7
> La dimostrazione delle dispense, passo per passo.
> 1. Sia $K = A \cdot {}^t(\mathrm{cof}(A))$. Il suo numero nella casella $(i, j)$ è la riga $i$ di $A$ per la colonna $j$ di ${}^t(\mathrm{cof}(A))$, che è la **riga** $j$ di $\mathrm{cof}(A)$:
>    $$k_{ij} = \sum_\ell a_{i\ell}\, \mathrm{cof}_{j\ell}.$$
> 2. Se $i = j$, questo è lo sviluppo di Laplace di $\det(A)$ lungo la riga $i$: $k_{ii} = \det A$.
> 3. Se $i$ e $j$ sono diversi, è il determinante della matrice ottenuta sostituendo la riga $j$ con la riga $i$: è nullo, perché quella matrice ha due righe uguali.
> 4. Quindi $K$ ha $\det A$ sulla diagonale e 0 altrove: $K = \det(A) I_n$. Allo stesso modo, con le colonne, si dimostra ${}^t(\mathrm{cof}(A))A = \det(A) I_n$.

::: prova Qual è la matrice dei cofattori di $\begin{pmatrix} 5 & 2 \\ 1 & 3 \end{pmatrix}$?
Togliendo riga e colonna resta un numero; poi il segno della scacchiera: $\mathrm{cof}_{11} = 3$, $\mathrm{cof}_{12} = -1$, $\mathrm{cof}_{21} = -2$, $\mathrm{cof}_{22} = 5$. La matrice è $\begin{pmatrix} 3 & -1 \\ -2 & 5 \end{pmatrix}$.
:::

> [!RICORDA]
> - Il cofattore $\mathrm{cof}_{ij}$ è il determinante della sottomatrice senza riga $i$ e colonna $j$, con il segno della scacchiera.
> - Riga per i cofattori della stessa riga: il determinante. Riga per i cofattori di un'altra riga: zero.

## La formula dell'inversa (p. 48)

Ormai manca un solo passo per avere l'inversa. Nella sezione di prima, la trasposta dei cofattori moltiplicata per $A$ dava il determinante sulla diagonale. Se il determinante non è zero, basta dividere tutto per lui: viene l'identità. Quindi la trasposta dei cofattori, divisa per il determinante, è l'inversa. Le dispense lo scrivono così.

> [!PROP] 10.8 · Invertibilità e formula dell'inversa
> Sia $A$ una matrice quadrata di ordine $n \ge 2$. La matrice $A$ è invertibile se e solo se $\det(A) \neq 0$. Se $A$ è invertibile, allora
> $$A^{-1} = \frac 1{\det(A)} \cdot {}^t(\mathrm{cof}(A)).$$

**Come si legge.**

- Una matrice quadrata ha l'inversa **esattamente** quando il suo determinante non è zero.
- In quel caso l'inversa si costruisce così: matrice dei cofattori, trasposta, divisa per il determinante.
- È come con i numeri: tutti hanno l'inverso, tranne lo zero.

La dimostrazione delle dispense, nei due sensi.

- **Se $A$ è invertibile, il determinante non è zero.** C'è una matrice $B$ con $AB = I_n$. Per Binet $\det(A) \cdot \det(B) = \det(I_n) = 1$. Un prodotto che fa 1 non può avere un fattore zero.
- **Se il determinante non è zero, $A$ è invertibile.** Chiamo $B$ la trasposta dei cofattori divisa per $\det A$. Per la Proposizione 10.7, $A \cdot {}^t(\mathrm{cof}(A)) = \det(A) \cdot I_n$, e lo stesso nell'altro ordine. Divido per $\det A$, che non è zero: $AB = I_n = BA$. Quindi $B$ è l'inversa.

L'ipotesi $n \ge 2$ serve solo perché i cofattori richiedono di togliere una riga e una colonna. Per le matrici $1 \times 1$ tutto è più facile: la matrice $(a)$ è invertibile quando $a$ non è zero, e l'inversa è $\left(\frac 1a\right)$.

### Le $2 \times 2$

Per le matrici $2 \times 2$ la formula diventa una regola da ricordare a memoria.

> [!ESEMPIO] · La formula per le $2 \times 2$
> Per $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ i cofattori sono $\mathrm{cof}_{11} = d$, $\mathrm{cof}_{12} = -c$, $\mathrm{cof}_{21} = -b$, $\mathrm{cof}_{22} = a$. Trasponendo e dividendo per il determinante:
> $$A^{-1} = \frac 1{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}, \qquad \text{se } ad - bc \neq 0.$$
> In parole: **scambia i due numeri della diagonale, cambia segno agli altri due, dividi per il determinante**. Per esempio
> $$\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}^{-1} = \frac 1{6 - 5} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}.$$
> Controllo: $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 6 - 5 & -3 + 3 \\ 10 - 10 & -5 + 6 \end{pmatrix} = I_2$.

::: prova Trova l'inversa di $\begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$.
Determinante $4 - 3 = 1$. Scambio la diagonale e cambio segno agli altri due: $\begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$, diviso per 1. Controllo: $\begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 4 - 3 & -2 + 2 \\ 6 - 6 & -3 + 4 \end{pmatrix} = I_2$.
:::

### Le $3 \times 3$

> [!METODO] L'inversa di una $3 \times 3$ con i cofattori
> 1. Calcola il determinante. Se è 0, la matrice **non è invertibile**: fermati.
> 2. Calcola i nove determinanti $2 \times 2$ delle sottomatrici: togli la riga $i$ e la colonna $j$.
> 3. Metti i segni della scacchiera: ottieni la matrice dei cofattori.
> 4. **Trasponi**: scambia righe e colonne.
> 5. Dividi tutto per il determinante.
> 6. Controlla almeno una riga di $A \cdot A^{-1}$: deve venire la riga corrispondente dell'identità.

> [!ESEMPIO] · Un'inversa $3 \times 3$ passo per passo
> $$A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$$
> **1.** Lungo la prima riga: $\det A = 1 \cdot (1 - 0) - 2 \cdot (0 - 1) + 0 = 1 + 2 = 3$. Non è zero: $A$ è invertibile.
>
> **2–3.** I nove cofattori (determinante della sottomatrice, poi segno):
>
> | | colonna 1 | colonna 2 | colonna 3 |
> |---|---|---|---|
> | riga 1 | $+\det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = 1$ | $-\det \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = 1$ | $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$ |
> | riga 2 | $-\det \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = -2$ | $+\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$ | $-\det \begin{pmatrix} 1 & 2 \\ 1 & 0 \end{pmatrix} = 2$ |
> | riga 3 | $+\det \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix} = 2$ | $-\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$ | $+\det \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = 1$ |
>
> **4–5.** $\mathrm{cof}(A) = \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix}$; trasposta e divisa per 3:
> $$A^{-1} = \frac 13 \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix}.$$
> **6.** Riga 1 di $A$, cioè $(1, 2, 0)$, per le colonne della trasposta dei cofattori: $1 + 2 = 3$, poi $-2 + 2 = 0$, poi $2 - 2 = 0$. Diviso per 3 dà $(1, 0, 0)$, la prima riga dell'identità.

Nello strumento qui sotto c'è la matrice dell'Esercizio 10.10. Lo strumento calcola l'inversa con un altro metodo, le mosse di Gauss sulla matrice affiancata $(A \mid I_3)$ (Martelli, §3.4.7; lo capirai del tutto con i sistemi lineari, lezioni L11–L13). Il risultato è lo stesso che si trova con i cofattori, perché l'inversa è unica: confrontalo con la soluzione dell'esercizio. Prova anche una matrice con determinante nullo, come `1 2 3; 4 5 6; 7 8 9`.

```widget gauss
titolo: La matrice inversa, con i passaggi
matrice: 2 -1 0; -2 1 1; 1 -1 3
modo: inversa
modi: inversa
```

> [!TRAPPOLA] Quattro errori sull'inversa
> - **Dimenticare di trasporre** la matrice dei cofattori: per le matrici non simmetriche il risultato è sbagliato. Nel quiz di questa lezione la matrice dei cofattori non trasposta è una delle risposte sbagliate.
> - Dimenticare i segni della scacchiera, o dividere per il determinante solo alcune caselle.
> - Invertire casella per casella: l'inversa di $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ **non** è $\begin{pmatrix} 1/3 & 1 \\ 1/5 & 1/2 \end{pmatrix}$.
> - Pensare che l'inversa di una somma sia la somma delle inverse, o che $(AB)^{-1} = A^{-1}B^{-1}$. L'ordine giusto è $(AB)^{-1} = B^{-1}A^{-1}$ (esercizio 16): per disfare «prima $B$, poi $A$» si disfa prima $A$ e poi $B$, come quando ti togli le scarpe e poi le calze.

> [!OLTRE] · tante facce della stessa proprietà
> Per una matrice quadrata $A \in M(n, \K)$ queste frasi dicono tutte la stessa cosa:
> - $A$ è invertibile;
> - il determinante di $A$ non è zero (Proposizione 10.8);
> - nessuna riga, e nessuna colonna, è un doppione delle altre (Proposizione 10.3);
> - il rango di $A$ è $n$ (Martelli, Proposizione 3.3.12);
> - le colonne di $A$ formano una base di $\K^n$ (Martelli, Proposizione 3.3.15);
> - per ogni $b \in \K^n$ il sistema $Ax = b$ ha una e una sola soluzione, $x = A^{-1}b$ (Martelli, §3.4.8; lezioni L11–L13).
>
> Nelle domande d'esame si passa continuamente da una all'altra.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: il determinante e le mosse di Gauss nel §3.3.5 (pp. 97–98, Proposizione 3.3.7); determinante e rango massimo nel §3.3.7 (pp. 99–100, Proposizione 3.3.12); basi e determinante nel §3.3.9 (p. 101, Proposizione 3.3.15); matrici invertibili nel §3.4.5 (pp. 106–107, Proposizione 3.4.5); il teorema di Binet e il determinante dell'inversa nel §3.4.6 (pp. 107–108, Teorema 3.4.7 e Corollario 3.4.8); l'inversa con le mosse di Gauss e con i cofattori nel §3.4.7 (pp. 108–110, Proposizioni 3.4.10–3.4.12, Esempio 3.4.13); i sistemi con matrice invertibile e la regola di Cramer nel §3.4.8 (p. 110).

> [!RICORDA]
> - Una matrice quadrata è invertibile esattamente quando il determinante non è zero.
> - L'inversa è la trasposta dei cofattori divisa per il determinante. Per le $2 \times 2$: scambia la diagonale, cambia segno agli altri due, dividi per $ad - bc$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $R_2$ | «erre due» | la seconda riga della matrice | |
| $R_1 \leftrightarrow R_2$ | «scambio la riga 1 e la riga 2» | mossa di tipo (I) | |
| $R_2 \to R_2 - 3R_1$ | «la riga 2 diventa la riga 2 meno 3 volte la riga 1» | mossa di tipo (III) | |
| $A'$ | «a primo» | la matrice dopo una mossa | |
| $\det(AB)$ | «determinante di a b» | il determinante del prodotto | $\det(AB) = \det A \cdot \det B$ |
| $A^k$ | «a alla kappa» | $A$ moltiplicata per sé stessa $k$ volte | $A^2 = A \cdot A$ |
| $I_n$ | «i con enne» | la matrice identità | $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| $A^{-1}$ | «a alla meno uno», «inversa di a» | la matrice che disfa $A$ | $AA^{-1} = I_n$ |
| $\mathrm{cof}_{ij}$ | «cofattore i j» | segno della scacchiera per il determinante della sottomatrice | |
| $\mathrm{cof}(A)$ | «matrice dei cofattori di a» | tutti i cofattori, ognuno nella sua casella | |
| ${}^t(\mathrm{cof}(A))$ | «trasposta dei cofattori» | righe e colonne scambiate | |
| $:=$ | «è definito come» | si dà un nome a una cosa | |
| $\rk A$ | «rango di a» | quante righe indipendenti ha $A$ (lezione L08) | |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 quiz a 5 risposte e 2 problemi da 11 punti. I problemi si correggono solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. I dettagli sono nella lezione L01.

Questa lezione è tra le più presenti all'esame:

| Tipo di domanda | Appelli (numero) | Che cosa serve |
|---|---|---|
| «Il determinante di $A^3$ (o $A^4$) è…» | 06/09/2024 (4), 07/02/2025 (5), 05/02/2026 (5), 03/07/2026 (6) | Binet: $(\det A)^3$ |
| determinante e traccia di un prodotto | 16/01/2025 (3) | Binet, matrici triangolari |
| determinante di $A\,{}^tA$ con $A$ non quadrata | 03/06/2025 (9) | Binet non si applica; rango |
| matrice «ridotta a scalini», che cosa si può dedurre | 06/09/2024 (7) | Proposizione 10.1 |
| problema: «per quali $k$ la matrice è invertibile?» o «calcolare il determinante» | 24/01/2024, 06/09/2024, 07/02/2025, 15/01/2026, 05/02/2026, 03/07/2026 (problema 11, punto 1) | determinante con un parametro |
| problema: la matrice dell'applicazione inversa | 10/07/2024 (problema 11, punto 2) | inversa con i cofattori |

### Una domanda vera, letta insieme

**Appello del 15/01/2026, problema 11, punto (1).** Il testo: «Si consideri la matrice $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, dove $k$ è un parametro reale. Determinare per quali valori di $k$ la matrice $A$ è invertibile».

**In pratica chiede:** la matrice contiene una lettera, $k$. Per quali numeri messi al posto di $k$ il determinante non è zero?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: che cosa calcolare.** Per la Proposizione 10.8, $A$ è invertibile esattamente quando il determinante non è zero. Calcolo il determinante, con $k$ dentro.
>
> **Passo 2: Laplace lungo la prima riga**, che ha uno zero in fondo (segni $+, -, +$):
> $$\det A = 1 \cdot \det \begin{pmatrix} k + 1 & k \\ k & 1 \end{pmatrix} - k^2 \cdot \det \begin{pmatrix} k & k \\ 0 & 1 \end{pmatrix} + 0.$$
>
> **Passo 3: i due determinanti $2 \times 2$.** Il primo è $(k + 1) \cdot 1 - k \cdot k = k + 1 - k^2$. Il secondo è $k \cdot 1 - k \cdot 0 = k$.
>
> **Passo 4: metto insieme.** $\det A = (k + 1 - k^2) - k^2 \cdot k = -k^3 - k^2 + k + 1$.
>
> **Passo 5: scompongo.** Raccolgo a coppie: $-k^2(k + 1) + (k + 1) = (k + 1)(1 - k^2)$. E $1 - k^2 = (1 - k)(1 + k)$. Quindi
> $$\det A = (k + 1)(1 - k)(1 + k) = -(k - 1)(k + 1)^2.$$
>
> **Passo 6: quando fa zero?** Un prodotto fa zero quando uno dei fattori fa zero: $k = 1$ oppure $k = -1$.
>
> **La risposta:** $A$ è invertibile per tutti i valori di $k$ **tranne** $k = 1$ e $k = -1$.
>
> **Controllo con $k = 1$.** La matrice diventa $\begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}$, e la seconda riga è la somma delle altre due: un doppione, quindi determinante zero.

### Altre due domande vere

> [!ESAME] Appello del 06/09/2024, domanda 7
> **Testo.** «Sia $A$ una matrice quadrata che, ridotta a scalini tramite l'algoritmo di Gauss, diventa $\begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 3 \\ 0 & 0 & 1 \end{pmatrix}$. Quale delle seguenti **non** è necessariamente verificata? (a) $\det A = 2$; (b) $\dim \Ker A = 0$; (c) $A$ è invertibile; (d) per ogni $b \in \R^3$ il sistema $Ax = b$ ammette un'unica soluzione; (e) $\mathrm{rank}(A) = 3$».
>
> **Soluzione.** È la (a).
> 1. La matrice a scalini ha determinante $1 \cdot 2 \cdot 1 = 2$.
> 2. Ma l'algoritmo di Gauss può usare scambi, che cambiano il segno, e righe moltiplicate per un numero, che moltiplicano il determinante. Quindi il determinante di $A$ può essere diverso da 2.
> 3. Quello che resta vero: ogni mossa moltiplica il determinante per un numero **diverso da zero**. Quindi il determinante di $A$ non è zero.
> 4. Allora $A$ è invertibile (c) e ha rango 3 (e). Le affermazioni (b) e (d), che vedrai nelle lezioni L11–L16, sono conseguenze dell'invertibilità.

> [!ESAME] Appello del 03/07/2026, domanda 6
> Sia $A \in M(3, \R)$ la matrice $A = \begin{pmatrix} 1 & 0 & 2 \\ 3 & -1 & 1 \\ 2 & 0 & 5 \end{pmatrix}$. Il determinante di $A^3$ è: (a) $-8$; (b) $-1$; (c) $0$; (d) $1$; (e) $8$.
>
> **Soluzione.** È la (b).
> 1. Non si calcola $A^3$: per Binet il suo determinante è il cubo del determinante di $A$.
> 2. La seconda colonna ha un solo numero diverso da zero: il $-1$ nella casella $(2, 2)$, segno più. Sviluppo lungo la seconda colonna:
>    $$\det A = -1 \cdot \det \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix} = -(5 - 4) = -1.$$
> 3. Il cubo: $(-1)^3 = -1$.
>
> Le risposte $\pm 8$ sono per chi confonde con il determinante di $2A$ o sbaglia il segno.

> [!METODO] «Per quali $k$ la matrice è invertibile?»
> 1. Scrivi il determinante con $k$ dentro: Laplace lungo la riga o la colonna con più zeri, oppure prima qualche mossa del terzo tipo per creare zeri (non cambia il determinante).
> 2. **Scomponi** il polinomio in $k$: raccogli i fattori comuni, prova i valori facili ($k = 0$, $1$, $-1$, $2$, $-2$) e dividi con Ruffini (lezione L04).
> 3. Rispondi così: «$A$ è invertibile per tutti i $k$ tranne…». I valori esclusi sono quelli che poi, nel resto del problema, vanno studiati a parte.

> [!METODO] Il determinante di potenze, inverse e multipli
> Calcola solo il determinante di $A$, poi combina le regole:
> - potenze: $\det(A^k) = (\det A)^k$;
> - inversa: $\det(A^{-1}) = \frac 1{\det A}$;
> - multiplo di una $n \times n$: $\det(cA) = c^n \det A$ (lezione L09);
> - trasposta: $\det({}^tA) = \det A$.
>
> Per esempio, se $A$ è $3 \times 3$ con determinante 4: $\det(2A^{-1}) = 2^3 \cdot \frac 14 = 2$.

**Errori da evitare.**

- Scrivere che il determinante di $A^3$ è 3 volte quello di $A$: è il cubo.
- Credere che la matrice a scalini abbia lo stesso determinante della matrice di partenza.
- Usare Binet con matrici non quadrate.
- Dimenticare la trasposizione nella formula dell'inversa, o i segni dei cofattori.
- Rispondere «invertibile per ogni $k$» senza aver scomposto il determinante.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la tabella delle tre mosse e del loro effetto sul determinante; due righe proporzionali: determinante zero; Binet $\det(AB) = \det A \det B$, $\det(A^k) = (\det A)^k$, $\det(A^{-1}) = 1/\det A$; $\mathrm{cof}_{ij} = (-1)^{i+j}\det C_{ij}$; $A^{-1} = \frac 1{\det A}\,{}^t(\mathrm{cof}(A))$; la formula dell'inversa $2 \times 2$; «invertibile, determinante diverso da zero e rango $n$ sono la stessa cosa».

## Quiz

```quiz
D: Sia $A$ una matrice quadrata che, ridotta a scalini con l'algoritmo di Gauss, diventa $\begin{pmatrix} 2 & 1 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 3 \end{pmatrix}$. Quale delle seguenti affermazioni **non** è necessariamente vera?
+ $\det A = 6$.
- $\det A \neq 0$.
- $A$ è invertibile.
- $\rk A = 3$.
- Le righe di $A$ sono linearmente indipendenti.
= Gli scambi di righe cambiano il segno del determinante, e le righe moltiplicate per un numero lo moltiplicano: quindi il determinante di $A$ può essere diverso da $2 \cdot 1 \cdot 3 = 6$. Ogni mossa però moltiplica il determinante per un numero diverso da zero, e la matrice a scalini ha determinante 6, non zero. Quindi il determinante di $A$ non è zero, e le altre quattro affermazioni sono vere: $A$ è invertibile, ha rango 3 e righe indipendenti. Simile all'appello del 06/09/2024, domanda 7.

D: Sia $A = \begin{pmatrix} 1 & 0 & 2 \\ 2 & -2 & 1 \\ 1 & 0 & 3 \end{pmatrix}$. Il determinante di $A^3$ è:
+ $-8$
- $8$
- $-6$
- $-2$
- $64$
= Si sviluppa lungo la seconda colonna, che ha solo il $-2$ nella casella $(2, 2)$, segno più: $\det A = -2 \cdot \det \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix} = -2 \cdot 1 = -2$. Per Binet il determinante del cubo è $(-2)^3 = -8$. La risposta più insidiosa è $-6$: è 3 volte il determinante, l'errore di chi moltiplica invece di elevare al cubo. $-2$ dimentica la potenza, $8$ sbaglia il segno. Simile agli appelli del 03/07/2026 (domanda 6), del 05/02/2026 (domanda 5) e del 07/02/2025 (domanda 5).

D: Siano $A = \begin{pmatrix} 2 & 5 & -1 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 0 & 0 \\ 4 & 3 & 0 \\ 7 & -2 & 1 \end{pmatrix}$. Quanto vale $\det(AB)$?
+ $6$
- $5$
- $1$
- $36$
- $0$
= $A$ è triangolare superiore con diagonale 2, 1, 1: determinante 2. $B$ è triangolare inferiore con diagonale 1, 3, 1: determinante 3. Per Binet il determinante del prodotto è $2 \cdot 3 = 6$, senza calcolare il prodotto. La risposta più insidiosa è 5, la somma dei due determinanti invece del prodotto. Simile all'appello del 16/01/2025, domanda 3.

D: Sia $A$ una matrice $3 \times 3$ con $\det A = 4$. Quanto vale $\det(2A^{-1})$?
+ $2$
- $\frac 12$
- $8$
- $\frac 18$
- $32$
= Il determinante dell'inversa è $\frac 14$ (Corollario 10.5). Moltiplicare tutta la matrice $3 \times 3$ per 2 moltiplica il determinante per $2^3 = 8$ (Corollario 9.12). In tutto $8 \cdot \frac 14 = 2$. La risposta più insidiosa è $\frac 12$, cioè $2 \cdot \frac 14$: dimentica che il 2 moltiplica tutte e tre le righe. $32 = 8 \cdot 4$ dimentica l'inversa.

D: L'inversa di $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ è:
+ $\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$
- $\begin{pmatrix} -2 & 1 \\ 5 & -3 \end{pmatrix}$
- $\begin{pmatrix} 1/3 & 1 \\ 1/5 & 1/2 \end{pmatrix}$
- $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$
= Il determinante è $6 - 5 = 1$. Si scambiano i numeri della diagonale, si cambia segno agli altri due e si divide per 1. Le risposte sbagliate: $\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$ è la matrice dei cofattori non trasposta, la più insidiosa; quella con $\frac 13$ e $\frac 15$ inverte casella per casella; $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$ non scambia la diagonale; $\begin{pmatrix} -2 & 1 \\ 5 & -3 \end{pmatrix}$ ha tutti i segni girati. Controllo: $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = I_2$.

D: Per quali $k \in \R$ la matrice $A = \begin{pmatrix} 1 & 0 & k \\ 0 & k & 1 \\ k & 1 & 0 \end{pmatrix}$ è invertibile?
+ Per ogni $k \neq -1$.
- Per ogni $k \neq 1$.
- Per ogni $k \neq 0$ e $k \neq \pm 1$.
- Per nessun $k$.
- Per ogni $k \in \R$.
= Lungo la prima riga: $\det A = 1 \cdot (0 - 1) - 0 + k \cdot (0 - k^2) = -1 - k^3$. Si scompone come $-(k + 1)(k^2 - k + 1)$, e il secondo fattore non fa mai zero tra i reali (il discriminante è $1 - 4$, negativo). Quindi il determinante fa zero solo per $k = -1$. La risposta più insidiosa è «per ogni $k$ diverso da 1»: chi sbaglia un segno trova $1 - k^3$ e quindi $k = 1$. Con $k = 0$ la matrice è invertibile, determinante $-1$. Simile ai problemi 11 degli appelli del 07/02/2025 e del 03/07/2026.

D: Sia $A$ una matrice $3 \times 3$ con $\det A = 5$. Si scambiano la prima e la terza riga, poi si fa $R_2 \to R_2 - 4R_1$, poi $R_3 \to 2R_3$. Quanto vale il determinante della matrice ottenuta?
+ $-10$
- $10$
- $-5$
- $5$
- $-40$
= Si segue l'effetto di ogni mossa (Proposizione 10.1). Lo scambio cambia il segno: $-5$. Togliere un multiplo di un'altra riga non cambia niente: resta $-5$. La terza riga per 2 raddoppia: $-10$. La risposta più insidiosa è $-40$: è di chi pensa che anche $R_2 \to R_2 - 4R_1$ moltiplichi per 4. 10 dimentica lo scambio.

D: Quale di queste affermazioni vale per tutte le matrici $A, B \in M(n)$?
+ $\det(AB) = \det(BA)$.
- $AB = BA$.
- $\det(A + B) = \det A + \det B$.
- $\det(2A) = 2\det A$.
- Se $A$ e $B$ sono invertibili, $(AB)^{-1} = A^{-1}B^{-1}$.
= Per Binet $\det(AB) = \det A \cdot \det B = \det B \cdot \det A = \det(BA)$, anche se le due matrici $AB$ e $BA$ sono di solito diverse. Per questo la risposta più insidiosa è $AB = BA$: vale per i determinanti, non per le matrici. Le altre sono false: il determinante non si spezza sulle somme, $\det(2A) = 2^n \det A$, e l'inversa di un prodotto è $B^{-1}A^{-1}$, con l'ordine rovesciato.

D: Data $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$, il determinante di $A \cdot {}^tA$ è:
+ $0$
- $6$
- Non si può calcolare, poiché $A$ non è quadrata.
- $36$
- $1$
= Il prodotto $A\,{}^tA$ è $3 \times 3$, quindi il suo determinante esiste, anche se $A$ non è quadrata: per questo «non si può calcolare» è la risposta più insidiosa. Ogni colonna di $A\,{}^tA$ è $A$ per un vettore, cioè una ricetta con le due colonne di $A$. Quindi tre colonne vivono in un piano: sono dipendenti, e il determinante è 0 (Proposizione 10.3). Il 6 è il determinante di ${}^tA\,A$, il prodotto nell'altro ordine, che è $2 \times 2$. Simile all'appello del 03/06/2025, domanda 9.

D: Sia $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$. Quanto vale l'elemento di posto $(1, 3)$ di $A^{-1}$? Scrivi una frazione.
N: 1/3
= Il determinante, lungo la prima riga, è $2 \cdot 1 - 1 \cdot (0 - 1) + 0 = 3$. Nella formula dell'inversa c'è la trasposta dei cofattori: nella casella $(1, 3)$ dell'inversa va il cofattore $\mathrm{cof}_{31}$, con gli indici scambiati. $\mathrm{cof}_{31} = +\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$, quindi la risposta è $\frac 13$. Chi dimentica la trasposizione usa $\mathrm{cof}_{13} = -1$ e trova $-\frac 13$, che è invece il numero nella casella $(3, 1)$.
```

## Esercizi

::: esercizio base Riscaldamento: tre mosse su una $2 \times 2$
La matrice $\begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$ ha determinante 2. Senza fare il conto, quanto vale il determinante dopo ciascuna mossa? (a) Scambio le due righe. (b) Moltiplico la prima riga per 3. (c) Tolgo dalla seconda riga il doppio della prima. Poi controlla la (c) con il conto.
::: soluzione
1. (a) Scambio: cambia segno, $-2$.
2. (b) Una riga per 3: $3 \cdot 2 = 6$.
3. (c) Una riga meno un multiplo di un'altra: resta 2.

Controllo della (c): la seconda riga diventa $(4 - 4,\ 3 - 2) = (0, 1)$. La matrice $\begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$ è triangolare, con determinante $2 \cdot 1 = 2$.
:::

::: esercizio base Riscaldamento: l'inversa di una $2 \times 2$
Trova l'inversa di $\begin{pmatrix} 4 & 3 \\ 1 & 1 \end{pmatrix}$ e controlla il risultato.
::: soluzione
1. Determinante: $4 \cdot 1 - 3 \cdot 1 = 1$. Non è zero: c'è l'inversa.
2. Scambio la diagonale (4 e 1) e cambio segno agli altri due: $\begin{pmatrix} 1 & -3 \\ -1 & 4 \end{pmatrix}$.
3. Divido per il determinante, 1: resta uguale.

Controllo: $\begin{pmatrix} 4 & 3 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & -3 \\ -1 & 4 \end{pmatrix} = \begin{pmatrix} 4 - 3 & -12 + 12 \\ 1 - 1 & -3 + 4 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.
:::

::: esercizio base Riscaldamento: Binet
Due matrici $3 \times 3$ hanno determinanti $\det A = 3$ e $\det B = -2$. Calcola il determinante di $AB$, di $A^2$ e di $A^{-1}$.
::: soluzione
1. $\det(AB) = 3 \cdot (-2) = -6$.
2. $\det(A^2) = 3^2 = 9$.
3. $\det(A^{-1}) = \frac 13$.
:::

::: esercizio base Riscaldamento: invertibile o no?
Quali di queste matrici sono invertibili? $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$, $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
::: soluzione
1. $2 \cdot 2 - 4 \cdot 1 = 0$: **non** invertibile. Infatti la prima riga è il doppio della seconda.
2. $4 - 6 = -2$: invertibile.
3. $0 - 1 = -1$: invertibile. Questa matrice scambia le due coordinate, e scambiandole di nuovo si torna indietro: è l'inversa di sé stessa.
:::

::: esercizio base Determinanti con le mosse di Gauss
Calcola con le mosse di Gauss: (a) $\det \begin{pmatrix} 0 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 4 & 5 \end{pmatrix}$; (b) $\det \begin{pmatrix} 1 & 2 & 1 & 0 \\ 2 & 5 & 3 & 1 \\ 1 & 2 & 2 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix}$.
::: soluzione
(a) È la matrice $B$ della sezione sul metodo. Uno scambio $R_1 \leftrightarrow R_2$, poi $R_3 \to R_3 - 2R_1$ e $R_3 \to R_3 - R_2$ portano a una triangolare con diagonale 1, 2, 2. Determinante: $-(1 \cdot 2 \cdot 2) = -4$, con il meno per lo scambio.

(b) Solo mosse del terzo tipo, che non cambiano il determinante:
$$\xrightarrow{\substack{R_2 \to R_2 - 2R_1 \\ R_3 \to R_3 - R_1}} \begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix} \xrightarrow{R_4 \to R_4 - R_2} \begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 2 \end{pmatrix}.$$
Triangolare con diagonale 1, 1, 1, 2: il determinante è 2.
:::

::: esercizio base Determinanti nulli senza conti
Spiega perché queste matrici hanno determinante nullo, senza calcolarlo:
$$A = \begin{pmatrix} 3 & 1 & 4 \\ 1 & 5 & 9 \\ 3 & 1 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 2 & -6 & 1 \\ 1 & -3 & 7 \\ 0 & 0 & 2 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 3 \\ 3 & 1 & 4 \end{pmatrix}.$$
::: soluzione
- $A$: la prima e la terza riga sono uguali. La prima è un doppione della terza, quindi il determinante è zero (Proposizione 10.3). Oppure: $R_3 \to R_3 - R_1$ crea una riga di zeri senza cambiare il determinante.
- $B$: la seconda colonna è $-3$ volte la prima, perché $(-6, -3, 0) = -3 \cdot (2, 1, 0)$. Una colonna doppione: determinante zero.
- $C$: la terza riga è la somma delle prime due, $(1 + 2,\ 0 + 1,\ 1 + 3) = (3, 1, 4)$. Quindi il determinante è zero. Qui anche la terza colonna è la somma delle prime due. In generale, se le righe di una matrice quadrata sono dipendenti lo sono anche le colonne, perché rango per righe e rango per colonne coincidono (Proposizione 8.6). La ricetta tra le colonne però può avere dosi diverse.
:::

::: esercizio medio Esercizio 10.9 delle dispense: un'inversa con parametro
Determinare per quali valori del parametro $k \in \R$ la matrice $A = \begin{pmatrix} k - 5 & 3 \\ -2 & k \end{pmatrix}$ è invertibile. Per ogni $k$ per cui la matrice risulta invertibile, trovare la matrice inversa.
::: soluzione
**Determinante.** $\det A = (k - 5) \cdot k - 3 \cdot (-2) = k^2 - 5k + 6$. È un polinomio di secondo grado con radici $k = \frac{5 \pm \sqrt{25 - 24}}2 = \frac{5 \pm 1}2$, cioè $k = 3$ e $k = 2$:
$$\det A = (k - 2)(k - 3).$$
**Invertibilità.** Per la Proposizione 10.8, $A$ è invertibile quando il determinante non è zero: **per tutti i $k$ tranne 2 e 3**.

**Inversa.** Con la regola delle $2 \times 2$: scambio la diagonale, cambio segno agli altri due, divido per il determinante.
$$A^{-1} = \frac 1{(k - 2)(k - 3)} \begin{pmatrix} k & -3 \\ 2 & k - 5 \end{pmatrix}.$$
**Controllo:**
$$\begin{pmatrix} k - 5 & 3 \\ -2 & k \end{pmatrix} \begin{pmatrix} k & -3 \\ 2 & k - 5 \end{pmatrix} = \begin{pmatrix} k^2 - 5k + 6 & -3(k - 5) + 3(k - 5) \\ -2k + 2k & 6 + k^2 - 5k \end{pmatrix} = (k^2 - 5k + 6)\, I_2,$$
e dividendo per $(k - 2)(k - 3) = k^2 - 5k + 6$ si ottiene l'identità. Per esempio con $k = 0$: $A = \begin{pmatrix} -5 & 3 \\ -2 & 0 \end{pmatrix}$ e $A^{-1} = \frac 16 \begin{pmatrix} 0 & -3 \\ 2 & -5 \end{pmatrix}$.
:::

::: esercizio medio Esercizio 10.10 delle dispense: una $3 \times 3$ intera
Dimostrare che la matrice $B = \begin{pmatrix} 2 & -1 & 0 \\ -2 & 1 & 1 \\ 1 & -1 & 3 \end{pmatrix}$ è invertibile e calcolarne l'inversa.
::: soluzione
**Invertibilità.** Lungo la prima riga (segni $+, -, +$, e l'ultimo numero è 0):
$$\det B = 2 \det \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix} - (-1) \det \begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix} + 0 = 2 \cdot (3 + 1) + (-6 - 1) = 8 - 7 = 1.$$
Il determinante è 1, non zero: $B$ è invertibile, e l'inversa è la trasposta dei cofattori (si divide per 1).

**I nove cofattori.**

| | colonna 1 | colonna 2 | colonna 3 |
|---|---|---|---|
| riga 1 | $+\det \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix} = 4$ | $-\det \begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix} = 7$ | $+\det \begin{pmatrix} -2 & 1 \\ 1 & -1 \end{pmatrix} = 1$ |
| riga 2 | $-\det \begin{pmatrix} -1 & 0 \\ -1 & 3 \end{pmatrix} = 3$ | $+\det \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix} = 6$ | $-\det \begin{pmatrix} 2 & -1 \\ 1 & -1 \end{pmatrix} = 1$ |
| riga 3 | $+\det \begin{pmatrix} -1 & 0 \\ 1 & 1 \end{pmatrix} = -1$ | $-\det \begin{pmatrix} 2 & 0 \\ -2 & 1 \end{pmatrix} = -2$ | $+\det \begin{pmatrix} 2 & -1 \\ -2 & 1 \end{pmatrix} = 0$ |

Per esempio $\mathrm{cof}_{12}$: tolgo la riga 1 e la colonna 2, resta $\begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix}$ con determinante $-6 - 1 = -7$. Il segno della casella $(1, 2)$ è meno, quindi $\mathrm{cof}_{12} = 7$.

**Trasposta.**
$$\mathrm{cof}(B) = \begin{pmatrix} 4 & 7 & 1 \\ 3 & 6 & 1 \\ -1 & -2 & 0 \end{pmatrix}, \qquad \text{quindi} \qquad B^{-1} = {}^t(\mathrm{cof}(B)) = \begin{pmatrix} 4 & 3 & -1 \\ 7 & 6 & -2 \\ 1 & 1 & 0 \end{pmatrix}.$$

**Controllo** di $BB^{-1}$, riga per riga:
- riga $(2, -1, 0)$: $8 - 7 = 1$, poi $6 - 6 = 0$, poi $-2 + 2 = 0$;
- riga $(-2, 1, 1)$: $-8 + 7 + 1 = 0$, poi $-6 + 6 + 1 = 1$, poi $2 - 2 + 0 = 0$;
- riga $(1, -1, 3)$: $4 - 7 + 3 = 0$, poi $3 - 6 + 3 = 0$, poi $-1 + 2 + 0 = 1$.

Viene l'identità. Siccome il determinante è 1, l'inversa ha tutti numeri interi.
:::

::: esercizio medio Esercizio 10.11 delle dispense: un'inversa complessa
Si calcoli l'inversa della matrice $C = \begin{pmatrix} 2 - i & 0 \\ 3 & 2 + i \end{pmatrix}$.
::: soluzione
**Determinante.** $C$ è triangolare inferiore: $\det C = (2 - i)(2 + i) = 4 - i^2 = 4 + 1 = 5$. Non è zero, quindi $C$ è invertibile. La Proposizione 10.8 vale anche con i numeri complessi.

**Inversa** con la regola delle $2 \times 2$ ($a = 2 - i$, $b = 0$, $c = 3$, $d = 2 + i$):
$$C^{-1} = \frac 15 \begin{pmatrix} 2 + i & 0 \\ -3 & 2 - i \end{pmatrix} = \begin{pmatrix} \frac 25 + \frac 15 i & 0 \\ -\frac 35 & \frac 25 - \frac 15 i \end{pmatrix}.$$

**Controllo:**
$$\begin{pmatrix} 2 - i & 0 \\ 3 & 2 + i \end{pmatrix} \begin{pmatrix} 2 + i & 0 \\ -3 & 2 - i \end{pmatrix} = \begin{pmatrix} (2 - i)(2 + i) & 0 \\ 3(2 + i) - 3(2 + i) & (2 + i)(2 - i) \end{pmatrix} = \begin{pmatrix} 5 & 0 \\ 0 & 5 \end{pmatrix},$$
e diviso per 5 dà l'identità. Nota che l'inversa di una triangolare inferiore è ancora triangolare inferiore, con gli inversi sulla diagonale: $\frac 1{2 - i} = \frac{2 + i}5$.
:::

::: esercizio medio Binet e le sue conseguenze
Siano $A, B \in M(3, \R)$ con $\det A = 2$ e $\det B = -3$. Calcola: (a) $\det(AB)$; (b) $\det(A^2B)$; (c) $\det(A^{-1})$; (d) $\det({}^tA\,B^{-1})$; (e) $\det(3AB)$; (f) $\det(B^4)$.
::: soluzione
(a) Binet: $2 \cdot (-3) = -6$.

(b) $\det(A^2B) = (\det A)^2 \det B = 4 \cdot (-3) = -12$.

(c) $\det(A^{-1}) = \frac 12$ (Corollario 10.5).

(d) La trasposta ha determinante 2, e $\det(B^{-1}) = -\frac 13$. Quindi $\det({}^tA\,B^{-1}) = 2 \cdot \left(-\frac 13\right) = -\frac 23$.

(e) $3AB$ è $3 \times 3$, quindi il 3 esce tre volte: $3^3 \det(AB) = 27 \cdot (-6) = -162$.

(f) $\det(B^4) = (-3)^4 = 81$.
:::

::: esercizio medio La Proposizione 10.7 su un esempio
Sia $A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 3 & 1 \end{pmatrix}$. (a) Calcola $\mathrm{cof}(A)$. (b) Verifica che $A \cdot {}^t(\mathrm{cof}(A)) = \det(A) I_3$. (c) Scrivi $A^{-1}$.
::: soluzione
(a) Cofattore per cofattore: tolgo la riga $i$ e la colonna $j$, poi il segno della scacchiera.
- riga 1: $+\det \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix} = 1$, poi $-\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$, poi $+\det \begin{pmatrix} 1 & 1 \\ 0 & 3 \end{pmatrix} = 3$;
- riga 2: $-\det \begin{pmatrix} 0 & 1 \\ 3 & 1 \end{pmatrix} = -(0 - 3) = 3$, poi $+\det \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = 2$, poi $-\det \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} = -6$;
- riga 3: $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$, poi $-\det \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix} = -(0 - 1) = 1$, poi $+\det \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix} = 2$.

$$\mathrm{cof}(A) = \begin{pmatrix} 1 & -1 & 3 \\ 3 & 2 & -6 \\ -1 & 1 & 2 \end{pmatrix}, \qquad {}^t(\mathrm{cof}(A)) = \begin{pmatrix} 1 & 3 & -1 \\ -1 & 2 & 1 \\ 3 & -6 & 2 \end{pmatrix}.$$

(b) Il determinante è $2 \cdot 1 - 0 + 1 \cdot 3 = 5$: prima riga per i suoi cofattori. Il prodotto, riga per colonna:
- riga $(2, 0, 1)$: $2 + 3 = 5$, poi $6 - 6 = 0$, poi $-2 + 2 = 0$;
- riga $(1, 1, 0)$: $1 - 1 = 0$, poi $3 + 2 = 5$, poi $-1 + 1 = 0$;
- riga $(0, 3, 1)$: $-3 + 3 = 0$, poi $6 - 6 = 0$, poi $3 + 2 = 5$.

Viene $5I_3$. Sulla diagonale ci sono gli sviluppi di Laplace; fuori dalla diagonale le somme con i cofattori «di un'altra riga», che fanno zero.

(c) $A^{-1} = \frac 15 \begin{pmatrix} 1 & 3 & -1 \\ -1 & 2 & 1 \\ 3 & -6 & 2 \end{pmatrix}$.
:::

::: esercizio esame Invertibilità con parametro e inversa
Si consideri la matrice $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 2 \\ k & 0 & 3 \end{pmatrix}$, con $k \in \R$ (Foglio di esercizi 1 del tutorato 2025, esercizio 9). (1) Determinare per quali $k$ la matrice è invertibile. (2) Per tali valori calcolare $A^{-1}$. (3) Verificare $AA^{-1} = I_3$ per $k = 0$.
::: soluzione
(1) Lungo la prima colonna (segni $+, -, +$, e il numero centrale è 0):
$$\det A = 1 \cdot \det \begin{pmatrix} 2 & 2 \\ 0 & 3 \end{pmatrix} - 0 + k \det \begin{pmatrix} 1 & 0 \\ 2 & 2 \end{pmatrix} = 6 + 2k = 2(k + 3).$$
$A$ è invertibile per tutti i $k$ tranne $k = -3$.

(2) I cofattori:
- riga 1: $+\det \begin{pmatrix} 2 & 2 \\ 0 & 3 \end{pmatrix} = 6$, poi $-\det \begin{pmatrix} 0 & 2 \\ k & 3 \end{pmatrix} = -(0 - 2k) = 2k$, poi $+\det \begin{pmatrix} 0 & 2 \\ k & 0 \end{pmatrix} = -2k$;
- riga 2: $-\det \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix} = -3$, poi $+\det \begin{pmatrix} 1 & 0 \\ k & 3 \end{pmatrix} = 3$, poi $-\det \begin{pmatrix} 1 & 1 \\ k & 0 \end{pmatrix} = -(0 - k) = k$;
- riga 3: $+\det \begin{pmatrix} 1 & 0 \\ 2 & 2 \end{pmatrix} = 2$, poi $-\det \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} = -2$, poi $+\det \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = 2$.

Trasponendo e dividendo per $2(k + 3)$:
$$A^{-1} = \frac 1{2(k + 3)} \begin{pmatrix} 6 & -3 & 2 \\ 2k & 3 & -2 \\ -2k & k & 2 \end{pmatrix}, \qquad k \neq -3.$$

(3) Con $k = 0$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 2 \\ 0 & 0 & 3 \end{pmatrix}$ e $A^{-1} = \frac 16 \begin{pmatrix} 6 & -3 & 2 \\ 0 & 3 & -2 \\ 0 & 0 & 2 \end{pmatrix}$. Il prodotto $A \cdot \begin{pmatrix} 6 & -3 & 2 \\ 0 & 3 & -2 \\ 0 & 0 & 2 \end{pmatrix}$, riga per riga:
- riga $(1, 1, 0)$: $6$, poi $-3 + 3 = 0$, poi $2 - 2 = 0$;
- riga $(0, 2, 2)$: $0$, poi $6$, poi $-4 + 4 = 0$;
- riga $(0, 0, 3)$: $0$, $0$, $6$.

È $6I_3$, e diviso per 6 dà l'identità.
:::

::: esercizio esame Per quali $k$ è invertibile? E l'inversa per $k = 1$
Sia $A = \begin{pmatrix} 1 & k & 0 \\ k & 1 & k \\ 0 & k & 1 \end{pmatrix}$ con $k \in \R$. (1) Determinare per quali $k$ la matrice $A$ è invertibile. (2) Posto $k = 1$, calcolare $A^{-1}$.
::: soluzione
(1) Lungo la prima riga:
$$\det A = 1 \cdot \det \begin{pmatrix} 1 & k \\ k & 1 \end{pmatrix} - k \det \begin{pmatrix} k & k \\ 0 & 1 \end{pmatrix} + 0 = (1 - k^2) - k \cdot k = 1 - 2k^2.$$
Fa zero quando $k^2 = \frac 12$, cioè $k = \frac{\sqrt 2}2$ oppure $k = -\frac{\sqrt 2}2$. **$A$ è invertibile per tutti i $k$ tranne questi due.**

(2) Con $k = 1$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ e il determinante è $1 - 2 = -1$. I cofattori:
- riga 1: $+(1 - 1) = 0$, poi $-(1 - 0) = -1$, poi $+(1 - 0) = 1$;
- riga 2: $-(1 - 0) = -1$, poi $+(1 - 0) = 1$, poi $-(1 - 0) = -1$;
- riga 3: $+(1 - 0) = 1$, poi $-(1 - 0) = -1$, poi $+(1 - 1) = 0$.

La matrice dei cofattori $\begin{pmatrix} 0 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix}$ è simmetrica, come $A$, quindi trasporre non cambia niente. Divido per $-1$:
$$A^{-1} = \begin{pmatrix} 0 & 1 & -1 \\ 1 & -1 & 1 \\ -1 & 1 & 0 \end{pmatrix}.$$
Controllo della prima riga di $AA^{-1}$: $(1, 1, 0)$ per le colonne dà $0 + 1 = 1$, poi $1 - 1 = 0$, poi $-1 + 1 = 0$.
:::

::: esercizio esame La matrice di una trasformazione e la sua inversa
Sia $A = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, la matrice che manda il vettore ${}^t(x, y, z)$ in ${}^t(x + z,\ 2x + y,\ y + z)$. (1) Stabilire se $A$ è invertibile. (2) Calcolare $A^{-1}$. (3) Trovare il vettore ${}^t(x, y, z)$ che viene mandato in ${}^t(1, 1, 1)$.
::: soluzione
(1) Lungo la prima riga: $\det A = 1 \cdot (1 - 0) - 0 + 1 \cdot (2 - 0) = 3$. Non è zero: invertibile.

(2) I cofattori:
- riga 1: $+\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$, poi $-\det \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = -2$, poi $+\det \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = 2$;
- riga 2: $-\det \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = 1$, poi $+\det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = 1$, poi $-\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$;
- riga 3: $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$, poi $-\det \begin{pmatrix} 1 & 1 \\ 2 & 0 \end{pmatrix} = 2$, poi $+\det \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = 1$.

$$\mathrm{cof}(A) = \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix}, \qquad A^{-1} = \frac 13 \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix}.$$
Controllo della prima riga di $AA^{-1}$, senza il $\frac 13$: $(1, 0, 1)$ per le colonne dà $1 + 2 = 3$, poi $1 - 1 = 0$, poi $-1 + 1 = 0$.

(3) Cerco $v$ con $Av = {}^t(1, 1, 1)$. Moltiplico a sinistra per l'inversa, che disfa $A$:
$$v = A^{-1}\,{}^t(1, 1, 1) = \frac 13\,{}^t(1 + 1 - 1,\ -2 + 1 + 2,\ 2 - 1 + 1) = {}^t\left(\frac 13, \frac 13, \frac 23\right).$$
Verifica: $x + z = \frac 13 + \frac 23 = 1$, $2x + y = \frac 23 + \frac 13 = 1$, $y + z = \frac 13 + \frac 23 = 1$. Nelle lezioni L14–L16 questa matrice sarà la matrice di un'applicazione lineare, e $A^{-1}$ quella dell'applicazione inversa, come nel problema 11 dell'appello del 10/07/2024.
:::

::: esercizio difficile Matrici con $A^2 = A$ e con $A^2 = 0$
(a) Dimostra che se $A^2 = 0$ allora $A$ non è invertibile, e trova un esempio $2 \times 2$ con $A \neq 0$. (b) Dimostra che se $A^2 = A$ allora $\det A$ vale $0$ oppure $1$. (c) Dimostra che se $A^2 = A$ e $A$ è invertibile, allora $A = I_n$.
::: soluzione
(a) Per Binet $(\det A)^2 = \det(A^2) = \det(0) = 0$, quindi il determinante di $A$ è zero e $A$ non è invertibile (Proposizione 10.8). Un esempio: $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, con $A^2 = \begin{pmatrix} 0 \cdot 0 + 1 \cdot 0 & 0 \cdot 1 + 1 \cdot 0 \\ 0 & 0 \end{pmatrix} = 0$.

(b) Per Binet $(\det A)^2 = \det(A^2) = \det A$. Porto tutto da una parte: $\det A \cdot (\det A - 1) = 0$. Un prodotto fa zero quando uno dei fattori fa zero: il determinante è 0 oppure 1.

(c) Moltiplico $A^2 = A$ a sinistra per l'inversa: $A^{-1}(AA) = A^{-1}A$.
1. A sinistra, raggruppando diversamente: $(A^{-1}A)A = I_nA = A$.
2. A destra: $A^{-1}A = I_n$.

Quindi $A = I_n$. Un esempio di $A^2 = A$ non invertibile: $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, che ha determinante 0.
:::

::: esercizio difficile L'inversa di un prodotto e della trasposta
Siano $A, B \in M(n)$ invertibili. Dimostra che (a) $AB$ è invertibile e $(AB)^{-1} = B^{-1}A^{-1}$; (b) ${}^tA$ è invertibile e $({}^tA)^{-1} = {}^t(A^{-1})$ (Martelli, Esercizio 3.9).
::: soluzione
(a) Basta controllare che $B^{-1}A^{-1}$ funziona da inversa, da tutti e due i lati (Martelli, Proposizione 3.4.5):
$$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AI_nA^{-1} = AA^{-1} = I_n,$$
$$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}B = I_n.$$
Si usa solo il fatto che le parentesi si possono spostare. Con i determinanti si vede anche che $\det(AB) = \det A \det B$ non è zero.

(b) Uso la regola della trasposta di un prodotto, ${}^t(XY) = {}^tY\,{}^tX$ (Esercizio 8.14):
$${}^tA\ {}^t(A^{-1}) = {}^t(A^{-1}A) = {}^tI_n = I_n, \qquad {}^t(A^{-1})\ {}^tA = {}^t(AA^{-1}) = {}^tI_n = I_n.$$
Quindi ${}^t(A^{-1})$ è l'inversa di ${}^tA$.
:::

## Domande di ripasso

::: domanda Come cambia il determinante con le tre mosse di Gauss?
Scambiare due righe lo cambia di segno. Moltiplicare una riga per un numero lo moltiplica per quel numero. Aggiungere a una riga un multiplo di un'altra non lo cambia. Le stesse regole valgono per le colonne.
:::

::: domanda Perché una matrice con due righe uguali ha determinante nullo?
Scambiando le due righe uguali la matrice resta la stessa, ma il determinante cambia segno. Un numero uguale al suo opposto è zero.
:::

::: domanda Come si calcola un determinante con il metodo di Gauss?
Si rende la matrice triangolare con mosse del terzo tipo, e scambi se serve. Poi si moltiplica la diagonale e si cambia segno per ogni scambio. Se si sono usate righe moltiplicate per un numero, alla fine si divide per quel numero.
:::

::: domanda Che cosa dice la Proposizione 10.3?
Il determinante è zero esattamente quando una riga, o una colonna, è un doppione delle altre, cioè si ottiene mescolandole.
:::

::: domanda Enuncia il teorema di Binet e due sue conseguenze.
Per matrici quadrate della stessa taglia, il determinante del prodotto è il prodotto dei determinanti. Conseguenze: il determinante di $A^k$ è $(\det A)^k$, e $\det(AB) = \det(BA)$. Inoltre il determinante dell'inversa è $\frac 1{\det A}$.
:::

::: domanda Che cosa vuol dire che una matrice è invertibile?
Che è quadrata e c'è un'altra matrice che la disfa: moltiplicate tra loro, in tutti e due gli ordini, danno l'identità. Questa matrice è unica e si scrive $A^{-1}$.
:::

::: domanda Perché una matrice invertibile ha determinante diverso da zero?
Da $AA^{-1} = I_n$ e Binet viene $\det A \cdot \det(A^{-1}) = 1$, e un prodotto che fa 1 non può avere un fattore zero.
:::

::: domanda Che cos'è il cofattore $\mathrm{cof}_{ij}$?
Il determinante della sottomatrice senza la riga $i$ e la colonna $j$, con il segno della scacchiera. Con i cofattori lo sviluppo di Laplace diventa: numeri della riga per i cofattori della stessa riga.
:::

::: domanda Quanto fa una riga moltiplicata per i cofattori di un'altra riga, e perché?
Zero. È lo sviluppo di una matrice con due righe uguali, che ha determinante zero.
:::

::: domanda Che cosa dice la Proposizione 10.7?
La matrice $A$ per la trasposta dei suoi cofattori dà il determinante di $A$ sulla diagonale e zeri altrove, cioè $\det(A) I_n$. Lo stesso nell'altro ordine.
:::

::: domanda Quando una matrice quadrata è invertibile, e qual è la formula dell'inversa?
Esattamente quando il determinante non è zero. L'inversa è la trasposta della matrice dei cofattori, divisa per il determinante.
:::

::: domanda Qual è l'inversa di una $2 \times 2$?
Si scambiano i due numeri della diagonale, si cambia segno agli altri due e si divide per $ad - bc$, se non è zero: $\frac 1{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
:::

::: domanda Come si risponde a «per quali $k$ la matrice è invertibile»?
Si calcola il determinante con $k$ dentro, lo si scompone in fattori, si trovano i $k$ che lo fanno zero e si risponde: «invertibile per tutti i $k$ tranne quei valori».
:::

## Glossario

```glossario
Mossa di Gauss | Una delle tre operazioni sulle righe: scambiare due righe, moltiplicare una riga per un numero diverso da zero, aggiungere a una riga un multiplo di un'altra.
Effetto sul determinante | Scambio: cambia segno. Riga per un numero: determinante per quel numero. Riga più un multiplo di un'altra: invariato.
Metodo di Gauss per il determinante | Rendere la matrice triangolare con le mosse e moltiplicare la diagonale, contando gli scambi.
Righe dipendenti | Righe tra cui una è un doppione delle altre. Succede esattamente quando il determinante è zero.
Teorema di Binet | Il determinante di un prodotto di matrici quadrate è il prodotto dei determinanti.
Matrice invertibile | Una matrice quadrata che ha un'inversa: un'altra matrice che la disfa.
Matrice inversa $A^{-1}$ | L'unica matrice con $AA^{-1} = A^{-1}A = I_n$. Il suo determinante è $1/\det A$.
Cofattore $\mathrm{cof}_{ij}$ | Il determinante della sottomatrice senza riga $i$ e colonna $j$, con il segno della scacchiera.
Matrice dei cofattori $\mathrm{cof}(A)$ | La matrice che ha nella casella $(i, j)$ il cofattore $\mathrm{cof}_{ij}$.
Proposizione 10.7 | $A$ per la trasposta dei suoi cofattori dà $\det(A) I_n$, in tutti e due gli ordini.
Criterio di invertibilità | Una matrice quadrata è invertibile esattamente quando il determinante non è zero.
Formula dell'inversa | La trasposta dei cofattori divisa per il determinante; per le $2 \times 2$, $\frac 1{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
Inversa di un prodotto | $(AB)^{-1} = B^{-1}A^{-1}$, con l'ordine rovesciato.
Rango massimo | Una matrice quadrata $n \times n$ ha rango $n$ esattamente quando il determinante non è zero.
```

## Checklist

```checklist
- So come cambia il determinante con ciascuna delle tre mosse di Gauss, per righe e per colonne.
- So calcolare un determinante $3 \times 3$ o $4 \times 4$ rendendo la matrice triangolare, contando gli scambi.
- Riconosco a colpo d'occhio righe o colonne uguali, proporzionali o somme di altre, e so che allora il determinante è zero.
- So enunciare il teorema di Binet e usarlo per il determinante di potenze e prodotti.
- So che cosa vuol dire invertibile e che il determinante dell'inversa è $1/\det A$.
- So calcolare la matrice dei cofattori e verificare la Proposizione 10.7 su un esempio.
- So invertire una $2 \times 2$ a memoria e una $3 \times 3$ con i cofattori, con il controllo finale.
- So dire per quali valori di un parametro una matrice è invertibile, scomponendo il determinante.
- So evitare i tranelli: matrice a scalini, Binet con matrici non quadrate, trasposizione dimenticata.
- So combinare multipli, potenze e inverse in un'unica formula, come per $\det(2A^{-1})$.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 10 «Matrici III», pp. 46–49: le sezioni 10.A (altre proprietà del determinante), 10.B (cofattori), 10.C (l'inversa di una matrice) e 10.D (esercizi) sono seguite in ordine, con la pagina accanto a ogni titolo; proposizioni, teoremi, esempi ed esercizi mantengono la loro numerazione (Proposizioni 10.1, 10.3, 10.7, 10.8, Teorema 10.4, Corollario 10.5, Definizione 10.6, Esempio 10.2, Esercizi 10.9, 10.10, 10.11, svolti come esercizi 7, 8 e 9). Per i richiami: lezione 9 (Proposizioni 9.3, 9.5, 9.10, 9.11, Corollario 9.12) e lezione 11 (notazione delle mosse di Gauss, Definizione 11.2).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §3.3.5 (Proposizione 3.3.7), §3.3.7 (Proposizione 3.3.12), §3.3.9 (Proposizione 3.3.15), §3.4.5 (matrici invertibili, Proposizione 3.4.5), §3.4.6 (Teorema 3.4.7, Corollario 3.4.8), §3.4.7 (Proposizioni 3.4.10–3.4.12, Esempio 3.4.13), §3.4.8, Esercizio 3.9.
- **Esame**: testi degli appelli di Algebra lineare dal 24/01/2024 al 07/09/2026 (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); riportati con soluzione propria il problema 11 (punto 1) del 15/01/2026 e le domande 7 del 06/09/2024 e 6 del 03/07/2026; le altre sono citate per numero. Foglio di esercizi 1 del tutorato (27/10/2025), esercizio 9.
- Le parti **«Oltre le dispense»** (definizione di matrice invertibile e unicità dell'inversa, collegamento con il rango, verifica di Binet per le $2 \times 2$, metodi per l'esame, esercizi senza numero) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
