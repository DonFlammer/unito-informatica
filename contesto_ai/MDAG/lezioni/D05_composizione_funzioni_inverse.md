---
corso: MDAG
modulo: MD
lezione: D05
titolo: Composizione di funzioni e funzioni inverse
data: 2026-10-12
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D05
descrizione: >-
  Appunti della lezione D05 di Matematica Discreta (MDAG, parte 1, canali A, B e C): composizione di funzioni,
  proprietà associativa, identità e funzioni costanti, composizione non commutativa, composizione e iniettività o
  suriettività, funzioni inverse, esistenza e unicità dell'inversa di una biezione, inversa di una composizione,
  cancellazione, con tutte le domande d'esame sulla composizione degli appelli 2025–2026.
lede: >-
  Comporre due funzioni vuol dire applicarle una dopo l'altra. Qui impari a farlo senza sbagliare l'ordine, a capire
  quando si può tornare indietro con la funzione inversa, e a risolvere la domanda 3 del quiz, che dal 2025 chiede
  quasi sempre proprio una composizione.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 2, pp. 23–29, esercizi p. 36
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 2 «Funzioni», pp. 23–29, ed esercizi 2.10–2.15;
  diario delle lezioni del canale B 2025/26; quiz degli appelli di Matematica Discreta 2025–2026
appunti_html: appunti/MDAG/D05_composizione_funzioni_inverse.html
genera_html: true
---

## In breve

- **Comporre** due funzioni vuol dire applicarle una dopo l'altra. Si scrive $g \circ f$, e la funzione usata per prima sta **a destra**: prima effe, poi gi.
- Si può comporre solo se il codominio della prima è il dominio della seconda. Per calcolare si parte **da dentro**.
- La composizione è **associativa**: con tre funzioni le parentesi non contano. **Non** è commutativa: scambiando l'ordine, in generale il risultato cambia.
- Composte di funzioni iniettive restano iniettive, composte di suriettive restano suriettive.
- Due funzioni sono **inverse** l'una dell'altra quando, composte nei due ordini, danno l'identità: una disfa quello che fa l'altra.
- Una funzione ha l'inversa **se e solo se è biettiva**, e l'inversa è una sola. Si trova risolvendo $y = f(x)$ rispetto a $x$.
- L'inversa di una composizione si fa al contrario: prima si disfa l'ultima funzione applicata.
- All'esame la **domanda 3 del quiz** è quasi sempre una composizione da calcolare.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di lunedì 12/10/2026 con Andrea Mori. Quando scrivo gli argomenti di questa lezione non sono ancora sul Moodle del canale B: li ho ricostruiti dall'ordine del libro e dal diario dell'anno scorso, in cui la quinta lezione era «composizione di funzioni e sue proprietà, relazioni tra composizione, iniettività e suriettività, funzioni invertibili». Le operazioni (pp. 29–34 del libro) nel diario dell'anno scorso arrivano molto più avanti, con i gruppi: qui non ci sono. Quando il docente pubblica gli argomenti, controllo e aggiorno.

## Una funzione dopo l'altra (pp. 23–24)

Torna alla mensa della lezione D04. Anna, Bruno, Carla e Dario scelgono il primo; poi alla cassa ogni piatto ha il suo prezzo. Sono due funzioni in fila:

- la prima, $f$, va dagli **studenti** ai **piatti**: è la scelta di ognuno;
- la seconda, $g$, va dai **piatti** ai **prezzi**: è il listino della cassa.

| Studente | Piatto scelto | | Piatto | Prezzo |
|---|---|---|---|---|
| Anna | pasta | | pasta | 4 euro |
| Bruno | pasta | | riso | 5 euro |
| Carla | zuppa | | zuppa | 3 euro |
| Dario | riso | | gnocchi | 6 euro |

Quanto paga Anna? Prima guardi che cosa ha scelto, la pasta; poi guardi quanto costa la pasta, 4 euro. Hai usato $f$ e subito dopo $g$. La regola «da ogni studente a quanto paga» è una funzione nuova, dagli studenti ai prezzi: è la **composizione** di $f$ e $g$.

> [!IDEA]
> Comporre due funzioni vuol dire usarle in fila: il risultato della prima diventa l'elemento di partenza della seconda.

La composizione si scrive $g \circ f$ e si legge «gi composto effe» o «gi tondino effe». Per Anna:

$$(g \circ f)(\text{Anna}) = g(f(\text{Anna})) = g(\text{pasta}) = 4$$

Il conto si fa da dentro verso fuori: prima la scelta di Anna, che è la pasta, poi il prezzo della pasta, 4 euro.

::: prova Con le tabelle della mensa, quanto valgono $(g \circ f)(\text{Carla})$ e $(g \circ f)(\text{Dario})$?
Carla ha scelto la zuppa, che costa 3 euro. Dario ha scelto il riso, che costa 5 euro.
:::

### Perché si scrive al contrario

In $g \circ f$ la funzione usata **per prima** è $f$, ma si scrive **per seconda**. Sembra strano, ma viene dal modo in cui si scrive il valore, $g(f(a))$. La funzione che lavora per prima è attaccata alla variabile; quella che lavora dopo la avvolge da fuori. Il libro lo fa notare a p. 24.

> [!TRAPPOLA] $g \circ f$ si legge da destra a sinistra
> La scrittura $g \circ f$ vuol dire: **prima** la funzione di destra, **poi** quella di sinistra. Sbagliare l'ordine è l'errore più comune all'esame: calcolare $f(g(a))$ quando il testo chiede $(g \circ f)(a)$. Un trucco: la funzione più vicina alla variabile è quella che la tocca per prima.

### Quando si può comporre

Alla cassa si può pagare solo un piatto che è nel listino. In generale, $g$ deve accettare tutti i valori di $f$: il **codominio di $f$** deve essere il **dominio di $g$**. Il libro lo chiede esattamente così: i due insiemi devono coincidere.

> [!DEF] 2.13 · Composizione
> Siano $f \colon A \to B$ e $g \colon B \to C$ due funzioni. La **composizione** di $f$ e $g$, denotata $g \circ f$, è la funzione
> $$g \circ f \colon A \to C, \qquad (g \circ f)(a) = g(f(a)) \text{ per ogni } a \in A.$$

**Come si legge.** Si parte dal primo insieme, si arriva nel secondo con la prima funzione, e dal secondo si va nel terzo con l'altra. La composta parte da dove parte $f$ e arriva dove arriva $g$. L'insieme in mezzo, la tappa, sparisce dal risultato.

Il libro la disegna come un viaggio con una tappa: due frecce corte in fila, e sotto una freccia lunga che salta la tappa. La freccia lunga è la composta, e i due percorsi portano nello stesso posto.

$$A \xrightarrow{\;f\;} B \xrightarrow{\;g\;} C$$

> [!ESEMPIO] Composizioni che si possono fare e no
> Prendi tre funzioni $f \colon A \to B$, $g \colon B \to C$ e $h \colon C \to A$.
> - $g \circ f$ si può fare: $f$ arriva in $B$ e $g$ parte da $B$. Va da $A$ a $C$.
> - $f \circ g$ **non** si può fare: $g$ arriva in $C$, ma $f$ parte da $A$.
> - $h \circ g \circ f$ si può fare: da $A$ a $B$, poi a $C$, poi di nuovo ad $A$. È una funzione da $A$ ad $A$.
>
> Il metodo: leggi le funzioni **da destra a sinistra**, come vengono usate, e controlla a ogni passo che l'arrivo di una sia la partenza della successiva. È come controllare le coincidenze dei treni: il treno dopo deve partire dalla stazione dove arriva quello prima.

::: prova Con $f \colon A \to B$ e $k \colon B \to A$, si possono fare $k \circ f$ e $f \circ k$? Da dove a dove vanno?
Sì, tutte e due. $k \circ f$ va da $A$ ad $A$: prima $f$ da $A$ a $B$, poi $k$ da $B$ ad $A$. $f \circ k$ va da $B$ a $B$.
:::

> [!RICORDA]
> - $(g \circ f)(a) = g(f(a))$: **prima** $f$, **poi** $g$. Si calcola da dentro verso fuori.
> - Si compone solo se il codominio della prima funzione è il dominio della seconda. La composta va dal dominio della prima al codominio della seconda.

## Calcolare una composizione con le formule

Con le funzioni sui numeri il conto è lo stesso della mensa, solo che i valori si calcolano con una formula. Prendi due funzioni dagli interi agli interi. La prima raddoppia, $f(n) = 2n$. La seconda aggiunge 1, $g(n) = n + 1$.

### Su un numero

Per calcolare $(g \circ f)(5)$ si parte da dentro:

1. prima $f(5) = 10$;
2. poi $g(10) = 11$.

Quindi $(g \circ f)(5) = 11$. Nell'altro ordine, $(f \circ g)(5)$: prima $g(5) = 6$, poi $f(6) = 12$. Viene un altro numero.

### Con la lettera

Per avere la formula della composta, si fa lo stesso conto con $n$ al posto del numero. Il trucco è **sostituire**: al posto della variabile di $g$ si mette tutta la formula di $f$.

1. $(g \circ f)(n) = g(f(n)) = g(2n)$.
2. $g$ aggiunge 1 a quello che riceve, quindi $g(2n) = 2n + 1$.

Nell'altro ordine: $(f \circ g)(n) = f(n + 1) = 2(n + 1) = 2n + 2$.

> [!METODO] Calcolare $g \circ f$ con le formule
> 1. Scrivi $(g \circ f)(n) = g(f(n))$ e metti al posto di $f(n)$ la sua formula.
> 2. Nella formula di $g$, sostituisci **ogni** $n$ con quella formula, tra parentesi.
> 3. Svolgi i conti.
> 4. Controlla su un numero: calcola la composta a mano su 0 o su 1 e confronta con la formula trovata.

Il passo 4 costa pochi secondi e scova quasi tutti gli errori di segno.

> [!ESEMPIO] Una composizione con i segni
> $f(n) = 2n + 1$ e $g(n) = 3 - n$, dagli interi agli interi (appello del 04/02/2025, versione 1).
> - $(f \circ g)(n) = f(3 - n) = 2(3 - n) + 1 = 6 - 2n + 1 = 7 - 2n$.
> - $(g \circ f)(n) = g(2n + 1) = 3 - (2n + 1) = 3 - 2n - 1 = 2 - 2n$.
>
> Controllo con $n = 0$: $g(0) = 3$ e $f(3) = 7$, come $7 - 2 \cdot 0$. Poi $f(0) = 1$ e $g(1) = 2$, come $2 - 2 \cdot 0$.

La parentesi del secondo conto è il punto delicato: $3 - (2n + 1)$ cambia il segno di **tutti e due** i pezzi.

### Su un valore scritto con la lettera

A volte il testo chiede la composta calcolata non su un numero ma su un'espressione con la lettera, come $-x$ oppure $2x$. Si fa allo stesso modo: si parte da dentro e si sostituisce.

Prendi le due funzioni dell'appello del 03/02/2026, $f(n) = 3n - 1$ e $g(n) = -n + 4$. Il valore $(g \circ f)(-x)$ si calcola così:

1. $f(-x) = 3 \cdot (-x) - 1 = -3x - 1$;
2. $g(-3x - 1) = -(-3x - 1) + 4 = 3x + 1 + 4 = 3x + 5$.

### Con tre funzioni

Con tre funzioni si va avanti allo stesso modo, sempre da destra a sinistra: la funzione scritta più a destra si usa per prima. Anche la stessa funzione può comparire due volte. Prendi $f(n) = 3n - 1$ e $g(n) = 2 - n$. Il valore $(g \circ f \circ f)(0)$ si calcola in tre passi:

1. $f(0) = -1$;
2. $f(-1) = -4$;
3. $g(-4) = 2 - (-4) = 6$.

::: prova Con $f(n) = 2n$ e $g(n) = n + 1$, calcola $(f \circ f)(n)$, $(g \circ g)(n)$ e $(g \circ f \circ g)(0)$.
$(f \circ f)(n) = f(2n) = 4n$. $(g \circ g)(n) = g(n + 1) = n + 2$. Per l'ultima: $g(0) = 1$, $f(1) = 2$, $g(2) = 3$.
:::

> [!RICORDA]
> - Per la formula della composta si sostituisce: al posto della variabile della funzione esterna va **tutta** la formula di quella interna, tra parentesi.
> - Si controlla sempre il risultato su un numero, calcolando a mano.

## Le regole della composizione (pp. 24–25)

Le funzioni si possono comporre come i numeri si possono moltiplicare. Alcune regole delle moltiplicazioni valgono anche qui, altre no.

### Le parentesi non contano

Con tre funzioni in fila si può comporre in due modi. Puoi unire prima le prime due e poi aggiungere la terza; oppure unire prima le ultime due e poi metterci davanti la prima. Il risultato è lo stesso, perché in tutti e due i casi ogni elemento passa per le tre funzioni nello stesso ordine. È come fare tre tappe di un viaggio: non conta come le raggruppi, conta l'ordine.

> [!PROP] 2.14 · Proprietà associativa
> Siano $f \colon A \to B$, $g \colon B \to C$ e $h \colon C \to D$ tre funzioni. Allora $h \circ (g \circ f) = (h \circ g) \circ f$.

**Come si legge.** Le parentesi si possono spostare. Per questo si scrive semplicemente $h \circ g \circ f$, senza parentesi.

> [!DIM] della Proposizione 2.14 (p. 24)
> Si calcolano le due funzioni sullo stesso elemento $a$ di $A$, seguendo la definizione.
> - A sinistra: $(h \circ (g \circ f))(a) = h((g \circ f)(a)) = h(g(f(a)))$.
> - A destra: $((h \circ g) \circ f)(a) = (h \circ g)(f(a)) = h(g(f(a)))$.
>
> I due valori sono uguali per ogni $a$; le funzioni hanno anche lo stesso dominio $A$ e lo stesso codominio $D$, quindi sono la stessa funzione.

### L'identità non cambia niente

L'identità lascia ogni elemento dov'è. Se la usi prima o dopo un'altra funzione, è come non averla usata: è come il numero 1 nelle moltiplicazioni. Il libro dice che l'identità è **neutra** per la composizione: per ogni $f \colon A \to B$,

$$f \circ \operatorname{id}_A = f \qquad \text{e} \qquad \operatorname{id}_B \circ f = f.$$

Attenzione agli indici: a destra di $f$ va l'identità del **dominio**, a sinistra quella del **codominio**, altrimenti la composizione non si può fare.

### Le costanti vincono

Una funzione costante manda tutto nello stesso elemento. Se la usi **per ultima**, il risultato è costante, qualunque cosa sia successa prima. Se la usi **per prima**, tutti gli elementi arrivano nello stesso punto, e la funzione dopo dà sempre lo stesso valore. In tutti e due i casi la composta è costante.

Alla mensa: se tutti scelgono la pasta, alla cassa tutti pagano 4 €. La scelta è costante, e lo è anche il prezzo.

### L'ordine conta

Con i numeri $2 \cdot 3 = 3 \cdot 2$. Con le funzioni no: $g \circ f$ e $f \circ g$ sono quasi sempre diverse. L'hai già visto con $f(n) = 2n$ e $g(n) = n + 1$:

- $(g \circ f)(n) = 2n + 1$: prima raddoppi, poi aggiungi 1;
- $(f \circ g)(n) = 2n + 2$: prima aggiungi 1, poi raddoppi.

Succede anche nella vita: mettere le calze e poi le scarpe non è come mettere le scarpe e poi le calze. Il libro lo dice così: la composizione di funzioni **non è commutativa** (Nota 2.15). Il suo esempio usa il coseno: $\cos(x) + 1$ e $\cos(x + 1)$ sono funzioni diverse.

> [!TRAPPOLA] A volte $f \circ g$ non esiste nemmeno
> Se la prima funzione va da $A$ a $B$ e la seconda da $B$ a $C$, la composizione nell'ordine giusto si fa sempre. Quella nell'ordine contrario si fa solo se il terzo insieme è proprio il primo. Anche quando si possono fare tutte e due, possono andare tra insiemi diversi. Con la mensa e la cassa, per esempio, l'ordine contrario non ha senso: il listino non sceglie studenti.

::: prova Con $f(n) = n^2$ e $g(n) = n + 3$ dagli interi agli interi, calcola $(g \circ f)(n)$ e $(f \circ g)(n)$. Sono uguali?
$(g \circ f)(n) = n^2 + 3$; $(f \circ g)(n) = (n + 3)^2 = n^2 + 6n + 9$. Sono diverse: in 1 la prima vale 4, la seconda 16.
:::

> [!RICORDA]
> - Associativa: con tre o più funzioni le parentesi non contano, conta solo l'ordine.
> - L'identità è neutra; una costante, prima o dopo, rende costante la composta.
> - **Non** commutativa: $g \circ f$ e $f \circ g$ sono in generale diverse.

## Composizione e funzioni iniettive o suriettive (pp. 25–26)

Che cosa succede alle proprietà della lezione D04 quando componi? Pensa a due uffici in fila che smistano pacchi: il primo li mette in certi scaffali, il secondo prende ogni scaffale e lo manda in un magazzino.

- Se nessuno dei due uffici **mescola** pacchi diversi nello stesso scaffale, alla fine pacchi diversi restano separati. È l'**iniettività**.
- Se tutti e due gli uffici **riempiono** tutti i loro scaffali, alla fine ogni scaffale dell'ultimo ufficio riceve qualcosa. È la **suriettività**.

> [!PROP] 2.16
> Siano $f \colon A \to B$ e $g \colon B \to C$ due funzioni. Allora:
> 1. se $f$ e $g$ sono iniettive, anche $g \circ f$ è iniettiva;
> 2. se $f$ e $g$ sono suriettive, anche $g \circ f$ è suriettiva.
>
> In particolare, se $f$ e $g$ sono biettive anche $g \circ f$ è biettiva.

**Come si legge.** Le due proprietà passano dalle funzioni alla composta. La biettività, che è tutte e due insieme, passa anche lei.

> [!DIM] della Proposizione 2.16 (p. 25)
> 1. Prendi due elementi diversi $a_1$ e $a_2$ di $A$. $f$ è iniettiva, quindi $f(a_1)$ e $f(a_2)$ sono diversi. Anche $g$ è iniettiva, quindi $g(f(a_1))$ e $g(f(a_2))$ sono diversi. Ma questi sono i valori di $g \circ f$ in $a_1$ e $a_2$: la composta è iniettiva.
> 2. Prendi un elemento $c$ di $C$. $g$ è suriettiva, quindi c'è un $b$ in $B$ con $g(b) = c$. Anche $f$ è suriettiva, quindi c'è un $a$ in $A$ con $f(a) = b$. Allora $(g \circ f)(a) = g(f(a)) = g(b) = c$: ogni $c$ è raggiunto, la composta è suriettiva.

### Al contrario: che cosa dice la composta sulle funzioni

Il libro guarda anche la strada inversa (Proposizione 2.17). Se la composta ha una proprietà, che cosa si può dire delle due funzioni da cui viene?

- Se $g \circ f$ è **iniettiva**, allora la **prima**, $f$, è iniettiva. Se $f$ mescolasse due elementi, la composta li mescolerebbe anche lei: dopo, $g$ non li può più separare.
- Se $g \circ f$ è **suriettiva**, allora la **seconda**, $g$, è suriettiva. Tutto quello che la composta raggiunge, lo raggiunge con l'ultimo passo, che è $g$.

> [!PROP] 2.17 e Corollario 2.18
> Siano $f \colon A \to B$ e $g \colon B \to C$ due funzioni. Allora:
> 1. se $g \circ f$ è iniettiva, allora $f$ è iniettiva;
> 2. se $g \circ f$ è suriettiva, allora $g$ è suriettiva.
>
> In particolare, se $g \circ f$ è biettiva, allora $f$ è iniettiva e $g$ è suriettiva.

**Come si legge.** L'iniettività della composta si scarica sulla funzione **di destra**, quella usata per prima. La suriettività si scarica su quella **di sinistra**, usata per ultima.

> [!DIM] della Proposizione 2.17 (p. 26)
> 1. Se $f$ non fosse iniettiva, ci sarebbero $a_1 \neq a_2$ con $f(a_1) = f(a_2)$. Applicando $g$ a tutti e due: $g(f(a_1)) = g(f(a_2))$, cioè la composta prende lo stesso valore in due elementi diversi. Non sarebbe iniettiva.
> 2. Se $g \circ f$ è suriettiva, ogni $c$ di $C$ è $(g \circ f)(a)$ per qualche $a$. Chiamato $b = f(a)$, si ha $g(b) = c$: ogni $c$ è raggiunto anche da $g$.
>
> Il corollario mette insieme le due frasi: biettiva vuol dire iniettiva e suriettiva.

> [!TRAPPOLA] Non vale per l'altra funzione
> Una composta biettiva **non** garantisce che la prima funzione sia suriettiva, né che la seconda sia iniettiva. Un esempio piccolo, con un solo studente e due piatti. Lo studente sceglie la pasta; alla cassa pasta e riso costano tutti e due 4 euro. La composta va dall'unico studente all'unico prezzo, ed è biettiva. Ma il riso non lo sceglie nessuno, quindi la scelta non è suriettiva; e i due piatti hanno lo stesso prezzo, quindi il listino non è iniettivo.

::: prova Vero o falso: se $g \circ f$ è iniettiva, allora anche $g$ è iniettiva.
Falso. Nell'esempio della trappola la composta è iniettiva, perché parte da un solo studente, ma il listino dà lo stesso prezzo a due piatti. È la prima funzione che deve essere iniettiva, non la seconda.
:::

> [!RICORDA]
> - Iniettive composte danno un'iniettiva; suriettive composte danno una suriettiva; biettive composte danno una biettiva.
> - Composta iniettiva: la prima funzione usata è iniettiva. Composta suriettiva: l'ultima usata è suriettiva.

## Tornare indietro: le funzioni inverse (pp. 26–28)

Alla mensa ognuno ha una tessera con un numero: Anna ha il 17, Bruno il 23, Carla il 31, Dario il 42. La funzione «da ogni studente al numero della sua tessera» è biettiva: ogni studente ha il suo numero, e ogni numero è di uno studente solo.

Al cassiere arriva una tessera, la 31: di chi è? È di Carla. Esiste una regola che **torna indietro**, dal numero allo studente. Le due funzioni si disfano a vicenda:

- da Carla vai al 31, e dal 31 torni a Carla;
- dal 31 vai a Carla, e da Carla torni al 31.

> [!IDEA]
> L'inversa di una funzione è la funzione che disfa quello che fa l'altra: se le usi una dopo l'altra, in un ordine o nell'altro, torni al punto di partenza.

«Tornare al punto di partenza» vuol dire che la composta è l'**identità**. Il libro usa proprio questo come definizione.

> [!DEF] 2.19 · Funzioni inverse l'una dell'altra
> Siano $f \colon A \to B$ e $g \colon B \to A$ due funzioni. Diciamo che $f$ e $g$ sono **funzioni inverse l'una dell'altra** se
> $$g \circ f = \operatorname{id}_A \qquad \text{e} \qquad f \circ g = \operatorname{id}_B.$$

**Come si legge.**

- La prima uguaglianza: parti da uno studente, vai alla tessera, torni indietro, e ti ritrovi con lo stesso studente.
- La seconda: parti da una tessera, vai allo studente, torni alla tessera, e ti ritrovi con lo stesso numero.
- Servono **tutte e due** le uguaglianze.

### Perché servono tutte e due

Può succedere che una sola delle due uguaglianze sia vera. Il libro dà due esempi (p. 27).

> [!ESEMPIO] Metà inversa: una sola uguaglianza vera (p. 27)
> **Con le coppie.** Fissa un elemento $\beta$ in $B$ e prendi la funzione $s$ da $A$ ad $A \times B$ che mette $a$ nella coppia $(a, \beta)$. Poi usa la prima proiezione $p_1$, che dalla coppia tiene il primo pezzo.
> - $p_1 \circ s = \operatorname{id}_A$: da $a$ vai a $(a, \beta)$ e torni ad $a$.
> - $s \circ p_1$ **non** è l'identità di $A \times B$: la coppia $(a, b)$ va in $a$ e poi in $(a, \beta)$, che è diversa se $b \neq \beta$.
>
> Il libro qui scrive $s \circ p_1 \neq \operatorname{id}_B$: l'identità giusta è quella di $A \times B$, il dominio di $p_1$.
>
> **Con i cassetti.** $X = \{a, b, c, d\}$ è diviso nei cassetti $\{a, b\}$ e $\{c, d\}$. La funzione quoziente $q$ manda ogni elemento nel suo cassetto. La funzione $s$ prende da ogni cassetto un elemento: $s(\{a, b\}) = a$ e $s(\{c, d\}) = c$.
> - $q \circ s$ è l'identità dei cassetti: dal cassetto prendi un elemento, e quello sta nel suo cassetto.
> - $s \circ q$ **non** è l'identità di $X$: $b$ va nel cassetto $\{a, b\}$ e poi in $a$.

C'è un motivo preciso per cui una sola uguaglianza non basta. Se due funzioni sono inverse, le due composte sono identità, che sono biettive. Allora per il Corollario 2.18 ciascuna delle due funzioni è iniettiva, guardando una composta, e suriettiva, guardando l'altra: deve essere **biettiva**. Negli esempi qui sopra $s$ non è suriettiva, quindi non può avere un'inversa vera.

### Chi ha un'inversa: esattamente le biezioni

Il conto appena fatto dice: se una funzione ha un'inversa, è biettiva. Il libro dimostra anche il contrario: ogni funzione biettiva ha un'inversa, e una sola.

Come si costruisce? Con la tessera: prendi un numero e cerchi lo studente che ce l'ha. In generale, se $f$ è biettiva, ogni $b$ del codominio ha **esattamente un** elemento nella controimmagine (Proposizione 2.11 della lezione D04). L'inversa manda $b$ proprio in quell'elemento:

$$g(b) = a \qquad \text{quando} \qquad f^{-1}(b) = \{a\}.$$

> [!TEOREMA] 2.20
> Sia $f \colon A \to B$ una funzione biettiva. Allora esiste ed è unica una funzione $g \colon B \to A$ tale che $f$ e $g$ sono inverse l'una dell'altra.

**Come si legge.** Una biezione ha un'inversa, e non ce ne sono due diverse. Messo insieme a quello di prima: una funzione ha l'inversa **se e solo se** è biettiva.

> [!DIM] del Teorema 2.20 (pp. 27–28)
> **Esiste.** È la $g$ costruita sopra. Per ogni $a$ in $A$, chiamato $b = f(a)$, la controimmagine di $b$ è $\{a\}$, quindi $g(f(a)) = g(b) = a$. Per ogni $b$ in $B$, chiamato $a$ l'unico elemento della sua controimmagine, $f(g(b)) = f(a) = b$. Le due composte sono le identità.
>
> **È unica.** Supponi che anche $h \colon B \to A$ sia un'inversa di $f$. Calcola $g \circ f \circ h$ in due modi, spostando le parentesi.
> 1. $(g \circ f) \circ h = \operatorname{id}_A \circ h = h$.
> 2. $g \circ (f \circ h) = g \circ \operatorname{id}_B = g$.
>
> Per la proprietà associativa i due risultati sono uguali, quindi $h = g$.

> [!DEF] 2.21 · Funzione inversa
> Sia $f$ una funzione biettiva. L'unica funzione $g \colon B \to A$ tale che $g \circ f = \operatorname{id}_A$ e $f \circ g = \operatorname{id}_B$ è detta **la funzione inversa** di $f$, e si denota $f^{-1}$.

**Come si legge.** $f^{-1}$ si legge «effe alla meno uno», o «inversa di effe». È la funzione che fa il viaggio al contrario: $f^{-1}(b) = a$ esattamente quando $f(a) = b$.

> [!TRAPPOLA] Lo stesso simbolo per due cose (Nota 2.22)
> Nella lezione D04 $f^{-1}(b)$ era la **controimmagine**: un **insieme**, che esiste per ogni funzione. Qui $f^{-1}(b)$ è il valore della **funzione inversa**: un **elemento**, che esiste solo se $f$ è biettiva. Quando $f$ è biettiva le due cose si somigliano: la controimmagine è $\{a\}$ e l'inversa dà $a$. Quale delle due si intende si capisce dal contesto.

L'inversa dell'inversa è la funzione di partenza: $(f^{-1})^{-1} = f$ (Nota 2.23). Nella definizione le due funzioni hanno lo stesso ruolo: se la seconda disfa la prima, anche la prima disfa la seconda.

::: prova Da $\{1, 2, 3\}$ a $\{a, b, c\}$ la funzione $f$ è $f(1) = c$, $f(2) = a$, $f(3) = b$. Scrivi $f^{-1}$. E la funzione $h(1) = a$, $h(2) = a$, $h(3) = b$ ha un'inversa?
$f^{-1}(a) = 2$, $f^{-1}(b) = 3$, $f^{-1}(c) = 1$: si leggono le frecce al contrario. $h$ non ha inversa: non è biettiva, perché $a$ arriva da due elementi e $c$ da nessuno.
:::

> [!RICORDA]
> - Due funzioni sono inverse quando le due composte, nei due ordini, sono **tutte e due** identità.
> - Una funzione ha l'inversa se e solo se è biettiva, e l'inversa è unica (Teorema 2.20).
> - $f^{-1}(b)$ è un insieme se parli di controimmagine, un elemento se parli di funzione inversa.

## Trovare l'inversa in pratica

Con una formula, l'inversa si trova **risolvendo un'equazione**. L'inversa deve dire da quale $x$ arriva un valore $y$. Quindi si scrive $y = f(x)$ e si ricava $x$.

> [!METODO] Trovare l'inversa di una formula
> 1. Controlla che $f$ sia biettiva, con il dominio e il codominio dati. Se non lo è, l'inversa non esiste.
> 2. Scrivi $y = f(x)$.
> 3. Ricava $x$: viene una formula in $y$. Quella è $f^{-1}(y)$.
> 4. **Controlla** componendo: $f^{-1}(f(x))$ deve dare $x$.

> [!ESEMPIO] L'inversa di $f(x) = 3x - 2$ dai reali ai reali
> **Passo 1.** È biettiva: ogni retta non orizzontale prende ogni valore una volta sola.
>
> **Passo 2 e 3.** Da $y = 3x - 2$ porti il 2 a sinistra: $y + 2 = 3x$. Dividi per 3: $x = \frac{y + 2}{3}$. Quindi
> $$f^{-1}(y) = \frac{y + 2}{3} = \frac{1}{3}y + \frac{2}{3}.$$
>
> **Passo 4.** $f^{-1}(f(x)) = \frac{(3x - 2) + 2}{3} = \frac{3x}{3} = x$.
>
> Era una domanda vera di un appello degli anni 2021–2025, con la risposta scritta con la lettera $x$: $g(x) = (1/3)x + (2/3)$.

Il nome della lettera non conta: $f^{-1}(y) = \frac{y + 2}{3}$ e $f^{-1}(x) = \frac{x + 2}{3}$ sono la stessa funzione.

> [!TRAPPOLA] Gli interi non sono i reali
> La stessa formula può essere biettiva sui reali e non sugli interi. $f(n) = 3n - 2$ dagli interi agli interi **non** è suriettiva: 0 dovrebbe venire da $n = \frac 23$, che non è intero. Quindi non ha inversa. Prima del conto, guarda sempre dominio e codominio.

Nella lezione D04, nell'esercizio 2.8 del libro, hai reso biettive due funzioni cambiando dominio e codominio, e hai trovato chi arriva in ogni valore. Quelle formule sono proprio le inverse. Per esempio, la funzione che triplica, presa con i multipli di 3 come codominio, ha come inversa la divisione per 3.

::: prova Trova l'inversa di $f(x) = 2x + 5$ dai reali ai reali, e controllala su $x = 1$.
$y = 2x + 5$ dà $x = \frac{y - 5}{2}$, cioè $f^{-1}(y) = \frac 12 y - \frac 52$. Controllo: $f(1) = 7$ e $f^{-1}(7) = \frac{7 - 5}{2} = 1$.
:::

> [!RICORDA]
> - L'inversa di una formula si trova scrivendo $y = f(x)$ e ricavando $x$.
> - Prima si controlla che la funzione sia biettiva sul dominio e codominio dati; dopo si controlla componendo.

## L'inversa di una composizione e la cancellazione (pp. 28–29)

Al mattino metti prima le calze e poi le scarpe. La sera, per disfare, togli prima le **scarpe** e poi le **calze**: l'ordine si capovolge. Lo stesso vale per le funzioni: per disfare una composta si disfa per prima l'ultima funzione usata.

> [!PROP] 2.24
> Siano $f \colon A \to B$ e $g \colon B \to C$ due funzioni biettive. Allora
> $$(g \circ f)^{-1} = f^{-1} \circ g^{-1}.$$

**Come si legge.** L'inversa della composta è la composta delle inverse, **in ordine contrario**: si usa prima $g^{-1}$, poi $f^{-1}$. Per la Proposizione 2.16 la composta $g \circ f$ è biettiva, quindi l'inversa c'è.

> [!DIM] della Proposizione 2.24 (p. 28)
> Basta controllare che $f^{-1} \circ g^{-1}$ disfi $g \circ f$ nei due ordini, spostando le parentesi con la proprietà associativa.
> 1. $(g \circ f) \circ (f^{-1} \circ g^{-1}) = g \circ (f \circ f^{-1}) \circ g^{-1} = g \circ \operatorname{id}_B \circ g^{-1} = g \circ g^{-1} = \operatorname{id}_C$.
> 2. $(f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ (g^{-1} \circ g) \circ f = f^{-1} \circ \operatorname{id}_B \circ f = f^{-1} \circ f = \operatorname{id}_A$.

> [!ESEMPIO] Le calze e le scarpe con i numeri
> $f(x) = 2x + 1$ e $g(x) = 3x$, dai reali ai reali. La composta è $(g \circ f)(x) = 3(2x + 1) = 6x + 3$.
> - Le inverse: $f^{-1}(y) = \frac{y - 1}{2}$, che toglie 1 e divide per 2; $g^{-1}(y) = \frac y3$, che divide per 3.
> - Ordine contrario: $(f^{-1} \circ g^{-1})(y) = f^{-1}\!\left(\frac y3\right) = \frac{\frac y3 - 1}{2} = \frac y6 - \frac 12$.
> - Controllo diretto: da $y = 6x + 3$ viene $x = \frac{y - 3}{6} = \frac y6 - \frac 12$. È la stessa formula.
>
> Nell'ordine sbagliato, $g^{-1} \circ f^{-1}$ darebbe $\frac{y - 1}{6}$: non è l'inversa.

### Semplificare una funzione biettiva

Con i numeri, da $2 \cdot a = 2 \cdot b$ si ricava $a = b$: si semplifica il 2, perché si può dividere per 2. Con le funzioni succede lo stesso, ma solo con una funzione **biettiva**, perché si «divide» usando la sua inversa.

> [!PROP] 2.25 · Cancellazione
> Sia $f \colon A \to B$ una funzione biettiva, e siano $g_1, g_2 \colon B \to Y$ e $h_1, h_2 \colon X \to A$ funzioni.
> 1. Se $g_1 \circ f = g_2 \circ f$, allora $g_1 = g_2$.
> 2. Se $f \circ h_1 = f \circ h_2$, allora $h_1 = h_2$.

**Come si legge.** Una $f$ biettiva si può togliere da tutte e due le parti, sia quando sta a destra sia quando sta a sinistra.

> [!DIM] della Proposizione 2.25 (p. 29)
> 1. Componi a destra con $f^{-1}$ tutte e due le parti: $g_1 = g_1 \circ f \circ f^{-1} = g_2 \circ f \circ f^{-1} = g_2$, perché $f \circ f^{-1} = \operatorname{id}_B$.
> 2. Componi a sinistra con $f^{-1}$: $h_1 = f^{-1} \circ f \circ h_1 = f^{-1} \circ f \circ h_2 = h_2$, perché $f^{-1} \circ f = \operatorname{id}_A$.
>
> Nella seconda riga della dimostrazione il libro scrive $\operatorname{id}_B \circ h_1$: l'identità giusta è quella di $A$, dove arrivano $h_1$ e $h_2$.

Senza la biettività la cancellazione può fallire. Se la funzione è costante, ogni composta fatta dopo di lei è costante, e funzioni diverse possono dare la stessa composta. L'esercizio 2.12 del libro chiede di costruire un esempio.

::: prova Con $f(x) = x - 4$ e $g(x) = 5x$ dai reali ai reali, quanto vale $(g \circ f)^{-1}(10)$?
L'inversa si fa al contrario: prima $g^{-1}(10) = 2$, poi $f^{-1}(2) = 2 + 4 = 6$. Controllo: $f(6) = 2$ e $g(2) = 10$.
:::

> [!RICORDA]
> - $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$: come calze e scarpe, si disfa nell'ordine contrario.
> - Una funzione biettiva si può cancellare da tutte e due le parti di un'uguaglianza tra composte.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $g \circ f$ | «gi composto effe» | prima $f$, poi $g$ | $f(n) = 2n$, $g(n) = n + 1$: $(g \circ f)(n) = 2n + 1$ |
| $(g \circ f)(a)$ | «gi composto effe di a» | il valore $g(f(a))$ | $(g \circ f)(5) = 11$ |
| $h \circ g \circ f$ | «acca composto gi composto effe» | prima $f$, poi $g$, poi $h$ | |
| $\operatorname{id}_A$ | «identità su $A$» | la funzione che lascia tutto com'è; neutra per la composizione | $f \circ \operatorname{id}_A = f$ |
| $f^{-1}$ | «inversa di effe» | la funzione che disfa $f$, solo se $f$ è biettiva | $f(x) = 3x - 2$, $f^{-1}(y) = \frac{y + 2}{3}$ |
| $f^{-1}(b)$ | «effe alla meno uno di bi» | un elemento (inversa) o un insieme (controimmagine) | |
| $(g \circ f)^{-1}$ | «inversa di gi composto effe» | è $f^{-1} \circ g^{-1}$ | |
| $A \xrightarrow{f} B$ | «effe da A a B» | la freccia della funzione $f$ | |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 12/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26 dicono così.

- **10 domande a risposta multipla**, ognuna con 5 risposte e una sola giusta. Una risposta giusta vale 1 punto; una sbagliata o vuota vale 0.
- **2 problemi** a risposta aperta, divisi in più domande con il punteggio scritto accanto.
- **Sbarramento.** Con meno di 6 punti nel quiz la prova non è superata, e i problemi non vengono corretti.
- **Sufficienza:** almeno 18 punti in tutto. **Durata:** 2 ore.
- **Materiale ammesso:** libro di testo e appunti del corso, e una calcolatrice non programmabile.

Gli appelli 2026/27 sono martedì 19/01/2027 e mercoledì 03/02/2027 alle 14:00. Dettagli nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa serve di questa lezione**

1. **Domanda 3 del quiz.** Dal febbraio 2025 al settembre 2026 la domanda 3 di quasi tutti gli appelli è una composizione: calcolare una formula, un valore, oppure dire quale composizione si può fare. Ho trovato sette modelli diversi, tutti qui sotto. È un punto quasi regalato, se non sbagli l'ordine.
2. **Funzione inversa.** In alcuni quiz degli anni 2021–2025 si chiedeva l'inversa di una retta, come $3x - 2$.
3. **Permutazioni.** Fra qualche settimana le permutazioni saranno funzioni biettive da un insieme in sé, e si comporranno e invertiranno di continuo: in ogni appello c'è un problema su di loro. Le regole di questa lezione servono tutte là.

### Una domanda vera, letta insieme

**Appello del 10/09/2026, domanda 3, versione 1.** Il testo: «Siano $f, g \colon \Z \to \Z$ le funzioni definite da $f(n) = 3n - 1$ e $g(n) = 2 - n$. Allora: 1. $g \circ f \circ f(0) = 6$; 2. $g \circ f \circ g(0) = -5$; 3. $g \circ g \circ f(0) = 1$; 4. $f \circ f \circ g(0) = 7$; 5. $f \circ g \circ f(0) = 4$».

**In pratica chiede:** quale di questi cinque valori è calcolato giusto? Ognuno è una catena di tre funzioni applicate a 0, da leggere da destra a sinistra.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: i valori che servono.** Conviene preparare una tabellina: $f(0) = -1$, $g(0) = 2$, poi i valori sui numeri che escono man mano.
>
> **Passo 2: una catena alla volta, da destra.**
> - Frase 1: $f(0) = -1$, $f(-1) = -4$, $g(-4) = 2 + 4 = 6$. Viene 6: **vera**.
> - Frase 2: $g(0) = 2$, $f(2) = 5$, $g(5) = -3$. Viene $-3$, non $-5$.
> - Frase 3: $f(0) = -1$, $g(-1) = 3$, $g(3) = -1$. Viene $-1$, non 1.
> - Frase 4: $g(0) = 2$, $f(2) = 5$, $f(5) = 14$. Viene 14, non 7.
> - Frase 5: $f(0) = -1$, $g(-1) = 3$, $f(3) = 8$. Viene 8, non 4.
>
> **Passo 3: la risposta.** Solo la frase 1 torna. **La risposta è la 1.** Chi legge le catene da sinistra a destra trova altri numeri: è proprio la trappola della domanda.

### Gli altri modelli della domanda 3

Tutte le risposte giuste qui sotto le ho ricontrollate con un programma.

> [!ESAME] Composizione con le formule: appelli del 04/02/2025 e del 06/06/2025
> - 04/02/2025, versione 1: $f(n) = 2n + 1$, $g(n) = 3 - n$. Giusta: $(f \circ g)(n) = 7 - 2n$. Le trappole: $5 - 2n$ (segno sbagliato nella parentesi) e $(g \circ f)(n) = 4 - n$.
> - 04/02/2025, versione 2: $f(n) = n + 3$, $g(n) = 1 - 3n$. Giusta: $(g \circ f)(n) = -8 - 3n$, perché $1 - 3(n + 3) = 1 - 3n - 9$.
> - 06/06/2025, versione 1: $f(n) = 2n + 3$, $g(n) = 3n - 2$. Giusta: $(g \circ f)(n) = 3(2n + 3) - 2 = 6n + 7$. La trappola: $6n + 3$, che si ottiene sbagliando l'ordine dei conti.
> - 06/06/2025, versione 4: $f(n) = -2n + 1$, $g(n) = n + 3$. Giusta: $(f \circ g)(n) = -2(n + 3) + 1 = -2n - 5$.

> [!ESAME] Composizione su $-x$, $2x$, $x \pm 1$: appello del 03/02/2026
> Versione 1: $f(n) = 3n - 1$ e $g(n) = -n + 4$. Giusta: $(g \circ f)(-x) = 3x + 5$, il conto svolto sopra. Le altre quattro risposte avevano i valori sbagliati:
>
> | Risposta | Valore scritto | Valore vero |
> |---|---|---|
> | $f \circ g(-x)$ | $3x - 5$ | $3x + 11$ |
> | $f \circ g(x + 1)$ | $-3x + 2$ | $8 - 3x$ |
> | $f \circ g(x - 1)$ | $-x + 14$ | $14 - 3x$ |
> | $g \circ f(2x)$ | $6x + 5$ | $5 - 6x$ |
>
> Nella versione 2, con $f(n) = -2n + 1$ e $g(n) = n + 4$, la giusta era $f \circ g(x + 1) = -2x - 9$.

> [!ESAME] Tre funzioni: appello del 06/06/2026
> $f(x) = 3x$, $g(x) = -x - 1$, $h(x) = x + 2$. Giusta: $(g \circ f \circ h)(x) = -3x - 7$. Si parte da $h$: $x + 2$; poi $f$: $3x + 6$; poi $g$: $-(3x + 6) - 1 = -3x - 7$. Le trappole erano tutte della forma $-3x + \text{qualcosa}$: cambiare l'ordine cambia solo il numero finale, quindi bisogna fare i conti per bene.

> [!ESAME] Trovare una funzione dalla composta: appello del 07/07/2025
> Il testo: «Sia $f(x) = 3x - 2$ e $g(x)$ tale che $(g \circ f)(x) = 6x - 7$. Allora $g(x)$ è…». Giusta: $g(x) = 2x - 3$.
>
> Il modo più veloce è **provare le risposte**: con $g(x) = 2x - 3$ viene $g(3x - 2) = 6x - 4 - 3 = 6x - 7$. Si può anche ragionare così: $6x - 7 = 2 \cdot (3x - 2) - 3$, quindi $g$ raddoppia e toglie 3.

> [!ESAME] Quale composizione non si può fare: appello del 13/01/2026
> Il testo: «Supponiamo di avere funzioni $f \colon A \to B$, $g \colon B \to C$, $h \colon C \to A$, $k \colon B \to A$. Quale delle seguenti composizioni NON è definita? 1. $h \circ g \circ f \circ h$; 2. $k \circ f \circ k \circ f$; 3. $h \circ g \circ f \circ k$; 4. $k \circ f \circ h \circ g$; 5. $f \circ h \circ f \circ h$».
>
> Giusta: la 5. Si legge da destra. La $h$ più a destra arriva in $A$; poi $f$ va da $A$ a $B$; poi la seconda $h$ dovrebbe partire da $B$, ma parte da $C$. Le altre quattro si possono fare. Nella 3, per esempio, il viaggio è: $B$, $A$, $B$, $C$, $A$.

> [!ESAME] La funzione inversa: un appello degli anni 2021–2025
> Il testo: «Sia $f \colon \R \to \R$ la funzione $f(x) = 2x + 5$. La funzione inversa è…». Giusta: $g(x) = \frac 12 x - \frac 52$. La trappola: $\frac 12 x + \frac 52$, con il segno sbagliato. Nelle altre versioni c'erano le funzioni $3x + 1$ e $2x - 4$; le inverse sono $\frac 13 x - \frac 13$ e $\frac 12 x + 2$.

> [!METODO] La domanda 3 sulla composizione
> 1. Leggi ogni catena **da destra a sinistra**: la funzione più vicina alla variabile si usa per prima.
> 2. Se c'è un valore, come $f \circ g(0)$, calcola un passo alla volta e scrivi ogni numero. Tieni una tabellina dei valori già calcolati.
> 3. Se c'è una formula, sostituisci con le parentesi e poi controlla su $x = 0$.
> 4. Se chiede quale composizione «non è definita», controlla da destra a sinistra che l'arrivo di ogni funzione sia la partenza della successiva.
> 5. Se chiede una funzione $g$ conoscendo $g \circ f$, prova le cinque risposte: è più veloce che ricavarla.

**Errori da evitare**

- Calcolare $f(g(a))$ quando il testo chiede $(g \circ f)(a)$.
- Dimenticare la parentesi quando si sostituisce: $3 - (2n + 1)$ non è $3 - 2n + 1$.
- Pensare che $g \circ f$ e $f \circ g$ siano uguali.
- Cercare l'inversa di una funzione che non è biettiva, o dimenticare che dipende da dominio e codominio.
- Invertire una composizione senza capovolgere l'ordine.

> [!ESAME] Che cosa scrivere sul foglio di riepilogo
> Alla prova puoi portare libro e appunti. Da questa lezione conviene avere pronti: la regola «la funzione di destra si usa per prima»; il metodo della domanda 3; il metodo per l'inversa ($y = f(x)$, ricavare $x$, controllare); la regola delle calze e delle scarpe per l'inversa di una composizione.

## Quiz

```quiz
D: Con $f(n) = n + 2$ e $g(n) = 3n$ dagli interi agli interi, quanto vale $(g \circ f)(1)$?
+ 9
- 5
- 3
- 6
- 11
= Prima $f(1) = 3$, poi $g(3) = 9$. La risposta più insidiosa è 5: è $(f \circ g)(1) = f(3) = 5$, cioè l'ordine sbagliato. 3 è solo $f(1)$; 6 e 11 non escono da nessun ordine.

D: Siano $f \colon A \to B$, $g \colon B \to C$ e $h \colon C \to B$. Quale composizione **non** si può fare?
+ $f \circ g$
- $g \circ f$
- $h \circ g$
- $g \circ h$
- $h \circ g \circ f$
= $f \circ g$ chiede di usare prima $g$, che arriva in $C$, e poi $f$, che parte da $A$: non si attaccano. La risposta più insidiosa è $h \circ g \circ f$, che sembra lunga ma funziona: da $A$ a $B$, a $C$, di nuovo a $B$. $h \circ g$ va da $B$ a $B$, $g \circ h$ da $C$ a $C$.

D: (Appello del 04/02/2025, versione 3) Siano $f, g \colon \Z \to \Z$ le funzioni $f(n) = 2n - 1$ e $g(n) = 5 - n$. Allora
+ $(g \circ f)(n) = 6 - 2n$
- $(f \circ g)(n) = 9 + 2n$
- $(f \circ g)(n) = 4 - 2n$
- $(g \circ f)(n) = 9 - 2n$
- $(f \circ g)(n) = 9 - n$
= $g(2n - 1) = 5 - (2n - 1) = 6 - 2n$. La risposta più insidiosa è $(g \circ f)(n) = 9 - 2n$: è la formula di $f \circ g$, cioè $2(5 - n) - 1 = 9 - 2n$, attribuita all'ordine sbagliato. Le altre sbagliano un segno o dimenticano il 2.

D: (Appello del 10/09/2026, versione 2) Siano $f, g \colon \Z \to \Z$ le funzioni $f(n) = 2n - 1$ e $g(n) = 1 - n$. Allora
+ $g \circ f \circ g(0) = 0$
- $g \circ f \circ f(0) = -2$
- $g \circ g \circ f(0) = 1$
- $f \circ f \circ g(0) = 2$
- $f \circ g \circ f(0) = 4$
= $g(0) = 1$, $f(1) = 1$, $g(1) = 0$. La risposta più insidiosa è $f \circ f \circ g(0) = 2$: il valore giusto è $g(0) = 1$, $f(1) = 1$, $f(1) = 1$. Le altre: $g \circ f \circ f(0) = 4$, $g \circ g \circ f(0) = -1$, $f \circ g \circ f(0) = 3$.

D: (Appello del 06/06/2026, versione 2) Siano $f(x) = x + 3$, $g(x) = -x + 1$ e $h(x) = 2x$. Allora
+ $(h \circ f \circ g)(x) = -2x + 8$
- $(g \circ f \circ h)(x) = -2x + 2$
- $(f \circ h \circ g)(x) = -2x + 3$
- $(f \circ g \circ h)(x) = -2x - 4$
- $(g \circ h \circ f)(x) = -2x + 5$
= Da destra: $g$ dà $-x + 1$, $f$ dà $-x + 4$, $h$ dà $-2x + 8$. La risposta più insidiosa è $(g \circ h \circ f)(x) = -2x + 5$: il conto vero dà $-2x - 5$, con il segno opposto. Le altre valgono $-2x - 2$, $-2x + 5$ e $-2x + 4$.

D: Quale affermazione è vera per tutte le funzioni $f \colon A \to B$, $g \colon B \to C$, $h \colon C \to D$?
+ $h \circ (g \circ f) = (h \circ g) \circ f$
- $g \circ f = f \circ g$
- $g \circ f$ è iniettiva
- $(g \circ f)^{-1} = g^{-1} \circ f^{-1}$
- $f \circ \operatorname{id}_B = f$
= È la proprietà associativa (Proposizione 2.14). La risposta più insidiosa è $f \circ \operatorname{id}_B = f$: a destra di $f$ va l'identità del dominio, $\operatorname{id}_A$, altrimenti la composizione non si può fare. $f \circ g$ in generale non esiste; l'iniettività non è garantita; l'inversa, quando c'è, si scrive nell'ordine contrario, $f^{-1} \circ g^{-1}$.

D: Siano $f \colon A \to B$ e $g \colon B \to C$ con $g \circ f$ biettiva. Che cosa si può dire con certezza?
+ $f$ è iniettiva e $g$ è suriettiva
- $f$ e $g$ sono biettive
- $f$ è suriettiva e $g$ è iniettiva
- $f$ è biettiva
- $A$, $B$ e $C$ hanno lo stesso numero di elementi
= È il Corollario 2.18. La risposta più insidiosa è «$f$ e $g$ sono biettive»: nell'esempio della trappola, con un solo studente e due piatti dallo stesso prezzo, la composta è biettiva ma né la scelta né il listino lo sono. Nello stesso esempio l'insieme in mezzo, i piatti, ha più elementi degli altri due.

D: (Un appello degli anni 2021–2025) Sia $f \colon \R \to \R$ la funzione $f(x) = 3x - 2$. La funzione inversa è
+ $g(x) = \frac 13 x + \frac 23$
- $g(x) = \frac 13 x - \frac 23$
- $g(x) = x + \frac 23$
- $g(x) = \frac 12 x + \frac 32$
- $g(x) = \frac 12 x - \frac 32$
= Da $y = 3x - 2$ viene $x = \frac{y + 2}{3}$. La risposta più insidiosa è $\frac 13 x - \frac 23$, con il segno sbagliato: controllando, $g(f(0)) = g(-2) = -\frac 43$, non 0. Le altre non disfano $f$ nemmeno su un numero.

D: Siano $f$ e $g$ funzioni biettive dai reali ai reali, con $f(x) = x + 1$ e $g(x) = 2x$. Quale funzione è $(g \circ f)^{-1}$?
+ $y \mapsto \frac y2 - 1$
- $y \mapsto \frac{y - 1}{2}$
- $y \mapsto 2y + 2$
- $y \mapsto \frac{y + 1}{2}$
- $(g \circ f)^{-1}$ non esiste
= $(g \circ f)(x) = 2x + 2$; per tornare indietro si disfa prima $g$ (si divide per 2) e poi $f$ (si toglie 1): $\frac y2 - 1$. La risposta più insidiosa è $\frac{y - 1}{2}$: è $g^{-1} \circ f^{-1}$, l'ordine sbagliato. La composta di biezioni è biettiva, quindi l'inversa esiste.

D: (Appello del 07/07/2025, versione 2) Sia $f(x) = 2x - 3$ e $g(x)$ tale che $(g \circ f)(x) = 6x - 8$. Quanto vale $g(1)$?
N: 4
= Si prova a scrivere $6x - 8$ con dentro $2x - 3$: $6x - 8 = 3(2x - 3) + 1$, quindi $g(x) = 3x + 1$, la risposta giusta dell'appello. Allora $g(1) = 4$. Controllo: $f(2) = 1$ e $(g \circ f)(2) = 12 - 8 = 4$.
```

## Esercizi

::: esercizio base Riscaldamento: la mensa e la cassa
Con le tabelle all'inizio della lezione, scrivi la tabella completa di $g \circ f$, da ogni studente a quanto paga. È iniettiva? È suriettiva come funzione dagli studenti ai prezzi $\{3, 4, 5, 6\}$?
::: soluzione
1. Anna 4 €, Bruno 4 €, Carla 3 €, Dario 5 €.
2. Non è iniettiva: Anna e Bruno pagano tutti e due 4 €.
3. Non è suriettiva: nessuno paga 6 €, perché nessuno ha scelto gli gnocchi.
:::

::: esercizio base Riscaldamento: da dentro verso fuori
Con $f(n) = n - 3$ e $g(n) = n^2$ dagli interi agli interi, calcola $(g \circ f)(5)$, $(f \circ g)(5)$, $(g \circ f)(n)$ e $(f \circ g)(n)$.
::: soluzione
1. $(g \circ f)(5)$: $f(5) = 2$, $g(2) = 4$.
2. $(f \circ g)(5)$: $g(5) = 25$, $f(25) = 22$.
3. $(g \circ f)(n) = (n - 3)^2 = n^2 - 6n + 9$.
4. $(f \circ g)(n) = n^2 - 3$.
:::

::: esercizio base Riscaldamento: si può comporre?
Siano $f \colon A \to B$, $g \colon B \to B$, $h \colon B \to A$. Per ciascuna composizione dì se si può fare e, se sì, da dove a dove va: $g \circ f$, $f \circ g$, $h \circ g \circ f$, $f \circ h$, $g \circ h$.
::: soluzione
1. $g \circ f$: sì, da $A$ a $B$.
2. $f \circ g$: no, $g$ arriva in $B$ e $f$ parte da $A$.
3. $h \circ g \circ f$: sì, da $A$ ad $A$.
4. $f \circ h$: sì, da $B$ a $B$.
5. $g \circ h$: no, $h$ arriva in $A$ e $g$ parte da $B$.
:::

::: esercizio base Riscaldamento: un'inversa piccola
La funzione $f$ da $\{1, 2, 3, 4\}$ a $\{a, b, c, d\}$ è $f(1) = d$, $f(2) = b$, $f(3) = a$, $f(4) = c$. Scrivi $f^{-1}$ e controlla che $f^{-1} \circ f$ sia l'identità.
::: soluzione
$f^{-1}(a) = 3$, $f^{-1}(b) = 2$, $f^{-1}(c) = 4$, $f^{-1}(d) = 1$. Controllo: $f^{-1}(f(1)) = f^{-1}(d) = 1$, $f^{-1}(f(2)) = f^{-1}(b) = 2$, e così via per 3 e 4.
:::

::: esercizio medio Esercizio 2.10 del libro
Siano $f \colon \N \to \Z$, $g \colon \Z \to \Z$ e $h \colon \Z \to \N$. Dire quali delle seguenti composizioni sono legittime e quali no, specificando in caso affermativo dominio e codominio: $g \circ h$, $h \circ f$, $g \circ f$, $f \circ g$, $g \circ f \circ h$, $g \circ g \circ f$, $f \circ h \circ h$.
::: soluzione
Uso la regola del libro: il codominio di una deve **coincidere** con il dominio della successiva.
1. $g \circ h$: no. $h$ arriva in $\N$, $g$ parte da $\Z$.
2. $h \circ f$: sì, da $\N$ a $\N$.
3. $g \circ f$: sì, da $\N$ a $\Z$.
4. $f \circ g$: no. $g$ arriva in $\Z$, $f$ parte da $\N$.
5. $g \circ f \circ h$: sì. $h$ da $\Z$ a $\N$, $f$ da $\N$ a $\Z$, $g$ da $\Z$ a $\Z$: in tutto da $\Z$ a $\Z$.
6. $g \circ g \circ f$: sì, da $\N$ a $\Z$.
7. $f \circ h \circ h$: no. Il primo $h$ arriva in $\N$, il secondo parte da $\Z$.

I naturali sono dentro gli interi, quindi qualcuno direbbe che $g \circ h$ e $f \circ h \circ h$ hanno senso lo stesso. Con la definizione 2.13, però, i due insiemi devono essere uguali: all'esame segui il libro.
:::

::: esercizio medio Esercizio 2.11 del libro
Siano $f, g \colon \Z \to \Z$ le funzioni: $f(n) = 2n + 1$ se $n$ è pari, $f(n) = 5 - n$ se $n$ è dispari; $g(n) = 0$ se $n \ge 0$, $g(n) = 2 - n^2$ se $n < 0$. Calcolare $f \circ g(1)$, $g \circ f(-1)$, $f \circ g \circ f(0)$, $g \circ g \circ f(3)$, $f \circ g \circ g(-2)$, $g \circ f \circ g(2)$.
::: soluzione
Ogni volta si parte da destra e si guarda quale pezzo della formula usare.
1. $f \circ g(1)$: $g(1) = 0$; 0 è pari, $f(0) = 1$. Risultato **1**.
2. $g \circ f(-1)$: $-1$ è dispari, $f(-1) = 5 + 1 = 6$; $g(6) = 0$. Risultato **0**.
3. $f \circ g \circ f(0)$: $f(0) = 1$, $g(1) = 0$, $f(0) = 1$. Risultato **1**.
4. $g \circ g \circ f(3)$: 3 è dispari, $f(3) = 2$; $g(2) = 0$; $g(0) = 0$. Risultato **0**.
5. $f \circ g \circ g(-2)$: $g(-2) = 2 - 4 = -2$; di nuovo $g(-2) = -2$; $-2$ è pari, $f(-2) = -4 + 1 = -3$. Risultato **$-3$**.
6. $g \circ f \circ g(2)$: $g(2) = 0$, $f(0) = 1$, $g(1) = 0$. Risultato **0**.

Conti controllati con un programma.
:::

::: esercizio medio Le versioni dell'appello del 06/06/2026
Con $f(x) = x - 1$, $g(x) = -3x$ e $h(x) = x + 2$ (versione 3), calcola $(g \circ f \circ h)(x)$, $(h \circ f \circ g)(x)$, $(f \circ h \circ g)(x)$, $(f \circ g \circ h)(x)$ e $(g \circ h \circ f)(x)$. Quale vale $-3x - 7$?
::: soluzione
1. $g \circ f \circ h$: $x + 2$, poi $x + 1$, poi $-3x - 3$.
2. $h \circ f \circ g$: $-3x$, poi $-3x - 1$, poi $-3x + 1$.
3. $f \circ h \circ g$: $-3x$, poi $-3x + 2$, poi $-3x + 1$.
4. $f \circ g \circ h$: $x + 2$, poi $-3x - 6$, poi $-3x - 7$.
5. $g \circ h \circ f$: $x - 1$, poi $x + 1$, poi $-3x - 3$.

Vale $-3x - 7$ la quarta, che era la risposta giusta dell'appello. Nota che due ordini diversi danno lo stesso risultato, $-3x - 3$: può succedere, ma non è la regola.
:::

::: esercizio medio Trovare l'inversa
Per ciascuna funzione dai reali ai reali, trova l'inversa e controllala su un numero: (a) $f(x) = 4x - 1$; (b) $f(x) = 7 - x$; (c) $f(x) = \frac{x}{2} + 3$.
::: soluzione
(a) $y = 4x - 1$ dà $x = \frac{y + 1}{4}$. Controllo: $f(1) = 3$ e $\frac{3 + 1}{4} = 1$.

(b) $y = 7 - x$ dà $x = 7 - y$: la funzione è inversa di sé stessa. Controllo: $f(2) = 5$ e $7 - 5 = 2$.

(c) $y = \frac x2 + 3$ dà $x = 2(y - 3) = 2y - 6$. Controllo: $f(4) = 5$ e $2 \cdot 5 - 6 = 4$.
:::

::: esercizio esame Esercizio 2.14 del libro: le funzioni lineari
Una funzione $f \colon \R \to \R$ della forma $f(x) = ax + b$, con $a$ e $b$ costanti reali e $a \neq 0$, si chiama **lineare**. Dimostrare che: (a) ogni funzione lineare è invertibile, con inversa lineare; (b) la composizione di funzioni lineari è lineare.
::: soluzione
**(a)** Da $y = ax + b$ viene $ax = y - b$, e si può dividere per $a$ perché non è 0: $x = \frac{y - b}{a} = \frac 1a y - \frac ba$. La funzione $g(y) = \frac 1a y - \frac ba$ ha la forma giusta, con coefficiente $\frac 1a$ diverso da 0: è lineare. Controllo che sia l'inversa:
- $g(f(x)) = \frac{(ax + b) - b}{a} = x$;
- $f(g(y)) = a \cdot \frac{y - b}{a} + b = y$.

Le due composte sono identità, quindi $g = f^{-1}$.

**(b)** Siano $f(x) = ax + b$ e $g(x) = cx + d$, con $a$ e $c$ diversi da 0. Allora
$$(g \circ f)(x) = c(ax + b) + d = (ca)x + (cb + d).$$
Ha la forma giusta, e $ca$ non è 0 perché nessuno dei due fattori lo è. Quindi $g \circ f$ è lineare.
:::

::: esercizio esame Esercizio 2.15 del libro: l'inversa di tre funzioni
Prendendo spunto dalla Proposizione 2.24, enunciare e dimostrare una formula per l'inversa di una composizione di più di due funzioni biettive.
::: soluzione
**Enunciato** per tre funzioni biettive $f \colon A \to B$, $g \colon B \to C$, $h \colon C \to D$:
$$(h \circ g \circ f)^{-1} = f^{-1} \circ g^{-1} \circ h^{-1}.$$
**Dimostrazione.** Scrivo $h \circ g \circ f$ come $h \circ (g \circ f)$: è la composizione di due biezioni, $g \circ f$ e $h$. Per la Proposizione 2.24,
$$(h \circ (g \circ f))^{-1} = (g \circ f)^{-1} \circ h^{-1}.$$
Uso di nuovo la 2.24 su $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$, e ottengo $f^{-1} \circ g^{-1} \circ h^{-1}$.

**In generale**, con $k$ funzioni biettive, l'inversa della composta è la composta delle inverse in ordine contrario. Si dimostra allo stesso modo, aggiungendo una funzione alla volta: è un'induzione sul numero delle funzioni.
:::

::: esercizio difficile Esercizio 2.12 del libro: quando la cancellazione non funziona
Costruire un esempio esplicito di funzione $f \colon A \to B$ e funzioni $g_1, g_2 \colon B \to Y$ e $h_1, h_2 \colon X \to A$, con $g_1 \neq g_2$ e $h_1 \neq h_2$, tali che $g_1 \circ f = g_2 \circ f$ e $f \circ h_1 = f \circ h_2$.
::: soluzione
Per la Proposizione 2.25 $f$ non può essere biettiva. Prendo una $f$ né iniettiva né suriettiva.
- $A = \{1, 2\}$, $B = \{a, b\}$, $f(1) = f(2) = a$.
- $Y = \{0, 1\}$; $g_1(a) = 0$, $g_1(b) = 0$; $g_2(a) = 0$, $g_2(b) = 1$. Sono diverse in $b$.
- $X = \{x\}$; $h_1(x) = 1$, $h_2(x) = 2$. Sono diverse.

**Prima uguaglianza.** $g_1 \circ f$ e $g_2 \circ f$ valgono 0 in 1 e in 2, perché $f$ porta tutto in $a$ e le due $g$ sono uguali in $a$. Il punto dove differiscono, $b$, non viene mai raggiunto: $f$ non è suriettiva.

**Seconda uguaglianza.** $f(h_1(x)) = f(1) = a$ e $f(h_2(x)) = f(2) = a$. Le due $h$ portano in punti diversi, che $f$ poi mescola: $f$ non è iniettiva.
:::

## Domande di ripasso

::: domanda Che cosa vuol dire $g \circ f$, e in che ordine si usano le funzioni?
È la funzione che manda $a$ in $g(f(a))$: si usa **prima** $f$ e **poi** $g$, anche se $f$ si scrive a destra.
:::

::: domanda Quando si può fare la composizione $g \circ f$?
Quando il codominio di $f$ coincide con il dominio di $g$. La composta va dal dominio di $f$ al codominio di $g$.
:::

::: domanda Che cosa dice la proprietà associativa? E la composizione è commutativa?
Che $h \circ (g \circ f) = (h \circ g) \circ f$: con tre funzioni le parentesi non contano. Non è commutativa: con $f(n) = 2n$ e $g(n) = n + 1$, $g \circ f$ dà $2n + 1$ e $f \circ g$ dà $2n + 2$.
:::

::: domanda Se $f$ e $g$ sono iniettive, che cosa si può dire di $g \circ f$? E se $g \circ f$ è iniettiva?
Se $f$ e $g$ sono iniettive, lo è anche $g \circ f$. Se $g \circ f$ è iniettiva, allora $f$ è iniettiva, mentre $g$ può non esserlo.
:::

::: domanda Quando due funzioni sono inverse l'una dell'altra?
Quando, composte nei due ordini, danno le identità: $g \circ f = \operatorname{id}_A$ e $f \circ g = \operatorname{id}_B$. Una sola delle due uguaglianze non basta.
:::

::: domanda Quali funzioni hanno un'inversa?
Esattamente quelle biettive, e l'inversa è unica (Teorema 2.20).
:::

::: domanda Come si trova l'inversa di $f(x) = 5x + 2$ dai reali ai reali?
Si scrive $y = 5x + 2$ e si ricava $x = \frac{y - 2}{5}$. Si controlla: $f^{-1}(f(x)) = \frac{5x + 2 - 2}{5} = x$.
:::

::: domanda Qual è l'inversa di $g \circ f$?
$f^{-1} \circ g^{-1}$, con l'ordine capovolto: come le calze e le scarpe, si disfa prima l'ultima cosa fatta.
:::

::: domanda Che differenza c'è tra $f^{-1}(b)$ controimmagine e $f^{-1}(b)$ funzione inversa?
La controimmagine è un insieme ed esiste per ogni funzione. La funzione inversa dà un elemento ed esiste solo se $f$ è biettiva.
:::

## Glossario

```glossario
Composizione | La funzione $g \circ f$ che manda $a$ in $g(f(a))$: prima $f$, poi $g$ (Definizione 2.13).
Proprietà associativa | Con tre funzioni, $h \circ (g \circ f) = (h \circ g) \circ f$: le parentesi non contano (Proposizione 2.14).
Elemento neutro | L'identità per la composizione: comporre con $\operatorname{id}$ non cambia la funzione.
Non commutativa | In generale $g \circ f$ e $f \circ g$ sono diverse, o una delle due non esiste (Nota 2.15).
Funzioni inverse l'una dell'altra | Due funzioni $f \colon A \to B$ e $g \colon B \to A$ con $g \circ f = \operatorname{id}_A$ e $f \circ g = \operatorname{id}_B$ (Definizione 2.19).
Funzione invertibile | Una funzione che ha un'inversa: sono esattamente le funzioni biettive (Teorema 2.20).
Funzione inversa | L'unica funzione $f^{-1}$ che disfa una biezione $f$ (Definizione 2.21).
Inversa di una composizione | $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$, con l'ordine capovolto (Proposizione 2.24).
Cancellazione | Una funzione biettiva si può togliere da tutte e due le parti di un'uguaglianza tra composte (Proposizione 2.25).
```

## Checklist

```checklist
- So che $g \circ f$ vuol dire prima $f$ e poi $g$, e calcolo una composizione da dentro verso fuori.
- So dire se una composizione si può fare, controllando codominio e dominio da destra a sinistra.
- So trovare la formula di una composta sostituendo con le parentesi, e la controllo su un numero.
- So usare la proprietà associativa e so che la composizione non è commutativa.
- So che cosa succede a iniettività e suriettività quando compongo (Proposizioni 2.16 e 2.17).
- So quando due funzioni sono inverse e perché servono tutte e due le uguaglianze.
- So che hanno un'inversa esattamente le funzioni biettive, e che l'inversa è unica.
- So trovare l'inversa di una formula e controllarla componendo.
- So scrivere l'inversa di una composizione nell'ordine giusto.
- So risolvere la domanda 3 del quiz in tutti i suoi modelli.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 2 «Funzioni», pp. 23–29 (definizioni 2.13, 2.19, 2.21, proposizioni 2.14, 2.16, 2.17, 2.24, 2.25, corollario 2.18, teorema 2.20 con le dimostrazioni, note 2.15, 2.22, 2.23 e gli esempi delle pp. 24–27); esercizi 2.10, 2.11, 2.12, 2.14 e 2.15 (p. 36). Le definizioni e gli enunciati nei riquadri sono citati dal libro. Due refusi del libro sono segnalati nel testo: $\operatorname{id}_B$ al posto di $\operatorname{id}_{A \times B}$ a p. 27 e di $\operatorname{id}_A$ a p. 29.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori): lezione 5 (composizione di funzioni e sue proprietà, composizione e iniettività o suriettività, funzioni invertibili). Gli argomenti della lezione del 12/10/2026 non erano ancora pubblicati sul Moodle del canale B quando ho scritto questi appunti.
- Quiz degli appelli di Matematica Discreta, con le soluzioni ufficiali, sulla pagina Moodle MDAG1 2025/26 ([id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), aperta agli ospiti): domanda 3 degli appelli del 04/02/2025, 06/06/2025, 07/07/2025, 13/01/2026, 03/02/2026, 06/06/2026 e 10/09/2026 (tutte le versioni, risposte ricontrollate con un programma), e la domanda sulla funzione inversa di un quiz degli anni 2021–2025.
- Programma del corso: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md), voce «Relazioni e funzioni».
- V. Bocchino, *Rigurgiti di Unicorno*, appunti di Matematica Discreta scritti da uno studente sul libro di Mori (licenza CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): un riepilogo già pronto, non ufficiale.
- Le spiegazioni a parole, la mensa con la cassa e le tessere, gli uffici dei pacchi, le calze e le scarpe, i riquadri «Prova tu», i quiz senza data, gli esercizi di riscaldamento e gli esercizi sulle versioni d'esame sono di questi appunti.
