---
corso: MDAG
modulo: AG
lezione: L02
titolo: Numeri complessi I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L02
descrizione: >-
  Appunti della lezione L02 di Algebra lineare e Geometria (MDAG, parte 2): i numeri complessi, somma e prodotto,
  parte reale e parte immaginaria, coniugato, modulo, inverso e divisione, il piano complesso e la regola del
  parallelogramma, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  L'equazione $x^2 = -1$ non ha soluzioni reali. Aggiungendo un solo simbolo nuovo, l'unità immaginaria $i$ con
  $i^2 = -1$, si ottiene il campo $\C$ dei numeri complessi. Qui impari a fare i conti con i numeri $a + bi$ (somme,
  prodotti, coniugato, modulo, inverso, divisioni) e a vederli come punti del piano. In tutti gli appelli dal 2024 al
  2026 c'è almeno una domanda del quiz che parte da questi conti.
materiale: dispense
scheda:
  Dispense: lezione 2 · pp. 6–9
  Libro: Martelli, §1.4.1–1.4.3 (pp. 25–27)
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 2 «Numeri complessi I»; B. Martelli, Geometria e algebra lineare, §1.4.1–1.4.3 ed Esercizio 1.4.3
file_en: L02_complex_numbers_1.html
appunti_html: appunti/MDAG/L02_numeri_complessi_1.html
genera_html: true
---

## In breve

- Nessun numero reale risolve $x^2 = -1$. I **numeri complessi** aggiungono ai reali un simbolo nuovo, l'**unità immaginaria** $i$, con un'unica regola nuova: $i^2 = -1$.
- Un numero complesso si scrive $z = a + bi$ con $a, b \in \R$. Il numero reale $a$ è la **parte reale** $\operatorname{Re}(z)$, il numero reale $b$ (senza la $i$) è la **parte immaginaria** $\operatorname{Im}(z)$.
- Si somma parte reale con parte reale e parte immaginaria con parte immaginaria. Si moltiplica come con le lettere, poi si sostituisce $i^2$ con $-1$: $(7 + i)(4 - i) = 29 - 3i$.
- $\C$ è un **campo**, con le stesse nove proprietà di $\R$, ma **non è ordinato**: tra due numeri complessi non ha senso dire quale sia il maggiore.
- Il **coniugato** di $z = a + bi$ è $\bar z = a - bi$. Il **modulo** è il numero reale $|z| = \sqrt{a^2 + b^2}$, e vale $z\bar z = |z|^2$.
- Ogni $z \neq 0$ ha un **inverso** $z^{-1} = \frac{\bar z}{|z|^2}$. Per dividere si moltiplicano numeratore e denominatore per il coniugato del denominatore.
- I numeri complessi sono i punti del **piano complesso**: $a + bi$ è il punto $(a, b)$, la somma segue la **regola del parallelogramma**, il modulo è la distanza dall'origine.
- All'esame: in tre appelli la domanda 1 del quiz era un'equazione come $(1 + i)z = 3 + 2i$, da risolvere proprio con il coniugato.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Perché servono i numeri complessi (p. 6)

Nella lezione L01 hai visto che ogni insieme numerico nuovo nasce da un'equazione che nell'insieme vecchio non ha soluzione. L'ultima riga di quella tabella era

$$x^2 = -1.$$

Nessun numero reale la risolve, perché il quadrato di un numero reale non è mai negativo:

- se $x \ge 0$, allora $x^2 = x \cdot x \ge 0$;
- se $x < 0$, allora $-x$ è positivo e $x^2 = (-x) \cdot (-x) > 0$.

Quindi $x^2 + 1 \ge 1$ per ogni $x \in \R$: non vale mai $0$.

Le dispense presentano i numeri complessi come un **ampliamento** di $\R$, «costruito con lo scopo di ottenere migliori proprietà algebriche». In concreto si aggiunge ai reali **un solo** oggetto nuovo, $i$, il cui quadrato è $-1$, e si continua a fare i conti con le regole di sempre. Il guadagno è grande: nei numeri complessi **ogni** equazione polinomiale di grado almeno 1 ha soluzione. È il teorema fondamentale dell'algebra (lezione L04), ed è il motivo per cui il corso usa $\C$, per esempio quando cercherà gli autovalori di una matrice (lezioni L17 e L18).

> [!OLTRE] · da dove vengono davvero
> Storicamente i numeri complessi sono nati dalle equazioni di **terzo grado**. Nel Cinquecento Gerolamo Cardano pubblicò una formula per risolvere equazioni come $x^3 = 15x + 4$. Applicata a questa equazione, la formula chiede di calcolare $\sqrt{-121}$, che tra i reali non esiste. Eppure l'equazione ha una soluzione reale molto semplice, $x = 4$: infatti $4^3 = 64$ e $15 \cdot 4 + 4 = 64$. Rafael Bombelli ebbe l'idea di fare i conti con $\sqrt{-121} = 11i$ come se fosse un numero qualsiasi: la formula diventa
> $$x = \sqrt[3]{2 + 11i} + \sqrt[3]{2 - 11i},$$
> e siccome $(2 + i)^3 = 2 + 11i$ e $(2 - i)^3 = 2 - 11i$ (lo verifichi nell'esercizio 1), si trova $x = (2 + i) + (2 - i) = 4$. I numeri «immaginari» servivano a trovare numeri reali.

## Che cos'è un numero complesso (p. 6)

> [!DEF] 2.1 · Numeri complessi
> Un **numero complesso** è un oggetto algebrico che si scrive nel modo seguente:
> $$a + bi$$
> dove $a$ e $b$ sono numeri reali arbitrari e $i$ è un nuovo simbolo chiamato **unità immaginaria**.

Pezzo per pezzo:

- $a + bi$ si legge «$a$ più $b$ $i$». È **un solo numero**, costruito con due numeri reali: il primo, $a$, sta da solo; il secondo, $b$, è moltiplicato per $i$.
- $a$ e $b$ sono reali **qualsiasi**: positivi, negativi, nulli, frazioni, radici. La scrittura $bi$ vuol dire $b \cdot i$. Si scrive anche $ib$, soprattutto con le radici: $i\sqrt 3$ è più chiaro di $\sqrt 3 i$, dove la $i$ potrebbe sembrare sotto la radice.
- $i$ **non è un numero reale**: è un simbolo nuovo. Il nome «immaginario» è solo storico. Per noi $i$ è un oggetto con cui si fanno i conti seguendo una sola regola in più, che vedrai tra poco: $i^2 = -1$.
- Il $+$ in $a + bi$ non si può «eseguire»: $a$ e $bi$ restano separati, come in $3 + 2\sqrt 2$ nella lezione L01, che non si riduce a un unico numero più semplice.

Ecco gli esempi delle dispense, con le due componenti in evidenza:

| Numero complesso | $a$ | $b$ | Osservazione |
|---|--:|--:|---|
| $\sqrt 7$ | $\sqrt 7$ | $0$ | un numero reale è complesso: $\sqrt 7 = \sqrt 7 + 0i$ |
| $2 + i$ | $2$ | $1$ | $i$ da sola vuol dire $1 \cdot i$ |
| $23i$ | $0$ | $23$ | manca la parte senza $i$: $23i = 0 + 23i$ |
| $4 - i$ | $4$ | $-1$ | $-i$ vuol dire $(-1) \cdot i$ |
| $-1 + \pi i$ | $-1$ | $\pi$ | anche $b$ può essere irrazionale |

Due casi particolari tornano spesso:

- se $b = 0$, il numero $a + 0i = a$ è un **numero reale**: i reali sono contenuti nei complessi;
- se $a = 0$, il numero $bi$ si chiama **immaginario puro** (per esempio $23i$, $-i$, $i\sqrt 2$).

> [!NOTA] Quando due numeri complessi sono uguali
> $a + bi = c + di$ esattamente quando $a = c$ **e** $b = d$. Nelle dispense questo è implicito nel modo in cui si scrive un numero complesso, e diventa evidente nella sezione 2.D: ogni $a + bi$ corrisponde a un solo punto $(a, b)$ del piano, e due punti coincidono quando hanno le stesse coordinate. Per esempio $x + yi = 3 - 2i$, con $x, y$ reali, vuol dire $x = 3$ e $y = -2$. Un'uguaglianza tra numeri complessi equivale quindi a **due** uguaglianze tra numeri reali: è il trucco per risolvere molte equazioni (esercizi 6 e 7).

> [!TRAPPOLA] La parte immaginaria non contiene $i$
> Tra poco il numero $b$ si chiamerà **parte immaginaria** di $a + bi$. È il numero reale $b$, non $bi$: la parte immaginaria di $4 - i$ è $-1$, non $-i$.

## Somma e prodotto (p. 6)

Le dispense dicono che i numeri complessi si sommano e si moltiplicano «nel modo usuale», tenendo a mente un'unica nuova relazione:

$$i^2 = -1.$$

«Nel modo usuale» vuol dire: come fai con le espressioni letterali, trattando $i$ come una lettera (come la $x$ di $3 + 2x$) e usando le proprietà commutativa, associativa e distributiva. L'unica novità è che, ogni volta che compare $i^2$, lo sostituisci con $-1$.

### La somma

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

Si sommano le parti senza $i$ tra loro e le parti con $i$ tra loro, esattamente come $(3 + 2x) + (1 - 5x) = 4 - 3x$.

> [!ESEMPIO] · Somma e differenza
> $$(3 + 2i) + (1 - 5i) = (3 + 1) + (2 - 5)i = 4 - 3i.$$
> La differenza si fa allo stesso modo, facendo attenzione che il segno meno cambia **tutte e due** le parti del secondo numero:
> $$(3 + 2i) - (1 - 5i) = (3 - 1) + (2 + 5)i = 2 + 7i.$$

### Il prodotto

Per moltiplicare $(a + bi)$ per $(c + di)$ si procede così.

1. Proprietà distributiva: ogni termine della prima parentesi per ogni termine della seconda,
   $$(a + bi)(c + di) = ac + a \cdot di + bi \cdot c + bi \cdot di.$$
2. Si riordinano i fattori: $ac + adi + bci + bd\,i^2$.
3. Si usa la regola nuova: $bd\,i^2 = bd \cdot (-1) = -bd$.
4. Si raccolgono le parti senza $i$ e quelle con $i$:
   $$(a + bi) \cdot (c + di) = (ac - bd) + (ad + bc)i.$$

Nel prodotto compare un segno meno ($ac - bd$) che nella somma non c'è: viene tutto da $i^2 = -1$.

> [!ESEMPIO] · Il prodotto delle dispense: $(7 + i)(4 - i) = 29 - 3i$
> I quattro prodotti:
> - $7 \cdot 4 = 28$;
> - $7 \cdot (-i) = -7i$;
> - $i \cdot 4 = 4i$;
> - $i \cdot (-i) = -i^2 = -(-1) = +1$.
>
> Sommando: $28 + 1 + (-7 + 4)i = 29 - 3i$. Con la formula: $a = 7$, $b = 1$, $c = 4$, $d = -1$, quindi $ac - bd = 28 - (1)(-1) = 29$ e $ad + bc = 7 \cdot (-1) + 1 \cdot 4 = -3$.

Altri prodotti, tutti con lo stesso metodo:

| Prodotto | Conti | Risultato |
|---|---|---|
| $3(2 - i)$ | un reale moltiplica tutte e due le parti | $6 - 3i$ |
| $i(2 + 3i)$ | $2i + 3i^2 = 2i - 3$ | $-3 + 2i$ |
| $(1 + 2i)(3 - i)$ | $3 - i + 6i - 2i^2 = 3 + 5i + 2$ | $5 + 5i$ |
| $(1 + i)^2$ | $1 + 2i + i^2 = 1 + 2i - 1$ | $2i$ |
| $(2 + 3i)^2$ | $4 + 12i + 9i^2 = 4 + 12i - 9$ | $-5 + 12i$ |
| $(1 + i)(1 - i)$ | $1 - i + i - i^2 = 1 + 1$ | $2$ |

L'ultimo prodotto è un numero **reale**. Non è un caso: lo capirai tra poco con il coniugato.

> [!METODO] Moltiplicare due numeri complessi
> 1. Svolgi i quattro prodotti: ogni termine della prima parentesi per ogni termine della seconda.
> 2. Sostituisci $i^2$ con $-1$: il termine $bi \cdot di = bd\,i^2$ **cambia segno** e diventa $-bd$.
> 3. Raccogli le parti senza $i$ e quelle con $i$.
>
> Non serve imparare la formula a memoria: bastano questi tre passi.

> [!TRAPPOLA] Non si moltiplica «parte per parte»
> $(1 + 2i)(3 - i)$ **non** è $1 \cdot 3 + 2 \cdot (-1)\,i = 3 - 2i$: mancano i due termini misti $1 \cdot (-i)$ e $2i \cdot 3$. Il risultato giusto è $5 + 5i$. Il secondo errore tipico è dimenticare il cambio di segno: con $i^2 = +1$ verrebbe $3 + 5i - 2 = 1 + 5i$, sbagliato.

### Le potenze di $i$ (oltre le dispense)

Le potenze di $i$ si ripetono ogni quattro:

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|---|
| $i^n$ | $1$ | $i$ | $-1$ | $-i$ | $1$ | $i$ | $-1$ | $-i$ | $1$ |

Infatti $i^3 = i^2 \cdot i = -i$ e $i^4 = i^2 \cdot i^2 = (-1)(-1) = 1$. Da lì si ricomincia: $i^5 = i^4 \cdot i = i$, e così via. Quindi per calcolare $i^n$ basta il **resto** della divisione di $n$ per $4$: se $n = 4k + r$, allora
$$i^n = (i^4)^k \cdot i^r = 1^k \cdot i^r = i^r.$$

- $i^{15}$: $15 = 4 \cdot 3 + 3$, quindi $i^{15} = i^3 = -i$ (serve nell'esercizio 2).
- $i^{100}$: $100 = 4 \cdot 25 + 0$, quindi $i^{100} = 1$.
- $i^{2026}$: $2026 = 4 \cdot 506 + 2$, quindi $i^{2026} = i^2 = -1$.

Anche $-i$ ha quadrato $-1$: $(-i)^2 = (-1)^2 \cdot i^2 = -1$. Quindi $x^2 = -1$ ha **due** soluzioni in $\C$, $i$ e $-i$.

### L'insieme dei numeri complessi

L'insieme dei numeri complessi si indica con $\C$, e la catena degli insiemi numerici della lezione L01 si allunga:

$$\N \subsetneq \Z \subsetneq \Q \subsetneq \R \subsetneq \C.$$

Il contenimento $\R \subsetneq \C$ è stretto perché $i \in \C$ ma $i \notin \R$: il suo quadrato è $-1$, e nessun reale ha quadrato negativo. Inoltre i conti tra numeri reali non cambiano quando li guardi dentro $\C$: con la formula del prodotto, $(a + 0i)(c + 0i) = (ac - 0 \cdot 0) + (a \cdot 0 + 0 \cdot c)i = ac$. Per questo si dice che $\C$ **estende** $\R$.

## Le proprietà di C: un campo non ordinato (pp. 6–7)

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

Sono **le stesse nove proprietà** della Proposizione 1.5 per $\R$ (lezione L01). Attenzione alle lettere: qui $a, b, c$ indicano numeri **complessi**, non le componenti di $a + bi$. In $\C$:

- lo zero è $0 = 0 + 0i$ e l'uno è $1 = 1 + 0i$;
- l'opposto di $a + bi$ è $-a - bi$, perché $(a + bi) + (-a - bi) = 0 + 0i = 0$;
- l'unica proprietà che richiede un conto vero è la 8, l'inverso: la vedrai nella sezione sull'inverso.

Le dispense concludono: «Allora, come $\R$, anche $\C$ è un **campo**.» Da questa lezione in poi, quando il corso dirà «un campo $\K$», penserà quasi sempre a $\K = \R$ oppure $\K = \C$ (lezione L05).

> [!OLTRE] · che cosa ci guadagni
> Siccome valgono le nove proprietà, in $\C$ funzionano tutte le regole di calcolo valide in $\R$: i prodotti notevoli come $(z + w)^2 = z^2 + 2zw + w^2$ e $(z - w)(z + w) = z^2 - w^2$, i raccoglimenti, la legge di annullamento del prodotto (se $zw = 0$ e $z \neq 0$, moltiplicando per $z^{-1}$ si ottiene $w = 0$). La userai nella lezione L04 per trovare le radici dei polinomi.

### C non è ordinato

Le dispense sottolineano una differenza fondamentale tra $\C$ e tutti gli insiemi numerici visti prima ($\N$, $\Z$, $\Q$ e $\R$): **$\C$ non è ordinato**. Non esiste una nozione di maggiore e minore tra numeri complessi. Il motivo, detto in una riga dalle dispense: in un campo ordinato un quadrato è sempre positivo, ma qui $i^2 = -1$.

> [!DIM] · perché $\C$ non si può ordinare
> In un campo ordinato come $\R$ (lezione L01: $a > b$ vuol dire $a - b > 0$) i numeri positivi rispettano due regole:
> 1. somma e prodotto di numeri positivi sono positivi;
> 2. per ogni $a \neq 0$, **uno e uno solo** tra $a$ e $-a$ è positivo.
>
> Da queste due regole segue che il quadrato di un numero non nullo è positivo: se $a > 0$, allora $a \cdot a > 0$ per la regola 1; se invece $a < 0$, allora $-a > 0$ e $a^2 = (-a) \cdot (-a) > 0$, sempre per la regola 1.
>
> Supponiamo per assurdo che $\C$ abbia un ordine con queste regole. Allora $1 = 1^2$ è positivo, perché è il quadrato di $1 \neq 0$. Ma anche $-1 = i^2$ è positivo, perché è il quadrato di $i \neq 0$. Così $1$ e $-1$ sarebbero entrambi positivi, contro la regola 2. Assurdo.
>
> (I numeri complessi si possono anche mettere in fila in qualche modo, per esempio prima per parte reale e poi per parte immaginaria; ma nessun ordine di questo tipo rispetta le regole dei conti. È in questo senso che $\C$ non è ordinato.)

> [!TRAPPOLA] Niente disuguaglianze tra numeri complessi
> Scritture come $z > 0$, $3i > 2i$ o $1 + i < 2$ **non hanno senso**. Si possono confrontare solo numeri **reali** legati a $z$, come la parte reale, la parte immaginaria o il modulo: $|3i| = 3 > 2 = |2i|$ va benissimo.

## Parte reale, parte immaginaria e coniugato (p. 7)

> [!DEF] Parte reale e parte immaginaria (p. 7)
> Sia $z = a + bi$ un numero complesso. I numeri $a$ e $b$ sono detti rispettivamente la **parte reale** e la **parte immaginaria** di $z$. Scriviamo $a = \operatorname{Re}(z)$ e $b = \operatorname{Im}(z)$. Il numero $z$ è reale, cioè appartiene al sottoinsieme $\R \subset \C$, se e solo se la sua parte immaginaria è nulla.

> [!DEF] Coniugato (p. 7)
> Il **coniugio** (o **coniugato**) di $z = a + bi$ è il numero complesso
> $$\bar z = a - bi$$
> ottenuto da $z$ cambiando il segno della sua parte immaginaria.

Pezzo per pezzo:

- $\operatorname{Re}(z)$ e $\operatorname{Im}(z)$ sono due **numeri reali**: a ogni numero complesso associano un numero reale.
- $\bar z$ si legge «zeta coniugato» (o «zeta segnato»): si scrive con una barretta sopra. Con un'espressione lunga la barra copre tutto: $\overline{z + w}$ è il coniugato della somma.
- Il coniugato cambia segno **solo** alla parte immaginaria: la parte reale resta com'è.

| $z$ | $\operatorname{Re}(z)$ | $\operatorname{Im}(z)$ | $\bar z$ |
|---|--:|--:|---|
| $3 + 4i$ | $3$ | $4$ | $3 - 4i$ |
| $-2 + i$ | $-2$ | $1$ | $-2 - i$ |
| $1 - 3i$ | $1$ | $-3$ | $1 + 3i$ |
| $5i$ | $0$ | $5$ | $-5i$ |
| $7$ | $7$ | $0$ | $7$ |

L'ultimo numero, $7$, coincide con il proprio coniugato. Le dispense notano che succede **esattamente** per i numeri reali:

$$z \in \R \iff z = \bar z.$$

Il perché, passo per passo: $a + bi = a - bi$ vuol dire (confrontando le parti immaginarie) $b = -b$, cioè $2b = 0$, cioè $b = 0$, cioè $z$ è reale.

> [!OLTRE] · quattro regole utili sul coniugato
> - $z + \bar z = (a + bi) + (a - bi) = 2a$: la somma di un numero e del suo coniugato è **sempre reale**, e $\operatorname{Re}(z) = \frac{z + \bar z}2$.
> - $z - \bar z = 2bi$: la differenza è sempre un **immaginario puro**, e $\operatorname{Im}(z) = \frac{z - \bar z}{2i}$.
> - $\bar{\bar z} = z$: coniugando due volte si torna al punto di partenza.
> - Il coniugato «passa dentro» somme e prodotti: $\overline{z + w} = \bar z + \bar w$ e $\overline{zw} = \bar z\,\bar w$ (lo dimostri nell'esercizio 3). Controllo con $z = 1 + 2i$ e $w = 3 - i$: $zw = 3 - i + 6i - 2i^2 = 5 + 5i$, quindi $\overline{zw} = 5 - 5i$; e $\bar z\,\bar w = (1 - 2i)(3 + i) = 3 + i - 6i - 2i^2 = 5 - 5i$. Uguali.

## Il modulo (p. 7)

> [!DEF] Modulo (p. 7)
> Il **modulo** di $z = a + bi$ è il numero reale
> $$|z| = \sqrt{a^2 + b^2}.$$

Pezzo per pezzo:

- $a^2 + b^2$ è una somma di quadrati di numeri reali, quindi è $\ge 0$ e la radice esiste: $|z|$ è un numero **reale e non negativo**.
- Se $z = a$ è reale, $|a| = \sqrt{a^2}$ è il solito valore assoluto (lezione L01: $\sqrt{x^2} = |x|$). Per questo si usa lo stesso simbolo.
- Nel piano complesso $|z|$ è la **distanza** del punto $z$ dall'origine (lo vedi nella sezione sul piano complesso).

| $z$ | $a^2 + b^2$ | $\lvert z \rvert$ |
|---|---|--:|
| $3 + 4i$ | $9 + 16 = 25$ | $5$ |
| $1 - i$ | $1 + 1 = 2$ | $\sqrt 2$ |
| $1 + 2i$ | $1 + 4 = 5$ | $\sqrt 5$ |
| $-5$ | $25 + 0 = 25$ | $5$ |
| $2i$ | $0 + 4 = 4$ | $2$ |
| $5 - 12i$ | $25 + 144 = 169$ | $13$ |

Le dispense osservano che il modulo $|z|$ è nullo quando $z = 0$, cioè quando $a = b = 0$, ed è **strettamente positivo** se $z \neq 0$. Il motivo: $a^2 \ge 0$ e $b^2 \ge 0$, e una somma di due numeri non negativi vale $0$ solo se sono nulli tutti e due.

### La formula più usata: $z\bar z = |z|^2$

Moltiplichiamo un numero per il suo coniugato:

1. $(a + bi)(a - bi) = a^2 - abi + abi - b^2 i^2$ (quattro prodotti);
2. i due termini con $i$ si cancellano: $-abi + abi = 0$;
3. $-b^2 i^2 = -b^2 \cdot (-1) = +b^2$.

Quindi

$$z \cdot \bar z = (a + bi)(a - bi) = a^2 + b^2 = |z|^2.$$

Per esempio $(3 + 4i)(3 - 4i) = 9 - 12i + 12i - 16i^2 = 9 + 16 = 25 = 5^2$. E si spiega anche il prodotto $(1 + i)(1 - i) = 2$ della tabella di prima: è $|1 + i|^2 = (\sqrt 2)^2$.

> [!IDEA] · il coniugato «fa sparire» la $i$
> Qualunque sia $z$, il prodotto $z\bar z$ è un numero **reale** e **non negativo**. Moltiplicare per il coniugato è il modo per trasformare un numero complesso in un numero reale: su questo si basano l'inverso e la divisione.

> [!TRAPPOLA] $|z|^2$ non è $z^2$
> $|z|^2 = a^2 + b^2$ è sempre reale; $z^2 = a^2 - b^2 + 2abi$ in generale no. Con $z = i$: $|i|^2 = 1$ ma $i^2 = -1$. Con $z = 1 + i$: $|z|^2 = 2$ ma $z^2 = 2i$. E il modulo non è la somma delle parti: $|3 + 4i| = 5$, non $3 + 4 = 7$.

## L'inverso e la divisione (pp. 7–8)

La proprietà 8 della Proposizione 2.2 promette che ogni $z \neq 0$ ha un inverso. Le dispense lo mostrano con una formula esplicita: è un fatto importante, perché a prima vista non è chiaro come scrivere $\frac 1{2 + i}$ nella forma $c + di$.

> [!PROP] · Inverso di un numero complesso (p. 7)
> Come nei numeri razionali e reali, ogni numero complesso $z \neq 0$ ha un **inverso** $z^{-1}$ rispetto all'operazione di moltiplicazione, dato da
> $$z^{-1} = \frac{\bar z}{|z|^2}.$$

Pezzo per pezzo:

- $|z|^2 = a^2 + b^2$ è un numero **reale e diverso da zero** (perché $z \neq 0$): dividere per lui vuol dire moltiplicare le due parti di $\bar z$ per il numero reale $\frac 1{a^2 + b^2}$.
- In coordinate:
  $$(a + bi)^{-1} = \frac{a - bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}\,i.$$
- Al posto di $z^{-1}$ si scrive anche $\frac 1z$.

**Perché funziona** (è la verifica delle dispense). Moltiplichiamo $z$ per il candidato inverso e usiamo $z\bar z = |z|^2$:

$$z \cdot z^{-1} = \frac{z \bar z}{|z|^2} = \frac{|z|^2}{|z|^2} = 1.$$

Per la proprietà commutativa vale anche $z^{-1} \cdot z = 1$.

> [!IDEA] · da dove viene la formula
> Per scrivere $\frac 1{a + bi}$ nella forma $c + di$ bisogna togliere la $i$ dal denominatore. Si fa come con le radici nella lezione L01 (per $\frac 1{\sqrt 2 - 1}$ si moltiplicava sopra e sotto per $\sqrt 2 + 1$): si moltiplicano numeratore e denominatore per il **coniugato** del denominatore,
> $$\frac 1{a + bi} = \frac{a - bi}{(a + bi)(a - bi)} = \frac{a - bi}{a^2 + b^2}.$$

> [!ESEMPIO] 2.3 · Gli inversi di $i$ e di $2 + i$
> L'inverso di $i$ è $-i$: infatti $i \cdot (-i) = -i^2 = 1$. Con la formula: $\bar i = -i$ e $|i|^2 = 1$, quindi $i^{-1} = -i$.
>
> L'inverso di $2 + i$ è
> $$(2 + i)^{-1} = \frac{2 - i}{|2 + i|^2} = \frac{2 - i}5 = \frac 25 - \frac 15 i,$$
> perché $|2 + i|^2 = 4 + 1 = 5$. Si verifica che effettivamente
> $$(2 + i) \cdot \frac{2 - i}5 = \frac{4 - 2i + 2i - i^2}5 = \frac{4 + 1}5 = 1.$$

Altri due esempi con lo stesso schema:

- $(3 + 4i)^{-1} = \frac{3 - 4i}{25} = \frac 3{25} - \frac 4{25}i$, perché $|3 + 4i|^2 = 25$;
- $(1 - i)^{-1} = \frac{1 + i}{2} = \frac 12 + \frac 12 i$, perché $|1 - i|^2 = 2$.

### Dividere due numeri complessi

Dividere per $z \neq 0$ vuol dire moltiplicare per il suo inverso: $\frac wz = w \cdot z^{-1} = \frac{w\bar z}{|z|^2}$. In pratica:

> [!METODO] Dividere due numeri complessi
> 1. Scrivi la frazione $\frac wz$.
> 2. Moltiplica numeratore e denominatore per $\bar z$, il coniugato **del denominatore**.
> 3. Al denominatore ottieni $z\bar z = |z|^2$, un numero reale positivo; al numeratore svolgi il prodotto $w\bar z$.
> 4. Dividi per $|z|^2$ la parte reale e la parte immaginaria del numeratore.
> 5. **Controllo**: moltiplica il risultato per $z$; devi ritrovare $w$.

> [!ESEMPIO] · $\frac{4 + 3i}{1 + 2i}$
> Il coniugato del denominatore è $1 - 2i$:
> $$\frac{4 + 3i}{1 + 2i} = \frac{(4 + 3i)(1 - 2i)}{(1 + 2i)(1 - 2i)} = \frac{4 - 8i + 3i - 6i^2}{1 + 4} = \frac{10 - 5i}5 = 2 - i.$$
> Controllo: $(2 - i)(1 + 2i) = 2 + 4i - i - 2i^2 = 4 + 3i$. Giusto.

> [!ESEMPIO] · $\frac{1 + i}{1 - i}$
> $$\frac{1 + i}{1 - i} = \frac{(1 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{1 + 2i + i^2}{2} = \frac{2i}2 = i.$$
> Controllo: $i(1 - i) = i - i^2 = 1 + i$.

> [!TRAPPOLA] Non si divide «parte per parte»
> $\frac{4 + 3i}{1 + 2i}$ **non** è $\frac 41 + \frac 32 i$. Controllo: $(1 + 2i)(4 + \frac 32 i) = 4 + \frac 32 i + 8i + 3i^2 = 1 + \frac{19}2 i$, che non è $4 + 3i$. Si divide solo per un numero **reale** parte per parte: per questo si porta prima al denominatore il numero reale $|z|^2$.

### Equazioni di primo grado in C

Un'equazione come $(1 + 2i)z = 4 + 3i$ si risolve come tra i reali: si divide per il coefficiente di $z$, che non è zero. Quindi $z = \frac{4 + 3i}{1 + 2i} = 2 - i$, il quoziente appena calcolato.

> [!ESAME] Il tipo di domanda più diretto
> «Trova $z$ tale che $(\ldots)z = \ldots$» è stata la domanda 1 del quiz negli appelli del 08/02/2024, del 03/06/2025 e del 03/06/2026. Il metodo è sempre questo: semplifica i prodotti, dividi con il coniugato, **controlla moltiplicando**. Le tre domande, svolte, sono nella sezione «Verso l'esame».

## Il piano complesso (pp. 8–9)

Mentre i numeri reali $\R$ formano una **retta**, i numeri complessi $\C$ formano un **piano**, detto **piano complesso**. Ogni numero complesso $a + bi$ si identifica con il punto di coordinate $(a, b)$ del piano cartesiano, oppure, in modo equivalente, con il **vettore** applicato nell'origine $0$ e diretto verso $(a, b)$ (Figura 1 delle dispense).

- L'asse delle ascisse (orizzontale) è l'**asse reale**: è proprio il sottoinsieme $\R \subset \C$ dei numeri reali.
- L'asse delle ordinate (verticale) è l'**asse immaginario**: contiene tutti i numeri del tipo $bi$, al variare di $b \in \R$.

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

Il numero $-3$ sta sull'asse reale e $2i$ sull'asse immaginario. Il numero $2 + i$ è disegnato come freccia: è il vettore che parte dall'origine e arriva nel punto $(2, 1)$.

### Il modulo è una distanza

Il modulo $|a + bi| = \sqrt{a^2 + b^2}$ è la lunghezza del vettore, cioè la **distanza del punto dall'origine**: per il teorema di Pitagora, nel triangolo rettangolo con cateti lunghi $|a|$ e $|b|$ l'ipotenusa è lunga $\sqrt{a^2 + b^2}$. Le dispense lo notano nella lezione L03, quando introducono le coordinate polari.

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

### Coniugato e opposto

Nel piano, il coniugato $\bar z = a - bi$ ha la stessa ascissa e l'ordinata cambiata di segno: è il **simmetrico di $z$ rispetto all'asse reale** (anche questo lo dicono le dispense nella lezione L03). L'opposto $-z = -a - bi$ è invece il simmetrico rispetto all'**origine**.

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

### La somma: regola del parallelogramma

La somma $z_1 + z_2$ si calcola interpretando $z_1$ e $z_2$ come vettori e sommandoli con la regola del **parallelogramma**: il punto $z_1 + z_2$ è il quarto vertice del parallelogramma che ha tre vertici in $0$, $z_1$ e $z_2$. Funziona perché la somma si fa coordinata per coordinata, esattamente come la somma di vettori del piano (la ritroverai nella lezione L05).

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

Leggi il disegno così: parti da $0$, vai fino a $z_1$ e da lì fai lo stesso spostamento che porta da $0$ a $z_2$ ($4$ a destra e $1$ in su): arrivi in $5 + 4i$. Oppure fai prima $z_2$ e poi $z_1$: arrivi nello stesso punto, perché la somma è commutativa.

> [!OLTRE] · la differenza e la distanza tra due punti
> La differenza $z - w$ è il vettore che va **da $w$ a $z$**. Il suo modulo è la distanza tra i due punti: con $z = a + bi$ e $w = c + di$,
> $$|z - w| = \sqrt{(a - c)^2 + (b - d)^2},$$
> che è la formula della distanza della geometria analitica. Per esempio la distanza tra $1 + i$ e $4 + 5i$ è $|3 + 4i| = 5$. Di conseguenza $\{z \in \C \mid |z - c| = r\}$ è la **circonferenza** di centro $c$ e raggio $r$: serve nell'esercizio 4.

### E il prodotto?

Il prodotto $z_1 \cdot z_2$ ha anch'esso un significato geometrico, che si vede bene solo con le **coordinate polari**: lo studi nella lezione L03. Un assaggio: moltiplicare per $i$ **ruota** il punto di un angolo retto in senso antiorario. Per esempio $i(2 + i) = 2i + i^2 = -1 + 2i$, e $i(-1 + 2i) = -i + 2i^2 = -2 - i$.

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

Prova tu con lo strumento qui sotto. In modalità **z + w** trascina i punti $z$ e $w$: il parallelogramma si aggiorna e sotto leggi le coordinate della somma. Poi scegli **coniugato e inverso di z**: vedi $\bar z$ specchiato rispetto all'asse reale e $1/z$, che sta dentro la circonferenza unitaria quando $|z| > 1$ e fuori quando $|z| < 1$ (il perché lo capirai nella lezione L03).

```widget complessi
titolo: Somma, coniugato e inverso nel piano complesso
z: 1+3i
w: 4+i
modo: somma
modi: somma coniugato
raggio: 6
```

## Disegnare insiemi di numeri complessi (oltre le dispense)

L'esercizio 2.6 delle dispense chiede di disegnare insiemi di numeri complessi definiti da una condizione. Il metodo è sempre lo stesso.

> [!METODO] Da una condizione su $z$ a un disegno
> 1. Scrivi $z = x + yi$ con $x, y$ reali: $\operatorname{Re}(z) = x$, $\operatorname{Im}(z) = y$, $\bar z = x - yi$, $|z| = \sqrt{x^2 + y^2}$.
> 2. Traduci la condizione in una condizione su $x$ e $y$. Se è un'uguaglianza tra numeri complessi, uguaglia parti reali e parti immaginarie.
> 3. Riconosci la figura: retta, semipiano, circonferenza, disco. Ricorda che $|z - c|$ è la distanza di $z$ dal punto $c$.

| Condizione | In $x$ e $y$ | Figura |
|---|---|---|
| $\operatorname{Re}(z) = 2$ | $x = 2$ | retta verticale |
| $\operatorname{Im}(z) > 1$ | $y > 1$ | semipiano sopra la retta $y = 1$, retta esclusa |
| $\lvert z \rvert = 3$ | $x^2 + y^2 = 9$ | circonferenza di centro $0$ e raggio $3$ |
| $\lvert z - i \rvert \le 1$ | $x^2 + (y - 1)^2 \le 1$ | disco di centro $i$ e raggio $1$, bordo compreso |
| $\lvert z - 1 \rvert = \lvert z + 1 \rvert$ | $x = 0$ | l'asse immaginario |

Controlliamo l'ultima riga, che non si indovina a occhio. $|z - 1|$ è la distanza da $1$ e $|z + 1| = |z - (-1)|$ è la distanza da $-1$: i punti equidistanti da $1$ e da $-1$ formano l'asse del segmento che li unisce, cioè l'asse immaginario. Con i conti: elevando al quadrato, $(x - 1)^2 + y^2 = (x + 1)^2 + y^2$, cioè $x^2 - 2x + 1 = x^2 + 2x + 1$, cioè $-4x = 0$, cioè $x = 0$.

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
> Nel libro di Martelli questa lezione corrisponde al §1.4, parti 1.4.1 «Definizione», 1.4.2 «Coniugio, norma e inverso» (con l'Esempio 1.4.1, che è il 2.3 delle dispense) e 1.4.3 «Il piano complesso», alle pp. 25–27 del libro. L'Esercizio 1.4.3 (p. 30) elenca le proprietà del modulo e del coniugato, tra cui quelle dell'esercizio 2.5 delle dispense; il §1.5.3 (p. 36) definisce i campi in generale.

## Verso l'esame

**La prova in due righe.** 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; 2 ore, niente calcolatrice, solo 4 facciate di appunti scritti a mano. Appelli 2026/27 di Algebra lineare: 22/01/2027 e 05/02/2027 alle 14:00. Regole complete e fonti nella lezione L01.

**I numeri complessi negli appelli.** In **ognuno** dei 15 appelli dal 24/01/2024 al 07/09/2026 c'è almeno una domanda del quiz sui numeri complessi o sulle radici di un polinomio, e in 11 appelli su 15 è la domanda 1. Si dividono così tra le lezioni L02–L04:

| Tipo di domanda | Appelli (domanda) | Lezione |
|---|---|---|
| trovare $z$ da un'equazione di primo grado, poi calcolare un'espressione | 08/02/2024 (1), 03/06/2025 (1), 03/06/2026 (1) | L02 |
| potenze alte, prodotto in forma polare, radici $n$-esime | 24/01/2024 (2), 10/06/2024 (1), 10/07/2024 (1), 06/09/2024 (1), 16/01/2025 (1), 07/02/2025 (1), 02/09/2025 (2), 15/01/2026 (5), 05/02/2026 (1) | L03 |
| quale numero è radice di un polinomio | 10/07/2025 (1), 03/07/2026 (7), 07/09/2026 (1) | L04 |

Anche le domande delle lezioni L03 e L04 si chiudono quasi sempre con i conti di questa lezione: un prodotto, un inverso, una divisione. Ecco le tre domande del tipo L02, con la soluzione.

> [!ESEMPIO] · Appello del 08/02/2024, domanda 1
> Trovare $z \in \C$ tale che $(i - 1)(i - 2)z = (i + 1)(i + 2)(i + 3)$. Risposte: $10 + 3i$; $i - 3$; $30 + 10i$; $3i - 1$; $1 - 30i$.
>
> **Soluzione.** Prima si semplificano i due membri.
> - $(i - 1)(i - 2) = i^2 - 2i - i + 2 = -1 - 3i + 2 = 1 - 3i$.
> - $(i + 1)(i + 2) = i^2 + 3i + 2 = 1 + 3i$, e poi $(1 + 3i)(i + 3) = i + 3 + 3i^2 + 9i = 3 - 3 + 10i = 10i$.
>
> L'equazione diventa $(1 - 3i)z = 10i$, quindi
> $$z = \frac{10i}{1 - 3i} = \frac{10i(1 + 3i)}{(1 - 3i)(1 + 3i)} = \frac{10i + 30i^2}{10} = \frac{-30 + 10i}{10} = -3 + i.$$
> È la risposta $i - 3$. Controllo: $(1 - 3i)(-3 + i) = -3 + i + 9i - 3i^2 = -3 + 10i + 3 = 10i$.

> [!ESEMPIO] · Appello del 03/06/2025, domanda 1
> Dato $z \in \C$ che soddisfa $(1 + i)z = 3 + 2i$, quanto vale $2z(5 + i)$? Risposte: $13 + 13i$; $26i$; $1 + i$; $13 - 13i$; $26$.
>
> **Soluzione.** $z = \frac{3 + 2i}{1 + i} = \frac{(3 + 2i)(1 - i)}{2} = \frac{3 - 3i + 2i - 2i^2}2 = \frac{5 - i}2$. Allora
> $$2z(5 + i) = (5 - i)(5 + i) = 25 - i^2 = 26.$$
> Il prodotto è reale perché $5 - i$ e $5 + i$ sono coniugati: $(5 - i)(5 + i) = |5 + i|^2 = 25 + 1$. Risposta: $26$.

> [!ESEMPIO] · Appello del 03/06/2026, domanda 1
> Se $(1 + i)z = 2i$, quanto vale $\frac 1{z + i}$? Risposte: $0$; $\frac 1{1 + i}$; $\frac{1 - 2i}5$; $\frac i{1 + i}$; $\frac{2 + i}5$.
>
> **Soluzione.** $z = \frac{2i}{1 + i} = \frac{2i(1 - i)}{2} = i - i^2 = 1 + i$. Quindi $z + i = 1 + 2i$ e
> $$\frac 1{1 + 2i} = \frac{1 - 2i}{(1 + 2i)(1 - 2i)} = \frac{1 - 2i}{5}.$$
> Risposta: $\frac{1 - 2i}5$. Attenzione alle risposte scritte in forme diverse: $\frac 1{1 + i} = \frac{1 - i}2$ e $\frac i{1 + i} = \frac{1 + i}2$ sono numeri diversi da quello giusto, e conviene sempre ridurre tutto alla forma $a + bi$ prima di confrontare.

> [!METODO] Le domande «trova $z$» in cinque passi
> 1. Svolgi i prodotti di numeri noti, così che l'equazione diventi $\alpha z = \beta$ con $\alpha, \beta$ numeri.
> 2. Dividi: $z = \frac{\beta}{\alpha}$, moltiplicando sopra e sotto per $\bar\alpha$.
> 3. Controlla moltiplicando: $\alpha \cdot z$ deve dare $\beta$.
> 4. Calcola l'espressione richiesta (somma, prodotto, inverso).
> 5. Riduci le cinque risposte alla forma $a + bi$ prima di scegliere. Nel quiz puoi anche **sostituire** le risposte nell'equazione: con un prodotto per risposta scopri quella giusta.

**Errori da evitare.** Dimenticare che $i^2 = -1$ cambia segno; moltiplicare per il coniugato del numeratore invece che del denominatore; confondere $|z|^2$ con $z^2$; dividere parte per parte; scrivere disuguaglianze tra numeri complessi.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione bastano poche righe: $i^2 = -1$ e le potenze di $i$ con periodo 4; $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$; $\bar z = a - bi$, $|z| = \sqrt{a^2 + b^2}$, $z\bar z = |z|^2$; $z^{-1} = \frac{\bar z}{|z|^2}$; «per dividere moltiplico per il coniugato del denominatore»; $|z - c|$ è la distanza da $c$.

## Quiz

```quiz
D: Il numero $z \in \C$ tale che $(1 - i)z = 2 + 4i$ è:
+ $-1 + 3i$
- $3 + i$
- $-1 - 3i$
- $1 + 3i$
- $-2 + 4i$
= $z = \frac{2 + 4i}{1 - i} = \frac{(2 + 4i)(1 + i)}{2} = \frac{2 + 2i + 4i + 4i^2}2 = \frac{-2 + 6i}2 = -1 + 3i$. Controllo: $(1 - i)(-1 + 3i) = -1 + 3i + i - 3i^2 = 2 + 4i$. Le altre risposte, moltiplicate per $1 - i$, danno $4 - 2i$, $-4 - 2i$, $4 + 2i$ e $2 + 6i$. Simile agli appelli del 08/02/2024 e del 03/06/2025, domanda 1.

D: Se $(1 + 2i)z = 5$, allora $\frac 1{z + i}$ è uguale a:
+ $\frac{1 + i}2$
- $\frac{1 - i}2$
- $1 + i$
- $\frac 12$
- $\frac{1 - 3i}{10}$
= $z = \frac 5{1 + 2i} = \frac{5(1 - 2i)}5 = 1 - 2i$, quindi $z + i = 1 - i$ e $\frac 1{1 - i} = \frac{1 + i}{(1 - i)(1 + i)} = \frac{1 + i}2$. La risposta $\frac{1 - 3i}{10}$ è $\frac 1{1 + 3i}$: viene fuori se si sbaglia il segno di $z$. Simile all'appello del 03/06/2026, domanda 1.

D: Quanto vale $(2 + 3i)(1 - 2i)$?
+ $8 - i$
- $-4 - i$
- $2 - 6i$
- $8 + i$
- $8 - 7i$
= $(2 + 3i)(1 - 2i) = 2 - 4i + 3i - 6i^2 = 2 - i + 6 = 8 - i$. La risposta $-4 - i$ viene usando $i^2 = +1$; $2 - 6i$ moltiplicando «parte per parte». Sono i conti con cui comincia la domanda 1 dell'appello del 08/02/2024, dove si dovevano svolgere prodotti come $(i - 1)(i - 2)$.

D: Quanto vale $i^{2026}$?
+ $-1$
- $1$
- $i$
- $-i$
- $2026\,i$
= Le potenze di $i$ si ripetono ogni 4: $2026 = 4 \cdot 506 + 2$, quindi $i^{2026} = (i^4)^{506} \cdot i^2 = 1 \cdot (-1) = -1$. Lo stesso conto serviva nell'appello del 05/02/2026 (domanda 1), per controllare che $(\pm i)^{2026} = -1$.

D: Quale affermazione è vera per **ogni** $z \in \C$?
+ $z + \bar z$ è un numero reale.
- $z - \bar z$ è un numero reale.
- $z^2 = |z|^2$.
- $|z| = \operatorname{Re}(z) + \operatorname{Im}(z)$.
- $\bar z = -z$.
= Con $z = a + bi$: $z + \bar z = 2a$ è reale. Invece $z - \bar z = 2bi$ non è reale se $b \neq 0$ (per esempio con $z = i$ vale $2i$); $i^2 = -1$ ma $|i|^2 = 1$; $|1 + i| = \sqrt 2 \neq 2$; $\bar 1 = 1 \neq -1$.

D: L'inverso di $3 - 4i$ è:
+ $\frac{3 + 4i}{25}$
- $\frac{3 + 4i}5$
- $\frac 13 - \frac 14 i$
- $-3 + 4i$
- $\frac{-3 + 4i}{25}$
= $(3 - 4i)^{-1} = \frac{\overline{3 - 4i}}{|3 - 4i|^2} = \frac{3 + 4i}{9 + 16} = \frac{3 + 4i}{25}$. Controllo: $(3 - 4i)(3 + 4i) = 25$. Con $\frac{3 + 4i}5$ si è diviso per $|z|$ invece che per $|z|^2$ (il prodotto viene $5$); $\frac 13 - \frac 14 i$ inverte le parti separatamente (il prodotto viene $-\frac{25}{12}i$). Un inverso da calcolare così c'era anche nell'appello del 10/06/2024 (domanda 1).

D: Quale affermazione su $\C$ è vera?
+ $\C$ è un campo, ma non è ordinato.
- $\C$ non è un campo, perché $i$ non ha inverso.
- $\C$ è ordinato: per esempio $2i > i$.
- $\R$ non è contenuto in $\C$.
- Anche $0$ ha un inverso in $\C$.
= $\C$ ha le nove proprietà della Proposizione 2.2, quindi è un campo; $i$ ha inverso $-i$. Non è ordinato: se lo fosse, $1 = 1^2$ e $-1 = i^2$ sarebbero entrambi positivi. $\R \subset \C$ (i numeri $a + 0i$) e $0$ non ha mai inverso.

D: Qual è la parte immaginaria di $\frac{3 - i}{1 + i}$? Scrivi un numero.
N: -2
= $\frac{3 - i}{1 + i} = \frac{(3 - i)(1 - i)}{2} = \frac{3 - 3i - i + i^2}{2} = \frac{2 - 4i}2 = 1 - 2i$. La parte immaginaria è il numero reale $-2$ (non $-2i$). La stessa divisione per $1 + i$ serviva nell'appello del 03/06/2025, domanda 1.

D: Nel piano complesso, l'insieme $\{z \in \C \mid |z - i| = 2\}$ è:
+ la circonferenza di centro $i$ e raggio $2$
- la circonferenza di centro $-i$ e raggio $2$
- la circonferenza di centro $i$ e raggio $4$
- il disco pieno di centro $i$ e raggio $2$
- la retta orizzontale $\operatorname{Im}(z) = 2$
= $|z - i|$ è la distanza di $z$ dal punto $i$: i punti a distanza esattamente $2$ da $i$ formano la circonferenza di centro $i$ e raggio $2$. In coordinate: $x^2 + (y - 1)^2 = 4$. Il disco pieno sarebbe $|z - i| \le 2$.

D: Nel piano complesso, $0$, $z = 1 + 3i$ e $w = 4 + i$ sono tre vertici di un parallelogramma. Il quarto vertice, opposto a $0$, è:
+ $5 + 4i$
- $3 - 2i$
- $-3 + 2i$
- $1 + 13i$
- $5 + 3i$
= Per la regola del parallelogramma il quarto vertice è la somma $z + w = (1 + 4) + (3 + 1)i = 5 + 4i$: è la Figura 2 delle dispense. $3 - 2i$ e $-3 + 2i$ sono le differenze $w - z$ e $z - w$; $1 + 13i$ è il prodotto $zw$.
```

## Esercizi

::: esercizio base Conti con la forma $a + bi$
Calcola e scrivi nella forma $a + bi$: (a) $(3 - 2i) + (-1 + 5i)$; (b) $(3 - 2i) - (-1 + 5i)$; (c) $(3 - 2i)(-1 + 5i)$; (d) $(1 - 2i)^2$; (e) $(2 + i)^3$ e $(2 - i)^3$ (sono i cubi della storia di Bombelli).
::: soluzione
(a) Parti reali e parti immaginarie separate: $(3 - 1) + (-2 + 5)i = 2 + 3i$.

(b) Il meno cambia tutte e due le parti di $-1 + 5i$: $(3 + 1) + (-2 - 5)i = 4 - 7i$.

(c) Quattro prodotti: $3 \cdot (-1) = -3$; $3 \cdot 5i = 15i$; $-2i \cdot (-1) = 2i$; $-2i \cdot 5i = -10i^2 = 10$. Somma: $(-3 + 10) + (15 + 2)i = 7 + 17i$.

(d) Quadrato di binomio: $(1 - 2i)^2 = 1 - 4i + 4i^2 = 1 - 4i - 4 = -3 - 4i$.

(e) Prima il quadrato: $(2 + i)^2 = 4 + 4i + i^2 = 3 + 4i$. Poi $(2 + i)^3 = (3 + 4i)(2 + i) = 6 + 3i + 8i + 4i^2 = 2 + 11i$. Allo stesso modo $(2 - i)^2 = 3 - 4i$ e $(2 - i)^3 = (3 - 4i)(2 - i) = 6 - 3i - 8i + 4i^2 = 2 - 11i$. Le due basi sommate danno $(2 + i) + (2 - i) = 4$: la soluzione reale di $x^3 = 15x + 4$ trovata da Bombelli.
:::

::: esercizio medio Esercizio 2.4 delle dispense: parte reale e parte immaginaria
Calcola la parte reale e la parte immaginaria dei seguenti numeri complessi:
$$\frac{6 + 5i}{3 - i}, \qquad \frac{(2 + i)^3}{5i^{15}}, \qquad \frac{3 - 2i}{1 + 5i} + \frac{2 - 3i}{2 - i}.$$
::: soluzione
**Primo numero.** Moltiplico sopra e sotto per il coniugato del denominatore, $3 + i$; al denominatore $|3 - i|^2 = 9 + 1 = 10$:
$$\frac{6 + 5i}{3 - i} = \frac{(6 + 5i)(3 + i)}{10} = \frac{18 + 6i + 15i + 5i^2}{10} = \frac{13 + 21i}{10}.$$
Parte reale $\frac{13}{10}$, parte immaginaria $\frac{21}{10}$.

**Secondo numero.** Il numeratore l'hai calcolato nell'esercizio 1: $(2 + i)^3 = 2 + 11i$. Al denominatore $i^{15} = i^3 = -i$ (perché $15 = 4 \cdot 3 + 3$), quindi $5i^{15} = -5i$. Allora
$$\frac{2 + 11i}{-5i} = \frac{(2 + 11i) \cdot i}{-5i \cdot i} = \frac{2i + 11i^2}{-5i^2} = \frac{-11 + 2i}{5}.$$
Qui ho moltiplicato sopra e sotto per $i$, che basta perché il denominatore è un immaginario puro: $-5i \cdot i = -5i^2 = 5$. Parte reale $-\frac{11}5$, parte immaginaria $\frac 25$.

**Terzo numero.** Due divisioni e una somma.
- $\frac{3 - 2i}{1 + 5i} = \frac{(3 - 2i)(1 - 5i)}{1 + 25} = \frac{3 - 15i - 2i + 10i^2}{26} = \frac{-7 - 17i}{26}$.
- $\frac{2 - 3i}{2 - i} = \frac{(2 - 3i)(2 + i)}{4 + 1} = \frac{4 + 2i - 6i - 3i^2}{5} = \frac{7 - 4i}5$.
- Somma, con denominatore comune $130$:
  $$\frac{-7 - 17i}{26} + \frac{7 - 4i}{5} = \frac{5(-7 - 17i) + 26(7 - 4i)}{130},$$
  e il numeratore vale $-35 - 85i + 182 - 104i = 147 - 189i$. Quindi la somma è $\frac{147 - 189i}{130}$.

Parte reale $\frac{147}{130}$, parte immaginaria $-\frac{189}{130}$ (le frazioni non si semplificano: $147 = 3 \cdot 7^2$, $189 = 3^3 \cdot 7$ e $130 = 2 \cdot 5 \cdot 13$ non hanno fattori in comune).
:::

::: esercizio medio Esercizio 2.5 delle dispense: proprietà di modulo e coniugato
Dimostra che per ogni $z, w \in \C$ valgono:
$$|\bar z| = |z|, \qquad |z^{-1}| = \frac 1{|z|} \ (z \neq 0), \qquad \overline{z + w} = \bar z + \bar w, \qquad \overline{zw} = \bar z\,\bar w.$$
::: soluzione
Scrivo $z = a + bi$ e $w = c + di$ con $a, b, c, d$ reali.

**1. $|\bar z| = |z|$.** $\bar z = a + (-b)i$, quindi $|\bar z| = \sqrt{a^2 + (-b)^2} = \sqrt{a^2 + b^2} = |z|$, perché $(-b)^2 = b^2$. Nel piano: un punto e il suo simmetrico rispetto all'asse reale hanno la stessa distanza dall'origine.

**2. $|z^{-1}| = \frac 1{|z|}$.** Per $z \neq 0$, $z^{-1} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}\,i$. Chiamo $m = a^2 + b^2 = |z|^2 > 0$. Allora
$$|z^{-1}| = \sqrt{\frac{a^2}{m^2} + \frac{b^2}{m^2}} = \sqrt{\frac{a^2 + b^2}{m^2}} = \sqrt{\frac{m}{m^2}} = \frac{1}{\sqrt m} = \frac 1{|z|}.$$

**3. $\overline{z + w} = \bar z + \bar w$.** $z + w = (a + c) + (b + d)i$, quindi $\overline{z + w} = (a + c) - (b + d)i$. D'altra parte $\bar z + \bar w = (a - bi) + (c - di) = (a + c) - (b + d)i$. Sono uguali.

**4. $\overline{zw} = \bar z\,\bar w$.** Dalla formula del prodotto $zw = (ac - bd) + (ad + bc)i$, quindi $\overline{zw} = (ac - bd) - (ad + bc)i$. D'altra parte
$$\bar z\,\bar w = (a - bi)(c - di) = ac - adi - bci + bd\,i^2 = (ac - bd) - (ad + bc)i.$$
Sono uguali. In parole: si può coniugare prima o dopo aver fatto i conti. Questa regola servirà nella lezione L04 (Proposizione 4.11).
:::

::: esercizio medio Esercizio 2.6 delle dispense: tre insiemi da disegnare
Disegna nel piano complesso i seguenti sottoinsiemi:
1. $A = \{z \in \C \text{ tali che } \operatorname{Re}(z) > \operatorname{Im}(z)\}$;
2. $B = \{z \in \C \text{ tali che } z + \bar z = i\}$;
3. $C = \{z \in \C \text{ tali che } |z - 2| \ge 2\}$.
::: soluzione
Scrivo sempre $z = x + yi$.

**1. L'insieme $A$.** La condizione è $x > y$: i punti che stanno **sotto** la bisettrice $y = x$. È un semipiano aperto: la retta $y = x$ è esclusa, perché lì vale $x = y$ e non $x > y$. Controllo con un punto: $z = 1$ ha $x = 1 > 0 = y$, e infatti sta sotto la bisettrice.

```grafico
titolo: $A = \{\operatorname{Re}(z) > \operatorname{Im}(z)\}$: il semipiano sotto la bisettrice, bisettrice esclusa (tratteggiata)
x: -4 4
y: -4 4
nomi: $\operatorname{Re}$ $\operatorname{Im}$
poligono: -6 -6 6 -6 6 6 | blu | tratteggio
punto: 1 0 | accento | $1$ | s
testo: 2 -1.8 | blu | $A$
```

**2. L'insieme $B$.** $z + \bar z = (x + yi) + (x - yi) = 2x$, che è un numero **reale**. Un numero reale non può essere uguale a $i$, che ha parte immaginaria $1$: uguagliando le parti immaginarie si otterrebbe $0 = 1$. Quindi $B = \emptyset$, l'insieme vuoto: non c'è niente da disegnare.

Se la condizione fosse stata $z - \bar z = i$, avremmo $2yi = i$, cioè $y = \frac 12$: la retta orizzontale $\operatorname{Im}(z) = \frac 12$. Conviene sempre accorgersi quando una condizione è impossibile: è una delle cose che l'esercizio vuole verificare.

**3. L'insieme $C$.** $|z - 2|$ è la distanza di $z$ dal punto $2$. La condizione chiede distanza **almeno** $2$: sono i punti **fuori** dal cerchio di centro $2$ e raggio $2$, insieme alla circonferenza stessa. In coordinate: $(x - 2)^2 + y^2 \ge 4$. Il disco aperto $(x - 2)^2 + y^2 < 4$ è escluso; la circonferenza passa per l'origine, che quindi appartiene a $C$ ($|0 - 2| = 2$).

```grafico
titolo: $C = \{\lvert z - 2 \rvert \ge 2\}$: tutto il piano tranne l'interno del cerchio; la circonferenza fa parte di $C$
x: -3 7
y: -4 4
nomi: $\operatorname{Re}$ $\operatorname{Im}$
poligono: 9 0 9 6 -5 6 -5 -6 9 -6 9 0 4 0 3.932 -0.518 3.732 -1 3.414 -1.414 3 -1.732 2.518 -1.932 2 -2 1.482 -1.932 1 -1.732 0.586 -1.414 0.268 -1 0.068 -0.518 0 0 0.068 0.518 0.268 1 0.586 1.414 1 1.732 1.482 1.932 2 2 2.518 1.932 3 1.732 3.414 1.414 3.732 1 3.932 0.518 4 0 | viola | sottile
cerchio: 2 0 2 | viola | spesso
punto: 2 0 | grigio | vuoto | $2$ | s
punto: 0 0 | viola | $0 \in C$ | no
testo: 5.5 2.8 | viola | $C$
```
:::

::: esercizio base Inversi e quozienti
Scrivi nella forma $a + bi$: (a) $(1 + i)^{-1}$; (b) $(2 - 3i)^{-1}$; (c) $\frac{5 + 5i}{1 - 2i}$; (d) $\frac{i}{1 + i}$.
::: soluzione
(a) $|1 + i|^2 = 2$, quindi $(1 + i)^{-1} = \frac{1 - i}2 = \frac 12 - \frac 12 i$. Controllo: $(1 + i)(1 - i) = 2$, diviso $2$ fa $1$.

(b) $|2 - 3i|^2 = 4 + 9 = 13$, quindi $(2 - 3i)^{-1} = \frac{2 + 3i}{13} = \frac 2{13} + \frac 3{13}i$.

(c) Coniugato del denominatore: $1 + 2i$; $|1 - 2i|^2 = 5$.
$$\frac{(5 + 5i)(1 + 2i)}{5} = \frac{5 + 10i + 5i + 10i^2}{5} = \frac{-5 + 15i}5 = -1 + 3i.$$
Controllo: $(-1 + 3i)(1 - 2i) = -1 + 2i + 3i - 6i^2 = 5 + 5i$.

(d) $\frac{i}{1 + i} = \frac{i(1 - i)}{2} = \frac{i - i^2}2 = \frac{1 + i}2$.
:::

::: esercizio medio Un'equazione con il coniugato
Trova tutti i $z \in \C$ tali che $z + 2\bar z = 3 - i$.
::: soluzione
Qui non si può «dividere per il coefficiente», perché compaiono sia $z$ sia $\bar z$. Si usa il metodo delle coordinate: $z = x + yi$ con $x, y$ reali, quindi $\bar z = x - yi$.

1. Primo membro: $z + 2\bar z = x + yi + 2x - 2yi = 3x - yi$.
2. L'equazione è $3x - yi = 3 - i$. Due numeri complessi sono uguali quando hanno uguali parte reale e parte immaginaria: $3x = 3$ e $-y = -1$.
3. Quindi $x = 1$, $y = 1$: l'unica soluzione è $z = 1 + i$.

Controllo: $(1 + i) + 2(1 - i) = 1 + i + 2 - 2i = 3 - i$.
:::

::: esercizio difficile Due equazioni di secondo grado risolte con le coordinate
(a) Trova tutti i $z \in \C$ con $z^2 = 2i$. (b) Trova tutti i $z \in \C$ con $|z|^2 + z = 7 + i$.
::: soluzione
**(a)** Scrivo $z = x + yi$. Allora $z^2 = x^2 - y^2 + 2xyi$, e l'equazione $z^2 = 0 + 2i$ diventa il sistema
$$\begin{cases} x^2 - y^2 = 0 \\ 2xy = 2 \end{cases}$$
Dalla prima $y = x$ oppure $y = -x$. Con $y = -x$ la seconda dà $-2x^2 = 2$, cioè $x^2 = -1$: impossibile per $x$ reale. Con $y = x$ la seconda dà $2x^2 = 2$, cioè $x = \pm 1$. Soluzioni: $z = 1 + i$ e $z = -1 - i$, cioè $z = \pm(1 + i)$. Controllo: $(1 + i)^2 = 1 + 2i + i^2 = 2i$. Nella lezione L03 ritroverai queste due **radici quadrate** di $2i$ con le coordinate polari; servono nell'Esempio 4.10 della lezione L04.

**(b)** $|z|^2 = x^2 + y^2$ è reale, quindi $|z|^2 + z = (x^2 + y^2 + x) + yi$. Uguagliando parte reale e parte immaginaria a quelle di $7 + i$:
$$\begin{cases} x^2 + y^2 + x = 7 \\ y = 1 \end{cases}$$
Sostituendo $y = 1$: $x^2 + x + 1 = 7$, cioè $x^2 + x - 6 = 0$, cioè $(x + 3)(x - 2) = 0$. Due soluzioni: $z = 2 + i$ e $z = -3 + i$. Controllo: $|2 + i|^2 + 2 + i = 5 + 2 + i = 7 + i$ e $|-3 + i|^2 - 3 + i = 10 - 3 + i = 7 + i$.
:::

::: esercizio difficile I numeri di modulo 1
(a) Dimostra che se $|z| = 1$ allora $z^{-1} = \bar z$. (b) Usalo per calcolare l'inverso di $\frac 35 + \frac 45 i$.
::: soluzione
(a) Se $|z| = 1$, anche $|z|^2 = 1$, e la formula dell'inverso dà $z^{-1} = \frac{\bar z}{|z|^2} = \frac{\bar z}1 = \bar z$. Detto altrimenti, $z\bar z = |z|^2 = 1$.

(b) $\left|\frac 35 + \frac 45 i\right| = \sqrt{\frac 9{25} + \frac{16}{25}} = \sqrt{\frac{25}{25}} = 1$. Quindi l'inverso è il coniugato: $\frac 35 - \frac 45 i$. Controllo: $\left(\frac 35 + \frac 45 i\right)\left(\frac 35 - \frac 45 i\right) = \frac 9{25} + \frac{16}{25} = 1$. Nel piano, i numeri di modulo 1 formano la **circonferenza unitaria**, protagonista della lezione L03.
:::

::: esercizio medio Altri due insiemi
Disegna: (a) $D = \{z \in \C \mid \operatorname{Im}(\bar z + 2i) > 0\}$; (b) $E = \{z \in \C \mid |z| = |z - 2i|\}$.
::: soluzione
(a) Con $z = x + yi$: $\bar z + 2i = x - yi + 2i = x + (2 - y)i$, quindi $\operatorname{Im}(\bar z + 2i) = 2 - y$. La condizione $2 - y > 0$ è $y < 2$: il semipiano **sotto** la retta orizzontale $\operatorname{Im}(z) = 2$, retta esclusa. Attenzione al coniugato: cambia il segno di $y$, e per questo il semipiano sta sotto e non sopra.

(b) $|z|$ è la distanza da $0$, $|z - 2i|$ la distanza da $2i$: i punti equidistanti da $0$ e da $2i$ stanno sull'asse del segmento che li unisce, cioè sulla retta orizzontale $\operatorname{Im}(z) = 1$. Con i conti: $x^2 + y^2 = x^2 + (y - 2)^2$, cioè $y^2 = y^2 - 4y + 4$, cioè $y = 1$.
:::

::: esercizio esame Come all'esame: trova $z$
Trovare il numero $z \in \C$ tale che $(1 + i)(2 - i)\,z = (3 + i)(1 - i)$. Risposte possibili: (a) $1 - i$; (b) $1 + i$; (c) $2 - i$; (d) $-1 + i$; (e) $10 - 10i$.
::: soluzione
1. **Semplifico i due membri.** $(1 + i)(2 - i) = 2 - i + 2i - i^2 = 3 + i$. $(3 + i)(1 - i) = 3 - 3i + i - i^2 = 4 - 2i$.
2. **Divido.** $(3 + i)z = 4 - 2i$, quindi
   $$z = \frac{4 - 2i}{3 + i} = \frac{(4 - 2i)(3 - i)}{9 + 1} = \frac{12 - 4i - 6i + 2i^2}{10} = \frac{10 - 10i}{10} = 1 - i.$$
3. **Controllo.** $(3 + i)(1 - i) = 3 - 3i + i - i^2 = 4 - 2i$. Giusto: la risposta è la (a).

Come verifica, o come strategia alternativa nel quiz, si possono moltiplicare le altre risposte per $3 + i$: (b) dà $2 + 4i$, (c) dà $7 - i$, (d) dà $-4 + 2i$, (e) dà $40 - 20i$. Nessuna è $4 - 2i$. La (e) è la trappola di chi dimentica di dividere per $|3 + i|^2 = 10$.
:::

::: esercizio esame Come all'esame: prima $z$, poi un'espressione
Se $(2 - i)z = 5i$, allora $z\bar z + z$ vale: (a) $4 + 2i$; (b) $6 + 2i$; (c) $-4 - 2i$; (d) $5$; (e) $4 - 2i$.
::: soluzione
1. $z = \frac{5i}{2 - i} = \frac{5i(2 + i)}{4 + 1} = i(2 + i) = 2i + i^2 = -1 + 2i$. Controllo: $(2 - i)(-1 + 2i) = -2 + 4i + i - 2i^2 = 5i$.
2. $z\bar z = |z|^2 = (-1)^2 + 2^2 = 5$.
3. $z\bar z + z = 5 + (-1 + 2i) = 4 + 2i$: risposta (a).

Da dove vengono le altre: (b) è il risultato con $z = 1 + 2i$, cioè con un errore di segno; (c) usa $z^2 = -3 - 4i$ al posto di $z\bar z$; (d) dimentica di aggiungere $z$; (e) usa $\bar z$ al posto di $z$ nell'ultima somma.
:::

## Domande di ripasso

::: domanda Perché l'equazione $x^2 = -1$ non ha soluzioni reali, e come la risolvono i numeri complessi?
Il quadrato di un reale non è mai negativo: $x^2 \ge 0$ per ogni $x \in \R$. I complessi aggiungono il simbolo $i$ con $i^2 = -1$: in $\C$ l'equazione ha due soluzioni, $i$ e $-i$.
:::

::: domanda Che cos'è un numero complesso? Quali sono la sua parte reale e la sua parte immaginaria?
Un oggetto della forma $a + bi$, con $a, b$ reali arbitrari e $i$ unità immaginaria (Definizione 2.1). La parte reale è $\operatorname{Re}(z) = a$, la parte immaginaria è il numero reale $\operatorname{Im}(z) = b$, senza la $i$.
:::

::: domanda Come si moltiplicano due numeri complessi?
Con la proprietà distributiva, ogni termine per ogni termine, poi sostituendo $i^2$ con $-1$ e raccogliendo: $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$. Per esempio $(7 + i)(4 - i) = 29 - 3i$.
:::

::: domanda Quanto vale $i^n$? Come lo calcoli per $n$ grande?
Le potenze di $i$ si ripetono ogni 4: $1, i, -1, -i$. Si divide $n$ per 4 e si guarda il resto $r$: $i^n = i^r$. Per esempio $i^{15} = i^3 = -i$.
:::

::: domanda $\C$ è un campo? È ordinato?
È un campo: valgono le nove proprietà della Proposizione 2.2, come in $\R$. Non è ordinato: in un campo ordinato i quadrati dei numeri non nulli sono positivi, quindi lo sarebbero sia $1 = 1^2$ sia $-1 = i^2$, che è impossibile.
:::

::: domanda Che cos'è il coniugato di $z$? Quando $z = \bar z$?
$\bar z = a - bi$: si cambia il segno della parte immaginaria. $z = \bar z$ se e solo se $b = 0$, cioè se e solo se $z$ è reale.
:::

::: domanda Che cos'è il modulo di $z$ e che significato ha nel piano?
$|z| = \sqrt{a^2 + b^2}$, un numero reale non negativo, nullo solo per $z = 0$. È la distanza del punto $(a, b)$ dall'origine, per il teorema di Pitagora.
:::

::: domanda Quanto vale $z\bar z$? Perché è importante?
$z\bar z = a^2 + b^2 = |z|^2$: è sempre un numero reale non negativo. Moltiplicare per il coniugato elimina la $i$, ed è il trucco su cui si basano inverso e divisione.
:::

::: domanda Qual è l'inverso di $z \neq 0$? Come si verifica?
$z^{-1} = \frac{\bar z}{|z|^2}$. Verifica: $z \cdot \frac{\bar z}{|z|^2} = \frac{|z|^2}{|z|^2} = 1$. Per esempio $(2 + i)^{-1} = \frac{2 - i}5$.
:::

::: domanda Come si calcola $\frac{w}{z}$?
Si moltiplicano numeratore e denominatore per $\bar z$: il denominatore diventa il numero reale $|z|^2$ e si divide per lui la parte reale e la parte immaginaria di $w\bar z$. Alla fine si controlla moltiplicando per $z$.
:::

::: domanda Che cosa sono l'asse reale e l'asse immaginario del piano complesso?
L'asse reale (orizzontale) è l'insieme dei numeri reali, $b = 0$; l'asse immaginario (verticale) è l'insieme dei numeri $bi$, $a = 0$. Il numero $a + bi$ è il punto $(a, b)$.
:::

::: domanda Come si vede la somma di due numeri complessi nel piano?
Con la regola del parallelogramma: $z_1 + z_2$ è il quarto vertice del parallelogramma con vertici $0$, $z_1$, $z_2$. Per esempio $(1 + 3i) + (4 + i) = 5 + 4i$.
:::

::: domanda Che figura è $\{z \in \C \mid |z - c| = r\}$, con $r > 0$?
La circonferenza di centro $c$ e raggio $r$, perché $|z - c|$ è la distanza tra $z$ e $c$. Con $\le$ si ottiene il disco, con $\ge$ l'esterno del disco (circonferenza compresa).
:::

## Glossario

```glossario
Unità immaginaria $i$ | Il simbolo nuovo dei numeri complessi, con la regola $i^2 = -1$.
Numero complesso | Oggetto $a + bi$ con $a, b$ reali arbitrari (Definizione 2.1). L'insieme dei numeri complessi è $\C$.
Parte reale $\operatorname{Re}(z)$ | Il numero reale $a$ di $z = a + bi$.
Parte immaginaria $\operatorname{Im}(z)$ | Il numero reale $b$ di $z = a + bi$ (senza la $i$).
Immaginario puro | Numero complesso con parte reale nulla, come $23i$ o $-i$.
Forma $a + bi$ | Il modo di scrivere un numero complesso separando parte reale e parte immaginaria; si chiama anche forma algebrica o cartesiana.
Coniugato (coniugio) $\bar z$ | $\overline{a + bi} = a - bi$: si cambia il segno della parte immaginaria; nel piano è il simmetrico rispetto all'asse reale.
Modulo $\lvert z \rvert$ | $\sqrt{a^2 + b^2}$: numero reale non negativo, distanza di $z$ dall'origine.
Inverso $z^{-1}$ | Per $z \neq 0$, il numero $\frac{\bar z}{\lvert z \rvert^2}$, che moltiplicato per $z$ dà $1$.
Campo | Insieme con somma e prodotto che hanno le nove proprietà della Proposizione 2.2: $\Q$, $\R$, $\C$.
Campo ordinato | Campo con una nozione di maggiore e minore compatibile con i conti; $\R$ lo è, $\C$ no.
Piano complesso | Il piano in cui $a + bi$ è il punto $(a, b)$, oppure il vettore dall'origine a $(a, b)$.
Asse reale | L'asse orizzontale del piano complesso: i numeri reali.
Asse immaginario | L'asse verticale del piano complesso: i numeri $bi$.
Regola del parallelogramma | $z_1 + z_2$ è il quarto vertice del parallelogramma di vertici $0$, $z_1$, $z_2$.
Potenze di $i$ | $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, poi si ripetono con periodo 4.
Distanza tra due numeri complessi | $\lvert z - w \rvert$: la lunghezza del segmento che unisce i punti $z$ e $w$.
```

## Checklist

```checklist
- So spiegare perché $x^2 = -1$ non ha soluzioni reali e che cosa aggiunge il simbolo $i$.
- So riconoscere parte reale e parte immaginaria di un numero complesso, e so che la parte immaginaria è un numero reale.
- So sommare, sottrarre e moltiplicare numeri complessi senza dimenticare che $i^2 = -1$.
- So calcolare $i^n$ per $n$ grande con il resto della divisione per 4.
- So dire perché $\C$ è un campo ma non è ordinato.
- So calcolare coniugato e modulo e usare $z\bar z = |z|^2$.
- So calcolare l'inverso di un numero complesso e dividere moltiplicando per il coniugato del denominatore, con il controllo finale.
- So risolvere un'equazione come $(1 + i)z = 3 + 2i$ e, con le coordinate, un'equazione in cui compare anche $\bar z$.
- So disegnare un numero complesso nel piano, il suo coniugato, la somma con la regola del parallelogramma.
- So tradurre in figure condizioni come $\operatorname{Re}(z) > \operatorname{Im}(z)$ e $|z - c| \le r$.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 2 «Numeri complessi I», pp. 6–9: le sezioni 2.A–2.E sono seguite in ordine, con la pagina accanto a ogni titolo; la Definizione 2.1, la Proposizione 2.2 e l'Esempio 2.3 mantengono la loro numerazione; gli esercizi 2.4, 2.5 e 2.6 sono svolti nella sezione «Esercizi» (esercizi 2, 3 e 4); le Figure 1 e 2 sono ridisegnate con i grafici.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.4.1–1.4.3 (pp. 25–27), Esercizio 1.4.3 (p. 30), §1.5.3 sui campi (p. 36).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): domande 1 del 08/02/2024, del 03/06/2025 e del 03/06/2026, riportate con soluzioni scritte per questi appunti; la tabella degli altri appelli ne indica solo il tipo. Regole d'esame 2025/26 e date 2026/27 come nella lezione L01.
- Le parti **«Oltre le dispense»** (la storia di Cardano e Bombelli, le potenze di $i$, le regole sul coniugato, la distanza, il metodo per disegnare insiemi, il perché $\C$ non è ordinato, gli esercizi che non vengono dalle dispense) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
