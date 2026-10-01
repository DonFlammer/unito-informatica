---
corso: MDAG
modulo: AG
lezione: L26
titolo: Teorema spettrale II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 · Algebra lineare e Geometria · Canali A, B e C · Lezione L26
descrizione: >-
  Appunti della lezione L26 di Algebra lineare e Geometria (MDAG, parte 2): il teorema spettrale per gli endomorfismi
  autoaggiunti, la sua dimostrazione, la versione con le matrici simmetriche e ortogonali, il collegamento con la PCA e
  tutti gli esercizi delle dispense svolti, con quiz nello stile dell'esame.
lede: >-
  Quando si può diagonalizzare con una base che sia anche ortonormale? Esattamente quando l'endomorfismo è
  autoaggiunto: è il teorema spettrale. Per le matrici reali vuol dire che $A$ è simmetrica se e solo se esiste una
  matrice ortogonale $M$ con ${}^tM A M$ diagonale. Qui trovi la dimostrazione, il metodo passo per passo e gli esercizi
  delle dispense, anche quello con i numeri complessi.
materiale: dispense
scheda:
  Dispense: lezione 26 · pp. 134–138
  Libro: Martelli, §11.3
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 110–140 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 26 «Teorema spettrale II»; B. Martelli, Geometria e algebra lineare, §11.3
file_en: L26_spectral_theorem_2.html
appunti_html: appunti/MDAG/L26_teorema_spettrale_2.html
genera_html: true
---

## In breve

- Un endomorfismo diagonalizzabile ha una base di autovettori; il teorema spettrale dice **quando quella base si può scegliere ortonormale**.
- **Teorema spettrale** (Teorema 26.1): $T$ è autoaggiunto $\iff$ ha una **base ortonormale di autovettori** e tutti i suoi **autovalori sono reali**. Vale per spazi reali con prodotto scalare definito positivo e per spazi complessi con prodotto hermitiano definito positivo.
- Conseguenza importante: **una matrice reale simmetrica ha tutti gli autovalori reali** ed è sempre diagonalizzabile.
- Versione con le matrici (Corollario 26.2): per $A$ reale $n \times n$ sono equivalenti **$A$ simmetrica**, **$L_A$ ha una base ortonormale di autovettori**, **esiste $M$ ortogonale con ${}^tM A M = M^{-1} A M = D$ diagonale**.
- Autovettori di autovalori **diversi** di una matrice simmetrica sono **automaticamente ortogonali**; dentro un autospazio di dimensione $\ge 2$ la base ortogonale si costruisce con **Gram–Schmidt**.
- Metodo: autovalori, basi degli autospazi, Gram–Schmidt dentro ogni autospazio, normalizzazione; le colonne formano $M$, e $M^{-1} = {}^tM$ senza calcolare inverse.
- Nel caso complesso (matrici hermitiane) si usa il prodotto **hermitiano** per normalizzare, e la matrice $W$ soddisfa ${}^t\bar W W = I$.
- Applicazione: la **PCA** (analisi delle componenti principali) diagonalizza una matrice simmetrica di dati; gli autovettori con gli autovalori più grandi sono le direzioni di massima variabilità.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Il problema: autovettori che siano anche ortonormali (p. 134)

Nelle lezioni L17–L18 hai visto che gli endomorfismi più semplici da studiare sono quelli **diagonalizzabili**, cioè quelli che hanno una base di autovettori: in quella base la matrice è diagonale, $M^{-1} A M = D$, dove le colonne di $M$ sono gli autovettori.

Guarda però due matrici diagonalizzabili di $\R^2$.

- $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ ha autovettori $(1, 1)$ (autovalore $3$) e $(1, -1)$ (autovalore $1$): sono **perpendicolari**, $\langle (1, 1), (1, -1) \rangle = 0$.
- $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ ha autovettori $(1, 0)$ (autovalore $3$) e $(-1, 2)$ (autovalore $1$): **non** sono perpendicolari, $\langle (1, 0), (-1, 2) \rangle = -1$.

```grafico
titolo: Le due rette di autovettori di $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ non sono perpendicolari: formano un angolo di circa $63{,}4^\circ$
x: -2.5 2.5
y: -2.2 2.6
retta: -2 0 2 0 | accento | spesso | $V_3$ | ne
retta: -1 2 1 -2 | viola | spesso | $V_1$ | e
vettore: 0 0 1 0 | accento | $(1, 0)$ | se
vettore: 0 0 -1 2 | viola | $(-1, 2)$ | o
arco: 0 0 0.6 2.0344 pi | ambra | $63{,}4^\circ$
```

Con una base ortonormale di autovettori si guadagna molto: la matrice $M$ che ha quei vettori come colonne è **ortogonale** (lezione L22), quindi $M^{-1} = {}^tM$ e non serve calcolare nessuna inversa; inoltre le coordinate di un vettore in quella base si trovano con i prodotti scalari (coefficienti di Fourier, lezione L21). La domanda naturale è: **quando** si può chiedere che la base di autovettori sia anche ortonormale? Le dispense lo annunciano subito: **precisamente per gli endomorfismi autoaggiunti**.

## Il teorema spettrale (p. 134)

Come nella lezione L25, $V$ è uno spazio vettoriale reale con un prodotto scalare definito positivo, oppure complesso con un prodotto hermitiano definito positivo, di dimensione finita $n$.

> [!TEOREMA] 26.1 · Teorema spettrale
> Un endomorfismo $T \colon V \to V$ è autoaggiunto $\iff$ ha una base ortonormale di autovettori e tutti i suoi autovalori sono in $\R$.

Pezzo per pezzo:

- **autoaggiunto**: $\langle T(v), w \rangle = \langle v, T(w) \rangle$ per ogni $v, w$ (Definizione 25.5); in una base ortonormale vuol dire matrice **hermitiana**, o **simmetrica** nel caso reale (Proposizione 25.6);
- **base ortonormale di autovettori**: vettori $v_1, \dots, v_n$ con $T(v_i) = \lambda_i v_i$, di norma $1$ e a due a due ortogonali;
- **autovalori in $\R$**: nel caso reale è automatico (gli autovalori di un endomorfismo reale sono numeri reali per definizione); nel caso complesso è una condizione in più, e serve.

> [!ESEMPIO] Perché nel caso complesso serve «autovalori reali»
> Su $\C^2$ con il prodotto hermitiano euclideo, l'endomorfismo $T(x, y) = (ix, y)$ ha matrice $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$: la base canonica è una base **ortonormale di autovettori** (autovalori $i$ e $1$). Eppure $T$ **non** è autoaggiunto, perché la matrice non è hermitiana (lezione L25). Il teorema non è contraddetto: l'autovalore $i$ non è reale.

Il nome «spettrale» viene da *spettro*, l'insieme degli autovalori di un endomorfismo. Il teorema collega due argomenti del corso: la **diagonalizzabilità** (lezioni L17–L18) e i **prodotti scalari o hermitiani** definiti positivi (lezioni L19–L21 e L25).

## La dimostrazione (pp. 134–135)

La dimostrazione delle dispense ha tre parti: la freccia facile ($\Leftarrow$), il caso complesso della freccia difficile ($\Rightarrow$), e il caso reale.

**($\Leftarrow$) Se c'è una base ortonormale di autovettori con autovalori reali, $T$ è autoaggiunto.**

1. Sia $\mathcal B$ la base ortonormale di autovettori. La matrice $A = [T]^{\mathcal B}_{\mathcal B}$ è **diagonale**, con gli autovalori sulla diagonale.
2. Gli autovalori sono reali, quindi $A$ è diagonale con numeri reali: ${}^tA = A = \bar A$, cioè $A$ è hermitiana.
3. La base è ortonormale, quindi per la Proposizione 25.6 l'endomorfismo $T$ è autoaggiunto.

**($\Rightarrow$), caso complesso. Primo passo: gli autovalori di un autoaggiunto sono reali.** Se $\lambda$ è un autovalore, c'è un autovettore $v \neq 0$ con $T(v) = \lambda v$, e

$$\lambda \langle v, v \rangle = \langle \lambda v, v \rangle = \langle T(v), v \rangle = \langle v, T(v) \rangle = \langle v, \lambda v \rangle = \bar\lambda \langle v, v \rangle.$$

I passaggi: il primo usa la linearità nel primo posto; il secondo $T(v) = \lambda v$; il terzo che $T$ è autoaggiunto; il quarto di nuovo $T(v) = \lambda v$; l'ultimo la proprietà (5) dei prodotti hermitiani (lo scalare esce coniugato dal secondo posto). Siccome $\langle v, v \rangle > 0$ (il prodotto è definito positivo e $v \neq 0$), si può dividere: $\lambda = \bar\lambda$, quindi **$\lambda \in \R$**.

**Secondo passo: la base ortonormale di autovettori, per induzione sulla dimensione $n$.**

> [!DIM] del Teorema 26.1, induzione sulla dimensione
> 1. **Caso $n = 1$.** In uno spazio di dimensione uno ogni vettore non nullo è un autovettore (ogni endomorfismo è la moltiplicazione per un numero). Un vettore di norma $1$ forma da solo una base ortonormale di autovettori.
> 2. **Ipotesi induttiva.** Supponiamo il risultato vero in dimensione $n - 1$ e prendiamo $V$ di dimensione $n$.
> 3. **Esiste un autovettore.** Siamo sui complessi: il polinomio caratteristico di $T$ ha almeno una radice per il **teorema fondamentale dell'algebra** (lezione L04), quindi $T$ ha un autovalore e un autovettore $v \in V$.
> 4. **Un sottospazio invariante di dimensione $n - 1$.** La retta $\Span(v)$ è $T$-invariante (è generata da un autovettore). Per la Proposizione 25.10 anche $U = \Span(v)^\perp$ è $T$-invariante: $T(U) \subseteq U$. Inoltre $\dim U = n - 1$ (decomposizione ortogonale, lezione L21).
> 5. **La restrizione è autoaggiunta.** $T|_U \colon U \to U$ è un endomorfismo di $U$ (grazie al punto 4) ed è autoaggiunto, perché l'uguaglianza $\langle T(u), u' \rangle = \langle u, T(u') \rangle$ vale per tutti i vettori di $V$, quindi in particolare per quelli di $U$.
> 6. **Si applica l'ipotesi induttiva.** $U$ ha una base ortonormale $v_2, \dots, v_n$ formata da autovettori di $T|_U$, cioè di $T$.
> 7. **Si aggiunge $v$.** Rinormalizzo $v$ in modo che abbia norma $1$. È ortogonale a tutti i $v_2, \dots, v_n$, che stanno in $U = \Span(v)^\perp$. Quindi $\mathcal B = \{v, v_2, \dots, v_n\}$ è una base ortonormale di $V$ formata da autovettori di $T$. $\square$

> [!IDEA] La dimostrazione in un'immagine
> Si «stacca» un autovettore alla volta. Trovato $v$, lo spazio si spezza in $\Span(v)$ e nel suo ortogonale $U$, e $T$ non mescola i due pezzi (entrambi invarianti). Dentro $U$ si ricomincia: un altro autovettore, un altro pezzo ortogonale, e così via fino a esaurire le dimensioni. Ogni vettore staccato è ortogonale a tutti i successivi per costruzione.

**Una conseguenza importante.** Le dispense la sottolineano: **una matrice reale simmetrica $S$ ha sempre tutti gli autovalori reali.** Infatti $S$ è reale e simmetrica, quindi hermitiana; allora $L_S \colon \C^n \to \C^n$ è autoaggiunto rispetto al prodotto hermitiano euclideo (Corollario 25.7), e per il caso complesso appena dimostrato ha tutti gli autovalori reali e una base ortonormale di autovettori in $\C^n$.

> [!OLTRE] Il caso $2 \times 2$ fatto a mano
> Per $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ reale, il polinomio caratteristico è $\lambda^2 - (a + c)\lambda + (ac - b^2)$, con discriminante
> $$(a + c)^2 - 4(ac - b^2) = a^2 - 2ac + c^2 + 4b^2 = (a - c)^2 + 4b^2 \ge 0.$$
> Quindi le radici sono sempre reali. E sono uguali solo se $a = c$ e $b = 0$, cioè se $S$ è già un multiplo dell'identità.

**($\Rightarrow$), caso reale.** Resta un punto delicato: sui reali un polinomio può non avere radici, quindi il punto 3 dell'induzione non è gratuito. Le dispense lo risolvono così.

1. Prendo una base ortonormale $\mathcal B$ di $V$ e pongo $S = [T]^{\mathcal B}_{\mathcal B}$: è una matrice **reale e simmetrica** (Proposizione 25.6).
2. Considerata come matrice complessa, per il caso complesso appena dimostrato **tutti i suoi autovalori sono reali**. Quindi il polinomio caratteristico di $S$ ha una radice $\lambda \in \R$.
3. Siccome $\det(S - \lambda I_n) = 0$ con $S - \lambda I_n$ reale, esiste un vettore **reale** non nullo $v$ con $S v = \lambda v$ (il sistema omogeneo reale ha soluzioni non nulle): un autovettore reale.
4. Con questo autovettore si ripete la stessa induzione del caso complesso. $\square$

## Il teorema spettrale con le matrici (p. 135)

Nel caso di $\R^n$ con il prodotto scalare euclideo il teorema si traduce in un enunciato sulle matrici.

> [!COROLLARIO] 26.2
> Sia $A$ una matrice $n \times n$ reale. Sono equivalenti i fatti seguenti:
> 1. $A$ è simmetrica;
> 2. $L_A$ ha una base ortonormale di autovettori;
> 3. esiste una matrice ortogonale $M$ tale che
> $${}^tM A M = M^{-1} A M = D$$
> sia una matrice diagonale.

Pezzo per pezzo:

- **matrice ortogonale** (Definizione 22.10): ${}^tM M = I_n$, cioè $M^{-1} = {}^tM$; equivalentemente, le **colonne** di $M$ formano una base ortonormale di $\R^n$;
- in (3) le due scritture ${}^tM A M$ e $M^{-1} A M$ sono la stessa matrice proprio perché $M^{-1} = {}^tM$;
- la $D$ ha sulla diagonale gli autovalori, nello stesso ordine in cui le colonne di $M$ elencano gli autovettori.

La spiegazione delle dispense, un passaggio alla volta:

1. **(1) $\iff$ (2)** è il teorema spettrale: $L_A$ è autoaggiunto rispetto al prodotto euclideo se e solo se $A$ è simmetrica (Corollario 25.7), e gli autovalori di una matrice reale simmetrica sono reali.
2. **(2) $\Rightarrow$ (3)**: una base ortonormale di autovettori, messa in colonna, forma una matrice $M$ **ortogonale**, e $M^{-1} A M$ è diagonale (è la diagonalizzazione delle lezioni L17–L18).
3. **(3) $\Rightarrow$ (2)**: se $M^{-1} A M = D$ è diagonale, le colonne di $M$ sono autovettori; se in più $M$ è ortogonale, formano una base ortonormale.
4. In ogni caso $M^{-1} = {}^tM$.

> [!TRAPPOLA] Diagonalizzabile non vuol dire simmetrica
> La matrice $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ è **diagonalizzabile** (due autovalori distinti), ma non è simmetrica: una base di autovettori c'è, una base **ortonormale** di autovettori no (Esercizio 26.3). Il teorema spettrale caratterizza le matrici **ortogonalmente** diagonalizzabili, non tutte quelle diagonalizzabili.

### Due fatti che rendono il calcolo veloce

> [!OLTRE] Autovettori di autovalori diversi sono ortogonali
> Se $A$ è simmetrica (o $T$ autoaggiunto), $A v = \lambda v$, $A w = \mu w$ e $\lambda \neq \mu$, allora $\langle v, w \rangle = 0$. Infatti, con $\mu$ reale,
> $$\lambda \langle v, w \rangle = \langle A v, w \rangle = \langle v, A w \rangle = \mu \langle v, w \rangle,$$
> quindi $(\lambda - \mu)\langle v, w \rangle = 0$ e $\langle v, w \rangle = 0$. Le dispense usano questo fatto nell'Esercizio 26.4 («l'autovettore in $V_{\lambda_1}$ è sempre automaticamente ortogonale a tutti i vettori in $V_{\lambda_2}$»).
>
> Conseguenza pratica: **Gram–Schmidt serve solo dentro ogni autospazio** di dimensione $\ge 2$. Fra autospazi diversi l'ortogonalità è gratis.

Il secondo fatto: siccome una matrice simmetrica è diagonalizzabile, **per ogni autovalore la molteplicità geometrica è uguale a quella algebrica** (Teorema 18.10). Non serve controllarlo: la dimensione di ogni autospazio si legge già dal polinomio caratteristico.

> [!METODO] Trovare una base ortonormale di autovettori (e la matrice $M$)
> 1. **Controlla** che $A$ sia simmetrica (se non lo è, per il Corollario 26.2 una base ortonormale di autovettori non esiste).
> 2. **Autovalori**: radici di $p_A(\lambda) = \det(A - \lambda I)$, con le molteplicità.
> 3. **Autospazi**: per ogni autovalore risolvi $(A - \lambda I)x = 0$ e trova una base.
> 4. **Ortogonalizza dentro ogni autospazio** di dimensione $\ge 2$ con Gram–Schmidt (o scegliendo subito vettori ortogonali).
> 5. **Normalizza** ogni vettore dividendo per la sua norma.
> 6. Metti i vettori in colonna: è $M$, ortogonale. Allora ${}^tM A M = D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, con gli autovalori nell'ordine delle colonne.
> 7. **Controlla**: i vettori trovati devono avere prodotto scalare $0$ a due a due e norma $1$.

> [!ESEMPIO] Una matrice $2 \times 2$
> $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ è simmetrica. $p_A(\lambda) = (2 - \lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda - 3)(\lambda - 1)$.
> - $\lambda = 3$: $(A - 3I)x = 0$ dà $-x_1 + x_2 = 0$, autovettore $(1, 1)$;
> - $\lambda = 1$: $(A - I)x = 0$ dà $x_1 + x_2 = 0$, autovettore $(1, -1)$.
>
> Sono già ortogonali (autovalori diversi). Normalizzo: $\frac{1}{\sqrt 2}(1, 1)$ e $\frac{1}{\sqrt 2}(1, -1)$. Allora
> $$M = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \qquad {}^tM A M = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$
> Controllo di un prodotto: $A\,(1, 1) = (3, 3) = 3\,(1, 1)$ e $A\,(1, -1) = (1, -1)$.

> [!ESEMPIO] Una matrice $3 \times 3$ con un autovalore doppio
> $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$ è simmetrica.
>
> **Autovalori.** Con Sarrus, e chiamando $t = 2 - \lambda$:
> $$\det(A - \lambda I) = t^3 + 1 + 1 - t - t - t = t^3 - 3t + 2 = (t - 1)^2 (t + 2).$$
> Siccome $t - 1 = 1 - \lambda$ e $t + 2 = 4 - \lambda$, gli autovalori sono $\lambda = 1$ (doppio) e $\lambda = 4$ (semplice).
>
> **Autospazi.** Per $\lambda = 4$: $(A - 4I)x = 0$ ha soluzioni $\Span((1, 1, 1))$ (ogni riga di $A$ somma a $4$). Per $\lambda = 1$: $A - I$ ha tutte le righe uguali a $(1, 1, 1)$, quindi $V_1 = \{x_1 + x_2 + x_3 = 0\}$, di dimensione $2$, con base $(1, -1, 0)$ e $(1, 0, -1)$.
>
> **Gram–Schmidt dentro $V_1$.** $w_1 = (1, -1, 0)$ e
> $$\begin{aligned} w_2 &= (1, 0, -1) - \frac{\langle (1, 0, -1), (1, -1, 0) \rangle}{\langle (1, -1, 0), (1, -1, 0) \rangle}(1, -1, 0) \\ &= (1, 0, -1) - \tfrac 12 (1, -1, 0) = \left(\tfrac 12, \tfrac 12, -1\right), \end{aligned}$$
> che moltiplico per $2$: $(1, 1, -2)$. Controllo: $\langle (1, -1, 0), (1, 1, -2) \rangle = 0$, e $(1, 1, -2)$ soddisfa $x_1 + x_2 + x_3 = 0$.
>
> **Normalizzazione e matrice.** La base ortonormale di autovettori è
> $$\tfrac{1}{\sqrt 3}(1, 1, 1), \qquad \tfrac{1}{\sqrt 2}(1, -1, 0), \qquad \tfrac{1}{\sqrt 6}(1, 1, -2),$$
> e con queste colonne $M$ è ortogonale e ${}^tM A M = \operatorname{diag}(4, 1, 1)$. Il vettore $(1, 1, 1)$ è ortogonale agli altri due senza bisogno di Gram–Schmidt: autovalori diversi.

Con la calcolatrice qui sotto puoi controllare autovalori e autospazi (lo strumento scrive anche le molteplicità), e con la seconda rifare Gram–Schmidt dentro l'autospazio $V_1$.

```widget gauss
titolo: Autovalori e autospazi della matrice simmetrica dell'esempio
matrice: 2 1 1; 1 2 1; 1 1 2
modo: autovalori
```

```widget gauss
titolo: Gram–Schmidt dentro l'autospazio $V_1 = \{x_1 + x_2 + x_3 = 0\}$
matrice: 1 -1 0; 1 0 -1
modo: gram-schmidt
```

### Il caso complesso

Per una matrice **hermitiana** $H$ il procedimento è lo stesso, con due differenze: i prodotti e le norme si calcolano con il **prodotto hermitiano** $\langle x, y \rangle = {}^t x\, \bar y$, e la matrice $W$ con gli autovettori in colonna non è ortogonale ma soddisfa ${}^t\bar W W = I$, cioè $W^{-1} = {}^t\bar W$ (la trasposta coniugata). L'Esercizio 26.5 delle dispense lo mostra per esteso.

> [!TRAPPOLA] Normalizzare un vettore complesso
> La norma di $(1, i, i)$ è $\sqrt{\lvert 1 \rvert^2 + \lvert i \rvert^2 + \lvert i \rvert^2} = \sqrt 3$, non $\sqrt{1 + i^2 + i^2} = \sqrt{-1}$. Nei vettori complessi si sommano i **moduli al quadrato**.

## Collegamento con l'informatica: la PCA (pp. 135–136)

> [!NOTA] PCA e riduzione dimensionale
> Le dispense chiudono la parte teorica con un'applicazione all'analisi dei dati: la **Principal Component Analysis** (PCA, analisi delle componenti principali). Si hanno dati **centrati** $x_1, \dots, x_N \in \R^n$ (cioè con media zero) e si considera la matrice
> $$S = \frac 1N \sum_{i=1}^N x_i\, {}^t x_i.$$
> $S$ è **simmetrica**, quindi per il teorema spettrale ha una base ortonormale di autovettori. Gli autovettori con gli autovalori più grandi indicano le **direzioni** lungo le quali i dati variano di più. Proiettando i dati sul sottospazio generato da poche di queste direzioni si ottiene una rappresentazione in dimensione più bassa, che conserva una parte importante dell'informazione. È il principio matematico della PCA.

Pezzo per pezzo: ogni $x_i\, {}^t x_i$ è una matrice $n \times n$ (colonna per riga), ed è simmetrica perché ${}^t(x_i\, {}^t x_i) = x_i\, {}^t x_i$; la media di matrici simmetriche è simmetrica.

> [!OLTRE] Un esempio con quattro punti
> Prendiamo in $\R^2$ i punti $(2, 2)$, $(-2, -2)$, $(1, -1)$, $(-1, 1)$: la loro media è $(0, 0)$, quindi sono centrati.
> - $(2, 2)\,{}^t(2, 2) = \begin{pmatrix} 4 & 4 \\ 4 & 4 \end{pmatrix}$, e lo stesso per $(-2, -2)$;
> - $(1, -1)\,{}^t(1, -1) = \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$, e lo stesso per $(-1, 1)$.
>
> Quindi $S = \frac 14 \begin{pmatrix} 10 & 6 \\ 6 & 10 \end{pmatrix} = \begin{pmatrix} 5/2 & 3/2 \\ 3/2 & 5/2 \end{pmatrix}$, con autovalori $\frac 52 \pm \frac 32$, cioè $4$ (autovettore $(1, 1)$) e $1$ (autovettore $(1, -1)$). La **prima componente principale** è la direzione $u_1 = \frac{1}{\sqrt 2}(1, 1)$. Le coordinate dei punti lungo $u_1$ sono $\langle x_i, u_1 \rangle = 2\sqrt 2,\ -2\sqrt 2,\ 0,\ 0$, e la media dei loro quadrati è $\frac{8 + 8 + 0 + 0}{4} = 4$: proprio l'autovalore. Lungo $u_2 = \frac{1}{\sqrt 2}(1, -1)$ la media dei quadrati è $1$. Tenere solo la coordinata lungo $u_1$ riduce i dati a una dimensione, perdendo la parte di variabilità più piccola.

```grafico
titolo: I quattro punti e le due direzioni principali: lungo $u_1$ i dati variano di più (autovalore 4) che lungo $u_2$ (autovalore 1)
x: -3 3
y: -3 3
retta: -2 -2 2 2 | accento | tratteggio | sottile
retta: -2 2 2 -2 | viola | tratteggio | sottile
punto: 2 2 | ambra | $(2, 2)$ | se
punto: -2 -2 | ambra | $(-2, -2)$ | no
punto: 1 -1 | ambra | $(1, -1)$ | se
punto: -1 1 | ambra | $(-1, 1)$ | no
vettore: 0 0 1.4 1.4 | accento | spesso | $u_1$ | no
vettore: 0 0 0.7 -0.7 | viola | spesso | $u_2$ | se
```

> [!OLTRE] Dove trovarlo nel libro
> Nel libro di Martelli il teorema spettrale è il §11.3 (pp. 352–355): Teorema 11.3.1 = 26.1, Corollario 11.3.2 = 26.2. Subito dopo (Esempio 11.3.3) il libro osserva che proiezioni e riflessioni ortogonali sono autoaggiunte e quindi rappresentate da matrici simmetriche, e usa il teorema per calcolare la segnatura di una matrice simmetrica contando gli autovalori positivi, negativi e nulli (Proposizione 11.3.4, con il criterio di Cartesio). Gli Esercizi 11.1 e 11.2 di fine capitolo (p. 355) sono simili al 26.3 e al nostro esercizio sulla matrice $\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$.

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha **10 quiz** a 5 risposte (una sola giusta) e **2 problemi da 11 punti**, corretti solo con **almeno 6 quiz giusti**; dura **2 ore**, **senza calcolatrice**, e si può portare solo un foglio di **4 facciate scritte a mano**. Gli appelli 2026/27 sono il **22/01/2027** e il **05/02/2027** alle 14:00. Tutti i dettagli nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026.**

- **Problemi aperti con una matrice a parametro**: si calcola ${}^tA - A$ per capire per quali $k$ la matrice è simmetrica, e si conclude con il teorema spettrale. Appello del 24/01/2024 (problema 11, punto 3: con $k = -1$ la matrice è simmetrica, quindi diagonalizzabile) e del 15/01/2026 (problema 11, punti 2 e 3: per quali $k$ ci sono autovalori reali e una base ortonormale di autovettori, e poi calcolarla).
- **Base ortonormale di un autospazio**: appello del 02/09/2025 (problema 11, punto 3).
- **Quiz teorici**: appello del 16/01/2025 (domanda 7).

Tre testi veri, svolti.

*Appello del 16/01/2025, domanda 7.* Sia $A \in M(4, \R)$ una matrice simmetrica con esattamente 2 autovalori reali distinti. Quale delle seguenti affermazioni è vera? (a) Almeno un autovalore di $A$ deve avere molteplicità maggiore di 1. (b) $A$ deve essere ortogonale. (c) Gli autovettori di $A$ sono ortonormali. (d) $A$ ha almeno un autovalore complesso. (e) $A$ non può essere diagonalizzabile.

Svolgimento: per il teorema spettrale $A$ è diagonalizzabile con autovalori reali, quindi le molteplicità algebriche dei due autovalori sommano a $4$: almeno una è $\ge 2$. **Risposta (a).** (b) è falsa ($\operatorname{diag}(2, 2, 3, 3)$ è simmetrica ma non ortogonale); (c) confonde «esiste una base ortonormale di autovettori» con «tutti gli autovettori sono ortonormali» (il doppio di un autovettore non ha norma 1); (d) e (e) contraddicono il teorema spettrale.

*Appello del 02/09/2025, problema 11, punto 3.* Data $A = \begin{pmatrix} -6 & 3 & 3 \\ 3 & -6 & 3 \\ 3 & 3 & -6 \end{pmatrix}$, calcolare una base ortonormale dell'autospazio di $A$ con autovalore $-9$.

Svolgimento: $A + 9I$ ha tutte le righe uguali a $(3, 3, 3)$, quindi $V_{-9} = \{x_1 + x_2 + x_3 = 0\}$, con base $(1, -1, 0)$, $(1, 0, -1)$. È lo stesso piano dell'esempio $3 \times 3$ della sezione precedente: Gram–Schmidt dà $(1, -1, 0)$ e $(1, 1, -2)$, e normalizzando la base ortonormale è $\frac{1}{\sqrt 2}(1, -1, 0)$, $\frac{1}{\sqrt 6}(1, 1, -2)$.

Il terzo, l'appello del 15/01/2026 (problema 11), è svolto per intero negli esercizi.

> [!METODO] Il ragionamento con ${}^tA - A$
> 1. Calcola ${}^tA - A$: è la matrice nulla esattamente quando $A$ è simmetrica.
> 2. Per i valori del parametro in cui $A$ è simmetrica: autovalori reali, diagonalizzabile, base ortonormale di autovettori (Corollario 26.2).
> 3. Per gli altri valori: **nessuna base ortonormale di autovettori** (sempre per il Corollario 26.2), anche se la matrice può essere diagonalizzabile; per la diagonalizzabilità servono i metodi delle lezioni L17–L18.

**Errori da evitare.**

- Dimenticare di **normalizzare**: una base ortogonale di autovettori non è ancora ortonormale.
- Fare Gram–Schmidt **fra autospazi diversi** (inutile) e **non** farlo dentro un autospazio di dimensione $2$ (necessario, se la base trovata con Gauss non è ortogonale).
- Scrivere $M^{-1}$ calcolandola a mano quando $M$ è ortogonale: basta trasporre.
- Dedurre «non simmetrica, quindi non diagonalizzabile»: è falso (vedi $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$).
- Nei vettori complessi, normalizzare con $\sqrt{\sum x_k^2}$ invece che con $\sqrt{\sum \lvert x_k \rvert^2}$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: l'enunciato del teorema spettrale e del Corollario 26.2; «simmetrica reale $\Rightarrow$ autovalori reali»; «autovalori diversi $\Rightarrow$ autovettori ortogonali»; la ricetta in sette passi; nel caso complesso $W^{-1} = {}^t\bar W$.

## Quiz

```quiz
D: Con il prodotto scalare euclideo di $\R^2$, quale di queste matrici ha **sicuramente** una base ortonormale di autovettori?
+ $\begin{pmatrix} 1 & 3 \\ 3 & -2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 3 \\ -3 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$
= Per il Corollario 26.2 le matrici reali con una base ortonormale di autovettori sono esattamente le simmetriche: solo la prima. La seconda ha autovalori non reali ($1 \pm 3i$), la terza non è diagonalizzabile, la quarta è diagonalizzabile ma con autovettori $(1, 0)$ e $(1, 1)$ non ortogonali, la quinta non è simmetrica. Simile all'appello del 15/01/2026 (problema 11, punto 2).

D: Sia $A \in M(3, \R)$ simmetrica con esattamente due autovalori distinti. Quale affermazione è vera?
+ Uno dei due autospazi ha dimensione 2.
- $A$ è ortogonale.
- $A$ non è diagonalizzabile.
- $A$ ha un autovalore non reale.
- Ogni base di autovettori di $A$ è ortonormale.
= $A$ è diagonalizzabile (teorema spettrale), quindi le dimensioni dei due autospazi sommano a 3: una è 2 e l'altra 1. Le altre affermazioni sono false: per esempio $\operatorname{diag}(1, 1, 2)$ non è ortogonale, e $\{e_1, 2e_2, e_3\}$ è una base di autovettori non ortonormale. Simile all'appello del 16/01/2025 (domanda 7).

D: Gli autovalori di una matrice reale simmetrica sono:
+ sempre reali
- sempre positivi
- sempre distinti
- a volte complessi non reali
- sempre interi
= È la conseguenza del teorema spettrale evidenziata nelle dispense. Non sono sempre positivi ($\operatorname{diag}(1, -1)$), né distinti ($I_2$), né interi (l'Esercizio 26.3 ha $2 \pm \sqrt 2$).

D: Una matrice reale simmetrica $2 \times 2$ ha autovalori $1$ e $3$, e $(1, 2)$ è un autovettore con autovalore $1$. Quale di questi vettori è un autovettore con autovalore $3$?
+ $(-2, 1)$
- $(2, 1)$
- $(1, 2)$
- $(1, -2)$
- $(3, 6)$
= Autovettori di autovalori diversi di una matrice simmetrica sono ortogonali, e in $\R^2$ i vettori ortogonali a $(1, 2)$ formano la retta $\Span((-2, 1))$. $(1, 2)$ e $(3, 6)$ appartengono all'autovalore $1$; $(2, 1)$ e $(1, -2)$ non sono ortogonali a $(1, 2)$.

D: Se $M \in M(n, \R)$ è ortogonale, quanto vale $M^{-1}$?
+ ${}^tM$
- $M$
- $-M$
- $\frac{1}{\det M}\, M$
- $M^2$
= Ortogonale vuol dire ${}^tM M = I_n$, cioè ${}^tM$ è l'inversa. Per questo nel Corollario 26.2 ${}^tM A M = M^{-1} A M$. $M^{-1} = M$ vale solo per le ortogonali che sono anche simmetriche, come le riflessioni.

D: Quale matrice $M$ è ortogonale e rende ${}^tM A M$ diagonale per $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$?
+ $\frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\frac 12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$
- $\frac{1}{\sqrt 5}\begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}$
= Le colonne devono essere autovettori di norma 1 e ortogonali: $\frac{1}{\sqrt 2}(1, 1)$ e $\frac{1}{\sqrt 2}(1, -1)$. Senza il fattore, o con $\frac 12$, le colonne non hanno norma 1 (la matrice non è ortogonale); con colonne uguali $M$ non è invertibile; l'ultima è ortogonale ma le sue colonne non sono autovettori, e ${}^tM A M = \begin{pmatrix} 14/5 & 3/5 \\ 3/5 & 6/5 \end{pmatrix}$ non è diagonale. Simile agli appelli del 15/01/2026 e del 02/09/2025 (problema 11).

D: Il vettore $(1, 1, 0)$ è un autovettore della matrice simmetrica $A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 0 \\ 0 & 0 & 5 \end{pmatrix}$. Qual è il suo autovalore?
N: 3
= $A\,(1, 1, 0) = (1 + 2,\ 2 + 1,\ 0) = (3, 3, 0) = 3\,(1, 1, 0)$.

D: Quali sono gli autovalori della matrice hermitiana $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$?
+ $0$ e $2$
- $i$ e $-i$
- $1 + i$ e $1 - i$
- $1$ (doppio)
- $0$ e $-2$
= $p_H(\lambda) = (1 - \lambda)^2 - i \cdot (-i) = (1 - \lambda)^2 - 1 = \lambda(\lambda - 2)$. Gli autovalori di una matrice hermitiana sono reali (teorema spettrale): le risposte con $i$ sono escluse a priori.

D: Un endomorfismo $T$ di $\C^n$ ha una base ortonormale di autovettori rispetto al prodotto hermitiano euclideo. Quale affermazione è vera?
+ $T$ è autoaggiunto se e solo se tutti i suoi autovalori sono reali.
- $T$ è sempre autoaggiunto.
- $T$ non è mai autoaggiunto.
- Gli autovalori di $T$ sono sempre reali.
- La matrice di $T$ nella base canonica è diagonale.
= Con la base ortonormale di autovettori già garantita, il Teorema 26.1 dice che $T$ è autoaggiunto esattamente quando gli autovalori sono reali. $T(x, y) = (ix, y)$ ha la base canonica come base ortonormale di autovettori ma non è autoaggiunto (autovalore $i$).

D: Per quali $k \in \R$ la matrice $A_k = \begin{pmatrix} 1 & k \\ k^2 & 2 \end{pmatrix}$ ha una base ortonormale di autovettori (prodotto euclideo)?
+ Per $k = 0$ e $k = 1$.
- Solo per $k = 1$.
- Per ogni $k$.
- Per nessun $k$.
- Per $k = -1$ e $k = 1$.
= ${}^tA_k - A_k = \begin{pmatrix} 0 & k^2 - k \\ k - k^2 & 0 \end{pmatrix}$ è nulla se e solo se $k^2 = k$, cioè $k = 0$ o $k = 1$. Per il Corollario 26.2 sono esattamente i valori con una base ortonormale di autovettori. Per $k = -1$ la matrice è $\begin{pmatrix} 1 & -1 \\ 1 & 2 \end{pmatrix}$, non simmetrica. Simile agli appelli del 24/01/2024 e del 15/01/2026 (problema 11).
```

## Esercizi

::: esercizio base Esercizio 26.3 delle dispense: simmetrica sì, simmetrica no
Verifica che la matrice $A$ ha una base ortonormale di autovettori mentre la matrice $B$ no:
$$A = \begin{pmatrix} 3 & 1 \\ 1 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}.$$
::: soluzione
Il Corollario 26.2 risponde subito: $A$ è simmetrica e $B$ no. Le dispense chiedono però di verificarlo **senza** usare il teorema spettrale.

**La matrice $A$.** $p_A(\lambda) = (3 - \lambda)(1 - \lambda) - 1 = \lambda^2 - 4\lambda + 2$, con radici $\lambda_{1,2} = \frac{4 \pm \sqrt{16 - 8}}{2} = 2 \pm \sqrt 2$. Per trovare gli autovettori uso la prima riga di $A - \lambda I$: $(3 - \lambda)x + y = 0$, cioè $y = (\lambda - 3)x$.
- $\lambda_1 = 2 + \sqrt 2$: $y = (\sqrt 2 - 1)x$. Con $x = 1 + \sqrt 2$ si ottiene $y = (\sqrt 2 - 1)(\sqrt 2 + 1) = 2 - 1 = 1$, quindi $v_1 = (1 + \sqrt 2, 1)$.
- $\lambda_2 = 2 - \sqrt 2$: $y = (-1 - \sqrt 2)x$. Con $x = 1 - \sqrt 2$ si ottiene $y = -(1 + \sqrt 2)(1 - \sqrt 2) = -(1 - 2) = 1$, quindi $v_2 = (1 - \sqrt 2, 1)$.

$\langle v_1, v_2 \rangle = (1 + \sqrt 2)(1 - \sqrt 2) + 1 = (1 - 2) + 1 = 0$: sono ortogonali. Normalizzando ($\lVert v_1 \rVert^2 = 4 + 2\sqrt 2$, $\lVert v_2 \rVert^2 = 4 - 2\sqrt 2$) si ottiene una base ortonormale di autovettori.

**La matrice $B$.** È triangolare: autovalori $\lambda_1 = 3$ e $\lambda_2 = 1$. Per $\lambda_1 = 3$: $(B - 3I)x = 0$ dà $y = 0$, autovettore $v_1 = (1, 0)$. Per $\lambda_2 = 1$: $(B - I)x = 0$ dà $2x + y = 0$, autovettore $v_2 = (-1, 2)$. Ora $\langle v_1, v_2 \rangle = -1 \neq 0$.

Perché nessuna scelta funziona: ogni autovettore di $\lambda_1$ è un multiplo di $v_1$ e ogni autovettore di $\lambda_2$ è un multiplo di $v_2$. Moltiplicare per numeri non cambia la retta, quindi ogni coppia di autovettori forma lo stesso angolo $\vartheta$ o $\pi - \vartheta$, con $\cos\vartheta = \frac{-1}{1 \cdot \sqrt 5}$: non è un angolo retto. È impossibile scegliere autovettori ortonormali.
:::

::: esercizio medio Esercizio 26.4 delle dispense: una base ortonormale di autovettori
Trovare una base ortonormale di autovettori per la matrice
$$A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}.$$
::: soluzione
$A$ è simmetrica, quindi la base esiste.

**Polinomio caratteristico**, sviluppando lungo la seconda riga (che ha un solo elemento non nullo):
$$\begin{aligned} p_A(\lambda) &= \det\begin{pmatrix} 1 - \lambda & 0 & 1 \\ 0 & 2 - \lambda & 0 \\ 1 & 0 & 1 - \lambda \end{pmatrix} = (2 - \lambda)\det\begin{pmatrix} 1 - \lambda & 1 \\ 1 & 1 - \lambda \end{pmatrix} \\ &= (2 - \lambda)\big[(1 - \lambda)^2 - 1\big]. \end{aligned}$$
Siccome $(1 - \lambda)^2 - 1 = \lambda^2 - 2\lambda = \lambda(\lambda - 2)$, si ottiene $p_A(\lambda) = -\lambda(2 - \lambda)^2$. Autovalori: $\lambda_1 = 0$ con molteplicità algebrica $1$, $\lambda_2 = 2$ con molteplicità algebrica $2$; siccome $A$ è diagonalizzabile, le molteplicità geometriche sono uguali.

**Autospazi.**
- $\lambda_1 = 0$: $Ax = 0$ dà $x_1 + x_3 = 0$ e $x_2 = 0$, quindi $V_0 = \Span((1, 0, -1))$.
- $\lambda_2 = 2$: $(2I - A)x = 0$ con $2I - A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$ dà solo $x_1 = x_3$, con $x_2$ libero: $V_2 = \Span((1, 0, 1), (0, 1, 0))$.

**Ortogonalità.** I due vettori scelti in $V_2$ sono già ortogonali: $\langle (1, 0, 1), (0, 1, 0) \rangle = 0$ (le dispense avvertono: bisogna sceglierli così, altrimenti serve Gram–Schmidt). Il vettore di $V_0$ è automaticamente ortogonale a tutto $V_2$ (autovalori diversi): $\langle (1, 0, -1), (1, 0, 1) \rangle = 0$ e $\langle (1, 0, -1), (0, 1, 0) \rangle = 0$.

**Normalizzazione.** $v_1 = (1, 0, -1)$ e $v_2 = (1, 0, 1)$ hanno norma $\sqrt 2$, $v_3 = (0, 1, 0)$ ha già norma $1$:
$$w_1 = \tfrac{1}{\sqrt 2}(1, 0, -1) = \left(\tfrac{\sqrt 2}{2}, 0, -\tfrac{\sqrt 2}{2}\right), \qquad w_2 = \tfrac{1}{\sqrt 2}(1, 0, 1) = \left(\tfrac{\sqrt 2}{2}, 0, \tfrac{\sqrt 2}{2}\right),$$
$$w_3 = v_3 = (0, 1, 0).$$
$\{w_1, w_2, w_3\}$ è una base ortonormale di autovettori. Con $M = (w_1 \mid w_2 \mid w_3)$ si ha ${}^tM A M = \operatorname{diag}(0, 2, 2)$.
:::

::: esercizio difficile Esercizio 26.5 delle dispense: una matrice hermitiana
Calcolare la diagonalizzazione della seguente matrice:
$$A = \begin{pmatrix} 2 & i & i \\ -i & 1 & 0 \\ -i & 0 & 1 \end{pmatrix}.$$
::: soluzione
$A$ è hermitiana (diagonale reale, $\overline{-i} = i$), quindi esiste una base ortonormale di autovettori (rispetto al prodotto hermitiano euclideo) e gli autovalori sono reali.

**Polinomio caratteristico**, sviluppando lungo la prima riga:
$$\det(A - \lambda I) = (2 - \lambda)(1 - \lambda)^2 - i\,\big[(-i)(1 - \lambda) - 0\big] + i\,\big[0 - (1 - \lambda)(-i)\big].$$
Il secondo termine è $-i \cdot (-i)(1 - \lambda) = i^2 (1 - \lambda) = -(1 - \lambda)$; il terzo è $i \cdot i(1 - \lambda) = -(1 - \lambda)$. Quindi
$$\begin{aligned} \det(A - \lambda I) &= (1 - \lambda)\big[(2 - \lambda)(1 - \lambda) - 2\big] \\ &= (1 - \lambda)(\lambda^2 - 3\lambda) = (1 - \lambda)\lambda(\lambda - 3). \end{aligned}$$
Autovalori $\lambda_1 = 0$, $\lambda_2 = 1$, $\lambda_3 = 3$, ciascuno con molteplicità algebrica $1$: tutti reali, come previsto.

**Autovettori.**
- $\lambda_1 = 0$: dalla seconda riga $-ix + y = 0$, cioè $y = ix$; dalla terza $z = ix$. La prima torna: $2x + i(ix) + i(ix) = 2x - x - x = 0$. Con $x = 1$: $v_1 = (1, i, i)$.
- $\lambda_2 = 1$: $A - I = \begin{pmatrix} 1 & i & i \\ -i & 0 & 0 \\ -i & 0 & 0 \end{pmatrix}$; la seconda riga dà $x = 0$ e la prima $iy + iz = 0$, cioè $z = -y$: $v_2 = (0, 1, -1)$.
- $\lambda_3 = 3$: $A - 3I = \begin{pmatrix} -1 & i & i \\ -i & -2 & 0 \\ -i & 0 & -2 \end{pmatrix}$; dalla seconda riga $y = -\frac{i}{2}x$, dalla terza $z = -\frac{i}{2}x$. Con $x = 2i$: $y = -\frac i2 \cdot 2i = 1$ e $z = 1$, quindi $v_3 = (2i, 1, 1)$. Controllo sulla prima riga: $-2i + i + i = 0$.

**Ortogonalità** con il prodotto hermitiano $\langle x, y \rangle = \sum x_k \bar y_k$: $\langle v_1, v_2 \rangle = 0 + i - i = 0$; $\langle v_1, v_3 \rangle = 1 \cdot \overline{2i} + i + i = -2i + 2i = 0$; $\langle v_2, v_3 \rangle = 0 + 1 - 1 = 0$. Sono già ortogonali (autovalori distinti): basta normalizzarli.

**Normalizzazione**, con i moduli al quadrato: $\lVert v_1 \rVert^2 = 1 + 1 + 1 = 3$, $\lVert v_2 \rVert^2 = 2$, $\lVert v_3 \rVert^2 = 4 + 1 + 1 = 6$. Le colonne normalizzate formano
$$W = \begin{pmatrix} \frac{\sqrt 3}{3} & 0 & \frac{i\sqrt 6}{3} \\ \frac{\sqrt 3\, i}{3} & \frac{\sqrt 2}{2} & \frac{\sqrt 6}{6} \\ \frac{\sqrt 3\, i}{3} & -\frac{\sqrt 2}{2} & \frac{\sqrt 6}{6} \end{pmatrix}$$
(per esempio $\frac{2i}{\sqrt 6} = \frac{2i\sqrt 6}{6} = \frac{i\sqrt 6}{3}$), e
$$\Lambda = W^{-1} A W = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$

**L'inversa senza calcoli.** Le dispense notano che ${}^t\bar W \cdot W = I_3$, quindi $W^{-1} = {}^t\bar W$: l'elemento $(j, k)$ di ${}^t\bar W W$ è $\sum_l \overline{W_{lj}} W_{lk} = \langle w_k, w_j \rangle$, che vale $1$ se $j = k$ e $0$ altrimenti perché le colonne sono ortonormali. Attenzione: senza il coniugio non funziona, per esempio l'elemento $(1, 1)$ di ${}^tW W$ è $\frac 13 + \left(\frac{\sqrt 3 i}{3}\right)^2 + \left(\frac{\sqrt 3 i}{3}\right)^2 = \frac 13 - \frac 13 - \frac 13 = -\frac 13 \neq 1$.
:::

::: esercizio base Una diagonalizzazione ortogonale $2 \times 2$
Trova una matrice ortogonale $M$ tale che ${}^tM A M$ sia diagonale, per $A = \begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix}$.
::: soluzione
$p_A(\lambda) = (5 - \lambda)(2 - \lambda) - 4 = \lambda^2 - 7\lambda + 6 = (\lambda - 6)(\lambda - 1)$.
- $\lambda = 6$: $(A - 6I)x = 0$ dà $-x_1 + 2x_2 = 0$, autovettore $(2, 1)$.
- $\lambda = 1$: $(A - I)x = 0$ dà $4x_1 + 2x_2 = 0$, autovettore $(1, -2)$.

Ortogonali: $2 - 2 = 0$. Norme $\sqrt 5$. Quindi
$$M = \frac{1}{\sqrt 5}\begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}, \qquad {}^tM A M = \begin{pmatrix} 6 & 0 \\ 0 & 1 \end{pmatrix}.$$
Controllo: $A\,(2, 1) = (12, 6) = 6\,(2, 1)$ e $A\,(1, -2) = (1, -2)$.
:::

::: esercizio medio Un autovalore doppio con Gram–Schmidt
Trova una base ortonormale di autovettori per $A = \begin{pmatrix} 2 & 2 & 2 \\ 2 & 5 & 4 \\ 2 & 4 & 5 \end{pmatrix}$.
::: soluzione
**Polinomio caratteristico**, sviluppando lungo la prima riga:
$$\det(A - \lambda I) = (2 - \lambda)\big[(5 - \lambda)^2 - 16\big] - 2\big[2(5 - \lambda) - 8\big] + 2\big[8 - 2(5 - \lambda)\big].$$
$(5 - \lambda)^2 - 16 = \lambda^2 - 10\lambda + 9 = (\lambda - 1)(\lambda - 9)$; $2(5 - \lambda) - 8 = 2 - 2\lambda$; $8 - 2(5 - \lambda) = -2 + 2\lambda$. Quindi
$$\begin{aligned} \det(A - \lambda I) &= (2 - \lambda)(\lambda - 1)(\lambda - 9) + 8(\lambda - 1) \\ &= (\lambda - 1)\big[(2 - \lambda)(\lambda - 9) + 8\big] = -(\lambda - 1)^2(\lambda - 10), \end{aligned}$$
perché $(2 - \lambda)(\lambda - 9) + 8 = -\lambda^2 + 11\lambda - 10 = -(\lambda - 1)(\lambda - 10)$. Autovalori: $1$ (doppio) e $10$.

**Autospazi.** $A - I = \begin{pmatrix} 1 & 2 & 2 \\ 2 & 4 & 4 \\ 2 & 4 & 4 \end{pmatrix}$ ha rango $1$: $V_1 = \{x_1 + 2x_2 + 2x_3 = 0\}$, con base $(-2, 1, 0)$ e $(-2, 0, 1)$. Per $\lambda = 10$: $A\,(1, 2, 2) = (10, 20, 20)$, quindi $V_{10} = \Span((1, 2, 2))$ (è la retta ortogonale al piano $V_1$, come deve essere).

**Gram–Schmidt in $V_1$.** $w_1 = (-2, 1, 0)$ e
$$\begin{aligned} w_2 &= (-2, 0, 1) - \frac{\langle (-2, 0, 1), (-2, 1, 0) \rangle}{\langle (-2, 1, 0), (-2, 1, 0) \rangle}(-2, 1, 0) \\ &= (-2, 0, 1) - \tfrac 45(-2, 1, 0) = \left(-\tfrac 25, -\tfrac 45, 1\right), \end{aligned}$$
che moltiplico per $5$: $(-2, -4, 5)$. Controlli: $\langle (-2, 1, 0), (-2, -4, 5) \rangle = 4 - 4 = 0$ e $-2 - 8 + 10 = 0$ (sta in $V_1$).

**Normalizzazione.** $\lVert (1, 2, 2) \rVert = 3$, $\lVert (-2, 1, 0) \rVert = \sqrt 5$, $\lVert (-2, -4, 5) \rVert = \sqrt{45} = 3\sqrt 5$. Base ortonormale di autovettori:
$$\tfrac 13 (1, 2, 2), \qquad \tfrac{1}{\sqrt 5}(-2, 1, 0), \qquad \tfrac{1}{3\sqrt 5}(-2, -4, 5),$$
con ${}^tM A M = \operatorname{diag}(10, 1, 1)$.
:::

::: esercizio medio Una matrice hermitiana $2 \times 2$
Trova una base ortonormale di autovettori (prodotto hermitiano euclideo) per $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$ e scrivi $W$ con $W^{-1} H W$ diagonale.
::: soluzione
$p_H(\lambda) = (1 - \lambda)^2 - i(-i) = (1 - \lambda)^2 - 1 = \lambda(\lambda - 2)$: autovalori $0$ e $2$, reali.
- $\lambda = 0$: $x_1 + i x_2 = 0$, cioè $x_1 = -i x_2$: con $x_2 = i$ si ha $x_1 = 1$, autovettore $(1, i)$. Controllo: $H\,(1, i) = (1 + i \cdot i,\ -i + i) = (0, 0)$.
- $\lambda = 2$: $-x_1 + i x_2 = 0$, cioè $x_1 = i x_2$: con $x_2 = -i$ si ha $x_1 = 1$, autovettore $(1, -i)$. Controllo: $H\,(1, -i) = (1 + 1,\ -i - i) = 2\,(1, -i)$.

$\langle (1, i), (1, -i) \rangle = 1 + i \cdot \overline{-i} = 1 + i \cdot i = 0$, e le norme valgono $\sqrt 2$. Quindi
$$W = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ i & -i \end{pmatrix}, \qquad W^{-1} = {}^t\bar W = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & -i \\ 1 & i \end{pmatrix},$$
$$W^{-1} H W = \begin{pmatrix} 0 & 0 \\ 0 & 2 \end{pmatrix}.$$
:::

::: esercizio difficile Il viceversa facile, con le matrici
Sia $A \in M(n, \R)$ e supponi che esista una matrice ortogonale $M$ con ${}^tM A M = D$ diagonale. Dimostra direttamente che $A$ è simmetrica.
::: soluzione
Da ${}^tM A M = D$, moltiplicando a sinistra per $M$ e a destra per ${}^tM$ e usando $M\,{}^tM = I$ (per una matrice quadrata ${}^tM M = I$ implica anche $M\,{}^tM = I$):
$$A = M D\, {}^tM.$$
Trasponendo, con la regola della trasposta di un prodotto e ${}^tD = D$ (una matrice diagonale è simmetrica):
$${}^tA = {}^t({}^tM)\, {}^tD\, {}^tM = M D\, {}^tM = A.$$
Quindi $A$ è simmetrica. È la freccia (3) $\Rightarrow$ (1) del Corollario 26.2, senza passare per gli endomorfismi.
:::

::: esercizio difficile Autovalori reali per le simmetriche $2 \times 2$, a mano
(a) Dimostra che $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ con $a, b, c \in \R$ ha sempre autovalori reali. (b) Quando i due autovalori coincidono? (c) Verifica che, se $b \neq 0$, gli autovettori sono ortogonali.
::: soluzione
(a) $p_S(\lambda) = \lambda^2 - (a + c)\lambda + (ac - b^2)$, con discriminante
$$\Delta = (a + c)^2 - 4(ac - b^2) = (a - c)^2 + 4b^2 \ge 0.$$
Le radici sono reali.

(b) $\Delta = 0$ se e solo se $a = c$ e $b = 0$, cioè $S = aI$: un solo autovalore, e ogni vettore è autovettore.

(c) Se $b \neq 0$ gli autovalori $\lambda_1 \neq \lambda_2$ sono distinti. Dalla prima riga di $S - \lambda I$, $(a - \lambda)x + by = 0$, un autovettore di $\lambda$ è $v = (b, \lambda - a)$. Allora
$$\langle v_1, v_2 \rangle = b^2 + (\lambda_1 - a)(\lambda_2 - a) = b^2 + \lambda_1\lambda_2 - a(\lambda_1 + \lambda_2) + a^2.$$
Con $\lambda_1 + \lambda_2 = a + c$ e $\lambda_1 \lambda_2 = ac - b^2$ (coefficienti di $p_S$): $b^2 + ac - b^2 - a^2 - ac + a^2 = 0$.
:::

::: esercizio esame Matrice con parametro (appello del 15/01/2026, problema 11)
Si consideri la matrice $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, dove $k$ è un parametro reale. (1) Determinare per quali valori di $k$ la matrice $A$ è invertibile. (2) Calcolare ${}^tA - A$, e stabilire per quali valori di $k$ la matrice $A$ ammette sia autovalori reali, sia una base ortonormale di autovettori. (3) Posto $k = 1$, calcolare una base ortonormale di autovettori.
::: soluzione
(1) Sviluppo lungo la prima riga:
$$\det A = 1 \cdot \big((k + 1) \cdot 1 - k \cdot k\big) - k^2 \cdot (k \cdot 1 - k \cdot 0) + 0 = k + 1 - k^2 - k^3.$$
Raccolgo: $-k^3 - k^2 + k + 1 = -k^2(k + 1) + (k + 1) = (k + 1)(1 - k^2) = -(k + 1)^2 (k - 1)$. Quindi $A$ è invertibile per $k \neq 1$ e $k \neq -1$.

(2) ${}^tA = \begin{pmatrix} 1 & k & 0 \\ k^2 & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$, quindi
$${}^tA - A = \begin{pmatrix} 0 & k - k^2 & 0 \\ k^2 - k & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
$A$ è simmetrica se e solo se $k^2 = k$, cioè $k = 0$ oppure $k = 1$. Per il Corollario 26.2, $A$ ha una base ortonormale di autovettori se e solo se è simmetrica, e in quel caso ha anche autovalori reali. Risposta: $k \in \{0, 1\}$.

(3) Con $k = 1$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}$. Sviluppando lungo la prima riga,
$$\begin{aligned} p_A(\lambda) &= (1 - \lambda)\big[(2 - \lambda)(1 - \lambda) - 1\big] - 1 \cdot \big[(1 - \lambda) - 0\big] \\ &= (1 - \lambda)\big[\lambda^2 - 3\lambda + 1 - 1\big] = (1 - \lambda)\,\lambda\,(\lambda - 3). \end{aligned}$$
Autovalori $0$, $1$, $3$, distinti.
- $\lambda = 0$: $x_1 + x_2 = 0$ e $x_2 + x_3 = 0$: $(1, -1, 1)$.
- $\lambda = 1$: $A - I = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ dà $x_2 = 0$ e $x_1 + x_3 = 0$: $(1, 0, -1)$.
- $\lambda = 3$: $A - 3I = \begin{pmatrix} -2 & 1 & 0 \\ 1 & -1 & 1 \\ 0 & 1 & -2 \end{pmatrix}$ dà $x_2 = 2x_1$ e $x_2 = 2x_3$: $(1, 2, 1)$.

Sono ortogonali a due a due (autovalori distinti; controllo: $1 - 1 + 0 = 0$, $1 - 2 + 1 = 0$, $1 + 0 - 1 = 0$). Normalizzando:
$$\tfrac{1}{\sqrt 3}(1, -1, 1), \qquad \tfrac{1}{\sqrt 2}(1, 0, -1), \qquad \tfrac{1}{\sqrt 6}(1, 2, 1).$$
Nota: $0$ è un autovalore proprio per $k = 1$, coerente con il punto (1) ($A$ non invertibile).
:::

::: esercizio esame Simmetrica per un solo valore del parametro
Sia $A_k = \begin{pmatrix} 2 & k & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ con $k \in \R$. (1) Calcola ${}^tA_k - A_k$ e trova per quali $k$ la matrice è simmetrica. (2) Per quel valore trova una matrice ortogonale $M$ e una diagonale $D$ con ${}^tM A_k M = D$. (3) Per $k = 4$ la matrice è diagonalizzabile? Ha una base ortonormale di autovettori?
::: soluzione
(1) ${}^tA_k - A_k = \begin{pmatrix} 0 & 1 - k & 0 \\ k - 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$: nulla solo per $k = 1$.

(2) Con $k = 1$ il blocco in alto a sinistra è $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, con autovalori $3$ e $1$ e autovettori $(1, 1)$ e $(1, -1)$; il terzo vettore della base canonica dà l'autovalore $3$. Quindi
- $\lambda = 3$ (doppio): $V_3 = \Span((1, 1, 0), (0, 0, 1))$, già ortogonali;
- $\lambda = 1$: $V_1 = \Span((1, -1, 0))$.

Controllo con il polinomio: $p(\lambda) = (3 - \lambda)\big[(2 - \lambda)^2 - 1\big] = (3 - \lambda)(\lambda - 1)(\lambda - 3)$. Normalizzando:
$$M = \begin{pmatrix} \frac{1}{\sqrt 2} & 0 & \frac{1}{\sqrt 2} \\ \frac{1}{\sqrt 2} & 0 & -\frac{1}{\sqrt 2} \\ 0 & 1 & 0 \end{pmatrix}, \qquad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

(3) Con $k = 4$ il blocco $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$ ha $p(\lambda) = (2 - \lambda)^2 - 4 = \lambda(\lambda - 4)$: autovalori $0$ e $4$, più l'autovalore $3$. Tre autovalori reali **distinti**: $A_4$ è diagonalizzabile (lezione L18). Però non è simmetrica, quindi per il Corollario 26.2 **non** ha una base ortonormale di autovettori. Infatti gli autovettori di $4$ e di $0$ sono $(2, 1, 0)$ e $(-2, 1, 0)$, con prodotto scalare $-4 + 1 = -3 \neq 0$.
:::

## Domande di ripasso

::: domanda Che cosa dice il teorema spettrale?
Un endomorfismo $T$ di uno spazio reale con prodotto scalare definito positivo (o complesso con prodotto hermitiano definito positivo) è autoaggiunto se e solo se ha una base ortonormale di autovettori e tutti i suoi autovalori sono reali (Teorema 26.1).
:::

::: domanda Perché nel caso complesso serve la condizione «autovalori reali»?
Perché ci sono endomorfismi con una base ortonormale di autovettori che non sono autoaggiunti: $T(x, y) = (ix, y)$ su $\C^2$. La loro matrice diagonale ha un elemento non reale, quindi non è hermitiana.
:::

::: domanda Come si dimostra che gli autovalori di un autoaggiunto sono reali?
Se $T(v) = \lambda v$ con $v \neq 0$: $\lambda \langle v, v \rangle = \langle T(v), v \rangle = \langle v, T(v) \rangle = \bar\lambda \langle v, v \rangle$, e siccome $\langle v, v \rangle > 0$ si ha $\lambda = \bar\lambda$.
:::

::: domanda Qual è l'idea dell'induzione nella dimostrazione?
Si prende un autovettore $v$ (esiste sui complessi per il teorema fondamentale dell'algebra). $\Span(v)$ è invariante, quindi anche $U = \Span(v)^\perp$ lo è (Proposizione 25.10); $T|_U$ è autoaggiunto su uno spazio di dimensione $n - 1$, e per induzione ha una base ortonormale di autovettori, a cui si aggiunge $v$ normalizzato.
:::

::: domanda Come si passa dal caso complesso al caso reale?
Si scrive $T$ in una base ortonormale con una matrice $S$ reale simmetrica; considerata complessa, ha autovalori reali; quindi il polinomio caratteristico ha una radice reale $\lambda$, e $\det(S - \lambda I) = 0$ dà un autovettore reale. Poi la stessa induzione.
:::

::: domanda Che cosa dice il Corollario 26.2?
Per una matrice reale $A$ sono equivalenti: $A$ simmetrica; $L_A$ ha una base ortonormale di autovettori; esiste $M$ ortogonale con ${}^tM A M = M^{-1} A M$ diagonale.
:::

::: domanda Che cos'è una matrice ortogonale e perché è comoda?
Una matrice reale con ${}^tM M = I$: le sue colonne formano una base ortonormale. È comoda perché $M^{-1} = {}^tM$, senza calcoli.
:::

::: domanda Perché autovettori di autovalori diversi di una matrice simmetrica sono ortogonali?
Da $\lambda \langle v, w \rangle = \langle Av, w \rangle = \langle v, Aw \rangle = \mu \langle v, w \rangle$ segue $(\lambda - \mu)\langle v, w \rangle = 0$, e $\lambda \neq \mu$.
:::

::: domanda Quando serve Gram–Schmidt per diagonalizzare una matrice simmetrica?
Solo dentro un autospazio di dimensione almeno 2, se la base trovata risolvendo il sistema non è già ortogonale. Fra autospazi diversi l'ortogonalità è automatica.
:::

::: domanda Una matrice diagonalizzabile è sempre simmetrica?
No. $\begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ è diagonalizzabile ma non simmetrica: ha una base di autovettori, ma non una base ortonormale di autovettori.
:::

::: domanda Come cambia il metodo per una matrice hermitiana?
Prodotti e norme si calcolano con il prodotto hermitiano (moduli al quadrato); la matrice $W$ degli autovettori normalizzati soddisfa ${}^t\bar W W = I$, quindi $W^{-1} = {}^t\bar W$.
:::

::: domanda Che cosa c'entra il teorema spettrale con la PCA?
La matrice $S = \frac 1N \sum x_i\, {}^t x_i$ dei dati centrati è simmetrica, quindi ha una base ortonormale di autovettori; quelli con gli autovalori più grandi sono le direzioni di massima variabilità, e proiettando su di esse si riduce la dimensione dei dati.
:::

## Glossario

```glossario
Spettro | L'insieme degli autovalori di un endomorfismo o di una matrice.
Teorema spettrale | $T$ autoaggiunto $\iff$ base ortonormale di autovettori e autovalori reali (Teorema 26.1).
Endomorfismo autoaggiunto | $T$ con $\langle T(v), w \rangle = \langle v, T(w) \rangle$ per ogni $v, w$ (lezione L25).
Base ortonormale di autovettori | Base formata da autovettori di norma 1 a due a due ortogonali; in essa la matrice dell'endomorfismo è diagonale.
Matrice ortogonale | Matrice reale con ${}^tM M = I$; le colonne sono una base ortonormale e $M^{-1} = {}^tM$.
Diagonalizzazione ortogonale | Scrittura ${}^tM A M = D$ con $M$ ortogonale e $D$ diagonale; possibile esattamente per le matrici simmetriche (Corollario 26.2).
Matrice simmetrica | Matrice reale con ${}^tA = A$; ha autovalori reali ed è diagonalizzabile con una matrice ortogonale.
Matrice hermitiana | Matrice complessa con ${}^tH = \bar H$; ha autovalori reali e una base ortonormale di autovettori per il prodotto hermitiano.
Trasposta coniugata | ${}^t\bar W$; per una matrice con colonne ortonormali (prodotto hermitiano) è l'inversa.
Autospazio | $V_\lambda = \{v \mid A v = \lambda v\}$; per le simmetriche la sua dimensione è la molteplicità algebrica di $\lambda$.
Molteplicità algebrica e geometrica | Molteplicità di $\lambda$ come radice di $p_A$, e dimensione di $V_\lambda$; per le matrici simmetriche coincidono.
Induzione sulla dimensione | Tecnica della dimostrazione: si stacca un autovettore e si applica l'ipotesi al suo complemento ortogonale.
Teorema fondamentale dell'algebra | Ogni polinomio complesso non costante ha una radice complessa; garantisce un autovalore sui complessi.
PCA | Analisi delle componenti principali: diagonalizza la matrice simmetrica dei dati per trovare le direzioni di massima variabilità.
```

## Checklist

```checklist
- So enunciare il teorema spettrale e spiegare perché nel caso complesso serve la condizione sugli autovalori reali.
- So dimostrare che gli autovalori di un endomorfismo autoaggiunto sono reali.
- So raccontare la dimostrazione per induzione: autovettore, complemento ortogonale invariante, ipotesi induttiva.
- So che una matrice reale simmetrica ha autovalori reali ed è diagonalizzabile con una matrice ortogonale.
- So enunciare il Corollario 26.2 e usare $M^{-1} = {}^tM$.
- So dimostrare che autovettori di autovalori diversi di una matrice simmetrica sono ortogonali.
- So trovare una base ortonormale di autovettori anche con un autovalore doppio, usando Gram–Schmidt dentro l'autospazio.
- So diagonalizzare una matrice hermitiana usando il prodotto hermitiano e $W^{-1} = {}^t\bar W$.
- So usare ${}^tA - A$ per decidere, al variare di un parametro, quando esiste una base ortonormale di autovettori.
- So distinguere «diagonalizzabile» da «diagonalizzabile con una base ortonormale».
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 26 «Teorema spettrale II», pp. 134–138: introduzione, sezione 26.A (Teorema 26.1 con la dimostrazione, Corollario 26.2, collegamento con la PCA) e sezione 26.B (Esercizi 26.3, 26.4 e 26.5, svolti per intero negli esercizi). Dalle lezioni precedenti: diagonalizzazione (lezioni 17–18), prodotti scalari e Gram–Schmidt (lezioni 19–21), matrici ortogonali (Definizione 22.10), prodotti hermitiani ed endomorfismi autoaggiunti (lezione 25).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §11.3 (teorema spettrale, Corollario 11.3.2, conseguenze) ed Esercizi 11.1–11.2.
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): testo riportato del 16/01/2025 (domanda 7), del 02/09/2025 (problema 11, punto 3) e del 15/01/2026 (problema 11), con soluzioni scritte per questi appunti; citato per tipo di domanda l'appello del 24/01/2024 (problema 11).
- Le parti **«Oltre le dispense»** (caso $2 \times 2$ a mano, ortogonalità degli autovettori di autovalori diversi, esempio numerico di PCA, esempi ed esercizi aggiuntivi) sono aggiunte di questi appunti per collegare la lezione al libro e all'esame.
