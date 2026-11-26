---
corso: FDA
lezione: "25"
titolo: "Algebre di Boole: deduzioni equazionali"
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 25 · Libro, parte 2, §11.3
simboli_logici: si
descrizione: >-
  Appunti della lezione 25 di Fondamenti dell'Informatica (canale B): le deduzioni equazionali nelle algebre di Boole,
  l'unicità del complemento, le leggi di idempotenza, del limite, di assorbimento, di involuzione e di De Morgan
  ricavate dalla definizione, il principio di dualità e il quiz d'esame sulle proprietà valide in tutte le algebre
  booleane.
lede: >-
  Dalle dieci leggi della definizione si ricavano tutte le altre, con catene di uguaglianze in cui ogni passo cita la
  legge che usa. Quello che si ottiene così vale in ogni algebra di Boole: per i bit, per gli insiemi, per le
  proposizioni. Il diario chiama questo modo di ragionare deduzione equazionale.
materiale: libro
scheda:
  Libro: Johnsonbaugh, parte 2, §11.3
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore e mezza
fonte: >-
  Diario delle lezioni del canale B (lezione 26 del docente); risposte ufficiali alle domande di ripasso e agli
  esercizi del §11.3 e all'autoverifica del capitolo 11 (appendice pubblicata sul Moodle del canale A); simulazione
  d'esame 2 del 2023/24, quiz sulle algebre booleane
appunti_html: appunti/FDA/25_algebre_boole_deduzioni_equazionali.html
genera_html: true
---

## In breve

- Una **deduzione equazionale** è una catena di uguaglianze: ogni passo sostituisce un pezzo con uno uguale, e dice quale legge usa.
- Dalle dieci leggi della definizione se ne ricavano altre, valide in **ogni** algebra di Boole: idempotenza, limite, assorbimento, involuzione, De Morgan.
- Il **complemento è unico**: se la somma di due elementi è 1 e il loro prodotto è 0, il secondo è il complemento del primo. Bastano quei due controlli per riconoscerlo.
- **Dualità**: scambiando il più con il punto e lo 0 con l'1 in una legge vera se ne ottiene un'altra vera.
- Per dire che un'uguaglianza **non** vale in tutte le algebre di Boole basta un caso in cui fallisce, e di solito lo si trova nei bit.

> [!CANALI]
> Nel canale B è la lezione di venerdì 27/11, dalle 11 alle 13. Per il docente è la lezione 26: qui è la 25. Questi appunti li ho scritti **prima** della lezione, dal diario del canale B: «Sezione 11.3: Algebre di Boole e deduzioni equazionali.»
>
> **Che cosa non so.** Il libro non ce l'ho. Gli enunciati sono quelli delle risposte ufficiali alle domande di ripasso del §11.3, tradotti. Due deduzioni sono quelle delle risposte ufficiali, e lo dico dove compaiono; le altre le ho scritte io, usando solo le dieci leggi, e nel libro o in aula i passaggi possono essere in un altro ordine. Non so quali deduzioni ha scelto il docente.
>
> **Da dove si parte.** Dalla definizione di algebra di Boole e dai due esempi della [lezione 24](24_circuiti_combinatori_algebre_boole.html).
>
> **Canali A e C.** Lo stesso capitolo è nella mappa comune del corso (§11.1–11.5).

## La regola del gioco

In un'algebra di Boole si sa solo quello che dice la definizione: dieci leggi, e nient'altro. Tutto il resto va ricavato da lì.

> [!RIPASSO] Le dieci leggi della definizione (lezione 24)
> | Legge | Per il più | Per il punto |
> |---|---|---|
> | associativa | $(x + y) + z = x + (y + z)$ | $(xy)z = x(yz)$ |
> | commutativa | $x + y = y + x$ | $xy = yx$ |
> | distributiva | $x + yz = (x + y)(x + z)$ | $x(y + z) = xy + xz$ |
> | identità | $x + 0 = x$ | $x \cdot 1 = x$ |
> | complemento | $x + x' = 1$ | $x x' = 0$ |
>
> Il punto si può non scrivere, e si fa prima del più.

Una **deduzione equazionale** parte da un'espressione e arriva a un'altra con una catena di uguaglianze. Le mosse permesse sono due.

1. **Sostituire uguali con uguali.** Un pezzo dell'espressione che ha la forma di un lato di una legge si rimpiazza con l'altro lato. Le leggi si leggono in tutti e due i versi: da sinistra a destra e da destra a sinistra.
2. **Mettere un'espressione al posto di una lettera.** Una legge vale per tutti gli elementi. Quindi al posto di $x$ può esserci un'espressione qualunque, purché sia la stessa in tutti i punti della legge.

Accanto a ogni passo si scrive la legge usata. Se l'enunciato ha delle ipotesi, anche quelle si possono usare come passi.

Prima deduzione: $x + x = x$. Con i numeri sarebbe falsa, perché $x + x$ fa $2x$. Qui il più non è la somma, e l'uguaglianza si ricava in cinque passi. L'idea è moltiplicare per 1, e poi scrivere l'1 in un modo comodo.

```grafico
titolo: La deduzione di x + x = x come un percorso. Ogni freccia è un passo, con il nome della legge che lo permette. L'espressione prima si allunga, per far comparire un pezzo che la legge del complemento manda a 0, e poi si accorcia
x: 0 12
y: 0.5 5.3
assi: no
griglia: no
proporzioni: libere
testo: 1.4 4.2 | blu | "$x + x$"
testo: 5.2 4.2 | blu | "$(x + x) \cdot 1$"
testo: 9.9 4.2 | blu | "$(x + x)(x + x^\prime)$"
testo: 9.9 1.6 | blu | "$x + x x^\prime$"
testo: 5.2 1.6 | blu | "$x + 0$"
testo: 1.4 1.6 | verde | "$x$"
freccia: 2.2 4.2 3.8 4.2 | ambra
freccia: 6.6 4.2 7.8 4.2 | ambra
freccia: 9.9 3.7 9.9 2.1 | ambra
freccia: 8.8 1.6 6.1 1.6 | ambra
freccia: 4.3 1.6 1.9 1.6 | ambra
testo: 3.0 4.75 | ambra | "identità"
testo: 7.2 4.75 | ambra | "complemento"
testo: 8.25 2.9 | ambra | "distributiva"
testo: 7.45 1.05 | ambra | "complemento"
testo: 3.1 1.05 | ambra | "identità"
```

| Passo | Legge usata |
|---|---|
| $x + x = (x + x) \cdot 1$ | identità, da destra a sinistra |
| $= (x + x)(x + x')$ | complemento: l'1 diventa $x + x'$ |
| $= x + x x'$ | distributiva del più sul punto, da destra a sinistra |
| $= x + 0$ | complemento: $x x' = 0$ |
| $= x$ | identità |

Nel terzo passo la legge è $x + yz = (x + y)(x + z)$, con $x$ al posto di $y$ e $x'$ al posto di $z$. È la distributiva che con i numeri non vale: qui fa il lavoro principale.

**Che cosa non si può fare.** Tutto quello che non è una delle leggi, o una legge già ricavata. In particolare:

- scrivere $x + x = 2x$: in un'algebra di Boole il 2 non c'è;
- **semplificare**: da $x + y = x + z$ non si ricava $y = z$. Nei bit $1 + 0 = 1 + 1$, ma 0 e 1 sono diversi. Manca la sottrazione;
- concludere da $xy = 0$ che uno dei due fattori è 0. Nei sottoinsiemi di $\{a, b\}$ l'intersezione di $\{a\}$ e $\{b\}$ è vuota, e nessuno dei due lo è.

**Perché non basta una tabella.** Una tabella con 0 e 1 controlla la legge nell'algebra dei bit. La deduzione usa solo le dieci leggi, quindi vale in tutte le algebre di Boole insieme. Eccone tre su cui provare ogni risultato della lezione:

| | I bit | I sottoinsiemi di $\{a, b\}$ | I divisori di 6 |
|---|---|---|---|
| elementi | 0, 1 | $\varnothing$, $\{a\}$, $\{b\}$, $\{a, b\}$ | 1, 2, 3, 6 |
| $x + y$ | OR | unione | minimo comune multiplo |
| $xy$ | AND | intersezione | massimo comun divisore |
| $x'$ | NOT | complementare | $6 / x$ |
| lo 0 e l'1 | 0 e 1 | $\varnothing$ e $\{a, b\}$ | 1 e 6 |

La terza viene dall'esercizio 2 del §11.3, che ha la risposta ufficiale. La legge appena ricavata, letta nelle tre algebre, dice: $1 \vee 1 = 1$; un insieme unito a sé stesso è sé stesso; il minimo comune multiplo di 2 e 2 è 2.

```grafico
titolo: Due algebre di Boole con quattro elementi. In tutte e due l'elemento in basso fa da 0 e quello in alto fa da 1; i due di mezzo sono uno il complemento dell'altro, la loro somma è l'elemento in alto e il loro prodotto quello in basso. Cambiano i nomi, non la forma
x: 0 12
y: 0.3 5.5
assi: no
griglia: no
proporzioni: libere
testo: 3.0 5.0 | grigio | "sottoinsiemi di {a, b}"
testo: 9.0 5.0 | grigio | "divisori di 6"
testo: 3.0 0.8 | blu | "∅"
testo: 1.4 2.5 | blu | "{a}"
testo: 4.6 2.5 | blu | "{b}"
testo: 3.0 4.2 | blu | "{a, b}"
segmento: 2.75 1.1 1.65 2.2 | grigio
segmento: 3.25 1.1 4.35 2.2 | grigio
segmento: 1.65 2.8 2.7 3.9 | grigio
segmento: 4.35 2.8 3.3 3.9 | grigio
testo: 9.0 0.8 | verde | "1"
testo: 7.4 2.5 | verde | "2"
testo: 10.6 2.5 | verde | "3"
testo: 9.0 4.2 | verde | "6"
segmento: 8.75 1.1 7.65 2.2 | grigio
segmento: 9.25 1.1 10.35 2.2 | grigio
segmento: 7.65 2.8 8.7 3.9 | grigio
segmento: 10.35 2.8 9.3 3.9 | grigio
segmento: 6.0 0.5 6.0 5.3 | grigio | sottile
```

::: prova Completa la deduzione di $xx = x$, scrivendo la legge di ogni passo: $xx = xx + 0 = xx + xx' = x(x + x') = x \cdot 1 = x$.
Identità, da destra a sinistra. Complemento: lo 0 diventa $xx'$. Distributiva del punto sul più, da destra a sinistra. Complemento: $x + x' = 1$. Identità.
:::

> [!RICORDA]
> - Deduzione equazionale: una catena di uguaglianze, ogni passo con la sua legge.
> - Due mosse: sostituire un lato di una legge con l'altro; mettere espressioni al posto delle lettere.
> - Niente $2x$, niente semplificazioni: valgono solo le leggi.
> - Una deduzione vale in tutte le algebre di Boole; una tabella solo nei bit.

## Il complemento è unico

La legge del complemento dice che ogni elemento ha un compagno che, sommato a lui, dà 1 e, moltiplicato per lui, dà 0. Non dice se di compagni così ce n'è uno solo. Si ricava.

> [!PROP] Unicità del complemento (libro, §11.3)
> In un'algebra di Boole, se $x + y = 1$ e $xy = 0$, allora $y = x'$.

**Come si legge.** $x'$ è l'**unico** elemento che fa quelle due cose con $x$. Da qui un metodo: per dimostrare che un elemento è il complemento di un altro bastano due controlli, la somma che dà 1 e il prodotto che dà 0. Per gli insiemi è la risposta ufficiale all'esercizio 7: se $X \cup Y = U$ e $X \cap Y = \varnothing$, allora $Y$ è il complementare di $X$.

La deduzione parte da $y$ e arriva a $x'$. Usa le due ipotesi, una a metà e una alla fine.

| Passo | Legge usata |
|---|---|
| $y = y \cdot 1$ | identità |
| $= y(x + x')$ | complemento |
| $= yx + yx'$ | distributiva |
| $= xy + yx'$ | commutativa |
| $= 0 + yx'$ | ipotesi: $xy = 0$ |
| $= xx' + yx'$ | complemento: lo 0 diventa $xx'$ |
| $= x'x + x'y$ | commutativa, due volte |
| $= x'(x + y)$ | distributiva, da destra a sinistra |
| $= x' \cdot 1$ | ipotesi: $x + y = 1$ |
| $= x'$ | identità |

Con l'unicità tre leggi si ricavano senza catene lunghe: basta fare i due controlli.

> [!ESEMPIO] Tre complementi trovati con due controlli
> **$(x')' = x$.** Cerco il complemento di $x'$. Il candidato è $x$: $x' + x = 1$ e $x'x = 0$, per le leggi del complemento con i termini scambiati. Quindi $x$ è il complemento di $x'$.
>
> **$0' = 1$.** Il candidato è 1: $0 + 1 = 1$ e $0 \cdot 1 = 0$, per le leggi dell'identità, con la commutativa nella prima. Quindi 1 è il complemento di 0.
>
> **$1' = 0$.** Il candidato è 0: $1 + 0 = 1$ e $1 \cdot 0 = 0$, di nuovo per l'identità, con la commutativa nella seconda.

La prima si chiama **involuzione**: negare due volte riporta alla partenza. Nei circuiti sono due NOT di seguito, che si possono togliere.

::: prova In un'algebra di Boole si sa che $a + b = 1$ e $ab = 0$. Quanto vale $b'$?
Per l'unicità $b = a'$. Allora $b' = (a')' = a$, per l'involuzione.
:::

> [!RICORDA]
> - Se $x + y = 1$ e $xy = 0$, allora $y = x'$.
> - Per riconoscere un complemento: due controlli, somma 1 e prodotto 0.
> - Da qui: $(x')' = x$, $0' = 1$, $1' = 0$.

## Le leggi che si ricavano

Con questi strumenti il libro ricava sei gruppi di leggi. Una volta ricavate si usano come le dieci di partenza.

> [!PROP] Leggi valide in ogni algebra di Boole (libro, §11.3, domande di ripasso 2–7)
> | Nome | Per il più | Per il punto |
> |---|---|---|
> | idempotenza | $x + x = x$ | $xx = x$ |
> | limite (*bound laws*) | $x + 1 = 1$ | $x \cdot 0 = 0$ |
> | assorbimento | $x + xy = x$ | $x(x + y) = x$ |
> | involuzione | $(x')' = x$ | |
> | dello 0 e dell'1 | $0' = 1$ | $1' = 0$ |
> | De Morgan | $(x + y)' = x'y'$ | $(xy)' = x' + y'$ |

**Come si legge.** Idempotenza: un elemento sommato o moltiplicato con sé stesso non cambia. Limite: nella somma l'1 vince su tutto, nel prodotto vince lo 0. Assorbimento: un termine che contiene già $x$ come fattore non aggiunge niente a $x$. De Morgan: il complemento di una somma è il prodotto dei complementi, e viceversa. Sono leggi note per gli insiemi e per le proposizioni; la novità è che vengono tutte dalle dieci leggi.

Idempotenza, involuzione e leggi dello 0 e dell'1 sono già ricavate. Restano limite, assorbimento e De Morgan.

**Limite: $x + 1 = 1$.**

| Passo | Legge usata |
|---|---|
| $x + 1 = (x + 1) \cdot 1$ | identità |
| $= (x + 1)(x + x')$ | complemento |
| $= x + 1 \cdot x'$ | distributiva del più sul punto, da destra a sinistra |
| $= x + x'$ | commutativa e identità: $1 \cdot x' = x'$ |
| $= 1$ | complemento |

**Assorbimento: $x(x + y) = x$.** Questa è la deduzione della risposta ufficiale all'esercizio 18 del §11.3.

| Passo | Legge usata |
|---|---|
| $x(x + y) = (x + 0)(x + y)$ | identità: $x$ diventa $x + 0$ |
| $= x + 0 \cdot y$ | distributiva del più sul punto, da destra a sinistra |
| $= x + y \cdot 0$ | commutativa |
| $= x + 0$ | limite: $y \cdot 0 = 0$ |
| $= x$ | identità |

```grafico
titolo: L'assorbimento negli insiemi. La zona comune sta tutta dentro X: unendola a X non si aggiunge niente, quindi X unito all'intersezione è ancora X. E X intersecato con l'unione dei due cerchi è ancora X, perché X sta tutto dentro l'unione
x: -4.2 4.2
y: -2.6 3.0
assi: no
griglia: no
cerchio: -1 0 2 | blu
cerchio: 1 0 2 | verde
testo: -2.7 2.3 | blu | "X"
testo: 2.7 2.3 | verde | "Y"
testo: 0 0 | ambra | "$X \cap Y$"
testo: -1.9 -0.2 | blu | "solo X"
testo: 1.9 -0.2 | verde | "solo Y"
```

**De Morgan: $(x + y)' = x'y'$.** Qui serve l'unicità del complemento. Il candidato complemento di $x + y$ è $x'y'$; i due controlli sono lunghi, ma ogni passo è una legge già vista.

> [!DIM] I due controlli per De Morgan
> **La somma dà 1.**
>
> | Passo | Legge usata |
> |---|---|
> | $(x + y) + x'y' = ((x + y) + x')((x + y) + y')$ | distributiva del più sul punto |
> | $= (y + (x + x'))(x + (y + y'))$ | commutativa e associativa |
> | $= (y + 1)(x + 1)$ | complemento |
> | $= 1 \cdot 1$ | limite |
> | $= 1$ | identità |
>
> **Il prodotto dà 0.**
>
> | Passo | Legge usata |
> |---|---|
> | $(x + y)(x'y') = (x'y')(x + y)$ | commutativa |
> | $= (x'y')x + (x'y')y$ | distributiva |
> | $= (xx')y' + x'(yy')$ | commutativa e associativa |
> | $= 0 \cdot y' + x' \cdot 0$ | complemento |
> | $= 0 + 0$ | limite, con la commutativa |
> | $= 0$ | identità |
>
> Per l'unicità del complemento, $x'y'$ è il complemento di $x + y$.

Le stesse leggi, lette nelle tre algebre di prima:

| Legge | Nei bit | Nei sottoinsiemi | Nei divisori di 6 |
|---|---|---|---|
| $x + 1 = 1$ | $x \vee 1 = 1$ | $X \cup U = U$ | mcm di $x$ e 6: 6 |
| $x \cdot 0 = 0$ | $x \wedge 0 = 0$ | $X \cap \varnothing = \varnothing$ | MCD di $x$ e 1: 1 |
| $x(x + y) = x$ | $x \wedge (x \vee y) = x$ | $X \cap (X \cup Y) = X$ | MCD di $x$ e del mcm di $x$ e $y$: $x$ |

Le righe dei sottoinsiemi sono le risposte ufficiali all'autoverifica del capitolo 11, domanda 4.

::: prova Ricava $x + xy = x$, scrivendo la legge di ogni passo. Comincia scrivendo il primo $x$ come $x \cdot 1$.
$x + xy = x \cdot 1 + xy$, per l'identità. Poi $= x(1 + y)$, distributiva da destra a sinistra. Poi $= x(y + 1)$, commutativa. Poi $= x \cdot 1$, limite. Infine $= x$, identità.
:::

> [!RICORDA]
> - Idempotenza: $x + x = x$ e $xx = x$. Limite: $x + 1 = 1$ e $x \cdot 0 = 0$.
> - Assorbimento: $x + xy = x$ e $x(x + y) = x$.
> - De Morgan: $(x + y)' = x'y'$ e $(xy)' = x' + y'$.
> - Si ricavano tutte dalle dieci leggi, quindi valgono in ogni algebra di Boole.

## La dualità

In tutte le tabelle di questa lezione le leggi vanno a coppie, e da una colonna all'altra succede sempre la stessa cosa: il più e il punto si scambiano, e così lo 0 e l'1.

```grafico
titolo: Quattro coppie di leggi duali. Da una colonna all'altra si scambiano il più con il punto e lo 0 con l'1; le lettere e gli apici restano dove sono. Le prime due coppie sono nella definizione, le altre due si ricavano
x: 0 12
y: 0.7 5.7
assi: no
griglia: no
proporzioni: libere
testo: 3.0 5.2 | grigio | "una legge"
testo: 9.0 5.2 | grigio | "la sua duale"
testo: 3.0 4.3 | blu | "$x + 0 = x$"
testo: 9.0 4.3 | verde | "$x \cdot 1 = x$"
freccia: 5.1 4.37 6.9 4.37 | ambra
freccia: 6.9 4.23 5.1 4.23 | ambra
testo: 3.0 3.3 | blu | "$x + x^\prime = 1$"
testo: 9.0 3.3 | verde | "$x \cdot x^\prime = 0$"
freccia: 5.1 3.37 6.9 3.37 | ambra
freccia: 6.9 3.23 5.1 3.23 | ambra
testo: 3.0 2.3 | blu | "$x + x = x$"
testo: 9.0 2.3 | verde | "$x \cdot x = x$"
freccia: 5.1 2.37 6.9 2.37 | ambra
freccia: 6.9 2.23 5.1 2.23 | ambra
testo: 3.0 1.3 | blu | "$x + 1 = 1$"
testo: 9.0 1.3 | verde | "$x \cdot 0 = 0$"
freccia: 5.1 1.37 6.9 1.37 | ambra
freccia: 6.9 1.23 5.1 1.23 | ambra
```

> [!DEF] Duale (libro, §11.3, domanda di ripasso 8)
> Il **duale** di un'affermazione sulle algebre di Boole si ottiene sostituendo $0$ con $1$, $1$ con $0$, $+$ con $\cdot$ e $\cdot$ con $+$.

**Come si legge.** Le lettere e gli apici restano dove sono; cambiano solo le due operazioni e le due costanti. Attenzione alle parentesi: il punto si fa prima del più, quindi prima di scambiare conviene scrivere tutte le parentesi. Il duale di $x + yz$ è $x(y + z)$, non $xy + z$.

> [!PROP] Principio di dualità (libro, §11.3, domanda di ripasso 9)
> Il duale di un teorema sulle algebre di Boole è ancora un teorema.

**Come si legge.** Ogni legge ricavata ne regala un'altra, senza una seconda deduzione. Il motivo è nella definizione: le dieci leggi sono cinque coppie di duali. Presa una deduzione, se si scambiano più e punto, 0 e 1 in ogni passo, ogni passo resta l'applicazione di una legge: di quella duale. Si vede confrontando le due deduzioni dell'idempotenza:

| Per $x + x = x$ | Per $xx = x$ | Legge usata |
|---|---|---|
| $x + x = (x + x) \cdot 1$ | $xx = xx + 0$ | identità |
| $= (x + x)(x + x')$ | $= xx + xx'$ | complemento |
| $= x + xx'$ | $= x(x + x')$ | distributiva |
| $= x + 0$ | $= x \cdot 1$ | complemento |
| $= x$ | $= x$ | identità |

> [!ESEMPIO] Esercizi 8, 11 e 14 del §11.3 (dalle risposte ufficiali): scrivere il duale
> Le risposte ufficiali danno i tre duali. Scambiando di nuovo si ritrovano le affermazioni di partenza.
>
> | Affermazione | Il suo duale |
> |---|---|
> | $(x + y)(x + 1) = x + xy + y$ | $xy + x \cdot 0 = x(x + y)y$ |
> | $xy' = 0$ se e solo se $xy = x$ | $x + y' = 1$ se e solo se $x + y = x$ |
> | $x + x(y + 1) = x$ | $x(x + y \cdot 0) = x$ |
>
> Nella prima riga il lato destro $x + xy + y$ diventa un prodotto di tre fattori, e il fattore di mezzo prende le parentesi: $x(x + y)y$.

::: prova Scrivi il duale di $x + x'y = x + y$. Le due uguaglianze sono vere?
Il duale è $x(x' + y) = xy$. Sono vere tutte e due. La prima: $x + x'y = (x + x')(x + y) = 1 \cdot (x + y) = x + y$. La seconda viene dalla dualità, oppure direttamente: $x(x' + y) = xx' + xy = 0 + xy = xy$.
:::

> [!RICORDA]
> - Duale: si scambiano il più con il punto e lo 0 con l'1. Lettere e apici restano.
> - Prima di scambiare, scrivi le parentesi.
> - Il duale di un teorema è un teorema: ogni legge ne dà due.

## Vale in tutte le algebre di Boole?

Il quiz d'esame su questo argomento propone delle uguaglianze e chiede, per ognuna, se è una proprietà valida in tutte le algebre booleane. Le risposte possibili hanno pesi diversi: per il sì serve un motivo generale, per il no basta un caso.

> [!METODO] Decidere se un'uguaglianza vale in tutte le algebre di Boole
> 1. **Riconoscila.** È una delle dieci leggi, o una di quelle ricavate, magari con le lettere cambiate o i due lati scambiati? Allora sì.
> 2. **Provala nei bit.** Metti 0 e 1 al posto delle lettere, in tutti i modi. Se in un caso i due lati sono diversi, la risposta è no: hai un controesempio in un'algebra di Boole.
> 3. **Se nei bit torna sempre**, cerca la deduzione: quasi sempre bastano due o tre passi con le leggi note.

> [!ESEMPIO] Un sì con due passi e un no con un caso
> **$x + x'y = x + y$.** Non è nella tabella. Con la distributiva del più sul punto: $x + x'y = (x + x')(x + y)$. Con il complemento e l'identità: $= 1 \cdot (x + y) = x + y$. Sì.
>
> **$x + yz = xy + xz$.** Somiglia alla distributiva, ma mescola i due lati di due leggi diverse. Nei bit, con $x = 1$ e $y = z = 0$: a sinistra $1 + 0 = 1$, a destra $0 + 0 = 0$. No.

Anche le ipotesi entrano in una deduzione, come nell'unicità del complemento. Un altro esempio, con la deduzione ufficiale:

> [!ESEMPIO] Esercizio 13 del §11.3 (dalla risposta ufficiale all'esercizio 15): una somma che fa 0
> Se $x + y = 0$, allora $x = 0$ e $y = 0$.
>
> | Passo | Legge usata |
> |---|---|
> | $0 = x + y$ | ipotesi |
> | $= (x + x) + y$ | idempotenza, da destra a sinistra |
> | $= x + (x + y)$ | associativa |
> | $= x + 0$ | ipotesi |
> | $= x$ | identità |
>
> Quindi $x = 0$. Per $y$ si fa lo stesso, dopo aver scambiato i due addendi con la commutativa. Negli insiemi dice: se un'unione è vuota, sono vuoti tutti e due i pezzi.

> [!APPROFONDIMENTO] Se torna nei bit, torna ovunque
> C'è un teorema, che il corso non dimostra: un'**uguaglianza** tra due espressioni che vale nell'algebra dei bit, per tutti i valori delle lettere, vale in ogni algebra di Boole. Quindi nel metodo il passo 3 riesce sempre. Il teorema riguarda solo le uguaglianze. Un'affermazione di un altro tipo può valere nei bit e non altrove: «se $xy = 0$, allora $x = 0$ oppure $y = 0$» è vera nei bit e falsa nei sottoinsiemi di $\{a, b\}$.

::: prova Vale in tutte le algebre di Boole? (a) $(x + y)' = x' + y'$; (b) $x + xy = x$; (c) $x + y = xy$.
(a) No. Nei bit, con $x = 1$ e $y = 0$: a sinistra $1' = 0$, a destra $0 + 1 = 1$. La legge di De Morgan ha il punto a destra. (b) Sì: è l'assorbimento. (c) No: con $x = 1$ e $y = 0$ viene $1 = 0$.
:::

> [!RICORDA]
> - Sì: una legge riconosciuta, o una deduzione.
> - No: un controesempio, di solito nei bit.
> - Le ipotesi dell'enunciato si usano come passi della catena.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $x + y$ | «x più y» | la prima operazione di un'algebra di Boole | nei bit la OR |
| $xy$, $x \cdot y$ | «x per y» | la seconda operazione | negli insiemi l'intersezione |
| $x'$ | «x primo» | il complemento di $x$ | nei divisori di 6, $2' = 3$ |
| $(x')'$ | «x primo primo» | il complemento del complemento | $(x')' = x$ |
| $0$, $1$ | «zero», «uno» | i due elementi speciali | negli insiemi $\varnothing$ e $U$ |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Il quiz sulle algebre booleane**, presente nella simulazione 2 del 2023/24: cinque affermazioni, per ognuna sì o no.
2. **Conoscere le leggi con il loro nome**: le dieci della definizione e le sei ricavate.
3. **Semplificare un'espressione** con le leggi, che è anche il modo di semplificare un circuito.
4. Per la domanda aperta: saper scrivere una deduzione corta, con la legge accanto a ogni passo.

### Una domanda d'esame, letta insieme

**Simulazione d'esame 2 del 2023/24, quiz sulle algebre booleane.** «Quali tra le seguenti affermazioni sono valide per le algebre booleane?» Le voci, ognuna con un menù sì/no:

1. «Le algebre booleane sono definite solo su insiemi che contengono esattamente due elementi (come vero e falso)?»
2. «x+(y·z)=(x·y)+(x·z) è una proprietà valida per tutte le algebre booleane?»
3. «x+(y·z)=(y+x)·(z+x) è una proprietà valida per tutte le algebre booleane?»
4. «x+x=x è una proprietà valida per tutte le algebre booleane?»
5. «x+x'=1 e x·x'=0 sono proprietà valide per tutte le algebre booleane?»

Nella [lezione 12](12_esercizi_logica.html) l'ho risolta traducendo tutto in «e», «o», «non», perché le algebre di Boole non c'erano ancora. Ora si risponde con la definizione.

**In pratica chiede:** per ogni voce, di riconoscere una legge o di trovare un controesempio.

> [!ESEMPIO] · la soluzione, voce per voce
> **Voce 1: no.** La definizione chiede due elementi distinti 0 e 1, non che siano gli unici. I sottoinsiemi di $\{a, b\}$ e i divisori di 6 formano algebre di Boole con quattro elementi.
>
> **Voce 2: no.** Nei bit, con $x = 1$ e $y = z = 0$: a sinistra $1 + 0 = 1$, a destra $0 + 0 = 0$.
>
> **Voce 3: sì.** È la distributiva del più sul punto, $x + yz = (x + y)(x + z)$, con i due addendi di ogni parentesi scambiati per la commutativa.
>
> **Voce 4: sì.** È l'idempotenza, ricavata in cinque passi all'inizio della lezione.
>
> **Voce 5: sì.** Sono le due leggi del complemento: fanno parte della definizione.
>
> Le risposte, nell'ordine: **no, no, sì, sì, sì**. Nella copia compilata da uno studente sono le stesse, con qualche esitazione sulle ultime due; accanto all'ultima c'è scritto che con l'apice si intende il NOT.

### Errori da evitare

- Trattare il più come la somma dei numeri: $x + x$ non è $2x$.
- Semplificare un termine da tutti e due i lati di un'uguaglianza.
- Confondere le due distributive, o mescolarle: $x + yz$ non è $xy + xz$.
- Scrivere De Morgan senza scambiare l'operazione: $(x + y)'$ non è $x' + y'$.
- Fare il duale senza le parentesi, o cambiando anche gli apici.
- Rispondere «sì» a un'uguaglianza dopo averla provata con una sola scelta dei valori.
- Dire che una legge ricavata «fa parte della definizione»: nella definizione ci sono solo le dieci leggi.

## Quiz

```quiz
D: Simulazione d'esame 2 del 2023/24, seconda voce: «x+(y·z)=(x·y)+(x·z) è una proprietà valida per tutte le algebre booleane?»
+ No: nei bit, con $x = 1$ e $y = z = 0$, a sinistra viene 1 e a destra 0
- Sì: è la legge distributiva
- Sì: vale nei bit, quindi vale in tutte le algebre di Boole
- No: nelle algebre di Boole non c'è nessuna legge distributiva
- No: vale solo quando $x = 0$
= Basta un controesempio. La più insidiosa è «Sì: è la legge distributiva»: le due leggi distributive sono $x + yz = (x + y)(x + z)$ e $x(y + z) = xy + xz$, e questa uguaglianza prende il lato sinistro della prima e il lato destro della seconda.

D: Simulazione d'esame 2 del 2023/24, quarta voce: «x+x=x è una proprietà valida per tutte le algebre booleane?»
+ Sì: è l'idempotenza, che si ricava dalle dieci leggi della definizione
- No: $x + x$ fa $2x$
- Sì, ma solo nell'algebra dei bit
- No: vale solo per $x = 0$
- Sì: è una delle dieci leggi della definizione
= Si ricava moltiplicando per 1 e scrivendo l'1 come $x + x'$. La più insidiosa è «Sì: è una delle dieci leggi della definizione»: il sì è giusto, il motivo no, perché nella definizione l'idempotenza non c'è.

D: In una deduzione compare il passo $(x + x)(x + x') = x + xx'$. Quale legge usa?
+ distributiva
- complemento
- idempotenza
- assorbimento
- De Morgan
= È $x + yz = (x + y)(x + z)$ letta da destra a sinistra, con $x$ e $x'$ al posto di $y$ e $z$. La più insidiosa è «complemento»: quella legge serve nel passo dopo, per trasformare $xx'$ in 0.

D: Nell'algebra di Boole dei divisori di 6, dove il più è il minimo comune multiplo, il punto è il massimo comun divisore e $x' = 6/x$, quanto vale $(2 + 3)'$?
N: 1
= $2 + 3$ è il mcm di 2 e 3, cioè 6. Il complemento di 6 è $6/6 = 1$. Con De Morgan viene lo stesso: $2' \cdot 3'$ è il MCD di 3 e 2, cioè 1.

D: Qual è il duale di $x + xy = x$?
+ $x(x + y) = x$
- $xy + x = x$
- $x' + x'y' = x'$
- $x \cdot x + y = x$
- $x + (x + y) = x$
= Si scambiano più e punto: la somma esterna diventa un prodotto, e il prodotto $xy$ diventa la somma $x + y$, tra parentesi. La più insidiosa è $x \cdot x + y = x$: è lo scambio fatto senza parentesi, che cambia l'ordine delle operazioni.

D: In un'algebra di Boole si sa che $a + b = 1$ e $ab = 0$. Che cosa si può concludere?
+ $b = a'$
- $a = b$
- $a = 1$ e $b = 0$
- $a = 0$ oppure $b = 0$
- niente, senza altre ipotesi
= È l'unicità del complemento. La più insidiosa è «$a = 0$ oppure $b = 0$»: nei bit è vera, ma nei sottoinsiemi di $\{a, b\}$ i due insiemi con un elemento hanno unione piena e intersezione vuota, e nessuno dei due è vuoto.

D: Quale di queste affermazioni NON vale in tutte le algebre di Boole?
+ se $x + y = x + z$, allora $y = z$
- $x + xy = x$
- $(x')' = x$
- $x + 1 = 1$
- $(xy)' = x' + y'$
= Nei bit $1 + 0 = 1 + 1$, ma 0 e 1 sono diversi: non si può semplificare. Le altre sono assorbimento, involuzione, limite e De Morgan. La più insidiosa è $x + 1 = 1$: con i numeri è falsa, qui è la legge del limite.

D: Nell'algebra dei sottoinsiemi di $U = \{1, 2, 3, 4\}$, con $X = \{1, 2\}$ e $Y = \{2, 3\}$, quanto vale $(X + Y)'$?
+ $\{4\}$
- $\{1, 3, 4\}$
- $\{2\}$
- $\varnothing$
- $\{1, 2, 3\}$
= $X + Y$ è l'unione $\{1, 2, 3\}$, e il suo complementare è $\{4\}$. Con De Morgan: $X'Y'$ è l'intersezione di $\{3, 4\}$ e $\{1, 4\}$. La più insidiosa è $\{1, 3, 4\}$: è $X' + Y'$, cioè De Morgan senza scambiare l'operazione.
```

## Esercizi

::: esercizio base Riscaldamento: dare il nome alle leggi
Di' quale legge è: (a) $x + xy = x$; (b) $x \cdot 0 = 0$; (c) $(xy)' = x' + y'$; (d) $xx = x$; (e) $x + x' = 1$. Quali fanno parte della definizione?
::: soluzione
(a) Assorbimento. (b) Limite. (c) De Morgan. (d) Idempotenza. (e) Complemento. Solo la (e) è nella definizione; le altre si ricavano.
:::

::: esercizio base Riscaldamento: le leggi nei divisori di 6
Nell'algebra dei divisori di 6 calcola: (a) $2 + 2$; (b) $3 \cdot 6$; (c) $2 + 2 \cdot 3$; (d) $(2 \cdot 3)'$ e $2' + 3'$.
::: soluzione
(a) mcm di 2 e 2: 2, idempotenza. (b) MCD di 3 e 6: 3, identità, perché 6 fa da 1. (c) $2 \cdot 3$ è il MCD, 1; poi il mcm di 2 e 1 è 2: assorbimento. (d) $2 \cdot 3 = 1$, e $1' = 6$. Dall'altra parte $2' = 3$ e $3' = 2$, con mcm 6. Uguali: De Morgan.
:::

::: esercizio base Riscaldamento: scrivere i duali
Scrivi il duale di: (a) $x + 0 = x$; (b) $x(y + z) = xy + xz$; (c) $(x + y)' = x'y'$; (d) $x + x'y = x + y$.
::: soluzione
(a) $x \cdot 1 = x$. (b) $x + yz = (x + y)(x + z)$. (c) $(xy)' = x' + y'$. (d) $x(x' + y) = xy$. In tutti i casi gli apici restano dove sono.
:::

::: esercizio base Riscaldamento: una legge negli insiemi
Scrivi le due leggi di assorbimento nell'algebra dei sottoinsiemi di un insieme $U$, e controllale con $U = \{1, 2, 3\}$, $X = \{1, 2\}$, $Y = \{2, 3\}$.
::: soluzione
$X \cup (X \cap Y) = X$ e $X \cap (X \cup Y) = X$. Controllo: $X \cap Y = \{2\}$, e $\{1, 2\} \cup \{2\} = \{1, 2\}$. Poi $X \cup Y = \{1, 2, 3\}$, e $\{1, 2\} \cap \{1, 2, 3\} = \{1, 2\}$.
:::

::: esercizio medio Il duale di una deduzione
La deduzione di $x + 1 = 1$ è nella lezione. Scrivi, passo per passo, la deduzione duale, e di' che cosa dimostra.
::: soluzione
Dimostra $x \cdot 0 = 0$.

| Passo | Legge usata |
|---|---|
| $x \cdot 0 = x \cdot 0 + 0$ | identità |
| $= x \cdot 0 + xx'$ | complemento |
| $= x(0 + x')$ | distributiva del punto sul più, da destra a sinistra |
| $= xx'$ | commutativa e identità: $0 + x' = x'$ |
| $= 0$ | complemento |
:::

::: esercizio medio Semplificare un'espressione
Semplifica con le leggi, dicendo quale usi: (a) $xy + xy'$; (b) $(x + y)(x + y')$; (c) $x + x'y + xy$.
::: soluzione
**(a)** $xy + xy' = x(y + y')$, distributiva; $= x \cdot 1$, complemento; $= x$, identità. **(b)** $(x + y)(x + y') = x + yy'$, distributiva del più sul punto; $= x + 0 = x$, complemento e identità. È il duale di (a). **(c)** $x + xy = x$ per l'assorbimento, quindi resta $x + x'y$; poi $x + x'y = (x + x')(x + y) = x + y$.
:::

::: esercizio esame Cinque affermazioni, come nel quiz della simulazione
Per ognuna di' se è valida in tutte le algebre di Boole: (a) $x + (y + z) = (x + y) + z$; (b) $x(y + z) = (x + y)(x + z)$; (c) $x + x' = 0$; (d) $(x + y)' = x'y'$; (e) $x \cdot 1 = 1$.
::: soluzione
**(a)** Sì: associativa. **(b)** No: nei bit, con $x = 0$ e $y = z = 1$, a sinistra viene 0 e a destra 1. **(c)** No: la legge del complemento dice $x + x' = 1$, e 0 e 1 sono distinti. **(d)** Sì: De Morgan. **(e)** No: è $x \cdot 1 = x$; con $x = 0$ viene $0 = 1$.
:::

::: esercizio difficile Una regola per semplificare (libro, §11.3, esercizio 21, prima parte)
La risposta ufficiale all'esercizio 21 comincia così: se $ba = ca$ e $ba' = ca'$, allora $b = c$. Scrivi la deduzione.
::: soluzione
| Passo | Legge usata |
|---|---|
| $b = b \cdot 1$ | identità |
| $= b(a + a')$ | complemento |
| $= ba + ba'$ | distributiva |
| $= ca + ca'$ | le due ipotesi |
| $= c(a + a')$ | distributiva, da destra a sinistra |
| $= c \cdot 1$ | complemento |
| $= c$ | identità |

È il modo corretto di «semplificare» in un'algebra di Boole: un'ipotesi sola non basta, ne servono due, una con $a$ e una con $a'$.
:::

::: esercizio difficile I divisori di 12 non formano un'algebra di Boole
Con le stesse operazioni dei divisori di 6, ma su $S = \{1, 2, 3, 4, 6, 12\}$ e $x' = 12/x$: quale legge fallisce? Usa l'elemento 2.
::: soluzione
Il complemento. $2' = 6$, ma il mcm di 2 e 6 è 6, non 12, e il loro MCD è 2, non 1. E nessun altro divisore fa da complemento di 2: servirebbe un numero con mcm 12 e MCD 1 insieme a 2, e non c'è. La risposta ufficiale all'esercizio 23 dà la regola generale: i divisori di $n$ formano un'algebra di Boole quando nessun primo compare due volte nella fattorizzazione di $n$. In 12 il 2 compare due volte.
:::

## Domande di ripasso

::: domanda Che cos'è una deduzione equazionale?
Una catena di uguaglianze in cui ogni passo sostituisce un pezzo con uno uguale, secondo una legge o un'ipotesi, che si scrive accanto.
:::

::: domanda Perché una deduzione dalle dieci leggi vale più di una tabella?
La tabella controlla l'uguaglianza solo nei bit. La deduzione usa solo le leggi della definizione, quindi vale in ogni algebra di Boole.
:::

::: domanda Che cosa dice l'unicità del complemento, e a che cosa serve?
Se la somma di due elementi è 1 e il prodotto è 0, il secondo è il complemento del primo. Serve per riconoscere un complemento con due controlli.
:::

::: domanda Quali leggi si ricavano dalla definizione?
Idempotenza, limite, assorbimento, involuzione, le leggi dello 0 e dell'1, De Morgan.
:::

::: domanda Come si scrive il duale di un'affermazione?
Si scambiano il più con il punto e lo 0 con l'1, dopo aver scritto le parentesi. Lettere e apici non cambiano.
:::

::: domanda Che cosa dice il principio di dualità?
Che il duale di un teorema sulle algebre di Boole è ancora un teorema.
:::

::: domanda Come si mostra che un'uguaglianza non vale in tutte le algebre di Boole?
Con un controesempio: un'algebra di Boole, di solito i bit, e dei valori per le lettere con cui i due lati sono diversi.
:::

## Glossario

```glossario
Deduzione equazionale | Dimostrazione fatta di una catena di uguaglianze, ognuna giustificata da una legge o da un'ipotesi.
Complemento | L'elemento che sommato a x dà 1 e moltiplicato per x dà 0; è unico.
Idempotenza | Le leggi x + x = x e xx = x.
Leggi del limite (bound laws) | Le leggi x + 1 = 1 e x · 0 = 0.
Assorbimento | Le leggi x + xy = x e x(x + y) = x.
Involuzione | La legge per cui il complemento del complemento di x è x.
Leggi di De Morgan | Il complemento di una somma è il prodotto dei complementi, e viceversa.
Duale | L'affermazione ottenuta scambiando il più con il punto e lo 0 con l'1.
Principio di dualità | Il duale di un teorema sulle algebre di Boole è ancora un teorema.
```

## Checklist

```checklist
- So scrivere le dieci leggi della definizione di algebra di Boole.
- So spiegare che cos'è una deduzione equazionale e quali mosse sono permesse.
- So ricavare l'idempotenza, scrivendo la legge di ogni passo.
- So enunciare l'unicità del complemento e usarla per riconoscere un complemento.
- So ricavare le leggi del limite e dell'assorbimento.
- So enunciare le leggi di De Morgan nelle tre scritture: bit, insiemi, algebra di Boole.
- So scrivere il duale di un'affermazione, con le parentesi giuste.
- So dire che cosa garantisce il principio di dualità.
- So decidere se un'uguaglianza vale in tutte le algebre di Boole, con una legge o con un controesempio.
- So leggere una stessa legge nei bit, nei sottoinsiemi e nei divisori di 6.
```

## Fonti

- Diario delle lezioni del canale B (Berardi), lezione 26 del docente, 27/11/2026: «Sezione 11.3: Algebre di Boole e deduzioni equazionali.» Appunti scritti prima della lezione.
- Johnsonbaugh, parte 2 del libro di testo, §11.3: risposte ufficiali alle domande di ripasso (da 1 a 9), agli esercizi 2, 7, 8, 11, 14, 15, 18, 21 e 23 e all'autoverifica del capitolo 11 (domanda 4), nell'appendice «Soluzioni di altri esercizi del testo» (Moodle del canale A, aperto agli ospiti). Da lì vengono gli enunciati delle leggi, le deduzioni dell'assorbimento e dell'esercizio 13, i tre duali e l'esempio dei divisori di 6. Il libro non ce l'ho: i testi degli esercizi citati sono ricostruiti dalle risposte.
- Simulazione d'esame 2 del 2023/24, quiz sulle algebre booleane (dalla copia compilata da uno studente, ricontrollata).
- Le altre deduzioni, i disegni, i quiz e gli esercizi sono di questi appunti; le leggi le ho ricontrollate con un programma nelle algebre dei bit, dei sottoinsiemi e dei divisori di 6 e di 30.
