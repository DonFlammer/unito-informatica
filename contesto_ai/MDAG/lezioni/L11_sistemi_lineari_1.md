---
corso: MDAG
modulo: AG
lezione: L11
titolo: Sistemi lineari I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L11
descrizione: >-
  Appunti della lezione L11 di Algebra lineare e Geometria (MDAG, parte 2): sistemi lineari e matrice completa,
  mosse di Gauss, pivot e matrici a scalini, algoritmi di Gauss e di Gauss–Jordan, come si scrivono tutte le
  soluzioni di un sistema, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Un metodo che risolve qualsiasi sistema di equazioni, con qualunque numero di equazioni e di incognite. Si
  scrivono i numeri in una tabella, la si riordina con tre mosse e alla fine la risposta si legge: una soluzione,
  nessuna oppure infinite. È il conto che torna in quasi ogni prova d'esame.
materiale: dispense
scheda:
  Dispense: lezione 11 · pp. 50–55
  Libro: Martelli, §3.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 3–4 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 11 «Sistemi lineari I»; B. Martelli, Geometria e algebra lineare, §3.1
file_en: L11_linear_systems_1.html
appunti_html: appunti/MDAG/L11_sistemi_lineari_1.html
genera_html: true
---

## In breve

- Un **sistema lineare** è un indovinello con più indizi: cerchi dei numeri che rispettano tutte le condizioni insieme. Ogni indizio è un'**equazione**. I numeri da trovare si chiamano **incognite**.
- Per fare i conti si scrivono solo i numeri, in una tabella: la **matrice completa**. Ogni riga della tabella è un'equazione.
- Tre **mosse di Gauss** cambiano le righe senza cambiare le soluzioni: scambiare due righe, moltiplicare una riga per un numero diverso da zero, sommare a una riga un multiplo di un'altra riga.
- Con le mosse si porta la tabella **a scalini**: una forma a scala in cui il sistema si risolve dal basso. Il primo numero diverso da zero di ogni riga si chiama **pivot**.
- I finali possibili sono tre. **Nessuna soluzione**, se compare una riga impossibile come «0 = 5». **Una sola**, se ogni incognita ha il suo pivot. **Infinite**, se qualche incognita resta libera: il suo valore lo scegli tu.
- All'esame il quiz «quante soluzioni ha il sistema?» è uscito in 9 appelli su 15, e quasi ogni problema aperto finisce con questi conti.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Prima di cominciare

### Di che cosa parla questa lezione

Un indovinello: penso a due numeri. Se li sommo ottengo cinque. Se dal primo tolgo il secondo ottengo uno. Quali sono? Con qualche tentativo trovi tre e due.

In matematica un indovinello così si chiama sistema. Ci sono più indizi, e la risposta deve rispettarli tutti insieme. Con due numeri e due indizi bastano i tentativi. Con cinque numeri e quattro indizi no: serve un metodo.

Questa lezione insegna quel metodo. Porta il nome di Gauss, un matematico tedesco, e funziona sempre, con qualsiasi numero di indizi. L'idea è riscrivere gli indizi in una forma sempre più comoda, senza mai cambiare la risposta. Alla fine gli indizi sono così comodi che la risposta si legge.

Per fare meno fatica non si riscrivono ogni volta le equazioni intere. Si scrivono solo i numeri, in una tabella. Le tabelle di numeri sono le matrici della lezione L08: qui trovano il loro primo vero lavoro.

Il metodo dice anche come finisce l'indovinello. I finali possibili sono tre: nessuna risposta, una risposta sola, infinite risposte.

Questa è una delle lezioni più usate di tutto il corso. Il metodo serve subito nelle lezioni L12 e L13. Poi torna per i nuclei, per gli autovalori, per le rette e per i piani. All'esame compare in quasi ogni esercizio.

Una sola parte è teorica: la dimostrazione che le mosse non cambiano la risposta. La trovi in un riquadro chiuso, e all'esame non viene chiesta.

### Che cosa devi già sapere

- **I conti con il segno meno**: per esempio $3 - 5 = -2$. Il ripasso è nella sezione sulle mosse di Gauss.
- **Risolvere un'equazione con una sola lettera**, come $2x = 6$. Il ripasso è nella prima sezione.
- **Le frazioni**: $\frac 12$ vuol dire «la metà» (lezione L01). Servono poco, e le ricordiamo dove compaiono.
- **Che cos'è una matrice**: una tabella di numeri fatta di righe e di colonne (lezione L08). Il ripasso è nella sezione sulla matrice completa.
- **Che cos'è un vettore**: una lista ordinata di numeri, come $(3, 2)$ (lezione L05).

### Che cosa saprai fare alla fine

- Scrivere la matrice completa di un sistema, e tornare dalla matrice al sistema.
- Fare una mossa di Gauss senza sbagliare i conti.
- Portare una matrice a scalini con l'algoritmo di Gauss.
- Dire quante soluzioni ha un sistema: nessuna, una sola oppure infinite, e con quanti parametri.
- Scrivere tutte le soluzioni, anche quando sono infinite.
- Controllare una soluzione rimettendola nelle equazioni di partenza.

## Un indovinello con più indizi: il sistema (p. 50)

Partiamo da un indovinello: penso a due numeri, la loro somma fa 5 e la loro differenza fa 1. Quali sono?

Ci sono due numeri da trovare e due **indizi**. La risposta deve rispettare tutti e due gli indizi insieme.

### Dare un nome ai numeri da trovare

Un numero che non conosci ancora si chiama **incognita**. Per poterne parlare gli si dà un nome: una lettera. Qui i numeri da trovare sono due, quindi servono due lettere. Chiamiamo $x$ il primo numero e $y$ il secondo.

Adesso ogni indizio si scrive in breve.

| L'indizio a parole | Scritto con le lettere |
|---|---|
| la somma dei due numeri fa 5 | $x + y = 5$ |
| il primo meno il secondo fa 1 | $x - y = 1$ |

Ognuna di queste due scritture è un'**equazione**.

> [!RIPASSO] che cos'è un'equazione
> Un'**equazione** è un'uguaglianza con dentro una o più lettere. Dice: «quello che sta a sinistra dell'uguale e quello che sta a destra sono lo stesso numero».
>
> **Risolvere** un'equazione vuol dire trovare il numero che, messo al posto della lettera, la rende vera.
>
> Un esempio: $2x = 6$. La scrittura $2x$ vuol dire «2 per $x$»: tra un numero e una lettera il segno «per» non si scrive. La domanda è: quale numero, moltiplicato per 2, dà 6? Il 3. Quindi $x = 3$.
>
> La regola per risolvere: puoi fare **la stessa operazione sui due lati** dell'uguale. Se i due lati erano uguali prima, restano uguali dopo. Nell'esempio dividi per 2 tutti e due i lati. A sinistra $2x$ diventa $x$. A destra 6 diventa 3.
>
> Un altro esempio: $x + 4 = 9$. Togli 4 da tutti e due i lati. A sinistra resta $x$. A destra resta $9 - 4 = 5$. Quindi $x = 5$.

Quando più equazioni devono valere **insieme**, si scrivono una sotto l'altra, con una graffa a sinistra:

$$\begin{cases} x + y = 5 \\ x - y = 1 \end{cases}$$

La graffa si legge «tutte insieme». Un gruppo di equazioni da rispettare tutte insieme si chiama **sistema**.

### Risolvere l'indovinello ragionando

Proviamo a trovare i due numeri senza andare a tentativi.

La prima equazione dice che $x + y$ e 5 sono lo stesso numero. La seconda dice che $x - y$ e 1 sono lo stesso numero. Se a due cose uguali sommi due cose uguali, ottieni ancora due cose uguali. Quindi possiamo **sommare le due equazioni**: i lati sinistri tra loro e i lati destri tra loro.

1. **Lati sinistri.** La somma è $(x + y) + (x - y)$. Ci sono due $x$, che insieme fanno $2x$. C'è un $+y$ e c'è un $-y$, che si cancellano. Resta $2x$.
2. **Lati destri.** La somma è $5 + 1 = 6$.
3. **L'equazione nuova** è $2x = 6$. Dividi per 2 i due lati: $x = 3$.
4. **Il secondo numero.** Torna alla prima equazione e metti 3 al posto di $x$. Diventa $3 + y = 5$. Togli 3 dai due lati: $y = 2$.

I due numeri sono 3 e 2. Controlliamo con gli indizi di partenza.

- La somma: $3 + 2 = 5$. Giusto.
- La differenza: $3 - 2 = 1$. Giusto.

### Che cos'è una soluzione

Una **soluzione** del sistema è una scelta dei numeri che rende vere **tutte** le equazioni. Qui la soluzione è «$x$ vale 3 e $y$ vale 2».

Per scriverla in breve si mettono i due numeri in una lista, tra parentesi tonde: $(3, 2)$. Il primo posto è per $x$, il secondo per $y$. Una lista ordinata di numeri è un **vettore** (lezione L05). L'ordine conta: la lista $(2, 3)$ vorrebbe dire che $x$ vale 2 e $y$ vale 3, ed è un'altra cosa.

Proviamo un'altra lista: $(4, 1)$.

- Prima equazione: $4 + 1 = 5$. Vera.
- Seconda equazione: $4 - 1 = 3$, ma doveva fare 1. Falsa.

Quindi $(4, 1)$ **non** è una soluzione. Basta un solo indizio non rispettato per scartare una lista.

Tutte le soluzioni di un sistema, messe insieme, formano un insieme. Le dispense lo chiamano $S$, come «soluzioni». L'indovinello ha una soluzione sola, quindi il suo insieme $S$ ha un solo elemento:

$$S = \{(3, 2)\}$$

Le graffe sono quelle degli insiemi (lezione L01): in mezzo c'è l'elenco degli elementi. Risolvere un sistema vuol dire trovare **tutto** l'insieme $S$. Non basta una soluzione qualsiasi: servono tutte.

### I nomi dei pezzi di un'equazione

Guarda questa equazione con tre incognite:

$$2x - 3y + z = 7$$

- I numeri che moltiplicano le incognite si chiamano **coefficienti**. Qui sono 2, $-3$ e 1.
- Il numero a destra dell'uguale si chiama **termine noto**. «Noto» vuol dire «conosciuto». Qui è 7.

Due avvisi sui coefficienti.

- Davanti a $z$ non c'è scritto niente. Allora il coefficiente è 1, perché $z$ è lo stesso di $1 \cdot z$. Il puntino $\cdot$ è il segno «per».
- Il segno meno fa parte del coefficiente: quello di $y$ è $-3$, non 3. Se davanti a una lettera c'è solo il segno meno, come in $-y$, il coefficiente è $-1$.

### Tante incognite: i numerini in basso

Con tre incognite bastano le lettere $x$, $y$ e $z$. Con sei incognite le lettere finiscono. Allora si usa una lettera sola, con un numerino scritto in basso:

$$x_1, \quad x_2, \quad x_3, \quad x_4, \quad \dots$$

Si legge «ics uno», «ics due», «ics tre». Il numerino si chiama **indice**. È solo un'etichetta: dice quale incognita è. Non è una potenza, e con lui non si fanno conti. Le incognite $x_1$ e $x_2$ sono due numeri diversi, come $x$ e $y$.

### Che cosa vuol dire «lineare»

Gli indizi di questa lezione sono tutti dello stesso tipo. Ogni incognita può essere solo **moltiplicata per un numero**. Poi i pezzi si **sommano**. Nient'altro. Un'equazione fatta così si chiama **lineare**.

Non sono permesse tre cose: un'incognita moltiplicata per sé stessa, due incognite moltiplicate tra loro, un'incognita chiusa dentro un'altra operazione.

| Equazione | Lineare? | Perché |
|---|---|---|
| $2x - 3y + z = 7$ | sì | ogni incognita è solo moltiplicata per un numero |
| $x_1 + x_4 = 0$ | sì | le incognite che non compaiono contano come moltiplicate per 0 |
| $\sqrt 2\, x - \pi y = \frac 13$ | sì | i coefficienti possono essere numeri qualsiasi, anche radici e frazioni |
| $x^2 + y = 1$ | no | $x^2$ vuol dire $x \cdot x$: l'incognita è moltiplicata per sé stessa |
| $xy = 4$ | no | $xy$ vuol dire $x \cdot y$: due incognite moltiplicate tra loro |
| $x + \sin y = 0$ | no | l'incognita $y$ sta dentro la funzione seno (lezione L03) |

Un **sistema lineare** è un sistema in cui tutte le equazioni sono lineari. Il metodo di questa lezione funziona solo per questi sistemi.

::: prova La lista $(1, 4)$ è una soluzione del sistema dell'indovinello?
No. Prima equazione: $1 + 4 = 5$, vera. Seconda equazione: $1 - 4 = -3$, ma doveva fare 1. Un indizio non è rispettato, quindi la lista si scarta.
:::

::: prova Quali di queste equazioni sono lineari? (a) $3x - y = 2$; (b) $x \cdot y = 1$; (c) $x + y + z = 0$; (d) $x^2 = 9$.
(a) Sì: le incognite sono solo moltiplicate per numeri e sommate.

(b) No: due incognite sono moltiplicate tra loro.

(c) Sì.

(d) No: $x^2$ è $x$ per $x$.
:::

::: prova Nell'equazione $5x - y + 2z = 8$, quali sono i coefficienti? Qual è il termine noto?
I coefficienti sono 5, $-1$ e 2. Davanti a $y$ c'è solo il segno meno, quindi il suo coefficiente è $-1$. Il termine noto è 8.
:::

> [!RICORDA]
> - Un **sistema** è un gruppo di equazioni da rispettare tutte insieme. Una **soluzione** è una lista di numeri che le rende vere tutte.
> - **Lineare** vuol dire: le incognite sono solo moltiplicate per numeri e poi sommate.
> - I numeri davanti alle incognite sono i **coefficienti**. Il numero a destra dell'uguale è il **termine noto**.
> - $S$ è l'insieme di tutte le soluzioni. Risolvere un sistema vuol dire trovarle tutte.

## Una, nessuna, infinite: tre finali in un disegno (oltre le dispense)

Un indovinello può finire in tre modi: con una risposta sola, con nessuna risposta, con infinite risposte. Quando le incognite sono due, i tre finali si vedono in un disegno.

> [!RIPASSO] punti e rette sul foglio a quadretti
> Prendi un foglio a quadretti e disegna due righe numerate che si incrociano: una orizzontale e una verticale. Si chiamano **assi**. Il punto in cui si incrociano è lo zero di tutti e due.
>
> Una coppia di numeri come $(3, 2)$ indica un **punto** del foglio. Parti dall'incrocio, fai 3 passi a destra e poi 2 passi in su. Il primo numero è la $x$, il secondo è la $y$. Con un numero negativo vai dalla parte opposta: a sinistra oppure in giù.
>
> Adesso prendi un'equazione lineare con due incognite, per esempio $x + y = 5$. Le coppie che la rendono vera sono tante: $(0, 5)$, poi $(1, 4)$, poi $(2, 3)$, poi $(5, 0)$ e infinite altre, anche con la virgola. Se segni tutti questi punti sul foglio, stanno in fila su una **retta**.
>
> Quindi un'equazione lineare con due incognite è una retta. I punti della retta sono le coppie che rispettano l'equazione.

Un sistema di due equazioni è fatto di due rette. Una soluzione deve rispettare tutte e due le equazioni. Quindi è un punto che sta su **tutte e due** le rette.

Due rette sullo stesso foglio possono stare in tre modi.

**Primo finale: le rette si incrociano.** È il caso dell'indovinello. Guarda la figura: le due rette hanno un solo punto in comune, quello della soluzione $(3, 2)$. Il sistema ha **una sola soluzione**.

```grafico
titolo: $x + y = 5$ e $x - y = 1$ si incontrano in un punto: una sola soluzione, $(3, 2)$
x: -1 6
y: -2 5
retta: 0 5 4.5 0.5 | accento | $x + y = 5$ | ne
retta: 1 0 4 3 | blu | $x - y = 1$ | se
punto: 3 2 | ambra | $(3, 2)$ | e
```

**Secondo finale: le rette sono parallele.** Prendi questi due indizi: «la somma fa 2» e «la somma fa 4». La somma di due numeri non può fare 2 e 4 nello stesso momento. I due indizi si contraddicono. Guarda la figura: le due rette non si toccano mai. Il sistema ha **nessuna soluzione**.

```grafico
titolo: $x + y = 2$ e $x + y = 4$ sono parallele: nessun punto comune, nessuna soluzione
x: -1 5
y: -1 5
retta: 2 0 0 2 | accento | $x + y = 2$ | ne
retta: 4 0 0.5 3.5 | blu | $x + y = 4$ | ne
```

**Terzo finale: le rette coincidono.** Prendi «la somma fa 2» e «il doppio della somma fa 4». Il secondo indizio ripete il primo con altre parole: non aggiunge niente. Guarda la figura: le due rette stanno una sopra l'altra. Ogni punto della retta è una soluzione: $(2, 0)$, poi $(1, 1)$, poi $(0, 2)$ e tutti gli altri. Il sistema ha **infinite soluzioni**.

```grafico
titolo: $x + y = 2$ e $2x + 2y = 4$ sono la stessa retta: infinite soluzioni
x: -1 5
y: -1 5
retta: 2 0 0 2 | accento | spesso | $x + y = 2$ | ne
retta: 0 2 1.5 0.5 | blu | tratteggio | $2x + 2y = 4$ | ne
```

Con due rette non esistono altri casi. Per esempio le soluzioni non sono mai esattamente due. Due rette con due punti in comune sono per forza la stessa retta, e allora i punti in comune sono infiniti.

Con tre o più incognite il disegno non si riesce più a fare. Ma i finali restano questi tre: nessuna soluzione, una sola, infinite. Lo dimostra il teorema di Rouché–Capelli, nella lezione L12. Il metodo di questa lezione dice ogni volta in quale dei tre finali sei.

::: prova Senza fare conti: quante soluzioni ha il sistema con gli indizi «la somma fa 3» e «la somma fa 7»?
Nessuna. La somma di due numeri non può fare 3 e 7 nello stesso momento. Nel disegno sono due rette parallele.
:::

::: prova Quante soluzioni ha il sistema $x + y = 3$, $3x + 3y = 9$?
Infinite. La seconda equazione è la prima moltiplicata per 3: a sinistra $3 \cdot (x + y)$ fa $3x + 3y$, a destra $3 \cdot 3$ fa 9. Non dice niente di nuovo.

Resta un solo indizio, $x + y = 3$. Le coppie che lo rispettano sono infinite: $(0, 3)$, $(1, 2)$, $(3, 0)$ e così via. Nel disegno le due rette coincidono.
:::

> [!RICORDA]
> - Un sistema lineare può avere **una** soluzione, **nessuna** oppure **infinite**. Con i numeri reali non ne ha mai esattamente due o tre (lezione L12).
> - Nessuna soluzione: due indizi si contraddicono.
> - Infinite soluzioni: un indizio ripete gli altri, e qualcosa resta libero.

## Scrivere solo i numeri: la matrice completa (p. 50)

Rileggi come abbiamo risolto l'indovinello: le lettere non hanno fatto nessun lavoro. I conti li hanno fatti i numeri: quelli davanti alle incognite e quelli a destra dell'uguale. Le lettere servivano solo a tenere ogni numero al suo posto.

Allora conviene scrivere **solo i numeri**, in una tabella. Sarà il posto nella tabella a dire a quale incognita appartiene ogni numero.

> [!RIPASSO] che cos'è una matrice
> Una **matrice** è una tabella di numeri chiusa tra due parentesi tonde (lezione L08). Le **righe** sono le file orizzontali e si contano dall'alto. Le **colonne** sono le file verticali e si contano da sinistra.
>
> $$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$$
>
> Questa matrice ha 2 righe e 3 colonne. Si scrive «matrice $2 \times 3$» e si legge «due per tre»: prima le righe, poi le colonne. La riga 2 è fatta dei numeri 4, 5 e 6. La colonna 3 è fatta dei numeri 3 e 6. Il numero nella riga 2 e nella colonna 1 è il 4.

### Dall'indovinello alla tabella

Il sistema dell'indovinello è questo:

$$\begin{cases} x + y = 5 \\ x - y = 1 \end{cases}$$

Per ogni equazione leggi tre numeri: quello davanti a $x$, quello davanti a $y$ e quello a destra dell'uguale.

| Equazione | Numero davanti a $x$ | Numero davanti a $y$ | Numero a destra |
|---|---|---|---|
| $x + y = 5$ | $1$ | $1$ | $5$ |
| $x - y = 1$ | $1$ | $-1$ | $1$ |

Nella seconda equazione davanti a $y$ c'è solo il segno meno: il coefficiente è $-1$.

Ora togli le intestazioni e metti le parentesi. Ottieni una matrice:

$$\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right)$$

La barra verticale sta **al posto dell'uguale**. Separa i coefficienti, a sinistra, dai termini noti, a destra. Non è un'operazione: è solo un promemoria.

Questa tabella si chiama **matrice completa** del sistema. Si legge così:

- ogni **riga** è un'equazione;
- ogni **colonna** prima della barra è un'incognita: la prima colonna è quella di $x$, la seconda è quella di $y$;
- l'**ultima colonna**, dopo la barra, contiene i termini noti.

### I tre nomi

Le dispense danno un nome a ogni pezzo della tabella.

- La parte a sinistra della barra è la **matrice dei coefficienti**. Si indica con la lettera $A$.
- La colonna a destra della barra è il **vettore dei termini noti**. Si indica con la lettera $b$. È un vettore scritto in verticale: un **vettore colonna**.
- La tabella intera è la **matrice completa**. Si indica con la lettera $C$.

Per l'indovinello:

$$A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \qquad b = \begin{pmatrix} 5 \\ 1 \end{pmatrix} \qquad C = \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right)$$

Per dire che la matrice completa è fatta dei coefficienti con accanto i termini noti, le dispense scrivono $C = (A \mid b)$. Si legge «ci uguale a barra bi».

> [!ESEMPIO] Un sistema con tre equazioni e tre incognite
> $$\begin{cases} x + y + 2z = 9 \\ 2x + 4y - 3z = 1 \\ 3x + 6y - 5z = 0 \end{cases}$$
> Le incognite sono tre: $x$, $y$ e $z$. Quindi prima della barra servono tre colonne. Per esempio nella seconda equazione davanti a $x$ c'è 2, davanti a $y$ c'è 4 e davanti a $z$ c'è $-3$. A destra dell'uguale c'è 1.
>
> La matrice completa è
> $$C = \left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 2 & 4 & -3 & 1 \\ 3 & 6 & -5 & 0 \end{array}\right).$$
> Ha 3 righe, perché le equazioni sono 3. Ha 4 colonne: 3 per le incognite e 1 per i termini noti. Questo sistema viene risolto per intero nell'esercizio 6.

> [!TRAPPOLA] Prima di scrivere la matrice, metti in ordine il sistema
> La tabella funziona solo se ogni numero sta nella colonna giusta. Le regole sono tre.
>
> 1. Le incognite vanno scritte **nello stesso ordine** in ogni riga: prima $x$, poi $y$, poi $z$.
> 2. Un'incognita che **manca** in un'equazione ha coefficiente 0. Lo 0 va scritto nella matrice: il posto non si lascia vuoto.
> 3. Le incognite vanno tutte **a sinistra** dell'uguale. I numeri senza incognita vanno tutti **a destra**. Chi cambia lato cambia segno.
>
> La terza regola viene da quella dei due lati. Per togliere un $-z$ dal lato destro sommi $z$ a tutti e due i lati: a destra sparisce, a sinistra compare $+z$.
>
> Un sistema con tutti e tre i problemi:
> $$\begin{cases} 2x - y = 3 - z \\ x = 4y \\ 5 + z = 2 \end{cases}$$
> - **Prima equazione.** A destra c'è $-z$. Lo porti a sinistra e diventa $+z$. Viene $2x - y + z = 3$.
> - **Seconda equazione.** A destra c'è $4y$. Lo porti a sinistra e diventa $-4y$. Viene $x - 4y = 0$. Manca $z$: il suo coefficiente è 0.
> - **Terza equazione.** A sinistra c'è il numero 5. Lo porti a destra e diventa $-5$. Viene $z = 2 - 5$, cioè $z = -3$. Mancano $x$ e $y$: due zeri.
>
> Il sistema in ordine, e la sua matrice completa:
> $$\begin{cases} 2x - y + z = 3 \\ x - 4y = 0 \\ z = -3 \end{cases} \qquad \left(\begin{array}{ccc|c} 2 & -1 & 1 & 3 \\ 1 & -4 & 0 & 0 \\ 0 & 0 & 1 & -3 \end{array}\right)$$

### Quando equazioni e incognite sono tante

Un sistema può avere un numero qualsiasi di equazioni e di incognite. I due numeri possono anche essere diversi: 2 equazioni con 4 incognite, oppure 3 equazioni con 2 incognite. Le dispense usano due lettere per dirlo.

- La lettera $k$ è il numero di **equazioni**.
- La lettera $n$ è il numero di **incognite**.

Nell'indovinello le equazioni sono 2 e le incognite sono 2. Nell'esempio qui sopra sono 3 e 3.

Anche i coefficienti sono tanti, e serve un modo per indicarli tutti. Le dispense li chiamano tutti $a$, con **due** numerini in basso. Il primo dice la riga, cioè l'equazione. Il secondo dice la colonna, cioè l'incognita.

Proviamo sulla matrice dell'esempio con tre equazioni.

- $a_{23}$ si legge «a due tre», non «a ventitré». È il numero nella riga 2 e nella colonna 3: vale $-3$.
- $a_{31}$ è il numero nella riga 3 e nella colonna 1: vale 3.

I termini noti si chiamano $b$, con un numerino solo: quello della riga. Nell'esempio $b_2$ è il termine noto della seconda equazione: vale 1.

Le dispense lo scrivono così.

> [!DEF] 11.1 · Sistema lineare
> Un **sistema lineare** è un insieme di $k$ equazioni lineari in $n$ variabili
> $$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = b_1, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = b_k. \end{cases}$$
> I numeri $a_{ij}$ sono i **coefficienti** e i $b_i$ sono i **termini noti** del sistema. Sia i coefficienti sia i termini noti sia le variabili sono in un certo campo fissato $\K$. Possiamo raggruppare i coefficienti e i termini noti in una matrice $k \times n$ e in un vettore colonna:
> $$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{k1} & \cdots & a_{kn} \end{pmatrix}, \qquad b = \begin{pmatrix} b_1 \\ \vdots \\ b_k \end{pmatrix}.$$
> Parliamo della **matrice dei coefficienti** e del **vettore dei termini noti**. Possiamo poi unire tutto in un'unica matrice $k \times (n + 1)$
> $$C = (A \mid b),$$
> chiamata **matrice completa**.

**Come si legge.** Un pezzo alla volta.

- «Variabili» è un altro nome per le incognite.
- La prima riga dentro la graffa è la prima equazione. Comincia con il primo coefficiente per la prima incognita. I tre puntini $\cdots$ vogliono dire «e avanti così, con le incognite che stanno in mezzo». Finisce con l'ultimo coefficiente della riga per l'ultima incognita, che è $x_n$. A destra dell'uguale c'è $b_1$, il primo termine noto.
- I puntini verticali $\vdots$ vogliono dire «e avanti così, con le equazioni che stanno in mezzo». L'ultima riga è l'equazione numero $k$.
- $a_{ij}$ sta per un coefficiente qualsiasi: quello nella riga $i$ e nella colonna $j$. Le lettere $i$ e $j$ stanno al posto di due numeri.
- $\K$ è il **campo**, cioè l'insieme dei numeri che si usano. Le dispense scrivono $\K$ per dire «$\R$ oppure $\C$»: i numeri reali oppure i numeri complessi (lezioni L01 e L02). In questi appunti i numeri sono quasi sempre reali.
- «Matrice $k \times n$» vuol dire: una matrice con $k$ righe e $n$ colonne. È la matrice dei coefficienti: una riga per ogni equazione, una colonna per ogni incognita. I puntini in diagonale $\ddots$ riempiono il centro della tabella.
- La matrice completa ha una colonna in più, quella dei termini noti. Per questo le sue colonne sono $n + 1$.

Subito dopo la definizione le dispense dichiarano lo scopo della lezione: trovare l'insieme $S \subset \K^n$ delle soluzioni. Anche questa scrittura si legge a pezzi.

- $\K^n$ è l'insieme di tutte le liste di $n$ numeri. Con 2 incognite e i numeri reali è $\R^2$: tutte le coppie, come $(3, 2)$.
- Il simbolo $\subset$ si legge «è contenuto in» (lezione L01).
- Tutta insieme: le soluzioni sono liste di $n$ numeri, un numero per ogni incognita.

::: prova Scrivi la matrice completa del sistema $x + 2y = 7$, $3x - y = 0$.
$$\left(\begin{array}{cc|c} 1 & 2 & 7 \\ 3 & -1 & 0 \end{array}\right)$$
Prima riga: 1 davanti a $x$, 2 davanti a $y$, 7 a destra. Seconda riga: 3 davanti a $x$, $-1$ davanti a $y$, 0 a destra.
:::

::: prova Quale sistema corrisponde alla matrice completa $\left(\begin{array}{cc|c} 2 & 0 & 6 \\ 1 & 1 & 5 \end{array}\right)$?
La prima riga è $2x + 0y = 6$, cioè $2x = 6$. La seconda riga è $x + y = 5$.
:::

::: prova Una matrice completa ha 2 righe e 4 colonne. Quante sono le equazioni? Quante le incognite?
Le equazioni sono 2, una per riga. Le colonne sono 4, ma l'ultima è quella dei termini noti. Le incognite sono $4 - 1 = 3$.
:::

> [!RICORDA]
> - La **matrice completa** è il sistema scritto con i soli numeri: una riga per ogni equazione, una colonna per ogni incognita, e l'ultima colonna per i termini noti.
> - La barra verticale sta al posto dell'uguale.
> - Prima di scriverla metti in ordine il sistema: incognite nello stesso ordine, 0 per quelle che mancano, numeri senza incognita a destra.
> - Le incognite sono le colonne **prima** della barra. L'ultima colonna non è un'incognita.

## Riscrivere gli indizi: le mosse di Gauss (pp. 50–51)

Per risolvere l'indovinello hai sommato le due equazioni. In pratica hai **riscritto gli indizi** in un'altra forma, più comoda, e la risposta è rimasta la stessa.

Questa è l'idea di tutta la lezione. La soluzione non si cerca a tentativi. Si riscrivono gli indizi, un passo alla volta, finché la soluzione si legge. L'importante è usare solo riscritture che **non cambiano le soluzioni**.

Le riscritture sicure sono tre. Si chiamano **mosse di Gauss**, dal nome del matematico tedesco Carl Friedrich Gauss. Le hai già incontrate nella lezione L10, dove servivano per calcolare i determinanti. Qui servono per risolvere i sistemi.

Ogni mossa lavora sulle **righe** della matrice completa, cioè sulle equazioni. Per parlare delle righe si usa la lettera $R$, che sta per «riga»: $R_1$ è la riga 1, $R_2$ è la riga 2, e così via.

### Prima mossa: scambiare due righe

Dire gli indizi in un altro ordine non cambia l'indovinello. «La somma fa 5 e la differenza fa 1» è lo stesso di «la differenza fa 1 e la somma fa 5».

Sulla matrice completa vuol dire scambiare di posto due righe intere:

$$\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & -1 & 1 \\ 1 & 1 & 5 \end{array}\right)$$

La mossa si scrive $R_1 \leftrightarrow R_2$. La freccia a due punte si legge «si scambia con».

### Seconda mossa: moltiplicare una riga per un numero

«La somma fa 5» e «il doppio della somma fa 10» dicono la stessa cosa. Chi conosce una delle due frasi conosce anche l'altra.

Sulla matrice vuol dire moltiplicare per lo stesso numero **tutti** i numeri di una riga, compreso quello dopo la barra. Moltiplichiamo per 2 la prima riga dell'indovinello.

| | colonna di $x$ | colonna di $y$ | termine noto |
|---|---|---|---|
| riga 1 | $1$ | $1$ | $5$ |
| 2 volte la riga 1 | $2 \cdot 1 = 2$ | $2 \cdot 1 = 2$ | $2 \cdot 5 = 10$ |

La nuova riga 1 è $(2, 2 \mid 10)$, cioè l'equazione $2x + 2y = 10$. La soluzione dell'indovinello la rispetta ancora:

$$2 \cdot 3 + 2 \cdot 2 = 6 + 4 = 10$$

La mossa si scrive $R_1 \to 2R_1$. La freccia si legge «diventa»: «la riga 1 diventa 2 volte la riga 1».

C'è un solo divieto: il numero non può essere **zero**. Prova a moltiplicare per 0 la riga dell'indizio «la somma fa 5». Tutti i suoi numeri diventano 0, e la riga diventa l'equazione $0 = 0$. È vera, ma non dice più niente. L'indizio è andato perso, e non c'è modo di recuperarlo.

Si può invece moltiplicare per una frazione. Moltiplicare per $\frac 12$ vuol dire dividere per 2: serve a rimpicciolire i numeri di una riga.

### Terza mossa: sommare a una riga un multiplo di un'altra

È la mossa dell'indovinello, ed è quella che fa quasi tutto il lavoro. Hai due indizi veri. Ne sommi uno all'altro, e ottieni un indizio nuovo, vero anche lui.

Prima di usarla conviene ricordare come si fanno i conti con il segno meno, perché qui compaiono di continuo.

> [!RIPASSO] i conti con i numeri negativi
> - **Sottrarre un numero più grande** dà un risultato negativo: $1 - 5 = -4$. Hai 1 euro e ne spendi 5: sei sotto di 4.
> - **Sommare un numero negativo** è come sottrarre: $3 + (-2) = 3 - 2 = 1$.
> - **Sottrarre un numero negativo** è come sommare: $5 - (-2) = 5 + 2 = 7$. Togliere un debito è un guadagno.
> - **Nei prodotti e nelle divisioni** contano i segni. Segni uguali danno più: $(-2) \cdot (-3) = 6$. Segni diversi danno meno: $2 \cdot (-3) = -6$.

Sulla matrice dell'indovinello facciamo questa mossa: alla riga 2 **togliamo** la riga 1. Togliere è un caso della terza mossa: è come sommare la riga 1 moltiplicata per $-1$.

Perché proprio questa mossa? Perché in tutte e due le righe il primo numero è 1. Se li sottrai viene $1 - 1 = 0$. Uno zero nella colonna di $x$ vuol dire che l'incognita $x$ sparisce dalla riga 2.

Il conto si fa un numero alla volta. Ogni numero si combina con quello che sta nella sua stessa colonna.

| | colonna di $x$ | colonna di $y$ | termine noto |
|---|---|---|---|
| riga 2 | $1$ | $-1$ | $1$ |
| riga 1 | $1$ | $1$ | $5$ |
| riga 2 meno riga 1 | $1 - 1 = 0$ | $-1 - 1 = -2$ | $1 - 5 = -4$ |

La nuova riga 2 è $(0, -2 \mid -4)$. La riga 1 **non cambia**: è servita per il conto, ma resta com'era.

$$\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 0 & -2 & -4 \end{array}\right)$$

La nuova riga 2 è l'equazione $-2y = -4$. Dentro c'è una sola incognita. Dividi i due lati per $-2$ e ottieni $y = 2$: è il secondo numero dell'indovinello.

La mossa si scrive $R_2 \to R_2 - R_1$. Si legge: «la riga 2 diventa la riga 2 meno la riga 1».

Spesso la riga da togliere va prima moltiplicata per un numero. Il numero si sceglie in modo che compaia uno zero dove serve.

> [!ESEMPIO] Scegliere quante volte togliere
> $$\left(\begin{array}{cc|c} 1 & 2 & 3 \\ 4 & 9 & 7 \end{array}\right)$$
> Vogliamo far diventare 0 il 4 della riga 2. Sopra di lui, nella riga 1, c'è un 1.
>
> Alla riga 2 togliamo 4 volte la riga 1. Perché 4 volte? Perché $4 - 4 \cdot 1 = 0$.
>
> La mossa si scrive $R_2 \to R_2 - 4R_1$. Si legge: «la riga 2 diventa la riga 2 meno 4 volte la riga 1».
>
> | | colonna 1 | colonna 2 | termine noto |
> |---|---|---|---|
> | riga 2 | $4$ | $9$ | $7$ |
> | 4 volte la riga 1 | $4 \cdot 1 = 4$ | $4 \cdot 2 = 8$ | $4 \cdot 3 = 12$ |
> | differenza | $4 - 4 = 0$ | $9 - 8 = 1$ | $7 - 12 = -5$ |
>
> La nuova riga 2 è $(0, 1 \mid -5)$. La riga 1 resta $(1, 2 \mid 3)$.
> $$\left(\begin{array}{cc|c} 1 & 2 & 3 \\ 0 & 1 & -5 \end{array}\right)$$

### Le tre mosse, come le scrivono le dispense

Ora che le tre mosse sono chiare, ecco la definizione con le parole delle dispense.

> [!DEF] 11.2 · Mosse di Gauss
> Le mosse che non cambiano l'insieme delle soluzioni sono le seguenti e sono note come **mosse di Gauss**:
> - (I) scambiare due righe;
> - (II) moltiplicare una riga per un numero $\lambda \neq 0$;
> - (III) aggiungere ad una riga un'altra riga moltiplicata per $\lambda$ qualsiasi.
>
> Indicando con $R_i$ la $i$-esima riga di $C$, possiamo scrivere le mosse così:
> $$\text{(I)}\ R_i \longleftrightarrow R_j, \qquad \text{(II)}\ R_i \longrightarrow \lambda R_i,\ \lambda \neq 0, \qquad \text{(III)}\ R_i \longrightarrow R_i + \lambda R_j.$$

**Come si legge.**

- $\lambda$ è la lettera greca *lambda*. Sta al posto di un numero qualsiasi, come 2 oppure $-3$.
- $\lambda \neq 0$ si legge «lambda diverso da zero». È il divieto della seconda mossa.
- $R_i$ e $R_j$ sono due righe qualsiasi. Le lettere $i$ e $j$ stanno al posto dei numeri delle due righe. «La $i$-esima riga» vuol dire «la riga numero $i$».
- La scrittura della mossa (I) dice: la riga $i$ e la riga $j$ si scambiano.
- La scrittura della mossa (II) dice: la riga $i$ diventa $\lambda$ volte sé stessa.
- La scrittura della mossa (III) dice: alla riga $i$ sommi $\lambda$ volte la riga $j$. Se $\lambda$ è negativo stai togliendo. Per esempio con $\lambda = -4$ la riga $i$ diventa «la riga $i$ meno 4 volte la riga $j$».

Nella terza mossa le due righe devono essere **diverse**. Cambia solo la riga scritta a sinistra della freccia. L'altra resta ferma.

> [!ESEMPIO] 11.3 · Tre mosse in fila
> Le dispense fanno una mossa di ogni tipo su una matrice con 3 righe e 2 colonne. La mossa è scritta sopra ogni freccia.
> $$\begin{pmatrix} 1 & 2 \\ 3 & 0 \\ 4 & -2 \end{pmatrix} \xrightarrow{R_1 \leftrightarrow R_3} \begin{pmatrix} 4 & -2 \\ 3 & 0 \\ 1 & 2 \end{pmatrix}$$
> $$\xrightarrow{R_1 \to \frac 12 R_1} \begin{pmatrix} 2 & -1 \\ 3 & 0 \\ 1 & 2 \end{pmatrix} \xrightarrow{R_2 \to R_2 + 2R_3} \begin{pmatrix} 2 & -1 \\ 5 & 4 \\ 1 & 2 \end{pmatrix}.$$
> Guardiamole una alla volta.
>
> 1. **Mossa (I): la riga 1 si scambia con la riga 3.** La riga 1 è $(1, 2)$ e la riga 3 è $(4, -2)$. Si scambiano di posto. La riga 2 non si muove.
> 2. **Mossa (II): la riga 1 diventa metà di sé stessa.** Ora la riga 1 è $(4, -2)$. Moltiplicare per $\frac 12$ vuol dire dividere per 2. Primo numero: $4 : 2 = 2$. Secondo numero: $-2 : 2 = -1$. La nuova riga 1 è $(2, -1)$.
> 3. **Mossa (III): alla riga 2 sommi 2 volte la riga 3.** La riga 3 è $(1, 2)$, e 2 volte la riga 3 fa $(2, 4)$. La riga 2 è $(3, 0)$. Primo numero: $3 + 2 = 5$. Secondo numero: $0 + 4 = 4$. La nuova riga 2 è $(5, 4)$. La riga 3 è servita per il conto e resta com'era.

### Perché le mosse non cambiano le soluzioni

Tutto il metodo si regge su una promessa: dopo una mossa le soluzioni sono **le stesse** di prima. Nessuna in più, nessuna in meno. Nell'indovinello l'hai visto con la riga moltiplicata per 2: la soluzione la rispettava ancora. Il motivo per cui succede sempre è questo.

> [!IDEA] ogni mossa si può disfare
> Ogni mossa di Gauss ha una mossa che la annulla e rimette la matrice com'era.
>
> - Uno scambio si annulla rifacendo lo stesso scambio.
> - Moltiplicare una riga per 2 si annulla moltiplicandola per $\frac 12$. Ecco perché lo zero è vietato: moltiplicare per 0 non si può disfare.
> - Sommare a una riga 4 volte un'altra si annulla togliendo 4 volte quella stessa riga.
>
> Una riscrittura che si può sempre disfare non perde informazione e non ne inventa. Quindi non può né perdere né creare soluzioni.

Le dispense lo scrivono così.

> [!PROP] 11.4
> Le mosse di Gauss su $C = (A \mid b)$ non cambiano l'insieme $S \subset \K^n$ delle soluzioni del sistema lineare.

**Come si legge.** $C = (A \mid b)$ è la matrice completa. $S$ è l'insieme delle soluzioni, che sono liste di $n$ numeri. La frase dice: fai una mossa di Gauss sulla matrice completa, e le liste che risolvono il sistema restano le stesse di prima.

> [!NOTA] Serve per capire, non per l'esame
> La dimostrazione qui sotto è in un riquadro chiuso, che si apre con un clic. All'esame non viene chiesta. Da ricordare c'è il risultato: le tre mosse sono sicure.

> [!DIM] perché le mosse non cambiano le soluzioni
> Si controllano le tre mosse una alla volta. Ogni volta servono due cose: chi risolveva il sistema vecchio risolve quello nuovo, e chi risolve il nuovo risolveva il vecchio.
>
> 1. **Mossa (I).** Scambiare due righe vuol dire scrivere le stesse equazioni in un altro ordine. Una lista di numeri le rende vere tutte prima dello scambio esattamente quando le rende vere tutte dopo.
> 2. **Mossa (II).** La riga $i$ è l'equazione $a_{i1}x_1 + \cdots + a_{in}x_n = b_i$. Dopo la mossa diventa
>    $$\lambda a_{i1}x_1 + \cdots + \lambda a_{in}x_n = \lambda b_i.$$
>    Se una lista risolve l'equazione vecchia, moltiplicando i due lati per $\lambda$ risolve la nuova. Se risolve la nuova, moltiplicando i due lati per $\frac 1\lambda$ torna la vecchia. Qui serve $\lambda \neq 0$: altrimenti $\frac 1\lambda$ non esiste. Le altre equazioni non cambiano.
> 3. **Mossa (III).** Cambia solo la riga $i$: la nuova equazione $i$ è la vecchia più $\lambda$ volte l'equazione $j$, cioè
>    $$(a_{i1} + \lambda a_{j1})x_1 + \cdots + (a_{in} + \lambda a_{jn})x_n = b_i + \lambda b_j.$$
>    Se una lista risolve le due vecchie, risolve anche la loro somma: quindi risolve la nuova riga $i$. Se una lista risolve le due nuove, togli dalla nuova riga $i$ la riga $j$ moltiplicata per $\lambda$: ritrovi la vecchia riga $i$. Funziona perché la riga $j$ è rimasta intatta. Per questo le due righe devono essere diverse.
> 4. In tutti e tre i casi le liste che risolvono il sistema sono le stesse prima e dopo la mossa. Quindi $S$ non cambia.

### L'indovinello risolto solo con le mosse

Adesso rifacciamo l'indovinello dall'inizio alla fine, senza scrivere nessuna lettera: solo mosse sulla matrice completa.

> [!ESEMPIO] L'indovinello risolto con le mosse
> $$\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right) \xrightarrow{R_2 \to R_2 - R_1} \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 0 & -2 & -4 \end{array}\right)$$
> $$\xrightarrow{R_2 \to -\frac 12 R_2} \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 0 & 1 & 2 \end{array}\right) \xrightarrow{R_1 \to R_1 - R_2} \left(\begin{array}{cc|c} 1 & 0 & 3 \\ 0 & 1 & 2 \end{array}\right)$$
> 1. **La riga 2 diventa la riga 2 meno la riga 1.** È il conto già fatto sopra: la riga 2 diventa $(0, -2 \mid -4)$.
> 2. **La riga 2 viene moltiplicata per $-\frac 12$.** Vuol dire dividerla per $-2$. Primo numero: $0 : (-2) = 0$. Secondo numero: $-2 : (-2) = 1$. Terzo numero: $-4 : (-2) = 2$. La riga 2 diventa $(0, 1 \mid 2)$.
> 3. **La riga 1 diventa la riga 1 meno la riga 2.** La riga 1 è $(1, 1 \mid 5)$ e la riga 2 adesso è $(0, 1 \mid 2)$. Primo numero: $1 - 0 = 1$. Secondo numero: $1 - 1 = 0$. Terzo numero: $5 - 2 = 3$. La riga 1 diventa $(1, 0 \mid 3)$.
>
> Rileggi l'ultima matrice come sistema. La riga 1 dice $1x + 0y = 3$, cioè $x = 3$. La riga 2 dice $0x + 1y = 2$, cioè $y = 2$. La soluzione si legge nell'ultima colonna.

> [!TRAPPOLA] Una mossa alla volta
> Non fare due mosse **insieme** usando per tutte e due le righe vecchie.
>
> Parti dalla matrice dell'indovinello. Fai nello stesso momento due mosse: «riga 1 meno riga 2» e «riga 2 meno riga 1», tutte e due con le righe di partenza.
>
> - Nuova riga 1: $(1 - 1,\ 1 - (-1) \mid 5 - 1)$, cioè $(0, 2 \mid 4)$.
> - Nuova riga 2: $(1 - 1,\ -1 - 1 \mid 1 - 5)$, cioè $(0, -2 \mid -4)$.
>
> $$\left(\begin{array}{cc|c} 0 & 2 & 4 \\ 0 & -2 & -4 \end{array}\right)$$
> Adesso le due righe dicono la stessa cosa: che $y$ vale 2. Di $x$ non si sa più niente: può valere qualsiasi numero. Sembrano infinite soluzioni. Ma l'indovinello ne aveva **una sola**: un indizio è andato perso.
>
> La regola: dopo ogni mossa, la mossa seguente usa le righe **nuove**. Più mosse nello stesso passaggio vanno bene solo se la riga usata per cambiare le altre resta ferma.

> [!TRAPPOLA] Solo righe, mai colonne
> Per risolvere un sistema le mosse si fanno sulle **righe**. Una riga è un'equazione, e un'equazione si può riscrivere. Una colonna invece è un'incognita, oppure è la lista dei termini noti. Mescolare due colonne cambia l'indovinello.
>
> Un esempio. Nella matrice dell'indovinello somma la prima colonna all'ultima. Il 5 diventa $5 + 1 = 6$ e l'1 diventa $1 + 1 = 2$. Il sistema nuovo ha gli indizi «la somma fa 6» e «la differenza fa 2». La sua soluzione è $(4, 2)$, non più $(3, 2)$.

::: prova Nella matrice $\left(\begin{array}{cc|c} 1 & 3 & 2 \\ 2 & 7 & 5 \end{array}\right)$ fai la mossa $R_2 \to R_2 - 2R_1$. Quale diventa la riga 2?
Due volte la riga 1 fa $(2, 6 \mid 4)$. Poi sottrai un numero alla volta: $2 - 2 = 0$, poi $7 - 6 = 1$, poi $5 - 4 = 1$.

La nuova riga 2 è $(0, 1 \mid 1)$. La riga 1 non cambia.
:::

::: prova Nella matrice $\left(\begin{array}{cc|c} 1 & 4 & 3 \\ 5 & 2 & 1 \end{array}\right)$ quale mossa fa diventare 0 il 5?
La mossa $R_2 \to R_2 - 5R_1$. Sopra il 5 c'è un 1, e $5 - 5 \cdot 1 = 0$.

Cinque volte la riga 1 fa $(5, 20 \mid 15)$. La riga 2 diventa $(5 - 5,\ 2 - 20 \mid 1 - 15)$, cioè $(0, -18 \mid -14)$.
:::

> [!RICORDA]
> - Le mosse di Gauss sono tre: scambiare due righe, moltiplicare una riga per un numero **diverso da zero**, sommare a una riga un multiplo di **un'altra** riga.
> - Ogni mossa vale per la riga intera, termine noto compreso.
> - Le mosse non cambiano le soluzioni, perché ognuna si può disfare.
> - Una mossa alla volta, e solo sulle righe.

## La forma che si risolve dal basso: gli scalini (pp. 51–52)

Adesso sai riscrivere gli indizi. Resta da decidere **verso quale forma** riscriverli. La risposta: verso una forma a scala, perché un sistema fatto a scala si risolve quasi da solo.

### Un sistema già pronto

Guarda questo sistema con tre incognite.

$$\begin{cases} x + 2y - z = 2 \\ \phantom{x + {}} y + 3z = 5 \\ \phantom{x + y + {}} 2z = 4 \end{cases}$$

Ogni equazione ha un'incognita in meno di quella sopra. L'ultima ne ha una sola. Allora conviene partire **dal basso**.

> [!RIPASSO] sostituire
> **Sostituire** vuol dire mettere un numero al posto di una lettera.
>
> Per esempio: sai che $z$ vale 2, e hai l'equazione $y + 3z = 5$. Al posto di $z$ scrivi 2. Viene $y + 3 \cdot 2 = 5$, cioè $y + 6 = 5$. Adesso c'è una lettera sola, e l'equazione si risolve.

1. **Terza equazione.** È $2z = 4$. Dividi per 2 i due lati: $z = 2$.
2. **Seconda equazione.** È $y + 3z = 5$. Sostituisci 2 al posto di $z$: viene $y + 6 = 5$. Togli 6 dai due lati: $y = 5 - 6 = -1$.
3. **Prima equazione.** È $x + 2y - z = 2$. Sostituisci $-1$ al posto di $y$ e 2 al posto di $z$. Il pezzo $2y$ diventa $2 \cdot (-1) = -2$. Quindi viene $x - 2 - 2 = 2$, cioè $x - 4 = 2$. Somma 4 ai due lati: $x = 6$.

La soluzione è $(6, -1, 2)$. Controllo nelle tre equazioni:

$$6 + 2 \cdot (-1) - 2 = 6 - 2 - 2 = 2 \qquad\quad -1 + 3 \cdot 2 = -1 + 6 = 5 \qquad\quad 2 \cdot 2 = 4$$

Tutte e tre vere. Questo modo di risolvere, dal basso verso l'alto, si chiama **sostituzione all'indietro**.

### La scala nella matrice

Ecco la matrice completa dello stesso sistema. I tre numeri nei riquadri sono il primo numero diverso da zero di ogni riga.

$$\left(\begin{array}{ccc|c} \boxed{1} & 2 & -1 & 2 \\ 0 & \boxed{1} & 3 & 5 \\ 0 & 0 & \boxed{2} & 4 \end{array}\right)$$

I riquadri scendono verso destra, come i gradini di una scala. Sotto la scala ci sono solo zeri. Gli zeri sono le incognite che mancano: per questo ogni riga ha un'incognita in meno di quella sopra.

Servono due parole nuove.

La prima è **pivot**. Il pivot di una riga è il suo primo numero diverso da zero, leggendo da sinistra. È una parola francese che vuol dire «perno».

| Riga | Pivot | In quale colonna |
|---|---|---|
| $(0, 0, 3, 5)$ | $3$ | colonna 3 |
| $(2, 0, 0, 1)$ | $2$ | colonna 1 |
| $(0, -4, 0, 0)$ | $-4$ | colonna 2 |
| $(0, 0, 0, 0)$ | non c'è | una riga di soli zeri non ha pivot |

Una riga fatta solo di zeri si chiama **riga nulla**. «Nullo» vuol dire «uguale a zero».

La seconda parola è **matrice a scalini**. Una matrice è a scalini quando rispetta due regole.

1. Le righe nulle, se ci sono, stanno tutte **in fondo**.
2. Scendendo di una riga, il pivot si sposta **a destra** di almeno una colonna.

Le dispense lo scrivono così.

> [!DEF] 11.5 · Pivot e matrice a scalini
> Sia $C$ una matrice qualsiasi. Per ogni riga $R_i$ di $C$ chiamiamo **pivot** il primo elemento non nullo della riga. Una **matrice a scalini** è una matrice in cui tutte le righe nulle sono in fondo e il pivot di ogni riga non nulla è strettamente più a destra del pivot della riga non nulla precedente.

**Come si legge.**

- $C$ è una matrice qualsiasi, e $R_i$ è la sua riga numero $i$.
- «Elemento non nullo» vuol dire «numero diverso da zero». «Riga non nulla» vuol dire «riga con almeno un numero diverso da zero».
- «Strettamente più a destra» vuol dire: almeno una colonna più a destra. La stessa colonna non basta.
- «Della riga non nulla precedente» vuol dire: della riga subito sopra.

Dalle due regole viene una conseguenza: **sotto ogni pivot ci sono solo zeri**. Se sotto un pivot ci fosse un numero diverso da zero, il pivot di quella riga starebbe nella stessa colonna, oppure più a sinistra.

Il pivot può anche spostarsi di più colonne in un colpo solo. Gli scalini possono essere larghi.

> [!ESEMPIO] 11.6 · Scalini sì, scalini no
> Le dispense mostrano due matrici a scalini:
> $$\begin{pmatrix} 1 & 0 & 5 \\ 0 & -1 & -1 \end{pmatrix}, \qquad \begin{pmatrix} 7 & -2 & 9 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
> - **Prima matrice.** Il pivot della riga 1 è 1, in colonna 1. Il pivot della riga 2 è $-1$, in colonna 2. Il secondo sta più a destra del primo: è a scalini.
> - **Seconda matrice.** Il pivot della riga 1 è 7, in colonna 1. Il pivot della riga 2 è 1, in colonna 3. Lo scalino salta la colonna 2, ed è permesso. La riga nulla sta in fondo: è a scalini.
>
> E due matrici che **non** sono a scalini:
> $$\begin{pmatrix} 1 & 2 & -1 \\ 4 & 0 & 6 \\ 0 & 7 & 0 \end{pmatrix}, \qquad \begin{pmatrix} 0 & 8 \\ 0 & 1 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}.$$
> - **Terza matrice.** Il pivot della riga 1 è 1, in colonna 1. Il pivot della riga 2 è 4, anche lui in colonna 1. Non sta più a destra: non è a scalini.
> - **Quarta matrice.** Il pivot della riga 1 è 8, in colonna 2. Il pivot della riga 2 è 1, anche lui in colonna 2. Stessa colonna: non è a scalini.

Altre quattro matrici, per fissare le due regole.

| Matrice | A scalini? | Motivo |
|---|---|---|
| $\begin{pmatrix} 2 & 1 & 0 & 3 \\ 0 & 0 & 5 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$ | sì | pivot in colonna 1 e in colonna 3, riga nulla in fondo |
| $\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 4 & 5 \end{pmatrix}$ | no | la riga nulla non è in fondo |
| $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ | no | il pivot della riga 3 (colonna 2) sta a sinistra di quello della riga 2 (colonna 3) |
| $\begin{pmatrix} 0 & 3 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ | sì | la prima colonna può essere tutta di zeri: i pivot sono in colonna 2 e in colonna 3 |

> [!TRAPPOLA] Gli scalini non devono stare sulla diagonale
> I pivot non devono per forza stare uno nella riga 1 e colonna 1, il seguente nella riga 2 e colonna 2, e così via. Conta solo che scendendo si spostino verso destra.
>
> Vale anche il contrario: una matrice può avere i numeri «al posto giusto» sulla diagonale e non essere a scalini. È il caso della terza matrice della tabella.

::: prova Trova il pivot di ogni riga: $(0, 5, 1)$, poi $(2, 0, 0)$, poi $(0, 0, 0)$.
Nella prima riga il pivot è 5, in colonna 2. Nella seconda è 2, in colonna 1. La terza è una riga nulla: non ha pivot.
:::

::: prova La matrice $\begin{pmatrix} 3 & 1 & 2 \\ 0 & 0 & 7 \end{pmatrix}$ è a scalini? E la matrice $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$?
La prima sì. Il pivot della riga 1 è 3, in colonna 1. Il pivot della riga 2 è 7, in colonna 3, più a destra.

La seconda no. Il pivot della riga 1 è in colonna 2. Quello della riga 2 è in colonna 1, cioè più a sinistra. Basta scambiare le due righe e diventa a scalini.
:::

::: prova Risolvi dal basso il sistema $x + y = 7$, $2y = 6$.
Seconda equazione: $2y = 6$, quindi $y = 3$. Prima equazione: $x + 3 = 7$, quindi $x = 4$.

Controllo: $4 + 3 = 7$ e $2 \cdot 3 = 6$.
:::

> [!RICORDA]
> - Il **pivot** di una riga è il suo primo numero diverso da zero, leggendo da sinistra.
> - Una matrice è **a scalini** se le righe nulle stanno in fondo e ogni pivot sta più a destra di quello della riga sopra.
> - Sotto ogni pivot ci sono solo zeri.
> - Un sistema a scalini si risolve dal basso: **sostituzione all'indietro**.

## Arrivare agli scalini: l'algoritmo di Gauss (pp. 52–53)

Hai le mosse, e hai la forma a cui arrivare. Manca la strada: quali mosse fare, e in quale ordine.

Un **algoritmo** è una ricetta: un elenco di passi precisi che, eseguiti in ordine, portano sempre al risultato. L'**algoritmo di Gauss** è la ricetta che porta a scalini una matrice qualsiasi, usando solo le tre mosse.

### L'idea: una colonna alla volta

Si lavora da sinistra verso destra.

1. Guardi la prima colonna. In alto vuoi un numero diverso da zero: sarà il primo pivot.
2. Sotto il pivot vuoi solo zeri. Li ottieni con la terza mossa, una riga alla volta.
3. Ora la prima riga e la prima colonna sono a posto. Le copri con un dito e ricominci sul pezzo di matrice che resta.

Vediamo il passo 2 su una matrice piccola.

> [!ESEMPIO] Uno zero sotto il pivot
> $$\left(\begin{array}{cc|c} 2 & 1 & 4 \\ 6 & 5 & 8 \end{array}\right)$$
> In alto a sinistra c'è 2, diverso da zero: è il pivot. Sotto c'è 6, e vogliamo farlo diventare 0.
>
> Quante volte va tolta la riga 1? Tante volte quante il pivot sta nel numero da eliminare: $6 : 2 = 3$. Infatti $6 - 3 \cdot 2 = 0$. La mossa è $R_2 \to R_2 - 3R_1$.
>
> | | colonna 1 | colonna 2 | termine noto |
> |---|---|---|---|
> | riga 2 | $6$ | $5$ | $8$ |
> | 3 volte la riga 1 | $3 \cdot 2 = 6$ | $3 \cdot 1 = 3$ | $3 \cdot 4 = 12$ |
> | differenza | $6 - 6 = 0$ | $5 - 3 = 2$ | $8 - 12 = -4$ |
>
> $$\left(\begin{array}{cc|c} 2 & 1 & 4 \\ 0 & 2 & -4 \end{array}\right)$$
> La matrice è a scalini. I pivot sono il 2 della riga 1, in colonna 1, e il 2 della riga 2, in colonna 2.
>
> Ora il sistema si risolve dal basso. La riga 2 dice $2y = -4$, quindi $y = -2$. La riga 1 dice $2x + y = 4$. Sostituisci: $2x - 2 = 4$, quindi $2x = 6$ e $x = 3$.
>
> Controllo nelle due equazioni di partenza: $2 \cdot 3 + (-2) = 4$ e $6 \cdot 3 + 5 \cdot (-2) = 18 - 10 = 8$.

Il numero di volte si trova sempre nello stesso modo:

$$\text{quante volte togliere la riga del pivot} = \frac{\text{numero da eliminare}}{\text{pivot}}$$

Se il risultato è negativo, togliere un numero negativo di volte vuol dire sommare. Lo vedrai tra poco nell'Esempio 11.7.

### Due imprevisti

Nel passo 1 possono capitare due imprevisti.

**In alto c'è uno zero.** Uno zero non può fare da pivot: con lui non si elimina niente. Guarda più in basso nella stessa colonna. Se trovi un numero diverso da zero, scambia le due righe: è la prima mossa.

**Tutta la colonna è fatta di zeri.** Allora in quella colonna non c'è niente da fare: resta senza pivot. Passi alla colonna dopo, restando sulla stessa riga.

### La ricetta completa

> [!METODO] L'algoritmo di Gauss, a parole
> Parti dalla prima riga e dalla prima colonna.
>
> 1. **Cerca il pivot.** Guarda la colonna, dalla riga in cui sei in giù. Se il numero in alto è zero, scambia la riga con una più in basso che in quella colonna ha un numero diverso da zero. Se sono tutti zeri, passa alla colonna dopo e ripeti questo passo.
> 2. **Metti gli zeri sotto.** Guarda ogni riga più in basso. Se sotto il pivot ha un numero diverso da zero, toglile la riga del pivot tante volte quanto fa «numero da eliminare diviso pivot».
> 3. **Scendi.** Passa alla riga dopo e alla colonna dopo. Ricomincia dal passo 1.
> 4. **Fermati** quando sono finite le righe oppure le colonne. La matrice è a scalini.

> [!APPROFONDIMENTO] l'algoritmo con le parole delle dispense (p. 52)
> Le dispense descrivono gli stessi passi con i simboli.
>
> 1. Se $C_{11} = 0$ e $C_{i1} \neq 0$ per qualche $i$, scambiamo la prima riga con una riga in modo da ottenere $C_{11} \neq 0$. Se invece $C_{i1} = 0$ per ogni $i$, continuiamo dal punto (1) lavorando sulla sottomatrice ottenuta togliendo soltanto la prima colonna.
> 2. Per ogni riga $R_i$ con $i \ge 2$ e con $C_{i1} \neq 0$ sostituiamo $R_i$ con la riga
>    $$R_i - \frac{C_{i1}}{C_{11}} R_1.$$
>    In questo modo la nuova riga $R_i$ avrà $C_{i1} = 0$.
> 3. Abbiamo ottenuto $C_{i1} = 0$ per ogni $i \ge 2$. Continuiamo dal punto (1) lavorando sulla sottomatrice ottenuta togliendo la prima riga e la prima colonna.
>
> **Come si legge.**
>
> - $C_{ij}$ è il numero nella riga $i$ e nella colonna $j$ della matrice $C$. Quindi $C_{11}$ è il numero in alto a sinistra. $C_{i1}$ è il numero della riga $i$ nella prima colonna.
> - $i \ge 2$ si legge «$i$ maggiore o uguale a 2». Sono le righe dalla seconda in giù.
> - La frazione del passo 2 è «numero da eliminare diviso pivot».
> - Una **sottomatrice** è un pezzo della matrice: quello che resta dopo aver coperto alcune righe o alcune colonne.
> - Nel passo 2 la prima riga resta ferma e serve a cambiare tutte le altre. Per questo le righe sotto si possono sistemare tutte nello stesso passaggio.

Adesso l'esempio delle dispense, con tutti e due gli imprevisti.

> [!ESEMPIO] 11.7 · Gauss passo per passo
> Le dispense applicano l'algoritmo a questa matrice, con 3 righe e 4 colonne:
> $$C = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 1 & 1 & 2 & -3 \\ -1 & 2 & 1 & 1 \end{pmatrix}.$$
> **Primo passo: serve uno scambio.** In alto a sinistra c'è 0, che non può fare da pivot. Nella riga 2 la prima colonna ha un 1. Scambiamo la riga 1 con la riga 2: mossa $R_1 \leftrightarrow R_2$.
> $$C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ -1 & 2 & 1 & 1 \end{pmatrix}.$$
> **Secondo passo: zeri sotto il primo pivot.** Il pivot è l'1 in alto a sinistra. Nella riga 2, sotto di lui, c'è già 0: niente da fare. Nella riga 3 c'è $-1$.
>
> Quante volte togliere la riga 1? Numero da eliminare diviso pivot: $-1 : 1 = -1$. Togliere $-1$ volte vuol dire sommare una volta. La mossa è $R_3 \to R_3 + R_1$.
>
> | | colonna 1 | colonna 2 | colonna 3 | colonna 4 |
> |---|---|---|---|---|
> | riga 3 | $-1$ | $2$ | $1$ | $1$ |
> | riga 1 | $1$ | $1$ | $2$ | $-3$ |
> | somma | $-1 + 1 = 0$ | $2 + 1 = 3$ | $1 + 2 = 3$ | $1 - 3 = -2$ |
>
> $$C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 3 & 3 & -2 \end{pmatrix}.$$
> **Terzo passo: si scende.** La prima riga e la prima colonna sono a posto. Coprile e guarda il resto. Ora sei nella riga 2 e nella colonna 2: lì c'è 1, diverso da zero. È il secondo pivot. Sotto di lui c'è 3.
>
> Quante volte togliere la riga 2? $3 : 1 = 3$. La mossa è $R_3 \to R_3 - 3R_2$.
>
> | | colonna 1 | colonna 2 | colonna 3 | colonna 4 |
> |---|---|---|---|---|
> | riga 3 | $0$ | $3$ | $3$ | $-2$ |
> | 3 volte la riga 2 | $3 \cdot 0 = 0$ | $3 \cdot 1 = 3$ | $3 \cdot 1 = 3$ | $3 \cdot 0 = 0$ |
> | differenza | $0 - 0 = 0$ | $3 - 3 = 0$ | $3 - 3 = 0$ | $-2 - 0 = -2$ |
>
> $$C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$
> **Quarto passo: l'ultima riga.** Ora sei nella riga 3 e nella colonna 3. Lì c'è 0, e sotto non ci sono altre righe. La colonna 3 resta senza pivot. Passi alla colonna 4: lì c'è $-2$, che è il terzo pivot. Sotto non c'è niente da sistemare.
>
> La matrice è a scalini e l'algoritmo termina. I pivot sono 1, 1 e $-2$. Stanno nelle colonne 1, 2 e 4.

Nello strumento qui sotto c'è la matrice dell'Esempio 11.7. Premi «Calcola»: vedi le stesse mosse delle dispense, una per riga, con le righe cambiate in evidenza. Lo strumento scrive anche «rk»: è il numero dei pivot, che nella lezione L12 si chiamerà rango. Poi cambia i numeri e riprova con una matrice tua.

```widget gauss
titolo: Prova l'algoritmo sulla matrice dell'Esempio 11.7, poi cambia i numeri
matrice: 0 1 1 0; 1 1 2 -3; -1 2 1 1
modo: scala
modi: scala ridotta
```

Una colonna può restare senza pivot anche a metà del lavoro. Prova a scrivere nello strumento la matrice `1 1 2; 2 2 5; 3 3 1`. Dopo le prime due mosse la seconda colonna, sotto la prima riga, è tutta di zeri. L'algoritmo la salta e cerca il pivot nella terza colonna: è il secondo imprevisto. Alla fine i pivot sono due, nelle colonne 1 e 3, e in fondo c'è una riga nulla.

> [!OLTRE] come fare meno conti a mano
> Il libro di Martelli (§3.1.3) osserva che non serve seguire l'algoritmo alla lettera. Va bene **qualsiasi** sequenza di mosse di Gauss che arrivi a una matrice a scalini. Senza calcolatrice aiutano tre trucchi.
>
> 1. **Un 1 in cima.** Se nella prima colonna c'è un 1, oppure un $-1$, porta quella riga in alto con uno scambio. Dividere per 1 non crea frazioni.
> 2. **Evitare le frazioni.** Il pivot è 2 e sotto c'è 3. La ricetta direbbe di togliere la riga 1 per $\frac 32$ volte. Puoi invece moltiplicare prima la riga 2 per 2, e poi togliere 3 volte la riga 1. In una scrittura sola: $R_2 \to 2R_2 - 3R_1$. Nella prima colonna viene $2 \cdot 3 - 3 \cdot 2 = 0$, senza frazioni. Sono una mossa (II) e una mossa (III), una dopo l'altra. L'esercizio 6 usa questo trucco.
> 3. **Rimpicciolire.** Se tutti i numeri di una riga si dividono per lo stesso intero, dividi subito la riga: è una mossa (II). La riga $(2, 4 \mid 6)$ diventa $(1, 2 \mid 3)$, e i conti dopo sono più piccoli.

::: prova Porta a scalini la matrice $\left(\begin{array}{cc|c} 1 & 2 & 3 \\ 2 & 5 & 8 \end{array}\right)$ e risolvi il sistema.
Il pivot è l'1 in alto a sinistra. Sotto c'è 2, quindi la mossa è $R_2 \to R_2 - 2R_1$. La nuova riga 2 è $(2 - 2,\ 5 - 4 \mid 8 - 6)$, cioè $(0, 1 \mid 2)$.

Dal basso: la riga 2 dice $y = 2$. La riga 1 dice $x + 2y = 3$, cioè $x + 4 = 3$, quindi $x = -1$.

Controllo nelle equazioni di partenza: $-1 + 2 \cdot 2 = 3$ e $2 \cdot (-1) + 5 \cdot 2 = 8$.
:::

::: prova Una matrice comincia così: $\begin{pmatrix} 0 & 2 \\ 3 & 1 \end{pmatrix}$. Qual è la prima mossa dell'algoritmo?
Lo scambio $R_1 \leftrightarrow R_2$. In alto a sinistra c'è 0, che non può fare da pivot, e sotto c'è 3.

Dopo lo scambio la matrice è $\begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$, che è già a scalini.
:::

> [!RICORDA]
> - L'**algoritmo di Gauss** porta a scalini qualsiasi matrice: una colonna alla volta, da sinistra.
> - In ogni colonna: trova il pivot, se serve con uno scambio. Poi metti zeri sotto.
> - Quante volte togliere la riga del pivot: numero da eliminare diviso pivot.
> - Una colonna tutta di zeri si salta: resta senza pivot.

## Pulire anche sopra i pivot: Gauss–Jordan (pp. 53–54)

Una matrice a scalini si risolve già, dal basso. Ma resta ancora un po' di lavoro: le sostituzioni. Con qualche mossa in più si arriva a una forma in cui non resta nessun conto, e la soluzione si legge.

L'hai già visto con l'indovinello. La matrice finale era questa:

$$\left(\begin{array}{cc|c} 1 & 0 & 3 \\ 0 & 1 & 2 \end{array}\right)$$

La riga 1 dice che $x$ vale 3. La riga 2 dice che $y$ vale 2. Si legge così bene per due motivi.

- Ogni pivot vale **1**. Così l'incognita compare da sola, senza un numero davanti.
- Sopra e sotto ogni pivot ci sono solo **zeri**. Così ogni incognita con il pivot compare in una riga sola.

Per arrivare a questa forma da una matrice a scalini servono due lavori.

- **Zeri sopra i pivot.** Si ottengono con la terza mossa, come gli zeri sotto. Stavolta la riga del pivot si toglie dalle righe che stanno **sopra**.
- **Pivot uguali a 1.** Si ottengono con la seconda mossa: dividi ogni riga per il suo pivot.

Le dispense lo mostrano continuando l'Esempio 11.7. Nei conti compare una frazione.

> [!RIPASSO] una frazione per un numero
> Dividere un numero per un altro dà una frazione: $3 : 2 = \frac 32$. Se i due numeri sono tutti e due negativi il risultato è positivo: $(-3) : (-2) = \frac 32$.
>
> Per moltiplicare una frazione per un numero intero moltiplichi il numero sopra: $\frac 32 \cdot 4 = \frac{12}2 = 6$. Con un numero negativo il risultato è negativo: $\frac 32 \cdot (-2) = \frac{-6}2 = -3$.

> [!ESEMPIO] 11.8 · Zeri sopra i pivot
> Ripartiamo dalla matrice a scalini dell'Esempio 11.7. I pivot sono nei riquadri.
> $$C = \begin{pmatrix} \boxed{1} & 1 & 2 & -3 \\ 0 & \boxed{1} & 1 & 0 \\ 0 & 0 & 0 & \boxed{-2} \end{pmatrix}.$$
> **Sopra il secondo pivot.** Il secondo pivot è l'1 della riga 2, in colonna 2. Sopra di lui, nella riga 1, c'è 1. Per farlo diventare 0 togli la riga 2 una volta: mossa $R_1 \to R_1 - R_2$.
>
> | | colonna 1 | colonna 2 | colonna 3 | colonna 4 |
> |---|---|---|---|---|
> | riga 1 | $1$ | $1$ | $2$ | $-3$ |
> | riga 2 | $0$ | $1$ | $1$ | $0$ |
> | differenza | $1 - 0 = 1$ | $1 - 1 = 0$ | $2 - 1 = 1$ | $-3 - 0 = -3$ |
>
> $$C = \begin{pmatrix} 1 & 0 & 1 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$
> **Sopra il terzo pivot.** Il terzo pivot è il $-2$ della riga 3, in colonna 4. Sopra di lui ci sono 0, nella riga 2, e $-3$, nella riga 1. Lo 0 va già bene. Resta il $-3$.
>
> Quante volte togliere la riga 3? Numero da eliminare diviso pivot: $(-3) : (-2) = \frac 32$. La mossa è $R_1 \to R_1 - \frac 32 R_3$.
>
> La riga 3 ha un solo numero diverso da zero, l'ultimo. Quindi nella riga 1 cambia solo l'ultimo numero. Prima calcola $\frac 32 \cdot (-2) = -3$. Poi sottrai: $-3 - (-3) = -3 + 3 = 0$.
> $$C = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$
> Ora sopra ogni pivot ci sono solo zeri.

> [!ESEMPIO] 11.9 · Pivot uguali a 1
> Nella matrice dell'Esempio 11.8 i primi due pivot valgono già 1. Il terzo vale $-2$. Dividiamo la riga 3 per $-2$, cioè la moltiplichiamo per $-\frac 12$. La mossa è $R_3 \to -\frac 12 R_3$.
>
> Gli zeri della riga 3 restano zeri. L'ultimo numero diventa $-2 : (-2) = 1$.
> $$C = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

Le dispense danno un nome a tutto il procedimento.

> [!METODO] L'algoritmo di Gauss–Jordan (p. 54)
> L'algoritmo appena descritto si chiama **algoritmo di Gauss–Jordan** e consiste in due fasi:
> 1. trasformare la matrice a scalini tramite l'algoritmo di Gauss;
> 2. ottenere solo zeri sopra i pivot con mosse (III) e tutti i pivot uguali a 1 con mosse (II).

La matrice che esce da Gauss–Jordan si chiama **forma a scalini ridotta**. Si riconosce dalle colonne dei pivot: contengono un 1, al posto del pivot, e zeri in tutte le altre caselle.

Ecco un secondo esempio delle dispense, dall'inizio alla fine.

> [!ESEMPIO] 11.10 · Gauss–Jordan con le mosse sopra le frecce
> La mossa è scritta sopra ogni freccia.
> $$\begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 1 & 0 & 4 \end{pmatrix} \xrightarrow{R_3 \to R_3 - R_1} \begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 0 & 1 & 1 \end{pmatrix} \xrightarrow{R_3 \to R_3 - \frac 12 R_2} \begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$
> $$\xrightarrow{R_1 \to R_1 + \frac 12 R_2} \begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 2 \\ 0 & 0 & 0 \end{pmatrix} \xrightarrow{R_2 \to \frac 12 R_2} \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$
> **Fase 1: a scalini.**
>
> 1. **Prima freccia.** Il primo pivot è l'1 in alto a sinistra. Nella riga 2 sotto di lui c'è già 0. Nella riga 3 c'è 1: togli la riga 1 una volta. Primo numero: $1 - 1 = 0$. Secondo numero: $0 - (-1) = 0 + 1 = 1$. Terzo numero: $4 - 3 = 1$. La riga 3 diventa $(0, 1, 1)$.
> 2. **Seconda freccia.** Il secondo pivot è il 2 della riga 2. Sotto c'è 1. Quante volte togliere la riga 2? $1 : 2 = \frac 12$. Metà della riga 2 è $(0, 1, 1)$. Togliendola dalla riga 3 viene $(0 - 0,\ 1 - 1,\ 1 - 1)$, cioè $(0, 0, 0)$. La riga 3 è diventata nulla, e la matrice è a scalini. I pivot sono 1 e 2, nelle colonne 1 e 2.
>
> **Fase 2: zeri sopra i pivot e pivot uguali a 1.**
>
> 3. **Terza freccia.** Sopra il secondo pivot c'è $-1$. Numero da eliminare diviso pivot: $-1 : 2 = -\frac 12$. Togliere $-\frac 12$ volte vuol dire sommare metà della riga 2, che è $(0, 1, 1)$. Primo numero: $1 + 0 = 1$. Secondo numero: $-1 + 1 = 0$. Terzo numero: $3 + 1 = 4$. La riga 1 diventa $(1, 0, 4)$.
> 4. **Quarta freccia.** Il secondo pivot vale 2: dividi la riga 2 per 2. Viene $(0, 1, 1)$.
>
> L'ultima matrice è la forma a scalini ridotta.

> [!OLTRE] la forma a scalini non è unica, quella ridotta sì
> Con mosse diverse si arriva a matrici a scalini diverse. Nell'Esempio 11.7 puoi moltiplicare alla fine la riga 2 per 5: ottieni un'altra matrice a scalini, valida quanto la prima.
>
> La forma ridotta di Gauss–Jordan invece è **sempre la stessa**, qualunque strada tu segua. È un teorema che nel corso non si dimostra.
>
> C'è poi una cosa che non cambia mai, neanche tra forme a scalini diverse: **quanti** sono i pivot e in quali **colonne** stanno. Nella lezione L12 il numero dei pivot prenderà un nome: rango.

::: prova Porta alla forma ridotta la matrice $\left(\begin{array}{cc|c} 1 & 2 & 5 \\ 0 & 1 & 2 \end{array}\right)$ e leggi la soluzione.
I pivot valgono già 1. Sopra il secondo pivot c'è 2, quindi la mossa è $R_1 \to R_1 - 2R_2$. La nuova riga 1 è $(1 - 0,\ 2 - 2 \mid 5 - 4)$, cioè $(1, 0 \mid 1)$.

La forma ridotta è $\left(\begin{array}{cc|c} 1 & 0 & 1 \\ 0 & 1 & 2 \end{array}\right)$. Si legge $x = 1$ e $y = 2$.
:::

::: prova Quali mosse portano la matrice $\left(\begin{array}{cc|c} 2 & 0 & 6 \\ 0 & 3 & 9 \end{array}\right)$ alla forma ridotta?
Sopra e sotto i pivot ci sono già zeri. Basta dividere ogni riga per il suo pivot.

La riga 1 divisa per 2 diventa $(1, 0 \mid 3)$. La riga 2 divisa per 3 diventa $(0, 1 \mid 3)$. Quindi $x = 3$ e $y = 3$.
:::

> [!RICORDA]
> - **Gauss–Jordan** è Gauss con due ritocchi: zeri anche **sopra** i pivot, e pivot uguali a **1**.
> - Il risultato è la **forma a scalini ridotta**: nella colonna di ogni pivot c'è un 1, e per il resto zeri.
> - Per contare le soluzioni basta la forma a scalini. Per scriverle conviene la forma ridotta.

## Leggere la risposta: nessuna, una, infinite (pp. 54–55)

Adesso hai tutti i pezzi. Scrivi la matrice completa, la porti nella forma ridotta con Gauss–Jordan, e poi guardi **dove sono i pivot**. La posizione dei pivot dice in quale dei tre finali sei.

Vediamo i tre finali uno alla volta, ognuno su una matrice che hai già visto ridurre.

### Primo finale: un pivot dopo la barra

> [!ESEMPIO] La matrice dell'Esempio 11.7 come sistema
> Rileggi la matrice dell'Esempio 11.7 come matrice completa: tre colonne per le incognite $x$, $y$, $z$ e l'ultima per i termini noti.
> $$\begin{cases} y + z = 0 \\ x + y + 2z = -3 \\ -x + 2y + z = 1 \end{cases} \qquad \left(\begin{array}{ccc|c} 0 & 1 & 1 & 0 \\ 1 & 1 & 2 & -3 \\ -1 & 2 & 1 & 1 \end{array}\right)$$
> Gli Esempi 11.7, 11.8 e 11.9 l'hanno portata alla forma ridotta:
> $$\left(\begin{array}{ccc|c} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array}\right)$$
> Guarda l'ultima riga. Tradotta in equazione dice $0x + 0y + 0z = 1$. A sinistra viene 0, qualunque numero tu metta al posto delle tre incognite. Quindi la riga dice $0 = 1$, che è falsa sempre.
>
> Un indizio impossibile rende impossibile tutto l'indovinello: il sistema **non ha soluzioni**.

Il segnale è questo: un **pivot nell'ultima colonna**, quella dopo la barra. Vuol dire che una riga ha tutti zeri prima della barra e un numero diverso da zero dopo.

Per accorgersene non serve arrivare alla forma ridotta. Già la forma a scalini dell'Esempio 11.7 aveva la riga $(0, 0, 0 \mid -2)$, cioè l'equazione $0 = -2$. Appena compare una riga così ci si può fermare.

Quando non ci sono soluzioni l'insieme $S$ è vuoto. Si scrive $S = \emptyset$. Il simbolo $\emptyset$ è l'**insieme vuoto**, cioè l'insieme senza elementi (lezione L01).

Attenzione a due righe che si assomigliano e dicono cose opposte.

| Riga | Equazione | Che cosa dice |
|---|---|---|
| $(0, 0, 0 \mid 0)$ | $0 = 0$ | è sempre vera: non toglie soluzioni e si ignora |
| $(0, 0, 0 \mid 5)$ | $0 = 5$ | è sempre falsa: il sistema non ha soluzioni |

### Secondo finale: un pivot per ogni incognita

> [!ESEMPIO] Una sola soluzione: la matrice dell'Esempio 11.10
> Rileggi la matrice dell'Esempio 11.10 come matrice completa. Le colonne sono 3: due per le incognite $x$ e $y$, una per i termini noti. Il sistema ha 3 equazioni e 2 incognite.
> $$\begin{cases} x - y = 3 \\ 2y = 2 \\ x = 4 \end{cases} \qquad \left(\begin{array}{cc|c} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 1 & 0 & 4 \end{array}\right)$$
> L'Esempio 11.10 l'ha portata alla forma ridotta:
> $$\left(\begin{array}{cc|c} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{array}\right)$$
> - Dopo la barra non c'è nessun pivot: nessuna riga impossibile.
> - La riga 1 dice $x = 4$. La riga 2 dice $y = 1$.
> - La riga 3 dice $0 = 0$: è vera sempre e si ignora.
>
> La soluzione è **una sola**: $(4, 1)$. Controllo nelle equazioni di partenza: $4 - 1 = 3$, poi $2 \cdot 1 = 2$, poi $x = 4$. Tutte vere.
>
> Tre indizi per due numeri non sono troppi, se vanno d'accordo. Qui il terzo indizio non dice niente che non si sapesse già dai primi due.

Il segnale è questo: nessun pivot dopo la barra, e **ogni colonna prima della barra ha il suo pivot**. Ogni incognita è fissata da una riga, e la soluzione si legge nell'ultima colonna.

### Terzo finale: un'incognita resta senza pivot

> [!ESEMPIO] Infinite soluzioni con un parametro
> $$\begin{cases} x + 2y + z = 1 \\ 2x + 4y + 3z = 3 \\ 3x + 6y + 5z = 5 \end{cases} \qquad \left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 2 & 4 & 3 & 3 \\ 3 & 6 & 5 & 5 \end{array}\right)$$
> **Gauss, prima colonna.** Il pivot è l'1 in alto a sinistra. Sotto ci sono 2 e 3. Le mosse sono $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - 3R_1$. La riga 1 resta ferma.
>
> | | colonna 1 | colonna 2 | colonna 3 | termine noto |
> |---|---|---|---|---|
> | riga 2 meno 2 volte la riga 1 | $2 - 2 = 0$ | $4 - 4 = 0$ | $3 - 2 = 1$ | $3 - 2 = 1$ |
> | riga 3 meno 3 volte la riga 1 | $3 - 3 = 0$ | $6 - 6 = 0$ | $5 - 3 = 2$ | $5 - 3 = 2$ |
>
> $$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 2 & 2 \end{array}\right)$$
> **Gauss, il resto.** Sotto la prima riga la colonna 2 è tutta di zeri: niente pivot, si salta. Nella colonna 3 il pivot è l'1 della riga 2. Sotto c'è 2, quindi la mossa è $R_3 \to R_3 - 2R_2$. Gli ultimi due numeri della riga 3 diventano $2 - 2 = 0$ e $2 - 2 = 0$.
> $$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
> **Gauss–Jordan.** Sopra il secondo pivot c'è 1, quindi la mossa è $R_1 \to R_1 - R_2$. La riga 1 diventa $(1 - 0,\ 2 - 0,\ 1 - 1 \mid 1 - 1)$, cioè $(1, 2, 0 \mid 0)$.
> $$\left(\begin{array}{ccc|c} 1 & 2 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
> **Lettura.** I pivot sono nelle colonne 1 e 3. Dopo la barra non ce ne sono: il sistema ha soluzioni. Le righe dicono:
>
> - riga 1: $x + 2y = 0$;
> - riga 2: $z = 1$;
> - riga 3: $0 = 0$, che si ignora.
>
> La colonna 2, quella di $y$, **non ha pivot**. Nessuna riga fissa il valore di $y$. Allora $y$ è libera: quanto vale lo scegli tu. Per ricordarlo le si dà un nome nuovo, la lettera $t$, e si scrive $y = t$.
>
> Dalla riga 1 viene $x + 2t = 0$. Togli $2t$ dai due lati: $x = -2t$. Tutte le soluzioni sono
> $$x = -2t, \qquad y = t, \qquad z = 1.$$
> Ogni valore di $t$ dà una soluzione diversa.
>
> | Scelgo | $x = -2t$ | $y = t$ | $z = 1$ | Soluzione |
> |---|---|---|---|---|
> | $t = 0$ | $0$ | $0$ | $1$ | $(0, 0, 1)$ |
> | $t = 1$ | $-2$ | $1$ | $1$ | $(-2, 1, 1)$ |
> | $t = 5$ | $-10$ | $5$ | $1$ | $(-10, 5, 1)$ |
>
> Controllo di $(-2, 1, 1)$ nelle tre equazioni di partenza: $-2 + 2 + 1 = 1$, poi $-4 + 4 + 3 = 3$, poi $-6 + 6 + 5 = 5$. Tutte vere.
>
> I valori possibili di $t$ sono infiniti, quindi le soluzioni sono **infinite**.

Tre parole nuove.

- La lettera $t$ si chiama **parametro**: è un numero che scegli tu. Le dispense scrivono $t \in \R$. Si legge «$t$ appartiene a $\R$» e vuol dire: $t$ può essere qualsiasi numero reale.
- Un'incognita senza pivot, che riceve un parametro, si chiama **variabile libera**.
- Un'incognita con il pivot si chiama **variabile dipendente**: il suo valore dipende dai parametri.

Il segnale del terzo finale è questo: nessun pivot dopo la barra, e **almeno una colonna prima della barra senza pivot**.

### Quando le incognite libere sono più di una

Le incognite libere possono essere più di una. Allora ognuna riceve il suo parametro: $t_1$, $t_2$, $t_3$. Il numerino in basso serve solo a distinguerli.

> [!ESEMPIO] Sei incognite, tre parametri
> Una matrice completa già in forma ridotta, con 6 incognite. Si chiamano $x_1$, $x_2$ e così via fino a $x_6$.
> $$\left(\begin{array}{cccccc|c} 0 & 1 & 2 & 0 & 0 & 3 & 4 \\ 0 & 0 & 0 & 1 & 0 & 5 & 6 \\ 0 & 0 & 0 & 0 & 1 & 7 & 8 \end{array}\right)$$
> **Dove sono i pivot.** Nella riga 1 il pivot è in colonna 2. Nella riga 2 è in colonna 4. Nella riga 3 è in colonna 5. Dopo la barra non ce ne sono: il sistema ha soluzioni.
>
> **Chi è libero.** Le colonne senza pivot sono la 1, la 3 e la 6. Quindi le incognite libere sono $x_1$, $x_3$ e $x_6$. A ognuna diamo un parametro:
> $$x_1 = t_1, \qquad x_3 = t_2, \qquad x_6 = t_3.$$
> **Le righe come equazioni.** Ogni numero va moltiplicato per l'incognita della sua colonna. Gli zeri non si scrivono.
> $$\begin{cases} x_2 + 2x_3 + 3x_6 = 4 \\ x_4 + 5x_6 = 6 \\ x_5 + 7x_6 = 8 \end{cases}$$
> **Dentro i parametri.** Al posto delle incognite libere scrivi i loro parametri.
> $$\begin{cases} x_2 + 2t_2 + 3t_3 = 4 \\ x_4 + 5t_3 = 6 \\ x_5 + 7t_3 = 8 \end{cases}$$
> **Parametri a destra.** In ogni riga lasci a sinistra solo l'incognita con il pivot. Tutto il resto passa a destra e cambia segno.
> $$\begin{cases} x_2 = 4 - 2t_2 - 3t_3 \\ x_4 = 6 - 5t_3 \\ x_5 = 8 - 7t_3 \end{cases}$$
> **Tutte le incognite in ordine.** Aggiungi le righe delle incognite libere.
> $$\begin{cases} x_1 = t_1 \\ x_2 = 4 - 2t_2 - 3t_3 \\ x_3 = t_2 \\ x_4 = 6 - 5t_3 \\ x_5 = 8 - 7t_3 \\ x_6 = t_3 \end{cases}$$
> Il sistema è risolto. I tre parametri sono liberi: ogni scelta dà una soluzione. Con tutti e tre uguali a 0 viene $(0, 4, 0, 6, 8, 0)$. Con tutti e tre uguali a 1 viene $(1, -1, 1, 1, 1, 1)$.
>
> Nota la prima incognita. La sua colonna è tutta di zeri: $x_1$ non compare in nessuna equazione. È libera anche lei, e riceve anche lei un parametro.

Quanti sono i parametri? Uno per ogni colonna senza pivot. Nell'esempio le incognite sono 6 e i pivot sono 3: i parametri sono $6 - 3 = 3$. Vale sempre:

$$\text{numero di parametri} = \text{numero di incognite} - \text{numero di pivot}$$

> [!APPROFONDIMENTO] lo stesso conto con le lettere, come nelle dispense (pp. 54–55)
> Le dispense fanno lo stesso esempio senza numeri. Se l'ultima colonna contiene un pivot, una riga è l'equazione $0 = 1$ e quindi $S = \emptyset$. Se non lo contiene, la matrice ridotta è di questo tipo:
> $$\left(\begin{array}{cccccc|c} 0 & 1 & a_{13} & 0 & 0 & a_{16} & b_1 \\ 0 & 0 & 0 & 1 & 0 & a_{26} & b_2 \\ 0 & 0 & 0 & 0 & 1 & a_{36} & b_3 \end{array}\right)$$
> Si dà un parametro a ogni incognita la cui colonna non ha pivot: $x_1 = t_1$, $x_3 = t_2$, $x_6 = t_3$. Poi si portano i parametri a destra dell'uguale:
> $$\begin{cases} x_1 = t_1 \\ x_2 = b_1 - a_{13}t_2 - a_{16}t_3 \\ x_3 = t_2 \\ x_4 = b_2 - a_{26}t_3 \\ x_5 = b_3 - a_{36}t_3 \\ x_6 = t_3 \end{cases}$$
> I parametri sono liberi: possono assumere qualsiasi valore in $\K$.
>
> **Come si legge.** È l'esempio con sei incognite, con le lettere al posto dei numeri. Per esempio al posto di 2 e 3 ci sono $a_{13}$ e $a_{16}$, e al posto di 4 c'è $b_1$. Le lettere dicono che la ricetta vale con qualsiasi numero.

### La ricetta per leggere le soluzioni

> [!METODO] Leggere le soluzioni dalla forma ridotta
> 1. **Guarda l'ultima colonna.** Se c'è un pivot dopo la barra, il sistema non ha soluzioni. Hai finito.
> 2. **Segna le colonne senza pivot** prima della barra. Se non ce ne sono, la soluzione è una sola: la leggi nell'ultima colonna. Hai finito.
> 3. **Dai un parametro** a ogni incognita senza pivot.
> 4. **Riscrivi ogni riga come equazione** e porta i parametri a destra, cambiando il segno.
> 5. **Scrivi tutte le incognite in ordine**, comprese quelle libere.
> 6. **Controlla.** Metti 0 al posto di tutti i parametri e prova la soluzione nelle equazioni di partenza.

Un altro esempio con più parametri, preso dal libro.

> [!ESEMPIO] Cinque incognite, tre parametri (dal libro di Martelli, Esempio 3.1.2)
> Il sistema è già in forma ridotta:
> $$\begin{cases} x_1 + 3x_2 + 4x_5 = 1 \\ x_3 - 2x_4 = 3 \end{cases} \qquad \left(\begin{array}{ccccc|c} 1 & 3 & 0 & 0 & 4 & 1 \\ 0 & 0 & 1 & -2 & 0 & 3 \end{array}\right)$$
> I pivot sono nelle colonne 1 e 3. Le colonne 2, 4 e 5 sono senza pivot: le incognite libere sono $x_2$, $x_4$ e $x_5$. I parametri sono $5 - 2 = 3$.
>
> Diamo i parametri: $x_2 = t_1$, $x_4 = t_2$, $x_5 = t_3$. Poi li portiamo a destra. Attenzione ai segni: nella riga 1 i pezzi $3t_1$ e $4t_3$ diventano negativi, nella riga 2 il pezzo $-2t_2$ diventa positivo.
> $$\begin{cases} x_1 = 1 - 3t_1 - 4t_3 \\ x_2 = t_1 \\ x_3 = 3 + 2t_2 \\ x_4 = t_2 \\ x_5 = t_3 \end{cases}$$
> Controllo con tutti i parametri uguali a 0. La soluzione è $(1, 0, 3, 0, 0)$. Prima equazione: $1 + 0 + 0 = 1$. Seconda equazione: $3 - 0 = 3$. Tutte e due vere.

Nello strumento qui sotto c'è il sistema dell'esempio con un parametro. L'ultima colonna è quella dei termini noti. Premi «Calcola»: lo strumento fa Gauss–Jordan, dice se ci sono soluzioni e le scrive con i parametri. Per le incognite usa una lettera sola con i numerini in basso, non tre lettere diverse. Poi cambia l'ultimo numero da 5 a 6 e ricalcola. La terza equazione non va più d'accordo con le altre due, e compare la riga impossibile.

```widget gauss
titolo: Risolvi un sistema: l'ultima colonna è quella dei termini noti
matrice: 1 2 1 1; 2 4 3 3; 3 6 5 5
modo: sistema
```

> [!TRAPPOLA] I parametri: quanti e a chi
> **Primo errore: dimenticare un'incognita libera.** Se un'incognita non compare in nessuna equazione, la sua colonna è tutta di zeri. Non ha pivot, quindi riceve anche lei un parametro.
>
> Un esempio: tre incognite $x$, $y$, $z$ e la sola equazione $x + z = 1$. La matrice completa ha una riga sola: $(1, 0, 1 \mid 1)$. Il pivot è in colonna 1. Le colonne 2 e 3 sono senza pivot, quindi $y = t_1$ e $z = t_2$. Dalla riga viene $x = 1 - t_2$. I parametri sono **due**, non uno.
>
> **Secondo errore: contare l'ultima colonna tra le incognite.** La colonna dei termini noti non è un'incognita. Una matrice completa con 3 righe e 5 colonne ha **4** incognite, non 5.

> [!OLTRE] le soluzioni scritte come vettori
> Il libro di Martelli (p. 84) scrive le soluzioni anche in un altro modo, che torna utile dalla lezione L12. Si mettono le incognite in colonna e si separa il pezzo senza parametro dal pezzo con il parametro.
>
> Nell'esempio con un parametro le soluzioni erano $x = -2t$, $y = t$, $z = 1$:
> $$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} -2t \\ t \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + t \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}.$$
> Si legge: «parti dal punto $(0, 0, 1)$ e spostati di $t$ volte il vettore $(-2, 1, 0)$». Al variare di $t$ ottieni una **retta** nello spazio.
>
> Con più parametri c'è un vettore per ogni parametro. Nella lezione L12 i due pezzi avranno un nome. Il punto di partenza è una «soluzione particolare». I vettori risolvono il sistema con tutti i termini noti uguali a zero.

> [!OLTRE] dove trovarlo nel libro
> Tutta la lezione segue il libro di Martelli, **§3.1 «Algoritmi di risoluzione»** (pp. 79–85 del libro): mosse di Gauss e Proposizione 3.1.1 (pp. 79–80), algoritmo di Gauss (pp. 80–82), algoritmo di Gauss–Jordan (pp. 82–83), risoluzione di un sistema e soluzioni scritte come vettori (pp. 83–85, con l'Esempio 3.1.2). Nel libro le righe si chiamano $C_i$ invece di $R_i$.

::: prova La forma ridotta è $\left(\begin{array}{cc|c} 1 & 3 & 4 \\ 0 & 0 & 0 \end{array}\right)$. Scrivi tutte le soluzioni.
Il pivot è in colonna 1. La colonna 2, quella di $y$, è senza pivot: $y = t$.

La riga 1 dice $x + 3y = 4$, cioè $x + 3t = 4$. Porta $3t$ a destra: $x = 4 - 3t$.

Le soluzioni sono $x = 4 - 3t$ e $y = t$: infinite, con un parametro. Controllo con $t$ uguale a 0: la soluzione $(4, 0)$ dà $4 + 3 \cdot 0 = 4$.
:::

::: prova Un sistema ha 5 incognite. La sua matrice a scalini ha 2 pivot, e nessuno è dopo la barra. Quanti parametri servono?
$5 - 2 = 3$ parametri. Le soluzioni sono infinite.
:::

> [!RICORDA]
> - **Un pivot dopo la barra**: una riga dice «0 = un numero diverso da zero». Nessuna soluzione.
> - **Un pivot in ogni colonna prima della barra**: una sola soluzione.
> - **Qualche colonna senza pivot**: infinite soluzioni. Ogni incognita senza pivot riceve un parametro.
> - Numero di parametri = numero di incognite meno numero di pivot.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $x$, $y$, $z$ | «ics», «ipsilon», «zeta» | le incognite: i numeri da trovare | $x + y = 5$ |
| $2x$ | «due ics» | 2 per $x$: il segno «per» non si scrive | $2x = 6$ |
| $\cdot$ | «per» | il segno della moltiplicazione | $2 \cdot 3 = 6$ |
| $x_1, x_2, \dots, x_n$ | «ics uno, ics due, …, ics enne» | le incognite, quando sono tante | $x_1 + x_4 = 0$ |
| $\begin{cases} \dots \\ \dots \end{cases}$ | «sistema» | le equazioni dentro la graffa valgono tutte insieme | il sistema dell'indovinello |
| $k$ | «cappa» | quante sono le equazioni | nell'indovinello $k = 2$ |
| $n$ | «enne» | quante sono le incognite | nell'indovinello $n = 2$ |
| $a_{ij}$ | «a i gei» | il coefficiente nella riga $i$ e nella colonna $j$ | $a_{23}$: riga 2, colonna 3 |
| $b_i$ | «bi i» | il termine noto dell'equazione numero $i$ | $b_2$: seconda equazione |
| $A$ | «a» | la matrice dei coefficienti | $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ |
| $b$ | «bi» | il vettore dei termini noti, scritto in colonna | $\begin{pmatrix} 5 \\ 1 \end{pmatrix}$ |
| $C = (A \mid b)$ | «ci uguale a barra bi» | la matrice completa: i coefficienti e, dopo la barra, i termini noti | $(1, 1 \mid 5)$ è la sua prima riga nell'indovinello |
| $k \times n$ | «cappa per enne» | una matrice con $k$ righe e $n$ colonne | $2 \times 3$: 2 righe, 3 colonne |
| $C_{ij}$ | «ci i gei» | il numero di $C$ nella riga $i$ e nella colonna $j$ | $C_{11}$: in alto a sinistra |
| $S$ | «esse» | l'insieme di tutte le soluzioni | $S = \{(3, 2)\}$ |
| $\emptyset$ | «insieme vuoto» | l'insieme senza elementi | $S = \emptyset$: nessuna soluzione |
| $\subset$ | «è contenuto in» | tutti gli elementi del primo stanno nel secondo | $S \subset \R^2$ |
| $\in$ | «appartiene a» | sta dentro l'insieme | $t \in \R$ |
| $\K$ | «cappa» | i numeri che si usano: $\R$ oppure $\C$ | |
| $\K^n$, $\R^n$ | «cappa alla enne», «erre alla enne» | le liste di $n$ numeri | $(3, 2)$ sta in $\R^2$ |
| $\neq$ | «diverso da» | non uguale | $\lambda \neq 0$ |
| $\ge$ | «maggiore o uguale» | più grande, oppure uguale | $i \ge 2$ |
| $\lambda$ | «lambda» | un numero qualsiasi | $\lambda = -4$ |
| $R_i$ | «erre i» | la riga numero $i$ della matrice | $R_2$: la riga 2 |
| $R_i \leftrightarrow R_j$ | «la riga $i$ si scambia con la riga $j$» | prima mossa di Gauss | $R_1 \leftrightarrow R_3$ |
| $R_i \to \lambda R_i$ | «la riga $i$ diventa $\lambda$ volte sé stessa» | seconda mossa di Gauss | $R_1 \to \frac 12 R_1$ |
| $R_i \to R_i + \lambda R_j$ | «la riga $i$ diventa la riga $i$ più $\lambda$ volte la riga $j$» | terza mossa di Gauss | $R_2 \to R_2 - 4R_1$ |
| $\boxed{1}$ | «pivot» | il riquadro mette in evidenza un pivot | |
| $t$, $t_1$, $t_2$ | «ti», «ti uno», «ti due» | i parametri: numeri che scegli tu | $y = t$ |
| $\cdots$, $\vdots$, $\ddots$ | «e avanti così» | puntini in riga, in colonna, in diagonale | $x_1, \dots, x_n$ |

## Verso l'esame

La prova scritta di Algebra lineare ha 10 quiz a 5 risposte e 2 problemi da 11 punti. I problemi vengono corretti solo a chi fa giusti almeno 6 quiz. Dura 2 ore, senza calcolatrice, con solo 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione viene chiesto**

1. **Il quiz «quante soluzioni?».** Il testo è quasi sempre lo stesso: «Il sistema lineare con matrice completa … ha un numero di soluzioni pari a». Nei 15 appelli dal 2023/24 al 2025/26 è uscito 9 volte: trovi l'elenco nella tabella qui sotto.
2. **Trovare tutte le soluzioni.** Nell'appello del 10/07/2024 (domanda 6) bisognava scegliere, tra cinque, la descrizione giusta di tutte le soluzioni di un sistema con 3 equazioni e 3 incognite. È lo stesso sistema dell'Esercizio 12.11 delle dispense, nella lezione L12.
3. **I problemi aperti.** I sistemi con un parametro (lezione L12) sono uno dei due problemi da 11 punti in molti appelli: 07/02/2025, 05/02/2026, 03/07/2026. Quasi tutti gli altri problemi finiscono con una riduzione di Gauss: autospazi, nuclei, intersezioni di piani. Fare Gauss senza errori di conto vale metà della prova.

| Appello | Domanda | Appello | Domanda | Appello | Domanda |
|---|---|---|---|---|---|
| 24/01/2024 | 10 | 16/01/2025 | 10 | 02/09/2025 | 1 |
| 10/06/2024 | 7 | 03/06/2025 | 4 | 15/01/2026 | 6 |
| 10/07/2024 | 5 | 10/07/2025 | 5 | 03/06/2026 | 7 |

Le cinque risposte sono queste: una, zero, infinite con 1 parametro, infinite con 2 parametri, un numero finito maggiore di 1. Solo nell'appello del 03/06/2025 l'ultima era scritta in un altro modo: «due soluzioni».

Nell'appello del 07/09/2026 (domanda 3) la stessa idea torna con una lettera dentro la matrice: «per quale $k$ il sistema non ha soluzioni?». Si impara nella lezione L12.

> [!METODO] Il quiz «quante soluzioni?»
> 1. Porta la matrice completa **a scalini** con Gauss. Per contare le soluzioni non serve Gauss–Jordan.
> 2. Cerca una riga con tutti zeri prima della barra e un numero diverso da zero dopo. Se c'è, la risposta è **zero**.
> 3. Altrimenti conta i pivot. Poi conta le incognite: sono le colonne **prima** della barra.
> 4. Se i pivot sono tanti quante le incognite, la risposta è **una**. Se sono di meno, la risposta è **infinite**: i parametri sono le incognite meno i pivot.
> 5. Con i numeri reali la risposta «un numero finito, maggiore di 1» è sempre sbagliata. Il motivo è il Corollario 12.7, nella lezione L12.
> 6. Prima di cominciare guarda se le righe sono una multipla dell'altra. Nell'appello del 02/09/2025 (domanda 1) le tre righe erano multiple di $(1, 4, 2 \mid 7)$. Quindi c'era un solo pivot e i parametri erano $3 - 1 = 2$, senza fare conti.

### Una domanda vera, letta insieme

Appello del 16/01/2025, domanda 10:

> [!ESEMPIO] Il testo della domanda
> «Il sistema lineare con matrice completa
> $$A = \left(\begin{array}{cccc|c} 2 & 0 & 1 & 4 & 3 \\ 1 & -1 & 0 & 2 & 1 \\ 1 & 1 & 1 & 2 & 2 \end{array}\right)$$
> ha un numero di soluzioni pari a: (a) Zero. (b) Infinite, che dipendono da 2 parametri. (c) Infinite, che dipendono da 1 parametro. (d) Un numero finito, maggiore di 1. (e) Una.»

**In pratica chiede:** questa tabella è un sistema scritto con i soli numeri. Quante liste di numeri lo risolvono? Non chiede di trovarle: chiede solo di contarle. Nel testo d'esame la matrice completa si chiama $A$, ma è la tabella che in questa lezione si chiama $C$.

**Primo: quante incognite?** La matrice ha 5 colonne, ma l'ultima, dopo la barra, è quella dei termini noti. Le incognite sono 4. Le righe sono 3, quindi le equazioni sono 3.

**Secondo: Gauss.** Nella prima colonna c'è un 1 nella riga 2. Conviene portarlo in alto con lo scambio $R_1 \leftrightarrow R_2$: così non compaiono frazioni.

$$\left(\begin{array}{cccc|c} 1 & -1 & 0 & 2 & 1 \\ 2 & 0 & 1 & 4 & 3 \\ 1 & 1 & 1 & 2 & 2 \end{array}\right)$$

Ora gli zeri sotto il primo pivot. Sotto l'1 ci sono 2 e 1, quindi le mosse sono $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - R_1$.

| | col. 1 | col. 2 | col. 3 | col. 4 | termine noto |
|---|---|---|---|---|---|
| riga 2 meno 2 volte la riga 1 | $2 - 2 = 0$ | $0 - (-2) = 2$ | $1 - 0 = 1$ | $4 - 4 = 0$ | $3 - 2 = 1$ |
| riga 3 meno la riga 1 | $1 - 1 = 0$ | $1 - (-1) = 2$ | $1 - 0 = 1$ | $2 - 2 = 0$ | $2 - 1 = 1$ |

La riga 2 e la riga 3 sono diventate uguali. Con la mossa $R_3 \to R_3 - R_2$ la riga 3 diventa nulla.

$$\left(\begin{array}{cccc|c} 1 & -1 & 0 & 2 & 1 \\ 0 & 2 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right)$$

**Terzo: lettura.** La matrice è a scalini. I pivot sono due: l'1 in colonna 1 e il 2 in colonna 2. Dopo la barra non ci sono pivot, quindi le soluzioni esistono. Le incognite sono 4 e i pivot sono 2: i parametri sono $4 - 2 = 2$.

La risposta giusta è la **(b)**: infinite soluzioni, che dipendono da 2 parametri.

**La risposta che tenta** è la (c). Viene fuori se al posto delle incognite conti le righe, che sono 3: $3 - 2 = 1$. Le incognite si contano dalle colonne prima della barra, non dalle righe.

> [!TRAPPOLA] Gli errori che costano punti
> - Fare una mossa e **dimenticare l'ultima colonna**. La mossa vale per la riga intera, termine noto compreso.
> - Fare due mosse **insieme** con le righe vecchie. È la trappola «Una mossa alla volta».
> - **Contare male le incognite.** Sono le colonne prima della barra. Nell'appello del 16/01/2025 (domanda 10) la matrice completa aveva 3 righe e 5 colonne: le incognite erano 4.
> - **Sbagliare un segno** portando i parametri a destra dell'uguale. Il rimedio: alla fine prova una soluzione nelle equazioni di partenza, per esempio quella con tutti i parametri uguali a zero.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione conviene scrivere tre cose.
>
> - Le tre mosse di Gauss, con i due divieti: nella (II) il numero è diverso da zero, nella (III) le due righe sono diverse.
> - Che cos'è un pivot, e quando una matrice è a scalini.
> - La regola di lettura. Pivot dopo la barra: nessuna soluzione. Altrimenti i parametri sono le incognite meno i pivot, uno per ogni colonna senza pivot.

## Quiz

```quiz
D: Quale di queste è una mossa di Gauss sulla matrice completa di un sistema lineare?
+ La mossa $R_2 \to R_2 - 3R_1$.
- La mossa $R_2 \to 0 \cdot R_2$.
- Sommare $1$ a tutti i numeri della prima riga.
- Scambiare la prima e l'ultima colonna.
- Elevare al quadrato tutti i numeri della seconda riga.
= Nella prima risposta alla riga 2 togli 3 volte la riga 1: è la terza mossa. Moltiplicare una riga per 0 è vietato: la riga diventerebbe $0 = 0$ e un'equazione andrebbe persa. Sommare 1 a tutti i numeri, oppure elevarli al quadrato, non è nessuna delle tre mosse. Lo scambio di due colonne tenta, perché assomiglia alla prima mossa: ma le mosse si fanno sulle righe.

D: Quale di queste cinque matrici è a scalini? $M_1 = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 4 & 5 \end{pmatrix}$, $M_2 = \begin{pmatrix} 2 & 1 & 0 & 3 \\ 0 & 0 & 5 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$, $M_3 = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}$, $M_4 = \begin{pmatrix} 0 & 1 & 2 \\ 0 & 3 & 4 \\ 0 & 0 & 5 \end{pmatrix}$, $M_5 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$.
- La prima.
+ La seconda.
- La terza.
- La quarta.
- La quinta.
= Servono due cose: righe nulle in fondo, e ogni pivot più a destra di quello della riga sopra. Nella seconda matrice i pivot sono 2, in colonna 1, e 5, in colonna 3, e la riga nulla è in fondo: va bene. Nella prima la riga nulla sta in mezzo. Nella terza il pivot della riga 2 è in colonna 1, come quello della riga 1. La quarta tenta, perché sembra una scala: ma i pivot delle prime due righe, 1 e 3, sono tutti e due in colonna 2. Nella quinta il pivot della riga 3 sta a sinistra di quello della riga 2.

D: Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 2 & 3 & 10 \\ 4 & 5 & 6 & 11 \\ 7 & 8 & 9 & 12 \end{array}\right)$ ha un numero di soluzioni pari a:
- Una.
+ Infinite, che dipendono da 1 parametro.
- Zero.
- Infinite, che dipendono da 2 parametri.
- Un numero finito, maggiore di 1.
= È la domanda 10 dell'appello del 24/01/2024. Chiede di contare le soluzioni, quindi basta la forma a scalini. Togli 4 volte la riga 1 dalla riga 2: diventa $(0, -3, -6 \mid -29)$. Togli 7 volte la riga 1 dalla riga 3: diventa $(0, -6, -12 \mid -58)$. La riga 3 è il doppio della riga 2, quindi togliendo 2 volte la riga 2 diventa nulla. Restano 2 pivot, nessuno dopo la barra, e le incognite sono 3: i parametri sono $3 - 2 = 1$. La risposta «Una» tenta, perché le equazioni sono tante quante le incognite: ma la terza non aggiungeva niente alle prime due.

D: Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 3 & 12 & 6 & 21 \\ 5 & 20 & 10 & 35 \\ 4 & 16 & 8 & 28 \end{array}\right)$ ha un numero di soluzioni pari a:
- Zero.
+ Infinite, che dipendono da 2 parametri.
- Un numero finito, maggiore di 1.
- Una.
- Infinite, che dipendono da 1 parametro.
= È la domanda 1 dell'appello del 02/09/2025. Prima di fare conti guarda le righe. La prima è 3 volte $(1, 4, 2 \mid 7)$, la seconda è 5 volte la stessa riga, la terza è 4 volte. Sono tre volte lo stesso indizio. Dopo Gauss resta una sola riga non nulla, con un solo pivot, e nessun pivot dopo la barra. Le incognite sono 3, quindi i parametri sono $3 - 1 = 2$. La risposta con 1 parametro è sbagliata perché qui il pivot è uno solo, non due.

D: Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 2 & 3 & 4 & 5 \\ 3 & 4 & 5 & 7 \end{array}\right)$ ha un numero di soluzioni pari a:
+ Zero.
- Una.
- Infinite, che dipendono da 1 parametro.
- Infinite, che dipendono da 2 parametri.
- Un numero finito, maggiore di 1.
= Simile alla domanda 5 dell'appello del 10/07/2024. Togli 2 volte la riga 1 dalla riga 2: diventa $(0, -1, -2 \mid -3)$. Togli 3 volte la riga 1 dalla riga 3: diventa $(0, -2, -4 \mid -5)$. Ora togli 2 volte la riga 2 dalla riga 3. Prima della barra vengono tutti zeri. Dopo la barra viene $-5 - 2 \cdot (-3) = -5 + 6 = 1$. La riga $(0, 0, 0 \mid 1)$ dice $0 = 1$, che è impossibile: zero soluzioni. L'errore tipico è guardare solo gli zeri prima della barra e rispondere «infinite»: conta anche il numero dopo la barra.

D: La forma ridotta della matrice completa di un sistema nelle incognite $x, y, z$ è $\left(\begin{array}{ccc|c} 1 & 0 & 2 & 3 \\ 0 & 1 & -1 & 1 \end{array}\right)$. Qual è l'insieme di tutte le soluzioni ($t \in \R$)?
+ $x = 3 - 2t,\ y = 1 + t,\ z = t$
- $x = 3 + 2t,\ y = 1 - t,\ z = t$
- Solo $x = 3,\ y = 1,\ z = 0$
- $x = -2t,\ y = t,\ z = t$
- Il sistema non ha soluzioni.
= Simile alla domanda 6 dell'appello del 10/07/2024. I pivot sono nelle colonne 1 e 2. La colonna 3, quella di $z$, è senza pivot: $z = t$. La riga 1 dice $x + 2z = 3$, quindi $x = 3 - 2t$. La riga 2 dice $y - z = 1$, quindi $y = 1 + t$. La seconda risposta ha i segni al contrario: quando porti $t$ a destra dell'uguale il segno cambia. La terza è una soluzione vera, quella con $t$ uguale a 0, ma è una sola: la domanda le chiede tutte.

D: Riducendo a scalini la matrice completa di un sistema in 3 incognite compare la riga $(0, 0, 0 \mid 5)$. Che cosa puoi concludere?
+ Il sistema non ha soluzioni.
- $z = 5$.
- Il sistema ha infinite soluzioni.
- La riga si può cancellare e si continua.
- L'unica soluzione è $x = y = z = 0$.
= Rileggi la riga come equazione: $0x + 0y + 0z = 5$. A sinistra viene 0, qualunque numero tu metta al posto delle incognite. Quindi la riga dice $0 = 5$, falsa sempre: nessuna soluzione. La risposta «$z = 5$» tenta, ma davanti a $z$ c'è 0, non 1. Si può cancellare solo una riga $(0, 0, 0 \mid 0)$, che dice $0 = 0$.

D: Nella matrice $\left(\begin{array}{cc|c} 1 & 2 & 4 \\ 3 & 1 & 7 \end{array}\right)$ si fa la mossa $R_2 \to R_2 - 3R_1$. Quale diventa la seconda riga?
+ $(0, -5 \mid -5)$
- $(0, -5 \mid 5)$
- $(0, 5 \mid 5)$
- $(0, -5 \mid 19)$
- $(2, -1 \mid 3)$
= Tre volte la riga 1 fa $(3, 6 \mid 12)$. Poi sottrai dalla riga 2, un numero alla volta: $3 - 3 = 0$, poi $1 - 6 = -5$, poi $7 - 12 = -5$. La mossa vale anche per il numero dopo la barra. Chi lì somma al posto di sottrarre trova 19. Chi sbaglia il segno trova 5. L'ultima risposta è la riga 2 meno la riga 1 una volta sola, non 3 volte.

D: Un sistema di 3 equazioni in 5 incognite, ridotto a scalini, ha 3 pivot e nessuno di questi è nell'ultima colonna. Quante sono le soluzioni?
+ Infinite, che dipendono da 2 parametri.
- Infinite, che dipendono da 3 parametri.
- Una.
- Zero.
- Infinite, che dipendono da 5 parametri.
= Simile alla domanda 10 dell'appello del 16/01/2025, dove le incognite erano 4. Nessun pivot sta nell'ultima colonna, quindi le soluzioni esistono. I parametri sono tanti quante le incognite senza pivot: $5 - 3 = 2$. La risposta con 3 parametri tenta, ma 3 è il numero dei pivot, non quello delle incognite libere.

D: Risolvi il sistema a scalini $x - y + 2z = 5$, $3y - z = 1$, $2z = 4$. Quanto vale $x$?
N: 2
= Il sistema è a scalini, quindi si risolve dal basso. Terza equazione: $2z = 4$, quindi $z = 2$. Seconda equazione: $3y - 2 = 1$, cioè $3y = 3$, quindi $y = 1$. Prima equazione: $x - 1 + 2 \cdot 2 = 5$, cioè $x + 3 = 5$, quindi $x = 2$.
```

## Esercizi

::: esercizio base È una soluzione?
Guarda il sistema
$$\begin{cases} x + y = 7 \\ 2x - y = 2 \end{cases}$$
Quali di queste tre liste sono soluzioni: $(4, 3)$, $(3, 4)$, $(5, 2)$?
::: soluzione
Una lista è una soluzione solo se rende vere **tutte e due** le equazioni. In ogni lista il primo numero va al posto di $x$ e il secondo al posto di $y$.

| Lista | Prima equazione | Seconda equazione | È una soluzione? |
|---|---|---|---|
| $(4, 3)$ | $4 + 3 = 7$, vera | $2 \cdot 4 - 3 = 5$, doveva fare 2: falsa | no |
| $(3, 4)$ | $3 + 4 = 7$, vera | $2 \cdot 3 - 4 = 2$, vera | sì |
| $(5, 2)$ | $5 + 2 = 7$, vera | $2 \cdot 5 - 2 = 8$, doveva fare 2: falsa | no |

L'unica soluzione tra le tre è $(3, 4)$. Le altre due rispettano il primo indizio ma non il secondo, e un solo indizio falso basta per scartarle.
:::

::: esercizio base Una mossa sola
Nella matrice completa
$$\left(\begin{array}{cc|c} 1 & -2 & 4 \\ 3 & 1 & 5 \end{array}\right)$$
fai la mossa $R_2 \to R_2 - 3R_1$. Poi risolvi il sistema.
::: soluzione
1. **Che cosa fa la mossa.** Alla riga 2 toglie 3 volte la riga 1. Serve a far diventare 0 il 3 della riga 2, perché $3 - 3 \cdot 1 = 0$.
2. **Il conto**, un numero alla volta. Attenzione alla colonna 2: togliere $-6$ vuol dire sommare 6.

| | colonna 1 | colonna 2 | termine noto |
|---|---|---|---|
| riga 2 | $3$ | $1$ | $5$ |
| 3 volte la riga 1 | $3 \cdot 1 = 3$ | $3 \cdot (-2) = -6$ | $3 \cdot 4 = 12$ |
| differenza | $3 - 3 = 0$ | $1 - (-6) = 7$ | $5 - 12 = -7$ |

3. **La nuova matrice.** La riga 1 non cambia.
   $$\left(\begin{array}{cc|c} 1 & -2 & 4 \\ 0 & 7 & -7 \end{array}\right)$$
4. **Dal basso.** La riga 2 dice $7y = -7$. Dividi per 7 i due lati: $y = -1$.
5. **Poi la riga 1.** Dice $x - 2y = 4$. Sostituisci $-1$ al posto di $y$: il pezzo $-2y$ diventa $-2 \cdot (-1) = 2$. Viene $x + 2 = 4$, quindi $x = 2$.

La soluzione è $(2, -1)$.

**Controllo** nelle equazioni di partenza: $2 - 2 \cdot (-1) = 2 + 2 = 4$ e $3 \cdot 2 + (-1) = 5$. Tutte e due vere.
:::

::: esercizio base Tre matrici a scalini: quante soluzioni?
Ognuna di queste matrici complete è già a scalini. Le incognite sono $x$ e $y$. Per ognuna di' quante soluzioni ha il sistema.
$$\text{(a)} \left(\begin{array}{cc|c} 1 & 2 & 3 \\ 0 & 1 & 1 \end{array}\right) \qquad \text{(b)} \left(\begin{array}{cc|c} 1 & 2 & 3 \\ 0 & 0 & 4 \end{array}\right) \qquad \text{(c)} \left(\begin{array}{cc|c} 1 & 2 & 3 \\ 0 & 0 & 0 \end{array}\right)$$
::: soluzione
In tutti e tre i casi le incognite sono 2: le colonne prima della barra. Si guarda dove stanno i pivot.

(a) **Una sola soluzione.** I pivot sono due, nelle colonne 1 e 2. Nessuno è dopo la barra, e ogni incognita ha il suo. Dal basso: la riga 2 dice $y = 1$. La riga 1 dice $x + 2y = 3$, cioè $x + 2 = 3$, quindi $x = 1$. La soluzione è $(1, 1)$.

(b) **Nessuna soluzione.** La riga 2 ha tutti zeri prima della barra e 4 dopo. Il suo pivot è nell'ultima colonna. La riga dice $0 = 4$, che è impossibile.

(c) **Infinite soluzioni, con 1 parametro.** C'è un solo pivot, in colonna 1. La riga 2 dice $0 = 0$ e si ignora. La colonna 2 è senza pivot, quindi $y = t$. La riga 1 dice $x + 2t = 3$, quindi $x = 3 - 2t$. I parametri sono $2 - 1 = 1$.

**Controllo** di (c) con $t$ uguale a 0: la soluzione $(3, 0)$ dà $3 + 2 \cdot 0 = 3$. Vera.
:::

::: esercizio base Dal sistema alla matrice completa
Scrivi la matrice dei coefficienti, il vettore dei termini noti e la matrice completa dei sistemi
$$\text{(a)} \begin{cases} 3x - z = 2 \\ y + 4z = -1 \end{cases} \qquad \text{(b)} \begin{cases} x_1 + x_2 = x_3 \\ 2x_3 - 7 = x_1 \\ x_2 = 5 \end{cases}$$
Quante sono le equazioni e quante le incognite?
::: soluzione
**(a)** Le equazioni sono 2. Le incognite sono 3: nell'ordine $x$, $y$, $z$.

1. **Prima equazione.** Davanti a $x$ c'è 3. L'incognita $y$ manca: coefficiente 0. Davanti a $z$ c'è $-1$. A destra c'è 2.
2. **Seconda equazione.** L'incognita $x$ manca: coefficiente 0. Davanti a $y$ c'è 1. Davanti a $z$ c'è 4. A destra c'è $-1$.

$$A = \begin{pmatrix} 3 & 0 & -1 \\ 0 & 1 & 4 \end{pmatrix}, \quad b = \begin{pmatrix} 2 \\ -1 \end{pmatrix}, \quad C = \left(\begin{array}{ccc|c} 3 & 0 & -1 & 2 \\ 0 & 1 & 4 & -1 \end{array}\right).$$

**(b)** Le equazioni sono 3 e le incognite sono 3. Prima va messo in ordine il sistema: incognite a sinistra, numeri a destra.

1. **Prima equazione.** A destra c'è $x_3$. Lo porti a sinistra e diventa $-x_3$. Viene $x_1 + x_2 - x_3 = 0$.
2. **Seconda equazione.** A destra c'è $x_1$: lo porti a sinistra e diventa $-x_1$. A sinistra c'è $-7$: lo porti a destra e diventa $+7$. Viene $-x_1 + 2x_3 = 7$. Manca $x_2$: coefficiente 0.
3. **Terza equazione.** È già in ordine. Mancano $x_1$ e $x_3$: due zeri.

$$\begin{cases} x_1 + x_2 - x_3 = 0 \\ -x_1 + 2x_3 = 7 \\ x_2 = 5 \end{cases} \qquad C = \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\ -1 & 0 & 2 & 7 \\ 0 & 1 & 0 & 5 \end{array}\right).$$

La matrice dei coefficienti è la parte prima della barra. Il vettore dei termini noti è l'ultima colonna, fatta dei numeri 0, 7 e 5.
:::

::: esercizio base Pivot e scalini
Per ciascuna matrice di' se è a scalini e, se lo è, indica i pivot e le colonne in cui stanno.
$$M_1 = \begin{pmatrix} 0 & 2 & 1 & 4 \\ 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \quad M_2 = \begin{pmatrix} 1 & 5 \\ 0 & 0 \\ 0 & 2 \end{pmatrix}, \quad M_3 = \begin{pmatrix} 3 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}, \quad M_4 = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 6 & 7 \end{pmatrix}.$$
::: soluzione
Le regole sono due: le righe nulle stanno in fondo, e ogni pivot sta più a destra di quello della riga sopra.

- **$M_1$: sì.** Il pivot della riga 1 è 2, in colonna 2. Il pivot della riga 2 è 3, in colonna 4, più a destra. La riga nulla è in fondo. La prima colonna tutta di zeri non dà fastidio.
- **$M_2$: no.** La riga 2 è nulla, ma sotto di lei c'è la riga $(0, 2)$, che ha un pivot. La riga nulla non è in fondo. Scambiando le ultime due righe la matrice diventa a scalini.
- **$M_3$: sì.** C'è un solo pivot, il 3 in colonna 1. La riga nulla è in fondo.
- **$M_4$: no.** Il pivot della riga 2 è 4, in colonna 2. Il pivot della riga 3 è 6, anche lui in colonna 2. Stessa colonna: non va bene.

Per sistemare $M_4$ serve una mossa. Numero da eliminare diviso pivot: $6 : 4 = \frac 32$. La mossa è $R_3 \to R_3 - \frac 32 R_2$. Nella colonna 2 viene $6 - \frac 32 \cdot 4 = 6 - 6 = 0$. Nella colonna 3 viene $7 - \frac 32 \cdot 5 = 7 - \frac{15}2 = -\frac 12$. La riga 3 diventa $(0, 0, -\frac 12)$ e la matrice è a scalini.
:::

::: esercizio medio Esercizio 11.11 delle dispense: un sistema 3 × 3
Risolvi il sistema lineare
$$\begin{cases} x + y + 2z = 9 \\ 2x + 4y - 3z = 1 \\ 3x + 6y - 5z = 0 \end{cases}$$
::: soluzione
1. **La matrice completa.** Una riga per equazione, e l'ultima colonna per i termini noti.
   $$\left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 2 & 4 & -3 & 1 \\ 3 & 6 & -5 & 0 \end{array}\right)$$
2. **Zeri sotto il primo pivot.** Il pivot è l'1 in alto a sinistra. Sotto ci sono 2 e 3. Le mosse sono $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - 3R_1$. La riga 1 resta ferma.
   - Riga 2 meno 2 volte la riga 1: $(2 - 2,\ 4 - 2,\ -3 - 4 \mid 1 - 18) = (0, 2, -7 \mid -17)$.
   - Riga 3 meno 3 volte la riga 1: $(3 - 3,\ 6 - 3,\ -5 - 6 \mid 0 - 27) = (0, 3, -11 \mid -27)$.
3. **Zero sotto il secondo pivot.** Il secondo pivot è il 2 della riga 2. Sotto c'è 3. La ricetta direbbe di togliere la riga 2 per $\frac 32$ volte. Per non avere frazioni uso il trucco: prima raddoppio la riga 3, poi tolgo 3 volte la riga 2. La mossa è $R_3 \to 2R_3 - 3R_2$.
   - 2 volte la riga 3: $(0, 6, -22 \mid -54)$.
   - 3 volte la riga 2: $(0, 6, -21 \mid -51)$.
   - Differenza: $(0,\ 6 - 6,\ -22 + 21 \mid -54 + 51) = (0, 0, -1 \mid -3)$.
   $$\left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 0 & 2 & -7 & -17 \\ 0 & 0 & -1 & -3 \end{array}\right)$$
4. **Lettura.** La matrice è a scalini. I pivot sono tre, nelle colonne 1, 2 e 3. Dopo la barra non ce ne sono, e ogni incognita ha il suo: la soluzione è una sola.
5. **Dal basso, riga 3.** Dice $-z = -3$. Cambia segno ai due lati: $z = 3$.
6. **Riga 2.** Dice $2y - 7z = -17$. Sostituisci 3 al posto di $z$: viene $2y - 21 = -17$. Somma 21 ai due lati: $2y = 4$, quindi $y = 2$.
7. **Riga 1.** Dice $x + y + 2z = 9$. Sostituisci: viene $x + 2 + 6 = 9$, quindi $x = 1$.

La soluzione è $(1, 2, 3)$, come indicano le dispense.

**Controllo** nelle equazioni di partenza: $1 + 2 + 6 = 9$, poi $2 + 8 - 9 = 1$, poi $3 + 12 - 15 = 0$. Tutte vere.

Una nota. Seguendo l'algoritmo alla lettera, con la mossa $R_3 \to R_3 - \frac 32 R_2$, la riga 3 viene $(0, 0, -\frac 12 \mid -\frac 32)$. È la stessa equazione divisa per 2, e porta alla stessa soluzione.
:::

::: esercizio medio Gauss–Jordan completo, con una colonna senza pivot
Risolvi con l'algoritmo di Gauss–Jordan il sistema con matrice completa
$$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 0 \\ 1 & 2 & 2 & -3 \end{array}\right).$$
::: soluzione
Le incognite sono 3: le chiamo $x$, $y$, $z$.

1. **Fase 1, prima colonna.** Il pivot è l'1 in alto a sinistra. Sotto ci sono 2 e 1. Le mosse sono $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - R_1$. Attenzione alla colonna 3: togliere un numero negativo vuol dire sommare.
   - Riga 2 meno 2 volte la riga 1: $(2 - 2,\ 4 - 4,\ 1 - (-2) \mid 0 - 6) = (0, 0, 3 \mid -6)$.
   - Riga 3 meno la riga 1: $(1 - 1,\ 2 - 2,\ 2 - (-1) \mid -3 - 3) = (0, 0, 3 \mid -6)$.
2. **Fase 1, il resto.** Sotto la prima riga la colonna 2 è tutta di zeri: resta senza pivot. Nella colonna 3 il pivot è il 3 della riga 2. Sotto c'è un altro 3. La mossa $R_3 \to R_3 - R_2$ dà la riga nulla, perché le due righe sono uguali.
   $$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 0 & 0 & 3 & -6 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
3. **Fase 2, pivot uguale a 1.** Divido la riga 2 per 3, con la mossa $R_2 \to \frac 13 R_2$. Viene $(0, 0, 1 \mid -2)$.
4. **Fase 2, zero sopra il pivot.** Sopra il secondo pivot c'è $-1$. Per farlo diventare 0 sommo la riga 2: mossa $R_1 \to R_1 + R_2$. Terzo numero: $-1 + 1 = 0$. Ultimo numero: $3 + (-2) = 1$. La riga 1 diventa $(1, 2, 0 \mid 1)$.
   $$\left(\begin{array}{ccc|c} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
5. **Lettura.** I pivot sono nelle colonne 1 e 3. Dopo la barra non ce ne sono: le soluzioni esistono. La colonna 2 è senza pivot, quindi $y = t$.
6. **Le righe come equazioni.** La riga 2 dice $z = -2$. La riga 1 dice $x + 2y = 1$, cioè $x + 2t = 1$. Porto $2t$ a destra: $x = 1 - 2t$.

Le soluzioni sono infinite, con un parametro:
$$(x, y, z) = (1 - 2t,\ t,\ -2), \qquad t \in \R.$$

**Controllo** con $t$ uguale a 0, cioè con $(1, 0, -2)$. Le tre equazioni di partenza danno: $1 + 0 + 2 = 3$, poi $2 + 0 - 2 = 0$, poi $1 + 0 - 4 = -3$. Tutte vere.
:::

::: esercizio medio Due equazioni, quattro incognite
Trova tutte le soluzioni di
$$\begin{cases} x_1 + x_2 - x_3 + 2x_4 = 1 \\ 2x_1 + 2x_2 + x_3 + x_4 = 5 \end{cases}$$
::: soluzione
1. **La matrice completa.** Le incognite sono 4, quindi le colonne prima della barra sono 4.
   $$\left(\begin{array}{cccc|c} 1 & 1 & -1 & 2 & 1 \\ 2 & 2 & 1 & 1 & 5 \end{array}\right)$$
2. **Zero sotto il primo pivot.** Sotto l'1 c'è 2. La mossa è $R_2 \to R_2 - 2R_1$. Il conto: $(2 - 2,\ 2 - 2,\ 1 - (-2),\ 1 - 4 \mid 5 - 2) = (0, 0, 3, -3 \mid 3)$.
3. **Pivot uguale a 1.** Il pivot della riga 2 è 3, in colonna 3. Divido la riga per 3: viene $(0, 0, 1, -1 \mid 1)$.
4. **Zero sopra il secondo pivot.** Sopra c'è $-1$. Sommo la riga 2 alla riga 1: mossa $R_1 \to R_1 + R_2$. Terzo numero: $-1 + 1 = 0$. Quarto numero: $2 + (-1) = 1$. Ultimo numero: $1 + 1 = 2$.
   $$\left(\begin{array}{cccc|c} 1 & 1 & 0 & 1 & 2 \\ 0 & 0 & 1 & -1 & 1 \end{array}\right)$$
5. **Lettura.** I pivot sono nelle colonne 1 e 3. Le colonne 2 e 4 sono senza pivot. Do due parametri: $x_2 = s$ e $x_4 = t$.
6. **Riga 1.** Dice $x_1 + x_2 + x_4 = 2$, cioè $x_1 + s + t = 2$. Porto i parametri a destra: $x_1 = 2 - s - t$.
7. **Riga 2.** Dice $x_3 - x_4 = 1$, cioè $x_3 - t = 1$. Porto $t$ a destra: $x_3 = 1 + t$.

$$x_1 = 2 - s - t, \qquad x_2 = s, \qquad x_3 = 1 + t, \qquad x_4 = t, \qquad s, t \in \R.$$

Le soluzioni sono infinite. I parametri sono $4 - 2 = 2$.

**Controllo** con i due parametri uguali a 0, cioè con $(2, 0, 1, 0)$. Prima equazione: $2 + 0 - 1 + 0 = 1$. Seconda equazione: $4 + 0 + 1 + 0 = 5$. Tutte e due vere.
:::

::: esercizio medio Un sistema impossibile
Mostra che il sistema $\begin{cases} x + y + z = 1 \\ x - y + 2z = 0 \\ 2x + 3z = 2 \end{cases}$ non ha soluzioni.
::: soluzione
1. **La matrice completa.** Nella terza equazione manca $y$: coefficiente 0.
   $$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & -1 & 2 & 0 \\ 2 & 0 & 3 & 2 \end{array}\right)$$
2. **Zeri sotto il primo pivot.** Sotto l'1 ci sono 1 e 2. Le mosse sono $R_2 \to R_2 - R_1$ e $R_3 \to R_3 - 2R_1$.
   - Riga 2 meno la riga 1: $(1 - 1,\ -1 - 1,\ 2 - 1 \mid 0 - 1) = (0, -2, 1 \mid -1)$.
   - Riga 3 meno 2 volte la riga 1: $(2 - 2,\ 0 - 2,\ 3 - 2 \mid 2 - 2) = (0, -2, 1 \mid 0)$.
3. **Zero sotto il secondo pivot.** Il secondo pivot è il $-2$ della riga 2. Sotto c'è un altro $-2$. La mossa è $R_3 \to R_3 - R_2$. Prima della barra viene $(0,\ -2 + 2,\ 1 - 1)$, cioè tutti zeri. Dopo la barra viene $0 - (-1) = 1$.
   $$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & -2 & 1 & -1 \\ 0 & 0 & 0 & 1 \end{array}\right)$$
4. **Lettura.** L'ultima riga ha tutti zeri prima della barra e 1 dopo. Dice $0 = 1$. C'è un pivot nell'ultima colonna: il sistema non ha soluzioni, cioè $S = \emptyset$.

Si poteva vedere anche dalle equazioni. Somma le prime due: a sinistra viene $2x + 3z$, perché $y$ e $-y$ si cancellano. A destra viene $1 + 0 = 1$. Ma la terza equazione dice che $2x + 3z$ fa 2. Lo stesso numero non può fare 1 e 2 insieme.
:::

::: esercizio medio Dove sta l'errore?
Uno studente risolve $\begin{cases} 2x + y = 4 \\ x + 3y = 7 \end{cases}$ facendo nello stesso passaggio $R_1 \to R_1 - 2R_2$ e $R_2 \to R_2 - \frac 12 R_1$, tutte e due con le righe di partenza. Che cosa ottiene? Perché è sbagliato? Risolvi correttamente.
::: soluzione
**Il conto dello studente.** Le righe di partenza sono $(2, 1 \mid 4)$ e $(1, 3 \mid 7)$.

- Riga 1 meno 2 volte la riga 2: $(2 - 2,\ 1 - 6 \mid 4 - 14) = (0, -5 \mid -10)$.
- Riga 2 meno metà della riga 1: $(1 - 1,\ 3 - \frac 12 \mid 7 - 2) = (0, \frac 52 \mid 5)$.

Tutte e due le righe nuove dicono la stessa cosa: che $y$ vale 2. Infatti $-10 : (-5) = 2$ e $5 : \frac 52 = 2$. Di $x$ non resta nessuna informazione. Allo studente sembra che $x$ sia libera e che le soluzioni siano infinite.

**Perché è sbagliato.** Ognuna delle due mosse, da sola, è permessa. Insieme no. Dopo la prima mossa la riga 1 è cambiata, e la seconda mossa doveva usare la riga 1 nuova. Lo studente ha usato quella vecchia. Il risultato non si può più disfare: un'equazione è andata persa.

**Il conto giusto**, una mossa alla volta.

1. Scambio le righe, per avere un 1 in alto a sinistra: mossa $R_1 \leftrightarrow R_2$.
   $$\left(\begin{array}{cc|c} 1 & 3 & 7 \\ 2 & 1 & 4 \end{array}\right)$$
2. Tolgo 2 volte la riga 1 dalla riga 2: mossa $R_2 \to R_2 - 2R_1$. Il conto: $(2 - 2,\ 1 - 6 \mid 4 - 14) = (0, -5 \mid -10)$.
3. Dal basso. La riga 2 dice $-5y = -10$, quindi $y = 2$. La riga 1 dice $x + 3y = 7$, cioè $x + 6 = 7$, quindi $x = 1$.

La soluzione è una sola: $(1, 2)$.

**Controllo**: $2 \cdot 1 + 2 = 4$ e $1 + 3 \cdot 2 = 7$. Tutte e due vere.
:::

::: esercizio medio Il sistema omogeneo dell'Esempio 11.10
Usa la matrice dell'Esempio 11.10 come matrice dei coefficienti del sistema in tre incognite con tutti i termini noti uguali a zero:
$$\begin{cases} x_1 - x_2 + 3x_3 = 0 \\ 2x_2 + 2x_3 = 0 \\ x_1 + 4x_3 = 0 \end{cases}$$
Trova tutte le soluzioni.
::: soluzione
1. **L'ultima colonna resta di zeri.** I termini noti sono tutti 0. Una mossa di Gauss somma, toglie o moltiplica questi zeri tra loro, e il risultato è sempre 0. Quindi basta lavorare sulla matrice dei coefficienti.
2. **La riduzione è già fatta.** L'Esempio 11.10 ha portato questa matrice alla forma ridotta:
   $$\begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 1 & 0 & 4 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
3. **Lettura.** I pivot sono nelle colonne 1 e 2. La colonna 3 è senza pivot, quindi $x_3 = t$.
4. **Riga 1.** Dice $x_1 + 4x_3 = 0$, cioè $x_1 + 4t = 0$. Porto $4t$ a destra: $x_1 = -4t$.
5. **Riga 2.** Dice $x_2 + x_3 = 0$, cioè $x_2 + t = 0$. Porto $t$ a destra: $x_2 = -t$.

$$(x_1, x_2, x_3) = (-4t, -t, t), \qquad t \in \R.$$

**Controllo** con $t$ uguale a 1, cioè con $(-4, -1, 1)$: $-4 + 1 + 3 = 0$, poi $-2 + 2 = 0$, poi $-4 + 4 = 0$. Tutte vere.

Ogni soluzione è $t$ volte il vettore $(-4, -1, 1)$: le soluzioni sono tutti i multipli di un solo vettore, cioè una retta che passa per l'origine. Un sistema con tutti i termini noti uguali a zero si chiama **omogeneo**, ed è il primo argomento della lezione L12.
:::

::: esercizio difficile Quando il sistema dipende da un numero
Per quali valori di $a \in \R$ il sistema $\begin{cases} x + y = 1 \\ x + ay = 2 \end{cases}$ ha soluzioni? Quando ce ne sono, trovale.
::: soluzione
Qui uno dei coefficienti non è un numero fissato: è la lettera $a$. La domanda chiede che cosa succede per ogni valore possibile di $a$.

1. **La matrice completa.**
   $$\left(\begin{array}{cc|c} 1 & 1 & 1 \\ 1 & a & 2 \end{array}\right)$$
2. **Zero sotto il primo pivot.** La mossa è $R_2 \to R_2 - R_1$. Primo numero: $1 - 1 = 0$. Secondo numero: $a - 1$. Terzo numero: $2 - 1 = 1$.
   $$\left(\begin{array}{cc|c} 1 & 1 & 1 \\ 0 & a - 1 & 1 \end{array}\right)$$
3. **Il punto delicato.** Nella riga 2 c'è $a - 1$. È un pivot solo se è diverso da zero. E vale zero quando $a$ è 1. Quindi servono due casi.
4. **Primo caso: $a$ vale 1.** La riga 2 è $(0, 0 \mid 1)$ e dice $0 = 1$. Nessuna soluzione. Infatti il sistema diventa «la somma fa 1» e «la somma fa 2»: due rette parallele.
5. **Secondo caso: $a$ è diverso da 1.** Ora $a - 1$ è diverso da zero, e posso dividere. La riga 2 dice $(a - 1) \cdot y = 1$, quindi
   $$y = \frac 1{a - 1}.$$
6. **Poi la riga 1.** Dice $x + y = 1$, quindi $x = 1 - y$. Per fare la sottrazione scrivo 1 come frazione con lo stesso numero sotto:
   $$x = \frac{a - 1}{a - 1} - \frac 1{a - 1} = \frac{a - 2}{a - 1}.$$

Risposta: il sistema ha soluzioni per ogni $a$ diverso da 1, e allora la soluzione è una sola. Per $a$ uguale a 1 non ne ha nessuna.

**Controllo** nella seconda equazione. Le due frazioni hanno lo stesso numero sotto, quindi si sommano i numeri sopra:
$$x + ay = \frac{a - 2}{a - 1} + \frac a{a - 1} = \frac{2a - 2}{a - 1} = \frac{2 \cdot (a - 1)}{a - 1} = 2.$$

**Controllo con un numero.** Con $a$ uguale a 3 viene $y = \frac 12$ e $x = \frac 12$. Prima equazione: $\frac 12 + \frac 12 = 1$. Seconda equazione: $\frac 12 + 3 \cdot \frac 12 = \frac 12 + \frac 32 = 2$.

L'errore tipico è dividere per $a - 1$ senza chiedersi se può valere zero. Ogni volta che un pivot contiene una lettera, il caso in cui si annulla va studiato a parte. È il metodo della lezione L12.
:::

::: esercizio esame Come all'esame: quante soluzioni? (appello del 15/01/2026, domanda 6)
Il sistema lineare con matrice completa
$$\left(\begin{array}{ccc|c} 0 & 1 & 2 & 3 \\ 4 & 5 & 6 & 7 \\ 8 & 9 & 10 & 11 \end{array}\right)$$
ha un numero di soluzioni pari a: (a) un numero finito, maggiore di 1; (b) zero; (c) infinite, che dipendono da 2 parametri; (d) infinite, che dipendono da 1 parametro; (e) una. Trova poi tutte le soluzioni.
::: soluzione
**In pratica chiede:** quante liste di tre numeri risolvono il sistema scritto in questa tabella? Le incognite sono 3, perché le colonne prima della barra sono 3.

1. **Serve uno scambio.** In alto a sinistra c'è 0, che non può fare da pivot. Scambio le prime due righe: mossa $R_1 \leftrightarrow R_2$.
   $$\left(\begin{array}{ccc|c} 4 & 5 & 6 & 7 \\ 0 & 1 & 2 & 3 \\ 8 & 9 & 10 & 11 \end{array}\right)$$
2. **Zeri sotto il primo pivot.** Il pivot è 4. Nella riga 2 sotto c'è già 0. Nella riga 3 c'è 8. Quante volte togliere la riga 1? $8 : 4 = 2$. La mossa è $R_3 \to R_3 - 2R_1$. Due volte la riga 1 fa $(8, 10, 12 \mid 14)$. Il conto: $(8 - 8,\ 9 - 10,\ 10 - 12 \mid 11 - 14) = (0, -1, -2 \mid -3)$.
3. **Zero sotto il secondo pivot.** Il secondo pivot è l'1 della riga 2. La riga 3 è diventata l'opposto della riga 2. Sommandole viene la riga nulla: mossa $R_3 \to R_3 + R_2$.
   $$\left(\begin{array}{ccc|c} 4 & 5 & 6 & 7 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
4. **Risposta al quiz.** I pivot sono due, nelle colonne 1 e 2. Dopo la barra non ce ne sono. Le incognite sono 3, quindi i parametri sono $3 - 2 = 1$. La risposta giusta è la **(d)**.

**Tutte le soluzioni.** Chiamo le incognite $x$, $y$, $z$.

5. **L'incognita libera.** La colonna 3 è senza pivot: $z = t$.
6. **Riga 2.** Dice $y + 2z = 3$, cioè $y + 2t = 3$. Quindi $y = 3 - 2t$.
7. **Riga 1.** Dice $4x + 5y + 6z = 7$. Sostituisco $y$ e $z$: viene $4x + 5 \cdot (3 - 2t) + 6t = 7$. Il prodotto fa $15 - 10t$. Quindi $4x + 15 - 10t + 6t = 7$, cioè $4x + 15 - 4t = 7$.
8. **Isolo $x$.** Tolgo 15 e sommo $4t$ ai due lati: $4x = -8 + 4t$. Divido per 4: $x = -2 + t$.

$$(x, y, z) = (-2 + t,\ 3 - 2t,\ t), \qquad t \in \R.$$

**Controllo** con $t$ uguale a 0, cioè con $(-2, 3, 0)$, nelle tre equazioni di partenza: $0 + 3 + 0 = 3$, poi $-8 + 15 + 0 = 7$, poi $-16 + 27 + 0 = 11$. Tutte vere.
:::

::: esercizio esame Come all'esame: trovare tutte le soluzioni
Trova tutte le soluzioni del sistema
$$\begin{cases} x + 2y + 3z = 1 \\ 2x + 5y + 7z = 3 \\ x + 3y + 4z = 2 \end{cases}$$
e scegli la risposta giusta tra: (a) nessuna soluzione; (b) $x = -1 - t,\ y = 1 - t,\ z = t$; (c) $x = 1,\ y = 0,\ z = 0$; (d) $x = -1 + t,\ y = 1 + t,\ z = t$; (e) $x = 1 - 2s,\ y = s,\ z = 0$.
::: soluzione
1. **La matrice completa.**
   $$\left(\begin{array}{ccc|c} 1 & 2 & 3 & 1 \\ 2 & 5 & 7 & 3 \\ 1 & 3 & 4 & 2 \end{array}\right)$$
2. **Zeri sotto il primo pivot.** Sotto l'1 ci sono 2 e 1. Le mosse sono $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - R_1$.
   - Riga 2 meno 2 volte la riga 1: $(2 - 2,\ 5 - 4,\ 7 - 6 \mid 3 - 2) = (0, 1, 1 \mid 1)$.
   - Riga 3 meno la riga 1: $(1 - 1,\ 3 - 2,\ 4 - 3 \mid 2 - 1) = (0, 1, 1 \mid 1)$.
3. **Zero sotto il secondo pivot.** Le due righe nuove sono uguali. La mossa $R_3 \to R_3 - R_2$ dà la riga nulla.
4. **Zero sopra il secondo pivot.** Sopra l'1 della riga 2 c'è 2. La mossa è $R_1 \to R_1 - 2R_2$. Secondo numero: $2 - 2 = 0$. Terzo numero: $3 - 2 = 1$. Ultimo numero: $1 - 2 = -1$.
   $$\left(\begin{array}{ccc|c} 1 & 0 & 1 & -1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
5. **Lettura.** I pivot sono nelle colonne 1 e 2. La colonna 3 è senza pivot: $z = t$.
6. **Riga 1.** Dice $x + z = -1$, cioè $x + t = -1$. Quindi $x = -1 - t$.
7. **Riga 2.** Dice $y + z = 1$, cioè $y + t = 1$. Quindi $y = 1 - t$.

La risposta giusta è la **(b)**.

**Come scartare le altre senza rifare Gauss.** Nel quiz conviene: basta provare una soluzione nelle equazioni.

- (c) Provo $(1, 0, 0)$. Prima equazione: $1 + 0 + 0 = 1$, vera. Seconda equazione: $2 + 0 + 0 = 2$, ma doveva fare 3. Scartata.
- (d) Con $t$ uguale a 1 dà $(0, 2, 1)$. Prima equazione: $0 + 4 + 3 = 7$, ma doveva fare 1. Scartata.
- (e) Con $s$ uguale a 0 dà $(1, 0, 0)$, che ho già scartato.
- (a) È falsa perché la (b) funziona. Con $t$ uguale a 0 dà $(-1, 1, 0)$: viene $-1 + 2 = 1$, poi $-2 + 5 = 3$, poi $-1 + 3 = 2$. Tutte vere.
:::

## Domande di ripasso

::: domanda Che cos'è un sistema lineare e che cos'è la sua matrice completa?
Un sistema lineare è un gruppo di equazioni lineari nelle stesse incognite, da rispettare tutte insieme. «Lineare» vuol dire che le incognite sono solo moltiplicate per numeri e poi sommate.

La matrice completa è il sistema scritto con i soli numeri. Ha una riga per ogni equazione e una colonna per ogni incognita, con dentro i coefficienti. In più ha un'ultima colonna, dopo la barra, con i termini noti.
:::

::: domanda Che cos'è l'insieme $S$ delle soluzioni?
È l'insieme di tutte le liste di numeri che rendono vere tutte le equazioni del sistema insieme. Ogni lista ha un numero per ogni incognita. L'insieme può essere vuoto, avere un solo elemento oppure averne infiniti.
:::

::: domanda Quali sono le tre mosse di Gauss?
La prima: scambiare due righe. La seconda: moltiplicare una riga per un numero diverso da zero. La terza: sommare a una riga un'altra riga moltiplicata per un numero qualsiasi.

Si scrivono $R_i \leftrightarrow R_j$, poi $R_i \to \lambda R_i$, poi $R_i \to R_i + \lambda R_j$. Nella terza le due righe devono essere diverse.
:::

::: domanda Perché nella mossa (II) serve $\lambda \neq 0$?
Perché moltiplicando una riga per 0 l'equazione diventa $0 = 0$. L'informazione che conteneva va persa, e le soluzioni possono aumentare.

Con un numero diverso da zero invece la mossa si può disfare: basta moltiplicare la riga per $\frac 1\lambda$.
:::

::: domanda Perché le mosse di Gauss non cambiano le soluzioni (Proposizione 11.4)?
Per due motivi insieme. Ogni mossa trasforma equazioni vere in equazioni vere. E ogni mossa si può disfare con un'altra mossa dello stesso tipo: lo stesso scambio, la moltiplicazione per $\frac 1\lambda$, la mossa $R_i \to R_i - \lambda R_j$.

Quindi una lista di numeri risolve il sistema prima della mossa esattamente quando lo risolve dopo.
:::

::: domanda Che cos'è un pivot? Quando una matrice è a scalini?
Il pivot di una riga è il suo primo numero diverso da zero, leggendo da sinistra. Una riga nulla non ha pivot.

Una matrice è a scalini quando le righe nulle stanno in fondo e ogni pivot sta più a destra del pivot della riga sopra.
:::

::: domanda Come funziona l'algoritmo di Gauss?
Si lavora una colonna alla volta, da sinistra.

1. Cerchi un numero diverso da zero nella colonna e, se serve, lo porti in alto con uno scambio. Se la colonna è tutta di zeri passi alla colonna dopo.
2. Metti zeri sotto il pivot. A ogni riga più in basso togli la riga del pivot, tante volte quanto fa «numero da eliminare diviso pivot».
3. Copri la riga e la colonna del pivot e ripeti sul pezzo che resta.
:::

::: domanda Che cosa aggiunge l'algoritmo di Gauss–Jordan?
Dopo la forma a scalini fa due ritocchi. Mette zeri anche sopra i pivot, con la terza mossa. Rende tutti i pivot uguali a 1, con la seconda mossa.

Il risultato è la forma a scalini ridotta. Da lì le soluzioni si leggono senza altri conti.
:::

::: domanda Come si riconosce dalla forma a scalini che un sistema non ha soluzioni?
C'è un pivot nell'ultima colonna, quella dei termini noti. Vuol dire che una riga ha tutti zeri prima della barra e un numero diverso da zero dopo, come $(0, 0, 0 \mid 5)$.

Quella riga è l'equazione $0 = 5$, che è impossibile. Allora $S = \emptyset$.
:::

::: domanda Se non c'è un pivot nell'ultima colonna, come si scrivono le soluzioni?
Dai un parametro a ogni incognita la cui colonna non ha pivot. Poi rileggi ogni riga come equazione e porti i parametri a destra dell'uguale, cambiando il segno. Così ricavi le incognite con il pivot.

I parametri sono tanti quante le incognite meno i pivot. Se ogni incognita ha il suo pivot non ci sono parametri, e la soluzione è una sola.
:::

::: domanda Che differenza c'è tra una riga $(0, 0, 0 \mid 0)$ e una riga $(0, 0, 0 \mid 3)$?
La prima dice $0 = 0$. È sempre vera: non toglie soluzioni e si può ignorare.

La seconda dice $0 = 3$. È sempre falsa: il sistema non ha soluzioni.
:::

::: domanda Perché non si possono fare insieme $R_1 \to R_1 - R_2$ e $R_2 \to R_2 - R_1$?
Perché la seconda mossa userebbe la riga 1 vecchia, che nel frattempo è cambiata. Il risultato non è una sequenza di mosse di Gauss.

Le due righe nuove vengono una l'opposto dell'altra: dicono la stessa cosa, e un'equazione va persa. Dopo ogni mossa si lavora con le righe nuove.
:::

## Glossario

```glossario
Sistema lineare | Un gruppo di equazioni lineari nelle stesse incognite, da rispettare tutte insieme. È un indovinello con più indizi.
Incognita | Un numero da trovare, indicato con una lettera: $x$, $y$, oppure $x_1$, $x_2$ e così via.
Equazione lineare | Un'equazione in cui le incognite sono solo moltiplicate per numeri e poi sommate, come $2x - 3y = 7$.
Coefficiente $a_{ij}$ | Il numero che moltiplica un'incognita. $a_{ij}$ è quello dell'equazione numero $i$ davanti all'incognita numero $j$.
Termine noto $b_i$ | Il numero a destra dell'uguale nell'equazione numero $i$.
Matrice dei coefficienti $A$ | La tabella dei soli coefficienti: una riga per ogni equazione, una colonna per ogni incognita.
Vettore dei termini noti $b$ | La colonna con i termini noti, uno per ogni equazione.
Matrice completa $C = (A \mid b)$ | La matrice dei coefficienti con accanto, dopo la barra, la colonna dei termini noti.
Soluzione | Una lista di numeri, uno per ogni incognita, che rende vere tutte le equazioni del sistema.
Insieme delle soluzioni $S$ | L'insieme di tutte le soluzioni. Può essere vuoto, avere un solo elemento oppure averne infiniti.
Mosse di Gauss | Tre riscritture che non cambiano le soluzioni: scambiare due righe, moltiplicare una riga per un numero diverso da zero, sommare a una riga un multiplo di un'altra.
Pivot | Il primo numero diverso da zero di una riga, leggendo da sinistra. Una riga di soli zeri non ha pivot.
Riga nulla | Una riga fatta solo di zeri. Come equazione dice $0 = 0$.
Matrice a scalini | Una matrice con le righe nulle in fondo e ogni pivot più a destra del pivot della riga sopra.
Sostituzione all'indietro | Risolvere un sistema a scalini partendo dall'ultima equazione e risalendo.
Algoritmo di Gauss | La ricetta che porta a scalini qualsiasi matrice: una colonna alla volta, un pivot in alto e zeri sotto.
Algoritmo di Gauss–Jordan | L'algoritmo di Gauss, e poi due ritocchi: zeri anche sopra i pivot, e pivot uguali a 1.
Forma a scalini ridotta | Il risultato di Gauss–Jordan: ogni pivot vale 1 ed è l'unico numero diverso da zero della sua colonna.
Variabile libera (parametro) | Un'incognita la cui colonna non ha pivot. Il suo valore lo scegli tu: le si dà un parametro, come $t$.
Sistema impossibile | Un sistema senza soluzioni. Nella forma a scalini ha un pivot nell'ultima colonna, cioè una riga come $0 = 5$.
```

## Checklist

```checklist
- So scrivere la matrice completa di un sistema, mettendo in ordine le incognite, gli zeri e i termini noti.
- So elencare le tre mosse di Gauss con i loro due divieti: mai moltiplicare per zero, e nella terza mossa le due righe sono diverse.
- So spiegare perché le mosse di Gauss non cambiano l'insieme delle soluzioni.
- So trovare i pivot e dire se una matrice è a scalini.
- So applicare l'algoritmo di Gauss, anche quando in alto c'è uno zero o una colonna è tutta di zeri.
- So completare con Gauss–Jordan: zeri sopra i pivot e pivot uguali a 1.
- So riconoscere un sistema impossibile da una riga con tutti zeri prima della barra e un numero diverso da zero dopo.
- So scrivere tutte le soluzioni con i parametri, uno per ogni colonna senza pivot.
- So rispondere in pochi minuti al quiz «quante soluzioni?» contando pivot e incognite.
- So controllare una soluzione sostituendola nelle equazioni di partenza.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 11 «Sistemi Lineari I», pp. 50–55: le sezioni 11.A–11.E sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizione ed esempi mantengono la loro numerazione (Definizioni 11.1, 11.2 e 11.5, Proposizione 11.4, Esempi 11.3 e 11.6–11.10, Esercizio 11.11).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §3.1 «Algoritmi di risoluzione» (pp. 79–85), da cui vengono anche l'Esempio 3.1.2, la scrittura delle soluzioni come vettori e l'osservazione sulla libertà nella scelta delle mosse.
- **Appelli d'esame** di Algebra lineare 2023/24–2025/26 con soluzioni ufficiali (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): riportate le domande 10 del 24/01/2024, 10 del 16/01/2025, 1 del 02/09/2025 e 6 del 15/01/2026; citate le domande sul numero di soluzioni degli altri appelli e la domanda 6 del 10/07/2024. Le soluzioni qui sono scritte da capo.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi sono di questi appunti. Le parti **«Oltre le dispense»** (i tre finali nel disegno, i trucchi per i conti a mano, la forma ridotta che è sempre la stessa, le soluzioni scritte come vettori) collegano la lezione al resto del corso e all'esame.
