---
corso: MDAG
modulo: AG
lezione: S7
tipo: riassunto
titolo: "Settimana 7: matrice associata, cambio di base, matrici simili"
data: 2026-11-12
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Riassunto settimanale · Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · 09/11 – 13/11/2026
descrizione: >-
  Riassunto della settimana 7 di Algebra lineare e Geometria (MDAG, parte 2): isomorfismi e spazi isomorfi, la
  matrice associata a un'applicazione lineare rispetto a due basi e come si usa; la matrice di cambiamento di base,
  la matrice di una composizione, il cambio di base per un endomorfismo e le matrici simili.
lede: >-
  Le due lezioni della settimana in poche pagine: come un'applicazione lineare diventa una matrice una volta scelte
  le basi, come si traducono le coordinate da una base a un'altra, e come cambia la matrice di un endomorfismo
  quando si cambia base, con le domande vere degli appelli.
materiale: dispense
scheda:
  Lezioni: "[L15](L15_applicazioni_lineari_2.html) mar 10/11 · [L16](L16_applicazioni_lineari_3.html) gio 12/11, nel canale B"
  Dispense: Buzano e Radeschi 2026, pp. 74–84
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni L15 e L16 di Algebra lineare e Geometria, scritti sulle dispense 2026 del corso
  (R. Buzano, M. Radeschi)
appunti_html: appunti/MDAG/riassunto_settimana_07_AG.html
genera_html: true
---

## In breve

- Un **isomorfismo** è un'applicazione lineare biettiva. Due spazi sono **isomorfi** esattamente quando hanno la stessa dimensione.
- Scelte una base in partenza e una in arrivo, ogni applicazione lineare ha una **matrice associata**: nella colonna $j$ ci sono le coordinate, nella base di arrivo, dell'immagine del vettore $j$ della base di partenza.
- Con la matrice associata l'applicazione diventa un prodotto: coordinate dell'uscita = matrice per coordinate dell'entrata.
- La **matrice di cambiamento di base** è la matrice associata all'identità con due basi diverse: traduce le coordinate da una base all'altra.
- La matrice di una **composizione** è il prodotto delle matrici, con quella che agisce per prima **a destra**.
- Per un **endomorfismo**, cambiando base la matrice $A$ diventa $M^{-1}AM$. Due matrici legate così si chiamano **simili**.
- Matrici simili hanno lo stesso rango, lo stesso determinante e la stessa traccia; il viceversa non vale.

## L15 · La matrice associata (mar 10/11)

Un'applicazione lineare che non perde niente e produce tutto mette in corrispondenza perfetta due spazi: è un **isomorfismo**. Per il teorema della dimensione può esistere solo tra spazi della stessa dimensione, e tra due spazi della stessa dimensione esiste sempre. Per esempio i polinomi di grado al massimo 2 e $\R^3$: a $ax^2 + bx + c$ corrisponde $(a, b, c)$.

Per fare i conti con un'applicazione lineare $f \colon V \to W$ servono i numeri. Si sceglie una base $\mathcal B$ di $V$ e una base $\mathcal C$ di $W$, e si costruisce la **matrice associata** $[f]^{\mathcal B}_{\mathcal C}$ in tre passi:

1. si calcola l'immagine di ogni vettore di $\mathcal B$;
2. si scrive ogni immagine in **coordinate** rispetto a $\mathcal C$, risolvendo un sistema se la base non è quella canonica;
3. si mettono le coordinate **in colonna**, nell'ordine dei vettori di $\mathcal B$.

Con $T(x, y) = (x + y,\ 2x)$ e le basi canoniche il conto è immediato: $T(1, 0) = (1, 2)$ e $T(0, 1) = (1, 0)$, quindi la matrice è $\begin{pmatrix} 1 & 1 \\ 2 & 0 \end{pmatrix}$. Con la base $\mathcal B = \{v_1 = (1, 0),\ v_2 = (1, 1)\}$ in partenza e in arrivo:

- $T(v_1) = (1, 2) = -1 \cdot v_1 + 2 \cdot v_2$, coordinate $(-1, 2)$;
- $T(v_2) = (2, 2) = 0 \cdot v_1 + 2 \cdot v_2$, coordinate $(0, 2)$.

La matrice è $[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} -1 & 0 \\ 2 & 2 \end{pmatrix}$: la stessa applicazione, scritta con altri numeri.

```grafico
titolo: Due strade che danno lo stesso risultato. In alto si applica f ai vettori. In basso si lavora con le coordinate: la matrice associata moltiplica le coordinate dell'entrata e dà quelle dell'uscita. Le frecce verticali sono il passaggio alle coordinate, nella base di partenza B a sinistra e in quella di arrivo C a destra
x: 0 12.4
y: 0 4.8
assi: no
griglia: no
proporzioni: libere
poligono: 1.6 3.4 4.6 3.4 4.6 4.4 1.6 4.4 | blu | pieno
testo: 3.1 3.9 | blu | "vettore v"
poligono: 7.8 3.4 10.8 3.4 10.8 4.4 7.8 4.4 | blu | pieno
testo: 9.3 3.9 | blu | "f(v)"
freccia: 4.7 3.9 7.7 3.9 | blu
testo: 6.2 4.25 | blu | "f"
poligono: 1.6 0.6 4.6 0.6 4.6 1.6 1.6 1.6 | ambra | pieno
testo: 3.1 1.1 | ambra | "coordinate di v"
poligono: 7.8 0.6 10.8 0.6 10.8 1.6 7.8 1.6 | ambra | pieno
testo: 9.3 1.1 | ambra | "coordinate di f(v)"
freccia: 4.7 1.1 7.7 1.1 | ambra
testo: 6.2 1.45 | ambra | "matrice associata"
freccia: 3.1 3.3 3.1 1.7 | grigio
freccia: 9.3 3.3 9.3 1.7 | grigio
testo: 2.2 2.5 | grigio | "base B"
testo: 10.2 2.5 | grigio | "base C"
```

In formule (proposizione 15.9): $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}$. Il risultato del prodotto sono **coordinate**, non ancora il vettore.

L'**identità** ha la matrice identità quando la base è la stessa in partenza e in arrivo (proposizione 15.11). Con due basi diverse no: diventa la matrice di cambiamento di base della lezione dopo.

::: prova Qual è la matrice della derivata $D(p) = p'$ da $\R_2[x]$ a $\R_1[x]$, rispetto alle basi $\{1, x, x^2\}$ e $\{1, x\}$?
$D(1) = 0$, $D(x) = 1$, $D(x^2) = 2x$: le colonne sono $(0, 0)$, $(1, 0)$, $(0, 2)$. La matrice è $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$.
:::

> [!RICORDA]
> - Isomorfi: stessa dimensione.
> - Colonna $j$ della matrice associata: coordinate dell'immagine del vettore $j$ della base di partenza.
> - Coordinate dell'uscita = matrice per coordinate dell'entrata.

## L16 · Cambio di base e matrici simili (gio 12/11)

Le coordinate di un vettore dipendono dalla base. La **matrice di cambiamento di base** da $\mathcal B$ a $\mathcal C$ è $[\id]^{\mathcal B}_{\mathcal C}$: nelle colonne ci sono i vettori di $\mathcal B$ scritti in coordinate rispetto a $\mathcal C$, e moltiplicandola per le coordinate in $\mathcal B$ si ottengono quelle in $\mathcal C$.

- **Verso la base canonica** non c'è niente da calcolare: i vettori di $\mathcal B$ in colonna.
- **Nel verso opposto** si prende l'inversa.
- **Tra due basi qualsiasi** si passa dalla canonica: prima da $\mathcal B$ alla canonica, poi dalla canonica a $\mathcal C$.

Per la **composizione** vale la proposizione 16.6:

$$[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f]^{\mathcal B}_{\mathcal C}.$$

L'applicazione che agisce per prima sta a destra, come nella scrittura $g \circ f$. La base «in mezzo» deve essere la stessa: quella di arrivo di $f$ e di partenza di $g$.

Un **endomorfismo** parte e arriva nello stesso spazio. Se $A$ è la sua matrice nella base canonica e $M$ ha in colonna i vettori di una base nuova $\mathcal B$, la matrice nella base nuova è $M^{-1}AM$.

```grafico
titolo: Perché la formula è M⁻¹AM. Si parte dalle coordinate nella base nuova (a sinistra). M le traduce nella base canonica, A applica l'endomorfismo, M⁻¹ riporta il risultato nella base nuova. Nel prodotto le matrici si scrivono da destra a sinistra
x: 0 12.4
y: 0 3.6
assi: no
griglia: no
proporzioni: libere
poligono: 0.3 1.2 2.7 1.2 2.7 2.4 0.3 2.4 | ambra | pieno
testo: 1.5 2.0 | ambra | "coordinate"
testo: 1.5 1.55 | ambra | "base nuova"
freccia: 2.8 1.8 3.8 1.8 | grigio
testo: 3.3 2.2 | grigio | "M"
poligono: 3.9 1.2 5.9 1.2 5.9 2.4 3.9 2.4 | blu | pieno
testo: 4.9 1.8 | blu | "canonica"
freccia: 6.0 1.8 7.0 1.8 | grigio
testo: 6.5 2.2 | grigio | "A"
poligono: 7.1 1.2 9.1 1.2 9.1 2.4 7.1 2.4 | blu | pieno
testo: 8.1 1.8 | blu | "canonica"
freccia: 9.2 1.8 10.2 1.8 | grigio
testo: 9.7 2.2 | grigio | "M⁻¹"
poligono: 10.3 1.2 12.2 1.2 12.2 2.4 10.3 2.4 | ambra | pieno
testo: 11.25 2.0 | ambra | "coordinate"
testo: 11.25 1.55 | ambra | "base nuova"
testo: 6.2 0.5 | grigio | "prima M, poi A, poi M⁻¹"
```

Con l'esempio di prima: $A = \begin{pmatrix} 1 & 1 \\ 2 & 0 \end{pmatrix}$ e $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, con $M^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$. Il prodotto $M^{-1}AM$ dà $\begin{pmatrix} -1 & 0 \\ 2 & 2 \end{pmatrix}$, la stessa matrice trovata colonna per colonna nella L15.

Due matrici $A$ e $B$ sono **simili** se $A = M^{-1}BM$ per una matrice invertibile $M$: descrivono lo stesso endomorfismo in due basi. Hanno lo stesso rango, lo stesso determinante e la stessa traccia. Nell'esempio: traccia 1 e determinante $-2$ per tutte e due. Ma due matrici con queste tre cose uguali possono non essere simili: l'identità è simile solo a sé stessa, perché $M^{-1} I M = I$.

::: prova Qual è la matrice di cambiamento di base dalla base $\{(2, 1), (1, 1)\}$ alla base canonica? E dalla canonica a questa base?
$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, con i vettori in colonna. Nel verso opposto l'inversa: $\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$.
:::

> [!RICORDA]
> - Cambiamento di base verso la canonica: vettori in colonna. Verso opposto: inversa.
> - Composizione: prodotto delle matrici, la prima che agisce a destra.
> - Endomorfismo in una base nuova: $M^{-1}AM$. Simili: stesso rango, determinante e traccia, ma non basta.

## Verso l'esame

- **La matrice associata** in una base data: appelli del 24/01/2024, 03/06/2025, 15/01/2026, 05/02/2026.
- **La matrice di cambiamento di base**: 10/06/2024, 06/09/2024, 10/07/2025, 02/09/2025.
- **La composizione**: 08/02/2024, 16/01/2025, 03/06/2025, 03/07/2026.
- **Nei problemi** la matrice in una base nuova prepara la diagonalizzazione, che arriva con gli autovalori: per esempio il problema 11 del 07/09/2026.
- Nelle 4 facciate di appunti conviene avere: i tre passi della matrice associata, la formula della composizione con le basi scritte, e $M^{-1}AM$ con «vettori nuovi in colonna».
- Appelli 2026/27: venerdì 22/01/2027 e venerdì 05/02/2027, alle 14:00; 4 facciate di appunti scritti a mano, niente calcolatrice.

## Domande di ripasso

::: domanda Quando due spazi vettoriali sono isomorfi?
Quando hanno la stessa dimensione.
:::

::: domanda Come si costruisce la matrice associata a un'applicazione lineare?
Si calcolano le immagini dei vettori della base di partenza, si scrivono in coordinate rispetto alla base di arrivo, e si mettono in colonna.
:::

::: domanda Che cosa fa la matrice di cambiamento di base da $\mathcal B$ a $\mathcal C$?
Moltiplicata per le coordinate di un vettore in $\mathcal B$, dà le sue coordinate in $\mathcal C$.
:::

::: domanda Nella matrice di $g \circ f$, quale matrice sta a destra?
Quella di $f$, che agisce per prima.
:::

::: domanda Come cambia la matrice di un endomorfismo passando a una base nuova?
Diventa $M^{-1}AM$, dove $M$ ha in colonna i vettori della base nuova.
:::

::: domanda Due matrici con stesso rango, determinante e traccia sono simili?
Non per forza: sono condizioni necessarie, non sufficienti.
:::

## Quiz d'esame

Le prime sette sono domande vere degli appelli, che nelle lezioni L15 e L16 sono solo citate o riprese con altri numeri; l'ultima è sul modello delle domande sugli isomorfismi. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma.

```quiz
D: Appello del 10/06/2024, domanda 8. Nello spazio $\R_1[x]$, la matrice del cambiamento di base da $\mathcal B = \{2x, 3\}$ a $\mathcal C = \{x + 1, x - 1\}$ è:
+ $\begin{pmatrix} 1 & 3/2 \\ 1 & -3/2 \end{pmatrix}$
- $\begin{pmatrix} 2 & 2 \\ 1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2/3 \\ 1/3 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 3/2 \end{pmatrix}$
= Si scrivono i vettori di $\mathcal B$ nella base $\mathcal C$: $2x = 1 \cdot (x + 1) + 1 \cdot (x - 1)$ e $3 = \frac{3}{2}(x + 1) - \frac{3}{2}(x - 1)$. Le coordinate vanno in colonna. È la risposta (a) della soluzione ufficiale. La più insidiosa è la quarta, che ha in colonna i vettori di $\mathcal C$ nella base $\{x, 1\}$: è il cambiamento da $\mathcal C$ alla canonica.

D: Appello del 10/07/2025, domanda 6. La matrice associata all'identità $\mathrm{Id} \colon \R^3 \to \R^3$ dalla base $\mathcal B = \{e_2, e_3, e_1\}$ alla base $\mathcal C = \{e_3, e_2, e_1\}$ è:
- $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$
- il problema non è ben definito
+ $\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$
= Prima colonna: $e_2$ è il secondo vettore di $\mathcal C$, coordinate $(0, 1, 0)$. Seconda: $e_3$ è il primo, $(1, 0, 0)$. Terza: $e_1$ è il terzo, $(0, 0, 1)$. È la risposta (c) della soluzione ufficiale. La più insidiosa è la matrice identità: l'identità ha la matrice identità solo con la stessa base, nello stesso ordine.

D: Appello del 02/09/2025, domanda 8. Siano date tre basi $\mathcal A, \mathcal B, \mathcal C$ di $\R^2$, con $[\mathrm{Id}]^{\mathcal A}_{\mathcal B} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ e $[\mathrm{Id}]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$. Quale delle seguenti è $[\mathrm{Id}]^{\mathcal A}_{\mathcal C}$?
- $\begin{pmatrix} -1 & 2 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ -1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
+ $\begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}$
= Da $\mathcal A$ a $\mathcal C$ si passa per $\mathcal B$: $[\mathrm{Id}]^{\mathcal A}_{\mathcal C} = \left([\mathrm{Id}]^{\mathcal C}_{\mathcal B}\right)^{-1} [\mathrm{Id}]^{\mathcal A}_{\mathcal B}$. L'inversa della seconda matrice ha $+1$ al posto di $-1$, e il prodotto dà la risposta (e) della soluzione ufficiale. La più insidiosa è la terza, che viene moltiplicando senza invertire.

D: Appello del 03/06/2025, domanda 5. Sia $L_A \colon \R^2 \to \R^2$ la moltiplicazione a sinistra per una matrice $A$. Rispetto alla base $\mathcal B = \{(1, 0), (1, 1)\}$, $L_A$ ha matrice associata $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$. La matrice $A$ è:
- $\begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$
+ $\begin{pmatrix} 3 & 0 \\ 2 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 3 \\ 2 & 1 \end{pmatrix}$
= Qui si torna dalla base $\mathcal B$ alla canonica: $A = M \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} M^{-1}$, con $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. È la risposta (c) della soluzione ufficiale. La più insidiosa è la seconda: la matrice nella base $\mathcal B$ non è la matrice $A$.

D: Appello dell'08/02/2024, domanda 5. La composizione $S \circ T$ di $S \colon \R^3 \to \R^2$, $S(x, y, z) = (x + y, 2z)$, e $T \colon \R^2 \to \R^3$, $T(x, y) = (x + y, x - y, y)$, è:
- $(x, y, z) \mapsto (2x, 2y, 2z)$
- $(x, y) \mapsto (x + 2y, 2x - 2y)$
- $(x, y, z) \mapsto (x + y + 2z, x + y - 2z, 2z)$
+ $(x, y) \mapsto (2x, 2y)$
- non è ben definita
= Agisce prima $T$: $S(x + y, x - y, y) = ((x + y) + (x - y),\ 2y) = (2x, 2y)$. Parte da $\R^2$ e arriva in $\R^2$. È la risposta (d) della soluzione ufficiale. La più insidiosa è la terza, che è $T \circ S$.

D: Appello del 03/07/2026, domanda 5. Dati spazi vettoriali $U, V, W$, siano $S \colon U \to V$ e $T \colon V \to W$ applicazioni lineari con $T \circ S(u) = 0_W$ per ogni $u \in U$. Quale informazione si può dedurre?
- $\ker(T) \subseteq \mathrm{Im}(S)$
- $\mathrm{Im}(S) = \ker(T)$
- $\mathrm{Im}(S) = V$
+ $\mathrm{Im}(S) \subseteq \ker(T)$
- $\ker(S) \subseteq \mathrm{Im}(T)$
= Ogni vettore $S(u)$ dell'immagine di $S$ viene mandato da $T$ nello zero, quindi sta nel nucleo di $T$. È la risposta (d) della soluzione ufficiale. La più insidiosa è l'uguaglianza: nel nucleo di $T$ possono esserci anche vettori che $S$ non produce.

D: Appello del 03/06/2025, domanda 3. Sugli spazi dei polinomi siano $L(p(x)) = \frac{p(x) - p(0)}{x}$ e $R(p(x)) = x\,p(x)$. L'operatore $C = L \circ R - R \circ L$ soddisfa:
- $C(a + bx + cx^2 + dx^3) = 0$
- $C(a + bx + cx^2 + dx^3) = 1$
- $C(a + bx + cx^2 + dx^3) = a + bx + cx^2 + dx^3$
+ $C(a + bx + cx^2 + dx^3) = a$
- $C(a + bx + cx^2 + dx^3) = bx + cx^2 + dx^3$
= $L(R(p)) = \frac{x\,p(x) - 0}{x} = p(x)$, mentre $R(L(p)) = p(x) - p(0)$. La differenza è $p(0)$, cioè $a$. È la risposta (d) della soluzione ufficiale. La più insidiosa è 0, di chi pensa che le due composizioni siano uguali: l'ordine conta.

D: Sul modello delle domande sugli isomorfismi. Quale coppia è fatta di due spazi vettoriali reali isomorfi?
+ $\R_3[x]$ e le matrici $2 \times 2$
- $\R_2[x]$ e $\R^2$
- $\R^3$ e le matrici $2 \times 2$
- $\R_3[x]$ e $\R^3$
- $\R^2$ e $\R^3$
= Conta solo la dimensione: i polinomi di grado al massimo 3 hanno dimensione 4, come le matrici $2 \times 2$. La più insidiosa è la quarta: il 3 di $\R_3[x]$ è il grado massimo, e la dimensione è 4.
```

## Fonti

- Le lezioni complete: [L15 · Applicazioni lineari II](L15_applicazioni_lineari_2.html) e [L16 · Applicazioni lineari III](L16_applicazioni_lineari_3.html), con gli esempi, i disegni e gli esercizi.
- Dispense 2026 del corso (R. Buzano, M. Radeschi), lezioni 15 e 16, pp. 74–84.
- Appelli dell'08/02/2024, 10/06/2024, 03/06/2025, 10/07/2025, 02/09/2025 e 03/07/2026, con le soluzioni ufficiali.
