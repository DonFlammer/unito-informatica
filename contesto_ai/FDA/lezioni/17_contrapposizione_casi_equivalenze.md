---
corso: FDA
lezione: "17"
data: 2026-11-09
titolo: Contrapposizione, casi ed equivalenze
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 17 · Libro, parte 2, fine del §2.2
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 17 di Fondamenti dell'Informatica (canale B): la fine del §2.2, con la dimostrazione per
  contrapposizione e il suo legame con l'assurdo, la dimostrazione per casi, le dimostrazioni di «se e solo se», come
  scegliere il metodo, che cosa è stato omesso (esempio 2.2.8, esempi dal 2.2.10, §2.3 sulla risoluzione), ed esercizi
  del libro con le soluzioni ufficiali.
lede: >-
  Il §2.2 finisce con tre metodi che completano la dimostrazione per assurdo: per contrapposizione, per casi, e la
  dimostrazione di un «se e solo se» nelle due direzioni. Qui ognuno ha i suoi esempi, diversi da quelli della
  lezione 14, e una tabella per scegliere il metodo davanti a una frase nuova.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 2), §2.2, esempi 2.2.5–2.2.7 e 2.2.9
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 90 minuti
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 2), §2.2 «More Methods of Proof», con
  le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; F. Cardone, «Tecniche di
  dimostrazione» (Moodle del canale A); diario del canale B
appunti_html: appunti/FDA/17_contrapposizione_casi_equivalenze.html
genera_html: true
---

## In breve

- **Per contrapposizione**: invece della frase «se $P$ allora $Q$» si dimostra in modo diretto la sua **contronominale**, che scambia le due parti e le nega. Le due frasi sono equivalenti.
- Conviene quando il contrario della tesi dà una formula da usare, come «$x$ è una frazione» al posto di «$x$ è irrazionale».
- Contrapposizione e assurdo sono parenti stretti: ogni dimostrazione per contrapposizione si riscrive per assurdo, con una riga in più.
- **Per casi**: se le situazioni possibili sono alcune alternative, si dimostra la tesi in ognuna. I casi devono coprire tutto.
- Quando i casi sono pochi numeri da controllare uno per uno, la dimostrazione è **esaustiva**.
- **«Se e solo se»**: sono due frasi «se… allora», una per direzione, e vanno dimostrate tutte e due.
- Il docente ha omesso l'esempio 2.2.8, gli esempi dal 2.2.10 in poi (tra cui le dimostrazioni di esistenza) e tutto il §2.3 sulla risoluzione.

> [!CANALI]
> Nel canale B è la lezione di lunedì 09/11, dalle 9 alle 11. Per il docente è la lezione 18: qui è la 17. Il diario del canale B: «Fine Capitolo 2.2: altri 4 esempi, ancora prove per contraddizione. Omessi: esempio 2.2.8 e esempi a partire dall'esempio 2.2.10 ($\lvert x \rvert < d$ if and only if $-d < x < d$). Omesso capitolo 2.3: Risoluzione».
>
> **Quali sono i quattro esempi.** Tolti il 2.2.8 e quelli dal 2.2.10, restano il 2.2.5, il 2.2.6, il 2.2.7 e il 2.2.9. Il libro non ce l'ho; dalle risposte ufficiali alle domande di ripasso so che il 2.2.5 è l'esempio di dimostrazione **per contrapposizione** e il 2.2.6 quello **per casi**. Le dimostrazioni di equivalenza vengono subito dopo: il 2.2.10, omesso, è un «se e solo se», quindi il 2.2.9 con ogni probabilità è il primo di quel tipo. Nell'edizione originale di Johnsonbaugh gli esempi di questi tre metodi sono:
>
> - per contrapposizione: «se $x^2$ è irrazionale allora $x$ è irrazionale»;
> - per casi: «$2m^2 + 3n^2 = 40$ non ha soluzioni intere positive»;
> - equivalenza: «$n$ è dispari se e solo se $n - 1$ è pari».
>
> Li metto qui, ma non posso controllare che numeri abbiano nel nostro libro. Gli altri esempi vengono dagli esercizi del §2.2, con le soluzioni ufficiali.
>
> **«Ancora prove per contraddizione».** Il diario chiama così anche questi esempi. Contrapposizione e assurdo sono molto vicini, e la seconda sezione spiega perché.
>
> **Con la lezione 14.** La [lezione 14](14_altri_metodi_di_prova.html), scritta prima del 30/10, anticipava questi metodi con altri esempi. Lì ci sono anche le dimostrazioni di esistenza, costruttive e non: sono tra gli esempi **omessi** dal docente, quindi quella sezione è un di più. Il §2.3, la risoluzione, non lo tratto.
>
> Servono la [lezione 16](16_dimostrazioni_per_assurdo.html) (per assurdo), la [13](13_dimostrazioni_dirette_controesempi.html) (dimostrazione diretta) e la [07](07_condizionali_equivalenza_logica.html) (contronominale, «se e solo se»).

## Per contrapposizione (libro, esempio 2.2.5)

Certe frasi sono scomode da dimostrare in modo diretto, perché l'ipotesi dà solo un'informazione negativa. Un esempio: «se $x^2$ è irrazionale, allora $x$ è irrazionale». L'ipotesi dice che $x^2$ **non** è una frazione, e da lì non parte nessun conto. Girando la frase le negazioni spariscono.

La **contronominale** di una frase «se… allora…» si ottiene scambiando le due parti e negandole tutte e due. In simboli: da $P \to Q$ a $\neg Q \to \neg P$. È equivalente alla frase di partenza ([lezione 07](07_condizionali_equivalenza_logica.html)), quindi dimostrare l'una è dimostrare l'altra.

```widget logica
titolo: Una frase e la sua contronominale hanno la stessa tavola
modo: equivalenza
a: p → q
b: ¬q → ¬p
```

> [!DEF] Dimostrazione per contrapposizione (libro, §2.2, domanda di ripasso 4)
> Per dimostrare $P \to Q$, la dimostrazione per contrapposizione dimostra la frase equivalente $\neg Q \to \neg P$.

**Come si legge.** Si scrive la contronominale e la si dimostra in modo diretto, come nella [lezione 13](13_dimostrazioni_dirette_controesempi.html): si suppone «non $Q$» e si arriva a «non $P$».

> [!ESEMPIO] · Se $x^2$ è irrazionale, allora $x$ è irrazionale
> **Passo 1: la contronominale.** «Se $x$ **non** è irrazionale, allora $x^2$ non è irrazionale», cioè: «se $x$ è razionale, allora $x^2$ è razionale».
>
> **Passo 2: dimostrazione diretta.** Suppongo $x$ razionale: $x = \frac{p}{q}$ con $p$ e $q$ interi e $q \ne 0$. Allora $x^2 = \frac{p^2}{q^2}$, che è un rapporto di interi con denominatore diverso da zero: è razionale.
>
> **Passo 3.** La contronominale è vera, quindi è vera la frase di partenza.

Un secondo esempio, con un «oppure» nella tesi. La frase: se il prodotto di due interi è pari, allora almeno uno dei due è pari. Chiamo i due interi $m$ e $n$.

1. **La contronominale.** Il contrario di «il primo è pari **oppure** il secondo è pari» è, per De Morgan, «il primo è dispari **e** il secondo è dispari». Quindi: «se due interi sono tutti e due dispari, il loro prodotto è dispari».
2. **La dimostrazione diretta.** $m = 2a + 1$ e $n = 2b + 1$. Allora $mn = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1$, che è dispari.

```grafico
titolo: La frase (in alto) e la sua contronominale (in basso). Le due parti si scambiano di posto e si negano. Chi dimostra la riga in basso ha dimostrato quella in alto
x: 0 12.4
y: 0 4.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.6 2.7 4.8 2.7 4.8 3.7 0.6 3.7 | blu | pieno
testo: 2.7 3.2 | blu | "P: x² irrazionale"
freccia: 4.9 3.2 7.5 3.2 | blu
poligono: 7.6 2.7 11.8 2.7 11.8 3.7 7.6 3.7 | ambra | pieno
testo: 9.7 3.2 | ambra | "Q: x irrazionale"
poligono: 0.6 0.5 4.8 0.5 4.8 1.5 0.6 1.5 | ambra | pieno
testo: 2.7 1.0 | ambra | "non Q: x razionale"
freccia: 4.9 1.0 7.5 1.0 | verde
poligono: 7.6 0.5 11.8 0.5 11.8 1.5 7.6 1.5 | blu | pieno
testo: 9.7 1.0 | blu | "non P: x² razionale"
testo: 6.2 2.1 | grigio | "equivalenti"
testo: 6.2 0.2 | verde | "questa si dimostra in modo diretto"
```

> [!TRAPPOLA] Scambiare **e** negare
> La contronominale scambia le due parti e le nega. Negare senza scambiare dà «se non $P$ allora non $Q$»; scambiare senza negare dà «se $Q$ allora $P$». Nessuna delle due è equivalente alla frase di partenza: dimostrarle non serve.

::: prova Scrivi la contronominale di «se $n^2$ è multiplo di 3, allora $n$ è multiplo di 3».
«Se $n$ non è multiplo di 3, allora $n^2$ non è multiplo di 3.»
:::

> [!RICORDA]
> - Contronominale: scambio e nego. È equivalente alla frase di partenza.
> - Per contrapposizione: suppongo non $Q$, arrivo a non $P$, in modo diretto.

## Contrapposizione e assurdo sono parenti

Il diario chiama anche questi esempi «prove per contraddizione». Il motivo è che una dimostrazione per contrapposizione si trasforma in una per assurdo aggiungendo una riga, e spesso è questione di gusto.

| | Per contrapposizione | Per assurdo |
|---|---|---|
| suppongo | $x$ razionale | $x^2$ irrazionale **e** $x$ razionale |
| ricavo | $x^2$ razionale | $x^2$ razionale |
| concludo | ho dimostrato la contronominale | $x^2$ è irrazionale e razionale: contraddizione |

Il conto in mezzo è lo stesso. Per assurdo si tiene anche l'ipotesi, e alla fine la si usa solo per dire «contraddizione». La soluzione ufficiale dell'esercizio 1 del §2.2 scrive proprio questa frase per assurdo.

Il contrario non vale sempre. In una dimostrazione per assurdo la contraddizione può essere una frase qualsiasi con la sua negazione, non per forza il contrario dell'ipotesi: per $\sqrt{2}$, nella [lezione 16](16_dimostrazioni_per_assurdo.html), era «la frazione è ridotta e non è ridotta». Lì la contrapposizione non c'è.

::: prova Una dimostrazione comincia con «supponiamo che $n$ sia pari» e finisce con «quindi $3n + 2$ è pari». Quale frase ha dimostrato, e con che metodo?
«Se $3n + 2$ è dispari, allora $n$ è dispari», per contrapposizione: ha dimostrato la contronominale in modo diretto.
:::

> [!RICORDA]
> - Contrapposizione: arrivo a non $P$. Assurdo: tengo anche $P$ e arrivo a una contraddizione qualunque.

## Per casi (libro, esempi 2.2.6 e 2.2.7)

Il valore assoluto non ha una formula unica: è il numero stesso se non è negativo, il suo opposto se lo è. Per dimostrare una proprietà come $\lvert xy \rvert = \lvert x \rvert \cdot \lvert y \rvert$ bisogna quindi distinguere i segni. Quando le situazioni possibili sono alcune alternative, si dimostra la tesi in **ogni** alternativa.

> [!DEF] Dimostrazione per casi (libro, §2.2, domanda di ripasso 6)
> Invece di dimostrare $(p_1 \vee p_2 \vee \dots \vee p_n) \to q$, nella dimostrazione per casi si dimostrano $p_1 \to q$, $p_2 \to q$, …, $p_n \to q$.

**Come si legge.** Le $p_i$ sono i casi. Se ogni caso porta alla tesi, e i casi insieme coprono tutte le possibilità, la tesi vale sempre.

> [!ESEMPIO] · $\lvert xy \rvert = \lvert x \rvert \cdot \lvert y \rvert$ (esercizio 37 del libro)
> I casi sono quattro, secondo il segno di $x$ e di $y$.
>
> **$x \ge 0$ e $y \ge 0$.** Allora $xy \ge 0$: $\lvert xy \rvert = xy = \lvert x \rvert \lvert y \rvert$.
>
> **$x < 0$ e $y \ge 0$.** Allora $xy \le 0$: $\lvert xy \rvert = -xy = (-x)(y) = \lvert x \rvert \lvert y \rvert$.
>
> **$x \ge 0$ e $y < 0$.** Allora $xy \le 0$: $\lvert xy \rvert = -xy = (x)(-y) = \lvert x \rvert \lvert y \rvert$.
>
> **$x < 0$ e $y < 0$.** Allora $xy > 0$: $\lvert xy \rvert = xy = (-x)(-y) = \lvert x \rvert \lvert y \rvert$.
>
> È la soluzione ufficiale. I quattro casi coprono tutto: ogni numero è negativo oppure no.

```grafico
titolo: I quattro casi per il valore assoluto di un prodotto, uno per ogni combinazione di segni. In ogni riquadro c'è il segno del prodotto xy e che cosa diventa il suo valore assoluto. Lo zero sta nei casi «≥ 0», così non resta fuori niente
x: 0 12.4
y: 0 5.0
assi: no
griglia: no
proporzioni: libere
poligono: 6.2 2.5 11.8 2.5 11.8 4.6 6.2 4.6 | verde | pieno
testo: 9.0 3.9 | verde | "x ≥ 0, y ≥ 0"
testo: 9.0 3.1 | grigio | "xy ≥ 0: resta xy"
poligono: 0.6 2.5 6.2 2.5 6.2 4.6 0.6 4.6 | ambra | pieno
testo: 3.4 3.9 | ambra | "x < 0, y ≥ 0"
testo: 3.4 3.1 | grigio | "xy ≤ 0: diventa −xy"
poligono: 0.6 0.4 6.2 0.4 6.2 2.5 0.6 2.5 | verde | pieno
testo: 3.4 1.8 | verde | "x < 0, y < 0"
testo: 3.4 1.0 | grigio | "xy > 0: resta xy"
poligono: 6.2 0.4 11.8 0.4 11.8 2.5 6.2 2.5 | ambra | pieno
testo: 9.0 1.8 | ambra | "x ≥ 0, y < 0"
testo: 9.0 1.0 | grigio | "xy ≤ 0: diventa −xy"
```

### Quando i casi sono pochi numeri

A volte i casi sono un elenco finito di valori da provare uno per uno: è una **dimostrazione esaustiva**. La frase, dall'edizione originale del libro: l'equazione $2m^2 + 3n^2 = 40$ non ha soluzioni intere positive.

1. **Si restringe il campo.** Il termine $2m^2$ non può superare 40, quindi $m$ è al massimo 4. Allo stesso modo $3n^2$ non può superare 40, quindi $n$ è al massimo 3.
2. **Si provano i casi.** Per ogni $m$ da 1 a 4 si calcola quanto resta per $3n^2$:

| $m$ | $2m^2$ | resta $40 - 2m^2$ | è 3 per un quadrato? |
|---|---|---|---|
| 1 | 2 | 38 | no, non è multiplo di 3 |
| 2 | 8 | 32 | no, non è multiplo di 3 |
| 3 | 18 | 22 | no, non è multiplo di 3 |
| 4 | 32 | 8 | no, non è multiplo di 3 |

Nessun caso funziona: non ci sono soluzioni. L'ho ricontrollato con un programma su tutte le coppie.

> [!TRAPPOLA] I casi devono coprire tutto
> «$x$ positivo» e «$x$ negativo» lasciano fuori lo 0. Prima di cominciare va controllato che ogni situazione cada in almeno un caso: «$x \ge 0$» e «$x < 0$», oppure «pari» e «dispari». Un caso dimenticato rende la dimostrazione incompleta, anche se tutti gli altri sono giusti.

::: prova Dimostra per casi che il prodotto di due interi consecutivi, $n(n + 1)$, è pari (esercizio 35 del libro).
Se $n$ è pari, $n = 2k$ e il prodotto è $2k(n + 1)$, pari. Se $n$ è dispari, $n = 2k + 1$, quindi $n + 1 = 2(k + 1)$ e il prodotto è $2n(k + 1)$, pari. In tutti e due i casi uno dei due fattori è pari.
:::

> [!RICORDA]
> - Per casi: una dimostrazione per ogni alternativa, e le alternative coprono tutto.
> - Pochi valori possibili: si restringe il campo e si provano tutti.

## «Se e solo se»: due direzioni (libro, esempio 2.2.9)

Una frase con «se e solo se» ne contiene due, una per direzione. Per esempio «$n$ è dispari se e solo se $n - 1$ è pari» dice: se un intero è dispari, quello prima è pari; e se quello prima è pari, l'intero è dispari. Un «se e solo se» è vero quando sono vere **tutte e due** ([lezione 07](07_condizionali_equivalenza_logica.html)).

```widget logica
titolo: Un «se e solo se» è la congiunzione delle due frecce
modo: equivalenza
a: p ↔ q
b: (p → q) ∧ (q → p)
```

> [!DEF] Dimostrazione di equivalenza (libro, §2.2, domanda di ripasso 8)
> Una dimostrazione di equivalenza mostra che due o più frasi sono tutte vere o tutte false.

**Come si legge.** Per due frasi si dimostrano le due frecce, $P \to Q$ e $Q \to P$. Sono due dimostrazioni separate, e ognuna può usare un metodo diverso: diretta, per assurdo, per contrapposizione.

> [!ESEMPIO] · $n$ è dispari se e solo se $n - 1$ è pari
> **Da sinistra a destra.** Suppongo $n$ dispari: $n = 2k + 1$. Allora $n - 1 = 2k$, che è pari.
>
> **Da destra a sinistra.** Suppongo $n - 1$ pari: $n - 1 = 2k$. Allora $n = 2k + 1$, che è dispari.
>
> Le due direzioni sono dimostrate: la frase è vera per ogni intero $n$.

> [!ESEMPIO] · $A \subseteq B$ se e solo se $\overline{B} \subseteq \overline{A}$ (esercizio 48 del libro)
> $\overline{A}$ è il complementare di $A$: gli elementi che non stanno in $A$.
>
> **Da sinistra a destra.** Suppongo $A \subseteq B$ e prendo un $x$ in $\overline{B}$, cioè $x \notin B$. Se $x$ fosse in $A$, starebbe anche in $B$, perché $A \subseteq B$: non è così. Quindi $x \notin A$, cioè $x \in \overline{A}$.
>
> **Da destra a sinistra.** Suppongo $\overline{B} \subseteq \overline{A}$. Per la prima parte, applicata ai due complementari, il complementare di $\overline{A}$ è contenuto nel complementare di $\overline{B}$. Il complementare del complementare è l'insieme di partenza: $A \subseteq B$.
>
> È la soluzione ufficiale. La frase è la contronominale scritta con gli insiemi: «se sta in $A$ sta in $B$» equivale a «se non sta in $B$ non sta in $A$».

Con **tre** frasi equivalenti non servono sei dimostrazioni: basta un giro, dalla prima alla seconda, dalla seconda alla terza, dalla terza alla prima (domanda di ripasso 10). L'esempio del libro su tre frasi è tra quelli omessi; un esercizio è in fondo.

> [!TRAPPOLA] Una direzione sola non basta
> Chi dimostra solo «se $n$ è dispari allora $n - 1$ è pari» ha dimostrato una freccia, non il «se e solo se». L'altra direzione può essere falsa: «se $n$ è multiplo di 4 allora $n$ è pari» è vera, il viceversa no.

::: prova Dimostra: $n$ è pari se e solo se $n + 2$ è pari (esercizio 46 del libro).
Se $n$ è pari, $n = 2k$ e $n + 2 = 2(k + 1)$, pari. Se $n + 2$ è pari, $n + 2 = 2k$ e $n = 2(k - 1)$, pari. È la soluzione ufficiale.
:::

> [!RICORDA]
> - «Se e solo se» = due frecce, due dimostrazioni.
> - Tre frasi equivalenti: basta dimostrare un giro di tre frecce.

## Quale metodo scegliere

Davanti a una frase nuova il metodo si sceglie guardando la **forma** della frase e quale delle sue parti dà più informazioni. Questa tabella mette insieme le lezioni 13, 16 e questa.

| Metodo | Che cosa suppongo | Dove devo arrivare | Quando conviene |
|---|---|---|---|
| diretta | $P$ | $Q$ | l'ipotesi dà una formula: «$n$ è pari» |
| per assurdo | $P$ e non $Q$ | una contraddizione qualunque | la tesi dice «non esiste», «è vuoto», «almeno uno» |
| per contrapposizione | non $Q$ | non $P$ | il contrario della tesi dà una formula e l'ipotesi no |
| per casi | un caso alla volta | $Q$ in ogni caso | valore assoluto, pari o dispari, massimo e minimo |
| equivalenza | prima $P$, poi $Q$ | $Q$, poi $P$ | la frase dice «se e solo se» |
| controesempio | niente | un caso che smentisce | la frase «per ogni» è **falsa** |

I metodi si combinano: una direzione di un «se e solo se» può essere per contrapposizione, e un caso di una dimostrazione per casi può chiudersi per assurdo.

::: prova Che metodo provi per primo su «per ogni reale $x$, $x \le \lvert x \rvert$»? E su «se $n^2$ non è multiplo di 5, allora $n$ non è multiplo di 5»?
La prima per casi, sul segno di $x$. La seconda per contrapposizione: la contronominale è «se $n$ è multiplo di 5, allora $n^2$ è multiplo di 5», che è un conto diretto.
:::

> [!RICORDA]
> - Guarda la forma: «se e solo se», valore assoluto, negazioni nella tesi.
> - Parti dalla parte della frase che dà una formula.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\neg Q \to \neg P$ | «se non Q allora non P» | la contronominale di $P \to Q$ | «se $x$ è razionale, $x^2$ è razionale» |
| $P \leftrightarrow Q$ | «P se e solo se Q» | $P \to Q$ e $Q \to P$ insieme | $n$ dispari $\leftrightarrow$ $n - 1$ pari |
| $\lvert x \rvert$ | «valore assoluto di x» | $x$ se $x \ge 0$, $-x$ se $x < 0$ | $\lvert -3 \rvert = 3$ |
| $\overline{A}$ | «complementare di A» | gli elementi che non stanno in $A$ | $x \in \overline{A}$ vuol dire $x \notin A$ |
| $p_1 \vee \dots \vee p_n$ | «p uno oppure … oppure p enne» | i casi, che insieme coprono tutto | «$n$ pari» $\vee$ «$n$ dispari» |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Riconoscere il metodo** dalla prima riga di una dimostrazione: che cosa suppone e dove vuole arrivare.
2. **Scrivere la contronominale** senza confonderla con l'inversa: è la stessa abilità dei quiz sulla freccia della lezione 07.
3. **Sapere che un «se e solo se» chiede due direzioni**, e che i casi devono coprire tutto.

Nelle simulazioni 2023/24 che ho non ci sono domande sulle dimostrazioni: la domanda qui sotto è sul modello degli esercizi del §2.2.

### Una domanda sul modello, letta insieme

**Il testo.** «Si vuole dimostrare: per ogni intero $n$, se $n^2 + 1$ è pari allora $n$ è dispari. Quale di queste prime righe comincia una dimostrazione per contrapposizione? (A) Supponiamo che $n^2 + 1$ sia pari. (B) Supponiamo che $n$ sia pari. (C) Supponiamo che $n$ sia dispari. (D) Supponiamo che $n^2 + 1$ sia dispari.»

**In pratica chiede:** qual è «non $Q$», la cosa da supporre.

> [!ESEMPIO] · la soluzione, opzione per opzione
> **$P$ e $Q$.** $P$ è «$n^2 + 1$ è pari», $Q$ è «$n$ è dispari». Per contrapposizione si suppone non $Q$: «$n$ è pari».
>
> **(A)** suppone $P$: è l'inizio di una dimostrazione diretta. **(B)** suppone non $Q$: **è quella giusta**. **(C)** suppone $Q$: dimostrerebbe l'inversa. **(D)** suppone non $P$: porta a «se non $P$ allora non $Q$», che non è equivalente.
>
> **Come continua.** $n = 2k$, quindi $n^2 + 1 = 4k^2 + 1 = 2(2k^2) + 1$, dispari: è non $P$. È il passo «(c) implica (a)» della soluzione ufficiale dell'esercizio 52.

> [!METODO] Scrivere una dimostrazione per contrapposizione
> 1. Individua $P$ e $Q$ nella frase «se $P$ allora $Q$».
> 2. Scrivi non $Q$ e non $P$, con De Morgan se ci sono «e» e «oppure».
> 3. Dichiara il metodo: «Dimostriamo la contronominale: se non $Q$ allora non $P$».
> 4. Supponi non $Q$ e procedi in modo diretto fino a non $P$.

### Errori da evitare

- Dimostrare l'inversa, «se $Q$ allora $P$», credendo di aver dimostrato la frase.
- Negare un «oppure» lasciando «oppure».
- Dimenticare un caso, di solito lo zero o l'uguaglianza.
- Dimostrare una sola direzione di un «se e solo se».

## Quiz

```quiz
D: Qual è la contronominale di «se $x^2$ è irrazionale, allora $x$ è irrazionale»?
+ se $x$ è razionale, allora $x^2$ è razionale
- se $x$ è irrazionale, allora $x^2$ è irrazionale
- se $x^2$ è razionale, allora $x$ è razionale
- se $x$ è razionale, allora $x^2$ è irrazionale
- $x^2$ è irrazionale e $x$ è razionale
= Si scambiano le due parti e si negano tutte e due. La più insidiosa è la terza: nega senza scambiare, e non è equivalente alla frase di partenza. L'ultima è la supposizione di una dimostrazione per assurdo.

D: Una dimostrazione di «se $P$ allora $Q$» comincia con «supponiamo non $Q$» e finisce con «quindi non $P$». Che metodo è?
+ per contrapposizione
- diretta
- per casi
- per assurdo
- per controesempio
= Da non $Q$ a non $P$ è la dimostrazione diretta della contronominale. La più insidiosa è «per assurdo»: lì si suppone anche $P$ e si chiude con una contraddizione.

D: Qual è il contrario di «$m$ è pari oppure $n$ è pari», da usare in una contronominale?
+ $m$ è dispari e $n$ è dispari
- $m$ è dispari oppure $n$ è dispari
- $m$ è pari e $n$ è pari
- $mn$ è dispari
- $m$ è dispari e $n$ è pari
= De Morgan: il contrario di un «oppure» è un «e» dei contrari. La più insidiosa è la seconda, che nega le parti ma tiene «oppure».

D: Per dimostrare per casi una proprietà di tutti i reali $x$, quale coppia di casi va bene?
+ $x \ge 0$ e $x < 0$
- $x > 0$ e $x < 0$
- $x \ge 1$ e $x \le -1$
- $x$ intero e $x$ irrazionale
- $x > 0$ e $x \ge 1$
= I casi devono coprire tutti i reali. La più insidiosa è la seconda, che dimentica lo 0.

D: Quanti casi ha la dimostrazione di $\lvert xy \rvert = \lvert x \rvert \cdot \lvert y \rvert$ nella soluzione del libro?
N: 4
= Uno per ogni combinazione dei segni di $x$ e di $y$.

D: Che cosa bisogna dimostrare per provare «$P$ se e solo se $Q$»?
+ «se $P$ allora $Q$» e «se $Q$ allora $P$»
- solo «se $P$ allora $Q$»
- «se $P$ allora $Q$» e la sua contronominale
- che $P$ e $Q$ sono tutte e due vere
- «se $P$ allora $Q$» oppure «se $Q$ allora $P$»
= Servono le due direzioni. La più insidiosa è la terza: la contronominale è equivalente alla prima freccia, quindi si dimostrerebbe due volte la stessa direzione.

D: Tre frasi $P$, $Q$, $R$ sono equivalenti. Quale gruppo di dimostrazioni basta?
+ $P \to Q$, $Q \to R$, $R \to P$
- $P \to Q$, $Q \to R$
- $P \to Q$, $P \to R$
- $P \to Q$, $Q \to P$
- $Q \to P$, $R \to P$
= Il giro chiuso permette di andare da ognuna a ogni altra. La più insidiosa è la seconda: senza $R \to P$ non si torna indietro.
```

## Esercizi

::: esercizio base Riscaldamento: contronominali
Scrivi la contronominale di: (a) «se $n$ è multiplo di 6, allora $n$ è pari»; (b) «se $a + b$ è dispari, allora $a$ è dispari oppure $b$ è dispari»; (c) «se $A \cap B = \varnothing$, allora $A \ne B$ oppure $A = \varnothing$».
::: soluzione
(a) «Se $n$ è dispari, allora $n$ non è multiplo di 6.» (b) «Se $a$ e $b$ sono tutti e due pari, allora $a + b$ è pari.» (c) «Se $A = B$ e $A \ne \varnothing$, allora $A \cap B \ne \varnothing$.» Nella (b) e nella (c) l'«oppure» è diventato «e».
:::

::: esercizio base Riscaldamento: una contrapposizione
Dimostra per contrapposizione: per ogni intero $n$, se $n^2$ è dispari, allora $n$ è dispari.
::: soluzione
La contronominale: se $n$ è pari, allora $n^2$ è pari. Suppongo $n = 2k$: allora $n^2 = 4k^2 = 2(2k^2)$, pari. La soluzione ufficiale dell'esercizio 4 del §2.2 fa lo stesso conto, scritto per assurdo.
:::

::: esercizio medio Esercizio 39 del libro: il segno
La funzione $\mathrm{sgn}(x)$ vale 1 se $x > 0$, 0 se $x = 0$, $-1$ se $x < 0$. Dimostra che $\lvert x \rvert = \mathrm{sgn}(x) \cdot x$ per ogni reale $x$.
::: soluzione
Per casi, tre. Se $x > 0$: $\lvert x \rvert = x = 1 \cdot x$. Se $x = 0$: $\lvert x \rvert = 0 = 0 \cdot 0$. Se $x < 0$: $\lvert x \rvert = -x = (-1) \cdot x$. In ogni caso vale l'uguaglianza. È la soluzione ufficiale; i casi sono tre perché la funzione ha tre righe.
:::

::: esercizio medio Esercizio 32 del libro: nessuna soluzione
Dimostra che $2m + 5n^2 = 20$ non ha soluzioni con $m$ e $n$ interi positivi.
::: soluzione
Se $n \ge 2$, allora $5n^2 \ge 20$ e con $m \ge 1$ la somma supera 20. Resta $n = 1$: la somma è $2m + 5$, un numero pari più uno dispari, quindi dispari, e non può fare 20. È la soluzione ufficiale: due casi su $n$, e nel secondo un argomento di parità. Ricontrollato con un programma.
:::

::: esercizio esame Autoverifica del capitolo 2, domanda 5
Dimostra che $\min\{\min\{a, b\}, c\} = \min\{a, \min\{b, c\}\}$ per tutti i reali $a$, $b$, $c$.
::: soluzione
Per casi: prima $a \le b$ oppure $a > b$, e in ognuno $b \le c$ oppure $b > c$. **$a \le b$ e $b \le c$:** a sinistra $\min\{a, c\} = a$, a destra $\min\{a, b\} = a$. **$a \le b$ e $b > c$:** a sinistra $\min\{a, c\}$, a destra $\min\{a, c\}$. **$a > b$ e $b \le c$:** a sinistra $\min\{b, c\} = b$, a destra $\min\{a, b\} = b$. **$a > b$ e $b > c$:** a sinistra $\min\{b, c\} = c$, a destra $\min\{a, c\} = c$, perché $a > b > c$. In tutti e quattro i casi i due lati coincidono: è la soluzione ufficiale. I due lati sono il minimo dei tre numeri.
:::

::: esercizio difficile Esercizio 52 del libro: tre frasi equivalenti
Dimostra che per ogni intero $n$ sono equivalenti: (a) $n$ è dispari; (b) esiste un intero $k$ con $n = 2k - 1$; (c) $n^2 + 1$ è pari.
::: soluzione
Un giro di tre frecce. **(a) implica (b):** $n = 2k' + 1 = 2(k' + 1) - 1$, quindi va bene $k = k' + 1$. **(b) implica (c):** $n^2 + 1 = (2k - 1)^2 + 1 = 4k^2 - 4k + 2 = 2(2k^2 - 2k + 1)$, pari. **(c) implica (a):** per contrapposizione. Se $n$ è pari, $n = 2k$ e $n^2 + 1 = 2(2k^2) + 1$ è dispari. È la soluzione ufficiale: tre dimostrazioni, due dirette e una per contrapposizione.
:::

## Domande di ripasso

::: domanda Che cosa dimostra, di fatto, una dimostrazione per contrapposizione di «se $P$ allora $Q$»?
La frase equivalente «se non $Q$ allora non $P$», in modo diretto.
:::

::: domanda Che differenza c'è tra contrapposizione e assurdo?
Per contrapposizione si suppone solo non $Q$ e si arriva a non $P$. Per assurdo si suppongono $P$ e non $Q$ e si arriva a una contraddizione qualunque.
:::

::: domanda Che cosa si dimostra in una dimostrazione per casi?
La tesi in ognuno dei casi, dopo aver controllato che i casi coprano tutte le possibilità.
:::

::: domanda Come si dimostra un «se e solo se»?
Con due dimostrazioni, una per direzione.
:::

::: domanda Quali parti del §2.2 e del capitolo ha omesso il docente?
L'esempio 2.2.8, gli esempi dal 2.2.10 in poi (tra cui le dimostrazioni di esistenza) e il §2.3 sulla risoluzione.
:::

## Glossario

```glossario
Contronominale | La frase «se non Q allora non P», equivalente a «se P allora Q».
Inversa | La frase «se Q allora P»: non è equivalente a «se P allora Q».
Dimostrazione per contrapposizione | Dimostrazione diretta della contronominale.
Dimostrazione per casi | Dimostrazione che prova la tesi separatamente in ogni alternativa possibile.
Dimostrazione esaustiva | Dimostrazione per casi in cui i casi sono un elenco finito di valori, provati uno per uno.
Dimostrazione di equivalenza | Dimostrazione di un «se e solo se», con le due direzioni.
Valore assoluto | Il numero senza segno: x se x ≥ 0, −x se x < 0.
```

## Checklist

```checklist
- So scrivere la contronominale di una frase, anche con «e» e «oppure».
- So distinguere la contronominale dall'inversa.
- So scrivere una dimostrazione per contrapposizione, dichiarando il metodo.
- So spiegare che cosa cambia tra contrapposizione e assurdo.
- So scegliere casi che coprono tutto, senza dimenticare lo zero.
- So fare una dimostrazione per casi con il valore assoluto.
- So che un «se e solo se» chiede due direzioni.
- So scegliere il metodo guardando la forma della frase.
- So quali parti del §2.2 e il §2.3 sono state omesse.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 2), §2.2 «More Methods of Proof». Il libro non ce l'ho: uso le risposte ufficiali alle domande di ripasso del §2.2 (4–10) e le soluzioni degli esercizi 1, 4, 32, 35, 37, 39, 42, 46, 48 e 52 e dell'autoverifica del capitolo 2 (domanda 5), pubblicate sul Moodle del canale A. Gli enunciati «se $x^2$ è irrazionale…», «$2m^2 + 3n^2 = 40$…» e «$n$ dispari se e solo se $n - 1$ pari» sono quelli dell'edizione originale, con dimostrazioni scritte da me.
- F. Cardone, «Appunti sulle tecniche di dimostrazione» (Moodle del canale A, aperto agli ospiti).
- Diario delle lezioni del canale B (Berardi), lezione 18 del docente, 09/11/2026.
- L'esempio del prodotto pari, la tabella dei metodi, la domanda sul modello, i quiz e gli esercizi di riscaldamento sono di questi appunti.
