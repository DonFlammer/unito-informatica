---
corso: MDAG
modulo: AG
lezione: L01
titolo: Numeri reali
data: 2026-10-01
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L01
descrizione: >-
  Appunti della lezione L01 di Algebra lineare e Geometria (MDAG, parte 2): insiemi numerici, costruzione dei numeri
  reali con le successioni di Cauchy, irrazionalità di √2, campi, ordine, notazioni e conti con le radici, con una
  domanda dell'appello del 07/09/2026, quiz ed esercizi svolti.
lede: >-
  I quattro insiemi di numeri del corso, le nove proprietà che fanno di un insieme un campo e le notazioni che le
  dispense usano da qui in poi. In più: come si leggono i simboli e come si fanno i conti con le radici senza
  calcolatrice, che all'esame servono in quasi ogni domanda.
materiale: dispense
scheda:
  Dispense: lezione 1 · pp. 2–5
  Libro: Martelli, §1.1 e complemento 1.II
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 1 «Numeri reali»; B. Martelli, Geometria e algebra lineare, §1.1, §1.5 e complemento 1.II;
  appello di Algebra lineare del 07/09/2026, domanda 7
appunti_html: appunti/MDAG/L01_numeri_reali.html
genera_html: true
---

## In breve

- Le dispense partono dai quattro insiemi di numeri del corso, uno dentro l'altro: naturali, interi, razionali e reali. Ogni insieme nasce per risolvere un'equazione che nel precedente non ha soluzione.
- I razionali sono i numeri con uno sviluppo decimale finito o periodico. I reali comprendono anche quelli con infinite cifre non periodiche, come $\pi$; in modo preciso un reale è una successione di Cauchy di razionali.
- $\sqrt 2$ non è razionale: la dimostrazione è per assurdo, con una frazione ridotta che si rivela ancora semplificabile.
- Somma e prodotto dei reali hanno nove proprietà: neutri, opposti, inversi, commutativa, associativa, distributiva. Un insieme con due operazioni che le rispetta tutte si chiama **campo**: razionali, reali e complessi lo sono, naturali e interi no.
- Graffe, tonde e quadre indicano cose diverse: con le graffe si elencano gli elementi di un insieme, con tonde e quadre si scrivono gli intervalli, e le tonde servono anche per i punti del piano.
- All'esame niente calcolatrice: bisogna saper semplificare le radici, perché le risposte del quiz le scrivono in forma razionalizzata.

> [!CANALI]
> Algebra lineare e Geometria ha **le stesse dispense e la stessa prova** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di giovedì 01/10/2026, dalle 11 alle 13; il corso del canale B è tenuto da Reto Buzano e Marco Radeschi. Le dispense hanno una lezione per incontro, e questa è la lezione 1. Gli avvisi sui cambi d'orario sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)).

## Insiemi ed elementi (p. 2)

Le dispense usano fin da subito il linguaggio degli insiemi, che si studia per bene in Matematica Discreta. Un **insieme** si scrive elencando i suoi **elementi** tra parentesi graffe, e gli si dà un nome con una lettera maiuscola:

$$A = \{1, 3, 5\}.$$

Conta solo che cosa c'è dentro: l'ordine e le ripetizioni non contano, quindi $\{1, 3, 5\} = \{5, 1, 3\}$ e $\{1, 1, 3\} = \{1, 3\}$. I simboli di base sono questi:

- $3 \in A$, «3 appartiene ad $A$»; $2 \notin A$, «2 non appartiene ad $A$»;
- $B \subset A$, «$B$ è contenuto in $A$»: ogni elemento di $B$ sta anche in $A$. Con $B = \{1, 5\}$ vale $B \subset A$;
- $B \subsetneq A$, «contenuto strettamente»: $B \subset A$ e in più $A$ ha almeno un elemento che in $B$ manca, qui il 3;
- $\emptyset$, l'insieme vuoto, senza elementi;
- i puntini, come in $\{2, 4, 6, \dots\}$, dicono che gli elementi continuano con la stessa regola.

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
> - Un insieme si scrive con le graffe; l'ordine e le ripetizioni non contano.
> - $\in$ è «appartiene», $\subset$ è «è contenuto in», $\subsetneq$ «è contenuto strettamente».

## Naturali, interi e razionali (p. 2)

Le dispense costruiscono i numeri un passo alla volta. Ogni insieme nuovo serve perché nel precedente un'equazione non ha soluzione:

| Equazione | Soluzione | Perché manca | Insieme nuovo |
|---|---|---|---|
| $x + 5 = 3$ | $-2$ | non è un naturale | gli interi $\Z$ |
| $2x = 1$ | $\frac 12$ | non è un intero | i razionali $\Q$ |
| $x^2 = 2$ | $\sqrt 2$ | non è una frazione (lo dimostriamo più avanti) | i reali $\R$ |
| $x^2 = -1$ | nessun reale | un quadrato reale non è mai negativo | i complessi $\C$, dalla lezione L02 |

> [!DEF] 1.1 · Numeri naturali, interi e razionali
> L'insieme dei **numeri naturali** è $\N = \{0, 1, 2, 3, \dots\}$.
>
> Se aggiungiamo i numeri negativi otteniamo l'insieme dei **numeri interi** $\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$.
>
> Se oltre agli interi consideriamo tutti i numeri esprimibili come frazioni $\frac ab$, otteniamo l'insieme dei **numeri razionali**
> $$\Q = \left\{ \frac ab \ ;\ a, b \in \Z,\ b \neq 0 \right\}.$$

**Come si legge.** Nella scrittura di $\Q$ prima del punto e virgola c'è la forma degli elementi, dopo le condizioni: «le frazioni $\frac ab$, con $a$ e $b$ interi e $b$ diverso da zero». La Z viene dal tedesco *Zahlen*, «numeri»; la Q da *quoziente*. Ogni intero è anche razionale, perché $5 = \frac 51$.

> [!TRAPPOLA] Lo zero è un numero naturale
> In questo corso, e nel libro di Martelli, $\N$ **comincia da 0**. In alcuni libri di scuola comincia da 1. All'esame vale la regola del corso: $0 \in \N$.

Lo stesso razionale ha infinite scritture: le dispense fanno l'esempio $\frac 17 = \frac 3{21} = \frac{-8}{-56}$. Due frazioni $\frac ab$ e $\frac cd$ sono lo stesso numero quando i **prodotti in croce** coincidono, cioè $ad = bc$. Per $\frac 17$ e $\frac 3{21}$: $1 \cdot 21 = 21$ e $7 \cdot 3 = 21$.

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
> - $\N$ comincia da 0; $\Z$ aggiunge i negativi; $\Q$ sono le frazioni con denominatore diverso da zero.
> - $\N \subsetneq \Z \subsetneq \Q$: ogni insieme ha qualcosa in più del precedente.

## I numeri reali (pp. 2–3)

Ogni frazione, fatta la divisione, ha uno sviluppo decimale che finisce oppure si ripete. Finisce, per esempio, in $\frac 14 = 0{,}25$; si ripete da un certo punto in poi in $\frac 13 = 0{,}\overline 3$ e $\frac 17 = 0{,}\overline{142857}$. Vale anche il contrario: ogni decimale finito o periodico è una frazione (esercizio 5). Uno sviluppo infinito che non si ripete mai, come quello di $\pi = 3{,}14159\ldots$, non è quindi una frazione. I **numeri reali** $\R$ sono tutti i numeri con uno sviluppo decimale, anche infinito e non periodico.

Le dispense segnalano un'ambiguità: uno sviluppo che finisce con infiniti 9 è un'altra scrittura del numero arrotondato, come $5{,}973999\ldots = 5{,}974$. Il caso più noto è $0{,}999\ldots = 1$: moltiplicando per 3 i due lati di $\frac 13 = 0{,}333\ldots$ si ottiene proprio $1 = 0{,}999\ldots$

### La costruzione con le successioni di Cauchy

> [!NOTA] Questa parte serve per capire, non per l'esame
> Da qui alla fine della sezione si vede come si definiscono i numeri reali in modo preciso. Negli appelli 2023–2026 non c'è nessuna domanda su questo argomento. Se hai poco tempo, leggi solo il riquadro «Ricorda» in fondo alla sezione.

«Un numero con infinite cifre» non basta come definizione: per sommare in colonna si parte dalla cifra più a destra, che qui non esiste. Le dispense usano un'altra strada. I troncamenti di $\pi$, cioè $3{,}1$, $3{,}14$, $3{,}141$, $3{,}1415$, …, sono tutti razionali e si avvicinano sempre di più tra loro. Una lista infinita di numeri $a_1, a_2, a_3, \dots$ si chiama **successione**; se da un certo punto in poi i suoi termini sono vicini quanto si vuole tra loro, è una **successione di Cauchy**. La lista dei troncamenti individua $\pi$ anche se $\pi$ non è razionale.

> [!ESEMPIO] 1.2 · Il numero $\pi$
> Il numero reale $\pi$ ha infinite cifre dopo la virgola: $3{,}1415926\ldots$ Corrisponde alla successione di Cauchy di numeri razionali
> $$a_1 = 3{,}1 \qquad a_2 = 3{,}14 \qquad a_3 = 3{,}141 \qquad a_4 = 3{,}1415 \qquad \dots$$
> Le dispense aggiungono che la successione che definisce un numero reale **non è unica**. Per esempio anche la lista $3{,}2;\ 3{,}15;\ 3{,}142;\ 3{,}1416;\ \dots$ (ogni volta arrotondando per eccesso) si avvicina a $\pi$. Due liste diverse possono indicare lo stesso numero.

> [!APPROFONDIMENTO] la definizione precisa di successione di Cauchy (p. 2)
> Una successione $(a_n)$ di numeri razionali $a_n \in \Q$ è **di Cauchy** se per ogni numero razionale $\varepsilon > 0$ esiste un $N > 0$ per cui
> $$|a_m - a_n| < \varepsilon \quad \text{per ogni } m, n > N.$$
>
> **Come si legge.** $\varepsilon$ è una tolleranza positiva scelta a piacere; $|a_m - a_n|$ è la distanza tra due termini. La condizione dice che, comunque piccola sia la tolleranza, dopo il posto $N$ due termini qualsiasi distano meno di $\varepsilon$. Più la tolleranza è piccola, più avanti bisogna andare.

Una successione di Cauchy di razionali può avvicinarsi a un razionale, come $0{,}3;\ 0{,}33;\ 0{,}333;\ \dots$ che si avvicina a $\frac 13$, oppure a un «buco» tra i razionali, come la lista di $\pi$. Nel secondo caso individua un numero **irrazionale**.

> [!DEF] Numeri reali (p. 3)
> I **numeri reali** sono definiti come *classi di equivalenza* di successioni di Cauchy di numeri razionali. Due successioni di Cauchy sono **equivalenti** se la loro differenza è una successione che tende a zero.

**Come si legge.** Due successioni sono equivalenti quando si avvicinano alla stessa cosa, come le due liste di $\pi$ dell'esempio 1.2. La classe di equivalenza conta tutte queste liste come un solo numero. È lo stesso meccanismo per cui $\frac 12$ e $\frac 24$ sono lo stesso razionale.

> [!ESEMPIO] 1.3 · Il numero $e$
> Le dispense danno un secondo esempio di lista che punta a un buco. Il termine di posto $n$ si calcola con questa formula:
> $$a_n = \left(1 + \frac 1n\right)^n$$
> - Con $n = 1$: $a_1 = 2^1 = 2$.
> - Con $n = 2$: $a_2 = \left(\frac 32\right)^2 = \frac 94 = 2{,}25$.
> - Con $n = 3$: $a_3 = \left(\frac 43\right)^3 = \frac{64}{27} \approx 2{,}370$.
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

Con questa costruzione i buchi sono riempiti. Le dispense ne tengono due conseguenze: ogni reale si **approssima** con razionali con la precisione che si vuole, e rifacendo la costruzione con successioni di reali non si trova niente di nuovo.

> [!PROP] · $\R$ è completo
> A differenza di $\Q$, l'insieme $\R$ dei numeri reali è **completo**: ogni successione di Cauchy in $\R$ converge.

**Come si legge.** «Converge» vuol dire che si avvicina a un numero preciso dell'insieme. In $\R$ ogni successione di Cauchy ha un limite reale; in $\Q$ no, perché la lista dei troncamenti di $\pi$ è fatta di razionali ma non ha un limite razionale.

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
> - I razionali hanno uno sviluppo decimale finito o periodico; i reali possono averlo infinito e non periodico.
> - In modo preciso un reale è una classe di successioni di Cauchy di razionali. $\R$ è completo, $\Q$ no.

## Perché la radice di 2 non è razionale (p. 4)

La radice di 2 è una lunghezza concreta: per il teorema di Pitagora la diagonale di un quadrato di lato 1 misura $\sqrt{1^2 + 1^2} = \sqrt 2$. Sta tra 1 e 2, perché $1^2 = 1$ e $2^2 = 4$; le prime cifre sono $1{,}41421\ldots$

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

Le dispense riassumono le quattro famiglie in una riga, $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$. Per $-1$ e $\frac 12$ basta guardarli. Per $\sqrt 2$ bisogna escludere tutte le infinite frazioni, e serve una dimostrazione.

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

> [!PROP] 1.4
> Il numero $\sqrt 2$ non è razionale.

**Come si legge.** Non esistono interi $a$ e $b$ con $\frac ab = \sqrt 2$. Un reale che non è razionale si chiama **irrazionale**.

La dimostrazione è **per assurdo**: si suppone vero il contrario e si arriva a una contraddizione. Servono due fatti sugli interi. Se $a^2$ è pari anche $a$ è pari, perché un dispari $2k + 1$ ha quadrato $4k^2 + 4k + 1$, dispari. E ogni frazione si può ridurre ai minimi termini, cioè con numeratore e denominatore senza divisori comuni.

1. Supponiamo $\sqrt 2 = \frac ab$ con $a, b$ interi e la frazione **ridotta ai minimi termini**.
2. Elevando al quadrato, $2 = \frac{a^2}{b^2}$, cioè $2b^2 = a^2$.
3. Allora $a^2$ è pari, quindi $a$ è pari: $a = 2k$.
4. Sostituendo, $2b^2 = 4k^2$, cioè $b^2 = 2k^2$: anche $b^2$ è pari, quindi $b$ è pari.
5. Numeratore e denominatore sono pari, quindi la frazione si semplifica ancora per 2: contraddice il passo 1. Quindi $\sqrt 2$ non è razionale.

> [!IDEA] · lo schema, in tre mosse
> 1. Scrivi il numero come frazione **ridotta**.
> 2. Eleva al quadrato e togli la frazione.
> 3. Mostra che sopra e sotto hanno un divisore in comune: è l'assurdo.
>
> Con lo stesso schema si dimostra che $\sqrt 3$ e $\sqrt 6$ non sono frazioni (esercizi 11 e 13).

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
> - $\sqrt 2$ è irrazionale: si dimostra per assurdo, con una frazione ridotta che risulta ancora semplificabile.
> - $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$.

## Le nove proprietà: che cos'è un campo (p. 4)

Le proprietà di somma e prodotto che si usano senza pensarci qui ricevono un nome: per esempio $2 + 5 = 5 + 2$ è la proprietà commutativa. Non è un esercizio di stile: dalla lezione L05 le stesse proprietà definiscono gli spazi vettoriali, e lì gli oggetti non sono più numeri. Le dispense chiamano somma e prodotto operazioni **binarie**, perché prendono due numeri e ne restituiscono uno.

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

**Come si legge.** Il simbolo $\forall$ si legge «per ogni»: ogni riga vale qualunque numero reale si metta al posto delle lettere. Le prime quattro righe riguardano la somma, le tre seguenti il prodotto, l'ultima li collega. L'inverso per la somma si chiama di solito **opposto** e si scrive $-a$; quello per il prodotto si scrive $a^{-1} = \frac 1a$, per esempio $4^{-1} = \frac 14$. La riga 8 esclude lo zero: un inverso di 0 dovrebbe dare 1 moltiplicato per 0, ma ogni numero per 0 fa 0. È il motivo per cui non si divide per zero.

> [!DEF] Campo
> Un insieme con due operazioni $+$ e $\cdot$ che hanno queste nove proprietà si chiama **campo**.

**Come si legge.** In un campo si fanno le quattro operazioni senza uscire dall'insieme: sottrarre è sommare l'opposto, dividere è moltiplicare per l'inverso. Le dispense riprendono i campi nella lezione L05, e da qui in poi scrivono spesso $ab$ al posto di $a \cdot b$.

Per decidere se un insieme di numeri è un campo bastano quasi sempre due domande: gli opposti stanno nell'insieme? Gli inversi dei numeri non nulli stanno nell'insieme?

| Insieme | Opposti dentro? | Inversi dentro? | Campo? |
|---|---|---|---|
| $\N$ | no: $-3 \notin \N$ | no: $\frac 13 \notin \N$ | **no** |
| $\Z$ | sì | no: $\frac 12 \notin \Z$ | **no** |
| $\Q$ | sì | sì: l'inverso di $\frac ab$ è $\frac ba$ | **sì** |
| $\R$ | sì | sì | **sì** |
| $\C$ | sì | sì (lezione L02) | **sì** |

Per dire che un insieme **non** è un campo basta una proprietà che fallisce, con un esempio: «$\Z$ non è un campo perché 2 non ha inverso in $\Z$» è una risposta completa.

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
> - Un campo è un insieme con somma e prodotto che rispettano le nove proprietà: si fanno le quattro operazioni senza uscire.
> - $\Q$, $\R$ e $\C$ sono campi; $\N$ e $\Z$ no. Lo zero non ha inverso.

## L'ordine (p. 5)

Sulla retta dei numeri un numero è maggiore di un altro quando sta più a destra. Un insieme in cui due numeri diversi si confrontano sempre così si chiama **ordinato**: lo sono $\N$, $\Z$, $\Q$ e $\R$.

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

Le dispense danno una regola che non ha bisogno del disegno.

> [!DEF] Ordine (p. 5)
> Diciamo che $a > b$ se $a - b > 0$.

**Come si legge.** Per confrontare due numeri si guarda il segno della differenza: $-2 > -5$ perché $-2 - (-5) = 3$ è positivo. Così tutto si riduce a sapere quali numeri sono positivi. In $\Z$ sono $1, 2, 3, \dots$; in $\Q$ una frazione è positiva quando numeratore e denominatore hanno lo stesso segno, per esempio $\frac{-3}{-4}$; per $\R$ la regola usa le successioni di Cauchy.

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

(c) $\frac 12 > \frac 13$. Controllo: $\frac 12 - \frac 13 = \frac 36 - \frac 26 = \frac 16$, positivo.
:::

> [!RICORDA]
> - $a > b$ vuol dire $a - b > 0$: sulla retta, $a$ sta più a destra.
> - $\N$, $\Z$, $\Q$ e $\R$ sono ordinati, $\C$ no.

## Parentesi e intervalli (p. 5)

Le dispense insistono sulla notazione, perché tre scritture quasi uguali indicano cose diverse.

| Scrittura | Parentesi | Che cos'è | Che cosa contiene |
|---|---|---|---|
| $\{1, 2\}$ | graffe | un insieme con due elementi | solo l'1 e il 2 |
| $(1, 2)$ | tonde | un **intervallo aperto** | i reali tra 1 e 2, estremi **esclusi** |
| $[1, 2]$ | quadre | un **intervallo chiuso** | i reali tra 1 e 2, estremi **inclusi** |

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

Un insieme si descrive anche con una **condizione** sui suoi elementi. La barra verticale si legge «tale che» (le dispense usano anche i due punti o il punto e virgola), e $\le$ è «minore o uguale»:

$$(1, 2) = \{x \in \R \mid 1 < x < 2\}, \qquad [1, 2] = \{x \in \R \mid 1 \le x \le 2\}.$$

> [!OLTRE] · gli altri intervalli
> Le due parentesi si possono mescolare. $[1, 2)$ include l'1 ed esclude il 2. $(1, 2]$ esclude l'1 e include il 2.
>
> Per una semiretta, cioè un pezzo di retta che da una parte non finisce, si usa il simbolo $\infty$ («infinito»). Per esempio $[0, +\infty)$ contiene tutti i numeri reali da 0 in su. Accanto a $\infty$ la parentesi è sempre tonda, perché l'infinito non è un numero e non può essere «incluso».

In questo corso $(1, 2)$ indica anche un **punto del piano** o un **vettore** (lezione L05), con coordinate 1 e 2. Si capisce dal contesto: «$x$ sta in $(1, 2)$» è un intervallo, «il punto $P = (1, 2)$» è una coppia, e lì l'ordine conta.

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
> - Graffe: insieme con gli elementi elencati. Tonde: estremi esclusi. Quadre: estremi inclusi.
> - $(1, 2)$ può essere anche un punto o un vettore; mai le graffe per un vettore.

## Le lettere greche del corso (p. 5)

Le dispense chiedono di riconoscere queste nove lettere, che nel corso indicano numeri, angoli e coefficienti come le lettere latine.

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

Theta, fi, ro ed epsilon hanno anche una seconda grafia: $\theta$, $\varphi$, $\rho$, $\epsilon$.

::: prova Come si chiamano $\lambda$, $\vartheta$ e $\varepsilon$?
Lambda, theta ed epsilon.
:::

> [!RICORDA]
> Le più usate nel corso sono $\lambda$ e $\mu$ per i numeri che moltiplicano i vettori, e $\vartheta$ per gli angoli.

## Leggere i simboli (oltre le dispense)

Le dispense usano dalla prima pagina i simboli della logica e degli insiemi; il libro di Martelli li spiega nel §1.1 (pp. 4–7). Una formula si legge come una frase sostituendo ogni simbolo con le sue parole.

| Simbolo | Si legge | Un esempio, letto a parole |
|---|---|---|
| $\forall$ | «per ogni» | $\forall a \in \R:\ a + 0 = a$ si legge «per ogni numero reale $a$, $a$ più zero fa $a$» |
| $\exists$ | «esiste» | $\exists x \in \Z:\ x + 5 = 3$ si legge «esiste un intero $x$ per cui $x$ più 5 fa 3». È vero: $x = -2$ |
| $:$ oppure $\mid$ | «tale che», «per cui» | $\{x \in \R \mid x > 0\}$ si legge «i numeri reali $x$ maggiori di zero» |
| $\Longrightarrow$ | «se … allora …» | $a = 2 \Longrightarrow a^2 = 4$ si legge «se $a$ è 2, allora $a$ al quadrato è 4» |
| $\Longleftrightarrow$ | «se e solo se» | $a - b > 0 \Longleftrightarrow a > b$: le due frasi sono vere insieme o false insieme |
| $\cup$ | «unito» | $\{1, 2\} \cup \{2, 3\} = \{1, 2, 3\}$: gli elementi che stanno nell'uno **o** nell'altro |
| $\cap$ | «intersecato» | $\{1, 2\} \cap \{2, 3\} = \{2\}$: gli elementi che stanno nell'uno **e** nell'altro |
| $\setminus$ | «meno» | $\{1, 2, 3\} \setminus \{3\} = \{1, 2\}$: il primo insieme senza gli elementi del secondo |

«Per ogni» ed «esiste» si chiamano **quantificatori**, e basta cambiare l'insieme per cambiare la verità di una frase. «Per ogni reale $x$ esiste un reale $y$ con $2y = x$» è vera: si prende $y = \frac x2$. La stessa frase con gli interi è falsa: per $x = 1$ servirebbe $y = \frac 12$.

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
> La A rovesciata si legge «per ogni», la E rovesciata «esiste», la freccia doppia «se … allora», che non vale al contrario.

## Conti con le radici (oltre le dispense)

All'esame la calcolatrice è vietata, e le risposte del quiz scrivono lunghezze, distanze e angoli con le radici, in una forma precisa: un conto giusto che finisce con $\frac 1{\sqrt 3}$ va riconosciuto nella risposta $\frac{\sqrt 3}3$.

> [!ESAME] Perché impararlo adesso
> Nell'appello del 07/09/2026 le cinque risposte possibili per una distanza erano $3$, $\frac{\sqrt 3}3$, $3\sqrt 3$, $\sqrt 3$ e $3 + \sqrt 3$. Per un angolo comparivano $\arccos\frac 3{\sqrt{43}}$, $\arccos\frac 6{\sqrt{42}}$ e simili. Bisogna saper riconoscere che, per esempio, $\frac 1{\sqrt 3}$ e $\frac{\sqrt 3}3$ sono lo stesso numero.

Le regole valgono per numeri non negativi sotto la radice.

| Regola | Esempio |
|---|---|
| $\sqrt a \cdot \sqrt b = \sqrt{ab}$ | $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$ |
| $\sqrt{a^2 b} = a\sqrt b$: un quadrato esce dalla radice | $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt 3$ |
| $(\sqrt a)^2 = a$ | $(\sqrt 5)^2 = 5$ |
| $\sqrt{x^2}$ è $x$ senza il segno meno | $\sqrt{(-3)^2} = 3$ |
| si sommano solo radici uguali | $2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$ |
| radice sotto: moltiplica sopra e sotto per la radice | $\frac 6{\sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$ |
| differenza sotto: moltiplica sopra e sotto per la somma | $\frac 1{\sqrt 2 - 1} = \sqrt 2 + 1$ |

L'ultima regola usa la differenza di quadrati, $(x - y)(x + y) = x^2 - y^2$. Con $\frac 1{\sqrt 2 - 1}$ si moltiplica sopra e sotto per $\sqrt 2 + 1$: sotto viene $(\sqrt 2)^2 - 1^2 = 1$, e resta $\sqrt 2 + 1$. Togliere le radici dal denominatore si chiama **razionalizzare**.

> [!TRAPPOLA] La radice di una somma
> La radice di una somma **non** è la somma delle radici. Controllo con i numeri: $\sqrt{9 + 16} = \sqrt{25} = 5$, mentre $\sqrt 9 + \sqrt{16} = 3 + 4 = 7$.

::: prova Semplifica $\sqrt{18}$.
Un quadrato perfetto che divide 18 è 9: $18 = 9 \cdot 2$. Quindi $\sqrt{18} = \sqrt 9 \cdot \sqrt 2 = 3\sqrt 2$.
:::

::: prova Togli la radice dal numero sotto: $\frac 4{\sqrt 2}$.
Moltiplica sopra e sotto per $\sqrt 2$. Sopra viene $4\sqrt 2$, sotto viene $\sqrt 2 \cdot \sqrt 2 = 2$. Quindi $\frac{4\sqrt 2}2 = 2\sqrt 2$.
:::

> [!RICORDA]
> - Un quadrato perfetto esce dalla radice; si sommano solo radici uguali.
> - Per razionalizzare si moltiplica sopra e sotto per la radice, o per la somma se sotto c'è una differenza. La radice di una somma non è la somma delle radici.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\in$, $\notin$ | «appartiene a», «non appartiene a» | sta, o non sta, nell'insieme | $3 \in \{1, 3, 5\}$ |
| $\subset$ | «è contenuto in» | tutti gli elementi del primo stanno nel secondo | $\{1, 5\} \subset \{1, 3, 5\}$ |
| $\subsetneq$ | «è contenuto strettamente in» | è contenuto, e il secondo ha qualcosa in più | $\N \subsetneq \Z$ |
| $\emptyset$ | «insieme vuoto» | l'insieme senza elementi | |
| $\N$, $\Z$, $\Q$, $\R$, $\C$ | «enne», «zeta», «cu», «erre», «ci» | naturali, interi, razionali, reali, complessi | $\sqrt 2 \in \R$ |
| $\mid$ | «tale che» | introduce la condizione da rispettare | $\{x \in \R \mid x > 0\}$ |
| $(a, b)$, $[a, b]$ | «intervallo aperto», «intervallo chiuso» | i reali tra $a$ e $b$, estremi esclusi o inclusi | $[1, 2]$ |
| $a_n$ | «a con enne» | il termine di posto $n$ di una successione | $a_2 = 3{,}14$ |
| $\lvert x \rvert$ | «valore assoluto di $x$» | il numero senza il segno meno | $\lvert -2 \rvert = 2$ |
| $-a$, $a^{-1}$ | «opposto di $a$», «inverso di $a$» | sommato ad $a$ dà 0; moltiplicato per $a$ dà 1 | $4^{-1} = \frac 14$ |
| $\forall$, $\exists$ | «per ogni», «esiste» | vale per tutti; ce n'è almeno uno | $\forall a \in \R$ |

## Verso l'esame

La prova di **Algebra lineare e Geometria**, la parte 2 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 27/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26, confermate dai testi degli appelli: **10 domande a risposta multipla** da 1 punto, ognuna con 5 risposte di cui una sola giusta, segnate con una X; **2 problemi** aperti da 11 punti, corretti solo con almeno 6 punti su 10 nel quiz; 2 ore, massimo 32 punti, sufficienza 18. Ammessi solo un foglio protocollo o due fogli A4 (4 facciate) scritti a mano; **niente calcolatrice** e niente libri.

| Appello 2026/27 | Iscrizioni su MyUniTo | Ora e aule |
|---|---|---|
| ven 22/01/2027 | 02/01 – 15/01/2027 | 14:00, aule A, B, C, D, F |
| ven 05/02/2027 | 16/01 – 29/01/2027 | 14:00, aule A, B, C, D, F |

Il voto finale di MDAG è la media delle due prove, Matematica Discreta e Algebra lineare, che si possono sostenere anche in appelli diversi. Ripresentarsi a una prova già superata **annulla** il voto precedente, anche se va peggio. Dettagli e fonti nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa serve di questa lezione**

1. **Campi.** Dalla lezione L05 ogni spazio vettoriale è costruito su un campo. Saper dire perché $\Z$ non è un campo è una tipica domanda di teoria.
2. **Notazioni.** Insiemi, intervalli, punti e vettori con le parentesi giuste: nei problemi le risposte si scrivono così.
3. **Conti con le radici.** Le risposte del quiz su distanze, norme e angoli sono scritte razionalizzate.
4. **Ragionare per assurdo.** Il quiz non chiede dimostrazioni, ma le dispense usano spesso questo schema.

Negli appelli 2023–2026 non ci sono domande dirette su questa lezione: le domande del quiz qui sotto sono sul modello di quelle d'esame, tranne la prima, che viene da un appello vero.

### Una domanda vera, letta insieme

**Appello del 07/09/2026, domanda 7.** Il testo: «La distanza tra le rette $r_1 = (2, 0, 0) + \operatorname{Span}(0, 1, 1)$ e $r_2 = (0, 3, 0) + \operatorname{Span}(-1, 1, 0)$ è: (a) $3$; (b) $\frac{\sqrt 3}3$; (c) $3\sqrt 3$; (d) $\sqrt 3$; (e) $3 + \sqrt 3$.»

**In pratica chiede:** una distanza tra due rette nello spazio, che si impara molto più avanti. La parte che riguarda questa lezione è l'ultima riga del conto: la soluzione ufficiale arriva a $\frac 1{\sqrt 3}$, che tra le risposte non c'è scritto così.

> [!ESEMPIO] · l'ultimo passo, razionalizzato
> **Passo 1.** Il conto della soluzione ufficiale finisce con un prodotto scalare che vale 1 diviso per una norma che vale $\sqrt 3$: $d = \frac 1{\sqrt 3}$.
>
> **Passo 2.** Si moltiplica sopra e sotto per $\sqrt 3$: $\frac 1{\sqrt 3} = \frac{\sqrt 3}{\sqrt 3 \cdot \sqrt 3} = \frac{\sqrt 3}3$.
>
> **Passo 3.** È la risposta (b), quella della soluzione ufficiale. Il valore è circa $0{,}577$: si possono scartare a occhio (a), (c) e (e), che valgono almeno 3, e (d), che vale circa $1{,}73$.

**Errori da evitare**

- Scartare la risposta giusta perché è scritta in un'altra forma: $\frac 1{\sqrt 3}$ e $\frac{\sqrt 3}3$ sono lo stesso numero.
- Scrivere $\sqrt{a + b} = \sqrt a + \sqrt b$.
- Usare le graffe per un vettore o per un punto.

> [!ESAME] Il foglio da 4 facciate
> È l'unico materiale ammesso, quindi conviene costruirlo lezione per lezione. Da questa lezione bastano due cose: la tabella delle regole sulle radici e la riga «campo = 9 regole; $\N$ e $\Z$ non sono campi».

## Quiz

```quiz
D: Appello del 07/09/2026, domanda 7. Il conto della distanza tra le due rette arriva a $\frac 1{\sqrt 3}$. Quale delle cinque risposte del foglio è lo stesso numero?
- $3$
+ $\frac{\sqrt 3}3$
- $3\sqrt 3$
- $\sqrt 3$
- $3 + \sqrt 3$
= Razionalizzando, $\frac 1{\sqrt 3} = \frac{\sqrt 3}{3}$: è la risposta (b) della soluzione ufficiale. La risposta più insidiosa è $\sqrt 3$, che viene capovolgendo la frazione o dimenticando di dividere per 3.

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

**La dimostrazione**, con lo stesso schema usato per $\sqrt 2$.

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
(a) Stesso schema.

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
Insieme | Una collezione di oggetti, che si chiamano elementi. Si scrive con le graffe: $\{1, 3, 5\}$. Ordine e ripetizioni non contano.
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
