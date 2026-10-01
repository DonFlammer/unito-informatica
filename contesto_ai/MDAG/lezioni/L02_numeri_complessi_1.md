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
  Nessun numero reale, moltiplicato per sé stesso, dà meno uno: qui si aggiunge un numero nuovo che lo fa. Poi si
  impara a fare i conti con i numeri che ne nascono e a disegnarli come punti di un foglio a quadretti. Sono i conti
  della prima domanda del quiz in molti appelli.
materiale: dispense
scheda:
  Dispense: lezione 2 · pp. 6–9
  Libro: Martelli, §1.4.1–1.4.3 (pp. 25–27)
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 2 «Numeri complessi I»; B. Martelli, Geometria e algebra lineare, §1.4.1–1.4.3 ed Esercizio 1.4.3
file_en: L02_complex_numbers_1.html
appunti_html: appunti/MDAG/L02_numeri_complessi_1.html
genera_html: true
---

## In breve

- Nessun numero reale, moltiplicato per sé stesso, dà meno uno. Si aggiunge allora un numero nuovo che lo fa: si chiama **unità immaginaria** e si scrive $i$.
- Un **numero complesso** è fatto di due numeri reali, come $3 + 2i$. Si disegna come un punto su un foglio a quadretti: qui 3 passi a destra (la **parte reale**) e 2 passi in su (la **parte immaginaria**).
- I conti si fanno come con una lettera qualsiasi. In più, ogni volta che compare $i \cdot i$, al suo posto si scrive $-1$.
- Il **coniugato** è il punto visto allo specchio rispetto alla riga orizzontale: cambia solo il segno davanti alla $i$. Il **modulo** è la distanza del punto dal centro del foglio.
- Per dividere si scrive la divisione come frazione. Poi si moltiplicano il numero sopra e il numero sotto per il coniugato di quello sotto: così sotto resta un numero reale.
- I numeri complessi formano un **campo**, cioè valgono le nove regole dei conti della lezione L01. Però non si possono mettere in ordine dal più piccolo al più grande.
- All'esame: in tre appelli la prima domanda del quiz chiedeva di trovare un numero complesso sconosciuto da un'uguaglianza come $(1 + i)z = 3 + 2i$. Si risolve con una divisione.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Prima di cominciare

### Di che cosa parla questa lezione

Nella lezione L01 ogni famiglia di numeri nasceva da una domanda rimasta senza risposta. L'ultima domanda della lista era: quale numero, moltiplicato per sé stesso, dà meno uno? Tra i numeri reali un numero così non c'è.

In questa lezione quel numero si inventa. Gli si dà un nome e una lettera, e si continua a fare i conti con le regole di sempre. I numeri che nascono così si chiamano numeri complessi.

Per tenerli in testa c'è un'immagine. I numeri reali stanno tutti su una riga: la retta dei numeri. I numeri complessi su una riga non ci stanno, e hanno bisogno di un foglio a quadretti. Ogni numero complesso è un punto del foglio. Per dire dov'è servono due indicazioni: quanti passi a destra e quanti passi in su.

Imparerai a sommarli, a moltiplicarli e a dividerli, e a vedere sul foglio che cosa succede. Sono conti brevi, e all'esame tornano in quasi tutti gli appelli, spesso nella prima domanda del quiz.

Nel resto del corso i numeri complessi servono più avanti: per le radici dei polinomi, nella lezione L04, e per gli autovalori di una matrice, nelle lezioni L17 e L18.

Una sola parte è teorica: la dimostrazione che i numeri complessi non si possono mettere in fila dal più piccolo al più grande. È in un riquadro chiuso, e puoi saltarla.

### Che cosa devi già sapere

Poche cose, e quasi tutte le ripassiamo quando servono.

- **I numeri reali** (lezione L01): gli interi, le frazioni, le radici e i numeri con infinite cifre dopo la virgola. Per esempio $-3$, $\frac 12$ e $\sqrt 2$. Il loro insieme si indica con $\R$.
- **Il quadrato di un numero** (lezione L01): il numero moltiplicato per sé stesso. Per esempio $3^2 = 3 \cdot 3 = 9$.
- **Le nove regole dei conti** e la parola **campo** (lezione L01). Le ricordiamo nella sezione sulle regole dei conti.
- **Il foglio a quadretti con due assi**, cioè il piano cartesiano. Il ripasso è nella sezione «Com'è fatto un numero complesso».
- **Il prodotto di due parentesi**, come $(2 + 3) \cdot (4 + 1)$. Il ripasso è nella sezione sulla somma e sul prodotto.
- **Il teorema di Pitagora** e le radici quadrate. Il ripasso è nella sezione sul modulo.

### Che cosa saprai fare alla fine

- Dire qual è la parte reale e qual è la parte immaginaria di un numero come $4 - i$.
- Sommare e moltiplicare due numeri complessi, per esempio $(7 + i) \cdot (4 - i)$.
- Calcolare una potenza di $i$ con un esponente grande, come $i^{2026}$.
- Calcolare il coniugato, il modulo e l'inverso di un numero complesso.
- Dividere due numeri complessi e risolvere un'equazione come $(1 + i)z = 3 + 2i$.
- Disegnare un numero complesso come punto del piano, e riconoscere una retta o una circonferenza da una condizione scritta con i simboli.

## Una domanda senza risposta tra i numeri reali (p. 6)

Alla fine della lezione L01 era rimasta una domanda senza risposta.

La domanda è: quale numero, moltiplicato per sé stesso, dà $-1$? Con i simboli si scrive così:

$$x^2 = -1$$

Si legge «$x$ al quadrato è uguale a meno uno». La lettera $x$ sta al posto del numero che cerchiamo. Il piccolo 2 in alto è il **quadrato**: vuol dire «moltiplicato per sé stesso». Per esempio $3^2 = 3 \cdot 3 = 9$, dove il puntino è il segno «per».

Una scrittura così, con un uguale e una lettera da trovare, si chiama **equazione**. Un numero che, messo al posto della lettera, rende vera l'uguaglianza si chiama **soluzione** dell'equazione.

### Proviamo con i numeri reali

I **numeri reali** sono tutti i numeri della lezione L01. Il loro insieme si indica con $\R$, che si legge «erre».

Prendiamo qualche numero reale e calcoliamo il suo quadrato.

| Numero | Il conto | Quadrato |
|--:|---|--:|
| $3$ | $3 \cdot 3$ | $9$ |
| $-3$ | $(-3) \cdot (-3)$ | $9$ |
| $\frac 12$ | $\frac 12 \cdot \frac 12$ | $\frac 14$ |
| $-\frac 12$ | $\left(-\frac 12\right) \cdot \left(-\frac 12\right)$ | $\frac 14$ |
| $0$ | $0 \cdot 0$ | $0$ |

Guarda l'ultima colonna: non c'è nessun numero negativo. Non è un caso. Dipende dalla regola dei segni.

> [!RIPASSO] la regola dei segni
> Quando moltiplichi due numeri, il segno del risultato si decide così.
>
> - Più per più fa più: $3 \cdot 3 = 9$.
> - Meno per meno fa più: $(-3) \cdot (-3) = 9$.
> - Più per meno fa meno: $3 \cdot (-3) = -9$.
>
> Per avere un risultato negativo servono due numeri con segni **diversi**.

Nel quadrato il numero è moltiplicato per sé stesso. I due numeri sono uguali, quindi hanno lo stesso segno. Restano tre casi.

- Il numero è positivo: più per più fa più. Il quadrato è positivo.
- Il numero è negativo: meno per meno fa più. Il quadrato è positivo.
- Il numero è zero: il quadrato è zero.

In nessuno dei tre casi il quadrato è negativo. Quindi nessun numero reale, al quadrato, dà $-1$. L'equazione di partenza non ha soluzioni tra i numeri reali.

### L'idea: aggiungere un numero

Nella lezione L01 è già successo tre volte. Mancava la risposta a una domanda, e la famiglia dei numeri è stata allargata: dai naturali agli interi, dagli interi alle frazioni, dalle frazioni ai reali. Qui si fa lo stesso, per la quarta volta.

> [!IDEA]
> Ai numeri reali si aggiunge **un solo** numero nuovo, e si decide che il suo quadrato è $-1$. Poi si continua a fare i conti con le regole di sempre.

I numeri che nascono così si chiamano **numeri complessi**. Le dispense li presentano come un **ampliamento** dei numeri reali, «costruito con lo scopo di ottenere migliori proprietà algebriche».

A parole: una famiglia più grande, che contiene tutti i numeri reali, e in cui più equazioni hanno una soluzione.

### A che cosa servono

Il guadagno è grande. Tra i numeri complessi ha una soluzione **ogni** equazione come quella di partenza, anche quando la $x$ è moltiplicata per sé stessa più di due volte. Questo risultato si chiama teorema fondamentale dell'algebra, e lo trovi nella lezione L04.

È il motivo per cui il corso usa i numeri complessi. Torneranno quando cercherai gli **autovalori** di una matrice, nelle lezioni L17 e L18. Un autovalore è la soluzione di un'equazione, e a volte tra i numeri reali quella soluzione non c'è.

All'esame i numeri complessi contano da subito. In tutti i 15 appelli dal 2024 al 2026 c'è almeno una domanda del quiz sui numeri complessi o sulle radici di un polinomio. In 11 appelli è la prima domanda. I dettagli sono nella sezione «Verso l'esame».

::: prova Quanto fa $(-4) \cdot (-4)$? E quanto fa $(-4)^2$?
Meno per meno fa più: $(-4) \cdot (-4) = 16$. Il quadrato è lo stesso conto scritto in breve, quindi anche $(-4)^2 = 16$.
:::

::: prova Esiste un numero reale che al quadrato dà $-9$?
No. Il quadrato di un numero reale è positivo oppure zero, mai negativo. Per esempio $3^2 = 9$ e $(-3)^2 = 9$: tutti e due positivi.
:::

> [!RICORDA]
> - Il quadrato di un numero reale non è mai negativo, perché meno per meno fa più.
> - Quindi nessun numero reale, al quadrato, dà $-1$.
> - I **numeri complessi** nascono aggiungendo ai numeri reali un numero nuovo, che al quadrato dà $-1$.
> - Nel corso servono per le radici dei polinomi (lezione L04) e per gli autovalori (lezioni L17 e L18).

## Com'è fatto un numero complesso (p. 6)

Il numero nuovo ha bisogno di un nome e di un simbolo.

Si chiama **unità immaginaria** e si scrive con la lettera $i$. Ha una sola proprietà speciale: moltiplicata per sé stessa dà $-1$.

$$i^2 = -1$$

Si legge «$i$ al quadrato è uguale a meno uno».

Il nome «immaginaria» è rimasto dalla storia: quando fu inventata sembrava un numero finto. Oggi è un numero come gli altri, con cui si fanno conti precisi. Una cosa però è sicura: la $i$ **non è un numero reale**, perché nessun numero reale ha il quadrato negativo.

### Dalla i ai numeri complessi

Con la $i$ si possono fare due cose.

**Moltiplicarla per un numero reale.** Due volte $i$ si scrive $2i$. Meno cinque volte $i$ si scrive $-5i$. Tra il numero e la lettera il puntino del «per» non si scrive, come in $2\sqrt 3$ nella lezione L01.

**Sommarle un numero reale.** Per esempio 3 più $2i$:

$$3 + 2i$$

Si legge «tre più due $i$». Questo è un numero complesso.

Il segno più tra i due pezzi **non si può eseguire**. Non c'è modo di fondere il 3 e il $2i$ in un numero solo, come non puoi fondere 3 mele e 2 pere. Il numero resta scritto così, con i suoi due pezzi:

- il pezzo che sta da solo, qui 3;
- il pezzo che moltiplica la $i$, qui 2.

Tutti e due i pezzi sono numeri reali. Quindi un numero complesso è fatto di **due numeri reali**, più la lettera $i$ che li tiene separati.

### Un punto sul foglio a quadretti

Due numeri fanno pensare a un punto su un foglio.

> [!RIPASSO] il piano cartesiano
> Su un foglio a quadretti disegna due righe che si incrociano: una orizzontale e una verticale. Si chiamano **assi**. Il punto in cui si incrociano si chiama **origine**.
>
> Ogni punto del foglio si raggiunge dall'origine con due indicazioni: quanti passi a destra e quanti passi in su. Un passo è un quadretto. I due numeri si scrivono tra parentesi tonde, in quest'ordine: $(3, 2)$ vuol dire «3 passi a destra e 2 passi in su».
>
> Un numero negativo vuol dire «dalla parte opposta». Il punto $(-1, 2)$ sta 1 passo a **sinistra** e 2 in su. Il punto $(3, -2)$ sta 3 passi a destra e 2 **in giù**.
>
> I due numeri si chiamano **coordinate** del punto. Il foglio con i due assi si chiama **piano cartesiano**.

I numeri reali stanno tutti su una riga: la retta dei numeri della lezione L01. Per i numeri complessi una riga non basta, perché ognuno è fatto di due numeri. Serve tutto il foglio.

La regola è questa. Il pezzo che sta da solo dice quanti passi fare a destra. Il pezzo che moltiplica la $i$ dice quanti passi fare in su.

Per esempio, il numero $3 + 2i$ si raggiunge così: parti dall'origine, fai 3 passi a destra e poi 2 passi in su.

```grafico
titolo: Il numero $3 + 2i$ è il punto che sta 3 passi a destra e 2 passi in su
x: -1 5
y: -1 3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
segmento: 0 0 3 0 | ambra | spesso
segmento: 3 0 3 2 | blu | spesso
segmento: 0 2 3 2 | grigio | tratteggio
punto: 3 2 | accento | $3 + 2i$ | ne
testo: 1.5 -0.45 | ambra | "3 passi a destra"
testo: 4 1 | blu | "2 passi in su"
```

Guarda la figura: il punto colorato è $3 + 2i$. Il tratto orizzontale segna i 3 passi a destra, quello verticale i 2 passi in su.

Sull'asse orizzontale c'è scritto «Re» e su quello verticale «Im». Sono le prime lettere di «reale» e di «immaginaria»: tra poco vedrai perché.

Questa immagine ti accompagna per tutta la lezione.

### Come lo scrivono le dispense

Per parlare di un numero complesso qualsiasi servono due lettere al posto dei due pezzi. Le dispense usano $a$ per il pezzo che sta da solo e $b$ per quello che moltiplica la $i$.

> [!DEF] 2.1 · Numeri complessi
> Un **numero complesso** è un oggetto algebrico che si scrive nel modo seguente:
> $$a + bi$$
> dove $a$ e $b$ sono numeri reali arbitrari e $i$ è un nuovo simbolo chiamato **unità immaginaria**.

**Come si legge.**

- $a + bi$ si legge «$a$ più $b$ $i$». La scrittura $bi$ vuol dire «$b$ per $i$».
- Le lettere $a$ e $b$ stanno al posto di due numeri reali. «Arbitrari» vuol dire «qualsiasi»: positivi, negativi, zero, frazioni, radici.
- «Oggetto algebrico» vuol dire: una scrittura con cui si fanno i conti.
- Nel numero $3 + 2i$ di prima, $a$ vale 3 e $b$ vale 2.
- Sul foglio: $a$ passi a destra e $b$ passi in su. È il punto di coordinate $(a, b)$.

Le dispense danno cinque esempi. Per ognuno cerchiamo i due pezzi.

| Numero complesso | $a$ | $b$ | Che cosa notare |
|---|--:|--:|---|
| $\sqrt 7$ | $\sqrt 7$ | $0$ | la $i$ non c'è: è come scrivere $\sqrt 7 + 0i$ |
| $2 + i$ | $2$ | $1$ | la $i$ da sola vuol dire «1 per $i$» |
| $23i$ | $0$ | $23$ | manca il pezzo da solo: è come scrivere $0 + 23i$ |
| $4 - i$ | $4$ | $-1$ | $-i$ vuol dire «$-1$ per $i$» |
| $-1 + \pi i$ | $-1$ | $\pi$ | $b$ può essere un numero reale qualsiasi, anche pi greco, cioè $\pi = 3{,}14\ldots$ |

Il segno meno fa parte del numero $b$. In $4 - i$ il pezzo che moltiplica la $i$ è $-1$, non 1.

Quando $b$ è una radice, di solito la $i$ si scrive davanti: $i\sqrt 3$ al posto di $\sqrt 3\,i$. Così non sembra che la $i$ stia sotto la radice.

### I nomi dei due pezzi

I due pezzi hanno un nome, che userai per tutta la lezione.

- Il numero $a$, quello che sta da solo, si chiama **parte reale**.
- Il numero $b$, quello che moltiplica la $i$, si chiama **parte immaginaria**.

Ecco perché nella figura gli assi sono segnati con «Re» e «Im». Sull'asse orizzontale leggi la parte reale. Su quello verticale leggi la parte immaginaria.

> [!TRAPPOLA] La parte immaginaria non contiene la $i$
> La parte immaginaria è il numero reale $b$, **senza** la $i$. La parte immaginaria di $4 - i$ è $-1$. Non è $-i$.

Due casi particolari tornano spesso.

- **La parte immaginaria è zero.** Il numero è $a + 0i$, cioè soltanto $a$: è un numero reale. Quindi ogni numero reale è anche un numero complesso. Sul foglio sta sull'asse orizzontale, perché fa zero passi in su.
- **La parte reale è zero.** Il numero è $0 + bi$, cioè soltanto $bi$. Si chiama **immaginario puro**. Tre esempi: $23i$, $-i$ e $i\sqrt 2$. Sul foglio sta sull'asse verticale, perché fa zero passi a destra.

### Quando due numeri complessi sono uguali

Due punti del foglio coincidono quando hanno le stesse coordinate: stessi passi a destra, stessi passi in su. Per i numeri complessi vale la stessa cosa.

Due numeri complessi sono uguali quando hanno **la stessa parte reale e la stessa parte immaginaria**. Servono tutte e due le cose insieme.

Un esempio. Ti dicono che $x + yi$ è uguale a $3 - 2i$, dove $x$ e $y$ sono due numeri reali che non conosci. Allora li trovi subito.

- Le parti reali devono essere uguali: $x = 3$.
- Le parti immaginarie devono essere uguali: $y = -2$.

Quindi un'uguaglianza tra numeri complessi vale **due** uguaglianze tra numeri reali. È il trucco che risolve molte equazioni: lo userai negli esercizi 7 e 13.

Nelle dispense questa regola non è scritta a parte: è contenuta nel modo in cui si scrive un numero complesso.

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
> - L'**unità immaginaria** $i$ è un numero nuovo. La sua regola: $i^2 = -1$.
> - Un **numero complesso** si scrive $a + bi$, con $a$ e $b$ numeri reali. Sul foglio è il punto che sta $a$ passi a destra e $b$ passi in su.
> - $a$ è la **parte reale**, $b$ è la **parte immaginaria**. La parte immaginaria è un numero reale, senza la $i$.
> - Due numeri complessi sono uguali quando hanno uguali tutte e due le parti.

## Sommare e moltiplicare (p. 6)

I conti con i numeri complessi si fanno come i conti con una lettera.

Le dispense lo dicono in una riga: i numeri complessi si sommano e si moltiplicano «nel modo usuale, tenendo a mente un'unica nuova relazione», cioè $i^2 = -1$.

«Nel modo usuale» vuol dire: tratta la $i$ come una lettera qualsiasi e usa le regole di sempre. L'unica novità arriva nel prodotto. Ogni volta che compare $i^2$, cioè $i$ per $i$, al suo posto scrivi $-1$.

### La somma

Pensa ai passi sul foglio. Fai 3 passi a destra e 2 in su. Poi fai ancora 1 passo a destra e 5 **in giù**. In tutto ti sei spostato di 4 passi a destra e di 3 in giù.

Con i numeri complessi è lo stesso conto. I passi a destra si sommano tra loro: sono le parti reali. I passi in su si sommano tra loro: sono le parti immaginarie.

È come sommare mele e pere: le mele con le mele, le pere con le pere.

> [!ESEMPIO] · Somma e differenza
> **La somma.** Calcoliamo $(3 + 2i) + (1 - 5i)$.
>
> 1. Somma le parti reali: $3 + 1 = 4$.
> 2. Somma le parti immaginarie: $2 + (-5) = -3$.
> 3. Rimetti insieme i due pezzi: il risultato è $4 - 3i$.
>
> Sul foglio: 4 passi a destra e 3 in giù, come nel racconto di prima.
>
> **La differenza.** Calcoliamo $(3 + 2i) - (1 - 5i)$. Il segno meno davanti a una parentesi cambia il segno di **tutti e due** i pezzi che ci sono dentro.
>
> 1. Togli la seconda parentesi cambiando i segni: $-(1 - 5i)$ diventa $-1 + 5i$.
> 2. Somma le parti reali: $3 - 1 = 2$.
> 3. Somma le parti immaginarie: $2 + 5 = 7$.
> 4. Il risultato è $2 + 7i$.

Le dispense scrivono la regola della somma con le lettere. Il primo numero è $a + bi$. Per il secondo servono altre due lettere: $c$ per la parte reale e $d$ per la parte immaginaria.

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

A parole: la parte reale della somma è la somma delle parti reali. La parte immaginaria della somma è la somma delle parti immaginarie.

### Il prodotto

Per il prodotto serve una regola di scuola: come si moltiplicano due parentesi.

> [!RIPASSO] il prodotto di due parentesi
> Per moltiplicare due somme, ogni pezzo della prima parentesi va moltiplicato per ogni pezzo della seconda. Poi si somma tutto. Con due pezzi per parentesi i prodotti sono **quattro**.
>
> Esempio con $(2 + 3) \cdot (4 + 1)$:
>
> | Quale prodotto | Conto | Risultato |
> |---|---|--:|
> | primo per primo | $2 \cdot 4$ | $8$ |
> | primo per secondo | $2 \cdot 1$ | $2$ |
> | secondo per primo | $3 \cdot 4$ | $12$ |
> | secondo per secondo | $3 \cdot 1$ | $3$ |
>
> La somma dei quattro risultati è $8 + 2 + 12 + 3 = 25$. Controllo per l'altra strada: le due parentesi valgono 5 e 5, e $5 \cdot 5 = 25$.
>
> È la proprietà distributiva della lezione L01 (la regola 9), usata due volte.

Ora lo stesso conto con due numeri complessi. Le dispense scelgono questo prodotto.

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

I passi sono sempre questi tre.

> [!METODO] Moltiplicare due numeri complessi
> 1. Fai i quattro prodotti: ogni pezzo della prima parentesi per ogni pezzo della seconda.
> 2. Dove compare $i^2$, scrivi $-1$. Quel pezzo **cambia segno** e perde la $i$.
> 3. Somma tra loro i pezzi senza la $i$. Poi somma tra loro i pezzi con la $i$.
>
> Non serve una formula a memoria: bastano questi tre passi.

Altri sei prodotti, tutti con lo stesso metodo. Due avvisi sulla scrittura. Un numero o una parentesi attaccati a un'altra parentesi vogliono dire «per»: il puntino si può non scrivere. E una scrittura come $(1 + i)^2$ vuol dire $(1 + i) \cdot (1 + i)$: il numero per sé stesso.

| Prodotto | I prodotti pezzo per pezzo | Con $-1$ al posto di $i^2$ | Risultato |
|---|---|---|--:|
| $3(2 - i)$ | $6 - 3i$ | non c'è $i^2$ | $6 - 3i$ |
| $i(2 + 3i)$ | $2i + 3i^2$ | $2i - 3$ | $-3 + 2i$ |
| $(1 + 2i)(3 - i)$ | $3 - i + 6i - 2i^2$ | $3 - i + 6i + 2$ | $5 + 5i$ |
| $(1 + i)^2$ | $1 + i + i + i^2$ | $1 + i + i - 1$ | $2i$ |
| $(2 + 3i)^2$ | $4 + 6i + 6i + 9i^2$ | $4 + 6i + 6i - 9$ | $-5 + 12i$ |
| $(1 + i)(1 - i)$ | $1 - i + i - i^2$ | $1 - i + i + 1$ | $2$ |

Nella prima riga un numero reale moltiplica un numero complesso: basta moltiplicare per 3 tutti e due i pezzi.

L'ultimo prodotto dà un numero **reale**: la $i$ è sparita. Non è un caso, e lo capirai nella sezione sul modulo.

### La formula con le lettere

Le dispense scrivono i tre passi una volta per tutte, con le lettere:

$$(a + bi) \cdot (c + di) = ac + bci + adi + bd\,i^2 = (ac - bd) + (ad + bc)i$$

Si legge da sinistra a destra. Prima ci sono i quattro prodotti. Poi, al posto di $i^2$, si scrive $-1$: l'ultimo pezzo cambia segno. Alla fine i pezzi senza la $i$ stanno nella prima parentesi, quelli con la $i$ nella seconda.

Una scrittura come $ac$ vuol dire «$a$ per $c$»: tra due lettere il puntino non si scrive.

Nel prodotto c'è un segno meno che nella somma non c'era. Viene tutto dalla regola della $i$.

> [!TRAPPOLA] Non si moltiplica «pezzo per pezzo»
> La somma si fa pezzo per pezzo. Il prodotto **no**.
>
> Prendi $(1 + 2i)(3 - i)$. Se moltiplichi solo le parti reali tra loro e le parti immaginarie tra loro, ottieni $3 - 2i$. È sbagliato: mancano i due prodotti «incrociati», primo per secondo e secondo per primo. Il risultato giusto è $5 + 5i$.
>
> Secondo errore tipico: trattare $i^2$ come $+1$. Nello stesso conto verrebbe $1 + 5i$, sbagliato anche questo.

### Tutti i numeri complessi insieme

L'insieme di tutti i numeri complessi si indica con $\C$, che si legge «ci». È una C con un tratto doppio, come la $\R$ dei numeri reali.

Nella lezione L01 le famiglie dei numeri stavano una dentro l'altra: i naturali $\N$, gli interi $\Z$, i razionali $\Q$ e i reali $\R$. Ora la catena ha un anello in più:

$$\N \subsetneq \Z \subsetneq \Q \subsetneq \R \subsetneq \C$$

Si legge da sinistra a destra: i naturali stanno dentro gli interi, gli interi dentro i razionali, i razionali dentro i reali, i reali dentro i complessi. Il simbolo $\subsetneq$ vuol dire «è contenuto strettamente in»: la famiglia a destra contiene quella a sinistra, e ha qualcosa in più.

Che cosa ha in più $\C$ rispetto a $\R$? Per esempio la $i$: è un numero complesso, ma non è un numero reale.

I conti tra numeri reali, invece, restano quelli di sempre. Con il metodo nuovo, 2 per 3 fa ancora 6: i pezzi con la $i$ valgono zero e spariscono. In una parola: $\C$ **estende** $\R$. Aggiunge numeri nuovi senza toccare quelli vecchi.

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
> - **Somma:** parte reale con parte reale, parte immaginaria con parte immaginaria.
> - **Prodotto:** quattro prodotti, poi $-1$ al posto di $i^2$, poi si raccolgono i pezzi.
> - Il prodotto **non** si fa pezzo per pezzo.
> - L'insieme dei numeri complessi è $\C$, e contiene $\R$.

## Le potenze di i: un giro ogni quattro (oltre le dispense)

Che cosa succede se moltiplichi l'unità immaginaria per sé stessa tante volte?

> [!RIPASSO] le potenze
> Una **potenza** è una moltiplicazione ripetuta. La scrittura $2^3$ si legge «2 alla terza» e vuol dire $2 \cdot 2 \cdot 2 = 8$: il 2 compare tre volte.
>
> Il numero piccolo in alto si chiama **esponente**. Dice quante volte compare il numero scritto sotto. Con l'esponente 2 si legge «al quadrato».
>
> Due casi particolari. Un numero «alla prima» è il numero stesso: $2^1 = 2$. Un numero diverso da zero «alla zero» vale 1, per convenzione: $2^0 = 1$.

Calcoliamo le potenze di $i$ una alla volta. Ogni potenza è quella di prima, moltiplicata ancora una volta per $i$.

| Potenza | Il conto | Risultato |
|---|---|--:|
| $i^1$ | è la $i$ stessa | $i$ |
| $i^2$ | è la regola della $i$ | $-1$ |
| $i^3$ | $i^2 \cdot i = (-1) \cdot i$ | $-i$ |
| $i^4$ | $i^3 \cdot i = (-i) \cdot i = -i^2 = -(-1)$ | $1$ |
| $i^5$ | $i^4 \cdot i = 1 \cdot i$ | $i$ |
| $i^6$ | $i^5 \cdot i = i \cdot i$ | $-1$ |

Alla quarta potenza si arriva a 1. Moltiplicare per 1 non cambia niente, quindi dalla quinta potenza in poi tutto ricomincia da capo. I risultati sono sempre gli stessi quattro, nello stesso ordine: $i$, $-1$, $-i$, $1$.

Sul foglio i quattro risultati sono quattro punti intorno all'origine, tutti a un passo di distanza: in alto, a sinistra, in basso, a destra.

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

Guarda la figura: a ogni moltiplicazione per $i$ si passa al punto successivo, girando in senso antiorario, cioè al contrario delle lancette dell'orologio. Dopo quattro passi il giro è completo e si torna al punto di partenza.

### Il metodo: guardare il resto

Per un esponente grande non serve fare tutti i giri. Basta sapere quanti passi avanzano dopo l'ultimo giro completo.

> [!RIPASSO] la divisione con il resto
> Dividere 15 per 4 «con il resto» vuol dire chiedersi: quante volte il 4 sta nel 15, e quanto avanza?
>
> Il 4 ci sta 3 volte, perché $4 \cdot 3 = 12$. Avanza $15 - 12 = 3$. Si scrive $15 = 4 \cdot 3 + 3$. Il 3 che avanza si chiama **resto**.
>
> Quando dividi per 4, il resto può essere solo 0, 1, 2 oppure 3.

Proviamo con $i^{15}$. Sono quindici $i$ moltiplicate tra loro. Raggruppale a quattro a quattro.

- Vengono 3 gruppi da quattro, e avanzano 3 lettere: è la divisione $15 = 4 \cdot 3 + 3$.
- Ogni gruppo da quattro è $i^4$, che vale 1. Moltiplicare per 1 non cambia niente.
- Restano le 3 lettere avanzate: $i^3$, che vale $-i$.

Quindi $i^{15} = -i$. Conta solo il resto.

> [!METODO] Calcolare una potenza di $i$
> 1. Dividi l'esponente per 4 e guarda il **resto**.
> 2. Leggi il risultato in questa tabella.
>
> | Resto | $0$ | $1$ | $2$ | $3$ |
> |---|---|---|---|---|
> | Risultato | $1$ | $i$ | $-1$ | $-i$ |

Tre esempi.

| Potenza | Divisione dell'esponente per 4 | Resto | Risultato |
|---|---|--:|--:|
| $i^{15}$ | $15 = 4 \cdot 3 + 3$ | $3$ | $-i$ |
| $i^{100}$ | $100 = 4 \cdot 25 + 0$ | $0$ | $1$ |
| $i^{2026}$ | $2026 = 4 \cdot 506 + 2$ | $2$ | $-1$ |

La prima potenza serve nell'esercizio 6.

Un aiuto per i numeri grandi: per trovare il resto della divisione per 4 bastano **le ultime due cifre**. Il motivo è che 100 è un multiplo di 4, quindi le centinaia non lasciano resto. Per 2026 guardi solo 26: siccome $26 = 4 \cdot 6 + 2$, il resto è 2.

### C'è un secondo numero con il quadrato uguale a meno uno

Anche $-i$, al quadrato, dà $-1$. Il conto è questo:

$$(-i)^2 = (-i) \cdot (-i) = i \cdot i = -1$$

Nel secondo passaggio i due segni meno spariscono, perché meno per meno fa più.

Quindi l'equazione da cui siamo partiti, $x^2 = -1$, tra i numeri complessi ha **due** soluzioni: $i$ e $-i$.

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
> - Le potenze di $i$ si ripetono ogni quattro: $i$, $-1$, $-i$, $1$, e poi da capo.
> - Per calcolare una potenza di $i$ si divide l'esponente per 4 e si guarda il resto.
> - Anche $-i$ al quadrato dà $-1$: l'equazione $x^2 = -1$ ha due soluzioni complesse.

## Le regole dei conti: un campo senza ordine (pp. 6–7)

Nei conti delle sezioni precedenti hai usato le regole di sempre senza pensarci.

Hai raccolto i pezzi nell'ordine più comodo. Hai moltiplicato le parentesi un pezzo alla volta. Chi garantisce che con i numeri complessi queste regole valgano ancora? Le dispense lo mettono nero su bianco in una proposizione.

**Ricorda (lezione L01).** Le regole dei conti sono nove.

- Lo 0 nella somma e l'1 nel prodotto non cambiano niente: sono le regole 1 e 5.
- L'ordine non conta, né nella somma né nel prodotto: regole 2 e 6. Per esempio $2 \cdot 5 = 5 \cdot 2$.
- Con tre numeri puoi cominciare da dove vuoi: regole 3 e 7.
- Ogni numero ha un **opposto**, e sommati fanno 0: regola 4. Per esempio $7 + (-7) = 0$.
- Ogni numero diverso da 0 ha un **inverso**, e moltiplicati fanno 1: regola 8. Per esempio $4 \cdot \frac 14 = 1$.
- Moltiplicare una somma è come moltiplicare i due pezzi e poi sommare: regola 9.

Un insieme di numeri in cui valgono tutte e nove si chiama **campo**.

### Le stesse regole, con i numeri complessi

Proviamo alcune di queste regole con i numeri complessi.

**Regola 6: nel prodotto l'ordine non conta.** Moltiplica $1 + i$ per $2 + 3i$, e poi $2 + 3i$ per $1 + i$. I quattro prodotti sono gli stessi, in un ordine diverso: $2$, $3i$, $2i$ e $3i^2$, che vale $-3$. Il risultato è $-1 + 5i$ tutte e due le volte.

**Regole 1 e 5: lo zero e l'uno.** Lo zero dei numeri complessi è $0 + 0i$, cioè il solito 0. Sul foglio è l'origine. L'uno è $1 + 0i$, cioè il solito 1.

**Regola 4: l'opposto.** L'opposto di un numero complesso si trova cambiando il segno a tutti e due i pezzi. L'opposto di $3 + 2i$ è $-3 - 2i$. Controllo: sommandoli, le parti reali danno $3 - 3 = 0$ e le parti immaginarie danno $2 - 2 = 0$.

**Regola 8: l'inverso.** È l'unica regola che richiede un conto vero. Quale numero, moltiplicato per $2 + i$, dà 1? A occhio non si capisce. Lo troviamo nella sezione sull'inverso e sulla divisione.

### Come lo scrivono le dispense

Nella proposizione qui sotto c'è un cambio di lettere a cui fare attenzione. Finora $a$ e $b$ erano i due pezzi di un numero complesso. Qui invece $a$, $b$ e $c$ sono tre numeri complessi **interi**, ognuno con i suoi due pezzi.

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

**Come si legge.**

- Il simbolo $\forall$, una A rovesciata, si legge «per ogni». Il simbolo $\in$ si legge «appartiene a».
- La scrittura $\forall a \in \C$ si legge «per ogni $a$ che appartiene a $\C$». Vuol dire: qualunque numero complesso tu metta al posto della lettera.
- Ogni riga è una delle nove regole dell'elenco di prima, con le lettere al posto dei numeri. «Elemento neutro» è il numero che non cambia niente. «Commutativa» vuol dire che l'ordine non conta. «Associativa» vuol dire che puoi cominciare da dove vuoi. «Distributiva» è la regola 9.
- $-a$ è l'opposto di $a$. La scrittura $a^{-1}$, con un piccolo $-1$ in alto, è l'inverso di $a$: si legge «$a$ alla meno uno».
- $a \neq 0$ si legge «$a$ diverso da zero». Anche tra i numeri complessi lo zero non ha inverso.

Sono le stesse nove righe della Proposizione 1.5 della lezione L01, con $\C$ al posto di $\R$.

Le dispense concludono: «Allora, come $\R$, anche $\C$ è un **campo**.»

Da qui in poi, quando il corso scrive «un campo $\K$», pensa quasi sempre a uno di questi due: $\R$ oppure $\C$. La lettera $\K$ si legge «kappa», e torna nella lezione L05.

### Una lettera sola per un numero complesso

Un'abitudine di scrittura, che da qui in poi useremo sempre. Per non riscrivere ogni volta i due pezzi, a un numero complesso si dà un nome di una sola lettera. Di solito è $z$, che si legge «zeta». Se ne serve un secondo si usa $w$, che si legge «vu doppia».

Per esempio: «prendiamo $z = 3 + 2i$» vuol dire che da lì in poi la lettera $z$ sta al posto di quel numero.

> [!OLTRE] · che cosa ci guadagni
> Siccome valgono le nove regole, con i numeri complessi funzionano tutti i modi di fare i conti che conosci per i numeri reali. Uno servirà nella lezione L04: se un prodotto fa zero, almeno uno dei due numeri è zero. Si chiama **legge di annullamento del prodotto**.

### I numeri complessi non si possono mettere in fila

C'è però una cosa che i numeri reali hanno e i numeri complessi no: l'ordine.

Sulla retta dei numeri, tra due numeri diversi ce n'è sempre uno più a destra: è il maggiore (lezione L01). Per esempio $7 > 4$. Il simbolo $>$ si legge «è maggiore di», e il simbolo rovesciato $<$ si legge «è minore di».

Su un foglio questo non funziona più. Prendi un punto più a destra ma più in basso, e un punto più a sinistra ma più in alto. Quale dei due sarebbe «il maggiore»? Non c'è una risposta sensata.

Le dispense lo scrivono con un punto esclamativo: $\C$ **non è ordinato**, cioè «non esiste una nozione di maggiore e minore fra numeri complessi». È una differenza rispetto a tutte le famiglie viste prima, perché $\N$, $\Z$, $\Q$ e $\R$ sono tutte ordinate.

Il motivo, in una riga delle dispense: in un campo ordinato un quadrato è sempre positivo, ma qui il quadrato di $i$ è $-1$, che è negativo.

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
> - In $\C$ valgono le stesse nove regole dei conti di $\R$: anche $\C$ è un **campo**.
> - L'opposto di un numero complesso si trova cambiando il segno a tutti e due i pezzi.
> - $\C$ **non è ordinato**: tra due numeri complessi non ha senso chiedere quale sia il maggiore.

## Parte reale, parte immaginaria e coniugato (p. 7)

I due pezzi di un numero complesso hanno un nome dall'inizio della lezione. Adesso ricevono anche un simbolo.

Prendiamo $z = 3 + 4i$.

- La sua parte reale è 3. Si scrive $\operatorname{Re}(z) = 3$ e si legge «la parte reale di zeta è 3».
- La sua parte immaginaria è 4. Si scrive $\operatorname{Im}(z) = 4$ e si legge «la parte immaginaria di zeta è 4».

Sono le sigle «Re» e «Im» che hai già visto sugli assi delle figure.

Tutti e due i simboli funzionano come una piccola macchina: entra un numero complesso, esce un numero **reale**.

Le dispense lo scrivono così.

> [!DEF] Parte reale e parte immaginaria (p. 7)
> Sia $z = a + bi$ un numero complesso. I numeri $a$ e $b$ sono detti rispettivamente la **parte reale** e la **parte immaginaria** di $z$. Scriviamo $a = \operatorname{Re}(z)$ e $b = \operatorname{Im}(z)$. Il numero $z$ è reale, cioè appartiene al sottoinsieme $\R \subset \C$, se e solo se la sua parte immaginaria è nulla.

**Come si legge.**

- «Sia $z = a + bi$» vuol dire: prendiamo un numero complesso e chiamiamolo $z$.
- «Sono detti rispettivamente» vuol dire: il primo numero, $a$, si chiama parte reale. Il secondo, $b$, si chiama parte immaginaria.
- $\R \subset \C$ si legge «erre è contenuto in ci». Vuol dire che ogni numero reale è anche un numero complesso. Il simbolo $\subset$ è quello della lezione L01.
- «Nulla» vuol dire «uguale a zero».
- «Se e solo se» vuol dire che le due cose sono vere insieme oppure false insieme. Qui: un numero complesso è reale esattamente quando la sua parte immaginaria è zero.

### Il coniugato: il punto allo specchio

Torna al foglio. Il numero $3 + 2i$ sta 3 passi a destra e 2 passi in su.

Ora appoggia uno specchio lungo l'asse orizzontale. Nello specchio il punto si vede dall'altra parte: sempre 3 passi a destra, ma 2 passi **in giù**. È il numero $3 - 2i$.

```grafico
titolo: Il coniugato è il riflesso del punto, con lo specchio messo lungo l'asse orizzontale
x: -1 5
y: -3 3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
segmento: 3 2 3 -2 | grigio | tratteggio
punto: 3 2 | accento | $z = 3 + 2i$ | ne
punto: 3 -2 | viola | $\bar z = 3 - 2i$ | se
testo: 1.2 0.3 | "lo specchio"
```

Guarda la figura: i due punti stanno uno sopra e uno sotto l'asse orizzontale, alla stessa distanza.

Il punto riflesso si chiama **coniugato**. Per trovarlo non serve il disegno: basta cambiare il segno davanti alla $i$. La parte reale resta com'è.

Il coniugato di un numero $z$ si scrive con una lineetta sopra: $\bar z$. Si legge «zeta coniugato», oppure «zeta segnato». Quando l'espressione è lunga la lineetta copre tutto: $\overline{z + w}$ è il coniugato della somma.

> [!DEF] Coniugato (p. 7)
> Il **coniugio** (o **coniugato**) di $z = a + bi$ è il numero complesso
> $$\bar z = a - bi$$
> ottenuto da $z$ cambiando il segno della sua parte immaginaria.

**Come si legge.** «Coniugio» e «coniugato» sono due nomi della stessa cosa. La formula dice: se un numero ha parte reale $a$ e parte immaginaria $b$, il suo coniugato ha parte reale $a$ e parte immaginaria $-b$. Cambia **solo** il segno della parte immaginaria.

Qualche esempio, con le due parti e il coniugato.

| $z$ | $\operatorname{Re}(z)$ | $\operatorname{Im}(z)$ | $\bar z$ |
|---|--:|--:|---|
| $3 + 4i$ | $3$ | $4$ | $3 - 4i$ |
| $-2 + i$ | $-2$ | $1$ | $-2 - i$ |
| $1 - 3i$ | $1$ | $-3$ | $1 + 3i$ |
| $5i$ | $0$ | $5$ | $-5i$ |
| $7$ | $7$ | $0$ | $7$ |

Guarda l'ultima riga: il numero 7 è uguale al suo coniugato. Sul foglio si capisce perché. Il 7 sta sull'asse orizzontale, cioè proprio sullo specchio, e un punto sullo specchio coincide con il suo riflesso.

Succede per tutti i numeri reali, e solo per loro. Le dispense lo scrivono con i simboli: $z \in \R \iff z = \bar z$. La freccia a due punte si legge «se e solo se». Tutta la riga si legge: «zeta appartiene a erre se e solo se zeta è uguale a zeta coniugato».

Il perché, con i conti. Se un numero è uguale al suo coniugato, le due parti immaginarie devono essere uguali: $b = -b$. L'unico numero uguale al suo opposto è lo zero. Quindi la parte immaginaria è zero, e il numero è reale.

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
> - $\operatorname{Re}(z)$ è la parte reale di $z$, e $\operatorname{Im}(z)$ è la parte immaginaria. Sono due numeri reali.
> - Il **coniugato** $\bar z$ si ottiene cambiando il segno davanti alla $i$. Sul foglio è il riflesso rispetto all'asse orizzontale.
> - Un numero è uguale al suo coniugato esattamente quando è reale.

## Il modulo: la distanza dall'origine (p. 7)

Di un punto sul foglio ci si può chiedere quanto è lontano dall'origine.

Prendiamo $3 + 4i$: 3 passi a destra e 4 passi in su. Camminando lungo i quadretti, i passi sono 7. Ma la distanza si misura in linea retta, lungo la diagonale. Quanto è lunga?

Il tratto a destra, il tratto in su e la diagonale formano un triangolo con un angolo retto. Per un triangolo così c'è il teorema di Pitagora.

> [!RIPASSO] il teorema di Pitagora
> In un triangolo con un angolo retto, i due lati corti si chiamano *cateti* e il lato lungo si chiama *ipotenusa*.
>
> Il teorema dice: il quadrato di un cateto, più il quadrato dell'altro cateto, è uguale al quadrato dell'ipotenusa.
>
> Con i cateti lunghi 3 e 4: $3^2 + 4^2 = 9 + 16 = 25$. Questo è il quadrato dell'ipotenusa. L'ipotenusa è il numero positivo che al quadrato dà 25, cioè la **radice quadrata** di 25: $\sqrt{25} = 5$.

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

Guarda la figura: i due cateti sono lunghi 3 e 4, la diagonale è lunga 5. Quindi il punto $3 + 4i$ dista 5 dall'origine.

Questa distanza si chiama **modulo** del numero complesso. Si scrive con due barre verticali: $|z|$, che si legge «modulo di zeta». Per il nostro numero, $|3 + 4i| = 5$.

Il conto si fa sempre con gli stessi quattro passi.

1. Fai il quadrato della parte reale.
2. Fai il quadrato della parte immaginaria.
3. Somma i due quadrati.
4. Fai la radice quadrata della somma.

Ecco i quattro passi su sei numeri.

| $z$ | Somma dei due quadrati | $\lvert z \rvert$ |
|---|---|--:|
| $3 + 4i$ | $9 + 16 = 25$ | $5$ |
| $1 - i$ | $1 + 1 = 2$ | $\sqrt 2$ |
| $1 + 2i$ | $1 + 4 = 5$ | $\sqrt 5$ |
| $-5$ | $25 + 0 = 25$ | $5$ |
| $2i$ | $0 + 4 = 4$ | $2$ |
| $5 - 12i$ | $25 + 144 = 169$ | $13$ |

Nella seconda riga la parte immaginaria è $-1$, e il suo quadrato è 1. Il segno meno sparisce sempre, perché meno per meno fa più.

Quando la somma non è un quadrato perfetto, come 2 oppure 5, la radice resta scritta così: $\sqrt 2$, $\sqrt 5$ (lezione L01).

Le dispense scrivono i quattro passi in una formula.

> [!DEF] Modulo (p. 7)
> Il **modulo** di $z = a + bi$ è il numero reale
> $$|z| = \sqrt{a^2 + b^2}.$$

**Come si legge.** «Il modulo di zeta è la radice quadrata di $a$ al quadrato più $b$ al quadrato.» Sono i quattro passi di prima, scritti con le lettere: $a$ è la parte reale, $b$ è la parte immaginaria. Il risultato è un numero **reale** e non è mai negativo, perché è una distanza.

Due osservazioni.

**Le barre sono quelle del valore assoluto.** Nella lezione L01 le due barre indicavano il valore assoluto, cioè il numero senza il segno meno. Non è un caso. Per un numero reale il modulo è proprio il valore assoluto: nella quarta riga della tabella, il modulo di $-5$ è 5. Sulla retta dei numeri è la distanza dallo zero.

**Quando il modulo è zero.** Le dispense osservano che il modulo è nullo quando $z = 0$, ed è «strettamente positivo» in tutti gli altri casi. A parole: l'unico punto a distanza zero dall'origine è l'origine stessa. Con i conti: i due quadrati non sono mai negativi, e la loro somma fa zero solo se sono zero tutti e due.

### Un numero per il suo coniugato

Ora mettiamo insieme il coniugato e il modulo. Moltiplichiamo $3 + 4i$ per il suo coniugato.

> [!ESEMPIO] · Il prodotto $(3 + 4i)(3 - 4i)$
> I quattro prodotti:
>
> | Quale prodotto | Conto | Risultato |
> |---|---|--:|
> | primo per primo | $3 \cdot 3$ | $9$ |
> | primo per secondo | $3 \cdot (-4i)$ | $-12i$ |
> | secondo per primo | $4i \cdot 3$ | $12i$ |
> | secondo per secondo | $4i \cdot (-4i)$ | $-16i^2$ |
>
> I due pezzi con la $i$ sono $-12i$ e $12i$. Sommati fanno zero, e spariscono.
>
> L'ultimo pezzo: al posto di $i^2$ scrivi $-1$, e viene $-16 \cdot (-1) = 16$.
>
> Risultato: $9 + 16 = 25$. È un numero reale. Ed è $5^2$, cioè il quadrato del modulo.

Non è una coincidenza. Con qualunque numero complesso succedono le stesse due cose: i pezzi con la $i$ si cancellano, e restano i due quadrati sommati. Le dispense lo scrivono così:

$$z \cdot \bar z = (a + bi) \cdot (a - bi) = a^2 + b^2 = |z|^2$$

Si legge: «zeta per zeta coniugato è uguale al modulo di zeta, al quadrato». È la formula più usata della lezione.

Ora si capisce anche l'ultima riga della tabella dei sei prodotti. Lì $(1 + i)(1 - i)$ dava 2. Sono un numero e il suo coniugato, e i due quadrati sommati fanno $1 + 1 = 2$.

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
> - Il **modulo** $|z|$ è la distanza del punto dall'origine. Si calcola con Pitagora: $|a + bi| = \sqrt{a^2 + b^2}$.
> - Il modulo è un numero reale, mai negativo. Vale zero solo per il numero zero.
> - Un numero per il suo coniugato dà il quadrato del modulo: $z \cdot \bar z = |z|^2$. È un numero reale.

## L'inverso e la divisione (pp. 7–8)

Manca ancora un'operazione: la divisione.

La regola 8 del campo promette che ogni numero complesso diverso da zero ha un inverso. Ma come si trova? Prendiamo $2 + i$. Il suo inverso è «1 diviso $2 + i$», cioè la frazione

$$\frac 1{2 + i}$$

Così com'è, questa scrittura non dice dove sta il punto sul foglio. Vogliamo riscriverla nella forma solita, con una parte reale e una parte immaginaria. Il problema è la $i$ che sta **sotto** la linea di frazione.

Nella lezione L01 c'era un problema simile: una radice sotto la linea di frazione. Si risolveva moltiplicando sopra e sotto per un numero scelto bene, che faceva sparire la radice.

Qui si fa lo stesso, e il numero giusto lo conosci già: è il **coniugato** del numero sotto. Un numero per il suo coniugato dà un numero reale, quindi la $i$ sotto sparisce.

> [!RIPASSO] moltiplicare sopra e sotto per lo stesso numero
> In una frazione il numero sopra la linea si chiama *numeratore*, quello sotto si chiama *denominatore*.
>
> Se moltiplichi sopra e sotto per lo stesso numero, diverso da zero, la frazione non cambia valore. Per esempio $\frac 12 = \frac{1 \cdot 3}{2 \cdot 3} = \frac 36$: mezza torta è uguale a tre sesti di torta.
>
> Il motivo: moltiplicare sopra e sotto per 3 è come moltiplicare per $\frac 33$, che vale 1.

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

Il metodo funziona con qualunque numero complesso diverso da zero. Le dispense lo scrivono in una formula.

> [!PROP] · Inverso di un numero complesso (p. 7)
> Come nei numeri razionali e reali, ogni numero complesso $z \neq 0$ ha un **inverso** $z^{-1}$ rispetto all'operazione di moltiplicazione, dato da
> $$z^{-1} = \frac{\bar z}{|z|^2}.$$

**Come si legge.**

- $z \neq 0$ si legge «zeta diverso da zero». Lo zero non ha inverso, come tra i numeri reali.
- $z^{-1}$ si legge «zeta alla meno uno». È l'inverso di $z$, cioè il numero che moltiplicato per $z$ dà 1. Si scrive anche $\frac 1z$.
- La formula dice: l'inverso è il coniugato, diviso per il quadrato del modulo.
- Sotto la linea c'è il quadrato del modulo, che è un numero reale e non è zero. Per questo la divisione si fa un pezzo alla volta.

Con le due parti in vista, la stessa formula diventa:

$$(a + bi)^{-1} = \frac{a - bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}\,i$$

**Perché funziona.** Le dispense lo controllano moltiplicando il numero per il suo inverso. Deve venire 1:

$$z \cdot z^{-1} = \frac{z \cdot \bar z}{|z|^2} = \frac{|z|^2}{|z|^2} = 1$$

Nel secondo passaggio si usa la formula della sezione precedente: un numero per il suo coniugato dà il quadrato del modulo. Così sopra e sotto c'è lo stesso numero, e la frazione vale 1.

Un altro inverso, con lo stesso metodo. Il numero $3 + 4i$ ha coniugato $3 - 4i$, e il quadrato del suo modulo è $9 + 16 = 25$. Quindi il suo inverso è $\frac{3 - 4i}{25}$, cioè $\frac 3{25} - \frac 4{25}i$.

### Dividere due numeri complessi

Dividere per un numero vuol dire moltiplicare per il suo inverso. In pratica si usa lo stesso trucco: si moltiplica sopra e sotto per il coniugato del numero sotto.

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

### Equazioni con un numero complesso da trovare

Con la divisione si risolvono le equazioni in cui il numero da trovare è moltiplicato per un numero noto.

> [!RIPASSO] un'equazione di primo grado
> Un'equazione come $2x = 6$ chiede: quale numero, moltiplicato per 2, dà 6? Si risolve dividendo per 2 tutti e due i lati: $x = \frac 62 = 3$. Controllo: $2 \cdot 3 = 6$.
>
> «Di primo grado» vuol dire che la lettera compare da sola, senza quadrati o altre potenze.

Con i numeri complessi si fa nello stesso modo. Prendi questa equazione:

$$(1 + 2i) \cdot z = 4 + 3i$$

Chiede: quale numero complesso, moltiplicato per $1 + 2i$, dà $4 + 3i$? Si divide per $1 + 2i$ tutti e due i lati:

$$z = \frac{4 + 3i}{1 + 2i}$$

Questa divisione l'abbiamo appena fatta: viene $z = 2 - i$.

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
> - L'inverso di $z$ è il coniugato diviso per il quadrato del modulo: $z^{-1} = \frac{\bar z}{|z|^2}$.
> - Per dividere, moltiplica sopra e sotto per il **coniugato del numero sotto**: sotto resta un numero reale.
> - Alla fine controlla sempre moltiplicando.
> - Un'equazione come $(1 + 2i)z = 4 + 3i$ si risolve dividendo.

## Il piano complesso (pp. 8–9)

Fin dall'inizio abbiamo disegnato i numeri complessi come punti di un foglio a quadretti. Adesso quel foglio riceve il suo nome.

Le dispense lo dicono così: mentre i numeri reali formano una **retta**, i numeri complessi formano un **piano**, che si chiama **piano complesso**. Ogni numero complesso $a + bi$ corrisponde al punto di coordinate $(a, b)$ del piano cartesiano.

Anche i due assi hanno un nome.

- L'asse orizzontale si chiama **asse reale**. È la vecchia retta dei numeri: contiene tutti i numeri reali, cioè i numeri con la parte immaginaria uguale a zero.
- L'asse verticale si chiama **asse immaginario**. Contiene tutti gli immaginari puri, cioè i numeri del tipo $bi$.

Le dispense usano anche due parole di scuola: l'asse orizzontale è l'asse delle *ascisse*, quello verticale è l'asse delle *ordinate*.

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

Guarda la figura. Il numero $-3$ sta sull'asse reale. Il numero $2i$ sta sull'asse immaginario. Il numero $-2 - 2i$ sta in basso a sinistra: 2 passi a sinistra e 2 in giù.

### Punto oppure freccia

Nella figura il numero $2 + i$ è disegnato come una freccia, non come un punto. Per le dispense è la stessa cosa. Un numero complesso si può vedere come un punto, oppure come un **vettore** «applicato nell'origine» e diretto verso quel punto.

Un vettore è una freccia: parte dall'origine e arriva nel punto. Puoi pensarla come un'istruzione di spostamento: «2 passi a destra e 1 in su». I vettori sono i protagonisti del corso dalla lezione L05 in poi.

Con la freccia il modulo ha un significato ancora più diretto: è la **lunghezza della freccia**. Le dispense lo fanno notare nella lezione L03.

### Coniugato e opposto nel piano

Il coniugato lo conosci già: è il riflesso rispetto all'asse reale. Anche questo le dispense lo dicono nella lezione L03.

L'**opposto** di un numero si ottiene cambiando il segno a tutti e due i pezzi. L'opposto di $3 + 2i$ è $-3 - 2i$: 3 passi a sinistra e 2 in giù. Sul piano sta dall'altra parte dell'origine, alla stessa distanza. È come far fare alla freccia mezzo giro intorno all'origine.

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

Guarda la figura: la freccia in basso a destra è il coniugato, quella in basso a sinistra è l'opposto. Non confonderli. Il coniugato cambia **un** segno, l'opposto ne cambia **due**.

### La somma: la regola del parallelogramma

Nella sezione sulla somma abbiamo sommato i passi: quelli a destra tra loro, quelli in su tra loro. Sul piano questo conto diventa un disegno.

Le dispense usano due numeri che chiamano $z_1$ e $z_2$. Si legge «zeta uno» e «zeta due». I numerini in basso servono solo a distinguere il primo numero dal secondo.

Prendiamo $z_1 = 1 + 3i$ e $z_2 = 4 + i$. Prima la somma con i conti.

- Parti reali: $1 + 4 = 5$.
- Parti immaginarie: $3 + 1 = 4$.

Quindi la somma è $5 + 4i$.

Ora con il disegno. Parti dall'origine e segui la freccia di $z_1$: 1 passo a destra e 3 in su. Da lì fai lo spostamento di $z_2$: 4 passi a destra e 1 in su. Arrivi nel punto $5 + 4i$.

Se fai prima lo spostamento di $z_2$ e poi quello di $z_1$, arrivi nello stesso punto. È la regola 2: in una somma l'ordine non conta.

I due percorsi disegnano una figura con quattro lati, paralleli a due a due: un **parallelogramma**. Le sue quattro punte si chiamano **vertici**. Tre vertici stanno nell'origine, in $z_1$ e in $z_2$. Il quarto vertice è la somma.

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

Questa costruzione si chiama **regola del parallelogramma**. È lo stesso modo in cui si sommano i vettori del piano, che ritroverai nella lezione L05.

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

### E il prodotto?

Per le dispense il prodotto di due numeri complessi è «apparentemente più complicato» da disegnare. Si capisce bene solo con le coordinate polari, nella lezione L03.

Un assaggio però si può già dare: **moltiplicare per $i$ fa girare il punto di un quarto di giro** intorno all'origine, in senso antiorario. Proviamo due volte di seguito, partendo da $2 + i$.

| Conto | Pezzo per pezzo | Risultato | Dove sta il punto |
|---|---|---|---|
| $i \cdot (2 + i)$ | $2i + i^2$ | $-1 + 2i$ | 1 passo a sinistra, 2 in su |
| $i \cdot (-1 + 2i)$ | $-i + 2i^2$ | $-2 - i$ | 2 passi a sinistra, 1 in giù |

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

Guarda la figura: le tre frecce sono lunghe uguali, e tra una freccia e la successiva c'è un angolo retto, cioè un angolo di 90 gradi. È lo stesso giro che hai visto con le potenze di $i$. Lì il punto di partenza era 1.

### Prova con lo strumento

Lo strumento qui sotto mostra queste operazioni sul piano. Ecco che cosa provare.

- Nel modo **z + w** trascina i due punti $z$ e $w$. Il parallelogramma si aggiorna, e sotto il disegno leggi la somma con le sue due parti.
- Scegli poi il modo **coniugato e inverso di z**. Vedi il coniugato, specchiato rispetto all'asse reale, e l'inverso, scritto $1/z$. La barra obliqua vuol dire «diviso».
- Trascina $z$ lontano dall'origine e poi vicino. Quando il modulo di $z$ è più grande di 1, l'inverso sta **dentro** il cerchio di raggio 1. Quando è più piccolo di 1, l'inverso sta **fuori**. Il motivo è nell'esercizio 8: il modulo dell'inverso è 1 diviso il modulo del numero.

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
> - I numeri complessi sono i punti del **piano complesso**: $a + bi$ è il punto $(a, b)$.
> - L'**asse reale** è quello orizzontale, l'**asse immaginario** è quello verticale.
> - La somma segue la **regola del parallelogramma**: è il quarto vertice.
> - Il modulo è la lunghezza della freccia. Il modulo di una differenza è la distanza tra i due punti.

## Disegnare insiemi di numeri complessi (oltre le dispense)

Un tipo di esercizio chiede di disegnare tutti i numeri complessi che rispettano una condizione.

Le dispense non spiegano il metodo, ma lo chiedono nel loro esercizio 2.6, che qui è l'esercizio 9. L'idea è sempre la stessa: tradurre la condizione in una frase sul punto, e poi riconoscere la figura.

L'insieme da disegnare è scritto con le parentesi graffe, come nella lezione L01. Per esempio:

$$\{z \in \C \mid \operatorname{Re}(z) = 2\}$$

Si legge: «l'insieme dei numeri complessi $z$ per cui la parte reale di $z$ è uguale a 2». Le graffe dicono che è un insieme. La barretta verticale si legge «per cui». Dopo la barretta c'è la condizione.

### Cinque condizioni, una alla volta

**La parte reale è uguale a 2.** La parte reale dice quanti passi a destra. I punti che vanno bene stanno tutti 2 passi a destra dell'origine, a qualunque altezza. Formano una **retta verticale**.

**La parte immaginaria è maggiore di 1.** Vanno bene i punti che stanno più in alto dell'altezza 1. Formano un **semipiano**, cioè una metà del piano: quella sopra la retta orizzontale di altezza 1. La retta è esclusa, perché lì la parte immaginaria è uguale a 1, non maggiore.

**Il modulo è uguale a 3.** Il modulo è la distanza dall'origine. I punti a distanza 3 dall'origine formano una **circonferenza**: il centro è l'origine, il raggio è 3.

**La distanza dal punto $i$ è al massimo 1.** Con i simboli si scrive $|z - i| \le 1$. Il simbolo $\le$ si legge «minore o uguale». Il modulo di una differenza è la distanza tra i due punti. Vanno bene i punti sulla circonferenza di centro $i$ e raggio 1, e anche tutti quelli dentro. La figura piena si chiama **disco**.

**La distanza da 1 è uguale alla distanza da meno 1.** Con i simboli si scrive $|z - 1| = |z + 1|$. Attenzione al secondo modulo: sommare 1 è come sottrarre $-1$, quindi è la distanza dal punto $-1$. I punti che distano ugualmente dai due numeri stanno a metà strada: formano l'**asse immaginario**.

### Il metodo con le coordinate

Quando la figura non si riconosce a occhio, si passa alle coordinate del punto.

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

Le cinque condizioni di prima, riscritte con il metodo.

| Condizione | Con $x$ e $y$ | Figura |
|---|---|---|
| $\operatorname{Re}(z) = 2$ | $x = 2$ | retta verticale |
| $\operatorname{Im}(z) > 1$ | $y > 1$ | semipiano sopra la retta $y = 1$, retta esclusa |
| $\lvert z \rvert = 3$ | $x^2 + y^2 = 9$ | circonferenza di centro $0$ e raggio $3$ |
| $\lvert z - i \rvert \le 1$ | $x^2 + (y - 1)^2 \le 1$ | disco di centro $i$ e raggio $1$, bordo compreso |
| $\lvert z - 1 \rvert = \lvert z + 1 \rvert$ | $x = 0$ | l'asse immaginario |

L'ultima riga non si indovina a occhio. Controlliamola con i conti.

1. La prima differenza è $z - 1 = (x - 1) + yi$. Il quadrato del suo modulo è $(x - 1)^2 + y^2$.
2. La seconda è $z + 1 = (x + 1) + yi$. Il quadrato del suo modulo è $(x + 1)^2 + y^2$.
3. Due moduli sono uguali quando sono uguali i loro quadrati:
   $$(x - 1)^2 + y^2 = (x + 1)^2 + y^2.$$
4. Svolgi i due quadrati. Il primo è $(x - 1)(x - 1)$, cioè $x^2 - 2x + 1$. Il secondo è $(x + 1)(x + 1)$, cioè $x^2 + 2x + 1$.
5. Togli da tutti e due i lati i pezzi uguali: $x^2$, $1$ e $y^2$. Resta $-2x = 2x$.
6. Togli $2x$ da tutti e due i lati: resta $-4x = 0$. Quindi $x = 0$.

I punti con $x = 0$ fanno zero passi a destra: sono quelli dell'asse immaginario.

Un ultimo esempio in figura: il disco di centro $1 + i$ e raggio 2.

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
> Nel libro di Martelli questa lezione corrisponde al §1.4, parti 1.4.1 «Definizione», 1.4.2 «Coniugio, norma e inverso» (con l'Esempio 1.4.1, che è il 2.3 delle dispense) e 1.4.3 «Il piano complesso», alle pp. 25–27 del libro. L'Esercizio 1.4.3 (p. 30) elenca le proprietà del modulo e del coniugato, tra cui quelle dell'esercizio 2.5 delle dispense. Il §1.5.3 (p. 36) spiega i campi in generale.

::: prova Che figura formano i numeri complessi con $|z| = 2$?
Sono i punti a distanza 2 dall'origine: la circonferenza di centro $0$ e raggio 2.
:::

::: prova Che figura formano i numeri complessi con $|z - 3| < 1$?
$|z - 3|$ è la distanza dal punto 3. Vanno bene i punti a distanza **minore** di 1: il disco di centro 3 e raggio 1, senza il bordo.
:::

> [!RICORDA]
> - Parte reale uguale a un numero: una retta verticale. Parte immaginaria uguale a un numero: una retta orizzontale.
> - $|z - c| = r$ è la circonferenza di centro $c$ e raggio $r$. Con $\le$ al posto dell'uguale è il disco pieno.
> - Nei casi meno chiari scrivi $z = x + yi$ e traduci la condizione con $x$ e $y$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $i$ | «i» | l'unità immaginaria: il numero nuovo, con il quadrato uguale a $-1$ | $i \cdot i = -1$ |
| $a + bi$ | «a più b i» | un numero complesso: $a$ passi a destra e $b$ passi in su | $3 + 2i$ |
| $\R$ | «erre» | l'insieme dei numeri reali | $-3,\ \sqrt 2$ |
| $\C$ | «ci» | l'insieme dei numeri complessi | $3 + 2i$ |
| $\K$ | «kappa» | un campo: nel corso, $\R$ oppure $\C$ | |
| $z$, $w$ | «zeta», «vu doppia» | nomi di una lettera per un numero complesso | $z = 3 + 2i$ |
| $z_1$, $z_2$ | «zeta uno», «zeta due» | due numeri complessi: il numerino in basso li distingue | $z_1 = 1 + 3i$ |
| $\in$ | «appartiene a» | sta dentro l'insieme | $i \in \C$ |
| $\subset$ | «è contenuto in» | tutti gli elementi del primo insieme stanno nel secondo | $\R \subset \C$ |
| $\subsetneq$ | «è contenuto strettamente in» | è contenuto, e il secondo ha qualcosa in più | $\R \subsetneq \C$ |
| $\forall$ | «per ogni» | vale qualunque elemento tu scelga | $\forall a \in \C$ |
| $\iff$ | «se e solo se» | le due frasi sono vere insieme o false insieme | $z \in \R \iff z = \bar z$ |
| $\neq$ | «diverso da» | non uguale | $z \neq 0$ |
| $x^2$ | «x al quadrato» | $x$ per $x$ | $3^2 = 9$ |
| $i^n$ | «i alla enne» | la $i$ moltiplicata per sé stessa $n$ volte | $i^3 = -i$ |
| $\sqrt a$ | «radice di a» | il numero non negativo che al quadrato dà $a$ | $\sqrt{25} = 5$ |
| $\operatorname{Re}(z)$ | «parte reale di zeta» | il pezzo che sta da solo | $\operatorname{Re}(3 + 4i) = 3$ |
| $\operatorname{Im}(z)$ | «parte immaginaria di zeta» | il numero che moltiplica la $i$ | $\operatorname{Im}(3 + 4i) = 4$ |
| $\bar z$ | «zeta coniugato» | $z$ con il segno cambiato davanti alla $i$ | $\overline{3 + 4i} = 3 - 4i$ |
| $\lvert z \rvert$ | «modulo di zeta» | la distanza del punto dall'origine | $\lvert 3 + 4i \rvert = 5$ |
| $\lvert z - w \rvert$ | «modulo di zeta meno vu doppia» | la distanza tra il punto $z$ e il punto $w$ | $\lvert (4 + 5i) - (1 + i) \rvert = 5$ |
| $-z$ | «meno zeta», «l'opposto di zeta» | $z$ con tutti e due i segni cambiati | $-(3 + 2i) = -3 - 2i$ |
| $z^{-1}$, $\frac 1z$ | «zeta alla meno uno», «uno su zeta» | l'inverso: moltiplicato per $z$ dà 1 | $(2 + i)^{-1} = \frac{2 - i}5$ |
| $(a, b)$ | «il punto a, b» | il punto del piano con quelle due coordinate | $(3, 2)$ |
| $\le$, $\ge$ | «minore o uguale», «maggiore o uguale» | come $<$ e $>$, ma è permesso anche l'uguale | $\lvert z - i \rvert \le 1$ |
| $\{z \in \C \mid \dots\}$ | «l'insieme dei numeri complessi zeta per cui…» | tutti i numeri complessi che rispettano la condizione scritta dopo la barretta | $\{z \in \C \mid \lvert z \rvert = 3\}$ |

## Verso l'esame

**La prova in due righe.** Il quiz ha 10 domande a risposta multipla: 5 risposte, una sola giusta. Poi ci sono 2 problemi da 11 punti, corretti solo a chi fa almeno 6 punti nel quiz. Si hanno 2 ore, senza calcolatrice, con 4 facciate di appunti scritti a mano. Gli appelli 2026/27 di Algebra lineare sono il 22/01/2027 e il 05/02/2027, alle 14:00. Le regole complete e le fonti sono nella lezione L01.

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

**In pratica chiede:** c'è un numero complesso che non conosci, e si chiama $z$. La scrittura $z \in \C$ vuol dire proprio «$z$ è un numero complesso». Sai una cosa sola: se lo moltiplichi per $1 + i$, viene $3 + 2i$. «Soddisfa» vuol dire «rende vera l'uguaglianza». Devi prima trovare $z$. Poi devi calcolare 2 per $z$ per $5 + i$.

**Primo tempo: trovare $z$.** È un'equazione, e si risolve con una divisione:

$$z = \frac{3 + 2i}{1 + i}$$

1. Il numero sotto è $1 + i$. Il suo coniugato è $1 - i$.
2. Sotto: $(1 + i)(1 - i)$ è il quadrato del modulo, cioè $1^2 + 1^2 = 2$.
3. Sopra: $(3 + 2i)(1 - i)$. I quattro prodotti sono $3$, $-3i$, $2i$ e $-2i^2$. L'ultimo vale $+2$.
4. Raccogli sopra. Pezzi senza la $i$: $3 + 2 = 5$. Pezzi con la $i$: $-3i + 2i = -i$. Sopra c'è $5 - i$.
5. Quindi $z = \frac{5 - i}2$.

**Secondo tempo: l'espressione richiesta.**

1. Calcola 2 per $z$. Il 2 davanti e il 2 sotto si semplificano, e resta $5 - i$.
2. Moltiplica per $5 + i$. I due numeri $5 - i$ e $5 + i$ sono uno il coniugato dell'altro. Il loro prodotto è il quadrato del modulo: $5^2 + 1^2 = 26$.

**La risposta è $26$.**

**Controllo del primo tempo.** Moltiplica $1 + i$ per $5 - i$: i quattro prodotti sono $5$, $-i$, $5i$ e $-i^2 = 1$, in tutto $6 + 4i$. Diviso 2 fa $3 + 2i$: è il numero a destra dell'equazione.

**La risposta sbagliata più tentatrice è $26i$.** Viene fuori se nel primo tempo moltiplichi il numero sopra per $1 + i$, invece che per il coniugato $1 - i$. Sopra verrebbe $1 + 5i$, e alla fine $(1 + 5i)(5 + i) = 26i$.

### Le altre due domande dello stesso tipo

> [!ESEMPIO] · Appello del 08/02/2024, domanda 1
> **Il testo:** «Trovare il numero $z \in \C$ tale che $(i - 1)(i - 2)z = (i + 1)(i + 2)(i + 3)$». Le risposte: $10 + 3i$; $i - 3$; $30 + 10i$; $3i - 1$; $1 - 30i$.
>
> **In pratica chiede:** trova il numero complesso $z$ che rende vera l'uguaglianza. Prima però bisogna svolgere i prodotti a sinistra e a destra.
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
> **In pratica chiede:** trova $z$ dall'equazione, sommagli $i$, e poi calcola l'inverso del risultato.
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
2. Prima cerco i punti con $x = y$, cioè con gli stessi passi a destra e in su. Per esempio $1 + i$, $2 + 2i$, $-1 - i$. Formano una retta obliqua che passa per l'origine. Si chiama **bisettrice**, perché taglia a metà l'angolo tra i due assi.
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
poligono: 9 0 9 6 -5 6 -5 -6 9 -6 9 0 4 0 3.932 -0.518 3.732 -1 3.414 -1.414 3 -1.732 2.518 -1.932 2 -2 1.482 -1.932 1 -1.732 0.586 -1.414 0.268 -1 0.068 -0.518 0 0 0.068 0.518 0.268 1 0.586 1.414 1 1.732 1.482 1.932 2 2 2.518 1.932 3 1.732 3.414 1.414 3.732 1 3.932 0.518 4 0 | viola | sottile
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
Piano complesso | Il foglio a quadretti su cui $a + bi$ è il punto $(a, b)$, oppure la freccia dall'origine a quel punto.
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
