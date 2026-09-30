---
corso: MDAG
modulo: AG
lezione: L17
titolo: Autovalori e autovettori I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L17
descrizione: >-
  Appunti della lezione L17 di Algebra lineare e Geometria (MDAG, parte 2): autovettori e autovalori di un
  endomorfismo, endomorfismi e matrici diagonalizzabili, potenze di matrici e polinomio caratteristico, con quiz nello
  stile dell'esame ed esercizi svolti.
lede: >-
  Un endomorfismo può far girare quasi tutti i vettori, ma lungo certe rette si limita ad allungarli, accorciarli o
  ribaltarli: i vettori di quelle rette sono gli autovettori, e il fattore è l'autovalore. Se gli autovettori bastano
  per formare una base, la matrice diventa diagonale e anche $A^{100}$ si calcola in una riga. Per trovarli si usa il
  polinomio caratteristico $p_A(\lambda) = \det(A - \lambda I_n)$.
materiale: dispense
scheda:
  Dispense: lezione 17 · pp. 85–89
  Libro: Martelli, §5.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 100–130 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 17 «Autovalori e autovettori I»; B. Martelli, Geometria e algebra lineare, §5.1
file_en: L17_eigenvalues_eigenvectors_1.html
appunti_html: appunti/MDAG/L17_autovalori_autovettori_1.html
genera_html: true
---

## In breve

- Un **autovettore** di un endomorfismo $T : V \to V$ è un vettore $v \neq 0$ con $T(v) = \lambda v$ per qualche scalare $\lambda \in \K$, detto **autovalore**. L'autovalore può essere $0$; l'autovettore non può essere il vettore nullo.
- Geometricamente, $T$ manda la retta $\Span(v)$ in se stessa. Tutti i multipli non nulli di un autovettore sono autovettori con lo stesso autovalore.
- In coordinate $T(v) = \lambda v$ diventa $Ax = \lambda x$, con $A = [T]^{\mathcal B}_{\mathcal B}$ e $x = [v]_{\mathcal B}$: basta studiare le matrici.
- Una **rotazione** del piano di angolo $\vartheta \neq 0, \pi$ non ha autovettori reali: ogni vettore non nullo cambia direzione.
- $T$ è **diagonalizzabile** se $V$ ha una base di autovettori; in quella base la matrice di $T$ è **diagonale**, con gli autovalori sulla diagonale.
- Una matrice $A$ è diagonalizzabile se $D = M^{-1}AM$ è diagonale per qualche $M$ invertibile: le colonne di $M$ sono autovettori, $D$ ha i corrispondenti autovalori, nello stesso ordine.
- Con le matrici diagonali prodotti, determinanti e potenze si fanno elemento per elemento, e $A^k = MD^kM^{-1}$.
- Il **polinomio caratteristico** $p_A(\lambda) = \det(A - \lambda I_n)$ ha grado $n$ ed è lo stesso per matrici simili. Gli autovalori sono esattamente le sue radici; gli autovettori sono le soluzioni non nulle di $(A - \lambda I_n)x = 0$.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Autovettori e autovalori (p. 85)

Nella lezione L16 hai visto che la riflessione $f(x, y) = (x + y, -y)$ ha nella base canonica la matrice $\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$, che non mostra che cosa fa, e nella base $\{(1, 0), (-1, 2)\}$ una matrice diagonale: il primo vettore resta fermo, il secondo si ribalta. Questa lezione spiega come trovare, in generale, i vettori «speciali» che rendono diagonale la matrice.

Come nelle dispense, i vettori di $\K^n$ sono colonne; nel testo li scriviamo in riga, $(1, 2)$, per risparmiare spazio.

### Un esempio per cominciare

Prendi $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ e guarda che cosa fa $L_A$ ad alcuni vettori:

| $v$ | $Av$ | $Av$ è un multiplo di $v$? |
|---|---|---|
| $e_1 = (1, 0)$ | $(3, 0)$ | sì: $Av = 3v$ |
| $e_2 = (0, 1)$ | $(4, 2)$ | no: la prima componente di $v$ è 0, quella di $Av$ no |
| $(-4, 1)$ | $(-12 + 4,\ 2) = (-8, 2)$ | sì: $Av = 2v$ |
| $(1, 1)$ | $(7, 2)$ | no: $7 \neq 2$ |

Quasi tutti i vettori cambiano direzione, ma due direzioni no: sulla retta di $e_1$ i vettori vengono allungati di 3, sulla retta di $(-4, 1)$ di 2. Nel disegno le frecce chiare sono i vettori, quelle scure le loro immagini: $e_2$ «gira», gli altri due no.

```grafico
titolo: $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$: $e_1$ e $(-4, 1)$ restano sulla loro retta, $e_2$ no
x: -9 5
y: -2 4
retta: 0 0 1 0 | accento | tratteggio | sottile
retta: 0 0 -4 1 | viola | tratteggio | sottile
vettore: 1 0 | accento | tenue | $e_1$ | s
vettore: 3 0 | accento | spesso | $Ae_1 = 3e_1$ | n
vettore: -4 1 | viola | tenue | $u$ | s
vettore: -8 2 | viola | spesso | $Au = 2u$ | n
vettore: 0 1 | ambra | tenue | $e_2$ | e
vettore: 4 2 | ambra | spesso | $Ae_2$ | e
```

> [!DEF] 17.1 · Autovettore e autovalore
> Sia $T : V \to V$ un endomorfismo di uno spazio vettoriale $V$ definito su un campo $\K$. Un **autovettore** di $T$ è un vettore $v \neq 0$ in $V$ per cui
> $$T(v) = \lambda v$$
> per qualche scalare $\lambda \in \K$, che chiameremo **autovalore** di $T$ relativo a $v$.
>
> Notiamo che $\lambda$ può essere qualsiasi scalare, anche zero. D'altro canto, l'autovettore $v$ non può essere zero per definizione. In parole: un autovettore è un vettore (diverso da zero) che viene mandato da $T$ in un multiplo di se stesso.

Pezzo per pezzo:

- **$T$ è un endomorfismo**: partenza e arrivo sono lo stesso spazio $V$, altrimenti non avrebbe senso confrontare $T(v)$ con $v$.
- **$v \neq 0$**: il vettore nullo soddisfa $T(0) = 0 = \lambda \cdot 0$ per **ogni** $\lambda$; se lo ammettessimo, ogni scalare sarebbe un autovalore e la definizione non direbbe niente.
- **$\lambda = 0$ è permesso**: $T(v) = 0 \cdot v = 0$ vuol dire che $v$ è un vettore non nullo del nucleo. Quindi $0$ è un autovalore esattamente quando $\Ker T \neq \{0\}$.
- **$\lambda \in \K$**: l'autovalore deve stare nel campo su cui lavori. Vedrai che una rotazione non ha autovalori reali ma ne ha di complessi.
- **«Relativo a $v$»**: a ogni autovettore corrisponde un solo autovalore, perché da $\lambda v = \mu v$ con $v \neq 0$ segue $\lambda = \mu$.

> [!ESEMPIO] 17.2 · Due autovettori di una matrice $2 \times 2$
> Consideriamo l'endomorfismo $L_A : \R^2 \to \R^2$ con
> $$A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}.$$
> Poiché $L_A(e_1) = (3, 0) = 3e_1$, il vettore $e_1$ è autovettore di $L_A$ con autovalore $3$. Invece $L_A(e_2) = (4, 2) \neq \lambda e_2$ per qualsiasi $\lambda$ (un multiplo di $e_2$ ha prima componente 0), quindi $e_2$ non è un autovettore.
>
> Notiamo che
> $$L_A\begin{pmatrix} -4 \\ 1 \end{pmatrix} = \begin{pmatrix} -8 \\ 2 \end{pmatrix} = 2\begin{pmatrix} -4 \\ 1 \end{pmatrix},$$
> e quindi il vettore $(-4, 1)$ è autovettore con autovalore $2$.

Nello strumento qui sotto trascina il vettore $x$: quando $Ax$ (in ambra) cade sulla stessa retta di $x$ hai trovato un autovettore, e lo strumento lo segnala. Le due rette tratteggiate sono le direzioni degli autovettori. Prova poi la matrice di rotazione di 90° dai pulsanti: le rette tratteggiate spariscono.

```widget matrice
titolo: Cerca gli autovettori di $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$
a: 3 4; 0 2
x: -2 1
raggio: 5
```

> [!OLTRE] autovalore 0 e autovalore 1
> Due casi speciali, dal libro di Martelli (Osservazioni 5.1.5 e 5.1.6). Gli autovettori con autovalore $0$ sono i vettori **non nulli del nucleo**: $T(v) = 0$. Gli autovettori con autovalore $1$ sono i **punti fissi** non nulli: $T(v) = v$. Per esempio, per la proiezione $T(x, y) = (x, 0)$ i vettori $(x, 0)$ con $x \neq 0$ hanno autovalore 1 e i vettori $(0, y)$ con $y \neq 0$ hanno autovalore 0.

## In coordinate bastano le matrici (p. 85)

> [!OSSERVAZIONE] Autovettori in coordinate
> Autovettori e autovalori si studiano agevolmente in coordinate rispetto a una base. Sia $T : V \to V$ un endomorfismo, siano $\mathcal B$ una base di $V$ e $A = [T]^{\mathcal B}_{\mathcal B}$ la matrice associata. Sia $v \in V$ e sia $x = [v]_{\mathcal B} \in \K^n$ il vettore delle sue coordinate. Allora
> $$T(v) = \lambda v \iff Ax = \lambda x.$$
> L'equazione $T(v) = \lambda v$ corrisponde in coordinate ad $Ax = \lambda x$: basta capire bene il caso in cui l'endomorfismo è dato da $L_A$.

Il perché, con la lezione L15: le coordinate di $T(v)$ sono $[T(v)]_{\mathcal B} = A[v]_{\mathcal B} = Ax$ (Proposizione 15.9), quelle di $\lambda v$ sono $\lambda x$; e due vettori sono uguali se e solo se hanno le stesse coordinate. Inoltre $v \neq 0$ se e solo se $x \neq 0$. Per questo si parla di **autovalori e autovettori di una matrice** $A$: sono quelli di $L_A$.

> [!ESEMPIO] · autovettori tra i polinomi
> Sia $T : \R_1[x] \to \R_1[x]$, $T(a + bx) = b + ax$ (scambia i due coefficienti). Nella base $\mathcal B = \{1, x\}$: $T(1) = x$ e $T(x) = 1$, quindi $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
> - $A(1, 1) = (1, 1)$: il vettore di coordinate $(1, 1)$, cioè il polinomio $1 + x$, è autovettore con autovalore $1$. Controllo: $T(1 + x) = 1 + x$.
> - $A(1, -1) = (-1, 1) = -(1, -1)$: il polinomio $1 - x$ è autovettore con autovalore $-1$. Controllo: $T(1 - x) = -1 + x = -(1 - x)$.
>
> Si lavora sulla matrice, poi si traducono le coordinate in polinomi.

## Le rotazioni non hanno autovettori (p. 85)

> [!ESEMPIO] 17.3 · Una rotazione
> Sia $L_A : \R^2 \to \R^2$ con $A = \mathrm{Rot}_\vartheta$ una rotazione di angolo $\vartheta \neq 0, \pi$. Ciascun vettore $v \in \R^2$ diverso da zero viene ruotato di un angolo $\vartheta \neq 0, \pi$, e quindi la sua immagine $L_A(v)$ non può essere un multiplo di $v$: i multipli di $v$ stanno sulla retta di $v$, cioè formano con $v$ un angolo di $0$ (multipli positivi) o di $\pi$ (multipli negativi). L'endomorfismo $L_A$ non ha autovettori.

```grafico
titolo: Ruotando di $60°$, $v$ esce dalla sua retta: nessun multiplo di $v$ è uguale a $\mathrm{Rot}_{60°}\,v$
x: -3 3
y: -1.5 3
retta: 0 0 2 1 | accento | tratteggio | sottile
vettore: 2 1 | accento | spesso | $v$ | e
vettore: 0.134 2.232 | ambra | spesso | $\mathrm{Rot}_{60°}\,v$ | n
arco: 0 0 0.9 0.4636 1.5108 | grigio
testo: 0.85 0.95 | $60°$
```

> [!OLTRE] la matrice di rotazione e un controllo con i conti
> La matrice della rotazione antioraria di angolo $\vartheta$ è $\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$ (la vedrai nella lezione L22). Per $\vartheta = \frac{\pi}{2}$ è $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ e manda $(x, y)$ in $(-y, x)$. Se fosse $(-y, x) = \lambda (x, y)$, avremmo $-y = \lambda x$ e $x = \lambda y$; sostituendo, $x = \lambda(-\lambda x) = -\lambda^2 x$, cioè $(1 + \lambda^2)x = 0$. Poiché $1 + \lambda^2 > 0$ per ogni $\lambda$ reale, $x = 0$ e poi $y = -\lambda x = 0$: solo il vettore nullo, che non conta. Per $\vartheta = 0$ la rotazione è l'identità, per $\vartheta = \pi$ è $v \mapsto -v$: in questi due casi **ogni** vettore non nullo è un autovettore.

## Un esempio in $\R^3$ e i multipli di un autovettore (p. 86)

> [!ESEMPIO] 17.4 · Un autovettore di una matrice $3 \times 3$
> Consideriamo l'endomorfismo $L_A : \R^3 \to \R^3$ con
> $$A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 1 & 1 \\ 3 & 0 & 2 \end{pmatrix}.$$
> Notiamo che $L_A(e_1) = (1, 2, 3)$ (la prima colonna), che non è un multiplo di $e_1$: quindi $e_1$ non è un autovettore. Invece per $v = (0, 1, 1)$ troviamo
> $$Av = \begin{pmatrix} 0 + 1 - 1 \\ 0 + 1 + 1 \\ 0 + 0 + 2 \end{pmatrix} = \begin{pmatrix} 0 \\ 2 \\ 2 \end{pmatrix} = 2v,$$
> quindi $v$ è un autovettore con autovalore 2. Analogamente, per $w = (0, 3, 3)$ troviamo $Aw = (0, 6, 6) = 2w$: anche $w$ è un autovettore con autovalore 2. Notiamo che $w = 3v$.

> [!OSSERVAZIONE] I multipli di un autovettore
> Sia $f : V \to V$ un endomorfismo. Se $v \in V$ è autovettore per $f$ con autovalore $\lambda$, allora qualsiasi multiplo $w = \mu v$ di $v$ con $\mu \neq 0$ è anch'esso autovettore con lo stesso autovalore $\lambda$. Infatti
> $$f(\mu v) = \mu f(v) = \mu \lambda v = \lambda(\mu v).$$
> Se $v \in V$ è autovettore, tutti i vettori non nulli della retta $\Span(v)$ sono anche loro autovettori con lo stesso autovalore $\lambda$.

I passaggi della formula: il primo usa la linearità di $f$, il secondo la definizione di autovettore, il terzo solo l'ordine dei fattori. La condizione $\mu \neq 0$ serve perché $0 \cdot v = 0$ non è un autovettore. Per questo, quando un esercizio chiede «un autovettore», la risposta non è unica: vale qualsiasi multiplo non nullo, e conviene scegliere quello con i numeri più semplici.

> [!TRAPPOLA] La somma di autovettori non è sempre un autovettore
> Con $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$: $e_1$ (autovalore 3) e $u = (-4, 1)$ (autovalore 2) sono autovettori, ma $e_1 + u = (-3, 1)$ ha immagine $A(-3, 1) = (-9 + 4,\ 2) = (-5, 2)$, che non è un multiplo di $(-3, 1)$: servirebbe $\frac{-5}{-3} = \frac 21$, falso. Sommare autovettori con autovalori **diversi** fa uscire dalle rette speciali. (Con lo **stesso** autovalore, invece, la somma, se non è nulla, è ancora un autovettore: $T(v + w) = \lambda v + \lambda w = \lambda(v + w)$. Da qui nasce l'autospazio della lezione L18.)

## Endomorfismi e matrici diagonalizzabili (pp. 86–87)

Veniamo al vero motivo per cui si introducono autovettori e autovalori.

> [!DEF] 17.5 · Endomorfismo diagonalizzabile
> Un endomorfismo $T : V \to V$ è **diagonalizzabile** se $V$ ha una base $\mathcal B = \{v_1, \dots, v_n\}$ composta da autovettori per $T$.

Il termine «diagonalizzabile» è dovuto al fatto seguente, che è cruciale.

> [!PROP] 17.6
> Sia $\mathcal B = \{v_1, \dots, v_n\}$ una base qualsiasi di $V$. La matrice associata $A = [T]^{\mathcal B}_{\mathcal B}$ è diagonale se e solo se i vettori $v_1, \dots, v_n$ sono tutti autovettori per $T$.

Il motivo, colonna per colonna:

1. $v_i$ è un autovettore $\iff T(v_i) = \lambda_i v_i$ per qualche $\lambda_i \in \K$.
2. $T(v_i) = \lambda_i v_i = 0 \cdot v_1 + \dots + \lambda_i v_i + \dots + 0 \cdot v_n$ vuol dire che $[T(v_i)]_{\mathcal B} = \lambda_i e_i$: una colonna con $\lambda_i$ al posto $i$ e zeri altrove.
3. La colonna $i$ di $A$ è proprio $[T(v_i)]_{\mathcal B}$. Quindi questo capita per ogni $i = 1, \dots, n$ se e solo se $A$ è diagonale, con gli autovalori sulla diagonale principale:
$$A = \begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}.$$

Abbiamo scoperto che un endomorfismo $T$ è diagonalizzabile se e solo se esiste una base $\mathcal B$ tale che $A = [T]^{\mathcal B}_{\mathcal B}$ sia una matrice diagonale. Questo accade precisamente quando $\mathcal B$ è una base di autovettori, e gli elementi sulla diagonale principale di $A$ sono i loro autovalori. In coordinate:

> [!DEF] 17.7 · Matrice diagonalizzabile
> Una matrice $A \in M(n, \K)$ è **diagonalizzabile** se è simile a una matrice diagonale $D$. Quindi $A$ è diagonalizzabile $\iff$ esiste una matrice invertibile $M$ tale che
> $$D = M^{-1}AM$$
> è diagonale.

Il collegamento con gli endomorfismi è molto stretto:

> [!PROP] 17.8
> Sia $\mathcal B$ una base di $V$. Un endomorfismo $T : V \to V$ è diagonalizzabile $\iff$ la matrice associata $A = [T]^{\mathcal B}_{\mathcal B}$ è diagonalizzabile.

La dimostrazione delle dispense, con i passaggi:

1. **($\Rightarrow$)** Se $T$ è diagonalizzabile, esiste una base $\mathcal C$ di $V$ (di autovettori) per cui $D = [T]^{\mathcal C}_{\mathcal C}$ è diagonale. Sia $M = [\id]^{\mathcal C}_{\mathcal B}$ la matrice di cambiamento di base da $\mathcal C$ a $\mathcal B$. Per la formula della lezione L16, $[T]^{\mathcal C}_{\mathcal C} = M^{-1}[T]^{\mathcal B}_{\mathcal B}M$, cioè $D = M^{-1}AM$: $A$ è diagonalizzabile.
2. **($\Leftarrow$)** Se $D = M^{-1}AM$ è diagonale per qualche $M$ invertibile, sia $\mathcal C$ la base di $V$ formata dai vettori le cui coordinate rispetto a $\mathcal B$ sono le colonne di $M$ (sono una base perché $M$ è invertibile). Per costruzione $M = [\id]^{\mathcal C}_{\mathcal B}$, e quindi $[T]^{\mathcal C}_{\mathcal C} = M^{-1}AM = D$ è diagonale: $\mathcal C$ è una base di autovettori.

> [!ESEMPIO] 17.9 · $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ è diagonalizzabile
> L'endomorfismo $L_A : \R^2 \to \R^2$ dell'Esempio 17.2 è diagonalizzabile: $v_1 = (1, 0)$ e $v_2 = (-4, 1)$ sono entrambi autovettori e sono linearmente indipendenti (non sono uno multiplo dell'altro), quindi formano una base di $\R^2$. I loro autovalori sono $3$ e $2$. Prendendo $\mathcal B = \{v_1, v_2\}$ otteniamo
> $$[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}.$$

> [!ESEMPIO] 17.10 · Le rotazioni
> La rotazione di angolo $\vartheta$ dell'Esempio 17.3 non è diagonalizzabile per $\vartheta \neq 0, \pi$, perché non ha autovettori. Per $\vartheta = 0$ e $\vartheta = \pi$ la rotazione diventa rispettivamente $f(v) = v$ e $f(v) = -v$, e quindi è diagonalizzabile: in questi due casi ogni vettore non nullo è autovettore, e ogni base è una base di autovettori.

> [!METODO] Da una base di autovettori a $M$ e $D$
> 1. Metti gli autovettori **in colonna** in $M$, nell'ordine che preferisci: $M = [\id]^{\mathcal B}_{\mathcal C}$ con $\mathcal B$ la base di autovettori.
> 2. Metti gli autovalori sulla diagonale di $D$ **nello stesso ordine**: la colonna $j$ di $M$ ha autovalore $d_{jj}$.
> 3. Controlla che $M$ sia invertibile ($\det M \neq 0$): servono $n$ autovettori indipendenti.
> 4. Allora $D = M^{-1}AM$, cioè $A = MDM^{-1}$. **Controllo senza inversa**: $AM = MD$, perché la colonna $j$ di $AM$ è $Av_j$ e la colonna $j$ di $MD$ è $d_{jj}v_j$.
>
> Nell'Esempio 17.9: $AM = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 3 & -8 \\ 0 & 2 \end{pmatrix}$ e $MD = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -8 \\ 0 & 2 \end{pmatrix}$.

> [!TRAPPOLA] L'ordine di $D$ e le colonne di $M$
> Se scambi l'ordine delle colonne di $M$ devi scambiare anche gli autovalori in $D$: con $M = \begin{pmatrix} -4 & 1 \\ 1 & 0 \end{pmatrix}$ la matrice giusta è $D = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$. E le colonne di $M$ devono essere autovettori **indipendenti**: $(0, 1, 1)$ e $(0, 3, 3)$ dell'Esempio 17.4 sono due autovettori, ma non possono stare insieme in una base.

## Perché le matrici diagonali sono comode (p. 88)

Le matrici diagonali sono molto più maneggevoli delle altre. Ecco i conti che diventano elemento per elemento.

**Matrice per vettore**: ogni componente viene moltiplicata per il suo elemento diagonale,
$$\begin{pmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} \lambda_1 x_1 \\ \lambda_2 x_2 \\ \vdots \\ \lambda_n x_n \end{pmatrix}.$$
Per esempio $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 5 \\ -1 \end{pmatrix} = \begin{pmatrix} 15 \\ -2 \end{pmatrix}$.

**Determinante**: il prodotto degli elementi sulla diagonale, $\det A = \lambda_1 \cdots \lambda_n$.

**Prodotto di due matrici diagonali**: diagonale, con i prodotti elemento per elemento,
$$\begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix}\begin{pmatrix} \mu_1 & & \\ & \ddots & \\ & & \mu_n \end{pmatrix} = \begin{pmatrix} \lambda_1\mu_1 & & \\ & \ddots & \\ & & \lambda_n\mu_n \end{pmatrix}$$
(gli spazi vuoti sono zeri).

**Potenze**: applicando la regola del prodotto $k$ volte,
$$A = \begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix} \Longrightarrow A^k = \begin{pmatrix} \lambda_1^k & & \\ & \ddots & \\ & & \lambda_n^k \end{pmatrix}.$$
Per esempio $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}^3 = \begin{pmatrix} 27 & 0 \\ 0 & 8 \end{pmatrix}$.

### Le potenze di una matrice diagonalizzabile

Se $A$ è diagonalizzabile, $A = MDM^{-1}$, e le potenze si calcolano passando per $D$. Con $k = 3$ si vede il meccanismo: le coppie $M^{-1}M$ in mezzo si cancellano,
$$A^3 = (MDM^{-1})(MDM^{-1})(MDM^{-1}) = MD(M^{-1}M)D(M^{-1}M)DM^{-1} = MD^3M^{-1},$$
e allo stesso modo $A^k = MD^kM^{-1}$ per ogni $k$.

> [!ESEMPIO] 17.11 · Il calcolo di $A^{100}$
> Prendiamo $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ e calcoliamo $A^{100}$. La matrice $A$ non è diagonale, quindi calcolare una sua potenza direttamente richiederebbe 99 prodotti. Sappiamo però che $A$ è diagonalizzabile: dall'Esempio 17.9 deduciamo che $M^{-1}AM = D = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$, dove
> $$M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix} \Longrightarrow M^{-1} = [\id]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}.$$
> Qui $\mathcal B = \{(1, 0), (-4, 1)\}$ e $\mathcal C$ è la base canonica di $\R^2$. Quindi
> $$\begin{aligned} A^{100} &= (MDM^{-1})^{100} = MD^{100}M^{-1} = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3^{100} & 0 \\ 0 & 2^{100} \end{pmatrix}\begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix} \\ &= \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3^{100} & 4 \cdot 3^{100} \\ 0 & 2^{100} \end{pmatrix} = \begin{pmatrix} 3^{100} & 4\,(3^{100} - 2^{100}) \\ 0 & 2^{100} \end{pmatrix}. \end{aligned}$$

Un controllo con un esponente piccolo: la stessa formula con $2$ al posto di $100$ dà $\begin{pmatrix} 9 & 4(9 - 4) \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 9 & 20 \\ 0 & 4 \end{pmatrix}$, e il prodotto diretto è $A^2 = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 9 & 12 + 8 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 9 & 20 \\ 0 & 4 \end{pmatrix}$.

## Il polinomio caratteristico (p. 89)

Negli esempi visti finora gli autovettori erano dati e bastava controllarli. Come si **trovano**? Un'idea in due righe: $Ax = \lambda x$ si riscrive $Ax - \lambda x = 0$, cioè $(A - \lambda I_n)x = 0$. Cerchiamo una soluzione **non nulla** di un sistema omogeneo quadrato, e questa esiste esattamente quando la matrice $A - \lambda I_n$ non è invertibile, cioè quando il suo determinante è zero. Il determinante, scritto con $\lambda$ incognito, è un polinomio in $\lambda$.

> [!DEF] 17.12 · Polinomio caratteristico
> Sia $A \in M(n, \K)$. Il **polinomio caratteristico** di $A = (a_{ij})$ è definito nel modo seguente:
> $$p_A(\lambda) = \det(A - \lambda I_n) = \det\begin{pmatrix} a_{11} - \lambda & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} - \lambda & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & a_{nn} - \lambda \end{pmatrix}.$$

Pezzo per pezzo:

- **$A - \lambda I_n$** si ottiene togliendo $\lambda$ **solo sulla diagonale**; gli altri elementi restano uguali.
- **$\lambda$ è una variabile**: il determinante è un'espressione in $\lambda$. Si usa $\lambda$ invece di $x$ perché $x$ indica già i vettori.
- **Il pedice $A$** in $p_A$ ricorda da quale matrice si parte.

> [!OSSERVAZIONE] È davvero un polinomio di grado $n$
> Il prodotto degli elementi sulla diagonale, $(a_{11} - \lambda)\cdots(a_{nn} - \lambda)$, contiene $(-\lambda)^n$; tutti gli altri termini del determinante hanno al massimo $n - 2$ fattori con $\lambda$. Quindi $p_A$ ha grado $n$ e coefficiente direttore $(-1)^n$.

> [!OLTRE] la formula per le matrici $2 \times 2$
> Per $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
> $$p_A(\lambda) = (a - \lambda)(d - \lambda) - bc = \lambda^2 - (a + d)\lambda + (ad - bc) = \lambda^2 - \tr(A)\,\lambda + \det A.$$
> In generale (Martelli, Proposizione 5.1.23) il termine noto di $p_A$ è $p_A(0) = \det A$ e il coefficiente di $\lambda^{n-1}$ è $(-1)^{n-1}\tr A$. Per esempio, per $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$: $p_A(\lambda) = \lambda^2 - 5\lambda - 2$.

> [!OSSERVAZIONE] Matrici simili hanno lo stesso polinomio caratteristico
> Se $A$ e $B$ sono simili, allora $p_A(\lambda) = p_B(\lambda)$. Infatti, se $A = M^{-1}BM$ per qualche $M$ invertibile, usiamo $\lambda I_n = \lambda M^{-1}M = M^{-1}(\lambda I_n)M$ per ottenere
> $$\begin{aligned} p_A(\lambda) &= \det(A - \lambda I_n) = \det(M^{-1}BM - M^{-1}\lambda I_n M) \\ &= \det\big(M^{-1}(B - \lambda I_n)M\big) = \det(M^{-1})\det(B - \lambda I_n)\det(M) \\ &= \det(B - \lambda I_n) = p_B(\lambda) \end{aligned}$$
> grazie al Teorema di Binet. Per un endomorfismo $T : V \to V$ di uno spazio vettoriale $V$ definiamo allora il polinomio caratteristico $p_T(\lambda)$ come il polinomio caratteristico $p_A(\lambda)$ della matrice associata $A = [T]^{\mathcal B}_{\mathcal B}$ rispetto a una qualsiasi base $\mathcal B$ di $V$. La definizione non dipende dalla base scelta perché il polinomio caratteristico è invariante per similitudine.

I passaggi della catena: nel secondo si raccoglie $M^{-1}$ a sinistra e $M$ a destra (proprietà distributiva del prodotto di matrici); nel terzo si usa Binet, $\det(XYZ) = \det X \det Y \det Z$; nel quarto $\det(M^{-1})\det M = \det(M^{-1}M) = \det I_n = 1$.

> [!PROP] 17.13
> Gli autovalori di $T$ sono precisamente le radici del polinomio caratteristico $p_T(\lambda)$.

La dimostrazione delle dispense è una catena di equivalenze. Scegliamo una base $\mathcal B$ e scriviamo $A = [T]^{\mathcal B}_{\mathcal B}$. Uno scalare $\lambda \in \K$ è autovalore per $T$ se e solo se esiste un $x \in \K^n$ non nullo con $Ax = \lambda x$ (Osservazione in coordinate). Poi:

1. $\exists\, x \neq 0$ con $Ax = \lambda x$ $\iff$ $\exists\, x \neq 0$ con $(A - \lambda I_n)x = 0$: si porta $\lambda x = \lambda I_n x$ a sinistra;
2. $\iff$ $\exists\, x \neq 0$ con $x \in \Ker(A - \lambda I_n)$: è la definizione di nucleo;
3. $\iff$ $A - \lambda I_n$ non è invertibile: una matrice quadrata è invertibile se e solo se il suo nucleo è $\{0\}$ (lezioni L10 e L14);
4. $\iff$ $\det(A - \lambda I_n) = 0$ $\iff$ $p_A(\lambda) = 0$: una matrice quadrata è invertibile se e solo se ha determinante diverso da zero (Proposizione 10.8). $\square$

> [!ESEMPIO] 17.14 · Gli autovalori ritrovati
> Prendiamo $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$. Troviamo
> $$p_A(\lambda) = \det(A - \lambda I_2) = \det\begin{pmatrix} 3 - \lambda & 4 \\ 0 & 2 - \lambda \end{pmatrix} = (3 - \lambda)(2 - \lambda).$$
> Le radici di questo polinomio sono esattamente $\lambda = 2$ e $\lambda = 3$: gli autovalori trovati a mano nell'Esempio 17.2.

> [!METODO] Autovalori e autovettori di una matrice, passo per passo
> 1. **Scrivi $A - \lambda I_n$** (togli $\lambda$ sulla diagonale) e calcola $p_A(\lambda) = \det(A - \lambda I_n)$. Per le $3 \times 3$ sviluppa lungo la riga o la colonna con più zeri, e **lascia il polinomio scomposto** quando puoi: $(2 - \lambda)(\dots)$ è più utile di $-\lambda^3 + \dots$
> 2. **Trova le radici** in $\K$: sono gli autovalori. Controlla con la traccia: se hai trovato tutte le $n$ radici (contate con molteplicità), la loro somma è $\tr A$ e il loro prodotto è $\det A$.
> 3. **Per ogni autovalore $\lambda_0$** risolvi il sistema omogeneo $(A - \lambda_0 I_n)x = 0$ (con Gauss). Le soluzioni non nulle sono gli autovettori relativi a $\lambda_0$. Il sistema deve avere infinite soluzioni: se ti viene solo $x = 0$, c'è un errore nel calcolo di $\lambda_0$.
> 4. **Controlla** un autovettore $v$ calcolando $Av$ e confrontandolo con $\lambda_0 v$.

> [!ESEMPIO] · tutta la ricetta su una matrice $2 \times 2$
> Sia $A = \begin{pmatrix} -1 & 2 \\ -4 & 5 \end{pmatrix}$ (dal libro di Martelli, Esempio 5.1.29).
>
> **Passo 1.** $p_A(\lambda) = (-1 - \lambda)(5 - \lambda) - 2 \cdot (-4) = \lambda^2 - 4\lambda - 5 + 8 = \lambda^2 - 4\lambda + 3$. Controllo con la formula: $\tr A = 4$, $\det A = -5 + 8 = 3$.
>
> **Passo 2.** $\lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3)$: autovalori $1$ e $3$. Controllo: $1 + 3 = 4 = \tr A$ e $1 \cdot 3 = 3 = \det A$.
>
> **Passo 3.**
> - $\lambda = 1$: $A - I_2 = \begin{pmatrix} -2 & 2 \\ -4 & 4 \end{pmatrix}$, cioè $-2x + 2y = 0$ (la seconda equazione è il doppio della prima): $y = x$, autovettori $t(1, 1)$ con $t \neq 0$.
> - $\lambda = 3$: $A - 3I_2 = \begin{pmatrix} -4 & 2 \\ -4 & 2 \end{pmatrix}$, cioè $-4x + 2y = 0$: $y = 2x$, autovettori $t(1, 2)$ con $t \neq 0$.
>
> **Passo 4.** $A(1, 1) = (-1 + 2,\ -4 + 5) = (1, 1)$ e $A(1, 2) = (-1 + 4,\ -4 + 10) = (3, 6) = 3(1, 2)$.
>
> I due autovettori sono indipendenti, quindi $A$ è diagonalizzabile: con $M = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ e $D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$ vale $D = M^{-1}AM$.

> [!OLTRE] matrici triangolari e rotazioni
> **Triangolari** (Martelli, Proposizione 5.1.34). Se $A$ è triangolare (tutti zeri sotto, oppure sopra, la diagonale), anche $A - \lambda I_n$ lo è, e il determinante di una triangolare è il prodotto della diagonale: $p_A(\lambda) = (a_{11} - \lambda)\cdots(a_{nn} - \lambda)$. **Gli autovalori sono gli elementi sulla diagonale.** Negli appelli capita spesso (03/07/2026, domanda 3; 07/09/2026, problema 11).
>
> **Rotazioni.** $p_{\mathrm{Rot}_\vartheta}(\lambda) = \lambda^2 - 2\cos\vartheta\,\lambda + 1$, con discriminante $4\cos^2\vartheta - 4 < 0$ per $\vartheta \neq 0, \pi$: nessuna radice reale, come previsto dall'Esempio 17.3. Su $\C$ invece le radici ci sono: per $\vartheta = \frac{\pi}{2}$, $p(\lambda) = \lambda^2 + 1$ ha radici $\pm i$ (esercizio 6). Per questo, quando si parla di autovalori, bisogna sempre dire su quale campo si lavora.

Lo strumento qui sotto calcola il polinomio caratteristico di una matrice $2 \times 2$ o $3 \times 3$, le sue radici razionali e, per ciascuna, una base delle soluzioni di $(A - \lambda I)x = 0$. È impostato sulla matrice dell'Esempio 17.4: trovi l'autovalore 2 con l'autovettore $(0, 1, 1)$, e un fattore di secondo grado senza radici reali (esercizio 4). Prova poi la matrice $1\ 2\ 0;\ 2\ 1\ 0;\ 1\ 1\ 2$ dell'esercizio 10.

```widget gauss
titolo: Polinomio caratteristico e autovettori
matrice: 1 1 -1; 2 1 1; 3 0 2
modo: autovalori
modi: autovalori, nucleo, determinante
```

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: §5.1.1–5.1.2 «Autovettori e autovalori», «Endomorfismi diagonalizzabili» (pp. 151–154), §5.1.3–5.1.4 «Matrici diagonali», «Matrici diagonalizzabili», con l'esempio di $A^{100}$ (pp. 154–156), §5.1.6–5.1.7 «Polinomio caratteristico», «Le radici del polinomio caratteristico» (pp. 157–161, con gli esempi $2 \times 2$ su $\R$ e su $\C$), §5.1.8 «Matrici triangolari» (p. 162). La relazione tra traccia, determinante e autovalori è la Proposizione 5.2.15 (p. 169).

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste; dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame.** Autovalori e autovettori sono presenti in **ogni** appello 2023–2026: quasi sempre in una o due domande del quiz e molto spesso in un problema aperto (che userà anche la lezione L18).

| Tipo di domanda | Dove |
|---|---|
| quale di questi vettori è un autovettore? | 03/07/2026 d. 2 |
| l'insieme degli autovalori di una $3 \times 3$ | 06/09/2024 d. 10; 07/02/2025 d. 8; 05/02/2026 d. 8; 03/07/2026 d. 3 (triangolare) |
| dato un autovalore, trovare gli altri (anche complessi) | 02/09/2025 d. 4 |
| la base di autovettori di una $2 \times 2$ | 03/06/2026 d. 6 |
| che cosa non può succedere se $\lambda$ è un autovalore | 03/06/2025 d. 8 |
| problema: matrice di $T$ e autovalori | 10/07/2024 problema 11; 07/09/2026 problema 11 |

### Tre domande vere, risolte

> [!ESAME] Appello del 03/07/2026, domanda 2
> *Sia $T(x, y) = (2x + y,\ 3y)$. Quale dei vettori $(1, 1)$, $(0, 1)$, $(2, 1)$, $(-1, 1)$ è un autovettore (oppure: $T$ non ha autovettori reali)?*
>
> Soluzione. Non serve il polinomio caratteristico: si prova. Con $A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$: $A(1, 1) = (3, 3) = 3(1, 1)$, sì; $A(0, 1) = (1, 3)$, $A(2, 1) = (5, 3)$, $A(-1, 1) = (-1, 3)$, nessuno dei tre è multiplo del vettore di partenza. La risposta è $(1, 1)$, con autovalore 3. «Nessun autovettore reale» è esclusa anche perché $A$ è triangolare con autovalori reali 2 e 3.

> [!ESAME] Appello del 05/02/2026, domanda 8
> *Trovare l'insieme degli autovalori di $T(x, y, z) = (2x + y - 2z,\ -x + 2z,\ 3z)$.*
>
> Soluzione. $A = \begin{pmatrix} 2 & 1 & -2 \\ -1 & 0 & 2 \\ 0 & 0 & 3 \end{pmatrix}$. La terza riga di $A - \lambda I_3$ è $(0, 0, 3 - \lambda)$: sviluppando lungo quella riga,
> $$p_A(\lambda) = (3 - \lambda)\det\begin{pmatrix} 2 - \lambda & 1 \\ -1 & -\lambda \end{pmatrix} = (3 - \lambda)\big(-\lambda(2 - \lambda) + 1\big) = (3 - \lambda)(\lambda^2 - 2\lambda + 1) = (3 - \lambda)(\lambda - 1)^2.$$
> L'insieme degli autovalori è $\{1, 3\}$. Controllo con la traccia: $1 + 1 + 3 = 5 = 2 + 0 + 3$.

> [!ESAME] Appello del 02/09/2025, domanda 4
> *$T(x, y, z) = (2x + 2y,\ -2x - 2y + 2z,\ 2x)$ ha autovalore $\lambda_1 = 2$. Quali sono gli altri autovalori?* Le risposte erano $\pm(1 + i\sqrt 2)$, $2 \pm i\sqrt 2$, $1 + i\sqrt 2$ e $1 + i\sqrt 3$, $2 + i\sqrt 2$ e $1 - i\sqrt 3$, $-1 \pm i\sqrt 3$.
>
> Soluzione veloce. La traccia di $A = \begin{pmatrix} 2 & 2 & 0 \\ -2 & -2 & 2 \\ 2 & 0 & 0 \end{pmatrix}$ è $2 - 2 + 0 = 0$, e la somma dei tre autovalori (su $\C$) è la traccia: $\lambda_2 + \lambda_3 = 0 - 2 = -2$. Solo $-1 \pm i\sqrt 3$ ha somma $-2$. Soluzione completa: sviluppando lungo la terza riga, $p_A(\lambda) = -\lambda^3 + 8 = -(\lambda - 2)(\lambda^2 + 2\lambda + 4)$, e $\lambda^2 + 2\lambda + 4 = 0$ dà $\lambda = -1 \pm i\sqrt 3$.

### Errori da evitare

- Accettare $v = 0$ come autovettore, o scartare $\lambda = 0$ come autovalore.
- Togliere $\lambda$ anche fuori dalla diagonale: in $A - \lambda I_n$ cambia **solo** la diagonale.
- Sviluppare tutto il determinante in un polinomio di terzo grado e poi non riuscire a scomporlo: sviluppa lungo la riga o la colonna con più zeri e raccogli subito il fattore $(a - \lambda)$.
- Dimenticare di controllare: somma degli autovalori = traccia, prodotto = determinante (se hai tutte le radici), e $Av = \lambda v$ su un autovettore.
- Mettere in $D$ gli autovalori in un ordine diverso da quello delle colonne di $M$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: «$v \neq 0$, $T(v) = \lambda v$»; «$p_A(\lambda) = \det(A - \lambda I)$, $2 \times 2$: $\lambda^2 - \tr A\,\lambda + \det A$»; «autovalori = radici, autovettori = $\Ker(A - \lambda I) \setminus \{0\}$»; «triangolare: autovalori sulla diagonale»; «somma = traccia, prodotto = determinante»; «$D = M^{-1}AM$, $M$ = autovettori in colonna, $A^k = MD^kM^{-1}$».

## Quiz

```quiz
D: Sia $T : \R^2 \to \R^2$, $T(x, y) = (x + 2y,\ 3y)$. Quale di questi vettori è un autovettore di $T$?
+ $(1, 1)$
- $(0, 1)$
- $(1, 2)$
- $(2, 1)$
- $T$ non ha autovettori reali.
= $T(1, 1) = (3, 3) = 3(1, 1)$. Gli altri: $T(0, 1) = (2, 3)$, $T(1, 2) = (5, 6)$, $T(2, 1) = (4, 3)$, nessuno multiplo del vettore di partenza. La matrice $\begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$ è triangolare con autovalori reali 1 e 3, quindi l'ultima risposta è falsa. Simile all'appello del 03/07/2026, domanda 2.

D: L'insieme degli autovalori di $T : \R^3 \to \R^3$, $T(x, y, z) = (2x + z,\ x + 3y - z,\ z)$, è:
+ $\{1, 2, 3\}$
- $\{2, 3\}$
- $\{0, 1, 3\}$
- $\{-1, 2, 3\}$
- $\{\}$ (nessun autovalore reale)
= $A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 3 & -1 \\ 0 & 0 & 1 \end{pmatrix}$. Sviluppando $\det(A - \lambda I_3)$ lungo la terza riga $(0, 0, 1 - \lambda)$: $p_A(\lambda) = (1 - \lambda)\big((2 - \lambda)(3 - \lambda) - 0\big)$. Radici $1, 2, 3$; controllo: $1 + 2 + 3 = 6 = \tr A$. Simile agli appelli del 07/02/2025 (domanda 8) e del 05/02/2026 (domanda 8).

D: L'endomorfismo $T(x, y, z) = (x,\ y - 2z,\ y + z)$ di $\R^3$ ha autovalore $\lambda_1 = 1$. Quali sono gli altri autovalori (in $\C$)?
+ $1 \pm i\sqrt 2$
- $\pm(1 + i\sqrt 2)$
- $1 \pm \sqrt 2$
- $-1 \pm i\sqrt 2$
- $2 \pm i$
= Sviluppando lungo la prima riga $(1 - \lambda, 0, 0)$: $p(\lambda) = (1 - \lambda)\big((1 - \lambda)^2 + 2\big)$. Da $(1 - \lambda)^2 = -2$ viene $\lambda = 1 \pm i\sqrt 2$. Controllo con la traccia: $1 + (1 + i\sqrt 2) + (1 - i\sqrt 2) = 3 = 1 + 1 + 1$. Simile all'appello del 02/09/2025, domanda 4.

D: $T(x, y) = (2x,\ x + 3y)$ ha autovalori 2 e 3. Una base di autovettori è:
+ $\{(1, -1), (0, 1)\}$
- $\{(2, 1), (0, 3)\}$
- $\{(1, 1), (0, 1)\}$
- $\{(1, 0), (0, 1)\}$
- $\{(1, -1), (2, -2)\}$
= Per $\lambda = 3$: $T(0, 1) = (0, 3) = 3(0, 1)$. Per $\lambda = 2$: $(A - 2I)x = 0$ con $A - 2I = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$ dà $x + y = 0$, cioè $(1, -1)$; controllo $T(1, -1) = (2, -2)$. La seconda risposta sono le colonne di $A$; l'ultima non è una base (vettori proporzionali). Simile all'appello del 03/06/2026, domanda 6.

D: Sia $\lambda$ un autovalore dell'endomorfismo $T : \R^n \to \R^n$. Quale di queste affermazioni è **sempre falsa**?
+ $\Ker(T - \lambda\,\id) = \{0\}$
- $\lambda = 0$
- $T$ è invertibile.
- $p_T(\lambda) = 0$
- $T - \lambda\,\id$ non è iniettiva.
= Se $\lambda$ è un autovalore esiste $v \neq 0$ con $(T - \lambda\,\id)(v) = 0$, quindi il nucleo di $T - \lambda\,\id$ non è mai $\{0\}$. Le ultime due sono sempre vere (Proposizione 17.13). $\lambda = 0$ può capitare (quando $T$ non è invertibile), e $T$ invertibile può capitare (quando $0$ non è autovalore). Simile all'appello del 03/06/2025, domanda 8.

D: Il polinomio caratteristico di $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ è:
+ $\lambda^2 - 5\lambda - 2$
- $\lambda^2 + 5\lambda - 2$
- $\lambda^2 - 5\lambda + 10$
- $(1 - \lambda)(4 - \lambda)$
- $\lambda^2 - 2\lambda - 5$
= $(1 - \lambda)(4 - \lambda) - 2 \cdot 3 = \lambda^2 - 5\lambda + 4 - 6 = \lambda^2 - 5\lambda - 2$. Con la formula: $\tr A = 5$ e $\det A = -2$. La quarta risposta dimentica il termine $-bc$ (quella formula vale solo per le triangolari).

D: Sia $A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$. Quanto vale l'elemento di posto $(1, 2)$ di $A^{10}$?
N: 1023
= Autovettori: $(1, 0)$ con autovalore 1 e $(1, 1)$ con autovalore 2 (infatti $A(1, 1) = (2, 2)$). Con $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e $M^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$: $A^n = M\begin{pmatrix} 1 & 0 \\ 0 & 2^n \end{pmatrix}M^{-1} = \begin{pmatrix} 1 & 2^n - 1 \\ 0 & 2^n \end{pmatrix}$. Per $n = 10$: $2^{10} - 1 = 1023$. Controllo con $n = 2$: $A^2 = \begin{pmatrix} 1 & 3 \\ 0 & 4 \end{pmatrix}$.

D: Se $v$ è un autovettore di $T$ con autovalore $\lambda$, allora il vettore $3v$ è:
+ un autovettore di $T$ con autovalore $\lambda$.
- un autovettore di $T$ con autovalore $3\lambda$.
- un autovettore di $T$ con autovalore $\lambda / 3$.
- un autovettore solo se $\lambda \neq 0$.
- non è un autovettore.
= $T(3v) = 3T(v) = 3\lambda v = \lambda(3v)$ e $3v \neq 0$: stesso autovalore $\lambda$, qualunque sia $\lambda$ (anche $0$). È l'osservazione sui multipli dopo l'Esempio 17.4.

D: Quale di queste matrici reali **non** ha autovalori reali?
+ $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & -3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$
= Polinomi caratteristici: $\lambda^2 + 1$ (nessuna radice reale: è la rotazione di $90°$); $\lambda^2 - 1$ (radici $\pm 1$); $(\lambda - 1)^2$; $(2 - \lambda)(-3 - \lambda)$; $\lambda^2 - 2\lambda - 3 = (\lambda - 3)(\lambda + 1)$.

D: Le matrici $A$ e $B$ sono simili e $p_A(\lambda) = \lambda^2 - 3\lambda + 2$. Quale affermazione è vera?
+ $B$ ha autovalori $1$ e $2$.
- $B = A$.
- $A$ e $B$ hanno gli stessi autovettori.
- $\det B = 3$.
- $\tr B = 2$.
= Matrici simili hanno lo stesso polinomio caratteristico, quindi $p_B(\lambda) = \lambda^2 - 3\lambda + 2 = (\lambda - 1)(\lambda - 2)$. Dalla formula $2 \times 2$: $\tr B = 3$ e $\det B = 2$. Gli autovettori in genere cambiano: nell'Esempio 16.10, $e_2$ è autovettore di $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ ma non della matrice simile $\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$.
```

## Esercizi

::: esercizio base Controllare se un vettore è un autovettore
Sia $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Quali tra $(1, 1)$, $(1, -1)$, $(1, 0)$ sono autovettori di $A$, e con quale autovalore?
::: soluzione
- $A(1, 1) = (2 + 1,\ 1 + 2) = (3, 3) = 3(1, 1)$: autovettore con autovalore $3$.
- $A(1, -1) = (2 - 1,\ 1 - 2) = (1, -1) = 1 \cdot (1, -1)$: autovettore con autovalore $1$.
- $A(1, 0) = (2, 1)$: per essere un multiplo di $(1, 0)$ dovrebbe avere seconda componente 0. Non è un autovettore.

Controllo: $p_A(\lambda) = \lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3)$ (traccia 4, determinante 3), radici 1 e 3.
:::

::: esercizio base Autovalori, autovettori, $M$ e $D$
Trova autovalori e autovettori di $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ e scrivi $M$ invertibile e $D$ diagonale con $D = M^{-1}AM$.
::: soluzione
**Polinomio caratteristico**: $\tr A = 7$, $\det A = 12 - 2 = 10$, quindi $p_A(\lambda) = \lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5)$. Autovalori $2$ e $5$ (controllo: $2 + 5 = 7$, $2 \cdot 5 = 10$).

**$\lambda = 2$**: $A - 2I_2 = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$, equazione $2x + y = 0$, cioè $y = -2x$: autovettore $(1, -2)$. Controllo: $A(1, -2) = (4 - 2,\ 2 - 6) = (2, -4) = 2(1, -2)$.

**$\lambda = 5$**: $A - 5I_2 = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$, equazione $-x + y = 0$: autovettore $(1, 1)$. Controllo: $A(1, 1) = (5, 5)$.

$$M = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}.$$
$\det M = 1 + 2 = 3 \neq 0$. Controllo $AM = MD$: $AM = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$ e $MD = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$.
:::

::: esercizio medio Una formula per tutte le potenze
Con la matrice $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ dell'esercizio precedente, trova una formula per $A^n$ e controllala per $n = 2$.
::: soluzione
$M^{-1} = \frac 13 \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$ ($\det M = 3$). Allora
$$A^n = MD^nM^{-1} = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} 2^n & 0 \\ 0 & 5^n \end{pmatrix}\frac 13\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} = \frac 13\begin{pmatrix} 2^n & 5^n \\ -2^{n+1} & 5^n \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$$
$$= \frac 13\begin{pmatrix} 2^n + 2 \cdot 5^n & -2^n + 5^n \\ -2^{n+1} + 2 \cdot 5^n & 2^{n+1} + 5^n \end{pmatrix}.$$
Per $n = 2$: $\frac 13\begin{pmatrix} 4 + 50 & -4 + 25 \\ -8 + 50 & 8 + 25 \end{pmatrix} = \frac 13\begin{pmatrix} 54 & 21 \\ 42 & 33 \end{pmatrix} = \begin{pmatrix} 18 & 7 \\ 14 & 11 \end{pmatrix}$. Il prodotto diretto: $A^2 = \begin{pmatrix} 16 + 2 & 4 + 3 \\ 8 + 6 & 2 + 9 \end{pmatrix} = \begin{pmatrix} 18 & 7 \\ 14 & 11 \end{pmatrix}$.
:::

::: esercizio medio Il polinomio caratteristico dell'Esempio 17.4
Calcola il polinomio caratteristico di $A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 1 & 1 \\ 3 & 0 & 2 \end{pmatrix}$. Quali sono gli autovalori reali? E quelli complessi? $A$ è diagonalizzabile su $\R$?
::: soluzione
Sviluppo $\det(A - \lambda I_3)$ lungo la seconda colonna $(1,\ 1 - \lambda,\ 0)$, che ha uno zero:
$$\det\begin{pmatrix} 1 - \lambda & 1 & -1 \\ 2 & 1 - \lambda & 1 \\ 3 & 0 & 2 - \lambda \end{pmatrix} = -1 \cdot \det\begin{pmatrix} 2 & 1 \\ 3 & 2 - \lambda \end{pmatrix} + (1 - \lambda)\det\begin{pmatrix} 1 - \lambda & -1 \\ 3 & 2 - \lambda \end{pmatrix}.$$
I segni: posto $(1, 2)$ segno $-$, posto $(2, 2)$ segno $+$. I due minori:
- $\det\begin{pmatrix} 2 & 1 \\ 3 & 2 - \lambda \end{pmatrix} = 4 - 2\lambda - 3 = 1 - 2\lambda$;
- $\det\begin{pmatrix} 1 - \lambda & -1 \\ 3 & 2 - \lambda \end{pmatrix} = (1 - \lambda)(2 - \lambda) + 3 = \lambda^2 - 3\lambda + 5$.

Quindi
$$p_A(\lambda) = -(1 - 2\lambda) + (1 - \lambda)(\lambda^2 - 3\lambda + 5) = -1 + 2\lambda + \lambda^2 - 3\lambda + 5 - \lambda^3 + 3\lambda^2 - 5\lambda = -\lambda^3 + 4\lambda^2 - 6\lambda + 4.$$
Sappiamo dall'Esempio 17.4 che $2$ è un autovalore: infatti $p_A(2) = -8 + 16 - 12 + 4 = 0$. Dividendo per $\lambda - 2$ (Ruffini, lezione L04): $p_A(\lambda) = -(\lambda - 2)(\lambda^2 - 2\lambda + 2)$. Il fattore $\lambda^2 - 2\lambda + 2$ ha discriminante $4 - 8 = -4 < 0$: radici $1 \pm i$.

Autovalori reali: solo $2$. Su $\C$: $2$, $1 + i$, $1 - i$. Controllo: $2 + (1 + i) + (1 - i) = 4 = \tr A$ e $2(1 + i)(1 - i) = 2 \cdot 2 = 4 = \det A$.

Su $\R$ gli autovettori sono solo quelli di autovalore 2, e $(A - 2I_3)x = 0$ ha soluzioni $t(0, 1, 1)$ (una retta): non ci sono tre autovettori indipendenti, quindi $A$ **non** è diagonalizzabile su $\R$.
:::

::: esercizio medio Un endomorfismo di $\R_1[x]$
Sia $T : \R_1[x] \to \R_1[x]$, $T(a + bx) = b + ax$. Trova autovalori e autovettori (come polinomi). $T$ è diagonalizzabile? Scrivi la matrice di $T$ in una base di autovettori.
::: soluzione
Nella base $\{1, x\}$: $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $p_A(\lambda) = \lambda^2 - 0 \cdot \lambda + (0 - 1) = \lambda^2 - 1 = (\lambda - 1)(\lambda + 1)$.

- $\lambda = 1$: $A - I_2 = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}$, $y = x$: coordinate $(1, 1)$, polinomio $1 + x$.
- $\lambda = -1$: $A + I_2 = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $y = -x$: coordinate $(1, -1)$, polinomio $1 - x$.

$\{1 + x,\ 1 - x\}$ è una base di autovettori, quindi $T$ è diagonalizzabile e in questa base $[T] = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$. Controllo: $T(1 + x) = 1 + x$, $T(1 - x) = -1 + x = -(1 - x)$.
:::

::: esercizio medio La rotazione di $90°$ su $\R$ e su $\C$ (oltre le dispense)
Sia $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$. (a) Mostra che $L_A : \R^2 \to \R^2$ non ha autovalori. (b) Considera $L_A : \C^2 \to \C^2$ con la stessa matrice: trova autovalori e autovettori. $A$ è diagonalizzabile su $\C$?
::: soluzione
(a) $p_A(\lambda) = \lambda^2 - 0 \cdot \lambda + (0 + 1) = \lambda^2 + 1$, che non ha radici reali ($\lambda^2 \ge 0$). Nessun autovalore reale, quindi nessun autovettore in $\R^2$.

(b) Su $\C$: $\lambda^2 + 1 = 0$ per $\lambda = \pm i$.
- $\lambda = i$: $A - iI_2 = \begin{pmatrix} -i & -1 \\ 1 & -i \end{pmatrix}$. La seconda equazione è $x - iy = 0$, cioè $x = iy$: autovettore $(i, 1)$. Controllo: $A(i, 1) = (-1, i) = i\,(i, 1)$, perché $i \cdot i = -1$.
- $\lambda = -i$: $x + iy = 0$, cioè $x = -iy$: autovettore $(-i, 1)$. Controllo: $A(-i, 1) = (-1, -i) = -i\,(-i, 1)$.

I due autovettori sono indipendenti ($\det\begin{pmatrix} i & -i \\ 1 & 1 \end{pmatrix} = i + i = 2i \neq 0$), quindi su $\C$ la matrice è diagonalizzabile con $D = \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix}$. La stessa matrice è diagonalizzabile su $\C$ ma non su $\R$ (Martelli, Esempio 5.1.31): negli appelli con parametro $k \in \C$ questo conta.
:::

::: esercizio base Autovalori di una matrice triangolare
Trova gli autovalori di $A = \begin{pmatrix} 2 & 5 & -1 \\ 0 & -1 & 7 \\ 0 & 0 & 3 \end{pmatrix}$ spiegando perché non serve sviluppare tutto il determinante. Poi trova un autovettore per l'autovalore $2$.
::: soluzione
$A - \lambda I_3 = \begin{pmatrix} 2 - \lambda & 5 & -1 \\ 0 & -1 - \lambda & 7 \\ 0 & 0 & 3 - \lambda \end{pmatrix}$ è ancora triangolare superiore, e il determinante di una triangolare è il prodotto della diagonale (lezione L09). Quindi $p_A(\lambda) = (2 - \lambda)(-1 - \lambda)(3 - \lambda)$ e gli autovalori sono $2, -1, 3$: gli elementi della diagonale.

Autovettore per $2$: $A - 2I_3 = \begin{pmatrix} 0 & 5 & -1 \\ 0 & -3 & 7 \\ 0 & 0 & 1 \end{pmatrix}$. Dalla terza riga $z = 0$, poi dalla prima $5y = 0$: $y = 0$; $x$ è libera. Autovettore $e_1 = (1, 0, 0)$. Controllo: $Ae_1$ è la prima colonna, $(2, 0, 0) = 2e_1$.
:::

::: esercizio difficile Autovalore zero, potenze e inversa
Sia $A \in M(n, \K)$. (a) Dimostra che $0$ è un autovalore di $A$ se e solo se $A$ non è invertibile. (b) Dimostra che se $v$ è autovettore di $A$ con autovalore $\lambda$, allora $v$ è autovettore di $A^2$ con autovalore $\lambda^2$. (c) Se $A$ è invertibile e $Av = \lambda v$ con $v \neq 0$, dimostra che $\lambda \neq 0$ e che $v$ è autovettore di $A^{-1}$ con autovalore $\frac 1\lambda$.
::: soluzione
(a) Per la Proposizione 17.13, $0$ è autovalore $\iff p_A(0) = 0 \iff \det(A - 0 \cdot I_n) = \det A = 0 \iff A$ non è invertibile.

(b) $A^2v = A(Av) = A(\lambda v) = \lambda Av = \lambda \cdot \lambda v = \lambda^2 v$, e $v \neq 0$.

(c) Se fosse $\lambda = 0$, avremmo $Av = 0$ con $v \neq 0$, cioè $\Ker A \neq \{0\}$, impossibile per una matrice invertibile. Moltiplicando $Av = \lambda v$ a sinistra per $A^{-1}$: $v = \lambda A^{-1}v$, quindi $A^{-1}v = \frac 1\lambda v$.

Esempio: $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ ha autovalori $3, 2$; $A^2 = \begin{pmatrix} 9 & 20 \\ 0 & 4 \end{pmatrix}$ ha autovalori $9, 4$, e $A^{-1} = \frac 16\begin{pmatrix} 2 & -4 \\ 0 & 3 \end{pmatrix}$ ha autovalori $\frac 13, \frac 12$.
:::

::: esercizio difficile Una matrice e la sua trasposta
(a) Dimostra che $A$ e ${}^tA$ hanno lo stesso polinomio caratteristico. (b) Mostra con $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ che però non hanno gli stessi autovettori.
::: soluzione
(a) ${}^tA - \lambda I_n = {}^t(A - \lambda I_n)$, perché $I_n$ è simmetrica e la trasposta di una somma è la somma delle trasposte. Una matrice e la sua trasposta hanno lo stesso determinante (lezione L09), quindi $p_{{}^tA}(\lambda) = \det\big({}^t(A - \lambda I_n)\big) = \det(A - \lambda I_n) = p_A(\lambda)$.

(b) ${}^tA = \begin{pmatrix} 3 & 0 \\ 4 & 2 \end{pmatrix}$ ha gli stessi autovalori $3$ e $2$. Ma ${}^tA\,e_1 = (3, 4)$, che non è un multiplo di $e_1$: $e_1$ è autovettore di $A$ e non di ${}^tA$. Gli autovettori di ${}^tA$: per $\lambda = 3$, ${}^tA - 3I_2 = \begin{pmatrix} 0 & 0 \\ 4 & -1 \end{pmatrix}$ dà $y = 4x$, autovettore $(1, 4)$; per $\lambda = 2$, ${}^tA - 2I_2 = \begin{pmatrix} 1 & 0 \\ 4 & 0 \end{pmatrix}$ dà $x = 0$, autovettore $(0, 1)$.
:::

::: esercizio esame Come all'esame: autovalori, autovettori e diagonalizzazione in $\R^3$
Sia $T : \R^3 \to \R^3$, $T(x, y, z) = (x + 2y,\ 2x + y,\ x + y + 2z)$.
(1) Scrivi la matrice $A$ di $T$ nella base canonica e calcola il polinomio caratteristico.
(2) Trova gli autovalori e, per ciascuno, un autovettore.
(3) Mostra che gli autovettori trovati formano una base di $\R^3$ e scrivi $M$ e $D$ con $D = M^{-1}AM$.
::: soluzione
(1) $A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 0 \\ 1 & 1 & 2 \end{pmatrix}$. La terza colonna di $A - \lambda I_3$ è $(0, 0, 2 - \lambda)$: sviluppando lungo di essa,
$$p_A(\lambda) = (2 - \lambda)\det\begin{pmatrix} 1 - \lambda & 2 \\ 2 & 1 - \lambda \end{pmatrix} = (2 - \lambda)\big((1 - \lambda)^2 - 4\big) = (2 - \lambda)(\lambda - 3)(\lambda + 1),$$
perché $(1 - \lambda)^2 - 4 = (1 - \lambda - 2)(1 - \lambda + 2) = (-1 - \lambda)(3 - \lambda)$.

(2) Autovalori $3, -1, 2$ (controllo: $3 - 1 + 2 = 4 = \tr A$).
- $\lambda = 3$: $A - 3I_3 = \begin{pmatrix} -2 & 2 & 0 \\ 2 & -2 & 0 \\ 1 & 1 & -1 \end{pmatrix}$: dalla prima riga $y = x$, dalla terza $z = x + y = 2x$. Autovettore $(1, 1, 2)$; controllo $A(1, 1, 2) = (3, 3, 6)$.
- $\lambda = -1$: $A + I_3 = \begin{pmatrix} 2 & 2 & 0 \\ 2 & 2 & 0 \\ 1 & 1 & 3 \end{pmatrix}$: $y = -x$, poi $x + y + 3z = 0$ dà $z = 0$. Autovettore $(1, -1, 0)$; controllo $A(1, -1, 0) = (-1, 1, 0)$.
- $\lambda = 2$: $A - 2I_3 = \begin{pmatrix} -1 & 2 & 0 \\ 2 & -1 & 0 \\ 1 & 1 & 0 \end{pmatrix}$: dalle prime due righe $x = 2y$ e $y = 2x$, quindi $x = y = 0$; $z$ è libera. Autovettore $e_3 = (0, 0, 1)$; controllo $Ae_3 = (0, 0, 2)$.

(3) $M = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \\ 2 & 0 & 1 \end{pmatrix}$, con $\det M = 1 \cdot (-1 - 0) - 1 \cdot (1 - 0) + 0 = -2 \neq 0$ (sviluppo lungo la prima riga): le colonne sono una base. $D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$, nello stesso ordine. Controllo: $AM = \begin{pmatrix} 3 & -1 & 0 \\ 3 & 1 & 0 \\ 6 & 0 & 2 \end{pmatrix} = MD$.
:::

::: esercizio esame Come all'esame: $A = PDP^{-1}$ per una matrice triangolare
Sia $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 3 & 1 \\ 0 & 0 & -1 \end{pmatrix}$.
(1) Trova gli autovalori di $A$.
(2) Trova un autovettore per ciascun autovalore.
(3) Trova una matrice invertibile $P$ e una diagonale $D$ tali che $A = PDP^{-1}$, e controlla il risultato senza calcolare $P^{-1}$.
::: soluzione
(1) $A$ è triangolare: autovalori $1, 3, -1$.

(2)
- $\lambda = 1$: $A - I_3 = \begin{pmatrix} 0 & 2 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & -2 \end{pmatrix}$: $z = 0$, poi $y = 0$, $x$ libera. Autovettore $(1, 0, 0)$.
- $\lambda = 3$: $A - 3I_3 = \begin{pmatrix} -2 & 2 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & -4 \end{pmatrix}$: $z = 0$, $-2x + 2y = 0$ cioè $y = x$. Autovettore $(1, 1, 0)$.
- $\lambda = -1$: $A + I_3 = \begin{pmatrix} 2 & 2 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 0 \end{pmatrix}$: $z = -4y$ e $x = -y$. Con $y = -1$: autovettore $(1, -1, 4)$.

(3) $P = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 4 \end{pmatrix}$ (autovettori in colonna), $D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & -1 \end{pmatrix}$. $P$ è triangolare con $\det P = 1 \cdot 1 \cdot 4 = 4 \neq 0$. $A = PDP^{-1}$ equivale a $AP = PD$: le colonne di $AP$ sono $A(1, 0, 0) = (1, 0, 0)$, $A(1, 1, 0) = (3, 3, 0)$, $A(1, -1, 4) = (1 - 2,\ -3 + 4,\ -4) = (-1, 1, -4)$, e le colonne di $PD$ sono $1 \cdot (1, 0, 0)$, $3 \cdot (1, 1, 0)$, $-1 \cdot (1, -1, 4)$: coincidono.
:::

## Domande di ripasso

::: domanda Che cos'è un autovettore? E un autovalore?
Un autovettore di $T : V \to V$ è un vettore $v \neq 0$ tale che $T(v) = \lambda v$ per qualche $\lambda \in \K$; lo scalare $\lambda$ è l'autovalore relativo a $v$.
:::

::: domanda Perché il vettore nullo non può essere un autovettore, mentre $0$ può essere un autovalore?
Perché $T(0) = \lambda \cdot 0$ vale per ogni $\lambda$: ogni scalare sarebbe un autovalore. Invece l'autovalore $0$ ha un significato preciso: i suoi autovettori sono i vettori non nulli del nucleo.
:::

::: domanda Che cosa succede ai multipli di un autovettore?
Ogni multiplo $\mu v$ con $\mu \neq 0$ è un autovettore con lo stesso autovalore: $T(\mu v) = \mu T(v) = \lambda(\mu v)$. Tutta la retta $\Span(v)$, tolto lo zero, è fatta di autovettori.
:::

::: domanda Perché si possono studiare gli autovettori usando solo le matrici?
Perché, con $A = [T]^{\mathcal B}_{\mathcal B}$ e $x = [v]_{\mathcal B}$, vale $T(v) = \lambda v \iff Ax = \lambda x$ (le coordinate di $T(v)$ sono $Ax$ e quelle di $\lambda v$ sono $\lambda x$).
:::

::: domanda Perché una rotazione di angolo $\vartheta \neq 0, \pi$ non ha autovettori reali?
Perché ogni vettore non nullo viene ruotato di $\vartheta$, e i suoi multipli formano con lui un angolo di $0$ o di $\pi$. Con i conti: $p(\lambda) = \lambda^2 - 2\cos\vartheta\,\lambda + 1$ ha discriminante negativo.
:::

::: domanda Quando un endomorfismo si dice diagonalizzabile? Da dove viene il nome?
Quando $V$ ha una base di autovettori. Il nome viene dalla Proposizione 17.6: la matrice di $T$ in una base è diagonale se e solo se la base è fatta di autovettori, e allora sulla diagonale ci sono gli autovalori.
:::

::: domanda Quando una matrice è diagonalizzabile, e chi sono $M$ e $D$?
Quando è simile a una diagonale: $D = M^{-1}AM$ con $M$ invertibile. Le colonne di $M$ sono autovettori indipendenti, e $D$ ha sulla diagonale i relativi autovalori, nello stesso ordine.
:::

::: domanda Come si calcola $A^k$ se $A$ è diagonalizzabile?
$A = MDM^{-1}$, quindi $A^k = MD^kM^{-1}$ (le coppie $M^{-1}M$ in mezzo si cancellano), e $D^k$ si ottiene elevando alla $k$ gli elementi della diagonale.
:::

::: domanda Che cos'è il polinomio caratteristico e che grado ha?
$p_A(\lambda) = \det(A - \lambda I_n)$: il determinante della matrice con $\lambda$ tolto sulla diagonale. È un polinomio di grado $n$; per una $2 \times 2$ vale $\lambda^2 - \tr A\,\lambda + \det A$.
:::

::: domanda Perché il polinomio caratteristico di un endomorfismo non dipende dalla base?
Perché matrici simili hanno lo stesso polinomio caratteristico: $\det(M^{-1}BM - \lambda I) = \det\big(M^{-1}(B - \lambda I)M\big) = \det(B - \lambda I)$ per il Teorema di Binet.
:::

::: domanda Perché gli autovalori sono le radici del polinomio caratteristico?
$\lambda$ è autovalore $\iff$ esiste $x \neq 0$ con $(A - \lambda I)x = 0$ $\iff$ $A - \lambda I$ non è invertibile $\iff$ $\det(A - \lambda I) = 0$ (Proposizione 17.13).
:::

::: domanda Come si trovano gli autovettori una volta noto un autovalore $\lambda_0$?
Si risolve il sistema omogeneo $(A - \lambda_0 I)x = 0$: le soluzioni non nulle sono gli autovettori. Il sistema ha sempre infinite soluzioni, perché $A - \lambda_0 I$ non è invertibile.
:::

## Glossario

```glossario
Endomorfismo | Applicazione lineare $T : V \to V$, con partenza e arrivo uguali.
Autovettore | Vettore $v \neq 0$ con $T(v) = \lambda v$ per qualche scalare $\lambda$ (Definizione 17.1).
Autovalore | Lo scalare $\lambda$ tale che $T(v) = \lambda v$ per qualche autovettore $v$; può essere $0$.
Retta invariante | Retta $\Span(v)$ mandata da $T$ dentro se stessa; succede esattamente quando $v$ è un autovettore.
Punto fisso | Vettore con $T(v) = v$; i punti fissi non nulli sono gli autovettori di autovalore 1.
Endomorfismo diagonalizzabile | $V$ ha una base di autovettori di $T$ (Definizione 17.5).
Matrice diagonalizzabile | Matrice simile a una diagonale: $D = M^{-1}AM$ (Definizione 17.7).
Matrice diagonale | Matrice con zeri fuori dalla diagonale principale; prodotti, determinante e potenze si calcolano elemento per elemento.
$M$ e $D$ | Nella diagonalizzazione, $M$ ha gli autovettori in colonna e $D$ gli autovalori sulla diagonale, nello stesso ordine; $AM = MD$.
Potenza di una diagonalizzabile | $A^k = MD^kM^{-1}$.
Polinomio caratteristico | $p_A(\lambda) = \det(A - \lambda I_n)$, polinomio di grado $n$ (Definizione 17.12).
Invarianza per similitudine | Matrici simili hanno lo stesso polinomio caratteristico; per questo $p_T$ di un endomorfismo è ben definito.
Formula $2 \times 2$ | $p_A(\lambda) = \lambda^2 - \tr A\,\lambda + \det A$.
Matrice triangolare | Zeri sotto (o sopra) la diagonale; i suoi autovalori sono gli elementi diagonali.
Rotazione $\mathrm{Rot}_\vartheta$ | $\begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$; per $\vartheta \neq 0, \pi$ non ha autovalori reali.
Traccia e autovalori | Se $p_A$ ha tutte le radici in $\K$: somma degli autovalori = $\tr A$, prodotto = $\det A$.
```

## Checklist

```checklist
- So dire che cos'è un autovettore e un autovalore, e perché $v \neq 0$ ma $\lambda = 0$ è ammesso.
- So controllare in un attimo se un vettore dato è un autovettore, calcolando $Av$.
- So che i multipli non nulli di un autovettore sono autovettori con lo stesso autovalore, e che la somma di autovettori con autovalori diversi in genere non lo è.
- So spiegare perché una rotazione di angolo $\vartheta \neq 0, \pi$ non ha autovettori reali.
- So la definizione di endomorfismo e di matrice diagonalizzabile e il legame tra base di autovettori e matrice diagonale.
- So costruire $M$ e $D$ da una base di autovettori e controllare con $AM = MD$.
- So calcolare $A^k$ con $A^k = MD^kM^{-1}$.
- So calcolare il polinomio caratteristico di una $2 \times 2$ (con traccia e determinante) e di una $3 \times 3$ (sviluppando lungo la riga o colonna con più zeri).
- So perché gli autovalori sono le radici di $p_A$ e trovo gli autovettori risolvendo $(A - \lambda I)x = 0$.
- So riconoscere al volo gli autovalori di una matrice triangolare e controllo i risultati con traccia e determinante.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 17 «Autovalori e autovettori I», pp. 85–89: le sezioni 17.A (definizione ed esempi), 17.B (endomorfismi e matrici diagonalizzabili), 17.C (matrici diagonali) e 17.D (polinomio caratteristico) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizioni 17.1, 17.5, 17.7, 17.12; Proposizioni 17.6, 17.8, 17.13; Esempi 17.2–17.4, 17.9–17.11, 17.14). La lezione 17 delle dispense non ha una sezione di esercizi: quelli qui sono tutti aggiunti.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §5.1.1–5.1.8 (autovettori, diagonalizzabilità, matrici diagonali e diagonalizzabili, polinomio caratteristico, esempi $2 \times 2$ su $\R$ e $\C$, matrici triangolari) e la Proposizione 5.2.15 (traccia, determinante e autovalori).
- **Esame**: appelli del 10/07/2024 (problema 11), 06/09/2024 (domanda 10), 07/02/2025 (domanda 8), 03/06/2025 (domanda 8), 02/09/2025 (domanda 4), 05/02/2026 (domanda 8), 03/06/2026 (domanda 6), 03/07/2026 (domande 2 e 3), 07/09/2026 (problema 11). Testi e soluzioni ufficiali sul Moodle 2025/26 ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); le soluzioni riportate qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (autovalori 0 e 1, la matrice di rotazione, la formula $2 \times 2$, le matrici triangolari, i controlli con traccia e determinante, la rotazione su $\C$, gli esempi e gli esercizi aggiunti) servono a collegare la lezione al resto del corso e all'esame.
