---
corso: MDAG
modulo: AG
lezione: L26
titolo: Teorema spettrale II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L26
descrizione: >-
  Appunti della lezione L26 di Algebra lineare e Geometria (MDAG, parte 2): il teorema spettrale per gli endomorfismi
  autoaggiunti, la sua dimostrazione, la versione con le matrici simmetriche e ortogonali, il collegamento con la PCA e
  tutti gli esercizi delle dispense svolti, con quiz nello stile dell'esame.
lede: >-
  Una macchina simmetrica tira lo spazio come un foglio di gomma: lungo direzioni perpendicolari tra loro, senza
  storcerlo. È il teorema spettrale, l'ultimo del corso. Qui trovi perché è vero, il metodo per trovare quelle direzioni
  passo per passo e gli esercizi delle dispense, anche quello con i numeri complessi.
materiale: dispense
scheda:
  Dispense: lezione 26 · pp. 134–138
  Libro: Martelli, §11.3
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 26 «Teorema spettrale II»; B. Martelli, Geometria e algebra lineare, §11.3
appunti_html: appunti/MDAG/L26_teorema_spettrale_2.html
genera_html: true
---

## In breve

- Una matrice diagonalizzabile ha una base di autovettori (lezioni L17–L18). Il **teorema spettrale** dice **quando quella base si può scegliere ortonormale**: vettori lunghi 1 e perpendicolari tra loro.
- La risposta: esattamente quando la macchina è **autoaggiunta** (lezione L25) e i suoi autovalori sono numeri reali. Vale con i numeri reali e con i complessi.
- Una conseguenza da sapere: **una matrice reale simmetrica ha tutti gli autovalori reali** ed è sempre diagonalizzabile.
- Con le matrici: una matrice reale è **simmetrica** esattamente quando c'è una matrice **ortogonale** $M$ che la rende diagonale. E per una matrice ortogonale l'inversa è la trasposta: niente conti.
- Gli autovettori di autovalori **diversi** di una matrice simmetrica sono già **perpendicolari**. Gram–Schmidt serve solo dentro un autospazio con più dimensioni.
- Il metodo: autovalori, autospazi, Gram–Schmidt dove serve, vettori resi lunghi 1, e la matrice $M$ è pronta.
- Applicazione: la **PCA**, che cerca le direzioni in cui un insieme di dati varia di più.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Il problema: autovettori perpendicolari (p. 134)

Immagina un foglio di gomma fissato al centro. Lo tiri in due direzioni: in una lo allunghi di 3 volte, nell'altra lo lasci com'è. Se le due direzioni sono **perpendicolari**, il foglio si allunga senza storcersi. Se non lo sono, oltre ad allungarsi si piega di lato, come una pila di fogli spinta in alto.

Le direzioni in cui la macchina allunga senza girare sono le rette degli **autovettori** (lezione L17). Guarda due matrici di $\R^2$, tutte e due diagonalizzabili.

- $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ manda $(1, 1)$ in $(3, 3)$ e $(1, -1)$ in sé stesso. Gli autovettori sono $(1, 1)$, con autovalore 3, e $(1, -1)$, con autovalore 1. Il loro prodotto scalare è $1 - 1 = 0$: sono **perpendicolari**.
- $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ ha autovettori $(1, 0)$, con autovalore 3, e $(-1, 2)$, con autovalore 1. Il loro prodotto scalare è $-1$: **non** sono perpendicolari.

```grafico
titolo: La macchina simmetrica $S$ tira lungo due rette perpendicolari: allunga di 3 la retta di $(1, 1)$ e lascia ferma quella di $(1, -1)$
x: -3.5 3.5
y: -3 3.5
retta: 0 0 1 1 | accento | tratteggio | $V_3$ | ne
retta: 0 0 1 -1 | viola | tratteggio | $V_1$ | se
vettore: 3 3 | accento | sottile | $S(1, 1) = (3, 3)$ | so
vettore: 1 1 | accento | spesso | $(1, 1)$ | no
vettore: 1 -1 | viola | spesso | $(1, -1)$ | e
```

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

Perché conviene avere autovettori perpendicolari? Resi lunghi 1, formano una **base ortonormale**. Messi in colonna danno una matrice **ortogonale** $M$ (lezione L22), e per lei l'inversa è la trasposta: non serve calcolare nessuna inversa. In più, le coordinate di un vettore in quella base si trovano con i prodotti scalari (lezione L21).

La domanda è: **quando** si possono scegliere autovettori perpendicolari? Le dispense lo dicono subito: esattamente per le macchine autoaggiunte. Nel caso reale, per le matrici simmetriche, come $S$.

::: prova La matrice simmetrica $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ manda $(1, 2)$ in $(5, 10)$. In che direzione sta l'altro autovettore?
Perpendicolare a $(1, 2)$, per esempio $(2, -1)$. Controllo: la matrice lo manda in $(2 - 2,\ 4 - 4) = (0, 0)$, cioè in 0 volte sé stesso. Autovalore 0.
:::

> [!RICORDA]
> - Matrice simmetrica: il foglio si tira lungo direzioni perpendicolari.
> - Matrice non simmetrica: anche se diagonalizzabile, le direzioni possono essere storte.

## Il teorema spettrale (p. 134)

Lo spazio è di due tipi, come nella lezione L25: di vettori reali con un prodotto scalare definito positivo, oppure di vettori complessi con un prodotto hermitiano definito positivo. La dimensione è un numero finito $n$. Le dispense enunciano il teorema così.

> [!TEOREMA] 26.1 · Teorema spettrale
> Un endomorfismo $T \colon V \to V$ è autoaggiunto $\iff$ ha una base ortonormale di autovettori e tutti i suoi autovalori sono in $\R$.

**Come si legge.**

- **Autoaggiunto**: la macchina si sposta da un posto all'altro del prodotto senza cambiare il risultato (Definizione 25.5). In una base ortonormale vuol dire matrice **hermitiana**, o **simmetrica** con i numeri reali (Proposizione 25.6).
- **Base ortonormale di autovettori**: vettori $v_1, \dots, v_n$ che la macchina allunga senza girare, lunghi 1 e perpendicolari tra loro.
- **Autovalori reali**: con i numeri reali è automatico. Con i complessi è una condizione in più, e serve davvero.
- Il simbolo in mezzo vuol dire «esattamente quando»: le due cose vanno sempre insieme.

> [!ESEMPIO] Perché con i complessi serve «autovalori reali»
> Su $\C^2$ con il prodotto hermitiano euclideo, la macchina $T(x, y) = (ix, y)$ ha matrice $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$.
> - La base canonica è una base **ortonormale di autovettori**, con autovalori $i$ e 1.
> - Eppure $T$ **non** è autoaggiunta: sulla diagonale c'è $i$, quindi la matrice non è hermitiana (lezione L25).
>
> Il teorema non è contraddetto: l'autovalore $i$ non è reale.

Il nome «spettrale» viene da *spettro*, l'insieme degli autovalori di una macchina. Il teorema mette insieme due parti del corso: la diagonalizzazione (lezioni L17–L18) e i prodotti scalari e hermitiani (lezioni L19–L21 e L25).

::: prova La matrice reale $\begin{pmatrix} 4 & -1 \\ -1 & 0 \end{pmatrix}$ ha una base ortonormale di autovettori?
Sì: è simmetrica, quindi la macchina è autoaggiunta e il teorema garantisce la base.
:::

> [!RICORDA]
> - Teorema spettrale: autoaggiunta esattamente quando c'è una base ortonormale di autovettori con autovalori reali.
> - Con i complessi la condizione sugli autovalori reali non si può togliere.

## Perché è vero (pp. 134–135)

La dimostrazione delle dispense ha tre pezzi. Il primo è il verso facile. Il secondo è il verso difficile con i numeri complessi, e il terzo lo stesso con i numeri reali. All'esame non si chiede di ripeterla, ma l'idea serve a ricordare il metodo.

**Dalla base alla macchina autoaggiunta.** Se c'è una base ortonormale di autovettori con autovalori reali:

1. in quella base la matrice della macchina è **diagonale**, con gli autovalori sulla diagonale;
2. una matrice diagonale con numeri reali è uguale alla sua trasposta e alla sua coniugata: è hermitiana;
3. la base è ortonormale, quindi per la Proposizione 25.6 la macchina è autoaggiunta.

**Gli autovalori di una macchina autoaggiunta sono reali.** È il primo passo del verso difficile, ed è un conto di una riga. Prendi un autovettore $v$ con autovalore $\lambda$ e calcola il prodotto di $T(v)$ con $v$ in due modi: tenendo la macchina a sinistra, oppure spostandola a destra.

> [!DIM] gli autovalori sono reali
> Se $T(v) = \lambda v$ con $v$ diverso da zero:
> $$\lambda \langle v, v \rangle = \langle \lambda v, v \rangle = \langle T(v), v \rangle = \langle v, T(v) \rangle = \langle v, \lambda v \rangle = \bar\lambda \langle v, v \rangle.$$
> 1. Il primo passo usa la linearità nel primo posto; il secondo $T(v) = \lambda v$.
> 2. Il terzo usa che $T$ è autoaggiunta; il quarto di nuovo $T(v) = \lambda v$.
> 3. L'ultimo usa che un numero esce dal secondo posto coniugato (lezione L25).
>
> Siccome $\langle v, v \rangle$ è positivo, si può dividere: $\lambda = \bar\lambda$. Un numero uguale al suo coniugato è reale.

**La base ortonormale di autovettori, un vettore alla volta.** L'idea è staccare un autovettore alla volta. Trovato il primo, lo spazio si spezza in due stanze: la retta dell'autovettore e tutto ciò che le è perpendicolare. La macchina non mescola le due stanze, per la Proposizione 25.10. Dentro la stanza perpendicolare, che ha una dimensione in meno, si ricomincia.

> [!DIM] del Teorema 26.1, induzione sulla dimensione
> 1. **Dimensione 1.** Ogni vettore diverso da zero è un autovettore, perché la macchina è la moltiplicazione per un numero. Un vettore lungo 1 è già una base ortonormale di autovettori.
> 2. **Ipotesi.** Supponiamo il risultato vero in dimensione $n - 1$ e prendiamo $V$ di dimensione $n$.
> 3. **Esiste un autovettore.** Con i numeri complessi il polinomio caratteristico ha almeno una radice, per il **teorema fondamentale dell'algebra** (lezione L04). Quindi $T$ ha un autovalore e un autovettore $v$.
> 4. **Una stanza invariante più piccola.** La retta $\Span(v)$ è invariante, perché è fatta di multipli di un autovettore. Per la Proposizione 25.10 anche $U = \Span(v)^\perp$ è invariante. Inoltre $U$ ha dimensione $n - 1$ (lezione L21).
> 5. **Dentro $U$ la macchina è ancora autoaggiunta.** La macchina manda $U$ in $U$, e l'uguaglianza della Definizione 25.5 vale per tutti i vettori, quindi anche per quelli di $U$.
> 6. **Si usa l'ipotesi.** $U$ ha una base ortonormale $v_2, \dots, v_n$ di autovettori.
> 7. **Si aggiunge $v$.** Rendo $v$ lungo 1. È perpendicolare a tutti i $v_2, \dots, v_n$, che stanno in $U$. Quindi $v, v_2, \dots, v_n$ è una base ortonormale di autovettori di $V$.

**Con i numeri reali.** Sui reali un polinomio può non avere radici: per esempio $\lambda^2 + 1$. Quindi il punto 3 non è gratis. Le dispense lo sistemano così.

1. In una base ortonormale la macchina ha una matrice $S$ **reale e simmetrica** (Proposizione 25.6).
2. Vista come matrice complessa, $S$ è hermitiana. Per il caso complesso appena visto, **tutti i suoi autovalori sono reali**: il polinomio caratteristico ha una radice reale $\lambda$.
3. Il sistema $(S - \lambda I)x = 0$ ha numeri reali e soluzioni diverse da zero: c'è un autovettore **reale**.
4. Con questo autovettore si fa la stessa induzione.

C'è una conseguenza che le dispense sottolineano: **una matrice reale simmetrica ha sempre tutti gli autovalori reali.**

> [!OLTRE] Il caso $2 \times 2$ fatto a mano
> Per $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ reale, il polinomio caratteristico è $\lambda^2 - (a + c)\lambda + (ac - b^2)$. Il suo discriminante è
> $$(a + c)^2 - 4(ac - b^2) = a^2 - 2ac + c^2 + 4b^2 = (a - c)^2 + 4b^2,$$
> una somma di quadrati, quindi mai negativo: le radici sono sempre reali. Sono uguali solo se $a = c$ e $b = 0$, cioè se $S$ è già un multiplo dell'identità.

::: prova Quali sono gli autovalori di $\begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$? Sono reali?
Il polinomio è $(1 - \lambda)^2 - 9$, che si annulla con $1 - \lambda = 3$ oppure $1 - \lambda = -3$: autovalori $-2$ e 4. Reali, come deve essere per una matrice simmetrica.
:::

> [!RICORDA]
> - Gli autovalori di una macchina autoaggiunta sono reali: conto di una riga.
> - La base si costruisce staccando un autovettore alla volta; la stanza perpendicolare resta invariante.

## Il teorema con le matrici (p. 135)

Nello spazio delle colonne di numeri reali, con il prodotto scalare di tutti i giorni, il teorema diventa un fatto sulle matrici. È la forma che si usa negli esercizi. Le dispense la scrivono così.

> [!COROLLARIO] 26.2
> Sia $A$ una matrice $n \times n$ reale. Sono equivalenti i fatti seguenti:
> 1. $A$ è simmetrica;
> 2. $L_A$ ha una base ortonormale di autovettori;
> 3. esiste una matrice ortogonale $M$ tale che
> $${}^tM A M = M^{-1} A M = D$$
> sia una matrice diagonale.

**Come si legge.**

- «Equivalenti» vuol dire: se vale uno dei tre fatti, valgono tutti.
- **Matrice ortogonale** (Definizione 22.10): le sue colonne sono una base ortonormale, e la sua inversa è la trasposta. Per questo ${}^tM A M$ e $M^{-1} A M$ sono la stessa matrice.
- Sulla diagonale di $D$ ci sono gli autovalori, nello stesso ordine in cui le colonne di $M$ mettono gli autovettori.

Il perché, un passaggio alla volta:

1. **(1) e (2) insieme**: è il teorema spettrale. La macchina di $A$ è autoaggiunta esattamente quando $A$ è simmetrica (Corollario 25.7), e gli autovalori di una simmetrica reale sono reali.
2. **Da (2) a (3)**: i vettori della base ortonormale di autovettori, messi in colonna, danno una matrice ortogonale $M$, e $M^{-1} A M$ è diagonale (lezioni L17–L18).
3. **Da (3) a (2)**: se $M^{-1} A M$ è diagonale, le colonne di $M$ sono autovettori; se $M$ è ortogonale, sono una base ortonormale.

> [!TRAPPOLA] Diagonalizzabile non vuol dire simmetrica
> La matrice $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ è **diagonalizzabile**, perché ha due autovalori distinti, ma non è simmetrica. Ha una base di autovettori, ma non una base **ortonormale** di autovettori (Esercizio 26.3). Il teorema spettrale riconosce le matrici diagonalizzabili **con una matrice ortogonale**, non tutte quelle diagonalizzabili.

### Due fatti che accorciano i conti

Il primo fatto: autovettori di autovalori diversi sono già perpendicolari. È lo stesso trucco di prima, spostare la macchina dentro il prodotto.

> [!OLTRE] Autovettori di autovalori diversi sono ortogonali
> Prendi $A$ simmetrica, con $A v = \lambda v$ e $A w = \mu w$. Se $\lambda$ è diverso da $\mu$, allora $\langle v, w \rangle = 0$. Infatti, con $\mu$ reale,
> $$\lambda \langle v, w \rangle = \langle A v, w \rangle = \langle v, A w \rangle = \mu \langle v, w \rangle.$$
> Quindi $(\lambda - \mu)\langle v, w \rangle = 0$, e il primo fattore non è zero. Le dispense usano questo fatto nell'Esercizio 26.4: l'autovettore di un autovalore «è sempre automaticamente ortogonale» a quelli dell'altro.
>
> Conseguenza pratica: **Gram–Schmidt serve solo dentro un autospazio** con almeno due dimensioni. Tra autospazi diversi la perpendicolarità è gratis.

Il secondo fatto: una matrice simmetrica è diagonalizzabile, quindi per ogni autovalore la molteplicità geometrica è uguale a quella algebrica (Teorema 18.10). La dimensione di ogni autospazio si legge già dal polinomio caratteristico.

::: prova La matrice $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ è ortogonale? Quanto vale la sua inversa?
Le colonne sono $(0, 1)$ e $(1, 0)$: lunghe 1 e perpendicolari. È ortogonale, e l'inversa è la trasposta, cioè la matrice stessa.
:::

> [!RICORDA]
> - Reale simmetrica = diagonalizzabile con una matrice ortogonale, e ${}^tM = M^{-1}$.
> - Autovalori diversi: autovettori già perpendicolari. Gram–Schmidt solo dentro un autospazio grande.

## Il metodo, passo per passo (oltre le dispense)

Ecco il procedimento che gli esercizi chiedono. Prima la ricetta, poi due esempi svolti.

> [!METODO] Trovare una base ortonormale di autovettori, e la matrice $M$
> 1. **Controlla** che $A$ sia simmetrica. Se non lo è, per il Corollario 26.2 una base ortonormale di autovettori non esiste.
> 2. **Autovalori**: le radici di $p_A(\lambda) = \det(A - \lambda I)$, con le molteplicità.
> 3. **Autospazi**: per ogni autovalore risolvi $(A - \lambda I)x = 0$ e trova una base.
> 4. **Rendi perpendicolari** i vettori dentro ogni autospazio con almeno due dimensioni, con Gram–Schmidt o scegliendoli subito perpendicolari.
> 5. **Rendi lunghi 1** tutti i vettori, dividendo ciascuno per la sua lunghezza.
> 6. Mettili in colonna: è $M$, ortogonale. Allora ${}^tM A M$ è diagonale, con gli autovalori nell'ordine delle colonne.
> 7. **Controlla**: prodotti scalari zero a due a due, lunghezze 1.

> [!ESEMPIO] Una matrice $2 \times 2$
> $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ è simmetrica. Il polinomio è $(2 - \lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda - 3)(\lambda - 1)$.
> - $\lambda = 3$: $(A - 3I)x = 0$ dà $-x_1 + x_2 = 0$, autovettore $(1, 1)$;
> - $\lambda = 1$: $(A - I)x = 0$ dà $x_1 + x_2 = 0$, autovettore $(1, -1)$.
>
> Sono già perpendicolari, perché gli autovalori sono diversi. Li rendo lunghi 1: $\frac{1}{\sqrt 2}(1, 1)$ e $\frac{1}{\sqrt 2}(1, -1)$. Allora
> $$M = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \qquad {}^tM A M = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$
> Controllo: $A\,(1, 1) = (3, 3) = 3\,(1, 1)$ e $A\,(1, -1) = (1, -1)$.

> [!ESEMPIO] Una matrice $3 \times 3$ con un autovalore doppio
> $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$ è simmetrica.
>
> **Autovalori.** Con Sarrus, e chiamando $t = 2 - \lambda$:
> $$\det(A - \lambda I) = t^3 + 1 + 1 - t - t - t = t^3 - 3t + 2 = (t - 1)^2 (t + 2).$$
> Siccome $t - 1 = 1 - \lambda$ e $t + 2 = 4 - \lambda$, gli autovalori sono 1 (doppio) e 4 (semplice).
>
> **Autospazi.** Per $\lambda = 4$: ogni riga di $A$ somma a 4, quindi $(1, 1, 1)$ è un autovettore, e $V_4 = \Span((1, 1, 1))$. Per $\lambda = 1$: $A - I$ ha tutte le righe uguali a $(1, 1, 1)$, quindi $V_1$ è il piano $x_1 + x_2 + x_3 = 0$, con base $(1, -1, 0)$ e $(1, 0, -1)$.
>
> **Gram–Schmidt dentro $V_1$.** $w_1 = (1, -1, 0)$ e
> $$\begin{aligned} w_2 &= (1, 0, -1) - \frac{\langle (1, 0, -1), (1, -1, 0) \rangle}{\langle (1, -1, 0), (1, -1, 0) \rangle}(1, -1, 0) \\ &= (1, 0, -1) - \tfrac 12 (1, -1, 0) = \left(\tfrac 12, \tfrac 12, -1\right), \end{aligned}$$
> che moltiplico per 2: $(1, 1, -2)$. Controllo: è perpendicolare a $(1, -1, 0)$ e sta nel piano, perché $1 + 1 - 2 = 0$.
>
> **Vettori lunghi 1.** La base ortonormale di autovettori è
> $$\tfrac{1}{\sqrt 3}(1, 1, 1), \qquad \tfrac{1}{\sqrt 2}(1, -1, 0), \qquad \tfrac{1}{\sqrt 6}(1, 1, -2).$$
> Con queste colonne $M$ è ortogonale e ${}^tM A M = \operatorname{diag}(4, 1, 1)$. Il vettore $(1, 1, 1)$ è perpendicolare agli altri due senza Gram–Schmidt: autovalori diversi.

Con la calcolatrice qui sotto puoi controllare autovalori e autospazi (lo strumento scrive anche le molteplicità). Con la seconda puoi rifare Gram–Schmidt dentro l'autospazio $V_1$.

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

### Con i numeri complessi

Per una matrice **hermitiana** $H$ il procedimento è lo stesso, con due differenze.

- Prodotti e lunghezze si calcolano con il **prodotto hermitiano** (lezione L25): i numeri del secondo vettore si coniugano.
- La matrice $W$ con gli autovettori in colonna non è ortogonale: la sua inversa è la **trasposta coniugata** ${}^t\bar W$.

L'Esercizio 26.5 delle dispense lo mostra per esteso.

> [!TRAPPOLA] La lunghezza di un vettore complesso
> La lunghezza di $(1, i, i)$ è $\sqrt{1 + 1 + 1} = \sqrt 3$: si sommano i **moduli al quadrato**. Il conto senza moduli darebbe $1 + i^2 + i^2 = -1$, e la radice di un numero negativo come lunghezza non ha senso.

::: prova Rendi lungo 1 il vettore $(3, 4)$.
È lungo $\sqrt{9 + 16} = 5$: diviso per 5 diventa $\left(\frac 35, \frac 45\right)$.
:::

> [!RICORDA]
> - Metodo: autovalori, autospazi, Gram–Schmidt dentro gli autospazi grandi, vettori lunghi 1, colonne di $M$.
> - Con i complessi: prodotto hermitiano e $W^{-1} = {}^t\bar W$.

## Collegamento con l'informatica: la PCA (pp. 135–136)

Hai una nuvola di punti, per esempio altezza e peso di cento persone. In che direzione la nuvola è più allungata? È la domanda della **PCA**, l'analisi delle componenti principali, e la risposta la dà il teorema spettrale. Le dispense la presentano così.

> [!NOTA] PCA e riduzione dimensionale
> Le dispense chiudono la parte teorica con un'applicazione all'analisi dei dati: la **Principal Component Analysis** (PCA, analisi delle componenti principali). Si hanno dati **centrati** $x_1, \dots, x_N \in \R^n$, cioè con media zero, e si considera la matrice
> $$S = \frac 1N \sum_{i=1}^N x_i\, {}^t x_i.$$
> $S$ è **simmetrica**, quindi per il teorema spettrale ha una base ortonormale di autovettori. Gli autovettori con gli autovalori più grandi indicano le **direzioni** in cui i dati variano di più. Proiettando i dati sul sottospazio generato da poche di queste direzioni si ottiene una rappresentazione in dimensione più bassa, che conserva una parte importante dell'informazione. È il principio matematico della PCA.

**Perché $S$ è simmetrica.** Ogni $x_i\, {}^t x_i$ è una colonna per una riga, cioè una matrice $n \times n$, ed è uguale alla sua trasposta. La media di matrici simmetriche è simmetrica.

> [!OLTRE] Un esempio con quattro punti
> Prendiamo nel piano i punti $(2, 2)$, $(-2, -2)$, $(1, -1)$, $(-1, 1)$. La loro media è $(0, 0)$, quindi sono centrati.
> - $(2, 2)\,{}^t(2, 2) = \begin{pmatrix} 4 & 4 \\ 4 & 4 \end{pmatrix}$, e lo stesso per $(-2, -2)$;
> - $(1, -1)\,{}^t(1, -1) = \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$, e lo stesso per $(-1, 1)$.
>
> Quindi $S = \frac 14 \begin{pmatrix} 10 & 6 \\ 6 & 10 \end{pmatrix} = \begin{pmatrix} 5/2 & 3/2 \\ 3/2 & 5/2 \end{pmatrix}$. I suoi autovalori sono 4, con autovettore $(1, 1)$, e 1, con autovettore $(1, -1)$.
>
> La **prima componente principale** è la direzione $u_1 = \frac{1}{\sqrt 2}(1, 1)$. Le coordinate dei punti lungo $u_1$ sono $2\sqrt 2$, $-2\sqrt 2$, 0 e 0, e la media dei loro quadrati è $\frac{8 + 8}{4} = 4$: proprio l'autovalore. Lungo $u_2 = \frac{1}{\sqrt 2}(1, -1)$ la media dei quadrati è 1. Tenere solo la coordinata lungo $u_1$ riduce i dati a una dimensione, perdendo la parte di variabilità più piccola.

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
> Nel libro di Martelli il teorema spettrale è il §11.3 (pp. 352–355): Teorema 11.3.1 = 26.1, Corollario 11.3.2 = 26.2. Subito dopo (Esempio 11.3.3) il libro osserva che proiezioni e riflessioni ortogonali sono autoaggiunte, quindi hanno matrici simmetriche. Poi usa il teorema per calcolare la segnatura di una matrice simmetrica, contando gli autovalori positivi, negativi e nulli (Proposizione 11.3.4, con il criterio di Cartesio). Gli Esercizi 11.1 e 11.2 di fine capitolo (p. 355) sono simili al 26.3 e al nostro esercizio sulla matrice $\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$.

::: prova Perché la matrice $(1, 2)\,{}^t(1, 2)$ è simmetrica?
È $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$: fuori dalla diagonale c'è 2 in tutti e due i posti. In generale il posto $(j, k)$ è il prodotto della coordinata $j$ per la coordinata $k$, e il prodotto non cambia scambiandole.
:::

> [!RICORDA]
> - La matrice dei dati della PCA è simmetrica: ha direzioni principali perpendicolari.
> - Autovalore grande = direzione in cui i dati variano di più.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| ${}^tA = A$ | «a trasposta uguale ad a» | la matrice è simmetrica | $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ |
| ${}^tM M = I$ | «emme trasposta per emme è l'identità» | $M$ è ortogonale: colonne lunghe 1 e perpendicolari | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ |
| ${}^tM A M = D$ | «emme trasposta, a, emme uguale a di» | $A$ diventa diagonale con una matrice ortogonale | |
| $\operatorname{diag}(4, 1, 1)$ | «diagonale quattro, uno, uno» | la matrice diagonale con quei numeri | |
| $V_\lambda$ | «autospazio di lambda» | gli autovettori di $\lambda$, più lo zero | |
| $p_A(\lambda)$ | «polinomio caratteristico di a» | $\det(A - \lambda I)$ | |
| ${}^t\bar W$ | «trasposta coniugata di vu doppio» | l'inversa di $W$, se le colonne sono ortonormali per il prodotto hermitiano | |
| $T\vert_U$ | «ti ristretta a u» | la macchina usata solo sui vettori di $U$ | |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01/2027 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026.**

- **Problemi aperti con una matrice a parametro**: si calcola ${}^tA - A$ per capire per quali valori la matrice è simmetrica, e si conclude con il teorema spettrale. Appelli del 24/01/2024 (problema 11, punto 3: con $k = -1$ la matrice è simmetrica, quindi diagonalizzabile) e del 15/01/2026 (problema 11, punti 2 e 3: per quali $k$ ci sono autovalori reali e una base ortonormale di autovettori, e poi calcolarla).
- **Base ortonormale di un autospazio**: appello del 02/09/2025 (problema 11, punto 3).
- **Quiz teorici**: appello del 16/01/2025 (domanda 7).

### Una domanda vera, letta insieme

**Appello del 16/01/2025, domanda 7.** Il testo: «Sia $A \in M(4, \R)$ una matrice simmetrica con esattamente 2 autovalori reali distinti. Quale delle seguenti affermazioni è vera? (a) Almeno un autovalore di $A$ deve avere molteplicità maggiore di 1. (b) $A$ deve essere ortogonale. (c) Gli autovettori di $A$ sono ortonormali. (d) $A$ ha almeno un autovalore complesso. (e) $A$ non può essere diagonalizzabile».

**In pratica chiede:** una matrice simmetrica 4 per 4 con soli due autovalori. Che cosa dice di sicuro il teorema spettrale?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: che cosa garantisce il teorema.** $A$ è simmetrica: è diagonalizzabile e ha autovalori reali. Questo esclude subito (d) ed (e).
>
> **Passo 2: contare.** Diagonalizzabile vuol dire che le molteplicità dei due autovalori sommano a 4. Con due soli numeri che sommano a 4, almeno uno è 2 o più: è la (a).
>
> **Passo 3: le altre.** (b) è falsa: $\operatorname{diag}(2, 2, 3, 3)$ è simmetrica ma non ortogonale, perché le colonne non sono lunghe 1. (c) confonde «esiste una base ortonormale di autovettori» con «tutti gli autovettori sono ortonormali»: il doppio di un autovettore è ancora un autovettore, ma non è lungo 1.

### Un'altra domanda vera

> [!ESAME] Appello del 02/09/2025, problema 11, punto 3
> *Data $A = \begin{pmatrix} -6 & 3 & 3 \\ 3 & -6 & 3 \\ 3 & 3 & -6 \end{pmatrix}$, calcolare una base ortonormale dell'autospazio di $A$ con autovalore $-9$.*
>
> **Soluzione.**
> 1. $A + 9I$ ha tutte le righe uguali a $(3, 3, 3)$, quindi l'autospazio è il piano $x_1 + x_2 + x_3 = 0$, con base $(1, -1, 0)$ e $(1, 0, -1)$.
> 2. È lo stesso piano dell'esempio $3 \times 3$ del metodo: Gram–Schmidt dà $(1, -1, 0)$ e $(1, 1, -2)$.
> 3. Resi lunghi 1: $\frac{1}{\sqrt 2}(1, -1, 0)$ e $\frac{1}{\sqrt 6}(1, 1, -2)$.

Il problema 11 del 15/01/2026 è svolto per intero negli esercizi.

> [!METODO] Il ragionamento con ${}^tA - A$
> 1. Calcola ${}^tA - A$: è la matrice nulla esattamente quando $A$ è simmetrica.
> 2. Per i valori del parametro in cui $A$ è simmetrica: autovalori reali, diagonalizzabile, base ortonormale di autovettori (Corollario 26.2).
> 3. Per gli altri valori: **nessuna base ortonormale di autovettori**, sempre per il Corollario 26.2, anche se la matrice può essere diagonalizzabile. Per la diagonalizzabilità servono i metodi delle lezioni L17–L18.

**Errori da evitare.**

- Dimenticare di rendere i vettori **lunghi 1**: una base ortogonale di autovettori non è ancora ortonormale.
- Fare Gram–Schmidt **tra autospazi diversi**, che è inutile, e **non** farlo dentro un autospazio di dimensione 2, dove serve se la base trovata con Gauss non è già perpendicolare.
- Calcolare a mano l'inversa di una matrice ortogonale: basta la trasposta.
- Dire «non simmetrica, quindi non diagonalizzabile»: è falso, guarda $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$.
- Con i vettori complessi, sommare i quadrati invece dei **moduli al quadrato**.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: l'enunciato del teorema spettrale e del Corollario 26.2; «simmetrica reale, quindi autovalori reali»; «autovalori diversi, quindi autovettori perpendicolari»; la ricetta in sette passi; con i complessi $W^{-1} = {}^t\bar W$.

## Quiz

```quiz
D: Con il prodotto scalare euclideo di $\R^2$, quale di queste matrici ha **sicuramente** una base ortonormale di autovettori?
+ $\begin{pmatrix} 1 & 3 \\ 3 & -2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 3 \\ -3 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$
= Per il Corollario 26.2 le matrici reali con una base ortonormale di autovettori sono esattamente le simmetriche: solo la prima. La risposta più insidiosa è la quarta: è diagonalizzabile, ma i suoi autovettori $(1, 0)$ e $(1, 1)$ non sono perpendicolari. La seconda ha autovalori non reali, $1 \pm 3i$; la terza non è diagonalizzabile; la quinta non è simmetrica. Simile all'appello del 15/01/2026 (problema 11, punto 2).

D: Sia $A \in M(3, \R)$ simmetrica con esattamente due autovalori distinti. Quale affermazione è vera?
+ Uno dei due autospazi ha dimensione 2.
- $A$ è ortogonale.
- $A$ non è diagonalizzabile.
- $A$ ha un autovalore non reale.
- Ogni base di autovettori di $A$ è ortonormale.
= $A$ è diagonalizzabile per il teorema spettrale, quindi le dimensioni dei due autospazi sommano a 3: una è 2 e l'altra 1. La risposta più insidiosa è l'ultima: una base ortonormale di autovettori **esiste**, ma non tutte lo sono, per esempio $e_1, 2e_2, e_3$ con $\operatorname{diag}(1, 1, 2)$. La stessa matrice mostra che $A$ può non essere ortogonale. Simile all'appello del 16/01/2025 (domanda 7).

D: Gli autovalori di una matrice reale simmetrica sono:
+ sempre reali
- sempre positivi
- sempre distinti
- a volte complessi non reali
- sempre interi
= È la conseguenza del teorema spettrale che le dispense sottolineano. La risposta più insidiosa è «sempre positivi»: $\operatorname{diag}(1, -1)$ è simmetrica e ha $-1$. Non sono nemmeno sempre distinti, come per l'identità, né interi: l'Esercizio 26.3 ha $2 \pm \sqrt 2$.

D: Una matrice reale simmetrica $2 \times 2$ ha autovalori $1$ e $3$, e $(1, 2)$ è un autovettore con autovalore $1$. Quale di questi vettori è un autovettore con autovalore $3$?
+ $(-2, 1)$
- $(2, 1)$
- $(1, 2)$
- $(1, -2)$
- $(3, 6)$
= Autovettori di autovalori diversi di una matrice simmetrica sono perpendicolari, e nel piano i vettori perpendicolari a $(1, 2)$ sono i multipli di $(-2, 1)$. La risposta più insidiosa è $(3, 6)$, che fa pensare all'autovalore 3, ma è un multiplo di $(1, 2)$: appartiene all'autovalore 1. $(2, 1)$ e $(1, -2)$ non sono perpendicolari a $(1, 2)$.

D: Se $M \in M(n, \R)$ è ortogonale, quanto vale $M^{-1}$?
+ ${}^tM$
- $M$
- $-M$
- $\frac{1}{\det M}\, M$
- $M^2$
= Ortogonale vuol dire ${}^tM M = I_n$, cioè la trasposta è l'inversa. Per questo nel Corollario 26.2 ${}^tM A M = M^{-1} A M$. La risposta più insidiosa è $M$: vale solo per le ortogonali che sono anche simmetriche, come le riflessioni.

D: Quale matrice $M$ è ortogonale e rende ${}^tM A M$ diagonale per $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$?
+ $\frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\frac 12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$
- $\frac{1}{\sqrt 5}\begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}$
= Le colonne devono essere autovettori lunghi 1 e perpendicolari: $\frac{1}{\sqrt 2}(1, 1)$ e $\frac{1}{\sqrt 2}(1, -1)$. La risposta più insidiosa è la seconda: le colonne sono gli autovettori giusti, ma non sono lunghe 1, quindi la matrice non è ortogonale. Con $\frac 12$ succede lo stesso; con due colonne uguali $M$ non è invertibile; l'ultima è ortogonale, ma le sue colonne non sono autovettori. Simile agli appelli del 15/01/2026 e del 02/09/2025 (problema 11).

D: Il vettore $(1, 1, 0)$ è un autovettore della matrice simmetrica $A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 0 \\ 0 & 0 & 5 \end{pmatrix}$. Qual è il suo autovalore?
N: 3
= $A\,(1, 1, 0) = (1 + 2,\ 2 + 1,\ 0) = (3, 3, 0) = 3\,(1, 1, 0)$.

D: Quali sono gli autovalori della matrice hermitiana $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$?
+ $0$ e $2$
- $i$ e $-i$
- $1 + i$ e $1 - i$
- $1$ (doppio)
- $0$ e $-2$
= Il polinomio è $(1 - \lambda)^2 - i \cdot (-i) = (1 - \lambda)^2 - 1 = \lambda(\lambda - 2)$. La risposta più insidiosa è $1 + i$ e $1 - i$, di chi legge gli autovalori dalla matrice senza fare il conto. Gli autovalori di una matrice hermitiana sono reali per il teorema spettrale: le risposte con $i$ sono escluse subito. $0$ e $-2$ sbaglia un segno.

D: Un endomorfismo $T$ di $\C^n$ ha una base ortonormale di autovettori rispetto al prodotto hermitiano euclideo. Quale affermazione è vera?
+ $T$ è autoaggiunto se e solo se tutti i suoi autovalori sono reali.
- $T$ è sempre autoaggiunto.
- $T$ non è mai autoaggiunto.
- Gli autovalori di $T$ sono sempre reali.
- La matrice di $T$ nella base canonica è diagonale.
= Con la base ortonormale di autovettori già garantita, il Teorema 26.1 dice che $T$ è autoaggiunto esattamente quando gli autovalori sono reali. La risposta più insidiosa è «$T$ è sempre autoaggiunto»: $T(x, y) = (ix, y)$ ha la base canonica come base ortonormale di autovettori, ma non è autoaggiunto, perché ha l'autovalore $i$.

D: Per quali $k \in \R$ la matrice $A_k = \begin{pmatrix} 1 & k \\ k^2 & 2 \end{pmatrix}$ ha una base ortonormale di autovettori (prodotto euclideo)?
+ Per $k = 0$ e $k = 1$.
- Solo per $k = 1$.
- Per ogni $k$.
- Per nessun $k$.
- Per $k = -1$ e $k = 1$.
= ${}^tA_k - A_k$ ha fuori dalla diagonale $k^2 - k$ e $k - k^2$: è nulla esattamente quando $k^2 = k$, cioè $k = 0$ oppure $k = 1$. Per il Corollario 26.2 sono proprio i valori con una base ortonormale di autovettori. La risposta più insidiosa è «solo per $k = 1$», che dimentica $k = 0$, dove la matrice è diagonale. Per $k = -1$ la matrice è $\begin{pmatrix} 1 & -1 \\ 1 & 2 \end{pmatrix}$, non simmetrica. Simile agli appelli del 24/01/2024 e del 15/01/2026 (problema 11).
```

## Esercizi

::: esercizio base Riscaldamento: simmetrica o no
Quali di queste matrici sono simmetriche? $\begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$, $\begin{pmatrix} 1 & 2 \\ 3 & 1 \end{pmatrix}$, $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
::: soluzione
Una matrice è simmetrica quando i numeri a specchio rispetto alla diagonale sono uguali.
1. La prima: 2 e 2. Sì.
2. La seconda: 2 e 3. No.
3. La terza: 1 e 1. Sì.

Per il teorema spettrale la prima e la terza hanno una base ortonormale di autovettori.
:::

::: esercizio base Riscaldamento: l'altro autovettore
Una matrice simmetrica $2 \times 2$ ha due autovalori diversi, e $(3, 1)$ è un autovettore. In che direzione sta l'altro autovettore?
::: soluzione
1. Autovalori diversi: gli autovettori sono perpendicolari.
2. Un vettore perpendicolare a $(3, 1)$ è $(-1, 3)$: il prodotto scalare è $-3 + 3 = 0$.
3. L'altro autovettore è un multiplo di $(-1, 3)$.
:::

::: esercizio base Riscaldamento: vettori lunghi 1
Rendi lunghi 1 i vettori $(3, 4)$ e $(1, 1, 1)$.
::: soluzione
1. $(3, 4)$ è lungo $\sqrt{9 + 16} = 5$: diventa $\left(\frac 35, \frac 45\right)$.
2. $(1, 1, 1)$ è lungo $\sqrt 3$: diventa $\frac{1}{\sqrt 3}(1, 1, 1)$.
:::

::: esercizio base Riscaldamento: ortogonale o no
Le matrici $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ sono ortogonali?
::: soluzione
Una matrice è ortogonale quando le colonne sono lunghe 1 e perpendicolari.
1. La prima ha colonne $(0, 1)$ e $(1, 0)$: lunghe 1 e perpendicolari. Sì, e la sua inversa è la trasposta.
2. La seconda ha colonne $(1, 0)$ e $(1, 1)$: il prodotto scalare è 1, non zero. No.
:::

::: esercizio base Esercizio 26.3 delle dispense: simmetrica sì, simmetrica no
Verifica che la matrice $A$ ha una base ortonormale di autovettori mentre la matrice $B$ no:
$$A = \begin{pmatrix} 3 & 1 \\ 1 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}.$$
::: soluzione
Il Corollario 26.2 risponde subito: $A$ è simmetrica e $B$ no. Le dispense chiedono però di verificarlo **senza** usare il teorema spettrale.

**La matrice $A$.** Il polinomio è $(3 - \lambda)(1 - \lambda) - 1 = \lambda^2 - 4\lambda + 2$, con radici $\frac{4 \pm \sqrt{16 - 8}}{2} = 2 \pm \sqrt 2$. Per gli autovettori uso la prima riga di $A - \lambda I$: $(3 - \lambda)x + y = 0$, cioè $y = (\lambda - 3)x$.
- $\lambda_1 = 2 + \sqrt 2$: $y = (\sqrt 2 - 1)x$. Con $x = 1 + \sqrt 2$ viene $y = (\sqrt 2 - 1)(\sqrt 2 + 1) = 2 - 1 = 1$, quindi $v_1 = (1 + \sqrt 2, 1)$.
- $\lambda_2 = 2 - \sqrt 2$: $y = (-1 - \sqrt 2)x$. Con $x = 1 - \sqrt 2$ viene $y = -(1 + \sqrt 2)(1 - \sqrt 2) = -(1 - 2) = 1$, quindi $v_2 = (1 - \sqrt 2, 1)$.

Il prodotto scalare è $(1 + \sqrt 2)(1 - \sqrt 2) + 1 = (1 - 2) + 1 = 0$: sono perpendicolari. Rendendoli lunghi 1 (le lunghezze al quadrato sono $4 + 2\sqrt 2$ e $4 - 2\sqrt 2$) si ottiene una base ortonormale di autovettori.

**La matrice $B$.** È triangolare: autovalori 3 e 1. Per 3: $(B - 3I)x = 0$ dà $y = 0$, autovettore $v_1 = (1, 0)$. Per 1: $(B - I)x = 0$ dà $2x + y = 0$, autovettore $v_2 = (-1, 2)$. Il prodotto scalare è $-1$, non zero.

Perché nessuna scelta funziona: ogni autovettore di 3 è un multiplo di $v_1$, ogni autovettore di 1 è un multiplo di $v_2$. Moltiplicare per numeri non cambia la retta, quindi due autovettori formano sempre lo stesso angolo $\vartheta$ o $\pi - \vartheta$, con $\cos\vartheta = \frac{-1}{1 \cdot \sqrt 5}$: non è un angolo retto.
:::

::: esercizio base Una diagonalizzazione ortogonale $2 \times 2$
Trova una matrice ortogonale $M$ tale che ${}^tM A M$ sia diagonale, per $A = \begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix}$.
::: soluzione
Il polinomio è $(5 - \lambda)(2 - \lambda) - 4 = \lambda^2 - 7\lambda + 6 = (\lambda - 6)(\lambda - 1)$.
- $\lambda = 6$: $(A - 6I)x = 0$ dà $-x_1 + 2x_2 = 0$, autovettore $(2, 1)$.
- $\lambda = 1$: $(A - I)x = 0$ dà $4x_1 + 2x_2 = 0$, autovettore $(1, -2)$.

Sono perpendicolari: $2 - 2 = 0$. Tutti e due sono lunghi $\sqrt 5$. Quindi
$$M = \frac{1}{\sqrt 5}\begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}, \qquad {}^tM A M = \begin{pmatrix} 6 & 0 \\ 0 & 1 \end{pmatrix}.$$
Controllo: $A\,(2, 1) = (12, 6) = 6\,(2, 1)$ e $A\,(1, -2) = (1, -2)$.
:::

::: esercizio medio Esercizio 26.4 delle dispense: una base ortonormale di autovettori
Trovare una base ortonormale di autovettori per la matrice
$$A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}.$$
::: soluzione
$A$ è simmetrica, quindi la base esiste.

**Polinomio caratteristico**, sviluppando lungo la seconda riga, che ha un solo numero diverso da zero:
$$\begin{aligned} p_A(\lambda) &= \det\begin{pmatrix} 1 - \lambda & 0 & 1 \\ 0 & 2 - \lambda & 0 \\ 1 & 0 & 1 - \lambda \end{pmatrix} = (2 - \lambda)\det\begin{pmatrix} 1 - \lambda & 1 \\ 1 & 1 - \lambda \end{pmatrix} \\ &= (2 - \lambda)\big[(1 - \lambda)^2 - 1\big]. \end{aligned}$$
Siccome $(1 - \lambda)^2 - 1 = \lambda^2 - 2\lambda = \lambda(\lambda - 2)$, viene $p_A(\lambda) = -\lambda(2 - \lambda)^2$. Autovalori: 0, con molteplicità 1, e 2, con molteplicità 2. $A$ è diagonalizzabile, quindi le molteplicità geometriche sono le stesse.

**Autospazi.**
- $\lambda = 0$: $Ax = 0$ dà $x_1 + x_3 = 0$ e $x_2 = 0$, quindi $V_0 = \Span((1, 0, -1))$.
- $\lambda = 2$: $(2I - A)x = 0$ con $2I - A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$ dà solo $x_1 = x_3$, con $x_2$ libero: $V_2 = \Span((1, 0, 1), (0, 1, 0))$.

**Perpendicolarità.** I due vettori scelti in $V_2$ sono già perpendicolari, perché il loro prodotto scalare è 0. Le dispense avvertono: bisogna sceglierli così, altrimenti serve Gram–Schmidt. Il vettore di $V_0$ è perpendicolare a tutto $V_2$, perché gli autovalori sono diversi: infatti $\langle (1, 0, -1), (1, 0, 1) \rangle = 0$ e $\langle (1, 0, -1), (0, 1, 0) \rangle = 0$.

**Vettori lunghi 1.** $(1, 0, -1)$ e $(1, 0, 1)$ sono lunghi $\sqrt 2$, $(0, 1, 0)$ è già lungo 1:
$$w_1 = \tfrac{1}{\sqrt 2}(1, 0, -1) = \left(\tfrac{\sqrt 2}{2}, 0, -\tfrac{\sqrt 2}{2}\right), \qquad w_2 = \tfrac{1}{\sqrt 2}(1, 0, 1) = \left(\tfrac{\sqrt 2}{2}, 0, \tfrac{\sqrt 2}{2}\right),$$
$$w_3 = (0, 1, 0).$$
$w_1, w_2, w_3$ è una base ortonormale di autovettori. Con $M = (w_1 \mid w_2 \mid w_3)$ viene ${}^tM A M = \operatorname{diag}(0, 2, 2)$.
:::

::: esercizio medio Un autovalore doppio con Gram–Schmidt
Trova una base ortonormale di autovettori per $A = \begin{pmatrix} 2 & 2 & 2 \\ 2 & 5 & 4 \\ 2 & 4 & 5 \end{pmatrix}$.
::: soluzione
**Polinomio caratteristico**, sviluppando lungo la prima riga:
$$\det(A - \lambda I) = (2 - \lambda)\big[(5 - \lambda)^2 - 16\big] - 2\big[2(5 - \lambda) - 8\big] + 2\big[8 - 2(5 - \lambda)\big].$$
I pezzi: $(5 - \lambda)^2 - 16 = (\lambda - 1)(\lambda - 9)$; $2(5 - \lambda) - 8 = 2 - 2\lambda$; $8 - 2(5 - \lambda) = -2 + 2\lambda$. Quindi
$$\begin{aligned} \det(A - \lambda I) &= (2 - \lambda)(\lambda - 1)(\lambda - 9) + 8(\lambda - 1) \\ &= (\lambda - 1)\big[(2 - \lambda)(\lambda - 9) + 8\big] = -(\lambda - 1)^2(\lambda - 10), \end{aligned}$$
perché $(2 - \lambda)(\lambda - 9) + 8 = -\lambda^2 + 11\lambda - 10 = -(\lambda - 1)(\lambda - 10)$. Autovalori: 1 (doppio) e 10.

**Autospazi.** $A - I = \begin{pmatrix} 1 & 2 & 2 \\ 2 & 4 & 4 \\ 2 & 4 & 4 \end{pmatrix}$ ha rango 1: $V_1$ è il piano $x_1 + 2x_2 + 2x_3 = 0$, con base $(-2, 1, 0)$ e $(-2, 0, 1)$. Per $\lambda = 10$: $A\,(1, 2, 2) = (10, 20, 20)$, quindi $V_{10} = \Span((1, 2, 2))$. È la retta perpendicolare al piano $V_1$, come deve essere.

**Gram–Schmidt in $V_1$.** $w_1 = (-2, 1, 0)$ e
$$\begin{aligned} w_2 &= (-2, 0, 1) - \frac{\langle (-2, 0, 1), (-2, 1, 0) \rangle}{\langle (-2, 1, 0), (-2, 1, 0) \rangle}(-2, 1, 0) \\ &= (-2, 0, 1) - \tfrac 45(-2, 1, 0) = \left(-\tfrac 25, -\tfrac 45, 1\right), \end{aligned}$$
che moltiplico per 5: $(-2, -4, 5)$. Controlli: il prodotto con $(-2, 1, 0)$ è $4 - 4 = 0$, e $-2 - 8 + 10 = 0$, quindi sta in $V_1$.

**Vettori lunghi 1.** Le lunghezze sono 3, $\sqrt 5$ e $\sqrt{45} = 3\sqrt 5$. Base ortonormale di autovettori:
$$\tfrac 13 (1, 2, 2), \qquad \tfrac{1}{\sqrt 5}(-2, 1, 0), \qquad \tfrac{1}{3\sqrt 5}(-2, -4, 5),$$
con ${}^tM A M = \operatorname{diag}(10, 1, 1)$.
:::

::: esercizio medio Una matrice hermitiana $2 \times 2$
Trova una base ortonormale di autovettori (prodotto hermitiano euclideo) per $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$ e scrivi $W$ con $W^{-1} H W$ diagonale.
::: soluzione
Il polinomio è $(1 - \lambda)^2 - i(-i) = (1 - \lambda)^2 - 1 = \lambda(\lambda - 2)$: autovalori 0 e 2, reali.
- $\lambda = 0$: $x_1 + i x_2 = 0$, cioè $x_1 = -i x_2$. Con $x_2 = i$ viene $x_1 = 1$: autovettore $(1, i)$. Controllo: $H\,(1, i) = (1 + i \cdot i,\ -i + i) = (0, 0)$.
- $\lambda = 2$: $-x_1 + i x_2 = 0$, cioè $x_1 = i x_2$. Con $x_2 = -i$ viene $x_1 = 1$: autovettore $(1, -i)$. Controllo: $H\,(1, -i) = (1 + 1,\ -i - i) = 2\,(1, -i)$.

Il prodotto hermitiano è $1 + i \cdot \overline{-i} = 1 + i \cdot i = 0$, e tutti e due sono lunghi $\sqrt 2$. Quindi
$$W = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ i & -i \end{pmatrix}, \qquad W^{-1} = {}^t\bar W = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & -i \\ 1 & i \end{pmatrix},$$
$$W^{-1} H W = \begin{pmatrix} 0 & 0 \\ 0 & 2 \end{pmatrix}.$$
:::

::: esercizio esame Matrice con parametro (appello del 15/01/2026, problema 11)
Si consideri la matrice $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, dove $k$ è un parametro reale. (1) Determinare per quali valori di $k$ la matrice $A$ è invertibile. (2) Calcolare ${}^tA - A$, e stabilire per quali valori di $k$ la matrice $A$ ammette sia autovalori reali, sia una base ortonormale di autovettori. (3) Posto $k = 1$, calcolare una base ortonormale di autovettori.
::: soluzione
(1) Sviluppo lungo la prima riga:
$$\det A = 1 \cdot \big((k + 1) \cdot 1 - k \cdot k\big) - k^2 \cdot (k \cdot 1 - k \cdot 0) + 0 = k + 1 - k^2 - k^3.$$
Raccolgo: $-k^3 - k^2 + k + 1 = -k^2(k + 1) + (k + 1) = (k + 1)(1 - k^2) = -(k + 1)^2 (k - 1)$. Quindi $A$ è invertibile per $k$ diverso da 1 e da $-1$.

(2) ${}^tA = \begin{pmatrix} 1 & k & 0 \\ k^2 & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$, quindi
$${}^tA - A = \begin{pmatrix} 0 & k - k^2 & 0 \\ k^2 - k & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
$A$ è simmetrica esattamente quando $k^2 = k$, cioè $k = 0$ oppure $k = 1$. Per il Corollario 26.2 la base ortonormale di autovettori c'è esattamente quando $A$ è simmetrica, e allora anche gli autovalori sono reali. Risposta: $k = 0$ oppure $k = 1$.

(3) Con $k = 1$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}$. Sviluppando lungo la prima riga,
$$\begin{aligned} p_A(\lambda) &= (1 - \lambda)\big[(2 - \lambda)(1 - \lambda) - 1\big] - 1 \cdot \big[(1 - \lambda) - 0\big] \\ &= (1 - \lambda)\big[\lambda^2 - 3\lambda + 1 - 1\big] = (1 - \lambda)\,\lambda\,(\lambda - 3). \end{aligned}$$
Autovalori 0, 1 e 3, distinti.
- $\lambda = 0$: $x_1 + x_2 = 0$ e $x_2 + x_3 = 0$: $(1, -1, 1)$.
- $\lambda = 1$: $A - I = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ dà $x_2 = 0$ e $x_1 + x_3 = 0$: $(1, 0, -1)$.
- $\lambda = 3$: $A - 3I = \begin{pmatrix} -2 & 1 & 0 \\ 1 & -1 & 1 \\ 0 & 1 & -2 \end{pmatrix}$ dà $x_2 = 2x_1$ e $x_2 = 2x_3$: $(1, 2, 1)$.

Sono perpendicolari a due a due, perché gli autovalori sono distinti. Controllo: $1 - 1 + 0 = 0$, $1 - 2 + 1 = 0$, $1 + 0 - 1 = 0$. Resi lunghi 1:
$$\tfrac{1}{\sqrt 3}(1, -1, 1), \qquad \tfrac{1}{\sqrt 2}(1, 0, -1), \qquad \tfrac{1}{\sqrt 6}(1, 2, 1).$$
Nota: 0 è un autovalore proprio per $k = 1$, e infatti per il punto (1) la matrice non è invertibile.
:::

::: esercizio esame Simmetrica per un solo valore del parametro
Sia $A_k = \begin{pmatrix} 2 & k & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ con $k \in \R$. (1) Calcola ${}^tA_k - A_k$ e trova per quali $k$ la matrice è simmetrica. (2) Per quel valore trova una matrice ortogonale $M$ e una diagonale $D$ con ${}^tM A_k M = D$. (3) Per $k = 4$ la matrice è diagonalizzabile? Ha una base ortonormale di autovettori?
::: soluzione
(1) ${}^tA_k - A_k = \begin{pmatrix} 0 & 1 - k & 0 \\ k - 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$: è nulla solo per $k = 1$.

(2) Con $k = 1$ il blocco in alto a sinistra è $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, con autovalori 3 e 1 e autovettori $(1, 1)$ e $(1, -1)$. Il terzo vettore della base canonica dà ancora l'autovalore 3. Quindi
- $\lambda = 3$ (doppio): $V_3 = \Span((1, 1, 0), (0, 0, 1))$, già perpendicolari;
- $\lambda = 1$: $V_1 = \Span((1, -1, 0))$.

Controllo con il polinomio: $(3 - \lambda)\big[(2 - \lambda)^2 - 1\big] = (3 - \lambda)(\lambda - 1)(\lambda - 3)$. Resi lunghi 1:
$$M = \begin{pmatrix} \frac{1}{\sqrt 2} & 0 & \frac{1}{\sqrt 2} \\ \frac{1}{\sqrt 2} & 0 & -\frac{1}{\sqrt 2} \\ 0 & 1 & 0 \end{pmatrix}, \qquad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

(3) Con $k = 4$ il blocco $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$ ha polinomio $(2 - \lambda)^2 - 4 = \lambda(\lambda - 4)$: autovalori 0 e 4, più l'autovalore 3. Tre autovalori reali **distinti**: $A_4$ è diagonalizzabile (lezione L18). Però non è simmetrica, quindi per il Corollario 26.2 **non** ha una base ortonormale di autovettori. Infatti gli autovettori di 4 e di 0 sono $(2, 1, 0)$ e $(-2, 1, 0)$, con prodotto scalare $-4 + 1 = -3$.
:::

::: esercizio difficile Esercizio 26.5 delle dispense: una matrice hermitiana
Calcolare la diagonalizzazione della seguente matrice:
$$A = \begin{pmatrix} 2 & i & i \\ -i & 1 & 0 \\ -i & 0 & 1 \end{pmatrix}.$$
::: soluzione
$A$ è hermitiana: la diagonale è reale, e il coniugato di $-i$ è $i$. Quindi c'è una base ortonormale di autovettori, per il prodotto hermitiano euclideo, e gli autovalori sono reali.

**Polinomio caratteristico**, sviluppando lungo la prima riga:
$$\det(A - \lambda I) = (2 - \lambda)(1 - \lambda)^2 - i\,\big[(-i)(1 - \lambda) - 0\big] + i\,\big[0 - (1 - \lambda)(-i)\big].$$
Il secondo pezzo è $-i \cdot (-i)(1 - \lambda) = i^2 (1 - \lambda) = -(1 - \lambda)$; il terzo è $i \cdot i(1 - \lambda) = -(1 - \lambda)$. Quindi
$$\begin{aligned} \det(A - \lambda I) &= (1 - \lambda)\big[(2 - \lambda)(1 - \lambda) - 2\big] \\ &= (1 - \lambda)(\lambda^2 - 3\lambda) = (1 - \lambda)\lambda(\lambda - 3). \end{aligned}$$
Autovalori 0, 1 e 3, ciascuno con molteplicità 1: tutti reali, come previsto.

**Autovettori.**
- $\lambda = 0$: dalla seconda riga $-ix + y = 0$, cioè $y = ix$; dalla terza $z = ix$. La prima torna: $2x + i(ix) + i(ix) = 2x - x - x = 0$. Con $x = 1$: $v_1 = (1, i, i)$.
- $\lambda = 1$: $A - I = \begin{pmatrix} 1 & i & i \\ -i & 0 & 0 \\ -i & 0 & 0 \end{pmatrix}$. La seconda riga dà $x = 0$, la prima $iy + iz = 0$, cioè $z = -y$: $v_2 = (0, 1, -1)$.
- $\lambda = 3$: $A - 3I = \begin{pmatrix} -1 & i & i \\ -i & -2 & 0 \\ -i & 0 & -2 \end{pmatrix}$. Dalla seconda riga $y = -\frac{i}{2}x$, dalla terza $z = -\frac{i}{2}x$. Con $x = 2i$: $y = -\frac i2 \cdot 2i = 1$ e $z = 1$, quindi $v_3 = (2i, 1, 1)$. Controllo sulla prima riga: $-2i + i + i = 0$.

**Perpendicolarità**, con il prodotto hermitiano: $\langle v_1, v_2 \rangle = 0 + i - i = 0$; $\langle v_1, v_3 \rangle = 1 \cdot \overline{2i} + i + i = -2i + 2i = 0$; $\langle v_2, v_3 \rangle = 0 + 1 - 1 = 0$. Sono già perpendicolari, perché gli autovalori sono distinti: basta renderli lunghi 1.

**Vettori lunghi 1**, con i moduli al quadrato: le lunghezze al quadrato sono 3, 2 e $4 + 1 + 1 = 6$. Le colonne divise per le lunghezze formano
$$W = \begin{pmatrix} \frac{\sqrt 3}{3} & 0 & \frac{i\sqrt 6}{3} \\ \frac{\sqrt 3\, i}{3} & \frac{\sqrt 2}{2} & \frac{\sqrt 6}{6} \\ \frac{\sqrt 3\, i}{3} & -\frac{\sqrt 2}{2} & \frac{\sqrt 6}{6} \end{pmatrix}$$
(per esempio $\frac{2i}{\sqrt 6} = \frac{2i\sqrt 6}{6} = \frac{i\sqrt 6}{3}$), e
$$\Lambda = W^{-1} A W = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$

**L'inversa senza conti.** Le dispense notano che ${}^t\bar W \cdot W = I_3$, quindi $W^{-1} = {}^t\bar W$. Il numero al posto $(j, k)$ di ${}^t\bar W W$ è il prodotto hermitiano della colonna $k$ con la colonna $j$: vale 1 se sono la stessa colonna e 0 altrimenti, perché le colonne sono ortonormali. Attenzione: senza il coniugato non funziona. Il posto $(1, 1)$ di ${}^tW W$ è $\frac 13 + \left(\frac{\sqrt 3 i}{3}\right)^2 + \left(\frac{\sqrt 3 i}{3}\right)^2 = \frac 13 - \frac 13 - \frac 13 = -\frac 13$, non 1.
:::

::: esercizio difficile Il viceversa facile, con le matrici
Sia $A \in M(n, \R)$ e supponi che esista una matrice ortogonale $M$ con ${}^tM A M = D$ diagonale. Dimostra direttamente che $A$ è simmetrica.
::: soluzione
Da ${}^tM A M = D$, moltiplico a sinistra per $M$ e a destra per ${}^tM$. Uso $M\,{}^tM = I$: per una matrice quadrata ${}^tM M = I$ dà anche $M\,{}^tM = I$. Viene
$$A = M D\, {}^tM.$$
Traspongo, con la regola della trasposta di un prodotto e ${}^tD = D$, perché una matrice diagonale è simmetrica:
$${}^tA = {}^t({}^tM)\, {}^tD\, {}^tM = M D\, {}^tM = A.$$
Quindi $A$ è simmetrica. È il passaggio da (3) a (1) del Corollario 26.2, senza passare per le macchine.
:::

::: esercizio difficile Autovalori reali per le simmetriche $2 \times 2$, a mano
(a) Dimostra che $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ con $a, b, c \in \R$ ha sempre autovalori reali. (b) Quando i due autovalori coincidono? (c) Verifica che, se $b \neq 0$, gli autovettori sono ortogonali.
::: soluzione
(a) Il polinomio è $\lambda^2 - (a + c)\lambda + (ac - b^2)$, con discriminante
$$\Delta = (a + c)^2 - 4(ac - b^2) = (a - c)^2 + 4b^2.$$
È una somma di quadrati, mai negativa: le radici sono reali.

(b) Il discriminante è zero esattamente quando $a = c$ e $b = 0$, cioè $S = aI$: un solo autovalore, e ogni vettore è un autovettore.

(c) Se $b$ non è zero, i due autovalori $\lambda_1$ e $\lambda_2$ sono distinti. Dalla prima riga di $S - \lambda I$, $(a - \lambda)x + by = 0$, un autovettore di $\lambda$ è $v = (b, \lambda - a)$. Allora
$$\langle v_1, v_2 \rangle = b^2 + (\lambda_1 - a)(\lambda_2 - a) = b^2 + \lambda_1\lambda_2 - a(\lambda_1 + \lambda_2) + a^2.$$
Dai numeri del polinomio, $\lambda_1 + \lambda_2 = a + c$ e $\lambda_1 \lambda_2 = ac - b^2$. Sostituendo: $b^2 + ac - b^2 - a^2 - ac + a^2 = 0$.
:::

## Domande di ripasso

::: domanda Che cosa dice il teorema spettrale?
Prendi uno spazio reale con un prodotto scalare definito positivo, o complesso con un prodotto hermitiano definito positivo. Una sua macchina è autoaggiunta esattamente quando ha una base ortonormale di autovettori e tutti i suoi autovalori sono reali (Teorema 26.1).
:::

::: domanda Perché con i numeri complessi serve la condizione «autovalori reali»?
Perché ci sono macchine con una base ortonormale di autovettori che non sono autoaggiunte, come $T(x, y) = (ix, y)$ su $\C^2$. La loro matrice diagonale ha un numero non reale, quindi non è hermitiana.
:::

::: domanda Come si dimostra che gli autovalori di una macchina autoaggiunta sono reali?
Se $T(v) = \lambda v$ con $v$ diverso da zero: $\lambda \langle v, v \rangle = \langle T(v), v \rangle = \langle v, T(v) \rangle = \bar\lambda \langle v, v \rangle$. Siccome $\langle v, v \rangle$ è positivo, $\lambda = \bar\lambda$.
:::

::: domanda Qual è l'idea dell'induzione nella dimostrazione?
Si prende un autovettore $v$, che con i complessi esiste per il teorema fondamentale dell'algebra. La retta di $v$ è invariante, quindi anche la stanza perpendicolare $U$ lo è (Proposizione 25.10). Dentro $U$ la macchina è autoaggiunta e la dimensione è una in meno: per induzione c'è una base ortonormale di autovettori, a cui si aggiunge $v$ reso lungo 1.
:::

::: domanda Come si passa dai numeri complessi ai reali?
Si scrive la macchina in una base ortonormale con una matrice reale simmetrica. Vista come complessa, ha autovalori reali: il polinomio ha una radice reale $\lambda$, e il sistema $(S - \lambda I)x = 0$ dà un autovettore reale. Poi la stessa induzione.
:::

::: domanda Che cosa dice il Corollario 26.2?
Per una matrice reale $A$ sono equivalenti: $A$ simmetrica; la sua macchina ha una base ortonormale di autovettori; c'è una matrice ortogonale $M$ con ${}^tM A M = M^{-1} A M$ diagonale.
:::

::: domanda Che cos'è una matrice ortogonale e perché è comoda?
Una matrice reale con ${}^tM M = I$: le sue colonne sono lunghe 1 e perpendicolari. È comoda perché l'inversa è la trasposta, senza conti.
:::

::: domanda Perché autovettori di autovalori diversi di una matrice simmetrica sono perpendicolari?
Da $\lambda \langle v, w \rangle = \langle Av, w \rangle = \langle v, Aw \rangle = \mu \langle v, w \rangle$ viene $(\lambda - \mu)\langle v, w \rangle = 0$, e $\lambda - \mu$ non è zero.
:::

::: domanda Quando serve Gram–Schmidt per diagonalizzare una matrice simmetrica?
Solo dentro un autospazio di dimensione almeno 2, se la base trovata risolvendo il sistema non è già perpendicolare. Tra autospazi diversi la perpendicolarità è automatica.
:::

::: domanda Una matrice diagonalizzabile è sempre simmetrica?
No. $\begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ è diagonalizzabile ma non simmetrica: ha una base di autovettori, ma non una base ortonormale di autovettori.
:::

::: domanda Come cambia il metodo per una matrice hermitiana?
Prodotti e lunghezze si calcolano con il prodotto hermitiano, cioè con i moduli al quadrato. La matrice $W$ degli autovettori resi lunghi 1 ha come inversa la trasposta coniugata.
:::

::: domanda Che cosa c'entra il teorema spettrale con la PCA?
La matrice $S = \frac 1N \sum x_i\, {}^t x_i$ dei dati centrati è simmetrica, quindi ha una base ortonormale di autovettori. Quelli con gli autovalori più grandi sono le direzioni in cui i dati variano di più; proiettando su di loro si riduce la dimensione dei dati.
:::

## Glossario

```glossario
Spettro | L'insieme degli autovalori di un endomorfismo o di una matrice.
Teorema spettrale | Un endomorfismo è autoaggiunto esattamente quando ha una base ortonormale di autovettori e autovalori reali (Teorema 26.1).
Endomorfismo autoaggiunto | $T$ con $\langle T(v), w \rangle = \langle v, T(w) \rangle$ per ogni $v, w$ (lezione L25).
Base ortonormale di autovettori | Una base di autovettori lunghi 1 e perpendicolari a due a due; in essa la matrice dell'endomorfismo è diagonale.
Matrice ortogonale | Una matrice reale con ${}^tM M = I$: le colonne sono una base ortonormale e l'inversa è la trasposta.
Diagonalizzazione ortogonale | La scrittura ${}^tM A M = D$ con $M$ ortogonale e $D$ diagonale; possibile esattamente per le matrici simmetriche (Corollario 26.2).
Matrice simmetrica | Una matrice reale uguale alla sua trasposta; ha autovalori reali ed è diagonalizzabile con una matrice ortogonale.
Matrice hermitiana | Una matrice complessa con ${}^tH = \bar H$; ha autovalori reali e una base ortonormale di autovettori per il prodotto hermitiano.
Trasposta coniugata | ${}^t\bar W$; per una matrice con colonne ortonormali, per il prodotto hermitiano, è l'inversa.
Autospazio | $V_\lambda$: gli autovettori di $\lambda$ più il vettore zero; per le matrici simmetriche la sua dimensione è la molteplicità algebrica di $\lambda$.
Molteplicità algebrica e geometrica | Quante volte $\lambda$ è radice del polinomio caratteristico, e la dimensione dell'autospazio; per le matrici simmetriche coincidono.
Induzione sulla dimensione | La tecnica della dimostrazione: si stacca un autovettore e si ricomincia nella stanza perpendicolare.
Teorema fondamentale dell'algebra | Ogni polinomio complesso non costante ha una radice complessa; garantisce un autovalore con i numeri complessi.
PCA | Analisi delle componenti principali: diagonalizza la matrice simmetrica dei dati per trovare le direzioni in cui variano di più.
```

## Checklist

```checklist
- So enunciare il teorema spettrale e spiegare perché con i numeri complessi serve la condizione sugli autovalori reali.
- So dimostrare che gli autovalori di una macchina autoaggiunta sono reali.
- So raccontare la dimostrazione per induzione: autovettore, stanza perpendicolare invariante, ipotesi sulla dimensione più piccola.
- So che una matrice reale simmetrica ha autovalori reali ed è diagonalizzabile con una matrice ortogonale.
- So enunciare il Corollario 26.2 e usare che l'inversa di una matrice ortogonale è la trasposta.
- So dimostrare che autovettori di autovalori diversi di una matrice simmetrica sono perpendicolari.
- So trovare una base ortonormale di autovettori anche con un autovalore doppio, usando Gram–Schmidt dentro l'autospazio.
- So diagonalizzare una matrice hermitiana usando il prodotto hermitiano e la trasposta coniugata.
- So usare ${}^tA - A$ per decidere, al variare di un parametro, quando c'è una base ortonormale di autovettori.
- So distinguere «diagonalizzabile» da «diagonalizzabile con una base ortonormale».
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 26 «Teorema spettrale II», pp. 134–138: introduzione, sezione 26.A (Teorema 26.1 con la dimostrazione, Corollario 26.2, collegamento con la PCA) e sezione 26.B (Esercizi 26.3, 26.4 e 26.5, svolti per intero negli esercizi). Dalle lezioni precedenti: diagonalizzazione (lezioni 17–18), prodotti scalari e Gram–Schmidt (lezioni 19–21), matrici ortogonali (Definizione 22.10), prodotti hermitiani ed endomorfismi autoaggiunti (lezione 25).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §11.3 (teorema spettrale, Corollario 11.3.2, conseguenze) ed Esercizi 11.1–11.2.
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): testo riportato del 16/01/2025 (domanda 7), del 02/09/2025 (problema 11, punto 3) e del 15/01/2026 (problema 11, svolto come esercizio 11), con soluzioni scritte per questi appunti; citato per tipo di domanda l'appello del 24/01/2024 (problema 11).
- Le parti **«Oltre le dispense»** (caso $2 \times 2$ a mano, perpendicolarità degli autovettori di autovalori diversi, il metodo passo per passo, esempio numerico di PCA, esempi ed esercizi aggiuntivi) servono a collegare la lezione al libro e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
