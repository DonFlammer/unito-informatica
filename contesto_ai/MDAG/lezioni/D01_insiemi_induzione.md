---
corso: MDAG
modulo: MD
lezione: D01
titolo: Insiemi e induzione
data: 2026-09-30
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D01
descrizione: >-
  Appunti della lezione D01 di Matematica Discreta (MDAG, parte 1, canali A, B e C): insiemi ed elementi, «per ogni» ed
  «esiste», insieme vuoto, cardinalità, sottoinsiemi e insieme delle parti, uguaglianza tra insiemi, numeri naturali,
  principio di induzione e il conto dei sottoinsiemi, con le domande vere degli appelli ed esercizi svolti.
lede: >-
  Il linguaggio su cui si regge tutto il corso: gli insiemi, cioè raccolte di oggetti, e il modo di parlarne con
  precisione. Poi i numeri per contare e un modo nuovo di dimostrare le cose, l'induzione. Alla fine scopri quanti
  sottoinsiemi ha un insieme, un conto che all'esame torna spesso.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 1, pp. 1–8
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 1 «Insiemi», pp. 1–8 ed esercizi pp. 14–16;
  diario delle lezioni del canale B 2025/26 (Moodle MDAG1 2025/26); quiz e problemi degli appelli di Matematica
  Discreta 2023–2026
appunti_html: appunti/MDAG/D01_insiemi_induzione.html
genera_html: true
---

## In breve

- Un **insieme** è una raccolta di oggetti, che si chiamano i suoi **elementi**. Conta solo chi c'è dentro: l'ordine non importa e ogni elemento si conta una volta sola.
- Un insieme si descrive in due modi: con l'**elenco** dei suoi elementi tra parentesi graffe, oppure con una **regola** che dice chi entra e chi no.
- «Per ogni» ed «esiste» servono per parlare di tutti gli elementi o di almeno uno. Per far vedere che una frase con «per ogni» è falsa basta un solo caso contrario, il **controesempio**.
- L'**insieme vuoto** non contiene niente. La **cardinalità** di un insieme è il numero dei suoi elementi.
- Un **sottoinsieme** è una parte di un insieme: tutti i suoi elementi stanno anche nell'insieme di partenza. Tutti i sottoinsiemi, messi insieme, formano l'**insieme delle parti**.
- I **numeri naturali** sono 0, 1, 2, 3 e così via. Il **principio di induzione** dimostra una proprietà per tutti i naturali in due mosse, come una fila di tessere del domino che cadono una dopo l'altra.
- Un insieme con $n$ elementi ha $2^n$ sottoinsiemi: ogni elemento in più raddoppia il conto.
- All'esame la prima domanda del quiz riguarda quasi sempre gli insiemi. Il punto delicato è distinguere «è un elemento di» da «è un sottoinsieme di».

> [!CANALI]
> Matematica Discreta, la parte 1 di MDAG, ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C, quindi questi appunti valgono per tutti e tre. Cambiano i docenti e l'ordine degli argomenti. Nel canale B insegna Andrea Mori, che segue il suo libro *Lezioni di Matematica Discreta*: questi appunti seguono il capitolo 1 del libro (pp. 1–8) e il diario del canale B del 2025/26, dove la prima lezione trattava insiemi, insieme vuoto, numeri naturali e induzione, sottoinsiemi e il conto dei sottoinsiemi. Nei canali A e C insegnano Ignazio Longhi e Lea Terracini: nel 2025/26 anche lì si partiva dagli insiemi, poi venivano funzioni e combinatoria, in un ordine un po' diverso da quello del libro. Sulla pagina Moodle del 2025/26 (MDAG1, [id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), aperta agli ospiti) ci sono appunti scritti a mano e video delle lezioni di A e C. La prima lezione del canale A copriva le stesse idee di base (insiemi, cardinalità, sottoinsiemi, insieme vuoto, uguaglianza) e scriveva $\subseteq$ dove Mori scrive $\subset$.

## Un insieme è un sacchetto di oggetti (pp. 1–3)

Pensa a un sacchetto della spesa con dentro una mela, una pera e una banana. Il sacchetto, con quello che contiene, è un esempio di **insieme**. Le cose che ci sono dentro si chiamano gli **elementi** dell'insieme.

Per scrivere un insieme si mettono i suoi elementi tra **parentesi graffe**, separati da virgole:

$$\{\text{mela},\ \text{pera},\ \text{banana}\}$$

Si legge «l'insieme che contiene mela, pera e banana».

Di solito un insieme si chiama con una lettera maiuscola, come $A$ o $B$. I suoi elementi si chiamano con lettere minuscole, come $a$ o $x$. Per esempio la riga

$$A = \{1, 2, 3\}$$

vuol dire: chiamo $A$ l'insieme che contiene i numeri 1, 2 e 3.

### Dentro o fuori

Per dire che un oggetto sta in un insieme c'è un simbolo apposta. Assomiglia a una «e», l'iniziale di «elemento».

- $x \in A$ si legge «$x$ appartiene ad $A$», oppure «$x$ è un elemento di $A$».
- $x \notin A$ si legge «$x$ non appartiene ad $A$». La barra sopra il simbolo vuol dire «non».

Riprendiamo l'insieme $A = \{1, 2, 3\}$.

- Il numero 2 è nella lista, quindi $2 \in A$.
- Il numero 5 nella lista non c'è, quindi $5 \notin A$.

Il libro di Mori dà la definizione così.

> [!DEF] 1.1 · Insieme
> Un **insieme** è una collezione ben definita di oggetti distinti, detti gli **elementi** dell'insieme.

**Come si legge.** «Collezione» vuol dire raccolta: il sacchetto. «Ben definita» vuol dire che per ogni oggetto si può decidere, senza dubbi, se sta dentro oppure no. «Distinti» vuol dire diversi tra loro: lo stesso oggetto non si conta due volte.

### Che cosa può stare in un insieme (p. 2)

Il libro aggiunge tre osservazioni.

1. **Dentro può esserci qualunque cosa.** Numeri, ma anche città, persone, parole. Gli elementi non devono nemmeno essere dello stesso tipo: esiste l'insieme che contiene il numero 4, la Mole Antonelliana e il tuo zaino.
2. **Deve essere chiaro chi c'è dentro.** «Gli attori bravi» non è un insieme, perché sull'essere bravi ognuno ha la sua opinione. «Gli attori che hanno vinto un Oscar» invece è un insieme: basta controllare l'elenco dei premi.
3. **Un insieme può essere un elemento di un altro insieme.** Un sacchetto chiuso può stare dentro un sacchetto più grande.

### Un sacchetto dentro un sacchetto

La terza osservazione è quella che crea più confusione, quindi vediamola con calma.

Metti i numeri 1 e $-1$ in un sacchetto piccolo: è l'insieme $B = \{1, -1\}$. Poi metti in un sacchetto grande il numero 0 e il sacchetto piccolo, chiuso. Il sacchetto grande è

$$A = \{0, B\} = \{0, \{1, -1\}\}$$

```grafico
titolo: L'insieme $A = \{0, \{1, -1\}\}$ ha due elementi: lo zero e il sacchetto piccolo $B$
x: -3 3
y: -2.1 2.1
assi: no
griglia: no
cerchio: 0 0 1.9 | blu
cerchio: 0.75 0 0.85 | accento
punto: -0.95 0 | blu | $0$ | n
punto: 0.45 0.15 | accento | $1$ | n
punto: 1.05 -0.2 | accento | $-1$ | s
testo: -1.25 1.6 | blu | $A$
testo: 1.35 0.95 | accento | $B$
```

Guarda la figura: dentro il cerchio grande ci sono **due** oggetti, il punto dello zero e il cerchio piccolo. I numeri 1 e $-1$ stanno nel cerchio piccolo, non direttamente in quello grande. Quindi:

- $1 \in B$: l'1 è nel sacchetto piccolo;
- $B \in A$: il sacchetto piccolo è nel sacchetto grande;
- $1 \notin A$: tra i due oggetti del sacchetto grande non c'è l'1.

È la Nota 1.2 del libro. Se un insieme è un elemento di un altro insieme, i suoi elementi **non** diventano per questo elementi di quello più grande.

> [!TRAPPOLA] Le graffe interne contano
> In $\{0, \{1, -1\}\}$ gli elementi sono due, non tre. Un paio di graffe dentro la lista racchiude **un solo** elemento, che è a sua volta un insieme. All'esame questa trappola compare spesso nella prima domanda del quiz (vedi «Verso l'esame»).

### Due modi per scrivere un insieme (pp. 2–3)

Il primo modo è **l'elenco**: si scrivono tutti gli elementi, uno per uno. Funziona bene quando gli elementi sono pochi.

Il secondo modo è **la regola**: si spiega che cosa deve avere un oggetto per entrare. Per esempio «i numeri pari tra 1 e 10». Con una regola si descrivono anche insiemi enormi o infiniti, che non si potrebbero mai elencare per intero.

Ecco qualche insieme scritto nei due modi.

| Con una regola, a parole | Con l'elenco |
|---|---|
| i numeri pari tra 1 e 10 | $\{2, 4, 6, 8, 10\}$ |
| le vocali | $\{a, e, i, o, u\}$ |
| i numeri naturali più piccoli di 4 | $\{0, 1, 2, 3\}$ |
| i numeri pari maggiori di zero | non finisce mai: $\{2, 4, 6, 8, \dots\}$ |

I puntini dell'ultima riga si leggono «e così via»: gli elementi continuano con la stessa regola.

Per scrivere una regola con i simboli il libro usa questa forma (Nota 1.3):

$$X = \{x \in U \mid \mathcal P(x)\}$$

Si legge «$X$ è l'insieme degli $x$ di $U$ tali che $x$ ha la proprietà $\mathcal P$». Vediamola un pezzo alla volta.

- $U$ è l'insieme da cui si pescano gli oggetti, per esempio tutti i numeri naturali. Il libro lo chiama **insieme universale**: è l'ambito del discorso.
- La sbarra verticale $\mid$ si legge «tali che».
- $\mathcal P(x)$ è la **proprietà** da controllare: una frase su $x$ che può essere vera o falsa, come «$x$ è pari». La $\mathcal P$ è una P in corsivo elegante.

> [!ESEMPIO] Una regola scritta con i simboli
> $$\{n \in \N \mid n \text{ è pari}\} = \{0, 2, 4, 6, \dots\}$$
> Si legge «i numeri naturali $n$ tali che $n$ è pari». Qui l'insieme universale è $\N$, l'insieme dei numeri naturali $0, 1, 2, 3, \dots$ (lo vediamo meglio più avanti). Lo zero è pari, quindi è dentro.

### Ordine e ripetizioni non contano (p. 3)

Un insieme dipende soltanto da chi c'è dentro. Quindi:

- l'ordine non conta: $\{1, 3, 5\}$ e $\{5, 1, 3\}$ sono lo stesso insieme;
- le ripetizioni non contano: scrivere due volte lo stesso elemento non aggiunge niente. Per esempio $\{0, 0, 1, 2\}$ e $\{0, 1, 2\}$ sono lo stesso insieme.

::: prova Vero o falso? (a) $3 \in \{1, 3, 5\}$; (b) $4 \in \{1, 3, 5\}$; (c) $\{1, 2\}$ e $\{2, 1, 1\}$ sono lo stesso insieme.
(a) Vero: il 3 è nella lista.

(b) Falso: il 4 nella lista non c'è.

(c) Vero: ordine e ripetizioni non contano, e in tutti e due gli insiemi ci sono soltanto 1 e 2.
:::

::: prova Quanti elementi ha l'insieme $\{1, \{2, 3\}, 4\}$? Il numero 2 è un suo elemento?
Gli elementi sono tre: il numero 1, l'insieme $\{2, 3\}$ e il numero 4.

Il 2 non è un elemento: sta dentro il sacchetto piccolo $\{2, 3\}$, non direttamente in quello grande.
:::

> [!RICORDA]
> - Un insieme è una raccolta di oggetti, i suoi elementi. Si scrive con le graffe: $\{1, 2, 3\}$.
> - $x \in A$ vuol dire «$x$ è un elemento di $A$».
> - Ordine e ripetizioni non contano.
> - Un insieme può essere un elemento di un altro insieme, ma i suoi elementi non diventano elementi di quello grande.

## Tutti o almeno uno: per ogni ed esiste (pp. 3–4)

Nelle frasi di tutti i giorni usiamo spesso due parole: «tutti» e «qualcuno». «Tutti gli studenti hanno superato l'esame.» «C'è uno studente che ha risolto tutti gli esercizi.» In matematica queste due idee hanno un nome e un simbolo, perché servono di continuo.

- $\forall$ si legge «per ogni». È una A capovolta, da *all*, «tutti» in inglese. Una frase con «per ogni» dice che una proprietà vale per tutti gli elementi di un insieme, nessuno escluso.
- $\exists$ si legge «esiste». È una E rovesciata, da *exists*. Una frase con «esiste» dice che c'è almeno un elemento con quella proprietà: può essercene uno solo, o anche tanti.

Il libro chiama questi due simboli **quantificatori**. Ecco come si usano.

| Scrittura | Si legge | Un esempio vero |
|---|---|---|
| $\forall x \in A,\ \mathcal P(x)$ | «per ogni $x$ in $A$, $x$ ha la proprietà $\mathcal P$» | $\forall n \in \{2, 4, 6\}$, $n$ è pari |
| $\exists x \in A$ tale che $\mathcal P(x)$ | «esiste un $x$ in $A$ che ha la proprietà $\mathcal P$» | $\exists n \in \{1, 2, 3\}$ tale che $n > 2$: è il 3 |

### Come si dice il contrario

Prendi la frase «tutti i treni di oggi sono arrivati in orario». Quando è falsa? Non serve che tutti i treni siano in ritardo: basta **un** treno in ritardo. Quindi il contrario della frase è «almeno un treno è arrivato in ritardo».

Ora prendi la frase «c'è un negozio aperto». Quando è falsa? Quando non ce n'è nemmeno uno, cioè quando **tutti** i negozi sono chiusi.

> [!IDEA]
> Quando dici il contrario di una frase, «per ogni» diventa «esiste» ed «esiste» diventa «per ogni». La proprietà, invece, diventa il suo contrario.

È la Nota 1.4 del libro. Il libro scrive «non» con il simbolo $\sim$, che si legge «non»; molti altri testi usano $\neg$. Con i simboli:

| Frase | Il suo contrario |
|---|---|
| $\forall x \in A,\ \mathcal P(x)$ | $\exists x \in A$ tale che non vale $\mathcal P(x)$ |
| $\exists x \in A$ tale che $\mathcal P(x)$ | $\forall x \in A$, non vale $\mathcal P(x)$ |

Un esempio con i numeri. Prendi un insieme di numeri e la frase «ogni numero dell'insieme è maggiore o uguale a zero». Il contrario è «almeno un numero dell'insieme è negativo».

- Con l'insieme $\{3, 0, 7\}$ la frase è vera: nessun numero è negativo.
- Con l'insieme $\{3, -2, 7\}$ la frase è falsa, perché c'è il numero $-2$.

### Il controesempio

Per dimostrare che una frase con «per ogni» è **vera** bisogna controllare tutti gli elementi. Spesso sono infiniti, e servono ragionamenti come l'induzione, che vedi più avanti. Per dimostrare che è **falsa**, invece, basta un solo elemento per cui la proprietà non vale. Quell'elemento si chiama **controesempio**. Nell'esempio di prima il controesempio è il numero $-2$.

> [!ESEMPIO] Una domanda dell'appello del 06/06/2025 (domanda 2)
> Il testo: «L'affermazione "$\forall x \in \N, \forall y \in \N, x^2 + x \ge y$" è contraddetta da: (1) $(x, y) = (2, 5)$; (2) $(x, y) = (-4, 10)$; (3) $(x, y) = (1, 3)$; (4) $(x, y) = (0, -1)$; (5) $(x, y) = (3, 12)$.» L'inizio si legge «per ogni $x$ naturale e per ogni $y$ naturale».
>
> In pratica chiede: per quale coppia di numeri **naturali** la disuguaglianza è falsa? Quella coppia è un controesempio. Controlliamo le cinque coppie una per una.
>
> | Coppia | Due naturali? | Quanto fa $x^2 + x$ | È almeno $y$? |
> |---|---|---|---|
> | $(2, 5)$ | sì | $4 + 2 = 6$ | $6 \ge 5$: sì |
> | $(-4, 10)$ | no: $-4$ non è naturale | | non conta |
> | $(1, 3)$ | sì | $1 + 1 = 2$ | $2 \ge 3$: **no** |
> | $(0, -1)$ | no: $-1$ non è naturale | | non conta |
> | $(3, 12)$ | sì | $9 + 3 = 12$ | $12 \ge 12$: sì |
>
> La risposta è la (3). Le coppie (2) e (4) contengono un numero negativo: non sono coppie di naturali, quindi non possono contraddire una frase sui naturali.

::: prova Scrivi il contrario delle frasi: (a) «ogni numero della lista 2, 4, 6 è pari»; (b) «esiste un numero naturale minore di zero». Quale delle due frasi di partenza è vera?
(a) Il contrario è «almeno un numero della lista 2, 4, 6 è dispari».

(b) Il contrario è «ogni numero naturale è maggiore o uguale a zero».

È vera la frase (a) di partenza: 2, 4 e 6 sono tutti pari. La frase (b) di partenza è falsa, quindi è vero il suo contrario.
:::

> [!TRAPPOLA] Il contrario di «tutti» non è «nessuno»
> Il contrario di «tutti gli studenti hanno superato l'esame» **non** è «nessuno studente ha superato l'esame». È «almeno uno studente non l'ha superato». Possono averlo superato in tanti: basta che uno sia stato bocciato.

> [!RICORDA]
> - $\forall$ si legge «per ogni» e parla di tutti gli elementi; $\exists$ si legge «esiste» e parla di almeno uno.
> - Per dire il contrario: «per ogni» diventa «esiste», «esiste» diventa «per ogni», e la proprietà diventa il suo contrario.
> - Per dimostrare che una frase con «per ogni» è falsa basta un controesempio.

## Il sacchetto vuoto e quanti elementi ci sono (p. 4)

Un sacchetto vuoto è pur sempre un sacchetto. Allo stesso modo c'è un insieme che non contiene niente: si chiama **insieme vuoto** e si scrive $\emptyset$, uno zero tagliato da una barra.

L'insieme vuoto si può descrivere con tante regole diverse. Per esempio:

- i numeri naturali più piccoli di zero;
- i numeri interi che sono pari e dispari allo stesso tempo.

Nessun oggetto rispetta queste regole. Quindi descrivono tutte e due lo stesso insieme, quello senza elementi: di insieme vuoto ce n'è uno solo.

Il libro lo dice così.

> [!DEF] 1.5 · Insieme vuoto
> Si chiama **insieme vuoto** e si denota $\emptyset$ l'insieme privo di elementi, $\emptyset = \{\ \}$. Esso è caratterizzato dalla proprietà $\forall x,\ x \notin \emptyset$.

**Come si legge.** $\{\ \}$ sono due graffe con niente in mezzo: un sacchetto vuoto. L'ultima formula si legge «per ogni $x$, $x$ non appartiene all'insieme vuoto»: qualunque oggetto tu prenda, nel vuoto non c'è.

### Il vuoto dentro un sacchetto

Non confondere $\emptyset$ con $\{\emptyset\}$.

- $\emptyset$ è il sacchetto vuoto: non contiene niente.
- $\{\emptyset\}$ è un sacchetto che contiene un sacchetto vuoto. Contiene **una** cosa, quindi non è vuoto.

È la stessa idea del sacchetto dentro il sacchetto: le graffe esterne racchiudono un elemento, che qui è l'insieme vuoto.

### Quanti elementi: la cardinalità

Il numero degli elementi di un insieme si chiama **cardinalità**. Si scrive mettendo l'insieme tra due sbarre verticali: $\lvert A \rvert$ si legge «cardinalità di $A$».

> [!DEF] 1.6 · Cardinalità
> Si dice **cardinalità** di un insieme $A$, denotata $\lvert A \rvert$, il numero degli elementi di $A$.

**Come si legge.** Se l'insieme ha un numero finito di elementi, per esempio 5, si scrive $\lvert A \rvert = 5$. Se gli elementi sono infiniti si scrive $\lvert A \rvert = \infty$, e il simbolo $\infty$ si legge «infinito». Il libro avverte che questa definizione verrà resa precisa nel capitolo 3, con le funzioni.

Qualche esempio. Nell'ultima colonna c'è la cardinalità.

| Insieme | I suoi elementi | Quanti |
|---|---|--:|
| $\{a, b, c\}$ | $a$, $b$, $c$ | $3$ |
| $\{0, 0, 1\}$ | $0$ e $1$: lo zero ripetuto conta una volta | $2$ |
| $\emptyset$ | nessuno | $0$ |
| $\{\emptyset\}$ | il sacchetto vuoto | $1$ |
| $\{1, \{2, 3\}\}$ | il numero $1$ e l'insieme $\{2, 3\}$ | $2$ |
| $\N$ | $0, 1, 2, 3, \dots$ | $\infty$ |

::: prova Calcola la cardinalità di (a) $\{0, 1, \{0, 1\}\}$; (b) $\{\emptyset, \{\emptyset\}\}$; (c) l'insieme delle lettere della parola «mamma».
(a) Gli elementi sono tre: 0, 1 e l'insieme $\{0, 1\}$. La cardinalità è 3.

(b) Gli elementi sono due: il sacchetto vuoto e il sacchetto che contiene il sacchetto vuoto. La cardinalità è 2.

(c) Le lettere sono m e a, perché le ripetizioni non contano. La cardinalità è 2.
:::

> [!RICORDA]
> - L'insieme vuoto $\emptyset$ non ha elementi. L'insieme $\{\emptyset\}$ invece ha un elemento.
> - La cardinalità $\lvert A \rvert$ è il numero degli elementi di $A$, ognuno contato una volta sola.

## Un insieme dentro l'altro: i sottoinsiemi (pp. 4–5)

Torna al sacchetto con mela, pera e banana. Togli la pera: ti resta un sacchetto con mela e banana. Ogni frutto del sacchetto nuovo viene dal sacchetto di partenza. Il sacchetto nuovo è un **sottoinsieme** di quello di partenza.

> [!IDEA]
> Un insieme è un sottoinsieme di un altro quando **ogni** suo elemento sta anche nell'altro. Nessun elemento resta fuori.

```grafico
titolo: Il sottoinsieme $B$ sta tutto dentro l'insieme $A$: ogni punto di $B$ è anche un punto di $A$
x: -3 3
y: -2.2 2.2
assi: no
griglia: no
cerchio: 0 0 2 | blu
cerchio: 0.6 -0.2 1 | accento | spesso
testo: -1.5 1.65 | blu | $A$
testo: 0.6 1.05 | accento | $B$
punto: 0.3 -0.5 | accento
punto: 1 0.15 | accento
punto: -1.15 0.6 | blu
punto: -0.85 -1.15 | blu
```

Il simbolo è $\subset$. La scrittura $B \subset A$ si legge «$B$ è contenuto in $A$», oppure «$B$ è un sottoinsieme di $A$». Se invece almeno un elemento di $B$ sta fuori da $A$, si scrive $B \not\subset A$, che si legge «$B$ non è contenuto in $A$».

> [!DEF] 1.7 · Sottoinsieme
> Un insieme $B$ è un **sottoinsieme** di $A$, e scriviamo $B \subset A$, se ogni elemento di $B$ è anche un elemento di $A$: $\forall b \in B,\ b \in A$.

**Come si legge.** La formula alla fine si legge «per ogni $b$ in $B$, $b$ appartiene ad $A$». È la stessa frase della definizione, scritta con i simboli.

Proviamo con l'insieme $A = \{1, 2, 3\}$.

| Domanda | Risposta | Perché |
|---|---|---|
| $\{1, 3\} \subset A$? | sì | 1 e 3 stanno tutti e due in $A$ |
| $\{2\} \subset A$? | sì | il 2 sta in $A$ |
| $\{1, 4\} \subset A$? | no | il 4 non sta in $A$ |
| $A \subset A$? | sì | ogni elemento di $A$ sta in $A$ |
| $\emptyset \subset A$? | sì | il vuoto non ha elementi che possano stare fuori |

### Il vuoto e l'insieme intero

Gli ultimi due casi della tabella valgono per qualunque insieme.

- **Ogni insieme è un sottoinsieme di sé stesso**, perché tutti i suoi elementi stanno in lui.
- **Il vuoto è un sottoinsieme di ogni insieme.** Per dire che il vuoto **non** è contenuto in un insieme servirebbe un controesempio: un elemento del vuoto che sta fuori. Ma il vuoto non ha elementi, quindi un controesempio non c'è.

Il libro chiama il vuoto e l'insieme intero «sottoinsiemi banali». I sottoinsiemi diversi dall'insieme intero si chiamano **sottoinsiemi propri**. Per esempio $\{1, 3\}$ è un sottoinsieme proprio di $\{1, 2, 3\}$.

> [!NOTA] Due modi di scrivere «contenuto»
> Nel libro di Mori, e nei testi d'esame, $B \subset A$ vuol dire «$B$ è contenuto in $A$, e può anche essere uguale». Altri libri, e gli appunti dei canali A e C, scrivono per questo $\subseteq$, e usano $\subsetneq$ per «contenuto ma non uguale». Quando apri un testo nuovo, controlla quale convenzione usa.

### Elemento o sottoinsieme?

Questa è la distinzione più importante della lezione. Riprendiamo $A = \{1, 2, 3\}$.

| Scrittura | Vera? | Perché |
|---|---|---|
| $2 \in A$ | sì | il numero 2 è uno degli elementi |
| $\{2\} \subset A$ | sì | l'insieme che contiene solo il 2 è una parte di $A$ |
| $\{2\} \in A$ | no | tra gli elementi di $A$ c'è il numero 2, non l'insieme $\{2\}$ |
| $2 \subset A$ | no | 2 è un numero, non un insieme: non può essere una parte di $A$ |

A parole: il simbolo $\in$ collega un **oggetto** a un insieme, il simbolo $\subset$ collega **due insiemi**. Nota anche che le prime due righe dicono la stessa cosa: un oggetto sta in un insieme esattamente quando l'insieme che contiene solo lui è un sottoinsieme.

> [!METODO] Elemento o sottoinsieme?
> 1. Guarda l'oggetto a sinistra del simbolo: è un insieme, cioè ha le graffe o è il nome di un insieme?
> 2. Se il simbolo è $\in$, cerca l'oggetto, così com'è e con le sue graffe, nella lista degli elementi a destra.
> 3. Se il simbolo è $\subset$, l'oggetto a sinistra deve essere un insieme. Controlla i suoi elementi uno per uno: devono stare tutti nella lista a destra.
> 4. Se tra gli elementi a destra ci sono altri insiemi, conta le graffe con calma: ogni paio di graffe interne è **un** elemento.

> [!ESEMPIO] Il metodo su un insieme con un insieme dentro
> Prendi $X = \{a, \{b, c\}\}$. Ha due elementi: la lettera $a$ e l'insieme $\{b, c\}$.
>
> - $\{b, c\} \in X$: vera, è il secondo elemento.
> - $\{b, c\} \subset X$: falsa. Servirebbe $b \in X$, ma $b$ sta dentro il sacchetto interno.
> - $\{a\} \subset X$: vera, perché $a \in X$.
> - $\{\{b, c\}\} \subset X$: vera. È l'insieme che contiene un solo elemento, $\{b, c\}$, e quell'elemento sta in $X$.

### Tutte le parti di un insieme

Ora prendi tutti i sottoinsiemi di un insieme e mettili in un sacchetto nuovo. Quel sacchetto si chiama **insieme delle parti**.

Per esempio i sottoinsiemi di $\{a, b\}$ sono quattro: il vuoto, $\{a\}$, $\{b\}$ e $\{a, b\}$. L'insieme delle parti di $\{a, b\}$ è quindi

$$\{\emptyset, \{a\}, \{b\}, \{a, b\}\}$$

Ha quattro elementi, e ogni suo elemento è a sua volta un insieme.

> [!DEF] 1.8 · Insieme delle parti
> Se $A$ è un insieme, si dice **insieme delle parti** di $A$, denotato $P(A)$, l'insieme i cui elementi sono i sottoinsiemi di $A$,
> $$P(A) = \{B \mid B \subset A\}.$$

**Come si legge.** $P(A)$ si legge «parti di $A$». La formula si legge «l'insieme dei $B$ tali che $B$ è contenuto in $A$»: dentro $P(A)$ ci sono tutti i sottoinsiemi di $A$, e nient'altro. Attenzione: questa $P$ è una lettera normale e indica un insieme; la $\mathcal P$ elegante di prima indica una proprietà.

Il libro fa tre esempi (p. 5).

| Insieme | I suoi sottoinsiemi | Quanti |
|---|---|--:|
| $\emptyset$ | solo $\emptyset$ | $1$ |
| $\{\ast\}$, con un solo elemento | $\emptyset$ e $\{\ast\}$ | $2$ |
| $\{a, b, c\}$ | $\emptyset$, $\{a\}$, $\{b\}$, $\{c\}$, $\{a, b\}$, $\{a, c\}$, $\{b, c\}$, $\{a, b, c\}$ | $8$ |

La prima riga merita due parole. Il vuoto ha un sottoinsieme, sé stesso. Quindi $P(\emptyset) = \{\emptyset\}$: l'insieme delle parti del vuoto ha un elemento, e non è vuoto.

> [!IDEA]
> Essere un sottoinsieme di $A$ ed essere un elemento di $P(A)$ sono la stessa cosa.

::: prova Prendi $A = \{1, 2\}$. (a) Scrivi $P(A)$. (b) È vero che $1 \in P(A)$? (c) È vero che $\{1\} \in P(A)$?
(a) $P(A) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$.

(b) No. Gli elementi di $P(A)$ sono insiemi, e il numero 1 da solo non è tra loro.

(c) Sì. $\{1\}$ è un sottoinsieme di $A$, quindi è un elemento di $P(A)$.
:::

::: prova Con $X = \{a, \{b, c\}\}$: è vero che $b \in X$? E che $\{b, c\} \in X$?
$b \in X$ è falso: $b$ sta dentro il sacchetto interno $\{b, c\}$, non direttamente in $X$.

$\{b, c\} \in X$ è vero: è il secondo elemento di $X$.
:::

> [!RICORDA]
> - $B \subset A$ vuol dire che ogni elemento di $B$ sta anche in $A$. Il vuoto e l'insieme stesso sono sempre sottoinsiemi.
> - $\in$ collega un oggetto a un insieme, $\subset$ collega due insiemi.
> - L'insieme delle parti $P(A)$ ha come elementi tutti i sottoinsiemi di $A$.

## Quando due insiemi sono uguali (p. 5)

Due sacchetti sono uguali quando contengono esattamente le stesse cose. Per controllarlo si fanno due verifiche: tutto quello che c'è nel primo sta anche nel secondo, e tutto quello che c'è nel secondo sta anche nel primo.

> [!ESEMPIO] Due verifiche
> Prendi $A$ = i numeri naturali il cui quadrato è minore di 10, e $B = \{0, 1, 2, 3\}$.
>
> 1. **Da $A$ a $B$.** I quadrati dei naturali sono $0, 1, 4, 9, 16, 25, \dots$ e crescono sempre. Sono minori di 10 soltanto quelli di 0, 1, 2 e 3. Quindi ogni elemento di $A$ sta in $B$: $A \subset B$.
> 2. **Da $B$ ad $A$.** I quadrati di 0, 1, 2 e 3 sono 0, 1, 4 e 9, tutti minori di 10. Quindi ogni elemento di $B$ sta in $A$: $B \subset A$.
>
> Le due verifiche riescono, quindi $A = B$.

Il libro lo scrive come una proposizione.

> [!PROP] 1.9 · Uguaglianza tra insiemi
> Siano $A$ e $B$ due insiemi. Allora
> $$A = B \iff A \subset B \text{ e } B \subset A.$$

**Come si legge.** Il simbolo $\iff$ si legge «se e solo se», cioè «esattamente quando». A parole: due insiemi sono uguali esattamente quando ognuno dei due è contenuto nell'altro. Questo modo di dimostrare che due insiemi sono uguali si chiama **doppia inclusione**, e nella prossima lezione servirà spesso.

> [!DIM] perché vale la proposizione 1.9
> 1. Se $A = B$, i due insiemi hanno gli stessi elementi. Quindi ogni elemento di $A$ sta in $B$, cioè $A \subset B$. E ogni elemento di $B$ sta in $A$, cioè $B \subset A$.
> 2. Al contrario, supponiamo che valgano $A \subset B$ e $B \subset A$. Se ci fosse un elemento di $A$ fuori da $B$, non varrebbe $A \subset B$. Se ci fosse un elemento di $B$ fuori da $A$, non varrebbe $B \subset A$. Quindi nessun elemento sta in uno solo dei due insiemi: hanno gli stessi elementi, cioè $A = B$.

::: prova (a) $\{1, 2, 3\}$ e $\{3, 1, 2, 2\}$ sono uguali? (b) L'insieme degli interi il cui quadrato è 4 è uguale a $\{2\}$?
(a) Sì. Ogni elemento del primo (1, 2 e 3) sta nel secondo, e ogni elemento del secondo sta nel primo.

(b) No. Anche $-2$ ha quadrato 4, perché $(-2) \cdot (-2) = 4$. Quindi $-2$ sta nel primo insieme ma non in $\{2\}$: il primo insieme non è contenuto nel secondo.
:::

> [!RICORDA]
> - Due insiemi sono uguali quando hanno gli stessi elementi.
> - Per dimostrarlo si controllano due contenimenti, il primo nel secondo e il secondo nel primo: è la doppia inclusione.

## I numeri per contare e l'induzione (pp. 5–6)

I numeri che si usano per contare sono 0, 1, 2, 3, 4 e così via, senza fine. Si chiamano **numeri naturali**, e il loro insieme si scrive $\N$, una N con una doppia barra:

$$\N = \{0, 1, 2, 3, \dots\}$$

Nel libro di Mori lo zero è un numero naturale. Alcuni libri lo escludono, ma in questo corso c'è.

Ogni naturale ha un **successivo**: il successivo di 0 è 1, quello di 1 è 2, quello di un numero $n$ è $n + 1$. Il libro scrive il successivo di $n$ come $s(n)$, che si legge «esse di $n$».

L'idea che conta è questa: partendo da 0 e andando avanti di uno alla volta si arriva a **ogni** numero naturale. A 5 si arriva in cinque passi: 0, 1, 2, 3, 4, 5. A un milione si arriva in un milione di passi. Nessun naturale resta fuori.

> [!NOTA] Serve per capire, non per l'esame
> Il libro descrive i naturali con cinque regole, gli **assiomi di Peano**. Sono nel riquadro qui sotto, che puoi saltare: all'esame non vengono chiesti.

> [!APPROFONDIMENTO] gli assiomi di Peano (p. 5)
> Il libro dice che l'insieme $\N$ dei numeri naturali è caratterizzato da questi cinque assiomi (Peano, 1889):
>
> 1. $0 \in \N$;
> 2. ogni $n \in \N$ ha un successore $s(n) \in \N$;
> 3. se $m, n \in \N$ e $m \neq n$ allora $s(m) \neq s(n)$;
> 4. $\forall n \in \N,\ 0 \neq s(n)$;
> 5. se $U \subset \N$ è tale che $0 \in U$ e $s(n) \in U$, $\forall n \in U$, allora $U = \N$.
>
> **Come si legge.** (1) Lo zero è un naturale. (2) Ogni naturale ha un successivo, che è ancora un naturale. (3) Numeri diversi hanno successivi diversi. (4) Lo zero non è il successivo di nessuno: è il primo. (5) Se un insieme di naturali contiene lo zero e, ogni volta che contiene un numero, contiene anche il suo successivo, allora contiene tutti i naturali. La regola 5 si chiama **principio di induzione**. Le regole 2, 3 e 4 insieme dicono che i naturali sono infiniti: $0$, $s(0)$, $s(s(0))$ e così via sono tutti diversi tra loro.

### Il domino

Immagina una fila infinita di tessere del domino, in piedi una dietro l'altra e numerate 0, 1, 2, 3 e così via. Vuoi essere sicuro che cadano tutte. Bastano due cose:

1. **la prima tessera cade**: qualcuno spinge la tessera 0;
2. **ogni tessera che cade fa cadere la successiva**: le tessere sono abbastanza vicine.

Allora cade la 0, che fa cadere la 1, che fa cadere la 2, e così via. Nessuna resta in piedi.

> [!IDEA]
> Per dimostrare che una proprietà vale per **tutti** i numeri naturali bastano due controlli: che valga per 0, e che ogni volta che vale per un numero valga anche per il successivo.

Una **proprietà** dei naturali è una frase che parla di un numero $n$ e che, per ogni $n$, è vera o falsa. Il libro la scrive $\mathcal P(n)$. Due esempi:

- «$n + n$ è pari». Per $n = 3$ dice «$3 + 3 = 6$ è pari»: è vera.
- «$n$ è minore di 10». Per $n = 3$ è vera, per $n = 12$ è falsa.

Il libro enuncia il principio come un teorema, che dice quando si può concludere che una proprietà vale per tutti.

> [!TEOREMA] 1.10 · Dimostrazione per induzione
> Supponiamo assegnata per ogni $n \in \N$ una certa proprietà $\mathcal P(n)$ e supponiamo che
>
> - la proprietà $\mathcal P(0)$ è vera;
> - $\forall n \in \N$ la verità di $\mathcal P(n)$ implica la verità di $\mathcal P(n + 1)$.
>
> Allora la proprietà $\mathcal P(n)$ è vera per ogni $n$.

**Come si legge.** I due punti sono i due controlli del domino.

- Il primo, «$\mathcal P(0)$ è vera», si chiama **passo base**: la prima tessera cade.
- Il secondo si legge «per ogni $n$ naturale, se $\mathcal P(n)$ è vera allora è vera anche $\mathcal P(n + 1)$». Si chiama **passo induttivo**: ogni tessera fa cadere la successiva. Mentre lo dimostri, la frase «$\mathcal P(n)$ è vera» si chiama **ipotesi induttiva**: la supponi vera e la usi.

> [!DIM] perché il teorema 1.10 viene dal principio di induzione
> Prendi l'insieme $U$ dei numeri naturali per cui la proprietà è vera. Lo zero sta in $U$, perché $\mathcal P(0)$ è vera. Se un numero $n$ sta in $U$, anche $n + 1$ sta in $U$, per il passo induttivo. Per la regola 5 degli assiomi di Peano, $U$ contiene tutti i naturali: la proprietà è vera per ogni $n$.

### Partire da 1, o da un altro numero

Spesso una formula ha senso solo da 1 in poi, come «la somma dei numeri da 1 a $n$». Allora il passo base si fa con $n = 1$ invece che con $n = 0$, e la conclusione vale per ogni $n$ maggiore o uguale a 1. È la Nota 1.11 del libro.

Si può partire anche da 3 o da 5: la proprietà vale allora da quel numero in poi. Lo vedi negli esercizi 7 e 8.

> [!TRAPPOLA] Il passo base non si salta
> Prendi la proprietà «$n = n + 1$». È falsa per ogni numero, eppure il passo induttivo funziona: se fosse $n = n + 1$, aggiungendo 1 a tutti e due i lati verrebbe $n + 1 = n + 2$. Quello che manca è il passo base: $0 = 1$ è falso. Senza la prima tessera non cade niente.

::: prova Sai che $\mathcal P(0)$ è vera e che il passo induttivo funziona. Perché è vera $\mathcal P(3)$?
Dal passo base $\mathcal P(0)$ è vera.

Il passo induttivo con $n = 0$ dà $\mathcal P(1)$. Con $n = 1$ dà $\mathcal P(2)$. Con $n = 2$ dà $\mathcal P(3)$.

Sono tre tessere che cadono una dopo l'altra.
:::

> [!RICORDA]
> - I naturali sono $0, 1, 2, 3, \dots$ e il loro insieme si scrive $\N$.
> - Induzione: passo base (la proprietà vale per il primo numero) e passo induttivo (se vale per $n$, vale per $n + 1$). Allora vale per tutti.
> - Il passo base non si può saltare.

## Dimostrare per induzione, passo per passo (pp. 6–7)

Vediamo l'induzione al lavoro su una formula famosa: la somma dei numeri da 1 a un numero $n$.

Prima proviamo con numeri piccoli. Nella seconda colonna c'è la somma, nella terza un conto che sembra dare sempre lo stesso risultato.

| $n$ | Somma da 1 a $n$ | $\frac{n(n + 1)}2$ |
|--:|---|---|
| 1 | $1$ | $\frac{1 \cdot 2}2 = 1$ |
| 2 | $1 + 2 = 3$ | $\frac{2 \cdot 3}2 = 3$ |
| 3 | $1 + 2 + 3 = 6$ | $\frac{3 \cdot 4}2 = 6$ |
| 4 | $1 + 2 + 3 + 4 = 10$ | $\frac{4 \cdot 5}2 = 10$ |
| 10 | $1 + 2 + \dots + 10 = 55$ | $\frac{10 \cdot 11}2 = 55$ |

In ogni riga le ultime due colonne coincidono. Sembra che valga sempre questa formula:

$$1 + 2 + 3 + \dots + n = \frac{n(n + 1)}2$$

Si legge «la somma dei numeri da 1 a $n$ è uguale a $n$ per $n$ più uno, diviso due».

Però cinque righe di tabella non bastano: i numeri sono infiniti, e nessuno può controllarli tutti. L'induzione permette di dimostrarlo per tutti in un colpo solo.

> [!ESEMPIO] La somma dei numeri da 1 a $n$
> La proprietà è la formula qui sopra, e parte da $n = 1$.
>
> **Passo base.** Per $n = 1$ a sinistra c'è solo il numero 1. A destra c'è $\frac{1 \cdot 2}2 = 1$. I due lati sono uguali.
>
> **Ipotesi induttiva.** Supponiamo che la formula sia vera per un certo numero $n$:
> $$1 + 2 + \dots + n = \frac{n(n + 1)}2$$
>
> **Obiettivo.** Arrivare alla stessa formula con $n + 1$ al posto di $n$, cioè a
> $$1 + 2 + \dots + n + (n + 1) = \frac{(n + 1)(n + 2)}2$$
>
> **Passo induttivo.** Partiamo dal lato sinistro dell'obiettivo, un passo per riga.
>
> 1. I primi addendi, da 1 a $n$, per l'ipotesi induttiva fanno $\frac{n(n + 1)}2$. Quindi il lato sinistro è $\frac{n(n + 1)}2 + (n + 1)$.
> 2. Il primo pezzo è $(n + 1)$ per $\frac n2$, il secondo è $(n + 1)$ per 1. Raccogliamo il fattore comune $n + 1$: viene $(n + 1)\left(\frac n2 + 1\right)$.
> 3. Dentro la parentesi, $\frac n2 + 1 = \frac n2 + \frac 22 = \frac{n + 2}2$.
> 4. Quindi il lato sinistro è $\frac{(n + 1)(n + 2)}2$: proprio il lato destro dell'obiettivo.
>
> **Conclusione.** Passo base e passo induttivo funzionano. Per il principio di induzione la formula vale per ogni $n \ge 1$.

> [!RIPASSO] raccogliere un fattore comune
> Se due addendi hanno lo stesso fattore, lo si può «tirare fuori»: $a \cdot b + a \cdot c = a \cdot (b + c)$. Con i numeri: $3 \cdot 4 + 3 \cdot 5 = 12 + 15 = 27$, e anche $3 \cdot (4 + 5) = 3 \cdot 9 = 27$. Nel passo 2 qui sopra il fattore comune è $n + 1$.

### L'esempio del libro: la somma dei quadrati

Il libro fa la stessa cosa con i quadrati. Prima una scrittura che usa per le somme lunghe.

> [!RIPASSO] il simbolo di sommatoria
> Una somma lunga si scrive con la lettera greca $\Sigma$, «sigma» maiuscola. La scrittura $\sum_{k=1}^{n} F(k)$ si legge «somma per $k$ che va da 1 a $n$ di $F(k)$». Vuol dire $F(1) + F(2) + \dots + F(n)$: al posto di $k$ metti 1, poi 2, e così via fino a $n$, e sommi tutto. Per esempio $\sum_{k=1}^{3} k^2 = 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$.

La formula del libro è

$$\sum_{k=1}^{n} k^2 = 1^2 + 2^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}6$$

Prima la controlliamo con i numeri piccoli.

| $n$ | Somma dei quadrati | $\frac{n(n + 1)(2n + 1)}6$ |
|--:|---|---|
| 1 | $1$ | $\frac{1 \cdot 2 \cdot 3}6 = 1$ |
| 2 | $1 + 4 = 5$ | $\frac{2 \cdot 3 \cdot 5}6 = 5$ |
| 3 | $1 + 4 + 9 = 14$ | $\frac{3 \cdot 4 \cdot 7}6 = 14$ |

> [!ESEMPIO] La somma dei quadrati per induzione (pp. 6–7)
> **Passo base.** Per $n = 1$: a sinistra $1^2 = 1$, a destra $\frac{1 \cdot 2 \cdot 3}6 = 1$.
>
> **Ipotesi induttiva.** La formula vale per $n$: $1^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}6$.
>
> **Obiettivo.** Con $n + 1$ al posto di $n$ la formula diventa
> $$1^2 + \dots + (n + 1)^2 = \frac{(n + 1)(n + 2)(2n + 3)}6$$
> perché $(n + 1) + 1 = n + 2$ e $2(n + 1) + 1 = 2n + 3$.
>
> **Passo induttivo.**
>
> 1. Per l'ipotesi induttiva il lato sinistro è $\frac{n(n + 1)(2n + 1)}6 + (n + 1)^2$.
> 2. Raccogliamo $n + 1$, che sta in tutti e due gli addendi: $(n + 1)\left(\frac{n(2n + 1)}6 + (n + 1)\right)$.
> 3. Nella parentesi mettiamo tutto su 6: $\frac{2n^2 + n}6 + \frac{6n + 6}6 = \frac{2n^2 + 7n + 6}6$.
> 4. Controlliamo che $(n + 2)(2n + 3) = 2n^2 + 3n + 4n + 6 = 2n^2 + 7n + 6$.
> 5. Quindi il lato sinistro è $\frac{(n + 1)(n + 2)(2n + 3)}6$, che è l'obiettivo.
>
> **Conclusione.** Per il principio di induzione la formula vale per ogni $n \ge 1$.

> [!METODO] Dimostrare una formula per induzione
> 1. Scrivi la formula e da quale numero parte: 0, 1 o un altro.
> 2. **Passo base.** Metti il primo numero nei due lati e controlla che vengano uguali.
> 3. **Ipotesi induttiva.** Scrivi «supponiamo che la formula valga per $n$», con la formula.
> 4. **Obiettivo.** Riscrivi la formula con $n + 1$ al posto di $n$, e semplifica i conti come $(n + 1) + 1 = n + 2$.
> 5. **Passo induttivo.** Parti dal lato sinistro dell'obiettivo. Trova il pezzo che compare nell'ipotesi e sostituiscilo. Poi fai i conti fino al lato destro.
> 6. **Conclusione.** Scrivi «per il principio di induzione la formula vale per ogni $n$», dal numero di partenza in poi.

::: prova Controlla la formula $1 + 3 + 5 + \dots + (2n - 1) = n^2$ per $n = 1, 2, 3, 4$. La dimostrazione completa è l'esercizio 6.
L'ultimo numero della somma è $2n - 1$: per $n = 4$ è 7.

Per $n = 1$ a sinistra c'è solo 1, e $1^2 = 1$.

Per $n = 2$: $1 + 3 = 4 = 2^2$.

Per $n = 3$: $1 + 3 + 5 = 9 = 3^2$.

Per $n = 4$: $1 + 3 + 5 + 7 = 16 = 4^2$.
:::

> [!RICORDA]
> - Prima si controlla la formula con i numeri piccoli, poi la si dimostra per induzione.
> - Nel passo induttivo si parte dal lato sinistro con $n + 1$, si usa l'ipotesi induttiva e si arriva al lato destro.

## Quanti sottoinsiemi ha un insieme (p. 7)

In pizzeria puoi aggiungere alla margherita tre ingredienti: olive, funghi, basilico. Puoi prenderne quanti vuoi, anche nessuno o tutti e tre. Quante pizze diverse puoi ordinare?

Per ogni ingrediente la scelta è doppia: lo metti o non lo metti. Tre scelte da due possibilità l'una danno $2 \cdot 2 \cdot 2 = 8$ pizze. Ogni pizza è un sottoinsieme dell'insieme degli ingredienti: la margherita semplice è il vuoto, la pizza con tutto è l'insieme intero.

Contiamo i sottoinsiemi di insiemi sempre più grandi.

| Insieme | I suoi sottoinsiemi | Quanti |
|---|---|--:|
| $\emptyset$ | $\emptyset$ | $1$ |
| $\{a\}$ | $\emptyset$, $\{a\}$ | $2$ |
| $\{a, b\}$ | $\emptyset$, $\{a\}$, $\{b\}$, $\{a, b\}$ | $4$ |
| $\{a, b, c\}$ | i quattro di prima, più gli stessi con dentro anche $c$ | $8$ |

Ogni volta che si aggiunge un elemento, il numero dei sottoinsiemi raddoppia: 1, 2, 4, 8, 16 e così via. Sono le **potenze di 2**.

> [!RIPASSO] le potenze di 2
> $2^n$ si legge «due alla $n$» e vuol dire 2 moltiplicato per sé stesso $n$ volte. Per convenzione $2^0 = 1$.
>
> | $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 |
> |---|--:|--:|--:|--:|--:|--:|--:|--:|
> | $2^n$ | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 1024 |
>
> Passando da $n$ a $n + 1$ si moltiplica per 2: $2^{n + 1} = 2 \cdot 2^n$.

### Perché raddoppia

Prendi i sottoinsiemi di $\{a, b, c\}$ e dividili in due righe. In alto metti quelli **senza** $c$. In basso, sotto ognuno, lo stesso insieme **con** $c$ in più.

| Senza $c$ | $\emptyset$ | $\{a\}$ | $\{b\}$ | $\{a, b\}$ |
|---|---|---|---|---|
| **Con $c$** | $\{c\}$ | $\{a, c\}$ | $\{b, c\}$ | $\{a, b, c\}$ |

La riga in alto contiene esattamente i sottoinsiemi di $\{a, b\}$, che sono 4. La riga in basso ne ha altrettanti, perché ognuno nasce da quello sopra aggiungendo $c$. In tutto $4 + 4 = 8$.

> [!IDEA]
> Un insieme con $n$ elementi ha $2^n$ sottoinsiemi. Con i simboli: se $\lvert A \rvert = n$, allora $\lvert P(A) \rvert = 2^n$.

> [!ESEMPIO] La dimostrazione per induzione del libro (p. 7)
> La proprietà è «ogni insieme con $n$ elementi ha $2^n$ sottoinsiemi». Parte da $n = 0$.
>
> **Passo base.** L'unico insieme con 0 elementi è il vuoto. Il suo unico sottoinsieme è il vuoto stesso: $P(\emptyset) = \{\emptyset\}$ ha 1 elemento, e $2^0 = 1$.
>
> **Ipotesi induttiva.** Ogni insieme con $n$ elementi ha $2^n$ sottoinsiemi.
>
> **Passo induttivo.** Prendi un insieme con $n + 1$ elementi e chiamali $a_1, a_2, \dots, a_{n+1}$. Il numerino in basso, l'**indice**, dice solo il posto nella lista: $a_1$ è il primo elemento, $a_{n+1}$ l'ultimo.
>
> 1. Dividi i sottoinsiemi in due righe: in alto quelli che non contengono l'ultimo elemento, in basso quelli che lo contengono.
> 2. La riga in alto contiene i sottoinsiemi di $B = \{a_1, \dots, a_n\}$, che ha $n$ elementi. Per l'ipotesi induttiva sono $2^n$.
> 3. Sotto ogni insieme della riga in alto c'è lo stesso insieme con in più $a_{n+1}$. Quindi la riga in basso ha tanti insiemi quanti quella in alto: altri $2^n$.
> 4. In tutto sono $2^n + 2^n = 2 \cdot 2^n = 2^{n + 1}$.
>
> È la formula con $n + 1$ al posto di $n$. Per il principio di induzione vale per ogni $n$.

> [!OLTRE] · un altro modo di contare: i bit
> Metti in fila gli elementi, per esempio $a$, $b$, $c$. A ogni sottoinsieme associa una parola di tre cifre, ognuna 0 oppure 1. La prima cifra dice se $a$ c'è (1) o no (0), la seconda fa lo stesso per $b$, la terza per $c$. Per esempio $101$ è $\{a, c\}$ e $000$ è il vuoto. Sottoinsiemi diversi danno parole diverse, e ogni parola dà un sottoinsieme. Le parole di $n$ cifre fatte di 0 e 1 sono $2^n$: è lo stesso conto che si fa con i **bit** nella lezione 01 di Fondamenti dell'Informatica.

### Contare con una condizione: un problema d'esame

Nei problemi d'esame il conto dei sottoinsiemi arriva spesso con una condizione.

> [!ESEMPIO] Un problema dell'appello del 09/06/2023 (problema 1, primo punto)
> Il testo: «Sia $S = \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$, $T = \{0, 1, 3, 4\}$. Quanti sono i sottoinsiemi di $S$ non contenenti il sottoinsieme $T$?» (3 punti).
>
> In pratica chiede: quanti sottoinsiemi di $S$ **non** hanno dentro tutti e quattro i numeri 0, 1, 3 e 4?
>
> 1. **Tutti i sottoinsiemi.** $S$ ha 10 elementi, quindi ha $2^{10} = 1024$ sottoinsiemi.
> 2. **Quelli che contengono $T$.** Devono avere dentro 0, 1, 3 e 4. Gli altri sei elementi, cioè 2, 5, 6, 7, 8 e 9, si possono mettere o no a piacere. Sono 6 scelte libere, quindi questi sottoinsiemi sono $2^6 = 64$.
> 3. **Quelli che non contengono $T$** sono tutti gli altri: $1024 - 64 = 960$.
>
> La soluzione ufficiale scrive il risultato come $2^{10} - 2^6$: in alcuni appelli il testo chiede proprio di lasciare indicate le potenze.

::: prova (a) Quanti sottoinsiemi ha $\{1, 2, 3, 4, 5\}$? (b) Quanti di questi contengono il numero 1?
(a) Gli elementi sono 5, quindi i sottoinsiemi sono $2^5 = 32$.

(b) L'1 deve esserci. Per gli altri quattro elementi la scelta è libera: $2^4 = 16$. È esattamente la metà: è la riga «con» della tabella divisa in due righe.
:::

> [!RICORDA]
> - Un insieme con $n$ elementi ha $2^n$ sottoinsiemi: per ogni elemento la scelta è «dentro» o «fuori».
> - Per contare i sottoinsiemi che contengono certi elementi, si fissano quelli e si sceglie liberamente il resto.

## Gli altri insiemi di numeri (p. 8)

Dai numeri naturali, con le regole degli insiemi, si costruiscono le altre famiglie di numeri che conosci. Il libro le elenca nella Nota 1.12 e le considera note: la loro costruzione non fa parte del corso.

| Simbolo | Si legge | Che cosa contiene | Esempi |
|---|---|---|---|
| $\Z$ | «zeta» | gli interi: i naturali e i loro opposti | $-5$, $0$, $7$ |
| $\Q$ | «cu» | i razionali: le frazioni $\frac ab$ con $a$ e $b$ interi, e $b \neq 0$ | $\frac 12$, $-\frac 34$ |
| $\R$ | «erre» | i reali: anche i numeri con infinite cifre dopo la virgola | $\sqrt 2$, $\pi$ |

Ogni famiglia contiene la precedente: ogni naturale è un intero, ogni intero è una frazione, ogni frazione è un numero reale. Con i simboli: $\N \subset \Z \subset \Q \subset \R$. Ne parla per esteso la [lezione L01 della parte 2](L01_numeri_reali.html), Algebra lineare e Geometria.

Il libro ricorda anche due scritture per i numeri reali compresi tra due numeri $a$ e $b$, con $a$ minore o uguale a $b$.

- $(a, b)$ è l'**intervallo aperto**: i numeri compresi tra $a$ e $b$, estremi esclusi.
- $[a, b]$ è l'**intervallo chiuso**: i numeri compresi tra $a$ e $b$, estremi compresi.

::: prova (a) $-3$ sta in $\N$? E in $\Z$? (b) Il numero 2 sta in $(1, 2)$? E in $[1, 2]$?
(a) $-3$ non è un naturale, perché i naturali non sono mai negativi. È un intero, quindi $-3 \in \Z$.

(b) $2 \notin (1, 2)$, perché nell'intervallo aperto gli estremi sono esclusi. $2 \in [1, 2]$, perché nell'intervallo chiuso gli estremi sono compresi.
:::

> [!RICORDA]
> - $\N$ naturali, $\Z$ interi, $\Q$ frazioni, $\R$ reali: ogni famiglia contiene la precedente.
> - Tonde: estremi esclusi. Quadre: estremi compresi.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\{\ \}$ | «l'insieme che contiene…» | le graffe racchiudono gli elementi | $\{1, 2, 3\}$ |
| $\in$ | «appartiene a» | è un elemento di | $2 \in \{1, 2, 3\}$ |
| $\notin$ | «non appartiene a» | non è un elemento di | $5 \notin \{1, 2, 3\}$ |
| $\dots$ | «e così via» | gli elementi continuano con la stessa regola | $\{0, 2, 4, \dots\}$ |
| $\mid$ | «tali che» | introduce la regola per entrare nell'insieme | $\{n \in \N \mid n < 3\}$ |
| $\mathcal P(x)$ | «pi di $x$» | una proprietà di $x$, vera o falsa | «$x$ è pari» |
| $\forall$ | «per ogni» | per tutti gli elementi, nessuno escluso | $\forall n \in \N,\ n \ge 0$ |
| $\exists$ | «esiste» | ce n'è almeno uno | $\exists n \in \N$ con $n > 5$ |
| $\sim$, $\neg$ | «non» | il contrario di una frase | $\sim(x \ge 0)$ vuol dire $x < 0$ |
| $\emptyset$ | «insieme vuoto» | l'insieme senza elementi | $\lvert \emptyset \rvert = 0$ |
| $\lvert A \rvert$ | «cardinalità di $A$» | il numero degli elementi di $A$ | $\lvert \{a, b\} \rvert = 2$ |
| $\infty$ | «infinito» | la cardinalità di un insieme infinito | $\lvert \N \rvert = \infty$ |
| $\subset$ | «è contenuto in» | è un sottoinsieme (può anche essere uguale) | $\{1\} \subset \{1, 2\}$ |
| $\not\subset$ | «non è contenuto in» | almeno un elemento sta fuori | $\{1, 4\} \not\subset \{1, 2\}$ |
| $\subseteq$, $\subsetneq$ | «contenuto o uguale», «contenuto strettamente» | le scritture di altri testi e dei canali A e C | $\{1\} \subsetneq \{1, 2\}$ |
| $P(A)$ | «parti di $A$» | l'insieme di tutti i sottoinsiemi di $A$ | $P(\{a\}) = \{\emptyset, \{a\}\}$ |
| $\iff$ | «se e solo se» | esattamente quando | $A = B \iff A \subset B$ e $B \subset A$ |
| $\N$ | «enne» | i numeri naturali, zero compreso | $0, 1, 2, \dots$ |
| $s(n)$ | «esse di $n$» | il successivo di $n$ | $s(4) = 5$ |
| $\mathcal P(n)$ | «pi di $n$» | una proprietà che dipende dal numero $n$ | «$n + n$ è pari» |
| $\sum_{k=1}^{n}$ | «somma per $k$ da 1 a $n$» | somma dei termini con $k = 1, 2, \dots, n$ | $\sum_{k=1}^{3} k = 6$ |
| $a_1, \dots, a_n$ | «a uno, …, a enne» | un elenco di $n$ oggetti numerati | $a_1$ è il primo |
| $2^n$ | «due alla $n$» | 2 moltiplicato per sé stesso $n$ volte | $2^3 = 8$ |
| $\Z$, $\Q$, $\R$ | «zeta», «cu», «erre» | interi, razionali, reali | $-3 \in \Z$ |
| $(a, b)$, $[a, b]$ | «intervallo aperto», «intervallo chiuso» | i reali tra $a$ e $b$, estremi esclusi o compresi | $2 \in [1, 2]$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C: la preparano e la correggono insieme i docenti dei tre canali. Al 01/10/2026 le regole del 2026/27 non sono ancora uscite. Quelle del 2025/26 dicono così.

**Com'è fatta la prova**

- **10 domande a risposta multipla**, ognuna con 5 risposte e una sola giusta. Una risposta giusta vale 1 punto; una sbagliata o vuota vale 0.
- **2 problemi** a risposta aperta, divisi in più domande con il punteggio scritto accanto.
- **Sbarramento.** Con meno di 6 punti nel quiz la prova non è superata, e i problemi non vengono nemmeno corretti.
- **Sufficienza:** almeno 18 punti in tutto. **Durata:** 2 ore.
- **Materiale ammesso:** libro di testo e appunti del corso, e una calcolatrice non programmabile. È diverso dalla prova di Algebra lineare, dove si possono portare solo 4 facciate scritte a mano e niente calcolatrice.

| Appello 2026/27 | Iscrizioni su MyUniTo (appello «M.D.A.G.1») | Ora |
|---|---|---|
| mar 19/01/2027 | 30/12/2026 – 12/01/2027 | 14:00 |
| mer 03/02/2027 | 14/01 – 27/01/2027 | 14:00 |

Le iscrizioni chiudono circa una settimana prima e non si riaprono. Il voto di MDAG è la media delle due prove, Matematica Discreta e Algebra lineare. Dettagli e fonti nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa serve di questa lezione**

1. **La domanda 1 del quiz.** In tutti i nove appelli del 2025 e del 2026 di cui ho trovato il quiz, la prima domanda riguarda gli insiemi. A volte basta questa lezione: elementi e sottoinsiemi, come il 13/01/2026 e il 10/09/2026. A volte servono anche unione, intersezione e prodotto cartesiano, che arrivano nella prossima lezione. Quasi sempre le risposte sbagliate giocano sulla differenza tra elemento e sottoinsieme.
2. **«Per ogni» ed «esiste».** Nell'appello del 06/06/2025 la domanda 2 chiedeva un controesempio. È l'esempio svolto nella sezione sui quantificatori.
3. **Contare i sottoinsiemi.** Nei problemi torna il conto delle potenze di 2, spesso con una condizione: appelli del 09/06/2023 (problema 1, primo punto) e del 06/06/2025 (problema 1, punto b).
4. **L'induzione.** Negli appelli di Matematica Discreta dal 2021 al 2026 non ho trovato domande che chiedano di scrivere una dimostrazione per induzione: serve per capire le dimostrazioni del libro. A Fondamenti dell'Informatica, invece, il principio di induzione è tra gli argomenti dei quiz.

**Una domanda vera, letta insieme**

> [!ESEMPIO] Appello del 13/01/2026, domanda 1 (una delle versioni)
> Il testo: «Sia $A = \{b, e, h, k, m, p, q, s, u, x\}$. Allora: 1. $t \in A$; 2. $h \notin A$; 3. $\{h, s\} \in A$; 4. $\{k, q, u\} \subset A$; 5. $\{e, s, y\} \subset A$.»
>
> In pratica chiede: quale delle cinque frasi è vera? $A$ ha dieci elementi, e sono tutti **lettere**, nessuno è un insieme. Vediamo le risposte una per una.
>
> 1. $t \in A$: la lettera $t$ non è nella lista. Falsa.
> 2. $h \notin A$: la lettera $h$ è nella lista, quindi appartiene ad $A$. Falsa.
> 3. $\{h, s\} \in A$: gli elementi di $A$ sono lettere, e l'insieme $\{h, s\}$ non è tra loro. Falsa. Sarebbe vera la frase $\{h, s\} \subset A$.
> 4. $\{k, q, u\} \subset A$: le lettere $k$, $q$ e $u$ sono tutte nella lista. **Vera.**
> 5. $\{e, s, y\} \subset A$: la lettera $y$ non è nella lista. Falsa.
>
> La risposta è la 4. La trappola è la 3: le lettere $h$ e $s$ ci sono, ma le graffe e il simbolo di appartenenza chiedono un'altra cosa.

**Errori da evitare**

- Confondere «è un elemento di» con «è un sottoinsieme di». Usa il metodo della sezione sui sottoinsiemi.
- Contare due volte un elemento ripetuto, oppure contare uno per uno gli elementi chiusi dentro graffe interne.
- Dimenticare il vuoto e l'insieme intero quando elenchi i sottoinsiemi.
- Dire il contrario di «tutti» con «nessuno».
- Nel passo induttivo, usare la formula per $n + 1$ invece di arrivarci.

> [!ESAME] Libro e appunti sono ammessi, ma il tempo è poco
> Alla prova di Matematica Discreta puoi portare libro e appunti. Le ore però sono solo 2, per 10 domande e 2 problemi: non c'è tempo per cercare le cose. Conviene preparare un foglio di riepilogo. Da questa lezione: il metodo «elemento o sottoinsieme?» e il conto dei sottoinsiemi con una condizione. Un riepilogo già pronto, scritto da uno studente seguendo il libro di Mori, è [Rigurgiti di Unicorno](https://github.com/bocchinovalentino/rigurgiti_di_unicorno): teoria ed esercizi svolti, con licenza CC BY-NC-SA. Non è materiale ufficiale.

## Quiz

```quiz
D: (Appello del 10/09/2026, domanda 1) Sia $X = \{c, \{f, m\}, p, q, \{x\}\}$. Allora:
- $q \subset X$
- $\{c, p\} \in X$
+ $\{f, m\} \in X$
- $\{x\} \subset X$
- $\emptyset \in X$
= Gli elementi di $X$ sono cinque: le lettere $c$, $p$, $q$ e i due insiemi $\{f, m\}$ e $\{x\}$. La frase giusta è $\{f, m\} \in X$, perché l'insieme $\{f, m\}$ è proprio uno dei cinque elementi. $q \subset X$ è sbagliata perché $q$ è una lettera, non un insieme. $\{c, p\} \in X$ è sbagliata perché l'insieme $\{c, p\}$ non è tra gli elementi: sarebbe giusto $\{c, p\} \subset X$. La risposta più tentatrice è $\{x\} \subset X$: per essere vera servirebbe che la lettera $x$ fosse un elemento di $X$, ma in $X$ c'è solo l'insieme $\{x\}$. Infine il vuoto è un sottoinsieme di ogni insieme, ma non è un elemento di $X$.

D: (Appello del 10/09/2026, domanda 1, altra versione) Sia $X = \{a, \{d, p\}, m, y, \{z\}\}$. Allora:
- $p \in X$
+ $z \notin X$
- $\{y, z\} \subset X$
- $\{d, p\} \subset X$
- $\emptyset \in X$
= Gli elementi di $X$ sono cinque: $a$, $m$, $y$ e gli insiemi $\{d, p\}$ e $\{z\}$. La lettera $z$ da sola non è tra loro: sta dentro l'insieme $\{z\}$. Quindi $z \notin X$ è vera. $p \in X$ è falsa per lo stesso motivo: $p$ sta dentro $\{d, p\}$. $\{y, z\} \subset X$ è falsa perché $z$ non è un elemento di $X$. $\{d, p\} \subset X$ è la più tentatrice: è falsa perché richiederebbe $d$ e $p$ tra gli elementi; è vera invece $\{d, p\} \in X$. Il vuoto non è un elemento di $X$.

D: (Appello del 18/01/2023, domanda 1) Sia $A = \{a, b, c, d, e, f\}$. Allora:
- $a \in P(A)$
- $b \subset A$
- $(c, f) \subset A$
+ $\{a, b, c\} \in P(A)$
- $\{c, d, e\} \subset P(A)$
= Gli elementi di $P(A)$ sono i sottoinsiemi di $A$. $\{a, b, c\}$ è un sottoinsieme di $A$, quindi è un elemento di $P(A)$: è la risposta giusta. $a \in P(A)$ è sbagliata, perché $a$ è un elemento di $A$ e non un suo sottoinsieme. $b \subset A$ è sbagliata perché $b$ non è un insieme. $(c, f)$, con le tonde, è una coppia ordinata (prossima lezione) e non un insieme di elementi di $A$. La più tentatrice è $\{c, d, e\} \subset P(A)$: vorrebbe dire che $c$, $d$ ed $e$ sono elementi di $P(A)$, cioè sottoinsiemi di $A$, e non lo sono. Sarebbe giusto $\{c, d, e\} \in P(A)$.

D: (Appello del 06/06/2025, domanda 2, altra versione) L'affermazione «$\forall x \in \N, \forall y \in \N, x^2 - x \ge y$» è contraddetta da:
- $(x, y) = (5, 10)$
- $(x, y) = (-4, 10)$
- $(x, y) = (2, 2)$
+ $(x, y) = (3, 7)$
- $(x, y) = (4, -2)$
= Serve una coppia di numeri naturali per cui la disuguaglianza è falsa. Per $(3, 7)$: $9 - 3 = 6$, e $6 \ge 7$ è falso, quindi è un controesempio. Per $(5, 10)$: $25 - 5 = 20 \ge 10$, vero. Per $(2, 2)$: $4 - 2 = 2 \ge 2$, vero, perché vale anche l'uguale: è la risposta più tentatrice. Le coppie con $-4$ e $-2$ non contano, perché quei numeri non sono naturali.

D: Quanti elementi ha l'insieme delle parti di $\{1, 2, 3, 4\}$?
- $4$
- $8$
+ $16$
- $24$
- $32$
= L'insieme delle parti ha come elementi tutti i sottoinsiemi. Un insieme con 4 elementi ha $2^4 = 16$ sottoinsiemi: per ognuno dei 4 elementi la scelta è «dentro» o «fuori», e $2 \cdot 2 \cdot 2 \cdot 2 = 16$. La risposta $4$ conta solo gli elementi. La risposta $8$ è il conto per un insieme con 3 elementi. Tra i 16 ci sono anche il vuoto e l'insieme intero.

D: Qual è il contrario della frase «ogni studente del corso ha superato l'esame»?
- «Nessuno studente del corso ha superato l'esame.»
+ «Almeno uno studente del corso non ha superato l'esame.»
- «Almeno uno studente del corso ha superato l'esame.»
- «Ogni studente del corso è stato bocciato.»
- «Esattamente uno studente del corso non ha superato l'esame.»
= Per dire il contrario «per ogni» diventa «esiste», e la proprietà diventa il suo contrario: «esiste uno studente che non ha superato l'esame». La risposta più tentatrice è «nessuno studente ha superato l'esame», ma è troppo forte: per smentire «tutti» basta un bocciato. Anche «esattamente uno» è sbagliata, perché i bocciati possono essere più di uno.

D: Quanti elementi ha l'insieme $\{\emptyset, \{\emptyset\}, \{1, 2\}\}$?
- $0$
- $2$
+ $3$
- $4$
- $5$
= Gli elementi si contano guardando le virgole al primo livello di graffe. Sono tre: il vuoto, l'insieme che contiene il vuoto e l'insieme $\{1, 2\}$. Il vuoto è un elemento come gli altri, anche se non contiene niente. La risposta $4$ viene se si contano 1 e 2 separatamente, ma stanno dentro un sacchetto interno e contano come un elemento solo.

D: Sia $A = \{1, 2, 3\}$. Quale di queste frasi è vera?
- $\emptyset \in A$
+ $\emptyset \subset A$
- $\{1\} \in A$
- $1 \subset A$
- $\{1, 4\} \subset A$
= Il vuoto è un sottoinsieme di ogni insieme, quindi $\emptyset \subset A$ è vera. Non è però un elemento di $A$: gli elementi sono 1, 2 e 3. $\{1\} \in A$ è sbagliata, perché tra gli elementi c'è il numero 1, non l'insieme $\{1\}$. $1 \subset A$ è sbagliata perché 1 non è un insieme. $\{1, 4\} \subset A$ è sbagliata perché il 4 non sta in $A$.

D: Vuoi dimostrare per induzione che una formula vale per ogni $n \ge 1$. Che cosa devi fare?
- Controllare la formula per $n = 1, 2, 3$ e $4$.
- Supporre la formula vera per $n + 1$ e ricavarla per $n$.
+ Controllarla per $n = 1$ e dimostrare che, se vale per $n$, vale anche per $n + 1$.
- Dimostrare che, se vale per $n$, vale anche per $n + 1$: il passo base non serve.
- Controllarla per $n = 0$ e per $n = 1$.
= Servono il passo base, cioè il controllo per il primo numero, qui 1, e il passo induttivo, cioè da $n$ a $n + 1$. Controllare alcuni numeri non basta, perché i numeri sono infiniti. Senza passo base non si conclude niente: la proprietà «$n = n + 1$» passa il passo induttivo ma è sempre falsa. Andare da $n + 1$ a $n$ è la direzione sbagliata.

D: Quanti sottoinsiemi di $\{1, 2, 3, 4, 5, 6\}$ contengono il numero 1?
- $6$
- $16$
+ $32$
- $63$
- $64$
= Il numero 1 deve esserci. Per gli altri cinque elementi la scelta è libera, quindi i sottoinsiemi sono $2^5 = 32$. La risposta $64 = 2^6$ conta tutti i sottoinsiemi, anche quelli senza l'1. I sottoinsiemi con l'1 sono esattamente la metà di tutti.
```

## Esercizi

::: esercizio base Dall'elenco alla regola e ritorno
Scrivi con l'elenco: (a) $\{n \in \N \mid n < 5\}$; (b) $\{n \in \N \mid n \text{ è dispari e } n < 10\}$. Scrivi con una regola: (c) $\{0, 3, 6, 9, 12\}$.
::: soluzione
1. (a) I naturali minori di 5 sono 0, 1, 2, 3 e 4. L'insieme è $\{0, 1, 2, 3, 4\}$. Lo zero c'è, perché nel libro è un naturale.
2. (b) I numeri dispari minori di 10 sono 1, 3, 5, 7 e 9. L'insieme è $\{1, 3, 5, 7, 9\}$.
3. (c) Sono i multipli di 3 da 0 a 12. Una regola possibile: $\{n \in \N \mid n \text{ è multiplo di } 3 \text{ e } n \le 12\}$.

Controllo della (c): i multipli di 3 fino a 12 sono $3 \cdot 0$, $3 \cdot 1$, $3 \cdot 2$, $3 \cdot 3$ e $3 \cdot 4$, cioè proprio 0, 3, 6, 9 e 12.
:::

::: esercizio base Contare gli elementi
Calcola la cardinalità: (a) $\{x, y, x, z\}$; (b) $\{\{x, y\}, z\}$; (c) $\{\emptyset, 0\}$; (d) $P(\{1, 2, 3\})$.
::: soluzione
1. (a) Gli elementi sono $x$, $y$ e $z$: la $x$ ripetuta si conta una volta. La cardinalità è 3.
2. (b) Gli elementi sono due: l'insieme $\{x, y\}$ e la lettera $z$. La cardinalità è 2.
3. (c) Gli elementi sono due: il vuoto e il numero zero, che sono oggetti diversi. La cardinalità è 2.
4. (d) L'insieme ha 3 elementi, quindi i suoi sottoinsiemi sono $2^3 = 8$. La cardinalità è 8.
:::

::: esercizio base Esercizio 1.1 del libro: vero o falso
Prendi $A = \{a, b, c\}$. Di' quali di queste affermazioni sono vere e quali false: $b \in A$, $\emptyset \subset A$, $\{\emptyset\} \subset A$, $\{c, d\} \not\subset A$, $\{a, \{c\}\} \subset A$.
::: soluzione
| Affermazione | Vera o falsa | Perché |
|---|---|---|
| $b \in A$ | vera | la lettera $b$ è nella lista |
| $\emptyset \subset A$ | vera | il vuoto è un sottoinsieme di ogni insieme |
| $\{\emptyset\} \subset A$ | falsa | servirebbe che il vuoto fosse un elemento di $A$, ma gli elementi sono le lettere $a$, $b$, $c$ |
| $\{c, d\} \not\subset A$ | vera | la lettera $d$ non sta in $A$, quindi $\{c, d\}$ non è contenuto in $A$ |
| $\{a, \{c\}\} \subset A$ | falsa | $a$ sta in $A$, ma l'insieme $\{c\}$ no: in $A$ c'è la lettera $c$, non l'insieme $\{c\}$ |

La terza e la quinta riga sono la stessa trappola: un insieme dentro le graffe è un elemento diverso dai suoi elementi.
:::

::: esercizio base Esercizio 1.3 del libro: l'insieme delle parti
Prendi $A = \{a, e, i, o, u\}$. Di' quali di queste affermazioni sono vere e quali false: $\emptyset \in P(A)$, $a \in P(A)$, $\{i, u\} \subset P(A)$, $\{e, o\} \in P(A)$, $\{\{e\}, \{o\}\} \subset P(A)$.
::: soluzione
Ricorda: gli elementi di $P(A)$ sono i sottoinsiemi di $A$.

| Affermazione | Vera o falsa | Perché |
|---|---|---|
| $\emptyset \in P(A)$ | vera | il vuoto è un sottoinsieme di $A$, quindi un elemento di $P(A)$ |
| $a \in P(A)$ | falsa | $a$ è una lettera, non un sottoinsieme di $A$ |
| $\{i, u\} \subset P(A)$ | falsa | servirebbe che $i$ e $u$ fossero elementi di $P(A)$, ma sono lettere |
| $\{e, o\} \in P(A)$ | vera | $\{e, o\}$ è un sottoinsieme di $A$ |
| $\{\{e\}, \{o\}\} \subset P(A)$ | vera | i suoi due elementi, $\{e\}$ e $\{o\}$, sono sottoinsiemi di $A$, quindi elementi di $P(A)$ |

Nella terza riga sarebbe vera la frase $\{i, u\} \in P(A)$.
:::

::: esercizio base Dire il contrario
Scrivi il contrario di queste frasi, e di' se è vera la frase o il suo contrario: (a) «ogni numero naturale è pari»; (b) «esiste un numero naturale maggiore di 100»; (c) «per ogni numero naturale $n$ esiste un naturale più grande di $n$».
::: soluzione
1. (a) Il contrario è «esiste un numero naturale dispari». È vero il contrario: 3 è dispari, ed è il controesempio della frase di partenza.
2. (b) Il contrario è «ogni numero naturale è minore o uguale a 100». È vera la frase di partenza: per esempio 101 è maggiore di 100.
3. (c) Ci sono due quantificatori, e cambiano tutti e due: «per ogni» diventa «esiste» ed «esiste» diventa «per ogni». Il contrario è «esiste un numero naturale $n$ per cui ogni naturale è minore o uguale a $n$». È vera la frase di partenza: qualunque $n$ prendi, il numero $n + 1$ è più grande.
:::

::: esercizio medio Esercizio 1.19 (b) del libro: la somma dei dispari
Dimostra per induzione che $1 + 3 + 5 + \dots + (2n - 1) = n^2$ per ogni $n \ge 1$.
::: soluzione
1. **Passo base**, $n = 1$. A sinistra c'è solo 1. A destra $1^2 = 1$. I due lati sono uguali.
2. **Ipotesi induttiva.** Supponiamo $1 + 3 + \dots + (2n - 1) = n^2$.
3. **Obiettivo.** Con $n + 1$ al posto di $n$, l'ultimo numero della somma è $2(n + 1) - 1 = 2n + 1$. Vogliamo arrivare a $1 + 3 + \dots + (2n - 1) + (2n + 1) = (n + 1)^2$.
4. **Passo induttivo.** Per l'ipotesi, la somma fino a $2n - 1$ vale $n^2$. Quindi il lato sinistro è $n^2 + 2n + 1$.
5. Il quadrato di $n + 1$ è $(n + 1)(n + 1) = n^2 + n + n + 1 = n^2 + 2n + 1$. È lo stesso numero del passo 4, quindi il lato sinistro è $(n + 1)^2$.
6. **Conclusione.** Per il principio di induzione la formula vale per ogni $n \ge 1$.

Controllo con $n = 5$: $1 + 3 + 5 + 7 + 9 = 25 = 5^2$.
:::

::: esercizio medio Esercizio 1.19 (d) del libro: una disuguaglianza
Dimostra per induzione che $n^2 > 2n + 1$ per ogni $n \ge 3$.
::: soluzione
1. **Passo base**, $n = 3$. A sinistra $3^2 = 9$, a destra $2 \cdot 3 + 1 = 7$. Ed è vero che $9 > 7$. Con $n = 2$ invece non funziona: $4 > 5$ è falso. Per questo si parte da 3.
2. **Ipotesi induttiva.** Supponiamo $n^2 > 2n + 1$, per un certo $n \ge 3$.
3. **Obiettivo.** $(n + 1)^2 > 2(n + 1) + 1$, cioè $(n + 1)^2 > 2n + 3$.
4. Il quadrato è $(n + 1)^2 = n^2 + 2n + 1$.
5. Per l'ipotesi $n^2$ è più grande di $2n + 1$. Quindi $n^2 + 2n + 1$ è più grande di $(2n + 1) + 2n + 1 = 4n + 2$.
6. Ora confrontiamo $4n + 2$ con l'obiettivo $2n + 3$. La differenza è $(4n + 2) - (2n + 3) = 2n - 1$, che è positiva per ogni $n \ge 1$. Quindi $4n + 2 > 2n + 3$.
7. Mettendo insieme i passi 5 e 6: $(n + 1)^2 > 4n + 2 > 2n + 3$.
8. **Conclusione.** Per il principio di induzione la disuguaglianza vale per ogni $n \ge 3$.

Controllo: con $n = 4$, $16 > 9$; con $n = 5$, $25 > 11$.
:::

::: esercizio difficile Esercizio 1.19 (e) del libro: le potenze di 2 battono i quadrati
Dimostra per induzione che $2^n > n^2$ per ogni $n \ge 5$.
::: soluzione
1. **Passo base**, $n = 5$. A sinistra $2^5 = 32$, a destra $5^2 = 25$. Ed è vero che $32 > 25$. Con $n = 4$ non funziona: $2^4 = 16$ e $4^2 = 16$ sono uguali.
2. **Ipotesi induttiva.** Supponiamo $2^n > n^2$, per un certo $n \ge 5$.
3. **Obiettivo.** $2^{n + 1} > (n + 1)^2$.
4. Raddoppiare una potenza di 2 vuol dire aggiungere 1 all'esponente: $2^{n + 1} = 2 \cdot 2^n$. Per l'ipotesi $2^n$ è più grande di $n^2$, quindi $2 \cdot 2^n$ è più grande di $2n^2$.
5. Scriviamo $2n^2 = n^2 + n^2$. Per l'esercizio precedente, siccome $n \ge 3$, vale $n^2 > 2n + 1$. Quindi $n^2 + n^2 > n^2 + 2n + 1$.
6. E $n^2 + 2n + 1 = (n + 1)^2$, come nell'esercizio 6.
7. Mettendo insieme: $2^{n + 1} > 2n^2 > (n + 1)^2$.
8. **Conclusione.** Per il principio di induzione la disuguaglianza vale per ogni $n \ge 5$.

Controllo: con $n = 6$, $2^6 = 64 > 36$; con $n = 10$, $2^{10} = 1024 > 100$.
:::

::: esercizio difficile Esercizio 1.19 (c) del libro: la somma dei cubi
Dimostra per induzione che $1^3 + 2^3 + \dots + n^3 = \frac{n^2(n + 1)^2}4$ per ogni $n \ge 1$.
::: soluzione
1. **Passo base**, $n = 1$. A sinistra $1^3 = 1$. A destra $\frac{1 \cdot 4}4 = 1$.
2. **Ipotesi induttiva.** Supponiamo $1^3 + \dots + n^3 = \frac{n^2(n + 1)^2}4$.
3. **Obiettivo.** $1^3 + \dots + (n + 1)^3 = \frac{(n + 1)^2(n + 2)^2}4$.
4. Per l'ipotesi il lato sinistro è $\frac{n^2(n + 1)^2}4 + (n + 1)^3$.
5. In tutti e due gli addendi c'è $(n + 1)^2$, perché $(n + 1)^3 = (n + 1)^2 \cdot (n + 1)$. Raccogliendo: $(n + 1)^2\left(\frac{n^2}4 + n + 1\right)$.
6. Nella parentesi mettiamo tutto su 4: $\frac{n^2}4 + \frac{4n}4 + \frac 44 = \frac{n^2 + 4n + 4}4$.
7. E $n^2 + 4n + 4 = (n + 2)^2$, perché $(n + 2)(n + 2) = n^2 + 2n + 2n + 4$.
8. Quindi il lato sinistro è $\frac{(n + 1)^2(n + 2)^2}4$, l'obiettivo.
9. **Conclusione.** Per il principio di induzione la formula vale per ogni $n \ge 1$.

Controllo con $n = 3$: $1 + 8 + 27 = 36$, e $\frac{9 \cdot 16}4 = 36$.
:::

::: esercizio esame Sottoinsiemi con una condizione
Prendi $S = \{1, 2, 3, 4, 5, 6, 7, 8\}$. (a) Quanti sono i sottoinsiemi di $S$? (b) Quanti contengono sia 1 sia 2? (c) Quanti non contengono il sottoinsieme $\{1, 2\}$? (d) Quanti non contengono né 1 né 2?
::: soluzione
1. (a) $S$ ha 8 elementi, quindi i sottoinsiemi sono $2^8 = 256$.
2. (b) 1 e 2 devono esserci. Gli altri sei elementi, da 3 a 8, si scelgono liberamente: $2^6 = 64$.
3. (c) Sono tutti i sottoinsiemi tranne quelli del punto (b): $256 - 64 = 192$.
4. (d) Né 1 né 2: si sceglie liberamente solo tra i sei elementi da 3 a 8. Sono $2^6 = 64$.

Controllo: dividiamo i sottoinsiemi secondo che cosa succede a 1 e a 2. Ci sono quattro casi: tutti e due dentro, solo 1, solo 2, nessuno dei due. In ogni caso gli altri sei elementi sono liberi, quindi ogni caso ha 64 sottoinsiemi. In tutto $4 \cdot 64 = 256$, come al punto (a). I sottoinsiemi del punto (c) sono gli ultimi tre casi: $3 \cdot 64 = 192$.
:::

## Domande di ripasso

::: domanda Che cos'è un insieme? Che cosa vuol dire che deve essere «ben definito»?
Un insieme è una raccolta di oggetti diversi tra loro, i suoi elementi. «Ben definito» vuol dire che per ogni oggetto si può decidere senza dubbi se sta dentro o no: «gli attori bravi» non è un insieme, «gli attori che hanno vinto un Oscar» sì.
:::

::: domanda Perché $x \in A$ e $\{x\} \subset A$ dicono la stessa cosa? E perché $\{x\} \in A$ dice un'altra cosa?
$\{x\} \subset A$ vuol dire che l'unico elemento di $\{x\}$, cioè $x$, sta in $A$: è proprio $x \in A$. Invece $\{x\} \in A$ vuol dire che l'insieme $\{x\}$, intero, è uno degli elementi di $A$. Con $A = \{1, 2\}$ la prima frase è vera per $x = 1$, la seconda è falsa.
:::

::: domanda Qual è il contrario di una frase con «per ogni»? E di una frase con «esiste»?
«Per ogni» diventa «esiste» ed «esiste» diventa «per ogni»; la proprietà diventa il suo contrario. Il contrario di «tutti i numeri della lista sono positivi» è «almeno un numero della lista non è positivo».
:::

::: domanda Che differenza c'è tra $\emptyset$ e $\{\emptyset\}$?
$\emptyset$ è l'insieme vuoto e ha 0 elementi. $\{\emptyset\}$ è un insieme con un elemento, che è l'insieme vuoto: un sacchetto che contiene un sacchetto vuoto.
:::

::: domanda Perché il vuoto è un sottoinsieme di ogni insieme?
Per dire che non lo è servirebbe un elemento del vuoto che sta fuori dall'altro insieme. Il vuoto non ha elementi, quindi un controesempio così non esiste.
:::

::: domanda Come si dimostra che due insiemi sono uguali?
Con la doppia inclusione: si fa vedere che ogni elemento del primo sta nel secondo e che ogni elemento del secondo sta nel primo (proposizione 1.9).
:::

::: domanda Che cosa dice il principio di induzione? Che cosa sono il passo base e il passo induttivo?
Servono due controlli. Il passo base: la proprietà vale per il primo numero. Il passo induttivo: ogni volta che vale per un numero $n$, vale anche per $n + 1$. Allora la proprietà vale per tutti i numeri da lì in poi. È come una fila di tessere del domino.
:::

::: domanda Perché un insieme con $n$ elementi ha $2^n$ sottoinsiemi?
Per ogni elemento la scelta è doppia: dentro o fuori. Le scelte sono $n$, e ognuna raddoppia il conto. Il libro lo dimostra per induzione: aggiungendo un elemento, i sottoinsiemi si dividono in quelli senza e quelli con il nuovo elemento, che sono tanti quanti i primi.
:::

## Glossario

```glossario
Insieme | Una raccolta ben definita di oggetti diversi tra loro, i suoi elementi. Esempio: $\{1, 2, 3\}$.
Elemento | Un oggetto che sta in un insieme. Si scrive $x \in A$, «$x$ appartiene ad $A$».
Insieme universale | L'insieme da cui si pescano gli oggetti quando si descrive un insieme con una regola, per esempio $\N$.
Proprietà | Una frase su un oggetto che può essere vera o falsa, come «$n$ è pari».
Quantificatori | Le parole «per ogni» ed «esiste». I loro simboli, $\forall$ e $\exists$, si leggono proprio così.
Controesempio | Un elemento per cui una frase con «per ogni» è falsa. Ne basta uno per smentirla.
Insieme vuoto | L'insieme senza elementi, $\emptyset$. È un sottoinsieme di ogni insieme.
Cardinalità | Il numero degli elementi di un insieme, $\lvert A \rvert$. Esempio: $\lvert \{a, b\} \rvert = 2$.
Sottoinsieme | Un insieme i cui elementi stanno tutti in un altro: $B \subset A$. Esempio: $\{1, 3\} \subset \{1, 2, 3\}$.
Sottoinsieme proprio | Un sottoinsieme diverso dall'insieme intero.
Insieme delle parti | L'insieme $P(A)$ che ha come elementi tutti i sottoinsiemi di $A$. Se $A$ ha $n$ elementi, $P(A)$ ne ha $2^n$.
Doppia inclusione | Il modo di dimostrare che due insiemi sono uguali: ognuno è contenuto nell'altro.
Numeri naturali | I numeri per contare, $0, 1, 2, 3, \dots$; il loro insieme è $\N$.
Successivo | Il numero che viene subito dopo: il successivo di $n$ è $n + 1$, che il libro scrive $s(n)$.
Principio di induzione | Se una proprietà vale per 0 e passa da ogni numero al successivo, vale per tutti i naturali.
Passo base | Il controllo della proprietà sul primo numero.
Passo induttivo | La dimostrazione che, se la proprietà vale per $n$, vale anche per $n + 1$.
Ipotesi induttiva | La frase «la proprietà vale per $n$», che nel passo induttivo si suppone vera e si usa.
```

## Checklist

```checklist
- So scrivere un insieme con l'elenco e con una regola.
- So distinguere $x \in A$, $\{x\} \subset A$ e $\{x\} \in A$.
- So contare gli elementi di un insieme che contiene altri insiemi.
- So dire il contrario di una frase con «per ogni» o «esiste», e trovare un controesempio.
- So scrivere tutti i sottoinsiemi di un insieme con 3 elementi.
- So dimostrare che due insiemi sono uguali con la doppia inclusione.
- So fare una dimostrazione per induzione: passo base, ipotesi, passo induttivo, conclusione.
- So contare i sottoinsiemi di un insieme, anche con una condizione come «contiene questi elementi».
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 1 «Insiemi», pp. 1–8 (definizioni 1.1 e 1.5–1.8, note 1.2–1.4, 1.11 e 1.12, proposizione 1.9, teorema 1.10 e i due esempi che lo seguono) ed esercizi 1.1, 1.3 e 1.19 (pp. 14–16). Le definizioni e gli enunciati nei riquadri sono citati dal libro.
- Diario delle lezioni del canale B 2025/26, sulla pagina Moodle MDAG1 2025/26 ([id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), aperta agli ospiti): argomenti della lezione 1. Sulla stessa pagina gli appunti a mano della prima lezione del canale A e le regole d'esame 2025/26.
- Quiz e problemi degli appelli di Matematica Discreta, con le soluzioni ufficiali, sulla stessa pagina: 18/01/2023 (domanda 1), 09/06/2023 (problema 1), 05/02/2024, 14/01/2025, 04/02/2025, 06/06/2025 (domanda 2 e problema 1), 07/07/2025, 13/01/2026 (domanda 1), 03/02/2026, 06/06/2026, 01/07/2026 e 10/09/2026 (domanda 1).
- Calendario degli appelli 2026/27 e regole d'esame: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
- V. Bocchino, *Rigurgiti di Unicorno*, appunti di Matematica Discreta scritti da uno studente sul libro di Mori (febbraio 2026, licenza CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): usati come controllo. Le sue soluzioni degli esercizi 1.1 e 1.3 coincidono con quelle di questi appunti.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu», i quiz senza data e gli esercizi senza il numero del libro sono di questi appunti.
