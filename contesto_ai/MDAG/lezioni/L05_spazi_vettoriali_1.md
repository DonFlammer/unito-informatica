---
corso: MDAG
modulo: AG
lezione: L05
titolo: Spazi vettoriali I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L05
descrizione: >-
  Appunti della lezione L05 di Algebra lineare e Geometria (MDAG, parte 2): lo spazio euclideo, somma di vettori e
  prodotto per scalare, gruppi, campi, definizione di spazio vettoriale ed esempi (polinomi, funzioni, successioni),
  con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Dalle frecce del piano a un'idea molto più generale: lo spazio euclideo $\R^n$ con la somma e il prodotto per
  scalare, i gruppi e i campi, e infine gli spazi vettoriali, cioè tutti gli insiemi in cui si calcola con le stesse
  regole di $\R^n$. Scoprirai che anche i polinomi, le funzioni e le successioni sono vettori, e imparerai a
  riconoscere quando un insieme non è uno spazio vettoriale.
materiale: dispense
scheda:
  Dispense: lezione 5 · pp. 20–25
  Libro: Martelli, §1.5, §2.1 e §2.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 5 «Spazi vettoriali I»; B. Martelli, Geometria e algebra lineare, §1.5, §2.1 e §2.2.1–2.2.4
file_en: L05_vector_spaces_1.html
appunti_html: appunti/MDAG/L05_spazi_vettoriali_1.html
genera_html: true
---

## In breve

- Lo **spazio euclideo** $\R^n$ è l'insieme delle liste ordinate $(x_1, \dots, x_n)$ di $n$ numeri reali. Ogni elemento si può vedere come un **punto** oppure come un **vettore**, una freccia che parte dall'origine.
- In $\R^n$ ci sono due operazioni, fatte sempre **componente per componente**: la **somma** $x + y$ (in $\R^2$ è la regola del parallelogramma) e il **prodotto per scalare** $\lambda x$ (allunga, accorcia o ribalta il vettore).
- Un **gruppo** è un insieme con un'operazione che ha un elemento neutro, è associativa e in cui ogni elemento ha un inverso. $(\Z, +)$ è un gruppo, $(\N, +)$ no.
- Un **campo** è un insieme con somma e prodotto in cui si fanno le quattro operazioni, dividendo solo per elementi diversi da $0$. $\Q$, $\R$ e $\C$ sono campi, $\Z$ no; anche $\{0, 1\}$ con $1 + 1 = 0$ è un campo.
- Uno **spazio vettoriale** su un campo $\K$ è un insieme $V$ con una somma e un prodotto per scalare che rispettano **cinque assiomi**: le stesse regole di calcolo di $\R^n$.
- Ci sono **due zeri** da non confondere: lo $0$ del campo e l'origine $0_V$ dello spazio. La Proposizione 5.5 li collega: $0v = 0_V$.
- Sono spazi vettoriali $\K^n$ (anche $\C^n$), le successioni, le funzioni $[0, 1] \to \K$ e i polinomi $\K[x]$: in tutti si somma e si moltiplica «un pezzo alla volta».
- Per dimostrare che un insieme **non** è uno spazio vettoriale basta un controesempio: manca lo zero, oppure una somma o un multiplo escono dall'insieme. I polinomi di grado esattamente $2$, per esempio, non lo sono.
- All'esame servono nelle domande a risposta multipla: «$\C$ ammette una struttura di spazio vettoriale su $\R$?» (appello del 07/02/2025) e, dalla lezione L06, «quale di questi insiemi è un sottospazio?».

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Perché gli spazi vettoriali (p. 20)

Il corso studia oggetti geometrici (punti, rette, piani) che vivono in $\R^n$. Le dispense però fanno subito un passo in più: invece di lavorare solo con $\R^n$, considerano **tutti gli insiemi che hanno le stesse proprietà algebriche di $\R^n$**. Questi insiemi si chiamano **spazi vettoriali**.

Per capire perché conviene, guarda tre oggetti molto diversi tra loro.

| | frecce del piano | polinomi | funzioni su $[0, 1]$ |
|---|---|---|---|
| due elementi | $(1, 2)$ e $(3, 1)$ | $x^2 + 1$ e $2x - 3$ | $f(x) = x^2$ e $g(x) = 1 - x$ |
| la loro somma | $(4, 3)$ | $x^2 + 2x - 2$ | $x^2 - x + 1$ |
| il doppio del primo | $(2, 4)$ | $2x^2 + 2$ | $2x^2$ |
| l'elemento «zero» | $(0, 0)$ | il polinomio nullo | la funzione che vale sempre $0$ |

In tutti e tre i casi:

- sommando due elementi ottieni un elemento **dello stesso tipo**;
- moltiplicando per un numero resti **nello stesso tipo**;
- valgono le **stesse regole di calcolo**, per esempio $2(a + b) = 2a + 2b$.

Se dimostri un teorema usando **solo** quelle regole, il teorema vale in una volta sola per le frecce, per i polinomi, per le funzioni e per tutto ciò che rispetta le stesse regole. È il vantaggio dell'astrazione. Le dispense citano tre esempi che userai spesso: gli **insiemi di soluzioni dei sistemi lineari** (lezioni L11–L13), gli **spazi di funzioni** (in questa lezione) e gli **spazi di matrici** (lezione L06).

## Lo spazio euclideo $\R^n$ (pp. 20–21)

Nel piano cartesiano un punto è individuato da due numeri, per esempio $(2, 3)$: 2 passi a destra e 3 in alto. Nello spazio ne servono tre, $(x, y, z)$. Lo spazio euclideo generalizza questa idea a un numero qualsiasi di coordinate.

> [!DEF] 5.1 · Spazio euclideo
> Sia $n \ge 1$ un numero naturale. Lo **spazio euclideo $n$-dimensionale** è l'insieme
> $$\R^n = \underbrace{\R \times \cdots \times \R}_{n \text{ volte}}.$$
> I suoi elementi sono successioni $(x_1, \dots, x_n)$ di $n$ numeri reali.

Pezzo per pezzo:

- $\R \times \R$ è il **prodotto cartesiano**: l'insieme di tutte le **coppie ordinate** $(a, b)$ con $a, b \in \R$. Con $n$ fattori si ottengono le liste ordinate di $n$ numeri, dette anche **$n$-uple**.
- Qui «successione» vuol dire lista **finita e ordinata** di $n$ numeri (nella lezione L01 le successioni erano infinite). L'ordine conta: $(1, 2) \neq (2, 1)$.
- $\R^2$ è il **piano cartesiano**, $\R^3$ lo **spazio cartesiano**. Per $n \ge 4$ non si può più disegnare, ma si calcola allo stesso modo: $(1, 0, -2, 5)$ è un elemento di $\R^4$.
- L'elemento $(0, \dots, 0)$ si chiama **origine** e si indica con $0$ oppure $O$.

### Punto o vettore?

Un elemento $x \in \R^n$ si può leggere in due modi: come un **punto**, oppure come un **vettore**, cioè una freccia che parte dall'origine e arriva in $x$. Sono due modi di disegnare la stessa lista di numeri. Di solito si usano le lettere $P, Q$ per i punti e $v, w$ per i vettori.

```grafico
titolo: Due elementi di $\R^2$: $(2, 3)$ disegnato come punto e $(-3, 1)$ disegnato come vettore
x: -4 4
y: -1 4
punto: 2 3 | ambra | $P = (2, 3)$ | e
vettore: -3 1 | accento | spesso | $v = (-3, 1)$ | n
```

Le dispense scrivono spesso i vettori in **verticale**:

$$x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}.$$

Questa scrittura si chiama **vettore colonna**, e i numeri $x_1, \dots, x_n$ sono le **coordinate** di $x$. Il motivo della scrittura verticale si capirà con il prodotto tra matrici (lezione L08). Per risparmiare spazio, in questi appunti i vettori compaiono spesso anche in riga, come $(1, 2, 3)$: è lo stesso vettore.

> [!NOTA] La scrittura degli appelli
> Negli appelli d'esame un vettore colonna scritto in riga compare spesso come ${}^t(1, 2, 3)$, con una piccola $t$ in alto a sinistra: la $t$ sta per «trasposto» e vuol dire «questa riga, messa in verticale». La trasposta si vede nella lezione L08.

### La somma di vettori (pp. 20–21)

> [!DEF] Somma di vettori (p. 20)
> Lo spazio $\R^n$ è dotato di una somma definita **componente per componente**: se
> $$x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}, \qquad y = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix}, \qquad \text{allora} \qquad x + y = \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix}.$$

In parole: si sommano le prime coordinate tra loro, le seconde tra loro, e così via.

> [!ESEMPIO] · somme in $\R^2$ e in $\R^4$
> $$\begin{pmatrix} 1 \\ 2 \end{pmatrix} + \begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 + 3 \\ 2 + 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}, \qquad \begin{pmatrix} 1 \\ 0 \\ -2 \\ 5 \end{pmatrix} + \begin{pmatrix} 3 \\ 1 \\ 2 \\ -5 \end{pmatrix} = \begin{pmatrix} 4 \\ 1 \\ 0 \\ 0 \end{pmatrix}.$$

In $\R^2$ questa somma coincide con la **regola del parallelogramma**, quella che in fisica si usa per sommare le forze. Disegna $v$ e $w$ partendo dall'origine e completa il parallelogramma che li ha come lati: la diagonale che parte dall'origine è $v + w$. Oppure, che è lo stesso: sposta $w$ in modo che parta dalla punta di $v$, e la sua punta arriva proprio in $v + w$.

```grafico
titolo: La somma $v + w$ è la diagonale del parallelogramma costruito su $v = (1, 2)$ e $w = (3, 1)$
x: -1 5
y: -1 4
poligono: 0 0 1 2 4 3 3 1 | ambra | tenue
segmento: 1 2 4 3 | blu | tratteggio
segmento: 3 1 4 3 | accento | tratteggio
vettore: 4 3 | ambra | spesso | $v + w = (4, 3)$ | n
vettore: 1 2 | accento | spesso | $v$ | no
vettore: 3 1 | blu | spesso | $w$ | se
```

> [!TRAPPOLA] Solo vettori con lo stesso numero di coordinate
> Si sommano solo vettori dello **stesso** $\R^n$: $(1, 2) + (1, 2, 3)$ non ha senso, perché alla terza coordinata manca il compagno.

### Il prodotto per scalare (p. 21)

> [!DEF] Prodotto per scalare (p. 21)
> Dato $x \in \R^n$ e uno scalare $\lambda \in \R$, definiamo
> $$\lambda x = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix}.$$
> Il numero reale $\lambda$ è detto **scalare**; l'operazione $x \mapsto \lambda x$ è detta **prodotto per scalare**.

Pezzo per pezzo:

- $\lambda$ è la lettera greca *lambda*: indica un **numero**, non un vettore. Per distinguerli, i numeri che moltiplicano i vettori si chiamano **scalari**.
- Ogni coordinata viene moltiplicata per lo **stesso** numero $\lambda$.
- $x \mapsto \lambda x$ si legge «$x$ va in $\lambda x$»: a ogni vettore l'operazione associa il suo multiplo.

Geometricamente, $\lambda x$ si ottiene **allungando o accorciando** $x$ di un fattore $|\lambda|$ e, se $\lambda < 0$, **invertendone il verso**. Prova con $v = (1, 2)$:

| $\lambda$ | $\lambda v$ | che cosa succede |
|---:|---|---|
| $2$ | $(2, 4)$ | stesso verso, lungo il doppio |
| $\frac 12$ | $(\frac 12, 1)$ | stesso verso, lungo la metà |
| $1$ | $(1, 2)$ | resta uguale |
| $0$ | $(0, 0)$ | diventa il vettore nullo |
| $-1$ | $(-1, -2)$ | verso opposto, stessa lunghezza: è l'**opposto** $-v$ |
| $-2$ | $(-2, -4)$ | verso opposto, lungo il doppio |

Tutti i multipli di $v$ stanno sulla **retta** che passa per l'origine e per $v$, qui la retta $y = 2x$. Questa osservazione torna nella lezione L06, dove l'insieme dei multipli di $v$ si chiamerà $\Span(v)$.

```grafico
titolo: I multipli di $v = (1, 2)$ stanno tutti sulla retta $y = 2x$
x: -4 4
y: -5 5
retta: 0 0 2.3 4.6 | grigio | tratteggio | $y = 2x$ | e
vettore: 2 4 | blu | $2v$ | e
vettore: 1 2 | accento | spesso | $v$ | o
vettore: -2 -4 | rosa | $-2v$ | e
```

Prova tu. Nello strumento qui sotto puoi trascinare le punte di $u$ e $v$. Nel modo «u + v» vedi il parallelogramma; nel modo «multiplo» sposta il cursore $\lambda$: con $\lambda = -2$ ritrovi la Figura 6 delle dispense, con $\lambda$ tra $0$ e $1$ il vettore si accorcia, con $\lambda$ negativo si ribalta, con $\lambda = 0$ si riduce all'origine.

```widget vettori
titolo: Somma e prodotto per scalare nel piano
u: 1 2
v: 3 1
modo: somma
modi: somma multiplo
lambda: -2
```

### Le regole di calcolo di $\R^n$

Le due operazioni di $\R^n$ rispettano otto regole. Le dispense le richiamano nella Definizione 5.4 («le stesse proprietà delle corrispondenti operazioni dello spazio euclideo»); il libro di Martelli le elenca nel §2.1.5. Eccole, controllate con $v = (1, 2)$, $w = (3, -1)$, $u = (0, 5)$, $\lambda = 2$ e $\mu = 3$:

| Regola | Controllo con i numeri |
|---|---|
| $v + w = w + v$ | $(1, 2) + (3, -1) = (4, 1) = (3, -1) + (1, 2)$ |
| $(v + w) + u = v + (w + u)$ | $(4, 1) + (0, 5) = (4, 6)$ e $(1, 2) + (3, 4) = (4, 6)$ |
| $v + 0 = v$ | $(1, 2) + (0, 0) = (1, 2)$ |
| $v + (-v) = 0$ | $(1, 2) + (-1, -2) = (0, 0)$ |
| $\lambda(v + w) = \lambda v + \lambda w$ | $2 \cdot (4, 1) = (8, 2)$ e $(2, 4) + (6, -2) = (8, 2)$ |
| $(\lambda + \mu) v = \lambda v + \mu v$ | $5 \cdot (1, 2) = (5, 10)$ e $(2, 4) + (3, 6) = (5, 10)$ |
| $(\lambda\mu) v = \lambda(\mu v)$ | $6 \cdot (1, 2) = (6, 12)$ e $2 \cdot (3, 6) = (6, 12)$ |
| $1v = v$ | $1 \cdot (1, 2) = (1, 2)$ |

Ogni regola vale perché vale per i numeri reali, una coordinata alla volta. Sono esattamente le regole che la definizione di spazio vettoriale chiederà a ogni insieme che voglia «comportarsi come $\R^n$».

## Gruppi (pp. 21–22)

Per dire che cos'è uno spazio vettoriale servono due strutture algebriche: il **gruppo**, per i vettori con la somma, e il **campo**, per gli scalari. Si comincia dal gruppo.

Pensa agli interi con la somma. Sommando due interi ottieni un intero. Lo $0$ non cambia niente: $0 + 7 = 7$. Ogni intero ha un opposto che «annulla» la somma: $7 + (-7) = 0$. E puoi spostare le parentesi: $(2 + 3) + 4 = 2 + (3 + 4) = 9$. Con i naturali invece qualcosa si rompe: l'equazione $3 + x = 0$ non ha soluzione in $\N$, perché manca l'opposto di $3$. La definizione di gruppo mette nero su bianco proprio queste proprietà.

> [!DEF] 5.2 · Gruppo
> Un **gruppo** è un insieme $G$ dotato di un'operazione binaria, cioè di una funzione che associa a ogni coppia $a, b$ di elementi in $G$ un nuovo elemento di $G$ che indichiamo con $a * b$. Il simbolo $*$ indica l'operazione binaria. L'operazione deve soddisfare i seguenti tre assiomi:
> 1. $\exists\, e \in G : e * a = a * e = a,\ \forall a \in G$ (esistenza dell'elemento neutro $e$);
> 2. $a * (b * c) = (a * b) * c,\ \forall a, b, c \in G$ (proprietà associativa);
> 3. $\forall a \in G,\ \exists\, a' \in G : a * a' = a' * a = e$ (esistenza dell'inverso).
>
> Il gruppo $G$ è **commutativo** se vale anche la proprietà commutativa $a * b = b * a,\ \forall a, b \in G$.

Pezzo per pezzo:

- **Operazione binaria**: prende due elementi di $G$ e ne restituisce uno **ancora in $G$**. Se il risultato può uscire da $G$, non è un'operazione su $G$: la sottrazione non è un'operazione su $\N$, perché $2 - 5 = -3 \notin \N$.
- Il simbolo $*$ è un segnaposto: nei casi concreti è la somma $+$, il prodotto $\cdot$ o la composizione di funzioni $\circ$.
- **Assioma 1**: c'è un elemento $e$ che non cambia niente, lo **stesso** per tutti gli $a$. Per la somma è $0$, per il prodotto è $1$.
- **Assioma 2**: le parentesi si possono spostare, quindi anche togliere: $a * b * c$ ha un solo significato.
- **Assioma 3**: ogni $a$ ha un «annullatore» $a'$, che dipende da $a$: combinato con $a$ restituisce $e$. Per la somma $a'$ è l'opposto $-a$, per il prodotto è l'inverso $\frac 1a$.
- **Commutativo**: l'ordine non conta. Non tutti i gruppi sono commutativi (riquadro più sotto), ma i gruppi di questo corso con la somma lo sono tutti.

Ecco gli esempi e i controesempi delle dispense, con il motivo.

| Insieme e operazione | neutro $e$ | inverso di $a$ | gruppo commutativo? |
|---|---|---|---|
| $(\Z, +)$ | $0$ | $-a$ | sì |
| $(\Q, +)$, $(\R, +)$, $(\C, +)$ | $0$ | $-a$ | sì |
| $(\Q \setminus \{0\}, \cdot)$, $(\R \setminus \{0\}, \cdot)$, $(\C \setminus \{0\}, \cdot)$ | $1$ | $a^{-1} = \frac 1a$ | sì |
| $(\N, +)$ | $0$ | manca: per $a = 1$ servirebbe $-1 \notin \N$ | **no**, fallisce l'assioma 3 |
| $(\Z, \cdot)$ e $(\Z \setminus \{0\}, \cdot)$ | $1$ | manca: per $a = 2$ servirebbe $\frac 12 \notin \Z$ | **no**, fallisce l'assioma 3 |

> [!ESEMPIO] · i conti in $(\Q \setminus \{0\}, \cdot)$
> - L'operazione resta nell'insieme: il prodotto di due frazioni diverse da $0$ è una frazione diversa da $0$, per esempio $\frac 23 \cdot \left(-\frac 94\right) = -\frac{18}{12} = -\frac 32$.
> - Il neutro è $e = 1$: $1 \cdot \frac 23 = \frac 23$.
> - L'inverso di $-\frac 34$ è $-\frac 43$, perché $\left(-\frac 34\right)\left(-\frac 43\right) = \frac{12}{12} = 1$.
> - Lo $0$ va tolto perché **non ha inverso**: $0 \cdot x = 0 \neq 1$ per ogni $x$.

> [!TRAPPOLA] Togliere lo zero serve per il prodotto, non per la somma
> $\Q \setminus \{0\}$ è un gruppo con il prodotto, ma **non** con la somma: $1 + (-1) = 0$ esce dall'insieme, e manca l'elemento neutro $0$.

> [!OLTRE] · unicità, semplificazione e un gruppo non commutativo
> Dal libro di Martelli (§1.5.1), tre fatti utili.
> - **L'inverso è unico.** Se $a'$ e $a''$ sono entrambi inversi di $a$, allora $a' = a' * e = a' * (a * a'') = (a' * a) * a'' = e * a'' = a''$.
> - **Si può semplificare.** Da $a * b = a * c$ segue $b = c$: basta combinare a sinistra entrambi i membri con l'inverso di $a$ e usare l'associatività. Con la somma: da $v + x = v + y$ segue $x = y$. Servirà tra poco, nella Proposizione 5.5.
> - **Un gruppo non commutativo.** Le permutazioni di $\{1, 2, 3\}$ con la composizione formano un gruppo (il gruppo simmetrico $S_3$, che si studia in Matematica Discreta) in cui l'ordine conta: in generale $\sigma \circ \tau \neq \tau \circ \sigma$.

## Campi (p. 22)

Negli insiemi numerici $\Z$, $\Q$, $\R$ e $\C$ ci sono **due** operazioni, $+$ e $\cdot$. La struttura che le mette insieme è il **campo**. L'idea: un campo è un insieme in cui puoi fare **le quattro operazioni** con le solite regole, dividendo solo per elementi diversi da $0$. In $\Q$ l'equazione $2x = 1$ ha la soluzione $x = \frac 12$; in $\Z$ no.

> [!DEF] 5.3 · Campo
> Un **campo** è un insieme $A$ dotato di due operazioni binarie $+$ e $\cdot$ che soddisfano questi assiomi:
> 1. $A$ è un gruppo commutativo con l'operazione $+$, con elemento neutro $0_A$;
> 2. $A \setminus \{0_A\}$ è un gruppo commutativo con l'operazione $\cdot$, con elemento neutro $1_A$;
> 3. vale la proprietà distributiva $a \cdot (b + c) = (a \cdot b) + (a \cdot c),\ \forall a, b, c \in A$.

Pezzo per pezzo:

- **Assioma 1**: contiene quattro regole della somma. C'è lo zero $0_A$, ogni elemento ha l'opposto, la somma è associativa e commutativa.
- **Assioma 2**: contiene quattro regole del prodotto, ma **solo per gli elementi diversi da zero**. Il prodotto di due elementi non nulli è non nullo, c'è l'uno $1_A$ (che quindi è diverso da $0_A$), ogni elemento **non nullo** ha l'inverso, il prodotto è associativo e commutativo.
- **Assioma 3**: collega le due operazioni.
- Sono le stesse regole delle nove proprietà di $\R$ della lezione L01 (Proposizione 1.5), raggruppate in modo diverso: le proprietà 1–4 stanno nell'assioma 1, le 5–8 nell'assioma 2, la 9 è l'assioma 3.

| Insieme, con $+$ e $\cdot$ | è un campo? | perché |
|---|---|---|
| $\Q$, $\R$, $\C$ | sì | valgono tutte le regole; per esempio l'inverso di $\frac ab \neq 0$ è $\frac ba$ |
| $\Z$ | no | $2$ non ha inverso per il prodotto: $\frac 12 \notin \Z$ |
| $\N$ | no | già la somma non forma un gruppo: manca $-1$ |
| $\R \setminus \{0\}$ | no | la somma esce dall'insieme: $1 + (-1) = 0$ |
| $\{0, 1\}$ con $1 + 1 = 0$ | sì | è l'Esercizio 5.9, qui sotto |

### Un campo con due soli elementi

Nell'Esercizio 5.9 le dispense definiscono su $\K = \{0, 1\}$ queste due operazioni:

| $+$ | $0$ | $1$ |
|---|---|---|
| $0$ | $0$ | $1$ |
| $1$ | $1$ | $0$ |

| $\cdot$ | $0$ | $1$ |
|---|---|---|
| $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ |

L'unica regola insolita è $1 + 1 = 0$. Leggi $0$ come «pari» e $1$ come «dispari»: dispari più dispari fa pari, dispari per dispari fa dispari. Le tabelle sono le regole della parità, e per questo valgono tutte le proprietà di campo (la verifica è nell'esercizio 4). In informatica è il campo dei bit: la somma è lo XOR, il prodotto è l'AND.

> [!NOTA] Il campo del corso
> Nel corso il campo è quasi sempre $\K = \R$ oppure $\K = \C$. La lettera $\K$ indica «un campo qualsiasi»: ciò che si dimostra per $\K$ vale per entrambi.

## Spazi vettoriali (pp. 22–23)

Ora ci sono tutti gli ingredienti. In $\R^n$ ci sono due operazioni, somma e prodotto per scalare, con le otto regole della tabella vista sopra. La definizione di spazio vettoriale dice: **qualsiasi** insieme con due operazioni di questo tipo, che rispettano le stesse regole, è uno spazio vettoriale.

> [!DEF] 5.4 · Spazio vettoriale
> Fissiamo un campo $\K$. Questo per noi è generalmente o il campo $\K = \R$ dei numeri reali o il campo $\K = \C$ dei numeri complessi (però per la definizione può essere qualsiasi campo). Gli elementi di $\K$ sono detti **scalari**. Uno **spazio vettoriale** su $\K$ è un insieme $V$ di elementi, detti **vettori**, dotato di due operazioni:
> - un'operazione detta **somma** che associa a due vettori $v, w \in V$ un terzo vettore $v + w \in V$;
> - un'operazione detta **prodotto per scalare** che associa a un vettore $v \in V$ e a uno scalare $\lambda \in \K$ un vettore $\lambda v \in V$.
>
> Queste due operazioni devono soddisfare le stesse proprietà delle corrispondenti operazioni dello spazio euclideo, cioè:
> 1. l'insieme $V$ è un gruppo commutativo con la somma $+$;
> 2. $\lambda(v + w) = \lambda v + \lambda w$;
> 3. $(\lambda + \mu)v = \lambda v + \mu v$;
> 4. $(\lambda\mu)v = \lambda(\mu v)$;
> 5. $1v = v$.
>
> Le proprietà devono valere per ogni $v, w \in V$ e ogni $\lambda, \mu \in \K$.

Pezzo per pezzo:

- **Il campo $\K$** fornisce i numeri per cui si moltiplica: gli scalari. Se cambi il campo cambia lo spazio vettoriale, anche con lo stesso insieme $V$ (lo vedrai con $\C$, che è uno spazio vettoriale sia su $\C$ sia su $\R$).
- **I vettori** possono essere oggetti di qualsiasi tipo: frecce, polinomi, funzioni, matrici. Conta solo come si comportano le operazioni.
- **Le due operazioni** devono dare risultati **dentro $V$**: $v + w \in V$ e $\lambda v \in V$. È la prima cosa da controllare, ed è il punto in cui cade la maggior parte degli insiemi che *non* sono spazi vettoriali.
- **Assioma 1**, «gruppo commutativo con la somma», contiene quattro regole: la somma è associativa, $(u + v) + w = u + (v + w)$; esiste un vettore nullo $0_V$ con $v + 0_V = v$; ogni $v$ ha un opposto $-v$ con $v + (-v) = 0_V$; la somma è commutativa, $v + w = w + v$.
- **Assioma 2**: uno scalare si distribuisce su una somma di **vettori**.
- **Assioma 3**: un vettore si distribuisce su una somma di **scalari**. Attenzione: a sinistra il $+$ è la somma in $\K$, a destra è la somma in $V$. Stesso simbolo, due operazioni diverse.
- **Assioma 4**: a sinistra $\lambda\mu$ è un prodotto tra numeri, fatto in $\K$; a destra si moltiplica prima $v$ per $\mu$ e poi il risultato per $\lambda$.
- **Assioma 5**: lo scalare $1$ del campo lascia i vettori come sono. Sembra scontato, ma non segue dagli altri (riquadro qui sotto).
- In tutto sono **otto regole**, più la richiesta che le operazioni non escano da $V$: le stesse della tabella di $\R^n$.

> [!TRAPPOLA] Tra due vettori non c'è un prodotto
> In uno spazio vettoriale si sommano due vettori e si moltiplica un vettore per uno **scalare**. Un prodotto «vettore per vettore» non fa parte della definizione. Il prodotto scalare tra vettori arriverà nella lezione L19, ed è un'altra cosa.

> [!OLTRE] · perché serve l'assioma 5
> Prendi $V = \R^2$ con la somma usuale, ma con un prodotto per scalare «pigro» che dà sempre il vettore nullo: $\lambda \star v = 0$ per ogni $\lambda$ e ogni $v$. Gli assiomi 1–4 valgono: per esempio $\lambda \star (v + w) = 0 = 0 + 0 = \lambda \star v + \lambda \star w$. L'assioma 5 invece fallisce: $1 \star (1, 2) = (0, 0) \neq (1, 2)$. Quindi l'assioma 5 non è una conseguenza degli altri: senza di lui il «prodotto per scalare» potrebbe cancellare tutta l'informazione. Un altro esempio, in cui fallisce solo l'assioma 5, è l'esercizio 9.

### L'origine e i due zeri (p. 23)

L'elemento neutro del gruppo $(V, +)$ si indica con $0$ (o $0_V$) e si chiama **origine** dello spazio vettoriale $V$. Non va confuso con lo zero $0$ del campo $\K$: le dispense avvertono che nel corso il simbolo $0$ indica cose diverse, e il significato si capisce dal contesto.

| Spazio | lo zero del campo | l'origine $0_V$ |
|---|---|---|
| $\R^3$ | il numero $0$ | il vettore $(0, 0, 0)$ |
| $\C^2$ | il numero complesso $0$ | il vettore $(0, 0)$ |
| $\K[x]$ (polinomi) | il numero $0$ | il polinomio nullo, con tutti i coefficienti uguali a $0$ |
| funzioni $[0, 1] \to \R$ | il numero $0$ | la funzione che vale $0$ in ogni punto |

Dagli assiomi si ricava subito un primo risultato.

> [!PROP] 5.5
> Vale la relazione $0v = 0$.

Il primo $0$ è l'elemento neutro di $\K$ (un numero), il secondo è l'origine di $V$ (un vettore). In parole: **moltiplicando un vettore qualsiasi per lo scalare zero si ottiene il vettore nullo**. Per esempio $0 \cdot (3, -1) = (0, 0)$ in $\R^2$.

In $\R^n$ lo si controlla coordinata per coordinata. Il punto della proposizione è che vale in **ogni** spazio vettoriale, e si dimostra usando solo gli assiomi. La dimostrazione delle dispense sta in una riga; eccola con tutti i passaggi.

1. Nel campo vale $0 + 0 = 0$. Quindi $0v = (0 + 0)v$.
2. Per l'assioma 3, $(0 + 0)v = 0v + 0v$. Mettendo insieme: $0v = 0v + 0v$.
3. Chiama $w = 0v$: hai $w = w + w$. Somma a entrambi i membri l'opposto $-w$, che esiste per l'assioma 1:
   $$w + (-w) = (w + w) + (-w).$$
4. A sinistra c'è $0_V$. A destra, per la proprietà associativa, $(w + w) + (-w) = w + (w + (-w)) = w + 0_V = w$.
5. Quindi $0_V = w$, cioè $0v = 0_V$. $\square$

È il «semplificando» delle dispense: in un gruppo si semplifica sommando l'opposto a entrambi i membri.

> [!OLTRE] · altre tre conseguenze degli assiomi
> Con la stessa tecnica si dimostra (esercizio 8) che in ogni spazio vettoriale:
> - $\lambda 0_V = 0_V$ per ogni scalare $\lambda$;
> - $(-1)v = -v$: moltiplicare per $-1$ dà l'opposto;
> - se $\lambda v = 0_V$, allora $\lambda = 0$ oppure $v = 0_V$.
>
> L'ultima usa il fatto che in un campo ogni $\lambda \neq 0$ ha un inverso: è uno dei motivi per cui gli scalari devono stare in un campo.

## Esempi di spazi vettoriali (pp. 23–25)

Le dispense presentano cinque esempi. Per ognuno bisogna dire chi sono i vettori, come si sommano e come si moltiplicano per uno scalare; poi si controllano gli assiomi (è l'Esercizio 5.6).

### Il campo $\K$ su se stesso (p. 23)

Se $(\K, +, \cdot)$ è un campo, allora è anche uno spazio vettoriale su se stesso. I vettori sono gli elementi di $\K$, e anche gli scalari; la somma di vettori è la somma di $\K$ e il prodotto per scalare è il prodotto di $\K$. Per $\K = \R$ i vettori sono numeri reali: è $\R = \R^1$, la retta.

Le dispense spiegano perché valgono i cinque assiomi. Nella terza colonna c'è un controllo con $\lambda = 2$, $\mu = 3$, $v = 4$ e $w = 5$.

| Assioma | perché vale | con i numeri |
|---|---|---|
| 1. $(\K, +)$ gruppo commutativo | è l'assioma 1 del campo | $4 + 5 = 5 + 4 = 9$ |
| 2. $\lambda(v + w) = \lambda v + \lambda w$ | proprietà distributiva del campo | $2 \cdot 9 = 18 = 8 + 10$ |
| 3. $(\lambda + \mu)v = \lambda v + \mu v$ | commutatività e distributività | $5 \cdot 4 = 20 = 8 + 12$ |
| 4. $(\lambda\mu)v = \lambda(\mu v)$ | associatività del prodotto | $6 \cdot 4 = 24 = 2 \cdot 12$ |
| 5. $1v = v$ | $1$ è l'elemento neutro del prodotto | $1 \cdot 4 = 4$ |

### Lo spazio $\K^n$ (pp. 23–24)

L'esempio principale di spazio vettoriale su $\R$ è lo spazio euclideo $\R^n$. Per un campo qualsiasi si definisce $\K^n$ allo stesso modo.

> [!DEF] Lo spazio $\K^n$ (pp. 23–24)
> Sia $n \ge 1$ un numero naturale. Lo spazio $\K^n$ è l'insieme delle sequenze $(x_1, \dots, x_n)$ di numeri in $\K$, descritte generalmente come vettori colonna. La somma e la moltiplicazione per scalare sono definite termine a termine:
> $$\begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} + \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} = \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix}, \qquad \lambda \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix}.$$

Con $\K = \C$ si ottiene $\C^n$: sono complessi sia le coordinate sia gli scalari. I conti si fanno con le regole della lezione L02, ricordando che $i^2 = -1$.

> [!ESEMPIO] · i due conti delle dispense in $\C^2$
> **Somma.** Riga per riga, si sommano le parti reali tra loro e le parti immaginarie tra loro:
> $$\begin{pmatrix} 1 + i \\ -2 \end{pmatrix} + \begin{pmatrix} 3i \\ 1 - i \end{pmatrix} = \begin{pmatrix} 1 + (1 + 3)i \\ (-2 + 1) - i \end{pmatrix} = \begin{pmatrix} 1 + 4i \\ -1 - i \end{pmatrix}.$$
> **Prodotto per scalare.** Lo scalare $2 + i$ moltiplica entrambe le coordinate:
> $$(2 + i)\begin{pmatrix} 3 \\ 1 - i \end{pmatrix} = \begin{pmatrix} (2 + i) \cdot 3 \\ (2 + i)(1 - i) \end{pmatrix} = \begin{pmatrix} 6 + 3i \\ 3 - i \end{pmatrix}.$$
> Il secondo conto per esteso: $(2 + i)(1 - i) = 2 - 2i + i - i^2 = 2 - i - (-1) = 3 - i$.

Resta da controllare che $\K^n$ sia davvero uno spazio vettoriale. Le dispense controllano l'assioma 2, e il loro metodo è quello da imitare per tutti gli altri:

$$\begin{aligned} \lambda(x + y) &= \lambda \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix} = \begin{pmatrix} \lambda(x_1 + y_1) \\ \vdots \\ \lambda(x_n + y_n) \end{pmatrix} \\ &= \begin{pmatrix} \lambda x_1 + \lambda y_1 \\ \vdots \\ \lambda x_n + \lambda y_n \end{pmatrix} = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix} + \begin{pmatrix} \lambda y_1 \\ \vdots \\ \lambda y_n \end{pmatrix} = \lambda x + \lambda y. \end{aligned}$$

Ogni uguaglianza ha il suo motivo:

1. la definizione della somma: $x + y$ ha coordinate $x_k + y_k$;
2. la definizione del prodotto per scalare: ogni coordinata va moltiplicata per $\lambda$;
3. la proprietà distributiva **nel campo**, in ognuna delle $n$ coordinate: $\lambda(x_k + y_k) = \lambda x_k + \lambda y_k$;
4. la definizione della somma, letta al contrario;
5. la definizione del prodotto per scalare, letta al contrario.

L'idea generale da portarsi via: **ogni assioma di $\K^n$ si riduce alla stessa proprietà in $\K$, una coordinata alla volta.**

> [!TRAPPOLA] In $\C^n$ gli scalari sono complessi
> In $\C^2$ puoi moltiplicare per $i$: $i \cdot (1, 0) = (i, 0)$. In $\R^2$ no: gli scalari sono solo reali, e $(i, 0) \notin \R^2$. Per questo $\R^2$, con le operazioni usuali, **non** è uno spazio vettoriale su $\C$.

### Lo spazio delle successioni (p. 24)

Invece di vettori con $n$ componenti si possono prendere **successioni infinite** $(x_n)_{n \in \N} = (x_0, x_1, x_2, \dots)$, con ogni $x_k \in \K$: vettori con infinite coordinate. Somma e prodotto per scalare si fanno di nuovo componente per componente:

$$(x_n)_{n \in \N} + (y_n)_{n \in \N} = (x_n + y_n)_{n \in \N}, \qquad \lambda (x_n)_{n \in \N} = (\lambda x_n)_{n \in \N}.$$

Con queste operazioni si ottiene uno spazio vettoriale.

> [!ESEMPIO] · due successioni reali
> Siano $x = (1, 2, 3, 4, \dots)$, cioè $x_n = n + 1$, e $y = (1, 1, 1, 1, \dots)$, la successione costante. Allora
> $$x + y = (2, 3, 4, 5, \dots), \qquad 3x = (3, 6, 9, 12, \dots), \qquad x + (-1)y = (0, 1, 2, 3, \dots).$$
> Il vettore nullo è la successione $(0, 0, 0, \dots)$ e l'opposto di $x$ è $(-1, -2, -3, \dots)$.

### Le funzioni $[0, 1] \to \K$ (p. 24)

Nelle successioni a ogni $n \in \N$ corrisponde un numero $x_n$. Si può fare lo stesso con **ogni** numero reale $x \in [0, 1]$: a ciascuno si associa un elemento $f(x) \in \K$, e si ottiene una funzione $f : [0, 1] \to \K$. Somma e prodotto per scalare si definiscono **punto per punto**:

$$(f + g)(x) = f(x) + g(x), \qquad (\lambda f)(x) = \lambda f(x), \qquad \forall x \in [0, 1].$$

Pezzo per pezzo:

- $f + g$ è una **nuova funzione**: per sapere quanto vale in un punto $x$ calcoli $f(x)$ e $g(x)$ e li sommi. Le parentesi in $(f + g)(x)$ dicono proprio questo: prima si forma la funzione $f + g$, poi la si valuta in $x$.
- $\lambda f$ è la funzione che in ogni punto vale $\lambda$ volte $f$.
- Il vettore nullo è la **funzione nulla**, che vale $0$ in ogni punto; l'opposto di $f$ è la funzione $x \mapsto -f(x)$.
- Una funzione è come un vettore con una coordinata per ogni punto di $[0, 1]$: i suoi valori.

> [!ESEMPIO] · somma di due funzioni, punto per punto
> Siano $f(x) = x^2$ e $g(x) = 1 - x$. Allora $(f + g)(x) = x^2 - x + 1$ e $(3f)(x) = 3x^2$. In alcuni punti:
>
> | $x$ | $0$ | $\frac 14$ | $\frac 12$ | $1$ |
> |---|---|---|---|---|
> | $f(x)$ | $0$ | $\frac 1{16}$ | $\frac 14$ | $1$ |
> | $g(x)$ | $1$ | $\frac 34$ | $\frac 12$ | $0$ |
> | $(f + g)(x)$ | $1$ | $\frac{13}{16}$ | $\frac 34$ | $1$ |
> | $(3f)(x)$ | $0$ | $\frac 3{16}$ | $\frac 34$ | $3$ |
>
> Ogni colonna si somma come una coordinata di $\K^n$.

> [!OLTRE] · sono tutte funzioni
> Il libro di Martelli (§2.2.4) riunisce gli ultimi esempi in uno solo: per un insieme qualsiasi $X$, le funzioni $X \to \K$ formano uno spazio vettoriale $F(X, \K)$. Con $X = \{1, \dots, n\}$ si ritrova $\K^n$ (una funzione su $n$ punti è una lista di $n$ numeri), con $X = \N$ le successioni, con $X = [0, 1]$ le funzioni delle dispense.

### Lo spazio $\K[x]$ dei polinomi (p. 25)

Fissato un campo $\K$, $\K[x]$ è l'insieme di tutti i polinomi con coefficienti in $\K$ (lezione L04). Due polinomi si sommano, e moltiplicando un polinomio per uno scalare si ottiene ancora un polinomio.

> [!ESEMPIO] · i conti delle dispense
> Per sommare si raccolgono i termini dello stesso grado:
> $$(x^3 - 2x + 1) + (4x^4 + x - 3) = 4x^4 + x^3 + (-2 + 1)x + (1 - 3) = 4x^4 + x^3 - x - 2.$$
> Per moltiplicare per uno scalare si moltiplica ogni coefficiente:
> $$3(x^3 - 2x) = 3x^3 - 6x.$$

Se scrivi i coefficienti in una tabella, grado per grado, la somma diventa proprio una somma **componente per componente**, come in $\K^n$:

| | $x^4$ | $x^3$ | $x^2$ | $x$ | $1$ |
|---|---:|---:|---:|---:|---:|
| $x^3 - 2x + 1$ | $0$ | $1$ | $0$ | $-2$ | $1$ |
| $4x^4 + x - 3$ | $4$ | $0$ | $0$ | $1$ | $-3$ |
| somma | $4$ | $1$ | $0$ | $-1$ | $-2$ |

Il vettore nullo è il **polinomio nullo**, con tutti i coefficienti uguali a $0$, e l'opposto di $p(x)$ è $-p(x)$, con tutti i coefficienti cambiati di segno. Gli assiomi 1–5 si controllano coefficiente per coefficiente (Esercizio 5.6).

> [!TRAPPOLA] Il prodotto tra polinomi non c'entra
> Due polinomi si possono anche moltiplicare tra loro, ma questa operazione **non** fa parte della struttura di spazio vettoriale: in $\K[x]$ contano solo la somma e il prodotto per uno scalare.

> [!TRAPPOLA] Grado al massimo $k$ sì, grado esattamente $k$ no
> I polinomi di grado **al massimo** $k$ formano uno spazio vettoriale, indicato con $\K_k[x]$ (Esercizio 5.7): per esempio $\R_2[x] = \{ax^2 + bx + c \mid a, b, c \in \R\}$. I polinomi di grado **esattamente** $2$ invece no: $x^2$ e $-x^2 + x$ hanno grado $2$, ma la loro somma $x$ ha grado $1$. E il polinomio nullo non ha grado $2$.

### Tutti gli esempi a colpo d'occhio

| Spazio | un vettore è | la somma si fa | $\lambda v$ si fa | vettore nullo |
|---|---|---|---|---|
| $\K$ | un numero | come in $\K$ | come in $\K$ | $0$ |
| $\K^n$ | una colonna di $n$ numeri | coordinata per coordinata | coordinata per coordinata | $(0, \dots, 0)$ |
| successioni | una lista infinita $(x_n)$ | termine per termine | termine per termine | $(0, 0, 0, \dots)$ |
| funzioni $[0, 1] \to \K$ | una funzione $f$ | punto per punto | punto per punto | la funzione nulla |
| $\K[x]$ | un polinomio | grado per grado | coefficiente per coefficiente | il polinomio nullo |

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: gruppi, anelli e campi nel **§1.5 «Strutture algebriche»** (pp. 34–36); lo spazio euclideo, la somma e il prodotto per scalare nel **§2.1** (pp. 43–46); la definizione di spazio vettoriale, la Proposizione 2.2.1 ($0v = 0$) e gli esempi $\K^n$, $\K[x]$ e $F(X, \K)$ nei **§2.2.1–2.2.4** (pp. 46–49). Le matrici (§2.2.5) sono nella lezione L06.

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla con 5 risposte (servono almeno 6 punti per far correggere i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate scritte a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **Riconoscere uno spazio vettoriale.** Nei quiz compaiono domande di teoria con cinque risposte motivate, come questa.

> [!ESAME] Appello del 07/02/2025, domanda 2
> «Identificate la risposta corretta alla domanda “$\C$ ammette una struttura di spazio vettoriale su $\R$?”»: (a) No, poiché $\C$ è già uno spazio vettoriale su $\C$ stesso. (b) Sì, perché ogni campo è uno spazio vettoriale su $\R$. (c) No, ma poiché $\C$ contiene $\R$, $\R$ è uno spazio vettoriale su $\C$. (d) No, in quanto $\C$ e $\R$ sono campi diversi. (e) Sì, $\R$ è sottoinsieme di $\C$ e le operazioni $+$, $\cdot$ su $\R$ sono le stesse che in $\C$.
>
> **Soluzione.** È la (e). I vettori sono i numeri complessi e gli scalari i reali; la somma è quella di $\C$ e il prodotto per scalare $\lambda z$ è il prodotto in $\C$ di un reale per un complesso, che è ancora complesso: $\lambda(a + bi) = \lambda a + (\lambda b)i$. Gli assiomi 1–5 valgono perché sono casi particolari delle proprietà del campo $\C$, come per «$\K$ su se stesso» (Esercizio 5.8). Le altre: (a) e (d) dicono cose vere, ma non escludono la struttura su $\R$; (b) è falsa, per esempio $\Q$ non è uno spazio vettoriale su $\R$ perché $\sqrt 2 \cdot 1 \notin \Q$; (c) è falsa, perché $i \cdot 1 = i \notin \R$.

2. **Scartare l'opzione «non è uno spazio vettoriale».** Nelle domande sulla dimensione compare spesso una risposta trappola di questo tipo: «$T^s(3)$ non ha una dimensione perché non è uno spazio vettoriale» (24/01/2024, domanda 5), «$S(3)$ non ha una dimensione perché non è uno spazio vettoriale» e «$X$ non è necessariamente uno spazio vettoriale», con $X = \Span(v_1, v_2, v_3)$ (15/01/2026, domande 4 e 3). Per scartarle bisogna sapere quali insiemi sono spazi vettoriali: le matrici triangolari o simmetriche e gli Span lo sono sempre (lezione L06).
3. **Sottospazi.** La domanda più frequente di questa parte è «quale di questi insiemi è (o non è) un sottospazio?»: appelli dell'08/02/2024 (domanda 2), del 03/06/2025 (domanda 2), del 05/02/2026 (domanda 2) e del 07/09/2026 (domanda 6). Si risolve con i controlli di questa lezione (lo zero c'è? la somma e i multipli restano dentro?) e con la definizione di sottospazio della lezione L06.
4. **Conti componente per componente** in $\K^n$, compresi quelli con i complessi in $\C^n$, e con i polinomi: servono in quasi tutti gli esercizi del corso.

> [!METODO] · «È uno spazio vettoriale?» in quattro controlli
> 1. **Chi è chi.** Scrivi il campo degli scalari $\K$, l'insieme $V$ e le due operazioni.
> 2. **Le operazioni restano in $V$?** Prova con elementi concreti: la somma di due elementi e un multiplo (anche con $\lambda = -1$ e $\lambda = 0$) stanno ancora in $V$?
> 3. **Lo zero c'è?** Il vettore nullo deve stare in $V$. Se le operazioni sono quelle usuali, ricorda che $0v = 0_V$: se $V$ non è vuoto ed è chiuso rispetto ai multipli, lo zero c'è per forza.
> 4. **Gli assiomi.** Se $V$ sta dentro uno spazio noto ($\K^n$, $\K[x]$, le funzioni) con le stesse operazioni, gli assiomi 1–5 valgono già lì e restano veri. Se le operazioni sono «strane», prova ogni assioma con numeri piccoli: un solo caso che non torna basta per dire di no.
>
> Per rispondere **no** basta **un** controesempio con i numeri; per rispondere **sì** serve un ragionamento che valga per tutti i vettori e tutti gli scalari.

> [!TRAPPOLA] Gli errori più comuni
> - Confondere lo $0$ del campo con l'origine $0_V$.
> - Dimenticare di controllare che somma e multipli restino nell'insieme.
> - Credere che «grado esattamente $k$» vada bene come «grado al massimo $k$».
> - In $\C^n$, dimenticare che $i^2 = -1$.
> - Dire «è uno spazio vettoriale» senza dire **su quale campo**: $\C$ lo è su $\R$ e su $\C$, mentre $\R^2$ lo è su $\R$ ma non su $\C$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: i cinque assiomi, con le quattro regole nascoste nel primo; $0v = 0_V$ e $(-1)v = -v$; la tabella dei cinque esempi con il loro vettore nullo; i tre controesempi tipici: manca lo zero, la somma esce, un multiplo esce.

## Quiz

```quiz
D: Con la somma e il prodotto per scalare usuali (coordinata per coordinata), $\R^2$ è uno spazio vettoriale sul campo $\C$?
- Sì, perché $\R \subset \C$.
+ No: per esempio $i \cdot (1, 0) = (i, 0)$ non sta in $\R^2$.
- Sì, perché ogni spazio vettoriale su $\R$ lo è anche su $\C$.
- No, perché $\R^2$ con la somma non è un gruppo commutativo.
- No, perché $\C$ non è un campo.
= Il prodotto per scalare deve dare un vettore di $V$: con lo scalare complesso $i$ si esce da $\R^2$. Le altre motivazioni sono false: $(\R^2, +)$ è un gruppo commutativo e $\C$ è un campo. Al contrario, $\C$ è uno spazio vettoriale su $\R$ (Esercizio 5.8). Simile all'appello del 07/02/2025, domanda 2.

D: $\R$, con la somma usuale e il prodotto per numeri razionali, è uno spazio vettoriale su $\Q$?
+ Sì: un razionale per un reale è un reale, e gli assiomi seguono dalle proprietà del campo $\R$.
- No, perché $\sqrt 2 \notin \Q$.
- No: semmai è $\Q$ a essere uno spazio vettoriale su $\R$.
- Sì, ma solo se ci si limita ai numeri razionali.
- No, perché $\R$ e $\Q$ sono campi diversi.
= È lo stesso ragionamento di «$\C$ su $\R$»: gli scalari ($\Q$) stanno dentro l'insieme dei vettori ($\R$), quindi $\lambda v$ resta in $\R$ e gli assiomi sono casi particolari di distributività, associatività ed elemento neutro in $\R$. Invece $\Q$ non è uno spazio vettoriale su $\R$: $\sqrt 2 \cdot 1 \notin \Q$. Simile all'appello del 07/02/2025, domanda 2.

D: Quale di questi, con l'operazione indicata, è un gruppo commutativo?
- $(\N, +)$
- $(\Z, \cdot)$
+ $(\Q \setminus \{0\}, \cdot)$
- $(\R, \cdot)$
- $(\Z \setminus \{0\}, \cdot)$
= In $\Q \setminus \{0\}$ il prodotto di due frazioni non nulle è non nullo, il neutro è $1$ e l'inverso di $\frac ab$ è $\frac ba$. In $\N$ manca l'opposto di $1$; in $\Z$ e in $\Z \setminus \{0\}$ manca l'inverso di $2$; in $(\R, \cdot)$ lo $0$ non ha inverso.

D: Quale di questi insiemi, con le operazioni indicate, è un campo?
- $\Z$, con somma e prodotto usuali.
- $\N$, con somma e prodotto usuali.
+ $\{0, 1\}$, con $1 + 1 = 0$ e le altre somme e i prodotti come negli interi.
- $\R \setminus \{0\}$, con somma e prodotto usuali.
- $\{0, 1, 2, 3\}$, con somma e prodotto dei resti nella divisione per $4$.
= $\{0, 1\}$ con quelle regole è il campo dell'Esercizio 5.9 (le regole della parità). $\Z$: $2$ non ha inverso. $\N$: manca l'opposto di $1$. $\R \setminus \{0\}$: la somma esce, $1 + (-1) = 0$. Con i resti modulo $4$: $2 \cdot 2 = 4$ ha resto $0$, e $2$ non ha inverso.

D: In $\C^2$, quanto vale $(1 + i)\begin{pmatrix} 2 \\ i \end{pmatrix}$?
+ $\begin{pmatrix} 2 + 2i \\ -1 + i \end{pmatrix}$
- $\begin{pmatrix} 2 + 2i \\ 1 + i \end{pmatrix}$
- $\begin{pmatrix} 2 + 2i \\ i \end{pmatrix}$
- $\begin{pmatrix} 3 + i \\ 1 + 2i \end{pmatrix}$
- $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$
= Lo scalare moltiplica entrambe le coordinate: $(1 + i) \cdot 2 = 2 + 2i$ e $(1 + i) \cdot i = i + i^2 = -1 + i$. La seconda risposta dimentica che $i^2 = -1$, la terza non moltiplica la seconda coordinata, la quarta somma invece di moltiplicare.

D: In $\R^3$, quanto vale $2\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} - 3\begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$?
+ $(2, -3, -8)$
- $(2, -3, 4)$
- $(2, 3, -8)$
- $(2, -1, -4)$
- $(2, -3, -7)$
= $2(1, 0, -1) = (2, 0, -2)$ e $3(0, 1, 2) = (0, 3, 6)$; poi si sottrae coordinata per coordinata: $(2 - 0,\ 0 - 3,\ -2 - 6) = (2, -3, -8)$.

D: Con la somma e il prodotto per scalare usuali, quale di questi insiemi di polinomi a coefficienti reali è uno spazio vettoriale su $\R$?
- I polinomi di grado esattamente $2$.
- I polinomi $p(x)$ con $p(0) = 1$.
+ I polinomi di grado minore o uguale a $2$, cioè $\R_2[x]$.
- I polinomi con tutti i coefficienti maggiori o uguali a $0$.
- I polinomi della forma $x^2 + bx + c$, con $b, c \in \R$.
= $\R_2[x]$ è lo spazio dell'Esercizio 5.7. Gli altri falliscono: $x^2 + (-x^2 + x) = x$ non ha grado $2$; il polinomio nullo ha $p(0) = 0 \neq 1$; $(-1) \cdot x = -x$ ha un coefficiente negativo; $(x^2 + 1) + (x^2 + 1) = 2x^2 + 2$ non ha la forma $x^2 + bx + c$. Simile agli appelli dell'08/02/2024 (domanda 2) e del 07/09/2026 (domanda 6), che chiedono quale insieme di polinomi è (o non è) un sottospazio.

D: Con le operazioni di $\R^2$, quale di questi sottoinsiemi è uno spazio vettoriale su $\R$?
+ $\{(x, y) \in \R^2 \mid x + y = 0\}$
- $\{(x, y) \in \R^2 \mid x + y = 1\}$
- $\{(x, y) \in \R^2 \mid x \ge 0\}$
- $\{(x, y) \in \R^2 \mid xy = 0\}$
- $\{(x, y) \in \R^2 \mid y = x^2\}$
= Se $x + y = 0$ e $x' + y' = 0$, anche $(x + x') + (y + y') = 0$ e $\lambda x + \lambda y = 0$: le operazioni restano nell'insieme, che contiene $(0, 0)$. Controesempi per gli altri: $(0, 0)$ non soddisfa $x + y = 1$; $(-1) \cdot (1, 0) = (-1, 0)$ ha $x < 0$; $(1, 0) + (0, 1) = (1, 1)$ ha $xy = 1$; $(1, 1) + (1, 1) = (2, 2)$, ma $2 \neq 2^2$. Simile all'appello del 03/06/2025, domanda 2.

D: Le funzioni $f : [0, 1] \to \R$ con $f(0) = 1$, con le operazioni punto per punto, formano uno spazio vettoriale su $\R$?
- Sì, come tutte le funzioni da $[0, 1]$ in $\R$.
+ No: per esempio la funzione nulla non ci sta, e se $f(0) = g(0) = 1$ allora $(f + g)(0) = 2$.
- Sì, perché $1$ è l'elemento neutro del prodotto.
- No, perché le funzioni non sono vettori.
- Sì, ma solo se ci si limita ai polinomi.
= Il vettore nullo sarebbe la funzione nulla, che in $0$ vale $0$: non sta nell'insieme. Anche la somma esce. È lo stesso motivo dell'appello del 10/07/2024, domanda 2: l'insieme $O(2)$ delle matrici ortogonali non è un sottospazio perché non contiene la matrice nulla.

D: Nel campo $\{0, 1, 2\}$ con somma e prodotto dei resti nella divisione per $3$ (Esercizio 5.10), qual è l'inverso di $2$ rispetto al prodotto?
N: 2
= $2 \cdot 2 = 4$, che diviso per $3$ dà resto $1$: quindi $2 \cdot 2 = 1$, e l'inverso di $2$ è $2$ stesso.
```

## Esercizi

::: esercizio medio Esercizio 5.6 delle dispense: i cinque assiomi per tutti gli esempi
Per tutti gli esempi di spazi vettoriali visti sopra ($\K$ su se stesso, $\K^n$, le successioni, le funzioni $[0, 1] \to \K$, i polinomi $\K[x]$) verifica i 5 assiomi, come le dispense hanno controllato l'assioma 2 per $\K^n$.
::: soluzione
L'idea: in tutti gli esempi le operazioni si fanno «un pezzo alla volta» (coordinata, termine, punto o coefficiente), e ogni pezzo è un elemento di $\K$. Quindi ogni assioma si riduce a una proprietà del campo $\K$. Lo scriviamo per esteso per $\K^n$, poi vediamo che cosa cambia negli altri casi.

**$\K^n$.** Siano $x = (x_1, \dots, x_n)$, $y$, $z$ in $\K^n$ e $\lambda, \mu \in \K$. Le operazioni restano in $\K^n$, perché somme e prodotti di elementi di $\K$ stanno in $\K$.
- Assioma 1, gruppo commutativo:
  - associativa: la coordinata $k$ di $(x + y) + z$ è $(x_k + y_k) + z_k$, quella di $x + (y + z)$ è $x_k + (y_k + z_k)$, e sono uguali per l'associatività della somma in $\K$;
  - neutro: $0 = (0, \dots, 0)$, perché $x_k + 0 = x_k$;
  - opposto: $-x = (-x_1, \dots, -x_n)$, perché $x_k + (-x_k) = 0$;
  - commutativa: $x_k + y_k = y_k + x_k$ in $\K$.
- Assioma 2: fatto nelle dispense, con la distributività in $\K$.
- Assioma 3: la coordinata $k$ di $(\lambda + \mu)x$ è $(\lambda + \mu)x_k = \lambda x_k + \mu x_k$, che è la coordinata $k$ di $\lambda x + \mu x$ (distributività e commutatività in $\K$).
- Assioma 4: $(\lambda\mu)x_k = \lambda(\mu x_k)$ per l'associatività del prodotto in $\K$.
- Assioma 5: $1 \cdot x_k = x_k$, perché $1$ è il neutro del prodotto in $\K$.

**$\K$ su se stesso.** È il caso $n = 1$ di $\K^n$; il motivo di ogni assioma è nella tabella della sezione sugli esempi.

**Successioni.** Stessa verifica, con «termine $k$» al posto di «coordinata $k$». Ora $k$ va da $0$ all'infinito, ma ogni controllo riguarda un termine alla volta. Neutro: $(0, 0, 0, \dots)$; opposto di $(x_n)$: $(-x_n)$.

**Funzioni $[0, 1] \to \K$.** Stessa verifica «punto per punto»: due funzioni sono uguali se hanno lo stesso valore in ogni $x \in [0, 1]$. Per esempio l'assioma 2: per ogni $x$,
$$\big(\lambda(f + g)\big)(x) = \lambda\big(f(x) + g(x)\big) = \lambda f(x) + \lambda g(x) = (\lambda f + \lambda g)(x).$$
Neutro: la funzione nulla; opposto di $f$: la funzione $x \mapsto -f(x)$.

**Polinomi $\K[x]$.** Un polinomio è determinato dai suoi coefficienti, e somma e prodotto per scalare agiscono coefficiente per coefficiente: si ripete la verifica di $\K^n$ con «coefficiente di $x^k$» al posto di «coordinata $k$». La somma $p + q$ ha grado al massimo uguale al più grande dei due gradi, quindi è ancora un polinomio. Neutro: il polinomio nullo; opposto: $-p(x)$.
:::

::: esercizio medio Esercizio 5.7 delle dispense: grado al massimo $k$
Controlla che l'insieme $\K_k[x]$ dei polinomi a coefficienti in $\K$ di grado $\le k$ sia uno spazio vettoriale. Perché l'insieme dei polinomi di grado **esattamente** $k$ non è uno spazio vettoriale se $k \ge 1$?
::: soluzione
**$\K_k[x]$ è uno spazio vettoriale.** Ogni elemento si scrive $p(x) = a_k x^k + \dots + a_1 x + a_0$ con $a_0, \dots, a_k \in \K$ (qualche coefficiente, anche il primo, può essere $0$).
1. Le operazioni restano in $\K_k[x]$. Se $p(x) = a_k x^k + \dots + a_0$ e $q(x) = b_k x^k + \dots + b_0$, allora
   $$p(x) + q(x) = (a_k + b_k)x^k + \dots + (a_0 + b_0), \qquad \lambda p(x) = \lambda a_k x^k + \dots + \lambda a_0,$$
   e non compaiono potenze più alte di $x^k$: il grado resta $\le k$.
2. Il polinomio nullo sta in $\K_k[x]$ (tutti i coefficienti nulli), e l'opposto $-p(x)$ ha lo stesso grado di $p$.
3. Gli assiomi 1–5 valgono in tutto $\K[x]$ (esercizio 1), quindi valgono in particolare per i polinomi di grado $\le k$.

In breve: $\K_k[x]$ si comporta come $\K^{k+1}$, perché un polinomio di grado $\le k$ è dato dalla lista dei suoi $k + 1$ coefficienti $(a_0, a_1, \dots, a_k)$.

**Grado esattamente $k$, con $k \ge 1$: non è uno spazio vettoriale.** Basta un controesempio.
- La somma può abbassare il grado: $x^k + 1$ e $-x^k$ hanno grado $k$, ma $(x^k + 1) + (-x^k) = 1$ ha grado $0 \neq k$.
- Il vettore nullo non c'è: il polinomio nullo non ha grado $k$ (e infatti $0 \cdot x^k = 0$ esce dall'insieme).

Con $k = 2$: $x^2 + 1$ e $-x^2$ hanno grado $2$, la loro somma $1$ no.

**Perché $k \ge 1$?** Per $k = 0$ i polinomi di grado $0$ sono le costanti. Se si decide che anche il polinomio nullo ha grado $0$, sono tutte le costanti, cioè $\K$ stesso, che è uno spazio vettoriale; se il polinomio nullo non ha grado, restano le costanti non nulle, che non lo sono (manca lo zero). La risposta dipende da una convenzione, e l'esercizio evita il caso.
:::

::: esercizio base Esercizio 5.8 delle dispense: $\C$ è uno spazio vettoriale su $\R$
Nel primo esempio $\C$ è uno spazio vettoriale sul campo $\C$. Dimostra che è anche uno spazio vettoriale su $\R$.
::: soluzione
Vettori: i numeri complessi $z = a + bi$. Scalari: i numeri reali $\lambda$. Somma: quella di $\C$. Prodotto per scalare: il prodotto in $\C$ tra il reale $\lambda$ e il complesso $z$,
$$\lambda(a + bi) = \lambda a + (\lambda b)i,$$
che è ancora un numero complesso. Le operazioni restano in $\C$.

Gli assiomi:
1. $(\C, +)$ è un gruppo commutativo, perché $\C$ è un campo (assioma 1 del campo).
2. $\lambda(z + w) = \lambda z + \lambda w$: è la proprietà distributiva di $\C$, applicata con $\lambda \in \R \subset \C$.
3. $(\lambda + \mu)z = \lambda z + \mu z$: distributività e commutatività di $\C$.
4. $(\lambda\mu)z = \lambda(\mu z)$: associatività del prodotto in $\C$.
5. $1z = z$: $1$ è il neutro del prodotto in $\C$.

Ogni assioma è un caso particolare di una proprietà di $\C$ in cui uno dei numeri è reale.

**Con le coordinate.** La corrispondenza $a + bi \leftrightarrow (a, b)$ trasforma le operazioni in quelle di $\R^2$: $(a + bi) + (c + di) = (a + c) + (b + d)i$ corrisponde a $(a, b) + (c, d)$, e $\lambda(a + bi)$ corrisponde a $\lambda(a, b)$. Come spazio vettoriale su $\R$, $\C$ si comporta come il piano $\R^2$: è il piano di Gauss della lezione L02.

**Attenzione al contrario.** $\R$ **non** è uno spazio vettoriale su $\C$ con il prodotto usuale, perché $i \cdot 1 = i \notin \R$.
:::

::: esercizio medio Esercizio 5.9 delle dispense: il campo con due elementi
Sia $\K = \{0, 1\}$ con le operazioni
$$0 + 0 = 0, \quad 0 + 1 = 1, \quad 1 + 0 = 1, \quad 1 + 1 = 0, \qquad 0 \cdot 0 = 0, \quad 0 \cdot 1 = 0, \quad 1 \cdot 0 = 0, \quad 1 \cdot 1 = 1.$$
Dimostra che $(\K, +, \cdot)$ è un campo.
::: soluzione
Si controllano i tre assiomi della Definizione 5.3.

**Assioma 1: $(\K, +)$ è un gruppo commutativo con neutro $0$.**
- Le somme restano in $\{0, 1\}$ (lo dice la tabella).
- Neutro: $0 + 0 = 0$ e $0 + 1 = 1 + 0 = 1$, quindi $0$ lascia tutto com'è.
- Opposti: $0 + 0 = 0$, quindi $-0 = 0$; $1 + 1 = 0$, quindi $-1 = 1$.
- Commutativa: $0 + 1 = 1 + 0$, e gli altri casi hanno due addendi uguali.
- Associativa: le terne $(a, b, c)$ sono $2^3 = 8$. Invece di provarle una per una, nota che $a + b + c$ vale $0$ se tra $a$, $b$, $c$ ci sono un numero pari di $1$, e vale $1$ se ce ne sono un numero dispari, comunque si mettano le parentesi. Per esempio $(1 + 1) + 1 = 0 + 1 = 1$ e $1 + (1 + 1) = 1 + 0 = 1$.

**Assioma 2: $\K \setminus \{0\} = \{1\}$ è un gruppo commutativo con il prodotto.** C'è un solo elemento: $1 \cdot 1 = 1$ resta nell'insieme, $1$ è il neutro ed è l'inverso di se stesso; associatività e commutatività valgono perché c'è un solo prodotto possibile, $1 \cdot 1$.

**Assioma 3: la distributiva $a(b + c) = ab + ac$.** Se $a = 0$ entrambi i membri valgono $0$. Se $a = 1$ entrambi i membri valgono $b + c$. Quindi vale in tutti gli $8$ casi.

**Il perché.** Leggi $0$ come «pari» e $1$ come «dispari»: le tabelle sono le regole della parità (dispari più dispari fa pari, e così via). Le proprietà della somma e del prodotto degli interi passano ai resti della divisione per $2$. Questo campo si indica spesso con $\mathbb{F}_2$ o $\Z_2$.
:::

::: esercizio difficile Esercizio 5.10 delle dispense: un campo con tre elementi
Sia $\K = \{0, 1, 2\}$. Trova, in modo simile all'esercizio precedente, due operazioni $+$ e $\cdot$ che rendano $(\K, +, \cdot)$ un campo. Per chi è molto coraggioso: prova a generalizzare a $\K = \{0, 1, 2, \dots, p - 1\}$ con $p$ numero primo.
::: soluzione
**L'idea.** Nell'esercizio precedente le operazioni erano quelle dei resti della divisione per $2$. Qui si usano i **resti della divisione per $3$**: si calcola come negli interi e poi si tiene il resto. Per esempio $2 + 2 = 4$, che diviso per $3$ dà resto $1$: quindi $2 + 2 = 1$. E $2 \cdot 2 = 4$, resto $1$: quindi $2 \cdot 2 = 1$.

| $+$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $0$ | $0$ | $1$ | $2$ |
| $1$ | $1$ | $2$ | $0$ |
| $2$ | $2$ | $0$ | $1$ |

| $\cdot$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $0$ | $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ | $2$ |
| $2$ | $0$ | $2$ | $1$ |

La verifica:
1. $(\K, +)$ è un gruppo commutativo: neutro $0$; opposti $-0 = 0$, $-1 = 2$ (perché $1 + 2 = 0$) e $-2 = 1$; la tabella è simmetrica, quindi la somma è commutativa. L'associatività passa dagli interi: $(a + b) + c$ e $a + (b + c)$ sono lo stesso numero intero, quindi hanno lo stesso resto.
2. $\{1, 2\}$ con il prodotto: $1 \cdot 1 = 1$, $1 \cdot 2 = 2$, $2 \cdot 2 = 1$, quindi il prodotto di due elementi non nulli è non nullo. Neutro $1$; inversi $1^{-1} = 1$ e $2^{-1} = 2$; commutatività e associatività come negli interi.
3. Distributiva: vale negli interi, e prendere il resto rispetta somme e prodotti, quindi vale anche per i resti.

**Il caso generale, con $p$ primo.** Su $\{0, 1, \dots, p - 1\}$ si usano somma e prodotto «modulo $p$», cioè si tiene il resto della divisione per $p$. Tutte le proprietà passano dagli interi come sopra, tranne una che va dimostrata: **ogni $a \neq 0$ ha un inverso**.
- Moltiplica $a$ per tutti gli elementi non nulli: $a \cdot 1, a \cdot 2, \dots, a \cdot (p - 1)$.
- Hanno resti tutti diversi. Se $ab$ e $ac$ avessero lo stesso resto, $p$ dividerebbe $a(b - c)$; siccome $p$ è primo, dividerebbe $a$ oppure $b - c$. Non divide $a$, perché $1 \le a \le p - 1$; e $b - c$ è compreso tra $-(p - 2)$ e $p - 2$, quindi è divisibile per $p$ solo se $b = c$.
- Nessuno ha resto $0$: $p$ dovrebbe dividere $a$ oppure $b$, entrambi tra $1$ e $p - 1$.
- Sono quindi $p - 1$ resti diversi e non nulli: sono **tutti** i resti $1, \dots, p - 1$, in un altro ordine. Uno di loro vale $1$, e quello dà l'inverso di $a$.

**Perché serve $p$ primo.** Con $\{0, 1, 2, 3\}$ e i resti modulo $4$ non si ottiene un campo: $2 \cdot 2 = 4$ ha resto $0$, e $2$ non ha inverso ($2 \cdot 1 = 2$, $2 \cdot 2 = 0$, $2 \cdot 3 = 2$). Questi insiemi di resti si studiano in Matematica Discreta (aritmetica modulare).
:::

::: esercizio base Conti in $\R^3$, in $\C^2$ e tra polinomi
Calcola:
(a) $2u - 3v$ con $u = (1, 0, -1)$ e $v = (2, -1, 1)$ in $\R^3$;
(b) $iz + w$ con $z = (1 + i, 2)$ e $w = (3, -i)$ in $\C^2$;
(c) $2p - q$ con $p(x) = x^3 - x + 2$ e $q(x) = 2x^3 + x^2 - 4$;
(d) il vettore $x \in \R^3$ tale che $x + (1, 2, 3) = (4, 0, 3)$.
::: soluzione
(a) $2u = (2, 0, -2)$ e $3v = (6, -3, 3)$. Quindi
$$2u - 3v = (2 - 6,\ 0 - (-3),\ -2 - 3) = (-4, 3, -5).$$

(b) Prima il prodotto per lo scalare $i$, coordinata per coordinata: $iz = (i(1 + i),\ 2i) = (i + i^2,\ 2i) = (-1 + i,\ 2i)$. Poi la somma:
$$iz + w = (-1 + i + 3,\ 2i - i) = (2 + i,\ i).$$

(c) $2p(x) = 2x^3 - 2x + 4$. Sottraendo $q$ grado per grado:
$$2p(x) - q(x) = (2 - 2)x^3 + (0 - 1)x^2 + (-2 - 0)x + (4 - (-4)) = -x^2 - 2x + 8.$$

(d) Si somma a entrambi i membri l'opposto di $(1, 2, 3)$:
$$x = (4, 0, 3) + (-1, -2, -3) = (3, -2, 0).$$
Controllo: $(3, -2, 0) + (1, 2, 3) = (4, 0, 3)$.
:::

::: esercizio base Gruppo o no?
Per ciascun caso di' se è un gruppo. Se lo è, indica l'elemento neutro e l'inverso di un elemento; se non lo è, indica che cosa fallisce, con un esempio.
(a) I numeri pari $\{\dots, -2, 0, 2, 4, \dots\}$ con la somma.
(b) I numeri dispari con la somma.
(c) $\Z$ con la sottrazione, $a * b = a - b$.
(d) $\{1, -1\}$ con il prodotto.
(e) I numeri reali positivi con il prodotto.
::: soluzione
(a) **Sì**, ed è commutativo. La somma di due pari è pari; il neutro $0$ è pari; l'inverso di $4$ è $-4$, anch'esso pari.

(b) **No**. L'operazione esce dall'insieme: $1 + 3 = 4$ non è dispari. E manca anche il neutro, perché $0$ è pari.

(c) **No**. La sottrazione non è associativa: $(5 - 3) - 1 = 1$, mentre $5 - (3 - 1) = 3$. Manca anche un elemento neutro: $a - 0 = a$, ma $0 - a = -a \neq a$ per $a \neq 0$.

(d) **Sì**, commutativo. $1 \cdot 1 = 1$, $1 \cdot (-1) = -1$, $(-1)(-1) = 1$: i prodotti restano nell'insieme. Il neutro è $1$ e l'inverso di $-1$ è $-1$ stesso.

(e) **Sì**, commutativo. Il prodotto di due positivi è positivo; il neutro è $1$; l'inverso di $5$ è $\frac 15$, ancora positivo.
:::

::: esercizio medio Tre conseguenze degli assiomi
Usando solo gli assiomi della Definizione 5.4 e la Proposizione 5.5, dimostra che in ogni spazio vettoriale $V$ su $\K$:
(a) $\lambda 0_V = 0_V$ per ogni $\lambda \in \K$;
(b) $(-1)v = -v$ per ogni $v \in V$;
(c) se $\lambda v = 0_V$, allora $\lambda = 0$ oppure $v = 0_V$.
::: soluzione
(a) Poiché $0_V + 0_V = 0_V$ (elemento neutro), per l'assioma 2
$$\lambda 0_V = \lambda(0_V + 0_V) = \lambda 0_V + \lambda 0_V.$$
Sommando a entrambi i membri l'opposto di $\lambda 0_V$ e semplificando come nella Proposizione 5.5, resta $0_V = \lambda 0_V$.

(b) Si mostra che $(-1)v$ sommato a $v$ dà $0_V$:
$$v + (-1)v = 1v + (-1)v = (1 + (-1))v = 0v = 0_V.$$
I passaggi usano, nell'ordine, l'assioma 5, l'assioma 3, il fatto che $1 + (-1) = 0$ nel campo e la Proposizione 5.5. Quindi $(-1)v$ è un opposto di $v$; siccome l'opposto è unico (riquadro sui gruppi), $(-1)v = -v$.

(c) Supponi $\lambda v = 0_V$ con $\lambda \neq 0$: bisogna mostrare che $v = 0_V$. Poiché $\K$ è un campo, $\lambda$ ha un inverso $\lambda^{-1}$. Allora
$$v = 1v = (\lambda^{-1}\lambda)v = \lambda^{-1}(\lambda v) = \lambda^{-1} 0_V = 0_V,$$
usando l'assioma 5, il fatto che $\lambda^{-1}\lambda = 1$, l'assioma 4 e il punto (a). Se invece $\lambda = 0$ non c'è niente da dimostrare.
:::

::: esercizio esame Un prodotto per scalare strano
Su $V = \R^2$ considera la somma usuale e il prodotto per scalare
$$\lambda \star (x, y) = (\lambda x, 0).$$
(1) Calcola $3 \star (2, 5)$ e $1 \star (2, 5)$.
(2) Verifica gli assiomi 2, 3 e 4 della Definizione 5.4.
(3) $V$, con queste operazioni, è uno spazio vettoriale su $\R$?
(4) Vale ancora $0 \star v = 0_V$ per ogni $v$?
::: soluzione
(1) $3 \star (2, 5) = (3 \cdot 2, 0) = (6, 0)$ e $1 \star (2, 5) = (2, 0)$.

(2) Siano $v = (x, y)$, $w = (x', y')$ e $\lambda, \mu \in \R$.
- Assioma 2: $\lambda \star (v + w) = \lambda \star (x + x', y + y') = (\lambda x + \lambda x', 0) = (\lambda x, 0) + (\lambda x', 0) = \lambda \star v + \lambda \star w$. Vale.
- Assioma 3: $(\lambda + \mu) \star v = ((\lambda + \mu)x, 0) = (\lambda x, 0) + (\mu x, 0) = \lambda \star v + \mu \star v$. Vale.
- Assioma 4: $(\lambda\mu) \star v = (\lambda\mu x, 0)$ e $\lambda \star (\mu \star v) = \lambda \star (\mu x, 0) = (\lambda\mu x, 0)$. Vale.

(3) **No.** L'assioma 1 vale (la somma è quella usuale di $\R^2$), ma l'assioma 5 fallisce: $1 \star (2, 5) = (2, 0) \neq (2, 5)$. Un solo assioma falso basta.

(4) **Sì**: $0 \star (x, y) = (0, 0)$. Non è un caso: la dimostrazione della Proposizione 5.5 usa solo gli assiomi 1 e 3, che qui valgono.

All'esame una domanda così compare come risposta multipla («è uno spazio vettoriale?»): la motivazione giusta è il controesempio all'assioma 5.
:::

::: esercizio esame Come all'esame: è uno spazio vettoriale su $\R$?
Per ciascuno dei seguenti insiemi, con le operazioni indicate, stabilisci se è uno spazio vettoriale su $\R$, motivando la risposta.
(a) $\C$, con la somma usuale e il prodotto per numeri reali.
(b) $\R^2$, con la somma usuale e $\lambda \cdot (x, y) = (\lambda x, y)$.
(c) I polinomi reali di grado esattamente $3$, con le operazioni usuali.
(d) Le funzioni $f : [0, 1] \to \R$ con $f(1) = 0$, con le operazioni punto per punto.
(e) I numeri reali positivi, con la «somma» $x \oplus y = xy$ e il «prodotto per scalare» $\lambda \odot x = x^\lambda$.
::: soluzione
(a) **Sì**: è l'Esercizio 5.8, e la domanda dell'appello del 07/02/2025.

(b) **No**: fallisce l'assioma 3. Con $\lambda = \mu = 1$ e $v = (0, 1)$:
$$(1 + 1) \cdot (0, 1) = (0, 1), \qquad 1 \cdot (0, 1) + 1 \cdot (0, 1) = (0, 1) + (0, 1) = (0, 2).$$
I due risultati sono diversi. Si vede anche dalla Proposizione 5.5: $0 \cdot (0, 1) = (0, 1)$ non è il vettore nullo.

(c) **No**: $(x^3 + x) + (-x^3) = x$ ha grado $1$, quindi la somma esce dall'insieme; inoltre il polinomio nullo non ha grado $3$.

(d) **Sì**. La funzione nulla vale $0$ in $1$, quindi sta nell'insieme. Se $f(1) = g(1) = 0$, allora $(f + g)(1) = 0 + 0 = 0$ e $(\lambda f)(1) = \lambda \cdot 0 = 0$: somma e multipli restano nell'insieme. Gli assiomi valgono perché valgono per tutte le funzioni $[0, 1] \to \R$ con le stesse operazioni. Nella lezione L06 un insieme così si chiamerà **sottospazio**.

(e) **Sì**, anche se sembra strano. Le operazioni restano tra i positivi: $xy > 0$ e $x^\lambda > 0$.
- Assioma 1: $\oplus$ è il prodotto dei positivi, che è un gruppo commutativo (esercizio 7 (e)). Il «vettore nullo» è il numero $1$, perché $x \oplus 1 = x$, e l'«opposto» di $x$ è $\frac 1x$.
- Assioma 2: $\lambda \odot (x \oplus y) = (xy)^\lambda = x^\lambda y^\lambda = (\lambda \odot x) \oplus (\lambda \odot y)$.
- Assioma 3: $(\lambda + \mu) \odot x = x^{\lambda + \mu} = x^\lambda x^\mu = (\lambda \odot x) \oplus (\mu \odot x)$.
- Assioma 4: $(\lambda\mu) \odot x = x^{\lambda\mu} = (x^\mu)^\lambda = \lambda \odot (\mu \odot x)$.
- Assioma 5: $1 \odot x = x^1 = x$.

Controllo con la Proposizione 5.5: $0 \odot x = x^0 = 1$, che è proprio il vettore nullo di questo spazio. Morale: i vettori possono essere qualsiasi cosa e le operazioni possono avere un aspetto insolito; conta solo che rispettino gli assiomi.
:::

## Domande di ripasso

::: domanda Che cos'è $\R^n$, e in quali due modi si può leggere un suo elemento?
È l'insieme delle liste ordinate $(x_1, \dots, x_n)$ di $n$ numeri reali, il prodotto cartesiano di $n$ copie di $\R$. Un elemento si può leggere come un punto oppure come un vettore, cioè una freccia dall'origine a quel punto.
:::

::: domanda Come si sommano due vettori di $\R^n$, e che cosa vuol dire la somma in $\R^2$?
Componente per componente: $(x_1, \dots, x_n) + (y_1, \dots, y_n) = (x_1 + y_1, \dots, x_n + y_n)$. In $\R^2$ è la regola del parallelogramma: $v + w$ è la diagonale del parallelogramma che ha $v$ e $w$ come lati.
:::

::: domanda Che effetto ha il prodotto per scalare $\lambda v$ al variare di $\lambda$?
Moltiplica ogni coordinata per $\lambda$. Allunga $v$ se $|\lambda| > 1$, lo accorcia se $|\lambda| < 1$, ne inverte il verso se $\lambda < 0$; con $\lambda = 0$ dà il vettore nullo, con $\lambda = -1$ l'opposto. Tutti i multipli di $v \neq 0$ stanno sulla retta per l'origine e per $v$.
:::

::: domanda Quali sono gli assiomi di gruppo? Fai un esempio e un controesempio.
Elemento neutro, proprietà associativa, esistenza dell'inverso di ogni elemento (più la commutativa, per i gruppi commutativi). Esempio: $(\Z, +)$, con neutro $0$ e inverso $-a$. Controesempio: $(\N, +)$, perché $1$ non ha opposto in $\N$.
:::

::: domanda Perché $\Q \setminus \{0\}$ è un gruppo con il prodotto e $\Z \setminus \{0\}$ no?
In $\Q \setminus \{0\}$ ogni elemento $\frac ab$ ha l'inverso $\frac ba$, che è ancora una frazione non nulla. In $\Z \setminus \{0\}$ il numero $2$ non ha inverso, perché $\frac 12$ non è intero.
:::

::: domanda Che cos'è un campo? Perché $\Z$ non lo è?
Un insieme con due operazioni $+$ e $\cdot$ tale che $(A, +)$ è un gruppo commutativo con neutro $0_A$, $(A \setminus \{0_A\}, \cdot)$ è un gruppo commutativo con neutro $1_A$, e vale la distributiva. $\Z$ non lo è perché $2$ non ha inverso per il prodotto.
:::

::: domanda Quali sono i cinque assiomi di spazio vettoriale? Che cosa contiene il primo?
(1) $(V, +)$ è un gruppo commutativo; (2) $\lambda(v + w) = \lambda v + \lambda w$; (3) $(\lambda + \mu)v = \lambda v + \mu v$; (4) $(\lambda\mu)v = \lambda(\mu v)$; (5) $1v = v$. Il primo contiene quattro regole: associativa, vettore nullo, opposto, commutativa. Inoltre somma e prodotto per scalare devono dare risultati in $V$.
:::

::: domanda Qual è la differenza tra lo $0$ del campo e l'origine $0_V$?
Lo $0$ del campo è uno scalare, un numero. L'origine $0_V$ è un vettore, l'elemento neutro della somma di $V$: in $\R^3$ è $(0, 0, 0)$, tra i polinomi è il polinomio nullo, tra le funzioni è la funzione nulla.
:::

::: domanda Enuncia e dimostra la Proposizione 5.5.
$0v = 0_V$ per ogni $v$. Infatti $0v = (0 + 0)v = 0v + 0v$ per l'assioma 3; sommando l'opposto di $0v$ a entrambi i membri si ottiene $0_V = 0v$.
:::

::: domanda Perché $\C$ è uno spazio vettoriale su $\R$, mentre $\R$ non lo è su $\C$?
Un reale per un complesso è un complesso, e gli assiomi sono casi particolari delle proprietà di campo di $\C$. Al contrario, uno scalare complesso per un reale può non essere reale: $i \cdot 1 = i \notin \R$.
:::

::: domanda Come si sommano due funzioni $[0, 1] \to \R$? Qual è il vettore nullo?
Punto per punto: $(f + g)(x) = f(x) + g(x)$ e $(\lambda f)(x) = \lambda f(x)$ per ogni $x \in [0, 1]$. Il vettore nullo è la funzione che vale $0$ in ogni punto.
:::

::: domanda Perché i polinomi di grado esattamente $2$ non formano uno spazio vettoriale, mentre $\R_2[x]$ sì?
La somma può abbassare il grado ($x^2 + (-x^2 + x) = x$) e il polinomio nullo non ha grado $2$. In $\R_2[x]$ invece somme e multipli hanno ancora grado $\le 2$, e il polinomio nullo c'è.
:::

::: domanda Come si dimostra che un insieme, con certe operazioni, non è uno spazio vettoriale?
Con un solo controesempio concreto: lo zero non sta nell'insieme, oppure la somma di due elementi o un multiplo escono dall'insieme, oppure un assioma fallisce per certi numeri.
:::

## Glossario

```glossario
Spazio euclideo $\R^n$ | L'insieme delle liste ordinate $(x_1, \dots, x_n)$ di $n$ numeri reali, con somma e prodotto per scalare componente per componente.
Prodotto cartesiano | $A \times B$ è l'insieme delle coppie ordinate $(a, b)$ con $a \in A$ e $b \in B$.
Vettore colonna | Un vettore scritto in verticale; negli appelli, scritto in riga, compare come ${}^t(x_1, \dots, x_n)$.
Coordinate | I numeri $x_1, \dots, x_n$ che formano il vettore $x$.
Origine | Il vettore $(0, \dots, 0)$ di $\R^n$; in uno spazio vettoriale qualsiasi, l'elemento neutro $0_V$ della somma.
Scalare | Un elemento del campo $\K$, cioè un numero che moltiplica i vettori.
Prodotto per scalare | L'operazione che a $\lambda \in \K$ e $v \in V$ associa il vettore $\lambda v$; in $\R^n$ moltiplica ogni coordinata per $\lambda$.
Regola del parallelogramma | In $\R^2$, $v + w$ è la diagonale del parallelogramma con lati $v$ e $w$.
Operazione binaria | Regola che a due elementi di un insieme associa un elemento dello stesso insieme.
Gruppo | Insieme con un'operazione binaria che ha elemento neutro, è associativa e in cui ogni elemento ha un inverso.
Gruppo commutativo | Gruppo in cui vale anche $a * b = b * a$ per ogni $a, b$.
Campo | Insieme con $+$ e $\cdot$: gruppo commutativo con la somma, gruppo commutativo con il prodotto una volta tolto lo $0$, distributiva. Esempi: $\Q$, $\R$, $\C$.
Spazio vettoriale | Insieme $V$ con somma e prodotto per scalari di un campo $\K$ che rispettano i cinque assiomi della Definizione 5.4.
Vettore nullo $0_V$ | L'elemento neutro della somma di $V$: $v + 0_V = v$ per ogni $v$.
Opposto $-v$ | Il vettore tale che $v + (-v) = 0_V$; vale $-v = (-1)v$.
Lo spazio $\K^n$ | Le colonne di $n$ elementi di $\K$, con operazioni termine a termine; per esempio $\C^2$.
Polinomi $\K[x]$ e $\K_k[x]$ | $\K[x]$: tutti i polinomi a coefficienti in $\K$; $\K_k[x]$: quelli di grado al massimo $k$. Entrambi sono spazi vettoriali.
Operazioni punto per punto | Per le funzioni: $(f + g)(x) = f(x) + g(x)$ e $(\lambda f)(x) = \lambda f(x)$ in ogni punto $x$.
```

## Checklist

```checklist
- So scrivere un elemento di $\R^n$ come punto, come vettore e come vettore colonna.
- So sommare vettori e moltiplicarli per uno scalare, anche in $\C^n$, e so disegnare la somma in $\R^2$ con il parallelogramma.
- So elencare gli assiomi di gruppo e spiegare perché $(\N, +)$ e $(\Z, \cdot)$ non sono gruppi.
- So dire che cos'è un campo e perché $\Z$ non lo è, mentre $\{0, 1\}$ con $1 + 1 = 0$ sì.
- So scrivere i cinque assiomi di spazio vettoriale e le quattro regole contenute nel primo.
- Distinguo lo zero del campo dall'origine $0_V$ e so dimostrare che $0v = 0_V$.
- So spiegare perché $\K^n$, le successioni, le funzioni $[0, 1] \to \K$ e $\K[x]$ sono spazi vettoriali, e qual è il vettore nullo in ognuno.
- So dimostrare che $\C$ è uno spazio vettoriale su $\R$ e spiegare perché $\R^2$ non lo è su $\C$.
- So trovare un controesempio quando un insieme non è uno spazio vettoriale: manca lo zero, oppure una somma o un multiplo escono.
- So controllare un assioma con operazioni insolite, come negli esercizi 9 e 10.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 5 «Spazi vettoriali I», pp. 20–25: le sezioni 5.A–5.D sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni ed esercizi mantengono la loro numerazione (Definizioni 5.1–5.4, Proposizione 5.5, Esercizi 5.6–5.10).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.5 (gruppi, unicità dell'inverso, semplificazione, anelli e campi), §2.1 (spazio euclideo, somma, prodotto per scalare e loro proprietà), §2.2.1–2.2.4 (definizione di spazio vettoriale, Proposizione 2.2.1, gli spazi $\K^n$, $\K[x]$ e $F(X, \K)$).
- **Appelli citati** (testi e soluzioni sul Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (domanda 5), 08/02/2024 (domanda 2), 10/07/2024 (domanda 2), 07/02/2025 (domanda 2, riportata con una soluzione scritta per questi appunti), 03/06/2025 (domanda 2), 15/01/2026 (domande 3 e 4), 05/02/2026 (domanda 2), 07/09/2026 (domanda 6).
- Le parti **«Oltre le dispense»** (unicità dell'inverso e semplificazione, perché serve l'assioma 5, altre conseguenze degli assiomi, lo spazio $F(X, \K)$, il metodo per l'esame e gli esercizi 6–10) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
