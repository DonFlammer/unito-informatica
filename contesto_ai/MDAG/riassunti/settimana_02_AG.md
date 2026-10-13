---
corso: MDAG
modulo: AG
lezione: S2
tipo: riassunto
titolo: "Settimana 2: numeri complessi e polinomi"
data: 2026-10-08
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Riassunto settimanale · Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · 05/10 – 09/10/2026
descrizione: >-
  Riassunto della settimana 2 di Algebra lineare e Geometria (MDAG, parte 2): l'unità immaginaria, i numeri complessi e
  il piano complesso, somma, prodotto, coniugato, modulo e divisione; coordinate polari, forma polare, prodotti,
  potenze e radici n-esime; polinomi, divisione con il resto e Ruffini, radici e molteplicità, teorema fondamentale
  dell'algebra.
lede: >-
  Le tre lezioni della settimana in poche pagine: come si fanno i conti con i numeri complessi, quando conviene la
  forma polare, come si trovano le radici di un polinomio, e le domande per controllarti.
materiale: dispense
scheda:
  Lezioni: "[L02](L02_numeri_complessi_1.html) mar 06/10 · [L03](L03_numeri_complessi_2.html) mer 07/10 · [L04](L04_polinomi.html) gio 08/10, nel canale B"
  Dispense: Buzano e Radeschi 2026, pp. 6–19
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni L02, L03 e L04 di Algebra lineare e Geometria, scritti sulle dispense 2026 del corso
  (R. Buzano, M. Radeschi)
appunti_html: appunti/MDAG/riassunto_settimana_02_AG.html
genera_html: true
---

## In breve

- Nessun numero reale al quadrato dà meno uno. Si aggiunge allora l'**unità immaginaria** $i$, con $i^2 = -1$.
- Un **numero complesso** è un punto del piano: $3 + 2i$ sta 3 passi a destra e 2 in su.
- Il **coniugato** cambia il segno davanti alla $i$; il **modulo** è la distanza dal centro. Per dividere si moltiplica sopra e sotto per il coniugato del numero sotto.
- In **forma polare** un numero è una distanza e un angolo. Nei prodotti le distanze si moltiplicano e gli angoli si sommano.
- Le **radici** $n$-esime di un numero diverso da zero sono sempre $n$, in cerchio.
- Un **polinomio** di grado $n$ ha esattamente $n$ radici complesse, contate con la molteplicità: è il **teorema fondamentale dell'algebra**.

## L02 · Numeri complessi I (mar 06/10)

Un numero complesso è un punto di un foglio a quadretti, descritto da due numeri reali. Si scrive per esempio $3 + 2i$. Il primo è la **parte reale**, il secondo la **parte immaginaria**, senza la $i$. Sul foglio a quadretti è il punto 3 passi a destra e 2 in su.

| Operazione | Come si fa | Esempio |
|---|---|---|
| somma | parte reale con parte reale, immaginaria con immaginaria | $(1 + 2i) + (3 - i) = 4 + i$ |
| prodotto | quattro prodotti, poi $-1$ al posto di $i^2$ | $(3 + 2i)(1 - i) = 5 - i$ |
| coniugato | cambia il segno davanti alla $i$ | il coniugato di $3 + 2i$ è $3 - 2i$ |
| modulo | Pitagora: la radice di $a^2 + b^2$ | $\lvert 3 + 4i \rvert = 5$ |
| potenze di $i$ | si ripetono ogni 4: $i$, $-1$, $-i$, $1$ | $i^7 = -i$, perché 7 diviso 4 dà resto 3 |

> [!METODO] Dividere due numeri complessi
> 1. Scrivi la divisione come frazione.
> 2. Moltiplica sopra e sotto per il **coniugato del numero sotto**: sotto resta un numero reale, il quadrato del modulo.
> 3. Separa la parte reale e la parte immaginaria.
> 4. Controlla moltiplicando.
>
> Per $(1 + i)z = 3 + 2i$: $z = \frac{3 + 2i}{1 + i} = \frac{(3 + 2i)(1 - i)}{2} = \frac{5 - i}{2}$. È il tipo della prima domanda del quiz in tre appelli.

- I numeri complessi formano un **campo**, ma **non sono ordinati**: non ha senso chiedere quale sia il maggiore.
- Nel piano: «parte reale uguale a 2» è una retta verticale; «distanza da $c$ uguale a $r$» è una circonferenza.

::: prova Quanto vale $(2 + i)(2 - i)$? E il modulo di $2 + i$?
$(2 + i)(2 - i) = 4 - i^2 = 5$. Il modulo è la radice di 5: un numero per il suo coniugato dà il quadrato del modulo.
:::

> [!RICORDA]
> - Il prodotto non si fa pezzo per pezzo: servono quattro prodotti.
> - Per dividere, il coniugato del numero sotto.

## L03 · Numeri complessi II (mer 07/10)

Un punto del piano si può dire in due modi: «3 passi a destra e 4 in su», oppure «guarda in quella direzione e fai 5 passi». Il secondo usa una **distanza** e un **angolo**: sono le **coordinate polari**.

- Forma polare: $z = re^{i\vartheta}$. La distanza è il modulo, l'angolo si chiama **argomento**. La scrittura con la $e$ è un'abbreviazione: vuol dire il punto del cerchio di raggio 1 a quell'angolo, cioè $\cos\vartheta + i\sin\vartheta$.
- Gli angoli si misurano in radianti: un giro intero è $2\pi$. Angoli che differiscono di giri interi danno lo stesso punto.

| Operazione | In forma polare |
|---|---|
| prodotto | distanze moltiplicate, angoli sommati |
| quoziente | distanze divise, angoli sottratti |
| potenza $z^n$ | distanza alla $n$, angolo per $n$ |
| moltiplicare per $i$ | un quarto di giro in senso antiorario |

> [!METODO] Le radici n-esime
> Cercare le radici $n$-esime di un numero diverso da zero vuol dire risolvere $z^n = z_0$. Le soluzioni sono sempre **esattamente $n$**.
> 1. La distanza è la radice $n$-esima della distanza di $z_0$.
> 2. Il primo angolo è l'angolo di $z_0$ diviso per $n$.
> 3. Gli altri si ottengono aggiungendo ogni volta un $n$-esimo di giro.
>
> Le soluzioni sono i vertici di un poligono regolare. Per $z^3 = 8$ sono i vertici di un triangolo sul cerchio di raggio 2: il primo è 2, gli altri sono $-1 + \sqrt3\, i$ e $-1 - \sqrt3\, i$.

::: prova Quanto vale $(1 + i)^8$?
$1 + i$ ha distanza $\sqrt2$ e angolo $\frac\pi4$. All'ottava: distanza $(\sqrt2)^8 = 16$, angolo $8 \cdot \frac\pi4 = 2\pi$, cioè un giro intero. Il risultato è 16.
:::

> [!RICORDA]
> - Prodotti e potenze: in forma polare. Somme: in forma cartesiana.
> - Le radici $n$-esime sono $n$ punti in cerchio, a distanze uguali.

## L04 · Polinomi (gio 08/10)

Un **polinomio** funziona come una macchina: metti un numero al posto della lettera ed esce un numero. Il **grado** è l'esponente più alto.

- I polinomi si **dividono con il resto**, come i numeri: dividendo uguale quoziente per divisore più resto. Per dividere per $x - a$ c'è **Ruffini**: abbassa, moltiplica per $a$, somma.
- Una **radice** è un numero che fa uscire zero. **Un numero $a$ è radice esattamente quando $x - a$ divide il polinomio**: il resto di quella divisione è proprio il valore del polinomio in $a$.
- La **molteplicità** dice quante volte $x - a$ ci sta: in $(x - 1)^2(x + 2)$ la radice 1 è doppia.

> [!METODO] Scomporre un polinomio
> 1. Cerca una radice tra i divisori del termine noto: per $x^3 - 6x^2 + 11x - 6$ prova 1, 2, 3, 6 e i loro opposti.
> 2. Con 1 il polinomio vale 0: dividi per $x - 1$ con Ruffini e ottieni $x^2 - 5x + 6$.
> 3. Ripeti, oppure usa la formula del secondo grado: $x^2 - 5x + 6 = (x - 2)(x - 3)$.
>
> Il risultato: $(x - 1)(x - 2)(x - 3)$.

- Un polinomio di grado $n$ ha **al massimo** $n$ radici reali. Tra i complessi ne ha **esattamente** $n$, contate con la molteplicità.
- Se i numeri del polinomio sono reali, le radici non reali vengono a **coppie coniugate**: le radici di $x^2 + 1$ sono $i$ e il suo coniugato.
- Per il secondo grado decide il $\Delta$: positivo due radici reali, zero una doppia, negativo due complesse coniugate.

::: prova È vero che 2 è una radice di $x^3 - 6x^2 + 11x - 6$? Quanto vale il resto della divisione per $x - 2$?
Sì: $8 - 24 + 22 - 6 = 0$. Il resto della divisione per $x - 2$ è il valore in 2, cioè 0.
:::

> [!RICORDA]
> - Radice $a$ vuol dire che $x - a$ divide il polinomio.
> - Coefficienti reali: le radici complesse vengono a coppie coniugate.

## Verso l'esame

- La **domanda sui complessi** del quiz, dal 2024 al 2026: trovare $z$ da un'uguaglianza (divisione), potenze alte e radici (forma polare), «quale di questi numeri è una radice?» (polinomi).
- Le radici dei polinomi tornano nei problemi sugli **autovalori**, nelle lezioni L17 e L18.
- Senza calcolatrice: a lezione e all'esame i conti con le radici e gli angoli si fanno a mano. Servono i seni e i coseni degli angoli notevoli: 30, 45, 60 e 90 gradi.
- Appelli 2026/27: venerdì 22/01/2027 e venerdì 05/02/2027, alle 14:00, con 4 facciate di appunti scritti a mano.

## Domande di ripasso

::: domanda Quanto vale $i^2$? E $i^{10}$?
$i^2 = -1$. $i^{10}$: 10 diviso 4 dà resto 2, quindi $i^{10} = i^2 = -1$.
:::

::: domanda Che cosa sono il coniugato e il modulo di $a + bi$?
Il coniugato è $a - bi$, il riflesso rispetto all'asse orizzontale. Il modulo è la distanza dal centro, la radice di $a^2 + b^2$.
:::

::: domanda Come si divide per un numero complesso?
Si moltiplicano sopra e sotto per il coniugato del numero sotto: sotto resta un numero reale.
:::

::: domanda Come si moltiplicano due numeri in forma polare?
Le distanze si moltiplicano e gli angoli si sommano.
:::

::: domanda Quante soluzioni ha $z^5 = 1$ tra i numeri complessi? Come sono messe?
Cinque: sono i vertici di un pentagono regolare sul cerchio di raggio 1, il primo in 1.
:::

::: domanda Quando un numero $a$ è radice di un polinomio?
Quando il polinomio vale 0 in $a$, cioè quando $x - a$ lo divide senza resto.
:::

::: domanda Che cosa dice il teorema fondamentale dell'algebra?
Che un polinomio di grado $n$ ha esattamente $n$ radici tra i numeri complessi, contate con la molteplicità.
:::

## Fonti

- Le lezioni complete: [L02 · Numeri complessi I](L02_numeri_complessi_1.html), [L03 · Numeri complessi II](L03_numeri_complessi_2.html), [L04 · Polinomi](L04_polinomi.html), con le domande vere degli appelli, gli strumenti interattivi e gli esercizi.
- Dispense 2026 del corso, R. Buzano e M. Radeschi, pp. 6–19.
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
