---
corso: MDAG
modulo: AG
lezione: L03
titolo: Numeri complessi II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L03
descrizione: >-
  Appunti della lezione L03 di Algebra lineare e Geometria (MDAG, parte 2): coordinate polari, forma esponenziale,
  modulo e argomento di un numero complesso, prodotto e inverso in forma polare, identità di Eulero, potenze e
  radici n-esime, con un ripasso di seno e coseno, quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Un altro modo di dire dove sta un numero complesso: invece di «quanto a destra e quanto in su», una distanza e una
  direzione. Scritti così, i prodotti diventano giri e allungamenti, e le potenze alte e le radici si calcolano in
  poche righe, senza calcolatrice. È l'argomento della domanda sui numeri complessi in quasi due appelli su tre.
materiale: dispense
scheda:
  Dispense: lezione 3 · pp. 10–14
  Libro: Martelli, §1.4.4–1.4.6 (pp. 27–31)
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 3 «Numeri complessi II»; B. Martelli, Geometria e algebra lineare, §1.4.4–1.4.6
appunti_html: appunti/MDAG/L03_numeri_complessi_2.html
genera_html: true
---

## In breve

- Un punto del piano si può indicare in due modi: «3 passi a destra e 4 in su», oppure «guarda in quella direzione e fai 5 passi». Il secondo modo usa una **distanza** e un **angolo**: sono le **coordinate polari**.
- Un numero complesso scritto con distanza e angolo è in **forma polare**. La distanza si chiama **modulo**, l'angolo si chiama **argomento**.
- Le dispense usano un'abbreviazione: $e^{i\vartheta}$ vuol dire «il punto sul cerchio di raggio 1 all'angolo $\vartheta$».
- Per **moltiplicare** due numeri complessi in forma polare: le distanze si moltiplicano, gli angoli si sommano. Moltiplicare per $i$ vuol dire girare di un quarto di giro.
- Una **potenza** è un prodotto ripetuto: la distanza si eleva, l'angolo si moltiplica. Le **radici** $n$-esime di un numero sono sempre $n$ punti, messi in cerchio a distanze uguali.
- All'esame: potenze alte, prodotti in forma polare e radici sono stati la domanda sui complessi in 9 appelli su 15 dal 2024 al 2026.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Ripasso: angoli, seno e coseno (oltre le dispense)

Le dispense usano angoli, seno e coseno senza spiegarli: li danno per noti dalla scuola. Qui c'è tutto quello che serve per questa lezione, e niente di più. Se li ricordi bene, salta alla sezione dopo.

### Gli angoli in radianti

Immagina una pista circolare con il raggio lungo 1 metro. Parti da un punto e cammini lungo la pista. Quanta strada fai in un giro completo?

La lunghezza di una circonferenza è $2\pi$ volte il raggio. Qui il raggio è 1, quindi un giro completo è lungo $2\pi$ metri, circa 6,28.

> [!RIPASSO] il numero $\pi$
> $\pi$ si legge «pi greco». È il numero che dice quante volte il diametro di un cerchio ci sta nella sua circonferenza: circa $3{,}14$. Una circonferenza di raggio $r$ è lunga $2\pi r$.

L'idea dei **radianti** è misurare un angolo con la **strada fatta sulla pista**:

- un giro intero è lungo $2\pi$, quindi l'angolo giro misura $2\pi$;
- mezzo giro è lungo la metà, $\pi$, quindi l'angolo piatto misura $\pi$;
- un quarto di giro, cioè l'angolo retto, misura $\frac\pi2$.

I gradi e i radianti sono due unità di misura per la stessa cosa, come i chilometri e le miglia. La regola per passare dagli uni agli altri: $180°$ corrisponde a $\pi$. Quindi un grado vale $\frac{\pi}{180}$, e per passare da gradi a radianti si moltiplica per $\frac{\pi}{180}$.

Un esempio: $60°$.

1. $60 \cdot \frac{\pi}{180} = \frac{60\pi}{180}$.
2. Semplifico dividendo sopra e sotto per 60: $\frac{60\pi}{180} = \frac{\pi}{3}$.

Quindi $60°$ è $\frac\pi3$ radianti. Ecco la tabella degli angoli che servono:

| Gradi | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ | $120°$ | $135°$ | $150°$ | $180°$ | $270°$ | $360°$ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Radianti | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\frac{2\pi}3$ | $\frac{3\pi}4$ | $\frac{5\pi}6$ | $\pi$ | $\frac{3\pi}2$ | $2\pi$ |

Gli angoli si misurano partendo dalla semiretta orizzontale verso destra e girando in **senso antiorario**, cioè al contrario delle lancette dell'orologio. Un angolo negativo gira nel senso delle lancette. Per esempio $-\frac\pi2$ è un quarto di giro verso il basso: porta nello stesso punto di $\frac{3\pi}2$, tre quarti di giro verso l'alto.

Per gli angoli si usa spesso una lettera greca: $\vartheta$, che si legge «teta». A volte anche $\varphi$, «fi», e $\alpha$, «alfa».

::: prova Quanto vale in radianti l'angolo di $45°$? E l'angolo di $270°$?
$45 \cdot \frac{\pi}{180} = \frac{45\pi}{180} = \frac\pi4$, dividendo sopra e sotto per 45.

$270 \cdot \frac{\pi}{180} = \frac{270\pi}{180} = \frac{3\pi}2$, dividendo sopra e sotto per 90. Sono tre quarti di giro.
:::

### Seno e coseno sul cerchio

Torna sulla pista. Mettila su un foglio a quadretti, con il centro nell'origine degli assi. La pista è la **circonferenza unitaria**: il cerchio con centro nell'origine e raggio 1.

Parti dal punto $(1, 0)$, quello più a destra, e cammina in senso antiorario per un angolo $\vartheta$. Ti fermi in un punto della pista. Quel punto ha due coordinate:

- la prima (quanto sei a destra) si chiama **coseno** di $\vartheta$, e si scrive $\cos\vartheta$;
- la seconda (quanto sei in alto) si chiama **seno** di $\vartheta$, e si scrive $\sin\vartheta$.

$$\text{il punto all'angolo } \vartheta \text{ è } (\cos\vartheta,\ \sin\vartheta).$$

Questa è la definizione di seno e coseno, e tutte le regole che seguono si leggono sul disegno. Nella figura l'angolo è $\frac\pi3$: il punto è a destra di $\frac 12$ e in alto di $\frac{\sqrt 3}2$.

```grafico
titolo: Sulla circonferenza unitaria il punto di angolo $\vartheta$ è $(\cos\vartheta, \sin\vartheta)$; qui $\vartheta = \frac\pi3$, $\cos\vartheta = \frac 12$, $\sin\vartheta = \frac{\sqrt 3}2$
x: -0.3 1.5
y: -0.3 1.3
nomi: $x$ $y$
arco: 0 0 1 0 pi/2 | grigio
arco: 0 0 0.25 0 pi/3 | ambra
segmento: 0 0 1/2 sqrt(3)/2 | accento | spesso
segmento: 1/2 0 1/2 sqrt(3)/2 | grigio | tratteggio
segmento: 0 sqrt(3)/2 1/2 sqrt(3)/2 | grigio | tratteggio
punto: 1 0 | blu | $0$ | ne
punto: sqrt(3)/2 1/2 | blu | $\frac\pi6$ | e
punto: sqrt(2)/2 sqrt(2)/2 | blu | $\frac\pi4$ | ne
punto: 1/2 sqrt(3)/2 | accento | $\frac\pi3$ | ne
punto: 0 1 | blu | $\frac\pi2$ | ne
testo: 0.3 0.12 | ambra | $\vartheta$
testo: 0.5 -0.1 | $\frac 12$
testo: -0.14 0.866 | $\frac{\sqrt 3}2$
```

I valori da sapere sono questi. All'esame non c'è la calcolatrice, quindi conviene metterli sul foglio delle 4 facciate.

| $\vartheta$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\pi$ | $\frac{3\pi}2$ |
|---|---|---|---|---|---|---|---|
| $\cos\vartheta$ | $1$ | $\frac{\sqrt 3}2$ | $\frac{\sqrt 2}2$ | $\frac 12$ | $0$ | $-1$ | $0$ |
| $\sin\vartheta$ | $0$ | $\frac 12$ | $\frac{\sqrt 2}2$ | $\frac{\sqrt 3}2$ | $1$ | $0$ | $-1$ |

Un modo per ricordare la tabella: da $0$ a $\frac\pi2$ il seno vale $\frac{\sqrt 0}2, \frac{\sqrt 1}2, \frac{\sqrt 2}2, \frac{\sqrt 3}2, \frac{\sqrt 4}2$. Il coseno fa lo stesso al contrario.

### Gli altri tre quarti del cerchio

Il cerchio si divide in quattro parti uguali, i **quadranti**. Negli altri tre quadranti i numeri sono gli stessi della tabella; **cambiano solo i segni**. Basta guardare dove sta il punto:

| Quadrante | Angoli | Il punto è… | Coseno | Seno |
|---|---|---|---|---|
| primo | da $0$ a $\frac\pi2$ | in alto a destra | $+$ | $+$ |
| secondo | da $\frac\pi2$ a $\pi$ | in alto a sinistra | $-$ | $+$ |
| terzo | da $\pi$ a $\frac{3\pi}2$ | in basso a sinistra | $-$ | $-$ |
| quarto | da $\frac{3\pi}2$ a $2\pi$ | in basso a destra | $+$ | $-$ |

Tre esempi:

- $\frac{2\pi}3$ è $\pi - \frac\pi3$: mezzo giro meno un sesto di giro. Sta nel secondo quadrante. Quindi $\cos\frac{2\pi}3 = -\frac 12$ e $\sin\frac{2\pi}3 = \frac{\sqrt 3}2$.
- $\frac{5\pi}4$ è $\pi + \frac\pi4$. Sta nel terzo quadrante. Quindi $\cos\frac{5\pi}4 = -\frac{\sqrt 2}2$ e anche $\sin\frac{5\pi}4 = -\frac{\sqrt 2}2$.
- $\frac{5\pi}3$ è $2\pi - \frac\pi3$: un giro meno un sesto di giro. Sta nel quarto quadrante. Quindi $\cos\frac{5\pi}3 = \frac 12$ e $\sin\frac{5\pi}3 = -\frac{\sqrt 3}2$.

### Le regole che servono

Le prime quattro si leggono sul disegno.

| Regola | Perché è vera | Esempio |
|---|---|---|
| $\cos^2\vartheta + \sin^2\vartheta = 1$ | il punto è a distanza 1 dall'origine (Pitagora) | $\left(\frac 12\right)^2 + \left(\frac{\sqrt 3}2\right)^2 = \frac 14 + \frac 34 = 1$ |
| $\cos(-\vartheta) = \cos\vartheta$, $\sin(-\vartheta) = -\sin\vartheta$ | girare all'indietro dà il punto riflesso rispetto all'asse orizzontale | $\sin\left(-\frac\pi6\right) = -\frac 12$ |
| $\cos(\vartheta + 2\pi) = \cos\vartheta$, $\sin(\vartheta + 2\pi) = \sin\vartheta$ | un giro in più riporta nello stesso punto | $\cos\frac{7\pi}3 = \cos\frac\pi3 = \frac 12$ |
| $\cos(\vartheta + \pi) = -\cos\vartheta$, $\sin(\vartheta + \pi) = -\sin\vartheta$ | mezzo giro in più porta nel punto opposto | $\cos\frac{4\pi}3 = -\frac 12$ |

La scrittura $\cos^2\vartheta$ vuol dire $(\cos\vartheta)^2$, cioè il coseno moltiplicato per sé stesso.

Le ultime due sono le **formule di addizione**. Non si leggono sul disegno e vanno ricordate: servono solo per capire da dove viene la regola del prodotto, più avanti.

$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta,$$

$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta.$$

::: prova Quanto valgono $\cos\frac{3\pi}4$ e $\sin\frac{3\pi}4$?
$\frac{3\pi}4 = \pi - \frac\pi4$: tre quarti di mezzo giro, nel secondo quadrante. Lì il coseno è negativo e il seno positivo. Quindi $\cos\frac{3\pi}4 = -\frac{\sqrt 2}2$ e $\sin\frac{3\pi}4 = \frac{\sqrt 2}2$.
:::

> [!RICORDA]
> - Un giro intero è $2\pi$ radianti, mezzo giro è $\pi$, un quarto di giro è $\frac\pi2$.
> - Il punto della circonferenza di raggio 1 all'angolo $\vartheta$ è $(\cos\vartheta, \sin\vartheta)$.
> - Negli altri quadranti i valori della tabella restano gli stessi; cambiano i segni.

## Due modi per dire dove sta un punto (pp. 10–11)

Sei in una piazza e devi spiegare a un amico dove trovarti. Puoi dirlo in due modi:

- «da dove sei, fai 3 passi verso est e 4 verso nord»;
- «guarda in quella direzione e fai 5 passi dritto».

Il primo modo sono le **coordinate cartesiane** della lezione L02: quanto ti sposti in orizzontale, quanto in verticale. Il secondo usa una **direzione** e una **distanza**.

Perché proprio 5 passi? Gli spostamenti di 3 e di 4 sono i due lati di un triangolo rettangolo, e la strada dritta è il terzo lato. Per Pitagora la sua lunghezza è $\sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.

### Il nome e i simboli

Il secondo modo si chiama **coordinate polari**. Un punto diverso dall'origine si descrive con due numeri:

- $r$, la **distanza** dall'origine: quanto è lunga la freccia che va dall'origine al punto;
- $\vartheta$, l'**angolo** tra quella freccia e la semiretta orizzontale verso destra, misurato in senso antiorario.

Un esempio con un angolo della tabella. Il punto $(1, \sqrt 3)$ sta 1 a destra e $\sqrt 3$ (circa 1,73) in su.

1. La distanza, con Pitagora: $r = \sqrt{1^2 + (\sqrt 3)^2} = \sqrt{1 + 3} = \sqrt 4 = 2$.
2. Per l'angolo divido le due coordinate per la distanza. Ottengo il punto sulla circonferenza di raggio 1 nella stessa direzione: $\left(\frac 12, \frac{\sqrt 3}2\right)$.
3. Nella tabella, $\frac 12$ e $\frac{\sqrt 3}2$ sono il coseno e il seno di $\frac\pi3$. Quindi $\vartheta = \frac\pi3$.

Le coordinate polari del punto sono $(r, \vartheta) = \left(2, \frac\pi3\right)$: «guarda a $60°$ e fai 2 passi».

```grafico
titolo: Coordinate polari del punto $1 + i\sqrt 3$: distanza $r = 2$ dall'origine e angolo $\vartheta = \frac\pi3$ con l'asse reale
x: -1 3
y: -0.5 2.5
nomi: $\operatorname{Re}$ $\operatorname{Im}$
arco: 0 0 0.5 0 pi/3 | ambra
segmento: 1 0 1 sqrt(3) | grigio | tratteggio
segmento: 0 sqrt(3) 1 sqrt(3) | grigio | tratteggio
vettore: 1 sqrt(3) | accento | spesso | $1 + i\sqrt 3$ | ne
testo: 0.35 1.05 | accento | $r = 2$
testo: 0.72 0.25 | ambra | $\vartheta = \frac\pi3$
testo: 1 -0.2 | $x = 1$
testo: -0.45 1.732 | $y = \sqrt 3$
```

Guarda la figura: la freccia lunga 2 e l'arco dell'angolo. Le scritte sugli assi, $\operatorname{Re}$ e $\operatorname{Im}$, ricordano che l'asse orizzontale è quello dei numeri reali e l'asse verticale quello dei numeri immaginari (lezione L02).

### Andare e tornare

Dalle coordinate polari si torna a quelle cartesiane così. Il punto sulla circonferenza di raggio 1 all'angolo $\vartheta$ è $(\cos\vartheta, \sin\vartheta)$. Il nostro punto è nella stessa direzione ma $r$ volte più lontano. Quindi basta moltiplicare tutte e due le coordinate per $r$:

$$x = r\cos\vartheta, \qquad y = r\sin\vartheta.$$

Con il punto di prima: $x = 2 \cdot \cos\frac\pi3 = 2 \cdot \frac 12 = 1$ e $y = 2 \cdot \sin\frac\pi3 = 2 \cdot \frac{\sqrt 3}2 = \sqrt 3$. Torna $(1, \sqrt 3)$.

Le dispense lo scrivono così.

> [!DEF] 3.1 · Coordinate polari
> Un punto $(x, y)$ del piano diverso dall'origine si può identificare con la lunghezza $r$ del vettore corrispondente e l'angolo $\vartheta$ formato dal vettore con l'asse reale. Le **coordinate polari** del punto sono la coppia $(r, \vartheta)$. Per passare dalle coordinate polari alle coordinate cartesiane $(x, y)$ basta usare le formule
> $$x = r\cos\vartheta, \qquad y = r\sin\vartheta.$$
> Viceversa,
> $$r = \sqrt{x^2 + y^2}, \qquad \cos\vartheta = \frac{x}{\sqrt{x^2 + y^2}}, \qquad \sin\vartheta = \frac{y}{\sqrt{x^2 + y^2}}.$$

**Come si legge.**

- «Diverso dall'origine»: per il punto $(0, 0)$ la distanza è 0, e l'angolo non ha senso. Per questo l'origine è esclusa.
- «Il vettore corrispondente» è la freccia dall'origine al punto. $r$ è la sua lunghezza, quindi è sempre un numero **positivo**.
- La prima coppia di formule va dalle polari alle cartesiane: è il conto che hai appena fatto.
- La seconda va al contrario. $r$ si trova con Pitagora. Poi coseno e seno sono le coordinate divise per $r$: è il passo 2 dell'esempio.
- L'angolo non è uno solo. $\vartheta$ e $\vartheta + 2\pi$ indicano la stessa direzione, perché un giro in più riporta nello stesso posto. Ci torniamo più avanti.

### Due esempi per ogni verso

> [!ESEMPIO] · Da polari a cartesiane
> - $(r, \vartheta) = \left(2, \frac\pi6\right)$. Dalla tabella $\cos\frac\pi6 = \frac{\sqrt 3}2$ e $\sin\frac\pi6 = \frac 12$. Quindi $x = 2 \cdot \frac{\sqrt 3}2 = \sqrt 3$ e $y = 2 \cdot \frac 12 = 1$. Il punto è $(\sqrt 3, 1)$.
> - $(r, \vartheta) = \left(4, \frac{3\pi}4\right)$. L'angolo è nel secondo quadrante: $\cos\frac{3\pi}4 = -\frac{\sqrt 2}2$ e $\sin\frac{3\pi}4 = \frac{\sqrt 2}2$. Quindi $x = 4 \cdot \left(-\frac{\sqrt 2}2\right) = -2\sqrt 2$ e $y = 4 \cdot \frac{\sqrt 2}2 = 2\sqrt 2$.
> - $(r, \vartheta) = (3, \pi)$. Mezzo giro: $\cos\pi = -1$ e $\sin\pi = 0$. Quindi $x = 3 \cdot (-1) = -3$ e $y = 3 \cdot 0 = 0$. Il punto $(-3, 0)$ sta sulla semiretta orizzontale verso sinistra.

> [!ESEMPIO] · Da cartesiane a polari
> - $(1, 1)$. La distanza: $r = \sqrt{1 + 1} = \sqrt 2$. Coseno e seno: $\frac 1{\sqrt 2} = \frac{\sqrt 2}2$ tutti e due. Nella tabella è l'angolo $\frac\pi4$.
> - $(-\sqrt 3, 1)$. La distanza: $r = \sqrt{3 + 1} = 2$. Coseno $-\frac{\sqrt 3}2$, seno $\frac 12$. Coseno negativo e seno positivo: il punto è in alto a sinistra, nel secondo quadrante. Senza segni, i valori $\frac{\sqrt 3}2$ e $\frac 12$ sono quelli di $\frac\pi6$. Nel secondo quadrante l'angolo diventa $\pi - \frac\pi6 = \frac{5\pi}6$.
> - $(0, -2)$. La distanza è 2. Coseno 0, seno $-1$: il punto è dritto verso il basso, a tre quarti di giro. L'angolo è $\frac{3\pi}2$, oppure $-\frac\pi2$ girando all'indietro.
> - $(1, -\sqrt 3)$. La distanza è $\sqrt{1 + 3} = 2$. Coseno $\frac 12$, seno $-\frac{\sqrt 3}2$: quarto quadrante. L'angolo è $-\frac\pi3$, oppure $\frac{5\pi}3$.

> [!METODO] Trovare le coordinate polari di un punto
> 1. Calcola la distanza: radice della somma dei quadrati delle due coordinate.
> 2. Dividi le due coordinate per la distanza: ottieni il coseno e il seno dell'angolo.
> 3. Guarda i **segni** di coseno e seno: ti dicono il quadrante.
> 4. Cerca nella tabella l'angolo del primo quadrante con gli stessi valori senza segno. Chiamalo $\alpha$. Portalo nel quadrante giusto: $\pi - \alpha$ nel secondo, $\pi + \alpha$ nel terzo, $-\alpha$ nel quarto.
> 5. Controllo: distanza per coseno e distanza per seno devono ridare le coordinate di partenza.

::: prova Trova le coordinate polari del punto $(0, 3)$ e del punto $(-2, 0)$.
$(0, 3)$: distanza 3. È dritto verso l'alto, a un quarto di giro: $\vartheta = \frac\pi2$. Coordinate polari $\left(3, \frac\pi2\right)$.

$(-2, 0)$: distanza 2. È dritto verso sinistra, a mezzo giro: $\vartheta = \pi$. Coordinate polari $(2, \pi)$.
:::

> [!TRAPPOLA] Il coseno da solo non basta per l'angolo
> I punti $(1, \sqrt 3)$ e $(1, -\sqrt 3)$ hanno lo stesso coseno, $\frac 12$. Ma il primo è in alto, all'angolo $\frac\pi3$, e il secondo in basso, all'angolo $-\frac\pi3$. Anche il rapporto $\frac yx$ inganna: $(1, 1)$ e $(-1, -1)$ danno tutti e due 1, ma gli angoli sono $\frac\pi4$ e $\frac{5\pi}4$. Chi usa solo la tangente $\tan\vartheta = \frac yx$, o l'arcotangente della calcolatrice (che all'esame comunque non c'è), sbaglia quadrante. Guarda sempre coseno **e** seno, oppure fai il disegno.

> [!RICORDA]
> - Le coordinate polari di un punto sono la distanza $r$ dall'origine e l'angolo $\vartheta$.
> - Dalle polari alle cartesiane: $x = r\cos\vartheta$ e $y = r\sin\vartheta$.
> - Per l'angolo guarda insieme il segno del coseno e quello del seno.

## Un numero complesso con distanza e angolo (pp. 10–11)

Nella lezione L02 ogni numero complesso era un punto del piano a quadretti: la parte reale diceva quanto andare a destra, la parte immaginaria quanto andare in su. Adesso quel punto lo sappiamo dire anche con una distanza e un angolo. Che cosa diventa il numero?

Prendi $1 + i\sqrt 3$: è il punto $(1, \sqrt 3)$ della sezione di prima, a distanza 2 e all'angolo $\frac\pi3$. Al posto di 1 e di $\sqrt 3$ scrivo $2\cos\frac\pi3$ e $2\sin\frac\pi3$:

$$1 + i\sqrt 3 = 2\cos\frac\pi3 + i \cdot 2\sin\frac\pi3 = 2\left(\cos\frac\pi3 + i\sin\frac\pi3\right).$$

Nell'ultimo passo ho raccolto il 2. Fuori dalla parentesi c'è la distanza; dentro c'è il punto del cerchio di raggio 1 nella direzione giusta.

Con un numero qualsiasi $z = x + yi$, a distanza $r$ e all'angolo $\vartheta$, il conto è lo stesso:

$$z = x + yi = r\cos\vartheta + (r\sin\vartheta)i = r(\cos\vartheta + i\sin\vartheta).$$

Questa scrittura si chiama **forma trigonometrica** di $z$. Negli appelli compare spesso così, per esempio $z = 2\cos\frac\pi4 + 2i\sin\frac\pi4$.

Le dispense notano subito una cosa: la distanza $r$ è il **modulo** di $z$ della lezione L02, quello che si scrive $|z|$ e si legge «modulo di zeta».

$$|z| = \sqrt{x^2 + y^2} = r.$$

### Il coniugato

Ricorda dalla lezione L02: il **coniugato** di $z = x + yi$ è $\bar z = x - yi$, e si legge «zeta segnato». Nel disegno è il punto riflesso nello specchio dell'asse orizzontale.

Con distanza e angolo: lo specchio non cambia la distanza, ma l'angolo cambia segno. Se $z$ è all'angolo $\vartheta$, il riflesso è all'angolo $-\vartheta$. Il conto conferma, con le regole del ripasso ($\cos(-\vartheta) = \cos\vartheta$ e $\sin(-\vartheta) = -\sin\vartheta$):

$$r\bigl(\cos(-\vartheta) + i\sin(-\vartheta)\bigr) = r(\cos\vartheta - i\sin\vartheta) = x - yi.$$

### L'abbreviazione $e^{i\vartheta}$

Scrivere ogni volta $\cos\vartheta + i\sin\vartheta$ è lungo. Le dispense usano un'abbreviazione:

$$e^{i\vartheta} = \cos\vartheta + i\sin\vartheta.$$

Si legge «e alla i teta». Per questo corso è **solo un simbolo**: un modo breve di scrivere «il punto della circonferenza di raggio 1 all'angolo $\vartheta$». Non c'è da calcolare nessuna potenza.

Con l'abbreviazione, ogni numero complesso diverso da zero si scrive con la sua distanza e il suo angolo:

$$z = re^{i\vartheta}.$$

Per esempio $1 + i\sqrt 3 = 2e^{i\pi/3}$. La scrittura $e^{i\pi/3}$ è lo stesso di $e^{i\frac\pi3}$: la barra dentro l'esponente è una frazione.

Le dispense lo scrivono così.

> [!DEF] Forma polare, modulo e argomento (pp. 10–11)
> Si scrive
> $$e^{i\vartheta} = \cos\vartheta + i\sin\vartheta.$$
> In questo modo ogni numero complesso $z \neq 0$ si scrive come
> $$z = re^{i\vartheta}.$$
> Il numero $r = |z|$ è il **modulo** di $z$ e l'angolo $\vartheta$ è detto **argomento** (o **fase**) di $z$.

**Come si legge.**

- La prima riga è l'abbreviazione: $e^{i\vartheta}$ vuol dire esattamente $\cos\vartheta + i\sin\vartheta$, niente di più. Le dispense la chiamano «misteriosa esponenziale complessa».
- $z \neq 0$ si legge «zeta diverso da zero». Lo zero ha distanza 0 e nessun angolo, quindi non si scrive così.
- $z = re^{i\vartheta}$ si chiama **forma polare** di $z$.
- Il **modulo** è la distanza dall'origine. L'**argomento**, o **fase**, è l'angolo.

Due cose da tenere a mente:

- $e^{i\vartheta}$ ha sempre modulo 1, perché è un punto della circonferenza di raggio 1. Moltiplicarlo per $r$ allunga la freccia fino a lunghezza $r$.
- Nella forma polare $r$ deve essere **positivo**. Una scrittura come $-2e^{i\pi/4}$ indica un numero complesso, ma non è una forma polare: lo vediamo nella trappola qui sotto.

> [!APPROFONDIMENTO] perché proprio la lettera $e$
> Le dispense spiegano che il motivo vero sta nelle rappresentazioni di $e^x$, $\sin x$ e $\cos x$ come **serie di potenze**, che vedrai in Analisi:
> $$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$$
> $$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \qquad \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$
> Metti $i\vartheta$ al posto di $x$ nella prima serie e usa $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. I termini di posto pari danno la serie del coseno. Quelli di posto dispari danno $i$ volte la serie del seno. Quindi $e^{i\vartheta} = \cos\vartheta + i\sin\vartheta$. Per il corso basta l'abbreviazione. Il nome è azzeccato perché $e^{i\vartheta}$ si comporta come una potenza: è la Proposizione 3.2, nella prossima sezione.

### I numeri da riconoscere a colpo d'occhio

| Numero | Modulo | Argomento | Forma polare |
|---|--:|---|---|
| $1$ | $1$ | $0$ | $e^{0} = e^{i \cdot 0}$ |
| $i$ | $1$ | $\frac\pi2$ | $e^{i\pi/2}$ |
| $-1$ | $1$ | $\pi$ | $e^{i\pi}$ |
| $-i$ | $1$ | $\frac{3\pi}2$ (o $-\frac\pi2$) | $e^{3\pi i/2}$ |
| $1 + i$ | $\sqrt 2$ | $\frac\pi4$ | $\sqrt 2\,e^{i\pi/4}$ |
| $1 - i$ | $\sqrt 2$ | $-\frac\pi4$ (o $\frac{7\pi}4$) | $\sqrt 2\,e^{-i\pi/4}$ |
| $-1 + i$ | $\sqrt 2$ | $\frac{3\pi}4$ | $\sqrt 2\,e^{3\pi i/4}$ |
| $\sqrt 3 + i$ | $2$ | $\frac\pi6$ | $2e^{i\pi/6}$ |
| $1 + i\sqrt 3$ | $2$ | $\frac\pi3$ | $2e^{i\pi/3}$ |
| $-\sqrt 3 + i$ | $2$ | $\frac{5\pi}6$ | $2e^{5\pi i/6}$ |
| $-2$ | $2$ | $\pi$ | $2e^{i\pi}$ |
| $3i$ | $3$ | $\frac\pi2$ | $3e^{i\pi/2}$ |

Un trucco. Se il modulo è 1, le due parti del numero sono già il coseno e il seno. Per esempio $\frac{\sqrt 3}2 - \frac 12 i$: coseno $\frac{\sqrt 3}2$ e seno $-\frac 12$, quarto quadrante, angolo $-\frac\pi6$. Se il modulo non è 1, prima lo raccogli:

$$\sqrt 3 + i = 2\left(\frac{\sqrt 3}2 + \frac 12 i\right) = 2e^{i\pi/6}.$$

> [!ESEMPIO] · Dalla forma polare alla forma $a + bi$
> $2e^{2\pi i/3}$: l'angolo $\frac{2\pi}3$ è nel secondo quadrante, con coseno $-\frac 12$ e seno $\frac{\sqrt 3}2$. Quindi
> $$2e^{2\pi i/3} = 2\left(-\frac 12 + \frac{\sqrt 3}2 i\right) = -1 + i\sqrt 3.$$
>
> $\sqrt 2\,e^{-3\pi i/4}$: l'angolo $-\frac{3\pi}4$ porta nel terzo quadrante, con coseno e seno uguali a $-\frac{\sqrt 2}2$. Quindi
> $$\sqrt 2\,e^{-3\pi i/4} = \sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -1 - i.$$
> Qui $\sqrt 2 \cdot \frac{\sqrt 2}2 = \frac 22 = 1$.

::: prova Scrivi $-5$ e $2i$ in forma polare. Poi scrivi $4e^{i\pi}$ nella forma $a + bi$.
$-5$ è a distanza 5, dritto verso sinistra: $5e^{i\pi}$.

$2i$ è a distanza 2, dritto verso l'alto: $2e^{i\pi/2}$.

$4e^{i\pi} = 4(\cos\pi + i\sin\pi) = 4 \cdot (-1 + 0i) = -4$.
:::

> [!TRAPPOLA] Il modulo non può essere negativo
> $-6e^{3\pi i/4}$ è un numero complesso, ma **non** è scritto in forma polare: il numero davanti deve essere il modulo, che è positivo. Si sistema portando il segno meno dentro l'angolo. Il numero $-1$ è mezzo giro, cioè $-1 = e^{i\pi}$, e gli angoli si sommano (prossima sezione):
> $$-6e^{3\pi i/4} = 6e^{i\pi}e^{3\pi i/4} = 6e^{7\pi i/4}.$$
> L'appello del 16/01/2025 (domanda 1) chiedeva un prodotto «in coordinate polari», e tra le risposte c'erano sia $6e^{7\pi i/4}$ sia $-6e^{3\pi i/4}$: solo la prima è una forma polare.

> [!RICORDA]
> - Forma polare: $z = re^{i\vartheta}$, con $r$ positivo (il modulo) e $\vartheta$ l'angolo (l'argomento).
> - $e^{i\vartheta}$ è un'abbreviazione di $\cos\vartheta + i\sin\vartheta$, un punto del cerchio di raggio 1.
> - Il coniugato ha lo stesso modulo e l'angolo cambiato di segno.

## Moltiplicare vuol dire girare e allungare (p. 11)

Nella lezione L02 hai visto che una moltiplicazione può far girare un punto attorno all'origine. Moltiplicare per $i$ fa fare un quarto di giro: il numero 1 diventa $i$, cioè passa da destra a in alto; poi $i$ diventa $-1$, da in alto a sinistra. Moltiplicare per 2, invece, raddoppia la distanza senza girare niente.

Che cosa succede con un numero qualsiasi? Prova con $(1 + i) \cdot (1 + i)$.

1. In forma $a + bi$, come nella lezione L02: $(1 + i)(1 + i) = 1 + i + i + i^2 = 1 + 2i - 1 = 2i$.
2. Ora guardo distanze e angoli. $1 + i$ è a distanza $\sqrt 2$ e all'angolo $\frac\pi4$. Il risultato $2i$ è a distanza 2 e all'angolo $\frac\pi2$.
3. Le distanze: $\sqrt 2 \cdot \sqrt 2 = 2$. Si sono **moltiplicate**.
4. Gli angoli: $\frac\pi4 + \frac\pi4 = \frac\pi2$. Si sono **sommati**.

Non è un caso. Vale sempre, ed è la regola più importante di questa lezione.

> [!IDEA] · la regola del prodotto
> Quando moltiplichi due numeri complessi, **le distanze si moltiplicano e gli angoli si sommano**. Moltiplicare per un numero $w$ vuol dire: girare dell'angolo di $w$ e allungare quanto il modulo di $w$.

### Perché è vera

Tutto viene da una proprietà dell'abbreviazione $e^{i\vartheta}$. Le dispense la scrivono così.

> [!PROP] 3.2
> Vale la relazione
> $$e^{i(\vartheta + \varphi)} = e^{i\vartheta} \cdot e^{i\varphi}.$$

**Come si legge.** A sinistra c'è il punto del cerchio all'angolo $\vartheta + \varphi$, cioè la somma dei due angoli. A destra c'è il prodotto dei punti agli angoli $\vartheta$ e $\varphi$. La proposizione dice che sono lo stesso numero: moltiplicare due punti del cerchio di raggio 1 vuol dire sommare i loro angoli. È la stessa regola delle potenze, come $2^3 \cdot 2^4 = 2^{3 + 4}$: per questo l'abbreviazione usa la lettera $e$ con l'esponente.

Un controllo con i numeri, con due quarti di giro: $e^{i\pi/2} \cdot e^{i\pi/2} = i \cdot i = -1$, e $e^{i(\pi/2 + \pi/2)} = e^{i\pi} = -1$. Torna.

> [!DIM] della Proposizione 3.2
> Le dispense dicono che la relazione segue dalle formule di addizione del ripasso. Il conto completo:
> 1. Scrivo il prodotto a destra con la definizione: $e^{i\vartheta} \cdot e^{i\varphi} = (\cos\vartheta + i\sin\vartheta)(\cos\varphi + i\sin\varphi)$.
> 2. Moltiplico ogni pezzo della prima parentesi per ogni pezzo della seconda, come nella lezione L02, e uso $i^2 = -1$:
>    $$= (\cos\vartheta\cos\varphi - \sin\vartheta\sin\varphi) + i(\sin\vartheta\cos\varphi + \cos\vartheta\sin\varphi).$$
> 3. La prima parentesi è la formula di addizione del coseno: vale $\cos(\vartheta + \varphi)$. La seconda è quella del seno: vale $\sin(\vartheta + \varphi)$.
> 4. Quindi il prodotto è $\cos(\vartheta + \varphi) + i\sin(\vartheta + \varphi)$, che per definizione è $e^{i(\vartheta + \varphi)}$. $\square$

Ora i numeri con distanza qualsiasi. Prendi due numeri in forma polare:

$$z_1 = r_1e^{i\vartheta_1}, \qquad z_2 = r_2e^{i\vartheta_2}.$$

I numerini in basso servono solo a distinguerli: $r_1$ è la distanza del primo, $r_2$ quella del secondo, e così gli angoli. Nel prodotto metto vicini i due numeri reali e i due pezzi $e^{i\ldots}$, poi uso la Proposizione 3.2:

$$z_1z_2 = r_1r_2\,e^{i\vartheta_1}e^{i\vartheta_2} = r_1r_2\,e^{i(\vartheta_1 + \vartheta_2)}.$$

Distanze moltiplicate, angoli sommati.

> [!ESEMPIO] · $(1 + i)(\sqrt 3 + i)$ in due modi
> **Con la forma polare.** Dalla tabella: $1 + i = \sqrt 2\,e^{i\pi/4}$ e $\sqrt 3 + i = 2e^{i\pi/6}$.
> 1. Le distanze: $\sqrt 2 \cdot 2 = 2\sqrt 2$.
> 2. Gli angoli: $\frac\pi4 + \frac\pi6$. Il denominatore comune è 12: $\frac{3\pi}{12} + \frac{2\pi}{12} = \frac{5\pi}{12}$, cioè $75°$.
> 3. Il prodotto: $(1 + i)(\sqrt 3 + i) = 2\sqrt 2\,e^{5\pi i/12}$.
>
> **Con la forma $a + bi$.** $(1 + i)(\sqrt 3 + i) = \sqrt 3 + i + i\sqrt 3 + i^2 = (\sqrt 3 - 1) + (\sqrt 3 + 1)i$.
>
> I due risultati sono lo stesso numero. Confrontandoli si ottiene gratis un valore che non sta nella tabella: $\cos\frac{5\pi}{12} = \frac{\sqrt 3 - 1}{2\sqrt 2} = \frac{\sqrt 6 - \sqrt 2}4$. La forma polare e quella $a + bi$ si controllano a vicenda.

Guarda la figura: l'arco giallo del prodotto è lungo quanto i due archi degli altri numeri messi uno dopo l'altro.

```grafico
titolo: Il prodotto $(1 + i)(\sqrt 3 + i)$: gli angoli $\frac\pi4$ e $\frac\pi6$ si sommano in $\frac{5\pi}{12}$, i moduli $\sqrt 2$ e $2$ si moltiplicano in $2\sqrt 2$
x: -0.6 3
y: -0.4 3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
arco: 0 0 0.45 0 pi/4 | accento
arco: 0 0 0.7 0 pi/6 | blu
arco: 0 0 0.95 0 5pi/12 | ambra
vettore: 1 1 | accento | $1 + i$ | e
vettore: sqrt(3) 1 | blu | $\sqrt 3 + i$ | e
vettore: 0.732 2.732 | ambra | spesso | $2\sqrt 2\,e^{5\pi i/12}$ | ne
```

Prova con lo strumento. Nella modalità **z · w** trascina $z$ e $w$ e guarda gli archi: l'arco del prodotto è sempre la somma dei due archi, e sotto leggi che il modulo del prodotto è il prodotto dei moduli. Poi scegli **potenze zⁿ**: vedi i punti $z, z^2, z^3, \dots$ girare attorno all'origine, ogni volta dello stesso angolo.

```widget complessi
titolo: Prodotto e potenze in forma polare
z: 1+i
w: 1.732+i
modo: prodotto
modi: prodotto potenza
n: 3
raggio: 4
```

::: prova Calcola $3e^{i\pi/6} \cdot 2e^{i\pi/3}$ e scrivi il risultato nella forma $a + bi$.
Distanze: $3 \cdot 2 = 6$. Angoli: $\frac\pi6 + \frac\pi3 = \frac\pi6 + \frac{2\pi}6 = \frac{3\pi}6 = \frac\pi2$. Il prodotto è $6e^{i\pi/2} = 6i$.
:::

### L'inverso e il quoziente

L'**inverso** di $z$, che si scrive $z^{-1}$, è il numero che moltiplicato per $z$ dà 1 (lezione L02). In forma polare si trova a occhio. Il numero 1 ha distanza 1 e angolo 0. Quindi l'inverso deve:

- avere una distanza che, moltiplicata per $r$, dia 1: cioè $\frac 1r$, che si scrive anche $r^{-1}$;
- avere un angolo che, sommato a $\vartheta$, dia 0: cioè $-\vartheta$.

Le dispense lo notano così: se $z = re^{i\vartheta}$ non è zero, il suo inverso è

$$z^{-1} = r^{-1}e^{-i\vartheta}.$$

Controllo con la regola del prodotto: $z \cdot z^{-1} = r \cdot r^{-1}\,e^{i(\vartheta - \vartheta)} = 1 \cdot e^{0} = \cos 0 + i\sin 0 = 1$.

Nel disegno: l'inverso è dalla parte opposta rispetto all'asse orizzontale, come il coniugato. Ma la distanza si inverte. Se $z$ sta fuori dal cerchio di raggio 1, il suo inverso sta dentro, e il contrario (Figura 4 delle dispense, a destra).

Il **quoziente** $\frac{z_1}{z_2}$ è $z_1$ per l'inverso di $z_2$. Quindi le distanze si dividono e gli angoli si sottraggono:

$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\,e^{i(\vartheta_1 - \vartheta_2)}.$$

> [!ESEMPIO] · Lo stesso inverso della lezione L02
> $1 + i = \sqrt 2\,e^{i\pi/4}$. L'inverso ha distanza $\frac 1{\sqrt 2}$ e angolo $-\frac\pi4$:
> $$(1 + i)^{-1} = \frac 1{\sqrt 2}e^{-i\pi/4} = \frac 1{\sqrt 2}\left(\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = \frac 12 - \frac 12 i.$$
> È lo stesso risultato della formula della lezione L02, $z^{-1} = \frac{\bar z}{|z|^2} = \frac{1 - i}2$.

Nella figura qui sotto ci sono $z = 2e^{i\pi/3}$, il suo coniugato e il suo inverso. Il coniugato è il riflesso allo specchio, alla stessa distanza 2. L'inverso ha lo stesso angolo del coniugato, ma distanza $\frac 12$: sta dentro il cerchio di raggio 1.

```grafico
titolo: La Figura 4 delle dispense con $z = 2e^{i\pi/3}$: il coniugato $\bar z = 2e^{-i\pi/3}$ è il riflesso di $z$; l'inverso $z^{-1} = \frac 12 e^{-i\pi/3}$ ha l'angolo opposto e sta dentro la circonferenza unitaria
x: -2.4 2.4
y: -2 2
nomi: $\operatorname{Re}$ $\operatorname{Im}$
cerchio: 0 0 1 | grigio
arco: 0 0 0.4 0 pi/3 | accento
arco: 0 0 0.4 -pi/3 0 | viola
segmento: 1 sqrt(3) 1 -sqrt(3) | grigio | tratteggio
vettore: 1 sqrt(3) | accento | $z$ | ne
vettore: 1 -sqrt(3) | viola | $\bar z$ | se
vettore: 1/4 -sqrt(3)/4 | ambra | spesso | $z^{-1}$ | e
testo: 1.18 0.12 | grigio | $1$
```

::: prova Se $z = 4e^{i\pi/2}$, quanto valgono $z^{-1}$ e $\bar z$ in forma polare?
$z^{-1} = \frac 14 e^{-i\pi/2}$: distanza inversa, angolo opposto.

$\bar z = 4e^{-i\pi/2}$: stessa distanza, angolo opposto. In forma $a + bi$: $z = 4i$, $\bar z = -4i$ e $z^{-1} = -\frac 14 i$.
:::

> [!RICORDA]
> - Prodotto: distanze moltiplicate, angoli sommati. Moltiplicare per $w$ vuol dire girare e allungare.
> - Inverso: distanza $\frac 1r$, angolo $-\vartheta$.
> - Quoziente: distanze divise, angoli sottratti.

## Quando due angoli indicano lo stesso punto (p. 11)

Un orologio segna le 3. Dopo un giro completo della lancetta segna ancora le 3: la lancetta è nello stesso posto. Con gli angoli succede lo stesso. L'angolo $\frac\pi2$ e l'angolo $\frac\pi2 + 2\pi = \frac{5\pi}2$ indicano la stessa direzione: il secondo ha solo fatto un giro in più.

Per questo lo stesso numero complesso ha tante forme polari diverse:

$$e^{i\pi/2} = e^{5\pi i/2} = e^{-3\pi i/2} = i.$$

- $\frac{5\pi}2$ è $\frac\pi2$ più un giro;
- $-\frac{3\pi}2$ è $\frac\pi2$ meno un giro.

Un altro esempio: $2e^{7\pi i/4} = 2e^{-\pi i/4} = \sqrt 2 - i\sqrt 2$, perché $\frac{7\pi}4 - 2\pi = \frac{7\pi}4 - \frac{8\pi}4 = -\frac\pi4$.

Le dispense lo scrivono così.

> [!PROP] · Uguaglianza di due forme polari (p. 11)
> Due numeri complessi non nulli espressi in forma polare $r_0e^{i\vartheta_0}$ e $r_1e^{i\vartheta_1}$ sono lo stesso numero complesso se e solo se valgono entrambi i fatti seguenti:
> - $r_0 = r_1$;
> - $\vartheta_1 = \vartheta_0 + 2k\pi$ per qualche $k \in \Z$.

**Come si legge.**

- «Non nulli» vuol dire «diversi da zero».
- «Se e solo se» vuol dire che le due cose vanno sempre insieme: se i numeri sono uguali, valgono i due fatti; se valgono i due fatti, i numeri sono uguali.
- Il primo fatto: le due distanze sono uguali.
- Il secondo fatto: gli angoli differiscono di $2k\pi$. Qui $k$ è un numero intero qualsiasi, positivo, negativo o zero: la scrittura $k \in \Z$ si legge «$k$ appartiene a zeta», cioè «$k$ è un intero». Quindi $2k\pi$ vuol dire «un numero intero di giri», in avanti o all'indietro.

Questo fatto ha due usi. Il primo è **accorciare** gli angoli grandi che escono dalle potenze. Il secondo è **risolvere** le equazioni come $z^3 = -8$, nella sezione sulle radici.

> [!METODO] Accorciare un angolo
> Quando l'angolo è grande, togli (o aggiungi) giri interi, cioè multipli di $2\pi$. Fermati quando l'angolo sta dentro un giro solo: tra 0 e un giro, oppure tra mezzo giro all'indietro e mezzo giro in avanti.
>
> Con un angolo scritto come frazione di $\pi$ il conto si fa con i numeri interi. Esempio: $\alpha = \frac{2025}4\pi$.
> 1. Un giro, $2\pi$, scritto in quarti è $\frac 84\pi$.
> 2. Divido 2025 per 8 con il resto: $2025 = 8 \cdot 253 + 1$.
> 3. Quindi $\frac{2025}4\pi = 253 \cdot \frac 84\pi + \frac 14\pi$: sono 253 giri interi più $\frac\pi4$.
> 4. I giri interi non contano: $e^{2025\pi i/4} = e^{i\pi/4}$.

::: prova Accorcia l'angolo di $e^{17\pi i/3}$.
Un giro in terzi è $\frac 63\pi$. Divido 17 per 6: $17 = 6 \cdot 2 + 5$. Quindi $\frac{17}3\pi$ è 2 giri più $\frac{5\pi}3$, e $e^{17\pi i/3} = e^{5\pi i/3}$. Con un giro in meno ancora diventa $e^{-i\pi/3}$.
:::

> [!APPROFONDIMENTO] l'argomento principale
> Le dispense non fissano un intervallo per l'argomento: $\frac{7\pi}4$ e $-\frac\pi4$ vanno bene tutti e due. Molti libri chiamano **argomento principale** quello compreso tra $-\pi$ (escluso) e $\pi$ (incluso); altri usano quello tra $0$ (incluso) e $2\pi$ (escluso). Nel quiz le risposte usano tutte e due le abitudini: se una risposta non ti torna, prova ad aggiungere o a togliere $2\pi$.

> [!RICORDA]
> - Stessa distanza e angoli che differiscono di giri interi: stesso numero.
> - Per accorciare un angolo togli multipli di $2\pi$; con le frazioni di $\pi$ basta il resto di una divisione.

## Il giro completo e l'identità di Eulero (p. 12)

Torna sulla pista circolare del ripasso, quella con il raggio lungo 1. Ogni abbreviazione $e^{i\vartheta}$ è un punto della pista, e ogni punto della pista è uno di questi numeri: basta prendere il suo angolo.

Tre posti sulla pista sono da sapere a memoria, perché tornano in quasi tutti gli esercizi:

- un quarto di giro, $\vartheta = \frac\pi2$: $e^{i\pi/2} = \cos\frac\pi2 + i\sin\frac\pi2 = 0 + i \cdot 1 = i$;
- mezzo giro, $\vartheta = \pi$: $e^{i\pi} = \cos\pi + i\sin\pi = -1 + 0 = -1$;
- un giro intero, $\vartheta = 2\pi$: $e^{2\pi i} = \cos 2\pi + i\sin 2\pi = 1 + 0 = 1$.

La seconda è la famosa **identità di Eulero**, spesso scritta $e^{i\pi} + 1 = 0$: mette insieme in una sola riga i numeri $e$, $i$, $\pi$, 1 e 0.

A che cosa servono negli esercizi:

- la seconda dice che un segno meno è mezzo giro. Serve per portare il meno dentro l'angolo, come nella trappola sul modulo negativo;
- la terza dice che un giro intero non cambia niente, e nemmeno due, tre o cento giri. È il motivo per cui dagli angoli si possono togliere i giri interi.

::: prova Quanto vale $e^{3\pi i}$?
$3\pi$ è un giro intero più mezzo giro: $3\pi = 2\pi + \pi$. Il giro intero non conta, quindi $e^{3\pi i} = e^{i\pi} = -1$.
:::

> [!RICORDA]
> - I numeri $e^{i\vartheta}$ sono i punti della circonferenza di raggio 1.
> - $e^{i\pi/2} = i$, $e^{i\pi} = -1$ (identità di Eulero), $e^{2\pi i} = 1$.

## Le potenze: girare più volte (p. 12)

Una potenza è un prodotto ripetuto: $z^3 = z \cdot z \cdot z$. Con la regola del prodotto, ogni volta che moltiplichi per $z$ la distanza si moltiplica per $r$ e l'angolo cresce di $\vartheta$.

Prova con $z = 1 + i$, a distanza $\sqrt 2$ e all'angolo $\frac\pi4$:

| Potenza | Distanza | Angolo | Il numero |
|---|---|---|---|
| $z$ | $\sqrt 2$ | $\frac\pi4$ | $1 + i$ |
| $z^2$ | $\sqrt 2 \cdot \sqrt 2 = 2$ | $\frac\pi4 + \frac\pi4 = \frac\pi2$ | $2i$ |
| $z^3$ | $2 \cdot \sqrt 2 = 2\sqrt 2$ | $\frac\pi2 + \frac\pi4 = \frac{3\pi}4$ | $-2 + 2i$ |
| $z^4$ | $2\sqrt 2 \cdot \sqrt 2 = 4$ | $\frac{3\pi}4 + \frac\pi4 = \pi$ | $-4$ |

Guarda la figura: a ogni passo il punto gira di un ottavo di giro e si allontana.

```grafico
titolo: Le potenze di $z = 1 + i$: ogni volta il modulo si moltiplica per $\sqrt 2$ e l'angolo cresce di $\frac\pi4$
x: -5.5 2
y: -1.5 3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
segmento: 1 1 0 2 | grigio | tratteggio
segmento: 0 2 -2 2 | grigio | tratteggio
segmento: -2 2 -4 0 | grigio | tratteggio
vettore: 1 1 | accento | $z = 1 + i$ | e
vettore: 0 2 | blu | $z^2 = 2i$ | ne
vettore: -2 2 | viola | $z^3 = -2 + 2i$ | no
vettore: -4 0 | ambra | $z^4 = -4$ | no
```

Moltiplicare $n$ volte la distanza per sé stessa vuol dire elevarla alla $n$. Sommare $n$ volte lo stesso angolo vuol dire moltiplicarlo per $n$. La formula, che le dispense usano all'inizio della sezione 3.B:

$$z^n = \underbrace{re^{i\vartheta} \cdots re^{i\vartheta}}_{n \text{ volte}} = r^ne^{in\vartheta}.$$

A parole: **la distanza si eleva alla $n$, l'angolo si moltiplica per $n$**.

> [!APPROFONDIMENTO] il nome della formula
> Nella forma trigonometrica la formula si scrive $\bigl(r(\cos\vartheta + i\sin\vartheta)\bigr)^n = r^n(\cos n\vartheta + i\sin n\vartheta)$ ed è nota come **formula di De Moivre**.

> [!ESEMPIO] · $(1 + i)^8$ e $(1 + i)^{10}$
> $1 + i = \sqrt 2\,e^{i\pi/4}$.
>
> **La potenza ottava.**
> 1. Distanza: $(\sqrt 2)^8 = \left((\sqrt 2)^2\right)^4 = 2^4 = 16$.
> 2. Angolo: $8 \cdot \frac\pi4 = 2\pi$, un giro intero.
> 3. Quindi $(1 + i)^8 = 16\,e^{2\pi i} = 16 \cdot 1 = 16$.
>
> Controllo con la forma $a + bi$: $(1 + i)^2 = 2i$, quindi $(1 + i)^8 = (2i)^4 = 16i^4 = 16$.
>
> **La potenza decima.**
> 1. Distanza: $(\sqrt 2)^{10} = 2^5 = 32$.
> 2. Angolo: $10 \cdot \frac\pi4 = \frac{10\pi}4 = \frac{5\pi}2$.
> 3. Accorcio: $\frac{5\pi}2 = 2\pi + \frac\pi2$, quindi l'angolo è $\frac\pi2$.
> 4. Quindi $(1 + i)^{10} = 32\,e^{i\pi/2} = 32i$.

> [!ESEMPIO] · $(\sqrt 3 + i)^6$
> $\sqrt 3 + i = 2e^{i\pi/6}$.
> 1. Distanza: $2^6 = 64$.
> 2. Angolo: $6 \cdot \frac\pi6 = \pi$.
> 3. Quindi $(\sqrt 3 + i)^6 = 64\,e^{i\pi} = -64$.
>
> Un numero con parte immaginaria diversa da zero, elevato alla sesta, dà un numero reale negativo. Con la forma $a + bi$ ci sarebbero volute cinque moltiplicazioni.

::: prova Calcola $(2i)^3$ in forma polare.
$2i = 2e^{i\pi/2}$. Distanza $2^3 = 8$, angolo $3 \cdot \frac\pi2 = \frac{3\pi}2$. Quindi $(2i)^3 = 8e^{3\pi i/2} = 8 \cdot (-i) = -8i$. Controllo: $(2i)^3 = 8i^3 = 8 \cdot (-i) = -8i$.
:::

> [!METODO] Una potenza alta senza calcolatrice
> 1. Scrivi il numero in forma polare. Negli appelli il modulo è quasi sempre 1, $\sqrt 2$ o 2, e l'angolo è uno della tabella.
> 2. Eleva la distanza alla $n$ e moltiplica l'angolo per $n$.
> 3. Accorcia l'angolo togliendo giri interi.
> 4. Torna alla forma $a + bi$ con la tabella di seno e coseno, e confronta con le risposte.
>
> Per esponenti piccoli c'è un'alternativa: calcola $z^2$ o $z^3$ nella forma $a + bi$ finché ottieni un numero reale o immaginario puro, poi continua con le potenze di quello. Per esempio $(1 + i)^2 = 2i$, e da lì $(1 + i)^{10} = (2i)^5 = 32i^5 = 32i$.

> [!RICORDA]
> - $z^n = r^ne^{in\vartheta}$: distanza alla $n$, angolo per $n$.
> - Dopo aver moltiplicato l'angolo, accorcialo togliendo giri interi.

## Le radici: n punti in cerchio (pp. 12–13)

Adesso il problema al contrario. Le potenze partono da un numero e lo elevano. Le radici partono dal risultato e cercano da dove si è partiti.

Tra i numeri reali le cose sono disordinate. Quali numeri, moltiplicati per sé stessi, danno 4? Due: 2 e il suo opposto. Quali numeri, elevati al cubo, danno 8? Uno solo, il 2. E quali numeri al quadrato danno $-4$? Nessuno, perché un quadrato non è mai negativo. Tra i numeri complessi tutto diventa regolare: un numero diverso da zero ha sempre esattamente 2 radici quadrate, 3 radici cubiche, 4 radici quarte, e così via.

In generale si cerca un numero $z$ che elevato alla $n$ dia un numero fissato, che le dispense chiamano $z_0$. Il numerino 0 serve solo a distinguerlo dall'incognita. Le soluzioni si chiamano **radici $n$-esime** di quel numero, e sono sempre $n$.

### Un esempio con i numeri: $z^3 = -8$

Cerchiamo i numeri che elevati al cubo danno $-8$.

1. **Il numero dato, con distanza e angolo.** Il numero $-8$ è dritto verso sinistra, a distanza 8. Quindi ha distanza 8 e angolo $\pi$.
2. **L'incognita, con distanza e angolo.** Non conosco né la distanza né l'angolo del numero che cerco. Li chiamo $r$ e $\vartheta$.
3. **Elevo al cubo.** Per la regola delle potenze, il cubo ha distanza $r^3$ e angolo tre volte $\vartheta$.
4. **Le distanze devono essere uguali.** Il cubo deve avere distanza 8. Il numero positivo che al cubo dà 8 è 2: quindi la distanza cercata è 2.
5. **Gli angoli devono indicare la stessa direzione.** Tre volte l'angolo cercato deve essere mezzo giro, oppure mezzo giro più un giro, oppure mezzo giro più due giri. I giri in più non cambiano la direzione.
6. **Divido per 3.** L'angolo cercato può essere un terzo di mezzo giro, cioè $\frac\pi3$. Oppure un terzo di un giro e mezzo, cioè $\pi$. Oppure un terzo di due giri e mezzo, cioè $\frac{5\pi}3$.
7. **Con un giro in più non viene niente di nuovo.** Mezzo giro più tre giri, diviso 3, fa $\frac{7\pi}3$: è un giro più $\frac\pi3$, cioè lo stesso punto della prima soluzione.

Le soluzioni sono tre: distanza 2, angoli $\frac\pi3$, $\pi$ e $\frac{5\pi}3$. Sono tre punti su un cerchio di raggio 2, separati da un terzo di giro ciascuno: i vertici di un triangolo equilatero.

### Il ragionamento in generale

Le dispense fanno lo stesso conto con $z^n = z_0$ al posto di $z^3 = -8$. I passi sono gli stessi.

1. Scrivo con distanza e angolo sia il numero dato sia l'incognita. Il numero dato è $z_0 = r_0e^{i\vartheta_0}$; l'incognita è $z = re^{i\vartheta}$, con distanza e angolo da trovare.
2. Per la formula delle potenze l'equazione diventa
   $$r^ne^{in\vartheta} = r_0e^{i\vartheta_0}.$$
3. Due forme polari sono uguali esattamente quando le distanze sono uguali e gli angoli differiscono di giri interi. Quindi servono due cose.
   - **Le distanze.** La distanza cercata, elevata alla $n$, deve dare la distanza del numero dato. Quindi è la sua radice $n$-esima, che si scrive $\sqrt[n]{r_0}$: il numero positivo che elevato alla $n$ dà $r_0$, la solita radice della scuola.
   - **Gli angoli.** L'angolo cercato, moltiplicato per $n$, deve dare l'angolo del numero dato più un certo numero di giri: $n\vartheta = \vartheta_0 + 2k\pi$, con $k$ intero.
4. Divido per $n$:
   $$\vartheta = \frac{\vartheta_0}n + \frac{2k\pi}n.$$
5. Il primo angolo, con $k$ uguale a zero, è l'angolo del numero dato diviso per $n$. Ogni volta che $k$ cresce di 1, l'angolo cresce di un $n$-esimo di giro. Facendo crescere $k$ da 0 fino a $n - 1$ vengono $n$ angoli.
6. Questi $n$ angoli coprono meno di un giro, quindi danno $n$ punti **diversi**. Il valore successivo di $k$ riporta al primo punto, perché aggiunge un giro intero; quello dopo riporta al secondo, e così via.

Le dispense lo scrivono così.

> [!PROP] · Le radici $n$-esime (pp. 12–13)
> Sia $z_0 = r_0e^{i\vartheta_0}$ un numero complesso diverso da zero. L'equazione $z^n = z_0$ ha precisamente $n$ soluzioni distinte:
> $$z_k = \sqrt[n]{r_0}\;e^{i\left(\frac{\vartheta_0}n + \frac{2k\pi}n\right)}, \qquad k = 0, 1, \dots, n - 1.$$
> Hanno tutte lo stesso modulo $\sqrt[n]{r_0}$ e argomenti separati da un passo costante $\frac{2\pi}n$. Geometricamente, formano i vertici di un **poligono regolare** centrato nell'origine con $n$ lati e raggio $\sqrt[n]{r_0}$.

**Come si legge.**

- «Precisamente $n$ soluzioni distinte»: esattamente $n$, tutte diverse tra loro.
- $z_k$ è la soluzione numero $k$. Il numerino $k$ parte da 0 e arriva a $n - 1$: in tutto sono $n$.
- Tutte le soluzioni stanno alla stessa distanza dall'origine.
- La prima ha l'angolo del numero dato diviso per $n$. Da una alla successiva l'angolo cresce sempre di un $n$-esimo di giro.
- Un **poligono regolare** ha tutti i lati uguali: triangolo equilatero, quadrato, pentagono regolare… Le soluzioni ne sono i vertici, su un cerchio centrato nell'origine.

::: prova Quante soluzioni ha $z^5 = 32$? A che distanza dall'origine stanno?
Cinque soluzioni. La distanza è $\sqrt[5]{32} = 2$, perché $2^5 = 32$. Sono i vertici di un pentagono regolare su un cerchio di raggio 2, e uno di loro è il numero reale 2.
:::

### Due esempi delle dispense

> [!ESEMPIO] 3.3 · Le radici $n$-esime dell'unità
> L'equazione $z^n = 1$ ha come soluzioni i numeri complessi
> $$z = e^{i\frac{2k\pi}n}, \qquad k = 0, 1, \dots, n - 1.$$
> Queste $n$ soluzioni sono i vertici di un poligono regolare di raggio $1$ con $n$ lati, avente $1$ come vertice. Sono le **radici $n$-esime dell'unità**.
>
> **Da dove viene.** $1 = 1 \cdot e^{i \cdot 0}$: la distanza è 1 e l'angolo è 0. Quindi le radici hanno distanza $\sqrt[n]1 = 1$ e angoli $0 + \frac{2k\pi}n$. «Unità» è un altro nome del numero 1.
> - $n = 2$: gli angoli sono $0$ e $\pi$. Le radici sono $e^{0} = 1$ ed $e^{i\pi} = -1$.
> - $n = 3$: gli angoli sono $0$, $\frac{2\pi}3$, $\frac{4\pi}3$. Le radici sono $1$, $e^{2\pi i/3} = -\frac 12 + \frac{\sqrt 3}2 i$, $e^{4\pi i/3} = -\frac 12 - \frac{\sqrt 3}2 i$: un triangolo equilatero.
> - $n = 4$: gli angoli sono i quarti di giro. Le radici sono $1$, $i$, $-1$, $-i$: un quadrato.
> - $n = 6$: gli angoli sono i multipli di $\frac\pi3$. Le radici sono $\pm 1$ e $\pm\frac 12 \pm \frac{\sqrt 3}2 i$: un esagono (Figura 5 delle dispense, a sinistra).

Nella figura le sei radici seste di 1. Il simbolo $\pm$ si legge «più o meno»: la scrittura $\pm\frac 12 \pm \frac{\sqrt 3}2 i$ riassume i quattro numeri con tutte le scelte dei segni.

```grafico
titolo: La Figura 5 (sinistra): le radici seste di $1$ sono i vertici di un esagono regolare con un vertice in $1$
x: -1.8 1.8
y: -1.3 1.3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
cerchio: 0 0 1 | grigio | sottile
poligono: 1 0 1/2 sqrt(3)/2 -1/2 sqrt(3)/2 -1 0 -1/2 -sqrt(3)/2 1/2 -sqrt(3)/2 | ambra | tratteggio
punto: 1 0 | ambra | $1$ | ne
punto: 1/2 sqrt(3)/2 | ambra | $\frac 12 + \frac{\sqrt 3}2 i$ | ne
punto: -1/2 sqrt(3)/2 | ambra | $-\frac 12 + \frac{\sqrt 3}2 i$ | no
punto: -1 0 | ambra | $-1$ | no
punto: -1/2 -sqrt(3)/2 | ambra | $-\frac 12 - \frac{\sqrt 3}2 i$ | so
punto: 1/2 -sqrt(3)/2 | ambra | $\frac 12 - \frac{\sqrt 3}2 i$ | se
```

> [!ESEMPIO] 3.4 · Le tre soluzioni di $z^3 = -8$
> Come nella Figura 5 delle dispense (a destra), le tre soluzioni dell'equazione $z^3 = -8$ hanno modulo $\sqrt[3]8 = 2$ e argomenti $\frac\pi3$, $\pi$ e $\frac{5\pi}3$. Si tratta dei numeri complessi
> $$z_1 = 2e^{i\pi/3} = 2\left(\cos\frac\pi3 + i\sin\frac\pi3\right) = 1 + \sqrt 3 i,$$
> $$z_2 = 2e^{i\pi} = -2,$$
> $$z_3 = 2e^{5\pi i/3} = 2\left(\cos\frac{5\pi}3 + i\sin\frac{5\pi}3\right) = 1 - \sqrt 3 i.$$
>
> **Da dove vengono gli angoli.** È l'esempio che hai già fatto all'inizio della sezione. $-8$ è un reale negativo, quindi $-8 = 8e^{i\pi}$. Il primo angolo è $\frac\pi3$, un terzo di $\pi$. Poi si aggiunge due volte il passo $\frac{2\pi}3$: $\frac\pi3 + \frac{2\pi}3 = \pi$, e $\pi + \frac{2\pi}3 = \frac{5\pi}3$.
>
> **Controllo** su $z_1$, nella forma $a + bi$:
> 1. $(1 + i\sqrt 3)^2 = 1 + 2i\sqrt 3 + (i\sqrt 3)^2 = 1 + 2i\sqrt 3 - 3 = -2 + 2i\sqrt 3$.
> 2. $(-2 + 2i\sqrt 3)(1 + i\sqrt 3) = -2 - 2i\sqrt 3 + 2i\sqrt 3 + 2i^2 \cdot 3 = -2 - 6 = -8$.

```grafico
titolo: La Figura 5 (destra): le soluzioni di $z^3 = -8$ sono i vertici di un triangolo equilatero di raggio $\sqrt[3]8 = 2$
x: -3 3
y: -2.5 2.5
nomi: $\operatorname{Re}$ $\operatorname{Im}$
cerchio: 0 0 2 | grigio | sottile
poligono: 1 sqrt(3) -2 0 1 -sqrt(3) | ambra | tratteggio
punto: 1 sqrt(3) | ambra | $z_1 = 1 + \sqrt 3 i$ | ne
punto: -2 0 | ambra | $z_2 = -2$ | no
punto: 1 -sqrt(3) | ambra | $z_3 = 1 - \sqrt 3 i$ | se
```

Nello strumento qui sotto c'è lo stesso esempio. Cambia $n$ per vedere triangoli, quadrati, pentagoni. Poi cambia $z$, per esempio con $1$, $i$ o $-4$, e guarda come il poligono gira e cambia raggio.

```widget complessi
titolo: Radici $n$-esime: sempre $n$, sui vertici di un poligono regolare
z: -8
modo: radici
modi: radici
n: 3
raggio: 3
```

> [!METODO] Trovare le radici $n$-esime di un numero
> 1. Scrivi il numero in forma polare. Attenzione ai numeri reali: un reale positivo ha angolo 0, un reale negativo ha angolo $\pi$.
> 2. Tutte le radici hanno la stessa distanza: la radice $n$-esima della distanza del numero.
> 3. Il primo angolo è l'angolo del numero diviso per $n$. Gli altri si ottengono aggiungendo $\frac{2\pi}n$, fino ad averne $n$.
> 4. Se gli angoli sono nella tabella, passa alla forma $a + bi$.
> 5. Fai il disegno: i punti devono formare un poligono regolare con $n$ lati.

### Le radici quadrate

Con $n = 2$ il passo è $\frac{2\pi}2 = \pi$, mezzo giro. Quindi le due radici quadrate di un numero sono **opposte**: se una è $w$, l'altra è $-w$. Tre esempi, che ritroverai nella lezione L04 dentro la formula delle equazioni di secondo grado:

- **Le radici quadrate di $-4$.** Il numero $-4$ è a distanza 4, dritto verso sinistra. Le radici hanno distanza 2. Il primo angolo è metà di mezzo giro, cioè un quarto di giro; il secondo è mezzo giro più in là. Le radici sono $2i$ e $-2i$. In generale le radici quadrate di un numero reale negativo sono $i$ per la radice del suo opposto, con il più e con il meno.
- **Le radici quadrate di $2i$.** Il numero $2i$ è a distanza 2, dritto verso l'alto. Le radici hanno distanza $\sqrt 2$ e angoli $\frac\pi4$ e $\frac{5\pi}4$: sono $1 + i$ e $-1 - i$. Sono le stesse trovate con le coordinate nell'esercizio 7 della lezione L02.
- **Le radici quadrate di $-3 + 4i$.** Qui l'angolo non è nella tabella, e conviene il metodo della lezione L02: si scrive l'incognita come $x + yi$ e si risolvono le due equazioni sulle parti reale e immaginaria. Le radici sono $1 + 2i$ e il suo opposto.

::: prova Quali sono le radici quadrate di $-9$?
$-9 = 9e^{i\pi}$. Distanza $\sqrt 9 = 3$, angoli $\frac\pi2$ e $\frac{3\pi}2$. Le radici sono $3i$ e $-3i$. Controllo: $(3i)^2 = 9i^2 = -9$.
:::

> [!TRAPPOLA] Il simbolo $\sqrt{\ }$ tra i complessi
> Tra i reali positivi $\sqrt a$ indica **la** radice positiva. Tra i complessi non c'è una radice «positiva»: ci sono due radici quadrate opposte, e scrivere $\sqrt{z_0}$ non dice quale. Per questo le regole della lezione L01 come $\sqrt a\sqrt b = \sqrt{ab}$ qui non valgono più. Esempio: $\sqrt{-1}\cdot\sqrt{-1}$ «dovrebbe» essere $\sqrt{(-1)(-1)} = \sqrt 1 = 1$, ma con $\sqrt{-1} = i$ viene $i \cdot i = -1$. Nella lezione L04 le dispense scrivono $\pm\sqrt\Delta$ proprio per indicare **le due** radici quadrate di un numero.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli la lezione corrisponde al §1.4, parti 1.4.4 «Coordinate polari» (pp. 27–29, con la dimostrazione della Proposizione 1.4.2, che è la 3.2 delle dispense), 1.4.5 «Proprietà dei numeri complessi» (p. 30, Esercizio 1.4.3) e 1.4.6 «Radici $n$-esime di un numero complesso» (pp. 30–31, con gli Esempi 1.4.4 e 1.4.5, cioè 3.3 e 3.4 delle dispense, e l'Esercizio 1.4.6, che è il 3.5). Alla fine del capitolo 1 (p. 37) gli Esercizi 1.13 e 1.14 sono svolti qui come esercizi 13 e 14.

> [!RICORDA]
> - $z^n = z_0$ ha sempre esattamente $n$ soluzioni, se $z_0$ non è zero.
> - Distanza: la radice $n$-esima della distanza di $z_0$. Primo angolo: l'angolo di $z_0$ diviso per $n$. Poi passi di $\frac{2\pi}n$.
> - Le soluzioni sono i vertici di un poligono regolare con $n$ lati.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\pi$ | «pi greco» | circa 3,14; in radianti, mezzo giro | $180° = \pi$ |
| $\vartheta$, $\varphi$, $\alpha$ | «teta», «fi», «alfa» | lettere greche usate per gli angoli | $\vartheta = \frac\pi3$ |
| $\cos\vartheta$, $\sin\vartheta$ | «coseno di teta», «seno di teta» | le due coordinate del punto all'angolo $\vartheta$ sul cerchio di raggio 1 | $\cos\frac\pi3 = \frac 12$ |
| $\cos^2\vartheta$ | «coseno quadro di teta» | il coseno moltiplicato per sé stesso | $\cos^2\frac\pi4 = \frac 12$ |
| $(r, \vartheta)$ | «erre, teta» | coordinate polari: distanza e angolo | $(1, \sqrt 3)$ ha $(2, \frac\pi3)$ |
| $\lvert z \rvert$ | «modulo di zeta» | la distanza di $z$ dall'origine | $\lvert 1 + i \rvert = \sqrt 2$ |
| $\bar z$ | «zeta segnato» | il coniugato: il riflesso rispetto all'asse orizzontale | $\overline{1 + i} = 1 - i$ |
| $e^{i\vartheta}$ | «e alla i teta» | abbreviazione di $\cos\vartheta + i\sin\vartheta$ | $e^{i\pi/2} = i$ |
| $re^{i\vartheta}$ | «erre e alla i teta» | forma polare: distanza $r$, angolo $\vartheta$ | $1 + i = \sqrt 2\,e^{i\pi/4}$ |
| $z^{-1}$ | «zeta alla meno uno» | l'inverso: moltiplicato per $z$ dà 1 | $(2e^{i\pi/3})^{-1} = \frac 12 e^{-i\pi/3}$ |
| $z_1, z_2$, $r_1, r_2$ | «zeta uno», «erre uno»… | i numerini distinguono oggetti dello stesso tipo | $z_1 = 2e^{i\pi/3}$ |
| $k \in \Z$ | «$k$ appartiene a zeta» | $k$ è un numero intero | $k = -1, 0, 1, \dots$ |
| $2k\pi$ | «due kappa pi greco» | un numero intero di giri | $2 \cdot 3\pi = 6\pi$ |
| $\sqrt[n]{a}$ | «radice $n$-esima di $a$» | il numero positivo che elevato alla $n$ dà $a$ | $\sqrt[3]8 = 2$ |
| $\pm$ | «più o meno» | due numeri, uno con il più e uno con il meno | $\pm 2i$ è $2i$ e $-2i$ |
| $\operatorname{Re}$, $\operatorname{Im}$ | «parte reale», «parte immaginaria» | nei grafici, i nomi dei due assi | |

## Verso l'esame

**La prova in due righe.** 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; 2 ore, niente calcolatrice, solo 4 facciate di appunti scritti a mano. Appelli 2026/27 di Algebra lineare: 22/01/2027 e 05/02/2027 alle 14:00. Regole complete e fonti nella lezione L01.

**Che cosa chiedono.** In 9 dei 15 appelli dal 24/01/2024 al 07/09/2026 la domanda sui numeri complessi riguardava questa lezione:

| Tipo di domanda | Appelli (domanda) |
|---|---|
| potenza alta ($z^8$, $z^9$, $z^{12}$, $z^{2025}$) di un numero dato in forma $a + bi$ | 24/01/2024 (2), 10/07/2024 (1), 07/02/2025 (1), 15/01/2026 (5) |
| potenza di un numero dato in forma trigonometrica | 06/09/2024 (1) |
| prodotto da scrivere in forma polare | 16/01/2025 (1) |
| radici: quale numero è (o non è) soluzione di $z^n = z_0$, o che cosa vale un'espressione con una radice quadrata | 10/06/2024 (1), 02/09/2025 (2), 05/02/2026 (1) |

### Una domanda vera, letta insieme

**Appello del 15/01/2026, domanda 5.** Il testo: «Dato $z = \frac{\sqrt 3}2 - \frac 12 i$, allora $z^9$ è uguale a: (a) $1$; (b) $\frac 12 - \frac{\sqrt 3}2 i$; (c) $-\frac{9\sqrt 3}2 + \frac 92 i$; (d) $i$; (e) $-\frac{\sqrt 3^9}{2^9} + \frac 1{2^9}i$».

**In pratica chiede:** prendi questo numero, moltiplicalo per sé stesso nove volte. Che cosa viene? Nove moltiplicazioni nella forma $a + bi$ sono troppe: si passa alla forma polare.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: la distanza.** $|z| = \sqrt{\left(\frac{\sqrt 3}2\right)^2 + \left(\frac 12\right)^2} = \sqrt{\frac 34 + \frac 14} = \sqrt 1 = 1$. Il numero sta sul cerchio di raggio 1.
>
> **Passo 2: l'angolo.** Siccome la distanza è 1, coseno e seno sono le due parti: coseno $\frac{\sqrt 3}2$ e seno $-\frac 12$. Coseno positivo, seno negativo: quarto quadrante. Senza segni sono i valori di $\frac\pi6$, quindi l'angolo è $-\frac\pi6$. Allora $z = e^{-i\pi/6}$.
>
> **Passo 3: la potenza.** Distanza $1^9 = 1$. Angolo $9 \cdot \left(-\frac\pi6\right) = -\frac{9\pi}6 = -\frac{3\pi}2$. Quindi $z^9 = e^{-3\pi i/2}$.
>
> **Passo 4: accorcio.** Aggiungo un giro: $-\frac{3\pi}2 + 2\pi = -\frac{3\pi}2 + \frac{4\pi}2 = \frac\pi2$. Quindi $z^9 = e^{i\pi/2} = i$.
>
> **La risposta** è la (d).
>
> **Perché le risposte (c) ed (e) sono sbagliate.** Vengono da conti fatti sulle due parti separatamente: la (c) moltiplica per 9 ciascuna parte, la (e) eleva alla nona ciascuna parte (e cambia i segni). Per i numeri complessi questi conti non hanno senso: già $(1 + i)^2 = 2i$ non è $1^2 + i^2 = 0$.

### Altre due domande vere

> [!ESEMPIO] · Appello del 16/01/2025, domanda 1
> Dato $z = 2\cos\frac\pi4 + 2i\sin\frac\pi4$, allora $-3iz$ in coordinate polari è uguale a: (a) $-6i\cos\frac\pi4 - 6i\sin\frac\pi4$; (b) $-6e^{3\pi i/4}$; (c) $-6i\cos\frac\pi4 + 6i\sin\frac\pi4$; (d) $6e^{7\pi i/4}$; (e) $0$.
>
> **In pratica chiede:** moltiplica $z$ per $-3i$ e scrivi il risultato con distanza e angolo.
>
> **Soluzione.**
> 1. $z$ è già in forma trigonometrica: distanza 2, angolo $\frac\pi4$. Quindi $z = 2e^{i\pi/4}$.
> 2. Il numero $-3i$ è dritto verso il basso, a distanza 3: angolo $\frac{3\pi}2$. Quindi $-3i = 3e^{3\pi i/2}$.
> 3. Distanze moltiplicate: $2 \cdot 3 = 6$. Angoli sommati: $\frac\pi4 + \frac{3\pi}2 = \frac\pi4 + \frac{6\pi}4 = \frac{7\pi}4$.
> 4. Quindi $-3iz = 6\,e^{7\pi i/4}$: risposta (d).
>
> La (b) indica lo stesso numero, perché $-6e^{3\pi i/4} = 6e^{i\pi}e^{3\pi i/4} = 6e^{7\pi i/4}$. Ma non è in coordinate polari: il numero davanti è negativo. La (a) vale $-6\sqrt 2\,i$ e la (c) vale $0$: sono numeri diversi dal risultato, che è $3\sqrt 2 - 3\sqrt 2\,i$.

> [!ESEMPIO] · Appello del 02/09/2025, domanda 2
> Quale dei seguenti è una radice terza di $z = 8e^{3\pi i/5}$? (a) $4e^{\pi i/5}$; (b) $2e^{\pi i/5 + 2\pi i/3}$; (c) $8e^{\pi i/3 + 2\pi ik}$; (d) $2e^{3\pi i/5}$; (e) $2e^{3\pi i/5 + \pi i/3}$.
>
> **In pratica chiede:** quale di questi numeri, elevato al cubo, dà $8e^{3\pi i/5}$?
>
> **Soluzione.**
> 1. La distanza delle radici è $\sqrt[3]8 = 2$. Quindi la (a) e la (c) sono subito escluse: hanno distanza 4 e 8.
> 2. Gli angoli delle radici: $\frac{3\pi/5}3 + \frac{2k\pi}3 = \frac\pi5 + \frac{2k\pi}3$, per $k = 0, 1, 2$.
> 3. Con $k = 1$ viene $2e^{\pi i/5 + 2\pi i/3}$: risposta (b).
>
> **Controllo.** Elevo la (b) al cubo: distanza $2^3 = 8$, angolo $3 \cdot \left(\frac\pi5 + \frac{2\pi}3\right) = \frac{3\pi}5 + 2\pi$. Tolgo il giro: $8e^{3\pi i/5}$. Torna. La (d) ha l'angolo non diviso per 3: il suo cubo è $8e^{9\pi i/5}$. La (e) ha cubo $8e^{9\pi i/5 + \pi i} = 8e^{4\pi i/5}$.

### I metodi

> [!METODO] Le domande sui complessi in forma polare
> 1. Porta **tutto** in forma polare: il numero $z$, e anche gli altri pezzi come $-3i$, $-1$, $2i$.
> 2. Applica le regole: prodotto (distanze per, angoli più), inverso (distanza inversa, angolo opposto), potenza (distanza alla $n$, angolo per $n$), radici (radice $n$-esima della distanza, angoli $\frac{\vartheta_0 + 2k\pi}n$).
> 3. Accorcia gli angoli togliendo giri interi.
> 4. Scarta subito le risposte con la distanza sbagliata: è il controllo più veloce.
> 5. Per «quale è una radice», eleva la risposta candidata alla $n$: deve tornare il numero dato.

**Errori da evitare.**

- Scrivere un numero negativo davanti all'esponenziale in una forma polare.
- Elevare alla $n$ la distanza ma dimenticare di moltiplicare l'angolo, o il contrario.
- Prendere l'angolo del numero dato, e non quell'angolo diviso per $n$, come primo angolo delle radici.
- Dimenticare che un reale negativo ha angolo $\pi$.
- Sbagliare quadrante guardando solo il coseno.
- Trovare una radice sola invece di $n$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la tabella di seno e coseno negli angoli notevoli; $x = r\cos\vartheta$, $y = r\sin\vartheta$; $e^{i\vartheta} = \cos\vartheta + i\sin\vartheta$; $e^{i\pi} = -1$, $e^{i\pi/2} = i$; prodotto, inverso e potenza in forma polare; la formula delle radici $z_k = \sqrt[n]{r_0}\,e^{i(\vartheta_0 + 2k\pi)/n}$; il metodo per accorciare un angolo.

## Quiz

```quiz
D: Dato $z = 1 + i$, allora $z^{10}$ è uguale a:
+ $32i$
- $-32i$
- $32$
- $1024\,i$
- $10 + 10i$
= La domanda chiede una potenza alta, quindi conviene la forma polare. $1 + i$ ha distanza $\sqrt 2$ e angolo $\frac\pi4$. Alla decima la distanza diventa $(\sqrt 2)^{10} = 2^5 = 32$ e l'angolo diventa $10 \cdot \frac\pi4 = \frac{5\pi}2$; togliendo un giro resta $\frac\pi2$, cioè la direzione di $i$. Il risultato è $32i$. Controllo veloce: $(1 + i)^2 = 2i$ e $(2i)^5 = 32i^5 = 32i$. La risposta più insidiosa è $1024\,i$: $1024 = 2^{10}$ viene elevando alla decima 2 invece di $\sqrt 2$, cioè sbagliando la distanza di $1 + i$. Simile agli appelli del 10/07/2024 e del 24/01/2024.

D: Dato $z = 2\cos\frac{\pi}{12} + 2i\sin\frac{\pi}{12}$, allora $z^6$ è uguale a:
+ $64i$
- $2i$
- $64$
- $-64$
- $12i$
= Il numero è già in forma trigonometrica: distanza 2, angolo $\frac\pi{12}$, quindi $z = 2e^{i\pi/12}$. Alla sesta la distanza diventa $2^6 = 64$ e l'angolo $6 \cdot \frac\pi{12} = \frac\pi2$, la direzione di $i$: il risultato è $64i$. La risposta $2i$ ha l'angolo giusto ma dimentica di elevare la distanza; $12i$ moltiplica la distanza per 6 invece di elevarla alla sesta; $64$ dimentica di moltiplicare l'angolo. Simile all'appello del 06/09/2024, domanda 1.

D: Dato $z = 3e^{i\pi/3}$, il numero $-2iz$ scritto in forma polare $re^{i\vartheta}$ con $r > 0$ e $0 \le \vartheta < 2\pi$ è:
+ $6e^{11\pi i/6}$
- $-6e^{5\pi i/6}$
- $6e^{5\pi i/6}$
- $5e^{11\pi i/6}$
- $6e^{4\pi i/3}$
= Si tratta di un prodotto, quindi distanze per e angoli più. Il numero $-2i$ è dritto verso il basso a distanza 2, cioè $2e^{3\pi i/2}$. Distanza del prodotto $2 \cdot 3 = 6$; angolo $\frac\pi3 + \frac{3\pi}2 = \frac{2\pi}6 + \frac{9\pi}6 = \frac{11\pi}6$. Il risultato è $6e^{11\pi i/6}$. La risposta più insidiosa è $-6e^{5\pi i/6}$: indica lo stesso numero, ma ha un numero negativo davanti, quindi non è una forma polare. $6e^{5\pi i/6}$ viene prendendo l'angolo di $-2i$ come $\frac\pi2$, che è l'angolo di $2i$; $5$ somma le distanze invece di moltiplicarle; $6e^{4\pi i/3}$ usa l'angolo $\pi$ per $-i$. Simile all'appello del 16/01/2025, domanda 1.

D: Quale dei seguenti numeri è una radice terza di $8i$?
+ $-2i$
- $2i$
- $2e^{i\pi/3}$
- $8e^{i\pi/6}$
- $\frac 83\,i$
= Una radice terza di $8i$ è un numero che elevato al cubo dà $8i$. In forma polare $8i = 8e^{i\pi/2}$: le radici terze hanno distanza $\sqrt[3]8 = 2$ e angoli $\frac\pi6$, $\frac\pi6 + \frac{2\pi}3 = \frac{5\pi}6$ e $\frac{5\pi}6 + \frac{2\pi}3 = \frac{3\pi}2$. L'ultima è $2e^{3\pi i/2} = -2i$. Controllo: $(-2i)^3 = -8i^3 = -8 \cdot (-i) = 8i$. La risposta più insidiosa è $2i$, che sembra «la radice di $8i$», ma $(2i)^3 = 8i^3 = -8i$: il segno è sbagliato. $\left(2e^{i\pi/3}\right)^3 = 8e^{i\pi} = -8$; $8e^{i\pi/6}$ e $\frac 83 i$ hanno la distanza sbagliata. Simile all'appello del 02/09/2025, domanda 2.

D: Quale dei seguenti numeri **non** è soluzione di $z^6 = 1$?
+ $e^{i\pi/6}$
- $1$
- $-1$
- $e^{i\pi/3}$
- $e^{2\pi i/3}$
= Le soluzioni di $z^6 = 1$ sono le radici seste dell'unità: distanza 1 e angoli multipli di un sesto di giro, cioè di $\frac{2\pi}6 = \frac\pi3$. Sono $1$ (angolo 0), $e^{i\pi/3}$, $e^{2\pi i/3}$, $-1 = e^{i\pi}$ e altre due. L'angolo $\frac\pi6$ non è un multiplo di $\frac\pi3$: infatti $\left(e^{i\pi/6}\right)^6 = e^{i\pi} = -1$, non 1. Le altre quattro risposte sono tutte soluzioni, e la più insidiosa è $-1$: elevato a una potenza pari dà proprio 1. Simile all'appello del 05/02/2026, domanda 1.

D: Dato $z = \frac{\sqrt 2}2(1 + i)$, allora $z^{2027}$ è uguale a:
+ $\frac{\sqrt 2}2(-1 + i)$
- $\frac{\sqrt 2}2(1 + i)$
- $2027(1 + i)$
- $-1$
- $i$
= Il numero $\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i$ ha distanza 1 e angolo $\frac\pi4$, quindi $z = e^{i\pi/4}$. La potenza ha distanza 1 e angolo $\frac{2027\pi}4$. Un giro in quarti è $\frac{8\pi}4$, e $2027 = 8 \cdot 253 + 3$: restano $\frac{3\pi}4$. Quindi $z^{2027} = e^{3\pi i/4} = -\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i$. La risposta $\frac{\sqrt 2}2(1 + i)$ è quella di chi divide 2027 per 8 e sbaglia il resto, trovando 1; $2027(1 + i)$ moltiplica invece di elevare. Simile all'appello del 07/02/2025, domanda 1.

D: Se $z = 3e^{2\pi i/5}$, il coniugato $\bar z$ è:
+ $3e^{8\pi i/5}$
- $-3e^{2\pi i/5}$
- $3e^{3\pi i/5}$
- $\frac 13e^{-2\pi i/5}$
- $3e^{-8\pi i/5}$
= Il coniugato è il riflesso rispetto all'asse orizzontale: stessa distanza, angolo cambiato di segno. Quindi $\bar z = 3e^{-2\pi i/5}$, e aggiungendo un giro $-\frac{2\pi}5 + \frac{10\pi}5 = \frac{8\pi}5$. La risposta più insidiosa è $3e^{-8\pi i/5}$, che ha un segno meno come il coniugato; ma $-\frac{8\pi}5 + 2\pi = \frac{2\pi}5$, quindi è $z$ stesso. $-3e^{2\pi i/5}$ è $-z$; $3e^{3\pi i/5}$ è il riflesso rispetto all'asse verticale; $\frac 13e^{-2\pi i/5}$ è l'inverso.

D: Se $z = 2e^{i\pi/3}$, l'inverso $z^{-1}$ è:
+ $\frac 14 - \frac{\sqrt 3}4 i$
- $\frac 14 + \frac{\sqrt 3}4 i$
- $1 - \sqrt 3 i$
- $\frac 12 - \frac{\sqrt 3}2 i$
- $-\frac 14 + \frac{\sqrt 3}4 i$
= L'inverso ha distanza inversa e angolo opposto: $z^{-1} = \frac 12e^{-i\pi/3}$. L'angolo $-\frac\pi3$ ha coseno $\frac 12$ e seno $-\frac{\sqrt 3}2$, quindi $z^{-1} = \frac 12\left(\frac 12 - \frac{\sqrt 3}2 i\right) = \frac 14 - \frac{\sqrt 3}4 i$. La risposta $1 - \sqrt 3 i$ è il coniugato: ha l'angolo giusto, ma la distanza non è stata invertita. $\frac 12 - \frac{\sqrt 3}2 i$ è $e^{-i\pi/3}$: dimentica del tutto la distanza. $\frac 14 + \frac{\sqrt 3}4 i$ ha invertito la distanza ma non l'angolo.

D: Quanto vale la parte reale di $(1 + i\sqrt 3)^5$? Scrivi un numero.
N: 16
= Il numero $1 + i\sqrt 3$ ha distanza 2 e angolo $\frac\pi3$. Alla quinta la distanza diventa $2^5 = 32$ e l'angolo $\frac{5\pi}3$, nel quarto quadrante, con coseno $\frac 12$ e seno $-\frac{\sqrt 3}2$. Quindi $(1 + i\sqrt 3)^5 = 32\left(\frac 12 - \frac{\sqrt 3}2 i\right) = 16 - 16\sqrt 3\,i$, e la parte reale è 16.

D: Le quattro soluzioni di $z^4 = -16$, nel piano complesso, sono:
+ i vertici di un quadrato centrato nell'origine con un vertice in $\sqrt 2 + \sqrt 2\,i$
- i vertici di un quadrato centrato nell'origine con un vertice in $2$
- i vertici di un quadrato centrato nell'origine con un vertice in $4$
- i vertici di un triangolo equilatero centrato nell'origine
- due numeri reali e due numeri complessi coniugati
= Il numero $-16$ è $16e^{i\pi}$. Le radici quarte hanno distanza $\sqrt[4]{16} = 2$ e angoli $\frac\pi4$, poi passi di un quarto di giro: $\frac{3\pi}4$, $\frac{5\pi}4$, $\frac{7\pi}4$. Il primo è $2e^{i\pi/4} = \sqrt 2 + \sqrt 2\,i$, e i quattro punti sono $\pm\sqrt 2 \pm \sqrt 2\,i$. La risposta più insidiosa è il quadrato con un vertice in 2: è quello delle soluzioni di $z^4 = 16$, che hanno angolo iniziale 0 invece di $\frac\pi4$. Il quadrato con un vertice in 4 viene prendendo $\sqrt{16} = 4$ invece della radice quarta. Le soluzioni sono quattro, non tre; e nessuna è reale, perché un numero reale alla quarta non è mai negativo.
```

## Esercizi

::: esercizio base Riscaldamento: gradi e radianti
Scrivi in radianti gli angoli di $90°$, $120°$ e $300°$.
::: soluzione
Per passare da gradi a radianti si moltiplica per $\frac\pi{180}$ e si semplifica.
1. $90 \cdot \frac\pi{180} = \frac{90\pi}{180} = \frac\pi2$, dividendo sopra e sotto per 90.
2. $120 \cdot \frac\pi{180} = \frac{120\pi}{180} = \frac{2\pi}3$, dividendo sopra e sotto per 60.
3. $300 \cdot \frac\pi{180} = \frac{300\pi}{180} = \frac{5\pi}3$, dividendo sopra e sotto per 60.

Controllo: $300°$ è un giro meno $60°$, e infatti $\frac{5\pi}3 = 2\pi - \frac\pi3$.
:::

::: esercizio base Riscaldamento: leggere una forma polare
Il numero $z = 3e^{i\pi/4}$: qual è il suo modulo? Qual è il suo argomento? Sta dentro o fuori dalla circonferenza di raggio 1?
::: soluzione
1. Il numero davanti è il modulo: $|z| = 3$.
2. L'angolo nell'esponente è l'argomento: $\frac\pi4$, cioè $45°$.
3. La distanza dall'origine è 3, più grande di 1: il numero sta **fuori** dalla circonferenza di raggio 1.

In forma $a + bi$: $3\left(\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i\right) = \frac{3\sqrt 2}2 + \frac{3\sqrt 2}2 i$.
:::

::: esercizio base Riscaldamento: un prodotto in forma polare
Calcola $2e^{i\pi/6} \cdot 5e^{5\pi i/6}$ e scrivi il risultato nella forma $a + bi$.
::: soluzione
1. Distanze moltiplicate: $2 \cdot 5 = 10$.
2. Angoli sommati: $\frac\pi6 + \frac{5\pi}6 = \frac{6\pi}6 = \pi$.
3. Il prodotto è $10e^{i\pi} = 10 \cdot (-1) = -10$.
:::

::: esercizio base Riscaldamento: quante radici
Quante soluzioni ha l'equazione $z^4 = 1$? Scrivile tutte nella forma $a + bi$ e di' che figura formano.
::: soluzione
1. Sono 4, perché l'esponente è 4.
2. Il numero 1 ha distanza 1 e angolo 0. Le radici hanno distanza $\sqrt[4]1 = 1$ e angoli $0$, $\frac{2\pi}4 = \frac\pi2$, $\pi$, $\frac{3\pi}2$: quarti di giro.
3. Sono $1$, $i$, $-1$, $-i$.
4. Formano un quadrato con i vertici sugli assi.

Controllo: $i^4 = (i^2)^2 = (-1)^2 = 1$.
:::

::: esercizio base Conversioni
(a) Scrivi in forma polare: $-\sqrt 3 + i$, $-4$, $3i$, $-1 - i$. (b) Scrivi nella forma $a + bi$: $4e^{2\pi i/3}$, $\sqrt 2\,e^{-3\pi i/4}$, $5e^{i\pi}$.
::: soluzione
(a)
1. $-\sqrt 3 + i$: la distanza è $\sqrt{3 + 1} = 2$. Coseno $-\frac{\sqrt 3}2$ e seno $\frac 12$: secondo quadrante. Senza segni sono i valori di $\frac\pi6$, quindi l'angolo è $\pi - \frac\pi6 = \frac{5\pi}6$. Risultato: $2e^{5\pi i/6}$.
2. $-4$: reale negativo, distanza 4, angolo $\pi$. Risultato: $4e^{i\pi}$.
3. $3i$: dritto verso l'alto, distanza 3, angolo $\frac\pi2$. Risultato: $3e^{i\pi/2}$.
4. $-1 - i$: distanza $\sqrt{1 + 1} = \sqrt 2$. Coseno e seno uguali a $-\frac{\sqrt 2}2$: terzo quadrante. L'angolo è $\pi + \frac\pi4 = \frac{5\pi}4$. Risultato: $\sqrt 2\,e^{5\pi i/4}$.

(b)
1. $4e^{2\pi i/3} = 4\left(-\frac 12 + \frac{\sqrt 3}2 i\right) = -2 + 2\sqrt 3\,i$.
2. $\sqrt 2\,e^{-3\pi i/4} = \sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -1 - i$.
3. $5e^{i\pi} = 5 \cdot (-1) = -5$.

Controllo sul primo della (a): $2\cos\frac{5\pi}6 = 2 \cdot \left(-\frac{\sqrt 3}2\right) = -\sqrt 3$ e $2\sin\frac{5\pi}6 = 2 \cdot \frac 12 = 1$. Torna $-\sqrt 3 + i$.
:::

::: esercizio base Esercizio 3.7 delle dispense: tre insiemi in coordinate polari
Disegna nel piano complesso i seguenti sottoinsiemi:
1. $A = \{z = re^{i\vartheta} \in \C \text{ tali che } \vartheta = \frac\pi2\}$;
2. $B = \{z = re^{i\vartheta} \in \C \text{ tali che } \vartheta = (2k + 1)\pi,\ k \in \Z\}$;
3. $C = \{z = re^{i\vartheta} \in \C \text{ tali che } r = 1 \text{ e } 0 \le \vartheta \le \pi\}$.
::: soluzione
In tutti e tre gli insiemi $z$ è scritto in forma polare. Quindi $z$ non è zero e la distanza $r$ è positiva.

1. **$A$** contiene i numeri all'angolo $\frac\pi2$, a qualsiasi distanza: $re^{i\pi/2} = ri$ con $r$ positivo. È la **semiretta verticale verso l'alto**, senza l'origine.
2. **$B$**: gli angoli $(2k + 1)\pi$ sono i multipli **dispari** di $\pi$: $\pi$, $3\pi$, $-\pi$, e così via. Differiscono tutti da $\pi$ per giri interi, quindi indicano tutti la direzione di $-1$. $B$ è la **semiretta orizzontale verso sinistra**, senza l'origine: i numeri reali negativi.
3. **$C$**: distanza 1 vuol dire circonferenza di raggio 1. L'angolo da $0$ a $\pi$, estremi compresi, ne prende la **metà superiore**, da $1$ a $-1$, con i due estremi.

```grafico
titolo: $A$ (semiasse immaginario positivo), $B$ (semiasse reale negativo), $C$ (semicirconferenza superiore); l'origine non appartiene ad $A$ né a $B$
x: -2.5 2.5
y: -1 2
nomi: $\operatorname{Re}$ $\operatorname{Im}$
segmento: 0 0 0 2 | blu | spesso
segmento: 0 0 -2.5 0 | ambra | spesso
arco: 0 0 1 0 pi | viola | spesso
punto: 1 0 | viola | $1$ | s
punto: -1 0 | viola | $-1$ | s
punto: 0 0 | grigio | vuoto
testo: 0.25 1.7 | blu | $A$
testo: -2 0.25 | ambra | $B$
testo: 0.85 0.85 | viola | $C$
```
:::

::: esercizio base Esercizio 3.8 delle dispense: $(1 - i)^3$ in due modi
Calcola $(1 - i)^3$ usando le coordinate polari, e verifica il risultato con le coordinate cartesiane.
::: soluzione
**Con le coordinate polari.**
1. La distanza di $1 - i$ è $\sqrt{1 + 1} = \sqrt 2$. Coseno $\frac{\sqrt 2}2$ e seno $-\frac{\sqrt 2}2$: quarto quadrante, angolo $-\frac\pi4$. Quindi $1 - i = \sqrt 2\,e^{-i\pi/4}$.
2. Al cubo: distanza $(\sqrt 2)^3 = \sqrt 2 \cdot \sqrt 2 \cdot \sqrt 2 = 2\sqrt 2$, angolo $3 \cdot \left(-\frac\pi4\right) = -\frac{3\pi}4$.
3. L'angolo $-\frac{3\pi}4$ è nel terzo quadrante: coseno $-\frac{\sqrt 2}2$ e seno $-\frac{\sqrt 2}2$.
4. Quindi
   $$(1 - i)^3 = 2\sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -2 - 2i,$$
   perché $2\sqrt 2 \cdot \frac{\sqrt 2}2 = \frac{2 \cdot 2}2 = 2$.

**Con le coordinate cartesiane.**
1. $(1 - i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i$.
2. $(1 - i)^3 = (-2i)(1 - i) = -2i + 2i^2 = -2i - 2 = -2 - 2i$.

I due metodi danno lo stesso risultato.
:::

::: esercizio medio Esercizio 3.5 delle dispense: $z^4 = i$
Calcola le soluzioni dell'equazione $z^4 = i$ e disegnale nel piano complesso.
::: soluzione
1. Il numero $i$ ha distanza 1 e angolo $\frac\pi2$: $i = 1 \cdot e^{i\pi/2}$.
2. Le radici hanno distanza $\sqrt[4]1 = 1$: stanno tutte sulla circonferenza di raggio 1.
3. Il primo angolo è $\frac\pi2$ diviso 4, cioè $\frac\pi8$. Il passo è $\frac{2\pi}4 = \frac\pi2$. Gli angoli sono
   $$\frac\pi8, \qquad \frac\pi8 + \frac{4\pi}8 = \frac{5\pi}8, \qquad \frac{9\pi}8, \qquad \frac{13\pi}8.$$
4. Le soluzioni sono $z_k = e^{i(\pi/8 + k\pi/2)}$ per $k = 0, 1, 2, 3$. In gradi gli angoli sono $22{,}5°$, $112{,}5°$, $202{,}5°$ e $292{,}5°$. Formano un quadrato sulla circonferenza di raggio 1.

Controllo: $z_0^4 = e^{4\pi i/8} = e^{i\pi/2} = i$.

Nota: passare da una radice alla successiva vuol dire girare di un quarto di giro, cioè moltiplicare per $i$. Quindi le quattro radici sono $w$, $iw$, $-w$, $-iw$, con $w = z_0$.

```grafico
titolo: Le quattro soluzioni di $z^4 = i$: un quadrato sulla circonferenza unitaria, con un vertice ad angolo $\frac\pi8$
x: -1.6 1.6
y: -1.3 1.3
nomi: $\operatorname{Re}$ $\operatorname{Im}$
cerchio: 0 0 1 | grigio | sottile
poligono: 0.9239 0.3827 -0.3827 0.9239 -0.9239 -0.3827 0.3827 -0.9239 | ambra | tratteggio
punto: 0 1 | rosa | $i$ | ne
punto: 0.9239 0.3827 | ambra | $z_0$ | e
punto: -0.3827 0.9239 | ambra | $z_1$ | no
punto: -0.9239 -0.3827 | ambra | $z_2$ | o
punto: 0.3827 -0.9239 | ambra | $z_3$ | se
arco: 0 0 0.35 0 pi/8 | accento
```

> [!APPROFONDIMENTO] la forma $a + bi$
> L'angolo $\frac\pi8$ non è nella tabella. Con la formula $\cos^2\alpha = \frac{1 + \cos 2\alpha}2$ si trova $\cos\frac\pi8 = \frac{\sqrt{2 + \sqrt 2}}2 \approx 0{,}924$ e $\sin\frac\pi8 = \frac{\sqrt{2 - \sqrt 2}}2 \approx 0{,}383$. Quindi $z_0 = \frac{\sqrt{2 + \sqrt 2}}2 + \frac{\sqrt{2 - \sqrt 2}}2 i$, e le altre radici si ottengono moltiplicando per $i$, $-1$, $-i$. L'esercizio non lo chiede: la forma polare è già una risposta completa.
:::

::: esercizio medio Esercizio 3.6 delle dispense: coordinate polari
Determina coordinate polari per i seguenti numeri complessi:
$$\sin(2), \qquad \cos(2) + i\sin(2), \qquad \cos(2) - i\sin(2), \qquad \frac{1 + i}2, \qquad 1 - i\sqrt 3.$$
::: soluzione
Qui «2» è un angolo di 2 radianti, circa $114{,}6°$. Sta nel secondo quadrante, dove il seno è positivo e il coseno negativo.

1. **$\sin(2)$** è un numero **reale**, circa $0{,}909$, ed è positivo. Un reale positivo sta sulla semiretta orizzontale verso destra: distanza $\sin 2$, angolo 0. Quindi $\sin 2 = (\sin 2)\,e^{i \cdot 0}$. Se fosse stato negativo, l'angolo sarebbe stato $\pi$ e la distanza $-\sin 2$.
2. **$\cos(2) + i\sin(2)$** è per definizione $e^{2i}$: distanza 1, angolo 2. Nessun conto da fare.
3. **$\cos(2) - i\sin(2)$**: siccome $\cos(-2) = \cos 2$ e $\sin(-2) = -\sin 2$, il numero è $\cos(-2) + i\sin(-2) = e^{-2i}$. Distanza 1, angolo $-2$ (oppure $2\pi - 2$). È il coniugato del numero precedente.
4. **$\frac{1 + i}2$** è $\frac 12 + \frac 12 i$. Distanza: $\sqrt{\frac 14 + \frac 14} = \sqrt{\frac 12} = \frac{\sqrt 2}2$. Coseno: $\frac 12$ diviso $\frac{\sqrt 2}2$, cioè $\frac 1{\sqrt 2} = \frac{\sqrt 2}2$; il seno è uguale. L'angolo è $\frac\pi4$. Quindi $\frac{1 + i}2 = \frac{\sqrt 2}2\,e^{i\pi/4}$.
5. **$1 - i\sqrt 3$**: distanza $\sqrt{1 + 3} = 2$. Coseno $\frac 12$ e seno $-\frac{\sqrt 3}2$: quarto quadrante, angolo $-\frac\pi3$ (oppure $\frac{5\pi}3$). Quindi $1 - i\sqrt 3 = 2e^{-i\pi/3}$.
:::

::: esercizio medio Prodotto e quoziente in forma polare
Siano $z = 2e^{i\pi/3}$ e $w = 4e^{3\pi i/4}$. Calcola in forma polare $zw$, $\frac zw$, $w^{-1}$ e $\bar z\,w$.
::: soluzione
Per sommare $\frac\pi3$ e $\frac{3\pi}4$ serve il denominatore comune 12: $\frac\pi3 = \frac{4\pi}{12}$ e $\frac{3\pi}4 = \frac{9\pi}{12}$.

1. $zw$: distanze $2 \cdot 4 = 8$, angoli $\frac{4\pi}{12} + \frac{9\pi}{12} = \frac{13\pi}{12}$. Risultato: $8e^{13\pi i/12}$.
2. $\frac zw$: distanze $\frac 24 = \frac 12$, angoli $\frac{4\pi}{12} - \frac{9\pi}{12} = -\frac{5\pi}{12}$. Risultato: $\frac 12\,e^{-5\pi i/12}$, oppure $\frac 12\,e^{19\pi i/12}$ aggiungendo un giro.
3. $w^{-1}$: distanza $\frac 14$, angolo $-\frac{3\pi}4$. Risultato: $\frac 14\,e^{-3\pi i/4} = \frac 14\,e^{5\pi i/4}$.
4. $\bar z = 2e^{-i\pi/3}$. Quindi $\bar z\,w$ ha distanza $2 \cdot 4 = 8$ e angolo $-\frac{4\pi}{12} + \frac{9\pi}{12} = \frac{5\pi}{12}$. Risultato: $8e^{5\pi i/12}$.

Controllo sul primo: $z \cdot w$ deve avere distanza uguale al prodotto delle distanze, 8, ed è così.
:::

::: esercizio medio Dal foglio 1 del tutorato: $z^{10}\bar z$
Scrivi $z = \frac 12(-\sqrt 3 + i)$ in coordinate polari e calcola $z^{10}\bar z$ nella forma $a + bi$.
::: soluzione
1. $z = -\frac{\sqrt 3}2 + \frac 12 i$. Distanza: $\sqrt{\frac 34 + \frac 14} = 1$. Coseno $-\frac{\sqrt 3}2$, seno $\frac 12$: secondo quadrante, angolo $\frac{5\pi}6$. Quindi $z = e^{5\pi i/6}$.
2. $z^{10} = e^{50\pi i/6}$ e $\bar z = e^{-5\pi i/6}$. Nel prodotto gli angoli si sommano: $z^{10}\bar z = e^{(50 - 5)\pi i/6} = e^{45\pi i/6} = e^{15\pi i/2}$.
3. Accorcio: un giro in mezzi è $\frac 42\pi$, e $15 = 4 \cdot 3 + 3$. Quindi $\frac{15\pi}2$ è 3 giri più $\frac{3\pi}2$.
4. $z^{10}\bar z = e^{3\pi i/2} = -i$.

Una scorciatoia: siccome la distanza di $z$ è 1, il coniugato è anche l'inverso (esercizio 8 della lezione L02). Quindi $z^{10}\bar z = z^{10}z^{-1} = z^9 = e^{45\pi i/6}$, lo stesso conto.
:::

::: esercizio medio Dal foglio 1 del tutorato: tre calcoli di radici
Calcola: (a) le radici quarte di $-i$; (b) le radici terze di $8$; (c) le radici quinte di $\frac 12(-\sqrt 3 + i)$.
::: soluzione
(a) $-i$ è dritto verso il basso: distanza 1, angolo $\frac{3\pi}2$. Le radici quarte hanno distanza 1. Il primo angolo è $\frac{3\pi}2$ diviso 4, cioè $\frac{3\pi}8$; il passo è $\frac\pi2 = \frac{4\pi}8$. Gli angoli sono $\frac{3\pi}8$, $\frac{7\pi}8$, $\frac{11\pi}8$, $\frac{15\pi}8$. Le radici sono $e^{3\pi i/8}$, $e^{7\pi i/8}$, $e^{11\pi i/8}$, $e^{15\pi i/8}$.

(b) $8$ è un reale positivo: distanza 8, angolo 0. Le radici terze hanno distanza $\sqrt[3]8 = 2$ e angoli $0$, $\frac{2\pi}3$, $\frac{4\pi}3$. Sono
$$2, \qquad 2e^{2\pi i/3} = -1 + i\sqrt 3, \qquad 2e^{4\pi i/3} = -1 - i\sqrt 3.$$
Tra i numeri reali c'era solo 2; le altre due sono complesse e coniugate tra loro.

(c) Dall'esercizio precedente $\frac 12(-\sqrt 3 + i) = e^{5\pi i/6}$. Le radici quinte hanno distanza 1. Il primo angolo è $\frac{5\pi}6$ diviso 5, cioè $\frac\pi6$; il passo è $\frac{2\pi}5$. Per sommarli uso i trentesimi: $\frac\pi6 = \frac{5\pi}{30}$ e $\frac{2\pi}5 = \frac{12\pi}{30}$. Gli angoli sono
$$\frac{5\pi}{30} = \frac\pi6, \qquad \frac{17\pi}{30}, \qquad \frac{29\pi}{30}, \qquad \frac{41\pi}{30}, \qquad \frac{53\pi}{30}.$$
Le radici sono $e^{i\pi/6} = \frac{\sqrt 3}2 + \frac 12 i$ e le altre quattro $e^{17\pi i/30}$, $e^{29\pi i/30}$, $e^{41\pi i/30}$, $e^{53\pi i/30}$: i vertici di un pentagono regolare.

Controllo sulla (b): $(-1 + i\sqrt 3)^3$ ha distanza $2^3 = 8$ e angolo $3 \cdot \frac{2\pi}3 = 2\pi$, quindi vale 8.
:::

::: esercizio medio Dal libro di Martelli (Esercizio 1.13): $z^4 = -16$
Determina tutte le soluzioni di $z^4 = -16$ e disegnale.
::: soluzione
1. $-16$ è un reale negativo: $-16 = 16e^{i\pi}$.
2. La distanza delle soluzioni è $\sqrt[4]{16} = 2$, perché $2^4 = 16$.
3. Il primo angolo è $\frac\pi4$; il passo è $\frac\pi2$. Gli angoli sono $\frac\pi4$, $\frac{3\pi}4$, $\frac{5\pi}4$, $\frac{7\pi}4$.
4. Nella forma $a + bi$, con $2\cos\frac\pi4 = 2 \cdot \frac{\sqrt 2}2 = \sqrt 2$:
   $$\sqrt 2 + \sqrt 2\,i, \qquad -\sqrt 2 + \sqrt 2\,i, \qquad -\sqrt 2 - \sqrt 2\,i, \qquad \sqrt 2 - \sqrt 2\,i.$$

Sono i vertici di un quadrato con il centro nell'origine, su un cerchio di raggio 2, girato di $45°$ rispetto agli assi.

Controllo: $(\sqrt 2 + \sqrt 2\,i)^2 = 2 + 4i + 2i^2 = 2 + 4i - 2 = 4i$, e $(4i)^2 = 16i^2 = -16$.

```grafico
titolo: Le soluzioni di $z^4 = -16$: un quadrato di raggio $2$ con i vertici sulle bisettrici
x: -3 3
y: -2.5 2.5
nomi: $\operatorname{Re}$ $\operatorname{Im}$
cerchio: 0 0 2 | grigio | sottile
poligono: sqrt(2) sqrt(2) -sqrt(2) sqrt(2) -sqrt(2) -sqrt(2) sqrt(2) -sqrt(2) | ambra | tratteggio
punto: sqrt(2) sqrt(2) | ambra | $\sqrt 2 + \sqrt 2 i$ | ne
punto: -sqrt(2) sqrt(2) | ambra | $-\sqrt 2 + \sqrt 2 i$ | no
punto: -sqrt(2) -sqrt(2) | ambra | $-\sqrt 2 - \sqrt 2 i$ | so
punto: sqrt(2) -sqrt(2) | ambra | $\sqrt 2 - \sqrt 2 i$ | se
```
:::

::: esercizio difficile Dal libro di Martelli (Esercizio 1.14): $z^4 = \bar z^3$
Determina tutti i numeri complessi $z$ tali che $z^4 = \bar z^3$.
::: soluzione
**Il caso $z = 0$.** $0^4 = 0$ e anche il coniugato di 0, al cubo, è 0. Quindi lo zero è una soluzione.

**Il caso $z$ diverso da zero.** Scrivo $z = re^{i\vartheta}$ con $r$ positivo. Il coniugato ha la stessa distanza e l'angolo opposto: $\bar z = re^{-i\vartheta}$. Allora
$$z^4 = r^4e^{4i\vartheta}, \qquad \bar z^3 = r^3e^{-3i\vartheta}.$$
Due forme polari sono uguali esattamente quando:
1. le distanze sono uguali: $r^4 = r^3$. Divido per $r^3$, che non è zero: $r = 1$;
2. gli angoli differiscono di giri interi: $4\vartheta = -3\vartheta + 2k\pi$. Porto $-3\vartheta$ a sinistra: $7\vartheta = 2k\pi$, cioè $\vartheta = \frac{2k\pi}7$.

Per $k = 0, 1, \dots, 6$ vengono sette punti diversi; gli altri valori di $k$ ripetono gli stessi. Le soluzioni diverse da zero sono quindi le **radici settime dell'unità** $e^{2k\pi i/7}$: i vertici di un ettagono regolare sulla circonferenza di raggio 1.

**In totale le soluzioni sono 8**: lo zero e le sette radici settime di 1.

Controllo su una di esse, $z = e^{2\pi i/7}$: $z^4 = e^{8\pi i/7}$ e $\bar z^3 = e^{-6\pi i/7}$. Gli angoli differiscono di $\frac{8\pi}7 + \frac{6\pi}7 = \frac{14\pi}7 = 2\pi$, un giro intero: sono lo stesso numero.
:::

::: esercizio esame Come all'esame: una potenza molto alta
Dato $z = -\frac 12 + \frac{\sqrt 3}2 i$, allora $z^{2026}$ è uguale a: (a) $z$; (b) $1$; (c) $-1$; (d) $\bar z$; (e) $2026\,z$.
::: soluzione
1. **Forma polare.** Distanza: $\sqrt{\frac 14 + \frac 34} = 1$. Coseno $-\frac 12$ e seno $\frac{\sqrt 3}2$: secondo quadrante, angolo $\frac{2\pi}3$. Quindi $z = e^{2\pi i/3}$.
2. **Potenza.** $z^{2026} = e^{2026 \cdot 2\pi i/3} = e^{4052\pi i/3}$.
3. **Accorcio.** Un giro in terzi è $\frac 63\pi$. Divido: $4052 = 6 \cdot 675 + 2$. Quindi $\frac{4052\pi}3$ è 675 giri più $\frac{2\pi}3$.
4. $z^{2026} = e^{2\pi i/3} = z$: risposta (a).

Scorciatoia: $z$ è una radice terza dell'unità, perché $z^3 = e^{2\pi i} = 1$. Quindi conta solo il resto di 2026 diviso 3: $2026 = 3 \cdot 675 + 1$, e $z^{2026} = (z^3)^{675} \cdot z = 1 \cdot z = z$. La risposta (e) è l'errore di chi moltiplica invece di elevare.
:::

::: esercizio esame Come all'esame: quale è una radice
Quale dei seguenti numeri è una radice quarta di $-4$? (a) $1 + i$; (b) $\sqrt 2$; (c) $2i$; (d) $\sqrt 2\,i$; (e) $1 + 2i$.
::: soluzione
**Con la formula.**
1. $-4 = 4e^{i\pi}$.
2. Le radici quarte hanno distanza $\sqrt[4]4 = \sqrt 2$, perché $(\sqrt 2)^4 = 4$.
3. Gli angoli sono $\frac\pi4$, poi passi di $\frac\pi2$.
4. Con il primo angolo: $\sqrt 2\,e^{i\pi/4} = \sqrt 2\left(\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i\right) = 1 + i$. Risposta (a). Le altre radici sono $-1 + i$, $-1 - i$, $1 - i$.

**Scartando le risposte.** $|2i| = 2$ e $|1 + 2i| = \sqrt 5$ hanno la distanza sbagliata: deve essere $\sqrt 2$. $\sqrt 2$ e $\sqrt 2\,i$ hanno la distanza giusta ma angoli $0$ e $\frac\pi2$, che non sono nella lista: infatti $(\sqrt 2)^4 = 4$ e $(\sqrt 2\,i)^4 = 4i^4 = 4$, non $-4$.

Controllo della (a): $(1 + i)^2 = 2i$ e $(2i)^2 = 4i^2 = -4$.
:::

## Domande di ripasso

::: domanda Che cosa sono le coordinate polari di un punto diverso dall'origine? Come si passa da quelle cartesiane e viceversa?
Sono la distanza $r$ del punto dall'origine e l'angolo $\vartheta$ con la semiretta orizzontale verso destra. Da polari a cartesiane: $x = r\cos\vartheta$, $y = r\sin\vartheta$. Al contrario: $r$ con Pitagora, poi coseno e seno sono le coordinate divise per $r$ (Definizione 3.1).
:::

::: domanda Perché per trovare l'angolo servono sia il coseno sia il seno?
Perché lo stesso coseno va bene per due angoli: $(1, \sqrt 3)$ e $(1, -\sqrt 3)$ hanno tutti e due coseno $\frac 12$, ma uno è in alto e l'altro in basso. I segni di coseno e seno insieme dicono il quadrante.
:::

::: domanda Che cosa vuol dire $e^{i\vartheta}$, e che cosa sono modulo e argomento di $z = re^{i\vartheta}$?
$e^{i\vartheta}$ è un'abbreviazione di $\cos\vartheta + i\sin\vartheta$: il punto della circonferenza di raggio 1 all'angolo $\vartheta$. In $z = re^{i\vartheta}$ il numero positivo $r$ è il modulo, cioè la distanza dall'origine, e $\vartheta$ è l'argomento, cioè l'angolo.
:::

::: domanda Che cosa dice la Proposizione 3.2 e perché è vera?
Dice che $e^{i(\vartheta + \varphi)} = e^{i\vartheta}e^{i\varphi}$: moltiplicare due punti del cerchio vuol dire sommare gli angoli. Si dimostra svolgendo il prodotto $(\cos\vartheta + i\sin\vartheta)(\cos\varphi + i\sin\varphi)$: le due parti che escono sono le formule di addizione del coseno e del seno.
:::

::: domanda Come si moltiplicano due numeri complessi in forma polare? Che cosa vuol dire nel disegno?
Le distanze si moltiplicano e gli angoli si sommano. Nel disegno, moltiplicare per un numero vuol dire girare del suo angolo e allungare quanto la sua distanza.
:::

::: domanda Quali sono l'inverso e il coniugato di $z = re^{i\vartheta}$?
L'inverso è $\frac 1r e^{-i\vartheta}$: distanza inversa, angolo opposto. Il coniugato è $re^{-i\vartheta}$: stessa distanza, angolo opposto. Nel disegno il coniugato è il riflesso rispetto all'asse orizzontale.
:::

::: domanda Quando due forme polari indicano lo stesso numero?
Quando hanno la stessa distanza e gli angoli differiscono di un numero intero di giri, cioè di $2k\pi$ con $k$ intero.
:::

::: domanda Che cos'è l'identità di Eulero? Quanto valgono $e^{i\pi/2}$ ed $e^{2\pi i}$?
È $e^{i\pi} = -1$: mezzo giro porta da 1 a $-1$. Inoltre $e^{i\pi/2} = i$ (un quarto di giro) ed $e^{2\pi i} = 1$ (un giro intero).
:::

::: domanda Come si calcola una potenza in forma polare? Fai un esempio.
La distanza si eleva alla $n$ e l'angolo si moltiplica per $n$. Per esempio $1 + i = \sqrt 2\,e^{i\pi/4}$, quindi $(1 + i)^8$ ha distanza $(\sqrt 2)^8 = 16$ e angolo $2\pi$: vale 16.
:::

::: domanda Quante soluzioni ha $z^n = z_0$ con $z_0$ diverso da zero, e come si trovano?
Esattamente $n$. Hanno tutte distanza $\sqrt[n]{r_0}$. Il primo angolo è $\frac{\vartheta_0}n$, e gli altri si ottengono aggiungendo $\frac{2\pi}n$ fino ad averne $n$.
:::

::: domanda Che figura formano le radici $n$-esime di un numero complesso?
I vertici di un poligono regolare con $n$ lati, centrato nell'origine, su un cerchio di raggio $\sqrt[n]{r_0}$. Per le radici di 1 uno dei vertici è 1.
:::

::: domanda Quali sono le radici terze di $-8$? Perché il primo angolo è $\frac\pi3$?
Sono $1 + \sqrt 3 i$, $-2$ e $1 - \sqrt 3 i$ (Esempio 3.4). Il primo angolo è $\frac\pi3$ perché $-8 = 8e^{i\pi}$ e si divide l'angolo $\pi$ per 3; poi si aggiunge due volte $\frac{2\pi}3$.
:::

::: domanda Perché $-6e^{3\pi i/4}$ non è una forma polare? Come si corregge?
Perché il numero davanti deve essere la distanza, che è positiva. Si porta il segno meno dentro l'angolo con $-1 = e^{i\pi}$: $-6e^{3\pi i/4} = 6e^{i\pi}e^{3\pi i/4} = 6e^{7\pi i/4}$.
:::

## Glossario

```glossario
Radiante | Unità di misura degli angoli: l'angolo misura la strada fatta sulla circonferenza di raggio 1. Un giro vale $2\pi$, mezzo giro $\pi$.
Circonferenza unitaria | Il cerchio con centro nell'origine e raggio 1. Il suo punto all'angolo $\vartheta$ è $(\cos\vartheta, \sin\vartheta)$, cioè il numero $e^{i\vartheta}$.
Coordinate polari | Distanza dall'origine e angolo: due numeri che dicono dove sta un punto diverso dall'origine. Per esempio $(1, \sqrt 3)$ ha coordinate polari $(2, \frac\pi3)$.
Forma trigonometrica | La scrittura $z = r(\cos\vartheta + i\sin\vartheta)$, con la distanza fuori dalla parentesi.
Esponenziale complessa $e^{i\vartheta}$ | Abbreviazione di $\cos\vartheta + i\sin\vartheta$. Si comporta come una potenza: nel prodotto gli angoli si sommano.
Forma polare | La scrittura $z = re^{i\vartheta}$, con $r$ positivo. Vale per i numeri diversi da zero.
Modulo | La distanza del numero dall'origine. Si scrive $\lvert z \rvert$; per esempio $\lvert 1 + i \rvert = \sqrt 2$.
Argomento (fase) | L'angolo del numero in forma polare. Si può cambiare di giri interi senza cambiare il numero.
Argomento principale | L'argomento scelto in un intervallo fissato, di solito tra $-\pi$ e $\pi$ oppure tra 0 e $2\pi$.
Formule di addizione | Le regole per il coseno e il seno di una somma di angoli. Servono a dimostrare la regola del prodotto.
Regola del prodotto | Nel prodotto di due numeri complessi le distanze si moltiplicano e gli angoli si sommano.
Identità di Eulero | $e^{i\pi} = -1$: mezzo giro porta da 1 a $-1$.
Formula di De Moivre | La formula delle potenze: $\left(re^{i\vartheta}\right)^n = r^ne^{in\vartheta}$.
Radici $n$-esime | Gli $n$ numeri che elevati alla $n$ danno un numero dato diverso da zero. Hanno tutti la stessa distanza e angoli a passi di $\frac{2\pi}n$.
Radici $n$-esime dell'unità | Le soluzioni di $z^n = 1$: $e^{2k\pi i/n}$. Per $n = 4$ sono $1$, $i$, $-1$, $-i$.
Poligono regolare | Un poligono con tutti i lati e tutti gli angoli uguali, come il triangolo equilatero o il quadrato. Le radici $n$-esime ne sono i vertici.
```

## Checklist

```checklist
- So passare da gradi a radianti e so la tabella di seno e coseno negli angoli notevoli, con i segni nei quattro quadranti.
- So passare dalle coordinate cartesiane a quelle polari e al contrario, scegliendo l'angolo con coseno e seno insieme.
- So scrivere un numero complesso in forma trigonometrica e in forma polare, con il modulo positivo.
- So spiegare la Proposizione 3.2 e da dove viene la regola del prodotto.
- So moltiplicare, invertire e dividere in forma polare, e so che cosa succede nel disegno.
- So riconoscere quando due forme polari indicano lo stesso numero e so accorciare un angolo grande.
- So che $e^{i\pi} = -1$, $e^{i\pi/2} = i$, $e^{2\pi i} = 1$, e so usarli per portare un segno meno dentro l'angolo.
- So calcolare potenze alte come $(1 + i)^{10}$ senza calcolatrice.
- So trovare tutte le $n$ radici $n$-esime di un numero complesso e disegnarle come un poligono regolare.
- So risolvere le domande d'esame su potenze e radici, scartando prima le risposte con la distanza sbagliata.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 3 «Numeri complessi II», pp. 10–14: le sezioni 3.A–3.C sono seguite in ordine, con la pagina accanto a ogni titolo; la Definizione 3.1, la Proposizione 3.2 e gli Esempi 3.3 e 3.4 mantengono la loro numerazione; gli esercizi 3.5, 3.6, 3.7 e 3.8 sono svolti nella sezione «Esercizi» (esercizi 8, 9, 6 e 7); le Figure 3, 4 e 5 sono ridisegnate con i grafici.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.4.4–1.4.6 (pp. 27–31) ed Esercizi 1.13 e 1.14 (p. 37), svolti come esercizi 13 e 14.
- **Foglio di esercizi 1 del tutorato** (Buzano, Radeschi, 27/10/2025, Moodle 2025/26): esercizi 2 e 3, svolti come esercizi 11 e 12.
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): domanda 5 del 15/01/2026, domanda 1 del 16/01/2025 e domanda 2 del 02/09/2025, riportate con soluzioni scritte per questi appunti; la tabella degli altri appelli ne indica solo il tipo. Regole d'esame 2025/26 e date 2026/27 come nella lezione L01.
- Le parti **«Oltre le dispense»** (il ripasso di trigonometria, le serie di potenze, l'argomento principale, il metodo per accorciare gli angoli, la formula di De Moivre, la trappola sulle radici quadrate, gli esercizi che non vengono dalle dispense) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
