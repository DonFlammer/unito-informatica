---
corso: MDAG
modulo: AG
lezione: L19
titolo: Prodotti scalari I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L19
descrizione: >-
  Appunti della lezione L19 di Algebra lineare e Geometria (MDAG, parte 2): che cos'è un prodotto scalare, prodotti
  degeneri e definiti positivi, il prodotto scalare euclideo, le matrici simmetriche e la matrice associata a un
  prodotto scalare in una base, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Finora con i vettori sapevi sommare e moltiplicare per un numero. Da questa lezione impari a «moltiplicare» due
  vettori ottenendo un numero: il prodotto scalare, da cui nasceranno lunghezze, angoli e perpendicolarità. Vedrai il
  prodotto scalare euclideo $\langle x, y\rangle = x_1y_1 + \dots + x_ny_n$, i prodotti che vengono da una matrice
  simmetrica, $g_S(x, y) = {}^tx\,S\,y$, e come ogni prodotto scalare diventa una matrice appena fissi una base.
materiale: dispense
scheda:
  Dispense: lezione 19 · pp. 96–99
  Libro: Martelli, §7.1 e §7.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 19 «Prodotti scalari I»; B. Martelli, Geometria e algebra
  lineare, §7.1 e §7.2
file_en: L19_scalar_products_1.html
appunti_html: appunti/MDAG/L19_prodotti_scalari_1.html
genera_html: true
---

## In breve

- Nelle lezioni sui prodotti scalari il campo è sempre $\K = \R$: servono l'**ordine** (sapere se un numero è positivo) e le **radici quadrate** dei numeri positivi.
- Un **prodotto scalare** prende due vettori $v, w$ e restituisce un **numero reale** $\langle v, w\rangle$. Deve essere **bilineare** (lineare nel primo posto e nel secondo) e **simmetrico** ($\langle v, w\rangle = \langle w, v\rangle$). Di conseguenza $\langle v, 0\rangle = 0$ per ogni $v$.
- Un prodotto scalare è **definito positivo** se $\langle v, v\rangle > 0$ per ogni $v \neq 0$; è **degenere** se esiste un $v \neq 0$ con $\langle v, w\rangle = 0$ per **ogni** $w$. Definito positivo implica non degenere, ma non vale il contrario.
- Il modello di tutto è il **prodotto scalare euclideo** di $\R^n$: $\langle x, y\rangle = {}^tx\,y = x_1y_1 + \dots + x_ny_n$. Per esempio $\langle (1, 3), (-2, 1)\rangle = -2 + 3 = 1$. È definito positivo.
- Ogni **matrice simmetrica** $S$ dà un prodotto scalare su $\R^n$: $g_S(x, y) = {}^tx\,S\,y = \sum_{i,j} x_iS_{ij}y_j$. L'entrata $S_{ij}$ è il coefficiente di $x_iy_j$, e $g_S(e_i, e_j) = S_{ij}$.
- Fissata una base $\mathcal B = \{v_1, \dots, v_n\}$, ogni prodotto scalare $g$ ha una **matrice associata** $[g]_{\mathcal B}$, simmetrica, con entrate $g(v_i, v_j)$.
- Con la matrice associata si calcola tutto in coordinate: $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$.
- All'esame la domanda tipica è: «dato il prodotto scalare $g$ e la base $\mathcal B$, quanto vale $[g]_{\mathcal B}$?», anche su spazi di polinomi. Si risolve entrata per entrata.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Perché serve un prodotto tra vettori (p. 96)

Con quello che sai dalle lezioni L05–L18 puoi sommare vettori e moltiplicarli per un numero. Però non sai ancora dire **quanto è lungo** un vettore, né se due vettori sono **perpendicolari**, né che **angolo** formano. Sono le domande della geometria, e per rispondere serve un'operazione nuova.

A scuola (o in fisica) hai forse visto il «prodotto scalare» di due vettori del piano: si moltiplicano le coordinate corrispondenti e si sommano i risultati. Con $u = (1, 3)$ e $v = (-2, 1)$:

$$u \cdot v = 1 \cdot (-2) + 3 \cdot 1 = -2 + 3 = 1.$$

Entrano **due vettori**, esce **un numero**. Ora fissa $u = (2, 1)$ e guarda che cosa succede cambiando il secondo vettore:

| $v$ | $\langle u, v\rangle$ | Che cosa si vede nel disegno |
|---|--:|---|
| $a = (1, 2)$ | $2 \cdot 1 + 1 \cdot 2 = 4$ | $a$ forma con $u$ un angolo **acuto** |
| $b = (-1, 2)$ | $2 \cdot (-1) + 1 \cdot 2 = 0$ | $b$ è **perpendicolare** a $u$ |
| $c = (-2, 1)$ | $2 \cdot (-2) + 1 \cdot 1 = -3$ | $c$ forma con $u$ un angolo **ottuso** |

```grafico
titolo: Con $u = (2, 1)$: $\langle u, a\rangle = 4 > 0$, $\langle u, b\rangle = 0$, $\langle u, c\rangle = -3 < 0$
x: -3 3
y: -1 3
vettore: 2 1 | accento | spesso | $u$ | se
vettore: 1 2 | verde | $a$ | ne
vettore: -1 2 | blu | $b$ | n
vettore: -2 1 | rosa | $c$ | no
```

Il segno di questo numero «sa» già qualcosa dell'angolo tra i due vettori: positivo, zero, negativo per acuto, retto, ottuso. Nella lezione L20 lo renderai preciso con la formula dell'angolo; qui costruisci la base: che cosa deve rispettare un'operazione per meritare il nome di prodotto scalare.

> [!NOTA] Perché nei prodotti scalari il campo è $\R$
> Le dispense avvertono che in questo capitolo, a differenza dei precedenti, il campo è sempre $\K = \R$, per due motivi:
>
> - serve l'**ordine**: dire che un numero è positivo ($\langle v, v\rangle > 0$). In $\C$ non c'è un ordine (lezione L02);
> - serve la **radice quadrata** di un numero positivo, per definire la lunghezza $\sqrt{\langle v, v\rangle}$ nella lezione L20. In $\Q$ manca, per esempio, $\sqrt 2$ (lezione L01).
>
> Quindi tutti gli spazi vettoriali di queste lezioni sono **reali**. (Nella lezione L25 vedrai la versione complessa, il prodotto hermitiano.)

## La definizione di prodotto scalare (p. 96)

> [!DEF] 19.1 · Prodotto scalare
> Sia $V$ uno spazio vettoriale reale. Un **prodotto scalare** su $V$ è un'applicazione
> $$V \times V \longrightarrow \R, \qquad (v, w) \longmapsto \langle v, w\rangle$$
> che soddisfa i seguenti assiomi:
> 1. $\langle v + v', w\rangle = \langle v, w\rangle + \langle v', w\rangle$,
> 2. $\langle \lambda v, w\rangle = \lambda\langle v, w\rangle$,
> 3. $\langle v, w\rangle = \langle w, v\rangle$,
>
> per ogni $v, v', w, w' \in V$ e ogni $\lambda \in \R$.

Pezzo per pezzo:

- $V \times V$ è l'insieme delle **coppie ordinate** $(v, w)$ di vettori di $V$: il prodotto scalare riceve **due** vettori.
- La freccia verso $\R$ dice che il risultato è **un numero reale**, non un vettore. Il simbolo $\langle v, w\rangle$ (parentesi angolari) si legge «prodotto scalare di $v$ e $w$».
- L'assioma (1) dice che si può **spezzare una somma** nel primo posto: sommare e poi moltiplicare dà lo stesso risultato che moltiplicare e poi sommare.
- L'assioma (2) dice che **un numero nel primo posto esce fuori**: $\langle 3v, w\rangle = 3\langle v, w\rangle$.
- L'assioma (3), la **simmetria**, dice che l'ordine dei due vettori non conta.
- «Per ogni $v, v', w, w'$ e ogni $\lambda$»: le regole devono valere **sempre**, per tutti i vettori e tutti i numeri reali, non solo in qualche caso fortunato.

> [!TRAPPOLA] Prodotto scalare e prodotto per scalare
> Sono due cose diverse. Il **prodotto per uno scalare** (lezione L05) prende un numero e un vettore e restituisce un **vettore**: $3 \cdot (1, 2) = (3, 6)$. Il **prodotto scalare** prende due vettori e restituisce un **numero**: $\langle (1, 2), (3, 6)\rangle = 3 + 12 = 15$.

### Le conseguenze degli assiomi

Le dispense osservano che dai tre assiomi seguono anche le regole «a destra»:

4. $\langle v, w + w'\rangle = \langle v, w\rangle + \langle v, w'\rangle$,
5. $\langle v, \lambda w\rangle = \lambda\langle v, w\rangle$.

Ecco perché, un passaggio alla volta (sopra l'uguale c'è l'assioma usato):

$$\begin{aligned} \langle v, w + w'\rangle &\overset{(3)}{=} \langle w + w', v\rangle \overset{(1)}{=} \langle w, v\rangle + \langle w', v\rangle \\ &\overset{(3)}{=} \langle v, w\rangle + \langle v, w'\rangle, \end{aligned}$$

$$\langle v, \lambda w\rangle \overset{(3)}{=} \langle \lambda w, v\rangle \overset{(2)}{=} \lambda\langle w, v\rangle \overset{(3)}{=} \lambda\langle v, w\rangle.$$

La simmetria permette di «girare» i vettori, usare la regola sul primo posto e poi girarli di nuovo.

Due parole da ricordare:

- gli assiomi (1), (2), (4), (5) dicono che il prodotto è **bilineare**: fissato il secondo vettore, è lineare nel primo; fissato il primo, è lineare nel secondo;
- l'assioma (3) dice che è **simmetrico**.

**Il prodotto con il vettore nullo è zero.** Per ogni $v \in V$ vale $\langle v, 0\rangle = 0$. Infatti, siccome $0 = 0 + 0$, per l'assioma (4)

$$\langle v, 0\rangle = \langle v, 0 + 0\rangle = \langle v, 0\rangle + \langle v, 0\rangle.$$

Chiama $a = \langle v, 0\rangle$: hai scoperto che $a = a + a$. Togliendo $a$ da entrambi i membri resta $0 = a$. Per la simmetria vale anche $\langle 0, v\rangle = 0$.

**Un nome per il prodotto.** Quando si vuole dare un nome al prodotto scalare, lo si indica con una lettera, $g : V \times V \to \R$, e si scrive $g(v, w)$ invece di $\langle v, w\rangle$. Serve quando nello stesso discorso compaiono **più** prodotti scalari diversi.

> [!OLTRE] Un conto che userai spesso
> Con la bilinearità e la simmetria si sviluppa il «quadrato di una somma» come con i numeri:
> $$\begin{aligned} \langle v + w, v + w\rangle &= \langle v, v + w\rangle + \langle w, v + w\rangle \\ &= \langle v, v\rangle + \langle v, w\rangle + \langle w, v\rangle + \langle w, w\rangle \\ &= \langle v, v\rangle + 2\langle v, w\rangle + \langle w, w\rangle. \end{aligned}$$
> Il primo passaggio usa l'assioma (1), il secondo l'assioma (4) due volte, l'ultimo la simmetria. È la versione vettoriale di $(a + b)^2 = a^2 + 2ab + b^2$, e nella lezione L20 serve per dimostrare la disuguaglianza triangolare.

### Formule che sono (e che non sono) prodotti scalari

Per decidere se una formula è un prodotto scalare si controllano bilinearità e simmetria. Per dire di **no** basta un solo esempio numerico in cui una regola fallisce.

> [!ESEMPIO] Una formula che funziona: $g(x, y) = 2x_1y_1 + 3x_2y_2$ su $\R^2$
> Qui $x = (x_1, x_2)$ e $y = (y_1, y_2)$.
>
> - **Assioma (1).** Con $x' = (x_1', x_2')$: $g(x + x', y) = 2(x_1 + x_1')y_1 + 3(x_2 + x_2')y_2 = (2x_1y_1 + 3x_2y_2) + (2x_1'y_1 + 3x_2'y_2) = g(x, y) + g(x', y)$.
> - **Assioma (2).** $g(\lambda x, y) = 2\lambda x_1y_1 + 3\lambda x_2y_2 = \lambda(2x_1y_1 + 3x_2y_2) = \lambda g(x, y)$.
> - **Assioma (3).** $g(y, x) = 2y_1x_1 + 3y_2x_2 = g(x, y)$, perché il prodotto tra numeri è commutativo.
>
> Quindi $g$ è un prodotto scalare. Per esempio $g((1, 1), (1, -1)) = 2 \cdot 1 \cdot 1 + 3 \cdot 1 \cdot (-1) = -1$.

> [!ESEMPIO] Tre formule che non funzionano
> - $g(x, y) = x_1y_2$ **non è simmetrica**: $g(e_1, e_2) = 1 \cdot 1 = 1$, ma $g(e_2, e_1) = 0 \cdot 0 = 0$. (Qui $e_1 = (1, 0)$ ed $e_2 = (0, 1)$ sono i vettori della base canonica.)
> - $g(x, y) = x_1y_1 + x_2y_2 + 1$ **non è bilineare**: $g(0, 0) = 1$, mentre un prodotto scalare dà sempre $\langle v, 0\rangle = 0$.
> - $g(x, y) = x_1^2y_1^2$ **non è lineare** nel primo posto: $g(2e_1, e_1) = 4$, mentre $2\,g(e_1, e_1) = 2$.

## Prodotti degeneri e definiti positivi (p. 96)

Non tutti i prodotti scalari si comportano bene. Prendi su $\R^2$ la formula $g(x, y) = x_1y_1$: è bilineare e simmetrica, quindi è un prodotto scalare. Però **ignora la seconda coordinata**: il vettore $e_2 = (0, 1)$ dà

$$g(e_2, w) = 0 \cdot w_1 = 0 \quad \text{per ogni } w \in \R^2.$$

Un vettore non nullo che dà zero con **tutti**: è un difetto grave, perché questo prodotto «non vede» $e_2$. Le dispense danno un nome a questo difetto e alla proprietà opposta.

> [!DEF] 19.2 · Degenere, definito positivo
> Un prodotto scalare su $V$ è:
> - **degenere** se esiste $v \neq 0$ tale che $\langle v, w\rangle = 0$ per ogni $w \in V$;
> - **definito positivo** se $\langle v, v\rangle > 0$ per ogni $v \in V$ non nullo.

Pezzo per pezzo:

- **Degenere** parla di $\langle v, w\rangle$ con $w$ **qualsiasi**: c'è un vettore non nullo che dà zero con tutti i vettori dello spazio, compreso sé stesso. Un prodotto che non è degenere si dice **non degenere**: per ogni $v \neq 0$ esiste almeno un $w$ con $\langle v, w\rangle \neq 0$.
- **Definito positivo** parla solo di $\langle v, v\rangle$, il prodotto di un vettore **con sé stesso**: deve essere strettamente positivo per ogni vettore non nullo. (Per $v = 0$ vale sempre $\langle 0, 0\rangle = 0$.)

> [!PROP] 19.3
> Un prodotto scalare definito positivo non è degenere.

La spiegazione delle dispense, con i passaggi:

1. Supponi per assurdo che il prodotto sia definito positivo **e** degenere.
2. Siccome è degenere, esiste $v \neq 0$ con $\langle v, w\rangle = 0$ per **ogni** $w$.
3. In particolare puoi scegliere $w = v$: ottieni $\langle v, v\rangle = 0$.
4. Ma $v \neq 0$ e il prodotto è definito positivo, quindi $\langle v, v\rangle > 0$. Contraddizione: il prodotto non può essere degenere. $\square$

> [!ESEMPIO] Tre prodotti scalari su $\R^2$ a confronto
> - $g(x, y) = x_1y_1 + x_2y_2$ è **definito positivo**: $g(x, x) = x_1^2 + x_2^2 > 0$ appena una coordinata non è zero.
> - $g(x, y) = x_1y_1$ è **degenere**: $e_2 \neq 0$ e $g(e_2, w) = 0$ per ogni $w$.
> - $g(x, y) = x_1y_1 - x_2y_2$ **non è degenere**, ma **non è definito positivo**. Non è definito positivo perché $g(e_2, e_2) = 0 - 1 = -1 < 0$. Non è degenere perché, dato $v = (a, b) \neq 0$, il vettore $w = (a, -b)$ dà
>   $$g(v, w) = a \cdot a - b \cdot (-b) = a^2 + b^2 > 0.$$

> [!TRAPPOLA] Il contrario della Proposizione 19.3 è falso
> «Non degenere» **non** implica «definito positivo»: l'ultimo esempio, $x_1y_1 - x_2y_2$, lo mostra. Attenzione anche a un secondo errore: in quel prodotto il vettore $v = (1, 1)$ ha $g(v, v) = 1 - 1 = 0$ pur essendo non nullo, eppure il prodotto **non** è degenere. Per essere degenere serve un vettore che dia zero con **tutti** i vettori, non solo con sé stesso ($g((1, 1), (1, 0)) = 1 \neq 0$). Il libro di Martelli chiama **isotropo** un vettore con $\langle v, v\rangle = 0$.

| Prodotto su $\R^2$ | Degenere? | Definito positivo? | Motivo in una riga |
|---|---|---|---|
| $x_1y_1 + x_2y_2$ | no | sì | $g(x, x) = x_1^2 + x_2^2$ |
| $2x_1y_1 + 3x_2y_2$ | no | sì | $g(x, x) = 2x_1^2 + 3x_2^2$ |
| $x_1y_1$ | sì | no | $e_2$ dà zero con tutti |
| $x_1y_1 - x_2y_2$ | no | no | $g(e_2, e_2) = -1$ |

## Tre prodotti scalari sui polinomi (p. 97)

Un prodotto scalare non vive solo su $\R^n$. Le dispense mostrano un esempio sullo spazio $\R_2[x]$ dei polinomi a coefficienti reali di grado $\le 2$, cioè dei polinomi $a + bx + cx^2$ (lezioni L05–L07: ha dimensione 3 e base canonica $\{1, x, x^2\}$). L'idea è **valutare** i polinomi in alcuni punti e moltiplicare i valori.

> [!ESEMPIO] 19.4 · Tre prodotti scalari su $\R_2[x]$
> Sullo spazio $\R_2[x]$ dei polinomi a coefficienti reali di grado $\le 2$ consideriamo il prodotto scalare
> $$\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2).$$
> Questo prodotto scalare è **definito positivo**: $\langle p, p\rangle = p(0)^2 + p(1)^2 + p(2)^2 > 0$ per ogni polinomio non nullo $p$ di grado $\le 2$, perché un tale polinomio non può annullarsi nei tre valori distinti $0, 1, 2$.
>
> Il prodotto scalare $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$ è invece **degenere**: per $p(x) = x(1 - x)$ si ha $\langle p, q\rangle = 0$ per ogni $q \in \R_2[x]$.
>
> Infine $\langle p, q\rangle = p(0)q(0) + p(1)q(1) - p(2)q(2)$ **non è degenere, ma non è definito positivo**: per $p(x) = x - 1$ si ha $\langle p, p\rangle = (-1)^2 - 1^2 = 0$.

Vediamo i tre prodotti uno per uno.

**Il primo prodotto: come si calcola.** Con $p = x$ e $q = x^2$: i valori di $p$ in $0, 1, 2$ sono $0, 1, 2$; quelli di $q$ sono $0, 1, 4$. Quindi

$$\langle x, x^2\rangle = 0 \cdot 0 + 1 \cdot 1 + 2 \cdot 4 = 9.$$

Con $p = q = 1 + x$ (valori $1, 2, 3$): $\langle 1 + x, 1 + x\rangle = 1 + 4 + 9 = 14$.

**Perché è un prodotto scalare.** È simmetrico, perché $p(t)q(t) = q(t)p(t)$. È bilineare perché valutare è lineare: $(p + p')(t) = p(t) + p'(t)$ e $(\lambda p)(t) = \lambda p(t)$. Per esempio, per l'assioma (1):

$$\begin{aligned} \langle p + p', q\rangle &= \sum_{t = 0, 1, 2} \big(p(t) + p'(t)\big)q(t) \\ &= \sum_{t = 0, 1, 2} p(t)q(t) + \sum_{t = 0, 1, 2} p'(t)q(t) \\ &= \langle p, q\rangle + \langle p', q\rangle. \end{aligned}$$

**Perché è definito positivo.** $\langle p, p\rangle$ è una somma di tre quadrati, quindi è $\ge 0$. Vale $0$ solo se $p(0) = p(1) = p(2) = 0$, cioè se $p$ ha **tre radici** distinte. Ma per il Teorema 4.6 (lezione L04) un polinomio non nullo di grado $n \ge 1$ ha al più $n$ radici, e un polinomio costante non nullo non ne ha nessuna: un polinomio non nullo di grado $\le 2$ ha al più due radici. Quindi $\langle p, p\rangle = 0$ solo per $p = 0$.

**Il secondo prodotto è degenere.** Con due soli punti il ragionamento si rompe: $p(x) = x(1 - x) = x - x^2$ è un polinomio non nullo di grado 2 che vale zero sia in 0 sia in 1. Allora per **ogni** $q$:

$$\langle p, q\rangle = p(0)q(0) + p(1)q(1) = 0 \cdot q(0) + 0 \cdot q(1) = 0.$$

**Il terzo prodotto non è definito positivo.** $p(x) = x - 1$ vale $-1$ in 0, $0$ in 1 e $1$ in 2, quindi

$$\langle p, p\rangle = (-1)^2 + 0^2 - 1^2 = 0$$

con $p \neq 0$. (Le dispense scrivono $(-1)^2 - 1^2$ perché il termine $p(1)^2 = 0$ sparisce.) Di più: $\langle 1, 1\rangle = 1 + 1 - 1 = 1 > 0$ e $\langle x, x\rangle = 0 + 1 - 4 = -3 < 0$, quindi i valori di $\langle p, p\rangle$ possono avere entrambi i segni.

> [!OLTRE] Perché il terzo prodotto non è degenere
> Le dispense lo affermano senza dimostrarlo. Ecco un modo. Considera i tre polinomi
> $$q_0 = \frac{(x - 1)(x - 2)}{2}, \quad q_1 = 2x - x^2, \quad q_2 = \frac{x(x - 1)}{2}.$$
> Controlla i valori: $q_0$ vale $1, 0, 0$ in $0, 1, 2$; $q_1$ vale $0, 1, 0$; $q_2$ vale $0, 0, 1$. Allora, per ogni $p$:
> $$\langle p, q_0\rangle = p(0), \quad \langle p, q_1\rangle = p(1), \quad \langle p, q_2\rangle = -p(2).$$
> Se $\langle p, q\rangle = 0$ per **ogni** $q$, in particolare per $q_0, q_1, q_2$, allora $p(0) = p(1) = p(2) = 0$ e, come sopra, $p = 0$. Quindi nessun polinomio non nullo dà zero con tutti: il prodotto non è degenere.

## Il prodotto scalare euclideo (p. 97)

Il prodotto «di scuola» della prima sezione ha un nome preciso.

> [!DEF] 19.5 · Prodotto scalare euclideo
> Il **prodotto scalare euclideo** su $\R^n$ è definito come
> $$\langle x, y\rangle = {}^tx\,y = \sum_{i=1}^n x_iy_i.$$

Pezzo per pezzo:

- $x$ e $y$ sono vettori **colonna** di $\R^n$, cioè matrici $n \times 1$.
- ${}^tx$ è la **trasposta** di $x$ (lezione L08): lo stesso vettore scritto in **riga**, una matrice $1 \times n$.
- ${}^tx\,y$ è un prodotto riga per colonna tra una matrice $1 \times n$ e una $n \times 1$: il risultato è una matrice $1 \times 1$, cioè **un numero**:
  $${}^tx\,y = (x_1, \dots, x_n)\begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} = x_1y_1 + x_2y_2 + \dots + x_ny_n.$$
- Il simbolo $\sum_{i=1}^n x_iy_i$ vuol dire «somma dei prodotti $x_iy_i$ per $i$ che va da 1 a $n$».

Esempi:

- in $\R^2$, come nelle dispense: $\left\langle \begin{pmatrix} 1 \\ 3 \end{pmatrix}, \begin{pmatrix} -2 \\ 1 \end{pmatrix}\right\rangle = 1 \cdot (-2) + 3 \cdot 1 = 1$;
- in $\R^3$: $\langle (1, 2, 3), (4, -5, 6)\rangle = 4 - 10 + 18 = 12$;
- in $\R^4$: $\langle (1, 0, -1, 2), (3, 5, 1, 1)\rangle = 3 + 0 - 1 + 2 = 4$.

> [!PROP] 19.6
> Il prodotto scalare euclideo è un prodotto scalare definito positivo su $\R^n$.

Le dispense non riportano la dimostrazione; eccola, dal libro di Martelli (Proposizione 7.1.5).

1. **Bilinearità.** Viene dalle proprietà del prodotto tra matrici. Per l'assioma (1): ${}^t(x + x')\,y = ({}^tx + {}^tx')\,y = {}^tx\,y + {}^tx'\,y$. Gli altri assiomi di linearità si controllano allo stesso modo.
2. **Simmetria.** $x_1y_1 + \dots + x_ny_n = y_1x_1 + \dots + y_nx_n$, perché il prodotto tra numeri reali è commutativo.
3. **Definito positivo.** $\langle x, x\rangle = x_1^2 + \dots + x_n^2$ è una somma di quadrati. Se $x \neq 0$, almeno una coordinata $x_i$ non è zero, e allora $x_i^2 > 0$ rende positiva tutta la somma. $\square$

Prova tu con lo strumento: trascina $u$ e $v$ e guarda il numero $u \cdot v$. Cerca una posizione in cui vale zero (i vettori sono perpendicolari) e una in cui è negativo (angolo ottuso). Lo strumento mostra già anche l'angolo e la proiezione, che vedrai nelle lezioni L20 e L21.

```widget vettori
titolo: Il prodotto scalare euclideo nel piano
u: 1 3
v: -2 1
modo: scalare
modi: scalare
raggio: 5
```

> [!OLTRE] Il prodotto scalare della fisica
> In fisica il prodotto scalare di due vettori del piano o dello spazio si definisce con lunghezze e angoli: $\langle v, w\rangle = \|v\|\,\|w\|\cos\vartheta$. Il corso fa la strada opposta: prima il prodotto scalare, poi (lezione L20) lunghezza $\|v\| = \sqrt{\langle v, v\rangle}$ e angolo. Il vantaggio è che la stessa costruzione funziona per spazi molto diversi, come quello dei polinomi.

## Matrici simmetriche e prodotti scalari su $\R^n$ (pp. 97–98)

Nella lezione L14 hai visto che una matrice quadrata $A$ determina un endomorfismo $L_A(x) = Ax$ di $\R^n$. Allo stesso modo, una matrice **simmetrica** determina un prodotto scalare su $\R^n$. Due richiami dalla lezione L08:

- una matrice $S$ è **simmetrica** se è uguale alla sua trasposta, ${}^tS = S$, cioè $S_{ij} = S_{ji}$ per ogni $i, j$: la parte sopra la diagonale è lo specchio di quella sotto;
- la **trasposta di un prodotto** è il prodotto delle trasposte in ordine inverso: ${}^t(AB) = {}^tB\,{}^tA$.

> [!PROP] 19.7
> Una matrice simmetrica $S$ definisce un prodotto scalare $g_S$ su $\R^n$ ponendo
> $$g_S(x, y) = {}^tx\,S\,y.$$

La dimostrazione, con tutti i passaggi:

1. **È un numero.** ${}^tx$ è $1 \times n$, $S$ è $n \times n$, $y$ è $n \times 1$: il prodotto si può fare e dà una matrice $1 \times 1$, un numero.
2. **Bilinearità.** Viene dalle proprietà del prodotto tra matrici (distributiva, e gli scalari escono fuori). Per esempio ${}^t(x + x')\,S\,y = {}^tx\,S\,y + {}^tx'\,S\,y$.
3. **Simmetria.** Questa è la catena delle dispense:
   $$\begin{aligned} g_S(x, y) = {}^tx\,S\,y &= {}^t\big({}^tx\,S\,y\big) \\ &= {}^ty\,{}^tS\,x = {}^ty\,S\,x = g_S(y, x). \end{aligned}$$
   - il secondo uguale vale perché ${}^tx\,S\,y$ è una matrice $1 \times 1$, e una matrice $1 \times 1$ è uguale alla sua trasposta;
   - il terzo usa ${}^t(ABC) = {}^tC\,{}^tB\,{}^tA$ (la regola ${}^t(AB) = {}^tB\,{}^tA$ applicata due volte) e ${}^t({}^tx) = x$;
   - il quarto usa **proprio** l'ipotesi ${}^tS = S$. Senza simmetria di $S$ la catena si ferma lì. $\square$

Per fare i conti conviene sviluppare il prodotto tra matrici.

> [!PROP] 19.8
> Vale
> $$g_S(x, y) = {}^tx\,S\,y = \sum_{i,j=1}^n x_iS_{ij}y_j.$$

Infatti la coordinata $i$ del vettore $Sy$ è $(Sy)_i = \sum_{j} S_{ij}y_j$ (riga $i$ di $S$ per la colonna $y$), e poi ${}^tx\,(Sy) = \sum_i x_i(Sy)_i = \sum_{i,j} x_iS_{ij}y_j$.

La somma doppia $\sum_{i,j=1}^n$ ha un termine per **ogni coppia** $(i, j)$: $n^2$ termini. Per $n = 2$ e $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$:

$$g_S(x, y) = a\,x_1y_1 + b\,x_1y_2 + b\,x_2y_1 + c\,x_2y_2.$$

La regola da ricordare: **l'entrata $S_{ij}$ è il coefficiente di $x_iy_j$**.

> [!COROLLARIO] 19.9
> Per i vettori della base canonica vale
> $$g_S(e_i, e_j) = S_{ij}.$$

Il motivo: $e_i$ ha un 1 al posto $i$ e zeri altrove. Nella somma della Proposizione 19.8 con $x = e_i$ e $y = e_j$ sopravvive un solo termine, quello con $x_i = 1$ e $y_j = 1$, che vale $S_{ij}$. In parole: ${}^te_i$ **sceglie la riga** $i$ di $S$, e $e_j$ **sceglie la colonna** $j$.

> [!ESEMPIO] 19.10 · La matrice identità
> Per $S = I_n$ si ottiene il prodotto scalare euclideo:
> $$g_{I_n}(x, y) = {}^tx\,y = x_1y_1 + \dots + x_ny_n.$$
> Infatti $I_n$ ha 1 sulla diagonale e 0 altrove: sopravvivono solo i termini $x_iy_i$.

> [!ESEMPIO] 19.11 · Una matrice non diagonale
> La matrice
> $$S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$$
> definisce su $\R^2$ il prodotto scalare
> $$g_S(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + x_2y_2.$$
> Due conti: $g_S(e_1, e_2) = S_{12} = 1$ (quindi $e_1$ ed $e_2$ **non** danno zero, a differenza del prodotto euclideo); con $x = y = (1, -1)$: $g_S = 2 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 + (-1) \cdot (-1) = 2 - 1 - 1 + 1 = 1$.
>
> È definito positivo? Con $y = x$ si ottiene $g_S(x, x) = 2x_1^2 + 2x_1x_2 + x_2^2 = x_1^2 + (x_1 + x_2)^2$. Una somma di due quadrati è $\ge 0$ e vale 0 solo se $x_1 = 0$ e $x_1 + x_2 = 0$, cioè se $x = 0$. Quindi sì.

### Dalla formula alla matrice e ritorno

> [!METODO] Tra $S$ e la formula di $g_S$
> **Dalla matrice alla formula.** Per ogni entrata $S_{ij}$ scrivi il termine $S_{ij}\,x_iy_j$ e somma tutto. Le entrate nulle non danno termini.
>
> **Dalla formula alla matrice.**
> 1. Controlla che ogni termine sia del tipo (numero) $\cdot\, x_iy_j$, con **una** $x$ e **una** $y$. Termini come $x_1$, $1$, $x_1x_2$, $x_1^2y_1$ vogliono dire che la formula non è bilineare.
> 2. Metti il coefficiente di $x_iy_j$ al posto $(i, j)$.
> 3. Controlla che la matrice sia simmetrica: il coefficiente di $x_iy_j$ deve essere uguale a quello di $x_jy_i$. Se non lo è, la formula non è un prodotto scalare.

> [!ESEMPIO] Andata e ritorno
> - $g(x, y) = 3x_1y_1 - 2x_1y_2 - 2x_2y_1 + 5x_2y_2$ ha matrice $S = \begin{pmatrix} 3 & -2 \\ -2 & 5 \end{pmatrix}$: il coefficiente di $x_1y_2$ va al posto $(1, 2)$, quello di $x_2y_1$ al posto $(2, 1)$, e sono uguali.
> - La matrice $S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & -1 \\ 0 & -1 & 3 \end{pmatrix}$ dà su $\R^3$
>   $$\begin{aligned} g_S(x, y) = {} & x_1y_1 + 2x_1y_2 + 2x_2y_1 \\ & - x_2y_3 - x_3y_2 + 3x_3y_3. \end{aligned}$$
> - $g(x, y) = x_1y_2 + 2x_2y_1$ **non** è un prodotto scalare: metterebbe 1 al posto $(1, 2)$ e 2 al posto $(2, 1)$, e la matrice non sarebbe simmetrica.

> [!TRAPPOLA] Non dividere per due
> Nel prodotto scalare $g_S(x, y)$ i termini $x_1y_2$ e $x_2y_1$ sono **diversi** e ciascuno ha il suo posto: il coefficiente va in matrice **così com'è**. La divisione per due serve per le **forme quadratiche** della lezione L20, dove $x_1x_2$ e $x_2x_1$ sono lo stesso monomio.

### Quando $g_S$ è degenere o definito positivo (oltre le dispense)

> [!OLTRE] Tre criteri comodi
> **1. Degenere se e solo se $\det S = 0$** (Martelli, Proposizione 7.1.23). Se $Sv = 0$ con $v \neq 0$, allora per ogni $w$
> $$g_S(v, w) = {}^tv\,S\,w = {}^t(Sv)\,w = 0,$$
> perché ${}^t(Sv) = {}^tv\,{}^tS = {}^tv\,S$. Quindi $g_S$ è degenere. Viceversa, se $g_S(v, w) = 0$ per ogni $w$, prendi $w = Sv$: ottieni ${}^t(Sv)(Sv) = 0$, cioè $\langle Sv, Sv\rangle = 0$ nel prodotto euclideo, quindi $Sv = 0$. In sintesi: $g_S$ è degenere $\iff$ esiste $v \neq 0$ con $Sv = 0$ $\iff$ $\det S = 0$ (lezione L10). I vettori che danno zero con tutti sono quelli del nucleo di $S$.
>
> **2. Matrici diagonali** (Martelli, §7.1.6). Se $S$ è diagonale con $d_1, \dots, d_n$ sulla diagonale, allora $g_S(x, x) = d_1x_1^2 + \dots + d_nx_n^2$: $g_S$ è definito positivo $\iff$ tutti i $d_i > 0$, ed è non degenere $\iff$ tutti i $d_i \neq 0$. Per esempio $\operatorname{diag}(1, -3)$ è non degenere ma non definito positivo, $\operatorname{diag}(0, 1)$ è degenere, $\operatorname{diag}(5, 1)$ è definito positivo.
>
> **3. Matrici $2 \times 2$.** $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ è definita positiva $\iff$ $a > 0$ e $\det S = ac - b^2 > 0$. Se $a \neq 0$ si «completa il quadrato»:
> $$a x_1^2 + 2b\,x_1x_2 + c\,x_2^2 = a\left(x_1 + \frac ba x_2\right)^2 + \frac{ac - b^2}{a}\,x_2^2.$$
> Se $a > 0$ e $ac - b^2 > 0$ i due addendi sono $\ge 0$ e si annullano insieme solo per $x_2 = 0$ e $x_1 = 0$. Viceversa, se $g_S$ è definito positivo, allora $a = g_S(e_1, e_1) > 0$, e con $x = (-b, a) \neq 0$ si trova $g_S(x, x) = a(ac - b^2) > 0$, quindi $ac - b^2 > 0$. Per $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$: $a = 2 > 0$ e $\det S = 1 > 0$, definita positiva come già visto.

## La matrice associata a un prodotto scalare (pp. 98–99)

Per le applicazioni lineari (lezione L15), fissata una base, ogni applicazione diventa una matrice. Con i prodotti scalari succede lo stesso.

> [!DEF] 19.12 · Matrice associata
> Sia $V$ uno spazio vettoriale reale, sia $g : V \times V \to \R$ un prodotto scalare e sia $\mathcal B = \{v_1, \dots, v_n\}$ una base di $V$. La **matrice associata** a $g$ nella base $\mathcal B$ è la matrice simmetrica
> $$S = [g]_{\mathcal B}, \qquad S_{ij} = g(v_i, v_j).$$

Pezzo per pezzo:

- la matrice è $n \times n$, con $n = \dim V$: una riga e una colonna per ogni vettore della base;
- al posto $(i, j)$ c'è il **prodotto scalare** tra l'$i$-esimo e il $j$-esimo vettore della base;
- sulla diagonale ci sono i prodotti $g(v_i, v_i)$ di ogni vettore con sé stesso;
- è **simmetrica** perché $g(v_i, v_j) = g(v_j, v_i)$ (assioma 3);
- **dipende dalla base**: stesso prodotto, base diversa, matrice diversa. Come cambia lo vedrai nella lezione L20.

> [!ESEMPIO] 19.13 · La base canonica
> Se $S \in M(n, \R)$ è simmetrica, la matrice associata a $g_S$ rispetto alla base canonica $\mathcal C$ è $S$ stessa:
> $$[g_S]_{\mathcal C} = S.$$
> È il Corollario 19.9: l'entrata $(i, j)$ di $[g_S]_{\mathcal C}$ è $g_S(e_i, e_j) = S_{ij}$.

> [!ESEMPIO] 19.14 · Il prodotto euclideo in un'altra base
> Consideriamo il prodotto scalare euclideo su $\R^2$ e la base
> $$\mathcal B = \left\{ v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, v_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix} \right\}.$$
> La matrice associata è
> $$[g]_{\mathcal B} = \begin{pmatrix} g(v_1, v_1) & g(v_1, v_2) \\ g(v_2, v_1) & g(v_2, v_2) \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}.$$
> I conti: $g(v_1, v_1) = 1 + 0 = 1$, $g(v_1, v_2) = 1 \cdot 1 + 0 \cdot 1 = 1$, $g(v_2, v_2) = 1 + 1 = 2$. Nella base canonica lo stesso prodotto ha matrice $I_2$.

Perché la matrice associata è utile? Perché contiene **tutta** l'informazione sul prodotto: conoscendo i prodotti tra i vettori della base, si calcola il prodotto di due vettori qualsiasi.

> [!PROP] 19.15
> Se
> $$v = \lambda_1v_1 + \dots + \lambda_nv_n, \qquad w = \mu_1v_1 + \dots + \mu_nv_n,$$
> allora
> $$g(v, w) = \sum_{i,j=1}^n \lambda_i\mu_j\,g(v_i, v_j).$$

La formula segue dalla bilinearità: si «sviluppa» come un prodotto di due somme. Con $n = 2$, un passaggio alla volta. Prima la linearità nel primo posto (assiomi 1 e 2), tenendo fisso $w = \mu_1v_1 + \mu_2v_2$:

$$g(\lambda_1v_1 + \lambda_2v_2,\ w) = \lambda_1\,g(v_1, w) + \lambda_2\,g(v_2, w).$$

Poi la linearità nel secondo posto (assiomi 4 e 5) dentro ciascun termine:

$$\begin{aligned} g(v_1, w) &= \mu_1\,g(v_1, v_1) + \mu_2\,g(v_1, v_2), \\ g(v_2, w) &= \mu_1\,g(v_2, v_1) + \mu_2\,g(v_2, v_2). \end{aligned}$$

Mettendo insieme:

$$\begin{aligned} g(v, w) = {} & \lambda_1\mu_1\,g(v_1, v_1) + \lambda_1\mu_2\,g(v_1, v_2) \\ & + \lambda_2\mu_1\,g(v_2, v_1) + \lambda_2\mu_2\,g(v_2, v_2). \end{aligned}$$

Sono quattro termini, uno per ogni coppia $(i, j)$.

> [!COROLLARIO] 19.16
> Per ogni $v, w \in V$ vale
> $$g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}.$$

Qui $[v]_{\mathcal B} = (\lambda_1, \dots, \lambda_n)$ è il vettore colonna delle **coordinate** di $v$ nella base $\mathcal B$ (lezione L15). Il prodotto riga-matrice-colonna, sviluppato con la Proposizione 19.8, dà esattamente la somma della Proposizione 19.15. In parole: **in coordinate, ogni prodotto scalare diventa un $g_S$**, con $S$ la matrice associata.

### Calcolare con le coordinate

> [!ESEMPIO] Il Corollario 19.16 al lavoro
> Prodotto euclideo su $\R^2$, base $\mathcal B = \{(1, 0), (1, 1)\}$ e $[g]_{\mathcal B} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ (Esempio 19.14). Prendi $v = (3, 2)$ e $w = (1, -1)$.
>
> 1. **Coordinate di $v$.** Cerco $a, b$ con $a(1, 0) + b(1, 1) = (3, 2)$: la seconda coordinata dà $b = 2$, la prima $a + b = 3$, quindi $a = 1$. $[v]_{\mathcal B} = (1, 2)$.
> 2. **Coordinate di $w$.** $a(1, 0) + b(1, 1) = (1, -1)$: $b = -1$, $a = 2$. $[w]_{\mathcal B} = (2, -1)$.
> 3. **Prodotto.** Prima $[g]_{\mathcal B}[w]_{\mathcal B} = \begin{pmatrix} 1 \cdot 2 + 1 \cdot (-1) \\ 1 \cdot 2 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, poi ${}^t(1, 2)\begin{pmatrix} 1 \\ 0 \end{pmatrix} = 1$.
> 4. **Controllo diretto.** $\langle (3, 2), (1, -1)\rangle = 3 - 2 = 1$. ✓

> [!ESEMPIO] La matrice di un prodotto sui polinomi
> Prendi su $\R_2[x]$ il prodotto $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$ e la base canonica $\{1, x, x^2\}$. Prima i valori nei punti $0, 1, 2$: $1 \to (1, 1, 1)$, $x \to (0, 1, 2)$, $x^2 \to (0, 1, 4)$. Poi i prodotti (sei bastano, gli altri per simmetria):
>
> | Coppia | Conto | Valore |
> |---|---|--:|
> | $\langle 1, 1\rangle$ | $1 + 1 + 1$ | 3 |
> | $\langle 1, x\rangle$ | $0 + 1 + 2$ | 3 |
> | $\langle 1, x^2\rangle$ | $0 + 1 + 4$ | 5 |
> | $\langle x, x\rangle$ | $0 + 1 + 4$ | 5 |
> | $\langle x, x^2\rangle$ | $0 + 1 + 8$ | 9 |
> | $\langle x^2, x^2\rangle$ | $0 + 1 + 16$ | 17 |
>
> $$[\,\langle\ ,\ \rangle\,]_{\{1, x, x^2\}} = \begin{pmatrix} 3 & 3 & 5 \\ 3 & 5 & 9 \\ 5 & 9 & 17 \end{pmatrix}.$$
> Verifica con il Corollario 19.16: $[1 + x] = (1, 1, 0)$ e $[x^2] = (0, 0, 1)$, quindi $\langle 1 + x, x^2\rangle = {}^t(1, 1, 0)\,S\,(0, 0, 1) = S_{13} + S_{23} = 5 + 9 = 14$. Direttamente: $1 + x$ vale $1, 2, 3$ e $x^2$ vale $0, 1, 4$, quindi $0 + 2 + 12 = 14$. ✓

> [!METODO] Calcolare $[g]_{\mathcal B}$
> 1. Scrivi i vettori della base **nell'ordine dato**: l'ordine decide righe e colonne.
> 2. Se $g$ è definito su polinomi valutando in alcuni punti, calcola prima la tabella dei valori di ogni $v_i$ in quei punti.
> 3. Calcola $g(v_i, v_j)$ per $i \le j$: sono $\frac{n(n+1)}2$ conti (3 per $n = 2$, 6 per $n = 3$).
> 4. Riempi la matrice e copia le entrate sopra la diagonale in quelle sotto.
> 5. Controllo: se $g = g_S$ su $\R^n$, l'entrata $(i, j)$ è ${}^tv_i\,S\,v_j$; calcola le colonne $Sv_j$ una volta sola e riusale.

> [!OLTRE] Dove trovarlo nel libro
> Martelli, capitolo 7 «Prodotti scalari»: §7.1.1–7.1.3 (definizione, degenere e definito positivo, prodotto euclideo, pp. 199–201), §7.1.4 (matrici simmetriche, pp. 201–203), §7.1.6 (matrici diagonali, pp. 204–205), §7.1.10 (i prodotti sui polinomi dell'Esempio 19.4, p. 209), §7.2.1 (matrice associata, pp. 210–212). Nel libro trovi anche le parole **vettore isotropo** (§7.1.8) e **radicale** (§7.1.9), che le dispense non usano.

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; dura 2 ore, senza calcolatrice, con solo 4 facciate di appunti scritti a mano. Appelli 2026/27: 22/01 e 05/02/2027, alle 14:00. I dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026**

1. **La matrice associata in una base (quiz).** È la domanda più frequente: negli appelli del 24/01/2024 (domanda 7), del 10/07/2024 (domanda 9) e del 15/01/2026 (domanda 9) il prodotto è dato da una formula strana su $\R_1[x]$ o su $\R^2$, e bisogna trovare $[g]_{\mathcal B}$ tra cinque matrici. Negli appelli del 10/06/2024 (domanda 4) e del 03/06/2026 (domanda 4) è dato $g_S$ con $S$ di ordine 3 e una base nuova: si fa entrata per entrata oppure con la formula ${}^tMSM$ della lezione L20.
2. **Il primo punto dei problemi.** Nei problemi 12 del 16/01/2025, del 07/02/2025 e del 05/02/2026 il punto (1) chiede la matrice associata (nella base canonica di $\R_2[x]$ o in una base di $\R^3$); i punti successivi usano norme, angoli, Gram–Schmidt e proiezioni (lezioni L20 e L21).
3. **Teoria.** Distinguere degenere, non degenere e definito positivo; sapere che $g_S$ è un prodotto scalare solo se $S$ è simmetrica.

**Tre domande vere, risolte**

> [!ESEMPIO] Appello del 15/01/2026, domanda 9
> Dati $x = {}^t(x_1, x_2)$ e $y = {}^t(y_1, y_2)$, sia $g(x, y) = x_1y_2 + x_2y_1 - x_2y_2$. Data la base $\mathcal B = \{{}^t(1, 1), {}^t(0, 1)\}$, quanto vale $[g]_{\mathcal B}$?
>
> **Soluzione.** $v_1 = (1, 1)$, $v_2 = (0, 1)$.
> - $g(v_1, v_1) = 1 \cdot 1 + 1 \cdot 1 - 1 \cdot 1 = 1$;
> - $g(v_1, v_2)$ con $x = (1, 1)$, $y = (0, 1)$: $1 \cdot 1 + 1 \cdot 0 - 1 \cdot 1 = 0$;
> - $g(v_2, v_2)$ con $x = y = (0, 1)$: $0 + 0 - 1 = -1$.
>
> Quindi $[g]_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ (la risposta (a)). Nota: il prodotto è non degenere ma non definito positivo, perché $g(v_2, v_2) = -1$.

> [!ESEMPIO] Appello del 24/01/2024, domanda 7
> Su $\R_1[x]$ è dato il prodotto scalare $g(p, q) = q(1)p(1) - q(0)p(0)$ e la base $\mathcal B = \{x + 1, 2\}$. Quanto vale $[g]_{\mathcal B}$?
>
> **Soluzione.** Tabella dei valori: $x + 1$ vale $2$ in 1 e $1$ in 0; il polinomio costante $2$ vale $2$ in entrambi i punti.
> - $g(x + 1, x + 1) = 2 \cdot 2 - 1 \cdot 1 = 3$;
> - $g(x + 1, 2) = 2 \cdot 2 - 1 \cdot 2 = 2$;
> - $g(2, 2) = 2 \cdot 2 - 2 \cdot 2 = 0$.
>
> Quindi $[g]_{\mathcal B} = \begin{pmatrix} 3 & 2 \\ 2 & 0 \end{pmatrix}$ (la risposta (a)). La risposta (e), $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$, è quella che si ottiene usando per sbaglio il polinomio $1$ al posto di $2$: il secondo vettore della base vale 2, non 1.

> [!ESEMPIO] Appello del 07/02/2025, problema 12, punto (1)
> Su $\R_2[x]$ è definito $g(p, q) = p(1)q(1) + p(-1)q(-1) + p(1)q(0) + p(0)q(1) + 2p(0)q(0)$. Trovare la matrice associata a $g$ nella base canonica $\{1, x, x^2\}$.
>
> **Soluzione.** Valori in $1, -1, 0$: $1 \to (1, 1, 1)$, $x \to (1, -1, 0)$, $x^2 \to (1, 1, 0)$. Poi, termine per termine nell'ordine della formula:
> - $g(1, 1) = 1 + 1 + 1 + 1 + 2 = 6$;
> - $g(1, x) = 1 \cdot 1 + 1 \cdot (-1) + 1 \cdot 0 + 1 \cdot 1 + 2 \cdot 1 \cdot 0 = 1$;
> - $g(1, x^2) = 1 + 1 + 0 + 1 + 0 = 3$;
> - $g(x, x) = 1 + 1 + 0 + 0 + 0 = 2$;
> - $g(x, x^2) = 1 \cdot 1 + (-1) \cdot 1 + 1 \cdot 0 + 0 \cdot 1 + 0 = 0$;
> - $g(x^2, x^2) = 1 + 1 + 0 + 0 + 0 = 2$.
>
> $$[g]_{\{1, x, x^2\}} = \begin{pmatrix} 6 & 1 & 3 \\ 1 & 2 & 0 \\ 3 & 0 & 2 \end{pmatrix}.$$
> Controllo della simmetria su una coppia: $g(x, 1) = 1 \cdot 1 + (-1) \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 0 = 1 = g(1, x)$. ✓ I punti (2) e (3) del problema continuano nelle lezioni L20 e L21.

**Errori da evitare**

- Confondere l'**ordine dei vettori** della base: $[g]_{\{v_1, v_2\}}$ e $[g]_{\{v_2, v_1\}}$ hanno le entrate diagonali scambiate.
- Nei prodotti sui polinomi, sbagliare un valore: scrivi **prima** la tabella dei valori, poi fai i prodotti.
- Dimenticare che la matrice associata è **sempre simmetrica**: nel quiz scarta subito le matrici non simmetriche.
- Dividere per due i coefficienti misti di $g(x, y)$: si divide solo per le forme quadratiche (lezione L20).

> [!ESAME] Sul foglio da 4 facciate
> - $g_S(x, y) = {}^tx\,S\,y = \sum_{i,j} x_iS_{ij}y_j$; $S_{ij}$ = coefficiente di $x_iy_j$; $g_S(e_i, e_j) = S_{ij}$.
> - $[g]_{\mathcal B}$: entrata $(i, j) = g(v_i, v_j)$, sempre simmetrica; $g(v, w) = {}^t[v]_{\mathcal B}[g]_{\mathcal B}[w]_{\mathcal B}$.
> - Degenere: $\exists\, v \neq 0$ con $\langle v, w\rangle = 0\ \forall w$ ($\iff \det S = 0$). Definito positivo: $\langle v, v\rangle > 0\ \forall v \neq 0$. Definito positivo $\Rightarrow$ non degenere, non viceversa.
> - Criterio $2 \times 2$: $\begin{pmatrix} a & b \\ b & c \end{pmatrix}$ definita positiva $\iff a > 0$ e $ac - b^2 > 0$.

## Quiz

```quiz
D: Quale di queste formule definisce un prodotto scalare su $\R^2$? (Qui $x = (x_1, x_2)$ e $y = (y_1, y_2)$.)
+ $g(x, y) = x_1y_1 + x_1y_2 + x_2y_1$
- $g(x, y) = x_1y_2 - x_2y_1$
- $g(x, y) = x_1y_1 + x_2$
- $g(x, y) = x_1x_2y_1y_2$
- $g(x, y) = x_1y_1 + x_2y_2 + 1$
= La prima è $g_S$ con $S = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, simmetrica: è bilineare e simmetrica. La seconda non è simmetrica ($g(e_1, e_2) = 1$, $g(e_2, e_1) = -1$). La terza e la quinta non danno zero con il vettore nullo ($g(e_2, 0) = 1$, $g(0, 0) = 1$). La quarta non è lineare: raddoppiando $x$ il risultato si moltiplica per 4.

D: Su $\R_1[x]$ sia $g(p, q) = p(1)q(2) + p(2)q(1)$ e sia $\mathcal B = \{x - 1, x - 2\}$. Allora $[g]_{\mathcal B}$ è:
+ $\begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & -2 \\ -2 & 0 \end{pmatrix}$
- $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$
= Valori in 1 e in 2: $x - 1 \to (0, 1)$, $x - 2 \to (-1, 0)$. Allora $g(x - 1, x - 1) = 0 \cdot 1 + 1 \cdot 0 = 0$, $g(x - 1, x - 2) = 0 \cdot 0 + 1 \cdot (-1) = -1$, $g(x - 2, x - 2) = (-1) \cdot 0 + 0 \cdot (-1) = 0$. Simile all'appello del 10/07/2024, domanda 9.

D: Qual è la matrice $S$ tale che $g(x, y) = x_1y_2 + x_2y_1 + 3x_2y_2$ sia uguale a $g_S(x, y) = {}^tx\,S\,y$?
+ $\begin{pmatrix} 0 & 1 \\ 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1/2 \\ 1/2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$
= $S_{ij}$ è il coefficiente di $x_iy_j$: $S_{11} = 0$ (non c'è $x_1y_1$), $S_{12} = S_{21} = 1$, $S_{22} = 3$. Non si divide per due: $x_1y_2$ e $x_2y_1$ sono due termini distinti. La matrice con 3 in alto a sinistra ha scambiato l'ordine delle coordinate. Da confrontare con l'appello dell'08/02/2024, domanda 7, dove era data una **forma quadratica**: lì il coefficiente del monomio misto va diviso per due (lezione L20).

D: Su $\R_1[x]$ si consideri il prodotto scalare $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$ e la base $\mathcal B = \{x, x + 1\}$. Allora $[\,\langle\ ,\ \rangle\,]_{\mathcal B}$ è:
+ $\begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 5 \end{pmatrix}$
- $\begin{pmatrix} 5 & 2 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$
= Valori in $0, 1$: $x \to (0, 1)$, $x + 1 \to (1, 2)$. Allora $\langle x, x\rangle = 0 + 1 = 1$, $\langle x, x + 1\rangle = 0 \cdot 1 + 1 \cdot 2 = 2$, $\langle x + 1, x + 1\rangle = 1 + 4 = 5$. La matrice con 5 in alto a sinistra usa la base in ordine inverso. Simile all'appello del 24/01/2024, domanda 7.

D: Su $\R^2$ sia $g(x, y) = x_1y_1 + x_1y_2 + x_2y_1$ e sia $\mathcal B = \{{}^t(1, 0), {}^t(1, -1)\}$. Allora $[g]_{\mathcal B}$ è:
+ $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 1 & -1 \end{pmatrix}$
= Con $v_1 = (1, 0)$ e $v_2 = (1, -1)$: $g(v_1, v_1) = 1$; $g(v_1, v_2) = 1 \cdot 1 + 1 \cdot (-1) + 0 = 0$; $g(v_2, v_2) = 1 + 1 \cdot (-1) + (-1) \cdot 1 = -1$. La seconda matrice è quella nella base canonica; l'ultima non è simmetrica, quindi non può essere una matrice associata. Simile all'appello del 15/01/2026, domanda 9.

D: Quale matrice simmetrica definisce un prodotto scalare **degenere** su $\R^2$?
+ $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
= $g_S$ è degenere esattamente quando $\det S = 0$. Solo la prima ha determinante $1 \cdot 4 - 2 \cdot 2 = 0$: con $v = (2, -1)$ vale $Sv = 0$, quindi $g_S(v, w) = {}^t(Sv)\,w = 0$ per ogni $w$. Le altre hanno determinante $-1$, $1$, $-1$, $6$.

D: Quale affermazione è vera per ogni prodotto scalare su uno spazio vettoriale reale?
+ Se è definito positivo, allora non è degenere.
- Se non è degenere, allora è definito positivo.
- Se $\langle v, v\rangle = 0$ per qualche $v \neq 0$, allora è degenere.
- Ogni matrice simmetrica $S$ definisce un prodotto scalare definito positivo.
- Può succedere che $\langle v, 0\rangle \neq 0$.
= È la Proposizione 19.3: il vettore che dà zero con tutti darebbe zero anche con sé stesso. Il prodotto $x_1y_1 - x_2y_2$ smentisce la seconda e la terza (non degenere, non definito positivo, e $(1, 1)$ dà zero con sé stesso); $S = -I_2$ smentisce la quarta; la bilinearità dà sempre $\langle v, 0\rangle = 0$.

D: Sia $S = \begin{pmatrix} 4 & 1 & -2 \\ 1 & 0 & 5 \\ -2 & 5 & 3 \end{pmatrix}$. Quanto vale $g_S(e_1 + e_2, e_3)$?
N: 3
= Per bilinearità $g_S(e_1 + e_2, e_3) = g_S(e_1, e_3) + g_S(e_2, e_3) = S_{13} + S_{23} = -2 + 5 = 3$ (Corollario 19.9).

D: Sia $S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$ e $\mathcal B = \{{}^t(2, 0, 0), {}^t(0, 1, 0), {}^t(0, 0, -1)\}$. La matrice associata a $g_S$ nella base $\mathcal B$ è:
+ $\begin{pmatrix} 4 & 4 & 0 \\ 4 & 1 & -1 \\ 0 & -1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 4 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & 4 & 0 \\ 2 & 1 & -1 \\ 0 & 1 & -3 \end{pmatrix}$
- $\begin{pmatrix} 4 & 4 & 0 \\ 4 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
= Con $v_1 = 2e_1$, $v_2 = e_2$, $v_3 = -e_3$ la bilinearità dà $g_S(v_i, v_j) = d_id_jS_{ij}$ con $d = (2, 1, -1)$: $g(v_1, v_1) = 4 \cdot 1 = 4$, $g(v_1, v_2) = 2 \cdot 2 = 4$, $g(v_1, v_3) = 0$, $g(v_2, v_2) = 1$, $g(v_2, v_3) = 1 \cdot (-1) \cdot 1 = -1$, $g(v_3, v_3) = (-1)^2 \cdot 3 = 3$. La quarta non è simmetrica. Simile agli appelli del 10/06/2024 e del 03/06/2026, domanda 4.

D: Su $\R_2[x]$, quale di questi prodotti scalari è **definito positivo**?
+ $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$
- $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$
- $\langle p, q\rangle = p(0)q(0) + p(1)q(1) - p(2)q(2)$
- $\langle p, q\rangle = p(0)q(1) + p(1)q(0)$
- $\langle p, q\rangle = p(1)q(1)$
= Nel primo $\langle p, p\rangle$ è una somma di tre quadrati, nulla solo se $p$ ha tre radici distinte, cioè $p = 0$ (Esempio 19.4). Il secondo e l'ultimo sono degeneri ($x - x^2$ e $x - 1$ danno zero con tutti); il terzo dà $\langle x - 1, x - 1\rangle = 0$; il quarto dà $\langle p, p\rangle = 2p(0)p(1)$, che è $-2$ per $p = 1 - 2x$.
```

## Esercizi

Le dispense non hanno esercizi per questa lezione: questi sono tutti costruiti per gli appunti; gli ultimi due sono modellati sugli appelli.

::: esercizio base Prodotto scalare o no?
Per ciascuna formula su $\R^2$ di' se è un prodotto scalare; se non lo è, indica una regola che fallisce con un esempio numerico.
(a) $2x_1y_1 + 3x_2y_2$; (b) $x_1y_2$; (c) $x_1y_1 + x_2y_2 + 1$; (d) $x_1y_1 - 4x_1y_2 - 4x_2y_1 + x_2y_2$; (e) $x_1^2y_1^2$.
::: soluzione
(a) **Sì.** È $g_S$ con $S = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$, simmetrica (Proposizione 19.7). Gli assiomi sono controllati uno per uno nell'esempio della sezione sulla definizione.

(b) **No**, non è simmetrica: $g(e_1, e_2) = 1 \cdot 1 = 1$ ma $g(e_2, e_1) = 0 \cdot 0 = 0$.

(c) **No**, non è bilineare: $g(0, 0) = 1$, mentre deve valere $\langle v, 0\rangle = 0$.

(d) **Sì.** Ogni termine ha una $x$ e una $y$, e i coefficienti di $x_1y_2$ e $x_2y_1$ sono uguali: è $g_S$ con $S = \begin{pmatrix} 1 & -4 \\ -4 & 1 \end{pmatrix}$, simmetrica. (Non è definito positivo: $g((1, 1), (1, 1)) = 1 - 4 - 4 + 1 = -6$.)

(e) **No**, non è lineare nel primo posto: $g(2e_1, e_1) = 4 \cdot 1 = 4$, mentre $2\,g(e_1, e_1) = 2$.
:::

::: esercizio base Conti con il prodotto euclideo
(a) Calcola $\langle (2, -1, 3), (1, 4, 1)\rangle$. (b) Calcola $\langle (1, 1, 1, 1), (1, -1, 1, -1)\rangle$. (c) Trova $k \in \R$ tale che $\langle (1, k, 2), (3, 1, -k)\rangle = 0$.
::: soluzione
(a) $2 \cdot 1 + (-1) \cdot 4 + 3 \cdot 1 = 2 - 4 + 3 = 1$.

(b) $1 - 1 + 1 - 1 = 0$: i due vettori di $\R^4$ sono perpendicolari.

(c) $\langle (1, k, 2), (3, 1, -k)\rangle = 1 \cdot 3 + k \cdot 1 + 2 \cdot (-k) = 3 + k - 2k = 3 - k$. Vale zero per $k = 3$. Controllo: $\langle (1, 3, 2), (3, 1, -3)\rangle = 3 + 3 - 6 = 0$. ✓
:::

::: esercizio base Dalla matrice alla formula e ritorno
(a) Scrivi $g_S(x, y)$ per $S = \begin{pmatrix} 1 & -2 & 0 \\ -2 & 3 & 4 \\ 0 & 4 & -1 \end{pmatrix}$. (b) Trova la matrice di $g(x, y) = x_1y_1 + 3x_1y_2 + 3x_2y_1 - x_2y_2 + 2x_1y_3 + 2x_3y_1$ su $\R^3$. (c) Calcola $g_S(e_2, e_3)$ per la matrice del punto (a).
::: soluzione
(a) Un termine $S_{ij}x_iy_j$ per ogni entrata non nulla:
$$\begin{aligned} g_S(x, y) = {} & x_1y_1 - 2x_1y_2 - 2x_2y_1 + 3x_2y_2 \\ & + 4x_2y_3 + 4x_3y_2 - x_3y_3. \end{aligned}$$

(b) Il coefficiente di $x_iy_j$ va al posto $(i, j)$; i termini con $x_2y_3$, $x_3y_2$, $x_3y_3$ mancano, quindi quelle entrate sono 0:
$$S = \begin{pmatrix} 1 & 3 & 2 \\ 3 & -1 & 0 \\ 2 & 0 & 0 \end{pmatrix}.$$
È simmetrica, quindi la formula è davvero un prodotto scalare.

(c) Per il Corollario 19.9, $g_S(e_2, e_3) = S_{23} = 4$.
:::

::: esercizio medio Degenere, definito positivo o nessuno dei due?
Per ciascuna matrice di' se $g_S$ su $\R^2$ è degenere, definito positivo, o non degenere ma non definito positivo:
$$S_1 = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}, \qquad S_2 = \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}, \qquad S_3 = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}.$$
::: soluzione
**$S_1$: degenere.** Cerco $v \neq 0$ con $S_1v = 0$: $x_1 + 2x_2 = 0$ (la seconda riga è il doppio della prima), per esempio $v = (2, -1)$: $S_1v = (2 - 2, 4 - 4) = (0, 0)$. Allora per ogni $w$: $g_{S_1}(v, w) = {}^t(S_1v)\,w = 0$.

**$S_2$: definito positivo.** Completo il quadrato:
$$\begin{aligned} g_{S_2}(x, x) &= x_1^2 + 4x_1x_2 + 5x_2^2 \\ &= (x_1^2 + 4x_1x_2 + 4x_2^2) + x_2^2 = (x_1 + 2x_2)^2 + x_2^2. \end{aligned}$$
È $\ge 0$ e vale 0 solo se $x_2 = 0$ e $x_1 + 2x_2 = 0$, cioè $x = 0$. (Con il criterio $2 \times 2$: $a = 1 > 0$, $\det S_2 = 1 > 0$.)

**$S_3$: non degenere, non definito positivo.** $\det S_3 = 3 - 4 = -1 \neq 0$, quindi non è degenere (criterio del determinante). Però con $x = (2, -1)$:
$$g_{S_3}(x, x) = x_1^2 + 4x_1x_2 + 3x_2^2 = 4 - 8 + 3 = -1 < 0.$$
:::

::: esercizio medio Una base in cui $g_S$ sembra euclideo
Sia $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ (Esempio 19.11) e sia $\mathcal B = \{v_1 = (1, -1),\ v_2 = (0, 1)\}$. Calcola $[g_S]_{\mathcal B}$. Che cosa osservi?
::: soluzione
Uso $g_S(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + x_2y_2$.

- $g_S(v_1, v_1)$ con $x = y = (1, -1)$: $2 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 + (-1) \cdot (-1) = 2 - 1 - 1 + 1 = 1$.
- $g_S(v_1, v_2)$ con $x = (1, -1)$, $y = (0, 1)$: $2 \cdot 1 \cdot 0 + 1 \cdot 1 + (-1) \cdot 0 + (-1) \cdot 1 = 0 + 1 + 0 - 1 = 0$.
- $g_S(v_2, v_2)$ con $x = y = (0, 1)$: $0 + 0 + 0 + 1 = 1$.

$$[g_S]_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2.$$
In questa base il prodotto $g_S$ ha la stessa matrice del prodotto euclideo nella base canonica: in coordinate, $g_S(v, w) = \lambda_1\mu_1 + \lambda_2\mu_2$. Basi di questo tipo (vettori di norma 1 a due a due ortogonali) si chiamano **ortonormali**; nella lezione L21 imparerai a costruirle con l'algoritmo di Gram–Schmidt.
:::

::: esercizio medio Un prodotto sui polinomi in tre punti simmetrici
Su $\R_2[x]$ sia $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. (a) Trova la matrice associata nella base $\{1, x, x^2\}$. (b) È definito positivo? (c) Quanto vale $\langle x, x^2\rangle$?
::: soluzione
(a) Valori in $-1, 0, 1$: $1 \to (1, 1, 1)$, $x \to (-1, 0, 1)$, $x^2 \to (1, 0, 1)$.
- $\langle 1, 1\rangle = 3$; $\langle 1, x\rangle = -1 + 0 + 1 = 0$; $\langle 1, x^2\rangle = 1 + 0 + 1 = 2$;
- $\langle x, x\rangle = 1 + 0 + 1 = 2$; $\langle x, x^2\rangle = -1 + 0 + 1 = 0$; $\langle x^2, x^2\rangle = 1 + 0 + 1 = 2$.
$$S = \begin{pmatrix} 3 & 0 & 2 \\ 0 & 2 & 0 \\ 2 & 0 & 2 \end{pmatrix}.$$

(b) Sì, con lo stesso ragionamento dell'Esempio 19.4: $\langle p, p\rangle = p(-1)^2 + p(0)^2 + p(1)^2$ vale 0 solo se $p$ ha le tre radici distinte $-1, 0, 1$, cioè solo se $p = 0$ (Teorema 4.6).

(c) $\langle x, x^2\rangle = S_{23} = 0$: i polinomi $x$ e $x^2$ sono «perpendicolari» per questo prodotto. È il conto che serviva nell'appello dell'08/02/2024 (domanda 8), dove si chiedeva l'angolo tra $x$ e $x^2$: vedrai nella lezione L20 che è $\frac\pi2$.
:::

::: esercizio medio Il Corollario 19.16 con i polinomi
Con il prodotto e la matrice $S$ dell'esercizio precedente, calcola $\langle 1 + 2x,\ x - x^2\rangle$ in due modi: con le coordinate e direttamente.
::: soluzione
**Con le coordinate.** $[1 + 2x] = (1, 2, 0)$ e $[x - x^2] = (0, 1, -1)$. Prima
$$S\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \cdot 0 + 0 \cdot 1 + 2 \cdot (-1) \\ 0 \cdot 0 + 2 \cdot 1 + 0 \cdot (-1) \\ 2 \cdot 0 + 0 \cdot 1 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -2 \\ 2 \\ -2 \end{pmatrix},$$
poi ${}^t(1, 2, 0)\,(-2, 2, -2) = -2 + 4 + 0 = 2$.

**Direttamente.** $p = 1 + 2x$ vale $-1, 1, 3$ in $-1, 0, 1$; $q = x - x^2$ vale $-2, 0, 0$. Quindi $\langle p, q\rangle = (-1)(-2) + 1 \cdot 0 + 3 \cdot 0 = 2$. ✓
:::

::: esercizio difficile Due punti bastano per $\R_1[x]$, non per $\R_2[x]$
Sia $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$. (a) Dimostra che su $\R_1[x]$ è definito positivo. (b) Su $\R_2[x]$ trova la matrice associata nella base $\{1, x, x^2\}$ e tutti i polinomi $p$ tali che $\langle p, q\rangle = 0$ per ogni $q$.
::: soluzione
(a) $\langle p, p\rangle = p(0)^2 + p(1)^2 \ge 0$, ed è 0 solo se $p(0) = p(1) = 0$. Un polinomio di grado $\le 1$ con due radici distinte è il polinomio nullo: se fosse non nullo di grado 1 avrebbe al più una radice (Teorema 4.6), se fosse una costante non nulla non ne avrebbe. Quindi $\langle p, p\rangle > 0$ per ogni $p \neq 0$.

(b) Valori in $0, 1$: $1 \to (1, 1)$, $x \to (0, 1)$, $x^2 \to (0, 1)$. Prodotti: $\langle 1, 1\rangle = 2$, $\langle 1, x\rangle = 1$, $\langle 1, x^2\rangle = 1$, $\langle x, x\rangle = 1$, $\langle x, x^2\rangle = 1$, $\langle x^2, x^2\rangle = 1$:
$$S = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}, \qquad \det S = 0$$
(due righe uguali). Il prodotto è quindi degenere. Un polinomio $p$ con coordinate $(a, b, c)$ dà zero con tutti se e solo se ${}^t[p]\,S = 0$, cioè $S[p] = 0$ ($S$ è simmetrica):
$$\begin{cases} 2a + b + c = 0 \\ a + b + c = 0 \end{cases}$$
(la terza equazione è uguale alla seconda). Sottraendo: $a = 0$, poi $c = -b$. Quindi $p = bx - bx^2 = b(x - x^2)$: sono i multipli di $x - x^2 = x(1 - x)$, il polinomio delle dispense.
:::

::: esercizio difficile Un prodotto scalare sulle matrici
Su $M(2, \R)$ sia $g(A, B) = \operatorname{tr}({}^tA\,B)$ (la traccia è la somma degli elementi sulla diagonale). (a) Scrivi $g(A, B)$ in funzione delle entrate. (b) Dimostra che è un prodotto scalare definito positivo. (c) Trova la matrice associata nella base $\{E_{11}, E_{12}, E_{21}, E_{22}\}$ delle matrici con un solo 1. (d) Calcola $g(A, B)$ per $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 3 & 0 \\ 1 & -1 \end{pmatrix}$.
::: soluzione
(a) Con $A = \begin{pmatrix} a_1 & a_2 \\ a_3 & a_4 \end{pmatrix}$ e $B = \begin{pmatrix} b_1 & b_2 \\ b_3 & b_4 \end{pmatrix}$:
$${}^tA\,B = \begin{pmatrix} a_1 & a_3 \\ a_2 & a_4 \end{pmatrix}\begin{pmatrix} b_1 & b_2 \\ b_3 & b_4 \end{pmatrix} = \begin{pmatrix} a_1b_1 + a_3b_3 & \ast \\ \ast & a_2b_2 + a_4b_4 \end{pmatrix},$$
quindi $g(A, B) = a_1b_1 + a_2b_2 + a_3b_3 + a_4b_4$ (le entrate $\ast$ fuori diagonale non servono).

(b) È il prodotto euclideo di $\R^4$ scritto sulle quattro entrate: bilineare, simmetrico e definito positivo per la Proposizione 19.6, perché $g(A, A) = a_1^2 + a_2^2 + a_3^2 + a_4^2 > 0$ se $A \neq 0$.

(c) $g(E_{ij}, E_{kl})$ vale 1 se le due matrici sono uguali e 0 altrimenti: la matrice associata è $I_4$.

(d) $g(A, B) = 1 \cdot 3 + 2 \cdot 0 + 0 \cdot 1 + 1 \cdot (-1) = 2$.
:::

::: esercizio esame Matrice associata su $\R_1[x]$
Su $\R_1[x]$ sia $g(p, q) = p(2)q(2) - p(0)q(0)$ e sia $\mathcal B = \{x + 1, 1\}$. (a) Calcola $[g]_{\mathcal B}$. (b) $g$ è degenere? (c) $g$ è definito positivo?
::: soluzione
(a) Valori in $2$ e in $0$: $x + 1 \to (3, 1)$, $1 \to (1, 1)$.
- $g(x + 1, x + 1) = 3 \cdot 3 - 1 \cdot 1 = 8$;
- $g(x + 1, 1) = 3 \cdot 1 - 1 \cdot 1 = 2$;
- $g(1, 1) = 1 - 1 = 0$.
$$[g]_{\mathcal B} = \begin{pmatrix} 8 & 2 \\ 2 & 0 \end{pmatrix}.$$

(b) No. Con il criterio del determinante: $\det [g]_{\mathcal B} = 0 - 4 = -4 \neq 0$ (il criterio vale per la matrice associata in qualsiasi base, perché in coordinate $g$ diventa un $g_S$, Corollario 19.16). Oppure direttamente: se $p$ dà zero con tutti, con $q = 1$ ottieni $p(2) - p(0) = 0$ e con $q = x$ ottieni $2p(2) = 0$; quindi $p(2) = p(0) = 0$ e $p$, di grado $\le 1$ con due radici, è nullo.

(c) No: $g(1, 1) = 0$ con $1 \neq 0$. (Anche $g(x, x) = 4 - 0 = 4 > 0$ e $g(x - 2, x - 2) = 0 - 4 = -4 < 0$: i segni cambiano.)
:::

::: esercizio esame Matrice associata a $g_S$ in una base di $\R^3$
Sia $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$. (a) Dimostra che $g_S$ è definito positivo. (b) Calcola $[g_S]_{\mathcal B}$ per $\mathcal B = \{v_1 = (1, 0, 1),\ v_2 = (0, 1, 1),\ v_3 = (1, 1, 0)\}$. (c) Calcola $g_S(v_1 + v_2, v_3)$ in due modi.
::: soluzione
(a) $g_S(x, x) = x_1^2 + 2x_1x_2 + 2x_2^2 + 3x_3^2 = (x_1 + x_2)^2 + x_2^2 + 3x_3^2$. È una somma di termini $\ge 0$ che si annullano tutti solo per $x_3 = 0$, $x_2 = 0$ e $x_1 + x_2 = 0$, cioè $x = 0$.

(b) Calcolo una volta le colonne $Sv_j$:
$$Sv_1 = (1, 1, 3), \quad Sv_2 = (1, 2, 3), \quad Sv_3 = (2, 3, 0).$$
Poi $g_S(v_i, v_j) = {}^tv_i\,(Sv_j)$:
- $g(v_1, v_1) = (1, 0, 1) \cdot (1, 1, 3) = 4$; $g(v_1, v_2) = (1, 0, 1) \cdot (1, 2, 3) = 4$; $g(v_1, v_3) = (1, 0, 1) \cdot (2, 3, 0) = 2$;
- $g(v_2, v_2) = (0, 1, 1) \cdot (1, 2, 3) = 5$; $g(v_2, v_3) = (0, 1, 1) \cdot (2, 3, 0) = 3$;
- $g(v_3, v_3) = (1, 1, 0) \cdot (2, 3, 0) = 5$.
$$[g_S]_{\mathcal B} = \begin{pmatrix} 4 & 4 & 2 \\ 4 & 5 & 3 \\ 2 & 3 & 5 \end{pmatrix}.$$

(c) **Con la matrice:** $[v_1 + v_2]_{\mathcal B} = (1, 1, 0)$ e $[v_3]_{\mathcal B} = (0, 0, 1)$, quindi il prodotto è la somma delle entrate $(1, 3)$ e $(2, 3)$ di $[g_S]_{\mathcal B}$: $2 + 3 = 5$. **Direttamente:** $v_1 + v_2 = (1, 1, 2)$ e $Sv_3 = (2, 3, 0)$, quindi $(1, 1, 2) \cdot (2, 3, 0) = 2 + 3 + 0 = 5$. ✓
:::

## Domande di ripasso

::: domanda Che cos'è un prodotto scalare su uno spazio vettoriale reale $V$?
Un'applicazione $V \times V \to \R$, $(v, w) \mapsto \langle v, w\rangle$, che è lineare nel primo posto ($\langle v + v', w\rangle = \langle v, w\rangle + \langle v', w\rangle$ e $\langle \lambda v, w\rangle = \lambda\langle v, w\rangle$) e simmetrica ($\langle v, w\rangle = \langle w, v\rangle$). Da qui segue la linearità anche nel secondo posto: il prodotto è bilineare.
:::

::: domanda Perché nelle lezioni sui prodotti scalari il campo è $\R$ e non $\C$ o $\Q$?
Perché servono i numeri positivi (per dire $\langle v, v\rangle > 0$), che in $\C$ non hanno senso, e le radici quadrate dei numeri positivi (per la lunghezza $\sqrt{\langle v, v\rangle}$), che in $\Q$ mancano.
:::

::: domanda Come si ricava $\langle v, \lambda w\rangle = \lambda\langle v, w\rangle$ dagli assiomi?
Si gira con la simmetria, si usa l'assioma sul primo posto e si gira di nuovo: $\langle v, \lambda w\rangle = \langle \lambda w, v\rangle = \lambda\langle w, v\rangle = \lambda\langle v, w\rangle$.
:::

::: domanda Perché $\langle v, 0\rangle = 0$ per ogni $v$?
Perché $\langle v, 0\rangle = \langle v, 0 + 0\rangle = \langle v, 0\rangle + \langle v, 0\rangle$; togliendo $\langle v, 0\rangle$ da entrambi i membri resta $0 = \langle v, 0\rangle$.
:::

::: domanda Che differenza c'è tra «degenere» e «definito positivo»? Fai un esempio per ciascuno.
Degenere: esiste $v \neq 0$ con $\langle v, w\rangle = 0$ per ogni $w$ (esempio: $x_1y_1$ su $\R^2$, con $v = e_2$). Definito positivo: $\langle v, v\rangle > 0$ per ogni $v \neq 0$ (esempio: il prodotto euclideo). La prima condizione parla del prodotto con tutti i vettori, la seconda del prodotto di ogni vettore con sé stesso.
:::

::: domanda Perché un prodotto definito positivo non è degenere? Vale il viceversa?
Se ci fosse $v \neq 0$ con $\langle v, w\rangle = 0$ per ogni $w$, con $w = v$ si avrebbe $\langle v, v\rangle = 0$, contro la definita positività. Il viceversa è falso: $x_1y_1 - x_2y_2$ è non degenere ma $\langle e_2, e_2\rangle = -1$.
:::

::: domanda Che cos'è il prodotto scalare euclideo e perché è definito positivo?
È $\langle x, y\rangle = {}^tx\,y = x_1y_1 + \dots + x_ny_n$ su $\R^n$. È definito positivo perché $\langle x, x\rangle = x_1^2 + \dots + x_n^2$ è una somma di quadrati, positiva appena una coordinata non è zero.
:::

::: domanda Come si ottiene un prodotto scalare da una matrice? Perché la matrice deve essere simmetrica?
Con $g_S(x, y) = {}^tx\,S\,y = \sum_{i,j} x_iS_{ij}y_j$. La bilinearità viene dal prodotto tra matrici; la simmetria $g_S(x, y) = g_S(y, x)$ richiede ${}^tS = S$, perché ${}^tx\,S\,y = {}^ty\,{}^tS\,x$.
:::

::: domanda Quanto vale $g_S(e_i, e_j)$? E come si legge la matrice dalla formula di $g_S$?
$g_S(e_i, e_j) = S_{ij}$: ${}^te_i$ sceglie la riga $i$, $e_j$ la colonna $j$. Di conseguenza $S_{ij}$ è il coefficiente di $x_iy_j$ nella formula, senza dividere per due.
:::

::: domanda Che cos'è la matrice associata $[g]_{\mathcal B}$? Perché è simmetrica?
Fissata la base $\mathcal B = \{v_1, \dots, v_n\}$, è la matrice $n \times n$ con entrata $(i, j)$ uguale a $g(v_i, v_j)$. È simmetrica perché $g(v_i, v_j) = g(v_j, v_i)$.
:::

::: domanda Come si calcola $g(v, w)$ conoscendo $[g]_{\mathcal B}$?
Con le coordinate: $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$ (Corollario 19.16). Viene dalla bilinearità: se $v = \sum \lambda_iv_i$ e $w = \sum \mu_jv_j$, allora $g(v, w) = \sum_{i,j} \lambda_i\mu_j\,g(v_i, v_j)$.
:::

::: domanda Perché $p(0)q(0) + p(1)q(1) + p(2)q(2)$ è definito positivo su $\R_2[x]$, mentre $p(0)q(0) + p(1)q(1)$ è degenere?
Nel primo $\langle p, p\rangle = 0$ obbliga $p$ ad avere tre radici distinte, impossibile per un polinomio non nullo di grado $\le 2$. Nel secondo bastano due radici: $p = x(1 - x)$ è non nullo, vale zero in 0 e in 1, e quindi dà zero con ogni $q$.
:::

## Glossario

```glossario
Prodotto scalare | Applicazione $V \times V \to \R$ bilineare e simmetrica; si scrive $\langle v, w\rangle$ oppure $g(v, w)$.
Bilineare | Lineare nel primo posto quando il secondo è fisso, e lineare nel secondo quando il primo è fisso.
Simmetrico | $\langle v, w\rangle = \langle w, v\rangle$ per ogni $v, w$.
Degenere | Esiste $v \neq 0$ con $\langle v, w\rangle = 0$ per ogni $w \in V$. Per $g_S$: succede se e solo se $\det S = 0$.
Non degenere | Per ogni $v \neq 0$ esiste $w$ con $\langle v, w\rangle \neq 0$.
Definito positivo | $\langle v, v\rangle > 0$ per ogni $v \neq 0$. Implica non degenere.
Prodotto scalare euclideo | Su $\R^n$: $\langle x, y\rangle = {}^tx\,y = x_1y_1 + \dots + x_ny_n$. È definito positivo.
Trasposta ${}^tx$ | Il vettore colonna $x$ scritto in riga; ${}^tx\,y$ è un prodotto riga per colonna che dà un numero.
Matrice simmetrica | Matrice quadrata con ${}^tS = S$, cioè $S_{ij} = S_{ji}$.
$g_S$ | Il prodotto scalare $g_S(x, y) = {}^tx\,S\,y = \sum_{i,j} x_iS_{ij}y_j$ definito da una matrice simmetrica $S$.
Base canonica | $e_1, \dots, e_n$, con $e_i$ che ha 1 al posto $i$ e 0 altrove; $g_S(e_i, e_j) = S_{ij}$.
Matrice associata $[g]_{\mathcal B}$ | Matrice simmetrica con entrata $(i, j)$ uguale a $g(v_i, v_j)$, dove $\mathcal B = \{v_1, \dots, v_n\}$.
Coordinate $[v]_{\mathcal B}$ | I coefficienti $\lambda_1, \dots, \lambda_n$ con $v = \lambda_1v_1 + \dots + \lambda_nv_n$, scritti in colonna.
$\R_k[x]$ | Lo spazio dei polinomi a coefficienti reali di grado $\le k$; ha dimensione $k + 1$ e base canonica $\{1, x, \dots, x^k\}$.
Vettore isotropo | (Termine di Martelli.) Vettore $v$ con $\langle v, v\rangle = 0$; se il prodotto è definito positivo l'unico è $v = 0$.
Radicale | (Termine di Martelli.) L'insieme dei vettori che danno zero con tutti; per $g_S$ è il nucleo di $S$. È $\{0\}$ esattamente quando il prodotto è non degenere.
```

## Checklist

```checklist
- So enunciare i tre assiomi del prodotto scalare e ricavare da essi la linearità nel secondo posto.
- So dimostrare che $\langle v, 0\rangle = 0$.
- So riconoscere se una formula su $\R^2$ o $\R^3$ è un prodotto scalare, e mostrare con un esempio numerico quando non lo è.
- So distinguere degenere, non degenere e definito positivo, con un esempio per ciascun caso.
- So dimostrare che definito positivo implica non degenere, e perché il viceversa è falso.
- So calcolare il prodotto scalare euclideo in $\R^n$ e scriverlo come ${}^tx\,y$.
- So passare da una matrice simmetrica $S$ alla formula di $g_S$ e viceversa, senza dividere per due.
- So calcolare la matrice associata $[g]_{\mathcal B}$ in una base qualsiasi, anche per prodotti sui polinomi.
- So usare la formula $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$.
- So decidere se $g_S$ è degenere con il determinante, e se una $2 \times 2$ è definita positiva.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 19 «Prodotti scalari I», pp. 96–99: le sezioni 19.A (definizioni), 19.B (matrici simmetriche) e 19.C (matrice associata) sono seguite in ordine, con la stessa numerazione (Definizioni 19.1, 19.2, 19.5, 19.12; Proposizioni 19.3, 19.6, 19.7, 19.8, 19.15; Corollari 19.9, 19.16; Esempi 19.4, 19.10, 19.11, 19.13, 19.14). Le dispense non hanno esercizi per questa lezione. Richiami da altre lezioni: Teorema 4.6 (radici di un polinomio), lezioni L08 (trasposta), L10 (determinante), L15 (coordinate).
- **B. Martelli, *Geometria e algebra lineare***, capitolo 7: §7.1 (in particolare la dimostrazione della Proposizione 7.1.5, i criteri per le matrici diagonali del §7.1.6, la Proposizione 7.1.23 sul radicale e le parole «isotropo» e «radicale») e §7.2.1 (matrice associata). Il libro è gratuito: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Appelli d'esame** (Moodle 2025/26): testi degli appelli del 24/01/2024 (domanda 7), 10/06/2024 (domanda 4), 10/07/2024 (domanda 9), 16/01/2025 e 07/02/2025 (problema 12), 15/01/2026 (domanda 9), 05/02/2026 (problema 12), 03/06/2026 (domanda 4). Le tre domande riportate sono risolte in questi appunti.
- Le parti **«Oltre le dispense»** (il quadrato di una somma, la non degenerazione del terzo prodotto dell'Esempio 19.4, il prodotto della fisica, i criteri con il determinante, le matrici diagonali e il criterio $2 \times 2$) e tutti gli esercizi sono aggiunte di questi appunti, per collegare la lezione al resto del corso e all'esame.
