---
corso: MDAG
modulo: AG
lezione: L24
titolo: Lo spazio euclideo III
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L24
descrizione: >-
  Appunti della lezione L24 di Algebra lineare e Geometria (MDAG, parte 2): angoli fra rette, fra retta e piano e fra
  piani, distanze fra punti, fra punto e retta, fra rette sghembe e fra punto e piano, con quiz nello stile dell'esame
  ed esercizi svolti.
lede: >-
  Quando due rette o due piani si incontrano si misura l'angolo che formano; quando non si incontrano si misura quanto
  sono lontani. La strada più corta tra due oggetti è sempre quella perpendicolare: da questa idea vengono tutte le
  formule della lezione, che all'esame diventano conti di poche righe.
materiale: dispense
scheda:
  Dispense: lezione 24 · pp. 122–128
  Libro: Martelli, §9.2.9, §9.2.10 e §8.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 24 «Lo spazio euclideo III»; B. Martelli, Geometria e algebra lineare, §8.1 e §9.2
appunti_html: appunti/MDAG/L24_spazio_euclideo_3.html
genera_html: true
---

## In breve

- Se due rette o piani si **incontrano** se ne misura l'**angolo**; se non si incontrano, la **distanza**.
- **Angolo tra due rette** che si incrociano: è l'angolo tra le loro direzioni. Dei due angoli possibili si prende sempre quello **acuto o retto**.
- **Angolo tra una retta e un piano**: è l'angolo tra la retta e la sua **ombra** sul piano. Più in fretta, si calcola con il **vettore normale**: i due angoli sommano a un angolo retto.
- **Angolo tra due piani**: è l'angolo acuto tra i loro **vettori normali**.
- La **distanza** è sempre la lunghezza del **segmento più corto**, che è quello **perpendicolare**.
- **Punto e retta**: area del parallelogramma divisa per la base. **Rette sghembe**: volume del parallelepipedo diviso per l'area della base. **Punto e piano**: una formula con l'equazione del piano.
- All'esame non c'è la calcolatrice: gli angoli si lasciano come $\arccos\frac 13$, le distanze come $\frac{2}{7}\sqrt{133}$, e vanno riconosciuti i valori notevoli.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Angoli e distanze: l'idea (p. 122)

Pensa a due strade. Se si **incrociano**, la domanda naturale è: con che **angolo**? Se invece una passa su un **cavalcavia** sopra l'altra, non si toccano, ma non sono nemmeno parallele: la domanda naturale è quanto sono **lontane**, cioè l'altezza del cavalcavia. Nello spazio le rette del cavalcavia si chiamano **sghembe**.

La lezione L23 ha chiamato **incidenti** due sottospazi affini che si incontrano. Le dispense aprono la lezione 24 così: per due sottospazi incidenti si studia l'**angolo**, per due sottospazi che non si incontrano la **distanza**.

| Coppia | Se si incontrano | Se non si incontrano |
|---|---|---|
| due rette | angolo (Definizione 24.1) | distanza (Definizione 24.13) |
| retta e piano | angolo (Definizione 24.2) | distanza (oltre le dispense: vedi la sezione sul piano) |
| due piani | angolo diedrale (Definizione 24.6) | distanza (oltre le dispense) |
| un punto e una retta o un piano | distanza zero | distanza (Definizioni 24.10 e 24.16) |

Tutto si basa sul prodotto scalare di tutti i giorni e sulla lezione L20. In particolare l'**angolo tra due vettori** non nulli è l'angolo tra 0 e $\pi$ il cui coseno è il prodotto scalare diviso il prodotto delle lunghezze (Definizione 20.12):

$$\cos\vartheta = \frac{\langle v, w \rangle}{\lVert v \rVert \lVert w \rVert}.$$

L'angolo è acuto, retto o ottuso a seconda che il prodotto scalare sia positivo, zero o negativo.

Senza calcolatrice, questi valori vanno riconosciuti al volo:

| Angolo $\vartheta$ | In gradi | $\cos\vartheta$ | $\sin\vartheta$ |
|---|---|---|---|
| $0$ | $0^\circ$ | $1$ | $0$ |
| $\frac{\pi}{6}$ | $30^\circ$ | $\frac{\sqrt 3}{2}$ | $\frac 12$ |
| $\frac{\pi}{4}$ | $45^\circ$ | $\frac{\sqrt 2}{2} = \frac{1}{\sqrt 2}$ | $\frac{\sqrt 2}{2}$ |
| $\frac{\pi}{3}$ | $60^\circ$ | $\frac 12$ | $\frac{\sqrt 3}{2}$ |
| $\frac{\pi}{2}$ | $90^\circ$ | $0$ | $1$ |
| $\frac{2\pi}{3}$ | $120^\circ$ | $-\frac 12$ | $\frac{\sqrt 3}{2}$ |
| $\frac{3\pi}{4}$ | $135^\circ$ | $-\frac{\sqrt 2}{2}$ | $\frac{\sqrt 2}{2}$ |
| $\pi$ | $180^\circ$ | $-1$ | $0$ |

La colonna del seno serve per la scorciatoia dell'angolo tra una retta e un piano, più avanti. Per gli altri valori la risposta resta scritta con l'arcocoseno: nei quiz d'esame compaiono proprio risposte come $\arccos\frac 13$ o $\arccos\frac{6}{\sqrt{42}}$.

::: prova Due rette dello spazio hanno la stessa direzione e nessun punto in comune. Si calcola l'angolo o la distanza?
La distanza: non si incontrano. Sono due rette parallele.
:::

> [!RICORDA]
> - Si incontrano: angolo. Non si incontrano: distanza.
> - Tieni a mente i coseni degli angoli notevoli; gli altri angoli si lasciano con l'arcocoseno.

## L'angolo tra due rette (p. 122)

Le dispense trattano tre casi: due rette, una retta e un piano, due piani. Il primo è il più diretto: si guarda l'angolo tra le direzioni.

> [!DEF] 24.1 · Angolo tra rette
> Siano $r$ e $r'$ due rette in $\R^3$ che si intersecano in un punto $P$. Abbiamo $r = P + \Span(v)$ e $r' = P + \Span(v')$, e definiamo l'**angolo fra $r$ e $r'$** come l'angolo $\vartheta$ formato da $v$ e $v'$.

**Come si legge.**

- Le rette devono **incontrarsi** in un punto $P$: per due rette sghembe questa definizione non si applica.
- $v$ e $v'$ sono i **vettori direzione** delle due rette.
- Due rette che si incrociano formano **due** angoli, $\vartheta$ e $\pi - \vartheta$: girare $v$ nel verso opposto rende ottuso un angolo acuto. Le dispense scelgono sempre quello **acuto o retto**.

Siccome $\cos(\pi - \vartheta) = -\cos\vartheta$, scegliere l'angolo acuto vuol dire togliere il segno al prodotto scalare:

$$\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}.$$

```grafico
titolo: Due rette incidenti formano due angoli, $\vartheta$ e $\pi - \vartheta$: si sceglie quello acuto
assi: no
griglia: no
x: -3 3
y: -2 2.4
retta: -2.5 0 2.5 0 | accento | $r$ | ne
retta: -1.8 -1.8 1.8 1.8 | blu | $r'$ | se
vettore: 0 0 1.6 0 | accento | spesso | $v$ | s
vettore: 0 0 1.2 1.2 | blu | spesso | $v'$ | no
arco: 0 0 0.8 0 pi/4 | ambra | $\vartheta$
arco: 0 0 0.5 pi/4 pi | grigio | $\pi - \vartheta$
punto: 0 0 | $P$ | so
```

> [!ESEMPIO] Due rette che formano un angolo di $\frac{\pi}{3}$
> Le rette $r = (1, 0, 0) + t\,(1, 1, 0)$ e $r' = (1, 0, 0) + s\,(0, 1, 1)$ passano tutte e due per $P = (1, 0, 0)$. Con $v = (1, 1, 0)$ e $v' = (0, 1, 1)$:
> - il prodotto scalare è $0 + 1 + 0 = 1$;
> - le lunghezze sono $\sqrt 2$ e $\sqrt 2$;
> - il coseno è $\frac{1}{\sqrt 2 \cdot \sqrt 2} = \frac 12$, quindi l'angolo è $\frac{\pi}{3}$, cioè 60°.

> [!ESEMPIO] Quando il conto dà un angolo ottuso
> Le rette per l'origine con direzioni $v = (1, 0, 0)$ e $v' = (-1, 1, 0)$: il coseno è $\frac{-1}{1 \cdot \sqrt 2} = -\frac{\sqrt 2}{2}$, cioè $\frac{3\pi}{4}$, ottuso. L'angolo tra le **rette** è $\pi - \frac{3\pi}{4} = \frac{\pi}{4}$: lo stesso che si ottiene togliendo il segno, $\frac{1}{\sqrt 2} = \frac{\sqrt 2}{2}$.

> [!TRAPPOLA] Angolo tra vettori e angolo tra rette
> Tra due **vettori** l'angolo può essere ottuso. Tra due **rette** no: il risultato sta tra 0 e $\frac{\pi}{2}$. Se trovi un coseno negativo, stai guardando l'angolo tra i vettori: togli il segno meno.

::: prova Che angolo formano due rette che si incontrano, con direzioni $(1, 1, 0)$ e $(0, 0, 1)$?
Il prodotto scalare è 0: l'angolo è retto, $\frac{\pi}{2}$.
:::

> [!RICORDA]
> - Angolo tra rette = angolo tra le direzioni, con il prodotto scalare **senza segno**.
> - Il risultato è sempre acuto o retto.

## L'angolo tra una retta e un piano (pp. 122–124)

Immagina un'asta piantata storta nel pavimento. L'angolo con il pavimento si misura guardando l'**ombra** dell'asta quando il sole è esattamente sopra. L'ombra è la proiezione ortogonale dell'asta sul pavimento (lezione L21), e l'angolo cercato è quello tra l'asta e la sua ombra. Le dispense lo scrivono così.

> [!DEF] 24.2 · Angolo tra retta e piano
> Siano $r$ una retta e $\pi$ un piano che si intersecano in un punto $P$. Definiamo l'angolo $\vartheta$ fra $r$ e $\pi$ nel modo seguente. Trasliamo l'origine in modo che $P = 0$. A questo punto $\pi$ è un sottospazio vettoriale e definiamo il vettore $v' = p_\pi(v)$ facendo la proiezione ortogonale di $v$ su $\pi$. Se $v' = 0$ poniamo $\vartheta = \frac{\pi}{2}$, altrimenti definiamo $\vartheta$ come l'angolo fra $v$ e $v'$.

**Come si legge.**

- $v$ è la direzione della retta.
- «Spostiamo l'origine nel punto d'incontro» serve solo a far passare il piano per l'origine, così si può proiettare. In pratica si usa la **giacitura** del piano.
- $p_\pi(v)$ è l'**ombra** di $v$ sul piano.
- Se l'ombra è nulla, l'asta è verticale: l'angolo è retto.

L'angolo così è **sempre acuto o retto**. Il resto $v - p_\pi(v)$ è perpendicolare all'ombra, quindi il prodotto scalare tra $v$ e la sua ombra è la lunghezza al quadrato dell'ombra, mai negativa.

Per calcolare l'ombra, le dispense ricordano la formula della lezione L21: con una **base ortogonale** $v_1, v_2$ del piano, che si trova sempre con Gram–Schmidt,

$$p_\pi(v) = \frac{\langle v, v_1 \rangle}{\langle v_1, v_1 \rangle} v_1 + \frac{\langle v, v_2 \rangle}{\langle v_2, v_2 \rangle} v_2.$$

Ecco l'esempio delle dispense.

> [!ESEMPIO] 24.3
> Prendiamo $\pi = \{x + y - z = 0\} \subset \R^3$ e il vettore $e_3$. Cerchiamo prima una base ortogonale per $\pi$ e troviamo ad esempio
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}.$$
> A questo punto determiniamo la proiezione ortogonale su $\pi$ di un generico vettore di $\R^3$ con la formula precedente:
> $$p_\pi\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \frac{x + y + 2z}{6} \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} + \frac{x - y}{2} \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \frac 13 \begin{pmatrix} 2x - y + z \\ -x + 2y + z \\ x + y + 2z \end{pmatrix}.$$
> Quindi la matrice associata a $p_\pi$ nella base canonica è
> $$\frac 13 \begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}.$$
> Con questa matrice possiamo calcolare la proiezione ortogonale su $\pi$ di qualsiasi vettore di $\R^3$. In particolare $p_\pi(e_3) = \frac 13 (1, 1, 2)$, e allora l'angolo fra $e_3$ e $\pi$ è
> $$\vartheta = \arccos \frac{\langle (1, 1, 2), (0, 0, 1) \rangle}{\lVert (1, 1, 2) \rVert \, \lVert (0, 0, 1) \rVert} = \arccos \frac{2}{\sqrt 6} = \arccos \frac{\sqrt 6}{3} \simeq 0{,}615,$$
> che corrisponde a un angolo di circa $35{,}3^\circ$.

> [!ESEMPIO] · i passaggi dell'Esempio 24.3
> 1. **Da dove viene la base ortogonale.** Un primo vettore del piano si trova a occhio: $v_2 = (1, -1, 0)$, perché $1 - 1 - 0 = 0$. Il secondo deve stare nel piano ed essere perpendicolare a $v_2$. Il prodotto vettoriale tra la normale $n = (1, 1, -1)$ e $v_2$ fa proprio questo: dà $(-1, -1, -2)$, cioè, cambiando segno, $v_1 = (1, 1, 2)$. Controllo: $1 + 1 - 2 = 0$ e $\langle v_1, v_2 \rangle = 1 - 1 + 0 = 0$.
> 2. **I numeri davanti.** $\langle (x, y, z), v_1 \rangle = x + y + 2z$ e $\langle v_1, v_1 \rangle = 6$; $\langle (x, y, z), v_2 \rangle = x - y$ e $\langle v_2, v_2 \rangle = 2$.
> 3. **La somma.** Prima componente:
>    $$\frac{x + y + 2z}{6} + \frac{x - y}{2} = \frac{x + y + 2z + 3x - 3y}{6} = \frac{4x - 2y + 2z}{6} = \frac{2x - y + z}{3}.$$
>    Allo stesso modo le altre due.
> 4. **L'angolo.** L'ombra di $e_3$ è la terza colonna della matrice, $\frac 13 (1, 1, 2)$. Il fattore $\frac 13$ non cambia gli angoli. $\langle (1, 1, 2), e_3 \rangle = 2$, la lunghezza di $(1, 1, 2)$ è $\sqrt 6$ e quella di $e_3$ è 1. Infine $\frac{2}{\sqrt 6} = \frac{2\sqrt 6}{6} = \frac{\sqrt 6}{3}$.

Con la calcolatrice di Gauss puoi rifare il punto 1 con Gram–Schmidt: le righe sono due vettori qualsiasi del piano, $(1, -1, 0)$ e $(1, 0, 1)$. Controlla che soddisfano $x + y - z = 0$. Lo strumento trova $u_2 = \left(\frac 12, \frac 12, 1\right)$ e nella base finale lo riscrive senza frazioni come $(1, 1, 2)$: è proprio il $v_1$ delle dispense.

```widget gauss
titolo: Una base ortogonale del piano $x + y - z = 0$ con Gram–Schmidt
matrice: 1 -1 0; 1 0 1
modo: gram-schmidt
```

### La scorciatoia del vettore normale

Il piano ha una direzione speciale che non sta **dentro** di lui: quella del vettore normale. L'angolo con il piano e l'angolo con la normale, insieme, fanno un angolo retto. Le dispense lo scrivono così.

> [!PROP] 24.4
> L'angolo fra $v$ e il piano $\pi$ e l'angolo fra $v$ e il vettore ortogonale a $\pi$ che forma un angolo acuto con $v$ si sommano a $\frac{\pi}{2}$.

**Come si legge.** Se l'asta forma 30° con il pavimento, forma 60° con la verticale. Si usa la normale che forma un angolo acuto con l'asta, cioè quella che punta dalla stessa parte.

```grafico
titolo: Vista di taglio: il piano $\pi$ è la retta viola, $n$ gli è ortogonale; $\vartheta$ (fra $v$ e la sua ombra) e $\alpha$ (fra $v$ e $n$) sommano a un angolo retto
assi: no
griglia: no
x: -3 3
y: -0.8 2.8
retta: 3 0 -2.6 0 | viola | spesso | $\pi$ | ne
vettore: 0 0 0 2.4 | ambra | spesso | $n$ | e
vettore: 0 0 2 1.414 | accento | spesso | $v$ | ne
vettore: 0 0 2 0 | blu | spesso | $p_\pi(v)$ | s
segmento: 2 1.414 2 0 | grigio | tratteggio
arco: 0 0 0.9 0 0.6155 | ambra | $\vartheta$
arco: 0 0 1.4 0.6155 pi/2 | grigio | $\alpha$
```

> [!DIM] della Proposizione 24.4 (oltre le dispense)
> 1. Spezzo $v = p + q$, con $p$ l'ombra sul piano e $q = v - p$ parallelo alla normale (lezione L21). Scelgo la normale $n$ che forma un angolo acuto con $v$: allora $q$ punta come $n$.
> 2. $\cos\vartheta = \frac{\langle v, p \rangle}{\lVert v \rVert \lVert p \rVert} = \frac{\lVert p \rVert^2}{\lVert v \rVert \lVert p \rVert} = \frac{\lVert p \rVert}{\lVert v \rVert}$, perché $\langle v, p \rangle = \langle p + q, p \rangle = \lVert p \rVert^2$.
> 3. Allo stesso modo, con $\alpha$ l'angolo tra $v$ e $n$: $\cos\alpha = \frac{\lVert q \rVert}{\lVert v \rVert}$, perché $\langle v, n \rangle = \langle q, n \rangle = \lVert q \rVert \lVert n \rVert$.
> 4. Per Pitagora $\lVert p \rVert^2 + \lVert q \rVert^2 = \lVert v \rVert^2$, quindi $\cos^2\vartheta + \cos^2\alpha = 1$, cioè $\cos\alpha = \sin\vartheta$. Due angoli acuti con $\cos\alpha = \sin\vartheta$ sommano a un angolo retto.

Le dispense rifanno così l'esempio di prima.

> [!ESEMPIO] 24.5
> Nell'esempio di prima possiamo calcolare l'angolo $\vartheta$ anche come $\frac{\pi}{2} - \alpha$, dove $\alpha$ è l'angolo fra $e_3$ e il vettore $n = (-1, -1, 1)$, che è ortogonale a $\pi$. Allora
> $$\begin{aligned} \vartheta &= \frac{\pi}{2} - \arccos \frac{\langle (-1, -1, 1), (0, 0, 1) \rangle}{\lVert (-1, -1, 1) \rVert \, \lVert (0, 0, 1) \rVert} \\ &= \frac{\pi}{2} - \arccos \frac{1}{\sqrt 3} \simeq 1{,}570 - 0{,}955 = 0{,}615. \end{aligned}$$
> Otteniamo lo stesso risultato.

Perché $(-1, -1, 1)$ e non $(1, 1, -1)$, che è il vettore dei numeri dell'equazione? Perché la proposizione chiede la normale che forma un angolo **acuto** con $e_3$: con $(1, 1, -1)$ il prodotto scalare è $-1$, con $(-1, -1, 1)$ è $1$. Togliendo il segno al prodotto scalare il problema sparisce.

> [!OLTRE] Due formule senza Gram–Schmidt
> **L'ombra su un piano.** Se $n$ è un vettore normale del piano, l'ombra di $v$ è $v$ meno la sua ombra sulla normale:
> $$p_\pi(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle}\, n.$$
> Nell'Esempio 24.3: $e_3 - \frac{-1}{3}(1, 1, -1) = \left(\frac 13, \frac 13, 1 - \frac 13\right) = \frac 13 (1, 1, 2)$, come prima.
>
> **L'angolo tra retta e piano in una riga.** Dalla Proposizione 24.4 e dal punto 4 della dimostrazione:
> $$\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}.$$
> Nell'Esempio 24.3: $\sin\vartheta = \frac{1}{1 \cdot \sqrt 3}$, quindi $\vartheta = \arcsin\frac{1}{\sqrt 3}$. È lo stesso angolo di $\arccos\frac{\sqrt 6}{3}$, perché $\frac 13 + \frac 23 = 1$.

> [!METODO] L'angolo tra una retta e un piano
> 1. Controlla che si incontrino: se la retta è parallela al piano, l'angolo non è definito.
> 2. Prendi la direzione $v$ della retta e un vettore normale $n$ del piano: i numeri dell'equazione, oppure il prodotto vettoriale dei due vettori della ricetta.
> 3. **Metodo delle dispense**: calcola l'ombra $p_\pi(v)$ e poi l'angolo tra $v$ e l'ombra. **Metodo veloce**: $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}$.
> 4. Se $\langle v, n \rangle = 0$ la retta è parallela al piano, o ci sta dentro. Se $v$ è proporzionale a $n$ l'angolo è retto.

::: prova Che angolo forma la retta $t(1, 0, 1)$ con il pavimento $z = 0$?
La normale è $(0, 0, 1)$: $\sin\vartheta = \frac{1}{\sqrt 2 \cdot 1} = \frac{\sqrt 2}{2}$, quindi l'angolo è $\frac{\pi}{4}$.
:::

> [!RICORDA]
> - Angolo retta–piano = angolo tra la direzione e la sua ombra sul piano.
> - Scorciatoia: il seno dell'angolo è il coseno dell'angolo con la normale, senza segno.

## L'angolo tra due piani (p. 124)

Apri un libro a metà: le due metà della copertina sono due piani che si incontrano nella retta della costola. L'apertura del libro si misura guardando dall'alto, cioè tagliando con un piano **perpendicolare** alla costola: il taglio è fatto di due segmenti, e l'angolo tra quei segmenti è l'apertura. Le dispense lo scrivono così.

> [!DEF] 24.6 · Angolo tra piani
> Siano $\pi_1$ e $\pi_2$ due piani che si intersecano in una retta $r = \pi_1 \cap \pi_2$. L'angolo (**diedrale**) fra $\pi_1$ e $\pi_2$ è definito nel modo seguente: si prendono due rette $s_1 \subset \pi_1$ e $s_2 \subset \pi_2$ incidenti ed entrambe ortogonali a $r$; l'angolo diedrale fra $\pi_1$ e $\pi_2$ è per definizione l'angolo $\alpha$ fra $s_1$ e $s_2$. Si ottengono in realtà due angoli $\alpha$ e $\pi - \alpha$, e scegliamo come sempre quello acuto (o retto).

**Come si legge.** «Diedrale» vuol dire «tra due facce». Si prende in ciascun piano una retta perpendicolare alla costola, e si misura l'angolo tra queste due rette.

La definizione è chiara nel disegno ma scomoda nei conti. Le dispense la trasformano in un conto con i vettori normali.

> [!PROP] 24.7
> Siano $v_1$ e $v_2$ due vettori non nulli ortogonali a $\pi_1$ e $\pi_2$. L'angolo $\alpha$ fra $\pi_1$ e $\pi_2$ è uguale all'angolo acuto (o retto) fra le rette generate da $v_1$ e $v_2$.

**Come si legge.** Per misurare l'apertura del libro basta misurare l'angolo tra le due frecce perpendicolari alle copertine.

> [!IDEA] Perché si possono usare le normali
> Guarda tutto nel piano del taglio, perpendicolare alla costola. Lì dentro stanno le due rette della definizione, e stanno anche le due normali, che sono perpendicolari alla costola perché la costola sta in tutti e due i piani. In quel piano ogni normale è perpendicolare alla retta della sua copertina: girare due rette di un angolo retto non cambia l'angolo tra loro. Il libro di Martelli lascia questo fatto come esercizio (Esercizio 9.2.34).

Quindi per due piani $\pi_1 = \{a_1 x + b_1 y + c_1 z = d_1\}$ e $\pi_2 = \{a_2 x + b_2 y + c_2 z = d_2\}$ l'angolo diedrale si calcola con i **vettori dei numeri** delle due equazioni:

$$\cos\alpha = \frac{\lvert a_1 a_2 + b_1 b_2 + c_1 c_2 \rvert}{\sqrt{a_1^2 + b_1^2 + c_1^2}\,\sqrt{a_2^2 + b_2^2 + c_2^2}}.$$

> [!ESEMPIO] 24.8
> I piani $\pi_1 = \{x + y - z = 3\}$ e $\pi_2 = \{x - y - z = 9\}$ formano un angolo
> $$\vartheta = \arccos \frac{\langle (1, 1, -1), (1, -1, -1) \rangle}{\lVert (1, 1, -1) \rVert \, \lVert (1, -1, -1) \rVert} = \arccos \frac{1}{\sqrt 3 \sqrt 3} = \arccos \frac 13 \simeq 1{,}230.$$
> Questo corrisponde a un angolo di circa $70{,}5^\circ$.

I conti: il prodotto scalare è $1 - 1 + 1 = 1$, e le due lunghezze sono $\sqrt 3$. Il coseno $\frac 13$ non è un valore notevole: la risposta si lascia come $\arccos\frac 13$. Nota che i numeri a destra, 3 e 9, non servono: l'angolo dipende solo dalle **giaciture**.

> [!ESEMPIO] Due piani perpendicolari
> I due piani dell'Esempio 23.9, $\{x + y = 1\}$ e $\{x - y + z = 3\}$, hanno normali $(1, 1, 0)$ e $(1, -1, 1)$, con prodotto scalare $1 - 1 + 0 = 0$: il coseno è zero e i piani sono **perpendicolari**.

> [!TRAPPOLA] Normali proporzionali
> Se le normali sono proporzionali, per esempio $(1, 2, -1)$ e $(-2, -4, 2)$, il conto darebbe coseno 1: i piani sono **paralleli**, e non si incontrano oppure coincidono. Non ha senso parlare di angolo diedrale: si calcola la distanza.

::: prova Che angolo formano i piani $x = 0$ e $y = 0$?
Le normali $(1, 0, 0)$ e $(0, 1, 0)$ hanno prodotto scalare zero: l'angolo è retto.
:::

> [!RICORDA]
> - Angolo tra due piani = angolo acuto tra i vettori normali.
> - I numeri a destra delle equazioni non contano.

## La distanza da una retta (pp. 124–126)

Le dispense definiscono la distanza tra due sottospazi affini dello spazio. Se si incontrano la distanza è **zero**; se non si incontrano è positiva, e si definisce caso per caso. L'idea è sempre la stessa: si cerca il **segmento più corto** che li collega, ed è sempre quello **perpendicolare**. Per due punti, la distanza è quella della lezione L20.

> [!DEF] 24.9 · Distanza fra punti
> Come già sappiamo, la distanza $d(P, Q)$ fra due punti $P, Q \in \R^3$ è definita usando la norma:
> $$d(P, Q) = \lVert \overrightarrow{PQ} \rVert = \lVert Q - P \rVert.$$

**Come si legge.** La distanza tra due punti è la lunghezza del vettore che va dall'uno all'altro. Per esempio da $(1, 2, 3)$ a $(3, 1, 1)$ il vettore è $(2, -1, -2)$, lungo $\sqrt{4 + 1 + 4} = 3$.

Per un punto e una retta si scende in perpendicolare. Le dispense lo scrivono così.

> [!DEF] 24.10 · Distanza fra punto e retta
> La distanza $d(P, r)$ fra un punto $P$ e una retta $r$ nello spazio è definita nel modo seguente. Tracciamo (Figura 10 delle dispense) la perpendicolare $s$ a $r$ passante per $P$ e definiamo
> $$d(P, r) = d(P, Q), \quad \text{dove } Q = r \cap s.$$

**Come si legge.** Da $P$ si scende sulla retta in perpendicolare: il punto d'arrivo $Q$ si chiama **piede della perpendicolare**, ed è il punto della retta più vicino a $P$. La distanza è la lunghezza di quel segmento.

Se la retta è data con la ricetta $P_0 + t v_0$, la distanza si calcola senza cercare $Q$, con il prodotto vettoriale. Le dispense lo scrivono così.

> [!PROP] 24.11
> Vale l'uguaglianza
> $$d(P, r) = \frac{\lVert v_0 \times v_1 \rVert}{\lVert v_0 \rVert}, \quad \text{dove } v_1 = \overrightarrow{P_0 P} = P - P_0.$$

**Come si legge.** La distanza è l'area di un parallelogramma divisa per la sua base. La dimostrazione delle dispense calcola la stessa area in due modi.

1. Prendi il parallelogramma con un lato lungo la retta, $v_0$, e l'altro che va da $P_0$ a $P$, $v_1$.
2. Per il Corollario 23.3 la sua area è la lunghezza di $v_0 \times v_1$.
3. Come base per altezza: la base è la lunghezza di $v_0$, e l'altezza è proprio la distanza di $P$ dalla retta.
4. Uguagliando e dividendo per la base si ottiene la formula.

```grafico
titolo: Il parallelogramma con lati $v_0$ e $v_1 = P - P_0$: la sua altezza è la distanza di $P$ dalla retta $r$
x: -1 5
y: -0.8 4
retta: 0 0 3 1 | accento | $r$ | se
poligono: 0 0 3 1 4 4 1 3 | ambra
vettore: 0 0 3 1 | accento | spesso | $v_0$ | se
vettore: 0 0 1 3 | blu | spesso | $v_1$ | o
punto: 0 0 | $P_0$ | so
punto: 1 3 | rosa | $P$ | n
punto: 1.8 0.6 | $Q$ | se
segmento: 1 3 1.8 0.6 | rosa | tratteggio | $d(P, r)$ | e
```

Ecco l'esempio delle dispense.

> [!ESEMPIO] 24.12
> Prendiamo il punto e la retta
> $$P = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}, \qquad r = \left\{ \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} + t \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} \right\}.$$
> La distanza fra $P$ e $r$ è
> $$d(P, r) = \frac{\left\lVert (3, 2, 1) \times (2, -2, 2) \right\rVert}{\lVert (3, 2, 1) \rVert} = \frac{\lVert (6, -4, -10) \rVert}{\sqrt{14}} = \frac{2\sqrt{38}}{\sqrt{14}} = \frac 27 \sqrt{133}.$$

> [!ESEMPIO] · i passaggi dell'Esempio 24.12
> 1. $P_0 = (-1, 0, 1)$ e $v_0 = (3, 2, 1)$; $v_1 = P - P_0 = (1 - (-1),\ -2 - 0,\ 3 - 1) = (2, -2, 2)$.
> 2. Prodotto vettoriale, con le righe affiancate $(3, 2)$, $(2, -2)$, $(1, 2)$: $\big(2 \cdot 2 - 1 \cdot (-2),\ -(3 \cdot 2 - 1 \cdot 2),\ 3 \cdot (-2) - 2 \cdot 2\big) = (6, -4, -10)$.
> 3. La sua lunghezza è $\sqrt{36 + 16 + 100} = \sqrt{152} = 2\sqrt{38}$; quella di $v_0$ è $\sqrt{9 + 4 + 1} = \sqrt{14}$.
> 4. Semplifico: $\frac{2\sqrt{38}}{\sqrt{14}} = 2\sqrt{\frac{19}{7}} = \frac{2\sqrt{19}\sqrt 7}{7} = \frac{2\sqrt{133}}{7}$.

> [!OLTRE] Il piede della perpendicolare, e un controllo
> Il punto $Q$ si trova proiettando $v_1$ sulla retta (lezione L21):
> $$Q = P_0 + \frac{\langle v_1, v_0 \rangle}{\langle v_0, v_0 \rangle} v_0.$$
> Nell'Esempio 24.12: $\langle v_1, v_0 \rangle = 6 - 4 + 2 = 4$ e $\langle v_0, v_0 \rangle = 14$, quindi $Q = (-1, 0, 1) + \frac{2}{7}(3, 2, 1) = \left(-\frac 17, \frac 47, \frac 97\right)$. Allora $P - Q = \left(\frac 87, -\frac{18}{7}, \frac{12}{7}\right)$, lungo $\frac{\sqrt{532}}{7} = \frac{2\sqrt{133}}{7}$: la stessa distanza. Controllo che $P - Q$ sia perpendicolare alla retta: $\frac{24 - 36 + 12}{7} = 0$.

> [!TRAPPOLA] Si divide per la lunghezza, non per il suo quadrato
> Nella formula c'è la lunghezza di $v_0$ al denominatore, non il suo quadrato, che compare invece nella proiezione. E il vettore $v_1$ va da un punto **della retta** al punto $P$: usare $P$ al posto di $P - P_0$ dà un risultato sbagliato, a meno che la retta passi per l'origine.

::: prova Quanto dista il punto $(0, 0, 5)$ dall'asse $x$?
Il piede è l'origine: la distanza è 5. Con la formula: $(1, 0, 0) \times (0, 0, 5) = (0, -5, 0)$, lungo 5, diviso per 1.
:::

> [!RICORDA]
> - La distanza è la lunghezza del segmento perpendicolare.
> - Punto e retta: $\frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$, area diviso base.

## La distanza tra due rette (pp. 126–127)

Due rette che non si incontrano sono **parallele** oppure **sghembe**. In tutti e due i casi c'è una retta che le taglia perpendicolarmente tutte e due: il «pilone» del cavalcavia. Le dispense lo scrivono così.

> [!DEF] 24.13 · Distanza fra rette
> La distanza $d(r, r')$ fra due rette $r$ ed $r'$ **disgiunte** nel piano o nello spazio è definita nel modo seguente. Le due rette $r$ e $r'$ sono parallele o sghembe. In entrambi i casi troviamo una retta $s$ perpendicolare a entrambe. Definiamo quindi
> $$d(r, r') = d(P, P'), \quad \text{dove } P = r \cap s \text{ e } P' = r' \cap s.$$

**Come si legge.**

- Se le rette si incontrano, la distanza è zero.
- **Parallele**: stessa direzione, nessun punto comune. Le perpendicolari comuni sono infinite, tutte della stessa lunghezza, come le traversine di un binario.
- **Sghembe**: direzioni diverse e nessun punto comune (lezione L23). La perpendicolare comune è **una sola** (Martelli, Proposizione 9.2.27).

Con le rette date dalle ricette $P_0 + t v$ e $P_0' + u v'$, la distanza si calcola in fretta.

**Rette parallele.** La distanza è quella di un punto della prima dalla seconda: si prende $P_0$ e si usa la Proposizione 24.11.

> [!ESEMPIO] Due rette parallele
> $r = \{t\,(1, 1, 0)\}$ e $r' = \{(1, 0, 0) + s\,(1, 1, 0)\}$ hanno la stessa direzione, e l'origine, che sta sulla prima, non sta sulla seconda. Con $P = (0, 0, 0)$, $P_0' = (1, 0, 0)$ e $v_0 = (1, 1, 0)$:
> - $P - P_0' = (-1, 0, 0)$;
> - $(1, 1, 0) \times (-1, 0, 0) = \big(1 \cdot 0 - 0 \cdot 0,\ -(1 \cdot 0 - 0 \cdot (-1)),\ 1 \cdot 0 - 1 \cdot (-1)\big) = (0, 0, 1)$;
> - la distanza è $\frac{1}{\sqrt 2} = \frac{\sqrt 2}{2}$.
>
> Nel piano $z = 0$ sono le rette $y = x$ e $y = x - 1$: in verticale distano 1, ma il segmento perpendicolare, che misura la distanza vera, è più corto.

**Rette sghembe.** Qui serve un **volume** al posto dell'area (Figura 11 delle dispense). Le dispense lo scrivono così.

> [!PROP] 24.14
> Se $r$ e $r'$ sono sghembe, vale la formula
> $$d(r, r') = \frac{\lvert \det(v \mid v' \mid v'') \rvert}{\lVert v \times v' \rVert}, \quad \text{dove } v'' = \overrightarrow{P_0 P_0'} = P_0' - P_0.$$

**Come si legge.** La distanza è il volume di una scatola divisa per l'area della sua base. Il ragionamento è lo stesso della Proposizione 24.11, una dimensione più su.

1. Prendi la scatola, il **parallelepipedo**, con spigoli $v$, $v'$ e $v''$.
2. Il suo volume è il determinante dei tre vettori, senza segno: è il significato del determinante (Martelli, Proposizione 9.1.9).
3. Come area di base per altezza: la base è il parallelogramma con lati $v$ e $v'$, di area $\lVert v \times v' \rVert$. L'altezza è la distanza tra i due piani paralleli che contengono le due rette, cioè proprio la distanza tra le rette.
4. Uguagliando e dividendo per l'area di base si ottiene la formula.

Ecco l'esempio delle dispense.

> [!ESEMPIO] 24.15
> Calcoliamo la distanza fra le rette sghembe
> $$r = \left\{ \begin{pmatrix} 2 \\ -5 \\ 1 \end{pmatrix} + t \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix} \right\}, \qquad r' = \left\{ \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + u \begin{pmatrix} -1 \\ -2 \\ 3 \end{pmatrix} \right\}.$$
> Questa è
> $$\begin{aligned} d(r, r') &= \frac{\left\lvert \det\begin{pmatrix} 2 & -1 & -1 \\ 0 & -2 & 6 \\ 1 & 3 & -1 \end{pmatrix} \right\rvert}{\left\lVert (2, 0, 1) \times (-1, -2, 3) \right\rVert} \\ &= \frac{\lvert 2(2 - 18) + (-6 - 2) \rvert}{\sqrt{2^2 + (-7)^2 + (-4)^2}} = \frac{40}{\sqrt{69}} = \frac{40}{69}\sqrt{69}. \end{aligned}$$

> [!ESEMPIO] · i passaggi dell'Esempio 24.15
> 1. $v = (2, 0, 1)$, $v' = (-1, -2, 3)$ e $v'' = P_0' - P_0 = (1 - 2,\ 1 - (-5),\ 0 - 1) = (-1, 6, -1)$: sono le tre colonne della matrice.
> 2. Determinante con Laplace sulla **prima colonna** $(2, 0, 1)$: $2 \cdot \det\begin{pmatrix} -2 & 6 \\ 3 & -1 \end{pmatrix} + 1 \cdot \det\begin{pmatrix} -1 & -1 \\ -2 & 6 \end{pmatrix} = 2\,(2 - 18) + (-6 - 2) = -40$. Senza segno: 40.
> 3. Prodotto vettoriale, con le righe affiancate $(2, -1)$, $(0, -2)$, $(1, 3)$: $\big(0 \cdot 3 - 1 \cdot (-2),\ -(2 \cdot 3 - 1 \cdot (-1)),\ 2 \cdot (-2) - 0 \cdot (-1)\big) = (2, -7, -4)$, lungo $\sqrt{4 + 49 + 16} = \sqrt{69}$.
> 4. La distanza è $\frac{40}{\sqrt{69}} = \frac{40\sqrt{69}}{69}$.

> [!OLTRE] Il determinante dice anche se due rette si incontrano
> Due rette qualsiasi stanno su uno stesso piano, cioè si incontrano o sono parallele, esattamente quando $\det(v \mid v' \mid P_0' - P_0) = 0$ (Martelli, Proposizione 9.2.41). Il determinante è zero esattamente quando i tre vettori stanno in uno stesso piano. Ne viene una ricetta completa:
> 1. se le direzioni sono **proporzionali**, le rette sono parallele, o coincidono: distanza con la Proposizione 24.11;
> 2. altrimenti calcola il determinante: se è zero le rette si **incontrano** (distanza zero, e si può calcolare l'angolo); se non è zero sono **sghembe** e la distanza viene dalla Proposizione 24.14.
>
> Siccome il determinante è $\langle v \times v', v'' \rangle$ (prodotto triplo, lezione L23), conviene calcolare prima $v \times v'$: serve sia sopra sia sotto.

::: prova Quanto distano l'asse $x$ e la retta $(0, 0, 3) + t(0, 1, 0)$?
Direzioni $(1, 0, 0)$ e $(0, 1, 0)$, con prodotto vettoriale $(0, 0, 1)$. Con $v'' = (0, 0, 3)$ il prodotto triplo è 3: la distanza è $\frac{3}{1} = 3$. Una retta passa 3 piani sopra l'altra.
:::

> [!RICORDA]
> - Rette parallele: distanza di un punto dell'una dall'altra.
> - Rette sghembe: $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$, volume diviso area di base.

## La distanza da un piano (pp. 127–128)

Da un punto a un piano si scende in perpendicolare, come da un punto al pavimento. Le dispense lo scrivono così.

> [!DEF] 24.16 · Distanza fra punto e piano
> La distanza fra un punto $P_0$ e un piano $\pi$ nello spazio è definita in modo simile a quanto già visto: si traccia la perpendicolare $s$ a $\pi$ passante per $P_0$ e si definisce
> $$d(P_0, \pi) = d(P_0, Q), \quad \text{con } Q = s \cap \pi.$$

**Come si legge.** La retta perpendicolare al piano per $P_0$ ha la direzione della normale; dove tocca il piano c'è il piede $Q$. La distanza è la lunghezza del segmento da $P_0$ a $Q$.

Se il piano è dato con l'equazione, c'è una formula che non richiede di trovare $Q$. Le dispense la scrivono così.

> [!PROP] 24.17
> Se $\pi = \{ax + by + cz = d\}$ e $P_0 = (x_0, y_0, z_0)$, vale
> $$d(P_0, \pi) = \frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}.$$

**Come si legge.**

- Sopra: metti le coordinate del punto nell'equazione portata tutta a sinistra, $ax + by + cz - d$, e togli il segno. Viene zero esattamente quando il punto sta sul piano.
- Sotto: la lunghezza del vettore normale $n = (a, b, c)$.
- Se moltiplichi l'equazione per un numero, sopra e sotto cambiano dello stesso fattore: la distanza non cambia.

```grafico
titolo: Distanza punto–piano (vista di taglio): la proiezione di $w = P_0 - P$ sulla normale $n$ è lunga proprio $d(P_0, \pi)$
assi: no
griglia: no
x: -3.2 3
y: -0.8 3
retta: 3 0 -3 0 | viola | spesso | $\pi$ | ne
punto: -2 0 | $P$ | s
punto: 1 2.2 | rosa | $P_0$ | ne
punto: 1 0 | $Q$ | s
vettore: -2 0 1 2.2 | blu | spesso
testo: -0.75 1.4 | blu | $w$
segmento: 1 2.2 1 0 | rosa | tratteggio | $d$ | e
vettore: 2 0 2 1.2 | ambra | spesso | $n$ | e
```

> [!DIM] della Proposizione 24.17 (dal libro di Martelli)
> 1. Sia $n = (a, b, c)$, perpendicolare al piano (lezione L23), e sia $P = (x, y, z)$ un punto **qualsiasi** del piano.
> 2. Chiamo $w = P_0 - P$. Il segmento da $P_0$ a $Q$ è parallelo a $n$, e la sua lunghezza è quella dell'ombra di $w$ sulla retta di $n$: $d(P_0, Q) = \frac{\lvert \langle w, n \rangle \rvert}{\lVert n \rVert}$ (lezione L21).
> 3. Sviluppo: $\langle w, n \rangle = a(x_0 - x) + b(y_0 - y) + c(z_0 - z) = a x_0 + b y_0 + c z_0 - (ax + by + cz)$.
> 4. Siccome $P$ sta sul piano, $ax + by + cz = d$: quindi $\langle w, n \rangle = a x_0 + b y_0 + c z_0 - d$, e si ottiene la formula.

Ecco l'esempio delle dispense.

> [!ESEMPIO] 24.18
> Prendiamo il piano e il punto seguenti in $\R^3$:
> $$\pi = \{2x - y + z = 4\}, \qquad P_0 = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}.$$
> Applicando la formula troviamo
> $$d(P_0, \pi) = \frac{\lvert 2 \cdot 2 - 1 - 2 - 4 \rvert}{\sqrt 6} = \frac{\sqrt 6}{2}.$$

I conti: sopra $4 - 1 - 2 - 4 = -3$, senza segno 3; sotto $\sqrt{4 + 1 + 1} = \sqrt 6$. Infine $\frac{3}{\sqrt 6} = \frac{3\sqrt 6}{6} = \frac{\sqrt 6}{2}$.

```widget spazio
titolo: La distanza del punto $P_0 = (2, 1, -2)$ dal piano $2x - y + z = 4$ (Esempio 24.18)
modo: piano
piano: 2 -1 1 = 4
punto: 2 1 -2
```

Lo strumento disegna il piano, il vettore normale $(2, -1, 1)$, il punto $P_0$ e il piede della perpendicolare $H$, che nelle dispense si chiama $Q$. Deve darti una distanza di circa 1,225, cioè $\frac{\sqrt 6}{2}$, e $H = (3;\ 0{,}5;\ -1{,}5)$. Prova a spostare $P_0$ **parallelo al piano**, per esempio in $(3, 3, -2)$: scrivi `3 3 -2`. Hai aggiunto $(1, 2, 0)$, che soddisfa $2 - 2 + 0 = 0$ e quindi sta nella giacitura: la distanza non cambia. Poi moltiplica l'equazione per 2, scrivendo `4 -2 2 = 8`: anche così la distanza resta la stessa.

> [!OLTRE] Il piede della perpendicolare e altre due distanze
> **Il piede $Q$.** Partendo da $P_0$ ci si muove lungo la normale fino al piano:
> $$Q = P_0 - \frac{a x_0 + b y_0 + c z_0 - d}{a^2 + b^2 + c^2}\, (a, b, c).$$
> Nell'Esempio 24.18: $Q = (2, 1, -2) - \frac{-3}{6}(2, -1, 1) = (2, 1, -2) + \left(1, -\frac 12, \frac 12\right) = \left(3, \frac 12, -\frac 32\right)$. Controllo: $6 - \frac 12 - \frac 32 = 4$.
>
> **Due piani paralleli** $ax + by + cz = d_1$ e $ax + by + cz = d_2$, con **gli stessi** numeri davanti: la distanza è $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$. Basta prendere un punto del primo e usare la Proposizione 24.17.
>
> **Una retta parallela a un piano**: tutti i suoi punti hanno la stessa distanza dal piano, quindi basta uno qualsiasi.

> [!OLTRE] Tutte le formule in una tabella
> Notazioni: $r = P_0 + \Span(v)$, $r' = P_0' + \Span(v')$, piano $\pi = \{ax + by + cz = d\}$ con normale $n = (a, b, c)$.
>
> | Che cosa | Formula | Dove |
> |---|---|---|
> | angolo tra rette che si incontrano | $\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}$ | Def. 24.1 |
> | angolo tra retta e piano | angolo tra $v$ e $p_\pi(v)$; $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}$ | Def. 24.2, Prop. 24.4 |
> | angolo tra piani | $\cos\alpha = \frac{\lvert \langle n_1, n_2 \rangle \rvert}{\lVert n_1 \rVert \lVert n_2 \rVert}$ | Prop. 24.7 |
> | punto e punto | $\lVert Q - P \rVert$ | Def. 24.9 |
> | punto e retta | $\frac{\lVert v \times (P - P_0) \rVert}{\lVert v \rVert}$ | Prop. 24.11 |
> | rette parallele | $d(P_0, r')$ | Def. 24.13 |
> | rette sghembe | $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$ | Prop. 24.14 |
> | punto e piano | $\frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ | Prop. 24.17 |
> | piani paralleli | $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$, con gli stessi numeri davanti | oltre le dispense |

> [!OLTRE] Dove trovarlo nel libro
> Nel libro di Martelli: angoli tra rette, tra retta e piano e tra piani nel §9.2.9 (pp. 285–287, con la Proposizione 9.2.33: tra tutte le rette del piano per $P$, quella proiettata forma l'angolo più piccolo con $r$); distanze nel §9.2.10 (pp. 287–291: Proposizioni 9.2.36, 9.2.39, 9.2.41 e 9.2.42, che sono le nostre 24.11, 24.14, il criterio delle rette su uno stesso piano e 24.17). Norma, angolo tra vettori, distanza e proiezione ortogonale sono nel §8.1 (pp. 240–245); il volume del parallelepipedo nella Proposizione 9.1.9 (p. 271); le rette perpendicolari a un piano o a una retta nel §9.2.6 (pp. 279–281).

::: prova Quanto dista il punto $(1, 2, 3)$ dal pavimento $z = 0$?
Con la formula: $\frac{\lvert 3 \rvert}{1} = 3$. È l'altezza del punto.
:::

> [!RICORDA]
> - Punto e piano: metti il punto nell'equazione portata a sinistra, togli il segno, dividi per la lunghezza della normale.
> - Piani paralleli: prima scrivili con gli stessi numeri davanti.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\vartheta$, $\alpha$ | «theta», «alfa» | angoli | |
| $\lvert \langle v, v' \rangle \rvert$ | «valore assoluto del prodotto scalare» | il prodotto scalare senza segno | |
| $\arccos$, $\arcsin$ | «arcocoseno», «arcoseno» | dal coseno, o dal seno, all'angolo | $\arccos\frac 12 = \frac{\pi}{3}$ |
| $p_\pi(v)$ | «proiezione di vu sul piano» | l'ombra di $v$ sul piano | |
| $n$ | «vettore normale» | la freccia perpendicolare al piano | per $x + y - z = 0$, $n = (1, 1, -1)$ |
| $d(P, Q)$ | «distanza tra pi e qu» | la lunghezza di $Q - P$ | |
| $d(P, r)$, $d(P, \pi)$ | «distanza del punto dalla retta», «dal piano» | la lunghezza del segmento perpendicolare | |
| $d(r, r')$ | «distanza tra le due rette» | la lunghezza della perpendicolare comune | |
| $\det(v \mid v' \mid v'')$ | «determinante delle tre colonne» | con segno, il volume della scatola con quei tre spigoli | |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, con 5 risposte e una sola giusta. Ci sono poi 2 problemi da 11 punti, corretti solo con almeno 6 risposte giuste. Dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01/2027 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026.** Angoli e distanze sono presenti in quasi ogni appello.

- **Quiz sulla distanza tra due rette**: 08/02/2024 (domanda 10), 06/09/2024 (domanda 6), 05/02/2026 (domanda 10, dove le rette si incontrano e la risposta giusta è 0), 03/06/2026 (domanda 10), 07/09/2026 (domanda 7).
- **Quiz sulla distanza tra un punto e un piano**: 16/01/2025 (domanda 4). **Quiz sull'angolo tra una retta e un piano**: 10/07/2025 (domanda 8). **Quiz sulla retta perpendicolare a un piano**: 02/09/2025 (domanda 9): la direzione deve essere proporzionale al vettore normale.
- **Problemi aperti con l'angolo tra una retta e un piano**, di solito dopo aver trovato una retta come intersezione di piani o un'ombra: 24/01/2024, 10/06/2024, 10/07/2024, 06/09/2024, 02/09/2025, 03/06/2026, 07/09/2026, sempre nel problema 12. **Distanza tra rette** in un problema aperto: 10/07/2024 e 03/06/2025.

### Una domanda vera, letta insieme

**Appello del 07/09/2026, domanda 7.** Il testo: «La distanza tra le rette $r_1 = (2, 0, 0) + \Span(0, 1, 1)$ e $r_2 = (0, 3, 0) + \Span(-1, 1, 0)$ è: (a) $3$; (b) $\frac{\sqrt 3}{3}$; (c) $3\sqrt 3$; (d) $\sqrt 3$; (e) $3 + \sqrt 3$».

**In pratica chiede:** due rette, quanto è lungo il loro pilone? Prima bisogna capire se sono parallele, se si incontrano o se sono sghembe.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: le direzioni.** $v = (0, 1, 1)$ e $v' = (-1, 1, 0)$ non sono proporzionali: le rette non sono parallele.
>
> **Passo 2: il vettore tra i due punti.** $v'' = (0, 3, 0) - (2, 0, 0) = (-2, 3, 0)$.
>
> **Passo 3: il prodotto vettoriale.** Con le righe affiancate $(0, -1)$, $(1, 1)$, $(1, 0)$:
> $$v \times v' = \big(1 \cdot 0 - 1 \cdot 1,\ -(0 \cdot 0 - 1 \cdot (-1)),\ 0 \cdot 1 - 1 \cdot (-1)\big) = (-1, -1, 1),$$
> lungo $\sqrt 3$.
>
> **Passo 4: il prodotto triplo.** $\langle (-1, -1, 1), (-2, 3, 0) \rangle = 2 - 3 + 0 = -1$. Non è zero: le rette sono **sghembe**.
>
> **Passo 5: la distanza.** $\frac{\lvert -1 \rvert}{\sqrt 3} = \frac{1}{\sqrt 3} = \frac{\sqrt 3}{3}$: risposta (b). Qui serve davvero togliere la radice dal denominatore, come nella lezione L01: senza, non la riconosci tra le risposte.

### Un'altra domanda vera

> [!ESAME] Appello del 10/07/2025, domanda 8
> *L'angolo tra il piano $\Pi = \{x + z = 3\}$ e la retta $r = {}^t(1, 0, 1) + s\,{}^t(2, 2, 0)$ è: (a) $\frac 12$; (b) $0$; (c) $\frac{\pi}{3}$; (d) $\frac{\pi}{2} - \frac 12$; (e) $\frac{\pi}{6}$.*
>
> **Soluzione.** $v = (2, 2, 0)$ e $n = (1, 0, 1)$, con prodotto scalare 2, non zero: la retta non è parallela al piano, quindi (b) è esclusa.
> 1. Con la scorciatoia: $\sin\vartheta = \frac{2}{2\sqrt 2 \cdot \sqrt 2} = \frac 12$, quindi l'angolo è $\frac{\pi}{6}$: risposta (e).
> 2. Con il metodo delle dispense: l'ombra è $(2, 2, 0) - \frac 22 (1, 0, 1) = (1, 2, -1)$, e $\cos\vartheta = \frac{2 + 4 + 0}{2\sqrt 2 \cdot \sqrt 6} = \frac{6}{4\sqrt 3} = \frac{\sqrt 3}{2}$: di nuovo $\frac{\pi}{6}$.
>
> Le risposte (a) e (d) sono trappole: $\frac 12$ è il **seno** dell'angolo, non l'angolo. La (c) è l'angolo con la normale.

> [!METODO] Distanza tra due rette, in quattro righe
> 1. Scrivi $v$, $v'$ e $v'' = P_0' - P_0$.
> 2. Se $v$ e $v'$ sono proporzionali: rette parallele, distanza $\frac{\lVert v \times (P_0' - P_0) \rVert}{\lVert v \rVert}$.
> 3. Altrimenti calcola $v \times v'$ e poi il suo prodotto scalare con $v''$. Se è zero, le rette si incontrano: distanza zero, come nel quiz del 05/02/2026.
> 4. Se non è zero: la distanza è quel numero senza segno diviso la lunghezza di $v \times v'$. Poi togli le radici dal denominatore.

> [!METODO] L'angolo tra retta e piano nei problemi aperti
> I problemi chiedono spesso, nell'ordine: trovare la retta, come intersezione di due piani (lezione L23); mostrare che incontra il piano; calcolare l'**ombra** della direzione sul piano; infine l'angolo. Il punto «ombra» prepara proprio la Definizione 24.2: trovata l'ombra, l'angolo ha coseno $\frac{\langle v, p_\pi(v) \rangle}{\lVert v \rVert \lVert p_\pi(v) \rVert}$. Se il testo chiede il **coseno** dell'angolo, come il 03/06/2026, fermati al coseno.

**Errori da evitare.**

- Dare come angolo tra rette, o tra piani, un angolo **ottuso**: si prende sempre quello acuto o retto.
- Confondere l'angolo con la **normale** e l'angolo con il **piano**: insieme fanno un angolo retto.
- Scrivere come «angolo» il valore del **coseno** o del **seno**: è la trappola della risposta $\frac 12$.
- Nella formula punto–piano, dimenticare di portare **tutto a sinistra**, oppure il **valore assoluto**.
- Confrontare piani paralleli con equazioni scritte con numeri diversi: $x + 2y + 2z = 1$ e $2x + 4y + 4z = 5$ vanno prima resi con gli stessi numeri davanti.
- Usare la formula delle rette sghembe per rette **parallele**: il denominatore è zero.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la tabella delle formule (nella sezione sul piano) e la tabella dei coseni notevoli. Poi la ricetta «parallele, incidenti o sghembe» con il determinante, e la formula del piede della perpendicolare su un piano.

## Quiz

```quiz
D: Le rette $r = (1, 0, 0) + t\,(1, 1, 0)$ e $r' = (1, 0, 0) + s\,(0, 1, 1)$ si incontrano in $(1, 0, 0)$. Quale angolo formano?
+ $\frac{\pi}{3}$
- $\frac{\pi}{6}$
- $\frac{2\pi}{3}$
- $\frac{\pi}{4}$
- $\arccos\frac 14$
= Il prodotto scalare tra le direzioni è 1, le lunghezze sono $\sqrt 2$ e $\sqrt 2$: il coseno è $\frac 12$ e l'angolo $\frac{\pi}{3}$. La risposta più insidiosa è $\frac{2\pi}{3}$, l'altro angolo tra le due rette: è ottuso, e per due rette non si sceglie mai. $\frac{\pi}{6}$ ha coseno $\frac{\sqrt 3}{2}$.

D: Qual è l'angolo fra il piano $\pi = \{x + y = 3\}$ e la retta $r = (0, 0, 1) + t\,(1, 0, 1)$?
+ $\frac{\pi}{6}$
- $\frac{\pi}{3}$
- $\frac 12$
- $\frac{\pi}{2} - \frac 12$
- $0$
= Con $v = (1, 0, 1)$ e $n = (1, 1, 0)$: $\sin\vartheta = \frac{1}{\sqrt 2 \cdot \sqrt 2} = \frac 12$, quindi l'angolo è $\frac{\pi}{6}$. Con l'ombra: $(1, 0, 1) - \frac 12 (1, 1, 0) = \left(\frac 12, -\frac 12, 1\right)$, e il coseno dell'angolo è $\frac{\sqrt 3}{2}$. La risposta più insidiosa è $\frac{\pi}{3}$, l'angolo con la normale; $\frac 12$ è il seno, non l'angolo. Simile all'appello del 10/07/2025 (domanda 8), che aveva gli stessi distrattori.

D: Qual è l'angolo diedrale fra i piani $\{x = 2\}$ e $\{x + y = 3\}$?
+ $\frac{\pi}{4}$
- $\frac{3\pi}{4}$
- $\frac{\pi}{3}$
- $\frac{\pi}{2}$
- $\frac{\pi}{6}$
= Le normali sono $(1, 0, 0)$ e $(1, 1, 0)$: il coseno è $\frac{1}{1 \cdot \sqrt 2} = \frac{\sqrt 2}{2}$, quindi l'angolo è $\frac{\pi}{4}$ (Proposizione 24.7). La risposta più insidiosa è $\frac{3\pi}{4}$, l'angolo ottuso, che si scarta. $\frac{\pi}{2}$ è di chi pensa che i piani verticali siano sempre perpendicolari tra loro.

D: La distanza del punto $P = (1, 2, 3)$ dal piano $\pi = \{2x - y + 2z = 1\}$ è:
+ $\frac 53$
- $5$
- $\frac 59$
- $\frac 73$
- $\frac{\sqrt 5}{3}$
= Sopra $\lvert 2 - 2 + 6 - 1 \rvert = 5$, sotto $\sqrt{4 + 1 + 4} = 3$: la distanza è $\frac 53$. La risposta più insidiosa è $\frac 73$, che sbaglia il segno del termine noto, $+1$ invece di $-1$. 5 dimentica il denominatore; $\frac 59$ divide per la lunghezza al quadrato. Simile all'appello del 16/01/2025 (domanda 4).

D: La distanza del punto $P = (2, 0, 1)$ dalla retta $r = \{t\,(1, 1, 0) \mid t \in \R\}$ è:
+ $\sqrt 3$
- $\sqrt 6$
- $3$
- $\sqrt 2$
- $\frac{\sqrt 6}{2}$
= $v_0 = (1, 1, 0)$ e $v_1 = (2, 0, 1)$; il prodotto vettoriale è $(1, -1, -2)$, lungo $\sqrt 6$. Diviso per la lunghezza di $v_0$, $\sqrt 2$, dà $\sqrt 3$. La risposta più insidiosa è $\sqrt 6$, che dimentica di dividere per la base. $\frac{\sqrt 6}{2}$ divide per la lunghezza al quadrato.

D: Le rette $r_1 = (1, 0, 0) + t\,(0, 1, 2)$ e $r_2 = (3, -1, -1) + s\,(-1, 1, 4)$ sono sghembe. Qual è la loro distanza?
+ $\frac 53$
- $5$
- $\frac 59$
- $\frac 35$
- $0$
= $v \times v' = (0, 1, 2) \times (-1, 1, 4) = (2, -2, 1)$, lungo 3. $v'' = (2, -1, -1)$ e il prodotto triplo è $4 + 2 - 1 = 5$. Quindi la distanza è $\frac 53$. La risposta più insidiosa è 0: vale solo se le rette si incontrano, ma il prodotto triplo non è zero. 5 dimentica di dividere; $\frac 35$ è il rapporto capovolto. Simile agli appelli del 06/09/2024 (domanda 6) e del 03/06/2026 (domanda 10); le rette sono quelle del problema del 03/06/2025 con $k = 0$.

D: Qual è la distanza fra le rette $r = \{t\,(1, 1, 0)\}$ e $r' = \{(1, 1, 1) + s\,(0, 0, 1)\}$?
+ $0$
- $\frac{\sqrt 2}{2}$
- $1$
- $\sqrt 2$
- il punto $(1, 1, 0)$
= Le direzioni non sono proporzionali, e il prodotto triplo è $\langle (1, 1, 0) \times (0, 0, 1), (1, 1, 1) \rangle = \langle (1, -1, 0), (1, 1, 1) \rangle = 0$: le rette si incontrano, in $(1, 1, 0)$ con $t = 1$ e $s = -1$. La distanza è 0. La risposta più insidiosa è $(1, 1, 0)$: è il punto d'incontro, ma una distanza è un numero. Simile all'appello del 05/02/2026 (domanda 10).

D: Una retta forma con il vettore normale di un piano un angolo acuto $\alpha = \frac{\pi}{3}$. Qual è l'angolo fra la retta e il piano?
+ $\frac{\pi}{6}$
- $\frac{\pi}{3}$
- $\frac{2\pi}{3}$
- $\frac{\pi}{2}$
- $\frac{5\pi}{6}$
= Per la Proposizione 24.4 i due angoli sommano a un angolo retto: $\frac{\pi}{2} - \frac{\pi}{3} = \frac{\pi}{6}$. La risposta più insidiosa è $\frac{\pi}{3}$, che confonde l'angolo con la normale con quello con il piano.

D: Quale di queste rette interseca il piano $\pi = \{2x - y + 2z = 3\}$ **perpendicolarmente**?
+ $(1, 1, 1) + t\,(2, -1, 2)$
- $t\,(1, 2, 0)$
- $(2, -1, 2) + t\,(1, 1, 1)$
- $\{2x - y + 2z = 0\}$
- $(0, 3, 0) + t\,(2, 1, 2)$
= Una retta è perpendicolare al piano quando la sua direzione è proporzionale al vettore normale $(2, -1, 2)$. La risposta più insidiosa è la terza, che usa la normale come **punto** invece che come direzione. $(1, 2, 0)$ è perpendicolare alla normale, quindi quella retta è parallela al piano; $\{2x - y + 2z = 0\}$ è un piano; $(2, 1, 2)$ ha un segno diverso. Simile all'appello del 02/09/2025 (domanda 9).

D: Qual è la distanza fra i piani paralleli $\{x + 2y + 2z = 1\}$ e $\{x + 2y + 2z = 7\}$?
N: 2
= Gli stessi numeri davanti, quindi la distanza è $\frac{\lvert 7 - 1 \rvert}{\sqrt{1 + 4 + 4}} = \frac 63 = 2$. È come prendere il punto $(1, 0, 0)$ del primo piano e usare la Proposizione 24.17.
```

## Esercizi

::: esercizio base Riscaldamento: l'angolo acuto
Due rette per l'origine hanno direzioni $(1, 1, 0)$ e $(-1, 0, 0)$. Che angolo formano?
::: soluzione
1. Il prodotto scalare è $-1$, le lunghezze $\sqrt 2$ e 1.
2. Tolgo il segno: il coseno è $\frac{1}{\sqrt 2} = \frac{\sqrt 2}{2}$.
3. L'angolo tra le rette è $\frac{\pi}{4}$. Tra i vettori sarebbe $\frac{3\pi}{4}$, ottuso.
:::

::: esercizio base Riscaldamento: distanza da due piani
Quanto dista il punto $(1, 1, 1)$ dal piano $z = 0$? E dal piano $x + y + z = 0$?
::: soluzione
1. Da $z = 0$: $\frac{\lvert 1 \rvert}{1} = 1$.
2. Da $x + y + z = 0$: sopra $\lvert 1 + 1 + 1 \rvert = 3$, sotto $\sqrt 3$; la distanza è $\frac{3}{\sqrt 3} = \sqrt 3$.
:::

::: esercizio base Riscaldamento: perpendicolare o parallela?
Il piano è $x + 2y - z = 5$. La retta con direzione $(2, 4, -2)$ è perpendicolare o parallela al piano? E quella con direzione $(1, 0, 1)$?
::: soluzione
La normale è $(1, 2, -1)$.
1. $(2, 4, -2)$ è il doppio della normale: la retta è **perpendicolare** al piano.
2. $(1, 0, 1)$ dà con la normale $1 + 0 - 1 = 0$: la retta è **parallela** al piano, o ci sta dentro.
:::

::: esercizio base Riscaldamento: la distanza da un asse
Quanto dista il punto $(0, 3, 4)$ dall'asse $x$?
::: soluzione
1. La retta è $t(1, 0, 0)$, quindi $v_0 = (1, 0, 0)$ e $v_1 = (0, 3, 4)$.
2. $v_0 \times v_1 = (0 \cdot 4 - 0 \cdot 3,\ -(1 \cdot 4 - 0 \cdot 0),\ 1 \cdot 3 - 0 \cdot 0) = (0, -4, 3)$, lungo 5.
3. Diviso per la lunghezza di $v_0$, che è 1: la distanza è 5. È Pitagora con 3 e 4.
:::

::: esercizio base Angoli fra rette
(a) Le rette $r = (1, 2, 0) + t\,(1, 0, 1)$ e $r' = (1, 2, 0) + s\,(1, 1, 0)$ si incontrano in $(1, 2, 0)$: calcola l'angolo. (b) Stessa domanda per le rette per l'origine con direzioni $(1, 2, 2)$ e $(2, -2, -1)$. (c) Stessa domanda per le rette per l'origine con direzioni $(1, 1, 1)$ e $(-1, 0, -1)$.
::: soluzione
(a) Il prodotto scalare è 1, le lunghezze $\sqrt 2$ e $\sqrt 2$: il coseno è $\frac 12$ e l'angolo $\frac{\pi}{3}$.

(b) Il prodotto scalare è $2 - 4 - 2 = -4$, le lunghezze 3 e 3: il coseno tra i vettori è $-\frac 49$, ottuso. Tra le rette si toglie il segno: l'angolo è $\arccos\frac 49$.

(c) Il prodotto scalare è $-2$, le lunghezze $\sqrt 3$ e $\sqrt 2$: il coseno è $\frac{2}{\sqrt 6} = \frac{\sqrt 6}{3}$, quindi l'angolo è $\arccos\frac{\sqrt 6}{3}$, circa 35,3°, lo stesso numero dell'Esempio 24.3.
:::

::: esercizio base Angolo fra due piani
Calcola l'angolo diedrale fra i piani $\pi_1 = \{2x + y - z = 1\}$ e $\pi_2 = \{x + 2y + z = 2\}$ (sono i piani dell'appello del 24/01/2024). Poi scrivi un piano per l'origine perpendicolare a entrambi.
::: soluzione
Le normali sono $n_1 = (2, 1, -1)$ e $n_2 = (1, 2, 1)$, con prodotto scalare $2 + 2 - 1 = 3$ e lunghezze $\sqrt 6$ e $\sqrt 6$. Il coseno è $\frac{3}{6} = \frac 12$, e l'angolo $\frac{\pi}{3}$.

Due piani sono perpendicolari quando le loro **normali** sono perpendicolari. Serve quindi una normale $m$ perpendicolare a $n_1$ e a $n_2$, per esempio il loro prodotto vettoriale:
$$\begin{aligned} m = n_1 \times n_2 &= \big(1 \cdot 1 - (-1) \cdot 2,\ -(2 \cdot 1 - (-1) \cdot 1),\ 2 \cdot 2 - 1 \cdot 1\big) \\ &= (3, -3, 3). \end{aligned}$$
Il piano $x - y + z = 0$ va bene. Siccome $m$ è anche la direzione della retta comune ai due piani, questo è il piano per l'origine perpendicolare alla costola: il «taglio» della Definizione 24.6.
:::

::: esercizio base Distanza punto–retta con la formula e con il piede
Siano $P = (1, 1, 1)$ e $r = \{t\,(1, 2, 2)\}$. Calcola $d(P, r)$ con la Proposizione 24.11 e poi trovando il piede della perpendicolare $Q$.
::: soluzione
**Con la formula.** $v_0 = (1, 2, 2)$ e $v_1 = (1, 1, 1)$. Con le righe affiancate $(1, 1)$, $(2, 1)$, $(2, 1)$:
$$v_0 \times v_1 = (2 \cdot 1 - 2 \cdot 1,\ -(1 \cdot 1 - 2 \cdot 1),\ 1 \cdot 1 - 2 \cdot 1) = (0, 1, -1).$$
La distanza è $\frac{\sqrt 2}{3}$, perché $v_0$ è lungo 3.

**Con il piede.** $Q = \frac{\langle v_1, v_0 \rangle}{\langle v_0, v_0 \rangle} v_0 = \frac 59 (1, 2, 2)$. Allora $P - Q = \left(\frac 49, -\frac 19, -\frac 19\right)$, perpendicolare a $v_0$ perché $\frac{4 - 2 - 2}{9} = 0$, e lungo $\frac{\sqrt{18}}{9} = \frac{\sqrt 2}{3}$. Stesso risultato.
:::

::: esercizio base Distanza punto–piano e piede della perpendicolare
Per il piano $\pi = \{2x - y + z = 4\}$ e il punto $P_0 = (2, 1, -2)$ dell'Esempio 24.18: (a) trova il piede $Q$ della perpendicolare; (b) verifica che $d(P_0, Q) = \frac{\sqrt 6}{2}$; (c) scrivi in forma parametrica la retta $s$ perpendicolare a $\pi$ passante per $P_0$.
::: soluzione
(c) La retta perpendicolare ha la direzione della normale: $s = (2, 1, -2) + \lambda\,(2, -1, 1)$.

(a) Il piede è dove questa retta tocca il piano. Metto $(2 + 2\lambda,\ 1 - \lambda,\ -2 + \lambda)$ nell'equazione: $2(2 + 2\lambda) - (1 - \lambda) + (-2 + \lambda) = 4$, cioè $1 + 6\lambda = 4$ e $\lambda = \frac 12$. Quindi $Q = \left(3, \frac 12, -\frac 32\right)$.

(b) $P_0 - Q = \left(-1, \frac 12, -\frac 12\right)$, lungo $\sqrt{1 + \frac 14 + \frac 14} = \sqrt{\frac 32} = \frac{\sqrt 6}{2}$.
:::

::: esercizio medio Una retta e un piano, con due metodi
Calcola l'angolo fra il piano $\pi = \{x + y - z = 0\}$ e la retta $r = \{t\,(1, 1, 1)\}$: (a) con la proiezione della Definizione 24.2; (b) con la Proposizione 24.4. Controlla che i risultati coincidano.
::: soluzione
La retta incontra il piano nell'origine.

(a) Ombra con la formula della normale $n = (1, 1, -1)$: il prodotto di $v$ con $n$ è $1 + 1 - 1 = 1$, e $\langle n, n \rangle = 3$, quindi
$$p_\pi(v) = (1, 1, 1) - \tfrac 13 (1, 1, -1) = \left(\tfrac 23, \tfrac 23, \tfrac 43\right).$$
Il prodotto di $v$ con l'ombra è $\frac 83$; $v$ è lungo $\sqrt 3$, l'ombra $\frac{\sqrt{24}}{3} = \frac{2\sqrt 6}{3}$. Allora
$$\cos\vartheta = \frac{8/3}{\sqrt 3 \cdot 2\sqrt 6 / 3} = \frac{8}{2\sqrt{18}} = \frac{4}{3\sqrt 2} = \frac{2\sqrt 2}{3}.$$

(b) $\sin\vartheta = \frac{1}{\sqrt 3 \cdot \sqrt 3} = \frac 13$, quindi l'angolo è $\arcsin\frac 13$.

Coincidono: $\frac 89 + \frac 19 = 1$, quindi $\arccos\frac{2\sqrt 2}{3} = \arcsin\frac 13$. Un angolo acuto è deciso dal suo seno.
:::

::: esercizio medio Rette parallele e piani paralleli
(a) Calcola la distanza fra le rette parallele $r = \{(1, 0, 1) + t\,(1, 0, -1)\}$ e $r' = \{(0, 2, 0) + s\,(-2, 0, 2)\}$. (b) Calcola la distanza fra i piani $\pi_1 = \{x + 2y + 2z = 1\}$ e $\pi_2 = \{2x + 4y + 4z = 5\}$.
::: soluzione
(a) Le direzioni sono proporzionali: $(-2, 0, 2) = -2\,(1, 0, -1)$. Prendo $P = (1, 0, 1)$ sulla prima e calcolo la sua distanza dalla seconda, con $P_0' = (0, 2, 0)$ e direzione $v_0 = (1, 0, -1)$. Allora $P - P_0' = (1, -2, 1)$ e
$$\begin{aligned} v_0 \times (P - P_0') &= \big(0 \cdot 1 - (-1)(-2),\ -(1 \cdot 1 - (-1) \cdot 1),\ 1 \cdot (-2) - 0 \cdot 1\big) \\ &= (-2, -2, -2), \end{aligned}$$
lungo $2\sqrt 3$. La distanza è $\frac{2\sqrt 3}{\sqrt 2} = \sqrt 6$.

(b) Prima rendo uguali i numeri davanti: dividendo per 2, il secondo piano è $x + 2y + 2z = \frac 52$. Ora la distanza è $\frac{\lvert \frac 52 - 1 \rvert}{3} = \frac{3/2}{3} = \frac 12$. Senza dividere, il conto sbagliato «$\frac{\lvert 5 - 1 \rvert}{3}$» darebbe $\frac 43$.
:::

::: esercizio medio Classificare due rette e calcolare la distanza
Siano $r = \{(1, 1, 0) + t\,(1, 0, 2)\}$ e $r' = \{(0, 1, 1) + s\,(0, 1, 1)\}$. Stabilisci se sono incidenti, parallele o sghembe e calcola la loro distanza.
::: soluzione
Le direzioni $v = (1, 0, 2)$ e $v' = (0, 1, 1)$ non sono proporzionali: le rette non sono parallele. Poi $v'' = (0, 1, 1) - (1, 1, 0) = (-1, 0, 1)$ e
$$v \times v' = \big(0 \cdot 1 - 2 \cdot 1,\ -(1 \cdot 1 - 2 \cdot 0),\ 1 \cdot 1 - 0 \cdot 0\big) = (-2, -1, 1).$$
Il prodotto triplo è $2 + 0 + 1 = 3$, non zero: le rette sono **sghembe**. La distanza è
$$d(r, r') = \frac{3}{\lVert (-2, -1, 1) \rVert} = \frac{3}{\sqrt 6} = \frac{\sqrt 6}{2}.$$
:::

::: esercizio esame Retta, piano, angolo e distanza (appello del 10/07/2024, problema 12)
Siano $\pi_1 = \{x + y + 2z = 1\}$ e $\pi_2 = \{2x - 2y = 2\}$ due piani in $\R^3$. (1) Calcolare la retta $r = \pi_1 \cap \pi_2$ in forma $r = P + \Span(v)$. (2) Dimostrare che $r$ e il piano $\pi_3 = \{x + y = -1\}$ sono incidenti. (3) Calcolare l'angolo fra $r$ e il piano $\pi_3$. (4) Calcolare la distanza fra $r$ e la retta $s = {}^t(1, 0, 1) + \Span({}^t(2, 1, -2))$.
::: soluzione
(1) La seconda equazione, divisa per 2, dà $x - y = 1$, cioè $x = 1 + y$. Nella prima: $1 + y + y + 2z = 1$, cioè $z = -y$. Con $y = t$:
$$r = \{(1 + t,\ t,\ -t)\} = (1, 0, 0) + \Span((1, 1, -1)).$$
Controllo: $(1, 0, 0)$ soddisfa $1 = 1$ e $2 = 2$; la direzione è proporzionale a $(1, 1, 2) \times (2, -2, 0) = (4, 4, -4)$.

(2) La normale del terzo piano è $n = (1, 1, 0)$, e il suo prodotto con la direzione $(1, 1, -1)$ è 2, non zero. La direzione non sta nella giacitura del piano, quindi le giaciture sommano a tutto lo spazio e, per la Proposizione 23.10, la retta e il piano si incontrano. Il punto: $(1 + t) + t = -1$ dà $t = -1$, cioè $(0, -1, 1)$.

(3) L'ombra della direzione $v = (1, 1, -1)$ sulla giacitura del piano:
$$p(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle} n = (1, 1, -1) - \tfrac 22 (1, 1, 0) = (0, 0, -1).$$
Allora $\cos\vartheta = \frac{1}{\sqrt 3 \cdot 1} = \frac{\sqrt 3}{3}$, e l'angolo è $\arccos\frac{\sqrt 3}{3}$, circa 54,7°. Controllo con la normale: $\sin\vartheta = \frac{2}{\sqrt 3 \sqrt 2} = \frac{\sqrt 6}{3}$, e $\frac 13 + \frac 69 = 1$.

(4) Le direzioni $v = (1, 1, -1)$ e $v' = (2, 1, -2)$ non sono proporzionali; $v'' = (1, 0, 1) - (1, 0, 0) = (0, 0, 1)$.
$$\begin{aligned} v \times v' &= \big(1 \cdot (-2) - (-1) \cdot 1,\ -(1 \cdot (-2) - (-1) \cdot 2),\ 1 \cdot 1 - 1 \cdot 2\big) \\ &= (-1, 0, -1), \end{aligned}$$
lungo $\sqrt 2$. Il prodotto triplo è $-1$, non zero: le rette sono sghembe, e la distanza è $\frac{1}{\sqrt 2} = \frac{\sqrt 2}{2}$.
:::

::: esercizio esame Proiezione, intersezione e angolo
Siano $v_1 = (1, 0, 1)$ e $v_2 = (1, 2, 1)$, e sia $V = \Span(v_1, v_2)$. (1) Calcola una base ortogonale di $V$. (2) Calcola la proiezione ortogonale di $w = (1, 1, 0)$ su $V$. (3) Calcola il punto di intersezione e l'angolo di intersezione fra la retta $r = (2, 0, 0) + \Span(w)$ e il piano $V$.
::: soluzione
(1) Gram–Schmidt: $u_1 = v_1 = (1, 0, 1)$ e
$$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 = (1, 2, 1) - \tfrac 22 (1, 0, 1) = (0, 2, 0).$$
Base ortogonale: $(1, 0, 1)$ e $(0, 2, 0)$, o più comodo $(0, 1, 0)$.

(2) L'ombra di $w$ è $\frac 12 (1, 0, 1) + 1 \cdot (0, 1, 0) = \left(\frac 12, 1, \frac 12\right)$. Controllo: $w$ meno l'ombra è $\left(\frac 12, 0, -\frac 12\right)$, perpendicolare a $u_1$ e a $(0, 1, 0)$.

(3) Il piano ha normale $v_1 \times v_2 = (0 \cdot 1 - 1 \cdot 2,\ -(1 \cdot 1 - 1 \cdot 1),\ 1 \cdot 2 - 0 \cdot 1) = (-2, 0, 2)$, cioè è il piano $x - z = 0$. Il punto generico della retta è $(2 + t, t, 0)$: $2 + t = 0$ dà $t = -2$, e il punto è $(0, -2, 0)$. L'angolo è quello tra $w$ e la sua ombra:
$$\cos\vartheta = \frac{\frac 12 + 1 + 0}{\sqrt 2 \cdot \sqrt{\frac 32}} = \frac{3/2}{\sqrt 3} = \frac{\sqrt 3}{2},$$
quindi l'angolo è $\frac{\pi}{6}$. Controllo con la normale $(1, 0, -1)$: $\sin\vartheta = \frac{1}{\sqrt 2 \cdot \sqrt 2} = \frac 12$. È lo stesso schema dei problemi 12 degli appelli del 10/06/2024, del 03/06/2026 e del 07/09/2026.
:::

::: esercizio difficile La perpendicolare comune a due rette sghembe
Siano $r = \{(1, 1, 1) + t\,(-1, 2, 1)\}$ e $r' = \{(0, 1, 2) + s\,(1, 1, 1)\}$ (Martelli, Esempio 9.2.28). (a) Calcola $d(r, r')$ con la Proposizione 24.14. (b) Trova i punti $P \in r$ e $P' \in r'$ tali che il segmento $PP'$ sia perpendicolare a entrambe le rette, e verifica che $d(P, P') = d(r, r')$.
::: soluzione
(a) $v = (-1, 2, 1)$, $v' = (1, 1, 1)$, $v'' = (0, 1, 2) - (1, 1, 1) = (-1, 0, 1)$. Prodotto vettoriale:
$$v \times v' = \big(2 \cdot 1 - 1 \cdot 1,\ -((-1) \cdot 1 - 1 \cdot 1),\ (-1) \cdot 1 - 2 \cdot 1\big) = (1, 2, -3),$$
lungo $\sqrt{14}$. Il prodotto triplo è $-1 + 0 - 3 = -4$. Quindi la distanza è $\frac{4}{\sqrt{14}} = \frac{2\sqrt{14}}{7}$.

(b) Il punto generico della prima retta è $P(t) = (1 - t,\ 1 + 2t,\ 1 + t)$, quello della seconda $P'(s) = (s,\ 1 + s,\ 2 + s)$. Il vettore $P(t) - P'(s) = (1 - t - s,\ 2t - s,\ -1 + t - s)$ deve essere perpendicolare a $v$ e a $v'$:
- con $v$: $-(1 - t - s) + 2(2t - s) + (-1 + t - s) = 6t - 2s - 2 = 0$;
- con $v'$: $(1 - t - s) + (2t - s) + (-1 + t - s) = 2t - 3s = 0$.

Dalla seconda $t = \frac{3s}{2}$; nella prima $9s - 2s - 2 = 0$, cioè $s = \frac 27$ e $t = \frac 37$. Quindi
$$P = \left(\tfrac 47, \tfrac{13}{7}, \tfrac{10}{7}\right), \qquad P' = \left(\tfrac 27, \tfrac 97, \tfrac{16}{7}\right), \qquad P - P' = \tfrac 27\,(1, 2, -3).$$
$P - P'$ è proporzionale a $v \times v'$, come deve essere, ed è lungo $\frac 27 \sqrt{14}$: coincide con (a). La perpendicolare comune è la retta $P' + \Span((1, 2, -3))$, la stessa trovata da Martelli.
:::

::: esercizio difficile Piani a distanza data
(a) Trova i piani paralleli a $\pi = \{x + 2y + 2z = 1\}$ che hanno distanza $2$ da $\pi$. (b) Trova i punti della retta $r = \{t\,(1, 1, 1)\}$ che hanno distanza $\sqrt 3$ dal piano $\sigma = \{x + y + z = 0\}$.
::: soluzione
(a) Un piano parallelo ha la forma $x + 2y + 2z = c$, con la stessa normale. La sua distanza dal primo è $\frac{\lvert c - 1 \rvert}{3}$; deve valere 2, quindi $\lvert c - 1 \rvert = 6$, cioè $c = 7$ oppure $c = -5$. I piani sono $x + 2y + 2z = 7$ e $x + 2y + 2z = -5$, uno per parte.

(b) Il punto $(t, t, t)$ dista $\frac{\lvert 3t \rvert}{\sqrt 3} = \sqrt 3\,\lvert t \rvert$ dal piano. Deve valere $\sqrt 3$, quindi $t = 1$ oppure $t = -1$. I punti sono $(1, 1, 1)$ e $(-1, -1, -1)$.
:::

## Domande di ripasso

::: domanda Quando si calcola un angolo e quando una distanza?
Per due sottospazi affini che si incontrano si calcola l'angolo; per due che non si incontrano la distanza. Se si incontrano, la distanza è zero.
:::

::: domanda Come si definisce l'angolo tra due rette che si incontrano? Perché si sceglie l'angolo acuto?
È l'angolo tra le direzioni (Definizione 24.1). Girando una direzione nel verso opposto l'angolo diventa il suo supplementare, quindi la scelta non è unica: si prende sempre quello acuto o retto, togliendo il segno al prodotto scalare.
:::

::: domanda Come si definisce l'angolo tra una retta e un piano?
Si sposta l'origine nel punto d'incontro, si proietta la direzione della retta sul piano e si prende l'angolo tra la direzione e la sua ombra. Se l'ombra è nulla, l'angolo è retto (Definizione 24.2).
:::

::: domanda Che cosa dice la Proposizione 24.4 e a che cosa serve?
L'angolo con il piano e l'angolo con la normale che punta dalla stessa parte sommano a un angolo retto. Serve a evitare la proiezione: il seno dell'angolo con il piano è il prodotto scalare con la normale, senza segno, diviso il prodotto delle lunghezze.
:::

::: domanda Come si calcola l'angolo diedrale tra due piani?
È l'angolo acuto, o retto, tra le rette dei vettori normali (Proposizione 24.7). Per piani dati con l'equazione, tra i vettori dei numeri davanti alle incognite.
:::

::: domanda Come si definisce la distanza tra un punto e una retta? Qual è la formula?
È la distanza tra il punto e il piede della perpendicolare alla retta (Definizione 24.10). Con la retta $P_0 + t v_0$ è $\frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$ (Proposizione 24.11).
:::

::: domanda Da dove viene la formula della distanza punto–retta?
L'area del parallelogramma con lati $v_0$ e $P - P_0$ si calcola in due modi: con il prodotto vettoriale, e come base per altezza. La base è la lunghezza di $v_0$, l'altezza è la distanza.
:::

::: domanda Come si calcola la distanza tra due rette parallele? E tra due sghembe?
Parallele: è la distanza di un punto di una dall'altra. Sghembe: il prodotto triplo senza segno diviso la lunghezza di $v \times v'$ (Proposizione 24.14), cioè il volume della scatola diviso l'area della base.
:::

::: domanda Come si capisce se due rette si incontrano, sono parallele o sghembe?
Se le direzioni sono proporzionali sono parallele, o coincidono. Altrimenti si calcola $\det(v \mid v' \mid P_0' - P_0)$: se è zero si incontrano, se no sono sghembe.
:::

::: domanda Qual è la formula della distanza punto–piano e come si dimostra?
$\frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ (Proposizione 24.17). Si prende un punto qualsiasi del piano e si proietta sulla normale il vettore che va da lui al punto dato.
:::

::: domanda Come si calcola la distanza tra due piani paralleli?
Si scrivono con gli stessi numeri davanti, $ax + by + cz = d_1$ e $ax + by + cz = d_2$; la distanza è $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$.
:::

::: domanda Quando una retta è perpendicolare a un piano? E parallela?
Perpendicolare quando la sua direzione è proporzionale al vettore normale. Parallela, o contenuta, quando la direzione è perpendicolare al vettore normale, cioè il loro prodotto scalare è zero.
:::

## Glossario

```glossario
Angolo fra due vettori | L'angolo tra 0 e $\pi$ con coseno uguale al prodotto scalare diviso il prodotto delle lunghezze (Definizione 20.12).
Angolo fra due rette | L'angolo acuto o retto tra le direzioni di due rette che si incontrano (Definizione 24.1).
Angolo fra retta e piano | L'angolo tra la direzione della retta e la sua ombra sul piano; retto se l'ombra è nulla (Definizione 24.2).
Angolo diedrale | L'angolo tra due piani che si incontrano, misurato con due rette perpendicolari alla retta comune; uguale all'angolo acuto tra le normali (Definizione 24.6, Proposizione 24.7).
Vettore normale | Un vettore perpendicolare a un piano; per $ax + by + cz = d$ è $(a, b, c)$.
Proiezione ortogonale su un piano | L'ombra $p_\pi(v)$, con $v - p_\pi(v)$ perpendicolare al piano; $p_\pi(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle} n$.
Piede della perpendicolare | Il punto di una retta o di un piano più vicino a un punto dato.
Distanza fra punti | $d(P, Q) = \lVert Q - P \rVert$ (Definizione 24.9).
Distanza punto–retta | $\frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$ (Proposizione 24.11).
Rette sghembe | Rette dello spazio né incidenti né parallele; hanno una sola perpendicolare comune.
Perpendicolare comune | Una retta che incontra due rette disgiunte ed è perpendicolare a tutte e due; il tratto fra le due rette misura la distanza.
Distanza fra rette sghembe | $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$ (Proposizione 24.14).
Rette complanari | Rette su uno stesso piano: si incontrano o sono parallele; equivale a $\det(v \mid v' \mid P_0' - P_0) = 0$.
Distanza punto–piano | $\frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ (Proposizione 24.17).
Volume del parallelepipedo | Il determinante dei tre spigoli in colonna, senza segno.
```

## Checklist

```checklist
- So distinguere quando si calcola un angolo e quando una distanza.
- So calcolare l'angolo tra due rette che si incontrano e scelgo sempre quello acuto o retto.
- So calcolare l'angolo tra una retta e un piano sia con l'ombra (Definizione 24.2) sia con il vettore normale (Proposizione 24.4).
- So calcolare l'angolo diedrale tra due piani con i vettori normali.
- So riconoscere i coseni notevoli e lasciare le altre risposte con l'arcocoseno.
- So calcolare la distanza punto–retta con il prodotto vettoriale e spiegare la formula con l'area del parallelogramma.
- So decidere se due rette sono parallele, si incontrano o sono sghembe con il determinante.
- So calcolare la distanza tra due rette parallele e tra due rette sghembe.
- So calcolare la distanza punto–piano e il piede della perpendicolare.
- So calcolare la distanza tra due piani paralleli dopo averli scritti con gli stessi numeri davanti.
- So togliere le radici dai denominatori per riconoscere i risultati tra le risposte del quiz.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 24 «Lo spazio euclideo III», pp. 122–128: sezioni 24.A (angoli fra sottospazi incidenti) e 24.B (distanze fra sottospazi disgiunti), seguite in ordine con la numerazione originale (Definizioni 24.1, 24.2, 24.6, 24.9, 24.10, 24.13, 24.16; Proposizioni 24.4, 24.7, 24.11, 24.14, 24.17; Esempi 24.3, 24.5, 24.8, 24.12, 24.15, 24.18). Dalle lezioni precedenti: Definizione 20.12 (angolo), Definizione 20.10 (distanza), proiezioni della lezione 21, Proposizione 23.10. Questa lezione delle dispense non ha una sezione di esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §8.1 (norma, angoli, distanze, proiezione ortogonale), §9.1.3 (volume del parallelepipedo), §9.2.6–9.2.10 (perpendicolarità, posizioni, angoli, distanze; da lì vengono la dimostrazione della Proposizione 24.17, il criterio delle rette su uno stesso piano e l'Esempio 9.2.28 sulla perpendicolare comune).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): testo riportato del 07/09/2026 (domanda 7), del 10/07/2025 (domanda 8) e del 10/07/2024 (problema 12), con soluzioni scritte per questi appunti; citati per tipo di domanda gli appelli del 24/01/2024, 08/02/2024, 10/06/2024, 06/09/2024, 16/01/2025, 03/06/2025, 02/09/2025, 05/02/2026 e 03/06/2026.
- Le parti **«Oltre le dispense»** (dimostrazione della Proposizione 24.4, formule con il vettore normale, piede della perpendicolare, piani paralleli, criterio delle rette su uno stesso piano, tabella riassuntiva, esempi ed esercizi aggiuntivi) servono a collegare la lezione al libro e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
