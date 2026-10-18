---
corso: MDAG
modulo: MD
lezione: D07
titolo: Parole, ordinamenti, anagrammi e disposizioni
data: 2026-10-16
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D07
descrizione: >-
  Appunti della lezione D07 di Matematica Discreta (MDAG, parte 1, canali A, B e C): il metodo delle scelte
  successive, alfabeti e parole, disposizioni con ripetizione, ordinamenti e fattoriale, disposizioni semplici,
  anagrammi di una parola con lettere ripetute, il problema delle combinazioni semplici, con la domanda 4 del quiz di
  tutti gli appelli 2025–2026 e i problemi d'esame su anagrammi e ordinamenti.
lede: >-
  Si comincia a contare sul serio: quante parole, quante password, quanti ordini di arrivo, quanti anagrammi. Tutto
  si regge su un'idea sola, il metodo delle scelte successive, e su due domande da farsi ogni volta: l'ordine conta?
  si può ripetere?
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 3, pp. 48–55, esercizi pp. 64–65
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 3 «Combinatorica», pp. 48–55, ed esercizi 3.8,
  3.9, 3.11; diario delle lezioni del canale B 2026/27; quiz e problemi degli appelli di Matematica Discreta
appunti_html: appunti/MDAG/D07_parole_anagrammi_disposizioni.html
genera_html: true
---

## In breve

- **Metodo delle scelte successive**: se una cosa si costruisce con più scelte una dopo l'altra, il numero totale è il **prodotto** dei numeri di possibilità di ogni scelta.
- Una **parola** su un alfabeto, con ripetizioni ammesse, è una **disposizione con ripetizione**: con 26 lettere, le parole di 3 lettere sono $26^3$.
- Mettere in fila 5 oggetti diversi si può fare in $5! = 120$ modi: è il **fattoriale**, il prodotto dei numeri da 1 a 5.
- Scegliere oggetti diversi **in ordine** è una **disposizione semplice**: il podio con 12 atleti si forma in $12 \cdot 11 \cdot 10$ modi.
- Gli **anagrammi** di una parola di $n$ lettere sono $n!$ diviso il fattoriale di quante volte si ripete ogni lettera.
- Se l'ordine **non** conta si parla di **combinazioni**: è il problema della prossima lezione.
- All'esame la **domanda 4** del quiz è sempre di calcolo combinatorio, e le risposte sono scritte con potenze e fattoriali senza fare i conti.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di venerdì 16/10/2026, dalle 9 alle 11, con Andrea Mori. Gli argomenti sono quelli del diario del docente: «Alfabeti, parole ed anagrammi. Disposizioni semplici e con ripetizione: formule ed esempi. Combinazioni semplici: enunciato del problema». Nel libro sono le pp. 48–55. Qui ci sono anche gli ordinamenti delle pp. 50–51, che servono per le disposizioni e gli anagrammi. La formula delle combinazioni (Proposizione 3.28) è nella prossima lezione.
>
> Nel libro ho trovato una svista, a p. 50: le targhe possibili sono 175 760 000, non 17 576 000.

## Il metodo delle scelte successive (pp. 48–50)

Un ristorante ha un menù con 2 primi e 3 secondi. Un pasto è «un primo e un secondo»: per ognuno dei 2 primi ci sono 3 secondi possibili, quindi i pasti sono $2 \cdot 3 = 6$. Il disegno lo fa vedere: ogni strada dalla radice a una foglia è un pasto.

```grafico
titolo: Le scelte una dopo l'altra formano un albero. 2 primi, e dopo ciascuno 3 secondi: le foglie, cioè i pasti, sono $2 \cdot 3 = 6$.
x: 0 10
y: 0 6
assi: no
griglia: no
punto: 1 3 | grigio | "inizio" | o
segmento: 1 3 4.5 4.5 | blu
segmento: 1 3 4.5 1.5 | blu
punto: 4.5 4.5 | blu | "pasta" | n
punto: 4.5 1.5 | blu | "risotto" | s
segmento: 4.5 4.5 8 5.5 | ambra
segmento: 4.5 4.5 8 4.5 | ambra
segmento: 4.5 4.5 8 3.5 | ambra
segmento: 4.5 1.5 8 2.5 | ambra
segmento: 4.5 1.5 8 1.5 | ambra
segmento: 4.5 1.5 8 0.5 | ambra
punto: 8 5.5 | ambra | "pollo" | e
punto: 8 4.5 | ambra | "pesce" | e
punto: 8 3.5 | ambra | "verdure" | e
punto: 8 2.5 | ambra | "pollo" | e
punto: 8 1.5 | ambra | "pesce" | e
punto: 8 0.5 | ambra | "verdure" | e
```

In generale, una situazione si ottiene con $k$ scelte una dopo l'altra: la prima ha $n_1$ possibilità, la seconda $n_2$, e così via. Allora il numero totale è il prodotto $n_1 \cdot n_2 \cdots n_k$. È il **metodo delle scelte successive**. Quando le scelte sono indipendenti, è la Proposizione 3.16 del libro: il prodotto cartesiano $A_1 \times \dots \times A_k$ ha $n_1 \cdot n_2 \cdots n_k$ elementi, come nella lezione D03.

La Nota 3.17 aggiunge la cosa importante: il metodo funziona **anche quando le possibilità di una scelta dipendono da quelle prima**, purché il loro **numero** non cambi. È quello che serve per le disposizioni semplici più sotto.

> [!ESEMPIO] · Gli esempi del libro (pp. 49–50)
> - **Il menù completo.** 8 antipasti, 10 primi, 12 secondi, 6 dolci: $8 \cdot 10 \cdot 12 \cdot 6 = 5760$ pasti.
> - **Le targhe.** 3 lettere dell'alfabeto inglese, che ne ha 26, poi 4 cifre, con ripetizioni ammesse: $26^3 \cdot 10^4 = 175\,760\,000$. Nel libro il risultato è stampato con uno zero in meno.
> - **Il PIN.** 4 cifre, ripetibili: $10^4 = 10\,000$ codici. Con il principio dei piccioni della lezione D06: tra 10 001 telefoni, due hanno lo stesso PIN.
> - **Le funzioni.** Se $\lvert A \rvert = m$ e $\lvert B \rvert = n$, le funzioni $A \to B$ sono $n^m$: per ognuno degli $m$ elementi di $A$ si sceglie liberamente dove mandarlo, tra $n$ possibilità.

::: prova Un codice è fatto da una lettera tra A, B, C, D e poi da una cifra dispari. Quanti codici ci sono?
$4 \cdot 5 = 20$: 4 lettere, e per ognuna 5 cifre dispari (1, 3, 5, 7, 9).
:::

> [!RICORDA]
> - Scelte una dopo l'altra: si **moltiplicano** i numeri di possibilità.
> - Funziona anche se le scelte dipendono da quelle prima, purché il loro numero resti lo stesso.

## Parole su un alfabeto (pp. 52–54)

Un **alfabeto** è un insieme finito di simboli: le 26 lettere, le 10 cifre, i due bit 0 e 1. Una **parola** di lunghezza $k$ è una fila di $k$ simboli dell'alfabeto, anche ripetuti, senza bisogno che abbia senso: AAB, RDB, 0110 sono parole. Per contarle si usa il metodo delle scelte successive: ogni posto della fila ha le stesse $n$ possibilità.

> [!DEF] 3.23 e Proposizione 3.24 · Disposizioni con ripetizione
> Sia $A$ un insieme finito con $\lvert A \rvert = n$ e sia $k \ge 1$. Una **disposizione con ripetizione** di ordine $k$ in $A$ è una sequenza di $k$ elementi di $A$, non necessariamente diversi tra loro. Sono $n^k$.

**Come si legge.** Disposizione con ripetizione, parola di lunghezza $k$, elemento di $A \times \dots \times A$ ($k$ volte), funzione da $\{1, \dots, k\}$ ad $A$: sono quattro modi di dire la stessa cosa. In tutti i casi si sceglie liberamente cosa mettere in ognuno dei $k$ posti.

> [!ESEMPIO] · Due esempi del libro (p. 54)
> - **I colori.** 7 oggetti di legno diversi, 4 smalti: ogni oggetto riceve uno dei 4 colori, e i colori si ripetono. Le colorazioni sono $4^7$.
> - **I voti.** 15 candidati, voto da 0 a 10, cioè 11 voti possibili: gli esiti possibili sono $11^{15}$.

> [!TRAPPOLA] Chi è la base e chi l'esponente
> La **base** è il numero di simboli tra cui si sceglie ogni volta; l'**esponente** è quante volte si sceglie. Con 15 candidati e 11 voti si sceglie 15 volte un voto tra 11: $11^{15}$, non $15^{11}$. Nei quiz le due risposte ci sono sempre tutte e due.

::: prova Quante sono le parole di 3 lettere scritte con le lettere A, B, C, D, E? E quante le parole di 10 bit?
$5^3 = 125$ e $2^{10} = 1024$.
:::

> [!RICORDA]
> - Parole di lunghezza $k$ su $n$ simboli, ripetizioni ammesse: $n^k$.
> - Base = quanti simboli; esponente = quanti posti.

## Mettere in fila: il fattoriale (pp. 50–51)

In quanti modi si mettono in fila 3 persone, Anna, Bruno e Carla? Per il primo posto ci sono 3 scelte, per il secondo ne restano 2, per il terzo 1: $3 \cdot 2 \cdot 1 = 6$. Le file sono ABC, ACB, BAC, BCA, CAB, CBA.

> [!DEF] 3.18 e 3.19 · Ordinamento e fattoriale
> Un **ordinamento** di un insieme $A$ con $n$ elementi è una funzione biettiva $\{1, \dots, n\} \to A$: dice chi va al primo posto, chi al secondo, e così via. Il **fattoriale** di $n$ è $n! = 1 \cdot 2 \cdot 3 \cdots n$ per $n \ge 1$, e $0! = 1$.

**Come si legge.** Una funzione biettiva dai posti agli elementi è proprio una fila: a ogni posto un elemento, e ogni elemento in un posto solo.

> [!PROP] 3.20
> Un insieme con $n$ elementi ha $n!$ ordinamenti.

**Come si legge.** Si sceglie il primo tra $n$, il secondo tra i restanti $n - 1$, e così via fino all'ultimo, che è obbligato. Il punto esclamativo si legge «fattoriale»: $5!$ è «cinque fattoriale».

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $n!$ | 1 | 1 | 2 | 6 | 24 | 120 | 720 | 5040 | 40 320 |

Il fattoriale cresce in fretta: $14! = 87\,178\,291\,200$, i modi di ordinare 14 canzoni in una compilation, uno degli esempi del libro. Due regole:

- $n! = (n - 1)! \cdot n$, per esempio $6! = 120 \cdot 6 = 720$;
- $0! = 1$ è una convenzione, che fa tornare le formule nei casi limite.

All'esame non serve calcolare i fattoriali grandi: le risposte sono scritte come $11!/3!$ o $\binom{12}5$, e si sceglie la formula giusta.

::: prova Alla finale olimpica dei 100 metri ci sono 8 atleti. Quanti sono i possibili ordini di arrivo? Quanto vale $\frac{8!}{6!}$?
$8! = 40\,320$. E $\frac{8!}{6!} = 8 \cdot 7 = 56$: i fattori da 1 a 6 si semplificano.
:::

> [!RICORDA]
> - $n$ oggetti diversi si mettono in fila in $n!$ modi.
> - $0! = 1$; $\frac{n!}{m!}$ con $m < n$ è il prodotto dei numeri da $m + 1$ a $n$.

## Disposizioni semplici (pp. 53–55)

Alla finale olimpica ci sono 12 atleti, e conta solo il podio: oro, argento, bronzo. Per l'oro ci sono 12 possibilità, per l'argento ne restano 11, per il bronzo 10. I podi sono $12 \cdot 11 \cdot 10 = 1320$. Come una fila, ma che si ferma dopo 3 posti.

```grafico
titolo: Il podio con 12 atleti: tre posti in ordine, e chi è già sul podio non può tornarci. Il conto si ferma dopo 3 fattori.
x: 0 10
y: 0 3.4
assi: no
griglia: no
poligono: 0.8 1.4 3.2 1.4 3.2 2.6 0.8 2.6 | ambra
poligono: 3.8 1.4 6.2 1.4 6.2 2.6 3.8 2.6 | grigio
poligono: 6.8 1.4 9.2 1.4 9.2 2.6 6.8 2.6 | rosa
testo: 2 2 | ambra | "12 scelte"
testo: 5 2 | grigio | "11 scelte"
testo: 8 2 | rosa | "10 scelte"
testo: 2 3 | ambra | "oro"
testo: 5 3 | grigio | "argento"
testo: 8 3 | rosa | "bronzo"
testo: 3.5 2 | "·"
testo: 6.5 2 | "·"
testo: 5 0.6 | blu | "12 · 11 · 10 = 1320"
```

> [!DEF] 3.25 e Proposizione 3.26 · Disposizioni semplici
> Sia $A$ un insieme con $\lvert A \rvert = n$ e sia $1 \le k \le n$. Una **disposizione semplice** di ordine $k$ in $A$ è una sequenza di $k$ elementi di $A$ **tutti diversi**. Sono
> $$D_{n,k} = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}.$$

**Come si legge.** Il prodotto ha $k$ fattori, che scendono di uno alla volta a partire da $n$. La forma con i fattoriali è la stessa cosa: $\frac{12!}{9!} = 12 \cdot 11 \cdot 10$, perché i fattori da 1 a 9 si semplificano. All'esame le risposte sono scritte proprio così, come $\frac{11!}{3!}$.

Due casi speciali:

- se $k > n$ non ci sono disposizioni semplici: è il principio dei piccioni della lezione D06, non si mettono 5 persone su 4 sedie una per sedia;
- se $k = n$ una disposizione semplice è un ordinamento, e $D_{n,n} = n!$.

> [!ESEMPIO] · La password (p. 55)
> **Situazione:** una password è di 8 simboli alfanumerici, lettere (26) o cifre (10), **senza ripetizioni**.
>
> **Passo 1: l'insieme.** I simboli possibili sono $26 + 10 = 36$.
>
> **Passo 2: il tipo.** L'ordine conta (AB1 e B1A sono password diverse) e non si ripete: disposizione semplice di ordine 8.
>
> **Passo 3: il conto.** $D_{36,8} = 36 \cdot 35 \cdot 34 \cdot 33 \cdot 32 \cdot 31 \cdot 30 \cdot 29 = 1\,220\,096\,908\,800$.

| Domande da farsi | Sì | No |
|---|---|---|
| L'ordine conta? | disposizioni o ordinamenti | combinazioni, la prossima lezione |
| Si può ripetere? | $n^k$ | $\frac{n!}{(n-k)!}$ |
| Si usano tutti gli $n$ oggetti, una volta ciascuno? | ordinamenti, $n!$ | disposizioni, se se ne usano solo $k$ |

::: prova In quanti modi 8 persone si siedono in una fila di 11 sedie, una per sedia?
Ogni persona sceglie una sedia, e le sedie non si ripetono: la prima persona ha 11 scelte, la seconda 10, … l'ottava 4. Sono $D_{11,8} = \frac{11!}{3!}$. È la domanda 4 dell'appello del 14/01/2025.
:::

> [!RICORDA]
> - In ordine e senza ripetizioni: $D_{n,k} = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$.
> - Con $k = n$ è un ordinamento, $n!$; con $k > n$ non ce ne sono.

## Anagrammi (pp. 52–53)

Gli anagrammi di NUMERO sono tutti i modi di rimescolarne le lettere, anche senza senso: le 6 lettere sono tutte diverse, quindi sono $6! = 720$. Con ORO invece no: le file di 3 lettere sono 6, ma scambiare le due O non cambia la parola, e gli anagrammi sono solo 3: ORO, OOR, ROO.

```grafico
titolo: Le 6 file di $O_1$, $R$, $O_2$ danno solo 3 parole: ogni parola si ottiene in $2! = 2$ modi, scambiando le due O. Quindi gli anagrammi sono $3!/2! = 3$.
x: 0 10
y: 0 6.6
assi: no
griglia: no
testo: 2 6.1 | blu | "le 6 file"
testo: 8 6.1 | ambra | "le parole"
punto: 2.8 5.2 | blu | $O_1 R O_2$ | o
punto: 2.8 4.4 | blu | $O_2 R O_1$ | o
punto: 2.8 3.4 | blu | $O_1 O_2 R$ | o
punto: 2.8 2.6 | blu | $O_2 O_1 R$ | o
punto: 2.8 1.6 | blu | $R O_1 O_2$ | o
punto: 2.8 0.8 | blu | $R O_2 O_1$ | o
punto: 7.2 4.8 | ambra | "ORO" | e
punto: 7.2 3 | ambra | "OOR" | e
punto: 7.2 1.2 | ambra | "ROO" | e
freccia: 2.9 5.2 7.05 4.85
freccia: 2.9 4.4 7.05 4.75
freccia: 2.9 3.4 7.05 3.05
freccia: 2.9 2.6 7.05 2.95
freccia: 2.9 1.6 7.05 1.25
freccia: 2.9 0.8 7.05 1.15
```

L'idea vale sempre: si contano le file come se le lettere fossero tutte diverse, $n!$, e poi si divide per i rimescolamenti che non cambiano la parola. Una lettera che compare $r$ volte si rimescola in $r!$ modi.

> [!PROP] 3.22 · Numero degli anagrammi
> Se una parola ha $n$ lettere, e le lettere diverse compaiono $r_1, r_2, \dots, r_k$ volte, i suoi anagrammi sono
> $$\frac{n!}{r_1! \cdot r_2! \cdots r_k!}.$$

**Come si legge.** Sopra il fattoriale della lunghezza, sotto un fattoriale per ogni lettera, con quante volte compare. Le lettere che compaiono una volta danno $1! = 1$ e si possono non scrivere. Nel libro un anagramma è definito come una composizione $f \circ g$ con $g$ biettiva, della lezione D05: è il rimescolamento dei posti.

> [!ESEMPIO] · MATEMATICA (p. 53)
> **Passo 1: le lettere.** 10 lettere: A tre volte, M due volte, T due volte, E, I, C una volta.
>
> **Passo 2: la formula.** $\frac{10!}{3! \cdot 2! \cdot 2!} = \frac{3\,628\,800}{24} = 151\,200$.

> [!TRAPPOLA] Si divide, non si sottrae
> Le risposte sbagliate dei quiz tolgono invece di dividere, come $6! - (2! + 3!)$, oppure dividono per il numero delle ripetizioni invece che per il suo fattoriale, come $\frac{6!}{2 \cdot 3}$. La formula ha un fattoriale per ogni lettera ripetuta, e sta sotto la frazione.

::: prova Quanti sono gli anagrammi di CASA? E di POLLO?
CASA: 4 lettere, A due volte: $\frac{4!}{2!} = 12$. POLLO: 5 lettere, O e L due volte ciascuna: $\frac{5!}{2! \cdot 2!} = 30$.
:::

> [!RICORDA]
> - Anagrammi: $n!$ diviso il fattoriale delle ripetizioni di ogni lettera.
> - Lettere tutte diverse: $n!$.

## Quando l'ordine non conta (p. 55)

In un negozio ci sono piante di 4 specie, e una cliente ne compra 2 di specie diverse. Chiamiamo le specie $a$, $b$, $c$, $d$. Comprare $a$ e $b$ o comprare $b$ e $a$ è la stessa cosa: conta **quali** piante, non in che ordine. Qui la risposta non è una disposizione: è un **sottoinsieme**.

> [!DEF] 3.27 · Combinazioni semplici
> Sia $A$ un insieme con $\lvert A \rvert = n$ e sia $0 \le k \le n$. Una **combinazione semplice** di ordine $k$ in $A$ è un sottoinsieme $C \subset A$ con $\lvert C \rvert = k$.

**Come si legge.** È la versione «senza ordine» delle disposizioni semplici: gli elementi sono diversi, ma non sono in fila. Con le 4 piante e $k = 2$ le combinazioni si possono elencare, e sono 6:

$$\{a, b\}, \quad \{a, c\}, \quad \{a, d\}, \quad \{b, c\}, \quad \{b, d\}, \quad \{c, d\}.$$

Le disposizioni semplici di ordine 2 sono invece $D_{4,2} = 4 \cdot 3 = 12$: ogni sottoinsieme $\{a, b\}$ compare due volte, come $(a, b)$ e come $(b, a)$. La formula generale per contare le combinazioni nasce proprio da questa osservazione, ed è l'argomento della prossima lezione.

::: prova Con 5 libri diversi, quante disposizioni semplici di ordine 2 ci sono? Quante combinazioni di ordine 2, elencandole?
$D_{5,2} = 5 \cdot 4 = 20$. Le combinazioni sono la metà, 10: ogni coppia di libri compare in due ordini. Con i libri 1–5: {1,2}, {1,3}, {1,4}, {1,5}, {2,3}, {2,4}, {2,5}, {3,4}, {3,5}, {4,5}.
:::

> [!RICORDA]
> - Combinazione semplice = sottoinsieme: conta quali elementi, non l'ordine.
> - Ogni combinazione di $k$ elementi corrisponde a più disposizioni, una per ogni ordine.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $n!$ | «enne fattoriale» | $1 \cdot 2 \cdots n$; e $0! = 1$ | $4! = 24$ |
| $n^k$ | «enne alla kappa» | parole di lunghezza $k$ su $n$ simboli | $2^{10} = 1024$ |
| $D_{n,k}$ | «di enne kappa» | disposizioni semplici: $\frac{n!}{(n-k)!}$ | $D_{12,3} = 1320$ |
| $\frac{n!}{r_1! \cdots r_k!}$ | «enne fattoriale fratto…» | anagrammi con lettere ripetute | ORO: $\frac{3!}{2!} = 3$ |
| $C_{n,k}$ | «ci enne kappa» | combinazioni: sottoinsiemi di $k$ elementi | $C_{4,2} = 6$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 16/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **La domanda 4 del quiz.** In tutti gli appelli 2025–2026 è di calcolo combinatorio. Quasi sempre basta capire se l'ordine conta e se si può ripetere: le cinque risposte sono formule già pronte, e tre o quattro si scartano subito.
2. **Il primo problema.** Spesso chiede anagrammi e ordinamenti con un vincolo: appello del 03/02/2026, anni precedenti.
3. **Le combinazioni**, con la formula, arrivano nella prossima lezione: servono per le domande 4 del 04/02/2025, 06/06/2025, 13/01/2026 e 10/09/2026.

### Una domanda vera, letta insieme

**Appello del 01/07/2026, domanda 4.** Il testo: «Il numero di anagrammi della parola TROTTO è: 1. $6!$; 2. $\frac{6!}{2! \cdot 3!}$; 3. $6! - (2! + 3!)$; 4. $\frac{6!}{2 \cdot 3}$; 5. $6! - 2! \cdot 3!$».

**In pratica chiede:** in quanti modi si rimescolano le 6 lettere T, R, O, T, T, O, contando una volta sola le parole uguali?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: le lettere.** TROTTO ha 6 lettere: T tre volte, O due volte, R una volta.
>
> **Passo 2: la formula.** $\frac{6!}{3! \cdot 2! \cdot 1!} = \frac{720}{12} = 60$. È la risposta 2.
>
> **Passo 3: le altre.** $6!$ conta le T e le O come se fossero diverse. La 3 e la 5 sottraggono invece di dividere. La 4 divide per 2 e per 3, non per $2!$ e $3!$: qui darebbe 120, il doppio di 60.
>
> **Controllo.** Ho elencato con un programma tutte le file diverse delle 6 lettere: sono 60.

### Le altre domande 4 su questa lezione

Tutte le risposte giuste le ho ricontrollate con un programma.

> [!ESAME] Persone sulle sedie: appello del 14/01/2025
> «Quanti modi ci sono per far sedere 8 persone in una fila di 11 sedie?» Risposte: $11!$; $11^3$; $8!$; $\frac{11!}{3!}$; $3^{11}$. Giusta: $\frac{11!}{3!} = D_{11,8}$. La trappola è $11!$: ci sono solo 8 persone, non 11. Nell'altra versione, 4 persone e 12 sedie: $\frac{12!}{8!}$.

> [!ESAME] Le colorazioni: appello del 07/07/2025
> «Si vogliono colorare le caselle di una griglia con 6 righe e 4 colonne avendo 5 colori a disposizione. Ogni colore può essere ripetuto quante volte si vuole.» Risposte: $5^{24}$; $24! \cdot 5$; $\frac{24!}{5!}$; $24^5$; $5^{10}$. Giusta: $5^{24}$, una scelta tra 5 colori per ognuna delle 24 caselle. La trappola è $24^5$, con base ed esponente scambiati; $5^{10}$ somma righe e colonne invece di moltiplicarle.

> [!ESAME] Le palline: appello del 03/02/2026
> «Da una scatola che contiene palline bianche e nere ne vengono estratte, in successione, 12. Quante sono le estrazioni che iniziano con 3 palline bianche?» Risposte: $\frac{12!}{3!}$; $9^2$; $9!$; $\frac{12!}{9!}$; $2^9$. Giusta: $2^9$. Le prime 3 sono fissate, e per le altre 9 ci sono 2 colori ciascuna. La trappola è $9^2$, con base ed esponente scambiati.

> [!ESAME] Le parole: appello del 06/06/2026
> «Quante parole di lunghezza 6 si possono formare con un alfabeto di 15 simboli?» Risposte: $6! \cdot 15!$; $6 \cdot 15$; $\frac{15!}{6!}$; $15^6$; $6^{15}$. Giusta: $15^6$. Nell'altra versione, lunghezza 4 e 16 simboli: $16^4$.

> [!ESAME] La griglia di palline: quiz 2021–2025
> «Quante possibilità ci sono di riempire una griglia di 24 caselle con 40 palline numerate (non più di una pallina per casella)?» Giusta: $\frac{40!}{16!} = D_{40,24}$: ogni casella riceve una pallina diversa, in ordine. La trappola è $\frac{40!}{24!}$, che sarebbe il conto per 16 caselle.

### I problemi

> [!ESAME] Appello del 03/02/2026, problema 1, punti a) e b)
> a) Gli anagrammi di RAPPRESENTAZIONE: 16 lettere, E tre volte, A, N, P, R due volte. Sono $\frac{16!}{3! \cdot (2!)^4}$, la soluzione ufficiale. Non serve fare il conto.
>
> b) Gli ordinamenti di $A = \{A, B, C, D, E, F, 1, 2, 3, 4\}$ con una cifra al primo e all'ultimo posto: 4 scelte per il primo posto, 3 per l'ultimo, poi gli altri 8 elementi in fila, $8!$. In tutto $4 \cdot 3 \cdot 8! = 483\,840$.
>
> c) chiede i sottoinsiemi con almeno 3 lettere: servono le combinazioni della prossima lezione.

> [!ESAME] Problemi 2023/24, problema 1, punto a)
> Con l'alfabeto $Z$ di 16 simboli (le 10 cifre e le lettere da A a F), le sequenze di 6 simboli sono $16^6$; quelle con i simboli tutti diversi sono $D_{16,6} = \frac{16!}{10!}$; quelle con almeno un simbolo ripetuto sono la differenza, $16^6 - \frac{16!}{10!}$. «Almeno un ripetuto» si conta come «tutte meno quelle senza ripetizioni»: è il complementare della lezione D02.

> [!METODO] Le domande di calcolo combinatorio
> 1. Che cosa si sceglie, e da quale insieme? Scrivi $n$ e $k$.
> 2. L'ordine conta? Se scambiando due elementi ottieni un risultato diverso, sì.
> 3. Si può ripetere?
> 4. Scegli la formula: $n^k$, $\frac{n!}{(n-k)!}$, $n!$, gli anagrammi, o le combinazioni.
> 5. Con un vincolo («inizia con», «al primo posto»), metti prima i posti vincolati, poi gli altri. Con «almeno uno», conta il contrario e sottrai.

## Quiz

```quiz
D: Appello del 06/06/2026, domanda 4. Quante parole di lunghezza 4 si possono formare con un alfabeto di 16 simboli?
- $4! \cdot 16!$
- $4 \cdot 16$
- $\frac{16!}{4!}$
- $4^{16}$
+ $16^4$
= Quattro posti, e in ognuno uno dei 16 simboli, anche ripetuto: $16^4$. La risposta più insidiosa è $4^{16}$, con base ed esponente scambiati.

D: Appello del 01/07/2026, domanda 4, altra versione. Il numero di anagrammi della parola STRETTE è:
+ $\frac{7!}{2! \cdot 3!}$
- $7! - (2! \cdot 3!)$
- $7! - (2! + 3!)$
- $7!$
- $\frac{7!}{2 \cdot 3}$
= STRETTE ha 7 lettere, T tre volte ed E due volte: $\frac{7!}{3! \cdot 2!} = 420$. La risposta più insidiosa è $\frac{7!}{2 \cdot 3}$: divide per le ripetizioni invece che per i loro fattoriali.

D: Appello del 14/01/2025, domanda 4, altra versione. Quanti modi ci sono per far sedere 4 persone in una fila di 12 sedie?
+ $\frac{12!}{8!}$
- $12^4$
- $\frac{12!}{4!}$
- $12!$
- $4^{12}$
= Le persone scelgono sedie diverse, in ordine: $D_{12,4} = 12 \cdot 11 \cdot 10 \cdot 9 = \frac{12!}{8!}$. La risposta più insidiosa è $\frac{12!}{4!}$: sotto va $(12 - 4)!$, non $4!$. $12^4$ permetterebbe a due persone la stessa sedia.

D: Appello del 07/07/2025, domanda 4, altra versione. Si colorano le caselle di una griglia con 7 righe e 3 colonne, con 4 colori ripetibili. Quante colorazioni ci sono?
- $\frac{21!}{4!}$
- $21 \cdot 4$
- $21! \cdot 4$
- $21^4$
+ $4^{21}$
= Le caselle sono $7 \cdot 3 = 21$, e ognuna sceglie uno dei 4 colori: $4^{21}$. La risposta più insidiosa è $21^4$, con base ed esponente scambiati.

D: Appello del 03/02/2026, domanda 4, altra versione. Da una scatola di palline bianche e nere se ne estraggono in successione 9. Quante estrazioni iniziano con 2 palline bianche?
- $\frac{9!}{7!}$
- $9!$
+ $2^7$
- $7^2$
- $\frac{9!}{2!}$
= Le prime 2 sono fissate, bianche. Restano 7 estrazioni, ognuna bianca o nera: $2^7$. La risposta più insidiosa è $7^2$, con base ed esponente scambiati.

D: Quanti sono gli ordini di arrivo dei primi 3 classificati in una gara con 10 corridori?
N: 720
= Disposizioni semplici: $D_{10,3} = 10 \cdot 9 \cdot 8 = 720$. Chi pensa $10^3 = 1000$ permette allo stesso corridore di arrivare due volte.

D: Quanti sono gli anagrammi della parola ALMENO? (appello pre-2021, «18 riepilogo»)
+ $720$
- $360$
- $120$
- $6$
- $46\,656$
= Le 6 lettere sono tutte diverse: $6! = 720$. La risposta più insidiosa è 360, che si avrebbe se una lettera fosse ripetuta. $46\,656 = 6^6$ conta le parole con ripetizione.

D: Quiz 2021–2025. Quante possibilità ci sono di riempire una griglia di 28 caselle con 42 palline numerate, non più di una pallina per casella?
- $\binom{42}{28}$
- $42! - 14!$
+ $\frac{42!}{14!}$
- $42! - 28!$
- $\frac{42!}{28!}$
= Ogni casella riceve una pallina diversa, e conta quale casella: disposizione semplice $D_{42,28} = \frac{42!}{(42-28)!} = \frac{42!}{14!}$. La risposta più insidiosa è $\frac{42!}{28!}$: sotto va il numero delle palline che restano fuori, 14.
```

## Esercizi

::: esercizio base Riscaldamento: fattoriali
Calcola: (a) $5!$; (b) $\frac{7!}{5!}$; (c) $\frac{10!}{8! \cdot 2!}$; (d) $0! + 1!$.
::: soluzione
(a) 120. (b) $7 \cdot 6 = 42$. (c) $\frac{10 \cdot 9}{2} = 45$. (d) $1 + 1 = 2$.
:::

::: esercizio base Riscaldamento: quale formula?
Per ognuno, scrivi la formula senza calcolare: (a) i numeri di 5 cifre scritti solo con 1, 2, 3; (b) i modi di mettere in fila 9 libri diversi; (c) i codici di 3 lettere diverse su 26; (d) i modi di rispondere a un quiz di 10 domande con 5 risposte ciascuna.
::: soluzione
(a) $3^5$. (b) $9!$. (c) $D_{26,3} = 26 \cdot 25 \cdot 24$. (d) $5^{10}$: per ognuna delle 10 domande si sceglie una delle 5 risposte.
:::

::: esercizio base Riscaldamento: anagrammi
Quanti sono gli anagrammi di: (a) ROMA; (b) ANNA; (c) MAMMA; (d) BANANA?
::: soluzione
(a) $4! = 24$. (b) $\frac{4!}{2! \cdot 2!} = 6$. (c) M tre volte, A due volte: $\frac{5!}{3! \cdot 2!} = 10$. (d) A tre volte, N due volte: $\frac{6!}{3! \cdot 2!} = 60$.
:::

::: esercizio base Riscaldamento: sigle con e senza ripetizione
Quante sigle di 2 lettere su un alfabeto di 5 lettere, con ripetizione e senza?
::: soluzione
Con ripetizione $5^2 = 25$; senza $D_{5,2} = 20$. La differenza, 5, sono le sigle con due lettere uguali: AA, BB, CC, DD, EE.
:::

::: esercizio medio Esercizio 3.9 del libro: le sei sedie
Sei amici, Alessandro, Bruno, Carlo, Daniele, Enrico e Franco, si siedono su una fila di sei sedie. In quanti modi (a) senza restrizioni; (b) con Carlo e Franco sulle due sedie centrali; (c) con Bruno e Daniele vicini?
::: soluzione
(a) $6! = 720$. (b) Carlo e Franco nelle sedie 3 e 4: 2 modi; gli altri quattro nelle sedie restanti: $4!$. In tutto $2 \cdot 24 = 48$. (c) Le coppie di sedie vicine sono 5 (1–2, 2–3, 3–4, 4–5, 5–6); per ognuna Bruno e Daniele si scambiano in 2 modi; gli altri quattro in $4!$. In tutto $5 \cdot 2 \cdot 24 = 240$.
:::

::: esercizio medio Esercizio 3.8 a) e b) del libro: il guardaroba di Anna
Anna ha 11 magliette, 5 paia di pantaloni, 6 paia di scarpe e 2 borsette. (a) In quanti modi sceglie maglietta, pantaloni, scarpe e borsetta? (b) Ha una scarpiera con 14 scomparti: in quanti modi mette le sue 6 paia di scarpe, un paio per scomparto?
::: soluzione
(a) Scelte successive indipendenti: $11 \cdot 5 \cdot 6 \cdot 2 = 660$. (b) Ogni paio sceglie uno scomparto diverso, e conta quale: $D_{14,6} = \frac{14!}{8!} = 2\,162\,160$.
:::

::: esercizio esame La password con vincolo (appello pre-2021, «19 riepilogo»)
Una password è un anagramma di AACEHHHPRRZ che non inizia per E. Quante sono le password possibili?
::: soluzione
Tutti gli anagrammi: 11 lettere, H tre volte, A e R due volte: $\frac{11!}{3! \cdot 2! \cdot 2!} = 1\,663\,200$. Quelli che iniziano con E: si fissa la E e si rimescolano le altre 10, $\frac{10!}{3! \cdot 2! \cdot 2!} = 151\,200$. Quelli che non iniziano con E sono la differenza: $1\,512\,000$. È la soluzione ufficiale.
:::

::: esercizio esame Sigla e anagrammi (appello pre-2021, «17 riepilogo»)
(a) Una sigla è formata da tre lettere, di un alfabeto di 21, seguite da tre cifre. Le cifre si possono ripetere, le lettere no. Quante sigle ci sono? (b) Quanti sono gli anagrammi di SILLOGISMO?
::: soluzione
(a) Lettere: $D_{21,3} = 21 \cdot 20 \cdot 19 = 7980$; cifre: $10^3$. In tutto $7\,980\,000$. (b) 10 lettere: S, I, L, O due volte ciascuna, G e M una: $\frac{10!}{(2!)^4} = \frac{3\,628\,800}{16} = 226\,800$. Nella soluzione ufficiale il risultato è stampato come 216 800: è un errore di battitura, la formula è giusta.
:::

::: esercizio difficile Almeno un simbolo ripetuto (Problemi 2023/24, problema 1 b)
Con l'alfabeto di 16 simboli, le 10 cifre $X$ e le 6 lettere da A a F, quante sequenze di 6 simboli contengono almeno una cifra? Quante di queste hanno i simboli tutti diversi?
::: soluzione
Si conta il contrario. Le sequenze senza cifre usano solo le 6 lettere: $6^6$. Quindi quelle con almeno una cifra sono $16^6 - 6^6$. Con i simboli tutti diversi: in tutto $D_{16,6} = \frac{16!}{10!}$, e quelle senza cifre sono gli ordinamenti delle 6 lettere, $6!$. Risposta: $\frac{16!}{10!} - 6!$. È la soluzione ufficiale.
:::

## Domande di ripasso

::: domanda Che cosa dice il metodo delle scelte successive?
Se una cosa si costruisce con più scelte una dopo l'altra, il numero totale è il prodotto dei numeri di possibilità. Vale anche quando le possibilità dipendono dalle scelte precedenti.
:::

::: domanda Quante sono le parole di lunghezza $k$ su un alfabeto di $n$ simboli?
$n^k$.
:::

::: domanda Quanto vale $0!$ e perché?
1, per convenzione: così le formule funzionano anche nei casi limite.
:::

::: domanda Che differenza c'è tra disposizioni semplici e con ripetizione?
Nelle semplici gli elementi sono tutti diversi, e sono $\frac{n!}{(n-k)!}$; in quelle con ripetizione possono ripetersi, e sono $n^k$.
:::

::: domanda Quanti sono gli anagrammi di una parola con lettere ripetute?
La lunghezza fattoriale, diviso il fattoriale di quante volte compare ogni lettera.
:::

::: domanda Che cos'è una combinazione semplice di ordine $k$?
Un sottoinsieme di $k$ elementi: conta quali elementi, non l'ordine.
:::

::: domanda Perché $D_{4,2} = 12$ ma le combinazioni di ordine 2 di 4 elementi sono 6?
Perché ogni sottoinsieme di 2 elementi corrisponde a due disposizioni, una per ogni ordine.
:::

## Glossario

```glossario
Metodo delle scelte successive | Il numero di risultati di più scelte in fila è il prodotto dei numeri di possibilità.
Alfabeto | Un insieme finito di simboli.
Parola | Una sequenza di simboli di un alfabeto, anche senza senso.
Disposizione con ripetizione | Sequenza di k elementi di un insieme di n, anche ripetuti: sono n^k.
Ordinamento | Un modo di mettere in fila tutti gli elementi di un insieme: sono n!.
Fattoriale | n! = 1 · 2 · … · n, con 0! = 1.
Disposizione semplice | Sequenza di k elementi diversi di un insieme di n: sono n!/(n−k)!.
Anagramma | Un rimescolamento delle lettere di una parola.
Combinazione semplice | Un sottoinsieme di k elementi: l'ordine non conta.
```

## Checklist

```checklist
- So usare il metodo delle scelte successive, anche con scelte che dipendono dalle precedenti.
- So contare le parole su un alfabeto, con la base e l'esponente al posto giusto.
- So calcolare fattoriali e semplificare frazioni come 11!/3!.
- So riconoscere una disposizione semplice e scriverla come n!/(n−k)!.
- So contare gli anagrammi di una parola con lettere ripetute.
- So distinguere quando l'ordine conta e quando no.
- So gestire un vincolo («inizia con», «al primo posto») mettendo prima i posti vincolati.
- So contare «almeno uno» come totale meno nessuno.
- So rispondere alle domande 4 degli appelli 2025–2026 su questi argomenti.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 3 «Combinatorica», pp. 48–55 (Proposizione 3.16, Nota 3.17, definizioni 3.18, 3.19, 3.21, 3.23, 3.25, 3.27, proposizioni 3.20, 3.22, 3.24, 3.26, esempi delle pp. 49–55); esercizi 3.8 e 3.9 (pp. 64–65). Le definizioni e gli enunciati nei riquadri riprendono il libro. Segnalato nel testo il risultato dell'esempio delle targhe a p. 50.
- Diario delle lezioni del canale B 2026/27 (Mori), lezione del 16/10/2026: «Alfabeti, parole ed anagrammi. Disposizioni semplici e con ripetizione: formule ed esempi. Combinazioni semplici: enunciato del problema».
- Quiz di Matematica Discreta, domanda 4: appelli del 14/01/2025, 07/07/2025, 03/02/2026, 06/06/2026, 01/07/2026, e quiz 2021–2025; problemi: appello del 03/02/2026 (problema 1), Problemi 2023/24 (problema 1), «17 riepilogo» e «19 riepilogo» degli anni precedenti al 2021, con le soluzioni ufficiali.
- V. Bocchino, *Rigurgiti di Unicorno*, appunti di Matematica Discreta scritti da uno studente sul libro di Mori (licenza CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): un riepilogo già pronto, non ufficiale.
- Tutti i conteggi, degli esempi, degli esercizi e delle domande d'esame, li ho ricontrollati con un programma.
