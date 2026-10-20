---
corso: MDAG
modulo: MD
lezione: D06
titolo: Insiemi finiti, principio dei piccioni e inclusione-esclusione
data: 2026-10-14
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D06
descrizione: >-
  Appunti della lezione D06 di Matematica Discreta (MDAG, parte 1, canali A, B e C): insiemi equipollenti e
  cardinalità, insiemi finiti e infiniti, funzioni tra insiemi finiti con lo stesso numero di elementi, il principio
  dei piccioni, insiemi numerabili, il principio di inclusione-esclusione per due e per tre insiemi, come contare i
  multipli di un numero con la parte intera e il minimo comune multiplo, con il problema d'esame del 01/07/2026.
lede: >-
  Il capitolo 3 di Mori comincia a contare. Prima una domanda che sembra facile: che cosa vuol dire che due insiemi
  hanno lo stesso numero di elementi? Poi due strumenti che si usano di continuo: il principio dei piccioni e la
  formula per contare gli elementi di un'unione senza contare due volte quelli in comune.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 3, pp. 39–48, esercizi pp. 64–65
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 3 «Combinatorica», pp. 39–48, ed esercizi
  3.1–3.6 e 3.10; diario delle lezioni del canale B 2025/26; problema 1 dell'appello di Matematica Discreta del
  01/07/2026
appunti_html: appunti/MDAG/D06_insiemi_finiti_inclusione_esclusione.html
genera_html: true
---

## In breve

- Due insiemi hanno lo **stesso numero di elementi** quando si possono accoppiare uno a uno, cioè quando c'è una funzione biettiva tra loro. È la definizione di **cardinalità**, e funziona anche per gli insiemi infiniti.
- Un insieme è **finito** quando ogni funzione iniettiva da sé in sé è anche suriettiva. Tra due insiemi finiti con lo stesso numero di elementi, per una funzione iniettiva, suriettiva e biettiva vogliono dire la stessa cosa.
- **Principio dei piccioni**: se ci sono più piccioni che gabbie, almeno una gabbia ha due piccioni o più. Detto con le funzioni: da un insieme più grande a uno più piccolo non ci sono funzioni iniettive.
- Alcuni insiemi infiniti si possono mettere in fila come una lista: interi e frazioni sì, i numeri reali no.
- **Inclusione-esclusione con due insiemi**: gli elementi dell'unione sono quelli del primo più quelli del secondo, meno quelli in comune, che altrimenti si contano due volte.
- **Con tre insiemi**: si sommano i tre, si tolgono le tre intersezioni a due, si aggiunge l'intersezione di tutti e tre.
- I multipli di 3 tra 1 e 20 sono 6: la **parte intera** di 20 diviso 3. I numeri divisibili per 4 e per 6 sono i multipli del **minimo comune multiplo**, 12, non di 24.
- All'esame il primo problema dell'appello del 01/07/2026 chiedeva proprio questi conti, in quattro versioni.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di mercoledì 14/10/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho trovati sul Moodle del canale B: li ho ricostruiti dall'ordine del libro e dal diario dell'anno scorso, in cui la sesta lezione era «principio della gabbia dei piccioni, mappe iniettive, suriettive e biettive tra insiemi finiti, il principio di inclusione/esclusione per due o tre insiemi, ordinamenti». Gli «ordinamenti», cioè i modi di mettere in fila gli elementi, sono nella sezione dopo del libro, «il metodo delle scelte successive» (p. 48): li tratto nella prossima lezione. Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> Nel libro ho trovato due sviste, segnalate nel testo: a p. 47 il risultato dell'esempio sui film, e a p. 48 un'intersezione scritta al posto di un'unione.

## Contare senza numeri (pp. 39–40)

Per sapere se in una sala ci sono tanti uomini quante donne non serve contarli: basta formare le coppie uomo-donna e vedere se qualcuno resta solo. Due insiemi hanno lo stesso numero di elementi quando si possono accoppiare così, uno a uno.

Anche contare è un accoppiamento: si mette l'etichetta «1» su un elemento, «2» su un altro, e così via, senza saltarne e senza ripeterne. Un accoppiamento in cui nessuno resta solo e nessuno ha due compagni è una **funzione biettiva**, della lezione D04.

> [!DEF] 3.1 · Insiemi equipollenti, cardinalità
> Due insiemi $A$ e $B$ sono **equipollenti** se esiste una funzione biettiva $f \colon A \to B$. In questo caso hanno la stessa **cardinalità**, e si scrive $\lvert A \rvert = \lvert B \rvert$.

**Come si legge.** «Equipollenti» è una parola vecchia per «ugualmente potenti»: due insiemi lo sono quando si possono accoppiare uno a uno. La cardinalità $\lvert A \rvert$, che hai visto nella lezione D01 come «numero degli elementi», ora ha una definizione precisa che non ha bisogno di contare.

Le biezioni si compongono, come nella lezione D05. Quindi se un primo insieme si accoppia con un secondo, e il secondo con un terzo, anche il primo si accoppia con il terzo.

### Le sorprese degli insiemi infiniti

Con questa definizione gli insiemi infiniti si comportano in modo strano.

- **I naturali e i pari.** La funzione che manda $n$ in $2n$ accoppia ogni naturale con un numero pari: 0 con 0, 1 con 2, 2 con 4, e così via. Ogni pari ha il suo compagno, $m$ con $m/2$. Quindi i naturali e i numeri pari sono **lo stesso numero**, anche se i pari sono solo una parte dei naturali. Il libro ricorda che l'osservazione risale a Galileo Galilei.
- **Le coppie di naturali.** Anche $\N \times \N$, l'insieme delle coppie della lezione D03, ha tanti elementi quanti $\N$. Basta mettere le coppie in fila: prima quella con somma 0, poi quelle con somma 1, poi quelle con somma 2, e così via. Ogni coppia prima o poi arriva, e riceve il suo numero.

| Posto nella fila | 0 | 1 | 2 | 3 | 4 | 5 | 6 | … |
|---|---|---|---|---|---|---|---|---|
| Coppia | $(0,0)$ | $(0,1)$ | $(1,0)$ | $(0,2)$ | $(1,1)$ | $(2,0)$ | $(0,3)$ | … |

::: prova Trova una funzione biettiva tra $\{a, b, c\}$ e $\{1, 2, 3\}$. Ce n'è una tra $\{a, b, c\}$ e $\{1, 2\}$?
Per esempio $a \mapsto 1$, $b \mapsto 2$, $c \mapsto 3$. Tra $\{a, b, c\}$ e $\{1, 2\}$ no: due lettere dovrebbero andare nello stesso numero, e la funzione non sarebbe iniettiva.
:::

> [!RICORDA]
> - Stessa cardinalità vuol dire: c'è una funzione biettiva tra i due insiemi.
> - Con gli insiemi infiniti, una parte può avere tanti elementi quanto il tutto.

## Più piccolo o uguale (pp. 40–41)

Se ogni uomo trova una compagna diversa ma restano donne sole, le donne non sono meno degli uomini. Un accoppiamento in cui ogni elemento del primo insieme ha un compagno diverso nel secondo è una **funzione iniettiva**.

> [!DEF] 3.2 · Cardinalità più piccola o uguale
> Se esiste una funzione iniettiva $A \to B$, si scrive $\lvert A \rvert \le \lvert B \rvert$.

**Come si legge.** «$A$ entra in $B$ senza sovrapposizioni». La Nota 3.3 del libro aggiunge che, per insiemi non vuoti, è lo stesso che chiedere una funzione suriettiva da $B$ ad $A$: è l'esercizio 3.1, svolto in fondo.

Due esempi del libro:

- se $A \subset B$, la funzione che manda ogni elemento in sé stesso è iniettiva, quindi $\lvert A \rvert \le \lvert B \rvert$;
- ogni insieme non vuoto ha al massimo tanti elementi quanti il suo insieme delle parti, della lezione D01. Basta mandare ogni elemento $x$ nel sottoinsieme $\{x\}$: elementi diversi danno sottoinsiemi diversi.

Il Teorema 3.4 raccoglie due fatti che il libro accetta senza dimostrazione, perché la dimostrazione va oltre il corso: due insiemi si possono sempre confrontare, e se $\lvert A \rvert \le \lvert B \rvert$ e $\lvert B \rvert \le \lvert A \rvert$ allora $\lvert A \rvert = \lvert B \rvert$. Il secondo è il **teorema di Schröder-Bernstein**.

::: prova Perché $\lvert \{1, 2\} \rvert \le \lvert \{1, 2, 3, 4\} \rvert$?
Perché $\{1, 2\}$ è contenuto in $\{1, 2, 3, 4\}$: la funzione che manda 1 in 1 e 2 in 2 è iniettiva.
:::

> [!RICORDA]
> - Funzione iniettiva da $A$ a $B$: $A$ ha al massimo tanti elementi quanti $B$.
> - Un sottoinsieme ha al massimo tanti elementi quanti l'insieme che lo contiene.

## Insiemi finiti e infiniti (pp. 41–44)

Prendi una funzione iniettiva da un insieme in sé stesso: elementi diversi vanno in elementi diversi. Se 5 persone si risiedono su 5 sedie senza che due prendano la stessa, tutte le sedie restano occupate. Sui naturali invece $n \mapsto n + 1$ è iniettiva ma lascia fuori lo 0. Il libro usa proprio questa differenza per definire finito e infinito.

> [!DEF] 3.5 · Insieme finito e infinito
> Un insieme $A$ è **infinito** se esiste una funzione $f \colon A \to A$ iniettiva ma non suriettiva. È **finito** se non è infinito, cioè se ogni funzione iniettiva $f \colon A \to A$ è una biezione.

**Come si legge.** Un insieme è infinito quando si può spostare ogni elemento su un elemento diverso e restare comunque con un posto libero, come $n \mapsto n + 1$ lascia libero lo 0. Finito vuol dire che questo non riesce mai.

### Tra insiemi finiti, le tre proprietà coincidono

Nell'esempio delle 5 sedie, «nessuna sedia con due persone» (iniettiva) ha già dato «nessuna sedia vuota» (suriettiva). Vale anche il contrario, e per ogni insieme finito.

> [!PROP] 3.6
> Sia $A$ un insieme finito e $f \colon A \to A$ una funzione. Sono equivalenti: $f$ è iniettiva; $f$ è suriettiva; $f$ è biettiva.

**Come si legge.** Per una funzione da un insieme finito in sé stesso basta controllare una delle due proprietà: l'altra segue.

> [!DIM] della Proposizione 3.6 (p. 41)
> Se $f$ è iniettiva, è suriettiva per la definizione di insieme finito. Se $f$ è suriettiva, ogni controimmagine $f^{-1}(a)$ è non vuota: si sceglie un elemento $g(a)$ in ognuna. Controimmagini di elementi diversi sono disgiunte, quindi $g$ è iniettiva, e allora anche suriettiva. Ma allora ogni elemento di $A$ è il $g(a)$ di qualche $a$, quindi ogni controimmagine contiene esattamente un elemento: $f$ è iniettiva. Infine, biettiva vuol dire iniettiva e suriettiva.

### I numeri da 1 a n

Il libro chiama $I_n$ l'insieme dei numeri da 1 a $n$: $I_n = \{1, 2, \dots, n\}$. Sono i modelli di tutti gli insiemi finiti. Il Teorema 3.7 dice che:

1. ogni $I_n$ è finito;
2. se $m \neq n$, $I_m$ e $I_n$ non sono equipollenti;
3. se $m \le n$, allora $\lvert I_m \rvert \le \lvert I_n \rvert$;
4. ogni insieme finito non vuoto è equipollente a uno e un solo $I_n$;
5. ogni insieme infinito contiene una copia dei naturali: $\lvert \N \rvert \le \lvert X \rvert$.

Quindi si può scrivere $\lvert I_n \rvert = n$, e per ogni insieme finito $A$ c'è un solo numero $n$ con $\lvert A \rvert = n$: il suo numero di elementi, quello che conti sulle dita.

> [!DIM] del Teorema 3.7, in breve (pp. 41–43)
> 1. Per induzione su $n$, come nella lezione D02. Data $f \colon I_{n+1} \to I_{n+1}$ iniettiva, se $f(n+1) = n+1$ la restrizione a $I_n$ è iniettiva in $I_n$ e quindi suriettiva. Altrimenti si compone $f$ con lo scambio $s$ di $f(n+1)$ e $n+1$, e ci si riporta al primo caso.
> 2. Per assurdo, con lo stesso scambio, si scende al più piccolo $m$ per cui succederebbe e si trova una contraddizione.
> 3. La funzione $k \mapsto k$ da $I_m$ a $I_n$ è iniettiva.
> 4. Si tolgono gli elementi uno alla volta: $x_1$, poi $x_2$, e così via. Se non si finisse mai, la funzione $x_1 \mapsto x_2$, $x_2 \mapsto x_3$, … sarebbe iniettiva ma non suriettiva. Quindi si finisce dopo $n$ passi, e $i \mapsto x_i$ è una biezione da $I_n$ ad $A$.
> 5. Si prende un elemento fuori dall'immagine di una $f$ iniettiva non suriettiva, e si applica $f$ di continuo: si ottengono infiniti elementi tutti diversi.

La Nota 3.8 estende la Proposizione 3.6: tra due insiemi finiti **diversi** con lo **stesso numero** di elementi, una funzione è iniettiva se e solo se è suriettiva, se e solo se è biettiva.

::: prova Una funzione da $\{1, 2, 3, 4\}$ a $\{a, b, c, d\}$ manda 1 in $b$, 2 in $d$, 3 in $a$, 4 in $c$. È biettiva?
Sì. I due insiemi hanno 4 elementi, e la funzione è iniettiva: le quattro immagini sono diverse. Per la Nota 3.8 è anche suriettiva, quindi biettiva.
:::

> [!RICORDA]
> - Finito: ogni funzione iniettiva da sé in sé è biettiva.
> - Tra insiemi finiti con lo stesso numero di elementi: iniettiva, suriettiva e biettiva vogliono dire la stessa cosa.

## Il principio dei piccioni (p. 44)

Con 10 piccioni e 9 gabbie, comunque si sistemino i piccioni almeno una gabbia ne contiene due. L'idea è immediata, ma dimostra l'esistenza di coincidenze che sarebbe impossibile verificare caso per caso, come nell'esempio dei capelli più sotto.

> [!TEOREMA] Nota 3.9 · Principio dei piccioni
> Se $A$ e $B$ sono insiemi finiti con $\lvert A \rvert > \lvert B \rvert$, non esiste nessuna funzione iniettiva $A \to B$. Detto con i piccioni: se ci sono più piccioni che gabbie, almeno una gabbia contiene più di un piccione.

**Come si legge.** $P$ è l'insieme dei piccioni, $G$ quello delle gabbie. Mettere ogni piccione in una gabbia è una funzione $f \colon P \to G$. I piccioni nella gabbia $g$ sono la controimmagine $f^{-1}(g)$. Con più piccioni che gabbie la funzione non può essere iniettiva, quindi qualche controimmagine ha più di un elemento. In altri testi i piccioni sono calzini e le gabbie sono cassetti: è lo stesso principio.

> [!ESEMPIO] · Tre usi del principio
> - **Il compleanno.** In un gruppo di 13 persone, due sono nate nello stesso mese. I piccioni sono le 13 persone, le gabbie i 12 mesi.
> - **I capelli.** L'esempio del libro: un corpo umano ha circa 5 milioni di peli. In una città con molti più di 5 milioni di abitanti, anche senza contare chi non ne ha, due persone hanno esattamente lo stesso numero di peli. I piccioni sono gli abitanti, le gabbie i numeri possibili di peli.
> - **I calzini.** In un cassetto ci sono calzini neri e bianchi, mescolati al buio. Per essere sicuro di avere due calzini dello stesso colore ne bastano 3: i colori sono 2 gabbie, e 3 calzini sono più di 2.

> [!TRAPPOLA] Il principio dice che c'è, non dice dove
> Il principio garantisce che **esiste** una gabbia con due piccioni, ma non dice **quale**. Nel gruppo di 13 persone non sai in che mese sono nate le due, solo che ci sono.

::: prova Quanti numeri devi scegliere tra 1 e 100 per essere sicuro che due abbiano la stessa ultima cifra?
11. Le ultime cifre possibili sono 10, da 0 a 9: sono le gabbie. Con 11 numeri, cioè 11 piccioni, due finiscono nella stessa gabbia. Con 10 non basta: 1, 2, …, 10 hanno ultime cifre tutte diverse.
:::

> [!RICORDA]
> - Più piccioni che gabbie: almeno una gabbia con due piccioni o più.
> - Il trucco negli esercizi è decidere chi sono i piccioni e chi le gabbie.

## Insiemi che si mettono in fila (pp. 44–45)

Gli insiemi infiniti non sono tutti uguali. Alcuni si possono scrivere come una lista, un elemento dopo l'altro, in modo che ogni elemento prima o poi compaia.

> [!DEF] 3.10 · Insieme numerabile
> Un insieme $X$ è **numerabile** se è equipollente a $\N$.

**Come si legge.** Numerabile vuol dire «si può mettere in fila»: $X = \{a_1, a_2, a_3, \dots\}$, dove $a_1$ è il primo della fila, $a_2$ il secondo, e così via.

- **Gli interi** sono numerabili: la fila $0, 1, -1, 2, -2, 3, -3, \dots$ li contiene tutti. Non importa che non siano in ordine di grandezza.
- **Le frazioni** sono numerabili: si mettono in fila le frazioni positive secondo la somma di numeratore e denominatore, saltando quelle non ridotte, e poi si alternano i positivi con i negativi.
- **I numeri reali no.** Verso il 1880 Georg Cantor ha dimostrato che $\R$ non si può mettere in fila. Ha dimostrato anche che l'insieme delle parti ha sempre **più** elementi dell'insieme di partenza. Il libro si limita a citarlo.

All'esame questa parte non è mai stata chiesta: serve per capire che «infinito» non è una sola cosa.

::: prova Scrivi i primi 7 elementi della fila degli interi. In che posto compare $-3$?
$0, 1, -1, 2, -2, 3, -3$: il $-3$ è il settimo.
:::

> [!RICORDA]
> - Numerabile vuol dire che si può mettere in fila come i naturali.
> - Interi e frazioni sono numerabili, i reali no.

## Contare un'unione: due insiemi (pp. 45–46)

In una classe 18 studenti giocano a calcio e 12 a pallavolo. Quanti fanno almeno uno dei due sport? Non 30: chi gioca a tutti e due è contato una volta tra i calciatori e una volta tra i pallavolisti. Se quelli che fanno tutti e due gli sport sono 5, la risposta è $18 + 12 - 5 = 25$. Si **includono** tutti, poi si **escludono** quelli contati due volte.

> [!PROP] 3.11 · Principio di inclusione-esclusione per 2 insiemi
> Se $A$ e $B$ sono insiemi finiti, allora $\lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert - \lvert A \cap B \rvert$.

**Come si legge.** Gli elementi dell'unione sono quelli di $A$, più quelli di $B$, meno quelli comuni, che la somma aveva contato due volte. Se $A$ e $B$ sono disgiunti, l'intersezione è vuota e si sommano soltanto. È la formula della lezione D02, ora con il suo nome.

> [!ESEMPIO] · Gli esami delle matricole (p. 46)
> **Situazione:** 152 matricole hanno superato matematica, 144 fisica, 89 tutti e due. Quante ne hanno superato almeno uno?
>
> **Passo 1: gli insiemi.** $M$ = chi ha superato matematica, $F$ = chi ha superato fisica. «Almeno uno» è l'unione.
>
> **Passo 2: la formula.** $\lvert M \cup F \rvert = 152 + 144 - 89 = 207$.

### Usare la formula al contrario

La Nota 3.12 riscrive la formula così: $\lvert A \cup B \rvert + \lvert A \cap B \rvert = \lvert A \rvert + \lvert B \rvert$. Ci sono quattro numeri, e conoscendone tre si trova il quarto.

> [!ESEMPIO] · Il ristorante (p. 46)
> **Situazione:** a un tavolo di 14 persone sono stati ordinati 8 primi e 11 secondi, e ognuno ha ordinato qualcosa. Quanti hanno preso sia il primo sia il secondo?
>
> **Passo 1: gli insiemi.** $P$ = chi ha preso un primo, $S$ = chi ha preso un secondo. Ognuno ha ordinato qualcosa, quindi l'unione sono tutte le 14 persone.
>
> **Passo 2: la formula.** $14 + \lvert P \cap S \rvert = 8 + 11$, quindi $\lvert P \cap S \rvert = 5$.

### Contare i «né… né…»

Spesso si chiede quanti elementi **non** stanno né in $A$ né in $B$. Per De Morgan, della lezione D02, sono il complementare dell'unione: si toglie l'unione dal totale.

> [!ESEMPIO] · Né per 3 né per 5 (p. 46)
> **Situazione:** quanti numeri tra 1 e 180 non sono divisibili né per 3 né per 5?
>
> **Passo 1: gli insiemi.** $D_3$ = i multipli di 3 tra 1 e 180, $D_5$ = i multipli di 5. Ne cerchiamo il complementare dell'unione.
>
> **Passo 2: i multipli.** In ogni gruppo di 3 numeri di fila ce n'è uno divisibile per 3, quindi $\lvert D_3 \rvert = 180 / 3 = 60$; allo stesso modo $\lvert D_5 \rvert = 36$. Un numero è divisibile per 3 e per 5 se e solo se è divisibile per 15: $\lvert D_3 \cap D_5 \rvert = 12$.
>
> **Passo 3: la formula.** L'unione ha $60 + 36 - 12 = 84$ elementi. Quelli che restano fuori sono $180 - 84 = 96$. L'ho ricontrollato con un programma.

::: prova In un gruppo di 30 amici, 20 hanno un gatto, 14 un cane e 3 non hanno animali. Quanti hanno sia un gatto sia un cane?
Chi ha almeno un animale sono $30 - 3 = 27$. Allora $27 + \lvert G \cap C \rvert = 20 + 14$, quindi $\lvert G \cap C \rvert = 7$.
:::

> [!RICORDA]
> - Unione di due insiemi: somma meno intersezione.
> - Quattro numeri nella formula: da tre si ricava il quarto.
> - «Né… né…»: totale meno unione.

## Contare i multipli (pp. 46–48)

Quasi tutti gli esercizi d'esame su questa formula contano numeri divisibili per qualcosa. Servono due strumenti, che il libro usa senza dar loro un nome.

**Quanti multipli di k ci sono tra 1 e n.** Tra 1 e 20 i multipli di 3 sono 3, 6, 9, 12, 15, 18: sono 6. Il conto: 20 diviso 3 fa 6 con il resto di 2, e si tiene il 6. È la **parte intera** di $20/3$, cioè il numero senza la parte dopo la virgola, e si scrive $\lfloor 20/3 \rfloor = 6$. In generale:

$$\text{multipli di } k \text{ tra 1 e } n = \left\lfloor \frac nk \right\rfloor.$$

**Divisibili per a e per b.** Un numero divisibile per 4 e per 6 non è per forza divisibile per 24: 12 lo è per 4 e per 6, ma non per 24. Il numero giusto è il **minimo comune multiplo**, il più piccolo numero che è multiplo di tutti e due: $\operatorname{mcm}(4, 6) = 12$. Quindi i numeri divisibili per 4 e per 6 sono i multipli di 12. Quando $a$ e $b$ non hanno divisori in comune, come 3 e 5, il minimo comune multiplo è il prodotto: 15.

> [!METODO] Contare i numeri divisibili per qualcosa
> 1. Scrivi gli insiemi: $D_a$ = multipli di $a$ tra 1 e $n$.
> 2. Traduci la domanda: «per $a$ o per $b$» è un'unione; «per $a$ e per $b$» è un'intersezione, cioè i multipli di $\operatorname{mcm}(a, b)$; «per $a$ ma non per $b$» è $\lvert D_a \rvert - \lvert D_a \cap D_b \rvert$; «né per $a$ né per $b$» è il totale meno l'unione.
> 3. Conta ogni insieme con la parte intera di $n$ diviso il numero.
> 4. Metti tutto nella formula di inclusione-esclusione.

> [!TRAPPOLA] Il prodotto non è sempre il minimo comune multiplo
> Tra 1 e 100 i numeri divisibili per 4 e per 6 sono i multipli di 12, cioè 8. Con i multipli di 24 ne troveresti 4, e sbaglieresti. Il prodotto va bene solo se i due numeri non hanno divisori comuni, come 3 e 5 o 5 e 11.

::: prova Quanti numeri tra 1 e 1000 sono divisibili per 3 ma non per 5?
Multipli di 3: $\lfloor 1000/3 \rfloor = 333$. Multipli di 15: $\lfloor 1000/15 \rfloor = 66$. Restano $333 - 66 = 267$.
:::

> [!RICORDA]
> - Multipli di $k$ tra 1 e $n$: la parte intera di $n/k$.
> - «Divisibile per $a$ e per $b$»: multiplo del minimo comune multiplo.

## Contare un'unione: tre insiemi (pp. 46–48)

Con tre insiemi il ragionamento è lo stesso, ma le correzioni sono due. Pensa ai tre cerchi sovrapposti dei diagrammi di Venn della lezione D02.

1. Sommi gli elementi dei tre insiemi. Chi sta in due insiemi è contato due volte.
2. Togli le tre intersezioni a due. Ora chi sta in due insiemi è contato una volta. Ma chi sta in **tutti e tre** era contato 3 volte, ed è stato tolto 3 volte: ora non è contato più.
3. Aggiungi l'intersezione dei tre, e ogni elemento è contato esattamente una volta.

> [!PROP] 3.13 · Principio di inclusione-esclusione per 3 insiemi
> Se $A$, $B$, $C$ sono insiemi finiti, allora
> $$\lvert A \cup B \cup C \rvert = \lvert A \rvert + \lvert B \rvert + \lvert C \rvert - \lvert A \cap B \rvert - \lvert A \cap C \rvert - \lvert B \cap C \rvert + \lvert A \cap B \cap C \rvert.$$

**Come si legge.** Più i singoli, meno le coppie, più il terzetto. I segni si alternano. La dimostrazione del libro è proprio il conto in tre passi qui sopra. La Nota 3.14 ne dà un'altra: si vede $A \cup B$ come un solo insieme e si usa due volte la formula per due insiemi (esercizio 3.2).

> [!ESEMPIO] · Divisibili per 5, 6 o 11 (p. 48)
> **Situazione:** quanti numeri tra 1 e 660 sono divisibili per almeno uno tra 5, 6 e 11?
>
> **Passo 1: i singoli.** $\lvert D_5 \rvert = 132$, $\lvert D_6 \rvert = 110$, $\lvert D_{11} \rvert = 60$.
>
> **Passo 2: le coppie.** 5, 6 e 11 non hanno divisori comuni a due a due, quindi il minimo comune multiplo è il prodotto: $\lvert D_{30} \rvert = 22$, $\lvert D_{55} \rvert = 12$, $\lvert D_{66} \rvert = 10$.
>
> **Passo 3: il terzetto.** $\lvert D_{330} \rvert = 2$.
>
> **Passo 4: la formula.** $132 + 110 + 60 - 22 - 12 - 10 + 2 = 260$.
>
> Nel libro il risultato è scritto come $\lvert D_5 \cap D_6 \cap D_{11} \rvert$: è una svista, perché quello che si calcola è l'unione $\lvert D_5 \cup D_6 \cup D_{11} \rvert$. L'intersezione ha solo 2 elementi.

> [!NOTA] L'esempio dei film a p. 47
> Il libro conta gli spettatori di tre film con 129 biglietti, 109, 76 e 55 spettatori per film, e 52, 28 e 44 spettatori per le coppie di film. Con la formula viene $129 = 240 - 124 + x$, quindi gli spettatori dei tre film sono $x = 13$, non 23 come nel libro. In più, con questi dati chi ha visto solo il secondo film sarebbe $76 - 39 - 31 - 13 = -7$: i numeri dell'esempio non possono essere tutti veri. Il metodo resta giusto.

### Insiemi che non si toccano

Con più di tre insiemi la formula diventa lunga: con 4 insiemi ha 15 addendi dopo l'uguale. C'è un caso in cui è cortissima.

> [!PROP] 3.15 · Unione di insiemi disgiunti
> Se $A_1, \dots, A_n$ sono insiemi finiti a due a due disgiunti, cioè nessuno ha elementi in comune con un altro, allora $\lvert A_1 \cup \dots \cup A_n \rvert = \lvert A_1 \rvert + \dots + \lvert A_n \rvert$.

**Come si legge.** Se nessuno è contato due volte, basta sommare. È il caso delle partizioni della lezione D02: le parti di una partizione sommate danno tutto l'insieme.

::: prova Quanti numeri tra 1 e 30 non sono divisibili né per 2, né per 3, né per 5?
Singoli: 15, 10, 6. Coppie: multipli di 6, 10, 15, cioè 5, 3, 2. Terzetto: multipli di 30, cioè 1. Unione: $15 + 10 + 6 - 5 - 3 - 2 + 1 = 22$. Restano $30 - 22 = 8$: sono 1, 7, 11, 13, 17, 19, 23, 29.
:::

> [!RICORDA]
> - Tre insiemi: più i singoli, meno le coppie, più il terzetto.
> - Insiemi disgiunti: basta sommare.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\lvert A \rvert$ | «cardinalità di A» | il numero degli elementi di $A$ | $\lvert \{a, b\} \rvert = 2$ |
| $\lvert A \rvert \le \lvert B \rvert$ | «A ha cardinalità minore o uguale» | c'è una funzione iniettiva da $A$ a $B$ | |
| $I_n$ | «i con n» | l'insieme $\{1, 2, \dots, n\}$ | $I_3 = \{1, 2, 3\}$ |
| $D_k$ | «di con k» | i multipli di $k$ in un insieme fissato | |
| $\lfloor x \rfloor$ | «parte intera di x» | $x$ senza la parte dopo la virgola, per $x$ positivo | $\lfloor 20/3 \rfloor = 6$ |
| $\operatorname{mcm}(a, b)$ | «minimo comune multiplo» | il più piccolo multiplo comune di $a$ e $b$ | $\operatorname{mcm}(4, 6) = 12$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 14/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26 dicono così.

- **10 domande a risposta multipla**, ognuna con 5 risposte e una sola giusta. Una risposta giusta vale 1 punto; una sbagliata o vuota vale 0.
- **2 problemi** a risposta aperta, divisi in più domande con il punteggio scritto accanto.
- **Sbarramento.** Con meno di 6 punti nel quiz la prova non è superata, e i problemi non vengono corretti.
- **Sufficienza:** almeno 18 punti in tutto. **Durata:** 2 ore.
- **Materiale ammesso:** libro di testo e appunti del corso, e una calcolatrice non programmabile.

Gli appelli 2026/27 sono martedì 19/01/2027 e mercoledì 03/02/2027 alle 14:00. Dettagli nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa serve di questa lezione**

1. **Contare i divisibili.** Il problema 1 dell'appello del 01/07/2026 era tutto qui: multipli, «ma non per», coprimi. Vale 7 punti su 11.
2. **Inclusione-esclusione con tre insiemi.** Serve per i numeri coprimi con un numero che ha tre fattori primi diversi, come 900 o 750.
3. **Il principio dei piccioni e le funzioni tra insiemi finiti** tornano nelle permutazioni e nei gruppi: una funzione iniettiva da un insieme finito in sé stesso è già biettiva.

### Una domanda vera, letta insieme

**Appello del 01/07/2026, problema 1, versione A.** Il testo: «a) (4 punti) Quanti sono i numeri tra 1 e 1000 divisibili per 3? Quanti quelli divisibili per 6 ma non per 45? b) (3 punti) Quanti sono i numeri tra 1 e 500 che sono coprimi con 1000?».

**In pratica chiede:** tre conteggi di multipli. «Coprimo con 1000» vuol dire che il numero non ha divisori in comune con 1000, a parte 1.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: i divisibili per 3.** Sono $\lfloor 1000/3 \rfloor = 333$.
>
> **Passo 2: per 6 ma non per 45.** I multipli di 6 sono $\lfloor 1000/6 \rfloor = 166$. Quelli divisibili anche per 45 sono i multipli di $\operatorname{mcm}(6, 45) = 90$, non di $6 \cdot 45 = 270$: sono $\lfloor 1000/90 \rfloor = 11$. Restano $166 - 11 = 155$.
>
> **Passo 3: coprimi con 1000.** $1000 = 2^3 \cdot 5^3$: un numero è coprimo con 1000 esattamente quando non è divisibile né per 2 né per 5. Tra 1 e 500 ci sono 250 multipli di 2, 100 multipli di 5 e 50 multipli di 10. L'unione ha $250 + 100 - 50 = 300$ elementi, quindi i coprimi sono $500 - 300 = 200$.
>
> Sono i risultati delle soluzioni ufficiali. La parte c) del problema contava i sottoinsiemi di un insieme di 25 primi: $2^{25} - 1$, con il conto della lezione D01, e una seconda domanda che userà le combinazioni della prossima lezione.

> [!ESAME] Le altre versioni dello stesso appello
> Tutte ricontrollate con un programma.
> - **Versione B.** Tra 1 e 1200: divisibili per 4, 300; per 8 ma non per 60, $150 - 10 = 140$, con $\operatorname{mcm}(8, 60) = 120$. Coprimi con $900 = 2^2 \cdot 3^2 \cdot 5^2$ tra 1 e 600: con tre insiemi, $600 - (300 + 200 + 120) + (100 + 60 + 40) - 20 = 160$.
> - **Versione C.** Tra 1 e 900: divisibili per 5, 180; per 10 ma non per 35, $90 - 12 = 78$, con $\operatorname{mcm}(10, 35) = 70$. Coprimi con $750 = 2 \cdot 3 \cdot 5^3$ tra 1 e 450: $450 - (225 + 150 + 90) + (75 + 45 + 30) - 15 = 120$.
> - **Versione D.** Tra 1 e 1500: divisibili per 6, 250; per 12 ma non per 50, $125 - 5 = 120$, con $\operatorname{mcm}(12, 50) = 300$. Coprimi con $1500 = 2^2 \cdot 3 \cdot 5^3$ tra 1 e 750: $750 - (375 + 250 + 150) + (125 + 75 + 50) - 25 = 200$.

> [!ESAME] Che cosa scrivere sul foglio di riepilogo
> All'esame si possono portare libro e appunti. Conviene avere in una pagina le due formule di inclusione-esclusione e la parte intera per contare i multipli. Poi la regola del minimo comune multiplo, con l'esempio di 6 e 45, e la traduzione di «o», «e», «ma non», «né… né…».

## Quiz

```quiz
D: Quanti numeri tra 1 e 100 sono divisibili per 4 e per 6?
+ 8
- 4
- 16
- 41
- 12
= Divisibili per 4 e per 6 vuol dire multipli di $\operatorname{mcm}(4, 6) = 12$: $\lfloor 100/12 \rfloor = 8$. La risposta più insidiosa è 4, che si ottiene con i multipli di 24, il prodotto. 41 sarebbe chi è divisibile per 4 **o** per 6.

D: In una classe 18 studenti studiano inglese, 12 spagnolo e 7 tutte e due le lingue. Quanti studiano almeno una delle due?
N: 23
= $18 + 12 - 7 = 23$: chi studia tutte e due le lingue va tolto una volta, perché la somma lo conta due volte.

D: Quanti numeri tra 1 e 60 non sono divisibili né per 2 né per 3?
+ 20
- 10
- 40
- 30
- 50
= Multipli di 2: 30; di 3: 20; di 6: 10. L'unione ha $30 + 20 - 10 = 40$ elementi, e fuori restano $60 - 40 = 20$. La risposta più insidiosa è 40: è l'unione, cioè chi è divisibile per almeno uno, non chi non lo è.

D: Un gruppo ha 25 persone. Quale affermazione è sicuramente vera?
+ Almeno 3 persone sono nate nello stesso mese
- Almeno 2 persone sono nate lo stesso giorno dell'anno
- Almeno 4 persone sono nate nello stesso mese
- Ogni mese ha almeno 2 compleanni
- Almeno 3 persone sono nate in gennaio
= Con 12 mesi e 25 persone: se ogni mese ne avesse al massimo 2, le persone sarebbero al massimo 24. Quindi un mese ne ha almeno 3. La risposta più insidiosa è «almeno 4»: 25 persone si possono distribuire 3, 2, 2, …, 2. I giorni dell'anno sono 365, più delle persone.

D: Siano $A$ e $B$ insiemi finiti con $\lvert A \rvert = \lvert B \rvert = 7$, e $f \colon A \to B$ iniettiva. Allora:
+ $f$ è biettiva
- $f$ può non essere suriettiva
- $f$ è suriettiva solo se $A = B$
- non esiste nessuna funzione iniettiva tra $A$ e $B$
- $f$ è costante
= Tra insiemi finiti con lo stesso numero di elementi, iniettiva vuol dire anche suriettiva, e quindi biettiva (Nota 3.8). La risposta più insidiosa è «può non essere suriettiva»: succede solo con gli insiemi infiniti, come $n \mapsto n + 1$ sui naturali.

D: Se $\lvert A \rvert = 10$, $\lvert B \rvert = 8$, $\lvert C \rvert = 6$, le tre intersezioni a due hanno 3, 2 e 2 elementi e l'intersezione dei tre ne ha 1, quanti elementi ha $A \cup B \cup C$?
N: 18
= $10 + 8 + 6 - 3 - 2 - 2 + 1 = 18$. Chi dimentica di aggiungere l'intersezione dei tre trova 17.

D: Quanti numeri tra 1 e 1000 sono divisibili per 6 ma non per 45?
+ 155
- 162
- 166
- 144
- 11
= Multipli di 6: 166. Quelli divisibili anche per 45 sono i multipli di $\operatorname{mcm}(6, 45) = 90$, cioè 11. Restano $166 - 11 = 155$. La risposta più insidiosa è 162, che si ottiene togliendo i multipli di 270, il prodotto. È la versione A dell'appello del 01/07/2026.

D: Quale di questi insiemi **non** è numerabile?
+ $\R$
- $\Z$
- $\Q$
- $\N \times \N$
- i numeri pari
= Cantor ha dimostrato che i reali non si possono mettere in fila. La risposta più insidiosa è $\Q$: le frazioni sembrano «di più» degli interi, ma si possono elencare tutte.
```

## Esercizi

::: esercizio base Riscaldamento: parte intera
Quanti sono i multipli di 7 tra 1 e 100? E quelli di 7 tra 1 e 700? E quelli di 13 tra 1 e 50?
::: soluzione
$\lfloor 100/7 \rfloor = 14$, perché $7 \cdot 14 = 98$. $\lfloor 700/7 \rfloor = 100$. $\lfloor 50/13 \rfloor = 3$: sono 13, 26, 39.
:::

::: esercizio base Riscaldamento: minimo comune multiplo
Per quale numero è divisibile un numero divisibile per: (a) 2 e 3; (b) 4 e 10; (c) 6 e 9; (d) 5 e 25?
::: soluzione
(a) 6. (b) 20, non 40. (c) 18, non 54. (d) 25: se è divisibile per 25, lo è già per 5.
:::

::: esercizio base Riscaldamento: piccioni e gabbie
In ognuna di queste frasi, chi sono i piccioni e chi le gabbie? (a) In un condominio di 400 persone, due festeggiano il compleanno lo stesso giorno. (b) Scelti 5 numeri da 1 a 8, due hanno somma 9.
::: soluzione
(a) Piccioni: le 400 persone; gabbie: i 366 giorni possibili. (b) Gabbie: le 4 coppie $\{1, 8\}$, $\{2, 7\}$, $\{3, 6\}$, $\{4, 5\}$, che hanno tutte somma 9; piccioni: i 5 numeri scelti. Due finiscono nella stessa coppia, e quella coppia ha somma 9.
:::

::: esercizio base Riscaldamento: la formula al contrario
$\lvert A \rvert = 12$, $\lvert B \rvert = 9$, $\lvert A \cup B \rvert = 16$. Quanto vale $\lvert A \cap B \rvert$? E $\lvert A \setminus B \rvert$?
::: soluzione
$16 + \lvert A \cap B \rvert = 12 + 9$, quindi $\lvert A \cap B \rvert = 5$. Gli elementi di $A$ fuori da $B$ sono $12 - 5 = 7$.
:::

::: esercizio medio Esercizio 3.10 c) del libro
A un corso di ballo sono iscritti 11 uomini e 9 donne, con due lezioni a settimana. La scorsa settimana ogni studente era presente ad almeno una lezione: il lunedì c'erano 8 donne e 7 uomini, il giovedì 7 donne e 9 uomini. Quanti dei 20 studenti erano presenti a tutte e due le lezioni?
::: soluzione
Il lunedì c'erano 15 persone, il giovedì 16. Ognuno era presente almeno una volta, quindi l'unione ha 20 elementi: $20 + \lvert L \cap G \rvert = 15 + 16$, e $\lvert L \cap G \rvert = 11$.
:::

::: esercizio medio Esercizio 3.4 del libro
Quanti sono i numeri interi (a) da 1 a 1680 divisibili per almeno uno tra 2, 6 e 7? (b) da 1 a 2160 non divisibili né per 5, né per 9, né per 12?
::: soluzione
(a) Chi è divisibile per 6 lo è già per 2, quindi basta contare i divisibili per 2 o per 7: $840 + 240 - 120 = 960$, dove 120 sono i multipli di 14. Con la formula a tre insiemi viene lo stesso: $840 + 280 + 240 - 280 - 120 - 40 + 40 = 960$.

(b) Singoli: $\lvert D_5 \rvert = 432$, $\lvert D_9 \rvert = 240$, $\lvert D_{12} \rvert = 180$. Coppie: $\operatorname{mcm}(5, 9) = 45$, 48 multipli; $\operatorname{mcm}(5, 12) = 60$, 36 multipli; $\operatorname{mcm}(9, 12) = 36$, non 108, quindi 60 multipli. Terzetto: $\operatorname{mcm}(5, 9, 12) = 180$, 12 multipli. Unione: $432 + 240 + 180 - 48 - 36 - 60 + 12 = 720$. Fuori: $2160 - 720 = 1440$. Ricontrollati tutti e due con un programma.
:::

::: esercizio esame Esercizio 3.5 del libro: le monete
Un collezionista ha 25 monete d'argento, 170 monete europee e 415 monete rotonde, e ogni moneta ha almeno una di queste caratteristiche. Le monete d'argento rotonde sono 22, le europee rotonde 152, e le monete europee d'argento sono tutte rotonde. Quante monete ci sono nella collezione?
::: soluzione
Con $A$ = argento, $E$ = europee, $R$ = rotonde: tutte le monete stanno in $A \cup E \cup R$. Non conosci $\lvert A \cap E \rvert$, ma le europee d'argento sono tutte rotonde, quindi $A \cap E = A \cap E \cap R$. Nella formula i due pezzi si cancellano:

$\lvert A \cup E \cup R \rvert = 25 + 170 + 415 - \lvert A \cap E \rvert - 22 - 152 + \lvert A \cap E \cap R \rvert = 436$.

Le monete sono 436. Il trucco è accorgersi che due termini sconosciuti sono uguali.
:::

::: esercizio esame Esercizio 3.6 del libro: la festa
A una festa c'erano 20 persone bionde, 18 con i capelli neri, 15 con gli occhi azzurri e 12 con gli occhi verdi, e ognuno aveva almeno una di queste caratteristiche. Tra i biondi, 12 avevano gli occhi azzurri e 4 verdi; tra chi aveva i capelli neri, 1 aveva gli occhi azzurri e 7 verdi. Quante persone c'erano?
::: soluzione
Ci sono 4 insiemi, ma molte intersezioni sono vuote: nessuno è biondo e con i capelli neri, nessuno ha gli occhi azzurri e verdi. Le intersezioni non vuote sono le 4 coppie «capelli e occhi», e tutte quelle di tre o quattro insiemi sono vuote. Quindi:

$20 + 18 + 15 + 12 - 12 - 4 - 1 - 7 = 41$.

C'erano 41 persone.
:::

::: esercizio difficile Esercizio 3.1 del libro
Siano $A$ e $B$ insiemi non vuoti. Dimostra che (a) se esiste una funzione iniettiva $A \to B$, esiste una funzione suriettiva $B \to A$; (b) se esiste una funzione suriettiva $A \to B$, esiste una funzione iniettiva $B \to A$.
::: soluzione
(a) Sia $f \colon A \to B$ iniettiva, e scegli un elemento qualsiasi $a_0$ di $A$, che esiste perché $A$ non è vuoto. Definisci $g \colon B \to A$ così: se $b$ è nell'immagine di $f$, $b = f(a)$ per un solo $a$, perché $f$ è iniettiva, e poni $g(b) = a$; se $b$ non è nell'immagine, poni $g(b) = a_0$. Ogni $a$ di $A$ è $g(f(a))$, quindi $g$ è suriettiva.

(b) Sia $f \colon A \to B$ suriettiva. Per ogni $b$ la controimmagine $f^{-1}(b)$ non è vuota: scegli un suo elemento e chiamalo $g(b)$. Se $b \neq b'$, le controimmagini sono disgiunte, quindi $g(b) \neq g(b')$: $g$ è iniettiva. È lo stesso ragionamento della dimostrazione della Proposizione 3.6.
:::

## Domande di ripasso

::: domanda Che cosa vuol dire che due insiemi hanno la stessa cardinalità?
Che esiste una funzione biettiva tra loro: si possono accoppiare uno a uno.
:::

::: domanda Quando un insieme è finito, secondo il libro?
Quando ogni funzione iniettiva da lui in sé stesso è anche suriettiva.
:::

::: domanda Che cosa dice il principio dei piccioni?
Che se ci sono più piccioni che gabbie, almeno una gabbia contiene più di un piccione. Con le funzioni: da un insieme finito più grande a uno più piccolo non ci sono funzioni iniettive.
:::

::: domanda Perché i naturali e i numeri pari hanno la stessa cardinalità?
Perché la funzione che manda $n$ in $2n$ è una biezione tra loro.
:::

::: domanda Qual è la formula di inclusione-esclusione per due insiemi? E per tre?
Due: somma meno intersezione. Tre: più i singoli, meno le tre intersezioni a due, più l'intersezione dei tre.
:::

::: domanda Come si contano i multipli di $k$ tra 1 e $n$?
Con la parte intera di $n/k$.
:::

::: domanda I numeri divisibili per 6 e per 45 sono i multipli di quale numero?
Di 90, il minimo comune multiplo, non di 270.
:::

## Glossario

```glossario
Equipollenti | Due insiemi tra cui esiste una funzione biettiva.
Cardinalità | Il «numero di elementi» di un insieme, definito con le biezioni; si scrive |A|.
Insieme finito | Un insieme in cui ogni funzione iniettiva da sé in sé è biettiva.
Insieme infinito | Un insieme con una funzione iniettiva ma non suriettiva da sé in sé.
I_n | L'insieme {1, 2, …, n}, modello degli insiemi con n elementi.
Principio dei piccioni | Più piccioni che gabbie: almeno una gabbia ha più di un piccione.
Numerabile | Equipollente a N: si può mettere in fila come una lista.
Inclusione-esclusione | La formula che conta gli elementi di un'unione togliendo quelli contati più volte.
Parte intera | Un numero senza la parte dopo la virgola: la parte intera di 20/3 è 6.
Minimo comune multiplo | Il più piccolo numero multiplo di due numeri dati.
Coprimi | Due numeri senza divisori comuni a parte 1.
```

## Checklist

```checklist
- So spiegare che cosa vuol dire che due insiemi hanno la stessa cardinalità.
- So dare un esempio di insieme infinito equipollente a una sua parte.
- So che tra insiemi finiti con lo stesso numero di elementi iniettiva, suriettiva e biettiva coincidono.
- So usare il principio dei piccioni, scegliendo chi sono i piccioni e chi le gabbie.
- So quali insiemi sono numerabili tra N, Z, Q e R.
- So la formula di inclusione-esclusione per due e per tre insiemi.
- So usarla al contrario, per trovare un'intersezione.
- So contare i multipli di un numero con la parte intera.
- So che «divisibile per a e per b» vuol dire multiplo del minimo comune multiplo.
- So risolvere il problema 1 dell'appello del 01/07/2026 in tutte le versioni.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 3 «Combinatorica», pp. 39–48 (definizioni 3.1, 3.2, 3.5, 3.10, note 3.3, 3.8, 3.9, 3.12, 3.14, proposizioni 3.6, 3.11, 3.13, 3.15, teoremi 3.4 e 3.7, esempi delle pp. 40, 44, 46–48); esercizi 3.1, 3.4, 3.5, 3.6 e 3.10 (pp. 64–65). Le definizioni e gli enunciati nei riquadri riprendono il libro. Segnalati nel testo il risultato dell'esempio a p. 47 e l'intersezione al posto dell'unione a p. 48.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori): lezione 6 (principio della gabbia dei piccioni, funzioni tra insiemi finiti, inclusione-esclusione per due o tre insiemi, ordinamenti). Gli argomenti della lezione del 14/10/2026 non erano pubblicati quando ho scritto questi appunti.
- Appello di Matematica Discreta del 01/07/2026, problema 1, versioni A–D, con le soluzioni ufficiali della versione A.
- V. Bocchino, *Rigurgiti di Unicorno*, appunti di Matematica Discreta scritti da uno studente sul libro di Mori (licenza CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): un riepilogo già pronto, non ufficiale.
- Tutti i conteggi, degli esempi, degli esercizi e delle quattro versioni d'esame, li ho ricontrollati con un programma.
