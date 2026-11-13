---
corso: MDAG
modulo: MD
lezione: D14
titolo: Numeri interi, divisibilità e divisione euclidea
data: 2026-11-09
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D14
descrizione: >-
  Appunti della lezione D14 di Matematica Discreta (MDAG, parte 1, canali A, B e C): somma e prodotto tra interi, la
  divisibilità e le sue proprietà, numeri invertibili, irriducibili e primi, il massimo comun divisore, la divisione
  euclidea anche con numeri negativi, la notazione posizionale e i cambi di base, con le domande d'esame degli appelli
  2018–2025.
lede: >-
  Con questa lezione finisce la parte sul contare e comincia l'aritmetica degli interi, che occupa il resto del corso.
  Si parte da tre idee: che cosa vuol dire «divide», che cos'è il massimo comun divisore, e la divisione con il resto,
  che deve funzionare anche con i numeri negativi. Subito un'applicazione da quiz: scrivere un numero in un'altra base.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 4, pp. 67–73
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 4 «I numeri interi», pp. 67–73 (definizione 4.1,
  proposizione 4.2, definizioni 4.3 e 4.4, teorema 4.5 con la dimostrazione, notazione posizionale: definizione 4.6,
  note 4.7 e 4.8, cambi di base); diario delle lezioni del canale B 2025/26, lezione 14; appelli di Matematica
  Discreta 2018–2025
appunti_html: appunti/MDAG/D14_interi_divisibilita_divisione_euclidea.html
genera_html: true
---

## In breve

- Tra gli interi ci sono due operazioni, somma e prodotto. Per la somma ogni numero ha un opposto; per il prodotto hanno un inverso intero solo 1 e −1, che si chiamano **invertibili**.
- Un intero ne **divide** un altro se il secondo è il primo moltiplicato per un intero: 4 divide 20. Ogni intero divide 0; lo 0 divide solo sé stesso.
- Un divisore comune di due numeri divide anche la loro somma e la loro differenza.
- Un intero è **irriducibile** se non si spezza in un prodotto, a parte i prodotti con 1 e −1. È **primo** se, quando divide un prodotto, divide almeno uno dei fattori.
- Il **massimo comun divisore** di due interi non tutti e due nulli è il più grande intero che li divide entrambi. È sempre positivo.
- **Divisione euclidea**: dividendo un intero per un altro diverso da zero si trovano un quoziente e un resto, e sono unici. Il resto **non è mai negativo**, anche con numeri negativi: $-17 = (-4) \cdot 5 + 3$.
- Le **cifre** di un numero in una base sono i resti di divisioni successive per la base. Così si passa dalla base 10 a un'altra base; per tornare indietro si sommano le cifre per le potenze della base.
- All'esame: una domanda del quiz sui cambi di base in molti appelli, e la divisione euclidea dentro ogni esercizio sul massimo comun divisore.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di lunedì 09/11/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la quattordicesima lezione era «Struttura additiva dei numeri interi. Divisibilità e divisori. Massimo comun divisore. Numeri invertibili, irriducibili e primi. Divisione euclidea». Nel libro sono le pp. 67–71. Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> **La notazione posizionale.** Il libro la mette subito dopo la divisione euclidea, come sua prima applicazione (pp. 71–73). Il diario dell'anno scorso non la nomina in nessuna lezione, ma i quiz d'esame la chiedono: la metto qui. La lezione successiva del diario è l'algoritmo per il massimo comun divisore e l'identità di Bézout (da p. 73).
>
> È la lezione dopo la [D13](D13_scambi_parita.html) del 02/11: nella settimana del 2 novembre il calendario del canale B aveva Matematica Discreta solo il lunedì.

## Somma e prodotto tra interi (pp. 67–68)

Gli interi sono i numeri …, −2, −1, 0, 1, 2, … con il segno. Il loro insieme si scrive $\mathbb{Z}$. Hanno due operazioni, la **somma** e il **prodotto**, tutte e due commutative e associative. Ognuna ha un **elemento neutro**, cioè un numero che non cambia niente: 0 per la somma, 1 per il prodotto. Le lega la **proprietà distributiva**: $a(x + y) = ax + ay$.

La differenza tra le due operazioni sta negli inversi.

- **Per la somma** ogni intero ha un inverso: l'**opposto**. L'opposto di 5 è −5, perché sommati danno 0.
- **Per il prodotto** quasi nessun intero ha un inverso intero. L'inverso di 5 sarebbe $\frac{1}{5}$, che non è un intero. Gli unici interi con un inverso intero sono 1 e −1, ognuno inverso di sé stesso: si chiamano **invertibili**.

Per la somma la struttura è tutta qui: partendo da 1 e sommandolo a sé stesso si ottengono tutti i naturali, e con gli opposti tutti gli interi. Per il prodotto non funziona così: le potenze di un numero non danno tutti gli interi. Per capire come gli interi si costruiscono con il prodotto serve la divisibilità.

::: prova Quali sono gli interi $x$ per cui esiste un intero $y$ con $xy = 1$?
Solo 1 e −1: $1 \cdot 1 = 1$ e $(-1) \cdot (-1) = 1$. Per ogni altro intero l'inverso sarebbe una frazione, o non esiste, come per lo 0.
:::

> [!RICORDA]
> - Opposto: inverso per la somma, c'è sempre. Invertibili per il prodotto: solo 1 e −1.

## La divisibilità (definizione 4.1, proposizione 4.2)

Dire che 4 divide 20 vuol dire che 20 sta nella tabellina del 4: $20 = 4 \cdot 5$. Dire che 3 non divide 10 vuol dire che nessun intero moltiplicato per 3 dà 10. Con i numeri negativi non cambia niente: −4 divide 20, perché $(-4) \cdot (-5) = 20$.

> [!DEF] Divisibilità (definizione 4.1)
> Siano $a$ e $b$ due interi. Diciamo che $a$ **divide** $b$, o che $a$ è un **divisore** di $b$, o che $b$ è **divisibile** per $a$, se esiste un intero $k$ con $b = ka$. Si scrive $a \mid b$.

**Come si legge.** La barra verticale si legge «divide»: $4 \mid 20$ è una frase, vera o falsa, non un'operazione. Non va confusa con la barra di frazione: $\frac{20}{4}$ è il numero 5, mentre $4 \mid 20$ dice che quel numero è intero. Il segno non conta: se 4 divide 20, anche −4 divide 20, e 4 divide −20.

Due casi limite, che i quiz usano volentieri:

1. **Ogni intero divide 0**, perché $n \cdot 0 = 0$. Invece **0 divide solo 0**: $0 \cdot k$ fa sempre 0, mai un altro numero.
2. **1 e −1 dividono ogni intero**, perché $1 \cdot n = n$ e $(-1) \cdot (-n) = n$. Sono gli unici con questa proprietà, e i loro soli divisori sono 1 e −1.

I divisori di un intero diverso da 0 sono in numero finito, perché un divisore non può superare in valore assoluto il numero. Per esempio i divisori di 12 sono 1, 2, 3, 4, 6, 12 e i loro opposti.

La proprietà che si usa più spesso riguarda le somme. Se 6 e 15 sono tutti e due multipli di 3, anche la loro somma 21 lo è: $6 + 15 = 3 \cdot 2 + 3 \cdot 5 = 3 \cdot 7$. E al contrario: se 3 divide 21 e divide 6, deve dividere anche l'altro addendo, 15.

> [!PROP] Proposizione 4.2
> Siano $a$ e $b$ interi e sia $s = a + b$. Allora:
> 1. un divisore di $a$ e di $b$ è anche un divisore di $s$;
> 2. un divisore di $s$ e di uno dei due addendi è un divisore anche dell'altro addendo.

**Come si legge.** Tra i tre numeri $a$, $b$ e $a + b$, chi ne divide due divide anche il terzo. Vale lo stesso per la differenza, che è una somma con l'opposto. La dimostrazione è la proprietà distributiva: se $a = dj$ e $b = dk$, allora $a + b = d(j + k)$.

> [!ESEMPIO] · Prova scritta del 2021/22, problema 2, punto 3
> «Sia $n > 0$ un numero intero. Spiegare perché $\mathrm{MCD}(n, n + 3)$ può essere solo 1 o 3.»
>
> **Soluzione.** Un divisore comune di $n$ e di $n + 3$ divide anche la loro differenza, che è 3 (proposizione 4.2). I divisori positivi di 3 sono 1 e 3. Quindi ogni divisore comune positivo, e in particolare il più grande, è 1 oppure 3. È il ragionamento della soluzione ufficiale. Il massimo comun divisore è definito due sezioni più avanti; qui serve solo sapere che è un divisore comune.

::: prova Vero o falso: se 7 divide $a + b$ e 7 divide $a$, allora 7 divide $b$?
Vero, per il punto 2 della proposizione: $b = (a + b) - a$ è differenza di due multipli di 7.
:::

> [!RICORDA]
> - $a \mid b$: esiste un intero $k$ con $b = ka$.
> - Ogni intero divide 0; 0 divide solo 0; 1 e −1 dividono tutto.
> - Chi divide due tra $a$, $b$ e $a + b$ divide anche il terzo.

## Irriducibili, riducibili e primi (definizione 4.3)

Il numero 12 si spezza in un prodotto di numeri più piccoli, per esempio 3 per 4. Il numero 7 no: gli unici modi di scriverlo come prodotto sono $7 \cdot 1$ e $(-7) \cdot (-1)$, che non lo spezzano davvero perché usano un invertibile. A scuola un numero così si chiama «primo». Il libro avverte che la sua classificazione «apparirà strana»: usa **due** parole, per due proprietà diverse.

> [!DEF] Irriducibile, riducibile, primo (definizione 4.3)
> Sia $n$ un intero diverso da 0, 1 e −1.
> 1. $n$ è **irriducibile** se ogni volta che $n = ab$, uno dei due fattori è invertibile.
> 2. $n$ è **riducibile** se non è irriducibile, cioè se si può scrivere $n = ab$ con $a$ e $b$ non invertibili.
> 3. $n$ è **primo** se ogni volta che $n$ divide un prodotto $ab$, allora $n$ divide $a$ oppure divide $b$.

**Come si legge.**

- **Irriducibile** è la proprietà di scuola: non si spezza. I suoi divisori sono solo 1, −1, sé stesso e il suo opposto.
- **Primo** è un'altra proprietà: guarda che cosa succede quando il numero **divide un prodotto**. Un primo non può dividere un prodotto «a pezzi», un po' con un fattore e un po' con l'altro.

Tre esempi del libro:

1. **7 è irriducibile**: i soli modi di scriverlo come prodotto sono $7 \cdot 1$ e $(-7)(-1)$, con un invertibile.
2. **−10 è riducibile**: $-10 = 2 \cdot (-5)$, e nessuno dei due fattori è invertibile. La definizione vale anche per i negativi: −7 è irriducibile.
3. **6 non è primo**: 6 divide $30 = 3 \cdot 10$, ma non divide 3 e non divide 10. Il 6 divide il prodotto prendendo un 3 da un fattore e un 2 dall'altro.

Per gli interi le due proprietà finiscono per coincidere: un intero è primo esattamente quando è irriducibile. Si dimostra tra due lezioni, e da lì viene la scomposizione in fattori primi. Fino ad allora vanno tenute distinte: nelle definizioni e nelle dimostrazioni si usa quella che il testo nomina.

> [!TRAPPOLA] 0, 1 e −1 restano fuori
> La definizione esclude 0, 1 e −1: non sono né irriducibili, né riducibili, né primi. 1 e −1 sono gli invertibili; lo 0 è un caso a parte.

::: prova 15 è primo? Trova un prodotto che lo smentisce.
No: 15 divide $3 \cdot 10 = 30$, ma non divide 3 e non divide 10. Un altro: $6 \cdot 5 = 30$.
:::

> [!RICORDA]
> - Irriducibile: non si scrive come prodotto di due non invertibili.
> - Primo: se divide un prodotto, divide un fattore.
> - Per gli interi coincidono, ma lo si dimostra più avanti.

## Il massimo comun divisore (definizione 4.4)

Due interi hanno sempre almeno due divisori in comune, 1 e −1. Per questo ha senso cercare il più grande dei divisori comuni. Con numeri piccoli basta elencarli: i divisori positivi di 12 sono 1, 2, 3, 4, 6, 12; quelli di 18 sono 1, 2, 3, 6, 9, 18. In comune hanno 1, 2, 3 e 6: il massimo è 6.

```grafico
titolo: I divisori positivi di 12 (cerchio blu) e di 18 (cerchio ambra). Nella zona in comune ci sono i divisori comuni 1, 2, 3 e 6: il più grande, 6, è il massimo comun divisore
x: 0 12.4
y: 0 5.0
assi: no
griglia: no
proporzioni: libere
cerchio: 4.6 2.5 2.3 | blu
cerchio: 7.8 2.5 2.3 | ambra
testo: 3.4 3.2 | blu | "4"
testo: 3.4 1.8 | blu | "12"
testo: 9.0 3.2 | ambra | "9"
testo: 9.0 1.8 | ambra | "18"
testo: 5.8 3.4 | grigio | "1"
testo: 6.6 3.4 | grigio | "2"
testo: 5.8 2.5 | grigio | "3"
testo: 6.6 2.4 | verde | "6"
testo: 6.2 1.4 | verde | "MCD = 6"
testo: 2.6 4.7 | blu | "divisori di 12"
testo: 9.8 4.7 | ambra | "divisori di 18"
```

> [!DEF] Massimo comun divisore (definizione 4.4)
> Siano $a$ e $b$ due interi **non entrambi nulli**. Il **massimo comun divisore** di $a$ e $b$ è
> $$\mathrm{MCD}(a, b) = \max\{d \in \mathbb{Z} \text{ con } d \mid a \text{ e } d \mid b\}.$$

**Come si legge.** Si prendono tutti gli interi che dividono sia $a$ sia $b$, e si sceglie il più grande. Tre conseguenze:

- **È sempre positivo**, qualunque sia il segno dei due numeri, perché tra i divisori comuni c'è sempre 1. Per esempio $\mathrm{MCD}(15, -40) = 5$ e $\mathrm{MCD}(28, 100) = 4$.
- **Con lo zero**: $\mathrm{MCD}(0, b) = \lvert b \rvert$ per ogni $b \ne 0$. Ogni intero divide 0, quindi i divisori comuni sono i divisori di $b$, e il più grande è il valore assoluto di $b$.
- **Tutti e due nulli no**: ogni intero divide 0, quindi i divisori comuni di 0 e 0 sarebbero tutti gli interi, e un massimo non c'è.

Elencare i divisori va bene con numeri piccoli. Con numeri grandi è troppo lento: serve un algoritmo che non passi dai divisori. È l'algoritmo di Euclide della prossima lezione, e il suo ingrediente è la divisione con il resto.

::: prova Calcola $\mathrm{MCD}(24, 36)$ e $\mathrm{MCD}(0, -9)$.
12, il più grande tra i divisori comuni 1, 2, 3, 4, 6, 12. E 9: i divisori comuni sono i divisori di −9, e il più grande è 9.
:::

> [!RICORDA]
> - MCD: il più grande divisore comune. Sempre positivo.
> - $\mathrm{MCD}(0, b) = \lvert b \rvert$; con due zeri non è definito.

## La divisione euclidea (teorema 4.5)

Dividere 17 per 5 con il resto vuol dire che il 5 ci sta 3 volte e avanza 2. In formula: $17 = 3 \cdot 5 + 2$. Il resto è più piccolo del divisore, altrimenti il 5 ci starebbe un'altra volta. Il teorema dice che questa scrittura esiste sempre ed è una sola, **anche quando i numeri sono negativi**.

> [!TEOREMA] Divisione euclidea (teorema 4.5)
> Siano $a$ e $b$ interi con $b \ne 0$. Allora esistono e sono unici due interi $q$ e $r$, con $0 \le r < \lvert b \rvert$, per cui
> $$a = qb + r.$$

**Come si legge.** $a$ è il **dividendo**, $b$ il **divisore**, $q$ il **quoziente**, $r$ il **resto**. La condizione sul resto è quella che rende unica la risposta: il resto sta tra 0 e $\lvert b \rvert - 1$, quindi **non è mai negativo**. Il resto è 0 esattamente quando $b$ divide $a$.

Due esempi del libro con numeri positivi: $1903 = 26 \cdot 72 + 31$ e $811 = 7 \cdot 104 + 83$.

### Con i numeri negativi

Per dividere −17 per 5 la tentazione è cambiare il segno al conto di prima: $-17 = (-3) \cdot 5 - 2$. L'uguaglianza è vera, ma il resto −2 è negativo e il teorema non lo accetta. Bisogna scendere di un multiplo in più: $-17 = (-4) \cdot 5 + 3$. Il resto è 3.

```grafico
titolo: La divisione euclidea di −17 per 5 sulla retta dei numeri. I multipli di 5 sono segnati in blu. Il quoziente indica il multiplo subito a sinistra di −17, cioè −20 = (−4)·5; il resto è la distanza da lì a −17, cioè 3. Partendo da −15 il resto sarebbe −2, negativo
x: 0 12.4
y: 0 3.4
assi: no
griglia: no
proporzioni: libere
segmento: 0.6 1.5 11.8 1.5 | grigio
punto: 1.6 1.5 | blu
testo: 1.6 0.9 | blu | "−20"
punto: 4.1 1.5 | blu
testo: 4.1 0.9 | blu | "−15"
punto: 6.6 1.5 | blu
testo: 6.6 0.9 | blu | "−10"
punto: 9.1 1.5 | blu
testo: 9.1 0.9 | blu | "−5"
punto: 11.6 1.5 | blu
testo: 11.6 0.9 | blu | "0"
punto: 3.1 1.5 | accento
testo: 3.1 0.9 | accento | "−17"
freccia: 1.6 2.1 3.1 2.1 | verde
testo: 2.35 2.6 | verde | "resto 3"
testo: 1.6 0.35 | grigio | "(−4)·5"
freccia: 4.1 2.9 3.2 2.9 | rosa | tratteggio
testo: 5.3 2.9 | rosa | "−2: no"
```

La regola: il quoziente porta al multiplo di $b$ **subito a sinistra** di $a$ sulla retta dei numeri, o proprio su $a$ se è un multiplo; il resto è il tratto che manca, percorso verso destra.

> [!METODO] Divisione euclidea con il dividendo negativo
> Per dividere $-a$ per $b$, con $a$ e $b$ positivi:
> 1. dividi $a$ per $b$: $a = qb + r$;
> 2. se $r = 0$, allora $-a = (-q) \cdot b$, con resto 0;
> 3. se $r \ne 0$, allora $-a = (-q - 1) \cdot b + (b - r)$: il quoziente scende di uno e il resto diventa $b - r$.

> [!ESEMPIO] · I due esempi del libro (p. 71)
> **$-827$ diviso 11.** Prima i positivi: $827 = 75 \cdot 11 + 2$. Il resto non è 0, quindi il quoziente è $-75 - 1 = -76$ e il resto $11 - 2 = 9$:
> $$-827 = (-76) \cdot 11 + 9.$$
>
> **$-391$ diviso $-24$.** Prima i positivi: $391 = 16 \cdot 24 + 7$. Con il divisore negativo il quoziente diventa positivo e sale di uno, e il resto è $24 - 7 = 17$:
> $$-391 = 17 \cdot (-24) + 17.$$
>
> Controllo: $(-76) \cdot 11 = -836$, più 9 fa $-827$; $17 \cdot (-24) = -408$, più 17 fa $-391$. I due resti, 9 e 17, sono tra 0 e il valore assoluto del divisore meno uno.

Se è negativo solo il divisore basta cambiare il segno al quoziente: da $17 = 3 \cdot 5 + 2$ viene $17 = (-3) \cdot (-5) + 2$.

> [!TRAPPOLA] In C la divisione tra interi fa un'altra cosa
> In C `-827 / 11` vale **−75** e `-827 % 11` vale **−2**: il C tronca verso lo zero, e il resto prende il segno del dividendo. L'ho provato con gcc. È la scrittura $-827 = (-75) \cdot 11 - 2$, che il teorema non accetta. All'esame di Matematica Discreta il resto è quello del teorema: mai negativo.

> [!DIM] Perché $q$ e $r$ esistono e sono unici (pp. 70–71)
> **Esistenza, con $a \ge 0$ e $b > 0$.** Per induzione su $a$. Se $a < b$ si prende $q = 0$ e $r = a$. Se $a \ge b$, il numero $a - b$ è più piccolo e non negativo, quindi per ipotesi induttiva $a - b = q'b + r'$ con $0 \le r' < b$. Allora $a = (q' + 1)b + r'$. È la divisione fatta togliendo $b$ una volta alla volta.
>
> **Gli altri segni** si riconducono a questo caso, come nel metodo qui sopra.
>
> **Unicità.** Se $a = qb + r = q'b + r'$, con i due resti tra 0 e $b - 1$ e $r \ge r'$, allora $(q' - q)b = r - r'$. Quindi $r - r'$ è un multiplo di $b$ compreso tra 0 e $b - 1$: può essere solo 0. Allora $r = r'$, e di conseguenza $q = q'$.
>
> A p. 70, nel terzo caso dei segni, il libro scrive «$(q + 1) + (-b - r)$»: manca una $b$, va letto $(q + 1)b + (-b - r)$.

::: prova Trova quoziente e resto della divisione euclidea di $-23$ per 6.
$23 = 3 \cdot 6 + 5$, quindi $-23 = (-4) \cdot 6 + 1$: quoziente −4, resto 1. Controllo: $-24 + 1 = -23$.
:::

> [!RICORDA]
> - $a = qb + r$ con $0 \le r < \lvert b \rvert$: $q$ e $r$ esistono e sono unici.
> - Il resto non è mai negativo. Con dividendo negativo: quoziente giù di uno, resto $b - r$.

## Le cifre sono resti: la notazione posizionale (pp. 71–73)

Scrivere 24075 vuol dire: 5 unità, 7 decine, 0 centinaia, 4 migliaia, 2 decine di migliaia. Ogni cifra moltiplica una potenza di 10. Le cifre si ritrovano con la divisione euclidea: dividendo per 10 il resto è l'ultima cifra, e il quoziente è il numero senza l'ultima cifra. Ripetendo sul quoziente escono tutte le cifre, **da destra a sinistra**:

| Divisione | Resto = cifra |
|---|---|
| $24075 = 2407 \cdot 10 + 5$ | 5 |
| $2407 = 240 \cdot 10 + 7$ | 7 |
| $240 = 24 \cdot 10 + 0$ | 0 |
| $24 = 2 \cdot 10 + 4$ | 4 |
| $2 = 0 \cdot 10 + 2$ | 2 |

Il 10 non ha niente di speciale. Al suo posto va bene qualunque intero da 2 in su: è la **base**. In informatica si usano le basi 2, 8 e 16.

> [!DEF] Notazione posizionale in base $b$ (definizione 4.6)
> Sia $b \ge 2$ un intero, la **base**, e siano date $b$ **cifre** che rappresentano i numeri da 0 a $b - 1$. La **notazione posizionale** in base $b$ di un intero $N \ge 0$ è la successione di cifre $c_n \cdots c_2 c_1 c_0$ con
> $$N = c_0 + c_1 b + c_2 b^2 + \dots + c_n b^n.$$

**Come si legge.** La cifra più a destra moltiplica 1, quella prima moltiplica la base, quella prima ancora il quadrato della base, e così via. In base $b$ le cifre vanno da 0 a $b - 1$: in base 2 sono 0 e 1, in base 8 da 0 a 7. Oltre la base 10 le cifre non bastano e si usano le lettere: A vale 10, B vale 11, C vale 12 (nota 4.7). Per dire in che base è scritto un numero si mette la base tra parentesi quadre in basso: $442_{[8]}$ (nota 4.8).

I numeri naturali in base 2 cominciano così: 0, 1, 10, 11, 100, 101, 110, 111, 1000. In base 3: 0, 1, 2, 10, 11, 12, 20, 21, 22, 100.

### Dalla base $b$ alla base 10

Si applica la definizione: ogni cifra per la sua potenza della base, e si somma.

> [!ESEMPIO] · Due esempi del libro (p. 73)
> $31057_{[8]} = 7 \cdot 1 + 5 \cdot 8 + 0 \cdot 8^2 + 1 \cdot 8^3 + 3 \cdot 8^4 = 7 + 40 + 0 + 512 + 12288 = 12847$.
>
> $\mathrm{6A3B}_{[12]} = 11 \cdot 1 + 3 \cdot 12 + 10 \cdot 12^2 + 6 \cdot 12^3 = 11 + 36 + 1440 + 10368 = 11855$. Qui B vale 11 e A vale 10.

### Dalla base 10 alla base $b$

Si fanno le divisioni successive per $b$, come con il 24075, finché il quoziente è 0. I resti, letti **dall'ultimo al primo**, sono le cifre da sinistra a destra.

```grafico
titolo: Il numero 78 in base 2. A ogni riga si divide per 2 il quoziente della riga sopra, e si mette da parte il resto. Quando il quoziente arriva a 0 ci si ferma. I resti si leggono dal basso verso l'alto: 1001110
x: 0 12.4
y: 0 6.0
assi: no
griglia: no
proporzioni: libere
testo: 4.2 5.5 | grigio | "78 = 39 · 2 + 0"
testo: 4.2 4.8 | grigio | "39 = 19 · 2 + 1"
testo: 4.2 4.1 | grigio | "19 = 9 · 2 + 1"
testo: 4.2 3.4 | grigio | "9 = 4 · 2 + 1"
testo: 4.2 2.7 | grigio | "4 = 2 · 2 + 0"
testo: 4.2 2.0 | grigio | "2 = 1 · 2 + 0"
testo: 4.2 1.3 | grigio | "1 = 0 · 2 + 1"
testo: 7.6 5.5 | accento | "0"
testo: 7.6 4.8 | accento | "1"
testo: 7.6 4.1 | accento | "1"
testo: 7.6 3.4 | accento | "1"
testo: 7.6 2.7 | accento | "0"
testo: 7.6 2.0 | accento | "0"
testo: 7.6 1.3 | accento | "1"
freccia: 8.6 1.3 8.6 5.5 | verde
testo: 10.4 3.4 | verde | "si legge dal basso"
testo: 6.2 0.5 | verde | "78 = 1001110 in base 2"
```

Il controllo si fa tornando indietro: $1001110_{[2]} = 64 + 8 + 4 + 2 = 78$.

Altri due esempi del libro: $6342 = 45210_{[6]}$ e $45138 = \mathrm{30A05}_{[11]}$. Nella tabella di p. 73 ci sono due refusi: «$1057 = 17 \cdot 6 + 1$» va letto $176 \cdot 6 + 1$, e nell'ultima riga della base 11 «$3 = 0 \cdot 6 + 3$» va letto $0 \cdot 11 + 3$.

Per passare da una base a un'altra, tutte e due diverse da 10, il libro consiglia di fare due passi: prima alla base 10, poi alla base di arrivo.

> [!TRAPPOLA] L'ordine dei resti
> Il primo resto che si trova è la cifra **più a destra**. Scrivere i resti nell'ordine in cui escono dà il numero rovesciato: per 78 verrebbe 0111001, che è 57.

::: prova Scrivi 100 in base 3, e controlla.
$100 = 33 \cdot 3 + 1$, $33 = 11 \cdot 3 + 0$, $11 = 3 \cdot 3 + 2$, $3 = 1 \cdot 3 + 0$, $1 = 0 \cdot 3 + 1$. Dal basso: $10201_{[3]}$. Controllo: $81 + 0 + 18 + 0 + 1 = 100$.
:::

> [!RICORDA]
> - Da base $b$ a base 10: cifre per potenze di $b$, e si somma.
> - Da base 10 a base $b$: divisioni successive per $b$; i resti si leggono dall'ultimo al primo.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\mathbb{Z}$ | «zeta» | l'insieme dei numeri interi | $-3 \in \mathbb{Z}$ |
| $a \mid b$ | «a divide b» | esiste un intero $k$ con $b = ka$ | $4 \mid 20$ |
| $\mathrm{MCD}(a, b)$ | «massimo comun divisore» | il più grande divisore comune | $\mathrm{MCD}(12, 18) = 6$ |
| $\lvert b \rvert$ | «valore assoluto di b» | $b$ senza il segno | $\lvert -24 \rvert = 24$ |
| $a = qb + r$ | «a uguale q per b più r» | divisione euclidea, con $0 \le r < \lvert b \rvert$ | $-17 = (-4) \cdot 5 + 3$ |
| $c_n \cdots c_1 c_{0\,[b]}$ | «in base b» | notazione posizionale | $442_{[8]} = 290$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Le regole del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **Una domanda del quiz sui cambi di base**: «qual è la scrittura in base 2 di…» (quiz 2021–25, domanda 6), «di quale numero è la scrittura in base 8, o in base 6» (06/06/2025 e 07/07/2025, domanda 7).
2. **La divisione euclidea** è il passo che si ripete nell'algoritmo di Euclide: il problema su massimo comun divisore e identità di Bézout c'è in quasi tutti gli appelli, ed è della prossima lezione.
3. **La proposizione 4.2** nelle domande che chiedono di spiegare: un divisore comune divide la differenza (prove scritte del 2021/22).
4. Più avanti il resto della divisione diventa il centro del corso, con le congruenze.

### Una domanda vera, letta insieme

**Appello del 06/06/2025, quiz, domanda 7 (una delle versioni).** Il testo: «Di quale numero intero $442_{[8]}$ è la scrittura in base 8? 1. 222; 2. 241; 3. 290; 4. 307; 5. 315.»

**In pratica chiede:** passare dalla base 8 alla base 10.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: le potenze di 8.** Da destra: 1, 8, 64.
>
> **Passo 2: cifre per potenze.** $2 \cdot 1 + 4 \cdot 8 + 4 \cdot 64 = 2 + 32 + 256 = 290$.
>
> **Passo 3: controllo all'indietro.** $290 = 36 \cdot 8 + 2$, $36 = 4 \cdot 8 + 4$, $4 = 0 \cdot 8 + 4$: dal basso, 442.
>
> La risposta è la 3, come nella soluzione ufficiale. Nelle altre versioni: $473_{[8]} = 315$, $336_{[8]} = 222$, $361_{[8]} = 241$.

### Un'altra domanda vera

> [!ESEMPIO] · Esame del 2018 (riepilogo), esercizio 3, punto a
> «Scrivere il numero 15497 in base 8.»
>
> **Soluzione.** Divisioni successive per 8, fino al quoziente 0:
>
> $15497 = 1937 \cdot 8 + 1$
>
> $1937 = 242 \cdot 8 + 1$
>
> $242 = 30 \cdot 8 + 2$
>
> $30 = 3 \cdot 8 + 6$
>
> $3 = 0 \cdot 8 + 3$
>
> Dal basso: $15497 = 36211_{[8]}$, come nella soluzione ufficiale.

### Errori da evitare

- Dare un resto negativo con un dividendo negativo.
- Leggere i resti dall'alto invece che dal basso.
- Usare in una base una cifra che non esiste: in base 6 non c'è il 6.
- Dire che 0 divide un numero diverso da 0, o che 1 è primo.
- Confondere $a \mid b$ con la frazione.

## Quiz

```quiz
D: Appello del 07/07/2025, quiz, domanda 7 (una delle versioni). Di quale dei numeri seguenti $2023_{[6]}$ è la scrittura in base 6?
- 308
- 391
- 425
+ 447
- 470
= $3 + 2 \cdot 6 + 0 \cdot 36 + 2 \cdot 216 = 3 + 12 + 432 = 447$. È la risposta 4 della soluzione ufficiale. La più insidiosa è 470, che è $2102_{[6]}$, la domanda di un'altra versione.

D: Quiz 2021–25, domanda 6 (una delle versioni). La scrittura in base 2 di 78 è:
- 1010100
- 1011010
+ 1001110
- 1101000
- 1100010
= Divisioni per 2: resti 0, 1, 1, 1, 0, 0, 1, letti dal basso 1001110. Controllo: $64 + 8 + 4 + 2 = 78$. È la risposta 3 della soluzione ufficiale. Le altre sono 84, 90, 104 e 98, le domande delle altre versioni.

D: Appello del 06/06/2025, quiz, domanda 7 (una delle versioni). Di quale numero intero $473_{[8]}$ è la scrittura in base 8?
- 222
- 241
- 290
- 307
+ 315
= $3 + 7 \cdot 8 + 4 \cdot 64 = 3 + 56 + 256 = 315$. È la risposta 5 della soluzione ufficiale. La più insidiosa è 307, che viene contando $7 \cdot 8$ come 48.

D: Quali sono il quoziente e il resto della divisione euclidea di $-17$ per 5?
+ quoziente $-4$, resto 3
- quoziente $-3$, resto $-2$
- quoziente $-3$, resto 2
- quoziente $-4$, resto $-3$
- quoziente 3, resto $-2$
= $(-4) \cdot 5 + 3 = -17$, con il resto tra 0 e 4. La più insidiosa è la seconda: l'uguaglianza $(-3) \cdot 5 - 2 = -17$ è vera, ma il resto è negativo. È quello che calcola il C.

D: Quale affermazione è vera?
+ ogni intero divide 0
- 0 divide ogni intero
- 1 è un numero primo
- $\mathrm{MCD}(0, 0) = 0$
- se $a$ divide $b$, allora $b$ divide $a$
= $n \cdot 0 = 0$ per ogni $n$. La più insidiosa è la seconda, che scambia i ruoli: 0 divide solo 0. 1 è escluso dalla definizione di primo, e il MCD di due zeri non è definito.

D: Quanto vale $\mathrm{MCD}(0, -9)$?
N: 9
= I divisori comuni sono i divisori di $-9$, e il più grande è 9: il MCD è sempre positivo.

D: Perché 6 non è primo, secondo la definizione 4.3?
+ perché divide $3 \cdot 10$ senza dividere né 3 né 10
- perché è pari
- perché $6 = 6 \cdot 1$
- perché non divide 30
- perché ha un divisore negativo
= Primo vuol dire: se divide un prodotto, divide un fattore. La più insidiosa è la terza: $6 \cdot 1$ usa un invertibile e non dice niente; per mostrare che 6 è **riducibile** servirebbe $6 = 2 \cdot 3$.

D: Un intero $d$ divide $n$ e divide $n + 5$. Che cosa si può concludere?
+ $d$ divide 5
- $d = 5$
- $d$ divide $n^2 + 5$
- $d = 1$
- $d$ è primo
= Per la proposizione 4.2 un divisore comune divide la differenza, che è 5. Quindi $d$ è 1, −1, 5 o −5. La più insidiosa è «$d = 5$»: può anche essere 1.
```

## Esercizi

::: esercizio base Riscaldamento: divisori e MCD
Elenca i divisori positivi di 28 e di 100, e calcola $\mathrm{MCD}(28, 100)$ e $\mathrm{MCD}(15, -40)$.
::: soluzione
Divisori di 28: 1, 2, 4, 7, 14, 28. Di 100: 1, 2, 4, 5, 10, 20, 25, 50, 100. In comune 1, 2, 4: il MCD è 4. Per 15 e −40 il segno non conta: i divisori comuni positivi sono 1 e 5, quindi 5. Sono i due esempi del libro.
:::

::: esercizio base Riscaldamento: divisioni euclidee
Trova quoziente e resto di: (a) 100 per 7; (b) $-100$ per 7; (c) 23 per $-6$; (d) $-45$ per 9.
::: soluzione
(a) $100 = 14 \cdot 7 + 2$. (b) Il resto di prima non è 0: quoziente $-15$, resto $7 - 2 = 5$; controllo $-105 + 5 = -100$. (c) $23 = 3 \cdot 6 + 5$, quindi $23 = (-3) \cdot (-6) + 5$. (d) $-45 = (-5) \cdot 9 + 0$: resto 0, perché 9 divide 45. Controllati con un programma.
:::

::: esercizio base Riscaldamento: cambi di base
(a) Scrivi 156 in base 5. (b) Scrivi 300 in base 7. (c) Quanto vale $2143_{[5]}$ in base 10?
::: soluzione
(a) $156 = 31 \cdot 5 + 1$, $31 = 6 \cdot 5 + 1$, $6 = 1 \cdot 5 + 1$, $1 = 0 \cdot 5 + 1$: $1111_{[5]}$. (b) $300 = 42 \cdot 7 + 6$, $42 = 6 \cdot 7 + 0$, $6 = 0 \cdot 7 + 6$: $606_{[7]}$. (c) $3 + 4 \cdot 5 + 1 \cdot 25 + 2 \cdot 125 = 298$. Controllati con un programma.
:::

::: esercizio medio Una base con le lettere
Scrivi 2026 in base 16, e $\mathrm{1A5}_{[12]}$ in base 10.
::: soluzione
$2026 = 126 \cdot 16 + 10$, $126 = 7 \cdot 16 + 14$, $7 = 0 \cdot 16 + 7$. I resti 10 e 14 sono le cifre A ed E: $\mathrm{7EA}_{[16]}$. Poi $\mathrm{1A5}_{[12]} = 5 + 10 \cdot 12 + 1 \cdot 144 = 269$.
:::

::: esercizio esame Prova scritta del 2021/22, problema 2, punto 2
Dimostrare che per ogni intero $n \ge 1$ si ha $\mathrm{MCD}(n, n^2 + 1) = 1$.
::: soluzione
Prendo un divisore comune positivo $d$ di $n$ e di $n^2 + 1$. Se $d$ divide $n$, divide anche $n^2 = n \cdot n$. Allora $d$ divide $n^2 + 1$ e uno dei due addendi, $n^2$: per la proposizione 4.2 divide anche l'altro, che è 1. L'unico divisore positivo di 1 è 1, quindi $d = 1$. La soluzione ufficiale usa la divisione euclidea di $n^2 + 1$ per $n$, che ha quoziente $n$ e resto 1: è lo stesso fatto, visto con l'algoritmo della prossima lezione.
:::

::: esercizio difficile Gli unici che dividono tutto
Dimostra che se un intero $n$ divide ogni intero, allora $n = 1$ oppure $n = -1$.
::: soluzione
Se $n$ divide ogni intero, in particolare divide 1: esiste $k$ con $nk = 1$. Quindi $n$ è invertibile, e gli unici invertibili sono 1 e −1. Il libro lo dice in un altro modo: se $n$ non è 1 né −1, allora $n$ non divide $n + 1$. Infatti se dividesse $n$ e $n + 1$ dividerebbe la differenza, 1.
:::

## Domande di ripasso

::: domanda Che cosa vuol dire che $a$ divide $b$?
Che esiste un intero $k$ con $b = ka$.
:::

::: domanda Quali interi sono invertibili per il prodotto?
Solo 1 e −1.
:::

::: domanda Che differenza c'è tra irriducibile e primo, nelle definizioni?
Irriducibile: non si scrive come prodotto di due non invertibili. Primo: se divide un prodotto, divide almeno un fattore.
:::

::: domanda Perché il MCD di due interi non entrambi nulli è sempre positivo?
Perché 1 è sempre un divisore comune, e il MCD è il più grande dei divisori comuni.
:::

::: domanda Che condizione ha il resto nella divisione euclidea?
È compreso tra 0 e il valore assoluto del divisore meno uno: mai negativo.
:::

::: domanda Come si trovano le cifre di un numero in base $b$?
Con divisioni successive per $b$, fino al quoziente 0: i resti, letti dall'ultimo al primo, sono le cifre.
:::

## Glossario

```glossario
Opposto | L'inverso di un intero rispetto alla somma: l'opposto di a è −a.
Invertibile | Intero che ha un inverso intero rispetto al prodotto: solo 1 e −1.
Divisore | a è un divisore di b se b è a per un intero; si scrive a | b.
Irriducibile | Intero diverso da 0, 1, −1 che non è prodotto di due interi non invertibili.
Primo | Intero diverso da 0, 1, −1 che, se divide un prodotto, divide almeno un fattore.
Massimo comun divisore | Il più grande intero che divide due interi dati, non entrambi nulli.
Divisione euclidea | La scrittura a = qb + r con resto r tra 0 e |b| − 1.
Quoziente e resto | I numeri q e r della divisione euclidea.
Base | L'intero b ≥ 2 le cui potenze danno il peso delle cifre nella notazione posizionale.
Notazione posizionale | Scrittura di un numero come successione di cifre, ognuna moltiplicata per una potenza della base.
```

## Checklist

```checklist
- So che cosa vuol dire «a divide b» e so i casi con 0, 1 e −1.
- So usare la proposizione 4.2: un divisore comune divide somma e differenza.
- So le definizioni di irriducibile, riducibile e primo, con un esempio per ognuna.
- So calcolare il MCD elencando i divisori, e so quanto vale con lo zero.
- So fare la divisione euclidea anche con dividendo o divisore negativi.
- So perché il resto è unico e non è mai negativo.
- So passare da una base qualsiasi alla base 10.
- So passare dalla base 10 a un'altra base con le divisioni successive.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta* (testo del canale B), cap. 4 «I numeri interi», pp. 67–73: operazioni e divisibilità (definizione 4.1, proposizione 4.2), definizione 4.3 con i tre esempi, definizione 4.4, sezione «La divisione euclidea» (teorema 4.5 con la dimostrazione e gli esempi con i numeri negativi), notazione posizionale (definizione 4.6, note 4.7 e 4.8, cambi di base con le tabelle). Refusi alle pp. 70 e 73.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori), lezione 14: «Struttura additiva dei numeri interi. Divisibilità e divisori. Massimo comun divisore. Numeri invertibili, irriducibili e primi. Divisione euclidea»; lezione 15 per l'algoritmo del massimo comun divisore.
- Appelli di Matematica Discreta (Moodle MDAG1 2025/26, aperto agli ospiti), con le soluzioni ufficiali: quiz 2021–25 (domanda 6), del 06/06/2025 e del 07/07/2025 (domanda 7); prove scritte del 2021/22 (problema 2: $\mathrm{MCD}(n, n + 3)$ e $\mathrm{MCD}(n, n^2 + 1)$); riepilogo degli esami del 2018 (esercizio 3).
- Gli esempi con 17 e 5, con 12 e 18, il confronto con il C, i quiz senza data e gli esercizi di riscaldamento sono di questi appunti. Divisioni, massimi comun divisori e cambi di base li ho controllati con un programma.
