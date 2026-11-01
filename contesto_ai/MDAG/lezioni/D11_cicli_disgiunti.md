---
corso: MDAG
modulo: MD
lezione: D11
titolo: Cicli e cicli disgiunti
data: 2026-10-28
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D11
descrizione: >-
  Appunti della lezione D11 di Matematica Discreta (MDAG, parte 1, canali A, B e C): inversa e composizione di
  permutazioni con le tabelle, i cicli e la loro notazione, l'inverso di un ciclo, i cicli disgiunti che commutano,
  la scrittura di ogni permutazione come prodotto di cicli disgiunti e come ottenerla da un prodotto qualsiasi di
  cicli, con le domande d'esame del 06/06/2025 e il problema del 13/01/2026.
lede: >-
  Le permutazioni si scrivono in modo molto più compatto seguendo dove va ogni numero: si formano dei giri chiusi, i
  cicli. Ogni permutazione è fatta di cicli che non si toccano, e trovarli è il primo passo di quasi ogni esercizio
  d'esame sulle permutazioni.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 5, pp. 86–92
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 5 «Permutazioni», pp. 86–92 (calcolo
  dell'inversa e della composizione, definizione 5.3, nota 5.4, proposizione 5.5, definizione 5.6, proposizione 5.7,
  teorema 5.8, note 5.9–5.11); diario delle lezioni del canale B 2025/26, lezione 11; appelli di Matematica Discreta
  del 06/06/2025 (quiz, domanda 5) e del 13/01/2026 (problema 1)
appunti_html: appunti/MDAG/D11_cicli_disgiunti.html
genera_html: true
---

## In breve

- L'inversa di una permutazione si ottiene **scambiando le due righe** della tabella e riordinando le colonne. Per la composizione $\sigma \circ \pi$ si aggiunge una terza riga, con le immagini secondo $\sigma$ dei numeri della seconda.
- Un **ciclo** sposta alcuni numeri in giro, il primo nel secondo, il secondo nel terzo e l'ultimo di nuovo nel primo, e lascia fermi tutti gli altri. Si scrive tra parentesi, come $(2\ 5\ 3\ 7\ 4\ 8)$.
- Lo stesso ciclo si può cominciare da qualunque suo elemento. L'**inverso** di un ciclo è il ciclo letto al contrario; uno scambio è l'inverso di sé stesso.
- Due cicli sono **disgiunti** se non hanno numeri in comune, e allora l'ordine in cui si compongono non conta.
- **Ogni permutazione diversa dall'identità è un prodotto di cicli disgiunti**, e i cicli sono sempre gli stessi: si trovano seguendo un numero finché non torna al punto di partenza.
- Un prodotto di cicli qualsiasi si riduce a cicli disgiunti seguendo ogni numero **da destra a sinistra** attraverso tutti i cicli.
- All'esame la decomposizione in cicli disgiunti è il primo punto del problema sulle permutazioni (13/01/2026, 10/09/2026) e una domanda del quiz (06/06/2025).

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di mercoledì 28/10/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui l'undicesima lezione era «Calcolo di composizioni ed inverse di permutazioni. Cicli. Cicli disgiunti. Ogni permutazione è composizione di cicli a due a due disgiunti». Nel libro sono le pp. 86–92. Tipo, potenze e periodo sono la [D12](D12_tipo_periodo_permutazioni.html). Quando il docente pubblica gli argomenti, controllo e aggiorno.

## Inversa e composizione con le tabelle (pp. 86–87)

Nella [D10](D10_binomio_newton_permutazioni.html) l'inversa si trovava girando le frecce una alla volta. Con la tabella a due righe lo stesso lavoro si fa in due mosse: si scambiano le righe, poi si riordinano le colonne in modo che la riga sopra torni $1, 2, \dots, n$. È l'esempio del libro, in $S_7$:

$$\pi = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 3 & 2 & 6 & 1 & 5 & 7 & 4 \end{pmatrix} \ \leadsto\ \begin{pmatrix} 3 & 2 & 6 & 1 & 5 & 7 & 4 \\ 1 & 2 & 3 & 4 & 5 & 6 & 7 \end{pmatrix} \ \leadsto\ \pi^{-1} = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 4 & 2 & 1 & 7 & 5 & 3 & 6 \end{pmatrix}.$$

Per la composizione $\sigma \circ \pi$, che si legge «prima $\pi$, poi $\sigma$», il libro usa una tabella a **tre righe**. La prima riga è $1, \dots, n$, la seconda la riga sotto di $\pi$, la terza contiene sotto ogni numero della seconda la sua immagine secondo $\sigma$. Cancellando la riga di mezzo resta la tabella di $\sigma \circ \pi$.

> [!ESEMPIO] · la composizione dell'esempio del libro, in $S_8$
> Con $\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 5 & 4 & 1 & 8 & 6 & 2 & 3 & 7 \end{pmatrix}$ e $\pi = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 2 & 3 & 7 & 8 & 4 & 1 & 6 & 5 \end{pmatrix}$:
> $$\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 2 & 3 & 7 & 8 & 4 & 1 & 6 & 5 \\ 4 & 1 & 3 & 7 & 8 & 5 & 2 & 6 \end{pmatrix} \ \leadsto\ \sigma \circ \pi = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 4 & 1 & 3 & 7 & 8 & 5 & 2 & 6 \end{pmatrix}.$$
> Prima colonna: $\pi(1) = 2$, e $\sigma(2) = 4$. Seconda colonna: $\pi(2) = 3$ e $\sigma(3) = 1$. E così via. Con tre permutazioni si aggiunge una quarta riga: è l'esempio del libro con $\tau \circ \sigma \circ \pi$ in $S_4$, che dà la riga $4\ 2\ 1\ 3$.

::: prova Con le stesse $\sigma$ e $\pi$, quanto vale $(\sigma \circ \pi)(7)$? E $(\pi \circ \sigma)(7)$?
$(\sigma \circ \pi)(7) = \sigma(\pi(7)) = \sigma(6) = 2$. Nell'altro ordine $(\pi \circ \sigma)(7) = \pi(\sigma(7)) = \pi(3) = 7$: di nuovo i due ordini danno risultati diversi.
:::

> [!RICORDA]
> - Inversa: si scambiano le righe e si riordinano le colonne.
> - Composizione $\sigma \circ \pi$: sotto la riga di $\pi$ si scrivono le immagini secondo $\sigma$, poi si cancella la riga di mezzo.

## Che cos'è un ciclo (definizione 5.3)

Il libro cerca un modo più semplice di scrivere e comporre le permutazioni, e lo trova in un tipo particolare: quelle che spostano alcuni numeri in giro e lasciano fermi gli altri. Prendi la permutazione di $S_9$

$$\pi = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\ 1 & 5 & 7 & 8 & 3 & 6 & 4 & 2 & 9 \end{pmatrix}.$$

Partendo dal 2 e seguendo le immagini: il 2 va nel 5, il 5 nel 3, il 3 nel 7, il 7 nel 4, il 4 nell'8 e l'8 torna nel 2. Gli altri numeri, 1, 6 e 9, restano fermi. Tutto quello che fa $\pi$ è un giro chiuso di sei numeri.

```grafico
titolo: Il ciclo $(2\ 5\ 3\ 7\ 4\ 8)$ di $S_9$: ogni numero va in quello successivo lungo il giro, e l'8 torna nel 2. I numeri 1, 6 e 9 non compaiono e restano fermi
x: -3 3
y: -3 3
assi: no
griglia: no
cerchio: 0 0 2 | grigio | sottile
punto: 0.00 2.00 | blu
testo: 0.00 2.56 | blu | "2"
punto: 1.73 1.00 | blu
testo: 2.22 1.28 | blu | "5"
punto: 1.73 -1.00 | blu
testo: 2.22 -1.28 | blu | "3"
punto: 0.00 -2.00 | blu
testo: 0.00 -2.56 | blu | "7"
punto: -1.73 -1.00 | blu
testo: -2.22 -1.28 | blu | "4"
punto: -1.73 1.00 | blu
testo: -2.22 1.28 | blu | "8"
freccia: 0.31 1.82 1.42 1.18 | blu
freccia: 1.73 0.64 1.73 -0.64 | blu
freccia: 1.42 -1.18 0.31 -1.82 | blu
freccia: -0.31 -1.82 -1.42 -1.18 | blu
freccia: -1.73 -0.64 -1.73 0.64 | blu
freccia: -1.42 1.18 -0.31 1.82 | blu
```

> [!DEF] 5.3 · Ciclo
> Sia $2 \le \ell \le n$ e siano $t_1, t_2, \dots, t_\ell$ elementi di $I_n$ a due a due distinti. Si chiama **ciclo** di $S_n$ la permutazione $\pi$ con $\pi(t_i) = t_{i+1}$ per $i = 1, \dots, \ell - 1$, $\pi(t_\ell) = t_1$, e $\pi(k) = k$ per ogni $k$ che non è tra i $t_i$. Il numero $\ell$ è la **lunghezza** del ciclo, che si chiama anche **$\ell$-ciclo**. Un ciclo di lunghezza 2 si chiama **trasposizione** o **scambio**.

**Come si legge.** I numeri $t_1, \dots, t_\ell$ sono quelli che il ciclo muove, nell'ordine del giro. Ognuno va nel successivo, l'ultimo torna nel primo, e tutti gli altri numeri di $I_n$ restano fermi. La lunghezza conta quanti numeri si muovono, quindi va da 2 a $n$. Uno scambio scambia due numeri e non tocca il resto.

Il ciclo si scrive elencando i numeri del giro tra parentesi tonde, senza virgole: quello della figura è $(2\ 5\ 3\ 7\ 4\ 8)$. È molto più corto della tabella, perché i numeri fermi non si scrivono. Non tutte le permutazioni sono cicli: $\begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 5 & 4 & 3 & 1 \end{pmatrix}$ fa il giro $1 \to 2 \to 5 \to 1$, ma muove anche il 3 e il 4, che si scambiano tra loro. Sono due giri, non uno.

### Lo stesso ciclo scritto in più modi (nota 5.4)

Un giro chiuso non ha un vero inizio: si può cominciare a scriverlo da qualunque suo numero, purché si mantenga l'ordine. Le scritture

$$(2\ 5\ 3\ 7\ 4\ 8) = (5\ 3\ 7\ 4\ 8\ 2) = (3\ 7\ 4\ 8\ 2\ 5) = (8\ 2\ 5\ 3\ 7\ 4)$$

sono lo stesso ciclo. Cambiare l'**ordine** dei numeri invece cambia il ciclo: $(2\ 3\ 5\ 7\ 4\ 8)$ manda il 2 nel 3, non nel 5.

### L'inverso di un ciclo (proposizione 5.5)

Per tornare indietro lungo un giro basta percorrerlo al contrario.

> [!PROP] 5.5 · Inverso di un ciclo
> L'inverso di un ciclo di lunghezza $\ell$ è ancora un ciclo di lunghezza $\ell$, e precisamente
> $$(t_1\ t_2\ \cdots\ t_\ell)^{-1} = (t_\ell\ \cdots\ t_2\ t_1).$$

**Come si legge.** Si scrivono gli stessi numeri in ordine inverso. Il motivo: il ciclo manda $t_i$ in $t_{i+1}$, quindi l'inversa deve mandare $t_{i+1}$ in $t_i$, ed è proprio quello che fa il ciclo letto al contrario. Per esempio $(2\ 5\ 3\ 7\ 4\ 8)^{-1} = (8\ 4\ 7\ 3\ 5\ 2)$. Per uno scambio, leggere al contrario dà lo stesso scambio: $(a\ b)^{-1} = (b\ a) = (a\ b)$.

::: prova Scrivi l'inverso di $(1\ 6\ 4)$ e controlla che composto con $(1\ 6\ 4)$ dia l'identità.
$(1\ 6\ 4)^{-1} = (4\ 6\ 1)$, che si può scrivere anche $(1\ 4\ 6)$. Controllo sull'1: $(1\ 6\ 4)$ lo manda nel 6 e $(1\ 4\ 6)$ riporta il 6 nell'1. Lo stesso per 6 e 4.
:::

> [!RICORDA]
> - Un ciclo $(t_1\ \cdots\ t_\ell)$ manda ogni numero nel successivo e l'ultimo nel primo; gli altri numeri restano fermi.
> - Si può cominciare da qualunque numero del giro, ma l'ordine non si cambia.
> - L'inverso è lo stesso ciclo letto al contrario; uno scambio è l'inverso di sé stesso.

## Cicli disgiunti (definizione 5.6 e proposizione 5.7)

Nella D10 la composizione di permutazioni non era commutativa. Con i cicli succede la stessa cosa quando hanno numeri in comune: seguendo l'1 da destra a sinistra, $(1\ 2)(1\ 3)$ lo manda prima nel 3, che il secondo ciclo lascia fermo, mentre $(1\ 3)(1\ 2)$ lo manda nel 2. Infatti $(1\ 2)(1\ 3) = (1\ 3\ 2)$ e $(1\ 3)(1\ 2) = (1\ 2\ 3)$. Se invece due cicli muovono numeri diversi, ognuno lavora per conto suo.

> [!DEF] 5.6 · Cicli disgiunti
> Due cicli $(s_1\ \cdots\ s_\ell)$ e $(t_1\ \cdots\ t_{\ell'})$ si chiamano **disgiunti** se $\{s_1, \dots, s_\ell\} \cap \{t_1, \dots, t_{\ell'}\} = \emptyset$.

**Come si legge.** Disgiunti vuol dire che nessun numero compare in tutti e due. Per esempio $(2\ 4\ 1\ 7)$ e $(3\ 9\ 5)$ sono disgiunti in $S_9$; $(4\ 5\ 2\ 8)$ e $(1\ 6\ 2\ 3\ 7)$ non lo sono, perché il 2 sta in entrambi.

> [!PROP] 5.7 · I cicli disgiunti commutano
> Se $\sigma$ e $\tau$ sono cicli disgiunti, allora $\tau \circ \sigma = \sigma \circ \tau$.

**Come si legge.** Con cicli disgiunti l'ordine non conta. Il motivo: un numero mosso da $\sigma$ è lasciato fermo da $\tau$, quindi in tutti e due gli ordini fa un solo passo, quello di $\sigma$. Lo stesso vale per i numeri di $\tau$. I numeri che nessuno dei due muove restano fermi in entrambi gli ordini.

> [!DIM] della proposizione 5.7
> Il libro controlla $(\tau \circ \sigma)(k) = (\sigma \circ \tau)(k)$ per ogni $k$, in tre casi.
> 1. Se $k = s_i$, allora $\tau$ non muove né $s_i$ né $s_{i+1}$: $(\tau \circ \sigma)(s_i) = \tau(s_{i+1}) = s_{i+1}$ e $(\sigma \circ \tau)(s_i) = \sigma(s_i) = s_{i+1}$.
> 2. Se $k = t_i$, lo stesso conto con i ruoli scambiati dà $t_{i+1}$ in tutti e due gli ordini.
> 3. Se $k$ non è né tra gli $s_i$ né tra i $t_i$, tutti e due i cicli lo lasciano fermo, e il risultato è $k$.
>
> Qui $s_{\ell + 1}$ vuol dire $s_1$ e $t_{\ell' + 1}$ vuol dire $t_1$: è la chiusura del giro.

::: prova $(1\ 4)(2\ 5\ 3)$ e $(2\ 5\ 3)(1\ 4)$ sono la stessa permutazione? E $(1\ 2\ 3)(3\ 4)$ e $(3\ 4)(1\ 2\ 3)$?
La prima coppia sì: i due cicli non hanno numeri in comune. La seconda no, perché il 3 sta in entrambi: $(1\ 2\ 3)(3\ 4) = (1\ 2\ 3\ 4)$, mentre $(3\ 4)(1\ 2\ 3) = (1\ 2\ 4\ 3)$.
:::

> [!RICORDA]
> - Disgiunti: nessun numero in comune.
> - I cicli disgiunti si possono comporre in qualunque ordine; quelli con numeri in comune no.

## Il teorema dei cicli disgiunti (teorema 5.8)

Il risultato che giustifica tutta la sezione è che i cicli bastano a ricostruire ogni permutazione. Nell'esempio dell'inizio c'era un solo giro; in generale ce ne sono diversi, uno accanto all'altro.

> [!TEOREMA] 5.8 · Decomposizione in cicli disgiunti
> Ogni permutazione $\pi \neq \mathrm{id}$ di $S_n$ si può scrivere in modo essenzialmente unico come composizione di cicli disgiunti.

**Come si legge.** Ogni permutazione che non sia l'identità è fatta di giri chiusi che non si toccano. «Essenzialmente unico» vuol dire che i cicli sono sempre gli stessi: può cambiare solo l'ordine in cui li elenchi, che non conta perché sono disgiunti (nota 5.9). Nel prodotto il segno $\circ$ tra i cicli di solito non si scrive (nota 5.10).

Il metodo per trovarli viene dalla dimostrazione: si parte da un numero che si muove e si seguono le sue immagini finché non si torna al punto di partenza. Quel giro è il primo ciclo. Poi si riparte da un numero che si muove e non è ancora stato usato, e così via.

> [!ESEMPIO] · l'esempio del libro in $S_{13}$
> $$\pi = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 \\ 8 & 5 & 11 & 4 & 7 & 10 & 9 & 2 & 1 & 3 & 6 & 13 & 12 \end{pmatrix}$$
> L'unico numero fermo è il 4. Si parte dall'1: $1 \mapsto 8 \mapsto 2 \mapsto 5 \mapsto 7 \mapsto 9 \mapsto 1$. Il primo numero non ancora usato che si muove è il 3: $3 \mapsto 11 \mapsto 6 \mapsto 10 \mapsto 3$. Resta il 12: $12 \mapsto 13 \mapsto 12$. Quindi
> $$\pi = (1\ 8\ 2\ 5\ 7\ 9)(3\ 11\ 6\ 10)(12\ 13).$$

```grafico
titolo: La permutazione di $S_{13}$ dell'esempio è fatta di tre giri che non si toccano: $(1\ 8\ 2\ 5\ 7\ 9)$, $(3\ 11\ 6\ 10)$ e $(12\ 13)$. Il 4 resta fermo e non si scrive
x: -2.6 10.6
y: -2.7 2.7
assi: no
griglia: no
cerchio: 0 0 1.7 | grigio | sottile
punto: 0.00 1.70 | blu
testo: 0.00 2.26 | blu | "1"
punto: 1.47 0.85 | blu
testo: 1.96 1.13 | blu | "8"
punto: 1.47 -0.85 | blu
testo: 1.96 -1.13 | blu | "2"
punto: 0.00 -1.70 | blu
testo: 0.00 -2.26 | blu | "5"
punto: -1.47 -0.85 | blu
testo: -1.96 -1.13 | blu | "7"
punto: -1.47 0.85 | blu
testo: -1.96 1.13 | blu | "9"
freccia: 0.27 1.55 1.21 1.00 | blu
freccia: 1.47 0.54 1.47 -0.54 | blu
freccia: 1.21 -1.00 0.27 -1.55 | blu
freccia: -0.27 -1.55 -1.21 -1.00 | blu
freccia: -1.47 -0.54 -1.47 0.54 | blu
freccia: -1.21 1.00 -0.27 1.55 | blu
cerchio: 5 0 1.4 | grigio | sottile
punto: 5.00 1.40 | ambra
testo: 5.00 1.93 | ambra | "3"
punto: 6.40 0.00 | ambra
testo: 6.93 0.00 | ambra | "11"
punto: 5.00 -1.40 | ambra
testo: 5.00 -1.93 | ambra | "6"
punto: 3.60 0.00 | ambra
testo: 3.07 0.00 | ambra | "10"
freccia: 5.25 1.15 6.15 0.25 | ambra
freccia: 6.15 -0.25 5.25 -1.15 | ambra
freccia: 4.75 -1.15 3.85 -0.25 | ambra
freccia: 3.85 0.25 4.75 1.15 | ambra
punto: 9.30 0.90 | verde
testo: 9.30 1.44 | verde | "12"
punto: 9.30 -0.90 | verde
testo: 9.30 -1.44 | verde | "13"
freccia: 9.10 0.60 9.10 -0.60 | verde
freccia: 9.50 -0.60 9.50 0.60 | verde
```

> [!DIM] del teorema 5.8, l'esistenza
> Sia $s_1$ un numero con $\pi(s_1) \neq s_1$, che esiste perché $\pi$ non è l'identità. Si costruisce la successione $s_2 = \pi(s_1)$, $s_3 = \pi(s_2)$, e così via. I numeri di $I_n$ sono finiti, quindi prima o poi un numero si ripete: sia $s_r$ il primo ripetuto, uguale a un $s_j$ con $j < r$.
> - Non può essere $j > 1$: da $\pi(s_{r-1}) = s_r = s_j = \pi(s_{j-1})$ e dall'iniettività di $\pi$ verrebbe $s_{r-1} = s_{j-1}$, una ripetizione precedente.
> - Quindi $s_r = s_1$, e su $\{s_1, \dots, s_{r-1}\}$ la permutazione si comporta come il ciclo $c_1 = (s_1\ \cdots\ s_{r-1})$.
>
> Se fuori da questi numeri $\pi$ non muove niente, $\pi = c_1$. Altrimenti si ripete la costruzione partendo da un numero mosso e non ancora usato: si ottiene un ciclo $c_2$ disgiunto da $c_1$, e così via. A ogni passo i numeri rimasti diminuiscono, quindi la costruzione finisce, e $\pi$ è il prodotto dei cicli trovati.

::: prova Scrivi in cicli disgiunti $\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 4 & 6 & 3 & 1 & 2 & 5 \end{pmatrix}$.
Dall'1: $1 \mapsto 4 \mapsto 1$, primo ciclo $(1\ 4)$. Il 3 è fermo. Dal 2: $2 \mapsto 6 \mapsto 5 \mapsto 2$. Risultato: $(1\ 4)(2\ 6\ 5)$.
:::

> [!RICORDA]
> - Ogni permutazione diversa dall'identità è un prodotto di cicli disgiunti, sempre gli stessi a meno dell'ordine.
> - Per trovarli: si parte da un numero che si muove, si seguono le immagini fino a tornare all'inizio, poi si riparte da un numero non ancora usato.
> - I numeri fermi non si scrivono.

## Da un prodotto qualsiasi ai cicli disgiunti (pp. 91–92)

Negli esercizi d'esame la permutazione arriva quasi sempre già scritta come prodotto di cicli, ma **non disgiunti**. Si può passare ai cicli disgiunti senza scrivere la tabella, a patto di rispettare una regola: nella composizione si applica per primo il ciclo **più a destra**.

Il metodo, per un prodotto come $\sigma = c_4\, c_3\, c_2\, c_1$:

1. si parte da un numero, per comodità l'1, e lo si fa passare attraverso i cicli da destra a sinistra; quello che esce è $\sigma(1)$;
2. si ripete con $\sigma(1)$, poi con il risultato, finché si torna all'1: è il primo ciclo;
3. si riparte da un numero non ancora usato, finché i numeri sono finiti.

In pratica si scrive il ciclo man mano: «(1», poi «(1 6», e così via (nota 5.11).

> [!ESEMPIO] · l'esempio del libro in $S_9$
> $\sigma = (1\ 5\ 8)(2\ 8\ 9\ 6)(9\ 7\ 4\ 1)(2\ 3)$. Seguo l'1 da destra: $(2\ 3)$ lo lascia fermo, $(9\ 7\ 4\ 1)$ lo manda nel 9, $(2\ 8\ 9\ 6)$ manda il 9 nel 6, $(1\ 5\ 8)$ lascia fermo il 6. Quindi $\sigma(1) = 6$.
>
> | parte da | $(2\ 3)$ | $(9\ 7\ 4\ 1)$ | $(2\ 8\ 9\ 6)$ | $(1\ 5\ 8)$ | esce |
> |---|---|---|---|---|---|
> | 1 | 1 | 9 | 6 | 6 | **6** |
> | 6 | 6 | 6 | 2 | 2 | **2** |
> | 2 | 3 | 3 | 3 | 3 | **3** |
> | 3 | 2 | 2 | 8 | 1 | **1**, il giro si chiude |
> | 4 | 4 | 1 | 1 | 5 | **5** |
> | 5 | 5 | 5 | 5 | 8 | **8** |
> | 8 | 8 | 8 | 9 | 9 | **9** |
> | 9 | 9 | 7 | 7 | 7 | **7** |
> | 7 | 7 | 4 | 4 | 4 | **4**, il giro si chiude |
>
> Risultato: $\sigma = (1\ 6\ 2\ 3)(4\ 5\ 8\ 9\ 7)$. L'ho controllato con un programma.

```grafico
titolo: Il numero 1 attraversa i cicli di $\sigma = (1\ 5\ 8)(2\ 8\ 9\ 6)(9\ 7\ 4\ 1)(2\ 3)$ da destra a sinistra: $(2\ 3)$ non lo tocca, $(9\ 7\ 4\ 1)$ lo manda nel 9, $(2\ 8\ 9\ 6)$ manda il 9 nel 6, $(1\ 5\ 8)$ non tocca il 6. Quindi $\sigma(1) = 6$
x: 0 12.6
y: 0.6 3.2
assi: no
griglia: no
proporzioni: libere
testo: 0.5 1.6 | blu | "1"
freccia: 0.9 1.6 2.9 1.6 | grigio
testo: 1.9 2.4 | grigio | "(2 3)"
testo: 3.4 1.6 | blu | "1"
freccia: 3.8 1.6 5.8 1.6 | ambra
testo: 4.8 2.4 | ambra | "(9 7 4 1)"
testo: 6.3 1.6 | blu | "9"
freccia: 6.7 1.6 8.7 1.6 | verde
testo: 7.7 2.4 | verde | "(2 8 9 6)"
testo: 9.2 1.6 | blu | "6"
freccia: 9.6 1.6 11.6 1.6 | grigio
testo: 10.6 2.4 | grigio | "(1 5 8)"
testo: 12.1 1.6 | rosa | "6"
```

> [!TRAPPOLA] Da destra, non da sinistra
> Se segui i cicli da sinistra a destra calcoli un'altra permutazione. In questo esempio verrebbe $\sigma(1) = 5$, dal primo ciclo $(1\ 5\ 8)$, che è sbagliato. Nella composizione $c_4 \circ c_3 \circ c_2 \circ c_1$ il primo a lavorare è $c_1$, come nella D05.

::: prova Scrivi in cicli disgiunti $(1\ 2\ 3)(2\ 4)$ in $S_4$.
Seguo l'1: $(2\ 4)$ lo lascia, $(1\ 2\ 3)$ lo manda nel 2. Seguo il 2: $(2\ 4)$ lo manda nel 4, $(1\ 2\ 3)$ lascia il 4. Seguo il 4: $(2\ 4)$ lo manda nel 2, $(1\ 2\ 3)$ manda il 2 nel 3. Seguo il 3: $(2\ 4)$ lo lascia, $(1\ 2\ 3)$ lo manda nell'1. Risultato: il 4-ciclo $(1\ 2\ 4\ 3)$.
:::

> [!RICORDA]
> - Un prodotto di cicli si legge da destra a sinistra: ogni numero attraversa per primo il ciclo più a destra.
> - Seguendo un numero alla volta si scrivono direttamente i cicli disgiunti, senza passare dalla tabella.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $(t_1\ t_2\ \cdots\ t_\ell)$ | «il ciclo t uno, t due, …» | $t_1 \mapsto t_2 \mapsto \cdots \mapsto t_\ell \mapsto t_1$, gli altri fermi | $(2\ 5\ 3)$ manda il 3 nel 2 |
| $(a\ b)$ | «lo scambio di a e b» | un ciclo di lunghezza 2 | $(1\ 4)$ scambia 1 e 4 |
| $\ell$ | «elle» | la lunghezza di un ciclo | $(2\ 5\ 3)$ ha $\ell = 3$ |
| $i \mapsto j$ | «i va in j» | la permutazione manda $i$ in $j$ | $1 \mapsto 8$ |
| $\cap$, $\emptyset$ | «intersezione», «insieme vuoto» | i numeri in comune; nessun numero | cicli disgiunti: intersezione vuota |
| $\sigma\tau$ | «sigma tau» | $\sigma \circ \tau$, con il pallino sottinteso | prima $\tau$, poi $\sigma$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 28/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **La decomposizione in cicli disgiunti** è il primo punto del problema sulle permutazioni negli appelli del 13/01/2026, del 01/07/2026 e del 10/09/2026, e la domanda 5 del quiz del 06/06/2025. Senza di lei non si calcolano tipo, periodo e parità, che vengono dopo.
2. **L'inversa** compare nello stesso problema: con i cicli disgiunti basta leggere ogni ciclo al contrario.
3. **L'ordine da destra a sinistra** è l'errore più frequente: le risposte sbagliate del quiz sono spesso proprio i cicli calcolati nel verso opposto.

### Una domanda vera, letta insieme

**Appello del 13/01/2026, problema 1, versione A, punto a).** Il testo: «In $S_9$ si consideri la permutazione $\sigma = (1\ 2)(5\ 9\ 4)(4\ 2\ 7)(9\ 5\ 6\ 2\ 3)$. a) Calcolare la decomposizione di $\sigma$, $\sigma^{-1}$ e di $\sigma^8$ in cicli disgiunti.»

**In pratica chiede:** riscrivere la permutazione con cicli che non si toccano, e poi la sua inversa. La potenza $\sigma^8$ è della [D12](D12_tipo_periodo_permutazioni.html).

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: l'ordine.** I cicli si applicano da destra: prima $(9\ 5\ 6\ 2\ 3)$, poi $(4\ 2\ 7)$, poi $(5\ 9\ 4)$, infine $(1\ 2)$.
>
> **Passo 2: il primo giro.** L'1 attraversa i primi tre cicli senza muoversi e $(1\ 2)$ lo manda nel 2: $\sigma(1) = 2$. Il 2 va nel 3 con il primo ciclo e poi non si muove più: $\sigma(2) = 3$. Il 3 va nel 9, poi resta, poi $(5\ 9\ 4)$ lo manda nel 4: $\sigma(3) = 4$. Il 4 resta, poi va nel 2, poi resta, poi $(1\ 2)$ lo manda nell'1: $\sigma(4) = 1$. Primo ciclo: $(1\ 2\ 3\ 4)$.
>
> **Passo 3: il secondo giro.** Il 5 va nel 6 e poi non si muove: $\sigma(5) = 6$. Il 6 va nel 2, poi nel 7: $\sigma(6) = 7$. Il 7 resta, poi va nel 4, poi nel 5: $\sigma(7) = 5$. Secondo ciclo: $(5\ 6\ 7)$.
>
> **Passo 4: i numeri rimasti.** L'8 non compare in nessun ciclo. Il 9 va nel 5 e $(5\ 9\ 4)$ lo riporta nel 9: è fermo. Quindi $\sigma = (1\ 2\ 3\ 4)(5\ 6\ 7)$.
>
> **Passo 5: l'inversa.** Ogni ciclo al contrario: $\sigma^{-1} = (4\ 3\ 2\ 1)(7\ 6\ 5) = (1\ 4\ 3\ 2)(5\ 7\ 6)$.
>
> È la soluzione ufficiale, e l'ho ricontrollata con un programma.

### Un'altra domanda vera

> [!ESEMPIO] · Appello del 06/06/2025, quiz versione 1, domanda 5
> «La decomposizione della permutazione $(5\ 4\ 2\ 3\ 6)(1\ 7)(1\ 5\ 3\ 4)$ in cicli disgiunti è: 1. $(1\ 4\ 7)(2\ 5)(3\ 6)$; 2. $(1\ 7\ 4)(2\ 3)$; 3. $(1\ 4\ 7)(5\ 6)$; 4. $(1\ 7\ 4)(2\ 3\ 5\ 6)$; 5. $(1\ 4\ 7)(2\ 3)(5\ 6)$.»
>
> **Soluzione.** Da destra: l'1 va nel 5 con $(1\ 5\ 3\ 4)$, resta con $(1\ 7)$, e $(5\ 4\ 2\ 3\ 6)$ lo manda nel 4: $\sigma(1) = 4$. Il 4 va nell'1, poi nel 7, poi resta: $\sigma(4) = 7$. Il 7 resta, va nell'1, poi resta: $\sigma(7) = 1$. Primo ciclo $(1\ 4\ 7)$. Allo stesso modo $\sigma(2) = 3$, $\sigma(3) = 2$, $\sigma(5) = 6$, $\sigma(6) = 5$. Risultato: $(1\ 4\ 7)(2\ 3)(5\ 6)$, la risposta 5, come nella soluzione ufficiale. La risposta 2 ha il primo ciclo al contrario: è quello che esce leggendo i cicli da sinistra.

### Errori da evitare

- Comporre da sinistra a destra.
- Dimenticare i numeri che compaiono in più cicli e alla fine restano fermi, come il 9 dell'appello del 13/01/2026.
- Confondere $(1\ 4\ 7)$ con $(1\ 7\ 4)$: sono uno l'inverso dell'altro.
- Scrivere nella decomposizione i cicli di lunghezza 1: i numeri fermi non si scrivono.

## Quiz

```quiz
D: Appello del 06/06/2025, quiz versione 1, domanda 5. La decomposizione della permutazione $(5\ 4\ 2\ 3\ 6)(1\ 7)(1\ 5\ 3\ 4)$ in cicli disgiunti è:
- $(1\ 4\ 7)(2\ 5)(3\ 6)$
- $(1\ 7\ 4)(2\ 3)$
- $(1\ 4\ 7)(5\ 6)$
- $(1\ 7\ 4)(2\ 3\ 5\ 6)$
+ $(1\ 4\ 7)(2\ 3)(5\ 6)$
= Seguendo ogni numero da destra si trovano $1 \mapsto 4 \mapsto 7 \mapsto 1$, $2 \mapsto 3 \mapsto 2$ e $5 \mapsto 6 \mapsto 5$: è la risposta 5 della soluzione ufficiale. La più insidiosa è la seconda, con il primo ciclo al contrario, che viene leggendo i cicli da sinistra; in più manca $(5\ 6)$.

D: Appello del 06/06/2025, quiz versione 2, domanda 5. La decomposizione della permutazione $(1\ 6\ 3\ 7\ 2)(4\ 5)(4\ 1\ 7\ 6)$ in cicli disgiunti è:
- $(4\ 6\ 5)(1\ 3)(2\ 7)$
+ $(4\ 6\ 5)(7\ 3)(1\ 2)$
- $(4\ 6\ 5)(1\ 2)$
- $(1\ 7\ 4)(7\ 3\ 1\ 2)$
- $(1\ 7\ 4)(7\ 3)$
= Da destra: il 4 va nell'1, poi resta, poi nel 6; il 6 va nel 4 e poi nel 5; il 5 resta, va nel 4, poi resta. Primo ciclo $(4\ 6\ 5)$. Poi $1 \mapsto 2 \mapsto 1$ e $3 \mapsto 7 \mapsto 3$: è la risposta 2 della soluzione ufficiale. La più insidiosa è la terza, che dimentica lo scambio $(7\ 3)$; la quarta non è nemmeno fatta di cicli disgiunti.

D: Qual è l'inverso del ciclo $(2\ 5\ 3\ 7\ 4\ 8)$?
+ $(8\ 4\ 7\ 3\ 5\ 2)$
- $(2\ 5\ 3\ 7\ 4\ 8)$
- $(5\ 3\ 7\ 4\ 8\ 2)$
- $(2\ 8\ 7\ 4\ 3\ 5)$
- $(8\ 2\ 5\ 3\ 7\ 4)$
= L'inverso è lo stesso ciclo letto al contrario (proposizione 5.5). La risposta più insidiosa è la terza: è lo stesso ciclo di partenza, solo cominciato dal 5, come anche l'ultima, cominciata dall'8.

D: Quale di queste scritture è lo **stesso** ciclo di $(1\ 6\ 4\ 2)$?
+ $(4\ 2\ 1\ 6)$
- $(1\ 4\ 6\ 2)$
- $(2\ 4\ 6\ 1)$
- $(6\ 1\ 4\ 2)$
- $(1\ 6\ 2\ 4)$
= Si può cambiare il numero da cui si comincia, non l'ordine del giro: $(4\ 2\ 1\ 6)$ comincia dal 4 e prosegue con 2, 1, 6, come l'originale. La più insidiosa è $(2\ 4\ 6\ 1)$, che è l'inverso.

D: Quanto vale $(1\ 2)(1\ 3)$ in $S_3$?
+ $(1\ 3\ 2)$
- $(1\ 2\ 3)$
- $(2\ 3)$
- l'identità
- $(1\ 2)(1\ 3)$, perché non si può semplificare
= Da destra: l'1 va nel 3, che $(1\ 2)$ lascia fermo; il 3 va nell'1 e poi nel 2; il 2 resta e poi va nell'1. Quindi $1 \mapsto 3 \mapsto 2 \mapsto 1$. La più insidiosa è $(1\ 2\ 3)$, che è $(1\ 3)(1\ 2)$: l'ordine conta perché i cicli hanno l'1 in comune.

D: Quali di queste coppie di cicli commutano sicuramente?
+ $(1\ 5\ 7)$ e $(2\ 3)$
- $(1\ 5\ 7)$ e $(5\ 2)$
- $(1\ 2)$ e $(2\ 3)$
- $(1\ 2\ 3)$ e $(3\ 4\ 5)$
- $(4\ 6)$ e $(6\ 4\ 1)$
= Commutano i cicli disgiunti (proposizione 5.7), e solo la prima coppia non ha numeri in comune. La più insidiosa è l'ultima, in cui i numeri si ripetono: $(4\ 6)(6\ 4\ 1)$ e $(6\ 4\ 1)(4\ 6)$ sono diverse.

D: Quanti numeri lascia fermi il ciclo $(2\ 5\ 3\ 7\ 4\ 8)$ in $S_9$?
N: 3
= Muove i 6 numeri scritti e lascia fermi gli altri $9 - 6 = 3$: l'1, il 6 e il 9.

D: Con $\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 5 & 4 & 1 & 8 & 6 & 2 & 3 & 7 \end{pmatrix}$ e $\pi = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 2 & 3 & 7 & 8 & 4 & 1 & 6 & 5 \end{pmatrix}$, quanto vale $(\sigma \circ \pi)(4)$?
N: 7
= Prima $\pi$: $\pi(4) = 8$. Poi $\sigma(8) = 7$. È la quarta colonna della tabella a tre righe dell'esempio del libro.
```

## Esercizi

::: esercizio base Riscaldamento: leggere un ciclo
In $S_7$, dove manda ogni numero il ciclo $(3\ 1\ 6\ 2)$? Quali numeri restano fermi? Scrivi anche la sua tabella a due righe.
::: soluzione
$3 \mapsto 1$, $1 \mapsto 6$, $6 \mapsto 2$, $2 \mapsto 3$; restano fermi 4, 5 e 7. La tabella è $\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 6 & 3 & 1 & 4 & 5 & 2 & 7 \end{pmatrix}$.
:::

::: esercizio base Riscaldamento: inversa con la tabella
Calcola l'inversa di $\begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 3 & 5 & 4 & 1 & 2 \end{pmatrix}$ scambiando le righe e riordinando, poi scrivila in cicli disgiunti.
::: soluzione
Scambiando le righe viene $\begin{pmatrix} 3 & 5 & 4 & 1 & 2 \\ 1 & 2 & 3 & 4 & 5 \end{pmatrix}$, e riordinando $\begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 4 & 5 & 1 & 3 & 2 \end{pmatrix}$. In cicli: $1 \mapsto 4 \mapsto 3 \mapsto 1$ e $2 \mapsto 5 \mapsto 2$, cioè $(1\ 4\ 3)(2\ 5)$. Infatti la permutazione di partenza è $(1\ 3\ 4)(2\ 5)$, e ogni ciclo si legge al contrario.
:::

::: esercizio medio Esercizio 5.2 del libro
Scrivi in cicli disgiunti le permutazioni di $S_8$ con queste righe sotto: (a) $3\ 8\ 5\ 7\ 2\ 6\ 4\ 1$; (b) $4\ 6\ 2\ 8\ 3\ 5\ 1\ 7$; (c) $5\ 3\ 2\ 7\ 1\ 8\ 4\ 6$; (d) $3\ 6\ 7\ 8\ 2\ 5\ 1\ 4$.
::: soluzione
(a) $(1\ 3\ 5\ 2\ 8)(4\ 7)$, con il 6 fermo. (b) $(1\ 4\ 8\ 7)(2\ 6\ 5\ 3)$. (c) $(1\ 5)(2\ 3)(4\ 7)(6\ 8)$. (d) $(1\ 3\ 7)(2\ 6\ 5)(4\ 8)$. Controllate con un programma.
:::

::: esercizio medio Esercizio 5.1 del libro, in parte
In $S_7$ siano $\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 2 & 4 & 3 & 1 & 7 & 5 & 6 \end{pmatrix}$ e $\tau = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 5 & 2 & 1 & 6 & 3 & 7 & 4 \end{pmatrix}$. Calcola $\sigma \circ \tau$ e $\tau \circ \sigma$, in tabella e in cicli disgiunti.
::: soluzione
Con la tabella a tre righe: $\sigma \circ \tau$ ha riga sotto $7\ 4\ 2\ 5\ 3\ 6\ 1$, cioè $(1\ 7)(2\ 4\ 5\ 3)$; $\tau \circ \sigma$ ha riga sotto $2\ 6\ 1\ 5\ 4\ 3\ 7$, cioè $(1\ 2\ 6\ 3)(4\ 5)$. Sono diverse: l'ordine conta. Per controllo, in cicli $\sigma = (1\ 2\ 4)(5\ 7\ 6)$ e $\tau = (1\ 5\ 3)(4\ 6\ 7)$.
:::

::: esercizio esame Altre due versioni del quiz del 06/06/2025
Scrivi in cicli disgiunti (a) $(2\ 3\ 1\ 6\ 5)(4\ 7)(4\ 2\ 6\ 3)$ e (b) $(2\ 5\ 3\ 7\ 6)(1\ 4)(1\ 2\ 7\ 5)$, in $S_7$. Sono le domande 5 delle versioni 3 e 4.
::: soluzione
(a) $(3\ 7\ 4)(1\ 6)(2\ 5)$, scritta nella soluzione ufficiale come $(4\ 3\ 7)(1\ 6)(5\ 2)$. (b) $(1\ 5\ 4)(2\ 6)(3\ 7)$, la risposta 4 della soluzione ufficiale. In (a), per esempio, il 4 va nel 2 con il ciclo di destra, resta con $(4\ 7)$, e $(2\ 3\ 1\ 6\ 5)$ manda il 2 nel 3: $4 \mapsto 3$.
:::

::: esercizio difficile Un ciclo per due scambi
Mostra che $(a\ b\ c) = (a\ c)(a\ b)$ e che $(a\ b\ c) = (a\ b)(b\ c)$. Che cosa ti dice sull'unicità della scrittura con cicli **non** disgiunti?
::: soluzione
Da destra, in $(a\ c)(a\ b)$: $a \mapsto b$, che $(a\ c)$ lascia; $b \mapsto a \mapsto c$; $c$ resta e poi va in $a$. È $(a\ b\ c)$. In $(a\ b)(b\ c)$: $a$ resta e poi va in $b$; $b \mapsto c$, che $(a\ b)$ lascia; $c \mapsto b \mapsto a$. Di nuovo $(a\ b\ c)$. Con cicli che si toccano la scrittura **non** è unica; il teorema 5.8 parla solo di cicli disgiunti. È l'esempio di p. 96 del libro, che serve per la parità.
:::

## Domande di ripasso

::: domanda Come si calcola l'inversa di una permutazione con la tabella?
Si scambiano le due righe e si riordinano le colonne in modo che la riga sopra torni $1, 2, \dots, n$.
:::

::: domanda Che cos'è un ciclo di lunghezza $\ell$?
Una permutazione che manda $t_1$ in $t_2$, $t_2$ in $t_3$, …, $t_\ell$ in $t_1$, e lascia fermi tutti gli altri numeri.
:::

::: domanda Perché $(2\ 5\ 3)$ e $(5\ 3\ 2)$ sono lo stesso ciclo, ma $(2\ 3\ 5)$ no?
Le prime due descrivono lo stesso giro, cominciato da numeri diversi. La terza manda il 2 nel 3: è un altro giro, l'inverso.
:::

::: domanda Quando due cicli commutano di sicuro?
Quando sono disgiunti, cioè non hanno numeri in comune (proposizione 5.7).
:::

::: domanda Come si trova la decomposizione in cicli disgiunti di un prodotto di cicli qualsiasi?
Si segue un numero attraverso i cicli da destra a sinistra, poi il risultato, finché si torna all'inizio; si riparte da un numero non ancora usato.
:::

## Glossario

```glossario
Ciclo | Permutazione che manda t1 in t2, ..., t_l in t1 e lascia fermi gli altri numeri (definizione 5.3).
Lunghezza | Il numero di elementi che un ciclo muove.
Scambio, trasposizione | Ciclo di lunghezza 2: scambia due numeri.
Cicli disgiunti | Cicli senza numeri in comune (definizione 5.6); commutano.
Decomposizione in cicli disgiunti | Scrittura di una permutazione come prodotto di cicli disgiunti, unica a meno dell'ordine (teorema 5.8).
Tabella a tre righe | Schema per calcolare una composizione: la riga di mezzo è la prima permutazione, quella sotto le immagini secondo la seconda.
```

## Checklist

```checklist
- So calcolare l'inversa di una permutazione dalla tabella.
- So calcolare una composizione con la tabella a tre righe.
- So leggere e scrivere un ciclo, e riconoscere quando due scritture sono lo stesso ciclo.
- So scrivere l'inverso di un ciclo.
- So quando due cicli commutano.
- So scrivere una permutazione data in tabella come prodotto di cicli disgiunti.
- So ridurre a cicli disgiunti un prodotto di cicli qualsiasi, leggendo da destra.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 5 «Permutazioni», pp. 86–92: calcolo della permutazione inversa e della composizione (con gli esempi in $S_7$, $S_8$ e $S_4$), la sezione «Cicli» con la definizione 5.3, la nota 5.4, la proposizione 5.5, la definizione 5.6, la proposizione 5.7 con la dimostrazione, il teorema 5.8 con la dimostrazione, le note 5.9–5.11 e gli esempi in $S_{13}$ e $S_9$; esercizi 5.1 e 5.2 (p. 104). Le parti del libro sono riassunte con parole mie.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori), lezione 11: «Calcolo di composizioni ed inverse di permutazioni. Cicli. Cicli disgiunti. Ogni permutazione è composizione di cicli a due a due disgiunti».
- Appelli di Matematica Discreta con le soluzioni ufficiali, dal Moodle MDAG1 2025/26 (id 3501, aperto agli ospiti): 06/06/2025, quiz, domanda 5 (versioni 1–4); 13/01/2026, problema 1, versione A.
- Tutte le composizioni, le inverse e le decomposizioni di questa lezione le ho controllate con un programma. Gli esempi senza indicazione, i quiz senza data e gli esercizi senza numero del libro sono di questi appunti.
