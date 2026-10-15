---
corso: MDAG
modulo: MD
lezione: S1
tipo: riassunto
titolo: "Settimana 1: insiemi, De Morgan, induzione e partizioni"
data: 2026-10-02
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Riassunto settimanale · Parte 1 (modA) · Matematica Discreta · Canali A, B e C · 28/09 – 02/10/2026
descrizione: >-
  Riassunto della settimana 1 di Matematica Discreta (MDAG, parte 1): insiemi, elementi e sottoinsiemi, per ogni ed
  esiste, insieme vuoto e cardinalità, insieme delle parti, unione, intersezione, differenza e complementare, leggi di
  De Morgan, assiomi di Peano e induzione, ricoprimenti, partizioni e insieme quoziente.
lede: >-
  Le due lezioni della settimana in poche pagine: le definizioni da sapere, i metodi che servono nella domanda 1 e
  nella domanda 2 del quiz, le trappole e le domande per controllarti.
materiale: libro
scheda:
  Lezioni: "[D01](D01_insiemi_induzione.html) mer 30/09 · [D02](D02_complementare_induzione_partizioni.html) ven 02/10"
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 1, pp. 1–13
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni D01 e D02 di Matematica Discreta, scritti sul libro di A. Mori, cap. 1
appunti_html: appunti/MDAG/riassunto_settimana_01_MD.html
genera_html: true
---

## In breve

- Un **insieme** è un sacchetto di oggetti, i suoi **elementi**: conta solo chi c'è dentro, non l'ordine né le ripetizioni.
- **Elemento** ($\in$) e **sottoinsieme** ($\subset$) sono due cose diverse: è il trucco di quasi tutte le domande 1 del quiz.
- Con gli insiemi si fanno **unione**, **intersezione**, **differenza** e **complementare**. Le **leggi di De Morgan** dicono come si comporta il «fuori».
- I naturali si descrivono con gli **assiomi di Peano**, e da lì viene l'**induzione**. Un insieme con $n$ elementi ha $2^n$ sottoinsiemi.
- Una **partizione** divide un insieme in parti non vuote che non si toccano: si riconosce con tre controlli.

## D01 · Insiemi e induzione (mer 30/09)

**Insiemi.**

- Si scrive con le graffe: con l'**elenco**, $\{1, 3, 5\}$, o con una **regola**, $\{n \in \N \mid n < 5\} = \{0, 1, 2, 3, 4\}$. La barra si legge «tali che».
- $\{1, 2\} = \{2, 1\} = \{1, 1, 2\}$: ordine e ripetizioni non contano.
- Un insieme può stare dentro un altro: $\{0, \{1, -1\}\}$ ha **due** elementi, lo zero e il sacchetto $\{1, -1\}$. Le graffe interne contano.
- L'**insieme vuoto** $\emptyset$ non ha elementi; $\{\emptyset\}$ invece ne ha uno, il vuoto.
- La **cardinalità** $\lvert A \rvert$ è il numero degli elementi: $\lvert \{a, b, a\} \rvert = 2$.

**Per ogni ed esiste.** $\forall$ si legge «per ogni», $\exists$ «esiste». Per dire il contrario «per ogni» diventa «esiste» e la proprietà si nega: il contrario di «tutti hanno superato l'esame» è «**almeno uno** non l'ha superato», non «nessuno». Per smontare una frase con «per ogni» basta un **controesempio**.

**Sottoinsiemi.** $B \subset A$ se **ogni** elemento di $B$ sta in $A$. Il vuoto e $A$ stesso sono sempre sottoinsiemi di $A$. Mori scrive $\subset$ anche quando i due insiemi possono essere uguali. Due insiemi sono uguali quando ognuno è contenuto nell'altro: è la **doppia inclusione**. L'**insieme delle parti** $P(A)$ ha come elementi tutti i sottoinsiemi di $A$: $P(\{a, b\}) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}$.

> [!METODO] Elemento o sottoinsieme?
> 1. Elenca gli elementi di $A$ guardando solo le virgole al primo livello di graffe.
> 2. «$x \in A$» è vera se $x$ compare **identico** in quell'elenco.
> 3. «$X \subset A$» è vera se $X$ è un insieme e **ognuno** dei suoi elementi compare nell'elenco.
>
> Con $A = \{1, 2, 3\}$: $\emptyset \subset A$ sì, $\emptyset \in A$ no; $\{1\} \subset A$ sì, $\{1\} \in A$ no; $1 \subset A$ no, perché 1 non è un insieme.

**Naturali e induzione.**

- $\N = \{0, 1, 2, \dots\}$: per Mori **lo zero è un naturale**.
- **Induzione**, come il domino: **passo base** (la proprietà vale per il primo numero) e **passo induttivo** (se vale per $n$, vale per $n + 1$). Allora vale per tutti. Il passo base non si salta.
- Esempi: $1 + 2 + \dots + n = \frac{n(n + 1)}2$; quello del libro, $1^2 + 2^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}6$.
- Un insieme con $n$ elementi ha $2^n$ sottoinsiemi: per ogni elemento la scelta è «dentro» o «fuori». Quelli di $\{1, \dots, 6\}$ che contengono 1 sono $2^5 = 32$: fissi l'1 e scegli il resto.
- Le famiglie di numeri: $\N \subset \Z \subset \Q \subset \R$. Intervalli: $(a, b)$ con gli estremi esclusi, $[a, b]$ compresi.

## D02 · Complementare, De Morgan, induzione e partizioni (ven 02/10)

L'esempio che gira per tutta la lezione: $X$ = le tessere da 1 a 10, $A$ = i pari $= \{2, 4, 6, 8, 10\}$, $B$ = i multipli di 3 $= \{3, 6, 9\}$.

| Operazione | Si legge | Contiene | Con le tessere |
|---|---|---|---|
| $A \cap B$ | «$A$ intersecato $B$» | gli elementi in $A$ **e** in $B$ | $\{6\}$ |
| $A \cup B$ | «$A$ unione $B$» | gli elementi in $A$ **oppure** in $B$, anche in tutti e due | $\{2, 3, 4, 6, 8, 9, 10\}$ |
| $A \setminus B$ | «$A$ meno $B$» | gli elementi di $A$ che non stanno in $B$ | $\{2, 4, 8, 10\}$ |
| $B \setminus A$ | «$B$ meno $A$» | l'ordine conta | $\{3, 9\}$ |
| $C_X(A)$ | «complementare di $A$ in $X$» | gli elementi di $X$ fuori da $A$ | $\{1, 3, 5, 7, 9\}$ |

- Due insiemi sono **disgiunti** se l'intersezione è vuota.
- L'intersezione è un insieme: se $A \cap B = \{6\}$ allora $6 \in A \cap B$ e $\{6\} \subset A \cap B$; sono sbagliati $6 \subset A \cap B$ e $\{6\} \in A \cap B$.
- $\lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert - \lvert A \cap B \rvert$: $5 + 3 - 1 = 7$, perché gli elementi comuni si contano una volta.
- Proprietà distributive: $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$, e la stessa con $\cap$ e $\cup$ scambiati.
- Il complementare **dipende da $X$**: $\{2, 4\}$ in $\{1, \dots, 5\}$ ha complementare $\{1, 3, 5\}$, nelle dieci tessere $\{1, 3, 5, 6, 7, 8, 9, 10\}$. Il complementare del complementare è l'insieme di partenza.

> [!TEOREMA] Leggi di De Morgan (teorema 1.18)
> $$C_X(A \cup B) = C_X(A) \cap C_X(B) \qquad C_X(A \cap B) = C_X(A) \cup C_X(B)$$

**Come si legge.** Fuori dall'unione vuol dire fuori da **tutti e due**: con le tessere $\{1, 5, 7\}$. Fuori dall'intersezione vuol dire fuori da **almeno uno**: tutte tranne la 6. Il complementare entra nella parentesi e **scambia** $\cap$ e $\cup$, come nella logica: il contrario di «piove e fa freddo» è «non piove oppure non fa freddo». Le stesse leggi valgono con la differenza: $X \setminus (A \cap B) = (X \setminus A) \cup (X \setminus B)$.

**Assiomi di Peano**, spiegati con quello che va storto quando ne manca uno:

| Regola | Senza questa regola |
|---|---|
| 1. lo zero è un naturale | — |
| 2. ogni naturale ha un successivo $s(n)$ | — |
| 3. numeri diversi hanno successivi diversi | il **cappio**: da 0 a 5, con il successivo di 5 uguale a 3, si rientra a metà strada |
| 4. lo zero non è il successivo di nessuno | l'**orologio**: dopo le 11 vengono le 0 |
| 5. un insieme che contiene 0 e passa sempre al successivo contiene tutti i naturali | i **numeri fantasma**: una seconda fila che da 0 non si raggiunge mai |

La regola 5 è il **principio di induzione**.

> [!METODO] Dimostrare per induzione
> 1. **Passo base**: controlla il primo numero, 0 oppure 1.
> 2. **Ipotesi induttiva**: supponi la proprietà vera per $n$.
> 3. **Passo induttivo**: scrivi la proprietà per $n + 1$, parti dal lato sinistro, usa l'ipotesi e arriva al lato destro.
> 4. **Conclusione**: vale per tutti i numeri dal primo in poi.
>
> Esempi della lezione: $1 + 3 + 5 + \dots + (2n - 1) = n^2$, il quadrato che cresce di una «L»; $2^n \ge n + 1$. Il paradosso dei cavalli tutti dello stesso colore si rompe nel passo da 1 a 2.

**Insieme delle parti, ricoprimenti, partizioni.**

- I sottoinsiemi di $\{1, 2, 3\}$ per grandezza sono $1 + 3 + 3 + 1 = 8 = 2^3$. Aggiungere un elemento raddoppia il conto: quelli senza più quelli con.
- Gli elementi di $P(A)$ sono insiemi: $\{1\} \in P(A)$ ma $1 \notin P(A)$. $P(\emptyset) = \{\emptyset\}$. Vale $P(A) \cap P(B) = P(A \cap B)$, ma $P(A \cup B)$ in generale è più grande di $P(A) \cup P(B)$.
- Un **ricoprimento** di $X$ è un gruppo di sottoinsiemi di $X$ la cui unione è tutto $X$; le parti possono sovrapporsi.
- $n\Z$ sono i multipli di $n$: $2\Z$ i pari, $2\Z + 1$ i dispari, e $\Z = 2\Z \cup (2\Z + 1)$.
- L'**insieme quoziente** ha come elementi le parti di una partizione; $[x]$ è la parte che contiene $x$. Per pari e dispari: $[0]$ e $[1]$.
- $\{1, 2, 3\}$ ha **5** partizioni; $\{a, b, c, d\}$ ne ha 15.

> [!METODO] È una partizione? Tre controlli
> 1. L'unione delle parti è **tutto** l'insieme, e nessuna parte contiene elementi estranei.
> 2. **Nessuna parte è vuota.**
> 3. **Nessuna sovrapposizione**, controllata su **ogni coppia** di parti: ogni elemento sta in una parte sola.

## Verso l'esame

- Prova comune ai tre canali: **10 quiz** a 5 risposte e **2 problemi**, in 2 ore. Con meno di 6 nel quiz i problemi non si correggono; la sufficienza è 18. Si possono portare libro, appunti e una calcolatrice non programmabile.
- Appelli 2026/27: martedì 19/01/2027 e mercoledì 03/02/2027, alle 14:00 (su MyUniTo l'appello si chiama «M.D.A.G.1»).
- La **domanda 1** riguarda quasi sempre gli insiemi: $\in$ contro $\subset$, unione e intersezione (appelli del 2025 e del 2026). La **domanda 2** a volte chiede una partizione (04/02/2025) o «un ricoprimento ma non una partizione» (07/07/2025).
- Nei problemi tornano i conteggi con $2^n$ e, più avanti, «almeno uno» contato come «tutti meno nessuno», cioè con il complementare.
- Negli appelli di Matematica Discreta l'induzione non va scritta; a Fondamenti dell'Informatica il principio di induzione è tra gli argomenti dei quiz.

## Domande di ripasso

::: domanda Quanti elementi ha $\{\emptyset, \{\emptyset\}, \{1, 2\}\}$?
Tre: il vuoto, l'insieme che contiene il vuoto e l'insieme $\{1, 2\}$.
:::

::: domanda Con $A = \{a, \{b\}\}$: $b \in A$? $\{b\} \in A$? $\{b\} \subset A$?
$b \in A$ no: in $A$ c'è $\{b\}$, non $b$. $\{b\} \in A$ sì. $\{b\} \subset A$ no: servirebbe $b$ tra gli elementi di $A$.
:::

::: domanda Qual è il contrario di «esiste un numero pari maggiore di 10»?
«Ogni numero pari è minore o uguale a 10». È falsa, quindi la frase di partenza è vera.
:::

::: domanda Quanti sottoinsiemi di $\{1, 2, 3, 4, 5\}$ contengono 1 e 2?
$2^3 = 8$: fissati 1 e 2, gli altri tre elementi si scelgono liberamente.
:::

::: domanda Con $X = \{1, \dots, 8\}$, $A = \{1, 2, 3\}$ e $B = \{3, 4, 5\}$, quanto fa $C_X(A \cap B)$?
$A \cap B = \{3\}$, quindi $C_X(A \cap B) = \{1, 2, 4, 5, 6, 7, 8\}$.
:::

::: domanda Le parti $\{1, 2\}$, $\{2, 3\}$, $\{4\}$ sono una partizione di $\{1, 2, 3, 4\}$?
No: coprono tutto e nessuna è vuota, ma il 2 sta in due parti.
:::

::: domanda Quale assioma di Peano non vale per un orologio con le ore da 0 a 11?
Il quarto: lo zero è il successivo di 11.
:::

::: domanda Nel passo induttivo di $1 + 3 + \dots + (2n - 1) = n^2$, dove devi arrivare?
A $1 + 3 + \dots + (2n + 1) = (n + 1)^2$.
:::

## Quiz d'esame

Tutte domande vere dei quiz di Matematica Discreta, con la data dell'appello. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma. All'esame ogni domanda vale 1 punto, e servono almeno 6 punti su 10 nel quiz perché i problemi vengano corretti.

```quiz
D: Appello del 13/01/2026, domanda 1. Sia $A = \{b, e, h, k, m, p, q, s, u, x\}$. Allora:
- $t \in A$
- $h \notin A$
- $\{h, s\} \in A$
+ $\{k, q, u\} \subset A$
- $\{e, s, y\} \subset A$
= Le lettere $k$, $q$, $u$ sono tutte in $A$, quindi l'insieme che le contiene è un sottoinsieme. La risposta più insidiosa è $\{h, s\} \in A$: $h$ e $s$ ci sono, ma gli elementi di $A$ sono lettere, non insiemi. Sarebbe giusto $\{h, s\} \subset A$. $t$ e $y$ non sono in $A$, e $h$ invece c'è.

D: Appello del 10/09/2026, domanda 1. Sia $X = \{c, \{f, m\}, p, q, \{x\}\}$. Allora:
- $q \subset X$
- $\{c, p\} \in X$
+ $\{f, m\} \in X$
- $\{x\} \subset X$
- $\emptyset \in X$
= $X$ ha cinque elementi, e due di loro sono insiemi: $\{f, m\}$ e $\{x\}$. Quindi $\{f, m\} \in X$. La risposta più insidiosa è $\{x\} \subset X$: vorrebbe dire che la lettera $x$ è un elemento di $X$, ma l'elemento è $\{x\}$, non $x$. $q$ non è un insieme, $\{c, p\}$ non è tra gli elementi, e il vuoto non è elencato.

D: Appello del 14/01/2025, domanda 1. Siano $X = \{a, g, h, m\}$ e $Y = \{g, h, m, p, s\}$. Allora:
- $\emptyset \in X \cap Y$
- $X \subset Y$
+ $m \in X \cap Y$
- $g \subset X \cap Y$
- $\{g, h\} \in X \cap Y$
= $X \cap Y = \{g, h, m\}$, e $m$ è uno dei suoi elementi. La risposta più insidiosa è $\{g, h\} \in X \cap Y$: è un sottoinsieme dell'intersezione, non un suo elemento. $X \subset Y$ è falso perché $a$ non sta in $Y$.

D: Appello del 04/02/2025, domanda 1. Siano $A = \{2, 3, 5, 7, 9\}$ e $B = \{1, 4, 5, 8, 9\}$. Allora:
- $6 \in A \cup B$
- $\{3, 4\} \in A \cup B$
- $\{2, 8\} \subset A \cap B$
+ $\{5, 9\} = A \cap B$
- $9 \subset A \cap B$
= Gli elementi comuni sono 5 e 9, quindi $A \cap B = \{5, 9\}$. La risposta più insidiosa è $\{2, 8\} \subset A \cap B$: 2 sta solo in $A$ e 8 solo in $B$, quindi sono nell'unione, non nell'intersezione. 6 non sta in nessuno dei due.

D: Appello del 03/02/2026, domanda 1. Siano $X = \{a, b, f, h, r, s, t, v, z\}$ e $Y = \{d, g, h, m, p, s, t, x, y\}$. Allora:
- $\{b, s, t\} \subset X \cap Y$
+ $f \notin X \cap Y$
- $\{h, t\} = X \cap Y$
- $\{h, s\} \in X \cap Y$
- $s \subset X \cap Y$
= $X \cap Y = \{h, s, t\}$, e $f$ sta solo in $X$. La risposta più insidiosa è $\{h, t\} = X \cap Y$: dimentica la $s$. $b$ non sta in $Y$; $\{h, s\}$ è un sottoinsieme, non un elemento; $s$ è una lettera, non un insieme.

D: Appello del 06/06/2026, domanda 1. Ricordando che $n\Z = \{nk \mid k \in \Z\}$, cioè i multipli di $n$, quale affermazione è vera?
- $7 \in 3\Z \cup 5\Z$
- $\{12, 20\} \subset 3\Z \cap 4\Z$
- $4\Z \cap 5\Z = \emptyset$
- $8 \in 2\Z \cap 5\Z$
+ $\{10, 21\} \subset 2\Z \cup 7\Z$
= 10 è multiplo di 2 e 21 è multiplo di 7: tutti e due stanno nell'unione. La risposta più insidiosa è $\{12, 20\} \subset 3\Z \cap 4\Z$: 12 va bene, ma 20 non è multiplo di 3. $4\Z \cap 5\Z$ contiene i multipli di 20, quindi non è vuoto; 7 non è multiplo né di 3 né di 5; 8 non è multiplo di 5.

D: Appello del 01/07/2026, domanda 1. Siano $A = \{b, f, h, m, n\}$, $B = \{d, g, h, p, q\}$ e $X = \{a, f, g, h, s, x, y\}$. Quale dei seguenti è un sottoinsieme di $(A \cup B) \cap X$?
- $\{\emptyset\}$
+ $\{f, h\}$
- $\{n\}$
- $\{a, g\}$
- $\{b, q\}$
= $(A \cup B) \cap X = \{f, g, h\}$: le lettere di $X$ che stanno in $A$ o in $B$. $\{f, h\}$ è un suo sottoinsieme. La risposta più insidiosa è $\{a, g\}$: $g$ va bene, ma $a$ sta solo in $X$. $\{\emptyset\}$ contiene il vuoto come elemento, e il vuoto non è un elemento di quell'insieme.

D: Appello del 06/06/2025, domanda 1. Siano $A = \{3, 4, 7, 9\}$, $B = \{1, 3, 5, 6, 8, 9\}$ e $C = \{2, 4, 5, 8, 9\}$. Allora:
- $4 \in A \cap B \cap C$
- $A \subset B \cup C$
- $B \cap C \subset A$
- $A \cap B \subset C$
+ $A \cap B \cap C \neq \emptyset$
= 9 sta in tutti e tre gli insiemi, quindi l'intersezione non è vuota. La risposta più insidiosa è $A \cap B \subset C$: $A \cap B = \{3, 9\}$, e 3 non sta in $C$. 4 non sta in $B$; 7 non sta né in $B$ né in $C$; $B \cap C = \{5, 8, 9\}$ e 5 non sta in $A$.

D: Appello del 04/02/2025, domanda 2. Sia $S = \{a, c, f, h, m, t, v\}$. Quale delle seguenti è una partizione di $S$?
+ $\{m\} \cup \{a, c, t\} \cup \{f, h, v\}$
- $\{f, m\} \cup \{a, t\} \cup \{c, v\}$
- $\emptyset \cup \{a, f, h, m\} \cup \{c, t, v\}$
- $\{a, c\} \cup \{c, f, h, m\} \cup \{t, v\}$
- $\{a, h, m\} \cup \{h, t\} \cup \{c, f\}$
= I tre controlli: parti non vuote, che non si toccano, che coprono tutto. La prima li passa. La seconda dimentica la $h$. La terza ha una parte vuota. La quarta e la quinta ripetono una lettera, la $c$ e la $h$: sono ricoprimenti, non partizioni.

D: Appello del 07/07/2025, domanda 2. Sia $X = \{b, c, f, h, k, m, r, u, v, z\}$. Quale è un ricoprimento di $X$ ma non una partizione?
- $\{f, h, k, u, v\} \cup \{b, c, k, r, z\}$
- $\{b, c, k, r, s, z\} \cup \{f, h, m, u, v\}$
+ $\{b, f, k, m, r\} \cup \{c, h, r, u, v, z\}$
- $\{b, c, m, v, z\} \cup \{f, h, k, u\}$
- $\{b, f, k, r, u, z\} \cup \{c, m, t, v\}$
= La terza copre tutte e dieci le lettere e ripete la $r$: è un ricoprimento ma non una partizione. La risposta più insidiosa è la prima, che ripete la $k$ ma dimentica la $m$: non copre tutto. La seconda e la quinta contengono lettere che in $X$ non ci sono ($s$ e $t$); la quarta dimentica la $r$.

D: Appello del 06/06/2025, domanda 2. L'affermazione «per ogni $x \in \N$ e per ogni $y \in \N$, $x^2 + x \ge y$» è contraddetta da:
- $(x, y) = (2, 5)$
- $(x, y) = (-4, 10)$
+ $(x, y) = (1, 3)$
- $(x, y) = (0, -1)$
- $(x, y) = (3, 12)$
= Un controesempio è una coppia di naturali per cui la frase è falsa. Con $(1, 3)$: $1 + 1 = 2$, che non è almeno 3. La risposta più insidiosa è $(-4, 10)$: la disuguaglianza è falsa, ma $-4$ non è un naturale, quindi non conta. Con $(2, 5)$ e $(3, 12)$ la disuguaglianza è vera; in $(0, -1)$ c'è un numero negativo.
```

## Fonti

- Le lezioni complete: [D01 · Insiemi e induzione](D01_insiemi_induzione.html) e [D02 · Complementare, De Morgan, induzione e partizioni](D02_complementare_induzione_partizioni.html), con quiz degli appelli ed esercizi svolti.
- A. Mori, *Lezioni di Matematica Discreta*, cap. 1 «Insiemi», pp. 1–13.
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
