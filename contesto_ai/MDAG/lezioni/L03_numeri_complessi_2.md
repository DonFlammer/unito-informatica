---
corso: MDAG
modulo: AG
lezione: L03
titolo: Numeri complessi II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L03
descrizione: >-
  Appunti della lezione L03 di Algebra lineare e Geometria (MDAG, parte 2): coordinate polari, forma esponenziale,
  modulo e argomento di un numero complesso, prodotto e inverso in forma polare, identità di Eulero, potenze e
  radici n-esime, con un ripasso di seno e coseno, quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Un numero complesso diverso da zero si può descrivere con la sua distanza dall'origine e con un angolo:
  $z = re^{i\vartheta}$. In questa forma il prodotto diventa semplice (i moduli si moltiplicano, gli angoli si
  sommano), e bastano poche righe per calcolare potenze come $(1 + i)^{10}$ e tutte le soluzioni di $z^n = z_0$. In nove
  appelli su quindici la domanda sui numeri complessi era proprio su questi argomenti.
materiale: dispense
scheda:
  Dispense: lezione 3 · pp. 10–14
  Libro: Martelli, §1.4.4–1.4.6 (pp. 27–31)
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 3 «Numeri complessi II»; B. Martelli, Geometria e algebra lineare, §1.4.4–1.4.6
file_en: L03_complex_numbers_2.html
appunti_html: appunti/MDAG/L03_numeri_complessi_2.html
genera_html: true
---

## In breve

- Un punto $(x, y) \neq (0, 0)$ del piano si può descrivere con le **coordinate polari** $(r, \vartheta)$: $r$ è la distanza dall'origine, $\vartheta$ l'angolo con l'asse reale. Si passa dall'una all'altra descrizione con $x = r\cos\vartheta$ e $y = r\sin\vartheta$.
- Un numero complesso $z \neq 0$ si scrive $z = r(\cos\vartheta + i\sin\vartheta) = re^{i\vartheta}$, dove $e^{i\vartheta}$ è **un simbolo** per $\cos\vartheta + i\sin\vartheta$. Il numero $r = |z|$ è il **modulo**, l'angolo $\vartheta$ è l'**argomento** (o fase).
- Vale $e^{i(\vartheta + \varphi)} = e^{i\vartheta}e^{i\varphi}$ (Proposizione 3.2). Quindi nel **prodotto** di due numeri complessi **i moduli si moltiplicano e gli argomenti si sommano**.
- L'inverso di $re^{i\vartheta}$ è $r^{-1}e^{-i\vartheta}$; il coniugato è $re^{-i\vartheta}$, cioè il simmetrico rispetto all'asse reale.
- Due forme polari $r_0e^{i\vartheta_0}$ e $r_1e^{i\vartheta_1}$ danno lo stesso numero se e solo se $r_0 = r_1$ e gli angoli differiscono per un multiplo di $2\pi$.
- I numeri $e^{i\vartheta}$ formano la **circonferenza unitaria**; in particolare $e^{i\pi} = -1$ (identità di Eulero) ed $e^{2\pi i} = 1$.
- **Potenze**: $\left(re^{i\vartheta}\right)^n = r^ne^{in\vartheta}$. **Radici**: se $z_0 = r_0e^{i\vartheta_0} \neq 0$, l'equazione $z^n = z_0$ ha esattamente $n$ soluzioni, di modulo $\sqrt[n]{r_0}$ e argomenti $\frac{\vartheta_0}n + \frac{2k\pi}n$ per $k = 0, 1, \dots, n - 1$: i vertici di un poligono regolare con $n$ lati.
- All'esame: potenze alte, prodotti in forma polare e radici $n$-esime sono stati la domanda sui complessi in 9 appelli su 15 dal 2024 al 2026.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Ripasso: angoli, seno e coseno (oltre le dispense)

Le dispense usano seno, coseno e angoli in radianti senza richiamarli. Qui trovi tutto quello che serve, e niente di più.

### Gli angoli in radianti

In matematica un angolo si misura in **radianti**: la misura di un angolo è la **lunghezza dell'arco** che l'angolo taglia sulla circonferenza di raggio $1$ centrata nel vertice. Il giro completo è lungo quanto tutta la circonferenza, $2\pi \cdot 1 = 2\pi$. Quindi $360° = 2\pi$, $180° = \pi$ e in generale

$$\vartheta_{\text{radianti}} = \vartheta_{\text{gradi}} \cdot \frac{\pi}{180}.$$

| Gradi | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ | $120°$ | $135°$ | $150°$ | $180°$ | $270°$ | $360°$ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Radianti | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\frac{2\pi}3$ | $\frac{3\pi}4$ | $\frac{5\pi}6$ | $\pi$ | $\frac{3\pi}2$ | $2\pi$ |

Gli angoli si misurano a partire dal semiasse reale positivo, in **senso antiorario**. Un angolo negativo gira in senso orario: $-\frac\pi2$ porta nello stesso punto di $\frac{3\pi}2$.

### Seno e coseno sulla circonferenza unitaria

La **circonferenza unitaria** è la circonferenza di centro l'origine e raggio $1$. Parti dal punto $(1, 0)$ e percorri la circonferenza in senso antiorario per un angolo $\vartheta$: il punto in cui arrivi ha coordinate

$$(\cos\vartheta,\ \sin\vartheta).$$

Questa è la definizione di coseno (l'ascissa) e seno (l'ordinata). Tutte le regole che seguono si leggono sul disegno.

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

| $\vartheta$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\pi$ | $\frac{3\pi}2$ |
|---|---|---|---|---|---|---|---|
| $\cos\vartheta$ | $1$ | $\frac{\sqrt 3}2$ | $\frac{\sqrt 2}2$ | $\frac 12$ | $0$ | $-1$ | $0$ |
| $\sin\vartheta$ | $0$ | $\frac 12$ | $\frac{\sqrt 2}2$ | $\frac{\sqrt 3}2$ | $1$ | $0$ | $-1$ |

Un modo per ricordare la tabella: da $0$ a $\frac\pi2$ il seno vale $\frac{\sqrt 0}2, \frac{\sqrt 1}2, \frac{\sqrt 2}2, \frac{\sqrt 3}2, \frac{\sqrt 4}2$, e il coseno fa lo stesso al contrario.

Negli altri quadranti i valori sono gli stessi, **cambiano i segni**: nel secondo quadrante (angoli tra $\frac\pi2$ e $\pi$) il coseno è negativo e il seno positivo; nel terzo sono negativi tutti e due; nel quarto il coseno è positivo e il seno negativo. Per esempio:

- $\frac{2\pi}3 = \pi - \frac\pi3$ sta nel secondo quadrante: $\cos\frac{2\pi}3 = -\frac 12$ e $\sin\frac{2\pi}3 = \frac{\sqrt 3}2$;
- $\frac{5\pi}4 = \pi + \frac\pi4$ sta nel terzo quadrante: $\cos\frac{5\pi}4 = \sin\frac{5\pi}4 = -\frac{\sqrt 2}2$;
- $\frac{5\pi}3 = 2\pi - \frac\pi3$ sta nel quarto quadrante: $\cos\frac{5\pi}3 = \frac 12$ e $\sin\frac{5\pi}3 = -\frac{\sqrt 3}2$.

### Le regole che servono

| Regola | Perché | Esempio |
|---|---|---|
| $\cos^2\vartheta + \sin^2\vartheta = 1$ | il punto sta a distanza $1$ dall'origine (Pitagora) | $\left(\frac 12\right)^2 + \left(\frac{\sqrt 3}2\right)^2 = 1$ |
| $\cos(-\vartheta) = \cos\vartheta$, $\sin(-\vartheta) = -\sin\vartheta$ | $-\vartheta$ è il simmetrico rispetto all'asse $x$ | $\sin\left(-\frac\pi6\right) = -\frac 12$ |
| $\cos(\vartheta + 2\pi) = \cos\vartheta$, $\sin(\vartheta + 2\pi) = \sin\vartheta$ | un giro completo riporta nello stesso punto | $\cos\frac{7\pi}3 = \cos\frac\pi3 = \frac 12$ |
| $\cos(\vartheta + \pi) = -\cos\vartheta$, $\sin(\vartheta + \pi) = -\sin\vartheta$ | mezzo giro porta nel punto opposto | $\cos\frac{4\pi}3 = -\frac 12$ |

E le **formule di addizione**, che servono per la Proposizione 3.2:

$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta,$$

$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta.$$

## Coordinate polari (pp. 10–11)

Nella lezione L02 hai individuato un punto del piano con le sue **coordinate cartesiane** $(x, y)$: quanto ti sposti in orizzontale e quanto in verticale. C'è un altro modo, come quando si indica una direzione: «cammina per $2$ chilometri in direzione nord-est». Come ricordano le dispense (Figura 3), un punto $(x, y)$ **diverso dall'origine** si può individuare con

- la **lunghezza** $r$ del vettore che va dall'origine al punto;
- l'**angolo** $\vartheta$ che il vettore forma con l'asse reale.

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

> [!DEF] 3.1 · Coordinate polari
> Un punto $(x, y)$ del piano diverso dall'origine si può identificare con la lunghezza $r$ del vettore corrispondente e l'angolo $\vartheta$ formato dal vettore con l'asse reale. Le **coordinate polari** del punto sono la coppia $(r, \vartheta)$. Per passare dalle coordinate polari alle coordinate cartesiane $(x, y)$ basta usare le formule
> $$x = r\cos\vartheta, \qquad y = r\sin\vartheta.$$
> Viceversa,
> $$r = \sqrt{x^2 + y^2}, \qquad \cos\vartheta = \frac{x}{\sqrt{x^2 + y^2}}, \qquad \sin\vartheta = \frac{y}{\sqrt{x^2 + y^2}}.$$

Pezzo per pezzo:

- $r$ è una **distanza**, quindi è sempre un numero reale **positivo** ($r > 0$, perché il punto non è l'origine).
- $\vartheta$ si misura in radianti, dal semiasse reale positivo, in senso antiorario.
- $x = r\cos\vartheta$ e $y = r\sin\vartheta$: il punto di angolo $\vartheta$ sulla circonferenza unitaria è $(\cos\vartheta, \sin\vartheta)$; allontanandosi dall'origine $r$ volte tanto si ottiene $(r\cos\vartheta, r\sin\vartheta)$.
- Per tornare indietro: $r$ si trova con Pitagora; poi $\cos\vartheta = \frac xr$ e $\sin\vartheta = \frac yr$. Servono **entrambe** le equazioni per individuare l'angolo, come vedi nella trappola qui sotto.
- L'origine è esclusa: per il punto $(0, 0)$ vale $r = 0$, e l'angolo non ha senso.
- L'angolo non è unico: $\vartheta$ e $\vartheta + 2\pi$ (o $\vartheta - 2\pi$, o $\vartheta + 4\pi$…) indicano la stessa direzione. Ci torniamo nella sezione sulle forme polari uguali.

> [!ESEMPIO] · Da polari a cartesiane
> - $(r, \vartheta) = \left(2, \frac\pi6\right)$: $x = 2\cos\frac\pi6 = 2 \cdot \frac{\sqrt 3}2 = \sqrt 3$ e $y = 2\sin\frac\pi6 = 2 \cdot \frac 12 = 1$. Il punto è $(\sqrt 3, 1)$.
> - $(r, \vartheta) = \left(4, \frac{3\pi}4\right)$: $x = 4 \cdot \left(-\frac{\sqrt 2}2\right) = -2\sqrt 2$ e $y = 4 \cdot \frac{\sqrt 2}2 = 2\sqrt 2$.
> - $(r, \vartheta) = (3, \pi)$: $x = 3 \cdot (-1) = -3$ e $y = 3 \cdot 0 = 0$. Il punto $(-3, 0)$ sta sul semiasse reale negativo.

> [!ESEMPIO] · Da cartesiane a polari
> - $(1, 1)$: $r = \sqrt{1 + 1} = \sqrt 2$; $\cos\vartheta = \frac 1{\sqrt 2} = \frac{\sqrt 2}2$ e $\sin\vartheta = \frac{\sqrt 2}2$, quindi $\vartheta = \frac\pi4$.
> - $(-\sqrt 3, 1)$: $r = \sqrt{3 + 1} = 2$; $\cos\vartheta = -\frac{\sqrt 3}2$ e $\sin\vartheta = \frac 12$. Coseno negativo e seno positivo: secondo quadrante. L'angolo del primo quadrante con coseno $\frac{\sqrt 3}2$ e seno $\frac 12$ è $\frac\pi6$; il suo simmetrico nel secondo quadrante è $\pi - \frac\pi6 = \frac{5\pi}6$.
> - $(0, -2)$: $r = 2$; $\cos\vartheta = 0$ e $\sin\vartheta = -1$, quindi $\vartheta = \frac{3\pi}2$ (oppure, equivalentemente, $-\frac\pi2$).
> - $(1, -\sqrt 3)$: $r = 2$; $\cos\vartheta = \frac 12$ e $\sin\vartheta = -\frac{\sqrt 3}2$, quarto quadrante, $\vartheta = -\frac\pi3$ (oppure $\frac{5\pi}3$).

> [!METODO] Trovare le coordinate polari di $(x, y)$
> 1. Calcola $r = \sqrt{x^2 + y^2}$.
> 2. Calcola $\cos\vartheta = \frac xr$ e $\sin\vartheta = \frac yr$.
> 3. Guarda i **segni** di coseno e seno per capire il quadrante.
> 4. Trova nella tabella l'angolo del primo quadrante con gli stessi valori, senza segni, e portalo nel quadrante giusto: $\pi - \alpha$ nel secondo, $\pi + \alpha$ nel terzo, $-\alpha$ (cioè $2\pi - \alpha$) nel quarto.
> 5. Controllo: $r\cos\vartheta$ e $r\sin\vartheta$ devono ridare $x$ e $y$.

> [!TRAPPOLA] Un'equazione sola non basta per l'angolo
> I punti $(1, 1)$ e $(-1, -1)$ hanno lo stesso rapporto $\frac yx = 1$, ma angoli diversi: $\frac\pi4$ e $\frac{5\pi}4$. Chi usa solo $\tan\vartheta = \frac yx$ (o l'arcotangente della calcolatrice, che comunque all'esame non c'è) sbaglia quadrante. Allo stesso modo $(1, \sqrt 3)$ e $(1, -\sqrt 3)$ hanno lo stesso coseno $\frac 12$ ma angoli $\frac\pi3$ e $-\frac\pi3$. Guarda sempre coseno **e** seno, oppure il disegno.

## La forma polare di un numero complesso (pp. 10–11)

Tornando ai numeri complessi: se $z = x + yi$ corrisponde al punto $(x, y)$ con coordinate polari $(r, \vartheta)$, allora

$$z = x + yi = r\cos\vartheta + (r\sin\vartheta)i = r(\cos\vartheta + i\sin\vartheta).$$

Le dispense notano subito che

$$|z| = \sqrt{x^2 + y^2} = r:$$

il **modulo** di $z$ è la lunghezza del vettore che descrive $z$. La scrittura $r(\cos\vartheta + i\sin\vartheta)$ si chiama anche **forma trigonometrica** di $z$: negli appelli compare spesso così, per esempio $z = 2\cos\frac\pi4 + 2i\sin\frac\pi4$.

**Il coniugato.** Il coniugato $\bar z = x - yi$ è il punto ottenuto cambiando il segno della coordinata immaginaria: geometricamente è il **riflesso** di $z$ rispetto all'asse reale. In coordinate polari questo corrisponde a cambiare $\vartheta$ in $-\vartheta$ lasciando fisso $r$ (Figura 4 delle dispense, a sinistra). Infatti, con le regole del ripasso,
$$r\bigl(\cos(-\vartheta) + i\sin(-\vartheta)\bigr) = r(\cos\vartheta - i\sin\vartheta) = x - yi.$$

### L'esponenziale complessa

Le dispense introducono una notazione comoda:

> [!DEF] Forma polare, modulo e argomento (pp. 10–11)
> Si scrive
> $$e^{i\vartheta} = \cos\vartheta + i\sin\vartheta.$$
> In questo modo ogni numero complesso $z \neq 0$ si scrive come
> $$z = re^{i\vartheta}.$$
> Il numero $r = |z|$ è il **modulo** di $z$ e l'angolo $\vartheta$ è detto **argomento** (o **fase**) di $z$.

Pezzo per pezzo:

- $e^{i\vartheta}$ è, per il corso, **un simbolo**: vuol dire esattamente $\cos\vartheta + i\sin\vartheta$, niente di più. Le dispense la chiamano «misteriosa esponenziale complessa».
- $e^{i\vartheta}$ ha modulo $1$: $\left|e^{i\vartheta}\right| = \sqrt{\cos^2\vartheta + \sin^2\vartheta} = 1$. Moltiplicarlo per $r$ allunga il vettore fino alla lunghezza $r$.
- La scrittura vale solo per $z \neq 0$: lo zero ha modulo $0$ e nessun argomento.
- Nella forma polare **$r$ deve essere positivo**. Una scrittura come $-2e^{i\pi/4}$ indica un numero complesso, ma non è una forma polare (vedi la trappola più sotto).

> [!OLTRE] · perché proprio la lettera $e$
> Le dispense spiegano che il motivo profondo è nelle rappresentazioni di $e^x$, $\sin x$ e $\cos x$ come **serie di potenze**, che vedrai in Analisi:
> $$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$$
> $$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \qquad \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$
> Sostituendo $x = i\vartheta$ nella prima serie e usando $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, i termini pari danno la serie del coseno e quelli dispari $i$ volte la serie del seno: $e^{i\vartheta} = \cos\vartheta + i\sin\vartheta$. Per il corso basta la definizione come simbolo; il nome è azzeccato perché $e^{i\vartheta}$ ha le proprietà dell'esponenziale (Proposizione 3.2).

Ecco i numeri che conviene riconoscere a colpo d'occhio:

| $z$ | $\lvert z \rvert$ | argomento | forma polare |
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

Il trucco per i numeri come $\frac{\sqrt 3}2 - \frac 12 i$: il modulo è $1$ e le due parti sono coseno e seno di un angolo notevole ($\cos\vartheta = \frac{\sqrt 3}2$, $\sin\vartheta = -\frac 12$, quindi $\vartheta = -\frac\pi6$). Se invece il modulo non è $1$, lo raccogli: $\sqrt 3 + i = 2\left(\frac{\sqrt 3}2 + \frac 12 i\right) = 2e^{i\pi/6}$.

> [!ESEMPIO] · Dalla forma polare alla forma $a + bi$
> $2e^{2\pi i/3} = 2\left(\cos\frac{2\pi}3 + i\sin\frac{2\pi}3\right) = 2\left(-\frac 12 + \frac{\sqrt 3}2 i\right) = -1 + i\sqrt 3$.
>
> $\sqrt 2\,e^{-3\pi i/4} = \sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -1 - i$.

> [!TRAPPOLA] Il modulo non può essere negativo
> $-6e^{3\pi i/4}$ è un numero complesso, ma **non** è scritto in forma polare: il fattore davanti deve essere il modulo, che è positivo. Siccome $-1 = e^{i\pi}$, si sistema così: $-6e^{3\pi i/4} = 6e^{i\pi}e^{3\pi i/4} = 6e^{7\pi i/4}$. L'appello del 16/01/2025 (domanda 1) chiedeva un prodotto «in coordinate polari» e tra le risposte c'erano sia $6e^{7\pi i/4}$ sia $-6e^{3\pi i/4}$: solo la prima è una forma polare.

## Il prodotto in forma polare (p. 11)

La scrittura $e^{i\vartheta}$ è comoda perché si comporta come un esponenziale.

> [!PROP] 3.2
> Vale la relazione
> $$e^{i(\vartheta + \varphi)} = e^{i\vartheta} \cdot e^{i\varphi}.$$

Le dispense dicono che la relazione segue dalle formule di addizione per seno e coseno, sostituendo $e^{i\alpha} = \cos\alpha + i\sin\alpha$. Ecco il conto completo.

1. Scriviamo il prodotto a destra con la definizione: $e^{i\vartheta} \cdot e^{i\varphi} = (\cos\vartheta + i\sin\vartheta)(\cos\varphi + i\sin\varphi)$.
2. Svolgiamo il prodotto come nella lezione L02, con $i^2 = -1$:
   $$= (\cos\vartheta\cos\varphi - \sin\vartheta\sin\varphi) + i(\sin\vartheta\cos\varphi + \cos\vartheta\sin\varphi).$$
3. Riconosciamo le formule di addizione: la parte reale è $\cos(\vartheta + \varphi)$, la parte immaginaria è $\sin(\vartheta + \varphi)$.
4. Quindi il prodotto vale $\cos(\vartheta + \varphi) + i\sin(\vartheta + \varphi) = e^{i(\vartheta + \varphi)}$. $\square$

La conseguenza è la regola più importante della lezione. Se

$$z_1 = r_1e^{i\vartheta_1}, \qquad z_2 = r_2e^{i\vartheta_2},$$

allora, riordinando i fattori e usando la Proposizione 3.2,

$$z_1z_2 = r_1r_2\,e^{i(\vartheta_1 + \vartheta_2)}.$$

> [!IDEA] · la regola del prodotto
> Quando si fa il prodotto di due numeri complessi, **i moduli si moltiplicano e gli argomenti si sommano**. Geometricamente, moltiplicare per $z_2$ vuol dire **ruotare** di un angolo $\vartheta_2$ e **dilatare** di un fattore $r_2$. Per esempio moltiplicare per $i = e^{i\pi/2}$ ruota di un angolo retto, come avevi visto nella lezione L02, e moltiplicare per $2$ raddoppia la distanza dall'origine senza ruotare.

> [!ESEMPIO] · $(1 + i)(\sqrt 3 + i)$ in due modi
> **In forma polare.** $1 + i = \sqrt 2\,e^{i\pi/4}$ e $\sqrt 3 + i = 2e^{i\pi/6}$. Quindi
> $$(1 + i)(\sqrt 3 + i) = \sqrt 2 \cdot 2\,e^{i(\pi/4 + \pi/6)} = 2\sqrt 2\,e^{5\pi i/12}.$$
> Il modulo è $2\sqrt 2$ e l'argomento $\frac\pi4 + \frac\pi6 = \frac{3\pi + 2\pi}{12} = \frac{5\pi}{12}$, cioè $75°$.
>
> **In forma cartesiana.** $(1 + i)(\sqrt 3 + i) = \sqrt 3 + i + i\sqrt 3 + i^2 = (\sqrt 3 - 1) + (\sqrt 3 + 1)i$.
>
> I due risultati sono lo stesso numero. Confrontandoli si ottiene anche, gratis, $\cos\frac{5\pi}{12} = \frac{\sqrt 3 - 1}{2\sqrt 2} = \frac{\sqrt 6 - \sqrt 2}4$: la forma polare e quella cartesiana si controllano a vicenda.

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

Prova con lo strumento: in modalità **z · w** trascina $z$ e $w$ e guarda gli archi; l'arco del prodotto è sempre la somma dei due archi, e sotto leggi che il modulo del prodotto è il prodotto dei moduli. Poi scegli **potenze zⁿ**: vedi i punti $z, z^2, z^3, \dots$ girare attorno all'origine, ogni volta dello stesso angolo.

```widget complessi
titolo: Prodotto e potenze in forma polare
z: 1+i
w: 1.732+i
modo: prodotto
modi: prodotto potenza
n: 3
raggio: 4
```

### L'inverso e il quoziente

Le dispense notano in particolare che, se $z = re^{i\vartheta} \neq 0$, il suo inverso è

$$z^{-1} = r^{-1}e^{-i\vartheta}.$$

Verifica con la regola del prodotto: $z \cdot z^{-1} = r \cdot r^{-1}\,e^{i(\vartheta - \vartheta)} = 1 \cdot e^{0} = \cos 0 + i\sin 0 = 1$. L'inverso ha argomento $-\vartheta$, opposto a quello di $z$, e modulo $|z^{-1}| = r^{-1}$, inverso rispetto a $|z| = r$ (Figura 4 delle dispense, a destra): se $z$ sta fuori dalla circonferenza unitaria, $z^{-1}$ sta dentro, e viceversa.

Unendo le due regole si ottiene il **quoziente**: $\frac{z_1}{z_2} = z_1 \cdot z_2^{-1} = \frac{r_1}{r_2}\,e^{i(\vartheta_1 - \vartheta_2)}$. I moduli si dividono, gli argomenti si sottraggono.

> [!ESEMPIO] · Lo stesso inverso della lezione L02
> $1 + i = \sqrt 2\,e^{i\pi/4}$, quindi $(1 + i)^{-1} = \frac 1{\sqrt 2}e^{-i\pi/4} = \frac 1{\sqrt 2}\left(\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = \frac 12 - \frac 12 i$. È lo stesso risultato della formula $z^{-1} = \frac{\bar z}{|z|^2} = \frac{1 - i}2$.

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

## Quando due forme polari danno lo stesso numero (p. 11)

Un angolo e lo stesso angolo più un giro completo indicano la stessa direzione. Per questo le dispense notano:

> [!PROP] · Uguaglianza di due forme polari (p. 11)
> Due numeri complessi non nulli espressi in forma polare $r_0e^{i\vartheta_0}$ e $r_1e^{i\vartheta_1}$ sono lo stesso numero complesso se e solo se valgono entrambi i fatti seguenti:
> - $r_0 = r_1$;
> - $\vartheta_1 = \vartheta_0 + 2k\pi$ per qualche $k \in \Z$.

In parole: stessa distanza dall'origine, e angoli che differiscono per un numero intero di giri. Per esempio

$$e^{i\pi/2} = e^{5\pi i/2} = e^{-3\pi i/2} = i, \qquad 2e^{7\pi i/4} = 2e^{-\pi i/4} = \sqrt 2 - i\sqrt 2.$$

Questo fatto ha due usi: **ridurre** gli angoli grandi che escono dalle potenze, e **risolvere** le equazioni $z^n = z_0$ nella sezione sulle radici.

> [!METODO] Ridurre un angolo
> Per semplificare $e^{i\alpha}$ con $\alpha$ grande, togli (o aggiungi) a $\alpha$ multipli di $2\pi$ finché arrivi in un intervallo comodo, $[0, 2\pi)$ oppure $(-\pi, \pi]$.
>
> Con $\alpha = \frac{p}{q}\pi$ il conto si fa sugli interi: un giro, $2\pi$, vale $\frac{2q}{q}\pi$; quindi si divide $p$ per $2q$ e si tiene il **resto**. Esempio: $\alpha = \frac{2025}4\pi$. Un giro vale $\frac 84\pi$, e $2025 = 8 \cdot 253 + 1$; quindi $\frac{2025}4\pi = 253 \cdot 2\pi + \frac\pi4$ ed $e^{2025\pi i/4} = e^{i\pi/4}$.

> [!OLTRE] · l'argomento principale
> Le dispense non fissano un intervallo per l'argomento: $\frac{7\pi}4$ e $-\frac\pi4$ vanno bene tutti e due. Molti libri chiamano **argomento principale** quello in $(-\pi, \pi]$ (altri usano $[0, 2\pi)$). Nel quiz le risposte usano entrambe le convenzioni: se una risposta non ti torna, prova ad aggiungere o togliere $2\pi$.

## La circonferenza unitaria e l'identità di Eulero (p. 12)

Siccome $\left|e^{i\vartheta}\right| = 1$, i numeri complessi $e^{i\vartheta}$, al variare di $\vartheta$, sono **precisamente i punti della circonferenza unitaria**: il punto di angolo $\vartheta$ è $e^{i\vartheta}$. In particolare:

- per $\vartheta = \frac\pi2$: $e^{i\pi/2} = \cos\frac\pi2 + i\sin\frac\pi2 = i$;
- per $\vartheta = \pi$: $e^{i\pi} = \cos\pi + i\sin\pi = -1$. È la celebre **identità di Eulero**, spesso scritta $e^{i\pi} + 1 = 0$;
- per $\vartheta = 2\pi$: $e^{2\pi i} = \cos 2\pi + i\sin 2\pi = 1$.

Queste tre uguaglianze servono di continuo: $-1 = e^{i\pi}$ è il modo per portare un segno meno dentro l'angolo, e $e^{2k\pi i} = 1$ per ogni $k \in \Z$ è il motivo per cui gli angoli si possono ridurre.

## Le potenze (p. 12)

Applicando la regola del prodotto $n$ volte allo stesso numero $z = re^{i\vartheta}$, i moduli si moltiplicano $n$ volte e gli angoli si sommano $n$ volte:

$$z^n = \underbrace{re^{i\vartheta} \cdots re^{i\vartheta}}_{n \text{ volte}} = r^ne^{in\vartheta}.$$

È la formula che le dispense usano all'inizio della sezione 3.B. Il modulo va elevato alla $n$, l'angolo va moltiplicato per $n$.

> [!OLTRE] · il nome
> In forma trigonometrica la formula si scrive $\bigl(r(\cos\vartheta + i\sin\vartheta)\bigr)^n = r^n(\cos n\vartheta + i\sin n\vartheta)$ ed è nota come **formula di De Moivre**.

> [!ESEMPIO] · $(1 + i)^8$ e $(1 + i)^{10}$
> $1 + i = \sqrt 2\,e^{i\pi/4}$, quindi
> $$(1 + i)^8 = (\sqrt 2)^8e^{8\pi i/4} = 16\,e^{2\pi i} = 16.$$
> Controllo in forma cartesiana: $(1 + i)^2 = 2i$, quindi $(1 + i)^8 = (2i)^4 = 16i^4 = 16$.
>
> Allo stesso modo $(1 + i)^{10} = (\sqrt 2)^{10}e^{10\pi i/4} = 32\,e^{5\pi i/2}$. Riduco l'angolo: $\frac{5\pi}2 = 2\pi + \frac\pi2$, quindi $(1 + i)^{10} = 32\,e^{i\pi/2} = 32i$.

> [!ESEMPIO] · $(\sqrt 3 + i)^6$
> $\sqrt 3 + i = 2e^{i\pi/6}$, quindi $(\sqrt 3 + i)^6 = 2^6e^{6\pi i/6} = 64\,e^{i\pi} = -64$. Un numero complesso con parte immaginaria non nulla, elevato alla sesta, dà un numero reale negativo: in forma cartesiana ci vorrebbero cinque moltiplicazioni.

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

> [!METODO] Una potenza alta senza calcolatrice
> 1. Scrivi $z$ in forma polare $re^{i\vartheta}$ (negli appelli il modulo è quasi sempre $1$, $\sqrt 2$ o $2$ e l'angolo è notevole).
> 2. Applica $z^n = r^ne^{in\vartheta}$.
> 3. Riduci l'angolo $n\vartheta$ togliendo multipli di $2\pi$.
> 4. Torna alla forma $a + bi$ con la tabella di seno e coseno, e confronta con le risposte.
>
> In alternativa, per esponenti piccoli: calcola $z^2$ o $z^3$ in forma cartesiana finché ottieni un numero reale o immaginario puro, poi continua con le potenze di quello. Per esempio $(1 + i)^2 = 2i$, e da lì $(1 + i)^{10} = (2i)^5 = 32i^5 = 32i$.

## Le radici n-esime (pp. 12–13)

Adesso il problema inverso: dato un numero complesso $z_0 \neq 0$, trovare **tutti** i $z$ con

$$z^n = z_0.$$

Le soluzioni si chiamano **radici $n$-esime** di $z_0$. Tra i reali l'equazione $z^2 = -4$ non ha soluzioni e $z^3 = 8$ ne ha una sola ($z = 2$); tra i complessi, come vedrai, ce ne sono sempre esattamente $n$.

### Il ragionamento delle dispense, passo per passo

1. Scriviamo il numero dato in forma polare, $z_0 = r_0e^{i\vartheta_0}$, e l'incognita anche: $z = re^{i\vartheta}$, con $r > 0$ e $\vartheta$ da trovare.
2. Per la formula delle potenze l'equazione diventa
   $$z^n = r^ne^{in\vartheta} = r_0e^{i\vartheta_0}.$$
3. Due forme polari sono uguali se e solo se i moduli sono uguali e gli angoli differiscono per un multiplo di $2\pi$. Quindi l'equazione vale esattamente quando:
   - $r^n = r_0$, cioè $r = \sqrt[n]{r_0}$ (la solita radice reale positiva: $r_0 > 0$ e anche $r > 0$);
   - $n\vartheta = \vartheta_0 + 2k\pi$ per qualche $k \in \Z$.
4. Dividendo la seconda condizione per $n$:
   $$\vartheta = \frac{\vartheta_0}n + \frac{2k\pi}n \quad \text{per qualche } k \in \Z.$$
5. Per $k = 0, 1, \dots, n - 1$ si ottengono gli argomenti
   $$\frac{\vartheta_0}n, \quad \frac{\vartheta_0}n + \frac{2\pi}n, \quad \dots, \quad \frac{\vartheta_0}n + \frac{2(n - 1)\pi}n.$$
6. Questi $n$ angoli stanno tutti in un intervallo più corto di un giro, da $\frac{\vartheta_0}n$ a meno di $\frac{\vartheta_0}n + 2\pi$: quindi danno $n$ punti **diversi**. Gli altri valori di $k$ non danno niente di nuovo: $k = n$ dà l'angolo $\frac{\vartheta_0}n + 2\pi$, cioè lo stesso punto di $k = 0$; $k = n + 1$ lo stesso di $k = 1$, e così via.

> [!PROP] · Le radici $n$-esime (pp. 12–13)
> Sia $z_0 = r_0e^{i\vartheta_0}$ un numero complesso diverso da zero. L'equazione $z^n = z_0$ ha precisamente $n$ soluzioni distinte:
> $$z_k = \sqrt[n]{r_0}\;e^{i\left(\frac{\vartheta_0}n + \frac{2k\pi}n\right)}, \qquad k = 0, 1, \dots, n - 1.$$
> Hanno tutte lo stesso modulo $\sqrt[n]{r_0}$ e argomenti separati da un passo costante $\frac{2\pi}n$. Geometricamente, formano i vertici di un **poligono regolare** centrato nell'origine con $n$ lati e raggio $\sqrt[n]{r_0}$.

> [!ESEMPIO] 3.3 · Le radici $n$-esime dell'unità
> L'equazione $z^n = 1$ ha come soluzioni i numeri complessi
> $$z = e^{i\frac{2k\pi}n}, \qquad k = 0, 1, \dots, n - 1.$$
> Queste $n$ soluzioni sono i vertici di un poligono regolare di raggio $1$ con $n$ lati, avente $1$ come vertice. Sono le **radici $n$-esime dell'unità**.
>
> Il conto: $1 = 1 \cdot e^{i \cdot 0}$, quindi $r_0 = 1$, $\vartheta_0 = 0$, e le radici hanno modulo $\sqrt[n]1 = 1$ e argomenti $\frac{2k\pi}n$.
> - $n = 2$: $e^{0} = 1$ ed $e^{i\pi} = -1$.
> - $n = 3$: $1$, $e^{2\pi i/3} = -\frac 12 + \frac{\sqrt 3}2 i$, $e^{4\pi i/3} = -\frac 12 - \frac{\sqrt 3}2 i$: un triangolo equilatero.
> - $n = 4$: $1$, $i$, $-1$, $-i$: un quadrato.
> - $n = 6$: gli angoli sono multipli di $\frac\pi3$, e le radici sono $\pm 1$, $\pm\frac 12 \pm \frac{\sqrt 3}2 i$: un esagono (Figura 5 delle dispense, a sinistra).

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
> **Da dove vengono gli angoli.** $-8$ è un reale negativo: sta sul semiasse reale negativo, quindi $-8 = 8e^{i\pi}$, con $r_0 = 8$ e $\vartheta_0 = \pi$. Il primo angolo è $\frac\pi3$; poi si aggiunge due volte il passo $\frac{2\pi}3$: $\frac\pi3 + \frac{2\pi}3 = \pi$ e $\pi + \frac{2\pi}3 = \frac{5\pi}3$.
>
> **Controllo** su $z_1$: $(1 + i\sqrt 3)^2 = 1 + 2i\sqrt 3 - 3 = -2 + 2i\sqrt 3$, e poi $(-2 + 2i\sqrt 3)(1 + i\sqrt 3) = -2 - 2i\sqrt 3 + 2i\sqrt 3 + 2i^2 \cdot 3 = -2 - 6 = -8$.

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

Nello strumento qui sotto trovi lo stesso esempio. Cambia $n$ per vedere triangoli, quadrati, pentagoni; cambia $z$ (per esempio $1$, $i$ o $-4$) e guarda come il poligono ruota e cambia raggio.

```widget complessi
titolo: Radici $n$-esime: sempre $n$, sui vertici di un poligono regolare
z: -8
modo: radici
modi: radici
n: 3
raggio: 3
```

> [!METODO] Trovare le radici $n$-esime di $z_0$
> 1. Scrivi $z_0 = r_0e^{i\vartheta_0}$. Attenzione ai numeri reali: un reale positivo ha argomento $0$, un reale negativo ha argomento $\pi$.
> 2. Il modulo di tutte le radici è $\sqrt[n]{r_0}$.
> 3. Il primo argomento è $\frac{\vartheta_0}n$; gli altri si ottengono aggiungendo $\frac{2\pi}n$, fino ad averne $n$.
> 4. Se gli angoli sono notevoli, passa alla forma $a + bi$.
> 5. Disegna: i punti devono formare un poligono regolare con $n$ lati.

### Il caso $n = 2$: le radici quadrate

Per $n = 2$ il passo è $\frac{2\pi}2 = \pi$: le due radici quadrate di $z_0$ sono **opposte**, $w$ e $-w$. Tre esempi che ritroverai nella lezione L04, dentro la formula delle equazioni di secondo grado:

- $z^2 = -4$: $-4 = 4e^{i\pi}$, radici $2e^{i\pi/2} = 2i$ e $2e^{3\pi i/2} = -2i$. In generale le radici quadrate di un reale negativo $-a$ sono $\pm i\sqrt a$.
- $z^2 = 2i$: $2i = 2e^{i\pi/2}$, radici $\sqrt 2\,e^{i\pi/4} = 1 + i$ e $\sqrt 2\,e^{5\pi i/4} = -1 - i$. Sono le stesse trovate con le coordinate nell'esercizio 7 della lezione L02.
- $z^2 = -3 + 4i$: qui l'angolo non è notevole, e conviene il metodo della lezione L02 ($z = x + yi$, poi $x^2 - y^2 = -3$ e $2xy = 4$): le radici sono $\pm(1 + 2i)$.

> [!TRAPPOLA] Il simbolo $\sqrt{\ }$ tra i complessi
> Tra i reali positivi $\sqrt a$ indica **la** radice positiva. Tra i complessi non c'è una radice «positiva»: ci sono due radici quadrate opposte, e scrivere $\sqrt{z_0}$ è ambiguo. Per questo le regole di L01 come $\sqrt a\sqrt b = \sqrt{ab}$ non valgono più: $\sqrt{-1}\cdot\sqrt{-1}$ «dovrebbe» essere $\sqrt{(-1)(-1)} = \sqrt 1 = 1$, ma con $\sqrt{-1} = i$ viene $i \cdot i = -1$. Nella lezione L04 le dispense scrivono $\pm\sqrt\Delta$ proprio per indicare **le due** radici quadrate di $\Delta$.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli la lezione corrisponde al §1.4, parti 1.4.4 «Coordinate polari» (pp. 27–29, con la dimostrazione della Proposizione 1.4.2, che è la 3.2 delle dispense), 1.4.5 «Proprietà dei numeri complessi» (p. 30, Esercizio 1.4.3) e 1.4.6 «Radici $n$-esime di un numero complesso» (pp. 30–31, con gli Esempi 1.4.4 e 1.4.5, cioè 3.3 e 3.4 delle dispense, e l'Esercizio 1.4.6, che è il 3.5). Alla fine del capitolo 1 (p. 37) gli Esercizi 1.13 e 1.14 sono svolti qui come esercizi 9 e 10.

## Verso l'esame

**La prova in due righe.** 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; 2 ore, niente calcolatrice, solo 4 facciate di appunti scritti a mano. Appelli 2026/27 di Algebra lineare: 22/01/2027 e 05/02/2027 alle 14:00. Regole complete e fonti nella lezione L01.

**Che cosa chiedono.** In 9 dei 15 appelli dal 24/01/2024 al 07/09/2026 la domanda sui numeri complessi riguardava questa lezione:

| Tipo di domanda | Appelli (domanda) |
|---|---|
| potenza alta ($z^8$, $z^9$, $z^{12}$, $z^{2025}$) di un numero dato in forma $a + bi$ | 24/01/2024 (2), 10/07/2024 (1), 07/02/2025 (1), 15/01/2026 (5) |
| potenza di un numero dato in forma trigonometrica | 06/09/2024 (1) |
| prodotto da scrivere in forma polare | 16/01/2025 (1) |
| radici: quale numero è (o non è) soluzione di $z^n = z_0$, o che cosa vale un'espressione con una radice quadrata | 10/06/2024 (1), 02/09/2025 (2), 05/02/2026 (1) |

Ecco tre di queste domande, con la soluzione.

> [!ESEMPIO] · Appello del 16/01/2025, domanda 1
> Dato $z = 2\cos\frac\pi4 + 2i\sin\frac\pi4$, allora $-3iz$ in coordinate polari è uguale a: (a) $-6i\cos\frac\pi4 - 6i\sin\frac\pi4$; (b) $-6e^{3\pi i/4}$; (c) $-6i\cos\frac\pi4 + 6i\sin\frac\pi4$; (d) $6e^{7\pi i/4}$; (e) $0$.
>
> **Soluzione.** $z = 2e^{i\pi/4}$. Il numero $-3i$ sta sul semiasse immaginario negativo: modulo $3$, argomento $\frac{3\pi}2$, cioè $-3i = 3e^{3\pi i/2}$. Moduli moltiplicati, argomenti sommati:
> $$-3iz = 6\,e^{i(\pi/4 + 3\pi/2)} = 6\,e^{7\pi i/4}.$$
> Risposta (d). La (b) indica lo stesso numero ($-6e^{3\pi i/4} = 6e^{i\pi}e^{3\pi i/4} = 6e^{7\pi i/4}$) ma non è in coordinate polari, perché il fattore davanti è negativo. La (a) vale $-6\sqrt 2\,i$ e la (c) vale $0$: sono numeri diversi dal risultato $6e^{7\pi i/4} = 3\sqrt 2 - 3\sqrt 2\,i$.

> [!ESEMPIO] · Appello del 15/01/2026, domanda 5
> Dato $z = \frac{\sqrt 3}2 - \frac 12 i$, allora $z^9$ è uguale a: (a) $1$; (b) $\frac 12 - \frac{\sqrt 3}2 i$; (c) $-\frac{9\sqrt 3}2 + \frac 92 i$; (d) $i$; (e) $-\frac{\sqrt 3^9}{2^9} + \frac 1{2^9}i$.
>
> **Soluzione.** $|z| = \sqrt{\frac 34 + \frac 14} = 1$; $\cos\vartheta = \frac{\sqrt 3}2$ e $\sin\vartheta = -\frac 12$, quarto quadrante: $\vartheta = -\frac\pi6$. Quindi
> $$z^9 = e^{-9\pi i/6} = e^{-3\pi i/2}.$$
> Aggiungo un giro: $-\frac{3\pi}2 + 2\pi = \frac\pi2$, quindi $z^9 = e^{i\pi/2} = i$. Risposta (d). Le risposte (c) ed (e) vengono da conti fatti sulle due parti separatamente (moltiplicate per $9$, oppure elevate alla nona, e poi con i segni cambiati), che per i numeri complessi non hanno senso.

> [!ESEMPIO] · Appello del 02/09/2025, domanda 2
> Quale dei seguenti è una radice terza di $z = 8e^{3\pi i/5}$? (a) $4e^{\pi i/5}$; (b) $2e^{\pi i/5 + 2\pi i/3}$; (c) $8e^{\pi i/3 + 2\pi ik}$; (d) $2e^{3\pi i/5}$; (e) $2e^{3\pi i/5 + \pi i/3}$.
>
> **Soluzione.** Modulo delle radici: $\sqrt[3]8 = 2$ (quindi (a) e (c) sono escluse). Argomenti: $\frac{3\pi/5}3 + \frac{2k\pi}3 = \frac\pi5 + \frac{2k\pi}3$ per $k = 0, 1, 2$. Con $k = 1$ si ottiene $2e^{\pi i/5 + 2\pi i/3}$: risposta (b). Controllo diretto: $\left(2e^{i(\pi/5 + 2\pi/3)}\right)^3 = 8e^{i(3\pi/5 + 2\pi)} = 8e^{3\pi i/5}$. La (d) ha l'angolo non diviso per $3$: il suo cubo è $8e^{9\pi i/5}$; la (e) ha cubo $8e^{9\pi i/5 + \pi i} = 8e^{4\pi i/5}$.

> [!METODO] Le domande sui complessi in forma polare
> 1. Porta **tutto** in forma polare: $z$, e anche i fattori come $-3i$, $-1$, $2i$.
> 2. Applica le regole: prodotto (moduli per, angoli più), inverso (modulo inverso, angolo opposto), potenza ($r^n$, $n\vartheta$), radici ($\sqrt[n]{r_0}$, $\frac{\vartheta_0 + 2k\pi}n$).
> 3. Riduci gli angoli togliendo multipli di $2\pi$.
> 4. Scarta subito le risposte con il modulo sbagliato: è il controllo più veloce.
> 5. Per «quale è una radice», eleva la risposta candidata alla $n$: deve tornare $z_0$.

**Errori da evitare.** Scrivere il modulo negativo in una forma polare; elevare alla $n$ il modulo ma non moltiplicare l'angolo (o viceversa); prendere $\vartheta_0$ invece di $\frac{\vartheta_0}n$ come primo angolo delle radici; dimenticare che un reale negativo ha argomento $\pi$; sbagliare quadrante guardando solo il coseno; trovare una radice sola invece di $n$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la tabella di seno e coseno negli angoli notevoli; $x = r\cos\vartheta$, $y = r\sin\vartheta$; $e^{i\vartheta} = \cos\vartheta + i\sin\vartheta$; $e^{i\pi} = -1$, $e^{i\pi/2} = i$; prodotto, inverso e potenza in forma polare; la formula delle radici $z_k = \sqrt[n]{r_0}\,e^{i(\vartheta_0 + 2k\pi)/n}$; il metodo per ridurre un angolo.

## Quiz

```quiz
D: Dato $z = 1 + i$, allora $z^{10}$ è uguale a:
+ $32i$
- $-32i$
- $32$
- $1024\,i$
- $10 + 10i$
= $1 + i = \sqrt 2\,e^{i\pi/4}$, quindi $z^{10} = (\sqrt 2)^{10}e^{10\pi i/4} = 32\,e^{5\pi i/2} = 32\,e^{i\pi/2} = 32i$ (si toglie un giro, $2\pi$). Verifica: $(1 + i)^2 = 2i$ e $(2i)^5 = 32i^5 = 32i$. $1024 = 2^{10}$ viene elevando alla decima il modulo $2$ invece di $\sqrt 2$. Simile agli appelli del 10/07/2024 e del 24/01/2024.

D: Dato $z = 2\cos\frac{\pi}{12} + 2i\sin\frac{\pi}{12}$, allora $z^6$ è uguale a:
+ $64i$
- $2i$
- $64$
- $-64$
- $12i$
= $z = 2e^{i\pi/12}$, quindi $z^6 = 2^6e^{6\pi i/12} = 64\,e^{i\pi/2} = 64i$. $2i$ dimentica di elevare il modulo; $12i$ moltiplica il modulo per $6$ invece di elevarlo. Simile all'appello del 06/09/2024, domanda 1.

D: Dato $z = 3e^{i\pi/3}$, il numero $-2iz$ scritto in forma polare $re^{i\vartheta}$ con $r > 0$ e $0 \le \vartheta < 2\pi$ è:
+ $6e^{11\pi i/6}$
- $-6e^{5\pi i/6}$
- $6e^{5\pi i/6}$
- $5e^{11\pi i/6}$
- $6e^{4\pi i/3}$
= $-2i = 2e^{3\pi i/2}$, quindi $-2iz = 6\,e^{i(\pi/3 + 3\pi/2)} = 6\,e^{11\pi i/6}$. $-6e^{5\pi i/6}$ è lo stesso numero ma non è una forma polare ($r$ negativo); $6e^{5\pi i/6}$ viene prendendo $-2i = 2e^{i\pi/2}$ (angolo sbagliato); $5$ somma i moduli invece di moltiplicarli; $6e^{4\pi i/3}$ usa l'angolo $\pi$ per $-i$. Simile all'appello del 16/01/2025, domanda 1.

D: Quale dei seguenti numeri è una radice terza di $8i$?
+ $-2i$
- $2i$
- $2e^{i\pi/3}$
- $8e^{i\pi/6}$
- $\frac 83\,i$
= $8i = 8e^{i\pi/2}$: le radici terze hanno modulo $2$ e argomenti $\frac\pi6 + \frac{2k\pi}3$, cioè $\frac\pi6$, $\frac{5\pi}6$, $\frac{3\pi}2$. L'ultima è $2e^{3\pi i/2} = -2i$. Verifica: $(-2i)^3 = -8i^3 = 8i$. Invece $(2i)^3 = -8i$, $\left(2e^{i\pi/3}\right)^3 = 8e^{i\pi} = -8$; $8e^{i\pi/6}$ e $\frac 83 i$ hanno il modulo sbagliato. Simile all'appello del 02/09/2025, domanda 2.

D: Quale dei seguenti numeri **non** è soluzione di $z^6 = 1$?
+ $e^{i\pi/6}$
- $1$
- $-1$
- $e^{i\pi/3}$
- $e^{2\pi i/3}$
= Le soluzioni sono le radici seste dell'unità $e^{2k\pi i/6} = e^{k\pi i/3}$: ci sono $1$ ($k = 0$), $e^{i\pi/3}$ ($k = 1$), $e^{2\pi i/3}$ ($k = 2$), $-1 = e^{i\pi}$ ($k = 3$). Invece $\left(e^{i\pi/6}\right)^6 = e^{i\pi} = -1 \neq 1$. Simile all'appello del 05/02/2026, domanda 1.

D: Dato $z = \frac{\sqrt 2}2(1 + i)$, allora $z^{2027}$ è uguale a:
+ $\frac{\sqrt 2}2(-1 + i)$
- $\frac{\sqrt 2}2(1 + i)$
- $2027(1 + i)$
- $-1$
- $i$
= $z = e^{i\pi/4}$ (modulo $1$). $z^{2027} = e^{2027\pi i/4}$; un giro vale $\frac 84\pi$ e $2027 = 8 \cdot 253 + 3$, quindi $z^{2027} = e^{3\pi i/4} = -\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i$. La risposta $2027(1 + i)$ moltiplica invece di elevare. Simile all'appello del 07/02/2025, domanda 1.

D: Se $z = 3e^{2\pi i/5}$, il coniugato $\bar z$ è:
+ $3e^{8\pi i/5}$
- $-3e^{2\pi i/5}$
- $3e^{3\pi i/5}$
- $\frac 13e^{-2\pi i/5}$
- $3e^{-8\pi i/5}$
= Il coniugato ha lo stesso modulo e l'argomento opposto: $\bar z = 3e^{-2\pi i/5} = 3e^{8\pi i/5}$ (aggiungendo $2\pi$). $-3e^{2\pi i/5}$ è $-z$; $3e^{3\pi i/5}$ è il simmetrico rispetto all'asse immaginario; $\frac 13e^{-2\pi i/5}$ è l'inverso $z^{-1}$; $3e^{-8\pi i/5} = 3e^{2\pi i/5}$ è $z$ stesso.

D: Se $z = 2e^{i\pi/3}$, l'inverso $z^{-1}$ è:
+ $\frac 14 - \frac{\sqrt 3}4 i$
- $\frac 14 + \frac{\sqrt 3}4 i$
- $1 - \sqrt 3 i$
- $\frac 12 - \frac{\sqrt 3}2 i$
- $-\frac 14 + \frac{\sqrt 3}4 i$
= $z^{-1} = \frac 12e^{-i\pi/3} = \frac 12\left(\frac 12 - \frac{\sqrt 3}2 i\right) = \frac 14 - \frac{\sqrt 3}4 i$. $1 - \sqrt 3 i = \bar z$ (modulo non invertito); $\frac 12 - \frac{\sqrt 3}2 i = e^{-i\pi/3}$ dimentica il modulo.

D: Quanto vale la parte reale di $(1 + i\sqrt 3)^5$? Scrivi un numero.
N: 16
= $1 + i\sqrt 3 = 2e^{i\pi/3}$, quindi $(1 + i\sqrt 3)^5 = 32\,e^{5\pi i/3} = 32\left(\frac 12 - \frac{\sqrt 3}2 i\right) = 16 - 16\sqrt 3\,i$. La parte reale è $16$.

D: Le quattro soluzioni di $z^4 = -16$, nel piano complesso, sono:
+ i vertici di un quadrato centrato nell'origine con un vertice in $\sqrt 2 + \sqrt 2\,i$
- i vertici di un quadrato centrato nell'origine con un vertice in $2$
- i vertici di un quadrato centrato nell'origine con un vertice in $4$
- i vertici di un triangolo equilatero centrato nell'origine
- due numeri reali e due numeri complessi coniugati
= $-16 = 16e^{i\pi}$: le radici hanno modulo $\sqrt[4]{16} = 2$ e argomenti $\frac\pi4 + \frac{k\pi}2$, cioè $\frac\pi4, \frac{3\pi}4, \frac{5\pi}4, \frac{7\pi}4$: sono $\pm\sqrt 2 \pm \sqrt 2\,i$. Il quadrato con vertici $\pm 2, \pm 2i$ è quello delle soluzioni di $z^4 = 16$; quello con vertici $\pm 4, \pm 4i$ viene prendendo $\sqrt{16} = 4$ al posto di $\sqrt[4]{16} = 2$; le soluzioni sono quattro, non tre. Nessuna soluzione è reale: $x^4 \ge 0$ per ogni $x$ reale.
```

## Esercizi

::: esercizio base Conversioni
(a) Scrivi in forma polare: $-\sqrt 3 + i$, $-4$, $3i$, $-1 - i$. (b) Scrivi nella forma $a + bi$: $4e^{2\pi i/3}$, $\sqrt 2\,e^{-3\pi i/4}$, $5e^{i\pi}$.
::: soluzione
(a)
- $-\sqrt 3 + i$: $r = \sqrt{3 + 1} = 2$; $\cos\vartheta = -\frac{\sqrt 3}2$, $\sin\vartheta = \frac 12$, secondo quadrante: $\vartheta = \pi - \frac\pi6 = \frac{5\pi}6$. Quindi $2e^{5\pi i/6}$.
- $-4$: reale negativo, $r = 4$, $\vartheta = \pi$: $4e^{i\pi}$.
- $3i$: sul semiasse immaginario positivo, $r = 3$, $\vartheta = \frac\pi2$: $3e^{i\pi/2}$.
- $-1 - i$: $r = \sqrt 2$; $\cos\vartheta = \sin\vartheta = -\frac{\sqrt 2}2$, terzo quadrante: $\vartheta = \pi + \frac\pi4 = \frac{5\pi}4$. Quindi $\sqrt 2\,e^{5\pi i/4}$.

(b)
- $4e^{2\pi i/3} = 4\left(-\frac 12 + \frac{\sqrt 3}2 i\right) = -2 + 2\sqrt 3\,i$.
- $\sqrt 2\,e^{-3\pi i/4} = \sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -1 - i$.
- $5e^{i\pi} = 5 \cdot (-1) = -5$.
:::

::: esercizio medio Esercizio 3.5 delle dispense: $z^4 = i$
Calcola le soluzioni dell'equazione $z^4 = i$ e disegnale nel piano complesso.
::: soluzione
1. $i = 1 \cdot e^{i\pi/2}$: $r_0 = 1$, $\vartheta_0 = \frac\pi2$.
2. Modulo delle radici: $\sqrt[4]1 = 1$. Stanno tutte sulla circonferenza unitaria.
3. Argomenti: $\frac{\pi/2}4 + \frac{2k\pi}4 = \frac\pi8 + \frac{k\pi}2$ per $k = 0, 1, 2, 3$:
   $$\frac\pi8, \qquad \frac{5\pi}8, \qquad \frac{9\pi}8, \qquad \frac{13\pi}8.$$
4. Le soluzioni sono $z_k = e^{i(\pi/8 + k\pi/2)}$: in gradi, gli angoli $22{,}5°$, $112{,}5°$, $202{,}5°$ e $292{,}5°$. Formano un quadrato inscritto nella circonferenza unitaria.

Controllo: $z_0^4 = e^{4\pi i/8} = e^{i\pi/2} = i$. Nota che passare da una radice alla successiva vuol dire ruotare di $\frac\pi2$, cioè moltiplicare per $i$: le quattro radici sono $w$, $iw$, $-w$, $-iw$ con $w = z_0$.

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

> [!OLTRE] · la forma $a + bi$
> Gli angoli $\frac\pi8$ non sono nella tabella, ma con la formula di bisezione $\cos^2\alpha = \frac{1 + \cos 2\alpha}2$ si trova $\cos\frac\pi8 = \frac{\sqrt{2 + \sqrt 2}}2 \approx 0{,}924$ e $\sin\frac\pi8 = \frac{\sqrt{2 - \sqrt 2}}2 \approx 0{,}383$. Quindi $z_0 = \frac{\sqrt{2 + \sqrt 2}}2 + \frac{\sqrt{2 - \sqrt 2}}2 i$, e le altre radici si ottengono moltiplicando per $i$, $-1$, $-i$. L'esercizio non lo chiede: la forma polare è già una risposta completa.
:::

::: esercizio medio Esercizio 3.6 delle dispense: coordinate polari
Determina coordinate polari per i seguenti numeri complessi:
$$\sin(2), \qquad \cos(2) + i\sin(2), \qquad \cos(2) - i\sin(2), \qquad \frac{1 + i}2, \qquad 1 - i\sqrt 3.$$
::: soluzione
Qui «$2$» è un angolo di $2$ radianti, circa $114{,}6°$: sta nel secondo quadrante, dove il seno è positivo e il coseno negativo.

- **$\sin(2)$** è un numero **reale**, circa $0{,}909$, e positivo. Un reale positivo sta sul semiasse reale positivo: $r = \sin 2$ e $\vartheta = 0$. Quindi $\sin 2 = (\sin 2)\,e^{i \cdot 0}$. (Se fosse stato negativo, l'argomento sarebbe stato $\pi$ e il modulo $-\sin 2$.)
- **$\cos(2) + i\sin(2)$** è per definizione $e^{2i}$: $r = 1$, $\vartheta = 2$. Nessun conto: la forma è già quella polare.
- **$\cos(2) - i\sin(2)$**: siccome $\cos(-2) = \cos 2$ e $\sin(-2) = -\sin 2$, è $\cos(-2) + i\sin(-2) = e^{-2i}$. Quindi $r = 1$, $\vartheta = -2$ (oppure $2\pi - 2$). È il coniugato del numero precedente.
- **$\frac{1 + i}2$**: $r = \sqrt{\frac 14 + \frac 14} = \frac{\sqrt 2}2$; $\cos\vartheta = \frac{1/2}{\sqrt 2/2} = \frac 1{\sqrt 2} = \frac{\sqrt 2}2$ e anche $\sin\vartheta = \frac{\sqrt 2}2$, quindi $\vartheta = \frac\pi4$. In breve $\frac{1 + i}2 = \frac{\sqrt 2}2\,e^{i\pi/4}$.
- **$1 - i\sqrt 3$**: $r = \sqrt{1 + 3} = 2$; $\cos\vartheta = \frac 12$, $\sin\vartheta = -\frac{\sqrt 3}2$, quarto quadrante: $\vartheta = -\frac\pi3$ (oppure $\frac{5\pi}3$). Quindi $1 - i\sqrt 3 = 2e^{-i\pi/3}$.
:::

::: esercizio base Esercizio 3.7 delle dispense: tre insiemi in coordinate polari
Disegna nel piano complesso i seguenti sottoinsiemi:
1. $A = \{z = re^{i\vartheta} \in \C \text{ tali che } \vartheta = \frac\pi2\}$;
2. $B = \{z = re^{i\vartheta} \in \C \text{ tali che } \vartheta = (2k + 1)\pi,\ k \in \Z\}$;
3. $C = \{z = re^{i\vartheta} \in \C \text{ tali che } r = 1 \text{ e } 0 \le \vartheta \le \pi\}$.
::: soluzione
In tutti e tre gli insiemi $z$ è scritto in forma polare, quindi $z \neq 0$ e $r > 0$.

1. **$A$**: i numeri $re^{i\pi/2} = ri$ con $r > 0$, cioè il **semiasse immaginario positivo**, origine esclusa.
2. **$B$**: gli angoli $(2k + 1)\pi$ sono i multipli **dispari** di $\pi$: $\pi, 3\pi, -\pi, \dots$ Differiscono tutti da $\pi$ per un multiplo di $2\pi$, quindi indicano tutti la direzione di $-1$: $B$ è il **semiasse reale negativo**, origine esclusa, cioè i numeri reali negativi.
3. **$C$**: modulo $1$ vuol dire circonferenza unitaria; l'angolo da $0$ a $\pi$ (estremi compresi) ne seleziona la **metà superiore**, da $1$ a $-1$, con i due estremi $1$ e $-1$ inclusi.

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
**In coordinate polari.** $|1 - i| = \sqrt 2$; $\cos\vartheta = \frac{\sqrt 2}2$ e $\sin\vartheta = -\frac{\sqrt 2}2$, quindi $\vartheta = -\frac\pi4$ e $1 - i = \sqrt 2\,e^{-i\pi/4}$. Allora
$$(1 - i)^3 = (\sqrt 2)^3e^{-3\pi i/4} = 2\sqrt 2\left(\cos\frac{3\pi}4 - i\sin\frac{3\pi}4\right),$$
e siccome $\cos\frac{3\pi}4 = -\frac{\sqrt 2}2$ e $\sin\frac{3\pi}4 = \frac{\sqrt 2}2$,
$$(1 - i)^3 = 2\sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -2 - 2i.$$
Qui $(\sqrt 2)^3 = \sqrt 2 \cdot \sqrt 2 \cdot \sqrt 2 = 2\sqrt 2$, e $2\sqrt 2 \cdot \frac{\sqrt 2}2 = \frac{2 \cdot 2}2 = 2$.

**In coordinate cartesiane.** $(1 - i)^2 = 1 - 2i + i^2 = -2i$, e poi $(1 - i)^3 = (-2i)(1 - i) = -2i + 2i^2 = -2 - 2i$. I due metodi danno lo stesso risultato.
:::

::: esercizio medio Prodotto e quoziente in forma polare
Siano $z = 2e^{i\pi/3}$ e $w = 4e^{3\pi i/4}$. Calcola in forma polare $zw$, $\frac zw$, $w^{-1}$ e $\bar z\,w$.
::: soluzione
- $zw = 2 \cdot 4\,e^{i(\pi/3 + 3\pi/4)} = 8e^{13\pi i/12}$, perché $\frac\pi3 + \frac{3\pi}4 = \frac{4\pi + 9\pi}{12} = \frac{13\pi}{12}$.
- $\frac zw = \frac 24\,e^{i(\pi/3 - 3\pi/4)} = \frac 12\,e^{-5\pi i/12}$, perché $\frac{4\pi - 9\pi}{12} = -\frac{5\pi}{12}$. Aggiungendo un giro: $\frac 12\,e^{19\pi i/12}$.
- $w^{-1} = \frac 14\,e^{-3\pi i/4} = \frac 14\,e^{5\pi i/4}$.
- $\bar z = 2e^{-i\pi/3}$, quindi $\bar z\,w = 8\,e^{i(-\pi/3 + 3\pi/4)} = 8e^{5\pi i/12}$, perché $\frac{-4\pi + 9\pi}{12} = \frac{5\pi}{12}$.
:::

::: esercizio medio Dal foglio 1 del tutorato: $z^{10}\bar z$
Scrivi $z = \frac 12(-\sqrt 3 + i)$ in coordinate polari e calcola $z^{10}\bar z$ nella forma $a + bi$.
::: soluzione
1. $z = -\frac{\sqrt 3}2 + \frac 12 i$: $|z| = \sqrt{\frac 34 + \frac 14} = 1$; $\cos\vartheta = -\frac{\sqrt 3}2$, $\sin\vartheta = \frac 12$, secondo quadrante: $\vartheta = \frac{5\pi}6$. Quindi $z = e^{5\pi i/6}$.
2. $z^{10} = e^{50\pi i/6}$ e $\bar z = e^{-5\pi i/6}$, quindi $z^{10}\bar z = e^{(50 - 5)\pi i/6} = e^{45\pi i/6} = e^{15\pi i/2}$.
3. Riduco: un giro vale $\frac 42\pi$ e $15 = 4 \cdot 3 + 3$, quindi $\frac{15\pi}2 = 3 \cdot 2\pi + \frac{3\pi}2$.
4. $z^{10}\bar z = e^{3\pi i/2} = -i$.

Una scorciatoia: siccome $|z| = 1$, $\bar z = z^{-1}$ (esercizio 8 della lezione L02), quindi $z^{10}\bar z = z^9 = e^{45\pi i/6}$, lo stesso conto.
:::

::: esercizio medio Dal foglio 1 del tutorato: tre calcoli di radici
Calcola: (a) le radici quarte di $-i$; (b) le radici terze di $8$; (c) le radici quinte di $\frac 12(-\sqrt 3 + i)$.
::: soluzione
(a) $-i = e^{3\pi i/2}$. Modulo delle radici $1$; argomenti $\frac{3\pi}8 + \frac{k\pi}2$: $\frac{3\pi}8$, $\frac{7\pi}8$, $\frac{11\pi}8$, $\frac{15\pi}8$. Le radici sono $e^{3\pi i/8}$, $e^{7\pi i/8}$, $e^{11\pi i/8}$, $e^{15\pi i/8}$.

(b) $8 = 8e^{i \cdot 0}$. Modulo $\sqrt[3]8 = 2$; argomenti $0$, $\frac{2\pi}3$, $\frac{4\pi}3$. Le radici sono
$$2, \qquad 2e^{2\pi i/3} = -1 + i\sqrt 3, \qquad 2e^{4\pi i/3} = -1 - i\sqrt 3.$$
Tra i reali c'era solo $2$; le altre due sono complesse coniugate.

(c) Dall'esercizio precedente $\frac 12(-\sqrt 3 + i) = e^{5\pi i/6}$. Modulo $1$; argomenti $\frac{5\pi/6}5 + \frac{2k\pi}5 = \frac\pi6 + \frac{2k\pi}5$. In trentesimi di $\pi$: $\frac\pi6 = \frac{5\pi}{30}$ e il passo è $\frac{2\pi}5 = \frac{12\pi}{30}$. Gli argomenti sono
$$\frac{5\pi}{30} = \frac\pi6, \qquad \frac{17\pi}{30}, \qquad \frac{29\pi}{30}, \qquad \frac{41\pi}{30}, \qquad \frac{53\pi}{30},$$
e le radici sono $e^{i\pi/6} = \frac{\sqrt 3}2 + \frac 12 i$ e le altre quattro $e^{17\pi i/30}$, $e^{29\pi i/30}$, $e^{41\pi i/30}$, $e^{53\pi i/30}$, vertici di un pentagono regolare.
:::

::: esercizio medio Dal libro di Martelli (Esercizio 1.13): $z^4 = -16$
Determina tutte le soluzioni di $z^4 = -16$ e disegnale.
::: soluzione
$-16 = 16e^{i\pi}$. Modulo delle soluzioni: $\sqrt[4]{16} = 2$. Argomenti: $\frac\pi4 + \frac{k\pi}2$, cioè $\frac\pi4$, $\frac{3\pi}4$, $\frac{5\pi}4$, $\frac{7\pi}4$. In forma $a + bi$, con $2\cos\frac\pi4 = 2 \cdot \frac{\sqrt 2}2 = \sqrt 2$:
$$\sqrt 2 + \sqrt 2\,i, \qquad -\sqrt 2 + \sqrt 2\,i, \qquad -\sqrt 2 - \sqrt 2\,i, \qquad \sqrt 2 - \sqrt 2\,i.$$
Sono i vertici di un quadrato di raggio $2$, ruotato di $45°$ rispetto agli assi. Controllo: $(\sqrt 2 + \sqrt 2\,i)^2 = 2 + 4i + 2i^2 = 4i$, e $(4i)^2 = -16$.

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
**Il caso $z = 0$.** $0^4 = 0 = \bar 0^3$: lo zero è una soluzione.

**Il caso $z \neq 0$.** Scrivo $z = re^{i\vartheta}$ con $r > 0$. Allora $\bar z = re^{-i\vartheta}$ e
$$z^4 = r^4e^{4i\vartheta}, \qquad \bar z^3 = r^3e^{-3i\vartheta}.$$
Due forme polari sono uguali se e solo se:
1. i moduli sono uguali: $r^4 = r^3$, cioè (dividendo per $r^3 > 0$) $r = 1$;
2. gli angoli differiscono per un multiplo di $2\pi$: $4\vartheta = -3\vartheta + 2k\pi$, cioè $7\vartheta = 2k\pi$, cioè $\vartheta = \frac{2k\pi}7$.

Per $k = 0, 1, \dots, 6$ si ottengono sette punti diversi; gli altri $k$ ripetono gli stessi. Le soluzioni non nulle sono quindi le **radici settime dell'unità** $e^{2k\pi i/7}$, vertici di un ettagono regolare inscritto nella circonferenza unitaria.

**In totale 8 soluzioni**: $0$ e le sette radici settime di $1$. Controllo su una di esse, $z = e^{2\pi i/7}$: $z^4 = e^{8\pi i/7}$ e $\bar z^3 = e^{-6\pi i/7}$; gli angoli differiscono di $\frac{8\pi}7 + \frac{6\pi}7 = 2\pi$, quindi sono lo stesso numero.
:::

::: esercizio esame Come all'esame: una potenza molto alta
Dato $z = -\frac 12 + \frac{\sqrt 3}2 i$, allora $z^{2026}$ è uguale a: (a) $z$; (b) $1$; (c) $-1$; (d) $\bar z$; (e) $2026\,z$.
::: soluzione
1. **Forma polare.** $|z| = \sqrt{\frac 14 + \frac 34} = 1$; $\cos\vartheta = -\frac 12$, $\sin\vartheta = \frac{\sqrt 3}2$, secondo quadrante: $\vartheta = \frac{2\pi}3$. Quindi $z = e^{2\pi i/3}$.
2. **Potenza.** $z^{2026} = e^{2026 \cdot 2\pi i/3} = e^{4052\pi i/3}$.
3. **Riduzione.** Un giro vale $\frac 63\pi$; $4052 = 6 \cdot 675 + 2$, quindi $\frac{4052\pi}3 = 675 \cdot 2\pi + \frac{2\pi}3$.
4. $z^{2026} = e^{2\pi i/3} = z$: risposta (a).

Scorciatoia: $z$ è una radice terza dell'unità ($z^3 = e^{2\pi i} = 1$), quindi conta solo il resto di $2026$ diviso $3$: $2026 = 3 \cdot 675 + 1$, e $z^{2026} = (z^3)^{675} \cdot z = z$. La risposta (e) è l'errore di chi moltiplica invece di elevare.
:::

::: esercizio esame Come all'esame: quale è una radice
Quale dei seguenti numeri è una radice quarta di $-4$? (a) $1 + i$; (b) $\sqrt 2$; (c) $2i$; (d) $\sqrt 2\,i$; (e) $1 + 2i$.
::: soluzione
**Con la formula.** $-4 = 4e^{i\pi}$: le radici quarte hanno modulo $\sqrt[4]4 = \sqrt 2$ e argomenti $\frac\pi4 + \frac{k\pi}2$. Per $k = 0$: $\sqrt 2\,e^{i\pi/4} = \sqrt 2\left(\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i\right) = 1 + i$. Risposta (a); le altre radici sono $-1 + i$, $-1 - i$, $1 - i$.

**Scartando le risposte.** $|2i| = 2$ e $|1 + 2i| = \sqrt 5$ hanno il modulo sbagliato (deve essere $\sqrt 2$). $\sqrt 2$ e $\sqrt 2\,i$ hanno il modulo giusto ma argomenti $0$ e $\frac\pi2$, che non sono della forma $\frac\pi4 + \frac{k\pi}2$: infatti $(\sqrt 2)^4 = 4$ e $(\sqrt 2\,i)^4 = 4i^4 = 4$, non $-4$. Controllo della (a): $(1 + i)^2 = 2i$ e $(2i)^2 = -4$.
:::

## Domande di ripasso

::: domanda Che cosa sono le coordinate polari di un punto $(x, y) \neq (0, 0)$? Come si passa da quelle cartesiane e viceversa?
La coppia $(r, \vartheta)$: $r$ è la distanza dall'origine, $\vartheta$ l'angolo con il semiasse reale positivo. Da polari a cartesiane: $x = r\cos\vartheta$, $y = r\sin\vartheta$. Viceversa: $r = \sqrt{x^2 + y^2}$, $\cos\vartheta = \frac xr$, $\sin\vartheta = \frac yr$ (Definizione 3.1).
:::

::: domanda Perché per trovare l'angolo servono sia il coseno sia il seno?
Perché un valore del coseno (o della tangente) corrisponde a due angoli diversi: $(1, \sqrt 3)$ e $(1, -\sqrt 3)$ hanno lo stesso coseno $\frac 12$, ma angoli $\frac\pi3$ e $-\frac\pi3$. I segni di coseno e seno insieme individuano il quadrante.
:::

::: domanda Che cosa vuol dire $e^{i\vartheta}$ e che cosa sono modulo e argomento di $z = re^{i\vartheta}$?
$e^{i\vartheta}$ è un simbolo per $\cos\vartheta + i\sin\vartheta$, un punto della circonferenza unitaria. In $z = re^{i\vartheta}$ il numero $r = |z| > 0$ è il modulo e l'angolo $\vartheta$ è l'argomento (o fase).
:::

::: domanda Che cosa dice la Proposizione 3.2 e perché è vera?
$e^{i(\vartheta + \varphi)} = e^{i\vartheta}e^{i\varphi}$. Svolgendo il prodotto $(\cos\vartheta + i\sin\vartheta)(\cos\varphi + i\sin\varphi)$ si trovano come parte reale e parte immaginaria le formule di addizione di $\cos(\vartheta + \varphi)$ e $\sin(\vartheta + \varphi)$.
:::

::: domanda Come si moltiplicano due numeri complessi in forma polare? Che cosa vuol dire geometricamente?
$r_1e^{i\vartheta_1} \cdot r_2e^{i\vartheta_2} = r_1r_2e^{i(\vartheta_1 + \vartheta_2)}$: i moduli si moltiplicano, gli argomenti si sommano. Moltiplicare per $r_2e^{i\vartheta_2}$ ruota di $\vartheta_2$ e dilata di un fattore $r_2$.
:::

::: domanda Quali sono l'inverso e il coniugato di $z = re^{i\vartheta}$?
$z^{-1} = r^{-1}e^{-i\vartheta}$ (modulo inverso, angolo opposto) e $\bar z = re^{-i\vartheta}$ (stesso modulo, angolo opposto: riflessione rispetto all'asse reale).
:::

::: domanda Quando due forme polari rappresentano lo stesso numero?
$r_0e^{i\vartheta_0} = r_1e^{i\vartheta_1}$ se e solo se $r_0 = r_1$ e $\vartheta_1 = \vartheta_0 + 2k\pi$ per qualche $k \in \Z$.
:::

::: domanda Che cos'è l'identità di Eulero? Quanto valgono $e^{i\pi/2}$ e $e^{2\pi i}$?
$e^{i\pi} = -1$, cioè $\cos\pi + i\sin\pi$. Inoltre $e^{i\pi/2} = i$ ed $e^{2\pi i} = 1$.
:::

::: domanda Come si calcola $z^n$ in forma polare? Fai un esempio.
$\left(re^{i\vartheta}\right)^n = r^ne^{in\vartheta}$. Per esempio $(1 + i)^8 = (\sqrt 2)^8e^{2\pi i} = 16$.
:::

::: domanda Quante soluzioni ha $z^n = z_0$ con $z_0 \neq 0$, e come si trovano?
Esattamente $n$. Se $z_0 = r_0e^{i\vartheta_0}$, sono $\sqrt[n]{r_0}\,e^{i(\vartheta_0/n + 2k\pi/n)}$ per $k = 0, \dots, n - 1$.
:::

::: domanda Che figura formano le radici $n$-esime di un numero complesso?
I vertici di un poligono regolare con $n$ lati, centrato nell'origine, di raggio $\sqrt[n]{r_0}$. Per le radici dell'unità uno dei vertici è $1$.
:::

::: domanda Quali sono le radici terze di $-8$? Perché il primo angolo è $\frac\pi3$?
$1 + \sqrt 3 i$, $-2$, $1 - \sqrt 3 i$ (Esempio 3.4). Perché $-8 = 8e^{i\pi}$ e il primo angolo è $\frac\pi3$, un terzo dell'argomento $\pi$; poi si aggiunge due volte $\frac{2\pi}3$.
:::

::: domanda Perché $-6e^{3\pi i/4}$ non è una forma polare? Come si corregge?
Perché il modulo deve essere positivo. Con $-1 = e^{i\pi}$: $-6e^{3\pi i/4} = 6e^{7\pi i/4}$.
:::

## Glossario

```glossario
Radiante | Unità di misura degli angoli: l'angolo misura quanto l'arco che taglia sulla circonferenza di raggio $1$. Un giro vale $2\pi$.
Circonferenza unitaria | La circonferenza di centro $0$ e raggio $1$; i suoi punti sono $(\cos\vartheta, \sin\vartheta)$, cioè i numeri $e^{i\vartheta}$.
Coordinate polari | La coppia $(r, \vartheta)$ che individua un punto diverso dall'origine: distanza dall'origine e angolo con il semiasse reale positivo (Definizione 3.1).
Forma trigonometrica | La scrittura $z = r(\cos\vartheta + i\sin\vartheta)$.
Esponenziale complessa $e^{i\vartheta}$ | Simbolo per $\cos\vartheta + i\sin\vartheta$; soddisfa $e^{i(\vartheta + \varphi)} = e^{i\vartheta}e^{i\varphi}$.
Forma polare | La scrittura $z = re^{i\vartheta}$ con $r > 0$, per $z \neq 0$.
Modulo | $r = \lvert z \rvert$, la lunghezza del vettore che descrive $z$.
Argomento (fase) | L'angolo $\vartheta$ di $z = re^{i\vartheta}$; è determinato a meno di multipli di $2\pi$.
Argomento principale | L'argomento scelto in un intervallo fissato, di solito $(-\pi, \pi]$ oppure $[0, 2\pi)$.
Formule di addizione | $\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$ e $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$.
Regola del prodotto | Nel prodotto di due numeri complessi i moduli si moltiplicano e gli argomenti si sommano.
Identità di Eulero | $e^{i\pi} = -1$.
Formula di De Moivre | $\left(re^{i\vartheta}\right)^n = r^ne^{in\vartheta}$.
Radici $n$-esime | Le $n$ soluzioni di $z^n = z_0$ ($z_0 \neq 0$): $\sqrt[n]{r_0}\,e^{i(\vartheta_0 + 2k\pi)/n}$, $k = 0, \dots, n - 1$.
Radici $n$-esime dell'unità | Le soluzioni di $z^n = 1$: $e^{2k\pi i/n}$, vertici di un poligono regolare con un vertice in $1$.
Poligono regolare | Poligono con tutti i lati e tutti gli angoli uguali; le radici $n$-esime ne sono i vertici.
```

## Checklist

```checklist
- So convertire gradi e radianti e so la tabella di seno e coseno negli angoli notevoli, con i segni nei quattro quadranti.
- So passare dalle coordinate cartesiane a quelle polari e viceversa, scegliendo l'angolo con coseno e seno insieme.
- So scrivere un numero complesso in forma trigonometrica e in forma polare $re^{i\vartheta}$, con $r > 0$.
- So dimostrare la Proposizione 3.2 con le formule di addizione.
- So moltiplicare, invertire e dividere in forma polare, e so che cosa succede nel disegno.
- So riconoscere quando due forme polari indicano lo stesso numero e so ridurre un angolo grande.
- So che $e^{i\pi} = -1$, $e^{i\pi/2} = i$, $e^{2\pi i} = 1$ e so usarli per portare un segno meno dentro l'angolo.
- So calcolare potenze alte come $(1 + i)^{10}$ senza calcolatrice.
- So trovare tutte le $n$ radici $n$-esime di un numero complesso e disegnarle come poligono regolare.
- So risolvere le domande d'esame su potenze e radici scartando per prime le risposte con il modulo sbagliato.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 3 «Numeri complessi II», pp. 10–14: le sezioni 3.A–3.C sono seguite in ordine, con la pagina accanto a ogni titolo; la Definizione 3.1, la Proposizione 3.2 e gli Esempi 3.3 e 3.4 mantengono la loro numerazione; gli esercizi 3.5, 3.6, 3.7 e 3.8 sono svolti nella sezione «Esercizi» (esercizi 2, 3, 4 e 5); le Figure 3, 4 e 5 sono ridisegnate con i grafici.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.4.4–1.4.6 (pp. 27–31) ed Esercizi 1.13 e 1.14 (p. 37).
- **Foglio di esercizi 1 del tutorato** (Buzano, Radeschi, 27/10/2025, Moodle 2025/26): esercizi 2 e 3, svolti come esercizi 7 e 8.
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): domanda 1 del 16/01/2025, domanda 5 del 15/01/2026 e domanda 2 del 02/09/2025, riportate con soluzioni scritte per questi appunti; la tabella degli altri appelli ne indica solo il tipo. Regole d'esame 2025/26 e date 2026/27 come nella lezione L01.
- Le parti **«Oltre le dispense»** (il ripasso di trigonometria, le serie di potenze, l'argomento principale, il metodo per ridurre gli angoli, la formula di De Moivre, la trappola sulle radici quadrate, gli esercizi che non vengono dalle dispense) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
