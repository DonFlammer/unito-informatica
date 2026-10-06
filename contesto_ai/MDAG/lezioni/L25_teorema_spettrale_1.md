---
corso: MDAG
modulo: AG
lezione: L25
titolo: Teorema spettrale I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L25
descrizione: >-
  Appunti della lezione L25 di Algebra lineare e Geometria (MDAG, parte 2): prodotti hermitiani sugli spazi complessi,
  matrici hermitiane, matrice associata, endomorfismi autoaggiunti e sottospazi invarianti, con quiz nello stile
  dell'esame ed esercizi svolti.
lede: >-
  Come si misurano le lunghezze quando i vettori sono fatti di numeri complessi: il prodotto scalare non basta più e
  va corretto. Poi due personaggi che vanno d'accordo con il prodotto nuovo: le matrici hermitiane e le applicazioni
  autoaggiunte. Sono gli attrezzi del teorema spettrale della prossima lezione, e nel quiz dell'esame compaiono spesso.
materiale: dispense
scheda:
  Dispense: lezione 25 · pp. 129–133
  Libro: Martelli, §11.1 e §11.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 25 «Teorema spettrale I»; B. Martelli, Geometria e algebra lineare, §11.1–11.2
appunti_html: appunti/MDAG/L25_teorema_spettrale_1.html
genera_html: true
---

## In breve

- I vettori di questa lezione sono liste di **numeri complessi**, cioè numeri con la $i$, il numero per cui $i \cdot i = -1$. Con loro il prodotto scalare delle lezioni L19–L21 non misura più le lunghezze: serve un prodotto nuovo.
- Il prodotto nuovo si chiama **prodotto hermitiano**. È quello di prima con una correzione: ai numeri del secondo vettore si cambia il segno davanti alla $i$. Questa operazione si chiama **coniugare**. Così la lunghezza di un vettore torna a essere un numero reale e positivo.
- Un prodotto hermitiano ha tre regole. La più importante: se scambi i due vettori, il risultato si coniuga. Una conseguenza: un numero che moltiplica il secondo vettore esce dal prodotto coniugato.
- Una **matrice hermitiana** è una tabella quadrata in cui la diagonale è fatta di numeri reali e ogni altro numero è il coniugato del suo «specchio» dall'altra parte della diagonale. Se tutti i numeri sono reali, è una matrice simmetrica.
- Un'applicazione lineare, cioè una macchina che trasforma vettori in vettori, è **autoaggiunta** quando dentro il prodotto si può spostare da un vettore all'altro senza cambiare il risultato. Si riconosce dalla matrice: simmetrica con i numeri reali, hermitiana con i complessi.
- Un **sottospazio invariante** è una stanza da cui la macchina non fa uscire nessun vettore. Se la macchina è autoaggiunta e una stanza è invariante, lo è anche la stanza di tutti i vettori perpendicolari alla prima.
- **All'esame** questa lezione vale di solito una domanda del quiz: c'è in 9 dei 15 appelli dal 2024 al 2026. Si chiede di riconoscere un prodotto hermitiano, una matrice hermitiana o un'applicazione autoaggiunta. Il metodo è sempre «guarda la matrice».

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Misurare i vettori complessi: che cosa si rompe (p. 129)

Fin qui i vettori erano liste di numeri reali, e per misurarli bastava il prodotto scalare. In questa sezione ripassiamo quel prodotto e i numeri complessi. Poi guardiamo che cosa va storto quando si mettono insieme, e come si rimedia.

### Da dove partiamo: il conto della spesa

Al mercato compri 2 chili di mele e 1 chilo di pere. Le mele costano 3 euro al chilo, le pere 4. Quanto spendi?

$$2 \cdot 3 + 1 \cdot 4 = 6 + 4 = 10$$

Hai messo in fila le quantità, 2 e 1, e i prezzi, 3 e 4. Hai moltiplicato i numeri nello stesso posto e hai sommato. Questo conto si chiama **prodotto scalare** (lezione L19): da due liste di numeri tira fuori un numero solo.

> [!RIPASSO] prodotto scalare, lunghezza, perpendicolari (lezioni L19–L21)
> Un **vettore** è una lista di numeri, per esempio $(3, 4)$. Puoi leggerlo come uno spostamento su una mappa a quadretti: 3 passi a destra e 4 in su.
>
> Il **prodotto scalare** di due vettori si scrive con due parentesi a punta, $\langle v, w \rangle$, e si legge «prodotto di $v$ e $w$». Si moltiplicano i numeri nello stesso posto e si somma:
> $$\langle (1, 2), (3, 4) \rangle = 1 \cdot 3 + 2 \cdot 4 = 11.$$
>
> La **lunghezza** di un vettore si trova in due passi. Primo passo: il prodotto del vettore con sé stesso. Secondo passo: la radice quadrata.
> $$\langle (3, 4), (3, 4) \rangle = 3 \cdot 3 + 4 \cdot 4 = 25, \qquad \sqrt{25} = 5.$$
> È il teorema di Pitagora: 3 passi a destra e 4 in su ti portano a 5 passi dal punto di partenza.
>
> Due vettori sono **perpendicolari** quando il loro prodotto scalare fa 0:
> $$\langle (1, 2), (2, -1) \rangle = 1 \cdot 2 + 2 \cdot (-1) = 0.$$

La cosa da tenere a mente è questa: **la lunghezza viene dal prodotto di un vettore con sé stesso.** Se quel prodotto dà un numero strano, la lunghezza non ha più senso.

### I numeri complessi, in breve

> [!RIPASSO] i numeri complessi (lezione L02)
> Nessun numero reale, moltiplicato per sé stesso, dà un risultato negativo: $2 \cdot 2 = 4$, e anche $(-2) \cdot (-2) = 4$. Per questo si aggiunge un numero nuovo, che si chiama $i$, con questa proprietà:
> $$i \cdot i = -1.$$
> La scrittura $i^2$ vuol dire $i \cdot i$. Quindi $i^2 = -1$.
>
> Un **numero complesso** è un numero reale più un multiplo di $i$. Per esempio $3 + 2i$: il 3 è la **parte reale**, il 2 è la **parte immaginaria**. Puoi pensarlo come un punto su un foglio a quadretti: 3 passi a destra e 2 in su.
>
> I numeri reali sono numeri complessi senza la parte con la $i$: per esempio $5 = 5 + 0i$.
>
> I conti si fanno come con una lettera qualsiasi. In più, ogni volta che compare $i \cdot i$, al suo posto scrivi $-1$:
> $$i \cdot (1 - i) = i - i \cdot i = i - (-1) = 1 + i.$$
>
> L'insieme di tutti i numeri complessi si indica con $\C$ e si legge «ci». L'insieme dei numeri reali si indica con $\R$ e si legge «erre».

### Il coniugato: cambiare il segno davanti alla i

Prendi un numero complesso e cambia il segno davanti alla $i$. Il numero che ottieni si chiama **coniugato** del primo.

| Numero | Il suo coniugato | Che cosa è successo |
|---|---|---|
| $3 + 2i$ | $3 - 2i$ | il più davanti a $2i$ è diventato meno |
| $1 - i$ | $1 + i$ | il meno è diventato più |
| $i$ | $-i$ | c'è solo la parte con la $i$, e cambia segno |
| $-2i$ | $2i$ | come sopra |
| $5$ | $5$ | non c'è nessuna $i$: niente da cambiare |

Il coniugato si scrive con una lineetta sopra. Se il numero si chiama $z$, il suo coniugato è $\bar z$ e si legge «zeta coniugato». Quando sotto c'è un'espressione lunga, la lineetta la copre tutta:

$$\overline{3 + 2i} = 3 - 2i$$

L'ultima riga della tabella dice una cosa importante: **un numero reale è uguale al suo coniugato**. Vale anche il contrario. Se un numero è uguale al suo coniugato, la parte con la $i$ deve essere zero, quindi il numero è reale.

Guarda la figura: sul foglio a quadretti il coniugato è l'immagine allo specchio. Lo specchio è la riga orizzontale.

```grafico
titolo: Il coniugato è l'immagine allo specchio rispetto alla riga orizzontale: $3 + 2i$ diventa $3 - 2i$
x: -1 5
y: -3 3
nomi: reale immaginaria
segmento: 3 2 3 -2 | grigio | tratteggio
vettore: 3 2 | accento | $z = 3 + 2i$ | ne
vettore: 3 -2 | viola | $\bar z = 3 - 2i$ | se
```

### Un numero per il suo coniugato

Ecco il fatto su cui si regge tutta la lezione. Moltiplichiamo un numero complesso per il suo coniugato:

$$(3 + 2i) \cdot (3 - 2i)$$

Si moltiplica ogni pezzo della prima parentesi per ogni pezzo della seconda. I pezzi sono quattro.

| Pezzo | Conto | Risultato |
|---|---|---|
| $3 \cdot 3$ | | $9$ |
| $3 \cdot (-2i)$ | | $-6i$ |
| $2i \cdot 3$ | | $6i$ |
| $2i \cdot (-2i)$ | $-4 \cdot i \cdot i = -4 \cdot (-1)$ | $4$ |

La somma dei quattro pezzi:

$$9 - 6i + 6i + 4 = 13$$

I due pezzi con la $i$ si cancellano. Resta $9 + 4$: il quadrato della parte reale più il quadrato della parte immaginaria. Succede con ogni numero complesso, non solo con questo.

> [!IDEA]
> Un numero complesso per il suo coniugato dà sempre un numero **reale** e **mai negativo**. Dà zero solo quando il numero di partenza è zero.

Questo risultato ha un significato sul foglio a quadretti. Il punto $3 + 2i$ sta 3 passi a destra e 2 in su. Per il teorema di Pitagora, $9 + 4 = 13$ è il quadrato della sua distanza dal punto di partenza.

La distanza di un numero complesso dal punto di partenza si chiama **modulo**. Si scrive con due barre verticali: $\lvert z \rvert$ si legge «modulo di zeta». Il fatto di prima diventa:

$$z \cdot \bar z = \lvert z \rvert^2$$

A parole: un numero per il suo coniugato è il quadrato del suo modulo. Un esempio: il modulo di $3 + 4i$ è 5, perché $9 + 16 = 25$ e la radice di 25 è 5.

Servono ancora quattro regole sul coniugato. Le controlliamo con due numeri: $z = i$ e $w = 1 + i$. I loro coniugati sono $-i$ e $1 - i$.

| Regola a parole | Con i simboli | Controllo con i numeri |
|---|---|---|
| il coniugato di una somma è la somma dei coniugati | $\overline{z + w} = \bar z + \bar w$ | la somma è $1 + 2i$, con coniugato $1 - 2i$; e $-i + (1 - i) = 1 - 2i$ |
| il coniugato di un prodotto è il prodotto dei coniugati | $\overline{z w} = \bar z\, \bar w$ | il prodotto è $i \cdot (1 + i) = -1 + i$, con coniugato $-1 - i$; e $-i \cdot (1 - i) = -1 - i$ |
| coniugare due volte riporta al numero di partenza | $\bar{\bar z} = z$ | da $i$ a $-i$, e poi di nuovo a $i$ |
| un numero è reale esattamente quando è uguale al suo coniugato | $z = \bar z$ | $\bar 5 = 5$, mentre $\bar i = -i$ |

### Vettori fatti di numeri complessi

Un vettore può contenere numeri complessi al posto dei numeri reali. Tre esempi:

$$(1, i) \qquad (2,\ 1 + i) \qquad (i, 0)$$

Ognuno è una lista di due numeri complessi. L'insieme di tutte le liste di due numeri complessi si scrive $\C^2$ e si legge «ci due». Con tre numeri si scrive $\C^3$. Con $n$ numeri si scrive $\C^n$, «ci alla enne».

Per dire che un vettore è una di quelle liste si usa il simbolo $\in$, che si legge «appartiene a». La scrittura $(1, i) \in \C^2$ vuol dire: il vettore $(1, i)$ è una lista di due numeri complessi.

I numeri di un vettore si indicano con un numerino in basso. Se il vettore si chiama $x$, il suo primo numero è $x_1$ («ics uno») e il secondo è $x_2$ («ics due»). Per $x = (1, i)$ vale $x_1 = 1$ e $x_2 = i$.

Qui l'immagine dello spostamento sulla mappa non regge più. Un solo numero complesso occupa già un foglio intero, e un vettore di $\C^2$ ne contiene due. Non si può disegnare come una freccia. Resta l'altra immagine: una lista di numeri. I conti si fanno come prima: si somma posto per posto, e si moltiplica ogni numero della lista per lo stesso numero.

### Il vecchio conto dà lunghezze impossibili

Proviamo a misurare il vettore $(1, i)$ con il conto della spesa. Per la lunghezza serve il prodotto del vettore con sé stesso:

$$1 \cdot 1 + i \cdot i = 1 + (-1) = 0$$

Il vettore non è fatto di soli zeri, eppure il conto dà 0. Sarebbe un vettore diverso da zero ma lungo zero.

Con il vettore $(i, 0)$ va peggio:

$$i \cdot i + 0 \cdot 0 = -1$$

Qui il conto dà un numero negativo. La lunghezza sarebbe la radice quadrata di $-1$, che non è un numero reale.

Una lunghezza deve essere un numero reale. E deve essere positiva per ogni vettore che non è fatto di soli zeri. Con i numeri complessi il vecchio conto non lo garantisce.

### La correzione: coniugare il secondo vettore

Il rimedio lo abbiamo già in mano. Un numero complesso per sé stesso può dare un risultato negativo: $i \cdot i = -1$. Un numero complesso per **il suo coniugato** dà sempre un numero reale mai negativo: $i \cdot (-i) = 1$.

Quindi, nel prodotto di un vettore con sé stesso, moltiplichiamo ogni numero per il suo coniugato. Rifacciamo i due conti.

Per il vettore $(1, i)$:

$$1 \cdot \bar 1 + i \cdot \bar i = 1 \cdot 1 + i \cdot (-i) = 1 + 1 = 2$$

Per il vettore $(i, 0)$:

$$i \cdot \bar i + 0 \cdot \bar 0 = i \cdot (-i) + 0 = 1$$

Adesso i risultati sono reali e positivi. Il primo vettore è lungo $\sqrt 2$, il secondo è lungo 1.

Per il prodotto di due vettori **diversi** la regola è la stessa. Si moltiplicano i numeri del primo vettore per i coniugati dei numeri del secondo, e poi si somma.

> [!ESEMPIO] Il prodotto nuovo di $(1, i)$ e $(2,\ 1 + i)$
> Vogliamo il prodotto del primo vettore con il secondo, fatto con la regola nuova.
>
> 1. Coniugo i numeri del secondo vettore. Il coniugato di $2$ è $2$. Il coniugato di $1 + i$ è $1 - i$.
> 2. Primo posto: $1 \cdot 2 = 2$.
> 3. Secondo posto: $i \cdot (1 - i) = i - i \cdot i = i + 1$.
> 4. Sommo: $2 + i + 1 = 3 + i$.
>
> Il prodotto è $3 + i$. Non è un numero reale, e va bene così: succede quando i due vettori sono diversi. Quello che conta è che il prodotto di un vettore **con sé stesso** sia reale e positivo.

> [!IDEA]
> Con i vettori complessi il prodotto si fa così: i numeri del primo vettore per i **coniugati** dei numeri del secondo, e poi si somma. Il coniugato serve a far venire la lunghezza un numero reale e positivo.

Questo prodotto si chiama **prodotto hermitiano euclideo**. La parola «hermitiano» viene da Charles Hermite, un matematico francese dell'Ottocento, e la h non si pronuncia. Nelle prossime due sezioni lo guardiamo con calma: prima le regole generali, poi i conti.

::: prova Scrivi il coniugato di $2 - 5i$, di $4$ e di $-i$.
Si cambia il segno davanti alla $i$.

Il coniugato di $2 - 5i$ è $2 + 5i$.

Il coniugato di $4$ è $4$: non c'è nessuna $i$ da cambiare.

Il coniugato di $-i$ è $i$.
:::

::: prova Prendi il vettore $(2i, 1)$. Calcola il prodotto con sé stesso, prima con il vecchio conto e poi con quello corretto.
Vecchio conto: $2i \cdot 2i + 1 \cdot 1 = 4 \cdot i \cdot i + 1 = -4 + 1 = -3$. È negativo: come quadrato di una lunghezza non ha senso.

Conto corretto: il coniugato di $2i$ è $-2i$, il coniugato di $1$ è $1$. Quindi $2i \cdot (-2i) + 1 \cdot 1 = -4 \cdot i \cdot i + 1 = 4 + 1 = 5$. È reale e positivo: il vettore è lungo $\sqrt 5$.
:::

> [!RICORDA]
> - Il **coniugato** di un numero complesso si ottiene cambiando il segno davanti alla $i$. Si scrive con una lineetta sopra: $\overline{3 + 2i} = 3 - 2i$.
> - Un numero per il suo coniugato è sempre reale e mai negativo: è il quadrato del suo modulo.
> - Con i vettori complessi il vecchio prodotto dà lunghezze nulle o negative. Si corregge **coniugando i numeri del secondo vettore**.

## Le tre regole del prodotto hermitiano (pp. 129–130)

Il prodotto della sezione precedente è solo un esempio. Le dispense fanno un passo in più: dicono quali regole deve rispettare un prodotto tra vettori complessi per chiamarsi hermitiano. Le regole sono tre.

A che cosa serve conoscerle? Nel quiz capita di dover scegliere l'uguaglianza giusta tra cinque che si assomigliano. E dalla terza regola viene il controllo «diagonale reale, specchi coniugati» che userai con le matrici.

### Le tre regole viste con i numeri

Usiamo il prodotto della sezione precedente e gli stessi due vettori:

$$x = (1, i) \qquad y = (2,\ 1 + i)$$

Un conto lo abbiamo già fatto: $\langle x, y \rangle = 3 + i$.

**Regola 1: una somma al primo posto si spezza.** Il prodotto di una somma di due vettori con un terzo vettore è la somma dei due prodotti. È la stessa regola del prodotto scalare.

**Regola 2: un numero che moltiplica il primo vettore esce così com'è.** Puoi moltiplicare prima o dopo: non cambia niente.

> [!ESEMPIO] Controllo della regola 2
> Calcoliamo in due modi il prodotto di $i \cdot x$ con $y$. I coniugati dei numeri di $y$ sono $2$ e $1 - i$.
>
> 1. Prima moltiplico il vettore: $i \cdot x = (i \cdot 1,\ i \cdot i) = (i, -1)$. Poi faccio il prodotto con $y$: $i \cdot 2 + (-1) \cdot (1 - i) = 2i - 1 + i = -1 + 3i$.
> 2. Oppure prendo il prodotto già fatto, $3 + i$, e lo moltiplico per $i$: $i \cdot (3 + i) = 3i + i \cdot i = -1 + 3i$.
>
> Stesso risultato: il numero $i$ è uscito dal primo posto così com'è.

**Regola 3: se scambi i due vettori, il risultato si coniuga.**

> [!ESEMPIO] Controllo della regola 3
> Calcoliamo $\langle y, x \rangle$, con $y$ al primo posto. Adesso i numeri da coniugare sono quelli di $x$.
>
> 1. I coniugati dei numeri di $x = (1, i)$ sono $1$ e $-i$.
> 2. Primo posto: $2 \cdot 1 = 2$.
> 3. Secondo posto: $(1 + i) \cdot (-i) = -i - i \cdot i = -i + 1$.
> 4. Sommo: $2 - i + 1 = 3 - i$.
>
> Prima avevamo $\langle x, y \rangle = 3 + i$. Adesso $\langle y, x \rangle = 3 - i$. Il secondo è il coniugato del primo.

Nel prodotto scalare tra vettori reali l'ordine dei due vettori non contava. Qui conta: scambiandoli, il risultato diventa il suo coniugato.

### Come lo scrivono le dispense

Un **prodotto hermitiano** è una qualsiasi regola che prende due vettori, restituisce un numero complesso e rispetta queste tre regole. Le dispense lo scrivono così.

> [!DEF] 25.1 · Prodotto hermitiano
> Sia $V$ uno spazio vettoriale complesso. Un **prodotto hermitiano** su $V$ è un'applicazione
> $$V \times V \longrightarrow \C, \qquad (v, w) \longmapsto \langle v, w \rangle$$
> che soddisfa i seguenti assiomi:
> 1. $\langle v + v', w \rangle = \langle v, w \rangle + \langle v', w \rangle$,
> 2. $\langle \lambda v, w \rangle = \lambda \langle v, w \rangle$,
> 3. $\langle v, w \rangle = \overline{\langle w, v \rangle}$,
>
> per ogni $v, v', w \in V$ e ogni $\lambda \in \C$.

**Come si legge.**

- Uno **spazio vettoriale complesso** è un insieme di vettori in cui i numeri che si usano sono complessi. L'esempio da tenere in mente è $\C^2$. Le dispense lo chiamano $V$.
- La riga con le frecce dice che cosa entra e che cosa esce. Entra una coppia di vettori di $V$: il segno $\times$ qui vuol dire «una coppia». Esce un numero complesso. La freccia $\longrightarrow$ si legge «va in».
- La freccia con il trattino all'inizio, $\longmapsto$, si legge «viene mandato in». La coppia $(v, w)$ viene mandata nel numero $\langle v, w \rangle$, cioè nel prodotto hermitiano di $v$ e $w$.
- Un **assioma** è una regola che si chiede per definizione.
- $v'$ si legge «vi primo»: è solo il nome di un altro vettore. $\lambda$ è la lettera greca *lambda* e indica un numero complesso: è questo che dice la scrittura $\lambda \in \C$.
- La riga 1 è la regola 1: una somma al primo posto si spezza.
- La riga 2 è la regola 2: il numero $\lambda$ esce dal primo posto così com'è.
- La riga 3 è la regola 3. La lineetta lunga copre tutto il prodotto di $w$ e $v$: vuol dire «il coniugato di quel numero».
- «Per ogni» vuol dire che le regole devono valere qualunque vettore e qualunque numero tu scelga.

Le regole 1 e 2 insieme si riassumono così: il prodotto è **lineare nel primo posto**. «Lineare» vuol dire che rispetta le somme e i multipli, come le macchine della lezione L14.

### Quattro conseguenze

Dalle tre regole se ne ricavano altre quattro. Le dispense le numerano da (4) a (7).

| N. | A parole | Con i simboli |
|---|---|---|
| (4) | anche una somma al **secondo** posto si spezza | $\langle v, w + w' \rangle = \langle v, w \rangle + \langle v, w' \rangle$ |
| (5) | un numero che moltiplica il **secondo** vettore esce **coniugato** | $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$ |
| (6) | il prodotto con il vettore zero fa 0 | $\langle 0, w \rangle = \langle v, 0 \rangle = 0$ |
| (7) | il prodotto di un vettore con sé stesso è un numero **reale** | $\langle v, v \rangle \in \R$ |

La (5) è quella che si sbaglia più spesso. Controlliamola con i numeri.

> [!ESEMPIO] Controllo della proprietà (5)
> Stessi vettori di prima: $x = (1, i)$ e $y = (2,\ 1 + i)$, con $\langle x, y \rangle = 3 + i$. Questa volta moltiplichiamo per $i$ il **secondo** vettore.
>
> **Primo modo: prima moltiplico il vettore, poi faccio il prodotto.**
>
> 1. $i \cdot y = (i \cdot 2,\ i \cdot (1 + i)) = (2i,\ -1 + i)$.
> 2. I coniugati dei numeri di $i \cdot y$ sono $-2i$ e $-1 - i$.
> 3. Il prodotto di $x$ con $i \cdot y$: $1 \cdot (-2i) + i \cdot (-1 - i) = -2i - i + 1 = 1 - 3i$.
>
> **Secondo modo: con la proprietà (5).** Il numero $i$ deve uscire coniugato, cioè come $-i$.
>
> 1. $-i \cdot (3 + i) = -3i - i \cdot i = -3i + 1$.
>
> Stesso risultato: $1 - 3i$. Dal secondo posto il numero $i$ è uscito come $-i$.

La (7) è il motivo di tutta la costruzione. Perché vale? Usa la regola 3 con due vettori uguali. Scambiare $v$ con $v$ non cambia niente, ma per la regola 3 il risultato si coniuga. Quindi il numero $\langle v, v \rangle$ è uguale al suo coniugato. E un numero uguale al suo coniugato è reale.

Le dispense lo dicono in modo esplicito: il coniugio nella regola (3) è un trucco per ottenere che $\langle v, v \rangle$ sia un numero reale. «Coniugio» è il nome dell'operazione di coniugare. Solo se quel numero è reale ha senso chiedersi se è positivo.

> [!DIM] perché valgono le proprietà da (4) a (7)
> Si usano solo le regole (1), (2), (3) e le regole sul coniugato.
>
> **Proprietà (5)**, come nelle dispense.
>
> 1. Per la regola (3), scambio i due vettori e coniugo: $\langle v, \lambda w \rangle = \overline{\langle \lambda w, v \rangle}$.
> 2. Ora $\lambda$ è al primo posto. Per la regola (2) esce così com'è: ottengo $\overline{\lambda \langle w, v \rangle}$.
> 3. Il coniugato di un prodotto è il prodotto dei coniugati: ottengo $\bar\lambda \cdot \overline{\langle w, v \rangle}$.
> 4. Per la regola (3), $\overline{\langle w, v \rangle}$ è $\langle v, w \rangle$. Resta $\bar\lambda \langle v, w \rangle$.
>
> **Proprietà (4).** Stessa strada: scambio e coniugo, spezzo la somma che ora è al primo posto, uso che il coniugato di una somma è la somma dei coniugati, e riscambio.
> $$\langle v, w + w' \rangle = \overline{\langle w + w', v \rangle} = \overline{\langle w, v \rangle} + \overline{\langle w', v \rangle} = \langle v, w \rangle + \langle v, w' \rangle$$
>
> **Proprietà (6).** Il vettore zero è «0 volte un vettore qualsiasi», per esempio $0 \cdot w$. Per la regola (2) il numero 0 esce dal primo posto: $\langle 0, w \rangle = \langle 0 \cdot w, w \rangle = 0 \cdot \langle w, w \rangle = 0$. Per il secondo posto si usa la regola (3): $\langle v, 0 \rangle = \overline{\langle 0, v \rangle} = \bar 0 = 0$.
>
> **Proprietà (7).** Nella regola (3) metto $w = v$: ottengo $\langle v, v \rangle = \overline{\langle v, v \rangle}$. Un numero uguale al suo coniugato è reale.

### Lineare una volta e mezzo

Le dispense danno un nome a questo comportamento «diverso nei due posti».

> [!OSSERVAZIONE] Lineare una volta e mezzo (p. 130)
> Le regole (1) e (2) e la proprietà (4) sono le stesse dei prodotti scalari. La proprietà (5) invece è diversa, per via del coniugato.
>
> Il prodotto hermitiano è **lineare a sinistra**: dal primo posto le somme e i numeri escono così come sono. È **antilineare a destra**: dal secondo posto le somme escono così come sono, ma i numeri escono coniugati. Le due cose insieme si riassumono in una parola: il prodotto hermitiano è **sesquilineare**.
>
> *Sesqui* in latino vuol dire «uno e mezzo». Un prodotto scalare è *bilineare*, cioè lineare in tutti e due i posti. Un prodotto hermitiano è lineare «una volta e mezzo, ma non due».

Il confronto tra i due prodotti, riga per riga:

| | Prodotto scalare (numeri reali) | Prodotto hermitiano (numeri complessi) |
|---|---|---|
| numeri usati e risultato | numeri reali | numeri complessi |
| primo posto | lineare | lineare |
| secondo posto | lineare: $\langle v, \lambda w \rangle = \lambda \langle v, w \rangle$ | antilineare: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$ |
| scambio dei due vettori | $\langle v, w \rangle = \langle w, v \rangle$ | $\langle v, w \rangle = \overline{\langle w, v \rangle}$ |
| prodotto di un vettore con sé stesso | reale | reale (proprietà 7) |
| matrice associata | simmetrica | hermitiana |

L'ultima riga parla di matrici: la capirai tra due sezioni.

> [!TRAPPOLA] Il numero esce coniugato solo da destra
> Dal primo posto un numero esce così com'è. Dal secondo posto esce coniugato. Un controllo con il prodotto della sezione precedente e il vettore $v = (1, 0)$: con $i \cdot v$ al primo posto viene $\langle (i, 0), (1, 0) \rangle = i$, con $i \cdot v$ al secondo posto viene $\langle (1, 0), (i, 0) \rangle = -i$.
>
> In questo corso, come nelle dispense e nel libro, il posto lineare è il **primo**. Alcuni testi di fisica fanno la scelta opposta.

::: prova Sai che $\langle v, w \rangle = 2 + 3i$. Quanto vale $\langle w, v \rangle$?
Per la regola 3, scambiando i due vettori il risultato si coniuga. Quindi $\langle w, v \rangle = 2 - 3i$.
:::

::: prova Sai che $\langle v, w \rangle = 2 + 3i$. Quanto valgono $\langle i v, w \rangle$ e $\langle v, i w \rangle$?
Dal primo posto il numero $i$ esce così com'è: $\langle i v, w \rangle = i \cdot (2 + 3i) = 2i + 3 \cdot i \cdot i = -3 + 2i$.

Dal secondo posto esce coniugato, cioè come $-i$: $\langle v, i w \rangle = -i \cdot (2 + 3i) = -2i - 3 \cdot i \cdot i = 3 - 2i$.
:::

::: prova Può succedere che $\langle v, v \rangle = 1 + i$?
No. Per la proprietà (7) il prodotto di un vettore con sé stesso è sempre un numero reale, e $1 + i$ non lo è.
:::

> [!RICORDA]
> - Un **prodotto hermitiano** prende due vettori complessi e restituisce un numero complesso. Ha tre regole.
> - Dal **primo** posto somme e numeri escono così come sono. Dal **secondo** posto i numeri escono **coniugati**.
> - Scambiando i due vettori il risultato si coniuga: $\langle v, w \rangle = \overline{\langle w, v \rangle}$.
> - Il prodotto di un vettore con sé stesso è sempre un numero **reale**.

## Lunghezze e perpendicolari con i complessi (p. 130)

Adesso sappiamo che il prodotto di un vettore con sé stesso è un numero reale. Quindi ha senso una domanda: è positivo? Quando la risposta è sempre sì, tornano tutti gli attrezzi delle lezioni L20 e L21: lunghezze, vettori perpendicolari, basi ortonormali.

### Positivo per ogni vettore

Riprendiamo il prodotto della prima sezione, quello con i coniugati sul secondo vettore. Calcoliamo il prodotto di tre vettori con sé stessi.

| Vettore | Prodotto con sé stesso | Risultato |
|---|---|---|
| $(1, i)$ | $1 \cdot 1 + i \cdot (-i)$ | $1 + 1 = 2$ |
| $(2,\ 1 + i)$ | $2 \cdot 2 + (1 + i) \cdot (1 - i)$ | $4 + 2 = 6$ |
| $(0, 0)$ | $0 \cdot 0 + 0 \cdot 0$ | $0$ |

Ogni pezzo è un numero per il suo coniugato, quindi è reale e mai negativo. Il risultato è positivo per ogni vettore, tranne che per il vettore fatto di soli zeri. Un prodotto hermitiano con questa proprietà si chiama **definito positivo**.

Non tutti i prodotti hermitiani lo sono. Nella sezione sulle matrici ne incontrerai uno che a un vettore diverso da zero assegna il numero $-1$.

Le dispense lo scrivono così.

> [!DEF] 25.2 · Prodotto hermitiano definito positivo
> Un prodotto hermitiano è **definito positivo** se $\langle v, v \rangle > 0$ per ogni $v \neq 0$.

**Come si legge.** Il simbolo $\neq$ si legge «diverso da». Qui lo zero è il vettore zero, quello fatto di soli zeri. Il simbolo $>$ si legge «maggiore di». Tutta insieme: il prodotto di $v$ con sé stesso è un numero positivo, qualunque vettore $v$ tu scelga, purché non sia il vettore zero.

La domanda «è positivo?» ha senso solo perché quel numero è reale. Tra due numeri complessi non si può dire quale sia il maggiore (lezione L01).

### Lunghezza, perpendicolare, base ortonormale

Con un prodotto hermitiano definito positivo si rifà tutto quello che si faceva con i vettori reali. Cambia solo il prodotto che si usa. Ecco le parole, una per una.

**Norma.** La norma di un vettore è la sua lunghezza. Si calcola come prima: il prodotto del vettore con sé stesso, e poi la radice quadrata. Si scrive con due doppie barre: $\lVert v \rVert$ si legge «norma di $v$».

$$\lVert v \rVert = \sqrt{\langle v, v \rangle}$$

Dalla tabella qui sopra: la norma di $(1, i)$ è $\sqrt 2$ e la norma di $(2,\ 1 + i)$ è $\sqrt 6$.

**Vettori ortogonali.** Due vettori sono ortogonali, cioè perpendicolari, quando il loro prodotto fa 0. Qui l'ordine non conta: se un prodotto fa 0, anche quello con i vettori scambiati fa 0, perché è il coniugato di 0.

**Spazio ortogonale.** Prendi un sottospazio $U$, cioè una «stanza» dentro lo spazio (lezione L06). Il suo spazio ortogonale è l'insieme dei vettori ortogonali a ogni vettore di $U$. Si scrive $U^\perp$ e si legge «U ortogonale» (lezione L21).

**Base ortonormale.** È una base fatta di vettori di norma 1 e ortogonali tra loro (lezione L21).

**Gram–Schmidt.** È il procedimento della lezione L21 che trasforma una base qualsiasi in una base di vettori ortogonali. Le dispense avvertono che funziona anche qui. Più sotto c'è un esempio.

### Il prodotto più usato: quello euclideo

Il prodotto della prima sezione è l'esempio più importante. Le dispense lo presentano nell'Esempio 25.3 e lo scrivono con le matrici. Per leggerlo servono due scritture.

> [!RIPASSO] riga per colonna e trasposta di un vettore (lezione L08)
> Un vettore si può scrivere in verticale, come una colonna. La **trasposta** lo mette in orizzontale, come una riga. Si scrive con una piccola $t$ in alto a sinistra: ${}^t x$ si legge «ics trasposto».
>
> Una riga per una colonna dà un numero: si moltiplicano i numeri nello stesso posto e si somma.
> $$\begin{pmatrix} 1 & 2 \end{pmatrix} \begin{pmatrix} 3 \\ 4 \end{pmatrix} = 1 \cdot 3 + 2 \cdot 4 = 11$$
> È il prodotto scalare, scritto con le matrici.

La seconda scrittura è nuova. Una lineetta sopra un vettore vuol dire: coniuga ogni numero del vettore. Se $y = (2,\ 1 + i)$, allora $\bar y = (2,\ 1 - i)$. Lo stesso vale per una matrice: $\bar A$ è la matrice $A$ con tutti i numeri coniugati.

Un'ultima scrittura delle dispense: $M(m, n, \C)$ è l'insieme delle matrici con $m$ righe e $n$ colonne fatte di numeri complessi.

> [!ESEMPIO] 25.3 · Il prodotto hermitiano euclideo
> Le dispense chiamano **prodotto hermitiano euclideo** su $\C^n$ il prodotto dato da questa formula:
> $$\langle x, y \rangle = {}^t x\, \bar y.$$
> A parole: il vettore $x$ messo in riga, per il vettore $y$ coniugato e messo in colonna.
>
> **Che cosa vuol dire con due numeri.** Se $x = (x_1, x_2)$ e $y = (y_1, y_2)$, il prodotto riga per colonna dà
> $$\langle x, y \rangle = x_1 \bar y_1 + x_2 \bar y_2.$$
> È il conto della prima sezione: i numeri di $x$ per i coniugati dei numeri di $y$, e poi la somma. Con $n$ numeri la somma ha $n$ pezzi, uno per ogni posto: $x_1 \bar y_1 + \dots + x_n \bar y_n$. I puntini vogliono dire «e avanti così fino all'ultimo posto».
>
> **Rispetta la regola (3).** Le dispense lo controllano con questa catena:
> $$\overline{\langle y, x \rangle} = \overline{{}^t y\, \bar x} = {}^t \bar y\, x = {}^t x\, \bar y = \langle x, y \rangle.$$
> Con due numeri si vede ogni passo.
>
> 1. Scrivo il prodotto con i vettori scambiati: $\langle y, x \rangle = y_1 \bar x_1 + y_2 \bar x_2$.
> 2. Coniugo tutto. I numeri di $y$ prendono la lineetta. I numeri di $x$ la perdono, perché coniugare due volte riporta al punto di partenza. Ottengo $\bar y_1 x_1 + \bar y_2 x_2$.
> 3. In un prodotto di due numeri l'ordine non conta. Quindi ho $x_1 \bar y_1 + x_2 \bar y_2$, che è proprio $\langle x, y \rangle$.
>
> **È definito positivo.** Per ogni vettore $x$ di $\C^n$ diverso da zero le dispense scrivono
> $$\langle x, x \rangle = {}^t x\, \bar x = x_1 \bar x_1 + \dots + x_n \bar x_n = \lvert x_1 \rvert^2 + \dots + \lvert x_n \rvert^2 > 0.$$
> Ogni pezzo è un numero per il suo coniugato, cioè il quadrato di un modulo: è reale e mai negativo. Se il vettore non è zero, almeno uno dei suoi numeri non è zero. Quel pezzo è positivo, quindi tutta la somma è positiva.

> [!METODO] Calcolare un prodotto hermitiano euclideo
> 1. Scrivi i coniugati dei numeri del **secondo** vettore.
> 2. Moltiplica posto per posto: il primo numero per il primo coniugato, il secondo per il secondo.
> 3. Dove compare $i \cdot i$ scrivi $-1$.
> 4. Somma i risultati.
>
> Per la norma di un vettore: somma i quadrati dei moduli dei suoi numeri, poi fai la radice quadrata.

Per i vettori $x = (1, i)$ e $y = (2,\ 1 + i)$ questi conti li abbiamo già fatti tutti. I due prodotti sono $3 + i$ e $3 - i$. Le due norme sono $\sqrt 2$ e $\sqrt 6$. Altri conti dello stesso tipo sono negli esercizi 2 e 4.

> [!ESEMPIO] Vettori ortogonali e una base ortonormale di $\C^2$
> Prendiamo i vettori $(1, i)$ e $(1, -i)$ e calcoliamo il loro prodotto.
>
> 1. I coniugati dei numeri del secondo vettore sono $1$ e $i$.
> 2. Primo posto: $1 \cdot 1 = 1$. Secondo posto: $i \cdot i = -1$.
> 3. Sommo: $1 - 1 = 0$.
>
> Il prodotto fa 0: i due vettori sono **ortogonali**.
>
> Tutti e due hanno norma $\sqrt 2$. Per il secondo il conto è: modulo di $1$ al quadrato più modulo di $-i$ al quadrato, cioè $1 + 1 = 2$.
>
> Per avere vettori di norma 1 si divide ogni vettore per la sua norma. Questa mossa si chiama *normalizzare*.
> $$\left\{ \tfrac{1}{\sqrt 2}(1, i),\ \tfrac{1}{\sqrt 2}(1, -i) \right\}$$
> Questi due vettori hanno norma 1 e sono ortogonali: formano una base ortonormale di $\C^2$.

### Gram–Schmidt con i numeri complessi

Alla stessa base si arriva con il procedimento di Gram–Schmidt. Ricorda l'idea (lezione L21): il primo vettore resta com'è, e al secondo si toglie la sua «ombra» sul primo. Quello che resta è ortogonale al primo.

Si parte da due vettori $v_1$ e $v_2$ e si costruiscono due vettori nuovi, $w_1$ e $w_2$. Il numerino in basso dice solo quale dei due è. La formula per il secondo è:

$$w_2 = v_2 - \frac{\langle v_2, w_1 \rangle}{\langle w_1, w_1 \rangle}\, w_1$$

> [!ESEMPIO] Gram–Schmidt in $\C^2$
> Partiamo da $v_1 = (1, i)$ e $v_2 = (1, 0)$. Vogliamo due vettori ortogonali.
>
> 1. Il primo vettore resta com'è: $w_1 = v_1 = (1, i)$.
> 2. Il numero sopra la frazione: $\langle v_2, w_1 \rangle = 1 \cdot 1 + 0 \cdot (-i) = 1$.
> 3. Il numero sotto la frazione: $\langle w_1, w_1 \rangle = 2$, già calcolato.
> 4. La frazione vale $\frac 12$. Quindi al vettore $v_2$ tolgo metà di $w_1$:
>    $$w_2 = (1, 0) - \tfrac 12 (1, i) = \left(1 - \tfrac 12,\ 0 - \tfrac i2\right) = \left(\tfrac 12,\ -\tfrac i2\right).$$
> 5. Controllo che $w_2$ sia ortogonale a $w_1$. I coniugati dei numeri di $w_1$ sono $1$ e $-i$:
>    $$\langle w_2, w_1 \rangle = \tfrac 12 \cdot 1 + \left(-\tfrac i2\right) \cdot (-i) = \tfrac 12 + \tfrac{i \cdot i}{2} = \tfrac 12 - \tfrac 12 = 0.$$
> 6. Normalizzo $w_2$. Il prodotto con sé stesso è $\frac 14 + \frac 14 = \frac 12$, quindi la norma è $\frac{1}{\sqrt 2}$. Dividere per $\frac{1}{\sqrt 2}$ è come moltiplicare per $\sqrt 2$:
>    $$\sqrt 2 \cdot \left(\tfrac 12,\ -\tfrac i2\right) = \left(\tfrac{\sqrt 2}{2},\ -\tfrac{\sqrt 2}{2}\, i\right) = \tfrac{1}{\sqrt 2}(1, -i).$$
>
> È il secondo vettore dell'esempio precedente. L'ultimo passaggio usa che $\frac{\sqrt 2}{2}$ e $\frac{1}{\sqrt 2}$ sono lo stesso numero (lezione L01).

> [!TRAPPOLA] L'ordine nella frazione di Gram–Schmidt
> Sopra la frazione c'è $\langle v_2, w_1 \rangle$: il vettore da correggere sta **al primo posto**. Con i vettori reali l'ordine non contava. Qui conta, perché scambiando i due vettori il prodotto si coniuga.
>
> Un esempio: con $w_1 = (1, i)$ e $v_2 = (0, 1)$ l'ordine giusto dà $\langle v_2, w_1 \rangle = 1 \cdot (-i) = -i$. L'ordine sbagliato dà $\langle w_1, v_2 \rangle = i \cdot 1 = i$, e il vettore che si ottiene non è più ortogonale a $w_1$.

::: prova Quanto è lungo il vettore $(3, 4i)$ con il prodotto hermitiano euclideo?
Si sommano i quadrati dei moduli. Il modulo di $3$ al quadrato è 9. Il modulo di $4i$ al quadrato è $4i \cdot (-4i) = 16$.

La somma è $9 + 16 = 25$. La norma è la radice di 25, cioè 5.
:::

::: prova I vettori $(1, i)$ e $(i, -1)$ sono ortogonali?
I coniugati dei numeri del secondo vettore sono $-i$ e $-1$.

Il prodotto è $1 \cdot (-i) + i \cdot (-1) = -2i$. Non fa 0, quindi no: non sono ortogonali.
:::

> [!RICORDA]
> - Un prodotto hermitiano è **definito positivo** quando il prodotto di ogni vettore diverso da zero con sé stesso è positivo.
> - Il **prodotto hermitiano euclideo** è $\langle x, y \rangle = x_1 \bar y_1 + \dots + x_n \bar y_n$: i numeri del primo per i coniugati dei numeri del secondo. È definito positivo.
> - La **norma** è la radice del prodotto del vettore con sé stesso. In pratica: somma dei quadrati dei moduli, poi radice.
> - Ortogonali vuol dire «prodotto uguale a 0». Basi ortonormali e Gram–Schmidt funzionano come con i vettori reali.

## Matrici hermitiane: lo specchio che coniuga (pp. 130–131)

Una matrice è una tabella di numeri. Nei prodotti scalari le tabelle importanti erano quelle simmetriche (lezioni L19 e L20). Con i numeri complessi il loro posto lo prendono le matrici hermitiane.

A che cosa serve: riconoscere una matrice hermitiana è una domanda del quiz, ed è anche il passo finale delle altre due domande tipiche di questa lezione.

> [!RIPASSO] trasposta e matrice simmetrica (lezioni L08 e L19)
> In una matrice quadrata la **diagonale** è la fila di numeri che va dall'angolo in alto a sinistra all'angolo in basso a destra.
>
> La **trasposta** di una matrice si ottiene scambiando le righe con le colonne: la prima riga diventa la prima colonna, la seconda riga diventa la seconda colonna. È come ribaltare la tabella attorno alla diagonale. La trasposta di $A$ si scrive ${}^t A$.
> $$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \qquad {}^t A = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$$
>
> Una matrice è **simmetrica** quando è uguale alla sua trasposta: ribaltandola non cambia. Ogni numero è uguale al suo «specchio» dall'altra parte della diagonale. Un esempio:
> $$\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$$

### Uno specchio che cambia il segno alla i

Guarda questa matrice. È l'esempio delle dispense.

$$H = \begin{pmatrix} 2 & 1 + i \\ 1 - i & 1 \end{pmatrix}$$

Si notano due cose.

- Sulla diagonale ci sono $2$ e $1$: due numeri reali.
- Fuori dalla diagonale ci sono $1 + i$ in alto a destra e $1 - i$ in basso a sinistra. Non sono uguali, quindi la matrice non è simmetrica. Ma ognuno dei due è il **coniugato** dell'altro.

È come una matrice simmetrica in cui lo specchio, oltre a riflettere, cambia il segno davanti alla $i$. Una matrice fatta così si chiama **hermitiana**.

```grafico
titolo: La diagonale fa da specchio. I numeri sulla diagonale sono reali; gli altri due sono uno il coniugato dell'altro
assi: no
griglia: no
x: 0 6
y: 0 4
poligono: 1 0.4 5 0.4 5 3.6 1 3.6 | grigio | tenue
segmento: 1 3.6 1.6 3.12 | ambra | tratteggio
segmento: 2.4 2.48 3.6 1.52 | ambra | tratteggio
segmento: 4.4 0.88 5 0.4 | ambra | tratteggio
testo: 2 2.8 | ambra | $2$
testo: 4 1.2 | ambra | $1$
testo: 4 2.8 | accento | $1 + i$
testo: 2 1.2 | viola | $1 - i$
freccia: 3.1 2.08 3.6 2.48 | grigio | sottile
freccia: 2.9 1.92 2.4 1.52 | grigio | sottile
testo: 5.5 0.25 | ambra | "diagonale"
```

### Con i simboli delle dispense

Le dispense usano due operazioni sulle matrici.

- La trasposta ${}^t H$: scambia le righe con le colonne (ripasso qui sopra).
- La coniugata $\bar H$: coniuga ogni numero della tabella, senza spostare niente.

Proviamole tutte e due sulla matrice $H$.

$${}^t H = \begin{pmatrix} 2 & 1 - i \\ 1 + i & 1 \end{pmatrix} \qquad \bar H = \begin{pmatrix} 2 & 1 - i \\ 1 + i & 1 \end{pmatrix}$$

Viene la stessa tabella. Trasporre questa matrice dà lo stesso risultato che coniugarla: la definizione delle dispense chiede proprio questo.

Serve ancora un modo per indicare un numero preciso della tabella. Si usano due numerini in basso: il primo dice la riga, il secondo la colonna. $H_{12}$ si legge «acca uno due» ed è il numero nella riga 1 e nella colonna 2. Nella nostra matrice $H_{12} = 1 + i$ e $H_{21} = 1 - i$. Con le lettere al posto dei numerini, $H_{ij}$ è il numero nella riga $i$ e nella colonna $j$.

> [!DEF] 25.4 · Matrice hermitiana
> Una **matrice hermitiana** è una matrice quadrata complessa $H$ per cui
> $${}^t H = \bar H.$$
> In altre parole vale $H_{ij} = \overline{H_{ji}}$ per ogni $i, j$.

**Come si legge.**

- «Matrice quadrata complessa»: una tabella con tante righe quante colonne, fatta di numeri complessi.
- La prima formula dice: la trasposta è uguale alla coniugata.
- La seconda formula dice la stessa cosa un numero alla volta. Il numero nella riga $i$ e nella colonna $j$ è il coniugato del numero nella riga $j$ e nella colonna $i$. I due posti sono uno lo specchio dell'altro rispetto alla diagonale.
- «Per ogni $i, j$» vuol dire: per tutte le coppie di posti.
- Sulla diagonale il numero di riga e quello di colonna sono uguali, come in $H_{11}$. Lì la condizione dice che il numero è uguale al suo coniugato. Quindi **i numeri sulla diagonale sono reali**.

> [!OSSERVAZIONE] Matrici reali (p. 131)
> Una matrice quadrata fatta di numeri **reali** è hermitiana esattamente quando è **simmetrica**. Il motivo: coniugare un numero reale non lo cambia. Quindi $\bar H = H$, e la condizione ${}^t H = \bar H$ diventa ${}^t H = H$.

> [!METODO] Riconoscere una matrice hermitiana
> 1. Controlla che la matrice sia **quadrata**.
> 2. Guarda la **diagonale**: tutti i numeri devono essere **reali**. Basta una $i$ sulla diagonale per dire che la matrice non è hermitiana.
> 3. Guarda ogni numero sotto la diagonale: deve essere il **coniugato** del suo specchio sopra la diagonale. Si cambia il segno davanti alla $i$, **non** quello della parte reale.

Il metodo applicato a cinque matrici:

| Matrice | Hermitiana? | Perché |
|---|---|---|
| $\begin{pmatrix} 1 & 3 - 2i \\ 3 + 2i & -4 \end{pmatrix}$ | sì | la diagonale è reale, e il coniugato di $3 + 2i$ è $3 - 2i$ |
| $\begin{pmatrix} 1 & 3 - 2i \\ 3 - 2i & -4 \end{pmatrix}$ | no | è simmetrica, ma il coniugato di $3 - 2i$ è $3 + 2i$ |
| $\begin{pmatrix} 1 & 3 - 2i \\ -3 - 2i & -4 \end{pmatrix}$ | no | il coniugato di $-3 - 2i$ è $-3 + 2i$: è stato cambiato il segno della parte reale, quello sbagliato |
| $\begin{pmatrix} i & 0 \\ 0 & 2 \end{pmatrix}$ | no | sulla diagonale c'è $i$ |
| $\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$ | sì | la diagonale è reale, e il coniugato di $i$ è $-i$ |

### Dalla matrice al prodotto

Nella lezione L19 una matrice simmetrica fabbricava un prodotto scalare. Una matrice hermitiana fa lo stesso lavoro con i vettori complessi: fabbrica un prodotto hermitiano. Le dispense lo chiamano $g_H$. La $g$ è il nome del prodotto, e la piccola $H$ in basso ricorda da quale matrice viene.

$$g_H(x, y) = {}^t x\, H\, \bar y$$

A parole: il vettore $x$ in riga, per la matrice $H$, per il vettore $y$ coniugato e in colonna. È la formula del prodotto euclideo, con la matrice $H$ infilata in mezzo.

> [!RIPASSO] matrice per vettore (lezione L08)
> Una matrice per un vettore in colonna dà un altro vettore. Ogni riga della matrice si moltiplica per la colonna, con la regola «riga per colonna».
> $$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 3 \\ 2 \end{pmatrix} = \begin{pmatrix} 2 \cdot 3 + 1 \cdot 2 \\ 1 \cdot 3 + 1 \cdot 2 \end{pmatrix} = \begin{pmatrix} 8 \\ 5 \end{pmatrix}$$

> [!ESEMPIO] Un conto con $g_H$
> Usiamo la matrice $H$ delle dispense e i vettori $x = (1, i)$ e $y = (1, 1)$.
>
> **Primo conto: $g_H(x, y)$.**
>
> 1. Coniugo $y$. I suoi numeri sono reali, quindi $\bar y = (1, 1)$.
> 2. Calcolo $H \bar y$, riga per colonna. Prima riga: $2 \cdot 1 + (1 + i) \cdot 1 = 3 + i$. Seconda riga: $(1 - i) \cdot 1 + 1 \cdot 1 = 2 - i$.
> 3. Moltiplico $x$, messo in riga, per il vettore appena trovato: $1 \cdot (3 + i) + i \cdot (2 - i)$.
> 4. Il secondo pezzo vale $i \cdot (2 - i) = 2i - i \cdot i = 2i + 1$.
> 5. Sommo: $3 + i + 2i + 1 = 4 + 3i$.
>
> Quindi $g_H(x, y) = 4 + 3i$.
>
> **Secondo conto: $g_H(y, x)$, con i due vettori scambiati.**
>
> 1. Coniugo $x$: $\bar x = (1, -i)$.
> 2. Calcolo $H \bar x$. Prima riga: $2 \cdot 1 + (1 + i) \cdot (-i) = 2 - i + 1 = 3 - i$. Seconda riga: $(1 - i) \cdot 1 + 1 \cdot (-i) = 1 - 2i$.
> 3. Moltiplico $y$, messo in riga, per questo vettore: $1 \cdot (3 - i) + 1 \cdot (1 - 2i) = 4 - 3i$.
>
> Quindi $g_H(y, x) = 4 - 3i$. È il coniugato di $4 + 3i$: la regola (3) è rispettata.

Non è un caso: succede con ogni matrice hermitiana e con ogni coppia di vettori. Le regole (1) e (2) si controllano come per i prodotti scalari. La regola (3) vale proprio perché la matrice è hermitiana. La catena di passaggi delle dispense è nel riquadro.

> [!DIM] perché $g_H$ rispetta la regola (3)
> Le dispense scrivono questa catena:
> $$g_H(x, y) = {}^t x H \bar y \overset{(a)}{=} {}^t\big({}^t x H \bar y\big) \overset{(b)}{=} {}^t \bar y\, {}^t H\, x \overset{(c)}{=} {}^t \bar y\, \bar H x \overset{(d)}{=} \overline{{}^t y H \bar x} = \overline{g_H(y, x)}.$$
> Il motivo di ogni passaggio:
>
> - (a) ${}^t x H \bar y$ è un numero solo, cioè una matrice con una riga e una colonna. Trasporla non la cambia.
> - (b) La trasposta di un prodotto è il prodotto delle trasposte **in ordine inverso**. In più, trasporre due volte riporta al punto di partenza: ${}^t({}^t x) = x$.
> - (c) $H$ è hermitiana, quindi ${}^t H = \bar H$.
> - (d) Il coniugato di un prodotto è il prodotto dei coniugati. Coniugando ${}^t y H \bar x$ si ottiene ${}^t \bar y\, \bar H\, x$.

### La formula scritta per esteso

Se fai il conto ${}^t x\, H\, \bar y$ con le lettere al posto dei numeri, in $\C^2$ vengono quattro pezzi:

$$g_H(x, y) = H_{11}\, x_1 \bar y_1 + H_{12}\, x_1 \bar y_2 + H_{21}\, x_2 \bar y_1 + H_{22}\, x_2 \bar y_2$$

Ogni pezzo è fatto di tre cose: un numero della matrice, un numero di $x$ e un numero di $y$ coniugato. La regola per abbinarli è questa:

- la **riga** dice quale numero di $x$ compare;
- la **colonna** dice quale numero di $y$ coniugato compare.

Per esempio $H_{12}$, che sta nella riga 1 e nella colonna 2, moltiplica $x_1 \bar y_2$.

Con la matrice delle dispense la formula diventa:

$$g_H(x, y) = 2\, x_1 \bar y_1 + (1 + i)\, x_1 \bar y_2 + (1 - i)\, x_2 \bar y_1 + x_2 \bar y_2$$

Un caso particolare. I vettori $e_1 = (1, 0)$ ed $e_2 = (0, 1)$ formano la **base canonica** di $\C^2$. Se nella formula metti $e_1$ al primo posto ed $e_2$ al secondo, tre pezzi su quattro contengono uno zero. Resta solo il pezzo con $x_1 \bar y_2$, che vale $H_{12}$. Il prodotto di due vettori della base canonica «pesca» un numero della matrice. Le dispense lo scrivono così:

$$g_H(e_i, e_j) = {}^t e_i H \bar e_j = {}^t e_i H e_j = H_{ij}$$

Qui $e_1, \dots, e_n$ è la base canonica di $\C^n$: il vettore $e_i$ ha un 1 al posto $i$ e 0 negli altri posti. Sono vettori fatti di numeri reali, quindi coniugarli non li cambia.

### Una formula è un prodotto hermitiano?

È la domanda più frequente dell'esame su questa lezione. Ti danno una formula con quattro pezzi e chiedono se è un prodotto hermitiano. Il metodo: si legge la formula al contrario, dai pezzi alla matrice.

> [!METODO] Decidere se una formula è un prodotto hermitiano
> La formula è fatta così: $a\, x_1 \bar y_1 + b\, x_1 \bar y_2 + c\, x_2 \bar y_1 + d\, x_2 \bar y_2$, dove $a$, $b$, $c$, $d$ sono quattro numeri.
>
> 1. Controlla le lineette. In ogni pezzo il numero di $y$ deve essere coniugato. Una formula senza lineette non è un prodotto hermitiano.
> 2. Scrivi la matrice dei coefficienti: $H = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. La riga è il numerino di $x$, la colonna è il numerino di $\bar y$.
> 3. Controlla che la matrice sia hermitiana: $a$ e $d$ reali, e $c$ uguale al coniugato di $b$.

Un **coefficiente** è il numero che sta davanti a un pezzo della formula.

> [!ESEMPIO] Due formule a confronto
> **Prima formula:** $x_1 \bar y_1 + i\, x_1 \bar y_2 - i\, x_2 \bar y_1 + 2\, x_2 \bar y_2$.
>
> 1. Le lineette ci sono in tutti i pezzi.
> 2. La matrice dei coefficienti è $\begin{pmatrix} 1 & i \\ -i & 2 \end{pmatrix}$.
> 3. Sulla diagonale ci sono $1$ e $2$, reali. Il coniugato di $i$ è $-i$, e in basso a sinistra c'è proprio $-i$.
>
> La matrice è hermitiana: la formula è un prodotto hermitiano.
>
> **Seconda formula:** $x_1 \bar y_1 + i\, x_1 \bar y_2 + i\, x_2 \bar y_1 + 2\, x_2 \bar y_2$.
>
> 1. Le lineette ci sono in tutti i pezzi.
> 2. La matrice dei coefficienti è $\begin{pmatrix} 1 & i \\ i & 2 \end{pmatrix}$.
> 3. La diagonale è reale. Ma in basso a sinistra dovrebbe esserci $-i$, e invece c'è $i$.
>
> La matrice non è hermitiana: la formula non è un prodotto hermitiano. La matrice è simmetrica, ma con i numeri complessi «simmetrica» non basta.

> [!OLTRE] Hermitiano non vuol dire definito positivo
> La Definizione 25.1 non chiede che il prodotto di un vettore con sé stesso sia positivo. Prendi la matrice $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$. È reale e simmetrica, quindi è hermitiana. Il suo prodotto è $g(x, y) = x_1 \bar y_1 - x_2 \bar y_2$.
>
> Con il vettore $e_2 = (0, 1)$ viene $g(e_2, e_2) = 0 - 1 = -1$. Un vettore diverso da zero dà un risultato negativo: questo prodotto hermitiano **non** è definito positivo.
>
> Nel quiz la domanda è quasi sempre «quale di queste è un prodotto hermitiano?». La risposta giusta può non essere definita positiva: la domanda non lo chiede.

::: prova Completa la matrice in modo che sia hermitiana: $\begin{pmatrix} 3 & 2 - i \\ \ast & 5 \end{pmatrix}$.
Al posto dell'asterisco va il coniugato del suo specchio, cioè il coniugato di $2 - i$. Si cambia il segno davanti alla $i$: viene $2 + i$.
:::

::: prova La matrice $\begin{pmatrix} 4 & 1 + 2i \\ 1 - 2i & i \end{pmatrix}$ è hermitiana?
No. Gli specchi vanno bene, perché il coniugato di $1 - 2i$ è $1 + 2i$. Ma sulla diagonale c'è $i$, che non è un numero reale.
:::

::: prova Scrivi la matrice della formula $3\, x_1 \bar y_1 + 2i\, x_1 \bar y_2 - 2i\, x_2 \bar y_1 + x_2 \bar y_2$. È un prodotto hermitiano?
La riga è il numerino di $x$, la colonna quello di $\bar y$. La matrice è $\begin{pmatrix} 3 & 2i \\ -2i & 1 \end{pmatrix}$.

La diagonale è reale. Il coniugato di $-2i$ è $2i$, che è proprio il numero in alto a destra. La matrice è hermitiana, quindi la formula è un prodotto hermitiano.
:::

> [!RICORDA]
> - Una matrice è **hermitiana** quando la trasposta è uguale alla coniugata: ${}^t H = \bar H$.
> - In pratica: **diagonale reale** e **specchi coniugati**.
> - Una matrice reale è hermitiana esattamente quando è simmetrica. Una matrice complessa simmetrica di solito **non** è hermitiana.
> - Ogni matrice hermitiana dà un prodotto hermitiano. Il numero nella riga $i$ e colonna $j$ è il coefficiente di $x_i \bar y_j$.

## La tabella dei prodotti: matrice associata (p. 131)

Un prodotto hermitiano si può riassumere in una tabella. Basta scegliere una base e scrivere tutti i prodotti tra i vettori della base. È la stessa costruzione fatta per i prodotti scalari nella lezione L19.

A che cosa serve? Spiega perché nel quiz basta guardare la matrice dei coefficienti: ogni prodotto hermitiano viene da una matrice hermitiana. Negli appelli dal 2024 al 2026 nessuna domanda chiede di calcolare la tabella di questa sezione. Se hai poco tempo, leggi il primo esempio e il riquadro «Da ricordare».

> [!RIPASSO] base e coordinate (lezioni L07 e L13)
> Una **base** è un elenco di vettori con cui si costruisce ogni altro vettore dello spazio, in un modo solo. Costruire vuol dire fare una ricetta: «tanto del primo vettore più tanto del secondo». Le quantità della ricetta si chiamano **coordinate**.
>
> Un esempio in $\R^2$, con la base fatta da $b_1 = (1, 1)$ e $b_2 = (0, 1)$. Il vettore $v = (2, 5)$ si ottiene con 2 parti di $b_1$ e 3 parti di $b_2$:
> $$2 \cdot (1, 1) + 3 \cdot (0, 1) = (2, 2) + (0, 3) = (2, 5).$$
> Quindi le coordinate di $v$ in questa base sono $(2, 3)$. La lista delle coordinate di $v$ nella base $\mathcal B$ si scrive $[v]_{\mathcal B}$. La lettera $\mathcal B$ è una B in corsivo: è il nome della base.

### Un esempio: la tabella di una base

> [!ESEMPIO] La matrice del prodotto euclideo in un'altra base
> In $\C^2$ usiamo il prodotto hermitiano euclideo. Come base prendiamo $b_1 = (1, i)$ e $b_2 = (0, 1)$. Calcoliamo i quattro prodotti tra i vettori della base e li mettiamo in una tabella. Ricorda: si coniugano i numeri del secondo vettore.
>
> | Posto nella tabella | Prodotto | Conto | Risultato |
> |---|---|---|---|
> | riga 1, colonna 1 | $\langle b_1, b_1 \rangle$ | $1 \cdot 1 + i \cdot (-i)$ | $2$ |
> | riga 1, colonna 2 | $\langle b_1, b_2 \rangle$ | $1 \cdot 0 + i \cdot 1$ | $i$ |
> | riga 2, colonna 1 | $\langle b_2, b_1 \rangle$ | $0 \cdot 1 + 1 \cdot (-i)$ | $-i$ |
> | riga 2, colonna 2 | $\langle b_2, b_2 \rangle$ | $0 \cdot 0 + 1 \cdot 1$ | $1$ |
>
> La tabella dei prodotti è
> $$H = \begin{pmatrix} 2 & i \\ -i & 1 \end{pmatrix}.$$
> È hermitiana: la diagonale è reale, e $-i$ è il coniugato di $i$.

### La regola generale

La ricetta è sempre questa. Hai uno spazio vettoriale complesso con un prodotto hermitiano, e scegli una base. Le dispense chiamano lo spazio $V$ e la base $\mathcal B = \{v_1, \dots, v_n\}$. Vuol dire: un elenco di $n$ vettori, in cui il primo si chiama $v_1$ e l'ultimo $v_n$.

La **matrice associata** al prodotto in quella base è la tabella dei prodotti. Nel posto di riga $i$ e colonna $j$ c'è il prodotto del vettore numero $i$ con il vettore numero $j$:

$$H_{ij} = \langle v_i, v_j \rangle \quad \text{per ogni } i, j.$$

Questa tabella è sempre hermitiana. Il motivo è la regola (3). Scambiando i due vettori il prodotto si coniuga, quindi il numero nel posto «riga $j$, colonna $i$» è il coniugato di quello nel posto «riga $i$, colonna $j$»:

$$H_{ij} = \langle v_i, v_j \rangle = \overline{\langle v_j, v_i \rangle} = \overline{H_{ji}}$$

Per questo le dispense usano la lettera $H$ e non la $S$ dei prodotti scalari: la matrice non è simmetrica ma hermitiana.

Con la tabella si calcola il prodotto di due vettori qualsiasi, usando solo le loro coordinate. Le dispense scrivono:

$$\langle v, w \rangle = {}^t[v]_{\mathcal B} \cdot H \cdot \overline{[w]_{\mathcal B}}$$

A parole: le coordinate di $v$ in riga, per la tabella, per le coordinate di $w$ coniugate e in colonna. È la formula di $g_H$ della sezione precedente, con le coordinate al posto dei vettori.

> [!ESEMPIO] Controllo della formula
> Stessa base di prima e stessa tabella $H$. Prendiamo $v = b_1 + b_2$ e $w = b_2$, e calcoliamo il loro prodotto in due modi.
>
> **Primo modo: direttamente.**
>
> 1. Scrivo i due vettori: $v = (1, i) + (0, 1) = (1,\ 1 + i)$ e $w = (0, 1)$.
> 2. I numeri di $w$ sono reali: coniugarli non li cambia.
> 3. Il prodotto: $1 \cdot 0 + (1 + i) \cdot 1 = 1 + i$.
>
> **Secondo modo: con le coordinate.**
>
> 1. $v$ è fatto di 1 parte di $b_1$ e 1 parte di $b_2$: le sue coordinate sono $(1, 1)$.
> 2. $w$ è fatto di 0 parti di $b_1$ e 1 parte di $b_2$: le sue coordinate sono $(0, 1)$. Sono reali, quindi coniugarle non le cambia.
> 3. Tabella per le coordinate di $w$:
>    $$H \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \cdot 0 + i \cdot 1 \\ -i \cdot 0 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} i \\ 1 \end{pmatrix}.$$
> 4. Coordinate di $v$ in riga per questo vettore: $1 \cdot i + 1 \cdot 1 = 1 + i$.
>
> Stesso risultato: $1 + i$.

Perché le coordinate di $w$ vanno coniugate? Perché $w$ sta al secondo posto, e dal secondo posto i numeri escono coniugati (proprietà 5). Le dispense dicono che la formula si dimostra come per un prodotto scalare, «stando attenti alla sesquilinearità».

### Ogni prodotto hermitiano viene da una matrice

Prendi $\C^n$ con la base canonica. In quella base le coordinate di un vettore sono i suoi stessi numeri. La formula con le coordinate diventa allora quella di $g_H$.

Le dispense concludono: qualsiasi prodotto hermitiano su $\C^n$ è della forma $g_H$ per qualche matrice hermitiana $H$.

Quindi prodotti hermitiani e matrici hermitiane contengono la stessa informazione. Ecco perché il metodo della sezione precedente funziona: per giudicare una formula basta guardare la sua matrice.

::: prova In $\C^2$ con il prodotto hermitiano euclideo, qual è la matrice associata nella base canonica $e_1 = (1, 0)$, $e_2 = (0, 1)$?
I quattro prodotti sono: $\langle e_1, e_1 \rangle = 1$, poi $\langle e_1, e_2 \rangle = 0$, poi $\langle e_2, e_1 \rangle = 0$, poi $\langle e_2, e_2 \rangle = 1$.

La tabella ha 1 sulla diagonale e 0 fuori: è la matrice identità $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$. Succede con ogni base ortonormale, e servirà nella prossima sezione.
:::

::: prova Nella tabella $H$ dell'esempio, quale numero è il prodotto $\langle b_2, b_1 \rangle$? E perché non è uguale a $\langle b_1, b_2 \rangle$?
Il primo vettore è il numero 2 e il secondo è il numero 1: si guarda la riga 2 e la colonna 1. Lì c'è $-i$.

Il prodotto con i vettori scambiati sta nella riga 1 e nella colonna 2, ed è $i$. I due numeri sono uno il coniugato dell'altro, come vuole la regola (3).
:::

> [!RICORDA]
> - La **matrice associata** a un prodotto hermitiano in una base è la tabella dei prodotti tra i vettori della base: $H_{ij} = \langle v_i, v_j \rangle$.
> - È sempre una matrice hermitiana.
> - Ogni prodotto hermitiano su $\C^n$ viene da una matrice hermitiana. Per questo le domande sui prodotti hermitiani si risolvono guardando una matrice.

## Autoaggiunto: la macchina cambia posto (pp. 132–133)

Fin qui il prodotto prendeva due vettori e dava un numero. Adesso entra in scena un personaggio diverso: una macchina che trasforma vettori in vettori, cioè un'applicazione lineare (lezione L14).

In questa sezione e nella prossima lo spazio $V$ può essere di due tipi, e tutto vale per entrambi:

- uno spazio di vettori reali con un prodotto scalare definito positivo, come $\R^2$ con il conto della spesa;
- uno spazio di vettori complessi con un prodotto hermitiano definito positivo, come $\C^2$ con il prodotto euclideo.

A che cosa serve: le macchine di questa sezione sono le protagoniste del teorema spettrale (lezione L26). E «quale di queste applicazioni è autoaggiunta?» è una domanda del quiz.

> [!RIPASSO] la macchina di una matrice (lezioni L14–L16)
> Una matrice $A$ è anche una macchina: entra un vettore $v$, esce il vettore $A v$, che si calcola con la regola «matrice per vettore». Le dispense chiamano questa macchina $L_A$.
>
> Se entra un vettore della base canonica, esce una **colonna** della matrice. Con $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$: entra $e_1 = (1, 0)$ ed esce la prima colonna, $(2, 1)$; entra $e_2 = (0, 1)$ ed esce la seconda colonna, $(1, 1)$.
>
> Una macchina che restituisce vettori dello stesso spazio da cui li prende si chiama **endomorfismo**. Si scrive $T \colon V \to V$ e si legge «ti da vi a vi». La scrittura $T(v)$ indica il vettore che esce quando entra $v$.

### Un esperimento con due matrici

Prendiamo $\R^2$ con il prodotto scalare di sempre e questa matrice:

$$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$$

Scegliamo due vettori, $v = (1, 2)$ e $w = (3, 1)$, e facciamo due conti diversi.

- **Primo conto:** passo $v$ nella macchina, poi faccio il prodotto con $w$.
- **Secondo conto:** passo $w$ nella macchina, poi faccio il prodotto di $v$ con il vettore che esce.

> [!ESEMPIO] I due conti con la matrice $A$
> **Primo conto.**
>
> 1. Calcolo $A v$. Prima riga: $2 \cdot 1 + 1 \cdot 2 = 4$. Seconda riga: $1 \cdot 1 + 1 \cdot 2 = 3$. Esce il vettore $(4, 3)$.
> 2. Prodotto con $w$: $\langle (4, 3), (3, 1) \rangle = 4 \cdot 3 + 3 \cdot 1 = 15$.
>
> **Secondo conto.**
>
> 1. Calcolo $A w$. Prima riga: $2 \cdot 3 + 1 \cdot 1 = 7$. Seconda riga: $1 \cdot 3 + 1 \cdot 1 = 4$. Esce il vettore $(7, 4)$.
> 2. Prodotto di $v$ con questo vettore: $\langle (1, 2), (7, 4) \rangle = 1 \cdot 7 + 2 \cdot 4 = 15$.
>
> Viene 15 tutte e due le volte.

Non è fortuna. Con questa matrice i due conti danno lo stesso numero per ogni coppia di vettori. Ora rifacciamo l'esperimento con un'altra matrice:

$$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$$

> [!ESEMPIO] I due conti con la matrice $B$
> Questa volta usiamo i due vettori della base canonica, $e_1 = (1, 0)$ ed $e_2 = (0, 1)$.
>
> **Primo conto.** $B e_1$ è la prima colonna di $B$, cioè $(1, 0)$. Il prodotto con $e_2$ è $\langle (1, 0), (0, 1) \rangle = 0$.
>
> **Secondo conto.** $B e_2$ è la seconda colonna di $B$, cioè $(1, 1)$. Il prodotto di $e_1$ con questo vettore è $\langle (1, 0), (1, 1) \rangle = 1$.
>
> Il primo conto dà 0, il secondo dà 1. Sono diversi.

Che differenza c'è tra le due matrici? La prima è simmetrica, la seconda no. Tra poco vedrai che il motivo è proprio questo.

> [!IDEA]
> Una macchina è **autoaggiunta** quando, dentro il prodotto, puoi spostarla dal primo vettore al secondo senza cambiare il risultato.

Le dispense lo scrivono così.

> [!DEF] 25.5 · Endomorfismo autoaggiunto
> Un endomorfismo $T \colon V \to V$ è **autoaggiunto** se
> $$\langle T(v), w \rangle = \langle v, T(w) \rangle \quad \text{per ogni } v, w \in V.$$

**Come si legge.**

- $T \colon V \to V$ è la macchina: un endomorfismo dello spazio $V$.
- A sinistra dell'uguale c'è il primo conto: passo $v$ nella macchina, poi faccio il prodotto con $w$.
- A destra c'è il secondo conto: passo $w$ nella macchina, poi faccio il prodotto di $v$ con il vettore che esce.
- «Per ogni $v, w \in V$» vuol dire che i due conti devono dare lo stesso numero con qualunque coppia di vettori, non solo con qualcuna.

Il nome aiuta a ricordare: «auto» vuol dire «sé stessa». Dall'altra parte del prodotto ci va la stessa macchina, non un'altra.

### Non confonderla con un'isometria

La definizione assomiglia a quella di **isometria** (lezione L22). Un'isometria è un movimento rigido, come una rotazione: non cambia né le lunghezze né gli angoli. Le dispense avvertono che tra le due definizioni ci sono somiglianze, ma anche differenze importanti. Conviene vederle una accanto all'altra.

| | Isometria | Endomorfismo autoaggiunto |
|---|---|---|
| condizione | $\langle T(v), T(w) \rangle = \langle v, w \rangle$ | $\langle T(v), w \rangle = \langle v, T(w) \rangle$ |
| dove compare $T$ | in tutti e due i posti | in un posto solo per volta |
| matrice in una base ortonormale (caso reale) | ortogonale: ${}^t A A = I$ | simmetrica: ${}^t A = A$ |
| esempio in $\R^2$ | la rotazione $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ |

### Come si riconosce dalla matrice

La definizione chiede di controllare tutte le coppie di vettori, e sono infinite. Serve un test che si faccia in pochi secondi. Il test guarda la matrice della macchina.

Ricorda (lezione L15): scelta una base $\mathcal B$, una macchina $T$ si scrive come una matrice, che si indica con $[T]^{\mathcal B}_{\mathcal B}$. Nelle sue colonne ci sono le coordinate dei vettori in cui la macchina manda i vettori della base.

Per il test la base deve essere **ortonormale**: vettori di norma 1, ortogonali tra loro. La base canonica lo è.

Scegliamo quindi una base ortonormale $\mathcal B$ di $V$, e chiamiamo $A = [T]^{\mathcal B}_{\mathcal B}$ la matrice della macchina $T$ in quella base. Le dispense dimostrano questo risultato.

> [!PROP] 25.6
> L'endomorfismo $T$ è autoaggiunto se e solo se la matrice $A$ è hermitiana.

**Come si legge.** «Se e solo se» vuol dire che le due cose vanno sempre insieme. Se la macchina è autoaggiunta, la matrice è hermitiana. Se la matrice è hermitiana, la macchina è autoaggiunta. Nel caso reale «hermitiana» vuol dire «simmetrica». Attenzione all'ipotesi scritta prima del riquadro: $A$ è la matrice di $T$ in una base **ortonormale**.

Perché è vero? Riguarda l'esperimento con la matrice $B$ e i vettori della base canonica. Il primo conto ha dato 0: è il numero di $B$ nella riga 2 e nella colonna 1. Il secondo conto ha dato 1: è il numero nella riga 1 e nella colonna 2. I due conti «pescano» due numeri della matrice che sono uno lo specchio dell'altro.

Quindi i due conti coincidono quando i numeri a specchio coincidono. Se succede per tutte le coppie di posti, la matrice è simmetrica. Con i numeri complessi il secondo conto pesca il numero **coniugato**, e «simmetrica» diventa «hermitiana».

> [!DIM] Proposizione 25.6
> Chiamiamo $v_1, \dots, v_n$ i vettori della base ortonormale $\mathcal B$.
>
> 1. **Basta controllare i vettori della base.** Ogni vettore è una ricetta fatta con i vettori della base. Il prodotto rispetta somme e multipli: è bilineare nel caso reale, sesquilineare nel caso complesso. Quindi, se l'uguaglianza della Definizione 25.5 vale quando $v$ e $w$ sono due vettori della base, vale per tutti i vettori.
> 2. **In una base ortonormale la tabella dei prodotti è la matrice identità.** Infatti $\langle v_i, v_j \rangle$ vale 1 se $i = j$ e vale 0 altrimenti. La matrice identità $I_n$ ha 1 sulla diagonale e 0 negli altri posti. Quindi $\langle v, w \rangle = {}^t[v]_{\mathcal B} \cdot I_n \cdot \overline{[w]_{\mathcal B}}$.
> 3. **Primo conto.** Le coordinate di $T(v_i)$ sono la colonna numero $i$ di $A$, che le dispense scrivono $A^i$. Le coordinate di $v_j$ sono il vettore $e_j$ della base canonica. Quindi
>    $$\langle T(v_i), v_j \rangle = {}^t A^i\, e_j = A_{ji},$$
>    cioè il numero al posto $j$ della colonna $i$.
> 4. **Secondo conto.** Le coordinate di $v_i$ sono $e_i$. Le coordinate di $T(v_j)$ sono la colonna $A^j$, che va coniugata perché sta al secondo posto:
>    $$\langle v_i, T(v_j) \rangle = {}^t e_i\, \overline{A^j} = \overline{A_{ij}}.$$
> 5. **Conclusione.** $T$ è autoaggiunto esattamente quando $A_{ji} = \overline{A_{ij}}$ per ogni $i, j$, cioè quando $A$ è hermitiana. Nel caso reale il conto è lo stesso senza i coniugati: la condizione diventa $A_{ji} = A_{ij}$, cioè $A$ simmetrica.

Se come base si prende la base canonica di $\R^n$ o di $\C^n$, che è ortonormale per il prodotto euclideo, si ottiene il criterio che si usa nel quiz.

> [!COROLLARIO] 25.7
> Sia $A$ una matrice $n \times n$. L'endomorfismo $L_A \colon \C^n \to \C^n$ è autoaggiunto rispetto al prodotto hermitiano euclideo di $\C^n$ se e solo se la matrice $A$ è hermitiana. Analogamente, se $A$ è reale, l'endomorfismo $L_A \colon \R^n \to \R^n$ è autoaggiunto rispetto al prodotto scalare euclideo di $\R^n$ se e solo se la matrice $A$ è simmetrica.

**Come si legge.**

- Una matrice $n \times n$ («enne per enne») ha $n$ righe e $n$ colonne. $L_A$ è la macchina «moltiplica per $A$».
- «Autoaggiunto rispetto al prodotto hermitiano euclideo» vuol dire: nella Definizione 25.5 il prodotto che si usa è quello euclideo.
- In pratica: per sapere se la macchina è autoaggiunta guardi solo la matrice. Con i numeri complessi deve essere hermitiana. Con i numeri reali deve essere simmetrica.

> [!METODO] Un'applicazione data con una formula è autoaggiunta?
> 1. Scrivi la matrice nella base canonica. Per $T(x, y) = (ax + by,\ cx + dy)$ la matrice è $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$: ogni **riga** contiene i numeri di una **componente** del risultato.
> 2. Se i numeri sono reali: l'applicazione è autoaggiunta esattamente quando la matrice è **simmetrica**. Qui vuol dire $b = c$.
> 3. Se i numeri sono complessi: è autoaggiunta esattamente quando la matrice è **hermitiana**. Qui vuol dire $a$ e $d$ reali, e $c$ uguale al coniugato di $b$.

Una **componente** è uno dei numeri del vettore che esce: la prima componente è il primo numero, la seconda è il secondo.

> [!ESEMPIO] Tre applicazioni di $\C^2$
> **Prima applicazione:** $T(x, y) = \big(x + (1 - i)y,\ (1 + i)x + 2y\big)$.
>
> 1. Nella prima componente i numeri davanti a $x$ e a $y$ sono $1$ e $1 - i$: è la prima riga. Nella seconda componente sono $1 + i$ e $2$: è la seconda riga.
> 2. La matrice è $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 2 \end{pmatrix}$.
> 3. La diagonale è reale. Il coniugato di $1 + i$ è $1 - i$: gli specchi sono coniugati.
>
> La matrice è hermitiana, quindi $T$ è autoaggiunto.
>
> **Seconda applicazione:** $T(x, y) = (ix,\ y)$.
>
> 1. La matrice è $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$.
> 2. Sulla diagonale c'è $i$, che non è reale.
>
> La matrice non è hermitiana, quindi $T$ non è autoaggiunto. Controllo con la definizione, prendendo $v = w = e_1$. Primo conto: $T(e_1) = (i, 0)$, e $\langle (i, 0), (1, 0) \rangle = i$. Secondo conto: $\langle (1, 0), (i, 0) \rangle = 1 \cdot (-i) = -i$. I due conti danno numeri diversi.
>
> **Terza applicazione:** $T(x, y) = (x + iy,\ ix + y)$.
>
> 1. La matrice è $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$.
> 2. È simmetrica. Ma il coniugato di $i$ è $-i$, e in basso a sinistra c'è $i$.
>
> La matrice **non** è hermitiana, quindi $T$ non è autoaggiunto. Con i numeri complessi «simmetrica» non basta.

> [!OSSERVAZIONE] Il doppio ruolo delle matrici hermitiane (p. 132)
> In questa lezione le matrici hermitiane (simmetriche, nel caso reale) fanno due mestieri diversi.
>
> - Rappresentano un **prodotto** hermitiano o scalare: una regola che prende due vettori e restituisce un numero.
> - Rappresentano un **endomorfismo** autoaggiunto in una base ortonormale: una macchina che prende un vettore e restituisce un vettore.
>
> Sono due oggetti diversi, scritti con lo stesso tipo di tabella. Non vanno confusi.

### Perché serve una base ortonormale

La Proposizione 25.6 vale solo se la base è ortonormale. Le dispense lo mostrano con un esempio: la stessa macchina scritta in tre basi diverse. Per cambiare base serve la formula della lezione L16.

> [!RIPASSO] la matrice di una macchina in un'altra base (lezioni L10 e L16)
> Hai una macchina con matrice $A$ nella base canonica, e vuoi la sua matrice in un'altra base.
>
> 1. Metti i vettori della nuova base in colonna, uno accanto all'altro. La matrice che ottieni si chiama $M$.
> 2. Calcola l'**inversa** di $M$, che si scrive $M^{-1}$ e si legge «emme alla meno uno». È la matrice che, moltiplicata per $M$, dà la matrice identità.
> 3. La matrice della macchina nella nuova base è il prodotto $M^{-1} A M$.
>
> Per una matrice con due righe e due colonne l'inversa si scrive subito. Prima calcoli il **determinante**: il prodotto dei due numeri sulla diagonale, meno il prodotto degli altri due. Poi scambi i due numeri sulla diagonale, cambi segno agli altri due e dividi tutto per il determinante.
> $$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc \qquad\qquad \begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$
>
> Il prodotto di due matrici si fa riga per colonna. Il numero nella riga 1 e nella colonna 2 del risultato è la riga 1 della prima matrice per la colonna 2 della seconda.

> [!ESEMPIO] 25.8
> Prendiamo $\R^2$ con il prodotto scalare euclideo e l'endomorfismo $L_A$ della matrice
> $$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}.$$
> $L_A$ è autoaggiunto, perché la matrice $A$ è simmetrica e stiamo usando la base canonica, che è ortonormale.
>
> **Un'altra base ortonormale.** Scriviamo $L_A$ nella base $\mathcal B = \left\{ \begin{pmatrix} 0 \\ 1 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \end{pmatrix} \right\}$. È ortonormale: i due vettori sono lunghi 1 e il loro prodotto scalare è $0 \cdot (-1) + 1 \cdot 0 = 0$.
>
> 1. I vettori della base in colonna: $M = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.
> 2. Il determinante: $0 \cdot 0 - (-1) \cdot 1 = 1$.
> 3. L'inversa. Scambio i numeri sulla diagonale (sono due zeri), cambio segno agli altri due e divido per 1: $M^{-1} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$.
> 4. Il primo prodotto, riga per colonna:
>    $$M^{-1} A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 0 \cdot 2 + 1 \cdot 1 & 0 \cdot 1 + 1 \cdot 1 \\ -1 \cdot 2 + 0 \cdot 1 & -1 \cdot 1 + 0 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}.$$
> 5. Il secondo prodotto:
>    $$(M^{-1} A)\, M = \begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix} \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 \cdot 0 + 1 \cdot 1 & 1 \cdot (-1) + 1 \cdot 0 \\ -2 \cdot 0 - 1 \cdot 1 & -2 \cdot (-1) - 1 \cdot 0 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}.$$
>
> Le dispense chiamano $A'$ questa nuova matrice. È ancora simmetrica: fuori dalla diagonale c'è $-1$ in tutti e due i posti. Questo è coerente con la Proposizione 25.6.
>
> **Una base non ortonormale.** Ora scriviamo $L_A$ nella base $\mathcal B = \left\{ \begin{pmatrix} -1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \end{pmatrix} \right\}$. Non è ortonormale: il prodotto scalare dei due vettori è $-1 \cdot 1 + 1 \cdot 0 = -1$, non 0.
>
> 1. I vettori della base in colonna: $M = \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix}$.
> 2. Il determinante: $-1 \cdot 0 - 1 \cdot 1 = -1$.
> 3. L'inversa. Scambio i numeri sulla diagonale, cambio segno agli altri due e divido per $-1$:
>    $$M^{-1} = \frac{1}{-1} \begin{pmatrix} 0 & -1 \\ -1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}.$$
> 4. Il primo prodotto:
>    $$M^{-1} A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 0 \cdot 2 + 1 \cdot 1 & 0 \cdot 1 + 1 \cdot 1 \\ 1 \cdot 2 + 1 \cdot 1 & 1 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 3 & 2 \end{pmatrix}.$$
> 5. Il secondo prodotto:
>    $$(M^{-1} A)\, M = \begin{pmatrix} 1 & 1 \\ 3 & 2 \end{pmatrix} \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 \cdot (-1) + 1 \cdot 1 & 1 \cdot 1 + 1 \cdot 0 \\ 3 \cdot (-1) + 2 \cdot 1 & 3 \cdot 1 + 2 \cdot 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -1 & 3 \end{pmatrix}.$$
>
> Questa matrice **non** è simmetrica: fuori dalla diagonale ci sono $1$ e $-1$.

La macchina è sempre la stessa, ed è autoaggiunta: la definizione parla di vettori e di prodotti, non di basi. È la **matrice** che, scritta in una base non ortonormale, perde la simmetria.

> [!TRAPPOLA] «La matrice non è simmetrica, quindi $T$ non è autoaggiunto»
> Questa conclusione è giusta solo se la base è **ortonormale**. Nel quiz le applicazioni sono quasi sempre date con una formula nelle coordinate canoniche. La base canonica è ortonormale, quindi lì il criterio del Corollario 25.7 si usa senza problemi.

::: prova L'applicazione $T(x, y) = (x + 3y,\ 3x - 2y)$ di $\R^2$ è autoaggiunta rispetto al prodotto scalare euclideo?
La matrice ha una riga per ogni componente: $\begin{pmatrix} 1 & 3 \\ 3 & -2 \end{pmatrix}$.

Fuori dalla diagonale c'è 3 in tutti e due i posti: la matrice è simmetrica. Quindi sì, l'applicazione è autoaggiunta.
:::

::: prova L'applicazione $T(x, y) = (x + 2i\,y,\ -2i\,x + y)$ di $\C^2$ è autoaggiunta rispetto al prodotto hermitiano euclideo?
La matrice è $\begin{pmatrix} 1 & 2i \\ -2i & 1 \end{pmatrix}$.

Con i numeri complessi deve essere hermitiana. La diagonale è reale. Il coniugato di $-2i$ è $2i$, che è il numero in alto a destra. Quindi sì, è autoaggiunta.
:::

> [!RICORDA]
> - $T$ è **autoaggiunto** quando $\langle T(v), w \rangle = \langle v, T(w) \rangle$ per ogni coppia di vettori: la macchina si sposta da un posto all'altro del prodotto.
> - In una base **ortonormale**: autoaggiunto vuol dire matrice simmetrica (numeri reali) o hermitiana (numeri complessi).
> - Per un'applicazione data con una formula: scrivi la matrice, una riga per ogni componente, e guardala.
> - In una base non ortonormale la matrice di una macchina autoaggiunta può non essere simmetrica.

## Stanze da cui non si esce: sottospazi invarianti (p. 133)

Un sottospazio è una stanza dentro lo spazio: una retta o un piano che passano per il punto di partenza (lezione L06). Questa sezione parla delle stanze speciali per una macchina: quelle da cui la macchina non fa uscire nessun vettore.

A che cosa serve: è l'idea che fa funzionare la dimostrazione del teorema spettrale (lezione L26). In questa sezione lo spazio $V$ e la macchina $T$ sono come nella sezione precedente.

### Una retta che resta al suo posto

Prendiamo questa matrice, che è simmetrica:

$$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$$

E prendiamo la retta di tutti i multipli del vettore $(1, 1)$: i vettori $(1, 1)$, $(2, 2)$, $(-1, -1)$, $(5, 5)$ e così via. Questa retta si scrive $\Span((1, 1))$. Ricorda (lezione L06): lo Span di un vettore è l'insieme di tutti i suoi multipli.

Passiamo nella macchina qualche vettore della retta.

| Entra | Conto | Esce | È ancora sulla retta? |
|---|---|---|---|
| $(1, 1)$ | $(2 \cdot 1 + 1 \cdot 1,\ 1 \cdot 1 + 2 \cdot 1)$ | $(3, 3)$ | sì: è 3 volte $(1, 1)$ |
| $(2, 2)$ | $(2 \cdot 2 + 1 \cdot 2,\ 1 \cdot 2 + 2 \cdot 2)$ | $(6, 6)$ | sì: è 6 volte $(1, 1)$ |
| $(-1, -1)$ | $(-2 - 1,\ -1 - 2)$ | $(-3, -3)$ | sì |

Ogni vettore della retta esce moltiplicato per 3, quindi resta sulla retta. La macchina sposta i vettori **lungo** la retta, ma non li porta mai fuori. Una stanza così si chiama **invariante**.

Non tutte le rette sono così. Prendi la retta dei multipli di $(1, 0)$. Entra $(1, 0)$ ed esce la prima colonna della matrice, cioè $(2, 1)$. Questo vettore non è un multiplo di $(1, 0)$: è uscito dalla retta. Quella retta non è invariante.

Le dispense lo scrivono così.

> [!DEF] 25.9 · Sottospazio invariante
> Sia $T \colon V \to V$ un endomorfismo. Un sottospazio $U \subseteq V$ è **$T$-invariante** se $T(U) \subseteq U$, cioè se $T$ manda gli elementi di $U$ in $U$.

**Come si legge.**

- Il simbolo $\subseteq$ si legge «è contenuto in». $U \subseteq V$ dice che la stanza $U$ sta dentro lo spazio $V$.
- $T(U)$ è l'insieme di tutti i vettori che escono dalla macchina quando entrano i vettori di $U$.
- $T(U) \subseteq U$ dice: tutto quello che esce, partendo da $U$, sta ancora in $U$.
- «$T$-invariante» si legge «ti invariante»: invariante per la macchina $T$. La stessa stanza può essere invariante per una macchina e non per un'altra.

Tre esempi che conosci già.

- La stanza che contiene solo il vettore zero e la stanza grande quanto tutto lo spazio sono sempre invarianti.
- Ricorda (lezione L17): un **autovettore** è un vettore $v$, diverso da zero, che la macchina manda in un suo multiplo. Si scrive $T(v) = \lambda v$, e il numero $\lambda$ si chiama autovalore. Allora la retta dei multipli di $v$ è invariante. Nell'esempio, $(1, 1)$ è un autovettore con autovalore 3.
- Ogni **autospazio**, cioè l'insieme degli autovettori di uno stesso autovalore più il vettore zero, è invariante. Oltre le dispense: lo sono anche il nucleo e l'immagine della macchina (lezione L14).

### La stanza perpendicolare

Torniamo alla retta $U$ dei multipli di $(1, 1)$. Chi sono i vettori perpendicolari a tutta la retta? Il vettore $(1, -1)$ lo è:

$$\langle (1, -1), (1, 1) \rangle = 1 \cdot 1 + (-1) \cdot 1 = 0$$

Lo spazio ortogonale $U^\perp$ è la retta dei multipli di $(1, -1)$. Passiamo nella macchina anche questo vettore:

$$A \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \cdot 1 + 1 \cdot (-1) \\ 1 \cdot 1 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$

Esce lo stesso vettore: resta sulla sua retta. Quindi anche la retta perpendicolare è invariante.

Guarda la figura. Le due rette tratteggiate sono le due stanze invarianti, e sono perpendicolari. Il vettore $(1, 0)$, in grigio, esce invece dalla sua retta: finisce in $(2, 1)$.

```grafico
titolo: La macchina di $A$ lascia al loro posto due rette perpendicolari. Il vettore $(1, 0)$ invece esce dalla sua retta
x: -4 4
y: -4 4
retta: 0 0 1 1 | verde | tratteggio
retta: 0 0 1 -1 | viola | tratteggio
vettore: 3 3 | verde | sottile | $A(1, 1) = (3, 3)$ | so
vettore: 1 1 | verde | spesso | $(1, 1)$ | no
vettore: 1 -1 | viola | spesso | $(1, -1) = A(1, -1)$ | se
vettore: 1 0 | grigio | $(1, 0)$ | s
vettore: 2 1 | ambra | $A(1, 0) = (2, 1)$ | e
```

Non è un caso. Succede perché la matrice è simmetrica, cioè perché la macchina è autoaggiunta.

> [!PROP] 25.10
> Sia $T \colon V \to V$ un endomorfismo autoaggiunto e $U \subseteq V$ un sottospazio. Se $T(U) \subseteq U$, allora $T(U^\perp) \subseteq U^\perp$. In altre parole, se $U$ è $T$-invariante allora anche $U^\perp$ è $T$-invariante.

**Come si legge.** $U^\perp$ è la stanza di tutti i vettori perpendicolari a ogni vettore di $U$. La proposizione dice: se una macchina autoaggiunta non fa uscire nessun vettore dalla stanza $U$, allora non fa uscire nessun vettore nemmeno dalla stanza perpendicolare.

Perché è vero? Il trucco è spostare la macchina. Fai il prodotto tra un vettore perpendicolare alla stanza, passato nella macchina, e un vettore della stanza. Sposti la macchina sul secondo vettore, che resta nella stanza. E il prodotto tra un vettore perpendicolare alla stanza e uno della stanza fa 0.

> [!DIM] Proposizione 25.10
> 1. Prendo un vettore qualsiasi $v$ di $U^\perp$. Devo mostrare che anche $T(v)$ sta in $U^\perp$, cioè che $T(v)$ è ortogonale a ogni vettore $u$ di $U$.
> 2. Prendo un vettore $u$ di $U$. Siccome $T$ è autoaggiunto, sposto la macchina sull'altro vettore: $\langle T(v), u \rangle = \langle v, T(u) \rangle$.
> 3. $U$ è invariante, quindi $T(u)$ sta ancora in $U$. E $v$ è ortogonale a tutti i vettori di $U$. Quindi $\langle v, T(u) \rangle = 0$.
> 4. Allora $\langle T(v), u \rangle = 0$ per ogni $u$ di $U$. Cioè $T(v)$ sta in $U^\perp$.

Senza l'ipotesi «autoaggiunto» la proposizione è falsa. Ecco un esempio.

> [!ESEMPIO] Una macchina non autoaggiunta
> Prendiamo la matrice $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, che non è simmetrica.
>
> 1. La retta $U$ dei multipli di $e_1 = (1, 0)$ è invariante: $B e_1$ è la prima colonna, cioè $(1, 0)$, che è $e_1$ stesso.
> 2. La retta perpendicolare $U^\perp$ è quella dei multipli di $e_2 = (0, 1)$.
> 3. $B e_2$ è la seconda colonna, cioè $(1, 1)$. Non è un multiplo di $(0, 1)$: è uscito dalla retta.
>
> Quindi $U$ è invariante ma $U^\perp$ no.

> [!IDEA] A che cosa serve
> È il motore della dimostrazione del teorema spettrale (lezione L26). Trovi un autovettore di una macchina autoaggiunta. La retta dei suoi multipli è invariante, quindi lo è anche tutto lo spazio perpendicolare a quella retta. Allora la macchina si può guardare solo lì dentro, in uno spazio con una dimensione in meno, e si ricomincia. Un passo dopo l'altro si costruisce una base ortonormale fatta di autovettori.

Con lo strumento qui sotto puoi vedere le due rette dell'esempio.

```widget matrice
titolo: Una matrice simmetrica: le rette di autovettori sono invarianti e perpendicolari
a: 2 1; 1 2
x: 1 1
```

Che cosa provare.

1. Lo strumento disegna le due rette di autovettori della matrice $A$. Sono la retta dei multipli di $(1, 1)$, con autovalore 3, e la retta dei multipli di $(1, -1)$, con autovalore 1. Sono **perpendicolari**.
2. Trascina il vettore $x$ lungo una delle due rette. Il vettore $A x$ resta sulla stessa retta: la retta è invariante.
3. Porta $x$ fuori dalle due rette. Adesso $A x$ punta in un'altra direzione.
4. Premi il pulsante «taglio». Carica la matrice $B$ dell'esempio qui sopra. La riga orizzontale resta invariante, ma quella verticale no.

> [!OLTRE] Dove trovarlo nel libro
> Nel libro di Martelli i prodotti hermitiani sono nel §11.1 (pp. 347–350): definizione 11.1.1, definito positivo 11.1.3, prodotto hermitiano euclideo e matrici hermitiane nei §11.1.3–11.1.4, un esempio con gli integrali di funzioni complesse nel §11.1.5, matrice associata nel §11.1.6.
>
> Gli endomorfismi autoaggiunti e i sottospazi invarianti sono nel §11.2 (pp. 350–352). Le corrispondenze con le dispense: la Proposizione 11.2.1 è la 25.6, il Corollario 11.2.2 è il 25.7, l'Esempio 11.2.3 è il 25.8, la Proposizione 11.2.5 è la 25.10.

::: prova Prendi la matrice $\begin{pmatrix} 3 & 0 \\ 0 & 5 \end{pmatrix}$. La retta dei multipli di $(1, 0)$ è invariante? E quella dei multipli di $(1, 1)$?
Entra $(1, 0)$ ed esce la prima colonna, $(3, 0)$. È 3 volte $(1, 0)$: resta sulla retta. La prima retta è invariante.

Entra $(1, 1)$ ed esce $(3 \cdot 1 + 0 \cdot 1,\ 0 \cdot 1 + 5 \cdot 1) = (3, 5)$. Non è un multiplo di $(1, 1)$, perché i due numeri sono diversi. La seconda retta non è invariante.
:::

::: prova Una macchina autoaggiunta di $\R^3$ ha come stanza invariante un piano che passa per il punto di partenza. Che cosa puoi dire della retta perpendicolare al piano?
Per la Proposizione 25.10 anche la retta perpendicolare è invariante.

In più: un vettore della retta, passando nella macchina, resta sulla retta. Quindi diventa un multiplo di sé stesso. Ogni vettore della retta, diverso da zero, è un autovettore.
:::

> [!RICORDA]
> - Un sottospazio $U$ è **invariante** per la macchina $T$ quando $T$ manda i vettori di $U$ ancora dentro $U$.
> - La retta dei multipli di un autovettore è sempre invariante.
> - Se $T$ è **autoaggiunto** e $U$ è invariante, anche $U^\perp$ è invariante. Senza «autoaggiunto» non è vero.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $i$ | «i» | il numero per cui $i \cdot i = -1$ | $i^2 = -1$ |
| $a + bi$ | «a più b i» | un numero complesso: parte reale $a$, parte immaginaria $b$ | $3 + 2i$ |
| $\R$, $\C$ | «erre», «ci» | l'insieme dei numeri reali, l'insieme dei numeri complessi | $5 \in \R$, $2i \in \C$ |
| $\in$ | «appartiene a» | sta dentro l'insieme | $(1, i) \in \C^2$ |
| $\C^n$ | «ci alla enne» | le liste di $n$ numeri complessi | $(1, i)$ sta in $\C^2$ |
| $x_1, x_2$ | «ics uno», «ics due» | il primo e il secondo numero del vettore $x$ | per $x = (1, i)$: $x_1 = 1$, $x_2 = i$ |
| $\bar z$ | «zeta coniugato» | il numero $z$ con il segno cambiato davanti alla $i$ | $\overline{3 + 2i} = 3 - 2i$ |
| $\lvert z \rvert$ | «modulo di zeta» | la distanza del numero dal punto di partenza | $\lvert 3 + 4i \rvert = 5$ |
| $\bar x$, $\bar A$ | «ics coniugato», «a coniugata» | il vettore o la matrice con tutti i numeri coniugati | se $x = (1, i)$, allora $\bar x = (1, -i)$ |
| ${}^t x$, ${}^t A$ | «ics trasposto», «a trasposta» | righe e colonne scambiate; un vettore in colonna diventa una riga | ${}^t \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$ |
| $\langle v, w \rangle$ | «prodotto di vi e vu doppia» | il numero che il prodotto ricava da due vettori | $\langle (1, i), (2,\ 1 + i) \rangle = 3 + i$ |
| $\lVert v \rVert$ | «norma di vi» | la lunghezza del vettore | $\lVert (1, i) \rVert = \sqrt 2$ |
| $v \neq 0$ | «vi diverso da zero» | $v$ non è il vettore fatto di soli zeri | $(1, i) \neq 0$ |
| $\lambda$, $\mu$ | «lambda», «mi» | lettere greche: indicano numeri | $\lambda = 2i$ |
| $v'$ | «vi primo» | il nome di un altro vettore | $x' = (1, 0)$ |
| $V \times V$ | «vi per vi» | le coppie di vettori di $V$ | $(v, w)$ |
| $\longrightarrow$, $\longmapsto$ | «va in», «viene mandato in» | dicono che cosa entra e che cosa esce | $(v, w) \longmapsto \langle v, w \rangle$ |
| $M(m, n, \C)$ | «emme di emme, enne, ci» | le matrici con $m$ righe e $n$ colonne fatte di numeri complessi | una matrice con 2 righe e 2 colonne sta in $M(2, 2, \C)$ |
| $H_{ij}$ | «acca i j» | il numero della matrice $H$ nella riga $i$ e nella colonna $j$ | $H_{12}$: riga 1, colonna 2 |
| $g_H$ | «gi acca» | il prodotto hermitiano fabbricato dalla matrice $H$ | $g_H(x, y) = {}^t x\, H\, \bar y$ |
| $e_1, \dots, e_n$ | «e uno, …, e enne» | la base canonica: un 1 in un posto e 0 negli altri | in $\C^2$: $e_1 = (1, 0)$, $e_2 = (0, 1)$ |
| $\mathcal B$ | «bi» | il nome di una base | $\mathcal B = \{v_1, \dots, v_n\}$ |
| $[v]_{\mathcal B}$ | «coordinate di vi nella base bi» | le quantità della ricetta che dà $v$ con i vettori della base | $[b_1 + b_2]_{\mathcal B} = (1, 1)$ |
| $T \colon V \to V$ | «ti da vi a vi» | una macchina (endomorfismo) che prende e restituisce vettori di $V$ | $T(x, y) = (2x + y,\ x + y)$ |
| $T(v)$ | «ti di vi» | il vettore che esce quando entra $v$ | |
| $L_A$ | «elle a» | la macchina «moltiplica per la matrice $A$» | $L_A(v) = A v$ |
| $[T]^{\mathcal B}_{\mathcal B}$ | «matrice di ti nella base bi» | la macchina $T$ scritta con i numeri, nella base $\mathcal B$ | |
| $I$, $I_n$ | «identità» | la matrice con 1 sulla diagonale e 0 negli altri posti | $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| $M^{-1}$ | «emme alla meno uno» | l'inversa: moltiplicata per $M$ dà l'identità | |
| $\det$ | «determinante» | per una matrice con due righe e due colonne: $ad - bc$ | $\det \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = 1$ |
| $\Span(v)$ | «span di vi» | tutti i multipli del vettore $v$ | $\Span((1, 1))$ contiene $(2, 2)$ |
| $U \subseteq V$ | «u è contenuto in vi» | la stanza $U$ sta dentro lo spazio $V$ | |
| $T(U)$ | «ti di u» | tutti i vettori che escono quando entrano i vettori di $U$ | |
| $U^\perp$ | «u ortogonale» | tutti i vettori ortogonali a ogni vettore di $U$ | se $U = \Span((1, 1))$, allora $U^\perp = \Span((1, -1))$ |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli.** Solo domande del quiz, ma frequenti: ce n'è una in 9 dei 15 appelli dal 2024 al 2026. Sono punti alla portata, se conosci il metodo. Le domande sono di tre tipi.

- **«Quale delle seguenti è un prodotto hermitiano su $\C^2$?»** Appelli del 24/01/2024 (domanda 4), 16/01/2025 (domanda 9), 07/02/2025 (domanda 6), 02/09/2025 (domanda 7), 15/01/2026 (domanda 2). Le cinque formule cambiano nei coefficienti e nelle lineette del coniugato.
- **«Quale matrice è (o non è) hermitiana?»** Appelli del 10/06/2024 (domanda 9) e del 10/07/2024 (domanda 10).
- **«Quale applicazione è (o non è) autoaggiunta?»** Appelli del 08/02/2024 (domanda 9, su $\C^2$) e del 03/06/2026 (domanda 9, su $\R^2$).

In tutti e tre i casi si finisce a guardare una matrice.

> [!METODO] Le tre domande tipiche
> 1. **Una formula è un prodotto hermitiano?** Controlla le lineette sui numeri di $y$. Scrivi la matrice dei coefficienti: riga = numerino di $x$, colonna = numerino di $\bar y$. Controlla che sia hermitiana.
> 2. **Una matrice è hermitiana?** Guarda la diagonale: deve essere reale. Guarda gli specchi: devono essere coniugati.
> 3. **Un'applicazione è autoaggiunta?** Scrivi la matrice, una riga per ogni componente. Con i numeri reali deve essere simmetrica. Con i numeri complessi deve essere hermitiana.

### Una domanda vera, letta insieme

**Appello del 15/01/2026, domanda 2.** Il testo: «Scriviamo $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$. Quale delle seguenti è un prodotto hermitiano?». Le cinque risposte:

| Risposta | Formula |
|---|---|
| (a) | $x_1 \bar y_1 + 3i x_1 \bar y_2 + 2i x_2 \bar y_1 + x_2 \bar y_2$ |
| (b) | $x_1 y_1 + 2i x_1 y_2 - 2i x_2 y_1 + 2 x_2 y_2$ |
| (c) | $3i x_1 \bar y_1 + 2 x_1 \bar y_2 + 2 x_2 \bar y_1 + x_2 \bar y_2$ |
| (d) | $x_1 \bar y_1 + 2 x_1 \bar y_2 - 2 x_2 \bar y_1 + 2 x_2 \bar y_2$ |
| (e) | $3 x_1 \bar y_1 + i x_1 \bar y_2 - i x_2 \bar y_1 - x_2 \bar y_2$ |

**In pratica chiede:** hai due vettori di due numeri complessi e cinque ricette per ricavarne un numero. Quale ricetta rispetta le tre regole del prodotto hermitiano? Non serve controllare le regole una per una: basta il metodo della matrice.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: le lineette.** Nella (b) i numeri di $y$ non sono coniugati. Si scarta.
>
> **Passo 2: le matrici.** Per ogni formula rimasta scrivo i coefficienti in una tabella. La riga è il numerino di $x$, la colonna è il numerino di $\bar y$.
>
> | Risposta | Matrice | Diagonale reale? | Specchi coniugati? | Hermitiana? |
> |---|---|---|---|---|
> | (a) | $\begin{pmatrix} 1 & 3i \\ 2i & 1 \end{pmatrix}$ | sì | no: il coniugato di $2i$ è $-2i$, non $3i$ | no |
> | (c) | $\begin{pmatrix} 3i & 2 \\ 2 & 1 \end{pmatrix}$ | no: c'è $3i$ | sì | no |
> | (d) | $\begin{pmatrix} 1 & 2 \\ -2 & 2 \end{pmatrix}$ | sì | no: il coniugato di $-2$ è $-2$, non $2$ | no |
> | (e) | $\begin{pmatrix} 3 & i \\ -i & -1 \end{pmatrix}$ | sì | sì: il coniugato di $-i$ è $i$ | **sì** |
>
> **Passo 3: la risposta.** È la (e).
>
> **La tentazione.** La (e) ha $-1$ sulla diagonale, quindi non è definita positiva: con il vettore $e_2 = (0, 1)$ dà $-1$. Viene voglia di scartarla. Ma la domanda chiede solo «prodotto hermitiano», e la Definizione 25.1 non chiede che il prodotto sia positivo.

### Altre due domande vere

> [!ESAME] Appello del 03/06/2026, domanda 9
> *Quale delle seguenti applicazioni lineari $T \colon \R^2 \to \R^2$ è autoaggiunta rispetto al prodotto scalare euclideo? (a) $T(x, y) = (2x - y, -x + y)$; (b) $T(x, y) = (x - y, x + y)$; (c) $T(x, y) = (x, x)$; (d) $T(x, y) = (-x + y, 2x - y)$; (e) $T(x, y) = (x + y, y)$.*
>
> **Soluzione.** Per il Corollario 25.7 basta scrivere le matrici, una riga per componente, e cercare quella simmetrica.
>
> | Risposta | Matrice | Numeri fuori dalla diagonale | Simmetrica? |
> |---|---|---|---|
> | (a) | $\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$ | $-1$ e $-1$ | **sì** |
> | (b) | $\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$ | $-1$ e $1$ | no |
> | (c) | $\begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$ | $0$ e $1$ | no |
> | (d) | $\begin{pmatrix} -1 & 1 \\ 2 & -1 \end{pmatrix}$ | $1$ e $2$ | no |
> | (e) | $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ | $1$ e $0$ | no |
>
> La risposta è la (a). Attenzione alla (c): la seconda componente è $x$, cioè $1 \cdot x + 0 \cdot y$, quindi la seconda riga è $1$ e $0$.

> [!ESAME] Appello del 10/06/2024, domanda 9
> *Quale delle seguenti matrici **non** è hermitiana?*
>
> **Soluzione.** Si comincia dalla diagonale, che è il controllo più veloce.
>
> | Risposta | Matrice | Controllo |
> |---|---|---|
> | (a) | $\begin{pmatrix} \sqrt 2 & -2i \\ 2i & 3 \end{pmatrix}$ | diagonale reale; il coniugato di $2i$ è $-2i$: hermitiana |
> | (b) | $\begin{pmatrix} 1 & 0 & i \\ 0 & -1 & -2i \\ -i & 2i & 0 \end{pmatrix}$ | diagonale reale; il coniugato di $-i$ è $i$ e quello di $2i$ è $-2i$: hermitiana |
> | (c) | $\begin{pmatrix} 0 & 0 \\ 0 & \sqrt 7 \end{pmatrix}$ | reale e simmetrica: hermitiana |
> | (d) | $\begin{pmatrix} 2 & 1 - 2i \\ 1 + 2i & -2 \end{pmatrix}$ | diagonale reale; il coniugato di $1 + 2i$ è $1 - 2i$: hermitiana |
> | (e) | $\begin{pmatrix} -2i & 3 \\ 3 & 2i \end{pmatrix}$ | sulla diagonale ci sono $-2i$ e $2i$, che non sono reali: **non** hermitiana |
>
> La risposta è la (e). Nota che $\sqrt 2$ e $\sqrt 7$ sono numeri reali: sulla diagonale vanno benissimo.

> [!ESAME] Attenzione alle lineette
> Negli appelli del 16/01/2025 e del 07/02/2025 le formule dei prodotti hermitiani sono stampate **senza** le lineette del coniugato, e le variabili si chiamano $(x_1, y_1)$ e $(x_2, y_2)$. Le soluzioni ufficiali ragionano lo stesso sulla **matrice dei coefficienti**: diagonale reale e coefficienti fuori dalla diagonale coniugati. Se ti capita un testo così, usa lo stesso criterio.

**Errori da evitare.**

- Dimenticare di controllare la **diagonale**: basta un coefficiente non reale sulla diagonale per escludere la matrice.
- Coniugare cambiando il segno della parte **reale**. Il coniugato di $a + bi$ è $a - bi$: cambia solo il segno davanti alla $i$.
- Credere che una matrice complessa **simmetrica** sia hermitiana.
- Leggere la matrice di $T(x, y)$ per colonne invece che per righe: la prima **componente** dà la prima **riga**.
- Pensare che «hermitiano» voglia dire anche «definito positivo».
- Far uscire un numero dal secondo posto del prodotto senza coniugarlo.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione conviene copiare cinque righe.
>
> - Prodotto hermitiano: lineare nel primo posto; scambiando i vettori si coniuga; dal secondo posto i numeri escono coniugati; il prodotto di un vettore con sé stesso è reale.
> - Prodotto euclideo: $\langle x, y \rangle = x_1 \bar y_1 + \dots + x_n \bar y_n$.
> - Matrice hermitiana: ${}^t H = \bar H$, cioè diagonale reale e specchi coniugati.
> - Formula e matrice: il coefficiente di $x_i \bar y_j$ è $H_{ij}$.
> - Autoaggiunto vuol dire matrice hermitiana (simmetrica, con i numeri reali) **in una base ortonormale**. Se $U$ è invariante, anche $U^\perp$ lo è.

## Quiz

```quiz
D: Scriviamo $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$. Quale delle seguenti è un prodotto hermitiano?
+ $x_1 \bar y_1 + (1 - i) x_1 \bar y_2 + (1 + i) x_2 \bar y_1 + 3 x_2 \bar y_2$
- $x_1 \bar y_1 + (1 - i) x_1 \bar y_2 + (1 - i) x_2 \bar y_1 + 3 x_2 \bar y_2$
- $i x_1 \bar y_1 + x_1 \bar y_2 + x_2 \bar y_1 + x_2 \bar y_2$
- $x_1 y_1 + (1 - i) x_1 y_2 + (1 + i) x_2 y_1 + 3 x_2 y_2$
- $x_1 \bar y_1 + 2 x_1 \bar y_2 - 2 x_2 \bar y_1 + x_2 \bar y_2$
= La domanda chiede quale formula rispetta le regole del prodotto hermitiano. Il metodo: controlla le lineette, scrivi la matrice dei coefficienti e guarda se è hermitiana. La prima formula ha matrice $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 3 \end{pmatrix}$: la diagonale è reale e il coniugato di $1 + i$ è $1 - i$, quindi va bene. La risposta più insidiosa è la seconda: ha $1 - i$ in tutti e due i posti fuori dalla diagonale, cioè è simmetrica, ma il coniugato di $1 - i$ è $1 + i$. Nella terza c'è $i$ sulla diagonale. La quarta non ha le lineette. Nella quinta il coniugato di $-2$ è $-2$, non $2$. Domande così sono negli appelli del 24/01/2024, 16/01/2025, 07/02/2025, 02/09/2025 e 15/01/2026.

D: Quale di queste matrici è hermitiana?
+ $\begin{pmatrix} 3 & 2 + i \\ 2 - i & 0 \end{pmatrix}$
- $\begin{pmatrix} 3 & 2 + i \\ 2 + i & 0 \end{pmatrix}$
- $\begin{pmatrix} i & 1 \\ 1 & i \end{pmatrix}$
- $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 + i \\ -1 + i & 2 \end{pmatrix}$
= Una matrice è hermitiana quando la diagonale è reale e ogni numero è il coniugato del suo specchio. Nella prima la diagonale è fatta da $3$ e $0$, e il coniugato di $2 - i$ è $2 + i$: va bene. Le risposte più insidiose sono la seconda e la quarta, perché sono simmetriche. Ma il coniugato di $2 + i$ è $2 - i$ e il coniugato di $i$ è $-i$: gli specchi non sono coniugati. La terza ha $i$ sulla diagonale. Nella quinta il coniugato di $-1 + i$ è $-1 - i$, non $1 + i$: è stato cambiato il segno della parte reale invece di quello davanti alla $i$. Domande così sono negli appelli del 10/06/2024 e del 10/07/2024.

D: Con il prodotto hermitiano euclideo di $\C^2$, quanto vale $\langle (1, i), (i, 1) \rangle$?
+ $0$
- $2i$
- $-2i$
- $2$
- $1 + i$
= Si moltiplicano i numeri del primo vettore per i coniugati dei numeri del secondo, e poi si somma. I coniugati di $i$ e di $1$ sono $-i$ e $1$. Il conto è $1 \cdot (-i) + i \cdot 1 = -i + i = 0$: i due vettori sono ortogonali. La risposta più insidiosa è $2i$, quella che viene se dimentichi di coniugare: $1 \cdot i + i \cdot 1 = 2i$.

D: Con il prodotto hermitiano euclideo di $\C^2$, quanto vale $\langle v, v \rangle$ per $v = (1 + i, 2i)$?
N: 6
= Il prodotto di un vettore con sé stesso è la somma dei quadrati dei moduli dei suoi numeri. Il modulo di $1 + i$ al quadrato è $1 + 1 = 2$. Il modulo di $2i$ al quadrato è $2i \cdot (-2i) = 4$. La somma è $2 + 4 = 6$, e la norma di $v$ è $\sqrt 6$. Senza coniugare verrebbe $(1 + i)^2 + (2i)^2 = 2i - 4$, che non è nemmeno un numero reale.

D: Sia $\langle\ ,\ \rangle$ un prodotto hermitiano su $V$ e $\lambda \in \C$. Quale uguaglianza vale per ogni $v, w \in V$?
+ $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lambda \langle v, w \rangle$
- $\langle \lambda v, w \rangle = \bar\lambda \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lvert \lambda \rvert \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lambda \langle w, v \rangle$
= La domanda chiede come esce un numero dal prodotto. La regola: dal primo posto esce così com'è, dal secondo posto esce coniugato. La prima risposta è la proprietà (5). La risposta più insidiosa è la seconda: sarebbe giusta per un prodotto scalare tra vettori reali, ma qui il numero che esce dal secondo posto va coniugato. La terza mette il coniugato sul posto sbagliato. Un controllo con i numeri: se $v = w = (1, 0)$ e $\lambda = i$, il prodotto euclideo dà $\langle v, i w \rangle = 1 \cdot (-i) = -i$, cioè proprio $\bar\lambda$.

D: In una matrice hermitiana gli elementi della diagonale sono:
+ sempre reali
- sempre nulli
- sempre immaginari puri
- sempre positivi
- numeri complessi qualsiasi
= Sulla diagonale ogni numero è lo specchio di sé stesso. La condizione «ogni numero è il coniugato del suo specchio» dice allora che è uguale al suo coniugato, cioè che è reale. La risposta più insidiosa è «sempre positivi», ma è falsa: la matrice $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ è hermitiana e ha $-1$ sulla diagonale.

D: Quale di queste applicazioni $T \colon \R^2 \to \R^2$ è autoaggiunta rispetto al prodotto scalare euclideo?
+ $T(x, y) = (3x + 2y,\ 2x - y)$
- $T(x, y) = (3x + 2y,\ -2x - y)$
- $T(x, y) = (x + y,\ y)$
- $T(x, y) = (y,\ -x)$
- $T(x, y) = (2x,\ x + y)$
= Per il Corollario 25.7 basta scrivere la matrice nella base canonica, una riga per ogni componente, e controllare che sia simmetrica. La prima dà $\begin{pmatrix} 3 & 2 \\ 2 & -1 \end{pmatrix}$: fuori dalla diagonale c'è $2$ in tutti e due i posti, quindi è simmetrica. La risposta più insidiosa è la seconda: dà $\begin{pmatrix} 3 & 2 \\ -2 & -1 \end{pmatrix}$, con $2$ e $-2$, che sono diversi. Le altre danno $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, poi $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ (una rotazione), poi $\begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$: nessuna è simmetrica. Una domanda così è nell'appello del 03/06/2026 (domanda 9).

D: Quale di queste applicazioni $T \colon \C^2 \to \C^2$ **non** è autoaggiunta rispetto al prodotto hermitiano euclideo?
+ $T(x, y) = (x + iy,\ ix + y)$
- $T(x, y) = (x + iy,\ -ix + y)$
- $T(x, y) = (2x,\ 3y)$
- $T(x, y) = \big((1 + i)y,\ (1 - i)x\big)$
- $T(x, y) = (x + 2y,\ 2x)$
= Con i numeri complessi un'applicazione è autoaggiunta quando la sua matrice nella base canonica è hermitiana. La prima dà $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$: è simmetrica, ma il coniugato di $i$ è $-i$, quindi non è hermitiana. È lei quella che non è autoaggiunta. Le altre matrici sono $\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$, poi $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$, poi $\begin{pmatrix} 0 & 1 + i \\ 1 - i & 0 \end{pmatrix}$, poi $\begin{pmatrix} 1 & 2 \\ 2 & 0 \end{pmatrix}$. Hanno tutte la diagonale reale e gli specchi coniugati. La risposta più insidiosa è proprio la prima: chi si ferma a «è simmetrica, quindi va bene» la scarta. Una domanda così è nell'appello del 08/02/2024 (domanda 9).

D: Sia $T$ un endomorfismo autoaggiunto di $\R^2$ con il prodotto scalare euclideo. Rispetto a quale tipo di base la matrice di $T$ è **sicuramente** simmetrica?
+ Una qualsiasi base ortonormale.
- Una base qualsiasi.
- Una base che contiene il vettore $e_1$.
- Una base formata da vettori di norma $2$.
- Una base la cui matrice di cambiamento ha determinante positivo.
= È la Proposizione 25.6: in una base ortonormale la matrice di una macchina autoaggiunta è simmetrica. La risposta più insidiosa è «una base qualsiasi», ma è falsa. L'Esempio 25.8 lo mostra: nella base fatta da $(-1, 1)$ e $(1, 0)$, che non è ortonormale, la matrice viene $\begin{pmatrix} 0 & 1 \\ -1 & 3 \end{pmatrix}$, che non è simmetrica. Quella base contiene il vettore $e_1$: quindi anche la terza risposta è falsa.

D: Sia $T$ un endomorfismo autoaggiunto di $\R^3$ e sia $v$ un vettore con $T(v) = 2v$. Detto $U = \Span(v)$, quale affermazione è vera?
+ $U^\perp$ è $T$-invariante.
- $U^\perp = \Ker T$.
- $T(U^\perp) \subseteq U$.
- $T(U^\perp) = \{0\}$.
- Ogni vettore di $U^\perp$ è un autovettore con autovalore $2$.
= La retta $U$ dei multipli di $v$ è invariante, perché $v$ è un autovettore: la macchina lo manda nel suo doppio. Per la Proposizione 25.10 anche $U^\perp$ è invariante. Le altre risposte sono false; la più insidiosa è l'ultima, perché fa pensare che l'autovalore di $v$ passi ai vettori perpendicolari. Un esempio che le smentisce tutte: la matrice diagonale con $2$, $1$ e $3$ sulla diagonale, e $v = e_1$. Qui $U^\perp$ è il piano di $e_2$ ed $e_3$. La macchina manda $e_2$ in $e_2$ e manda $e_3$ in $3e_3$: non li manda in zero, non li porta in $U$, e il loro autovalore non è $2$.
```

## Esercizi

::: esercizio base Riscaldamento: coniugati e quadrati dei moduli
Per ognuno di questi numeri scrivi il coniugato. Poi moltiplica il numero per il suo coniugato: (a) $2 + 3i$; (b) $-i$; (c) $4$; (d) $1 - 2i$.
::: soluzione
Il coniugato si ottiene cambiando il segno davanti alla $i$. Un numero per il suo coniugato dà il quadrato della parte reale più il quadrato della parte immaginaria.

(a) Il coniugato di $2 + 3i$ è $2 - 3i$. Il prodotto, pezzo per pezzo: $4 - 6i + 6i - 9 \cdot i \cdot i = 4 + 9 = 13$.

(b) Il coniugato di $-i$ è $i$. Il prodotto: $-i \cdot i = 1$.

(c) Il coniugato di $4$ è $4$, perché non c'è nessuna $i$. Il prodotto: $4 \cdot 4 = 16$.

(d) Il coniugato di $1 - 2i$ è $1 + 2i$. Il prodotto: $1 + 4 = 5$.

Controllo: i quattro risultati sono numeri reali e positivi, come deve essere.
:::

::: esercizio base Riscaldamento: un prodotto hermitiano con numeri piccoli
Con il prodotto hermitiano euclideo di $\C^2$ calcola $\langle x, y \rangle$ per $x = (1, i)$ e $y = (i, 2)$.
::: soluzione
1. Coniugo i numeri del secondo vettore. Il coniugato di $i$ è $-i$, il coniugato di $2$ è $2$.
2. Primo posto: $1 \cdot (-i) = -i$.
3. Secondo posto: $i \cdot 2 = 2i$.
4. Sommo: $-i + 2i = i$.

Quindi $\langle x, y \rangle = i$.

Controllo: scambiando i vettori deve venire il coniugato, cioè $-i$. I coniugati dei numeri di $x$ sono $1$ e $-i$. Il conto è $i \cdot 1 + 2 \cdot (-i) = i - 2i = -i$. Torna.
:::

::: esercizio base Riscaldamento: hermitiana sì o no
Quali di queste matrici sono hermitiane?
$$A = \begin{pmatrix} 5 & 2 + 3i \\ 2 - 3i & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 4 \\ 4 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 2 & 1 + i \\ 1 + i & 2 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 0 \\ 0 & 2i \end{pmatrix}.$$
::: soluzione
Due controlli per ogni matrice: la diagonale deve essere reale, e ogni numero deve essere il coniugato del suo specchio.

- $A$: **sì**. Sulla diagonale ci sono $5$ e $0$. Il coniugato di $2 - 3i$ è $2 + 3i$, che è il numero in alto a destra.
- $B$: **sì**. È fatta di numeri reali ed è simmetrica.
- $C$: **no**. La diagonale va bene, ma il coniugato di $1 + i$ è $1 - i$, e in basso a sinistra c'è $1 + i$. È simmetrica, e con i numeri complessi non basta.
- $D$: **no**. Sulla diagonale c'è $2i$, che non è reale.
:::

::: esercizio base Riscaldamento: la lunghezza di un vettore complesso
Con il prodotto hermitiano euclideo di $\C^2$ calcola la lunghezza di $v = (i, 1)$. Che cosa verrebbe senza coniugare?
::: soluzione
1. Coniugo i numeri del secondo vettore, che è ancora $v$: il coniugato di $i$ è $-i$, quello di $1$ è $1$.
2. Il prodotto è $i \cdot (-i) + 1 \cdot 1 = 1 + 1 = 2$.
3. La lunghezza è $\sqrt 2$.

Senza coniugare verrebbe $i \cdot i + 1 \cdot 1 = -1 + 1 = 0$: un vettore che non è zero sembrerebbe lungo zero. È proprio il guaio che il coniugato ripara.
:::

::: esercizio base Conti con il prodotto hermitiano euclideo
Siano $x = (2 - i, 1)$ e $y = (i, 1 - i)$ in $\C^2$. Calcola $\langle x, y \rangle$, $\langle y, x \rangle$, $\lVert x \rVert$ e $\lVert y \rVert$, e verifica l'assioma (3).
::: soluzione
**Il prodotto di $x$ e $y$.** Si coniugano i numeri di $y$: il coniugato di $i$ è $-i$, il coniugato di $1 - i$ è $1 + i$.

1. Primo posto: $(2 - i) \cdot (-i) = -2i + i \cdot i = -2i - 1$.
2. Secondo posto: $1 \cdot (1 + i) = 1 + i$.
3. Sommo: $-2i - 1 + 1 + i = -i$.

Quindi $\langle x, y \rangle = -i$.

**Il prodotto di $y$ e $x$.** Si coniugano i numeri di $x$: il coniugato di $2 - i$ è $2 + i$, il coniugato di $1$ è $1$.

1. Primo posto: $i \cdot (2 + i) = 2i + i \cdot i = 2i - 1$.
2. Secondo posto: $(1 - i) \cdot 1 = 1 - i$.
3. Sommo: $2i - 1 + 1 - i = i$.

Quindi $\langle y, x \rangle = i$.

**L'assioma (3).** Scambiando i vettori il risultato deve coniugarsi. Il coniugato di $-i$ è $i$: l'assioma è verificato.

**Le norme.** Si sommano i quadrati dei moduli.

1. Per $x$: il modulo di $2 - i$ al quadrato è $4 + 1 = 5$, quello di $1$ è $1$. La somma è 6, quindi $\lVert x \rVert = \sqrt 6$.
2. Per $y$: il modulo di $i$ al quadrato è $1$, quello di $1 - i$ è $1 + 1 = 2$. La somma è 3, quindi $\lVert y \rVert = \sqrt 3$.
:::

::: esercizio base Completare una matrice hermitiana
Completa la matrice in modo che sia hermitiana, poi stabilisci quali delle altre matrici sono hermitiane:
$$H = \begin{pmatrix} 1 & 2 - i & \ast \\ \ast & 0 & i \\ 3 & \ast & -2 \end{pmatrix}, \quad A = \begin{pmatrix} 5 & 1 + 4i \\ 1 - 4i & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 2i \\ 2i & 0 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 2 \\ 2 & 7 \end{pmatrix}.$$
::: soluzione
**La matrice $H$.** Ogni asterisco è il coniugato del suo specchio rispetto alla diagonale.

1. Riga 2, colonna 1. Lo specchio è nella riga 1, colonna 2: è $2 - i$. Il suo coniugato è $2 + i$.
2. Riga 1, colonna 3. Lo specchio è nella riga 3, colonna 1: è $3$. Il suo coniugato è $3$.
3. Riga 3, colonna 2. Lo specchio è nella riga 2, colonna 3: è $i$. Il suo coniugato è $-i$.

La diagonale è fatta da $1$, $0$ e $-2$: è già reale. Quindi
$$H = \begin{pmatrix} 1 & 2 - i & 3 \\ 2 + i & 0 & i \\ 3 & -i & -2 \end{pmatrix}.$$

**Le altre tre.**

- $A$ è hermitiana: la diagonale è reale e il coniugato di $1 - 4i$ è $1 + 4i$.
- $B$ non lo è: è simmetrica, ma il coniugato di $2i$ è $-2i$, e nell'altro posto c'è $2i$.
- $C$ lo è: è fatta di numeri reali ed è simmetrica (Osservazione di p. 131).
:::

::: esercizio medio Le proprietà che seguono dagli assiomi
Usando solo gli assiomi (1), (2), (3) della Definizione 25.1 e le regole del coniugio, dimostra che per ogni $v, w \in V$ e $\lambda, \mu \in \C$: (a) $\langle v, 0 \rangle = 0$; (b) $\langle \lambda v, \mu w \rangle = \lambda \bar\mu \langle v, w \rangle$; (c) $\langle v, w \rangle = 0$ se e solo se $\langle w, v \rangle = 0$.
::: soluzione
(a) In parole: il prodotto con il vettore zero fa 0.

1. Il vettore zero è «0 volte un vettore qualsiasi», per esempio $0 \cdot v$. Per l'assioma (2) il numero 0 esce dal primo posto: $\langle 0, v \rangle = \langle 0 \cdot v, v \rangle = 0 \cdot \langle v, v \rangle = 0$.
2. Per l'assioma (3) scambio i due vettori e coniugo: $\langle v, 0 \rangle = \overline{\langle 0, v \rangle} = \bar 0 = 0$.

(b) In parole: dal primo posto il numero esce così com'è, dal secondo esce coniugato.

1. Faccio uscire $\lambda$ dal primo posto con l'assioma (2): $\langle \lambda v, \mu w \rangle = \lambda \langle v, \mu w \rangle$.
2. Ora devo far uscire $\mu$ dal secondo posto. Scambio e coniugo con l'assioma (3): $\langle v, \mu w \rangle = \overline{\langle \mu w, v \rangle}$.
3. Adesso $\mu$ è al primo posto ed esce per l'assioma (2): ottengo $\overline{\mu \langle w, v \rangle}$.
4. Il coniugato di un prodotto è il prodotto dei coniugati: ottengo $\bar\mu \cdot \overline{\langle w, v \rangle}$.
5. Per l'assioma (3), $\overline{\langle w, v \rangle}$ è $\langle v, w \rangle$. Quindi $\langle v, \mu w \rangle = \bar\mu \langle v, w \rangle$.
6. Metto insieme il passo 1 e il passo 5: $\langle \lambda v, \mu w \rangle = \lambda \bar\mu \langle v, w \rangle$.

(c) In parole: se un prodotto fa 0, fa 0 anche quello con i vettori scambiati.

1. Per l'assioma (3), $\langle w, v \rangle$ è il coniugato di $\langle v, w \rangle$.
2. Il coniugato di $0$ è $0$. E l'unico numero che ha come coniugato $0$ è $0$.
3. Quindi uno dei due prodotti è $0$ esattamente quando lo è l'altro.

Conseguenza: per dire che due vettori sono ortogonali non serve precisare l'ordine.
:::

::: esercizio medio Dalla formula alla matrice e ritorno
Sia $g(x, y) = 2 x_1 \bar y_1 + (1 + 2i) x_1 \bar y_2 + (1 - 2i) x_2 \bar y_1 + 5 x_2 \bar y_2$ su $\C^2$. (a) Scrivi la matrice $H$ e verifica che $g$ è un prodotto hermitiano. (b) Calcola $g(v, w)$ con $v = (1, 1)$ e $w = (0, i)$, sia con la formula sia con ${}^t v H \bar w$.
::: soluzione
(a) Il coefficiente di $x_i \bar y_j$ va nella riga $i$ e nella colonna $j$:
$$H = \begin{pmatrix} 2 & 1 + 2i \\ 1 - 2i & 5 \end{pmatrix}.$$
La diagonale è reale. Il coniugato di $1 - 2i$ è $1 + 2i$, che è il numero in alto a destra. La matrice è hermitiana, quindi $g$ è un prodotto hermitiano.

(b) **Con la formula.**

1. I numeri di $v$ sono $x_1 = 1$ e $x_2 = 1$.
2. I numeri di $w$ sono $0$ e $i$. I loro coniugati sono $\bar y_1 = 0$ e $\bar y_2 = -i$.
3. I due pezzi con $\bar y_1$ contengono uno zero e spariscono. Restano il secondo e il quarto pezzo.
4. Secondo pezzo: $(1 + 2i) \cdot 1 \cdot (-i) = -i - 2 \cdot i \cdot i = -i + 2$.
5. Quarto pezzo: $5 \cdot 1 \cdot (-i) = -5i$.
6. Sommo: $2 - i - 5i = 2 - 6i$.

**Con le matrici.**

1. Il vettore coniugato è $\bar w = (0, -i)$.
2. Calcolo $H \bar w$. Prima riga: $2 \cdot 0 + (1 + 2i) \cdot (-i) = 2 - i$. Seconda riga: $(1 - 2i) \cdot 0 + 5 \cdot (-i) = -5i$.
3. Moltiplico $v$, messo in riga, per questo vettore: $1 \cdot (2 - i) + 1 \cdot (-5i) = 2 - 6i$.

Controllo: i due metodi danno lo stesso numero, $2 - 6i$.
:::

::: esercizio medio La matrice associata in una base
In $\C^2$ con il prodotto hermitiano euclideo sia $\mathcal B = \{b_1, b_2\}$ con $b_1 = (1, 1)$ e $b_2 = (1, i)$. (a) Calcola la matrice associata $H$. (b) Verifica la formula $\langle v, w \rangle = {}^t[v]_{\mathcal B}\, H\, \overline{[w]_{\mathcal B}}$ con $v = b_1 + i\, b_2$ e $w = b_2$.
::: soluzione
(a) La matrice associata è la tabella dei quattro prodotti tra i vettori della base. In ogni prodotto si coniugano i numeri del secondo vettore.

| Posto | Prodotto | Conto | Risultato |
|---|---|---|---|
| riga 1, colonna 1 | $\langle b_1, b_1 \rangle$ | $1 \cdot 1 + 1 \cdot 1$ | $2$ |
| riga 1, colonna 2 | $\langle b_1, b_2 \rangle$ | $1 \cdot 1 + 1 \cdot (-i)$ | $1 - i$ |
| riga 2, colonna 1 | $\langle b_2, b_1 \rangle$ | $1 \cdot 1 + i \cdot 1$ | $1 + i$ |
| riga 2, colonna 2 | $\langle b_2, b_2 \rangle$ | $1 \cdot 1 + i \cdot (-i)$ | $2$ |

$$H = \begin{pmatrix} 2 & 1 - i \\ 1 + i & 2 \end{pmatrix}$$

È hermitiana, come deve essere: diagonale reale, e $1 + i$ è il coniugato di $1 - i$.

(b) **Direttamente.**

1. Scrivo $v$ con i suoi numeri: $v = (1, 1) + i \cdot (1, i) = (1, 1) + (i, -1) = (1 + i,\ 0)$.
2. Il secondo vettore è $w = (1, i)$. I coniugati dei suoi numeri sono $1$ e $-i$.
3. Il prodotto: $(1 + i) \cdot 1 + 0 \cdot (-i) = 1 + i$.

**Con le coordinate.**

1. $v$ è fatto di 1 parte di $b_1$ e $i$ parti di $b_2$: le sue coordinate sono $(1, i)$.
2. $w$ è fatto di 0 parti di $b_1$ e 1 parte di $b_2$: le sue coordinate sono $(0, 1)$. Sono reali, quindi coniugarle non le cambia.
3. Tabella per le coordinate di $w$: viene la seconda colonna di $H$, cioè $(1 - i,\ 2)$.
4. Coordinate di $v$ in riga per questo vettore: $1 \cdot (1 - i) + i \cdot 2 = 1 - i + 2i = 1 + i$.

Controllo: i due metodi danno lo stesso numero, $1 + i$.
:::

::: esercizio medio Autoaggiunto o no?
Stabilisci quali endomorfismi sono autoaggiunti rispetto al prodotto euclideo (scalare o hermitiano): (a) $T \colon \C^2 \to \C^2$, $T(x, y) = \big(x + (1 - i)y,\ (1 + i)x + 2y\big)$; (b) $T \colon \C^2 \to \C^2$, $T(x, y) = (ix, y)$; (c) $T \colon \R^3 \to \R^3$, $T(x, y, z) = (x + 2z,\ 3y,\ 2x - z)$. Per (b) trova esplicitamente due vettori per cui la Definizione 25.5 fallisce.
::: soluzione
Il metodo è lo stesso per tutti e tre: scrivo la matrice nella base canonica, una riga per ogni componente, e uso il Corollario 25.7.

(a) La matrice è $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 2 \end{pmatrix}$. La diagonale è reale e il coniugato di $1 + i$ è $1 - i$. È hermitiana, quindi $T$ è autoaggiunto.

(b) La matrice è $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$. Sulla diagonale c'è $i$: non è hermitiana, quindi $T$ non è autoaggiunto.

Due vettori per cui la definizione fallisce: prendo $v = w = e_1 = (1, 0)$.

1. $T(e_1) = (i \cdot 1,\ 0) = (i, 0)$.
2. Primo conto: $\langle T(e_1), e_1 \rangle = \langle (i, 0), (1, 0) \rangle = i \cdot 1 = i$.
3. Secondo conto: $\langle e_1, T(e_1) \rangle = \langle (1, 0), (i, 0) \rangle = 1 \cdot (-i) = -i$.

I due conti danno $i$ e $-i$: sono diversi.

(c) Le tre componenti danno le tre righe. La prima è $x + 2z$, cioè $1, 0, 2$. La seconda è $3y$, cioè $0, 3, 0$. La terza è $2x - z$, cioè $2, 0, -1$.
$$\begin{pmatrix} 1 & 0 & 2 \\ 0 & 3 & 0 \\ 2 & 0 & -1 \end{pmatrix}$$
I numeri sono reali, quindi basta che la matrice sia simmetrica. Controllo i tre specchi: $0$ e $0$, poi $2$ e $2$, poi $0$ e $0$. È simmetrica, quindi $T$ è autoaggiunto.
:::

::: esercizio medio La stessa matrice in due basi
Sia $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$, che definisce un endomorfismo autoaggiunto di $\R^2$. Calcola la matrice di $L_A$ (a) nella base ortonormale $\mathcal B = \left\{ \frac{1}{\sqrt 2}(1, 1), \frac{1}{\sqrt 2}(1, -1) \right\}$; (b) nella base $\mathcal B' = \{(1, 0), (1, 1)\}$. Commenta alla luce della Proposizione 25.6.
::: soluzione
(a) Conviene guardare dove la macchina manda i vettori della base.

1. $A \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2 \cdot 1 \\ 2 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 3 \end{pmatrix}$. È 3 volte $(1, 1)$.
2. $A \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2 \cdot (-1) \\ 2 \cdot 1 + 1 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$. È $-1$ volte $(1, -1)$.
3. I due vettori della base sono autovettori, con autovalori $3$ e $-1$. Il numero $\frac{1}{\sqrt 2}$ davanti non cambia niente: un multiplo di un autovettore è ancora un autovettore.
4. Nelle colonne della matrice vanno le coordinate dei vettori che escono. Il primo vettore della base va in 3 volte sé stesso: coordinate $(3, 0)$. Il secondo va in $-1$ volte sé stesso: coordinate $(0, -1)$.

$$[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$$

La matrice è diagonale, quindi è simmetrica, come prevede la Proposizione 25.6. È un'anteprima del teorema spettrale.

(b) Qui uso la formula $M^{-1} A M$.

1. I vettori della base in colonna: $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.
2. Il determinante: $1 \cdot 1 - 1 \cdot 0 = 1$.
3. L'inversa. Scambio i numeri sulla diagonale, cambio segno agli altri due e divido per 1: $M^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$.
4. Primo prodotto:
   $$M^{-1} A = \begin{pmatrix} 1 \cdot 1 - 1 \cdot 2 & 1 \cdot 2 - 1 \cdot 1 \\ 0 \cdot 1 + 1 \cdot 2 & 0 \cdot 2 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & 1 \end{pmatrix}.$$
5. Secondo prodotto:
   $$(M^{-1} A)\, M = \begin{pmatrix} -1 \cdot 1 + 1 \cdot 0 & -1 \cdot 1 + 1 \cdot 1 \\ 2 \cdot 1 + 1 \cdot 0 & 2 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 2 & 3 \end{pmatrix}.$$

Questa matrice non è simmetrica: fuori dalla diagonale ci sono $0$ e $2$.

**Commento.** La base $\mathcal B'$ non è ortonormale: il prodotto scalare dei suoi due vettori è $1 \cdot 1 + 0 \cdot 1 = 1$, non 0. La Proposizione 25.6 parla solo di basi ortonormali, quindi qui non dice niente. La macchina è autoaggiunta lo stesso.
:::

::: esercizio medio Sottospazi invarianti di una matrice simmetrica
Sia $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$. (a) Verifica che $U = \Span((0, 1, 1))$ è $L_A$-invariante. (b) Trova $U^\perp$ e verifica direttamente che è invariante, come prevede la Proposizione 25.10.
::: soluzione
(a) $U$ è la retta dei multipli di $(0, 1, 1)$. Passo questo vettore nella macchina.

1. Prima riga: $2 \cdot 0 + 0 \cdot 1 + 0 \cdot 1 = 0$.
2. Seconda riga: $0 \cdot 0 + 1 \cdot 1 + 1 \cdot 1 = 2$.
3. Terza riga: $0 \cdot 0 + 1 \cdot 1 + 1 \cdot 1 = 2$.

Esce $(0, 2, 2)$, che è 2 volte $(0, 1, 1)$: sta ancora in $U$. Ogni altro vettore di $U$ è un multiplo di $(0, 1, 1)$, e la macchina lo manda nel doppio di sé stesso. Quindi $U$ è invariante.

(b) **Trovo $U^\perp$.** Cerco i vettori $(x, y, z)$ ortogonali a $(0, 1, 1)$.

1. Il prodotto scalare è $x \cdot 0 + y \cdot 1 + z \cdot 1 = y + z$.
2. Deve fare 0: quindi $z = -y$. Il numero $x$ è libero.
3. I vettori sono $(x, y, -y)$, cioè $x$ volte $(1, 0, 0)$ più $y$ volte $(0, 1, -1)$.

Quindi $U^\perp = \Span((1, 0, 0), (0, 1, -1))$: è un piano.

**Controllo che è invariante.** Passo nella macchina i due vettori che generano il piano.

1. $A (1, 0, 0)$ è la prima colonna: $(2, 0, 0)$. Per questo vettore $y + z = 0$: sta in $U^\perp$.
2. $A (0, 1, -1)$: prima riga $0$, seconda riga $1 - 1 = 0$, terza riga $1 - 1 = 0$. Esce $(0, 0, 0)$, che sta in $U^\perp$.

La macchina è lineare, quindi basta controllare i due vettori che generano il piano. $U^\perp$ è invariante, come prevede la Proposizione 25.10.
:::

::: esercizio esame Un prodotto hermitiano con un parametro
Scriviamo $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$ e, per $a \in \C$, sia $g_a(x, y) = x_1 \bar y_1 + a\, x_1 \bar y_2 + (2 + i)\, x_2 \bar y_1 + 4\, x_2 \bar y_2$. (1) Per quali $a$ la formula è un prodotto hermitiano? (2) Per quel valore scrivi la matrice $H$ e calcola $g_a(v, v)$ con $v = (1, 1)$. (3) Trova un vettore $w \neq 0$ ortogonale a $e_1$ e calcola $g_a(w, w)$: il prodotto è definito positivo?
::: soluzione
(1) Scrivo la matrice dei coefficienti: $\begin{pmatrix} 1 & a \\ 2 + i & 4 \end{pmatrix}$.

1. La diagonale è fatta da $1$ e $4$: è reale.
2. Il numero in alto a destra deve essere il coniugato di quello in basso a sinistra. Il coniugato di $2 + i$ è $2 - i$.

Quindi la formula è un prodotto hermitiano solo per $a = 2 - i$.

(2) Con $a = 2 - i$ la matrice è $H = \begin{pmatrix} 1 & 2 - i \\ 2 + i & 4 \end{pmatrix}$.

Il vettore $v = (1, 1)$ ha numeri reali, quindi coniugarlo non lo cambia. Tutti i numeri che compaiono nei quattro pezzi valgono 1. Restano i quattro coefficienti, da sommare:
$$g(v, v) = 1 + (2 - i) + (2 + i) + 4 = 9.$$
Il risultato è reale, come deve essere per la proprietà (7).

(3) Qui «ortogonale» si intende rispetto al prodotto $g$: cerco $w$ con $g(w, e_1) = 0$.

1. Il secondo vettore è $e_1 = (1, 0)$. I coniugati dei suoi numeri sono $\bar y_1 = 1$ e $\bar y_2 = 0$.
2. I due pezzi con $\bar y_2$ spariscono. Restano il primo e il terzo: $g(w, e_1) = w_1 + (2 + i)\, w_2$.
3. Voglio che faccia 0. Scelgo $w_2 = 1$: allora $w_1 = -(2 + i) = -2 - i$.

Quindi $w = (-2 - i,\ 1)$. I coniugati dei suoi numeri sono $-2 + i$ e $1$.

Ora calcolo $g(w, w)$, un pezzo alla volta.

| Pezzo | Con i numeri | Conto | Risultato |
|---|---|---|---|
| $x_1 \bar y_1$ | $(-2 - i)(-2 + i)$ | $4 - 2i + 2i - i \cdot i$ | $5$ |
| $(2 - i)\, x_1 \bar y_2$ | $(2 - i)(-2 - i) \cdot 1$ | $-4 - 2i + 2i + i \cdot i$ | $-5$ |
| $(2 + i)\, x_2 \bar y_1$ | $(2 + i) \cdot 1 \cdot (-2 + i)$ | $-4 + 2i - 2i + i \cdot i$ | $-5$ |
| $4\, x_2 \bar y_2$ | $4 \cdot 1 \cdot 1$ | | $4$ |

La somma è $5 - 5 - 5 + 4 = -1$.

Un vettore diverso da zero dà un risultato negativo. Quindi il prodotto **non** è definito positivo.
:::

::: esercizio esame Un endomorfismo autoaggiunto di $\C^2$
Sia $T \colon \C^2 \to \C^2$, $T(x, y) = \big(2x + (1 - i)y,\ (1 + i)x + 3y\big)$. (1) Scrivi la matrice $A$ di $T$ nella base canonica e mostra che $T$ è autoaggiunto rispetto al prodotto hermitiano euclideo. (2) Verifica direttamente che $\langle T(e_1), e_2 \rangle = \langle e_1, T(e_2) \rangle$. (3) Verifica che $U = \Span((-1 + i, 1))$ è $T$-invariante, trova $U^\perp$ e verifica che anche $U^\perp$ è invariante.
::: soluzione
(1) Una riga per ogni componente:
$$A = \begin{pmatrix} 2 & 1 - i \\ 1 + i & 3 \end{pmatrix}.$$
La diagonale è reale e il coniugato di $1 + i$ è $1 - i$. La matrice è hermitiana, quindi $T$ è autoaggiunto (Corollario 25.7).

(2) Faccio i due conti.

1. $T(e_1)$ è la prima colonna: $(2,\ 1 + i)$. Il prodotto con $e_2 = (0, 1)$: $2 \cdot 0 + (1 + i) \cdot 1 = 1 + i$.
2. $T(e_2)$ è la seconda colonna: $(1 - i,\ 3)$. I coniugati dei suoi numeri sono $1 + i$ e $3$. Il prodotto di $e_1 = (1, 0)$ con questo vettore: $1 \cdot (1 + i) + 0 \cdot 3 = 1 + i$.

I due conti danno lo stesso numero, $1 + i$.

(3) **$U$ è invariante.** Passo nella macchina il vettore $(-1 + i,\ 1)$, cioè metto $x = -1 + i$ e $y = 1$.

1. Prima componente: $2 \cdot (-1 + i) + (1 - i) \cdot 1 = -2 + 2i + 1 - i = -1 + i$.
2. Seconda componente: $(1 + i)(-1 + i) + 3 \cdot 1$. Il prodotto vale $-1 + i - i + i \cdot i = -2$. Quindi viene $-2 + 3 = 1$.

Esce $(-1 + i,\ 1)$: lo stesso vettore che è entrato. È un autovettore con autovalore 1, quindi la retta $U$ dei suoi multipli è invariante.

**Trovo $U^\perp$.** Cerco i vettori $w = (w_1, w_2)$ il cui prodotto con $(-1 + i,\ 1)$ fa 0.

1. I coniugati dei numeri di $(-1 + i,\ 1)$ sono $-1 - i$ e $1$.
2. Il prodotto è $w_1 \cdot (-1 - i) + w_2 \cdot 1$. Deve fare 0, quindi $w_2 = (1 + i)\, w_1$.
3. Scelgo $w_1 = 1$: viene il vettore $(1,\ 1 + i)$.

Quindi $U^\perp = \Span((1,\ 1 + i))$.

**$U^\perp$ è invariante.** Passo nella macchina il vettore $(1,\ 1 + i)$.

1. Prima componente: $2 \cdot 1 + (1 - i)(1 + i)$. Il prodotto vale $1 + i - i - i \cdot i = 2$. Quindi viene $2 + 2 = 4$.
2. Seconda componente: $(1 + i) \cdot 1 + 3 \cdot (1 + i) = 4 \cdot (1 + i) = 4 + 4i$.

Esce $(4,\ 4 + 4i)$, che è 4 volte $(1,\ 1 + i)$. Resta sulla retta $U^\perp$, che quindi è invariante, come prevede la Proposizione 25.10. È la retta degli autovettori con autovalore 4.
:::

::: esercizio difficile Autovalori e autovettori di un autoaggiunto
Sia $T$ un endomorfismo autoaggiunto di uno spazio con prodotto hermitiano (o scalare) definito positivo. Dimostra che: (a) se $T(v) = \lambda v$ con $v \neq 0$, allora $\lambda$ è reale; (b) se $T(v) = \lambda v$ e $T(w) = \mu w$ con $\lambda \neq \mu$, allora $\langle v, w \rangle = 0$. (Sono due fatti che userai nella lezione L26.)
::: soluzione
(a) In parole: gli autovalori di una macchina autoaggiunta sono numeri reali. L'idea è calcolare $\langle T(v), v \rangle$ in due modi.

1. Primo modo. Al posto di $T(v)$ scrivo $\lambda v$. Il numero $\lambda$ è al primo posto ed esce così com'è: $\langle \lambda v, v \rangle = \lambda \langle v, v \rangle$.
2. Secondo modo. Siccome $T$ è autoaggiunto, sposto la macchina sull'altro vettore: $\langle T(v), v \rangle = \langle v, T(v) \rangle = \langle v, \lambda v \rangle$.
3. Ora $\lambda$ è al secondo posto ed esce coniugato: $\langle v, \lambda v \rangle = \bar\lambda \langle v, v \rangle$.
4. I due modi danno lo stesso numero: $\lambda \langle v, v \rangle = \bar\lambda \langle v, v \rangle$.
5. Il prodotto è definito positivo e $v$ non è zero, quindi $\langle v, v \rangle$ è un numero positivo. Posso dividere tutti e due i lati per questo numero: $\lambda = \bar\lambda$.
6. Un numero uguale al suo coniugato è reale. Quindi $\lambda$ è reale.

(b) In parole: due autovettori con autovalori diversi sono ortogonali. L'idea è calcolare $\langle T(v), w \rangle$ in due modi.

1. Primo modo: $\langle T(v), w \rangle = \langle \lambda v, w \rangle = \lambda \langle v, w \rangle$.
2. Secondo modo. Sposto la macchina: $\langle T(v), w \rangle = \langle v, T(w) \rangle = \langle v, \mu w \rangle$.
3. Il numero $\mu$ esce dal secondo posto coniugato. Ma per il punto (a) $\mu$ è reale, quindi il suo coniugato è $\mu$ stesso: $\langle v, \mu w \rangle = \mu \langle v, w \rangle$.
4. I due modi danno lo stesso numero: $\lambda \langle v, w \rangle = \mu \langle v, w \rangle$. Porto tutto a sinistra: $(\lambda - \mu) \langle v, w \rangle = 0$.
5. Un prodotto di due numeri fa 0 solo se uno dei due è 0. Il numero $\lambda - \mu$ non è 0, perché $\lambda$ e $\mu$ sono diversi. Quindi $\langle v, w \rangle = 0$.

Controllo con un esempio della lezione: la matrice $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ ha gli autovettori $(1, 1)$ e $(1, -1)$, con autovalori $3$ e $1$. Gli autovalori sono reali e i due vettori sono ortogonali.
:::

::: esercizio difficile Hermitiana ma non definita positiva
Sia $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$. (a) Verifica che $H$ è hermitiana. (b) Trova un vettore $v \neq 0$ con $g_H(v, v) = 0$: il prodotto $g_H$ non è definito positivo.
::: soluzione
(a) Sulla diagonale ci sono $1$ e $1$, che sono reali. Il coniugato di $-i$ è $i$, che è il numero in alto a destra. La matrice è hermitiana.

(b) Scrivo la formula per esteso, mettendo ogni numero della matrice davanti al suo pezzo:
$$g_H(x, y) = x_1 \bar y_1 + i\, x_1 \bar y_2 - i\, x_2 \bar y_1 + x_2 \bar y_2.$$

Provo con il vettore $v = (1, -i)$. I coniugati dei suoi numeri sono $1$ e $i$.

| Pezzo | Con i numeri | Risultato |
|---|---|---|
| $x_1 \bar y_1$ | $1 \cdot 1$ | $1$ |
| $i\, x_1 \bar y_2$ | $i \cdot 1 \cdot i$ | $-1$ |
| $-i\, x_2 \bar y_1$ | $-i \cdot (-i) \cdot 1 = i \cdot i$ | $-1$ |
| $x_2 \bar y_2$ | $-i \cdot i$ | $1$ |

La somma è $1 - 1 - 1 + 1 = 0$. Quindi $g_H(v, v) = 0$ con $v$ diverso da zero: il prodotto $g_H$ è hermitiano ma non è definito positivo.

**Come si trova questo vettore.** Si cerca un vettore che la matrice manda in zero. Qui $H$ manda in zero il vettore $(1, i)$:

1. Prima riga: $1 \cdot 1 + i \cdot i = 1 - 1 = 0$.
2. Seconda riga: $-i \cdot 1 + 1 \cdot i = 0$.

Poi si prende $v$ in modo che il suo coniugato sia quel vettore: $\bar v = (1, i)$, cioè $v = (1, -i)$. Allora $H \bar v$ è il vettore zero, e $g_H(v, v) = {}^t v\, H\, \bar v = 0$. Nella lezione L26 vedrai che gli autovalori di questa matrice sono $0$ e $2$.
:::

## Domande di ripasso

::: domanda Perché su $\C^n$ non si può usare la formula $x_1 y_1 + \dots + x_n y_n$ per misurare le lunghezze?
Perché con i numeri complessi il prodotto di un vettore con sé stesso può venire zero, negativo o non reale. Per il vettore $(1, i)$ viene $1 + i \cdot i = 0$, anche se il vettore non è zero.

Se si coniugano i numeri del secondo vettore viene la somma dei quadrati dei moduli, che è reale e positiva.
:::

::: domanda Quali sono gli assiomi di un prodotto hermitiano?
Sono tre. Primo: una somma al primo posto si spezza. Secondo: un numero che moltiplica il primo vettore esce così com'è. Terzo: scambiando i due vettori il risultato si coniuga, cioè $\langle v, w \rangle = \overline{\langle w, v \rangle}$.

Devono valere per tutti i vettori e per tutti i numeri complessi.
:::

::: domanda Che cosa vuol dire sesquilineare? Come esce uno scalare dal secondo posto?
Vuol dire lineare nel primo posto e antilineare nel secondo. Uno scalare è un numero. Dal secondo posto esce coniugato: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$.

«Sesqui» in latino vuol dire «uno e mezzo».
:::

::: domanda Perché $\langle v, v \rangle$ è sempre reale?
Per il terzo assioma, scambiando i due vettori il risultato si coniuga. Ma qui i due vettori sono uguali, quindi scambiarli non cambia niente. Il numero è uguale al suo coniugato, e un numero così è reale.
:::

::: domanda Che cos'è il prodotto hermitiano euclideo? È definito positivo?
È il prodotto su $\C^n$ che moltiplica i numeri del primo vettore per i coniugati dei numeri del secondo e poi somma: $\langle x, y \rangle = x_1 \bar y_1 + \dots + x_n \bar y_n$.

È definito positivo. Il prodotto di un vettore con sé stesso è la somma dei quadrati dei moduli dei suoi numeri, che è positiva se il vettore non è zero.
:::

::: domanda Che cos'è una matrice hermitiana? Che cosa si può dire della sua diagonale?
È una matrice quadrata complessa in cui la trasposta è uguale alla coniugata: ${}^t H = \bar H$. Un numero alla volta: ogni numero è il coniugato del suo specchio rispetto alla diagonale.

I numeri sulla diagonale sono reali. Una matrice fatta di numeri reali è hermitiana esattamente quando è simmetrica.
:::

::: domanda Come si passa da una formula con i pezzi $x_i \bar y_j$ alla matrice, e come si decide se è un prodotto hermitiano?
Il coefficiente del pezzo $x_i \bar y_j$ va nella riga $i$ e nella colonna $j$ della matrice.

La formula è un prodotto hermitiano quando succedono due cose. In tutti i pezzi il numero di $y$ è coniugato. E la matrice dei coefficienti è hermitiana.
:::

::: domanda Che cos'è la matrice associata a un prodotto hermitiano in una base?
È la tabella dei prodotti tra i vettori della base: nel posto di riga $i$ e colonna $j$ c'è $\langle v_i, v_j \rangle$. È sempre hermitiana.

Serve a calcolare un prodotto con le coordinate: coordinate del primo vettore in riga, per la tabella, per le coordinate del secondo coniugate e in colonna.
:::

::: domanda Che cos'è un endomorfismo autoaggiunto? Che differenza c'è con un'isometria?
Un endomorfismo $T$ è autoaggiunto quando $\langle T(v), w \rangle = \langle v, T(w) \rangle$ per ogni coppia di vettori: la macchina si può spostare da un posto all'altro del prodotto.

Un'isometria invece non cambia il prodotto quando tutti e due i vettori passano nella macchina: $\langle T(v), T(w) \rangle = \langle v, w \rangle$.

In una base ortonormale, con i numeri reali: autoaggiunto vuol dire matrice simmetrica, isometria vuol dire matrice ortogonale.
:::

::: domanda Che cosa dice la Proposizione 25.6? Perché serve la base ortonormale?
In una base ortonormale, un endomorfismo è autoaggiunto esattamente quando la sua matrice è hermitiana. Con i numeri reali vuol dire simmetrica.

La dimostrazione usa che in una base ortonormale la tabella dei prodotti è la matrice identità. In una base non ortonormale la matrice di una macchina autoaggiunta può non essere simmetrica: lo mostra l'Esempio 25.8.
:::

::: domanda Come si stabilisce se $T(x, y) = (ax + by, cx + dy)$ è autoaggiunto?
Si scrive la matrice nella base canonica, che è ortonormale: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, una riga per ogni componente.

Poi si usa il Corollario 25.7. Con i numeri reali la matrice deve essere simmetrica. Con i numeri complessi deve essere hermitiana.
:::

::: domanda Che cos'è un sottospazio invariante? Che cosa dice la Proposizione 25.10?
Un sottospazio $U$ è invariante per la macchina $T$ quando $T$ manda i vettori di $U$ ancora dentro $U$: $T(U) \subseteq U$.

La Proposizione 25.10 dice: se $T$ è autoaggiunto e $U$ è invariante, anche $U^\perp$ è invariante. Il motivo: per $v$ in $U^\perp$ e $u$ in $U$ vale $\langle T(v), u \rangle = \langle v, T(u) \rangle = 0$.
:::

## Glossario

```glossario
Coniugato | Il numero che si ottiene cambiando il segno davanti alla $i$: il coniugato di $3 + 2i$ è $3 - 2i$. Si scrive $\bar z$.
Modulo | La distanza di un numero complesso dal punto di partenza. Il suo quadrato è il numero per il suo coniugato: il modulo di $3 + 4i$ è 5.
Prodotto hermitiano | Una regola che da due vettori complessi ricava un numero complesso. È lineare nel primo posto, e scambiando i due vettori il risultato si coniuga (Definizione 25.1).
Sesquilineare | Lineare nel primo posto e antilineare nel secondo. Dal secondo posto i numeri escono coniugati: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$.
Antilineare | Che rispetta le somme, ma fa uscire i numeri coniugati. Il prodotto hermitiano è antilineare nel secondo posto.
Prodotto hermitiano definito positivo | Un prodotto hermitiano in cui il prodotto di ogni vettore diverso da zero con sé stesso è positivo (Definizione 25.2).
Norma (caso complesso) | La lunghezza di un vettore: la radice del prodotto del vettore con sé stesso. Con il prodotto euclideo la norma di $(1, i)$ è $\sqrt 2$.
Prodotto hermitiano euclideo | Su $\C^n$: i numeri del primo vettore per i coniugati dei numeri del secondo, poi la somma. In formula $\langle x, y \rangle = x_1 \bar y_1 + \dots + x_n \bar y_n$.
Matrice coniugata | La matrice $\bar A$: la matrice $A$ con tutti i numeri coniugati, senza spostarli.
Matrice hermitiana | Matrice quadrata in cui la trasposta è uguale alla coniugata: ${}^t H = \bar H$. In pratica: diagonale reale e specchi coniugati.
Prodotto $g_H$ | Il prodotto hermitiano fabbricato da una matrice hermitiana $H$: $g_H(x, y) = {}^t x\, H\, \bar y$. Il numero $H_{ij}$ è il coefficiente di $x_i \bar y_j$.
Matrice associata (caso hermitiano) | La tabella dei prodotti tra i vettori di una base: $H_{ij} = \langle v_i, v_j \rangle$. È sempre hermitiana.
Endomorfismo | Un'applicazione lineare da uno spazio in sé stesso: una macchina che prende e restituisce vettori dello stesso spazio.
Endomorfismo autoaggiunto | Una macchina $T$ che si può spostare da un posto all'altro del prodotto: $\langle T(v), w \rangle = \langle v, T(w) \rangle$ per ogni coppia di vettori (Definizione 25.5).
Vettori ortogonali | Due vettori il cui prodotto fa 0. Con il prodotto euclideo, $(1, i)$ e $(1, -i)$ sono ortogonali.
Base ortonormale | Base fatta di vettori di norma 1 e ortogonali tra loro. In una base così la tabella dei prodotti è la matrice identità.
Sottospazio $T$-invariante | Una stanza $U$ da cui la macchina $T$ non fa uscire nessun vettore: $T(U) \subseteq U$ (Definizione 25.9).
Complemento ortogonale $U^\perp$ | L'insieme dei vettori ortogonali a tutti i vettori di $U$. Se $U$ è la retta dei multipli di $(1, 1)$, $U^\perp$ è la retta dei multipli di $(1, -1)$.
```

## Checklist

```checklist
- So spiegare perché con i vettori complessi serve il coniugato nel prodotto, con l'esempio del vettore $(1, i)$.
- So dire le tre regole del prodotto hermitiano e le quattro proprietà che ne vengono, dalla (4) alla (7).
- So calcolare prodotti hermitiani e norme in $\C^n$ senza dimenticare di coniugare il secondo vettore.
- So usare Gram–Schmidt in $\C^n$ mettendo il vettore da correggere al primo posto del prodotto.
- So riconoscere una matrice hermitiana: diagonale reale, specchi coniugati.
- So passare da una formula con i pezzi $x_i \bar y_j$ alla sua matrice e decidere se è un prodotto hermitiano.
- So calcolare la matrice associata a un prodotto hermitiano in una base e usarla con le coordinate.
- So dire che cos'è un endomorfismo autoaggiunto e in che cosa è diverso da un'isometria.
- So decidere se un'applicazione data con una formula è autoaggiunta, e so che il criterio vale in una base ortonormale.
- So spiegare perché, per una macchina autoaggiunta, se $U$ è invariante lo è anche $U^\perp$.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 25 «Teorema spettrale I», pp. 129–133: sezioni 25.A (prodotti hermitiani), 25.B (matrici hermitiane), 25.C (matrice associata), 25.D (endomorfismi autoaggiunti) e 25.E (sottospazi invarianti), seguite in ordine con la numerazione originale (Definizioni 25.1, 25.2, 25.4, 25.5, 25.9; Esempio 25.3; Proposizioni 25.6, 25.10; Corollario 25.7; Esempio 25.8). Dalle lezioni precedenti: coniugio e modulo (lezione 2), cambiamento di base per gli endomorfismi (lezione 16), isometrie (lezione 22). Questa lezione delle dispense non ha una sezione di esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §11.1 (prodotti hermitiani, matrici hermitiane, matrice associata) e §11.2 (endomorfismi autoaggiunti, sottospazi invarianti).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): testo riportato del 15/01/2026 (domanda 2), del 03/06/2026 (domanda 9) e del 10/06/2024 (domanda 9), con soluzioni scritte per questi appunti; citati per tipo di domanda gli appelli del 24/01/2024, 08/02/2024, 10/07/2024, 16/01/2025, 07/02/2025 e 02/09/2025.
- Le parti **«Oltre le dispense»** («hermitiano non vuol dire definito positivo», nucleo e immagine come sottospazi invarianti, il rimando al libro) e gli esempi aggiunti (il vettore $(1, i)$, Gram–Schmidt in $\C^2$, il criterio per le formule) servono a collegare la lezione al libro e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
