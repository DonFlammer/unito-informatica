---
corso: MDAG
modulo: AG
lezione: L02
titolo: Numeri complessi I
data: 2026-10-06
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L02
descrizione: >-
  Appunti della lezione L02 di Algebra lineare e Geometria (MDAG, parte 2): i numeri complessi, somma e prodotto,
  parte reale e parte immaginaria, coniugato, modulo, inverso e divisione, il piano complesso e la regola del
  parallelogramma, con le domande 1 degli appelli del 08/02/2024, 03/06/2025 e 03/06/2026, quiz ed esercizi svolti.
lede: >-
  Nessun numero reale ha il quadrato uguale a meno uno: si aggiunge un numero nuovo che lo fa, e si impara a fare i
  conti con i numeri che ne nascono e a vederli come punti del piano. Sono i conti della prima domanda del quiz in
  molti appelli.
materiale: dispense
scheda:
  Dispense: lezione 2 · pp. 6–9
  Libro: Martelli, §1.4.1–1.4.3 (pp. 25–27)
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 2 «Numeri complessi I»; B. Martelli, Geometria e algebra lineare, §1.4.1–1.4.3 ed Esercizio 1.4.3
appunti_html: appunti/MDAG/L02_numeri_complessi_1.html
genera_html: true
---

## In breve

- Nessun numero reale ha il quadrato negativo. Si aggiunge ai reali un numero nuovo, l'**unità immaginaria** $i$, con $i^2 = -1$.
- Un **numero complesso** è fatto di due numeri reali, la **parte reale** e la **parte immaginaria**, come in $3 + 2i$. Nel piano è il punto con quelle due coordinate.
- Si somma e si moltiplica come con i polinomi, sostituendo $-1$ al quadrato dell'unità immaginaria. Le sue potenze si ripetono ogni quattro.
- Il **coniugato** cambia il segno della parte immaginaria: nel piano è il simmetrico rispetto all'asse orizzontale. Il **modulo** è la distanza dall'origine.
- Un numero per il suo coniugato dà il quadrato del modulo, che è reale. Su questo si basano inverso e divisione: si moltiplica sopra e sotto per il coniugato del denominatore.
- I complessi sono un **campo**, come i reali, ma non sono ordinati.
- All'esame: in tre appelli la domanda 1 del quiz chiedeva di trovare $z$ da un'equazione come $(1 + i)z = 3 + 2i$, e si risolve con una divisione.

> [!CANALI]
> Algebra lineare e Geometria ha **le stesse dispense e la stessa prova** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di martedì 06/10/2026, dalle 9 alle 11, con Reto Buzano e Marco Radeschi. Le dispense hanno una lezione per incontro, e questa è la lezione 2. Gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)).

## Un numero con il quadrato negativo (p. 6)

Il quadrato di un numero reale non è mai negativo: un positivo per sé stesso dà un positivo, un negativo per sé stesso pure, e lo zero dà zero. Quindi l'equazione $x^2 = -1$ non ha soluzioni reali. Nella lezione L01 ogni insieme di numeri nasceva da un'equazione senza soluzione nel precedente; qui succede per la quarta volta.

> [!IDEA]
> Ai numeri reali si aggiunge **un solo** numero nuovo, e si decide che il suo quadrato è $-1$. Poi si continua a fare i conti con le regole di sempre.

Le dispense presentano i complessi come un **ampliamento** dei reali, «costruito con lo scopo di ottenere migliori proprietà algebriche». Il guadagno principale arriva nella lezione L04: tra i complessi ogni polinomio ha tutte le sue radici (teorema fondamentale dell'algebra). Nel corso servono soprattutto per gli **autovalori** delle matrici (lezioni L17 e L18), che sono radici di polinomi e a volte non sono reali. All'esame contano da subito: in tutti i 15 appelli 2024–2026 c'è almeno una domanda sui numeri complessi o sulle radici di un polinomio, in 11 è la domanda 1.

::: prova Quanto fa $(-4) \cdot (-4)$? E quanto fa $(-4)^2$?
Meno per meno fa più: $(-4) \cdot (-4) = 16$. Il quadrato è lo stesso conto scritto in breve, quindi anche $(-4)^2 = 16$.
:::

::: prova Esiste un numero reale che al quadrato dà $-9$?
No. Il quadrato di un numero reale è positivo oppure zero, mai negativo. Per esempio $3^2 = 9$ e $(-3)^2 = 9$: tutti e due positivi.
:::

> [!RICORDA]
> - Nessun numero reale ha il quadrato negativo; i complessi nascono aggiungendo un numero con quadrato $-1$.
> - Servono per le radici dei polinomi (L04) e per gli autovalori (L17, L18).

## Com'è fatto un numero complesso (p. 6)

Il numero nuovo si chiama **unità immaginaria**. Si scrive $i$, ha la sola proprietà $i^2 = -1$, e non è un numero reale. Il nome viene dalla storia, quando sembrava un numero fittizio. Moltiplicando $i$ per un reale e sommando un altro reale si ottengono scritture come $3 + 2i$, in cui il più non si può eseguire: il numero resta fatto di due pezzi reali, il 3 e il 2.

> [!DEF] 2.1 · Numeri complessi
> Un **numero complesso** è un oggetto algebrico che si scrive nel modo seguente:
> $$a + bi$$
> dove $a$ e $b$ sono numeri reali arbitrari e $i$ è un nuovo simbolo chiamato **unità immaginaria**.

**Come si legge.** $a$ e $b$ sono due reali qualsiasi, anche negativi, nulli o irrazionali; $bi$ vuol dire «$b$ per $i$». Il numero $a$ si chiama **parte reale**, il numero $b$ **parte immaginaria**. Nel piano cartesiano $a + bi$ è il punto $(a, b)$: $a$ in orizzontale, $b$ in verticale.

Le dispense danno cinque esempi:

| Numero complesso | $a$ | $b$ | Che cosa notare |
|---|--:|--:|---|
| $\sqrt 7$ | $\sqrt 7$ | $0$ | la $i$ non c'è: è come scrivere $\sqrt 7 + 0i$ |
| $2 + i$ | $2$ | $1$ | la $i$ da sola vuol dire «1 per $i$» |
| $23i$ | $0$ | $23$ | manca il pezzo da solo: è come scrivere $0 + 23i$ |
| $4 - i$ | $4$ | $-1$ | $-i$ vuol dire «$-1$ per $i$» |
| $-1 + \pi i$ | $-1$ | $\pi$ | $b$ può essere un reale qualsiasi |

Quando $b$ è una radice si scrive di solito $i\sqrt 3$, con la $i$ davanti, per non farla sembrare sotto la radice.

> [!TRAPPOLA] La parte immaginaria non contiene la $i$
> La parte immaginaria è il numero reale $b$, **senza** la $i$. La parte immaginaria di $4 - i$ è $-1$. Non è $-i$.

Due casi particolari tornano spesso. Con parte immaginaria nulla il numero è reale, e sta sull'asse orizzontale: ogni reale è anche complesso. Con parte reale nulla il numero si chiama **immaginario puro**, come $23i$ o $i\sqrt 2$, e sta sull'asse verticale.

Due numeri complessi sono **uguali** quando hanno la stessa parte reale e la stessa parte immaginaria. Quindi un'uguaglianza tra complessi vale due uguaglianze tra reali: da $x + yi = 3 - 2i$, con $x, y$ reali, viene $x = 3$ e $y = -2$. Lo schema serve negli esercizi 7 e 13.

::: prova Per ogni numero di' la parte reale e la parte immaginaria: (a) $5 + 3i$; (b) $2 - 7i$; (c) $-4i$; (d) $6$.
(a) Parte reale $5$, parte immaginaria $3$.

(b) Parte reale $2$, parte immaginaria $-7$. Il segno meno fa parte del numero.

(c) Parte reale $0$, parte immaginaria $-4$. È un immaginario puro.

(d) Parte reale $6$, parte immaginaria $0$. È un numero reale.
:::

::: prova In quale punto del foglio sta il numero $-2 + 3i$?
La parte reale è $-2$: fai 2 passi a **sinistra**. La parte immaginaria è $3$: fai 3 passi in su. È il punto di coordinate $(-2, 3)$.
:::

> [!RICORDA]
> - Un complesso è $a + bi$ con $a, b$ reali; $b$ è la parte immaginaria, senza la $i$.
> - Due complessi sono uguali quando coincidono parte reale e parte immaginaria.

## Somma e prodotto (p. 6)

Le dispense lo dicono in una riga: i complessi si sommano e si moltiplicano «nel modo usuale, tenendo a mente un'unica nuova relazione», cioè $i^2 = -1$. In pratica si tratta la $i$ come una lettera, e a ogni $i^2$ si sostituisce $-1$.

La **somma** si fa parte per parte. Nel piano è lo spostamento composto: prima uno, poi l'altro.

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

> [!ESEMPIO] · Somma e differenza
> **La somma.** $(3 + 2i) + (1 - 5i)$: parti reali $3 + 1 = 4$, parti immaginarie $2 + (-5) = -3$. Il risultato è $4 - 3i$.
>
> **La differenza.** $(3 + 2i) - (1 - 5i)$: il meno davanti alla parentesi cambia il segno di tutti e due i pezzi, quindi è $(3 + 2i) + (-1 + 5i) = 2 + 7i$.

Il **prodotto** si sviluppa come il prodotto di due binomi: quattro prodotti, poi si sostituisce $-1$ a $i^2$ e si raccolgono i termini.

> [!ESEMPIO] · Il prodotto delle dispense: $(7 + i)(4 - i) = 29 - 3i$
> **Primo passo: i quattro prodotti.** I pezzi della prima parentesi sono $7$ e $i$. I pezzi della seconda sono $4$ e $-i$.
>
> | Quale prodotto | Conto | Risultato |
> |---|---|--:|
> | primo per primo | $7 \cdot 4$ | $28$ |
> | primo per secondo | $7 \cdot (-i)$ | $-7i$ |
> | secondo per primo | $i \cdot 4$ | $4i$ |
> | secondo per secondo | $i \cdot (-i)$ | $-i^2$ |
>
> **Secondo passo: la regola nuova.** Nell'ultima riga è comparso $i^2$. Al suo posto scrivi $-1$:
> $$-i^2 = -(-1) = +1.$$
>
> **Terzo passo: mettere insieme.** I pezzi senza la $i$ sono $28$ e $+1$: insieme fanno $29$. I pezzi con la $i$ sono $-7i$ e $4i$: insieme fanno $-3i$.
>
> Risultato: $(7 + i) \cdot (4 - i) = 29 - 3i$.

> [!METODO] Moltiplicare due numeri complessi
> 1. Fai i quattro prodotti: ogni pezzo della prima parentesi per ogni pezzo della seconda.
> 2. Dove compare $i^2$, scrivi $-1$. Quel pezzo **cambia segno** e perde la $i$.
> 3. Somma tra loro i pezzi senza la $i$. Poi somma tra loro i pezzi con la $i$.

Altri prodotti con lo stesso metodo:

| Prodotto | I prodotti pezzo per pezzo | Con $-1$ al posto di $i^2$ | Risultato |
|---|---|---|--:|
| $3(2 - i)$ | $6 - 3i$ | non c'è $i^2$ | $6 - 3i$ |
| $i(2 + 3i)$ | $2i + 3i^2$ | $2i - 3$ | $-3 + 2i$ |
| $(1 + 2i)(3 - i)$ | $3 - i + 6i - 2i^2$ | $3 - i + 6i + 2$ | $5 + 5i$ |
| $(1 + i)^2$ | $1 + i + i + i^2$ | $1 + i + i - 1$ | $2i$ |
| $(2 + 3i)^2$ | $4 + 6i + 6i + 9i^2$ | $4 + 6i + 6i - 9$ | $-5 + 12i$ |
| $(1 + i)(1 - i)$ | $1 - i + i - i^2$ | $1 - i + i + 1$ | $2$ |

L'ultimo prodotto è reale: è un numero per il suo coniugato, e il motivo si vede nella sezione sul modulo. Con le lettere, le dispense scrivono una volta per tutte:

$$(a + bi) \cdot (c + di) = ac + bci + adi + bd\,i^2 = (ac - bd) + (ad + bc)i$$

> [!TRAPPOLA] Non si moltiplica «pezzo per pezzo»
> La somma si fa pezzo per pezzo. Il prodotto **no**.
>
> Prendi $(1 + 2i)(3 - i)$. Se moltiplichi solo le parti reali tra loro e le parti immaginarie tra loro, ottieni $3 - 2i$. È sbagliato: mancano i due prodotti «incrociati», primo per secondo e secondo per primo. Il risultato giusto è $5 + 5i$.
>
> Secondo errore tipico: trattare $i^2$ come $+1$. Nello stesso conto verrebbe $1 + 5i$, sbagliato anche questo.

L'insieme dei numeri complessi si scrive $\C$, e la catena della lezione L01 si allunga: $\N \subsetneq \Z \subsetneq \Q \subsetneq \R \subsetneq \C$. I conti tra reali non cambiano, perché i pezzi con la $i$ valgono zero: $\C$ **estende** $\R$.

> [!APPROFONDIMENTO] da dove vengono davvero i numeri complessi
> Nella storia i numeri complessi sono nati dalle equazioni in cui compare $x^3$, cioè $x \cdot x \cdot x$. Nel Cinquecento Gerolamo Cardano pubblicò una formula per risolvere equazioni come $x^3 = 15x + 4$. Questa equazione ha la soluzione reale $x = 4$: infatti $4 \cdot 4 \cdot 4 = 64$, e anche $15 \cdot 4 + 4 = 64$.
>
> La formula di Cardano, però, per arrivare a quel 4 chiede di calcolare la radice quadrata di $-121$, che tra i numeri reali non esiste. Rafael Bombelli ebbe l'idea di andare avanti lo stesso, trattandola come un numero qualsiasi: quello che oggi scriviamo $11i$. In fondo ai conti trovò che la soluzione è la somma di $2 + i$ e di $2 - i$, cioè proprio 4. Nell'esercizio 4 rifai il passaggio centrale del suo conto.
>
> I numeri «immaginari» servivano a trovare un numero reale.

::: prova Quanto fa $i \cdot (3 + i)$?
I prodotti sono due: $i \cdot 3 = 3i$ e $i \cdot i = i^2 = -1$. Risultato: $-1 + 3i$.
:::

::: prova Quanto fa $(1 + i)(2 + i)$?
I quattro prodotti: $1 \cdot 2 = 2$, poi $1 \cdot i = i$, poi $i \cdot 2 = 2i$, poi $i \cdot i = i^2 = -1$.

Pezzi senza la $i$: $2 - 1 = 1$. Pezzi con la $i$: $i + 2i = 3i$. Risultato: $1 + 3i$.
:::

> [!RICORDA]
> - Somma: parte per parte. Prodotto: quattro prodotti, $-1$ al posto di $i^2$, poi si raccoglie.
> - Il prodotto non si fa pezzo per pezzo. $\C$ contiene $\R$.

## Le potenze di i (oltre le dispense)

Moltiplicando l'unità immaginaria per sé stessa più volte, i risultati si ripetono. Ogni potenza è la precedente per $i$:

| Potenza | Il conto | Risultato |
|---|---|--:|
| $i^1$ | è la $i$ stessa | $i$ |
| $i^2$ | è la regola della $i$ | $-1$ |
| $i^3$ | $i^2 \cdot i = (-1) \cdot i$ | $-i$ |
| $i^4$ | $i^3 \cdot i = (-i) \cdot i = -i^2 = -(-1)$ | $1$ |
| $i^5$ | $i^4 \cdot i = 1 \cdot i$ | $i$ |
| $i^6$ | $i^5 \cdot i = i \cdot i$ | $-1$ |

Arrivati a $i^4 = 1$ tutto ricomincia. Nel piano i quattro valori sono i punti a distanza 1 dall'origine sugli assi, e ogni moltiplicazione per $i$ passa al successivo in senso antiorario.

```grafico
titolo: Le potenze di $i$ girano su quattro punti: $1$, $i$, $-1$, $-i$. Poi ricominciano
x: -2.4 2.4
y: -1.8 1.8
nomi: $\operatorname{Re}$ $\operatorname{Im}$
cerchio: 0 0 1 | grigio | tratteggio
arco: 0 0 1.25 0.2 1.37 | ambra
arco: 0 0 1.25 1.77 2.94 | ambra
arco: 0 0 1.25 3.34 4.51 | ambra
arco: 0 0 1.25 4.91 6.08 | ambra
punto: 1 0 | accento | $i^0 = i^4 = 1$ | ne
punto: 0 1 | blu | $i^1 = i^5 = i$ | ne
punto: -1 0 | viola | $i^2 = i^6 = -1$ | no
punto: 0 -1 | verde | $i^3 = i^7 = -i$ | se
```

Per un esponente grande conta solo il resto della divisione per 4, perché ogni gruppo di quattro fattori vale $i^4 = 1$. Per esempio $15 = 4 \cdot 3 + 3$, quindi $i^{15} = i^3 = -i$.

> [!METODO] Calcolare una potenza di $i$
> 1. Dividi l'esponente per 4 e guarda il **resto**.
> 2. Leggi il risultato in questa tabella.
>
> | Resto | $0$ | $1$ | $2$ | $3$ |
> |---|---|---|---|---|
> | Risultato | $1$ | $i$ | $-1$ | $-i$ |

| Potenza | Divisione dell'esponente per 4 | Resto | Risultato |
|---|---|--:|--:|
| $i^{15}$ | $15 = 4 \cdot 3 + 3$ | $3$ | $-i$ |
| $i^{100}$ | $100 = 4 \cdot 25 + 0$ | $0$ | $1$ |
| $i^{2026}$ | $2026 = 4 \cdot 506 + 2$ | $2$ | $-1$ |

Per il resto della divisione per 4 bastano le ultime due cifre, perché 100 è multiplo di 4: per 2026 si guarda 26, che dà resto 2. Anche $-i$ ha quadrato $-1$, perché $(-i)^2 = i^2 = -1$: l'equazione $x^2 = -1$ ha in $\C$ **due** soluzioni, $i$ e $-i$.

> [!ESAME] Le potenze della $i$ in un appello
> Nell'appello del 05/02/2026 la domanda 1 chiedeva quale numero **non** è soluzione di $z^{2026} = -1$. Tra le risposte c'erano $i$ e $-i$: per scartarle bisognava controllare che $i^{2026}$ e $(-i)^{2026}$ valgono $-1$. Le altre risposte richiedono la lezione L03.

::: prova Quanto valgono $i^6$, $i^{23}$ e $i^{40}$?
$i^6$: la divisione è $6 = 4 \cdot 1 + 2$, resto 2. Quindi $i^6 = -1$.

$i^{23}$: la divisione è $23 = 4 \cdot 5 + 3$, resto 3. Quindi $i^{23} = -i$.

$i^{40}$: la divisione è $40 = 4 \cdot 10 + 0$, resto 0. Quindi $i^{40} = 1$.
:::

::: prova Quanto vale $i^{1001}$? Usa le ultime due cifre dell'esponente.
Le ultime due cifre sono 01, cioè 1. Il resto della divisione per 4 è 1. Quindi $i^{1001} = i$.
:::

> [!RICORDA]
> - Le potenze di $i$ si ripetono ogni quattro: $i$, $-1$, $-i$, $1$. Conta il resto dell'esponente diviso 4.
> - $x^2 = -1$ ha due soluzioni complesse, $i$ e $-i$.

## Un campo senza ordine (pp. 6–7)

Nei conti precedenti si sono usate senza dirlo commutativa, associativa e distributiva. Le dispense verificano che in $\C$ valgono tutte le nove proprietà della lezione L01. Qui $a$, $b$, $c$ sono numeri complessi interi, non più i due pezzi di un numero.

> [!PROP] 2.2
> Con l'addizione e la moltiplicazione definite sopra, l'insieme $\C$ ha le seguenti proprietà:
> 1. esiste l'**elemento neutro** $0$ per l'addizione $+$, per cui $0 + a = a + 0 = a$, $\forall a \in \C$;
> 2. vale la proprietà **commutativa** $a + b = b + a$, $\forall a, b \in \C$;
> 3. vale la proprietà **associativa** $a + (b + c) = (a + b) + c$, $\forall a, b, c \in \C$;
> 4. ogni elemento $a \in \C$ ha un **inverso** (o **opposto**) $-a$, per cui $a + (-a) = (-a) + a = 0$;
> 5. esiste l'**elemento neutro** $1$ per la moltiplicazione, per cui $1 \cdot a = a \cdot 1 = a$, $\forall a \in \C$;
> 6. vale la proprietà **commutativa** $a \cdot b = b \cdot a$, $\forall a, b \in \C$;
> 7. vale la proprietà **associativa** $a \cdot (b \cdot c) = (a \cdot b) \cdot c$, $\forall a, b, c \in \C$;
> 8. ogni elemento $a \in \C$ con $a \neq 0$ ha un **inverso** $a^{-1}$, per cui $a \cdot a^{-1} = a^{-1} \cdot a = 1$;
> 9. vale la proprietà **distributiva** $a \cdot (b + c) = a \cdot b + a \cdot c$, $\forall a, b, c \in \C$.

**Come si legge.** Sono le stesse nove righe della proposizione 1.5, con $\C$ al posto di $\R$. Lo zero è $0 + 0i$ e l'uno è $1 + 0i$; l'opposto di $a + bi$ è $-a - bi$. L'unica proprietà che richiede un conto vero è la 8, l'inverso, che si trova più avanti con il coniugato. Le dispense concludono: «Allora, come $\R$, anche $\C$ è un **campo**.» Da qui in poi, quando il corso scrive «un campo $\K$» (si legge «kappa»), intende quasi sempre $\R$ o $\C$.

Da qui in poi un numero complesso si indica spesso con una lettera sola, di solito $z$ o $w$: «prendiamo $z = 3 + 2i$».

> [!OLTRE] · che cosa ci guadagni
> Siccome valgono le nove regole, con i numeri complessi funzionano tutti i modi di fare i conti che conosci per i numeri reali. Uno servirà nella lezione L04: se un prodotto fa zero, almeno uno dei due numeri è zero. Si chiama **legge di annullamento del prodotto**.

Quello che i complessi non hanno è l'**ordine**. Nel piano non c'è un modo sensato di dire quale tra due punti sia il «maggiore», e le dispense lo scrivono con un punto esclamativo: $\C$ non è ordinato. Il motivo, in una riga: in un campo ordinato ogni quadrato non nullo è positivo, mentre qui $i^2 = -1$.

> [!NOTA] La dimostrazione serve per capire, non per l'esame
> Il fatto «$\C$ è un campo, ma non è ordinato» va ricordato. La dimostrazione completa invece serve solo per capire: è nel riquadro qui sotto, e puoi saltarla.

> [!DIM] · perché $\C$ non si può ordinare
> In un campo ordinato come $\R$ i numeri positivi rispettano due regole.
>
> - **Regola A.** Il prodotto di due numeri positivi è positivo.
> - **Regola B.** Preso un numero diverso da zero, **uno solo** tra lui e il suo opposto è positivo. Per esempio tra $3$ e $-3$ è positivo solo $3$.
>
> **Primo fatto: in un campo ordinato il quadrato di un numero diverso da zero è positivo.** Se il numero è positivo, lo dice la regola A. Se è negativo, il suo opposto è positivo per la regola B. E un numero e il suo opposto hanno lo stesso quadrato, perché meno per meno fa più: per esempio $(-3)^2 = 3^2$.
>
> **Secondo fatto: in $\C$ questo porta a una cosa impossibile.** Si ragiona per assurdo, come nella lezione L01: facciamo finta che $\C$ abbia un ordine con queste due regole.
>
> 1. Il numero $1$ è il quadrato di $1$. Per il primo fatto, $1$ è positivo.
> 2. Il numero $-1$ è il quadrato di $i$. Per il primo fatto, anche $-1$ è positivo.
> 3. Ma $1$ e $-1$ sono uno l'opposto dell'altro. Per la regola B non possono essere positivi tutti e due.
>
> Siamo arrivati a una cosa impossibile. Quindi un ordine così, in $\C$, non esiste.
>
> Una precisazione. I numeri complessi si possono mettere in fila in qualche modo, per esempio guardando prima la parte reale e poi la parte immaginaria. Ma nessuna fila rispetta le regole dei conti: «non ordinato» vuol dire questo.

> [!TRAPPOLA] Niente «maggiore» e «minore» tra numeri complessi
> Scritture come $3i > 2i$ oppure $1 + i < 2$ **non hanno senso**: non sono né vere né false. Si possono confrontare solo i numeri **reali** legati a un numero complesso: la parte reale, la parte immaginaria, e il modulo che vedrai tra due sezioni.

::: prova Vero o falso: $2i > i$?
Né vero né falso: la scrittura non ha senso. Tra numeri complessi non esistono «maggiore» e «minore».
:::

::: prova Tra $\Z$, $\R$ e $\C$: quali sono campi? Quali sono ordinati?
$\R$ e $\C$ sono campi. $\Z$ no: per esempio il 2 non ha un inverso tra gli interi (lezione L01).

$\Z$ e $\R$ sono ordinati. $\C$ no.
:::

> [!RICORDA]
> - $\C$ è un campo: valgono le nove proprietà di $\R$.
> - $\C$ non è ordinato: tra complessi «maggiore» e «minore» non hanno senso.

## Parte reale, parte immaginaria e coniugato (p. 7)

Le due parti ricevono un simbolo: per $z = 3 + 4i$ si scrive $\operatorname{Re}(z) = 3$ e $\operatorname{Im}(z) = 4$. Entrambe prendono un complesso e restituiscono un reale.

> [!DEF] Parte reale e parte immaginaria (p. 7)
> Sia $z = a + bi$ un numero complesso. I numeri $a$ e $b$ sono detti rispettivamente la **parte reale** e la **parte immaginaria** di $z$. Scriviamo $a = \operatorname{Re}(z)$ e $b = \operatorname{Im}(z)$. Il numero $z$ è reale, cioè appartiene al sottoinsieme $\R \subset \C$, se e solo se la sua parte immaginaria è nulla.

**Come si legge.** Il primo numero, $a$, è la parte reale; il secondo, $b$, la parte immaginaria. L'ultima frase dice che i reali sono esattamente i complessi con $\operatorname{Im}(z) = 0$: «se e solo se» vuol dire che le due cose sono vere insieme o false insieme.

Il **coniugato** di $z$ si ottiene cambiando il segno della parte immaginaria, e si scrive con una barra: $\overline{3 + 2i} = 3 - 2i$. Nel piano è il simmetrico rispetto all'asse reale.

```grafico
titolo: Il coniugato è il riflesso del punto, con lo specchio messo lungo l'asse orizzontale
x: -1 5
y: -3 3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
segmento: 3 2 3 -2 | grigio | tratteggio
punto: 3 2 | accento | $z = 3 + 2i$ | ne
punto: 3 -2 | viola | $\bar z = 3 - 2i$ | se
testo: 1.2 0.3 | "asse reale"
```

> [!DEF] Coniugato (p. 7)
> Il **coniugio** (o **coniugato**) di $z = a + bi$ è il numero complesso
> $$\bar z = a - bi$$
> ottenuto da $z$ cambiando il segno della sua parte immaginaria.

**Come si legge.** «Coniugio» e «coniugato» sono due nomi della stessa cosa. Cambia **solo** il segno della parte immaginaria; la parte reale resta. Quando la barra copre un'espressione, come in $\overline{z + w}$, si coniuga tutto il risultato.

| $z$ | $\operatorname{Re}(z)$ | $\operatorname{Im}(z)$ | $\bar z$ |
|---|--:|--:|---|
| $3 + 4i$ | $3$ | $4$ | $3 - 4i$ |
| $-2 + i$ | $-2$ | $1$ | $-2 - i$ |
| $1 - 3i$ | $1$ | $-3$ | $1 + 3i$ |
| $5i$ | $0$ | $5$ | $-5i$ |
| $7$ | $7$ | $0$ | $7$ |

Il 7 coincide con il suo coniugato, perché sta sull'asse reale. Succede per tutti i reali e solo per loro: $z$ è reale esattamente quando $z = \bar z$. Infatti $z = \bar z$ vuol dire $b = -b$, cioè $b = 0$.

> [!OLTRE] · quattro regole utili sul coniugato
> Prendiamo $z = 3 + 4i$, che ha coniugato $\bar z = 3 - 4i$.
>
> | Che cosa calcoli | Con $z = 3 + 4i$ | In generale, con $z = a + bi$ |
> |---|---|---|
> | il numero più il coniugato | $(3 + 4i) + (3 - 4i) = 6$ | $z + \bar z = 2a$: sempre un numero reale |
> | il numero meno il coniugato | $(3 + 4i) - (3 - 4i) = 8i$ | $z - \bar z = 2bi$: sempre un immaginario puro |
> | il coniugato del coniugato | da $3 - 4i$ si torna a $3 + 4i$ | $\bar{\bar z} = z$ |
> | il coniugato di una somma o di un prodotto | il controllo è qui sotto | $\overline{z + w} = \bar z + \bar w$ e $\overline{zw} = \bar z\,\bar w$ |
>
> L'ultima riga dice che puoi coniugare prima o dopo aver fatto il conto: il risultato non cambia. Un controllo con i numeri: il prodotto di $1 + 2i$ e $3 - i$ è $5 + 5i$. Il prodotto dei loro coniugati è $5 - 5i$. La dimostrazione con le lettere è nell'esercizio 8.

::: prova Scrivi parte reale, parte immaginaria e coniugato di $z = -2 + 5i$.
$\operatorname{Re}(z) = -2$ e $\operatorname{Im}(z) = 5$. Il coniugato cambia il segno davanti alla $i$: $\bar z = -2 - 5i$.
:::

::: prova Quanto fa $z + \bar z$ quando $z = 4 - 9i$?
Il coniugato è $4 + 9i$. La somma è $(4 - 9i) + (4 + 9i) = 8$. Le parti immaginarie si cancellano, e resta il doppio della parte reale.
:::

> [!RICORDA]
> - $\operatorname{Re}(z)$ e $\operatorname{Im}(z)$ sono numeri reali.
> - Il coniugato cambia il segno della parte immaginaria: simmetria rispetto all'asse reale. $z = \bar z$ esattamente quando $z$ è reale.

## Il modulo (p. 7)

La distanza di un punto dall'origine si trova con il teorema di Pitagora. Per $3 + 4i$ i cateti sono 3 e 4, l'ipotenusa $\sqrt{9 + 16} = 5$. Questa distanza si chiama **modulo** e si scrive $|3 + 4i| = 5$.

```grafico
titolo: $\lvert 3 + 4i \rvert = 5$: il modulo è l'ipotenusa di un triangolo con cateti $3$ e $4$
x: -1 5
y: -1 5
nomi: $\operatorname{Re}$ $\operatorname{Im}$
poligono: 0 0 3 0 3 4 | blu | tenue
vettore: 3 4 | accento | spesso | $3 + 4i$ | ne
testo: 1.5 -0.35 | $3$
testo: 3.35 2 | $4$
testo: 1.1 2.3 | accento | $\lvert z \rvert = 5$
```

> [!DEF] Modulo (p. 7)
> Il **modulo** di $z = a + bi$ è il numero reale
> $$|z| = \sqrt{a^2 + b^2}.$$

**Come si legge.** Si sommano i quadrati delle due parti e si prende la radice. Il risultato è un reale non negativo, perché è una distanza. Per un numero reale il modulo è il valore assoluto della lezione L01: $|-5| = 5$. Le dispense osservano che il modulo è nullo solo per $z = 0$ ed è «strettamente positivo» negli altri casi. Infatti una somma di due quadrati fa zero solo se sono nulli entrambi.

| $z$ | Somma dei due quadrati | $\lvert z \rvert$ |
|---|---|--:|
| $3 + 4i$ | $9 + 16 = 25$ | $5$ |
| $1 - i$ | $1 + 1 = 2$ | $\sqrt 2$ |
| $1 + 2i$ | $1 + 4 = 5$ | $\sqrt 5$ |
| $-5$ | $25 + 0 = 25$ | $5$ |
| $2i$ | $0 + 4 = 4$ | $2$ |
| $5 - 12i$ | $25 + 144 = 169$ | $13$ |

Il legame tra coniugato e modulo è la formula più usata della lezione. Moltiplicando un numero per il suo coniugato i termini con la $i$ si cancellano e restano i due quadrati.

> [!ESEMPIO] · Il prodotto $(3 + 4i)(3 - 4i)$
> I quattro prodotti sono $9$, $-12i$, $12i$ e $-16i^2$. I due termini con la $i$ si cancellano; l'ultimo vale $-16 \cdot (-1) = 16$.
>
> Risultato: $9 + 16 = 25$. È un numero reale. Ed è $5^2$, cioè il quadrato del modulo.

$$z \cdot \bar z = (a + bi) \cdot (a - bi) = a^2 + b^2 = |z|^2$$

> [!IDEA] · il coniugato fa sparire la $i$
> Un numero complesso moltiplicato per il suo coniugato dà sempre un numero **reale**, mai negativo: il quadrato del modulo. È il modo per liberarsi della $i$. Su questo si basano l'inverso e la divisione.

> [!TRAPPOLA] Il quadrato del modulo non è il quadrato del numero
> Le scritture $|z|^2$ e $z^2$ indicano due cose diverse. La prima è sempre un numero reale. La seconda di solito no.
>
> | $z$ | $\lvert z \rvert^2$ | $z^2$ |
> |---|--:|--:|
> | $i$ | $1$ | $-1$ |
> | $1 + i$ | $2$ | $2i$ |
>
> Secondo errore: il modulo **non** è la somma delle due parti. Il modulo di $3 + 4i$ è 5, non $3 + 4 = 7$.

::: prova Calcola il modulo di $4 + 3i$, di $1 + i$ e di $-2i$.
$|4 + 3i|$: i due quadrati sono 16 e 9. La somma è 25, e $\sqrt{25} = 5$.

$|1 + i|$: i due quadrati sono 1 e 1. La somma è 2. Il modulo è $\sqrt 2$.

$|-2i|$: la parte reale è 0, la parte immaginaria è $-2$. I due quadrati sono 0 e 4. La somma è 4, e $\sqrt 4 = 2$.
:::

::: prova Quanto fa $(2 + i)(2 - i)$? Rispondi senza fare i quattro prodotti.
Sono un numero e il suo coniugato. Il prodotto è il quadrato del modulo: $2^2 + 1^2 = 4 + 1 = 5$.
:::

> [!RICORDA]
> - $|a + bi| = \sqrt{a^2 + b^2}$: la distanza dall'origine, nulla solo per lo zero.
> - $z \bar z = |z|^2$, che è reale.

## L'inverso e la divisione (pp. 7–8)

La proprietà 8 del campo promette un inverso per ogni complesso diverso da zero, ma non dice come scriverlo. Per esempio $\frac 1{2 + i}$, così com'è, non mostra parte reale e parte immaginaria. Come per le radici al denominatore nella lezione L01, si moltiplica sopra e sotto per un numero che rende reale il denominatore: il suo coniugato.

> [!ESEMPIO] 2.3 · Gli inversi di $i$ e di $2 + i$
> **L'inverso di $2 + i$.** Partiamo dalla frazione $\frac 1{2 + i}$.
>
> 1. Il numero sotto è $2 + i$. Il suo coniugato è $2 - i$.
> 2. Moltiplica sopra e sotto per $2 - i$. Sopra viene $1 \cdot (2 - i) = 2 - i$.
> 3. Sotto viene $(2 + i)(2 - i)$: un numero per il suo coniugato. È il quadrato del modulo, cioè $2^2 + 1^2 = 5$.
> 4. La frazione è diventata $\frac{2 - i}5$. Sotto c'è un numero reale, quindi si divide un pezzo alla volta: $\frac 25 - \frac 15 i$.
>
> Con i simboli delle dispense:
> $$(2 + i)^{-1} = \frac{2 - i}{|2 + i|^2} = \frac{2 - i}5.$$
>
> **Controllo.** L'inverso, moltiplicato per il numero, deve dare 1:
> $$(2 + i) \cdot \frac{2 - i}5 = \frac{(2 + i)(2 - i)}5 = \frac 55 = 1.$$
>
> **L'inverso di $i$.** Le dispense dicono: l'inverso di $i$ è $-i$. Infatti $i \cdot (-i) = -i^2 = -(-1) = 1$. Con il metodo di prima viene lo stesso: il coniugato di $i$ è $-i$, e il quadrato del modulo di $i$ è $0^2 + 1^2 = 1$. Quindi l'inverso è $\frac{-i}1 = -i$.

> [!PROP] · Inverso di un numero complesso (p. 7)
> Come nei numeri razionali e reali, ogni numero complesso $z \neq 0$ ha un **inverso** $z^{-1}$ rispetto all'operazione di moltiplicazione, dato da
> $$z^{-1} = \frac{\bar z}{|z|^2}.$$

**Come si legge.** L'inverso è il coniugato diviso per il quadrato del modulo, che è un reale non nullo; si scrive anche $\frac 1z$. Le dispense lo verificano in una riga, usando $z \bar z = |z|^2$:

$$z \cdot z^{-1} = \frac{z \cdot \bar z}{|z|^2} = \frac{|z|^2}{|z|^2} = 1$$

Con le due parti in vista:

$$(a + bi)^{-1} = \frac{a - bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}\,i$$

Per esempio l'inverso di $3 + 4i$ è $\frac{3 - 4i}{25}$.

Per **dividere** si usa lo stesso schema, che equivale a moltiplicare per l'inverso del denominatore.

> [!METODO] Dividere due numeri complessi
> 1. Scrivi la divisione come frazione.
> 2. Trova il coniugato del numero **sotto**.
> 3. Moltiplica sopra e sotto per quel coniugato.
> 4. Sotto ottieni il quadrato del modulo, che è un numero reale. Sopra fai i quattro prodotti.
> 5. Dividi per il numero sotto sia la parte reale sia la parte immaginaria del numero sopra.
> 6. **Controllo:** moltiplica il risultato per il numero che stava sotto. Devi ritrovare il numero che stava sopra.

> [!ESEMPIO] · La divisione $\frac{4 + 3i}{1 + 2i}$
> 1. Il numero sotto è $1 + 2i$. Il suo coniugato è $1 - 2i$.
> 2. Sotto: $(1 + 2i)(1 - 2i)$ è il quadrato del modulo, cioè $1^2 + 2^2 = 5$.
> 3. Sopra: $(4 + 3i)(1 - 2i)$. I quattro prodotti sono $4$, $-8i$, $3i$ e $-6i^2$. L'ultimo vale $+6$.
> 4. Raccogli sopra. Pezzi senza la $i$: $4 + 6 = 10$. Pezzi con la $i$: $-8i + 3i = -5i$. Sopra c'è $10 - 5i$.
> 5. Dividi per 5 tutti e due i pezzi: $\frac{10 - 5i}5 = 2 - i$.
>
> **Controllo.** Moltiplica $2 - i$ per $1 + 2i$. I quattro prodotti sono $2$, $4i$, $-i$ e $-2i^2 = +2$. In tutto $4 + 3i$: è il numero che stava sopra.

> [!TRAPPOLA] Non si divide «pezzo per pezzo»
> La frazione $\frac{4 + 3i}{1 + 2i}$ **non** è $\frac 41 + \frac 32 i$. Il risultato giusto, calcolato qui sopra, è $2 - i$. Se moltiplichi il risultato sbagliato per $1 + 2i$ ottieni $1 + \frac{19}2 i$, non $4 + 3i$.
>
> Si può dividere un pezzo alla volta solo quando sotto c'è un numero **reale**. Per questo il primo passo è sempre far diventare reale il numero sotto.

Con la divisione si risolvono le equazioni di primo grado in $z$: $(1 + 2i)z = 4 + 3i$ dà $z = \frac{4 + 3i}{1 + 2i} = 2 - i$, la divisione appena fatta.

> [!ESAME] Il tipo di domanda più diretto
> Trovare un numero complesso da un'equazione così è stata la domanda 1 del quiz negli appelli del 08/02/2024, del 03/06/2025 e del 03/06/2026. Il metodo è sempre lo stesso: svolgi i prodotti, dividi con il coniugato, **controlla moltiplicando**. Le tre domande sono svolte nella sezione «Verso l'esame».

::: prova Qual è l'inverso di $1 + i$?
Il coniugato è $1 - i$. Il quadrato del modulo è $1 + 1 = 2$. L'inverso è $\frac{1 - i}2$, cioè $\frac 12 - \frac 12 i$.
:::

::: prova Calcola $\frac{1 + i}{1 - i}$.
Il coniugato del numero sotto è $1 + i$. Sotto viene $1 + 1 = 2$. Sopra viene $(1 + i)(1 + i)$: i quattro prodotti sono $1$, $i$, $i$ e $i^2 = -1$, in tutto $2i$. Dividi per 2: il risultato è $i$.

Controllo: $i \cdot (1 - i) = i - i^2 = 1 + i$, che è il numero che stava sopra.
:::

::: prova Risolvi l'equazione $i \cdot z = 3$.
Dividi per $i$: $z = \frac 3i$. Il coniugato di $i$ è $-i$. Sopra: $3 \cdot (-i) = -3i$. Sotto: $i \cdot (-i) = 1$. Quindi $z = -3i$.

Controllo: $i \cdot (-3i) = -3i^2 = 3$.
:::

> [!RICORDA]
> - $z^{-1} = \frac{\bar z}{|z|^2}$. Per dividere si moltiplica sopra e sotto per il coniugato del denominatore.
> - Alla fine si controlla moltiplicando.

## Il piano complesso (pp. 8–9)

Le dispense danno un nome al disegno usato finora: i reali formano una **retta**, i complessi un **piano**, il **piano complesso**, in cui $a + bi$ è il punto $(a, b)$. L'asse orizzontale è l'**asse reale** (delle ascisse) e contiene i reali; quello verticale è l'**asse immaginario** (delle ordinate) e contiene gli immaginari puri.

```grafico
titolo: Nel piano complesso il numero $a + bi$ è il punto $(a, b)$: la parte reale si legge in orizzontale, la parte immaginaria in verticale
x: -4 4
y: -3 3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
segmento: 2 0 2 1 | grigio | tratteggio
segmento: 0 1 2 1 | grigio | tratteggio
vettore: 2 1 | accento | $2 + i$ | ne
punto: -1 2 | blu | $-1 + 2i$ | no
punto: -3 0 | ambra | $-3$ | n
punto: 0 2 | viola | $2i$ | ne
punto: -2 -2 | rosa | $-2 - 2i$ | so
punto: 3 -2 | verde | $3 - 2i$ | se
```

Un complesso si può vedere come punto o come **vettore** applicato nell'origine, cioè la freccia dall'origine al punto. Con la freccia il modulo è la sua lunghezza; i vettori sono il tema del corso dalla lezione L05. Il coniugato è il simmetrico rispetto all'asse reale; l'**opposto** $-z$, con tutti e due i segni cambiati, è il simmetrico rispetto all'origine.

```grafico
titolo: Coniugato: simmetria rispetto all'asse reale. Opposto: simmetria rispetto all'origine
x: -6 6
y: -3 3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
segmento: 3 2 3 -2 | grigio | tratteggio
segmento: 3 2 -3 -2 | grigio | tratteggio
vettore: 3 2 | accento | $z = 3 + 2i$ | ne
vettore: 3 -2 | viola | $\bar z = 3 - 2i$ | se
vettore: -3 -2 | ambra | $-z = -3 - 2i$ | so
```

La somma nel piano è la **regola del parallelogramma**: il punto $z_1 + z_2$ è il quarto vertice del parallelogramma con vertici $0$, $z_1$ e $z_2$. Con l'esempio delle dispense, $z_1 = 1 + 3i$ e $z_2 = 4 + i$, la somma è $5 + 4i$; percorrendo prima $z_1$ e poi $z_2$, o nell'ordine inverso, si arriva nello stesso punto.

```grafico
titolo: La Figura 2 delle dispense: $z_1 = 1 + 3i$, $z_2 = 4 + i$, $z_1 + z_2 = 5 + 4i$
x: -1 7
y: -1 5
nomi: $\operatorname{Re}$ $\operatorname{Im}$
poligono: 0 0 1 3 5 4 4 1 | ambra | tenue
segmento: 1 3 5 4 | grigio | tratteggio
segmento: 4 1 5 4 | grigio | tratteggio
vettore: 1 3 | accento | $z_1$ | no
vettore: 4 1 | blu | $z_2$ | se
vettore: 5 4 | ambra | spesso | $z_1 + z_2$ | ne
```

> [!OLTRE] · la differenza e la distanza tra due punti
> La differenza $z - w$ è la freccia che va **dal punto $w$ al punto $z$**. La sua lunghezza, cioè il suo modulo, è la **distanza** tra i due punti.
>
> Esempio: la distanza tra $1 + i$ e $4 + 5i$.
>
> 1. Fai la differenza: $(4 + 5i) - (1 + i) = 3 + 4i$.
> 2. Calcola il modulo: i due quadrati sono 9 e 16, la somma è 25, la radice è 5.
>
> I due punti distano 5.
>
> Con le lettere, se $z = a + bi$ e $w = p + qi$:
> $$|z - w| = \sqrt{(a - p)^2 + (b - q)^2}.$$
> È la formula della distanza tra due punti del piano cartesiano.
>
> Da qui viene un fatto che serve nell'esercizio 9. Fissa un punto $c$ e un numero positivo $r$. I punti $z$ che distano $r$ da $c$ formano una **circonferenza**: quella di centro $c$ e raggio $r$. Con i simboli, sono i punti con $|z - c| = r$.

Il prodotto è «apparentemente più complicato» da disegnare, dicono le dispense, e si capisce con le coordinate polari della lezione L03. Un caso si vede già: moltiplicare per $i$ ruota di un angolo retto in senso antiorario. Da $2 + i$ si passa a $i(2 + i) = -1 + 2i$, poi a $i(-1 + 2i) = -2 - i$.

```grafico
titolo: Moltiplicare per $i$ fa ruotare di $90°$ attorno all'origine (anticipo della lezione L03)
x: -3 3
y: -3 3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
arco: 0 0 0.8 0.4636 2.0344 | grigio
arco: 0 0 0.8 2.0344 3.6052 | grigio
vettore: 2 1 | accento | $z = 2 + i$ | ne
vettore: -1 2 | blu | $iz = -1 + 2i$ | no
vettore: -2 -1 | ambra | $i^2 z = -2 - i$ | so
```

Nello strumento qui sotto, nel modo **z + w**, trascinando i due punti il parallelogramma si aggiorna e sotto si legge la somma. Nel modo **coniugato e inverso di z** si vedono $\bar z$ e $1/z$: quando $|z| > 1$ l'inverso sta dentro la circonferenza di raggio 1, quando $|z| < 1$ sta fuori, perché $|z^{-1}| = \frac 1{|z|}$ (esercizio 8).

```widget complessi
titolo: Somma, coniugato e inverso nel piano complesso
z: 1+3i
w: 4+i
modo: somma
modi: somma coniugato
raggio: 6
```

::: prova I punti $0$, $2 + i$ e $1 + 3i$ sono tre vertici di un parallelogramma. Qual è il quarto vertice, quello opposto all'origine?
È la somma. Parti reali: $2 + 1 = 3$. Parti immaginarie: $1 + 3 = 4$. Il quarto vertice è $3 + 4i$.
:::

::: prova Moltiplica $1 + i$ per $i$. Dove finisce il punto?
$i \cdot (1 + i) = i + i^2 = -1 + i$. Il punto stava 1 passo a destra e 1 in su. Ora sta 1 passo a sinistra e 1 in su: ha fatto un quarto di giro in senso antiorario.
:::

> [!RICORDA]
> - Nel piano complesso $a + bi$ è il punto $(a, b)$; la somma segue la regola del parallelogramma.
> - Il modulo di $z - w$ è la distanza tra i due punti. Moltiplicare per $i$ ruota di 90 gradi.

## Disegnare insiemi di numeri complessi (oltre le dispense)

Un tipo di esercizio chiede di disegnare tutti i complessi che rispettano una condizione. Per esempio $\{z \in \C \mid \operatorname{Re}(z) = 2\}$ sono «i complessi con parte reale 2». Le dispense lo chiedono nell'esercizio 2.6, qui l'esercizio 9, senza spiegare il metodo: si traduce la condizione in una proprietà del punto e si riconosce la figura.

> [!METODO] Da una condizione a un disegno
> 1. Scrivi $z = x + yi$, dove $x$ e $y$ sono due numeri reali: le coordinate del punto.
> 2. Riscrivi i pezzi della condizione con $x$ e $y$, usando la tabella qui sotto.
> 3. Se la condizione è un'uguaglianza tra numeri complessi, spezzala in due: parti reali uguali, parti immaginarie uguali.
> 4. Riconosci la figura: retta, semipiano, circonferenza, disco.
>
> | Scrittura | Con $x$ e $y$ |
> |---|---|
> | $\operatorname{Re}(z)$ | $x$ |
> | $\operatorname{Im}(z)$ | $y$ |
> | $\bar z$ | $x - yi$ |
> | $\lvert z \rvert$ | $\sqrt{x^2 + y^2}$ |
> | $\lvert z - c \rvert$ | la distanza del punto $z$ dal punto $c$ |

| Condizione | Con $x$ e $y$ | Figura |
|---|---|---|
| $\operatorname{Re}(z) = 2$ | $x = 2$ | retta verticale |
| $\operatorname{Im}(z) > 1$ | $y > 1$ | semipiano sopra la retta $y = 1$, retta esclusa |
| $\lvert z \rvert = 3$ | $x^2 + y^2 = 9$ | circonferenza di centro $0$ e raggio $3$ |
| $\lvert z - i \rvert \le 1$ | $x^2 + (y - 1)^2 \le 1$ | disco di centro $i$ e raggio $1$, bordo compreso |
| $\lvert z - 1 \rvert = \lvert z + 1 \rvert$ | $x = 0$ | l'asse immaginario |

L'ultima riga dice che i punti equidistanti da 1 e da $-1$ sono quelli dell'asse immaginario. Con i conti:

1. La prima differenza è $z - 1 = (x - 1) + yi$. Il quadrato del suo modulo è $(x - 1)^2 + y^2$.
2. La seconda è $z + 1 = (x + 1) + yi$. Il quadrato del suo modulo è $(x + 1)^2 + y^2$.
3. Due moduli sono uguali quando sono uguali i loro quadrati:
   $$(x - 1)^2 + y^2 = (x + 1)^2 + y^2.$$
4. Svolgendo, $x^2 - 2x + 1 = x^2 + 2x + 1$, cioè $-4x = 0$: quindi $x = 0$.

```grafico
titolo: Il disco $\lvert z - (1 + i) \rvert \le 2$: tutti i punti a distanza al più $2$ dal centro $1 + i$
x: -2 4
y: -2 4
nomi: $\operatorname{Re}$ $\operatorname{Im}$
poligono: 3 1 2.932 1.518 2.732 2 2.414 2.414 2 2.732 1.518 2.932 1 3 0.482 2.932 0 2.732 -0.414 2.414 -0.732 2 -0.932 1.518 -1 1 -0.932 0.482 -0.732 0 -0.414 -0.414 0 -0.732 0.482 -0.932 1 -1 1.518 -0.932 2 -0.732 2.414 -0.414 2.732 0 2.932 0.482 | blu
punto: 1 1 | blu | $1 + i$ | so
segmento: 1 1 3 1 | accento | $2$ | n
```

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli questa lezione corrisponde al §1.4, alle pp. 25–27: parti 1.4.1 «Definizione», 1.4.2 «Coniugio, norma e inverso» e 1.4.3 «Il piano complesso». L'Esempio 1.4.1 del libro è il 2.3 delle dispense. L'Esercizio 1.4.3 (p. 30) elenca le proprietà del modulo e del coniugato, tra cui quelle dell'esercizio 2.5 delle dispense. Il §1.5.3 (p. 36) spiega i campi in generale.

::: prova Che figura formano i numeri complessi con $|z| = 2$?
Sono i punti a distanza 2 dall'origine: la circonferenza di centro $0$ e raggio 2.
:::

::: prova Che figura formano i numeri complessi con $|z - 3| < 1$?
$|z - 3|$ è la distanza dal punto 3. Vanno bene i punti a distanza **minore** di 1: il disco di centro 3 e raggio 1, senza il bordo.
:::

> [!RICORDA]
> - Parte reale fissata: retta verticale. Parte immaginaria fissata: retta orizzontale.
> - $|z - c| = r$ è la circonferenza di centro $c$ e raggio $r$; con il minore o uguale, il disco.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $i$ | «i» | l'unità immaginaria, con il quadrato uguale a $-1$ | $i \cdot i = -1$ |
| $a + bi$ | «a più b i» | un numero complesso | $3 + 2i$ |
| $\C$ | «ci» | l'insieme dei numeri complessi | $3 + 2i \in \C$ |
| $\K$ | «kappa» | un campo: nel corso, $\R$ oppure $\C$ | |
| $z$, $w$, $z_1$ | «zeta», «vu doppia», «zeta uno» | nomi di numeri complessi | $z = 3 + 2i$ |
| $\iff$ | «se e solo se» | le due frasi sono vere insieme o false insieme | $z \in \R \iff z = \bar z$ |
| $\operatorname{Re}(z)$, $\operatorname{Im}(z)$ | «parte reale», «parte immaginaria di zeta» | i due numeri reali che formano $z$ | $\operatorname{Im}(3 + 4i) = 4$ |
| $\bar z$ | «zeta coniugato» | $z$ con il segno cambiato davanti alla $i$ | $\overline{3 + 4i} = 3 - 4i$ |
| $\lvert z \rvert$ | «modulo di zeta» | la distanza del punto dall'origine | $\lvert 3 + 4i \rvert = 5$ |
| $\lvert z - w \rvert$ | «modulo di zeta meno vu doppia» | la distanza tra $z$ e $w$ | $\lvert (4 + 5i) - (1 + i) \rvert = 5$ |
| $z^{-1}$, $\frac 1z$ | «zeta alla meno uno», «uno su zeta» | l'inverso: moltiplicato per $z$ dà 1 | $(2 + i)^{-1} = \frac{2 - i}5$ |
| $\{z \in \C \mid \dots\}$ | «i complessi zeta per cui…» | i complessi che rispettano la condizione | $\{z \in \C \mid \lvert z \rvert = 3\}$ |

## Verso l'esame

La prova di Algebra lineare è la stessa nei tre canali: 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; 2 ore, niente calcolatrice, 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01/2027 e il 05/02/2027 alle 14:00; le regole complete sono nella lezione L01.

**I numeri complessi negli appelli.** In **ognuno** dei 15 appelli dal 24/01/2024 al 07/09/2026 c'è almeno una domanda del quiz sui numeri complessi o sulle radici di un polinomio. In 11 appelli su 15 è la domanda 1. Le domande si dividono così tra le lezioni L02, L03 e L04.

| Tipo di domanda | Appelli (numero della domanda) | Lezione |
|---|---|---|
| trovare $z$ da un'equazione di primo grado, poi calcolare un'espressione | 08/02/2024 (1), 03/06/2025 (1), 03/06/2026 (1) | L02 |
| potenze alte, prodotto in forma polare, radici $n$-esime | 24/01/2024 (2), 10/06/2024 (1), 10/07/2024 (1), 06/09/2024 (1), 16/01/2025 (1), 07/02/2025 (1), 02/09/2025 (2), 15/01/2026 (5), 05/02/2026 (1) | L03 |
| quale numero è radice di un polinomio | 10/07/2025 (1), 03/07/2026 (7), 07/09/2026 (1) | L04 |

Anche le domande delle lezioni L03 e L04 finiscono quasi sempre con i conti di questa lezione: un prodotto, un inverso, una divisione.

> [!METODO] Le domande «trova $z$» in cinque passi
> 1. Svolgi i prodotti tra numeri noti. L'equazione deve diventare «un numero per $z$, uguale a un altro numero».
> 2. Dividi il numero a destra per il numero che moltiplica $z$. Per farlo, moltiplica sopra e sotto per il coniugato del numero sotto.
> 3. Controlla: il numero che moltiplicava $z$, per il valore trovato, deve dare il numero a destra.
> 4. Calcola quello che la domanda chiede: una somma, un prodotto, un inverso.
> 5. Prima di scegliere, riscrivi le cinque risposte con la parte reale e la parte immaginaria in vista.
>
> Nel quiz c'è anche una scorciatoia: **sostituire** le risposte nell'equazione. Con un prodotto per risposta scopri quella giusta.

### Una domanda vera, letta insieme

**Appello del 03/06/2025, domanda 1.** Il testo: «Dato $z \in \C$ che soddisfa $(1 + i)z = 3 + 2i$, allora $2z(5 + i)$ è uguale a:». Le cinque risposte sono $13 + 13i$, $26i$, $1 + i$, $13 - 13i$ e $26$.

**In pratica chiede:** trovare $z$ dall'equazione, con una divisione, e poi calcolare il prodotto $2z(5 + i)$.

**Primo tempo: trovare $z$.** Si divide: $z = \frac{3 + 2i}{1 + i}$.

1. Il coniugato del numero sotto è $1 - i$; sotto viene $1^2 + 1^2 = 2$.
2. Sopra: $(3 + 2i)(1 - i)$. I quattro prodotti sono $3$, $-3i$, $2i$ e $-2i^2 = +2$, in tutto $5 - i$.
3. Quindi $z = \frac{5 - i}2$.

**Secondo tempo: l'espressione richiesta.** $2z = 5 - i$, e $(5 - i)(5 + i)$ è un numero per il suo coniugato: $5^2 + 1^2 = 26$.

**La risposta è $26$.** Controllo del primo tempo: $(1 + i)(5 - i) = 5 - i + 5i + 1 = 6 + 4i$, che diviso 2 dà $3 + 2i$.

**La risposta sbagliata più tentatrice è $26i$.** Viene fuori se nel primo tempo moltiplichi il numero sopra per $1 + i$, invece che per il coniugato $1 - i$. Sopra verrebbe $1 + 5i$, e alla fine $(1 + 5i)(5 + i) = 26i$.

### Le altre due domande dello stesso tipo

> [!ESEMPIO] · Appello del 08/02/2024, domanda 1
> **Il testo:** «Trovare il numero $z \in \C$ tale che $(i - 1)(i - 2)z = (i + 1)(i + 2)(i + 3)$». Le risposte: $10 + 3i$; $i - 3$; $30 + 10i$; $3i - 1$; $1 - 30i$.
>
> **A sinistra.** $(i - 1)(i - 2)$: i quattro prodotti sono $i^2$, $-2i$, $-i$ e $2$. Con $-1$ al posto di $i^2$ viene $-1 - 3i + 2$, cioè $1 - 3i$.
>
> **A destra, in due tempi.**
>
> 1. $(i + 1)(i + 2)$: i quattro prodotti sono $i^2$, $2i$, $i$ e $2$. In tutto $-1 + 3i + 2$, cioè $1 + 3i$.
> 2. $(1 + 3i)(i + 3)$: i quattro prodotti sono $i$, $3$, $3i^2 = -3$ e $9i$. I pezzi senza la $i$ fanno $3 - 3 = 0$. I pezzi con la $i$ fanno $i + 9i = 10i$.
>
> **L'equazione è diventata** $(1 - 3i)z = 10i$. Si divide:
> $$z = \frac{10i}{1 - 3i}.$$
>
> 1. Il coniugato del numero sotto è $1 + 3i$.
> 2. Sotto viene il quadrato del modulo: $1^2 + 3^2 = 10$.
> 3. Sopra: $10i \cdot (1 + 3i) = 10i + 30i^2$, cioè $-30 + 10i$.
> 4. Dividi per 10 tutti e due i pezzi: $z = -3 + i$.
>
> È la risposta $i - 3$: gli stessi due pezzi, scritti nell'altro ordine.
>
> **Controllo.** $(1 - 3i)(-3 + i)$: i quattro prodotti sono $-3$, $i$, $9i$ e $-3i^2 = 3$. In tutto $10i$. Giusto.

> [!ESEMPIO] · Appello del 03/06/2026, domanda 1
> **Il testo:** «Se $(1 + i)z = 2i$ allora $\frac 1{z + i}$ è uguale a». Le risposte: $0$; $\frac 1{1 + i}$; $\frac{1 - 2i}5$; $\frac i{1 + i}$; $\frac{2 + i}5$.
>
> **Trovare $z$.** Si divide: $z = \frac{2i}{1 + i}$.
>
> 1. Il coniugato del numero sotto è $1 - i$. Sotto viene $1^2 + 1^2 = 2$.
> 2. Sopra: $2i \cdot (1 - i) = 2i - 2i^2$, cioè $2 + 2i$.
> 3. Dividi per 2 tutti e due i pezzi: $z = 1 + i$.
>
> **Sommare $i$.** $z + i = 1 + i + i = 1 + 2i$.
>
> **L'inverso.** Il coniugato di $1 + 2i$ è $1 - 2i$. Il quadrato del modulo è $1^2 + 2^2 = 5$. Quindi
> $$\frac 1{1 + 2i} = \frac{1 - 2i}5.$$
>
> **La risposta è $\frac{1 - 2i}5$.**
>
> **Attenzione alle risposte scritte come frazioni.** Due risposte hanno ancora la $i$ sotto. Per confrontarle, portale alla forma solita: $\frac 1{1 + i} = \frac{1 - i}2$ e $\frac i{1 + i} = \frac{1 + i}2$. Sono numeri diversi da quello giusto.

### Gli errori da evitare

- Dimenticare che $i^2$ vale $-1$: quel pezzo cambia segno.
- Moltiplicare per il coniugato del numero **sopra**, invece che di quello sotto.
- Confondere il quadrato del modulo con il quadrato del numero.
- Dividere «pezzo per pezzo» quando sotto c'è un numero che non è reale.
- Scrivere «maggiore» o «minore» tra due numeri complessi.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione bastano poche righe.
>
> | Che cosa | La riga da scrivere |
> |---|---|
> | la regola della $i$ | $i^2 = -1$; le potenze si ripetono ogni 4: $i$, $-1$, $-i$, $1$ |
> | il prodotto | $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$ |
> | coniugato e modulo | $\bar z = a - bi$; $\lvert z \rvert = \sqrt{a^2 + b^2}$; $z \bar z = \lvert z \rvert^2$ |
> | l'inverso | $z^{-1} = \frac{\bar z}{\lvert z \rvert^2}$ |
> | la divisione | sopra e sotto per il coniugato del numero sotto |
> | la distanza | $\lvert z - c \rvert$ è la distanza tra $z$ e $c$ |

## Quiz

```quiz
D: Appello del 03/06/2025, domanda 1. Dato $z \in \C$ che soddisfa $(1 + i)z = 3 + 2i$, allora $2z(5 + i)$ è uguale a:
- $13 + 13i$
- $26i$
- $1 + i$
- $13 - 13i$
+ $26$
= $z = \frac{3 + 2i}{1 + i} = \frac{5 - i}2$, quindi $2z(5 + i) = (5 - i)(5 + i) = 26$, un numero per il suo coniugato. È la risposta (e) della soluzione ufficiale. La risposta più insidiosa è $26i$: viene moltiplicando sopra per $1 + i$ invece che per il coniugato $1 - i$.

D: Appello del 08/02/2024, domanda 1. Il numero $z \in \C$ con $(i - 1)(i - 2)z = (i + 1)(i + 2)(i + 3)$ è:
- $10 + 3i$
+ $i - 3$
- $30 + 10i$
- $3i - 1$
- $1 - 30i$
= A sinistra $(i - 1)(i - 2) = 1 - 3i$, a destra il prodotto vale $10i$. Quindi $z = \frac{10i}{1 - 3i} = \frac{10i(1 + 3i)}{10} = -3 + i$, cioè $i - 3$: la risposta (b) della soluzione ufficiale. La risposta più insidiosa è $3i - 1$, che scambia parte reale e parte immaginaria.

D: Appello del 03/06/2026, domanda 1. Se $(1 + i)z = 2i$, allora $\frac 1{z + i}$ è uguale a:
- $0$
- $\frac 1{1 + i}$
+ $\frac{1 - 2i}5$
- $\frac i{1 + i}$
- $\frac{2 + i}5$
= $z = \frac{2i}{1 + i} = 1 + i$, quindi $z + i = 1 + 2i$ e il suo inverso è $\frac{1 - 2i}{5}$: la risposta (c) della soluzione ufficiale. La risposta più insidiosa è $\frac 1{1 + i}$, che dimentica di sommare $i$; scritta nella forma solita vale $\frac{1 - i}2$.

D: Il numero $z \in \C$ tale che $(1 - i)z = 2 + 4i$ è:
+ $-1 + 3i$
- $3 + i$
- $-1 - 3i$
- $1 + 3i$
- $-2 + 4i$
= La domanda chiede quale numero complesso, moltiplicato per $1 - i$, dà $2 + 4i$. Si trova con una divisione: $z = \frac{2 + 4i}{1 - i}$. Moltiplica sopra e sotto per il coniugato del numero sotto, cioè $1 + i$. Sotto viene il quadrato del modulo: $1 + 1 = 2$. Sopra i quattro prodotti sono $2$, $2i$, $4i$ e $4i^2 = -4$: in tutto $-2 + 6i$. Dividi per 2 i due pezzi e ottieni $z = -1 + 3i$. Controllo: $(1 - i)(-1 + 3i) = -1 + 3i + i - 3i^2 = 2 + 4i$. La risposta più tentatrice è $3 + i$: viene se sopra moltiplichi per $1 - i$ invece che per il coniugato. Moltiplicata per $1 - i$ dà $4 - 2i$, non $2 + 4i$. È simile alla domanda 1 degli appelli del 08/02/2024 e del 03/06/2025.

D: Se $(1 + 2i)z = 5$, allora $\frac 1{z + i}$ è uguale a:
+ $\frac{1 + i}2$
- $\frac{1 - i}2$
- $1 + i$
- $\frac 12$
- $\frac{1 - 3i}{10}$
= La domanda ha due tempi: prima trovare $z$, poi calcolare l'inverso di $z + i$. Primo tempo: $z = \frac 5{1 + 2i}$. Moltiplica sopra e sotto per il coniugato $1 - 2i$: sotto viene $1 + 4 = 5$, sopra viene $5 \cdot (1 - 2i)$. Il 5 si semplifica e resta $z = 1 - 2i$. Secondo tempo: $z + i = 1 - 2i + i = 1 - i$. Il suo inverso è il coniugato diviso per il quadrato del modulo: $\frac{1 + i}{1 + 1} = \frac{1 + i}2$. La risposta più tentatrice è $\frac{1 - 3i}{10}$: è l'inverso di $1 + 3i$, e viene se sbagli il segno e scrivi $z = 1 + 2i$. È simile alla domanda 1 dell'appello del 03/06/2026.

D: Quanto vale $(2 + 3i)(1 - 2i)$?
+ $8 - i$
- $-4 - i$
- $2 - 6i$
- $8 + i$
- $8 - 7i$
= Si chiede un prodotto: quattro prodotti, poi $-1$ al posto di $i^2$. I quattro prodotti sono $2$, $-4i$, $3i$ e $-6i^2$. L'ultimo vale $+6$. Pezzi senza la $i$: $2 + 6 = 8$. Pezzi con la $i$: $-4i + 3i = -i$. Il risultato è $8 - i$. La risposta $-4 - i$ viene se tratti $i^2$ come $+1$: allora l'ultimo pezzo vale $-6$. La risposta $2 - 6i$ viene se moltiplichi «pezzo per pezzo», senza i due prodotti incrociati. Sono i conti con cui comincia la domanda 1 dell'appello del 08/02/2024, dove si dovevano svolgere prodotti come $(i - 1)(i - 2)$.

D: Quanto vale $i^{2026}$?
+ $-1$
- $1$
- $i$
- $-i$
- $2026\,i$
= Le potenze di $i$ si ripetono ogni quattro, quindi conta solo il resto della divisione dell'esponente per 4. La divisione è $2026 = 4 \cdot 506 + 2$: il resto è 2. Quindi $i^{2026} = i^2 = -1$. La risposta $1$ sarebbe giusta con il resto 0, per esempio per $i^{2024}$. La risposta $2026\,i$ confonde la potenza con una moltiplicazione. Lo stesso conto serviva nella domanda 1 dell'appello del 05/02/2026, per controllare che $i^{2026}$ e $(-i)^{2026}$ valgono $-1$.

D: Quale affermazione è vera per **ogni** $z \in \C$?
+ $z + \bar z$ è un numero reale.
- $z - \bar z$ è un numero reale.
- $z^2 = |z|^2$.
- $|z| = \operatorname{Re}(z) + \operatorname{Im}(z)$.
- $\bar z = -z$.
= «Per ogni $z \in \C$» vuol dire che la frase deve valere qualunque numero complesso tu scelga. Scrivi $z = a + bi$, quindi $\bar z = a - bi$. La somma $z + \bar z$ fa $2a$: le parti immaginarie si cancellano e resta un numero reale. Per scartare le altre basta un esempio in cui falliscono. Con $z = i$ la differenza $z - \bar z$ vale $2i$, che non è reale. Sempre con $z = i$, il quadrato è $-1$ mentre il quadrato del modulo è $1$. Con $z = 1 + i$ il modulo è $\sqrt 2$, non $1 + 1 = 2$. Con $z = 1$ il coniugato è $1$, non $-1$. La più tentatrice è la seconda: nella differenza si cancellano le parti reali, e resta un immaginario puro.

D: L'inverso di $3 - 4i$ è:
+ $\frac{3 + 4i}{25}$
- $\frac{3 + 4i}5$
- $\frac 13 - \frac 14 i$
- $-3 + 4i$
- $\frac{-3 + 4i}{25}$
= L'inverso è il coniugato diviso per il quadrato del modulo. Il coniugato di $3 - 4i$ è $3 + 4i$. Il quadrato del modulo è $3^2 + 4^2 = 25$. Quindi l'inverso è $\frac{3 + 4i}{25}$. Controllo: $(3 - 4i)(3 + 4i) = 25$, e 25 diviso 25 fa 1. La risposta più tentatrice è $\frac{3 + 4i}5$: lì si è diviso per il modulo, che è 5, invece che per il suo quadrato. Il prodotto con $3 - 4i$ darebbe 5 e non 1. La risposta $\frac 13 - \frac 14 i$ inverte i due pezzi separatamente: moltiplicata per $3 - 4i$ dà $-\frac{25}{12} i$. Un inverso da calcolare così c'era anche nella domanda 1 dell'appello del 10/06/2024.

D: Quale affermazione su $\C$ è vera?
+ $\C$ è un campo, ma non è ordinato.
- $\C$ non è un campo, perché $i$ non ha inverso.
- $\C$ è ordinato: per esempio $2i > i$.
- $\R$ non è contenuto in $\C$.
- Anche $0$ ha un inverso in $\C$.
= Si chiedono le due proprietà di $\C$ della sezione sulle regole dei conti. $\C$ è un campo, perché valgono le nove regole della Proposizione 2.2. Però non è ordinato. Se lo fosse, sarebbero positivi sia $1$, che è il quadrato di $1$, sia $-1$, che è il quadrato di $i$: impossibile. Le altre risposte sono false una per una. La $i$ ha un inverso, ed è $-i$. La scrittura $2i > i$ non ha senso. I numeri reali stanno dentro $\C$: sono i numeri con la parte immaginaria uguale a zero. Lo zero non ha inverso in nessun campo.

D: Qual è la parte immaginaria di $\frac{3 - i}{1 + i}$? Scrivi un numero.
N: -2
= Prima si fa la divisione, poi si legge la parte immaginaria. Moltiplica sopra e sotto per il coniugato del numero sotto, cioè $1 - i$. Sotto viene $1 + 1 = 2$. Sopra i quattro prodotti sono $3$, $-3i$, $-i$ e $i^2 = -1$: in tutto $2 - 4i$. Dividi per 2: il risultato è $1 - 2i$. La parte immaginaria è il numero reale $-2$, senza la $i$. La stessa divisione per $1 + i$ serviva nella domanda 1 dell'appello del 03/06/2025.

D: Nel piano complesso, l'insieme $\{z \in \C \mid |z - i| = 2\}$ è:
+ la circonferenza di centro $i$ e raggio $2$
- la circonferenza di centro $-i$ e raggio $2$
- la circonferenza di centro $i$ e raggio $4$
- il disco pieno di centro $i$ e raggio $2$
- la retta orizzontale $\operatorname{Im}(z) = 2$
= La scrittura $|z - i|$ è la distanza tra il punto $z$ e il punto $i$. La condizione chiede i punti a distanza esattamente 2 da $i$: formano la circonferenza di centro $i$ e raggio 2. Con le coordinate, cioè con $z = x + yi$, la condizione diventa $x^2 + (y - 1)^2 = 4$. Il centro è $i$ e non $-i$, perché dentro il modulo c'è una sottrazione. Il raggio è 2 e non 4: il 4 compare solo dopo aver elevato al quadrato. Il disco pieno sarebbe $|z - i| \le 2$.

D: Nel piano complesso, $0$, $z = 1 + 3i$ e $w = 4 + i$ sono tre vertici di un parallelogramma. Il quarto vertice, opposto a $0$, è:
+ $5 + 4i$
- $3 - 2i$
- $-3 + 2i$
- $1 + 13i$
- $5 + 3i$
= Per la regola del parallelogramma il quarto vertice, quello opposto all'origine, è la somma degli altri due. Parti reali: $1 + 4 = 5$. Parti immaginarie: $3 + 1 = 4$. Il vertice è $5 + 4i$: è la Figura 2 delle dispense. Le risposte $3 - 2i$ e $-3 + 2i$ sono le due differenze, $w - z$ e $z - w$. La risposta $1 + 13i$ è il prodotto $zw$, che con il parallelogramma non c'entra.
```

## Esercizi

::: esercizio base Riconoscere i pezzi di un numero complesso
Per ogni numero scrivi la parte reale, la parte immaginaria e il coniugato: (a) $2 + 5i$; (b) $4 - i$; (c) $-3i$; (d) $6$.
::: soluzione
La parte reale è il pezzo che sta da solo. La parte immaginaria è il numero che moltiplica la $i$, con il suo segno. Il coniugato si ottiene cambiando il segno davanti alla $i$.

| Numero | Parte reale | Parte immaginaria | Coniugato |
|---|--:|--:|---|
| $2 + 5i$ | $2$ | $5$ | $2 - 5i$ |
| $4 - i$ | $4$ | $-1$ | $4 + i$ |
| $-3i$ | $0$ | $-3$ | $3i$ |
| $6$ | $6$ | $0$ | $6$ |

Nella seconda riga la parte immaginaria è $-1$: la $i$ da sola vuol dire «1 per $i$», e davanti c'è il segno meno.

Nell'ultima riga il numero è reale, quindi coincide con il suo coniugato.
:::

::: esercizio base Potenze di $i$
Calcola: (a) $i^7$; (b) $i^{10}$; (c) $i^{33}$; (d) $i^{400}$.
::: soluzione
Si divide l'esponente per 4 e si guarda il resto. Resto 0 dà $1$, resto 1 dà $i$, resto 2 dà $-1$, resto 3 dà $-i$.

| Potenza | Divisione dell'esponente per 4 | Resto | Risultato |
|---|---|--:|--:|
| $i^7$ | $7 = 4 \cdot 1 + 3$ | $3$ | $-i$ |
| $i^{10}$ | $10 = 4 \cdot 2 + 2$ | $2$ | $-1$ |
| $i^{33}$ | $33 = 4 \cdot 8 + 1$ | $1$ | $i$ |
| $i^{400}$ | $400 = 4 \cdot 100 + 0$ | $0$ | $1$ |

Controllo della prima riga per l'altra strada: $i^7 = i^4 \cdot i^3 = 1 \cdot (-i) = -i$.
:::

::: esercizio base Moduli, e un prodotto con il coniugato
(a) Calcola $|6 + 8i|$. (b) Calcola $|2 - i|$. (c) Calcola $(6 + 8i)(6 - 8i)$ senza fare i quattro prodotti.
::: soluzione
Il modulo si calcola in quattro passi: quadrato della parte reale, quadrato della parte immaginaria, somma, radice.

(a) I due quadrati sono $6^2 = 36$ e $8^2 = 64$. La somma è $100$. La radice è $\sqrt{100} = 10$. Quindi $|6 + 8i| = 10$.

(b) I due quadrati sono $2^2 = 4$ e $(-1)^2 = 1$. La somma è $5$, che non è un quadrato perfetto. Quindi $|2 - i| = \sqrt 5$.

(c) I due numeri sono uno il coniugato dell'altro. Il loro prodotto è il quadrato del modulo, e dal punto (a) il modulo è 10. Quindi il prodotto è $10^2 = 100$.

Controllo del punto (c) con i quattro prodotti: $36 - 48i + 48i - 64i^2 = 36 + 64 = 100$.
:::

::: esercizio base Conti con la forma $a + bi$
Calcola e scrivi nella forma $a + bi$: (a) $(3 - 2i) + (-1 + 5i)$; (b) $(3 - 2i) - (-1 + 5i)$; (c) $(3 - 2i)(-1 + 5i)$; (d) $(1 - 2i)^2$; (e) $(2 + i)^3$ e $(2 - i)^3$ (sono i cubi della storia di Bombelli).
::: soluzione
(a) Parti reali: $3 + (-1) = 2$. Parti immaginarie: $-2 + 5 = 3$. Risultato: $2 + 3i$.

(b) Il segno meno cambia tutti e due i pezzi di $-1 + 5i$, che diventa $+1 - 5i$. Parti reali: $3 + 1 = 4$. Parti immaginarie: $-2 - 5 = -7$. Risultato: $4 - 7i$.

(c) I quattro prodotti:

| Quale prodotto | Conto | Risultato |
|---|---|--:|
| primo per primo | $3 \cdot (-1)$ | $-3$ |
| primo per secondo | $3 \cdot 5i$ | $15i$ |
| secondo per primo | $-2i \cdot (-1)$ | $2i$ |
| secondo per secondo | $-2i \cdot 5i$ | $-10i^2 = 10$ |

Pezzi senza la $i$: $-3 + 10 = 7$. Pezzi con la $i$: $15i + 2i = 17i$. Risultato: $7 + 17i$.

(d) Il quadrato è il numero per sé stesso: $(1 - 2i)(1 - 2i)$. I quattro prodotti sono $1$, $-2i$, $-2i$ e $4i^2 = -4$. Pezzi senza la $i$: $1 - 4 = -3$. Pezzi con la $i$: $-2i - 2i = -4i$. Risultato: $-3 - 4i$.

(e) Il cubo è il quadrato moltiplicato ancora una volta per il numero.

1. Prima il quadrato: $(2 + i)(2 + i)$. I quattro prodotti sono $4$, $2i$, $2i$ e $i^2 = -1$. In tutto $3 + 4i$.
2. Poi il cubo: $(3 + 4i)(2 + i)$. I quattro prodotti sono $6$, $3i$, $8i$ e $4i^2 = -4$. In tutto $2 + 11i$.

Quindi $(2 + i)^3 = 2 + 11i$. Rifaccio il conto per l'altro numero.

1. Il quadrato: $(2 - i)(2 - i)$. I quattro prodotti sono $4$, $-2i$, $-2i$ e $i^2 = -1$. In tutto $3 - 4i$.
2. Il cubo: $(3 - 4i)(2 - i)$. I quattro prodotti sono $6$, $-3i$, $-8i$ e $4i^2 = -4$. In tutto $2 - 11i$.

Quindi $(2 - i)^3 = 2 - 11i$.

I due numeri di partenza, sommati, danno $(2 + i) + (2 - i) = 4$. È la soluzione reale di $x^3 = 15x + 4$ trovata da Bombelli.
:::

::: esercizio base Inversi e quozienti
Scrivi nella forma $a + bi$: (a) $(1 + i)^{-1}$; (b) $(2 - 3i)^{-1}$; (c) $\frac{5 + 5i}{1 - 2i}$; (d) $\frac{i}{1 + i}$.
::: soluzione
L'inverso è il coniugato diviso per il quadrato del modulo. Per dividere si moltiplicano sopra e sotto per il coniugato del numero sotto.

(a) Il coniugato di $1 + i$ è $1 - i$. Il quadrato del modulo è $1 + 1 = 2$. L'inverso è $\frac{1 - i}2 = \frac 12 - \frac 12 i$.

Controllo: $(1 + i)(1 - i) = 2$, e 2 diviso 2 fa 1.

(b) Il coniugato di $2 - 3i$ è $2 + 3i$. Il quadrato del modulo è $4 + 9 = 13$. L'inverso è $\frac{2 + 3i}{13} = \frac 2{13} + \frac 3{13} i$.

Controllo: $(2 - 3i)(2 + 3i) = 13$, e 13 diviso 13 fa 1.

(c) Il numero sotto è $1 - 2i$, e il suo coniugato è $1 + 2i$.

1. Sotto: il quadrato del modulo, $1 + 4 = 5$.
2. Sopra: $(5 + 5i)(1 + 2i)$. I quattro prodotti sono $5$, $10i$, $5i$ e $10i^2 = -10$. In tutto $-5 + 15i$.
3. Divido per 5 tutti e due i pezzi: $-1 + 3i$.

Controllo: $(-1 + 3i)(1 - 2i) = -1 + 2i + 3i - 6i^2 = 5 + 5i$. È il numero che stava sopra.

(d) Il numero sotto è $1 + i$, e il suo coniugato è $1 - i$.

1. Sotto: $1 + 1 = 2$.
2. Sopra: $i \cdot (1 - i) = i - i^2 = 1 + i$.
3. Risultato: $\frac{1 + i}2 = \frac 12 + \frac 12 i$.

Controllo: $\frac{1 + i}2 \cdot (1 + i) = \frac{2i}2 = i$. È il numero che stava sopra.
:::

::: esercizio medio Esercizio 2.4 delle dispense: parte reale e parte immaginaria
Calcola la parte reale e la parte immaginaria dei seguenti numeri complessi:
$$\frac{6 + 5i}{3 - i}, \qquad \frac{(2 + i)^3}{5i^{15}}, \qquad \frac{3 - 2i}{1 + 5i} + \frac{2 - 3i}{2 - i}.$$
::: soluzione
In tutti e tre i casi bisogna arrivare alla forma con le due parti in vista. Poi le due parti si leggono.

**Primo numero.**

1. Il numero sotto è $3 - i$. Il suo coniugato è $3 + i$.
2. Sotto viene il quadrato del modulo: $9 + 1 = 10$.
3. Sopra: $(6 + 5i)(3 + i)$. I quattro prodotti sono $18$, $6i$, $15i$ e $5i^2 = -5$. In tutto $13 + 21i$.
4. Il numero è $\frac{13 + 21i}{10}$.

La parte reale è $\frac{13}{10}$. La parte immaginaria è $\frac{21}{10}$.

**Secondo numero.**

1. Sopra c'è $(2 + i)^3$, che vale $2 + 11i$: è il conto dell'esercizio 4.
2. Sotto c'è una potenza di $i$. La divisione è $15 = 4 \cdot 3 + 3$, resto 3. Quindi $i^{15} = i^3 = -i$, e sotto c'è $-5i$.
3. La frazione è $\frac{2 + 11i}{-5i}$. Sotto c'è un immaginario puro: per farlo diventare reale basta moltiplicare sopra e sotto per $i$.
4. Sotto: $-5i \cdot i = -5i^2 = 5$.
5. Sopra: $(2 + 11i) \cdot i = 2i + 11i^2 = -11 + 2i$.
6. Il numero è $\frac{-11 + 2i}5$.

La parte reale è $-\frac{11}5$. La parte immaginaria è $\frac 25$.

**Terzo numero.** Sono due divisioni, e poi una somma.

La prima frazione:

1. Il coniugato del numero sotto è $1 - 5i$. Sotto viene $1 + 25 = 26$.
2. Sopra: $(3 - 2i)(1 - 5i)$. I quattro prodotti sono $3$, $-15i$, $-2i$ e $10i^2 = -10$. In tutto $-7 - 17i$.
3. La prima frazione vale $\frac{-7 - 17i}{26}$.

La seconda frazione:

1. Il coniugato del numero sotto è $2 + i$. Sotto viene $4 + 1 = 5$.
2. Sopra: $(2 - 3i)(2 + i)$. I quattro prodotti sono $4$, $2i$, $-6i$ e $-3i^2 = 3$. In tutto $7 - 4i$.
3. La seconda frazione vale $\frac{7 - 4i}5$.

La somma. Per sommare due frazioni servono due numeri sotto uguali. Uso $26 \cdot 5 = 130$.

1. Nella prima frazione moltiplico sopra e sotto per 5: viene $\frac{-35 - 85i}{130}$.
2. Nella seconda moltiplico sopra e sotto per 26: viene $\frac{182 - 104i}{130}$.
3. Sommo i numeri sopra. Parti reali: $-35 + 182 = 147$. Parti immaginarie: $-85 - 104 = -189$.
4. La somma è $\frac{147 - 189i}{130}$.

La parte reale è $\frac{147}{130}$. La parte immaginaria è $-\frac{189}{130}$.

Le due frazioni non si semplificano. Infatti $147 = 3 \cdot 7 \cdot 7$, $189 = 3 \cdot 3 \cdot 3 \cdot 7$ e $130 = 2 \cdot 5 \cdot 13$: sopra e sotto non hanno fattori in comune.
:::

::: esercizio medio Un'equazione con il coniugato
Trova tutti i $z \in \C$ tali che $z + 2\bar z = 3 - i$.
::: soluzione
Qui non si può dividere per il numero che moltiplica $z$, perché nell'equazione compaiono sia $z$ sia il suo coniugato. Si usano le coordinate.

1. Scrivo $z = x + yi$, con $x$ e $y$ reali. Allora $\bar z = x - yi$.
2. Calcolo il lato sinistro. Il doppio del coniugato è $2x - 2yi$. Sommo: parti reali $x + 2x = 3x$, parti immaginarie $y - 2y = -y$. Il lato sinistro è $3x - yi$.
3. L'equazione è diventata $3x - yi = 3 - i$. Due numeri complessi sono uguali quando hanno uguali tutte e due le parti.
4. Parti reali: $3x = 3$, quindi $x = 1$.
5. Parti immaginarie: $-y = -1$, quindi $y = 1$.

La soluzione è $z = 1 + i$, ed è l'unica.

Controllo: $(1 + i) + 2(1 - i) = 1 + i + 2 - 2i = 3 - i$.
:::

::: esercizio medio Esercizio 2.5 delle dispense: proprietà di modulo e coniugato
Dimostra che per ogni $z, w \in \C$ valgono:
$$|\bar z| = |z|, \qquad |z^{-1}| = \frac 1{|z|} \ (z \neq 0), \qquad \overline{z + w} = \bar z + \bar w, \qquad \overline{zw} = \bar z\,\bar w.$$
::: soluzione
«Dimostra» vuol dire: fai vedere che l'uguaglianza vale per tutti i numeri complessi, non solo in un esempio. Per questo si lavora con le lettere. Scrivo $z = a + bi$ e $w = c + di$, dove $a$, $b$, $c$, $d$ sono numeri reali.

**1. Il modulo del coniugato è uguale al modulo.**

1. Il coniugato è $a - bi$: ha parte reale $a$ e parte immaginaria $-b$.
2. Il suo modulo è $\sqrt{a^2 + (-b)^2}$.
3. Il quadrato di $-b$ è uguale al quadrato di $b$, perché meno per meno fa più.
4. Quindi il modulo del coniugato è $\sqrt{a^2 + b^2}$, cioè il modulo di $z$.

Nel piano: un punto e il suo riflesso rispetto all'asse reale hanno la stessa distanza dall'origine. Con i numeri: $3 + 4i$ e $3 - 4i$ hanno tutti e due modulo 5.

**2. Il modulo dell'inverso è 1 diviso il modulo.** Chiamo $m$ il numero $a^2 + b^2$, cioè il quadrato del modulo di $z$. È positivo, perché $z$ non è zero.

1. L'inverso di $z$ è $\frac am - \frac bm i$: ha parte reale $\frac am$ e parte immaginaria $-\frac bm$.
2. La somma dei due quadrati è
   $$\frac{a^2}{m^2} + \frac{b^2}{m^2} = \frac{a^2 + b^2}{m^2} = \frac{m}{m^2} = \frac 1m.$$
3. Il modulo dell'inverso è la radice di questa somma: $\sqrt{\frac 1m} = \frac 1{\sqrt m}$.
4. Ma $\sqrt m$ è il modulo di $z$. Quindi il modulo dell'inverso è $\frac 1{|z|}$.

Con i numeri: $3 + 4i$ ha modulo 5. Il suo inverso è $\frac{3 - 4i}{25}$, che ha modulo $\frac 5{25} = \frac 15$.

**3. Il coniugato di una somma è la somma dei coniugati.**

1. La somma è $z + w = (a + c) + (b + d)i$.
2. Il suo coniugato è $(a + c) - (b + d)i$.
3. La somma dei coniugati è $(a - bi) + (c - di)$. Parti reali: $a + c$. Parti immaginarie: $-b - d$, cioè $-(b + d)$.

I due risultati sono lo stesso numero.

**4. Il coniugato di un prodotto è il prodotto dei coniugati.**

1. Per la formula del prodotto, $zw = (ac - bd) + (ad + bc)i$.
2. Il suo coniugato è $(ac - bd) - (ad + bc)i$.
3. Il prodotto dei coniugati è $(a - bi)(c - di)$. I quattro prodotti sono $ac$, $-adi$, $-bci$ e $bd\,i^2 = -bd$.
4. Pezzi senza la $i$: $ac - bd$. Pezzi con la $i$: $-adi - bci$, cioè $-(ad + bc)i$.

I due risultati sono lo stesso numero.

In parole: si può coniugare prima o dopo aver fatto i conti. Questa regola servirà nella lezione L04, per la Proposizione 4.11.
:::

::: esercizio medio Esercizio 2.6 delle dispense: tre insiemi da disegnare
Disegna nel piano complesso i seguenti sottoinsiemi:
1. $A = \{z \in \C \text{ tali che } \operatorname{Re}(z) > \operatorname{Im}(z)\}$;
2. $B = \{z \in \C \text{ tali che } z + \bar z = i\}$;
3. $C = \{z \in \C \text{ tali che } |z - 2| \ge 2\}$.
::: soluzione
Scrivo sempre $z = x + yi$, con $x$ e $y$ reali: $x$ è la parte reale, $y$ è la parte immaginaria.

**1. L'insieme $A$.**

1. La condizione dice che la parte reale è maggiore della parte immaginaria: $x > y$.
2. Prima cerco i punti con $x = y$, cioè con parte reale uguale alla parte immaginaria. Per esempio $1 + i$, $2 + 2i$, $-1 - i$. Formano una retta obliqua che passa per l'origine. Si chiama **bisettrice**, perché taglia a metà l'angolo tra i due assi.
3. I punti con $x > y$ stanno tutti da una stessa parte della bisettrice. Per capire quale, provo con un punto: $z = 1$ ha $x = 1$ e $y = 0$, e $1 > 0$. Il punto 1 sta sotto la bisettrice.
4. Quindi $A$ è il semipiano **sotto** la bisettrice.
5. La bisettrice è esclusa, perché lì vale $x = y$ e non $x > y$. Nel disegno è tratteggiata.

```grafico
titolo: $A = \{\operatorname{Re}(z) > \operatorname{Im}(z)\}$: il semipiano sotto la bisettrice, bisettrice esclusa (tratteggiata)
x: -4 4
y: -4 4
nomi: $\operatorname{Re}$ $\operatorname{Im}$
poligono: -6 -6 6 -6 6 6 | blu | tratteggio
punto: 1 0 | accento | $1$ | s
testo: 2 -1.8 | blu | $A$
```

**2. L'insieme $B$.**

1. Calcolo il lato sinistro: $z + \bar z = (x + yi) + (x - yi) = 2x$. È un numero **reale**.
2. Il lato destro è $i$, che ha parte reale 0 e parte immaginaria 1.
3. Confronto le parti immaginarie: a sinistra è 0, a destra è 1. Dovrebbe valere $0 = 1$, che è impossibile.

Nessun numero complesso rispetta la condizione. Quindi $B$ è l'insieme vuoto, che si scrive $\emptyset$: non c'è niente da disegnare.

Se la condizione fosse stata $z - \bar z = i$, il lato sinistro sarebbe $2yi$. Verrebbe $2y = 1$, cioè $y = \frac 12$: una retta orizzontale.

Conviene sempre accorgersi quando una condizione è impossibile. «L'insieme è vuoto» è una risposta completa, se spieghi il motivo come qui sopra.

**3. L'insieme $C$.**

1. $|z - 2|$ è la distanza tra il punto $z$ e il punto 2, che sta sull'asse reale.
2. Il simbolo $\ge$ si legge «maggiore o uguale». La condizione chiede una distanza di **almeno** 2.
3. I punti a distanza esattamente 2 dal punto 2 formano la circonferenza di centro 2 e raggio 2.
4. I punti a distanza maggiore di 2 sono quelli **fuori** da questa circonferenza.
5. Quindi $C$ è tutto il piano tranne l'interno del cerchio. La circonferenza fa parte di $C$.

Con le coordinate la condizione è $(x - 2)^2 + y^2 \ge 4$.

Controllo con un punto: per l'origine la distanza è $|0 - 2| = 2$. L'origine sta sulla circonferenza, quindi appartiene a $C$.

```grafico
titolo: $C = \{\lvert z - 2 \rvert \ge 2\}$: tutto il piano tranne l'interno del cerchio; la circonferenza fa parte di $C$
x: -3 7
y: -4 4
nomi: $\operatorname{Re}$ $\operatorname{Im}$
poligono: 9 0 9 6 -5 6 -5 -6 9 -6 9 0 4 0 3.732 -1 3 -1.732 2 -2 1 -1.732 0.268 -1 0 0 0.268 1 1 1.732 2 2 3 1.732 3.732 1 4 0 | viola | sottile
cerchio: 2 0 2 | viola | spesso
punto: 2 0 | grigio | vuoto | $2$ | s
punto: 0 0 | viola | $0 \in C$ | no
testo: 5.5 2.8 | viola | $C$
```
:::

::: esercizio medio Altri due insiemi
Disegna: (a) $D = \{z \in \C \mid \operatorname{Im}(\bar z + 2i) > 0\}$; (b) $E = \{z \in \C \mid |z| = |z - 2i|\}$.
::: soluzione
Scrivo $z = x + yi$, con $x$ e $y$ reali.

**(a) L'insieme $D$.**

1. Il coniugato è $\bar z = x - yi$.
2. Sommo $2i$: viene $x - yi + 2i$, cioè $x + (2 - y)i$.
3. La parte immaginaria di questo numero è $2 - y$.
4. La condizione è $2 - y > 0$, cioè $y < 2$.

Quindi $D$ è il semipiano **sotto** la retta orizzontale di altezza 2. La retta è esclusa.

Attenzione al coniugato: cambia il segno di $y$. Per questo il semipiano sta sotto la retta e non sopra.

Controllo con un punto: per $z = 0$ viene $\bar z + 2i = 2i$, che ha parte immaginaria 2. E 2 è maggiore di 0. Infatti l'origine sta sotto la retta.

**(b) L'insieme $E$.**

$|z|$ è la distanza dall'origine. $|z - 2i|$ è la distanza dal punto $2i$. Si cercano i punti che distano ugualmente dai due. Stanno a metà strada: sulla retta orizzontale di altezza 1.

Lo stesso risultato con i conti.

1. I due moduli sono uguali quando sono uguali i loro quadrati: $x^2 + y^2 = x^2 + (y - 2)^2$.
2. Svolgo il quadrato a destra: $(y - 2)(y - 2)$ dà $y^2 - 2y - 2y + 4$, cioè $y^2 - 4y + 4$.
3. L'uguaglianza diventa $x^2 + y^2 = x^2 + y^2 - 4y + 4$.
4. Tolgo da tutti e due i lati $x^2$ e $y^2$. Resta $0 = -4y + 4$.
5. Quindi $4y = 4$, cioè $y = 1$.

L'insieme $E$ è la retta orizzontale dei punti con parte immaginaria uguale a 1.

Controllo con un punto: $z = i$ sta su questa retta. Dista 1 dall'origine. E dista 1 anche da $2i$, perché $i - 2i = -i$, che ha modulo 1.
:::

::: esercizio esame Come all'esame: trova $z$
Trovare il numero $z \in \C$ tale che $(1 + i)(2 - i)\,z = (3 + i)(1 - i)$. Risposte possibili: (a) $1 - i$; (b) $1 + i$; (c) $2 - i$; (d) $-1 + i$; (e) $10 - 10i$.
::: soluzione
In pratica la domanda chiede: trova il numero complesso $z$ che rende vera l'uguaglianza. Prima si svolgono i prodotti, poi si divide.

1. **Il prodotto a sinistra.** $(1 + i)(2 - i)$: i quattro prodotti sono $2$, $-i$, $2i$ e $-i^2 = 1$. In tutto $3 + i$.
2. **Il prodotto a destra.** $(3 + i)(1 - i)$: i quattro prodotti sono $3$, $-3i$, $i$ e $-i^2 = 1$. In tutto $4 - 2i$.
3. **L'equazione è diventata** $(3 + i)z = 4 - 2i$. Divido:
   $$z = \frac{4 - 2i}{3 + i}.$$
4. Il coniugato del numero sotto è $3 - i$. Sotto viene il quadrato del modulo: $9 + 1 = 10$.
5. Sopra: $(4 - 2i)(3 - i)$. I quattro prodotti sono $12$, $-4i$, $-6i$ e $2i^2 = -2$. In tutto $10 - 10i$.
6. Divido per 10 tutti e due i pezzi: $z = 1 - i$.

La risposta è la (a).

**Controllo.** $(3 + i)(1 - i) = 3 - 3i + i - i^2 = 4 - 2i$. È il numero a destra dell'equazione.

**Una strada alternativa per il quiz.** Moltiplica ogni risposta per $3 + i$ e guarda quale dà $4 - 2i$. La (b) dà $2 + 4i$, la (c) dà $7 - i$, la (d) dà $-4 + 2i$, la (e) dà $40 - 20i$. Solo la (a) funziona.

La (e) è la trappola per chi dimentica di dividere per 10 al passo 6.
:::

::: esercizio esame Come all'esame: prima $z$, poi un'espressione
Se $(2 - i)z = 5i$, allora $z\bar z + z$ vale: (a) $4 + 2i$; (b) $6 + 2i$; (c) $-4 - 2i$; (d) $5$; (e) $4 - 2i$.
::: soluzione
La domanda ha due tempi: prima trovare $z$, poi calcolare $z$ per il suo coniugato, più $z$.

1. **Trovo $z$.** Divido: $z = \frac{5i}{2 - i}$. Il coniugato del numero sotto è $2 + i$. Sotto viene $4 + 1 = 5$.
2. Sopra: $5i \cdot (2 + i) = 10i + 5i^2$, cioè $-5 + 10i$.
3. Divido per 5 tutti e due i pezzi: $z = -1 + 2i$.
4. **Controllo.** $(2 - i)(-1 + 2i)$: i quattro prodotti sono $-2$, $4i$, $i$ e $-2i^2 = 2$. In tutto $5i$. Giusto.
5. **Calcolo $z \bar z$.** È il quadrato del modulo: $(-1)^2 + 2^2 = 1 + 4 = 5$.
6. **Sommo $z$.** $5 + (-1 + 2i) = 4 + 2i$.

La risposta è la (a).

Da dove vengono le risposte sbagliate:

- la (b) viene con $z = 1 + 2i$, cioè con un errore di segno al passo 3;
- la (c) viene se al passo 5 usi $z^2 = -3 - 4i$ al posto di $z \bar z$;
- la (d) viene se dimentichi di sommare $z$ al passo 6;
- la (e) viene se al passo 6 sommi il coniugato al posto di $z$.
:::

::: esercizio difficile Due equazioni di secondo grado risolte con le coordinate
(a) Trova tutti i $z \in \C$ con $z^2 = 2i$. (b) Trova tutti i $z \in \C$ con $|z|^2 + z = 7 + i$.
::: soluzione
In tutti e due i casi scrivo $z = x + yi$, con $x$ e $y$ reali. Poi uguaglio le parti reali e le parti immaginarie dei due lati.

**(a)**

1. Calcolo il quadrato: $(x + yi)(x + yi)$. I quattro prodotti sono $x^2$, $xyi$, $xyi$ e $y^2 i^2 = -y^2$.
2. Quindi $z^2 = (x^2 - y^2) + 2xyi$: la parte reale è $x^2 - y^2$, la parte immaginaria è $2xy$.
3. A destra c'è $2i$, cioè $0 + 2i$: parte reale 0, parte immaginaria 2.
4. Le due parti devono essere uguali. Vengono due equazioni, che devono valere insieme:
   $$\begin{cases} x^2 - y^2 = 0 \\ 2xy = 2 \end{cases}$$
   La graffa vuol dire proprio «tutte e due insieme».
5. La prima equazione dice $x^2 = y^2$. Due numeri reali hanno lo stesso quadrato quando sono uguali oppure opposti. Quindi $y = x$ oppure $y = -x$.
6. **Caso $y = -x$.** La seconda equazione diventa $-2x^2 = 2$, cioè $x^2 = -1$. Per un numero reale è impossibile. Da qui non viene nessuna soluzione.
7. **Caso $y = x$.** La seconda equazione diventa $2x^2 = 2$, cioè $x^2 = 1$. Quindi $x = 1$ oppure $x = -1$.
8. Con $x = 1$ viene $y = 1$, cioè $z = 1 + i$. Con $x = -1$ viene $y = -1$, cioè $z = -1 - i$.

Le soluzioni sono due: $z = 1 + i$ e $z = -1 - i$.

Controllo: $(1 + i)^2 = 1 + 2i + i^2 = 2i$. L'altra soluzione è l'opposto della prima, e ha lo stesso quadrato perché meno per meno fa più.

Nella lezione L03 ritroverai queste due **radici quadrate** di $2i$ con le coordinate polari. Servono nell'Esempio 4.10 della lezione L04.

**(b)**

1. Il quadrato del modulo è $x^2 + y^2$, un numero reale.
2. Il lato sinistro è $(x^2 + y^2 + x) + yi$: la parte reale è $x^2 + y^2 + x$, la parte immaginaria è $y$.
3. Il lato destro è $7 + i$: parte reale 7, parte immaginaria 1.
4. Le due equazioni:
   $$\begin{cases} x^2 + y^2 + x = 7 \\ y = 1 \end{cases}$$
5. Metto $y = 1$ nella prima: $x^2 + 1 + x = 7$. Tolgo 7 da tutti e due i lati: $x^2 + x - 6 = 0$.
6. Cerco due numeri che moltiplicati danno $-6$ e sommati danno $1$: sono $3$ e $-2$. Quindi $x^2 + x - 6 = (x + 3)(x - 2)$. Controllo: i quattro prodotti sono $x^2$, $-2x$, $3x$ e $-6$.
7. Un prodotto fa zero quando uno dei due pezzi è zero. Quindi $x = -3$ oppure $x = 2$.

Le soluzioni sono due: $z = 2 + i$ e $z = -3 + i$.

Controllo della prima: il quadrato del modulo di $2 + i$ è $4 + 1 = 5$, e $5 + 2 + i = 7 + i$.

Controllo della seconda: il quadrato del modulo di $-3 + i$ è $9 + 1 = 10$, e $10 - 3 + i = 7 + i$.
:::

::: esercizio difficile I numeri di modulo 1
(a) Dimostra che se $|z| = 1$ allora $z^{-1} = \bar z$. (b) Usalo per calcolare l'inverso di $\frac 35 + \frac 45 i$.
::: soluzione
**(a)** A parole: per un numero che dista 1 dall'origine, l'inverso è il coniugato.

1. La formula dell'inverso dice: l'inverso è il coniugato diviso per il quadrato del modulo.
2. Se il modulo è 1, anche il suo quadrato è 1.
3. Dividere per 1 non cambia niente. Quindi l'inverso è il coniugato: $z^{-1} = \bar z$.

Detto in un altro modo: $z \cdot \bar z$ è il quadrato del modulo, che qui vale 1. Il coniugato, moltiplicato per $z$, dà 1: è proprio l'inverso.

**(b)**

1. Controllo che il modulo sia 1. I due quadrati sono $\frac 9{25}$ e $\frac{16}{25}$. La somma è $\frac{25}{25} = 1$, e la radice di 1 è 1.
2. Per il punto (a) l'inverso è il coniugato: $\frac 35 - \frac 45 i$.

Controllo: il numero per il suo coniugato dà il quadrato del modulo, cioè $\frac 9{25} + \frac{16}{25} = 1$.

Nel piano i numeri di modulo 1 formano la circonferenza di centro $0$ e raggio 1. Si chiama **circonferenza unitaria**, ed è la protagonista della lezione L03.
:::

## Domande di ripasso

::: domanda Perché l'equazione $x^2 = -1$ non ha soluzioni reali, e come la risolvono i numeri complessi?
Il quadrato di un numero reale non è mai negativo, perché meno per meno fa più. Quindi nessun numero reale, al quadrato, dà $-1$. I numeri complessi aggiungono un numero nuovo, la $i$, con $i^2 = -1$. Tra i numeri complessi l'equazione ha due soluzioni: $i$ e $-i$.
:::

::: domanda Che cos'è un numero complesso? Quali sono la sua parte reale e la sua parte immaginaria?
È un numero che si scrive $a + bi$, dove $a$ e $b$ sono numeri reali qualsiasi e $i$ è l'unità immaginaria (Definizione 2.1). La parte reale è $a$, il pezzo che sta da solo. La parte immaginaria è $b$, il numero che moltiplica la $i$: è un numero reale, senza la $i$. Per esempio $4 - i$ ha parte reale 4 e parte immaginaria $-1$.
:::

::: domanda Come si moltiplicano due numeri complessi?
Si fanno i quattro prodotti: ogni pezzo del primo numero per ogni pezzo del secondo. Poi al posto di $i^2$ si scrive $-1$. Poi si raccolgono i pezzi senza la $i$ e quelli con la $i$. Per esempio $(7 + i)(4 - i) = 28 - 7i + 4i - i^2 = 29 - 3i$.
:::

::: domanda Quanto vale $i^n$? Come lo calcoli quando $n$ è grande?
Le potenze di $i$ si ripetono ogni quattro: $i$, $-1$, $-i$, $1$. Si divide l'esponente per 4 e si guarda il resto. Resto 0 dà $1$, resto 1 dà $i$, resto 2 dà $-1$, resto 3 dà $-i$. Per esempio $15 = 4 \cdot 3 + 3$, quindi $i^{15} = -i$.
:::

::: domanda $\C$ è un campo? È ordinato?
È un campo: valgono le nove regole della Proposizione 2.2, le stesse dei numeri reali. Non è ordinato: tra due numeri complessi non ha senso chiedere quale sia il maggiore. Il motivo è che in un campo ordinato i quadrati dei numeri diversi da zero sono positivi. Allora sarebbero positivi sia $1$ sia $-1$, che è il quadrato di $i$: impossibile.
:::

::: domanda Che cos'è il coniugato di $z$? Quando un numero è uguale al suo coniugato?
Il coniugato di $z = a + bi$ è $\bar z = a - bi$: si cambia il segno della parte immaginaria. Nel piano è il riflesso rispetto all'asse reale. Un numero è uguale al suo coniugato esattamente quando la parte immaginaria è zero, cioè quando è un numero reale.
:::

::: domanda Che cos'è il modulo di $z$ e che significato ha nel piano?
È il numero reale $|z| = \sqrt{a^2 + b^2}$. Non è mai negativo, e vale zero solo per $z = 0$. Nel piano è la distanza del punto dall'origine, calcolata con il teorema di Pitagora. Per esempio $|3 + 4i| = 5$.
:::

::: domanda Quanto vale $z\bar z$? Perché è importante?
Vale $a^2 + b^2$, cioè il quadrato del modulo. È sempre un numero reale, mai negativo. È importante perché moltiplicare per il coniugato fa sparire la $i$: su questo si basano l'inverso e la divisione.
:::

::: domanda Qual è l'inverso di $z \neq 0$? Come si controlla?
È il coniugato diviso per il quadrato del modulo: $z^{-1} = \frac{\bar z}{|z|^2}$. Si controlla moltiplicando per $z$: sopra viene $z \bar z$, che è il quadrato del modulo, e la frazione vale 1. Per esempio l'inverso di $2 + i$ è $\frac{2 - i}5$.
:::

::: domanda Come si calcola $\frac{w}{z}$?
Si moltiplicano sopra e sotto per $\bar z$, il coniugato del numero sotto. Sotto resta il quadrato del modulo, che è un numero reale. Poi si dividono per quel numero la parte reale e la parte immaginaria del numero sopra. Alla fine si controlla moltiplicando il risultato per $z$: deve tornare $w$.
:::

::: domanda Che cosa sono l'asse reale e l'asse immaginario del piano complesso?
L'asse reale è quello orizzontale: contiene i numeri reali, cioè quelli con la parte immaginaria uguale a zero. L'asse immaginario è quello verticale: contiene i numeri del tipo $bi$, con la parte reale uguale a zero. Il numero $a + bi$ è il punto $(a, b)$.
:::

::: domanda Come si vede la somma di due numeri complessi nel piano?
Con la regola del parallelogramma. La somma è il quarto vertice del parallelogramma che ha gli altri tre vertici nell'origine e nei due numeri. Per esempio $(1 + 3i) + (4 + i) = 5 + 4i$.
:::

::: domanda Che figura è $\{z \in \C \mid |z - c| = r\}$, con $r > 0$?
È la circonferenza di centro $c$ e raggio $r$, perché $|z - c|$ è la distanza tra $z$ e $c$. Con $\le$ al posto dell'uguale si ottiene il disco pieno. Con $\ge$ si ottiene tutto quello che sta fuori dal disco, circonferenza compresa.
:::

## Glossario

```glossario
Unità immaginaria $i$ | Il numero nuovo dei numeri complessi. La sua regola è $i^2 = -1$: moltiplicata per sé stessa dà $-1$.
Numero complesso | Un numero che si scrive $a + bi$, con $a$ e $b$ numeri reali (Definizione 2.1). Per esempio $3 + 2i$. L'insieme dei numeri complessi è $\C$.
Parte reale $\operatorname{Re}(z)$ | Il pezzo di $z = a + bi$ che sta da solo, cioè $a$. Per esempio la parte reale di $3 + 4i$ è 3.
Parte immaginaria $\operatorname{Im}(z)$ | Il numero reale $b$ che moltiplica la $i$ in $z = a + bi$, senza la $i$. Per esempio la parte immaginaria di $4 - i$ è $-1$.
Immaginario puro | Un numero complesso con la parte reale uguale a zero, come $23i$ o $-i$. Nel piano sta sull'asse verticale.
Forma $a + bi$ | Il modo di scrivere un numero complesso con le due parti in vista. Si chiama anche forma algebrica, o forma cartesiana.
Coniugato (coniugio) $\bar z$ | Il numero che si ottiene cambiando il segno davanti alla $i$: il coniugato di $3 + 2i$ è $3 - 2i$. Nel piano è il riflesso rispetto all'asse reale.
Modulo $\lvert z \rvert$ | La distanza del punto dall'origine: $\sqrt{a^2 + b^2}$. È un numero reale, mai negativo. Per esempio $\lvert 3 + 4i \rvert = 5$.
Inverso $z^{-1}$ | Il numero che moltiplicato per $z$ dà 1. Si calcola come coniugato diviso per il quadrato del modulo. Lo zero non ha inverso.
Campo | Un insieme di numeri con somma e prodotto in cui valgono le nove regole della Proposizione 2.2. Sono campi $\Q$, $\R$ e $\C$.
Campo ordinato | Un campo in cui si può dire quale di due numeri è il maggiore, rispettando le regole dei conti. $\R$ lo è, $\C$ no.
Piano complesso | Il piano in cui $a + bi$ è il punto $(a, b)$, oppure la freccia dall'origine a quel punto.
Asse reale | L'asse orizzontale del piano complesso. Contiene i numeri reali.
Asse immaginario | L'asse verticale del piano complesso. Contiene gli immaginari puri, cioè i numeri del tipo $bi$.
Regola del parallelogramma | Il modo di disegnare una somma: $z_1 + z_2$ è il quarto vertice del parallelogramma con gli altri vertici in $0$, $z_1$ e $z_2$.
Potenze di $i$ | Si ripetono ogni quattro: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, e poi da capo. Conta il resto della divisione dell'esponente per 4.
Distanza tra due numeri complessi | Il modulo della differenza, $\lvert z - w \rvert$: la lunghezza del tratto che unisce i due punti. Tra $1 + i$ e $4 + 5i$ la distanza è 5.
```

## Checklist

```checklist
- So spiegare perché nessun numero reale al quadrato dà $-1$, e che cosa aggiunge la $i$.
- So riconoscere la parte reale e la parte immaginaria di un numero complesso, e so che la parte immaginaria è un numero reale.
- So sommare, sottrarre e moltiplicare due numeri complessi, scrivendo $-1$ al posto di $i^2$.
- So calcolare una potenza di $i$ con un esponente grande, usando il resto della divisione per 4.
- So dire perché $\C$ è un campo ma non è ordinato.
- So calcolare il coniugato e il modulo, e so che un numero per il suo coniugato dà il quadrato del modulo.
- So calcolare l'inverso di un numero complesso e fare una divisione moltiplicando per il coniugato del numero sotto, con il controllo finale.
- So risolvere un'equazione come $(1 + i)z = 3 + 2i$. Con le coordinate, so risolverne una in cui compare anche il coniugato.
- So disegnare nel piano un numero complesso, il suo coniugato e una somma con la regola del parallelogramma.
- So tradurre in una figura condizioni come $\operatorname{Re}(z) > \operatorname{Im}(z)$ e $|z - c| \le r$.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 2 «Numeri complessi I», pp. 6–9: le sezioni 2.A–2.E sono seguite in ordine, con la pagina accanto a ogni titolo; la Definizione 2.1, la Proposizione 2.2 e l'Esempio 2.3 mantengono la loro numerazione; gli esercizi 2.4, 2.5 e 2.6 sono svolti nella sezione «Esercizi» (esercizi 6, 8 e 9); le Figure 1 e 2 sono ridisegnate con i grafici.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.4.1–1.4.3 (pp. 25–27), Esercizio 1.4.3 (p. 30), §1.5.3 sui campi (p. 36).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): domande 1 del 08/02/2024, del 03/06/2025 e del 03/06/2026, riportate con soluzioni scritte per questi appunti; la tabella degli altri appelli ne indica solo il tipo. Regole d'esame 2025/26 e date 2026/27 come nella lezione L01.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi sono di questi appunti. Le parti **«Oltre le dispense»** (la storia di Cardano e Bombelli, le potenze di $i$, le regole sul coniugato, la distanza, il metodo per disegnare insiemi, il perché $\C$ non è ordinato, gli esercizi che non vengono dalle dispense) collegano la lezione al resto del corso e all'esame.
