---
corso: MDAG
modulo: AG
lezione: L12
titolo: Sistemi lineari II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L12
descrizione: >-
  Appunti della lezione L12 di Algebra lineare e Geometria (MDAG, parte 2): sistema omogeneo associato, soluzione
  particolare, sottospazi affini, rango e pivot, teorema di Rouché–Capelli, sistemi quadrati e sistemi con un
  parametro, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Perché un sistema lineare ha sempre zero, una o infinite soluzioni, e mai due? Tutte le soluzioni sono una
  soluzione di partenza più gli spostamenti permessi, e contando i pivot si sa in anticipo quante sono. In fondo, il
  metodo per i sistemi con un parametro, uno dei due problemi da 11 punti in molti appelli.
materiale: dispense
scheda:
  Dispense: lezione 12 · pp. 56–61
  Libro: Martelli, §3.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 12 «Sistemi lineari II»; B. Martelli, Geometria e algebra lineare, §3.2
appunti_html: appunti/MDAG/L12_sistemi_lineari_2.html
genera_html: true
---

## In breve

- Un sistema è un indovinello con più indizi. Il **sistema omogeneo associato** ha gli stessi indizi, ma tutti finiscono con «= 0». La soluzione zero c'è sempre, e le sue soluzioni formano un **sottospazio**.
- **Tutte le soluzioni** di un sistema sono: una soluzione di partenza, la **soluzione particolare**, più tutte le soluzioni del sistema omogeneo, cioè gli spostamenti permessi.
- Un insieme così, un sottospazio spostato, si chiama **sottospazio affine**: un punto, una retta o un piano che non passa per forza per l'origine.
- Il **rango** di una matrice si conta con i pivot di una forma a scalini.
- **Teorema di Rouché–Capelli**: confrontando il rango della matrice dei coefficienti con quello della matrice completa si sa se ci sono soluzioni, e quante incognite restano libere.
- Le soluzioni sono zero, una o infinite: mai due, mai «un numero finito maggiore di 1».
- Con una matrice quadrata: una sola soluzione esattamente quando il determinante non è zero. Se è zero, le soluzioni sono zero **oppure** infinite.
- Nei sistemi con un parametro si cercano i valori speciali della lettera e si studiano a parte.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Gli indizi che finiscono con zero (p. 56)

Nella lezione L11 hai imparato a **risolvere** un sistema con le mosse di Gauss. Questa lezione guarda il problema dall'alto: che **forma** ha l'insieme delle soluzioni, e come si capisce in anticipo se ci sono e quante.

Parti da un indizio solo: «due numeri la cui somma fa 2», cioè $x + y = 2$. Le soluzioni sono tante:

$$(2, 0), \quad (1, 1), \quad (0, 2), \quad (3, -1), \quad \dots$$

In generale, se il secondo numero è $t$, il primo è $2 - t$. Nel disegno sono i punti di una retta.

Ora cambia l'indizio mettendo zero al posto del 2: $x + y = 0$. Le soluzioni sono $(0, 0)$, $(-1, 1)$, $(1, -1)$, …: se il secondo è $t$, il primo è $-t$. Un'altra retta, **parallela** alla prima, che passa per l'origine.

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

Guarda il disegno. Ogni soluzione della prima retta si ottiene da una della seconda aggiungendo $(2, 0)$, che è a sua volta una soluzione della prima, perché $2 + 0 = 2$. Con i numeri:

$$(2 - t,\ t) = (2, 0) + (-t,\ t).$$

Tutta la lezione è in questa riga.

### Il nome

Il sistema generale, come nella lezione L11, ha $k$ equazioni e $n$ incognite:

$$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = b_1, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = b_k. \end{cases} \qquad (12.1)$$

I numeri $b_1, \dots, b_k$ a destra sono i **termini noti**. Mettendoli tutti a zero si ottiene un nuovo sistema. Le dispense lo chiamano così.

> [!DEF] 12.1 · Sistema omogeneo associato
> Il **sistema omogeneo associato** è quello ottenuto semplicemente mettendo a zero tutti i termini noti $b_i$, cioè:
> $$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = 0, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = 0. \end{cases} \qquad (12.2)$$

**Come si legge.**

- **Omogeneo** vuol dire «con tutti i termini noti uguali a zero». I numeri a sinistra restano **gli stessi** del sistema di partenza: cambia solo la colonna di destra.
- Se $A$ è la matrice dei coefficienti e $b$ la colonna dei termini noti, il sistema di partenza ha matrice completa $(A \mid b)$. Il sistema omogeneo ha matrice completa $(A \mid 0)$, o più in breve solo $A$: la colonna di zeri non cambia con le mosse di Gauss, quindi non serve scriverla.
- Le dispense chiamano $S$ l'insieme delle soluzioni del sistema di partenza e $S_0$ quello delle soluzioni del sistema omogeneo.

> [!ESEMPIO] Un sistema e il suo omogeneo
> $$\begin{cases} x + 2y - z = 3 \\ 2x + 4y + z = 3 \end{cases} \quad \longrightarrow \quad \begin{cases} x + 2y - z = 0 \\ 2x + 4y + z = 0 \end{cases}$$
> Le matrici sono $(A \mid b) = \left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 3 \end{array}\right)$ e $(A \mid 0) = \left(\begin{array}{ccc|c} 1 & 2 & -1 & 0 \\ 2 & 4 & 1 & 0 \end{array}\right)$: la stessa $A$, un'altra colonna a destra.

### Le soluzioni dell'omogeneo formano un sottospazio

Per l'omogeneo, la soluzione con tutti zeri c'è sempre. E le soluzioni si possono sommare e moltiplicare senza perdere niente. Le dispense lo scrivono così.

> [!PROP] 12.2
> Le soluzioni $S_0 \subset \K^n$ formano un sottospazio vettoriale di $\K^n$.

**Come si legge.** $S_0$ è una «stanza» nel senso della lezione L06: contiene lo zero, e sommando o moltiplicando per un numero delle soluzioni dell'omogeneo si resta tra le soluzioni.

Bisogna controllare le tre condizioni di sottospazio (Definizione 6.2, lezione L06). Prendo una delle equazioni, $a_{i1}x_1 + \cdots + a_{in}x_n = 0$.

1. **Lo zero è una soluzione.** Con tutte le incognite a zero: $a_{i1} \cdot 0 + \cdots + a_{in} \cdot 0 = 0$.
2. **Somma.** Se $x$ e $y$ sono soluzioni, anche $x + y$ lo è. Raccogliendo:
   $$a_{i1}(x_1 + y_1) + \cdots + a_{in}(x_n + y_n) = (a_{i1}x_1 + \cdots + a_{in}x_n) + (a_{i1}y_1 + \cdots + a_{in}y_n) = 0 + 0 = 0.$$
3. **Multipli.** Se $x$ è una soluzione e $\lambda$ un numero, anche $\lambda x$ lo è:
   $$a_{i1}(\lambda x_1) + \cdots + a_{in}(\lambda x_n) = \lambda(a_{i1}x_1 + \cdots + a_{in}x_n) = \lambda \cdot 0 = 0.$$

Lo stesso vale per tutte le equazioni, quindi $S_0$ è un sottospazio.

### Il sistema di partenza invece no

Con termini noti diversi da zero le cose cambiano. Se un termine noto $b_i$ non è zero, mettendo tutte le incognite a zero l'equazione dice $0 = b_i$: falso. Quindi lo zero **non** è una soluzione, e l'insieme $S$ non è un sottospazio.

Si rompe anche la somma. Nell'esempio di prima, $(3, 0, 0)$ e $(1, 1, 0)$ risolvono la prima equazione, $x + 2y - z = 3$. La loro somma $(4, 1, 0)$ dà $4 + 2 - 0 = 6$, non 3.

> [!TRAPPOLA] Il sistema omogeneo non è mai impossibile
> Un sistema omogeneo ha **sempre** almeno la soluzione zero: non può mai avere nessuna soluzione. Nella forma a scalini la colonna di destra resta tutta di zeri, quindi non c'è mai un pivot nell'ultima colonna. Per un sistema omogeneo la domanda interessante è un'altra: c'è **solo** la soluzione zero, o ce ne sono altre?

::: prova Scrivi il sistema omogeneo associato a $x - y = 4$, $3x + y = 1$. Lo zero risolve il sistema di partenza? E l'omogeneo?
L'omogeneo è $x - y = 0$, $3x + y = 0$. Lo zero non risolve il sistema di partenza ($0 - 0 = 0$, non 4), ma risolve l'omogeneo.
:::

> [!RICORDA]
> - Il sistema omogeneo associato ha gli stessi numeri a sinistra e tutti zeri a destra.
> - Le soluzioni dell'omogeneo formano un sottospazio; quelle del sistema di partenza, con termini noti non tutti zero, no.

## Una soluzione più gli spostamenti permessi (pp. 57–58)

Torna al disegno iniziale: la retta delle soluzioni di $x + y = 2$ è la retta dell'omogeneo, spostata. Succede sempre così. Le dispense lo scrivono in questo modo.

> [!PROP] 12.3
> Se $S \neq \emptyset$, allora $S$ è ottenuto prendendo una qualsiasi soluzione $x \in S$ e aggiungendo a questa tutti i vettori di $S_0$.

**Come si legge.** $\emptyset$ è l'insieme vuoto: «se ci sono soluzioni». Allora tutte le soluzioni si ottengono così: se ne prende una qualsiasi, e le si aggiungono, una alla volta, tutte le soluzioni dell'omogeneo. Le soluzioni dell'omogeneo sono gli **spostamenti permessi**: muovendosi così si passa da una soluzione all'altra.

Perché vale, in due passi. Fisso una soluzione $x$ del sistema di partenza.

1. **Una soluzione più uno spostamento permesso è ancora una soluzione.** Se $x'$ risolve l'omogeneo, allora in ogni equazione
   $$a_{i1}(x_1 + x'_1) + \cdots + a_{in}(x_n + x'_n) = (a_{i1}x_1 + \cdots + a_{in}x_n) + (a_{i1}x'_1 + \cdots + a_{in}x'_n) = b_i + 0 = b_i.$$
2. **Ogni soluzione si ottiene così.** Se $x''$ è un'altra soluzione, la differenza $x' = x'' - x$ risolve l'omogeneo:
   $$a_{i1}(x''_1 - x_1) + \cdots + a_{in}(x''_n - x_n) = b_i - b_i = 0.$$
   Quindi $x'' = x + x'$, con $x'$ soluzione dell'omogeneo.

Il punto 1 dice che tutte le somme «soluzione più spostamento» sono soluzioni; il punto 2 dice che non ce ne sono altre.

La soluzione fissata si chiama **soluzione particolare**.

> [!IDEA] la formula da ricordare
> **Tutte le soluzioni = una soluzione particolare + tutte le soluzioni del sistema omogeneo associato.** In simboli $S = x + S_0$, quando ci sono soluzioni. La soluzione particolare può essere **qualsiasi**: cambiandola, l'insieme delle soluzioni resta lo stesso.

> [!ESEMPIO] 12.4 · Una retta di soluzioni in $\R^3$
> Prendiamo il sistema in $\R^3$
> $$\begin{cases} x - y + z = 1 \\ y - z = 2 \end{cases}$$
> **Il sistema omogeneo associato** è $x - y + z = 0$, $y - z = 0$. Dalla seconda $y = z$; nella prima $x - z + z = 0$, cioè $x = 0$. Con $z = t$ le soluzioni sono precisamente i vettori
> $$S_0 = \left\{ \begin{pmatrix} 0 \\ t \\ t \end{pmatrix} \ \middle|\ t \in \R \right\} = \Span\left(\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}\right).$$
> **Una soluzione particolare** è $(3, 0, -2)$: controllo $3 - 0 + (-2) = 1$ e $0 - (-2) = 2$.
>
> **Tutte le soluzioni** si ottengono sommando:
> $$\begin{pmatrix} 3 \\ 0 \\ -2 \end{pmatrix} + \begin{pmatrix} 0 \\ t \\ t \end{pmatrix} = \begin{pmatrix} 3 \\ t \\ t - 2 \end{pmatrix}, \qquad t \in \R.$$

Da dove viene la soluzione particolare? Dalle mosse di Gauss, come nella lezione L11:

$$\left(\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 0 & 1 & -1 & 2 \end{array}\right) \xrightarrow{R_1 \to R_1 + R_2} \left(\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & -1 & 2 \end{array}\right)$$

La colonna di $z$ non ha pivot, quindi $z$ è libera: $z = u$. Poi $x = 3$ e $y = 2 + u$. Separando la parte con $u$:

$$\begin{pmatrix} 3 \\ 2 + u \\ u \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \\ 0 \end{pmatrix} + u \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$

Con $u = 0$ si trova la soluzione particolare $(3, 2, 0)$, diversa da quella delle dispense. La parte con $u$ è proprio $S_0$. L'insieme è **lo stesso** di prima: la soluzione $(3, 0, -2)$ delle dispense è quella con $u = -2$ (Martelli, p. 87, fa proprio questo confronto).

> [!METODO] Soluzione particolare e spostamenti in un colpo solo
> Risolvi il sistema con Gauss e scrivi le soluzioni separando la parte di ogni lettera libera: $x = x_0 + t_1 v_1 + \cdots + t_h v_h$. Allora:
> 1. $x_0$, con tutte le lettere a zero, è una soluzione particolare;
> 2. le soluzioni dell'omogeneo sono lo Span di $v_1, \dots, v_h$.

::: prova Le soluzioni di un sistema sono $(1 + t,\ 2,\ -t)$ al variare di $t$. Scrivi una soluzione particolare e le soluzioni dell'omogeneo.
Con $t = 0$: la soluzione particolare $(1, 2, 0)$. La parte con $t$ è $t(1, 0, -1)$: le soluzioni dell'omogeneo sono lo Span di $(1, 0, -1)$.
:::

### Sottospazi affini

Una retta che non passa per l'origine non è un sottospazio, ma è un sottospazio **spostato**. Le dispense danno un nome a questi insiemi.

> [!DEF] 12.5 · Sottospazio affine
> Geometricamente, $S$ è un sottospazio affine. Sia $V$ uno spazio vettoriale. Un **sottospazio affine** di $V$ è un qualsiasi sottoinsieme del tipo
> $$S = \{x + v \mid v \in W\} =: x + W$$
> dove $x$ è un punto fissato di $V$ e $W \subset V$ è un sottospazio vettoriale. La **dimensione di $S$** è la dimensione del sottospazio $W$.

**Come si legge.**

- $x + W$ è il sottospazio $W$ **spostato** del vettore $x$: a ogni vettore di $W$ si somma $x$.
- Il simbolo $=:$ vuol dire «e chiamiamo questo insieme»: è il nome abbreviato $x + W$.
- La dimensione è quella di $W$ e non dipende da $x$: spostare una retta non la fa diventare un piano.
- Casi tipici: con $W$ fatto solo dallo zero si ottiene un **punto** (dimensione 0); con $W$ lo Span di un vettore diverso da zero, una **retta** (dimensione 1); con $W$ lo Span di due vettori indipendenti, un **piano** (dimensione 2).
- Martelli chiama $W$ la **giacitura**: la direzione, senza la posizione. Per le soluzioni di un sistema la giacitura è $S_0$.

> [!ESEMPIO] La stessa retta scritta in due modi (dal libro di Martelli, Esempio 3.2.5)
> Sia $W = \Span\big((1, 1)\big)$ in $\R^2$. Le due rette affini
> $$r_1 = (1, 0) + W = \{(1 + t,\ t) \mid t \in \R\},$$
> $$r_2 = (0, -1) + W = \{(u,\ u - 1) \mid u \in \R\}$$
> sono **la stessa retta**, di equazione $y = x - 1$: nella prima $y = t = x - 1$, nella seconda $y = u - 1 = x - 1$. Il punto di partenza cambia, la giacitura no. Funziona perché la differenza dei due punti, $(1, 0) - (0, -1) = (1, 1)$, sta in $W$.

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

> [!APPROFONDIMENTO] quando un sottospazio affine è un sottospazio vettoriale
> $x + W$ passa per l'origine esattamente quando $x$ sta in $W$, e in quel caso $x + W = W$: è un sottospazio vettoriale. Per esempio $(2, 2) + \Span\big((1, 1)\big)$ è la retta $y = x$, che passa per l'origine. Per i sistemi: $S$ è un sottospazio vettoriale esattamente quando contiene lo zero, cioè quando il sistema è omogeneo.

> [!RICORDA]
> - Tutte le soluzioni = una soluzione particolare + le soluzioni dell'omogeneo.
> - Un sottospazio affine è un sottospazio spostato; la sua dimensione è quella del sottospazio.

## Il sistema letto per colonne (p. 58)

Riprendi l'indovinello della lezione L11: «due numeri, la somma fa 5, la differenza fa 1». Cioè $x + y = 5$ e $x - y = 1$. Lo riscrivo mettendo in evidenza le colonne dei numeri:

$$x \begin{pmatrix} 1 \\ 1 \end{pmatrix} + y \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}.$$

Letto così, il sistema chiede una **ricetta**: con quali dosi $x$ e $y$ le due colonne danno il vettore $(5, 1)$? Con $x = 3$ e $y = 2$: $3 \cdot (1, 1) + 2 \cdot (1, -1) = (5, 1)$.

In generale, chiamo $A^1, \dots, A^n$ le colonne di $A$, con il numero in alto come nella lezione L08. Il sistema diventa

$$x_1A^1 + \cdots + x_nA^n = b.$$

Quindi ci sono soluzioni **esattamente quando** $b$ si ottiene con una ricetta dalle colonne di $A$, cioè

$$b \in \Span\left(A^1, \dots, A^n\right).$$

> [!ESEMPIO] Quando $b$ esce dallo Span delle colonne
> Il sistema $x + 2y = 1$, $2x + 4y = 3$ si scrive $x(1, 2) + y(2, 4) = (1, 3)$.
> 1. Le due colonne sono una multipla dell'altra: $(2, 4) = 2 \cdot (1, 2)$. Lo Span è solo la retta $y = 2x$.
> 2. Il vettore $b = (1, 3)$ non sta su questa retta: dovrebbe avere seconda coordinata $2 \cdot 1 = 2$, e invece ha 3.
> 3. Nessuna ricetta con le colonne dà $b$: il sistema non ha soluzioni.
>
> Con Gauss: $R_2 \to R_2 - 2R_1$ dà la riga $(0, 0 \mid 1)$, cioè $0 = 1$.

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

Nella lezione L08 il **rango** di una matrice è stato definito come la dimensione dello Span delle colonne, cioè quante colonne dicono davvero qualcosa di nuovo. Ora serve un modo pratico per calcolarlo. Le dispense lo ricavano in tre passi.

1. **Le mosse di Gauss non cambiano lo Span delle righe.** Ogni riga nuova è una ricetta con le righe vecchie. E ogni mossa si può disfare (lezione L11), quindi vale anche il contrario. Le mosse non cambiano il rango per righe, che è uguale al rango per colonne (Proposizione 8.6).
2. **Nella forma ridotta si vede tutto.** Alla fine di Gauss le colonne con i pivot diventano i vettori $e_1, e_2, \dots$ della base canonica. Tutte le altre colonne sono ricette con questi.
3. **Quindi** lo Span delle colonne della forma ridotta è generato da tanti vettori della base canonica quanti sono i pivot. La sua dimensione è il numero dei pivot.

> [!PROP] Rango e pivot (p. 58)
> Il rango di $A$ è il numero di pivot in una sua (qualsiasi) riduzione a scalini.

**Come si legge.** Per calcolare il rango: mosse di Gauss fino a una forma a scalini, poi si contano i pivot. Non importa quali mosse si usano: il numero di pivot viene sempre lo stesso.

> [!ESEMPIO] Il rango letto sulla forma ridotta
> Nella matrice ridotta $R = \begin{pmatrix} 1 & 2 & 0 & 3 \\ 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 0 \end{pmatrix}$ i pivot sono nelle colonne 1 e 3, che sono $e_1 = (1, 0, 0)$ ed $e_2 = (0, 1, 0)$. Le altre colonne sono ricette con queste: la colonna 2 è $(2, 0, 0) = 2e_1$ e la colonna 4 è $(3, 4, 0) = 3e_1 + 4e_2$. Lo Span delle colonne è lo Span di $e_1$ ed $e_2$, di dimensione 2: il rango è 2, il numero dei pivot.

> [!NOTA] Attenzione alle lettere
> In questo passaggio le dispense scrivono che le colonne con i pivot diventano «i primi $k$ vettori $e_1, \dots, e_k$ della base canonica di $\K^m$»: qui $k$ è il **numero dei pivot** e $m$ il **numero delle righe** di $A$ (lo spazio in cui vivono le colonne). Nel sistema (12.1), invece, $k$ era il numero delle equazioni. È solo un cambio di lettere, ma conviene saperlo quando si rilegge la pagina 58.

```widget gauss
titolo: Calcola il rango con i pivot
matrice: 1 2 0 1; 2 4 1 3; 3 6 1 4
modo: rango
modi: rango scala ridotta
```

Premi «Calcola»: la matrice ha 3 righe e 4 colonne, ma dopo Gauss restano solo 2 righe non nulle, quindi il rango è 2. Prova poi a cambiare l'ultimo numero da 4 a 5: la terza riga non è più la somma delle prime due e il rango sale a 3.

::: prova Qual è il rango di $\begin{pmatrix} 1 & 2 \\ 3 & 6 \end{pmatrix}$?
$R_2 \to R_2 - 3R_1$ dà la riga $(0, 0)$. Resta un pivot solo: rango 1. Infatti la seconda riga è il triplo della prima.
:::

> [!RICORDA]
> - Un sistema ha soluzioni esattamente quando la colonna dei termini noti è una ricetta con le colonne di $A$.
> - Il rango si calcola contando i pivot di una forma a scalini.

## Contare i pivot: il teorema di Rouché–Capelli (pp. 58–59)

Nella lezione L11 il sistema era impossibile quando compariva un indizio assurdo. Per esempio la riga $0 = 1$: un pivot nell'ultima colonna, quella dei termini noti. E le incognite libere erano quelle senza pivot. Contando i pivot, quindi, si sa tutto.

I pivot di $A$ sono il suo rango. I pivot della matrice completa, con l'ultima colonna, sono il rango di $(A \mid b)$. Ci sono due casi soltanto:

- i due ranghi sono **uguali**: nessun pivot nell'ultima colonna, il sistema ha soluzioni;
- quello della completa è **più grande di uno**: c'è un pivot nell'ultima colonna, il sistema è impossibile.

Le dispense lo scrivono così. È il teorema più importante della lezione.

> [!TEOREMA] 12.6 · Rouché–Capelli
> Il sistema (12.1) ha soluzioni se e solo se
> $$\rk(A \mid b) = \rk(A).$$
> In caso affermativo, lo spazio delle soluzioni $S \subset \K^n$ è un sottospazio affine di dimensione $n - \rk(A)$.

**Come si legge.**

- $\rk(A)$ è il rango della matrice dei coefficienti; $\rk(A \mid b)$ quello della matrice completa, che ha una colonna in più.
- Una colonna in più non abbassa mai il rango, e lo alza al massimo di 1. Quindi o i due ranghi sono uguali, o quello della completa è più grande di uno.
- $n$ è il numero di **incognite**, cioè di colonne di $A$. La dimensione $n - \rk(A)$ è il numero di **incognite libere**, quelle che scegli tu.
- Il numero di equazioni non entra nel conto della dimensione.

> [!DIM] del Teorema 12.6
> La dimostrazione delle dispense, passo per passo.
> 1. Il sistema ha soluzioni esattamente quando $b$ sta nello Span delle colonne di $A$ (sezione precedente).
> 2. Questo succede esattamente quando aggiungere $b$ alle colonne non allarga lo Span:
>    $$\Span\left(A^1, \dots, A^n, b\right) = \Span\left(A^1, \dots, A^n\right).$$
>    Se $b$ è una ricetta con le colonne, ogni ricetta con le colonne e $b$ è già una ricetta con le sole colonne. Se invece non lo è, lo Span con $b$ è più grande.
> 3. Due sottospazi uno dentro l'altro coincidono esattamente quando hanno la stessa dimensione, e le dimensioni qui sono i due ranghi.
> 4. Se ci sono soluzioni, $S = x + S_0$ (Proposizione 12.3), quindi la dimensione di $S$ è quella di $S_0$ (Definizione 12.5).
> 5. Resta da contare la dimensione di $S_0$. Con Gauss le soluzioni dell'omogeneo si scrivono $t_1v_1 + \cdots + t_hv_h$, con un vettore per ogni colonna senza pivot: $h = n - \rk(A)$. Questi vettori generano $S_0$ e sono indipendenti: $v_i$ ha un 1 al posto della $i$-esima incognita libera e 0 ai posti delle altre incognite libere. Se $t_1v_1 + \cdots + t_hv_h = 0$, guardando il posto della $i$-esima incognita libera si trova $t_i = 0$.
> 6. Quindi la dimensione di $S$ è $n - \rk(A)$.

> [!ESEMPIO] Tre sistemi, tre verdetti
> 1. $\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right)$: i due ranghi valgono 2, e le incognite sono 2. Soluzioni, con $2 - 2 = 0$ incognite libere: un punto, $(3, 2)$.
> 2. $\left(\begin{array}{cc|c} 1 & 2 & 1 \\ 2 & 4 & 3 \end{array}\right)$: dopo $R_2 \to R_2 - 2R_1$ diventa $\left(\begin{array}{cc|c} 1 & 2 & 1 \\ 0 & 0 & 1 \end{array}\right)$. $A$ ha un pivot, la completa due: ranghi 1 e 2, nessuna soluzione.
> 3. Esempio 12.4: $\left(\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 0 & 1 & -1 & 2 \end{array}\right)$ è già a scalini. I due ranghi valgono 2, le incognite sono 3: soluzioni, con $3 - 2 = 1$ incognita libera, una retta.

::: prova Un sistema ha 4 incognite, e i due ranghi valgono tutti e due 3. Ci sono soluzioni? Quante incognite libere?
Sì, perché i ranghi sono uguali. Le incognite libere sono $4 - 3 = 1$: le soluzioni sono una retta.
:::

### Zero, una o infinite

Da Rouché–Capelli viene subito il conteggio delle soluzioni. Qui i numeri sono quelli di sempre, reali o complessi.

> [!COROLLARIO] 12.7
> Il sistema (12.1) ha $0$, $1$ oppure $\infty$ soluzioni. Più precisamente, le soluzioni sono
> - $0$ se $\rk(A \mid b) > \rk A$,
> - $1$ se $\rk(A \mid b) = \rk A = n$,
> - $\infty$ se $\rk(A \mid b) = \rk A < n$.

**Come si legge.** Se i ranghi sono diversi: nessuna soluzione. Se sono uguali e valgono quanto le incognite: nessuna incognita libera, una soluzione sola. Se sono uguali ma più piccoli del numero di incognite: almeno un'incognita libera, che può prendere infiniti valori, e valori diversi danno soluzioni diverse.

| $\rk(A)$ | $\rk(A \mid b)$ | Soluzioni | Incognite libere |
|---|---|---|---|
| $r$ | $r + 1$ | nessuna | — |
| $n$ | $n$ | una sola | 0 |
| $r < n$ | $r$ | infinite | $n - r$ |

> [!APPROFONDIMENTO] perché serve un campo infinito
> Nella parte di Matematica Discreta si lavora anche con insiemi finiti di numeri, come $\Z_2 = \{0, 1\}$. Lì un'incognita libera può prendere solo 2 valori, e un sistema con $h$ incognite libere ha esattamente $2^h$ soluzioni: per esempio $x + y = 1$ su $\Z_2$ ha le due soluzioni $(1, 0)$ e $(0, 1)$. Con i numeri reali e complessi, quelli dell'esame, questo non succede: la risposta «un numero finito, maggiore di 1» nei quiz è sempre sbagliata.

### Sistemi quadrati

Quando le equazioni sono tante quante le incognite, la matrice $A$ è quadrata e c'è un'altra strada: il determinante (lezioni L09 e L10). Le dispense lo scrivono così.

> [!COROLLARIO] 12.8
> Se $A$ è una matrice quadrata (allora il numero di equazioni è uguale al numero di variabili), il sistema $Ax = b$ ha esattamente una soluzione se $\rk A = n \Leftrightarrow \det A \neq 0$. In questo caso $A$ è invertibile e la soluzione è $x = A^{-1}b$.

**Come si legge.**

- $Ax = b$ è il sistema scritto con il prodotto riga per colonna (lezione L08): la riga $i$ di $A$ per la colonna delle incognite dà la parte sinistra dell'equazione $i$.
- La freccia doppia si legge «se e solo se»: rango $n$ e determinante diverso da zero sono la stessa cosa (lezione L10).
- In quel caso c'è una sola soluzione, per **qualsiasi** colonna di termini noti: la matrice completa ha solo $n$ righe, quindi anche il suo rango è $n$.
- La formula: $A$ è invertibile, e moltiplicando $Ax = b$ a sinistra per l'inversa si ottiene $x = A^{-1}b$. L'inversa disfa $A$.

> [!ESEMPIO] Un sistema 2 × 2 risolto con l'inversa
> $\begin{cases} x + 2y = 5 \\ 3x + 4y = 6 \end{cases}$, cioè $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $b = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$.
> 1. $\det A = 1 \cdot 4 - 2 \cdot 3 = -2$, non zero: una sola soluzione.
> 2. L'inversa, con la regola delle $2 \times 2$ (lezione L10): scambio la diagonale, cambio segno agli altri due, divido per $-2$. Viene $A^{-1} = \begin{pmatrix} -2 & 1 \\ \frac 32 & -\frac 12 \end{pmatrix}$.
> 3. $x = A^{-1}b = \begin{pmatrix} -2 \cdot 5 + 1 \cdot 6 \\ \frac 32 \cdot 5 - \frac 12 \cdot 6 \end{pmatrix} = \begin{pmatrix} -4 \\ \frac 92 \end{pmatrix}$.
> 4. Controllo: $-4 + 2 \cdot \frac 92 = -4 + 9 = 5$ e $3 \cdot (-4) + 4 \cdot \frac 92 = -12 + 18 = 6$.

> [!TRAPPOLA] Determinante zero non vuol dire «nessuna soluzione»
> Il Corollario 12.8 parla solo del caso con determinante diverso da zero. Se il determinante è zero, le soluzioni sono **zero oppure infinite**, e dipende dai termini noti: bisogna confrontare i due ranghi. Con $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, che ha determinante zero: con $b = (1, 1)$ le due equazioni sono uguali e le soluzioni sono infinite; con $b = (1, 2)$ le equazioni $x + y = 1$ e $x + y = 2$ si contraddicono, e non ce n'è nessuna.

> [!OLTRE] il caso omogeneo, da tenere a mente per gli autovettori
> Per un sistema omogeneo $Ax = 0$ i due ranghi sono sempre uguali: la colonna di zeri non aggiunge niente. Le soluzioni ci sono sempre e formano un sottospazio di dimensione $n - \rk(A)$ (Martelli, Corollario 3.2.16). Se $A$ è quadrata, ci sono soluzioni **diverse da zero** esattamente quando il determinante è zero. Questa frase tornerà nelle lezioni L17–L18: gli autovettori sono proprio le soluzioni diverse da zero di $(A - \lambda I)x = 0$.

> [!NOTA] Collegamento con l'informatica: programmazione lineare e simplesso (p. 59)
> Le dispense accennano a un problema che si studia in un corso successivo di ottimizzazione: trovare il massimo di ${}^tc\,x$ tra i vettori con $Ax = b$ e $x \ge 0$ (**programmazione lineare**). Il **metodo del simplesso** usa tutti i concetti visti fin qui. Se $A$ ha $m$ righe e rango $m$, una *base* del simplesso è una scelta di $m$ colonne indipendenti di $A$: formano una matrice quadrata $A_B$ invertibile. Si mettono a zero le variabili delle altre colonne e si ricavano le variabili «di base» risolvendo $A_Bx_B = b$, cioè $x_B = A_B^{-1}b$.
>
> Un esempio piccolo: $A = \begin{pmatrix} 1 & 1 & 1 & 0 \\ 1 & -1 & 0 & 1 \end{pmatrix}$, $b = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$. Scegliendo le colonne 1 e 2, $A_B = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ ha determinante $-2$ e $x_B = A_B^{-1}b = (3, 1)$: il vettore $x = (3, 1, 0, 0)$ risolve $Ax = b$. Scegliendo le colonne 3 e 4, $A_B$ è l'identità e $x = (0, 0, 4, 2)$. Indipendenza, rango, matrici invertibili e sistemi lineari lavorano tutti insieme in uno degli algoritmi fondamentali dell'ottimizzazione.

::: prova Una matrice $3 \times 3$ ha determinante 0. Il sistema $Ax = b$ può avere esattamente una soluzione?
No. Con determinante zero il rango è meno di 3, quindi almeno un'incognita è libera oppure il sistema è impossibile: zero o infinite soluzioni.
:::

> [!RICORDA]
> - Rouché–Capelli: soluzioni esattamente quando i due ranghi sono uguali; incognite libere = numero di incognite meno il rango.
> - Le soluzioni sono zero, una o infinite.
> - Matrice quadrata: determinante diverso da zero vuol dire una sola soluzione, $x = A^{-1}b$; determinante zero vuol dire zero o infinite.

## Quando c'è una lettera nel sistema (p. 60)

All'esame i sistemi contengono spesso una lettera al posto di qualche numero. Di solito è la $k$, e la domanda è: **per ogni valore di $k$**, quante soluzioni ci sono? L'idea: per quasi tutti i valori di $k$ la risposta è la stessa; ci sono pochi **valori speciali**, quelli che fanno sparire un pivot, e vanno studiati a parte.

Ecco l'esempio delle dispense.

> [!ESEMPIO] 12.9 · Un sistema che dipende da $k$
> Prendiamo il sistema, dipendente da un parametro $k \in \R$,
> $$\begin{cases} x + ky = 4 - k \\ kx + 4y = 4 \end{cases}$$
> (a) Vogliamo sapere al variare di $k \in \R$ se ci sono soluzioni e, in caso affermativo, che dimensione hanno. (b) Vogliamo risolvere il sistema per $k = 1$.
>
> **(a)** Applichiamo l'algoritmo di Gauss su $(A \mid b)$, con la mossa $R_2 \to R_2 - kR_1$:
> $$\left(\begin{array}{cc|c} 1 & k & 4 - k \\ k & 4 & 4 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & k & 4 - k \\ 0 & 4 - k^2 & 4 - 4k + k^2 \end{array}\right)$$
> Il conto della seconda riga: $(k,\ 4,\ 4) - k\,(1,\ k,\ 4 - k) = (0,\ 4 - k^2,\ 4 - 4k + k^2)$. Per calcolare i ranghi basta fermarsi qui: andare avanti serve solo per scrivere le soluzioni.
>
> Notiamo che $4 - 4k + k^2 = (k - 2)^2$ e $4 - k^2 = (2 - k)(2 + k)$. La matrice è a scalini per ogni $k \in \R$ e ci sono sempre due pivot, tranne per $k = 2$, in cui ce n'è uno solo. Quindi il rango di $(A \mid b)$ è $1$ per $k = 2$ e $2$ per $k \neq 2$. La matrice dei coefficienti è diventata
> $$\begin{pmatrix} 1 & k \\ 0 & 4 - k^2 \end{pmatrix}$$
> e ha rango $1$ per $k = \pm 2$ e rango $2$ per $k \neq \pm 2$. Quindi:
> - se $k = -2$, allora $\rk(A \mid b) \neq \rk(A)$ e non ci sono soluzioni;
> - se $k = 2$, allora $\rk(A \mid b) = \rk(A) = 1$, quindi le soluzioni formano un sottospazio affine di $\R^2$ di dimensione $2 - 1 = 1$, cioè una retta affine: infinite soluzioni;
> - se $k \neq \pm 2$, allora $\rk(A \mid b) = \rk(A) = 2$, quindi le soluzioni formano un sottospazio affine di $\R^2$ di dimensione $2 - 2 = 0$, cioè un punto: una soluzione sola.
>
> **(b)** Per $k = 1$ la matrice ridotta diventa $\left(\begin{array}{cc|c} 1 & 1 & 3 \\ 0 & 3 & 1 \end{array}\right)$. Dalla seconda riga $3y = 1$, quindi $y = \frac 13$; dalla prima $x = 3 - y = 3 - \frac 13 = \frac 83$.

I due valori speciali, scritti per esteso:

- $k = -2$: la seconda riga diventa $(0,\ 4 - 4,\ 4 + 8 + 4) = (0, 0 \mid 16)$, cioè $0 = 16$. Un indizio assurdo: nessuna soluzione.
- $k = 2$: la seconda riga diventa $(0, 0 \mid 0)$ e resta la sola equazione $x + 2y = 2$. Con $y = t$, le soluzioni sono $(2 - 2t,\ t)$: la retta $(2, 0) + \Span\big((-2, 1)\big)$.

Controllo di (b) nel sistema di partenza con $k = 1$: $\frac 83 + \frac 13 = 3 = 4 - 1$ e $\frac 83 + \frac 43 = 4$.

> [!APPROFONDIMENTO] la soluzione per ogni $k$ diverso da $\pm 2$, e un controllo con il determinante
> La matrice $A$ è quadrata e $\det A = 1 \cdot 4 - k \cdot k = 4 - k^2$: per il Corollario 12.8 c'è una sola soluzione esattamente quando $k$ non è $2$ né $-2$, come trovato sopra. Finendo i conti, per questi $k$:
> $$y = \frac{(k - 2)^2}{(2 - k)(2 + k)} = \frac{2 - k}{2 + k}, \qquad x = 4 - k - ky = \frac 8{2 + k}.$$
> Con $k = 1$ si ritrovano $x = \frac 83$ e $y = \frac 13$.

> [!METODO] Discutere un sistema con un parametro $k$
> 1. **Se $A$ è quadrata**, parti dal determinante: per i $k$ che non lo annullano la soluzione è una sola (Corollario 12.8). Restano da studiare solo i valori che lo annullano.
> 2. **Altrimenti**, o per controllo, fai Gauss su $(A \mid b)$ tenendo $k$ come una lettera. Scegli i pivot tra i numeri **senza** $k$ quando puoi: si evitano divisioni pericolose.
> 3. Guarda i pivot che contengono $k$ e trova i valori di $k$ che li annullano. Sono i **valori speciali**.
> 4. Per ogni valore speciale **sostituisci il numero** nella matrice e rifai il conto: confronta i due ranghi.
> 5. Scrivi la conclusione per **tutti** i $k$: nessuna soluzione per…, infinite con … incognite libere per…, una sola per tutti gli altri valori.

> [!TRAPPOLA] Dividere per un'espressione che può valere zero
> Scrivere $y = \frac{(k - 2)^2}{4 - k^2}$ senza commenti è l'errore tipico: per $k = 2$ e $k = -2$ quella divisione non si può fare, e sono proprio i casi interessanti. Ogni volta che dividi per un'espressione con $k$, prima metti da parte i valori che la fanno zero.

```widget gauss
titolo: Il sistema dell'appello del 05/02/2026 con $k = 1$ (prova anche $k = -1$ e $k = 2$)
matrice: 1 2 1 1; -1 1 -1 2; 1 1 1 0
modo: sistema
```

Nello strumento c'è la matrice completa del sistema $x + 2y + kz = 1$, $-x + y - kz = 2$, $kx + ky + z = k - 1$ (problema 11 dell'appello del 05/02/2026, svolto negli esercizi) con $k = 1$: infinite soluzioni. Sostituisci $k = -1$, cioè `1 2 -1 1; -1 1 1 2; -1 -1 1 -2`: compare la riga $0 = 1$. Con $k = 2$, cioè `1 2 2 1; -1 1 -2 2; 2 2 1 1`, la soluzione è una sola.

::: prova Nel sistema $x + y = 1$, $x + y = k$, per quali $k$ ci sono soluzioni?
Togliendo la prima equazione dalla seconda viene $0 = k - 1$. Se $k = 1$ l'indizio dice $0 = 0$: infinite soluzioni. Per ogni altro $k$ dice qualcosa di falso: nessuna soluzione.
:::

> [!OLTRE] dove trovarlo nel libro
> Tutta la lezione segue il libro di Martelli, **§3.2 «Teorema di Rouché–Capelli»** (pp. 85–93 del libro): sistema omogeneo associato e Proposizione 3.2.1 (pp. 85–86), sottospazi affini e giacitura (pp. 87–88, con gli Esempi 3.2.2 e 3.2.5), rango e pivot (Proposizione 3.2.9 e Corollario 3.2.10, p. 89), Rouché–Capelli con il Corollario 3.2.14 e l'esempio con il parametro (pp. 90–91), sistemi omogenei (Corollario 3.2.16, p. 91).

> [!RICORDA]
> - Con un parametro: si trovano i valori speciali, quelli che annullano un pivot o il determinante, e si studiano uno per uno.
> - Per tutti gli altri valori la risposta è la stessa.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $(A \mid b)$ | «a barra b» | la matrice completa: coefficienti e termini noti | |
| $S$ | «esse» | tutte le soluzioni del sistema | |
| $S_0$ | «esse zero» | tutte le soluzioni del sistema omogeneo | |
| $\emptyset$ | «insieme vuoto» | nessun elemento | $S = \emptyset$: nessuna soluzione |
| $x + W$ | «x più w» | il sottospazio $W$ spostato di $x$ | $(1, 0) + \Span((1, 1))$ |
| $=:$ | «e lo chiamiamo» | dà un nome a quello che sta a sinistra | |
| $A^1, \dots, A^n$ | «a uno, …, a enne» | le colonne di $A$ | |
| $\rk(A)$ | «rango di a» | quanti pivot ha una forma a scalini | |
| $\Leftrightarrow$ | «se e solo se» | le due cose vanno sempre insieme | |
| $Ax = b$ | «a per x uguale b» | il sistema scritto con il prodotto | |
| $\infty$ | «infinite» | infinite soluzioni | |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 quiz a 5 risposte e 2 problemi da 11 punti. I problemi si correggono solo con almeno 6 punti nel quiz. Dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **Il problema da 11 punti sul sistema con parametro.** È uscito negli appelli del 07/02/2025, del 05/02/2026 e del 03/07/2026, sempre come problema 11. Le domande sono quasi fisse: (1) per quali $k$ la matrice dei coefficienti è invertibile, o quanto vale il suo determinante; (2) per ogni $k$, quante soluzioni ha il sistema; (3) le soluzioni per uno o due valori di $k$ dati. Due di questi problemi sono svolti per intero negli esercizi.
2. **Lo stesso tema nei problemi su un'applicazione lineare.** Negli appelli dell'08/02/2024 e del 10/07/2025 c'era un problema 12 su una macchina $T$. Si chiedeva di trovare **tutti** i vettori con $T(v) = w$, oppure i valori di $k$ per cui un certo $w$ sta nell'immagine. Sono sistemi, e si risolvono con Rouché–Capelli (lezione L14).
3. **I quiz.** Oltre alla domanda «quante soluzioni?» (lezione L11), nell'appello del 07/09/2026 (domanda 3) si chiedeva per quale $k$ un sistema $3 \times 3$ non ha soluzioni. Nell'appello del 10/07/2024 (domanda 6) bisognava riconoscere tutte le soluzioni del sistema dell'Esercizio 12.11 delle dispense.

### Una domanda vera, letta insieme

**Appello del 07/09/2026, domanda 3.** Il testo: «Per quale $k \in \R$ il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 2 & k & 1 \\ 2 & 3 & -1 & 3 \\ 3 & 2 & 1 & 0 \end{array}\right)$ non ha soluzioni reali? (a) Il sistema ha sempre soluzioni reali; (b) $k = \pm 2$; (c) $k = -1$; (d) $k = 0$; (e) $k \in \{1, 2, 3\}$».

**In pratica chiede:** c'è una lettera nel sistema. Per quale valore della lettera compare un indizio assurdo?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: la matrice è quadrata.** Tre equazioni, tre incognite. Parto dal determinante: dove non è zero, la soluzione c'è ed è una sola.
>
> **Passo 2: il determinante**, lungo la prima riga:
> $$\det A = 1 \cdot (3 + 2) - 2 \cdot (2 + 3) + k \cdot (4 - 9) = 5 - 10 - 5k = -5(k + 1).$$
>
> **Passo 3: il valore speciale.** Il determinante fa zero solo per $k = -1$. Per tutti gli altri $k$ c'è una soluzione sola: le risposte (d) ed (e) sono già sbagliate.
>
> **Passo 4: il caso $k = -1$.** Sostituisco e faccio Gauss:
> 1. $R_2 \to R_2 - 2R_1$: $(2, 3, -1 \mid 3) - 2 \cdot (1, 2, -1 \mid 1) = (0, -1, 1 \mid 1)$;
> 2. $R_3 \to R_3 - 3R_1$: $(3, 2, 1 \mid 0) - 3 \cdot (1, 2, -1 \mid 1) = (0, -4, 4 \mid -3)$;
> 3. $R_3 \to R_3 - 4R_2$: $(0, -4, 4 \mid -3) - 4 \cdot (0, -1, 1 \mid 1) = (0, 0, 0 \mid -7)$.
>
> L'ultima riga dice $0 = -7$: un indizio assurdo. I ranghi sono 2 per $A$ e 3 per la completa.
>
> **La risposta** è la (c).
>
> **Perché la (a) è sbagliata.** Determinante zero non vuol dire automaticamente «nessuna soluzione», ma nemmeno «sempre soluzioni»: bisogna fare il conto, e qui il conto dà un indizio assurdo.

> [!METODO] Il problema «discutere al variare di $k$», come va scritto sul foglio
> 1. **Determinante**, se $A$ è quadrata: calcolalo e **scomponilo**, per esempio $\det A = -3(k - 1)(k + 1)$. Prima conclusione: per i $k$ diversi dalle radici, $A$ è invertibile e c'è **una sola** soluzione (Corollario 12.8).
> 2. **Valori speciali**: per ogni radice sostituisci il valore di $k$, scrivi la matrice completa con i numeri e riducila a scalini. Scrivi i due ranghi e cita il teorema: «$\rk(A) = 2 < 3 = \rk(A \mid b)$, quindi per Rouché–Capelli non ci sono soluzioni» oppure «$\rk(A) = \rk(A \mid b) = 2 < 3 = n$: infinite soluzioni, con $3 - 2 = 1$ incognita libera».
> 3. **Soluzioni richieste**: Gauss sulla matrice con i numeri, lettere libere alle colonne senza pivot, e un **controllo** sostituendo nel sistema di partenza.
> 4. **Riassunto finale** in una riga per ogni caso: i correttori cercano la conclusione, falla trovare.

> [!TRAPPOLA] Gli errori più frequenti
> - Concludere «nessuna soluzione» solo perché il determinante è zero. Con determinante zero ci possono essere anche infinite soluzioni: nell'appello del 05/02/2026, per $k = 1$ infinite, per $k = -1$ nessuna, e il determinante è zero in tutti e due i casi.
> - Dimenticare un valore speciale, per esempio perché si è diviso per $k - 1$ senza dirlo.
> - Confondere il numero di incognite con il numero di equazioni nel conto delle incognite libere.
> - Dire che le soluzioni di $Ax = b$ con $b$ diverso da zero formano un sottospazio vettoriale: sono un sottospazio **affine**.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: $S = x_0 + S_0$; l'enunciato di Rouché–Capelli con la tabella «nessuna / una / infinite» del Corollario 12.7; «$A$ quadrata: determinante diverso da zero vuol dire una sola soluzione, $x = A^{-1}b$; determinante zero vuol dire zero o infinite»; la formula dell'inversa $2 \times 2$; i cinque passi del metodo per il parametro.

## Quiz

```quiz
D: Sia $Ax = b$ un sistema lineare qualsiasi e $Ax = 0$ il suo sistema omogeneo associato. Quale affermazione è sempre vera?
+ Il sistema omogeneo ha almeno la soluzione $x = 0$.
- Il sistema omogeneo ha esattamente una soluzione.
- Il sistema omogeneo ha le stesse soluzioni di $Ax = b$.
- Se $Ax = b$ non ha soluzioni, neanche il sistema omogeneo ne ha.
- Le soluzioni di $Ax = b$ formano sempre un sottospazio vettoriale.
= Mettendo tutte le incognite a zero, ogni equazione dell'omogeneo dice $0 = 0$: lo zero è sempre una soluzione (Proposizione 12.2). La risposta più insidiosa è «esattamente una»: l'omogeneo può avere anche altre soluzioni, quando c'è un'incognita libera. Le soluzioni dei due sistemi sono diverse quando $b$ non è zero, e l'omogeneo non è mai impossibile. Le soluzioni di $Ax = b$ con $b$ diverso da zero non contengono lo zero, quindi non sono un sottospazio vettoriale.

D: In un sistema in 3 incognite risulta $\rk(A) = 2$ e $\rk(A \mid b) = 3$. Il sistema ha:
+ Zero soluzioni.
- Una soluzione.
- Infinite soluzioni, che dipendono da 1 parametro.
- Infinite soluzioni, che dipendono da 2 parametri.
- Un numero finito di soluzioni, maggiore di 1.
= I due ranghi sono diversi: per Rouché–Capelli non ci sono soluzioni. Nella forma a scalini c'è un pivot nell'ultima colonna, cioè un indizio assurdo come $0 = 1$. La risposta più insidiosa è «infinite, con 1 parametro»: è il conto $3 - 2$, che però si fa solo quando i ranghi sono uguali. «Un numero finito maggiore di 1» non è mai giusta con i numeri reali. Simile all'appello del 10/06/2024, domanda 7.

D: Un sistema di 3 equazioni in 4 incognite ha $\rk(A) = \rk(A \mid b) = 2$. Le sue soluzioni formano:
+ Un sottospazio affine di dimensione 2.
- Un sottospazio affine di dimensione 1.
- Un sottospazio affine di dimensione 3.
- Un solo punto.
- L'insieme vuoto.
= I ranghi sono uguali, quindi ci sono soluzioni. Le incognite libere sono il numero di incognite meno il rango: $4 - 2 = 2$. La risposta più insidiosa è «dimensione 1», cioè $3 - 2$: usa il numero di equazioni al posto di quello delle incognite. Il numero di equazioni non entra nel conto. Simile all'appello del 16/01/2025, domanda 10.

D: Per quale $k \in \R$ il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 2 & k & 1 \\ 2 & 3 & -1 & 3 \\ 3 & 2 & 1 & 0 \end{array}\right)$ non ha soluzioni reali?
- Il sistema ha sempre soluzioni reali.
- $k = \pm 2$
+ $k = -1$
- $k = 0$
- $k \in \{1, 2, 3\}$
= È la domanda letta insieme in «Verso l'esame». Il determinante è $1 \cdot (3 + 2) - 2 \cdot (2 + 3) + k \cdot (4 - 9) = -5(k + 1)$, quindi per ogni $k$ diverso da $-1$ la soluzione è una sola. Per $k = -1$ le mosse $R_2 - 2R_1$, $R_3 - 3R_1$ e poi $R_3 - 4R_2$ portano alla riga $(0, 0, 0 \mid -7)$: rango 2 per $A$, 3 per la completa, nessuna soluzione. La risposta più insidiosa è «ha sempre soluzioni»: chi si ferma al determinante pensa che con determinante zero ci siano comunque infinite soluzioni. Appello del 07/09/2026, domanda 3.

D: Il vettore $(1, 2, 3)$ è una soluzione di $Ax = b$ e le soluzioni del sistema omogeneo associato sono $S_0 = \Span\big((1, 0, -1)\big)$. Quale di questi vettori è un'altra soluzione di $Ax = b$?
+ $(3, 2, 1)$
- $(1, 0, -1)$
- $(2, 4, 6)$
- $(0, 0, 0)$
- $(2, 2, 4)$
= Per la Proposizione 12.3 le soluzioni sono la soluzione particolare più gli spostamenti permessi: $(1, 2, 3) + t(1, 0, -1) = (1 + t,\ 2,\ 3 - t)$. Con $t = 2$ si ottiene $(3, 2, 1)$. La risposta più insidiosa è $(1, 0, -1)$: è uno spostamento permesso, cioè una soluzione dell'omogeneo, non del sistema. $(2, 4, 6)$ è il doppio della soluzione, e il doppio di una soluzione non risolve $Ax = b$. Per riconoscere le soluzioni: la seconda coordinata deve essere 2 e la somma di prima e terza deve essere 4.

D: Sia $A \in M(3, \R)$ con $\det A = 5$. Allora il sistema $Ax = b$:
+ Ha esattamente una soluzione per ogni $b \in \R^3$.
- Ha infinite soluzioni per ogni $b$.
- Per qualche $b$ non ha soluzioni.
- Ha soluzioni solo se $b = 0$.
- Ha esattamente 5 soluzioni.
= Il determinante non è zero, quindi la matrice è invertibile e, per il Corollario 12.8, per ogni colonna di termini noti c'è una sola soluzione: $x = A^{-1}b$. La risposta più insidiosa è «esattamente 5 soluzioni»: il valore del determinante non conta le soluzioni, conta solo se è zero o no. Simile all'appello del 07/02/2025, problema 11 (punto 1).

D: Sia $A \in M(2, \R)$ con $\det A = 0$. Allora il sistema $Ax = b$:
+ Ha zero oppure infinite soluzioni, a seconda di $b$.
- Non ha mai soluzioni.
- Ha sempre infinite soluzioni.
- Ha sempre una sola soluzione.
- Ha esattamente due soluzioni.
= Con determinante zero il rango di $A$ è meno di 2. Se il rango della completa è uguale, le soluzioni sono infinite; se è più grande, non ce ne sono. Esempio: con $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $b = (1, 1)$ dà infinite soluzioni e $b = (1, 2)$ nessuna. Le risposte più insidiose sono «mai soluzioni» e «sempre infinite»: tutte e due dimenticano che dipende da $b$.

D: Per quale valore di $k \in \R$ il sistema $\begin{cases} x + ky = 1 \\ kx + y = 1 \end{cases}$ ha infinite soluzioni?
+ $k = 1$
- $k = -1$
- $k = 0$
- Per ogni $k \neq \pm 1$.
- Per nessun valore di $k$.
= Il determinante è $1 - k^2$: per $k$ diverso da $1$ e $-1$ la soluzione è una sola. Con $k = 1$ le due equazioni sono tutte e due $x + y = 1$: infinite soluzioni. La risposta più insidiosa è $k = -1$, l'altro valore speciale: le equazioni diventano $x - y = 1$ e $-x + y = 1$, e sommandole viene $0 = 2$, nessuna soluzione. Simile all'Esempio 12.9 e all'appello del 07/09/2026, domanda 3.

D: Le soluzioni di un sistema $Ax = b$ in 5 incognite, con $b \neq 0$ e $\rk(A) = \rk(A \mid b) = 3$, formano:
+ Un sottospazio affine di dimensione 2 che non passa per l'origine.
- Un sottospazio vettoriale di dimensione 2.
- Un sottospazio affine di dimensione 3.
- Un sottospazio vettoriale di dimensione 3.
- Un punto.
= Per Rouché–Capelli le soluzioni ci sono e hanno dimensione $5 - 3 = 2$. Siccome $b$ non è zero, lo zero non è una soluzione: le soluzioni sono un sottospazio affine che non passa per l'origine. La risposta più insidiosa è «sottospazio vettoriale di dimensione 2»: la dimensione è giusta, ma un sottospazio vettoriale deve contenere lo zero. Le risposte con dimensione 3 confondono il rango con la dimensione.

D: Qual è la dimensione dello spazio delle soluzioni del sistema $\begin{cases} x + y + z + w = 1 \\ x - y + z - w = 3 \end{cases}$ in $\R^4$?
N: 2
= Le righe dei coefficienti $(1, 1, 1, 1)$ e $(1, -1, 1, -1)$ non sono una multipla dell'altra, quindi il rango di $A$ è 2. Anche il rango della completa è 2, perché le righe sono solo due. Le soluzioni ci sono, e le incognite libere sono $4 - 2 = 2$.
```

## Esercizi

::: esercizio base Riscaldamento: il sistema omogeneo
Scrivi il sistema omogeneo associato a $\begin{cases} x + y = 3 \\ 2x - y = 0 \end{cases}$. Controlla che $(0, 0)$ risolve l'omogeneo e non il sistema di partenza.
::: soluzione
1. L'omogeneo ha gli stessi numeri a sinistra e zeri a destra: $x + y = 0$, $2x - y = 0$.
2. Con $(0, 0)$: $0 + 0 = 0$ e $0 - 0 = 0$. Risolve l'omogeneo.
3. Nel sistema di partenza la prima equazione darebbe $0 = 3$: falso. Non lo risolve.
:::

::: esercizio base Riscaldamento: una soluzione più gli spostamenti
Una soluzione di $x + y = 2$ è $(2, 0)$, e le soluzioni di $x + y = 0$ sono i multipli di $(-1, 1)$. Scrivi tre soluzioni diverse di $x + y = 2$ e controllale.
::: soluzione
Aggiungo a $(2, 0)$ alcuni multipli di $(-1, 1)$:
1. con $t = 1$: $(2, 0) + (-1, 1) = (1, 1)$, e $1 + 1 = 2$;
2. con $t = 2$: $(2, 0) + (-2, 2) = (0, 2)$, e $0 + 2 = 2$;
3. con $t = -1$: $(2, 0) + (1, -1) = (3, -1)$, e $3 - 1 = 2$.
:::

::: esercizio base Riscaldamento: contare con i ranghi
Un sistema ha 3 incognite. Quante soluzioni ha in ciascun caso? (a) $\rk(A) = 2$, $\rk(A \mid b) = 2$; (b) $\rk(A) = 3$, $\rk(A \mid b) = 3$; (c) $\rk(A) = 2$, $\rk(A \mid b) = 3$; (d) $\rk(A) = 1$, $\rk(A \mid b) = 1$.
::: soluzione
1. (a) Ranghi uguali, $3 - 2 = 1$ incognita libera: infinite soluzioni, una retta.
2. (b) Ranghi uguali e pari al numero di incognite: una soluzione sola.
3. (c) Ranghi diversi: nessuna soluzione.
4. (d) Ranghi uguali, $3 - 1 = 2$ incognite libere: infinite soluzioni, un piano.
:::

::: esercizio base Riscaldamento: indizi che si contraddicono
Quante soluzioni hanno (a) $x + y = 3$, $2x + 2y = 5$ e (b) $x + y = 3$, $2x + 2y = 6$?
::: soluzione
In tutti e due i casi tolgo dalla seconda equazione il doppio della prima ($R_2 \to R_2 - 2R_1$).
1. (a) Viene $0 = 5 - 6 = -1$: un indizio assurdo, **nessuna** soluzione.
2. (b) Viene $0 = 6 - 6 = 0$: l'indizio sparisce, resta $x + y = 3$. **Infinite** soluzioni, $(3 - t,\ t)$.
:::

::: esercizio base Esercizio 12.10 delle dispense: quante soluzioni?
Quante soluzioni ha il sistema lineare con matrice completa
$$\left(\begin{array}{ccc|c} 1 & 3 & 5 & 2 \\ 7 & 9 & 11 & 2 \\ 13 & 15 & 17 & 0 \end{array}\right)?$$
::: soluzione
**Gauss.** Prima $R_2 \to R_2 - 7R_1$ e $R_3 \to R_3 - 13R_1$:
$$(7, 9, 11, 2) - 7(1, 3, 5, 2) = (0, -12, -24, -12), \qquad (13, 15, 17, 0) - 13(1, 3, 5, 2) = (0, -24, -48, -26).$$
Poi $R_3 \to R_3 - 2R_2$: $(0, -24, -48, -26) - 2(0, -12, -24, -12) = (0, 0, 0, -2)$.
$$\left(\begin{array}{ccc|c} 1 & 3 & 5 & 2 \\ 0 & -12 & -24 & -12 \\ 0 & 0 & 0 & -2 \end{array}\right)$$
**Ranghi.** Nella parte $A$ ci sono 2 pivot: rango 2. La matrice completa ha un pivot anche nell'ultima colonna: rango 3. Per Rouché–Capelli il sistema **non ha soluzioni**: l'ultima riga dice $0 = -2$.

Il motivo nascosto: la terza riga di $A$ è $2 \cdot (7, 9, 11) - (1, 3, 5) = (13, 15, 17)$, ma per i termini noti $2 \cdot 2 - 2 = 2$, non 0. Gli indizi si contraddicono.
:::

::: esercizio base Sottospazio o no?
Stabilisci se sono sottospazi vettoriali di $\R^3$: (a) $U = \{(x, y, z) \mid x + y - z = 0\}$; (b) $V = \{(x, y, z) \mid x + y - z = 1\}$. Per quello che non lo è, di' che cosa è.
::: soluzione
(a) $U$ è l'insieme delle soluzioni di un sistema **omogeneo**: una sola equazione, con termine noto 0. Per la Proposizione 12.2 è un sottospazio. La sua dimensione è $3 - 1 = 2$, perché la matrice $(1\ 1\ {-1})$ ha rango 1: un piano per l'origine.

(b) $V$ non contiene lo zero: $0 + 0 - 0 = 0$, non 1. Quindi non è un sottospazio vettoriale. Non funziona neanche la somma: $(1, 0, 0)$ e $(0, 1, 0)$ stanno in $V$, ma $(1, 1, 0)$ dà $1 + 1 - 0 = 2$. È un **sottospazio affine**: $V = (1, 0, 0) + U$, un piano parallelo a $U$ che non passa per l'origine, di dimensione 2.
:::

::: esercizio base Il rango con i pivot
Calcola il rango di $A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 3 \\ 3 & 6 & 1 & 4 \end{pmatrix}$ e trova un insieme massimo di colonne indipendenti.
::: soluzione
1. $R_2 \to R_2 - 2R_1$ dà $(0, 0, 1, 1)$.
2. $R_3 \to R_3 - 3R_1$ dà $(0, 0, 1, 1)$.
3. $R_3 \to R_3 - R_2$ dà la riga di zeri.
$$\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
Due pivot: rango 2. I pivot sono nelle colonne 1 e 3, quindi le colonne 1 e 3 **della matrice di partenza**, $(1, 2, 3)$ e $(0, 1, 1)$, sono indipendenti e generano lo Span delle colonne. Infatti la colonna 2 è il doppio della 1, e la colonna 4 è la somma della 1 e della 3: $(1, 3, 4) = (1, 2, 3) + (0, 1, 1)$. Le mosse sulle righe conservano le ricette tra le colonne, per questo si leggono sulla forma a scalini: lo vedrai meglio nella lezione L13.
:::

::: esercizio medio Esercizio 12.11 delle dispense: tutte le soluzioni
Trova tutte le soluzioni del sistema lineare
$$\begin{cases} 2x - y - z = 3 \\ x - y + z = 2 \\ 3x - y - 3z = 4 \end{cases}$$
::: soluzione
**Gauss.** Scambio le prime due righe per avere un pivot uguale a 1, poi tolgo multipli della prima riga:
$$\left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 2 & -1 & -1 & 3 \\ 3 & -1 & -3 & 4 \end{array}\right) \xrightarrow[R_3 \to R_3 - 3R_1]{R_2 \to R_2 - 2R_1} \left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 0 & 1 & -3 & -1 \\ 0 & 2 & -6 & -2 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 0 & 1 & -3 & -1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
I conti: $(2, -1, -1, 3) - 2(1, -1, 1, 2) = (0, 1, -3, -1)$; $(3, -1, -3, 4) - 3(1, -1, 1, 2) = (0, 2, -6, -2)$; la terza riga è il doppio della seconda.

**Rouché–Capelli.** I due ranghi valgono 2, le incognite sono 3: infinite soluzioni, un'incognita libera.

**Soluzioni.** $R_1 \to R_1 + R_2$ dà $(1, 0, -2, 1)$. Con $z = t$: $y = -1 + 3t$ e $x = 1 + 2t$.
$$(x, y, z) = (1 + 2t,\ -1 + 3t,\ t) = (1, -1, 0) + t\,(2, 3, 1), \qquad t \in \R.$$
**Controllo** con $t = 1$, cioè $(3, 2, 1)$: $6 - 2 - 1 = 3$; $3 - 2 + 1 = 2$; $9 - 2 - 3 = 4$.

Le soluzioni sono una retta: il punto $(1, -1, 0)$, la soluzione particolare, più gli spostamenti permessi, lo Span di $(2, 3, 1)$. Questo stesso sistema era la domanda 6 dell'appello del 10/07/2024, con la risposta $x = 2t + 1$, $y = 3t - 1$, $z = t$.
:::

::: esercizio medio Soluzione particolare e sistema omogeneo
Per il sistema $\begin{cases} x + 2y - z = 3 \\ 2x + 4y + z = 3 \end{cases}$ trova: (a) tutte le soluzioni $S$; (b) le soluzioni $S_0$ del sistema omogeneo associato; (c) una soluzione particolare, e verifica che $S = x_0 + S_0$.
::: soluzione
(a) $R_2 \to R_2 - 2R_1$: $(2, 4, 1, 3) - 2(1, 2, -1, 3) = (0, 0, 3, -3)$, quindi $3z = -3$ e $z = -1$. La colonna di $y$ non ha pivot: $y = t$. Dalla prima riga $x = 3 - 2t + z = 2 - 2t$.
$$S = \{(2 - 2t,\ t,\ -1) \mid t \in \R\} = (2, 0, -1) + \Span\big((-2, 1, 0)\big).$$
(b) L'omogeneo ha la stessa $A$ e zeri a destra. Con le stesse mosse: $3z = 0$, quindi $z = 0$, e $x = -2t$, $y = t$:
$$S_0 = \Span\big((-2, 1, 0)\big).$$
Controllo: $-2 + 2 - 0 = 0$ e $-4 + 4 + 0 = 0$.

(c) Con $t = 0$: $x_0 = (2, 0, -1)$. Controllo: $2 + 0 + 1 = 3$ e $4 + 0 - 1 = 3$. Allora $x_0 + S_0 = \{(2, 0, -1) + t(-2, 1, 0)\} = \{(2 - 2t,\ t,\ -1)\} = S$. Anche $(0, 1, -1)$, con $t = 1$, sarebbe una soluzione particolare valida.
:::

::: esercizio medio Un sistema quadrato con l'inversa
Risolvi $\begin{cases} 2x + y = 3 \\ 5x + 3y = 7 \end{cases}$ usando il Corollario 12.8, poi usa la stessa inversa per risolvere il sistema con termini noti $(1, 0)$.
::: soluzione
1. $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$, con determinante $6 - 5 = 1$: una sola soluzione per ogni colonna di termini noti.
2. L'inversa: scambio la diagonale, cambio segno agli altri due, divido per 1.
$$A^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}, \qquad A^{-1}\begin{pmatrix} 3 \\ 7 \end{pmatrix} = \begin{pmatrix} 9 - 7 \\ -15 + 14 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}.$$
3. Controllo: $4 - 1 = 3$ e $10 - 3 = 7$.

Con $b = (1, 0)$: $A^{-1}b = (3, -5)$, cioè la prima colonna dell'inversa. Controllo: $6 - 5 = 1$ e $15 - 15 = 0$. Il vantaggio dell'inversa: calcolata una volta, risolve il sistema per **qualsiasi** termine noto con un solo prodotto.
:::

::: esercizio esame Come all'esame: appello del 05/02/2026, problema 11
Si consideri il sistema lineare nelle incognite $x, y, z$, con un parametro $k \in \R$:
$$\begin{cases} x + 2y + kz = 1 \\ -x + y - kz = 2 \\ kx + ky + z = k - 1 \end{cases}$$
(1) Calcolare il determinante della matrice $A$ dei coefficienti. (2) Al variare di $k \in \R$, discutere quante soluzioni ammette il sistema. (3) Per $k = 1$, trovare tutte le soluzioni. (4) Per $k = 2$, trovare tutte le soluzioni.
::: soluzione
**(1)** Con $R_2 \to R_2 + R_1$, che non cambia il determinante (lezione L10), la seconda riga diventa $(0, 3, 0)$:
$$\det \begin{pmatrix} 1 & 2 & k \\ -1 & 1 & -k \\ k & k & 1 \end{pmatrix} = \det \begin{pmatrix} 1 & 2 & k \\ 0 & 3 & 0 \\ k & k & 1 \end{pmatrix} = 3 \cdot \det \begin{pmatrix} 1 & k \\ k & 1 \end{pmatrix} = 3(1 - k^2).$$
Ho sviluppato lungo la seconda riga: l'unico numero diverso da zero è il 3 nella casella $(2, 2)$, segno più. Quindi $\det A = 3(1 - k)(1 + k)$.

**(2)** Per $k$ diverso da 1 e da $-1$ il determinante non è zero: **una sola soluzione** (Corollario 12.8). Per i due valori speciali riduco la matrice completa con $k$ come lettera:
1. $R_2 \to R_2 + R_1$ dà $(0, 3, 0 \mid 3)$;
2. $R_3 \to R_3 - kR_1$ dà $(0, -k, 1 - k^2 \mid -1)$;
3. $R_3 \to R_3 + \frac k3 R_2$ dà $(0, 0, 1 - k^2 \mid k - 1)$.
$$\left(\begin{array}{ccc|c} 1 & 2 & k & 1 \\ 0 & 3 & 0 & 3 \\ 0 & 0 & 1 - k^2 & k - 1 \end{array}\right)$$
- $k = 1$: l'ultima riga è $(0, 0, 0 \mid 0)$. I due ranghi valgono 2, le incognite sono 3: **infinite** soluzioni, con $3 - 2 = 1$ incognita libera.
- $k = -1$: l'ultima riga è $(0, 0, 0 \mid -2)$. Rango 2 per $A$, 3 per la completa: **nessuna** soluzione.

**(3)** $k = 1$: le righe non nulle dicono $x + 2y + z = 1$ e $3y = 3$. Quindi $y = 1$ e, con $z = t$, $x = 1 - 2 - t = -1 - t$:
$$(x, y, z) = (-1 - t,\ 1,\ t), \qquad t \in \R.$$
Controllo con $t = 0$, cioè $(-1, 1, 0)$, nel sistema con $k = 1$: $-1 + 2 + 0 = 1$; $1 + 1 - 0 = 2$; $-1 + 1 + 0 = 0 = k - 1$.

**(4)** $k = 2$: l'ultima riga è $(0, 0, -3 \mid 1)$, quindi $z = -\frac 13$. Poi $y = 1$ e $x = 1 - 2y - 2z = 1 - 2 + \frac 23 = -\frac 13$:
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
Siccome $k^2 + k - 2 = (k + 2)(k - 1)$, viene $\det A = -(k - 1)^2(k + 2)$. La matrice è **invertibile per tutti i $k$ tranne 1 e $-2$**.

**(2)** Per $k$ diverso da 1 e da $-2$: **una sola soluzione**. I valori speciali:
- $k = 1$: le tre equazioni diventano $x + y + z = 1$, $2x + 2y + 2z = 2$, $x + y + z = 1$, tutte la stessa. I due ranghi valgono 1: **infinite** soluzioni, con $3 - 1 = 2$ incognite libere.
- $k = -2$: la matrice completa è $\left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ -1 & -1 & 2 & -1 \\ 1 & 1 & -2 & 4 \end{array}\right)$. Con $R_2 \to R_2 + R_1$ viene $(0, -3, 3 \mid 0)$, con $R_3 \to R_3 - R_1$ viene $(0, 3, -3 \mid 3)$, e $R_3 \to R_3 + R_2$ dà $(0, 0, 0 \mid 3)$. Rango 2 per $A$, 3 per la completa: **nessuna** soluzione.

**(3)** $k = 0$: il sistema è $x + z = 1$, $x + y + 2z = 1$, $x + y = 0$.
1. Dalla terza $y = -x$.
2. Nella seconda: $x - x + 2z = 1$, quindi $z = \frac 12$.
3. Dalla prima $x = \frac 12$, e quindi $y = -\frac 12$.

Soluzione unica $\left(\frac 12, -\frac 12, \frac 12\right)$; controllo nella seconda: $\frac 12 - \frac 12 + 1 = 1$.

$k = 1$: resta la sola equazione $x + y + z = 1$. Le colonne senza pivot sono quelle di $y$ e $z$: $y = s$, $z = t$.
$$S = \{(1 - s - t,\ s,\ t) \mid s, t \in \R\} = (1, 0, 0) + \Span\big((-1, 1, 0),\ (-1, 0, 1)\big),$$
un piano affine di $\R^3$.
:::

::: esercizio esame Come all'esame: quando ci sono infinite soluzioni
Determina tutti i valori di $k \in \R$ per cui il sistema $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = k \\ x + 3y + 5z = k^2 \end{cases}$ ha infinite soluzioni, e scrivile. Per gli altri valori quante soluzioni ci sono?
::: soluzione
Qui la lettera è solo nei termini noti, e la matrice dei coefficienti non è invertibile: il suo determinante è zero per ogni $k$, perché la terza colonna è il doppio della seconda meno la prima. Serve Gauss.
$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & k \\ 1 & 3 & 5 & k^2 \end{array}\right) \xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & k - 1 \\ 0 & 2 & 4 & k^2 - 1 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & k - 1 \\ 0 & 0 & 0 & (k - 1)^2 \end{array}\right)$$
L'ultimo numero: $k^2 - 1 - 2(k - 1) = k^2 - 2k + 1 = (k - 1)^2$.

- Il rango di $A$ è 2 per ogni $k$.
- Se $k$ non è 1, l'ultimo numero non è zero: rango 3 per la completa, **nessuna** soluzione.
- Se $k = 1$: rango 2 anche per la completa, **infinite** soluzioni con $3 - 2 = 1$ incognita libera. Le righe dicono $x + y + z = 1$ e $y + 2z = 0$: con $z = t$, $y = -2t$ e $x = 1 + 2t - t = 1 + t$.
$$S = \{(1 + t,\ -2t,\ t) \mid t \in \R\}, \qquad k = 1.$$
Controllo con $t = 1$, cioè $(2, -2, 1)$: $2 - 2 + 1 = 1$; $2 - 4 + 3 = 1 = k$; $2 - 6 + 5 = 1 = k^2$. Non esiste nessun $k$ con una sola soluzione. Lo schema è quello del problema 12 (punto 3) dell'appello del 10/07/2025.
:::

::: esercizio difficile Un sistema con parametro (Foglio 2 del tutorato, esercizio 10)
Risolvi, al variare di $k \in \R$, il sistema $\begin{cases} x + 2y + 2z = 1 \\ x + 4y + 3z = k + 1 \\ -x + 2y + kz = 2 \end{cases}$
::: soluzione
**Gauss con $k$ come lettera.** $R_2 \to R_2 - R_1$ e $R_3 \to R_3 + R_1$: i pivot scelti non contengono $k$.
$$\left(\begin{array}{ccc|c} 1 & 2 & 2 & 1 \\ 0 & 2 & 1 & k \\ 0 & 4 & k + 2 & 3 \end{array}\right) \xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 2 & 2 & 1 \\ 0 & 2 & 1 & k \\ 0 & 0 & k & 3 - 2k \end{array}\right)$$
I conti: $(1, 4, 3, k + 1) - (1, 2, 2, 1) = (0, 2, 1, k)$; $(-1, 2, k, 2) + (1, 2, 2, 1) = (0, 4, k + 2, 3)$; $(0, 4, k + 2, 3) - 2(0, 2, 1, k) = (0, 0, k, 3 - 2k)$.

**Valore speciale $k = 0$.** L'ultima riga è $(0, 0, 0 \mid 3)$: rango 2 per $A$, 3 per la completa, **nessuna soluzione**.

**Per $k$ diverso da zero.** Tre pivot: una sola soluzione. Dal basso:
$$z = \frac{3 - 2k}k, \qquad y = \frac{k - z}2 = \frac{k^2 + 2k - 3}{2k} = \frac{(k + 3)(k - 1)}{2k}, \qquad x = 1 - 2y - 2z = \frac{-k^2 + 3k - 3}k.$$
Per il conto di $x$: $1 - \frac{k^2 + 2k - 3}k - \frac{6 - 4k}k = \frac{k - k^2 - 2k + 3 - 6 + 4k}k = \frac{-k^2 + 3k - 3}k$.

**Controllo** con $k = 1$: $x = -1$, $y = 0$, $z = 1$. Nel sistema: $-1 + 0 + 2 = 1$; $-1 + 0 + 3 = 2 = k + 1$; $1 + 0 + 1 = 2$. Torna anche con il determinante: è $2k$, il prodotto dei pivot $1 \cdot 2 \cdot k$ (ho usato solo mosse del terzo tipo), e fa zero solo per $k = 0$.
:::

## Domande di ripasso

::: domanda Che cos'è il sistema omogeneo associato a un sistema lineare?
È il sistema con gli stessi numeri a sinistra e tutti i termini noti uguali a zero. Se il sistema di partenza ha matrice completa $(A \mid b)$, l'omogeneo ha matrice $(A \mid 0)$, scritta anche solo $A$.
:::

::: domanda Perché le soluzioni del sistema omogeneo formano un sottospazio?
Perché valgono le tre condizioni: lo zero è una soluzione; la somma di due soluzioni è una soluzione ($0 + 0 = 0$ in ogni equazione); un multiplo di una soluzione è una soluzione ($\lambda \cdot 0 = 0$).
:::

::: domanda Perché, con termini noti non tutti zero, le soluzioni non formano un sottospazio?
Perché non contengono lo zero: mettendo tutte le incognite a zero in un'equazione con termine noto diverso da zero viene un'uguaglianza falsa. Inoltre la somma di due soluzioni risolve il sistema con termini noti doppi, non quello di partenza.
:::

::: domanda Come si ottengono tutte le soluzioni a partire da una sola?
Si aggiungono alla soluzione particolare tutte le soluzioni del sistema omogeneo, gli spostamenti permessi: $S = x + S_0$ (Proposizione 12.3). Qualsiasi soluzione può fare da soluzione particolare.
:::

::: domanda Che cos'è un sottospazio affine e qual è la sua dimensione?
Un sottospazio spostato: $x + W$, con $x$ un punto fissato e $W$ un sottospazio. La sua dimensione è quella di $W$. Punti, rette e piani qualsiasi sono sottospazi affini di dimensione 0, 1 e 2.
:::

::: domanda Come si legge un sistema per colonne, e che cosa se ne ricava?
Come una ricetta: $x_1A^1 + \cdots + x_nA^n = b$. Il sistema ha soluzioni esattamente quando $b$ si ottiene con una ricetta dalle colonne di $A$, cioè sta nel loro Span.
:::

::: domanda Come si calcola il rango con Gauss, e perché funziona?
Si riduce la matrice a scalini e si contano i pivot. Funziona perché le mosse di Gauss non cambiano lo Span delle righe, quindi nemmeno il rango. E nella forma ridotta le colonne dei pivot sono vettori della base canonica che generano tutte le altre colonne.
:::

::: domanda Che cosa dice il teorema di Rouché–Capelli?
Il sistema ha soluzioni esattamente quando la matrice dei coefficienti e la matrice completa hanno lo stesso rango. In quel caso le soluzioni formano un sottospazio affine di dimensione «numero di incognite meno rango».
:::

::: domanda Perché un sistema reale non può avere esattamente due soluzioni?
Perché se ha più di una soluzione, per Rouché–Capelli c'è almeno un'incognita libera, che può prendere infiniti valori reali. Quindi le soluzioni sono zero, una o infinite (Corollario 12.7).
:::

::: domanda Che cosa si può dire di un sistema quadrato con determinante diverso da zero? E con determinante zero?
Con determinante diverso da zero: una sola soluzione per ogni colonna di termini noti, $x = A^{-1}b$ (Corollario 12.8). Con determinante zero: zero oppure infinite soluzioni, a seconda dei termini noti; si decide confrontando i due ranghi.
:::

::: domanda Come si discute un sistema con un parametro $k$?
Se la matrice è quadrata si parte dal determinante: per i $k$ che non lo annullano la soluzione è una sola. Altrimenti si fa Gauss tenendo $k$ come lettera. I valori speciali, quelli che annullano il determinante o un pivot, si studiano a parte, sostituendoli e confrontando i due ranghi.
:::

::: domanda Come si trova una soluzione particolare e una base delle soluzioni dell'omogeneo dalla soluzione generale?
Si scrive la soluzione generale separando la parte di ogni lettera libera: $x_0 + t_1v_1 + \cdots + t_hv_h$. Con tutte le lettere a zero viene la soluzione particolare $x_0$, e i vettori $v_1, \dots, v_h$ sono una base delle soluzioni dell'omogeneo.
:::

## Glossario

```glossario
Sistema omogeneo | Sistema lineare con tutti i termini noti uguali a zero: la soluzione zero c'è sempre.
Sistema omogeneo associato | Lo stesso sistema con i termini noti messi a zero; matrice $(A \mid 0)$, o anche solo $A$.
$S$ e $S_0$ | Le soluzioni del sistema di partenza e quelle del suo omogeneo associato.
Soluzione particolare | Una soluzione qualsiasi, fissata, del sistema di partenza.
Sottospazio affine | Un sottospazio spostato: $x + W$, con $W$ sottospazio vettoriale. Punti, rette e piani qualsiasi.
Giacitura | Il sottospazio $W$ di un sottospazio affine $x + W$: la direzione senza la posizione. Per le soluzioni di un sistema è $S_0$.
Dimensione di un sottospazio affine | La dimensione della sua giacitura.
Retta e piano affini | Sottospazi affini di dimensione 1 e 2.
Colonne $A^1, \dots, A^n$ | Le colonne della matrice $A$; il sistema si legge come la ricetta $x_1A^1 + \cdots + x_nA^n = b$.
Rango $\rk(A)$ | Quante colonne dicono davvero qualcosa di nuovo; si calcola contando i pivot di una forma a scalini.
Teorema di Rouché–Capelli | Il sistema ha soluzioni esattamente quando i due ranghi sono uguali; allora le incognite libere sono le incognite meno il rango.
Corollario 12.7 | Con i numeri reali o complessi le soluzioni sono zero, una oppure infinite.
Sistema quadrato | Sistema con tante equazioni quante incognite: la matrice $A$ è quadrata.
Corollario 12.8 | Se $A$ è quadrata con determinante diverso da zero, c'è una sola soluzione, $x = A^{-1}b$.
Parametro di un sistema | Una lettera, di solito $k$, nei coefficienti o nei termini noti; si discute il sistema per ogni valore di $k$.
Caso speciale | Un valore del parametro che annulla il determinante o un pivot: va studiato a parte.
```

## Checklist

```checklist
- So scrivere il sistema omogeneo associato e spiegare perché le sue soluzioni formano un sottospazio.
- So spiegare perché le soluzioni di $Ax = b$ con $b$ diverso da zero non formano un sottospazio vettoriale.
- So usare «tutte le soluzioni = una particolare + quelle dell'omogeneo», e ricavare le due parti dalla soluzione generale.
- So dire che cos'è un sottospazio affine e qual è la sua dimensione, con esempi nel piano e nello spazio.
- So leggere un sistema per colonne e dire quando ha soluzioni.
- So calcolare il rango contando i pivot e spiegare perché le mosse di Gauss non lo cambiano.
- So enunciare il teorema di Rouché–Capelli e usarlo per contare soluzioni e incognite libere.
- So spiegare perché le soluzioni sono zero, una o infinite.
- So risolvere un sistema quadrato con determinante diverso da zero usando l'inversa, e so che con determinante zero le soluzioni sono zero o infinite.
- So discutere un sistema con un parametro, senza dimenticare i valori speciali.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 12 «Sistemi Lineari II», pp. 56–61: le sezioni 12.A–12.C sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni, teorema, corollari ed esempi mantengono la loro numerazione (Definizioni 12.1 e 12.5, Proposizioni 12.2 e 12.3, Teorema 12.6, Corollari 12.7 e 12.8, Esempi 12.4 e 12.9, Esercizi 12.10 e 12.11, svolti come esercizi 5 e 8), compreso il riquadro «Collegamento con l'informatica» sulla programmazione lineare.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §3.2 «Teorema di Rouché–Capelli» (pp. 85–93), in particolare gli Esempi 3.2.2 e 3.2.5, la giacitura, la Proposizione 3.2.9 e il Corollario 3.2.16 sui sistemi omogenei.
- **Appelli d'esame** di Algebra lineare 2023/24–2025/26 con soluzioni ufficiali (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): riportati la domanda 3 del 07/09/2026 e i problemi 11 del 05/02/2026 e del 03/07/2026; citati il problema 11 del 07/02/2025, i problemi 12 dell'08/02/2024 e del 10/07/2025 e le domande del 10/06/2024, del 10/07/2024 e del 16/01/2025. Le soluzioni qui sono scritte da capo. L'esercizio con parametro è l'esercizio 10 del Foglio 2 del tutorato (Moodle MDAG2).
- Le parti **«Oltre le dispense»** (sottospazi affini che passano per l'origine, campi finiti, sistemi omogenei e autovettori, la soluzione generale dell'Esempio 12.9, gli esercizi non numerati) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
