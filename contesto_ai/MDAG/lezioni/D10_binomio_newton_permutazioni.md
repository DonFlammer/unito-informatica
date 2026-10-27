---
corso: MDAG
modulo: MD
lezione: D10
titolo: Binomio di Newton e permutazioni
data: 2026-10-26
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D10
descrizione: >-
  Appunti della lezione D10 di Matematica Discreta (MDAG, parte 1, canali A, B e C): lo sviluppo di (x + y)^n, perché i
  coefficienti sono i coefficienti binomiali (teorema 3.34), come si trova il coefficiente di un termine, le somme di
  una riga del triangolo ricavate dal binomio, poi le permutazioni: definizione, notazione a due righe, quante sono,
  composizione e non commutatività, con il problema d'esame del 14/01/2025.
lede: >-
  Il triangolo di Tartaglia della lezione scorsa serve anche a sviluppare le potenze di una somma, e il motivo è un
  conteggio. Poi si comincia il capitolo sulle permutazioni: i modi di rimescolare gli elementi di un insieme, che
  all'esame hanno sempre una domanda e un problema.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 3, pp. 60–61, e cap. 5, pp. 83–85
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 3 «Combinatorica», pp. 60–61 (teorema 3.34,
  proposizione 3.35, esercizi 3.16 e 3.19), e cap. 5 «Permutazioni», pp. 83–85 (definizione 5.1, proposizione 5.2,
  notazione a due righe); diario delle lezioni del canale B 2025/26; appello di Matematica Discreta del 14/01/2025,
  problema 1
appunti_html: appunti/MDAG/D10_binomio_newton_permutazioni.html
genera_html: true
---

## In breve

- Le potenze di una somma hanno per coefficienti le righe del triangolo di Tartaglia: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, con 1, 3, 3, 1.
- Il motivo è un conteggio: ogni termine dello sviluppo nasce scegliendo in ogni fattore la prima o la seconda lettera, e i modi di scegliere i fattori da cui prendere la seconda sono un coefficiente binomiale. È il **binomio di Newton**.
- Per il **coefficiente di un termine**, come quello di $x^3$ in $(2x - 3)^5$, si scrive il termine generale e si tiene conto dei numeri e dei segni dentro le parentesi.
- Mettendo dei numeri al posto delle due lettere si ottengono le somme di una riga del triangolo: con 1 e 1 viene $2^n$, con 1 e −1 viene 0.
- Una **permutazione** di un insieme è una funzione biettiva dall'insieme in sé stesso: un modo di rimescolare gli elementi, in cui ognuno va in un posto e ogni posto è occupato da uno solo.
- Si scrive con una **tabella a due righe**: sopra gli elementi, sotto dove vanno. Ogni numero compare una volta sola nella riga sotto.
- Le permutazioni di $\{1, \dots, n\}$ sono $n!$, e si compongono come le funzioni. L'ordine della composizione conta: già con 3 elementi i due ordini danno risultati diversi.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di lunedì 26/10/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la decima lezione era «Triangolo di Tartaglia-Pascal. Teorema del binomio di Newton. Permutazioni: definizione ed esempi». Il triangolo è già nella [D09](D09_coefficienti_binomiali_stiefel.html). Nel libro il binomio è alle pp. 60–61 e le permutazioni cominciano a p. 83, nel capitolo 5: il capitolo 4, sui numeri interi, il docente lo fa dopo. Il calcolo con le tabelle di composizioni e inverse e i cicli, nel diario, sono la lezione successiva. Quando il docente pubblica gli argomenti, controllo e aggiorno.

## Sviluppare una potenza a mano

Il quadrato di una somma lo conosci: $(x + y)^2 = x^2 + 2xy + y^2$. Per il cubo si moltiplica ancora per $(x + y)$:

$$(x + y)^3 = (x^2 + 2xy + y^2)(x + y) = x^3 + 3x^2y + 3xy^2 + y^3.$$

I coefficienti sono 1, 2, 1 per il quadrato e 1, 3, 3, 1 per il cubo: le righe 2 e 3 del triangolo di Tartaglia della [D09](D09_coefficienti_binomiali_stiefel.html). Moltiplicando ancora per $(x + y)$ esce la riga 4:

$$(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4.$$

Guardando gli esponenti: quello di $x$ scende da $n$ a 0, quello di $y$ sale da 0 a $n$, e in ogni termine sommano a $n$. I termini sono $n + 1$.

::: prova Scrivi $(x + y)^5$ usando la riga 5 del triangolo, 1, 5, 10, 10, 5, 1.
$x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5$.
:::

> [!RICORDA]
> - I coefficienti di $(x + y)^n$ sono la riga $n$ del triangolo di Tartaglia.
> - Gli esponenti di $x$ e $y$ sommano sempre a $n$; i termini sono $n + 1$.

## Perché escono i coefficienti binomiali

Per vedere da dove vengono i coefficienti conviene non moltiplicare un fattore alla volta, ma guardare tutti i fattori insieme. Il cubo è il prodotto di tre fattori uguali, $(x + y)(x + y)(x + y)$. Sviluppare il prodotto vuol dire scegliere in ogni fattore una delle due lettere, moltiplicare le tre scelte e sommare su tutti i modi di scegliere. I modi sono $2 \cdot 2 \cdot 2 = 8$, e ognuno si può scrivere come una parola di tre lettere: xxy vuol dire x dal primo fattore, x dal secondo, y dal terzo.

```grafico
titolo: Le 8 scelte per sviluppare $(x + y)^3$, raggruppate secondo quante $y$ contengono. Le scelte con due $y$ sono 3, quante i modi di scegliere 2 fattori su 3: per questo $xy^2$ ha coefficiente $\binom{3}{2} = 3$.
x: 0 12
y: 0 6
assi: no
griglia: no
proporzioni: libere
testo: 1.5 5.4 | grigio | "0 volte y"
testo: 4.5 5.4 | grigio | "1 volta y"
testo: 7.5 5.4 | grigio | "2 volte y"
testo: 10.5 5.4 | grigio | "3 volte y"
testo: 1.5 4.3 | blu | "xxx"
testo: 4.5 4.3 | blu | "yxx"
testo: 4.5 3.5 | blu | "xyx"
testo: 4.5 2.7 | blu | "xxy"
testo: 7.5 4.3 | ambra | "yyx"
testo: 7.5 3.5 | ambra | "yxy"
testo: 7.5 2.7 | ambra | "xyy"
testo: 10.5 4.3 | blu | "yyy"
testo: 1.5 1.3 | rosa | "1 · x³"
testo: 4.5 1.3 | rosa | "3 · x²y"
testo: 7.5 1.3 | rosa | "3 · xy²"
testo: 10.5 1.3 | rosa | "1 · y³"
segmento: 0.3 2 11.7 2 | grigio
```

Ogni parola con due y e una x dà lo stesso prodotto, $xy^2$. Le parole di questo tipo sono tante quante le scelte dei **2 posti** su 3 in cui mettere la y: $\binom{3}{2} = 3$. Lo stesso vale per ogni potenza.

> [!TEOREMA] 3.34 · Binomio di Newton
> Per ogni intero $n \ge 1$:
> $$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k}y^k = x^n + \binom{n}{1}x^{n-1}y + \binom{n}{2}x^{n-2}y^2 + \dots + y^n.$$

**Come si legge.** Il simbolo $\sum_{k=0}^{n}$ vuol dire «somma per k che va da 0 a n»: si scrive un termine per ogni valore di k e si sommano. Nel termine numero k la y compare k volte, la x le altre volte, e davanti c'è il coefficiente binomiale. La dimostrazione del libro è il ragionamento del disegno. Un termine con k volte la y si ottiene prendendo la y da k fattori e la x dagli altri. I modi di scegliere quei fattori sono le combinazioni della [D08](D08_combinazioni.html). Il nome «coefficiente binomiale» viene da qui: è il coefficiente nello sviluppo di un binomio.

> [!DIM] La dimostrazione per induzione (esercizio 3.16 del libro)
> Si può dimostrare il teorema anche per induzione su $n$, usando la formula di Stiefel della D09.
>
> **Base**, $n = 1$: $(x + y)^1 = x + y = \binom{1}{0}x + \binom{1}{1}y$.
>
> **Passo.** Supponi la formula vera per $n$ e moltiplica tutti e due i lati per $(x + y)$:
> $$(x + y)^{n+1} = \sum_{k=0}^{n} \binom{n}{k} x^{n+1-k}y^k + \sum_{k=0}^{n} \binom{n}{k} x^{n-k}y^{k+1}.$$
> Nella prima somma il termine $x^{n+1-k}y^k$ ha coefficiente $\binom{n}{k}$; nella seconda, spostando l'indice di uno, lo stesso termine ha coefficiente $\binom{n}{k-1}$. Sommando, il coefficiente di $x^{n+1-k}y^k$ è $\binom{n}{k-1} + \binom{n}{k} = \binom{n+1}{k}$ per Stiefel. Ai due estremi, $x^{n+1}$ e $y^{n+1}$, il coefficiente è 1. È la formula per $n + 1$.

::: prova Nello sviluppo di $(x + y)^{10}$, qual è il coefficiente di $x^5y^5$?
$\binom{10}{5} = 252$: si sceglie $y$ da 5 dei 10 fattori.
:::

> [!RICORDA]
> - Il termine con $y^k$ ha coefficiente $\binom{n}{k}$: i modi di scegliere i $k$ fattori da cui prendere $y$.
> - È la stessa formula del triangolo: il binomio di Newton spiega perché.

## Il coefficiente di un termine

Gli esercizi chiedono spesso un solo coefficiente, in un binomio con numeri e segni: per esempio quello di $x^3$ in $(2x - 3)^5$. Lo sviluppo intero ha sei termini, ma non serve scriverli tutti. Basta pensare che il binomio è $(A + B)^5$ con $A = 2x$ e $B = -3$, e che i numeri e i segni stanno **dentro** $A$ e $B$.

> [!METODO] Il coefficiente di un termine in $(A + B)^n$
> 1. Riconosci $A$ e $B$, con il loro numero e il loro segno.
> 2. Scrivi il termine generale: $\binom{n}{k} A^{n-k}B^k$.
> 3. Trova il $k$ che dà la potenza di $x$ cercata.
> 4. Calcola, elevando anche i numeri e i segni.

> [!ESEMPIO] · Il coefficiente di $x^3$ in $(2x - 3)^5$
> **Passo 1.** $A = 2x$, $B = -3$, $n = 5$.
>
> **Passo 2.** Il termine generale è $\binom{5}{k}(2x)^{5-k}(-3)^k$.
>
> **Passo 3.** La $x$ è solo in $A$, con esponente $5 - k$. Per avere $x^3$ serve $5 - k = 3$, cioè $k = 2$.
>
> **Passo 4.** $\binom{5}{2} \cdot 2^3 \cdot (-3)^2 = 10 \cdot 8 \cdot 9 = 720$. Il termine è $720x^3$.

Con un segno meno i coefficienti si alternano: un esponente dispari di $-3$ dà un numero negativo. Per esempio $(a - b)^4 = a^4 - 4a^3b + 6a^2b^2 - 4ab^3 + b^4$.

> [!TRAPPOLA] Il numero dentro la parentesi va elevato
> Il coefficiente di $x^3$ in $(2x - 3)^5$ non è $\binom{5}{2} = 10$: quello è il coefficiente in $(x + y)^5$. Il 2 e il $-3$ vanno elevati alle loro potenze, $2^3$ e $(-3)^2$. Un altro errore è prendere $k = 3$ perché si cerca $x^3$: il $k$ conta le volte del **secondo** termine, qui il $-3$.

::: prova Qual è il coefficiente di $x^4$ in $(x - 2)^6$?
$A = x$, $B = -2$. Serve $6 - k = 4$, cioè $k = 2$: $\binom{6}{2}(-2)^2 = 15 \cdot 4 = 60$.
:::

> [!RICORDA]
> - Il termine generale è $\binom{n}{k}A^{n-k}B^k$, con numeri e segni dentro $A$ e $B$.
> - Il $k$ è l'esponente del secondo termine, non per forza quello della $x$.

## Le somme di una riga (proposizione 3.35)

La formula di Newton vale qualunque numero si metta al posto delle due lettere. Scegliendo bene i numeri, si ottengono somme di coefficienti binomiali. Con 1 al posto di tutte e due ogni termine diventa solo il suo coefficiente:

$$2^n = (1 + 1)^n = \binom{n}{0} + \binom{n}{1} + \dots + \binom{n}{n}.$$

È la proposizione 3.35, la somma di una riga, che nella [D09](D09_coefficienti_binomiali_stiefel.html) avevamo visto contando i sottoinsiemi. Il libro la dimostra proprio così.

Con 1 al posto della x e −1 al posto della y, i termini di posto dispari cambiano segno. La potenza vale 0, purché l'esponente sia almeno 1:

$$0 = (1 - 1)^n = \binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \dots$$

Si portano i termini negativi dall'altra parte. Risultato: in ogni riga la somma dei coefficienti di posto pari è uguale a quella dei coefficienti di posto dispari, e ognuna vale metà della riga, $2^{n-1}$. È l'esercizio 3.19 del libro, che nella D09 avevamo dimostrato con la simmetria solo per le righe dispari. Con Newton la risposta alla domanda del libro, «è vero anche per le righe pari?», è sì: per esempio nella riga 4, $1 + 6 + 1 = 8 = 4 + 4$.

::: prova Quanto vale $\sum_{k=0}^{4} \binom{4}{k} 2^k$, cioè $1 + 4 \cdot 2 + 6 \cdot 4 + 4 \cdot 8 + 16$?
È il binomio con $x = 1$ e $y = 2$: $(1 + 2)^4 = 3^4 = 81$. Facendo la somma: $1 + 8 + 24 + 32 + 16 = 81$.
:::

> [!RICORDA]
> - Con $x = y = 1$ il binomio dà la somma della riga, $2^n$.
> - Con $x = 1$, $y = -1$ dà la somma a segni alterni, 0: i $k$ pari e i $k$ dispari sommano a $2^{n-1}$ ciascuno.

## Che cos'è una permutazione (definizione 5.1)

Mescolare un mazzo di carte, far cambiare posto a tre persone sedute in fila, riordinare i file di una cartella: in tutti i casi gli stessi elementi finiscono in posti diversi, ognuno in un posto e ogni posto con un solo elemento. Detto con le funzioni della [D04](D04_funzioni_immagini_controimmagini.html): a ogni elemento si associa l'elemento al cui posto va, senza ripetizioni e senza lasciare posti vuoti. È una funzione da un insieme in sé stesso che è iniettiva e suriettiva.

> [!DEF] 5.1 · Permutazione
> Sia $X$ un insieme non vuoto. Una **permutazione** di $X$ è una funzione biettiva $f: X \to X$. L'insieme di tutte le permutazioni di $X$ si indica con $S_X$.

**Come si legge.** «Biettiva» vuol dire che ogni elemento di $X$ è immagine di **uno e un solo** elemento: nessuno è lasciato fuori, nessuno è preso due volte. Quando $X = \{1, 2, \dots, n\}$, che il libro chiama $I_n$, l'insieme delle permutazioni si scrive $S_n$. La funzione identità, che lascia ogni elemento dov'è, è sempre una permutazione: per questo $S_X$ non è mai vuoto.

Per scrivere una permutazione di $I_n$ bisogna dire dove va ogni numero. Il libro usa una **tabella a due righe**: sopra i numeri da 1 a $n$ in ordine, sotto le loro immagini.

$$\pi = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 3 & 2 & 6 & 1 & 5 & 7 & 4 \end{pmatrix}$$

Si legge per colonne: $\pi(1) = 3$, $\pi(2) = 2$, $\pi(3) = 6$, e così via. È l'esempio di p. 85 del libro. I numeri 2 e 5 stanno sotto sé stessi: sono i **punti fissi** di $\pi$, gli elementi che non si muovono.

```grafico
titolo: A sinistra una permutazione di $\{1, 2, 3, 4, 5\}$: ogni numero a destra riceve esattamente una freccia. A destra una funzione che non è una permutazione: il 4 riceve due frecce e il 3 nessuna.
x: 0 12
y: 0 6.4
assi: no
griglia: no
proporzioni: libere
testo: 2.5 6 | verde | "permutazione"
testo: 1 5 | blu | "1"
testo: 1 4 | blu | "2"
testo: 1 3 | blu | "3"
testo: 1 2 | blu | "4"
testo: 1 1 | blu | "5"
testo: 4 5 | ambra | "1"
testo: 4 4 | ambra | "2"
testo: 4 3 | ambra | "3"
testo: 4 2 | ambra | "4"
testo: 4 1 | ambra | "5"
freccia: 1.3 5 3.7 3.1 | grigio
freccia: 1.3 4 3.7 5 | grigio
freccia: 1.3 3 3.7 4 | grigio
freccia: 1.3 2 3.7 1.1 | grigio
freccia: 1.3 1 3.7 1.9 | grigio
testo: 9.5 6 | rosa | "non è biettiva"
testo: 8 5 | blu | "1"
testo: 8 4 | blu | "2"
testo: 8 3 | blu | "3"
testo: 8 2 | blu | "4"
testo: 8 1 | blu | "5"
testo: 11 5 | ambra | "1"
testo: 11 4 | ambra | "2"
testo: 11 3 | ambra | "3"
testo: 11 2 | ambra | "4"
testo: 11 1 | ambra | "5"
freccia: 8.3 5 10.7 2.1 | rosa
freccia: 8.3 4 10.7 5 | grigio
freccia: 8.3 3 10.7 4 | grigio
freccia: 8.3 2 10.7 1 | grigio
freccia: 8.3 1 10.7 1.95 | rosa
```

Nella figura, la permutazione di sinistra in tabella è $\begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 3 & 1 & 2 & 5 & 4 \end{pmatrix}$. Il controllo si fa sulla riga sotto: in una permutazione **ogni numero da 1 a $n$ compare una e una sola volta**. La tabella $\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 4 & 1 & 2 & 5 & 4 & 6 \end{pmatrix}$ del libro non è una permutazione: il 4 compare due volte, quindi la funzione non è iniettiva, e il 3 manca, quindi non è suriettiva.

::: prova La tabella $\begin{pmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 1 & 3 \end{pmatrix}$ è una permutazione? Ha punti fissi?
Sì: nella riga sotto ci sono 1, 2, 3, 4, una volta ciascuno. Non ha punti fissi: nessun numero sta sotto sé stesso.
:::

> [!RICORDA]
> - Una permutazione di $X$ è una funzione biettiva da $X$ in $X$; le permutazioni di $\{1, \dots, n\}$ formano $S_n$.
> - Nella tabella a due righe, ogni numero compare una volta sola nella riga sotto.

## Quante sono (proposizione 5.2)

Una permutazione si costruisce con scelte successive, come gli ordinamenti della [D07](D07_parole_anagrammi_disposizioni.html): si decide dove va ogni numero, uno alla volta. L'immagine dell'1 si sceglie tra tutti gli n numeri. Per quella del 2 ne restano $n - 1$, perché l'immagine dell'1 non si può ripetere. Si va avanti così fino all'ultimo numero, che ha una sola possibilità. Il totale è $n \cdot (n-1) \cdots 1 = n!$. In effetti la riga sotto della tabella è proprio un ordinamento dei numeri da 1 a n.

| $n$ | 1 | 2 | 3 | 4 | 5 | 10 |
|---|---|---|---|---|---|---|
| $\lvert S_n \rvert = n!$ | 1 | 2 | 6 | 24 | 120 | 3 628 800 |

Le 6 permutazioni di $S_3$, scritte con la sola riga sotto, sono 123, 132, 213, 231, 312, 321: la prima è l'identità.

E se l'insieme non è fatto di numeri? Le permutazioni dei colori rosso, verde e blu sono 6 anche loro: basta numerare gli elementi, rosso = 1, verde = 2, blu = 3, e ogni permutazione dei colori diventa una permutazione di $\{1, 2, 3\}$. Il libro lo dice in modo preciso.

> [!PROP] 5.2 · Contare le permutazioni
> Se $X$ è un insieme finito con $\lvert X \rvert = n$, c'è una biezione $f: S_X \to S_n$ che rispetta la composizione: $f(\sigma \circ \pi) = f(\sigma) \circ f(\pi)$. In particolare $\lvert S_X \rvert = n!$.

**Come si legge.** Si numerano gli elementi dell'insieme. Ogni sua permutazione diventa una permutazione dei numeri, e comporre prima o dopo aver numerato dà lo stesso risultato. Per questo da qui in avanti si studiano solo le $S_n$: quello che vale per loro vale per qualunque insieme con n elementi. Nel libro la numerazione è una biezione $\alpha$ dai numeri all'insieme. Una permutazione $\pi$ dell'insieme diventa $\alpha^{-1} \circ \pi \circ \alpha$: dal numero si passa all'elemento, si permuta, si torna al numero.

::: prova Quante permutazioni di $\{1, 2, 3, 4, 5\}$ lasciano fermo l'1?
Se $\pi(1) = 1$, restano da permutare liberamente gli altri 4 numeri: $4! = 24$.
:::

> [!RICORDA]
> - $\lvert S_n \rvert = n!$: la riga sotto della tabella è un ordinamento di $\{1, \dots, n\}$.
> - Numerando gli elementi, le permutazioni di un insieme con $n$ elementi diventano quelle di $S_n$.

## Comporre permutazioni: l'ordine conta (pp. 83–84)

Due rimescolamenti fatti uno dopo l'altro sono ancora un rimescolamento. In termini di funzioni, la composizione di due funzioni biettive è biettiva (proposizione 2.17, nella [D05](D05_composizione_funzioni_inverse.html)): comporre due permutazioni dà una permutazione. La composizione $\sigma \circ \pi$ si legge «prima $\pi$, poi $\sigma$». Il libro elenca le sue proprietà:

1. è **associativa**: $(\tau \circ \sigma) \circ \pi = \tau \circ (\sigma \circ \pi)$;
2. l'identità $\mathrm{id}_X$ non cambia niente: $\pi \circ \mathrm{id}_X = \mathrm{id}_X \circ \pi = \pi$;
3. ogni permutazione ha un'**inversa** $\pi^{-1}$, che è ancora una permutazione: se $\pi(a) = b$, allora $\pi^{-1}(b) = a$. Si ottiene girando le frecce.

Manca la proprietà commutativa, e il libro lo mostra con tre elementi. Prendi $X = \{1, 2, 3\}$, la permutazione $\pi$ che scambia 1 e 2 e lascia fermo il 3, e la permutazione $\sigma$ che scambia 1 e 3 e lascia fermo il 2. Segui il numero 1 nei due ordini:

- $(\sigma \circ \pi)(1) = \sigma(\pi(1)) = \sigma(2) = 2$;
- $(\pi \circ \sigma)(1) = \pi(\sigma(1)) = \pi(3) = 3$.

Il risultato è diverso, quindi $\sigma \circ \pi \neq \pi \circ \sigma$.

```grafico
titolo: Il numero 1 seguito nei due ordini. Sopra si applica prima π (scambia 1 e 2) e poi σ (scambia 1 e 3): l'1 arriva in 2. Sotto prima σ e poi π: l'1 arriva in 3.
x: 0 12
y: 0.4 6
assi: no
griglia: no
proporzioni: libere
testo: 1 5.4 | grigio | "σ ∘ π"
testo: 2 4.5 | blu | "1"
freccia: 2.4 4.5 5.1 4.5 | ambra
testo: 3.75 4.95 | ambra | "π"
testo: 5.6 4.5 | blu | "2"
freccia: 6 4.5 8.7 4.5 | verde
testo: 7.35 4.95 | verde | "σ"
testo: 9.2 4.5 | rosa | "2"
testo: 1 2.6 | grigio | "π ∘ σ"
testo: 2 1.7 | blu | "1"
freccia: 2.4 1.7 5.1 1.7 | verde
testo: 3.75 2.15 | verde | "σ"
testo: 5.6 1.7 | blu | "3"
freccia: 6 1.7 8.7 1.7 | ambra
testo: 7.35 2.15 | ambra | "π"
testo: 9.2 1.7 | rosa | "3"
```

Con uno o due elementi invece la composizione è commutativa: con $X = \{a\}$ c'è solo l'identità, con $X = \{a, b\}$ ci sono l'identità e lo scambio di $a$ e $b$, e comporle in un ordine o nell'altro dà lo stesso risultato. Da 3 elementi in su, l'ordine conta. Come nella D05, $\sigma \circ \pi$ si legge **da destra**: si applica prima $\pi$.

::: prova Con le stesse $\pi$ e $\sigma$, quanto valgono $(\sigma \circ \pi)(2)$ e $(\pi \circ \sigma)(2)$?
$(\sigma \circ \pi)(2) = \sigma(1) = 3$ e $(\pi \circ \sigma)(2) = \pi(2) = 1$. Di nuovo diversi.
:::

> [!RICORDA]
> - La composizione di due permutazioni è una permutazione; è associativa, ha l'identità e ogni permutazione ha l'inversa.
> - Non è commutativa da 3 elementi in su: $\sigma \circ \pi$ e $\pi \circ \sigma$ possono essere diverse.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\sum_{k=0}^{n}$ | «somma per $k$ da 0 a $n$» | si somma il termine per ogni $k$ da 0 a $n$ | $\sum_{k=0}^{3} \binom{3}{k} = 8$ |
| $S_X$ | «S di X» | l'insieme delle permutazioni di $X$ | $S_{\{a, b\}}$ ha 2 elementi |
| $S_n$ | «S n» | le permutazioni di $\{1, \dots, n\}$ | $\lvert S_4 \rvert = 24$ |
| $I_n$ | «I n» | l'insieme $\{1, 2, \dots, n\}$ | $I_3 = \{1, 2, 3\}$ |
| $\mathrm{id}_X$ | «identità di X» | la permutazione che lascia tutto fermo | $\mathrm{id}_X(a) = a$ |
| $\pi^{-1}$ | «pi alla meno uno» | la permutazione inversa | se $\pi(1) = 3$, $\pi^{-1}(3) = 1$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 26/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **Il binomio di Newton** non compare in nessuno degli appelli 2021–2026 che ho. Serve per dimostrare formule come $\sum \binom{n}{k} = 2^n$, e i coefficienti di un binomio sono un esercizio classico.
2. **Le permutazioni** invece ci sono **in tutti gli appelli del 2025 e del 2026**: di solito le domande 5 e 6 del quiz e uno dei due problemi. Chiedono cicli, tipo, periodo e parità, che arrivano nelle prossime lezioni. Quello che serve già da ora è leggere e scrivere la tabella a due righe, sapere che $\lvert S_n \rvert = n!$ e calcolare un'inversa girando le frecce.

### Una domanda vera, letta insieme

**Appello del 14/01/2025, problema 1, versione A.** Il testo: «Si considerino le due permutazioni in $S_6$: $\sigma = (1\,3)(2\,4\,3)(3\,5\,1)$, $\tau = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 1 & 4 & 2 & 6 & 5 \end{pmatrix}$. a) Scrivere $\sigma$ e $\tau$ come prodotti di cicli disgiunti, calcolarne il tipo, il periodo e la parità. b) Determinare una permutazione $\nu \in S_6$ tale che $\sigma^{15041}\nu = \tau^{-1}$, e scriverla in notazione matriciale (a due righe). c) Dimostrare che la funzione $f: \mathbb{Z} \to S_6$, $n \mapsto \sigma^n$, è un omomorfismo, e calcolarne nucleo e immagine.»

**In pratica chiede:** quasi tutto quello che si fa sulle permutazioni nel corso. La $\sigma$ è scritta con i cicli, che arrivano nella prossima lezione; il punto c) è della fine del corso. Con questa lezione si può già leggere $\tau$ e calcolarne l'inversa, che serve nel punto b).

> [!ESEMPIO] · la parte che si fa già, passo per passo
> **Passo 1: leggere $\tau$.** Per colonne: $\tau(1) = 3$, $\tau(2) = 1$, $\tau(3) = 4$, $\tau(4) = 2$, $\tau(5) = 6$, $\tau(6) = 5$. Nella riga sotto ci sono 1, …, 6 una volta ciascuno: è una permutazione.
>
> **Passo 2: girare le frecce.** Se $\tau(a) = b$, allora $\tau^{-1}(b) = a$. Si cerca nella riga sotto il numero 1: sta sotto il 2, quindi $\tau^{-1}(1) = 2$. Il 2 sta sotto il 4: $\tau^{-1}(2) = 4$. Poi $\tau^{-1}(3) = 1$, $\tau^{-1}(4) = 3$, $\tau^{-1}(5) = 6$, $\tau^{-1}(6) = 5$.
>
> **Passo 3: la tabella.** $\tau^{-1} = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 2 & 4 & 1 & 3 & 6 & 5 \end{pmatrix}$. È la stessa della soluzione ufficiale.
>
> **Il resto.** La soluzione ufficiale scrive $\sigma = (1\,2\,4)(3\,5)$, di tipo $(3, 2)$, periodo 6, dispari, e $\tau = (1\,3\,4\,2)(5\,6)$, di tipo $(4, 2)$, periodo 4, pari; poi trova $\nu = \sigma\tau^{-1}$. Sono le cose delle prossime lezioni.

**Errori da evitare**

- Leggere la tabella per righe invece che per colonne: $\tau(2)$ è il numero **sotto** il 2, non il secondo numero da sinistra della riga sopra.
- Per l'inversa, scambiare solo le righe e dimenticare di riordinare la tabella secondo la riga sopra.
- Nei coefficienti di un binomio, dimenticare di elevare i numeri e i segni dentro le parentesi.

## Quiz

```quiz
D: Appello del 14/01/2025, problema 1 (versione A). Con $\tau = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 1 & 4 & 2 & 6 & 5 \end{pmatrix}$, qual è la riga sotto di $\tau^{-1}$?
+ 2 4 1 3 6 5
- 3 1 4 2 6 5
- 5 6 2 4 1 3
- 2 1 4 3 5 6
- 3 4 1 2 6 5
= Si gira ogni freccia: l'1 sta sotto il 2, quindi $\tau^{-1}(1) = 2$, e così via. È la tabella della soluzione ufficiale. La risposta più insidiosa è la seconda, che è $\tau$ stessa: si sono scambiate le righe senza riordinare.

D: Sul modello degli esercizi sul binomio: qual è il coefficiente di $x^3$ in $(2x - 3)^5$?
+ 720
- 10
- 80
- −720
- 1080
= $k = 2$: $\binom{5}{2} \cdot 2^3 \cdot (-3)^2 = 10 \cdot 8 \cdot 9 = 720$, controllato sviluppando con un programma. La risposta più insidiosa è 10, il solo coefficiente binomiale; 80 dimentica il $(-3)^2$; −720 sbaglia il segno: $(-3)^2$ è positivo.

D: Quanti termini ha lo sviluppo di $(x + y)^{12}$?
N: 13
= I termini sono $x^{12-k}y^k$ per $k$ da 0 a 12: sono 13. L'errore tipico è rispondere 12.

D: Quanto vale $\binom{6}{0} - \binom{6}{1} + \binom{6}{2} - \binom{6}{3} + \binom{6}{4} - \binom{6}{5} + \binom{6}{6}$?
+ 0
- 64
- 32
- 1
- −1
= È il binomio di Newton con $x = 1$, $y = -1$: $(1 - 1)^6 = 0$. La risposta più insidiosa è 32: è la somma dei soli termini con $k$ pari, $1 + 15 + 15 + 1$.

D: Quante sono le permutazioni di un insieme con 5 elementi?
N: 120
= Sono $5! = 120$: la riga sotto della tabella è un ordinamento dei 5 elementi.

D: Quale di queste tabelle è una permutazione di $\{1, 2, 3, 4, 5\}$? (Si scrive solo la riga sotto.)
+ 5 3 1 4 2
- 1 2 3 4 4
- 2 3 4 5 6
- 3 1 2 5 3
- 1 2 3 4
= Nella riga sotto devono comparire 1, 2, 3, 4, 5 una volta ciascuno. La risposta più insidiosa è «2 3 4 5 6»: i valori sono tutti diversi, ma il 6 non è nell'insieme e l'1 manca. L'ultima ha solo 4 numeri: manca l'immagine del 5.

D: $\pi$ scambia 1 e 2, $\sigma$ scambia 1 e 3, ed entrambe lasciano fermo il terzo numero. Quanto vale $(\pi \circ \sigma)(1)$?
+ 3
- 2
- 1
- dipende dall'ordine in cui le scrivo
- non è definito
= Si applica prima $\sigma$: $\sigma(1) = 3$; poi $\pi(3) = 3$. La risposta più insidiosa è 2, che è $(\sigma \circ \pi)(1)$: l'ordine si legge da destra.

D: Quante permutazioni di $\{1, 2, 3, 4, 5, 6\}$ mandano l'1 nel 2 e il 2 nell'1?
N: 24
= Fissate le immagini di 1 e 2, i numeri da 3 a 6 si permutano liberamente: $4! = 24$. L'ho contato anche provando tutte le 720 permutazioni.
```

## Esercizi

::: esercizio base Riscaldamento: sviluppare
Sviluppa con il triangolo: (a) $(x + y)^5$; (b) $(a - b)^4$; (c) $(2x + 1)^4$.
::: soluzione
(a) $x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5$. (b) $a^4 - 4a^3b + 6a^2b^2 - 4ab^3 + b^4$: i segni si alternano. (c) $16x^4 + 32x^3 + 24x^2 + 8x + 1$: ogni coefficiente della riga 4 va moltiplicato per la potenza di 2 che accompagna $x$, per esempio $4 \cdot 2^3 = 32$.
:::

::: esercizio base Riscaldamento: è una permutazione?
Per ogni riga sotto (sopra c'è $1, 2, \dots$) di' se è una permutazione e trova i punti fissi: (a) 2 1 3; (b) 1 1 2; (c) 4 3 2 1; (d) 1 2 3 4 5.
::: soluzione
(a) Sì, punto fisso 3. (b) No: l'1 compare due volte e il 3 manca. (c) Sì, nessun punto fisso. (d) Sì, è l'identità: tutti i numeri sono fissi.
:::

::: esercizio medio Coefficienti
Trova: (a) il coefficiente di $x^2$ in $(1 + x)^7$; (b) il coefficiente di $x^6$ in $(x^2 + 1)^5$; (c) il coefficiente di $x^2y$ in $(3x + y)^3$.
::: soluzione
(a) $\binom{7}{2} = 21$. (b) $A = x^2$, $B = 1$: il termine generale è $\binom{5}{k}x^{2(5-k)}$, e $2(5 - k) = 6$ dà $k = 2$: $\binom{5}{2} = 10$. (c) $k = 1$: $\binom{3}{1} \cdot 3^2 = 27$. Tutti controllati sviluppando con un programma.
:::

::: esercizio medio Permutazioni con un vincolo
In $S_5$, quante permutazioni hanno $\pi(1) < \pi(2)$?
::: soluzione
Metà di tutte: 60. Scambiando i valori di $\pi(1)$ e $\pi(2)$ si passa da una permutazione con $\pi(1) < \pi(2)$ a una con $\pi(1) > \pi(2)$, e viceversa: è una biezione tra i due gruppi, che quindi hanno lo stesso numero di elementi, $120 / 2 = 60$.
:::

::: esercizio esame Permutazioni senza punti fissi
Quante permutazioni di $\{1, 2, 3, 4\}$ non lasciano fermo nessun numero? Usa il principio di inclusione-esclusione della [D06](D06_insiemi_finiti_inclusione_esclusione.html).
::: soluzione
Sia $A_i$ l'insieme delle permutazioni con $\pi(i) = i$. Una permutazione che fissa $j$ numeri dati permuta liberamente gli altri: ce ne sono $(4 - j)!$, e i modi di scegliere i $j$ numeri sono $\binom{4}{j}$. Le permutazioni che fissano almeno un numero sono
$$\binom{4}{1}3! - \binom{4}{2}2! + \binom{4}{3}1! - \binom{4}{4}0! = 24 - 12 + 4 - 1 = 15.$$
Quelle senza punti fissi sono $24 - 15 = 9$. L'ho controllato provando tutte le 24 permutazioni.
:::

::: esercizio difficile Esercizio 3.16 del libro: Newton per induzione
Dimostra il binomio di Newton per induzione su $n$, usando la formula di Stiefel.
::: soluzione
È la dimostrazione nel riquadro chiuso della sezione «Perché escono i coefficienti binomiali». In breve: si moltiplica lo sviluppo di $(x + y)^n$ per $x$ e per $y$, si raccolgono i termini con la stessa potenza, e il coefficiente di $x^{n+1-k}y^k$ viene $\binom{n}{k-1} + \binom{n}{k}$, che per Stiefel è $\binom{n+1}{k}$.
:::

## Domande di ripasso

::: domanda Perché i coefficienti di $(x + y)^n$ sono coefficienti binomiali?
Perché il termine $x^{n-k}y^k$ si ottiene scegliendo $y$ da $k$ degli $n$ fattori, e i modi di sceglierli sono $\binom{n}{k}$.
:::

::: domanda Come si trova il coefficiente di una potenza di $x$ in $(A + B)^n$?
Si scrive il termine generale $\binom{n}{k}A^{n-k}B^k$, si trova il $k$ che dà la potenza cercata e si calcola elevando anche numeri e segni.
:::

::: domanda Che cos'è una permutazione?
Una funzione biettiva da un insieme in sé stesso: ogni elemento va in un posto, e ogni posto è occupato da un solo elemento.
:::

::: domanda Quante sono le permutazioni di un insieme con $n$ elementi, e perché?
$n!$: l'immagine del primo elemento si sceglie in $n$ modi, quella del secondo in $n - 1$, e così via.
:::

::: domanda La composizione di permutazioni è commutativa?
No, da 3 elementi in su: scambiare 1 e 2 e poi 1 e 3 manda l'1 in 2, mentre nell'altro ordine lo manda in 3.
:::

## Glossario

```glossario
Binomio di Newton | (x + y)^n = somma per k da 0 a n di C(n, k) x^(n-k) y^k (teorema 3.34).
Termine generale | Il termine con indice k nello sviluppo di (A + B)^n: C(n, k) A^(n-k) B^k.
Permutazione | Funzione biettiva da un insieme X in sé stesso (definizione 5.1).
S_X, S_n | L'insieme delle permutazioni di X; S_n quello delle permutazioni di {1, ..., n}, con n! elementi.
Tabella a due righe | Notazione di una permutazione: sopra 1, ..., n, sotto le immagini.
Punto fisso | Elemento che una permutazione lascia dov'è: π(a) = a.
Permutazione inversa | La permutazione che gira le frecce: se π(a) = b, allora π⁻¹(b) = a.
```

## Checklist

```checklist
- So sviluppare (x + y)^n con il triangolo di Tartaglia.
- So spiegare perché il coefficiente di x^(n-k) y^k è C(n, k).
- So trovare il coefficiente di un termine in un binomio con numeri e segni.
- So ricavare dal binomio la somma di una riga e la somma a segni alterni.
- So dire quando una tabella a due righe è una permutazione e trovarne i punti fissi.
- So perché |S_n| = n!.
- So comporre due permutazioni su un elemento e mostrare che l'ordine conta.
- So calcolare l'inversa di una permutazione girando le frecce.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 3 «Combinatorica», pp. 60–61 (teorema 3.34 con la dimostrazione, proposizione 3.35 con la dimostrazione dal binomio), esercizi 3.16 e 3.19 (p. 66); capitolo 5 «Permutazioni», pp. 83–85 (definizione 5.1, le proprietà della composizione in $S_X$, l'esempio della non commutatività, proposizione 5.2, la tabella a due righe con gli esempi in $S_7$ e $I_6$). Le parti del libro sono riassunte con parole mie.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori): lezione 10 (triangolo di Tartaglia-Pascal, teorema del binomio di Newton, permutazioni: definizione ed esempi) e lezione 11 (composizioni e inverse di permutazioni, cicli).
- Appello di Matematica Discreta del 14/01/2025, problema 1, versione A, con la soluzione ufficiale, dal Moodle MDAG1 2025/26 (id 3501, aperto agli ospiti).
- Gli sviluppi e i coefficienti li ho controllati con sympy; i conteggi sulle permutazioni ($S_5$ con $\pi(1) < \pi(2)$, $S_6$ con 1 e 2 scambiati, $S_4$ senza punti fissi) provando tutte le permutazioni con un programma. Gli esempi senza indicazione, i quiz e gli esercizi sono di questi appunti.
