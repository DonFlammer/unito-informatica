---
corso: MDAG
modulo: MD
lezione: D02
titolo: Complementare, De Morgan, induzione e partizioni
data: 2026-10-02
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D02
descrizione: >-
  Appunti della lezione D02 di Matematica Discreta (MDAG, parte 1, canali A, B e C): intersezione e unione, differenza
  e complementare, leggi di De Morgan, numeri naturali e assiomi di Peano, induzione come metodo di dimostrazione,
  insieme delle parti e sua cardinalità, ricoprimenti, partizioni e insieme quoziente, con le domande vere degli
  appelli ed esercizi svolti.
lede: >-
  Come si combinano due insiemi: quello che hanno in comune, tutto quello che contengono, quello che resta fuori. Come
  si divide un insieme in gruppi senza perdere niente. Poi i numeri naturali, l'induzione e quanti sottoinsiemi ha un
  insieme.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 1, pp. 5–13
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 1 «Insiemi», pp. 5–13 ed esercizi pp. 14–15;
  argomenti della lezione del 02/10/2026 sul Moodle del canale B; quiz e problemi degli appelli di Matematica
  Discreta 2023–2026
appunti_html: appunti/MDAG/D02_complementare_induzione_partizioni.html
genera_html: true
---

## In breve

- L'**intersezione** di due insiemi contiene quello che hanno in comune. L'**unione** mette insieme tutto quello che contengono.
- La **differenza** toglie da un insieme gli elementi di un altro. Quello che resta fuori da una parte, dentro un insieme fissato, si chiama **complementare**.
- Le **leggi di De Morgan** dicono come si comporta il «fuori»: stare fuori dall'unione vuol dire stare fuori da tutti e due gli insiemi; stare fuori dall'intersezione vuol dire stare fuori da almeno uno.
- Una **partizione** divide un insieme in gruppi non vuoti, senza sovrapposizioni: ogni elemento sta in un gruppo e in uno solo. Se i gruppi si sovrappongono ma coprono tutto, è solo un **ricoprimento**.
- I **numeri naturali** 0, 1, 2, 3… si descrivono con cinque regole, gli **assiomi di Peano**. L'ultima è il **principio di induzione**: partendo da 0 e andando avanti di uno si arriva a tutti.
- Una **dimostrazione per induzione** ha due passi: si controlla il primo caso, poi si fa vedere che ogni caso porta al successivo.
- Un insieme con 3 elementi ha 8 sottoinsiemi, uno con 4 ne ha 16: ogni elemento in più raddoppia il conto.
- All'esame la domanda 1 del quiz chiede quasi sempre unione e intersezione, e la domanda 2 a volte chiede di riconoscere una partizione.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di venerdì 02/10/2026 con Andrea Mori, sulle pagine 5–13 del libro. Qui gli argomenti sono in un ordine diverso dal libro: prima tutto quello che riguarda gli insiemi, fino alle partizioni, poi i numeri naturali e l'induzione, e per ultimo il conto dei sottoinsiemi, che con l'induzione si dimostra.

## Quello che due insiemi hanno in comune (p. 8)

Nella [lezione D01](D01_insiemi_induzione.html) un insieme era un sacchetto di oggetti. Qui gli oggetti sono dieci tessere numerate da 1 a 10. Il sacchetto con tutte le tessere si chiama $X$:

$$X = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$$

Ora riempi due sacchetti più piccoli. Nel primo metti le tessere con un numero pari, nel secondo quelle con un multiplo di 3:

$$A = \{2, 4, 6, 8, 10\} \qquad B = \{3, 6, 9\}$$

Quale tessera dovrebbe stare in tutti e due i sacchetti? Solo la 6: è pari ed è un multiplo di 3. Le tessere che stanno in tutti e due gli insiemi formano un insieme nuovo, l'**intersezione** di $A$ e $B$.

> [!IDEA]
> L'intersezione di due insiemi contiene gli elementi **in comune**: quelli che stanno nel primo **e** nel secondo.

L'intersezione si scrive $A \cap B$ e si legge «$A$ intersecato $B$». Il simbolo $\cap$ somiglia a una U capovolta. Nel nostro esempio:

$$A \cap B = \{6\}$$

Il risultato è un insieme, con le graffe, anche se dentro c'è un solo numero: è un sacchetto con una tessera.

```grafico
titolo: Le tessere da 1 a 10: a sinistra i pari ($A$), a destra i multipli di 3 ($B$); la 6 sta in tutti e due
x: -4 4
y: -2.6 2.6
assi: no
griglia: no
poligono: -3.8 -2.4 3.8 -2.4 3.8 2.4 -3.8 2.4 | grigio
cerchio: -0.9 0 1.7 | blu
cerchio: 0.9 0 1.7 | ambra
testo: -3.45 2.05 | grigio | $X$
testo: -1.9 1.95 | blu | $A$
testo: 1.9 1.95 | ambra | $B$
testo: -1.9 0.7 | blu | $2$
testo: -1.3 0.2 | blu | $4$
testo: -1.9 -0.5 | blu | $8$
testo: -1.2 -1 | blu | $10$
testo: 0 0 | accento | $6$
testo: 1.5 0.6 | ambra | $3$
testo: 1.5 -0.6 | ambra | $9$
testo: -3.2 -1.8 | grigio | $1$
testo: 3.2 -1.8 | grigio | $5$
testo: 3.2 1.6 | grigio | $7$
```

Guarda la figura: l'intersezione è la zona dove i due cerchi si sovrappongono. Le tessere 1, 5 e 7 stanno fuori da tutti e due i cerchi: non sono pari e non sono multipli di 3.

Un altro esempio, con le lettere. Prendi $A = \{a, b, f, h, m\}$ e $C = \{c, p, q, s, z\}$. Nessuna lettera compare in tutti e due, quindi l'intersezione è il sacchetto vuoto:

$$A \cap C = \emptyset$$

Il simbolo $\emptyset$ si legge «insieme vuoto». Due insiemi senza elementi in comune si chiamano **disgiunti**.

Il libro scrive così la definizione.

> [!DEF] 1.13 · Intersezione
> Siano $A$ e $B$ insiemi. Si dice insieme **intersezione** di $A$ e $B$ l'insieme
> $$A \cap B = \{x \text{ tali che } x \in A \text{ e } x \in B\}.$$
> Diremo che $A$ e $B$ sono **disgiunti** se $A \cap B = \emptyset$.

**Come si legge.** La riga con le graffe dice: «l'intersezione è fatta degli oggetti $x$ che stanno in $A$ e stanno anche in $B$». Il simbolo $\in$ si legge «appartiene a», cioè «sta nel sacchetto». La seconda frase dice: due insiemi sono disgiunti quando non hanno niente in comune.

> [!ESEMPIO] Il primo esempio del libro (p. 8)
> $A = \{a, b, f, h, m\}$, $B = \{b, f, i, m, p, t\}$, $C = \{c, p, q, s, z\}$.
> 1. Le lettere comuni ad $A$ e $B$ sono $b$, $f$ e $m$: $A \cap B = \{b, f, m\}$.
> 2. Tra $B$ e $C$ c'è solo la $p$: $B \cap C = \{p\}$.
> 3. Tra $A$ e $C$ niente: $A \cap C = \emptyset$, sono disgiunti.

### Una tessera o un sacchetto?

Le domande del quiz giocano quasi sempre su una differenza della lezione D01: un **elemento** è una tessera, un **sottoinsieme** è un sacchetto di tessere.

- $6 \in A \cap B$ vuol dire «la tessera 6 sta nell'intersezione». Vero.
- $\{6\} \subset A \cap B$ vuol dire «il sacchetto con la tessera 6 è contenuto nell'intersezione». Vero anche questo. Il simbolo $\subset$ si legge «è contenuto in».

> [!TRAPPOLA] Non mescolare tessere e sacchetti
> $6 \subset A \cap B$ è sbagliato: 6 è una tessera, non un sacchetto, e non può «essere contenuto». Anche $\{6\} \in A \cap B$ è sbagliato: nell'intersezione ci sono tessere, non sacchetti. Le risposte sbagliate della domanda 1 del quiz sono quasi sempre di questi due tipi.

::: prova Con $A = \{1, 2, 3, 4\}$ e $B = \{3, 4, 5\}$, quanto fa $A \cap B$? È vero che $\{3\} \in A \cap B$?
I numeri in tutti e due sono 3 e 4: $A \cap B = \{3, 4\}$. La frase è falsa: 3 è un elemento, quindi si scrive $3 \in A \cap B$, oppure $\{3\} \subset A \cap B$.
:::

::: prova Gli insiemi $\{a, e, i\}$ e $\{b, c, d\}$ sono disgiunti?
Sì: nessuna lettera compare in tutti e due, quindi l'intersezione è vuota.
:::

> [!APPROFONDIMENTO] Gli altri due esempi del libro (p. 8)
> 1. $A$ è l'insieme dei naturali pari, $B$ quello dei naturali il cui quadrato sta tra 10 e 200. I quadrati tra 10 e 200 sono quelli di 4, 5, …, 14, perché $3^2 = 9$ è troppo piccolo e $15^2 = 225$ è troppo grande. Di questi, i pari sono 4, 6, 8, 10, 12 e 14: $A \cap B = \{4, 6, 8, 10, 12, 14\}$.
> 2. Con $X = \{a, b, c, d\}$, $A$ è l'insieme dei sottoinsiemi di $X$ con 2 elementi e $B$ quello dei sottoinsiemi che contengono $c$. Qui gli elementi sono sacchetti. In comune ci sono i sacchetti da 2 lettere con dentro la $c$: $A \cap B = \{\{a, c\}, \{b, c\}, \{c, d\}\}$. Le graffe interne non si tolgono.

> [!RICORDA]
> - L'intersezione $A \cap B$ contiene gli elementi che stanno in $A$ **e** in $B$.
> - Due insiemi senza elementi in comune si chiamano disgiunti: la loro intersezione è vuota.
> - Tessera o sacchetto: $6 \in A \cap B$, ma $\{6\} \subset A \cap B$.

## Mettere tutto insieme: l'unione (p. 9)

Torna alle tessere. Ora versa in un sacchetto nuovo tutte le tessere pari e tutte quelle multiple di 3. Che cosa c'è dentro? Le tessere 2, 4, 6, 8, 10 e poi 3 e 9. La 6 c'era già: è una tessera sola, non la metti due volte.

Questo insieme si chiama **unione** di $A$ e $B$.

> [!IDEA]
> L'unione di due insiemi contiene tutto quello che sta nel primo **oppure** nel secondo, oppure in tutti e due.

L'unione si scrive $A \cup B$ e si legge «$A$ unione $B$». Il simbolo $\cup$ è una U, come «unione». Nel nostro esempio:

$$A \cup B = \{2, 3, 4, 6, 8, 9, 10\}$$

Conta gli elementi. $A$ ne ha 5 e $B$ ne ha 3, ma l'unione ne ha 7, non 8: la 6 sta in tutti e due e nell'unione si conta una volta sola.

> [!DEF] 1.14 · Unione
> Siano $A$ e $B$ insiemi. Si dice insieme **unione** di $A$ e $B$ l'insieme
> $$A \cup B = \{x \text{ tali che } x \in A \text{ oppure } x \in B\}.$$

**Come si legge.** «L'unione è fatta degli oggetti $x$ che stanno in $A$ oppure in $B$.» In matematica «oppure» non esclude il caso «tutti e due». È l'«o» di «vuoi zucchero o latte?», a cui si può rispondere «tutti e due».

> [!ESEMPIO] Gli esempi del libro (p. 9)
> 1. $A = \{a, f, g, k, p\}$ e $B = \{b, f, m, p, t\}$. Metti insieme le lettere, senza ripetere $f$ e $p$: $A \cup B = \{a, b, f, g, k, m, p, t\}$.
> 2. I naturali pari messi insieme ai naturali dispari danno tutti i naturali, perché ogni naturale è pari oppure dispari: l'unione è $\N$, l'insieme dei naturali.

> [!OLTRE] · contare gli elementi dell'unione
> Quando sommi gli elementi di $A$ e quelli di $B$, gli elementi comuni li conti due volte. Per correggere li togli una volta. Con le tessere: $5 + 3 - 1 = 7$. In simboli:
> $$\lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert - \lvert A \cap B \rvert$$
> Le barre $\lvert \cdot \rvert$ vogliono dire «quanti elementi ha» (lezione D01). Questa regola torna con la combinatoria.

::: prova Con $A = \{1, 2, 3, 4\}$ e $B = \{3, 4, 5\}$, quanto fa $A \cup B$? Quanti elementi ha?
Metti insieme i numeri dei due insiemi, senza ripetere 3 e 4: $A \cup B = \{1, 2, 3, 4, 5\}$. Ha 5 elementi: $4 + 3 - 2 = 5$, perché i comuni sono due.
:::

### Tre insiemi o più (p. 9)

Unione e intersezione funzionano anche con tre insiemi o più. Prendi $A = \{1, 2, 3\}$, $B = \{2, 3, 4\}$ e $C = \{3, 4, 5\}$.

- L'intersezione $A \cap B \cap C$ contiene quello che sta in tutti e tre: solo il 3. Quindi $A \cap B \cap C = \{3\}$.
- L'unione $A \cup B \cup C$ contiene quello che sta in almeno uno: $\{1, 2, 3, 4, 5\}$.

Con tre insiemi conviene fare un pezzo alla volta: prima $A \cap B = \{2, 3\}$, poi di questi tieni quelli che stanno in $C$.

> [!APPROFONDIMENTO] Unioni e intersezioni di infiniti insiemi (p. 9)
> Negli appelli 2023–2026 non compaiono; servono più avanti nel libro.
>
> Per unire o intersecare tanti insiemi il libro dà a ognuno un'etichetta, detta **indice**: $A_1$, $A_2$, $A_3$ e così via. $A_i$ si legge «$A$ con $i$» e vuol dire «l'insieme con l'etichetta $i$»; $I$ è l'insieme delle etichette. Il libro scrive
> $$\bigcap_{i \in I} A_i = \{x \text{ tali che } x \in A_i,\ \forall i \in I\} \qquad \bigcup_{i \in I} A_i = \{x \text{ tali che } x \in A_i,\ \exists i \in I\}.$$
> **Come si legge.** La prima: gli oggetti che stanno in tutti gli insiemi. La seconda: gli oggetti che stanno in almeno uno. Il simbolo $\forall$ si legge «per ogni», $\exists$ si legge «esiste».
>
> L'esempio del libro usa gli intervalli: $(a, b)$ sono i numeri reali compresi tra $a$ e $b$, estremi esclusi. Per ogni naturale $n$ da 1 in poi prendi $A_n = \left(-\frac1n, \frac1n\right)$. L'intersezione di tutti gli $A_n$ è $\{0\}$: lo zero sta in ciascuno, mentre un numero diverso da zero, per quanto piccolo, prima o poi resta fuori, perché $\frac1n$ diventa più piccolo di lui. Con $B_n = (-n, n)$, invece, l'unione è tutta la retta dei reali.

### Le proprietà distributive (pp. 9–10)

Unione e intersezione si mescolano con una regola che ricorda la moltiplicazione. A scuola $2 \cdot (3 + 4) = 2 \cdot 3 + 2 \cdot 4$: il 2 si «distribuisce» sui due numeri della parentesi. Con gli insiemi succede una cosa simile.

Prova con le tessere. Prendi ancora $A$ (i pari) e $B$ (i multipli di 3), e in più $D = \{1, 2, 3, 4\}$, le tessere piccole. Fai il conto in due modi.

1. Prima metti insieme pari e multipli di 3: $A \cup B = \{2, 3, 4, 6, 8, 9, 10\}$. Poi tieni quelli che stanno in $D$: 2, 3 e 4.
2. Prima prendi i pari piccoli, $A \cap D = \{2, 4\}$, e i multipli di 3 piccoli, $B \cap D = \{3\}$. Poi mettili insieme: 2, 3 e 4.

Viene lo stesso insieme, $\{2, 3, 4\}$. Non è un caso: vale sempre.

> [!PROP] 1.15 · Proprietà distributive
> Siano $A$, $B$ e $C$ tre insiemi. Allora valgono le uguaglianze
> $$(A \cup B) \cap C = (A \cap C) \cup (B \cap C) \qquad (A \cap B) \cup C = (A \cup C) \cap (B \cup C).$$

**Come si legge.** La prima è il conto delle tessere: «metti insieme e poi tieni quelli in $C$» dà lo stesso di «tieni quelli in $C$ da ognuno e poi metti insieme». La seconda scambia i ruoli di unione e intersezione, e vale anche lei.

> [!DIM] perché vale la prima uguaglianza (pp. 9–10)
> Il libro usa la **doppia inclusione** della lezione D01: due insiemi sono uguali quando ognuno è contenuto nell'altro.
>
> 1. Prendi un elemento $x$ di $(A \cup B) \cap C$. Allora $x$ sta in $C$, e sta in $A$ oppure in $B$. Se sta in $A$, sta in $A \cap C$; se sta in $B$, sta in $B \cap C$. In tutti e due i casi sta nell'unione $(A \cap C) \cup (B \cap C)$.
> 2. Prendi un elemento $x$ di $(A \cap C) \cup (B \cap C)$. Allora sta in $A \cap C$ oppure in $B \cap C$. Nel primo caso sta in $A$ e in $C$, nel secondo in $B$ e in $C$. In tutti e due i casi sta in $C$ e in $A \cup B$, quindi in $(A \cup B) \cap C$.
>
> La seconda uguaglianza è l'esercizio 1.7 del libro: si dimostra con gli stessi due passi.

::: prova Con $A = \{1, 2\}$, $B = \{2, 3\}$ e $C = \{2, 3, 4\}$, controlla la prima proprietà distributiva.
A sinistra: $A \cup B = \{1, 2, 3\}$, e di questi stanno in $C$ il 2 e il 3. Risultato $\{2, 3\}$.

A destra: $A \cap C = \{2\}$ e $B \cap C = \{2, 3\}$. Messi insieme danno $\{2, 3\}$.

I due lati sono uguali.
:::

> [!RICORDA]
> - L'unione $A \cup B$ contiene gli elementi che stanno in $A$ **oppure** in $B$, anche in tutti e due. Gli elementi comuni si contano una volta sola.
> - Con tre insiemi si fa un pezzo alla volta.
> - Proprietà distributive: $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$, e la stessa con i simboli scambiati.

## Quello che resta fuori: differenza e complementare (p. 10)

Torna alle tessere: dal sacchetto dei pari togli quelle che sono anche multiple di 3, cioè la 6. Resta $\{2, 4, 8, 10\}$: è la **differenza** tra $A$ e $B$.

La differenza si scrive $A \setminus B$ e si legge «$A$ meno $B$». Contiene gli elementi di $A$ che non stanno in $B$:

$$A \setminus B = \{2, 4, 8, 10\} \qquad B \setminus A = \{3, 9\}$$

L'ordine conta: $A \setminus B$ toglie da $A$, $B \setminus A$ toglie da $B$, e i risultati sono diversi.

> [!DEF] 1.16 · Differenza
> Siano $A$ e $X$ due insiemi. Si dice **differenza** di $X$ ed $A$ e si denota $X \setminus A$ il sottoinsieme degli elementi di $X$ non in $A$, precisamente
> $$X \setminus A = \{x \in X \text{ tali che } x \notin A\}.$$

**Come si legge.** «$X$ meno $A$ è fatto degli elementi di $X$ che non stanno in $A$.» Il simbolo $\notin$ si legge «non appartiene a». Non serve che $A$ stia dentro $X$: gli elementi di $A$ che in $X$ non ci sono semplicemente non contano.

### Il complementare: tutto il resto

Il caso più comune è quello in cui togli una parte dal sacchetto grande. Dal sacchetto $X$ di tutte le tessere togli i pari: restano i dispari, $\{1, 3, 5, 7, 9\}$. Quello che resta si chiama **complementare** dei pari in $X$.

Il libro scrive il complementare $C_X(A)$ e si legge «complementare di $A$ in $X$». Altri testi scrivono $A^c$ oppure $\overline A$, ma in quel modo non si vede l'informazione più importante: da quale sacchetto $X$ hai tolto $A$.

> [!DEF] 1.17 · Complementare
> Sia $A$ un sottoinsieme dell'insieme $X$. Si dice **complementare** di $A$ in $X$ e si denota $C_X(A)$ il sottoinsieme degli elementi di $X$ non in $A$, precisamente
> $$C_X(A) = \{x \in X \text{ tali che } x \notin A\}.$$

**Come si legge.** È la stessa regola della differenza, con una condizione in più: $A$ deve essere una parte di $X$. Il complementare è «quello che manca ad $A$ per arrivare a $X$».

> [!TRAPPOLA] Il complementare dipende da $X$
> Prendi $A = \{2, 4\}$. Dentro $X = \{1, 2, 3, 4, 5\}$ il complementare è $\{1, 3, 5\}$. Dentro le dieci tessere è $\{1, 3, 5, 6, 7, 8, 9, 10\}$. Lo stesso insieme $A$ ha complementari diversi: per questo la $X$ va sempre scritta.

Due cose che il libro fa notare (p. 10):

- il complementare del complementare è l'insieme di partenza: il complementare dei pari sono i dispari, e il complementare dei dispari sono di nuovo i pari;
- i numeri irrazionali, come $\sqrt 2$ e $\pi$, sono i reali che non sono frazioni: sono il complementare delle frazioni dentro i reali.

::: prova Con $X = \{1, 2, 3, 4, 5, 6\}$ e $A = \{1, 2\}$, quanto fa $C_X(A)$?
Sono gli elementi di $X$ che non stanno in $A$: $C_X(A) = \{3, 4, 5, 6\}$.
:::

::: prova Con $A = \{1, 2, 3\}$ e $B = \{3, 4\}$, quanto fanno $A \setminus B$ e $B \setminus A$?
Da $A$ togli il 3, l'unico elemento in comune: $A \setminus B = \{1, 2\}$. Da $B$ togli il 3: $B \setminus A = \{4\}$.
:::

> [!APPROFONDIMENTO] L'ultimo esempio del libro (p. 10)
> Con $A = \{a, b, c\}$ e $B = \{a, b, d\}$, gli insiemi delle parti sono $P(A)$ e $P(B)$: i sacchetti di tutti i loro sottoinsiemi (lezione D01). La differenza $P(B) \setminus P(A)$ contiene i sottoinsiemi di $B$ che non sono sottoinsiemi di $A$, cioè quelli con la $d$: $\{a, b, d\}$, $\{a, d\}$, $\{b, d\}$ e $\{d\}$. Qui non si può parlare di complementare, perché $P(A)$ non è contenuto in $P(B)$: $\{c\}$ sta nel primo e non nel secondo.

> [!RICORDA]
> - $A \setminus B$ contiene gli elementi di $A$ che non stanno in $B$. L'ordine conta.
> - Se $A$ è una parte di $X$, la differenza $X \setminus A$ si chiama complementare di $A$ in $X$ e si scrive $C_X(A)$.
> - Il complementare dipende da $X$; il complementare del complementare è l'insieme di partenza.

## Fuori da unione e intersezione: De Morgan (p. 11)

Comincia dalle frasi di tutti i giorni. Il contrario di «prendo il treno o il pullman» è «non prendo né il treno né il pullman»: devo rinunciare a tutti e due. Il contrario di «oggi piove e fa freddo» è «oggi non piove oppure non fa freddo»: basta che manchi una delle due cose. Con gli insiemi succede lo stesso.

Torna alle tessere e alla figura dell'intersezione. Quali tessere stanno **fuori dall'unione**, cioè fuori da tutti e due i cerchi? Quelle che non sono pari e non sono multiple di 3: 1, 5 e 7.

Ora fai il conto in un altro modo. Le tessere non pari sono $\{1, 3, 5, 7, 9\}$. Le tessere non multiple di 3 sono $\{1, 2, 4, 5, 7, 8, 10\}$. Quelle che stanno in tutti e due gli elenchi sono 1, 5 e 7. Lo stesso risultato.

> [!IDEA]
> Stare fuori dall'unione vuol dire stare fuori dal primo insieme **e** fuori dal secondo. Il complementare dell'unione è l'intersezione dei complementari.

C'è anche la regola gemella. Quali tessere stanno **fuori dall'intersezione**? L'intersezione è $\{6\}$, quindi tutte tranne la 6. E quali tessere sono non pari **oppure** non multiple di 3? Sono quelle a cui manca almeno una delle due cose: di nuovo tutte tranne la 6, l'unica che le ha tutte e due.

> [!IDEA]
> Stare fuori dall'intersezione vuol dire stare fuori da almeno uno dei due insiemi. Il complementare dell'intersezione è l'unione dei complementari.

Il libro le enuncia così.

> [!TEOREMA] 1.18 · Leggi di De Morgan
> Sia $X$ un insieme e siano $A$ e $B$ sottoinsiemi di $X$. Allora
> $$C_X(A \cap B) = C_X(A) \cup C_X(B), \qquad C_X(A \cup B) = C_X(A) \cap C_X(B).$$

**Come si legge.**

- Prima uguaglianza: il complementare dell'intersezione è l'unione dei complementari. Le cose che non stanno in tutti e due sono quelle che mancano ad almeno uno.
- Seconda uguaglianza: il complementare dell'unione è l'intersezione dei complementari. Le cose che non stanno in nessuno dei due sono quelle che mancano a tutti e due.
- Un modo per ricordarle: il complementare «entra» nella parentesi e, entrando, scambia $\cap$ con $\cup$.

Ecco i conti con le tessere, messi in fila.

| | Conto | Risultato |
|---|---|---|
| $C_X(A \cup B)$ | tutto tranne $\{2, 3, 4, 6, 8, 9, 10\}$ | $\{1, 5, 7\}$ |
| $C_X(A) \cap C_X(B)$ | $\{1, 3, 5, 7, 9\}$ e $\{1, 2, 4, 5, 7, 8, 10\}$ in comune | $\{1, 5, 7\}$ |
| $C_X(A \cap B)$ | tutto tranne $\{6\}$ | $\{1, 2, 3, 4, 5, 7, 8, 9, 10\}$ |
| $C_X(A) \cup C_X(B)$ | $\{1, 3, 5, 7, 9\}$ insieme a $\{1, 2, 4, 5, 7, 8, 10\}$ | $\{1, 2, 3, 4, 5, 7, 8, 9, 10\}$ |

> [!DIM] perché vale la prima legge (p. 11)
> Ancora la doppia inclusione.
>
> 1. Prendi $x$ nel complementare di $A \cap B$: sta in $X$ ma non è comune ad $A$ e $B$. Allora gli manca almeno uno dei due: se non sta in $A$, sta in $C_X(A)$; se non sta in $B$, sta in $C_X(B)$. In ogni caso sta nell'unione $C_X(A) \cup C_X(B)$.
> 2. Prendi $x$ in $C_X(A) \cup C_X(B)$. Se sta in $C_X(A)$, non sta in $A$, quindi non può stare in $A \cap B$. Se sta in $C_X(B)$, non sta in $B$, e di nuovo non sta in $A \cap B$. In ogni caso sta nel complementare di $A \cap B$.
>
> La seconda legge si dimostra allo stesso modo: è l'esercizio 1.9 del libro, svolto nell'esercizio 6 di questa lezione.

> [!TRAPPOLA] Il complementare non si «distribuisce» e basta
> Scrivere $C_X(A \cup B) = C_X(A) \cup C_X(B)$, senza scambiare il simbolo, è sbagliato. Con le tessere il lato sinistro è $\{1, 5, 7\}$, mentre il lato destro contiene anche 2, 3, 4, 8, 9 e 10.

Le leggi valgono anche con tre o più insiemi (esercizio 1.10 del libro). Esiste anche una versione con la differenza al posto del complementare, che non chiede che $A$ e $B$ stiano dentro $X$: è l'esercizio 1.11, svolto nell'esercizio 7.

::: prova Con $X = \{1, 2, 3, 4, 5, 6, 7, 8\}$, $A = \{1, 2, 3\}$ e $B = \{3, 4, 5\}$, calcola $C_X(A \cup B)$ in due modi.
Primo modo: $A \cup B = \{1, 2, 3, 4, 5\}$, e il resto di $X$ è $\{6, 7, 8\}$.

Secondo modo: $C_X(A) = \{4, 5, 6, 7, 8\}$ e $C_X(B) = \{1, 2, 6, 7, 8\}$. In comune hanno $\{6, 7, 8\}$.

Lo stesso risultato, come dice la seconda legge di De Morgan.
:::

> [!RICORDA]
> - Fuori dall'unione = fuori da tutti e due: $C_X(A \cup B) = C_X(A) \cap C_X(B)$.
> - Fuori dall'intersezione = fuori da almeno uno: $C_X(A \cap B) = C_X(A) \cup C_X(B)$.
> - Il complementare entra nella parentesi e scambia unione e intersezione.

## Coprire tutto: i ricoprimenti (pp. 11–12)

In una classe di venti studenti si formano dei gruppi di studio. Due condizioni sono ragionevoli: ogni gruppo è fatto di studenti della classe, e nessuno studente resta senza gruppo. Se qualcuno sta in due gruppi, va bene lo stesso.

Quando le parti, messe insieme, danno tutto l'insieme, formano un **ricoprimento**.

> [!IDEA]
> Un ricoprimento di un insieme è un gruppo di sottoinsiemi che, messi insieme, danno l'insieme intero: nessun elemento resta fuori. Le parti possono sovrapporsi.

Prendi $X = \{1, 2, 3, 4, 5\}$ e le parti $\{1, 2, 3\}$ e $\{3, 4, 5\}$. La loro unione è $\{1, 2, 3, 4, 5\}$, cioè tutto $X$: è un ricoprimento. Il 3 sta in tutte e due le parti, e va bene.

Le parti $\{1, 2\}$ e $\{4, 5\}$, invece, lasciano fuori il 3: non sono un ricoprimento.

Il libro chiama **famiglia** un gruppo di sottoinsiemi e la scrive $\mathcal A = \{A_i\}_{i \in I}$. Si legge «la famiglia degli $A_i$» e vuol dire: le parti si chiamano $A_1$, $A_2$ e così via, con un numero ciascuna. Nell'esempio di prima, $A_1 = \{1, 2, 3\}$ e $A_2 = \{3, 4, 5\}$.

> [!DEF] 1.19 · Ricoprimento
> Sia $X$ un insieme e sia $\mathcal A = \{A_i\}_{i \in I}$ una famiglia di sottoinsiemi di $X$. La famiglia $\mathcal A$ è detta un **ricoprimento** di $X$ se
> $$\bigcup_{i \in I} A_i = X.$$

**Come si legge.** «Le parti $A_i$ sono sottoinsiemi di $X$. La loro unione è tutto $X$.» Il simbolo grande $\bigcup$ vuol dire «l'unione di tutte le parti».

Gli esempi del libro sono questi.

- Gli interi, divisi in pari e dispari: ogni intero è pari o dispari, quindi è un ricoprimento.
- I numeri reali, divisi in tre parti: i negativi, i positivi e i numeri tra $-1$ e $1$. Ogni numero reale è negativo, positivo oppure zero, e lo zero sta nella terza parte.
- I numeri reali, divisi in pezzi di retta lunghi 1: da 0 a 1, da 1 a 2, da 2 a 3, e così via, anche verso i negativi. Ogni numero sta in almeno un pezzo.

> [!NOTA] Due refusi del libro
> Nell'esempio con i reali, la seconda parte è stampata $\{x \in \R \mid x < 0\}$, uguale alla prima: deve essere $\{x \in \R \mid x > 0\}$, i positivi. Nell'esempio con pari e dispari, le due parti sono scritte come sottoinsiemi di $\N$, i naturali, ma devono essere sottoinsiemi di $\Z$, gli interi: altrimenti i negativi resterebbero scoperti.

### Una scrittura comoda: 2Z e 2Z + 1 (p. 12)

Il libro usa due scritture per gli insiemi di numeri (Nota 1.20). Prendi un insieme di numeri $S$ e un numero $a$:

- $aS$ è l'insieme che ottieni **moltiplicando** per $a$ ogni elemento di $S$;
- $S + a$ è l'insieme che ottieni **sommando** $a$ a ogni elemento di $S$.

Per esempio $2\Z$ sono gli interi moltiplicati per 2, cioè i pari: $\dots, -4, -2, 0, 2, 4, \dots$ E $2\Z + 1$ sono i pari più 1, cioè i dispari. Il ricoprimento con pari e dispari si scrive allora

$$\Z = (2\Z) \cup (2\Z + 1).$$

In generale $n\Z$ sono i multipli di $n$: $3\Z$ sono i multipli di 3. Questa scrittura compare nella domanda 1 dell'appello del 06/06/2026.

::: prova Le parti $\{a, b\}$, $\{b, c\}$ e $\{d\}$ sono un ricoprimento di $\{a, b, c, d\}$?
Sì: messe insieme danno $\{a, b, c, d\}$. Che la $b$ stia in due parti non importa.
:::

::: prova Il numero 15 sta in $3\Z \cap 5\Z$?
Sì: 15 è un multiplo di 3 e un multiplo di 5, quindi sta in tutti e due.
:::

> [!RICORDA]
> - Un ricoprimento di $X$ è un gruppo di sottoinsiemi di $X$ che, messi insieme, danno tutto $X$.
> - Le parti possono sovrapporsi; nessun elemento deve restare fuori, e nessuna parte può avere elementi che in $X$ non ci sono.
> - $n\Z$ sono i multipli di $n$: $2\Z$ i pari, $2\Z + 1$ i dispari.

## Dividere senza sovrapporre: le partizioni (pp. 12–13)

Hai un mucchio di calzini da mettere in tre cassetti: bianchi, neri e colorati. Ogni calzino finisce in un cassetto, e in uno solo. E non tieni un cassetto vuoto. Questa divisione è una **partizione**.

> [!IDEA]
> Una partizione divide un insieme in gruppi non vuoti che non si toccano: ogni elemento sta in un gruppo e in uno solo.

Una partizione è un ricoprimento con due condizioni in più. Per riconoscerla si controllano tre cose, una per volta.

1. **Nessuno resta fuori**: messe insieme, le parti danno tutto l'insieme.
2. **Nessuna parte è vuota.**
3. **Nessuna sovrapposizione**: due parti diverse non hanno elementi in comune, cioè sono disgiunte.

Prendi $X = \{1, 2, 3, 4, 5\}$.

| Parti | Copre tutto? | Nessuna vuota? | Nessuna sovrapposizione? | Partizione? |
|---|---|---|---|---|
| $\{1, 2\}$, $\{3\}$, $\{4, 5\}$ | sì | sì | sì | **sì** |
| $\{1, 2, 3\}$, $\{3, 4, 5\}$ | sì | sì | no, il 3 sta in due | no |
| $\{1, 2\}$, $\{4, 5\}$ | no, manca il 3 | sì | sì | no |
| $\{1, 2, 3, 4, 5\}$, $\emptyset$ | sì | no | sì | no |

```grafico
titolo: Una partizione di $X = \{1, 2, 3, 4, 5\}$: tre parti che non si toccano
x: -3 3
y: -2 2
assi: no
griglia: no
poligono: -2.8 -1.8 2.8 -1.8 2.8 1.8 -2.8 1.8 | grigio
cerchio: -1.7 0 0.8 | blu
cerchio: 0 0 0.6 | ambra
cerchio: 1.7 0 0.8 | verde
testo: -2.5 1.45 | grigio | $X$
testo: -2 0 | blu | $1$
testo: -1.4 0 | blu | $2$
testo: 0 0 | ambra | $3$
testo: 1.4 0 | verde | $4$
testo: 2 0 | verde | $5$
```

> [!DEF] 1.21 · Partizione
> La famiglia $\mathcal A = \{A_i\}_{i \in I}$ è detta una **partizione** di $X$ se:
>
> 1. è un ricoprimento di $X$;
> 2. $\forall i \in I,\ A_i \neq \emptyset$;
> 3. $\forall i, j \in I$ tali che $i \neq j$ i sottoinsiemi $A_i$ e $A_j$ sono disgiunti, $A_i \cap A_j = \emptyset$.

**Come si legge.** Sono i tre controlli. Il primo: le parti coprono $X$. Il secondo: ogni parte $A_i$ non è vuota ($\forall$ si legge «per ogni», $\neq$ si legge «diverso da»). Il terzo: due parti con numeri diversi non hanno niente in comune.

> [!TRAPPOLA] «Disgiunte a due a due»
> Il terzo controllo va fatto su **ogni coppia** di parti. Con le parti $\{1, 2\}$, $\{2, 3\}$ e $\{4\}$ non c'è nessun numero comune a tutte e tre, eppure non è una partizione: le prime due hanno in comune il 2.

> [!METODO] È una partizione?
> 1. Metti insieme le parti e confrontale con l'insieme: se manca un elemento, o se compare un elemento che nell'insieme non c'è, non è una partizione.
> 2. Cerca una parte vuota. Se c'è, non è una partizione.
> 3. Scorri gli elementi uno per uno e conta in quante parti compaiono: ognuno deve comparire in una parte sola.

Gli esempi del libro (p. 12), con i ricoprimenti di prima:

- pari e dispari sono una partizione degli interi: nessun intero è pari e dispari insieme;
- negativi, positivi e numeri tra $-1$ e $1$ non lo sono: $-\frac12$, per esempio, è negativo e sta anche tra $-1$ e $1$;
- i pezzi di retta lunghi 1 non lo sono: il numero 1 sta sia nel pezzo da 0 a 1 sia in quello da 1 a 2;
- una parte $A$ di $X$ e il suo complementare sono una partizione di $X$, purché $A$ non sia vuota e non sia tutto $X$: altrimenti una delle due parti sarebbe vuota.

> [!APPROFONDIMENTO] Una partizione delle frazioni (p. 12)
> Le frazioni si possono dividere secondo il denominatore che hanno quando sono ridotte ai minimi termini, con il denominatore positivo: nella prima parte gli interi, nella seconda le frazioni come $\frac12$ e $-\frac32$, nella terza quelle come $\frac13$ e $\frac23$, e così via. Ogni frazione ha una sola scrittura ridotta, quindi sta in una parte sola: è una partizione di $\Q$, l'insieme delle frazioni.

### L'insieme quoziente (p. 13)

Quando dividi i calzini nei cassetti, a volte ti interessano i cassetti e non i singoli calzini: «quanti tipi di calzini ho?». Il libro chiama **insieme quoziente** l'insieme che ha come elementi le parti di una partizione: l'insieme dei cassetti.

Per la partizione degli interi in pari e dispari l'insieme quoziente ha due elementi: il cassetto dei pari e il cassetto dei dispari. Ogni elemento di un cassetto si chiama **rappresentante** di quel cassetto, e il cassetto si indica con un suo rappresentante tra parentesi quadre: $[0]$ è il cassetto dei pari, $[7]$ quello dei dispari. Anche $[2]$ e $[-4]$ indicano i pari: lo stesso cassetto, nominato con rappresentanti diversi.

> [!DEF] 1.22 · Insieme quoziente
> Dato un insieme $X$ con una partizione $\mathcal A = \{A_i\}_{i \in I}$ l'insieme $Q = \{A_i\}$ i cui elementi sono i sottoinsiemi costituenti la partizione $\mathcal A$ si dice **insieme quoziente** di $X$ (relativamente alla partizione $\mathcal A$). Dato un elemento $A \in Q$ ogni elemento $x \in X$ tale che $x \in A$ si dice **rappresentante** di $A$ e a volte scriveremo $A = [x]$ oppure $A = \overline x$.

**Come si legge.** L'insieme quoziente è «l'insieme dei cassetti». Un rappresentante di un cassetto è uno qualunque dei suoi elementi. Le scritture $[x]$ e $\overline x$ (si legge «x segnato») vogliono dire «il cassetto in cui sta $x$».

Il quoziente tornerà con le relazioni di equivalenza e con l'aritmetica dell'orologio, dove $[3]$ indicherà tutti i numeri che danno lo stesso resto di 3 in una divisione.

::: prova Le parti $\{a, c\}$, $\{b\}$, $\{c, d\}$ sono una partizione di $\{a, b, c, d\}$?
No: coprono tutto e nessuna è vuota, ma la $c$ sta in due parti.
:::

::: prova Quante sono le partizioni di $\{1, 2, 3\}$?
Cinque. Tutto in una parte: $\{1, 2, 3\}$. Una coppia e un elemento da solo, in tre modi: $\{1, 2\}$ e $\{3\}$; $\{1, 3\}$ e $\{2\}$; $\{2, 3\}$ e $\{1\}$. Tre parti con un elemento ciascuna: $\{1\}$, $\{2\}$, $\{3\}$.
:::

> [!RICORDA]
> - Partizione = ricoprimento + nessuna parte vuota + parti disgiunte a due a due. Ogni elemento sta in una parte sola.
> - Per controllare: le parti coprono tutto? c'è una parte vuota? qualche elemento sta in due parti?
> - L'insieme quoziente è l'insieme delle parti della partizione, i «cassetti»; $[x]$ è il cassetto che contiene $x$.

## I numeri naturali e le regole di Peano (pp. 5–6)

Ora un argomento diverso. Nella lezione D01 hai visto i numeri per contare, 0, 1, 2, 3 e così via, che formano l'insieme $\N$ dei naturali. Hai visto anche l'idea che partendo da 0 e andando avanti di uno alla volta si arriva a tutti. Il libro descrive i naturali con cinque regole, gli **assiomi di Peano**. Un **assioma** è una regola che non si dimostra: si accetta come punto di partenza.

Il libro chiama $s(n)$ il **successivo** di $n$, cioè il numero che viene subito dopo: $s(n)$ si legge «esse di $n$», e $s(4) = 5$.

Le cinque regole, a parole:

1. lo zero è un numero naturale;
2. ogni naturale ha un successivo, che è ancora un naturale;
3. due naturali diversi hanno successivi diversi;
4. lo zero non è il successivo di nessun naturale;
5. se un insieme di naturali contiene lo zero e, ogni volta che contiene un numero, contiene anche il suo successivo, allora contiene tutti i naturali.

### Che cosa va storto senza una regola

Il modo migliore per capire a che cosa serve ogni regola è guardare che cosa succede quando manca.

**Senza la regola 4: l'orologio.** Prendi le ore di un orologio, da 0 a 11, e come successivo l'ora dopo. Il successivo di 11 è 0: dopo le 11 vengono di nuovo le 0. Le regole 1, 2 e 3 valgono, ma la 4 no, perché lo zero è il successivo di 11. Con questi «numeri» non si conta oltre 11: si gira in tondo. La regola 4 impedisce di tornare all'inizio.

**Senza la regola 3: il cappio.** Prendi i numeri da 0 a 5 e dai a ognuno il successivo solito, tranne il 5, che ha come successivo il 3. Si va 0, 1, 2, 3, 4, 5 e poi di nuovo 3, 4, 5, 3… Lo zero non è il successivo di nessuno, quindi la regola 4 vale. Ma 2 e 5 hanno lo stesso successivo, 3: la regola 3 no. La regola 3 impedisce di rientrare a metà strada.

**Senza la regola 5: i numeri fantasma.** Prendi i naturali veri e aggiungi una seconda fila di numeri «fantasma» $0'$, $1'$, $2'$ e così via, ognuno con il successivo nella sua fila: dopo $0'$ viene $1'$. Le regole da 1 a 4 valgono tutte. Ma la fila fantasma non si raggiunge mai partendo da 0. La regola 5 dice proprio che non ci sono altri numeri oltre a quelli che si raggiungono da 0 andando avanti.

> [!IDEA]
> Le regole 2, 3 e 4 dicono che contando non si torna mai indietro e non ci si ferma: i naturali sono infiniti e tutti diversi. La regola 5 dice che non c'è niente altro: tutti i naturali si raggiungono partendo da 0.

> [!APPROFONDIMENTO] gli assiomi di Peano come li scrive il libro (p. 5)
> Negli appelli di Matematica Discreta non vengono chiesti; servono per capire da dove viene l'induzione.
>
> L'insieme $\N$ dei numeri naturali è caratterizzato da questi cinque assiomi (Peano, 1889):
>
> 1. $0 \in \N$;
> 2. ogni $n \in \N$ ha un successore $s(n) \in \N$;
> 3. se $m, n \in \N$ e $m \neq n$ allora $s(m) \neq s(n)$;
> 4. $\forall n \in \N,\ 0 \neq s(n)$;
> 5. se $U \subset \N$ è tale che $0 \in U$ e $s(n) \in U$, $\forall n \in U$, allora $U = \N$.
>
> **Come si legge.** Sono le cinque regole qui sopra. Nella 5, $U$ è un insieme di naturali; «$s(n) \in U$ per ogni $n \in U$» vuol dire «ogni volta che $n$ sta in $U$, ci sta anche il suo successivo». La conclusione $U = \N$ dice che allora $U$ contiene tutti i naturali.

::: prova Prendi l'insieme $\{0, 1, 2\}$ con $s(0) = 1$, $s(1) = 2$ e $s(2) = 2$. Quale regola non vale?
La regola 3: i numeri 1 e 2 sono diversi ma hanno lo stesso successivo, 2.
:::

::: prova E con $\{0, 1, 2\}$, $s(0) = 1$, $s(1) = 2$ e $s(2) = 0$?
La regola 4: lo zero è il successivo di 2. È un orologio con tre ore.
:::

> [!RICORDA]
> - Gli assiomi di Peano sono cinque regole che descrivono i naturali: lo zero, il successivo, niente ritorni allo zero, niente cappi, niente numeri fuori dalla fila.
> - La regola 5 è il principio di induzione: un insieme che contiene 0 e passa sempre al successivo contiene tutti i naturali.

## L'induzione come metodo di dimostrazione (pp. 6–7)

Metti in fila tante tessere del domino, in piedi. Se fai cadere la prima, e ogni tessera, cadendo, fa cadere quella dopo, allora cadono tutte. Non serve guardarle una per una.

L'induzione usa la stessa idea per dimostrare che una frase sui numeri vale per tutti i naturali. È la regola 5 di Peano. Prendi l'insieme dei numeri per cui la frase è vera. Se contiene lo zero, cade la prima tessera. Se passa sempre al successivo, ogni tessera fa cadere quella dopo. Allora contiene tutti i naturali.

> [!METODO] Dimostrare una proprietà per induzione
> 1. **Passo base.** Controlla la proprietà per il primo numero: di solito 0, oppure 1 se la proprietà ha senso solo da 1 in poi.
> 2. **Ipotesi induttiva.** Scrivi la proprietà per un numero $n$ qualunque e supponi che sia vera.
> 3. **Passo induttivo.** Scrivi la proprietà per $n + 1$, cioè dove vuoi arrivare. Poi parti dal lato sinistro, usa l'ipotesi induttiva e arriva al lato destro.
> 4. **Conclusione.** Per il principio di induzione la proprietà vale per tutti i numeri dal primo in poi.

Il libro enuncia il principio come teorema 1.10, già visto nella lezione D01. Qui lo usiamo su due esempi nuovi.

### Primo esempio: la somma dei numeri dispari

Somma i primi numeri dispari e guarda che cosa viene.

| Quanti dispari | Somma | Risultato |
|--:|---|--:|
| 1 | $1$ | 1 |
| 2 | $1 + 3$ | 4 |
| 3 | $1 + 3 + 5$ | 9 |
| 4 | $1 + 3 + 5 + 7$ | 16 |
| 5 | $1 + 3 + 5 + 7 + 9$ | 25 |

I risultati sono 1, 4, 9, 16, 25: i quadrati. Sembra che la somma dei primi $n$ dispari sia $n^2$, cioè $n$ per $n$.

C'è un'immagine che spiega perché. Un quadrato di 3 per 3 puntini ne ha 9. Per farlo diventare un quadrato di 4 per 4 aggiungi una riga in basso e una colonna a destra, a forma di L: sono $3 + 3 + 1 = 7$ puntini, il dispari successivo. Ogni volta che il quadrato cresce di uno, aggiungi un numero dispari.

Per scrivere la frase con le lettere serve il dispari numero $n$. Il primo è 1, il secondo 3, il terzo 5: è sempre il doppio della posizione meno 1, cioè $2n - 1$. Per esempio il quinto è $2 \cdot 5 - 1 = 9$. La frase da dimostrare, per ogni $n$ da 1 in poi, è:

$$1 + 3 + 5 + \dots + (2n - 1) = n^2$$

> [!ESEMPIO] La dimostrazione per induzione
> **Passo base**, con $n = 1$. A sinistra c'è solo il primo dispari, 1. A destra $1^2 = 1$. Sono uguali.
>
> **Ipotesi induttiva.** Supponi che per un certo $n$ valga $1 + 3 + \dots + (2n - 1) = n^2$.
>
> **Passo induttivo.** Devi arrivare alla stessa frase con $n + 1$ al posto di $n$. Il dispari numero $n + 1$ è $2(n + 1) - 1 = 2n + 1$, quindi la frase da raggiungere è
> $$1 + 3 + \dots + (2n - 1) + (2n + 1) = (n + 1)^2.$$
> Parti dal lato sinistro. I primi $n$ addendi, per l'ipotesi induttiva, fanno $n^2$:
> $$1 + 3 + \dots + (2n - 1) + (2n + 1) = n^2 + (2n + 1)$$
> Ora guarda il lato destro: $(n + 1)^2 = n^2 + 2n + 1$. È proprio quello che hai ottenuto.
>
> **Conclusione.** La formula vale per $n = 1$ e passa da ogni $n$ al successivo: per il principio di induzione vale per ogni $n$ da 1 in poi.

> [!RIPASSO] il quadrato di una somma
> $(n + 1)^2$ vuol dire $(n + 1) \cdot (n + 1)$. Moltiplica ogni pezzo della prima parentesi per ogni pezzo della seconda: $n \cdot n + n \cdot 1 + 1 \cdot n + 1 \cdot 1 = n^2 + 2n + 1$. Con un numero: $(3 + 1)^2 = 16$, e $9 + 6 + 1 = 16$.

### Secondo esempio: le potenze di 2 crescono in fretta

La frase è: per ogni naturale $n$, $2^n$ è almeno $n + 1$. Si scrive $2^n \ge n + 1$, e il simbolo $\ge$ si legge «maggiore o uguale a».

Prima i numeri: per $n = 0$ viene $1 \ge 1$; per $n = 1$, $2 \ge 2$; per $n = 2$, $4 \ge 3$; per $n = 3$, $8 \ge 4$. La potenza di 2 corre sempre più avanti.

> [!ESEMPIO] La dimostrazione per induzione
> **Passo base**, con $n = 0$: $2^0 = 1$ e $0 + 1 = 1$. Vale $1 \ge 1$.
>
> **Ipotesi induttiva.** Supponi $2^n \ge n + 1$ per un certo $n$.
>
> **Passo induttivo.** Devi arrivare a $2^{n+1} \ge n + 2$. Fai un passo alla volta:
> 1. $2^{n+1} = 2 \cdot 2^n$, perché una potenza di 2 in più è un 2 in più nella moltiplicazione;
> 2. per l'ipotesi induttiva $2^n$ è almeno $n + 1$, quindi $2 \cdot 2^n$ è almeno $2(n + 1) = 2n + 2$;
> 3. $2n + 2$ è almeno $n + 2$, perché la differenza è $n$, che non è mai negativo.
>
> Mettendo in fila: $2^{n+1} \ge 2n + 2 \ge n + 2$.
>
> **Conclusione.** Per il principio di induzione la frase vale per ogni naturale $n$.

> [!TRAPPOLA] Ogni tessera deve far cadere la successiva
> Il passo induttivo deve funzionare per **ogni** $n$, compreso il primo. Nel riquadro qui sotto c'è una famosa «dimostrazione» sbagliata, in cui il passaggio si rompe in un punto solo.

> [!APPROFONDIMENTO] tutti i cavalli hanno lo stesso colore?
> La frase: «in ogni gruppo di $n$ cavalli, tutti hanno lo stesso colore». Passo base, $n = 1$: un cavallo solo ha il colore di sé stesso. Passo «induttivo»: prendi $n + 1$ cavalli. Togli il primo: restano $n$ cavalli, tutti dello stesso colore per l'ipotesi. Togli invece l'ultimo: restano altri $n$ cavalli, tutti dello stesso colore. I due gruppi hanno cavalli in comune, quindi il colore è lo stesso per tutti.
>
> L'errore: con $n = 1$, cioè passando da 1 a 2 cavalli, i due gruppi sono «il secondo cavallo» e «il primo cavallo», e non hanno nessun cavallo in comune. Il passaggio da 1 a 2 non funziona: la prima tessera cade, ma non fa cadere la seconda.

::: prova Nel primo esempio, che cosa dice l'ipotesi induttiva con $n = 3$, e a che cosa serve?
Dice $1 + 3 + 5 = 9$, cioè $3^2$. Serve per il passo verso $n = 4$: $1 + 3 + 5 + 7 = 9 + 7 = 16 = 4^2$.
:::

> [!RICORDA]
> - Induzione in quattro mosse: passo base, ipotesi induttiva, passo induttivo, conclusione.
> - Nel passo induttivo si parte dal caso $n + 1$ e si usa l'ipotesi sul caso $n$ per arrivare al risultato.
> - Il passo induttivo deve funzionare per ogni $n$, a partire dal primo.

## Quanti sottoinsiemi: l'insieme delle parti (pp. 4–7)

Nella lezione D01 hai visto l'**insieme delle parti**: il sacchetto che contiene tutti i sottoinsiemi di un insieme. L'insieme delle parti di $A$ si scrive $P(A)$ e si legge «parti di $A$». Qui conti quanti elementi ha.

Per $A = \{1, 2, 3\}$ conviene elencare i sottoinsiemi in ordine di grandezza.

| Quanti elementi | Sottoinsiemi | Quanti sono |
|--:|---|--:|
| 0 | $\emptyset$ | 1 |
| 1 | $\{1\}$, $\{2\}$, $\{3\}$ | 3 |
| 2 | $\{1, 2\}$, $\{1, 3\}$, $\{2, 3\}$ | 3 |
| 3 | $\{1, 2, 3\}$ | 1 |

In tutto $1 + 3 + 3 + 1 = 8$. Il vuoto e l'insieme intero ci sono sempre.

### Perché sono 2 alla n

Per costruire un sottoinsieme di $\{1, 2, 3\}$ decidi, elemento per elemento, «dentro» o «fuori». L'1 dentro o fuori, il 2 dentro o fuori, il 3 dentro o fuori: tre scelte da due possibilità ciascuna, $2 \cdot 2 \cdot 2 = 8$. Con $n$ elementi le scelte sono $n$, e i sottoinsiemi $2^n$, cioè 2 moltiplicato per sé stesso $n$ volte.

Il libro lo dimostra per induzione (p. 7), con un'idea che conviene ricordare. Aggiungi un elemento nuovo, per esempio 4, all'insieme $\{1, 2, 3\}$. I sottoinsiemi del nuovo insieme sono di due tipi:

- quelli **senza** il 4: sono gli 8 sottoinsiemi di prima;
- quelli **con** il 4: a ognuno degli 8 di prima aggiungi il 4.

Sono due gruppi con lo stesso numero di sottoinsiemi, quindi il totale raddoppia: $2 \cdot 8 = 16$. Un elemento in più, il doppio dei sottoinsiemi. È il passo induttivo: ogni tessera del domino fa cadere la successiva.

> [!TEOREMA] · Cardinalità dell'insieme delle parti (p. 7)
> Sia $A$ un insieme finito con $\lvert A \rvert = n$. Allora $\lvert P(A) \rvert = 2^n$.

**Come si legge.** «Se $A$ ha $n$ elementi, l'insieme delle parti di $A$ ne ha $2^n$.» Le barre vogliono dire «quanti elementi ha». Il passo base è l'insieme vuoto: il suo unico sottoinsieme è il vuoto stesso, quindi $P(\emptyset) = \{\emptyset\}$ ha un elemento, e $2^0 = 1$. Il passo induttivo è il raddoppio con i due gruppi.

### Elementi di elementi

Gli elementi di $P(A)$ sono sacchetti. Questo crea due livelli, e le domande del quiz giocano proprio sui livelli. Con $A = \{1, 2, 3\}$:

- $\{1, 2\} \in P(A)$ è vero: il sacchetto $\{1, 2\}$ è un sottoinsieme di $A$, quindi sta nel sacchetto dei sottoinsiemi;
- $1 \in P(A)$ è falso: 1 è una tessera di $A$, non un sottoinsieme;
- $\{\{1\}, \{2\}\} \subset P(A)$ è vero: i suoi due elementi, $\{1\}$ e $\{2\}$, sono sottoinsiemi di $A$.

> [!OLTRE] · le parti dell'intersezione
> I sottoinsiemi comuni ad $A$ e $B$ sono esattamente i sottoinsiemi di $A \cap B$: in simboli $P(A) \cap P(B) = P(A \cap B)$. Con l'unione non va così: è l'esercizio 4.

::: prova Quanti elementi ha $P(\{a, b, c, d, e\})$?
L'insieme ha 5 elementi, quindi $P$ ne ha $2^5 = 32$.
:::

::: prova Con $A = \{a, b\}$, quali frasi sono vere: $\emptyset \in P(A)$, $a \in P(A)$, $\{a\} \in P(A)$?
$\emptyset \in P(A)$ è vera, perché il vuoto è un sottoinsieme di ogni insieme. $a \in P(A)$ è falsa: $a$ è una lettera, non un sottoinsieme. $\{a\} \in P(A)$ è vera.
:::

> [!RICORDA]
> - $P(A)$ ha come elementi tutti i sottoinsiemi di $A$, compresi il vuoto e $A$.
> - Se $A$ ha $n$ elementi, $P(A)$ ne ha $2^n$: ogni elemento in più raddoppia il conto.
> - Gli elementi di $P(A)$ sono sacchetti: $\{1\} \in P(A)$, ma $1 \notin P(A)$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\in$, $\notin$ | «appartiene a», «non appartiene a» | è, o non è, un elemento di | $6 \in \{6\}$ |
| $\subset$ | «è contenuto in» | è un sottoinsieme (può anche essere uguale) | $\{2\} \subset \{2, 4\}$ |
| $\emptyset$ | «insieme vuoto» | l'insieme senza elementi | $\{1\} \cap \{2\} = \emptyset$ |
| $A \cap B$ | «$A$ intersecato $B$» | gli elementi che stanno in $A$ e in $B$ | $\{1, 2\} \cap \{2, 3\} = \{2\}$ |
| $A \cup B$ | «$A$ unione $B$» | gli elementi che stanno in $A$ oppure in $B$ | $\{1, 2\} \cup \{2, 3\} = \{1, 2, 3\}$ |
| $A \setminus B$ | «$A$ meno $B$» | gli elementi di $A$ che non stanno in $B$ | $\{1, 2\} \setminus \{2, 3\} = \{1\}$ |
| $C_X(A)$ | «complementare di $A$ in $X$» | gli elementi di $X$ fuori da $A$ | $C_{\{1, 2, 3\}}(\{1\}) = \{2, 3\}$ |
| $\lvert A \rvert$ | «cardinalità di $A$» | il numero di elementi di $A$ | $\lvert \{a, b\} \rvert = 2$ |
| $\{A_i\}_{i \in I}$ | «la famiglia degli $A_i$» | un gruppo di sottoinsiemi, con un numero ciascuno | $A_1 = \{1\}$, $A_2 = \{2, 3\}$ |
| $\bigcup_{i \in I} A_i$, $\bigcap_{i \in I} A_i$ | «unione», «intersezione degli $A_i$» | unione e intersezione di tutte le parti | $A_1 \cup A_2 \cup A_3$ |
| $\N$, $\Z$, $\Q$, $\R$ | «enne», «zeta», «cu», «erre» | naturali, interi, frazioni, reali | $-3 \in \Z$ |
| $n\Z$ | «enne zeta» | i multipli interi di $n$ | $6 \in 3\Z$ |
| $S + a$ | «$S$ più $a$» | ogni elemento di $S$ aumentato di $a$ | $2\Z + 1$ sono i dispari |
| $[x]$, $\overline x$ | «classe di $x$», «$x$ segnato» | la parte della partizione che contiene $x$ | $[0]$ sono i pari |
| $s(n)$ | «esse di $n$» | il successivo di $n$ | $s(4) = 5$ |
| $\ge$ | «maggiore o uguale a» | più grande oppure uguale | $2^3 \ge 4$ |
| $2^n$ | «due alla $n$» | 2 moltiplicato per sé stesso $n$ volte | $2^4 = 16$ |
| $P(A)$ | «parti di $A$» | l'insieme di tutti i sottoinsiemi di $A$ | $P(\{a\}) = \{\emptyset, \{a\}\}$ |
| $(a, b)$, $[a, b]$ | «intervallo aperto», «intervallo chiuso» | i reali tra $a$ e $b$, estremi esclusi o compresi | $1 \in [0, 1]$ |
| $\forall$, $\exists$ | «per ogni», «esiste» | per tutti, per almeno uno (nei riquadri del libro) | $\forall n \in \N,\ 2^n \ge n + 1$ |
| $\neq$ | «diverso da» | non uguale | $0 \neq s(n)$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 02/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26 dicono così.

**Com'è fatta la prova**

- **10 domande a risposta multipla**, ognuna con 5 risposte e una sola giusta. Una risposta giusta vale 1 punto; una sbagliata o vuota vale 0.
- **2 problemi** a risposta aperta, divisi in più domande con il punteggio scritto accanto.
- **Sbarramento.** Con meno di 6 punti nel quiz la prova non è superata, e i problemi non vengono corretti.
- **Sufficienza:** almeno 18 punti in tutto. **Durata:** 2 ore.
- **Materiale ammesso:** libro di testo e appunti del corso, e una calcolatrice non programmabile.

| Appello 2026/27 | Iscrizioni su MyUniTo (appello «M.D.A.G.1») | Ora |
|---|---|---|
| mar 19/01/2027 | 30/12/2026 – 12/01/2027 | 14:00 |
| mer 03/02/2027 | 14/01 – 27/01/2027 | 14:00 |

Dettagli e fonti nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa serve di questa lezione**

1. **Domanda 1 del quiz: unione e intersezione.** È la domanda sugli insiemi che apre quasi ogni appello. Con due insiemi: 14/01/2025, 04/02/2025 e 03/02/2026. Con tre insiemi: 06/06/2025. Con un insieme in più da intersecare, «quale è un sottoinsieme di $(A \cup B) \cap X$?»: 01/07/2026. Con i multipli, $n\Z$: 06/06/2026. Le risposte sbagliate confondono quasi sempre $\in$ e $\subset$.
2. **Domanda 2 del quiz: partizioni e ricoprimenti.** «Quale di queste è una partizione?» nella prova del 10/07/2023 e nell'appello del 04/02/2025. «Quale è un ricoprimento ma non una partizione?» nell'appello del 07/07/2025. Si risolvono con il metodo dei tre controlli.
3. **Il complementare per contare.** Nei problemi di combinatoria, «almeno uno» si conta spesso come «tutti meno nessuno»: è il complementare. Lo usa la soluzione ufficiale dell'appello dell'08/09/2025, problema 2, punto (b). La combinatoria arriva più avanti nel corso.
4. **Induzione e assiomi di Peano.** Negli appelli di Matematica Discreta dal 2021 al 2026 non ho trovato domande che chiedano una dimostrazione per induzione. Il principio di induzione è invece tra gli argomenti dei quiz di Fondamenti dell'Informatica.

**Una domanda vera, letta insieme**

> [!ESEMPIO] Appello del 07/07/2025, domanda 2
> Il testo: «Sia $X = \{b, c, f, h, k, m, r, u, v, z\}$. Quale delle seguenti è un ricoprimento di $X$ ma non una partizione?
> 1. $\{f, h, k, u, v\} \cup \{b, c, k, r, z\}$;
> 2. $\{b, c, k, r, s, z\} \cup \{f, h, m, u, v\}$;
> 3. $\{b, f, k, m, r\} \cup \{c, h, r, u, v, z\}$;
> 4. $\{b, c, m, v, z\} \cup \{f, h, k, u\}$;
> 5. $\{b, f, k, r, u, z\} \cup \{c, m, t, v\}$.»
>
> In pratica chiede: quale coppia di parti copre tutte e dieci le lettere, ma con almeno una lettera in tutte e due le parti? Il simbolo $\cup$ tra le parti dice solo che le parti vanno messe insieme.
>
> 1. Le lettere delle due parti sono b, c, f, h, k, r, u, v, z: manca la $m$. Non è un ricoprimento.
> 2. Nella prima parte c'è la $s$, che in $X$ non c'è: la parte non è un sottoinsieme di $X$. Scartata.
> 3. Le lettere sono b, f, k, m, r e c, h, u, v, z, con la $r$ in tutte e due: ci sono tutte e dieci. È un ricoprimento, e la $r$ ripetuta lo rende non una partizione. **È la risposta.**
> 4. Manca la $r$: non è un ricoprimento.
> 5. Nella seconda parte c'è la $t$, che in $X$ non c'è. Scartata.
>
> Il metodo è sempre lo stesso: prima controlla che ogni lettera di $X$ compaia, poi che non ci siano lettere estranee, infine cerca le lettere ripetute.

**Errori da evitare**

- Contare due volte nell'unione un elemento comune.
- Scrivere il complementare senza dire in quale insieme $X$.
- Nelle leggi di De Morgan, portare il complementare dentro la parentesi senza scambiare $\cap$ e $\cup$.
- Considerare una partizione una famiglia con una parte vuota, o controllare le sovrapposizioni solo su tutte le parti insieme invece che a due a due.
- Accettare una parte che contiene un elemento estraneo all'insieme.

> [!ESAME] Che cosa scrivere sul foglio di riepilogo
> Alla prova puoi portare libro e appunti, ma il tempo è poco. Da questa lezione conviene avere pronti: le due leggi di De Morgan, il metodo dei tre controlli per le partizioni e la tabella «elemento o sottoinsieme» della lezione D01.

## Quiz

```quiz
D: (Appello del 04/02/2025, domanda 1) Siano $A = \{2, 3, 5, 7, 9\}$ e $B = \{1, 4, 5, 8, 9\}$. Allora:
- $6 \in A \cup B$
- $\{3, 4\} \in A \cup B$
- $\{2, 8\} \subset A \cap B$
+ $\{5, 9\} = A \cap B$
- $9 \subset A \cap B$
= I numeri che stanno in tutti e due gli insiemi sono 5 e 9, quindi $A \cap B = \{5, 9\}$: la risposta giusta dice proprio questo. Il 6 non sta in nessuno dei due insiemi, quindi non sta nell'unione. $\{3, 4\} \in A \cup B$ è sbagliata perché gli elementi dell'unione sono numeri, non insiemi: sarebbe vera $\{3, 4\} \subset A \cup B$. $\{2, 8\} \subset A \cap B$ è sbagliata perché 2 e 8 non sono comuni. La più tentatrice è $9 \subset A \cap B$: il 9 sta nell'intersezione, ma è un numero, quindi si scrive $9 \in A \cap B$ oppure $\{9\} \subset A \cap B$.

D: (Appello del 03/02/2026, domanda 1) Siano $X = \{a, b, f, h, r, s, t, v, z\}$ e $Y = \{d, g, h, m, p, s, t, x, y\}$. Allora:
- $\{b, s, t\} \subset X \cap Y$
+ $f \notin X \cap Y$
- $\{h, t\} = X \cap Y$
- $\{h, s\} \in X \cap Y$
- $s \subset X \cap Y$
= Le lettere comuni sono $h$, $s$ e $t$, quindi $X \cap Y = \{h, s, t\}$. La $f$ sta in $X$ ma non in $Y$, quindi non sta nell'intersezione: $f \notin X \cap Y$ è vera. $\{b, s, t\} \subset X \cap Y$ è falsa perché la $b$ non è comune. $\{h, t\} = X \cap Y$ è la più tentatrice: $h$ e $t$ sono comuni, ma manca la $s$, quindi l'uguaglianza è falsa. $\{h, s\} \in X \cap Y$ e $s \subset X \cap Y$ confondono elementi e sottoinsiemi.

D: (Appello del 01/07/2026, domanda 1) Siano $A = \{b, f, h, m, n\}$, $B = \{d, g, h, p, q\}$ e $X = \{a, f, g, h, s, x, y\}$. Quale dei seguenti è un sottoinsieme di $(A \cup B) \cap X$?
- $\{\emptyset\}$
+ $\{f, h\}$
- $\{n\}$
- $\{a, g\}$
- $\{b, q\}$
= Prima la parentesi: $A \cup B = \{b, d, f, g, h, m, n, p, q\}$. Poi le lettere di questa unione che stanno anche in $X$: $f$, $g$ e $h$. Quindi $(A \cup B) \cap X = \{f, g, h\}$, e $\{f, h\}$ ne è un sottoinsieme. $\{n\}$ e $\{b, q\}$ stanno nell'unione ma non in $X$. $\{a, g\}$ è la più tentatrice: la $g$ va bene, ma la $a$ sta in $X$ e non nell'unione. $\{\emptyset\}$ non è un sottoinsieme, perché il suo unico elemento, il vuoto, non è una lettera dell'insieme; sarebbe vero $\emptyset \subset (A \cup B) \cap X$.

D: (Appello del 06/06/2025, domanda 1) Siano $A = \{3, 4, 7, 9\}$, $B = \{1, 3, 5, 6, 8, 9\}$ e $C = \{2, 4, 5, 8, 9\}$. Allora:
- $4 \in A \cap B \cap C$
- $A \subset B \cup C$
- $B \cap C \subset A$
- $A \cap B \subset C$
+ $A \cap B \cap C \neq \emptyset$
= Calcola un pezzo alla volta. $A \cap B = \{3, 9\}$, e di questi sta in $C$ solo il 9, quindi $A \cap B \cap C = \{9\}$, che non è vuoto: la risposta giusta è l'ultima. Il 4 non sta in $B$, quindi non sta nell'intersezione dei tre. $A \subset B \cup C$ è falsa per il 7, che non sta né in $B$ né in $C$. $B \cap C = \{5, 8, 9\}$ non è contenuto in $A$, perché 5 e 8 non stanno in $A$. La più tentatrice è $A \cap B \subset C$: il 9 sta in $C$, ma il 3 no.

D: (Appello del 06/06/2026, domanda 1) Ricordando che $n\Z = \{nk \mid k \in \Z\}$, dire quale delle seguenti affermazioni è vera.
- $7 \in 3\Z \cup 5\Z$
- $\{12, 20\} \subset 3\Z \cap 4\Z$
- $4\Z \cap 5\Z = \emptyset$
- $8 \in 2\Z \cap 5\Z$
+ $\{10, 21\} \subset 2\Z \cup 7\Z$
= $n\Z$ sono i multipli di $n$. Il 10 è multiplo di 2 e il 21 è multiplo di 7, quindi tutti e due stanno nell'unione $2\Z \cup 7\Z$: è la risposta giusta. Il 7 non è multiplo né di 3 né di 5. Il 20 non è multiplo di 3, quindi $\{12, 20\}$ non sta in $3\Z \cap 4\Z$. $4\Z \cap 5\Z$ non è vuoto: contiene 20, 40 e tutti i multipli di 20. L'8 è pari ma non è multiplo di 5. La trappola sta nel leggere $\cup$ come «tutti e due»: per l'unione basta essere multiplo di uno solo.

D: (Appello del 04/02/2025, domanda 2) Sia $S = \{a, c, f, h, m, t, v\}$. Quale delle seguenti è una partizione di $S$?
+ $\{m\} \cup \{a, c, t\} \cup \{f, h, v\}$
- $\{f, m\} \cup \{a, t\} \cup \{c, v\}$
- $\emptyset \cup \{a, f, h, m\} \cup \{c, t, v\}$
- $\{a, c\} \cup \{c, f, h, m\} \cup \{t, v\}$
- $\{a, h, m\} \cup \{h, t\} \cup \{c, f\}$
= Fai i tre controlli. La prima famiglia copre tutte e sette le lettere, non ha parti vuote e nessuna lettera si ripete: è una partizione. La seconda non copre la $h$. La terza è la più tentatrice: copre tutto e non ha ripetizioni, ma ha una parte vuota, che una partizione non può avere. La quarta ripete la $c$. La quinta ripete la $h$ e non copre la $v$.

D: (Prova scritta del 10/07/2023, domanda 2) Sia $S = \{0, 1, 2, 3, 4, 5, 6\}$. Quale delle seguenti scelte definisce una partizione di $S$?
- $A = \{4, 6\}$, $B = \{0, 1, 2\}$, $C = \{3\}$
- $A = \{0, 6\}$, $B = \{1, 3, 4, 6\}$, $C = \{2\}$
+ $A = \{1, 3, 5\}$, $B = \{0, 2, 4\}$, $C = \{6\}$
- $A = \{0, 2\}$, $B = \{1, 3, 4, 5\}$, $C = \{4, 6\}$
- $A = \{2, 4, 6\}$, $B = \emptyset$, $C = \{0, 1, 3, 5\}$
= La scelta giusta divide i sette numeri in dispari, pari fino a 4, e il 6 da solo: ognuno sta in una parte e nessuna parte è vuota. Nella prima manca il 5. Nella seconda il 6 sta in due parti e manca il 5. Nella quarta il 4 sta in due parti. L'ultima è la più tentatrice: copre tutto senza ripetizioni, ma $B$ è vuoto.

D: Siano $X = \{1, 2, 3, 4, 5, 6, 7, 8\}$, $A = \{1, 2, 3\}$ e $B = \{3, 4, 5\}$. Quanto fa $C_X(A \cup B)$?
- $\{3\}$
+ $\{6, 7, 8\}$
- $\{1, 2, 4, 5, 6, 7, 8\}$
- $\{1, 2, 3, 4, 5\}$
- $\emptyset$
= Il complementare dell'unione contiene gli elementi di $X$ che non stanno né in $A$ né in $B$. L'unione è $\{1, 2, 3, 4, 5\}$, quindi resta $\{6, 7, 8\}$. Per De Morgan è anche $C_X(A) \cap C_X(B)$: $\{4, 5, 6, 7, 8\}$ e $\{1, 2, 6, 7, 8\}$ hanno in comune proprio $\{6, 7, 8\}$. La risposta $\{1, 2, 4, 5, 6, 7, 8\}$ è il complementare dell'intersezione, cioè l'altra legge: è la più tentatrice. $\{1, 2, 3, 4, 5\}$ è l'unione stessa, e $\{3\}$ l'intersezione.

D: Le ore di un orologio, da 0 a 11, con «successivo» uguale a «l'ora dopo» (dopo le 11 vengono le 0). Quale assioma di Peano non è rispettato?
- Lo zero è un numero.
- Ogni numero ha un successivo.
- Due numeri diversi hanno successivi diversi.
+ Lo zero non è il successivo di nessun numero.
- Nessuno: l'orologio rispetta tutti gli assiomi.
= Dopo le 11 vengono le 0, quindi lo zero è il successivo di 11: è proprio quello che la quarta regola vieta. Le altre valgono: c'è lo zero, ogni ora ha l'ora dopo, e ore diverse hanno ore dopo diverse. La risposta «nessuno» è sbagliata: se l'orologio rispettasse tutti gli assiomi sarebbe come i naturali, e invece ha solo 12 elementi e conta in tondo.

D: Vuoi dimostrare per induzione che $1 + 3 + \dots + (2n - 1) = n^2$. Nel passo induttivo, quale uguaglianza devi ottenere?
- $1 + 3 + \dots + (2n - 1) = n^2$
+ $1 + 3 + \dots + (2n + 1) = (n + 1)^2$
- $1 + 3 + \dots + (2n + 1) = n^2 + 1$
- $1 = 1^2$
- $(2n - 1) + (2n + 1) = 4n$
= Nel passo induttivo si scrive la formula con $n + 1$ al posto di $n$. L'ultimo dispari diventa $2(n + 1) - 1 = 2n + 1$ e il lato destro diventa $(n + 1)^2$. La prima risposta è l'ipotesi induttiva: si usa, ma non è il punto d'arrivo, ed è la più tentatrice. $1 = 1^2$ è il passo base.

D: Quante sono le partizioni dell'insieme $\{1, 2, 3\}$?
- $3$
- $4$
+ $5$
- $6$
- $8$
= Si contano in base al numero di parti. Una parte: $\{1, 2, 3\}$. Due parti: una coppia e un elemento da solo, e l'elemento da solo può essere 1, 2 o 3, quindi tre modi. Tre parti: $\{1\}$, $\{2\}$, $\{3\}$. In tutto $1 + 3 + 1 = 5$. La risposta 8 è il numero dei sottoinsiemi, che è un'altra cosa: le partizioni non sono sottoinsiemi ma modi di dividere l'insieme.
```

## Esercizi

::: esercizio base Unione, intersezione, differenza, complementare
Prendi $X = \{1, 2, \dots, 12\}$, $A$ i multipli di 2 in $X$ e $B$ i multipli di 3 in $X$. Calcola $A \cap B$, $A \cup B$, $A \setminus B$, $B \setminus A$ e $C_X(A)$.
::: soluzione
1. Scrivi gli insiemi: $A = \{2, 4, 6, 8, 10, 12\}$ e $B = \{3, 6, 9, 12\}$.
2. In comune ci sono 6 e 12: $A \cap B = \{6, 12\}$. Sono i multipli di 6.
3. Tutti insieme, senza ripetere 6 e 12: $A \cup B = \{2, 3, 4, 6, 8, 9, 10, 12\}$. Sono $6 + 4 - 2 = 8$ elementi.
4. Da $A$ togli 6 e 12: $A \setminus B = \{2, 4, 8, 10\}$.
5. Da $B$ togli 6 e 12: $B \setminus A = \{3, 9\}$.
6. Gli elementi di $X$ fuori da $A$ sono i dispari: $C_X(A) = \{1, 3, 5, 7, 9, 11\}$.

Controllo con De Morgan: $C_X(A \cup B) = \{1, 5, 7, 11\}$. I numeri che stanno sia in $C_X(A)$ sia in $C_X(B) = \{1, 2, 4, 5, 7, 8, 10, 11\}$ sono proprio 1, 5, 7 e 11.
:::

::: esercizio base Lo stesso insieme, due complementari
Calcola il complementare di $A = \{2, 4\}$ in $X = \{1, 2, 3, 4, 5\}$ e in $Y = \{1, 2, \dots, 10\}$.
::: soluzione
1. In $X$ restano gli elementi diversi da 2 e 4: $C_X(A) = \{1, 3, 5\}$.
2. In $Y$ restano $C_Y(A) = \{1, 3, 5, 6, 7, 8, 9, 10\}$.

I due complementari sono diversi: dipendono dall'insieme in cui si guarda.
:::

::: esercizio base Esercizio 1.4 del libro: equazioni e insiemi
$A$ è l'insieme delle soluzioni di un'equazione $P(x) = 0$ e $B$ quello delle soluzioni di $Q(x) = 0$. (a) L'equazione $P(x) \cdot Q(x) = 0$ ha come soluzioni $A \cap B$ o $A \cup B$? (b) E il sistema formato dalle due equazioni?
::: soluzione
1. (a) Un prodotto vale zero quando almeno uno dei due fattori vale zero. Quindi $x$ è una soluzione quando $P(x) = 0$ **oppure** $Q(x) = 0$: le soluzioni sono $A \cup B$.
2. (b) Un sistema chiede che le due equazioni valgano **insieme**. Le soluzioni sono quelle comuni: $A \cap B$.

Controllo con un esempio: $P(x) = x - 1$ e $Q(x) = x - 2$, quindi $A = \{1\}$ e $B = \{2\}$. L'equazione $(x - 1)(x - 2) = 0$ ha soluzioni 1 e 2, cioè $A \cup B$. Il sistema chiede $x = 1$ e $x = 2$ insieme: nessuna soluzione, e infatti $A \cap B = \emptyset$.
:::

::: esercizio medio Esercizio 1.6 del libro: le parti di intersezione e unione
Di' se sono vere o false: $P(A \cap B) = P(A) \cap P(B)$ e $P(A \cup B) = P(A) \cup P(B)$.
::: soluzione
1. **La prima è vera.** Un insieme $S$ sta in $P(A \cap B)$ quando è contenuto in $A \cap B$, cioè quando tutti i suoi elementi stanno in $A$ e in $B$. È lo stesso che dire: $S$ è contenuto in $A$ e $S$ è contenuto in $B$, cioè $S$ sta in $P(A)$ e in $P(B)$.
2. **La seconda è falsa.** Basta un controesempio. Prendi $A = \{1\}$ e $B = \{2\}$. Allora $A \cup B = \{1, 2\}$ e $\{1, 2\}$ sta in $P(A \cup B)$.
3. Ma $\{1, 2\}$ non è contenuto né in $A$ né in $B$, quindi non sta in $P(A) \cup P(B)$. Infatti $P(A) \cup P(B) = \{\emptyset, \{1\}, \{2\}\}$ ha 3 elementi, mentre $P(A \cup B)$ ne ha 4.

Vale sempre solo il contenimento $P(A) \cup P(B) \subset P(A \cup B)$.
:::

::: esercizio medio Esercizio 1.7 del libro: la seconda proprietà distributiva
Dimostra che $(A \cap B) \cup C = (A \cup C) \cap (B \cup C)$, e controllala con $A = \{1, 2\}$, $B = \{2, 3\}$, $C = \{4\}$.
::: soluzione
1. Controllo con i numeri. A sinistra: $A \cap B = \{2\}$, e con $C$ viene $\{2, 4\}$. A destra: $A \cup C = \{1, 2, 4\}$ e $B \cup C = \{2, 3, 4\}$, in comune $\{2, 4\}$. Uguali.
2. Primo contenimento. Prendi $x$ a sinistra: sta in $A \cap B$ oppure in $C$. Se sta in $A \cap B$, sta in $A$ e in $B$, quindi in $A \cup C$ e in $B \cup C$. Se sta in $C$, sta in tutti e due gli insiemi con $C$. In ogni caso sta a destra.
3. Secondo contenimento. Prendi $x$ a destra: sta in $A \cup C$ e in $B \cup C$. Se sta in $C$, sta a sinistra. Se non sta in $C$, allora per stare in $A \cup C$ deve stare in $A$, e per stare in $B \cup C$ deve stare in $B$: quindi sta in $A \cap B$, e di nuovo a sinistra.
4. Con i due contenimenti i due insiemi sono uguali.
:::

::: esercizio medio Esercizio 1.9 del libro: la seconda legge di De Morgan
Dimostra che $C_X(A \cup B) = C_X(A) \cap C_X(B)$.
::: soluzione
1. Prendi $x$ in $C_X(A \cup B)$. Allora $x$ sta in $X$ e non sta in $A \cup B$, cioè non sta né in $A$ né in $B$.
2. Siccome non sta in $A$, sta in $C_X(A)$. Siccome non sta in $B$, sta in $C_X(B)$. Quindi sta nell'intersezione $C_X(A) \cap C_X(B)$.
3. Viceversa, prendi $x$ in $C_X(A) \cap C_X(B)$. Sta in $X$, non sta in $A$ e non sta in $B$.
4. Allora non sta in nessuno dei due insiemi, quindi non sta nella loro unione: sta in $C_X(A \cup B)$.
5. Con i due contenimenti, i due insiemi sono uguali.
:::

::: esercizio medio Esercizio 1.11 del libro: De Morgan con la differenza
Dimostra che $X \setminus (A \cap B) = (X \setminus A) \cup (X \setminus B)$, anche quando $A$ e $B$ non stanno dentro $X$. Controlla con $X = \{1, \dots, 10\}$, $A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5, 6\}$.
::: soluzione
1. Controllo con i numeri. $A \cap B = \{3, 4\}$, quindi a sinistra restano $\{1, 2, 5, 6, 7, 8, 9, 10\}$. A destra: $X \setminus A = \{5, 6, 7, 8, 9, 10\}$ e $X \setminus B = \{1, 2, 7, 8, 9, 10\}$, e insieme danno $\{1, 2, 5, 6, 7, 8, 9, 10\}$. Uguali.
2. Prendi $x$ a sinistra: sta in $X$ e non è comune ad $A$ e $B$. Quindi non sta in $A$ oppure non sta in $B$: nel primo caso sta in $X \setminus A$, nel secondo in $X \setminus B$.
3. Prendi $x$ a destra: sta in $X$, e non sta in $A$ oppure non sta in $B$. In tutti e due i casi non può stare in $A \cap B$, quindi sta a sinistra.
4. La dimostrazione non ha mai usato che $A$ e $B$ siano dentro $X$: la legge vale per la differenza in generale. Allo stesso modo $X \setminus (A \cup B) = (X \setminus A) \cap (X \setminus B)$.
:::

::: esercizio medio Esercizio 1.12 del libro
Dimostra che $(A \cup B) \setminus A = C_B(A \cap B)$. Il libro scrive il lato sinistro $A \cup B \setminus A$.
::: soluzione
1. A sinistra ci sono gli elementi che stanno in $A$ oppure in $B$, ma non in $A$. Non stando in $A$, devono stare in $B$: sono gli elementi di $B$ che non stanno in $A$.
2. A destra, $A \cap B$ è contenuto in $B$, quindi il complementare in $B$ ha senso. Contiene gli elementi di $B$ che non stanno in $A \cap B$. Un elemento di $B$ sta in $A \cap B$ esattamente quando sta in $A$: quindi sono gli elementi di $B$ che non stanno in $A$.
3. I due lati descrivono lo stesso insieme, $B \setminus A$.

Controllo: con $A = \{1, 2, 3, 4\}$ e $B = \{3, 4, 5, 6\}$, a sinistra $\{1, 2, 3, 4, 5, 6\} \setminus A = \{5, 6\}$, a destra $B \setminus \{3, 4\} = \{5, 6\}$.
:::

::: esercizio medio Una somma di potenze di 2, per induzione
Dimostra che per ogni naturale $n$ vale $1 + 2 + 4 + \dots + 2^n = 2^{n+1} - 1$.
::: soluzione
1. Prima i numeri: $1 = 2 - 1$; $1 + 2 = 3 = 4 - 1$; $1 + 2 + 4 = 7 = 8 - 1$. Funziona.
2. **Passo base**, $n = 0$: a sinistra c'è solo $2^0 = 1$, a destra $2^1 - 1 = 1$. Uguali.
3. **Ipotesi induttiva:** per un certo $n$ vale $1 + 2 + \dots + 2^n = 2^{n+1} - 1$.
4. **Passo induttivo.** Devi arrivare a $1 + 2 + \dots + 2^n + 2^{n+1} = 2^{n+2} - 1$. Per l'ipotesi, i primi addendi fanno $2^{n+1} - 1$, quindi il lato sinistro è $2^{n+1} - 1 + 2^{n+1}$.
5. Due volte $2^{n+1}$ fa $2 \cdot 2^{n+1} = 2^{n+2}$. Il lato sinistro è quindi $2^{n+2} - 1$, come volevi.
6. **Conclusione:** per induzione la formula vale per ogni naturale $n$.

A Fondamenti dell'Informatica la stessa formula dice che il numero binario 11111, cinque 1, vale $2^5 - 1 = 31$.
:::

::: esercizio medio Esercizio 1.14 del libro: tutte le partizioni di quattro lettere
Trova tutte le partizioni dell'insieme $A = \{a, b, c, d\}$.
::: soluzione
Le conto in base al numero di parti.

1. **Una parte:** $\{a, b, c, d\}$. Una partizione.
2. **Due parti, una lettera da sola e tre insieme:** la lettera sola può essere $a$, $b$, $c$ o $d$. Quattro partizioni, per esempio $\{a\}$ e $\{b, c, d\}$.
3. **Due parti di due lettere:** la compagna della $a$ può essere $b$, $c$ o $d$, e le altre due lettere formano l'altra parte. Tre partizioni: $\{a, b\}$ e $\{c, d\}$; $\{a, c\}$ e $\{b, d\}$; $\{a, d\}$ e $\{b, c\}$.
4. **Tre parti, una coppia e due lettere da sole:** basta scegliere la coppia, e le coppie di quattro lettere sono sei ($ab$, $ac$, $ad$, $bc$, $bd$, $cd$). Sei partizioni, per esempio $\{a, b\}$, $\{c\}$, $\{d\}$.
5. **Quattro parti:** $\{a\}$, $\{b\}$, $\{c\}$, $\{d\}$. Una partizione.

In tutto $1 + 4 + 3 + 6 + 1 = 15$ partizioni.
:::

::: esercizio medio Esercizio 1.15 del libro: le rette per l'origine
Le rette del piano che passano per l'origine $O$ sono un ricoprimento del piano? Una partizione?
::: soluzione
1. **Ricoprimento: sì.** Prendi un punto $P$ del piano. Se è diverso da $O$, la retta che passa per $O$ e per $P$ è una delle rette della famiglia, e contiene $P$. Se $P$ è proprio $O$, sta su tutte. Quindi l'unione delle rette è tutto il piano.
2. **Partizione: no.** Due rette diverse per l'origine hanno in comune il punto $O$: non sono disgiunte. Il terzo controllo fallisce.

Se si toglie l'origine da ogni retta e dal piano, le rette senza $O$ diventano una partizione del piano senza $O$.
:::

::: esercizio difficile Esercizio 1.16 del libro: dividere i sottoinsiemi per grandezza
Sia $X$ un insieme con $n$ elementi e, per ogni $k$ da 0 a $n$, sia $P_k$ l'insieme dei sottoinsiemi di $X$ con $k$ elementi. Dimostra che le $P_k$ sono una partizione di $P(X)$. Quanti elementi ha l'insieme quoziente?
::: soluzione
1. Prima un esempio, con $X = \{1, 2, 3\}$: $P_0 = \{\emptyset\}$, $P_1$ ha i tre sottoinsiemi con un elemento, $P_2$ i tre con due, $P_3 = \{X\}$. È la tabella della sezione sull'insieme delle parti.
2. **Coprono tutto.** Ogni sottoinsieme di $X$ ha un certo numero $k$ di elementi, tra 0 e $n$, e quindi sta in $P_k$.
3. **Nessuna parte vuota.** Per ogni $k$ da 0 a $n$ esiste un sottoinsieme con $k$ elementi: prendi $k$ elementi qualunque di $X$. Quindi $P_k$ non è vuoto.
4. **Nessuna sovrapposizione.** Un sottoinsieme ha un solo numero di elementi, quindi non può stare in due parti $P_j$ e $P_k$ con $j$ diverso da $k$.
5. **Il quoziente** ha come elementi le parti $P_0, P_1, \dots, P_n$: sono $n + 1$.

Con $X = \{1, 2, 3\}$ il quoziente ha 4 elementi, e le grandezze delle parti sono 1, 3, 3, 1: in tutto 8 sottoinsiemi, come deve essere.
:::

::: esercizio difficile Esercizio 1.5 del libro
Dimostra che $A \cap B = \emptyset$ esattamente quando $P(A) \cap P(B) = \{\emptyset\}$.
::: soluzione
1. Dall'esercizio 4 sai che $P(A) \cap P(B) = P(A \cap B)$. Quindi devi dimostrare: $A \cap B$ è vuoto esattamente quando $P(A \cap B) = \{\emptyset\}$.
2. Se $A \cap B$ è vuoto, il suo unico sottoinsieme è il vuoto: $P(\emptyset) = \{\emptyset\}$.
3. Se invece $A \cap B$ contiene un elemento $x$, allora $\{x\}$ è un suo sottoinsieme, e $P(A \cap B)$ contiene almeno $\emptyset$ e $\{x\}$: non è $\{\emptyset\}$.
4. Le due frasi sono vere esattamente negli stessi casi.

Attenzione: $\{\emptyset\}$ non è l'insieme vuoto. Ha un elemento, il vuoto, e infatti il vuoto è un sottoinsieme comune a qualunque coppia di insiemi.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra intersezione e unione? Fai un esempio.
L'intersezione contiene gli elementi che stanno in tutti e due gli insiemi, l'unione quelli che stanno in almeno uno. Con $\{1, 2\}$ e $\{2, 3\}$: intersezione $\{2\}$, unione $\{1, 2, 3\}$.
:::

::: domanda Che cosa vuol dire che due insiemi sono disgiunti?
Che non hanno elementi in comune: la loro intersezione è vuota. Per esempio i pari e i dispari.
:::

::: domanda Che differenza c'è tra $A \setminus B$ e $C_X(A)$?
$A \setminus B$ toglie da $A$ gli elementi di $B$, e si può fare con due insiemi qualunque. $C_X(A)$ è la differenza $X \setminus A$ quando $A$ è contenuto in $X$: è tutto quello che di $X$ sta fuori da $A$. Dipende da $X$.
:::

::: domanda Come si ricordano le leggi di De Morgan?
Il complementare entra nella parentesi e scambia unione e intersezione. Fuori dall'unione vuol dire fuori da tutti e due; fuori dall'intersezione vuol dire fuori da almeno uno.
:::

::: domanda Che cosa dice il quinto assioma di Peano, e che cosa c'entra con l'induzione?
Dice che un insieme di naturali che contiene lo zero e, con ogni numero, anche il suo successivo, contiene tutti i naturali. Il passo base mette lo zero nell'insieme dei numeri per cui la proprietà è vera, e il passo induttivo dice che quell'insieme passa al successivo: quindi contiene tutti i naturali.
:::

::: domanda Perché un insieme con $n$ elementi ha $2^n$ sottoinsiemi?
Perché per ogni elemento si sceglie «dentro» o «fuori», e le scelte si moltiplicano: $2 \cdot 2 \cdots 2$, $n$ volte. Detto con l'induzione: aggiungendo un elemento, i sottoinsiemi si dividono in quelli senza e quelli con il nuovo elemento, e il conto raddoppia.
:::

::: domanda Che differenza c'è tra un ricoprimento e una partizione?
In un ricoprimento le parti coprono tutto l'insieme, ma possono sovrapporsi. In una partizione, in più, nessuna parte è vuota e due parti diverse non hanno elementi in comune: ogni elemento sta in una parte sola.
:::

::: domanda Che cos'è l'insieme quoziente di una partizione?
È l'insieme che ha come elementi le parti della partizione. Per la partizione degli interi in pari e dispari ha due elementi: i pari, che si possono scrivere $[0]$, e i dispari, $[1]$.
:::

## Glossario

```glossario
Intersezione | L'insieme degli elementi che stanno in tutti e due gli insiemi: $A \cap B$. Esempio: $\{1, 2\} \cap \{2, 3\} = \{2\}$.
Unione | L'insieme degli elementi che stanno in almeno uno dei due insiemi: $A \cup B$. Gli elementi comuni si contano una volta.
Disgiunti | Due insiemi senza elementi in comune: la loro intersezione è vuota.
Differenza | $A \setminus B$: gli elementi di $A$ che non stanno in $B$. L'ordine conta.
Complementare | Se $A$ è contenuto in $X$, il complementare $C_X(A)$ sono gli elementi di $X$ fuori da $A$. Dipende da $X$.
Leggi di De Morgan | Il complementare dell'unione è l'intersezione dei complementari, e il complementare dell'intersezione è l'unione dei complementari.
Proprietà distributive | $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$, e la stessa regola con unione e intersezione scambiate.
Assioma | Una regola che non si dimostra e si accetta come punto di partenza.
Assiomi di Peano | Le cinque regole che descrivono i naturali: lo zero, il successivo, niente ritorni allo zero, niente cappi, e il principio di induzione.
Successivo | Il numero che viene subito dopo: $s(n) = n + 1$.
Principio di induzione | Se un insieme di naturali contiene lo zero e passa sempre al successivo, contiene tutti i naturali.
Ipotesi induttiva | Nel passo induttivo, la proprietà per $n$, che si suppone vera e si usa per arrivare a $n + 1$.
Insieme delle parti | $P(A)$, l'insieme di tutti i sottoinsiemi di $A$. Se $A$ ha $n$ elementi, $P(A)$ ne ha $2^n$.
Famiglia di insiemi | Un gruppo di insiemi con un'etichetta ciascuno, scritto $\{A_i\}_{i \in I}$.
Ricoprimento | Una famiglia di sottoinsiemi di $X$ la cui unione è tutto $X$. Le parti possono sovrapporsi.
Partizione | Un ricoprimento con parti non vuote e disgiunte a due a due: ogni elemento sta in una parte sola.
Insieme quoziente | L'insieme che ha come elementi le parti di una partizione.
Rappresentante | Un elemento qualunque di una parte; la parte si scrive $[x]$, «la parte che contiene $x$».
```

## Checklist

```checklist
- So calcolare intersezione, unione e differenza di due o tre insiemi scritti con l'elenco.
- So distinguere $x \in A \cap B$ da $\{x\} \subset A \cap B$.
- So calcolare il complementare di un sottoinsieme e so che dipende dall'insieme di partenza.
- So enunciare le due leggi di De Morgan e controllarle su un esempio.
- So dimostrare un'uguaglianza tra insiemi con la doppia inclusione.
- So spiegare a parole i cinque assiomi di Peano e trovare quello che manca in un esempio.
- So fare una dimostrazione per induzione: passo base, ipotesi, passo induttivo, conclusione.
- So contare i sottoinsiemi di un insieme e distinguere gli elementi di $P(A)$ dai suoi sottoinsiemi.
- So riconoscere un ricoprimento e una partizione con i tre controlli.
- So dire che cos'è l'insieme quoziente di una partizione.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 1 «Insiemi», pp. 5–13 (assiomi di Peano, teorema 1.10 ed esempi di p. 7, definizioni 1.13, 1.14, 1.16, 1.17, 1.19, 1.21 e 1.22, proposizione 1.15, teorema 1.18, nota 1.20) ed esercizi 1.4–1.7, 1.9, 1.11, 1.12, 1.14–1.16 (pp. 14–15). Le definizioni e gli enunciati nei riquadri sono citati dal libro. I due refusi degli esempi di ricoprimento (p. 11 e p. 12) sono segnalati nel riquadro sui ricoprimenti.
- Argomenti della lezione del 02/10/2026 sul Moodle del canale B: complementare di un sottoinsieme, leggi di De Morgan, i naturali e gli assiomi di Peano, il principio di induzione come metodo dimostrativo, l'insieme delle parti e la sua cardinalità, ricoprimenti e partizioni.
- Quiz e problemi degli appelli di Matematica Discreta, con le soluzioni ufficiali, sulla pagina Moodle MDAG1 2025/26 ([id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), aperta agli ospiti) e nella raccolta dei quiz 2021–2025: prova del 10/07/2023 (domanda 2); appelli del 14/01/2025, 04/02/2025 (domande 1 e 2), 06/06/2025 (domanda 1), 07/07/2025 (domanda 2), 08/09/2025 (problema 2), 03/02/2026, 06/06/2026 e 01/07/2026 (domanda 1).
- Calendario degli appelli 2026/27 e regole d'esame: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
- V. Bocchino, *Rigurgiti di Unicorno*, appunti di Matematica Discreta scritti da uno studente sul libro di Mori (licenza CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): un riepilogo già pronto, non ufficiale.
- Le spiegazioni a parole, gli esempi con le tessere, i riquadri «Ripasso» e «Prova tu», i quiz senza data e gli esercizi senza il numero del libro sono di questi appunti.
