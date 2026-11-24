---
corso: MDAG
modulo: MD
lezione: D17
titolo: Congruenze e classi resto
data: 2026-11-16
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D17
descrizione: >-
  Appunti della lezione D17 di Matematica Discreta (MDAG, parte 1, canali A, B e C): la congruenza modulo N, le classi
  resto e l'insieme delle classi, i rappresentanti, somma e prodotto tra classi con la loro buona definizione, le
  proprietà delle due operazioni, il calcolo di resti, ultime cifre e potenze, con le domande d'esame dell'08/06/2026.
lede: >-
  Sull'orologio 10 più 5 fa 3: si conta in tondo, e dopo il 12 si ricomincia. La stessa aritmetica si può fare con
  qualunque numero al posto del 12. Due interi diventano «lo stesso» quando hanno lo stesso resto, e con i resti si
  fanno somme e prodotti come con i numeri.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 7, pp. 131–137 e 142–143
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 7 «Aritmetica modulare», sezioni «Classi resto e
  loro operazioni», pp. 131–137 (proposizione 7.1, definizione 7.3, proposizioni 7.4, 7.5, 7.9 e 7.10), e
  «Congruenze», pp. 142–143 (definizione 7.20, proposizione 7.21); diario delle lezioni del canale B 2025/26, lezione
  17; appello di Matematica Discreta dell'08/06/2026 e problemi 2023/24
appunti_html: appunti/MDAG/D17_congruenze_classi_resto.html
genera_html: true
---

## In breve

- Si fissa un intero almeno uguale a 2, il **modulo**. Due interi sono **congruenti** rispetto a quel modulo quando la loro differenza ne è un multiplo. È lo stesso che dire: divisi per il modulo danno lo stesso resto.
- La **classe resto** di un intero è l'insieme di tutti gli interi congruenti a lui. Le classi sono tante quante i resti possibili, e formano una partizione degli interi.
- $\mathbb{Z}_N$ è l'insieme delle classi modulo $N$. Ogni classe ha infiniti **rappresentanti**; quello canonico è il resto.
- Le classi si **sommano** e si **moltiplicano** usando un rappresentante qualunque: il risultato non dipende da quale si sceglie. Questo fatto si chiama **buona definizione**, e va dimostrato.
- Somma e prodotto tra classi hanno le proprietà di quelle tra interi: associativa, commutativa, distributiva, con la classe di 0 e la classe di 1 come elementi neutri.
- Nei conti si può **ridurre** ogni numero al suo resto in qualunque momento, prima di sommare o moltiplicare.
- L'**ultima cifra** di un numero è la sua classe modulo 10.
- Due cose non passano dalle classi: la divisione, che è l'argomento della prossima lezione, e l'esponente di una potenza, che non si può ridurre modulo $N$.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di lunedì 16/11/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la diciassettesima lezione era «Relazione di congruenza modulo N. Classi di congruenza (o classi resto). Operazioni tra classi resto e loro buona definizione». Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> **Dove sta nel libro.** Il docente salta dal capitolo 4 al capitolo 7, «Aritmetica modulare»: pp. 131–137, più la definizione di congruenza delle pp. 142–143. Il capitolo 6 sui gruppi viene dopo. Per questo lascio fuori le parti del capitolo 7 che usano i gruppi: la nota 7.2 sui laterali e le proposizioni 7.6, 7.7 e 7.8 sui gruppi ciclici e gli omomorfismi. Le riprendo quando serviranno.
>
> **L'ordine.** Il libro parte dalle classi resto e arriva alle congruenze alla fine; qui la congruenza viene prima, come nel titolo del diario, perché è l'idea più vicina ai conti.
>
> Servono la divisione euclidea della [D14](D14_interi_divisibilita_divisione_euclidea.html), e le relazioni di equivalenza con le loro classi della [D03](D03_prodotto_cartesiano_relazioni.html), dove la congruenza modulo $N$ era già comparsa come esempio.
>
> **Che cosa ho aggiunto.** La sezione finale sui conti (ultime cifre, potenze, criterio del 9) non è nel libro in questa forma: l'ho messa perché i quiz d'esame chiedono proprio quello.

## L'aritmetica dell'orologio

Sono le 10, e tra 5 ore saranno le 3. Sull'orologio $10 + 5 = 3$, e nessuno lo trova strano: le ore sono 12, e dopo il 12 si ricomincia. Per i minuti è lo stesso con 60: alle 8 e 45, tra 40 minuti saranno le 9 e 25, cioè $45 + 40 = 25$.

```grafico
titolo: Le ore sul quadrante. Partendo dal 10 e andando avanti di 5 si arriva al 3: si passa dal 12 e si ricomincia. In questa aritmetica il 12 vale come lo 0
x: -3.4 3.4
y: -3.2 3.2
assi: no
griglia: no
cerchio: 0 0 2 | grigio
punto: 0 2 | grigio
punto: 1 1.73 | grigio
punto: 1.73 1 | grigio
punto: 2 0 | verde
punto: 1.73 -1 | grigio
punto: 1 -1.73 | grigio
punto: 0 -2 | grigio
punto: -1 -1.73 | grigio
punto: -1.73 -1 | grigio
punto: -2 0 | grigio
punto: -1.73 1 | blu
punto: -1 1.73 | grigio
testo: 0 2.5 | grigio | "12"
testo: 1.25 2.17 | grigio | "1"
testo: 2.17 1.25 | grigio | "2"
testo: 2.55 0 | verde | "3"
testo: 2.17 -1.25 | grigio | "4"
testo: 1.25 -2.17 | grigio | "5"
testo: 0 -2.5 | grigio | "6"
testo: -1.25 -2.17 | grigio | "7"
testo: -2.17 -1.25 | grigio | "8"
testo: -2.5 0 | grigio | "9"
testo: -2.25 1.3 | blu | "10"
testo: -1.25 2.17 | grigio | "11"
freccia: -1.5 0.9 1.7 0.1 | ambra
testo: 0.1 0.95 | ambra | "+ 5"
```

Quelle uguaglianze diventano vere se si decide che 12, o 60, «vale come 0». Il conto è $10 + 5 = 15$, e 15 e 3 indicano la stessa posizione sul quadrante perché differiscono di 12.

La lezione fa questo con un numero qualunque al posto di 12, e con tutti gli interi, anche negativi, al posto delle ore. Due numeri contano come lo stesso quando differiscono di un multiplo del numero scelto.

::: prova Sono le 9. Che ore saranno tra 50 ore?
$9 + 50 = 59$, e $59 = 4 \cdot 12 + 11$: saranno le 11. Si può anche ridurre prima il 50: $50 = 4 \cdot 12 + 2$, quindi basta andare avanti di 2 ore.
:::

> [!RICORDA]
> - Sull'orologio si conta a meno di multipli di 12.
> - Due numeri indicano la stessa posizione quando differiscono di un multiplo di 12.

## La congruenza modulo N

Si fissa un intero, almeno uguale a 2, che si chiama **modulo**. Lo indico con $N$. Con $N = 5$: i numeri 2, 7, 12, 17 e −3 distano l'uno dall'altro di multipli di 5, e divisi per 5 danno tutti resto 2.

> [!DEF] Congruenza modulo N (libro, definizione 7.20)
> Fissato un intero $N \ge 2$, due interi $a$ e $b$ sono **congruenti modulo $N$** se $N$ divide $a - b$. Si scrive
>
> $$a \equiv b \pmod N$$

**Come si legge.** «$a$ è congruo a $b$ modulo $N$»: $a$ e $b$ differiscono di un multiplo di $N$, cioè $a = b + kN$ per qualche intero $k$. Il simbolo $\equiv$ è un uguale con una riga in più: dice «uguali, per quello che interessa qui». Per esempio $17 \equiv 2 \pmod 5$, perché $17 - 2 = 15$; e $17 \not\equiv 3 \pmod 5$, perché 14 non è multiplo di 5.

C'è un secondo modo di dire la stessa cosa, ed è quello che si usa nei conti.

> [!PROP] Congruenti vuol dire stesso resto (libro, p. 132)
> Due interi sono congruenti modulo $N$ se e solo se, divisi per $N$, danno lo stesso resto.

**Come si legge.** Ogni intero è congruo al proprio resto, e a nessun altro numero tra 0 e $N - 1$. Per sapere se due numeri sono congruenti si possono confrontare i resti, oppure guardare la differenza: si sceglie il più comodo.

> [!DIM]- Perché vale
> **Se hanno lo stesso resto.** Per la divisione euclidea $a = qN + r$ e $b = q'N + r$. Sottraendo: $a - b = (q - q')N$, un multiplo di $N$.
>
> **Se $N$ divide la differenza.** Allora $a = b + kN$. Divido $b$ per $N$: $b = qN + r$, con $0 \le r < N$. Sostituendo, $a = (k + q)N + r$. Questa è una divisione di $a$ per $N$ con resto $r$, e per l'unicità della divisione euclidea ([D14](D14_interi_divisibilita_divisione_euclidea.html)) il resto di $a$ è proprio $r$.

Con i negativi bisogna ricordare che il resto è sempre tra 0 e $N - 1$. Per $-17$ diviso 5: $-17 = (-4) \cdot 5 + 3$, quindi il resto è 3 e $-17 \equiv 3 \pmod 5$. Controllo con la differenza: $-17 - 3 = -20$, multiplo di 5.

La congruenza modulo $N$ è una **relazione di equivalenza**, come si è visto nella [D03](D03_prodotto_cartesiano_relazioni.html): ogni numero è congruo a sé stesso; se $a \equiv b$ allora $b \equiv a$; se $a \equiv b$ e $b \equiv c$ allora $a \equiv c$. Con il «stesso resto» le tre proprietà si vedono da sole.

::: prova Vero o falso: (a) $38 \equiv 2 \pmod{12}$; (b) $100 \equiv 1 \pmod 9$; (c) $-1 \equiv 11 \pmod{12}$; (d) $25 \equiv 4 \pmod 6$.
(a) Vero: $38 - 2 = 36$. (b) Vero: $99 = 9 \cdot 11$. (c) Vero: $-1 - 11 = -12$. (d) Falso: $25 - 4 = 21$ non è multiplo di 6; il resto di 25 è 1.
:::

> [!RICORDA]
> - $a \equiv b \pmod N$: $N$ divide $a - b$.
> - È lo stesso che avere lo stesso resto nella divisione per $N$.
> - Il resto di un negativo è comunque tra 0 e $N - 1$.

## Le classi resto

Mettendo insieme tutti i numeri congruenti tra loro, gli interi si dividono in gruppi. Con $N = 3$ i gruppi sono tre:

```grafico
titolo: Gli interi da −4 a 10 colorati secondo il resto della divisione per 3. Ogni colore è una classe: i suoi numeri distano di 3 l'uno dall'altro. Ogni intero ha un colore, e uno solo
x: -5 11
y: 0 3.4
assi: no
griglia: no
proporzioni: libere
segmento: -4.6 1.5 10.6 1.5 | grigio | sottile
punto: -3 1.5 | blu
punto: 0 1.5 | blu
punto: 3 1.5 | blu
punto: 6 1.5 | blu
punto: 9 1.5 | blu
punto: -2 1.5 | verde
punto: 1 1.5 | verde
punto: 4 1.5 | verde
punto: 7 1.5 | verde
punto: 10 1.5 | verde
punto: -4 1.5 | ambra
punto: -1 1.5 | ambra
punto: 2 1.5 | ambra
punto: 5 1.5 | ambra
punto: 8 1.5 | ambra
testo: -3 0.9 | blu | "−3"
testo: 0 0.9 | blu | "0"
testo: 3 0.9 | blu | "3"
testo: 6 0.9 | blu | "6"
testo: 9 0.9 | blu | "9"
testo: -2 2.1 | verde | "−2"
testo: 1 2.1 | verde | "1"
testo: 4 2.1 | verde | "4"
testo: 7 2.1 | verde | "7"
testo: 10 2.1 | verde | "10"
testo: -4 0.9 | ambra | "−4"
testo: -1 0.9 | ambra | "−1"
testo: 2 0.9 | ambra | "2"
testo: 5 0.9 | ambra | "5"
testo: 8 0.9 | ambra | "8"
testo: -2 3.0 | blu | "resto 0"
testo: 3 3.0 | verde | "resto 1"
testo: 8 3.0 | ambra | "resto 2"
```

> [!DEF] Classe resto (libro, p. 131)
> Fissato il modulo $N \ge 2$, per ogni $r$ tra 0 e $N - 1$ la **classe resto** di $r$ modulo $N$ è l'insieme
>
> $$[r]_N = \{\, n \in \mathbb{Z} : \text{la divisione di } n \text{ per } N \text{ ha resto } r \,\}$$

**Come si legge.** $[r]_N$ è un insieme di numeri, infinito: tutti quelli con resto $r$. Si ottengono partendo da $r$ e aggiungendo o togliendo $N$ quante volte si vuole. Per esempio, dal libro:

$$[3]_7 = \{\dots, -18, -11, -4, 3, 10, 17, 24, \dots\}$$

La classe di 0 è fatta dei multipli di $N$: $[0]_N = \{\dots, -2N, -N, 0, N, 2N, \dots\}$.

> [!PROP] Le classi resto sono una partizione (libro, proposizione 7.1)
> Fissato $N \ge 2$, le classi resto $[0]_N, [1]_N, \dots, [N-1]_N$ formano una partizione di $\mathbb{Z}$.

**Come si legge.** Partizione, come nella [D02](D02_complementare_induzione_partizioni.html): nessuna classe è vuota, ogni intero sta in una classe, e due classi diverse non hanno elementi in comune. Ogni intero sta nella classe del suo resto, e il resto è uno solo. Con $N = 2$ la partizione è quella nota: i pari e i dispari.

L'insieme delle classi ha un nome.

> [!DEF] L'insieme delle classi resto
> $\mathbb{Z}_N$ è l'insieme delle classi resto modulo $N$:
>
> $$\mathbb{Z}_N = \{[0]_N, [1]_N, \dots, [N-1]_N\}$$

**Come si legge.** $\mathbb{Z}_N$ ha esattamente $N$ elementi, e ogni elemento è una classe, cioè un insieme infinito di interi. $\mathbb{Z}_2$ ha due elementi, $\mathbb{Z}_3$ tre, $\mathbb{Z}_{12}$ dodici: le posizioni del quadrante. È l'insieme quoziente della [D03](D03_prodotto_cartesiano_relazioni.html) per la relazione di congruenza.

### I rappresentanti

Una classe si può indicare con **uno qualunque** dei suoi elementi, non solo con il resto. Si scrive $[a]_N$ per la classe che contiene $a$, e $a$ è un **rappresentante** della classe. La stessa classe ha infiniti nomi:

$$\dots = [-3]_{11} = [8]_{11} = [19]_{11} = [107]_{11} = \dots$$

I quattro numeri hanno tutti resto 8 nella divisione per 11. Il collegamento con la congruenza è questo:

$$[a]_N = [b]_N \quad \text{se e solo se} \quad a \equiv b \pmod N$$

Tra i rappresentanti ce n'è uno speciale, quello tra 0 e $N - 1$: è il resto, e nei testi d'esame si chiama **rappresentante canonico**. «Calcolare il rappresentante canonico di $[107]_{11}$» vuol dire trovare il resto di 107 diviso 11, che è 8.

Quando il modulo è chiaro si scrive $\overline{a}$ al posto di $[a]_N$: in $\mathbb{Z}_{11}$, $\overline{19} = \overline{8}$.

> [!TRAPPOLA] Stessa classe, numeri diversi
> $\overline{19} = \overline{8}$ in $\mathbb{Z}_{11}$ è un'uguaglianza tra **classi**, cioè tra insiemi. I numeri 19 e 8 restano diversi. Scrivere $19 = 8$ è sbagliato; si scrive $\overline{19} = \overline{8}$ oppure $19 \equiv 8 \pmod{11}$.

::: prova Scrivi il rappresentante canonico di $[2026]_7$, di $[-17]_5$ e di $[-1]_{12}$.
$2026 = 289 \cdot 7 + 3$: è 3. $-17 = -4 \cdot 5 + 3$: è 3. $-1 = -1 \cdot 12 + 11$: è 11.
:::

> [!RICORDA]
> - $[a]_N$: tutti gli interi congruenti ad $a$ modulo $N$.
> - $\mathbb{Z}_N$ ha $N$ elementi: le classi dei resti da 0 a $N - 1$.
> - $[a]_N = [b]_N$ se e solo se $a \equiv b \pmod N$.
> - Rappresentante canonico: il resto.

## Somma e prodotto tra classi

Sull'orologio si sommano le ore sommando i numeri e poi riducendo. Per le classi si fa lo stesso: si prende un rappresentante per ciascuna, si fa l'operazione tra interi, e si prende la classe del risultato.

> [!DEF] Addizione e moltiplicazione in $\mathbb{Z}_N$ (libro, definizione 7.3)
> Per ogni $\overline{a}$ e $\overline{b}$ in $\mathbb{Z}_N$:
>
> $$\overline{a} + \overline{b} = \overline{a + b} \qquad\qquad \overline{a} \cdot \overline{b} = \overline{a \cdot b}$$

**Come si legge.** A sinistra i simboli $+$ e $\cdot$ sono le operazioni nuove, tra classi; a destra, sotto la barra, sono le solite operazioni tra interi. In $\mathbb{Z}_7$: $\overline{3} + \overline{5} = \overline{8} = \overline{1}$ e $\overline{3} \cdot \overline{5} = \overline{15} = \overline{1}$.

Siccome le classi sono poche, le due operazioni si possono scrivere per intero in una tabella. Per $\mathbb{Z}_5$, senza le barre:

| $+$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| **0** | 0 | 1 | 2 | 3 | 4 |
| **1** | 1 | 2 | 3 | 4 | 0 |
| **2** | 2 | 3 | 4 | 0 | 1 |
| **3** | 3 | 4 | 0 | 1 | 2 |
| **4** | 4 | 0 | 1 | 2 | 3 |

| $\cdot$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| **0** | 0 | 0 | 0 | 0 | 0 |
| **1** | 0 | 1 | 2 | 3 | 4 |
| **2** | 0 | 2 | 4 | 1 | 3 |
| **3** | 0 | 3 | 1 | 4 | 2 |
| **4** | 0 | 4 | 3 | 2 | 1 |

Nella tabella della somma ogni riga è la precedente spostata di un posto: è l'orologio con 5 ore. Quella del prodotto si legge allo stesso modo: $\overline{3} \cdot \overline{4} = \overline{12} = \overline{2}$.

::: prova In $\mathbb{Z}_6$ calcola $\overline{4} + \overline{5}$, $\overline{4} \cdot \overline{5}$ e $\overline{2} \cdot \overline{3}$.
$\overline{9} = \overline{3}$; $\overline{20} = \overline{2}$; $\overline{6} = \overline{0}$. Nell'ultimo conto il prodotto di due classi diverse da zero dà zero: tra interi non succede mai, ed è l'argomento della prossima lezione.
:::

> [!RICORDA]
> - Si opera sui rappresentanti, poi si prende la classe.
> - $\mathbb{Z}_N$ è finito: le operazioni stanno in una tabella.

## La buona definizione

La definizione di prima nasconde un problema. La classe $\overline{3}$ di $\mathbb{Z}_7$ si chiama anche $\overline{10}$ e $\overline{17}$; la classe $\overline{5}$ si chiama anche $\overline{12}$ e $\overline{-2}$. Se scegliendo altri nomi venisse un altro risultato, la «somma di due classi» non sarebbe una cosa sola, e la definizione non definirebbe niente.

Si prova:

| Rappresentanti scelti | Somma | Prodotto |
|---|---|---|
| 3 e 5 | $8 \equiv 1$ | $15 \equiv 1$ |
| 10 e 12 | $22 \equiv 1$ | $120 \equiv 1$ |
| 17 e −2 | $15 \equiv 1$ | $-34 \equiv 1$ |

Viene sempre la stessa classe. Non è un caso.

> [!PROP] Le operazioni sono ben definite (libro, proposizione 7.4)
> In $\mathbb{Z}_N$ il risultato di $\overline{a} + \overline{b}$ e di $\overline{a} \cdot \overline{b}$ non dipende dai rappresentanti scelti: se $\overline{a} = \overline{a'}$ e $\overline{b} = \overline{b'}$, allora $\overline{a + b} = \overline{a' + b'}$ e $\overline{a \cdot b} = \overline{a' \cdot b'}$.

**Come si legge.** Cambiare rappresentante vuol dire aggiungere un multiplo di $N$. La proposizione dice che, sommando o moltiplicando, quei multipli in più producono solo altri multipli di $N$, che dentro una classe non contano.

> [!ESEMPIO] · La dimostrazione
> Altri rappresentanti delle stesse classi si scrivono $a' = a + kN$ e $b' = b + k'N$, con $k$ e $k'$ interi.
>
> **Somma.** $a' + b' = a + b + (k + k')N$. La differenza da $a + b$ è un multiplo di $N$: stessa classe.
>
> **Prodotto.** $a' \cdot b' = (a + kN)(b + k'N) = ab + (ak' + bk + kk'N)N$. Anche qui la differenza da $ab$ è un multiplo di $N$: stessa classe.

La domanda «è ben definita?» va fatta ogni volta che si definisce qualcosa su una classe usando un suo rappresentante. Non sempre la risposta è sì.

> [!TRAPPOLA] L'esponente non si riduce
> Viene da pensare che anche nelle potenze si possa ridurre tutto. La base sì, l'esponente no. In $\mathbb{Z}_5$ gli esponenti 3 e 8 sono congruenti, ma $2^3 = 8 \equiv 3$ e $2^8 = 256 \equiv 1$. «$\overline{2}$ elevato alla classe $\overline{3}$» non è ben definito. L'esponente di una potenza conta quante volte si moltiplica: è un intero vero, non una classe modulo $N$.

::: prova Controlla la buona definizione su un caso: in $\mathbb{Z}_5$ calcola $\overline{37} + \overline{48}$ e $\overline{37} \cdot \overline{48}$ in due modi, con i numeri dati e con i rappresentanti canonici.
Con i numeri dati: $85 \equiv 0$ e $1776 \equiv 1$. I canonici sono 2 e 3: $2 + 3 = 5 \equiv 0$ e $2 \cdot 3 = 6 \equiv 1$. Stessi risultati, con conti molto più corti.
:::

> [!RICORDA]
> - Ben definita: il risultato non dipende dal rappresentante scelto.
> - Per somma e prodotto è vero, e si dimostra scrivendo $a' = a + kN$.
> - Per l'esponente di una potenza è falso.

## Le proprietà delle due operazioni

Le operazioni tra classi sono costruite su quelle tra interi, e ne ereditano le proprietà.

> [!PROP] Proprietà di somma e prodotto in $\mathbb{Z}_N$ (libro, proposizioni 7.5, 7.9 e 7.10)
> In $\mathbb{Z}_N$:
>
> - l'**addizione** è associativa e commutativa, $\overline{0}$ è il suo elemento neutro, e ogni classe $\overline{a}$ ha un'**opposta**, che è $\overline{-a}$;
> - la **moltiplicazione** è associativa e commutativa, e $\overline{1}$ è il suo elemento neutro;
> - vale la proprietà **distributiva**: $\overline{a} \cdot (\overline{b} + \overline{c}) = \overline{a} \cdot \overline{b} + \overline{a} \cdot \overline{c}$.

**Come si legge.** Si calcola come con i numeri: si possono spostare le parentesi, scambiare gli addendi e i fattori, raccogliere. Ogni proprietà si dimostra portando tutto sotto una sola barra e usando la stessa proprietà degli interi; per esempio $\overline{a} + \overline{b} = \overline{a + b} = \overline{b + a} = \overline{b} + \overline{a}$.

L'opposta di una classe si trova sottraendo da $N$: in $\mathbb{Z}_{12}$ l'opposta di $\overline{5}$ è $\overline{-5} = \overline{7}$, e infatti $5 + 7 = 12 \equiv 0$.

Nell'elenco c'è una riga in meno per la moltiplicazione: **non si parla di inversi**. L'opposta c'è sempre; l'inversa, cioè una classe che moltiplicata per $\overline{a}$ dia $\overline{1}$, a volte c'è e a volte no. Dalle tabelle di $\mathbb{Z}_5$ e dal «Prova tu» su $\mathbb{Z}_6$ si vedono già tre fatti che tra gli interi non esistono:

- una classe diversa da zero può **non avere inversa**: in $\mathbb{Z}_6$ nessuna classe moltiplicata per $\overline{2}$ dà $\overline{1}$;
- il prodotto di due classi diverse da zero **può essere zero**: $\overline{2} \cdot \overline{3} = \overline{0}$ in $\mathbb{Z}_6$;
- **non si può semplificare**: in $\mathbb{Z}_6$, $\overline{2} \cdot \overline{1} = \overline{2} \cdot \overline{4}$, ma $\overline{1} \ne \overline{4}$.

In $\mathbb{Z}_5$ invece non succede niente di tutto questo. Capire per quali moduli e per quali classi succede è il contenuto della prossima lezione.

Le stesse proprietà, scritte con le congruenze:

> [!PROP] Le regole delle congruenze (libro, proposizione 7.21)
> Fissato $N \ge 2$, per interi qualunque:
>
> 1. se $a \equiv b$ allora $b \equiv a$;
> 2. se $a \equiv b$ e $b \equiv c$ allora $a \equiv c$;
> 3. se $a \equiv b$ e $c \equiv d$ allora $a + c \equiv b + d$ e $ac \equiv bd$.
>
> Tutte le congruenze sono modulo $N$.

**Come si legge.** La terza è la buona definizione detta in un altro modo: due congruenze con lo stesso modulo si possono sommare e moltiplicare membro a membro, come le uguaglianze. Applicandola più volte: se $a \equiv b$, allora $a^k \equiv b^k$ per ogni esponente $k \ge 1$. La base si può sostituire con un numero congruo; l'esponente resta quello.

::: prova In $\mathbb{Z}_{10}$ trova l'opposta di $\overline{3}$. Poi cerca nella riga del 3, facendo i prodotti $3 \cdot 1, 3 \cdot 2, \dots$, una classe che moltiplicata per $\overline{3}$ dia $\overline{1}$.
L'opposta è $\overline{7}$: $3 + 7 = 10 \equiv 0$. Per il prodotto: $3 \cdot 7 = 21 \equiv 1$, quindi la classe cercata è ancora $\overline{7}$. In questo caso l'inversa esiste.
:::

> [!RICORDA]
> - Somma e prodotto tra classi: associative, commutative, distributive.
> - Neutri: $\overline{0}$ per la somma, $\overline{1}$ per il prodotto.
> - L'opposta c'è sempre: $\overline{-a}$. L'inversa non sempre.
> - Le congruenze si sommano e si moltiplicano membro a membro.

## Calcolare con le classi

La buona definizione dà una regola pratica: in un conto modulo $N$ ogni numero si può sostituire con il suo resto, **in qualunque momento**, e il risultato non cambia. I numeri restano piccoli.

> [!METODO] Il resto di un'espressione
> 1. Sostituisci ogni numero con il suo rappresentante canonico, o con un rappresentante comodo, anche negativo.
> 2. Fai somme e prodotti, riducendo di nuovo appena i numeri crescono.
> 3. Nelle potenze riduci la **base**, mai l'esponente.
> 4. Alla fine porta il risultato tra 0 e $N - 1$.

> [!ESEMPIO] · Il resto di $123 \cdot 456 + 789$ diviso 7
> $123 = 17 \cdot 7 + 4$, $456 = 65 \cdot 7 + 1$, $789 = 112 \cdot 7 + 5$.
>
> $123 \cdot 456 + 789 \equiv 4 \cdot 1 + 5 = 9 \equiv 2 \pmod 7$.
>
> Il resto è 2, senza aver calcolato il prodotto.

**L'ultima cifra.** L'ultima cifra di un intero positivo è il suo resto nella divisione per 10, cioè la sua classe in $\mathbb{Z}_{10}$. Per l'ultima cifra di una somma o di un prodotto bastano le ultime cifre dei termini.

**Le potenze.** Le potenze di una classe prima o poi si ripetono, perché le classi sono finite. Per l'ultima cifra di $3^{2026}$ si guardano le potenze di 3 modulo 10:

| $k$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $3^k$ modulo 10 | 3 | 9 | 7 | 1 | 3 |

Da $3^4 \equiv 1$ in poi tutto si ripete ogni 4 passi. Divido l'esponente per 4: $2026 = 4 \cdot 506 + 2$. Allora $3^{2026} = (3^4)^{506} \cdot 3^2 \equiv 1 \cdot 9 = 9$. L'ultima cifra è 9. Qui l'esponente è stato ridotto, ma **modulo 4**, la lunghezza del ciclo, non modulo 10. Quanto è lungo il ciclo in generale lo dirà il teorema di Eulero, tra qualche lezione.

**Un rappresentante negativo** a volte accorcia i conti: modulo 10, $9 \equiv -1$, quindi $9^{100} \equiv (-1)^{100} = 1$.

> [!OLTRE]- Il criterio di divisibilità per 9
> Siccome $10 \equiv 1 \pmod 9$, anche ogni potenza di 10 è congrua a 1. Un numero scritto in base 10 è una somma di cifre moltiplicate per potenze di 10, quindi modulo 9 è congruo alla **somma delle sue cifre**: $5823 \equiv 5 + 8 + 2 + 3 = 18 \equiv 0$. Per questo un numero è divisibile per 9 quando lo è la somma delle cifre. Per 3 vale lo stesso, perché $10 \equiv 1$ anche modulo 3.

::: prova Qual è l'ultima cifra di $7^{2026}$?
Le potenze di 7 modulo 10 sono 7, 9, 3, 1, e poi si ripetono ogni 4. $2026 = 4 \cdot 506 + 2$, quindi $7^{2026} \equiv 7^2 = 49 \equiv 9$. L'ultima cifra è 9.
:::

> [!RICORDA]
> - Si riduce ogni numero al resto prima di operare.
> - Ultima cifra: la classe modulo 10.
> - Potenze: si cerca dove la potenza torna a 1, e si divide l'esponente per quella lunghezza.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $a \equiv b \pmod N$ | «a congruo a b modulo N» | $N$ divide $a - b$ | $17 \equiv 2 \pmod 5$ |
| $[a]_N$ | «la classe di a modulo N» | tutti gli interi congruenti ad $a$ | $[3]_7 \ni 10$ |
| $\overline{a}$ | «a barra» | la stessa classe, a modulo sottinteso | in $\mathbb{Z}_{11}$, $\overline{19} = \overline{8}$ |
| $\mathbb{Z}_N$ | «Z con N» | l'insieme delle $N$ classi resto | $\mathbb{Z}_3 = \{\overline{0}, \overline{1}, \overline{2}\}$ |
| $\overline{a} + \overline{b}$ | «a barra più b barra» | $\overline{a + b}$ | in $\mathbb{Z}_7$, $\overline{3} + \overline{5} = \overline{1}$ |
| $\overline{a} \cdot \overline{b}$ | «a barra per b barra» | $\overline{a \cdot b}$ | in $\mathbb{Z}_7$, $\overline{3} \cdot \overline{5} = \overline{1}$ |
| $\overline{-a}$ | «meno a, barra» | l'opposta della classe di $a$ | in $\mathbb{Z}_{12}$, $\overline{-5} = \overline{7}$ |
| $n!$ | «n fattoriale» | $1 \cdot 2 \cdots n$ | $5! = 120$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Le regole del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **Ridurre modulo $N$** è dentro quasi tutti gli esercizi della seconda metà del corso: inversi, congruenze da risolvere, potenze, gruppi di classi.
2. **Ultime cifre e resti di somme**: quiz dell'08/06/2026, domanda 7, in quattro versioni.
3. **I rappresentanti canonici**: problema 2 degli appelli 2023/24.
4. La **dimostrazione della buona definizione** negli appelli 2021–2026 non è stata chiesta; il problema della buona definizione torna però nei problemi sugli omomorfismi tra gruppi di classi.

### Una domanda vera, letta insieme

**Appello dell'08/06/2026, quiz, domanda 7 (prima versione).** «L'ultima cifra del numero $2! + 3! + 22! + 2026!$ è: 0; 4; 2; 8; 7.»

**In pratica chiede:** la classe di quella somma in $\mathbb{Z}_{10}$. I due fattoriali grandi non si calcolano: basta sapere quanto valgono modulo 10.

> [!ESEMPIO] · la soluzione, passo per passo
> **I fattoriali piccoli.** $2! = 2$ e $3! = 6$.
>
> **I fattoriali grandi.** $5! = 120$ finisce per 0, perché tra i suoi fattori ci sono 2 e 5. Ogni fattoriale più grande contiene $5!$ come fattore: $n! = 5! \cdot 6 \cdot 7 \cdots n$. Quindi per ogni $n \ge 5$ vale $n! \equiv 0 \pmod{10}$. In particolare $22! \equiv 0$ e $2026! \equiv 0$.
>
> **La somma.** $2 + 6 + 0 + 0 = 8$.
>
> L'ultima cifra è **8**, che è la risposta segnata come giusta nel foglio delle soluzioni.

Le altre tre versioni si fanno allo stesso modo, ricordando che $1! = 1$ e $4! = 24 \equiv 4$: $1! + 3! + 27! + 2026!$ finisce per 7; $1! + 4! + 26! + 2026!$ finisce per 5; $2! + 4! + 29! + 2026!$ finisce per 6.

### Errori da evitare

- Scrivere $=$ tra numeri al posto di $\equiv$, o dimenticare il modulo.
- Dare un resto negativo, o un resto maggiore o uguale a $N$.
- Ridurre l'esponente di una potenza modulo $N$.
- Semplificare un fattore in una congruenza come in un'uguaglianza.
- Sommare congruenze con moduli diversi.

## Quiz

```quiz
D: Appello dell'08/06/2026, quiz, domanda 7 (seconda versione). L'ultima cifra del numero $1! + 3! + 27! + 2026!$ è:
+ 7
- 0
- 5
- 1
- 8
= $1 + 6 = 7$, e i due fattoriali grandi finiscono per 0 perché contengono i fattori 2 e 5. La risposta più insidiosa è 0: è l'ultima cifra dei due addendi grandi, non della somma.

D: Appello dell'08/06/2026, quiz, domanda 7 (terza versione). L'ultima cifra del numero $1! + 4! + 26! + 2026!$ è:
+ 5
- 0
- 8
- 7
- 1
= $1 + 24 = 25$, che finisce per 5; gli altri due addendi finiscono per 0. La risposta più insidiosa è 7: viene sommando 1 e 6, cioè usando $3!$ al posto di $4!$.

D: Problemi 2023/24, problema 2, punto b), con $N = 1147$ e $M = 5$. Il rappresentante canonico della classe $[N - 1]_M$ è:
+ 1
- 2
- 0
- 4
- 1146
= $1146 = 229 \cdot 5 + 1$. La risposta più insidiosa è 1146: è un rappresentante della classe, ma quello canonico sta tra 0 e 4.

D: Dallo stesso problema. Il rappresentante canonico della classe $[M^{10} - 7]_M$, con $M = 5$, è:
+ 3
- 2
- 0
- −7
- 4
= $5^{10}$ è multiplo di 5, quindi resta $-7$, e $-7 = -2 \cdot 5 + 3$. È la risposta della soluzione ufficiale. La più insidiosa è 2: è il resto di 7, non di −7.

D: Quale di queste affermazioni è vera?
+ $-5 \equiv 19 \pmod 8$
- $-5 \equiv 5 \pmod 8$
- $19 \equiv 2 \pmod 8$
- $8 \equiv 1 \pmod 8$
- $-5 \equiv 4 \pmod 8$
= $-5 - 19 = -24$, multiplo di 8; tutti e due hanno resto 3. La più insidiosa è $-5 \equiv 5 \pmod 8$: un numero e il suo opposto sono congruenti solo se la loro differenza è multipla del modulo, e 10 non lo è di 8.

D: Quanti elementi ha $\mathbb{Z}_{12}$?
+ 12
- infiniti
- 11
- 13
- 6
= Le classi sono una per ogni resto da 0 a 11. La risposta più insidiosa è «infiniti»: infiniti sono gli elementi di ogni singola classe, non le classi.

D: Che cosa vuol dire che la somma in $\mathbb{Z}_N$ è ben definita?
+ che $\overline{a + b}$ non cambia se al posto di $a$ e $b$ si usano altri rappresentanti delle stesse classi
- che la somma di due classi è sempre una classe diversa dalle due di partenza
- che la somma è commutativa
- che ogni classe ha un'opposta
- che $\overline{a} + \overline{b}$ si può calcolare solo con i rappresentanti canonici
= Una classe ha infiniti nomi, e la definizione usa un nome: bisogna controllare che il risultato sia lo stesso con tutti. La più insidiosa è «che $\overline{a} + \overline{b}$ si può calcolare solo con i rappresentanti canonici»: è il contrario, si può usare qualunque rappresentante.

D: Qual è l'ultima cifra di $3^{2026}$?
+ 9
- 3
- 7
- 1
- 6
= Le potenze di 3 modulo 10 sono 3, 9, 7, 1 e si ripetono ogni 4; $2026 = 4 \cdot 506 + 2$, quindi conta $3^2$. La più insidiosa è 1: viene se si crede che l'esponente sia multiplo di 4.
```

## Esercizi

::: esercizio base Riscaldamento: congruenti o no
Di' quali sono vere: (a) $45 \equiv 3 \pmod 7$; (b) $-8 \equiv 4 \pmod 6$; (c) $1000 \equiv 1 \pmod{37}$; (d) $51 \equiv 15 \pmod{12}$.
::: soluzione
(a) Vera: $45 - 3 = 42 = 6 \cdot 7$. (b) Vera: $-8 - 4 = -12$. (c) Vera: $999 = 27 \cdot 37$. (d) Vera: $51 - 15 = 36$.
:::

::: esercizio base Riscaldamento: rappresentanti canonici
Trova il rappresentante canonico di $[100]_7$, $[-3]_{11}$, $[365]_7$ e $[-100]_9$.
::: soluzione
$100 = 14 \cdot 7 + 2$: è 2. $-3 = -1 \cdot 11 + 8$: è 8. $365 = 52 \cdot 7 + 1$: è 1. $-100 = -12 \cdot 9 + 8$: è 8.
:::

::: esercizio base Riscaldamento: una classe scritta per esteso
Scrivi i cinque elementi di $[2]_6$ più vicini a zero, e di' quali tra 20, 32, −10 e 44 stanno nella classe.
::: soluzione
$-10, -4, 2, 8, 14$. Stanno nella classe quelli con resto 2 nella divisione per 6: 20 sì ($18 + 2$), 32 sì ($30 + 2$), −10 sì, 44 sì ($42 + 2$).
:::

::: esercizio base Riscaldamento: conti in una tabella
Scrivi la tabella della moltiplicazione di $\mathbb{Z}_4$. Ci sono due classi diverse da zero con prodotto zero?
::: soluzione
Righe, per 0, 1, 2, 3: `0 0 0 0`; `0 1 2 3`; `0 2 0 2`; `0 3 2 1`. Sì: $\overline{2} \cdot \overline{2} = \overline{4} = \overline{0}$.
:::

::: esercizio medio Il resto senza fare il conto
Calcola il resto di $2026 \cdot 2027 + 2028$ nella divisione per 9.
::: soluzione
$2026 = 225 \cdot 9 + 1$, quindi $2026 \equiv 1$, $2027 \equiv 2$, $2028 \equiv 3$. Allora $1 \cdot 2 + 3 = 5$. Il resto è 5. I resti si trovano anche con la somma delle cifre: $2 + 0 + 2 + 6 = 10 \equiv 1$.
:::

::: esercizio medio Una potenza modulo 7
Calcola il resto di $2^{100}$ nella divisione per 7.
::: soluzione
Le potenze di 2 modulo 7: $2, 4, 1$. Da $2^3 \equiv 1$ tutto si ripete ogni 3. $100 = 3 \cdot 33 + 1$, quindi $2^{100} = (2^3)^{33} \cdot 2 \equiv 2$. Il resto è 2.
:::

::: esercizio esame Ultima cifra, come nel quiz dell'08/06/2026
Qual è l'ultima cifra di $3! + 5! + 100!$? E di $4! \cdot 7 + 9^{15}$?
::: soluzione
**Primo.** $3! = 6$; $5!$ e $100!$ finiscono per 0. Ultima cifra 6. **Secondo.** $4! = 24 \equiv 4$, e $4 \cdot 7 = 28 \equiv 8$. Poi $9 \equiv -1$, e l'esponente 15 è dispari: $9^{15} \equiv -1 \equiv 9$. In tutto $8 + 9 = 17 \equiv 7$. Ultima cifra 7.
:::

::: esercizio difficile Una funzione tra classi è ben definita?
Considera le due regole da $\mathbb{Z}_6$ a $\mathbb{Z}_3$ e da $\mathbb{Z}_3$ a $\mathbb{Z}_6$: $f([a]_6) = [a]_3$ e $g([a]_3) = [a]_6$. Quale delle due è ben definita?
::: soluzione
**$f$ sì.** Se $[a]_6 = [a']_6$, allora 6 divide $a - a'$; siccome 3 divide 6, anche 3 divide $a - a'$, e $[a]_3 = [a']_3$. **$g$ no.** $[1]_3 = [4]_3$, ma $[1]_6 \ne [4]_6$: la stessa classe di partenza darebbe due risultati diversi. Funziona solo quando il modulo di arrivo divide quello di partenza: è la proposizione 7.8 del libro, e l'esempio del libro è $[3]_8 = [11]_8$ ma $[3]_5 \ne [11]_5$.
:::

## Domande di ripasso

::: domanda Quando due interi sono congruenti modulo $N$?
Quando $N$ divide la loro differenza; è lo stesso che avere lo stesso resto nella divisione per $N$.
:::

::: domanda Che cos'è una classe resto, e quante sono?
È l'insieme di tutti gli interi con lo stesso resto nella divisione per $N$. Sono $N$, e formano una partizione degli interi.
:::

::: domanda Che cos'è un rappresentante, e qual è quello canonico?
Un rappresentante è un elemento qualunque della classe, usato per indicarla. Quello canonico è il resto, tra 0 e $N - 1$.
:::

::: domanda Come si sommano e si moltiplicano due classi?
Si sommano o si moltiplicano due rappresentanti e si prende la classe del risultato.
:::

::: domanda Che cosa vuol dire «ben definita», e come si dimostra per la somma?
Che il risultato non dipende dai rappresentanti scelti. Si scrivono gli altri rappresentanti come $a + kN$ e $b + k'N$: la somma cambia di un multiplo di $N$.
:::

::: domanda In una potenza modulo $N$, che cosa si può ridurre?
La base, non l'esponente.
:::

## Glossario

```glossario
Modulo | L'intero N, almeno 2, rispetto a cui si prendono i resti.
Congruenza modulo N | Relazione tra due interi la cui differenza è multipla di N.
Classe resto | L'insieme degli interi con lo stesso resto nella divisione per N.
Rappresentante | Un elemento di una classe, usato per indicarla.
Rappresentante canonico | Il rappresentante compreso tra 0 e N − 1: il resto.
Z con N | L'insieme delle N classi resto modulo N.
Buona definizione | Il fatto che un'operazione definita con i rappresentanti dia lo stesso risultato qualunque rappresentante si scelga.
Opposta di una classe | La classe che sommata a quella data dà la classe di 0.
```

## Checklist

```checklist
- So dire quando due interi sono congruenti modulo N, con la differenza e con i resti.
- So trovare il resto di un numero negativo.
- So scrivere gli elementi di una classe resto.
- So dire quanti elementi ha Z con N e che cosa sono.
- So trovare il rappresentante canonico di una classe.
- So sommare e moltiplicare due classi, e scrivere le tabelle per un modulo piccolo.
- So spiegare che cosa vuol dire buona definizione e dimostrarla per somma e prodotto.
- So perché l'esponente di una potenza non si può ridurre modulo N.
- So calcolare il resto di un'espressione riducendo prima i numeri.
- So trovare l'ultima cifra di una somma, di un prodotto e di una potenza.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta* (testo del canale B), cap. 7 «Aritmetica modulare»: «Classi resto e loro operazioni», pp. 131–137 (classi resto, proposizione 7.1, definizione 7.3, proposizioni 7.4, 7.5, 7.9 e 7.10); «Congruenze», pp. 142–143 (definizione 7.20, proposizione 7.21).
- Diario delle lezioni del canale B 2025/26, lezione 17 (11/11/2025): «Relazione di congruenza modulo N. Classi di congruenza (o classi resto). Operazioni tra classi resto e loro buona definizione».
- Appello di Matematica Discreta dell'08/06/2026, quiz, domanda 7 (quattro versioni, con le risposte del foglio delle soluzioni); problemi 2023/24, problema 2 (rappresentanti canonici, con la soluzione ufficiale).
- I conti degli esempi e degli esercizi sono ricontrollati con un programma.
