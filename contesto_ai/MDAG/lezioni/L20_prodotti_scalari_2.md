---
corso: MDAG
modulo: AG
lezione: L20
titolo: Prodotti scalari II
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L20
descrizione: >-
  Appunti della lezione L20 di Algebra lineare e Geometria (MDAG, parte 2): come cambia la matrice di un prodotto
  scalare cambiando base, forme quadratiche, norma, disuguaglianza di Cauchy–Schwarz e triangolare, distanze e angoli
  tra vettori, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Il prodotto scalare della lezione L19 diventa un righello e un goniometro. Prima come cambia la sua matrice
  cambiando base e che cosa sono le forme quadratiche. Poi la lunghezza di un vettore, che è il teorema di Pitagora,
  la distanza tra due punti e l'angolo tra due vettori, anche con prodotti scalari diversi.
materiale: dispense
scheda:
  Dispense: lezione 20 · pp. 100–104
  Libro: Martelli, §7.1.5, §7.2.2 e §8.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 20 «Prodotti scalari II»; B. Martelli, Geometria e algebra
  lineare, §7.1.5, §7.2.2, §8.1.1–8.1.4
appunti_html: appunti/MDAG/L20_prodotti_scalari_2.html
genera_html: true
---

## In breve

- Lo stesso prodotto scalare ha matrici diverse in basi diverse. Per passare da una all'altra si moltiplica a destra per la matrice di cambiamento di base. A sinistra si moltiplica per la sua **trasposta**, non per l'inversa come per le macchine lineari.
- Una **forma quadratica** è un polinomio in cui ogni pezzo ha grado 2, come $x_1^2 - 6x_1x_2$. Ognuna viene da una sola matrice simmetrica: sulla diagonale i numeri davanti ai quadrati, fuori dalla diagonale **metà** dei numeri davanti ai prodotti misti.
- Da qui in avanti il prodotto scalare è sempre **definito positivo**: un vettore non nullo per sé stesso dà sempre un numero positivo.
- La **norma** di un vettore è la sua lunghezza: la radice del prodotto scalare del vettore con sé stesso. Con il prodotto di tutti i giorni è il teorema di Pitagora: $(3, 4)$ è lungo 5.
- Due disuguaglianze fondamentali. **Cauchy–Schwarz**: il prodotto scalare non supera mai il prodotto delle lunghezze. **Triangolare**: un lato di un triangolo non supera la somma degli altri due.
- La **distanza** tra due punti è la lunghezza del vettore che va dall'uno all'altro.
- L'**angolo** tra due vettori si ricava dal coseno: prodotto scalare diviso per il prodotto delle lunghezze. Il segno del prodotto scalare dice subito se l'angolo è acuto, retto o ottuso.
- All'esame: norme e angoli con un prodotto scalare dato, la matrice di una forma quadratica, il cambiamento di base. Tutto senza calcolatrice: servono i coseni degli angoli notevoli.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## La stessa misura in un'altra base (p. 100)

Nella lezione L19 hai visto due matrici per lo **stesso** prodotto scalare, quello di tutti i giorni nel piano. Nella base canonica è la matrice identità; nella base $\mathcal B = \{(1, 0), (1, 1)\}$ è $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ (Esempio 19.14). Che legame c'è tra le due? Serve una formula, come quella della lezione L16 per le macchine lineari.

**Il ricordo della lezione L16.** Prendi due basi dello stesso spazio, una vecchia e una nuova. Il traduttore dalla base nuova alla base vecchia è la matrice di cambiamento di base

$$M = [\id]^{\mathcal B'}_{\mathcal B}.$$

Ogni sua colonna contiene le **coordinate di un vettore nuovo, scritte nella base vecchia**. Le dispense chiamano $M^i$ la colonna numero $i$.

**Il conto.** Chiama $S$ la matrice del prodotto scalare nella base vecchia e $S'$ quella nella base nuova. Ogni casella di $S'$ è il prodotto scalare tra due vettori nuovi. Per calcolarlo si usano le loro coordinate nella base vecchia (Corollario 19.16):

$$S'_{ij} = g(v_i', v_j') = {}^t(M^i)\,S\,M^j.$$

A destra c'è una riga della trasposta di $M$, per $S$, per una colonna di $M$. È proprio come si calcola una casella del prodotto ${}^tM\,S\,M$. Le dispense lo scrivono così.

> [!PROP] 20.1
> Vale
> $$S' = {}^tM\,S\,M.$$

**Come si legge.** La matrice nella base nuova si ottiene mettendo la matrice vecchia in mezzo, $M$ a destra e la sua trasposta a sinistra.

> [!ESEMPIO] 20.2 · Il prodotto euclideo nella base $\{(1, 0), (1, 1)\}$
> Per il prodotto scalare euclideo di $\R^2$, rispetto alla base $\mathcal B = \{(1, 0), (1, 1)\}$ abbiamo già trovato $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. Qui la base «vecchia» è quella canonica $\mathcal C$, dove la matrice è $I_2$. La matrice di cambiamento di base è
> $$M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$$
> (colonne: i vettori di $\mathcal B$ scritti nella base canonica), e infatti
> $$\begin{aligned} {}^tM\,I_2\,M &= \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \\ &= \begin{pmatrix} 1 \cdot 1 + 0 \cdot 0 & 1 \cdot 1 + 0 \cdot 1 \\ 1 \cdot 1 + 1 \cdot 0 & 1 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}. \end{aligned}$$

Nelle dispense, in questo esempio, la matrice nella nuova base si chiama $S$ e quella vecchia è $I_2$: i nomi cambiano, la regola no. **Vecchia** matrice in mezzo, $M$ a destra, la trasposta a sinistra.

> [!ESEMPIO] Una base in cui $g_S$ diventa l'identità
> Prendi $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ (Esempio 19.11) e la nuova base $\mathcal B' = \{(1, -1), (0, 1)\}$. La base vecchia è quella canonica, quindi $M = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$. Un prodotto alla volta:
> $$SM = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix},$$
> $${}^tM(SM) = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$
> È lo stesso risultato che nella lezione L19 (esercizio 5) si otteneva casella per casella: nella base nuova questo prodotto scalare ha la matrice identità.

> [!TRAPPOLA] Trasposta per i prodotti scalari, inversa per le macchine
> Con la stessa matrice di cambiamento di base $M$:
> - una **macchina lineare** cambia come $M^{-1}A\,M$ (lezione L16);
> - un **prodotto scalare** cambia come ${}^tM\,S\,M$.
>
> Le due formule danno risultati diversi. Con $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e la matrice identità: come macchina, l'identità resta l'identità; come prodotto scalare diventa $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. Le due formule coincidono sempre solo quando la trasposta di $M$ è anche la sua inversa: sono le matrici ortogonali della lezione L22.

> [!METODO] Due modi per trovare la matrice nella base nuova
> 1. **Casella per casella** (lezione L19): ogni casella è il prodotto scalare tra due vettori nuovi. Comodo con due vettori, o se il prodotto è dato con una formula.
> 2. **Con la formula** ${}^tM\,S\,M$: metti nelle colonne di $M$ le coordinate dei vettori nuovi nella base in cui conosci $S$. Calcola prima $SM$, poi la trasposta di $M$ per il risultato.
>
> In tutti e due i casi controlla alla fine che la matrice sia **simmetrica**: se non lo è, c'è un errore di conto.

> [!OLTRE] Il segno del determinante non cambia
> Per il teorema di Binet (Teorema 10.4), e siccome una matrice e la sua trasposta hanno lo stesso determinante:
> $$\det S' = \det({}^tM)\det S\det M = (\det M)^2\det S.$$
> Siccome $M$ è invertibile, $(\det M)^2$ è positivo: $\det S'$ ha **lo stesso segno** di $\det S$. In particolare una è degenere esattamente quando lo è l'altra, perché il prodotto scalare è lo stesso. È un buon controllo veloce all'esame. Martelli chiama **congruenti** due matrici simmetriche legate in questo modo (§7.2.3).

::: prova Il prodotto scalare di tutti i giorni nel piano, nella base $\{(1, 1), (0, 1)\}$: che matrice ha?
$M = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$, e ${}^tM\,I_2\,M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$. Controllo: $(1, 1) \cdot (1, 1) = 2$, $(1, 1) \cdot (0, 1) = 1$, $(0, 1) \cdot (0, 1) = 1$.
:::

> [!RICORDA]
> - Matrice di un prodotto scalare nella base nuova: ${}^tM\,S\,M$, con la trasposta.
> - Per le macchine lineari invece si usa l'inversa: $M^{-1}AM$.

## Le forme quadratiche (pp. 100–102)

Se in un prodotto scalare metti lo **stesso** vettore nei due posti, ottieni un polinomio di secondo grado nelle coordinate. Per esempio con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$:

$$\begin{aligned} g_S(x, x) &= 2x_1x_1 + x_1x_2 + x_2x_1 + x_2x_2 \\ &= 2x_1^2 + 2x_1x_2 + x_2^2. \end{aligned}$$

I due pezzi misti $x_1x_2$ e $x_2x_1$ ora sono **lo stesso** e si sommano. Questi polinomi hanno un nome.

**Polinomi omogenei.** Un polinomio è **omogeneo** se tutti i suoi pezzi hanno lo stesso grado. Gli esempi delle dispense:

| Polinomio | Pezzi e gradi | Omogeneo di grado |
|---|---|--:|
| $x_1 + x_2 - 3x_3$ | tre pezzi di grado 1 | 1 |
| $2x_1x_2 - x_3^2 + x_1x_3$ | tre pezzi di grado 2 | 2 |
| $x_1^3 - x_2x_3^2$ | due pezzi di grado 3 | 3 |

Invece $x_1^2 + x_2$ non è omogeneo, perché ha un pezzo di grado 2 e uno di grado 1. Nemmeno $x_1x_2 + 1$ lo è: la costante ha grado 0. Le dispense danno un nome a quelli di grado 2.

> [!DEF] 20.3 · Forma quadratica
> Una **forma quadratica** è un polinomio omogeneo di grado 2 nelle variabili $x_1, \dots, x_n$.

**Come si legge.** Una forma quadratica è una somma di pezzi come «numero per $x_i^2$» e «numero per $x_ix_j$», senza pezzi di grado 1 e senza costanti.

Ogni forma quadratica viene da una sola matrice simmetrica. Le dispense lo scrivono così.

> [!PROP] 20.4
> Ogni forma quadratica si scrive in modo unico come
> $$q(x) = g_S(x, x) = \sum_{i,j=1}^n x_iS_{ij}x_j$$
> per un'opportuna matrice simmetrica $S$.

**Come si legge.** Data la forma quadratica, c'è una e una sola matrice simmetrica che, messa nel prodotto scalare con lo stesso vettore due volte, la restituisce.

La dimostrazione delle dispense, con i passaggi spiegati.

1. Una forma quadratica si scrive $q(x) = \sum_{1 \le i \le j \le n} a_{ij}x_ix_j$. La condizione $i \le j$ serve a non contare due volte lo stesso pezzo: per esempio $x_1x_2$ e $x_2x_1$ sono lo stesso pezzo, e compare una volta sola.
2. Sulla diagonale metti $S_{ii} = a_{ii}$. Fuori dalla diagonale metti $S_{ij} = S_{ji} = \frac12 a_{ij}$: il numero del pezzo misto si **divide a metà** tra le due caselle simmetriche.
3. Nella somma con la matrice ogni pezzo misto compare due volte, una per ciascuna delle due caselle simmetriche. In tutto $\frac12 a_{ij} + \frac12 a_{ij} = a_{ij}$: il numero giusto. I quadrati compaiono una volta sola. Quindi la somma è proprio $q(x)$.
4. La matrice è l'unica possibile. Una matrice simmetrica che dà $q$ deve avere sulla diagonale i numeri dei quadrati. E in ogni coppia di caselle simmetriche deve avere due numeri uguali con somma $a_{ij}$, quindi tutti e due $\frac12 a_{ij}$.

> [!METODO] Dalla forma alla matrice e ritorno
> - **Dalla forma alla matrice.** Il numero davanti a un quadrato va sulla diagonale, nel posto di quella variabile. Il numero davanti a un pezzo misto si **divide per 2** e va nelle due caselle simmetriche di quella coppia di variabili. Le variabili che non compaiono danno righe e colonne di zeri.
> - **Dalla matrice alla forma.** I quadrati con il numero della diagonale; i pezzi misti con il **doppio** del numero fuori dalla diagonale.

> [!ESEMPIO] 20.5 · Andata e ritorno
> Le matrici simmetriche
> $$\begin{pmatrix} 1 & -3 \\ -3 & 0 \end{pmatrix}, \qquad \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \qquad \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$$
> definiscono, nell'ordine, le forme quadratiche
> $$x_1^2 - 6x_1x_2, \quad x_1^2 + x_2^2 - x_3^2, \quad 2x_1x_2 + 2x_2x_3 + 2x_3x_1.$$
> Viceversa, $q(x) = x_1^2 + 4x_1x_2 - x_2^2 + 4x_3^2$ è descritta dalla matrice
> $$S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & -1 & 0 \\ 0 & 0 & 4 \end{pmatrix}.$$

Controlla i passaggi.

- Nella prima matrice fuori dalla diagonale c'è $-3$, quindi il pezzo misto è $2 \cdot (-3)\,x_1x_2 = -6x_1x_2$. Il secondo numero della diagonale è 0, quindi $x_2^2$ non compare.
- Nella terza ogni numero fuori dalla diagonale vale 1 e dà un pezzo $2x_ix_j$.
- Nell'ultima il 4 davanti al pezzo misto si divide in $2 + 2$, nelle due caselle simmetriche. Il 4 davanti a $x_3^2$ invece va sulla diagonale **intero**.

> [!TRAPPOLA] Metà sì, metà no
> Si divide per due **solo** il numero dei pezzi misti, e solo per le **forme quadratiche**. Nella formula di un prodotto scalare con due vettori diversi, i pezzi $x_1y_2$ e $x_2y_1$ sono diversi e vanno nella matrice senza dimezzare (lezione L19). Nell'appello dell'08/02/2024 (domanda 7) tra le risposte sbagliate c'erano proprio le matrici con il numero misto non dimezzato.

**La forma di una matrice e la definita positività.** Le dispense chiamano $q_S(x) = g_S(x, x)$ la forma quadratica della matrice simmetrica $S$. Un prodotto scalare è definito positivo quando ogni vettore non nullo, messo con sé stesso, dà un numero positivo (Definizione 19.2). Quindi il prodotto è definito positivo esattamente quando la sua forma quadratica è positiva per ogni vettore diverso da zero. Per deciderlo basta studiare il **segno** di un polinomio di secondo grado.

> [!OLTRE] Completare i quadrati, e tornare dalla forma al prodotto
> **Completare i quadrati.** Per vedere che una forma è positiva la si riscrive come somma di quadrati con numeri positivi davanti. Per $q = 2x_1^2 + 2x_1x_2 + 2x_2^2$:
> $$q = 2\left(x_1 + \frac{x_2}2\right)^2 + \frac32 x_2^2,$$
> oppure
> $$q = x_1^2 + x_2^2 + (x_1 + x_2)^2.$$
> In tutte e due le scritture la forma non è mai negativa, ed è zero solo quando tutte e due le variabili sono zero. Per le matrici $2 \times 2$ c'è anche il criterio della lezione L19: $\begin{pmatrix} a & b \\ b & c \end{pmatrix}$ è definita positiva esattamente quando $a > 0$ e $ac - b^2 > 0$.
>
> **Dalla forma al prodotto.** La forma quadratica contiene tutto il prodotto scalare. Sviluppando $q(x + y) = q(x) + 2g(x, y) + q(y)$ (lezione L19) si ricava
> $$g(x, y) = \frac12\big(q(x + y) - q(x) - q(y)\big).$$

Le dispense lo dicono in modo esplicito: **per il resto della lezione il prodotto scalare è sempre definito positivo**. Serve per le radici quadrate della prossima sezione.

::: prova Qual è la matrice simmetrica della forma $x_1^2 + 6x_1x_2 + 2x_2^2$?
Diagonale 1 e 2; il 6 si divide in $3 + 3$: $\begin{pmatrix} 1 & 3 \\ 3 & 2 \end{pmatrix}$.
:::

> [!RICORDA]
> - Forma quadratica: polinomio con tutti i pezzi di grado 2.
> - Matrice: quadrati sulla diagonale, **metà** dei numeri misti fuori dalla diagonale.
> - $g_S$ è definito positivo esattamente quando la sua forma quadratica è positiva fuori dallo zero.

## La lunghezza di un vettore (pp. 102–103)

Disegna un triangolo rettangolo con i cateti lunghi 3 e 4. L'ipotenusa è il vettore $v = (3, 4)$. Per il teorema di Pitagora la sua lunghezza è

$$\sqrt{3^2 + 4^2} = \sqrt{25} = 5.$$

Sotto la radice c'è proprio il prodotto scalare di $v$ con sé stesso: $3 \cdot 3 + 4 \cdot 4$. L'idea della norma è questa: **la lunghezza è la radice del prodotto scalare di un vettore con sé stesso**, qualunque sia il prodotto scalare.

```grafico
titolo: $\|(3, 4)\| = \sqrt{3^2 + 4^2} = 5$: la norma euclidea è il teorema di Pitagora
x: -1 5
y: -1 5
poligono: 0 0 3 0 3 4 | tenue
vettore: 3 4 | accento | spesso | $v = (3, 4)$ | no
segmento: 0 0 3 0 | blu | $3$ | s
segmento: 3 0 3 4 | ambra | $4$ | e
```

Le dispense lo scrivono così.

> [!DEF] 20.6 · Norma
> Sia $V$ uno spazio vettoriale munito di un prodotto scalare definito positivo. La **norma** di $v \in V$ è
> $$\|v\| = \sqrt{\langle v, v\rangle}.$$

**Come si legge.**

- $\|v\|$ si legge «norma di vu» ed è la **lunghezza** del vettore.
- Il prodotto deve essere **definito positivo**: così sotto la radice non c'è mai un numero negativo.
- Le due stanghette servono a non confonderla con il valore assoluto $|x|$ di un numero.
- La norma **dipende dal prodotto scalare**: lo stesso vettore può avere lunghezze diverse con prodotti diversi.

> [!ESEMPIO] 20.8 · La norma euclidea
> Per il prodotto scalare euclideo su $\R^n$:
> $$\|x\| = \sqrt{x_1^2 + \dots + x_n^2}.$$
> Per esempio $\|(3, 4)\| = 5$, $\|(1, 2, 2)\| = \sqrt{1 + 4 + 4} = 3$, $\|(1, 1, 1, 1)\| = \sqrt 4 = 2$.

> [!ESEMPIO] 20.9 · Una norma diversa
> Prendiamo il prodotto scalare $g_S$ su $\R^2$ definito da $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$. La norma di $x$ è
> $$\|x\| = \sqrt{2x_1^2 + 2x_1x_2 + x_2^2}.$$
> Sotto la radice c'è la forma quadratica $q_S(x)$. Qualche valore:
>
> | $x$ | $q_S(x) = 2x_1^2 + 2x_1x_2 + x_2^2$ | $\|x\|$ con $g_S$ | $\|x\|$ euclidea |
> |---|---|---|---|
> | $(1, 0)$ | $2$ | $\sqrt 2$ | $1$ |
> | $(0, 1)$ | $1$ | $1$ | $1$ |
> | $(1, -1)$ | $2 - 2 + 1 = 1$ | $1$ | $\sqrt 2$ |
> | $(1, 1)$ | $2 + 2 + 1 = 5$ | $\sqrt 5$ | $\sqrt 2$ |

### Le quattro regole delle lunghezze

Una buona lunghezza deve comportarsi come ci aspettiamo dai righelli. Le dispense raccolgono quattro regole.

> [!PROP] 20.7
> Per ogni $v, w \in V$ e $\lambda \in \R$ valgono:
> 1. $\|v\| > 0$ se $v \neq 0$ e $\|0\| = 0$,
> 2. $\|\lambda v\| = |\lambda|\,\|v\|$,
> 3. $|\langle v, w\rangle| \le \|v\|\,\|w\|$,
> 4. $\|v + w\| \le \|v\| + \|w\|$.
>
> La (3) è la **disuguaglianza di Cauchy–Schwarz** e la (4) è la **disuguaglianza triangolare**.

**Come si legge**, una regola alla volta, con i numeri.

1. Solo il vettore nullo ha lunghezza zero. È la definita positività.
2. Moltiplicare un vettore per un numero moltiplica la lunghezza per il valore assoluto di quel numero: $-3v$ è lungo 3 volte $v$. Il valore assoluto serve perché le lunghezze non sono mai negative.
3. Il prodotto scalare, preso senza segno, non supera mai il prodotto delle lunghezze. Con $v = (1, 2)$ e $w = (3, 1)$: il prodotto scalare è 5, il prodotto delle lunghezze è $\sqrt 5 \cdot \sqrt{10} = \sqrt{50}$, circa 7,07. Con $w = (2, 4)$, che è $2v$, vale l'uguaglianza: $10 = \sqrt 5 \cdot \sqrt{20}$.
4. In un triangolo un lato non supera la somma degli altri due. Con $v = (3, 0)$ e $w = (0, 4)$: $v + w = (3, 4)$ è lungo 5, che non supera $3 + 4 = 7$.

**Perché valgono le regole 1 e 2.** La regola 1 viene dalla definita positività: se $v$ non è zero, il prodotto con sé stesso è positivo, e la sua radice anche. Per la regola 2 si usano gli assiomi della lezione L19:

$$\|\lambda v\| = \sqrt{\langle \lambda v, \lambda v\rangle} = \sqrt{\lambda^2\langle v, v\rangle} = \sqrt{\lambda^2}\,\sqrt{\langle v, v\rangle} = |\lambda|\,\|v\|.$$

L'ultimo passaggio usa che la radice di $\lambda^2$ è il valore assoluto di $\lambda$: per esempio $\sqrt{(-3)^2} = 3$.

**Perché vale Cauchy–Schwarz.** Se $w$ è zero, tutti e due i lati valgono 0. Altrimenti chiama $c$ il numero $\frac{\langle v, w\rangle}{\langle w, w\rangle}$. Il vettore $v - cw$ è quello che resta di $v$ dopo avergli tolto la parte nella direzione di $w$. Nella lezione L21 quella parte si chiamerà **proiezione**. La sua lunghezza al quadrato non è mai negativa:

1. sviluppo come $(a - b)^2$:
   $$0 \le \|v - cw\|^2 = \langle v, v\rangle - 2c\langle v, w\rangle + c^2\langle w, w\rangle;$$
2. metto al posto di $c$ il suo valore:
   $$0 \le \|v\|^2 - 2\,\frac{\langle v, w\rangle^2}{\|w\|^2} + \frac{\langle v, w\rangle^2}{\|w\|^4}\,\|w\|^2 = \|v\|^2 - \frac{\langle v, w\rangle^2}{\|w\|^2};$$
3. moltiplico per $\|w\|^2$, che è positivo: $\langle v, w\rangle^2 \le \|v\|^2\|w\|^2$;
4. prendo la radice dei due lati, che non sono negativi: $|\langle v, w\rangle| \le \|v\|\,\|w\|$.

**Perché vale la disuguaglianza triangolare.** Sviluppo il quadrato (lezione L19) e uso Cauchy–Schwarz:

$$\begin{aligned} \|v + w\|^2 &= \|v\|^2 + \|w\|^2 + 2\langle v, w\rangle \\ &\le \|v\|^2 + \|w\|^2 + 2\|v\|\,\|w\| = \big(\|v\| + \|w\|\big)^2. \end{aligned}$$

Il passaggio con il «minore o uguale» usa Cauchy–Schwarz. Poi si prende la radice dei due lati.

> [!OLTRE] Quando vale l'uguaglianza
> In Cauchy–Schwarz vale l'uguaglianza esattamente quando $v$ e $w$ sono **paralleli**, cioè uno è multiplo dell'altro: nel passaggio 1 l'uguaglianza vuol dire che $v - cw$ ha lunghezza zero, cioè $v = cw$. Nella triangolare serve anche che puntino nello **stesso verso**.

**Vettori lunghi 1.** Un vettore di lunghezza 1 si chiama **unitario**. Per la regola 2, se $v$ non è zero il vettore $\frac{v}{\|v\|}$ è lungo esattamente 1: dividere per la lunghezza si chiama **normalizzare**. Per esempio $\frac{(3, 4)}{5} = \left(\frac35, \frac45\right)$. Le dispense usano i vettori normalizzati nella prossima sezione e le basi fatte di vettori unitari nella lezione L21.

::: prova Quanto è lungo il vettore $(2, -2, 1)$, con il prodotto di tutti i giorni?
$\sqrt{4 + 4 + 1} = \sqrt 9 = 3$.
:::

> [!RICORDA]
> - Lunghezza = radice del prodotto scalare del vettore con sé stesso. Con il prodotto di tutti i giorni è Pitagora.
> - Cauchy–Schwarz: il prodotto scalare non supera il prodotto delle lunghezze. Triangolare: un lato non supera la somma degli altri due.

## La distanza tra due punti (p. 103)

Con un righello si misura subito anche una distanza: la distanza tra due punti è la lunghezza del vettore che va dall'uno all'altro. Il vettore che parte dal primo punto e arriva nel secondo si calcola «arrivo meno partenza»:

$$\overrightarrow{PQ} = Q - P.$$

Le dispense scrivono la distanza così.

> [!DEF] 20.10 · Distanza
> La **distanza** fra $P$ e $Q$ è
> $$d(P, Q) = \|Q - P\|.$$

**Come si legge.** $d(P, Q)$ si legge «distanza tra pi e qu»: è la lunghezza del vettore che va dal primo punto al secondo.

Esempi con il prodotto di tutti i giorni:

- da $P = (1, 2)$ a $Q = (4, 6)$: il vettore è $(3, 4)$ e la distanza è 5;
- da $P = (1, 0, 2)$ a $Q = (3, 1, 0)$: il vettore è $(2, 1, -2)$ e la distanza è $\sqrt{4 + 1 + 4} = 3$.

Con un altro prodotto cambiano anche le distanze. Con il prodotto dell'Esempio 20.9 la distanza tra l'origine e il punto $(1, -1)$ è 1, come nella tabella, mentre quella di tutti i giorni è $\sqrt 2$.

La distanza ha le proprietà che ci aspettiamo. Le dispense le scrivono così.

> [!PROP] 20.11
> Per ogni $P, Q, R \in V$:
> 1. $d(P, Q) > 0$ se $P \neq Q$ e $d(P, P) = 0$,
> 2. $d(P, Q) = d(Q, P)$,
> 3. $d(P, R) \le d(P, Q) + d(Q, R)$.

**Come si legge**, punto per punto:

1. due punti diversi sono a distanza positiva, e un punto è a distanza zero da sé stesso: viene dalla regola 1 delle lunghezze;
2. andare è lungo quanto tornare: il vettore di ritorno è l'opposto di quello di andata, e per la regola 2 ha la stessa lunghezza;
3. passare per un punto intermedio non accorcia la strada. Il viaggio si spezza in due tappe, e per la disuguaglianza triangolare
   $$\begin{aligned} d(P, R) &= \|(Q - P) + (R - Q)\| \\ &\le \|Q - P\| + \|R - Q\| = d(P, Q) + d(Q, R). \end{aligned}$$

```grafico
titolo: $d(P, R) = 5 \le d(P, Q) + d(Q, R) = 3 + 4$
x: 0 6
y: 0 6
punto: 1 1 | accento | $P$ | so
punto: 4 1 | accento | $Q$ | se
punto: 4 5 | accento | $R$ | ne
segmento: 1 1 4 1 | blu | $3$ | s
segmento: 4 1 4 5 | ambra | $4$ | e
segmento: 1 1 4 5 | verde | spesso | $5$ | no
```

::: prova Quanto distano i punti $(1, 1)$ e $(4, 5)$?
Il vettore è $(4 - 1,\ 5 - 1) = (3, 4)$, lungo 5.
:::

> [!RICORDA]
> - Distanza = lunghezza del vettore «arrivo meno partenza».
> - È simmetrica, e una tappa intermedia non accorcia mai la strada.

## L'angolo tra due vettori (p. 104)

In fisica si impara la formula «prodotto scalare = lunghezza per lunghezza per coseno dell'angolo». Il corso la **rovescia** e la usa per definire l'angolo: prodotto scalare e lunghezze si sanno calcolare, e da loro si ricava il coseno. Le dispense lo scrivono così.

> [!DEF] 20.12 · Angolo
> Sia $V$ munito di un prodotto scalare definito positivo. L'**angolo** fra due vettori non nulli $v, w \in V$ è il numero $\vartheta \in [0, \pi]$ tale che
> $$\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}.$$

**Come si legge.**

- $\vartheta$ è la lettera greca «theta». Il suo coseno è il prodotto scalare diviso per il prodotto delle lunghezze.
- I vettori non devono essere zero, altrimenti si dividerebbe per zero.
- L'angolo è in **radianti** e sta tra 0 e $\pi$, cioè tra 0° e 180°: l'angolo tra due vettori non ha verso e non supera l'angolo piatto.
- **La definizione funziona grazie a Cauchy–Schwarz**: il rapporto sta sempre tra meno uno e uno. E per ogni numero in quell'intervallo c'è uno e un solo angolo tra 0° e 180° con quel coseno.
- Lo stesso si scrive con l'arcocoseno, la funzione che dal coseno restituisce l'angolo: $\vartheta = \arccos\frac{\langle v, w\rangle}{\|v\|\,\|w\|}$.

Il segno del prodotto scalare decide il tipo di angolo, perché le lunghezze sono positive e il coseno è positivo prima dell'angolo retto e negativo dopo:

| Prodotto scalare | Coseno | L'angolo è |
|---|---|---|
| positivo | positivo | **acuto**, meno di 90° |
| zero | zero | **retto**, 90° |
| negativo | negativo | **ottuso**, più di 90° |

**Senza calcolatrice**: all'esame si riconoscono i coseni degli angoli notevoli. Conviene averli sul foglio.

| $\vartheta$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\frac{2\pi}3$ | $\frac{3\pi}4$ | $\frac{5\pi}6$ | $\pi$ |
|---|---|---|---|---|---|---|---|---|---|
| gradi | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
| $\cos\vartheta$ | $1$ | $\frac{\sqrt3}2$ | $\frac{\sqrt2}2$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt2}2$ | $-\frac{\sqrt3}2$ | $-1$ |

> [!ESEMPIO] Quattro angoli con il prodotto euclideo
> 1. $v = (1, 0)$, $w = (1, 1)$: prodotto 1, lunghezze 1 e $\sqrt 2$. Coseno $\frac1{\sqrt2} = \frac{\sqrt2}2$: l'angolo è $\frac\pi4$.
> 2. $v = (1, 2)$, $w = (-2, 1)$: prodotto $-2 + 2 = 0$. L'angolo è retto, $\frac\pi2$.
> 3. $v = (1, 0)$, $w = (-1, \sqrt3)$: prodotto $-1$, lunghezze 1 e $\sqrt{1 + 3} = 2$. Coseno $-\frac12$: l'angolo è $\frac{2\pi}3$.
> 4. $v = (1, 1, 1)$, $w = (1, 2, 3)$: prodotto 6, lunghezze $\sqrt3$ e $\sqrt{14}$. Coseno $\frac6{\sqrt{42}}$, e l'angolo è $\arccos\frac{6}{\sqrt{42}}$, che non è un angolo notevole. È la domanda 10 dell'appello del 07/09/2026.

```grafico
titolo: $v = (1, 0)$ e $w = (-1, \sqrt 3)$: $\cos\vartheta = -\frac12$, quindi $\vartheta = \frac{2\pi}{3}$ (ottuso)
x: -2 2
y: -0.5 2
vettore: 1 0 | accento | spesso | $v$ | s
vettore: -1 sqrt(3) | blu | spesso | $w$ | no
arco: 0 0 0.45 0 2pi/3 | ambra | $\vartheta$
```

Prova con lo strumento: trascina $v$ in modo che il prodotto scalare cambi segno, e guarda l'angolo passare da acuto a retto a ottuso. Quando il prodotto è zero lo strumento scrive che i vettori sono ortogonali. Attenzione: lo strumento scrive l'angolo in **gradi**, mentre all'esame si usano i radianti; 90° corrisponde a $\frac\pi2$.

```widget vettori
titolo: Norme, prodotto scalare e angolo
u: 2 1
v: -1 3
modo: scalare
modi: scalare
raggio: 5
```

**Angoli con un prodotto diverso.** La definizione vale per **ogni** prodotto definito positivo. Con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, per esempio, i due vettori della base canonica non sono più perpendicolari. Il loro prodotto è 1 e le lunghezze sono $\sqrt2$ e 1. Quindi il coseno è $\frac1{\sqrt2}$ e l'angolo è 45° (esercizio 11).

> [!NOTA] Collegamento con l'informatica: similarità coseno
> Le dispense chiudono la lezione con un collegamento. Molte applicazioni usano i vettori: motori di ricerca, sistemi di raccomandazione, riconoscimento di immagini. Un oggetto, per esempio una parola, un documento o un'immagine, viene rappresentato da un vettore $x \in \R^n$, spesso chiamato **embedding**. Per confrontare due rappresentazioni $x$ e $y$ si usa la **similarità coseno**
> $$\operatorname{sim}(x, y) = \frac{\langle x, y\rangle}{\|x\|\,\|y\|} = \cos\vartheta.$$
> Dipende dall'angolo e **non dalla lunghezza** dei vettori. Se gli embedding sono normalizzati, cioè lunghi 1, la similarità coseno è il prodotto scalare stesso. Vettori che puntano in direzioni vicine hanno similarità vicina a 1.
>
> Un esempio piccolo: tre documenti descritti dal numero di volte in cui compaiono quattro parole, $d_1 = (2, 1, 0, 1)$, $d_2 = (4, 2, 0, 2)$, $d_3 = (0, 1, 3, 0)$. Il secondo è il primo «scritto due volte»: $\operatorname{sim}(d_1, d_2) = 1$, anche se $d_2$ è più lungo. Invece $\operatorname{sim}(d_1, d_3) = \frac{1}{\sqrt6\sqrt{10}} = \frac{\sqrt{15}}{30}$, circa 0,13: parlano di cose diverse.

> [!OLTRE] Dove trovarlo nel libro
> Martelli: §7.2.2 «Cambiamento di base» (p. 212) e §7.2.3 sulle matrici congruenti (p. 213); §7.1.5 «Forme quadratiche» (pp. 203–204); capitolo 8, §8.1.1 «Norma» (pp. 240–241), §8.1.2 con le applicazioni di Cauchy–Schwarz e la legge del parallelogramma (pp. 241–242), §8.1.3 «Angoli» (pp. 242–243), §8.1.4 «Distanze» (pp. 243–244). Il libro dimostra Cauchy–Schwarz in modo un po' diverso, partendo dalla lunghezza di una ricetta di $v$ e $w$ scelta bene.

::: prova Qual è l'angolo tra $(1, 0)$ e $(1, \sqrt 3)$?
Prodotto 1, lunghezze 1 e $\sqrt{1 + 3} = 2$. Coseno $\frac12$: l'angolo è $\frac\pi3$, cioè 60°.
:::

> [!RICORDA]
> - Coseno dell'angolo = prodotto scalare diviso il prodotto delle lunghezze; l'angolo sta tra 0 e $\pi$.
> - Prodotto positivo: acuto. Zero: retto. Negativo: ottuso.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| ${}^tM$ | «emme trasposta» | la matrice con righe e colonne scambiate | |
| ${}^tM\,S\,M$ | «emme trasposta, esse, emme» | la matrice del prodotto scalare nella base nuova | |
| $q_S(x)$ | «qu esse di x» | la forma quadratica di $S$: il prodotto di $x$ con sé stesso | $q_I(x) = x_1^2 + x_2^2$ |
| $\langle v, w\rangle$ | «prodotto scalare di vu e vu doppio» | il prodotto scalare (lezione L19) | $\langle (1, 2), (3, 1)\rangle = 5$ |
| $\|v\|$ | «norma di vu» | la lunghezza | $\|(3, 4)\| = 5$ |
| $\lvert\lambda\rvert$ | «valore assoluto di lambda» | il numero senza segno | $\lvert -3\rvert = 3$ |
| $\overrightarrow{PQ}$ | «vettore pi qu» | il vettore da $P$ a $Q$, cioè $Q - P$ | |
| $d(P, Q)$ | «distanza tra pi e qu» | la lunghezza di $Q - P$ | |
| $\vartheta$ | «theta» | l'angolo tra due vettori, in radianti | |
| $\arccos$ | «arcocoseno» | dal coseno all'angolo tra 0 e $\pi$ | $\arccos\frac12 = \frac\pi3$ |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026**

1. **Norma e angolo (quiz).** Appello del 07/09/2026: domanda 5 (la lunghezza di un vettore con una matrice $3 \times 3$ data) e domanda 10 (un angolo con il prodotto di tutti i giorni). Appello del 03/06/2025, domanda 6 (angolo con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$). Appello dell'08/02/2024, domanda 8 (angolo tra i polinomi $x$ e $x^2$).
2. **Dalla forma quadratica alla matrice (quiz).** Appello dell'08/02/2024, domanda 7.
3. **Cambiamento di base (quiz).** Appelli del 10/06/2024 e del 03/06/2026, domanda 4: la matrice di $g_S$ in una base nuova, con la formula oppure casella per casella.
4. **Problemi.** Il punto (1) del problema 12 del 03/07/2026 chiede norme e coseno dell'angolo con un $g_S$ su $\R^3$. Il punto (2) del problema 12 del 07/02/2025 chiede norme e angolo di due polinomi. Il punto (2) del problema 12 del 05/02/2026 chiede per quali valori di un parametro due vettori sono ortogonali rispetto a $g_S$.

> [!METODO] Norma e angolo con un $g_S$
> 1. Calcola **una volta** i vettori $Sv$ e $Sw$.
> 2. $\|v\|^2 = {}^tv\,(Sv)$, $\|w\|^2 = {}^tw\,(Sw)$, $g_S(v, w) = {}^tv\,(Sw)$: sono prodotti di tutti i giorni tra vettori già calcolati.
> 3. Il coseno è $g_S(v, w)$ diviso il prodotto delle lunghezze. Semplifica le radici, per esempio $\frac{1}{\sqrt2} = \frac{\sqrt2}2$ e $\frac{3}{\sqrt{12}} = \frac{\sqrt3}2$, e confronta con la tabella degli angoli notevoli.
> 4. Se nessun angolo notevole torna, la risposta resta con l'arcocoseno: nel quiz cerca l'opzione equivalente, magari scritta con il denominatore senza radici.

### Una domanda vera, letta insieme

**Appello del 07/09/2026, domanda 5.** Il testo: «Su $\R^3$ è dato $g_S$ con $S = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}$. Qual è la norma di $v = {}^t(1, 1, 1)$?». Le opzioni erano: radice di 2, 2, radice di 7, radice di 3 e 3.

**In pratica chiede:** quanto è lungo il vettore $(1, 1, 1)$, se le lunghezze si misurano con il prodotto scalare di questa matrice e non con quello di tutti i giorni?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: la matrice per il vettore.** Ogni riga di $S$ per $(1, 1, 1)$ è la somma dei numeri della riga:
> $$Sv = (2 + 1 + 1,\ 1 + 2 + 0,\ 1 + 0 + 1) = (4, 3, 2).$$
>
> **Passo 2: il prodotto con il vettore.** $\|v\|^2 = {}^tv\,(Sv) = 1 \cdot 4 + 1 \cdot 3 + 1 \cdot 2 = 9$.
>
> **Passo 3: la radice.** $\|v\| = \sqrt 9 = 3$.
>
> **La risposta** è 3. La trappola è $\sqrt3$, la lunghezza di $(1, 1, 1)$ con il prodotto di tutti i giorni: qui il prodotto è $g_S$. Chi dimentica la radice cerca 9, che tra le opzioni non c'è.

### Altre due domande vere

> [!ESAME] Appello del 03/06/2025, domanda 6
> *Con $g_S(v, w) = {}^tv\,S\,w$ e $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, qual è l'angolo tra $u = {}^t(0, 2)$ e $w = {}^t(\sqrt3, 1 - \sqrt3)$?* Le opzioni: $\frac\pi4$, $0$, $\frac\pi3$, $\arccos\frac{1 - \sqrt3}{\sqrt{7 - 2\sqrt3}}$, $\frac\pi2$.
>
> **Soluzione.**
> 1. $Sw = \big(2\sqrt3 + 1 - \sqrt3,\ \sqrt3 + 1 - \sqrt3\big) = (\sqrt3 + 1,\ 1)$.
> 2. $g_S(u, w) = {}^tu\,(Sw) = 0 \cdot (\sqrt3 + 1) + 2 \cdot 1 = 2$.
> 3. $Su = (2, 2)$, quindi $\|u\|^2 = 0 \cdot 2 + 2 \cdot 2 = 4$ e $\|u\| = 2$.
> 4. $\|w\|^2 = {}^tw\,(Sw) = \sqrt3(\sqrt3 + 1) + (1 - \sqrt3) \cdot 1 = 3 + \sqrt3 + 1 - \sqrt3 = 4$, quindi $\|w\| = 2$.
>
> Il coseno è $\frac{2}{2 \cdot 2} = \frac12$, quindi l'angolo è $\frac\pi3$. L'opzione con l'arcocoseno è il coseno calcolato con il prodotto di tutti i giorni: è la trappola per chi dimentica $S$.

> [!ESAME] Appello del 10/06/2024, domanda 4
> *Data $S = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 2 \end{pmatrix}$, qual è la matrice di $g_S$ nella base $\mathcal B = \{{}^t(1, 0, 0), {}^t(1, 1, 0), {}^t(1, 1, 1)\}$?*
>
> **Soluzione con la formula.** $M = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$, con i vettori della base in colonna. Prima $SM = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \\ 1 & 1 & 3 \end{pmatrix}$, poi
> $${}^tM(SM) = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \\ 1 & 1 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 7 \end{pmatrix}.$$
> Controlli: il risultato è simmetrico. Il determinante di $S$ è $-2$ e quello di $M$ è 1, quindi anche il risultato deve avere determinante $-2$: infatti $1(21 - 16) - 2(14 - 12) + 3(8 - 9) = 5 - 4 - 3 = -2$.
>
> Le risposte sbagliate sono istruttive. Una era $M$ stessa, che non è simmetrica e si scarta subito. Una era $S$, la matrice nella base canonica. Una era ${}^tM\,M$, cioè la matrice del prodotto di tutti i giorni nella base $\mathcal B$, per chi dimentica $S$. Il modo più veloce per scegliere è calcolare una sola casella: quella al posto $(2, 2)$ è il prodotto di $(1, 1, 0)$ con sé stesso, ${}^t(1, 1, 0)\,(2, 1, 1) = 3$, e solo una delle cinque matrici ha 3 in quel posto.

**Errori da evitare.**

- Usare il prodotto di tutti i giorni quando il testo ne dà un altro: è la trappola di tutte e tre le domande qui sopra.
- Dimenticare la **radice**: se la norma al quadrato è 9, la norma è 3.
- Usare $M^{-1}SM$ al posto di ${}^tMSM$.
- Non dimezzare i numeri misti di una forma quadratica.
- Dare l'angolo in gradi, o fuori da $[0, \pi]$: un coseno negativo dà un angolo **ottuso**, non un angolo negativo.

> [!ESAME] Sul foglio da 4 facciate
> - $S' = {}^tM\,S\,M$, con le colonne di $M$ = vettori nuovi nella base vecchia; $\det S' = (\det M)^2\det S$.
> - Forma quadratica: diagonale = numeri dei quadrati, fuori diagonale = **metà** dei numeri misti.
> - $\|v\| = \sqrt{\langle v, v\rangle}$; $|\langle v, w\rangle| \le \|v\|\,\|w\|$; $\|v + w\|^2 = \|v\|^2 + 2\langle v, w\rangle + \|w\|^2$.
> - $d(P, Q) = \|Q - P\|$; $\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}$, con $\vartheta$ tra 0 e $\pi$.
> - La tabella dei coseni degli angoli notevoli.

## Quiz

```quiz
D: La forma quadratica $q(x) = x_1^2 - 4x_1x_2 + 3x_3^2$ si scrive come $q_S(x) = {}^tx\,S\,x$ con $S$ simmetrica uguale a:
+ $\begin{pmatrix} 1 & -2 & 0 \\ -2 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -4 & 0 \\ -4 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -4 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -2 & 0 \\ -2 & 3 & 0 \\ 0 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
= Sulla diagonale i numeri dei quadrati: 1 per $x_1^2$, 0 per $x_2^2$, 3 per $x_3^2$. Il $-4$ di $x_1x_2$ si divide: $-2$ ai posti $(1, 2)$ e $(2, 1)$. La risposta più insidiosa è la seconda, che non dimezza e quindi dà $-8x_1x_2$. La terza dà la forma giusta ma non è simmetrica; la quarta mette il 3 su $x_2^2$; l'ultima ha il segno sbagliato. Simile all'appello dell'08/02/2024, domanda 7.

D: Quale forma quadratica è definita dalla matrice $S = \begin{pmatrix} 0 & 1 & -1 \\ 1 & 2 & 0 \\ -1 & 0 & 0 \end{pmatrix}$?
+ $2x_2^2 + 2x_1x_2 - 2x_1x_3$
- $2x_2^2 + x_1x_2 - x_1x_3$
- $2x_2^2 + 2x_1x_2 + 2x_1x_3$
- $x_1^2 + 2x_2^2 + 2x_1x_2 - 2x_1x_3$
- $2x_2^2 + 4x_1x_2 - 4x_1x_3$
= Dalla diagonale viene solo $2x_2^2$. Fuori dalla diagonale ogni numero si raddoppia: $2 \cdot 1 \cdot x_1x_2$ e $2 \cdot (-1) \cdot x_1x_3$; il posto $(2, 3)$ ha 0. La risposta più insidiosa è la seconda, di chi dimentica di raddoppiare. L'ultima raddoppia due volte; la terza sbaglia un segno; la quarta inventa un $x_1^2$.

D: Su $\R^3$ sia $g_S$ il prodotto scalare con $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}$. Qual è la norma di $v = {}^t(1, 1, 1)$ rispetto a $g_S$?
+ $\sqrt{10}$
- $10$
- $\sqrt3$
- $3$
- $\sqrt7$
= $Sv = (1 + 1,\ 1 + 3 + 1,\ 1 + 2) = (2, 5, 3)$, e la norma al quadrato è $2 + 5 + 3 = 10$: la norma è $\sqrt{10}$. La risposta più insidiosa è $\sqrt3$, la lunghezza con il prodotto di tutti i giorni. 10 è la norma al quadrato, senza la radice. Simile all'appello del 07/09/2026, domanda 5.

D: Rispetto al prodotto scalare euclideo, qual è l'angolo tra ${}^t(1, 0, 1)$ e ${}^t(1, 1, 0)$?
+ $\frac\pi3$
- $\frac\pi6$
- $\frac\pi4$
- $\frac{2\pi}3$
- $\arccos\frac14$
= Il prodotto è $1 + 0 + 0 = 1$, le lunghezze sono $\sqrt2$ e $\sqrt2$: il coseno è $\frac12$ e l'angolo $\frac\pi3$. La risposta più insidiosa è $\frac{2\pi}3$, che ha coseno $-\frac12$: ma il prodotto è positivo, quindi l'angolo è acuto. $\frac\pi6$ ha coseno $\frac{\sqrt3}2$. Simile all'appello del 07/09/2026, domanda 10.

D: Sia $g_S$ il prodotto scalare su $\R^2$ con $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Qual è l'angolo tra ${}^t(1, 0)$ e ${}^t(1, 1)$ rispetto a $g_S$?
+ $\frac\pi6$
- $\frac\pi4$
- $\frac\pi3$
- $0$
- $\arccos\frac34$
= Il prodotto è $S_{11} + S_{12} = 3$; le lunghezze al quadrato sono $S_{11} = 2$ e $2 + 1 + 1 + 2 = 6$. Il coseno è $\frac{3}{\sqrt2\sqrt6} = \frac{3}{\sqrt{12}} = \frac{\sqrt3}2$, quindi l'angolo è $\frac\pi6$. La risposta più insidiosa è $\frac\pi4$, l'angolo con il prodotto di tutti i giorni. Simile all'appello del 03/06/2025, domanda 6.

D: Su $\R_2[x]$ si consideri il prodotto $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. L'angolo tra $p(x) = x$ e $q(x) = x + x^2$ è:
+ $\frac\pi4$
- $\frac\pi2$
- $\frac\pi3$
- $0$
- $\frac\pi6$
= I valori in $-1, 0, 1$: $x$ dà $(-1, 0, 1)$ e $x + x^2$ dà $(0, 0, 2)$. Il prodotto è $0 + 0 + 2 = 2$, le lunghezze $\sqrt2$ e 2, e il coseno $\frac{2}{2\sqrt2} = \frac{\sqrt2}2$: l'angolo è $\frac\pi4$. La risposta più insidiosa è $\frac\pi2$, di chi pensa che $x$ e $x^2$ siano «perpendicolari» come i vettori di una base. Simile all'appello dell'08/02/2024, domanda 8.

D: Siano $S = [g]_{\mathcal B}$ e $S' = [g]_{\mathcal B'}$ le matrici dello stesso prodotto scalare in due basi, e sia $M = [\id]^{\mathcal B'}_{\mathcal B}$. Quale relazione vale sempre?
+ $S' = {}^tM\,S\,M$
- $S' = M^{-1}S\,M$
- $S' = M\,S\,{}^tM$
- $S' = {}^tM\,S$
- $S' = S$
= È la Proposizione 20.1: la casella $(i, j)$ di $S'$ è il prodotto dei vettori nuovi $i$ e $j$, cioè la riga $i$ di ${}^tM$ per $S$ per la colonna $j$ di $M$. La risposta più insidiosa è la seconda, che è la formula delle macchine lineari. La matrice di un prodotto scalare cambia con la base, quindi $S' = S$ è falsa in generale. Serve negli appelli del 10/06/2024 e del 03/06/2026, domanda 4.

D: Quale affermazione è vera per ogni coppia di vettori $v, w$ di uno spazio con prodotto scalare definito positivo?
+ $|\langle v, w\rangle| \le \|v\|\,\|w\|$
- $\|v + w\| = \|v\| + \|w\|$
- $\|v + w\|^2 = \|v\|^2 + \|w\|^2$
- $\|\lambda v\| = \lambda\,\|v\|$ per ogni $\lambda \in \R$
- $\langle v, w\rangle \ge 0$
= È Cauchy–Schwarz. La più insidiosa è la quarta: sembra giusta, ma con un numero negativo darebbe una lunghezza negativa, e serve il valore assoluto. La seconda vale solo per vettori paralleli con lo stesso verso; la terza, Pitagora, solo se il prodotto scalare è zero; l'ultima è falsa con $w = -v$.

D: Quanto vale la distanza euclidea tra i punti $P = (1, 2, 3)$ e $Q = (3, 3, 5)$?
N: 3
= Il vettore da $P$ a $Q$ è $(2, 1, 2)$, e la sua lunghezza è $\sqrt{4 + 1 + 4} = \sqrt9 = 3$.

D: Siano $v, w$ vettori con $\|v\| = 2$, $\|w\| = 3$ e $\langle v, w\rangle = 1$. Quanto vale $\|v + w\|^2$?
N: 15
= Si sviluppa il quadrato: $\|v + w\|^2 = \|v\|^2 + 2\langle v, w\rangle + \|w\|^2 = 4 + 2 + 9 = 15$.
```

## Esercizi

::: esercizio base Riscaldamento: Pitagora
Calcola la lunghezza di $(5, 12)$, di $(1, 1)$ e di $(2, 3, 6)$ con il prodotto di tutti i giorni.
::: soluzione
1. $\sqrt{25 + 144} = \sqrt{169} = 13$.
2. $\sqrt{1 + 1} = \sqrt 2$.
3. $\sqrt{4 + 9 + 36} = \sqrt{49} = 7$.
:::

::: esercizio base Riscaldamento: una distanza
Quanto distano i punti $P = (2, 1)$ e $Q = (5, 5)$?
::: soluzione
1. Il vettore da $P$ a $Q$ è «arrivo meno partenza»: $(5 - 2,\ 5 - 1) = (3, 4)$.
2. La sua lunghezza è $\sqrt{9 + 16} = 5$.
:::

::: esercizio base Riscaldamento: acuto, retto o ottuso?
Senza calcolare l'angolo, di' di che tipo è l'angolo tra: (a) $(1, 2)$ e $(3, -1)$; (b) $(2, 1)$ e $(-1, 2)$; (c) $(1, 0)$ e $(-2, 1)$.
::: soluzione
Basta il segno del prodotto scalare.
1. (a) $3 - 2 = 1$, positivo: acuto.
2. (b) $-2 + 2 = 0$: retto.
3. (c) $-2 + 0 = -2$, negativo: ottuso.
:::

::: esercizio base Riscaldamento: normalizzare
Trova il vettore lungo 1 nella stessa direzione e nello stesso verso di $(0, 3, 4)$ e di $(6, 8)$.
::: soluzione
1. $(0, 3, 4)$ è lungo $\sqrt{9 + 16} = 5$: diviso per 5 dà $\left(0, \frac35, \frac45\right)$.
2. $(6, 8)$ è lungo $\sqrt{36 + 64} = 10$: diviso per 10 dà $\left(\frac35, \frac45\right)$.
:::

::: esercizio base Norme e distanze euclidee
(a) Calcola $\|(2, -1, 2)\|$ e normalizza il vettore. (b) Calcola la distanza tra $P = (1, 1, 1)$ e $Q = (3, -1, 2)$. (c) Normalizza $(1, 1, 1, 1)$ in $\R^4$.
::: soluzione
(a) $\|(2, -1, 2)\| = \sqrt{4 + 1 + 4} = 3$. Normalizzato: $\frac13(2, -1, 2) = \left(\frac23, -\frac13, \frac23\right)$. Controllo: $\frac{4 + 1 + 4}{9} = 1$.

(b) $Q - P = (2, -2, 1)$ e $d(P, Q) = \sqrt{4 + 4 + 1} = 3$.

(c) $\|(1, 1, 1, 1)\| = \sqrt4 = 2$. Normalizzato: $\left(\frac12, \frac12, \frac12, \frac12\right)$.
:::

::: esercizio base Cinque angoli euclidei
Calcola l'angolo tra: (a) $(1, 2, 2)$ e $(2, -1, 2)$; (b) $(1, 1)$ e $(1, -1)$; (c) $(1, \sqrt3)$ e $(\sqrt3, 1)$; (d) $(1, 0, 1)$ e $(0, 1, 1)$; (e) $(1, 1, 0)$ e $(-1, 0, -1)$.
::: soluzione
(a) Prodotto $2 - 2 + 4 = 4$, lunghezze 3 e 3: coseno $\frac49$, angolo $\arccos\frac49$, acuto e non notevole.

(b) Prodotto $1 - 1 = 0$: l'angolo è $\frac\pi2$.

(c) Prodotto $\sqrt3 + \sqrt3 = 2\sqrt3$, lunghezze $\sqrt{1 + 3} = 2$ e 2: coseno $\frac{2\sqrt3}4 = \frac{\sqrt3}2$, angolo $\frac\pi6$.

(d) Prodotto $0 + 0 + 1 = 1$, lunghezze $\sqrt2$ e $\sqrt2$: coseno $\frac12$, angolo $\frac\pi3$.

(e) Prodotto $-1 + 0 + 0 = -1$, lunghezze $\sqrt2$ e $\sqrt2$: coseno $-\frac12$, angolo $\frac{2\pi}3$, ottuso.
:::

::: esercizio base Forme quadratiche e matrici
(a) Scrivi le matrici simmetriche di $q_1 = x_1^2 - 2x_1x_2 + 3x_2^2$ su $\R^2$, di $q_2 = x_2^2 + x_1x_3$ su $\R^3$ e di $q_3 = x_1^2 + 4x_1x_2$ su $\R^3$. (b) Scrivi le forme quadratiche delle matrici $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$ e $\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 2 \\ 0 & 2 & -1 \end{pmatrix}$.
::: soluzione
(a) Diagonale = numeri dei quadrati, fuori diagonale = metà dei numeri misti:
$$S_1 = \begin{pmatrix} 1 & -1 \\ -1 & 3 \end{pmatrix}, \qquad S_2 = \begin{pmatrix} 0 & 0 & \frac12 \\ 0 & 1 & 0 \\ \frac12 & 0 & 0 \end{pmatrix},$$
$$S_3 = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
In $S_3$ la variabile $x_3$ non compare: riga e colonna 3 sono di zeri. La matrice va comunque scritta $3 \times 3$, perché la forma è su $\R^3$.

(b) Quadrati dalla diagonale, pezzi misti con il doppio del numero:
$$3x_1^2 + 2x_1x_2, \qquad 2x_1x_2 + 4x_2x_3 - x_3^2.$$
:::

::: esercizio medio Esercizio 20.13 delle dispense
Su $\R^2$ consideriamo il prodotto scalare $g(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + 2x_2y_2$.
1. Trovare la matrice associata a $g$ rispetto alla base canonica e la forma quadratica corrispondente.
2. Verificare che $g$ è definito positivo.
3. Calcolare le norme di $e_1, e_2$ e l'angolo fra questi due vettori.
4. Trovare la matrice associata a $g$ rispetto alla base $\mathcal B = \{(1, 1), (1, -1)\}$.
::: soluzione
**1.** Il numero davanti a $x_iy_j$ va al posto $(i, j)$ (lezione L19):
$$S = [g]_{\mathcal C} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}.$$
La forma quadratica è $q(x) = g(x, x) = 2x_1^2 + x_1x_2 + x_2x_1 + 2x_2^2 = 2x_1^2 + 2x_1x_2 + 2x_2^2$.

**2.** Completo il quadrato:
$$\begin{aligned} q(x) &= 2\left(x_1^2 + x_1x_2\right) + 2x_2^2 \\ &= 2\left(x_1 + \frac{x_2}2\right)^2 - \frac{x_2^2}2 + 2x_2^2 \\ &= 2\left(x_1 + \frac{x_2}2\right)^2 + \frac32 x_2^2. \end{aligned}$$
Tutti e due i pezzi non sono mai negativi, e la somma è zero solo se $x_2 = 0$ e poi $x_1 = 0$. Quindi $q$ è positiva per ogni $x$ diverso da zero: $g$ è definito positivo. Con il criterio $2 \times 2$: $2 > 0$ e il determinante è $3 > 0$.

**3.** Per il Corollario 19.9: $\|e_1\|^2 = S_{11} = 2$ e $\|e_2\|^2 = S_{22} = 2$, quindi tutti e due sono lunghi $\sqrt2$. Poi $g(e_1, e_2) = S_{12} = 1$:
$$\cos\vartheta = \frac{1}{\sqrt2\,\sqrt2} = \frac12, \qquad \vartheta = \frac\pi3.$$
Con questo prodotto $e_1$ ed $e_2$ formano un angolo di 60°, non di 90°.

**4.** Con $M = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, che ha in colonna i vettori di $\mathcal B$:
$$SM = \begin{pmatrix} 2 + 1 & 2 - 1 \\ 1 + 2 & 1 - 2 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix},$$
$${}^tM(SM) = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix} = \begin{pmatrix} 6 & 0 \\ 0 & 2 \end{pmatrix}.$$
Controllo casella per casella: $g((1, 1), (1, 1)) = 2 + 1 + 1 + 2 = 6$; $g((1, 1), (1, -1)) = 2 - 1 + 1 - 2 = 0$; $g((1, -1), (1, -1)) = 2 - 1 - 1 + 2 = 2$. La matrice è diagonale: i due vettori di $\mathcal B$ sono perpendicolari per $g$ (lezione L21).
:::

::: esercizio medio Cambiare base per vedere che un prodotto è definito positivo
Sia $S = \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$ e $\mathcal B' = \{(1, 0), (-2, 1)\}$. (a) Calcola $[g_S]_{\mathcal B'}$ con la Proposizione 20.1. (b) Deduci che $g_S$ è definito positivo.
::: soluzione
(a) $M = \begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}$. Prima
$$SM = \begin{pmatrix} 1 & -2 + 2 \\ 2 & -4 + 5 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix},$$
poi
$${}^tM(SM) = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ -2 + 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$

(b) Con le coordinate $(\lambda_1, \lambda_2)$ nella base $\mathcal B'$ il prodotto di un vettore con sé stesso diventa $\lambda_1^2 + \lambda_2^2$ (Corollario 19.16 con la matrice identità). Se il vettore non è zero, le sue coordinate non sono tutte e due zero, quindi il risultato è positivo. È lo stesso del completamento del quadrato $x_1^2 + 4x_1x_2 + 5x_2^2 = (x_1 + 2x_2)^2 + x_2^2$: le nuove coordinate sono proprio $\lambda_1 = x_1 + 2x_2$ e $\lambda_2 = x_2$.
:::

::: esercizio medio Cauchy–Schwarz e disuguaglianza triangolare con i numeri
Siano $v = (1, -2, 2)$ e $w = (3, 0, 4)$. (a) Verifica Cauchy–Schwarz. (b) Verifica la disuguaglianza triangolare. (c) Trova un vettore $w'$ per cui Cauchy–Schwarz diventa un'uguaglianza.
::: soluzione
(a) Il prodotto è $3 + 0 + 8 = 11$; le lunghezze sono $\sqrt{1 + 4 + 4} = 3$ e $\sqrt{9 + 16} = 5$. Infatti 11 non supera 15.

(b) $v + w = (4, -2, 6)$, lungo $\sqrt{16 + 4 + 36} = \sqrt{56}$. Siccome 56 è meno di 64, $\sqrt{56}$ è meno di $8 = 3 + 5$. Senza calcolatrice si confrontano i quadrati.

(c) Serve un vettore parallelo a $v$, per esempio $w' = -2v = (-2, 4, -4)$. Il prodotto è $-2 \cdot 9 = -18$, senza segno 18; le lunghezze sono 3 e 6, con prodotto 18.
:::

::: esercizio medio Misurare con $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$
Con il prodotto $g_S$: (a) calcola la distanza tra $P = (1, 2)$ e $Q = (2, 1)$ e confrontala con quella euclidea; (b) calcola l'angolo tra $e_1$ ed $e_2$.
::: soluzione
(a) $Q - P = (1, -1)$ e la sua lunghezza al quadrato è $2 \cdot 1 + 2 \cdot 1 \cdot (-1) + 1 = 1$: la distanza è 1. Con il prodotto di tutti i giorni è $\sqrt{1 + 1} = \sqrt2$.

(b) Il prodotto è $S_{12} = 1$; le lunghezze sono $\sqrt{S_{11}} = \sqrt2$ e $\sqrt{S_{22}} = 1$. Il coseno è $\frac{1}{\sqrt2} = \frac{\sqrt2}2$, quindi l'angolo è $\frac\pi4$.
:::

::: esercizio medio Angoli tra polinomi
Su $\R_2[x]$ sia $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. Calcola: (a) $\|x\|$; (b) l'angolo tra $1$ e $x^2$; (c) l'angolo tra $x$ e $1 + x^2$.
::: soluzione
I valori in $-1, 0, 1$: $1$ dà $(1, 1, 1)$, $x$ dà $(-1, 0, 1)$, $x^2$ dà $(1, 0, 1)$, $1 + x^2$ dà $(2, 1, 2)$.

(a) $\|x\|^2 = 1 + 0 + 1 = 2$, quindi $\|x\| = \sqrt2$.

(b) Il prodotto è $1 + 0 + 1 = 2$, le lunghezze $\sqrt3$ e $\sqrt2$: coseno $\frac{2}{\sqrt6} = \frac{\sqrt6}3$, quindi l'angolo è $\arccos\frac{\sqrt6}3$.

(c) Il prodotto è $-2 + 0 + 2 = 0$: i due polinomi sono perpendicolari, l'angolo è $\frac\pi2$.
:::

::: esercizio esame Norme, angolo e distanza con un $g_S$ su $\R^3$
Sia $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ (definita positiva, lezione L19, esercizio 11), $u = {}^t(1, 0, 1)$, $v = {}^t(0, 1, 1)$. Calcola rispetto a $g_S$: (a) $\|u\|$ e $\|v\|$; (b) il coseno dell'angolo tra $u$ e $v$; (c) la distanza tra $u$ e $v$.
::: soluzione
Prima i vettori $Su$ e $Sv$:
$$\begin{aligned} Su &= (1 + 0 + 0,\ 1 + 0 + 0,\ 0 + 0 + 3) = (1, 1, 3), \\ Sv &= (0 + 1 + 0,\ 0 + 2 + 0,\ 0 + 0 + 3) = (1, 2, 3). \end{aligned}$$

(a) $\|u\|^2 = {}^tu\,(Su) = 1 + 0 + 3 = 4$, quindi $\|u\| = 2$. $\|v\|^2 = {}^tv\,(Sv) = 0 + 2 + 3 = 5$, quindi $\|v\| = \sqrt5$.

(b) $g_S(u, v) = {}^tu\,(Sv) = 1 + 0 + 3 = 4$, quindi
$$\cos\vartheta = \frac{4}{2\sqrt5} = \frac{2}{\sqrt5} = \frac{2\sqrt5}5.$$

(c) $v - u = (-1, 1, 0)$ e $S(v - u) = Sv - Su = (0, 1, 0)$. La lunghezza al quadrato è ${}^t(-1, 1, 0)\,(0, 1, 0) = 1$: la distanza è 1. Controllo con lo sviluppo del quadrato: $\|v - u\|^2 = \|v\|^2 - 2g_S(u, v) + \|u\|^2 = 5 - 8 + 4 = 1$.
:::

::: esercizio esame Ortogonalità con un parametro
Sia $g_S$ su $\R^2$ con $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. (a) Per quale $k$ i vettori $u = (1, 0)$ e $v = (k, 1)$ sono ortogonali rispetto a $g_S$? (b) Per quel $k$, quanto vale $\|v\|$? (c) Qual è l'angolo tra $u$ e $(1, 1)$?
::: soluzione
(a) $g_S(u, v) = {}^tu\,S\,v$. La riga ${}^tu\,S$ è la prima riga di $S$, $(2, 1)$, quindi $g_S(u, v) = 2k + 1$. Vale zero per $k = -\frac12$.

(b) $v = \left(-\frac12, 1\right)$ e $Sv = \left(-1 + 1,\ -\frac12 + 2\right) = \left(0, \frac32\right)$. La lunghezza al quadrato è $-\frac12 \cdot 0 + 1 \cdot \frac32 = \frac32$, quindi $\|v\| = \sqrt{\frac32} = \frac{\sqrt6}2$.

(c) Il prodotto è $2 + 1 = 3$, le lunghezze al quadrato sono 2 e $2 + 1 + 1 + 2 = 6$. Il coseno è $\frac{3}{\sqrt{12}} = \frac{\sqrt3}2$, quindi l'angolo è $\frac\pi6$. Con il prodotto di tutti i giorni sarebbe $\frac\pi4$.
:::

::: esercizio difficile Legge del parallelogramma e polarizzazione
Dimostra che in ogni spazio con prodotto scalare definito positivo (a) $\|v + w\|^2 + \|v - w\|^2 = 2\big(\|v\|^2 + \|w\|^2\big)$; (b) $\langle v, w\rangle = \frac14\big(\|v + w\|^2 - \|v - w\|^2\big)$. (c) Controlla entrambe con $v = (1, 2)$, $w = (3, -1)$.
::: soluzione
Sviluppo i due quadrati (lezione L19):
$$\begin{aligned} \|v + w\|^2 &= \|v\|^2 + 2\langle v, w\rangle + \|w\|^2, \\ \|v - w\|^2 &= \|v\|^2 - 2\langle v, w\rangle + \|w\|^2. \end{aligned}$$

(a) Sommando, i pezzi con $\pm 2\langle v, w\rangle$ si cancellano e resta $2\|v\|^2 + 2\|w\|^2$. Nel disegno: in un parallelogramma la somma dei quadrati delle due diagonali è uguale alla somma dei quadrati dei quattro lati.

(b) Togliendo il secondo dal primo, si cancellano le lunghezze di $v$ e di $w$ e resta $4\langle v, w\rangle$.

(c) $v + w = (4, 1)$ e $v - w = (-2, 3)$, con lunghezze al quadrato 17 e 13. Per (a): $17 + 13 = 30 = 2(5 + 10)$. Per (b): $\frac14(17 - 13) = 1$, e infatti $\langle v, w\rangle = 3 - 2 = 1$.
:::

::: esercizio difficile Gli angoli di un triangolo nello spazio
Siano $A = (1, 0, 0)$, $B = (0, 1, 0)$, $C = (0, 0, 2)$. Calcola i coseni dei tre angoli del triangolo $ABC$ e verifica che il triangolo è isoscele. Poi controlla che l'angolo in $C$ vale $\pi$ meno il doppio dell'angolo in $A$.
::: soluzione
L'angolo in un vertice è l'angolo tra i due vettori che partono da quel vertice.

- In $A$: $B - A = (-1, 1, 0)$ e $C - A = (-1, 0, 2)$. Prodotto 1, lunghezze $\sqrt2$ e $\sqrt5$: $\cos\alpha = \frac{1}{\sqrt{10}}$.
- In $B$: $A - B = (1, -1, 0)$ e $C - B = (0, -1, 2)$. Prodotto 1, lunghezze $\sqrt2$ e $\sqrt5$: $\cos\beta = \frac{1}{\sqrt{10}}$.
- In $C$: $A - C = (1, 0, -2)$ e $B - C = (0, 1, -2)$. Prodotto 4, lunghezze $\sqrt5$ e $\sqrt5$: $\cos\gamma = \frac45$.

Gli angoli in $A$ e in $B$ sono uguali e i lati $AC$ e $BC$ sono lunghi tutti e due $\sqrt5$: il triangolo è isoscele. Ora calcolo il coseno di $\pi - 2\alpha$ con le regole $\cos(\pi - t) = -\cos t$ e $\cos 2\alpha = 2\cos^2\alpha - 1$:
$$\cos(\pi - 2\alpha) = -(2\cos^2\alpha - 1) = -\left(\frac{2}{10} - 1\right) = \frac45 = \cos\gamma.$$
Il coseno di $\alpha$ è positivo, quindi $\alpha$ è acuto e $\pi - 2\alpha$ sta tra 0 e $\pi$, come $\gamma$. Tra 0 e $\pi$ il coseno prende ogni valore una volta sola. Quindi $\gamma = \pi - 2\alpha$, cioè $\alpha + \beta + \gamma = \pi$, come deve essere in un triangolo.
:::

## Domande di ripasso

::: domanda Come cambia la matrice di un prodotto scalare quando cambi base? Da dove viene la formula?
$S' = {}^tM\,S\,M$, dove le colonne di $M$ sono le coordinate dei vettori nuovi nella base vecchia. La casella $(i, j)$ di $S'$ è il prodotto tra i vettori nuovi $i$ e $j$, calcolato con le loro coordinate: riga $i$ della trasposta di $M$, per $S$, per colonna $j$ di $M$.
:::

::: domanda Che differenza c'è con la formula di cambiamento di base per le macchine lineari?
Per una macchina lineare si usa $M^{-1}A\,M$, per un prodotto scalare ${}^tM\,S\,M$. Le due formule danno sempre lo stesso risultato solo quando la trasposta di $M$ è anche la sua inversa, cioè quando $M$ è ortogonale (lezione L22).
:::

::: domanda Che cos'è una forma quadratica? Come si trova la sua matrice?
Un polinomio in cui tutti i pezzi hanno grado 2. La matrice simmetrica che la dà è una sola: sulla diagonale i numeri dei quadrati, ai posti $(i, j)$ e $(j, i)$ metà del numero davanti a $x_ix_j$.
:::

::: domanda Come si legge la definita positività di $g_S$ sulla forma quadratica?
$g_S$ è definito positivo esattamente quando la forma $q_S(x) = {}^tx\,S\,x$ è positiva per ogni $x$ diverso da zero. Per verificarlo si può completare il quadrato, o per le $2 \times 2$ controllare che il primo numero della diagonale e il determinante siano positivi.
:::

::: domanda Che cos'è la norma di un vettore? Perché serve un prodotto definito positivo?
È la lunghezza, $\|v\| = \sqrt{\langle v, v\rangle}$. Serve che sotto la radice non ci siano numeri negativi, e che solo il vettore nullo abbia lunghezza zero.
:::

::: domanda Perché $\|\lambda v\| = |\lambda|\,\|v\|$ e non $\lambda\|v\|$?
Perché $\|\lambda v\| = \sqrt{\lambda^2\langle v, v\rangle}$ e la radice di $\lambda^2$ è il valore assoluto di $\lambda$. Con $\lambda = -1$: un vettore e il suo opposto sono lunghi uguali.
:::

::: domanda Enuncia Cauchy–Schwarz e spiega l'idea della dimostrazione.
Il prodotto scalare, preso senza segno, non supera il prodotto delle lunghezze. Per $w$ non nullo si toglie da $v$ la sua parte nella direzione di $w$: il vettore che resta ha lunghezza al quadrato non negativa, e sviluppando si ottiene $\langle v, w\rangle^2 \le \|v\|^2\|w\|^2$.
:::

::: domanda Come si ricava la disuguaglianza triangolare da Cauchy–Schwarz?
Si sviluppa $\|v + w\|^2 = \|v\|^2 + \|w\|^2 + 2\langle v, w\rangle$, e con Cauchy–Schwarz il prodotto scalare si maggiora con $\|v\|\,\|w\|$. Si ottiene $(\|v\| + \|w\|)^2$; poi si prende la radice.
:::

::: domanda Come si definisce la distanza tra due punti? Quali proprietà ha?
È la lunghezza del vettore «arrivo meno partenza», $d(P, Q) = \|Q - P\|$. È positiva tra punti diversi e zero tra un punto e sé stesso, è simmetrica, e una tappa intermedia non accorcia mai la strada.
:::

::: domanda Come si definisce l'angolo tra due vettori? Perché la definizione ha senso?
È l'angolo tra 0 e $\pi$ il cui coseno è il prodotto scalare diviso il prodotto delle lunghezze, per vettori non nulli. Per Cauchy–Schwarz il rapporto sta tra $-1$ e $1$, e tra 0 e $\pi$ il coseno prende ogni valore di quell'intervallo una volta sola.
:::

::: domanda Come capisci se un angolo è acuto, retto o ottuso senza calcolarlo?
Dal segno del prodotto scalare: positivo acuto, zero retto, negativo ottuso.
:::

::: domanda Che cos'è la similarità coseno e perché non dipende dalla lunghezza dei vettori?
È il coseno dell'angolo tra due vettori, usato per confrontare embedding. Se allunghi un vettore di un fattore positivo, sopra e sotto la frazione si moltiplicano per lo stesso numero, e il rapporto non cambia.
:::

## Glossario

```glossario
Matrice di cambiamento di base | $M = [\id]^{\mathcal B'}_{\mathcal B}$: la colonna $i$ contiene le coordinate del vettore nuovo $v_i'$ nella base vecchia $\mathcal B$.
Formula ${}^tMSM$ | Il legame tra le matrici dello stesso prodotto scalare in due basi: $[g]_{\mathcal B'} = {}^tM\,[g]_{\mathcal B}\,M$.
Matrici congruenti | (Termine di Martelli.) Matrici simmetriche legate da ${}^tM\,S\,M$ con $M$ invertibile; hanno determinanti dello stesso segno.
Polinomio omogeneo | Un polinomio i cui pezzi hanno tutti lo stesso grado.
Forma quadratica | Un polinomio omogeneo di grado 2; si scrive in un solo modo come ${}^tx\,S\,x$ con $S$ simmetrica.
$q_S$ | La forma quadratica della matrice simmetrica $S$: il prodotto di $x$ con sé stesso, $g_S(x, x)$.
Norma | La lunghezza di un vettore, $\lVert v \rVert = \sqrt{\langle v, v\rangle}$, con un prodotto definito positivo.
Norma euclidea | La lunghezza con il prodotto di tutti i giorni, $\sqrt{x_1^2 + \dots + x_n^2}$: il teorema di Pitagora.
Vettore unitario | Un vettore lungo 1.
Normalizzare | Dividere un vettore non nullo per la sua lunghezza: si ottiene un vettore lungo 1 con la stessa direzione e lo stesso verso.
Disuguaglianza di Cauchy–Schwarz | $\lvert\langle v, w\rangle\rvert \le \lVert v \rVert\,\lVert w \rVert$; vale l'uguaglianza esattamente quando $v$ e $w$ sono paralleli.
Disuguaglianza triangolare | $\lVert v + w \rVert \le \lVert v \rVert + \lVert w \rVert$; per le distanze, una tappa intermedia non accorcia la strada.
Vettore $\overrightarrow{PQ}$ | Il vettore $Q - P$, che va dal punto $P$ al punto $Q$.
Distanza | $d(P, Q) = \lVert Q - P \rVert$.
Angolo tra due vettori | L'angolo tra 0 e $\pi$ con coseno uguale al prodotto scalare diviso il prodotto delle lunghezze.
Arcocoseno | La funzione che a un numero tra $-1$ e $1$ associa l'angolo tra 0 e $\pi$ con quel coseno.
Similarità coseno | Il coseno dell'angolo tra due vettori, usato per confrontare embedding; non dipende dalle lunghezze.
```

## Checklist

```checklist
- So scrivere la matrice di cambiamento di base e calcolare ${}^tM\,S\,M$, controllando che il risultato sia simmetrico.
- So spiegare perché per i prodotti scalari si usa la trasposta e per le macchine lineari l'inversa.
- So passare da una forma quadratica alla sua matrice simmetrica e viceversa, dimezzando o raddoppiando i pezzi misti.
- So decidere se una forma quadratica in due variabili è definita positiva completando il quadrato.
- So calcolare lunghezze e distanze con il prodotto di tutti i giorni e con un $g_S$ dato.
- So enunciare e spiegare le quattro regole della norma, compresa Cauchy–Schwarz.
- So ricavare la disuguaglianza triangolare per le distanze da quella della norma.
- So calcolare l'angolo tra due vettori, anche tra polinomi, e riconoscere gli angoli notevoli senza calcolatrice.
- So dire se un angolo è acuto, retto o ottuso guardando il segno del prodotto scalare.
- So spiegare che cos'è la similarità coseno e perché non dipende dalla lunghezza dei vettori.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 20 «Prodotti scalari II», pp. 100–104: sezioni 20.A (cambiamento di base), 20.B (forme quadratiche), 20.C (norma), 20.D (distanze), 20.E (angoli, con il riquadro sulla similarità coseno) e 20.F (l'Esercizio 20.13, svolto come esercizio 8). La numerazione è quella delle dispense (Proposizioni 20.1, 20.4, 20.7, 20.11; Definizioni 20.3, 20.6, 20.10, 20.12; Esempi 20.2, 20.5, 20.8, 20.9). Richiami: lezioni L16 (cambiamento di base), L19 (prodotti scalari, Corollario 19.16), teorema di Binet (Teorema 10.4).
- **B. Martelli, *Geometria e algebra lineare***: §7.1.5 (forme quadratiche), §7.2.2–7.2.3 (cambiamento di base, matrici congruenti), §8.1.1–8.1.4 (norma, applicazioni, angoli, distanze). Il libro è gratuito: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Appelli d'esame** (Moodle 2025/26): domande dell'08/02/2024 (7 e 8), del 10/06/2024 (4), del 03/06/2025 (6), del 03/06/2026 (4), del 07/09/2026 (5 e 10); problemi 12 del 07/02/2025, del 05/02/2026 e del 03/07/2026. Le tre domande riportate sono risolte in questi appunti.
- Le parti **«Oltre le dispense»** (segno del determinante e matrici congruenti, completamento dei quadrati e polarizzazione, casi di uguaglianza, collocazione nel libro) e gli esercizi aggiunti servono a collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
