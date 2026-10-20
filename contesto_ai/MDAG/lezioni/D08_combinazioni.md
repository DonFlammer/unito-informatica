---
corso: MDAG
modulo: MD
lezione: D08
titolo: Combinazioni semplici e con ripetizione
data: 2026-10-19
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D08
descrizione: >-
  Appunti della lezione D08 di Matematica Discreta (MDAG, parte 1, canali A, B e C): la formula delle combinazioni
  semplici, il coefficiente binomiale, la simmetria tra scegliere k elementi e lasciarne n − k, i problemi con più
  scelte da moltiplicare o da sommare, le combinazioni con ripetizione con il metodo delle caselle e dei
  separatori, la tabella delle quattro formule, con le domande 4 del quiz e i problemi d'esame sulle combinazioni.
lede: >-
  Scegliere 3 birre da 9 per una degustazione, 5 numeri da 90, 5 fiori da 4 varietà: quando l'ordine non conta si
  contano sottoinsiemi, e se si può ripetere si contano «scelte con ripetizione». Due formule, e un modo per non
  confonderle mai.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 3, pp. 55–58 e 62–64, esercizi pp. 64–66
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 3 «Combinatorica», pp. 55–58 e 62–64, ed
  esercizi 3.8, 3.10, 3.11, 3.12; diario delle lezioni del canale B 2025/26; quiz e problemi degli appelli di
  Matematica Discreta 2025–2026
appunti_html: appunti/MDAG/D08_combinazioni.html
genera_html: true
---

## In breve

- Una **combinazione semplice** è un sottoinsieme: si scelgono alcuni elementi di un insieme, e conta **quali**, non l'ordine.
- Ogni combinazione corrisponde a $k!$ disposizioni, una per ogni ordine: per questo le combinazioni sono le disposizioni divise per $k!$.
- Il numero si scrive con il **coefficiente binomiale**, «n su k»: le degustazioni di 3 birre scelte tra 9 sono $\binom{9}{3} = 84$.
- Scegliere $k$ elementi equivale a scegliere gli $n - k$ da lasciare fuori: i due numeri sono uguali.
- Con più scelte **indipendenti** i numeri si **moltiplicano**; con casi **alternativi** si **sommano**.
- Una **combinazione con ripetizione** sceglie $k$ elementi tra $n$ tipi, potendo prendere più volte lo stesso tipo: 5 fiori da 4 varietà, 24 cioccolatini da 8 gusti. Si contano con le caselle e i separatori.
- All'esame la **domanda 4** del quiz chiede spesso combinazioni, e i problemi chiedono mazzi di fiori, kit e sottoinsiemi con un vincolo.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di lunedì 19/10/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dall'ordine del libro e dal diario dell'anno scorso, in cui l'ottava lezione era «Combinazioni semplici e con ripetizioni. Esempi.». Nel libro sono le pp. 55–58 per le combinazioni semplici e le pp. 62–64 per quelle con ripetizione. Dalle pp. 58–59 prendo solo la definizione del coefficiente binomiale e il suo legame con le combinazioni, che servono per scrivere le formule. Le proprietà dei coefficienti binomiali, la formula di Stiefel, il triangolo di Tartaglia e il binomio di Newton (pp. 58–61) erano nelle due lezioni successive del diario: li tratto nella prossima. Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> Nel libro ho trovato tre sviste a p. 57, segnalate nel testo: nel calcolo di $C_{100,4}$, nell'esempio della scuola di ballo e in quello della gelateria.

## Dalle disposizioni alle combinazioni (pp. 55–56)

Nella lezione D07 le 4 piante del negozio davano 12 disposizioni di 2 elementi, ma solo 6 combinazioni. Ogni coppia di piante compariva due volte, come $(a, b)$ e come $(b, a)$. Con 3 elementi ogni sottoinsieme $\{a, b, c\}$ comparirebbe $3! = 6$ volte, una per ogni ordine. La formula nasce da qui.

```grafico
titolo: Le 12 disposizioni di 2 piante su 4 raggruppate per sottoinsieme: ogni riquadro è una combinazione, e contiene le $2! = 2$ disposizioni che la producono. Quindi le combinazioni sono $12 / 2 = 6$.
x: 0 12
y: 0 3.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.2 0.3 1.9 0.3 1.9 2.4 0.2 2.4 | blu
testo: 1.05 1.75 | blu | "ab"
testo: 1.05 1 | blu | "ba"
testo: 1.05 2.85 | blu | "{a, b}"
poligono: 2.2 0.3 3.9 0.3 3.9 2.4 2.2 2.4 | ambra
testo: 3.05 1.75 | ambra | "ac"
testo: 3.05 1 | ambra | "ca"
testo: 3.05 2.85 | ambra | "{a, c}"
poligono: 4.2 0.3 5.9 0.3 5.9 2.4 4.2 2.4 | verde
testo: 5.05 1.75 | verde | "ad"
testo: 5.05 1 | verde | "da"
testo: 5.05 2.85 | verde | "{a, d}"
poligono: 6.2 0.3 7.9 0.3 7.9 2.4 6.2 2.4 | rosa
testo: 7.05 1.75 | rosa | "bc"
testo: 7.05 1 | rosa | "cb"
testo: 7.05 2.85 | rosa | "{b, c}"
poligono: 8.2 0.3 9.9 0.3 9.9 2.4 8.2 2.4 | blu
testo: 9.05 1.75 | blu | "bd"
testo: 9.05 1 | blu | "db"
testo: 9.05 2.85 | blu | "{b, d}"
poligono: 10.2 0.3 11.9 0.3 11.9 2.4 10.2 2.4 | ambra
testo: 11.05 1.75 | ambra | "cd"
testo: 11.05 1 | ambra | "dc"
testo: 11.05 2.85 | ambra | "{c, d}"
```

> [!PROP] 3.28 · Numero delle combinazioni semplici
> Sia $A$ un insieme finito con $\lvert A \rvert = n$ e sia $k$ un intero tra 1 e $n$. Il numero delle combinazioni di ordine $k$ in $A$, cioè dei sottoinsiemi $C \subset A$ con $\lvert C \rvert = k$, è
> $$C_{n,k} = \frac{1}{k!}\, D_{n,k} = \frac{n \cdot (n-1) \cdots (n-k+1)}{k!}.$$

**Come si legge.** Si contano prima le scelte **in ordine**, le disposizioni $D_{n,k}$ della lezione D07. Poi si divide per $k!$: ogni sottoinsieme è stato contato una volta per ogni modo di mettere in fila i suoi $k$ elementi. La dimostrazione del libro è proprio questo ragionamento.

> [!ESEMPIO] · Il fioraio (p. 56)
> **Situazione:** un fioraio vende piante di 14 specie diverse; una cliente ne vuole 3 di specie diverse. Quante scelte ha?
>
> **Passo 1: l'ordine conta?** No, conta solo quali piante. Ripetizioni? No, specie diverse.
>
> **Passo 2: la formula.** $C_{14,3} = \frac{14 \cdot 13 \cdot 12}{3!} = \frac{2184}{6} = 364$.

Il libro calcola anche le estrazioni del SuperEnalotto, 6 numeri su 90: $C_{90,6} = \frac{90 \cdot 89 \cdot 88 \cdot 87 \cdot 86 \cdot 85}{6!} = 622\,614\,630$.

::: prova Quante strette di mano ci sono in un gruppo di 8 persone, se ognuno stringe la mano a tutti gli altri una volta?
Ogni stretta è una coppia di persone, senza ordine: $C_{8,2} = \frac{8 \cdot 7}{2} = 28$.
:::

> [!RICORDA]
> - Combinazioni = disposizioni diviso $k!$.
> - Si usano quando l'ordine non conta e non si ripete.

## Il coefficiente binomiale (pp. 56–58)

La formula della Proposizione 3.28 ha un problema. Con $k = 0$ non ha senso, ma la risposta c'è, ed è 1, perché l'insieme vuoto è l'unico sottoinsieme con 0 elementi (Nota 3.29). Per avere una formula che vale sempre, si moltiplica sopra e sotto per $(n - k)!$: il numeratore diventa $n!$.

> [!DEF] 3.31 · Coefficiente binomiale
> Siano $k$ ed $n$ interi con $0 \le k \le n$. Il **coefficiente binomiale** è il numero
> $$\binom{n}{k} = \frac{n!}{k!\,(n-k)!}.$$

**Come si legge.** Si legge «$n$ su $k$». Con la convenzione $0! = 1$ della lezione D07, vale anche per $k = 0$ e $k = n$: tutti e due danno 1. La Proposizione 3.32 del libro dice che è proprio il numero delle combinazioni: $C_{n,k} = \binom{n}{k}$.

> [!ESEMPIO] · Tre modi di scrivere la stessa risposta
> **Situazione:** le degustazioni di 3 birre scelte tra 9.
>
> **Passo 1.** Con la Proposizione 3.28: $\frac{9 \cdot 8 \cdot 7}{3!} = \frac{504}{6} = 84$.
>
> **Passo 2.** Con il coefficiente binomiale: $\binom{9}{3} = \frac{9!}{3! \cdot 6!}$. È la forma delle risposte del quiz d'esame, che non chiede di fare il conto.
>
> **Passo 3.** Come controllo, $\frac{9!}{6!} = 504$ sono le disposizioni, e dividendo per $3! = 6$ si torna a 84.

Alcuni valori da riconoscere al volo: $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{1} = n$, $\binom{n}{2} = \frac{n(n-1)}{2}$.

::: prova Calcola $\binom{6}{2}$, $\binom{7}{3}$ e $\binom{5}{5}$.
$\binom{6}{2} = \frac{6 \cdot 5}{2} = 15$. $\binom{7}{3} = \frac{7 \cdot 6 \cdot 5}{6} = 35$. $\binom{5}{5} = 1$: c'è un solo modo di prendere tutto.
:::

> [!RICORDA]
> - $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$ conta i sottoinsiemi di $k$ elementi.
> - $\binom{n}{0} = \binom{n}{n} = 1$ e $\binom{n}{1} = n$.

## Scegliere o lasciare fuori (pp. 56–57)

Scegliere 3 persone da invitare tra 10 è la stessa cosa che scegliere le 7 da non invitare: ogni scelta dei 3 decide i 7 esclusi, e viceversa. I due numeri devono quindi essere uguali.

> [!PROP] 3.30 · Simmetria
> Siano $n$ e $k$ interi con $0 \le k \le n$. Allora $C_{n,k} = C_{n,n-k}$, cioè $\binom{n}{k} = \binom{n}{n-k}$.

**Come si legge.** La dimostrazione del libro usa il complementare della lezione D02: mandare ogni sottoinsieme nel suo complementare è una funzione biettiva, inversa di sé stessa (lezione D05), che scambia i sottoinsiemi di $k$ elementi con quelli di $n - k$. Con la formula basta scriverla: $\binom{n}{n-k} = \frac{n!}{(n-k)!\,k!}$, e nel denominatore $k!$ e $(n-k)!$ si sono solo scambiati di posto.

È utile quando $k$ è vicino a $n$. Il libro calcola $C_{100,96} = C_{100,4} = \frac{100 \cdot 99 \cdot 98 \cdot 97}{4!} = 3\,921\,225$. Nel libro il numeratore è stampato come $100 \cdot 99 \cdot 87 \cdot 97$: è una svista, il risultato è giusto con 98.

> [!ESAME] Le caselle colorate: appello del 13/01/2026
> «Le 10 caselle di una riga devono essere colorate di rosso o di blu in modo che ci siano esattamente 3 caselle rosse. Quanti sono i modi di farlo?» Risposte: $\frac{10!}{7!}$; $10! - 7!$; $\binom{10}{7}$; $\binom{7}{3}$; $3!$. Giusta: $\binom{10}{7}$. Una colorazione è decisa da **quali** 3 caselle sono rosse, cioè da un sottoinsieme di 3 caselle su 10: $\binom{10}{3}$. La risposta è scritta come $\binom{10}{7}$, le 7 caselle blu: per la simmetria è lo stesso numero, 120. La trappola è $\frac{10!}{7!}$, che conta le caselle rosse in ordine.

::: prova Quanto vale $\binom{50}{48}$? Fallo senza calcolare fattoriali grandi.
$\binom{50}{48} = \binom{50}{2} = \frac{50 \cdot 49}{2} = 1225$.
:::

> [!RICORDA]
> - $\binom{n}{k} = \binom{n}{n-k}$: scegliere chi entra è come scegliere chi resta fuori.
> - All'esame la stessa risposta può essere scritta nelle due forme.

## Più scelte insieme: moltiplicare o sommare (pp. 57–58)

Molti problemi non sono una sola combinazione, ma più scelte. La domanda da farsi è: le scelte si fanno **tutte**, una dopo l'altra, oppure **una sola** tra più casi possibili?

- Scelte **indipendenti**, da fare tutte: si **moltiplicano**, con il metodo delle scelte successive della lezione D07.
- Casi **alternativi**, che si escludono: si **sommano**, perché sono insiemi disgiunti (Proposizione 3.15, lezione D06).

> [!ESEMPIO] · La formazione di calcio (p. 57)
> **Situazione:** una rosa di 3 portieri, 9 difensori, 7 centrocampisti e 4 attaccanti. Si gioca con 1 portiere, 4 difensori, 4 centrocampisti e 2 attaccanti. Quante formazioni?
>
> **Passo 1: le scelte.** Quattro scelte indipendenti, una per ruolo: $\binom{3}{1} = 3$, $\binom{9}{4} = 126$, $\binom{7}{4} = 35$, $\binom{4}{2} = 6$.
>
> **Passo 2: si moltiplica.** $3 \cdot 126 \cdot 35 \cdot 6 = 79\,380$.

> [!ESEMPIO] · La gelateria (pp. 57–58)
> **Situazione:** una gelateria ha 14 gusti; un cono ha da 1 a 4 gusti diversi. Quanti coni diversi?
>
> **Passo 1: i casi.** Un cono ha 1, 2, 3 **oppure** 4 gusti: sono casi alternativi.
>
> **Passo 2: si somma.** $\binom{14}{1} + \binom{14}{2} + \binom{14}{3} + \binom{14}{4} = 14 + 91 + 364 + 1001 = 1470$.

> [!NOTA] Due sviste nella p. 57
> - **La scuola di ballo.** Si scelgono 5 ballerini tra 9 e 3 ballerine tra 11. Il libro scrive $C_{9,5} = 84$, ma $\binom{9}{5} = \binom{9}{4} = \frac{9 \cdot 8 \cdot 7 \cdot 6}{4!} = 126$: 84 è $\binom{9}{3}$. Il totale giusto è $126 \cdot 165 = 20\,790$, non 13 860.
> - **La gelateria.** Il testo dice 16 gusti, ma i conti usano 14; poi scrive $C_{14,1} = 4$ invece di 14, e il totale 1460 invece di 1470. Con 16 gusti verrebbe $16 + 120 + 560 + 1820 = 2516$. Il metodo resta giusto.

> [!ESAME] Pari e dispari: appello del 04/02/2025
> «Dall'insieme $\{1, 2, 3, \dots, 15, 16\}$ vogliamo scegliere 2 numeri pari e 3 numeri dispari. Quante scelte possibili ci sono?» Risposte: $\binom{16}{5}$; $16^5$; $\binom{8}{2} \cdot \binom{8}{3}$; $\binom{16}{2} \cdot \binom{16}{3}$; $8^2 \cdot 8^3$. Giusta: $\binom{8}{2} \cdot \binom{8}{3} = 28 \cdot 56 = 1568$. I pari sono 8 e i dispari 8: due scelte indipendenti. La trappola è $\binom{16}{2} \cdot \binom{16}{3}$, che sceglie i pari tra tutti i 16 numeri.

::: prova Appello del 06/06/2025: quanti sono i modi di scegliere tre numeri divisibili per 3 e due numeri non divisibili per 3, compresi tra 1 e 15?
Tra 1 e 15 i multipli di 3 sono 5 e gli altri 10. Due scelte indipendenti: $\binom{5}{3} \cdot \binom{10}{2} = 10 \cdot 45 = 450$. È la risposta giusta del quiz.
:::

> [!RICORDA]
> - Scelte da fare tutte: si moltiplica. Casi alternativi: si somma.
> - Prima di scegliere, conta quanti elementi ha ogni gruppo.

## Combinazioni con ripetizione (pp. 62–64)

Un negozio vende fiori di 4 varietà, rose, tulipani, margherite e orchidee, in quantità illimitata. Quanti mazzi diversi di 5 fiori si possono comporre? In un mazzo l'ordine non conta, ma la stessa varietà può comparire più volte: 3 rose e 2 tulipani è un mazzo. Non è un sottoinsieme, perché gli elementi si ripetono.

> [!DEF] 3.37 · Combinazione con ripetizione
> Sia $A$ un insieme finito con $\lvert A \rvert = n$ e sia $k$ un intero non negativo. Una **combinazione con ripetizione** di ordine $k$ in $A$ è una scelta di $k$ elementi di $A$ in cui ciascun elemento può essere scelto più volte.

**Come si legge.** È una «lista della spesa» senza ordine: conta solo **quante volte** si prende ogni elemento. La Nota 3.38 osserva che qui $k$ può anche superare $n$: 24 cioccolatini da 8 gusti, 10 lanci di una moneta con 2 facce.

### Caselle e separatori

Il libro conta i monomi di grado 9 nelle variabili $w$, $x$, $y$, $z$, come $w\,x^2\,y^4\,z^2$: ogni monomio è una scelta di 9 variabili con ripetizione, senza ordine. Il trucco è scrivere le variabili in ordine alfabetico in 9 caselle e segnare dove si cambia variabile. Per separare 4 variabili servono 3 separatori. Aggiungendo 3 caselle per i separatori, si hanno 12 caselle in fila, e un monomio corrisponde esattamente alla scelta delle 3 caselle-separatore.

```grafico
titolo: Il monomio $w\,x^2\,y^4\,z^2$ come fila di 12 caselle: 9 per le variabili e 3, con il punto, per i separatori. Scegliere le 3 caselle-separatore tra le 12 decide il monomio: $\binom{12}{3} = 220$.
x: 0 12.4
y: 0 2.4
assi: no
griglia: no
proporzioni: libere
poligono: 0.2 0.6 1.15 0.6 1.15 1.6 0.2 1.6 | blu
testo: 0.67 1.1 | blu | "w"
poligono: 1.2 0.6 2.15 0.6 2.15 1.6 1.2 1.6 | accento
punto: 1.67 1.1 | accento
poligono: 2.2 0.6 3.15 0.6 3.15 1.6 2.2 1.6 | ambra
testo: 2.67 1.1 | ambra | "x"
poligono: 3.2 0.6 4.15 0.6 4.15 1.6 3.2 1.6 | ambra
testo: 3.67 1.1 | ambra | "x"
poligono: 4.2 0.6 5.15 0.6 5.15 1.6 4.2 1.6 | accento
punto: 4.67 1.1 | accento
poligono: 5.2 0.6 6.15 0.6 6.15 1.6 5.2 1.6 | verde
testo: 5.67 1.1 | verde | "y"
poligono: 6.2 0.6 7.15 0.6 7.15 1.6 6.2 1.6 | verde
testo: 6.67 1.1 | verde | "y"
poligono: 7.2 0.6 8.15 0.6 8.15 1.6 7.2 1.6 | verde
testo: 7.67 1.1 | verde | "y"
poligono: 8.2 0.6 9.15 0.6 9.15 1.6 8.2 1.6 | verde
testo: 8.67 1.1 | verde | "y"
poligono: 9.2 0.6 10.15 0.6 10.15 1.6 9.2 1.6 | accento
punto: 9.67 1.1 | accento
poligono: 10.2 0.6 11.15 0.6 11.15 1.6 10.2 1.6 | rosa
testo: 10.67 1.1 | rosa | "z"
poligono: 11.2 0.6 12.15 0.6 12.15 1.6 11.2 1.6 | rosa
testo: 11.67 1.1 | rosa | "z"
testo: 6.2 2.05 | grigio | "9 variabili + 3 separatori = 12 caselle"
```

> [!PROP] 3.39 · Numero delle combinazioni con ripetizione
> Sia $A$ un insieme finito con $\lvert A \rvert = n$ e sia $k$ un intero positivo. Il numero delle combinazioni con ripetizione di ordine $k$ in $A$ è
> $$C'_{n,k} = \binom{k + n - 1}{n - 1} = \frac{(k + n - 1)!}{(n - 1)!\, k!}.$$

**Come si legge.** $k$ caselle per gli elementi scelti, $n - 1$ separatori per dividere gli $n$ tipi: in tutto $k + n - 1$ caselle, tra cui si scelgono le $n - 1$ dei separatori. Per la simmetria è anche $\binom{k + n - 1}{k}$, la scelta delle caselle degli elementi. Attenzione: $n$ è il numero dei **tipi**, $k$ quanti elementi si prendono.

> [!ESEMPIO] · I mazzi di fiori: appello del 14/01/2025, problema 2 a)
> **Situazione:** 4 varietà di fiori in quantità illimitata. «Quanti mazzi diversi di 5 fiori si possono comporre?»
>
> **Passo 1: che cosa si sceglie.** 5 fiori ($k = 5$) tra 4 tipi ($n = 4$), senza ordine e con ripetizione.
>
> **Passo 2: la formula.** $\binom{5 + 4 - 1}{5} = \binom{8}{5} = 56$. È la soluzione ufficiale.

> [!TRAPPOLA] «Almeno uno di ogni tipo»
> La parte b) dello stesso problema chiede i mazzi di 6 fiori con **almeno un fiore di ogni varietà**. Il trucco della soluzione ufficiale: si mette da parte un fiore per varietà, 4 in tutto, e restano 2 fiori da scegliere liberamente tra 4 varietà: $\binom{2 + 4 - 1}{2} = \binom{5}{2} = 10$. Usare la formula con $k = 6$ conterebbe anche i mazzi a cui manca una varietà.

::: prova Quanti esiti ci sono, senza contare l'ordine, lanciando 10 volte una moneta? E componendo una scatola di 24 cioccolatini scelti tra 8 tipi?
Moneta: $n = 2$ tipi, $k = 10$: $\binom{11}{1} = 11$, cioè da 0 a 10 teste. Cioccolatini: $n = 8$, $k = 24$: $\binom{31}{7} = 2\,629\,575$. Sono gli esempi di p. 62 del libro.
:::

> [!RICORDA]
> - Combinazioni con ripetizione: $\binom{k + n - 1}{n - 1}$, con $n$ tipi e $k$ elementi scelti.
> - «Almeno uno per tipo»: metti da parte uno per tipo, poi conta i rimanenti.

## Quale formula? Le quattro domande

Tutti i conti delle lezioni D07 e D08 si riducono a due domande: **l'ordine conta?** **Si può ripetere?** Le risposte scelgono la formula.

| | si ripete | non si ripete |
|---|---|---|
| **l'ordine conta** | disposizioni con ripetizione: $n^k$ | disposizioni semplici: $\frac{n!}{(n-k)!}$ |
| **l'ordine non conta** | combinazioni con ripetizione: $\binom{k + n - 1}{k}$ | combinazioni semplici: $\binom{n}{k}$ |

Un esempio per ogni casella, sempre con 4 oggetti e scelte di 2:

- parole di 2 lettere su un alfabeto di 4: $4^2 = 16$;
- primo e secondo posto tra 4 atleti: $4 \cdot 3 = 12$;
- mazzi di 2 fiori da 4 varietà: $\binom{5}{2} = 10$;
- coppie di piante diverse tra 4: $\binom{4}{2} = 6$.

> [!METODO] Le domande di calcolo combinatorio
> 1. Che cosa si sceglie, e da quale insieme? Scrivi $n$ e $k$.
> 2. L'ordine conta? Se scambiando due elementi ottieni un risultato diverso, sì. Le parole «mazzo», «gruppo», «sottoinsieme», «degustazione» dicono di no; «fila», «classifica», «sequenza», «parola» dicono di sì.
> 3. Si può ripetere?
> 4. Scegli la casella della tabella.
> 5. Più scelte da fare tutte: moltiplica. Casi alternativi: somma. «Almeno uno»: conta il contrario e sottrai, oppure metti da parte uno per tipo.

::: prova Per ognuna, quale casella? (a) le password di 6 cifre; (b) le squadre di 5 giocatori scelti tra 12; (c) i sacchetti di 10 caramelle da 3 gusti; (d) i primi tre classificati su 20.
(a) Ordine sì, ripetizione sì: $10^6$. (b) Ordine no, ripetizione no: $\binom{12}{5} = 792$. (c) Ordine no, ripetizione sì: $\binom{12}{2} = 66$. (d) Ordine sì, ripetizione no: $20 \cdot 19 \cdot 18 = 6840$.
:::

> [!RICORDA]
> - Due domande: l'ordine conta? si ripete?
> - Quattro formule: $n^k$, $\frac{n!}{(n-k)!}$, $\binom{n}{k}$, $\binom{k+n-1}{k}$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $C_{n,k}$ | «C n k» | combinazioni semplici di $k$ elementi da $n$ | $C_{4,2} = 6$ |
| $\binom{n}{k}$ | «n su k» | coefficiente binomiale, $\frac{n!}{k!\,(n-k)!}$ | $\binom{9}{3} = 84$ |
| $C'_{n,k}$ | «C primo n k» | combinazioni con ripetizione di $k$ elementi da $n$ tipi | $C'_{4,5} = 56$ |
| $D_{n,k}$ | «D n k» | disposizioni semplici, della lezione D07 | $D_{4,2} = 12$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 19/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)). Il testo dei problemi dice: «Non è necessario calcolare gli esponenziali, i fattoriali e i coefficienti binomiali».

**Che cosa serve di questa lezione**

1. **La domanda 4 del quiz.** Le combinazioni escono negli appelli del 04/02/2025, 06/06/2025, 13/01/2026 e 10/09/2026. Le risposte sono formule: basta riconoscere $\binom{n}{k}$ scritto come $\frac{n!}{k!\,(n-k)!}$.
2. **Il primo o il secondo problema.** Mazzi di fiori (14/01/2025), kit di asciugamani (08/09/2025), sottoinsiemi con un vincolo (03/02/2026, 01/07/2026).

### Una domanda vera, letta insieme

**Appello del 10/09/2026, domanda 4.** Il testo: «La birreria Qvizz produce 9 birre e offre delle degustazioni di 3 a scelta. Quante sono le possibili degustazioni? 1. $\frac{9!}{3! \cdot 6!}$; 2. $\frac{9!}{6!}$; 3. $\frac{9!}{3 \cdot 6}$; 4. $\frac{9!}{3!}$; 5. $9!$».

**In pratica chiede:** quanti sottoinsiemi di 3 birre ci sono tra 9?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: le due domande.** In una degustazione l'ordine delle birre non conta, e le birre sono diverse: combinazioni semplici.
>
> **Passo 2: la formula.** $\binom{9}{3} = \frac{9!}{3! \cdot 6!} = 84$: la risposta 1.
>
> **Passo 3: le altre.** La 2, $\frac{9!}{6!} = 504$, conta le degustazioni con l'ordine: sono le disposizioni. La 3 divide per 3 e 6 invece che per $3!$ e $6!$. La 4 divide per il fattoriale sbagliato, e la 5 conta tutti gli ordinamenti delle 9 birre.
>
> Nelle altre versioni dello stesso appello: 3 birre da 8, $\frac{8!}{3! \cdot 5!}$; 3 da 10, $\frac{10!}{3! \cdot 7!}$; 4 da 9, $\frac{9!}{4! \cdot 5!}$.

### I problemi

> [!ESAME] Il kit di asciugamani: appello dell'08/09/2025, problema 2
> «Un hotel fornisce a ogni ospite un kit composto da due asciugamani piccoli e uno grande. Gli asciugamani piccoli possono essere di 5 colori; quelli grandi bianchi oppure blu.» I due piccoli sono indistinguibili, quindi conta solo quali colori hanno.
>
> a) I kit sono 30: i due piccoli sono una combinazione con ripetizione di 2 colori da 5, $\binom{6}{2} = 15$, e per il grande ci sono 2 scelte, $15 \cdot 2 = 30$. Con i due piccoli di colori diversi: $\binom{5}{2} \cdot 2 = 20$.
>
> b) Con almeno un asciugamano bianco: si contano quelli **senza** bianco, grande blu e piccoli tra 4 colori, $\binom{5}{2} = 10$, e si tolgono: $30 - 10 = 20$.
>
> c) Assegnare un kit a ognuna di 10 camere è una disposizione con ripetizione, $30^{10}$; con kit tutti diversi, $\frac{30!}{20!}$. Sono le soluzioni ufficiali.

> [!ESAME] I sottoinsiemi con un vincolo: appelli del 2026
> - **03/02/2026, problema 1 c).** $A = \{A, B, C, D, E, F, 1, 2, 3, 4\}$: quanti sottoinsiemi contengono almeno 3 lettere? Si sceglie quante lettere, da 3 a 6, e poi le cifre liberamente: $2^4 \cdot \bigl(\binom{6}{3} + \binom{6}{4} + \binom{6}{5} + \binom{6}{6}\bigr) = 16 \cdot 42 = 672$. Casi alternativi sommati, poi una scelta indipendente moltiplicata.
> - **01/07/2026, problema 1 c).** I numeri che sono prodotto di primi distinti presi tra i 25 primi fino a 100 sono $2^{25} - 1$, i sottoinsiemi non vuoti della lezione D01. Quelli prodotto di esattamente 4 primi distinti sono $\binom{25}{4} = 12\,650$.

**Errori da evitare**

- Usare le disposizioni quando l'ordine non conta, o il contrario.
- Nelle combinazioni con ripetizione, scambiare $n$ (i tipi) con $k$ (quanti se ne prendono).
- Sommare scelte che vanno fatte tutte, o moltiplicare casi alternativi.
- Scegliere da tutto l'insieme invece che dal gruppo giusto (i pari tra i pari).

## Quiz

```quiz
D: Appello del 10/09/2026. La birreria Qvizz produce 9 birre e offre delle degustazioni di 3 a scelta. Quante sono le possibili degustazioni?
+ $\frac{9!}{3! \cdot 6!}$
- $\frac{9!}{6!}$
- $\frac{9!}{3 \cdot 6}$
- $\frac{9!}{3!}$
- $9!$
= L'ordine non conta e le birre sono diverse: $\binom{9}{3} = 84$. La risposta più insidiosa è $\frac{9!}{6!}$, che conta le degustazioni con l'ordine.

D: Appello del 13/01/2026. Le 12 caselle di una riga devono essere colorate di verde o di bianco in modo che ci siano esattamente 5 caselle bianche. Quanti sono i modi di farlo?
+ $\binom{12}{7}$
- $\frac{12!}{7!}$
- $12! - 7!$
- $\binom{7}{5}$
- $5!$
= Si sceglie quali 5 caselle sono bianche: $\binom{12}{5}$, che per la simmetria è uguale a $\binom{12}{7}$, le 7 verdi. La risposta più insidiosa è $\frac{12!}{7!}$: conta le caselle bianche in ordine.

D: Appello del 04/02/2025. Dall'insieme $\{1, 2, \dots, 20\}$ vogliamo scegliere 5 numeri pari e 2 numeri dispari. Quante scelte possibili ci sono?
+ $\binom{10}{5} \cdot \binom{10}{2}$
- $\binom{20}{7}$
- $\binom{20}{5} \cdot \binom{20}{2}$
- $20^7$
- $10^5 \cdot 10^2$
= 10 pari e 10 dispari, due scelte indipendenti: si moltiplica. La risposta più insidiosa è $\binom{20}{5} \cdot \binom{20}{2}$, che sceglie i pari tra tutti i numeri. $\binom{20}{7}$ non garantisce 5 pari e 2 dispari.

D: Appello del 06/06/2025. Quanti sono i modi di scegliere due numeri divisibili per 4 e quattro numeri non divisibili per 4 compresi tra 1 e 12 inclusi?
+ $\binom{3}{2} \cdot \binom{9}{4}$
- $\binom{12}{2} \cdot \binom{12}{4}$
- $\binom{12}{6}$
- $12! \cdot 6!$
- $\frac{12!}{2! \cdot 4!}$
= Tra 1 e 12 i multipli di 4 sono 3 (4, 8, 12) e gli altri 9: $\binom{3}{2} \cdot \binom{9}{4} = 3 \cdot 126 = 378$. La risposta più insidiosa è $\binom{12}{2} \cdot \binom{12}{4}$, che non separa i due gruppi.

D: Quanti sono i mazzi di 5 fiori che si possono comporre con 4 varietà disponibili in quantità illimitata?
N: 56
= Combinazioni con ripetizione di 5 elementi da 4 tipi: $\binom{5 + 4 - 1}{5} = \binom{8}{5} = 56$. È il problema 2 a) dell'appello del 14/01/2025.

D: Con 4 varietà di fiori, quanti mazzi di 6 fiori contengono almeno un fiore di ogni varietà?
+ $\binom{5}{2} = 10$
- $\binom{9}{6} = 84$
- $\binom{6}{4} = 15$
- $4^2 = 16$
- $\binom{9}{3} - 4 = 80$
= Si mette da parte un fiore per varietà e se ne scelgono altri 2 tra 4 varietà, con ripetizione: $\binom{2 + 4 - 1}{2} = 10$. La risposta più insidiosa è $\binom{9}{6} = 84$: sono tutti i mazzi di 6 fiori, anche quelli a cui manca una varietà. È il problema 2 b) del 14/01/2025.

D: Quanto vale $\binom{100}{98}$?
N: 4950
= Per la simmetria $\binom{100}{98} = \binom{100}{2} = \frac{100 \cdot 99}{2} = 4950$.

D: Una gelateria ha 14 gusti e vende coni con 1 o 2 gusti diversi. Quanti coni diversi?
+ $14 + \binom{14}{2} = 105$
- $14 \cdot \binom{14}{2} = 1274$
- $\binom{14}{3} = 364$
- $14^2 = 196$
- $\binom{15}{2} = 105$, ma solo per caso
= Un cono ha 1 gusto **oppure** 2: casi alternativi, si sommano: $14 + 91 = 105$. La risposta più insidiosa è il prodotto, che si usa per scelte da fare tutte. $14^2$ conta i coni con l'ordine e con il gusto ripetuto.
```

## Esercizi

::: esercizio base Riscaldamento: coefficienti binomiali
Calcola $\binom{8}{3}$, $\binom{10}{8}$, $\binom{12}{1}$, $\binom{7}{0}$, e controlla che $\binom{6}{2} = \binom{6}{4}$.
::: soluzione
$\binom{8}{3} = \frac{8 \cdot 7 \cdot 6}{6} = 56$. $\binom{10}{8} = \binom{10}{2} = 45$. $\binom{12}{1} = 12$. $\binom{7}{0} = 1$. $\binom{6}{2} = 15$ e $\binom{6}{4} = \frac{6 \cdot 5 \cdot 4 \cdot 3}{24} = 15$.
:::

::: esercizio base Riscaldamento: quale formula?
Per ognuna, l'ordine conta? si ripete? Poi conta. (a) I comitati di 3 persone scelti in una classe di 25. (b) Presidente, vice e segretario scelti nella stessa classe. (c) Le scatole di 6 uova scelte tra 3 tipi. (d) Le sequenze di 6 lanci di un dado.
::: soluzione
(a) No, no: $\binom{25}{3} = 2300$. (b) Sì, no: $25 \cdot 24 \cdot 23 = 13\,800$. (c) No, sì: $\binom{6 + 3 - 1}{6} = \binom{8}{2} = 28$. (d) Sì, sì: $6^6 = 46\,656$.
:::

::: esercizio base Riscaldamento: moltiplicare o sommare
In un mazzo da 40 carte ci sono 10 carte per ognuno dei 4 semi. In quanti modi si scelgono 4 carte (a) tutte di cuori; (b) 2 di cuori e 2 di picche; (c) tutte dello stesso seme?
::: soluzione
(a) $\binom{10}{4} = 210$. (b) Scelte indipendenti: $\binom{10}{2} \cdot \binom{10}{2} = 45 \cdot 45 = 2025$. (c) Casi alternativi, uno per seme: $4 \cdot 210 = 840$.
:::

::: esercizio medio Esercizio 3.10 b) del libro: la coreografia
A un corso di ballo sono iscritti 11 uomini e 9 donne. Per uno spettacolo i maestri scelgono 5 uomini e 5 donne. Quante sono le scelte possibili?
::: soluzione
Due scelte indipendenti: $\binom{11}{5} \cdot \binom{9}{5} = 462 \cdot 126 = 58\,212$.
:::

::: esercizio medio Esercizio 3.12 del libro: le rose
Un fiorista vende rose di 5 colori. (a) Quanti abbinamenti di colore ci sono per un mazzo bicolore? (c) Quanti mazzi distinti di 12 rose si possono formare se si vuole che tutti i colori siano presenti?
::: soluzione
(a) Si scelgono 2 colori tra 5: $\binom{5}{2} = 10$. (c) Si mette da parte una rosa per colore, 5 in tutto; restano 7 rose da 5 colori, con ripetizione: $\binom{7 + 5 - 1}{7} = \binom{11}{4} = 330$. La parte b) usa il principio dei piccioni della lezione D06: con 21 rose almeno un colore ne ha 5, con 20 no (4 per colore).
:::

::: esercizio medio Esercizio 3.8 c) del libro: la valigia
Anna ha 11 magliette, 5 paia di pantaloni, 6 paia di scarpe e 2 borsette. Per un weekend porta 4 magliette, 2 paia di pantaloni, 2 paia di scarpe e 1 borsetta. Quante sono le scelte possibili?
::: soluzione
Quattro scelte indipendenti, senza ordine: $\binom{11}{4} \cdot \binom{5}{2} \cdot \binom{6}{2} \cdot \binom{2}{1} = 330 \cdot 10 \cdot 15 \cdot 2 = 99\,000$.
:::

::: esercizio esame Esercizio 3.11 b) del libro: il gruppo di lavoro
Un gruppo di 16 informatici lavora a un progetto con Italia, Francia, Belgio e Spagna. Quante diverse distribuzioni per nazionalità può avere il gruppo, se c'è almeno un membro per nazione? Conta solo quanti membri ha ogni nazione.
::: soluzione
Una distribuzione dice quanti informatici per nazione: è una combinazione con ripetizione di 16 elementi da 4 tipi, con almeno uno per tipo. Si mette da parte un membro per nazione e restano 12 da distribuire liberamente: $\binom{12 + 4 - 1}{12} = \binom{15}{3} = 455$.
:::

::: esercizio esame Il kit (appello dell'08/09/2025)
Rifai il problema degli asciugamani con 6 colori per i piccoli e 3 per il grande: quanti kit? Quanti con i due piccoli di colori diversi?
::: soluzione
Piccoli: $\binom{2 + 6 - 1}{2} = \binom{7}{2} = 21$; per il grande 3 scelte: $21 \cdot 3 = 63$ kit. Con i piccoli di colori diversi: $\binom{6}{2} \cdot 3 = 15 \cdot 3 = 45$.
:::

## Domande di ripasso

::: domanda Che cos'è una combinazione semplice di ordine $k$ in un insieme di $n$ elementi?
Un sottoinsieme di $k$ elementi: conta quali elementi, non l'ordine.
:::

::: domanda Perché le combinazioni sono le disposizioni divise per $k!$?
Perché ogni sottoinsieme di $k$ elementi corrisponde a $k!$ disposizioni, una per ogni modo di metterlo in fila.
:::

::: domanda Perché $\binom{n}{k} = \binom{n}{n-k}$?
Perché scegliere i $k$ elementi da prendere è come scegliere gli $n - k$ da lasciare fuori: il complementare è una biezione tra i due tipi di sottoinsiemi.
:::

::: domanda Quando si moltiplica e quando si somma?
Si moltiplica per scelte indipendenti da fare tutte; si somma per casi alternativi che si escludono.
:::

::: domanda Quante sono le combinazioni con ripetizione di $k$ elementi da $n$ tipi?
$\binom{k + n - 1}{n - 1}$: si scelgono le $n - 1$ caselle dei separatori tra $k + n - 1$.
:::

::: domanda Come si contano le scelte con «almeno uno di ogni tipo»?
Si mette da parte un elemento per tipo e si contano le scelte libere dei rimanenti.
:::

## Glossario

```glossario
Combinazione semplice | Un sottoinsieme di k elementi di un insieme di n: senza ordine e senza ripetizioni.
Coefficiente binomiale | n su k, n!/(k!(n−k)!): il numero dei sottoinsiemi di k elementi.
Simmetria dei coefficienti binomiali | n su k è uguale a n su n−k.
Combinazione con ripetizione | Una scelta di k elementi tra n tipi, senza ordine, in cui un tipo si può prendere più volte.
Caselle e separatori | Il metodo che conta le combinazioni con ripetizione: k caselle per gli elementi, n−1 per i separatori.
```

## Checklist

```checklist
- So spiegare perché le combinazioni sono le disposizioni divise per k!.
- So calcolare un coefficiente binomiale e riconoscerlo scritto con i fattoriali.
- So usare la simmetria per semplificare i conti.
- So quando moltiplicare e quando sommare.
- So contare le combinazioni con ripetizione con caselle e separatori.
- So risolvere «almeno uno di ogni tipo».
- So scegliere tra le quattro formule con le due domande: ordine? ripetizione?
- So risolvere le domande 4 degli appelli 2025–2026 sulle combinazioni e i problemi dei fiori e degli asciugamani.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 3 «Combinatorica», pp. 55–58 (definizione 3.27, proposizioni 3.28, 3.30, nota 3.29, esempi delle pp. 56–58) e pp. 58 e 62–64 (definizioni 3.31, 3.37, proposizioni 3.32, 3.39, nota 3.38, esempi della p. 62); esercizi 3.8 c), 3.10 b), 3.11 b) e 3.12 (pp. 64–66). Le definizioni e gli enunciati nei riquadri riprendono il libro. Segnalate nel testo tre sviste a p. 57.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori): lezione 8 (combinazioni semplici e con ripetizioni, esempi). Gli argomenti della lezione del 19/10/2026 non erano pubblicati quando ho scritto questi appunti.
- Quiz degli appelli di Matematica Discreta del 04/02/2025, 06/06/2025, 13/01/2026 e 10/09/2026 (domanda 4); problemi degli appelli del 14/01/2025 (problema 2), 08/09/2025 (problema 2), 03/02/2026 (problema 1 c) e 01/07/2026 (problema 1 c), con le soluzioni ufficiali.
- Tutti i conteggi li ho ricontrollati con un programma, i mazzi di fiori e i monomi anche elencandoli uno per uno.
