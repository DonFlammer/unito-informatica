---
corso: MDAG
modulo: MD
lezione: S3
tipo: riassunto
titolo: "Settimana 3: composizione e inverse, insiemi finiti, primi conteggi"
data: 2026-10-16
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Riassunto settimanale · Parte 1 (modA) · Matematica Discreta · Canali A, B e C · 12/10 – 16/10/2026
descrizione: >-
  Riassunto della settimana 3 di Matematica Discreta (MDAG, parte 1): composizione di funzioni, funzioni inverse e
  biezioni; cardinalità, insiemi finiti e infiniti, principio dei piccioni, inclusione-esclusione e multipli; metodo
  delle scelte successive, parole, fattoriale, disposizioni semplici e con ripetizione, anagrammi, combinazioni.
lede: >-
  Le tre lezioni della settimana in poche pagine: come si calcola una composizione senza sbagliare l'ordine, come si
  contano un'unione e i multipli, quale formula usare nei primi problemi di conteggio, e le domande vere della domanda
  3 e della domanda 4 del quiz.
materiale: libro
scheda:
  Lezioni: "[D05](D05_composizione_funzioni_inverse.html) lun 12/10 · [D06](D06_insiemi_finiti_inclusione_esclusione.html) mer 14/10 · [D07](D07_parole_anagrammi_disposizioni.html) ven 16/10"
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 2, pp. 23–29; cap. 3, pp. 39–55
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti delle lezioni D05, D06 e D07 di Matematica Discreta, scritti sul libro di A. Mori
appunti_html: appunti/MDAG/riassunto_settimana_03_MD.html
genera_html: true
---

## In breve

- **Comporre** vuol dire applicare due funzioni una dopo l'altra. In $g \circ f$ si applica **prima** la funzione scritta a destra.
- La composizione è associativa ma **non** commutativa: scambiando l'ordine il risultato in generale cambia, e a volte la composta nell'altro ordine non esiste.
- Una funzione ha l'**inversa** se e solo se è biettiva. L'inversa di una formula si trova scrivendo $y = f(x)$ e ricavando $x$.
- Due insiemi hanno lo stesso numero di elementi quando c'è una biezione tra loro. Tra insiemi finiti con lo stesso numero di elementi, iniettiva, suriettiva e biettiva sono la stessa cosa.
- **Piccioni**: con più piccioni che gabbie, una gabbia ne ha almeno due. **Inclusione-esclusione**: l'unione di due insiemi ha la somma dei loro elementi meno quelli in comune.
- **Scelte successive**: se una cosa si costruisce con più scelte una dopo l'altra, i numeri di possibilità si moltiplicano. Da qui vengono tutte le formule della D07.
- All'esame la **domanda 3** del quiz è quasi sempre una composizione, la **domanda 4** un conteggio.

## D05 · Composizione e funzioni inverse (lun 12/10)

**Una funzione dopo l'altra.** Alla mensa ogni studente sceglie un piatto, e ogni piatto ha un prezzo: «dallo studente al prezzo» è la composizione delle due funzioni. Con $f \colon A \to B$ e $g \colon B \to C$ la composta $g \circ f$ va da $A$ a $C$: $(g \circ f)(a) = g(f(a))$. Si può comporre solo se l'arrivo della prima è la partenza della seconda.

```grafico
titolo: $g \circ f$ si legge da destra: prima $f$ porta $a$ in $B$, poi $g$ porta $f(a)$ in $C$. La freccia tratteggiata è la composta, che salta il passaggio intermedio.
x: 0 12
y: 0 5
assi: no
griglia: no
proporzioni: libere
cerchio: 1.8 2.4 1.3 | blu
cerchio: 6 2.4 1.3 | ambra
cerchio: 10.2 2.4 1.3 | verde
testo: 1.8 0.6 | blu | $A$
testo: 6 0.6 | ambra | $B$
testo: 10.2 0.6 | verde | $C$
punto: 1.8 2.4 | blu | $a$ | o
punto: 6 2.4 | ambra | $f(a)$ | s
punto: 10.2 2.4 | verde | $g(f(a))$ | s
freccia: 2 2.4 5.8 2.4 | blu
freccia: 6.2 2.4 10 2.4 | ambra
testo: 3.9 2.85 | blu | $f$
testo: 8.1 2.85 | ambra | $g$
arco: 6 -2 6.08 0.81 2.33 | grigio | tratteggio
testo: 6 4.45 | grigio | $g \circ f$
```

> [!METODO] La domanda 3 del quiz
> 1. Leggi ogni catena **da destra a sinistra**: la funzione più vicina alla variabile si usa per prima.
> 2. Con un valore, come $g \circ f \circ f(0)$, calcola un passo alla volta e scrivi ogni numero.
> 3. Con una formula, sostituisci con le parentesi: in $g(f(n))$, al posto di ogni $n$ di $g$ va tutta la formula di $f$. Poi controlla su $x = 0$.
> 4. Se chiede quale composizione «non è definita», segui gli insiemi da destra: l'arrivo di ogni funzione deve essere la partenza della successiva.
> 5. Se chiede $g$ conoscendo $g \circ f$, prova le cinque risposte.

Un esempio dall'appello del 06/06/2025. Con $f(n) = 2n + 3$ e $g(n) = 3n - 2$:

$$(g \circ f)(n) = g(2n + 3) = 3(2n + 3) - 2 = 6n + 7.$$

**Le regole.** Con tre o più funzioni le parentesi non contano, conta solo l'ordine. L'identità non cambia niente; una costante, prima o dopo, rende costante la composta. Composte di iniettive restano iniettive, composte di suriettive restano suriettive.

**Le inverse.** Due funzioni sono inverse quando le due composte, nei due ordini, sono l'identità. L'inversa esiste solo per le biezioni ed è una sola (Teorema 2.20).

- Per trovarla: controlla che $f$ sia biettiva con il dominio e il codominio dati, scrivi $y = f(x)$, ricava $x$, controlla componendo.
- $f(x) = 2x + 5$ sui reali: da $y = 2x + 5$ viene $x = \frac{y - 5}{2}$, quindi $f^{-1}(y) = \frac 12 y - \frac 52$.
- L'inversa di una composta si fa al contrario, come calze e scarpe: $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$.

> [!TRAPPOLA] Due cose con lo stesso simbolo
> $f^{-1}(b)$ della lezione D04 è la **controimmagine**, un insieme, ed esiste sempre. Qui $f^{-1}(b)$ è il valore della **funzione inversa**, un elemento, ed esiste solo se $f$ è biettiva. E la stessa formula può essere biettiva sui reali e non sugli interi: $3n - 2$ sugli interi non raggiunge 0.

::: prova Con $f(n) = n + 3$ e $g(n) = 1 - 3n$ sugli interi, quanto fa $(g \circ f)(n)$?
$g(n + 3) = 1 - 3(n + 3) = -8 - 3n$. È la risposta giusta dell'appello del 04/02/2025, versione 2.
:::

> [!RICORDA]
> - $(g \circ f)(a) = g(f(a))$: prima $f$, poi $g$. Si calcola da dentro.
> - Inversa: solo per le biezioni. Si trova da $y = f(x)$ e si controlla componendo.

## D06 · Insiemi finiti e unioni (mer 14/10)

**Contare con le biezioni.** Due insiemi hanno la stessa **cardinalità** quando c'è una funzione biettiva tra loro. Con gli insiemi infiniti succedono cose strane: i numeri pari sono «tanti quanti» i naturali, con $n \mapsto 2n$.

- Un insieme è **finito** quando ogni funzione iniettiva da sé in sé è anche suriettiva. Tra due insiemi finiti con lo stesso numero di elementi, iniettiva, suriettiva e biettiva vogliono dire la stessa cosa (Nota 3.8).
- **Principio dei piccioni**: 13 persone, 12 mesi, quindi almeno due persone sono nate nello stesso mese. Dice che la gabbia c'è, non quale.
- Interi e frazioni si mettono in fila come i naturali: sono **numerabili**. I reali no.

**Contare un'unione.** Si sommano i due insiemi e si tolgono gli elementi in comune, che altrimenti si contano due volte:

$$\lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert - \lvert A \cap B \rvert.$$

Con tre insiemi: più i tre singoli, meno le tre intersezioni a due, più l'intersezione di tutti e tre.

```grafico
titolo: Tra 1 e 500 ci sono 250 multipli di 2 e 100 multipli di 5; i 50 multipli di 10 stanno in tutti e due. L'unione ne ha $250 + 100 - 50 = 300$, e fuori restano i 200 numeri coprimi con 1000.
x: -4 4
y: -2.6 2.6
assi: no
griglia: no
poligono: -3.8 -2.4 3.8 -2.4 3.8 2.4 -3.8 2.4 | grigio
cerchio: -0.9 0 1.7 | blu
cerchio: 0.9 0 1.7 | ambra
testo: -3.1 -1.95 | grigio | "1–500"
testo: -1.9 1.95 | blu | "multipli di 2"
testo: 1.9 1.95 | ambra | "multipli di 5"
testo: -1.65 0 | blu | "200"
testo: 0 0 | accento | "50"
testo: 1.65 0 | ambra | "50"
testo: 3.1 -1.95 | grigio | "200"
```

> [!METODO] Contare i numeri divisibili per qualcosa
> 1. I multipli di $k$ tra 1 e $n$ sono la parte intera di $n/k$: tra 1 e 1000 i multipli di 3 sono 333.
> 2. «Divisibile per $a$ e per $b$» vuol dire multiplo del **minimo comune multiplo**, non del prodotto: per 6 e 45 è 90, non 270.
> 3. «Per $a$ o per $b$» è un'unione: inclusione-esclusione. «Né per $a$ né per $b$» è il totale meno l'unione.

::: prova Tra 1 e 1000, quanti numeri sono divisibili per 6 ma non per 45?
I multipli di 6 sono 166; quelli divisibili anche per 45 sono i multipli di 90, cioè 11. Restano $166 - 11 = 155$: è l'appello del 01/07/2026, problema 1.
:::

> [!RICORDA]
> - Stessa cardinalità: c'è una biezione. Più piccioni che gabbie: una gabbia ne ha due.
> - Unione di due insiemi: somma meno intersezione. «E» tra divisibilità: minimo comune multiplo.

## D07 · Parole, anagrammi, disposizioni (ven 16/10)

**Scelte successive.** Con 2 primi e 3 secondi i menù possibili sono 6, perché per ogni primo ci sono tre secondi: si moltiplica. Vale anche quando le possibilità di una scelta dipendono dalle precedenti, purché il loro **numero** sia sempre lo stesso.

| Che cosa conti | Esempio | Formula |
|---|---|---|
| parole di lunghezza $k$ su $n$ simboli, ripetizioni ammesse (**disposizioni con ripetizione**) | parole di 6 lettere con 15 simboli | $n^k$: $15^6$ |
| file di $n$ oggetti diversi (**ordinamenti**) | 5 libri sullo scaffale | $n!$: $5! = 120$ |
| $k$ oggetti diversi presi da $n$, **in ordine** (**disposizioni semplici**) | podio con 12 atleti | $\frac{n!}{(n-k)!}$: $12 \cdot 11 \cdot 10$ |
| **anagrammi** con lettere ripetute | TROTTO | $\frac{6!}{2! \, 3!} = 60$ |

```grafico
titolo: Il podio con 12 atleti: 12 scelte per l'oro, 11 per l'argento, 10 per il bronzo. Le scelte si moltiplicano: $12 \cdot 11 \cdot 10 = 1320 = \frac{12!}{9!}$.
x: 0 10
y: 0 5
assi: no
griglia: no
proporzioni: libere
poligono: 3.6 0.5 6.4 0.5 6.4 3.2 3.6 3.2 | ambra
poligono: 0.8 0.5 3.6 0.5 3.6 2.4 0.8 2.4 | grigio
poligono: 6.4 0.5 9.2 0.5 9.2 1.7 6.4 1.7 | rosa
testo: 5 2.4 | ambra | "1°"
testo: 2.2 1.7 | grigio | "2°"
testo: 7.8 1.2 | rosa | "3°"
testo: 5 3.9 | ambra | "12 scelte"
testo: 2.2 3.1 | grigio | "11 scelte"
testo: 7.8 2.4 | rosa | "10 scelte"
```

**Anagrammi.** Se tutte le lettere fossero diverse, gli anagrammi di una parola di $n$ lettere sarebbero $n!$. Ogni lettera ripetuta $r$ volte fa contare ogni parola $r!$ volte: si divide per $r!$. In TROTTO la T compare 3 volte e la O 2: $\frac{6!}{3! \, 2!} = \frac{720}{12} = 60$.

**Combinazioni.** Scegliere $k$ oggetti da $n$ **senza** ordine: dalle 4 piante $a$, $b$, $c$, $d$ le coppie sono 6, mentre le scelte in ordine erano $\frac{4!}{2!} = 12$. La formula generale arriva nella prossima lezione.

> [!METODO] Quale formula?
> 1. **Conta l'ordine?** Se scambiando due elementi ottieni una cosa diversa, sì.
> 2. **Si possono ripetere?** Se lo stesso simbolo può tornare, sì.
> 3. Ordine sì e ripetizioni sì: $n^k$. Ordine sì e ripetizioni no: $\frac{n!}{(n-k)!}$. Tutti gli $n$ oggetti in fila: $n!$. Ordine no: combinazioni.

::: prova Quanti modi ci sono di far sedere 8 persone in una fila di 11 sedie?
Le persone scelgono la sedia una dopo l'altra: $11 \cdot 10 \cdots 4 = \frac{11!}{3!}$. È l'appello del 14/01/2025, domanda 4.
:::

> [!RICORDA]
> - Scelte una dopo l'altra: si moltiplica. Ordine e ripetizioni decidono la formula.
> - Anagrammi: $n!$ diviso il fattoriale di quante volte compare ogni lettera ripetuta.

## Verso l'esame

- **Domanda 3 del quiz**: in tutti gli appelli 2025–2026 è una composizione, con valori, con formule, con tre funzioni o con «quale non è definita». Il metodo è nella sezione D05.
- **Domanda 4 del quiz**: un conteggio. Nel 2025–2026 sono uscite parole, sedie, colorazioni, palline e anagrammi: tutti con le formule della D07. Le combinazioni (degustazioni di birre, caselle da colorare) servono dalla prossima lezione.
- **Problemi**: l'inclusione-esclusione con i multipli era il problema 1 dell'appello del 01/07/2026; anagrammi e ordinamenti il problema 1 del 03/02/2026.
- Appelli 2026/27: martedì 19/01/2027 e mercoledì 03/02/2027, alle 14:00, con libro e appunti.

## Domande di ripasso

::: domanda In $g \circ f$, quale funzione si applica per prima?
$f$, quella a destra: $(g \circ f)(a) = g(f(a))$.
:::

::: domanda Quando una funzione ha l'inversa?
Quando è biettiva. In quel caso l'inversa è una sola.
:::

::: domanda Quanto fa $(g \circ f)^{-1}$?
$f^{-1} \circ g^{-1}$: si disfa prima l'ultima funzione applicata.
:::

::: domanda Che cosa dice il principio dei piccioni?
Se ci sono più piccioni che gabbie, almeno una gabbia ha due piccioni o più. Con le funzioni: da un insieme finito più grande a uno più piccolo non ci sono funzioni iniettive.
:::

::: domanda Tra 1 e 100, quanti numeri sono divisibili per 4 e per 6?
8: sono i multipli di 12, il minimo comune multiplo. Con 24 se ne troverebbero 4, sbagliando.
:::

::: domanda Quante parole di 3 lettere si formano con 26 lettere? E se le lettere devono essere diverse?
$26^3 = 17576$; con lettere diverse $26 \cdot 25 \cdot 24 = 15600$.
:::

::: domanda Quanti sono gli anagrammi di ORO?
3: le $3! = 6$ file delle lettere si raggruppano a due a due, perché scambiare le due O non cambia la parola.
:::

## Quiz d'esame

Tutte domande vere dei quiz di Matematica Discreta, tranne la settima, che viene da un problema vero ed è messa a scelta multipla da me. Le prime sei sono la domanda 3, le ultime sei la domanda 4. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma. Sul principio dei piccioni nei quiz 2021–2026 non ho trovato domande.

```quiz
D: Appello del 01/07/2026, domanda 3. Siano $f, g, h \colon \Z \to \Z$ definite da $f(n) = n^2 - 1$, $g(n) = 1 - n$ e $h(n) = 3n + 1$. Allora:
- $f(h(g(1))) = 3$
- $h(g(f(1))) = 3$
- $g(h(f(1))) = -1$
+ $h(f(g(1))) = -2$
- $g(f(h(1))) = 14$
= Da dentro: $g(1) = 0$, $f(0) = -1$, $h(-1) = -2$. La risposta più insidiosa è $g(f(h(1))) = 14$: $h(1) = 4$, $f(4) = 15$, $g(15) = -14$, con il segno meno. Le altre: $f(h(g(1))) = f(1) = 0$; $h(g(f(1))) = h(1) = 4$; $g(h(f(1))) = g(1) = 0$.

D: Appello del 03/02/2026, domanda 3, versione 3. Siano $f, g \colon \Z \to \Z$ definite da $f(n) = 4n - 1$ e $g(n) = -n + 3$. Allora:
+ $f \circ g(-x) = 4x + 11$
- $f \circ g(x + 1) = 4x + 7$
- $f \circ g(x - 1) = -4x + 5$
- $g \circ f(2x) = 8x + 4$
- $g \circ f(-x) = -4x + 11$
= $g(-x) = x + 3$, poi $f(x + 3) = 4x + 12 - 1 = 4x + 11$. La risposta più insidiosa è $f \circ g(x + 1) = 4x + 7$: il valore vero è $f(-x + 2) = -4x + 7$, con il segno cambiato. Gli altri valori veri sono $-4x + 15$, $-8x + 4$ e $4x + 4$.

D: Appello del 06/06/2026, domanda 3, versione 2. Siano $f(x) = x + 3$, $g(x) = -x + 1$ e $h(x) = 2x$. Allora:
- $(g \circ f \circ h)(x) = -2x + 2$
+ $(h \circ f \circ g)(x) = -2x + 8$
- $(f \circ h \circ g)(x) = -2x + 3$
- $(f \circ g \circ h)(x) = -2x - 4$
- $(g \circ h \circ f)(x) = -2x + 5$
= Si parte da destra: $g$ dà $-x + 1$, $f$ dà $-x + 4$, $h$ dà $-2x + 8$. La risposta più insidiosa è $(g \circ h \circ f)(x) = -2x + 5$: il valore vero è $-(2x + 6) + 1 = -2x - 5$. Le altre tre valgono davvero $-2x - 2$, $-2x + 5$ e $-2x + 4$: le trappole hanno tutte la forma $-2x + \text{qualcosa}$, e solo l'ordine giusto dà il numero giusto.

D: Appello del 13/01/2026, domanda 3, versione 2. Supponiamo di avere funzioni $f \colon A \to C$, $g \colon C \to A$, $h \colon B \to A$, $k \colon B \to C$. Quale delle seguenti composizioni NON è definita?
+ $k \circ g \circ f \circ h$
- $f \circ g \circ f \circ h$
- $f \circ g \circ f \circ g$
- $g \circ f \circ g \circ k$
- $g \circ f \circ g \circ f$
= Da destra: $h$ porta in $A$, $f$ in $C$, $g$ in $A$; poi $k$ dovrebbe partire da $A$, ma parte da $B$. La risposta più insidiosa è $g \circ f \circ g \circ k$: $k$ va da $B$ a $C$, e da lì $g$, $f$, $g$ si incastrano. Nelle altre $f$ e $g$ si alternano tra $A$ e $C$ senza problemi.

D: Appello del 07/07/2025, domanda 3, versione 3. Sia $f(x) = 5 - 2x$ e $g(x)$ tale che $(g \circ f)(x) = 4x - 9$. Allora:
- $g(x) = 3 - 2x$
- $g(x) = 3 - x$
- $g(x) = 1 - x$
+ $g(x) = 1 - 2x$
- $g(x) = 1 + 2x$
= Si provano le risposte: $g(5 - 2x) = 1 - 2(5 - 2x) = 1 - 10 + 4x = 4x - 9$. La risposta più insidiosa è $g(x) = 3 - 2x$: dà $4x - 7$, sbagliato solo nel numero. $1 + 2x$ dà $11 - 4x$; con $1 - x$ e $3 - x$ il coefficiente di $x$ è 2, non 4.

D: Quiz 2021–2025, domanda 3. Sia $f \colon \R \to \R$ la funzione $f(x) = 3x - 2$. La funzione inversa è:
+ $g(x) = \frac 13 x + \frac 23$
- $g(x) = \frac 12 x + \frac 32$
- $g(x) = x + \frac 23$
- $g(x) = \frac 13 x - \frac 23$
- $g(x) = \frac 12 x - \frac 32$
= Da $y = 3x - 2$ viene $x = \frac{y + 2}{3}$. Controllo: $g(f(x)) = \frac{3x - 2}{3} + \frac 23 = x$. La risposta più insidiosa è $\frac 13 x - \frac 23$, con il segno sbagliato: $g(f(0)) = g(-2) = -\frac 43$, non 0.

D: Appello del 01/07/2026, problema 1, versione A, messo a scelta multipla. Quanti sono i numeri tra 1 e 1000 divisibili per 6 ma non per 45?
- 166
+ 155
- 163
- 144
- 11
= I multipli di 6 sono $\lfloor 1000/6 \rfloor = 166$. Tra questi vanno tolti i divisibili anche per 45, cioè i multipli di $\operatorname{mcm}(6, 45) = 90$: sono 11. Restano 155. La risposta più insidiosa è 163: chi usa il prodotto $6 \cdot 45 = 270$ toglie solo 3 numeri. 144 toglie tutti i 22 multipli di 45, anche quelli dispari; 166 dimentica di togliere; 11 sono quelli da togliere.

D: Appello del 01/07/2026, domanda 4, versione 2. Il numero di anagrammi della parola STRETTE è:
+ $\frac{7!}{2! \cdot 3!}$
- $7! - (2! \cdot 3!)$
- $7! - (2! + 3!)$
- $7!$
- $\frac{7!}{2 \cdot 3}$
= STRETTE ha 7 lettere: la T compare 3 volte, la E 2. Si divide $7!$ per $3!$ e per $2!$. La risposta più insidiosa è $\frac{7!}{2 \cdot 3}$: divide per 6 invece che per 12, cioè per 3 e non per $3! = 6$. Togliere qualcosa da $7!$ non ha senso: le ripetizioni fanno contare ogni parola più volte, quindi si divide.

D: Appello del 14/01/2025, domanda 4, versione 2. Quanti modi ci sono per far sedere 4 persone in una fila di 12 sedie?
+ $\frac{12!}{8!}$
- $12^4$
- $\frac{12!}{4!}$
- $12!$
- $4^{12}$
= La prima persona ha 12 sedie, la seconda 11, la terza 10, la quarta 9: $12 \cdot 11 \cdot 10 \cdot 9 = \frac{12!}{8!}$. La risposta più insidiosa è $12^4$: permetterebbe a due persone di sedersi sulla stessa sedia. $\frac{12!}{4!}$ divide per le persone invece che per le sedie vuote.

D: Quiz 2021–2025, domanda 4. Un DJ deve scegliere 4 canzoni da un catalogo di 15 da suonare in sequenza. Quante sono le possibili sequenze di tali 4 canzoni?
- $15!$
- $4!$
+ $\frac{15!}{11!}$
- $15^4$
- $\frac{15!}{4!}$
= Conta l'ordine, perché è una sequenza, e una canzone non si ripete: disposizioni semplici, $15 \cdot 14 \cdot 13 \cdot 12 = \frac{15!}{11!}$. La risposta più insidiosa è $15^4$, che permette di suonare due volte la stessa canzone.

D: Appello del 03/02/2026, domanda 4, versione 2. Da una scatola che contiene palline bianche e nere ne vengono estratte, in successione, 9. Quante sono le estrazioni che iniziano con 2 palline bianche?
- $\frac{9!}{7!}$
- $9!$
+ $2^7$
- $7^2$
- $\frac{9!}{2!}$
= Le prime due palline sono fissate, bianche. Le altre 7 possono essere bianche o nere: è una parola di lunghezza 7 su un alfabeto di 2 simboli, $2^7$. La risposta più insidiosa è $7^2$, con base ed esponente scambiati. I fattoriali non c'entrano: le palline dello stesso colore non si distinguono.

D: Quiz 2021–2025, domanda 4. Quanti sono gli anagrammi della parola SCACCO?
- $\frac{6!}{3} = 240$
+ $\frac{6!}{3!} = 120$
- $\binom 63 = 20$
- $3! = 6$
- $6! - 3! = 714$
= La C compare 3 volte, le altre lettere una: $\frac{720}{6} = 120$. La risposta più insidiosa è 240: divide per 3, il numero di C, invece che per $3!$, il numero di modi di scambiarle tra loro.
```

## Fonti

- Le lezioni complete: [D05 · Composizione di funzioni e funzioni inverse](D05_composizione_funzioni_inverse.html), [D06 · Insiemi finiti, principio dei piccioni e inclusione-esclusione](D06_insiemi_finiti_inclusione_esclusione.html), [D07 · Parole, ordinamenti, anagrammi e disposizioni](D07_parole_anagrammi_disposizioni.html), con le domande vere degli appelli, i quiz e gli esercizi.
- A. Mori, *Lezioni di Matematica Discreta*: cap. 2, pp. 23–29; cap. 3, pp. 39–55.
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
