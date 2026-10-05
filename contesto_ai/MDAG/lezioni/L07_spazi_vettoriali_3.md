---
corso: MDAG
modulo: AG
lezione: L07
titolo: Spazi vettoriali III
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L07
descrizione: >-
  Appunti della lezione L07 di Algebra lineare e Geometria (MDAG, parte 2): dipendenza e indipendenza lineare,
  basi, base canonica di K^n e dei polinomi, dimensione di uno spazio vettoriale e teorema sulle basi, con quiz
  nello stile dell'esame ed esercizi svolti.
lede: >-
  Quando dei vettori sono «di troppo»? L'indipendenza lineare lo dice con una sola equazione. Da lì nascono le basi,
  che generano tutto lo spazio senza sprechi, e la dimensione: il numero di vettori di una base, lo stesso per
  tutte le basi. Alla fine sai perché $\dim \K^n = n$, $\dim \K_n[x] = n + 1$ e $\dim M(m, n, \K) = mn$, e come
  si risponde alle domande d'esame su basi e dimensioni.
materiale: dispense
scheda:
  Dispense: lezione 7 · pp. 31–35
  Libro: Martelli, §2.3.1–2.3.7
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 7 «Spazi vettoriali III»; B. Martelli, Geometria e algebra lineare, §2.3.1–2.3.7
appunti_html: appunti/MDAG/L07_spazi_vettoriali_3.html
genera_html: true
---

## In breve

- Dei vettori $v_1, \dots, v_k$ sono **linearmente dipendenti** se una loro combinazione con coefficienti **non tutti nulli** dà il vettore nullo. Sono **linearmente indipendenti** se l'unica combinazione che dà $0$ è quella con tutti i coefficienti uguali a zero.
- Dipendenti vuol dire che **uno di loro è combinazione lineare degli altri** (Proposizione 7.2): c'è un vettore «di troppo».
- Un vettore da solo è dipendente solo se è il vettore nullo; due vettori sono dipendenti solo se sono **multipli**. Con tre o più vettori guardarli a coppie non basta (Esempio 7.4).
- Un sottoinsieme di vettori indipendenti è ancora formato da vettori indipendenti (Proposizione 7.6).
- Una **base** di $V$ è una sequenza di vettori **indipendenti** che **generano** $V$. Esempi: la **base canonica** $e_1, \dots, e_n$ di $\K^n$ e la base $1, x, \dots, x^n$ di $\K_n[x]$.
- Tutte le basi di uno spazio hanno lo **stesso numero** di vettori (Teorema 7.10): questo numero è la **dimensione** $\dim V$.
- $\dim \K^n = n$, $\dim \K_n[x] = n + 1$, $\dim M(m, n, \K) = mn$; lo spazio $\K[x]$ di tutti i polinomi ha dimensione infinita.
- Se $\dim V = n$, per decidere se $n$ vettori sono una base basta controllare **una** delle due condizioni: indipendenza **oppure** generazione (Teorema 7.12).
- All'esame escono domande su dimensioni (matrici triangolari o simmetriche, sottospazi di polinomi), su «generatori e/o indipendenti», su quale insieme è una base: per esempio gli appelli del 24/01/2024, 16/01/2025, 15/01/2026 e 07/09/2026.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Dimensione: da dove si parte (p. 31)

Dalla scuola sai che un punto ha dimensione $0$, una retta dimensione $1$, un piano dimensione $2$. In questa lezione la parola «dimensione» diventa una definizione precisa, che vale per ogni spazio vettoriale e per ogni suo sottospazio: anche per $M(2, 3, \R)$ o per $\R_3[x]$, che non si possono disegnare.

L'idea è contare **quanti vettori servono** per generare lo spazio, senza sprechi. Guarda questi due casi in $\R^2$ (lezione L06):

- $\Span\big((1, 2), (2, 4)\big)$ è una **retta**: il secondo vettore è il doppio del primo e non aggiunge niente. Uno dei due è «di troppo».
- $\Span\big((1, 2), (2, 1)\big)$ è **tutto il piano**: servono entrambi, nessuno è di troppo.

Per contare bene bisogna prima riconoscere i vettori di troppo. È il compito della dipendenza lineare.

```grafico
titolo: $(1, 2)$ e $(2, 4)$ stanno sulla stessa retta per l'origine (dipendenti); $(1, 2)$ e $(2, 1)$ no (indipendenti)
x: -1 5
y: -1 5
retta: 0 0 2.4 4.8 | grigio | tratteggio | $y = 2x$ | e
vettore: 2 4 | blu | spesso | $(2, 4)$ | e
vettore: 1 2 | accento | spesso | $(1, 2)$ | o
vettore: 2 1 | ambra | spesso | $(2, 1)$ | se
```

## Dipendenza e indipendenza lineare (pp. 31–33)

Se $(2, 4) = 2 \cdot (1, 2)$, allora $2 \cdot (1, 2) - (2, 4) = (0, 0)$: una combinazione dei due vettori, con coefficienti $2$ e $-1$, dà il vettore nullo. Ogni volta che un vettore è «di troppo» succede questo, e la definizione parte proprio da qui.

> [!DEF] 7.1 · Vettori linearmente dipendenti e indipendenti
> Sia $V$ uno spazio vettoriale su $\K$ e siano $v_1, \dots, v_k \in V$ alcuni vettori. Diciamo che questi vettori sono **linearmente dipendenti** se esistono dei coefficienti $\lambda_1, \dots, \lambda_k \in \K$, **non tutti nulli**, tali che
> $$\lambda_1 v_1 + \dots + \lambda_k v_k = 0.$$
> I vettori $v_1, \dots, v_k$ sono **linearmente indipendenti** se non sono linearmente dipendenti. Questa importante condizione può essere espressa nel modo seguente: dei vettori $v_1, \dots, v_k$ sono linearmente indipendenti se e solo se
> $$\lambda_1 v_1 + \dots + \lambda_k v_k = 0 \implies \lambda_1 = \dots = \lambda_k = 0.$$
> In altre parole, l'unica combinazione lineare dei $v_1, \dots, v_k$ che può dare il vettore nullo è quella banale, in cui tutti i coefficienti $\lambda_1, \dots, \lambda_k$ sono nulli.

Pezzo per pezzo:

- La combinazione con **tutti** i coefficienti uguali a $0$ dà sempre il vettore nullo, per qualsiasi vettori: $0v_1 + \dots + 0v_k = 0$. Le dispense la chiamano combinazione **banale**. La domanda interessante è se ce ne sono **altre**.
- **Non tutti nulli** vuol dire: almeno un coefficiente diverso da $0$. Gli altri possono anche essere $0$.
- **Dipendenti**: esiste una combinazione **non banale** che dà $0$. Per dimostrarlo basta **esibirla**: $2 \cdot (1, 2) - (2, 4) = 0$.
- **Indipendenti**: l'implicazione $\lambda_1 v_1 + \dots + \lambda_k v_k = 0 \Rightarrow$ tutti i $\lambda_i = 0$. Per dimostrarlo si parte da una combinazione nulla con coefficienti incogniti e si **deduce** che sono tutti zero: di solito si risolve un sistema lineare.
- Dipendenza e indipendenza sono proprietà **dell'intera lista** di vettori, non dei singoli vettori.

> [!ESEMPIO] · la verifica con le incognite, in $\R^2$
> **$(1, 2)$ e $(2, 1)$ sono indipendenti.** Suppongo $a(1, 2) + b(2, 1) = (0, 0)$, cioè $(a + 2b,\ 2a + b) = (0, 0)$:
> $$\begin{cases} a + 2b = 0 \\ 2a + b = 0 \end{cases}$$
> Dalla prima $a = -2b$; sostituendo nella seconda, $-4b + b = -3b = 0$, quindi $b = 0$ e poi $a = 0$. L'unica combinazione nulla è quella banale: indipendenti.
>
> **$(1, 2)$ e $(2, 4)$ sono dipendenti.** Lo stesso sistema diventa $a + 2b = 0$ e $2a + 4b = 0$: la seconda equazione è il doppio della prima, e ogni coppia con $a = -2b$ funziona. Per esempio $b = -1$, $a = 2$: $2(1, 2) - (2, 4) = (0, 0)$, con coefficienti non nulli.

### Un vettore di troppo (p. 31)

Se $v_1, \dots, v_k$ sono dipendenti, uno di loro si può esprimere in funzione degli altri. Per ipotesi esiste almeno un coefficiente $\lambda_i \neq 0$. Isolo il termine $\lambda_i v_i$, divido tutto per $\lambda_i$ (si può, perché $\lambda_i \neq 0$ e siamo in un campo) e sposto gli altri addendi:

$$v_i = -\frac{\lambda_1}{\lambda_i} v_1 - \dots - \frac{\lambda_k}{\lambda_i} v_k,$$

dove a destra **non** compare $v_i$. Quindi $v_i$ è una combinazione lineare degli altri.

> [!PROP] 7.2
> I vettori $v_1, \dots, v_k$ sono dipendenti $\iff$ uno di loro è esprimibile come combinazione lineare degli altri.

Il verso $\Rightarrow$ è il conto qui sopra. Il verso $\Leftarrow$, che le dispense lasciano sottinteso: se $v_i = \mu_1 v_1 + \dots + \mu_k v_k$ (senza il termine con $v_i$), portando tutto a sinistra si ottiene

$$\mu_1 v_1 + \dots + (-1) v_i + \dots + \mu_k v_k = 0,$$

una combinazione nulla in cui il coefficiente di $v_i$ è $-1 \neq 0$: i vettori sono dipendenti.

> [!IDEA] · che cosa vuol dire «dipendenti»
> Dei vettori sono dipendenti quando **uno è di troppo**: si può ricostruire dagli altri, e toglierlo non cambia lo Span. Sono indipendenti quando **ciascuno porta una direzione nuova**, che gli altri non sanno produrre.

### Uno e due vettori (pp. 31–32)

I casi $k = 1$ e $k = 2$ si capiscono subito dalla Proposizione 7.2.

- **Un vettore $v_1$ è dipendente $\iff v_1 = 0$.** Se $v_1 = 0$, allora $1 \cdot v_1 = 0$ con coefficiente $1 \neq 0$. Se $v_1 \neq 0$ e $\lambda v_1 = 0$, allora $\lambda = 0$ (lezione L05, esercizio 8).
- **Due vettori $v_1, v_2$ sono dipendenti $\iff$ sono multipli**, cioè esiste $k \in \K$ con $v_1 = kv_2$ oppure $v_2 = kv_1$. È la Proposizione 7.2 con due vettori: «uno è combinazione dell'altro» vuol dire «uno è un multiplo dell'altro».

> [!ESEMPIO] 7.3 · Due vettori di $\R^2$
> I vettori $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ e $v_2 = \begin{pmatrix} -2 \\ -2 \end{pmatrix}$ di $\R^2$ sono dipendenti; $w_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ e $w_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ sono indipendenti perché non sono multipli.

Il perché, con i numeri: $v_2 = -2v_1$, quindi $2v_1 + v_2 = 0$. Invece $w_2 = kw_1$ richiederebbe $2 = k$ (prima coordinata) e $1 = 2k$ (seconda), cioè $k = 2$ e $k = \frac 12$ insieme: impossibile. E per lo stesso motivo nemmeno $w_1$ è un multiplo di $w_2$.

> [!TRAPPOLA] Il vettore nullo rende tutto dipendente
> Se nella lista c'è il vettore nullo, i vettori sono **sempre** dipendenti: $1 \cdot 0 + 0 \cdot v_2 + \dots + 0 \cdot v_k = 0$ è una combinazione nulla con un coefficiente uguale a $1$.

Nello strumento qui sotto $u = (1, 2)$ e $v = (2, 1)$ sono indipendenti: con le combinazioni $\lambda u + \mu v$ si raggiunge ogni punto del piano. Trascina $v$ in $(2, 4)$ oppure in $(-1, -2)$: diventa un multiplo di $u$, lo strumento lo segnala e le combinazioni restano sulla retta rossa.

```widget vettori
titolo: Due vettori del piano: indipendenti o multipli?
u: 1 2
v: 2 1
modo: combinazione
modi: combinazione
lambda: 1
mu: 1
```

### Tre o più vettori (p. 32)

Con tre o più vettori le cose si complicano: guardarli due alla volta non basta.

> [!ESEMPIO] 7.4 · Tre vettori dipendenti, ma a coppie indipendenti
> I vettori
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad v_3 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$$
> di $\R^3$ sono dipendenti, perché $v_1 - v_2 - v_3 = 0$. A coppie i tre vettori sono sempre indipendenti (non sono mai multipli), ma tutti e tre insieme non lo sono, e a differenza del caso $k = 2$ questo non si capisce a colpo d'occhio. Infatti ciascuno dei tre può essere scritto come combinazione degli altri due: $v_1 = v_2 + v_3$, oppure $v_2 = v_1 - v_3$, oppure $v_3 = v_1 - v_2$.

Il conto, coordinata per coordinata:

$$v_1 - v_2 - v_3 = \begin{pmatrix} 1 - 0 - 1 \\ 1 - 1 - 0 \\ 0 - 1 - (-1) \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}.$$

Come si **trova** una relazione così, invece di indovinarla? Si cerca $a v_1 + b v_2 + c v_3 = 0$ con $a, b, c$ incognite:

$$\begin{cases} a + c = 0 \\ a + b = 0 \\ b - c = 0 \end{cases}$$

Dalla prima $c = -a$, dalla seconda $b = -a$; la terza diventa $-a - (-a) = 0$, sempre vera. Quindi $a$ è libero: con $a = 1$ si ottiene $b = -1$, $c = -1$, cioè proprio $v_1 - v_2 - v_3 = 0$. Un'incognita libera vuol dire infinite soluzioni, quindi anche soluzioni non nulle: i vettori sono dipendenti. Geometricamente i tre vettori stanno in uno **stesso piano per l'origine**, il piano $x - y + z = 0$ (controlla: $1 - 1 + 0 = 0$, $0 - 1 + 1 = 0$, $1 - 0 - 1 = 0$).

> [!ESEMPIO] 7.5 · La base canonica di $\R^3$ è indipendente
> I vettori
> $$e_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \qquad e_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \qquad e_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$$
> sono indipendenti. Se una combinazione lineare produce il vettore nullo, $\lambda_1 e_1 + \lambda_2 e_2 + \lambda_3 e_3 = 0$, riscrivendo entrambi i membri come vettori si trova
> $$\lambda_1 \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + \lambda_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + \lambda_3 \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} \lambda_1 \\ \lambda_2 \\ \lambda_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}.$$
> Da questo si deduce $\lambda_1 = \lambda_2 = \lambda_3 = 0$: l'unica combinazione lineare di $e_1, e_2, e_3$ che dà il vettore nullo è quella banale, quindi i tre vettori sono indipendenti.

### Sottoinsiemi di vettori indipendenti (pp. 32–33)

> [!PROP] 7.6
> Se $v_1, \dots, v_k$ sono indipendenti, allora qualsiasi sottoinsieme di $\{v_1, \dots, v_k\}$ è anch'esso formato da vettori indipendenti.

La spiegazione delle dispense, con i passaggi. Supponi per assurdo che alcuni di loro, per comodità i primi $h$, siano dipendenti: esiste una combinazione non banale nulla $\lambda_1 v_1 + \dots + \lambda_h v_h = 0$. Aggiungendo gli altri vettori con coefficiente zero,

$$\lambda_1 v_1 + \dots + \lambda_h v_h + 0 v_{h+1} + \dots + 0 v_k = 0,$$

si ottiene una combinazione nulla di **tutti** i vettori, ancora non banale (i $\lambda_1, \dots, \lambda_h$ non erano tutti nulli). Questo contraddice l'indipendenza di $v_1, \dots, v_k$.

In particolare, se $v_1, \dots, v_k$ sono indipendenti, allora:

- i vettori $v_i$ sono **tutti diversi da zero** (sottoinsiemi di un solo vettore);
- i vettori $v_i$ sono **a coppie non multipli** (sottoinsiemi di due vettori).

> [!TRAPPOLA] Condizioni necessarie, non sufficienti
> L'Esempio 7.4 mostra che per $k \ge 3$ queste due condizioni **non bastano**: $v_1, v_2, v_3$ sono non nulli e a coppie non multipli, eppure sono dipendenti. Con tre o più vettori bisogna impostare la combinazione nulla e risolvere il sistema.

> [!OLTRE] · quanti vettori indipendenti ci sono in una lista: il metodo di Gauss
> Per liste lunghe il sistema diventa pesante. Nella lezione L13 le dispense usano il **metodo di Gauss** (lezione L11) e il **rango** (lezione L08): si scrivono i vettori come righe di una matrice e si fanno mosse del tipo $R_2 \to R_2 - R_1$. Ogni mossa sostituisce un vettore con la sua differenza con un multiplo di un altro, e lo Span non cambia. Alla fine le righe non nulle sono indipendenti, e il loro numero, il rango, dice quanti vettori indipendenti c'erano. Nello strumento la matrice ha per righe i tre vettori dell'Esempio 7.4: esce una riga di zeri e $\rk = 2$. Prova poi le righe `1 1 2`, `-1 1 -1`, `0 1 1` (i vettori $v_1, v_2, v_4$ dell'Esercizio 7.15): $\rk = 3$, indipendenti.

```widget gauss
titolo: Quanti vettori indipendenti? Un vettore per riga
matrice: 1 1 0; 0 1 1; 1 0 -1
modo: rango
modi: rango
```

## Basi (pp. 33–34)

Nel piano ogni vettore si scrive con due numeri, per esempio $(5, 3) = 5(1, 0) + 3(0, 1)$. I due vettori $(1, 0)$ e $(0, 1)$ bastano per costruire tutto il piano, e nessuno dei due è di troppo. Una lista così si chiama base. Le dispense la presentano come una delle definizioni più importanti del corso.

> [!DEF] 7.7 · Base
> Sia $V$ uno spazio vettoriale. Una sequenza $v_1, \dots, v_n \in V$ di vettori è una **base** se sono soddisfatte entrambe queste condizioni:
> 1. i vettori $v_1, \dots, v_n$ sono indipendenti;
> 2. i vettori $v_1, \dots, v_n$ generano $V$.

Pezzo per pezzo:

- **Generano $V$** vuol dire $V = \Span(v_1, \dots, v_n)$: qualsiasi vettore di $V$ è esprimibile come combinazione lineare dei $v_1, \dots, v_n$. Nessun vettore resta fuori.
- **Indipendenti**: nessuno dei $v_i$ è di troppo.
- Servono **entrambe** le condizioni. Pochi vettori possono essere indipendenti senza generare; tanti vettori possono generare senza essere indipendenti.
- È una **sequenza**: conta anche l'ordine, che diventerà importante con le coordinate (lezione L13).

| Vettori di $\R^2$ | indipendenti? | generano $\R^2$? | base? |
|---|---|---|---|
| $(1, 0)$ | sì | no: solo l'asse $x$ | no |
| $(1, 0),\ (0, 1),\ (1, 1)$ | no: $(1, 1) = (1, 0) + (0, 1)$ | sì | no |
| $(1, 0),\ (0, 1)$ | sì | sì | **sì** |
| $(1, 2),\ (2, 1)$ | sì | sì: $(a, b) = \frac{2b - a}3 (1, 2) + \frac{2a - b}3 (2, 1)$ | **sì** |
| $(1, 2),\ (2, 4)$ | no: multipli | no: solo la retta $y = 2x$ | no |

Nella penultima riga c'è un'altra base di $\R^2$: le basi di uno spazio sono infinite.

> [!ESEMPIO] 7.8 · La base canonica di $\K^n$
> Gli elementi
> $$e_1 = \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix}, \quad e_2 = \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix}, \quad \dots, \quad e_n = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix}$$
> formano una base di $\K^n$, detta **base canonica**.
>
> **Sono indipendenti.** Se $\lambda_1 e_1 + \dots + \lambda_n e_n = 0$, tradotto in vettori diventa
> $$\begin{pmatrix} \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix},$$
> quindi $\lambda_1 = \dots = \lambda_n = 0$.
>
> **Generano $\K^n$.** Un generico vettore $x \in \K^n$ si scrive come combinazione lineare di $e_1, \dots, e_n$:
> $$x = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = x_1 \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix} + x_2 \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix} + \dots + x_n \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix} = x_1 e_1 + x_2 e_2 + \dots + x_n e_n.$$

Il vettore $e_i$ ha un $1$ al posto $i$ e zeri altrove. Per esempio in $\R^3$:

$$\begin{pmatrix} 5 \\ -2 \\ 7 \end{pmatrix} = 5e_1 - 2e_2 + 7e_3:$$

i coefficienti rispetto alla base canonica sono proprio le coordinate del vettore.

> [!ESEMPIO] 7.9 · La base canonica dei polinomi
> Nello spazio $\K_n[x]$ dei polinomi di grado minore o uguale a $n$, gli elementi $1, x, x^2, \dots, x^n$ formano una base, detta **base canonica**.
>
> **Sono indipendenti**: se $\lambda_0 \cdot 1 + \lambda_1 x + \dots + \lambda_n x^n = 0$, allora $\lambda_0 = \dots = \lambda_n = 0$.
>
> **Generano $\K_n[x]$**: ciascun polinomio di grado minore o uguale a $n$ si scrive come $p(x) = a_n x^n + \dots + a_1 x + a_0$, e questa scrittura è già una combinazione lineare dei vettori $1, x, \dots, x^n$, con coefficienti $a_0, a_1, \dots, a_n$.

Perché vale l'indipendenza? A destra dell'uguale c'è il **polinomio nullo**, quello con tutti i coefficienti uguali a $0$. Due polinomi sono uguali quando hanno gli stessi coefficienti, quindi $\lambda_0 + \lambda_1 x + \dots + \lambda_n x^n$ è il polinomio nullo solo se ogni $\lambda_i$ è $0$. (Visto come funzione, un polinomio non nullo di grado $\le n$ ha al massimo $n$ radici, lezione L04: non può valere $0$ in tutti i punti.)

> [!TRAPPOLA] $\K_n[x]$ ha $n + 1$ vettori di base, non $n$
> La base canonica di $\K_2[x]$ è $1, x, x^2$: **tre** polinomi, perché c'è anche la costante $1$. Per $\K_n[x]$ i vettori sono $1, x, \dots, x^n$: $n + 1$ in tutto.

> [!OLTRE] · a che cosa serve una base: le coordinate
> Il libro di Martelli (Proposizione 2.3.11) mostra che, fissata una base $v_1, \dots, v_n$, **ogni vettore si scrive in un solo modo** come $\lambda_1 v_1 + \dots + \lambda_n v_n$. Se ci fossero due scritture, $\sum \lambda_i v_i = \sum \mu_i v_i$, sottraendo si otterrebbe $\sum (\lambda_i - \mu_i) v_i = 0$, e per l'indipendenza $\lambda_i = \mu_i$ per ogni $i$. I numeri $\lambda_1, \dots, \lambda_n$ si chiamano **coordinate** del vettore rispetto alla base. Per esempio, rispetto alla base $(1, 1), (-1, 1)$ di $\R^2$, il vettore $(2, 0) = 1 \cdot (1, 1) - 1 \cdot (-1, 1)$ ha coordinate $1, -1$. Le coordinate si studiano nella lezione L13.

## Dimensione (pp. 34–35)

Una retta per l'origine in $\R^2$ ha basi con un vettore: $(1, 2)$, oppure $(2, 4)$, oppure $(-1, -2)$. Il piano $\R^2$ ha basi con due vettori: $(1, 0), (0, 1)$, oppure $(1, 2), (2, 1)$. Ogni spazio ha infinite basi, ma sembra che il **numero** di vettori sia sempre lo stesso. È così, ed è il teorema fondamentale della lezione.

> [!TEOREMA] 7.10
> Se uno spazio vettoriale $V$ ha una base formata da $n$ vettori, allora ogni base di $V$ contiene $n$ vettori.

Questo teorema permette di definire in modo rigoroso un concetto intuitivo.

> [!DEF] 7.11 · Dimensione
> Se uno spazio vettoriale $V$ ha una base $v_1, \dots, v_n$, diciamo che $V$ ha **dimensione** $n$. Se $V$ non ammette una base finita, diciamo che ha dimensione $\infty$.

Pezzo per pezzo:

- La dimensione si indica con $\dim V$.
- La definizione è **ben posta** grazie al Teorema 7.10: $V$ ha tante basi, ma hanno tutte lo stesso numero $n$ di elementi, quindi il numero $n$ non dipende dalla base scelta. Senza il teorema, due persone potrebbero trovare due «dimensioni» diverse per lo stesso spazio.
- Per calcolare una dimensione basta trovare **una** base e contarne i vettori.
- Lo spazio $\{0\}$ contiene solo il vettore nullo, che da solo è dipendente: non ha basi con almeno un vettore. Per convenzione la sua base è la lista vuota e $\dim\{0\} = 0$ (il libro di Martelli: $V$ ha dimensione $0$ se e solo se $V = \{0\}$). Così un punto ha dimensione $0$, come a scuola.

Con le basi già trovate:

| Spazio | una base | dimensione |
|---|---|---:|
| $\K^n$ | $e_1, \dots, e_n$ (Esempio 7.8) | $n$ |
| $\K_n[x]$, polinomi di grado $\le n$ | $1, x, \dots, x^n$ (Esempio 7.9) | $n + 1$ |
| $M(m, n, \K)$ | le matrici $e_{ij}$ (Esercizio 7.13) | $mn$ |
| $\K[x]$, tutti i polinomi | nessuna base finita | $\infty$ |
| $\{0\}$ | la lista vuota | $0$ |

**Perché $\K[x]$ ha dimensione infinita.** Le dispense lo ricordano come conseguenza della definizione; il motivo è questo. Prendi una qualsiasi lista finita di polinomi $p_1, \dots, p_k$ e chiama $N$ il più grande dei loro gradi. Ogni combinazione lineare dei $p_i$ ha grado al massimo $N$, quindi $x^{N+1}$ non è una loro combinazione. Nessuna lista finita genera $\K[x]$: non esiste una base finita.

> [!ESEMPIO] · la dimensione di alcuni sottospazi
> - La retta $y = 2x$ di $\R^2$ è $\Span((1, 2))$, e $(1, 2) \neq 0$ è indipendente: una base con un vettore, **dimensione 1**.
> - Il piano $z = x + y$ di $\R^3$ è $\Span((1, 0, 1), (0, 1, 1))$ (Esercizio 6.10); i due vettori non sono multipli, quindi sono indipendenti: **dimensione 2**.
> - Le matrici $\begin{pmatrix} a & b \\ b & a \end{pmatrix}$ dell'Esercizio 6.9 sono $\Span(I, J)$ con $I$ e $J$ non multiple: **dimensione 2**.
> - Le matrici diagonali $D(3)$: ogni matrice diagonale è $a e_{11} + b e_{22} + c e_{33}$, e le tre matrici sono indipendenti (ognuna ha un $1$ dove le altre hanno $0$): **dimensione 3**.

> [!OLTRE] · perché tutte le basi hanno lo stesso numero di vettori
> Le dispense enunciano il Teorema 7.10 senza dimostrazione. Il libro di Martelli (§2.3.4) lo deduce da un **lemma di scambio**: se $v_1, \dots, v_n$ generano $V$ e $w_1, \dots, w_n$ sono indipendenti, allora anche $w_1, \dots, w_n$ generano $V$. L'idea è sostituire i $v$ con i $w$ uno alla volta, senza mai perdere la proprietà di generare. La dimostrazione completa è nel riquadro qui sotto.

> [!DIM] del Teorema 7.10, dal libro di Martelli
> **Lemma.** Se $v_1, \dots, v_n$ generano $V$ e $w_1, \dots, w_n \in V$ sono indipendenti, allora anche $w_1, \dots, w_n$ generano $V$.
>
> *Dimostrazione del lemma.* Si scambia un vettore alla volta. Supponi di aver già mostrato che $V = \Span(w_1, \dots, w_{s-1}, v_s, \dots, v_n)$ (all'inizio, con $s = 1$, è l'ipotesi). Allora $w_s$ è una combinazione di questi vettori:
> $$w_s = \lambda_1 w_1 + \dots + \lambda_{s-1} w_{s-1} + \lambda_s v_s + \dots + \lambda_n v_n.$$
> Almeno un coefficiente $\lambda_i$ con $i \ge s$ è diverso da zero: altrimenti questa sarebbe una relazione di dipendenza tra $w_1, \dots, w_s$, che invece sono indipendenti (Proposizione 7.6). Riordinando i $v$, supponi $\lambda_s \neq 0$. Dividendo per $\lambda_s$ ricavi $v_s$ come combinazione di $w_1, \dots, w_s, v_{s+1}, \dots, v_n$; quindi questi vettori generano ancora tutto $V$. Dopo $n$ passi, $V = \Span(w_1, \dots, w_n)$.
>
> *Dimostrazione del teorema.* Per assurdo, siano $v_1, \dots, v_n$ e $w_1, \dots, w_m$ due basi di $V$ con $n < m$. I $v_i$ generano $V$ e $w_1, \dots, w_n$ sono indipendenti (sottoinsieme di vettori indipendenti). Per il lemma, $w_1, \dots, w_n$ generano $V$, quindi $w_{n+1}$ è una loro combinazione lineare: allora $w_1, \dots, w_m$ sono dipendenti (Proposizione 7.2). Assurdo.

### Basta una condizione su due (p. 35)

Per dimostrare che dei vettori sono una base bisognerebbe controllare due cose: che siano indipendenti e che generino. Il prossimo teorema dice che, se il **numero** di vettori è quello giusto, ne basta una.

> [!TEOREMA] 7.12
> Se $\dim V = n$ e $\{v_1, \dots, v_n\}$ è un insieme di $n$ vettori, allora $v_1, \dots, v_n$ formano una base di $V$ se e solo se vale **una** delle due condizioni della definizione di base (mentre l'altra condizione vale poi automaticamente).

Pezzo per pezzo:

- L'ipotesi chiave è che i vettori siano **esattamente $n = \dim V$**.
- In pratica si controlla quasi sempre l'**indipendenza**, che è un sistema con il termine noto zero.
- Esempio: in $\R^3$ tre vettori indipendenti sono sempre una base; tre vettori che generano $\R^3$ sono sempre indipendenti.

> [!ESEMPIO] · una base di $\R^2$ in una riga
> $(1, 2)$ e $(2, 1)$ non sono multipli, quindi sono indipendenti (Esempio 7.3). Sono $2 = \dim \R^2$ vettori: per il Teorema 7.12 sono una base di $\R^2$, senza bisogno di controllare che generino.

> [!TRAPPOLA] Il teorema vale solo con il numero giusto di vettori
> Due vettori indipendenti di $\R^3$ **non** sono una base: sono $2 \neq 3$ vettori. Quattro vettori di $\R^3$ che generano **non** sono una base: sono troppi, e sono per forza dipendenti (riquadro qui sotto).

> [!OLTRE] · le conseguenze da usare nei quiz
> Dal libro di Martelli (Proposizioni 2.3.23 e 2.3.25 e gli algoritmi dei §2.3.5–2.3.6), in uno spazio $V$ con $\dim V = n$:
> - **più di $n$ vettori sono sempre dipendenti**: se fossero indipendenti, i primi $n$ sarebbero una base (Teorema 7.12) e gli altri sarebbero loro combinazioni;
> - **meno di $n$ vettori non generano mai $V$**: da una lista di generatori si possono togliere uno alla volta i vettori di troppo (Proposizione 7.2) fino a restare con vettori indipendenti, cioè con una base, che dovrebbe avere meno di $n$ vettori;
> - **$\dim \Span(v_1, \dots, v_k) \le k$**, ed è uguale al massimo numero di vettori indipendenti tra $v_1, \dots, v_k$ (è l'osservazione che la lezione L08 usa per il rango);
> - **ogni sottospazio $U \subset V$ ha $\dim U \le \dim V$**, e $\dim U = \dim V$ solo se $U = V$;
> - **vettori indipendenti si completano a una base**: finché non generano, si aggiunge un vettore fuori dal loro Span, e la lista resta indipendente (esercizio 11).

> [!DIM] del Teorema 7.12, dal libro di Martelli
> Siano $v_1, \dots, v_n$ vettori di $V$ con $\dim V = n$.
> - **Se sono indipendenti, generano.** Una base qualsiasi di $V$ ha $n$ vettori che generano; per il lemma di scambio (riquadro precedente), anche i $v_i$, indipendenti e in numero di $n$, generano $V$.
> - **Se generano, sono indipendenti.** Se fossero dipendenti, uno di loro sarebbe combinazione degli altri (Proposizione 7.2) e si potrebbe togliere senza cambiare lo Span. Ripetendo si arriverebbe a una base di $V$ con meno di $n$ vettori, contro il Teorema 7.10.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: dipendenza e indipendenza nel **§2.3.1** (pp. 60–62, con la Proposizione 2.3.4 = Proposizione 7.6); basi e basi canoniche di $\K^n$, $\K_n[x]$ e $M(m, n, \K)$ nel **§2.3.2** (pp. 62–64); coordinate nel **§2.3.3** (pp. 64–65); dimensione, lemma di scambio e dimensione infinita di $\K[x]$ nel **§2.3.4** (pp. 65–67); algoritmi di completamento e di estrazione e Proposizione 2.3.23 (= Teorema 7.12) nei **§2.3.5–2.3.6** (pp. 67–69); dimensione dei sottospazi nel **§2.3.7** (pp. 69–70).

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla con 5 risposte (servono almeno 6 punti per far correggere i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate scritte a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

Questa lezione è tra le più presenti nei quiz. Le domande tipiche, con gli appelli in cui sono uscite:

| Tipo di domanda | Appelli |
|---|---|
| dimensione di uno spazio di matrici | $T^s(3)$: 24/01/2024, domanda 5; $S(3)$: 15/01/2026, domanda 4 |
| dimensione di uno Span o di un sottospazio | 02/09/2025, domanda 10; 15/01/2026, domanda 3; 10/07/2025, domanda 2; 03/07/2026, domanda 1 |
| «sono generatori e/o linearmente indipendenti?» | 06/09/2024, domanda 2; 16/01/2025, domanda 2 |
| quale insieme è una base, o completa una base | 10/06/2024, domanda 3; 07/09/2026, domanda 2 |

Nei problemi da 11 punti le basi servono sempre: «trovare una base di $\Ker$ e la sua dimensione» (02/09/2025, problema 11), basi di autovettori, basi ortonormali. Li vedrai dalla lezione L14 in poi.

> [!ESAME] Appello del 16/01/2025, domanda 2
> **Testo.** I polinomi $1$, $x$, $x^2$ e $1 + 2x + x^2$ di $\R_2[x]$ sono generatori e/o linearmente indipendenti? (a) Sono linearmente indipendenti, ma non generatori. (b) Non sono né linearmente indipendenti né generatori. (c) La domanda è mal posta: i polinomi non sono vettori. (d) Sono generatori, ma non linearmente indipendenti. (e) Sono sia generatori che linearmente indipendenti.
>
> **Soluzione.** (d). I primi tre sono la base canonica di $\R_2[x]$ (Esempio 7.9), quindi già generano: aggiungendo un vettore generano ancora. Ma sono $4$ vettori in uno spazio di dimensione $3$, quindi sono dipendenti; esplicitamente $1 + 2x + x^2 = 1 \cdot 1 + 2 \cdot x + 1 \cdot x^2$. La (c) è falsa: i polinomi sono vettori dello spazio vettoriale $\R_2[x]$ (lezione L05).

> [!ESAME] Appello del 07/09/2026, domanda 2
> **Testo.** Siano $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $D = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$, $E = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $F = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$. Quale insieme forma una base di $M(2, \R)$? (a) $\{A, B, F\}$; (b) $\{A, C, D, E\}$; (c) $\{A, B, E, F\}$; (d) $\{B, C, D, E, F\}$; (e) $\{B, C, F\}$.
>
> **Soluzione.** (c). Poiché $\dim M(2, \R) = 4$, una base ha esattamente $4$ elementi: restano solo (b) e (c), e per il Teorema 7.12 basta controllare l'indipendenza. In (b) $C + D = A$: dipendenti. In (c) impongo $x_1 A + x_2 B + x_3 E + x_4 F = 0$:
> $$\begin{pmatrix} x_2 + x_3 + x_4 & x_1 + x_3 + x_4 \\ x_1 + x_3 & x_3 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}.$$
> Dalla casella in basso a destra $x_3 = 0$; poi $x_1 = 0$ (in basso a sinistra), $x_4 = 0$ (in alto a destra), $x_2 = 0$ (in alto a sinistra). Solo la combinazione banale: è una base.

> [!ESAME] Appello del 15/01/2026, domanda 4
> **Testo.** La dimensione dello spazio $S(3)$ delle matrici $3 \times 3$ simmetriche è: (a) nove; (b) zero; (c) tre; (d) sei; (e) $S(3)$ non ha una dimensione perché non è uno spazio vettoriale.
>
> **Soluzione.** (d). Una matrice simmetrica $3 \times 3$ è determinata dai $6$ coefficienti sulla diagonale e sopra di essa:
> $$\begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix} = a e_{11} + d e_{22} + f e_{33} + b(e_{12} + e_{21}) + c(e_{13} + e_{31}) + e(e_{23} + e_{32}).$$
> Le sei matrici a destra generano $S(3)$ e sono indipendenti: se la combinazione è la matrice nulla, ogni coefficiente compare da solo in qualche casella, quindi è zero. La (e) è falsa per la Proposizione 6.5. Con lo stesso ragionamento $\dim T^s(3) = 6$ (appello del 24/01/2024, domanda 5) e $\dim A(3) = 3$.

> [!METODO] · «Sono generatori e/o indipendenti?»
> Sono $k$ vettori in uno spazio $V$ di dimensione $n$.
> 1. **Conta.** Se $k > n$ sono sicuramente dipendenti; se $k < n$ sicuramente non generano $V$.
> 2. **Trova i vettori di troppo.** Imposta $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ e risolvi, oppure cerca un vettore che sia combinazione degli altri. Togliendo i vettori di troppo ottieni $r$ vettori indipendenti, e $r = \dim \Span(v_1, \dots, v_k)$.
> 3. **Concludi.** Sono indipendenti se e solo se $r = k$; generano $V$ se e solo se $r = n$; sono una base se e solo se $r = k = n$.
>
> Le risposte del tipo «la domanda è mal posta» (i vettori sono troppi, i polinomi non sono vettori) sono trappole: la domanda ha sempre senso.

> [!METODO] · la dimensione di un sottospazio
> 1. Scrivi l'elemento generico del sottospazio usando le condizioni per eliminare le variabili dipendenti: restano alcuni **parametri liberi**.
> 2. Raccogli i parametri: l'elemento generico diventa una combinazione lineare, con un vettore per ogni parametro. Il sottospazio è lo Span di quei vettori.
> 3. Controlla che siano indipendenti (di solito lo sono: ogni parametro compare da solo in qualche coordinata).
> 4. La dimensione è il numero di vettori, cioè il numero di parametri liberi.
>
> Esempio: $W = \{p \in \R_3[x] \mid p(2) = 0\}$. Per la lezione L04, $p(2) = 0$ vuol dire $p(x) = (x - 2)(a + bx + cx^2)$, quindi $W = \Span\big(x - 2,\ x(x - 2),\ x^2(x - 2)\big)$. I tre polinomi hanno gradi diversi, $1$, $2$ e $3$, quindi sono indipendenti (esercizio 5): $\dim W = 3$. È il tipo di domanda degli appelli del 10/07/2025 (domanda 2, con $p(6) = 0$) e del 03/07/2026 (domanda 1, con $p(2) = p(-2) = 0$, dove la dimensione è $2$).

> [!TRAPPOLA] Gli errori più comuni
> - Dire che $\dim \K_n[x] = n$: è $n + 1$, per via della costante.
> - Dire che vettori a coppie non multipli sono indipendenti: vale solo per due vettori (Esempio 7.4).
> - Usare il Teorema 7.12 con un numero sbagliato di vettori.
> - Confondere «generano» con «sono una base»: una base deve anche essere indipendente.
> - Scegliere «non è uno spazio vettoriale» per $S(3)$, $T^s(3)$ o uno Span: sono sempre sottospazi. Quella risposta è giusta solo per insiemi che non contengono lo zero, come $O(2)$ nell'appello del 10/07/2024 (domanda 2).

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la definizione di indipendenza come implicazione; la Proposizione 7.2; i casi con uno e due vettori; la definizione di base; la tabella delle dimensioni ($\K^n$, $\K_n[x]$, $M(m, n)$, e poi $D(n) = n$, $T^s(n) = S(n) = \frac{n(n+1)}2$, $A(n) = \frac{n(n-1)}2$); il Teorema 7.12; la regola del conteggio (più di $n$ vettori sono dipendenti, meno di $n$ non generano).

## Quiz

```quiz
D: I vettori $(1, 0, 1)$, $(0, 1, 1)$, $(1, 1, 2)$, $(0, 0, 1)$ di $\R^3$ sono generatori e/o linearmente indipendenti?
- Sono linearmente indipendenti, ma non generatori.
- Non sono né linearmente indipendenti né generatori.
- La domanda è mal posta: i vettori sono 4 e non 3.
+ Sono generatori, ma non linearmente indipendenti.
- Sono sia generatori che linearmente indipendenti.
= Quattro vettori in $\R^3$ sono sempre dipendenti; infatti $(1, 1, 2) = (1, 0, 1) + (0, 1, 1)$. Generano: $(1, 0, 1)$, $(0, 1, 1)$ e $(0, 0, 1)$ sono indipendenti (da $a(1, 0, 1) + b(0, 1, 1) + c(0, 0, 1) = 0$ viene $a = 0$, $b = 0$ e poi $c = 0$), quindi per il Teorema 7.12 sono già una base di $\R^3$. Simile all'appello del 06/09/2024, domanda 2.

D: I polinomi $1 + x$, $1 - x$ e $2$ di $\R_2[x]$ sono generatori e/o linearmente indipendenti?
- Sono linearmente indipendenti, ma non generatori.
+ Non sono né linearmente indipendenti né generatori.
- Sono generatori, ma non linearmente indipendenti.
- Sono sia generatori che linearmente indipendenti, cioè una base.
- La domanda è mal posta: $2$ è un numero, non un polinomio.
= $(1 + x) + (1 - x) = 2$, quindi sono dipendenti. Tutte le loro combinazioni hanno grado $\le 1$, quindi $x^2$ non si ottiene: non generano $\R_2[x]$. Lo Span è $\R_1[x]$, di dimensione $2$. E $2$ è un polinomio di grado $0$. Simile all'appello del 16/01/2025, domanda 2.

D: Qual è la dimensione di $\Span\big((1, 1, 0),\ (0, 1, 1),\ (1, 2, 1)\big)$?
- $0$
- $1$
+ $2$
- $3$
- $4$
= $(1, 2, 1) = (1, 1, 0) + (0, 1, 1)$, quindi il terzo vettore è di troppo. I primi due non sono multipli, quindi sono indipendenti: sono una base dello Span, che ha dimensione $2$ (un piano). Simile all'appello del 02/09/2025, domanda 10.

D: Qual è la dimensione dello spazio $A(3)$ delle matrici $3 \times 3$ antisimmetriche?
- Nove.
- Sei.
+ Tre.
- Zero.
- $A(3)$ non ha una dimensione perché non è uno spazio vettoriale.
= Una matrice antisimmetrica $3 \times 3$ ha diagonale nulla ed è determinata da $a_{12}$, $a_{13}$, $a_{23}$: è $a F_1 + b F_2 + c F_3$ con tre matrici indipendenti (lezione L06, esercizio 9). $A(3)$ è un sottospazio per la Proposizione 6.5. Simile agli appelli del 24/01/2024 (domanda 5) e del 15/01/2026 (domanda 4), su $T^s(3)$ e $S(3)$, entrambe di dimensione $6$.

D: Siano $v_1, \dots, v_5$ cinque vettori di $\R^3$ e sia $X = \Span(v_1, \dots, v_5)$. Quale affermazione è sempre vera?
- $\dim X = 5$
+ $\dim X \le 3$
- $X = \R^3$
- $v_1, \dots, v_5$ sono linearmente indipendenti.
- $\dim X$ non è ben definita, perché $X$ non è necessariamente un sottospazio.
= $X$ è un sottospazio di $\R^3$ (Proposizione 6.7), e un sottospazio di $\R^3$ ha dimensione al massimo $3$: una sua base è fatta di vettori indipendenti di $\R^3$, che sono al massimo $3$. Cinque vettori in $\R^3$ sono sempre dipendenti, quindi $\dim X = 5$ è impossibile; e $X = \R^3$ non è garantito (per esempio se sono tutti multipli di uno stesso vettore). Simile all'appello del 15/01/2026, domanda 3, dove con tre vettori la risposta giusta era $\dim X \le 3$.

D: Siano $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $D = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$, $E = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$. Quale insieme è una base di $M(2, \R)$?
+ $\{A, B, C, D\}$
- $\{A, B, C\}$
- $\{A, C, D, E\}$
- $\{A, B, C, D, E\}$
- $\{B, D, E\}$
= Una base di $M(2, \R)$ ha $4$ elementi: tre o cinque non vanno. $aA + bB + cC + dD = \begin{pmatrix} a + b & c + d \\ c - d & a - b \end{pmatrix} = 0$ dà $a + b = a - b = 0$ e $c + d = c - d = 0$, quindi tutti zero: $\{A, B, C, D\}$ è una base (Teorema 7.12). In $\{A, C, D, E\}$ invece $E = A + C$. Simile all'appello del 07/09/2026, domanda 2.

D: Quale polinomio $s(x)$ si può aggiungere a $1 + x$ e $x + x^2$ per ottenere una base di $\R_2[x]$?
+ $s(x) = 1$
- $s(x) = 1 + 2x + x^2$
- $s(x) = 1 - x^2$
- $s(x) = x^3$
- $s(x) = 0$
= Con $s = 1$: da $a(1 + x) + b(x + x^2) + c = (a + c) + (a + b)x + bx^2 = 0$ viene $b = 0$, poi $a = 0$, poi $c = 0$; tre vettori indipendenti in uno spazio di dimensione $3$ sono una base. Gli altri: $1 + 2x + x^2 = (1 + x) + (x + x^2)$ e $1 - x^2 = (1 + x) - (x + x^2)$ sono dipendenti dai primi due; $x^3 \notin \R_2[x]$; il polinomio nullo rende la lista dipendente. Simile all'appello del 10/06/2024, domanda 3.

D: In $\R^3$, tre vettori linearmente indipendenti:
+ sono sempre una base di $\R^3$.
- possono non generare $\R^3$.
- sono una base solo se sono $e_1, e_2, e_3$.
- generano sempre un piano.
- sono una base solo se nessuno ha coordinate nulle.
= È il Teorema 7.12: sono $3 = \dim \R^3$ vettori indipendenti, quindi generano e sono una base. Le basi di $\R^3$ sono infinite, e i vettori possono avere coordinate nulle (come $e_1, e_2, e_3$ stessi).

D: Qual è la dimensione del sottospazio $W = \{p(x) \in \R_3[x] \mid p(2) = 0\}$?
N: 3
= $p(2) = 0$ vuol dire $p(x) = (x - 2)(a + bx + cx^2)$, quindi $W = \Span\big(x - 2,\ x(x - 2),\ x^2(x - 2)\big)$, tre polinomi di gradi diversi e quindi indipendenti: $\dim W = 3$. Simile all'appello del 10/07/2025, domanda 2 (con $p(6) = 0$).

D: Per quali valori di $k \in \R$ i vettori $(1, k)$ e $(k, 4)$ di $\R^2$ sono linearmente dipendenti?
- Solo per $k = 2$.
+ Per $k = 2$ e per $k = -2$.
- Solo per $k = 4$.
- Per nessun valore di $k$.
- Per ogni valore di $k$.
= Due vettori sono dipendenti se e solo se sono multipli. $(k, 4) = t(1, k)$ richiede $t = k$ e $4 = tk = k^2$, cioè $k = \pm 2$ (e $(1, k)$ non è mai nullo, quindi basta questo caso). Con $k = 2$: $(2, 4) = 2(1, 2)$; con $k = -2$: $(-2, 4) = -2(1, -2)$.
```

## Esercizi

::: esercizio medio Esercizio 7.13 delle dispense: la base canonica delle matrici
Per ogni $1 \le i \le m$ e $1 \le j \le n$ indichiamo con $e_{ij}$ la matrice $m \times n$ che ha tutti zeri, tranne un $1$ nella casella di riga $i$ e colonna $j$. Per esempio, per le matrici $2 \times 2$:
$$e_{11} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad e_{12} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad e_{21} = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}, \quad e_{22} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}.$$
Dimostra che le matrici $e_{ij}$, con $1 \le i \le m$ e $1 \le j \le n$, formano una base di $M(m, n, \K)$. In particolare $\dim M(m, n, \K) = mn$.
::: soluzione
È la stessa dimostrazione della base canonica di $\K^n$ (Esempio 7.8), con due indici invece di uno.

**Generano.** Ogni matrice si scrive come combinazione delle $e_{ij}$, con i suoi coefficienti:
$$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix} = \sum_{i, j} a_{ij} e_{ij},$$
perché $a_{ij} e_{ij}$ è la matrice con $a_{ij}$ nella casella $(i, j)$ e zeri altrove, e sommando tutte queste matrici si riempiono tutte le caselle. Per esempio
$$\begin{pmatrix} 3 & -1 \\ 0 & 5 \end{pmatrix} = 3e_{11} - e_{12} + 0e_{21} + 5e_{22}.$$

**Sono indipendenti.** Se $\sum_{i, j} \lambda_{ij} e_{ij} = 0$, esplicitando le matrici
$$\begin{pmatrix} \lambda_{11} & \cdots & \lambda_{1n} \\ \vdots & & \vdots \\ \lambda_{m1} & \cdots & \lambda_{mn} \end{pmatrix} = \begin{pmatrix} 0 & \cdots & 0 \\ \vdots & & \vdots \\ 0 & \cdots & 0 \end{pmatrix},$$
quindi $\lambda_{ij} = 0$ per ogni $i, j$.

**Dimensione.** Le matrici $e_{ij}$ sono una per ogni casella: $m$ righe per $n$ colonne, cioè $mn$ matrici. Quindi $\dim M(m, n, \K) = mn$; per esempio $\dim M(2, 3) = 6$ e $\dim M(3) = 9$.
:::

::: esercizio base Esercizio 7.14 delle dispense: una base di $\R^2$
Dimostra che i vettori $\begin{pmatrix} -1 \\ 1 \end{pmatrix}$ e $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ formano una base di $\R^2$.
::: soluzione
**Con il Teorema 7.12.** Sono due vettori e $\dim \R^2 = 2$, quindi basta l'indipendenza. Due vettori sono dipendenti solo se sono multipli: $(2, 1) = k(-1, 1)$ richiederebbe $k = -2$ (prima coordinata) e $k = 1$ (seconda), impossibile. Quindi sono indipendenti, e sono una base.

**Direttamente, controllando anche che generino.** Cerco $t, u$ con $t(-1, 1) + u(2, 1) = (x, y)$ per un vettore qualsiasi $(x, y)$:
$$\begin{cases} -t + 2u = x \\ t + u = y \end{cases}$$
Sommando le due equazioni: $3u = x + y$, quindi $u = \frac{x + y}3$. Dalla seconda: $t = y - u = \frac{-x + 2y}3$. La soluzione esiste sempre, quindi i vettori generano $\R^2$; ed è unica (per $(x, y) = (0, 0)$ dà $t = u = 0$), quindi sono indipendenti.

Controllo con $(x, y) = (1, 2)$: $u = 1$, $t = 1$, e infatti $(-1, 1) + (2, 1) = (1, 2)$.
:::

::: esercizio medio Esercizio 7.15 delle dispense: dipendenti e indipendenti in $\R^3$
Considera i vettori di $\R^3$
$$v_1 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}, \quad v_2 = \begin{pmatrix} -1 \\ 1 \\ -1 \end{pmatrix}, \quad v_3 = \begin{pmatrix} 1 \\ 5 \\ 4 \end{pmatrix}, \quad v_4 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$
Mostra che $v_1, v_2, v_3$ sono dipendenti e $v_1, v_2, v_4$ indipendenti.
::: soluzione
**$v_1, v_2, v_3$ sono dipendenti.** Provo a scrivere $v_3$ come combinazione di $v_1$ e $v_2$ (Proposizione 7.2): cerco $a, b$ con $a v_1 + b v_2 = v_3$, cioè
$$\begin{cases} a - b = 1 \\ a + b = 5 \\ 2a - b = 4 \end{cases}$$
Sommando le prime due: $2a = 6$, quindi $a = 3$ e $b = 2$. La terza: $2 \cdot 3 - 2 = 4$. Vera. Quindi $v_3 = 3v_1 + 2v_2$, cioè $3v_1 + 2v_2 - v_3 = 0$: una combinazione nulla con coefficienti non nulli.

Controllo: $3(1, 1, 2) + 2(-1, 1, -1) = (3 - 2,\ 3 + 2,\ 6 - 2) = (1, 5, 4) = v_3$.

**$v_1, v_2, v_4$ sono indipendenti.** Suppongo $a v_1 + b v_2 + c v_4 = 0$:
$$\begin{cases} a - b = 0 \\ a + b + c = 0 \\ 2a - b + c = 0 \end{cases}$$
Dalla prima $b = a$. Sostituendo: la seconda dà $2a + c = 0$, la terza $a + c = 0$. Sottraendo queste due: $a = 0$; quindi $c = 0$ e $b = 0$. Solo la combinazione banale: indipendenti. Essendo tre vettori indipendenti in $\R^3$, sono anche una base di $\R^3$ (Teorema 7.12).
:::

::: esercizio base Dipendenti o indipendenti?
Per ciascuna lista di' se i vettori sono dipendenti o indipendenti. Se sono dipendenti, scrivi una combinazione non banale uguale a zero.
(a) $(3, -6)$ e $(-1, 2)$ in $\R^2$.
(b) $(1, 0, 2)$ e $(2, 0, 1)$ in $\R^3$.
(c) $(1, 2)$, $(1, 1)$ e $(2, 0)$ in $\R^2$.
(d) $(1, 2, 3)$, $(0, 0, 0)$ e $(4, 5, 6)$ in $\R^3$.
(e) $(1, 2, 3)$, $(0, 1, 5)$ e $(0, 0, 2)$ in $\R^3$.
::: soluzione
(a) **Dipendenti**: $(3, -6) = -3 \cdot (-1, 2)$, quindi $(3, -6) + 3(-1, 2) = (0, 0)$.

(b) **Indipendenti**: sono due vettori non multipli. Da $(2, 0, 1) = k(1, 0, 2)$ servirebbero $k = 2$ e $1 = 2k$, cioè $k = \frac 12$: impossibile.

(c) **Dipendenti**: sono tre vettori in $\R^2$, che ha dimensione $2$. Una relazione (dal libro di Martelli, Esempio 2.3.2): $-2(1, 2) + 4(1, 1) - (2, 0) = (-2 + 4 - 2,\ -4 + 4 - 0) = (0, 0)$.

(d) **Dipendenti**: c'è il vettore nullo, e $0 \cdot (1, 2, 3) + 1 \cdot (0, 0, 0) + 0 \cdot (4, 5, 6) = 0$.

(e) **Indipendenti.** Da $a(1, 2, 3) + b(0, 1, 5) + c(0, 0, 2) = 0$: la prima coordinata dà $a = 0$; la seconda $2a + b = 0$, quindi $b = 0$; la terza $3a + 5b + 2c = 0$, quindi $c = 0$. La forma «a scalini» (ogni vettore ha zeri dove il precedente comincia) rende le equazioni risolubili una alla volta.
:::

::: esercizio medio Polinomi indipendenti e basi di $\R_3[x]$
(a) Dimostra che polinomi non nulli di gradi tutti diversi sono linearmente indipendenti.
(b) I polinomi $f = x^3 + x$, $g = x^2 - 1$, $h = x^3 + x^2 + x - 1$ sono indipendenti?
(c) I polinomi $f = x^3 + x$, $g = x^2 - 1$, $k = x^3 - x$ sono indipendenti? Sono una base di $\R_3[x]$? Se no, completali a una base.
::: soluzione
(a) Siano $p_1, \dots, p_k$ non nulli con gradi $d_1 < d_2 < \dots < d_k$, e sia $\lambda_1 p_1 + \dots + \lambda_k p_k = 0$. Il termine $x^{d_k}$ compare solo in $p_k$, con un coefficiente $c \neq 0$: nella combinazione il coefficiente di $x^{d_k}$ è $\lambda_k c$, che deve essere $0$, quindi $\lambda_k = 0$. Ora resta una combinazione nulla di $p_1, \dots, p_{k-1}$, e si ripete: $\lambda_{k-1} = 0$, e così via fino a $\lambda_1 = 0$.

(b) **No**: $h = f + g$, perché $(x^3 + x) + (x^2 - 1) = x^3 + x^2 + x - 1$. Quindi $f + g - h = 0$.

(c) Da $a f + b g + c k = 0$:
$$a(x^3 + x) + b(x^2 - 1) + c(x^3 - x) = (a + c)x^3 + bx^2 + (a - c)x - b = 0.$$
Tutti i coefficienti devono essere zero: $b = 0$, $a + c = 0$, $a - c = 0$, quindi $a = c = 0$. Sono **indipendenti**. Non sono una base di $\R_3[x]$: sono $3$ vettori e $\dim \R_3[x] = 4$, quindi non generano (per esempio, ogni loro combinazione ha il termine noto uguale a $-b$ e il coefficiente di $x^2$ uguale a $b$: il polinomio $1$ non si ottiene).

Completamento: aggiungo il polinomio $1$. Da $af + bg + ck + d \cdot 1 = 0$:
$$(a + c)x^3 + bx^2 + (a - c)x + (d - b) = 0,$$
quindi $b = 0$, $a = c = 0$ e $d = b = 0$. Quattro vettori indipendenti in uno spazio di dimensione $4$: per il Teorema 7.12, $f, g, k, 1$ sono una base di $\R_3[x]$.
:::

::: esercizio esame Come all'esame: basi e dimensioni degli spazi di matrici
Trova una base e la dimensione di ciascuno dei sottospazi $D(3)$, $T^s(3)$, $S(3)$ e $A(3)$ di $M(3)$. Poi di' quanto valgono in generale $\dim D(n)$, $\dim T^s(n)$, $\dim S(n)$ e $\dim A(n)$.
::: soluzione
Uso le matrici $e_{ij}$ dell'Esercizio 7.13. In ogni caso scrivo la matrice generica, la riscrivo come combinazione e controllo l'indipendenza: ogni coefficiente libero compare da solo in una casella in cui le altre matrici hanno $0$, quindi una combinazione nulla ha tutti i coefficienti nulli.

- **$D(3)$**: $\begin{pmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix} = a e_{11} + b e_{22} + c e_{33}$. Base $e_{11}, e_{22}, e_{33}$: **dimensione 3**.
- **$T^s(3)$**: $\begin{pmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{pmatrix} = a e_{11} + b e_{12} + c e_{13} + d e_{22} + e\, e_{23} + f e_{33}$. Base $e_{11}, e_{12}, e_{13}, e_{22}, e_{23}, e_{33}$: **dimensione 6**. È la risposta dell'appello del 24/01/2024, domanda 5.
- **$S(3)$**: base $e_{11}, e_{22}, e_{33}, e_{12} + e_{21}, e_{13} + e_{31}, e_{23} + e_{32}$ (riquadro sull'appello del 15/01/2026): **dimensione 6**.
- **$A(3)$**: $\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix} = a(e_{12} - e_{21}) + b(e_{13} - e_{31}) + c(e_{23} - e_{32})$. Base di tre matrici: **dimensione 3**.

Controllo: $\dim S(3) + \dim A(3) = 6 + 3 = 9 = \dim M(3)$.

**In generale**, per matrici $n \times n$:
- $\dim D(n) = n$: i coefficienti liberi sono quelli della diagonale;
- $\dim T^s(n) = \dim T^i(n) = \dim S(n) = \frac{n(n + 1)}2$: diagonale ($n$ caselle) più il triangolo sopra ($\frac{n(n - 1)}2$ caselle), cioè $n + \frac{n(n - 1)}2 = \frac{n(n + 1)}2$;
- $\dim A(n) = \frac{n(n - 1)}2$: solo il triangolo sopra la diagonale, perché la diagonale è nulla.

Con $n = 3$: $3$, $6$, $6$, $3$, come sopra.
:::

::: esercizio esame Come all'esame: la dimensione di sottospazi di polinomi
Calcola una base e la dimensione di:
(a) $W_1 = \{p(x) \in \R_3[x] \mid p(1) = 0\}$;
(b) $W_2 = \{p(x) \in \R_3[x] \mid p(2) = 0 \text{ e } p(-2) = 0\}$;
(c) $W_3 = \{p(x) \in \R_2[x] \mid p(0) = p(1)\}$.
::: soluzione
(a) Per la lezione L04, $p(1) = 0$ vuol dire che $x - 1$ divide $p$: $p(x) = (x - 1)(a + bx + cx^2)$ con $a, b, c$ qualsiasi. Quindi
$$W_1 = \Span\big(x - 1,\ x(x - 1),\ x^2(x - 1)\big) = \Span\big(x - 1,\ x^2 - x,\ x^3 - x^2\big).$$
I tre polinomi hanno gradi $1$, $2$, $3$, quindi sono indipendenti (esercizio 5 (a)): **$\dim W_1 = 3$**. (È il sottospazio dell'appello del 24/01/2024, domanda 1, nella lezione L06.)

(b) $p(2) = 0$ e $p(-2) = 0$ vogliono dire che $x - 2$ e $x + 2$ dividono $p$, quindi $p(x) = (x^2 - 4)(a + bx)$ con $a, b$ qualsiasi:
$$W_2 = \Span\big(x^2 - 4,\ x^3 - 4x\big),$$
due polinomi di gradi diversi, indipendenti: **$\dim W_2 = 2$**. È la risposta dell'appello del 03/07/2026, domanda 1.

(c) Scrivo $p(x) = ax^2 + bx + c$: $p(0) = c$ e $p(1) = a + b + c$. La condizione $p(0) = p(1)$ diventa $a + b = 0$, cioè $b = -a$. Quindi
$$p(x) = ax^2 - ax + c = a(x^2 - x) + c \cdot 1, \qquad W_3 = \Span(x^2 - x,\ 1).$$
Due polinomi di gradi diversi, indipendenti: **$\dim W_3 = 2$**.

In tutti e tre i casi la dimensione è $\dim V$ meno il numero di condizioni indipendenti: $4 - 1 = 3$, $4 - 2 = 2$, $3 - 1 = 2$. È un'anticipazione del teorema della dimensione (lezione L14).
:::

::: esercizio medio Una base con un parametro
Per quali $k \in \R$ i vettori $u_1 = (1, 1, 0)$, $u_2 = (0, 1, 1)$, $u_3 = (1, 0, k)$ sono una base di $\R^3$?
::: soluzione
Sono tre vettori in $\R^3$: per il Teorema 7.12 basta capire quando sono indipendenti. Da $a u_1 + b u_2 + c u_3 = 0$:
$$\begin{cases} a + c = 0 \\ a + b = 0 \\ b + kc = 0 \end{cases}$$
Dalla prima $a = -c$, dalla seconda $b = -a = c$. La terza diventa $c + kc = (1 + k)c = 0$.
- Se $k \neq -1$, allora $c = 0$, e quindi $a = b = 0$: indipendenti, **base**.
- Se $k = -1$, qualsiasi $c$ va bene: per esempio $c = 1$, $a = -1$, $b = 1$ dà $-u_1 + u_2 + u_3 = 0$. Dipendenti, **non** è una base.

Con $k = -1$ si ritrovano i vettori dell'Esempio 7.4 (con $u_3 = v_3$). Nella lezione L13 lo stesso risultato si ottiene con il determinante: la matrice dei tre vettori ha determinante $1 + k$.
:::

::: esercizio medio Completare una base ed estrarne una
(a) Completa $w_1 = (1, 1, 0)$, $w_2 = (-1, 0, 1)$ a una base di $\R^3$.
(b) Siano $v_1 = (1, 0, 1)$, $v_2 = (0, 1, 1)$, $v_3 = (1, 1, 2)$, $v_4 = (1, -1, 0)$. Estrai da $v_1, v_2, v_3, v_4$ una base di $U = \Span(v_1, v_2, v_3, v_4)$ e trova $\dim U$.
::: soluzione
(a) Basta aggiungere un vettore che non stia nel piano $\Span(w_1, w_2)$ (esercizio 11). Provo $e_1 = (1, 0, 0)$ (è la scelta del libro di Martelli, Esempio 2.3.21). Da $a w_1 + b w_2 + c e_1 = 0$:
$$\begin{cases} a - b + c = 0 \\ a = 0 \\ b = 0 \end{cases}$$
quindi $a = b = 0$ e poi $c = 0$. Tre vettori indipendenti in $\R^3$: $w_1, w_2, e_1$ è una base.

(b) Cerco i vettori di troppo. $v_3 = v_1 + v_2$, perché $(1, 0, 1) + (0, 1, 1) = (1, 1, 2)$; $v_4 = v_1 - v_2$, perché $(1, 0, 1) - (0, 1, 1) = (1, -1, 0)$. Tolgo $v_3$ e $v_4$: lo Span non cambia (Proposizione 7.2), e restano $v_1, v_2$, non multipli, quindi indipendenti. Una base di $U$ è $v_1, v_2$ e **$\dim U = 2$**: $U$ è il piano $z = x + y$ dell'Esercizio 6.10.
:::

::: esercizio esame Come all'esame: generatori, indipendenti, base?
Per ciascuna lista stabilisci se i vettori sono linearmente indipendenti, se generano lo spazio indicato e se ne formano una base.
(a) $(1, -1)$, $(2, 1)$, $(0, 3)$ in $\R^2$.
(b) $(1, 0, 2)$, $(0, 1, -1)$, $(2, 1, 3)$ in $\R^3$.
(c) $(1, 1, 0, 0)$, $(0, 1, 1, 0)$, $(0, 0, 1, 1)$ in $\R^4$.
::: soluzione
(a) Tre vettori in $\R^2$: **dipendenti**. Generano: $(1, -1)$ e $(2, 1)$ non sono multipli, quindi sono già una base di $\R^2$, e aggiungendo $(0, 3)$ si genera ancora. **Generatori, non base.** Una relazione: $(0, 3) = a(1, -1) + b(2, 1)$ dà $a + 2b = 0$ e $-a + b = 3$; sommando, $3b = 3$, quindi $b = 1$, $a = -2$: $(0, 3) = -2(1, -1) + (2, 1)$.

(b) $2(1, 0, 2) + (0, 1, -1) = (2, 1, 3)$: il terzo è combinazione dei primi due, **dipendenti**. I primi due non sono multipli, quindi lo Span ha dimensione $2$: è un piano, **non generano** $\R^3$. **Non è una base.**

(c) Da $a(1, 1, 0, 0) + b(0, 1, 1, 0) + c(0, 0, 1, 1) = 0$: la prima coordinata dà $a = 0$, la seconda $a + b = 0$, quindi $b = 0$; la quarta dà $c = 0$. **Indipendenti.** Ma sono $3$ vettori e $\dim \R^4 = 4$: **non generano**, e **non sono una base**. Per esempio $e_4 = (0, 0, 0, 1)$ non è una loro combinazione: servirebbero $a = 0$ (prima coordinata), poi $b = 0$ (seconda), poi $c = 0$ (terza), ma la quarta coordinata sarebbe $c = 0 \neq 1$.
:::

::: esercizio difficile Aggiungere un vettore fuori dallo Span
Siano $v_1, \dots, v_k$ vettori indipendenti di $V$ e sia $v_{k+1} \in V$. Dimostra che
$$v_1, \dots, v_{k+1} \text{ sono indipendenti} \iff v_{k+1} \notin \Span(v_1, \dots, v_k).$$
Deduci che, in uno spazio di dimensione $n$, ogni lista di vettori indipendenti si può completare a una base.
::: soluzione
($\Rightarrow$) Se fosse $v_{k+1} \in \Span(v_1, \dots, v_k)$, cioè $v_{k+1} = \lambda_1 v_1 + \dots + \lambda_k v_k$, allora $\lambda_1 v_1 + \dots + \lambda_k v_k - v_{k+1} = 0$ sarebbe una combinazione nulla con il coefficiente $-1$: i vettori sarebbero dipendenti.

($\Leftarrow$) Suppongo $\lambda_1 v_1 + \dots + \lambda_k v_k + \lambda_{k+1} v_{k+1} = 0$.
- Se $\lambda_{k+1} \neq 0$, divido per $\lambda_{k+1}$ e ricavo $v_{k+1}$ come combinazione di $v_1, \dots, v_k$: contro l'ipotesi $v_{k+1} \notin \Span$.
- Quindi $\lambda_{k+1} = 0$, e resta $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$: per l'indipendenza dei primi $k$ vettori, anche $\lambda_1 = \dots = \lambda_k = 0$.

**Completamento.** Sia $\dim V = n$ e siano $v_1, \dots, v_k$ indipendenti con $k < n$. Non generano $V$ (meno di $n$ vettori non generano), quindi esiste $v_{k+1} \notin \Span(v_1, \dots, v_k)$; per quanto appena dimostrato, $v_1, \dots, v_{k+1}$ sono ancora indipendenti. Si ripete finché i vettori sono $n$: a quel punto sono $n$ vettori indipendenti, cioè una base per il Teorema 7.12. È l'algoritmo di completamento del libro di Martelli (§2.3.5).
:::

## Domande di ripasso

::: domanda Quando dei vettori sono linearmente dipendenti? E indipendenti?
Dipendenti: esiste una combinazione $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ con coefficienti non tutti nulli. Indipendenti: $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ implica $\lambda_1 = \dots = \lambda_k = 0$, cioè l'unica combinazione nulla è quella con tutti i coefficienti zero.
:::

::: domanda Che cosa dice la Proposizione 7.2, e come si dimostra?
Dei vettori sono dipendenti se e solo se uno di loro è combinazione lineare degli altri. Se $\lambda_i \neq 0$ in una combinazione nulla, si divide per $\lambda_i$ e si isola $v_i$; viceversa, se $v_i$ è combinazione degli altri, portando tutto a sinistra si ottiene una combinazione nulla con coefficiente $-1$ davanti a $v_i$.
:::

::: domanda Quando un solo vettore è dipendente? E due vettori?
Un vettore è dipendente se e solo se è il vettore nullo. Due vettori sono dipendenti se e solo se sono multipli uno dell'altro.
:::

::: domanda Tre vettori non nulli e a coppie non multipli sono per forza indipendenti?
No. L'Esempio 7.4: $(1, 1, 0)$, $(0, 1, 1)$, $(1, 0, -1)$ sono non nulli e a coppie non multipli, ma $v_1 - v_2 - v_3 = 0$. Le due condizioni sono necessarie ma non sufficienti per $k \ge 3$.
:::

::: domanda Perché una lista che contiene il vettore nullo è sempre dipendente?
Perché $1 \cdot 0$ più tutti gli altri vettori moltiplicati per $0$ dà il vettore nullo, ed è una combinazione con un coefficiente diverso da zero.
:::

::: domanda Che cos'è una base? Fai un esempio in $\R^2$ diverso dalla base canonica.
Una sequenza di vettori indipendenti che generano lo spazio. In $\R^2$ anche $(1, 2), (2, 1)$ è una base: sono due vettori non multipli, quindi indipendenti, e per il Teorema 7.12 generano.
:::

::: domanda Qual è la base canonica di $\K^n$? E di $\K_n[x]$?
In $\K^n$: $e_1, \dots, e_n$, dove $e_i$ ha $1$ al posto $i$ e $0$ altrove. In $\K_n[x]$: $1, x, x^2, \dots, x^n$, che sono $n + 1$ polinomi.
:::

::: domanda Che cosa dice il Teorema 7.10, e perché serve?
Se $V$ ha una base di $n$ vettori, ogni base di $V$ ha $n$ vettori. Serve perché la dimensione, definita come numero di vettori di una base, non dipenda dalla base scelta.
:::

::: domanda Quali sono le dimensioni di $\K^n$, $\K_n[x]$, $M(m, n, \K)$ e $\K[x]$?
$n$, $n + 1$, $mn$ e infinita. $\K[x]$ non ha basi finite, perché ogni lista finita di polinomi genera solo polinomi fino a un certo grado.
:::

::: domanda Che cosa dice il Teorema 7.12? Fai un esempio.
Se $\dim V = n$ e si hanno esattamente $n$ vettori, sono una base appena sono indipendenti oppure appena generano: l'altra condizione segue. Esempio: $(-1, 1)$ e $(2, 1)$ non sono multipli, quindi sono indipendenti, e sono una base di $\R^2$.
:::

::: domanda Quattro vettori di $\R^3$ possono essere indipendenti? Due vettori di $\R^3$ possono generare $\R^3$?
No in entrambi i casi. In uno spazio di dimensione $n$ più di $n$ vettori sono sempre dipendenti e meno di $n$ vettori non generano mai.
:::

::: domanda Come si calcola la dimensione di un sottospazio definito da condizioni?
Si scrive l'elemento generico con i parametri liberi, lo si riscrive come combinazione lineare con un vettore per parametro, si controlla che quei vettori siano indipendenti e si contano. Per esempio $\{p \in \R_3[x] \mid p(2) = 0\}$ ha dimensione $3$.
:::

::: domanda Quanto valgono $\dim S(3)$, $\dim T^s(3)$ e $\dim A(3)$?
$6$, $6$ e $3$. In generale $\dim S(n) = \dim T^s(n) = \frac{n(n + 1)}2$ e $\dim A(n) = \frac{n(n - 1)}2$.
:::

## Glossario

```glossario
Combinazione banale | La combinazione lineare con tutti i coefficienti uguali a $0$; dà sempre il vettore nullo.
Linearmente dipendenti | Vettori per cui esiste una combinazione con coefficienti non tutti nulli uguale a $0$; equivale a dire che uno è combinazione degli altri.
Linearmente indipendenti | Vettori per cui l'unica combinazione uguale a $0$ è quella banale.
Vettori multipli | $v_1 = kv_2$ oppure $v_2 = kv_1$ per qualche scalare $k$: per due vettori equivale a essere dipendenti.
Generatori | Vettori $v_1, \dots, v_n$ tali che $V = \Span(v_1, \dots, v_n)$: ogni vettore di $V$ è una loro combinazione.
Base | Sequenza di vettori indipendenti che generano $V$.
Base canonica di $\K^n$ | $e_1, \dots, e_n$, con $e_i$ che ha $1$ al posto $i$ e $0$ altrove.
Base canonica di $\K_n[x]$ | I polinomi $1, x, x^2, \dots, x^n$.
Matrici $e_{ij}$ | La matrice con $1$ nella casella $(i, j)$ e $0$ altrove; formano la base canonica di $M(m, n, \K)$.
Dimensione | Il numero di vettori di una base di $V$, indicato con $\dim V$; è $\infty$ se non esistono basi finite.
Definizione ben posta | Una definizione che non dipende dalle scelte fatte: per la dimensione lo garantisce il Teorema 7.10.
Dimensione infinita | Proprietà di uno spazio senza basi finite, come $\K[x]$.
Coordinate rispetto a una base | Gli unici coefficienti $\lambda_1, \dots, \lambda_n$ con $v = \lambda_1 v_1 + \dots + \lambda_n v_n$ (lezione L13).
Lemma di scambio | Se $n$ vettori generano $V$, allora $n$ vettori indipendenti di $V$ generano anch'essi $V$: la chiave del Teorema 7.10.
Completamento a una base | Aggiungere a vettori indipendenti vettori fuori dal loro Span fino ad avere $\dim V$ vettori.
Estrazione di una base | Togliere da una lista di generatori i vettori che sono combinazione degli altri, fino a restare con vettori indipendenti.
Rango (anticipo) | Il numero massimo di vettori indipendenti tra le righe, o le colonne, di una matrice (lezione L08).
```

## Checklist

```checklist
- So scrivere la definizione di vettori linearmente indipendenti come implicazione e spiegarla a parole.
- So dimostrare che dei vettori sono indipendenti impostando e risolvendo il sistema dei coefficienti.
- So dimostrare che dei vettori sono dipendenti esibendo una combinazione non banale uguale a zero.
- So enunciare e dimostrare la Proposizione 7.2 e so riconoscere i casi con uno e due vettori.
- So spiegare con l'Esempio 7.4 perché con tre vettori non basta guardarli a coppie.
- So definire una base e verificare che $e_1, \dots, e_n$ e $1, x, \dots, x^n$ sono basi.
- So le dimensioni di $\K^n$, $\K_n[x]$, $M(m, n, \K)$ e $\K[x]$, senza sbagliare il $+1$ dei polinomi.
- So usare il Teorema 7.12 per dimostrare che $n$ vettori sono una base controllando solo l'indipendenza.
- So rispondere a «generatori e/o indipendenti?» contando i vettori e cercando quelli di troppo.
- So calcolare base e dimensione di sottospazi di matrici ($D(n)$, $T^s(n)$, $S(n)$, $A(n)$) e di polinomi definiti da condizioni.
- So completare dei vettori indipendenti a una base ed estrarre una base da una lista di generatori.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 7 «Spazi vettoriali III», pp. 31–35: le sezioni 7.A–7.D sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni, teoremi, esempi ed esercizi mantengono la loro numerazione (Definizioni 7.1, 7.7 e 7.11, Proposizioni 7.2 e 7.6, Esempi 7.3–7.5, 7.8 e 7.9, Teoremi 7.10 e 7.12, Esercizi 7.13–7.15).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §2.3.1–2.3.7 (indipendenza lineare ed Esempio 2.3.2, basi canoniche, coordinate e Proposizione 2.3.11, lemma di scambio e dimostrazione del Teorema 2.3.16, dimensione infinita di $\K[x]$, algoritmi di completamento e di estrazione ed Esempio 2.3.21, Proposizioni 2.3.20, 2.3.23 e 2.3.25).
- **Appelli citati** (testi e soluzioni sul Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (domande 1 e 5), 10/06/2024 (domanda 3), 10/07/2024 (domanda 2), 06/09/2024 (domanda 2), 16/01/2025 (domanda 2), 10/07/2025 (domanda 2), 02/09/2025 (domanda 10 e problema 11), 15/01/2026 (domande 3 e 4), 03/07/2026 (domanda 1), 07/09/2026 (domanda 2). Le domande del 16/01/2025 (2), del 15/01/2026 (4) e del 07/09/2026 (2) sono riportate con soluzioni scritte per questi appunti. Foglio di esercizi 2 del tutorato 2025 (Buzano, Radeschi), esercizi 1, 3 e 4, come modello di alcuni esercizi.
- Le parti **«Oltre le dispense»** (il metodo di Gauss per contare i vettori indipendenti, le coordinate, la dimostrazione dei Teoremi 7.10 e 7.12, le conseguenze per i quiz, i metodi per l'esame e gli esercizi 4–11) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
