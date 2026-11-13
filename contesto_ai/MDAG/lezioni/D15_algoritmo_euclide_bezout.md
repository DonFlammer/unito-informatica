---
corso: MDAG
modulo: MD
lezione: D15
titolo: L'algoritmo di Euclide e l'identità di Bézout
data: 2026-11-11
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D15
descrizione: >-
  Appunti della lezione D15 di Matematica Discreta (MDAG, parte 1, canali A, B e C): la proposizione 4.9 sui divisori
  comuni, l'algoritmo di Euclide per il massimo comun divisore, l'identità di Bézout e il modo di ricavarla risalendo
  le divisioni, quali numeri si scrivono come combinazione di due interi, con i problemi d'esame degli appelli
  2019–2026.
lede: >-
  Il massimo comun divisore di due numeri grandi non si trova elencando i divisori: si trova con una catena di
  divisioni con il resto. La stessa catena, letta al contrario, scrive il massimo comun divisore come combinazione
  dei due numeri. È il conto più richiesto nei problemi d'esame di questa parte del corso.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 4, pp. 73–76
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 4 «I numeri interi», pp. 73–76 (proposizione 4.9
  con la dimostrazione, algoritmo per il massimo comun divisore con i due esempi, teorema 4.10 con la dimostrazione,
  note 4.11 e 4.12, esercizio 4.2); diario delle lezioni del canale B 2025/26, lezione 15; appelli di Matematica
  Discreta 2019–2026
appunti_html: appunti/MDAG/D15_algoritmo_euclide_bezout.html
genera_html: true
---

## In breve

- Se si divide un numero per un altro, i **divisori comuni** dei due numeri sono gli stessi del divisore e del resto. Quindi anche il massimo comun divisore è lo stesso.
- **Algoritmo di Euclide**: si divide, poi si divide il divisore per il resto, e così via. I resti calano a ogni passo, quindi prima o poi arriva il resto zero.
- Il massimo comun divisore è l'**ultimo resto diverso da zero**.
- **Identità di Bézout**: il massimo comun divisore di due interi si scrive sempre come un multiplo intero del primo più un multiplo intero del secondo. Per 84 e 30: $6 = 3 \cdot 30 - 84$.
- I due moltiplicatori si trovano **risalendo** le divisioni dell'algoritmo, dall'ultima alla prima. Di solito uno dei due è negativo.
- Le combinazioni di due interi sono esattamente i multipli del loro massimo comun divisore. Per questo un'equazione $ax + by = c$ ha soluzioni intere solo quando il massimo comun divisore divide il termine noto.
- I due moltiplicatori non sono unici: ce ne sono infinite coppie.
- All'esame: «calcolare il massimo comun divisore ed esprimerlo con l'identità di Bézout» è il primo punto di un problema in molti appelli. Lo stesso conto servirà per gli inversi modulo $N$.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di mercoledì 11/11/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la quindicesima lezione era «Algoritmo per il calcolo del MCD. Esempi. Identità di Bezout. Esempi». Nel libro sono le pp. 73–76. Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> Serve la [D14](D14_interi_divisibilita_divisione_euclidea.html): divisibilità, massimo comun divisore e divisione euclidea. La lezione successiva del diario è il teorema fondamentale dell'aritmetica, nella [D16](D16_primi_teorema_fondamentale_aritmetica.html).
>
> **Un refuso del libro.** A p. 74, nella dimostrazione della proposizione 4.9, c'è scritto «$\delta\alpha = qd\beta + r$»: la $d$ è una $\delta$.

## I divisori comuni dopo una divisione (prop. 4.9)

Per trovare il massimo comun divisore di 84 e 30 si possono elencare i divisori dei due numeri e cercare il più grande in comune. Con numeri di quattro cifre questa strada è troppo lunga. Ce n'è un'altra, che parte da una divisione.

Divido 84 per 30: $84 = 2 \cdot 30 + 24$. Ora confronto due coppie di numeri.

| Coppia | Divisori comuni positivi |
|---|---|
| 84 e 30 | 1, 2, 3, 6 |
| 30 e 24 | 1, 2, 3, 6 |

Sono gli stessi. Non è un caso: un numero che divide 84 e 30 divide anche $84 - 2 \cdot 30 = 24$, perché un divisore comune divide differenze e multipli (proposizione 4.2 della [D14](D14_interi_divisibilita_divisione_euclidea.html)). E un numero che divide 30 e 24 divide anche $2 \cdot 30 + 24 = 84$.

Il guadagno: al posto della coppia 84 e 30 c'è la coppia 30 e 24, con numeri più piccoli, e il massimo comun divisore è lo stesso.

> [!PROP] Proposizione 4.9
> Siano $a$ e $b$ due numeri interi con $b \ne 0$, e sia $a = qb + r$. Allora i divisori comuni di $a$ e $b$ sono gli stessi di $b$ e $r$. In particolare
> $$\mathrm{MCD}(a, b) = \mathrm{MCD}(b, r).$$

**Come si legge.** $a$ è il dividendo, $b$ il divisore, $q$ il quoziente, $r$ il resto. La proposizione dice che nel calcolo del massimo comun divisore si può buttare via il dividendo e tenere divisore e resto. Vale per qualunque uguaglianza $a = qb + r$: non serve nemmeno che $r$ sia il resto «giusto», tra 0 e $\lvert b \rvert$.

> [!DIM]- Perché vale
> **Da $a$ e $b$ a $r$.** Prendo un divisore comune $\delta$ di $a$ e $b$: $a = \delta\alpha$ e $b = \delta\beta$, con $\alpha$ e $\beta$ interi. Allora $r = a - qb = \delta\alpha - q\delta\beta = \delta(\alpha - q\beta)$, e $\delta$ divide $r$.
>
> **Da $b$ e $r$ ad $a$.** Prendo un divisore comune $\delta$ di $b$ e $r$: $b = \delta\beta$ e $r = \delta\rho$. Allora $a = qb + r = \delta(q\beta + \rho)$, e $\delta$ divide $a$.
>
> I due insiemi di divisori comuni coincidono, quindi hanno lo stesso massimo.

> [!ESAME] Quiz 2021–25, primo quiz
> «Posto che $111268 = 256 \cdot 434 + 164$, si ha: a. $\mathrm{MCD}(111268, 434) = 256$; b. $\mathrm{MCD}(111268, 434) = \mathrm{MCD}(434, 164)$; c. $\mathrm{MCD}(111268, 434) = 164$; d. $\mathrm{MCD}(111268, 434) = \mathrm{MCD}(111268, 164)$; e. $\mathrm{MCD}(111268, 434) = \mathrm{MCD}(256, 164)$.»
>
> È la proposizione 4.9 con $a = 111268$, $b = 434$, $r = 164$: si tengono **divisore e resto**. La risposta è la **b**. Il quoziente 256 non c'entra. Controllo con un programma: tutti e due i massimi comun divisori valgono 2.

::: prova Sapendo che $1000 = 3 \cdot 320 + 40$, a quale massimo comun divisore con numeri più piccoli è uguale $\mathrm{MCD}(1000, 320)$? Quanto vale?
A $\mathrm{MCD}(320, 40)$, che vale 40, perché 40 divide 320.
:::

> [!RICORDA]
> - Da $a = qb + r$: $\mathrm{MCD}(a, b) = \mathrm{MCD}(b, r)$.
> - Si tengono divisore e resto; dividendo e quoziente si lasciano.

## L'algoritmo di Euclide (pp. 74–75)

La proposizione 4.9 si può usare più volte di fila. Dopo la prima divisione restano divisore e resto: si divide il primo per il secondo, e si va avanti così.

Con 84 e 30:

$$\begin{aligned} 84 &= 2 \cdot 30 + 24 \\ 30 &= 1 \cdot 24 + 6 \\ 24 &= 4 \cdot 6 + 0 \end{aligned}$$

A ogni riga la proposizione 4.9 dà un'uguaglianza: $\mathrm{MCD}(84, 30) = \mathrm{MCD}(30, 24) = \mathrm{MCD}(24, 6) = \mathrm{MCD}(6, 0) = 6$. L'ultimo passaggio viene dalla [D14](D14_interi_divisibilita_divisione_euclidea.html): il massimo comun divisore di un numero e di 0 è il numero stesso.

```grafico
titolo: Le divisioni dell'algoritmo di Euclide per 84 e 30. A ogni riga il divisore scende al posto del dividendo (frecce blu) e il resto scende al posto del divisore (frecce ambra). L'ultimo resto diverso da zero, 6 (in verde), è il massimo comun divisore
x: 0 12.4
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
testo: 2.6 3.8 | grigio | "84"
testo: 4.0 3.8 | grigio | "= 2 ·"
testo: 5.4 3.8 | blu | "30"
testo: 6.5 3.8 | grigio | "+"
testo: 7.6 3.8 | ambra | "24"
testo: 2.6 2.3 | blu | "30"
testo: 4.0 2.3 | grigio | "= 1 ·"
testo: 5.4 2.3 | ambra | "24"
testo: 6.5 2.3 | grigio | "+"
testo: 7.6 2.3 | verde | "6"
testo: 2.6 0.8 | ambra | "24"
testo: 4.0 0.8 | grigio | "= 4 ·"
testo: 5.4 0.8 | verde | "6"
testo: 6.5 0.8 | grigio | "+"
testo: 7.6 0.8 | grigio | "0"
freccia: 5.2 3.5 2.9 2.6 | blu
freccia: 7.4 3.5 5.7 2.6 | ambra
freccia: 5.2 2.0 2.9 1.1 | ambra
freccia: 7.4 2.0 5.7 1.1 | verde
testo: 10.2 2.3 | verde | "ultimo resto non nullo"
testo: 10.2 0.8 | grigio | "resto 0: fine"
```

**Perché finisce sempre.** I resti di una divisione euclidea sono minori del divisore e non negativi. Nella catena ogni resto diventa il divisore della riga dopo, quindi i resti calano: $24 > 6 > 0$. Una fila di interi non negativi che cala a ogni passo arriva a zero.

> [!METODO] L'algoritmo di Euclide per $\mathrm{MCD}(a, b)$
> 1. Dividi $a$ per $b$: $a = q_1 b + r_1$.
> 2. Dividi il divisore per il resto: $b = q_2 r_1 + r_2$. Poi $r_1 = q_3 r_2 + r_3$, e così via.
> 3. Fermati quando il resto è 0.
> 4. Il massimo comun divisore è il resto della riga **prima**: l'ultimo diverso da zero.
> 5. Tieni scritte tutte le righe: servono per l'identità di Bézout.

I due esempi del libro, uno con massimo comun divisore 21 e uno con massimo comun divisore 1:

$$\begin{aligned} 5355 &= 8 \cdot 651 + 147 \\ 651 &= 4 \cdot 147 + 63 \\ 147 &= 2 \cdot 63 + 21 \\ 63 &= 3 \cdot 21 + 0 \end{aligned} \qquad\qquad \begin{aligned} 3575 &= 5 \cdot 654 + 305 \\ 654 &= 2 \cdot 305 + 44 \\ 305 &= 6 \cdot 44 + 41 \\ 44 &= 1 \cdot 41 + 3 \\ 41 &= 13 \cdot 3 + 2 \\ 3 &= 1 \cdot 2 + 1 \\ 2 &= 2 \cdot 1 + 0 \end{aligned}$$

Quindi $\mathrm{MCD}(5355, 651) = 21$ e $\mathrm{MCD}(3575, 654) = 1$. Due numeri con massimo comun divisore 1 si chiamano **coprimi**, o primi tra loro: non hanno divisori comuni a parte 1 e $-1$. Nei testi d'esame il massimo comun divisore è scritto anche $(a, b)$, senza la sigla.

> [!TRAPPOLA] Il massimo comun divisore non è l'ultima riga
> Nell'ultima riga il resto è 0. Il massimo comun divisore è il resto della riga prima, che nell'ultima riga compare come divisore. Se la prima divisione ha già resto 0, il massimo comun divisore è il divisore: $\mathrm{MCD}(320, 40) = 40$.

::: prova Calcola $\mathrm{MCD}(252, 198)$ con l'algoritmo di Euclide.
$252 = 1 \cdot 198 + 54$, $198 = 3 \cdot 54 + 36$, $54 = 1 \cdot 36 + 18$, $36 = 2 \cdot 18 + 0$. Il massimo comun divisore è 18.
:::

> [!RICORDA]
> - Dividi, poi dividi il divisore per il resto, fino al resto 0.
> - Il massimo comun divisore è l'ultimo resto diverso da zero.
> - Massimo comun divisore 1: numeri coprimi.

## L'identità di Bézout (teorema 4.10)

Le righe dell'algoritmo contengono un'informazione in più. Ogni riga si può girare per isolare il resto, e così il massimo comun divisore si scrive usando i due numeri di partenza.

Con 84 e 30 le righe con resto diverso da zero sono due:

$$24 = 84 - 2 \cdot 30, \qquad 6 = 30 - 1 \cdot 24.$$

Parto dalla seconda, quella che ha il massimo comun divisore a sinistra, e al posto di 24 metto quello che dice la prima:

$$6 = 30 - (84 - 2 \cdot 30) = 3 \cdot 30 - 84.$$

Il 6 è scritto come «tre volte 30, meno una volta 84». Controllo: $90 - 84 = 6$.

> [!TEOREMA] Teorema 4.10 (identità di Bézout)
> Siano $a$ e $b$ due numeri interi e sia $d = \mathrm{MCD}(a, b)$. Allora esistono numeri interi $A$ e $B$ con
> $$d = aA + bB.$$

**Come si legge.** $A$ e $B$ sono i due moltiplicatori: quante volte prendere $a$ e quante volte prendere $b$. Sono interi, e quasi sempre uno dei due è negativo. Per 84 e 30: $A = -1$ e $B = 3$. Il teorema dice che esistono; l'algoritmo dice come trovarli.

Il procedimento si chiama **risalire** le divisioni, e nel libro è «procedere a ritroso». Con il primo esempio del libro, $\mathrm{MCD}(5355, 651) = 21$, i resti isolati sono:

$$147 = 5355 - 8 \cdot 651, \qquad 63 = 651 - 4 \cdot 147, \qquad 21 = 147 - 2 \cdot 63.$$

> [!ESEMPIO] · L'identità di Bézout per 5355 e 651 (libro, p. 76)
> **Parto dall'ultima riga con resto non nullo.** $21 = 147 - 2 \cdot 63$.
>
> **Sostituisco il resto più piccolo, 63.** $21 = 147 - 2 \cdot (651 - 4 \cdot 147)$. Raccolgo i 147: sono $1 + 8 = 9$. Quindi $21 = 9 \cdot 147 - 2 \cdot 651$.
>
> **Sostituisco 147.** $21 = 9 \cdot (5355 - 8 \cdot 651) - 2 \cdot 651$. Raccolgo i 651: sono $-72 - 2 = -74$.
>
> **Risultato.** $21 = 9 \cdot 5355 - 74 \cdot 651$, cioè $A = 9$ e $B = -74$.
>
> **Controllo.** $9 \cdot 5355 = 48195$ e $74 \cdot 651 = 48174$: la differenza è 21.

> [!METODO] Risalire le divisioni
> 1. Riscrivi ogni riga dell'algoritmo, tranne l'ultima, con il resto isolato: resto = dividendo − quoziente · divisore.
> 2. Parti dalla riga che ha il massimo comun divisore a sinistra.
> 3. Sostituisci il resto **più piccolo** che compare a destra con la sua riga.
> 4. Raccogli: a destra devono restare sempre e solo due numeri della catena, ognuno con il suo coefficiente.
> 5. Ripeti fino a quando a destra ci sono $a$ e $b$.
> 6. Controlla il risultato facendo il conto.

> [!TRAPPOLA] Non fare le moltiplicazioni per strada
> Se in $9 \cdot 147 - 2 \cdot 651$ calcoli $9 \cdot 147 = 1323$, il 147 sparisce e non si può più sostituire. I numeri della catena vanno lasciati scritti come sono: si lavora solo sui coefficienti. L'altro errore frequente è un segno perso davanti a una parentesi.

Il secondo esempio del libro ha più righe, ma il procedimento è lo stesso. Il risultato è $1 = 1219 \cdot 654 - 223 \cdot 3575$; i passaggi sono nell'esercizio 3.

::: prova Scrivi l'identità di Bézout per 252 e 198, usando le divisioni del «Prova tu» di prima.
$18 = 54 - 36 = 54 - (198 - 3 \cdot 54) = 4 \cdot 54 - 198 = 4 \cdot (252 - 198) - 198 = 4 \cdot 252 - 5 \cdot 198$. Controllo: $1008 - 990 = 18$.
:::

> [!RICORDA]
> - $d = aA + bB$ con $A$ e $B$ interi: esistono sempre.
> - Si trovano risalendo le divisioni, sostituendo un resto alla volta.
> - Mai svolgere i prodotti durante la risalita; alla fine, il controllo.

## Le combinazioni di due interi (note 4.11 e 4.12)

Un multiplo intero di un numero più un multiplo intero di un altro si chiama **combinazione** dei due numeri: in simboli $aA + bB$, con $A$ e $B$ interi. L'identità di Bézout dice che il massimo comun divisore è una combinazione. Quali altri numeri lo sono?

Prendo 9 e 6, che hanno massimo comun divisore 3. Qualunque combinazione $9A + 6B$ è un multiplo di 3, perché 3 divide tutti e due gli addendi: non si otterrà mai 4 o 7. Nell'altro verso, da $3 = 9 - 6$ si ottiene ogni multiplo di 3 moltiplicando: $12 = 4 \cdot 9 - 4 \cdot 6$.

```grafico
titolo: Le combinazioni di 9 e 6 sulla retta. Con un salto di 9 in avanti (blu) e uno di 6 indietro (ambra) si arriva a 3, il massimo comun divisore. Ripetendo si raggiungono tutti i multipli di 3 (in verde) e nessun altro numero (in grigio)
x: -0.8 13
y: 0 3.4
assi: no
griglia: no
proporzioni: libere
segmento: -0.4 1.0 12.6 1.0 | grigio
punto: 0 1.0 | verde
testo: 0 0.45 | verde | "0"
punto: 1 1.0 | grigio
punto: 2 1.0 | grigio
punto: 3 1.0 | verde
testo: 3 0.45 | verde | "3"
punto: 4 1.0 | grigio
punto: 5 1.0 | grigio
punto: 6 1.0 | verde
testo: 6 0.45 | verde | "6"
punto: 7 1.0 | grigio
punto: 8 1.0 | grigio
punto: 9 1.0 | verde
testo: 9 0.45 | verde | "9"
punto: 10 1.0 | grigio
punto: 11 1.0 | grigio
punto: 12 1.0 | verde
testo: 12 0.45 | verde | "12"
freccia: 0 1.3 9 1.3 | blu
testo: 4.5 1.75 | blu | "+ 9"
freccia: 9 2.3 3 2.3 | ambra
testo: 6 2.75 | ambra | "− 6"
```

In generale, con $d = \mathrm{MCD}(a, b)$:

- **ogni combinazione è un multiplo di $d$** (nota 4.11): $d$ divide $a$ e $b$, quindi divide $aA + bB$;
- **ogni multiplo di $d$ è una combinazione**: se $d = aA + bB$, allora $kd = a(kA) + b(kB)$.

Da qui la regola che all'esame serve subito.

> [!PROP] Quando $ax + by = c$ ha soluzioni intere
> Siano $a$, $b$, $c$ interi, con $a$ e $b$ non tutti e due nulli, e sia $d = \mathrm{MCD}(a, b)$. L'equazione $ax + by = c$ ha soluzioni intere $x$, $y$ esattamente quando $d$ divide $c$.

**Come si legge.** Si calcola il massimo comun divisore e si guarda se divide il termine noto. Se non lo divide, niente soluzioni, e non serve altro. Se lo divide, una soluzione si ottiene dall'identità di Bézout moltiplicata per $\frac{c}{d}$. Nel libro questa regola non ha un numero: è la nota 4.11 più la moltiplicazione scritta sopra.

**Le coppie non sono uniche** (nota 4.12). L'algoritmo dà una coppia $A$, $B$, ma ce ne sono infinite. Per 3 e 2, che hanno massimo comun divisore 1:

$$1 = 3 - 2 = 3 \cdot 3 - 4 \cdot 2 = 5 \cdot 3 - 7 \cdot 2 = 7 \cdot 3 - 10 \cdot 2.$$

Ogni volta si aggiungono due 3 e si tolgono tre 2: si aggiunge e si toglie 6. All'esame va bene qualunque coppia giusta, quindi il tuo risultato può essere diverso da quello della soluzione ufficiale: conta il controllo.

> [!TRAPPOLA] Una combinazione che dà $c$ non dice che $c$ è il massimo comun divisore
> $12 = 4 \cdot 9 - 4 \cdot 6$, ma il massimo comun divisore di 9 e 6 è 3. Da $aA + bB = c$ si ricava solo che il massimo comun divisore **divide** $c$. C'è un caso in cui si conclude di più: se $aA + bB = 1$, il massimo comun divisore divide 1, quindi è 1, e i due numeri sono coprimi.

::: prova L'equazione $84x + 30y = 15$ ha soluzioni intere? E $84x + 30y = 18$?
$\mathrm{MCD}(84, 30) = 6$. Il 6 non divide 15: nessuna soluzione. Divide 18: da $6 = 3 \cdot 30 - 84$, moltiplicando per 3, $18 = 9 \cdot 30 - 3 \cdot 84$, cioè $x = -3$, $y = 9$.
:::

> [!RICORDA]
> - Le combinazioni di $a$ e $b$ sono esattamente i multipli del loro massimo comun divisore.
> - $ax + by = c$ ha soluzioni intere quando il massimo comun divisore divide $c$.
> - $aA + bB = 1$ vuol dire coprimi.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\mathrm{MCD}(a, b)$, $(a, b)$ | «massimo comun divisore di a e b» | il più grande divisore comune | $\mathrm{MCD}(84, 30) = 6$ |
| $a = qb + r$ | «a uguale q per b più r» | divisione di $a$ per $b$, con quoziente $q$ e resto $r$ | $84 = 2 \cdot 30 + 24$ |
| $r_1, r_2, \dots$ | «erre uno, erre due» | i resti delle divisioni successive | 24, 6, 0 |
| $d = aA + bB$ | «d uguale a per A più b per B» | identità di Bézout | $6 = 84 \cdot (-1) + 30 \cdot 3$ |
| $A$, $B$ | «A grande, B grande» | i moltiplicatori interi, non unici | $A = 9$, $B = -74$ |
| $d \mid c$ | «d divide c» | $c$ è un multiplo di $d$ | $6 \mid 18$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Le regole del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **«Calcolare il massimo comun divisore ed esprimerlo con l'identità di Bézout»**: primo punto di un problema nell'appello dell'08/06/2026, nelle prove del 2022/23 e nei riepiloghi 2019.
2. **«L'equazione ha soluzioni intere?»**: secondo punto dello stesso problema dell'08/06/2026.
3. **L'inverso modulo $N$**, che arriva tra qualche lezione, si calcola con un'identità di Bézout: appelli del 04/02/2025, 07/07/2025 e 08/09/2025.
4. **La proposizione 4.9** in una domanda del quiz 2021–25.

### Una domanda vera, letta insieme

**Appello dell'08/06/2026, problema 1, versione A, punti 1 e 2.** Il testo: «1. Calcolare il massimo comun divisore di 1392 e 120 e esprimerlo con l'identità di Bézout. 2. Dire se le equazioni $1392x + 120y = 10$ e $1392x + 120y = 72$ ammettono soluzioni intere, e in caso affermativo determinarne una.»

**In pratica chiede:** l'algoritmo di Euclide, la risalita, e poi di controllare se il massimo comun divisore divide 10 e 72.

> [!ESEMPIO] · la soluzione, passo per passo
> **Euclide.** $1392 = 11 \cdot 120 + 72$, $120 = 1 \cdot 72 + 48$, $72 = 1 \cdot 48 + 24$, $48 = 2 \cdot 24 + 0$. Il massimo comun divisore è **24**.
>
> **Risalita.** $24 = 72 - 48$. Sostituisco $48 = 120 - 72$: $24 = 2 \cdot 72 - 120$. Sostituisco $72 = 1392 - 11 \cdot 120$: $24 = 2 \cdot 1392 - 22 \cdot 120 - 120$.
>
> **Identità.** $24 = 2 \cdot 1392 - 23 \cdot 120$. Controllo: $2784 - 2760 = 24$.
>
> **Prima equazione.** 24 non divide 10: nessuna soluzione intera.
>
> **Seconda equazione.** 24 divide 72, e $72 = 3 \cdot 24$. Moltiplico l'identità per 3: $72 = 6 \cdot 1392 - 69 \cdot 120$. Una soluzione è $x = 6$, $y = -69$.
>
> È la soluzione ufficiale, ricontrollata con un programma. Il punto 3 del problema è una congruenza, che arriva più avanti.

### Errori da evitare

- Prendere come massimo comun divisore l'ultimo quoziente, o lo 0 dell'ultima riga.
- Svolgere i prodotti durante la risalita.
- Perdere il segno meno davanti a una parentesi.
- Dire che un'equazione non ha soluzioni «perché i numeri sono grandi»: conta solo se il massimo comun divisore divide il termine noto.
- Consegnare l'identità senza averla controllata con il conto.

## Quiz

```quiz
D: Quiz 2021–25, primo quiz. Posto che $111268 = 256 \cdot 434 + 164$, si ha:
- $\mathrm{MCD}(111268, 434) = 256$
+ $\mathrm{MCD}(111268, 434) = \mathrm{MCD}(434, 164)$
- $\mathrm{MCD}(111268, 434) = 164$
- $\mathrm{MCD}(111268, 434) = \mathrm{MCD}(111268, 164)$
- $\mathrm{MCD}(111268, 434) = \mathrm{MCD}(256, 164)$
= È la proposizione 4.9: si tengono divisore e resto. La più insidiosa è la terza: il resto 164 non è ancora il massimo comun divisore, perché l'algoritmo non è finito (il valore vero è 2).

D: Dal problema 1 dell'appello dell'08/06/2026, versione B. Quanto vale il massimo comun divisore di 1008 e 132?
N: 12
= $1008 = 7 \cdot 132 + 84$, $132 = 84 + 48$, $84 = 48 + 36$, $48 = 36 + 12$, $36 = 3 \cdot 12$. L'ultimo resto non nullo è 12.

D: Dal problema 1 dell'appello dell'08/06/2026, versione C. $\mathrm{MCD}(936, 168) = 24$. Quale di queste equazioni ha soluzioni intere?
+ $936x + 168y = 72$
- $936x + 168y = 18$
- $936x + 168y = 12$
- $936x + 168y = 100$
- $936x + 168y = 1$
= Servono i multipli di 24, e $72 = 3 \cdot 24$. Le prime due sono le equazioni del testo d'esame. La più insidiosa è 12: divide 24, ma è 24 che deve dividere il termine noto.

D: Dal problema 1 dell'appello dell'08/06/2026, versione D. Quanto vale il massimo comun divisore di 1287 e 165?
N: 33
= $1287 = 7 \cdot 165 + 132$, $165 = 132 + 33$, $132 = 4 \cdot 33$. Poi $33 = 165 - 132 = 8 \cdot 165 - 1287$.

D: Dalle prove del 2022/23. L'algoritmo di Euclide dà $\mathrm{MCD}(231, 143) = 11$. Quale di queste è un'identità di Bézout corretta?
+ $11 = 5 \cdot 231 - 8 \cdot 143$
- $11 = 8 \cdot 231 - 5 \cdot 143$
- $11 = 5 \cdot 231 + 8 \cdot 143$
- $11 = 3 \cdot 231 - 5 \cdot 143$
- $11 = 2 \cdot 143 - 231$
= $1155 - 1144 = 11$: è l'identità della soluzione ufficiale. La più insidiosa è la seconda, con i coefficienti scambiati: dà $1848 - 715 = 1133$.

D: Dal riepilogo degli esami 2019, esercizio 3. Risalendo le divisioni per 57 e 25 si trova $1 = B \cdot 25 - 7 \cdot 57$. Quanto vale $B$?
N: 16
= $57 = 2 \cdot 25 + 7$, $25 = 3 \cdot 7 + 4$, $7 = 4 + 3$, $4 = 3 + 1$. Risalendo: $1 = 2 \cdot 4 - 7 = 2 \cdot 25 - 7 \cdot 7 = 16 \cdot 25 - 7 \cdot 57$. Controllo: $400 - 399$.

D: Nell'algoritmo di Euclide per due interi positivi, che cosa succede ai resti da una riga all'altra?
+ calano sempre, fino a 0
- crescono fino al massimo comun divisore
- restano uguali
- si dimezzano a ogni riga
- possono diventare negativi
= Ogni resto è minore del divisore, che è il resto della riga prima: per questo l'algoritmo finisce. La più insidiosa è «si dimezzano»: calano, ma non di una quantità fissa.

D: Due interi $a$ e $b$ verificano $5a - 3b = 1$. Che cosa si può dire?
+ $a$ e $b$ sono coprimi
- il massimo comun divisore di $a$ e $b$ è 5
- il massimo comun divisore di $a$ e $b$ è 3
- $a$ divide $b$
- niente: dipende dai numeri
= Il massimo comun divisore divide ogni combinazione, quindi divide 1. La più insidiosa è l'ultima: con un termine noto diverso da 1 sarebbe vera, con 1 no.
```

## Esercizi

::: esercizio base Riscaldamento: un massimo comun divisore
Calcola $\mathrm{MCD}(391, 221)$ con l'algoritmo di Euclide.
::: soluzione
$391 = 1 \cdot 221 + 170$, $221 = 1 \cdot 170 + 51$, $170 = 3 \cdot 51 + 17$, $51 = 3 \cdot 17 + 0$. Il massimo comun divisore è 17. Infatti $391 = 17 \cdot 23$ e $221 = 17 \cdot 13$.
:::

::: esercizio base Riscaldamento: la risalita
Scrivi l'identità di Bézout per 391 e 221.
::: soluzione
$17 = 170 - 3 \cdot 51$. Sostituisco $51 = 221 - 170$: $17 = 4 \cdot 170 - 3 \cdot 221$. Sostituisco $170 = 391 - 221$: $17 = 4 \cdot 391 - 7 \cdot 221$. Controllo: $1564 - 1547 = 17$.
:::

::: esercizio medio Il secondo esempio del libro (p. 76)
Dalle sette divisioni di 3575 e 654 scritte nella lezione, ricava $1 = 1219 \cdot 654 - 223 \cdot 3575$.
::: soluzione
$1 = 3 - 2$. Con $2 = 41 - 13 \cdot 3$: $1 = 14 \cdot 3 - 41$. Con $3 = 44 - 41$: $1 = 14 \cdot 44 - 15 \cdot 41$. Con $41 = 305 - 6 \cdot 44$: $1 = 104 \cdot 44 - 15 \cdot 305$. Con $44 = 654 - 2 \cdot 305$: $1 = 104 \cdot 654 - 223 \cdot 305$. Con $305 = 3575 - 5 \cdot 654$: $1 = 1219 \cdot 654 - 223 \cdot 3575$. Controllo: $797226 - 797225 = 1$.
:::

::: esercizio medio Esercizio 4.2 del libro, punti 1 e 2
Calcola $\mathrm{MCD}(1156, 75)$ e $\mathrm{MCD}(1377, 1071)$, e scrivi le due identità di Bézout.
::: soluzione
**Primo.** $1156 = 15 \cdot 75 + 31$, $75 = 2 \cdot 31 + 13$, $31 = 2 \cdot 13 + 5$, $13 = 2 \cdot 5 + 3$, $5 = 3 + 2$, $3 = 2 + 1$: il massimo comun divisore è 1. Risalendo: $1 = 447 \cdot 75 - 29 \cdot 1156$ (controllo: $33525 - 33524$). **Secondo.** $1377 = 1071 + 306$, $1071 = 3 \cdot 306 + 153$, $306 = 2 \cdot 153$: il massimo comun divisore è 153. $153 = 1071 - 3 \cdot 306 = 4 \cdot 1071 - 3 \cdot 1377$ (controllo: $4284 - 4131$). Nel testo del libro c'è scritto «massimi comuni denominatori»: sono divisori.
:::

::: esercizio esame Appello dell'08/06/2026, problema 1, versione B, punti 1 e 2
Calcolare il massimo comun divisore di 1008 e 132 ed esprimerlo con l'identità di Bézout. Dire se le equazioni $1008x + 132y = 15$ e $1008x + 132y = 36$ ammettono soluzioni intere, e in caso affermativo determinarne una.
::: soluzione
**Euclide.** $1008 = 7 \cdot 132 + 84$, $132 = 84 + 48$, $84 = 48 + 36$, $48 = 36 + 12$, $36 = 3 \cdot 12$: il massimo comun divisore è 12. **Risalita.** $12 = 48 - 36 = 2 \cdot 48 - 84 = 2 \cdot 132 - 3 \cdot 84 = 23 \cdot 132 - 3 \cdot 1008$. Controllo: $3036 - 3024 = 12$. **Equazioni.** 12 non divide 15: nessuna soluzione. 12 divide 36: moltiplicando per 3, $36 = 69 \cdot 132 - 9 \cdot 1008$, cioè $x = -9$, $y = 69$. Della versione B ho solo il testo: i conti sono miei, controllati con un programma.
:::

::: esercizio esame Appello dell'08/09/2025, problema 1, punto b (prima parte)
Con l'algoritmo di Euclide mostra che 352 e 533 sono coprimi, e scrivi l'identità di Bézout.
::: soluzione
$533 = 352 + 181$, $352 = 181 + 171$, $181 = 171 + 10$, $171 = 17 \cdot 10 + 1$: il massimo comun divisore è 1. Risalendo: $1 = 171 - 17 \cdot 10 = 18 \cdot 171 - 17 \cdot 181 = 18 \cdot 352 - 35 \cdot 181 = 53 \cdot 352 - 35 \cdot 533$. Controllo: $18656 - 18655 = 1$. È l'identità della soluzione ufficiale, $352 \cdot 53 + 533 \cdot (-35) = 1$. Il testo chiede poi l'inverso di 352 modulo 533, che è 53: si legge dall'identità, e si vedrà con le classi di resto.
:::

::: esercizio difficile Se una combinazione dà 1
Dimostra che se $aA + bB = 1$ per certi interi $A$ e $B$, allora $\mathrm{MCD}(a, b) = 1$. Poi usa questo fatto per mostrare che due interi consecutivi sono sempre coprimi.
::: soluzione
Chiamo $d$ il massimo comun divisore. $d$ divide $a$ e $b$, quindi divide $aA + bB$, che è 1. Un intero positivo che divide 1 è 1. Per due consecutivi $n$ e $n + 1$: $1 \cdot (n + 1) - 1 \cdot n = 1$ è una combinazione che dà 1, quindi sono coprimi.
:::

## Domande di ripasso

::: domanda Che cosa dice la proposizione 4.9?
Se $a = qb + r$, i divisori comuni di $a$ e $b$ sono quelli di $b$ e $r$, e quindi $\mathrm{MCD}(a, b) = \mathrm{MCD}(b, r)$.
:::

::: domanda Come funziona l'algoritmo di Euclide, e perché finisce?
Si divide, poi si divide il divisore per il resto, e così via fino al resto 0. Finisce perché i resti sono interi non negativi che calano a ogni riga.
:::

::: domanda Dove si legge il massimo comun divisore alla fine dell'algoritmo?
È l'ultimo resto diverso da zero, cioè il divisore dell'ultima riga.
:::

::: domanda Che cosa dice l'identità di Bézout?
Che il massimo comun divisore $d$ di $a$ e $b$ si scrive come $d = aA + bB$, con $A$ e $B$ interi.
:::

::: domanda Come si trovano $A$ e $B$?
Risalendo le divisioni dell'algoritmo: si parte dalla riga con $d$ come resto e si sostituisce un resto alla volta, senza svolgere i prodotti.
:::

::: domanda Quando l'equazione $ax + by = c$ ha soluzioni intere?
Quando il massimo comun divisore di $a$ e $b$ divide $c$.
:::

## Glossario

```glossario
Algoritmo di Euclide | Catena di divisioni con il resto che calcola il massimo comun divisore di due interi.
Ultimo resto non nullo | Il resto della penultima riga dell'algoritmo: è il massimo comun divisore.
Identità di Bézout | Scrittura del massimo comun divisore come aA + bB, con A e B interi.
Combinazione | Un numero della forma aA + bB, con A e B interi.
Risalire | Ricavare l'identità di Bézout sostituendo i resti dall'ultima divisione alla prima.
Coprimi | Due interi con massimo comun divisore 1.
```

## Checklist

```checklist
- So enunciare la proposizione 4.9 e usarla in una domanda di quiz.
- So calcolare un massimo comun divisore con l'algoritmo di Euclide.
- So spiegare perché l'algoritmo finisce.
- So enunciare l'identità di Bézout.
- So ricavare A e B risalendo le divisioni, e controllo sempre il risultato.
- So dire quando ax + by = c ha soluzioni intere, e trovarne una.
- So che A e B non sono unici.
- So che una combinazione uguale a 1 vuol dire coprimi.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta* (testo del canale B), cap. 4 «I numeri interi», pp. 73–76: proposizione 4.9 con la dimostrazione, algoritmo per il massimo comun divisore con gli esempi $\mathrm{MCD}(5355, 651)$ e $\mathrm{MCD}(3575, 654)$, teorema 4.10 con la dimostrazione, note 4.11 e 4.12, esercizio 4.2.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori), lezione 15: «Algoritmo per il calcolo del MCD. Esempi. Identità di Bezout. Esempi».
- Appelli di Matematica Discreta (Moodle MDAG1 2025/26, aperto agli ospiti), con le soluzioni ufficiali: quiz 2021–25; riepilogo degli esami 2019 (esercizio 3); prove del 2022/23; appelli dell'08/09/2025 (problema 1) e dell'08/06/2026 (problema 1, versioni A, B, C e D).
- Gli esempi con 84 e 30, con 252 e 198, con 9 e 6, i disegni, i quiz senza data e gli esercizi di riscaldamento sono di questi appunti. Tutte le divisioni e tutte le identità le ho controllate con un programma.
