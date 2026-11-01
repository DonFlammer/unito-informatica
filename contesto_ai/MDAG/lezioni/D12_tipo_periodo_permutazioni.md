---
corso: MDAG
modulo: MD
lezione: D12
titolo: Tipo e periodo di una permutazione
data: 2026-10-30
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D12
descrizione: >-
  Appunti della lezione D12 di Matematica Discreta (MDAG, parte 1, canali A, B e C): il tipo di una permutazione,
  quante permutazioni hanno un certo tipo, i tipi come partizioni di n, le potenze di una permutazione, il periodo
  come minimo comune multiplo delle lunghezze dei cicli, il tipo delle potenze, con le domande d'esame degli appelli
  2025 e 2026 e il problema del 10/09/2026.
lede: >-
  Dai cicli disgiunti si leggono due numeri che l'esame chiede sempre: il tipo, cioè le lunghezze dei cicli, e il
  periodo, cioè dopo quante ripetizioni la permutazione torna all'identità. Con questi due si contano le
  permutazioni e si calcolano le potenze senza fare tutti i conti.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 5, pp. 92–95 e 101–103
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 5 «Permutazioni», pp. 92–95 (definizione 5.12,
  conteggio delle permutazioni di un tipo dato, partizioni di n) e pp. 101–103 (sezione «Periodi»: proposizione 5.23,
  nota 5.24, definizione 5.25, proposizione 5.26, tabella dei periodi in S8); esercizi 5.5–5.7 e 5.10; diario delle
  lezioni del canale B 2025/26, lezione 12; appelli di Matematica Discreta 2025 e 2026 (quiz, domande 5 e 6;
  problemi del 13/01/2026 e del 10/09/2026)
appunti_html: appunti/MDAG/D12_tipo_periodo_permutazioni.html
genera_html: true
---

## In breve

- Il **tipo** di una permutazione è l'elenco delle lunghezze dei suoi cicli disgiunti, dalla più grande alla più piccola: $(1\ 4\ 6)(2\ 10\ 9)(5\ 7)(3\ 8)$ ha tipo $(3, 3, 2, 2)$.
- Le permutazioni di un certo tipo si contano con le scelte successive: si sceglie un ciclo alla volta e si divide per i modi di scrivere ogni ciclo. Se una lunghezza si ripete, si divide anche per gli scambi tra cicli uguali.
- Ogni tipo, completato con degli 1, è un modo di scrivere $n$ come somma: una **partizione**. Con l'identità, i tipi possibili sono tanti quante le partizioni di $n$.
- Ripetendo una permutazione più volte si ottengono le sue **potenze**. Prima o poi si torna all'identità: il primo esponente positivo che ci riporta lì è il **periodo**.
- Un ciclo di lunghezza $\ell$ ha periodo $\ell$. Una permutazione qualsiasi ha come periodo il **minimo comune multiplo** delle lunghezze del tipo.
- Con il periodo si riducono gli esponenti, anche quelli negativi: se il periodo è 14, $\pi^{-3} = \pi^{11}$.
- Una potenza di un ciclo può spezzarsi in più cicli uguali: il quadrato di un ciclo di lunghezza 6 ha tipo $(3, 3)$.
- All'esame: due domande del quiz in quasi tutti gli appelli 2025 e 2026, più tipo, periodo e conteggi nel problema sulle permutazioni.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di venerdì 30/10/2026, dalle 9 alle 11, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la dodicesima lezione era «Tipo di una permutazione. Partizioni di n. Struttura ciclica della successione delle potenze di una permutazione e calcolo del periodo». Nel libro sono le pp. 92–95 e 101–103. Le pagine in mezzo, su scambi e parità, nel diario venivano nella lezione successiva, e lo stesso faccio io. Quando il docente pubblica gli argomenti, controllo e aggiorno.

## Il tipo di una permutazione (definizione 5.12)

Nella [D11](D11_cicli_disgiunti.html) ogni permutazione si è spezzata in cicli disgiunti, sempre gli stessi. Di quei cicli spesso non interessa quali numeri contengono, ma solo **quanto sono lunghi**. La permutazione di $S_{10}$

$$\pi = (1\ 4\ 6)(2\ 10\ 9)(5\ 7)(3\ 8)$$

ha due cicli di lunghezza 3 e due di lunghezza 2. L'elenco di queste lunghezze, dalla più grande alla più piccola, è $(3, 3, 2, 2)$: è il suo tipo.

> [!DEF] 5.12 · Tipo
> Sia $\pi \in S_n$ diversa dall'identità, scritta in cicli disgiunti come $c_1 c_2 \cdots c_r$. Le lunghezze dei cicli, in ordine decrescente, siano $\ell_1 \ge \ell_2 \ge \cdots \ge \ell_r$. Il **tipo** di $\pi$ è $(\ell_1, \ell_2, \dots, \ell_r)$.

**Come si legge.** Si scrivono le lunghezze dei cicli disgiunti in ordine decrescente. I cicli si possono sempre riordinare così, perché sono disgiunti e quindi commutano. Le lunghezze possono ripetersi, e i numeri fermi non contano.

Il libro aggiunge alcune osservazioni.

- **La somma non supera $n$.** I cicli sono disgiunti, quindi usano numeri diversi: $\ell_1 + \cdots + \ell_r \le n$. In $S_{10}$ il tipo $(3, 3, 2, 2)$ usa 10 numeri, tutti.
- **Ogni elenco di questo genere è un tipo.** Se le lunghezze sono almeno 2 e la somma non supera $n$, una permutazione con quel tipo c'è sempre. Basta riempire i cicli in ordine con i numeri 1, 2, 3, …: per il tipo $(3, 2)$ si prende $(1\ 2\ 3)(4\ 5)$.
- **Un ciclo di lunghezza $\ell$ ha tipo $(\ell)$.**

::: prova Qual è il tipo di $\sigma = (1\ 6\ 2\ 3)(4\ 5\ 8\ 9\ 7)$, la permutazione dell'ultimo esempio della D11?
I cicli hanno lunghezze 4 e 5. In ordine decrescente il tipo è $(5, 4)$.
:::

> [!RICORDA]
> - Tipo = lunghezze dei cicli disgiunti, dalla più grande alla più piccola.
> - Prima di leggere il tipo bisogna avere i cicli **disgiunti**: le lunghezze di un prodotto di cicli qualsiasi non dicono niente.

## Quante permutazioni hanno un certo tipo (pp. 93–95)

Il tipo serve anche a contare. Quante permutazioni hanno un tipo dato si calcola con le scelte successive della D07, un ciclo alla volta. Si comincia dal caso di un solo ciclo.

### I cicli di una lunghezza data

Per costruire un ciclo di lunghezza 4 con i numeri da 1 a 7 si scelgono 4 numeri diversi, in ordine. Sono le disposizioni semplici della [D07](D07_parole_anagrammi_disposizioni.html), e ce ne sono $7 \cdot 6 \cdot 5 \cdot 4 = 840$. Ogni ciclo però viene contato 4 volte, perché si può cominciare a scriverlo da uno qualsiasi dei suoi numeri: $(1\ 2\ 3\ 4)$ e $(2\ 3\ 4\ 1)$ sono la stessa permutazione. Quindi i cicli di lunghezza 4 in $S_7$ sono $840 / 4 = 210$. In generale, con $n$ numeri e cicli di lunghezza $\ell$:

$$\text{numero dei cicli di lunghezza } \ell \text{ in } S_n = \frac{1}{\ell} \cdot \frac{n!}{(n - \ell)!}.$$

Nell'esempio successivo il libro ottiene 240 cicli di lunghezza 3 e scrive «in $S_8$». Il conto però usa 10 numeri, quindi vale per $S_{10}$. In $S_8$ i cicli di lunghezza 3 sono $\frac{1}{3} \cdot 8 \cdot 7 \cdot 6 = 112$.

### Un tipo qualsiasi: scelte successive

Per un tipo con più cicli si costruisce un ciclo alla volta, ognuno con i numeri rimasti, e si moltiplicano i risultati. È il punto b) del problema 1 dell'appello del 13/01/2026: quante permutazioni di $S_9$ hanno tipo $(4, 3)$?

1. Il ciclo di lunghezza 4 con 9 numeri: $\frac{1}{4} \cdot 9 \cdot 8 \cdot 7 \cdot 6 = 756$.
2. Il ciclo di lunghezza 3 con i 5 numeri rimasti: $\frac{1}{3} \cdot 5 \cdot 4 \cdot 3 = 20$.
3. In tutto $756 \cdot 20 = 15120$.

### Quando una lunghezza si ripete

Il metodo va corretto quando nel tipo una lunghezza compare più volte. Il libro lo mostra con il tipo $(2, 2)$ in $S_4$. Le permutazioni sono solo tre, perché ognuna divide i 4 numeri in due coppie.

```grafico
titolo: Le tre permutazioni di tipo $(2, 2)$ in $S_4$: ognuna divide i numeri da 1 a 4 in due coppie da scambiare. Il conto con le scelte successive dà 6, perché $(1\ 2)(3\ 4)$ e $(3\ 4)(1\ 2)$ vengono contate due volte
x: -0.6 6.4
y: -0.95 1.5
assi: no
griglia: no
proporzioni: libere
segmento: 0 1 1 1 | blu | spesso
segmento: 1 0 0 0 | ambra | spesso
punto: 0 1 | grigio
testo: -0.22 1.22 | grigio | "1"
punto: 1 1 | grigio
testo: 1.22 1.22 | grigio | "2"
punto: 1 0 | grigio
testo: 1.22 -0.22 | grigio | "3"
punto: 0 0 | grigio
testo: -0.22 -0.22 | grigio | "4"
testo: 0.5 -0.7 | accento | "(1 2)(3 4)"
segmento: 2.4 1 3.4 0 | blu | spesso
segmento: 3.4 1 2.4 0 | ambra | spesso
punto: 2.4 1 | grigio
testo: 2.18 1.22 | grigio | "1"
punto: 3.4 1 | grigio
testo: 3.62 1.22 | grigio | "2"
punto: 3.4 0 | grigio
testo: 3.62 -0.22 | grigio | "3"
punto: 2.4 0 | grigio
testo: 2.18 -0.22 | grigio | "4"
testo: 2.9 -0.7 | accento | "(1 3)(2 4)"
segmento: 4.8 1 4.8 0 | blu | spesso
segmento: 5.8 1 5.8 0 | ambra | spesso
punto: 4.8 1 | grigio
testo: 4.58 1.22 | grigio | "1"
punto: 5.8 1 | grigio
testo: 6.02 1.22 | grigio | "2"
punto: 5.8 0 | grigio
testo: 6.02 -0.22 | grigio | "3"
punto: 4.8 0 | grigio
testo: 4.58 -0.22 | grigio | "4"
testo: 5.3 -0.7 | accento | "(1 4)(2 3)"
```

Le scelte successive darebbero $\frac{1}{2} \cdot 4 \cdot 3 \cdot \frac{1}{2} \cdot 2 \cdot 1 = 6$. Il motivo è che due cicli disgiunti si possono scrivere in tutti e due gli ordini. Il metodo conta una volta $(1\ 2)$ come primo ciclo e una volta $(3\ 4)$ come primo. Quindi si divide per 2, e restano 3.

In generale, **se una lunghezza compare $k$ volte nel tipo, si divide per $k!$**: sono i modi di mettere in fila quei cicli.

> [!ESEMPIO] · il punto b) del problema 1 del 10/09/2026
> Quante permutazioni di $S_8$ hanno tipo $(3, 2, 2)$?
> 1. Il ciclo di lunghezza 3: $\frac{1}{3} \cdot 8 \cdot 7 \cdot 6 = 112$.
> 2. Il primo scambio con i 5 numeri rimasti: $\frac{1}{2} \cdot 5 \cdot 4 = 10$.
> 3. Il secondo scambio con i 3 rimasti: $\frac{1}{2} \cdot 3 \cdot 2 = 3$.
> 4. La lunghezza 2 compare due volte: si divide per $2! = 2$.
>
> Risultato: $\frac{112 \cdot 10 \cdot 3}{2} = 1680$. È la soluzione ufficiale, e l'ho ricontrollata contando tutte le $8! = 40320$ permutazioni con un programma.

::: prova Quante permutazioni di $S_6$ hanno tipo $(3, 3)$?
Il primo ciclo: $\frac{1}{3} \cdot 6 \cdot 5 \cdot 4 = 40$. Il secondo con i 3 numeri rimasti: $\frac{1}{3} \cdot 3 \cdot 2 \cdot 1 = 2$. La lunghezza 3 compare due volte, quindi si divide per 2: $\frac{40 \cdot 2}{2} = 40$.
:::

> [!RICORDA]
> - Il numero dei cicli di lunghezza $\ell$ è $\frac{1}{\ell} \cdot \frac{n!}{(n - \ell)!}$.
> - Un tipo qualsiasi: un ciclo alla volta con i numeri rimasti, poi si moltiplica.
> - Per ogni lunghezza che compare $k$ volte si divide per $k!$.

## Tipi e partizioni (p. 95)

Se a un tipo si aggiungono tanti 1 quanti sono i numeri fermi, la somma diventa il numero totale degli elementi. Per esempio il tipo $(3, 2)$ in $S_6$ lascia fermo un numero, e 3 + 2 + 1 fa 6. Un modo di scrivere un numero come somma di interi positivi, senza contare l'ordine, si chiama **partizione** di quel numero. Il numero delle partizioni di $n$ si indica con $p(n)$.

| $n$ | $p(n)$ | partizioni |
|---|---|---|
| 1 | 1 | $1$ |
| 2 | 2 | $2$, $1 + 1$ |
| 3 | 3 | $3$, $2 + 1$, $1 + 1 + 1$ |
| 4 | 5 | $4$, $3 + 1$, $2 + 2$, $2 + 1 + 1$, $1 + 1 + 1 + 1$ |
| 5 | 7 | $5$, $4 + 1$, $3 + 2$, $3 + 1 + 1$, $2 + 2 + 1$, $2 + 1 + 1 + 1$, $1 + 1 + 1 + 1 + 1$ |

Ogni partizione corrisponde a un tipo di $S_n$: si tolgono gli 1. La partizione fatta solo di 1 è l'identità, che non ha cicli. Per esempio $S_4$ ha 5 tipi: un ciclo di 4 numeri, un ciclo di 3, due scambi, uno scambio solo, e l'identità. Il libro aggiunge che per $p(n)$ non si conosce una formula esatta: si sa solo stimare quanto cresce.

::: prova Quali sono i tipi di $S_5$?
Dalle 7 partizioni di 5, togliendo gli 1: $(5)$, $(4)$, $(3, 2)$, $(3)$, $(2, 2)$, $(2)$, e l'identità.
:::

> [!RICORDA]
> - Partizione di $n$: $n$ scritto come somma di interi positivi, senza contare l'ordine.
> - I tipi di $S_n$, con l'identità, sono tanti quante le partizioni di $n$.

## Le potenze di una permutazione (pp. 101–102)

Come con i numeri, si può comporre una permutazione con sé stessa più volte. Comporla due volte dà il quadrato $\pi^2 = \pi \circ \pi$, tre volte il cubo $\pi^3$, e così via. Per convenzione $\pi^1 = \pi$ e $\pi^0 = \mathrm{id}$. Con un ciclo si può seguire passo per passo che cosa succede. Prendi $\pi = (1\ 2\ 3\ 4)$: ogni applicazione fa avanzare i numeri di un posto lungo il giro.

| potenza | in cicli | che cosa fa |
|---|---|---|
| $\pi$ | $(1\ 2\ 3\ 4)$ | avanza di un posto |
| $\pi^2$ | $(1\ 3)(2\ 4)$ | avanza di due posti |
| $\pi^3$ | $(1\ 4\ 3\ 2)$ | avanza di tre posti, cioè torna indietro di uno |
| $\pi^4$ | $\mathrm{id}$ | quattro posti: ogni numero è tornato al suo |

La tabella mostra due cose. La prima: dopo 4 passi tutto torna a posto, e prima no. La seconda: $\pi^2$ **non è un ciclo** ma due scambi (nota 5.24).

> [!PROP] 5.23 · Le potenze di un ciclo
> Sia $\pi = (t_1\ t_2\ \cdots\ t_\ell)$ un ciclo di lunghezza $\ell \ge 2$. Allora $\pi^\ell = \mathrm{id}$, e $\pi^k \neq \mathrm{id}$ per $k = 1, \dots, \ell - 1$.

**Come si legge.** Un ciclo di lunghezza $\ell$ torna all'identità dopo esattamente $\ell$ ripetizioni. Il motivo: ogni ripetizione fa avanzare i numeri di un posto lungo il giro, e per tornare al punto di partenza servono tanti passi quanti sono i posti.

### Il periodo (definizione 5.25)

Per una permutazione qualsiasi le potenze non possono essere tutte diverse, perché $S_n$ ha solo $n!$ elementi. Il libro ne ricava che ogni permutazione, ripetuta abbastanza volte, torna all'identità.

> [!DIM] perché si torna all'identità
> Prima o poi due potenze coincidono: $\pi^r = \pi^s$ con $r < s$. Si compone $r$ volte con l'inversa, da tutti e due i lati. A sinistra resta l'identità, a destra $\pi^{s - r}$. Quindi $\pi^{s - r} = \mathrm{id}$, con $s - r$ positivo.

> [!DEF] 5.25 · Periodo
> Il **periodo** di $\pi \in S_n$, indicato con $\mathrm{per}(\pi)$, è il più piccolo intero positivo $k$ con $\pi^k = \mathrm{id}$.

**Come si legge.** È il numero di ripetizioni che servono per tornare al punto di partenza la prima volta. Per la proposizione 5.23 un ciclo di lunghezza $\ell$ ha periodo $\ell$. L'identità ha periodo 1.

### Ridurre gli esponenti

Se il periodo è $p$, ogni $p$ ripetizioni si torna all'identità. Quindi dell'esponente conta solo il **resto** della divisione per il periodo. Il libro lo scrive così: se $m = qp + r$ con $0 \le r < p$,

$$\pi^m = (\pi^p)^q \circ \pi^r = \mathrm{id}^q \circ \pi^r = \pi^r.$$

Vale anche per gli esponenti negativi. Un esponente negativo vuol dire passi all'indietro: $\pi^{-1}$ è l'inversa, $\pi^{-2}$ l'inversa ripetuta due volte, e così via. Fare 3 passi indietro su un giro che si chiude ogni 14 passi è come farne $14 - 3 = 11$ in avanti: $\pi^{-3} = \pi^{11}$. Due conseguenze usate all'esame:

- $\pi^a = \pi^b$ esattamente quando $a - b$ è un multiplo del periodo;
- $\pi^m = \mathrm{id}$ esattamente quando $m$ è un multiplo del periodo.

> [!ESEMPIO] · Appello del 13/01/2026, quiz versione 1, domanda 5
> «Una permutazione $\pi$ ha periodo 14. Quale delle seguenti relazioni è vera? 1. $\pi^{-1} = \pi^{15}$; 2. $\pi^{-3} = \pi^{25}$; 3. $\pi^{-3} = \pi^{22}$; 4. $\pi^{-2} = \pi^{20}$; 5. $\pi^{-2} = \pi^{-12}$.»
>
> Si controlla se la differenza degli esponenti è un multiplo di 14. Nella risposta 2 la differenza è $25 - (-3) = 28 = 2 \cdot 14$: è vera, ed è la soluzione ufficiale. Nelle altre le differenze sono 16, 25, 22 e 10, nessuna multipla di 14.

::: prova Una permutazione ha periodo 8. Quale potenza positiva più piccola di 8 è uguale a $\pi^{-3}$?
$\pi^{-3} = \pi^{8 - 3} = \pi^5$. È la risposta giusta della domanda 6 del quiz del 06/06/2025, versione 1.
:::

> [!RICORDA]
> - La potenza $\pi^k$ è $\pi$ ripetuta $k$ volte; le potenze di un ciclo non sono sempre cicli.
> - Periodo = primo esponente positivo che dà l'identità; un ciclo di lunghezza $\ell$ ha periodo $\ell$.
> - Due potenze sono uguali quando la differenza degli esponenti è un multiplo del periodo.

## Il periodo si legge dal tipo (proposizione 5.26)

Quando ci sono più cicli disgiunti, ognuno lavora per conto suo e torna a posto con il suo ritmo. Prendi $\sigma = (1\ 2\ 3\ 4)(5\ 6\ 7)$. Il ciclo di lunghezza 4 torna a posto dopo 4, 8, 12, … ripetizioni; quello di lunghezza 3 dopo 3, 6, 9, 12, …. Tutti e due insieme tornano a posto la prima volta a 12, il primo numero che sta in entrambe le liste.

```grafico
titolo: Quando $(1\ 2\ 3\ 4)(5\ 6\ 7)$ torna all'identità: il ciclo di lunghezza 4 è a posto ai multipli di 4 (in blu), quello di lunghezza 3 ai multipli di 3 (in ambra). La prima volta che lo sono tutti e due è a 12, il minimo comune multiplo
x: -1.8 13
y: -0.7 2.2
assi: no
griglia: no
proporzioni: libere
segmento: 0 0 12.5 0 | grigio | sottile
segmento: 12 0 12 2 | accento | tratteggio
testo: 0 -0.45 | grigio | "0"
testo: 3 -0.45 | grigio | "3"
testo: 4 -0.45 | grigio | "4"
testo: 6 -0.45 | grigio | "6"
testo: 8 -0.45 | grigio | "8"
testo: 9 -0.45 | grigio | "9"
testo: 12 -0.45 | accento | "12"
segmento: 4 1.1 4 1.7 | blu | spesso
segmento: 8 1.1 8 1.7 | blu | spesso
segmento: 12 1.1 12 1.7 | blu | spesso
testo: 0.9 1.4 | blu | "lunghezza 4"
segmento: 3 0.3 3 0.9 | ambra | spesso
segmento: 6 0.3 6 0.9 | ambra | spesso
segmento: 9 0.3 9 0.9 | ambra | spesso
segmento: 12 0.3 12 0.9 | ambra | spesso
testo: 0.5 0.6 | ambra | "lunghezza 3"
```

Il **minimo comune multiplo** di alcuni numeri, $\mathrm{mcm}$, è il più piccolo intero positivo che è multiplo di tutti, come nella [D06](D06_insiemi_finiti_inclusione_esclusione.html). Per 4 e 3 è 12; per 6 e 4 è ancora 12, non 24.

> [!PROP] 5.26 · Periodo e tipo
> Se $\pi \in S_n$ ha tipo $(\ell_1, \ell_2, \dots, \ell_r)$, allora
> $$\mathrm{per}(\pi) = \mathrm{mcm}(\ell_1, \ell_2, \dots, \ell_r).$$

**Come si legge.** Il periodo è il minimo comune multiplo delle lunghezze dei cicli disgiunti. Non servono altri conti: basta il tipo.

> [!DIM] della proposizione 5.26
> Sia $\pi = c_1 c_2 \cdots c_r$ con i cicli disgiunti. Siccome i cicli commutano, $\pi^k = c_1^k c_2^k \cdots c_r^k$ per ogni $k \ge 0$ (il libro lo verifica per induzione).
> - Con $m = \mathrm{mcm}(\ell_1, \dots, \ell_r)$, ogni $c_i^m$ è l'identità, perché $m$ è un multiplo di $\ell_i$. Quindi $\pi^m = \mathrm{id}$.
> - Con $0 < k < m$, almeno un $\ell_i$ non divide $k$, quindi $c_i^k$ muove qualche numero $t$. Gli altri cicli non toccano $t$, perché sono disgiunti, quindi anche $\pi^k$ muove $t$ e non è l'identità.

> [!ESEMPIO] · due esempi del libro (p. 103)
> 1. La permutazione $\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\ 4 & 5 & 2 & 1 & 6 & 9 & 8 & 7 & 3 \end{pmatrix}$ in cicli disgiunti è $(2\ 5\ 6\ 9\ 3)(1\ 4)(7\ 8)$: tipo $(5, 2, 2)$, periodo $\mathrm{mcm}(5, 2, 2) = 10$.
> 2. Il prodotto $(3\ 7)(2\ 5\ 1\ 7)(6\ 1\ 3)(2\ 3\ 7\ 5\ 4)(5\ 8)$ in cicli disgiunti è $(1\ 7)(2\ 6\ 3)(4\ 5\ 8)$: tipo $(3, 3, 2)$, periodo 6. Il 6 non ha niente a che fare con le lunghezze dei cicli **non** disgiunti di partenza, 2, 4, 3, 5 e 2.

Siccome il periodo dipende solo dal tipo, si possono elencare i periodi possibili in $S_n$. Il libro lo fa per $S_8$, che ha 21 tipi oltre all'identità: i periodi possibili sono 2, 3, 4, 5, 6, 7, 8, 10, 12 e 15. Il più grande, 15, viene dal tipo $(5, 3)$.

::: prova Che periodo ha una permutazione di tipo $(6, 4, 2)$?
$\mathrm{mcm}(6, 4, 2) = 12$: è un multiplo di 6, di 4 e di 2, e nessun numero più piccolo lo è. È il periodo della risposta giusta nella domanda 5 del quiz del 14/01/2025, versione 3.
:::

> [!RICORDA]
> - Periodo = mcm delle lunghezze del tipo.
> - Prima i cicli disgiunti, poi il tipo, poi il periodo: in quest'ordine.

## Il tipo delle potenze

Nelle domande d'esame capita spesso di dover dire il tipo di una potenza, come il quadrato, il cubo o l'inversa del quadrato, conoscendo solo il tipo della permutazione. Siccome $\pi^k = c_1^k \cdots c_r^k$, basta sapere che cosa fa la potenza **di un solo ciclo**. La tabella della sezione sulle potenze lo mostrava per un ciclo di lunghezza 4: al quadrato si spezza in due scambi. Con un ciclo di lunghezza 6 il quadrato salta di due posti alla volta e forma due giri da 3.

```grafico
titolo: Il quadrato del ciclo $(1\ 2\ 3\ 4\ 5\ 6)$ salta di due posti a ogni passo: i numeri dispari formano il giro $(1\ 3\ 5)$, in blu, quelli pari il giro $(2\ 4\ 6)$, in ambra. Il quadrato ha tipo $(3, 3)$
x: -2.5 2.5
y: -2.5 2.5
assi: no
griglia: no
cerchio: 0 0 1.6 | grigio | sottile
punto: 0.00 1.60 | grigio
testo: 0.00 2.08 | grigio | "1"
punto: 1.39 0.80 | grigio
testo: 1.80 1.04 | grigio | "2"
punto: 1.39 -0.80 | grigio
testo: 1.80 -1.04 | grigio | "3"
punto: 0.00 -1.60 | grigio
testo: 0.00 -2.08 | grigio | "4"
punto: -1.39 -0.80 | grigio
testo: -1.80 -1.04 | grigio | "5"
punto: -1.39 0.80 | grigio
testo: -1.80 1.04 | grigio | "6"
freccia: 0.14 1.36 1.25 -0.56 | blu
freccia: 1.11 -0.80 -1.11 -0.80 | blu
freccia: -1.25 -0.56 -0.14 1.36 | blu
freccia: 1.25 0.56 0.14 -1.36 | ambra
freccia: -0.14 -1.36 -1.25 0.56 | ambra
freccia: -1.11 0.80 1.11 0.80 | ambra
```

La regola generale usa il **massimo comune divisore**, $\mathrm{mcd}$: il più grande intero che divide tutti e due i numeri. Per esempio $\mathrm{mcd}(6, 2) = 2$ e $\mathrm{mcd}(12, 8) = 4$. Nel corso torna più avanti, con i numeri interi.

> [!PROP] · La potenza di un ciclo
> Sia $c$ un ciclo di lunghezza $\ell$ e sia $d = \mathrm{mcd}(\ell, k)$. Allora $c^k$ è fatto di $d$ cicli disgiunti, tutti di lunghezza $\frac{\ell}{d}$. Se $\ell$ divide $k$, cioè $d = \ell$, $c^k$ è l'identità.

**Come si legge.** La potenza salta $k$ posti alla volta lungo il giro. Nella figura il giro ha 6 posti e si salta di 2. Partendo dall'1 si toccano solo i dispari e si torna all'1 dopo 3 salti; i pari formano un secondo giro. Il massimo comun divisore conta proprio quanti giri separati si formano. Il libro non enuncia questa regola: è la «struttura ciclica delle potenze» del diario. L'ho controllata con un programma su tutti i cicli fino alla lunghezza 12.

Per una permutazione qualsiasi si applica la regola a ogni ciclo separatamente. Due casi frequenti:

- se l'esponente e la lunghezza non hanno divisori comuni oltre a 1, il ciclo resta un ciclo della stessa lunghezza;
- l'inversa di un ciclo ha la stessa lunghezza, quindi $\pi^{-k}$ ha lo stesso tipo di $\pi^k$.

> [!ESEMPIO] · Appello del 03/02/2026, quiz versione 1, domanda 5
> «Una permutazione $\pi$ ha tipo $(6, 3, 2)$. Allora il tipo di $\pi^{-2}$ è: 1. $(3, 3, 3)$; 2. $(3, 3)$; 3. $(3, 2, 2, 2)$; 4. $(6, 3)$; 5. $(6, 3, 2)$.»
>
> $\pi^{-2}$ ha lo stesso tipo di $\pi^2$. Ciclo per ciclo con $k = 2$:
> - lunghezza 6: $d = \mathrm{mcd}(6, 2) = 2$, due cicli di lunghezza 3;
> - lunghezza 3: $d = 1$, resta un ciclo di lunghezza 3;
> - lunghezza 2: 2 divide 2, sparisce.
>
> Tipo $(3, 3, 3)$, la risposta 1, come nella soluzione ufficiale.

::: prova Una permutazione di $S_{10}$ ha tipo $(5, 3, 2)$. Che tipo ha $\pi^3$?
Il ciclo di lunghezza 5 resta di lunghezza 5, perché $\mathrm{mcd}(5, 3) = 1$; quello di lunghezza 3 sparisce; quello di lunghezza 2 resta, perché $\mathrm{mcd}(2, 3) = 1$. Tipo $(5, 2)$: è la domanda 6 del quiz del 04/02/2025, versione 1.
:::

> [!RICORDA]
> - Le potenze si calcolano ciclo per ciclo: un ciclo di lunghezza $\ell$ si spezza in $\mathrm{mcd}(\ell, k)$ cicli uguali.
> - I cicli con lunghezza che divide $k$ spariscono.
> - $\pi^{-k}$ ha lo stesso tipo di $\pi^k$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $(\ell_1, \dots, \ell_r)$ | «tipo elle uno, …» | le lunghezze dei cicli disgiunti, in ordine decrescente | $(3, 3, 2, 2)$ |
| $p(n)$ | «p di n» | il numero delle partizioni di $n$ | $p(5) = 7$ |
| $\pi^k$ | «pi alla k» | $\pi$ composta con sé stessa $k$ volte | $(1\ 2\ 3\ 4)^2 = (1\ 3)(2\ 4)$ |
| $\pi^{-k}$ | «pi alla meno k» | l'inversa ripetuta $k$ volte | $\pi^{-1}$ è l'inversa |
| $\mathrm{per}(\pi)$ | «periodo di pi» | il primo $k > 0$ con $\pi^k = \mathrm{id}$ | $\mathrm{per}((1\ 2\ 3)) = 3$ |
| $\mathrm{mcm}$ | «minimo comune multiplo» | il più piccolo multiplo comune positivo | $\mathrm{mcm}(4, 6) = 12$ |
| $\mathrm{mcd}$ | «massimo comun divisore» | il più grande divisore comune | $\mathrm{mcd}(12, 8) = 4$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 30/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **Domande 5 e 6 del quiz.** In tutti gli appelli del 2025 e del 2026 che ho guardato, le domande 5 e 6 sono sulle permutazioni: il tipo di una potenza (03/02/2026, 04/02/2025, 08/06/2026), un esponente ridotto con il periodo (13/01/2026, 03/02/2026, 06/06/2025), il periodo dato il tipo (14/01/2025, insieme alla parità).
2. **Il problema sulle permutazioni**: dopo i cicli disgiunti chiede tipo e periodo di $\sigma$ e delle sue potenze, e quante permutazioni hanno quel tipo (13/01/2026, 01/07/2026, 10/09/2026).
3. La **parità**, che negli stessi esercizi compare accanto al periodo, è della lezione successiva.

### Una domanda vera, letta insieme

**Appello del 10/09/2026, problema 1, versione A.** Il testo: «In $S_8$ si consideri la permutazione $\sigma = (2\ 4\ 6\ 7)(2\ 3)(4\ 7\ 1\ 8)$. a) Calcolare la decomposizione di $\sigma$, $\sigma^2$ e di $\sigma^3$ in cicli disgiunti. Per ognuna di queste permutazioni, determinare il tipo e il periodo. b) Quante sono le permutazioni di $S_8$ che hanno lo stesso tipo di $\sigma$? Quante quelle che hanno lo stesso tipo di $\sigma^2$?»

**In pratica chiede:** i cicli disgiunti come nella D11, poi le potenze ciclo per ciclo, poi i conteggi di questa lezione.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: i cicli disgiunti.** Da destra: $1 \mapsto 8 \mapsto 6 \mapsto 7 \mapsto 1$, poi $2 \mapsto 3 \mapsto 4 \mapsto 2$; il 5 è fermo. Quindi $\sigma = (1\ 8\ 6\ 7)(2\ 3\ 4)$, tipo $(4, 3)$, periodo $\mathrm{mcm}(4, 3) = 12$.
>
> **Passo 2: il quadrato.** Il ciclo di lunghezza 4 al quadrato salta di due posti: $(1\ 6)(8\ 7)$. Il ciclo di lunghezza 3 al quadrato resta un ciclo di lunghezza 3, percorso all'indietro: $(2\ 4\ 3)$. Quindi $\sigma^2 = (1\ 6)(8\ 7)(2\ 4\ 3)$, tipo $(3, 2, 2)$, periodo $\mathrm{mcm}(3, 2, 2) = 6$.
>
> **Passo 3: il cubo.** Il ciclo di lunghezza 4 al cubo salta di tre posti, cioè torna indietro di uno: $(1\ 7\ 6\ 8)$. Il ciclo di lunghezza 3 al cubo sparisce. Quindi $\sigma^3 = (1\ 7\ 6\ 8)$, tipo $(4)$, periodo 4.
>
> **Passo 4: i conteggi.** Tipo $(4, 3)$ in $S_8$: $\frac{1}{4} \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot \frac{1}{3} \cdot 4 \cdot 3 \cdot 2 = 420 \cdot 8 = 3360$. Tipo $(3, 2, 2)$: $1680$, come nell'esempio della sezione sui conteggi, dividendo per 2 perché la lunghezza 2 compare due volte.
>
> Sono i risultati della soluzione ufficiale, e li ho ricontrollati con un programma.

### Un'altra domanda vera

> [!ESEMPIO] · Appello del 08/06/2026, quiz versione 1, domanda 6
> «Sia $\sigma$ una permutazione tale che $\sigma^{10} = \sigma^{-2}$. Allora il periodo di $\sigma$ NON può essere: 1. 4; 2. 6; 3. 5; 4. 3; 5. 2.»
>
> **Soluzione.** $\sigma^{10} = \sigma^{-2}$ vuol dire che la differenza degli esponenti, $10 - (-2) = 12$, è un multiplo del periodo. Il periodo quindi divide 12: può essere 1, 2, 3, 4, 6 o 12. Tra le risposte l'unico che non divide 12 è 5: la risposta 3, come nella soluzione ufficiale.

### Errori da evitare

- Leggere il tipo da un prodotto di cicli **non** disgiunti.
- Moltiplicare le lunghezze invece di prendere il mcm: il tipo $(6, 4, 2)$ ha periodo 12, non 48.
- Dimenticare di dividere per $k!$ quando una lunghezza si ripete nel tipo.
- Pensare che il quadrato di un ciclo sia sempre un ciclo: lo è solo se la lunghezza è dispari.
- Ridurre un esponente negativo togliendo solo il segno: con periodo 14, $\pi^{-3}$ è $\pi^{11}$.

## Quiz

```quiz
D: Appello del 03/02/2026, quiz versione 1, domanda 5. Una permutazione $\pi$ ha tipo $(6, 3, 2)$. Allora il tipo di $\pi^{-2}$ è:
+ $(3, 3, 3)$
- $(3, 3)$
- $(3, 2, 2, 2)$
- $(6, 3)$
- $(6, 3, 2)$
= $\pi^{-2}$ ha il tipo di $\pi^2$: il ciclo di lunghezza 6 si spezza in due cicli di lunghezza 3, quello di lunghezza 3 resta, lo scambio sparisce. È la risposta 1 della soluzione ufficiale. La più insidiosa è $(3, 3)$, di chi dimentica che il ciclo di lunghezza 3 al quadrato resta un ciclo.

D: Appello del 04/02/2025, quiz versione 1, domanda 6. Sia $\pi \in S_{10}$ una permutazione di tipo $(5, 3, 2)$. Allora $\pi^3$ ha tipo:
- $(3, 3, 2)$
- $(5, 3)$
+ $(5, 2)$
- $(5, 3, 2)$
- $(3, 2)$
= Al cubo il ciclo di lunghezza 3 sparisce; 5 e 2 non hanno divisori comuni con 3, quindi quei cicli restano interi. È la risposta 3 della soluzione ufficiale. La più insidiosa è $(5, 3)$, di chi fa sparire lo scambio al posto del ciclo di lunghezza 3.

D: Appello del 04/02/2025, quiz versione 3, domanda 6. Sia $\pi \in S_{11}$ una permutazione di tipo $(4, 4, 3)$. Allora $\pi^3$ ha tipo:
- $(4, 4, 3)$
- $(4, 3)$
- $(2, 2, 2, 2)$
+ $(4, 4)$
- $(2, 2)$
= $\mathrm{mcd}(4, 3) = 1$, quindi i due cicli di lunghezza 4 restano tali; quello di lunghezza 3 al cubo sparisce. È la risposta 4 della soluzione ufficiale. La più insidiosa è $(2, 2, 2, 2)$, che sarebbe il tipo di $\pi^2$, non di $\pi^3$.

D: Appello del 08/06/2026, quiz versione 2, domanda 5. Sia $\tau$ una permutazione di tipo $(5, 3, 2, 2)$. Allora $\tau^2$ ha tipo:
- $(5, 3, 2, 2)$
- $(5, 2, 2)$
- è un 5-ciclo
+ $(5, 3)$
- $(2, 2)$
= Al quadrato gli scambi spariscono, mentre i cicli di lunghezza 5 e 3, dispari, restano interi. È la risposta 4 della soluzione ufficiale. La più insidiosa è $(5, 2, 2)$, che è il tipo di $\tau^3$.

D: Appello del 13/01/2026, quiz versione 1, domanda 5. Una permutazione $\pi$ ha periodo 14. Quale delle seguenti relazioni è vera?
- $\pi^{-1} = \pi^{15}$
+ $\pi^{-3} = \pi^{25}$
- $\pi^{-3} = \pi^{22}$
- $\pi^{-2} = \pi^{20}$
- $\pi^{-2} = \pi^{-12}$
= Vale $\pi^a = \pi^b$ quando $a - b$ è multiplo di 14, e $25 - (-3) = 28$. È la risposta 2 della soluzione ufficiale. La più insidiosa è $\pi^{-1} = \pi^{15}$: sarebbe vera $\pi^{1} = \pi^{15}$, ma $\pi^{-1} = \pi^{13}$.

D: Appello del 06/06/2025, quiz versione 1, domanda 6. Una permutazione $\pi$ ha periodo 8. Allora:
- $\pi^{-1} = \pi^2$
- $\pi^{-2} = \pi^4$
- $\pi^{-1} = \pi^4$
+ $\pi^{-3} = \pi^5$
- $\pi^{-3} = \pi^3$
= $5 - (-3) = 8$, un multiplo del periodo. È la risposta 4 della soluzione ufficiale. La più insidiosa è l'ultima, di chi toglie solo il segno meno.

D: Appello del 08/06/2026, quiz versione 1, domanda 6. Sia $\sigma$ una permutazione tale che $\sigma^{10} = \sigma^{-2}$. Allora il periodo di $\sigma$ NON può essere:
- 4
- 6
+ 5
- 3
- 2
= Da $\sigma^{10} = \sigma^{-2}$ viene $\sigma^{12} = \mathrm{id}$, quindi il periodo divide 12. Il 5 non lo divide: è la risposta 3 della soluzione ufficiale. La più insidiosa è il 4, che non divide 10 ma divide 12.

D: Appello del 04/02/2025, quiz versione 1, domanda 5. Sia $\pi = (3\ 7)(2\ 4\ 1\ 6) \in S_7$. Allora $\pi^7(4)$ è:
- 4
+ 2
- 1
- 6
- 7
= Il 4 sta nel ciclo $(2\ 4\ 1\ 6)$, di lunghezza 4, e $7 = 4 + 3$: conta come 3 passi. Da 4: $4 \mapsto 1 \mapsto 6 \mapsto 2$. È la risposta 2 della soluzione ufficiale. La più insidiosa è 6, che viene con 2 passi.

D: Quanti sono i cicli di lunghezza 4 in $S_7$?
N: 210
= $\frac{1}{4} \cdot 7 \cdot 6 \cdot 5 \cdot 4 = 210$: si scelgono 4 numeri in ordine e si divide per i 4 punti da cui si può cominciare a scrivere il ciclo. È l'esempio del libro a p. 94.

D: Quante sono le partizioni di 5, cioè quanti tipi diversi ha $S_5$ contando anche l'identità?
N: 7
= $5$, $4 + 1$, $3 + 2$, $3 + 1 + 1$, $2 + 2 + 1$, $2 + 1 + 1 + 1$, $1 + 1 + 1 + 1 + 1$: sono 7, la tabella del libro a p. 95.
```

## Esercizi

::: esercizio base Riscaldamento: tipo e periodo
Scrivi tipo e periodo di (a) $(1\ 5)(2\ 7\ 4)$; (b) $(1\ 2\ 3\ 4\ 5\ 6\ 7)$; (c) $(1\ 2)(3\ 4)(5\ 6)$; (d) $(1\ 8\ 2\ 5\ 7\ 9)(3\ 11\ 6\ 10)(12\ 13)$.
::: soluzione
(a) Tipo $(3, 2)$, periodo 6. (b) Tipo $(7)$, periodo 7. (c) Tipo $(2, 2, 2)$, periodo 2. (d) È l'esempio in $S_{13}$ della D11: tipo $(6, 4, 2)$, periodo $\mathrm{mcm}(6, 4, 2) = 12$.
:::

::: esercizio base Riscaldamento: i cicli di lunghezza 3 in $S_5$
Quanti sono? Prova a elencare quelli che contengono l'1 e il 2.
::: soluzione
$\frac{1}{3} \cdot 5 \cdot 4 \cdot 3 = 20$. Quelli con l'1 e il 2: il terzo numero è 3, 4 o 5, e per ognuno ci sono due cicli, $(1\ 2\ x)$ e $(1\ x\ 2)$. Sono 6.
:::

::: esercizio medio Esercizio 5.7 del libro, in parte
Quante permutazioni hanno (a) tipo $(3, 2)$ in $S_6$; (b) tipo $(4, 2, 2)$ in $S_8$; (c) tipo $(3, 3)$ in $S_6$; (d) tipo $(5, 4, 2)$ in $S_{12}$?
::: soluzione
(a) $\frac{1}{3} \cdot 6 \cdot 5 \cdot 4 \cdot \frac{1}{2} \cdot 3 \cdot 2 = 40 \cdot 3 = 120$. (b) $\frac{1}{4} \cdot 8 \cdot 7 \cdot 6 \cdot 5 = 420$, poi due scambi con i 4 rimasti, $\frac{1}{2!} \cdot 6 \cdot 1 = 3$: in tutto $1260$. (c) $40$, come nel «Prova tu». (d) $\frac{12!}{5 \cdot 4 \cdot 2 \cdot 1!} = 11\,975\,040$: un numero resta fermo. I risultati (a)–(c) li ho controllati contando tutte le permutazioni con un programma, il (d) con la formula.
:::

::: esercizio medio Esercizio 5.5 del libro, solo i periodi
Che periodo ha una permutazione di tipo: (a) $(4, 3, 2)$ e $(3, 3, 3)$ in $S_9$; (b) $(7, 3)$ e $(3, 2, 2, 2)$ in $S_{10}$; (c) $(11, 3)$, $(7, 4, 2)$ e $(6, 4, 4)$ in $S_{14}$? Il libro scrive i tipi in ordine crescente; qui sono già riordinati.
::: soluzione
(a) 12 e 3. (b) 21 e 6. (c) 33, 28 e 12. La parità, chiesta anche dal libro, è della lezione successiva.
:::

::: esercizio esame Appello del 13/01/2026, problema 1, punti a) e b)
Con $\sigma = (1\ 2\ 3\ 4)(5\ 6\ 7)$, il risultato della D11: calcola $\sigma^8$ in cicli disgiunti e quante permutazioni di $S_9$ hanno lo stesso tipo di $\sigma$.
::: soluzione
$\sigma^8$: il ciclo di lunghezza 4 sparisce, perché 4 divide 8; per quello di lunghezza 3, $8 = 2 \cdot 3 + 2$, quindi conta come il quadrato, che è il ciclo all'indietro: $\sigma^8 = (5\ 7\ 6)$. Tipo $(4, 3)$ in $S_9$: $756 \cdot 20 = 15120$. Sono i risultati della soluzione ufficiale.
:::

::: esercizio esame Appello del 01/07/2026, problema 2, parte del punto a)
Sia $\sigma = (1\ 3\ 5)(1\ 2\ 4)(1\ 6\ 7\ 8) \in S_8$. Scrivi in cicli disgiunti tutte le potenze $\sigma^0, \dots, \sigma^7$, con tipo e periodo. Nel testo originale la domanda parla del «sottogruppo generato da $\sigma$» e chiede anche la parità, argomenti delle prossime lezioni.
::: soluzione
Da destra si trova un solo ciclo: $\sigma = (1\ 6\ 7\ 8\ 2\ 4\ 3\ 5)$, tipo $(8)$, periodo 8. Le potenze, ciclo di lunghezza 8 con la regola del mcd:
- $\sigma^1, \sigma^3, \sigma^5, \sigma^7$: mcd con 8 uguale a 1, tipo $(8)$, periodo 8;
- $\sigma^2 = (1\ 7\ 2\ 3)(6\ 8\ 4\ 5)$ e $\sigma^6 = (1\ 3\ 2\ 7)(6\ 5\ 4\ 8)$: tipo $(4, 4)$, periodo 4;
- $\sigma^4 = (1\ 2)(6\ 4)(7\ 3)(8\ 5)$: tipo $(2, 2, 2, 2)$, periodo 2;
- $\sigma^0 = \mathrm{id}$, periodo 1.

Coincide con la soluzione ufficiale, e tutte le potenze le ho calcolate anche con un programma.
:::

::: esercizio difficile Esercizio 5.10 del libro, per $S_6$
Elenca tutti i tipi delle permutazioni di $S_6$ e il periodo di ognuno. Qual è il periodo più grande?
::: soluzione
Le partizioni di 6 sono 11. Tipi e periodi: $(6)$: 6; $(5)$: 5; $(4, 2)$: 4; $(4)$: 4; $(3, 3)$: 3; $(3, 2)$: 6; $(3)$: 3; $(2, 2, 2)$: 2; $(2, 2)$: 2; $(2)$: 2; identità: 1. Il periodo più grande è 6, dato sia da $(6)$ sia da $(3, 2)$.
:::

## Domande di ripasso

::: domanda Che cos'è il tipo di una permutazione e perché servono i cicli disgiunti per leggerlo?
È l'elenco delle lunghezze dei cicli disgiunti in ordine decrescente. Un prodotto di cicli che si toccano può dare cicli disgiunti di lunghezze del tutto diverse.
:::

::: domanda Perché nel conteggio dei cicli di lunghezza $\ell$ si divide per $\ell$?
Perché lo stesso ciclo si può scrivere cominciando da uno qualsiasi dei suoi $\ell$ numeri, e le disposizioni contano tutte queste scritture.
:::

::: domanda Quando si divide per $k!$ nel conteggio di un tipo?
Quando una lunghezza compare $k$ volte: i $k$ cicli di quella lunghezza si possono elencare in $k!$ ordini, che danno la stessa permutazione.
:::

::: domanda Come si calcola il periodo di una permutazione?
Si scrive in cicli disgiunti, si legge il tipo e si prende il minimo comune multiplo delle lunghezze.
:::

::: domanda Con periodo $p$, quando vale $\pi^a = \pi^b$?
Quando $a - b$ è un multiplo di $p$. Per esempio, con periodo 14, $\pi^{-3} = \pi^{11} = \pi^{25}$.
:::

::: domanda Che cosa diventa la potenza $k$-esima di un ciclo di lunghezza $\ell$?
$\mathrm{mcd}(\ell, k)$ cicli disgiunti, tutti di lunghezza $\frac{\ell}{\mathrm{mcd}(\ell, k)}$; l'identità se $\ell$ divide $k$.
:::

## Glossario

```glossario
Tipo | Elenco delle lunghezze dei cicli disgiunti di una permutazione, in ordine decrescente (definizione 5.12).
Partizione di n | Modo di scrivere n come somma di interi positivi, senza contare l'ordine; p(n) è il loro numero.
Potenza | pi^k è pi composta con sé stessa k volte; pi^0 è l'identità, pi^(-k) l'inversa ripetuta k volte.
Periodo | Il più piccolo intero positivo k con pi^k = id (definizione 5.25); è il mcm delle lunghezze del tipo (proposizione 5.26).
Minimo comune multiplo (mcm) | Il più piccolo intero positivo multiplo di tutti i numeri dati.
Massimo comun divisore (mcd) | Il più grande intero che divide tutti i numeri dati.
```

## Checklist

```checklist
- So leggere il tipo di una permutazione dai suoi cicli disgiunti.
- So contare i cicli di una lunghezza data in S_n.
- So contare le permutazioni di un tipo dato, anche con lunghezze ripetute.
- So elencare le partizioni di un numero piccolo e i tipi di S_n.
- So calcolare le potenze di un ciclo e di una permutazione.
- So calcolare il periodo con il mcm.
- So ridurre un esponente, anche negativo, usando il periodo.
- So dire il tipo di una potenza conoscendo solo il tipo.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 5 «Permutazioni», pp. 92–95 (definizione 5.12 e osservazioni, numero dei cicli di lunghezza $\ell$, metodo delle scelte successive e correzione per le lunghezze ripetute con l'esempio del tipo $(2, 2)$ in $S_4$, partizioni di $n$ e tabella di $p(n)$) e pp. 101–103 (sezione «Periodi»: proposizione 5.23, nota 5.24, definizione 5.25, proposizione 5.26 con la dimostrazione, i due esempi e la tabella dei periodi in $S_8$); esercizi 5.5, 5.7 e 5.10 (pp. 104–105). Le parti del libro sono riassunte con parole mie. A p. 94 il libro scrive «in $S_8$» per un conto che riguarda $S_{10}$.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori), lezione 12: «Tipo di una permutazione. Partizioni di n. Struttura ciclica della successione delle potenze di una permutazione e calcolo del periodo. Esempi»; lezione 13 per scambi e parità.
- Appelli di Matematica Discreta con le soluzioni ufficiali, dal Moodle MDAG1 2025/26 (id 3501, aperto agli ospiti): quiz del 04/02/2025 (domande 5 e 6), 06/06/2025 (domanda 6), 13/01/2026 (domanda 5), 03/02/2026 (domanda 5), 08/06/2026 (domande 5 e 6); problemi del 13/01/2026 (problema 1), 01/07/2026 (problema 2), 10/09/2026 (problema 1).
- La regola sulle potenze di un ciclo, tutti i conteggi, i periodi e le risposte dei quiz li ho controllati con un programma. Gli esempi senza indicazione e i quiz senza data sono di questi appunti.
