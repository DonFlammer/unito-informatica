---
corso: MDAG
modulo: AG
lezione: L21
titolo: Prodotti scalari III
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L21
descrizione: >-
  Appunti della lezione L21 di Algebra lineare e Geometria (MDAG, parte 2): vettori ortogonali, complemento ortogonale,
  proiezione ortogonale su una retta e su un sottospazio, basi ortogonali e ortonormali, algoritmo di Gram–Schmidt,
  decomposizione ortogonale e minimi quadrati, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  L'ortogonalità è lo strumento più usato del corso. In questa lezione impari a trovare tutti i vettori ortogonali a un
  sottospazio ($W^\perp$), a proiettare un vettore su una retta e su un piano, a costruire basi ortogonali con
  l'algoritmo di Gram–Schmidt e a risolvere «al meglio» un sistema che non ha soluzioni, con le equazioni normali
  ${}^tAAx = {}^tAb$. È il cuore del secondo problema di molti appelli.
materiale: dispense
scheda:
  Dispense: lezione 21 · pp. 105–110
  Libro: Martelli, §7.3 e §8.1.5–8.1.10
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 21 «Prodotti scalari III»; B. Martelli, Geometria e algebra
  lineare, §7.1.7, §7.3, §8.1.5–8.1.10
file_en: L21_scalar_products_3.html
appunti_html: appunti/MDAG/L21_prodotti_scalari_3.html
genera_html: true
---

## In breve

- In tutta la lezione il prodotto scalare è **definito positivo**. Due vettori sono **ortogonali** se $\langle v, w\rangle = 0$; se sono non nulli, vuol dire che formano un angolo retto. Il vettore nullo è ortogonale a tutti.
- Il **complemento ortogonale** di un sottospazio $W$ è $W^\perp = \{v \mid \langle v, w\rangle = 0 \ \forall w \in W\}$: è sempre un sottospazio. Si calcola imponendo l'ortogonalità ai **generatori** di $W$: è un sistema lineare omogeneo.
- La **proiezione ortogonale** di $v$ sulla retta $\Span(w)$ è $p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}\,w$; il numero $\frac{\langle v, w\rangle}{\langle w, w\rangle}$ si chiama **coefficiente di Fourier**. Il resto $v - p_w(v)$ è ortogonale a $w$.
- In una **base ortogonale** le coordinate si calcolano senza sistemi: $v = \sum_i \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}\,v_i$.
- L'algoritmo di **Gram–Schmidt** trasforma vettori indipendenti in vettori ortogonali: a ogni $v_i$ si tolgono le proiezioni sui vettori già costruiti. Dividendo per le norme si ottiene una base **ortonormale**.
- **Decomposizione ortogonale**: $V = W \oplus W^\perp$, quindi ogni $v$ si scrive in un solo modo come $v = w + z$ con $w \in W$, $z \in W^\perp$, e $\dim W + \dim W^\perp = \dim V$.
- Il pezzo $w = p_W(v)$ è la **proiezione ortogonale** su $W$: con una base ortonormale $p_W(v) = \sum_i \langle v, w_i\rangle w_i$. È il punto di $W$ **più vicino** a $v$.
- **Minimi quadrati**: se $Ax = b$ non ha soluzioni, si cerca $x_0$ che rende $\|Ax_0 - b\|$ minima. Sono le soluzioni delle **equazioni normali** ${}^tA\,A\,x_0 = {}^tA\,b$; così si trova la retta di regressione.
- All'esame: «base ortonormale di un piano, poi proiezione di un vettore» è il problema 12 di molti appelli, con il prodotto euclideo o con un $g_S$.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Vettori ortogonali (p. 105)

Nella lezione L20 hai visto che l'angolo tra due vettori non nulli è retto esattamente quando il prodotto scalare è zero. Questa condizione è così importante che ha un nome, e la si usa anche quando uno dei vettori è nullo.

> [!DEF] Vettori ortogonali (p. 105)
> Sia $V$ munito di un prodotto scalare definito positivo. Due vettori $v, w \in V$ sono **ortogonali** se
> $$\langle v, w\rangle = 0.$$
> Se entrambi sono non nulli, questo equivale a dire che formano un angolo retto.

Pezzo per pezzo:

- «ortogonale» è il nome tecnico di «perpendicolare»;
- il vettore nullo è ortogonale a **tutti** i vettori, perché $\langle 0, w\rangle = 0$ sempre (lezione L19);
- l'ortogonalità **dipende dal prodotto scalare**: due vettori ortogonali per un prodotto possono non esserlo per un altro.

> [!ESEMPIO] 21.1 · I vettori ortogonali a un vettore del piano
> Nel prodotto scalare euclideo di $\R^2$, i vettori $(x, y)$ ortogonali a $(a, b) \neq 0$ soddisfano $ax + by = 0$ e formano quindi la retta
> $$\Span\begin{pmatrix} -b \\ a \end{pmatrix}.$$
> Per esempio, i vettori ortogonali a $(2, 1)$ sono quelli con $2x + y = 0$, cioè la retta $\Span((-1, 2))$. Controllo: $\langle (-1, 2), (2, 1)\rangle = -2 + 2 = 0$.

Perché proprio quella retta? L'equazione $ax + by = 0$ è un sistema omogeneo con una sola equazione non nulla in due incognite: le soluzioni formano uno spazio di dimensione $2 - 1 = 1$, una retta. Il vettore $(-b, a)$ è soluzione ($a(-b) + ba = 0$) e non è nullo, quindi genera la retta. La regola pratica: **scambia le coordinate e cambia un segno**.

```grafico
titolo: I vettori ortogonali a $(2, 1)$ formano la retta $\Span((-1, 2))$
x: -3 3
y: -2.5 2.5
retta: 0 0 -1 2 | viola | tratteggio
vettore: 2 1 | accento | spesso | $(2, 1)$ | se
vettore: -1 2 | blu | spesso | $(-1, 2)$ | no
```

> [!ESEMPIO] 21.2 · La base canonica
> Rispetto al prodotto scalare euclideo di $\R^n$, i vettori $e_i$ ed $e_j$ della base canonica sono ortogonali per $i \neq j$: $\langle e_i, e_j\rangle$ è la somma dei prodotti delle coordinate, e $e_i$, $e_j$ non hanno mai un 1 nello stesso posto.

> [!ESEMPIO] Con un altro prodotto scalare
> Con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ i vettori $e_1$ ed $e_2$ **non** sono ortogonali: $g_S(e_1, e_2) = S_{12} = 1$. I vettori $g_S$-ortogonali a $e_1$ sono quelli con $g_S(e_1, y) = 2y_1 + y_2 = 0$ (la prima riga di $S$ per $y$), cioè la retta $\Span((1, -2))$. Per il prodotto euclideo, invece, sarebbero la retta $\Span((0, 1))$.

> [!OLTRE] Vettori ortogonali non nulli sono indipendenti
> Se $v_1, \dots, v_k$ sono non nulli e a due a due ortogonali, allora sono linearmente indipendenti (Martelli, Proposizione 8.1.25). Parti da una combinazione nulla $\lambda_1v_1 + \dots + \lambda_kv_k = 0$ e fai il prodotto scalare con $v_i$:
> $$0 = \langle 0, v_i\rangle = \lambda_1\langle v_1, v_i\rangle + \dots + \lambda_k\langle v_k, v_i\rangle = \lambda_i\langle v_i, v_i\rangle,$$
> perché tutti gli altri prodotti sono zero. Siccome $v_i \neq 0$, $\langle v_i, v_i\rangle > 0$ e quindi $\lambda_i = 0$, per ogni $i$. In particolare $n$ vettori non nulli a due a due ortogonali in uno spazio di dimensione $n$ formano sempre una base.

## Il complemento ortogonale (p. 105)

Ora non un vettore solo, ma un intero sottospazio: quali vettori sono ortogonali a **tutti** i vettori di $W$?

> [!DEF] 21.3 · Complemento ortogonale
> Sia $W \subset V$ un sottospazio. Il **complemento ortogonale** di $W$ è
> $$W^\perp = \{v \in V \mid \langle v, w\rangle = 0 \text{ per ogni } w \in W\}.$$

Pezzo per pezzo:

- il simbolo $W^\perp$ si legge «$W$ ortogonale» o «$W$ perp»;
- un vettore sta in $W^\perp$ se è ortogonale a **ogni** vettore di $W$, non solo a qualcuno;
- casi estremi: $\{0\}^\perp = V$ (tutti sono ortogonali al vettore nullo) e $V^\perp = \{0\}$ (un vettore ortogonale a tutto $V$ è ortogonale a sé stesso, quindi è nullo perché il prodotto è definito positivo).

> [!PROP] 21.4
> $W^\perp$ è un sottospazio vettoriale di $V$.

La dimostrazione controlla le tre condizioni di sottospazio (lezione L06):

1. $0 \in W^\perp$, perché $\langle 0, w\rangle = 0$ per ogni $w$;
2. se $v, v' \in W^\perp$, per ogni $w \in W$ si ha $\langle v + v', w\rangle = \langle v, w\rangle + \langle v', w\rangle = 0 + 0 = 0$, quindi $v + v' \in W^\perp$;
3. se $v \in W^\perp$ e $\lambda \in \R$, per ogni $w \in W$ si ha $\langle \lambda v, w\rangle = \lambda\langle v, w\rangle = \lambda \cdot 0 = 0$, quindi $\lambda v \in W^\perp$. $\square$

Per esempio l'appello del 05/02/2026 (domanda 2) chiedeva quale di cinque insiemi non fosse un sottospazio di $\R_2[x]$, e tra gli insiemi c'era $\R_1[x]^\perp$: è un sottospazio per la Proposizione 21.4, quindi non era la risposta.

**Come si calcola in pratica.** La definizione chiede di controllare **infiniti** vettori $w$. Bastano i generatori.

> [!OLTRE] Bastano i generatori
> Se $W = \Span(w_1, \dots, w_k)$, allora (Martelli, Proposizione 7.3.3)
> $$W^\perp = \{v \in V \mid \langle v, w_1\rangle = 0, \ \dots, \ \langle v, w_k\rangle = 0\}.$$
> Infatti ogni $w \in W$ si scrive $w = \lambda_1w_1 + \dots + \lambda_kw_k$, e se $v$ è ortogonale ai generatori allora $\langle v, w\rangle = \lambda_1\langle v, w_1\rangle + \dots + \lambda_k\langle v, w_k\rangle = 0$. Con un prodotto $g_S$ su $\R^n$ le condizioni diventano il sistema lineare omogeneo ${}^tw_i\,S\,x = 0$ per $i = 1, \dots, k$; con il prodotto euclideo, semplicemente $\langle w_i, x\rangle = 0$.

> [!METODO] Calcolare $W^\perp$
> 1. Trova dei generatori $w_1, \dots, w_k$ di $W$ (se $W$ è dato con equazioni, prima trova una base).
> 2. Scrivi una equazione per ogni generatore: $\langle x, w_i\rangle = 0$. Con $g_S$ la riga dei coefficienti è ${}^tw_i\,S = {}^t(Sw_i)$.
> 3. Risolvi il sistema omogeneo (lezioni L11–L13) e scrivi una base delle soluzioni.
> 4. Controllo: $\dim W^\perp = \dim V - \dim W$ (Teorema 21.8, più avanti).

> [!ESEMPIO] Tre complementi in $\R^3$ (prodotto euclideo)
> 1. **Una retta.** $W = \Span((1, 2, 3))$. Una sola equazione: $x + 2y + 3z = 0$. $W^\perp$ è il **piano** con questa equazione; una base: $y$ e $z$ sono libere, quindi $(-2, 1, 0)$ (con $y = 1, z = 0$) e $(-3, 0, 1)$ (con $y = 0, z = 1$).
> 2. **Un piano dato con generatori.** $W = \Span((1, 1, 0), (0, 1, 1))$. Due equazioni: $x + y = 0$ e $y + z = 0$. Quindi $x = -y$, $z = -y$: $W^\perp = \Span((1, -1, 1))$, una **retta**. Controllo: $1 - 1 + 0 = 0$ e $0 - 1 + 1 = 0$.
> 3. **Un piano dato con un'equazione.** $W = \{x + y + z = 0\}$: l'equazione stessa dice che ogni vettore di $W$ è ortogonale a $(1, 1, 1)$, quindi $\Span((1, 1, 1)) \subset W^\perp$. Per la formula delle dimensioni $\dim W^\perp = 3 - 2 = 1$, quindi $W^\perp = \Span((1, 1, 1))$. In generale il complemento del piano $\{ax + by + cz = 0\}$ è la retta generata da $(a, b, c)$.

> [!ESEMPIO] Un complemento tra i polinomi
> Su $\R_2[x]$ con $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$ (lezione L19), cerchiamo $\R_1[x]^\perp = \Span(1, x)^\perp$. Con la matrice $\begin{pmatrix} 3 & 3 & 5 \\ 3 & 5 & 9 \\ 5 & 9 & 17 \end{pmatrix}$ della lezione L19 e $p = a + bx + cx^2$:
> $$\begin{aligned} \langle p, 1\rangle &= 3a + 3b + 5c = 0, \\ \langle p, x\rangle &= 3a + 5b + 9c = 0. \end{aligned}$$
> Sottraendo: $2b + 4c = 0$, cioè $b = -2c$; poi $3a - 6c + 5c = 0$, cioè $a = \frac c3$. Con $c = 3$: $p = 1 - 6x + 3x^2$, e $\R_1[x]^\perp = \Span(1 - 6x + 3x^2)$. Controllo con i valori in $0, 1, 2$, che sono $1, -2, 1$: $\langle p, 1\rangle = 1 - 2 + 1 = 0$ e $\langle p, x\rangle = 0 - 2 + 2 = 0$.

## Proiezione ortogonale su una retta (pp. 105–106)

Immagina una retta $U$ per l'origine e un vettore $v$ fuori dalla retta. Se il sole è a picco, perpendicolare alla retta, l'ombra di $v$ su $U$ è un vettore di $U$: la **proiezione ortogonale** di $v$. Quello che resta, $v$ meno la sua ombra, è perpendicolare alla retta.

Sia $w \neq 0$ e sia $U = \Span(w)$. Per $v \in V$ cerchiamo un vettore $p_w(v) \in U$ tale che

$$v - p_w(v) \in U^\perp.$$

Questo vettore è la **proiezione ortogonale** di $v$ sulla retta $U$.

> [!PROP] 21.5
> Vale
> $$p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}\,w = \frac{\langle v, w\rangle}{\|w\|^2}\,w.$$

La dimostrazione delle dispense, passo per passo:

1. $p_w(v)$ sta nella retta $U = \Span(w)$, quindi è un multiplo di $w$: $p_w(v) = kw$ per un numero $k$ da trovare;
2. la condizione $v - kw \in U^\perp$ vuol dire che $v - kw$ è ortogonale a $w$ (basta il generatore della retta):
   $$0 = \langle v - kw, w\rangle = \langle v, w\rangle - k\langle w, w\rangle;$$
3. siccome $w \neq 0$, $\langle w, w\rangle > 0$ e si può dividere: $k = \frac{\langle v, w\rangle}{\langle w, w\rangle}$. $\square$

> [!ESEMPIO] Proiettare $v = (1, 3)$ sulla retta di $w = (4, 2)$
> 1. $\langle v, w\rangle = 4 + 6 = 10$ e $\langle w, w\rangle = 16 + 4 = 20$;
> 2. coefficiente $\frac{10}{20} = \frac12$, quindi $p_w(v) = \frac12(4, 2) = (2, 1)$;
> 3. il resto è $v - p_w(v) = (1, 3) - (2, 1) = (-1, 2)$;
> 4. controllo: $\langle (-1, 2), (4, 2)\rangle = -4 + 4 = 0$. ✓
>
> Con $w' = (2, 1)$ al posto di $w$ (stessa retta) il coefficiente diventa $\frac{\langle v, w'\rangle}{\langle w', w'\rangle} = \frac55 = 1$, ma la proiezione è la stessa: $1 \cdot (2, 1) = (2, 1)$. **La proiezione dipende dalla retta, non dal vettore scelto per generarla.**

```grafico
titolo: $v = (1, 3)$ si scompone in $p_w(v) = (2, 1)$, sulla retta di $w$, più $(-1, 2)$, ortogonale alla retta
x: -1.5 4.5
y: -0.5 3.5
retta: 0 0 4 2 | grigio | tratteggio
vettore: 4 2 | grigio | $w$ | se
vettore: 1 3 | accento | spesso | $v$ | no
vettore: 2 1 | ambra | spesso | $p_w(v)$ | se
segmento: 2 1 1 3 | viola | tratteggio | $v - p_w(v)$ | e
```

> [!ESEMPIO] Una proiezione in $\R^3$
> $v = (1, 2, 3)$ sulla retta di $w = (1, 1, 1)$: $\langle v, w\rangle = 6$, $\langle w, w\rangle = 3$, quindi $p_w(v) = 2(1, 1, 1) = (2, 2, 2)$. Il resto $(1, 2, 3) - (2, 2, 2) = (-1, 0, 1)$ è ortogonale a $w$: $-1 + 0 + 1 = 0$.

**Ogni vettore si spezza in due pezzi ortogonali.** Dalla costruzione:

$$v = p_w(v) + \big(v - p_w(v)\big),$$

con il primo termine in $U$ e il secondo in $U^\perp$. Inoltre $U \cap U^\perp = \{0\}$: un vettore che sta in entrambi è ortogonale a sé stesso, quindi è nullo. Allora la somma è **diretta** (Definizione 18.4: la scrittura come somma è unica) e

$$V = U \oplus U^\perp.$$

Il numero $\frac{\langle v, w\rangle}{\langle w, w\rangle}$ si chiama **coefficiente di Fourier** di $v$ rispetto a $w$.

> [!TRAPPOLA] Due errori frequenti
> - Dividere per $\|w\|$ invece che per $\|w\|^2 = \langle w, w\rangle$. Con $v = (3, 1)$ e $w = (1, 1)$ la proiezione giusta è $\frac42(1, 1) = (2, 2)$; dividendo per $\|w\| = \sqrt2$ si otterrebbe $(2\sqrt2, 2\sqrt2)$, che non ha nemmeno il resto ortogonale.
> - Scambiare i ruoli: $p_w(v)$ proietta $v$ **sulla retta di $w$**. Proiettare $w$ sulla retta di $v$ dà un altro vettore.

> [!OLTRE] La lunghezza della proiezione
> $\|p_w(v)\| = \frac{|\langle v, w\rangle|}{\|w\|^2}\,\|w\| = \frac{|\langle v, w\rangle|}{\|w\|}$ (Martelli, Esercizio 8.1.15). Se $w$ è unitario, $p_w(v) = \langle v, w\rangle\,w$ e la lunghezza della proiezione è $|\langle v, w\rangle|$: è l'interpretazione del prodotto scalare come «ombra» che si vede in fisica.

Prova con lo strumento: la freccia gialla è la proiezione di $v$ sulla retta di $u$, e il segmento viola è il resto. Trascina $v$: il segmento viola resta sempre perpendicolare alla retta. Quando $v$ è perpendicolare a $u$ la proiezione diventa il vettore nullo.

```widget vettori
titolo: Proiezione ortogonale di v sulla retta di u
u: 4 2
v: 1 3
modo: scalare
modi: scalare
raggio: 5
```

## Coordinate in una base ortogonale (p. 106)

Una base $\{v_1, \dots, v_n\}$ si dice **ortogonale** se i suoi vettori sono a due a due ortogonali ($\langle v_i, v_j\rangle = 0$ per $i \ne j$), e **ortonormale** se in più ogni vettore ha norma 1. La base canonica di $\R^n$ è ortonormale per il prodotto euclideo (Esempio 21.2). Con una base ortogonale le coordinate si calcolano **senza risolvere sistemi**.

> [!PROP] 21.6
> Sia $\mathcal B = \{v_1, \dots, v_n\}$ una base ortogonale di $V$. Per ogni $v \in V$,
> $$v = \sum_{i=1}^n p_{v_i}(v) = \sum_{i=1}^n \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}\,v_i.$$

In parole: ogni vettore è la **somma delle sue proiezioni** sui vettori di una base ortogonale, e le coordinate sono i coefficienti di Fourier. La dimostrazione:

1. siccome $\mathcal B$ è una base, $v = \lambda_1v_1 + \dots + \lambda_nv_n$ per certi numeri $\lambda_1, \dots, \lambda_n$;
2. fai il prodotto scalare di entrambi i membri con $v_i$: a destra tutti i termini $\lambda_j\langle v_j, v_i\rangle$ con $j \ne i$ sono zero, per l'ortogonalità, e resta $\langle v, v_i\rangle = \lambda_i\langle v_i, v_i\rangle$;
3. quindi $\lambda_i = \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}$. $\square$

Se la base è **ortonormale**, $\langle v_i, v_i\rangle = 1$ e la formula diventa ancora più corta: $v = \sum_i \langle v, v_i\rangle\,v_i$.

> [!ESEMPIO] Coordinate senza sistema
> In $\R^2$ la base $v_1 = (2, 1)$, $v_2 = (-1, 2)$ è ortogonale ($-2 + 2 = 0$). Per $v = (2, 3)$:
> $$\frac{\langle v, v_1\rangle}{\langle v_1, v_1\rangle} = \frac{4 + 3}{5} = \frac75, \qquad \frac{\langle v, v_2\rangle}{\langle v_2, v_2\rangle} = \frac{-2 + 6}{5} = \frac45.$$
> Controllo: $\frac75(2, 1) + \frac45(-1, 2) = \left(\frac{14 - 4}{5}, \frac{7 + 8}{5}\right) = (2, 3)$. ✓ (È l'Esempio 8.1.19 di Martelli.)
>
> In $\R^3$, con la base ortogonale $(1, 1, 0)$, $(1, -1, 0)$, $(0, 0, 1)$ e $v = (3, 1, 2)$: i coefficienti sono $\frac{3 + 1}{2} = 2$, $\frac{3 - 1}{2} = 1$, $\frac{2}{1} = 2$, e infatti $2(1, 1, 0) + (1, -1, 0) + 2(0, 0, 1) = (3, 1, 2)$.

> [!IDEA] Perché le basi ortogonali fanno risparmiare lavoro
> Con una base qualsiasi, per trovare le coordinate di $v$ devi risolvere un sistema $n \times n$. Con una base ortogonale ogni coordinata è **un rapporto di due prodotti scalari**, calcolato da solo. È il motivo per cui si fa tanta fatica a costruire basi ortogonali: è quello che fa Gram–Schmidt.

## L'algoritmo di Gram–Schmidt (p. 107)

Le basi ortogonali sono comode: come se ne costruisce una? L'algoritmo di **Gram–Schmidt** prende vettori linearmente indipendenti $v_1, \dots, v_k$ e li trasforma in vettori ortogonali $w_1, \dots, w_k$ ponendo

$$w_1 = v_1$$

e, per $i \ge 2$,

$$w_i = v_i - \sum_{j=1}^{i-1} p_{w_j}(v_i) = v_i - \sum_{j=1}^{i-1} \frac{\langle v_i, w_j\rangle}{\langle w_j, w_j\rangle}\,w_j.$$

Ad ogni passo si tolgono quindi a $v_i$ le sue componenti nelle direzioni già costruite. Scritto per esteso per tre vettori:

$$\begin{aligned} w_1 &= v_1, \\ w_2 &= v_2 - \frac{\langle v_2, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1, \\ w_3 &= v_3 - \frac{\langle v_3, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 - \frac{\langle v_3, w_2\rangle}{\langle w_2, w_2\rangle}\,w_2. \end{aligned}$$

**Perché funziona.** $w_2$ è $v_2$ meno la sua proiezione sulla retta di $w_1$: per la Proposizione 21.5 il resto è ortogonale a $w_1$. Allo stesso modo, togliendo a $v_3$ le proiezioni su $w_1$ e su $w_2$ (che sono già ortogonali tra loro), il resto è ortogonale a entrambi. Inoltre ogni $w_i$ è $v_i$ più una combinazione dei vettori precedenti, quindi $\Span(w_1, \dots, w_i) = \Span(v_1, \dots, v_i)$, e $w_i \ne 0$ perché i $v_i$ sono indipendenti.

> [!ESEMPIO] Gram–Schmidt nel piano
> $v_1 = (3, 1)$, $v_2 = (2, 2)$. Allora $w_1 = (3, 1)$ e
> $$\begin{aligned} w_2 &= (2, 2) - \frac{\langle (2, 2), (3, 1)\rangle}{\langle (3, 1), (3, 1)\rangle}(3, 1) = (2, 2) - \frac{8}{10}(3, 1) \\ &= \left(2 - \frac{12}5, 2 - \frac45\right) = \left(-\frac25, \frac65\right). \end{aligned}$$
> Controllo: $\langle w_2, w_1\rangle = -\frac65 + \frac65 = 0$. ✓ Moltiplicando per 5 si può usare $(-2, 6)$, o dividendo per 2, $(-1, 3)$: resta ortogonale a $w_1$.

> [!ESEMPIO] 21.7 · Gram–Schmidt in $\R^3$
> Ortogonalizziamo
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad v_3 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$$
> rispetto al prodotto scalare euclideo di $\R^3$. Otteniamo
> $$w_1 = v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad w_2 = v_2 - \frac{\langle v_2, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 = \begin{pmatrix} -\frac12 \\ \frac12 \\ 1 \end{pmatrix}$$
> e
> $$w_3 = v_3 - \frac{\langle v_3, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 - \frac{\langle v_3, w_2\rangle}{\langle w_2, w_2\rangle}\,w_2 = \begin{pmatrix} \frac23 \\ -\frac23 \\ \frac23 \end{pmatrix}.$$
> I vettori $w_1, w_2, w_3$ sono ortogonali.

I conti che le dispense non scrivono:

1. $\langle v_2, w_1\rangle = 0 + 1 + 0 = 1$ e $\langle w_1, w_1\rangle = 2$, quindi $w_2 = (0, 1, 1) - \frac12(1, 1, 0) = \left(-\frac12, \frac12, 1\right)$;
2. $\langle v_3, w_1\rangle = 1 + 0 + 0 = 1$, quindi il primo coefficiente è $\frac12$;
3. $\langle v_3, w_2\rangle = -\frac12 + 0 + 1 = \frac12$ e $\langle w_2, w_2\rangle = \frac14 + \frac14 + 1 = \frac32$, quindi il secondo coefficiente è $\frac{1/2}{3/2} = \frac13$;
4. $w_3 = (1, 0, 1) - \frac12(1, 1, 0) - \frac13\left(-\frac12, \frac12, 1\right)$, coordinata per coordinata:
   $$1 - \frac12 + \frac16 = \frac23, \quad 0 - \frac12 - \frac16 = -\frac23, \quad 1 - 0 - \frac13 = \frac23;$$
5. controlli: $\langle w_1, w_2\rangle = -\frac12 + \frac12 + 0 = 0$, $\langle w_1, w_3\rangle = \frac23 - \frac23 + 0 = 0$, $\langle w_2, w_3\rangle = -\frac13 - \frac13 + \frac23 = 0$. ✓

**Da ortogonale a ortonormale.** Per ottenere una base **ortonormale** basta dividere ciascun vettore per la sua norma (lezione L20): $\|w_1\| = \sqrt2$, $\|w_2\| = \sqrt{\frac32} = \frac{\sqrt6}2$, $\|w_3\| = \sqrt{\frac{4}{3}} = \frac{2}{\sqrt3}$, quindi

$$\frac{1}{\sqrt2}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad \frac{1}{\sqrt6}\begin{pmatrix} -1 \\ 1 \\ 2 \end{pmatrix}, \qquad \frac{1}{\sqrt3}\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}.$$

Nel secondo e nel terzo vettore conviene prima togliere le frazioni: $w_2 = \frac12(-1, 1, 2)$ e $\|(-1, 1, 2)\| = \sqrt6$; $w_3 = \frac23(1, -1, 1)$ e $\|(1, -1, 1)\| = \sqrt3$.

> [!OLTRE] Riscalare durante l'algoritmo
> La proiezione su una retta non cambia se si sostituisce il generatore con un suo multiplo non nullo (lo hai visto nella sezione sulla proiezione). Quindi durante Gram–Schmidt puoi **moltiplicare ogni $w_i$ per un numero comodo** prima di andare avanti (Martelli, §8.1.8). Nell'Esempio 21.7, con $w_2' = 2w_2 = (-1, 1, 2)$: $\langle v_3, w_2'\rangle = -1 + 0 + 2 = 1$, $\langle w_2', w_2'\rangle = 6$, e
> $$w_3 = (1, 0, 1) - \frac12(1, 1, 0) - \frac16(-1, 1, 2) = \left(\frac23, -\frac23, \frac23\right),$$
> lo stesso risultato con meno frazioni.

> [!TRAPPOLA] Si proietta sui $w$ nuovi, non sui $v$ vecchi
> Nel calcolo di $w_3$ i coefficienti usano $w_1$ e $w_2$, già ortogonali tra loro. Se per sbaglio si proietta su $v_2$ invece che su $w_2$:
> $$(1, 0, 1) - \frac12(1, 1, 0) - \frac12(0, 1, 1) = \left(\frac12, -1, \frac12\right),$$
> e questo vettore **non** è ortogonale a $w_2$: $\left\langle \left(\frac12, -1, \frac12\right), \left(-\frac12, \frac12, 1\right)\right\rangle = -\frac14 - \frac12 + \frac12 = -\frac14 \ne 0$.

**Con un prodotto non euclideo.** L'algoritmo è identico: cambiano solo i prodotti scalari, che si calcolano con $S$. Con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ e $v_1 = e_1$, $v_2 = e_2$: $w_1 = e_1$, $g_S(e_2, e_1) = S_{21} = 1$, $g_S(e_1, e_1) = S_{11} = 2$, quindi

$$w_2 = e_2 - \frac12 e_1 = \left(-\frac12, 1\right).$$

Controllo: $g_S(e_1, w_2) = 2 \cdot \left(-\frac12\right) + 1 \cdot 1 = 0$. ✓ Per normalizzare: $\|w_1\|_S = \sqrt2$ e $g_S(w_2, w_2) = 2 \cdot \frac14 + 2 \cdot \left(-\frac12\right) \cdot 1 + 1 = \frac12$, quindi la base $\left\{\frac{e_1}{\sqrt2},\ \sqrt2\,w_2\right\} = \left\{\left(\frac{\sqrt2}2, 0\right), \left(-\frac{\sqrt2}2, \sqrt2\right)\right\}$ è ortonormale **per $g_S$** (non per il prodotto euclideo).

Prova la calcolatrice: ogni riga è un vettore, e il prodotto è quello euclideo. Con i vettori dell'Esempio 21.7 scrive i passaggi $u_2 = v_2 - \frac12 u_1$ e così via (lo strumento chiama $u_i$ i vettori che qui sono $w_i$), e alla fine la base ortonormale. Prova anche a scrivere tre vettori dipendenti: il terzo diventa nullo e viene scartato.

```widget gauss
titolo: Gram–Schmidt passo per passo (righe = vettori)
matrice: 1 1 0; 0 1 1; 1 0 1
modo: gram-schmidt
modi: gram-schmidt
```

> [!METODO] Gram–Schmidt all'esame
> 1. $w_1 = v_1$. Calcola e scrivi $\langle w_1, w_1\rangle$: servirà di nuovo.
> 2. $w_2 = v_2 - \frac{\langle v_2, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1$. **Controlla** $\langle w_2, w_1\rangle = 0$ prima di andare avanti; se ci sono frazioni, riscala $w_2$.
> 3. $w_3 = v_3 - \frac{\langle v_3, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 - \frac{\langle v_3, w_2\rangle}{\langle w_2, w_2\rangle}\,w_2$; controlla l'ortogonalità con $w_1$ e con $w_2$.
> 4. Se serve una base **ortonormale**, dividi ogni vettore per la sua norma solo alla fine.
> 5. Con un $g_S$: ogni prodotto è ${}^tu\,S\,w$; calcola una volta i vettori $Sw_j$ e riusali.

## Decomposizione ortogonale e proiezione su un sottospazio (pp. 107–108)

Con Gram–Schmidt la proiezione passa da una retta a un sottospazio qualsiasi. Da qui $V$ ha **dimensione finita** e $W \subset V$ è un sottospazio.

> [!TEOREMA] 21.8 · Decomposizione ortogonale
> Vale
> $$V = W \oplus W^\perp.$$
> In altre parole, ogni $v \in V$ si scrive in modo unico come
> $$v = w + z, \qquad w \in W, \quad z \in W^\perp.$$
> In particolare,
> $$\dim W + \dim W^\perp = \dim V.$$

La spiegazione delle dispense, con i passaggi aggiunti:

1. **Una base ortonormale di $W$.** Parti da una base qualsiasi di $W$, applica Gram–Schmidt e dividi per le norme: ottieni una base ortonormale $w_1, \dots, w_k$ di $W$ (se $W = \{0\}$ non c'è niente da fare: $W^\perp = V$).
2. **Il candidato.** Poni
   $$p_W(v) = \sum_{i=1}^k \langle v, w_i\rangle\,w_i.$$
   È una combinazione dei $w_i$, quindi $p_W(v) \in W$.
3. **Il resto è ortogonale a $W$.** Per ogni $j$, siccome $\langle w_i, w_j\rangle$ vale 1 per $i = j$ e 0 altrimenti,
   $$\begin{aligned} \langle v - p_W(v), w_j\rangle &= \langle v, w_j\rangle - \sum_{i=1}^k \langle v, w_i\rangle\langle w_i, w_j\rangle \\ &= \langle v, w_j\rangle - \langle v, w_j\rangle = 0. \end{aligned}$$
   Essendo ortogonale a tutti i generatori $w_j$, $v - p_W(v)$ è ortogonale a tutto $W$: $v - p_W(v) \in W^\perp$.
4. **Esistenza.** $v = p_W(v) + \big(v - p_W(v)\big)$ con il primo pezzo in $W$ e il secondo in $W^\perp$: quindi $V = W + W^\perp$.
5. **Unicità.** $W \cap W^\perp = \{0\}$, perché un vettore nell'intersezione è ortogonale a sé stesso, quindi nullo. La somma è diretta (Definizione 18.4) e la decomposizione è unica.
6. **Dimensioni.** Unendo una base di $W$ e una di $W^\perp$ si ottiene una base di $V$ (generano per il punto 4, sono indipendenti perché la somma è diretta): quindi $\dim W + \dim W^\perp = \dim V$. $\square$

Il vettore $p_W(v)$ è la **proiezione ortogonale** di $v$ su $W$ e, per una base ortonormale $w_1, \dots, w_k$ di $W$,

$$p_W(v) = \sum_{i=1}^k \langle v, w_i\rangle\,w_i.$$

> [!OSSERVAZIONE] La stessa formula con una base soltanto ortogonale
> Se $w_1, \dots, w_k$ è una base **ortogonale** di $W$ (non normalizzata), sostituendo $\frac{w_i}{\|w_i\|}$ nella formula si ottiene
> $$p_W(v) = \sum_{i=1}^k \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}\,w_i = \sum_{i=1}^k p_{w_i}(v),$$
> la somma delle proiezioni sulle rette dei $w_i$ (Martelli, Proposizione 8.1.28). È la formula più comoda all'esame: evita le radici quadrate. **Attenzione**: vale solo se la base di $W$ è ortogonale; con una base qualsiasi prima si applica Gram–Schmidt.

> [!ESEMPIO] Proiettare $v = (1, 2, 3)$ sul piano $W = \{x + y + z = 0\}$
> **Con una base ortogonale.** Due vettori di $W$ ortogonali tra loro: $a = (1, -1, 0)$ e $b = (1, 1, -2)$ (entrambi hanno somma delle coordinate 0, e $\langle a, b\rangle = 1 - 1 + 0 = 0$). Allora
> $$\begin{aligned} p_W(v) &= \frac{\langle v, a\rangle}{\langle a, a\rangle}\,a + \frac{\langle v, b\rangle}{\langle b, b\rangle}\,b \\ &= \frac{-1}{2}(1, -1, 0) + \frac{-3}{6}(1, 1, -2) = (-1, 0, 1). \end{aligned}$$
> Il resto è $v - p_W(v) = (2, 2, 2)$, multiplo di $(1, 1, 1)$: sta in $W^\perp$. ✓
>
> **Con la scorciatoia.** $W^\perp = \Span((1, 1, 1))$ è una retta, e $v = p_W(v) + p_{W^\perp}(v)$. Quindi
> $$p_W(v) = v - p_{(1, 1, 1)}(v) = (1, 2, 3) - \frac63(1, 1, 1) = (-1, 0, 1).$$
> Stesso risultato con un conto solo. Quando $W$ è un piano di $\R^3$ conviene quasi sempre proiettare sulla retta $W^\perp$ e sottrarre.

La proiezione ha una proprietà di minimo che spiega il suo nome geometrico: è il punto di $W$ **più vicino** a $v$.

> [!PROP] 21.9
> Per ogni $w \in W$ vale
> $$\|v - p_W(v)\| \le \|v - w\|,$$
> con uguaglianza se e solo se $w = p_W(v)$.

La spiegazione:

1. scrivi $v - w = \big(v - p_W(v)\big) + \big(p_W(v) - w\big)$;
2. il primo pezzo sta in $W^\perp$ (Teorema 21.8), il secondo in $W$ (differenza di due vettori di $W$): quindi sono **ortogonali**;
3. per due vettori ortogonali vale il **teorema di Pitagora**, $\|a + b\|^2 = \|a\|^2 + \|b\|^2$ (è lo sviluppo del quadrato della lezione L20 con $\langle a, b\rangle = 0$):
   $$\|v - w\|^2 = \|v - p_W(v)\|^2 + \|p_W(v) - w\|^2;$$
4. il secondo addendo è $\ge 0$, quindi $\|v - w\|^2 \ge \|v - p_W(v)\|^2$; è uguale solo se $\|p_W(v) - w\| = 0$, cioè $w = p_W(v)$. $\square$

Nell'esempio del piano: $\|v - p_W(v)\| = \|(2, 2, 2)\| = 2\sqrt3 = \sqrt{12}$ è la **distanza** di $v$ dal piano. Qualsiasi altro punto di $W$ è più lontano: $w = 0$ dà $\|v\| = \sqrt{14}$, e infatti $14 = 12 + \|p_W(v)\|^2 = 12 + 2$; $w = (1, -1, 0)$ dà $\|(0, 3, 3)\| = \sqrt{18}$.

> [!METODO] Proiezione su un sottospazio $W$
> 1. Trova una base di $W$ (se $W$ è dato con equazioni, risolvile).
> 2. Rendila ortogonale con Gram–Schmidt.
> 3. Somma le proiezioni: $p_W(v) = \sum_i \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}\,w_i$.
> 4. **Controlla** che $v - p_W(v)$ sia ortogonale ai generatori di $W$.
> 5. Se $W^\perp$ è più piccolo di $W$ (per esempio $W$ piano in $\R^3$), calcola $p_{W^\perp}(v)$ e poi $p_W(v) = v - p_{W^\perp}(v)$.
> 6. La distanza di $v$ da $W$ è $\|v - p_W(v)\|$.

## Minimi quadrati (pp. 109–110)

Tre punti sperimentali, $(0, 1)$, $(1, 2)$, $(2, 2)$: esiste una retta $y = a + bt$ che passa per tutti e tre? Servirebbe

$$\begin{cases} a + 0b = 1 \\ a + 1b = 2 \\ a + 2b = 2 \end{cases}$$

Le prime due danno $a = 1$ e $b = 1$, ma allora la terza darebbe $a + 2b = 3 \neq 2$: il sistema **non ha soluzioni**. Nella realtà succede sempre, perché le misure hanno errori. Allora si cerca la retta che passa «il più vicino possibile» ai punti.

In generale: consideriamo un sistema lineare $Ax = b$, con $A \in M(m, n, \R)$ e $b \in \R^m$. Se il sistema non ha soluzioni, possiamo cercare $x$ in modo che $Ax$ sia il più vicino possibile a $b$.

> [!DEF] 21.10 · Soluzione ai minimi quadrati
> Una **soluzione ai minimi quadrati** di $Ax = b$ è un vettore $x_0 \in \R^n$ tale che
> $$\|Ax_0 - b\| \le \|Ax - b\| \qquad \forall\, x \in \R^n.$$

Pezzo per pezzo:

- $Ax - b$ è il vettore degli **errori** (o residui): quanto sbaglia ogni equazione con la scelta $x$;
- $x_0$ rende la lunghezza (euclidea) di questo vettore la più piccola possibile;
- minimizzare $\|Ax - b\|$ è come minimizzare $\|Ax - b\|^2$, cioè la **somma dei quadrati** degli errori: da qui il nome;
- se il sistema ha soluzioni, le soluzioni ai minimi quadrati sono proprio quelle (errore zero).

**Il collegamento con la proiezione.** Poniamo

$$W = \Imm L_A = \Span(A^1, \dots, A^n),$$

lo spazio generato dalle colonne $A^1, \dots, A^n$ di $A$ (lezione L14): i vettori $Ax$, al variare di $x$, sono **esattamente** i vettori di $W$. Cercare $Ax$ il più vicino possibile a $b$ vuol dire cercare il punto di $W$ più vicino a $b$, che per la Proposizione 21.9 è la proiezione $p_W(b)$. Quindi $x_0$ è una soluzione ai minimi quadrati precisamente quando

$$Ax_0 = p_W(b), \quad \text{cioè quando} \quad b - Ax_0 \in W^\perp.$$

(La seconda forma viene dall'unicità della decomposizione $b = p_W(b) + (b - p_W(b))$ del Teorema 21.8: $Ax_0$ sta in $W$, e se $b - Ax_0$ sta in $W^\perp$ allora $Ax_0$ è per forza $p_W(b)$.)

**Come si riconosce un vettore di $W^\perp$.** Per ogni $y \in \R^m$:

$$y \in W^\perp \iff \langle y, Ax\rangle = 0 \ \ \forall x \iff {}^tA\,y = 0.$$

Il primo $\iff$ è la definizione ($W$ è fatto dei vettori $Ax$). Per il secondo: $\langle y, Ax\rangle = {}^ty\,A\,x = {}^t({}^tA\,y)\,x = \langle {}^tA\,y, x\rangle$, e un vettore di $\R^n$ ortogonale a **tutti** gli $x$ è nullo (basta prendere $x = {}^tA\,y$). Applicando questo a $y = b - Ax_0$: ${}^tA(b - Ax_0) = 0$, cioè ${}^tA\,A\,x_0 = {}^tA\,b$.

> [!TEOREMA] 21.11 · Equazioni normali
> Un vettore $x_0 \in \R^n$ è una soluzione ai minimi quadrati di $Ax = b$ se e solo se
> $${}^tA\,A\,x_0 = {}^tA\,b.$$
> Queste sono dette **equazioni normali**.

Tre osservazioni delle dispense, con il perché:

- **Le equazioni normali hanno sempre almeno una soluzione**, perché $p_W(b) \in W = \Imm L_A$: esiste $x_0$ con $Ax_0 = p_W(b)$.
- **Se le colonne di $A$ sono linearmente indipendenti, la soluzione è unica**: in questo caso ${}^tAA$ è invertibile e
  $$x_0 = ({}^tA\,A)^{-1}\,{}^tA\,b.$$
  Il motivo dell'invertibilità (le dispense non lo scrivono): se ${}^tAAx = 0$, allora $0 = {}^tx\,{}^tAAx = \|Ax\|^2$, quindi $Ax = 0$, e con colonne indipendenti questo obbliga $x = 0$. Una matrice quadrata con nucleo nullo è invertibile.
- ${}^tAA$ è una matrice $n \times n$ **simmetrica** (${}^t({}^tAA) = {}^tA\,A$), piccola anche quando i dati sono tanti: con $m = 1000$ punti e una retta ($n = 2$) si risolve un sistema $2 \times 2$.

> [!ESEMPIO] 21.12 · La retta dei minimi quadrati
> Vogliamo trovare la retta $y = a + bt$ che approssima al meglio, nel senso dei minimi quadrati, i punti $(0, 1)$, $(1, 2)$, $(2, 2)$. Cerchiamo quindi $a, b$ tali che
> $$\begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} \approx \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}.$$
> Le equazioni normali sono
> $$\begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \end{pmatrix},$$
> da cui $a = \frac76$, $b = \frac12$. La retta cercata è
> $$y = \frac76 + \frac12 t.$$

Attenzione ai nomi: in questo esempio la lettera $b$ indica sia la pendenza della retta sia (nel teorema) il vettore dei dati $(1, 2, 2)$. I conti, uno per uno:

1. **La matrice e i dati.** Ogni punto $(t, y)$ dà un'equazione $a + bt = y$: la riga di $A$ è $(1, t)$ e il dato è $y$.
2. **${}^tAA$.** Le colonne di $A$ sono $A^1 = (1, 1, 1)$ e $A^2 = (0, 1, 2)$; le entrate di ${}^tAA$ sono i loro prodotti scalari: $\langle A^1, A^1\rangle = 3$, $\langle A^1, A^2\rangle = 0 + 1 + 2 = 3$, $\langle A^2, A^2\rangle = 0 + 1 + 4 = 5$.
3. **${}^tA\,b$.** $\langle A^1, b\rangle = 1 + 2 + 2 = 5$ e $\langle A^2, b\rangle = 0 + 2 + 4 = 6$.
4. **Il sistema $2 \times 2$.** $3a + 3b = 5$ e $3a + 5b = 6$. Sottraendo: $2b = 1$, cioè $b = \frac12$; poi $3a = 5 - \frac32 = \frac72$, cioè $a = \frac76$.
5. **Controllo.** Sulla retta i valori sono $\frac76$, $\frac76 + \frac12 = \frac53$, $\frac76 + 1 = \frac{13}6$. Gli errori $b - Ax_0 = \left(1 - \frac76,\ 2 - \frac53,\ 2 - \frac{13}6\right) = \left(-\frac16, \frac13, -\frac16\right)$ sono ortogonali alle colonne: $-\frac16 + \frac13 - \frac16 = 0$ e $0 + \frac13 - \frac13 = 0$. ✓ La somma dei quadrati degli errori è $\frac1{36} + \frac4{36} + \frac1{36} = \frac16$: nessuna retta fa meglio.

```grafico
titolo: La retta $y = \frac76 + \frac12 t$ e gli errori (verticali) rispetto ai tre punti
x: -0.5 2.5
y: 0 3
nomi: $t$ $y$
retta: 0 7/6 2 13/6 | accento | spesso
punto: 0 1 | ambra | $(0, 1)$ | so
punto: 1 2 | ambra | $(1, 2)$ | n
punto: 2 2 | ambra | $(2, 2)$ | se
segmento: 0 1 0 7/6 | rosa | spesso
segmento: 1 2 1 5/3 | rosa | spesso
segmento: 2 2 2 13/6 | rosa | spesso
```

> [!NOTA] Collegamento con l'informatica: regressione lineare
> Come osservano le dispense, l'esempio precedente è precisamente una **regressione lineare** con una variabile. I dati osservati vengono raccolti in un vettore $b$, mentre la matrice $A$ contiene le caratteristiche usate per fare la previsione. Il modello produce il vettore $Ax$, e i parametri $x$ vengono scelti minimizzando $\|Ax - b\|^2$. Con più variabili esplicative si aggiungono semplicemente altre colonne alla matrice $A$. I minimi quadrati sono uno dei primi esempi in cui proiezioni ortogonali e sistemi lineari diventano un metodo per **apprendere un modello dai dati**.

> [!METODO] Minimi quadrati passo per passo
> 1. Scrivi il sistema come $Ax = b$ (per una retta $y = a + bt$: righe $(1, t_i)$, dati $y_i$).
> 2. Calcola ${}^tA\,A$ (prodotti scalari tra le colonne) e ${}^tA\,b$ (prodotti scalari tra le colonne e $b$).
> 3. Risolvi il sistema quadrato ${}^tA\,A\,x_0 = {}^tA\,b$.
> 4. Controlla che l'errore $b - Ax_0$ sia ortogonale a tutte le colonne di $A$.

> [!OLTRE] Dove trovarlo nel libro
> Martelli: §7.1.7 «Vettori ortogonali» (pp. 205–206); §7.3 «Sottospazio ortogonale» (pp. 213–218), con il Teorema 7.3.12 sulle dimensioni; capitolo 8, §8.1.5 «Proiezione ortogonale» (pp. 244–245), §8.1.6 «Coefficienti di Fourier» (pp. 245–247), §8.1.7 «Ortogonalizzazione di Gram–Schmidt» (pp. 247–249), §8.1.8 «Riscalamento» (pp. 249–250), §8.1.9 «Ortogonalità» (p. 250) e §8.1.10 «Proiezioni su sottospazi» (pp. 251–253). I minimi quadrati non sono trattati nel libro: per quella sezione fanno fede le dispense.

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; dura 2 ore, senza calcolatrice, con solo 4 facciate di appunti scritti a mano. Appelli 2026/27: 22/01 e 05/02/2027, alle 14:00. I dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026**

Questa lezione è la base del **problema 12** di molti appelli: in 7 dei 15 appelli 2023–2026 il problema 12 riguarda prodotti scalari, Gram–Schmidt e proiezioni, e in altri due chiede anche una proiezione su un piano. Lo schema tipico:

1. **base ortonormale (o ortogonale) di un piano** $V = \Span(v_1, v_2) \subset \R^3$ con Gram–Schmidt: appelli del 10/06/2024, del 03/06/2026 e del 07/09/2026 (prodotto euclideo); del 16/01/2025 e del 03/07/2026 (con un $g_S$);
2. **proiezione ortogonale** di un vettore su quel piano: stessi appelli tranne quello del 03/07/2026 (che al posto della proiezione chiede il complemento ortogonale), più il 24/01/2024 (proiezione su $\pi_3 = \Span(e_1, e_2 + e_3)$), il 05/02/2026 (con $g_S$) e il 15/01/2026 (punto 4);
3. **complemento ortogonale**: appello del 07/02/2025 (di $\Span(x, x^2)$ in $\R_2[x]$) e del 03/07/2026 (di un piano rispetto a $g_S$);
4. il punto successivo (intersezione di una retta con il piano e angolo di incidenza) è materia delle lezioni L23–L24.

Nel quiz: l'appello del 05/02/2026 (domanda 2) usa il fatto che $W^\perp$ è sempre un sottospazio. Negli appelli 2023–2026 non ci sono domande sui minimi quadrati, che le dispense 2026 trattano nella sezione 21.E: vanno comunque studiati.

**Tre domande vere, risolte**

> [!ESEMPIO] Appello del 03/06/2026, problema 12, punti (1) e (2)
> Siano $v_1 = (1, 1, 0)$ e $v_2 = (0, 1, 1)$. (1) Calcolare una base ortonormale di $V = \Span(v_1, v_2)$. (2) Determinare la proiezione ortogonale di $w = (2, 1, 2)$ su $V$.
>
> **Soluzione.** (1) Gram–Schmidt: $w_1 = v_1$; $\langle v_2, w_1\rangle = 1$, $\langle w_1, w_1\rangle = 2$, quindi $w_2 = (0, 1, 1) - \frac12(1, 1, 0) = \left(-\frac12, \frac12, 1\right)$, che riscalo in $w_2' = (-1, 1, 2)$. Controllo: $\langle w_1, w_2'\rangle = -1 + 1 + 0 = 0$. Normalizzando: $\left\{\frac{1}{\sqrt2}(1, 1, 0),\ \frac{1}{\sqrt6}(-1, 1, 2)\right\}$.
>
> (2) Con la base ortogonale $w_1, w_2'$:
> $$\begin{aligned} p_V(w) &= \frac{\langle w, w_1\rangle}{2}\,w_1 + \frac{\langle w, w_2'\rangle}{6}\,w_2' \\ &= \frac32(1, 1, 0) + \frac36(-1, 1, 2) = (1, 2, 1). \end{aligned}$$
> Controllo: $w - p_V(w) = (1, -1, 1)$ è ortogonale a $v_1$ ($1 - 1 = 0$) e a $v_2$ ($-1 + 1 = 0$). ✓

> [!ESEMPIO] Appello del 16/01/2025, problema 12, punti (2) e (3)
> Sia $g_S$ il prodotto scalare di $\R^3$ con $S = \operatorname{diag}(1, 2, 3)$, e siano $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$, $v_3 = (0, 1, 1)$. (2) Applicare Gram–Schmidt per trovare una base ortogonale di $\Span(v_1, v_2)$ rispetto a $g_S$. (3) Calcolare la proiezione ortogonale di $v_3$ su $\Span(v_1, v_2)$ rispetto a $g_S$.
>
> **Soluzione.** Con $S$ diagonale, $g_S(x, y) = x_1y_1 + 2x_2y_2 + 3x_3y_3$.
> (2) $w_1 = v_1$, $g_S(w_1, w_1) = 1 + 2 = 3$, $g_S(v_2, w_1) = 1 + 0 + 0 = 1$, quindi $w_2 = (1, 0, 1) - \frac13(1, 1, 0) = \left(\frac23, -\frac13, 1\right)$; riscalo: $w_2' = (2, -1, 3)$. Controllo: $g_S(w_1, w_2') = 2 - 2 + 0 = 0$. ✓
>
> (3) $g_S(v_3, w_1) = 0 + 2 + 0 = 2$; $g_S(v_3, w_2') = 0 - 2 + 9 = 7$; $g_S(w_2', w_2') = 4 + 2 + 27 = 33$. Quindi
> $$\begin{aligned} p(v_3) &= \frac23(1, 1, 0) + \frac{7}{33}(2, -1, 3) \\ &= \left(\frac{22 + 14}{33}, \frac{22 - 7}{33}, \frac{21}{33}\right) = \left(\frac{12}{11}, \frac{5}{11}, \frac{7}{11}\right). \end{aligned}$$
> Controllo: $v_3 - p(v_3) = \left(-\frac{12}{11}, \frac{6}{11}, \frac{4}{11}\right)$ e $g_S$ con $v_1$ dà $-\frac{12}{11} + \frac{12}{11} = 0$, con $v_2$ dà $-\frac{12}{11} + \frac{12}{11} = 0$. ✓ L'errore da non fare: usare il prodotto euclideo in uno dei conti.

> [!ESEMPIO] Appello del 07/02/2025, problema 12, punto (3)
> Con il prodotto $g$ su $\R_2[x]$ della lezione L19, di matrice $\begin{pmatrix} 6 & 1 & 3 \\ 1 & 2 & 0 \\ 3 & 0 & 2 \end{pmatrix}$ nella base $\{1, x, x^2\}$, trovare una base del complemento ortogonale di $\Span(x, x^2)$.
>
> **Soluzione.** Per $p = a + bx + cx^2$: $g(p, x)$ è la seconda coordinata di $S(a, b, c)$, cioè $a + 2b$; $g(p, x^2)$ è la terza, cioè $3a + 2c$. Il sistema $a + 2b = 0$, $3a + 2c = 0$ dà $b = -\frac a2$, $c = -\frac{3a}2$; con $a = 2$: $p = 2 - x - 3x^2$. Quindi il complemento è $\Span(2 - x - 3x^2)$, di dimensione $3 - 2 = 1$ come previsto dal Teorema 21.8. Controllo: $S(2, -1, -3) = (12 - 1 - 9,\ 2 - 2 + 0,\ 6 + 0 - 6) = (2, 0, 0)$, con seconda e terza coordinata nulle. ✓ (Nei punti precedenti il problema chiedeva la matrice, lezione L19, e l'angolo tra $x$ e $x^2$, lezione L20: $g(x, x^2) = 0$, quindi è $\frac\pi2$.)

**Errori da evitare**

- Proiettare su una base **non ortogonale** del piano sommando le proiezioni sui singoli vettori: il risultato è sbagliato. Prima Gram–Schmidt.
- In Gram–Schmidt, proiettare sui $v$ invece che sui $w$ (vedi la trappola).
- Dimenticare di **controllare** l'ortogonalità: è un conto di pochi secondi e salva molti punti.
- Con un $g_S$, calcolare un prodotto con il prodotto euclideo.
- Confondere $p_W(v)$ (sta in $W$) con $v - p_W(v)$ (sta in $W^\perp$).

> [!ESAME] Sul foglio da 4 facciate
> - $p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}\,w$; $v - p_w(v) \perp w$.
> - Base ortogonale: $v = \sum \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}v_i$; ortonormale: $v = \sum \langle v, v_i\rangle v_i$.
> - Gram–Schmidt per tre vettori (le tre righe della formula), con il consiglio di riscalare.
> - $V = W \oplus W^\perp$, $\dim W^\perp = \dim V - \dim W$; $p_W(v) = \sum_i \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}w_i$ con $w_i$ **ortogonali**; $p_W(v) = v - p_{W^\perp}(v)$; distanza $= \|v - p_W(v)\|$.
> - Minimi quadrati: ${}^tAAx_0 = {}^tAb$; errore ortogonale alle colonne.

## Quiz

```quiz
D: Rispetto al prodotto scalare euclideo, il complemento ortogonale di $W = \Span({}^t(1, 2, -1))$ in $\R^3$ è:
+ il piano $\{x + 2y - z = 0\}$
- la retta $\Span({}^t(1, 2, -1))$
- l'insieme $\{x + 2y - z = 1\}$
- la retta $\Span({}^t(-2, 1, 0))$
- $\{0\}$
= $v = (x, y, z)$ sta in $W^\perp$ se e solo se è ortogonale al generatore: $x + 2y - z = 0$. È un piano (dimensione $3 - 1 = 2$). La retta $\Span((-2, 1, 0))$ è contenuta nel piano ma non è tutto $W^\perp$; l'insieme con $= 1$ non contiene lo zero, quindi non è un sottospazio. Simile al punto sul complemento ortogonale dei problemi del 07/02/2025 e del 03/07/2026.

D: Qual è la proiezione ortogonale (prodotto euclideo) di $v = {}^t(3, 1)$ sulla retta $\Span({}^t(1, 1))$?
+ ${}^t(2, 2)$
- ${}^t(4, 4)$
- ${}^t(1, -1)$
- ${}^t(2\sqrt2, 2\sqrt2)$
- ${}^t(1, 1)$
= $\frac{\langle v, w\rangle}{\langle w, w\rangle}w = \frac42(1, 1) = (2, 2)$. $(1, -1)$ è il resto $v - p_w(v)$; $(2\sqrt2, 2\sqrt2)$ viene dividendo per $\|w\|$ invece che per $\|w\|^2$; $(4, 4)$ dimentica di dividere. Simile al punto (2) dei problemi 12 del 03/06/2026 e del 07/09/2026.

D: La base $\{{}^t(1, 1), {}^t(1, -1)\}$ di $\R^2$ è ortogonale. Quali sono le coordinate di $v = {}^t(5, 1)$ in questa base?
+ $(3, 2)$
- $(6, 4)$
- $(5, 1)$
- $(2, 3)$
- $(3, -2)$
= Coefficienti di Fourier: $\frac{5 + 1}{2} = 3$ e $\frac{5 - 1}{2} = 2$. Controllo: $3(1, 1) + 2(1, -1) = (5, 1)$. $(6, 4)$ dimentica di dividere per $\langle v_i, v_i\rangle = 2$.

D: Applicando Gram–Schmidt (prodotto euclideo) a $v_1 = {}^t(1, 1, 0)$ e $v_2 = {}^t(1, 0, 1)$, il vettore $w_2$ è:
+ ${}^t\left(\frac12, -\frac12, 1\right)$
- ${}^t(0, -1, 1)$
- ${}^t(1, 0, 1)$
- ${}^t\left(\frac12, \frac12, 1\right)$
- ${}^t\left(-\frac12, \frac12, 1\right)$
= $w_2 = v_2 - \frac{\langle v_2, v_1\rangle}{\langle v_1, v_1\rangle}v_1 = (1, 0, 1) - \frac12(1, 1, 0) = \left(\frac12, -\frac12, 1\right)$. $(0, -1, 1)$ toglie tutto $v_1$ invece di metà; $\left(-\frac12, \frac12, 1\right)$ è ortogonale a $v_1$ ma non sta in $\Span(v_1, v_2)$. Simile al punto (1) dei problemi 12 del 07/09/2026 e del 03/06/2026.

D: Sia $W$ un sottospazio di dimensione 2 di $\R^5$, con il prodotto scalare euclideo. Qual è la dimensione di $W^\perp$?
N: 3
= Per il Teorema 21.8, $\dim W + \dim W^\perp = \dim \R^5 = 5$, quindi $\dim W^\perp = 3$.

D: Sia $V$ di dimensione finita con un prodotto scalare definito positivo e sia $W \subset V$ un sottospazio. Quale affermazione è sempre vera?
+ $V = W \oplus W^\perp$
- $W \cap W^\perp = W$
- $W^\perp$ è l'insieme dei vettori di $V$ che non stanno in $W$
- $\dim W^\perp = \dim W$
- $W^\perp$ è un sottospazio solo se $W$ è una retta
= È il Teorema 21.8. $W \cap W^\perp = \{0\}$ (non $W$, salvo $W = \{0\}$); il complemento insiemistico $V \setminus W$ non contiene lo zero e non è un sottospazio; le dimensioni si sommano a $\dim V$, non sono uguali in generale; $W^\perp$ è sempre un sottospazio (Proposizione 21.4).

D: Il vettore $x_0$ è una soluzione ai minimi quadrati del sistema $Ax = b$ se e solo se:
+ ${}^tA\,A\,x_0 = {}^tA\,b$
- $Ax_0 = b$
- ${}^tA\,x_0 = b$
- $A\,{}^tA\,x_0 = b$
- $x_0 = A^{-1}b$
= Sono le equazioni normali (Teorema 21.11). $Ax_0 = b$ di solito non ha soluzioni (è il motivo per cui si usano i minimi quadrati); $A$ in genere non è quadrata, quindi $A^{-1}$ non ha senso; le altre due non hanno nemmeno le dimensioni giuste in generale.

D: Quale dei seguenti insiemi **non** è un sottospazio di $\R_2[x]$ (con un prodotto scalare definito positivo fissato)?
+ $\{x^2 + tx \mid t \in \R\}$
- $\R_1[x]^\perp$
- $\Span(1 + x, x^2)$
- $\{p(x) \in \R_2[x] \mid p(1) = p(2)\}$
- $\{p(x) \in \R_2[x] \mid p(0) = 0\}$
= $\{x^2 + tx\}$ non contiene il polinomio nullo (il coefficiente di $x^2$ è sempre 1). Il complemento ortogonale è sempre un sottospazio (Proposizione 21.4), uno span pure, e gli ultimi due sono definiti da equazioni lineari omogenee nei coefficienti. Simile all'appello del 05/02/2026, domanda 2.

D: Rispetto al prodotto scalare euclideo, quanto vale la distanza del vettore $v = {}^t(3, 0, 0)$ dal piano $W = \{x + 2y + 2z = 0\}$?
N: 1
= $W^\perp = \Span(n)$ con $n = (1, 2, 2)$, $\|n\| = 3$. La distanza è $\|v - p_W(v)\| = \|p_n(v)\| = \frac{|\langle v, n\rangle|}{\|n\|} = \frac{3}{3} = 1$. Idea simile alla distanza punto-piano dell'appello del 16/01/2025 (domanda 4), che però riguarda un piano affine (lezione L24).

D: Se $\{v_1, \dots, v_n\}$ è una base **ortonormale** di $V$, la coordinata $i$-esima di un vettore $v$ in questa base è:
+ $\langle v, v_i\rangle$
- $\|v\|$
- $\langle v_i, v_i\rangle$
- $\langle v, v\rangle$
- $\langle v, v_1\rangle + \dots + \langle v, v_n\rangle$
= Per la Proposizione 21.6 la coordinata è $\frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}$, e in una base ortonormale $\langle v_i, v_i\rangle = 1$. Le altre risposte non possono essere coordinate: $\|v\|$, $\langle v, v\rangle$ e la somma non dipendono da $i$, e $\langle v_i, v_i\rangle$ vale sempre 1.
```

## Esercizi

::: esercizio medio Esercizio 21.13 delle dispense
Trovare la soluzione ai minimi quadrati del sistema
$$\begin{cases} x = 1, \\ y = 1, \\ x + y = 3. \end{cases}$$
Scrivere il sistema nella forma $Ax = b$, risolvere le equazioni normali e verificare che il vettore errore $b - Ax_0$ sia ortogonale alle colonne di $A$.
::: soluzione
**Il sistema non ha soluzioni.** Le prime due equazioni danno $x = y = 1$, ma allora $x + y = 2 \neq 3$.

**Forma $Ax = b$.** Una riga per equazione, una colonna per incognita:
$$A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}, \qquad \begin{pmatrix} x \\ y \end{pmatrix}, \qquad b = \begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix}.$$

**Equazioni normali.** Colonne $A^1 = (1, 0, 1)$ e $A^2 = (0, 1, 1)$:
$${}^tA\,A = \begin{pmatrix} \langle A^1, A^1\rangle & \langle A^1, A^2\rangle \\ \langle A^2, A^1\rangle & \langle A^2, A^2\rangle \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix},$$
$${}^tA\,b = \begin{pmatrix} 1 + 0 + 3 \\ 0 + 1 + 3 \end{pmatrix} = \begin{pmatrix} 4 \\ 4 \end{pmatrix}.$$
Il sistema è $2x + y = 4$, $x + 2y = 4$. Sottraendo: $x - y = 0$, quindi $x = y$ e $3x = 4$:
$$x_0 = \begin{pmatrix} \frac43 \\ \frac43 \end{pmatrix}.$$
Le colonne di $A$ sono indipendenti, quindi questa è l'unica soluzione ai minimi quadrati.

**Vettore errore.** $Ax_0 = \left(\frac43, \frac43, \frac83\right)$ e
$$b - Ax_0 = \left(1 - \frac43,\ 1 - \frac43,\ 3 - \frac83\right) = \left(-\frac13, -\frac13, \frac13\right).$$
**Verifica.** Con $A^1$: $-\frac13 + 0 + \frac13 = 0$. Con $A^2$: $0 - \frac13 + \frac13 = 0$. ✓ L'errore è ortogonale alle colonne, come dice il Teorema 21.11. La somma dei quadrati degli errori è $\frac19 + \frac19 + \frac19 = \frac13$.
:::

::: esercizio base Complementi ortogonali
Con il prodotto euclideo, trova una base di $W^\perp$ per: (a) $W = \Span((3, -1)) \subset \R^2$; (b) $W = \Span((1, 0, 2)) \subset \R^3$; (c) $W = \Span((1, 1, 1), (1, 0, -1)) \subset \R^3$.
::: soluzione
(a) Scambio le coordinate e cambio un segno: $W^\perp = \Span((1, 3))$. Controllo: $3 - 3 = 0$.

(b) Equazione $x + 2z = 0$, cioè $x = -2z$ con $y, z$ liberi. Base: $(0, 1, 0)$ (con $y = 1$, $z = 0$) e $(-2, 0, 1)$ (con $y = 0$, $z = 1$). $\dim W^\perp = 2$.

(c) Due equazioni: $x + y + z = 0$ e $x - z = 0$. Dalla seconda $x = z$; dalla prima $y = -2z$. $W^\perp = \Span((1, -2, 1))$. Controllo: $1 - 2 + 1 = 0$ e $1 + 0 - 1 = 0$. ✓
:::

::: esercizio base Proiezioni su una retta
(a) Proietta $v = (4, 2)$ sulla retta di $w = (1, 1)$ e scrivi $v$ come somma di un vettore della retta e di uno ortogonale. (b) Proietta $v = (1, 0, 2)$ sulla retta di $w = (2, 1, 2)$.
::: soluzione
(a) $\frac{\langle v, w\rangle}{\langle w, w\rangle} = \frac{6}{2} = 3$, quindi $p_w(v) = (3, 3)$. Il resto è $(4, 2) - (3, 3) = (1, -1)$, ortogonale a $(1, 1)$. Quindi $(4, 2) = (3, 3) + (1, -1)$.

(b) $\langle v, w\rangle = 2 + 0 + 4 = 6$, $\langle w, w\rangle = 4 + 1 + 4 = 9$: $p_w(v) = \frac69(2, 1, 2) = \left(\frac43, \frac23, \frac43\right)$. Controllo: il resto $\left(-\frac13, -\frac23, \frac23\right)$ dà con $w$: $-\frac23 - \frac23 + \frac43 = 0$. ✓
:::

::: esercizio base Coordinate in una base ortogonale di $\R^3$
Verifica che $v_1 = (1, 1, 1)$, $v_2 = (1, -1, 0)$, $v_3 = (1, 1, -2)$ formano una base ortogonale e trova le coordinate di $v = (2, 0, 4)$ senza risolvere sistemi.
::: soluzione
**Ortogonalità.** $\langle v_1, v_2\rangle = 1 - 1 + 0 = 0$; $\langle v_1, v_3\rangle = 1 + 1 - 2 = 0$; $\langle v_2, v_3\rangle = 1 - 1 + 0 = 0$. Tre vettori non nulli e ortogonali in $\R^3$ sono indipendenti, quindi sono una base.

**Coordinate.**
- $\frac{\langle v, v_1\rangle}{\langle v_1, v_1\rangle} = \frac{2 + 0 + 4}{3} = 2$;
- $\frac{\langle v, v_2\rangle}{\langle v_2, v_2\rangle} = \frac{2 - 0 + 0}{2} = 1$;
- $\frac{\langle v, v_3\rangle}{\langle v_3, v_3\rangle} = \frac{2 + 0 - 8}{6} = -1$.

Controllo: $2(1, 1, 1) + (1, -1, 0) - (1, 1, -2) = (2 + 1 - 1,\ 2 - 1 - 1,\ 2 + 0 + 2) = (2, 0, 4)$. ✓
:::

::: esercizio medio Gram–Schmidt e coordinate
(a) Mostra che $v_1 = (1, -1, 0)$, $v_2 = (2, 0, 1)$, $v_3 = (0, -1, 1)$ formano una base di $\R^3$ e ortogonalizzala con Gram–Schmidt. (b) Calcola le coordinate di $2e_1 - 5e_2 + e_3$ nella base ortogonale trovata.
::: soluzione
(a) **Base.** $\det\begin{pmatrix} 1 & 2 & 0 \\ -1 & 0 & -1 \\ 0 & 1 & 1 \end{pmatrix} = 1 \cdot (0 + 1) - 2 \cdot (-1 - 0) + 0 = 1 + 2 = 3 \neq 0$ (sviluppo lungo la prima riga; le colonne sono i tre vettori).

**Gram–Schmidt.**
- $w_1 = (1, -1, 0)$, $\langle w_1, w_1\rangle = 2$.
- $\langle v_2, w_1\rangle = 2$, quindi $w_2 = (2, 0, 1) - \frac22(1, -1, 0) = (1, 1, 1)$, con $\langle w_2, w_2\rangle = 3$. Controllo: $\langle w_1, w_2\rangle = 1 - 1 + 0 = 0$.
- $\langle v_3, w_1\rangle = 0 + 1 + 0 = 1$ e $\langle v_3, w_2\rangle = 0 - 1 + 1 = 0$, quindi
  $$w_3 = (0, -1, 1) - \frac12(1, -1, 0) - 0 \cdot w_2 = \left(-\frac12, -\frac12, 1\right),$$
  che riscalo in $w_3' = (-1, -1, 2)$, con $\langle w_3', w_3'\rangle = 6$. Controllo: $\langle w_3', w_1\rangle = -1 + 1 = 0$, $\langle w_3', w_2\rangle = -1 - 1 + 2 = 0$. ✓

(b) $v = (2, -5, 1)$. Coefficienti di Fourier:
$$\begin{aligned} \frac{\langle v, w_1\rangle}{2} &= \frac{2 + 5}{2} = \frac72, \\ \frac{\langle v, w_2\rangle}{3} &= \frac{2 - 5 + 1}{3} = -\frac23, \\ \frac{\langle v, w_3'\rangle}{6} &= \frac{-2 + 5 + 2}{6} = \frac56. \end{aligned}$$
Controllo della prima coordinata: $\frac72 - \frac23 - \frac56 = \frac{21 - 4 - 5}{6} = 2$. ✓ (Le altre due tornano allo stesso modo: $-\frac72 - \frac23 - \frac56 = -5$ e $0 - \frac23 + \frac53 = 1$.)
:::

::: esercizio medio Proiezione su un piano e distanza
Sia $W = \{x - y + 2z = 0\} \subset \R^3$ (prodotto euclideo) e $v = (1, 2, 3)$. Calcola $p_W(v)$ e la distanza di $v$ da $W$.
::: soluzione
Uso la scorciatoia: $W^\perp = \Span(n)$ con $n = (1, -1, 2)$, $\langle n, n\rangle = 6$.

1. $\langle v, n\rangle = 1 - 2 + 6 = 5$, quindi $p_{W^\perp}(v) = \frac56(1, -1, 2)$.
2. $p_W(v) = v - p_{W^\perp}(v) = \left(1 - \frac56,\ 2 + \frac56,\ 3 - \frac{10}6\right) = \left(\frac16, \frac{17}6, \frac43\right)$.
3. Controllo che stia in $W$: $\frac16 - \frac{17}6 + \frac83 = \frac{1 - 17 + 16}{6} = 0$. ✓
4. Distanza: $\|v - p_W(v)\| = \|p_{W^\perp}(v)\| = \frac56\sqrt6 = \frac{5}{\sqrt6} = \frac{5\sqrt6}{6}$.
:::

::: esercizio medio Gram–Schmidt con un prodotto non euclideo
Sia $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$ (definita positiva). Applica Gram–Schmidt alla base canonica $e_1, e_2, e_3$ rispetto a $g_S$ e trova una base ortonormale per $g_S$.
::: soluzione
Ricorda: $g_S(e_i, e_j) = S_{ij}$ e $g_S(e_i, y) = (Sy)_i$.

- $w_1 = e_1$, $g_S(w_1, w_1) = S_{11} = 1$.
- $g_S(e_2, w_1) = S_{21} = 1$, quindi $w_2 = e_2 - 1 \cdot e_1 = (-1, 1, 0)$. Calcolo $Sw_2 = (-1 + 1,\ -1 + 2,\ 0 + 1) = (0, 1, 1)$, quindi $g_S(w_2, w_2) = {}^tw_2\,(Sw_2) = 0 + 1 + 0 = 1$. Controllo: $g_S(w_1, w_2) = (Sw_2)_1 = 0$. ✓
- $g_S(e_3, w_1) = S_{31} = 0$ e $g_S(e_3, w_2) = (Sw_2)_3 = 1$, quindi $w_3 = e_3 - 0 \cdot w_1 - \frac11 w_2 = (0, 0, 1) - (-1, 1, 0) = (1, -1, 1)$.
- $Sw_3 = (1 - 1,\ 1 - 2 + 1,\ -1 + 3) = (0, 0, 2)$: controlli $g_S(w_1, w_3) = 0$, $g_S(w_2, w_3) = {}^tw_2\,(Sw_3) = 0$ ✓, e $g_S(w_3, w_3) = {}^tw_3\,(0, 0, 2) = 2$.

Base ortonormale per $g_S$: $\left\{(1, 0, 0),\ (-1, 1, 0),\ \frac{1}{\sqrt2}(1, -1, 1)\right\}$. Nota: per il prodotto **euclideo** questi vettori non sono nemmeno ortogonali ($\langle e_1, w_2\rangle = -1$).
:::

::: esercizio difficile Una retta per quattro punti
Trova la retta $y = a + bt$ dei minimi quadrati per i punti $(0, 0)$, $(1, 1)$, $(2, 1)$, $(3, 3)$, e calcola gli errori.
::: soluzione
$A$ ha righe $(1, t_i)$ e i dati sono $b = (0, 1, 1, 3)$:
$$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix}.$$
Le entrate di ${}^tA\,A$ e di ${}^tA\,b$ sono prodotti scalari tra le colonne $A^1 = (1, 1, 1, 1)$, $A^2 = (0, 1, 2, 3)$ e il vettore $b$:
$${}^tA\,A = \begin{pmatrix} 4 & 0 + 1 + 2 + 3 \\ 0 + 1 + 2 + 3 & 0 + 1 + 4 + 9 \end{pmatrix} = \begin{pmatrix} 4 & 6 \\ 6 & 14 \end{pmatrix},$$
$${}^tA\,b = \begin{pmatrix} 0 + 1 + 1 + 3 \\ 0 + 1 + 2 + 9 \end{pmatrix} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}.$$
Sistema: $4a + 6b = 5$ e $6a + 14b = 12$. Moltiplico la prima per 3 e la seconda per 2: $12a + 18b = 15$ e $12a + 28b = 24$; sottraendo, $10b = 9$, cioè $b = \frac9{10}$; poi $4a = 5 - \frac{54}{10} = -\frac4{10}$, cioè $a = -\frac1{10}$.

Retta: $y = -\frac1{10} + \frac9{10}t$. Valori sulla retta: $-\frac1{10}, \frac8{10}, \frac{17}{10}, \frac{26}{10}$. Errori $b - Ax_0 = \left(\frac1{10}, \frac2{10}, -\frac7{10}, \frac4{10}\right)$. Controllo: somma $\frac{1 + 2 - 7 + 4}{10} = 0$ (ortogonale alla prima colonna) e $\frac{0 + 2 - 14 + 12}{10} = 0$ (ortogonale alla seconda). ✓
:::

::: esercizio difficile Ortogonalità e dimensioni
(a) Dimostra che vettori non nulli a due a due ortogonali sono linearmente indipendenti. (b) Deduci che se $w \ne 0$ in $V$ di dimensione $n$, allora $\dim \Span(w)^\perp = n - 1$, senza usare il Teorema 21.8. Suggerimento: guarda l'applicazione lineare $f(v) = \langle v, w\rangle$.
::: soluzione
(a) Da $\lambda_1v_1 + \dots + \lambda_kv_k = 0$, facendo il prodotto scalare con $v_i$ restano solo $\lambda_i\langle v_i, v_i\rangle = 0$ (gli altri termini sono nulli per l'ortogonalità). Siccome $v_i \ne 0$, $\langle v_i, v_i\rangle > 0$, quindi $\lambda_i = 0$ per ogni $i$.

(b) $f : V \to \R$, $f(v) = \langle v, w\rangle$, è lineare (linearità del prodotto nel primo posto) e il suo nucleo è esattamente $\Span(w)^\perp$ (basta l'ortogonalità al generatore). L'immagine non è $\{0\}$ perché $f(w) = \|w\|^2 > 0$, quindi è tutto $\R$ e ha dimensione 1. Per il teorema della dimensione (Teorema 14.12): $\dim \Ker f = n - 1$.
:::

::: esercizio difficile Un complemento tra i polinomi
Su $\R_2[x]$ sia $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. Trova $\R_1[x]^\perp$ e verifica il risultato con i valori.
::: soluzione
La matrice nella base $\{1, x, x^2\}$ è $\begin{pmatrix} 3 & 0 & 2 \\ 0 & 2 & 0 \\ 2 & 0 & 2 \end{pmatrix}$ (lezione L19, esercizio 6). Per $p = a + bx + cx^2$, ortogonale a $1$ e a $x$:
$$\langle p, 1\rangle = 3a + 2c = 0, \qquad \langle p, x\rangle = 2b = 0.$$
Quindi $b = 0$ e $a = -\frac{2c}3$; con $c = 3$: $p = 3x^2 - 2$. $\R_1[x]^\perp = \Span(3x^2 - 2)$, di dimensione $3 - 2 = 1$.

Verifica: $3x^2 - 2$ vale $1, -2, 1$ in $-1, 0, 1$. Allora $\langle p, 1\rangle = 1 - 2 + 1 = 0$ e $\langle p, x\rangle = -1 + 0 + 1 = 0$. ✓
:::

::: esercizio esame Base ortonormale di un piano, proiezione e distanza
Siano $v_1 = (1, 0, 1)$ e $v_2 = (2, 1, 0)$ in $\R^3$ con il prodotto euclideo, e $V = \Span(v_1, v_2)$. (1) Calcola una base ortonormale di $V$. (2) Calcola la proiezione ortogonale di $w = (2, 3, 2)$ su $V$. (3) Calcola la distanza di $w$ da $V$ e un'equazione cartesiana di $V$.
::: soluzione
(1) $w_1 = v_1$, $\langle w_1, w_1\rangle = 2$; $\langle v_2, w_1\rangle = 2$, quindi $w_2 = (2, 1, 0) - (1, 0, 1) = (1, 1, -1)$, con $\langle w_2, w_2\rangle = 3$. Controllo: $\langle w_1, w_2\rangle = 1 + 0 - 1 = 0$. Base ortonormale: $\left\{\frac{1}{\sqrt2}(1, 0, 1),\ \frac{1}{\sqrt3}(1, 1, -1)\right\}$.

(2) $\langle w, w_1\rangle = 2 + 0 + 2 = 4$ e $\langle w, w_2\rangle = 2 + 3 - 2 = 3$:
$$\begin{aligned} p_V(w) &= \frac42(1, 0, 1) + \frac33(1, 1, -1) \\ &= (2, 0, 2) + (1, 1, -1) = (3, 1, 1). \end{aligned}$$

(3) $w - p_V(w) = (-1, 2, 1)$. Controllo: ortogonale a $v_1$ ($-1 + 0 + 1 = 0$) e a $v_2$ ($-2 + 2 + 0 = 0$). ✓ La distanza è $\|(-1, 2, 1)\| = \sqrt6$. Siccome $(-1, 2, 1)$ genera $V^\perp$, un'equazione di $V$ è $-x + 2y + z = 0$ (controllo: $v_1$ dà $-1 + 0 + 1 = 0$, $v_2$ dà $-2 + 2 + 0 = 0$).
:::

::: esercizio esame Ortonormalizzazione, complemento e proiezione con $g_S$
Su $\R^3$ sia $g_S$ con $S = \begin{pmatrix} 2 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$ (definita positiva), e siano $u = (1, 1, 0)$, $v = (0, 1, 1)$, $W = \Span(u, v)$. (1) Trova una base ortonormale di $W$ rispetto a $g_S$. (2) Trova una base del complemento ortogonale di $W$ rispetto a $g_S$. (3) Calcola la proiezione $g_S$-ortogonale di $e_1$ su $W$.
::: soluzione
Prima i vettori $Su = (2, 1, 1)$ e $Sv = (1, 1, 1)$. Allora $g_S(u, u) = {}^tu\,(Su) = 3$, $g_S(u, v) = {}^tu\,(Sv) = 2$, $g_S(v, v) = {}^tv\,(Sv) = 2$.

(1) $w_1 = u$; $w_2 = v - \frac23 u = \left(-\frac23, \frac13, 1\right)$, riscalato $w_2' = (-2, 1, 3)$. Poi $Sw_2' = (-4 + 3,\ 1,\ -2 + 3) = (-1, 1, 1)$: controllo $g_S(u, w_2') = {}^tu\,(Sw_2') = -1 + 1 + 0 = 0$ ✓, e $g_S(w_2', w_2') = 2 + 1 + 3 = 6$. Base ortonormale: $\left\{\frac{1}{\sqrt3}(1, 1, 0),\ \frac{1}{\sqrt6}(-2, 1, 3)\right\}$.

(2) $x \in W^\perp$ se $g_S(u, x) = {}^t(Su)\,x = 0$ e $g_S(v, x) = {}^t(Sv)\,x = 0$:
$$2x_1 + x_2 + x_3 = 0, \qquad x_1 + x_2 + x_3 = 0.$$
Sottraendo, $x_1 = 0$, poi $x_3 = -x_2$: $W^\perp = \Span((0, 1, -1))$, di dimensione $3 - 2 = 1$. ✓

(3) $g_S(e_1, u) = (Su)_1 = 2$ e $g_S(e_1, w_2') = (Sw_2')_1 = -1$, quindi
$$\begin{aligned} p_W(e_1) &= \frac23(1, 1, 0) - \frac16(-2, 1, 3) \\ &= \left(\frac23 + \frac13,\ \frac23 - \frac16,\ -\frac12\right) = \left(1, \frac12, -\frac12\right). \end{aligned}$$
Controllo: $e_1 - p_W(e_1) = \left(0, -\frac12, \frac12\right) = -\frac12(0, 1, -1)$ sta in $W^\perp$. ✓
:::

## Domande di ripasso

::: domanda Quando due vettori sono ortogonali? Il vettore nullo è ortogonale a qualcosa?
Quando $\langle v, w\rangle = 0$; se sono non nulli vuol dire che formano un angolo retto. Il vettore nullo è ortogonale a tutti, perché $\langle 0, w\rangle = 0$.
:::

::: domanda Quali vettori di $\R^2$ sono ortogonali a $(a, b) \ne 0$?
Quelli con $ax + by = 0$: la retta $\Span((-b, a))$. Si scambiano le coordinate e si cambia un segno.
:::

::: domanda Che cos'è $W^\perp$ e perché è un sottospazio?
L'insieme dei vettori ortogonali a tutti i vettori di $W$. Contiene lo zero, ed è chiuso rispetto a somma e prodotto per scalare perché il prodotto scalare è lineare nel primo posto.
:::

::: domanda Come si calcola $W^\perp$ in pratica?
Si impone l'ortogonalità ai soli generatori di $W$: si ottiene un sistema lineare omogeneo, con una equazione per generatore. Con un $g_S$ la riga dei coefficienti per il generatore $w_i$ è ${}^t(Sw_i)$.
:::

::: domanda Qual è la formula della proiezione di $v$ sulla retta di $w$? Da dove viene?
$p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}w$. Si cerca $kw$ con $v - kw$ ortogonale a $w$: $\langle v, w\rangle - k\langle w, w\rangle = 0$.
:::

::: domanda Che cos'è il coefficiente di Fourier e a che cosa serve?
È il numero $\frac{\langle v, w\rangle}{\langle w, w\rangle}$. In una base ortogonale $\{v_i\}$ i coefficienti di Fourier di $v$ rispetto ai $v_i$ sono proprio le coordinate di $v$, senza risolvere sistemi.
:::

::: domanda Come funziona l'algoritmo di Gram–Schmidt?
$w_1 = v_1$; poi ogni $w_i$ è $v_i$ meno le sue proiezioni sui $w_1, \dots, w_{i-1}$ già costruiti. I $w_i$ sono ortogonali e generano gli stessi spazi dei $v_i$; dividendo per le norme si ottiene una base ortonormale.
:::

::: domanda Perché nel calcolo di $w_3$ si proietta su $w_2$ e non su $v_2$?
Perché la formula «somma delle proiezioni» funziona solo su vettori già ortogonali tra loro. Proiettando su $v_2$, che non è ortogonale a $w_1$, il risultato in generale non è ortogonale a $w_2$.
:::

::: domanda Che cosa dice il teorema di decomposizione ortogonale?
Se $V$ ha dimensione finita e il prodotto è definito positivo, $V = W \oplus W^\perp$: ogni $v$ si scrive in un solo modo come $w + z$ con $w \in W$ e $z \in W^\perp$, e $\dim W + \dim W^\perp = \dim V$.
:::

::: domanda Come si calcola la proiezione su un piano di $\R^3$? Ci sono scorciatoie?
Con una base ortogonale $w_1, w_2$ del piano: $p_W(v) = \sum \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}w_i$. Scorciatoia: se $n$ genera $W^\perp$, $p_W(v) = v - \frac{\langle v, n\rangle}{\langle n, n\rangle}n$.
:::

::: domanda Perché la proiezione è il punto di $W$ più vicino a $v$?
Per ogni $w \in W$, $v - w = (v - p_W(v)) + (p_W(v) - w)$ con i due pezzi ortogonali; per Pitagora $\|v - w\|^2 = \|v - p_W(v)\|^2 + \|p_W(v) - w\|^2 \ge \|v - p_W(v)\|^2$.
:::

::: domanda Che cosa sono le equazioni normali e perché funzionano?
${}^tAAx_0 = {}^tAb$. $x_0$ minimizza $\|Ax - b\|$ quando $Ax_0$ è la proiezione di $b$ su $\Imm L_A$, cioè quando $b - Ax_0$ è ortogonale alle colonne di $A$, cioè ${}^tA(b - Ax_0) = 0$.
:::

::: domanda Quando la soluzione ai minimi quadrati è unica?
Quando le colonne di $A$ sono linearmente indipendenti: allora ${}^tAA$ è invertibile e $x_0 = ({}^tAA)^{-1}\,{}^tA\,b$.
:::

## Glossario

```glossario
Vettori ortogonali | $v$ e $w$ con $\langle v, w\rangle = 0$; se non nulli, formano un angolo retto.
Complemento ortogonale $W^\perp$ | $\{v \in V \mid \langle v, w\rangle = 0 \ \forall w \in W\}$; è sempre un sottospazio.
Proiezione ortogonale su una retta | $p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}w$: il vettore della retta $\Span(w)$ con $v - p_w(v)$ ortogonale a $w$.
Coefficiente di Fourier | Il numero $\frac{\langle v, w\rangle}{\langle w, w\rangle}$.
Base ortogonale | Base i cui vettori sono a due a due ortogonali.
Base ortonormale | Base ortogonale di vettori di norma 1; le coordinate di $v$ sono $\langle v, v_i\rangle$.
Normalizzare | Dividere un vettore non nullo per la sua norma.
Algoritmo di Gram–Schmidt | Trasforma vettori indipendenti $v_1, \dots, v_k$ in vettori ortogonali $w_1, \dots, w_k$ con gli stessi span: $w_i = v_i - \sum_{j < i} p_{w_j}(v_i)$.
Riscalare | Sostituire un vettore con un suo multiplo non nullo; non cambia le proiezioni e aiuta a evitare frazioni.
Somma diretta $\oplus$ | $V = U \oplus W$: ogni vettore si scrive in un solo modo come somma di un vettore di $U$ e uno di $W$.
Decomposizione ortogonale | $V = W \oplus W^\perp$ (Teorema 21.8), con $\dim W + \dim W^\perp = \dim V$.
Proiezione ortogonale su un sottospazio | $p_W(v)$, la parte in $W$ della decomposizione $v = w + z$; con base ortonormale $p_W(v) = \sum \langle v, w_i\rangle w_i$.
Teorema di Pitagora | Se $\langle a, b\rangle = 0$, allora $\lVert a + b \rVert^2 = \lVert a \rVert^2 + \lVert b \rVert^2$.
Distanza di un vettore da un sottospazio | $\lVert v - p_W(v) \rVert$, la minima distanza tra $v$ e i vettori di $W$.
Soluzione ai minimi quadrati | $x_0$ che rende minimo $\lVert Ax - b \rVert$ (Definizione 21.10).
Equazioni normali | ${}^tAAx_0 = {}^tAb$; le loro soluzioni sono le soluzioni ai minimi quadrati.
Regressione lineare | Scelta dei parametri di un modello lineare minimizzando la somma dei quadrati degli errori.
Residuo (errore) | Il vettore $b - Ax$; nella soluzione ai minimi quadrati è ortogonale alle colonne di $A$.
```

## Checklist

```checklist
- So decidere se due vettori sono ortogonali, anche con un prodotto $g_S$ diverso da quello euclideo.
- So calcolare $W^\perp$ risolvendo il sistema dato dai generatori di $W$, e controllarne la dimensione.
- So dimostrare che $W^\perp$ è un sottospazio.
- So calcolare la proiezione ortogonale di un vettore su una retta e ricavare la formula.
- So calcolare le coordinate di un vettore in una base ortogonale con i coefficienti di Fourier.
- So applicare Gram–Schmidt a due o tre vettori, controllando l'ortogonalità a ogni passo e riscalando.
- So trasformare una base ortogonale in una ortonormale.
- So enunciare e spiegare il teorema di decomposizione ortogonale e la formula delle dimensioni.
- So proiettare un vettore su un piano di $\R^3$, anche con la scorciatoia della normale, e calcolarne la distanza dal piano.
- So spiegare perché la proiezione è il punto più vicino (Pitagora).
- So scrivere e risolvere le equazioni normali, e trovare la retta dei minimi quadrati per alcuni punti.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 21 «Prodotti scalari III», pp. 105–110: sezioni 21.A (vettori ortogonali e complemento), 21.B (proiezione ortogonale), 21.C (Gram–Schmidt), 21.D (decomposizione ortogonale), 21.E (minimi quadrati, con il riquadro sulla regressione lineare) e 21.F (Esercizio 21.13, risolto qui come primo esercizio). Numerazione delle dispense: Esempi 21.1, 21.2, 21.7, 21.12; Definizioni 21.3, 21.10; Proposizioni 21.4, 21.5, 21.6, 21.9; Teoremi 21.8, 21.11. Richiami: Definizione 18.4 (somma diretta), Teorema 14.12 (teorema della dimensione), lezioni L19 e L20.
- **B. Martelli, *Geometria e algebra lineare***: §7.1.7, §7.3 (sottospazio ortogonale, Proposizioni 7.3.3 e 7.3.7, Teorema 7.3.12), §8.1.5–8.1.10 (proiezioni, coefficienti di Fourier, Gram–Schmidt, riscalamento, Proposizioni 8.1.25 e 8.1.28, Esempio 8.1.19). Il libro è gratuito: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). L'esercizio 5 riprende l'Esercizio 8.2 del libro.
- **Appelli d'esame** (Moodle 2025/26): problemi 12 del 24/01/2024, 10/06/2024, 16/01/2025, 07/02/2025, 15/01/2026, 05/02/2026, 03/06/2026, 03/07/2026, 07/09/2026; domanda 2 del 05/02/2026. Le tre domande riportate sono risolte in questi appunti.
- Le parti **«Oltre le dispense»** (indipendenza dei vettori ortogonali, generatori e complemento, lunghezza della proiezione, riscalamento, collocazione nel libro) e gli esercizi dopo il primo sono aggiunte di questi appunti, per collegare la lezione al resto del corso e all'esame.
