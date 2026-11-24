---
corso: MDAG
modulo: MD
lezione: D19
titolo: Operazioni e gruppi
data: 2026-11-23
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D19
descrizione: >-
  Appunti della lezione D19 di Matematica Discreta (MDAG, parte 1, canali A, B e C): operazioni su un insieme,
  proprietà associativa e commutativa, elemento neutro, elementi invertibili, semigruppi, monoidi e gruppi, gruppi
  commutativi, notazione additiva e moltiplicativa, le prime proprietà dei gruppi e il gruppo prodotto, con il
  problema d'esame del 04/02/2025.
lede: >-
  Gli interi con la somma, le permutazioni con la composizione, le classi invertibili con il prodotto: tre mondi
  diversi che si comportano allo stesso modo. Quello che hanno in comune sono tre regole, e un insieme che le rispetta
  si chiama gruppo. Quello che si dimostra per un gruppo qualunque vale poi per tutti e tre.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 2, pp. 29–34, e cap. 6, pp. 107–111
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 2 «Funzioni», sezione «Operazioni», pp. 29–34
  (definizioni 2.26, 2.28, 2.30, 2.32 e 2.34, proposizioni 2.29, 2.31, 2.33 e 2.35), e cap. 6 «Gruppi», sezione
  «Definizione ed esempi», pp. 107–111 (definizione 6.1, note 6.2–6.5 e 6.7, proposizione 6.6, gruppo prodotto);
  diario delle lezioni del canale B 2025/26, lezione 19; appello di Matematica Discreta del 04/02/2025
appunti_html: appunti/MDAG/D19_operazioni_gruppi.html
genera_html: true
---

## In breve

- Un'**operazione** su un insieme è una regola che a due suoi elementi ne fa corrispondere un terzo, **dello stesso insieme**.
- Un'operazione può essere **associativa** (le parentesi non contano) e **commutativa** (l'ordine non conta). Sono due proprietà diverse.
- Un **elemento neutro** è un elemento che, operato con qualunque altro, lo lascia com'è. Se c'è, è uno solo.
- Un elemento è **invertibile** se ce n'è un altro che, operato con lui, dà il neutro. Con un'operazione associativa l'inverso, se c'è, è uno solo.
- **Semigruppo**: operazione associativa. **Monoide**: in più c'è il neutro. **Gruppo**: in più ogni elemento è invertibile.
- Un gruppo è **commutativo**, o **abeliano**, se la sua operazione è commutativa. Non tutti lo sono: le permutazioni no.
- In ogni gruppo l'inverso di un prodotto è il prodotto degli inversi **in ordine rovesciato**, e vale la **legge di cancellazione**.
- Gli esempi da avere in testa: gli interi con la somma, le classi resto con la somma, le classi invertibili con il prodotto, le permutazioni con la composizione.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di lunedì 23/11/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la diciannovesima lezione era «Insiemi con operazioni. Definizione di gruppo (commutativo). Esempi e prime proprietà». Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> **Dove sta nel libro.** In due posti. Le operazioni in generale sono alla fine del capitolo 2, pp. 29–34, che finora era stata saltata. La definizione di gruppo, gli esempi e le prime proprietà sono all'inizio del capitolo 6, pp. 107–111. Le metto insieme, nell'ordine in cui servono.
>
> **Rispetto al libro.** Il libro scrive il capitolo 6 prima del 7, e quindi tra gli esempi di gruppo non ha ancora le classi resto. In aula l'ordine è stato l'opposto: le classi resto ci sono già, e le uso come esempi fin dall'inizio.
>
> Servono le classi resto e le classi invertibili della [D17](D17_congruenze_classi_resto.html) e della [D18](D18_invertibili_divisori_zero_eulero.html), le permutazioni della [D10](D10_binomio_newton_permutazioni.html), e composizione e funzioni inverse della [D05](D05_composizione_funzioni_inverse.html). I sottogruppi, con cui il capitolo 6 continua, sono la prossima lezione.

## Che cos'è un'operazione

Sommare due numeri, comporre due funzioni, unire due insiemi: in tutti i casi si prendono due oggetti dello stesso tipo e se ne ottiene un terzo, ancora dello stesso tipo.

```grafico
titolo: Un'operazione vista come una macchina con due ingressi e un'uscita. Entrano due elementi dell'insieme A, in un certo ordine, ed esce un elemento che deve stare ancora in A
x: 0 10
y: 0 4.4
assi: no
griglia: no
proporzioni: libere
testo: 1.0 3.3 | blu | "a"
testo: 1.0 1.1 | blu | "b"
freccia: 1.5 3.3 3.5 2.6 | blu
freccia: 1.5 1.1 3.5 1.8 | blu
poligono: 3.6 1.2 6.2 1.2 6.2 3.2 3.6 3.2 | ambra | tenue
testo: 4.9 2.2 | ambra | "∗"
freccia: 6.3 2.2 8.0 2.2 | verde
testo: 8.9 2.2 | verde | "a ∗ b"
testo: 1.0 0.3 | grigio | "in A"
testo: 8.9 1.5 | grigio | "in A"
```

> [!DEF] Operazione binaria (libro, definizione 2.26)
> Un'**operazione binaria**, o solo operazione, su un insieme non vuoto $A$ è una funzione
>
> $$* : A \times A \longrightarrow A$$

**Come si legge.** Una funzione che prende una coppia di elementi di $A$ e restituisce un elemento di $A$. Invece di $*((a_1, a_2))$ si scrive $a_1 * a_2$, come si fa con $+$ e $\cdot$; il simbolo $*$ sta per un'operazione qualunque. Dentro la definizione ci sono due richieste: il risultato deve esistere **per ogni** coppia, e deve stare **ancora in $A$**.

Per questo la stessa regola può essere un'operazione su un insieme e non su un altro:

| Regola | Insieme | È un'operazione? |
|---|---|---|
| somma | $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ | sì |
| sottrazione | $\mathbb{Z}$ | sì |
| sottrazione | $\mathbb{N}$ | no: $1 - 2$ non sta in $\mathbb{N}$ |
| divisione | $\mathbb{Q}$ | no: la divisione per 0 non è definita |
| unione, intersezione | i sottoinsiemi di un insieme $X$ | sì |
| composizione | le funzioni da $X$ in $X$ | sì |
| somma e prodotto tra classi | $\mathbb{Z}_N$ | sì: è la buona definizione della [D17](D17_congruenze_classi_resto.html) |

Lo stesso controllo si fa per un **sottoinsieme**.

> [!DEF] Sottoinsieme chiuso (libro, definizione 2.34)
> Un sottoinsieme non vuoto $S$ di $A$ è **chiuso** rispetto all'operazione $*$ se, per ogni $s_1$ e $s_2$ in $S$, anche $s_1 * s_2$ sta in $S$.

**Come si legge.** Operando tra elementi di $S$ non si esce da $S$. I numeri pari sono chiusi rispetto alla somma: pari più pari fa pari. I dispari no: dispari più dispari fa pari. Le classi invertibili di $\mathbb{Z}_N$ sono chiuse rispetto al prodotto, come si è visto nella [D18](D18_invertibili_divisori_zero_eulero.html).

::: prova La regola $a * b = \frac{a + b}{2}$, la media, è un'operazione su $\mathbb{Z}$? E su $\mathbb{Q}$?
Su $\mathbb{Z}$ no: la media di 1 e 2 è $\frac{3}{2}$, che non è un intero. Su $\mathbb{Q}$ sì: la media di due razionali è un razionale.
:::

> [!RICORDA]
> - Operazione su $A$: da due elementi di $A$ a un elemento di $A$.
> - Il risultato deve esistere sempre e restare in $A$.
> - Sottoinsieme chiuso: operando tra i suoi elementi non si esce.

## Associativa, commutativa, elemento neutro

Presa da sola, un'operazione può comportarsi in qualunque modo. Diventa utile quando ha alcune delle proprietà delle operazioni tra numeri.

Con la sottrazione, per esempio, le parentesi contano: $(5 - 3) - 1 = 1$, mentre $5 - (3 - 1) = 3$. E conta l'ordine: $5 - 3$ non è $3 - 5$.

> [!DEF] Proprietà di un'operazione (libro, definizione 2.28)
> Un'operazione $*$ su $A$ è:
>
> - **associativa** se $(a_1 * a_2) * a_3 = a_1 * (a_2 * a_3)$ per ogni $a_1, a_2, a_3$ in $A$;
> - **commutativa** se $a_1 * a_2 = a_2 * a_1$ per ogni $a_1, a_2$ in $A$.
>
> Un elemento $e$ di $A$ è **neutro** per $*$ se $a * e = e * a = a$ per ogni $a$ in $A$.

**Come si legge.** Associativa: in una fila di tre o più elementi non importa dove si mettono le parentesi, e quindi si possono non scrivere. Commutativa: non importa l'ordine dei due elementi. Neutro: un elemento che non fa niente, da tutti e due i lati.

Le due proprietà sono indipendenti. La composizione di funzioni è associativa e non commutativa: l'hai visto con le permutazioni nella [D10](D10_binomio_newton_permutazioni.html). La media dell'ultimo «Prova tu» è commutativa e non associativa: con 2, 4 e 8, mettendo le parentesi a sinistra viene 5,5 e a destra viene 4.

| Operazione | Associativa | Commutativa | Elemento neutro |
|---|---|---|---|
| somma su $\mathbb{Z}$ | sì | sì | 0 |
| prodotto su $\mathbb{Z}$ | sì | sì | 1 |
| sottrazione su $\mathbb{Z}$ | no | no | non c'è |
| unione sui sottoinsiemi di $X$ | sì | sì | $\varnothing$ |
| intersezione sui sottoinsiemi di $X$ | sì | sì | $X$ |
| composizione sulle funzioni da $X$ in $X$ | sì | no | la funzione identità |
| somma su $\mathbb{Z}_N$ | sì | sì | $\overline{0}$ |
| prodotto su $\mathbb{Z}_N$ | sì | sì | $\overline{1}$ |

Per la sottrazione lo zero funziona solo a destra: $a - 0 = a$, ma $0 - a$ non è $a$. Un neutro deve funzionare da tutti e due i lati.

Nella tabella, quando il neutro c'è, è uno. Non è un caso.

> [!PROP] L'elemento neutro è unico (libro, proposizione 2.29)
> Se un'operazione $*$ su $A$ ha un elemento neutro, ne ha uno solo.

**Come si legge.** Si può dire «**il** neutro» e dargli un simbolo, di solito $e$. La dimostrazione è un trucco che torna spesso: si calcola la stessa cosa in due modi.

> [!ESEMPIO] · La dimostrazione
> Suppongo che $e$ ed $e'$ siano tutti e due neutri, e guardo il prodotto $e * e'$.
>
> Siccome $e$ è neutro, $e * e' = e'$.
>
> Siccome $e'$ è neutro, $e * e' = e$.
>
> È lo stesso prodotto: quindi $e = e'$.

::: prova Sull'insieme $\{0, 1, 2, 3, 4\}$ considera l'operazione «il più grande dei due», $a * b = \max(a, b)$. È associativa? Commutativa? Ha un elemento neutro?
È associativa e commutativa: il più grande di tre numeri non dipende da come li si confronta. Il neutro è 0: il più grande tra $a$ e 0 è $a$. Controllato con un programma su tutte le terne.
:::

> [!RICORDA]
> - Associativa: le parentesi non contano. Commutativa: l'ordine non conta.
> - Le due proprietà sono indipendenti.
> - Neutro: non cambia niente, da tutti e due i lati. Se c'è, è unico.

## Gli elementi invertibili

Avere un neutro permette di chiedersi se un elemento si può «disfare». Nella [D18](D18_invertibili_divisori_zero_eulero.html) lo si è fatto per il prodotto tra classi; qui la stessa idea per un'operazione qualunque.

> [!DEF] Elemento invertibile (libro, definizione 2.30)
> In un insieme $A$ con un'operazione $*$ che ha l'elemento neutro $e$, un elemento $a$ è **invertibile** se esiste un elemento $b$ di $A$ con
>
> $$a * b = b * a = e$$

**Come si legge.** $b$ annulla l'effetto di $a$, da tutti e due i lati. Che cosa voglia dire dipende dall'operazione, perché dipende da chi è il neutro:

| Operazione | Neutro | Chi è invertibile | Inverso di $a$ |
|---|---|---|---|
| somma su $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ | 0 | tutti | l'opposto $-a$ |
| somma su $\mathbb{N}$ | 0 | solo 0 | |
| prodotto su $\mathbb{Q}$, $\mathbb{R}$ | 1 | tutti tranne 0 | $\frac{1}{a}$ |
| prodotto su $\mathbb{Z}$ | 1 | solo 1 e −1 | sé stesso |
| composizione sulle funzioni da $X$ in $X$ | identità | le funzioni biettive | la funzione inversa |
| somma su $\mathbb{Z}_N$ | $\overline{0}$ | tutte le classi | l'opposta $\overline{-a}$ |
| prodotto su $\mathbb{Z}_N$ | $\overline{1}$ | le classi coprime con $N$ | l'inversa della D18 |

La riga della composizione è il teorema della [D05](D05_composizione_funzioni_inverse.html): una funzione ha un'inversa esattamente quando è biettiva.

> [!PROP] L'inverso è unico (libro, proposizione 2.31)
> Se l'operazione $*$ è **associativa** e ha il neutro $e$, un elemento invertibile ha un solo inverso: se $b * a = e$ e $a * b' = e$, allora $b = b'$.

**Come si legge.** Si può dire «**l'**inverso di $a$» e scriverlo $a^{-1}$. L'enunciato dice anche qualcosa in più: un elemento che funziona da inverso a sinistra e uno che funziona a destra sono per forza lo stesso. Qui serve l'associativa, ed è il motivo per cui la si chiede sempre.

> [!ESEMPIO] · La dimostrazione
> Calcolo $b * a * b'$ in due modi, mettendo le parentesi in due posti.
>
> $(b * a) * b' = e * b' = b'$
>
> $b * (a * b') = b * e = b$
>
> Per la proprietà associativa i due risultati sono uguali: $b = b'$.

Con due elementi invertibili, anche il loro prodotto lo è.

> [!PROP] L'inverso di un prodotto (libro, proposizione 2.35)
> Se $*$ è associativa con neutro, e $a$ e $b$ sono invertibili, allora $a * b$ è invertibile e
>
> $$(a * b)^{-1} = b^{-1} * a^{-1}$$

**Come si legge.** L'inverso di un prodotto è il prodotto degli inversi, **nell'ordine rovesciato**. È la regola «calze e scarpe» della [D05](D05_composizione_funzioni_inverse.html): per disfare «prima le calze, poi le scarpe» si tolgono prima le scarpe. Se l'operazione è commutativa l'ordine non si vede; con le permutazioni sì. Quindi gli elementi invertibili formano un sottoinsieme chiuso.

> [!DIM]- Perché vale
> Basta controllare che $b^{-1} * a^{-1}$ faccia da inverso, usando l'associativa per spostare le parentesi:
>
> $(a * b) * (b^{-1} * a^{-1}) = a * (b * b^{-1}) * a^{-1} = a * e * a^{-1} = a * a^{-1} = e$
>
> Dall'altro lato il conto è lo stesso, con i ruoli scambiati.

::: prova In $\mathbb{Z}_7$ con il prodotto, l'inversa di $\overline{3}$ è $\overline{5}$ e quella di $\overline{2}$ è $\overline{4}$. Senza altri tentativi, qual è l'inversa di $\overline{3} \cdot \overline{2} = \overline{6}$?
$\overline{4} \cdot \overline{5} = \overline{20} = \overline{6}$. Controllo: $6 \cdot 6 = 36 \equiv 1$.
:::

> [!RICORDA]
> - Invertibile: c'è un elemento che operato con lui, da tutti e due i lati, dà il neutro.
> - Con l'associativa, l'inverso è unico.
> - Inverso di un prodotto: gli inversi in ordine rovesciato.

## Semigruppi, monoidi, gruppi

Le tre proprietà viste finora, messe una sopra l'altra, danno tre nomi. Ogni gradino chiede una cosa in più del precedente.

```grafico
titolo: I tre tipi di struttura, uno dentro l'altro. Ogni gruppo è anche un monoide, e ogni monoide è anche un semigruppo. Scendendo verso l'interno si aggiunge una richiesta: prima il neutro, poi gli inversi
x: 0 12
y: 0 7.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.3 0.3 11.7 0.3 11.7 6.9 0.3 6.9 | blu | tenue
testo: 6 6.3 | blu | "semigruppo: associativa"
testo: 6 5.6 | grigio | "interi positivi con +"
poligono: 1.3 0.7 10.7 0.7 10.7 4.9 1.3 4.9 | viola | tenue
testo: 6 4.3 | viola | "monoide: in più il neutro"
testo: 6 3.6 | grigio | "parole con la concatenazione"
poligono: 2.5 1.0 9.5 1.0 9.5 2.9 2.5 2.9 | verde | tenue
testo: 6 2.3 | verde | "gruppo: in più gli inversi"
testo: 6 1.6 | grigio | "interi con +, permutazioni"
```

> [!DEF] Semigruppo, monoide, gruppo (libro, definizione 6.1)
> Una coppia $(A, *)$, fatta di un insieme non vuoto $A$ e di un'operazione $*$ su $A$, è:
>
> 1. un **semigruppo** se $*$ è associativa;
> 2. un **monoide** se $*$ è associativa e ha un elemento neutro;
> 3. un **gruppo** se $*$ è associativa, ha un elemento neutro, e **ogni** elemento di $A$ è invertibile.

**Come si legge.** Un gruppo non è un insieme: è un insieme **insieme a** un'operazione. Lo stesso insieme può essere un gruppo con un'operazione e non con un'altra. Le richieste per un gruppo sono tre, e una quarta è nascosta nella parola «operazione»: il risultato deve restare nell'insieme.

Gli esempi del libro, più le classi resto:

| Coppia | Che cos'è | Perché non di più |
|---|---|---|
| gli interi positivi con la somma | semigruppo | manca il neutro: 0 non è positivo |
| i sottoinsiemi di $X$ con l'unione | monoide | solo $\varnothing$ è invertibile |
| le funzioni da $X$ in $X$ con la composizione | monoide | le funzioni non biettive non hanno inversa |
| le parole su un alfabeto con la concatenazione | monoide | una parola non vuota non si accorcia concatenando |
| $(\mathbb{Z}, +)$, $(\mathbb{Q}, +)$, $(\mathbb{R}, +)$ | **gruppo** | |
| $(\mathbb{Z}, \cdot)$, $(\mathbb{Q}, \cdot)$, $(\mathbb{R}, \cdot)$ | monoide | 0 non è invertibile; in $\mathbb{Z}$ nemmeno 2 |
| $(S_n, \circ)$, le permutazioni | **gruppo** | |
| $(\mathbb{Z}_N, +)$ | **gruppo** | |
| $(\mathbb{Z}_N, \cdot)$ | monoide | $\overline{0}$ non è invertibile |

Le parole con la concatenazione sono le stringhe della [lezione 22 di Fondamenti](../FDA/22_funzioni_sequenze_stringhe.html): il neutro è la parola vuota. La concatenazione allunga, quindi da una parola non vuota non si torna mai alla vuota.

### Da un monoide a un gruppo: tenere solo gli invertibili

Un monoide che non è un gruppo ha elementi senza inverso. Buttandoli via e tenendo **solo gli elementi invertibili** si ottiene un gruppo: gli invertibili sono chiusi rispetto all'operazione (proposizione 2.35), il neutro è invertibile, e l'inverso di un invertibile è invertibile.

| Monoide | I suoi invertibili | Gruppo che ne viene |
|---|---|---|
| $(\mathbb{Q}, \cdot)$ | tutti tranne 0 | $\mathbb{Q}^\times$, il gruppo moltiplicativo dei razionali |
| $(\mathbb{R}, \cdot)$ | tutti tranne 0 | $\mathbb{R}^\times$ |
| $(\mathbb{Z}, \cdot)$ | 1 e −1 | $\mathbb{Z}^\times = \{1, -1\}$ |
| le funzioni da $\{1, \dots, n\}$ in sé | le biettive | $S_n$ |
| $(\mathbb{Z}_N, \cdot)$ | le classi coprime con $N$ | $\mathbb{Z}_N^\times$ |

L'ultima riga è la [D18](D18_invertibili_divisori_zero_eulero.html): ora si capisce perché il libro chiamava $\mathbb{Z}_N^\times$ «gruppo moltiplicativo». Il piccolo $\times$ in alto vuol dire sempre «gli invertibili rispetto al prodotto».

> [!METODO] Controllare che una coppia è un gruppo
> 1. **Operazione**: il risultato esiste sempre e resta nell'insieme.
> 2. **Associativa**. Spesso è ereditata da un'operazione già nota: somma o prodotto di numeri, composizione.
> 3. **Neutro**: di' chi è, e controlla che funzioni dai due lati.
> 4. **Inversi**: per ogni elemento di' chi è il suo inverso, e che sta nell'insieme.
>
> Per dire che **non** è un gruppo basta far cadere una richiesta, con un esempio.

> [!ESEMPIO] · Le classi non nulle di $\mathbb{Z}_5$ e di $\mathbb{Z}_6$, con il prodotto
> **$\mathbb{Z}_5$ senza $\overline{0}$.** La tabella:
>
> | $\cdot$ | 1 | 2 | 3 | 4 |
> |---|---|---|---|---|
> | **1** | 1 | 2 | 3 | 4 |
> | **2** | 2 | 4 | 1 | 3 |
> | **3** | 3 | 1 | 4 | 2 |
> | **4** | 4 | 3 | 2 | 1 |
>
> Nella tabella non compare mai 0: l'insieme è chiuso. L'associativa viene dal prodotto in $\mathbb{Z}_5$. Il neutro è 1. In ogni riga c'è un 1: gli inversi di 1, 2, 3, 4 sono 1, 3, 2, 4. **È un gruppo**, ed è $\mathbb{Z}_5^\times$.
>
> **$\mathbb{Z}_6$ senza $\overline{0}$.** $\overline{2} \cdot \overline{3} = \overline{0}$, che non sta nell'insieme. Cade la prima richiesta: **non è un gruppo**. Il gruppo è $\mathbb{Z}_6^\times = \{\overline{1}, \overline{5}\}$, con due soli elementi.

::: prova $(\mathbb{N}, +)$, i naturali con lo zero e la somma, è un semigruppo, un monoide o un gruppo?
Un monoide: la somma è associativa e 0 è il neutro. Non è un gruppo: l'opposto di 3 sarebbe −3, che non è un naturale. L'unico elemento invertibile è 0.
:::

> [!RICORDA]
> - Semigruppo: associativa. Monoide: più il neutro. Gruppo: più tutti gli inversi.
> - Un gruppo è una coppia: insieme e operazione.
> - Gli invertibili di un monoide formano un gruppo.
> - Quattro controlli: operazione, associativa, neutro, inversi.

## Gruppi commutativi e i due modi di scrivere

Nella definizione di gruppo la proprietà commutativa non c'è. Alcuni gruppi ce l'hanno, altri no.

> [!DEF] Gruppo commutativo (libro, nota 6.3)
> Un gruppo $(G, *)$ è **commutativo**, o **abeliano**, se $g * h = h * g$ per ogni $g$ e $h$ in $G$.

**Come si legge.** «Abeliano» viene dal matematico Niels Abel, e vuol dire la stessa cosa di commutativo. $(\mathbb{Z}, +)$, $(\mathbb{Z}_N, +)$ e $\mathbb{Z}_N^\times$ sono abeliani, perché somma e prodotto di numeri lo sono. $S_n$ per $n \ge 3$ non lo è: in $S_3$, componendo gli scambi $(1\,2)$ e $(1\,3)$ nei due ordini vengono due cicli diversi, $(1\,3\,2)$ e $(1\,2\,3)$.

Per mostrare che un gruppo **non** è commutativo basta una coppia di elementi che non commutano. Per mostrare che lo è serve un argomento valido per tutte le coppie.

Per i gruppi si usano due modi di scrivere (libro, nota 6.5). Sono solo notazioni: le regole sono le stesse.

| | Notazione moltiplicativa | Notazione additiva |
|---|---|---|
| Quando si usa | per un gruppo qualunque | solo per gruppi commutativi |
| Operazione | $g * h$, o $gh$: «prodotto» | $g + h$: «somma» |
| Neutro | $e$, o 1 | 0 |
| Inverso di $g$ | $g^{-1}$: «inverso» | $-g$: «opposto» |
| Ripetere $n$ volte | $g^n$: «potenza» | $n \cdot g$: «multiplo» |

In $(\mathbb{Z}_{12}, +)$ si scrive $3 \cdot \overline{5} = \overline{5} + \overline{5} + \overline{5} = \overline{3}$; in $\mathbb{Z}_{7}^\times$ si scrive $\overline{2}^3 = \overline{8} = \overline{1}$. Stessa idea, due scritture.

Le potenze seguono la regola che ci si aspetta (libro, definizione 2.32 e proposizione 2.33): $g^0 = e$, $g^{-n} = (g^{-1})^n$, e $g^{m+n} = g^m * g^n$ per esponenti interi qualunque.

Per dire «il gruppo $\mathbb{Z}$» o «il gruppo $S_n$» senza nominare l'operazione, si sottintende quella naturale: la somma per $\mathbb{Z}$ e $\mathbb{Z}_N$, il prodotto per gli insiemi con il $\times$ in alto, la composizione per $S_n$ (libro, nota 6.4).

::: prova Traduci in notazione additiva, per il gruppo $(\mathbb{Z}_{10}, +)$: «l'inverso di $g$», «$g^3$», «$g * h^{-1}$». Poi calcola le tre cose per $g = \overline{4}$ e $h = \overline{7}$.
«L'opposto $-g$», «$3 \cdot g$», «$g - h$». Con i numeri: $-\overline{4} = \overline{6}$; $3 \cdot \overline{4} = \overline{12} = \overline{2}$; $\overline{4} - \overline{7} = \overline{-3} = \overline{7}$.
:::

> [!RICORDA]
> - Commutativo, o abeliano: l'ordine non conta. Non è richiesto dalla definizione di gruppo.
> - $S_n$ non è commutativo per $n \ge 3$.
> - Notazione additiva solo per i gruppi commutativi: 0, $-g$, $n \cdot g$.

## Le prime proprietà dei gruppi

Il vantaggio della definizione astratta è che una proprietà dimostrata una volta vale per tutti i gruppi, qualunque cosa siano i loro elementi.

> [!PROP] Proprietà di ogni gruppo (libro, proposizione 6.6)
> In un gruppo $(G, *)$:
>
> 1. l'elemento neutro $e$ è **unico**;
> 2. ogni elemento $g$ ha un **unico** inverso $g^{-1}$;
> 3. per ogni $g$ e $h$: $(g * h)^{-1} = h^{-1} * g^{-1}$;
> 4. **legge di cancellazione**: se $g * h = g' * h$, oppure $h * g = h * g'$, allora $g = g'$.

**Come si legge.** Le prime tre sono le proposizioni 2.29, 2.31 e 2.35 delle sezioni precedenti: valevano già per un'operazione associativa con neutro. La quarta è nuova, e dice che in un gruppo si può «semplificare», a destra o a sinistra, come nelle equazioni tra numeri. In un gruppo ogni elemento è invertibile: per questo vale sempre.

> [!ESEMPIO] · La dimostrazione della legge di cancellazione
> Parto da $g * h = g' * h$ e moltiplico **a destra** i due membri per $h^{-1}$:
>
> $(g * h) * h^{-1} = (g' * h) * h^{-1}$
>
> Sposto le parentesi con l'associativa:
>
> $g * (h * h^{-1}) = g' * (h * h^{-1})$
>
> Dentro le parentesi c'è il neutro: $g * e = g' * e$, cioè $g = g'$.
>
> Per l'altra uguaglianza si moltiplica **a sinistra** per $h^{-1}$.

Nella dimostrazione il lato conta: $h^{-1}$ va messo dallo stesso lato in cui sta $h$. In un gruppo non commutativo da $g * h = h * g'$ non si può concludere $g = g'$.

La cancellazione spiega la differenza tra un gruppo e un monoide come $(\mathbb{Z}_{10}, \cdot)$. Lì $\overline{2} \cdot \overline{4} = \overline{7} \cdot \overline{4}$ con $\overline{2} \ne \overline{7}$: non si può semplificare, perché $\overline{4}$ non è invertibile.

> [!NOTA] Come si vede nella tabella
> Nella tabella dell'operazione di un gruppo finito, in ogni riga e in ogni colonna **ogni elemento compare una volta sola**. Se in una riga un elemento comparisse due volte, si avrebbe $g * h = g * h'$ con $h \ne h'$, contro la cancellazione. È un'aggiunta mia, utile come controllo: una tabella con una ripetizione in una riga non è la tabella di un gruppo. Guarda quella di $\mathbb{Z}_5^\times$ di prima.

::: prova In un gruppo, risolvi l'equazione $a * x = b$: quanto vale $x$? E per $x * a = b$?
Per la prima si moltiplica a sinistra per $a^{-1}$: $x = a^{-1} * b$. Per la seconda a destra: $x = b * a^{-1}$. In un gruppo non commutativo le due soluzioni possono essere diverse.
:::

> [!RICORDA]
> - In un gruppo: neutro unico, inverso unico.
> - $(g * h)^{-1} = h^{-1} * g^{-1}$.
> - Cancellazione: si semplifica, dallo stesso lato.
> - Ogni equazione $a * x = b$ ha una sola soluzione.

## Il gruppo prodotto

Da due gruppi se ne costruisce un terzo prendendo le coppie, e operando su ogni componente con l'operazione del suo gruppo.

> [!DEF] Gruppo prodotto (libro, p. 111)
> Dati due gruppi $(G_1, *)$ e $(G_2, \star)$, sul prodotto cartesiano $G_1 \times G_2$ si definisce l'operazione
>
> $$(g_1, g_2) \cdot (g_1', g_2') = (g_1 * g_1',\ g_2 \star g_2')$$
>
> Con questa operazione $G_1 \times G_2$ è un gruppo, il **gruppo prodotto**.

**Come si legge.** Si opera «componente per componente»: la prima con la prima, la seconda con la seconda, senza mescolarle. Le tre richieste si controllano una componente alla volta: l'associativa vale in ciascuna; il neutro è la coppia dei due neutri, $(e_1, e_2)$; l'inverso di $(g_1, g_2)$ è $(g_1^{-1}, g_2^{-1})$.

In $\mathbb{Z}_2 \times \mathbb{Z}_3$, con la somma in tutte e due le componenti: $(\overline{1}, \overline{2}) + (\overline{1}, \overline{2}) = (\overline{0}, \overline{1})$. Il neutro è $(\overline{0}, \overline{0})$, e l'opposto di $(\overline{1}, \overline{2})$ è $(\overline{1}, \overline{1})$. Il gruppo ha $2 \cdot 3 = 6$ elementi.

Se i due gruppi sono commutativi, lo è anche il prodotto. È il fatto usato nel problema d'esame qui sotto.

::: prova In $\mathbb{Z}_4 \times \mathbb{Z}_5^\times$, con la somma nella prima componente e il prodotto nella seconda, calcola $(\overline{3}, \overline{2}) \cdot (\overline{2}, \overline{4})$. Qual è il neutro?
$(\overline{3 + 2}, \overline{2 \cdot 4}) = (\overline{5}, \overline{8}) = (\overline{1}, \overline{3})$: la prima componente è modulo 4, la seconda modulo 5. Il neutro è $(\overline{0}, \overline{1})$.
:::

> [!RICORDA]
> - Gruppo prodotto: coppie, operazione componente per componente.
> - Neutro: la coppia dei neutri. Inverso: la coppia degli inversi.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $a * b$ | «a per b», «a star b» | il risultato di un'operazione qualunque | $a + b$, $a \cdot b$, $f \circ g$ |
| $(A, *)$ | «A con star» | un insieme con la sua operazione | $(\mathbb{Z}, +)$ |
| $e$ | «e» | l'elemento neutro | 0 per la somma, 1 per il prodotto |
| $a^{-1}$ | «a alla meno uno» | l'inverso di $a$ | in $\mathbb{Z}_7^\times$, $\overline{3}^{-1} = \overline{5}$ |
| $-g$, $n \cdot g$ | «meno g», «n per g» | inverso e ripetizione, in notazione additiva | in $\mathbb{Z}_{12}$, $3 \cdot \overline{5} = \overline{3}$ |
| $g^n$ | «g alla n» | $g$ operato con sé stesso $n$ volte | in $\mathbb{Z}_7^\times$, $\overline{2}^3 = \overline{1}$ |
| $\mathbb{Q}^\times$, $\mathbb{Z}_N^\times$ | «Q per», «Z N per» | gli elementi invertibili rispetto al prodotto | $\mathbb{Z}^\times = \{1, -1\}$ |
| $S_n$ | «S n» | il gruppo delle permutazioni di $n$ oggetti | $S_3$ ha 6 elementi |
| $G_1 \times G_2$ | «G uno per G due» | il gruppo prodotto | $\mathbb{Z}_2 \times \mathbb{Z}_3$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Le regole del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **Il linguaggio**: da qui in poi i testi d'esame dicono «il gruppo additivo $\mathbb{Z}_n$», «il gruppo moltiplicativo $\mathbb{Z}_n^\times$», «elemento neutro», «abeliano», «gruppo prodotto». Vanno riconosciuti al volo.
2. **Calcolare in un gruppo dato con una formula**: prodotti, potenze, inverso, e dire se è abeliano. Appello del 04/02/2025, problema 2.
3. **La regola dell'inverso di un prodotto** e la **cancellazione**, come passaggi dentro i problemi.
4. Le domande dei quiz sui gruppi riguardano quasi tutte periodi, generatori e sottogruppi: sono le prossime lezioni. Per questo nel quiz qui sotto le domande vere vengono dal problema, e le altre sono sul modello.

### Una domanda vera, letta insieme

**Appello del 04/02/2025, problema 2, versione A, punto a) e inizio del punto c).** «Si consideri l'insieme $X = \mathbb{Z}_5^\times \times \mathbb{Z}_5$, con l'operazione definita da $(a, b) * (c, d) = (ac, ad + b)$. Si dia per noto che $(X, *)$ è un gruppo con elemento neutro $(1, 0)$. Calcolare $(2, 3) * (1, 4)$, $(1, 4) * (2, 3)$, $(2, 3)^3$, $(2, 3)^{-1}$. Dire se $(X, *)$ è abeliano.»

**In pratica chiede:** di applicare la formula, facendo i conti modulo 5 in tutte e due le componenti. L'operazione **non** è quella del gruppo prodotto: la seconda componente mescola $a$, $d$ e $b$.

> [!ESEMPIO] · la soluzione, passo per passo
> **I due prodotti.**
>
> $(2, 3) * (1, 4) = (2 \cdot 1,\ 2 \cdot 4 + 3) = (2, 11) = (2, 1)$
>
> $(1, 4) * (2, 3) = (1 \cdot 2,\ 1 \cdot 3 + 4) = (2, 7) = (2, 2)$
>
> **È abeliano?** No: i due risultati sono diversi. Basta questa coppia.
>
> **Il cubo.** Prima il quadrato: $(2, 3) * (2, 3) = (4,\ 2 \cdot 3 + 3) = (4, 9) = (4, 4)$.
>
> Poi $(4, 4) * (2, 3) = (8,\ 4 \cdot 3 + 4) = (8, 16) = (3, 1)$.
>
> **L'inverso.** Cerco $(a, b)$ con $(2, 3) * (a, b) = (1, 0)$, cioè $(2a,\ 2b + 3) = (1, 0)$.
>
> Prima componente: $2a \equiv 1$, quindi $a = 3$, l'inversa di 2 in $\mathbb{Z}_5$.
>
> Seconda: $2b \equiv -3 \equiv 2$, quindi $b = 1$.
>
> L'inverso è $(3, 1)$. Controllo: $(2, 3) * (3, 1) = (6, 2 + 3) = (1, 0)$.
>
> Sono i risultati della soluzione ufficiale. Il cubo e l'inverso coincidono: vuol dire che $(2, 3)^4$ è il neutro.

La soluzione ufficiale finisce così il punto c): il gruppo prodotto $\mathbb{Z}_5^\times \times \mathbb{Z}_5$ è abeliano, perché prodotto di due gruppi abeliani, mentre $(X, *)$ non lo è. Stesso insieme, due operazioni, due gruppi diversi.

Ho controllato con un programma, su tutti i 20 elementi, che $(X, *)$ è davvero un gruppo: associativa, neutro $(1, 0)$, un inverso per ognuno.

### Errori da evitare

- Chiamare gruppo un insieme senza dire con quale operazione.
- Dimenticare di controllare che l'operazione non esca dall'insieme.
- Confondere commutativa e associativa.
- Scrivere $(g * h)^{-1} = g^{-1} * h^{-1}$ in un gruppo non commutativo.
- Semplificare da lati diversi.
- Usare la notazione additiva in un gruppo non commutativo.
- In un gruppo prodotto, ridurre le due componenti con lo stesso modulo.

## Quiz

```quiz
D: Appello del 04/02/2025, problema 2, versione A. In $X = \mathbb{Z}_5^\times \times \mathbb{Z}_5$ con $(a, b) * (c, d) = (ac, ad + b)$, quanto vale $(2, 3) * (1, 4)$?
+ $(2, 1)$
- $(2, 2)$
- $(2, 12)$
- $(3, 1)$
- $(2, 7)$
= $(2 \cdot 1,\ 2 \cdot 4 + 3) = (2, 11)$, e 11 modulo 5 fa 1. La risposta più insidiosa è $(2, 2)$: è il prodotto nell'altro ordine, e il gruppo non è commutativo.

D: Dallo stesso problema. Qual è l'inverso di $(2, 3)$ in $(X, *)$?
+ $(3, 1)$
- $(3, 2)$
- $(2, 3)$
- $(3, 3)$
- $(1, 0)$
= Serve $2a \equiv 1$ e $2b + 3 \equiv 0$ modulo 5: $a = 3$ e $b = 1$. La più insidiosa è $(3, 2)$: è la coppia degli inversi componente per componente, che andrebbe bene nel gruppo prodotto, non qui.

D: Quale di queste coppie è un gruppo?
+ $(\mathbb{Z}_6, +)$
- $(\mathbb{Z}_6, \cdot)$
- $(\mathbb{N}, +)$
- $(\mathbb{Z}, \cdot)$
- le classi non nulle di $\mathbb{Z}_6$, con il prodotto
= Con la somma ogni classe ha un'opposta. $(\mathbb{Z}_6, \cdot)$ e $(\mathbb{Z}, \cdot)$ sono monoidi con elementi non invertibili; $(\mathbb{N}, +)$ pure. La più insidiosa è «le classi non nulle di $\mathbb{Z}_6$, con il prodotto»: $\overline{2} \cdot \overline{3} = \overline{0}$ esce dall'insieme.

D: Che cosa distingue un monoide da un gruppo?
+ in un gruppo ogni elemento è invertibile
- in un gruppo l'operazione è commutativa
- in un monoide non c'è l'elemento neutro
- in un monoide l'operazione non è associativa
- un gruppo ha un numero finito di elementi
= Monoide: associativa e neutro. Gruppo: in più tutti gli inversi. La più insidiosa è «in un gruppo l'operazione è commutativa»: la commutativa non fa parte della definizione di gruppo.

D: In un gruppo qualunque, $(g * h)^{-1}$ è uguale a:
+ $h^{-1} * g^{-1}$
- $g^{-1} * h^{-1}$
- $g * h^{-1}$
- $(h * g)^{-1}$
- $h * g$
= Per disfare «prima $h$, poi $g$» si disfa prima $g$. La più insidiosa è $g^{-1} * h^{-1}$: coincide con quella giusta solo nei gruppi commutativi.

D: Quale di questi gruppi **non** è commutativo?
+ $S_3$
- $(\mathbb{Z}, +)$
- $\mathbb{Z}_{10}^\times$
- $(\mathbb{Z}_{12}, +)$
- $\mathbb{Z}_2 \times \mathbb{Z}_3$
= In $S_3$ due scambi diversi composti nei due ordini danno due cicli diversi. Gli altri sono fatti con somme e prodotti di numeri. La più insidiosa è $\mathbb{Z}_2 \times \mathbb{Z}_3$: un prodotto di gruppi commutativi è commutativo.

D: Quanti elementi ha il gruppo $\mathbb{Z}_{10}^\times$?
N: 4
= Le classi coprime con 10: 1, 3, 7, 9. È $\varphi(10)$.

D: In $(\mathbb{Z}_{12}, +)$, quanto vale $5 \cdot \overline{4}$, in notazione additiva? Scrivi il rappresentante canonico.
N: 8
= $\overline{4}$ sommato cinque volte: $20 = 12 + 8$.
```

## Esercizi

::: esercizio base Riscaldamento: è un'operazione?
Di' se è un'operazione sull'insieme indicato: (a) la sottrazione sui numeri pari; (b) il prodotto sui numeri dispari; (c) la somma sui numeri dispari; (d) $a * b = a^b$ sui naturali positivi.
::: soluzione
(a) Sì: pari meno pari è pari. (b) Sì: dispari per dispari è dispari. (c) No: dispari più dispari è pari. (d) Sì: una potenza di naturali positivi è un naturale positivo. Non è però né commutativa ($2^3 \ne 3^2$) né associativa.
:::

::: esercizio base Riscaldamento: neutro e inversi
Per $(\mathbb{Z}_8, +)$ scrivi il neutro e l'opposto di ogni elemento. Per $\mathbb{Z}_8^\times$ scrivi gli elementi, il neutro e l'inverso di ognuno.
::: soluzione
In $(\mathbb{Z}_8, +)$ il neutro è $\overline{0}$; gli opposti di 0, 1, 2, 3, 4, 5, 6, 7 sono 0, 7, 6, 5, 4, 3, 2, 1. $\mathbb{Z}_8^\times = \{\overline{1}, \overline{3}, \overline{5}, \overline{7}\}$, il neutro è $\overline{1}$, e ogni elemento è l'inverso di sé stesso: $9$, $25$ e $49$ sono congrui a 1 modulo 8.
:::

::: esercizio base Riscaldamento: semigruppo, monoide o gruppo
Classifica: (a) i sottoinsiemi di $\{1, 2, 3\}$ con l'intersezione; (b) $(\mathbb{Q}, +)$; (c) gli interi pari con la somma; (d) gli interi pari con il prodotto.
::: soluzione
(a) Monoide: il neutro è $\{1, 2, 3\}$, ed è l'unico invertibile. (b) Gruppo. (c) Gruppo: è chiuso, contiene 0 e l'opposto di un pari è pari. (d) Semigruppo: il neutro del prodotto sarebbe 1, che non è pari.
:::

::: esercizio base Riscaldamento: la tabella di un gruppo
Scrivi la tabella di $\mathbb{Z}_{10}^\times$ e controlla che in ogni riga ogni elemento compaia una volta.
::: soluzione
Righe, per 1, 3, 7, 9: `1 3 7 9`; `3 9 1 7`; `7 1 9 3`; `9 7 3 1`. Ogni riga contiene 1, 3, 7 e 9 una volta ciascuno.
:::

::: esercizio medio Un'operazione strana sugli interi
Su $\mathbb{Z}$ considera $a * b = a + b + 1$. Dimostra che $(\mathbb{Z}, *)$ è un gruppo commutativo, e di' chi sono il neutro e l'inverso di $a$.
::: soluzione
**Operazione**: il risultato è un intero. **Associativa**: $(a * b) * c = a + b + 1 + c + 1 = a + b + c + 2$, e $a * (b * c) = a + b + c + 1 + 1$: uguali. **Commutativa**: $a + b + 1 = b + a + 1$. **Neutro**: serve $a + e + 1 = a$, quindi $e = -1$. **Inverso**: serve $a + x + 1 = -1$, quindi $x = -a - 2$. Controllato con un programma su un campione di interi. Il neutro non è 0: dipende dall'operazione.
:::

::: esercizio medio Il gruppo prodotto, a mano
Elenca gli elementi di $\mathbb{Z}_2 \times \mathbb{Z}_3$ con la somma. Calcola $(\overline{1}, \overline{1}) + (\overline{1}, \overline{1})$ e l'opposto di $(\overline{1}, \overline{2})$.
::: soluzione
Sei elementi: $(0,0)$, $(0,1)$, $(0,2)$, $(1,0)$, $(1,1)$, $(1,2)$. $(1,1) + (1,1) = (0, 2)$: la prima componente è modulo 2. L'opposto di $(1,2)$ è $(1,1)$, perché $(1,2) + (1,1) = (2, 3) = (0, 0)$.
:::

::: esercizio esame Dallo stesso problema del 04/02/2025
Nel gruppo $(X, *)$ dell'appello, con $(a, b) * (c, d) = (ac, ad + b)$ modulo 5: (a) controlla che $(1, 0)$ è neutro da tutti e due i lati; (b) trova l'inverso di un elemento generico $(a, b)$; (c) calcola $(2, 3)^4$.
::: soluzione
**(a)** $(a, b) * (1, 0) = (a, a \cdot 0 + b) = (a, b)$ e $(1, 0) * (a, b) = (a, 1 \cdot b + 0) = (a, b)$. **(b)** Serve $(a, b) * (c, d) = (1, 0)$: $ac = 1$, quindi $c = a^{-1}$; e $ad + b = 0$, quindi $d = -a^{-1} b$. L'inverso è $(a^{-1}, -a^{-1}b)$. Per $(2, 3)$: $a^{-1} = 3$ e $-3 \cdot 3 = -9 \equiv 1$, cioè $(3, 1)$, come sopra. **(c)** $(2, 3)^4 = (2, 3)^3 * (2, 3) = (3, 1) * (2, 3) = (6, 3 \cdot 3 + 1) = (1, 10) = (1, 0)$: il neutro.
:::

::: esercizio difficile Un gruppo in cui ogni elemento è inverso di sé stesso
Dimostra che, se in un gruppo $G$ vale $g * g = e$ per ogni $g$, allora $G$ è commutativo.
::: soluzione
L'ipotesi dice che ogni elemento è l'inverso di sé stesso: $g^{-1} = g$. Prendo due elementi $g$ e $h$. Anche $g * h$ è un elemento del gruppo, quindi $(g * h)^{-1} = g * h$. Ma per la regola dell'inverso di un prodotto $(g * h)^{-1} = h^{-1} * g^{-1} = h * g$. Quindi $g * h = h * g$. Un esempio è $\mathbb{Z}_8^\times$, dove ogni elemento al quadrato dà 1.
:::

## Domande di ripasso

::: domanda Che cos'è un'operazione su un insieme?
Una funzione che a ogni coppia di elementi dell'insieme associa un elemento dello stesso insieme.
:::

::: domanda Che differenza c'è tra associativa e commutativa?
Associativa: non importa dove si mettono le parentesi. Commutativa: non importa l'ordine dei due elementi. Una non implica l'altra.
:::

::: domanda Perché l'elemento neutro è unico?
Se $e$ ed $e'$ sono neutri, $e * e'$ vale $e'$ perché $e$ è neutro e vale $e$ perché $e'$ è neutro.
:::

::: domanda Che cosa sono un semigruppo, un monoide e un gruppo?
Un insieme con un'operazione associativa; in più con il neutro; in più con tutti gli elementi invertibili.
:::

::: domanda Come si ottiene un gruppo da un monoide?
Tenendo solo gli elementi invertibili: così nascono $\mathbb{Q}^\times$, $\mathbb{Z}_N^\times$ e $S_n$.
:::

::: domanda Che cosa dice la legge di cancellazione, e perché vale in un gruppo?
Da $g * h = g' * h$ segue $g = g'$. Vale perché si può moltiplicare per l'inverso di $h$, che in un gruppo esiste sempre.
:::

::: domanda Com'è fatto il gruppo prodotto?
Gli elementi sono le coppie; si opera componente per componente; il neutro è la coppia dei neutri.
:::

## Glossario

```glossario
Operazione binaria | Funzione che a due elementi di un insieme ne associa un terzo dello stesso insieme.
Sottoinsieme chiuso | Sottoinsieme da cui non si esce operando tra i suoi elementi.
Associativa | Proprietà per cui le parentesi non contano.
Commutativa | Proprietà per cui l'ordine dei due elementi non conta.
Elemento neutro | Elemento che operato con qualunque altro lo lascia com'è.
Elemento invertibile | Elemento per cui ne esiste un altro che, operato con lui, dà il neutro.
Semigruppo | Insieme con un'operazione associativa.
Monoide | Semigruppo con elemento neutro.
Gruppo | Monoide in cui ogni elemento è invertibile.
Gruppo abeliano | Gruppo con operazione commutativa.
Legge di cancellazione | In un gruppo, da gh = g'h segue g = g'.
Gruppo prodotto | L'insieme delle coppie di due gruppi, con l'operazione componente per componente.
```

## Checklist

```checklist
- So dire che cos'è un'operazione e controllare se una regola lo è su un insieme dato.
- So dire che cosa vuol dire che un sottoinsieme è chiuso.
- So distinguere associativa e commutativa, con un esempio per ciascun caso.
- So dimostrare che il neutro è unico e che l'inverso è unico.
- So la regola dell'inverso di un prodotto.
- So le definizioni di semigruppo, monoide e gruppo, con un esempio per ognuno.
- So controllare in quattro passi che una coppia è un gruppo.
- So elencare i gruppi principali del corso e dire quali sono commutativi.
- So passare dalla notazione moltiplicativa a quella additiva.
- So dimostrare la legge di cancellazione.
- So calcolare nel gruppo prodotto.
- So fare prodotti, potenze e inversi in un gruppo dato con una formula.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta* (testo del canale B), cap. 2 «Funzioni», sezione «Operazioni», pp. 29–34: definizioni 2.26, 2.28, 2.30, 2.32 e 2.34, proposizioni 2.29, 2.31, 2.33 e 2.35, con gli esempi; cap. 6 «Gruppi», sezione «Definizione ed esempi», pp. 107–111: definizione 6.1, note 6.2–6.5 e 6.7, esempi, proposizione 6.6, gruppo prodotto.
- Diario delle lezioni del canale B 2025/26, lezione 19 (18/11/2025): «Insiemi con operazioni. Definizione di gruppo (commutativo). Esempi e prime proprietà».
- Appello di Matematica Discreta del 04/02/2025, problema 2, versione A, con la soluzione ufficiale.
- I conti degli esempi e degli esercizi sono ricontrollati con un programma.
