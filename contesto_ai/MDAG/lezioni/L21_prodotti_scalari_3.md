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
  Perpendicolare, ombra e raddrizzare: tre idee che reggono tutta la lezione. Come si trovano tutte le direzioni
  perpendicolari a un piano, come si proietta un vettore su una retta o su un piano, come si raddrizza una base con
  l'algoritmo di Gram–Schmidt. Alla fine, come si risolve «al meglio» un sistema che non ha soluzioni.
materiale: dispense
scheda:
  Dispense: lezione 21 · pp. 105–110
  Libro: Martelli, §7.3 e §8.1.5–8.1.10
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 21 «Prodotti scalari III»; B. Martelli, Geometria e algebra
  lineare, §7.1.7, §7.3, §8.1.5–8.1.10
appunti_html: appunti/MDAG/L21_prodotti_scalari_3.html
genera_html: true
---

## In breve

- In tutta la lezione il prodotto scalare è **definito positivo**. Due vettori sono **ortogonali**, cioè perpendicolari, quando il loro prodotto scalare è zero. Il vettore nullo è ortogonale a tutti.
- Il **complemento ortogonale** di un sottospazio raccoglie tutti i vettori perpendicolari a ogni suo vettore. È sempre un sottospazio, e si calcola con un sistema: basta essere perpendicolari ai generatori.
- La **proiezione ortogonale** di un vettore su una retta è la sua **ombra** sulla retta, con il sole a picco. Quello che resta del vettore è perpendicolare alla retta.
- In una **base ortogonale**, fatta di vettori perpendicolari tra loro, le coordinate si calcolano senza sistemi: ognuna è un rapporto tra due prodotti scalari.
- L'algoritmo di **Gram–Schmidt** **raddrizza** una base: a ogni vettore toglie le parti che pendono verso quelli già sistemati. Dividendo per le lunghezze si ottiene una base **ortonormale**.
- Ogni vettore si spezza in modo unico in un pezzo dentro un sottospazio e un pezzo perpendicolare. Il primo pezzo è la proiezione: il punto del sottospazio **più vicino** al vettore.
- **Minimi quadrati**: se un sistema non ha soluzioni, si cerca la scelta che sbaglia il meno possibile. Si trova con un sistema più piccolo, le **equazioni normali**; così si trova la retta che passa più vicina a dei punti.
- All'esame: «base ortonormale di un piano, poi proiezione di un vettore» è il problema 12 di molti appelli.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Vettori perpendicolari (p. 105)

Nella lezione L20 hai visto che l'angolo tra due vettori non nulli è retto esattamente quando il prodotto scalare è zero. Per esempio $(1, 2)$ e $(-2, 1)$: $1 \cdot (-2) + 2 \cdot 1 = 0$, e nel disegno formano un angolo retto. Questa condizione è così importante che ha un nome, e la si usa anche quando uno dei vettori è nullo.

> [!DEF] Vettori ortogonali (p. 105)
> Sia $V$ munito di un prodotto scalare definito positivo. Due vettori $v, w \in V$ sono **ortogonali** se
> $$\langle v, w\rangle = 0.$$
> Se entrambi sono non nulli, questo equivale a dire che formano un angolo retto.

**Come si legge.**

- «Ortogonale» è il nome tecnico di «perpendicolare».
- Il vettore nullo è ortogonale a **tutti** i vettori, perché il suo prodotto scalare con qualsiasi vettore è zero (lezione L19).
- L'ortogonalità **dipende dal prodotto scalare**: due vettori perpendicolari per un prodotto possono non esserlo per un altro.

Ecco i vettori perpendicolari a un vettore dato del piano, come nelle dispense.

> [!ESEMPIO] 21.1 · I vettori ortogonali a un vettore del piano
> Nel prodotto scalare euclideo di $\R^2$, i vettori $(x, y)$ ortogonali a $(a, b) \neq 0$ soddisfano $ax + by = 0$ e formano quindi la retta
> $$\Span\begin{pmatrix} -b \\ a \end{pmatrix}.$$
> Per esempio, i vettori ortogonali a $(2, 1)$ sono quelli con $2x + y = 0$, cioè la retta $\Span((-1, 2))$. Controllo: $\langle (-1, 2), (2, 1)\rangle = -2 + 2 = 0$.

Perché proprio quella retta? L'equazione $ax + by = 0$ è un sistema con una sola equazione e due incognite: le soluzioni formano una retta. Il vettore $(-b, a)$ è una soluzione, perché $a(-b) + ba = 0$, e non è nullo, quindi genera la retta. La regola pratica: **scambia le coordinate e cambia un segno**.

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
> Con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ i vettori $e_1$ ed $e_2$ **non** sono ortogonali: $g_S(e_1, e_2) = S_{12} = 1$. I vettori perpendicolari a $e_1$ per questo prodotto sono quelli con $2y_1 + y_2 = 0$ (la prima riga di $S$ per $y$), cioè la retta di $(1, -2)$. Con il prodotto di tutti i giorni, invece, sarebbe la retta di $(0, 1)$.

> [!OLTRE] Vettori perpendicolari non nulli sono indipendenti
> Se $v_1, \dots, v_k$ sono non nulli e perpendicolari a due a due, sono indipendenti (Martelli, Proposizione 8.1.25). Parti da una ricetta che dà zero, $\lambda_1v_1 + \dots + \lambda_kv_k = 0$, e fai il prodotto scalare con $v_i$:
> $$0 = \langle 0, v_i\rangle = \lambda_1\langle v_1, v_i\rangle + \dots + \lambda_k\langle v_k, v_i\rangle = \lambda_i\langle v_i, v_i\rangle,$$
> perché tutti gli altri prodotti sono zero. Siccome $v_i$ non è zero, $\langle v_i, v_i\rangle$ è positivo, e quindi $\lambda_i = 0$. In particolare $n$ vettori non nulli e perpendicolari a due a due, in uno spazio di dimensione $n$, formano sempre una base.

::: prova Un vettore perpendicolare a $(3, 5)$ nel piano?
Scambio le coordinate e cambio un segno: $(-5, 3)$. Controllo: $3 \cdot (-5) + 5 \cdot 3 = 0$.
:::

> [!RICORDA]
> - Ortogonali vuol dire prodotto scalare zero: perpendicolari.
> - Nel piano, i vettori perpendicolari a $(a, b)$ sono i multipli di $(-b, a)$.

## Tutte le direzioni perpendicolari (p. 105)

Ora non un vettore solo, ma un intero sottospazio. Prendi il pavimento di una stanza: le direzioni perpendicolari a **tutto** il pavimento sono quelle verticali, una retta. Prendi invece un filo teso: le direzioni perpendicolari al filo formano un piano. Le dispense danno un nome a questo insieme.

> [!DEF] 21.3 · Complemento ortogonale
> Sia $W \subset V$ un sottospazio. Il **complemento ortogonale** di $W$ è
> $$W^\perp = \{v \in V \mid \langle v, w\rangle = 0 \text{ per ogni } w \in W\}.$$

**Come si legge.**

- $W^\perp$ si legge «vu doppio ortogonale» o «vu doppio perp».
- Un vettore sta in $W^\perp$ se è perpendicolare a **ogni** vettore di $W$, non solo a qualcuno.
- Casi estremi: il complemento del solo zero è tutto lo spazio, perché tutti sono perpendicolari allo zero. Il complemento di tutto lo spazio è solo lo zero: un vettore perpendicolare a tutto è perpendicolare anche a sé stesso, e allora è nullo.

Il complemento è sempre un sottospazio. Le dispense lo scrivono così.

> [!PROP] 21.4
> $W^\perp$ è un sottospazio vettoriale di $V$.

**Come si legge.** Tutte le direzioni perpendicolari a $W$, messe insieme, formano una retta, un piano o comunque un sottospazio.

Il perché, con le tre condizioni di sottospazio (lezione L06):

1. lo zero sta in $W^\perp$, perché è perpendicolare a tutto;
2. se due vettori sono perpendicolari a tutto $W$, anche la loro somma lo è: $\langle v + v', w\rangle = \langle v, w\rangle + \langle v', w\rangle = 0 + 0 = 0$;
3. se $v$ è perpendicolare a ogni $w$, anche un suo multiplo lo è: $\langle \lambda v, w\rangle = \lambda \cdot 0 = 0$.

Per esempio l'appello del 05/02/2026 (domanda 2) chiedeva quale di cinque insiemi non fosse un sottospazio dei polinomi di grado al massimo 2. Tra gli insiemi c'era il complemento ortogonale dei polinomi di grado al massimo 1: per la Proposizione 21.4 è un sottospazio, quindi non era la risposta.

**Come si calcola in pratica.** La definizione chiede di controllare **infiniti** vettori. Ma bastano i generatori.

> [!OLTRE] Bastano i generatori
> Se $W = \Span(w_1, \dots, w_k)$, allora (Martelli, Proposizione 7.3.3)
> $$W^\perp = \{v \in V \mid \langle v, w_1\rangle = 0, \ \dots, \ \langle v, w_k\rangle = 0\}.$$
> Infatti ogni vettore di $W$ è una ricetta dei generatori, $w = \lambda_1w_1 + \dots + \lambda_kw_k$. Se $v$ è perpendicolare ai generatori, allora $\langle v, w\rangle = \lambda_1 \cdot 0 + \dots + \lambda_k \cdot 0 = 0$. Con un prodotto $g_S$ le condizioni diventano il sistema ${}^tw_i\,S\,x = 0$, una equazione per generatore; con il prodotto di tutti i giorni, semplicemente $\langle w_i, x\rangle = 0$.

> [!METODO] Calcolare $W^\perp$
> 1. Trova dei generatori di $W$. Se $W$ è dato con equazioni, prima trova una base.
> 2. Scrivi una equazione per ogni generatore: il prodotto scalare di $x$ con quel generatore è zero. Con $g_S$ la riga dei numeri per il generatore $w_i$ è ${}^t(Sw_i)$.
> 3. Risolvi il sistema (lezioni L11–L13) e scrivi una base delle soluzioni.
> 4. Controllo: nella sezione sulla decomposizione vedrai che le dimensioni di $W$ e di $W^\perp$ sommano alla dimensione dello spazio.

> [!ESEMPIO] Tre complementi nello spazio (prodotto di tutti i giorni)
> 1. **Una retta.** $W = \Span((1, 2, 3))$. Una sola equazione: $x + 2y + 3z = 0$. Il complemento è il **piano** con questa equazione. Una base: $y$ e $z$ sono libere, quindi $(-2, 1, 0)$, con $y = 1$ e $z = 0$, e $(-3, 0, 1)$, con $y = 0$ e $z = 1$.
> 2. **Un piano dato con generatori.** $W = \Span((1, 1, 0), (0, 1, 1))$. Due equazioni: $x + y = 0$ e $y + z = 0$. Quindi $x = -y$ e $z = -y$: il complemento è la **retta** di $(1, -1, 1)$. Controllo: $1 - 1 + 0 = 0$ e $0 - 1 + 1 = 0$.
> 3. **Un piano dato con un'equazione.** $W = \{x + y + z = 0\}$. Una base del piano è $(1, -1, 0)$ e $(0, 1, -1)$. Le due equazioni sono $x - y = 0$ e $y - z = 0$, quindi $x = y = z$: il complemento è la retta di $(1, 1, 1)$. In generale il complemento del piano $\{ax + by + cz = 0\}$ è la retta di $(a, b, c)$: l'equazione stessa dice che ogni vettore del piano è perpendicolare a $(a, b, c)$.

> [!ESEMPIO] Un complemento tra i polinomi
> Sui polinomi di grado al massimo 2 prendi il prodotto $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$ (lezione L19). Cerchiamo i polinomi perpendicolari a $1$ e a $x$. Con la matrice $\begin{pmatrix} 3 & 3 & 5 \\ 3 & 5 & 9 \\ 5 & 9 & 17 \end{pmatrix}$ della lezione L19 e $p = a + bx + cx^2$:
> $$\begin{aligned} \langle p, 1\rangle &= 3a + 3b + 5c = 0, \\ \langle p, x\rangle &= 3a + 5b + 9c = 0. \end{aligned}$$
> Togliendo la prima dalla seconda: $2b + 4c = 0$, cioè $b = -2c$. Poi $3a - 6c + 5c = 0$, cioè $a = \frac c3$. Con $c = 3$: $p = 1 - 6x + 3x^2$, e il complemento è la retta di questo polinomio. Controllo con i valori in $0, 1, 2$, che sono $1, -2, 1$: $\langle p, 1\rangle = 1 - 2 + 1 = 0$ e $\langle p, x\rangle = 0 - 2 + 2 = 0$.

::: prova Qual è il complemento ortogonale della retta di $(1, 0, 1)$ nello spazio?
Il piano $x + z = 0$. Una base: $(0, 1, 0)$ e $(-1, 0, 1)$.
:::

> [!RICORDA]
> - $W^\perp$ raccoglie i vettori perpendicolari a tutto $W$; è sempre un sottospazio.
> - Si calcola con una equazione per ogni generatore di $W$.

## L'ombra su una retta (pp. 105–106)

Immagina una retta per l'origine e un vettore fuori dalla retta. Se il sole è a picco, perpendicolare alla retta, l'ombra del vettore cade sulla retta: è la **proiezione ortogonale** del vettore. Quello che resta, il vettore meno la sua ombra, è perpendicolare alla retta.

Con i nomi delle dispense: sia $w$ un vettore non nullo e $U$ la sua retta. Per un vettore $v$ cerchiamo un vettore $p_w(v)$ della retta per cui

$$v - p_w(v) \in U^\perp.$$

Questo vettore è la **proiezione ortogonale** di $v$ sulla retta. Le dispense danno la formula.

> [!PROP] 21.5
> Vale
> $$p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}\,w = \frac{\langle v, w\rangle}{\|w\|^2}\,w.$$

**Come si legge.** L'ombra è un multiplo del vettore che genera la retta. Il numero davanti è un rapporto: sopra il prodotto scalare tra i due vettori, sotto la lunghezza al quadrato del vettore della retta.

La dimostrazione delle dispense, passo per passo:

1. l'ombra sta sulla retta, quindi è un multiplo di $w$: la chiamo $kw$, con $k$ da trovare;
2. il resto $v - kw$ deve essere perpendicolare a $w$:
   $$0 = \langle v - kw, w\rangle = \langle v, w\rangle - k\langle w, w\rangle;$$
3. siccome $w$ non è zero, $\langle w, w\rangle$ è positivo e si può dividere: $k = \frac{\langle v, w\rangle}{\langle w, w\rangle}$.

> [!ESEMPIO] L'ombra di $v = (1, 3)$ sulla retta di $w = (4, 2)$
> 1. $\langle v, w\rangle = 4 + 6 = 10$ e $\langle w, w\rangle = 16 + 4 = 20$.
> 2. Il numero davanti è $\frac{10}{20} = \frac12$, quindi l'ombra è $\frac12(4, 2) = (2, 1)$.
> 3. Il resto è $(1, 3) - (2, 1) = (-1, 2)$.
> 4. Controllo: $\langle (-1, 2), (4, 2)\rangle = -4 + 4 = 0$.
>
> Con $(2, 1)$ al posto di $w$, che genera la stessa retta, il numero davanti diventa $\frac55 = 1$, ma l'ombra è la stessa: $1 \cdot (2, 1) = (2, 1)$. **L'ombra dipende dalla retta, non dal vettore scelto per generarla.**

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

> [!ESEMPIO] Un'ombra nello spazio
> $v = (1, 2, 3)$ sulla retta di $w = (1, 1, 1)$: $\langle v, w\rangle = 6$ e $\langle w, w\rangle = 3$, quindi l'ombra è $2(1, 1, 1) = (2, 2, 2)$. Il resto $(1, 2, 3) - (2, 2, 2) = (-1, 0, 1)$ è perpendicolare a $w$: $-1 + 0 + 1 = 0$.

**Ogni vettore si spezza in due pezzi perpendicolari.** Dalla costruzione:

$$v = p_w(v) + \big(v - p_w(v)\big),$$

con il primo pezzo sulla retta e il secondo perpendicolare. Un vettore che sta sia sulla retta sia nel suo complemento è perpendicolare a sé stesso, quindi è zero. Allora la scomposizione è unica: la somma è **diretta** (Definizione 18.4), e lo spazio è la retta più il suo complemento, $V = U \oplus U^\perp$.

Il numero davanti all'ombra si chiama **coefficiente di Fourier** di $v$ rispetto a $w$.

> [!TRAPPOLA] Due errori frequenti
> - Dividere per la lunghezza di $w$ invece che per la lunghezza al quadrato. Con $v = (3, 1)$ e $w = (1, 1)$ l'ombra giusta è $\frac42(1, 1) = (2, 2)$. Dividendo per $\sqrt2$ si otterrebbe $(2\sqrt2, 2\sqrt2)$, e il resto non sarebbe nemmeno perpendicolare.
> - Scambiare i ruoli: $p_w(v)$ proietta $v$ **sulla retta di $w$**. Proiettare $w$ sulla retta di $v$ dà un altro vettore.

> [!OLTRE] La lunghezza dell'ombra
> L'ombra è lunga $\frac{|\langle v, w\rangle|}{\|w\|}$ (Martelli, Esercizio 8.1.15). Se $w$ è lungo 1, l'ombra è $\langle v, w\rangle\,w$ e la sua lunghezza è il prodotto scalare senza segno: è l'interpretazione del prodotto scalare come «ombra» che si vede in fisica.

Prova con lo strumento: la freccia gialla è l'ombra di $v$ sulla retta di $u$, e il segmento viola è il resto. Trascina $v$: il segmento viola resta sempre perpendicolare alla retta. Quando $v$ è perpendicolare a $u$ l'ombra diventa il vettore nullo.

```widget vettori
titolo: Proiezione ortogonale di v sulla retta di u
u: 4 2
v: 1 3
modo: scalare
modi: scalare
raggio: 5
```

::: prova Qual è l'ombra di $(3, 4)$ sulla retta dell'asse orizzontale, cioè di $(1, 0)$?
Il numero davanti è $\frac{3}{1} = 3$: l'ombra è $(3, 0)$, e il resto $(0, 4)$ è verticale.
:::

> [!RICORDA]
> - Ombra di $v$ sulla retta di $w$: $\frac{\langle v, w\rangle}{\langle w, w\rangle}\,w$. Si divide per la lunghezza **al quadrato**.
> - Il resto è sempre perpendicolare alla retta: è il controllo da fare.

## Coordinate in una base di vettori perpendicolari (p. 106)

Una base si chiama **ortogonale** se i suoi vettori sono perpendicolari a due a due, e **ortonormale** se in più ogni vettore è lungo 1. La base canonica è ortonormale per il prodotto di tutti i giorni (Esempio 21.2). Con una base ortogonale le coordinate si calcolano **senza risolvere sistemi**: ogni vettore è la somma delle sue ombre. Le dispense lo scrivono così.

> [!PROP] 21.6
> Sia $\mathcal B = \{v_1, \dots, v_n\}$ una base ortogonale di $V$. Per ogni $v \in V$,
> $$v = \sum_{i=1}^n p_{v_i}(v) = \sum_{i=1}^n \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}\,v_i.$$

**Come si legge.** In una base ortogonale, ogni vettore è la somma delle sue ombre sui vettori della base. Le coordinate sono i coefficienti di Fourier.

La dimostrazione:

1. siccome è una base, $v = \lambda_1v_1 + \dots + \lambda_nv_n$ per certi numeri;
2. fai il prodotto scalare dei due lati con $v_i$: a destra tutti i pezzi con gli altri vettori della base sono zero, per la perpendicolarità, e resta $\langle v, v_i\rangle = \lambda_i\langle v_i, v_i\rangle$;
3. quindi $\lambda_i = \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}$.

Se la base è **ortonormale**, ogni $\langle v_i, v_i\rangle$ vale 1 e la formula si accorcia: la coordinata $i$ è $\langle v, v_i\rangle$.

> [!ESEMPIO] Coordinate senza sistema
> Nel piano la base $v_1 = (2, 1)$, $v_2 = (-1, 2)$ è ortogonale: $-2 + 2 = 0$. Per $v = (2, 3)$:
> $$\frac{\langle v, v_1\rangle}{\langle v_1, v_1\rangle} = \frac{4 + 3}{5} = \frac75, \qquad \frac{\langle v, v_2\rangle}{\langle v_2, v_2\rangle} = \frac{-2 + 6}{5} = \frac45.$$
> Controllo: $\frac75(2, 1) + \frac45(-1, 2) = \left(\frac{14 - 4}{5}, \frac{7 + 8}{5}\right) = (2, 3)$. È l'Esempio 8.1.19 di Martelli.
>
> Nello spazio, con la base ortogonale $(1, 1, 0)$, $(1, -1, 0)$, $(0, 0, 1)$ e $v = (3, 1, 2)$: i numeri sono $\frac{3 + 1}{2} = 2$, $\frac{3 - 1}{2} = 1$ e $\frac{2}{1} = 2$. Infatti $2(1, 1, 0) + (1, -1, 0) + 2(0, 0, 1) = (3, 1, 2)$.

> [!IDEA] Perché le basi ortogonali fanno risparmiare lavoro
> Con una base qualsiasi, per trovare le coordinate bisogna risolvere un sistema. Con una base ortogonale ogni coordinata è **un rapporto di due prodotti scalari**, calcolato da solo. È il motivo per cui si fa tanta fatica a costruire basi ortogonali: è quello che fa Gram–Schmidt.

::: prova Coordinate di $(5, 1)$ nella base ortogonale $(1, 1), (1, -1)$?
$\frac{5 + 1}{2} = 3$ e $\frac{5 - 1}{2} = 2$. Controllo: $3(1, 1) + 2(1, -1) = (5, 1)$.
:::

> [!RICORDA]
> - In una base ortogonale ogni coordinata è $\frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}$; in una ortonormale è $\langle v, v_i\rangle$.

## Raddrizzare una base: Gram–Schmidt (p. 107)

Le basi ortogonali sono comode: come se ne costruisce una? L'idea è **raddrizzare** una base qualsiasi, un vettore alla volta. Il primo resta com'è. Al secondo togli la sua ombra sul primo: quello che resta è perpendicolare al primo. Al terzo togli le sue ombre sui primi due già sistemati, e così via.

Le dispense scrivono l'algoritmo di **Gram–Schmidt** così. Partendo da vettori indipendenti $v_1, \dots, v_k$, si pone

$$w_1 = v_1$$

e, dal secondo in poi,

$$w_i = v_i - \sum_{j=1}^{i-1} p_{w_j}(v_i) = v_i - \sum_{j=1}^{i-1} \frac{\langle v_i, w_j\rangle}{\langle w_j, w_j\rangle}\,w_j.$$

A ogni passo si tolgono a $v_i$ le sue ombre nelle direzioni già costruite. Scritto per esteso per tre vettori:

$$\begin{aligned} w_1 &= v_1, \\ w_2 &= v_2 - \frac{\langle v_2, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1, \\ w_3 &= v_3 - \frac{\langle v_3, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 - \frac{\langle v_3, w_2\rangle}{\langle w_2, w_2\rangle}\,w_2. \end{aligned}$$

**Perché funziona.** Il secondo vettore è $v_2$ meno la sua ombra sulla retta di $w_1$: per la Proposizione 21.5 il resto è perpendicolare a $w_1$. Allo stesso modo, al terzo vettore si tolgono le ombre sui primi due, che sono già perpendicolari tra loro: il resto è perpendicolare a tutti e due. Inoltre ogni $w_i$ è $v_i$ più una ricetta dei vettori precedenti: quindi i nuovi vettori generano gli stessi spazi dei vecchi. E nessun $w_i$ è zero, perché i $v_i$ sono indipendenti.

> [!ESEMPIO] Gram–Schmidt nel piano
> $v_1 = (3, 1)$, $v_2 = (2, 2)$. Il primo resta: $w_1 = (3, 1)$. Al secondo tolgo l'ombra sul primo:
> $$\begin{aligned} w_2 &= (2, 2) - \frac{\langle (2, 2), (3, 1)\rangle}{\langle (3, 1), (3, 1)\rangle}(3, 1) = (2, 2) - \frac{8}{10}(3, 1) \\ &= \left(2 - \frac{12}5, 2 - \frac45\right) = \left(-\frac25, \frac65\right). \end{aligned}$$
> Controllo: $\langle w_2, w_1\rangle = -\frac65 + \frac65 = 0$. Moltiplicando per 5 si può usare $(-2, 6)$, o dividendo ancora per 2, $(-1, 3)$: resta perpendicolare a $w_1$.

Ecco l'esempio delle dispense, nello spazio.

> [!ESEMPIO] 21.7 · Gram–Schmidt in $\R^3$
> Ortogonalizziamo
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad v_3 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$$
> rispetto al prodotto scalare euclideo di $\R^3$. Otteniamo
> $$w_1 = v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad w_2 = v_2 - \frac{\langle v_2, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 = \begin{pmatrix} -\frac12 \\ \frac12 \\ 1 \end{pmatrix}$$
> e
> $$w_3 = v_3 - \frac{\langle v_3, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 - \frac{\langle v_3, w_2\rangle}{\langle w_2, w_2\rangle}\,w_2 = \begin{pmatrix} \frac23 \\ -\frac23 \\ \frac23 \end{pmatrix}.$$
> I vettori $w_1, w_2, w_3$ sono ortogonali.

> [!ESEMPIO] · i conti dell'Esempio 21.7
> I conti che le dispense non scrivono:
>
> 1. $\langle v_2, w_1\rangle = 0 + 1 + 0 = 1$ e $\langle w_1, w_1\rangle = 2$, quindi $w_2 = (0, 1, 1) - \frac12(1, 1, 0) = \left(-\frac12, \frac12, 1\right)$;
> 2. $\langle v_3, w_1\rangle = 1 + 0 + 0 = 1$, quindi il primo numero da togliere è $\frac12$;
> 3. $\langle v_3, w_2\rangle = -\frac12 + 0 + 1 = \frac12$ e $\langle w_2, w_2\rangle = \frac14 + \frac14 + 1 = \frac32$, quindi il secondo è $\frac{1/2}{3/2} = \frac13$;
> 4. $w_3 = (1, 0, 1) - \frac12(1, 1, 0) - \frac13\left(-\frac12, \frac12, 1\right)$, coordinata per coordinata:
>    $$1 - \frac12 + \frac16 = \frac23, \quad 0 - \frac12 - \frac16 = -\frac23, \quad 1 - 0 - \frac13 = \frac23;$$
> 5. controlli: $\langle w_1, w_2\rangle = -\frac12 + \frac12 + 0 = 0$, $\langle w_1, w_3\rangle = \frac23 - \frac23 + 0 = 0$, $\langle w_2, w_3\rangle = -\frac13 - \frac13 + \frac23 = 0$.

**Da ortogonale a ortonormale.** Per avere vettori lunghi 1 basta dividere ciascuno per la sua lunghezza (lezione L20). Conviene prima togliere le frazioni: $w_2 = \frac12(-1, 1, 2)$, e $(-1, 1, 2)$ è lungo $\sqrt6$; $w_3 = \frac23(1, -1, 1)$, e $(1, -1, 1)$ è lungo $\sqrt3$. La base ortonormale è

$$\frac{1}{\sqrt2}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad \frac{1}{\sqrt6}\begin{pmatrix} -1 \\ 1 \\ 2 \end{pmatrix}, \qquad \frac{1}{\sqrt3}\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}.$$

> [!OLTRE] Riscalare durante l'algoritmo
> L'ombra su una retta non cambia se si sostituisce il vettore che la genera con un suo multiplo. Quindi durante Gram–Schmidt puoi **moltiplicare ogni $w_i$ per un numero comodo** prima di andare avanti (Martelli, §8.1.8). Nell'Esempio 21.7, con $w_2' = 2w_2 = (-1, 1, 2)$: $\langle v_3, w_2'\rangle = -1 + 0 + 2 = 1$ e $\langle w_2', w_2'\rangle = 6$, quindi
> $$w_3 = (1, 0, 1) - \frac12(1, 1, 0) - \frac16(-1, 1, 2) = \left(\frac23, -\frac23, \frac23\right),$$
> lo stesso risultato con meno frazioni.

> [!TRAPPOLA] Si proietta sui vettori nuovi, non su quelli vecchi
> Nel calcolo di $w_3$ si tolgono le ombre su $w_1$ e $w_2$, già perpendicolari tra loro. Se per sbaglio si usa $v_2$ invece di $w_2$:
> $$(1, 0, 1) - \frac12(1, 1, 0) - \frac12(0, 1, 1) = \left(\frac12, -1, \frac12\right),$$
> e questo vettore **non** è perpendicolare a $w_2$: $\left\langle \left(\frac12, -1, \frac12\right), \left(-\frac12, \frac12, 1\right)\right\rangle = -\frac14 - \frac12 + \frac12 = -\frac14$.

> [!ESEMPIO] · Gram–Schmidt con un prodotto diverso
> **Con un prodotto diverso.** L'algoritmo è identico: cambiano solo i prodotti scalari, che si calcolano con $S$. Con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ e la base canonica: il primo vettore è $e_1$, il suo prodotto con $e_2$ è $S_{21} = 1$ e con sé stesso $S_{11} = 2$. Quindi
>
> $$w_2 = e_2 - \frac12 e_1 = \left(-\frac12, 1\right).$$
>
> Controllo: $g_S(e_1, w_2) = 2 \cdot \left(-\frac12\right) + 1 \cdot 1 = 0$. Per la base ortonormale: $e_1$ è lungo $\sqrt2$, e il prodotto di $w_2$ con sé stesso vale $2 \cdot \frac14 + 2 \cdot \left(-\frac12\right) \cdot 1 + 1 = \frac12$. La base $\left\{\left(\frac{\sqrt2}2, 0\right), \left(-\frac{\sqrt2}2, \sqrt2\right)\right\}$ è ortonormale **per questo prodotto**, non per quello di tutti i giorni.

Prova la calcolatrice: ogni riga è un vettore, e il prodotto è quello di tutti i giorni. Con i vettori dell'Esempio 21.7 scrive i passaggi uno per uno, e alla fine la base ortonormale; lo strumento chiama $u_i$ i vettori che qui sono $w_i$. Prova anche a scrivere tre vettori dipendenti: il terzo diventa nullo e viene scartato.

```widget gauss
titolo: Gram–Schmidt passo per passo (righe = vettori)
matrice: 1 1 0; 0 1 1; 1 0 1
modo: gram-schmidt
modi: gram-schmidt
```

> [!METODO] Gram–Schmidt all'esame
> 1. $w_1 = v_1$. Calcola e scrivi $\langle w_1, w_1\rangle$: servirà di nuovo.
> 2. $w_2 = v_2$ meno la sua ombra su $w_1$. **Controlla** che sia perpendicolare a $w_1$ prima di andare avanti; se ci sono frazioni, riscala.
> 3. $w_3 = v_3$ meno le sue ombre su $w_1$ e su $w_2$. Controlla la perpendicolarità con tutti e due.
> 4. Se serve una base **ortonormale**, dividi ogni vettore per la sua lunghezza solo alla fine.
> 5. Con un $g_S$: ogni prodotto è ${}^tu\,S\,w$. Calcola una volta i vettori $Sw_j$ e riusali.

::: prova Raddrizza $v_1 = (1, 0)$ e $v_2 = (1, 1)$.
$w_1 = (1, 0)$. L'ombra di $v_2$ su $w_1$ è $\frac11(1, 0) = (1, 0)$, quindi $w_2 = (1, 1) - (1, 0) = (0, 1)$.
:::

> [!RICORDA]
> - Gram–Schmidt: il primo vettore resta, a ogni altro si tolgono le ombre sui vettori **nuovi** già costruiti.
> - Controlla la perpendicolarità a ogni passo; riscala per evitare frazioni.

## Il pezzo dentro e il pezzo perpendicolare (pp. 107–108)

Con Gram–Schmidt l'ombra passa da una retta a un sottospazio qualsiasi. Pensa a un vettore nella stanza e al pavimento: il vettore si spezza nella sua ombra sul pavimento e in un pezzo verticale. Da qui lo spazio ha **dimensione finita**. Le dispense lo scrivono così.

> [!TEOREMA] 21.8 · Decomposizione ortogonale
> Vale
> $$V = W \oplus W^\perp.$$
> In altre parole, ogni $v \in V$ si scrive in modo unico come
> $$v = w + z, \qquad w \in W, \quad z \in W^\perp.$$
> In particolare,
> $$\dim W + \dim W^\perp = \dim V.$$

**Come si legge.** Ogni vettore si spezza in un solo modo in un pezzo dentro $W$ e un pezzo perpendicolare a $W$. E le dimensioni di $W$ e del suo complemento sommano alla dimensione dello spazio: nello spazio, un piano ha per complemento una retta, $2 + 1 = 3$.

La spiegazione delle dispense, con i passaggi aggiunti:

1. **Una base ortonormale di $W$.** Parti da una base qualsiasi di $W$, raddrizzala con Gram–Schmidt e dividi per le lunghezze: ottieni $w_1, \dots, w_k$. Se $W$ è solo lo zero non c'è niente da fare.
2. **Il candidato.** Prendi
   $$p_W(v) = \sum_{i=1}^k \langle v, w_i\rangle\,w_i.$$
   È una ricetta dei $w_i$, quindi sta in $W$.
3. **Il resto è perpendicolare a $W$.** Due vettori diversi della base hanno prodotto zero, e ognuno con sé stesso dà 1. Quindi, per ogni $j$,
   $$\begin{aligned} \langle v - p_W(v), w_j\rangle &= \langle v, w_j\rangle - \sum_{i=1}^k \langle v, w_i\rangle\langle w_i, w_j\rangle \\ &= \langle v, w_j\rangle - \langle v, w_j\rangle = 0. \end{aligned}$$
   Il resto è perpendicolare a tutti i generatori, quindi a tutto $W$.
4. **C'è sempre una scomposizione.** $v = p_W(v) + \big(v - p_W(v)\big)$, con il primo pezzo in $W$ e il secondo nel complemento.
5. **È unica.** Un vettore che sta sia in $W$ sia nel complemento è perpendicolare a sé stesso, quindi è zero. La somma è diretta (Definizione 18.4).
6. **Le dimensioni.** Una base di $W$ e una del complemento, messe insieme, sono una base dello spazio: generano per il punto 4, e sono indipendenti perché la somma è diretta.

Il pezzo in $W$ è la **proiezione ortogonale** del vettore sul sottospazio: la sua ombra. Con una base ortonormale $w_1, \dots, w_k$ di $W$:

$$p_W(v) = \sum_{i=1}^k \langle v, w_i\rangle\,w_i.$$

> [!OSSERVAZIONE] La stessa formula con una base soltanto ortogonale
> Se $w_1, \dots, w_k$ è una base **ortogonale** di $W$, non normalizzata, sostituendo $\frac{w_i}{\|w_i\|}$ nella formula si ottiene
> $$p_W(v) = \sum_{i=1}^k \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}\,w_i = \sum_{i=1}^k p_{w_i}(v),$$
> la somma delle ombre sulle rette dei $w_i$ (Martelli, Proposizione 8.1.28). È la formula più comoda all'esame: evita le radici quadrate. **Attenzione**: vale solo se la base di $W$ è ortogonale; con una base qualsiasi prima si applica Gram–Schmidt.

> [!ESEMPIO] L'ombra di $v = (1, 2, 3)$ sul piano $W = \{x + y + z = 0\}$
> **Con una base ortogonale.** Due vettori del piano perpendicolari tra loro: $a = (1, -1, 0)$ e $b = (1, 1, -2)$. Tutti e due hanno somma delle coordinate zero, e $\langle a, b\rangle = 1 - 1 + 0 = 0$. Allora
> $$\begin{aligned} p_W(v) &= \frac{\langle v, a\rangle}{\langle a, a\rangle}\,a + \frac{\langle v, b\rangle}{\langle b, b\rangle}\,b \\ &= \frac{-1}{2}(1, -1, 0) + \frac{-3}{6}(1, 1, -2) = (-1, 0, 1). \end{aligned}$$
> Il resto è $v - p_W(v) = (2, 2, 2)$, multiplo di $(1, 1, 1)$: è perpendicolare al piano.
>
> **Con la scorciatoia.** Il complemento del piano è la retta di $(1, 1, 1)$, e il vettore è la sua ombra sul piano più la sua ombra sulla retta. Quindi
> $$p_W(v) = v - p_{(1, 1, 1)}(v) = (1, 2, 3) - \frac63(1, 1, 1) = (-1, 0, 1).$$
> Stesso risultato con un conto solo. Quando $W$ è un piano dello spazio conviene quasi sempre proiettare sulla retta perpendicolare e togliere.

### L'ombra è il punto più vicino

La proiezione ha una proprietà che spiega il suo nome: è il punto di $W$ **più vicino** a $v$. Le dispense lo scrivono così.

> [!PROP] 21.9
> Per ogni $w \in W$ vale
> $$\|v - p_W(v)\| \le \|v - w\|,$$
> con uguaglianza se e solo se $w = p_W(v)$.

**Come si legge.** Tra tutti i punti di $W$, quello più vicino a $v$ è la sua ombra. Ogni altro punto è più lontano.

Il perché:

1. scrivi $v - w = \big(v - p_W(v)\big) + \big(p_W(v) - w\big)$;
2. il primo pezzo è perpendicolare a $W$ (Teorema 21.8), il secondo sta in $W$: quindi sono **perpendicolari**;
3. per due vettori perpendicolari vale il **teorema di Pitagora**: la lunghezza al quadrato della somma è la somma delle lunghezze al quadrato (è lo sviluppo del quadrato della lezione L20, con prodotto scalare zero):
   $$\|v - w\|^2 = \|v - p_W(v)\|^2 + \|p_W(v) - w\|^2;$$
4. il secondo pezzo non è mai negativo, quindi $\|v - w\|^2$ è almeno $\|v - p_W(v)\|^2$. È uguale solo se $w$ è proprio l'ombra.

Nell'esempio del piano: $\|v - p_W(v)\| = \|(2, 2, 2)\| = \sqrt{12}$ è la **distanza** di $v$ dal piano. Qualsiasi altro punto del piano è più lontano: l'origine dista $\sqrt{14}$, e infatti $14 = 12 + 2$; il punto $(1, -1, 0)$ dista $\|(0, 3, 3)\| = \sqrt{18}$.

> [!METODO] Ombra su un sottospazio $W$
> 1. Trova una base di $W$. Se $W$ è dato con equazioni, risolvile.
> 2. Raddrizzala con Gram–Schmidt.
> 3. Somma le ombre: $p_W(v) = \sum_i \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}\,w_i$.
> 4. **Controlla** che $v - p_W(v)$ sia perpendicolare ai generatori di $W$.
> 5. Se il complemento è più piccolo di $W$, per esempio un piano nello spazio, calcola l'ombra sul complemento e toglila da $v$.
> 6. La distanza di $v$ da $W$ è la lunghezza di $v - p_W(v)$.

::: prova Qual è l'ombra di $(1, 2, 3)$ sul piano orizzontale $z = 0$?
Il complemento è l'asse verticale: l'ombra su di lui è $(0, 0, 3)$. Togliendola: $(1, 2, 0)$. La distanza dal piano è 3.
:::

> [!RICORDA]
> - Ogni vettore si spezza in un solo modo: pezzo in $W$ più pezzo perpendicolare a $W$. Le dimensioni di $W$ e del complemento sommano a quella dello spazio.
> - L'ombra su un sottospazio si calcola con una sua base **ortogonale**, ed è il suo punto più vicino al vettore.

## Sbagliare il meno possibile: i minimi quadrati (pp. 109–110)

Un esperimento dà tre punti misurati. Sono $(0, 1)$, $(1, 2)$ e $(2, 2)$: c'è una retta $y = a + bt$ che passa per tutti e tre? Servirebbe

$$\begin{cases} a + 0b = 1 \\ a + 1b = 2 \\ a + 2b = 2 \end{cases}$$

Le prime due danno $a = 1$ e $b = 1$, ma allora la terza darebbe $a + 2b = 3$, non 2: il sistema **non ha soluzioni**. Nella realtà succede sempre, perché le misure hanno errori. Allora si cerca la retta che passa «il più vicino possibile» ai punti.

In generale prendiamo un sistema $Ax = b$ che non ha soluzioni. Si cerca allora la scelta delle incognite che porta più vicino ai dati. Le dispense lo scrivono così.

> [!DEF] 21.10 · Soluzione ai minimi quadrati
> Una **soluzione ai minimi quadrati** di $Ax = b$ è un vettore $x_0 \in \R^n$ tale che
> $$\|Ax_0 - b\| \le \|Ax - b\| \qquad \forall\, x \in \R^n.$$

**Come si legge.**

- $Ax - b$ è il vettore degli **errori**: quanto sbaglia ogni equazione con la scelta $x$.
- $x_0$ è la scelta che rende il vettore degli errori il più corto possibile.
- Rendere minima la lunghezza è come rendere minima la lunghezza al quadrato, cioè la **somma dei quadrati** degli errori: da qui il nome.
- Se il sistema ha soluzioni, le soluzioni ai minimi quadrati sono proprio quelle, con errore zero.

**Il collegamento con l'ombra.** Al variare delle incognite, i risultati $Ax$ sono tutte le ricette delle colonne di $A$. Formano un sottospazio, che chiamo $W$: l'immagine della macchina della matrice (lezione L14). Cercare il risultato più vicino ai dati vuol dire cercare il punto di $W$ più vicino ai dati. Per la Proposizione 21.9 è la loro ombra su $W$. Quindi la scelta migliore è quella per cui l'errore è perpendicolare a $W$.

**Come si riconosce un vettore perpendicolare a $W$.** Basta che sia perpendicolare a tutte le colonne di $A$, che generano $W$. Moltiplicare un vettore per la trasposta di $A$ dà proprio i suoi prodotti scalari con le colonne, uno per riga. Quindi un vettore è perpendicolare a $W$ esattamente quando la trasposta di $A$ lo manda in zero. Con l'errore $y = b - Ax_0$: ${}^tA(b - Ax_0) = 0$, cioè ${}^tA\,A\,x_0 = {}^tA\,b$. Le dispense lo scrivono così.

> [!TEOREMA] 21.11 · Equazioni normali
> Un vettore $x_0 \in \R^n$ è una soluzione ai minimi quadrati di $Ax = b$ se e solo se
> $${}^tA\,A\,x_0 = {}^tA\,b.$$
> Queste sono dette **equazioni normali**.

**Come si legge.** Per trovare la scelta che sbaglia meno, si moltiplicano i due lati del sistema per la trasposta di $A$, e si risolve il nuovo sistema.

Tre osservazioni delle dispense, con il perché:

- **Le equazioni normali hanno sempre almeno una soluzione**, perché l'ombra di $b$ sta in $W$: c'è sempre un $x_0$ con $Ax_0$ uguale all'ombra.
- **Se le colonne di $A$ sono indipendenti, la soluzione è unica**: allora ${}^tAA$ è invertibile e
  $$x_0 = ({}^tA\,A)^{-1}\,{}^tA\,b.$$
  Il motivo, che le dispense non scrivono: se ${}^tAAx = 0$, allora $0 = {}^tx\,{}^tAAx = \|Ax\|^2$. Quindi $Ax = 0$, e con colonne indipendenti questo obbliga $x$ a essere zero. Una matrice quadrata con nucleo fatto solo dallo zero è invertibile.
- ${}^tAA$ è una matrice quadrata **simmetrica**, con tante righe quante incognite. È piccola anche quando i dati sono tanti: con 1000 punti e una retta si risolve un sistema $2 \times 2$.

Ecco l'esempio dei tre punti, come nelle dispense.

> [!ESEMPIO] 21.12 · La retta dei minimi quadrati
> Vogliamo trovare la retta $y = a + bt$ che approssima al meglio, nel senso dei minimi quadrati, i punti $(0, 1)$, $(1, 2)$, $(2, 2)$. Cerchiamo quindi $a, b$ per cui
> $$\begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} \approx \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}.$$
> Le equazioni normali sono
> $$\begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \end{pmatrix},$$
> da cui $a = \frac76$, $b = \frac12$. La retta cercata è
> $$y = \frac76 + \frac12 t.$$

> [!ESEMPIO] · i conti dell'Esempio 21.12
> Attenzione ai nomi: qui la lettera $b$ indica sia la pendenza della retta sia, nel teorema, la colonna dei dati $(1, 2, 2)$. I conti, uno per uno:
>
> 1. **La matrice e i dati.** Ogni punto $(t, y)$ dà un'equazione $a + bt = y$: la riga di $A$ è $(1, t)$ e il dato è $y$.
> 2. **${}^tAA$.** Le colonne di $A$ sono $(1, 1, 1)$ e $(0, 1, 2)$. I numeri di ${}^tAA$ sono i loro prodotti scalari: $3$, poi $0 + 1 + 2 = 3$, poi $0 + 1 + 4 = 5$.
> 3. **${}^tA\,b$.** I prodotti delle colonne con i dati: $1 + 2 + 2 = 5$ e $0 + 2 + 4 = 6$.
> 4. **Il sistema $2 \times 2$.** $3a + 3b = 5$ e $3a + 5b = 6$. Togliendo la prima dalla seconda: $2b = 1$, cioè $b = \frac12$. Poi $3a = 5 - \frac32 = \frac72$, cioè $a = \frac76$.
> 5. **Controllo.** Sulla retta i valori sono $\frac76$, $\frac76 + \frac12 = \frac53$ e $\frac76 + 1 = \frac{13}6$. Gli errori sono $1 - \frac76 = -\frac16$, $2 - \frac53 = \frac13$ e $2 - \frac{13}6 = -\frac16$. Sono perpendicolari alle colonne: $-\frac16 + \frac13 - \frac16 = 0$ e $0 + \frac13 - \frac13 = 0$. La somma dei quadrati degli errori è $\frac1{36} + \frac4{36} + \frac1{36} = \frac16$: nessuna retta fa meglio.

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
> Come osservano le dispense, l'esempio precedente è proprio una **regressione lineare** con una variabile. I dati osservati vengono raccolti in un vettore $b$, mentre la matrice $A$ contiene le caratteristiche usate per fare la previsione. Il modello produce il vettore $Ax$, e i parametri $x$ vengono scelti rendendo minima la somma dei quadrati degli errori. Con più variabili si aggiungono altre colonne alla matrice $A$. I minimi quadrati sono uno dei primi esempi in cui ombre e sistemi lineari diventano un metodo per **imparare un modello dai dati**.

> [!METODO] Minimi quadrati passo per passo
> 1. Scrivi il sistema come $Ax = b$. Per una retta $y = a + bt$: righe $(1, t_i)$, dati $y_i$.
> 2. Calcola ${}^tA\,A$, i prodotti scalari tra le colonne, e ${}^tA\,b$, i prodotti tra le colonne e i dati.
> 3. Risolvi il sistema quadrato ${}^tA\,A\,x_0 = {}^tA\,b$.
> 4. Controlla che l'errore $b - Ax_0$ sia perpendicolare a tutte le colonne di $A$.

> [!OLTRE] Dove trovarlo nel libro
> Martelli: §7.1.7 «Vettori ortogonali» (pp. 205–206); §7.3 «Sottospazio ortogonale» (pp. 213–218), con il Teorema 7.3.12 sulle dimensioni; capitolo 8, §8.1.5 «Proiezione ortogonale» (pp. 244–245), §8.1.6 «Coefficienti di Fourier» (pp. 245–247), §8.1.7 «Ortogonalizzazione di Gram–Schmidt» (pp. 247–249), §8.1.8 «Riscalamento» (pp. 249–250), §8.1.9 «Ortogonalità» (p. 250) e §8.1.10 «Proiezioni su sottospazi» (pp. 251–253). I minimi quadrati non sono nel libro: per quella sezione fanno fede le dispense.

::: prova Il sistema $x = 1$, $x = 3$ non ha soluzioni. Qual è la soluzione ai minimi quadrati?
$A = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ e $b = (1, 3)$: ${}^tAA = 2$ e ${}^tAb = 4$, quindi $x_0 = 2$, la media. Gli errori sono $-1$ e $1$.
:::

> [!RICORDA]
> - La soluzione ai minimi quadrati rende minima la somma dei quadrati degli errori.
> - Si trova risolvendo le equazioni normali ${}^tA\,A\,x_0 = {}^tA\,b$; l'errore finale è perpendicolare alle colonne di $A$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\langle v, w\rangle = 0$ | «prodotto scalare zero» | $v$ e $w$ sono ortogonali, cioè perpendicolari | $\langle (1, 2), (-2, 1)\rangle = 0$ |
| $W^\perp$ | «vu doppio perp» | il complemento ortogonale: i vettori perpendicolari a tutto $W$ | il complemento di un piano dello spazio è una retta |
| $p_w(v)$ | «proiezione di vu su vu doppio» | l'ombra di $v$ sulla retta di $w$ | $p_{(1, 1)}(3, 1) = (2, 2)$ |
| $p_W(v)$ | «proiezione di vu su vu doppio maiuscolo» | l'ombra di $v$ sul sottospazio $W$ | |
| $\frac{\langle v, w\rangle}{\langle w, w\rangle}$ | «coefficiente di Fourier» | il numero davanti a $w$ nell'ombra | |
| $V = W \oplus W^\perp$ | «somma diretta» | ogni vettore si spezza in un solo modo | |
| ${}^tA\,A\,x_0 = {}^tA\,b$ | «equazioni normali» | il sistema dei minimi quadrati | |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026**

Questa lezione è la base del **problema 12** di molti appelli: in 7 dei 15 appelli 2023–2026 il problema 12 riguarda prodotti scalari, Gram–Schmidt e proiezioni, e in altri due chiede anche una proiezione su un piano. Lo schema tipico:

1. **base ortonormale (o ortogonale) di un piano** generato da due vettori dello spazio, con Gram–Schmidt: appelli del 10/06/2024, del 03/06/2026 e del 07/09/2026 con il prodotto di tutti i giorni; del 16/01/2025 e del 03/07/2026 con un $g_S$;
2. **ombra** di un vettore su quel piano: stessi appelli tranne quello del 03/07/2026, che chiede invece il complemento ortogonale; in più il 24/01/2024, il 05/02/2026 (con $g_S$) e il 15/01/2026 (punto 4);
3. **complemento ortogonale**: appelli del 07/02/2025 (tra i polinomi) e del 03/07/2026 (di un piano con un $g_S$);
4. il punto successivo, l'intersezione di una retta con il piano e l'angolo, è materia delle lezioni L23–L24.

Nel quiz: l'appello del 05/02/2026 (domanda 2) usa il fatto che il complemento ortogonale è sempre un sottospazio. Negli appelli 2023–2026 non ci sono domande sui minimi quadrati, che le dispense 2026 trattano nella sezione 21.E: vanno comunque studiati.

### Una domanda vera, letta insieme

**Appello del 03/06/2026, problema 12, punti (1) e (2).** Il testo: «Siano $v_1 = (1, 1, 0)$ e $v_2 = (0, 1, 1)$. (1) Calcolare una base ortonormale di $V = \Span(v_1, v_2)$. (2) Determinare la proiezione ortogonale di $w = (2, 1, 2)$ su $V$».

**In pratica chiede:** raddrizza la base del piano, poi trova l'ombra di $w$ sul piano.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: il primo vettore resta.** $w_1 = v_1 = (1, 1, 0)$, con $\langle w_1, w_1\rangle = 2$.
>
> **Passo 2: raddrizzo il secondo.** $\langle v_2, w_1\rangle = 0 + 1 + 0 = 1$, quindi
> $$w_2 = (0, 1, 1) - \frac12(1, 1, 0) = \left(-\frac12, \frac12, 1\right).$$
> Riscalo per togliere le frazioni: $w_2' = (-1, 1, 2)$. Controllo: $\langle w_1, w_2'\rangle = -1 + 1 + 0 = 0$.
>
> **Passo 3: lunghezze 1.** $w_1$ è lungo $\sqrt2$ e $w_2'$ è lungo $\sqrt{1 + 1 + 4} = \sqrt6$. La base ortonormale è $\left\{\frac{1}{\sqrt2}(1, 1, 0),\ \frac{1}{\sqrt6}(-1, 1, 2)\right\}$.
>
> **Passo 4: l'ombra, con la base ortogonale (senza radici).** $\langle w, w_1\rangle = 2 + 1 + 0 = 3$ e $\langle w, w_2'\rangle = -2 + 1 + 4 = 3$:
> $$p_V(w) = \frac32(1, 1, 0) + \frac36(-1, 1, 2) = \left(\frac32 - \frac12,\ \frac32 + \frac12,\ 0 + 1\right) = (1, 2, 1).$$
>
> **Passo 5: controllo.** Il resto $w - p_V(w) = (1, -1, 1)$ è perpendicolare a $v_1$, perché $1 - 1 = 0$, e a $v_2$, perché $-1 + 1 = 0$.

### Altre due domande vere

> [!ESAME] Appello del 16/01/2025, problema 12, punti (2) e (3)
> *Sia $g_S$ il prodotto scalare di $\R^3$ con $S = \operatorname{diag}(1, 2, 3)$. Siano*
> $$v_1 = (1, 1, 0), \quad v_2 = (1, 0, 1), \quad v_3 = (0, 1, 1).$$
> *(2) Applicare Gram–Schmidt per trovare una base ortogonale di $\Span(v_1, v_2)$ rispetto a $g_S$. (3) Calcolare la proiezione ortogonale di $v_3$ su $\Span(v_1, v_2)$ rispetto a $g_S$.*
>
> **Soluzione.** Con $S$ diagonale, $g_S(x, y) = x_1y_1 + 2x_2y_2 + 3x_3y_3$.
> (2) $w_1 = v_1$, con $g_S(w_1, w_1) = 1 + 2 = 3$ e $g_S(v_2, w_1) = 1 + 0 + 0 = 1$. Quindi $w_2 = (1, 0, 1) - \frac13(1, 1, 0) = \left(\frac23, -\frac13, 1\right)$; riscalo: $w_2' = (2, -1, 3)$. Controllo: $g_S(w_1, w_2') = 2 - 2 + 0 = 0$.
>
> (3) $g_S(v_3, w_1) = 0 + 2 + 0 = 2$; $g_S(v_3, w_2') = 0 - 2 + 9 = 7$; $g_S(w_2', w_2') = 4 + 2 + 27 = 33$. Quindi
> $$\begin{aligned} p(v_3) &= \frac23(1, 1, 0) + \frac{7}{33}(2, -1, 3) \\ &= \left(\frac{22 + 14}{33}, \frac{22 - 7}{33}, \frac{21}{33}\right) = \left(\frac{12}{11}, \frac{5}{11}, \frac{7}{11}\right). \end{aligned}$$
> Controllo: il resto è $\left(-\frac{12}{11}, \frac{6}{11}, \frac{4}{11}\right)$. Il suo prodotto $g_S$ con $v_1$ è $-\frac{12}{11} + \frac{12}{11} = 0$. Con $v_2$ è $-\frac{12}{11} + \frac{12}{11} = 0$. L'errore da non fare: usare il prodotto di tutti i giorni in uno dei conti.

> [!ESAME] Appello del 07/02/2025, problema 12, punto (3)
> *Con il prodotto $g$ sui polinomi di grado al massimo 2 della lezione L19, di matrice $\begin{pmatrix} 6 & 1 & 3 \\ 1 & 2 & 0 \\ 3 & 0 & 2 \end{pmatrix}$ nella base $\{1, x, x^2\}$, trovare una base del complemento ortogonale di $\Span(x, x^2)$.*
>
> **Soluzione.** Per $p = a + bx + cx^2$: $g(p, x)$ è la seconda coordinata di $S(a, b, c)$, cioè $a + 2b$; $g(p, x^2)$ è la terza, cioè $3a + 2c$. Il sistema $a + 2b = 0$, $3a + 2c = 0$ dà $b = -\frac a2$ e $c = -\frac{3a}2$. Con $a = 2$: $p = 2 - x - 3x^2$. Il complemento è la retta di questo polinomio, di dimensione $3 - 2 = 1$ come prevede il Teorema 21.8. Controllo: $S(2, -1, -3) = (12 - 1 - 9,\ 2 - 2 + 0,\ 6 + 0 - 6) = (2, 0, 0)$, con seconda e terza coordinata zero. Nei punti precedenti il problema chiedeva la matrice (lezione L19) e l'angolo tra $x$ e $x^2$ (lezione L20): $g(x, x^2) = 0$, quindi è retto.

**Errori da evitare.**

- Proiettare su una base **non ortogonale** del piano sommando le ombre sui singoli vettori: il risultato è sbagliato. Prima Gram–Schmidt.
- In Gram–Schmidt, togliere le ombre sui vettori vecchi invece che su quelli nuovi.
- Dimenticare di **controllare** la perpendicolarità: è un conto di pochi secondi e salva molti punti.
- Con un $g_S$, calcolare un prodotto con quello di tutti i giorni.
- Confondere l'ombra, che sta in $W$, con il resto, che è perpendicolare a $W$.

> [!ESAME] Sul foglio da 4 facciate
> - $p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}\,w$; il resto $v - p_w(v)$ è perpendicolare a $w$.
> - Base ortogonale: $v = \sum \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}v_i$; ortonormale: $v = \sum \langle v, v_i\rangle v_i$.
> - Gram–Schmidt per tre vettori (le tre righe della formula), con il consiglio di riscalare.
> - $V = W \oplus W^\perp$, $\dim W^\perp = \dim V - \dim W$; $p_W(v) = \sum_i \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}w_i$ con $w_i$ **ortogonali**; $p_W(v) = v - p_{W^\perp}(v)$; distanza $= \|v - p_W(v)\|$.
> - Minimi quadrati: ${}^tAAx_0 = {}^tAb$; errore perpendicolare alle colonne.

## Quiz

```quiz
D: Rispetto al prodotto scalare euclideo, il complemento ortogonale di $W = \Span({}^t(1, 2, -1))$ in $\R^3$ è:
+ il piano $\{x + 2y - z = 0\}$
- la retta $\Span({}^t(1, 2, -1))$
- l'insieme $\{x + 2y - z = 1\}$
- la retta $\Span({}^t(-2, 1, 0))$
- $\{0\}$
= Un vettore sta nel complemento esattamente quando è perpendicolare al generatore: $x + 2y - z = 0$, un piano. La risposta più insidiosa è la retta di $(-2, 1, 0)$: sta dentro il piano, ma è solo una parte del complemento. L'insieme con «= 1» non contiene lo zero, quindi non è un sottospazio. Simile al punto sul complemento ortogonale dei problemi del 07/02/2025 e del 03/07/2026.

D: Qual è la proiezione ortogonale (prodotto euclideo) di $v = {}^t(3, 1)$ sulla retta $\Span({}^t(1, 1))$?
+ ${}^t(2, 2)$
- ${}^t(4, 4)$
- ${}^t(1, -1)$
- ${}^t(2\sqrt2, 2\sqrt2)$
- ${}^t(1, 1)$
= Il numero davanti è $\frac{3 + 1}{1 + 1} = 2$, quindi l'ombra è $(2, 2)$. La risposta più insidiosa è $(2\sqrt2, 2\sqrt2)$, che divide per la lunghezza invece che per la lunghezza al quadrato. $(1, -1)$ è il resto, non l'ombra; $(4, 4)$ dimentica di dividere. Simile al punto (2) dei problemi 12 del 03/06/2026 e del 07/09/2026.

D: La base $\{{}^t(1, 1), {}^t(1, -1)\}$ di $\R^2$ è ortogonale. Quali sono le coordinate di $v = {}^t(5, 1)$ in questa base?
+ $(3, 2)$
- $(6, 4)$
- $(5, 1)$
- $(2, 3)$
- $(3, -2)$
= Coefficienti di Fourier: $\frac{5 + 1}{2} = 3$ e $\frac{5 - 1}{2} = 2$. Controllo: $3(1, 1) + 2(1, -1) = (5, 1)$. La risposta più insidiosa è $(6, 4)$, che dimentica di dividere per 2, il prodotto di ogni vettore della base con sé stesso. $(5, 1)$ sono le coordinate nella base canonica.

D: Applicando Gram–Schmidt (prodotto euclideo) a $v_1 = {}^t(1, 1, 0)$ e $v_2 = {}^t(1, 0, 1)$, il vettore $w_2$ è:
+ ${}^t\left(\frac12, -\frac12, 1\right)$
- ${}^t(0, -1, 1)$
- ${}^t(1, 0, 1)$
- ${}^t\left(\frac12, \frac12, 1\right)$
- ${}^t\left(-\frac12, \frac12, 1\right)$
= Si toglie a $v_2$ la sua ombra su $v_1$: $(1, 0, 1) - \frac12(1, 1, 0) = \left(\frac12, -\frac12, 1\right)$. La risposta più insidiosa è l'ultima: è perpendicolare a $v_1$, ma non sta nel piano di $v_1$ e $v_2$. $(0, -1, 1)$ toglie tutto $v_1$ invece di metà. Simile al punto (1) dei problemi 12 del 07/09/2026 e del 03/06/2026.

D: Sia $W$ un sottospazio di dimensione 2 di $\R^5$, con il prodotto scalare euclideo. Qual è la dimensione di $W^\perp$?
N: 3
= Per il Teorema 21.8 le dimensioni di $W$ e del suo complemento sommano a 5, quindi il complemento ha dimensione 3.

D: Sia $V$ di dimensione finita con un prodotto scalare definito positivo e sia $W \subset V$ un sottospazio. Quale affermazione è sempre vera?
+ $V = W \oplus W^\perp$
- $W \cap W^\perp = W$
- $W^\perp$ è l'insieme dei vettori di $V$ che non stanno in $W$
- $\dim W^\perp = \dim W$
- $W^\perp$ è un sottospazio solo se $W$ è una retta
= È il Teorema 21.8. La risposta più insidiosa è la terza: «tutto quello che non sta in $W$» non contiene lo zero e non è un sottospazio, mentre il complemento ortogonale è fatto dei vettori perpendicolari. L'intersezione è solo lo zero; le dimensioni sommano alla dimensione dello spazio, non sono uguali; il complemento è sempre un sottospazio (Proposizione 21.4).

D: Il vettore $x_0$ è una soluzione ai minimi quadrati del sistema $Ax = b$ se e solo se:
+ ${}^tA\,A\,x_0 = {}^tA\,b$
- $Ax_0 = b$
- ${}^tA\,x_0 = b$
- $A\,{}^tA\,x_0 = b$
- $x_0 = A^{-1}b$
= Sono le equazioni normali (Teorema 21.11). La risposta più insidiosa è $Ax_0 = b$: di solito non ha soluzioni, ed è proprio il motivo per cui si usano i minimi quadrati. $A$ in genere non è quadrata, quindi $A^{-1}$ non ha senso; le altre due non hanno nemmeno le taglie giuste.

D: Quale dei seguenti insiemi **non** è un sottospazio di $\R_2[x]$ (con un prodotto scalare definito positivo fissato)?
+ $\{x^2 + tx \mid t \in \R\}$
- $\R_1[x]^\perp$
- $\Span(1 + x, x^2)$
- $\{p(x) \in \R_2[x] \mid p(1) = p(2)\}$
- $\{p(x) \in \R_2[x] \mid p(0) = 0\}$
= $\{x^2 + tx\}$ non contiene il polinomio nullo: il numero davanti a $x^2$ è sempre 1. La risposta più insidiosa è il complemento ortogonale, che sembra strano ma è sempre un sottospazio (Proposizione 21.4). Uno Span lo è sempre, e gli ultimi due sono dati da equazioni lineari senza termine noto. Simile all'appello del 05/02/2026, domanda 2.

D: Rispetto al prodotto scalare euclideo, quanto vale la distanza del vettore $v = {}^t(3, 0, 0)$ dal piano $W = \{x + 2y + 2z = 0\}$?
N: 1
= Il complemento del piano è la retta di $n = (1, 2, 2)$, lungo 3. La distanza è la lunghezza dell'ombra di $v$ su $n$: $\frac{|\langle v, n\rangle|}{\|n\|} = \frac33 = 1$. Idea simile alla distanza punto-piano dell'appello del 16/01/2025 (domanda 4), che però riguarda un piano che non passa per l'origine (lezione L24).

D: Se $\{v_1, \dots, v_n\}$ è una base **ortonormale** di $V$, la coordinata $i$-esima di un vettore $v$ in questa base è:
+ $\langle v, v_i\rangle$
- $\|v\|$
- $\langle v_i, v_i\rangle$
- $\langle v, v\rangle$
- $\langle v, v_1\rangle + \dots + \langle v, v_n\rangle$
= Per la Proposizione 21.6 la coordinata è $\frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}$, e in una base ortonormale il denominatore vale 1. La risposta più insidiosa è l'ultima, che somma tutti i coefficienti invece di prenderne uno. Le altre non dipendono da $i$, oppure valgono sempre 1.
```

## Esercizi

::: esercizio base Riscaldamento: perpendicolari o no?
Con il prodotto di tutti i giorni: (a) $(1, 2)$ e $(4, -2)$; (b) $(1, 1, 1)$ e $(1, -2, 1)$; (c) $(2, 1)$ e $(1, 1)$.
::: soluzione
1. (a) $4 - 4 = 0$: perpendicolari.
2. (b) $1 - 2 + 1 = 0$: perpendicolari.
3. (c) $2 + 1 = 3$: non perpendicolari.
:::

::: esercizio base Riscaldamento: l'ombra sugli assi
Trova l'ombra di $(3, 4)$ sulla retta di $(1, 0)$ e sulla retta di $(0, 1)$. Che cosa ottieni sommandole?
::: soluzione
1. Sulla retta di $(1, 0)$: $\frac{3}{1}(1, 0) = (3, 0)$.
2. Sulla retta di $(0, 1)$: $\frac{4}{1}(0, 1) = (0, 4)$.
3. La somma è $(3, 4)$: la base canonica è ortogonale, e ogni vettore è la somma delle sue ombre (Proposizione 21.6).
:::

::: esercizio base Riscaldamento: complemento di una retta del piano
Qual è il complemento ortogonale della retta di $(3, 5)$ nel piano?
::: soluzione
Scambio le coordinate e cambio un segno: è la retta di $(-5, 3)$. Controllo: $-15 + 15 = 0$.
:::

::: esercizio base Riscaldamento: da ortogonale a ortonormale
La base $(1, 1)$, $(1, -1)$ è ortogonale. Rendila ortonormale.
::: soluzione
1. Tutti e due i vettori sono lunghi $\sqrt2$.
2. Dividendo: $\frac{1}{\sqrt2}(1, 1)$ e $\frac{1}{\sqrt2}(1, -1)$.
:::

::: esercizio base Complementi ortogonali
Con il prodotto euclideo, trova una base di $W^\perp$ per: (a) $W = \Span((3, -1)) \subset \R^2$; (b) $W = \Span((1, 0, 2)) \subset \R^3$; (c) $W = \Span((1, 1, 1), (1, 0, -1)) \subset \R^3$.
::: soluzione
(a) Scambio le coordinate e cambio un segno: la retta di $(1, 3)$. Controllo: $3 - 3 = 0$.

(b) Equazione $x + 2z = 0$, cioè $x = -2z$, con $y$ e $z$ libere. Base: $(0, 1, 0)$, con $y = 1$ e $z = 0$, e $(-2, 0, 1)$, con $y = 0$ e $z = 1$. Il complemento ha dimensione 2.

(c) Due equazioni: $x + y + z = 0$ e $x - z = 0$. Dalla seconda $x = z$; dalla prima $y = -2z$. Il complemento è la retta di $(1, -2, 1)$. Controllo: $1 - 2 + 1 = 0$ e $1 + 0 - 1 = 0$.
:::

::: esercizio base Proiezioni su una retta
(a) Proietta $v = (4, 2)$ sulla retta di $w = (1, 1)$ e scrivi $v$ come somma di un vettore della retta e di uno perpendicolare. (b) Proietta $v = (1, 0, 2)$ sulla retta di $w = (2, 1, 2)$.
::: soluzione
(a) Il numero davanti è $\frac{6}{2} = 3$, quindi l'ombra è $(3, 3)$. Il resto è $(4, 2) - (3, 3) = (1, -1)$, perpendicolare a $(1, 1)$. Quindi $(4, 2) = (3, 3) + (1, -1)$.

(b) $\langle v, w\rangle = 2 + 0 + 4 = 6$ e $\langle w, w\rangle = 4 + 1 + 4 = 9$: l'ombra è $\frac69(2, 1, 2) = \left(\frac43, \frac23, \frac43\right)$. Controllo: il resto $\left(-\frac13, -\frac23, \frac23\right)$ per $w$ dà $-\frac23 - \frac23 + \frac43 = 0$.
:::

::: esercizio base Coordinate in una base ortogonale di $\R^3$
Verifica che $v_1 = (1, 1, 1)$, $v_2 = (1, -1, 0)$, $v_3 = (1, 1, -2)$ formano una base ortogonale e trova le coordinate di $v = (2, 0, 4)$ senza risolvere sistemi.
::: soluzione
**Perpendicolarità.** $\langle v_1, v_2\rangle = 1 - 1 + 0 = 0$; $\langle v_1, v_3\rangle = 1 + 1 - 2 = 0$; $\langle v_2, v_3\rangle = 1 - 1 + 0 = 0$. Tre vettori non nulli e perpendicolari nello spazio sono indipendenti, quindi sono una base.

**Coordinate.**
- $\frac{\langle v, v_1\rangle}{\langle v_1, v_1\rangle} = \frac{2 + 0 + 4}{3} = 2$;
- $\frac{\langle v, v_2\rangle}{\langle v_2, v_2\rangle} = \frac{2 - 0 + 0}{2} = 1$;
- $\frac{\langle v, v_3\rangle}{\langle v_3, v_3\rangle} = \frac{2 + 0 - 8}{6} = -1$.

Controllo: $2(1, 1, 1) + (1, -1, 0) - (1, 1, -2) = (2 + 1 - 1,\ 2 - 1 - 1,\ 2 + 0 + 2) = (2, 0, 4)$.
:::

::: esercizio medio Esercizio 21.13 delle dispense
Trovare la soluzione ai minimi quadrati del sistema
$$\begin{cases} x = 1, \\ y = 1, \\ x + y = 3. \end{cases}$$
Scrivere il sistema nella forma $Ax = b$, risolvere le equazioni normali e verificare che il vettore errore $b - Ax_0$ sia ortogonale alle colonne di $A$.
::: soluzione
**Il sistema non ha soluzioni.** Le prime due equazioni danno $x = y = 1$, ma allora $x + y = 2$, non 3.

**Forma $Ax = b$.** Una riga per equazione, una colonna per incognita:
$$A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}, \qquad \begin{pmatrix} x \\ y \end{pmatrix}, \qquad b = \begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix}.$$

**Equazioni normali.** Le colonne sono $A^1 = (1, 0, 1)$ e $A^2 = (0, 1, 1)$:
$${}^tA\,A = \begin{pmatrix} \langle A^1, A^1\rangle & \langle A^1, A^2\rangle \\ \langle A^2, A^1\rangle & \langle A^2, A^2\rangle \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix},$$
$${}^tA\,b = \begin{pmatrix} 1 + 0 + 3 \\ 0 + 1 + 3 \end{pmatrix} = \begin{pmatrix} 4 \\ 4 \end{pmatrix}.$$
Il sistema è $2x + y = 4$, $x + 2y = 4$. Togliendo la seconda dalla prima: $x - y = 0$, quindi $x = y$ e $3x = 4$:
$$x_0 = \begin{pmatrix} \frac43 \\ \frac43 \end{pmatrix}.$$
Le colonne di $A$ sono indipendenti, quindi questa è l'unica soluzione ai minimi quadrati.

**Vettore errore.** $Ax_0 = \left(\frac43, \frac43, \frac83\right)$ e
$$b - Ax_0 = \left(1 - \frac43,\ 1 - \frac43,\ 3 - \frac83\right) = \left(-\frac13, -\frac13, \frac13\right).$$
**Verifica.** Con $A^1$: $-\frac13 + 0 + \frac13 = 0$. Con $A^2$: $0 - \frac13 + \frac13 = 0$. L'errore è perpendicolare alle colonne, come dice il Teorema 21.11. La somma dei quadrati degli errori è $\frac19 + \frac19 + \frac19 = \frac13$.
:::

::: esercizio medio Gram–Schmidt e coordinate
(a) Mostra che $v_1 = (1, -1, 0)$, $v_2 = (2, 0, 1)$, $v_3 = (0, -1, 1)$ formano una base di $\R^3$ e ortogonalizzala con Gram–Schmidt. (b) Calcola le coordinate di $2e_1 - 5e_2 + e_3$ nella base ortogonale trovata.
::: soluzione
(a) **Base.** Con i tre vettori in colonna, il determinante lungo la prima riga è $1 \cdot (0 + 1) - 2 \cdot (-1 - 0) + 0 = 3$, non zero.

**Gram–Schmidt.**
- $w_1 = (1, -1, 0)$, con $\langle w_1, w_1\rangle = 2$.
- $\langle v_2, w_1\rangle = 2$, quindi $w_2 = (2, 0, 1) - \frac22(1, -1, 0) = (1, 1, 1)$, con $\langle w_2, w_2\rangle = 3$. Controllo: $\langle w_1, w_2\rangle = 1 - 1 + 0 = 0$.
- $\langle v_3, w_1\rangle = 0 + 1 + 0 = 1$ e $\langle v_3, w_2\rangle = 0 - 1 + 1 = 0$, quindi
  $$w_3 = (0, -1, 1) - \frac12(1, -1, 0) - 0 \cdot w_2 = \left(-\frac12, -\frac12, 1\right),$$
  che riscalo in $w_3' = (-1, -1, 2)$, con $\langle w_3', w_3'\rangle = 6$. Controllo: $\langle w_3', w_1\rangle = -1 + 1 = 0$ e $\langle w_3', w_2\rangle = -1 - 1 + 2 = 0$.

(b) $v = (2, -5, 1)$. Coefficienti di Fourier:
$$\begin{aligned} \frac{\langle v, w_1\rangle}{2} &= \frac{2 + 5}{2} = \frac72, \\ \frac{\langle v, w_2\rangle}{3} &= \frac{2 - 5 + 1}{3} = -\frac23, \\ \frac{\langle v, w_3'\rangle}{6} &= \frac{-2 + 5 + 2}{6} = \frac56. \end{aligned}$$
Controllo della prima coordinata: $\frac72 - \frac23 - \frac56 = \frac{21 - 4 - 5}{6} = 2$. Le altre due tornano allo stesso modo: $-\frac72 - \frac23 - \frac56 = -5$ e $0 - \frac23 + \frac53 = 1$.
:::

::: esercizio medio Proiezione su un piano e distanza
Sia $W = \{x - y + 2z = 0\} \subset \R^3$ (prodotto euclideo) e $v = (1, 2, 3)$. Calcola $p_W(v)$ e la distanza di $v$ da $W$.
::: soluzione
Uso la scorciatoia: il complemento è la retta di $n = (1, -1, 2)$, con $\langle n, n\rangle = 6$.

1. $\langle v, n\rangle = 1 - 2 + 6 = 5$, quindi l'ombra sulla retta è $\frac56(1, -1, 2)$.
2. L'ombra sul piano è $v$ meno questa: $\left(1 - \frac56,\ 2 + \frac56,\ 3 - \frac{10}6\right) = \left(\frac16, \frac{17}6, \frac43\right)$.
3. Controllo che stia nel piano: $\frac16 - \frac{17}6 + \frac83 = \frac{1 - 17 + 16}{6} = 0$.
4. Distanza: la lunghezza dell'ombra sulla retta, $\frac56\sqrt6 = \frac{5}{\sqrt6} = \frac{5\sqrt6}{6}$.
:::

::: esercizio medio Gram–Schmidt con un prodotto non euclideo
Sia $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$ (definita positiva). Applica Gram–Schmidt alla base canonica $e_1, e_2, e_3$ rispetto a $g_S$ e trova una base ortonormale per $g_S$.
::: soluzione
Ricorda: $g_S(e_i, e_j) = S_{ij}$, e $g_S(e_i, y)$ è la coordinata $i$ di $Sy$.

- $w_1 = e_1$, con $g_S(w_1, w_1) = S_{11} = 1$.
- $g_S(e_2, w_1) = S_{21} = 1$, quindi $w_2 = e_2 - e_1 = (-1, 1, 0)$. Calcolo $Sw_2 = (-1 + 1,\ -1 + 2,\ 0 + 1) = (0, 1, 1)$, quindi $g_S(w_2, w_2) = {}^tw_2\,(Sw_2) = 0 + 1 + 0 = 1$. Controllo: $g_S(w_1, w_2)$ è la prima coordinata di $Sw_2$, cioè 0.
- $g_S(e_3, w_1) = S_{31} = 0$ e $g_S(e_3, w_2)$ è la terza coordinata di $Sw_2$, cioè 1. Quindi $w_3 = e_3 - 0 \cdot w_1 - w_2 = (0, 0, 1) - (-1, 1, 0) = (1, -1, 1)$.
- $Sw_3 = (1 - 1,\ 1 - 2 + 1,\ -1 + 3) = (0, 0, 2)$. Controlli: $g_S(w_1, w_3) = 0$ e $g_S(w_2, w_3) = {}^tw_2\,(Sw_3) = 0$. Inoltre $g_S(w_3, w_3) = {}^tw_3\,(0, 0, 2) = 2$.

Base ortonormale per $g_S$: $\left\{(1, 0, 0),\ (-1, 1, 0),\ \frac{1}{\sqrt2}(1, -1, 1)\right\}$. Per il prodotto di tutti i giorni questi vettori non sono nemmeno perpendicolari: $\langle e_1, w_2\rangle = -1$.
:::

::: esercizio esame Base ortonormale di un piano, proiezione e distanza
Siano $v_1 = (1, 0, 1)$ e $v_2 = (2, 1, 0)$ in $\R^3$ con il prodotto euclideo, e $V = \Span(v_1, v_2)$. (1) Calcola una base ortonormale di $V$. (2) Calcola la proiezione ortogonale di $w = (2, 3, 2)$ su $V$. (3) Calcola la distanza di $w$ da $V$ e un'equazione cartesiana di $V$.
::: soluzione
(1) $w_1 = v_1$, con $\langle w_1, w_1\rangle = 2$. $\langle v_2, w_1\rangle = 2$, quindi $w_2 = (2, 1, 0) - (1, 0, 1) = (1, 1, -1)$, con $\langle w_2, w_2\rangle = 3$. Controllo: $\langle w_1, w_2\rangle = 1 + 0 - 1 = 0$. Base ortonormale: $\left\{\frac{1}{\sqrt2}(1, 0, 1),\ \frac{1}{\sqrt3}(1, 1, -1)\right\}$.

(2) $\langle w, w_1\rangle = 2 + 0 + 2 = 4$ e $\langle w, w_2\rangle = 2 + 3 - 2 = 3$:
$$\begin{aligned} p_V(w) &= \frac42(1, 0, 1) + \frac33(1, 1, -1) \\ &= (2, 0, 2) + (1, 1, -1) = (3, 1, 1). \end{aligned}$$

(3) $w - p_V(w) = (-1, 2, 1)$. Controllo: è perpendicolare a $v_1$ ($-1 + 0 + 1 = 0$) e a $v_2$ ($-2 + 2 + 0 = 0$). La distanza è $\|(-1, 2, 1)\| = \sqrt6$. Siccome $(-1, 2, 1)$ genera il complemento del piano, un'equazione del piano è $-x + 2y + z = 0$. Controllo: $v_1$ dà $-1 + 0 + 1 = 0$, $v_2$ dà $-2 + 2 + 0 = 0$.
:::

::: esercizio esame Ortonormalizzazione, complemento e proiezione con $g_S$
Su $\R^3$ sia $g_S$ con $S = \begin{pmatrix} 2 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$ (definita positiva), e siano $u = (1, 1, 0)$, $v = (0, 1, 1)$, $W = \Span(u, v)$. (1) Trova una base ortonormale di $W$ rispetto a $g_S$. (2) Trova una base del complemento ortogonale di $W$ rispetto a $g_S$. (3) Calcola la proiezione $g_S$-ortogonale di $e_1$ su $W$.
::: soluzione
Prima i vettori $Su = (2, 1, 1)$ e $Sv = (1, 1, 1)$. Allora $g_S(u, u) = {}^tu\,(Su) = 3$, $g_S(u, v) = {}^tu\,(Sv) = 2$ e $g_S(v, v) = {}^tv\,(Sv) = 2$.

(1) $w_1 = u$; $w_2 = v - \frac23 u = \left(-\frac23, \frac13, 1\right)$, riscalato in $w_2' = (-2, 1, 3)$. Poi $Sw_2' = (-4 + 3,\ 1,\ -2 + 3) = (-1, 1, 1)$. Controllo: $g_S(u, w_2') = {}^tu\,(Sw_2') = -1 + 1 + 0 = 0$. Inoltre $g_S(w_2', w_2') = 2 + 1 + 3 = 6$. Base ortonormale: $\left\{\frac{1}{\sqrt3}(1, 1, 0),\ \frac{1}{\sqrt6}(-2, 1, 3)\right\}$.

(2) Un vettore $x$ sta nel complemento se è perpendicolare per $g_S$ a $u$ e a $v$, cioè ${}^t(Su)\,x = 0$ e ${}^t(Sv)\,x = 0$:
$$2x_1 + x_2 + x_3 = 0, \qquad x_1 + x_2 + x_3 = 0.$$
Togliendo, $x_1 = 0$, poi $x_3 = -x_2$: il complemento è la retta di $(0, 1, -1)$, di dimensione $3 - 2 = 1$.

(3) $g_S(e_1, u)$ è la prima coordinata di $Su$, cioè 2; $g_S(e_1, w_2')$ è la prima coordinata di $Sw_2'$, cioè $-1$. Quindi
$$\begin{aligned} p_W(e_1) &= \frac23(1, 1, 0) - \frac16(-2, 1, 3) \\ &= \left(\frac23 + \frac13,\ \frac23 - \frac16,\ -\frac12\right) = \left(1, \frac12, -\frac12\right). \end{aligned}$$
Controllo: $e_1 - p_W(e_1) = \left(0, -\frac12, \frac12\right) = -\frac12(0, 1, -1)$ sta nel complemento.
:::

::: esercizio difficile Una retta per quattro punti
Trova la retta $y = a + bt$ dei minimi quadrati per i punti $(0, 0)$, $(1, 1)$, $(2, 1)$, $(3, 3)$, e calcola gli errori.
::: soluzione
$A$ ha righe $(1, t_i)$ e i dati sono $(0, 1, 1, 3)$:
$$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix}.$$
I numeri di ${}^tA\,A$ e di ${}^tA\,b$ sono prodotti scalari tra le colonne $(1, 1, 1, 1)$ e $(0, 1, 2, 3)$ e i dati:
$${}^tA\,A = \begin{pmatrix} 4 & 0 + 1 + 2 + 3 \\ 0 + 1 + 2 + 3 & 0 + 1 + 4 + 9 \end{pmatrix} = \begin{pmatrix} 4 & 6 \\ 6 & 14 \end{pmatrix},$$
$${}^tA\,b = \begin{pmatrix} 0 + 1 + 1 + 3 \\ 0 + 1 + 2 + 9 \end{pmatrix} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}.$$
Il sistema: $4a + 6b = 5$ e $6a + 14b = 12$. Moltiplico la prima per 3 e la seconda per 2: $12a + 18b = 15$ e $12a + 28b = 24$. Togliendo, $10b = 9$, cioè $b = \frac9{10}$. Poi $4a = 5 - \frac{54}{10} = -\frac4{10}$, cioè $a = -\frac1{10}$.

La retta è $y = -\frac1{10} + \frac9{10}t$. I valori sulla retta sono $-\frac1{10}, \frac8{10}, \frac{17}{10}, \frac{26}{10}$, e gli errori $\frac1{10}, \frac2{10}, -\frac7{10}, \frac4{10}$. Controllo: la loro somma è $\frac{1 + 2 - 7 + 4}{10} = 0$, quindi sono perpendicolari alla prima colonna; con la seconda, $\frac{0 + 2 - 14 + 12}{10} = 0$.
:::

::: esercizio difficile Ortogonalità e dimensioni
(a) Dimostra che vettori non nulli a due a due ortogonali sono linearmente indipendenti. (b) Deduci che se $w \ne 0$ in $V$ di dimensione $n$, allora $\dim \Span(w)^\perp = n - 1$, senza usare il Teorema 21.8. Suggerimento: guarda l'applicazione lineare $f(v) = \langle v, w\rangle$.
::: soluzione
(a) Da una ricetta che dà zero, $\lambda_1v_1 + \dots + \lambda_kv_k = 0$, si fa il prodotto scalare con $v_i$: resta solo $\lambda_i\langle v_i, v_i\rangle = 0$, perché gli altri pezzi sono zero. Siccome $v_i$ non è zero, $\langle v_i, v_i\rangle$ è positivo, quindi $\lambda_i = 0$ per ogni $i$.

(b) La macchina $f(v) = \langle v, w\rangle$ va dallo spazio ai numeri ed è lineare, perché il prodotto scalare lo è nel primo posto. Il suo nucleo è proprio il complemento della retta di $w$: basta la perpendicolarità al generatore. L'immagine non è solo lo zero, perché $f(w) = \|w\|^2$ è positivo: è tutta la retta dei numeri, di dimensione 1. Per il teorema della dimensione (Teorema 14.12) il nucleo ha dimensione $n - 1$.
:::

::: esercizio difficile Un complemento tra i polinomi
Su $\R_2[x]$ sia $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. Trova $\R_1[x]^\perp$ e verifica il risultato con i valori.
::: soluzione
La matrice nella base $\{1, x, x^2\}$ è $\begin{pmatrix} 3 & 0 & 2 \\ 0 & 2 & 0 \\ 2 & 0 & 2 \end{pmatrix}$ (lezione L19, esercizio 6). Per $p = a + bx + cx^2$, perpendicolare a $1$ e a $x$:
$$\langle p, 1\rangle = 3a + 2c = 0, \qquad \langle p, x\rangle = 2b = 0.$$
Quindi $b = 0$ e $a = -\frac{2c}3$. Con $c = 3$: $p = 3x^2 - 2$. Il complemento è la retta di questo polinomio, di dimensione $3 - 2 = 1$.

Verifica: $3x^2 - 2$ vale $1, -2, 1$ in $-1, 0, 1$. Allora $\langle p, 1\rangle = 1 - 2 + 1 = 0$ e $\langle p, x\rangle = -1 + 0 + 1 = 0$.
:::

## Domande di ripasso

::: domanda Quando due vettori sono ortogonali? Il vettore nullo è ortogonale a qualcosa?
Quando il loro prodotto scalare è zero; se non sono nulli, formano un angolo retto. Il vettore nullo è ortogonale a tutti, perché il suo prodotto con qualsiasi vettore è zero.
:::

::: domanda Quali vettori del piano sono perpendicolari a $(a, b)$, diverso da zero?
Quelli con $ax + by = 0$: la retta di $(-b, a)$. Si scambiano le coordinate e si cambia un segno.
:::

::: domanda Che cos'è $W^\perp$ e perché è un sottospazio?
L'insieme dei vettori perpendicolari a tutti i vettori di $W$. Contiene lo zero, e somme e multipli di vettori perpendicolari restano perpendicolari, perché il prodotto scalare è lineare nel primo posto.
:::

::: domanda Come si calcola $W^\perp$ in pratica?
Si chiede la perpendicolarità ai soli generatori di $W$: si ottiene un sistema lineare senza termini noti, con una equazione per generatore. Con un $g_S$ la riga dei numeri per il generatore $w_i$ è ${}^t(Sw_i)$.
:::

::: domanda Qual è la formula dell'ombra di $v$ sulla retta di $w$? Da dove viene?
$p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}w$. Si cerca un multiplo $kw$ con $v - kw$ perpendicolare a $w$: $\langle v, w\rangle - k\langle w, w\rangle = 0$.
:::

::: domanda Che cos'è il coefficiente di Fourier e a che cosa serve?
È il numero $\frac{\langle v, w\rangle}{\langle w, w\rangle}$, quello davanti a $w$ nell'ombra. In una base ortogonale i coefficienti di Fourier di un vettore sono proprio le sue coordinate, senza risolvere sistemi.
:::

::: domanda Come funziona l'algoritmo di Gram–Schmidt?
Il primo vettore resta. A ogni vettore successivo si tolgono le sue ombre sui vettori nuovi già costruiti. I vettori ottenuti sono perpendicolari e generano gli stessi spazi; dividendo per le lunghezze si ottiene una base ortonormale.
:::

::: domanda Perché nel calcolo di $w_3$ si proietta su $w_2$ e non su $v_2$?
Perché la formula «somma delle ombre» funziona solo su vettori già perpendicolari tra loro. Proiettando su $v_2$, che non è perpendicolare a $w_1$, il risultato di solito non è perpendicolare a $w_2$.
:::

::: domanda Che cosa dice il teorema di decomposizione ortogonale?
In dimensione finita, con un prodotto definito positivo, ogni vettore si scrive in un solo modo come un pezzo in $W$ più un pezzo perpendicolare a $W$. E le dimensioni di $W$ e del suo complemento sommano alla dimensione dello spazio.
:::

::: domanda Come si calcola l'ombra su un piano dello spazio? Ci sono scorciatoie?
Con una base ortogonale del piano si sommano le ombre sui due vettori. Scorciatoia: se $n$ genera il complemento del piano, l'ombra sul piano è $v$ meno l'ombra di $v$ sulla retta di $n$.
:::

::: domanda Perché l'ombra è il punto di $W$ più vicino a $v$?
Per ogni $w$ di $W$, il vettore $v - w$ è la somma di un pezzo perpendicolare a $W$ e di un pezzo in $W$. Per Pitagora la sua lunghezza al quadrato è la somma delle due lunghezze al quadrato, quindi è almeno quella di $v - p_W(v)$.
:::

::: domanda Che cosa sono le equazioni normali e perché funzionano?
${}^tAAx_0 = {}^tAb$. La scelta migliore è quella per cui $Ax_0$ è l'ombra di $b$ sullo spazio delle colonne di $A$. Allora l'errore è perpendicolare a tutte le colonne, cioè ${}^tA(b - Ax_0) = 0$.
:::

::: domanda Quando la soluzione ai minimi quadrati è unica?
Quando le colonne di $A$ sono indipendenti: allora ${}^tAA$ è invertibile e $x_0 = ({}^tAA)^{-1}\,{}^tA\,b$.
:::

## Glossario

```glossario
Vettori ortogonali | Vettori con prodotto scalare zero; se non nulli, formano un angolo retto.
Complemento ortogonale $W^\perp$ | L'insieme dei vettori perpendicolari a ogni vettore di $W$; è sempre un sottospazio.
Proiezione ortogonale su una retta | L'ombra $p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}w$: il vettore della retta di $w$ con il resto perpendicolare a $w$.
Coefficiente di Fourier | Il numero $\frac{\langle v, w\rangle}{\langle w, w\rangle}$.
Base ortogonale | Una base di vettori perpendicolari a due a due.
Base ortonormale | Una base ortogonale di vettori lunghi 1; le coordinate di $v$ sono $\langle v, v_i\rangle$.
Normalizzare | Dividere un vettore non nullo per la sua lunghezza.
Algoritmo di Gram–Schmidt | Raddrizza vettori indipendenti: a ognuno si tolgono le ombre sui vettori nuovi già costruiti. I nuovi vettori sono perpendicolari e generano gli stessi spazi.
Riscalare | Sostituire un vettore con un suo multiplo non nullo; non cambia le ombre e aiuta a evitare frazioni.
Somma diretta $\oplus$ | Ogni vettore si scrive in un solo modo come somma di un pezzo per ciascun sottospazio.
Decomposizione ortogonale | Lo spazio è $W \oplus W^\perp$ (Teorema 21.8), e le dimensioni sommano a quella dello spazio.
Proiezione ortogonale su un sottospazio | L'ombra $p_W(v)$, il pezzo in $W$ della scomposizione; con base ortonormale $\sum \langle v, w_i\rangle w_i$.
Teorema di Pitagora | Se due vettori sono perpendicolari, la lunghezza al quadrato della somma è la somma delle lunghezze al quadrato.
Distanza di un vettore da un sottospazio | La lunghezza di $v - p_W(v)$: la minima distanza tra $v$ e i vettori di $W$.
Soluzione ai minimi quadrati | La scelta $x_0$ che rende minima la lunghezza di $Ax - b$ (Definizione 21.10).
Equazioni normali | ${}^tAAx_0 = {}^tAb$; le loro soluzioni sono le soluzioni ai minimi quadrati.
Regressione lineare | La scelta dei parametri di un modello lineare che rende minima la somma dei quadrati degli errori.
Residuo (errore) | Il vettore $b - Ax$; nella soluzione ai minimi quadrati è perpendicolare alle colonne di $A$.
```

## Checklist

```checklist
- So decidere se due vettori sono perpendicolari, anche con un prodotto $g_S$ diverso da quello di tutti i giorni.
- So calcolare $W^\perp$ risolvendo il sistema dato dai generatori di $W$, e controllarne la dimensione.
- So spiegare perché $W^\perp$ è un sottospazio.
- So calcolare l'ombra di un vettore su una retta e ricavare la formula.
- So calcolare le coordinate di un vettore in una base ortogonale con i coefficienti di Fourier.
- So applicare Gram–Schmidt a due o tre vettori, controllando la perpendicolarità a ogni passo e riscalando.
- So trasformare una base ortogonale in una ortonormale.
- So enunciare e spiegare il teorema di decomposizione ortogonale e la regola delle dimensioni.
- So proiettare un vettore su un piano dello spazio, anche con la scorciatoia della retta perpendicolare, e calcolarne la distanza dal piano.
- So spiegare perché l'ombra è il punto più vicino, con Pitagora.
- So scrivere e risolvere le equazioni normali, e trovare la retta dei minimi quadrati per alcuni punti.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 21 «Prodotti scalari III», pp. 105–110: sezioni 21.A (vettori ortogonali e complemento), 21.B (proiezione ortogonale), 21.C (Gram–Schmidt), 21.D (decomposizione ortogonale), 21.E (minimi quadrati, con il riquadro sulla regressione lineare) e 21.F (l'Esercizio 21.13, svolto come esercizio 8). Numerazione delle dispense: Esempi 21.1, 21.2, 21.7, 21.12; Definizioni 21.3, 21.10; Proposizioni 21.4, 21.5, 21.6, 21.9; Teoremi 21.8, 21.11. Richiami: Definizione 18.4 (somma diretta), Teorema 14.12 (teorema della dimensione), lezioni L19 e L20.
- **B. Martelli, *Geometria e algebra lineare***: §7.1.7, §7.3 (sottospazio ortogonale, Proposizioni 7.3.3 e 7.3.7, Teorema 7.3.12), §8.1.5–8.1.10 (proiezioni, coefficienti di Fourier, Gram–Schmidt, riscalamento, Proposizioni 8.1.25 e 8.1.28, Esempio 8.1.19). Il libro è gratuito: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). L'esercizio 9 riprende l'Esercizio 8.2 del libro.
- **Appelli d'esame** (Moodle 2025/26): problemi 12 del 24/01/2024, 10/06/2024, 16/01/2025, 07/02/2025, 15/01/2026, 05/02/2026, 03/06/2026, 03/07/2026, 07/09/2026; domanda 2 del 05/02/2026. Le tre domande riportate sono risolte in questi appunti.
- Le parti **«Oltre le dispense»** (indipendenza dei vettori perpendicolari, generatori e complemento, lunghezza dell'ombra, riscalamento, collocazione nel libro) e gli esercizi aggiunti servono a collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
