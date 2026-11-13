---
corso: MDAG
modulo: AG
lezione: S6
tipo: riassunto
titolo: "Settimana 6: Rouché–Capelli, basi e coordinate, applicazioni lineari"
data: 2026-11-05
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Riassunto settimanale · Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · 02/11 – 06/11/2026
descrizione: >-
  Riassunto della settimana 6 di Algebra lineare e Geometria (MDAG, parte 2): il sistema omogeneo associato, la
  struttura delle soluzioni, il rango e il teorema di Rouché–Capelli, i sistemi con un parametro; indipendenza,
  generatori e basi con i pivot, le coordinate rispetto a una base; le applicazioni lineari, nucleo e immagine,
  iniettività e suriettività, il teorema della dimensione.
lede: >-
  Le tre lezioni della settimana in poche pagine: come si sa quante soluzioni ha un sistema contando i pivot, come
  si decide se dei vettori sono una base e come si trovano le coordinate, che cosa sono nucleo e immagine di
  un'applicazione lineare, con le domande vere degli appelli.
materiale: dispense
scheda:
  Lezioni: "[L12](L12_sistemi_lineari_2.html) mar 03/11 · [L13](L13_sistemi_lineari_3.html) mer 04/11 · [L14](L14_applicazioni_lineari_1.html) gio 05/11, nel canale B"
  Dispense: Buzano e Radeschi 2026, pp. 56–73
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti delle lezioni L12, L13 e L14 di Algebra lineare e Geometria, scritti sulle dispense 2026 del corso
  (R. Buzano, M. Radeschi)
appunti_html: appunti/MDAG/riassunto_settimana_06_AG.html
genera_html: true
---

## In breve

- Le soluzioni di un sistema sono **una soluzione particolare più tutte le soluzioni del sistema omogeneo associato**, quello con gli stessi coefficienti e i termini noti a zero.
- Il **rango** è il numero di pivot di una forma a scalini.
- **Rouché–Capelli**: il sistema ha soluzioni quando la matrice dei coefficienti e la matrice completa hanno lo stesso rango. I parametri liberi sono le incognite meno il rango.
- Le soluzioni sono zero, una o infinite. Mai due.
- Per i vettori si fa lo stesso conto: messi **in colonna**, sono indipendenti con un pivot in ogni colonna, generano lo spazio con un pivot in ogni riga.
- Le **coordinate** di un vettore rispetto a una base sono i coefficienti con cui lo si scrive: si trovano risolvendo un sistema.
- Un'**applicazione lineare** rispetta somme e multipli. Il **nucleo** è quello che manda a zero, l'**immagine** quello che produce.
- **Teorema della dimensione**: la dimensione dello spazio di partenza è la somma di quelle del nucleo e dell'immagine.

## L12 · Rouché–Capelli (mar 03/11)

Due sistemi con gli stessi coefficienti e termini noti diversi hanno soluzioni che si somigliano: hanno la stessa forma, spostata. Il sistema con tutti i termini noti a zero si chiama **omogeneo associato**. Ha sempre la soluzione zero, e le sue soluzioni formano un sottospazio.

Tutte le soluzioni del sistema di partenza si ottengono così: **una soluzione qualsiasi, più tutte quelle dell'omogeneo**. Per $x + y = 2$: la soluzione $(2, 0)$ più i multipli di $(1, -1)$, che risolvono $x + y = 0$. È una retta che non passa per l'origine: un **sottospazio affine**.

Per sapere quante soluzioni ci sono non serve risolvere: basta contare i pivot.

```grafico
titolo: Rouché–Capelli in due domande. Prima: i due ranghi sono uguali? Se no, nessuna soluzione. Se sì, seconda domanda: il rango è uguale al numero delle incognite? Se sì la soluzione è una sola, se no sono infinite, con tanti parametri quante sono le incognite meno il rango
x: 0 12.4
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.4 3.6 4.6 3.6 4.6 4.8 0.4 4.8 | blu | pieno
testo: 2.5 4.2 | blu | "i due ranghi sono uguali?"
freccia: 4.7 4.2 7.3 4.2 | rosa
testo: 6.0 4.55 | rosa | "no"
poligono: 7.4 3.6 11.9 3.6 11.9 4.8 7.4 4.8 | rosa | pieno
testo: 9.65 4.2 | rosa | "nessuna soluzione"
freccia: 2.5 3.5 2.5 2.5 | verde
testo: 2.9 3.0 | verde | "sì"
poligono: 0.4 1.2 4.6 1.2 4.6 2.4 0.4 2.4 | blu | pieno
testo: 2.5 1.8 | blu | "rango = incognite?"
freccia: 4.7 2.1 7.3 2.6 | verde
testo: 6.0 2.75 | verde | "sì"
poligono: 7.4 2.2 11.9 2.2 11.9 3.2 7.4 3.2 | verde | pieno
testo: 9.65 2.7 | verde | "una sola soluzione"
freccia: 4.7 1.5 7.3 1.0 | ambra
testo: 6.0 0.85 | ambra | "no"
poligono: 7.4 0.4 11.9 0.4 11.9 1.5 7.4 1.5 | ambra | pieno
testo: 9.65 1.15 | ambra | "infinite soluzioni"
testo: 9.65 0.7 | ambra | "parametri: incognite − rango"
```

Un esempio con tre incognite. Il sistema $x + y + z = 3$, $x + 2y + 3z = 6$, $2x + 3y + 4z = 9$ ha la terza equazione uguale alla somma delle prime due. Riducendo a scalini restano 2 pivot, e nessuno nell'ultima colonna: i due ranghi valgono 2, le incognite sono 3, quindi infinite soluzioni con $3 - 2 = 1$ parametro. Cambiando il 9 in 10 la terza riga diventa $0 = 1$: il rango della matrice completa sale a 3, e non ci sono soluzioni.

- **Matrice quadrata**: una sola soluzione esattamente quando il determinante non è zero. Con il determinante zero le soluzioni sono zero oppure infinite, e lo decide il termine noto.
- **Sistemi con un parametro**: si cercano i valori della lettera che cambiano il rango, di solito quelli che annullano un determinante, e si studiano uno per uno.

::: prova Un sistema ha 4 incognite, e i due ranghi valgono 2. Quante soluzioni ha?
Infinite, con $4 - 2 = 2$ parametri.
:::

> [!RICORDA]
> - Soluzioni = una particolare + quelle dell'omogeneo.
> - Ranghi diversi: nessuna soluzione. Ranghi uguali: una se il rango è il numero di incognite, altrimenti infinite.
> - Parametri = incognite − rango.

## L13 · Indipendenza, basi e coordinate (mer 04/11)

Le domande sui vettori diventano sistemi. Si mettono i vettori **in colonna** in una matrice, si riduce a scalini e si guardano i pivot.

| Domanda | Che cosa si guarda | Con il rango |
|---|---|---|
| sono **indipendenti**? | un pivot in ogni colonna | rango = numero di vettori |
| **generano** tutto lo spazio? | un pivot in ogni riga | rango = numero di coordinate |
| sono una **base**? | tutte e due le cose | matrice quadrata con determinante diverso da zero |

Da qui due fatti che rispondono a molti quiz senza conti: in $\R^3$ quattro vettori non sono mai indipendenti, e due vettori non generano mai tutto lo spazio. La dimensione dello spazio generato da alcuni vettori è il rango della loro matrice.

Rispetto a una base ogni vettore si scrive in **un solo modo**. I coefficienti di questa scrittura sono le sue **coordinate**. Per trovarle si risolve il sistema che ha per colonne i vettori della base e per termine noto il vettore.

```grafico
titolo: Le coordinate di $(3, 1)$ nella base $v_1 = (1, 1)$, $v_2 = (1, -1)$. Per arrivarci si fanno due passi lungo $v_1$ (blu) e uno lungo $v_2$ (ambra): le coordinate sono $(2, 1)$, diverse dalle coordinate solite
x: -0.6 4.2
y: -1.4 2.8
freccia: 0 0 1 1 | blu
freccia: 1 1 2 2 | blu
freccia: 2 2 3 1 | ambra
freccia: 0 0 3 1 | verde
punto: 3 1 | verde
testo: 3.45 0.75 | verde | "(3, 1)"
testo: 0.55 1.35 | blu | "2 passi di v1"
testo: 3.3 1.9 | ambra | "1 passo di v2"
freccia: 0 0 1 -1 | grigio | tratteggio
testo: 1.35 -1.1 | grigio | "v2"
```

Il conto del disegno: cerco $a$ e $b$ con $a(1, 1) + b(1, -1) = (3, 1)$. Le due equazioni sono $a + b = 3$ e $a - b = 1$: sommandole, $a = 2$, e poi $b = 1$.

Con i polinomi si fa lo stesso: le coordinate di $(x + 2)^2$ nella base $(x + 1)^2$, $x + 1$, $1$ si trovano scrivendo $(x + 2)^2 = ((x + 1) + 1)^2 = (x + 1)^2 + 2(x + 1) + 1$: sono $(1, 2, 1)$ (appello del 06/09/2024).

::: prova I vettori $(1, 2)$, $(3, 1)$ e $(0, 5)$ di $\R^2$ sono indipendenti? Generano $\R^2$?
Non sono indipendenti: sono tre vettori in uno spazio di dimensione 2. Generano $\R^2$: i primi due hanno determinante $1 - 6 = -5$, diverso da zero.
:::

> [!RICORDA]
> - Vettori in colonna, Gauss, pivot.
> - Indipendenti: pivot in ogni colonna. Generatori: pivot in ogni riga.
> - Coordinate: i coefficienti rispetto alla base, da un sistema.

## L14 · Nucleo e immagine (gio 05/11)

Un'**applicazione lineare** trasforma vettori in vettori rispettando le due operazioni: l'immagine di una somma è la somma delle immagini, e l'immagine di un multiplo è il multiplo dell'immagine. In particolare lo zero va nello zero.

- **Non è lineare** una formula con un numero fisso aggiunto ($x + 1$), un quadrato ($x^2$), un prodotto tra le variabili ($xy$). Per dimostrarlo basta un esempio con i numeri.
- **È lineare** ogni formula fatta solo di somme di multipli delle variabili. Lo sono anche il valore di un polinomio in un punto, $p \mapsto p(7)$, e la derivata.
- **Ogni matrice** dà un'applicazione lineare, $v \mapsto Av$. Le colonne della matrice sono le immagini dei vettori della base canonica.

Di un'applicazione lineare $T$ interessano due insiemi:

- il **nucleo**, $\Ker T$: i vettori di partenza che vanno nello zero. Si trova risolvendo il sistema omogeneo $T(v) = 0$;
- l'**immagine**, $\Im T$: i vettori di arrivo che si ottengono davvero. È generata dalle immagini dei vettori di una base, cioè dalle colonne della matrice.

Per $T(x, y) = (x + y,\ 2x + 2y)$: il nucleo è la retta $y = -x$, generata da $(1, -1)$; l'immagine è la retta generata da $(1, 2)$.

$T$ è **iniettiva** quando nel nucleo c'è solo lo zero, ed è **suriettiva** quando l'immagine è tutto lo spazio di arrivo.

Il **teorema della dimensione** lega i due insiemi: per $T \colon V \to W$,

$$\dim V = \dim \Ker T + \dim \Im T.$$

```grafico
titolo: Il teorema della dimensione come conto. Entra uno spazio di dimensione 5; l'immagine ha dimensione 3 (ambra), quindi il nucleo ha dimensione 2 (blu). Conta sempre lo spazio di partenza, non quello di arrivo
x: 0 12.4
y: 0 3.6
assi: no
griglia: no
proporzioni: libere
poligono: 1.2 1.2 5.2 1.2 5.2 2.2 1.2 2.2 | blu | pieno
poligono: 5.2 1.2 11.2 1.2 11.2 2.2 5.2 2.2 | ambra | pieno
segmento: 3.2 1.2 3.2 2.2 | blu | sottile
segmento: 7.2 1.2 7.2 2.2 | ambra | sottile
segmento: 9.2 1.2 9.2 2.2 | ambra | sottile
testo: 3.2 2.6 | blu | "nucleo: 2"
testo: 8.2 2.6 | ambra | "immagine: 3"
testo: 6.2 0.6 | grigio | "spazio di partenza: 5 = 2 + 3"
testo: 3.2 3.2 | blu | "va nello zero"
testo: 8.2 3.2 | ambra | "esce"
```

Con questo teorema molte domande si risolvono senza conti. Se $T \colon \R^6 \to \R_3[x]$ è suriettiva, l'immagine ha dimensione 4 e il nucleo $6 - 4 = 2$ (appello del 06/09/2024). Se lo spazio di partenza ha dimensione più grande di quello di arrivo, $T$ non può essere iniettiva.

::: prova $T \colon \R^3 \to \R^3$ è data da $T(a, b, c) = (a - b,\ b - c,\ c - a)$. Qual è il nucleo, e che dimensione ha l'immagine?
Nel nucleo $a = b = c$: è la retta generata da $(1, 1, 1)$, di dimensione 1. L'immagine ha dimensione $3 - 1 = 2$. È la domanda 7 dell'appello del 03/06/2025.
:::

> [!RICORDA]
> - Lineare: rispetta somme e multipli, manda lo zero nello zero.
> - Nucleo: sistema omogeneo. Immagine: generata dalle colonne.
> - Iniettiva: nucleo zero. Suriettiva: immagine tutto l'arrivo.
> - $\dim V = \dim \Ker T + \dim \Im T$.

## Verso l'esame

- **Quante soluzioni ha il sistema**: resta la domanda più frequente, anche nella forma con un parametro (07/09/2026, domanda 3). Si riduce a scalini e si usa Rouché–Capelli.
- **Il rango di una matrice**: 10/06/2024, 16/01/2025, 07/02/2025, 05/02/2026, 07/09/2026.
- **Coordinate rispetto a una base**: con vettori (16/01/2025, 03/07/2026), con polinomi (08/02/2024, 06/09/2024), con matrici (03/06/2026).
- **Nucleo e immagine**: una domanda in quasi ogni appello, spesso con i polinomi di $\R_2[x]$. «È lineare?» il 10/07/2024 e il 10/07/2025; il teorema della dimensione senza conti il 06/09/2024 e il 02/09/2025.
- **Problemi**: il sistema al variare di $k$ è il problema 11 di più appelli (07/02/2025, 05/02/2026, 03/07/2026).
- Appelli 2026/27: venerdì 22/01/2027 e venerdì 05/02/2027, alle 14:00; 4 facciate di appunti scritti a mano, niente calcolatrice.

## Domande di ripasso

::: domanda Che cosa dice il teorema di Rouché–Capelli?
Il sistema ha soluzioni quando il rango della matrice dei coefficienti è uguale a quello della matrice completa. In quel caso i parametri liberi sono le incognite meno il rango.
:::

::: domanda Perché un sistema lineare non può avere esattamente due soluzioni?
Perché le soluzioni sono una particolare più quelle dell'omogeneo, che formano un sottospazio: o c'è solo lo zero, o ce ne sono infinite.
:::

::: domanda Come si controlla se tre vettori di $\R^3$ sono una base?
Si mettono in colonna in una matrice 3 × 3: sono una base quando il determinante non è zero.
:::

::: domanda Che cosa sono le coordinate di un vettore rispetto a una base?
I coefficienti dell'unica combinazione lineare dei vettori della base che dà quel vettore.
:::

::: domanda Come si trovano nucleo e immagine di $v \mapsto Av$?
Il nucleo risolvendo $Av = 0$; l'immagine è generata dalle colonne di $A$, e una sua base sono le colonne con i pivot.
:::

::: domanda Quando un'applicazione lineare è iniettiva?
Quando il nucleo contiene solo il vettore zero.
:::

## Quiz d'esame

Sono tutte domande vere degli appelli, diverse da quelle già nelle lezioni L12, L13 e L14. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma.

```quiz
D: Appello del 03/06/2025, domanda 4. Il sistema con matrice completa $\left(\begin{array}{ccc|c} 1 & 4 & 7 & 0 \\ 2 & 5 & 8 & 1 \\ 3 & 6 & 9 & 2 \end{array}\right)$ ammette:
- una soluzione
- zero soluzioni
+ infinite soluzioni, che dipendono da 1 parametro
- infinite soluzioni, che dipendono da 2 parametri
- due soluzioni
= Riducendo a scalini la terza riga diventa tutta zero: i due ranghi valgono 2, le incognite sono 3, quindi $3 - 2 = 1$ parametro. È la risposta (c) della soluzione ufficiale. La più insidiosa è «zero soluzioni», di chi vede il determinante zero e conclude che il sistema è impossibile.

D: Appello del 02/09/2025, domanda 1. Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 3 & 12 & 6 & 21 \\ 5 & 20 & 10 & 35 \\ 4 & 16 & 8 & 28 \end{array}\right)$ ha un numero di soluzioni pari a:
- zero
+ infinite, che dipendono da 2 parametri
- un numero finito, maggiore di 1
- una
- infinite, che dipendono da 1 parametro
= Le tre righe sono multipli di $(1, 4, 2 \mid 7)$: i due ranghi valgono 1, e i parametri sono $3 - 1 = 2$. È la risposta (b) della soluzione ufficiale. La più insidiosa è «1 parametro», di chi conta le righe che spariscono invece delle incognite meno il rango.

D: Appello del 07/09/2026, domanda 9. Determinare il rango della matrice $\begin{pmatrix} 3 & 5 & 2 \\ 2 & 3 & 1 \\ 1 & 2 & 1 \end{pmatrix}$.
+ 2
- 3
- 5
- 1
- 0
= La prima riga è la somma delle altre due, che non sono una multipla dell'altra: restano 2 pivot. È la risposta (a) della soluzione ufficiale. La più insidiosa è 3, di chi non riduce a scalini.

D: Appello del 02/09/2025, domanda 10. Lo spazio generato dai vettori $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$, $\begin{pmatrix} -1 \\ -1 \\ -1 \end{pmatrix}$, $\begin{pmatrix} 2 \\ 5 \\ 8 \end{pmatrix}$ ha dimensione:
- quattro
- uno
- tre
- zero
+ due
= La dimensione è il rango della matrice con i tre vettori in colonna, che è 2: il terzo vettore è tre volte il primo più il secondo. È la risposta (e) della soluzione ufficiale. La più insidiosa è «tre», di chi conta i vettori.

D: Appello del 06/09/2024, domanda 9. I polinomi $p_1(x) = (x + 1)^2$, $p_2(x) = x + 1$, $p_3(x) = 1$ formano una base di $\R_2[x]$. Il vettore delle coordinate di $q(x) = (x + 2)^2$ in questa base è:
- $(p_1, p_2, p_3)$
- $(1, 0, 1)$
- $(p_1, 2p_2, p_3)$
+ $(1, 2, 1)$
- $(1, -2, 1)$
= $(x + 2)^2 = ((x + 1) + 1)^2 = p_1 + 2p_2 + p_3$. È la risposta (d) della soluzione ufficiale. La più insidiosa è $(p_1, 2p_2, p_3)$: le coordinate sono numeri, non polinomi.

D: Appello del 03/07/2026, domanda 10. In $\R^2$ si consideri la base $B = \left\{ \begin{pmatrix} 2 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \end{pmatrix} \right\}$. Il vettore delle coordinate di $w = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$ rispetto alla base $B$ è:
+ $\begin{pmatrix} 4 \\ -3 \end{pmatrix}$
- $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$
- $\begin{pmatrix} 5 \\ 1 \end{pmatrix}$
- $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$
- $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$
= Da $2\alpha + \beta = 5$ e $\alpha + \beta = 1$ viene $\alpha = 4$ e $\beta = -3$. È la risposta (a) della soluzione ufficiale. La più insidiosa è $(5, 1)$: sono le coordinate nella base canonica, non in $B$.

D: Appello del 10/07/2025, domanda 3. Sia $T \colon \R_3[x] \to \R$ la funzione $T(p(x)) = p(7)$. La mappa $T$ è lineare?
- No, perché $(c \cdot p)(7) \neq c \cdot p(7)$ per qualche $c \in \R$ e qualche $p(x)$
- No, perché $(p + q)(7) \neq p(7) + q(7)$ per qualche $p(x)$, $q(x)$
- No, perché $p(7) \neq 0$ per qualche $p(x)$
+ Sì
- No, perché il polinomio zero non vale 0 in 7
= Il valore in 7 di una somma è la somma dei valori, e lo stesso per i multipli. È la risposta (d) della soluzione ufficiale. La più insidiosa è la terza: una mappa lineare manda lo zero nello zero, ma può benissimo mandare altri polinomi in numeri diversi da zero.

D: Appello del 03/06/2025, domanda 7. Il rango dell'applicazione lineare $T \colon \R^3 \to \R^3$, data da $T(a, b, c) = (a - b,\ b - c,\ c - a)$, è:
+ 2
- 3
- 1
- 4
- 0
= Il nucleo è fatto dei vettori con $a = b = c$ e ha dimensione 1: per il teorema della dimensione l'immagine ha dimensione $3 - 1 = 2$. È la risposta (a) della soluzione ufficiale. La più insidiosa è 3, di chi non si accorge che le tre componenti sommate danno zero.

D: Appello del 07/02/2025, domanda 7. L'immagine dell'applicazione lineare $T \colon \R_2[x] \to \R_2[x]$, data da $T(ax^2 + bx + c) = (a - b)x^2 + (a + b)x - c$, è:
+ $\R_2[x]$
- $\Span(x^2, x)$
- $\R_1[x]$
- $\{ax^2 + bx + c \in \R_2[x] : a + b = 0\}$
- $\R_1[x]^\perp$
= Il nucleo chiede $a - b = 0$, $a + b = 0$ e $c = 0$: solo il polinomio zero. Per il teorema della dimensione l'immagine ha dimensione 3, cioè è tutto lo spazio. È la risposta (a) della soluzione ufficiale. La più insidiosa è $\Span(x^2, x)$, di chi dimentica il termine $-c$.

D: Appello del 05/02/2026, domanda 7. L'immagine dell'applicazione lineare $T \colon \R_2[x] \to \R_2[x]$, data da $T(ax^2 + bx + c) = (a - b)x^2 - cx + c$, è:
- $\R_2[x]$
- $\Span(2 + x^2, x)$
- $\R_1[x]^\perp$
+ $\Span(1 - x, x^2)$
- $\{ax^2 + bx + c \in \R_2[x] : a - b = 0\}$
= L'immagine è generata da $T(1) = 1 - x$, $T(x) = -x^2$ e $T(x^2) = x^2$, cioè da $1 - x$ e $x^2$. È la risposta (d) della soluzione ufficiale. La più insidiosa è l'ultima, che descrive una condizione sul polinomio di partenza, non sull'immagine.
```

## Fonti

- Le lezioni complete: [L12 · Sistemi lineari II](L12_sistemi_lineari_2.html), [L13 · Sistemi lineari III](L13_sistemi_lineari_3.html), [L14 · Applicazioni lineari I](L14_applicazioni_lineari_1.html), con gli esempi, i disegni e gli esercizi.
- Dispense 2026 del corso (R. Buzano, M. Radeschi), lezioni 12, 13 e 14, pp. 56–73.
- Appelli del 06/09/2024, 07/02/2025, 03/06/2025, 10/07/2025, 02/09/2025, 05/02/2026, 03/07/2026 e 07/09/2026, con le soluzioni ufficiali.
