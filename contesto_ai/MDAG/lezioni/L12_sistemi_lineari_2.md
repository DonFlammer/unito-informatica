---
corso: MDAG
modulo: AG
lezione: L12
titolo: Sistemi lineari II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 · Algebra lineare e Geometria · Canali A, B e C · Lezione L12
descrizione: >-
  Appunti della lezione L12 di Algebra lineare e Geometria (MDAG, parte 2): sistema omogeneo associato, soluzione
  particolare, sottospazi affini, rango e pivot, teorema di Rouché–Capelli, sistemi quadrati e sistemi con un
  parametro, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Perché un sistema lineare ha sempre zero, una o infinite soluzioni e mai due: le soluzioni sono una soluzione
  qualsiasi più quelle del sistema con i termini noti nulli, e il teorema di Rouché–Capelli dice, confrontando due
  ranghi, se esistono e quanti parametri servono. In fondo, il metodo per i sistemi con un parametro $k$, uno dei
  due problemi da 11 punti in molti appelli.
materiale: dispense
scheda:
  Dispense: lezione 12 · pp. 56–61
  Libro: Martelli, §3.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 12 «Sistemi lineari II»; B. Martelli, Geometria e algebra lineare, §3.2
file_en: L12_linear_systems_2.html
appunti_html: appunti/MDAG/L12_sistemi_lineari_2.html
genera_html: true
---

## In breve

- Il **sistema omogeneo associato** si ottiene mettendo a zero tutti i termini noti. Le sue soluzioni $S_0$ formano sempre un **sottospazio vettoriale** di $\K^n$: c'è sempre almeno la soluzione nulla.
- Le soluzioni $S$ del sistema di partenza, se ci sono, si ottengono sommando a **una** soluzione qualsiasi (la **soluzione particolare**) tutte le soluzioni del sistema omogeneo: $S = x + S_0$.
- Un insieme del tipo $x + W$, con $W$ sottospazio vettoriale, è un **sottospazio affine**: un punto, una retta, un piano che non passano per forza per l'origine. La sua dimensione è $\dim W$.
- Un sistema si legge anche come $x_1A^1 + \cdots + x_nA^n = b$: ha soluzioni se e solo se $b$ è combinazione lineare delle colonne di $A$.
- Il **rango** di una matrice è il numero di pivot di una qualsiasi sua forma a scalini: le mosse di Gauss non lo cambiano.
- **Teorema di Rouché–Capelli**: il sistema ha soluzioni se e solo se $\rk(A \mid b) = \rk(A)$; in questo caso le soluzioni formano un sottospazio affine di dimensione $n - \rk(A)$.
- Su $\Q$, $\R$, $\C$ le soluzioni sono $0$, $1$ oppure infinite: mai due, mai «un numero finito maggiore di 1».
- Con $A$ quadrata: una sola soluzione se e solo se $\det A \neq 0$, e allora $x = A^{-1}b$. Se $\det A = 0$ le soluzioni sono zero **oppure** infinite: va controllato con i ranghi.
- Nei sistemi con un parametro $k$ si fa Gauss tenendo $k$ come lettera e si studiano a parte i valori di $k$ che annullano un pivot.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Il sistema omogeneo associato (p. 56)

Nella lezione L11 hai imparato a **risolvere** un sistema con l'algoritmo di Gauss–Jordan. Questa lezione guarda il problema dall'alto: che **forma** ha l'insieme delle soluzioni, e come si capisce in anticipo se ci sono soluzioni e quante.

Parti da una sola equazione in due incognite, $x + y = 2$. Le soluzioni sono tutte le coppie con $x = 2 - t$, $y = t$: una retta del piano. Ora metti a zero il termine noto: $x + y = 0$. Le soluzioni sono $x = -t$, $y = t$: un'altra retta, **parallela** alla prima, che passa per l'origine. Guarda il disegno: ogni soluzione della prima si ottiene da una soluzione della seconda spostandola del vettore $(2, 0)$, che è a sua volta una soluzione della prima ($2 + 0 = 2$). In formule:

$$(2 - t,\ t) = (2, 0) + (-t,\ t).$$

Tutta la lezione è in questa riga.

```grafico
titolo: Le soluzioni di $x + y = 2$ (retta $S$) sono quelle di $x + y = 0$ (retta $S_0$) spostate del vettore $(2, 0)$
x: -3 4
y: -3 4
retta: 2 0 0 2 | accento | $S$ | ne
retta: 0 0 -2 2 | blu | $S_0$ | ne
vettore: 2 0 | ambra | $(2, 0)$ | se
vettore: 0 0 -1 1 | verde | $(-1, 1)$ | so
vettore: 2 0 1 1 | verde | tratteggio
```

Scriviamo il sistema generale, come nella lezione L11:

$$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = b_1, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = b_k. \end{cases} \qquad (12.1)$$

> [!DEF] 12.1 · Sistema omogeneo associato
> Il **sistema omogeneo associato** è quello ottenuto semplicemente mettendo a zero tutti i termini noti $b_i$, cioè:
> $$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = 0, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = 0. \end{cases} \qquad (12.2)$$

Pezzo per pezzo:

- **Omogeneo** vuol dire «con tutti i termini noti uguali a zero». I coefficienti $a_{ij}$ restano **gli stessi** del sistema di partenza: cambia solo la colonna di destra.
- Se $A = (a_{ij})$ è la matrice dei coefficienti e $b = (b_i)$ il vettore dei termini noti, il sistema (12.1) ha matrice completa $C = (A \mid b)$; il sistema omogeneo (12.2) ha matrice completa $(A \mid 0)$, oppure, più in breve, si indica con $A$: la colonna di zeri non cambia con le mosse di Gauss, quindi non serve scriverla.
- Le dispense chiamano $S \subset \K^n$ l'insieme delle soluzioni del sistema (12.1) e $S_0 \subset \K^n$ quello delle soluzioni del sistema omogeneo (12.2).

> [!ESEMPIO] Un sistema e il suo omogeneo
> $$\begin{cases} x + 2y - z = 3 \\ 2x + 4y + z = 3 \end{cases} \quad \longrightarrow \quad \begin{cases} x + 2y - z = 0 \\ 2x + 4y + z = 0 \end{cases}$$
> Le matrici sono $(A \mid b) = \left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 3 \end{array}\right)$ e $(A \mid 0) = \left(\begin{array}{ccc|c} 1 & 2 & -1 & 0 \\ 2 & 4 & 1 & 0 \end{array}\right)$: la stessa $A$, un'altra colonna a destra.

### Le soluzioni del sistema omogeneo formano un sottospazio

> [!PROP] 12.2
> Le soluzioni $S_0 \subset \K^n$ formano un sottospazio vettoriale di $\K^n$.

Bisogna verificare i tre assiomi di sottospazio (Definizione 6.2, lezione L06): contenere lo zero, essere chiuso rispetto alla somma, essere chiuso rispetto al prodotto per uno scalare. Scriviamo la $i$-esima equazione di (12.2) come $a_{i1}x_1 + \cdots + a_{in}x_n = 0$ e controlliamo, per ogni $i$:

1. **Lo zero è una soluzione.** Con $x = 0$: $a_{i1} \cdot 0 + \cdots + a_{in} \cdot 0 = 0$. Quindi $0 \in S_0$.
2. **Somma.** Se $x$ e $y$ sono soluzioni, anche $x + y$ lo è: raccogliendo,
   $$a_{i1}(x_1 + y_1) + \cdots + a_{in}(x_n + y_n) = (a_{i1}x_1 + \cdots + a_{in}x_n) + (a_{i1}y_1 + \cdots + a_{in}y_n) = 0 + 0 = 0.$$
3. **Multipli.** Se $x$ è soluzione e $\lambda \in \K$, anche $\lambda x$ lo è:
   $$a_{i1}(\lambda x_1) + \cdots + a_{in}(\lambda x_n) = \lambda(a_{i1}x_1 + \cdots + a_{in}x_n) = \lambda \cdot 0 = 0.$$

Quindi $S_0$ è un sottospazio vettoriale di $\K^n$. $\square$

### Il sistema di partenza invece no

L'insieme $S$ delle soluzioni di (12.1) **non** è un sottospazio, perché non contiene l'origine, a meno che il sistema non sia già omogeneo (e allora $S = S_0$). Il motivo: se qualche $b_i$ è diverso da zero, sostituendo $x = 0$ nella $i$-esima equazione si ottiene $0 = b_i$, falso.

Si rompe anche la chiusura per somma: se $x$ e $y$ risolvono $x + 2y - z = 3$, la loro somma dà $3 + 3 = 6 \neq 3$. Per esempio $(3, 0, 0)$ e $(1, 1, 0)$ risolvono la prima equazione dell'esempio sopra, ma la loro somma $(4, 1, 0)$ dà $4 + 2 - 0 = 6$.

> [!TRAPPOLA] Il sistema omogeneo non è mai impossibile
> Un sistema omogeneo ha **sempre** almeno la soluzione nulla $x = 0$: non può mai avere zero soluzioni. Nella forma a scalini di $(A \mid 0)$ la colonna di destra resta tutta di zeri, quindi non ci può essere un pivot nell'ultima colonna. La domanda interessante, per un sistema omogeneo, è un'altra: c'è **solo** la soluzione nulla, o ce ne sono altre?

## Soluzione particolare e sottospazi affini (pp. 57–58)

I due insiemi $S$ e $S_0$ sono strettamente legati, come nel disegno iniziale.

> [!PROP] 12.3
> Se $S \neq \emptyset$, allora $S$ è ottenuto prendendo una qualsiasi soluzione $x \in S$ e aggiungendo a questa tutti i vettori di $S_0$.

Vediamo perché vale, in due passi. Fissa una soluzione $x \in S$ del sistema (12.1).

1. **Soluzione più soluzione dell'omogeneo è una soluzione.** Se $x' \in S_0$, allora $x + x'$ risolve (12.1): per ogni equazione
   $$a_{i1}(x_1 + x'_1) + \cdots + a_{in}(x_n + x'_n) = (a_{i1}x_1 + \cdots + a_{in}x_n) + (a_{i1}x'_1 + \cdots + a_{in}x'_n) = b_i + 0 = b_i.$$
2. **Ogni soluzione si ottiene così.** Se $x''$ è un'altra soluzione di (12.1), la differenza $x' = x'' - x$ risolve l'omogeneo:
   $$a_{i1}(x''_1 - x_1) + \cdots + a_{in}(x''_n - x_n) = b_i - b_i = 0.$$
   Quindi $x'' = x + x'$ con $x' \in S_0$.

Il punto 1 dice che tutti i vettori $x + x'$ con $x' \in S_0$ stanno in $S$; il punto 2 dice che in $S$ non c'è nient'altro. Quindi le soluzioni di (12.1) sono **esattamente** quelle che si ottengono aggiungendo a una soluzione fissata $x$ le soluzioni $x' \in S_0$ di (12.2). $\square$

La soluzione fissata $x$ si chiama **soluzione particolare**. In una frase:

> [!IDEA] la formula da ricordare
> **Tutte le soluzioni = una soluzione particolare + tutte le soluzioni del sistema omogeneo associato.** In simboli $S = x + S_0$, se $S \neq \emptyset$. La soluzione particolare può essere **qualsiasi** elemento di $S$: cambiandola, l'insieme $S$ resta lo stesso.

> [!ESEMPIO] 12.4 · Una retta di soluzioni in $\R^3$
> Consideriamo il sistema in $\R^3$
> $$\begin{cases} x - y + z = 1 \\ y - z = 2 \end{cases}$$
> **Il sistema omogeneo associato** è $x - y + z = 0$, $y - z = 0$. Dalla seconda $y = z$; nella prima $x - z + z = 0$, cioè $x = 0$. Con $z = t$ le soluzioni sono precisamente i vettori
> $$S_0 = \left\{ \begin{pmatrix} 0 \\ t \\ t \end{pmatrix} \ \middle|\ t \in \R \right\} = \Span\left(\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}\right).$$
> **Una soluzione particolare** è $(3, 0, -2)$: controllo $3 - 0 + (-2) = 1$ e $0 - (-2) = 2$.
>
> **Tutte le soluzioni** si ottengono sommando:
> $$\begin{pmatrix} 3 \\ 0 \\ -2 \end{pmatrix} + \begin{pmatrix} 0 \\ t \\ t \end{pmatrix} = \begin{pmatrix} 3 \\ t \\ t - 2 \end{pmatrix}, \qquad t \in \R.$$

Da dove viene la soluzione particolare? Risolvendo il sistema con Gauss–Jordan, come nella lezione L11:

$$\left(\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 0 & 1 & -1 & 2 \end{array}\right) \xrightarrow{R_1 \to R_1 + R_2} \left(\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & -1 & 2 \end{array}\right)$$

La colonna di $z$ non ha pivot: $z = u$, poi $x = 3$ e $y = 2 + u$. In forma vettoriale

$$\begin{pmatrix} 3 \\ 2 + u \\ u \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \\ 0 \end{pmatrix} + u \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$

Con $u = 0$ trovi la soluzione particolare $(3, 2, 0)$, diversa da quella delle dispense; la parte con $u$ è esattamente $S_0$. È **lo stesso insieme** di prima: la soluzione $(3, t, t - 2)$ delle dispense è quella con $u = t - 2$ (Martelli, p. 87, fa proprio questo confronto). La soluzione $(3, 0, -2)$ delle dispense è quella con $u = -2$.

> [!METODO] Soluzione particolare e $S_0$ in un colpo solo
> Risolvi il sistema con Gauss–Jordan e scrivi le soluzioni in forma vettoriale, $x = x_0 + t_1 v_1 + \cdots + t_h v_h$. Allora:
> 1. $x_0$ (tutti i parametri a zero) è una soluzione particolare;
> 2. $S_0 = \Span(v_1, \dots, v_h)$: la parte con i parametri risolve il sistema omogeneo.

### Sottospazi affini

> [!DEF] 12.5 · Sottospazio affine
> Geometricamente, $S$ è un sottospazio affine. Sia $V$ uno spazio vettoriale. Un **sottospazio affine** di $V$ è un qualsiasi sottoinsieme del tipo
> $$S = \{x + v \mid v \in W\} =: x + W$$
> dove $x$ è un punto fissato di $V$ e $W \subset V$ è un sottospazio vettoriale. La **dimensione di $S$** è la dimensione del sottospazio $W$.

Pezzo per pezzo:

- $x + W$ è il sottospazio $W$ **traslato** del vettore $x$: prendi ogni vettore $v$ di $W$ e sommagli $x$.
- Il simbolo $=:$ vuol dire «e chiamiamo questo insieme»: definisce la scrittura abbreviata $x + W$.
- La dimensione è quella di $W$, non dipende da $x$: spostare una retta non la fa diventare un piano.
- Casi tipici: $W = \{0\}$ dà un solo **punto** (dimensione 0); $W = \Span(v)$ con $v \neq 0$ dà una **retta** per $x$ con direzione $v$ (dimensione 1); $W = \Span(v, w)$ con $v, w$ indipendenti dà un **piano** (dimensione 2).
- Martelli chiama $W$ la **giacitura** di $S$. Per le soluzioni di un sistema la giacitura è $S_0$, e $\dim S = \dim S_0$.

> [!ESEMPIO] La stessa retta scritta in due modi (dal libro di Martelli, Esempio 3.2.5)
> Sia $W = \Span\big((1, 1)\big)$ in $\R^2$. Le due rette affini
> $$r_1 = (1, 0) + W = \{(1 + t,\ t) \mid t \in \R\},$$
> $$r_2 = (0, -1) + W = \{(u,\ u - 1) \mid u \in \R\}$$
> sono **la stessa retta**, di equazione $y = x - 1$: nella prima $y = t = x - 1$, nella seconda $y = u - 1 = x - 1$. Il punto di partenza cambia, la giacitura $W$ no. Funziona perché la differenza dei due punti, $(1, 0) - (0, -1) = (1, 1)$, sta in $W$.

```grafico
titolo: La retta $y = x - 1$ è $(1, 0) + W$ ma anche $(0, -1) + W$, con $W = \Span((1, 1))$ tratteggiato
x: -3 4
y: -3 4
retta: 0 0 1 1 | grigio | tratteggio | $W$ | no
retta: 1 0 3 2 | accento | $y = x - 1$ | se
punto: 1 0 | blu | $(1, 0)$ | se
punto: 0 -1 | blu | $(0, -1)$ | e
vettore: 1 0 2 1 | ambra | $(1, 1)$ | n
```

> [!OLTRE] quando un sottospazio affine è un sottospazio vettoriale
> $x + W$ passa per l'origine se e solo se $x \in W$, e in quel caso $x + W = W$: è un sottospazio vettoriale. Per esempio $(2, 2) + \Span\big((1, 1)\big)$ è la retta $y = x$, che passa per l'origine. Per i sistemi: $S$ è un sottospazio vettoriale esattamente quando $0 \in S$, cioè quando il sistema è omogeneo.

## Il sistema letto per colonne e il rango (p. 58)

Riprendi l'indovinello della lezione L11, $x + y = 5$, $x - y = 1$, e scrivilo mettendo in evidenza le colonne di $A$:

$$x \begin{pmatrix} 1 \\ 1 \end{pmatrix} + y \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}.$$

Risolvere il sistema vuol dire cercare **i coefficienti** con cui le colonne di $A$ si combinano per dare $b$. Con $x = 3$ e $y = 2$: $3(1, 1) + 2(1, -1) = (5, 1)$.

In generale, indicando con $A^1, \dots, A^n$ le colonne di $A$ (con l'indice in alto, come nella lezione L08), il sistema (12.1) si riscrive

$$x_1A^1 + \cdots + x_nA^n = b.$$

Quindi esistono soluzioni **se e solo se** $b$ è combinazione lineare delle colonne $A^1, \dots, A^n$, con coefficienti $x_1, \dots, x_n$. In altre parole: il sistema (12.1) ha soluzioni se e solo se

$$b \in \Span\left(A^1, \dots, A^n\right).$$

> [!ESEMPIO] Quando $b$ esce dallo Span delle colonne
> Il sistema $x + 2y = 1$, $2x + 4y = 3$ si scrive $x(1, 2) + y(2, 4) = (1, 3)$. Le due colonne sono una multipla dell'altra, $(2, 4) = 2 \cdot (1, 2)$, quindi $\Span(A^1, A^2) = \Span\big((1, 2)\big)$: la retta $y = 2x$. Il vettore $b = (1, 3)$ non sta su questa retta ($3 \neq 2 \cdot 1$): **nessuna** combinazione delle colonne dà $b$, e il sistema non ha soluzioni. Con Gauss: $R_2 \to R_2 - 2R_1$ dà $(0, 0 \mid 1)$, cioè $0 = 1$.

```grafico
titolo: Le colonne $A^1 = (1, 2)$ e $A^2 = (2, 4)$ generano solo la retta tratteggiata; $b = (1, 3)$ è fuori
x: -1 5
y: -1 5
retta: 0 0 1 2 | grigio | tratteggio
vettore: 2 4 | blu | $A^2$ | e
vettore: 1 2 | accento | spesso | $A^1$ | e
vettore: 1 3 | ambra | $b$ | no
```

### Il rango si conta con i pivot

Nella lezione L08 il **rango** $\rk(A)$ è stato definito come la dimensione dello spazio generato dalle colonne (Definizione 8.3), che è il massimo numero di colonne linearmente indipendenti di $A$ (Proposizione 8.4). Ora serve un modo pratico per calcolarlo. Le dispense lo ricavano in tre passi.

1. **Le mosse di Gauss non cambiano lo spazio generato dalle righe.** Ogni riga nuova è una combinazione delle righe vecchie, quindi lo spazio delle righe nuove sta dentro quello delle vecchie. Siccome ogni mossa si può annullare (lezione L11), vale anche il contrario: i due spazi coincidono. Quindi le mosse non cambiano il **rango per righe**, che per la Proposizione 8.6 è uguale al rango (per colonne).
2. **Nella forma ridotta si vede tutto.** Con Gauss–Jordan le colonne che contengono i pivot diventano i primi vettori $e_1, e_2, \dots$ della base canonica, e tutte le altre colonne sono combinazioni lineari di questi.
3. **Quindi** lo spazio delle colonne della forma ridotta è generato dai vettori $e_1, \dots, e_r$, dove $r$ è il numero dei pivot, e ha dimensione $r$.

> [!PROP] Rango e pivot (p. 58)
> Il rango di $A$ è il numero di pivot in una sua (qualsiasi) riduzione a scalini.

> [!ESEMPIO] Il rango letto sulla forma ridotta
> Nella matrice ridotta $R = \begin{pmatrix} 1 & 2 & 0 & 3 \\ 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 0 \end{pmatrix}$ i pivot sono nelle colonne 1 e 3, che sono $e_1 = (1, 0, 0)$ ed $e_2 = (0, 1, 0)$. Le altre colonne sono combinazioni di queste: $R^2 = (2, 0, 0) = 2e_1$ e $R^4 = (3, 4, 0) = 3e_1 + 4e_2$. Lo spazio delle colonne è $\Span(e_1, e_2)$, di dimensione $2$: $\rk(R) = 2$, il numero dei pivot.

> [!NOTA] Attenzione alle lettere
> In questo passaggio le dispense scrivono che le colonne con i pivot diventano «i primi $k$ vettori $e_1, \dots, e_k$ della base canonica di $\K^m$»: qui $k$ è il **numero dei pivot** e $m$ il **numero delle righe** di $A$ (lo spazio in cui vivono le colonne). Nel sistema (12.1), invece, $k$ era il numero delle equazioni. È solo un cambio di lettere, ma conviene saperlo quando si rilegge la pagina 58.

```widget gauss
titolo: Calcola il rango con i pivot
matrice: 1 2 0 1; 2 4 1 3; 3 6 1 4
modo: rango
modi: rango scala ridotta
```

Premi «Calcola»: la matrice ha 3 righe e 4 colonne, ma dopo Gauss restano solo 2 righe non nulle, quindi il rango è 2. Prova poi a cambiare l'ultimo numero da $4$ a $5$: la terza riga non è più la somma delle prime due e il rango sale a 3.

## Il teorema di Rouché–Capelli (pp. 58–59)

Ora il criterio che dice in anticipo se un sistema ha soluzioni, e quante. È il teorema più importante della lezione.

> [!TEOREMA] 12.6 · Rouché–Capelli
> Il sistema (12.1) ha soluzioni se e solo se
> $$\rk(A \mid b) = \rk(A).$$
> In caso affermativo, lo spazio delle soluzioni $S \subset \K^n$ è un sottospazio affine di dimensione $n - \rk(A)$.

Pezzo per pezzo:

- $\rk(A)$ è il rango della matrice dei coefficienti; $\rk(A \mid b)$ è il rango della matrice completa, che ha una colonna in più.
- Aggiungere una colonna non può abbassare il rango, e lo alza al massimo di $1$ (lo spazio delle colonne guadagna al più un vettore). Quindi c'è sempre $\rk(A) \le \rk(A \mid b) \le \rk(A) + 1$: o i due ranghi sono **uguali**, o quello completo è più grande **di uno**.
- $n$ è il numero di **incognite** (le colonne di $A$). La dimensione $n - \rk(A)$ è il numero di **parametri liberi** della lezione L11.
- Nel linguaggio della lezione L11: $\rk(A \mid b) = \rk(A) + 1$ vuol dire esattamente che nella forma a scalini c'è un **pivot nell'ultima colonna**.

**Dimostrazione**, passo per passo.

1. Il sistema ha soluzioni se e solo se $b \in \Span(A^1, \dots, A^n)$ (sezione precedente).
2. Questo accade se e solo se aggiungere $b$ alle colonne non allarga lo spazio generato:
   $$\Span\left(A^1, \dots, A^n, b\right) = \Span\left(A^1, \dots, A^n\right).$$
   Se $b$ è combinazione delle colonne, ogni combinazione di $A^1, \dots, A^n, b$ è già combinazione delle sole $A^j$; se invece $b$ non lo è, lo Span con $b$ è strettamente più grande.
3. Due sottospazi uno dentro l'altro coincidono se e solo se hanno la stessa dimensione; le dimensioni qui sono i due ranghi. Quindi c'è soluzione se e solo se $\rk(A \mid b) = \rk(A)$.
4. Se ci sono soluzioni, $S = x + S_0$ (Proposizione 12.3), quindi $\dim S = \dim S_0$ (Definizione 12.5).
5. Resta da contare $\dim S_0$. Con Gauss–Jordan (lezione L11) le soluzioni del sistema omogeneo si scrivono $t_1v_1 + \cdots + t_hv_h$, con un vettore per ogni colonna senza pivot: $h = n - (\text{numero di pivot}) = n - \rk(A)$. Questi vettori **generano** $S_0$ e sono **indipendenti**: $v_i$ ha un $1$ nel posto della $i$-esima incognita libera e $0$ nei posti delle altre incognite libere, quindi se $t_1v_1 + \cdots + t_hv_h = 0$, guardando il posto della $i$-esima incognita libera si trova $t_i = 0$.
6. Quindi $\dim S = \dim S_0 = n - \rk(A)$. $\square$

> [!ESEMPIO] Tre sistemi, tre verdetti
> 1. $\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right)$: $\rk(A) = \rk(A \mid b) = 2 = n$. Soluzioni, e $\dim S = 2 - 2 = 0$: un punto, $(3, 2)$.
> 2. $\left(\begin{array}{cc|c} 1 & 2 & 1 \\ 2 & 4 & 3 \end{array}\right)$: dopo $R_2 \to R_2 - 2R_1$ diventa $\left(\begin{array}{cc|c} 1 & 2 & 1 \\ 0 & 0 & 1 \end{array}\right)$. $\rk(A) = 1$ (un pivot nelle prime due colonne), $\rk(A \mid b) = 2$: nessuna soluzione.
> 3. Esempio 12.4: $\left(\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 0 & 1 & -1 & 2 \end{array}\right)$ è già a scalini, $\rk(A) = \rk(A \mid b) = 2$, $n = 3$: soluzioni, e $\dim S = 3 - 2 = 1$, una retta.

### Zero, una o infinite

Nel corollario seguente il campo $\K$ è **infinito**, come $\Q$, $\R$ e $\C$.

> [!COROLLARIO] 12.7
> Il sistema (12.1) ha $0$, $1$ oppure $\infty$ soluzioni. Più precisamente, le soluzioni sono
> - $0$ se $\rk(A \mid b) > \rk A$,
> - $1$ se $\rk(A \mid b) = \rk A = n$,
> - $\infty$ se $\rk(A \mid b) = \rk A < n$.

Perché: se i ranghi sono diversi non ci sono soluzioni (Rouché–Capelli). Se sono uguali, $S$ è un sottospazio affine di dimensione $n - \rk A$. Dimensione $0$ vuol dire un punto solo; dimensione almeno $1$ vuol dire almeno un parametro libero, che può assumere **infiniti** valori in $\K$, e valori diversi danno soluzioni diverse.

| $\rk(A)$ | $\rk(A \mid b)$ | Soluzioni | Parametri |
|---|---|---|---|
| $r$ | $r + 1$ | nessuna | — |
| $n$ | $n$ | una sola | $0$ |
| $r < n$ | $r$ | infinite | $n - r$ |

> [!OLTRE] perché serve un campo infinito
> Nella parte di Matematica Discreta si lavora anche con i campi finiti, come $\Z_2 = \{0, 1\}$. Lì un parametro libero può assumere solo 2 valori, e un sistema con $h$ parametri ha esattamente $2^h$ soluzioni: per esempio $x + y = 1$ su $\Z_2$ ha le due soluzioni $(1, 0)$ e $(0, 1)$. Su $\R$ e $\C$, i campi dell'esame, questo non succede: la risposta «un numero finito, maggiore di 1» nei quiz è sempre sbagliata.

### Sistemi quadrati

> [!COROLLARIO] 12.8
> Se $A$ è una matrice quadrata (allora il numero di equazioni è uguale al numero di variabili), il sistema $Ax = b$ ha esattamente una soluzione se $\rk A = n \Leftrightarrow \det A \neq 0$. In questo caso $A$ è invertibile e la soluzione è $x = A^{-1}b$.

Pezzo per pezzo:

- $Ax = b$ è il sistema scritto con il prodotto riga per colonna (lezione L08): la riga $i$ di $A$ per il vettore colonna $x$ dà il primo membro dell'equazione $i$.
- $\rk A = n \Leftrightarrow \det A \neq 0$: il determinante è zero esattamente quando una colonna è combinazione delle altre (Proposizione 10.3, lezione L10), cioè quando le $n$ colonne non sono indipendenti.
- Se $\rk A = n$, anche $\rk(A \mid b) = n$: la matrice completa ha solo $n$ righe e il rango non può superare il numero di righe. Per il Corollario 12.7 c'è una sola soluzione.
- La formula: $A$ è invertibile (Proposizione 10.8), e moltiplicando $Ax = b$ a sinistra per $A^{-1}$ si ottiene $x = A^{-1}Ax = A^{-1}b$.

> [!ESEMPIO] Un sistema 2 × 2 risolto con l'inversa
> $\begin{cases} x + 2y = 5 \\ 3x + 4y = 6 \end{cases}$, cioè $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $b = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$.
> 1. $\det A = 1 \cdot 4 - 2 \cdot 3 = -2 \neq 0$: una sola soluzione.
> 2. Per le matrici $2 \times 2$: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac 1{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, quindi $A^{-1} = -\frac 12 \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ \frac 32 & -\frac 12 \end{pmatrix}$.
> 3. $x = A^{-1}b = \begin{pmatrix} -2 \cdot 5 + 1 \cdot 6 \\ \frac 32 \cdot 5 - \frac 12 \cdot 6 \end{pmatrix} = \begin{pmatrix} -4 \\ \frac 92 \end{pmatrix}$.
> 4. Controllo: $-4 + 2 \cdot \frac 92 = -4 + 9 = 5$ e $3 \cdot (-4) + 4 \cdot \frac 92 = -12 + 18 = 6$.

> [!TRAPPOLA] $\det A = 0$ non vuol dire «nessuna soluzione»
> Il Corollario 12.8 parla solo del caso $\det A \neq 0$. Se $\det A = 0$ le soluzioni sono **zero oppure infinite**, e dipende da $b$: bisogna confrontare $\rk(A)$ e $\rk(A \mid b)$. Con $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ ($\det A = 0$): con $b = (1, 1)$ le due equazioni sono uguali e le soluzioni sono infinite; con $b = (1, 2)$ le equazioni $x + y = 1$ e $x + y = 2$ si contraddicono e non ce n'è nessuna.

> [!OLTRE] il caso omogeneo, da tenere a mente per gli autovettori
> Per un sistema omogeneo $Ax = 0$ i due ranghi sono sempre uguali (la colonna di zeri non aggiunge niente): le soluzioni ci sono sempre e formano un sottospazio vettoriale di dimensione $n - \rk(A)$ (Martelli, Corollario 3.2.16). Se $A$ è quadrata, ci sono soluzioni **diverse da zero** se e solo se $\det A = 0$. Questa frase tornerà nelle lezioni L17–L18: gli autovettori sono proprio le soluzioni non nulle di $(A - \lambda I)x = 0$.

> [!NOTA] Collegamento con l'informatica: programmazione lineare e simplesso (p. 59)
> Le dispense accennano a un problema che si studia in un corso successivo di ottimizzazione: trovare il massimo di ${}^tc\,x$ tra i vettori con $Ax = b$ e $x \ge 0$ (**programmazione lineare**). Il **metodo del simplesso** usa tutti i concetti visti fin qui. Se $A$ ha $m$ righe e rango $m$, una *base* del simplesso è una scelta di $m$ colonne linearmente indipendenti di $A$: formano una matrice quadrata $A_B$ invertibile. Si mettono a zero le variabili delle altre colonne e si ricavano le variabili «di base» risolvendo $A_Bx_B = b$, cioè $x_B = A_B^{-1}b$.
>
> Un esempio piccolo: $A = \begin{pmatrix} 1 & 1 & 1 & 0 \\ 1 & -1 & 0 & 1 \end{pmatrix}$, $b = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$. Scegliendo le colonne 1 e 2, $A_B = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ ha determinante $-2 \neq 0$ e $x_B = A_B^{-1}b = (3, 1)$: il vettore $x = (3, 1, 0, 0)$ risolve $Ax = b$. Scegliendo le colonne 3 e 4, $A_B$ è l'identità e $x = (0, 0, 4, 2)$. Indipendenza, rango, matrici invertibili e sistemi lineari lavorano tutti insieme in uno degli algoritmi fondamentali dell'ottimizzazione.

## Sistemi con un parametro (p. 60)

All'esame i sistemi contengono spesso una lettera, di solito $k$, e la domanda è: **al variare di $k$**, quante soluzioni ci sono? Si usa Rouché–Capelli, con un'attenzione in più.

> [!ESEMPIO] 12.9 · Un sistema che dipende da $k$
> Consideriamo il sistema, dipendente da un parametro $k \in \R$,
> $$\begin{cases} x + ky = 4 - k \\ kx + 4y = 4 \end{cases}$$
> (a) Vogliamo sapere al variare di $k \in \R$ se ci sono soluzioni e, in caso affermativo, che dimensione hanno. (b) Vogliamo risolvere il sistema per $k = 1$.
>
> **(a)** Applichiamo l'algoritmo di Gauss su $(A \mid b)$, con la mossa $R_2 \to R_2 - kR_1$:
> $$\left(\begin{array}{cc|c} 1 & k & 4 - k \\ k & 4 & 4 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & k & 4 - k \\ 0 & 4 - k^2 & 4 - 4k + k^2 \end{array}\right)$$
> Il conto della seconda riga: $(k,\ 4,\ 4) - k\,(1,\ k,\ 4 - k) = (0,\ 4 - k^2,\ 4 - 4k + k^2)$. Per calcolare i ranghi basta fermarsi qui: Gauss–Jordan serve solo per scrivere le soluzioni.
>
> Notiamo che $4 - 4k + k^2 = (k - 2)^2$ e $4 - k^2 = (2 - k)(2 + k)$. La matrice è a scalini per ogni $k \in \R$ e ci sono sempre due pivot, tranne per $k = 2$, in cui ce n'è uno solo. Quindi il rango di $(A \mid b)$ è $1$ per $k = 2$ e $2$ per $k \neq 2$. La matrice dei coefficienti è diventata
> $$\begin{pmatrix} 1 & k \\ 0 & 4 - k^2 \end{pmatrix}$$
> e ha rango $1$ per $k = \pm 2$ e rango $2$ per $k \neq \pm 2$. Quindi:
> - se $k = -2$, allora $\rk(A \mid b) \neq \rk(A)$ e non ci sono soluzioni;
> - se $k = 2$, allora $\rk(A \mid b) = \rk(A) = 1$, quindi le soluzioni formano un sottospazio affine di $\R^2$ di dimensione $2 - 1 = 1$, cioè una retta affine: infinite soluzioni;
> - se $k \neq \pm 2$, allora $\rk(A \mid b) = \rk(A) = 2$, quindi le soluzioni formano un sottospazio affine di $\R^2$ di dimensione $2 - 2 = 0$, cioè un punto: una soluzione sola.
>
> **(b)** Per $k = 1$ la matrice ridotta diventa $\left(\begin{array}{cc|c} 1 & 1 & 3 \\ 0 & 3 & 1 \end{array}\right)$. Dalla seconda riga $3y = 1$, quindi $y = \frac 13$; dalla prima $x = 3 - y = 3 - \frac 13 = \frac 83$.

Per completare il quadro, i due casi speciali scritti per esteso:

- $k = -2$: la seconda riga diventa $(0,\ 4 - 4,\ 4 + 8 + 4) = (0, 0 \mid 16)$, cioè $0 = 16$. Nessuna soluzione.
- $k = 2$: la seconda riga diventa $(0, 0 \mid 0)$ e resta la sola equazione $x + 2y = 2$: con $y = t$, le soluzioni sono $(2 - 2t,\ t)$, cioè la retta $(2, 0) + \Span\big((-2, 1)\big)$.

Controllo di (b) nel sistema di partenza con $k = 1$: $\frac 83 + \frac 13 = 3 = 4 - 1$ e $\frac 83 + \frac 43 = 4$.

> [!OLTRE] la soluzione per ogni $k \neq \pm 2$, e un controllo con il determinante
> La matrice $A$ è quadrata e $\det A = 1 \cdot 4 - k \cdot k = 4 - k^2$: per il Corollario 12.8 c'è una sola soluzione esattamente quando $k \neq \pm 2$, come trovato sopra. Finendo i conti, per $k \neq \pm 2$:
> $$y = \frac{(k - 2)^2}{(2 - k)(2 + k)} = \frac{2 - k}{2 + k}, \qquad x = 4 - k - ky = \frac 8{2 + k}.$$
> Con $k = 1$ si ritrovano $x = \frac 83$ e $y = \frac 13$.

> [!METODO] Discutere un sistema con un parametro $k$
> 1. **Se $A$ è quadrata**, parti dal determinante: per i $k$ con $\det A \neq 0$ la soluzione è una sola (Corollario 12.8). Restano da studiare solo i valori che annullano $\det A$.
> 2. **Altrimenti** (o per controllo) fai Gauss su $(A \mid b)$ tenendo $k$ come una lettera. Scegli i pivot tra i numeri **senza** $k$ quando puoi: si evitano divisioni pericolose.
> 3. Guarda i pivot che contengono $k$: trova i valori di $k$ che li annullano. Sono i **casi speciali**.
> 4. Per ogni caso speciale **sostituisci il numero** nella matrice e rifai il conto: confronta $\rk(A)$ e $\rk(A \mid b)$.
> 5. Scrivi la conclusione per **tutti** i $k$: nessuna soluzione per…, infinite con … parametri per…, una sola per tutti gli altri valori.

> [!TRAPPOLA] Dividere per un'espressione che può valere zero
> Scrivere $y = \frac{(k - 2)^2}{4 - k^2}$ senza commenti è l'errore tipico: per $k = \pm 2$ quella divisione non si può fare, e sono proprio i casi interessanti. Ogni volta che dividi per un'espressione in $k$, prima metti da parte i valori che la annullano.

```widget gauss
titolo: Il sistema dell'appello del 05/02/2026 con $k = 1$ (prova anche $k = -1$ e $k = 2$)
matrice: 1 2 1 1; -1 1 -1 2; 1 1 1 0
modo: sistema
```

Nello strumento c'è la matrice completa del sistema $x + 2y + kz = 1$, $-x + y - kz = 2$, $kx + ky + z = k - 1$ (problema 11 dell'appello del 05/02/2026, svolto negli esercizi) con $k = 1$: infinite soluzioni. Sostituisci $k = -1$, cioè `1 2 -1 1; -1 1 1 2; -1 -1 1 -2`: compare la riga $0 = 1$. Con $k = 2$, cioè `1 2 2 1; -1 1 -2 2; 2 2 1 1`, la soluzione è una sola.

> [!OLTRE] dove trovarlo nel libro
> Tutta la lezione segue il libro di Martelli, **§3.2 «Teorema di Rouché–Capelli»** (pp. 85–93 del libro): sistema omogeneo associato e Proposizione 3.2.1 (pp. 85–86), sottospazi affini e giacitura (pp. 87–88, con gli Esempi 3.2.2 e 3.2.5), rango e pivot (Proposizione 3.2.9 e Corollario 3.2.10, p. 89), Rouché–Capelli con il Corollario 3.2.14 e l'esempio con il parametro (pp. 90–91), sistemi omogenei (Corollario 3.2.16, p. 91).

## Verso l'esame

La prova scritta di AG ha 10 quiz a 5 risposte (servono almeno 6 punti perché vengano corretti i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **Il problema da 11 punti sul sistema con parametro.** È uscito negli appelli del 07/02/2025, del 05/02/2026 e del 03/07/2026 (sempre il problema 11), con domande quasi fisse: (1) per quali $k$ la matrice dei coefficienti è invertibile, o quanto vale il suo determinante; (2) al variare di $k$, quante soluzioni ha il sistema; (3) le soluzioni per uno o due valori di $k$ dati. Due di questi problemi sono svolti per intero negli esercizi.
2. **Lo stesso tema nei problemi su un'applicazione lineare.** Negli appelli del 08/02/2024 e del 10/07/2025 (problema 12) si chiedeva di trovare **tutti** i vettori con $T(v) = w$ e i valori di $k$ per cui un vettore $w$ dipendente da $k$ sta nell'immagine di $T$, o per cui $T(v) = w$ ha infinite soluzioni: sono sistemi, e si risolvono con Rouché–Capelli (lezione L14).
3. **I quiz.** Oltre alla domanda «quante soluzioni?» (lezione L11), nell'appello del 07/09/2026 (domanda 3) si chiedeva per quale $k$ un sistema $3 \times 3$ non ha soluzioni; nell'appello del 10/07/2024 (domanda 6) bisognava riconoscere tutte le soluzioni del sistema dell'Esercizio 12.11 delle dispense.

> [!METODO] Il problema «discutere al variare di $k$», come va scritto sul foglio
> 1. **Determinante** (se $A$ è quadrata): calcolalo e **fattorizzalo**, per esempio $\det A = -3(k - 1)(k + 1)$. Prima conclusione: per $k$ diverso dalle radici, $A$ è invertibile e c'è **una sola** soluzione (Corollario 12.8).
> 2. **Casi speciali**: per ogni radice sostituisci il valore di $k$, scrivi la matrice completa numerica e riducila a scalini. Scrivi esplicitamente i due ranghi e cita il teorema: «$\rk(A) = 2 < 3 = \rk(A \mid b)$, quindi per Rouché–Capelli non ci sono soluzioni» oppure «$\rk(A) = \rk(A \mid b) = 2 < 3 = n$: infinite soluzioni, che dipendono da $3 - 2 = 1$ parametro».
> 3. **Soluzioni richieste**: Gauss–Jordan sulla matrice numerica, parametri alle colonne senza pivot, e un **controllo** sostituendo nel sistema di partenza.
> 4. **Riassunto finale** in una riga per ogni caso: i correttori cercano la conclusione, falla trovare.

> [!TRAPPOLA] Gli errori più frequenti
> - Concludere «nessuna soluzione» solo perché $\det A = 0$: con $\det A = 0$ possono esserci anche infinite soluzioni (nell'appello del 05/02/2026: per $k = 1$ infinite, per $k = -1$ nessuna, e il determinante è zero in tutti e due i casi).
> - Dimenticare un caso speciale, per esempio perché si è diviso per $k - 1$ senza dirlo.
> - Confondere $n$ (il numero di incognite) con il numero di equazioni nel calcolo di $n - \rk(A)$.
> - Dire che le soluzioni di $Ax = b$ con $b \neq 0$ formano un sottospazio vettoriale: sono un sottospazio **affine**.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: $S = x_0 + S_0$; l'enunciato di Rouché–Capelli con la tabella «$0$ / $1$ / $\infty$» del Corollario 12.7; «$A$ quadrata: $\det A \neq 0 \Leftrightarrow$ una sola soluzione, $x = A^{-1}b$; $\det A = 0 \Rightarrow$ zero o infinite»; la formula dell'inversa $2 \times 2$; i cinque passi del metodo per il parametro.

## Quiz

```quiz
D: Sia $Ax = b$ un sistema lineare qualsiasi e $Ax = 0$ il suo sistema omogeneo associato. Quale affermazione è sempre vera?
+ Il sistema omogeneo ha almeno la soluzione $x = 0$.
- Il sistema omogeneo ha esattamente una soluzione.
- Il sistema omogeneo ha le stesse soluzioni di $Ax = b$.
- Se $Ax = b$ non ha soluzioni, neanche il sistema omogeneo ne ha.
- Le soluzioni di $Ax = b$ formano sempre un sottospazio vettoriale.
= $A \cdot 0 = 0$, quindi lo zero risolve sempre il sistema omogeneo (Proposizione 12.2). Può avere anche altre soluzioni (non «esattamente una»), ha soluzioni diverse da $Ax = b$ se $b \neq 0$, e non è mai impossibile. Le soluzioni di $Ax = b$ con $b \neq 0$ non contengono lo zero: non sono un sottospazio vettoriale.

D: In un sistema in 3 incognite risulta $\rk(A) = 2$ e $\rk(A \mid b) = 3$. Il sistema ha:
+ Zero soluzioni.
- Una soluzione.
- Infinite soluzioni, che dipendono da 1 parametro.
- Infinite soluzioni, che dipendono da 2 parametri.
- Un numero finito di soluzioni, maggiore di 1.
= Simile all'appello del 10/06/2024, domanda 7. I due ranghi sono diversi: per Rouché–Capelli non ci sono soluzioni. Nella forma a scalini c'è un pivot nell'ultima colonna.

D: Un sistema di 3 equazioni in 4 incognite ha $\rk(A) = \rk(A \mid b) = 2$. Le sue soluzioni formano:
+ Un sottospazio affine di dimensione 2.
- Un sottospazio affine di dimensione 1.
- Un sottospazio affine di dimensione 3.
- Un solo punto.
- L'insieme vuoto.
= Simile all'appello del 16/01/2025, domanda 10. I ranghi sono uguali, quindi ci sono soluzioni; la dimensione è $n - \rk(A) = 4 - 2 = 2$. Il numero di equazioni (3) non entra nel conto.

D: Per quale $k \in \R$ il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 2 & k & 1 \\ 2 & 3 & -1 & 3 \\ 3 & 2 & 1 & 0 \end{array}\right)$ non ha soluzioni reali?
- Il sistema ha sempre soluzioni reali.
- $k = \pm 2$
+ $k = -1$
- $k = 0$
- $k \in \{1, 2, 3\}$
= Appello del 07/09/2026, domanda 3. $\det A = 1 \cdot (3 + 2) - 2 \cdot (2 + 3) + k \cdot (4 - 9) = -5 - 5k = -5(k + 1)$. Per $k \neq -1$ la soluzione è una sola. Per $k = -1$: $R_2 - 2R_1 = (0, -1, 1 \mid 1)$, $R_3 - 3R_1 = (0, -4, 4 \mid -3)$, $R_3 - 4R_2 = (0, 0, 0 \mid -7)$: $\rk(A) = 2 < 3 = \rk(A \mid b)$, nessuna soluzione.

D: Il vettore $(1, 2, 3)$ è una soluzione di $Ax = b$ e le soluzioni del sistema omogeneo associato sono $S_0 = \Span\big((1, 0, -1)\big)$. Quale di questi vettori è un'altra soluzione di $Ax = b$?
+ $(3, 2, 1)$
- $(1, 0, -1)$
- $(2, 4, 6)$
- $(0, 0, 0)$
- $(2, 2, 4)$
= Per la Proposizione 12.3 le soluzioni sono $(1, 2, 3) + t(1, 0, -1) = (1 + t,\ 2,\ 3 - t)$. Con $t = 2$ si ottiene $(3, 2, 1)$. Gli altri vettori non hanno questa forma: la seconda coordinata deve essere $2$ e la somma di prima e terza deve essere $4$.

D: Sia $A \in M(3, \R)$ con $\det A = 5$. Allora il sistema $Ax = b$:
+ Ha esattamente una soluzione per ogni $b \in \R^3$.
- Ha infinite soluzioni per ogni $b$.
- Per qualche $b$ non ha soluzioni.
- Ha soluzioni solo se $b = 0$.
- Ha esattamente 5 soluzioni.
= Simile all'appello del 07/02/2025, problema 11 (punto 1). Con $\det A \neq 0$ la matrice è invertibile e, per il Corollario 12.8, per ogni $b$ c'è una sola soluzione, $x = A^{-1}b$. Il valore del determinante non conta le soluzioni.

D: Sia $A \in M(2, \R)$ con $\det A = 0$. Allora il sistema $Ax = b$:
+ Ha zero oppure infinite soluzioni, a seconda di $b$.
- Non ha mai soluzioni.
- Ha sempre infinite soluzioni.
- Ha sempre una sola soluzione.
- Ha esattamente due soluzioni.
= Con $\det A = 0$ si ha $\rk(A) < 2$: se $\rk(A \mid b) = \rk(A)$ le soluzioni sono infinite, altrimenti non ce ne sono. Esempio: con $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $b = (1, 1)$ dà infinite soluzioni e $b = (1, 2)$ nessuna.

D: Per quale valore di $k \in \R$ il sistema $\begin{cases} x + ky = 1 \\ kx + y = 1 \end{cases}$ ha infinite soluzioni?
+ $k = 1$
- $k = -1$
- $k = 0$
- Per ogni $k \neq \pm 1$.
- Per nessun valore di $k$.
= Simile all'Esempio 12.9 e all'appello del 07/09/2026, domanda 3. $\det A = 1 - k^2$: per $k \neq \pm 1$ una sola soluzione. Con $k = 1$ le due equazioni sono entrambe $x + y = 1$: infinite soluzioni. Con $k = -1$ diventano $x - y = 1$ e $-x + y = 1$; sommandole si ottiene $0 = 2$: nessuna soluzione.

D: Le soluzioni di un sistema $Ax = b$ in 5 incognite, con $b \neq 0$ e $\rk(A) = \rk(A \mid b) = 3$, formano:
+ Un sottospazio affine di dimensione 2 che non passa per l'origine.
- Un sottospazio vettoriale di dimensione 2.
- Un sottospazio affine di dimensione 3.
- Un sottospazio vettoriale di dimensione 3.
- Un punto.
= Rouché–Capelli: $\dim S = 5 - 3 = 2$. Siccome $b \neq 0$, lo zero non è una soluzione ($A \cdot 0 = 0 \neq b$), quindi $S$ è un sottospazio affine ma non vettoriale.

D: Qual è la dimensione dello spazio delle soluzioni del sistema $\begin{cases} x + y + z + w = 1 \\ x - y + z - w = 3 \end{cases}$ in $\R^4$?
N: 2
= Le righe $(1, 1, 1, 1)$ e $(1, -1, 1, -1)$ non sono proporzionali: $\rk(A) = 2$, e anche $\rk(A \mid b) = 2$ (le righe sono solo due). Quindi $\dim S = 4 - 2 = 2$.
```

## Esercizi

::: esercizio base Esercizio 12.10 delle dispense: quante soluzioni?
Quante soluzioni ha il sistema lineare con matrice completa
$$\left(\begin{array}{ccc|c} 1 & 3 & 5 & 2 \\ 7 & 9 & 11 & 2 \\ 13 & 15 & 17 & 0 \end{array}\right)?$$
::: soluzione
**Gauss.** $R_2 \to R_2 - 7R_1$ e $R_3 \to R_3 - 13R_1$:
$$(7, 9, 11, 2) - 7(1, 3, 5, 2) = (0, -12, -24, -12), \qquad (13, 15, 17, 0) - 13(1, 3, 5, 2) = (0, -24, -48, -26).$$
Poi $R_3 \to R_3 - 2R_2$: $(0, -24, -48, -26) - 2(0, -12, -24, -12) = (0, 0, 0, -2)$.
$$\left(\begin{array}{ccc|c} 1 & 3 & 5 & 2 \\ 0 & -12 & -24 & -12 \\ 0 & 0 & 0 & -2 \end{array}\right)$$
**Ranghi.** Nella parte $A$ ci sono 2 pivot: $\rk(A) = 2$. La matrice completa ha un pivot anche nell'ultima colonna: $\rk(A \mid b) = 3$. Per Rouché–Capelli il sistema **non ha soluzioni**: l'ultima riga dice $0 = -2$.

Nota: la terza riga di $A$ è $2 \cdot (7, 9, 11) - (1, 3, 5) = (13, 15, 17)$, ma per i termini noti $2 \cdot 2 - 2 = 2 \neq 0$. È questa incoerenza che rende il sistema impossibile.
:::

::: esercizio medio Esercizio 12.11 delle dispense: tutte le soluzioni
Trova tutte le soluzioni del sistema lineare
$$\begin{cases} 2x - y - z = 3 \\ x - y + z = 2 \\ 3x - y - 3z = 4 \end{cases}$$
::: soluzione
**Gauss.** Scambio $R_1 \leftrightarrow R_2$ per avere un pivot uguale a $1$, poi tolgo multipli della prima riga:
$$\left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 2 & -1 & -1 & 3 \\ 3 & -1 & -3 & 4 \end{array}\right) \xrightarrow[R_3 \to R_3 - 3R_1]{R_2 \to R_2 - 2R_1} \left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 0 & 1 & -3 & -1 \\ 0 & 2 & -6 & -2 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 0 & 1 & -3 & -1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
I conti: $(2, -1, -1, 3) - 2(1, -1, 1, 2) = (0, 1, -3, -1)$; $(3, -1, -3, 4) - 3(1, -1, 1, 2) = (0, 2, -6, -2)$; la terza riga è il doppio della seconda.

**Rouché–Capelli.** $\rk(A) = \rk(A \mid b) = 2 < 3$: infinite soluzioni, un parametro.

**Soluzioni.** Gauss–Jordan: $R_1 \to R_1 + R_2$ dà $(1, 0, -2, 1)$. Con $z = t$: $y = -1 + 3t$ e $x = 1 + 2t$.
$$(x, y, z) = (1 + 2t,\ -1 + 3t,\ t) = (1, -1, 0) + t\,(2, 3, 1), \qquad t \in \R.$$
**Controllo** con $t = 1$, cioè $(3, 2, 1)$: $6 - 2 - 1 = 3$; $3 - 2 + 1 = 2$; $9 - 2 - 3 = 4$.

Le soluzioni sono una retta di $\R^3$: il punto $(1, -1, 0)$ (soluzione particolare) più $S_0 = \Span\big((2, 3, 1)\big)$. Questo stesso sistema era la domanda 6 dell'appello del 10/07/2024, con la risposta $x = 2t + 1$, $y = 3t - 1$, $z = t$.
:::

::: esercizio medio Soluzione particolare e sistema omogeneo
Per il sistema $\begin{cases} x + 2y - z = 3 \\ 2x + 4y + z = 3 \end{cases}$ trova: (a) tutte le soluzioni $S$; (b) le soluzioni $S_0$ del sistema omogeneo associato; (c) una soluzione particolare, e verifica che $S = x_0 + S_0$.
::: soluzione
(a) $R_2 \to R_2 - 2R_1$: $(2, 4, 1, 3) - 2(1, 2, -1, 3) = (0, 0, 3, -3)$, quindi $z = -1$. La colonna di $y$ non ha pivot: $y = t$, e dalla prima riga $x = 3 - 2t + z = 2 - 2t$.
$$S = \{(2 - 2t,\ t,\ -1) \mid t \in \R\} = (2, 0, -1) + \Span\big((-2, 1, 0)\big).$$
(b) Il sistema omogeneo ha la stessa $A$ e termini noti nulli: con le stesse mosse, $3z = 0$, quindi $z = 0$, e $x = -2t$, $y = t$:
$$S_0 = \Span\big((-2, 1, 0)\big).$$
Controllo: $-2 + 2 - 0 = 0$ e $-4 + 4 + 0 = 0$.

(c) Con $t = 0$: $x_0 = (2, 0, -1)$. Controllo: $2 + 0 + 1 = 3$ e $4 + 0 - 1 = 3$. Allora $x_0 + S_0 = \{(2, 0, -1) + t(-2, 1, 0)\} = \{(2 - 2t, t, -1)\} = S$. Anche $(0, 1, -1)$ (con $t = 1$) sarebbe una soluzione particolare valida.
:::

::: esercizio base Sottospazio o no?
Stabilisci se sono sottospazi vettoriali di $\R^3$: (a) $U = \{(x, y, z) \mid x + y - z = 0\}$; (b) $V = \{(x, y, z) \mid x + y - z = 1\}$. Per quello che non lo è, di' che cosa è.
::: soluzione
(a) $U$ è l'insieme delle soluzioni di un sistema **omogeneo** (una sola equazione, termine noto $0$): per la Proposizione 12.2 è un sottospazio vettoriale. La sua dimensione è $3 - \rk(1\ 1\ {-1}) = 3 - 1 = 2$: un piano per l'origine.

(b) $V$ non contiene lo zero: $0 + 0 - 0 = 0 \neq 1$. Quindi non è un sottospazio vettoriale. Non è chiuso neanche per somma: $(1, 0, 0)$ e $(0, 1, 0)$ stanno in $V$, ma $(1, 1, 0)$ dà $1 + 1 - 0 = 2 \neq 1$. È un **sottospazio affine**: $V = (1, 0, 0) + U$, un piano parallelo a $U$ che non passa per l'origine, di dimensione 2.
:::

::: esercizio base Il rango con i pivot
Calcola il rango di $A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 3 \\ 3 & 6 & 1 & 4 \end{pmatrix}$ e trova un insieme massimo di colonne indipendenti.
::: soluzione
$R_2 \to R_2 - 2R_1$ dà $(0, 0, 1, 1)$; $R_3 \to R_3 - 3R_1$ dà $(0, 0, 1, 1)$; $R_3 \to R_3 - R_2$ dà la riga nulla:
$$\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$
Due pivot: $\rk(A) = 2$. I pivot sono nelle colonne 1 e 3, quindi le colonne 1 e 3 **della matrice di partenza**, $(1, 2, 3)$ e $(0, 1, 1)$, sono indipendenti e generano lo spazio delle colonne. Infatti $A^2 = 2A^1$ e $A^4 = A^1 + A^3$: $(1, 3, 4) = (1, 2, 3) + (0, 1, 1)$. (Le mosse di Gauss sulle righe conservano le relazioni tra le colonne, per questo si leggono sulla forma a scalini: lo vedrai meglio nella lezione L13.)
:::

::: esercizio medio Un sistema quadrato con l'inversa
Risolvi $\begin{cases} 2x + y = 3 \\ 5x + 3y = 7 \end{cases}$ usando il Corollario 12.8, poi usa la stessa inversa per risolvere il sistema con termini noti $(1, 0)$.
::: soluzione
$A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$, $\det A = 6 - 5 = 1 \neq 0$: una sola soluzione per ogni termine noto.
$$A^{-1} = \frac 11 \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}, \qquad A^{-1}\begin{pmatrix} 3 \\ 7 \end{pmatrix} = \begin{pmatrix} 9 - 7 \\ -15 + 14 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}.$$
Controllo: $4 - 1 = 3$ e $10 - 3 = 7$.

Con $b = (1, 0)$: $A^{-1}b = (3, -5)$, cioè la prima colonna di $A^{-1}$. Controllo: $6 - 5 = 1$ e $15 - 15 = 0$. Il vantaggio dell'inversa: calcolata una volta, risolve il sistema per **qualsiasi** termine noto con un solo prodotto.
:::

::: esercizio difficile Un sistema con parametro (Foglio 2 del tutorato, esercizio 10)
Risolvi, al variare di $k \in \R$, il sistema $\begin{cases} x + 2y + 2z = 1 \\ x + 4y + 3z = k + 1 \\ -x + 2y + kz = 2 \end{cases}$
::: soluzione
**Gauss con $k$ come lettera.** $R_2 \to R_2 - R_1$ e $R_3 \to R_3 + R_1$ (i pivot scelti non contengono $k$):
$$\left(\begin{array}{ccc|c} 1 & 2 & 2 & 1 \\ 0 & 2 & 1 & k \\ 0 & 4 & k + 2 & 3 \end{array}\right) \xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 2 & 2 & 1 \\ 0 & 2 & 1 & k \\ 0 & 0 & k & 3 - 2k \end{array}\right)$$
I conti: $(1, 4, 3, k + 1) - (1, 2, 2, 1) = (0, 2, 1, k)$; $(-1, 2, k, 2) + (1, 2, 2, 1) = (0, 4, k + 2, 3)$; $(0, 4, k + 2, 3) - 2(0, 2, 1, k) = (0, 0, k, 3 - 2k)$.

**Caso speciale $k = 0$.** L'ultima riga è $(0, 0, 0 \mid 3)$: $\rk(A) = 2 < 3 = \rk(A \mid b)$, **nessuna soluzione**.

**Caso $k \neq 0$.** Tre pivot: una sola soluzione. Dal basso:
$$z = \frac{3 - 2k}k, \qquad y = \frac{k - z}2 = \frac{k^2 + 2k - 3}{2k} = \frac{(k + 3)(k - 1)}{2k}, \qquad x = 1 - 2y - 2z = \frac{-k^2 + 3k - 3}k.$$
Per il conto di $x$: $1 - \frac{k^2 + 2k - 3}k - \frac{6 - 4k}k = \frac{k - k^2 - 2k + 3 - 6 + 4k}k = \frac{-k^2 + 3k - 3}k$.

**Controllo** con $k = 1$: $x = -1$, $y = 0$, $z = 1$. Nel sistema: $-1 + 0 + 2 = 1$; $-1 + 0 + 3 = 2 = k + 1$; $1 + 0 + 1 = 2$. Coerente anche con il determinante: $\det A = 2k$ (prodotto dei pivot $1 \cdot 2 \cdot k$, visto che ho usato solo mosse di tipo III), nullo solo per $k = 0$.
:::

::: esercizio esame Come all'esame: appello del 05/02/2026, problema 11
Si consideri il sistema lineare nelle incognite $x, y, z$, con un parametro $k \in \R$:
$$\begin{cases} x + 2y + kz = 1 \\ -x + y - kz = 2 \\ kx + ky + z = k - 1 \end{cases}$$
(1) Calcolare il determinante della matrice $A$ dei coefficienti. (2) Al variare di $k \in \R$, discutere quante soluzioni ammette il sistema. (3) Per $k = 1$, trovare tutte le soluzioni. (4) Per $k = 2$, trovare tutte le soluzioni.
::: soluzione
**(1)** Con $R_2 \to R_2 + R_1$ (che non cambia il determinante, lezione L10) la seconda riga diventa $(0, 3, 0)$:
$$\det \begin{pmatrix} 1 & 2 & k \\ -1 & 1 & -k \\ k & k & 1 \end{pmatrix} = \det \begin{pmatrix} 1 & 2 & k \\ 0 & 3 & 0 \\ k & k & 1 \end{pmatrix} = 3 \cdot \det \begin{pmatrix} 1 & k \\ k & 1 \end{pmatrix} = 3(1 - k^2).$$
Ho sviluppato lungo la seconda riga: l'unico elemento non nullo è il $3$ in posizione $(2, 2)$, con segno $(-1)^{2 + 2} = +1$. Quindi $\det A = 3(1 - k)(1 + k)$.

**(2)** Per $k \neq \pm 1$, $\det A \neq 0$: **una sola soluzione** (Corollario 12.8). Per i due casi speciali riduco la matrice completa con $k$ generico: $R_2 \to R_2 + R_1$ dà $(0, 3, 0 \mid 3)$; $R_3 \to R_3 - kR_1$ dà $(0, -k, 1 - k^2 \mid -1)$; infine $R_3 \to R_3 + \frac k3 R_2$ dà $(0, 0, 1 - k^2 \mid k - 1)$.
$$\left(\begin{array}{ccc|c} 1 & 2 & k & 1 \\ 0 & 3 & 0 & 3 \\ 0 & 0 & 1 - k^2 & k - 1 \end{array}\right)$$
- $k = 1$: l'ultima riga è $(0, 0, 0 \mid 0)$. $\rk(A) = \rk(A \mid b) = 2 < 3$: **infinite** soluzioni, con $3 - 2 = 1$ parametro.
- $k = -1$: l'ultima riga è $(0, 0, 0 \mid -2)$. $\rk(A) = 2 < 3 = \rk(A \mid b)$: **nessuna** soluzione.

**(3)** $k = 1$: le righe non nulle dicono $x + 2y + z = 1$ e $3y = 3$. Quindi $y = 1$ e, con $z = t$, $x = 1 - 2 - t = -1 - t$:
$$(x, y, z) = (-1 - t,\ 1,\ t), \qquad t \in \R.$$
Controllo con $t = 0$, cioè $(-1, 1, 0)$, nel sistema con $k = 1$: $-1 + 2 + 0 = 1$; $1 + 1 - 0 = 2$; $-1 + 1 + 0 = 0 = k - 1$.

**(4)** $k = 2$: l'ultima riga è $(0, 0, -3 \mid 1)$, quindi $z = -\frac 13$; poi $y = 1$ e $x = 1 - 2y - 2z = 1 - 2 + \frac 23 = -\frac 13$:
$$(x, y, z) = \left(-\tfrac 13,\ 1,\ -\tfrac 13\right).$$
Controllo: $-\frac 13 + 2 - \frac 23 = 1$; $\frac 13 + 1 + \frac 23 = 2$; $-\frac 23 + 2 - \frac 13 = 1 = k - 1$.
:::

::: esercizio esame Come all'esame: appello del 03/07/2026, problema 11
Si consideri il sistema lineare
$$\begin{cases} x + ky + z = 1 \\ (k + 1)x + (k + 1)y + 2z = k + 1 \\ x + y + kz = k^2 \end{cases}$$
(1) Determinare per quali $k \in \R$ la matrice dei coefficienti è invertibile. (2) Al variare di $k$, discutere il numero di soluzioni. (3) Trovare l'insieme delle soluzioni nei casi $k = 0$ e $k = 1$.
::: soluzione
**(1)** Sviluppo lungo la prima riga:
$$\det A = 1 \cdot \big((k + 1)k - 2\big) - k \cdot \big((k + 1)k - 2\big) + 1 \cdot \big((k + 1) - (k + 1)\big) = (1 - k)(k^2 + k - 2).$$
Siccome $k^2 + k - 2 = (k + 2)(k - 1)$, si ha $\det A = -(k - 1)^2(k + 2)$. La matrice è **invertibile per $k \neq 1$ e $k \neq -2$**.

**(2)** Per $k \neq 1, -2$: **una sola soluzione**. Casi speciali:
- $k = 1$: le tre equazioni diventano $x + y + z = 1$, $2x + 2y + 2z = 2$, $x + y + z = 1$, tutte la stessa. $\rk(A) = \rk(A \mid b) = 1$: **infinite** soluzioni, con $3 - 1 = 2$ parametri.
- $k = -2$: la matrice completa è $\left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ -1 & -1 & 2 & -1 \\ 1 & 1 & -2 & 4 \end{array}\right)$. Con $R_2 \to R_2 + R_1$ viene $(0, -3, 3 \mid 0)$, con $R_3 \to R_3 - R_1$ viene $(0, 3, -3 \mid 3)$, e $R_3 \to R_3 + R_2$ dà $(0, 0, 0 \mid 3)$. $\rk(A) = 2 < 3 = \rk(A \mid b)$: **nessuna** soluzione.

**(3)** $k = 0$: il sistema è $x + z = 1$, $x + y + 2z = 1$, $x + y = 0$. Dalla terza $y = -x$; nella seconda $x - x + 2z = 1$, quindi $z = \frac 12$; dalla prima $x = \frac 12$ e quindi $y = -\frac 12$. Soluzione unica $\left(\frac 12, -\frac 12, \frac 12\right)$; controllo nella seconda: $\frac 12 - \frac 12 + 1 = 1$.

$k = 1$: resta la sola equazione $x + y + z = 1$. Colonne senza pivot: $y = s$, $z = t$:
$$S = \{(1 - s - t,\ s,\ t) \mid s, t \in \R\} = (1, 0, 0) + \Span\big((-1, 1, 0),\ (-1, 0, 1)\big),$$
un piano affine di $\R^3$.
:::

::: esercizio esame Come all'esame: quando ci sono infinite soluzioni
Determina tutti i valori di $k \in \R$ per cui il sistema $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = k \\ x + 3y + 5z = k^2 \end{cases}$ ha infinite soluzioni, e scrivile. Per gli altri valori quante soluzioni ci sono?
::: soluzione
Qui il parametro è solo nei termini noti, e la matrice dei coefficienti non è invertibile: $\det A = 0$ per ogni $k$ (la terza colonna è $2A^2 - A^1$). Serve Gauss.
$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & k \\ 1 & 3 & 5 & k^2 \end{array}\right) \xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & k - 1 \\ 0 & 2 & 4 & k^2 - 1 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & k - 1 \\ 0 & 0 & 0 & (k - 1)^2 \end{array}\right)$$
L'ultimo termine: $k^2 - 1 - 2(k - 1) = k^2 - 2k + 1 = (k - 1)^2$.

- $\rk(A) = 2$ per ogni $k$.
- Se $k \neq 1$, $(k - 1)^2 \neq 0$: $\rk(A \mid b) = 3$, **nessuna** soluzione.
- Se $k = 1$: $\rk(A \mid b) = 2$, **infinite** soluzioni con $3 - 2 = 1$ parametro. Le righe dicono $x + y + z = 1$ e $y + 2z = 0$: con $z = t$, $y = -2t$ e $x = 1 + 2t - t = 1 + t$.
$$S = \{(1 + t,\ -2t,\ t) \mid t \in \R\}, \qquad k = 1.$$
Controllo con $t = 1$, cioè $(2, -2, 1)$: $2 - 2 + 1 = 1$; $2 - 4 + 3 = 1 = k$; $2 - 6 + 5 = 1 = k^2$. Non esiste nessun $k$ con una sola soluzione. Lo schema è quello del problema 12 (punto 3) dell'appello del 10/07/2025.
:::

## Domande di ripasso

::: domanda Che cos'è il sistema omogeneo associato a un sistema lineare?
È il sistema con gli stessi coefficienti $a_{ij}$ e tutti i termini noti uguali a zero. Se il sistema di partenza ha matrice completa $(A \mid b)$, l'omogeneo ha matrice $(A \mid 0)$, indicata anche solo con $A$.
:::

::: domanda Perché le soluzioni $S_0$ del sistema omogeneo formano un sottospazio?
Perché verificano i tre assiomi: $0$ è una soluzione; la somma di due soluzioni è una soluzione ($0 + 0 = 0$ in ogni equazione); un multiplo di una soluzione è una soluzione ($\lambda \cdot 0 = 0$).
:::

::: domanda Perché, se $b \neq 0$, l'insieme $S$ delle soluzioni di $Ax = b$ non è un sottospazio?
Perché non contiene l'origine: sostituendo $x = 0$ in un'equazione con $b_i \neq 0$ si ottiene $0 = b_i$, falso. Inoltre la somma di due soluzioni risolve $Ax = 2b$, non $Ax = b$.
:::

::: domanda Come si ottengono tutte le soluzioni a partire da una sola?
Si aggiungono alla soluzione particolare $x$ tutte le soluzioni del sistema omogeneo: $S = x + S_0$ (Proposizione 12.3). Qualsiasi soluzione può fare da soluzione particolare.
:::

::: domanda Che cos'è un sottospazio affine e qual è la sua dimensione?
Un insieme $x + W = \{x + v \mid v \in W\}$, con $x$ un punto fissato e $W$ un sottospazio vettoriale: $W$ traslato di $x$. La sua dimensione è $\dim W$. Punti, rette e piani qualsiasi sono sottospazi affini di dimensione 0, 1 e 2.
:::

::: domanda Come si scrive un sistema come combinazione delle colonne, e che cosa se ne ricava?
$x_1A^1 + \cdots + x_nA^n = b$. Il sistema ha soluzioni se e solo se $b$ è combinazione lineare delle colonne di $A$, cioè $b \in \Span(A^1, \dots, A^n)$.
:::

::: domanda Come si calcola il rango con Gauss, e perché funziona?
Si riduce la matrice a scalini e si contano i pivot. Funziona perché le mosse di Gauss non cambiano lo spazio generato dalle righe (quindi neanche il rango), e nella forma ridotta le colonne dei pivot sono vettori della base canonica che generano tutte le altre colonne.
:::

::: domanda Che cosa dice il teorema di Rouché–Capelli?
Il sistema $Ax = b$ ha soluzioni se e solo se $\rk(A \mid b) = \rk(A)$. In questo caso le soluzioni formano un sottospazio affine di $\K^n$ di dimensione $n - \rk(A)$, dove $n$ è il numero di incognite.
:::

::: domanda Perché un sistema reale non può avere esattamente due soluzioni?
Perché se ha più di una soluzione, per Rouché–Capelli le soluzioni formano un sottospazio affine di dimensione almeno 1: c'è un parametro libero che può prendere infiniti valori reali. Quindi le soluzioni sono 0, 1 o infinite (Corollario 12.7).
:::

::: domanda Che cosa si può dire di un sistema quadrato $Ax = b$ con $\det A \neq 0$? E con $\det A = 0$?
Con $\det A \neq 0$: una sola soluzione per ogni $b$, $x = A^{-1}b$ (Corollario 12.8). Con $\det A = 0$: zero oppure infinite soluzioni, a seconda di $b$; si decide confrontando $\rk(A)$ e $\rk(A \mid b)$.
:::

::: domanda Come si discute un sistema con un parametro $k$?
Se $A$ è quadrata si parte da $\det A$: per i $k$ che non lo annullano la soluzione è una sola. Altrimenti si fa Gauss tenendo $k$ come lettera. I valori di $k$ che annullano il determinante (o un pivot) si studiano a parte, sostituendoli e confrontando i due ranghi.
:::

::: domanda Come si trova una soluzione particolare e una base di $S_0$ dalla soluzione generale?
Si scrive la soluzione generale in forma vettoriale $x_0 + t_1v_1 + \cdots + t_hv_h$: con tutti i parametri a zero si ha la soluzione particolare $x_0$, e i vettori $v_1, \dots, v_h$ sono una base di $S_0$.
:::

## Glossario

```glossario
Sistema omogeneo | Sistema lineare con tutti i termini noti uguali a zero.
Sistema omogeneo associato | Lo stesso sistema con i termini noti messi a zero; matrice $(A \mid 0)$, o anche solo $A$.
$S$ e $S_0$ | Gli insiemi delle soluzioni del sistema di partenza e del suo omogeneo associato.
Soluzione particolare | Una soluzione qualsiasi, fissata, del sistema $Ax = b$.
Sottospazio affine | Insieme $x + W = \{x + v \mid v \in W\}$ con $W$ sottospazio vettoriale: $W$ traslato di $x$.
Giacitura | Il sottospazio vettoriale $W$ di un sottospazio affine $x + W$; per le soluzioni di un sistema è $S_0$.
Dimensione di un sottospazio affine | La dimensione della sua giacitura $W$.
Retta e piano affini | Sottospazi affini di dimensione 1 e 2.
Colonne $A^1, \dots, A^n$ | Le colonne della matrice $A$; il sistema si scrive $x_1A^1 + \cdots + x_nA^n = b$.
Rango $\rk(A)$ | La dimensione dello spazio generato dalle colonne; si calcola contando i pivot di una forma a scalini.
Teorema di Rouché–Capelli | Il sistema ha soluzioni se e solo se $\rk(A \mid b) = \rk(A)$; allora le soluzioni formano un sottospazio affine di dimensione $n - \rk(A)$.
Corollario 12.7 | Su un campo infinito le soluzioni sono $0$, $1$ oppure infinite.
Sistema quadrato | Sistema con tante equazioni quante incognite: $A$ è una matrice $n \times n$.
Corollario 12.8 | Se $A$ è quadrata con $\det A \neq 0$, il sistema $Ax = b$ ha una sola soluzione, $x = A^{-1}b$.
Parametro di un sistema | Lettera (di solito $k$) nei coefficienti o nei termini noti; si discute il sistema al variare di $k$.
Caso speciale | Valore del parametro che annulla il determinante o un pivot: va studiato a parte.
```

## Checklist

```checklist
- So scrivere il sistema omogeneo associato e dimostrare che le sue soluzioni formano un sottospazio.
- So spiegare perché le soluzioni di $Ax = b$ con $b \neq 0$ non formano un sottospazio vettoriale.
- So usare $S = x_0 + S_0$: trovo una soluzione particolare e le soluzioni dell'omogeneo dalla soluzione generale.
- So dire che cos'è un sottospazio affine e qual è la sua dimensione, con esempi in $\R^2$ e $\R^3$.
- So riscrivere un sistema come combinazione delle colonne e dire quando ha soluzioni.
- So calcolare il rango contando i pivot e spiegare perché le mosse di Gauss non lo cambiano.
- So enunciare il teorema di Rouché–Capelli e usarlo per contare soluzioni e parametri.
- So spiegare perché le soluzioni sono 0, 1 o infinite (Corollario 12.7).
- So risolvere un sistema quadrato con $\det A \neq 0$ usando l'inversa, e so che con $\det A = 0$ le soluzioni sono zero o infinite.
- So discutere un sistema con un parametro, senza dimenticare i casi speciali.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 12 «Sistemi Lineari II», pp. 56–61: le sezioni 12.A–12.C sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni, teorema, corollari ed esempi mantengono la loro numerazione (Definizioni 12.1 e 12.5, Proposizioni 12.2 e 12.3, Teorema 12.6, Corollari 12.7 e 12.8, Esempi 12.4 e 12.9, Esercizi 12.10 e 12.11), compreso il riquadro «Collegamento con l'informatica» sulla programmazione lineare.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §3.2 «Teorema di Rouché–Capelli» (pp. 85–93), in particolare gli Esempi 3.2.2 e 3.2.5, la giacitura, la Proposizione 3.2.9 e il Corollario 3.2.16 sui sistemi omogenei.
- **Appelli d'esame** di Algebra lineare 2023/24–2025/26 con soluzioni ufficiali (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): riportati la domanda 3 del 07/09/2026 e i problemi 11 del 05/02/2026 e del 03/07/2026; citati il problema 11 del 07/02/2025, i problemi 12 del 08/02/2024 e del 10/07/2025 e le domande del 10/06/2024, del 10/07/2024 e del 16/01/2025. Le soluzioni qui sono scritte da capo. L'esercizio con parametro è l'esercizio 10 del Foglio 2 del tutorato (Moodle MDAG2).
- Le parti **«Oltre le dispense»** (sottospazi affini che passano per l'origine, campi finiti, sistemi omogenei e autovettori, la soluzione generale dell'Esempio 12.9, gli esercizi non numerati) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
