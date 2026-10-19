---
corso: MDAG
modulo: AG
lezione: S3
tipo: riassunto
titolo: "Settimana 3: spazi vettoriali, sottospazi e Span"
data: 2026-10-15
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Riassunto settimanale · Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · 12/10 – 16/10/2026
descrizione: >-
  Riassunto della settimana 3 di Algebra lineare e Geometria (MDAG, parte 2): vettori di R^n, somma e prodotto per
  scalare, le otto regole, gruppi e campi, definizione di spazio vettoriale ed esempi (polinomi, funzioni,
  successioni); matrici, sottospazi, matrici diagonali, triangolari, simmetriche e antisimmetriche, combinazioni
  lineari e Span.
lede: >-
  Le due lezioni della settimana in poche pagine: che cosa vuol dire spazio vettoriale, come si riconosce un
  sottospazio in pochi secondi, che cos'è lo Span, e le domande vere degli appelli 2024–2026 su questi argomenti.
materiale: dispense
scheda:
  Lezioni: "[L05](L05_spazi_vettoriali_1.html) mar 13/10 · [L06](L06_spazi_vettoriali_2.html) gio 15/10, nel canale B"
  Dispense: Buzano e Radeschi 2026, pp. 20–30
  Tempo di ripasso: 35 minuti
fonte: >-
  Gli appunti delle lezioni L05 e L06 di Algebra lineare e Geometria, scritti sulle dispense 2026 del corso
  (R. Buzano, M. Radeschi)
appunti_html: appunti/MDAG/riassunto_settimana_03_AG.html
genera_html: true
---

## In breve

- Un **vettore** è una lista ordinata di numeri. Nel piano $(3, 2)$ è lo spostamento «3 a destra e 2 in su».
- I vettori si **sommano** un posto alla volta e si **moltiplicano per un numero**, lo **scalare**, moltiplicando ogni posto.
- Uno **spazio vettoriale** è un insieme in cui queste due operazioni non fanno mai uscire e seguono otto regole. Lo sono anche i polinomi, le funzioni, le successioni e le matrici.
- Un **sottospazio** è una parte di uno spazio vettoriale da cui non si esce: contiene lo zero ed è chiusa rispetto a somme e multipli.
- Una **combinazione lineare** è una ricetta: alcuni vettori, ciascuno moltiplicato per una dose, poi sommati. Lo **Span** è l'insieme di tutte le ricette, ed è sempre un sottospazio.
- All'esame «quale di questi insiemi è (o non è) un sottospazio?» è una domanda del quiz in quasi ogni appello.

## L05 · Spazi vettoriali I (mar 13/10)

**I vettori e le due operazioni.** Su una mappa a quadretti, fare un passo a destra e due in su, e poi tre a destra e uno in su, porta quattro a destra e tre in su. Quindi $(1, 2) + (3, 1) = (4, 3)$: sommare vuol dire fare uno spostamento dopo l'altro, un posto alla volta. Moltiplicare per 2 vuol dire fare lo stesso spostamento due volte; per $-1$, farlo al contrario.

```grafico
titolo: La somma di $v = (1, 2)$ e $w = (3, 1)$ è la diagonale del parallelogramma costruito sui due vettori: $(4, 3)$. Nell'altro ordine si arriva nello stesso punto.
x: -1 5
y: -1 4
poligono: 0 0 1 2 4 3 3 1 | ambra | tenue
segmento: 1 2 4 3 | blu | tratteggio
segmento: 3 1 4 3 | accento | tratteggio
vettore: 4 3 | ambra | spesso | $v + w$ | n
vettore: 1 2 | accento | spesso | $v$ | no
vettore: 3 1 | blu | spesso | $w$ | se
```

- Si sommano solo vettori con lo stesso numero di coordinate: $(1, 2) + (1, 2, 3)$ non ha senso.
- Tutti i multipli di un vettore diverso da zero stanno su una retta che passa per l'origine.
- Le **otto regole** sono quattro per la somma e quattro per i multipli. Per la somma: l'ordine non conta, le parentesi non contano, c'è il vettore zero, ogni vettore ha l'opposto. Per i multipli: due distributive, due scalari uno dopo l'altro, lo scalare 1 che non cambia niente.

**Gruppi e campi.** Sono i nomi di due liste di regole, la parte più teorica della lezione.

| Nome | Che cosa chiede | Sì | No |
|---|---|---|---|
| **gruppo** | un'operazione che non fa uscire, con elemento neutro, associativa, con l'inverso di ogni elemento | $\Z$ con la somma | $\N$ con la somma: manca l'opposto |
| **campo** | le quattro operazioni senza uscire, dividendo solo per numeri diversi da zero | $\Q$, $\R$, $\C$ | $\N$, $\Z$: $1/2$ esce |

**Lo spazio vettoriale.** Un insieme con una somma e un prodotto per scalare che non fanno uscire e rispettano le otto regole. Gli scalari sono i numeri di un campo: nel corso $\R$ o $\C$. Tra due vettori **non** c'è un prodotto.

| Spazio | I vettori | Il vettore zero |
|---|---|---|
| $\R^n$, $\C^n$ | liste di $n$ numeri | $(0, \dots, 0)$ |
| successioni | liste infinite di numeri | la successione di soli zeri |
| funzioni da un insieme in $\R$ | una funzione, sommata punto per punto | la funzione che vale sempre 0 |
| $\R_k[x]$ | i polinomi di grado **al massimo** $k$ | il polinomio nullo |

> [!TRAPPOLA] Due zeri e due gradi
> Il numero zero è uno scalare; il **vettore zero** è il vettore che sommato non cambia niente. Qualunque vettore per il numero zero dà il vettore zero. E i polinomi di grado **esattamente** 2 non sono uno spazio vettoriale: $x^2 + (-x^2 + x) = x$ ha grado 1, ed esce.

> [!METODO] «È uno spazio vettoriale?»
> 1. Scrivi chi sono i vettori, chi sono gli scalari e quali sono le due operazioni.
> 2. Prova con elementi concreti: una somma, un multiplo per $-1$ e per 0. Restano dentro?
> 3. Il vettore zero c'è?
> 4. Per dire **no** basta un esempio. Per dire **sì** serve un ragionamento che valga per tutti.

::: prova L'insieme dei vettori $(x, y)$ del piano con $x \ge 0$ è uno spazio vettoriale con le operazioni solite?
No. $(1, 0)$ ci sta, ma $(-1) \cdot (1, 0) = (-1, 0)$ no: un multiplo esce.
:::

> [!RICORDA]
> - Spazio vettoriale: somma e prodotto per scalare che non fanno uscire, più le otto regole.
> - Per dire di no: manca lo zero, oppure una somma o un multiplo escono.

## L06 · Spazi vettoriali II (gio 15/10)

**Le matrici.** Una matrice è una tabella di numeri: con $m$ righe e $n$ colonne si chiama $m \times n$; $a_{ij}$ è il numero nella riga $i$ e nella colonna $j$. Le matrici della stessa forma si sommano e si moltiplicano per un numero casella per casella: formano lo spazio vettoriale $M(m, n, \K)$.

**I sottospazi.** Una parte di uno spazio vettoriale è un sottospazio quando supera tre controlli:

1. contiene il vettore zero;
2. la somma di due suoi vettori resta dentro;
3. ogni multiplo di un suo vettore resta dentro.

```grafico
titolo: La retta $y = 2x$ passa per l'origine ed è un sottospazio. La retta $y = 2x + 1$ no: non contiene l'origine, e la somma dei suoi punti $(0, 1)$ e $(1, 3)$ è $(1, 4)$, che sta fuori.
x: -4 4
y: -3 5
retta: 0 0 1.5 3 | accento | $y = 2x$ | e
retta: 0 1 -1.5 -2 | rosa | tratteggio | $y = 2x + 1$ | o
punto: 0 0 | accento | $O$ | se
punto: 0 1 | rosa | $(0, 1)$ | o
punto: 1 3 | rosa | $(1, 3)$ | o
punto: 1 4 | ambra | $(1, 4)$ | e
```

> [!TRAPPOLA] Un solo controllo non basta
> Il primo quadrante contiene lo zero e le somme restano dentro, ma il multiplo per $-1$ esce. I due assi insieme hanno lo zero e i multipli, ma $(1, 0) + (0, 1) = (1, 1)$ esce. Allo stesso modo «le triangolari», superiori oppure inferiori, non sono un sottospazio; lo sono le superiori e le inferiori separatamente.

**Cinque classi di matrici quadrate**, tutte sottospazi:

| Classe | Che cosa vuol dire |
|---|---|
| diagonali | zeri fuori dalla diagonale |
| triangolari superiori | zeri sotto la diagonale |
| triangolari inferiori | zeri sopra la diagonale |
| simmetriche | uguali allo specchio sulla diagonale: $a_{ij} = a_{ji}$ |
| antisimmetriche | opposte allo specchio: $a_{ij} = -a_{ji}$, e quindi diagonale di zeri |

**Combinazioni lineari e Span.** Con gli ingredienti $v_1, \dots, v_k$ e le dosi $\lambda_1, \dots, \lambda_k$ la ricetta è $\lambda_1 v_1 + \dots + \lambda_k v_k$. Lo $\Span(v_1, \dots, v_k)$ è l'insieme di tutte le ricette: è sempre un sottospazio (Proposizione 6.7), ed è il più piccolo che contiene gli ingredienti.

- Lo Span di un vettore diverso da zero è la retta dei suoi multipli: $\Span\big((1, 2)\big) = \Span\big((2, 4)\big)$.
- Lo Span di due vettori **non** è l'insieme dei due vettori: contiene infinite ricette.
- **Il vettore sta nello Span?** Chiama le dosi con delle lettere, scrivi la ricetta uguale al vettore coordinata per coordinata, risolvi il sistema. Se trovi le dosi, sì; se arrivi a una cosa impossibile, come $3 = 4$, no.

> [!METODO] «È un sottospazio?» in pochi secondi
> | Se l'insieme è descritto da… | allora… |
> |---|---|
> | equazioni lineari **senza termine noto**: $x - 2y = 0$, $a = 2c$, $p(1) = 0$ | sì |
> | un'equazione con termine noto: $x + y = 1$, $p(0) = 1$ | no: manca lo zero |
> | disuguaglianze: $x \ge 0$ | quasi sempre no: prova il multiplo per $-1$ |
> | prodotti o potenze delle lettere: $xy = 0$, $x^2 = 1$ | quasi sempre no: prova una somma |
> | una lettera con un pezzo fisso: $\{(1 + t)x^2 + tx\}$ | no: nessun valore di $t$ dà lo zero |
> | uno Span | sì, sempre |

::: prova Il vettore $(1, 1)$ sta nello $\Span\big((1, 2), (2, 4)\big)$?
No. Ogni ricetta è $\lambda(1, 2) + \mu(2, 4) = (\lambda + 2\mu)(1, 2)$, un multiplo di $(1, 2)$: la seconda coordinata è sempre il doppio della prima.
:::

> [!RICORDA]
> - Sottospazio: zero, somme, multipli. Per dire no basta un esempio che non funziona.
> - Lo Span è l'insieme di tutte le ricette con quegli ingredienti, ed è sempre un sottospazio.

## Verso l'esame

- **Quiz**: «quale di questi insiemi è (o non è) un sottospazio?» è uscita il 08/02/2024, il 03/06/2025, il 05/02/2026 e il 07/09/2026. Si risolve con la tabella dei segnali della L06: quasi sempre basta guardare se c'è lo zero.
- **Span tra i polinomi**: il 24/01/2024 la domanda 1 chiedeva quali polinomi generano un sottospazio dato.
- Questi argomenti tornano in tutto il corso: dimensione e basi nella L07, nucleo e immagine nella L14, autospazi nella L18.
- Appelli 2026/27: venerdì 22/01/2027 e venerdì 05/02/2027, alle 14:00, con 4 facciate scritte a mano e senza calcolatrice.

## Domande di ripasso

::: domanda Quanto fa $(1, 2) + (3, 1)$? E $-2 \cdot (1, -3)$?
$(4, 3)$ e $(-2, 6)$: si lavora un posto alla volta.
:::

::: domanda Perché $\Z$ non è un campo?
Perché non sempre si può dividere senza uscire: $1/2$ non è intero.
:::

::: domanda I polinomi di grado esattamente 3 formano uno spazio vettoriale?
No: il polinomio nullo non ha grado 3, e $x^3 + (-x^3 + 1) = 1$ ha grado 0.
:::

::: domanda Quali sono i tre controlli per un sottospazio?
Contiene lo zero; la somma di due suoi vettori resta dentro; ogni multiplo di un suo vettore resta dentro.
:::

::: domanda Le matrici $2 \times 2$ con $a_{11} = 1$ sono un sottospazio?
No: la matrice nulla ha $a_{11} = 0$, quindi manca lo zero.
:::

::: domanda Che cos'è lo Span di un solo vettore $v \neq 0$ nel piano?
La retta che passa per l'origine e contiene $v$: tutti i suoi multipli.
:::

## Quiz d'esame

Tutte domande vere degli appelli di Algebra lineare e Geometria, con le risposte delle soluzioni ufficiali, ricontrollate con un programma. Sono la domanda 1, 2 o 3 del quiz, quella che vale 1 punto.

```quiz
D: Appello del 07/02/2025, domanda 2. Identificate la risposta corretta alla domanda «$\C$ ammette una struttura di spazio vettoriale su $\R$?».
- No, poiché $\C$ è già uno spazio vettoriale su $\C$ stesso.
- Sì, perché ogni campo è uno spazio vettoriale su $\R$.
- No, ma poiché $\C$ contiene $\R$, $\R$ è uno spazio vettoriale su $\C$.
- No, in quanto $\C$ e $\R$ sono campi diversi.
+ Sì, $\R$ è sottoinsieme di $\C$ e le operazioni $+$, $\cdot$ su $\R$ sono le stesse che in $\C$.
= Due numeri complessi si sommano, e un complesso per un reale resta complesso: le otto regole valgono perché valgono per i numeri. La risposta più insidiosa è «ogni campo è uno spazio vettoriale su $\R$»: è falso, per esempio $\Q$ non lo è, perché $\sqrt 2 \cdot 1$ esce. Le due «No» con motivazioni vere non rispondono alla domanda; $\R$ su $\C$ non funziona, perché $i \cdot 1$ non è reale.

D: Appello del 03/06/2025, domanda 2. Quale dei seguenti insiemi è un sottospazio vettoriale di $\R^3$?
- $\{(x, y, z) \in \R^3 \mid x^2 - 2x + 1 = 0\}$
- $\{(x, y, z) \in \R^3 \mid x + 2yz + 3z = 7\}$
- $\{(x, y, z) \in \R^3 \mid -x + 7y + z = 5\}$
+ $\{(x, y, z) \in \R^3 \mid x + \frac y2 - 5\pi z = 0\}$
- $\{(x, y, z) \in \R^3 \mid x + 3iy + 5z = 0\}$
= Un'equazione lineare, con numeri reali e senza termine noto. La risposta più insidiosa è la prima: sembra senza termine noto, ma è $(x - 1)^2 = 0$, cioè $x = 1$, e l'origine non la rispetta. La seconda e la terza hanno il termine noto; l'ultima ha un numero non reale, e la soluzione ufficiale la scarta perché «non è definita sui numeri reali».

D: Appello del 08/02/2024, domanda 2. Quale dei seguenti insiemi non è un sottospazio di $\R_2[x]$?
- $\{p(x) \in \R_2[x] \mid p(0) = 0\}$
- $\{(t + s)x^2 - tx - s \mid s, t \in \R\}$
- $\{p(x) = ax^2 + bx + c \mid a = 2c,\ b = 0\}$
+ $\{(1 + t)x^2 + tx \mid t \in \R\}$
- $\{p(x) \in \R_2[x] \mid p(1) = 0 = p(2)\}$
= Per avere il polinomio nullo servirebbero $1 + t = 0$ e $t = 0$ insieme: impossibile. La risposta più insidiosa è la seconda, che ha una forma simile: ma $(t + s)x^2 - tx - s = t(x^2 - x) + s(x^2 - 1)$ è uno Span, quindi è un sottospazio. Le altre sono equazioni lineari senza termine noto.

D: Appello del 05/02/2026, domanda 2. Quale dei seguenti insiemi non è un sottospazio di $\R_2[x]$?
- $\{p(x) \in \R_2[x] \mid p(1) = p(2)\}$
- $\Span(x + 1, x^2 - 1)$
+ $\{x^2 + tx \mid t \in \R\}$
- $\{p(x) = ax^2 + bx + c \mid a + b - c = 0\}$
- $\R_1[x]^\perp$
= Tutti i polinomi dell'insieme hanno 1 davanti a $x^2$: il polinomio nullo manca. La risposta più insidiosa è $p(1) = p(2)$: sembra una condizione strana, ma è $a + b + c = 4a + 2b + c$, cioè $3a + b = 0$, un'equazione lineare senza termine noto. Uno Span è sempre un sottospazio. L'ultimo è il complemento ortogonale, della lezione L21: anche lui è sempre un sottospazio.

D: Appello del 07/09/2026, domanda 3. Quale dei seguenti insiemi è un sottospazio di $\R_2[x]$?
- $\{p(x) = ax^2 + bx + c \mid a = 2c,\ b = 2\}$
- $\{p(x) \in \R_2[x] \mid p(0) = 1\}$
+ $\{p(x) \in \R_2[x] \mid p(1) = 0 = p(-1)\}$
- $\{tx^2 + sx + 1 \mid s, t \in \R\}$
- $\{(1 + t)x^2 + tx \mid t \in \R\}$
= È l'unico insieme che contiene il polinomio nullo, e le condizioni $p(1) = 0$ e $p(-1) = 0$ restano vere per somme e multipli. La risposta più insidiosa è la prima: $a = 2c$ va bene, ma $b = 2$ esclude il polinomio nullo. Nelle altre il termine noto è fissato a 1, oppure nessun $t$ dà lo zero.

D: Appello del 24/01/2024, domanda 1. In $\R_3[x]$ siano $a(x) = x - 1$, $b(x) = x + 2$, $c(x) = 2x^2 - 2$, $d(x) = x^2 - x$, $e(x) = 2x^3 + 1$, $f(x) = x^3 - x^2$, e sia $U = \{p(x) \in \R_3[x] \mid p(1) = 0\}$. Vale:
- $U = \Span(a, c)$
+ $U = \Span(a, c, f)$
- $U = \Span(c, d, e, f)$
- $U = \Span(b, e, f)$
- $U = \Span(a, c, d)$
= $a$, $c$ e $f$ fanno zero in 1, quindi il loro Span sta in $U$; e ogni $p$ con $p(1) = 0$ è $(x - 1)$ per un polinomio di grado al massimo 2, che si scrive con $a$, $c$, $f$. La risposta più insidiosa è $\Span(a, c, d)$: tutti fanno zero in 1, ma hanno grado al massimo 2, e $x^3 - 1$ resta fuori. $b$ ed $e$ non fanno zero in 1, quindi gli Span con loro escono da $U$.
```

## Fonti

- Le lezioni complete: [L05 · Spazi vettoriali I](L05_spazi_vettoriali_1.html), [L06 · Spazi vettoriali II](L06_spazi_vettoriali_2.html), con le domande vere degli appelli, i quiz e gli esercizi.
- Dispense 2026 del corso (R. Buzano, M. Radeschi), lezioni 5 e 6, pp. 20–30; B. Martelli, *Geometria e algebra lineare*, §1.5, §2.1 e §2.2.
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
