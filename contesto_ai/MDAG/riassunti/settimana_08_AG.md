---
corso: MDAG
modulo: AG
lezione: S8
tipo: riassunto
titolo: "Settimana 8: autovalori, diagonalizzazione, prodotti scalari"
data: 2026-11-19
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Riassunto settimanale · Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · 16/11 – 20/11/2026
descrizione: >-
  Riassunto della settimana 8 di Algebra lineare e Geometria (MDAG, parte 2): autovalori e autovettori, il polinomio
  caratteristico, la diagonalizzazione; autospazi, molteplicità algebrica e geometrica e il teorema di
  diagonalizzabilità; prodotti scalari, matrici simmetriche e matrice associata a un prodotto scalare.
lede: >-
  Le tre lezioni della settimana in poche pagine: come si trovano le direzioni che una matrice non gira, quando
  bastano per fare una base, e come si riassume in una tabella un prodotto tra vettori, con le domande vere degli
  appelli.
materiale: dispense
scheda:
  Lezioni: "[L17](L17_autovalori_autovettori_1.html) mar 17/11 · [L18](L18_autovalori_autovettori_2.html) mer 18/11 · [L19](L19_prodotti_scalari_1.html) gio 19/11, nel canale B"
  Dispense: Buzano e Radeschi 2026, pp. 85–99
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti delle lezioni L17, L18 e L19 di Algebra lineare e Geometria, scritti sulle dispense 2026 del corso
  (R. Buzano, M. Radeschi)
appunti_html: appunti/MDAG/riassunto_settimana_08_AG.html
genera_html: true
---

## In breve

- Un **autovettore** di una matrice è un vettore non nullo che la matrice manda in un suo multiplo. Il fattore è l'**autovalore**.
- Gli autovalori sono le radici del **polinomio caratteristico**, il determinante della matrice con $\lambda$ tolto dalla diagonale.
- Una matrice è **diagonalizzabile** se c'è una base fatta di autovettori. In quella base diventa diagonale, con gli autovalori sulla diagonale.
- L'**autospazio** di un autovalore è l'insieme dei suoi autovettori, con lo zero: è il nucleo della matrice con quell'autovalore tolto dalla diagonale.
- Ogni autovalore ha una **molteplicità algebrica**, quante volte è radice, e una **geometrica**, la dimensione dell'autospazio. La seconda non supera la prima.
- **Teorema**: diagonalizzabile vuol dire tutte le radici nel campo, e le due molteplicità uguali per ogni autovalore.
- Un **prodotto scalare** prende due vettori e dà un numero, in modo lineare e simmetrico. In una base si riassume nella **matrice associata**, che è simmetrica.

> [!NOTA] Le lezioni della settimana
> Nel canale B le lezioni sono state tre: martedì 17/11, mercoledì 18/11 e giovedì 19/11. Le dispense hanno una lezione per incontro, e ho messo le date seguendo il calendario: che in aula il ritmo sia rimasto quello non l'ho controllato.

## L17 · Autovalori e autovettori (mar 17/11)

Una matrice trasforma vettori in vettori, e quasi sempre li fa girare. Le direzioni che non girano sono quelle che servono.

Prendi $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Il vettore $(1, 0)$ va in $(2, 1)$: ha cambiato direzione. Il vettore $(1, 1)$ va in $(3, 3)$, tre volte sé stesso. Il vettore $(1, -1)$ va in $(1, -1)$: resta fermo.

```grafico
titolo: Che cosa fa la matrice A a tre vettori. I vettori tratteggiati sono quelli di partenza, quelli pieni le loro immagini. Il vettore blu viene girato. Quello verde viene allungato tre volte sulla sua retta, quello ambra resta com'è: sono i due autovettori
x: -1 4
y: -2 4
freccia: 0 0 1 0 | blu | tratteggio
freccia: 0 0 2 1 | blu
freccia: 0 0 1 1 | verde | tratteggio
freccia: 0 0 3 3 | verde
freccia: 0 0 1 -1 | ambra
testo: 2.5 0.75 | blu | "girato"
testo: 2.2 3.3 | verde | "per 3"
testo: 1.9 -1.3 | ambra | "per 1"
```

- **Definizione.** $v \ne 0$ è un autovettore di $A$ con autovalore $\lambda$ se $Av = \lambda v$. L'autovalore può essere 0; l'autovettore no.
- **Multipli.** Ogni multiplo non nullo di un autovettore è un autovettore con lo stesso autovalore: conta la retta, non il singolo vettore.
- **Le rotazioni** girano tutto: sui reali non hanno autovettori.
- **Polinomio caratteristico.** $p(\lambda) = \det(A - \lambda I)$. Gli autovalori sono le sue radici. Per l'esempio: $(2 - \lambda)^2 - 1 = (\lambda - 1)(\lambda - 3)$, radici 1 e 3.
- **Matrici triangolari**: gli autovalori sono i numeri sulla diagonale.
- **Gli autovettori.** Per ogni autovalore si risolve $(A - \lambda I)v = 0$. Per $\lambda = 3$: $-x + y = 0$, cioè i multipli di $(1, 1)$.
- **Diagonalizzare.** Con gli autovettori nelle colonne di $M$, vale $M^{-1}AM = D$, diagonale, con gli autovalori **nello stesso ordine** delle colonne.
- **Potenze.** $A^k = M D^k M^{-1}$, e la potenza di una diagonale si fa numero per numero. Per l'esempio, $A^5 = \begin{pmatrix} 122 & 121 \\ 121 & 122 \end{pmatrix}$.

::: prova Trova gli autovalori di $\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ e un autovettore per il più grande.
$(4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5)$: autovalori 2 e 5. Per 5: $-x + y = 0$, quindi $(1, 1)$. Controllo: la matrice manda $(1, 1)$ in $(5, 5)$.
:::

> [!RICORDA]
> - $Av = \lambda v$ con $v \ne 0$.
> - Autovalori: radici di $\det(A - \lambda I)$.
> - Autovettori: soluzioni di $(A - \lambda I)v = 0$.
> - Diagonalizzabile: una base di autovettori.

## L18 · Quando si può diagonalizzare (mer 18/11)

Non tutte le matrici hanno abbastanza autovettori per fare una base. La lezione dice come accorgersene con due conteggi per ogni autovalore.

- **Autovalori diversi.** Autovettori con autovalori diversi sono indipendenti. Una matrice $n \times n$ con $n$ autovalori tutti diversi è diagonalizzabile. Il viceversa non vale: l'identità è diagonale e ha un solo autovalore.
- **Autospazio.** $V_\lambda = \operatorname{Ker}(A - \lambda I)$: gli autovettori di $\lambda$, più lo zero.
- **Molteplicità algebrica** $m_a$: quante volte $\lambda$ è radice del polinomio caratteristico. Sono i posti che l'autovalore **prenota** sulla diagonale.
- **Molteplicità geometrica** $m_g$: la dimensione dell'autospazio, cioè $n$ meno il rango di $A - \lambda I$. Sono i posti che riesce a **occupare**.
- Vale sempre $1 \le m_g \le m_a$. Un autovalore con $m_a = 1$ non dà mai problemi.

Due matrici con lo stesso polinomio caratteristico, $(\lambda - 3)^2(\lambda - 5)$:

```grafico
titolo: I posti sulla diagonale per due matrici con autovalori 3, due volte, e 5. Nella prima l'autovalore 3 occupa tutti e due i posti che prenota: diagonalizzabile. Nella seconda ne occupa uno solo, e un posto resta vuoto: non diagonalizzabile
x: 0 12
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
testo: 2.6 4.7 | grigio | "autospazio: dim 2"
poligono: 0.5 2.6 1.9 2.6 1.9 3.8 0.5 3.8 | verde | pieno
poligono: 1.9 2.6 3.3 2.6 3.3 3.8 1.9 3.8 | verde | pieno
poligono: 3.3 2.6 4.7 2.6 4.7 3.8 3.3 3.8 | blu | pieno
testo: 1.2 3.2 | verde | "3"
testo: 2.6 3.2 | verde | "3"
testo: 4.0 3.2 | blu | "5"
testo: 2.6 2.0 | verde | "diagonalizzabile"
testo: 9.0 4.7 | grigio | "autospazio: dim 1"
poligono: 6.9 2.6 8.3 2.6 8.3 3.8 6.9 3.8 | verde | pieno
poligono: 8.3 2.6 9.7 2.6 9.7 3.8 8.3 3.8 | rosa | tratteggio
poligono: 9.7 2.6 11.1 2.6 11.1 3.8 9.7 3.8 | blu | pieno
testo: 7.6 3.2 | verde | "3"
testo: 9.0 3.2 | rosa | "?"
testo: 10.4 3.2 | blu | "5"
testo: 9.0 2.0 | rosa | "non diagonalizzabile"
testo: 6.0 0.7 | grigio | "posti prenotati: 2 per il 3, 1 per il 5"
```

La prima è $\begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 1 & 0 & 5 \end{pmatrix}$, la seconda $\begin{pmatrix} 3 & 1 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 5 \end{pmatrix}$. Si distinguono solo calcolando il rango di $A - 3I$: 1 nella prima, 2 nella seconda.

> [!TEOREMA] Diagonalizzabilità (dispense, pp. 92–93)
> Una matrice è diagonalizzabile su un campo se e solo se il suo polinomio caratteristico ha tutte le radici in quel campo, e per ogni autovalore $m_g = m_a$.

**Come si legge.** Due controlli. Il primo riguarda il campo: la rotazione di un quarto di giro ha autovalori $i$ e $-i$, quindi è diagonalizzabile sui complessi e non sui reali. Il secondo si fa solo per gli autovalori con $m_a$ almeno 2: per gli altri è automatico.

**Con un parametro.** Si trovano gli autovalori in funzione di $k$. Per i valori di $k$ in cui sono tutti diversi la matrice è diagonalizzabile. Restano da controllare, uno per uno, i valori di $k$ in cui due autovalori coincidono: lì si calcola un rango.

::: prova La matrice $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ è diagonalizzabile?
No. L'unico autovalore è 2, con $m_a = 2$. $A - 2I$ ha rango 1, quindi $m_g = 2 - 1 = 1$: un posto resta vuoto.
:::

> [!RICORDA]
> - $n$ autovalori diversi: diagonalizzabile.
> - $m_g = n - \operatorname{rg}(A - \lambda I)$, e $1 \le m_g \le m_a$.
> - Diagonalizzabile: radici tutte nel campo e $m_g = m_a$ per ognuna.
> - Con un parametro: i casi da controllare sono quelli con autovalori coincidenti.

## L19 · Prodotti scalari (gio 19/11)

Il prodotto scalare più usato è quello del conto della spesa: quantità per prezzi, sommati. Per $(1, 3)$ e $(-2, 1)$: $1 \cdot (-2) + 3 \cdot 1 = 1$. Si chiama **prodotto euclideo**.

- **In generale** un prodotto scalare $g$ su uno spazio reale è una regola che a due vettori associa un numero, con tre proprietà: una somma si spezza, uno scalare esce, e l'ordine non conta. Cioè è lineare nei due posti e **simmetrico**.
- **Definito positivo**: $g(v, v) > 0$ per ogni $v \ne 0$. **Degenere**: c'è un $v \ne 0$ con $g(v, w) = 0$ per ogni $w$.
- **Da una matrice simmetrica.** Se $S$ è simmetrica, $g_S(x, y) = {}^t x\,S\,y$ è un prodotto scalare. Con $S$ uguale all'identità è quello euclideo.
- **Matrice associata.** Scelta una base $\mathcal B = \{v_1, \dots, v_n\}$, la matrice $[g]_{\mathcal B}$ ha nella casella $(i, j)$ il numero $g(v_i, v_j)$. È la tabella dei prodotti tra i vettori della base, ed è simmetrica.
- **In una base nuova.** Per $g_S$, con i vettori della base nelle colonne di $M$: $[g_S]_{\mathcal B} = {}^t M\,S\,M$.

Un esempio con $S = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ e la base $\{(1, 0), (1, 1)\}$, una casella alla volta:

| Casella | Conto | Valore |
|---|---|---|
| $g(v_1, v_1)$ | la casella in alto a sinistra di $S$ | 2 |
| $g(v_1, v_2)$ | $2 \cdot 1 + 1 \cdot 1$ | 3 |
| $g(v_2, v_2)$ | la somma di tutte le caselle di $S$ | 7 |

La matrice associata è $\begin{pmatrix} 2 & 3 \\ 3 & 7 \end{pmatrix}$: la casella in basso a sinistra è uguale a quella in alto a destra, per simmetria.

> [!TRAPPOLA] La trasposta, non l'inversa
> Per un prodotto scalare il cambio di base è ${}^t M\,S\,M$. Per un endomorfismo era $M^{-1}AM$, come nella [L16](L16_applicazioni_lineari_3.html). Le due formule si somigliano e nei quiz ci sono tutte e due tra le risposte.

::: prova Per il prodotto $g(p, q) = p(0)\,q(0) + p(1)\,q(1)$ sui polinomi di grado al massimo 1, calcola la matrice associata nella base $\{1, x\}$.
I valori: il polinomio 1 vale 1 in 0 e in 1; il polinomio $x$ vale 0 e 1. $g(1, 1) = 1 + 1 = 2$; $g(1, x) = 0 + 1 = 1$; $g(x, x) = 0 + 1 = 1$. La matrice è $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$.
:::

> [!RICORDA]
> - Prodotto scalare: due vettori, un numero; lineare e simmetrico.
> - Euclideo: prodotti posto per posto, sommati.
> - $[g]_{\mathcal B}$: nella casella $(i, j)$ c'è $g(v_i, v_j)$.
> - Cambio di base: ${}^t M\,S\,M$.

## Verso l'esame

- **L'insieme degli autovalori** di una matrice o di un endomorfismo: 06/09/2024, 07/02/2025, 05/02/2026, 03/07/2026.
- **L'autospazio di un autovalore dato**, spesso per un endomorfismo di $\R_2[x]$: 24/01/2024, 10/06/2024, 07/02/2025, 05/02/2026.
- **Diagonalizzabilità con un parametro**: è il problema lungo di quasi tutti gli appelli.
- **La matrice associata a un prodotto scalare** in una base: 24/01/2024, 10/06/2024, 10/07/2024, 15/01/2026, 03/06/2026.
- La prova è la stessa per i canali A, B e C: 4 facciate scritte a mano, niente calcolatrice. Appelli 2026/27: 22/01/2027 e 05/02/2027, alle 14:00.

## Domande di ripasso

::: domanda Che cos'è un autovettore, e che cos'è il suo autovalore?
Un vettore non nullo che la matrice manda in un suo multiplo. L'autovalore è il fattore.
:::

::: domanda Come si trovano gli autovalori e poi gli autovettori?
Gli autovalori sono le radici di $\det(A - \lambda I)$. Per ognuno, gli autovettori sono le soluzioni non nulle di $(A - \lambda I)v = 0$.
:::

::: domanda Che cosa vuol dire diagonalizzabile?
Che esiste una base fatta di autovettori. Con quei vettori nelle colonne di $M$, la matrice $M^{-1}AM$ è diagonale.
:::

::: domanda Che cosa sono le molteplicità algebrica e geometrica?
L'algebrica è quante volte l'autovalore è radice del polinomio caratteristico. La geometrica è la dimensione del suo autospazio.
:::

::: domanda Che cosa dice il teorema di diagonalizzabilità?
Diagonalizzabile se e solo se tutte le radici stanno nel campo e, per ogni autovalore, le due molteplicità sono uguali.
:::

::: domanda Come si calcola la matrice associata a un prodotto scalare in una base?
Una casella alla volta: nella casella $(i, j)$ va il prodotto del vettore $i$ con il vettore $j$ della base.
:::

## Quiz d'esame

Sono tutte domande vere degli appelli, che nelle lezioni L17, L18 e L19 sono solo citate. Le risposte giuste sono ricontrollate con un programma.

```quiz
D: Appello del 06/09/2024, domanda 10. Trovare l'insieme degli autovalori di $A = \begin{pmatrix} 1 & -2 & 1 \\ 0 & 1 & 0 \\ 1 & -3 & 1 \end{pmatrix}$.
+ $\{0, 1, 2\}$
- $\{1, -2, -3\}$
- $\{1\}$
- $\{\}$
- $\{0\}$
= Sviluppando lungo la seconda riga: $(1 - \lambda)\big((1 - \lambda)^2 - 1\big) = (1 - \lambda)\,\lambda\,(\lambda - 2)$. La risposta più insidiosa è $\{1\}$: sono i numeri sulla diagonale, ma la matrice non è triangolare.

D: Appello del 07/02/2025, domanda 8. Trovare l'insieme degli autovalori dell'endomorfismo di $\R^3$ dato da $T(x, y, z) = (x + 2z,\ -2x + 3y - z,\ x + 2z)$.
+ $\{0, 3\}$
- $\{-1, 2, -3\}$
- $\{-1, -3\}$
- $\{\}$
- $\{\pm 1, \pm 3\}$
= La matrice ha righe $(1, 0, 2)$, $(-2, 3, -1)$, $(1, 0, 2)$. Sviluppando lungo la seconda colonna: $(3 - \lambda)(\lambda^2 - 3\lambda) = -\lambda(\lambda - 3)^2$. Due righe uguali vogliono dire determinante zero, quindi 0 è un autovalore. La più insidiosa è $\{\}$: un endomorfismo di $\R^3$ ha sempre almeno un autovalore reale.

D: Appello del 03/07/2026, domanda 3. Trovare l'insieme degli autovalori dell'endomorfismo di $\R^3$ dato da $T(x, y, z) = (2x,\ x + 3y,\ z)$.
+ $\{1, 2, 3\}$
- $T$ non ammette autovalori reali
- $\{1, 2\}$
- $\{2, 3\}$
- $\{0, 1, 5\}$
= La matrice ha righe $(2, 0, 0)$, $(1, 3, 0)$, $(0, 0, 1)$: è triangolare, e gli autovalori sono i numeri sulla diagonale. La più insidiosa è $\{2, 3\}$: dimentica la terza coordinata, che $T$ lascia com'è.

D: Appello del 10/06/2024, domanda 6. L'endomorfismo di $\R_2[x]$ dato da $T(ax^2 + bx + c) = (2a - 9b)x^2 - bx + (6b + 2c)$ ha autovalore $\lambda = 2$. Qual è l'autospazio?
+ $\operatorname{Span}(x^2, 1)$
- $\operatorname{Span}(2x^2 - 1)$
- $\operatorname{Span}(x^2, 3x^2 + x - 2)$
- $\operatorname{Span}(x^2 - 2, x + 1)$
- $\operatorname{Span}(x - 2)$
= Serve $T(p) = 2p$. Il coefficiente di $x$ dà $-b = 2b$, quindi $b = 0$; con $b = 0$ le altre due condizioni sono sempre vere. Restano i polinomi $ax^2 + c$. La più insidiosa è $\operatorname{Span}(x^2, 3x^2 + x - 2)$: ha dimensione 2 e contiene $x^2$, ma il suo secondo polinomio ha $b = 1$.

D: Appello del 07/02/2025, domanda 9. L'endomorfismo di $\R_2[x]$ dato da $T(ax^2 + bx + c) = (2a - c)x^2 + (a - b + c)x + a$ ha autovalore $\lambda = -1$. Qual è l'autospazio?
+ $\operatorname{Span}(x)$
- $\operatorname{Span}(x, x + 1)$
- $\operatorname{Span}(x^2, x)$
- $\operatorname{Span}(2x + 1)$
- $\operatorname{Span}(x^2 + x + 1)$
= Serve $T(p) = -p$. Dal coefficiente di $x^2$: $c = 3a$. Dal termine noto: $a = -c$. Insieme danno $a = c = 0$, e $b$ resta libero. Controllo: $T(x) = -x$. La più insidiosa è $\operatorname{Span}(x^2, x)$: $T(x^2) = 2x^2 + x + 1$, che non è $-x^2$.

D: Appello del 05/02/2026, domanda 9. L'endomorfismo di $\R_2[x]$ dato da $T(ax^2 + bx + c) = (a + b - c)x^2 + (a + b + c)x + (a + 2b)$ ha autovalore $\lambda = 2$. Qual è l'autospazio?
+ $\operatorname{Span}(x + 1)$
- $\operatorname{Span}(x^2 - 1, x + 1)$
- $\operatorname{Span}(x^2 + 1, x - 1)$
- $\operatorname{Span}(x^2 + x)$
- $\operatorname{Span}(x^2 - 1)$
= Serve $T(p) = 2p$. Le prime due condizioni danno tutte e due $a = b - c$; la terza condizione, $a + 2b = 2c$, dà allora $b = c$ e $a = 0$. Controllo: $T(x + 1) = 2x + 2$. La più insidiosa è $\operatorname{Span}(x^2 - 1, x + 1)$: contiene $x + 1$, ma $T(x^2 - 1) = 2x^2 + 1$ non è il doppio di $x^2 - 1$.

D: Appello del 10/07/2024, domanda 9. Dato il prodotto scalare $g(p, q) = p(1)\,q(-1) + p(-1)\,q(1)$ su $\R_1[x]$ e la base $\mathcal B = \{x + 1, x - 1\}$, la matrice $[g]_{\mathcal B}$ è:
+ $\begin{pmatrix} 0 & -4 \\ -4 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & -4 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 4 & 2 \\ 2 & 4 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 \\ 2 & 0 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$
= Il polinomio $x + 1$ vale 2 in 1 e 0 in $-1$; $x - 1$ vale 0 in 1 e $-2$ in $-1$. Sulla diagonale viene $2 \cdot 0 + 0 \cdot 2 = 0$ in tutti e due i posti; fuori, $2 \cdot (-2) + 0 \cdot 0 = -4$. $\begin{pmatrix} 1 & -4 \\ 2 & 3 \end{pmatrix}$ si scarta senza conti: non è simmetrica. La più insidiosa è $\begin{pmatrix} 0 & 2 \\ 2 & 0 \end{pmatrix}$, con gli zeri al posto giusto e il 2 al posto di $-4$.

D: Appello del 03/06/2026, domanda 4. Data $S = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$, la matrice associata al prodotto scalare $g_S(x, y) = {}^t x\,S\,y$ rispetto alla base $\{(1, 0, 0), (0, 2, 0), (0, 0, 3)\}$ è:
+ $\begin{pmatrix} 2 & 2 & 3 \\ 2 & 4 & 0 \\ 3 & 0 & 9 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 & 1 \\ 2 & 2 & 0 \\ 3 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$
= I vettori della base sono $e_1$, $2e_2$ e $3e_3$: la casella $(i, j)$ di $S$ viene moltiplicata per i due fattori dei vettori $i$ e $j$. Sulla diagonale: $2$, $1 \cdot 4$, $1 \cdot 9$. La più insidiosa è $\begin{pmatrix} 2 & 1 & 1 \\ 2 & 2 & 0 \\ 3 & 0 & 3 \end{pmatrix}$: moltiplica solo le righe, e infatti non è simmetrica.
```

## Fonti

- Le lezioni complete: [L17 · Autovalori e autovettori I](L17_autovalori_autovettori_1.html), [L18 · Autovalori e autovettori II](L18_autovalori_autovettori_2.html) e [L19 · Prodotti scalari I](L19_prodotti_scalari_1.html), con le dimostrazioni, i disegni e gli esercizi.
- Dispense 2026 di R. Buzano e M. Radeschi, lezioni 17, 18 e 19, pp. 85–99.
- Appelli di Algebra lineare e Geometria del 10/06/2024, 10/07/2024, 06/09/2024, 07/02/2025, 05/02/2026, 03/06/2026 e 03/07/2026, dal Moodle del corso.
