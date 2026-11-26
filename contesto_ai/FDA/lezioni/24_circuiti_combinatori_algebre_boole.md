---
corso: FDA
lezione: "24"
titolo: "Circuiti combinatori, espressioni booleane e algebre di Boole"
data: 2026-11-26
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 24 · Libro, parte 2, §11.1, §11.2 e inizio del §11.3
simboli_logici: si
descrizione: >-
  Appunti della lezione 24 di Fondamenti dell'Informatica (canale B): circuiti combinatori e sequenziali, porte AND, OR
  e NOT, tabelle logiche, espressioni booleane e letterali, le cinque coppie di leggi delle operazioni sui bit,
  espressioni uguali e circuiti equivalenti, la definizione di algebra di Boole con gli esempi dei bit e dei
  sottoinsiemi.
lede: >-
  Si salta al capitolo 11 del libro, e si torna ai circuiti della prima lezione con un'altra domanda. Non interessa
  più solo che cosa calcola un circuito, ma quando due circuiti diversi calcolano la stessa cosa: lo decidono poche
  leggi, le stesse che valgono per gli insiemi e per le proposizioni.
materiale: libro
scheda:
  Libro: Johnsonbaugh, parte 2, §11.1, §11.2 e §11.3 fino agli esempi di algebra di Boole
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore e mezza
fonte: >-
  Diario delle lezioni del canale B (lezione 25 del docente); risposte ufficiali alle domande di ripasso e agli
  esercizi dei §11.1, §11.2 e §11.3 (appendice pubblicata sul Moodle del canale A); simulazioni d'esame 1 e 2 del
  2023/24, quiz sul circuito e sulle algebre booleane
appunti_html: appunti/FDA/24_circuiti_combinatori_algebre_boole.html
genera_html: true
---

## In breve

- Un **circuito combinatorio** ha un'uscita decisa solo dagli ingressi di quel momento: non ha memoria, e nessun filo torna indietro.
- Le porte sono tre: **AND**, **OR**, **NOT**. La **tabella logica** di un circuito elenca tutte le combinazioni degli ingressi con l'uscita di ognuna.
- Un'**espressione booleana** è la formula di un circuito: si costruisce con 0, 1, le variabili, le parentesi e le tre operazioni.
- Le operazioni sui bit rispettano cinque coppie di leggi: **associativa, commutativa, distributiva, identità, complemento**.
- Due espressioni sono **uguali** se danno lo stesso valore per ogni scelta dei bit. Due circuiti sono **equivalenti** se a ingressi uguali danno uscite uguali. Le due cose coincidono.
- Un'**algebra di Boole** è un insieme con due operazioni, un complemento, uno 0 e un 1 che rispettano quelle cinque coppie di leggi. I bit sono un esempio; i sottoinsiemi di un insieme sono un altro.

> [!CANALI]
> Nel canale B è la lezione di giovedì 26/11, dalle 9 alle 11. Per il docente è la lezione 25: qui è la 24. Il diario del canale B dice: «Sezione 11.1 e 11.2: circuiti combinatori e loro proprietà. Sezione 11.3: Algebre di Boole.» Dal capitolo 3 si passa al capitolo 11.
>
> **Che cosa non so.** Il libro non ce l'ho; ho le risposte ufficiali alle domande di ripasso e a una parte degli esercizi dei tre paragrafi. Definizioni ed enunciati sono quelli delle risposte ufficiali, tradotti. Gli esempi sono miei, salvo dove dico il contrario. Non so fino a che punto del §11.3 è arrivata la lezione: qui ci sono la definizione e i due esempi principali. Le leggi che si ricavano dalla definizione sono nella [lezione 25](25_algebre_boole_deduzioni_equazionali.html), che secondo il diario continua lo stesso paragrafo.
>
> **Che cosa è ripasso.** Le porte e le tabelle sono nella [lezione 01](01_bit_porte_esadecimale.html), i quiz sui circuiti nella [lezione 05](05_esercizi_circuiti_rappresentazioni.html), le equivalenze logiche nella [lezione 07](07_condizionali_equivalenza_logica.html). Qui cambiano i simboli, che sono quelli del capitolo 11, e lo scopo: confrontare circuiti.
>
> **Canali A e C.** Lo stesso capitolo è nella mappa comune del corso (§11.1–11.5).

## Circuiti senza memoria (libro, §11.1)

Dentro un computer un bit viaggia come una tensione: alta per 1, bassa per 0. Un circuito riceve alcuni bit in ingresso e produce un bit in uscita. La prima distinzione del capitolo è tra i circuiti che ricordano e quelli che non ricordano.

> [!DEF] Circuito combinatorio e circuito sequenziale (libro, §11.1, domande di ripasso 1 e 2)
> Un circuito è **combinatorio** se la sua uscita è definita in modo unico per ogni combinazione degli ingressi. È **sequenziale** se l'uscita dipende dagli ingressi e dallo stato del sistema.

**Come si legge.** In un circuito combinatorio gli stessi ingressi danno sempre la stessa uscita, qualunque cosa sia successa prima: il circuito non ha memoria. In uno sequenziale conta anche la storia. Il flip-flop della [lezione 01](01_bit_porte_esadecimale.html) è sequenziale: con gli stessi ingressi può dare 0 o 1, secondo l'ultimo impulso ricevuto. I circuiti sequenziali tornano nel capitolo 12, con gli automi.

I circuiti combinatori si costruiscono con tre **porte**. Sono quelle della lezione 01; il capitolo 11 le scrive con i simboli della logica.

| Porta | Si scrive | Uscita 1 quando | Nella lezione 01 |
|---|---|---|---|
| AND | $x_1 \wedge x_2$ | tutti e due gli ingressi valgono 1 | A AND B |
| OR | $x_1 \vee x_2$ | almeno un ingresso vale 1 | A OR B |
| NOT | $\overline{x}$ | l'ingresso vale 0 | NOT A |

La porta NOT si chiama anche **invertitore**. La barra copre tutto quello che viene negato: $\overline{x_1 \wedge x_2}$ nega l'uscita della AND, mentre $\overline{x_1} \wedge x_2$ nega solo il primo ingresso.

```widget porte
titolo: Le porte della lezione 01: clicca sugli ingressi A e B
modo: porte
a: 1
b: 0
```

Lo strumento mostra anche lo XOR, che il libro riprende più avanti, nel §11.4.

::: prova Quanto valgono $\overline{1 \wedge 0}$, $\overline{1} \wedge 0$ e $\overline{0} \vee \overline{1}$?
Nel primo $1 \wedge 0 = 0$, e la barra lo porta a 1. Nel secondo la barra copre solo l'1: $0 \wedge 0 = 0$. Nel terzo: $1 \vee 0 = 1$.
:::

> [!RICORDA]
> - Combinatorio: l'uscita dipende solo dagli ingressi di quel momento. Sequenziale: anche dallo stato.
> - AND si scrive $\wedge$, OR si scrive $\vee$, NOT è la barra sopra.
> - La barra nega tutto quello che copre.

## La tabella logica di un circuito

Di un circuito combinatorio si può scrivere tutto il comportamento in una tabella. È possibile proprio perché non ha memoria: le situazioni da considerare sono solo le combinazioni degli ingressi.

```grafico
titolo: Un circuito combinatorio con tre ingressi e tre porte. I fili vanno tutti da sinistra a destra. Sopra ogni filo interno c'è scritto che cosa trasporta: sono le colonne della tabella logica
x: 0 12
y: 0.6 5.1
assi: no
griglia: no
proporzioni: libere
testo: 0.5 4.2 | grigio | "$x_1$"
testo: 0.5 3.2 | grigio | "$x_2$"
testo: 0.5 1.4 | grigio | "$x_3$"
poligono: 2.25 3.2 3.75 3.2 3.75 4.2 2.25 4.2 | blu | tenue
testo: 3 3.7 | blu | "AND"
freccia: 0.95 4.2 2.2 3.95 | grigio
freccia: 0.95 3.2 2.2 3.45 | grigio
poligono: 5.25 2.1 6.75 2.1 6.75 3.1 5.25 3.1 | verde | tenue
testo: 6 2.6 | verde | "OR"
freccia: 3.8 3.7 5.2 2.9 | grigio
freccia: 0.95 1.4 5.2 2.3 | grigio
poligono: 8.25 2.1 9.75 2.1 9.75 3.1 8.25 3.1 | ambra | tenue
testo: 9 2.6 | ambra | "NOT"
freccia: 6.8 2.6 8.2 2.6 | grigio
freccia: 9.8 2.6 11.0 2.6 | grigio
testo: 11.45 2.6 | grigio | "$y$"
testo: 4.9 4.5 | blu | "$x_1 \wedge x_2$"
testo: 7.6 3.65 | verde | "$(x_1 \wedge x_2) \vee x_3$"
```

> [!DEF] Tabella logica (libro, §11.1, domanda di ripasso 7)
> La **tabella logica** di un circuito combinatorio elenca tutti i possibili ingressi insieme alle uscite che ne risultano.

**Come si legge.** È la tavola di verità della [lezione 06](06_proposizioni_connettivi_tavole.html), con 1 e 0 al posto di vero e falso. Con $n$ ingressi le righe sono $2^n$. Si riempie una colonna per porta, andando dagli ingressi verso l'uscita.

Per il circuito della figura:

| $x_1$ | $x_2$ | $x_3$ | $x_1 \wedge x_2$ | $(x_1 \wedge x_2) \vee x_3$ | $y$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 | 0 |

L'uscita vale 1 in tre righe: quando il terzo ingresso è 0 e i primi due non sono tutti e due 1.

Le risposte ufficiali del libro scrivono le righe nell'ordine opposto, da 111 a 000. Non cambia niente: l'importante è che le righe ci siano tutte, una volta sola. Qui tengo l'ordine da 000 a 111, quello delle lezioni 01 e 05 e delle simulazioni d'esame.

### Un circuito che non è combinatorio

Che cosa va storto se un filo torna indietro? Nel circuito qui sotto l'uscita $y$ rientra nella porta AND insieme all'ingresso $x$, e l'uscita della AND passa da una NOT.

```grafico
titolo: Un circuito in cui l'uscita y, seguendo il filo rosa, rientra nella porta AND. Per sapere quanto vale y bisognerebbe saperlo già: con x = 1 nessun valore di y è coerente con le porte
x: 0 12
y: 0.2 4.4
assi: no
griglia: no
proporzioni: libere
testo: 0.6 3.4 | grigio | "$x$"
freccia: 1.0 3.4 2.7 3.4 | grigio
poligono: 2.75 2.6 4.25 2.6 4.25 3.6 2.75 3.6 | blu | tenue
testo: 3.5 3.1 | blu | "AND"
freccia: 4.3 3.1 5.7 3.1 | grigio
poligono: 5.75 2.6 7.25 2.6 7.25 3.6 5.75 3.6 | ambra | tenue
testo: 6.5 3.1 | ambra | "NOT"
segmento: 7.25 3.1 9.2 3.1 | grigio
freccia: 9.2 3.1 10.2 3.1 | grigio
testo: 10.7 3.1 | grigio | "$y$"
punto: 8.6 3.1 | rosa
segmento: 8.6 3.1 8.6 1.2 | rosa
segmento: 8.6 1.2 1.9 1.2 | rosa
segmento: 1.9 1.2 1.9 2.8 | rosa
freccia: 1.9 2.8 2.7 2.8 | rosa
testo: 5.2 0.7 | rosa | "l'uscita torna in ingresso"
```

> [!ESEMPIO] Esercizio 7 del §11.1 (dalla risposta ufficiale)
> Il circuito impone che valga $y = \overline{x \wedge y}$. Provo i due valori dell'ingresso.
>
> **Con $x = 0$.** La AND dà 0 qualunque sia $y$, e la NOT dà 1. L'uscita è 1, senza dubbi.
>
> **Con $x = 1$.** Provo $y = 0$: la AND riceve 1 e 0 e dà 0, la NOT dà 1. Ma allora $y$ vale 1, non 0. Provo $y = 1$: la AND riceve 1 e 1 e dà 1, la NOT dà 0. Ma allora $y$ vale 0, non 1. Nessuno dei due valori regge.
>
> Con l'ingresso a 1 l'uscita non è definita: il circuito non è combinatorio. È la risposta del libro.

Per questo nei circuiti combinatori i fili vanno solo in avanti, dagli ingressi verso l'uscita. Nei quiz il primo controllo è proprio questo: c'è un filo che torna indietro?

::: prova Un circuito ha quattro ingressi. Quante righe ha la sua tabella logica? Con due ingressi, quale porta ha uscita 1 in una riga sola, quella con tutti gli ingressi a 1?
$2^4 = 16$ righe. La porta è la AND: dà 1 solo quando tutti gli ingressi valgono 1.
:::

> [!RICORDA]
> - Tabella logica: tutte le combinazioni degli ingressi, $2^n$ righe, con l'uscita di ognuna.
> - Una colonna per porta, dagli ingressi verso l'uscita.
> - Un filo che torna indietro può rendere l'uscita non definita: il circuito non è combinatorio.

## Espressioni booleane

Il circuito della prima figura si può descrivere senza disegno, con una formula. Si scrive un'operazione per ogni porta, seguendo i fili:

$$y = \overline{(x_1 \wedge x_2) \vee x_3}$$

Una formula così si chiama **espressione booleana**. Il libro dice con precisione quali scritture lo sono, con una definizione **ricorsiva**: prima i casi di partenza, poi le regole per costruire espressioni nuove da quelle già fatte.

> [!DEF] Espressione booleana (libro, §11.1, domanda di ripasso 8)
> Le **espressioni booleane** nei simboli $x_1, \dots, x_n$ sono definite così:
>
> - $0$, $1$, $x_1$, …, $x_n$ sono espressioni booleane;
> - se $X_1$ e $X_2$ sono espressioni booleane, lo sono anche $(X_1)$, $\overline{X_1}$, $X_1 \vee X_2$ e $X_1 \wedge X_2$.

**Come si legge.** Si parte dai mattoni: le due costanti e le variabili. Poi ogni regola è un modo di allungare un circuito: mettere una NOT in fondo, oppure unire due circuiti con una OR o con una AND. Le parentesi non aggiungono porte: dicono solo in che ordine si fanno le operazioni. Quello che non si ottiene così non è un'espressione booleana. Per esempio $x_1 \wedge \vee\, x_2$ non lo è: nessuna regola mette due operazioni di seguito.

Un **letterale** è una variabile da sola o con la barra, cioè $x$ oppure $\overline{x}$ (domanda di ripasso 9). L'espressione $(x_1 \wedge \overline{x_2}) \vee x_3$ ha tre letterali.

> [!ESEMPIO] Esercizio 16 del §11.1 (dalla risposta ufficiale): costruire un'espressione passo per passo
> $x_1 \wedge (x_2 \vee x_3)$ è un'espressione booleana? Sì, e si vede costruendola:
>
> 1. $x_1$, $x_2$ e $x_3$ sono espressioni booleane: sono variabili. Il libro numera questa regola (11.1.2).
> 2. $x_2 \vee x_3$ lo è, per la regola della OR, la (11.1.3c).
> 3. $(x_2 \vee x_3)$ lo è, per la regola delle parentesi, la (11.1.3a).
> 4. $x_1 \wedge (x_2 \vee x_3)$ lo è, per la regola della AND, la (11.1.3d).

**L'ordine delle operazioni.** Senza parentesi la AND si fa prima della OR, come la moltiplicazione prima della somma: $x_1 \vee x_2 \wedge x_3$ vuol dire $x_1 \vee (x_2 \wedge x_3)$. La barra fa da parentesi per quello che copre.

**Calcolare un'espressione.** Dati i valori delle variabili, si sostituiscono e si fanno i conti partendo dall'interno. Per $(x_1 \wedge \overline{x_2}) \vee x_3$ con i valori 1, 0, 0:

$$(1 \wedge \overline{0}) \vee 0 = (1 \wedge 1) \vee 0 = 1 \vee 0 = 1$$

**Dall'espressione al circuito.** Si guarda l'operazione più esterna: è l'ultima porta, quella che dà l'uscita. I suoi argomenti sono i circuiti che entrano in quella porta. Nell'espressione appena calcolata l'ultima porta è una OR. In un suo ingresso entra $x_3$; nell'altro entra una AND, che riceve $x_1$ e la NOT di $x_2$.

::: prova Calcola $x_1 \vee x_2 \wedge x_3$ con i valori 1, 0, 0. Che cosa verrebbe facendo prima la OR?
Prima la AND: $0 \wedge 0 = 0$, poi $1 \vee 0 = 1$. Facendo prima la OR verrebbe $(1 \vee 0) \wedge 0 = 0$: un risultato diverso, e sbagliato.
:::

> [!RICORDA]
> - Espressione booleana: costanti e variabili, combinate con parentesi, barra, $\vee$ e $\wedge$.
> - Letterale: una variabile, con o senza barra.
> - La AND prima della OR; la barra fa da parentesi.
> - Ogni operazione dell'espressione è una porta del circuito.

## Cinque coppie di leggi (libro, §11.2)

Con i numeri si sa che scambiando due addendi la somma non cambia, senza provare tutti i numeri: è una legge. Anche le operazioni sui bit hanno le loro leggi, e il libro ne sceglie cinque coppie. In ogni coppia c'è una legge per la OR e una per la AND.

> [!PROP] Le leggi delle operazioni sui bit (libro, §11.2, teorema 11.2.1)
> Per tutti i bit $a$, $b$, $c$:
>
> | Legge | Per la OR | Per la AND |
> |---|---|---|
> | associativa | $(a \vee b) \vee c = a \vee (b \vee c)$ | $(a \wedge b) \wedge c = a \wedge (b \wedge c)$ |
> | commutativa | $a \vee b = b \vee a$ | $a \wedge b = b \wedge a$ |
> | distributiva | $a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$ | $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$ |
> | identità | $a \vee 0 = a$ | $a \wedge 1 = a$ |
> | complemento | $a \vee \overline{a} = 1$ | $a \wedge \overline{a} = 0$ |

**Come si legge.** Associativa: in una fila di sole OR, o di sole AND, le parentesi non servono. Commutativa: i due ingressi di una porta si possono scambiare. Identità: lo 0 non cambia una OR, l'1 non cambia una AND. Complemento: un bit e il suo contrario, messi in OR, danno sempre 1; messi in AND, sempre 0. Il libro indica l'insieme dei due bit con $Z_2$.

La distributiva è quella da guardare bene. La versione per la AND somiglia a quella dei numeri, con la AND al posto del prodotto e la OR al posto della somma. La versione per la OR, con i numeri, è **falsa**: $2 + 3 \cdot 4 = 14$, mentre $(2 + 3) \cdot (2 + 4) = 30$. Con i bit è vera.

**Perché sono vere.** I bit sono due, quindi basta provare tutti i casi: due per le leggi con una lettera, quattro per quelle con due, otto per quelle con tre. Ecco la tabella della distributiva per la OR:

| $a$ | $b$ | $c$ | $b \wedge c$ | $a \vee (b \wedge c)$ | $a \vee b$ | $a \vee c$ | $(a \vee b) \wedge (a \vee c)$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | **0** | 0 | 0 | **0** |
| 0 | 0 | 1 | 0 | **0** | 0 | 1 | **0** |
| 0 | 1 | 0 | 0 | **0** | 1 | 0 | **0** |
| 0 | 1 | 1 | 1 | **1** | 1 | 1 | **1** |
| 1 | 0 | 0 | 0 | **1** | 1 | 1 | **1** |
| 1 | 0 | 1 | 0 | **1** | 1 | 1 | **1** |
| 1 | 1 | 0 | 0 | **1** | 1 | 1 | **1** |
| 1 | 1 | 1 | 1 | **1** | 1 | 1 | **1** |

Le due colonne in grassetto coincidono in tutte le righe. Con lo strumento puoi rifare la prova, e cambiare le formule per controllare le altre leggi.

```widget logica
titolo: La distributiva della OR sulla AND: le due formule hanno la stessa tavola
modo: equivalenza
a: a ∨ (b ∧ c)
b: (a ∨ b) ∧ (a ∨ c)
```

Sono le equivalenze logiche della [lezione 07](07_condizionali_equivalenza_logica.html), scritte con il segno di uguale e con 1 e 0 al posto di vero e falso.

::: prova Quale legge giustifica ogni uguaglianza? (a) $x \wedge (y \vee z) = (y \vee z) \wedge x$. (b) $(x \wedge y) \vee \overline{(x \wedge y)} = 1$. (c) $x \vee (y \wedge \overline{y}) = x \vee 0$.
(a) Commutativa della AND: i due ingressi scambiati sono $x$ e $y \vee z$. (b) Complemento, applicata al blocco $x \wedge y$: una legge vale anche quando al posto di una lettera c'è un'espressione intera. (c) Complemento della AND, dentro la parentesi.
:::

> [!RICORDA]
> - Cinque coppie: associativa, commutativa, distributiva, identità, complemento.
> - Le distributive sono due: anche la OR si distribuisce sulla AND.
> - Si dimostrano provando tutti i casi, perché i bit sono solo due.
> - Una legge si può applicare a un'espressione intera al posto di una lettera.

## Espressioni uguali, circuiti equivalenti

Due circuiti diversi possono fare lo stesso lavoro. Se uno dei due ha meno porte, costa meno, occupa meno spazio ed è più veloce: per questo interessa sapere quando due circuiti sono intercambiabili.

> [!DEF] Espressioni uguali e circuiti equivalenti (libro, §11.2, domande di ripasso 6 e 7)
> Due espressioni booleane sono **uguali** se hanno lo stesso valore per ogni assegnazione di bit alle variabili. Due circuiti combinatori sono **equivalenti** se, ogni volta che ricevono gli stessi ingressi, producono le stesse uscite.

**Come si legge.** «Uguali» non vuol dire scritte allo stesso modo: vuol dire stessa tabella. Lo stesso per i circuiti: possono avere porte diverse, in numero diverso. Le due definizioni dicono una cosa sola in due lingue, e il libro lo scrive come teorema (domanda di ripasso 8): due circuiti sono equivalenti **se e solo se** le loro espressioni sono uguali.

```grafico
titolo: Due circuiti equivalenti. A sinistra una OR seguita da una NOT; a destra due NOT seguite da una AND. Hanno porte diverse e la stessa tabella logica: è la legge di De Morgan
x: 0 12
y: 0.3 5.4
assi: no
griglia: no
proporzioni: libere
testo: 0.4 3.6 | grigio | "$x$"
testo: 0.4 2.4 | grigio | "$y$"
poligono: 1.55 2.5 2.85 2.5 2.85 3.5 1.55 3.5 | verde | tenue
testo: 2.2 3 | verde | "OR"
freccia: 0.75 3.6 1.5 3.25 | grigio
freccia: 0.75 2.4 1.5 2.75 | grigio
poligono: 3.55 2.5 4.85 2.5 4.85 3.5 3.55 3.5 | ambra | tenue
testo: 4.2 3 | ambra | "NOT"
freccia: 2.9 3.0 3.5 3.0 | grigio
freccia: 4.9 3.0 5.6 3.0 | grigio
testo: 3.0 1.2 | grigio | "$\overline{x \vee y}$"
testo: 3.0 4.95 | grigio | "due porte"
segmento: 6.0 0.4 6.0 5.2 | grigio | sottile
testo: 6.6 3.9 | grigio | "$x$"
testo: 6.6 2.1 | grigio | "$y$"
poligono: 7.55 3.45 8.85 3.45 8.85 4.35 7.55 4.35 | ambra | tenue
testo: 8.2 3.9 | ambra | "NOT"
poligono: 7.55 1.65 8.85 1.65 8.85 2.55 7.55 2.55 | ambra | tenue
testo: 8.2 2.1 | ambra | "NOT"
freccia: 6.95 3.9 7.5 3.9 | grigio
freccia: 6.95 2.1 7.5 2.1 | grigio
poligono: 9.65 2.5 10.95 2.5 10.95 3.5 9.65 3.5 | blu | tenue
testo: 10.3 3 | blu | "AND"
freccia: 8.9 3.9 9.6 3.25 | grigio
freccia: 8.9 2.1 9.6 2.75 | grigio
freccia: 11.0 3.0 11.7 3.0 | grigio
testo: 9.3 0.9 | grigio | "$\overline{x} \wedge \overline{y}$"
testo: 9.3 4.95 | grigio | "tre porte"
```

L'esempio più usato è una delle **leggi di De Morgan**: $\overline{x \vee y} = \overline{x} \wedge \overline{y}$. A sinistra una OR seguita da una NOT; a destra due NOT seguite da una AND.

| $x$ | $y$ | $x \vee y$ | $\overline{x \vee y}$ | $\overline{x}$ | $\overline{y}$ | $\overline{x} \wedge \overline{y}$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | **1** | 1 | 1 | **1** |
| 0 | 1 | 1 | **0** | 1 | 0 | **0** |
| 1 | 0 | 1 | **0** | 0 | 1 | **0** |
| 1 | 1 | 1 | **0** | 0 | 0 | **0** |

Le due colonne in grassetto sono uguali: le espressioni sono uguali e i circuiti equivalenti. Il primo ha due porte, il secondo tre.

> [!METODO] Decidere se due espressioni sono uguali
> **Per dire di sì** ci sono due strade:
>
> 1. la tabella completa, con le due colonne finali uguali in **tutte** le righe;
> 2. una catena di uguaglianze, in cui ogni passo applica una legge già nota.
>
> **Per dire di no** basta una riga: una scelta dei bit in cui le due espressioni danno valori diversi.

> [!ESEMPIO] Un «no» con una riga sola
> $x_1 \wedge (x_2 \vee x_3)$ e $(x_1 \wedge x_2) \vee x_3$ sono uguali? Provo con i valori 0, 0, 1. La prima dà $0 \wedge 1 = 0$. La seconda dà $0 \vee 1 = 1$. Non sono uguali: tra una AND e una OR le parentesi non si possono spostare.

> [!ESEMPIO] Esercizio 18 del §11.2 (dalla risposta ufficiale): un «sì» con una legge
> Due circuiti sono descritti dalle espressioni $(A \wedge B) \vee (A \wedge C)$ e $A \wedge (B \vee C)$. Sono equivalenti?
>
> Le due espressioni sono i due lati della distributiva della AND, la parte (c) del teorema 11.2.1. Quindi sono uguali, e i circuiti sono equivalenti. Il primo ha tre porte, il secondo due: la legge ha tolto una porta.

::: prova $\overline{x \wedge y}$ è uguale a $\overline{x} \wedge \overline{y}$? Se no, trova una riga in cui differiscono.
No. Con $x = 0$ e $y = 1$ la prima vale $\overline{0} = 1$ e la seconda $1 \wedge 0 = 0$. La legge di De Morgan giusta scambia anche l'operazione: $\overline{x \wedge y} = \overline{x} \vee \overline{y}$.
:::

> [!RICORDA]
> - Espressioni uguali: stessa tabella. Circuiti equivalenti: stesse uscite per gli stessi ingressi. È la stessa cosa.
> - Per il sì: tabella completa, o catena di leggi. Per il no: basta una riga.
> - De Morgan: la barra su una OR diventa una AND di barre, e viceversa.

## Dai bit alle algebre di Boole (libro, §11.3)

Le cinque coppie di leggi non sono una particolarità dei bit. Valgono identiche per le proposizioni, con «o», «e», «non» ([lezione 07](07_condizionali_equivalenza_logica.html)), e per gli insiemi, con unione, intersezione e complementare. Il libro dà allora un nome a **qualunque** sistema in cui valgono.

Cambia anche la scrittura, per non legarsi a un esempio: il segno $+$ al posto della OR, il punto al posto della AND, un apice al posto della barra.

> [!DEF] Algebra di Boole (libro, §11.3, domanda di ripasso 1)
> Un'**algebra di Boole** è fatta da un insieme $S$ che contiene due elementi distinti $0$ e $1$, da due operazioni binarie $+$ e $\cdot$ su $S$ e da un'operazione unaria $'$ su $S$, per cui valgono queste leggi, per tutti gli $x$, $y$, $z$ di $S$:
>
> | Legge | Per $+$ | Per $\cdot$ |
> |---|---|---|
> | associativa | $(x + y) + z = x + (y + z)$ | $(x \cdot y) \cdot z = x \cdot (y \cdot z)$ |
> | commutativa | $x + y = y + x$ | $x \cdot y = y \cdot x$ |
> | distributiva | $x + (y \cdot z) = (x + y) \cdot (x + z)$ | $x \cdot (y + z) = (x \cdot y) + (x \cdot z)$ |
> | identità | $x + 0 = x$ | $x \cdot 1 = x$ |
> | complemento | $x + x' = 1$ | $x \cdot x' = 0$ |

**Come si legge.** È un elenco di richieste. L'insieme può essere qualunque, e le tre operazioni pure: basta che rispettino le dieci leggi. «Operazione binaria su $S$» vuol dire che prende due elementi di $S$ e ne restituisce uno di $S$; «unaria», che ne prende uno. $0$ e $1$ sono i nomi di due elementi speciali, non per forza i numeri zero e uno. Come per il prodotto dei numeri, $x \cdot y$ si scrive anche $xy$, e il punto si fa prima del più.

> [!TRAPPOLA] Il segno + non è la somma
> Nell'algebra dei bit il più è la OR, quindi $1 + 1 = 1$. E la distributiva del più sul punto, $x + yz = (x + y)(x + z)$, con i numeri è falsa. I simboli sono presi in prestito dall'aritmetica; le leggi no.

I due esempi da conoscere:

| | I bit | I sottoinsiemi di un insieme $U$ |
|---|---|---|
| l'insieme $S$ | $Z_2 = \{0, 1\}$ | tutti i sottoinsiemi di $U$ |
| $x + y$ | $x \vee y$ | $X \cup Y$ |
| $x \cdot y$ | $x \wedge y$ | $X \cap Y$ |
| $x'$ | $\overline{x}$ | il complementare di $X$ in $U$ |
| l'elemento $0$ | il bit 0 | $\varnothing$ |
| l'elemento $1$ | il bit 1 | $U$ |

Per i bit le dieci leggi sono il teorema del paragrafo precedente. Per i sottoinsiemi sono proprietà note di unione e intersezione. L'identità dice $X \cup \varnothing = X$ e $X \cap U = X$. Il complemento dice che un insieme e il suo complementare, uniti, danno tutto $U$, e che non hanno elementi in comune.

```grafico
titolo: I quattro elementi dell'algebra di Boole dei sottoinsiemi di {a, b}. Ogni linea sale da un insieme a uno che lo contiene. In basso l'insieme vuoto, che fa da 0; in alto l'insieme intero, che fa da 1. I due elementi di mezzo sono uno il complemento dell'altro
x: 0 10
y: 0.2 5.3
assi: no
griglia: no
proporzioni: libere
testo: 5 0.7 | blu | "∅"
testo: 2.6 2.7 | blu | "{a}"
testo: 7.4 2.7 | blu | "{b}"
testo: 5 4.7 | blu | "{a, b}"
segmento: 4.7 1.0 2.9 2.35 | grigio
segmento: 5.3 1.0 7.1 2.35 | grigio
segmento: 2.9 3.05 4.5 4.35 | grigio
segmento: 7.1 3.05 5.5 4.35 | grigio
testo: 7.3 0.7 | ambra | "fa da 0"
testo: 7.8 4.7 | ambra | "fa da 1"
```

Il secondo esempio risponde a una domanda d'esame. La simulazione 2 del 2023/24 chiede: «Le algebre booleane sono definite solo su insiemi che contengono esattamente due elementi (come vero e falso)?» **No.** Con $U = \{a, b\}$ i sottoinsiemi sono quattro, e formano un'algebra di Boole con quattro elementi.

Il vantaggio della definizione: una proprietà ricavata usando **solo** le dieci leggi vale in tutte le algebre di Boole, senza rifare la dimostrazione per i bit, per gli insiemi e per le proposizioni. È il lavoro della [lezione 25](25_algebre_boole_deduzioni_equazionali.html).

::: prova Nell'algebra dei sottoinsiemi di $U = \{a, b\}$: quanto valgono $\{a\} + \{b\}$, $\{a\} \cdot \{b\}$ e $\{a\}'$? Quale legge dice che $\{a\} + \{a\}' = 1$?
$\{a\} + \{b\} = \{a, b\}$, che è l'elemento 1. $\{a\} \cdot \{b\} = \varnothing$, che è l'elemento 0. $\{a\}' = \{b\}$. L'ultima uguaglianza è la legge del complemento.
:::

> [!RICORDA]
> - Algebra di Boole: un insieme con $+$, $\cdot$, $'$, $0$, $1$ e le cinque coppie di leggi.
> - Esempi: i bit con OR, AND, NOT; i sottoinsiemi con unione, intersezione, complementare.
> - Un'algebra di Boole può avere più di due elementi.
> - Il più non è la somma: nei bit $1 + 1 = 1$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $x_1 \wedge x_2$ | «x uno e x due» | AND: 1 solo se tutti e due valgono 1 | $1 \wedge 0 = 0$ |
| $x_1 \vee x_2$ | «x uno o x due» | OR: 1 se almeno uno vale 1 | $1 \vee 0 = 1$ |
| $\overline{x}$ | «x negato» | NOT: scambia 0 e 1 | $\overline{0} = 1$ |
| $Z_2$ | «zeta due» | l'insieme dei due bit | $\{0, 1\}$ |
| $X_1 = X_2$ | «uguali» | due espressioni con la stessa tabella | $\overline{x \vee y} = \overline{x} \wedge \overline{y}$ |
| $x + y$ | «x più y» | l'operazione che fa da OR in un'algebra di Boole | nei bit $1 + 1 = 1$ |
| $x \cdot y$, $xy$ | «x per y» | l'operazione che fa da AND | negli insiemi $X \cap Y$ |
| $x'$ | «x primo» | il complemento di $x$ | nei bit $0' = 1$ |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Il quiz sul circuito**, presente nelle due simulazioni del 2023/24: dire se è combinatorio o sequenziale, e quali formule descrivono la funzione calcolata.
2. **Riconoscere due espressioni uguali**, con la tabella o con le leggi; in particolare De Morgan e le due distributive.
3. **La definizione di algebra di Boole**: che cosa chiede, e che non riguarda solo i due bit. Il quiz della simulazione 2 è svolto per intero nella lezione 25.

### Una domanda d'esame, letta insieme

**Simulazione d'esame 1 del 2023/24, quiz sul circuito.** Il circuito ha tre ingressi $A$, $B$, $C$. $C$ passa da una NOT. Una AND riceve $A$ e la NOT di $C$; un'altra AND riceve la NOT di $C$ e $B$. Le due AND entrano in una OR, che dà l'uscita $Y$. Tra le voci: «Il circuito è combinatorio», «Il circuito è sequenziale», e tre formule di cui dire se descrivono la funzione calcolata.

Nella [lezione 05](05_esercizi_circuiti_rappresentazioni.html) l'ho risolto con la tabella. Qui lo rifaccio con le leggi.

```grafico
titolo: Il circuito del quiz, ridisegnato. L'ingresso C passa dalla NOT e poi entra in tutte e due le AND; la OR raccoglie le due uscite. Nessun filo torna indietro
x: 0 12
y: 0.4 5.4
assi: no
griglia: no
proporzioni: libere
testo: 0.5 4.7 | grigio | "A"
testo: 0.5 2.9 | grigio | "C"
testo: 0.5 1.1 | grigio | "B"
poligono: 1.85 2.45 3.15 2.45 3.15 3.35 1.85 3.35 | ambra | tenue
testo: 2.5 2.9 | ambra | "NOT"
freccia: 0.9 2.9 1.8 2.9 | grigio
poligono: 4.95 3.85 6.25 3.85 6.25 4.75 4.95 4.75 | blu | tenue
testo: 5.6 4.3 | blu | "AND"
freccia: 0.9 4.7 4.9 4.5 | grigio
freccia: 3.2 3.05 4.9 4.1 | grigio
poligono: 4.95 1.05 6.25 1.05 6.25 1.95 4.95 1.95 | blu | tenue
testo: 5.6 1.5 | blu | "AND"
freccia: 3.2 2.75 4.9 1.7 | grigio
freccia: 0.9 1.1 4.9 1.3 | grigio
poligono: 7.95 2.45 9.25 2.45 9.25 3.35 7.95 3.35 | verde | tenue
testo: 8.6 2.9 | verde | "OR"
freccia: 6.3 4.3 7.9 3.15 | grigio
freccia: 6.3 1.5 7.9 2.65 | grigio
freccia: 9.3 2.9 10.6 2.9 | grigio
testo: 11.1 2.9 | grigio | "Y"
```

**In pratica chiede:** di scrivere l'espressione del circuito e di confrontarla con le tre formule.

> [!ESEMPIO] · la soluzione, voce per voce
> **Combinatorio o sequenziale.** Tutti i fili vanno dagli ingressi verso l'uscita, nessuno torna indietro: è combinatorio, non sequenziale.
>
> **L'espressione del circuito.** Seguendo i fili: $Y = (A \wedge \overline{C}) \vee (\overline{C} \wedge B)$.
>
> **La formula $(\neg C \wedge A) \vee (\neg C \wedge B)$.** È l'espressione del circuito, con i due ingressi della prima AND scambiati: legge commutativa. Sì.
>
> **La formula $\neg((C \vee \neg A) \wedge (C \vee \neg B))$.** Porto dentro la negazione con De Morgan, un passo per riga:
>
> $$\overline{(C \vee \overline{A}) \wedge (C \vee \overline{B})} = \overline{C \vee \overline{A}} \vee \overline{C \vee \overline{B}}$$
>
> $$= (\overline{C} \wedge \overline{\overline{A}}) \vee (\overline{C} \wedge \overline{\overline{B}})$$
>
> $$= (\overline{C} \wedge A) \vee (\overline{C} \wedge B)$$
>
> Primo passo: la barra su una AND diventa una OR di barre. Secondo: la barra su ogni OR diventa una AND di barre. Terzo: due barre una sopra l'altra si cancellano, perché negare due volte un bit lo lascia com'era. È la formula di prima. Sì.
>
> **La formula $(\neg C \vee A) \wedge (\neg C \vee B)$.** Somiglia alla prima con AND e OR scambiate, e basta una riga per scartarla. Con i tre ingressi a 0 il circuito dà 0, perché le due AND ricevono uno 0. La formula dà $(1 \vee 0) \wedge (1 \vee 0) = 1$. No.
>
> Le risposte tornano con quelle della lezione 05, trovate con la tabella.

**Un circuito più piccolo.** La distributiva della AND, letta da destra a sinistra, raccoglie il pezzo comune: $Y = \overline{C} \wedge (A \vee B)$. Tre porte al posto di quattro, con la stessa tabella.

> [!METODO] Un quiz su un circuito
> 1. Cerca un filo che torna indietro. Non c'è: combinatorio. C'è: sequenziale.
> 2. Scrivi l'espressione seguendo i fili, un'operazione per porta.
> 3. Una formula uguale alla tua a meno di scambi è la stessa, per la commutativa.
> 4. Una formula con una negazione davanti a una parentesi: porta dentro la negazione con De Morgan.
> 5. Una formula che sembra diversa: cerca una riga che la smentisca, cominciando da tutti 0 e tutti 1.
> 6. In caso di dubbio la tabella completa decide sempre.

### Errori da evitare

- Dire «sequenziale» solo perché il circuito ha molte porte: conta il filo che torna indietro.
- Applicare De Morgan senza scambiare l'operazione: $\overline{x \vee y}$ non è $\overline{x} \vee \overline{y}$.
- Spostare le parentesi tra una AND e una OR: la legge associativa vale solo tra operazioni dello stesso tipo.
- Dimenticare la seconda distributiva, quella della OR sulla AND.
- Concludere che due espressioni sono uguali dopo aver provato solo alcune righe.
- Leggere il più come la somma dei numeri: nei bit $1 + 1 = 1$.
- Pensare che un'algebra di Boole abbia sempre due elementi.

## Quiz

```quiz
D: Simulazione d'esame 1 del 2023/24, quiz sul circuito. Il circuito calcola $Y = (A \wedge \overline{C}) \vee (\overline{C} \wedge B)$. Quale formula NON descrive la funzione calcolata?
+ $(\neg C \vee A) \wedge (\neg C \vee B)$
- $(\neg C \wedge A) \vee (\neg C \wedge B)$
- $\neg((C \vee \neg A) \wedge (C \vee \neg B))$
- $\neg C \wedge (A \vee B)$
- $(B \wedge \neg C) \vee (A \wedge \neg C)$
= Con i tre ingressi a 0 il circuito dà 0 e $(\neg C \vee A) \wedge (\neg C \vee B)$ dà 1. La più insidiosa è $\neg((C \vee \neg A) \wedge (C \vee \neg B))$: sembra un'altra cosa, ma con De Morgan diventa l'espressione del circuito.

D: Quale affermazione descrive un circuito combinatorio?
+ a ingressi uguali dà sempre la stessa uscita, perché l'uscita dipende solo dagli ingressi
- contiene solo porte AND e OR, senza porte NOT
- ha almeno un filo che riporta l'uscita in ingresso
- la sua uscita dipende dagli ingressi e dallo stato in cui si trova
- ha esattamente due ingressi e un'uscita
= È la definizione del libro: l'uscita è definita in modo unico per ogni combinazione degli ingressi. La più insidiosa è «la sua uscita dipende dagli ingressi e dallo stato in cui si trova»: è la definizione di circuito sequenziale.

D: Quante righe ha la tabella logica di un circuito combinatorio con 5 ingressi?
N: 32
= Ogni ingresso raddoppia le righe: $2^5 = 32$.

D: Quanto vale $(x_1 \wedge \overline{x_2}) \vee x_3$ con $x_1 = 1$, $x_2 = 1$, $x_3 = 0$?
N: 0
= $\overline{x_2} = 0$, quindi $1 \wedge 0 = 0$, e $0 \vee 0 = 0$.

D: Quale di queste uguaglianze tra espressioni booleane è FALSA?
+ $x \wedge (y \vee z) = (x \wedge y) \vee z$
- $x \vee (y \wedge z) = (x \vee y) \wedge (x \vee z)$
- $\overline{x \vee y} = \overline{x} \wedge \overline{y}$
- $x \wedge (y \vee z) = (x \wedge y) \vee (x \wedge z)$
- $x \vee \overline{x} = 1$
= Con $x = 0$, $y = 0$, $z = 1$ il lato sinistro di $x \wedge (y \vee z) = (x \wedge y) \vee z$ vale 0 e il destro 1. La più insidiosa è $x \vee (y \wedge z) = (x \vee y) \wedge (x \vee z)$: con i numeri sarebbe falsa, con i bit è la seconda legge distributiva.

D: Quale legge giustifica $\overline{y} \wedge (x \vee z) = (\overline{y} \wedge x) \vee (\overline{y} \wedge z)$?
+ distributiva
- associativa
- commutativa
- complemento
- De Morgan
= La AND con $\overline{y}$ viene distribuita sui due pezzi della OR. La più insidiosa è «De Morgan»: la barra c'è, ma resta ferma sulla $y$ da tutte e due le parti.

D: Simulazione d'esame 2 del 2023/24, prima voce del quiz sulle algebre booleane: «Le algebre booleane sono definite solo su insiemi che contengono esattamente due elementi (come vero e falso)?»
+ No: per esempio i sottoinsiemi di un insieme con due elementi ne formano una con quattro elementi
- Sì: gli elementi sono solo 0 e 1
- Sì: altrimenti non varrebbero le leggi del complemento
- No: ma devono avere un numero dispari di elementi
- No: l'insieme può anche avere un elemento solo
= La definizione chiede due elementi distinti 0 e 1 e le dieci leggi: l'insieme può averne altri. La più insidiosa è «No: l'insieme può anche avere un elemento solo»: 0 e 1 devono essere distinti, quindi gli elementi sono almeno due.

D: Nell'algebra di Boole dei sottoinsiemi di $U = \{1, 2, 3\}$, quanto vale $\{1, 2\} \cdot \{2, 3\}'$?
+ $\{1\}$
- $\{2\}$
- $\{1, 2, 3\}$
- $\varnothing$
- $\{1, 3\}$
= L'apice è il complementare: $\{2, 3\}' = \{1\}$. Il punto è l'intersezione: $\{1, 2\} \cap \{1\} = \{1\}$. La più insidiosa è $\{2\}$: è $\{1, 2\} \cdot \{2, 3\}$, senza il complementare.
```

## Esercizi

::: esercizio base Riscaldamento: calcolare con le tre porte
Calcola: (a) $\overline{1 \vee 0}$; (b) $\overline{1} \vee 0$; (c) $(1 \wedge 0) \vee \overline{0}$; (d) $1 \wedge \overline{(0 \vee 0)}$.
::: soluzione
(a) $1 \vee 0 = 1$, negato: 0. (b) $0 \vee 0 = 0$. (c) $0 \vee 1 = 1$. (d) $0 \vee 0 = 0$, negato dà 1, e $1 \wedge 1 = 1$.
:::

::: esercizio base Riscaldamento: è un'espressione booleana?
Quali di queste scritture sono espressioni booleane nelle variabili $x_1$, $x_2$? (a) $x_1 \wedge (\overline{x_2} \vee 1)$; (b) $x_1 \vee \wedge\, x_2$; (c) $\overline{\overline{x_1}}$; (d) $(x_1\, \wedge)\, x_2$.
::: soluzione
(a) Sì: la variabile, poi la barra, poi la OR con la costante 1, le parentesi, la AND. (b) No: due operazioni di seguito. (c) Sì: la regola della barra applicata due volte. (d) No: la AND dentro la parentesi ha un solo argomento.
:::

::: esercizio base Riscaldamento: dal circuito all'espressione
Un circuito ha ingressi $x$, $y$, $z$. Una OR riceve $x$ e $y$; una NOT riceve $z$; una AND riceve le loro due uscite. Scrivi l'espressione, e calcolala per $x = 0$, $y = 1$, $z = 0$.
::: soluzione
$(x \vee y) \wedge \overline{z}$. Con quei valori: $0 \vee 1 = 1$, $\overline{0} = 1$, $1 \wedge 1 = 1$.
:::

::: esercizio base Riscaldamento: dare un nome alle leggi
Quale legge è? (a) $x \vee 0 = x$; (b) $(x \wedge y) \wedge z = x \wedge (y \wedge z)$; (c) $x \wedge \overline{x} = 0$; (d) $x \vee (y \wedge z) = (x \vee y) \wedge (x \vee z)$.
::: soluzione
(a) Identità. (b) Associativa. (c) Complemento. (d) Distributiva, quella della OR sulla AND.
:::

::: esercizio medio La tabella di un'espressione (autoverifica del capitolo 11, domanda 1)
La risposta ufficiale è una tabella con uscita 0 in una riga sola, quella con $x = 1$, $y = 0$, $z = 0$. Il testo non ce l'ho; la tabella torna con l'espressione $\overline{(x \wedge \overline{y})} \vee z$. Scrivi la tabella di questa espressione e controlla.
::: soluzione
$x \wedge \overline{y}$ vale 1 solo quando $x = 1$ e $y = 0$; negato, vale 0 solo lì. La OR con $z$ lascia lo 0 solo se anche $z = 0$. Quindi l'uscita è 0 nella riga 1, 0, 0 e 1 nelle altre sette.

| $x$ | $y$ | $z$ | $x \wedge \overline{y}$ | negato | uscita |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 | 1 |
:::

::: esercizio medio Uguali o no?
Per ogni coppia di' se le espressioni sono uguali. Se sì, indica le leggi; se no, una riga in cui differiscono. (a) $x \vee (y \wedge z)$ e $(x \vee y) \wedge z$; (b) $(x \wedge y) \vee (x \wedge \overline{y})$ e $x$; (c) $\overline{x \wedge y}$ e $\overline{x} \vee \overline{y}$.
::: soluzione
**(a)** No. Con $x = 1$, $y = 0$, $z = 0$ la prima dà 1 e la seconda 0. **(b)** Sì. Distributiva letta al contrario: $x \wedge (y \vee \overline{y})$. Poi complemento: $x \wedge 1$. Poi identità: $x$. **(c)** Sì: è l'altra legge di De Morgan. Con la tabella: $\overline{x \wedge y}$ vale 0 solo quando $x = y = 1$, e $\overline{x} \vee \overline{y}$ pure.
:::

::: esercizio esame Un quiz sul circuito, come nelle simulazioni
Un circuito ha ingressi $A$ e $B$. Una NOT riceve $A$, un'altra NOT riceve $B$; una OR riceve le due uscite; una terza NOT riceve l'uscita della OR e dà $Y$. (a) È combinatorio? (b) Scrivi l'espressione. (c) Quale porta, da sola, fa lo stesso lavoro?
::: soluzione
**(a)** Sì: nessun filo torna indietro. **(b)** $Y = \overline{\overline{A} \vee \overline{B}}$. **(c)** Con De Morgan la barra sulla OR diventa una AND di barre: $\overline{\overline{A}} \wedge \overline{\overline{B}}$. Le doppie barre si cancellano: $A \wedge B$. Basta una porta AND al posto di quattro porte.
:::

::: esercizio esame I sottoinsiemi come algebra di Boole (autoverifica del capitolo 11, domanda 4)
Sia $U$ un insieme e $S$ l'insieme di tutti i suoi sottoinsiemi, con l'unione come $+$, l'intersezione come $\cdot$, il complementare come $'$, $\varnothing$ come 0 e $U$ come 1. Scrivi in questa algebra le leggi dell'identità e del complemento. Poi scrivi le uguaglianze $x + 1 = 1$ e $x \cdot 0 = 0$, e di' se sono vere.
::: soluzione
Identità: $X \cup \varnothing = X$ e $X \cap U = X$. Complemento: $X \cup X' = U$ e $X \cap X' = \varnothing$. Le altre due diventano $X \cup U = U$ e $X \cap \varnothing = \varnothing$: vere per ogni sottoinsieme. Il libro le chiama *bound laws* e le ricava dalle dieci leggi ([lezione 25](25_algebre_boole_deduzioni_equazionali.html)); la risposta ufficiale alla domanda 4 le scrive proprio così.
:::

::: esercizio difficile Un'algebra di Boole fatta di divisori (libro, §11.3, esercizio 2)
Sull'insieme $S = \{1, 2, 3, 6\}$ dei divisori di 6 definisci $x + y$ come il minimo comune multiplo, $x \cdot y$ come il massimo comun divisore, e $x' = 6 / x$. Chi fa da $0$ e chi da $1$? Controlla le leggi dell'identità e del complemento.
::: soluzione
Fa da $0$ il numero 1, e fa da $1$ il numero 6. **Identità**: il mcm di $x$ e 1 è $x$; il MCD di $x$ e 6 è $x$, perché $x$ divide 6. **Complemento**: il mcm di $x$ e $6/x$ è 6, e il loro MCD è 1. Per esempio $2' = 3$: mcm 6, MCD 1. La risposta ufficiale aggiunge che associativa e distributiva si controllano direttamente; la commutativa vale perché mcm e MCD non dipendono dall'ordine. È un'algebra di Boole con quattro elementi, in cui l'elemento «zero» è il numero 1.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra un circuito combinatorio e uno sequenziale?
Nel combinatorio l'uscita è decisa solo dagli ingressi di quel momento. Nel sequenziale dipende anche dallo stato, cioè da quello che è successo prima.
:::

::: domanda Che cos'è la tabella logica di un circuito?
L'elenco di tutte le combinazioni degli ingressi, ognuna con la sua uscita. Con $n$ ingressi ha $2^n$ righe.
:::

::: domanda Come sono definite le espressioni booleane?
In modo ricorsivo: lo sono le costanti 0 e 1 e le variabili; e da espressioni già fatte se ne ottengono altre con le parentesi, la barra, la OR e la AND.
:::

::: domanda Quali sono le cinque coppie di leggi delle operazioni sui bit?
Associativa, commutativa, distributiva, identità, complemento. Ognuna ha una versione per la OR e una per la AND.
:::

::: domanda Quando due espressioni booleane sono uguali?
Quando hanno lo stesso valore per ogni scelta dei bit, cioè la stessa tabella.
:::

::: domanda Come si mostra che due espressioni non sono uguali?
Con una riga sola: una scelta dei bit in cui danno valori diversi.
:::

::: domanda Che cos'è un'algebra di Boole?
Un insieme con due elementi distinti 0 e 1, due operazioni binarie e un'operazione unaria, che rispettano le leggi associativa, commutativa, distributiva, dell'identità e del complemento.
:::

::: domanda Fai due esempi di algebra di Boole.
I due bit con OR, AND e NOT. I sottoinsiemi di un insieme con unione, intersezione e complementare, dove l'insieme vuoto fa da 0 e l'insieme intero fa da 1.
:::

## Glossario

```glossario
Circuito combinatorio | Circuito in cui l'uscita è definita in modo unico per ogni combinazione degli ingressi.
Circuito sequenziale | Circuito in cui l'uscita dipende dagli ingressi e dallo stato del sistema.
Porta | Circuito elementare che esegue AND, OR o NOT.
Invertitore | Un altro nome della porta NOT.
Tabella logica | Elenco di tutte le combinazioni degli ingressi di un circuito con le uscite.
Espressione booleana | Formula costruita con 0, 1, variabili, parentesi, barra, OR e AND.
Letterale | Una variabile, con o senza barra.
Espressioni uguali | Espressioni booleane con lo stesso valore per ogni scelta dei bit.
Circuiti equivalenti | Circuiti che a ingressi uguali danno uscite uguali.
Leggi di De Morgan | La negazione di una OR è la AND delle negazioni, e viceversa.
Algebra di Boole | Insieme con due operazioni, un complemento, uno 0 e un 1 che rispettano le cinque coppie di leggi.
```

## Checklist

```checklist
- So dire che cosa distingue un circuito combinatorio da uno sequenziale.
- So scrivere la tabella logica di un circuito, una colonna per porta.
- So spiegare perché un filo che torna indietro può rendere l'uscita non definita.
- So riconoscere un'espressione booleana e contare i suoi letterali.
- So passare da un circuito alla sua espressione e viceversa.
- So enunciare le cinque coppie di leggi, comprese le due distributive.
- So dimostrare una legge con la tabella.
- So decidere se due espressioni sono uguali, con la tabella, con le leggi o con una riga che le distingue.
- So usare De Morgan per portare dentro una negazione.
- So dire che cos'è un'algebra di Boole e fare i due esempi principali.
- So tradurre una legge dall'algebra dei bit a quella dei sottoinsiemi.
```

## Fonti

- Diario delle lezioni del canale B (Berardi), lezione 25 del docente, 26/11/2026: «Sezione 11.1 e 11.2: circuiti combinatori e loro proprietà. Sezione 11.3: Algebre di Boole.»
- Johnsonbaugh, parte 2 del libro di testo, §11.1, §11.2 e §11.3: risposte ufficiali alle domande di ripasso, agli esercizi 7 e 16 del §11.1, 18 del §11.2 e 2 del §11.3, e all'autoverifica del capitolo 11 (domande 1 e 4), nell'appendice «Soluzioni di altri esercizi del testo» (Moodle del canale A, aperto agli ospiti). Il libro non ce l'ho: i testi degli esercizi citati sono ricostruiti dalle risposte.
- Simulazione d'esame 1 del 2023/24, quiz sul circuito combinatorio, e simulazione d'esame 2 del 2023/24, quiz sulle algebre booleane (dalle copie compilate da uno studente, ricontrollate).
- Per le porte e i quiz sui circuiti: lezioni [01](01_bit_porte_esadecimale.html) e [05](05_esercizi_circuiti_rappresentazioni.html).
- Gli esempi senza altra indicazione, i disegni, i quiz e gli esercizi sono di questi appunti; le tabelle le ho ricontrollate con un programma.
