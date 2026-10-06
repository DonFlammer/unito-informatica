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
  Quando una matrice è diagonalizzabile? Si contano due cose per ogni autovalore: quante volte è radice del polinomio
  caratteristico, e quanti autovettori indipendenti ha davvero. Se i due conti tornano per tutti, la matrice è
  diagonalizzabile. Con questo si risolve il problema aperto più frequente dell'esame: le matrici con un parametro.
materiale: dispense
scheda:
  Dispense: lezione 18 · pp. 90–95
  Libro: Martelli, §5.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 18 «Autovalori e autovettori II»; B. Martelli, Geometria e algebra lineare, §5.1 e §5.2
appunti_html: appunti/MDAG/L18_autovalori_autovettori_2.html
genera_html: true
---

## In breve

- Autovettori con **autovalori diversi** sono sempre indipendenti. Quindi, se una matrice $n \times n$ ha $n$ autovalori tutti diversi, è diagonalizzabile. Il contrario non vale: la matrice identità è diagonale e ha un solo autovalore.
- Tutti gli autovettori di uno stesso autovalore, con lo zero, formano un sottospazio: l'**autospazio**. È la zona dello spazio che la macchina allunga tutta dello stesso fattore.
- Per ogni autovalore si fanno **due conti**. La **molteplicità algebrica** dice quante volte è radice del polinomio caratteristico: sono i posti che **prenota** sulla diagonale. La **molteplicità geometrica** è la dimensione dell'autospazio: sono i posti che riesce a **occupare** con autovettori indipendenti.
- I posti occupati sono sempre almeno 1 e mai più di quelli prenotati. Un autovalore che prenota un posto solo non dà mai problemi.
- **Teorema di diagonalizzabilità**: una matrice è diagonalizzabile esattamente quando il polinomio caratteristico ha tutte le sue radici nel campo dei numeri usato, e ogni autovalore occupa tutti i posti che prenota.
- Il campo conta: la rotazione di un quarto di giro è diagonalizzabile sui complessi ma non sui reali.
- Con un parametro: si trovano gli autovalori in funzione del parametro. Dove sono tutti diversi la matrice è diagonalizzabile; nei valori in cui due autovalori coincidono si calcola un rango.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Autovalori diversi, autovettori indipendenti (p. 90)

Nella lezione L17 hai visto che una macchina è diagonalizzabile se c'è una base fatta tutta di autovettori: in quella base la macchina allunga ogni vettore della base di un certo fattore, e la matrice è diagonale. Per costruire una base così servono autovettori **indipendenti**. Quando lo sono?

Come nelle dispense, i vettori di $\K^n$ sono colonne; nel testo li scriviamo in riga, $(1, 2)$, per risparmiare spazio.

Un primo esempio, dalla lezione L17. La matrice $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ allunga di 3 il vettore $(1, 0)$ e di 2 il vettore $(-4, 1)$. I due vettori non sono uno multiplo dell'altro: sono indipendenti. Non è un caso. Se fossero sulla stessa retta, la macchina dovrebbe allungarli dello stesso fattore. Le dispense lo scrivono così.

> [!PROP] 18.1
> Se $v_1, \dots, v_k \in V$ sono autovettori per $T$ con autovalori $\lambda_1, \dots, \lambda_k$ distinti, allora sono linearmente indipendenti.

**Come si legge.** Prendi autovettori che la macchina allunga di fattori tutti diversi: allora nessuno di loro si ottiene come ricetta degli altri.

Il caso di **due** autovettori contiene già tutta l'idea. Siano $T(v_1) = \lambda_1 v_1$ e $T(v_2) = \lambda_2 v_2$, con $\lambda_1$ diverso da $\lambda_2$. Supponi che una ricetta dia zero:
$$\alpha_1 v_1 + \alpha_2 v_2 = 0.$$
1. Applico la macchina, che manda lo zero nello zero: $\alpha_1 \lambda_1 v_1 + \alpha_2 \lambda_2 v_2 = 0$.
2. Invece moltiplico la ricetta di partenza per $\lambda_2$: $\alpha_1 \lambda_2 v_1 + \alpha_2 \lambda_2 v_2 = 0$.
3. Tolgo la seconda dalla prima: il pezzo con $v_2$ sparisce e resta $\alpha_1(\lambda_1 - \lambda_2)v_1 = 0$.
4. Il vettore $v_1$ non è zero, perché è un autovettore, e $\lambda_1 - \lambda_2$ non è zero. Quindi $\alpha_1 = 0$. Allora resta $\alpha_2 v_2 = 0$, e siccome $v_2$ non è zero anche $\alpha_2 = 0$.

L'unica ricetta che dà zero è quella con tutte le dosi zero: i due vettori sono indipendenti. Con più vettori si ripete lo stesso trucco, eliminando un vettore alla volta: è la dimostrazione per induzione delle dispense.

> [!DIM] della Proposizione 18.1 (dalle dispense)
> Procediamo per induzione su $k$. Se $k = 1$, il vettore $v_1$ è indipendente perché non è nullo (per definizione, un autovettore non è mai nullo).
>
> Diamo per buono il caso $k - 1$ e mostriamo il caso $k$. Supponiamo di avere una combinazione lineare nulla
> $$\alpha_1 v_1 + \dots + \alpha_k v_k = 0.$$
> Dobbiamo dimostrare che $\alpha_i = 0$ per ogni $i$. Applicando $T$ otteniamo
> $$\alpha_1 T(v_1) + \dots + \alpha_k T(v_k) = \alpha_1 \lambda_1 v_1 + \dots + \alpha_k \lambda_k v_k = T(0) = 0.$$
> Moltiplicando la prima equazione per $\lambda_k$ troviamo
> $$\alpha_1 \lambda_k v_1 + \dots + \alpha_k \lambda_k v_k = 0$$
> e prendendo la differenza tra queste due equazioni deduciamo che
> $$\alpha_1(\lambda_1 - \lambda_k)v_1 + \dots + \alpha_{k-1}(\lambda_{k-1} - \lambda_k)v_{k-1} = 0.$$
> Questa è una combinazione lineare nulla di $k - 1$ autovettori con autovalori distinti: per l'ipotesi induttiva tutti i coefficienti $\alpha_i(\lambda_i - \lambda_k)$ devono essere nulli. Siccome $\lambda_i \neq \lambda_k$, ne deduciamo che $\alpha_i = 0$ per ogni $i = 1, \dots, k - 1$. Nella prima equazione resta $\alpha_k v_k = 0$ con $v_k \neq 0$, quindi anche $\alpha_k = 0$.

Da qui viene subito un criterio comodo. Le dispense lo scrivono così.

> [!COROLLARIO] 18.2
> Se il polinomio caratteristico $p_T(\lambda)$ ha $n$ radici distinte in $\K$, l'endomorfismo $T$ è diagonalizzabile.

**Come si legge.** Se una macchina su uno spazio di dimensione $n$ ha $n$ autovalori tutti diversi, è diagonalizzabile.

Il perché, come nel libro di Martelli (Corollario 5.2.2):

1. ognuna delle $n$ radici è un autovalore (Proposizione 17.13), quindi ha almeno un autovettore;
2. gli $n$ autovettori così trovati sono indipendenti, per la Proposizione 18.1;
3. sono $n$ vettori indipendenti in uno spazio di dimensione $n$, quindi formano una base (Teorema 7.12). È una base di autovettori.

> [!ESEMPIO] · diagonalizzabile senza cercare gli autovettori
> $A = \begin{pmatrix} 1 & 7 & -1 \\ 0 & 2 & 8 \\ 0 & 0 & 3 \end{pmatrix}$ è triangolare, quindi i suoi autovalori sono i numeri sulla diagonale: $1, 2, 3$ (lezione L17). Sono tre, tutti diversi, per una matrice $3 \times 3$: per il Corollario 18.2, $A$ è diagonalizzabile. Non serve calcolare gli autovettori per saperlo. Se servono, sono $(1, 0, 0)$, $(7, 1, 0)$ e $(55, 16, 2)$.

> [!TRAPPOLA] Il Corollario 18.2 va in un verso solo
> «$n$ autovalori diversi» basta per essere diagonalizzabile, ma non è obbligatorio. La matrice identità $3 \times 3$ ha un solo autovalore, 1, ed è già diagonale. Quando qualche autovalore si ripete il corollario non dice niente: serve il teorema di diagonalizzabilità, più avanti.

::: prova La matrice $\begin{pmatrix} 1 & 5 & 2 \\ 0 & -2 & 7 \\ 0 & 0 & 4 \end{pmatrix}$ è diagonalizzabile?
Sì. È triangolare, con autovalori $1$, $-2$ e $4$ sulla diagonale: tre autovalori diversi per una matrice $3 \times 3$.
:::

> [!RICORDA]
> - Autovettori con autovalori diversi sono indipendenti.
> - $n$ autovalori diversi in dimensione $n$: diagonalizzabile. Se qualcuno si ripete, bisogna fare altri conti.

## La zona allungata dello stesso fattore (pp. 90–91)

Se la macchina allunga di 3 due vettori, allunga di 3 anche la loro somma e i loro multipli: $T(v + w) = 3v + 3w = 3(v + w)$. Quindi tutti i vettori allungati di 3, insieme allo zero, formano un sottospazio. Può essere una retta, un piano o di più. Le dispense gli danno un nome.

> [!DEF] 18.3 · Autospazio
> Sia $T : V \to V$ un endomorfismo. Per ogni autovalore $\lambda$ di $T$ definiamo l'**autospazio**
> $$V_\lambda = \{v \in V \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$$
> come l'insieme di tutti gli autovettori $v$ con autovalore $\lambda$, più l'origine $0 \in V$ (ricordiamo che $0 \in V$ non è autovettore per definizione).

**Come si legge.**

- $V_\lambda$, «vu lambda», raccoglie tutti i vettori che la macchina allunga di $\lambda$, più lo zero.
- $T - \lambda\,\id$ è la macchina che prende $v$ e restituisce $T(v) - \lambda v$. Il suo nucleo è fatto dei vettori con $T(v) - \lambda v = 0$, cioè $T(v) = \lambda v$: per questo le due scritture dicono la stessa cosa.
- **È un sottospazio**, perché ogni nucleo lo è (Proposizione 14.10).
- **Con le matrici**: l'autospazio è l'insieme delle soluzioni del sistema $(A - \lambda I_n)x = 0$. Una sua base si trova con Gauss, come per ogni nucleo.
- **Non è mai solo lo zero**, perché $\lambda$ è un autovalore: c'è almeno un autovettore.

> [!ESEMPIO] · gli autospazi di una matrice $3 \times 3$
> Sia $A = \begin{pmatrix} 3 & 0 & 0 \\ -4 & -1 & -8 \\ 0 & 0 & 3 \end{pmatrix}$, la matrice dell'Esempio 18.11 più avanti. I suoi autovalori sono $3$ e $-1$.
> - Per 3: $A - 3I_3 = \begin{pmatrix} 0 & 0 & 0 \\ -4 & -4 & -8 \\ 0 & 0 & 0 \end{pmatrix}$. Resta una sola equazione, $-4x - 4y - 8z = 0$, cioè $x = -y - 2z$. Scegliendo $y = 1, z = 0$ e poi $y = 0, z = 1$: $V_3 = \Span\big((-1, 1, 0),\ (-2, 0, 1)\big)$, un piano.
> - Per $-1$: $A + I_3 = \begin{pmatrix} 4 & 0 & 0 \\ -4 & 0 & -8 \\ 0 & 0 & 4 \end{pmatrix}$. Dalla prima riga $x = 0$, dalla terza $z = 0$, e $y$ è libera. $V_{-1} = \Span\big((0, 1, 0)\big)$, una retta.
>
> La macchina allunga di 3 tutto un piano e ribalta una retta.

::: prova Il vettore $(-3, 1, 1)$ sta nell'autospazio $V_3$ dell'esempio?
Sì: l'equazione è $x = -y - 2z$, e $-1 - 2 = -3$. Controllo: $A(-3, 1, 1) = (-9, 3, 3) = 3 \cdot (-3, 1, 1)$.
:::

### Autospazi che non si sovrappongono

Per il passo successivo serve la **somma** di sottospazi: $V_1 + \dots + V_k$ è l'insieme di tutti i vettori che si scrivono come $v_1 + \dots + v_k$, con ogni $v_i$ preso nel suo sottospazio. È il più piccolo sottospazio che li contiene tutti.

La somma è «pulita» quando ogni vettore si scrive in un modo solo. Le dispense la chiamano così.

> [!DEF] 18.4 · Somma diretta
> Siano $V_1, \dots, V_k$ sottospazi di uno spazio vettoriale $V$. Diciamo che la loro somma è **diretta** se ogni vettore
> $$v \in V_1 + \dots + V_k$$
> si può scrivere in modo unico nella forma
> $$v = v_1 + \dots + v_k, \qquad v_i \in V_i.$$
> In questo caso scriviamo $V_1 \oplus \dots \oplus V_k$.
>
> Equivalentemente, l'unica relazione $v_1 + \dots + v_k = 0$ con $v_i \in V_i$ è quella in cui $v_1 = \dots = v_k = 0$.

**Come si legge.** La somma è diretta quando i sottospazi non si «pestano i piedi»: ogni vettore della somma ha una sola scomposizione in pezzi, uno per sottospazio. Il simbolo $\oplus$ si legge «somma diretta». Per controllarlo basta guardare lo zero: l'unico modo di ottenere zero deve essere con tutti i pezzi uguali a zero.

> [!ESEMPIO] · rette in somma diretta, e no
> Nello spazio le tre rette degli assi, $\Span(e_1)$, $\Span(e_2)$ e $\Span(e_3)$, sono in somma diretta: se $a e_1 + b e_2 + c e_3 = 0$ allora $(a, b, c) = 0$, quindi i tre pezzi sono nulli.
>
> Invece $\Span(e_1)$, $\Span(e_2)$ e $\Span(e_1 + e_2)$ **non** lo sono: $e_1 + e_2 + \big(-(e_1 + e_2)\big) = 0$ con pezzi non nulli. Il vettore $e_1 + e_2$ si scrive in due modi: $e_1 + e_2 + 0$ oppure $0 + 0 + (e_1 + e_2)$.

Gli autospazi di una macchina non si pestano mai i piedi. Le dispense lo scrivono così.

> [!PROP] 18.5
> Sia $T : V \to V$ un endomorfismo e siano $\lambda_1, \dots, \lambda_k$ i suoi autovalori. I corrispettivi autospazi sono sempre in somma diretta:
> $$V_{\lambda_1} \oplus \dots \oplus V_{\lambda_k}.$$

**Come si legge.** Prendi un vettore da ogni autospazio: se la loro somma è zero, sono tutti zero.

Il perché. Supponi che $v_1 + \dots + v_k = 0$, con ogni $v_i$ nel suo autospazio, e che qualcuno non sia zero. I pezzi non nulli sono autovettori con autovalori diversi. La relazione dice che la loro somma, con tutte le dosi uguali a 1, fa zero: sarebbero dipendenti. Questo va contro la Proposizione 18.1. Quindi tutti i pezzi sono zero.

Ecco perché gli autospazi sono la chiave della diagonalizzazione. Le dispense lo scrivono così.

> [!COROLLARIO] 18.6
> L'endomorfismo $T$ è diagonalizzabile se e solo se
> $$V = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_k}.$$

**Come si legge.** La macchina è diagonalizzabile esattamente quando gli autospazi, messi insieme, riempiono tutto lo spazio.

La dimostrazione delle dispense, con i passaggi. Sappiamo già che la somma è diretta; resta da capire quando riempie tutto.

1. **Se gli autospazi riempiono lo spazio**, prendi una base di ogni autospazio e mettile insieme. Sono tutti autovettori. Generano la somma, cioè tutto lo spazio. E sono indipendenti. Una ricetta che dà zero si spezza in un pezzo per autospazio, e la somma diretta dice che ogni pezzo è zero. Dentro ogni autospazio i vettori scelti sono una base, quindi tutte le dosi sono zero. Quindi c'è una base di autovettori.
2. **Se c'è una base di autovettori**, ogni vettore è una ricetta di autovettori. Raggruppando quelli con lo stesso autovalore, lo scrivi come somma di un pezzo per autospazio.

In pratica: **la macchina è diagonalizzabile esattamente quando le dimensioni degli autospazi sommano a $n$**. Nell'esempio sopra il piano e la retta danno $2 + 1 = 3$: quella matrice è diagonalizzabile.

> [!RICORDA]
> - L'autospazio di $\lambda$ è il nucleo di $A - \lambda I_n$: tutti i vettori allungati di $\lambda$, più lo zero.
> - Gli autospazi sono sempre in somma diretta.
> - Diagonalizzabile esattamente quando le loro dimensioni sommano a $n$.

## Due conti per ogni autovalore (pp. 91–92)

Ecco il punto centrale. Se una matrice $3 \times 3$ è diagonalizzabile con autovalori 2, 2 e 5, la matrice diagonale ha 2 in **due** posti della diagonale e 5 in uno. Per riempire le due colonne del 2 servono **due** autovettori indipendenti di autovalore 2.

Quindi ogni autovalore **prenota** dei posti sulla diagonale, tanti quante volte è radice del polinomio caratteristico. Poi deve **occupare** quei posti con autovettori indipendenti. A volte non ci riesce.

Ricorda dalla lezione L04 (Definizione 4.3) la **molteplicità** di una radice: quante volte il fattore compare. Per esempio $(x - 1)^3(x + 1)$ ha la radice 1 con molteplicità 3 e la radice $-1$ con molteplicità 1. Le dispense danno un nome ai due conti.

> [!DEF] 18.7 · Molteplicità algebrica e geometrica
> Sia $T : V \to V$ un endomorfismo e sia $\lambda$ un autovalore per $T$. La **molteplicità algebrica** $m_a(\lambda)$ è la molteplicità di $\lambda$ come radice del polinomio caratteristico $p_T$. La **molteplicità geometrica** $m_g(\lambda)$ è la dimensione dell'autospazio associato a $\lambda$, cioè
> $$m_g(\lambda) = \dim V_\lambda.$$

**Come si legge.**

- $m_a(\lambda)$, «emme a di lambda», sono i **posti prenotati**: si legge dal polinomio scomposto. In $(3 - \lambda)^2(-1 - \lambda)$ l'autovalore 3 ha $m_a = 2$ e l'autovalore $-1$ ha $m_a = 1$.
- $m_g(\lambda)$, «emme g di lambda», sono i **posti occupati**: quanti autovettori indipendenti ci sono. Si calcola con il rango, per il teorema della dimensione (lezione L14):
$$m_g(\lambda) = \dim \Ker(A - \lambda I_n) = n - \rk(A - \lambda I_n).$$
- I nomi: «algebrica» perché viene dal polinomio, «geometrica» perché misura lo spazio degli autovettori, una retta, un piano, eccetera.

Ecco un autovalore che non riesce a occupare tutti i suoi posti.

> [!ESEMPIO] 18.8 · Le due molteplicità possono essere diverse
> Sia $L_A : \R^2 \to \R^2$ l'endomorfismo dato da
> $$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}.$$
> Il polinomio caratteristico è $p_A(\lambda) = (1 - \lambda)^2 = \lambda^2 - 2\lambda + 1 = (\lambda - 1)^2$. Troviamo un solo autovalore $\lambda_1 = 1$, con molteplicità algebrica $m_a(1) = 2$. D'altra parte,
> $$m_g(1) = \dim V_1 = \dim \Ker(A - I_2) = 2 - \rk(A - I_2) = 2 - \rk\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = 2 - 1 = 1.$$
> Abbiamo quindi trovato in questo caso $m_a(1) = 2$ e $m_g(1) = 1$.

L'autovalore 1 prenota due posti ma ne occupa uno solo. Gli autovettori sono solo i multipli di $(1, 0)$: il sistema $(A - I_2)x = 0$ dice $y = 0$. Una sola retta di autovettori nel piano non basta per una base. La macchina è uno **scorrimento**: sposta ogni punto in orizzontale di quanto è alto, come le carte di un mazzo spinte di lato. Nello strumento qui sotto trascina $x$: solo sull'asse orizzontale $Ax$ resta sulla stessa retta.

```widget matrice
titolo: Il taglio $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ ha una sola retta di autovettori
a: 1 1; 0 1
x: 1 1
raggio: 3
```

### I posti occupati non superano mai quelli prenotati

L'esempio mostra che i due conti possono essere diversi. Ma vanno sempre nello stesso verso. Le dispense lo scrivono così.

> [!TEOREMA] 18.9
> Sia $T : V \to V$ un endomorfismo. Per ogni autovalore $\lambda_0$ di $T$ valgono le disuguaglianze
> $$1 \le m_g(\lambda_0) \le m_a(\lambda_0).$$

**Come si legge.** Un autovalore occupa sempre almeno un posto, e mai più posti di quelli che ha prenotato.

L'idea, dalle dispense:

1. **Almeno un posto**: un autovalore ha almeno un autovettore, quindi l'autospazio ha dimensione almeno 1.
2. **Non più di quelli prenotati**: prendi una base dell'autospazio e completala a una base di tutto lo spazio. Nella matrice in questa base compare un blocco diagonale con $\lambda_0$ ripetuto $m_g(\lambda_0)$ volte. Quindi il polinomio caratteristico contiene il fattore $(\lambda_0 - \lambda)$ almeno $m_g(\lambda_0)$ volte.

> [!DIM] del Teorema 18.9, secondo punto, con i dettagli (dal libro di Martelli, Proposizione 5.2.10)
> Sia $k = m_g(\lambda_0)$ e sia $\{v_1, \dots, v_k\}$ una base di $V_{\lambda_0}$, completata a una base $\mathcal B = \{v_1, \dots, v_n\}$ di $V$. Per $i \le k$ vale $T(v_i) = \lambda_0 v_i$, quindi le prime $k$ colonne di $[T]^{\mathcal B}_{\mathcal B}$ sono $\lambda_0 e_1, \dots, \lambda_0 e_k$ e la matrice ha la forma a blocchi
> $$[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} \lambda_0 I_k & C \\ 0 & D \end{pmatrix}, \qquad D \in M(n - k).$$
> Il determinante di una matrice a blocchi di questo tipo (con il blocco in basso a sinistra nullo) è il prodotto dei determinanti dei blocchi diagonali. Quindi
> $$p_T(\lambda) = \det(\lambda_0 I_k - \lambda I_k) \cdot \det(D - \lambda I_{n-k}) = (\lambda_0 - \lambda)^k \, p_D(\lambda).$$
> Il fattore $(\lambda_0 - \lambda)^k$ divide $p_T$, quindi $\lambda_0$ ha molteplicità almeno $k$: $m_a(\lambda_0) \ge k = m_g(\lambda_0)$.

> [!IDEA] Gli autovalori semplici non danno mai problemi
> Se un autovalore prenota un posto solo, $m_a = 1$, il Teorema 18.9 dice che ne occupa almeno 1 e al massimo 1: quindi $m_g = 1$, senza fare conti. Negli esercizi il rango di $A - \lambda I_n$ va calcolato **solo** per gli autovalori che prenotano due o più posti.

::: prova Per $A = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$, quanto valgono $m_a(2)$ e $m_g(2)$?
Il polinomio è $(2 - \lambda)^2$, quindi $m_a(2) = 2$. La matrice $A - 2I_2$ è tutta zero, con rango 0, quindi $m_g(2) = 2 - 0 = 2$.
:::

> [!RICORDA]
> - $m_a$ = posti prenotati, dal polinomio scomposto; $m_g$ = posti occupati, $n - \rk(A - \lambda I_n)$.
> - Sempre $1 \le m_g \le m_a$. Se $m_a = 1$, allora $m_g = 1$.

## Il teorema di diagonalizzabilità (pp. 92–93)

Ora si può dire con precisione quando una matrice è diagonalizzabile: tutti i posti della diagonale devono essere prenotati e poi occupati. Prendiamo uno spazio $V$ di dimensione $n$ sul campo $\K$. Le dispense lo scrivono così.

> [!TEOREMA] 18.10 · Teorema di diagonalizzabilità
> Un endomorfismo $T : V \to V$ è diagonalizzabile se e solo se valgono entrambi i fatti seguenti:
> 1. $p_T(\lambda)$ ha $n$ radici in $\K$, contate con molteplicità.
> 2. $m_a(\lambda) = m_g(\lambda)$ per ogni autovalore $\lambda$ di $T$.

**Come si legge.**

- **Condizione 1: tutti i posti sono prenotati.** Il polinomio si scompone tutto in fattori di primo grado, con numeri del campo che stai usando. Sui complessi succede sempre (teorema fondamentale dell'algebra, lezione L04). Sui reali può mancare: un fattore come $\lambda^2 + 1$ non ha radici reali, e i suoi due posti restano senza prenotazione.
- **Condizione 2: ogni autovalore occupa tutti i posti che ha prenotato.** Per gli autovalori semplici è automatica.
- Insieme, le due condizioni dicono che le dimensioni degli autospazi sommano a $n$.

La dimostrazione delle dispense, con i passaggi:

1. Gli autospazi sono in somma diretta (Proposizione 18.5). Chiamo $W$ la loro somma.
2. La macchina è diagonalizzabile esattamente quando $W$ è tutto lo spazio (Corollario 18.6), cioè quando $W$ ha dimensione $n$.
3. In una somma diretta le dimensioni si sommano:
$$\dim W = m_g(\lambda_1) + \dots + m_g(\lambda_k) \le m_a(\lambda_1) + \dots + m_a(\lambda_k) \le n.$$
La prima disuguaglianza viene dal Teorema 18.9. La seconda viene dal fatto che il polinomio caratteristico ha grado $n$, quindi ha al massimo $n$ radici contate con molteplicità.
4. $\dim W = n$ esattamente quando tutte e due le disuguaglianze sono uguaglianze. La prima lo è quando ogni autovalore occupa tutti i suoi posti (condizione 2). La seconda quando tutti i posti sono prenotati (condizione 1).

I quattro comportamenti possibili, con matrici $2 \times 2$ (dal riepilogo del libro di Martelli, §5.1.7):

| Matrice | Autovalori | Diagonalizzabile sui reali? | Sui complessi? | Perché |
|---|---|---|---|---|
| $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ | 1 ($m_a = m_g = 2$) | sì | sì | è già diagonale |
| $\begin{pmatrix} -1 & 2 \\ -4 & 5 \end{pmatrix}$ | 1 e 3 | sì | sì | due autovalori diversi |
| $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $\pm i$ | **no** | sì | sui reali manca la condizione 1 |
| $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ | 1 ($m_a = 2$, $m_g = 1$) | **no** | **no** | manca la condizione 2 |

> [!METODO] Stabilire se una matrice è diagonalizzabile
> 1. **Il polinomio caratteristico scomposto**: $p_A(\lambda) = \det(A - \lambda I_n)$, sviluppato lungo la riga o la colonna con più zeri.
> 2. **Condizione 1**: tutte le radici stanno nel campo? Sui reali, un fattore $\lambda^2 + b\lambda + c$ con $b^2 - 4c < 0$ basta per rispondere **no**.
> 3. **I posti prenotati** dal polinomio scomposto. Se sono tutti 1, cioè gli autovalori sono tutti diversi: **sì**, per il Corollario 18.2.
> 4. **Condizione 2**, solo per gli autovalori con $m_a$ almeno 2: calcola $m_g = n - \rk(A - \lambda I_n)$. Se per uno di loro $m_g < m_a$: **no**. Altrimenti: **sì**.
> 5. **Se serve una base di autovettori**: una base di ogni autospazio, con Gauss su $A - \lambda I_n$, tutte insieme. $M$ ha questi vettori in colonna, $D$ i loro autovalori nello stesso ordine. Controllo: $AM = MD$.

Ecco l'esempio delle dispense: un autovalore che prenota due posti e li occupa tutti e due.

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

Le dispense si fermano qui. Con gli autospazi calcolati prima si completa la diagonalizzazione: il piano dell'autovalore 3 è generato da $(-1, 1, 0)$ e $(-2, 0, 1)$, la retta dell'autovalore $-1$ da $(0, 1, 0)$. Quindi
$$M = \begin{pmatrix} -1 & -2 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}, \qquad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & -1 \end{pmatrix}.$$
Controllo: il determinante di $M$ è 1, quindi $M$ è invertibile. E $AM = MD$ colonna per colonna: $A(-1, 1, 0) = (-3, 3, 0)$, $A(-2, 0, 1) = (-6, 0, 3)$, $A(0, 1, 0) = (0, -1, 0)$.

::: prova La matrice $\begin{pmatrix} 2 & 3 \\ 0 & 2 \end{pmatrix}$ è diagonalizzabile?
No. L'autovalore 2 prenota due posti. Ma $A - 2I_2 = \begin{pmatrix} 0 & 3 \\ 0 & 0 \end{pmatrix}$ ha rango 1, quindi $m_g(2) = 2 - 1 = 1$: ne occupa uno solo.
:::

> [!RICORDA]
> - Diagonalizzabile esattamente quando (1) tutte le radici del polinomio sono nel campo e (2) per ogni autovalore $m_g = m_a$.
> - Il rango si calcola solo per gli autovalori multipli.

## Matrici con un parametro (pp. 94–95)

Negli esami arriva spesso una matrice con dentro una lettera, e la domanda: per quali valori della lettera è diagonalizzabile? Di solito la lettera si chiama $k$. Il ragionamento è sempre lo stesso. Per quasi tutti i valori di $k$ gli autovalori sono diversi, e allora va tutto bene. Restano pochi valori speciali, quelli in cui due autovalori coincidono: lì si fa il conto del rango. Ecco l'esempio delle dispense.

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
> Per $k = 1$ due autovalori coincidono, eppure la matrice è diagonalizzabile; per $k = 5$ no. Nei valori speciali **si calcola sempre** il rango, non si indovina. E il rango va calcolato **dopo** aver messo il valore di $k$ nella matrice.

> [!OLTRE] la stessa matrice sui complessi
> Se si studia la stessa matrice sui complessi, con $k$ reale, per $k > 5$ le radici $\pm i\sqrt{k - 5}$ esistono e sono diverse tra loro e da 2: la matrice è diagonalizzabile. La risposta diventerebbe «diagonalizzabile sui complessi esattamente quando $k$ è diverso da 5». Per questo il testo di un esercizio dice sempre su quale campo lavorare: negli appelli 2023–2026 compaiono sia $k \in \R$ sia $k \in \C$.

Lo strumento qui sotto calcola autovalori, molteplicità e autospazi. È impostato sull'Esempio 18.12 con $k = 1$: guarda $m_g(2) = 2$. Poi scrivi la matrice con $k = 5$, cioè $3\ 9\ 1;\ -1\ -3\ -1;\ 0\ 0\ 2$, e guarda comparire $m_g(0) = 1$, minore di 2.

```widget gauss
titolo: Molteplicità e autospazi: l'Esempio 18.12 con $k = 1$
matrice: 3 5 1; -1 -3 -1; 0 0 2
modo: autovalori
modi: autovalori, rango, nucleo
```

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: §5.2.1 «Autovettori con autovalori distinti» (pp. 163–165), §5.2.2 «Autospazio» (pp. 165–166), §5.2.3 «Molteplicità algebrica e geometrica» (pp. 166–167, con la dimostrazione completa del Teorema 18.9), §5.2.4 «Matrici simili» (p. 167: matrici simili hanno anche le stesse molteplicità geometriche), §5.2.5–5.2.6 «Teorema di diagonalizzabilità» ed «Esempi» (pp. 167–169; il parametro lì si chiama $t$). Gli esercizi di fine capitolo (p. 170) sono un buon allenamento.

::: prova Per quali $k$ la matrice $\begin{pmatrix} 1 & k \\ 0 & 2 \end{pmatrix}$ è diagonalizzabile?
Per tutti i $k$: è triangolare, con autovalori 1 e 2, diversi qualunque sia $k$.
:::

> [!RICORDA]
> - Con un parametro: autovalori in funzione di $k$, poi i valori di $k$ in cui due coincidono.
> - Negli altri valori la matrice è diagonalizzabile; nei valori speciali si mette $k$ nella matrice e si calcola il rango.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $V_\lambda$ | «vu lambda» | l'autospazio: i vettori allungati di $\lambda$, più lo zero | $V_3 = \Span\big((-1, 1, 0), (-2, 0, 1)\big)$ |
| $\Ker(A - \lambda I_n)$ | «nucleo di a meno lambda i» | lo stesso autospazio, scritto come nucleo | |
| $V_1 + V_2$ | «vu uno più vu due» | tutte le somme di un vettore del primo e uno del secondo | |
| $V_1 \oplus V_2$ | «somma diretta» | una somma in cui ogni vettore si scompone in un modo solo | |
| $m_a(\lambda)$ | «molteplicità algebrica» | posti prenotati: quante volte $\lambda$ è radice | in $(\lambda - 2)^2$, $m_a(2) = 2$ |
| $m_g(\lambda)$ | «molteplicità geometrica» | posti occupati: $n - \rk(A - \lambda I_n)$ | |
| $p_A(\lambda)$ | «pi di a» | il polinomio caratteristico, $\det(A - \lambda I_n)$ (lezione L17) | |
| $\mathrm{diag}(1, 2, 3)$ | «diagonale uno, due, tre» | la matrice diagonale con quei numeri sulla diagonale | |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

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

Nel quiz compaiono: l'autospazio di un autovalore dato (24/01/2024 d. 9; 10/06/2024 d. 6; 07/02/2025 d. 9; 05/02/2026 d. 9, gli ultimi tre per macchine sui polinomi di grado al massimo 2); che cosa segue dal polinomio caratteristico (10/07/2024 d. 8); per quale $k$ una matrice triangolare è diagonalizzabile (02/09/2025 d. 6). Il foglio 3 del tutorato, esercizi 7–10, è tutto su questo.

> [!METODO] Il problema con il parametro, passo per passo
> 1. **Il polinomio caratteristico in funzione di $k$, scomposto.** Sviluppa lungo la riga o la colonna con più zeri: spesso un fattore come $(a - \lambda)$ si raccoglie subito.
> 2. **Gli autovalori in funzione di $k$.** Sui reali, se un fattore di secondo grado non ha radici reali per certi $k$, per quei $k$ la risposta è «non diagonalizzabile».
> 3. **I valori speciali**: per ogni coppia di autovalori, cerca i $k$ in cui sono uguali. Per tutti gli altri $k$ gli autovalori sono diversi e la matrice è diagonalizzabile.
> 4. **Per ogni valore speciale**: metti $k$ nella matrice, trova l'autovalore multiplo e calcola $m_g = n - \rk(A - \lambda I_n)$.
> 5. **La conclusione in una frase**: «$A$ è diagonalizzabile esattamente quando $k \neq \dots$», oppure «quando $k < \dots$».
> 6. **Se chiesto**, le basi degli autospazi, $P$ (o $M$) e $D$, con il controllo $AP = PD$.

### Una domanda vera, letta insieme

**Appello del 02/09/2025, domanda 6.** Il testo: «Per quale valore di $k$ la matrice $\begin{pmatrix} 4 & k - 1 & k - 3 \\ 0 & 4 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ è diagonalizzabile?». Le risposte erano $k = 1, 2, 4, 0, 3$.

**In pratica chiede:** l'autovalore che si ripete riesce a occupare tutti i suoi posti? E per quale $k$?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: gli autovalori.** La matrice è triangolare, quindi gli autovalori sono sulla diagonale: 4, 4 e 2. Il 4 prenota due posti, il 2 uno solo.
>
> **Passo 2: chi va controllato.** Il 2 è semplice: va sempre bene. Si controlla solo il 4: servono due autovettori indipendenti, cioè $\rk(A - 4I_3) = 3 - 2 = 1$.
>
> **Passo 3: la matrice da guardare.**
> $$A - 4I_3 = \begin{pmatrix} 0 & k - 1 & k - 3 \\ 0 & 0 & 1 \\ 0 & 0 & -2 \end{pmatrix}.$$
> La terza riga è $-2$ volte la seconda. Il rango è 1 esattamente quando anche la prima riga è un multiplo di $(0, 0, 1)$.
>
> **Passo 4: il valore di $k$.** Serve che il numero al secondo posto della prima riga sia zero: $k - 1 = 0$, cioè $k = 1$. Allora la prima riga è $(0, 0, -2)$ e il rango è 1. Per ogni altro $k$ la prima riga ha un numero diverso da zero al secondo posto, la seconda riga no: sono indipendenti e il rango è 2.
>
> **La risposta** è $k = 1$. La risposta più attraente tra le sbagliate è $k = 3$: annulla l'ultimo numero della prima riga, ma non quello che conta.

### Altre due domande vere

> [!ESAME] Appello del 24/01/2024, domanda 9
> *La matrice $A = \begin{pmatrix} 3 & -4 & 4 \\ 2 & -3 & 2 \\ 0 & 0 & -1 \end{pmatrix}$ ha autovalore $\lambda = -1$. Qual è l'autospazio?* Tra le risposte: $\Span\big((2, 1, -1), (2, 1, 0)\big)$, $\Span\big((2, 1, -1)\big)$, $\Span\big((1, 0, -1), (1, 1, 0)\big)$ e altre.
>
> **Soluzione.**
> 1. $A + I_3 = \begin{pmatrix} 4 & -4 & 4 \\ 2 & -2 & 2 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi l'autospazio ha dimensione $3 - 1 = 2$.
> 2. La risposta è lo Span di **due** vettori indipendenti che soddisfano l'unica equazione, $x - y + z = 0$.
> 3. $(1, 0, -1)$ dà $1 - 0 - 1 = 0$, sì; $(1, 1, 0)$ dà $1 - 1 + 0 = 0$, sì. Invece $(2, 1, 0)$ dà $2 - 1 = 1$: no.
>
> La risposta giusta è $\Span\big((1, 0, -1), (1, 1, 0)\big)$.

> [!ESAME] Appello del 10/07/2024, domanda 8
> *Sia $A$ una matrice quadrata con polinomio caratteristico $t(t - 1)^2(t - 2)$. Quale delle seguenti non è automaticamente verificata?* Le risposte: «$A$ non è invertibile»; «$A$ ha autovalori $0, 1, 2$»; «$A$ ha un autovalore con molteplicità algebrica 2»; «$A$ ammette una base di autovettori»; «$A$ è $4 \times 4$».
>
> **Soluzione.** Dal polinomio si legge molto: ha grado 4, quindi $A$ è $4 \times 4$; le radici sono $0, 1, 2$, con l'1 che prenota due posti; 0 è un autovalore, quindi il determinante è zero e $A$ non è invertibile. Ma l'autovalore 1 potrebbe occupare un posto solo, $m_g(1) = 1$, e allora non c'è una base di autovettori. Quindi **«$A$ ammette una base di autovettori» non è automatica**.

**Errori da evitare.**

- Concludere «non diagonalizzabile» appena due autovalori coincidono: bisogna calcolare $m_g$.
- Calcolare $m_g$ per gli autovalori semplici, che è tempo perso perché vale 1, e dimenticarlo per quelli multipli.
- Calcolare il rango di $A - \lambda I$ con $k$ ancora generico invece di mettere il valore speciale.
- Dimenticare la condizione 1 sui reali: con un fattore $\lambda^2 + 1$ la matrice non è diagonalizzabile sui reali, anche se tutto il resto va bene.
- Scrivere un autospazio con il numero sbagliato di generatori: $n - \rk(A - \lambda I)$ dice quanti vettori servono.
- Nei problemi sui complessi, sbagliare i conti con $i$: ricorda $i^2 = -1$ e $\frac 1i = -i$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: «autovalori diversi: autovettori indipendenti; $n$ autovalori diversi: diagonalizzabile»; «$V_\lambda = \Ker(A - \lambda I)$, $m_g = n - \rk(A - \lambda I)$»; «$1 \le m_g \le m_a$»; «diagonalizzabile esattamente con (1) tutte le radici nel campo e (2) $m_a = m_g$ per ogni $\lambda$»; la ricetta del problema con parametro in sei righe.

## Quiz

```quiz
D: La matrice $A = \begin{pmatrix} 1 & 2 & -2 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ ha autovalore $\lambda = 3$. Qual è l'autospazio $V_3$?
+ $\Span\big((1, 1, 0), (-1, 0, 1)\big)$
- $\Span\big((1, 1, 0)\big)$
- $\Span\big((1, 0, 0)\big)$
- $\Span\big((1, 1, 0), (1, 0, 1)\big)$
- $\Span\big((1, 0, 0), (0, 1, 1)\big)$
= $A - 3I_3 = \begin{pmatrix} -2 & 2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi l'autospazio ha dimensione 2 e l'unica equazione è $x = y - z$. I vettori $(1, 1, 0)$ e $(-1, 0, 1)$ la soddisfano e sono indipendenti. La risposta più insidiosa è la quarta: $(1, 1, 0)$ va bene, ma $(1, 0, 1)$ dà $1 = 0 - 1$, falso. La seconda ha il vettore giusto ma una retta sola, e ne servono due. $(1, 0, 0)$ è un autovettore, ma di autovalore 1. Simile all'appello del 24/01/2024, domanda 9.

D: L'endomorfismo $T : \R_2[x] \to \R_2[x]$, $T(a + bx + cx^2) = (a + c) + 2bx + (a + c)x^2$, ha autovalore $2$. Qual è l'autospazio $V_2$?
+ $\Span(x,\ 1 + x^2)$
- $\Span(1 + x^2)$
- $\Span(x,\ 1 - x^2)$
- $\Span(1,\ x^2)$
- $\Span(x)$
= Nella base $\{1, x, x^2\}$ la matrice è $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}$, e $A - 2I_3 = \begin{pmatrix} -1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & -1 \end{pmatrix}$ dà l'equazione $a = c$, con $b$ libero. Le soluzioni $(0, 1, 0)$ e $(1, 0, 1)$ sono i polinomi $x$ e $1 + x^2$. Controllo: $T(x) = 2x$ e $T(1 + x^2) = 2 + 2x^2$. La risposta più insidiosa è la terza: $T(1 - x^2) = 0$, quindi $1 - x^2$ è un autovettore, ma di autovalore 0. Simile agli appelli del 10/06/2024 (domanda 6), del 07/02/2025 (domanda 9) e del 05/02/2026 (domanda 9).

D: Una matrice $A$ ha polinomio caratteristico $p_A(\lambda) = (\lambda - 2)^2(\lambda + 1)(\lambda - 3)$. Quale affermazione **non** è necessariamente vera?
+ $A$ è diagonalizzabile.
- $A$ è una matrice $4 \times 4$.
- $A$ è invertibile.
- $A$ ha un autovalore con molteplicità algebrica 2.
- $\det A = -12$.
= Il polinomio ha grado 4, quindi $A$ è $4 \times 4$. Il determinante è il polinomio calcolato in 0: $4 \cdot 1 \cdot (-3) = -12$, che non è zero, quindi $A$ è invertibile. L'autovalore 2 prenota due posti. Ma potrebbe occuparne uno solo: con un blocco $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ sulla diagonale la matrice non è diagonalizzabile. La risposta sbagliata più insidiosa è «invertibile», che sembra dubbia ma segue dal determinante. Simile all'appello del 10/07/2024, domanda 8.

D: Per quale valore di $k$ la matrice $\begin{pmatrix} 3 & k - 2 & k \\ 0 & 3 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ è diagonalizzabile?
+ $k = 2$
- $k = 0$
- $k = 3$
- $k = 1$
- $k = -2$
= Gli autovalori sono 3, che prenota due posti, e 1. Serve $\rk(A - 3I_3) = 1$, con $A - 3I_3 = \begin{pmatrix} 0 & k - 2 & k \\ 0 & 0 & 1 \\ 0 & 0 & -2 \end{pmatrix}$. Se $k$ è diverso da 2, le prime due righe sono indipendenti e il rango è 2. Se $k = 2$ tutte le righe sono multiple di $(0, 0, 1)$: rango 1, e il 3 occupa tutti e due i posti. La risposta più insidiosa è $k = 0$, che annulla l'ultimo numero della prima riga ma non quello che conta. Simile all'appello del 02/09/2025, domanda 6.

D: Per $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix}$, le molteplicità dell'autovalore 2 sono:
+ $m_a(2) = 3$, $m_g(2) = 2$
- $m_a(2) = 3$, $m_g(2) = 3$
- $m_a(2) = 3$, $m_g(2) = 1$
- $m_a(2) = 2$, $m_g(2) = 2$
- $m_a(2) = 1$, $m_g(2) = 1$
= Il polinomio è $(2 - \lambda)^3$, quindi il 2 prenota tre posti. $A - 2I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi $m_g(2) = 3 - 1 = 2$: ne occupa due, e la matrice non è diagonalizzabile. La risposta più insidiosa è $m_g(2) = 1$, che viene dal confondere il rango con la molteplicità geometrica.

D: Sia $A = \begin{pmatrix} 5 & 1 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 5 \end{pmatrix}$. Quanto vale $\dim \Ker(A - 5I_3)$?
N: 2
= $A - 5I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi il nucleo ha dimensione $3 - 1 = 2$. È la molteplicità geometrica di 5, e una base è $e_1, e_3$. Simile al punto (1) del problema 11 dell'appello del 16/01/2025, che chiede una base di $\Ker(A - kI)$.

D: Quale di queste affermazioni è vera?
+ Se $A \in M(3, \R)$ ha tre autovalori reali distinti, allora $A$ è diagonalizzabile.
- Se $A \in M(n, \R)$ è diagonalizzabile, allora ha $n$ autovalori distinti.
- La molteplicità geometrica di un autovalore può essere 0.
- Può capitare che $m_g(\lambda) > m_a(\lambda)$.
- Gli autospazi di un endomorfismo $T : V \to V$ hanno sempre somma uguale a $V$.
= La prima è il Corollario 18.2. La più insidiosa è la seconda, che è il corollario letto al contrario: la matrice identità è diagonale e ha un solo autovalore. Per il Teorema 18.9 la molteplicità geometrica è almeno 1 e non supera quella algebrica. E per $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ l'unico autospazio è una retta del piano.

D: Quale di queste matrici è diagonalizzabile su $\C$ ma **non** su $\R$?
+ $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$
= Il polinomio della prima è $\lambda^2 + 1$, con radici $\pm i$ diverse: diagonalizzabile sui complessi, e sui reali manca la condizione 1. La più insidiosa è la seconda, che non è diagonalizzabile sui reali ma nemmeno sui complessi: il suo autovalore doppio occupa un posto solo, e lo stesso vale per la quarta. La terza (autovalori 1 e 2) e la quinta (autovalori 1 e 3) lo sono su tutti e due i campi.

D: Sia $A = \begin{pmatrix} k & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}$ con $k \in \C$. Per quali $k$ la matrice è diagonalizzabile su $\C$?
+ Per ogni $k \in \C$.
- Per ogni $k \neq \pm i$.
- Per nessun $k$.
- Solo per $k \in \R$.
- Solo per $k = 0$.
= Il polinomio è $(k - \lambda)(\lambda^2 + 1)$: autovalori $k$, $i$ e $-i$. Se $k$ è diverso da $\pm i$ sono tutti diversi. Se $k = i$, l'autovalore $i$ prenota due posti, e $A - iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & -i & -1 \\ 0 & 1 & -i \end{pmatrix}$ ha rango 1, perché la seconda riga è la terza per $-i$: occupa due posti, diagonalizzabile. Lo stesso per $k = -i$. La risposta più insidiosa è «per ogni $k \neq \pm i$», che esclude i valori speciali senza calcolare il rango. Simile ai problemi 11 degli appelli del 10/06/2024 e del 03/06/2026, dove però per $k = i$ il rango era 2 e la matrice non era diagonalizzabile: nei valori speciali bisogna sempre calcolare.

D: Sia $A \in M(4, \R)$ con $\rk(A - 3I_4) = 1$. Quale affermazione è necessariamente vera?
+ $3$ è un autovalore con $m_a(3) \ge 3$.
- $A$ è diagonalizzabile.
- $A$ non è invertibile.
- $m_g(3) = 1$.
- $3$ non è un autovalore.
= La molteplicità geometrica è $4 - 1 = 3$, e quella algebrica è almeno altrettanto, per il Teorema 18.9. Non segue altro. La risposta più insidiosa è «diagonalizzabile»: $\mathrm{diag}(3, 3, 3, 5)$ lo è, ed è anche invertibile. Ma prendi $3I_4$ con un 1 al posto $(3, 4)$: anche lì $A - 3I_4$ ha rango 1, e il 3 prenota quattro posti e ne occupa tre. Quella matrice non è diagonalizzabile.
```

## Esercizi

::: esercizio base Riscaldamento: autovalori diversi
Stabilisci se $A = \begin{pmatrix} 2 & 5 \\ 0 & -1 \end{pmatrix}$ è diagonalizzabile e trova un autovettore per ogni autovalore.
::: soluzione
1. È triangolare: gli autovalori sono 2 e $-1$, diversi. Quindi è diagonalizzabile (Corollario 18.2).
2. Per 2: $A - 2I_2 = \begin{pmatrix} 0 & 5 \\ 0 & -3 \end{pmatrix}$ dà $y = 0$. Autovettore $(1, 0)$.
3. Per $-1$: $A + I_2 = \begin{pmatrix} 3 & 5 \\ 0 & 0 \end{pmatrix}$ dà $3x + 5y = 0$. Autovettore $(5, -3)$.

Controllo: $A(5, -3) = (10 - 15,\ 3) = (-5, 3) = -1 \cdot (5, -3)$.
:::

::: esercizio base Riscaldamento: leggere i posti prenotati
Una matrice ha polinomio caratteristico $(\lambda - 2)^3(\lambda + 1)(\lambda - 4)^2$. Quanto è grande? Quali sono le molteplicità algebriche? Che cosa sai già delle molteplicità geometriche?
::: soluzione
1. Il grado è $3 + 1 + 2 = 6$: la matrice è $6 \times 6$.
2. $m_a(2) = 3$, $m_a(-1) = 1$, $m_a(4) = 2$.
3. Per il Teorema 18.9: $m_g(-1) = 1$ sicuramente; $m_g(2)$ è 1, 2 o 3; $m_g(4)$ è 1 o 2. Per decidere servono i ranghi.
:::

::: esercizio base Riscaldamento: posti occupati con il rango
Per $A = \begin{pmatrix} 3 & 1 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ calcola $m_a(3)$ e $m_g(3)$. È diagonalizzabile?
::: soluzione
1. È triangolare con 3 tre volte sulla diagonale: $m_a(3) = 3$.
2. $A - 3I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ ha rango 1, quindi $m_g(3) = 3 - 1 = 2$.
3. Il 3 prenota tre posti e ne occupa due: **non** è diagonalizzabile.
:::

::: esercizio base Riscaldamento: è un autovettore?
Sia $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$. Quali tra $(1, 1)$, $(1, -1)$ e $(1, 0)$ sono autovettori, e di quale autovalore?
::: soluzione
1. $A(1, 1) = (3, 3) = 3 \cdot (1, 1)$: autovettore di autovalore 3.
2. $A(1, -1) = (1 - 2,\ 2 - 1) = (-1, 1) = -1 \cdot (1, -1)$: autovettore di autovalore $-1$.
3. $A(1, 0) = (1, 2)$, che non è un multiplo di $(1, 0)$: non è un autovettore.

I due autovettori hanno autovalori diversi, quindi sono una base: $A$ è diagonalizzabile.
:::

::: esercizio base Un autovalore doppio con una sola retta di autovettori
Stabilisci se $A = \begin{pmatrix} 5 & -1 \\ 1 & 3 \end{pmatrix}$ è diagonalizzabile.
::: soluzione
La traccia è 8 e il determinante $15 + 1 = 16$, quindi $p_A(\lambda) = \lambda^2 - 8\lambda + 16 = (\lambda - 4)^2$: un solo autovalore, 4, che prenota due posti.

$A - 4I_2 = \begin{pmatrix} 1 & -1 \\ 1 & -1 \end{pmatrix}$ ha rango 1, perché le righe sono uguali. Quindi $m_g(4) = 2 - 1 = 1$, meno di 2: non è diagonalizzabile. Gli autovettori sono i multipli non nulli di $(1, 1)$.

Un'altra via: se fosse diagonalizzabile con l'unico autovalore 4, sarebbe simile a $4I_2$, e quindi uguale a $4I_2$ (esercizio 14). Ma $A$ non è $4I_2$.
:::

::: esercizio medio Esercizio 18.13 delle dispense: autospazi e base di autovettori
Consideriamo la matrice $A = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.
(1) Calcolare il polinomio caratteristico di $A$ e determinare gli autovalori.
(2) Trovare gli autospazi corrispondenti.
(3) Calcolare la molteplicità algebrica e geometrica di ogni autovalore.
(4) Stabilire se $A$ è diagonalizzabile.
(5) In caso affermativo, trovare una base di $\R^3$ formata da autovettori.
::: soluzione
(1) $A$ è triangolare, quindi $p_A(\lambda) = (2 - \lambda)(3 - \lambda)^2$. Autovalori: 2 e 3.

(2) Per 2: $A - 2I_3 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$. Dalla terza riga $z = 0$, dalla seconda $y = 0$; $x$ è libera. $V_2 = \Span\big((1, 0, 0)\big)$.

Per 3: $A - 3I_3 = \begin{pmatrix} -1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$. Una sola equazione, $-x + y + z = 0$, cioè $x = y + z$. Con $(y, z) = (1, 0)$ e $(0, 1)$: $V_3 = \Span\big((1, 1, 0), (1, 0, 1)\big)$.

(3) $m_a(2) = 1 = m_g(2)$. $m_a(3) = 2$ e $m_g(3) = 3 - \rk(A - 3I_3) = 3 - 1 = 2$.

(4) Tutte le radici sono reali e ogni autovalore occupa tutti i suoi posti: per il Teorema 18.10 $A$ è diagonalizzabile.

(5) $\mathcal B = \{(1, 0, 0), (1, 1, 0), (1, 0, 1)\}$. Controllo: $A(1, 1, 0) = (3, 3, 0)$ e $A(1, 0, 1) = (3, 0, 3)$. Con $M$ che ha questi vettori in colonna (determinante 1) e $D = \mathrm{diag}(2, 3, 3)$ vale $AM = MD$.
:::

::: esercizio medio Esercizio 18.14 delle dispense: stesso polinomio, comportamento diverso
Consideriamo le due matrici $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$.
(1) Verificare che $A$ e $B$ hanno lo stesso polinomio caratteristico.
(2) Calcolare la molteplicità geometrica dell'autovalore 1 per entrambe le matrici.
(3) Stabilire quale delle due matrici è diagonalizzabile.
::: soluzione
(1) Tutte e due sono triangolari con diagonale $1, 1, 2$: il polinomio è $(1 - \lambda)^2(2 - \lambda)$ per entrambe.

(2) $A - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ ha rango 1: per $A$, $m_g(1) = 3 - 1 = 2$. $B - I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ ha rango 2: per $B$, $m_g(1) = 3 - 2 = 1$.

(3) In tutte e due l'1 prenota due posti. In $A$ li occupa tutti e due ($A$ è già diagonale). In $B$ ne occupa uno solo, quindi $B$ **non** è diagonalizzabile.

Conseguenza: $A$ e $B$ **non sono simili**, anche se hanno lo stesso polinomio caratteristico, quindi stessi autovalori, traccia e determinante. Se lo fossero, $B$ sarebbe simile a una matrice diagonale, cioè diagonalizzabile. Il polinomio caratteristico non basta a riconoscere le matrici simili.
:::

::: esercizio medio Un autovalore doppio che va bene: trova $M$ e $D$
Sia $A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 3 & 0 \\ -2 & 0 & 3 \end{pmatrix}$. Mostra che è diagonalizzabile e trova $M$ e $D$ con $D = M^{-1}AM$.
::: soluzione
$A$ è triangolare: $p_A(\lambda) = (1 - \lambda)(3 - \lambda)^2$. Autovalori 1 (un posto) e 3 (due posti).

$A - 3I_3 = \begin{pmatrix} -2 & 0 & 0 \\ 2 & 0 & 0 \\ -2 & 0 & 0 \end{pmatrix}$: tutte le righe sono multiple di $(1, 0, 0)$, rango 1, quindi $m_g(3) = 2 = m_a(3)$. $A$ è diagonalizzabile. L'unica equazione è $x = 0$: $V_3 = \Span(e_2, e_3)$.

$A - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 2 & 2 & 0 \\ -2 & 0 & 2 \end{pmatrix}$: $x + y = 0$ e $-x + z = 0$, cioè $y = -x$ e $z = x$. $V_1 = \Span\big((1, -1, 1)\big)$.

$$M = \begin{pmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$
Il determinante di $M$ è 1. Controllo $AM = MD$: $A(1, -1, 1) = (1,\ 2 - 3,\ -2 + 3) = (1, -1, 1)$, $Ae_2 = (0, 3, 0)$, $Ae_3 = (0, 0, 3)$.
:::

::: esercizio medio Un parametro fuori dalla diagonale (foglio 3 del tutorato, esercizio 7)
Determina per quali $k \in \R$ la matrice $A = \begin{pmatrix} 1 & 1 & k \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$ è diagonalizzabile.
::: soluzione
Sviluppo $\det(A - \lambda I_3)$ lungo la prima colonna, $(1 - \lambda, 0, 0)$:
$$p_A(\lambda) = (1 - \lambda)\det\begin{pmatrix} 1 - \lambda & 0 \\ 1 & 2 - \lambda \end{pmatrix} = (1 - \lambda)^2(2 - \lambda).$$
Gli autovalori non dipendono da $k$: 1 prenota due posti, 2 uno. Tutto si decide su $m_g(1)$:
$$A - I_3 = \begin{pmatrix} 0 & 1 & k \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}.$$
Le righe non nulle sono $(0, 1, k)$ e $(0, 1, 1)$: sono proporzionali, anzi uguali, solo se $k = 1$. Quindi il rango è 1 se $k = 1$, e 2 altrimenti.

- $k = 1$: $m_g(1) = 2 = m_a(1)$, **diagonalizzabile**. Gli autospazi sono $V_1 = \Span\big((1, 0, 0), (0, -1, 1)\big)$ e $V_2 = \Span\big((1, 0, 1)\big)$.
- $k \neq 1$: $m_g(1) = 1$, meno di 2, non diagonalizzabile.

$A$ è diagonalizzabile esattamente quando $k = 1$.
:::

::: esercizio medio La trasposizione come endomorfismo (foglio 3 del tutorato, esercizio 8.1)
Sia $T : M(2, \R) \to M(2, \R)$, $T(A) = {}^tA$. Trova autovalori e autospazi e stabilisci se $T$ è diagonalizzabile.
::: soluzione
Uso la base $E_{11}, E_{12}, E_{21}, E_{22}$, dove $E_{ij}$ ha un 1 al posto $(i, j)$ e zeri altrove. La trasposta scambia solo $E_{12}$ ed $E_{21}$, quindi
$$[T] = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}, \qquad p_T(\lambda) = (1 - \lambda)^2(\lambda^2 - 1) = (\lambda - 1)^3(\lambda + 1).$$
Il blocco centrale $\begin{pmatrix} -\lambda & 1 \\ 1 & -\lambda \end{pmatrix}$ ha determinante $\lambda^2 - 1$.

Senza conti, dall'equazione ${}^tA = \lambda A$:
- $\lambda = 1$: ${}^tA = A$, le matrici **simmetriche**. $V_1 = \Span\left(\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right)$, dimensione 3.
- $\lambda = -1$: ${}^tA = -A$, le matrici **antisimmetriche**. $V_{-1} = \Span\left(\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\right)$, dimensione 1.

Ogni autovalore occupa tutti i posti che prenota: $T$ è diagonalizzabile, e nella base formata da queste quattro matrici $[T] = \mathrm{diag}(1, 1, 1, -1)$ (è l'Esempio 5.1.14 del libro di Martelli). In particolare ogni matrice $2 \times 2$ è in un solo modo somma di una simmetrica e di una antisimmetrica: $M(2, \R) = V_1 \oplus V_{-1}$.
:::

::: esercizio medio Un endomorfismo di $\R_2[x]$ con autovalori complessi (foglio 3 del tutorato, esercizio 8.2)
Sia $T : \R_2[x] \to \R_2[x]$, $T(p) = p(0) + p(1)\,x + p(-1)\,x^2$. Trova gli autovalori reali e i relativi autovettori. $T$ è diagonalizzabile?
::: soluzione
Nella base $\{1, x, x^2\}$: $T(1) = 1 + x + x^2$, $T(x) = 0 + x - x^2$, $T(x^2) = 0 + x + x^2$, quindi
$$[T] = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & -1 & 1 \end{pmatrix}.$$
Sviluppo lungo la prima riga, $(1 - \lambda, 0, 0)$:
$$p_T(\lambda) = (1 - \lambda)\det\begin{pmatrix} 1 - \lambda & 1 \\ -1 & 1 - \lambda \end{pmatrix} = (1 - \lambda)\big((1 - \lambda)^2 + 1\big).$$
Il secondo fattore non è mai zero sui reali, perché è almeno 1: le sue radici sono $1 \pm i$. L'unico autovalore reale è 1.

$[T] - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 0 & 1 \\ 1 & -1 & 0 \end{pmatrix}$ dà, con le coordinate $x, y, z$, le equazioni $x + z = 0$ e $x - y = 0$. Soluzione $(1, 1, -1)$: il polinomio $1 + x - x^2$. Controllo: con $p = 1 + x - x^2$ viene $p(0) = 1$, $p(1) = 1$, $p(-1) = 1 - 1 - 1 = -1$, e $T(p) = 1 + x - x^2 = p$.

$T$ **non** è diagonalizzabile sui reali: manca la condizione 1 del Teorema 18.10.
:::

::: esercizio esame Come all'esame: un parametro reale
Si consideri la matrice $A = \begin{pmatrix} k & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$ con $k \in \R$.
(1) Calcolare gli autovalori di $A$ al variare di $k$.
(2) Determinare per quali valori di $k$ la matrice è diagonalizzabile.
(3) Per $k = 0$, trovare $M$ invertibile e $D$ diagonale con $D = M^{-1}AM$.
::: soluzione
(1) Sviluppo $\det(A - \lambda I_3)$ lungo la prima colonna, $(k - \lambda, 0, 0)$:
$$p_A(\lambda) = (k - \lambda)\det\begin{pmatrix} 1 - \lambda & 0 \\ 1 & 2 - \lambda \end{pmatrix} = (k - \lambda)(1 - \lambda)(2 - \lambda).$$
Autovalori: $k$, 1 e 2.

(2) Sono tutti reali. Se $k$ è diverso da 1 e da 2 sono diversi: diagonalizzabile. I valori speciali:
- $k = 1$: l'1 prenota due posti. $A - I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ ha le righe non nulle $(0, 1, 0)$ e $(0, 1, 1)$, indipendenti: rango 2, $m_g(1) = 1$. **Non** diagonalizzabile.
- $k = 2$: il 2 prenota due posti. $A - 2I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ ha tutte le righe multiple di $(0, 1, 0)$: rango 1, $m_g(2) = 2$. Diagonalizzabile.

Conclusione: $A$ è diagonalizzabile esattamente quando $k$ è diverso da 1.

(3) Con $k = 0$ gli autovalori sono 0, 1 e 2.
- Per 0: $A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$ dà $y = 0$, poi $2z = 0$; $x$ è libera. Autovettore $(1, 0, 0)$.
- Per 1: $A - I_3 = \begin{pmatrix} -1 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ dà $y = x$ e $z = -y$. Autovettore $(1, 1, -1)$.
- Per 2: $A - 2I_3 = \begin{pmatrix} -2 & 1 & 0 \\ 0 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ dà $y = 0$, poi $x = 0$; $z$ è libera. Autovettore $(0, 0, 1)$.

$$M = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & -1 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}.$$
Il determinante di $M$ è 1. Controllo $AM = MD$: $A(1, 0, 0) = (0, 0, 0)$, $A(1, 1, -1) = (1, 1, -1)$, $A(0, 0, 1) = (0, 0, 2)$.
:::

::: esercizio esame Come all'esame: un parametro complesso
Si consideri $A = \begin{pmatrix} k & 0 & 0 \\ 1 & 0 & -4 \\ 0 & 1 & 0 \end{pmatrix} \in M(3, \C)$ con $k \in \C$.
(1) Posto $k = 2i$, calcolare gli autovalori con molteplicità algebrica e geometrica e una base di ogni autospazio. $A$ è diagonalizzabile?
(2) Determinare per quali $k \in \C$ la matrice è diagonalizzabile su $\C$. E su $\R$, per $k$ reale?
::: soluzione
Il polinomio caratteristico, sviluppando lungo la prima riga $(k - \lambda, 0, 0)$:
$$p_A(\lambda) = (k - \lambda)\det\begin{pmatrix} -\lambda & -4 \\ 1 & -\lambda \end{pmatrix} = (k - \lambda)(\lambda^2 + 4).$$
Da $\lambda^2 = -4$ vengono $\lambda = \pm 2i$. Autovalori: $k$, $2i$ e $-2i$.

(1) Con $k = 2i$: l'autovalore $2i$ prenota due posti e $-2i$ uno solo, quindi $m_g(-2i) = 1$.
$$A - 2iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & -2i & -4 \\ 0 & 1 & -2i \end{pmatrix}.$$
Le righe $(1, -2i, -4)$ e $(0, 1, -2i)$ sono indipendenti: la seconda ha 0 al primo posto, la prima no. Rango 2, quindi $m_g(2i) = 3 - 2 = 1$, meno di 2. **Non** diagonalizzabile.

Le basi. Dalla terza riga $y = 2iz$; dalla seconda $x = 2iy + 4z = 2i \cdot 2iz + 4z = -4z + 4z = 0$. Con $z = 1$: $V_{2i} = \Span\big((0, 2i, 1)\big)$. Per $-2i$: $A + 2iI_3 = \begin{pmatrix} 4i & 0 & 0 \\ 1 & 2i & -4 \\ 0 & 1 & 2i \end{pmatrix}$ dà $x = 0$ e $y = -2iz$; la seconda riga torna, perché $2i \cdot (-2i) - 4 = 4 - 4 = 0$. $V_{-2i} = \Span\big((0, -2i, 1)\big)$. Controllo: $A(0, 2i, 1) = (0,\ -4,\ 2i) = 2i\,(0, 2i, 1)$.

(2) Sui complessi la condizione 1 vale sempre. Se $k$ è diverso da $\pm 2i$, gli autovalori sono diversi: diagonalizzabile. Per $k = 2i$ no, per il punto (1). Per $k = -2i$, con lo stesso conto, $A + 2iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 2i & -4 \\ 0 & 1 & 2i \end{pmatrix}$ ha rango 2 e $m_g(-2i) = 1$: no. Quindi è diagonalizzabile sui complessi esattamente quando $k$ è diverso da $\pm 2i$.

Sui reali, con $k$ reale, **mai**: il fattore $\lambda^2 + 4$ non ha radici reali. Confronta con la domanda 9 del quiz: lì, nel valore speciale, la matrice era diagonalizzabile. La differenza è l'1 al posto $(2, 1)$, che qui c'è e nel quiz no. Senza di lui la seconda riga di $A - 2iI_3$ sarebbe $(0, -2i, -4) = -2i \cdot (0, 1, -2i)$: il rango scenderebbe a 1 e $m_g(2i)$ salirebbe a 2.
:::

::: esercizio difficile Un solo autovalore e diagonalizzabile: allora è $\lambda I$
(a) Dimostra che se $A \in M(n, \K)$ ha un solo autovalore $\lambda$ ed è diagonalizzabile, allora $A = \lambda I_n$. (b) Deduci in una riga che $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ non è diagonalizzabile.
::: soluzione
(a) Se $A$ è diagonalizzabile, $M^{-1}AM = D$ con $D$ diagonale. Sulla diagonale di $D$ ci sono gli autovalori, quindi solo $\lambda$: $D = \lambda I_n$. Allora
$$A = MDM^{-1} = M(\lambda I_n)M^{-1} = \lambda MM^{-1} = \lambda I_n.$$
Un altro modo: $m_g(\lambda) = m_a(\lambda) = n$, quindi l'autospazio è tutto lo spazio e $Av = \lambda v$ per ogni $v$.

(b) Ha il solo autovalore 1 e non è $I_2$: se fosse diagonalizzabile sarebbe $I_2$.
:::

::: esercizio difficile Due autospazi hanno intersezione nulla
Siano $\lambda \neq \mu$ due autovalori di $T$. (a) Dimostra direttamente che $V_\lambda \cap V_\mu = \{0\}$. (b) Deduci che $V_\lambda$ e $V_\mu$ sono in somma diretta. (c) Perché con tre autospazi non basta controllare le intersezioni a due a due?
::: soluzione
(a) Se $v$ sta in tutti e due gli autospazi, allora $T(v) = \lambda v$ e $T(v) = \mu v$. Togliendo, $(\lambda - \mu)v = 0$. Siccome $\lambda - \mu$ non è zero, $v = 0$.

(b) Se $v_1 + v_2 = 0$ con $v_1$ nel primo autospazio e $v_2$ nel secondo, allora $v_1 = -v_2$ sta in tutti e due, perché un autospazio contiene gli opposti dei suoi vettori. Per il punto (a) $v_1 = 0$, e poi $v_2 = 0$. È la forma equivalente della Definizione 18.4.

(c) Per tre sottospazi le intersezioni a due a due possono essere nulle senza che la somma sia diretta. Le rette $\Span(e_1)$, $\Span(e_2)$ e $\Span(e_1 + e_2)$ dello spazio si incontrano a due a due solo nello zero, ma $e_1 + e_2 - (e_1 + e_2) = 0$. Per gli autospazi la somma è comunque diretta, ma serve la Proposizione 18.1, con la sua induzione, non solo il punto (a).
:::

## Domande di ripasso

::: domanda Perché autovettori con autovalori diversi sono indipendenti?
Da una ricetta che dà zero si applica la macchina e si toglie $\lambda_k$ volte la ricetta: sparisce $v_k$ e restano dosi $\alpha_i(\lambda_i - \lambda_k)$ su $k - 1$ autovettori. Per induzione sono zero, e siccome $\lambda_i$ è diverso da $\lambda_k$ tutti gli $\alpha_i$ sono zero (Proposizione 18.1).
:::

::: domanda Che cosa dice il Corollario 18.2, e vale il contrario?
Se il polinomio caratteristico ha $n$ radici diverse nel campo, la macchina è diagonalizzabile. Il contrario è falso: la matrice identità è diagonale e ha un solo autovalore.
:::

::: domanda Che cos'è l'autospazio $V_\lambda$? Perché è un sottospazio?
È l'insieme dei vettori che la macchina allunga di $\lambda$, più lo zero: il nucleo di $T - \lambda\,\id$. È un nucleo, quindi un sottospazio.
:::

::: domanda Quando una somma di sottospazi è diretta?
Quando ogni vettore della somma si scrive in un solo modo come somma di un pezzo per sottospazio. Basta controllarlo sullo zero: l'unico modo di ottenere zero è con tutti i pezzi uguali a zero.
:::

::: domanda Che legame c'è tra autospazi e diagonalizzabilità?
Gli autospazi sono sempre in somma diretta (Proposizione 18.5). La macchina è diagonalizzabile esattamente quando la loro somma è tutto lo spazio, cioè quando le loro dimensioni sommano a $n$ (Corollario 18.6).
:::

::: domanda Che differenza c'è tra molteplicità algebrica e geometrica? Come si calcolano?
La algebrica conta quante volte l'autovalore è radice del polinomio caratteristico: i posti prenotati sulla diagonale. Si legge dal polinomio scomposto. La geometrica è la dimensione dell'autospazio: i posti occupati. Si calcola come $n - \rk(A - \lambda I_n)$.
:::

::: domanda Che cosa dice il Teorema 18.9? Che conseguenza pratica ha?
$1 \le m_g \le m_a$: un autovalore occupa almeno un posto e mai più di quelli prenotati. Quindi per un autovalore semplice $m_g = 1$ subito, e il rango va calcolato solo per gli autovalori multipli.
:::

::: domanda Enuncia il teorema di diagonalizzabilità.
Una macchina su uno spazio di dimensione $n$ è diagonalizzabile esattamente quando valgono due cose. (1) Il polinomio caratteristico ha $n$ radici nel campo, contate con molteplicità. (2) Per ogni autovalore la molteplicità algebrica è uguale a quella geometrica.
:::

::: domanda Perché la stessa matrice può essere diagonalizzabile sui complessi e non sui reali?
Perché la condizione 1 dipende dal campo: $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ ha polinomio $\lambda^2 + 1$, senza radici reali ma con due radici complesse diverse, $\pm i$.
:::

::: domanda Come si affronta una matrice con un parametro $k$?
Si scrive il polinomio caratteristico scomposto in funzione di $k$ e si trovano gli autovalori. Si cercano i $k$ in cui due autovalori coincidono e, sui reali, quelli in cui mancano radici reali. Per gli altri $k$ la matrice è diagonalizzabile; nei valori speciali si mette $k$ nella matrice e si calcola $m_g = n - \rk(A - \lambda I_n)$.
:::

::: domanda Nell'Esempio 18.12, perché per $k = 1$ la matrice è diagonalizzabile e per $k = 5$ no?
Per $k = 1$ l'autovalore 2 prenota due posti e $A - 2I_3$ ha rango 1, quindi li occupa tutti e due. Per $k = 5$ l'autovalore 0 prenota due posti ma $A$ ha rango 2, quindi ne occupa uno solo.
:::

::: domanda Due matrici con lo stesso polinomio caratteristico sono simili?
Non sempre: $\mathrm{diag}(1, 1, 2)$ e $\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ hanno lo stesso polinomio, ma la prima è diagonalizzabile e la seconda no (Esercizio 18.14).
:::

## Glossario

```glossario
Autovettori indipendenti | Autovettori con autovalori diversi sono sempre indipendenti (Proposizione 18.1).
Criterio degli autovalori distinti | $n$ radici diverse del polinomio caratteristico nel campo: diagonalizzabile (Corollario 18.2). Il contrario non vale.
Autospazio $V_\lambda$ | I vettori allungati di $\lambda$, più lo zero: il nucleo di $T - \lambda\,\id$ (Definizione 18.3).
Somma di sottospazi | $V_1 + \dots + V_k$: tutte le somme di un vettore per ogni sottospazio.
Somma diretta $\oplus$ | Una somma in cui ogni vettore si scompone in un modo solo; basta che lo zero si ottenga solo con tutti i pezzi nulli (Definizione 18.4).
Molteplicità di una radice | Quante volte il fattore $(x - a)$ compare nel polinomio (Definizione 4.3).
Molteplicità algebrica $m_a(\lambda)$ | Quante volte $\lambda$ è radice del polinomio caratteristico: i posti prenotati sulla diagonale.
Molteplicità geometrica $m_g(\lambda)$ | La dimensione dell'autospazio, $n - \rk(A - \lambda I_n)$: i posti occupati.
Autovalore semplice | Un autovalore con $m_a = 1$; allora anche $m_g = 1$.
Disuguaglianze delle molteplicità | $1 \le m_g(\lambda) \le m_a(\lambda)$ (Teorema 18.9).
Teorema di diagonalizzabilità | Diagonalizzabile esattamente quando tutte le radici sono nel campo e ogni autovalore ha $m_a = m_g$ (Teorema 18.10).
Taglio (shear) | $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: un autovalore doppio con una sola retta di autovettori; non diagonalizzabile.
Valore speciale del parametro | Un valore di $k$ in cui due autovalori coincidono: lì si decide calcolando un rango.
Campo degli scalari | Reali o complessi: la diagonalizzabilità dipende dal campo, perché sui reali possono mancare radici.
Base di autovettori | Le basi degli autospazi messe insieme; esiste esattamente quando la macchina è diagonalizzabile.
```

## Checklist

```checklist
- So dimostrare che due autovettori con autovalori diversi sono indipendenti, e so enunciare il caso generale.
- So usare il criterio «$n$ autovalori diversi: diagonalizzabile» e so che il contrario è falso.
- So trovare una base dell'autospazio risolvendo $(A - \lambda I)x = 0$.
- So che cos'è una somma diretta e perché gli autospazi sono sempre in somma diretta.
- So leggere $m_a$ dal polinomio scomposto e calcolare $m_g = n - \rk(A - \lambda I)$.
- So che $1 \le m_g \le m_a$, e quindi calcolo il rango solo per gli autovalori multipli.
- So enunciare il teorema di diagonalizzabilità e applicarlo passo per passo, sui reali e sui complessi.
- So risolvere un problema con parametro: autovalori in funzione di $k$, valori speciali, ranghi, conclusione.
- So costruire una base di autovettori, $M$ e $D$, e controllare con $AM = MD$.
- So spiegare perché matrici con lo stesso polinomio caratteristico possono non essere simili.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 18 «Autovalori e autovettori II», pp. 90–95: le sezioni 18.A (autovettori con autovalori distinti), 18.B (autospazio), 18.C (molteplicità) e 18.D (teorema di diagonalizzabilità) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Proposizioni 18.1, 18.5; Corollari 18.2, 18.6; Definizioni 18.3, 18.4, 18.7; Teoremi 18.9, 18.10; Esempi 18.8, 18.11, 18.12); gli Esercizi 18.13 e 18.14 della sezione 18.E sono svolti come esercizi 6 e 7.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §5.1.7 (riepilogo degli esempi $2 \times 2$ sui reali e sui complessi), §5.2.1–5.2.6 (autovettori con autovalori distinti, autospazi, molteplicità con la dimostrazione completa del Teorema 18.9, teorema di diagonalizzabilità ed esempi), Esempio 5.1.14 (la trasposizione).
- **Esame**: problemi 11 degli appelli del 24/01/2024, 08/02/2024, 10/06/2024, 06/09/2024, 16/01/2025, 03/06/2025, 10/07/2025, 03/06/2026; domande 9 del 24/01/2024, 6 del 10/06/2024, 8 del 10/07/2024, 9 del 07/02/2025, 6 del 02/09/2025, 9 del 05/02/2026; foglio 3 del tutorato 2025/26 (esercizi 7–10). Testi e soluzioni ufficiali sul Moodle 2025/26 ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); le soluzioni riportate qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (la dimostrazione completa del Teorema 18.9, la tabella dei quattro comportamenti, la matrice sui complessi, gli esempi e gli esercizi aggiunti) servono a collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
