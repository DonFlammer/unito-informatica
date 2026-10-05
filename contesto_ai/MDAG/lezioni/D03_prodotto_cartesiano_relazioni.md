---
corso: MDAG
modulo: MD
lezione: D03
titolo: Prodotto cartesiano e relazioni di equivalenza
data: 2026-10-05
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D03
descrizione: >-
  Appunti della lezione D03 di Matematica Discreta (MDAG, parte 1, canali A, B e C): coppie ordinate, prodotto
  cartesiano e numero dei suoi elementi, terne, relazioni in un insieme, proprietà riflessiva, simmetrica,
  antisimmetrica e transitiva, relazioni d'ordine, relazioni di equivalenza, congruenza modulo N, classi di
  equivalenza, partizioni e insieme quoziente, con le domande vere degli appelli ed esercizi svolti.
lede: >-
  Come si mettono in fila due oggetti, quando l'ordine conta, e come si costruiscono tutte le coppie possibili. Poi
  come si descrive un legame tra gli elementi di un insieme, e perché i legami del tipo «essere dello stesso tipo»
  dividono sempre l'insieme in gruppi.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 1, pp. 13–15, e appendice A, pp. 153–155
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 1 «Insiemi», pp. 13–15, e appendice A «Gli
  insiemi numerici», pp. 153–155; diario delle lezioni del canale B 2025/26; quiz degli appelli di Matematica
  Discreta 2025–2026
appunti_html: appunti/MDAG/D03_prodotto_cartesiano_relazioni.html
genera_html: true
---

## In breve

- Una **coppia ordinata** è fatta di due oggetti messi in fila, il primo e il secondo. A differenza di un insieme, qui l'ordine conta: la casella B3 della battaglia navale non è la casella 3B.
- Il **prodotto cartesiano** di due insiemi è l'insieme di tutte le coppie che si possono formare prendendo il primo oggetto dal primo insieme e il secondo dal secondo. Se gli insiemi hanno 3 e 4 elementi, le coppie sono $3 \cdot 4 = 12$.
- Una **relazione** in un insieme è una scelta di alcune coppie: dice quali elementi sono «legati» tra loro. «Divide», «è minore di», «è nato nello stesso mese di» sono relazioni.
- Una relazione può avere quattro **proprietà**: ognuno è legato a sé stesso (riflessiva); i legami valgono nei due sensi (simmetrica); due elementi diversi non sono mai legati nei due sensi (antisimmetrica); i legami si passano lungo una catena (transitiva).
- Una **relazione di equivalenza** è riflessiva, simmetrica e transitiva: vuol dire «essere dello stesso tipo». Un esempio da ricordare: due interi sono equivalenti quando la loro differenza è un multiplo di 3.
- Ogni equivalenza divide l'insieme in gruppi, le **classi di equivalenza**, e questi gruppi formano una partizione: sono i cassetti della lezione D02.
- All'esame la domanda 2 del quiz chiede quasi sempre di riconoscere un elemento del prodotto cartesiano. Le classi di equivalenza tornano più avanti nel corso, con le classi di resto.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di lunedì 05/10/2026 con Andrea Mori. Al momento in cui scrivo gli argomenti di questa lezione non sono ancora sul Moodle del canale B: li ho ricostruiti dall'ordine del libro, che riprende da dove si era fermata la lezione D02, e dal diario dell'anno scorso, in cui la terza lezione era dedicata alle relazioni di equivalenza e alle partizioni. Il libro mette le relazioni nell'appendice A, pp. 153–155. Quando il docente pubblica gli argomenti, controllo e aggiorno.

## Coppie in cui l'ordine conta (p. 13)

Nella battaglia navale ogni casella ha un nome fatto di due pezzi: una lettera per la colonna e un numero per la riga. «B3» vuol dire colonna B, riga 3. Se un giocatore dice «3B» non si capisce, oppure si capisce una casella diversa: i due pezzi hanno un posto fisso, prima la colonna e poi la riga.

Al cinema succede lo stesso con «fila 5, posto 12»: se scambi i due numeri, ti siedi nel posto sbagliato.

> [!IDEA]
> Una coppia ordinata è fatta di due oggetti messi in fila: c'è un primo e c'è un secondo, e scambiarli cambia la coppia.

Una coppia ordinata si scrive con le parentesi tonde e la virgola: $(B, 3)$ si legge «la coppia B, 3». L'oggetto a sinistra si chiama **prima componente**, quello a destra **seconda componente**.

Le tonde servono proprio a distinguere la coppia da un insieme. Con le graffe l'ordine non conta, come hai visto nella lezione D01: $\{2, 5\}$ e $\{5, 2\}$ sono lo stesso sacchetto. Con le tonde l'ordine conta:

$$(2, 5) \neq (5, 2)$$

Il simbolo $\neq$ si legge «diverso da».

Due coppie sono uguali solo se coincidono pezzo per pezzo: stessa prima componente e stessa seconda componente.

1. $(3, 7) = (3, 7)$: tutti e due i pezzi coincidono.
2. $(3, 7) \neq (7, 3)$: i pezzi sono gli stessi, ma in posti diversi.
3. $(3, 7) \neq (3, 8)$: la prima componente coincide, la seconda no.

Un'altra differenza con gli insiemi: in una coppia lo stesso oggetto può comparire due volte. $(4, 4)$ è una coppia vera, con il 4 al primo e al secondo posto, come la casella «riga 4, colonna 4» di una scacchiera. Invece $\{4, 4\}$ è solo un modo lungo di scrivere $\{4\}$, un sacchetto con una tessera.

> [!TRAPPOLA] Tonde e graffe non sono la stessa cosa
> $(1, 2)$ è una coppia, $\{1, 2\}$ è un insieme con due elementi. Nelle domande del quiz compaiono tutte e due le scritture, e le risposte sbagliate scambiano spesso una con l'altra.

::: prova Quali di queste uguaglianze sono vere? (a) $(1, 2) = (2, 1)$; (b) $\{1, 2\} = \{2, 1\}$; (c) $(5, 5) = (5, 5)$; (d) $\{5, 5\} = \{5\}$.
(a) Falsa: nella coppia l'ordine conta. (b) Vera: nell'insieme l'ordine non conta. (c) Vera: stessi pezzi negli stessi posti. (d) Vera: in un insieme un elemento ripetuto conta una volta sola.
:::

> [!RICORDA]
> - Una coppia ordinata $(a, b)$ ha un primo e un secondo: $(a, b)$ e $(b, a)$ sono diverse se $a$ e $b$ sono diversi.
> - Due coppie sono uguali quando coincidono pezzo per pezzo.
> - Tonde per le coppie, graffe per gli insiemi.

## Tutte le coppie possibili: il prodotto cartesiano (p. 13)

Prendi una battaglia navale piccolissima, con tre colonne A, B, C e due righe 1, 2. Quante caselle ci sono? Per ogni colonna ci sono due righe, quindi le caselle sono sei:

| | colonna A | colonna B | colonna C |
|---|---|---|---|
| **riga 1** | $(A, 1)$ | $(B, 1)$ | $(C, 1)$ |
| **riga 2** | $(A, 2)$ | $(B, 2)$ | $(C, 2)$ |

L'insieme di tutte le caselle si costruisce così: prendi l'insieme delle colonne $\{A, B, C\}$, l'insieme delle righe $\{1, 2\}$, e forma tutte le coppie possibili «colonna, riga».

> [!IDEA]
> Il prodotto cartesiano di due insiemi è l'insieme di tutte le coppie che hanno il primo pezzo nel primo insieme e il secondo pezzo nel secondo.

Il prodotto cartesiano si scrive con una croce tra i due insiemi: $A \times B$. Si legge «A per B», oppure «A cartesiano B». Il nome viene da Cartesio, il matematico delle coordinate.

### Un esempio, un passo alla volta

Prendi $A = \{1, 2, 3\}$ e $B = \{6, 7\}$. Per scrivere $A \times B$ senza dimenticare niente conviene un metodo fisso.

1. Prendi il primo elemento di $A$, cioè 1, e mettilo in coppia con ogni elemento di $B$: $(1, 6)$ e $(1, 7)$.
2. Passa al secondo elemento di $A$, il 2: $(2, 6)$ e $(2, 7)$.
3. Poi il 3: $(3, 6)$ e $(3, 7)$.
4. Gli elementi di $A$ sono finiti: hai finito.

$$A \times B = \{(1, 6), (1, 7), (2, 6), (2, 7), (3, 6), (3, 7)\}$$

Il risultato è un insieme, con le graffe, e i suoi elementi sono coppie, con le tonde. Le coppie si possono elencare in qualunque ordine, perché sono elementi di un insieme; ma dentro ogni coppia l'ordine è fisso: prima il pezzo di $A$, poi quello di $B$.

Ora scambia i due insiemi. In $B \times A$ il primo pezzo viene da $B$ e il secondo da $A$:

$$B \times A = \{(6, 1), (6, 2), (6, 3), (7, 1), (7, 2), (7, 3)\}$$

Nessuna coppia di $B \times A$ sta in $A \times B$: per esempio $(6, 1)$ ha il 6 al primo posto, e il 6 non sta in $A$. Quindi in generale $A \times B$ e $B \times A$ sono insiemi diversi.

```grafico
titolo: $A \times B$ con $A = \{1, 2, 3\}$ e $B = \{6, 7\}$: ogni punto è una coppia, prima componente in orizzontale, seconda in verticale
x: 0 4
y: 5 8
nomi: $A$ $B$
griglia: no
punto: 1 6 | blu | $(1, 6)$ | se
punto: 2 6 | blu | $(2, 6)$ | se
punto: 3 6 | blu | $(3, 6)$ | se
punto: 1 7 | accento | $(1, 7)$ | ne
punto: 2 7 | accento | $(2, 7)$ | ne
punto: 3 7 | accento | $(3, 7)$ | ne
testo: 0.25 6 | grigio | $6$
testo: 0.25 7 | grigio | $7$
testo: 3.8 5.25 | grigio | $A$
```

Guarda la figura: le coppie si dispongono su una griglia, come le caselle della battaglia navale. Ogni colonna corrisponde a un elemento di $A$, ogni riga a un elemento di $B$.

Il libro scrive così la definizione.

> [!DEF] 1.23 · Prodotto cartesiano
> Siano $A$ e $B$ insiemi. Si definisce **prodotto cartesiano** di $A$ e $B$ e si denota $A \times B$ l'insieme i cui elementi sono coppie di elementi con il primo elemento in $A$ ed il secondo in $B$, ovvero
> $$A \times B = \{(a, b) \text{ tali che } a \in A \text{ e } b \in B\}.$$

**Come si legge.** La riga con le graffe dice: «il prodotto è fatto delle coppie $(a, b)$ con il primo pezzo in $A$ e il secondo in $B$». Il simbolo $\in$ si legge «appartiene a», cioè «sta nell'insieme». Per controllare se una coppia sta in $A \times B$ bastano quindi due domande: il primo pezzo sta in $A$? il secondo pezzo sta in $B$? Servono due sì.

### Il prodotto di un insieme per sé stesso

Niente vieta di prendere due volte lo stesso insieme. $A \times A$, che si scrive anche $A^2$ e si legge «$A$ al quadrato», è l'insieme delle coppie con tutti e due i pezzi in $A$. Con $A = \{1, 2\}$:

$$A \times A = \{(1, 1), (1, 2), (2, 1), (2, 2)\}$$

Qui compaiono sia $(1, 2)$ sia $(2, 1)$, che sono coppie diverse. Compaiono anche le due coppie con i pezzi uguali. Questo prodotto servirà tra poco per le relazioni.

### Quando un insieme è vuoto (p. 13)

Se $A$ è vuoto, non c'è niente da mettere al primo posto, quindi non si forma nessuna coppia. Lo stesso se è vuoto $B$:

$$\emptyset \times B = \emptyset \qquad A \times \emptyset = \emptyset$$

Il simbolo $\emptyset$ si legge «insieme vuoto». Al contrario, se tutti e due gli insiemi hanno almeno un elemento, con quei due elementi si forma una coppia. Quindi il prodotto non è vuoto.

::: prova Scrivi $\{a, b\} \times \{0, 1, 2\}$. Quanti elementi ha? La coppia $(0, a)$ ci sta?
$\{(a, 0), (a, 1), (a, 2), (b, 0), (b, 1), (b, 2)\}$: sei elementi. $(0, a)$ non ci sta, perché il primo pezzo deve stare in $\{a, b\}$ e 0 non ci sta.
:::

::: prova Con $A = \{1, 2\}$ e $B = \{2, 3\}$, la coppia $(2, 2)$ sta in $A \times B$? E in $B \times A$?
Sì, in tutti e due: 2 sta sia in $A$ sia in $B$, quindi va bene sia al primo sia al secondo posto.
:::

> [!RICORDA]
> - $A \times B$ è l'insieme di tutte le coppie con il primo pezzo in $A$ e il secondo in $B$.
> - Per scriverlo: fissa un elemento di $A$, accoppialo con tutti quelli di $B$, poi passa al successivo.
> - In generale $A \times B$ e $B \times A$ sono diversi; se uno dei due insiemi è vuoto, il prodotto è vuoto.

## Quante sono le coppie (pp. 13–14)

Torna alla battaglia navale piccola: 3 colonne e 2 righe danno 6 caselle. Una battaglia navale vera ha 10 colonne e 10 righe, quindi 100 caselle. Le caselle sono il numero delle colonne moltiplicato per il numero delle righe, perché formano un rettangolo.

> [!IDEA]
> Il numero delle coppie è il numero degli elementi del primo insieme moltiplicato per il numero degli elementi del secondo. Per ogni primo pezzo ci sono tutti i secondi pezzi possibili.

Ricorda dalla lezione D02 che $|A|$ si legge «cardinalità di $A$» e vuol dire «quanti elementi ha $A$». Con questa scrittura la regola è $|A \times B| = |A| \cdot |B|$.

1. $A = \{1, 2, 3\}$ e $B = \{6, 7\}$: $|A| = 3$, $|B| = 2$, quindi $|A \times B| = 3 \cdot 2 = 6$. Sono le sei coppie elencate prima.
2. $A = \{a, b, c, d\}$ e $B = \{x, y, z\}$: $4 \cdot 3 = 12$ coppie.
3. $A = \{1, 2\}$: $|A \times A| = 2 \cdot 2 = 4$.

Il libro la scrive così.

> [!PROP] 1.24 · Elementi del prodotto cartesiano
> Siano $A$ e $B$ insiemi. Se $A$ e $B$ sono finiti con $|A| = m$ e $|B| = n$ allora $|A \times B| = mn$. Se invece almeno uno tra $A$ e $B$ è infinito allora anche $A \times B$ è infinito.

**Come si legge.** La prima frase è la regola del rettangolo. La seconda dice: se uno dei due insiemi ha infiniti elementi, anche le coppie sono infinite. Il libro dà per scontato che nessuno dei due insiemi sia vuoto: se uno è vuoto, il prodotto è vuoto, come hai visto prima.

> [!DIM] perché le coppie sono $mn$
> Il libro numera gli elementi: $A = \{a_1, \dots, a_m\}$ e $B = \{b_1, \dots, b_n\}$. La scrittura $a_1, \dots, a_m$ vuol dire «un elenco di $m$ elementi: il primo si chiama $a_1$, l'ultimo $a_m$». Poi dispone le coppie in una tabella: nella riga 1 tutte le coppie che cominciano con $a_1$, nella riga 2 quelle che cominciano con $a_2$, e così via.
>
> | | $b_1$ | $b_2$ | $\cdots$ | $b_n$ |
> |---|---|---|---|---|
> | $a_1$ | $(a_1, b_1)$ | $(a_1, b_2)$ | $\cdots$ | $(a_1, b_n)$ |
> | $a_2$ | $(a_2, b_1)$ | $(a_2, b_2)$ | $\cdots$ | $(a_2, b_n)$ |
> | $\vdots$ | $\vdots$ | $\vdots$ | | $\vdots$ |
> | $a_m$ | $(a_m, b_1)$ | $(a_m, b_2)$ | $\cdots$ | $(a_m, b_n)$ |
>
> Ogni coppia di $A \times B$ compare nella tabella una volta sola: nella riga del suo primo pezzo e nella colonna del suo secondo pezzo. La tabella ha $m$ righe e $n$ colonne, quindi $mn$ caselle.

> [!NOTA] Dove torna questa regola
> «Per ogni scelta del primo pezzo ci sono $n$ scelte del secondo, quindi in tutto si moltiplica» è l'idea di partenza della combinatoria, il capitolo 3 del libro. Lì si chiamerà metodo delle scelte successive.

::: prova Un menu ha 4 primi e 5 secondi. Quanti pranzi diversi «un primo e un secondo» si possono fare?
Ogni pranzo è una coppia (primo, secondo), quindi i pranzi sono gli elementi del prodotto cartesiano: $4 \cdot 5 = 20$.
:::

::: prova $A$ ha 6 elementi e $A \times B$ ne ha 24. Quanti elementi ha $B$?
$6 \cdot |B| = 24$, quindi $|B| = 4$.
:::

> [!RICORDA]
> - $|A \times B| = |A| \cdot |B|$: le coppie formano un rettangolo con $|A|$ righe e $|B|$ colonne.
> - Se uno dei due insiemi è infinito (e l'altro non è vuoto), anche il prodotto è infinito.

## Tre insiemi o più: terne e n-uple (pp. 13–14)

Una data è fatta di tre pezzi in un ordine fisso: giorno, mese, anno. Il 5 ottobre 2026 si scrive $(5, 10, 2026)$. Se scambi i pezzi ottieni un'altra data, oppure niente: $(10, 5, 2026)$ è il 10 maggio.

Tre oggetti messi in fila formano una **terna** ordinata, e si scrivono tra tonde con due virgole. Il prodotto cartesiano di tre insiemi è l'insieme delle terne con il primo pezzo nel primo insieme, il secondo nel secondo e il terzo nel terzo:

$$A \times B \times C = \{(a, b, c) \text{ con } a \in A,\ b \in B,\ c \in C\}$$

Lo stesso con quattro, cinque, $n$ insiemi: gli elementi si chiamano **n-uple** (si legge «ennuple») e il conto degli elementi si fa sempre moltiplicando. Per esempio $|A \times B \times C| = |A| \cdot |B| \cdot |C|$.

Il libro lo scrive così, per $n$ insiemi:

> [!DEF] Prodotto di $n$ insiemi (p. 13)
> Nel caso di un numero finito di insiemi $A_1, A_2, \dots, A_n$ il prodotto cartesiano $A_1 \times A_2 \times \cdots \times A_n$ è definito come l'insieme delle $n$-ple $(a_1, a_2, \cdots, a_n)$ con $a_i \in A_i$, cioè
> $$A_1 \times A_2 \times \cdots \times A_n = \{(a_1, a_2, \cdots, a_n) \text{ tale che } a_i \in A_i,\ \forall i = 1, 2, \dots, n\}$$

**Come si legge.** $A_1, A_2, \dots, A_n$ sono $n$ insiemi, numerati. Gli elementi del prodotto sono elenchi di $n$ pezzi, e il pezzo numero $i$ deve stare nell'insieme numero $i$. Il simbolo $\forall$ si legge «per ogni»: la regola vale per ogni posto, dal primo all'ultimo.

> [!ESEMPIO] Il piano cartesiano (p. 14)
> Ogni punto del piano ha due coordinate, due numeri reali: la prima dice quanto andare a destra, la seconda quanto salire. Quindi il piano si può pensare come l'insieme di tutte le coppie di numeri reali, $\R \times \R$. Qui $\R$ si legge «erre» ed è l'insieme dei numeri reali. Il punto $(2, 3)$ e il punto $(3, 2)$ sono diversi, come B3 e 3B. Lo spazio a tre dimensioni è $\R \times \R \times \R$, e nella parte di Algebra lineare si lavora con $\R^n$, le n-uple di numeri reali.

> [!APPROFONDIMENTO] Infiniti insiemi e l'assioma della scelta (p. 14)
> Il libro accenna al prodotto di infiniti insiemi, che si scrive $\prod_{i \in I} A_i$. Il fatto che questo prodotto non sia vuoto quando nessun $A_i$ è vuoto non si riesce a dimostrare con le altre regole della teoria degli insiemi: va accettato come regola a sé, l'**assioma della scelta**. Al corso non serve; il libro stesso dice che si ferma lì.

### Come riconoscere una terna giusta

È il tipo di domanda dell'appello del 14/01/2025. Prendi $A = \{1, 2, 5, 8\}$, $B = \{2, 3, 8, 9\}$ e la terna $(1, 2, 5)$. In quale prodotto sta?

1. Il primo pezzo è 1: sta in $A$ ma non in $B$. Quindi il primo insieme del prodotto deve essere $A$.
2. Il secondo pezzo è 2: sta sia in $A$ sia in $B$. Va bene tutti e due.
3. Il terzo pezzo è 5: sta in $A$ ma non in $B$. Il terzo insieme deve essere $A$.

Quindi la terna sta in $A \times A \times A$ e in $A \times B \times A$, e in nessun altro prodotto di tre fattori presi tra $A$ e $B$.

::: prova Con $U = \{f, g\}$, $V = \{1, 3, 5\}$, $W = \{2, 4, 6\}$, in quale di questi prodotti sta la terna $(f, g, 4)$: $U \times U \times V$, $U \times U \times W$, $W \times U \times V$?
In $U \times U \times W$. Le lettere f e g stanno in $U$, e il 4 sta in $W$ ma non in $V$. Nel prodotto che comincia con $W$ il primo pezzo dovrebbe essere un numero.
:::

> [!RICORDA]
> - Una terna $(a, b, c)$ ha tre pezzi in ordine fisso; $A \times B \times C$ è l'insieme delle terne con un pezzo per insieme, nell'ordine.
> - Il numero di elementi si ottiene moltiplicando: $|A| \cdot |B| \cdot |C|$.
> - Il piano è $\R \times \R$: ogni punto è una coppia di coordinate.

## Elemento, coppia o sacchetto di coppie

La domanda 2 del quiz d'esame gioca quasi sempre su una cosa: che cosa può essere un elemento di $A \times B$ e che cosa può esserne un sottoinsieme. È la stessa differenza tra tessera e sacchetto della lezione D01, solo che ora le tessere sono coppie.

| Scrittura | Che cosa è | Quando è vera |
|---|---|---|
| $(a, b) \in A \times B$ | una coppia è un elemento del prodotto | se $a \in A$ e $b \in B$ |
| $(a, b) \notin A \times B$ | una coppia non è un elemento | se $a \notin A$ oppure $b \notin B$ |
| $\{(a, b), (c, d)\} \subset A \times B$ | un sacchetto di coppie è contenuto nel prodotto | se ogni coppia del sacchetto sta nel prodotto |
| $\emptyset \subset A \times B$ | il sacchetto vuoto è contenuto | sempre |
| $\{a, b\} \in A \times B$ | un insieme di due oggetti non è una coppia | **mai** |
| $a \in A \times B$ | un oggetto da solo non è una coppia | **mai**, se $a$ è un elemento di $A$ |
| $(a, b, c) \in A \times B$ | una terna non è una coppia | **mai** |
| $\emptyset \in A \times B$ | il vuoto non è una coppia | **mai** |
| $(a, b) \subset A \times B$ | una coppia non è un sacchetto | **mai**: si scrive $\in$, oppure $\{(a, b)\} \subset A \times B$ |

Il simbolo $\notin$ si legge «non appartiene a», e $\subset$ si legge «è contenuto in».

> [!METODO] La domanda 2 del quiz sul prodotto cartesiano
> Per ogni risposta:
> 1. Guarda che cosa c'è a sinistra di $\in$ o di $\subset$. Una coppia con le tonde e due pezzi? Un insieme con le graffe? Una terna? Un oggetto solo? Il vuoto?
> 2. Se c'è $\in$, a sinistra deve esserci una coppia con due pezzi. Altrimenti la frase è falsa.
> 3. Se c'è $\subset$, a sinistra deve esserci un insieme di coppie, oppure il vuoto. Altrimenti la frase è falsa.
> 4. Controlla ogni coppia: il primo pezzo nel primo insieme, il secondo nel secondo. Attento all'ordine dei due insiemi scritto nella risposta: $B \times A$ non è $A \times B$.
> 5. Se la risposta dice $\notin$, la frase è vera quando la coppia **non** sta nel prodotto.

> [!TRAPPOLA] L'ordine dei fattori nella risposta
> Spesso la domanda definisce $S \times T$ e una risposta parla di $T \times S$. Con $S = \{x, y, z\}$ e $T = \{1, 2, 3, 4\}$, la coppia $(z, 4)$ sta in $S \times T$, ma non in $T \times S$: lì il primo pezzo dovrebbe essere un numero.

::: prova Con $R = \{1, 4, 6, 8\}$ e $S = \{2, 5, 7, 8\}$, quali sono vere? (a) $(8, 8) \in R \times S$; (b) $\{6, 7\} \in R \times S$; (c) $(7, 6) \in R \times S$; (d) $\{(1, 2), (4, 5)\} \subset R \times S$.
(a) Vera: 8 sta in $R$ e in $S$. (b) Falsa: $\{6, 7\}$ è un insieme, non una coppia. (c) Falsa: 7 non sta in $R$; sarebbe vera $(6, 7) \in R \times S$. (d) Vera: tutte e due le coppie stanno nel prodotto.
:::

> [!RICORDA]
> - Elementi di $A \times B$: solo coppie, con il primo pezzo in $A$ e il secondo in $B$.
> - Sottoinsiemi di $A \times B$: sacchetti di coppie, e il vuoto.
> - Graffe a sinistra di $\in$, terne, oggetti soli: sempre falso.

## Scegliere alcune coppie: le relazioni (p. 153)

Prendi i numeri da 1 a 4 e chiediti, per ogni coppia di numeri, se il primo divide il secondo. Chiama $X = \{1, 2, 3, 4\}$ questo insieme. Ricorda che «3 divide 12» vuol dire che 12 è un multiplo di 3: $12 = 3 \cdot 4$. Le coppie per cui la risposta è sì sono queste:

$$(1, 1),\ (1, 2),\ (1, 3),\ (1, 4),\ (2, 2),\ (2, 4),\ (3, 3),\ (4, 4)$$

Sono 8 coppie, scelte tra le $4 \cdot 4 = 16$ di $X \times X$. La regola «il primo divide il secondo» è servita a scegliere alcune coppie e a scartare le altre.

> [!IDEA]
> Una relazione in un insieme $X$ è una scelta di alcune coppie di elementi di $X$: le coppie scelte sono quelle «legate». Una relazione è quindi un sottoinsieme di $X \times X$.

Un modo comodo per vedere una relazione è una tabella con una riga e una colonna per ogni elemento: nella riga del primo pezzo e nella colonna del secondo metti un pallino se la coppia è scelta. Per «il primo divide il secondo» in $\{1, 2, 3, 4\}$:

| divide | 1 | 2 | 3 | 4 |
|---|:-:|:-:|:-:|:-:|
| **1** | ● | ● | ● | ● |
| **2** | | ● | | ● |
| **3** | | | ● | |
| **4** | | | | ● |

Si legge per righe: il pallino nella riga 2 e colonna 4 dice «2 divide 4». Le caselle vuote sono le coppie scartate: nella riga 4 e colonna 2 non c'è niente, perché 4 non divide 2. Il libro, a p. 18, disegna tabelle dello stesso tipo.

Quando la coppia $(a, b)$ è scelta, $a$ è **in relazione** con $b$. Se la relazione si chiama $R$, questo si scrive $a R b$. Per le relazioni più comuni c'è un simbolo apposta: $3 \mid 12$ si legge «3 divide 12», e $2 \le 5$ si legge «2 è minore o uguale a 5».

Il libro lo scrive così.

> [!DEF] A.1 · Relazione
> Sia $X$ un insieme non vuoto. Una **relazione** in $X$ è un sottoinsieme
> $$R \subset X \times X.$$
> Data una relazione $R$ in $X$ diremo che due elementi $a$ e $b$ sono in relazione, e scriveremo $aRb$, se $(a, b) \in R$.

**Come si legge.** Una relazione è un insieme di coppie di elementi di $X$, cioè un sacchetto di caselle della tabella. Dire «$a$ è in relazione con $b$» e dire «la coppia $(a, b)$ è stata scelta» è la stessa cosa.

### Gli esempi del libro (p. 153)

1. **L'uguaglianza.** Scegli solo le coppie con due pezzi uguali: $(1, 1)$, $(2, 2)$, $(3, 3)$, $(4, 4)$. Ogni elemento è in relazione solo con sé stesso. Nella tabella i pallini stanno solo sulla **diagonale**, la linea di caselle che va dall'angolo in alto a sinistra a quello in basso a destra. Il libro chiama questo insieme di coppie $\Delta$, la lettera greca «delta» maiuscola, e lo chiama proprio diagonale.
2. **La divisibilità nei naturali.** $m$ è in relazione con $n$ quando $m$ divide $n$. È la relazione della tabella qui sopra, ma su tutti i naturali $\N$ e non solo su 1, 2, 3, 4.
3. **Il libro dà anche un terzo esempio**, che usa le funzioni del capitolo 2: lo riprendo quando arrivano le funzioni.

Altre relazioni che usiamo ogni giorno, anche se non le chiamiamo così: «è minore di» tra numeri, «è nato nello stesso mese di» tra persone, «è più alto di», «ha la stessa iniziale di».

> [!NOTA] Una relazione non deve avere una regola
> Qualunque sacchetto di coppie è una relazione, anche se non c'è una frase che lo descrive. In $\{1, 2, 3\}$ le coppie $(1, 3)$ e $(2, 2)$ formano una relazione, anche senza una regola dietro. Anche il sacchetto vuoto è una relazione (nessuno è legato a nessuno), e anche tutto $X \times X$ (tutti sono legati a tutti).

::: prova In $X = \{1, 2, 3\}$ scrivi la relazione «il primo è minore del secondo» come insieme di coppie. Quante coppie ha?
$\{(1, 2), (1, 3), (2, 3)\}$: tre coppie. Le coppie con pezzi uguali non ci sono, perché nessun numero è minore di sé stesso.
:::

::: prova Quante relazioni diverse ci sono in un insieme con 2 elementi?
$X \times X$ ha $2 \cdot 2 = 4$ coppie, e una relazione è un qualunque sottoinsieme di queste coppie. Un insieme con 4 elementi ha $2^4 = 16$ sottoinsiemi (lezione D02), quindi le relazioni sono 16.
:::

> [!RICORDA]
> - Una relazione in $X$ è un insieme di coppie di elementi di $X$, cioè un sottoinsieme di $X \times X$.
> - $a R b$ vuol dire «la coppia $(a, b)$ sta in $R$».
> - Si disegna con una tabella: un pallino nella riga di $a$ e nella colonna di $b$ quando $a R b$.

## Quattro proprietà da controllare (pp. 153–154)

Pensa a tre relazioni tra le persone di una classe: «è nato nello stesso mese di», «è più alto di», «è seduto accanto a». Si comportano in modo diverso:

- ognuno è nato nello stesso mese di sé stesso, ma nessuno è più alto di sé stesso;
- se Anna è nata nello stesso mese di Bruno, anche Bruno è nato nello stesso mese di Anna; ma se Anna è più alta di Bruno, Bruno non è più alto di Anna;
- se Anna è più alta di Bruno e Bruno è più alto di Carla, Anna è più alta di Carla; ma se Anna è seduta accanto a Bruno e Bruno accanto a Carla, Anna e Carla non sono sedute accanto.

Queste differenze hanno un nome: sono le quattro proprietà che il libro definisce per una relazione $R$ in un insieme $X$.

### Riflessiva: ognuno è legato a sé stesso

Una relazione è **riflessiva** quando ogni elemento è in relazione con sé stesso. «È nato nello stesso mese di» è riflessiva. «È più alto di» no.

Nella tabella vuol dire: **tutta la diagonale ha il pallino**. La tabella di «divide» in $\{1, 2, 3, 4\}$ ha i quattro pallini sulla diagonale, quindi «divide» è riflessiva: ogni numero divide sé stesso, perché $n = n \cdot 1$.

### Simmetrica: i legami valgono nei due sensi

Una relazione è **simmetrica** quando ogni legame vale anche al contrario: se il primo elemento è in relazione con il secondo, anche il secondo è in relazione con il primo. «È nato nello stesso mese di» è simmetrica. «Divide» no: 2 divide 4, ma 4 non divide 2.

Nella tabella vuol dire: la tabella è **uguale alla sua immagine allo specchio** rispetto alla diagonale. Se c'è un pallino nella riga 2 e colonna 4, deve esserci anche nella riga 4 e colonna 2.

### Antisimmetrica: mai nei due sensi tra elementi diversi

Una relazione è **antisimmetrica** quando due elementi **diversi** non sono mai in relazione nei due sensi. In altre parole: se $a R b$ e anche $b R a$, allora $a$ e $b$ sono lo stesso elemento.

«È minore o uguale a» tra numeri è antisimmetrica: se $a \le b$ e $b \le a$, allora $a = b$. Anche «divide» in $\{1, 2, 3, 4\}$ lo è.

Nella tabella vuol dire: fuori dalla diagonale, **un pallino non ha mai il suo specchio**. Sulla diagonale invece i pallini possono esserci.

> [!TRAPPOLA] Antisimmetrica non vuol dire «non simmetrica»
> Sono due proprietà diverse, e una non è il contrario dell'altra.
> - L'uguaglianza è sia simmetrica sia antisimmetrica: ha pallini solo sulla diagonale, quindi ogni pallino è lo specchio di sé stesso, e fuori dalla diagonale non c'è niente.
> - La relazione in $\{1, 2, 3\}$ fatta dalle coppie $(1, 2)$, $(2, 1)$ e $(1, 3)$ non è né simmetrica né antisimmetrica: $(1, 3)$ non ha lo specchio $(3, 1)$, quindi non è simmetrica; $(1, 2)$ e $(2, 1)$ ci sono tutte e due con 1 diverso da 2, quindi non è antisimmetrica.

### Transitiva: i legami si passano lungo una catena

Una relazione è **transitiva** quando ogni volta che $a R b$ e $b R c$, anche $a R c$. È la proprietà delle catene: se dal primo si arriva al secondo, e dal secondo al terzo, allora c'è anche il legame diretto dal primo al terzo.

«È più alto di» è transitiva. «Divide» è transitiva: se 2 divide 4 e 4 divide 12, anche 2 divide 12. Il motivo, con i numeri: $4 = 2 \cdot 2$ e $12 = 4 \cdot 3$, quindi $12 = 2 \cdot 2 \cdot 3 = 2 \cdot 6$.

«È seduto accanto a» non è transitiva, e nemmeno «la distanza tra i due numeri è al massimo 1»: 1 e 2 hanno distanza 1, 2 e 3 hanno distanza 1, ma 1 e 3 hanno distanza 2.

Nella tabella la transitività è la proprietà più lunga da controllare. Un modo ordinato:

> [!METODO] Controllare la transitività su una tabella
> Per ogni pallino nella riga $a$ e colonna $b$, con $a$ diverso da $b$:
> 1. guarda la riga di $b$;
> 2. ogni pallino della riga di $b$ deve comparire, nella stessa colonna, anche nella riga di $a$.
>
> In parole: se $a$ è legato a $b$, allora $a$ deve essere legato a tutto ciò a cui è legato $b$. Basta un pallino che manca per dire che la relazione non è transitiva.

Prova il metodo su «divide» in $\{1, 2, 3, 4\}$. Il pallino in riga 2, colonna 4: la riga 4 ha un solo pallino, nella colonna 4, e la riga 2 ce l'ha. I pallini della riga 1 coprono già tutte le colonne, quindi per la riga 1 non c'è niente da controllare. Gli altri pallini fuori dalla diagonale sono nella riga 1. Nessun pallino manca: la relazione è transitiva.

### Le definizioni del libro

Il libro raccoglie le quattro proprietà in un elenco. Le parole sono diverse, ma i controlli sono quelli che hai appena visto.

> [!DEF] Proprietà di una relazione (pp. 153–154)
> Diremo che una relazione $R \subset X \times X$ è:
> 1. **riflessiva** se $xRx$ per ogni $x \in X$ o equivalentemente se $(x, x) \in R$ per ogni $x \in X$ o anche se $\Delta \subset R$;
> 2. **simmetrica** se ogniqualvolta $xRy$ si ha anche $yRx$ o equivalentemente se le coppie $(x, y)$ e $(y, x)$ appartengono o non appartengono entrambe a $R$;
> 3. **antisimmetrica** se dal fatto che $xRy$ e $yRx$ segue forzatamente che $x = y$ o equivalentemente che se $x \neq y$ solo una delle coppie $(x, y)$ e $(y, x)$ può appartenere ad $R$;
> 4. **transitiva** se dal fatto che $xRy$ e $yRz$ segue forzatamente che $xRz$.

**Come si legge.** Sono le quattro proprietà di prima. Nella prima, «$\Delta \subset R$» vuol dire «tutte le coppie della diagonale sono state scelte». Nella seconda, «appartengono o non appartengono entrambe» vuol dire: una coppia e il suo specchio sono tutte e due dentro o tutte e due fuori. Nella terza, «solo una delle coppie può appartenere» vuol dire: al massimo una delle due, forse nessuna.

### Che cosa fanno le relazioni che conosci

| Relazione | Riflessiva | Simmetrica | Antisimmetrica | Transitiva |
|---|:-:|:-:|:-:|:-:|
| uguaglianza | sì | sì | sì | sì |
| $\le$ tra numeri | sì | no | sì | sì |
| $<$ tra numeri | no | no | sì | sì |
| «divide» nei naturali $\N$ | sì | no | sì | sì |
| «divide» negli interi $\Z$ | sì | no | **no** | sì |
| «stesso mese di nascita» | sì | sì | no | sì |
| «distanza al massimo 1» tra interi | sì | sì | no | no |

Due righe vanno spiegate.

- **$<$ è antisimmetrica** perché non succede mai che $a < b$ e $b < a$ insieme: la condizione «se $a R b$ e $b R a$» non si verifica mai, quindi non c'è niente che possa andare storto.
- **«Divide» negli interi non è antisimmetrica.** Nei naturali sì; negli interi, che contengono anche i negativi, 1 divide $-1$ e $-1$ divide 1, perché $-1 = 1 \cdot (-1)$ e $1 = (-1) \cdot (-1)$. Due numeri diversi legati nei due sensi: la proprietà cade. È la nota 1 di p. 154 del libro.

Il libro osserva anche che la relazione «divide» nei naturali ha tutte le proprietà tranne la simmetria: per esempio 2 divide 4, ma 4 non divide 2.

::: prova In $X = \{1, 2, 3\}$ prendi la relazione $R = \{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)\}$. Quali proprietà ha?
Riflessiva: sì, ci sono tutte e tre le coppie della diagonale. Simmetrica: sì, $(1, 2)$ e $(2, 1)$ ci sono tutte e due. Antisimmetrica: no, per la stessa coppia, con 1 diverso da 2. Transitiva: sì. Le catene da controllare passano per 1 e 2. Da 1 a 2 e da 2 a 1 serve il legame da 1 a 1, che c'è. Da 2 a 1 e da 1 a 2 serve quello da 2 a 2, che c'è.
:::

::: prova La relazione «ha la stessa iniziale di», tra parole, è riflessiva? Simmetrica? Transitiva?
Sì a tutte e tre: ogni parola ha la stessa iniziale di sé stessa; se A ha la stessa iniziale di B, vale anche il contrario; se A ha la stessa iniziale di B e B di C, l'iniziale è la stessa per tutte e tre.
:::

### Le relazioni d'ordine

Le relazioni come $\le$, «divide» nei naturali e «è contenuto in» tra insiemi hanno le stesse tre proprietà: sono riflessive, antisimmetriche e transitive. Servono a mettere in ordine, anche quando non tutto si può confrontare: 2 e 3, per esempio, non si dividono l'un l'altro. Una relazione con queste tre proprietà si chiama **relazione d'ordine**. Il libro non la definisce nell'appendice, ma il nome compare nel programma del corso, nella voce sulle relazioni.

> [!RICORDA]
> - Riflessiva: tutta la diagonale. Simmetrica: tabella uguale allo specchio. Antisimmetrica: fuori dalla diagonale nessun pallino ha lo specchio. Transitiva: le catene si chiudono.
> - Antisimmetrica e simmetrica non sono una il contrario dell'altra.
> - Relazione d'ordine: riflessiva, antisimmetrica, transitiva, come $\le$.

## Essere «dello stesso tipo»: le equivalenze (p. 154)

Torna alla relazione «è nato nello stesso mese di». Ha tre proprietà:

1. **riflessiva**: ognuno è nato nello stesso mese di sé stesso;
2. **simmetrica**: se Anna è nata nello stesso mese di Bruno, Bruno è nato nello stesso mese di Anna;
3. **transitiva**: se Anna è nata nello stesso mese di Bruno, e Bruno nello stesso mese di Carla, allora Anna e Carla sono nate nello stesso mese.

Non dice che una persona viene prima di un'altra: dice che due persone sono «dello stesso tipo», cioè hanno in comune qualcosa, il mese di nascita.

> [!IDEA]
> Una relazione di equivalenza è un modo di dire «questi due elementi sono dello stesso tipo». È riflessiva, simmetrica e transitiva.

Una relazione con queste tre proprietà si chiama **relazione di equivalenza**, o più brevemente **equivalenza**. Due elementi in relazione si chiamano **equivalenti**. Se sono $x$ e $y$, si scrive $x \sim y$. Il simbolo $\sim$ si chiama «tilde» e si legge «è equivalente a».

Il libro la definisce così.

> [!DEF] A.2 · Relazione di equivalenza
> Sia $X$ un insieme non vuoto. Una relazione in $X$ che sia riflessiva, simmetrica e transitiva si dice una **relazione di equivalenza** (o più brevemente un'**equivalenza**).
> Se una relazione $R$ in $X$ è un'equivalenza e $xRy$ diremo che $x$ ed $y$ sono **equivalenti** (rispetto ad $R$) e scriveremo $x \sim y$.

**Come si legge.** Per dire che una relazione è un'equivalenza bisogna controllare tre proprietà, non una di meno. Se ne manca anche una sola, non è un'equivalenza.

### Esempi con i numeri

- **Stessa parità** negli interi: due interi sono equivalenti quando sono tutti e due pari o tutti e due dispari. $3 \sim 7$, $4 \sim -10$, ma 3 e 4 non sono equivalenti.
- **Stessa ultima cifra** nei naturali: $23 \sim 1003$, perché finiscono tutti e due con 3.
- **L'uguaglianza** è un'equivalenza: ogni elemento è dello stesso tipo solo di sé stesso.

Non sono equivalenze:

- $\le$, perché non è simmetrica: $2 \le 5$ ma non $5 \le 2$;
- «distanza al massimo 1», perché non è transitiva;
- «il primo è il doppio del secondo», perché non è nemmeno riflessiva: 3 non è il doppio di 3.

### La congruenza modulo un numero (pp. 154–155)

Questo è l'esempio più importante, perché torna in tutta la seconda metà del corso.

Prendi gli interi e il numero 3. Chiama equivalenti due interi quando la loro differenza è un multiplo di 3:

1. $7 \sim 1$, perché $7 - 1 = 6 = 3 \cdot 2$;
2. $10 \sim 4$, perché $10 - 4 = 6$;
3. $2 \sim -1$, perché $2 - (-1) = 3$;
4. 5 e 1 non sono equivalenti, perché $5 - 1 = 4$ non è un multiplo di 3.

Un modo più comodo di vederlo: due naturali sono equivalenti esattamente quando danno lo stesso resto nella divisione per 3. 7 e 1 danno resto 1; 10 e 4 danno resto 1; 5 dà resto 2.

È come un orologio con 3 ore, numerate 0, 1, 2: contando 0, 1, 2, 3, 4, 5, 6, 7 sulle tre ore si torna sempre al punto di partenza ogni 3 passi, e 7 finisce sulla stessa ora di 1.

Al posto di 3 si può usare qualunque intero $N$ maggiore di 1. Il libro chiama questa relazione $M_N$:

$$M_N = \{(m, n) \in \Z \times \Z \text{ tali che } N \text{ divide } m - n\}$$

**Come si legge.** $M_N$ è l'insieme delle coppie di interi $(m, n)$ la cui differenza $m - n$ è un multiplo di $N$. La $\Z$ si legge «zeta» ed è l'insieme degli interi, positivi, negativi e zero.

Perché è un'equivalenza? Il libro controlla le tre proprietà. Ecco i suoi tre passi, prima con $N = 3$ e i numeri, poi in generale.

1. **Riflessiva.** Ogni numero è equivalente a sé stesso: $7 - 7 = 0$, e 0 è un multiplo di 3, perché $0 = 3 \cdot 0$. In generale $m - m = 0$, che è un multiplo di qualunque $N$.
2. **Simmetrica.** $7 \sim 1$ perché $7 - 1 = 6$. Al contrario $1 - 7 = -6 = 3 \cdot (-2)$, ancora un multiplo di 3. In generale, se $m - n$ è un multiplo di $N$, anche $n - m$, che è lo stesso numero con il segno cambiato, è un multiplo di $N$.
3. **Transitiva.** $10 \sim 4$ e $4 \sim 1$, perché $10 - 4 = 6$ e $4 - 1 = 3$. Allora $10 - 1 = (10 - 4) + (4 - 1) = 6 + 3 = 9$, ancora un multiplo di 3. In generale $m - p = (m - n) + (n - p)$, e la somma di due multipli di $N$ è un multiplo di $N$.

> [!NOTA] Dove torna
> Questa relazione si chiama **congruenza modulo $N$**. Nel capitolo 7 del libro si scrive $m \equiv n \pmod N$ e diventa il cuore dell'aritmetica modulare: classi di resto, inversi, congruenze lineari. Sono esercizi presenti in ogni appello.

::: prova Con la congruenza modulo 5, quali sono vere? (a) $12 \sim 2$; (b) $13 \sim 3$; (c) $-1 \sim 4$; (d) $6 \sim 16$.
(a) Vera: $12 - 2 = 10 = 5 \cdot 2$. (b) Vera: $13 - 3 = 10$. (c) Vera: $-1 - 4 = -5 = 5 \cdot (-1)$. (d) Vera: $6 - 16 = -10$.
:::

::: prova Nei naturali, «$m \sim n$ quando $m + n$ è pari» è un'equivalenza?
Sì. $m + n$ è pari esattamente quando $m$ e $n$ sono tutti e due pari o tutti e due dispari: è la relazione «stessa parità». Per controllo: riflessiva, perché $m + m = 2m$ è pari; simmetrica, perché $m + n = n + m$; transitiva, perché «stessa parità» si passa lungo le catene.
:::

> [!RICORDA]
> - Equivalenza = riflessiva + simmetrica + transitiva. Si scrive $x \sim y$.
> - Vuol dire «dello stesso tipo»: stesso mese, stessa parità, stessa ultima cifra.
> - Congruenza modulo $N$: $m \sim n$ quando $N$ divide $m - n$, cioè (nei naturali) quando danno lo stesso resto nella divisione per $N$.

## Dalle equivalenze ai cassetti: le classi (p. 155)

Prendi la tua classe e raggruppa le persone secondo il mese di nascita: tutti quelli nati a marzo in un gruppo, tutti quelli nati a luglio in un altro, e così via. Ogni persona finisce in un gruppo e in uno solo; nessun gruppo è vuoto, perché un gruppo nasce solo quando c'è qualcuno nato in quel mese. È una **partizione**, come i calzini nei cassetti della lezione D02.

Ricorda i tre controlli della lezione D02 per una partizione: le parti coprono tutto, nessuna parte è vuota, due parti diverse non hanno elementi in comune.

> [!IDEA]
> Ogni equivalenza divide l'insieme in gruppi di elementi equivalenti tra loro. Questi gruppi formano sempre una partizione.

### La classe di un elemento

Il gruppo degli elementi equivalenti a un elemento $x$ si chiama **classe di equivalenza** di $x$ e si scrive $[x]$, che si legge «classe di $x$». È la stessa scrittura dei cassetti della lezione D02, e non per caso.

Prendi cinque persone. Anna e Carla sono nate a marzo, Bruno ed Elena a luglio, Dario a novembre. Le classi sono queste.

- $[\text{Anna}] = \{\text{Anna}, \text{Carla}\}$: le persone nate a marzo;
- $[\text{Bruno}] = \{\text{Bruno}, \text{Elena}\}$: le persone nate a luglio;
- $[\text{Dario}] = \{\text{Dario}\}$: è l'unico nato a novembre;
- $[\text{Carla}] = \{\text{Anna}, \text{Carla}\}$: la stessa classe di Anna, nominata con un'altra persona.

La tabella della relazione «stesso mese» ha i pallini a blocchi:

| stesso mese | Anna | Carla | Bruno | Elena | Dario |
|---|:-:|:-:|:-:|:-:|:-:|
| **Anna** | ● | ● | | | |
| **Carla** | ● | ● | | | |
| **Bruno** | | | ● | ● | |
| **Elena** | | | ● | ● | |
| **Dario** | | | | | ● |

Ho messo vicine le persone della stessa classe: ogni blocco di pallini è una classe. Succede con ogni equivalenza, se si ordinano gli elementi per classe.

Con la congruenza modulo 3 negli interi le classi sono tre:

- $[0] = \{\dots, -6, -3, 0, 3, 6, 9, \dots\}$: i multipli di 3;
- $[1] = \{\dots, -5, -2, 1, 4, 7, 10, \dots\}$: i numeri che superano un multiplo di 3 di 1;
- $[2] = \{\dots, -4, -1, 2, 5, 8, 11, \dots\}$: quelli che lo superano di 2.

Ogni intero sta in una di queste tre classi. E $[4]$ non è una classe nuova: $4 \sim 1$, quindi $[4] = [1]$.

Il libro scrive la classe così:

$$[x] = \{y \in X \text{ tali che } x \sim y\} \subset X$$

**Come si legge.** $[x]$ è l'insieme degli elementi $y$ di $X$ equivalenti a $x$. È un sottoinsieme di $X$.

### Due elementi equivalenti hanno la stessa classe

Anna e Carla sono nate nello stesso mese, e le loro classi sono uguali. Non è un caso: se $x \sim y$, allora $[x] = [y]$.

Il motivo, a parole: se Anna e Carla sono nate nello stesso mese, chiunque sia nato nello stesso mese di Carla è nato nello stesso mese di Anna, e viceversa. La transitività sposta i legami da Carla ad Anna, la simmetria permette di girarli.

> [!DIM] perché $x \sim y$ dà $[x] = [y]$ (p. 155)
> 1. Prendi un elemento $z$ di $[y]$: vuol dire $y \sim z$. Siccome $x \sim y$, per la transitività $x \sim z$, cioè $z$ sta in $[x]$. Quindi $[y] \subset [x]$.
> 2. Per la simmetria, da $x \sim y$ viene anche $y \sim x$. Rifai il passo 1 con i ruoli di $x$ e $y$ scambiati: ogni elemento di $[x]$ sta in $[y]$. Quindi $[x] \subset [y]$.
> 3. Con i due contenimenti, le classi sono uguali: è la doppia inclusione della lezione D01.

### Le classi formano una partizione

Il libro lo chiama «importante risultato».

> [!TEOREMA] A.3 · Classi di equivalenza e partizioni
> Sia $X$ un insieme non vuoto e sia $R$ un'equivalenza in $X$. Allora le classi di equivalenza degli elementi di $X$ definiscono una partizione di $X$.

**Come si legge.** Se raggruppi gli elementi «dello stesso tipo», ottieni sempre una divisione dell'insieme in cassetti: ognuno sta in un cassetto, nessun cassetto è vuoto, due cassetti diversi non hanno niente in comune.

> [!DIM] i tre controlli della partizione
> 1. **Nessun cassetto è vuoto.** Ogni classe $[x]$ contiene almeno $x$, perché $x \sim x$ per la proprietà riflessiva.
> 2. **I cassetti coprono tutto.** Ogni elemento $x$ di $X$ sta in una classe, la sua: $[x]$.
> 3. **Due cassetti diversi non si toccano.** Supponi che due classi $[x]$ e $[y]$ abbiano un elemento $z$ in comune. Allora $x \sim z$ e $y \sim z$. Per la simmetria $z \sim y$, e per la transitività $x \sim y$. Ma allora, per quello che hai visto sopra, $[x] = [y]$: è la stessa classe. Quindi due classi o sono uguali o non hanno niente in comune.

L'insieme delle classi è l'**insieme quoziente** della lezione D02, l'insieme dei cassetti. Quando la partizione viene da un'equivalenza $\sim$ si scrive $X/\!\sim$, che si legge «$X$ quoziente tilde».

- Per «stesso mese», tra le cinque persone, il quoziente ha tre elementi: il cassetto di marzo, quello di luglio e quello di novembre.
- Per la congruenza modulo 3, il quoziente di $\Z$ ha tre elementi: $[0]$, $[1]$ e $[2]$. Il libro, nel capitolo 7, lo chiama $\Z_3$, l'insieme delle classi di resto modulo 3. Allo stesso modo, modulo $N$ le classi sono $N$: $[0], [1], \dots, [N - 1]$.

### E al contrario: dai cassetti all'equivalenza

Vale anche il contrario. Se hai già una partizione, chiama equivalenti due elementi quando stanno **nello stesso cassetto**. Questa relazione è un'equivalenza:

- ognuno sta nel suo stesso cassetto: riflessiva;
- se un elemento sta nel cassetto di un altro, anche l'altro sta nel cassetto del primo: simmetrica;
- se il primo sta con il secondo e il secondo con il terzo, sono tutti e tre nello stesso cassetto, perché il secondo sta in un cassetto solo: transitiva.

Le sue classi sono proprio i cassetti di partenza. Quindi equivalenze e partizioni sono due modi di dire la stessa cosa: dare un'equivalenza vuol dire dividere l'insieme in cassetti, e viceversa.

> [!ESEMPIO] Tutte le equivalenze di $\{1, 2, 3\}$
> Nella lezione D02 hai contato le partizioni di $\{1, 2, 3\}$: sono cinque. Quindi le equivalenze in $\{1, 2, 3\}$ sono cinque, una per partizione.
> 1. Un cassetto solo, $\{1, 2, 3\}$: tutti equivalenti a tutti, la relazione è tutto $X \times X$, 9 coppie.
> 2. $\{1, 2\}$ e $\{3\}$: le coppie della diagonale più $(1, 2)$ e $(2, 1)$.
> 3. $\{1, 3\}$ e $\{2\}$: la diagonale più $(1, 3)$ e $(3, 1)$.
> 4. $\{2, 3\}$ e $\{1\}$: la diagonale più $(2, 3)$ e $(3, 2)$.
> 5. Tre cassetti con un elemento: solo la diagonale, cioè l'uguaglianza.

::: prova In $X = \{1, 2, 3, 4, 5, 6\}$ prendi la congruenza modulo 2. Quali sono le classi? Quanti elementi ha il quoziente?
$[1] = \{1, 3, 5\}$, i dispari, e $[2] = \{2, 4, 6\}$, i pari. Il quoziente ha due elementi.
:::

::: prova La partizione di $\{a, b, c, d\}$ in $\{a, d\}$ e $\{b, c\}$ da quale equivalenza viene? Scrivi le sue coppie.
Da «stare nello stesso cassetto». Le coppie sono otto. Ci sono le quattro della diagonale, una per lettera. Poi $(a, d)$ e $(d, a)$. Poi $(b, c)$ e $(c, b)$.
:::

> [!RICORDA]
> - La classe $[x]$ è l'insieme degli elementi equivalenti a $x$. Se $x \sim y$, allora $[x] = [y]$.
> - Le classi di un'equivalenza formano una partizione; l'insieme delle classi è il quoziente $X/\!\sim$.
> - Ogni partizione dà un'equivalenza, «stare nello stesso cassetto»: equivalenze e partizioni si corrispondono una a una.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $(a, b)$ | «la coppia $a$, $b$» | due oggetti in fila, l'ordine conta | $(1, 2) \neq (2, 1)$ |
| $(a, b, c)$ | «la terna $a$, $b$, $c$» | tre oggetti in fila | $(5, 10, 2026)$ |
| $\{a, b\}$ | «l'insieme di $a$ e $b$» | un insieme, l'ordine non conta | $\{1, 2\} = \{2, 1\}$ |
| $A \times B$ | «$A$ per $B$», «$A$ cartesiano $B$» | tutte le coppie con il primo pezzo in $A$ e il secondo in $B$ | $\{1\} \times \{2, 3\} = \{(1, 2), (1, 3)\}$ |
| $A^2$ | «$A$ al quadrato» | $A \times A$ | $\R^2$ è il piano |
| $\lvert A \rvert$ | «cardinalità di $A$» | il numero di elementi di $A$ | $\lvert A \times B \rvert = \lvert A \rvert \cdot \lvert B \rvert$ |
| $\in$, $\notin$ | «appartiene a», «non appartiene a» | è, o non è, un elemento di | $(1, 2) \in \{1\} \times \{2\}$ |
| $\subset$ | «è contenuto in» | è un sottoinsieme | $\{(1, 2)\} \subset \{1\} \times \{2\}$ |
| $\emptyset$ | «insieme vuoto» | l'insieme senza elementi | $\emptyset \times B = \emptyset$ |
| $\neq$ | «diverso da» | non uguale | $(1, 2) \neq (2, 1)$ |
| $\N$, $\Z$, $\R$ | «enne», «zeta», «erre» | naturali, interi, reali | $-3 \in \Z$ |
| $a R b$ | «$a$ è in relazione con $b$» | la coppia $(a, b)$ sta nella relazione $R$ | $2 \mid 6$ |
| $\Delta$ | «delta», «diagonale» | le coppie $(x, x)$ | $(3, 3) \in \Delta$ |
| $m \mid n$ | «$m$ divide $n$» | $n$ è un multiplo di $m$ | $3 \mid 12$ |
| $\le$, $<$ | «minore o uguale a», «minore di» | l'ordine tra numeri | $2 \le 2$, $2 < 3$ |
| $x \sim y$ | «$x$ è equivalente a $y$» | $x$ e $y$ sono in relazione per un'equivalenza | $7 \sim 1$ modulo 3 |
| $M_N$ | «emme enne» | la congruenza modulo $N$: $N$ divide $m - n$ | $(7, 1) \in M_3$ |
| $[x]$ | «classe di $x$» | gli elementi equivalenti a $x$ | $[1] = \{\dots, -2, 1, 4, 7, \dots\}$ modulo 3 |
| $X/\!\sim$ | «$X$ quoziente tilde» | l'insieme delle classi | $\Z/M_3 = \{[0], [1], [2]\}$ |
| $\forall$ | «per ogni» | per tutti (nei riquadri del libro) | $\forall i = 1, \dots, n$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 05/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26 dicono così.

**Com'è fatta la prova**

- **10 domande a risposta multipla**, ognuna con 5 risposte e una sola giusta. Una risposta giusta vale 1 punto; una sbagliata o vuota vale 0.
- **2 problemi** a risposta aperta, divisi in più domande con il punteggio scritto accanto.
- **Sbarramento.** Con meno di 6 punti nel quiz la prova non è superata, e i problemi non vengono corretti.
- **Sufficienza:** almeno 18 punti in tutto. **Durata:** 2 ore.
- **Materiale ammesso:** libro di testo e appunti del corso, e una calcolatrice non programmabile.

| Appello 2026/27 | Iscrizioni su MyUniTo (appello «M.D.A.G.1») | Ora |
|---|---|---|
| mar 19/01/2027 | 30/12/2026 – 12/01/2027 | 14:00 |
| mer 03/02/2027 | 14/01 – 27/01/2027 | 14:00 |

Dettagli e fonti nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa serve di questa lezione**

1. **Domanda 2 del quiz: il prodotto cartesiano.** È una delle domande più regolari: nei quiz degli appelli del 14/01/2025 (in quale prodotto sta una terna), 07/07/2025 (domanda 1), 13/01/2026, 03/02/2026 (quale insieme non è un sottoinsieme di $P \times Q$), 06/06/2026 e 01/07/2026. Si risolve con il metodo della sezione «Elemento, coppia o sacchetto di coppie». Sono punti sicuri, se non ti fai ingannare dalle graffe e dall'ordine dei fattori.
2. **Relazioni di equivalenza.** Negli appelli dal 2021 al 2026 non ho trovato domande che chiedano direttamente le proprietà di una relazione. Ma le classi di equivalenza della congruenza modulo $N$ sono le **classi di resto**, che sono in ogni appello: inversi in $\Z_n$, congruenze lineari, gruppi $\Z_n$. Capire adesso che $[4] = [1]$ modulo 3 rende molto più facile la seconda metà del corso.
3. **Il conto $|A \times B| = |A| \cdot |B|$** è la base della combinatoria, che occupa una domanda o due del quiz in ogni appello.

**Una domanda vera, letta insieme**

> [!ESEMPIO] Appello del 03/02/2026, domanda 2
> Il testo: «Siano $P = \{1, 3, 4, 7, 8\}$ e $Q = \{2, 3, 5, 6, 9\}$. Quale dei seguenti insiemi NON è un sottoinsieme di $P \times Q$?
> 1. $\{(3, 3)\}$;
> 2. $\{(8, 3), (3, 9)\}$;
> 3. $\emptyset$;
> 4. $\{(1, 3), (6, 7), (8, 2)\}$;
> 5. $\{(4, 6), (1, 9), (7, 5)\}$.»
>
> In pratica chiede: in quale sacchetto c'è almeno una coppia che non sta in $P \times Q$? Per ogni coppia controlla che il primo pezzo stia in $P$ e il secondo in $Q$.
>
> 1. $(3, 3)$: 3 sta in $P$ e in $Q$. Va bene.
> 2. $(8, 3)$ e $(3, 9)$: 8 e 3 stanno in $P$; 3 e 9 stanno in $Q$. Va bene.
> 3. Il vuoto è sottoinsieme di qualunque insieme. Va bene.
> 4. $(1, 3)$ va bene, ma $(6, 7)$ no: 6 non sta in $P$ (e 7 non sta in $Q$). **È la risposta.**
> 5. $(4, 6)$, $(1, 9)$, $(7, 5)$: tutti i primi pezzi in $P$, tutti i secondi in $Q$. Va bene.
>
> La trappola è la risposta 3: il vuoto sembra «niente», ma è un sottoinsieme di tutto.

**Errori da evitare**

- Scambiare l'ordine dei pezzi: $(7, 6)$ non è $(6, 7)$.
- Non guardare in che ordine sono scritti i fattori nella risposta, $S \times T$ o $T \times S$.
- Scrivere $\{a, b\} \in A \times B$: un insieme di due oggetti non è una coppia.
- Dimenticare che il vuoto è contenuto in ogni prodotto, ma non è un suo elemento.
- Dire che una relazione è un'equivalenza dopo aver controllato solo una o due proprietà.
- Confondere antisimmetrica con «non simmetrica».

> [!ESAME] Che cosa scrivere sul foglio di riepilogo
> Alla prova puoi portare libro e appunti, ma il tempo è poco. Da questa lezione conviene avere pronti: la tabella «elemento, coppia o sacchetto di coppie», le quattro proprietà con il modo di leggerle sulla tabella, e le classi della congruenza modulo 3 come esempio.

## Quiz

```quiz
D: (Appello del 01/07/2026, domanda 2) Siano $R = \{1, 4, 6, 8\}$ e $S = \{2, 5, 7, 8\}$. Allora
- $(8, 8) \notin R \times S$
- $(1, 2) \notin R \times S$
- $\{6, 7\} \in R \times S$
- $(7, 6) \in R \times S$
+ $(4, 5) \in R \times S$
= 4 sta in $R$ e 5 sta in $S$, quindi $(4, 5) \in R \times S$. $(8, 8)$ invece sta nel prodotto, perché 8 sta in tutti e due gli insiemi: la frase con $\notin$ è falsa. Lo stesso per $(1, 2)$, che sta nel prodotto. $\{6, 7\}$ è un insieme, non una coppia, quindi non può essere un elemento di $R \times S$. La più tentatrice è $(7, 6)$: i numeri sono quelli giusti, ma in ordine scambiato, e 7 non sta in $R$.

D: (Appello del 13/01/2026, domanda 2) Siano $R = \{2, 5, 6, 9\}$ e $S = \{d, g, n, z\}$. Allora
+ $(g, 6) \notin R \times S$
- $(d, z) \in R \times S$
- $(5, 6, g) \in R \times S$
- $(3, n) \in R \times S$
- $(2, d) \notin R \times S$
= In $R \times S$ il primo pezzo è un numero di $R$ e il secondo una lettera di $S$. $(g, 6)$ ha una lettera al primo posto, quindi non ci sta: la frase con $\notin$ è vera. $(d, z)$ ha due lettere: $d$ non sta in $R$. $(5, 6, g)$ è una terna, non una coppia. $(3, n)$: 3 non sta in $R$. La più tentatrice è $(2, d) \notin R \times S$: la coppia è scritta bene e sta nel prodotto, quindi la frase con $\notin$ è falsa.

D: (Appello del 03/02/2026, domanda 2) Siano $P = \{1, 3, 4, 7, 8\}$ e $Q = \{2, 3, 5, 6, 9\}$. Quale dei seguenti insiemi NON è un sottoinsieme di $P \times Q$?
- $\{(3, 3)\}$
- $\{(8, 3), (3, 9)\}$
- $\emptyset$
+ $\{(1, 3), (6, 7), (8, 2)\}$
- $\{(4, 6), (1, 9), (7, 5)\}$
= La coppia $(6, 7)$ non sta in $P \times Q$: 6 non sta in $P$. Basta una coppia fuori perché il sacchetto non sia un sottoinsieme. In tutte le altre risposte ogni coppia ha il primo pezzo in $P$ e il secondo in $Q$. La più tentatrice è $\emptyset$: sembra un intruso, ma il vuoto è un sottoinsieme di qualunque insieme.

D: (Appello del 06/06/2026, domanda 2) Siano $X = \{\beta, \delta, \rho, \omega\}$ e $Y = \{2, 3, 6, 8, 9\}$. Allora
- $(6, \rho) \in X \times Y$
+ $(\omega, 4) \notin X \times Y$
- $\emptyset \in X \times Y$
- $(\delta, 2) \notin X \times Y$
- $\beta \in X \times Y$
= Le lettere greche stanno in $X$ e vanno al primo posto. $(\omega, 4)$ non sta nel prodotto perché 4 non sta in $Y$: la frase con $\notin$ è vera. $(6, \rho)$ ha i pezzi in ordine scambiato. Il vuoto non è una coppia, quindi non è un elemento del prodotto (è un sottoinsieme, che è un'altra cosa). $(\delta, 2)$ sta nel prodotto, quindi la frase con $\notin$ è falsa: è la più tentatrice. $\beta$ è un oggetto solo, non una coppia.

D: (Appello del 07/07/2025, domanda 1) Siano $A = \{a, d, h, m\}$ e $B = \{c, g, p, t\}$. Allora:
- $(d, m) \in A \times B$
- $g \in A \times B$
- $(p, m) \in A \times B$
- $\{a, t\} \subset A \times B$
+ $(h, t) \in A \times B$
= $h$ sta in $A$ e $t$ sta in $B$: la coppia $(h, t)$ sta nel prodotto. $(d, m)$ ha due lettere di $A$: $m$ non sta in $B$. $g$ è una lettera sola. $(p, m)$ è al contrario: $p$ sta in $B$ e $m$ in $A$. La più tentatrice è $\{a, t\} \subset A \times B$: le lettere sono giuste, ma il sacchetto contiene lettere, non coppie; sarebbe vera $\{(a, t)\} \subset A \times B$.

D: (Appello del 14/01/2025, domanda 2) Siano $A = \{1, 2, 5, 8\}$ e $B = \{2, 3, 8, 9\}$. Allora la terna $(1, 2, 5)$ è un elemento in
- $B \times A \times A$
+ $A \times B \times A$
- $B \times B \times B$
- $B \times B \times A$
- $A \times A \times B$
= Controlla un pezzo alla volta. Il primo pezzo, 1, sta solo in $A$: il primo fattore deve essere $A$. Il secondo, 2, sta in tutti e due. Il terzo, 5, sta solo in $A$: anche il terzo fattore deve essere $A$. Tra le risposte, solo $A \times B \times A$ ha $A$ al primo e al terzo posto. $A \times A \times B$ è la più tentatrice: comincia bene, ma 5 non sta in $B$.

D: Se $|A| = 4$ e $|B| = 6$, quanti elementi ha $A \times B$?
- $10$
+ $24$
- $4^6$
- $6^4$
- $2$
= Le coppie formano un rettangolo di 4 righe e 6 colonne: $4 \cdot 6 = 24$. Il 10 è la somma, che conterebbe gli elementi di $A$ e di $B$ messi insieme, non le coppie. Le potenze contano altre cose, che vedrai in combinatoria. Il 2 è la differenza.

D: In $X = \{1, 2, 3\}$ prendi $R = \{(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)\}$. Quale proprietà ha $R$?
- È simmetrica.
- È transitiva.
+ È riflessiva e antisimmetrica.
- È un'equivalenza.
- Non è riflessiva.
= La diagonale c'è tutta: riflessiva. Fuori dalla diagonale ci sono $(1, 2)$ e $(2, 3)$, e nessuno dei due ha lo specchio: antisimmetrica, e non simmetrica. Non è transitiva: da $(1, 2)$ e $(2, 3)$ servirebbe $(1, 3)$, che manca. Quindi non è nemmeno un'equivalenza. La risposta «è transitiva» è la più tentatrice: la catena da 1 a 3 si vede solo se la cerchi.

D: Quale di queste relazioni negli interi è un'equivalenza?
- $m \le n$
- $m$ divide $n$
+ $m - n$ è un multiplo di 4
- la distanza tra $m$ e $n$ è al massimo 1
- $m = 2n$
= La congruenza modulo 4 è riflessiva, simmetrica e transitiva. $\le$ non è simmetrica. «Divide» non è simmetrica. «Distanza al massimo 1» è riflessiva e simmetrica, ma non transitiva: 0 e 1, 1 e 2, ma non 0 e 2. È la più tentatrice. $m = 2n$ non è nemmeno riflessiva, perché per esempio 3 non è il doppio di 3.

D: Con la congruenza modulo 3 negli interi, quale di queste uguaglianze tra classi è vera?
- $[2] = [5] = [7]$
+ $[1] = [4] = [-2]$
- $[0] = [1]$
- $[3] = [6] = [10]$
- $[-1] = [1]$
= Due interi hanno la stessa classe quando la loro differenza è un multiplo di 3. $4 - 1 = 3$ e $1 - (-2) = 3$: quindi $[1] = [4] = [-2]$. Nella prima, $7 - 5 = 2$ non è un multiplo di 3. Nella quarta, $10 - 6 = 4$ non lo è. $[0] = [1]$ è falsa perché la differenza è 1. La più tentatrice è $[-1] = [1]$: sembra simmetrica, ma $1 - (-1) = 2$ non è un multiplo di 3; infatti $[-1] = [2]$.

D: Quante relazioni di equivalenza ci sono nell'insieme $\{1, 2, 3\}$?
- $3$
+ $5$
- $8$
- $9$
- $512$
= Ogni equivalenza corrisponde a una partizione, e le partizioni di un insieme con 3 elementi sono 5 (lezione D02). 512 è il numero di tutte le relazioni, $2^9$, perché $X \times X$ ha 9 coppie: è la più tentatrice per chi confonde relazioni ed equivalenze. 8 è il numero dei sottoinsiemi di $\{1, 2, 3\}$ e 9 il numero delle coppie.

D: Una relazione $R$ in $X$ è riflessiva e transitiva. Che cosa serve ancora perché sia un'equivalenza?
- Che sia antisimmetrica.
+ Che sia simmetrica.
- Niente: è già un'equivalenza.
- Che non sia antisimmetrica.
- Che $X$ sia finito.
= Un'equivalenza è riflessiva, simmetrica e transitiva: manca la simmetria. Se fosse antisimmetrica sarebbe invece una relazione d'ordine, come $\le$: è la risposta più tentatrice. «Non antisimmetrica» non basta: la relazione delle coppie $(1, 2)$, $(2, 1)$, $(1, 3)$ con la diagonale non è antisimmetrica, e nemmeno simmetrica.
```

## Esercizi

::: esercizio base Scrivere un prodotto cartesiano
Con $A = \{x, y\}$ e $B = \{1, 2, 3\}$, scrivi $A \times B$ e $B \times A$. Quanti elementi hanno? Hanno elementi in comune?
::: soluzione
1. Fisso $x$ e lo accoppio con 1, 2, 3; poi faccio lo stesso con $y$: $A \times B = \{(x, 1), (x, 2), (x, 3), (y, 1), (y, 2), (y, 3)\}$.
2. Ora il primo pezzo viene da $B$: $B \times A = \{(1, x), (1, y), (2, x), (2, y), (3, x), (3, y)\}$.
3. Tutti e due hanno $2 \cdot 3 = 6$ elementi.
4. Nessun elemento in comune: in $A \times B$ ogni coppia comincia con una lettera, in $B \times A$ con un numero.
:::

::: esercizio base Vero o falso sul prodotto cartesiano
Con $S = \{a, e, i, o, u\}$ e $T = \{0, 1, 8, 9\}$, di' se sono vere: (a) $(o, 7) \in S \times T$; (b) $(8, u) \in S \times T$; (c) $\{(e, 8)\} \subset S \times T$; (d) $\{i, 1\} \subset S \times T$; (e) $\emptyset \subset T \times S$.
::: soluzione
1. (a) Falsa: 7 non sta in $T$.
2. (b) Falsa: il primo pezzo deve stare in $S$, e 8 è un numero. Starebbe in $T \times S$.
3. (c) Vera: $\{(e, 8)\}$ è un sacchetto con una coppia, e la coppia ha $e$ in $S$ e 8 in $T$.
4. (d) Falsa: il sacchetto contiene la lettera $i$ e il numero 1, non coppie.
5. (e) Vera: il vuoto è contenuto in ogni insieme.
:::

::: esercizio base Contare le coppie
Un codice è fatto di una lettera tra A, B, C, D seguita da una cifra da 0 a 9. Quanti codici ci sono? E se dopo la cifra c'è un'altra lettera tra A, B, C, D?
::: soluzione
1. Un codice lettera-cifra è una coppia di $\{A, B, C, D\} \times \{0, 1, \dots, 9\}$. Sono $4 \cdot 10 = 40$.
2. Con la seconda lettera il codice diventa una terna di $\{A, B, C, D\} \times \{0, \dots, 9\} \times \{A, B, C, D\}$. Sono $4 \cdot 10 \cdot 4 = 160$.
:::

::: esercizio base Leggere le proprietà su una tabella
In $X = \{1, 2, 3, 4\}$ prendi la relazione «il primo è minore o uguale al secondo». Disegna la tabella e di' quali proprietà ha.
::: soluzione
La tabella, con le righe per il primo numero:

| $\le$ | 1 | 2 | 3 | 4 |
|---|:-:|:-:|:-:|:-:|
| **1** | ● | ● | ● | ● |
| **2** | | ● | ● | ● |
| **3** | | | ● | ● |
| **4** | | | | ● |

1. Riflessiva: tutta la diagonale ha il pallino.
2. Simmetrica: no. Per esempio c'è $(1, 2)$ ma non $(2, 1)$.
3. Antisimmetrica: sì. Tutti i pallini fuori dalla diagonale stanno sopra la diagonale, quindi nessuno ha lo specchio.
4. Transitiva: sì. Con il metodo: se c'è un pallino nella riga $a$ e colonna $b$, cioè $a \le b$, la riga di $b$ comincia dalla colonna $b$, e la riga di $a$ comincia prima, dalla colonna $a$: quindi contiene tutti i pallini della riga di $b$.
5. È una relazione d'ordine.
:::

::: esercizio base Classi della congruenza modulo 4
Scrivi le classi della congruenza modulo 4 negli interi, con almeno cinque elementi ciascuna. In quale classe stanno 17, 100 e $-3$?
::: soluzione
Due interi sono equivalenti quando la differenza è un multiplo di 4. Le classi sono quattro:

- $[0] = \{\dots, -8, -4, 0, 4, 8, 12, \dots\}$;
- $[1] = \{\dots, -7, -3, 1, 5, 9, 13, \dots\}$;
- $[2] = \{\dots, -6, -2, 2, 6, 10, 14, \dots\}$;
- $[3] = \{\dots, -5, -1, 3, 7, 11, 15, \dots\}$.

Ora i tre numeri.

1. $17 = 4 \cdot 4 + 1$, quindi $17 - 1 = 16$ è un multiplo di 4: 17 sta in $[1]$.
2. $100 = 4 \cdot 25$: sta in $[0]$.
3. $-3 - 1 = -4$, un multiplo di 4: $-3$ sta in $[1]$.
:::

::: esercizio medio Esercizio 1.13 del libro
Prendi $A = \{a, g, h, i, p, u, v\}$, $B = \{b, g, l, m, n, q, v, z\}$, $C = \{d, e, f, m, n, o, q, r, s, v\}$, $D = \{c, d, e, h, i, p, r, t, u, z\}$. Di' quali sono vere: (a) $A \cap B \subset C$; (b) $\{d, e\} \in P(C \cap D)$; (c) $(A \times B) \cap (C \times D) = \emptyset$; (d) $(v, v) \in (A \times B) \setminus (B \times C)$; (e) $(e, p) \in A \times D$; (f) $\{b, l, u\} \subset P(B \cup D)$.
::: soluzione
1. (a) $A \cap B = \{g, v\}$. La $g$ non sta in $C$. **Falsa.**
2. (b) $C \cap D = \{d, e, r\}$. Ricorda che $P(\cdot)$ è l'insieme delle parti, cioè di tutti i sottoinsiemi (lezione D01). $\{d, e\}$ è un sottoinsieme di $\{d, e, r\}$, quindi è un elemento di $P(C \cap D)$. **Vera.**
3. (c) Una coppia sta in tutti e due i prodotti quando il primo pezzo sta in $A$ e in $C$, e il secondo in $B$ e in $D$. $A \cap C = \{v\}$ e $B \cap D = \{z\}$: la coppia $(v, z)$ sta in tutti e due i prodotti. L'intersezione non è vuota. **Falsa.**
4. (d) Leggo il lato destro come $(A \times B) \setminus (B \times C)$. $(v, v)$ sta in $A \times B$, perché $v$ sta in $A$ e in $B$. Ma sta anche in $B \times C$, perché $v$ sta in $B$ e in $C$. Quindi la differenza la toglie. **Falsa.**
5. (e) La $e$ non sta in $A$. **Falsa.**
6. (f) Gli elementi di $P(B \cup D)$ sono sottoinsiemi, non lettere. $\{b, l, u\}$ contiene lettere, quindi non è contenuto in $P(B \cup D)$. **Falsa.** Sarebbe vera $\{b, l, u\} \in P(B \cup D)$: $b$ e $l$ stanno in $B$, $u$ sta in $D$.

Solo la (b) è vera.
:::

::: esercizio medio Una relazione senza nome
In $X = \{1, 2, 3, 4\}$ prendi $R = \{(1, 1), (2, 2), (3, 3), (4, 4), (1, 3), (3, 1), (2, 4)\}$. Quali proprietà ha? Quante coppie bisogna aggiungere, al minimo, per farla diventare un'equivalenza? Quali sono allora le classi?
::: soluzione
1. Riflessiva: sì, ci sono le quattro coppie della diagonale.
2. Simmetrica: no. C'è $(2, 4)$ ma non $(4, 2)$.
3. Antisimmetrica: no. Ci sono $(1, 3)$ e $(3, 1)$, con 1 diverso da 3.
4. Transitiva: sì. Da $(1, 3)$ e $(3, 1)$ segue $(1, 1)$, che c'è; da $(3, 1)$ e $(1, 3)$ segue $(3, 3)$, che c'è. Le catene con $(2, 4)$ si chiudono subito, perché la riga 4 ha solo $(4, 4)$.
5. Per la simmetria basta aggiungere $(4, 2)$. Ora controllo di nuovo la transitività: da $(4, 2)$ e $(2, 4)$ segue $(4, 4)$, e da $(2, 4)$ e $(4, 2)$ segue $(2, 2)$. Ci sono già. Quindi basta **una** coppia.
6. Le classi sono $\{1, 3\}$ e $\{2, 4\}$.
:::

::: esercizio medio La distanza al massimo 1
Negli interi, chiama $m$ e $n$ in relazione quando la distanza tra loro è al massimo 1, cioè quando $m - n$ è uguale a $-1$, $0$ o $1$. Controlla le quattro proprietà.
::: soluzione
1. Riflessiva: sì, $m - m = 0$.
2. Simmetrica: sì. Se $m - n$ è $-1$, $0$ o $1$, allora $n - m$ è $1$, $0$ o $-1$.
3. Antisimmetrica: no. 1 e 2 sono in relazione in tutti e due i sensi, e sono diversi.
4. Transitiva: no. 1 è in relazione con 2 e 2 con 3, ma $3 - 1 = 2$: 1 e 3 non sono in relazione.

Non è un'equivalenza. Se provi a fare i «cassetti», il 2 dovrebbe stare con l'1 e con il 3, che però non possono stare insieme.
:::

::: esercizio medio Dalla partizione all'equivalenza
Prendi la partizione di $X = \{1, 2, 3, 4, 5\}$ in $\{1, 4\}$, $\{2, 3, 5\}$. Scrivi l'equivalenza «stare nello stesso cassetto» come insieme di coppie e conta le coppie.
::: soluzione
1. Dal cassetto $\{1, 4\}$: tutte le coppie con due pezzi presi da lì, cioè $(1, 1)$, $(1, 4)$, $(4, 1)$, $(4, 4)$. Sono $2 \cdot 2 = 4$.
2. Dal cassetto $\{2, 3, 5\}$: tutte le coppie con due pezzi presi da lì. Sono $3 \cdot 3 = 9$: $(2, 2)$, $(2, 3)$, $(2, 5)$, $(3, 2)$, $(3, 3)$, $(3, 5)$, $(5, 2)$, $(5, 3)$, $(5, 5)$.
3. In tutto $4 + 9 = 13$ coppie. L'equivalenza è $\{1, 4\} \times \{1, 4\}$ unito a $\{2, 3, 5\} \times \{2, 3, 5\}$.
:::

::: esercizio medio Contare le relazioni
Quante relazioni ci sono in un insieme con 3 elementi? Quante di queste sono riflessive?
::: soluzione
1. $X \times X$ ha $3 \cdot 3 = 9$ coppie. Una relazione è un qualunque sottoinsieme di queste coppie, e un insieme con 9 elementi ha $2^9 = 512$ sottoinsiemi (lezione D02). Quindi le relazioni sono 512.
2. Una relazione riflessiva deve contenere le 3 coppie della diagonale. Per le altre $9 - 3 = 6$ coppie si sceglie liberamente «dentro» o «fuori»: $2^6 = 64$ relazioni riflessive.
:::

::: esercizio difficile Esercizio 1.17 del libro: partizioni di un prodotto
$A$ è diviso in due parti $A_1$ e $A_2$, e $B$ in due parti $B_1$ e $B_2$ (due partizioni). Dimostra che $A_1 \times B_1$, $A_1 \times B_2$, $A_2 \times B_1$, $A_2 \times B_2$ sono una partizione di $A \times B$.
::: soluzione
1. Prima un esempio: $A = \{1, 2, 3\}$ con $A_1 = \{1\}$ e $A_2 = \{2, 3\}$; $B = \{x, y\}$ con $B_1 = \{x\}$ e $B_2 = \{y\}$. I quattro pezzi sono $\{(1, x)\}$, $\{(1, y)\}$, $\{(2, x), (3, x)\}$, $\{(2, y), (3, y)\}$: sei coppie in tutto, ognuna in un pezzo solo. Funziona.
2. **Coprono tutto.** Prendi una coppia $(a, b)$ di $A \times B$. Il pezzo $a$ sta in $A_1$ oppure in $A_2$, perché sono una partizione di $A$; chiamo $A_i$ quello giusto. Allo stesso modo $b$ sta in un $B_j$. Allora $(a, b)$ sta in $A_i \times B_j$.
3. **Nessuna parte vuota.** $A_i$ e $B_j$ non sono vuoti, perché sono parti di partizioni. Prendi $a$ in $A_i$ e $b$ in $B_j$: la coppia $(a, b)$ sta in $A_i \times B_j$, che quindi non è vuoto.
4. **Nessuna sovrapposizione.** Se $(a, b)$ stesse in $A_i \times B_j$ e in $A_k \times B_l$, allora $a$ starebbe in $A_i$ e in $A_k$: siccome le $A$ sono una partizione, $A_i$ e $A_k$ sono la stessa parte. Allo stesso modo $B_j$ e $B_l$ sono la stessa parte. Quindi i due pezzi sono lo stesso pezzo.
:::

::: esercizio difficile La congruenza modulo N è un'equivalenza
Senza guardare il testo, dimostra che la relazione $M_N$ negli interi ($m \sim n$ quando $N$ divide $m - n$) è riflessiva, simmetrica e transitiva. Poi spiega perché le classi sono esattamente $N$.
::: soluzione
1. **Riflessiva:** $m - m = 0 = N \cdot 0$, un multiplo di $N$.
2. **Simmetrica:** se $m - n = N \cdot k$ per un intero $k$, allora $n - m = N \cdot (-k)$, ancora un multiplo di $N$.
3. **Transitiva:** se $m - n = N \cdot k$ e $n - p = N \cdot h$, allora $m - p = (m - n) + (n - p) = N \cdot k + N \cdot h = N \cdot (k + h)$.
4. **Le classi.** Ogni intero $m$ si scrive come un multiplo di $N$ più un resto $r$ tra 0 e $N - 1$: $m = N \cdot q + r$. Allora $m - r = N \cdot q$, quindi $m$ sta in $[r]$. I resti possibili sono $0, 1, \dots, N - 1$, quindi ci sono al massimo $N$ classi.
5. Sono proprio $N$, tutte diverse: due resti diversi tra 0 e $N - 1$ hanno una differenza compresa tra $-(N - 1)$ e $N - 1$, diversa da 0, e un numero così non è un multiplo di $N$.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra $(1, 2)$ e $\{1, 2\}$?
$(1, 2)$ è una coppia ordinata: c'è un primo e un secondo, e $(1, 2)$ è diversa da $(2, 1)$. $\{1, 2\}$ è un insieme: l'ordine non conta, e $\{1, 2\} = \{2, 1\}$.
:::

::: domanda Che cos'è $A \times B$ e quanti elementi ha?
È l'insieme di tutte le coppie con il primo pezzo in $A$ e il secondo in $B$. Se $A$ ha $m$ elementi e $B$ ne ha $n$, le coppie sono $m \cdot n$.
:::

::: domanda Perché $\{a, b\} \in A \times B$ è sempre falsa?
Perché gli elementi di $A \times B$ sono coppie, con le tonde, e $\{a, b\}$ è un insieme, con le graffe. Si scrive $(a, b) \in A \times B$, oppure $\{(a, b)\} \subset A \times B$.
:::

::: domanda Che cos'è una relazione in un insieme $X$?
Un insieme di coppie di elementi di $X$, cioè un sottoinsieme di $X \times X$. Le coppie scelte dicono quali elementi sono legati.
:::

::: domanda Come si riconoscono sulla tabella le proprietà riflessiva, simmetrica e antisimmetrica?
Riflessiva: tutta la diagonale ha il pallino. Simmetrica: la tabella è uguale alla sua immagine allo specchio rispetto alla diagonale. Antisimmetrica: fuori dalla diagonale nessun pallino ha il suo specchio.
:::

::: domanda Che cos'è una relazione di equivalenza? Fai due esempi.
Una relazione riflessiva, simmetrica e transitiva: dice che due elementi sono «dello stesso tipo». Esempi: «nato nello stesso mese» tra persone; la congruenza modulo 3 tra interi, in cui due numeri sono equivalenti quando la differenza è un multiplo di 3.
:::

::: domanda Che cosa c'entrano le equivalenze con le partizioni?
Le classi di un'equivalenza formano una partizione dell'insieme. Al contrario, ogni partizione dà un'equivalenza, «stare nello stesso cassetto». Sono due modi di descrivere la stessa cosa.
:::

::: domanda Perché due classi di equivalenza diverse non hanno elementi in comune?
Se $[x]$ e $[y]$ avessero un elemento $z$ in comune, avresti $x \sim z$ e $y \sim z$; per simmetria e transitività $x \sim y$, e allora $[x] = [y]$. Quindi due classi o sono la stessa o non si toccano.
:::

## Glossario

```glossario
Coppia ordinata | Due oggetti in fila, $(a, b)$: c'è un primo e un secondo. $(a, b)$ e $(b, a)$ sono diverse se $a$ e $b$ sono diversi.
Componente | Uno dei pezzi di una coppia o di una terna: prima componente, seconda componente.
Prodotto cartesiano | $A \times B$, l'insieme di tutte le coppie con il primo pezzo in $A$ e il secondo in $B$. Ha $\lvert A \rvert \cdot \lvert B \rvert$ elementi.
Terna, n-upla | Tre, o $n$, oggetti in fila; sono gli elementi di $A \times B \times C$, o di $A_1 \times \dots \times A_n$.
Relazione | Un sottoinsieme di $X \times X$: le coppie scelte dicono quali elementi sono legati. Si scrive $a R b$.
Diagonale | Le coppie con due pezzi uguali, $(x, x)$; il libro la chiama $\Delta$. È la relazione di uguaglianza.
Riflessiva | Ogni elemento è in relazione con sé stesso.
Simmetrica | Se $a$ è in relazione con $b$, anche $b$ è in relazione con $a$.
Antisimmetrica | Due elementi diversi non sono mai in relazione nei due sensi.
Transitiva | Se $a$ è in relazione con $b$ e $b$ con $c$, anche $a$ è in relazione con $c$.
Relazione d'ordine | Una relazione riflessiva, antisimmetrica e transitiva, come $\le$.
Relazione di equivalenza | Una relazione riflessiva, simmetrica e transitiva; si scrive $x \sim y$. Vuol dire «dello stesso tipo».
Congruenza modulo N | Negli interi, $m \sim n$ quando $N$ divide $m - n$. Il libro la chiama $M_N$.
Classe di equivalenza | $[x]$, l'insieme degli elementi equivalenti a $x$.
Insieme quoziente | L'insieme delle classi di un'equivalenza, $X/\!\sim$. Modulo $N$ negli interi è $\Z_N$.
```

## Checklist

```checklist
- So distinguere una coppia $(a, b)$ da un insieme $\{a, b\}$.
- So scrivere per esteso $A \times B$ e $B \times A$ e so che di solito sono diversi.
- So contare gli elementi di un prodotto cartesiano, anche con tre insiemi.
- So rispondere alla domanda 2 del quiz: elemento, coppia o sacchetto di coppie, e ordine dei fattori.
- So scrivere una relazione come insieme di coppie e disegnarla con una tabella.
- So controllare le proprietà riflessiva, simmetrica, antisimmetrica e transitiva, anche sulla tabella.
- So che antisimmetrica non vuol dire «non simmetrica».
- So dire quando una relazione è d'ordine e quando è di equivalenza.
- So scrivere le classi della congruenza modulo un numero piccolo e dire in quale classe sta un intero.
- So spiegare perché le classi di un'equivalenza formano una partizione, e passare da una partizione all'equivalenza.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 1 «Insiemi», pp. 13–14 (definizione 1.23, proposizione 1.24 con la dimostrazione, prodotto di $n$ insiemi, piano cartesiano), esercizi 1.13 e 1.17 (pp. 15); appendice A «Gli insiemi numerici», pp. 153–155 (definizione A.1 ed esempi, le quattro proprietà, nota 1 sulla divisibilità negli interi, definizione A.2, la relazione $M_N$, classi di equivalenza, teorema A.3 con la dimostrazione). Le definizioni e gli enunciati nei riquadri sono citati dal libro. Le tabelle con i pallini riprendono quelle di p. 18.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori): lezione 2 (prodotto cartesiano) e lezione 3 (relazioni, relazioni di equivalenza e partizioni). Gli argomenti della lezione del 05/10/2026 non erano ancora pubblicati sul Moodle del canale B quando ho scritto questi appunti.
- Quiz degli appelli di Matematica Discreta, con le soluzioni ufficiali, sulla pagina Moodle MDAG1 2025/26 ([id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), aperta agli ospiti): appelli del 14/01/2025 (domanda 2), 07/07/2025 (domanda 1), 13/01/2026, 03/02/2026, 06/06/2026 e 01/07/2026 (domanda 2), prima versione di ogni quiz.
- Programma del corso: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md), voce «Relazioni e funzioni».
- V. Bocchino, *Rigurgiti di Unicorno*, appunti di Matematica Discreta scritti da uno studente sul libro di Mori (licenza CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): sezioni 2.6 e 2.7 su prodotto cartesiano e relazioni, un riepilogo già pronto, non ufficiale.
- Le spiegazioni a parole, gli esempi della battaglia navale e dei mesi di nascita, i riquadri «Prova tu», i quiz senza data e gli esercizi senza il numero del libro sono di questi appunti.
