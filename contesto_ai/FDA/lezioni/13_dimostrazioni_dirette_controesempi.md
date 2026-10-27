---
corso: FDA
lezione: "13"
titolo: Metodi di prova, dimostrazioni dirette e controesempi
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 13 · Libro, parte 2, §2.1
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 13 di Fondamenti dell'Informatica (canale B): che cos'è un sistema matematico (assiomi,
  definizioni, termini non definiti, teoremi, lemmi), le definizioni di pari e dispari, la dimostrazione diretta e la
  sua struttura, esempi con i numeri interi e razionali, usare un teorema già dimostrato, i controesempi per smentire un
  «per ogni», le dimostrazioni sugli insiemi con le due inclusioni, con quiz ed esercizi.
lede: >-
  Una frase come «la somma di due numeri pari è pari» non si può controllare provando dei casi: i numeri pari sono
  infiniti. Serve una dimostrazione, una catena di passi che parte dalle definizioni. Qui si vede come si scrive la più
  comune, quella diretta, e come si smentisce una frase falsa con un solo controesempio.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 2), §2.1
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 2), §2.1 «Mathematical Systems, Direct
  Proofs, and Counterexamples», con le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale
  A; F. Cardone, «Tecniche di dimostrazione» (Moodle del canale A); diario del canale B
appunti_html: appunti/FDA/13_dimostrazioni_dirette_controesempi.html
genera_html: true
---

## In breve

- Un **sistema matematico** ha tre ingredienti: gli **assiomi**, frasi che si accettano vere senza dimostrarle; le **definizioni**, che costruiscono concetti nuovi da quelli già noti; i **termini non definiti**, come «punto» e «retta» in geometria, il cui senso è fissato dagli assiomi.
- Un **teorema** è una frase dimostrata vera. Un **lemma** è un teorema che serve soprattutto a dimostrarne altri; un **corollario** segue subito da un teorema.
- Le dimostrazioni partono dalle definizioni. Un intero è pari se è il doppio di un intero, $n = 2k$; è dispari se è un doppio più uno, $n = 2k + 1$.
- Una **dimostrazione diretta** di «se… allora…» suppone vera l'ipotesi e, passo dopo passo, arriva alla conclusione. Per un «per ogni» si prende un elemento **qualsiasi**, senza sceglierlo.
- Per mostrare che un «per ogni» è **falso** basta un **controesempio**: un solo elemento che non va. Invece nessun numero di esempi dimostra un «per ogni».
- Per dimostrare che un insieme è contenuto in un altro si prende un elemento qualsiasi del primo e si mostra che sta nel secondo. Per l'uguaglianza servono le due inclusioni.
- All'esame le dimostrazioni servono soprattutto nella domanda aperta facoltativa; nei quiz tornano come «vero o falso» da decidere con un controesempio.

> [!CANALI]
> Nel canale B è la lezione di giovedì 29/10, dalle 9 alle 11. Per il docente è la lezione 14, perché la prima è stata un'introduzione: qui è la 13. Il diario del canale B la annuncia così: «Capitolo 2.1 (Metodi di Prova)». **Ho scritto questi appunti prima della lezione**, sul §2.1 dell'edizione originale di Johnsonbaugh, sulle domande di ripasso e sulle soluzioni degli esercizi pubblicate sul Moodle del canale A (id 3851, aperto agli ospiti): il libro non è disponibile. Gli esempi con pari e dispari sono anche nelle note «Tecniche di dimostrazione» di Felice Cardone, sullo stesso Moodle.
>
> Le dimostrazioni sugli insiemi usano unione, intersezione e sottoinsiemi, che il docente ha rimandato (§1.1): sono spiegati nelle lezioni [D01](../MDAG/D01_insiemi_induzione.html) e [D02](../MDAG/D02_complementare_induzione_partizioni.html) di Matematica Discreta. Servono anche la [lezione 09](09_quantificatori.html) (controesempi e testimoni) e la [10](10_quantificatori_e_connettivi.html) (generalizzazione universale). La lezione dopo, la [14](14_altri_metodi_di_prova.html), completa i metodi di prova.

## Assiomi, definizioni e teoremi (libro, §2.1)

In geometria si impara che per due punti passa una sola retta. Nessuno lo dimostra: lo si accetta come punto di partenza. Da frasi come questa, e da poche altre, si ricava tutto il resto, per esempio che la somma degli angoli di un triangolo è un angolo piatto. Le domande di ripasso 1–7 del §2.1 danno un nome a ogni pezzo.

| Nome | Che cos'è | Esempio |
|---|---|---|
| **assioma** | frase che si accetta vera senza dimostrarla | per due punti distinti passa una e una sola retta |
| **termine non definito** | parola usata senza definirla: il suo senso viene dagli assiomi | «punto», «retta» |
| **definizione** | concetto nuovo costruito con quelli già noti | un intero è pari se è il doppio di un intero |
| **teorema** | frase dimostrata vera | la somma di due pari è pari |
| **dimostrazione** | ragionamento che stabilisce che un teorema è vero | i passi della prossima sezione |
| **lemma** | teorema poco interessante da solo, utile per dimostrarne altri | un conto che serve in più dimostrazioni |
| **corollario** | teorema che segue subito da un altro | |

Un **sistema matematico** è l'insieme di assiomi, definizioni e termini non definiti da cui si parte. Gli esercizi 1 e 4 del libro chiedono altri esempi. Un assioma della geometria nello spazio: «per tre punti non allineati passa uno e un solo piano». Una definizione sui reali: «se $x \ge 0$ e $n$ è un intero positivo, $x^{1/n}$ è il numero $y \ge 0$ con $y^n = x$».

::: prova «Ogni numero reale moltiplicato per 0 dà 0» è un assioma, una definizione o un teorema, nella costruzione usuale dei reali?
Un teorema: si dimostra a partire dagli assiomi della somma e del prodotto. Gli assiomi sono frasi come «$x \cdot y = y \cdot x$ per ogni $x$ e $y$».
:::

> [!RICORDA]
> - Assiomi e termini non definiti sono il punto di partenza; le definizioni aggiungono concetti; i teoremi si dimostrano.
> - Lemma e corollario sono teoremi anche loro: cambia solo il ruolo.

## Pari e dispari: le definizioni che si usano

Le dimostrazioni di questa lezione lavorano sui numeri interi e usano due definizioni. Sono le domande di ripasso 9 e 10 del libro.

> [!DEF] Pari e dispari
> Un intero $n$ è **pari** se esiste un intero $k$ con $n = 2k$. È **dispari** se esiste un intero $k$ con $n = 2k + 1$.

**Come si legge.** 14 è pari perché $14 = 2 \cdot 7$: il $k$ è 7. 15 è dispari perché $15 = 2 \cdot 7 + 1$. Anche $-3$ è dispari, con $k = -2$: $2 \cdot (-2) + 1 = -3$. La definizione è un «esiste», come nella [lezione 09](09_quantificatori.html): per **usarla** si prende il $k$ che c'è; per **dimostrarla** bisogna trovarne uno.

Ogni intero è pari o dispari, e non tutte e due le cose. Questo fatto lo usiamo senza dimostrarlo, come fa il libro.

::: prova Trova il $k$ che mostra che 0 è pari e quello che mostra che $-7$ è dispari.
$0 = 2 \cdot 0$, quindi $k = 0$. $-7 = 2 \cdot (-4) + 1$, quindi $k = -4$.
:::

> [!RICORDA]
> - Pari: $n = 2k$ per qualche intero $k$. Dispari: $n = 2k + 1$ per qualche intero $k$.
> - Per usare la definizione si prende il $k$; per dimostrarla si trova il $k$.

## La dimostrazione diretta (libro, §2.1)

Vogliamo convincerci che **la somma di un dispari e di un pari è dispari**. Le prove 3 + 4 = 7 e 11 + 2 = 13 vanno bene, ma non bastano: i casi sono infiniti. Serve un ragionamento che valga per tutti i numeri insieme. Lo si costruisce prendendo due numeri qualsiasi, uno dispari e uno pari, senza dire quali, e usando solo le definizioni.

> [!ESEMPIO] · Dispari più pari (Cardone, «Tecniche di dimostrazione»)
> **La frase.** Per tutti gli interi $n$ ed $m$, se $n$ è dispari e $m$ è pari, allora $n + m$ è dispari.
>
> **Passo 1: prendo due interi qualsiasi e assumo l'ipotesi.** Siano $n$ ed $m$ interi, con $n$ dispari ed $m$ pari.
>
> **Passo 2: uso le definizioni.** Esiste un intero $\ell$ con $n = 2\ell + 1$, ed esiste un intero $k$ con $m = 2k$.
>
> **Passo 3: calcolo.** $n + m = (2\ell + 1) + 2k = 2(\ell + k) + 1$.
>
> **Passo 4: riconosco la definizione.** $\ell + k$ è un intero: chiamandolo $j$, $n + m = 2j + 1$. Quindi $n + m$ è dispari.

È una **dimostrazione diretta**: per dimostrare «se $P$ allora $Q$» si **suppone** che $P$ sia vera e, usando le definizioni, gli assiomi e i teoremi già dimostrati, si arriva a $Q$. È la domanda di ripasso 8 del libro. Le note di Cardone la disegnano con una barra: tutto quello che sta dentro la barra dipende dall'ipotesi, e la conclusione finale, la freccia, sta fuori.

```grafico
titolo: La forma di una dimostrazione diretta di «se P allora Q». Dentro il riquadro si lavora supponendo P; quando si arriva a Q il riquadro si chiude, e fuori resta la freccia, che non dipende più dall'ipotesi.
x: 0 12
y: 0.4 6.6
assi: no
griglia: no
proporzioni: libere
poligono: 1 1.8 11 1.8 11 6.2 1 6.2 | blu
testo: 6 5.7 | blu | "suppongo P (n dispari, m pari)"
testo: 6 4.8 | grigio | "uso le definizioni: n = 2ℓ + 1, m = 2k"
testo: 6 3.9 | grigio | "calcolo: n + m = 2(ℓ + k) + 1"
testo: 6 3 | verde | "arrivo a Q: n + m è dispari"
freccia: 6 1.8 6 1.25 | grigio
testo: 6 0.85 | ambra | "quindi: se P allora Q, per tutti gli n e m"
```

Il passo 1 è la **generalizzazione universale** della [lezione 10](10_quantificatori_e_connettivi.html): siccome $n$ ed $m$ sono qualsiasi, quello che vale per loro vale per tutti. Per questo non si possono scegliere valori particolari: «prendo $n = 3$» dimostrerebbe la frase solo per il 3.

> [!TRAPPOLA] Lo stesso $k$ per due numeri
> Scrivere $n = 2k + 1$ ed $m = 2k$ con **lo stesso** $k$ vorrebbe dire che $m = n - 1$: si dimostrerebbe la frase solo per due numeri vicini, come 7 e 6. Ogni numero ha il suo intero: $\ell$ per $n$, $k$ per $m$.

::: prova Dimostra in modo diretto che la somma di due pari è pari (esercizio 7 del libro).
Siano $m$ ed $n$ pari: esistono $k_1$ e $k_2$ con $m = 2k_1$ e $n = 2k_2$. Allora $m + n = 2k_1 + 2k_2 = 2(k_1 + k_2)$, e $k_1 + k_2$ è un intero: $m + n$ è pari.
:::

> [!RICORDA]
> - Dimostrazione diretta di «se $P$ allora $Q$»: suppongo $P$ e arrivo a $Q$.
> - Per un «per ogni», gli elementi si prendono qualsiasi, e ognuno con il suo $k$.

## Altri esempi con i numeri (libro, §2.1, esercizi)

Lo schema è sempre lo stesso: scrivere le ipotesi con le definizioni, fare il conto, riconoscere nel risultato la forma della definizione della conclusione. Cambia solo il conto.

> [!ESEMPIO] · Il prodotto di due dispari è dispari (esercizio 10)
> Siano $m$ ed $n$ dispari: $m = 2k_1 + 1$ e $n = 2k_2 + 1$. Allora
> $$mn = (2k_1 + 1)(2k_2 + 1) = 4k_1k_2 + 2k_1 + 2k_2 + 1 = 2(2k_1k_2 + k_1 + k_2) + 1.$$
> Il numero tra parentesi è un intero, quindi $mn$ è dispari.

> [!ESEMPIO] · Se $n$ è pari, $n^2$ è divisibile per 4 (Cardone, esercizio 1)
> Sia $n$ pari: $n = 2k$. Allora $n^2 = 4k^2$, e $k^2$ è un intero. «Divisibile per 4» vuol dire «uguale a 4 per un intero»: fatto.

> [!ESEMPIO] · La somma di due razionali è razionale (esercizio 13)
> Un numero è **razionale** se è una frazione di due interi, con il denominatore diverso da 0. Siano $x = \frac{m_1}{n_1}$ e $y = \frac{m_2}{n_2}$. Allora
> $$x + y = \frac{m_1 n_2 + m_2 n_1}{n_1 n_2},$$
> con numeratore e denominatore interi e $n_1 n_2 \neq 0$. Quindi $x + y$ è razionale.

Con l'esercizio 16 lo schema funziona anche con il 3 al posto del 2: se $m = 3k_1 + 1$ e $n = 3k_2 + 1$, il prodotto è $mn = 3(3k_1k_2 + k_1 + k_2) + 1$, ancora della forma «3 per un intero, più 1».

::: prova Dimostra che se $n$ è dispari, $n^2$ è dispari.
$n = 2k + 1$, quindi $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$: dispari. È il conto che Cardone usa nella dimostrazione per contrapposizione della [lezione 14](14_altri_metodi_di_prova.html).
:::

> [!RICORDA]
> - Ipotesi con le definizioni, conto, conclusione nella forma della definizione.
> - L'ultimo passo va scritto: «il numero tra parentesi è un intero».

## Usare un teorema già dimostrato

Le dimostrazioni non ripartono ogni volta dagli assiomi: usano i teoremi già dimostrati come regole pronte. Sui numeri reali, per esempio, si sa che se $x \ge y$ e $y \ge z$ allora $x \ge z$: è un teorema del libro (esempio 2.1.5). La soluzione dell'esercizio 18 lo usa due volte.

> [!ESEMPIO] · Il massimo (esercizio 18 del libro)
> **La frase.** Sia $d = \max\{d_1, d_2\}$, il più grande tra $d_1$ e $d_2$. Se $x \ge d$, allora $x \ge d_1$ e $x \ge d_2$.
>
> **Passo 1: la definizione di massimo.** $d$ è il più grande dei due, quindi $d \ge d_1$ e $d \ge d_2$.
>
> **Passo 2: il teorema già dimostrato.** Da $x \ge d$ e $d \ge d_1$ segue $x \ge d_1$. Da $x \ge d$ e $d \ge d_2$ segue $x \ge d_2$.
>
> **Passo 3.** Le due conclusioni insieme danno la tesi.

Il libro chiama **sottodimostrazione** la dimostrazione di un risultato intermedio fatta dentro un'altra dimostrazione, quando quel risultato non è un teorema già noto (domanda di ripasso 11). Se il risultato intermedio serve spesso, lo si dimostra a parte e diventa un lemma.

::: prova Con il minimo: se $x \le \min(a, b)$, allora $x \le a$ e $x \le b$ (Cardone, esercizio 3). Che cosa ti serve?
La definizione di minimo, $\min(a, b) \le a$ e $\min(a, b) \le b$, e la stessa proprietà: da $x \le \min(a, b)$ e $\min(a, b) \le a$ segue $x \le a$; allo stesso modo $x \le b$.
:::

> [!RICORDA]
> - I teoremi già dimostrati si usano come regole.
> - Un risultato intermedio dimostrato dentro la dimostrazione è una sottodimostrazione.

## Controesempi: smentire un «per ogni» (libro, §2.1)

Ecco una frase che sembra vera e non lo è. «Per ogni intero positivo $n$, il numero $n^2 + n + 41$ è primo»: con $n$ = 1, 2, 3 escono 43, 47, 53, tutti primi, e si continua così fino a $n = 39$. Sembrerebbe vera. Con $n = 40$ invece esce $1681 = 41 \cdot 41$, che non è primo. Basta questo caso per dire che la frase è **falsa**.

Per smentire $\forall x\, P(x)$ basta **un** elemento del dominio che rende $P(x)$ falsa: è la domanda di ripasso 12 del libro, ed è la negazione $\exists x\, \neg P(x)$ della lezione 09. Quell'elemento si chiama **controesempio**.

> [!TRAPPOLA] Gli esempi non dimostrano un «per ogni»
> I 39 casi giusti di $n^2 + n + 41$ non dimostrano niente. Al contrario, un solo caso sbagliato basta a smentire. Quando una frase con «per ogni» ti sembra falsa, cerca il controesempio; quando ti sembra vera, serve una dimostrazione.

> [!ESEMPIO] · Due sottoinsiemi (esercizio 33 del libro)
> **La frase.** Per tutti gli insiemi $X$ e $Y$, $X \subseteq Y$ oppure $Y \subseteq X$.
>
> **Il controesempio.** $X = \{1, 2\}$ e $Y = \{2, 3\}$. $X$ non è contenuto in $Y$, perché $1 \in X$ ma $1 \notin Y$; $Y$ non è contenuto in $X$, perché $3 \in Y$ ma $3 \notin X$. La frase è falsa.

Un controesempio va **verificato** fino in fondo: bisogna controllare che l'elemento stia nel dominio e che la frase sia davvero falsa per lui, scrivendo i conti.

::: prova «Per ogni intero positivo $n$, $2^n + 1$ è primo.» Vera o falsa?
Falsa: con $n = 3$, $2^3 + 1 = 9 = 3 \cdot 3$. Con $n = 1$ e $n = 2$ escono 3 e 5, primi: gli esempi giusti non bastano.
:::

> [!RICORDA]
> - Un controesempio basta a smentire un «per ogni»; nessun numero di esempi lo dimostra.
> - Il controesempio va controllato con i conti.

## Dimostrazioni con gli insiemi (libro, §2.1)

Per dimostrare che un insieme è contenuto in un altro non si possono controllare gli elementi uno per uno: gli insiemi sono qualsiasi, e possono essere infiniti. Si usa lo schema della dimostrazione diretta, partendo dalla definizione di sottoinsieme: $X \subseteq Y$ vuol dire che **ogni** elemento di $X$ sta in $Y$.

> [!METODO] Inclusioni e uguaglianze tra insiemi
> 1. Per $X \subseteq Y$: «sia $x$ un elemento qualsiasi di $X$». Poi, con le definizioni di intersezione, unione e differenza, si arriva a «$x \in Y$».
> 2. Per $X = Y$: si dimostrano le due inclusioni, $X \subseteq Y$ e $Y \subseteq X$.
> 3. Per smentire un'uguaglianza: un controesempio con insiemi piccoli, di uno o due elementi.

> [!ESEMPIO] · $X \cap Y \subseteq X$ (esercizio 21)
> Sia $x \in X \cap Y$. Per la definizione di intersezione, $x \in X$ e $x \in Y$; in particolare $x \in X$. Quindi $X \cap Y \subseteq X$.

> [!ESEMPIO] · Se $X \subseteq Y$, allora $X \cap Z \subseteq Y \cap Z$ (esercizio 24)
> **Passo 1.** Suppongo $X \subseteq Y$ e prendo $x \in X \cap Z$ qualsiasi.
>
> **Passo 2.** Per la definizione di intersezione, $x \in X$ e $x \in Z$.
>
> **Passo 3.** Siccome $X \subseteq Y$ e $x \in X$, anche $x \in Y$.
>
> **Passo 4.** $x \in Y$ e $x \in Z$: per la definizione di intersezione, $x \in Y \cap Z$.

```grafico
titolo: L'esercizio 24. X è dentro Y. Un elemento x che sta in X e in Z (il punto verde) sta per forza anche in Y e in Z.
x: 0 12
y: 0 6
assi: no
griglia: no
proporzioni: libere
cerchio: 4.5 3 2.6 | blu
cerchio: 4 3 1.3 | ambra
cerchio: 6.4 3 2.2 | rosa
testo: 2.3 5.1 | blu | "Y"
testo: 3.2 3 | ambra | "X"
testo: 8.9 4.9 | rosa | "Z"
punto: 4.8 3 | verde
testo: 4.8 2.5 | verde | "x"
```

> [!ESEMPIO] · Un'uguaglianza falsa (esercizio 36)
> **La frase.** Per tutti gli insiemi, $(X \cup Y) - (X \cup Z) = Y - Z$.
>
> **Il controesempio del libro.** $X = \{1, a\}$, $Y = \{1, 2, 3\}$, $Z = \{3\}$. A destra $Y - Z = \{1, 2\}$. A sinistra $X \cup Y = \{1, 2, 3, a\}$ e $X \cup Z = \{1, 3, a\}$, quindi la differenza è $\{2\}$. Gli insiemi sono diversi: l'1 sta in $Y - Z$, ma a sinistra viene tolto, perché sta in $X$.

::: prova Dimostra che $X \subseteq X \cup Y$ per tutti gli insiemi $X$ e $Y$.
Sia $x \in X$. Allora «$x \in X$ oppure $x \in Y$» è vera, perché la prima parte è vera: è l'addizione della lezione 08. Per la definizione di unione, $x \in X \cup Y$.
:::

> [!RICORDA]
> - Inclusione: un elemento qualsiasi del primo insieme sta nel secondo.
> - Uguaglianza: le due inclusioni. Per smentirla basta un controesempio piccolo.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $n = 2k$ | «n uguale due k» | $n$ è pari, con $k$ intero | $14 = 2 \cdot 7$ |
| $n = 2k + 1$ | «n uguale due k più uno» | $n$ è dispari | $15 = 2 \cdot 7 + 1$ |
| $\max\{a, b\}$ | «massimo di a e b» | il più grande dei due | $\max\{3, 8\} = 8$ |
| $X \subseteq Y$ | «X è contenuto in Y» | ogni elemento di $X$ sta in $Y$ | $\{1\} \subseteq \{1, 2\}$ |
| $X - Y$ | «X meno Y» | gli elementi di $X$ che non stanno in $Y$ | $\{1, 2\} - \{2\} = \{1\}$ |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti. Chi arriva a 24 nei quiz può fare la **domanda aperta** facoltativa, da −1 a 6 punti.

**Che cosa serve di questa lezione**

1. **La domanda aperta.** Il programma comune elenca le tecniche di dimostrazione e le «equivalenze insiemistiche e la loro dimostrazione»: una dimostrazione diretta scritta bene, con le definizioni, è il tipo di risposta che serve. Nelle due simulazioni 2023/24 che ho non ci sono domande aperte, quindi non ho una domanda vera da mostrarti.
2. **I quiz vero/falso.** Le frasi con «per ogni» si smentiscono con un controesempio; quelle sugli insiemi si controllano prima con insiemi piccoli.

### Una domanda sul modello, letta insieme

**Il testo**, inventato sul modello degli esercizi del §2.1: «Dire quali affermazioni sono vere per tutti gli insiemi $A$, $B$, $C$: (1) $A \cap B \subseteq A \cup B$; (2) $A - B = B - A$; (3) se $A \subseteq B$ allora $A \cup C \subseteq B \cup C$.»

**In pratica chiede:** per ogni voce, una dimostrazione breve o un controesempio.

> [!ESEMPIO] · la soluzione, passo per passo
> **(1) Vera.** Sia $x \in A \cap B$: allora $x \in A$, e quindi $x \in A \cup B$.
>
> **(2) Falsa.** Controesempio: $A = \{1\}$, $B = \varnothing$. $A - B = \{1\}$ e $B - A = \varnothing$.
>
> **(3) Vera.** Sia $x \in A \cup C$. Se $x \in A$, allora $x \in B$ perché $A \subseteq B$, e quindi $x \in B \cup C$. Se $x \in C$, allora $x \in B \cup C$ direttamente. In tutti e due i casi $x \in B \cup C$.
>
> Nella (3) la dimostrazione si divide in due casi: è la dimostrazione per casi della [lezione 14](14_altri_metodi_di_prova.html).

> [!METODO] Vero o falso su una frase con «per ogni»
> 1. Prova due o tre casi piccoli, scelti apposta per rompere la frase: lo zero, l'insieme vuoto, numeri negativi, insiemi disgiunti.
> 2. Se un caso la rompe, quello è il controesempio: controllalo con i conti.
> 3. Se nessun caso la rompe, cerca la dimostrazione diretta partendo dalle definizioni.

## Quiz

```quiz
D: Che cos'è un assioma?
+ Una frase che si accetta vera senza dimostrarla
- Una frase dimostrata vera
- Un teorema che serve a dimostrarne altri
- Una parola usata senza definirla
- Una frase vera in tutte le righe della tavola
= È la domanda di ripasso 2 del libro. La risposta più insidiosa è la terza, che descrive un lemma; la quarta è un termine non definito; l'ultima è una tautologia.

D: Per dimostrare in modo diretto «se $n$ è dispari ed $m$ è pari, allora $n + m$ è dispari», come si comincia?
+ Siano $n = 2\ell + 1$ e $m = 2k$, con $\ell$ e $k$ interi qualsiasi
- Siano $n = 2k + 1$ e $m = 2k$, con lo stesso $k$
- Prendo $n = 3$ e $m = 4$
- Suppongo che $n + m$ sia pari
- Provo tutti i numeri da 1 a 100
= Ogni numero ha il suo intero. La risposta più insidiosa è la seconda: con lo stesso $k$ si dimostra la frase solo per $m = n - 1$. La quarta comincerebbe una dimostrazione per assurdo, della lezione 14.

D: «Per ogni intero positivo $n$, $n^2 + n + 41$ è primo.» Quale valore di $n$ è un controesempio?
+ 40
- 1
- 39
- 41, e nessun altro
- non ci sono controesempi
= Con $n = 40$ si ottiene $1681 = 41^2$. La risposta più insidiosa è 39: dà 1601, che è primo. Anche 41 è un controesempio, ma non l'unico.

D: Per mostrare che un «per ogni» è falso, che cosa serve?
+ Un solo elemento del dominio che la rende falsa
- Almeno due elementi che la rendono falsa
- Che sia falsa per tutti gli elementi
- Una dimostrazione diretta della sua negazione per ogni elemento
- Un elemento che la rende vera
= È la domanda di ripasso 12 del libro: $\neg\,\forall x\, P(x) \equiv \exists x\, \neg P(x)$. La risposta più insidiosa è la terza, che confonde «non tutti» con «nessuno».

D: Quale frase sugli insiemi è falsa?
+ Per tutti gli insiemi $X$ e $Y$, $X \subseteq Y$ oppure $Y \subseteq X$
- Per tutti gli insiemi $X$ e $Y$, $X \cap Y \subseteq X$
- Per tutti gli insiemi $X$ e $Y$, $X \subseteq X \cup Y$
- Se $X \subseteq Y$, allora $X \cap Z \subseteq Y \cap Z$
- Per tutti gli insiemi $X$, $X \cap X = X$
= Controesempio dell'esercizio 33: $X = \{1, 2\}$, $Y = \{2, 3\}$. Le altre sono gli esercizi 21 e 24 e due fatti diretti dalle definizioni.

D: Come si dimostra che due insiemi $X$ e $Y$ sono uguali?
+ Dimostrando $X \subseteq Y$ e $Y \subseteq X$
- Mostrando un elemento che sta in tutti e due
- Dimostrando $X \subseteq Y$ e basta
- Disegnando il diagramma di Venn
- Contando gli elementi
= Servono le due inclusioni. La risposta più insidiosa è la quarta: il disegno aiuta a capire, ma non è una dimostrazione. Contare gli elementi non basta: $\{1\}$ e $\{2\}$ hanno lo stesso numero di elementi.

D: Che cos'è un corollario?
+ Un teorema che segue subito da un altro teorema
- Un assioma secondario
- Un teorema non ancora dimostrato
- Una definizione che usa un teorema
- Un controesempio
= Lemma e corollario sono teoremi: il lemma prepara, il corollario segue. La risposta più insidiosa è la terza: un teorema è per definizione dimostrato.

D: Nella dimostrazione che il prodotto di due dispari è dispari, a che cosa si arriva?
+ $mn = 2(2k_1k_2 + k_1 + k_2) + 1$
- $mn = 4k_1k_2 + 1$
- $mn = 2(k_1 + k_2)$
- $mn = (2k + 1)^2$
- $mn = 2k_1k_2 + 1$
= Sviluppando $(2k_1 + 1)(2k_2 + 1)$ e raccogliendo il 2. La risposta più insidiosa è la quarta: usa lo stesso $k$, e varrebbe solo per $m = n$.
```

## Esercizi

::: esercizio base Riscaldamento: assioma, definizione, teorema
Classifica: (a) «un triangolo è isoscele se ha due lati uguali»; (b) «per due punti distinti passa una sola retta»; (c) «la somma di due pari è pari»; (d) «retta».
::: soluzione
(a) Definizione. (b) Assioma. (c) Teorema: si dimostra. (d) Termine non definito.
:::

::: esercizio base Riscaldamento: pari e dispari
Dimostra in modo diretto: (a) la somma di due dispari è pari; (b) il prodotto di un pari e di un intero qualsiasi è pari. Sono i punti 2 e 5 dell'esercizio 2 delle note di Cardone; nel punto 5 il secondo numero è dispari, qui è qualsiasi.
::: soluzione
(a) $n = 2k_1 + 1$, $m = 2k_2 + 1$: $n + m = 2k_1 + 2k_2 + 2 = 2(k_1 + k_2 + 1)$, pari. (b) $n = 2k$ e $m$ intero: $nm = 2(km)$, pari.
:::

::: esercizio medio Il resto 1 nella divisione per 3 (esercizio 16 del libro)
Dimostra che se $m$ ed $n$ hanno resto 1 nella divisione per 3, anche $mn$ ha resto 1.
::: soluzione
$m = 3k_1 + 1$ e $n = 3k_2 + 1$. Allora $mn = 9k_1k_2 + 3k_1 + 3k_2 + 1 = 3(3k_1k_2 + k_1 + k_2) + 1$. Il numero tra parentesi è un intero: il resto è 1.
:::

::: esercizio medio Controesempi
Trova un controesempio: (a) «per ogni reale $x$, $x^2 > x$»; (b) «per tutti gli insiemi, $X \cup Y = X \cup Z$ implica $Y = Z$»; (c) «ogni numero primo è dispari».
::: soluzione
(a) $x = 1$: $1 > 1$ è falso; anche $x = \frac{1}{2}$, con $\frac{1}{4} < \frac{1}{2}$. (b) $X = \{1\}$, $Y = \{1\}$, $Z = \varnothing$: le unioni sono tutte e due $\{1\}$, ma $Y \neq Z$. (c) 2.
:::

::: esercizio esame Un'inclusione con l'unione
Dimostra che per tutti gli insiemi $X$, $Y$, $Z$: se $X \subseteq Z$ e $Y \subseteq Z$, allora $X \cup Y \subseteq Z$.
::: soluzione
Sia $x \in X \cup Y$: allora $x \in X$ oppure $x \in Y$. Se $x \in X$, siccome $X \subseteq Z$, $x \in Z$. Se $x \in Y$, siccome $Y \subseteq Z$, $x \in Z$. In tutti e due i casi $x \in Z$.
:::

::: esercizio difficile L'esercizio 27 del libro
Dimostra che se $X \cup Y = X \cup Z$ e $X \cap Y = X \cap Z$, allora $Y = Z$.
::: soluzione
Mostro $Y \subseteq Z$. Sia $x \in Y$: allora $x \in X \cup Y = X \cup Z$, quindi $x \in X$ oppure $x \in Z$. Se $x \in Z$ ho finito. Se $x \in X$, allora $x \in X \cap Y = X \cap Z$, quindi $x \in Z$. L'inclusione $Z \subseteq Y$ si dimostra allo stesso modo scambiando $Y$ e $Z$. Le due ipotesi servono tutte e due: l'esercizio precedente mostra che la sola unione non basta.
:::

## Domande di ripasso

::: domanda Di che cosa è fatto un sistema matematico?
Di assiomi, definizioni e termini non definiti.
:::

::: domanda Che cos'è una dimostrazione diretta?
Una dimostrazione di «se $P$ allora $Q$» che suppone $P$ e, con definizioni, assiomi e teoremi già dimostrati, arriva a $Q$.
:::

::: domanda Quando un intero è pari, e quando è dispari?
Pari se esiste un intero $k$ con $n = 2k$; dispari se esiste $k$ con $n = 2k + 1$.
:::

::: domanda Come si smentisce un «per ogni»?
Con un controesempio: un elemento del dominio per cui la frase è falsa.
:::

::: domanda Come si dimostra che $X \subseteq Y$?
Si prende un elemento qualsiasi di $X$ e si mostra, con le definizioni, che sta in $Y$.
:::

## Glossario

```glossario
Sistema matematico | Assiomi, definizioni e termini non definiti da cui si parte.
Assioma | Frase accettata vera senza dimostrazione.
Termine non definito | Parola usata senza definirla, il cui senso è fissato dagli assiomi.
Teorema | Frase dimostrata vera.
Lemma | Teorema che serve soprattutto a dimostrarne altri.
Corollario | Teorema che segue subito da un altro.
Dimostrazione diretta | Si suppone l'ipotesi e si arriva alla conclusione.
Sottodimostrazione | Dimostrazione di un risultato intermedio dentro un'altra dimostrazione.
Controesempio | Elemento del dominio che rende falsa una frase con «per ogni».
```

## Checklist

```checklist
- So distinguere assioma, definizione, termine non definito, teorema, lemma e corollario.
- So usare le definizioni di pari e dispari, dando a ogni numero il suo k.
- So scrivere una dimostrazione diretta di «se P allora Q».
- So dimostrare fatti su somme e prodotti di pari, dispari e razionali.
- So usare un teorema già dimostrato in una dimostrazione.
- So smentire un «per ogni» con un controesempio controllato.
- So dimostrare un'inclusione e un'uguaglianza tra insiemi.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 2), §2.1 «Mathematical Systems, Direct Proofs, and Counterexamples»: domande di ripasso 1–12 ed esercizi 1, 4, 7, 10, 13, 16, 18, 21, 24, 27, 33 e 36, con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: i testi degli esercizi li ho ricostruiti dalle soluzioni e tradotti.
- F. Cardone, «Tecniche di dimostrazione» (Moodle del canale A): esempio 1 (dimostrazione diretta, con il disegno della barra) ed esercizi 1, 2 e 3.
- Diario del canale B: «Lezione 14. Giovedì 29 Ottobre ore 09-11. Capitolo 2.1 (Metodi di Prova)». Appunti scritti prima della lezione.
- Gli esempi $n^2 + n + 41$ e $2^n + 1$, la domanda sul modello, i quiz e gli esercizi senza indicazione sono di questi appunti. I conti li ho controllati con un programma.
