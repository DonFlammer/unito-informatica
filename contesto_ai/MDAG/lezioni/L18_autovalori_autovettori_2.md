---
corso: MDAG
modulo: AG
lezione: L18
titolo: Autovalori e autovettori II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L18
descrizione: >-
  Appunti della lezione L18 di Algebra lineare e Geometria (MDAG, parte 2): indipendenza di autovettori con autovalori
  distinti, autospazi e somma diretta, molteplicità algebrica e geometrica, teorema di diagonalizzabilità e matrici con
  un parametro, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Quando una matrice è diagonalizzabile? Autovettori con autovalori diversi sono sempre indipendenti, e gli autovettori
  di uno stesso autovalore formano un sottospazio, l'autospazio $V_\lambda$. Confrontando la molteplicità algebrica
  (quante volte $\lambda$ è radice di $p_A$) con quella geometrica ($\dim V_\lambda$) si ottiene il teorema di
  diagonalizzabilità, che risolve il problema aperto più frequente dell'esame: le matrici con un parametro $k$.
materiale: dispense
scheda:
  Dispense: lezione 18 · pp. 90–95
  Libro: Martelli, §5.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 18 «Autovalori e autovettori II»; B. Martelli, Geometria e algebra lineare, §5.1 e §5.2
file_en: L18_eigenvalues_eigenvectors_2.html
appunti_html: appunti/MDAG/L18_autovalori_autovettori_2.html
genera_html: true
---

## In breve

- **Autovettori con autovalori distinti sono linearmente indipendenti** (Proposizione 18.1). Quindi se $p_T$ ha $n$ radici **distinte** in $\K$, $T$ è diagonalizzabile. Non vale il viceversa: $I_n$ è diagonale con un solo autovalore.
- L'**autospazio** di un autovalore $\lambda$ è $V_\lambda = \{v \in V \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$: tutti gli autovettori di $\lambda$ più il vettore nullo. È un sottospazio.
- Gli autospazi sono sempre in **somma diretta**; $T$ è diagonalizzabile se e solo se la loro somma è tutto $V$.
- **Molteplicità algebrica** $m_a(\lambda)$: quante volte $\lambda$ è radice di $p_T$. **Molteplicità geometrica** $m_g(\lambda) = \dim V_\lambda = n - \rk(A - \lambda I_n)$.
- Vale sempre $1 \le m_g(\lambda) \le m_a(\lambda)$: un autovalore semplice ($m_a = 1$) ha sempre $m_g = 1$ e non dà problemi.
- **Teorema di diagonalizzabilità**: $T$ è diagonalizzabile se e solo se (1) $p_T$ ha $n$ radici in $\K$ contate con molteplicità e (2) $m_a(\lambda) = m_g(\lambda)$ per ogni autovalore.
- Il campo conta: la rotazione di $90°$ è diagonalizzabile su $\C$ ma non su $\R$; $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ non lo è su nessuno dei due.
- Con un parametro $k$: si trovano gli autovalori in funzione di $k$; dove sono distinti la matrice è diagonalizzabile; nei valori di $k$ in cui due autovalori coincidono si calcola il rango di $A - \lambda I_n$.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Autovettori con autovalori distinti (p. 90)

Nella lezione L17 hai visto che un endomorfismo $T : V \to V$ è diagonalizzabile se $V$ ha una base $\mathcal B = \{v_1, \dots, v_n\}$ composta da autovettori per $T$. Per trovare una tale base serve sapere quando degli autovettori sono **indipendenti**.

Come nelle dispense, i vettori di $\K^n$ sono colonne; nel testo li scriviamo in riga, $(1, 2)$, per risparmiare spazio.

Un primo esempio: per $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ della lezione L17, gli autovettori $(1, 0)$ (autovalore 3) e $(-4, 1)$ (autovalore 2) sono indipendenti. Non è un caso.

> [!PROP] 18.1
> Se $v_1, \dots, v_k \in V$ sono autovettori per $T$ con autovalori $\lambda_1, \dots, \lambda_k$ distinti, allora sono linearmente indipendenti.

Vediamo prima il caso di **due** autovettori, che contiene già tutta l'idea. Siano $T(v_1) = \lambda_1 v_1$ e $T(v_2) = \lambda_2 v_2$ con $\lambda_1 \neq \lambda_2$, e supponiamo
$$\alpha_1 v_1 + \alpha_2 v_2 = 0.$$
1. Applichiamo $T$ (che è lineare e manda $0$ in $0$): $\alpha_1 \lambda_1 v_1 + \alpha_2 \lambda_2 v_2 = 0$.
2. Moltiplichiamo invece la prima equazione per $\lambda_2$: $\alpha_1 \lambda_2 v_1 + \alpha_2 \lambda_2 v_2 = 0$.
3. Sottraiamo: il termine con $v_2$ sparisce e resta $\alpha_1(\lambda_1 - \lambda_2)v_1 = 0$.
4. $v_1 \neq 0$ (è un autovettore) e $\lambda_1 - \lambda_2 \neq 0$, quindi $\alpha_1 = 0$. Allora $\alpha_2 v_2 = 0$ e, poiché $v_2 \neq 0$, anche $\alpha_2 = 0$.

La combinazione nulla ha solo coefficienti nulli: $v_1$ e $v_2$ sono indipendenti. Con più vettori si ripete lo stesso trucco, eliminando un vettore alla volta: è la dimostrazione per induzione delle dispense.

> [!DIM] della Proposizione 18.1 (dalle dispense)
> Procediamo per induzione su $k$. Se $k = 1$, il vettore $v_1$ è indipendente semplicemente perché non è nullo (per definizione, un autovettore non è mai nullo).
>
> Diamo per buono il caso $k - 1$ e mostriamo il caso $k$. Supponiamo di avere una combinazione lineare nulla
> $$\alpha_1 v_1 + \dots + \alpha_k v_k = 0.$$
> Dobbiamo dimostrare che $\alpha_i = 0$ per ogni $i$. Applicando $T$ otteniamo
> $$\alpha_1 T(v_1) + \dots + \alpha_k T(v_k) = \alpha_1 \lambda_1 v_1 + \dots + \alpha_k \lambda_k v_k = T(0) = 0.$$
> Moltiplicando la prima equazione per $\lambda_k$ troviamo
> $$\alpha_1 \lambda_k v_1 + \dots + \alpha_k \lambda_k v_k = 0$$
> e prendendo la differenza tra queste due equazioni deduciamo che
> $$\alpha_1(\lambda_1 - \lambda_k)v_1 + \dots + \alpha_{k-1}(\lambda_{k-1} - \lambda_k)v_{k-1} = 0.$$
> Questa è una combinazione lineare nulla di $k - 1$ autovettori con autovalori distinti: per l'ipotesi induttiva tutti i coefficienti $\alpha_i(\lambda_i - \lambda_k)$ devono essere nulli. Poiché $\lambda_i \neq \lambda_k$, ne deduciamo che $\alpha_i = 0$ per ogni $i = 1, \dots, k - 1$, e con la prima equazione anche $\alpha_k = 0$ (resta $\alpha_k v_k = 0$ con $v_k \neq 0$).

> [!COROLLARIO] 18.2
> Se il polinomio caratteristico $p_T(\lambda)$ ha $n$ radici distinte in $\K$, l'endomorfismo $T$ è diagonalizzabile.

Il perché (è la dimostrazione del libro di Martelli, Corollario 5.2.2): le $n$ radici $\lambda_1, \dots, \lambda_n$ sono autovalori (Proposizione 17.13), quindi ognuna ha un autovettore $v_i$. Per la Proposizione 18.1 i vettori $v_1, \dots, v_n$ sono indipendenti; sono $n$ in uno spazio di dimensione $n$, quindi formano una base (Teorema 7.12). È una base di autovettori.

> [!ESEMPIO] · diagonalizzabile senza cercare gli autovettori
> $A = \begin{pmatrix} 1 & 7 & -1 \\ 0 & 2 & 8 \\ 0 & 0 & 3 \end{pmatrix}$ è triangolare, quindi i suoi autovalori sono $1, 2, 3$ (lezione L17). Sono tre, distinti, in $\R^3$: per il Corollario 18.2, $A$ è diagonalizzabile. Non serve calcolare gli autovettori per saperlo (se servono: $(1, 0, 0)$, $(7, 1, 0)$ e $(55, 16, 2)$).

> [!TRAPPOLA] Il Corollario 18.2 va in una sola direzione
> «$n$ autovalori distinti» è una condizione **sufficiente**, non necessaria. $I_3$ ha un solo autovalore (1, contato tre volte) ed è diagonale. Quando qualche autovalore si ripete non si può concludere niente: serve il teorema di diagonalizzabilità della sezione più avanti.

## Autospazi e somma diretta (pp. 90–91)

Gli autovettori con lo **stesso** autovalore si comportano bene: se $T(v) = \lambda v$ e $T(w) = \lambda w$, allora $T(v + w) = \lambda(v + w)$ e $T(\mu v) = \lambda(\mu v)$. Messi insieme, con l'aggiunta dello zero, formano un sottospazio.

> [!DEF] 18.3 · Autospazio
> Sia $T : V \to V$ un endomorfismo. Per ogni autovalore $\lambda$ di $T$ definiamo l'**autospazio**
> $$V_\lambda = \{v \in V \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$$
> come l'insieme di tutti gli autovettori $v$ con autovalore $\lambda$, più l'origine $0 \in V$ (ricordiamo che $0 \in V$ non è autovettore per definizione).

Pezzo per pezzo:

- **$T - \lambda\,\id$** è l'endomorfismo $v \mapsto T(v) - \lambda v$. Il suo nucleo è fatto dei $v$ con $T(v) - \lambda v = 0$, cioè $T(v) = \lambda v$: per questo le due scritture di $V_\lambda$ coincidono.
- **È un sottospazio**: per ogni endomorfismo $S : V \to V$ il nucleo $\Ker(S)$ è un sottospazio di $V$ (Proposizione 14.10), e $V_\lambda$ è il nucleo di $S = T - \lambda\,\id$.
- **In coordinate**: con $A = [T]^{\mathcal B}_{\mathcal B}$, l'autospazio corrisponde alle soluzioni del sistema omogeneo $(A - \lambda I_n)x = 0$. Una base di $V_\lambda$ si trova con Gauss, come per ogni nucleo.
- **Non è mai $\{0\}$**, perché $\lambda$ è un autovalore: contiene almeno un autovettore.

> [!ESEMPIO] · gli autospazi di una matrice $3 \times 3$
> Sia $A = \begin{pmatrix} 3 & 0 & 0 \\ -4 & -1 & -8 \\ 0 & 0 & 3 \end{pmatrix}$ (la matrice dell'Esempio 18.11, più avanti). I suoi autovalori sono $3$ e $-1$.
> - $V_3 = \Ker(A - 3I_3)$ con $A - 3I_3 = \begin{pmatrix} 0 & 0 & 0 \\ -4 & -4 & -8 \\ 0 & 0 & 0 \end{pmatrix}$: una sola equazione, $-4x - 4y - 8z = 0$, cioè $x = -y - 2z$. Con $y = 1, z = 0$ e con $y = 0, z = 1$: $V_3 = \Span\big((-1, 1, 0),\ (-2, 0, 1)\big)$, un piano.
> - $V_{-1} = \Ker(A + I_3)$ con $A + I_3 = \begin{pmatrix} 4 & 0 & 0 \\ -4 & 0 & -8 \\ 0 & 0 & 4 \end{pmatrix}$: dalla prima riga $x = 0$, dalla terza $z = 0$, e $y$ è libera. $V_{-1} = \Span\big((0, 1, 0)\big)$, una retta.

Per la definizione successiva serve la **somma** di sottospazi: $V_1 + \dots + V_k$ è l'insieme di tutti i vettori che si scrivono come $v_1 + \dots + v_k$ con $v_i \in V_i$. È il più piccolo sottospazio che li contiene tutti.

> [!DEF] 18.4 · Somma diretta
> Siano $V_1, \dots, V_k$ sottospazi di uno spazio vettoriale $V$. Diciamo che la loro somma è **diretta** se ogni vettore
> $$v \in V_1 + \dots + V_k$$
> si può scrivere in modo unico nella forma
> $$v = v_1 + \dots + v_k, \qquad v_i \in V_i.$$
> In questo caso scriviamo $V_1 \oplus \dots \oplus V_k$.
>
> Equivalentemente, l'unica relazione $v_1 + \dots + v_k = 0$ con $v_i \in V_i$ è quella in cui $v_1 = \dots = v_k = 0$.

> [!ESEMPIO] · rette in somma diretta, e no
> In $\R^3$ le tre rette $\Span(e_1)$, $\Span(e_2)$, $\Span(e_3)$ sono in somma diretta: se $a e_1 + b e_2 + c e_3 = 0$ allora $(a, b, c) = 0$, quindi i tre addendi sono nulli. Invece $\Span(e_1)$, $\Span(e_2)$ e $\Span(e_1 + e_2)$ **non** lo sono: $e_1 + e_2 + \big(-(e_1 + e_2)\big) = 0$ è una relazione con addendi non nulli. Il vettore $e_1 + e_2$ si scrive in due modi: $e_1 + e_2 + 0$ oppure $0 + 0 + (e_1 + e_2)$.

> [!PROP] 18.5
> Sia $T : V \to V$ un endomorfismo e siano $\lambda_1, \dots, \lambda_k$ i suoi autovalori. I corrispettivi autospazi sono sempre in somma diretta:
> $$V_{\lambda_1} \oplus \dots \oplus V_{\lambda_k}.$$

La spiegazione delle dispense, resa esplicita: prendiamo una relazione $v_1 + \dots + v_k = 0$ con $v_i \in V_{\lambda_i}$ e supponiamo che qualche $v_i$ non sia nullo. I $v_i$ non nulli sono autovettori con autovalori distinti, e la relazione dice che la loro somma (con tutti i coefficienti uguali a 1) è zero: sono dipendenti. Questo contraddice la Proposizione 18.1. Quindi tutti i $v_i$ sono nulli, che è la forma equivalente della Definizione 18.4.

> [!COROLLARIO] 18.6
> L'endomorfismo $T$ è diagonalizzabile se e solo se
> $$V = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_k}.$$

La dimostrazione delle dispense, con i passaggi: sappiamo già che gli autospazi sono in somma diretta, quindi bisogna mostrare che $V = V_{\lambda_1} + \dots + V_{\lambda_k}$ se e solo se esiste una base di autovettori.

1. **($\Rightarrow$)** Prendiamo una base di ciascun $V_{\lambda_i}$ e uniamole. Sono tutti autovettori. Generano la somma, che è $V$; e sono indipendenti, perché una combinazione nulla si spezza in un pezzo per ogni autospazio, la somma diretta impone che ogni pezzo sia nullo, e dentro ciascun $V_{\lambda_i}$ i vettori scelti sono una base. Quindi è una base di $V$ fatta di autovettori.
2. **($\Leftarrow$)** Se c'è una base di autovettori, ciascun vettore $v$ è combinazione lineare di autovettori, e raggruppando quelli con lo stesso autovalore si ottiene $v \in V_{\lambda_1} + \dots + V_{\lambda_k}$.

In pratica: **$T$ è diagonalizzabile se e solo se $\dim V_{\lambda_1} + \dots + \dim V_{\lambda_k} = n$**. Nell'esempio sopra: $\dim V_3 + \dim V_{-1} = 2 + 1 = 3$, quindi quella matrice è diagonalizzabile.

## Molteplicità algebrica e geometrica (pp. 91–92)

Ricorda dalla lezione L04 (Definizione 4.3) che la **molteplicità** di una radice $a$ di un polinomio $p$ è il massimo $k$ tale che $(x - a)^k$ divide $p$: per esempio $(x - 1)^3(x + 1)$ ha la radice 1 con molteplicità 3.

> [!DEF] 18.7 · Molteplicità algebrica e geometrica
> Sia $T : V \to V$ un endomorfismo e sia $\lambda$ un autovalore per $T$. La **molteplicità algebrica** $m_a(\lambda)$ è la molteplicità di $\lambda$ come radice del polinomio caratteristico $p_T$. La **molteplicità geometrica** $m_g(\lambda)$ è la dimensione dell'autospazio associato a $\lambda$, cioè
> $$m_g(\lambda) = \dim V_\lambda.$$

Pezzo per pezzo:

- **$m_a$ si legge dal polinomio scomposto**: in $p_A(\lambda) = (3 - \lambda)^2(-1 - \lambda)$ l'autovalore 3 ha $m_a = 2$ e l'autovalore $-1$ ha $m_a = 1$.
- **$m_g$ si calcola con il rango**: per il teorema della dimensione (lezione L14, che per i sistemi è il teorema di Rouché–Capelli)
$$m_g(\lambda) = \dim \Ker(A - \lambda I_n) = n - \rk(A - \lambda I_n).$$
- **Nomi**: «algebrica» perché viene dal polinomio, «geometrica» perché misura lo spazio degli autovettori (una retta, un piano, …).

> [!ESEMPIO] 18.8 · Le due molteplicità possono essere diverse
> Sia $L_A : \R^2 \to \R^2$ l'endomorfismo dato da
> $$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}.$$
> Il polinomio caratteristico è $p_A(\lambda) = (1 - \lambda)^2 = \lambda^2 - 2\lambda + 1 = (\lambda - 1)^2$. Troviamo un solo autovalore $\lambda_1 = 1$, con molteplicità algebrica $m_a(1) = 2$. D'altra parte,
> $$m_g(1) = \dim V_1 = \dim \Ker(A - I_2) = 2 - \rk(A - I_2) = 2 - \rk\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = 2 - 1 = 1.$$
> Abbiamo quindi trovato in questo caso $m_a(1) = 2$ e $m_g(1) = 1$.

In questo esempio gli autovettori sono solo i multipli non nulli di $e_1$ (il sistema $(A - I_2)x = 0$ dice $y = 0$): una sola retta di autovettori in $\R^2$, quindi nessuna base di autovettori. $L_A$ è un **taglio** (in inglese *shear*): sposta orizzontalmente ogni punto di una quantità pari alla sua altezza. Nello strumento qui sotto trascina $x$: solo sull'asse orizzontale $Ax$ resta sulla stessa retta.

```widget matrice
titolo: Il taglio $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ ha una sola retta di autovettori
a: 1 1; 0 1
x: 1 1
raggio: 3
```

L'esempio mostra che le due molteplicità possono essere diverse. In generale, la molteplicità geometrica sta sempre tra 1 e la molteplicità algebrica:

> [!TEOREMA] 18.9
> Sia $T : V \to V$ un endomorfismo. Per ogni autovalore $\lambda_0$ di $T$ valgono le disuguaglianze
> $$1 \le m_g(\lambda_0) \le m_a(\lambda_0).$$

L'idea della dimostrazione, dalle dispense:

1. **La prima disuguaglianza** segue dall'esistenza di un autovettore non nullo: $V_{\lambda_0}$ contiene almeno un vettore $v \neq 0$, quindi ha dimensione almeno 1.
2. **Per la seconda**, scegliamo una base di $V_{\lambda_0}$ e completiamola a una base di $V$. Nella matrice di $T$ compare allora un blocco diagonale $\lambda_0 I_{m_g(\lambda_0)}$, quindi $p_T(\lambda)$ contiene il fattore $(\lambda_0 - \lambda)^{m_g(\lambda_0)}$, e $m_g(\lambda_0) \le m_a(\lambda_0)$.

> [!DIM] del Teorema 18.9, secondo punto, con i dettagli (dal libro di Martelli, Proposizione 5.2.10)
> Sia $k = m_g(\lambda_0)$ e sia $\{v_1, \dots, v_k\}$ una base di $V_{\lambda_0}$, completata a una base $\mathcal B = \{v_1, \dots, v_n\}$ di $V$. Per $i \le k$ vale $T(v_i) = \lambda_0 v_i$, quindi le prime $k$ colonne di $[T]^{\mathcal B}_{\mathcal B}$ sono $\lambda_0 e_1, \dots, \lambda_0 e_k$ e la matrice ha la forma a blocchi
> $$[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} \lambda_0 I_k & C \\ 0 & D \end{pmatrix}, \qquad D \in M(n - k).$$
> Il determinante di una matrice a blocchi di questo tipo (con il blocco in basso a sinistra nullo) è il prodotto dei determinanti dei blocchi diagonali. Quindi
> $$p_T(\lambda) = \det(\lambda_0 I_k - \lambda I_k) \cdot \det(D - \lambda I_{n-k}) = (\lambda_0 - \lambda)^k \, p_D(\lambda).$$
> Il fattore $(\lambda_0 - \lambda)^k$ divide $p_T$, quindi $\lambda_0$ ha molteplicità almeno $k$: $m_a(\lambda_0) \ge k = m_g(\lambda_0)$.

> [!IDEA] Gli autovalori semplici non danno mai problemi
> Se $m_a(\lambda) = 1$, il Teorema 18.9 dà $1 \le m_g(\lambda) \le 1$, quindi $m_g(\lambda) = 1$ senza fare conti. Negli esercizi il rango $\rk(A - \lambda I_n)$ va calcolato **solo** per gli autovalori con $m_a \ge 2$.

## Il teorema di diagonalizzabilità (pp. 92–93)

Possiamo finalmente enunciare il teorema principale. Sia $V$ uno spazio vettoriale di dimensione $n$ su $\K$.

> [!TEOREMA] 18.10 · Teorema di diagonalizzabilità
> Un endomorfismo $T : V \to V$ è diagonalizzabile se e solo se valgono entrambi i fatti seguenti:
> 1. $p_T(\lambda)$ ha $n$ radici in $\K$, contate con molteplicità.
> 2. $m_a(\lambda) = m_g(\lambda)$ per ogni autovalore $\lambda$ di $T$.

Pezzo per pezzo:

- **Condizione (1)**: il polinomio si scompone completamente in fattori di primo grado **nel campo $\K$**. Su $\C$ vale sempre (teorema fondamentale dell'algebra, lezione L04); su $\R$ fallisce se c'è un fattore di secondo grado con discriminante negativo, come $\lambda^2 + 1$.
- **Condizione (2)**: per ogni autovalore l'autospazio è «grande quanto deve». Per gli autovalori semplici è automatica (riquadro precedente).
- Le due condizioni insieme dicono che le dimensioni degli autospazi sommano a $n$.

La dimostrazione delle dispense, con i passaggi:

1. Gli autospazi sono in somma diretta (Proposizione 18.5); chiamiamo $W \subseteq V$ la loro somma, $W = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_k}$.
2. $T$ è diagonalizzabile $\iff W = V$ (Corollario 18.6) $\iff \dim W = n$.
3. In una somma diretta le dimensioni si sommano, quindi
$$\dim W = \dim V_{\lambda_1} + \dots + \dim V_{\lambda_k} = m_g(\lambda_1) + \dots + m_g(\lambda_k) \le m_a(\lambda_1) + \dots + m_a(\lambda_k) \le n.$$
Nella prima disuguaglianza si usa $m_g(\lambda_i) \le m_a(\lambda_i)$ (Teorema 18.9); nella seconda che $\lambda_1, \dots, \lambda_k$ sono radici del polinomio caratteristico, che ha grado $n$ e quindi ha al più $n$ radici contate con molteplicità.
4. $\dim W = n$ se e solo se entrambe le disuguaglianze sono uguaglianze. La prima lo è precisamente quando $m_g(\lambda_i) = m_a(\lambda_i)$ per ogni $i$ (condizione 2); la seconda precisamente quando $p_T(\lambda)$ ha $n$ radici in $\K$, contate con molteplicità (condizione 1). $\square$

I quattro comportamenti possibili, con matrici $2 \times 2$ (dal riepilogo del libro di Martelli, §5.1.7):

| Matrice | Autovalori | Diagonalizzabile su $\R$? | Su $\C$? | Perché |
|---|---|---|---|---|
| $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ | 1 ($m_a = m_g = 2$) | sì | sì | è già diagonale |
| $\begin{pmatrix} -1 & 2 \\ -4 & 5 \end{pmatrix}$ | 1 e 3 | sì | sì | due autovalori distinti |
| $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $\pm i$ | **no** | sì | su $\R$ manca la condizione (1) |
| $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ | 1 ($m_a = 2$, $m_g = 1$) | **no** | **no** | manca la condizione (2) |

> [!METODO] Stabilire se una matrice è diagonalizzabile
> 1. **Polinomio caratteristico scomposto**: $p_A(\lambda) = \det(A - \lambda I_n)$, sviluppato lungo la riga o colonna con più zeri.
> 2. **Condizione (1)**: tutte le radici stanno in $\K$? Su $\R$, un fattore $\lambda^2 + b\lambda + c$ con $b^2 - 4c < 0$ basta per rispondere **no**.
> 3. **Molteplicità algebriche** dal polinomio scomposto. Se sono tutte 1 (autovalori distinti): **sì**, per il Corollario 18.2.
> 4. **Condizione (2)**, solo per gli autovalori con $m_a \ge 2$: $m_g(\lambda) = n - \rk(A - \lambda I_n)$. Se per uno di loro $m_g < m_a$: **no**. Altrimenti: **sì**.
> 5. **Se serve una base di autovettori**: una base di ogni $V_\lambda$ (Gauss su $A - \lambda I_n$), messe insieme. $M$ ha questi vettori in colonna, $D$ i relativi autovalori nello stesso ordine; controllo $AM = MD$.

> [!ESEMPIO] 18.11 · Un autovalore doppio che non dà problemi
> Studiamo la diagonalizzabilità su $\R$ della matrice
> $$A = \begin{pmatrix} 3 & 0 & 0 \\ -4 & -1 & -8 \\ 0 & 0 & 3 \end{pmatrix}.$$
> Il polinomio caratteristico si calcola sviluppando $\det(A - \lambda I_3)$ lungo la prima riga, che ha un solo elemento non nullo, $3 - \lambda$; resta il minore $\begin{pmatrix} -1 - \lambda & -8 \\ 0 & 3 - \lambda \end{pmatrix}$, triangolare:
> $$p_A(\lambda) = (3 - \lambda)(-1 - \lambda)(3 - \lambda),$$
> quindi ha radici $\lambda_1 = 3$ con $m_a(\lambda_1) = 2$ e $\lambda_2 = -1$ con $m_a(\lambda_2) = 1$. Tutte le radici di $p_A(\lambda)$ sono reali, quindi $A$ è diagonalizzabile se e solo se le molteplicità algebriche e geometriche di ciascun autovalore coincidono. Per il secondo autovalore $\lambda_2$ il Teorema 18.9 implica che $m_g(\lambda_2) = m_a(\lambda_2) = 1$, e quindi siamo a posto.
>
> Dobbiamo concentrarci solo sull'autovalore $\lambda_1$, che ha $m_a(\lambda_1) = 2$. Il Teorema 18.9 ci dice che $m_g(\lambda_1)$ può essere 1 oppure 2: nel primo caso $A$ non è diagonalizzabile, nel secondo sì. Facciamo i conti:
> $$m_g(3) = \dim V_3 = \dim \Ker(A - 3I_3) = 3 - \rk(A - 3I_3),$$
> dove nell'ultima uguaglianza si usa il teorema della dimensione (o Rouché–Capelli). Quindi
> $$m_g(3) = 3 - \rk\begin{pmatrix} 0 & 0 & 0 \\ -4 & -4 & -8 \\ 0 & 0 & 0 \end{pmatrix} = 3 - 1 = 2.$$
> Abbiamo scoperto che $m_a(\lambda_1) = m_g(\lambda_1) = 2$, e quindi $A$ è diagonalizzabile.

Le dispense si fermano qui. Con gli autospazi calcolati nella sezione precedente si completa la diagonalizzazione: $V_3 = \Span\big((-1, 1, 0), (-2, 0, 1)\big)$ e $V_{-1} = \Span\big((0, 1, 0)\big)$, quindi
$$M = \begin{pmatrix} -1 & -2 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}, \qquad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & -1 \end{pmatrix}.$$
Controllo: $\det M = 1 \neq 0$, e $AM = MD$ colonna per colonna: $A(-1, 1, 0) = (-3, 3, 0)$, $A(-2, 0, 1) = (-6, 0, 3)$, $A(0, 1, 0) = (0, -1, 0)$.

## Diagonalizzabilità con un parametro (pp. 94–95)

È il tipo di esercizio più frequente nei problemi aperti dell'esame.

> [!ESEMPIO] 18.12 · Una matrice con un parametro $k$
> Studiamo la diagonalizzabilità su $\R$ della matrice
> $$A = \begin{pmatrix} 3 & k + 4 & 1 \\ -1 & -3 & -1 \\ 0 & 0 & 2 \end{pmatrix}$$
> al variare del parametro $k \in \R$.
>
> **Il polinomio caratteristico.** La terza riga di $A - \lambda I_3$ è $(0, 0, 2 - \lambda)$: sviluppando lungo di essa,
> $$p_A(\lambda) = (2 - \lambda)\det\begin{pmatrix} 3 - \lambda & k + 4 \\ -1 & -3 - \lambda \end{pmatrix} = (2 - \lambda)\big((3 - \lambda)(-3 - \lambda) + (k + 4)\big) = (2 - \lambda)(\lambda^2 + k - 5),$$
> perché $(3 - \lambda)(-3 - \lambda) = \lambda^2 - 9$ e $-9 + k + 4 = k - 5$.
>
> **Se $k > 5$**, il fattore $\lambda^2 + k - 5$ non ha radici reali ($\lambda^2 = 5 - k < 0$): quindi $p_A(\lambda)$ ha una radice sola in $\R$ e $A$ non è diagonalizzabile (manca la condizione 1).
>
> **Se $k \le 5$**, il polinomio ha tre radici reali
> $$\lambda_1 = 2, \qquad \lambda_2 = \sqrt{5 - k}, \qquad \lambda_3 = -\sqrt{5 - k}.$$
> Se le tre radici sono distinte, la matrice $A$ è diagonalizzabile (Corollario 18.2). Restano da considerare i casi in cui le tre radici **non** sono distinte:
> - $\lambda_2 = \lambda_3$ quando $\sqrt{5 - k} = 0$, cioè $k = 5$;
> - $\lambda_2 = \lambda_1$ quando $\sqrt{5 - k} = 2$, cioè $5 - k = 4$, $k = 1$ (invece $\lambda_3 = -\sqrt{5 - k}$ non è mai uguale a 2).
>
> Questi due casi vanno analizzati separatamente con le tecniche dell'esempio precedente.
>
> **Se $k = 1$**, gli autovalori sono $\lambda_1 = 2$, $\lambda_2 = 2$ e $\lambda_3 = -2$, e la matrice è
> $$A = \begin{pmatrix} 3 & 5 & 1 \\ -1 & -3 & -1 \\ 0 & 0 & 2 \end{pmatrix}.$$
> Calcoliamo la molteplicità geometrica dell'autovalore 2:
> $$m_g(2) = 3 - \rk\begin{pmatrix} 1 & 5 & 1 \\ -1 & -5 & -1 \\ 0 & 0 & 0 \end{pmatrix} = 3 - 1 = 2$$
> (la seconda riga è l'opposta della prima). Otteniamo $m_g(2) = 2 = m_a(2)$, e quindi $A$ è diagonalizzabile.
>
> **Se $k = 5$**, gli autovalori sono $\lambda_1 = 2$, $\lambda_2 = 0$ e $\lambda_3 = 0$, e la matrice è
> $$A = \begin{pmatrix} 3 & 9 & 1 \\ -1 & -3 & -1 \\ 0 & 0 & 2 \end{pmatrix}.$$
> La molteplicità geometrica dell'autovalore 0 è $m_g(0) = 3 - \rk(A) = 3 - 2 = 1 \neq 2 = m_a(0)$: le prime due colonne sono proporzionali ($(9, -3, 0) = 3 \cdot (3, -1, 0)$) ma la terza non è loro combinazione, quindi il rango è 2. Quindi $A$ non è diagonalizzabile.
>
> Riassumendo, la matrice $A$ è diagonalizzabile se e solo se $k < 5$.

> [!TRAPPOLA] Un valore speciale non vuol dire «non diagonalizzabile»
> In $k = 1$ due autovalori coincidono, eppure la matrice è diagonalizzabile; in $k = 5$ no. Nei valori speciali **si calcola sempre** il rango, non si indovina. E il rango va calcolato **dopo** aver sostituito il valore di $k$.

> [!OLTRE] la stessa matrice su $\C$
> Se si studia la stessa matrice su $\C$ (con $k$ reale), per $k > 5$ le radici $\pm i\sqrt{k - 5}$ esistono e sono distinte tra loro e da 2: la matrice è diagonalizzabile su $\C$. La risposta cambierebbe in «diagonalizzabile su $\C$ se e solo se $k \neq 5$». Per questo il testo di un esercizio dice sempre su quale campo lavorare (negli appelli 2023–2026 compaiono sia $k \in \R$ sia $k \in \C$).

Lo strumento qui sotto calcola autovalori, molteplicità e autospazi. È impostato sull'Esempio 18.12 con $k = 1$: guarda $m_g(2) = 2$. Poi scrivi la matrice con $k = 5$, cioè $3\ 9\ 1;\ -1\ -3\ -1;\ 0\ 0\ 2$, e guarda comparire $m_g(0) = 1 < 2$.

```widget gauss
titolo: Molteplicità e autospazi: l'Esempio 18.12 con $k = 1$
matrice: 3 5 1; -1 -3 -1; 0 0 2
modo: autovalori
modi: autovalori, rango, nucleo
```

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: §5.2.1 «Autovettori con autovalori distinti» (pp. 163–165), §5.2.2 «Autospazio» (pp. 165–166), §5.2.3 «Molteplicità algebrica e geometrica» (pp. 166–167, con la dimostrazione completa del Teorema 18.9), §5.2.4 «Matrici simili» (p. 167: matrici simili hanno anche le stesse molteplicità geometriche), §5.2.5–5.2.6 «Teorema di diagonalizzabilità» ed «Esempi» (pp. 167–169; il parametro lì si chiama $t$). Gli esercizi di fine capitolo (p. 170) sono un buon allenamento.

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste; dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame.** La diagonalizzabilità è **il** problema aperto più frequente: negli appelli 2023–2026 compare come problema 11 in almeno otto appelli su quindici.

| Appello | Che cosa chiede il problema 11 |
|---|---|
| 24/01/2024 | per $k = 1$: autovalori con $m_a$ e $m_g$, diagonalizzabile? |
| 08/02/2024 | $k \in \C$: autovalori al variare di $k$, per quali $k$ è diagonalizzabile, base di autovettori per $k = i$ |
| 10/06/2024 | $k = i$: autovalori con $m_a$, $m_g$; per quali $k \in \C$ è diagonalizzabile |
| 06/09/2024 | $k \in \R$: invertibilità, base di $\Ker A$, per quali $k$ è diagonalizzabile |
| 16/01/2025 | base di $\Ker(A - kI)$, per quali $k$ è diagonalizzabile, $P$ e $D$ per $k = 0$ |
| 03/06/2025 | autovalori $1, k, k^2$; base dell'autospazio di 1; molteplicità; per quali $k$ |
| 10/07/2025 | matrice triangolare con $k$: molteplicità, diagonalizzabilità, $P$ e $D$ per $k = 1$ |
| 03/06/2026 | $k = i$: autovalori, molteplicità, basi degli autospazi; per quali $k \in \C$ |

Nel quiz: l'autospazio di un autovalore dato (24/01/2024 d. 9; 10/06/2024 d. 6; 07/02/2025 d. 9; 05/02/2026 d. 9, gli ultimi tre per endomorfismi di $\R_2[x]$), che cosa segue dal polinomio caratteristico (10/07/2024 d. 8), per quale $k$ una matrice triangolare è diagonalizzabile (02/09/2025 d. 6). Il foglio 3 del tutorato (esercizi 7–10) è tutto su questo.

> [!METODO] Il problema con il parametro, passo per passo
> 1. **$p_A(\lambda)$ in funzione di $k$, scomposto.** Sviluppa lungo la riga o colonna con più zeri; spesso un fattore $(a - \lambda)$ si raccoglie subito.
> 2. **Autovalori in funzione di $k$.** Su $\R$, se un fattore di secondo grado ha discriminante negativo per certi $k$, per quei $k$ la risposta è «non diagonalizzabile».
> 3. **Valori speciali**: risolvi $\lambda_i(k) = \lambda_j(k)$ per ogni coppia di autovalori. Per tutti gli altri $k$ gli autovalori sono distinti e la matrice è diagonalizzabile.
> 4. **Per ogni valore speciale**: sostituisci $k$, trova l'autovalore multiplo e calcola $m_g = n - \rk(A - \lambda I_n)$.
> 5. **Conclusione in una frase**: «$A$ è diagonalizzabile se e solo se $k \neq \dots$» (oppure «$k < \dots$»).
> 6. **Se chiesti**, basi degli autospazi, $P$ (o $M$) e $D$, con il controllo $AP = PD$.

### Tre domande vere, risolte

> [!ESAME] Appello del 24/01/2024, domanda 9
> *La matrice $A = \begin{pmatrix} 3 & -4 & 4 \\ 2 & -3 & 2 \\ 0 & 0 & -1 \end{pmatrix}$ ha autovalore $\lambda = -1$. Qual è l'autospazio?* Tra le risposte: $\Span\big((2, 1, -1), (2, 1, 0)\big)$, $\Span\big((2, 1, -1)\big)$, $\Span\big((1, 0, -1), (1, 1, 0)\big)$ e altre.
>
> Soluzione. $A + I_3 = \begin{pmatrix} 4 & -4 & 4 \\ 2 & -2 & 2 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi $V_{-1}$ ha dimensione $3 - 1 = 2$: la risposta è lo Span di **due** vettori indipendenti che soddisfano $x - y + z = 0$. $(1, 0, -1)$: $1 - 0 - 1 = 0$, sì; $(1, 1, 0)$: $1 - 1 + 0 = 0$, sì. Invece $(2, 1, 0)$ dà $2 - 1 = 1 \neq 0$. La risposta giusta è $\Span\big((1, 0, -1), (1, 1, 0)\big)$.

> [!ESAME] Appello del 10/07/2024, domanda 8
> *Sia $A$ una matrice quadrata con polinomio caratteristico $t(t - 1)^2(t - 2)$. Quale delle seguenti non è automaticamente verificata?* ($A$ non è invertibile; $A$ ha autovalori $0, 1, 2$; $A$ ha un autovalore con molteplicità algebrica 2; $A$ ammette una base di autovettori; $A$ è $4 \times 4$.)
>
> Soluzione. Dal polinomio: grado 4, quindi $A$ è $4 \times 4$; radici $0, 1, 2$ con $m_a(1) = 2$; $0$ è autovalore, quindi $\det A = 0$ e $A$ non è invertibile. Ma per l'autovalore 1 può essere $m_g(1) = 1 < 2$, e allora non c'è una base di autovettori: **«$A$ ammette una base di autovettori» non è automatica**.

> [!ESAME] Appello del 02/09/2025, domanda 6
> *Per quale valore di $k$ la matrice $\begin{pmatrix} 4 & k - 1 & k - 3 \\ 0 & 4 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ è diagonalizzabile?* (Risposte: $k = 1, 2, 4, 0, 3$.)
>
> Soluzione. Triangolare: autovalori $4$ ($m_a = 2$) e $2$ (semplice). Serve $m_g(4) = 2$, cioè $\rk(A - 4I_3) = 1$, con $A - 4I_3 = \begin{pmatrix} 0 & k - 1 & k - 3 \\ 0 & 0 & 1 \\ 0 & 0 & -2 \end{pmatrix}$. Se $k \neq 1$ le prime due righe sono indipendenti (la prima ha un elemento non nullo nella seconda colonna, la seconda no) e il rango è 2. Se $k = 1$ la prima riga è $(0, 0, -2)$, proporzionale alle altre due: rango 1. Risposta: $k = 1$.

### Errori da evitare

- Concludere «non diagonalizzabile» appena due autovalori coincidono: bisogna calcolare $m_g$.
- Calcolare $m_g$ per gli autovalori semplici (tempo perso: vale 1) e dimenticarlo per quelli multipli.
- Calcolare il rango di $A - \lambda I$ con $k$ ancora generico invece di sostituire il valore speciale.
- Scambiare le condizioni del teorema, o dimenticare la (1) su $\R$: con un fattore $\lambda^2 + 1$ la matrice non è diagonalizzabile su $\R$, anche se tutto il resto va bene.
- Scrivere un autospazio con il numero sbagliato di generatori: $\dim V_\lambda = n - \rk(A - \lambda I)$ dice quanti vettori servono.
- Nei problemi su $\C$, sbagliare i conti con $i$: ricorda $i^2 = -1$ e $\frac 1i = -i$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: «autovalori distinti $\Rightarrow$ autovettori indipendenti; $n$ distinti $\Rightarrow$ diagonalizzabile»; «$V_\lambda = \Ker(A - \lambda I)$, $m_g = n - \rk(A - \lambda I)$»; «$1 \le m_g \le m_a$»; «diagonalizzabile $\iff$ (1) $n$ radici in $\K$ e (2) $m_a = m_g$ per ogni $\lambda$»; la ricetta del problema con parametro in sei righe.

## Quiz

```quiz
D: La matrice $A = \begin{pmatrix} 1 & 2 & -2 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ ha autovalore $\lambda = 3$. Qual è l'autospazio $V_3$?
+ $\Span\big((1, 1, 0), (-1, 0, 1)\big)$
- $\Span\big((1, 1, 0)\big)$
- $\Span\big((1, 0, 0)\big)$
- $\Span\big((1, 1, 0), (1, 0, 1)\big)$
- $\Span\big((1, 0, 0), (0, 1, 1)\big)$
= $A - 3I_3 = \begin{pmatrix} -2 & 2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi $\dim V_3 = 2$ e l'equazione è $x = y - z$. $(1, 1, 0)$ e $(-1, 0, 1)$ la soddisfano e sono indipendenti. Una retta non basta; $(1, 0, 1)$ e $(1, 0, 0)$ non soddisfano $x = y - z$ ($(1, 0, 0)$ è un autovettore, ma di autovalore 1; $(1, 0, 1)$ non è un autovettore). Simile all'appello del 24/01/2024, domanda 9.

D: L'endomorfismo $T : \R_2[x] \to \R_2[x]$, $T(a + bx + cx^2) = (a + c) + 2bx + (a + c)x^2$, ha autovalore $2$. Qual è l'autospazio $V_2$?
+ $\Span(x,\ 1 + x^2)$
- $\Span(1 + x^2)$
- $\Span(x,\ 1 - x^2)$
- $\Span(1,\ x^2)$
- $\Span(x)$
= Nella base $\{1, x, x^2\}$ la matrice è $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}$ e $A - 2I_3 = \begin{pmatrix} -1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & -1 \end{pmatrix}$: equazione $a = c$, con $b$ libero. Soluzioni: $(0, 1, 0) \to x$ e $(1, 0, 1) \to 1 + x^2$. Controllo: $T(x) = 2x$ e $T(1 + x^2) = 2 + 2x^2$. Invece $T(1 - x^2) = 0$: autovalore 0. Simile agli appelli del 10/06/2024 (domanda 6), del 07/02/2025 (domanda 9) e del 05/02/2026 (domanda 9).

D: Una matrice $A$ ha polinomio caratteristico $p_A(\lambda) = (\lambda - 2)^2(\lambda + 1)(\lambda - 3)$. Quale affermazione **non** è necessariamente vera?
+ $A$ è diagonalizzabile.
- $A$ è una matrice $4 \times 4$.
- $A$ è invertibile.
- $A$ ha un autovalore con molteplicità algebrica 2.
- $\det A = -12$.
= Il grado è 4, quindi $A$ è $4 \times 4$; $\det A = p_A(0) = 4 \cdot 1 \cdot (-3) = -12 \neq 0$, quindi $A$ è invertibile; $m_a(2) = 2$. Ma $m_g(2)$ può valere 1: per esempio con un blocco $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ sulla diagonale la matrice non è diagonalizzabile. Simile all'appello del 10/07/2024, domanda 8.

D: Per quale valore di $k$ la matrice $\begin{pmatrix} 3 & k - 2 & k \\ 0 & 3 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ è diagonalizzabile?
+ $k = 2$
- $k = 0$
- $k = 3$
- $k = 1$
- $k = -2$
= Autovalori $3$ ($m_a = 2$) e $1$. Serve $\rk(A - 3I_3) = 1$ con $A - 3I_3 = \begin{pmatrix} 0 & k - 2 & k \\ 0 & 0 & 1 \\ 0 & 0 & -2 \end{pmatrix}$: se $k \neq 2$ le prime due righe sono indipendenti e il rango è 2 ($m_g(3) = 1$); se $k = 2$ tutte le righe sono proporzionali a $(0, 0, 1)$, rango 1, $m_g(3) = 2$. Simile all'appello del 02/09/2025, domanda 6.

D: Per $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix}$, le molteplicità dell'autovalore 2 sono:
+ $m_a(2) = 3$, $m_g(2) = 2$
- $m_a(2) = 3$, $m_g(2) = 3$
- $m_a(2) = 3$, $m_g(2) = 1$
- $m_a(2) = 2$, $m_g(2) = 2$
- $m_a(2) = 1$, $m_g(2) = 1$
= $p_A(\lambda) = (2 - \lambda)^3$, quindi $m_a(2) = 3$. $A - 2I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi $m_g(2) = 3 - 1 = 2$. Poiché $2 < 3$, $A$ non è diagonalizzabile.

D: Sia $A = \begin{pmatrix} 5 & 1 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 5 \end{pmatrix}$. Quanto vale $\dim \Ker(A - 5I_3)$?
N: 2
= $A - 5I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi $\dim \Ker = 3 - 1 = 2$ (è $m_g(5)$; una base è $e_1, e_3$). Simile al punto (1) del problema 11 dell'appello del 16/01/2025 (una base di $\Ker(A - kI)$).

D: Quale di queste affermazioni è vera?
+ Se $A \in M(3, \R)$ ha tre autovalori reali distinti, allora $A$ è diagonalizzabile.
- Se $A \in M(n, \R)$ è diagonalizzabile, allora ha $n$ autovalori distinti.
- La molteplicità geometrica di un autovalore può essere 0.
- Può capitare che $m_g(\lambda) > m_a(\lambda)$.
- Gli autospazi di un endomorfismo $T : V \to V$ hanno sempre somma uguale a $V$.
= La prima è il Corollario 18.2. Controesempi alle altre: $I_n$ è diagonale con un solo autovalore; $m_g(\lambda) \ge 1$ perché un autovalore ha almeno un autovettore, e $m_g \le m_a$ per il Teorema 18.9; per $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ l'unico autospazio è una retta di $\R^2$.

D: Quale di queste matrici è diagonalizzabile su $\C$ ma **non** su $\R$?
+ $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$
= $\lambda^2 + 1$ ha radici $\pm i$ distinte: diagonalizzabile su $\C$, e su $\R$ manca la condizione (1). La seconda e la quarta hanno un autovalore doppio con $m_g = 1$ (non diagonalizzabili su nessun campo); la terza (autovalori 1, 2) e la quinta (autovalori 1, 3) hanno due autovalori reali distinti e lo sono su entrambi.

D: Sia $A = \begin{pmatrix} k & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}$ con $k \in \C$. Per quali $k$ la matrice è diagonalizzabile su $\C$?
+ Per ogni $k \in \C$.
- Per ogni $k \neq \pm i$.
- Per nessun $k$.
- Solo per $k \in \R$.
- Solo per $k = 0$.
= $p_A(\lambda) = (k - \lambda)(\lambda^2 + 1)$: autovalori $k$, $i$, $-i$. Se $k \neq \pm i$ sono distinti. Se $k = i$: $m_a(i) = 2$ e $A - iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & -i & -1 \\ 0 & 1 & -i \end{pmatrix}$ ha rango 1 (la seconda riga è la terza moltiplicata per $-i$), quindi $m_g(i) = 2$: diagonalizzabile; lo stesso per $k = -i$. Simile ai problemi 11 degli appelli del 10/06/2024 e del 03/06/2026, dove però per $k = i$ il rango era 2 e la matrice non era diagonalizzabile: nei valori speciali bisogna sempre calcolare.

D: Sia $A \in M(4, \R)$ con $\rk(A - 3I_4) = 1$. Quale affermazione è necessariamente vera?
+ $3$ è un autovalore con $m_a(3) \ge 3$.
- $A$ è diagonalizzabile.
- $A$ non è invertibile.
- $m_g(3) = 1$.
- $3$ non è un autovalore.
= $m_g(3) = 4 - 1 = 3$, e $m_a(3) \ge m_g(3) = 3$ (Teorema 18.9). Non segue altro: $\mathrm{diag}(3, 3, 3, 5)$ è diagonalizzabile e invertibile; invece $3I_4$ con un 1 al posto $(3, 4)$ (cioè con il blocco $\begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$ negli ultimi due posti della diagonale) ha ancora $\rk(A - 3I_4) = 1$, ma $m_a(3) = 4 > 3 = m_g(3)$: non diagonalizzabile.
```

## Esercizi

::: esercizio medio Esercizio 18.13 delle dispense: autospazi e base di autovettori
Consideriamo la matrice $A = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.
(1) Calcolare il polinomio caratteristico di $A$ e determinare gli autovalori.
(2) Trovare gli autospazi corrispondenti.
(3) Calcolare la molteplicità algebrica e geometrica di ogni autovalore.
(4) Stabilire se $A$ è diagonalizzabile.
(5) In caso affermativo, trovare una base di $\R^3$ formata da autovettori.
::: soluzione
(1) $A$ è triangolare superiore, quindi $p_A(\lambda) = (2 - \lambda)(3 - \lambda)^2$. Autovalori: $2$ e $3$.

(2) $V_2 = \Ker(A - 2I_3)$ con $A - 2I_3 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$: dalla terza riga $z = 0$, dalla seconda $y = 0$; $x$ libera. $V_2 = \Span\big((1, 0, 0)\big)$.

$V_3 = \Ker(A - 3I_3)$ con $A - 3I_3 = \begin{pmatrix} -1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$: una sola equazione $-x + y + z = 0$, cioè $x = y + z$. Con $(y, z) = (1, 0)$ e $(0, 1)$: $V_3 = \Span\big((1, 1, 0), (1, 0, 1)\big)$.

(3) $m_a(2) = 1 = m_g(2)$; $m_a(3) = 2$ e $m_g(3) = \dim V_3 = 3 - \rk(A - 3I_3) = 3 - 1 = 2$.

(4) Tutte le radici sono reali e $m_a = m_g$ per entrambi gli autovalori: per il Teorema 18.10 $A$ è diagonalizzabile.

(5) $\mathcal B = \{(1, 0, 0), (1, 1, 0), (1, 0, 1)\}$. Controllo: $A(1, 1, 0) = (3, 3, 0)$ e $A(1, 0, 1) = (3, 0, 3)$. Con $M$ = questi vettori in colonna ($\det M = 1$) e $D = \mathrm{diag}(2, 3, 3)$ vale $AM = MD$.
:::

::: esercizio medio Esercizio 18.14 delle dispense: stesso polinomio, comportamento diverso
Consideriamo le due matrici $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$.
(1) Verificare che $A$ e $B$ hanno lo stesso polinomio caratteristico.
(2) Calcolare la molteplicità geometrica dell'autovalore 1 per entrambe le matrici.
(3) Stabilire quale delle due matrici è diagonalizzabile.
::: soluzione
(1) Entrambe sono triangolari con diagonale $1, 1, 2$: $p_A(\lambda) = p_B(\lambda) = (1 - \lambda)^2(2 - \lambda)$.

(2) $A - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ ha rango 1: $m_g^A(1) = 3 - 1 = 2$. $B - I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ ha rango 2: $m_g^B(1) = 3 - 2 = 1$.

(3) In entrambe $m_a(1) = 2$. Per $A$: $m_g = 2 = m_a$ ($A$ è già diagonale). Per $B$: $m_g = 1 < 2$, quindi $B$ **non** è diagonalizzabile.

Conseguenza: $A$ e $B$ **non sono simili**, pur avendo lo stesso polinomio caratteristico (quindi stessi autovalori, traccia e determinante). Se lo fossero, $B$ sarebbe simile a una matrice diagonale, cioè diagonalizzabile. Il polinomio caratteristico non basta a riconoscere le matrici simili.
:::

::: esercizio base Un autovalore doppio con una sola retta di autovettori
Stabilisci se $A = \begin{pmatrix} 5 & -1 \\ 1 & 3 \end{pmatrix}$ è diagonalizzabile.
::: soluzione
$\tr A = 8$, $\det A = 15 + 1 = 16$, quindi $p_A(\lambda) = \lambda^2 - 8\lambda + 16 = (\lambda - 4)^2$: un solo autovalore, $4$, con $m_a(4) = 2$.

$A - 4I_2 = \begin{pmatrix} 1 & -1 \\ 1 & -1 \end{pmatrix}$ ha rango 1 (righe uguali), quindi $m_g(4) = 2 - 1 = 1 < 2$. Non è diagonalizzabile. Gli autovettori sono i multipli non nulli di $(1, 1)$.

Un'altra via: se fosse diagonalizzabile con l'unico autovalore 4, sarebbe simile a $4I_2$, e quindi uguale a $4I_2$ (esercizio 8). Ma $A \neq 4I_2$.
:::

::: esercizio medio Un autovalore doppio che va bene: trova $M$ e $D$
Sia $A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 3 & 0 \\ -2 & 0 & 3 \end{pmatrix}$. Mostra che è diagonalizzabile e trova $M$ e $D$ con $D = M^{-1}AM$.
::: soluzione
$A$ è triangolare inferiore: $p_A(\lambda) = (1 - \lambda)(3 - \lambda)^2$. Autovalori $1$ ($m_a = 1$) e $3$ ($m_a = 2$).

$A - 3I_3 = \begin{pmatrix} -2 & 0 & 0 \\ 2 & 0 & 0 \\ -2 & 0 & 0 \end{pmatrix}$: tutte le righe sono multiple di $(1, 0, 0)$, rango 1, quindi $m_g(3) = 2 = m_a(3)$. $A$ è diagonalizzabile. L'unica equazione è $x = 0$: $V_3 = \Span(e_2, e_3)$.

$A - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 2 & 2 & 0 \\ -2 & 0 & 2 \end{pmatrix}$: $x + y = 0$ e $-x + z = 0$, cioè $y = -x$, $z = x$. $V_1 = \Span\big((1, -1, 1)\big)$.

$$M = \begin{pmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$
$\det M = 1$. Controllo $AM = MD$: $A(1, -1, 1) = (1,\ 2 - 3,\ -2 + 3) = (1, -1, 1)$, $Ae_2 = (0, 3, 0)$, $Ae_3 = (0, 0, 3)$.
:::

::: esercizio medio Un parametro fuori dalla diagonale (foglio 3 del tutorato, esercizio 7)
Determina per quali $k \in \R$ la matrice $A = \begin{pmatrix} 1 & 1 & k \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$ è diagonalizzabile.
::: soluzione
Sviluppo $\det(A - \lambda I_3)$ lungo la prima colonna $(1 - \lambda, 0, 0)$:
$$p_A(\lambda) = (1 - \lambda)\det\begin{pmatrix} 1 - \lambda & 0 \\ 1 & 2 - \lambda \end{pmatrix} = (1 - \lambda)^2(2 - \lambda).$$
Gli autovalori non dipendono da $k$: $1$ con $m_a = 2$ e $2$ semplice. Tutto si decide su $m_g(1)$:
$$A - I_3 = \begin{pmatrix} 0 & 1 & k \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}.$$
Le righe non nulle sono $(0, 1, k)$ e $(0, 1, 1)$: sono proporzionali (anzi uguali) solo se $k = 1$. Quindi $\rk(A - I_3) = 1$ se $k = 1$ e $= 2$ se $k \neq 1$.

- $k = 1$: $m_g(1) = 2 = m_a(1)$, **diagonalizzabile**. ($V_1 = \Span\big((1, 0, 0), (0, -1, 1)\big)$, $V_2 = \Span\big((1, 0, 1)\big)$.)
- $k \neq 1$: $m_g(1) = 1 < 2$, non diagonalizzabile.

$A$ è diagonalizzabile se e solo se $k = 1$.
:::

::: esercizio medio La trasposizione come endomorfismo (foglio 3 del tutorato, esercizio 8.1)
Sia $T : M(2, \R) \to M(2, \R)$, $T(A) = {}^tA$. Trova autovalori e autospazi e stabilisci se $T$ è diagonalizzabile.
::: soluzione
Nella base $E_{11}, E_{12}, E_{21}, E_{22}$ (un 1 al posto indicato, zeri altrove): $T(E_{11}) = E_{11}$, $T(E_{12}) = E_{21}$, $T(E_{21}) = E_{12}$, $T(E_{22}) = E_{22}$, quindi
$$[T] = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}, \qquad p_T(\lambda) = (1 - \lambda)^2(\lambda^2 - 1) = (\lambda - 1)^3(\lambda + 1)$$
(il blocco centrale $\begin{pmatrix} -\lambda & 1 \\ 1 & -\lambda \end{pmatrix}$ ha determinante $\lambda^2 - 1$).

Senza conti, dall'equazione ${}^tA = \lambda A$:
- $\lambda = 1$: ${}^tA = A$, le matrici **simmetriche**. $V_1 = \Span\left(\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right)$, dimensione 3.
- $\lambda = -1$: ${}^tA = -A$, le matrici **antisimmetriche**. $V_{-1} = \Span\left(\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\right)$, dimensione 1.

$m_g(1) = 3 = m_a(1)$ e $m_g(-1) = 1 = m_a(-1)$: $T$ è diagonalizzabile, e nella base formata da queste quattro matrici $[T] = \mathrm{diag}(1, 1, 1, -1)$ (è l'Esempio 5.1.14 del libro di Martelli). In particolare ogni matrice $2 \times 2$ è in modo unico somma di una simmetrica e di una antisimmetrica: $M(2, \R) = V_1 \oplus V_{-1}$.
:::

::: esercizio medio Un endomorfismo di $\R_2[x]$ con autovalori complessi (foglio 3 del tutorato, esercizio 8.2)
Sia $T : \R_2[x] \to \R_2[x]$, $T(p) = p(0) + p(1)\,x + p(-1)\,x^2$. Trova gli autovalori reali e i relativi autovettori. $T$ è diagonalizzabile?
::: soluzione
Nella base $\{1, x, x^2\}$: $T(1) = 1 + x + x^2$, $T(x) = 0 + x - x^2$, $T(x^2) = 0 + x + x^2$, quindi
$$[T] = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & -1 & 1 \end{pmatrix}.$$
Sviluppo lungo la prima riga $(1 - \lambda, 0, 0)$:
$$p_T(\lambda) = (1 - \lambda)\det\begin{pmatrix} 1 - \lambda & 1 \\ -1 & 1 - \lambda \end{pmatrix} = (1 - \lambda)\big((1 - \lambda)^2 + 1\big).$$
Il secondo fattore non si annulla mai su $\R$ ($(1 - \lambda)^2 + 1 \ge 1$): le altre radici sono $1 \pm i$. Unico autovalore reale: $1$.

$[T] - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 0 & 1 \\ 1 & -1 & 0 \end{pmatrix}$: $x + z = 0$ e $x - y = 0$ (qui $x, y, z$ sono le coordinate), quindi $(1, 1, -1)$: il polinomio $1 + x - x^2$. Controllo: con $p = 1 + x - x^2$, $p(0) = 1$, $p(1) = 1$, $p(-1) = 1 - 1 - 1 = -1$, e $T(p) = 1 + x - x^2 = p$.

$T$ **non** è diagonalizzabile su $\R$: manca la condizione (1) del Teorema 18.10.
:::

::: esercizio difficile Un solo autovalore e diagonalizzabile: allora è $\lambda I$
(a) Dimostra che se $A \in M(n, \K)$ ha un solo autovalore $\lambda$ ed è diagonalizzabile, allora $A = \lambda I_n$. (b) Deduci in una riga che $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ non è diagonalizzabile.
::: soluzione
(a) Se $A$ è diagonalizzabile, $M^{-1}AM = D$ con $D$ diagonale, e sulla diagonale di $D$ ci sono gli autovalori, quindi solo $\lambda$: $D = \lambda I_n$. Allora
$$A = MDM^{-1} = M(\lambda I_n)M^{-1} = \lambda MM^{-1} = \lambda I_n.$$
(Un altro modo: $m_g(\lambda) = m_a(\lambda) = n$, quindi $V_\lambda = V$ e $Av = \lambda v$ per ogni $v$.)

(b) Ha il solo autovalore 1 e non è $I_2$: se fosse diagonalizzabile sarebbe $I_2$.
:::

::: esercizio difficile Due autospazi hanno intersezione nulla
Siano $\lambda \neq \mu$ due autovalori di $T$. (a) Dimostra direttamente che $V_\lambda \cap V_\mu = \{0\}$. (b) Deduci che $V_\lambda$ e $V_\mu$ sono in somma diretta. (c) Perché con tre autospazi non basta controllare le intersezioni a due a due?
::: soluzione
(a) Se $v \in V_\lambda \cap V_\mu$, allora $T(v) = \lambda v$ e $T(v) = \mu v$. Sottraendo, $(\lambda - \mu)v = 0$, e poiché $\lambda - \mu \neq 0$ si ha $v = 0$.

(b) Se $v_1 + v_2 = 0$ con $v_1 \in V_\lambda$ e $v_2 \in V_\mu$, allora $v_1 = -v_2$ sta in entrambi gli autospazi (un autospazio contiene gli opposti dei suoi vettori), quindi $v_1 = 0$ per il punto (a), e poi $v_2 = 0$. È la forma equivalente della Definizione 18.4.

(c) Per tre sottospazi le intersezioni a due a due possono essere nulle senza che la somma sia diretta: le rette $\Span(e_1)$, $\Span(e_2)$, $\Span(e_1 + e_2)$ di $\R^3$ si intersecano a due a due solo in $0$, ma $e_1 + e_2 - (e_1 + e_2) = 0$. Per gli autospazi la somma è comunque diretta, ma serve la Proposizione 18.1 (dimostrazione per induzione), non solo il punto (a).
:::

::: esercizio esame Come all'esame: un parametro reale
Si consideri la matrice $A = \begin{pmatrix} k & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$ con $k \in \R$.
(1) Calcolare gli autovalori di $A$ al variare di $k$.
(2) Determinare per quali valori di $k$ la matrice è diagonalizzabile.
(3) Per $k = 0$, trovare $M$ invertibile e $D$ diagonale con $D = M^{-1}AM$.
::: soluzione
(1) Sviluppo $\det(A - \lambda I_3)$ lungo la prima colonna $(k - \lambda, 0, 0)$:
$$p_A(\lambda) = (k - \lambda)\det\begin{pmatrix} 1 - \lambda & 0 \\ 1 & 2 - \lambda \end{pmatrix} = (k - \lambda)(1 - \lambda)(2 - \lambda).$$
Autovalori: $k$, $1$, $2$.

(2) Sono tutti reali. Se $k \neq 1$ e $k \neq 2$ sono distinti: diagonalizzabile. Valori speciali:
- $k = 1$: autovalore $1$ con $m_a = 2$. $A - I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ ha le righe non nulle $(0, 1, 0)$ e $(0, 1, 1)$, indipendenti: rango 2, $m_g(1) = 1 < 2$. **Non** diagonalizzabile.
- $k = 2$: autovalore $2$ con $m_a = 2$. $A - 2I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ ha tutte le righe multiple di $(0, 1, 0)$: rango 1, $m_g(2) = 2 = m_a(2)$. Diagonalizzabile.

Conclusione: $A$ è diagonalizzabile se e solo se $k \neq 1$.

(3) Con $k = 0$ gli autovalori sono $0, 1, 2$.
- $\lambda = 0$: $A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$: $y = 0$, poi $2z = 0$; $x$ libera. Autovettore $(1, 0, 0)$.
- $\lambda = 1$: $A - I_3 = \begin{pmatrix} -1 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$: $y = x$ e $z = -y$. Autovettore $(1, 1, -1)$.
- $\lambda = 2$: $A - 2I_3 = \begin{pmatrix} -2 & 1 & 0 \\ 0 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}$: $y = 0$, poi $x = 0$; $z$ libera. Autovettore $(0, 0, 1)$.

$$M = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & -1 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}.$$
$\det M = 1$ (triangolare a blocchi). Controllo $AM = MD$: $A(1, 0, 0) = (0, 0, 0)$, $A(1, 1, -1) = (1, 1, -1)$, $A(0, 0, 1) = (0, 0, 2)$.
:::

::: esercizio esame Come all'esame: un parametro complesso
Si consideri $A = \begin{pmatrix} k & 0 & 0 \\ 1 & 0 & -4 \\ 0 & 1 & 0 \end{pmatrix} \in M(3, \C)$ con $k \in \C$.
(1) Posto $k = 2i$, calcolare gli autovalori con molteplicità algebrica e geometrica e una base di ogni autospazio. $A$ è diagonalizzabile?
(2) Determinare per quali $k \in \C$ la matrice è diagonalizzabile su $\C$. E su $\R$, per $k$ reale?
::: soluzione
Polinomio caratteristico, sviluppando lungo la prima riga $(k - \lambda, 0, 0)$:
$$p_A(\lambda) = (k - \lambda)\det\begin{pmatrix} -\lambda & -4 \\ 1 & -\lambda \end{pmatrix} = (k - \lambda)(\lambda^2 + 4).$$
Da $\lambda^2 = -4$: $\lambda = \pm 2i$. Autovalori: $k$, $2i$, $-2i$.

(1) Con $k = 2i$: $\lambda = 2i$ con $m_a = 2$, e $\lambda = -2i$ con $m_a = 1$ (quindi $m_g(-2i) = 1$).
$$A - 2iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & -2i & -4 \\ 0 & 1 & -2i \end{pmatrix}.$$
Le righe $(1, -2i, -4)$ e $(0, 1, -2i)$ sono indipendenti (la seconda ha 0 al primo posto, la prima no): rango 2, $m_g(2i) = 3 - 2 = 1 < 2$. **Non** diagonalizzabile.

Basi: dalla terza riga $y = 2iz$; dalla seconda $x = 2iy + 4z = 2i \cdot 2iz + 4z = -4z + 4z = 0$. Con $z = 1$: $V_{2i} = \Span\big((0, 2i, 1)\big)$. Per $-2i$: $A + 2iI_3 = \begin{pmatrix} 4i & 0 & 0 \\ 1 & 2i & -4 \\ 0 & 1 & 2i \end{pmatrix}$ dà $x = 0$, $y = -2iz$ (e la seconda riga torna: $2i \cdot (-2i) - 4 = 4 - 4 = 0$). $V_{-2i} = \Span\big((0, -2i, 1)\big)$. Controllo: $A(0, 2i, 1) = (0,\ -4,\ 2i) = 2i\,(0, 2i, 1)$.

(2) Su $\C$ la condizione (1) vale sempre. Se $k \neq \pm 2i$ gli autovalori sono distinti: diagonalizzabile. Per $k = 2i$ no (punto 1); per $k = -2i$, con lo stesso conto, $A + 2iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 2i & -4 \\ 0 & 1 & 2i \end{pmatrix}$ ha rango 2 e $m_g(-2i) = 1 < 2$: no. Quindi: diagonalizzabile su $\C$ se e solo se $k \neq \pm 2i$.

Su $\R$ (con $k$ reale) **mai**: il fattore $\lambda^2 + 4$ non ha radici reali. Confronta con la domanda 9 del quiz: lì, per il valore speciale, la matrice era diagonalizzabile. La differenza che conta è l'1 al posto $(2, 1)$, che qui c'è e nel quiz no: senza di lui la seconda riga di $A - 2iI_3$ sarebbe $(0, -2i, -4) = -2i \cdot (0, 1, -2i)$, il rango scenderebbe a 1 e $m_g(2i)$ salirebbe a 2.
:::

## Domande di ripasso

::: domanda Perché autovettori con autovalori distinti sono indipendenti?
Da una combinazione nulla $\sum \alpha_i v_i = 0$ si applica $T$ e si sottrae $\lambda_k$ volte la combinazione: sparisce $v_k$ e restano coefficienti $\alpha_i(\lambda_i - \lambda_k)$ su $k - 1$ autovettori. Per induzione sono nulli, e poiché $\lambda_i \neq \lambda_k$ si ottiene $\alpha_i = 0$ (Proposizione 18.1).
:::

::: domanda Che cosa dice il Corollario 18.2, e vale il viceversa?
Se $p_T$ ha $n$ radici distinte in $\K$, $T$ è diagonalizzabile. Il viceversa è falso: $I_n$ è diagonale e ha un solo autovalore.
:::

::: domanda Che cos'è l'autospazio $V_\lambda$? Perché è un sottospazio?
$V_\lambda = \{v \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$: gli autovettori di $\lambda$ più il vettore nullo. È il nucleo di un'applicazione lineare, quindi un sottospazio.
:::

::: domanda Quando una somma di sottospazi si dice diretta?
Quando ogni vettore della somma si scrive in un solo modo come $v_1 + \dots + v_k$ con $v_i \in V_i$; equivalentemente, quando $v_1 + \dots + v_k = 0$ implica $v_1 = \dots = v_k = 0$.
:::

::: domanda Che legame c'è tra autospazi e diagonalizzabilità?
Gli autospazi sono sempre in somma diretta (Proposizione 18.5), e $T$ è diagonalizzabile se e solo se la loro somma è $V$, cioè se le loro dimensioni sommano a $n$ (Corollario 18.6).
:::

::: domanda Che differenza c'è tra molteplicità algebrica e geometrica? Come si calcolano?
$m_a(\lambda)$ è la molteplicità di $\lambda$ come radice di $p_T$ (si legge dal polinomio scomposto); $m_g(\lambda) = \dim V_\lambda = n - \rk(A - \lambda I_n)$.
:::

::: domanda Che cosa dice il Teorema 18.9? Che conseguenza pratica ha?
$1 \le m_g(\lambda) \le m_a(\lambda)$. Quindi per un autovalore semplice ($m_a = 1$) si ha subito $m_g = 1$: il rango va calcolato solo per gli autovalori multipli.
:::

::: domanda Enuncia il teorema di diagonalizzabilità.
$T : V \to V$, con $\dim V = n$, è diagonalizzabile se e solo se (1) $p_T$ ha $n$ radici in $\K$ contate con molteplicità e (2) $m_a(\lambda) = m_g(\lambda)$ per ogni autovalore $\lambda$.
:::

::: domanda Perché la stessa matrice può essere diagonalizzabile su $\C$ e non su $\R$?
Perché la condizione (1) dipende dal campo: $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ ha $p(\lambda) = \lambda^2 + 1$, senza radici reali ma con due radici complesse distinte $\pm i$.
:::

::: domanda Come si affronta una matrice con un parametro $k$?
Si calcola $p_A$ scomposto in funzione di $k$, si trovano gli autovalori, si individuano i $k$ in cui due autovalori coincidono (e, su $\R$, quelli in cui mancano radici reali). Per gli altri $k$ la matrice è diagonalizzabile; nei valori speciali si sostituisce $k$ e si calcola $m_g = n - \rk(A - \lambda I_n)$.
:::

::: domanda Nell'Esempio 18.12, perché per $k = 1$ la matrice è diagonalizzabile e per $k = 5$ no?
Per $k = 1$ l'autovalore 2 è doppio e $\rk(A - 2I_3) = 1$, quindi $m_g(2) = 2 = m_a(2)$. Per $k = 5$ l'autovalore 0 è doppio ma $\rk(A) = 2$, quindi $m_g(0) = 1 < 2$.
:::

::: domanda Due matrici con lo stesso polinomio caratteristico sono simili?
Non sempre: $\mathrm{diag}(1, 1, 2)$ e $\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ hanno lo stesso polinomio, ma la prima è diagonalizzabile e la seconda no (Esercizio 18.14).
:::

## Glossario

```glossario
Autovettori indipendenti | Autovettori con autovalori distinti sono sempre linearmente indipendenti (Proposizione 18.1).
Criterio degli autovalori distinti | Se $p_T$ ha $n$ radici distinte in $\K$, $T$ è diagonalizzabile (Corollario 18.2); non vale il viceversa.
Autospazio $V_\lambda$ | $\{v \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$: autovettori di $\lambda$ più lo zero (Definizione 18.3).
Somma di sottospazi | $V_1 + \dots + V_k$: tutti i vettori $v_1 + \dots + v_k$ con $v_i \in V_i$.
Somma diretta $\oplus$ | Somma in cui ogni vettore si scrive in modo unico; equivalentemente $v_1 + \dots + v_k = 0$ solo con tutti gli addendi nulli (Definizione 18.4).
Molteplicità di una radice | Il massimo $k$ con $(x - a)^k$ che divide il polinomio (Definizione 4.3).
Molteplicità algebrica $m_a(\lambda)$ | Molteplicità di $\lambda$ come radice del polinomio caratteristico.
Molteplicità geometrica $m_g(\lambda)$ | $\dim V_\lambda = n - \rk(A - \lambda I_n)$.
Autovalore semplice | Autovalore con $m_a = 1$; allora anche $m_g = 1$.
Disuguaglianze delle molteplicità | $1 \le m_g(\lambda) \le m_a(\lambda)$ (Teorema 18.9).
Teorema di diagonalizzabilità | Diagonalizzabile $\iff$ $n$ radici in $\K$ con molteplicità e $m_a = m_g$ per ogni autovalore (Teorema 18.10).
Taglio (shear) | $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: un autovalore doppio con una sola retta di autovettori; non diagonalizzabile.
Valore speciale del parametro | Valore di $k$ in cui due autovalori coincidono: lì si decide calcolando un rango.
Campo degli scalari | $\R$ o $\C$: la diagonalizzabilità dipende dal campo, perché su $\R$ possono mancare le radici.
Base di autovettori | Unione delle basi degli autospazi; esiste se e solo se $T$ è diagonalizzabile.
```

## Checklist

```checklist
- So dimostrare che due autovettori con autovalori distinti sono indipendenti, e so enunciare il caso generale.
- So usare il criterio «$n$ autovalori distinti $\Rightarrow$ diagonalizzabile» e so che il viceversa è falso.
- So definire l'autospazio $V_\lambda$ e ne trovo una base risolvendo $(A - \lambda I)x = 0$.
- So che cos'è una somma diretta di più sottospazi e perché gli autospazi sono in somma diretta.
- So calcolare $m_a(\lambda)$ dal polinomio scomposto e $m_g(\lambda) = n - \rk(A - \lambda I)$.
- So che $1 \le m_g \le m_a$ e quindi calcolo il rango solo per gli autovalori multipli.
- So enunciare il teorema di diagonalizzabilità e applicarlo passo per passo, su $\R$ e su $\C$.
- So risolvere un problema con parametro: autovalori in funzione di $k$, valori speciali, ranghi, conclusione.
- So costruire una base di autovettori, $M$ e $D$, e controllare con $AM = MD$.
- So spiegare perché matrici con lo stesso polinomio caratteristico possono non essere simili.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 18 «Autovalori e autovettori II», pp. 90–95: le sezioni 18.A (autovettori con autovalori distinti), 18.B (autospazio), 18.C (molteplicità) e 18.D (teorema di diagonalizzabilità) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Proposizioni 18.1, 18.5; Corollari 18.2, 18.6; Definizioni 18.3, 18.4, 18.7; Teoremi 18.9, 18.10; Esempi 18.8, 18.11, 18.12); gli Esercizi 18.13 e 18.14 della sezione 18.E sono svolti negli esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §5.1.7 (riepilogo degli esempi $2 \times 2$ su $\R$ e $\C$), §5.2.1–5.2.6 (autovettori con autovalori distinti, autospazi, molteplicità con la dimostrazione completa del Teorema 18.9, teorema di diagonalizzabilità ed esempi), Esempio 5.1.14 (la trasposizione).
- **Esame**: problemi 11 degli appelli del 24/01/2024, 08/02/2024, 10/06/2024, 06/09/2024, 16/01/2025, 03/06/2025, 10/07/2025, 03/06/2026; domande 9 del 24/01/2024, 6 del 10/06/2024, 8 del 10/07/2024, 9 del 07/02/2025, 6 del 02/09/2025, 9 del 05/02/2026; foglio 3 del tutorato 2025/26 (esercizi 7–10). Testi e soluzioni ufficiali sul Moodle 2025/26 ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); le soluzioni riportate qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (la dimostrazione completa del Teorema 18.9, la tabella dei quattro comportamenti, la matrice su $\C$, gli esempi e gli esercizi aggiunti) servono a collegare la lezione al resto del corso e all'esame.
