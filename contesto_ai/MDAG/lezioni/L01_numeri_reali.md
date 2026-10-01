---
corso: MDAG
modulo: AG
lezione: L01
titolo: Numeri reali
data: 2026-09-30
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L01
descrizione: >-
  Appunti della lezione L01 di Algebra lineare e Geometria (MDAG, parte 2): insiemi numerici, costruzione dei numeri
  reali, irrazionalità di √2, campi, ordine, notazioni e conti con le radici, con quiz nello stile dell'esame ed
  esercizi svolti.
lede: >-
  I numeri che userai in tutto il corso: quali sono, come si chiamano e quali regole seguono. Si parte dai numeri per
  contare e si arriva a quelli con infinite cifre dopo la virgola. In più: come si leggono i simboli della matematica
  e come si fanno i conti con le radici senza calcolatrice.
materiale: dispense
scheda:
  Dispense: lezione 1 · pp. 2–5
  Libro: Martelli, §1.1 e complemento 1.II
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 1 «Numeri reali»; B. Martelli, Geometria e algebra lineare, §1.1, §1.5 e complemento 1.II
file_en: L01_real_numbers.html
appunti_html: appunti/MDAG/L01_numeri_reali.html
genera_html: true
---

## In breve

- Questa lezione parla dei **numeri**: quali esistono, come si chiamano e con quale lettera si indicano.
- I numeri sono divisi in quattro famiglie, una dentro l'altra: i numeri per contare, gli interi (con il segno meno), le frazioni e i numeri reali (quelli che possono avere infinite cifre dopo la virgola).
- Alcuni numeri, come la radice quadrata di 2, non si possono scrivere come frazione. Si chiamano **irrazionali**.
- I conti seguono nove regole che usi da sempre, come «2 + 5 fa lo stesso di 5 + 2». Un insieme di numeri in cui valgono tutte e nove si chiama **campo**.
- Le parentesi cambiano il significato: con le graffe, con le tonde o con le quadre la stessa coppia di numeri indica tre cose diverse.
- Per l'esame servono tre cose: riconoscere un campo, usare le parentesi giuste e fare i conti con le radici senza calcolatrice.

> [!CANALI]
> Algebra lineare e Geometria usa le **stesse dispense** nei tre canali: Buzano insegna nei canali A e B, Radeschi nei canali B e C. Questi appunti seguono le dispense 2026, quindi valgono allo stesso modo per A, B e C. Cambiano solo i giorni delle lezioni: la pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)) avverte che i cambi d'orario vengono annunciati lì e a lezione. Esame e quiz sono comuni ai tre canali.

## Prima di cominciare

### Di che cosa parla questa lezione

Tutto il corso di Algebra lineare fa conti con i numeri. Per questo la prima lezione non parla ancora di vettori o di matrici: parla dei numeri stessi.

Da piccoli si impara a contare: uno, due, tre. Poi si scoprono i numeri sotto zero, come i gradi di temperatura in inverno. Poi le frazioni, come mezza pizza. Infine i numeri con la virgola che non finiscono mai, come pi greco. Ogni volta la famiglia dei numeri diventa più grande.

In questa lezione dai un nome a ognuna di queste famiglie e impari la lettera con cui si indica. Queste lettere compaiono in ogni pagina delle dispense, quindi conviene conoscerle bene da subito.

Poi vedi quali regole seguono le somme e i prodotti. Sono regole che usi già senza pensarci. Qui ricevono un nome, perché nelle prossime lezioni le stesse regole varranno anche per oggetti che non sono numeri.

Alla fine ci sono due cose pratiche: come si leggono i simboli che trovi nelle formule e come si fanno a mano i conti con le radici.

Una parte della lezione è più astratta delle altre: spiega come si «costruiscono» i numeri con infinite cifre. Serve per capire, ma all'esame non viene chiesta. Dove comincia, trovi un avviso.

### Che cosa devi già sapere

Quasi niente. Bastano queste tre cose, e le ultime due le ripassiamo insieme quando servono.

- **Le quattro operazioni** con i numeri interi: più, meno, per, diviso.
- **Le frazioni**: che cosa vuol dire «un mezzo» o «tre quarti». Il ripasso è nella sezione sulle famiglie dei numeri.
- **Quadrati e radici**: che cosa vuol dire «3 al quadrato» e «radice di 9». Il ripasso è nella sezione sulla radice di 2.

### Che cosa saprai fare alla fine

- Dire in quale famiglia sta un numero: per esempio che $-4$ è un intero e che $\frac 72$ è una frazione.
- Leggere ad alta voce una scrittura come $3 \in \N$.
- Spiegare perché $\sqrt 2$ non è una frazione.
- Dire perché gli interi non formano un campo e le frazioni sì.
- Non confondere $\{1, 2\}$, $(1, 2)$ e $[1, 2]$.
- Semplificare a mano espressioni come $\sqrt{12}$ e $\frac 6{\sqrt 3}$.

## Gli insiemi: sacchetti con dentro delle cose (p. 2)

Prima di parlare di numeri serve una parola sola: **insieme**.

Immagina un sacchetto. Dentro ci metti delle cose: per esempio una mela, una pera e una banana. Il sacchetto con quello che contiene è un insieme. Le cose dentro si chiamano **elementi** dell'insieme.

In matematica dentro il sacchetto di solito ci sono dei numeri. Al posto del sacchetto si disegnano due **parentesi graffe**, una che apre e una che chiude. Gli elementi si scrivono in mezzo, separati da virgole:

$$\{1, 3, 5\}$$

Questo è l'insieme che contiene tre numeri: l'1, il 3 e il 5. Nient'altro.

Per non riscriverlo ogni volta, a un insieme si dà un **nome**: una lettera maiuscola. Per esempio lo chiamiamo $A$:

$$A = \{1, 3, 5\}$$

Si legge: «$A$ è l'insieme che contiene 1, 3 e 5».

### Due regole sui sacchetti

In un insieme conta solo **che cosa c'è dentro**. Da qui vengono due regole.

- **L'ordine non conta.** $\{1, 3, 5\}$ e $\{5, 1, 3\}$ sono lo stesso insieme. Un sacchetto resta lo stesso anche se lo scuoti.
- **Le ripetizioni non contano.** $\{1, 1, 3\}$ è uguale a $\{1, 3\}$. Un numero o c'è o non c'è: scriverlo due volte non aggiunge niente.

### «Sta dentro» e «non sta dentro»

Per dire che un numero sta dentro un insieme c'è un simbolo apposta: $\in$. Assomiglia a una piccola E.

$$3 \in A$$

Si legge «3 appartiene ad $A$». Vuol dire: il 3 è uno degli elementi di $A$. Ed è vero, perché $A = \{1, 3, 5\}$ e il 3 c'è.

Lo stesso simbolo con una barra sopra, $\notin$, vuol dire il contrario.

$$2 \notin A$$

Si legge «2 non appartiene ad $A$». È vero anche questo: tra 1, 3 e 5 il 2 non c'è.

### Un sacchetto dentro un altro

Prendi due insiemi:

$$A = \{1, 3, 5\} \qquad B = \{1, 5\}$$

Gli elementi di $B$ sono l'1 e il 5. Tutti e due stanno anche in $A$. Allora $B$ è **contenuto** in $A$. Un insieme contenuto in un altro si chiama **sottoinsieme**. Il simbolo è $\subset$:

$$B \subset A$$

Si legge «$B$ è contenuto in $A$».

In $A$ c'è anche il 3, che in $B$ manca. Quindi $A$ ha qualcosa **in più** di $B$. Per dirlo si usa un simbolo un po' diverso, $\subsetneq$, con una lineetta sbarrata sotto:

$$B \subsetneq A$$

Si legge «$B$ è contenuto **strettamente** in $A$». Dice due cose insieme: $B$ sta dentro $A$, e $A$ ha almeno un elemento in più.

### I puntini e l'insieme vuoto

Quando gli elementi sono tanti, o infiniti, non si possono scrivere tutti. Allora si scrivono i primi e poi tre **puntini**. I puntini vogliono dire «e avanti così, con la stessa regola».

$$\{2, 4, 6, 8, \dots\}$$

Questo è l'insieme dei numeri pari da 2 in su. Dopo l'8 viene il 10, poi il 12, e non finiscono mai.

Esiste anche il sacchetto vuoto: l'insieme senza nessun elemento. Si chiama **insieme vuoto** e si scrive $\emptyset$.

::: prova Vero o falso? (a) $5 \in \{1, 3, 5\}$; (b) $4 \in \{1, 3, 5\}$; (c) $\{3\} \subset \{1, 3, 5\}$; (d) $\{1, 2\} \subset \{1, 3, 5\}$.
(a) Vero: il 5 è uno dei tre elementi.

(b) Falso: il 4 non c'è. Si scrive $4 \notin \{1, 3, 5\}$.

(c) Vero. L'unico elemento di $\{3\}$ è il 3, e il 3 sta anche in $\{1, 3, 5\}$.

(d) Falso. L'1 c'è, ma il 2 no. Basta un solo elemento fuori posto perché un insieme non sia contenuto nell'altro.
:::

::: prova $\{1, 2, 3\}$ e $\{3, 2, 1\}$ sono lo stesso insieme?
Sì. Dentro ci sono le stesse cose (1, 2 e 3), e l'ordine non conta.
:::

> [!NOTA] Dove si studiano meglio gli insiemi
> Le dispense ricordano che la teoria degli insiemi si fa in dettaglio nell'altra metà del corso, **Matematica Discreta**. Qui servono solo gli insiemi di numeri.

> [!RICORDA]
> - Un **insieme** è un sacchetto di elementi. Si scrive con le graffe: $\{1, 3, 5\}$.
> - $\in$ vuol dire «sta dentro», $\notin$ vuol dire «non sta dentro».
> - $\subset$ vuol dire «è contenuto in»: tutti gli elementi del primo insieme stanno anche nel secondo.
> - L'ordine e le ripetizioni non contano.

## Le famiglie dei numeri: naturali, interi e razionali (p. 2)

Adesso riempiamo i sacchetti con i numeri. Ci sono tre famiglie da conoscere subito, e ognuna ha la sua lettera.

### I numeri per contare: i naturali

Sono i numeri che usi per contare le cose: zero mele, una mela, due mele, tre mele. Si chiamano **numeri naturali**.

Tutti insieme formano un insieme. Si indica con una N dal tratto doppio: $\N$.

$$\N = \{0, 1, 2, 3, \dots\}$$

I puntini dicono che non finiscono mai: dopo ogni numero ce n'è sempre uno più grande.

> [!TRAPPOLA] Lo zero è un numero naturale
> In questo corso, e nel libro di Martelli, $\N$ **comincia da 0**. In alcuni libri di scuola comincia da 1. All'esame vale la regola del corso: $0 \in \N$.

### I numeri con il segno meno: gli interi

Con i numeri naturali certe sottrazioni non si possono fare. Hai 3 euro e ne devi pagare 5: quanto ti resta? Meno di niente, perché sei sotto di 2. Per scriverlo servono i **numeri negativi**: $3 - 5 = -2$.

I naturali insieme ai negativi si chiamano **numeri interi**. L'insieme degli interi si indica con $\Z$:

$$\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$$

Qui i puntini sono da tutte e due le parti, perché gli interi continuano senza fine sia a destra sia a sinistra. La lettera Z viene dal tedesco *Zahlen*, che vuol dire «numeri».

Ogni numero naturale è anche un intero. Quindi il sacchetto $\N$ sta dentro il sacchetto $\Z$. E $\Z$ ha qualcosa in più, per esempio $-1$. Con il simbolo di prima: $\N \subsetneq \Z$.

### Le frazioni: i razionali

Con gli interi certe divisioni non si possono fare. Dividi 1 pizza tra 2 persone: ognuno ne ha mezza. «Mezza» non è un numero intero. Per scriverlo serve una **frazione**: $\frac 12$.

> [!RIPASSO] che cos'è una frazione
> Una frazione si scrive con due numeri interi, uno sopra e uno sotto una lineetta: $\frac 34$.
>
> - Il numero **sotto** (il *denominatore*) dice in quante parti uguali è tagliata la torta: qui 4.
> - Il numero **sopra** (il *numeratore*) dice quante parti prendi: qui 3.
>
> Quindi $\frac 34$ vuol dire «tre fette di una torta tagliata in quattro». È anche il risultato della divisione 3 diviso 4, cioè $0{,}75$.
>
> Il numero sotto **non può essere 0**: non ha senso tagliare una torta in zero parti. Per questo non si divide mai per zero.
>
> Anche un intero è una frazione: basta mettere 1 sotto. Per esempio $5 = \frac 51$.

I numeri che si possono scrivere come frazione si chiamano **numeri razionali**. L'insieme dei razionali si indica con $\Q$. La Q viene da *quoziente*, che è il risultato di una divisione.

Ogni intero è anche un razionale, perché $5 = \frac 51$. Quindi $\Z$ sta dentro $\Q$. E $\Q$ ha qualcosa in più, per esempio $\frac 12$. Quindi $\Z \subsetneq \Q$.

### Come lo scrivono le dispense

Ora che le tre famiglie sono chiare, ecco la definizione con le parole delle dispense.

> [!DEF] 1.1 · Numeri naturali, interi e razionali
> L'insieme dei **numeri naturali** è $\N = \{0, 1, 2, 3, \dots\}$.
>
> Se aggiungiamo i numeri negativi otteniamo l'insieme dei **numeri interi** $\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$.
>
> Se oltre agli interi consideriamo tutti i numeri esprimibili come frazioni $\frac ab$, otteniamo l'insieme dei **numeri razionali**
> $$\Q = \left\{ \frac ab \ ;\ a, b \in \Z,\ b \neq 0 \right\}.$$

**Come si legge.** L'ultima riga, quella di $\Q$, è la più difficile. Un pezzo alla volta:

- le graffe dicono che è un insieme;
- $\frac ab$ dice che cosa c'è dentro: frazioni. Le lettere $a$ e $b$ stanno al posto di due numeri qualsiasi;
- il punto e virgola si legge «dove». Dopo ci sono le condizioni sulle due lettere;
- $a, b \in \Z$ vuol dire «$a$ e $b$ sono numeri interi»;
- $b \neq 0$ vuol dire «$b$ è diverso da zero». Il simbolo $\neq$ è un uguale sbarrato.

Tutta insieme: «$\Q$ è l'insieme delle frazioni $\frac ab$, dove $a$ e $b$ sono interi e $b$ non è zero».

### Perché servono famiglie sempre più grandi

C'è un'idea che lega tutto. Ogni famiglia nuova nasce perché in quella vecchia **manca la risposta** a una domanda semplice.

| Domanda | Risposta | C'è nella famiglia vecchia? | Famiglia nuova |
|---|---|---|---|
| Quale numero, sommato a 5, dà 3? | $-2$ | no: $-2$ non è un naturale | gli interi $\Z$ |
| Quale numero, moltiplicato per 2, dà 1? | $\frac 12$ | no: $\frac 12$ non è un intero | i razionali $\Q$ |
| Quale numero, moltiplicato per sé stesso, dà 2? | $\sqrt 2$ | no: non è una frazione (lo vediamo più avanti) | i reali $\R$ |
| Quale numero, moltiplicato per sé stesso, dà $-1$? | nessun numero reale | no | i complessi $\C$, dalla lezione L02 |

### Una frazione, tante scritture

Mezza pizza è mezza pizza anche se la tagli in 4 fette e ne prendi 2. Quindi $\frac 12$ e $\frac 24$ sono lo stesso numero, scritto in due modi.

Le dispense fanno questo esempio:

$$\frac 17 = \frac 3{21} = \frac{-8}{-56}$$

Sono tre scritture di «un settimo». Dalla prima alla seconda si passa moltiplicando sopra e sotto per 3. Dalla prima alla terza si passa moltiplicando sopra e sotto per $-8$.

Come si controlla se due frazioni sono lo stesso numero? Con i **prodotti in croce**:

1. moltiplica il sopra della prima per il sotto della seconda;
2. moltiplica il sotto della prima per il sopra della seconda;
3. se i due risultati sono uguali, le due frazioni sono lo stesso numero.

Proviamo con $\frac 17$ e $\frac 3{21}$. Nei conti il puntino $\cdot$ è il segno «per».

1. Sopra della prima per sotto della seconda: $1 \cdot 21 = 21$.
2. Sotto della prima per sopra della seconda: $7 \cdot 3 = 21$.
3. Viene 21 tutte e due le volte. Quindi $\frac 17 = \frac 3{21}$.

> [!NOTA] Chi viene prima
> Le dispense precisano che $\N$ è un **concetto primitivo**: non si costruisce a partire da altro, si parte da lì. Poi $\Z$ si costruisce a partire da $\N$, e $\Q$ a partire da $\Z$. Lo strumento che permette di dire «queste due frazioni sono lo stesso numero» si chiama *relazione di equivalenza*, e si studia in Matematica Discreta.

::: prova Per ogni numero di' la famiglia più piccola che lo contiene, tra $\N$, $\Z$ e $\Q$: (a) $7$; (b) $-7$; (c) $\frac 73$; (d) $\frac 62$.
(a) $\N$: è un numero per contare.

(b) $\Z$: ha il segno meno, quindi non è un naturale.

(c) $\Q$: 7 diviso 3 non dà un numero intero.

(d) $\N$: prima si semplifica. 6 diviso 2 fa 3, che è un numero per contare.
:::

::: prova $\frac 23$ e $\frac{10}{15}$ sono lo stesso numero? Usa i prodotti in croce.
$2 \cdot 15 = 30$ e $3 \cdot 10 = 30$. I due risultati sono uguali, quindi sì: sono lo stesso numero.
:::

> [!RICORDA]
> - $\N$: i numeri per contare, **zero compreso**.
> - $\Z$: i naturali più i numeri negativi.
> - $\Q$: tutte le frazioni, con il numero sotto diverso da zero.
> - Ogni famiglia sta dentro la successiva: $\N \subsetneq \Z \subsetneq \Q$.

## I numeri reali: infinite cifre dopo la virgola (pp. 2–3)

Le frazioni non bastano ancora. Per capire che cosa manca conviene guardarle scritte con la virgola.

### Da frazione a numero con la virgola

Una frazione è una divisione. Se fai la divisione ottieni un numero con la virgola:

$$\frac 14 = 0{,}25 \qquad\qquad \frac 13 = 0{,}333\ldots$$

Possono succedere solo due cose.

- Le cifre **finiscono**, come in $0{,}25$.
- Le cifre non finiscono, ma **si ripetono** sempre uguali, come in $0{,}333\ldots$ Il gruppo di cifre che si ripete si chiama **periodo**. Per scriverlo in breve si mette una lineetta sopra: $0{,}\overline{3}$.

Un periodo può essere più lungo di una cifra. Per esempio $\frac 17 = 0{,}142857142857\ldots$, che si scrive $0{,}\overline{142857}$.

Vale anche il contrario: ogni numero con la virgola che finisce, oppure che si ripete, è una frazione. L'esercizio 5 mostra come si trova.

### I numeri che le frazioni non raggiungono

Esistono anche numeri con infinite cifre dopo la virgola **che non si ripetono mai**. Il più famoso è pi greco:

$$\pi = 3{,}14159265\ldots$$

Le sue cifre vanno avanti per sempre, e nessun gruppo si ripete. Quindi $\pi$ non è una frazione.

Un numero che **può** avere infinite cifre dopo la virgola si chiama **numero reale**. L'insieme dei numeri reali si indica con $\R$.

I reali contengono tutto quello che abbiamo visto finora: i naturali, gli interi, le frazioni. E in più i numeri come $\pi$.

### Una stranezza: due scritture per lo stesso numero

Le dispense avvertono di una piccola ambiguità. Un numero che finisce con infiniti 9 è uguale al numero «arrotondato»:

$$5{,}973999\ldots = 5{,}974$$

Il caso più semplice è $0{,}999\ldots = 1$. Non è «quasi 1»: è proprio 1, scritto in un altro modo. Ecco perché, in tre passi.

1. Sappiamo che $\frac 13 = 0{,}333\ldots$
2. Moltiplichiamo per 3 tutti e due i lati. A sinistra viene $3 \cdot \frac 13 = 1$. A destra ogni cifra 3 diventa 9, quindi viene $0{,}999\ldots$
3. I due lati erano uguali prima, quindi sono uguali anche dopo: $1 = 0{,}999\ldots$

### Come si costruiscono i numeri reali: l'idea

> [!NOTA] Questa parte serve per capire, non per l'esame
> Da qui alla fine della sezione si vede come si definiscono i numeri reali in modo preciso. Nei due appelli del 2026 (15/01 e 07/09) non c'è nessuna domanda su questo argomento. Se hai poco tempo, leggi solo il riquadro «Da ricordare» in fondo alla sezione.

Dire «un numero con infinite cifre» va bene per farsi un'idea. Ma resta un problema: **come si sommano due numeri così?** Per fare una somma in colonna si parte dalla cifra più a destra. Con infinite cifre, una cifra più a destra non esiste.

Le dispense risolvono il problema con un'idea diversa. Prova a «raggiungere» $\pi$ usando solo numeri che finiscono:

- con una cifra dopo la virgola: $3{,}1$
- con due cifre: $3{,}14$
- con tre cifre: $3{,}141$
- con quattro cifre: $3{,}1415$
- e avanti così, senza fermarsi mai.

Ognuno di questi numeri finisce, quindi è una frazione. Per esempio $3{,}14 = \frac{314}{100}$. Nessuno di loro è $\pi$. Ma più vai avanti nella lista, più ti avvicini a $\pi$.

L'idea è questa: **un numero reale è una lista infinita di frazioni che si avvicinano sempre di più a qualcosa.** Anche se quel «qualcosa» non è una frazione, la lista lo individua lo stesso.

Servono due parole nuove.

- Una lista infinita di numeri, uno dopo l'altro, si chiama **successione**. I numeri della lista si chiamano **termini**. Si scrivono con un numerino in basso che dice il posto: $a_1$ è il primo, $a_2$ il secondo, $a_3$ il terzo. Nella lista di $\pi$: $a_1 = 3{,}1$, poi $a_2 = 3{,}14$, poi $a_3 = 3{,}141$.
- Una successione in cui i termini, da un certo punto in poi, sono **vicinissimi tra loro** si chiama **successione di Cauchy**. Si pronuncia «coscì»: è il nome di un matematico francese.

La lista di $\pi$ è una successione di Cauchy. Dal terzo termine in poi tutti cominciano con $3{,}141$, quindi tra l'uno e l'altro c'è meno di un millesimo. Dal sesto in poi c'è meno di un milionesimo. E avanti così, sempre più vicini.

> [!ESEMPIO] 1.2 · Il numero $\pi$
> Il numero reale $\pi$ ha infinite cifre dopo la virgola: $3{,}1415926\ldots$ Corrisponde alla successione di Cauchy di numeri razionali
> $$a_1 = 3{,}1 \qquad a_2 = 3{,}14 \qquad a_3 = 3{,}141 \qquad a_4 = 3{,}1415 \qquad \dots$$
> Le dispense aggiungono che la successione che definisce un numero reale **non è unica**. Per esempio anche la lista $3{,}2;\ 3{,}15;\ 3{,}142;\ 3{,}1416;\ \dots$ (ogni volta arrotondando per eccesso) si avvicina a $\pi$. Due liste diverse possono indicare lo stesso numero.

> [!APPROFONDIMENTO] la definizione precisa di successione di Cauchy (p. 2)
> Le dispense scrivono «vicinissimi tra loro» in modo preciso.
>
> Una successione $(a_n)$ di numeri razionali $a_n \in \Q$ è **di Cauchy** se per ogni numero razionale $\varepsilon > 0$ esiste un $N > 0$ per cui
> $$|a_m - a_n| < \varepsilon \quad \text{per ogni } m, n > N.$$
>
> **Come si legge.**
>
> - $(a_n)$ è la successione, cioè tutta la lista $a_1, a_2, a_3, \dots$
> - $\varepsilon$ è la lettera greca *epsilon*. Qui indica una **tolleranza**: un numero positivo piccolo che scegli tu, per esempio un millesimo.
> - $|a_m - a_n|$ è la **distanza** tra due termini della lista. Le due barre verticali sono il *valore assoluto*: tolgono il segno meno, perché una distanza non è mai negativa. Per esempio $|3 - 5| = |-2| = 2$.
> - «Esiste un $N$ … per ogni $m, n > N$» vuol dire: **da un certo posto in poi**, cioè dopo il posto numero $N$, due termini qualsiasi distano meno della tolleranza.
>
> Tutta insieme: per quanto piccola tu scelga la tolleranza, da un certo punto in poi i termini distano tra loro meno di quella tolleranza. Più la tolleranza è piccola, più avanti nella lista bisogna andare.

### Le liste che puntano a un buco

Una successione di Cauchy fatta di frazioni può comportarsi in due modi.

- Si avvicina a una **frazione**. Per esempio la lista $0{,}3;\ 0{,}33;\ 0{,}333;\ \dots$ si avvicina a $\frac 13$. Allora rappresenta quella frazione, e non c'è niente di nuovo.
- Si avvicina a qualcosa che **non è una frazione**, come la lista di $\pi$. Allora rappresenta un numero nuovo, che tra le frazioni non c'era: un **numero irrazionale**.

Un'immagine utile. Metti tutte le frazioni su un righello. Sono fittissime, ma tra l'una e l'altra restano dei buchi piccolissimi: per esempio nel punto dove dovrebbe stare $\pi$. Una successione di Cauchy che punta a un buco serve a **riempirlo**.

> [!DEF] Numeri reali (p. 3)
> I **numeri reali** sono definiti come *classi di equivalenza* di successioni di Cauchy di numeri razionali. Due successioni di Cauchy sono **equivalenti** se la loro differenza è una successione che tende a zero.

**Come si legge.** Due liste sono «equivalenti» quando si avvicinano alla stessa cosa, come le due liste di $\pi$ dell'Esempio 1.2. «Classe di equivalenza» vuol dire che tutte le liste equivalenti tra loro contano come **un solo** numero. È lo stesso trucco delle frazioni: $\frac 12$ e $\frac 24$ sono scritture diverse dello stesso numero.

> [!ESEMPIO] 1.3 · Il numero $e$
> Le dispense danno un secondo esempio di lista che punta a un buco. Il termine di posto $n$ si calcola con questa formula:
> $$a_n = \left(1 + \frac 1n\right)^n$$
> Al posto di $n$ metti 1 per avere il primo termine, 2 per il secondo, 3 per il terzo. Il piccolo $n$ in alto è una potenza: il numero tra parentesi va moltiplicato per sé stesso $n$ volte.
>
> - Con $n = 1$: dentro la parentesi $1 + \frac 11 = 2$. Poi $2^1 = 2$. Quindi $a_1 = 2$.
> - Con $n = 2$: dentro la parentesi $1 + \frac 12 = \frac 32$. Poi $\frac 32 \cdot \frac 32 = \frac 94$. Quindi $a_2 = \frac 94 = 2{,}25$.
> - Con $n = 3$: dentro la parentesi $1 + \frac 13 = \frac 43$. Poi $\frac 43 \cdot \frac 43 \cdot \frac 43 = \frac{64}{27}$. Quindi $a_3 = \frac{64}{27}$, che è circa $2{,}370$.
>
> Ogni termine è una frazione. La successione è di Cauchy, ma non si avvicina a nessuna frazione. Quindi definisce un numero reale nuovo: il **numero di Eulero** $e = 2{,}71828\ldots$

```grafico
titolo: I termini $a_n = \left(1 + \frac 1n\right)^n$ salgono verso $e \approx 2{,}718$ ma nessuno lo raggiunge
proporzioni: libere
x: 0 13
y: 1.8 2.9
nomi: $n$ $a_n$
retta: 0 2.71828 13 2.71828 | ambra | tratteggio | $e$ | no
punto: 1 2 | accento
punto: 2 2.25 | accento
punto: 3 2.37037 | accento
punto: 4 2.44141 | accento
punto: 5 2.48832 | accento
punto: 6 2.52163 | accento
punto: 7 2.5465 | accento
punto: 8 2.56578 | accento
punto: 9 2.58117 | accento
punto: 10 2.59374 | accento
punto: 11 2.6042 | accento
punto: 12 2.61304 | accento
```

### Nei numeri reali non ci sono più buchi (p. 3)

Con questa costruzione tutti i buchi del righello sono stati riempiti. Le dispense lo riassumono con due idee da tenere in testa.

1. Ogni numero reale si può **approssimare** con le frazioni, con la precisione che vuoi. Per esempio $3{,}14159$ è una frazione molto vicina a $\pi$.
2. Se rifacessi tutto il lavoro partendo da liste di numeri **reali**, invece che di frazioni, non troveresti nessun numero nuovo.

La seconda idea ha un nome preciso: $\R$ è **completo**.

> [!PROP] · $\R$ è completo
> A differenza di $\Q$, l'insieme $\R$ dei numeri reali è **completo**: ogni successione di Cauchy in $\R$ converge.

**Come si legge.** «Converge» vuol dire «si avvicina sempre di più a un numero preciso». Quindi: ogni lista di numeri reali che si stringe si avvicina a un numero reale. Non punta mai a un buco, perché di buchi non ce ne sono più. In $\Q$ invece i buchi ci sono: la lista di $\pi$ è fatta di frazioni ma non si avvicina a nessuna frazione.

> [!OLTRE] · dove trovarlo nel libro
> Il libro di Martelli presenta questa costruzione nel complemento **1.II «Costruzione dei numeri reali»** (pp. 40–42 del libro).

::: prova $0{,}25$, $0{,}\overline{6}$ e $\pi$: quali sono frazioni?
$0{,}25$ finisce: è la frazione $\frac 14$.

$0{,}\overline 6 = 0{,}666\ldots$ si ripete: è la frazione $\frac 23$.

$\pi$ ha infinite cifre che non si ripetono mai: non è una frazione.
:::

::: prova Scrivi i primi quattro termini di una lista di numeri che finiscono e che si avvicina a $\frac 23 = 0{,}666\ldots$
$0{,}6;\ 0{,}66;\ 0{,}666;\ 0{,}6666$. Ogni termine ha una cifra in più del precedente, come nella lista di $\pi$.
:::

> [!RICORDA]
> - Un **numero reale** è un numero che può avere infinite cifre dopo la virgola. L'insieme dei reali è $\R$.
> - Le frazioni sono i numeri con la virgola che finiscono o che si ripetono. Quelli che non si ripetono mai, come $\pi$, sono **irrazionali**.
> - In modo preciso, un numero reale è una lista di frazioni che si avvicinano sempre di più tra loro: una successione di Cauchy.
> - $\R$ è **completo**: non ha buchi. $\Q$ invece ne ha.

## Perché la radice di 2 non è una frazione (p. 4)

Finora abbiamo solo detto che esistono numeri che non sono frazioni. In questa sezione ne guardiamo uno da vicino e dimostriamo che davvero non lo è.

> [!RIPASSO] quadrato e radice quadrata
> Il **quadrato** di un numero è il numero moltiplicato per sé stesso. Si scrive con un piccolo 2 in alto: $3^2 = 3 \cdot 3 = 9$.
>
> La **radice quadrata** fa la strada al contrario. $\sqrt 9$ è il numero positivo che, moltiplicato per sé stesso, dà 9. Quindi $\sqrt 9 = 3$.
>
> Altri due esempi: $\sqrt{16} = 4$ perché $4 \cdot 4 = 16$, e $\sqrt{25} = 5$ perché $5 \cdot 5 = 25$.
>
> I numeri come 9, 16 e 25, che sono il quadrato di un intero, si chiamano **quadrati perfetti**.

### Da dove viene la radice di 2

$\sqrt 2$ è il numero positivo che, moltiplicato per sé stesso, dà 2. Nessun intero funziona: $1 \cdot 1 = 1$ è troppo poco, $2 \cdot 2 = 4$ è troppo. Quindi $\sqrt 2$ sta tra 1 e 2. Le prime cifre sono $1{,}41421\ldots$

Non è un numero inventato: è una lunghezza che si può disegnare. Prendi un quadrato con il lato lungo 1. La sua diagonale è lunga proprio $\sqrt 2$.

```grafico
titolo: La diagonale di un quadrato di lato 1 è lunga $\sqrt 2$
assi: no
griglia: no
x: -0.4 1.6
y: -0.4 1.4
poligono: 0 0 1 0 1 1 0 1 | blu
segmento: 0 0 1 1 | ambra | spesso | $\sqrt 2$ | no
testo: 0.5 -0.12 | $1$
testo: 1.12 0.5 | $1$
```

> [!RIPASSO] il teorema di Pitagora
> In un triangolo con un angolo retto, i due lati corti si chiamano *cateti* e il lato lungo si chiama *ipotenusa*. Il teorema dice: il quadrato di un cateto, più il quadrato dell'altro cateto, è uguale al quadrato dell'ipotenusa.
>
> La diagonale taglia il quadrato in due triangoli con un angolo retto. I cateti sono i lati del quadrato, lunghi 1. L'ipotenusa è la diagonale. Quindi il quadrato della diagonale è $1^2 + 1^2 = 2$, e la diagonale è $\sqrt 2$.

### Tutte le famiglie, una dentro l'altra

Le dispense riassumono le quattro famiglie in una riga sola:

$$\N \subsetneq \Z \subsetneq \Q \subsetneq \R$$

Si legge da sinistra a destra: i naturali stanno dentro gli interi, gli interi dentro i razionali, i razionali dentro i reali. Ogni volta c'è il simbolo «strettamente», perché ogni famiglia ha qualcosa in più di quella prima:

- $-1$ è un intero ma non un naturale;
- $\frac 12$ è un razionale ma non un intero;
- $\sqrt 2$ è un reale ma non un razionale.

```grafico
titolo: Ogni insieme contiene il precedente e ha qualcosa in più
assi: no
griglia: no
x: -1.8 5.4
y: -3.6 3.6
cerchio: 0 0 1 | accento
cerchio: 0.6 0 1.8 | blu
cerchio: 1.2 0 2.6 | viola
cerchio: 1.8 0 3.4 | ambra
testo: 0 0.4 | accento | $\N$
testo: 0 -0.3 | $0,\ 1,\ 2,\ \dots$
testo: 1.75 0.4 | blu | $\Z$
testo: 1.75 -0.3 | $-3$
testo: 3.1 0.4 | viola | $\Q$
testo: 3.1 -0.3 | $\frac 12$
testo: 4.5 0.4 | ambra | $\R$
testo: 4.5 -0.3 | $\sqrt 2,\ \pi$
```

I primi due punti dell'elenco si vedono a occhio. Il terzo no. Come si fa a essere sicuri che **nessuna** frazione, tra le infinite che esistono, sia uguale a $\sqrt 2$? Non si possono provare tutte. Serve un ragionamento.

### Ragionare per assurdo

Il ragionamento che serve si chiama **dimostrazione per assurdo**. Funziona come il ragionamento di un detective.

Un detective vuole dimostrare che Mario **non** era in casa alle otto. Ragiona così: «Facciamo finta che Mario fosse in casa. Allora la telecamera sul portone lo avrebbe ripreso mentre entrava. Ma nel filmato Mario non c'è. È impossibile. Quindi Mario non era in casa.»

I passi sono sempre questi quattro.

1. Fai finta che sia vero **il contrario** di quello che vuoi dimostrare.
2. Ragioni in modo corretto, un passo alla volta.
3. Arrivi a una cosa **impossibile**. In matematica si chiama *assurdo*, oppure *contraddizione*.
4. Concludi che il punto 1 era sbagliato. Quindi è vero quello che volevi dimostrare.

Per la dimostrazione servono due attrezzi, che trovi nel riquadro qui sotto.

> [!RIPASSO] pari, dispari e frazioni ridotte
> Un numero intero è **pari** se è il doppio di un altro intero: $6 = 2 \cdot 3$. È **dispari** se è un numero pari più 1: $7 = 6 + 1$.
>
> **Primo attrezzo: se il quadrato di un numero è pari, anche il numero è pari.** Il motivo è che un numero dispari ha sempre il quadrato dispari: $3^2 = 9$, $5^2 = 25$, $7^2 = 49$. Vale per tutti i dispari. Un dispari si scrive $2k + 1$, dove $k$ è un intero. Il suo quadrato è $(2k + 1) \cdot (2k + 1) = 4k^2 + 4k + 1$. I primi due pezzi sono pari, e un numero pari più 1 è dispari.
>
> **Secondo attrezzo: le frazioni ridotte.** Una frazione è *ridotta ai minimi termini* quando sopra e sotto non si possono più dividere per lo stesso numero. $\frac 68$ non è ridotta: sopra e sotto si dividono per 2, e diventa $\frac 34$. Invece $\frac 34$ è ridotta. Ogni frazione si può ridurre.

> [!PROP] 1.4
> Il numero $\sqrt 2$ non è razionale.

**Come si legge.** «Non è razionale» vuol dire «non si può scrivere come frazione». Un numero reale che non è razionale si chiama **irrazionale**.

Ecco la dimostrazione delle dispense, un passo alla volta.

1. **Facciamo finta del contrario.** Supponiamo che $\sqrt 2$ sia una frazione: $\sqrt 2 = \frac ab$, con $a$ e $b$ interi.
2. **Scegliamo la frazione ridotta.** Se $a$ e $b$ si potessero dividere per lo stesso numero, li dividiamo subito. Quindi possiamo supporre che $\frac ab$ sia ridotta ai minimi termini. Tieni a mente questo punto: tra poco lo contraddiremo.
3. **Eleviamo al quadrato** tutti e due i lati. A sinistra $(\sqrt 2)^2 = 2$. A destra $\left(\frac ab\right)^2 = \frac{a^2}{b^2}$. Quindi
   $$2 = \frac{a^2}{b^2}.$$
4. **Togliamo la frazione.** Moltiplichiamo tutti e due i lati per $b^2$:
   $$2b^2 = a^2.$$
5. **$a$ è pari.** Il numero $a^2$ è il doppio di $b^2$, quindi è pari. Per il primo attrezzo, anche $a$ è pari. Allora $a$ è il doppio di un intero, che chiamiamo $k$: $a = 2k$.
6. **Sostituiamo.** Al posto di $a$ scriviamo $2k$. Il suo quadrato è $2k \cdot 2k = 4k^2$. La riga del passo 4 diventa $2b^2 = 4k^2$. Dividiamo tutti e due i lati per 2:
   $$b^2 = 2k^2.$$
7. **Anche $b$ è pari.** Il numero $b^2$ è il doppio di $k^2$, quindi è pari. Di nuovo per il primo attrezzo, anche $b$ è pari.
8. **L'assurdo.** $a$ e $b$ sono tutti e due pari, quindi si possono dividere tutti e due per 2. Ma al passo 2 avevamo scelto una frazione ridotta, che non si può più semplificare. Le due cose non possono essere vere insieme.
9. **Conclusione.** L'ipotesi del passo 1 porta a una cosa impossibile, quindi è sbagliata. $\sqrt 2$ **non** è una frazione.

> [!IDEA] · la ricetta, in tre mosse
> 1. Scrivi il numero come frazione **ridotta**.
> 2. Eleva al quadrato e togli la frazione.
> 3. Mostra che sopra e sotto hanno un divisore in comune: è l'assurdo.
>
> Con la stessa ricetta si dimostra che $\sqrt 3$ e $\sqrt 6$ non sono frazioni (esercizi 11 e 13).

> [!DIM] · un'altra strada, dal libro di Martelli
> Anche Martelli arriva alla riga $a^2 = 2b^2$. Poi usa la **scomposizione in fattori primi**, cioè la scrittura di un numero come prodotto di numeri primi: per esempio $36 = 2 \cdot 2 \cdot 3 \cdot 3$.
>
> In un quadrato ogni fattore primo compare un numero **pari** di volte. In $36 = 6^2$ il 2 compare due volte e il 3 due volte.
>
> Guarda allora quante volte compare il 2 nei due lati di $a^2 = 2b^2$. A sinistra c'è un quadrato, quindi il 2 compare un numero pari di volte. A destra c'è un quadrato moltiplicato per 2, quindi il 2 compare un numero pari di volte più una: un numero **dispari**. Ma un numero ha una sola scomposizione in fattori primi. I due lati non possono essere uguali: assurdo.

> [!OLTRE] · altri numeri irrazionali
> La radice di un numero naturale è un intero oppure è irrazionale. È un intero quando il numero è un quadrato perfetto: $\sqrt 4 = 2$, $\sqrt 9 = 3$. Altrimenti è irrazionale: $\sqrt 2$, $\sqrt 3$, $\sqrt 5$, $\sqrt 8$. Anche $\pi$ ed $e$ sono irrazionali, ma le dimostrazioni sono molto più difficili e nel corso non servono.

> [!TRAPPOLA] Irrazionale per irrazionale non fa sempre irrazionale
> $\sqrt 2 \cdot \sqrt 2 = 2$, che è razionale. Anche $\sqrt 2 + (-\sqrt 2) = 0$ è razionale. Invece un razionale più un irrazionale è **sempre** irrazionale (esercizio 12): per esempio $1 + \sqrt 2$ non è una frazione.

::: prova Quali di questi numeri sono irrazionali? $\sqrt 4$, $\sqrt 5$, $\sqrt{49}$, $\sqrt 8$.
$\sqrt 5$ e $\sqrt 8$. Infatti 5 e 8 non sono quadrati perfetti. Invece $\sqrt 4 = 2$ e $\sqrt{49} = 7$ sono interi.
:::

::: prova Nella dimostrazione, qual è la cosa impossibile a cui si arriva?
$a$ e $b$ risultano tutti e due pari, quindi la frazione $\frac ab$ si può ancora semplificare per 2. Ma l'avevamo scelta ridotta ai minimi termini.
:::

> [!RICORDA]
> - $\sqrt 2$ è la lunghezza della diagonale di un quadrato di lato 1. Non è una frazione: è **irrazionale**.
> - Si dimostra **per assurdo**: si fa finta che sia una frazione ridotta e si scopre che si può ancora semplificare.
> - Le quattro famiglie stanno una dentro l'altra: $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$.

## Le nove regole dei conti: che cos'è un campo (p. 4)

Quando fai un conto usi delle regole senza accorgertene. Per esempio sai che $2 + 5$ e $5 + 2$ danno lo stesso risultato.

In questa sezione mettiamo queste regole in fila e diamo loro un nome. Può sembrare un lavoro inutile, ma non lo è. Dalla lezione L05 le stesse regole varranno anche per i vettori, che non sono numeri. Conoscerle per nome servirà lì.

Sui numeri reali ci sono due **operazioni**: la somma, con il segno $+$, e il prodotto, con il puntino $\cdot$. Le dispense le chiamano operazioni **binarie**. «Binaria» vuol dire che l'operazione prende **due** numeri e ne restituisce **uno**. Da 3 e 4 la somma restituisce 7, il prodotto restituisce 12.

### Le nove regole, con i numeri

| N. | La regola a parole | Un esempio |
|---|---|---|
| 1 | sommare 0 non cambia niente | $0 + 7 = 7$ |
| 2 | in una somma l'ordine non conta | $2 + 5 = 5 + 2$ |
| 3 | in una somma di tre numeri puoi cominciare da dove vuoi | $1 + (2 + 3) = (1 + 2) + 3$ |
| 4 | ogni numero ha un **opposto**: sommati fanno 0 | $7 + (-7) = 0$ |
| 5 | moltiplicare per 1 non cambia niente | $1 \cdot 7 = 7$ |
| 6 | in un prodotto l'ordine non conta | $2 \cdot 5 = 5 \cdot 2$ |
| 7 | in un prodotto di tre numeri puoi cominciare da dove vuoi | $2 \cdot (3 \cdot 4) = (2 \cdot 3) \cdot 4$ |
| 8 | ogni numero **diverso da 0** ha un **inverso**: moltiplicati fanno 1 | $4 \cdot \frac 14 = 1$ |
| 9 | moltiplicare una somma è come moltiplicare i due pezzi e poi sommare | $3 \cdot (2 + 5) = 3 \cdot 2 + 3 \cdot 5$ |

Controlliamo per intero la regola 3 e la regola 9. Le parentesi dicono quale conto va fatto per primo.

- **Regola 3.** A sinistra: prima $2 + 3 = 5$, poi $1 + 5 = 6$. A destra: prima $1 + 2 = 3$, poi $3 + 3 = 6$. Stesso risultato.
- **Regola 9.** A sinistra: prima $2 + 5 = 7$, poi $3 \cdot 7 = 21$. A destra: $3 \cdot 2 = 6$ e $3 \cdot 5 = 15$, poi $6 + 15 = 21$. Stesso risultato.

Ogni regola ha un nome, che ritroverai per tutto il corso.

- Il numero che «non cambia niente» si chiama **elemento neutro**. È lo 0 per la somma (regola 1) e l'1 per il prodotto (regola 5).
- «L'ordine non conta» è la proprietà **commutativa** (regole 2 e 6).
- «Puoi cominciare da dove vuoi» è la proprietà **associativa** (regole 3 e 7).
- La regola 9 è la proprietà **distributiva**.

### Lo zero non ha inverso

Guarda bene la regola 8: vale per ogni numero **tranne lo zero**.

L'inverso di un numero è quello che, moltiplicato per lui, dà 1. L'inverso di 4 è $\frac 14$. L'inverso di $\frac 23$ è $\frac 32$: basta scambiare sopra e sotto.

E l'inverso di 0? Dovrebbe essere un numero che, moltiplicato per 0, dà 1. Ma qualunque numero moltiplicato per 0 dà 0, mai 1. Quindi quel numero non esiste. È lo stesso divieto di prima: non si divide per zero.

### Come lo scrivono le dispense

Ecco le stesse nove regole con le parole e i simboli delle dispense.

> [!PROP] 1.5 · Le nove proprietà di $\R$
> Su $\R$ ci sono due operazioni binarie $+$ e $\cdot$ con le seguenti proprietà:
> 1. esiste l'**elemento neutro** $0$ per l'addizione $+$, per cui $0 + a = a + 0 = a$, $\forall a \in \R$;
> 2. vale la proprietà **commutativa** $a + b = b + a$, $\forall a, b \in \R$;
> 3. vale la proprietà **associativa** $a + (b + c) = (a + b) + c$, $\forall a, b, c \in \R$;
> 4. ogni elemento $a \in \R$ ha un **inverso** (o **opposto**) $-a$, per cui $a + (-a) = (-a) + a = 0$;
> 5. esiste l'**elemento neutro** $1$ per la moltiplicazione $\cdot$, per cui $1 \cdot a = a \cdot 1 = a$, $\forall a \in \R$;
> 6. vale la proprietà **commutativa** $a \cdot b = b \cdot a$, $\forall a, b \in \R$;
> 7. vale la proprietà **associativa** $a \cdot (b \cdot c) = (a \cdot b) \cdot c$, $\forall a, b, c \in \R$;
> 8. ogni elemento $a \in \R$ con $a \neq 0$ ha un **inverso** $a^{-1}$, per cui $a \cdot a^{-1} = a^{-1} \cdot a = 1$;
> 9. vale la proprietà **distributiva** $a \cdot (b + c) = a \cdot b + a \cdot c$, $\forall a, b, c \in \R$.

**Come si legge.** C'è un solo simbolo nuovo: $\forall$, una A rovesciata. Si legge «per ogni».

- «$\forall a \in \R$» si legge «per ogni $a$ che appartiene a $\R$». Vuol dire: qualunque numero reale tu metta al posto della lettera $a$.
- La riga 1 dice che $0 + a$ e $a + 0$ fanno $a$, per ogni numero reale $a$. Se al posto di $a$ metti 7 diventa $0 + 7 = 7 + 0 = 7$: è la regola 1 della tabella.
- Le righe 4 e 8 parlano di «inverso». Per la somma l'inverso si chiama di solito **opposto** e si scrive $-a$. Per il prodotto si scrive $a^{-1}$, con un piccolo $-1$ in alto, ed è lo stesso di $\frac 1a$. Per esempio $4^{-1} = \frac 14$.
- Ogni riga è una delle regole della tabella, scritta con le lettere al posto dei numeri. Le lettere servono a dire che la regola vale **per tutti** i numeri, non solo per quelli dell'esempio.

### Che cos'è un campo

Le nove regole non valgono solo per i numeri reali. Ogni insieme in cui si può sommare e moltiplicare, e in cui valgono tutte e nove, riceve lo stesso nome.

> [!DEF] Campo
> Un insieme con due operazioni $+$ e $\cdot$ che hanno queste nove proprietà si chiama **campo**.

**Come si legge.** «Campo» è solo un nome. Dice: qui dentro si possono fare le quattro operazioni con le solite regole, senza mai uscire dall'insieme. La somma e la sottrazione funzionano grazie agli opposti. Il prodotto e la divisione funzionano grazie agli inversi.

Le dispense aggiungono due avvisi. Il concetto di campo torna più in dettaglio nella lezione L05. E al posto di $a \cdot b$ si scrive spesso solo $ab$, senza il puntino.

### Quali insiemi sono campi?

Per decidere se una famiglia di numeri è un campo bastano quasi sempre due domande. Ogni numero ha il suo opposto **dentro la famiglia**? Ogni numero diverso da zero ha il suo inverso **dentro la famiglia**?

| Famiglia | L'opposto c'è sempre? | L'inverso c'è sempre? | È un campo? |
|---|---|---|---|
| $\N$ | no: l'opposto di 3 è $-3$, che non è un naturale | no: l'inverso di 3 è $\frac 13$, che non è un naturale | **no** |
| $\Z$ | sì | no: l'inverso di 2 è $\frac 12$, che non è un intero | **no** |
| $\Q$ | sì | sì: l'inverso di $\frac ab$ è $\frac ba$ | **sì** |
| $\R$ | sì | sì | **sì** |
| $\C$ | sì | sì (lezione L02) | **sì** |

Per dire che un insieme **non** è un campo basta **una** regola che non funziona, con **un** esempio. «$\Z$ non è un campo perché 2 non ha inverso in $\Z$» è una risposta completa.

> [!APPROFONDIMENTO] perché un numero per zero fa sempre zero
> Dalle nove regole si può ricavare anche quello che sembra scontato. Per esempio che $a \cdot 0 = 0$ per ogni numero $a$.
>
> 1. Per la regola 1, $0 + 0 = 0$. Quindi $a \cdot 0$ è uguale ad $a \cdot (0 + 0)$.
> 2. Per la regola 9, $a \cdot (0 + 0) = a \cdot 0 + a \cdot 0$.
> 3. Mettendo insieme i due passi: $a \cdot 0 = a \cdot 0 + a \cdot 0$.
> 4. Ora togliamo $a \cdot 0$ da tutti e due i lati, cioè sommiamo il suo opposto (regola 4). A sinistra resta $0$. A destra resta $a \cdot 0$.
>
> Quindi $0 = a \cdot 0$. Nella lezione L05 la stessa idea servirà per i vettori (Proposizione 5.5).

::: prova (a) Qual è l'opposto di $-5$? (b) Qual è l'inverso di $\frac 25$? (c) Qual è l'inverso di $1$?
(a) $5$, perché $-5 + 5 = 0$.

(b) $\frac 52$, perché $\frac 25 \cdot \frac 52 = \frac{10}{10} = 1$.

(c) $1$, perché $1 \cdot 1 = 1$.
:::

::: prova I numeri pari, cioè $\{\dots, -4, -2, 0, 2, 4, \dots\}$, formano un campo?
No. Manca l'1, che serve per la regola 5: l'1 è dispari. Manca anche l'inverso di 2, che sarebbe $\frac 12$.
:::

> [!RICORDA]
> - Un **campo** è un insieme di numeri in cui valgono le nove regole. In pratica: puoi fare le quattro operazioni senza uscire dall'insieme.
> - $\Q$, $\R$ e $\C$ sono campi. $\N$ e $\Z$ no.
> - Lo zero non ha inverso: non si divide per zero.

## Maggiore e minore: l'ordine (p. 5)

Tra due numeri diversi ce n'è sempre uno più grande.

Disegna una riga e mettici sopra i numeri: lo zero al centro, i positivi a destra, i negativi a sinistra. È la **retta dei numeri**. Un numero è **maggiore** di un altro se sta più a destra.

```grafico
titolo: La retta dei numeri: più un numero sta a destra, più è grande
assi: no
griglia: no
x: -4.6 4.6
y: -1.5 1.5
freccia: -4.4 0 4.4 0 | grigio
punto: -3 0 | $-3$ | s
punto: -2 0 | $-2$ | s
punto: -1 0 | $-1$ | s
punto: 0 0 | accento | $0$ | s
punto: 1 0 | $1$ | s
punto: 2 0 | $2$ | s
punto: 3 0 | $3$ | s
punto: 0.5 0 | ambra | $\frac 12$ | n
punto: 1.41421 0 | ambra | $\sqrt 2$ | n
punto: 3.14159 0 | ambra | $\pi$ | n
```

I simboli sono due.

- $a > b$ si legge «$a$ è maggiore di $b$». L'apertura del simbolo guarda verso il numero più grande: $7 > 4$.
- $a < b$ si legge «$a$ è minore di $b$»: $4 < 7$.

Con i numeri negativi serve attenzione: $-2 > -5$, perché $-2$ sta più a destra di $-5$. Un debito di 2 euro è meglio di un debito di 5.

Un insieme di numeri in cui due numeri diversi si possono sempre confrontare così si chiama **ordinato**. $\N$, $\Z$, $\Q$ e $\R$ sono tutti ordinati.

### La regola precisa

Le dispense danno una regola che non ha bisogno del disegno.

> [!DEF] Ordine (p. 5)
> Diciamo che $a > b$ se $a - b > 0$.

**Come si legge.** Per sapere se $a$ è maggiore di $b$ fai la sottrazione $a - b$. Se il risultato è positivo, cioè maggiore di zero, allora $a > b$.

Due esempi.

- Con 7 e 4: $7 - 4 = 3$, che è positivo. Quindi $7 > 4$.
- Con $-2$ e $-5$: $-2 - (-5) = -2 + 5 = 3$, che è positivo. Quindi $-2 > -5$.

Con questa regola basta sapere **quali numeri sono positivi**. Le dispense lo dicono famiglia per famiglia.

- In $\Z$ i positivi sono $1, 2, 3, \dots$
- In $\Q$ una frazione è positiva quando sopra e sotto hanno **lo stesso segno**. $\frac 34$ è positiva. Anche $\frac{-3}{-4}$ è positiva, perché meno diviso meno fa più. Invece $\frac{-3}4$ è negativa.
- In $\R$ la regola usa le successioni di Cauchy: è nel riquadro qui sotto.

> [!APPROFONDIMENTO] quando un numero reale è positivo (p. 5)
> Le dispense scrivono: un numero reale è positivo se è rappresentabile da una successione di Cauchy $(a_n)$ di numeri razionali per la quale esiste un numero razionale $\varepsilon > 0$ tale che $a_n > \varepsilon$ *definitivamente*.
>
> **Come si legge.** «Definitivamente» vuol dire «da un certo posto in poi, per sempre». Quindi: da un certo punto in poi, i termini della lista stanno tutti sopra una soglia positiva fissa, che qui si chiama $\varepsilon$.
>
> Perché serve la soglia? Guarda la lista $1;\ \frac 12;\ \frac 13;\ \frac 14;\ \dots$ I suoi termini sono tutti positivi, ma si avvicinano a 0, e lo zero non è positivo. Nessuna soglia funziona: prima o poi i termini scendono sotto. Invece la lista di $\pi$, cioè $3{,}1;\ 3{,}14;\ 3{,}141;\ \dots$, sta sempre sopra la soglia 3. Infatti $\pi$ è positivo.

> [!NOTA] Anticipo della lezione L02
> I numeri complessi $\C$ sono un campo, ma **non sono ordinati**: tra due numeri complessi non ha senso chiedersi quale sia il maggiore.

::: prova Metti il segno giusto, $>$ oppure $<$: (a) tra $3$ e $-8$; (b) tra $-7$ e $-1$; (c) tra $\frac 12$ e $\frac 13$.
(a) $3 > -8$. Controllo: $3 - (-8) = 3 + 8 = 11$, positivo.

(b) $-7 < -1$. Controllo: $-1 - (-7) = -1 + 7 = 6$, positivo. Quindi il maggiore è $-1$.

(c) $\frac 12 > \frac 13$: mezza pizza è più di un terzo di pizza. Controllo: $\frac 12 - \frac 13 = \frac 36 - \frac 26 = \frac 16$, positivo.
:::

> [!RICORDA]
> - $a > b$ vuol dire che $a$ sta più a destra di $b$ sulla retta dei numeri. La regola precisa: $a - b$ è positivo.
> - $\N$, $\Z$, $\Q$ e $\R$ sono ordinati. $\C$ no.

## Parentesi da non confondere (p. 5)

Tre scritture si assomigliano molto e vogliono dire cose diversissime.

| Scrittura | Parentesi | Che cos'è | Che cosa contiene |
|---|---|---|---|
| $\{1, 2\}$ | graffe | un insieme con due soli elementi | solo l'1 e il 2 |
| $(1, 2)$ | tonde | un **intervallo aperto** | tutti i numeri reali tra 1 e 2, **senza** l'1 e il 2 |
| $[1, 2]$ | quadre | un **intervallo chiuso** | tutti i numeri reali tra 1 e 2, **compresi** l'1 e il 2 |

Un **intervallo** è un pezzo della retta dei numeri: tutti i numeri reali tra un punto di partenza e un punto di arrivo. Tra 1 e 2 ci sono $1{,}5$, $1{,}01$, $1{,}999$ e infiniti altri.

I due numeri scritti tra le parentesi si chiamano **estremi**. La differenza tra tonde e quadre sta tutta lì:

- parentesi **tonda**: l'estremo è **escluso**;
- parentesi **quadra**: l'estremo è **incluso**.

```grafico
titolo: Tonda, estremo escluso (pallino vuoto). Quadra, estremo incluso (pallino pieno)
assi: no
griglia: no
x: 0.4 2.6
y: 0 1.1
segmento: 1 0.8 2 0.8 | accento | spesso
punto: 1 0.8 | accento | vuoto | $1$ | s
punto: 2 0.8 | accento | vuoto | $2$ | s
testo: 1.5 0.95 | $(1, 2)$
segmento: 1 0.3 2 0.3 | blu | spesso
punto: 1 0.3 | blu | $1$ | s
punto: 2 0.3 | blu | $2$ | s
testo: 1.5 0.45 | $[1, 2]$
```

Anche $(1, 2)$ e $[1, 2]$ sono insiemi. Ma hanno **infiniti** elementi, mentre $\{1, 2\}$ ne ha due.

### Scrivere un insieme con una condizione

C'è un modo molto usato per descrivere un insieme senza elencare gli elementi. Si scrive **quale condizione** devono rispettare.

$$\{x \in \R \mid 1 < x < 2\}$$

Si legge: «l'insieme degli $x$ che appartengono a $\R$ **tali che** $x$ è maggiore di 1 e minore di 2».

Un pezzo alla volta:

- la lettera $x$ sta per un numero qualsiasi;
- $x \in \R$ dice dove si cercano gli elementi: tra i numeri reali;
- la barretta verticale si legge «tale che». Nelle dispense al suo posto trovi a volte i due punti o il punto e virgola;
- $1 < x < 2$ è la condizione. È un modo breve per scrivere due cose insieme: $1 < x$ e $x < 2$.

Questo insieme è proprio l'intervallo aperto. Le dispense scrivono:

$$(1, 2) = \{x \in \R \mid 1 < x < 2\}, \qquad [1, 2] = \{x \in \R \mid 1 \le x \le 2\}.$$

Il simbolo $\le$ si legge «minore o uguale». A differenza di $<$, permette anche l'uguale. Per questo nell'intervallo chiuso l'1 e il 2 sono compresi.

> [!OLTRE] · gli altri intervalli
> Le due parentesi si possono mescolare. $[1, 2)$ include l'1 ed esclude il 2. $(1, 2]$ esclude l'1 e include il 2.
>
> Per una semiretta, cioè un pezzo di retta che da una parte non finisce, si usa il simbolo $\infty$ («infinito»). Per esempio $[0, +\infty)$ contiene tutti i numeri reali da 0 in su. Accanto a $\infty$ la parentesi è sempre tonda, perché l'infinito non è un numero e non può essere «incluso».

### La stessa scrittura per un punto

C'è un'ultima complicazione. In questo corso $(1, 2)$ si usa anche per una cosa del tutto diversa: un **punto del piano**, oppure un **vettore** (lezione L05). In quel caso i due numeri sono le coordinate: 1 passo a destra e 2 passi in su.

Come si capisce quale dei due significati vale? Dal **contesto**, cioè dalla frase intorno.

- «Il numero $x$ sta in $(1, 2)$»: è l'intervallo.
- «Il punto $P = (1, 2)$» oppure «il vettore $v = (1, 2)$»: è la coppia di coordinate. Qui l'ordine conta: $(1, 2)$ e $(2, 1)$ sono due punti diversi.

> [!ESAME] La notazione giusta
> Le dispense insistono: è **essenziale usare sempre la notazione giusta**. Le graffe **non si usano mai** per i punti o per i vettori. Scrivere $\{1, 2\}$ al posto del vettore $(1, 2)$ è un errore: in un insieme l'ordine non conta, in un vettore sì. Negli appelli i vettori sono scritti anche come ${}^t(1, 2)$, con una piccola $t$ in alto a sinistra. Vuol dire «messo in verticale», e si vede nella lezione L08.

::: prova Il numero 2 sta in $(1, 2)$? E in $[1, 2]$? E in $\{1, 2\}$?
In $(1, 2)$ no: la tonda esclude l'estremo.

In $[1, 2]$ sì: la quadra lo include.

In $\{1, 2\}$ sì: è uno dei suoi due elementi.
:::

::: prova Quanti elementi hanno $\{0, 5\}$ e $[0, 5]$?
$\{0, 5\}$ ne ha 2: lo 0 e il 5. $[0, 5]$ ne ha infiniti: tutti i numeri reali da 0 a 5.
:::

::: prova Scrivi con le parentesi l'insieme $\{x \in \R \mid 3 \le x < 7\}$.
$[3, 7)$. A sinistra la quadra, perché il 3 è compreso ($\le$). A destra la tonda, perché il 7 è escluso ($<$).
:::

> [!RICORDA]
> - Graffe: un insieme con gli elementi elencati. $\{1, 2\}$ ha due elementi.
> - Tonde: intervallo con gli estremi **esclusi**. Quadre: intervallo con gli estremi **inclusi**.
> - $(1, 2)$ può essere anche un punto o un vettore: lo dice il contesto.
> - Mai le graffe per un vettore.

## Le lettere greche del corso (p. 5)

Nelle formule del corso compaiono spesso lettere dell'alfabeto greco. Non hanno niente di speciale: sono altri nomi per i numeri, come $x$ e $y$. Le dispense chiedono di imparare queste nove.

| Lettera | Nome | Dove la incontrerai |
|---|---|---|
| $\alpha$ | alfa (*alpha*) | angoli, coefficienti |
| $\varepsilon$ | epsilon | un numero piccolo a piacere (successioni di Cauchy) |
| $\sigma$ | sigma | coefficienti, permutazioni in Matematica Discreta |
| $\vartheta$ | theta | angoli, per esempio nei numeri complessi |
| $\phi$ | fi (*phi*) | angoli, applicazioni |
| $\pi$ | pi greco | il numero $3{,}14159\ldots$ |
| $\lambda$ | lambda | i numeri che moltiplicano i vettori, e poi gli autovalori |
| $\mu$ | mi (*mu*) | come lambda, quando serve una seconda lettera |
| $\varrho$ | ro (*rho*) | raggi e distanze |

Alcune lettere si scrivono in due modi: $\vartheta$ e $\theta$ sono entrambe theta, $\phi$ e $\varphi$ entrambe fi, $\varrho$ e $\rho$ entrambe ro, $\varepsilon$ ed $\epsilon$ entrambe epsilon.

::: prova Come si chiamano $\lambda$, $\vartheta$ e $\varepsilon$?
Lambda, theta ed epsilon.
:::

> [!RICORDA]
> Le lettere greche sono solo nomi. Le più usate nel corso sono $\lambda$ (lambda) e $\mu$ (mi), che di solito indicano numeri, e $\vartheta$ (theta), che indica un angolo.

## Leggere i simboli della matematica (oltre le dispense)

Le formule del corso sono frasi scritte in breve.

Ogni simbolo sta al posto di qualche parola. Se rimetti le parole al posto dei simboli, una formula si legge come una frase normale. Le dispense usano questi simboli già dalla prima lezione; il libro di Martelli li spiega nel §1.1 (pp. 4–7).

| Simbolo | Si legge | Un esempio, letto a parole |
|---|---|---|
| $\forall$ | «per ogni» | $\forall a \in \R:\ a + 0 = a$ si legge «per ogni numero reale $a$, $a$ più zero fa $a$» |
| $\exists$ | «esiste» | $\exists x \in \Z:\ x + 5 = 3$ si legge «esiste un intero $x$ per cui $x$ più 5 fa 3». È vero: $x = -2$ |
| $:$ oppure $\mid$ | «tale che», «per cui» | $\{x \in \R \mid x > 0\}$ si legge «i numeri reali $x$ tali che $x$ è maggiore di zero» |
| $\Longrightarrow$ | «se … allora …» | $a = 2 \Longrightarrow a^2 = 4$ si legge «se $a$ è 2, allora $a$ al quadrato è 4» |
| $\Longleftrightarrow$ | «se e solo se» | $a - b > 0 \Longleftrightarrow a > b$ si legge «$a$ meno $b$ è positivo se e solo se $a$ è maggiore di $b$» |
| $\cup$ | «unito» | $\{1, 2\} \cup \{2, 3\} = \{1, 2, 3\}$: gli elementi che stanno nell'uno **o** nell'altro |
| $\cap$ | «intersecato» | $\{1, 2\} \cap \{2, 3\} = \{2\}$: gli elementi che stanno nell'uno **e** nell'altro |
| $\setminus$ | «meno» | $\{1, 2, 3\} \setminus \{3\} = \{1, 2\}$: il primo insieme senza gli elementi del secondo |

«Se e solo se» vuol dire che le due frasi sono vere insieme oppure false insieme: dalla prima si ricava la seconda, e dalla seconda la prima.

### Una parola cambia tutto

Le parole «per ogni» ed «esiste» si chiamano **quantificatori**. Vanno lette con attenzione, perché basta cambiare un pezzo della frase per passare da vero a falso.

- «Per ogni numero **reale** $x$ esiste un numero **reale** $y$ per cui $2y = x$.» È **vera**: basta prendere come $y$ la metà di $x$.
- «Per ogni numero **intero** $x$ esiste un numero **intero** $y$ per cui $2y = x$.» È **falsa**: con $x = 1$ servirebbe $y = \frac 12$, che non è un intero.

> [!TRAPPOLA] «Se … allora» non vale al contrario
> La frase «se $a$ è 2, allora $a^2$ è 4» è vera. La frase al contrario, «se $a^2$ è 4, allora $a$ è 2», è falsa: anche $a = -2$ dà $a^2 = 4$. Quando una frase vale in tutti e due i versi si usa «se e solo se».

::: prova Leggi a parole: $\forall x \in \N:\ x + 1 \in \N$. È vera?
«Per ogni numero naturale $x$, anche $x + 1$ è un numero naturale.» È vera: il numero che viene dopo un naturale è ancora un naturale.
:::

::: prova Quanto fanno $\{1, 2, 3\} \cap \{2, 3, 4\}$ e $\{1, 2, 3\} \cup \{2, 3, 4\}$?
Intersezione: gli elementi che stanno in tutti e due gli insiemi, cioè $\{2, 3\}$.

Unione: gli elementi che stanno in almeno uno dei due, cioè $\{1, 2, 3, 4\}$.
:::

> [!RICORDA]
> Una formula si legge come una frase. Il simbolo $\forall$ si legge «per ogni», $\exists$ si legge «esiste», la freccia doppia $\Longrightarrow$ si legge «se … allora».

## Conti con le radici senza calcolatrice (oltre le dispense)

All'esame la calcolatrice è vietata, e nelle risposte del quiz compaiono spesso le radici.

> [!ESAME] Perché impararlo adesso
> Nell'appello del 07/09/2026 le cinque risposte possibili per una distanza erano $3$, $\frac{\sqrt 3}3$, $3\sqrt 3$, $\sqrt 3$ e $3 + \sqrt 3$. Per un angolo comparivano $\arccos\frac 3{\sqrt{43}}$, $\arccos\frac 6{\sqrt{42}}$ e simili. Bisogna saper riconoscere che, per esempio, $\frac 1{\sqrt 3}$ e $\frac{\sqrt 3}3$ sono lo stesso numero.

Le regole sono sei. Valgono per numeri positivi o nulli sotto la radice.

### Regola 1: radice per radice

Il prodotto di due radici è la radice del prodotto.

$$\sqrt 2 \cdot \sqrt 8 = \sqrt{2 \cdot 8} = \sqrt{16} = 4$$

### Regola 2: portare fuori un quadrato

Se il numero sotto la radice è un quadrato perfetto moltiplicato per qualcos'altro, il quadrato perfetto «esce» dalla radice.

Esempio con $\sqrt{12}$.

1. Cerca un quadrato perfetto che divide 12. Il 4 va bene: $12 = 4 \cdot 3$.
2. Spezza la radice con la regola 1 letta al contrario: $\sqrt{4 \cdot 3} = \sqrt 4 \cdot \sqrt 3$.
3. Calcola la radice del quadrato perfetto: $\sqrt 4 = 2$.

Risultato: $\sqrt{12} = 2\sqrt 3$. La scrittura $2\sqrt 3$ vuol dire «2 per radice di 3»: tra un numero e una radice il puntino non si scrive.

### Regola 3: radice e quadrato si annullano

Il quadrato di una radice restituisce il numero di partenza: $(\sqrt 5)^2 = 5$. Viene dalla definizione: $\sqrt 5$ è il numero che, moltiplicato per sé stesso, dà 5.

Al contrario serve attenzione. La radice di un quadrato è sempre positiva: $\sqrt{(-3)^2} = \sqrt 9 = 3$, non $-3$.

### Regola 4: si sommano solo radici uguali

Due radici uguali si sommano come le mele: 2 mele più 5 mele fanno 7 mele.

$$2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$$

Due radici diverse non si possono unire: $\sqrt 2 + \sqrt 3$ resta scritto così.

### Regola 5: togliere la radice dal numero sotto

Una frazione con una radice sotto si riscrive moltiplicando sopra e sotto per quella radice. Il valore non cambia, perché moltiplicare sopra e sotto per lo stesso numero è come moltiplicare per 1.

Esempio con $\frac 6{\sqrt 3}$.

1. Moltiplica sopra e sotto per $\sqrt 3$. Sopra viene $6\sqrt 3$. Sotto viene $\sqrt 3 \cdot \sqrt 3 = 3$.
2. La frazione è diventata $\frac{6\sqrt 3}3$.
3. Semplifica: 6 diviso 3 fa 2. Risultato: $2\sqrt 3$.

### Regola 6: quando sotto c'è una somma o una differenza

Se sotto c'è una differenza come $\sqrt 2 - 1$, si moltiplica sopra e sotto per la stessa espressione con il segno cambiato, cioè $\sqrt 2 + 1$.

> [!RIPASSO] somma per differenza
> Moltiplicare una somma per la differenza degli stessi due numeri dà la differenza dei quadrati: $(x - y) \cdot (x + y) = x^2 - y^2$.
>
> Controllo con $x = 5$ e $y = 2$. A sinistra: $3 \cdot 7 = 21$. A destra: $25 - 4 = 21$.

Esempio con $\frac 1{\sqrt 2 - 1}$.

1. Moltiplica sopra e sotto per $\sqrt 2 + 1$. Sopra viene $\sqrt 2 + 1$.
2. Sotto viene $(\sqrt 2 - 1) \cdot (\sqrt 2 + 1)$. Per il ripasso fa $(\sqrt 2)^2 - 1^2 = 2 - 1 = 1$.
3. Risultato: $\frac{\sqrt 2 + 1}1 = \sqrt 2 + 1$. La radice sotto è sparita.

> [!TRAPPOLA] La radice di una somma
> La radice di una somma **non** è la somma delle radici. Controllo con i numeri: $\sqrt{9 + 16} = \sqrt{25} = 5$, mentre $\sqrt 9 + \sqrt{16} = 3 + 4 = 7$.

Tutte le regole in una tabella, da copiare sul foglio dell'esame.

| Regola | Esempio |
|---|---|
| $\sqrt a \cdot \sqrt b = \sqrt{ab}$ | $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$ |
| $\sqrt{a^2 b} = a\sqrt b$ | $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt 3$ |
| $(\sqrt a)^2 = a$ | $(\sqrt 5)^2 = 5$ |
| $\sqrt{x^2}$ è $x$ senza il segno meno | $\sqrt{(-3)^2} = 3$ |
| si somma solo la stessa radice | $2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$ |
| radice sotto: moltiplica sopra e sotto per la radice | $\frac 6{\sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$ |
| differenza sotto: moltiplica sopra e sotto per la somma | $\frac 1{\sqrt 2 - 1} = \sqrt 2 + 1$ |

::: prova Semplifica $\sqrt{18}$.
Un quadrato perfetto che divide 18 è 9: $18 = 9 \cdot 2$. Quindi $\sqrt{18} = \sqrt 9 \cdot \sqrt 2 = 3\sqrt 2$.
:::

::: prova Togli la radice dal numero sotto: $\frac 4{\sqrt 2}$.
Moltiplica sopra e sotto per $\sqrt 2$. Sopra viene $4\sqrt 2$, sotto viene $\sqrt 2 \cdot \sqrt 2 = 2$. Quindi $\frac{4\sqrt 2}2 = 2\sqrt 2$.
:::

> [!RICORDA]
> - Un quadrato perfetto esce dalla radice: $\sqrt{12} = 2\sqrt 3$.
> - Si sommano solo radici uguali.
> - Per togliere una radice dal numero sotto, moltiplica sopra e sotto per quella radice.
> - La radice di una somma **non** è la somma delle radici.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\{\ \}$ | «l'insieme di…» | le graffe racchiudono gli elementi di un insieme | $\{1, 3, 5\}$ |
| $\in$ | «appartiene a» | sta dentro l'insieme | $3 \in \{1, 3, 5\}$ |
| $\notin$ | «non appartiene a» | non sta dentro l'insieme | $2 \notin \{1, 3, 5\}$ |
| $\subset$ | «è contenuto in» | tutti gli elementi del primo stanno nel secondo | $\{1, 5\} \subset \{1, 3, 5\}$ |
| $\subsetneq$ | «è contenuto strettamente in» | è contenuto, e il secondo ha qualcosa in più | $\N \subsetneq \Z$ |
| $\emptyset$ | «insieme vuoto» | l'insieme senza elementi | |
| $\dots$ | «e avanti così» | gli elementi continuano con la stessa regola | $\{0, 1, 2, \dots\}$ |
| $\N$ | «enne» | i numeri naturali | $0, 1, 2$ |
| $\Z$ | «zeta» | i numeri interi | $-2, 0, 7$ |
| $\Q$ | «cu» | i numeri razionali, cioè le frazioni | $\frac 12, -\frac 34$ |
| $\R$ | «erre» | i numeri reali | $\sqrt 2, \pi$ |
| $\C$ | «ci» | i numeri complessi (lezione L02) | |
| $\cdot$ | «per» | il segno della moltiplicazione | $3 \cdot 4 = 12$ |
| $\neq$ | «diverso da» | non uguale | $b \neq 0$ |
| $<$, $>$ | «minore di», «maggiore di» | più a sinistra, più a destra sulla retta dei numeri | $-5 < -2$ |
| $\le$, $\ge$ | «minore o uguale», «maggiore o uguale» | come sopra, ma è permesso anche l'uguale | $2 \le 2$ |
| $\mid$ | «tale che» | introduce la condizione da rispettare | $\{x \in \R \mid x > 0\}$ |
| $(a, b)$ | «intervallo aperto da $a$ a $b$» | i numeri reali tra $a$ e $b$, estremi esclusi | $(1, 2)$ |
| $[a, b]$ | «intervallo chiuso da $a$ a $b$» | i numeri reali tra $a$ e $b$, estremi inclusi | $[1, 2]$ |
| $a_n$ | «a con enne» | il termine di posto $n$ di una successione | $a_2 = 3{,}14$ |
| $\lvert x \rvert$ | «valore assoluto di $x$» | il numero senza il segno meno | $\lvert -2 \rvert = 2$ |
| $a^2$ | «$a$ al quadrato» | $a$ per $a$ | $3^2 = 9$ |
| $\sqrt a$ | «radice di $a$» | il numero positivo che al quadrato dà $a$ | $\sqrt 9 = 3$ |
| $-a$ | «meno $a$», «l'opposto di $a$» | il numero che sommato ad $a$ dà 0 | $-7$ |
| $a^{-1}$ | «$a$ alla meno uno», «l'inverso di $a$» | il numero che moltiplicato per $a$ dà 1 | $4^{-1} = \frac 14$ |
| $\forall$ | «per ogni» | vale qualunque elemento tu scelga | $\forall a \in \R$ |
| $\exists$ | «esiste» | ce n'è almeno uno | $\exists x \in \Z$ |

## Verso l'esame

La prova di **Algebra lineare e Geometria** (parte 2 di MDAG) è scritta ed è la stessa per i canali A, B e C. Al 30/09/2026 le regole del 2026/27 non sono ancora pubblicate: su Moodle c'è scritto «informazioni seguono». Il riferimento sono quindi le regole del 2025/26, confermate dai testi degli appelli.

**Com'è fatta la prova**

- **10 domande a risposta multipla.** Ognuna ha 5 risposte, da (a) a (e), e **una sola è giusta**. Ogni domanda vale 1 punto.
- **2 problemi a risposta aperta**, divisi in più domande. Ognuno vale 11 punti. Per avere punti parziali bisogna scrivere i passaggi.
- **Sbarramento.** I problemi vengono corretti solo a chi fa **almeno 6 punti su 10** nel quiz.
- **Durata:** 2 ore. Il massimo è 32 punti, la sufficienza è 18.
- **Materiale ammesso:** solo un foglio protocollo, oppure due fogli A4 (4 facciate), **scritti a mano**, con formule, appunti ed esercizi. **Niente calcolatrice** e niente libri.
- Nel quiz le risposte si segnano con una **X**, non con un cerchio.

| Appello 2026/27 | Iscrizioni su MyUniTo | Ora e aule |
|---|---|---|
| ven 22/01/2027 | 02/01 – 15/01/2027 | 14:00, aule A, B, C, D, F |
| ven 05/02/2027 | 16/01 – 29/01/2027 | 14:00, aule A, B, C, D, F |

Il voto finale di MDAG è la media delle due prove, Matematica Discreta e Algebra lineare. Si possono sostenere anche in appelli diversi. Attenzione: ripresentarsi a una prova già superata **annulla** il voto precedente, anche se va peggio. Dettagli e fonti nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa serve di questa lezione**

1. **Campi.** Dalla lezione L05 ogni spazio vettoriale è costruito «su un campo». Saper dire perché $\Z$ non è un campo è una tipica domanda di teoria del quiz.
2. **Notazioni.** Insiemi, intervalli, punti e vettori con le parentesi giuste. Nei problemi le risposte si scrivono con questa notazione.
3. **Conti a mano.** Frazioni e radici compaiono in quasi tutte le domande su lunghezze, angoli e distanze. Allenati adesso con gli esercizi 5 e 10.
4. **Ragionare per assurdo.** Il quiz non chiede dimostrazioni, ma questo modo di ragionare torna spesso nelle dispense.

> [!ESAME] Il foglio da 4 facciate
> È l'unico materiale ammesso, quindi conviene costruirlo lezione per lezione. Da questa lezione bastano due cose: la tabella delle regole sulle radici e la riga «campo = 9 regole; $\N$ e $\Z$ non sono campi».

## Quiz

```quiz
D: Quale di questi insiemi, con la somma e il prodotto usuali, **non** è un campo?
- $\Q$
- $\R$
+ $\Z$
- $\C$
- Sono tutti campi.
= In un campo ogni numero diverso da zero deve avere l'inverso dentro l'insieme (regola 8). In $\Z$ l'inverso di $2$ sarebbe $\frac 12$, che non è un intero. Quindi $\Z$ non è un campo. $\Q$, $\R$ e $\C$ invece lo sono.

D: Quale di questi numeri è irrazionale?
- $0{,}125$
- $\frac{22}{7}$
- $\sqrt 9$
+ $\sqrt{12}$
- $0{,}\overline{3}$
= $\sqrt{12} = 2\sqrt 3$, e $\sqrt 3$ è irrazionale perché 3 non è un quadrato perfetto. Gli altri sono tutti frazioni: $0{,}125 = \frac 18$, $\sqrt 9 = 3$, $0{,}\overline 3 = \frac 13$. Anche $\frac{22}7$ è una frazione: è solo un numero vicino a $\pi$, non è $\pi$.

D: Quale affermazione è vera?
+ $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$
- $\Q \subsetneq \Z$
- $\R \subsetneq \Q$
- $\sqrt 2 \in \Q$
- $\Z = \N$
= Ogni famiglia sta dentro la successiva e la successiva ha qualcosa in più: $-1$ è un intero ma non un naturale, $\frac 12$ è un razionale ma non un intero, $\sqrt 2$ è un reale ma non un razionale.

D: L'insieme $\{x \in \R \mid 1 \le x < 2\}$ è:
- $(1, 2)$
- $[1, 2]$
+ $[1, 2)$
- $\{1, 2\}$
- $(1, 2]$
= Il simbolo $\le$ include l'1: parentesi quadra a sinistra. Il simbolo $<$ esclude il 2: parentesi tonda a destra. Invece $\{1, 2\}$ è l'insieme con i soli due numeri 1 e 2.

D: Il numero $0{,}999\ldots$ (con infinite cifre 9) è uguale a:
+ $1$
- un numero appena più piccolo di $1$
- $0{,}9$
- $\frac 9{10}$
- non è un numero reale
= Si parte da $\frac 13 = 0{,}333\ldots$ e si moltiplicano per 3 tutti e due i lati: a sinistra viene $1$, a destra $0{,}999\ldots$ Sono due scritture dello stesso numero, come $5{,}973\overline 9$ e $5{,}974$ nelle dispense.

D: Nella dimostrazione che $\sqrt 2 \notin \Q$, a quale assurdo si arriva?
+ $a$ e $b$ sono entrambi pari, mentre la frazione $\frac ab$ era ridotta ai minimi termini.
- $\sqrt 2 = 2$.
- $b = 0$.
- $a^2$ è dispari.
- $2$ non è un numero primo.
= Da $a^2 = 2b^2$ si ricava che $a$ è pari. Sostituendo $a = 2k$ si ricava che anche $b$ è pari. Allora sopra e sotto si dividono per 2, ma la frazione era stata scelta ridotta: le due cose non possono essere vere insieme.

D: Quale proprietà manca a $\Z$ per essere un campo?
+ L'esistenza dell'inverso moltiplicativo di ogni elemento non nullo.
- L'esistenza dell'opposto.
- La proprietà commutativa del prodotto.
- La proprietà distributiva.
- L'esistenza dell'elemento neutro della somma.
= «Inverso moltiplicativo» è l'inverso per il prodotto, quello della regola 8. In $\Z$ ogni numero ha l'opposto, e le altre regole valgono tutte. Ma solo $1$ e $-1$ hanno un inverso intero: per esempio l'inverso di $3$ sarebbe $\frac 13$.

D: Quanto vale $\sqrt 8 + \sqrt{18}$?
+ $5\sqrt 2$
- $\sqrt{26}$
- $2\sqrt 2$
- $13$
- $6\sqrt 3$
= Si porta fuori un quadrato da ogni radice: $\sqrt 8 = \sqrt{4 \cdot 2} = 2\sqrt 2$ e $\sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt 2$. Ora le radici sono uguali e si sommano: $2\sqrt 2 + 3\sqrt 2 = 5\sqrt 2$. La risposta $\sqrt{26}$ è la trappola: la radice di una somma non è la somma delle radici.

D: Quanto vale $a_2$ nella successione $a_n = \left(1 + \frac 1n\right)^n$? Scrivi una frazione o un decimale.
N: 9/4
= Al posto di $n$ si mette 2. Dentro la parentesi: $1 + \frac 12 = \frac 32$. Poi il quadrato: $\frac 32 \cdot \frac 32 = \frac 94 = 2{,}25$.
```

## Esercizi

::: esercizio base Vero o falso con i simboli
Di' se ogni scrittura è vera o falsa: (a) $-3 \in \N$; (b) $\frac 12 \in \Q$; (c) $\N \subset \Z$; (d) $\sqrt 9 \in \N$; (e) $\{2, 4\} \subset \{1, 2, 3\}$.
::: soluzione
(a) **Falsa.** $-3$ ha il segno meno, e i naturali sono $0, 1, 2, \dots$ Quindi $-3 \notin \N$.

(b) **Vera.** $\frac 12$ è una frazione con il numero sotto diverso da zero.

(c) **Vera.** Ogni numero naturale è anche un intero.

(d) **Vera.** Prima si calcola: $\sqrt 9 = 3$. E 3 è un numero naturale.

(e) **Falsa.** Il 2 sta in $\{1, 2, 3\}$, ma il 4 no. Basta un elemento fuori.
:::

::: esercizio base Opposti e inversi
Per ogni numero scrivi l'opposto e l'inverso: (a) $3$; (b) $-\frac 12$; (c) $\frac 54$.
::: soluzione
L'**opposto** è il numero che sommato dà 0: si cambia il segno. L'**inverso** è il numero che moltiplicato dà 1: in una frazione si scambiano sopra e sotto.

(a) Opposto di $3$: $-3$, perché $3 + (-3) = 0$. Inverso: $\frac 13$, perché $3 \cdot \frac 13 = 1$.

(b) Opposto di $-\frac 12$: $\frac 12$, perché $-\frac 12 + \frac 12 = 0$. Inverso: $-2$, perché $-\frac 12 \cdot (-2) = \frac 22 = 1$.

(c) Opposto di $\frac 54$: $-\frac 54$. Inverso: $\frac 45$, perché $\frac 54 \cdot \frac 45 = \frac{20}{20} = 1$.
:::

::: esercizio base Dal più piccolo al più grande
Metti in ordine dal più piccolo al più grande: $2$, $-3$, $\frac 12$, $0$, $-\frac 13$.
::: soluzione
Pensa alla retta dei numeri: più a sinistra vuol dire più piccolo.

1. I negativi stanno a sinistra dello zero. Sono $-3$ e $-\frac 13$. Tra i due, $-3$ è più a sinistra: $-3 < -\frac 13$.
2. Poi viene lo $0$.
3. I positivi stanno a destra dello zero. Sono $\frac 12$ e $2$, e $\frac 12 < 2$.

Risultato: $-3 < -\frac 13 < 0 < \frac 12 < 2$.

Controllo di un passaggio con la regola precisa: $-\frac 13 - (-3) = -\frac 13 + 3 = \frac 83$, che è positivo. Quindi $-\frac 13 > -3$.
:::

::: esercizio base Dove abita ogni numero
Per ciascun numero trova l'insieme **più piccolo** tra $\N$, $\Z$, $\Q$, $\R$ che lo contiene:
$$-4, \qquad 0, \qquad \frac 72, \qquad \sqrt{16}, \qquad \sqrt 7, \qquad 0{,}\overline{12}, \qquad \pi, \qquad -\frac{\sqrt{25}}{5}.$$
::: soluzione
La regola d'oro: **prima semplifica, poi decidi**.

| Numero | Semplificato | Insieme più piccolo | Perché |
|---|---|---|---|
| $-4$ | $-4$ | $\Z$ | è negativo, quindi non sta in $\N$ |
| $0$ | $0$ | $\N$ | nel corso lo zero è un naturale |
| $\frac 72$ | $3{,}5$ | $\Q$ | è una frazione che non è un intero |
| $\sqrt{16}$ | $4$ | $\N$ | $4 \cdot 4 = 16$ |
| $\sqrt 7$ | non si semplifica | $\R$ | 7 non è un quadrato perfetto: irrazionale |
| $0{,}\overline{12}$ | $\frac 4{33}$ | $\Q$ | le cifre si ripetono, quindi è una frazione (esercizio 5) |
| $\pi$ | non si semplifica | $\R$ | irrazionale |
| $-\frac{\sqrt{25}}5$ | $-\frac 55 = -1$ | $\Z$ | $\sqrt{25} = 5$, poi 5 diviso 5 fa 1 |

$\sqrt{16}$ sembra un numero «difficile», ma è 4.
:::

::: esercizio base Da numero periodico a frazione
Scrivi come frazione: (a) $0{,}\overline 7$; (b) $2{,}\overline 3$; (c) $0{,}\overline{12}$.
::: soluzione
Il trucco è sempre lo stesso. Chiama $x$ il numero. Moltiplicalo per 10, così la virgola si sposta di un posto. Poi sottrai $x$: le cifre dopo la virgola sono identiche e si cancellano.

(a) $x = 0{,}777\ldots$

1. Moltiplico per 10: $10x = 7{,}777\ldots$
2. Sottraggo: $10x - x = 7{,}777\ldots - 0{,}777\ldots = 7$.
3. A sinistra $10x - x$ fa $9x$. Quindi $9x = 7$.
4. Divido per 9: $x = \frac 79$.

(b) $x = 2{,}333\ldots$

1. Moltiplico per 10: $10x = 23{,}333\ldots$
2. Sottraggo: $9x = 23{,}333\ldots - 2{,}333\ldots = 21$.
3. Divido per 9: $x = \frac{21}9$. Semplifico per 3: $x = \frac 73$.
4. Controllo: 7 diviso 3 fa $2{,}333\ldots$ ✓

(c) $x = 0{,}1212\ldots$ Qui il periodo ha **due** cifre, quindi moltiplico per 100: la virgola si sposta di due posti.

1. $100x = 12{,}1212\ldots$
2. Sottraggo: $100x - x = 99x = 12$.
3. Divido per 99: $x = \frac{12}{99}$. Semplifico per 3: $x = \frac 4{33}$.
:::

::: esercizio base $0{,}\overline 9 = 1$ con il metodo dell'esercizio 5
Usa lo stesso metodo per mostrare che $0{,}999\ldots = 1$. Poi mostra che $5{,}973\overline 9 = 5{,}974$.
::: soluzione
**Prima parte.** Chiamo $x = 0{,}999\ldots$

1. Moltiplico per 10: $10x = 9{,}999\ldots$
2. Sottraggo: $10x - x = 9{,}999\ldots - 0{,}999\ldots = 9$. Quindi $9x = 9$.
3. Divido per 9: $x = 1$.

**Seconda parte.** Spezzo il numero in due pezzi: $5{,}973\overline 9 = 5{,}973 + 0{,}000\overline 9$.

Il secondo pezzo è $0{,}\overline 9$ con la virgola spostata di tre posti, cioè $0{,}\overline 9$ diviso 1000. Siccome $0{,}\overline 9 = 1$, il secondo pezzo vale $\frac 1{1000} = 0{,}001$.

Quindi $5{,}973\overline 9 = 5{,}973 + 0{,}001 = 5{,}974$.
:::

::: esercizio base Intervalli
(a) Scrivi con le parentesi l'insieme $\{x \in \R \mid -1 < x \le 3\}$. (b) Scrivi con la condizione l'intervallo $[0, 5)$. (c) Quale intervallo è $\{x \in \R \mid x^2 < 4\}$? (d) Quanti elementi hanno $\{0, 5\}$ e $(0, 5)$?
::: soluzione
(a) $(-1, 3]$. Tonda a sinistra perché $-1$ è escluso ($<$). Quadra a destra perché $3$ è incluso ($\le$).

(b) $\{x \in \R \mid 0 \le x < 5\}$. La quadra diventa $\le$, la tonda diventa $<$.

(c) Cerco i numeri che al quadrato danno meno di 4. Provo qualche numero.

- $x = 1$: $1^2 = 1$, meno di 4. Va bene.
- $x = 1{,}9$: $1{,}9^2 = 3{,}61$, meno di 4. Va bene.
- $x = 2$: $2^2 = 4$, che non è meno di 4. Non va bene.
- $x = -1{,}9$: $(-1{,}9)^2 = 3{,}61$. Va bene: il quadrato di un negativo è positivo.
- $x = -2$: $(-2)^2 = 4$. Non va bene.

Vanno bene i numeri tra $-2$ e $2$, senza gli estremi: l'intervallo è $(-2, 2)$.

(d) $\{0, 5\}$ ha **2** elementi. $(0, 5)$ ne ha **infiniti**.
:::

::: esercizio base I primi termini della successione di $e$
Calcola come frazioni $a_1$, $a_2$, $a_3$, $a_4$ di $a_n = \left(1 + \frac 1n\right)^n$ e controlla che crescono.
::: soluzione
Ogni volta metto un numero al posto di $n$: prima calcolo la parentesi, poi la potenza.

- $n = 1$: la parentesi è $1 + 1 = 2$. Poi $2^1 = 2$. Quindi $a_1 = 2$.
- $n = 2$: la parentesi è $1 + \frac 12 = \frac 32$. Poi $\left(\frac 32\right)^2 = \frac 94$. Quindi $a_2 = 2{,}25$.
- $n = 3$: la parentesi è $1 + \frac 13 = \frac 43$. Poi $\left(\frac 43\right)^3 = \frac{64}{27}$. Quindi $a_3$ è circa $2{,}370$.
- $n = 4$: la parentesi è $1 + \frac 14 = \frac 54$. Poi $\left(\frac 54\right)^4 = \frac{625}{256}$. Quindi $a_4$ è circa $2{,}441$.

Crescono: $2 < 2{,}25 < 2{,}370 < 2{,}441$. E restano sotto $e$, che vale circa $2{,}718$ (guarda il grafico nella sezione sui numeri reali). Ogni termine è una frazione, ma il numero a cui si avvicinano non lo è.
:::

::: esercizio medio Campo o no?
Per ciascun insieme, con la somma e il prodotto usuali, di' se è un campo. Se non lo è, indica **una** proprietà che fallisce, con un esempio: (a) $\N$; (b) $\Z$; (c) i numeri reali positivi $\{x \in \R \mid x > 0\}$; (d) $\Q$.
::: soluzione
(a) $\N$: **no**. Fallisce la regola 4: il numero $3$ non ha opposto in $\N$, perché $-3 \notin \N$.

(b) $\Z$: **no**. Fallisce la regola 8: il numero $2$ non ha inverso in $\Z$, perché $\frac 12 \notin \Z$.

(c) Reali positivi: **no**. Fallisce la regola 1: lo $0$ non è positivo, quindi nell'insieme manca l'elemento neutro della somma.

(d) $\Q$: **sì**. Valgono tutte e nove le regole. L'opposto di $\frac ab$ è $\frac{-a}b$. Se $a \neq 0$, l'inverso di $\frac ab$ è $\frac ba$, che è ancora una frazione.
:::

::: esercizio medio Conti senza calcolatrice
Semplifica: (a) $\sqrt{50}$; (b) $\sqrt{12} \cdot \sqrt 3$; (c) $\frac 6{\sqrt 3}$; (d) $(1 + \sqrt 2)^2$; (e) $\frac 1{\sqrt 2 - 1}$; (f) $\frac{\sqrt 3}3$ e $\frac 1{\sqrt 3}$: sono uguali?
::: soluzione
(a) Cerco un quadrato perfetto che divide 50: $50 = 25 \cdot 2$. Quindi $\sqrt{50} = \sqrt{25} \cdot \sqrt 2 = 5\sqrt 2$.

(b) Radice per radice: $\sqrt{12} \cdot \sqrt 3 = \sqrt{12 \cdot 3} = \sqrt{36} = 6$.

(c) Moltiplico sopra e sotto per $\sqrt 3$. Sopra: $6\sqrt 3$. Sotto: $\sqrt 3 \cdot \sqrt 3 = 3$. Quindi $\frac{6\sqrt 3}3 = 2\sqrt 3$.

(d) Il quadrato è il numero per sé stesso: $(1 + \sqrt 2) \cdot (1 + \sqrt 2)$. Moltiplico ogni pezzo del primo per ogni pezzo del secondo.

- $1 \cdot 1 = 1$
- $1 \cdot \sqrt 2 = \sqrt 2$
- $\sqrt 2 \cdot 1 = \sqrt 2$
- $\sqrt 2 \cdot \sqrt 2 = 2$

Sommo i quattro pezzi: $1 + \sqrt 2 + \sqrt 2 + 2 = 3 + 2\sqrt 2$.

(e) Moltiplico sopra e sotto per $\sqrt 2 + 1$:
$$\frac 1{\sqrt 2 - 1} \cdot \frac{\sqrt 2 + 1}{\sqrt 2 + 1} = \frac{\sqrt 2 + 1}{(\sqrt 2)^2 - 1^2} = \frac{\sqrt 2 + 1}{2 - 1} = \sqrt 2 + 1.$$

(f) Sì. Parto da $\frac 1{\sqrt 3}$ e moltiplico sopra e sotto per $\sqrt 3$: sopra viene $\sqrt 3$, sotto viene $3$. Quindi $\frac 1{\sqrt 3} = \frac{\sqrt 3}3$. Nel quiz d'esame lo stesso numero può comparire in una delle due forme.
:::

::: esercizio medio $\sqrt 3$ non è razionale
Dimostra per assurdo che $\sqrt 3 \notin \Q$. Suggerimento: serve il fatto «se $a^2$ è un multiplo di 3, anche $a$ lo è». Dimostra anche questo.
::: soluzione
**Il fatto sui multipli di 3.** Dividendo un intero per 3 il resto può essere 0, 1 oppure 2. Quindi ogni intero $a$ si scrive in uno di questi tre modi, dove $k$ è un intero: $a = 3k$, oppure $a = 3k + 1$, oppure $a = 3k + 2$.

Guardo il quadrato negli ultimi due casi, quelli in cui $a$ non è un multiplo di 3.

- $(3k + 1)^2 = 9k^2 + 6k + 1 = 3 \cdot (3k^2 + 2k) + 1$. È un multiplo di 3, più 1.
- $(3k + 2)^2 = 9k^2 + 12k + 4 = 3 \cdot (3k^2 + 4k + 1) + 1$. Anche questo è un multiplo di 3, più 1.

In tutti e due i casi $a^2$ non è un multiplo di 3. Quindi, se $a^2$ è un multiplo di 3, resta solo il primo caso: $a$ è un multiplo di 3.

**La dimostrazione**, con la stessa ricetta usata per $\sqrt 2$.

1. Faccio finta che $\sqrt 3 = \frac ab$, con la frazione ridotta ai minimi termini.
2. Elevo al quadrato e tolgo la frazione: $a^2 = 3b^2$. Quindi $a^2$ è un multiplo di 3.
3. Per il fatto di prima, anche $a$ è un multiplo di 3: $a = 3k$.
4. Sostituisco: $(3k)^2 = 9k^2$, quindi $9k^2 = 3b^2$. Divido per 3: $b^2 = 3k^2$.
5. Allora $b^2$ è un multiplo di 3, e per il fatto di prima anche $b$ lo è.
6. $a$ e $b$ si dividono tutti e due per 3. Ma la frazione era ridotta: assurdo. Quindi $\sqrt 3 \notin \Q$.
:::

::: esercizio medio Razionale più irrazionale
(a) Dimostra che se $q \in \Q$ e $x \notin \Q$, allora $q + x \notin \Q$. (b) Trova due numeri irrazionali la cui somma è razionale, e due il cui prodotto è razionale.
::: soluzione
(a) In parole: una frazione più un numero che non è una frazione non dà mai una frazione. Si dimostra per assurdo.

1. Faccio finta che $q + x$ sia una frazione, e la chiamo $r$: $q + x = r$.
2. Tolgo $q$ da tutti e due i lati: $x = r - q$.
3. La differenza di due frazioni è una frazione. Infatti $\frac ab - \frac cd = \frac{ad - bc}{bd}$: sopra e sotto ci sono numeri interi.
4. Quindi $x$ è una frazione. Ma avevamo detto che $x$ non lo è: assurdo.

Quindi $q + x$ non è una frazione.

(b) Somma: $\sqrt 2 + (-\sqrt 2) = 0$. Prodotto: $\sqrt 2 \cdot \sqrt 2 = 2$, oppure $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$.

Quindi irrazionale più irrazionale, e irrazionale per irrazionale, **possono** dare un razionale. Non c'è una regola fissa.
:::

::: esercizio difficile $\sqrt 2 + \sqrt 3$ è irrazionale
(a) Dimostra che $\sqrt 6 \notin \Q$. (b) Usalo per dimostrare che $\sqrt 2 + \sqrt 3 \notin \Q$.
::: soluzione
(a) Stessa ricetta.

1. Faccio finta che $\sqrt 6 = \frac ab$, frazione ridotta.
2. Elevo al quadrato e tolgo la frazione: $a^2 = 6b^2$. Siccome $6b^2 = 2 \cdot 3b^2$, il numero $a^2$ è pari. Quindi $a$ è pari: $a = 2k$.
3. Sostituisco: $4k^2 = 6b^2$. Divido per 2: $2k^2 = 3b^2$.
4. A sinistra c'è un numero pari, quindi anche $3b^2$ è pari. Il 3 è dispari, e dispari per dispari fa dispari: allora $b^2$ deve essere pari. Quindi $b$ è pari.
5. $a$ e $b$ sono tutti e due pari, ma la frazione era ridotta: assurdo.

(b) Di nuovo per assurdo.

1. Faccio finta che $\sqrt 2 + \sqrt 3$ sia una frazione, e la chiamo $q$.
2. Elevo al quadrato. Come nell'esercizio 10 (d), moltiplico ogni pezzo per ogni pezzo:
   $$q^2 = (\sqrt 2)^2 + 2 \cdot \sqrt 2 \cdot \sqrt 3 + (\sqrt 3)^2 = 2 + 2\sqrt 6 + 3 = 5 + 2\sqrt 6.$$
3. Isolo $\sqrt 6$. Tolgo 5: $q^2 - 5 = 2\sqrt 6$. Divido per 2: $\sqrt 6 = \frac{q^2 - 5}2$.
4. Se $q$ è una frazione, anche $\frac{q^2 - 5}2$ lo è. Quindi $\sqrt 6$ sarebbe una frazione.
5. Ma per il punto (a) non lo è: assurdo. Quindi $\sqrt 2 + \sqrt 3 \notin \Q$.
:::

## Domande di ripasso

::: domanda Che cosa contengono $\N$, $\Z$ e $\Q$? Lo zero sta in $\N$?
$\N$ contiene i numeri per contare: $0, 1, 2, \dots$ Lo **zero c'è**, nella convenzione del corso. $\Z$ aggiunge i numeri negativi. $\Q$ contiene tutte le frazioni $\frac ab$ con $a$ e $b$ interi e $b$ diverso da zero.
:::

::: domanda Perché si passa da $\Q$ a $\R$?
Perché tra le frazioni mancano dei numeri. Per esempio nessuna frazione al quadrato dà 2. E ci sono liste di frazioni che si avvicinano sempre di più a qualcosa che non è una frazione, come la lista di $\pi$. I numeri reali riempiono questi «buchi».
:::

::: domanda Che cos'è una successione di Cauchy, a parole?
Una lista infinita di numeri in cui, da un certo punto in poi, i termini sono vicini tra loro quanto si vuole. Scegli una tolleranza, anche piccolissima: c'è sempre un posto della lista da cui in poi due termini qualsiasi distano meno di quella tolleranza.
:::

::: domanda Come si definiscono i numeri reali con le successioni di Cauchy?
Un numero reale è una lista di frazioni che si stringe (una successione di Cauchy). Due liste che si avvicinano alla stessa cosa contano come lo stesso numero. Se la lista si avvicina a una frazione, rappresenta quella frazione. Altrimenti definisce un numero nuovo, irrazionale.
:::

::: domanda Che cosa vuol dire che $\R$ è completo?
Che non ha buchi. Ogni lista di numeri reali che si stringe si avvicina a un numero reale. Rifacendo la costruzione a partire da $\R$ non si trova nessun numero nuovo.
:::

::: domanda Ripeti la dimostrazione che $\sqrt 2$ non è razionale.
Per assurdo $\sqrt 2 = \frac ab$, frazione ridotta. Al quadrato: $a^2 = 2b^2$. Quindi $a^2$ è pari e anche $a$ è pari: $a = 2k$. Sostituendo, $4k^2 = 2b^2$, cioè $b^2 = 2k^2$. Quindi anche $b$ è pari. Allora $a$ e $b$ si dividono tutti e due per 2, ma la frazione era ridotta: assurdo.
:::

::: domanda Che cos'è un campo? Fai un esempio e un controesempio.
Un insieme con una somma e un prodotto che rispettano le nove regole: gli elementi neutri 0 e 1, gli opposti, gli inversi dei numeri diversi da zero, le proprietà commutativa, associativa e distributiva. Esempi: $\Q$, $\R$, $\C$. Controesempio: $\Z$, perché 2 non ha inverso tra gli interi.
:::

::: domanda Perché lo zero non ha inverso?
L'inverso di 0 dovrebbe essere un numero che, moltiplicato per 0, dà 1. Ma ogni numero moltiplicato per 0 dà 0. Per questo la regola 8 chiede l'inverso solo per i numeri diversi da zero.
:::

::: domanda Come si definisce $a > b$?
$a > b$ quando $a - b$ è positivo. Quindi basta sapere quali numeri sono positivi. In $\Z$ sono $1, 2, 3, \dots$ In $\Q$ sono le frazioni in cui sopra e sotto hanno lo stesso segno.
:::

::: domanda Che differenza c'è tra $\{1, 2\}$, $(1, 2)$ e $[1, 2]$?
$\{1, 2\}$ è l'insieme con i due elementi 1 e 2. $(1, 2)$ è l'intervallo aperto: tutti i numeri reali tra 1 e 2, estremi esclusi. Può anche essere un punto o un vettore, a seconda del contesto. $[1, 2]$ è l'intervallo chiuso: estremi inclusi.
:::

::: domanda Quali sono le nove lettere greche da sapere?
$\alpha$ (alfa), $\varepsilon$ (epsilon), $\sigma$ (sigma), $\vartheta$ (theta), $\phi$ (fi), $\pi$ (pi greco), $\lambda$ (lambda), $\mu$ (mi), $\varrho$ (ro).
:::

::: domanda Come si toglie una radice dal numero sotto di una frazione?
Si moltiplicano sopra e sotto per la stessa radice: $\frac 6{\sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$. Se sotto c'è una differenza come $\sqrt 2 - 1$, si moltiplica sopra e sotto per $\sqrt 2 + 1$: sotto viene $(\sqrt 2)^2 - 1^2 = 1$.
:::

## Glossario

```glossario
Insieme | Un sacchetto di oggetti, che si chiamano elementi. Si scrive con le graffe: $\{1, 3, 5\}$. Ordine e ripetizioni non contano.
Appartenenza ($\in$) | $3 \in A$ vuol dire che 3 è un elemento di $A$. Il contrario si scrive $\notin$.
Sottoinsieme ($\subset$) | $B \subset A$ vuol dire che ogni elemento di $B$ sta anche in $A$. Con $\subsetneq$ si aggiunge che $A$ ha qualcosa in più.
Numeri naturali $\N$ | I numeri per contare: $0, 1, 2, 3, \dots$ Lo zero è compreso.
Numeri interi $\Z$ | I naturali più i numeri negativi: $\dots, -2, -1, 0, 1, 2, \dots$
Numeri razionali $\Q$ | I numeri che si scrivono come frazione di due interi, con il numero sotto diverso da zero. Con la virgola finiscono o si ripetono.
Numeri reali $\R$ | I numeri che possono avere infinite cifre dopo la virgola. In modo preciso: liste di frazioni che si avvicinano sempre di più tra loro.
Numero irrazionale | Un numero reale che non è una frazione, come $\sqrt 2$, $\pi$, $e$.
Successione | Una lista infinita di numeri, uno dopo l'altro: $a_1, a_2, a_3, \dots$
Successione di Cauchy | Una successione in cui, da un certo posto in poi, i termini distano tra loro meno di qualsiasi tolleranza scelta.
Completezza | La proprietà di $\R$ di non avere buchi: ogni successione di Cauchy si avvicina a un numero reale. $\Q$ non è completo.
Dimostrazione per assurdo | Si fa finta che sia vero il contrario di quello che si vuole dimostrare e si arriva a una cosa impossibile.
Operazione binaria | Una regola che prende due numeri e ne restituisce uno, come la somma e il prodotto.
Elemento neutro | Il numero che non cambia niente: lo 0 per la somma, l'1 per il prodotto.
Opposto | L'opposto di $a$ è $-a$: sommati fanno 0. Per esempio l'opposto di 7 è $-7$.
Inverso | L'inverso di $a$ è $a^{-1}$, cioè $\frac 1a$: moltiplicati fanno 1. Lo zero non ha inverso.
Campo | Un insieme con somma e prodotto che rispettano le nove regole della Proposizione 1.5. $\Q$, $\R$ e $\C$ sì; $\N$ e $\Z$ no.
Ordine | $a > b$ quando $a - b$ è positivo. $\R$ è ordinato, $\C$ no.
Intervallo | Un pezzo della retta dei numeri. $(a, b)$ esclude gli estremi, $[a, b]$ li include.
Quantificatori | I simboli $\forall$ ed $\exists$: si leggono «per ogni» ed «esiste».
```

## Checklist

```checklist
- So scrivere $\N$, $\Z$, $\Q$ con le parentesi giuste e so che in questo corso $0 \in \N$.
- So spiegare con una domanda perché serve ogni famiglia nuova di numeri.
- So trasformare un numero periodico in frazione e spiegare perché $0{,}\overline 9 = 1$.
- So spiegare a parole che cos'è una successione di Cauchy e come definisce un numero reale.
- So dire che cosa vuol dire che $\R$ è completo e $\Q$ no.
- So rifare da solo la dimostrazione che $\sqrt 2$ non è razionale, spiegando ogni passo.
- So elencare le nove regole di un campo e spiegare perché $\N$ e $\Z$ non sono campi.
- So quando $a > b$ e quali sono i numeri positivi in $\Z$ e in $\Q$.
- Non confondo $\{1, 2\}$, $(1, 2)$ e $[1, 2]$, e so leggere $\forall$, $\exists$, $\Longrightarrow$, $\Longleftrightarrow$.
- So semplificare le radici e toglierle dal numero sotto di una frazione, senza calcolatrice.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 1 «Numeri reali», pp. 2–5: le sezioni 1.A–1.E sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizione 1.1, Esempi 1.2 e 1.3, Proposizioni 1.4 e 1.5).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.1 (insiemi numerici, dimostrazione per assurdo, sottoinsiemi, notazione insiemistica, quantificatori), §1.5 (strutture algebriche) e complemento 1.II (costruzione dei numeri reali).
- **Pagina Moodle MDAG2 2026/27** ([id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)): calendario, dispense complete L01–L26, capitoli del libro trattati (1–5, 7–9, 11).
- **Esame**: regole 2025/26 e testi degli appelli del 15/01/2026 e del 07/09/2026 (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); date degli appelli 2026/27 dalla bacheca Esse3.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi sono di questi appunti. Le parti **«Oltre le dispense»** (numeri periodici, lettura dei simboli, conti con le radici) collegano la lezione al resto del corso e all'esame.
