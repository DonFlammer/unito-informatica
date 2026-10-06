---
corso: MDAG
modulo: AG
lezione: L23
titolo: Lo spazio euclideo II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L23
descrizione: >-
  Appunti della lezione L23 di Algebra lineare e Geometria (MDAG, parte 2): proprietà del prodotto vettoriale e area
  del parallelogramma, forma cartesiana e parametrica di rette e piani, sottospazi affini e giacitura, intersezioni,
  con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Il prodotto vettoriale misura un'area e punta nel verso della mano destra. Poi rette e piani nello spazio: si
  descrivono con una prova («chi ci sta dentro») oppure con una ricetta («come sono fatti i punti»), anche quando non
  passano per l'origine. Alla fine, come si trova dove si incontrano: è il conto di quasi tutti i problemi di geometria.
materiale: dispense
scheda:
  Dispense: lezione 23 · pp. 116–121
  Libro: Martelli, §9.1 e §9.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 23 «Lo spazio euclideo II»; B. Martelli, Geometria e algebra lineare, §9.1–9.2
appunti_html: appunti/MDAG/L23_spazio_euclideo_2.html
genera_html: true
---

## In breve

- Il **prodotto vettoriale** di due vettori dello spazio (lezione L22) è perpendicolare a tutti e due, e la sua **lunghezza** è l'**area del parallelogramma** che hanno per lati.
- Tutto viene da una sola uguaglianza, l'**identità di Lagrange**, che lega il prodotto vettoriale, il prodotto scalare e le lunghezze.
- Il **verso** del prodotto vettoriale si trova con la **regola della mano destra**.
- Il prodotto vettoriale cambia segno se scambi i fattori e si comporta bene con somme e multipli, ma **le parentesi contano**: non è associativo.
- Un sottospazio si descrive con una **prova** (le equazioni, **forma cartesiana**: dicono chi ci sta dentro) oppure con una **ricetta** (i generatori, **forma parametrica**: dicono come sono fatti i punti).
- Una retta o un piano che non passa per l'origine è un **sottospazio affine**: un sottospazio vettoriale spostato. Il sottospazio di partenza si chiama **giacitura**.
- Nello spazio un piano ha **una** equazione. Dalla ricetta la si ottiene con il prodotto vettoriale dei due vettori della ricetta.
- Per **intersecare** si fanno tre tipi di conti: si mettono insieme le prove, si mette la ricetta dentro la prova, oppure si uguagliano due ricette.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Da dove ripartiamo: il prodotto vettoriale (pp. 114–116)

Nella lezione L22 hai incontrato un'operazione che esiste **solo nello spazio a tre dimensioni**: prende due vettori e restituisce un vettore, mentre il prodotto scalare restituisce un numero. In questi appunti, per risparmiare spazio, i vettori che le dispense scrivono in colonna li scriviamo spesso in riga: $(1, 2, 2)$ vuol dire la colonna ${}^t(1, 2, 2)$. Ecco la definizione, come nelle dispense.

> [!DEF] 22.14 · Prodotto vettoriale (richiamo dalla lezione L22)
> Dati due vettori $v = (v_1, v_2, v_3)$ e $w = (w_1, w_2, w_3)$ di $\R^3$, il **prodotto vettoriale** fra $v$ e $w$ è il vettore
> $$v \times w = \begin{pmatrix} v_2 w_3 - v_3 w_2 \\ v_3 w_1 - v_1 w_3 \\ v_1 w_2 - v_2 w_1 \end{pmatrix}.$$
> In altre parole $v \times w = (d_1, -d_2, d_3)$, dove $d_i$ è il determinante del minore $2 \times 2$ che si ottiene cancellando la riga $i$-esima dalla matrice $\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}$.

**Come si legge.** $v \times w$ si legge «vu vettore vu doppio». In pratica si fa così:

1. scrivi $v$ e $w$ **uno accanto all'altro**, come due colonne;
2. prima componente: copri la **prima riga** e calcola il determinante $2 \times 2$ che resta;
3. seconda componente: copri la **seconda riga**, calcola il determinante e **cambia segno**;
4. terza componente: copri la **terza riga** e calcola il determinante.

Le dispense ricordano anche una regola per la memoria: un «determinante» con una colonna fatta dei vettori della base. Non è una vera matrice, perché $e_1, e_2, e_3$ non sono numeri:

$$\begin{aligned} v \times w &= \det\begin{pmatrix} v_1 & w_1 & e_1 \\ v_2 & w_2 & e_2 \\ v_3 & w_3 & e_3 \end{pmatrix} \\ &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix} e_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix} e_2 + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix} e_3. \end{aligned}$$

> [!ESEMPIO] $v = (1, 2, 2)$ e $w = (0, 3, 4)$
> Le due colonne affiancate danno le righe $(1, 0)$, $(2, 3)$, $(2, 4)$.
> - Copro la prima riga: $\det\begin{pmatrix} 2 & 3 \\ 2 & 4 \end{pmatrix} = 2 \cdot 4 - 3 \cdot 2 = 8 - 6 = 2$.
> - Copro la seconda riga: $\det\begin{pmatrix} 1 & 0 \\ 2 & 4 \end{pmatrix} = 1 \cdot 4 - 0 \cdot 2 = 4$, e cambio segno: $-4$.
> - Copro la terza riga: $\det\begin{pmatrix} 1 & 0 \\ 2 & 3 \end{pmatrix} = 1 \cdot 3 - 0 \cdot 2 = 3$.
>
> Quindi $v \times w = (2, -4, 3)$. Controllo che sia perpendicolare a tutti e due:
> $$\langle v \times w, v \rangle = 2 \cdot 1 + (-4) \cdot 2 + 3 \cdot 2 = 2 - 8 + 6 = 0,$$
> $$\langle v \times w, w \rangle = 2 \cdot 0 + (-4) \cdot 3 + 3 \cdot 4 = 0 - 12 + 12 = 0.$$

Dalla lezione L22 servono anche tre fatti:

- il prodotto vettoriale è **perpendicolare** a tutti e due i fattori (Proposizione 22.15): è il controllo appena fatto;
- è **zero esattamente quando** i due vettori sono **dipendenti**, cioè uno è multiplo dell'altro (Proposizione 22.16);
- se i due vettori sono indipendenti, loro due e il loro prodotto vettoriale formano una **base** dello spazio (Corollario 22.17).

> [!TRAPPOLA] Il segno della componente centrale
> L'errore più frequente è dimenticare il **meno** davanti al secondo determinante. Il controllo che salva sempre: il risultato deve dare **zero** nel prodotto scalare con tutti e due i fattori. Se non dà zero, c'è un errore di conto.

::: prova Quanto fa $(1, 0, 0) \times (0, 0, 1)$?
Righe affiancate $(1, 0)$, $(0, 0)$, $(0, 1)$. Prima: $0 \cdot 1 - 0 \cdot 0 = 0$. Seconda: $1 \cdot 1 - 0 \cdot 0 = 1$, cambiato di segno $-1$. Terza: $1 \cdot 0 - 0 \cdot 0 = 0$. Risultato $(0, -1, 0)$.
:::

> [!RICORDA]
> - Prodotto vettoriale: copri una riga alla volta, con il **meno** al centro.
> - Controllo: il risultato è perpendicolare a tutti e due i fattori.

## La lunghezza è un'area (pp. 116–117)

Parti da un caso che si disegna sul foglio. Prendi $v = (3, 0, 0)$ e $w = (1, 2, 0)$: stanno tutti e due sul pavimento, il piano $z = 0$. Il parallelogramma con lati $v$ e $w$ ha **base** 3 e **altezza** 2, quindi **area** 6.

```grafico
titolo: Il parallelogramma con lati $v = (3, 0)$ e $w = (1, 2)$ nel piano $z = 0$: base $3$, altezza $h = 2$, area $6$
x: -0.5 4.5
y: -0.8 2.8
nomi: $x$ $y$
poligono: 0 0 3 0 4 2 1 2 | ambra
vettore: 3 0 | accento | spesso | $v$ | s
vettore: 1 2 | blu | spesso | $w$ | no
segmento: 1 2 1 0 | grigio | tratteggio | $h$ | e
arco: 0 0 0.6 0 1.107 | grigio | $\vartheta$
```

Ora calcola il prodotto vettoriale. Le righe affiancate sono $(3, 1)$, $(0, 2)$, $(0, 0)$:

$$v \times w = \begin{pmatrix} 0 \cdot 0 - 0 \cdot 2 \\ 0 \cdot 1 - 3 \cdot 0 \\ 3 \cdot 2 - 0 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 6 \end{pmatrix}.$$

Il vettore punta in verticale, perpendicolare al pavimento dove stanno $v$ e $w$, ed è **lungo 6**: proprio l'area. Non è un caso, ed è quello che dimostra questa sezione.

### L'identità di Lagrange

Tutto parte da un'uguaglianza tra tre numeri. Le dispense la scrivono così.

> [!PROP] 23.1
> Per ogni $v, w \in \R^3$ vale l'equazione
> $$\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2.$$

**Come si legge.** La lunghezza al quadrato del prodotto vettoriale, più il quadrato del prodotto scalare, fa il prodotto delle lunghezze al quadrato. Se conosci due di queste tre cose, trovi la terza. Qui lunghezze e prodotto scalare sono quelli di tutti i giorni (lezione L20).

> [!ESEMPIO] Controllo con $v = (1, 2, 2)$ e $w = (0, 3, 4)$
> - $v \times w = (2, -4, 3)$, quindi la sua lunghezza al quadrato è $4 + 16 + 9 = 29$;
> - $\langle v, w \rangle = 0 + 6 + 8 = 14$, quindi il suo quadrato è 196;
> - le lunghezze al quadrato di $v$ e $w$ sono $1 + 4 + 4 = 9$ e $0 + 9 + 16 = 25$, con prodotto 225.
>
> E infatti $29 + 196 = 225$.

> [!DIM] della Proposizione 23.1
> Le dispense sviluppano i quadrati: conviene farlo per esteso, una volta.
>
> 1. A sinistra, sviluppando i tre quadrati di $\lVert v \times w \rVert^2 = (v_2 w_3 - v_3 w_2)^2 + (v_1 w_3 - v_3 w_1)^2 + (v_1 w_2 - v_2 w_1)^2$ si ottengono sei quadrati e tre doppi prodotti:
> $$\begin{aligned} &v_2^2 w_3^2 + v_3^2 w_2^2 + v_1^2 w_3^2 + v_3^2 w_1^2 + v_1^2 w_2^2 + v_2^2 w_1^2 \\ &\quad - 2\,(v_2 w_2 v_3 w_3 + v_1 w_1 v_3 w_3 + v_1 w_1 v_2 w_2). \end{aligned}$$
> 2. Il prodotto $(v_1^2 + v_2^2 + v_3^2)(w_1^2 + w_2^2 + w_3^2)$ contiene **tutti i nove** pezzi $v_i^2 w_j^2$.
> 3. Il quadrato $(v_1 w_1 + v_2 w_2 + v_3 w_3)^2$ contiene i tre pezzi con indici uguali, $v_1^2 w_1^2 + v_2^2 w_2^2 + v_3^2 w_3^2$, più gli stessi tre doppi prodotti del punto 1, con il segno più.
> 4. Togliendo il terzo dal secondo restano i sei pezzi $v_i^2 w_j^2$ con indici diversi, meno i tre doppi prodotti: è esattamente l'espressione del punto 1.
> 5. Quindi $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 - \langle v, w \rangle^2$, che è l'enunciato.

### Dall'identità all'area

Prendi ora due vettori **indipendenti**. Stanno in un piano, e dentro quel piano c'è il parallelogramma con lati $v$ e $w$: la Figura 8 delle dispense lo disegna con il prodotto vettoriale che esce dal piano. L'area si calcola come base per altezza. Le dispense lo scrivono così.

> [!PROP] 23.2
> L'area di $P$ è $\operatorname{Area}(P) = \lVert v \rVert \lVert w \rVert \sin\vartheta$.

**Come si legge.** $P$ è il parallelogramma e $\vartheta$ l'angolo fra $v$ e $w$. Prendi $v$ come base, lunga $\lVert v \rVert$. L'altezza è la distanza della punta di $w$ dalla retta di $v$. Nel triangolo rettangolo con ipotenusa $w$ e angolo $\vartheta$, il cateto opposto all'angolo misura $\lVert w \rVert \sin\vartheta$: è la definizione di seno delle superiori, e il libro di Martelli usa lo stesso argomento. Base per altezza dà la formula. Nel disegno sopra: $3 \cdot \sqrt 5 \cdot \frac{2}{\sqrt 5} = 6$.

Mettendo insieme le due cose, le dispense ricavano il risultato della sezione.

> [!COROLLARIO] 23.3
> Il modulo del prodotto vettoriale è
> $$\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta = \operatorname{Area}(P),$$
> dove $\vartheta$ è l'angolo formato da $v$ e $w$ e $P$ è il parallelogramma con lati $v$ e $w$.

**Come si legge.** La lunghezza del prodotto vettoriale è l'area del parallelogramma. «Modulo» qui vuol dire lunghezza.

Il perché, un passaggio alla volta:

1. dalla definizione di angolo (lezione L20), $\langle v, w \rangle = \lVert v \rVert \lVert w \rVert \cos\vartheta$;
2. lo metto nell'identità di Lagrange: $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 (1 - \cos^2\vartheta)$;
3. siccome $\sin^2\vartheta + \cos^2\vartheta = 1$, viene $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 \sin^2\vartheta$;
4. prendo la radice. Serve che il seno non sia negativo, e infatti l'angolo fra due vettori sta sempre tra 0 e $\pi$, dove il seno non è mai negativo.

> [!ESEMPIO] L'area con i due metodi
> Con $v = (1, 2, 2)$ e $w = (0, 3, 4)$:
> - **con il prodotto vettoriale**: l'area è la lunghezza di $(2, -4, 3)$, cioè $\sqrt{29}$;
> - **con l'angolo**: $\cos\vartheta = \frac{14}{3 \cdot 5} = \frac{14}{15}$, quindi $\sin\vartheta = \sqrt{1 - \frac{196}{225}} = \frac{\sqrt{29}}{15}$, e l'area è $3 \cdot 5 \cdot \frac{\sqrt{29}}{15} = \sqrt{29}$.
>
> Stesso risultato; il primo metodo non richiede nessun angolo.

> [!ESEMPIO] L'area di un triangolo nello spazio
> Il triangolo con vertici $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$ è **metà** del parallelogramma con lati $\overrightarrow{AB}$ e $\overrightarrow{AC}$: la diagonale $BC$ lo taglia in due triangoli uguali.
> - $\overrightarrow{AB} = B - A = (-1, 2, 0)$ e $\overrightarrow{AC} = C - A = (-1, 0, 3)$;
> - righe affiancate $(-1, -1)$, $(2, 0)$, $(0, 3)$: il prodotto vettoriale è $(2 \cdot 3 - 0 \cdot 0,\ -((-1) \cdot 3 - (-1) \cdot 0),\ (-1) \cdot 0 - (-1) \cdot 2) = (6, 3, 2)$;
> - la sua lunghezza è $\sqrt{36 + 9 + 4} = \sqrt{49} = 7$.
>
> L'area del triangolo è $\frac 72$.

```widget spazio
titolo: Prodotto vettoriale e area del parallelogramma
modo: vettoriale
u: 1 2 2
v: 0 3 4
```

Trascina il disegno per girarlo: il parallelogramma giallo ha area $\sqrt{29}$, circa 5,385. Prova poi $v = (2, 4, 4)$, che è il doppio di $u$: il parallelogramma si schiaccia su un segmento e il prodotto vettoriale diventa nullo (Proposizione 22.16). Infine scambia $u$ e $v$: il prodotto vettoriale si capovolge, come vedrai nella prossima sezione.

::: prova Qual è l'area del parallelogramma con lati $(2, 0, 0)$ e $(0, 3, 0)$?
Il prodotto vettoriale è $(0, 0, 6)$, lungo 6. È un rettangolo 2 per 3.
:::

> [!RICORDA]
> - Lunghezza del prodotto vettoriale = area del parallelogramma; metà = area del triangolo.
> - Viene dall'identità di Lagrange.

## Il verso: la regola della mano destra (p. 117)

Se i due vettori sono dipendenti, il prodotto vettoriale è zero e non c'è altro da dire. Se sono indipendenti, sappiamo già due cose:

- la **direzione**: il prodotto vettoriale è perpendicolare al piano che contiene i due vettori;
- la **lunghezza**: è l'area del parallelogramma.

Restano **due** candidati, opposti: uno «sopra» il piano e uno «sotto». Per scegliere si usa la **regola della mano destra** (Figura 9 delle dispense). Con la mano **destra**, metti il **pollice** lungo il primo vettore e l'**indice** lungo il secondo: il **medio**, piegato ad angolo retto rispetto al palmo, indica il verso del prodotto. Nel primo esempio della sezione precedente $v$ puntava a destra, $w$ in alto a destra, e il prodotto $(0, 0, 6)$ esce dal foglio verso di te.

In formule la regola diventa un determinante. Le dispense lo scrivono così.

> [!PROP] 23.4
> Se $v$ e $w$ sono indipendenti, la terna $v, w, v \times w$ è una **base positiva** di $\R^3$, cioè la matrice che ha come colonne $v, w, v \times w$ ha determinante positivo.

**Come si legge.**

- Una **base positiva** è una base i cui tre vettori, messi in colonna, danno una matrice con determinante positivo. La scrittura $(u_1 \mid u_2 \mid u_3)$ indica la matrice con quelle colonne.
- L'esempio tipico è la base canonica: la sua matrice è l'identità, con determinante 1, e infatti $e_1 \times e_2 = e_3$.
- La regola della mano destra è la traduzione «fisica» di questo determinante positivo.

> [!DIM] della Proposizione 23.4 (dal libro di Martelli)
> Le dispense non riportano la dimostrazione; quella del libro (Proposizione 9.1.7) è breve.
>
> 1. Scrivo $v \times w = (d_1, -d_2, d_3)$ come nella Definizione 22.14, dove $d_i$ è il minore di $\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}$ senza la riga $i$.
> 2. Sviluppo $\det(v \mid w \mid v \times w)$ con Laplace sulla **terza colonna**. Il cofattore di posto $(i, 3)$ è $(-1)^{i+3} d_i$, cioè $+d_1$, $-d_2$, $+d_3$.
> 3. Quindi $\det(v \mid w \mid v \times w) = d_1 \cdot d_1 + (-d_2) \cdot (-d_2) + d_3 \cdot d_3 = d_1^2 + d_2^2 + d_3^2 = \lVert v \times w \rVert^2$.
> 4. Se $v$ e $w$ sono indipendenti, il prodotto vettoriale non è zero (Proposizione 22.16), quindi la somma dei quadrati è **strettamente** positiva.

> [!ESEMPIO] Il determinante della terna
> Con $v = (1, 2, 2)$, $w = (0, 3, 4)$ e $v \times w = (2, -4, 3)$, sviluppando sulla terza colonna:
> $$\begin{aligned} \det\begin{pmatrix} 1 & 0 & 2 \\ 2 & 3 & -4 \\ 2 & 4 & 3 \end{pmatrix} &= 2 \cdot (8 - 6) - (-4) \cdot (4 - 0) + 3 \cdot (3 - 0) \\ &= 4 + 16 + 9 = 29, \end{aligned}$$
> positivo, e uguale alla lunghezza al quadrato del prodotto vettoriale, come dice la dimostrazione.

> [!IDEA] Una definizione con le figure
> A questo punto il prodotto vettoriale di due vettori indipendenti si descrive senza coordinate: è l'**unico** vettore perpendicolare a tutti e due, lungo quanto l'area del loro parallelogramma, e con il verso della mano destra. Direzione, lunghezza e verso: tre informazioni, un solo vettore.

::: prova Che verso ha $e_2 \times e_1$?
È l'opposto di $e_1 \times e_2 = e_3$: vale $-e_3$, punta verso il basso.
:::

> [!RICORDA]
> - Verso del prodotto vettoriale: pollice sul primo, indice sul secondo, il medio dà il verso.
> - In formule: i due vettori e il loro prodotto, in colonna, danno un determinante positivo.

## Le regole di calcolo (p. 117)

Dalla definizione seguono due regole, che le dispense elencano subito dopo la Proposizione 23.4.

**1. Scambiare i fattori cambia il segno.** Per ogni coppia di vettori:

$$v \times w = -\,w \times v.$$

Il motivo: scambiando i due vettori, in ogni componente i due prodotti si scambiano di posto. Per esempio la prima componente diventa $w_2 v_3 - w_3 v_2 = -(v_2 w_3 - v_3 w_2)$. Con i numeri di prima: $w \times v = (-2, 4, -3)$. Una conseguenza: un vettore per sé stesso dà l'opposto di sé stesso, quindi dà zero.

**2. Somme e multipli escono fuori.** Il prodotto vettoriale si comporta come il prodotto scalare, in ciascuno dei due posti:

$$(v + v') \times w = v \times w + v' \times w, \qquad (\lambda v) \times w = \lambda\,(v \times w),$$
$$v \times (w + w') = v \times w + v \times w', \qquad v \times (\lambda w) = \lambda\,(v \times w).$$

Il motivo: ogni componente è una somma di pezzi del tipo «una coordinata del primo per una coordinata del secondo». Un'espressione così rispetta somme e multipli in ciascun vettore, se l'altro resta fisso. Per esempio $(2, 4, 4) \times (0, 3, 4) = (16 - 12,\ 0 - 8,\ 6 - 0) = (4, -8, 6)$, che è il doppio di $(2, -4, 3)$.

**I prodotti dei vettori della base canonica**, da tenere a mente:

| $\times$ | $e_1$ | $e_2$ | $e_3$ |
|---|---|---|---|
| $e_1$ | $0$ | $e_3$ | $-e_2$ |
| $e_2$ | $-e_3$ | $0$ | $e_1$ |
| $e_3$ | $e_2$ | $-e_1$ | $0$ |

Si legge «riga per colonna»: $e_1 \times e_2 = e_3$. Girando in avanti nel ciclo $e_1, e_2, e_3, e_1$ il segno è più; all'indietro è meno.

**3. Le parentesi contano.** Qui c'è la differenza più grande con i prodotti di numeri o di matrici. L'esempio delle dispense:

$$(e_1 \times e_2) \times e_2 = e_3 \times e_2 = -\,e_2 \times e_3 = -e_1, \qquad e_1 \times (e_2 \times e_2) = e_1 \times 0 = 0.$$

Stessi tre vettori, parentesi diverse, risultati diversi.

> [!TRAPPOLA] Tre errori da non fare
> - Scrivere $u \times v \times w$ **senza parentesi**: non ha un significato unico.
> - Scambiare i fattori senza cambiare segno: $w \times v$ è l'**opposto** di $v \times w$.
> - Pensare che un prodotto vettoriale zero voglia dire un fattore zero: basta che siano **paralleli**, per esempio $(1, 2, 3) \times (2, 4, 6) = 0$.

::: prova Se $v \times w = (1, 0, 2)$, quanto fa $(3v) \times (2w)$?
I numeri escono fuori: $6\,(v \times w) = (6, 0, 12)$.
:::

> [!RICORDA]
> - Scambiare i fattori cambia il segno; un vettore per sé stesso dà zero.
> - Somme e multipli escono fuori; le parentesi invece contano.

## Una prova o una ricetta (p. 118)

Pensa al pavimento di una stanza, con l'origine in un angolo. È il piano $z = 0$, e lo puoi descrivere in due modi:

- con una **prova**: «un punto sta sul pavimento se la sua altezza $z$ è zero»;
- con una **ricetta**: «i punti del pavimento sono tutti quelli del tipo $(t, s, 0)$, con $t$ e $s$ numeri qualsiasi».

La prima è un'**equazione**, la seconda usa dei **parametri**. Le dispense danno un nome alle due scritture.

> [!DEF] Forma cartesiana e forma parametrica (p. 118)
> Un sottospazio vettoriale di $\R^n$ descritto come **luogo di zeri di un sistema di equazioni lineari omogenee** è detto in **forma cartesiana**. Un sottospazio vettoriale di $\R^n$ descritto come **sottospazio generato da alcuni vettori** è detto in **forma parametrica**. Qualsiasi sottospazio vettoriale di $\R^n$ può essere descritto in entrambi i modi.

**Come si legge.**

- **Forma cartesiana**: le equazioni, cioè la prova. Descrive il sottospazio dicendo chi ci sta dentro.
- **Forma parametrica**: i generatori, cioè la ricetta. Descrive il sottospazio dicendo come sono fatti i suoi punti, al variare dei **parametri**.
- Ogni sottospazio si può scrivere in tutti e due i modi.

L'esempio delle dispense è proprio il pavimento. In forma cartesiana ha l'equazione $z = 0$; in forma parametrica è generato da $e_1$ ed $e_2$:

$$W = \Span(e_1, e_2) = \left\{ t \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + s \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \ \middle|\ s, t \in \R \right\} = \left\{ \begin{pmatrix} t \\ s \\ 0 \end{pmatrix} \ \middle|\ s, t \in \R \right\}.$$

Spesso è più comoda la ricetta, ma dipende da che cosa devi fare:

| Che cosa devi fare | Forma più comoda | Perché |
|---|---|---|
| Decidere se $(2, 5, 0)$ sta nel pavimento | la prova | sostituisci: $z = 0$, sì |
| Scrivere tre punti del pavimento | la ricetta | scegli tre coppie $(t, s)$ |
| Trovare la dimensione | la ricetta | conti i generatori indipendenti |
| Intersecare con un altro sottospazio | dipende | lo vedi nella sezione sulle intersezioni |

> [!ESEMPIO] Due passaggi tra le forme, per sottospazi vettoriali
> **Dalla ricetta alla prova.** La retta $L = \Span((1, 2, 3))$ ha i punti $(x, y, z) = (t, 2t, 3t)$. Dalla prima coordinata $t = x$; sostituendo nelle altre, $y = 2x$ e $z = 3x$. Quindi
> $$L = \{2x - y = 0,\ 3x - z = 0\}.$$
> Controllo con il generatore: $2 \cdot 1 - 2 = 0$ e $3 \cdot 1 - 3 = 0$.
>
> **Dalla prova alla ricetta.** Il piano $\{x + y + z = 0\}$: ricavo $x = -y - z$ e lascio libere $y = s$, $z = t$. I punti sono $(-s - t, s, t) = s(-1, 1, 0) + t(-1, 0, 1)$, quindi il piano è $\Span((-1, 1, 0), (-1, 0, 1))$.

::: prova Scrivi la ricetta del piano $z = x$.
Lascio libere $x = s$ e $y = t$, poi $z = s$: i punti sono $(s, t, s) = s(1, 0, 1) + t(0, 1, 0)$.
:::

> [!RICORDA]
> - Forma cartesiana = prova (equazioni); forma parametrica = ricetta (punto e generatori).
> - Dalla prova alla ricetta: risolvi il sistema. Dalla ricetta alla prova: elimina i parametri.

## Rette e piani spostati: i sottospazi affini (pp. 118–119)

Prendi una retta del piano che **non passa per l'origine**. Per esempio la retta $y = x - 1$: il punto $(0, 0)$ non soddisfa l'equazione. Quindi non è un sottospazio vettoriale, che contiene sempre lo zero. Però è la retta $y = x$ **spostata** di un passo verso destra: ogni suo punto è $(1, 0)$ più un multiplo di $(1, 1)$. Tutte le rette e i piani che non passano per l'origine sono fatti così. Le dispense li chiamano con un nome già visto nella lezione L12.

> [!DEF] 12.5 · Sottospazio affine (richiamo dalla lezione L12)
> Sia $V$ uno spazio vettoriale. Un **sottospazio affine** di $V$ è un sottoinsieme del tipo
> $$S = \{x + v \mid v \in W\} =: x + W,$$
> dove $x$ è un punto fissato di $V$ e $W \subseteq V$ è un sottospazio vettoriale.

**Come si legge.** Un sottospazio affine è un sottospazio vettoriale $W$ **spostato** in modo da passare per il punto $x$. La scrittura $x + W$ si legge «ics più vu doppio».

Le dispense ricordano da dove vengono: le soluzioni di un sistema lineare sono **niente, oppure un sottospazio affine**. Se c'è almeno una soluzione $x$, tutte le soluzioni sono $x$ più le soluzioni del **sistema omogeneo associato**. È il sistema con le stesse equazioni e i termini noti uguali a zero, e le sue soluzioni formano un sottospazio vettoriale. È quello che hai fatto nella lezione L12: «una soluzione particolare più le soluzioni dell'omogeneo».

### Quando due scritture danno lo stesso insieme

Lo stesso sottospazio affine si può scrivere in molti modi, perché come punto di partenza va bene **qualsiasi** suo punto. Le dispense dicono quando due scritture coincidono.

> [!PROP] 23.5
> Gli spazi affini $x + W$ e $x' + W'$ coincidono se e solo se $W = W'$ e $x - x' \in W$.

**Come si legge.** Due scritture danno lo stesso insieme esattamente quando valgono due cose:

- **la stessa direzione**: lo stesso sottospazio vettoriale, anche se scritto con generatori diversi;
- **i punti di partenza sullo stesso insieme**: il vettore che va da un punto di partenza all'altro è una direzione ammessa.

> [!DIM] della Proposizione 23.5 (oltre le dispense)
> Le dispense non la dimostrano; ecco una dimostrazione breve.
>
> **Se le due condizioni valgono, gli insiemi coincidono.** Un punto di $x + W$ è $x + w$ con $w$ in $W$, e si riscrive $x + w = x' + \big((x - x') + w\big)$. Il vettore tra parentesi è somma di due vettori di $W$, quindi sta in $W = W'$: il punto sta in $x' + W'$. Scambiando i ruoli si ottiene il contrario.
>
> **Se gli insiemi coincidono, le due condizioni valgono.** Chiama $S$ l'insieme. Le **differenze** fra due punti di $S$ sono esattamente i vettori di $W$: se $p = x + w_1$ e $q = x + w_2$, allora $p - q = w_1 - w_2$ sta in $W$, e ogni $w$ di $W$ è la differenza $(x + w) - x$. Lo stesso ragionamento, partendo da $x'$, dice che le differenze sono esattamente i vettori di $W'$. Quindi $W = W'$. Infine $x$ sta in $S = x' + W'$, cioè $x - x'$ sta in $W' = W$.

Ecco l'esempio delle dispense.

> [!ESEMPIO] 23.6
> Se $W = \Span\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ in $\R^2$, le due rette affini
> $$r_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + W = \left\{ \begin{pmatrix} t + 1 \\ t \end{pmatrix} \ \middle|\ t \in \R \right\},$$
> $$r_2 = \begin{pmatrix} 0 \\ -1 \end{pmatrix} + W = \left\{ \begin{pmatrix} u \\ u - 1 \end{pmatrix} \ \middle|\ u \in \R \right\}$$
> sono in realtà la stessa retta, di equazione $y = x - 1$.

Controllo in tre modi:

1. **con la Proposizione 23.5**: la direzione è la stessa, e $(1, 0) - (0, -1) = (1, 1)$ sta in $W$;
2. **con l'equazione**: in $r_1$ il punto $(t + 1, t)$ ha $y = t = (t + 1) - 1 = x - 1$; in $r_2$ il punto $(u, u - 1)$ ha $y = u - 1 = x - 1$;
3. **con i parametri**: il punto di $r_1$ con parametro $t$ è quello di $r_2$ con parametro $u = t + 1$.

Invece la retta $y = x$, cioè $(0, 0) + W$, è **diversa**: $(1, 0) - (0, 0) = (1, 0)$ non è un multiplo di $(1, 1)$. È una retta **parallela** a $r_1$.

```grafico
titolo: La retta $y = x - 1$ è la retta $W$ spostata: si può partire da $(1, 0)$ oppure da $(0, -1)$
x: -2.5 3.5
y: -2.5 3
retta: 0 0 1 1 | grigio | tratteggio | $W$ | no
retta: 1 0 2 1 | accento | spesso | $r_1 = r_2$ | se
punto: 1 0 | blu | $(1, 0)$ | se
punto: 0 -1 | ambra | $(0, -1)$ | no
vettore: 1 0 2 1 | viola | $(1, 1)$ | no
```

### La giacitura e la dimensione

Il sottospazio vettoriale da cui si parte ha un nome. Le dispense lo scrivono così.

> [!DEF] 23.7
> Nella descrizione di uno spazio affine $S$ come $x + W$, lo spazio vettoriale $W$ è determinato da $S$ ed è detto la **giacitura** di $S$, indicata con $\operatorname{giac}(S)$. Il punto $x$ invece è un **qualsiasi** punto di $S$. La **dimensione** di $S$ è la dimensione della giacitura $W$.

**Come si legge.** La giacitura sono le **direzioni** in cui ci si può muovere restando dentro l'insieme: le differenze tra due suoi punti. Il punto di partenza si può cambiare, la giacitura no (Proposizione 23.5). Una retta spostata ha dimensione 1, un piano spostato dimensione 2.

Anche i sottospazi affini hanno le due forme.

- **Ricetta**, cioè forma parametrica:
$$S = x + \Span(v_1, \dots, v_k) = \{x + t_1 v_1 + \dots + t_k v_k \mid t_1, \dots, t_k \in \R\},$$
dove $v_1, \dots, v_k$ sono una **base** della giacitura. Allora la dimensione è $k$: un parametro per ogni vettore della base.
- **Prova**, cioè forma cartesiana: le soluzioni di un sistema $Ax = b$. Per il **teorema di Rouché–Capelli** (Teorema 12.6) l'insieme non è vuoto esattamente quando $A$ e la matrice completa hanno lo stesso rango. In quel caso la dimensione è il numero delle incognite meno il rango di $A$.

> [!ESEMPIO] Contare le dimensioni con Rouché–Capelli
> **Un sistema che dà una retta.** $S = \{x + y + z = 3,\ x - y = 1\}$ nello spazio. Le righe $(1, 1, 1)$ e $(1, -1, 0)$ non sono proporzionali, quindi tutte e due le matrici hanno rango 2 e la dimensione è $3 - 2 = 1$: una retta. Per scriverla: dalla seconda equazione $x = 1 + y$; nella prima $1 + y + y + z = 3$, cioè $z = 2 - 2y$. Con $y = t$:
> $$S = \{(1 + t,\ t,\ 2 - 2t)\} = (1, 0, 2) + \Span((1, 1, -2)).$$
>
> **Un sistema senza soluzioni.** $\{x + y + z = 1,\ x + y + z = 2\}$: togliendo le equazioni viene $0 = 1$. Qui $A$ ha rango 1 ma la matrice completa ha rango 2, e l'insieme è vuoto. Nel disegno: due piani **paralleli** diversi.

> [!NOTA] Collegamento con l'informatica: classificatori lineari (p. 119)
> Le dispense collegano questa lezione al *machine learning*. Un **iperpiano** dello spazio a $n$ dimensioni è un sottospazio affine di dimensione $n - 1$: una retta nel piano, un piano nello spazio. Si può scrivere come
> $${}^t w\, x + b = 0,$$
> con $w$ vettore non nullo e $b$ numero. L'iperpiano divide lo spazio in due **metà**: quella dove ${}^t w\, x + b$ è positivo e quella dove è negativo. Un semplice **classificatore lineare** sceglie la classe di un vettore di dati guardando il **segno** di ${}^t w\, x + b$. Il vettore $w$ è **perpendicolare** all'iperpiano di separazione. La stessa geometria sta alla base del percettrone e delle macchine a vettori di supporto nella loro forma lineare.

> [!ESEMPIO] Un classificatore nel piano
> Con $w = (1, 1)$ e $b = -3$ l'iperpiano è la retta $x + y - 3 = 0$. Classifichiamo tre punti calcolando $x + y - 3$:
> - $(1, 1)$: $1 + 1 - 3 = -1$, negativo: classe «negativa»;
> - $(3, 2)$: $3 + 2 - 3 = 2$, positivo: classe «positiva»;
> - $(1, 2)$: $1 + 2 - 3 = 0$, sta proprio sulla retta di separazione.

```grafico
titolo: La retta $x + y = 3$ separa i punti con $x + y - 3 < 0$ da quelli con $x + y - 3 > 0$; il vettore $w = (1, 1)$ le è ortogonale
x: -0.5 4.5
y: -0.5 4
retta: 3 0 0 3 | accento | $x + y = 3$ | ne
punto: 1 1 | rosa | $(1, 1)$ | so
punto: 3 2 | verde | $(3, 2)$ | ne
punto: 1 2 | grigio | $(1, 2)$ | so
vettore: 1.5 1.5 2.3 2.3 | viola | spesso | $w$ | e
```

::: prova La retta $(0, 1) + \Span((1, 1))$ è la stessa di $(2, 3) + \Span((1, 1))$?
Sì: stessa direzione, e $(2, 3) - (0, 1) = (2, 2)$ è un multiplo di $(1, 1)$.
:::

> [!RICORDA]
> - Sottospazio affine = sottospazio vettoriale spostato, $x + W$. La giacitura $W$ sono le direzioni; il punto $x$ si può cambiare.
> - Due scritture coincidono esattamente con la stessa giacitura e i punti di partenza che differiscono per una direzione ammessa.

## Rette e piani nello spazio (pp. 119–120)

Nello spazio i sottospazi affini sono di quattro tipi. Per Rouché–Capelli, il numero di equazioni indipendenti che servono è 3 meno la dimensione.

| Dimensione | Che cos'è | Ricetta | Prova |
|---|---|---|---|
| 0 | un punto | $P_0$ | 3 equazioni indipendenti |
| 1 | una retta | $P_0 + t v$ | 2 equazioni indipendenti |
| 2 | un piano | $P_0 + t v_1 + s v_2$ | 1 equazione |
| 3 | tutto lo spazio | $P_0 + t e_1 + s e_2 + u e_3$ | nessuna equazione |

- Un **piano** si descrive con **un'equazione** $ax + by + cz = d$, con $(a, b, c)$ non nullo, oppure con un punto e due vettori indipendenti che generano la giacitura.
- Una **retta** si descrive con **due** equazioni di quel tipo, oppure, più comodamente, con la ricetta $P_0 + t v$, con $v$ non nullo: il **vettore direzione**.

> [!TRAPPOLA] Una sola equazione non basta per una retta nello spazio
> Nel piano la retta $x + 2y = 3$ ha un'equazione sola. Nello spazio la stessa equazione $x + 2y = 3$ descrive un **piano**, perché la $z$ è libera: per una retta nello spazio servono **due** equazioni indipendenti.

> [!IDEA] Il vettore dei numeri davanti è perpendicolare al piano
> Prendi due punti $P$ e $Q$ del piano $\{ax + by + cz = d\}$ e chiama $n = (a, b, c)$. Allora $\langle n, P \rangle = d$ e $\langle n, Q \rangle = d$, quindi
> $$\langle n, Q - P \rangle = d - d = 0.$$
> Ogni direzione del piano è perpendicolare a $n$: per questo $n$ si chiama **vettore normale** del piano. La giacitura è il piano $\{ax + by + cz = 0\}$, fatto dei vettori perpendicolari a $n$. Questo fatto tornerà di continuo nella lezione L24, con angoli e distanze.

### Dalla prova alla ricetta

Si risolve il sistema, per esempio con Gauss (lezione L11): le variabili libere diventano i parametri.

> [!ESEMPIO] Un piano e una retta, dalla prova alla ricetta
> **Il piano $x + 2y - z = 8$.** Ricavo $z = x + 2y - 8$ e lascio libere $x = s$, $y = t$:
> $$(s,\ t,\ s + 2t - 8) = (0, 0, -8) + s(1, 0, 1) + t(0, 1, 2).$$
> Controllo: $(0, 0, -8)$ soddisfa $0 + 0 - (-8) = 8$; i due vettori soddisfano l'equazione con zero a destra: $1 + 0 - 1 = 0$ e $0 + 2 - 2 = 0$.
>
> **La retta $\{x + y + z = 3,\ x - y = 1\}$** l'abbiamo già risolta sopra: $(1, 0, 2) + \Span((1, 1, -2))$.

### Dalla ricetta alla prova: il trucco del prodotto vettoriale

A volte serve il contrario. Per i **piani dello spazio** c'è un metodo rapido. Prendi il piano $P_0 + t v_1 + u v_2$, con $v_1, v_2$ indipendenti:

1. calcola $v_1 \times v_2$: avrà tre numeri $a, b, c$;
2. il piano è $ax + by + cz = d$, per un certo numero $d$;
3. trovi $d$ imponendo che $P_0$ stia sul piano, cioè sostituendo le sue coordinate.

Perché funziona: $n = v_1 \times v_2$ è perpendicolare a $v_1$ e a $v_2$ (Proposizione 22.15). Per ogni punto $P = P_0 + t v_1 + u v_2$ del piano
$$\langle n, P \rangle = \langle n, P_0 \rangle + t \langle n, v_1 \rangle + u \langle n, v_2 \rangle = \langle n, P_0 \rangle,$$
quindi tutti i punti del piano soddisfano la stessa equazione, con $d = \langle n, P_0 \rangle$. E $n$ non è zero, perché $v_1$ e $v_2$ sono indipendenti (Proposizione 22.16).

Ecco l'esempio delle dispense.

> [!ESEMPIO] 23.8
> Prendiamo
> $$\pi = \left\{ \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} + t \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} + s \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} \right\}.$$
> Troviamo
> $$\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} \times \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}.$$
> Quindi $\pi = \{x + 2y - z = d\}$ per qualche $d \in \R$, che determiniamo imponendo che il punto $(1, 2, -3)$ stia in $\pi$:
> $$1 + 4 + 3 = d,$$
> e quindi $d = 8$. Abbiamo trovato un'equazione cartesiana per il piano: $\pi = \{x + 2y - z = 8\}$.

I conti del prodotto vettoriale, riga per riga, con le righe affiancate $(1, 2)$, $(0, -1)$, $(1, 0)$:

- prima componente, copro la prima riga: $0 \cdot 0 - (-1) \cdot 1 = 1$;
- seconda, copro la seconda riga: $1 \cdot 0 - 2 \cdot 1 = -2$, e cambio segno: $2$;
- terza, copro la terza riga: $1 \cdot (-1) - 2 \cdot 0 = -1$.

Controllo finale con un altro punto del piano, per esempio con $t = s = 1$: $P = (1 + 1 + 2,\ 2 + 0 - 1,\ -3 + 1 + 0) = (4, 1, -2)$, e $4 + 2 \cdot 1 - (-2) = 8$.

Nota una cosa: nell'esempio precedente, con la stessa equazione, avevamo trovato un'**altra** ricetta, $(0, 0, -8) + s(1, 0, 1) + t(0, 1, 2)$. Nessuna contraddizione, per la Proposizione 23.5. Le giaciture coincidono, perché $(2, -1, 0) = 2\,(1, 0, 1) - (0, 1, 2)$. E la differenza dei punti di partenza, $(1, 2, -3) - (0, 0, -8) = (1, 2, 5) = (1, 0, 1) + 2\,(0, 1, 2)$, sta nella giacitura.

```widget spazio
titolo: Il piano dell'Esempio 23.8 con il suo vettore normale
modo: piano
piano: 1 2 -1 = 8
punto: 4 1 -2
```

Il piano viola è $x + 2y - z = 8$ e la freccia $n$ è il vettore normale $(1, 2, -1)$. Il punto $P = (4, 1, -2)$ sta sul piano: lo strumento dice che la sua distanza dal piano è 0. Prova a cambiare $d$, per esempio con $x + 2y - z = 0$: il piano si sposta **parallelo a sé stesso**, perché la giacitura non cambia. La distanza di un punto da un piano la studierai nella lezione L24.

> [!OLTRE] Rette dalla ricetta alla prova, e il piano per tre punti
> **Una retta.** Per $r = (1, 2, 3) + t(2, 1, -1)$ si **elimina il parametro**: $x = 1 + 2t$, $y = 2 + t$, $z = 3 - t$. Dalla seconda $t = y - 2$. Sostituendo: $x = 1 + 2(y - 2)$, cioè $x - 2y = -3$, e $z = 3 - (y - 2)$, cioè $y + z = 5$. Quindi $r = \{x - 2y = -3,\ y + z = 5\}$. Controllo con $t = 1$, punto $(3, 3, 2)$: $3 - 6 = -3$ e $3 + 2 = 5$.
>
> **Un piano per tre punti non allineati** $P_0, P_1, P_2$: è $P_0 + t\,\overrightarrow{P_0P_1} + s\,\overrightarrow{P_0P_2}$, e poi si usa il prodotto vettoriale come sopra (Martelli, Proposizione 9.2.12). Con $A, B, C$ dell'esempio del triangolo: il prodotto vettoriale è $(6, 3, 2)$ e $d = 6 \cdot 1 = 6$, quindi il piano è $6x + 3y + 2z = 6$.

::: prova Qual è l'equazione del piano $(1, 1, 1) + s(1, 0, 0) + t(0, 1, 0)$?
$(1, 0, 0) \times (0, 1, 0) = (0, 0, 1)$, quindi l'equazione è $z = d$; con il punto $(1, 1, 1)$, $d = 1$. Il piano è $z = 1$.
:::

> [!RICORDA]
> - Nello spazio: un piano ha una equazione, una retta due.
> - Il vettore dei numeri davanti alle incognite è perpendicolare al piano.
> - Dalla ricetta di un piano alla prova: prodotto vettoriale dei due vettori, poi $d$ con il punto.

## Dove si incontrano: le intersezioni (pp. 120–121)

Due sottospazi **vettoriali** si incontrano sempre, almeno nell'origine. Due sottospazi **affini** no: i piani $x + y + z = 1$ e $x + y + z = 2$ non hanno punti in comune, perché nessun punto può avere $x + y + z$ uguale a 1 e a 2 nello stesso momento. Le dispense danno un nome a quelli che si incontrano.

> [!DEF] Sottospazi incidenti (p. 120)
> Due sottospazi affini $S, S' \subseteq \R^n$ sono **incidenti** se $S \cap S' \neq \emptyset$.

**Come si legge.** Incidenti vuol dire che hanno almeno un punto in comune. $S \cap S'$ si legge «esse intersecato esse primo».

Se si incontrano, prendi un punto $x$ comune e scrivi tutti e due a partire da lì: $S = x + W$ e $S' = x + W'$, come permette la Definizione 23.7. Un punto $y$ sta in tutti e due esattamente quando $y - x$ sta sia in $W$ sia in $W'$. Quindi

$$S \cap S' = x + (W \cap W').$$

In particolare **l'intersezione, se non è vuota, è sempre un sottospazio affine**, con giacitura $W \cap W'$.

### Tre casi, tre conti

Il conto dipende da come sono scritti i due insiemi. L'Esempio 23.9 delle dispense mostra i tre casi; li svolgiamo fino in fondo.

> [!ESEMPIO] 23.9 · Primo caso: tutte e due in forma cartesiana
> Se $S$ e $S'$ sono descritti in forma cartesiana, la loro intersezione $S \cap S'$ è descritta in forma cartesiana **unendo le equazioni**. Per esempio, se $S = \{x + y = 1\}$ e $S' = \{x - y + z = 3\}$ sono due piani in $\R^3$, la loro intersezione è l'insieme delle soluzioni di
> $$\begin{cases} x + y = 1 \\ x - y + z = 3. \end{cases}$$

Due prove: un punto sta in tutti e due se le supera entrambe. Le dispense si fermano al sistema; risolviamolo. Dalla prima $x = 1 - y$. Sostituisco nella seconda: $1 - y - y + z = 3$, cioè $z = 2 + 2y$. Con $y = t$:

$$S \cap S' = \{(1 - t,\ t,\ 2 + 2t)\} = (1, 0, 2) + \Span((-1, 1, 2)).$$

È una **retta**. Controllo: $(1, 0, 2)$ soddisfa $1 + 0 = 1$ e $1 - 0 + 2 = 3$. La direzione $(-1, 1, 2)$ soddisfa le equazioni con zero a destra: $-1 + 1 = 0$ e $-1 - 1 + 2 = 0$.

> [!ESEMPIO] 23.9 · Secondo caso: una cartesiana e una parametrica
> Se $S$ è descritto in forma cartesiana e $S'$ in forma parametrica, basta **sostituire il punto generico** di $S'$ nelle equazioni di $S$. Si trovano i parametri che le soddisfano, e da loro $S \cap S'$. Per esempio, se $S = \{x + y - z = 2\}$ è un piano in $\R^3$ e
> $$S' = \left\{ \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} + t \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} \right\} = \left\{ \begin{pmatrix} 1 + t \\ -1 + 2t \\ 1 - 3t \end{pmatrix} \right\}$$
> è una retta, si sostituisce $x = 1 + t$, $y = -1 + 2t$, $z = 1 - 3t$ nell'equazione di $S$:
> $$(1 + t) + (-1 + 2t) - (1 - 3t) = 2,$$
> cioè $-1 + 6t = 2$ e $t = \tfrac 12$. L'intersezione è il punto
> $$S \cap S' = \left\{ \begin{pmatrix} 3/2 \\ 0 \\ -1/2 \end{pmatrix} \right\}.$$

Una ricetta e una prova: si mettono i punti della ricetta dentro la prova, e si guarda quali la superano. Il punto viene da $t = \frac 12$: $\left(1 + \frac 12,\ -1 + 1,\ 1 - \frac 32\right) = \left(\frac 32, 0, -\frac 12\right)$. Controllo nel piano: $\frac 32 + 0 + \frac 12 = 2$. Attenzione al segno: $-(1 - 3t) = -1 + 3t$.

> [!ESEMPIO] 23.9 · Terzo caso: tutte e due in forma parametrica
> Se $S$ e $S'$ sono entrambi in forma parametrica, si **eguaglia il punto generico** di $S$ con quello di $S'$ e si trova quali parametri risolvono il sistema. Le dispense avvertono che può essere più laborioso.

Due ricette: si cerca un punto che esca da tutte e due. Un esempio nostro: $r = (1, 0, 1) + t(1, 1, 0)$ e $r' = (0, 3, -1) + s(1, -1, 1)$. Uguagliando le coordinate:

$$\begin{cases} 1 + t = s \\ t = 3 - s \\ 1 = -1 + s. \end{cases}$$

Dalla terza $s = 2$; dalla prima $t = s - 1 = 1$; la seconda va **controllata**: $t = 1$ e $3 - s = 1$, torna. Le rette si incontrano nel punto $(2, 1, 1)$, che si ottiene sia con $t = 1$ sulla prima sia con $s = 2$ sulla seconda.

> [!METODO] Come si interseca
> 1. **Due prove**: metti tutte le equazioni in un unico sistema e risolvilo con Gauss; la soluzione, scritta come ricetta, è l'intersezione.
> 2. **Una prova e una ricetta**: metti il punto generico della ricetta dentro le equazioni; trovi i parametri e li rimetti nel punto generico.
> 3. **Due ricette**: uguaglia i punti generici, con **nomi diversi** per i parametri ($t$ e $s$, mai $t$ e $t$). Risolvi e **controlla tutte le equazioni**: se una non torna, l'intersezione è vuota.
> 4. In ogni caso, alla fine **sostituisci** il punto trovato nelle due descrizioni: è il controllo più economico che esista.

Con la calcolatrice qui sotto puoi rifare il primo caso: la matrice completa del sistema ha righe $(1, 1, 0 \mid 1)$ e $(1, -1, 1 \mid 3)$. Lo strumento riduce con Gauss e scrive le soluzioni con un parametro.

```widget gauss
titolo: L'intersezione dei due piani dell'Esempio 23.9
matrice: 1 1 0 1; 1 -1 1 3
modo: sistema
```

Lo strumento sceglie come parametro la terza incognita e trova $(2, -1, 0) + t\left(-\frac 12, \frac 12, 1\right)$. Sembra un risultato diverso dal nostro, ma è la **stessa retta**, per la Proposizione 23.5: la direzione è metà di $(-1, 1, 2)$, e $(2, -1, 0) - (1, 0, 2) = (1, -1, -2)$ sta nella giacitura.

### Quando si incontrano di sicuro

L'ultima proposizione della lezione dà una condizione sulle giaciture che garantisce l'incontro. Le dispense la scrivono così.

> [!PROP] 23.10
> Se $\operatorname{giac}(S) + \operatorname{giac}(S') = \R^n$, allora i sottospazi $S$ e $S'$ sono incidenti.

**Come si legge.**

- La somma delle giaciture (lezione L07) raccoglie tutti i vettori ottenuti muovendosi prima in una direzione del primo insieme e poi in una del secondo.
- L'ipotesi dice che, combinando le due mosse, si raggiunge **qualsiasi** punto dello spazio.
- La conclusione: i due insiemi si incontrano. Non dice **dove**: per quello bisogna fare i conti.

> [!DIM] della Proposizione 23.10 (dal libro di Martelli)
> 1. Scrivo $S = \{P + t_1 v_1 + \dots + t_k v_k\}$ e $S' = \{Q + u_1 w_1 + \dots + u_h w_h\}$, con i $v_i$ base della giacitura di $S$ e i $w_j$ base della giacitura di $S'$.
> 2. I due insiemi si incontrano esattamente quando il sistema $P + t_1 v_1 + \dots + t_k v_k = Q + u_1 w_1 + \dots + u_h w_h$, nelle incognite $t_i, u_j$, ha una soluzione.
> 3. Per ipotesi i vettori $v_1, \dots, v_k, w_1, \dots, w_h$ generano tutto lo spazio. Quindi $Q - P$ è una loro ricetta: $Q - P = a_1 v_1 + \dots + a_k v_k + b_1 w_1 + \dots + b_h w_h$.
> 4. Allora $t_i = a_i$ e $u_j = -b_j$ risolvono il sistema: $P + \sum a_i v_i = Q - \sum b_j w_j$.

> [!ESEMPIO] Due applicazioni nello spazio
> **Due piani con vettori normali non paralleli**, per esempio $x + y + z = 1$ e $x - y = 5$. Le giaciture sono due piani diversi per l'origine, quindi la loro somma è più grande di un piano: è tutto lo spazio. Per la Proposizione 23.10 i piani si incontrano, in una retta.
>
> **Una retta e un piano**, con la direzione della retta fuori dalla giacitura del piano: $r = \{t(1, 1, 1)\}$ e $\pi = \{x + y + z = 7\}$. Il vettore $(1, 1, 1)$ non sta nella giacitura $\{x + y + z = 0\}$, perché $1 + 1 + 1 = 3$. Allora la giacitura del piano e la direzione della retta insieme generano tutto lo spazio, e c'è un punto comune. Sostituendo: $3t = 7$, $t = \frac 73$, punto $\left(\frac 73, \frac 73, \frac 73\right)$.

> [!TRAPPOLA] Il contrario è falso
> Se la somma delle giaciture **non** è tutto lo spazio, la proposizione non dice niente: l'incontro può esserci oppure no. Due rette dello spazio hanno giaciture di dimensione 1, che sommano al massimo a un piano: la proposizione non si applica mai. Eppure l'asse $x$ e l'asse $y$ si incontrano nell'origine, mentre la retta $\{t(1, -1, 0)\}$ e il piano $x + y + z = 7$ no: sostituendo viene $0 = 7$.

> [!OLTRE] Le posizioni reciproche nello spazio
> Mettendo insieme giaciture e intersezioni si ottiene questa tabella (Martelli, §9.2.5 e §9.2.7). Due sottospazi affini sono **paralleli** se la giacitura di uno è contenuta in quella dell'altro; due rette che non sono né incidenti né parallele si chiamano **sghembe**.
>
> | Coppia | Giaciture | Intersezione |
> |---|---|---|
> | due piani | normali non proporzionali | una retta |
> | due piani | normali proporzionali | vuota (paralleli distinti) oppure lo stesso piano |
> | retta e piano | direzione fuori dalla giacitura del piano | un punto |
> | retta e piano | direzione dentro la giacitura | vuota (retta parallela) oppure tutta la retta |
> | due rette | direzioni proporzionali | vuota (parallele distinte) oppure la stessa retta |
> | due rette | direzioni non proporzionali | un punto (incidenti) oppure vuota (**sghembe**) |
>
> Le rette sghembe esistono solo dallo spazio in su: nel piano due rette non parallele si incontrano sempre, perché due giaciture diverse sommano a tutto il piano, e vale la Proposizione 23.10.

> [!OLTRE] Dove trovarlo nel libro
> Nel libro di Martelli: prodotto vettoriale e sue proprietà nel §9.1 (pp. 267–272: identità di Lagrange Prop. 9.1.4, area Prop. 9.1.5 e Cor. 9.1.6, base positiva Prop. 9.1.7, prodotto triplo Esercizio 9.1.8, volume del parallelepipedo Prop. 9.1.9); forma parametrica e cartesiana nel §9.2.1 (pp. 272–274, con l'Esempio 9.2.3 che è il nostro 23.8); intersezioni nel §9.2.3 (pp. 275–276, Esempio 9.2.6 e Proposizione 9.2.7); sottospazio generato da punti, parallelismo e posizioni reciproche nei §9.2.4, §9.2.5 e §9.2.7 (pp. 277–283).

::: prova Dove si incontrano la retta $t(1, 1, 1)$ e il piano $z = 1$?
Sostituisco il punto generico $(t, t, t)$: $t = 1$. Il punto è $(1, 1, 1)$.
:::

> [!RICORDA]
> - Due prove: unisci le equazioni. Prova e ricetta: metti la ricetta nella prova. Due ricette: uguaglia, con parametri di nomi diversi.
> - Se le giaciture sommano a tutto lo spazio, l'incontro c'è di sicuro; il contrario non vale.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $v \times w$ | «vu vettore vu doppio» | il prodotto vettoriale | $e_1 \times e_2 = e_3$ |
| $\lVert v \times w \rVert$ | «norma di vu vettore vu doppio» | l'area del parallelogramma con lati $v$ e $w$ | |
| $\sin\vartheta$ | «seno di theta» | il seno dell'angolo tra i due vettori | |
| $(u_1 \mid u_2 \mid u_3)$ | «matrice con colonne u uno, u due, u tre» | la matrice con quei vettori in colonna | |
| $x + W$ | «ics più vu doppio» | il sottospazio $W$ spostato per il punto $x$ | $(1, 0) + \Span((1, 1))$ |
| $\operatorname{giac}(S)$ | «giacitura di esse» | le direzioni del sottospazio affine | |
| $\overrightarrow{PQ}$ | «vettore pi qu» | $Q - P$, il vettore da $P$ a $Q$ | |
| $S \cap S'$ | «esse intersecato esse primo» | i punti comuni | |
| $n = (a, b, c)$ | «vettore normale» | i numeri davanti alle incognite, perpendicolare al piano | per $x + 2y - z = 8$, $n = (1, 2, -1)$ |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026.** Le intersezioni sono tra gli argomenti più frequenti in assoluto:

- **quiz sull'intersezione tra una retta e un piano**: appelli del 07/02/2025 (domanda 10) e del 03/07/2026 (domanda 8). Le risposte proposte sono sempre del tipo «un punto», «tutta la retta», «tutto il piano», «vuota»;
- **quiz sull'intersezione di due rette date con la ricetta**: appelli del 03/06/2025 e del 10/07/2025, domanda 10 in tutti e due;
- **problemi aperti**: scrivere la retta in cui si incontrano due piani come «punto più Span» (24/01/2024, 10/07/2024, 06/09/2024, 15/01/2026); dimostrare che una retta e un piano si incontrano (24/01/2024, 10/07/2024); trovare l'intersezione di tre piani (06/09/2024, 15/01/2026); piani o rette che dipendono da un parametro (03/06/2025, 02/09/2025).

### Una domanda vera, letta insieme

**Appello del 07/02/2025, domanda 10.** Il testo: «L'intersezione della retta $r = {}^t(2, -2, 0) + s\,{}^t(1, -2, 1)$ con il piano $\pi = \{2x - 2y + z = 1\}$ è: (a) tutto il piano; (b) $P = {}^t(-1, -1, 1)$; (c) $P = {}^t(1, 0, -1)$; (d) non hanno un'intersezione; (e) tutta la retta».

**In pratica chiede:** una ricetta e una prova. Quali punti della retta superano la prova del piano?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: il punto generico della retta.** $(2 + s,\ -2 - 2s,\ s)$.
>
> **Passo 2: dentro l'equazione del piano.**
> $$2(2 + s) - 2(-2 - 2s) + s = 4 + 2s + 4 + 4s + s = 8 + 7s.$$
>
> **Passo 3: il parametro.** $8 + 7s = 1$ dà $s = -1$.
>
> **Passo 4: il punto.** Con $s = -1$: $(2 - 1,\ -2 + 2,\ -1) = (1, 0, -1)$. È la risposta (c). Controllo: $2 \cdot 1 - 0 - 1 = 1$.
>
> **Il trucco da quiz.** Il prodotto scalare tra la direzione $(1, -2, 1)$ e la normale $(2, -2, 1)$ è $2 + 4 + 1 = 7$, non zero: la retta non è parallela al piano, quindi l'incontro è **un punto**. Questo esclude subito (a), (d) e (e). Poi basta sostituire (b) e (c) nell'equazione del piano: (b) dà $-2 + 2 + 1 = 1$, ma $(-1, -1, 1)$ non sta sulla retta, perché la terza coordinata direbbe $s = 1$ e la prima $s = -3$.

> [!METODO] La retta in cui si incontrano due piani, come «punto più Span»
> 1. Metti le due equazioni in un sistema e riducilo con Gauss, oppure ricava una variabile e sostituisci.
> 2. Scegli come parametro la variabile libera e scrivi il punto generico.
> 3. Separa la parte senza parametro, il punto, da quella con il parametro, la direzione.
> 4. Controllo veloce: la direzione deve essere proporzionale al prodotto vettoriale dei due vettori normali, che è perpendicolare a tutti e due e quindi sta in tutte e due le giaciture. Il punto deve soddisfare le due equazioni.

> [!METODO] Dimostrare che una retta e un piano si incontrano
> Due strade, tutte e due accettate:
> - **con la Proposizione 23.10**: se la direzione della retta non sta nella giacitura del piano, le giaciture sommano a tutto lo spazio e c'è un incontro. Per un piano con equazione: il prodotto scalare tra direzione e normale non è zero. Per un piano dato con due generatori: il determinante dei due generatori e della direzione non è zero;
> - **con il conto**: metti il punto generico della retta nell'equazione del piano e trova il parametro. Se esiste, si incontrano, e hai anche il punto.

**Errori da evitare.**

- Usare lo **stesso nome** per i parametri di due rette diverse: il sistema diventa sbagliato.
- Nell'intersezione di due rette, non controllare la **terza** equazione: due equazioni su tre possono tornare anche se le rette sono sghembe.
- Scambiare il **vettore normale** di un piano con un vettore **del** piano: $(a, b, c)$ è perpendicolare al piano, non ci sta dentro.
- Scrivere una retta dello spazio con una sola equazione.
- Il segno meno della seconda componente del prodotto vettoriale.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la formula di $v \times w$ con lo schema «copri la riga, il segno meno al centro»; lunghezza del prodotto vettoriale = area del parallelogramma, e metà per il triangolo; la tabella dei tipi di sottospazi dello spazio (quante equazioni, quanti parametri); il metodo $n = v_1 \times v_2$, $d = \langle n, P_0 \rangle$; i tre conti per le intersezioni; la Proposizione 23.10.

## Quiz

```quiz
D: Quanto vale il prodotto vettoriale $(1, 0, 1) \times (2, -1, 0)$?
+ $(1, 2, -1)$
- $(-1, -2, 1)$
- $(1, -2, -1)$
- $(2, 0, 0)$
- $(-1, 2, 1)$
= Righe affiancate $(1, 2)$, $(0, -1)$, $(1, 0)$. Prima componente $0 \cdot 0 - 1 \cdot (-1) = 1$; seconda $-(1 \cdot 0 - 1 \cdot 2) = 2$; terza $1 \cdot (-1) - 0 \cdot 2 = -1$. È il conto dell'Esempio 23.8. La risposta più insidiosa è $(1, -2, -1)$, che dimentica il segno meno al centro. $(-1, -2, 1)$ è il prodotto con i fattori scambiati; $(2, 0, 0)$ moltiplica le coordinate una per una.

D: Qual è l'area del parallelogramma con lati $v = (1, 1, 0)$ e $w = (0, 1, 1)$?
+ $\sqrt 3$
- $\frac{\sqrt 3}{2}$
- $3$
- $1$
- $\sqrt 2$
= Il prodotto vettoriale è $(1 \cdot 1 - 0 \cdot 1,\ -(1 \cdot 1 - 0 \cdot 0),\ 1 \cdot 1 - 1 \cdot 0) = (1, -1, 1)$, lungo $\sqrt 3$: per il Corollario 23.3 è l'area. La risposta più insidiosa è $\frac{\sqrt 3}{2}$, che è l'area del triangolo con quei due lati, non del parallelogramma. 3 è la lunghezza al quadrato, senza la radice.

D: Quale di queste affermazioni sul prodotto vettoriale in $\R^3$ è **falsa**?
+ $(u \times v) \times w = u \times (v \times w)$ per ogni $u, v, w$
- $v \times w = -\,w \times v$ per ogni $v, w$
- $v \times v = 0$ per ogni $v$
- $v \times w$ è ortogonale sia a $v$ sia a $w$
- $(2v) \times w = 2\,(v \times w)$ per ogni $v, w$
= Le parentesi contano: $(e_1 \times e_2) \times e_2 = e_3 \times e_2 = -e_1$, mentre $e_1 \times (e_2 \times e_2) = e_1 \times 0 = 0$. La risposta vera più insidiosa da riconoscere è $v \times v = 0$: sembra strana, ma viene dal cambio di segno quando si scambiano i fattori. Le altre sono il cambio di segno stesso, la Proposizione 22.15 e la regola dei multipli.

D: I piani $\pi_1 = \{x + y + z = 3\}$ e $\pi_2 = \{x - y = 1\}$ si intersecano nella retta:
+ $(1, 0, 2) + \Span((1, 1, -2))$
- $(1, 0, 2) + \Span((1, 1, 1))$
- $(0, 0, 3) + \Span((1, 1, -2))$
- $(1, 0, 2) + \Span((1, -1, 0))$
- $(2, 1, 1) + \Span((1, 1, -2))$
= Dalla seconda equazione $x = 1 + y$; nella prima $1 + 2y + z = 3$, cioè $z = 2 - 2y$. Con $y = t$: $(1 + t, t, 2 - 2t)$. Controllo: $(1, 1, 1) \times (1, -1, 0) = (1, 1, -2)$. La risposta più insidiosa è la seconda: il punto è giusto, ma $(1, 1, 1)$ è il vettore normale del primo piano, che è perpendicolare al piano invece di starci dentro. $(0, 0, 3)$ non sta sul secondo piano; $(2, 1, 1)$ non sta sul primo. Simile agli appelli del 24/01/2024 e del 10/07/2024 (problema 12, punto 1).

D: Il piano $\pi = \{s\,e_1 + t\,(e_2 + e_3) \mid s, t \in \R\}$ in forma cartesiana è:
+ $\{y - z = 0\}$
- $\{x = 0\}$
- $\{y + z = 0\}$
- $\{x + y + z = 0\}$
- $\{x - y + z = 0\}$
= Il piano passa per l'origine ed è generato da $(1, 0, 0)$ e $(0, 1, 1)$. Il vettore normale è $(1, 0, 0) \times (0, 1, 1) = (0, -1, 1)$, quindi $-y + z = 0$, cioè $y = z$. Controllo: $e_1$ ed $e_2 + e_3$ hanno $y = z$. La risposta più insidiosa è $\{y + z = 0\}$, di chi sbaglia il segno al centro del prodotto vettoriale. Simile all'appello del 24/01/2024 (problema 12), dove il piano era dato proprio così.

D: Il piano $(0, 1, 1) + t(1, 0, 0) + s(0, 1, 2)$ ha un'equazione della forma $2y - z = d$. Quanto vale $d$?
N: 1
= Il vettore normale è $(1, 0, 0) \times (0, 1, 2) = (0, -2, 1)$, cioè l'equazione è $-2y + z = \text{costante}$, che equivale a $2y - z = d$. Sostituendo il punto $(0, 1, 1)$: $d = 2 \cdot 1 - 1 = 1$.

D: Quale di queste rette di $\R^2$ **coincide** con $r = (1, 2) + \Span((2, 1))$?
+ $(5, 4) + \Span((-4, -2))$
- $(2, 1) + \Span((2, 1))$
- $(1, 2) + \Span((1, 2))$
- $(0, 0) + \Span((2, 1))$
- $(3, 2) + \Span((2, 1))$
= Per la Proposizione 23.5 servono la stessa giacitura e la differenza dei punti nella giacitura. $(-4, -2)$ è un multiplo di $(2, 1)$, e $(5, 4) - (1, 2) = (4, 2) = 2\,(2, 1)$: stessa retta. La risposta più insidiosa è $(1, 2) + \Span((1, 2))$, che parte dallo stesso punto ma va in un'altra direzione. Le altre hanno la direzione giusta ma partono fuori dalla retta: sono parallele distinte.

D: L'intersezione della retta $r = (1, 1, 0) + t\,(1, 0, 2)$ con il piano $\pi = \{x + y + z = 5\}$ è:
+ il punto $(2, 1, 2)$
- il punto $(3, 1, 4)$
- il punto $(1, 1, 0)$
- tutta la retta $r$
- vuota
= Sostituisco $(1 + t, 1, 2t)$: $1 + t + 1 + 2t = 5$, cioè $3t = 3$ e $t = 1$. Il punto è $(2, 1, 2)$; controllo: $2 + 1 + 2 = 5$. La risposta più insidiosa è $(3, 1, 4)$: sta sulla retta, con $t = 2$, ma dà $8$, non 5. Il prodotto scalare tra direzione e normale è 3, non zero: l'incontro non può essere né vuoto né tutta la retta. Simile agli appelli del 07/02/2025 (domanda 10) e del 03/07/2026 (domanda 8).

D: L'intersezione delle rette $r = (1, 0, 1) + t\,(1, 1, 0)$ e $r' = (0, 3, -1) + s\,(1, -1, 1)$ è:
+ il punto $(2, 1, 1)$
- il punto $(1, 0, 1)$
- il punto $(0, 3, -1)$
- il punto $(3, 2, 1)$
- vuota: le rette sono sghembe
= Uguagliando: $1 + t = s$, $t = 3 - s$, $1 = -1 + s$. Dalla terza $s = 2$, dalla prima $t = 1$, e la seconda torna. Il punto è $(2, 1, 1)$. La risposta più insidiosa è $(3, 2, 1)$: sta sulla prima retta, con $t = 2$, ma non sulla seconda. Gli altri due punti sono i punti di partenza, ognuno su una retta sola. Simile agli appelli del 03/06/2025 e del 10/07/2025 (domanda 10).

D: Quale coppia di sottospazi affini di $\R^3$ ha **sicuramente** intersezione non vuota?
+ Due piani i cui vettori normali non sono proporzionali.
- Due rette con direzioni non proporzionali.
- I piani $\{x + y + z = 1\}$ e $\{x + y + z = 2\}$.
- Una retta e un piano, quando la direzione della retta sta nella giacitura del piano.
- Una retta e un punto.
= Due piani con normali non proporzionali hanno giaciture diverse, che sommano a tutto lo spazio: per la Proposizione 23.10 si incontrano. La risposta più insidiosa è «due rette con direzioni non proporzionali»: nel piano si incontrerebbero sempre, ma nello spazio possono essere sghembe. I due piani con lo stesso $x + y + z$ sono paralleli; una retta parallela a un piano può non toccarlo; un punto può stare fuori dalla retta. È l'argomento usato per «dimostrare che la retta e il piano sono incidenti» negli appelli del 24/01/2024 e del 10/07/2024.
```

## Esercizi

::: esercizio base Riscaldamento: un prodotto vettoriale
Calcola $(1, 1, 0) \times (0, 0, 1)$ e controlla che sia perpendicolare a tutti e due i fattori.
::: soluzione
Righe affiancate $(1, 0)$, $(1, 0)$, $(0, 1)$.
1. Prima componente: $1 \cdot 1 - 0 \cdot 0 = 1$.
2. Seconda: $1 \cdot 1 - 0 \cdot 0 = 1$, cambiato di segno: $-1$.
3. Terza: $1 \cdot 0 - 1 \cdot 0 = 0$.

Il risultato è $(1, -1, 0)$. Controllo: con $(1, 1, 0)$ dà $1 - 1 = 0$, con $(0, 0, 1)$ dà 0.
:::

::: esercizio base Riscaldamento: il punto sta sul piano?
Il piano è $2x - y + z = 5$. Ci stanno $(2, 0, 1)$ e $(1, 1, 1)$?
::: soluzione
1. $(2, 0, 1)$: $4 - 0 + 1 = 5$. Sì.
2. $(1, 1, 1)$: $2 - 1 + 1 = 2$, non 5. No.
:::

::: esercizio base Riscaldamento: tre punti di una retta
Scrivi tre punti della retta $(1, 0, 2) + t(1, 1, -2)$.
::: soluzione
1. Con $t = 0$: $(1, 0, 2)$.
2. Con $t = 1$: $(2, 1, 0)$.
3. Con $t = -1$: $(0, -1, 4)$.
:::

::: esercizio base Riscaldamento: quante equazioni?
Quante equazioni indipendenti servono, nello spazio, per un punto, una retta e un piano? E nel piano per una retta?
::: soluzione
Nello spazio servono 3 meno la dimensione.
1. Un punto: 3 equazioni.
2. Una retta: 2 equazioni.
3. Un piano: 1 equazione.

Nel piano servono 2 meno la dimensione: una retta ha 1 equazione.
:::

::: esercizio base Prodotto vettoriale e identità di Lagrange
Siano $v = (2, 1, -1)$ e $w = (1, 0, 3)$. (a) Calcola $v \times w$ e verifica che è ortogonale a $v$ e a $w$. (b) Verifica l'identità di Lagrange. (c) Quanto vale l'area del parallelogramma con lati $v$ e $w$? (d) Verifica che $\det(v \mid w \mid v \times w) > 0$.
::: soluzione
(a) Righe affiancate $(2, 1)$, $(1, 0)$, $(-1, 3)$:
- prima componente, copro la prima riga: $1 \cdot 3 - 0 \cdot (-1) = 3$;
- seconda, copro la seconda riga: $2 \cdot 3 - 1 \cdot (-1) = 7$, cambio segno: $-7$;
- terza, copro la terza riga: $2 \cdot 0 - 1 \cdot 1 = -1$.

Quindi $v \times w = (3, -7, -1)$. Controlli: con $v$ dà $6 - 7 + 1 = 0$, con $w$ dà $3 + 0 - 3 = 0$.

(b) La lunghezza al quadrato del prodotto vettoriale è $9 + 49 + 1 = 59$. Il prodotto scalare è $2 + 0 - 3 = -1$, con quadrato 1. Le lunghezze al quadrato di $v$ e $w$ sono $4 + 1 + 1 = 6$ e $1 + 0 + 9 = 10$. Infatti $59 + 1 = 60 = 6 \cdot 10$.

(c) L'area è $\sqrt{59}$.

(d) Per la dimostrazione della Proposizione 23.4 il determinante vale $59$, positivo. Controllo diretto, sviluppando sulla terza colonna di $\begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & -7 \\ -1 & 3 & -1 \end{pmatrix}$:
$$3 \cdot (1 \cdot 3 - 0 \cdot (-1)) - (-7) \cdot (2 \cdot 3 - 1 \cdot (-1)) + (-1) \cdot (2 \cdot 0 - 1 \cdot 1) = 9 + 49 + 1 = 59.$$
:::

::: esercizio base Il triangolo e il suo piano
Siano $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$. (a) Calcola l'area del triangolo $ABC$. (b) Scrivi l'equazione cartesiana del piano che contiene i tre punti (è il punto 1 dell'esercizio 6 del foglio 4 del tutorato 2025).
::: soluzione
(a) $\overrightarrow{AB} = (-1, 2, 0)$ e $\overrightarrow{AC} = (-1, 0, 3)$. Righe affiancate $(-1, -1)$, $(2, 0)$, $(0, 3)$:
$$\begin{aligned} \overrightarrow{AB} \times \overrightarrow{AC} &= \big(2 \cdot 3 - 0 \cdot 0,\ -((-1) \cdot 3 - (-1) \cdot 0),\ (-1) \cdot 0 - (-1) \cdot 2\big) \\ &= (6, 3, 2). \end{aligned}$$
È lungo $\sqrt{36 + 9 + 4} = 7$: il parallelogramma ha area 7 e il triangolo, che ne è la metà, ha area $\frac 72$.

(b) Il piano è $A + t\,\overrightarrow{AB} + s\,\overrightarrow{AC}$, con vettore normale $(6, 3, 2)$. Quindi $6x + 3y + 2z = d$, con $d = 6 \cdot 1 + 0 + 0 = 6$:
$$\pi = \{6x + 3y + 2z = 6\}.$$
Controllo: $B$ dà $3 \cdot 2 = 6$, $C$ dà $2 \cdot 3 = 6$. Dividendo per 6 si ottiene $x + \frac y2 + \frac z3 = 1$: i denominatori sono i punti in cui il piano taglia gli assi.
:::

::: esercizio base Da parametrica a cartesiana
Scrivi l'equazione cartesiana del piano $\pi = (2, 0, 1) + s\,(1, 2, 0) + t\,(0, 1, 1)$.
::: soluzione
Il vettore normale, con le righe affiancate $(1, 0)$, $(2, 1)$, $(0, 1)$:
$$(1, 2, 0) \times (0, 1, 1) = (2 \cdot 1 - 0 \cdot 1,\ -(1 \cdot 1 - 0 \cdot 0),\ 1 \cdot 1 - 2 \cdot 0) = (2, -1, 1).$$
Il piano è $2x - y + z = d$; con il punto $(2, 0, 1)$: $d = 4 - 0 + 1 = 5$. Risultato: $\pi = \{2x - y + z = 5\}$.

Controllo con $s = t = 1$: il punto $(3, 3, 2)$ dà $6 - 3 + 2 = 5$.
:::

::: esercizio base Da cartesiana a parametrica
Scrivi in forma parametrica la retta $r = \{x - y + z = 1,\ 2x + y - z = 2\}$ e controlla la direzione con il prodotto vettoriale dei vettori normali.
::: soluzione
Sommando le due equazioni: $3x = 3$, cioè $x = 1$. Nella prima: $1 - y + z = 1$, cioè $z = y$. Con $y = t$:
$$r = \{(1, t, t)\} = (1, 0, 0) + \Span((0, 1, 1)).$$
Controllo: $(1, -1, 1) \times (2, 1, -1)$, con le righe affiancate $(1, 2)$, $(-1, 1)$, $(1, -1)$, dà
$$\big((-1)(-1) - 1 \cdot 1,\ -(1 \cdot (-1) - 2 \cdot 1),\ 1 \cdot 1 - 2 \cdot (-1)\big) = (0, 3, 3),$$
proporzionale a $(0, 1, 1)$. Il punto $(1, 0, 0)$ soddisfa $1 = 1$ e $2 = 2$.
:::

::: esercizio medio Conti senza coordinate
Sai soltanto che $v \times w = (1, 2, 3)$. Calcola (a) $w \times v$; (b) $(2v + w) \times (v - 3w)$; (c) $\langle v \times w, v \rangle$; (d) $(v + w) \times (v + w)$.
::: soluzione
Servono solo le regole: scambio = cambio di segno, somme e multipli escono fuori, un vettore per sé stesso dà zero.

(a) $w \times v = -\,v \times w = (-1, -2, -3)$.

(b) Sviluppo come un prodotto di binomi, **mantenendo l'ordine** dei fattori:
$$(2v + w) \times (v - 3w) = 2\,v \times v - 6\,v \times w + w \times v - 3\,w \times w.$$
Ora $v \times v$ e $w \times w$ sono zero, e $w \times v = -\,v \times w$. Il risultato è $-7\,(v \times w) = (-7, -14, -21)$.

(c) 0: il prodotto vettoriale è perpendicolare a $v$ (Proposizione 22.15).

(d) 0: è il prodotto vettoriale di un vettore con sé stesso.
:::

::: esercizio medio È la stessa retta?
Siano $r_1 = (1, 0, 2) + \Span((1, -1, 1))$, $r_2 = (3, -2, 4) + \Span((-2, 2, -2))$ e $r_3 = (1, 1, 1) + \Span((1, -1, 1))$. Quali coincidono?
::: soluzione
Uso la Proposizione 23.5.

- $r_1$ e $r_2$: le giaciture coincidono, perché $(-2, 2, -2) = -2\,(1, -1, 1)$. La differenza dei punti è $(3, -2, 4) - (1, 0, 2) = (2, -2, 2) = 2\,(1, -1, 1)$, che sta nella giacitura. Quindi $r_1 = r_2$.
- $r_1$ e $r_3$: stessa giacitura, ma $(1, 1, 1) - (1, 0, 2) = (0, 1, -1)$ non è un multiplo di $(1, -1, 1)$: la prima coordinata obbligherebbe il multiplo a essere zero. Quindi sono rette **parallele distinte**.
:::

::: esercizio medio Tre coppie di rette
Per ogni coppia decidi se le rette si incontrano; in caso affermativo trova il punto. (a) $r = (1, 2, 0) + t\,(1, 0, 1)$ e $r' = (0, 1, 1) + s\,(2, 1, 0)$. (b) L'asse $x$, cioè $r = t\,(1, 0, 0)$, e $r' = (0, 1, 0) + s\,(0, 0, 1)$. (c) $r = t\,(1, 1, 1)$ e $r' = (1, 0, 0) + s\,(2, 2, 2)$.
::: soluzione
(a) Uguaglio: $1 + t = 2s$, $2 = 1 + s$, $t = 1$. Dalla seconda $s = 1$, dalla terza $t = 1$; la prima dà $2 = 2$, torna. Il punto comune è $(2, 2, 1)$.

(b) Uguaglio: $t = 0$, $0 = 1$, $0 = s$. La seconda equazione è impossibile: nessun punto comune. Le direzioni $(1, 0, 0)$ e $(0, 0, 1)$ non sono proporzionali, quindi le rette non sono parallele: sono **sghembe**.

(c) Le direzioni sono proporzionali: $(2, 2, 2) = 2\,(1, 1, 1)$. Il punto $(1, 0, 0)$ sta sulla prima retta? Servirebbe $t = 1$ dalla prima coordinata e $t = 0$ dalla seconda: no. Quindi le rette sono **parallele distinte** e non si incontrano.
:::

::: esercizio medio Due piani che non si incontrano
Calcola l'intersezione dei piani $\pi_1 = \{x + 2y - z = 1\}$ e $\pi_2 = \{-2x - 4y + 2z = 3\}$, prima con Rouché–Capelli e poi con un ragionamento geometrico. Che cosa cambia se al posto di $3$ c'è $-2$?
::: soluzione
Matrice completa e una mossa di Gauss:
$$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ -2 & -4 & 2 & 3 \end{array}\right) \xrightarrow{R_2 \to R_2 + 2R_1} \left(\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 0 & 0 & 5 \end{array}\right).$$
La seconda riga dice $0 = 5$: $A$ ha rango 1 ma la matrice completa ha rango 2, quindi l'intersezione è **vuota**.

Con le figure: i vettori normali $(1, 2, -1)$ e $(-2, -4, 2)$ sono proporzionali, quindi i piani hanno la stessa giacitura, cioè sono paralleli. Dividendo la seconda equazione per $-2$ viene $x + 2y - z = -\frac 32$, che non può valere insieme a $x + 2y - z = 1$.

Con $-2$ al posto di 3 la seconda equazione diventa $-2\,(x + 2y - z) = -2$, cioè $x + 2y - z = 1$: è **lo stesso piano**, e l'intersezione è tutto il primo piano.
:::

::: esercizio medio Un piano che dipende da un parametro
Per ogni $k \in \R$ sia $\pi_k = \{x + ky + z = 1\}$ e sia $r = \{t\,(1, 1, -1) \mid t \in \R\}$. Per quali $k$ la retta $r$ interseca $\pi_k$? In quel caso, in quale punto?
::: soluzione
Metto il punto generico $(t, t, -t)$ nell'equazione: $t + kt - t = 1$, cioè $kt = 1$.

- Se $k$ non è zero: $t = \frac 1k$ e il punto è $\left(\frac 1k, \frac 1k, -\frac 1k\right)$. Controllo: $\frac 1k + k \cdot \frac 1k - \frac 1k = 1$.
- Se $k = 0$: l'equazione diventa $0 = 1$, impossibile. La retta non tocca il piano $\{x + z = 1\}$.

Lettura con le giaciture: il prodotto scalare tra la direzione $(1, 1, -1)$ e la normale $(1, k, 1)$ vale $1 + k - 1 = k$. Se $k$ non è zero la direzione è fuori dalla giacitura, e la Proposizione 23.10 garantisce l'incontro. Se $k = 0$ la retta è parallela al piano; siccome l'origine, che sta sulla retta, non soddisfa $x + z = 1$, non lo tocca.
:::

::: esercizio esame Tre piani (appello del 15/01/2026, problema 12)
Siano $\pi_1 = \{x + y + z = 2\}$, $\pi_2 = \{x - y - 2z = 1\}$ e $\pi_3 = \{x + y - z = 0\}$ tre piani in $\R^3$. (1) Trovare il punto $P = \pi_1 \cap \pi_2 \cap \pi_3$. (2) Trovare un vettore $v \in \R^3$ tale che $\pi_1 \cap \pi_2 = P + \Span(v)$. (3) Trovare due vettori $w_1$ e $w_2$ ortogonali tali che $\pi_3 = \Span(w_1, w_2)$. (4) Trovare la proiezione ortogonale di $v$ sul piano $\pi_3$.
::: soluzione
(1) Tolgo la terza equazione dalla prima: $(x + y + z) - (x + y - z) = 2 - 0$, cioè $2z = 2$ e $z = 1$. Allora la prima dà $x + y = 1$ e la seconda $x - y = 1 + 2z = 3$. Sommando: $2x = 4$, $x = 2$, e quindi $y = -1$. $P = (2, -1, 1)$. Controllo: $2 - 1 + 1 = 2$, $2 + 1 - 2 = 1$, $2 - 1 - 1 = 0$.

(2) I primi due piani si incontrano in una retta, perché i vettori normali $(1, 1, 1)$ e $(1, -1, -2)$ non sono proporzionali, e la retta passa per $P$. La sua direzione è perpendicolare a tutti e due i vettori normali: prendo il loro prodotto vettoriale, con le righe affiancate $(1, 1)$, $(1, -1)$, $(1, -2)$:
$$v = \big(1 \cdot (-2) - 1 \cdot (-1),\ -(1 \cdot (-2) - 1 \cdot 1),\ 1 \cdot (-1) - 1 \cdot 1\big) = (-1, 3, -2).$$
Controllo: $-1 + 3 - 2 = 0$ e $-1 - 3 + 4 = 0$. Quindi la retta è $(2, -1, 1) + \Span((-1, 3, -2))$.

(3) Il terzo piano passa per l'origine, quindi è un sottospazio vettoriale. Scelgo un vettore che soddisfa $x + y - z = 0$, per esempio $w_1 = (1, -1, 0)$. Per il secondo serve un vettore del piano, cioè perpendicolare alla normale $n_3 = (1, 1, -1)$, e perpendicolare a $w_1$: il prodotto vettoriale $n_3 \times w_1$ fa proprio questo. Con le righe affiancate $(1, 1)$, $(1, -1)$, $(-1, 0)$:
$$\begin{aligned} n_3 \times w_1 &= \big(1 \cdot 0 - (-1)(-1),\ -(1 \cdot 0 - 1 \cdot (-1)),\ 1 \cdot (-1) - 1 \cdot 1\big) \\ &= (-1, -1, -2). \end{aligned}$$
Prendo $w_2 = (1, 1, 2)$. Controlli: $1 + 1 - 2 = 0$, quindi sta nel piano, e $\langle w_1, w_2 \rangle = 1 - 1 + 0 = 0$.

(4) Con la base ortogonale $w_1, w_2$ l'ombra è (lezione L21)
$$p_{\pi_3}(v) = \frac{\langle v, w_1 \rangle}{\langle w_1, w_1 \rangle} w_1 + \frac{\langle v, w_2 \rangle}{\langle w_2, w_2 \rangle} w_2.$$
$\langle v, w_1 \rangle = -1 - 3 + 0 = -4$ e $\langle w_1, w_1 \rangle = 2$; $\langle v, w_2 \rangle = -1 + 3 - 4 = -2$ e $\langle w_2, w_2 \rangle = 6$. Quindi
$$p_{\pi_3}(v) = -2\,(1, -1, 0) - \tfrac 13\,(1, 1, 2) = \left(-\tfrac 73,\ \tfrac 53,\ -\tfrac 23\right).$$
Controllo: $v - p_{\pi_3}(v) = \left(\frac 43, \frac 43, -\frac 43\right) = \frac 43\,(1, 1, -1)$ è proporzionale alla normale del terzo piano, come deve essere.
:::

::: esercizio esame Una retta, due piani e un punto d'incontro
Siano $\pi_1 = \{x + y - z = 2\}$ e $\pi_2 = \{x - y + 2z = 1\}$. (1) Scrivi la retta $r = \pi_1 \cap \pi_2$ nella forma $P + \Span(v)$. (2) Dimostra che $r$ e il piano $\pi_3 = \{x + y + z = 0\}$ sono incidenti. (3) Trova il punto di intersezione. (4) Scrivi l'equazione cartesiana del piano che contiene $r$ e l'origine.
::: soluzione
(1) Sommo le equazioni: $2x + z = 3$, quindi $z = 3 - 2x$. Dalla prima $y = 2 - x + z = 2 - x + 3 - 2x = 5 - 3x$. Con $x = t$:
$$r = \{(t,\ 5 - 3t,\ 3 - 2t)\} = (0, 5, 3) + \Span((1, -3, -2)).$$
Controlli: $(0, 5, 3)$ dà $0 + 5 - 3 = 2$ e $0 - 5 + 6 = 1$. Inoltre $(1, 1, -1) \times (1, -1, 2) = (1 \cdot 2 - (-1)(-1),\ -(1 \cdot 2 - (-1) \cdot 1),\ 1 \cdot (-1) - 1 \cdot 1) = (1, -3, -2)$.

(2) Il prodotto scalare tra la direzione $(1, -3, -2)$ e la normale $(1, 1, 1)$ del terzo piano vale $1 - 3 - 2 = -4$, non zero: la direzione non sta nella giacitura del piano. Quindi le due giaciture sommano a tutto lo spazio e, per la Proposizione 23.10, la retta e il piano si incontrano.

(3) Metto il punto generico nell'equazione: $t + (5 - 3t) + (3 - 2t) = 0$, cioè $8 - 4t = 0$ e $t = 2$. Il punto è $Q = (2, -1, -1)$. Controllo: $2 - 1 - 1 = 0$, e $Q$ sta anche sui primi due piani ($2 - 1 + 1 = 2$ e $2 + 1 - 2 = 1$).

(4) Il piano contiene l'origine $O$, il punto $P = (0, 5, 3)$ e la direzione $v = (1, -3, -2)$: è $O + s\,\overrightarrow{OP} + t\,v$. Il vettore normale, con le righe affiancate $(1, 0)$, $(-3, 5)$, $(-2, 3)$:
$$\begin{aligned} v \times \overrightarrow{OP} &= \big((-3) \cdot 3 - (-2) \cdot 5,\ -(1 \cdot 3 - (-2) \cdot 0),\ 1 \cdot 5 - (-3) \cdot 0\big) \\ &= (1, -3, 5). \end{aligned}$$
Passa per l'origine, quindi $d = 0$: il piano è $x - 3y + 5z = 0$. Controllo: $P$ dà $-15 + 15 = 0$ e $Q$ dà $2 + 3 - 5 = 0$.
:::

::: esercizio difficile Il prodotto triplo
(a) Dimostra che per ogni $u, v, w \in \R^3$ vale $\langle u \times v, w \rangle = \det(u \mid v \mid w)$ (Martelli, Esercizio 9.1.8). (b) Deduci che $u, v, w$ sono linearmente dipendenti se e solo se $\langle u \times v, w \rangle = 0$. (c) Stabilisci se i punti $A = (1, 0, 0)$, $B = (0, 1, 0)$, $C = (0, 0, 1)$, $D = (1, 1, -1)$ stanno su uno stesso piano.
::: soluzione
(a) Scrivo $u \times v = (d_1, -d_2, d_3)$, con $d_i$ il minore di $(u \mid v)$ senza la riga $i$. Allora
$$\langle u \times v, w \rangle = d_1 w_1 - d_2 w_2 + d_3 w_3.$$
È esattamente lo sviluppo di Laplace di $\det(u \mid v \mid w)$ sulla **terza colonna**: il cofattore di posto $(i, 3)$ è $(-1)^{i+3} d_i$, cioè $+d_1$, $-d_2$, $+d_3$. È lo stesso argomento della dimostrazione della Proposizione 22.15, dove al posto di $w$ c'era $v$.

(b) Tre vettori dello spazio sono dipendenti esattamente quando il determinante della matrice che li ha in colonna è zero (lezioni L09–L10). Per (a) quel determinante è $\langle u \times v, w \rangle$.

(c) I quattro punti stanno su un piano esattamente quando $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{AD}$ sono dipendenti. $\overrightarrow{AB} = (-1, 1, 0)$, $\overrightarrow{AC} = (-1, 0, 1)$, $\overrightarrow{AD} = (0, 1, -1)$. Sviluppo sulla prima riga:
$$\det\begin{pmatrix} -1 & -1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix} = -1 \cdot (0 \cdot (-1) - 1 \cdot 1) - (-1) \cdot (1 \cdot (-1) - 1 \cdot 0) + 0 = 1 - 1 = 0.$$
Stanno su un piano: infatti tutti e quattro soddisfano $x + y + z = 1$ (per $D$: $1 + 1 - 1 = 1$).
:::

## Domande di ripasso

::: domanda Che cosa dice l'identità di Lagrange?
La lunghezza al quadrato del prodotto vettoriale più il quadrato del prodotto scalare fa il prodotto delle lunghezze al quadrato (Proposizione 23.1). Si dimostra sviluppando i quadrati.
:::

::: domanda Perché la lunghezza di $v \times w$ è l'area del parallelogramma con lati $v$ e $w$?
Mettendo $\langle v, w \rangle = \lVert v \rVert \lVert w \rVert \cos\vartheta$ nell'identità di Lagrange viene $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 \sin^2\vartheta$. Il seno non è negativo, perché l'angolo sta tra 0 e $\pi$; quindi resta $\lVert v \rVert \lVert w \rVert \sin\vartheta$, che è base per altezza.
:::

::: domanda Come si sceglie il verso di $v \times w$? Che cos'è una base positiva?
Con la regola della mano destra: pollice sul primo vettore, indice sul secondo, il medio dà il verso. In formule: se i due vettori sono indipendenti, i due vettori e il loro prodotto, in colonna, danno un determinante positivo (Proposizione 23.4). Quel determinante vale proprio la lunghezza al quadrato del prodotto vettoriale.
:::

::: domanda Il prodotto vettoriale è commutativo? Associativo? Bilineare?
Scambiando i fattori cambia segno: $v \times w = -\,w \times v$. Le parentesi contano: $(e_1 \times e_2) \times e_2 = -e_1$, ma $e_1 \times (e_2 \times e_2) = 0$. Somme e multipli escono fuori in ciascuno dei due fattori.
:::

::: domanda Che differenza c'è tra forma cartesiana e forma parametrica?
La cartesiana è una prova: le equazioni dicono chi ci sta dentro, e servono a controllare se un punto ci sta. La parametrica è una ricetta: un punto e dei generatori, al variare dei parametri, e serve a produrre i punti e a leggere la dimensione.
:::

::: domanda Che cos'è un sottospazio affine? E la sua giacitura?
Un sottospazio vettoriale spostato: $x + W$, cioè tutti i punti $x + v$ con $v$ in $W$. $W$ è la giacitura, fatta delle differenze tra due punti dell'insieme; $x$ è un suo punto qualsiasi. La dimensione è quella di $W$.
:::

::: domanda Quando $x + W$ e $x' + W'$ sono lo stesso sottospazio affine?
Esattamente quando $W = W'$ e $x - x'$ sta in $W$ (Proposizione 23.5).
:::

::: domanda Quanto vale la dimensione delle soluzioni di $Ax = b$?
Se $A$ e la matrice completa hanno lo stesso rango, le soluzioni formano un sottospazio affine di dimensione «numero delle incognite meno rango di $A$». Se la matrice completa ha rango più grande, non ci sono soluzioni (Rouché–Capelli).
:::

::: domanda Come si passa dalla forma parametrica alla cartesiana di un piano dello spazio, e perché funziona?
Si calcola il prodotto vettoriale dei due vettori della ricetta, che dà i numeri $a, b, c$, e si trova $d$ mettendo il punto della ricetta in $ax + by + cz = d$. Funziona perché il prodotto vettoriale è perpendicolare ai due vettori: il suo prodotto scalare con ogni punto del piano è sempre lo stesso numero.
:::

::: domanda Quante equazioni servono per una retta dello spazio? E per un piano?
Una retta ha dimensione 1: servono $3 - 1 = 2$ equazioni indipendenti. Un piano ha dimensione 2: basta $3 - 2 = 1$ equazione.
:::

::: domanda Come si calcola un'intersezione nei tre casi?
Due prove: si uniscono le equazioni. Una prova e una ricetta: si mette il punto generico della ricetta nelle equazioni. Due ricette: si uguagliano i punti generici, con parametri di nomi diversi, e si risolve il sistema controllando tutte le equazioni.
:::

::: domanda Perché l'intersezione di due sottospazi affini, se non è vuota, è un sottospazio affine?
Se $x$ è un punto comune, si scrivono tutti e due a partire da $x$: $x + W$ e $x + W'$. Allora l'intersezione è $x + (W \cap W')$, e $W \cap W'$ è un sottospazio vettoriale.
:::

::: domanda Che cosa dice la Proposizione 23.10? Vale il contrario?
Se le due giaciture sommano a tutto lo spazio, i due insiemi si incontrano. Il contrario è falso: due rette dello spazio possono incontrarsi anche se le loro giaciture sommano solo a un piano, come l'asse $x$ e l'asse $y$.
:::

::: domanda Che cosa sono due rette sghembe?
Due rette dello spazio che non si incontrano e non sono parallele, cioè con direzioni non proporzionali. Nel piano non esistono.
:::

## Glossario

```glossario
Prodotto vettoriale | Il vettore $v \times w = (v_2 w_3 - v_3 w_2,\ v_3 w_1 - v_1 w_3,\ v_1 w_2 - v_2 w_1)$, definito solo nello spazio a tre dimensioni.
Identità di Lagrange | $\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2$ (Proposizione 23.1).
Parallelogramma con lati $v$ e $w$ | La figura con vertici $0$, $v$, $v + w$, $w$; la sua area è la lunghezza di $v \times w$.
Base positiva | Una base di tre vettori che, in colonna, danno un determinante positivo; per esempio $v, w, v \times w$ con $v, w$ indipendenti.
Regola della mano destra | Pollice sul primo vettore, indice sul secondo: il medio indica il verso del prodotto vettoriale.
Anticommutatività | Scambiare i fattori cambia il segno: $v \times w = -\,w \times v$; in particolare $v \times v = 0$.
Bilinearità | Somme e multipli escono fuori, in ciascuno dei due fattori.
Forma cartesiana | La descrizione di un sottospazio con equazioni: una prova che dice chi ci sta dentro.
Forma parametrica | La descrizione di un sottospazio con un punto e dei generatori: una ricetta che produce i punti.
Sottospazio affine | Un sottospazio vettoriale spostato, $x + W$: tutti i punti $x + v$ con $v$ in $W$.
Giacitura | Il sottospazio vettoriale $W$ di un sottospazio affine $x + W$: le direzioni in cui ci si muove restando dentro.
Dimensione di un sottospazio affine | La dimensione della giacitura; per le soluzioni di $Ax = b$, numero delle incognite meno rango di $A$.
Vettore normale | Per il piano $ax + by + cz = d$, il vettore $(a, b, c)$, perpendicolare a tutte le direzioni del piano.
Iperpiano | Un sottospazio affine di dimensione $n - 1$, del tipo ${}^t w\, x + b = 0$ con $w$ non nullo.
Classificatore lineare | Una regola che sceglie la classe di un vettore di dati secondo il segno di ${}^t w\, x + b$.
Sottospazi incidenti | Due sottospazi affini con almeno un punto in comune.
Sottospazi paralleli | Due sottospazi affini in cui la giacitura di uno sta dentro quella dell'altro (Martelli, §9.2.5).
Rette sghembe | Due rette dello spazio né incidenti né parallele.
```

## Checklist

```checklist
- So calcolare $v \times w$ con lo schema «copri la riga» senza sbagliare il segno al centro, e controllo il risultato con i prodotti scalari.
- So enunciare l'identità di Lagrange e usarla per trovare la lunghezza del prodotto vettoriale.
- So calcolare l'area di un parallelogramma e di un triangolo nello spazio con il prodotto vettoriale.
- So spiegare la regola della mano destra e che cosa vuol dire base positiva.
- So usare le regole di calcolo del prodotto vettoriale, e so che le parentesi contano.
- So passare dalla prova alla ricetta (Gauss) e dalla ricetta alla prova (prodotto vettoriale per i piani, eliminazione del parametro per le rette).
- So riconoscere quando due scritture $x + W$ e $x' + W'$ descrivono lo stesso insieme.
- So calcolare la dimensione di un sottospazio affine con Rouché–Capelli e so quante equazioni servono per rette e piani dello spazio.
- So intersecare due sottospazi nei tre casi e controllo sempre il risultato.
- So usare la Proposizione 23.10 per dimostrare che una retta e un piano si incontrano, e so che il contrario è falso.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 23 «Lo spazio euclideo II», pp. 116–121: sezioni 23.A (altre proprietà del prodotto vettoriale), 23.B (forma cartesiana e parametrica), 23.C (spazi affini) e 23.D (intersezioni), seguite in ordine con la numerazione originale (Proposizioni 23.1, 23.2, 23.4, 23.5, 23.10, Corollario 23.3, Definizione 23.7, Esempi 23.6, 23.8, 23.9). Il richiamo iniziale viene dalla lezione 22 (Definizione 22.14, Proposizioni 22.15 e 22.16, Corollario 22.17, pp. 114–115) e dalla lezione 12 (Definizione 12.5, Teorema 12.6). Questa lezione delle dispense non ha una sezione di esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §9.1 (prodotto vettoriale; da lì vengono le dimostrazioni delle Proposizioni 23.2 e 23.4 e l'Esercizio 9.1.8 sul prodotto triplo) e §9.2 (sottospazi affini, intersezioni con la dimostrazione della Proposizione 9.2.7 = 23.10, posizioni reciproche).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): testo riportato del 07/02/2025 (domanda 10) e del 15/01/2026 (problema 12), con soluzioni scritte per questi appunti; citati per tipo di domanda gli appelli del 24/01/2024, 10/07/2024, 06/09/2024, 03/06/2025, 10/07/2025, 02/09/2025 e 03/07/2026. Foglio 4 del tutorato 2025 (esercizio 6).
- Le parti **«Oltre le dispense»** (dimostrazione della Proposizione 23.5, rette dalla ricetta alla prova, piano per tre punti, posizioni reciproche, esempi ed esercizi aggiuntivi) servono a collegare la lezione al libro e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
