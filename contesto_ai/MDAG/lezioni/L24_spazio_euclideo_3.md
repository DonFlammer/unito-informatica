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
  Quando due rette o piani si incontrano si misura l'angolo che formano; quando non si incontrano si misura quanto
  sono lontani. Qui trovi le definizioni delle dispense e le formule che le rendono un conto di poche righe:
  proiezioni, vettori normali, prodotto vettoriale e determinante. Sono tra le domande più frequenti dell'esame.
materiale: dispense
scheda:
  Dispense: lezione 24 · pp. 122–128
  Libro: Martelli, §9.2.9, §9.2.10 e §8.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 24 «Lo spazio euclideo III»; B. Martelli, Geometria e algebra lineare, §8.1 e §9.2
file_en: L24_euclidean_space_3.html
appunti_html: appunti/MDAG/L24_spazio_euclideo_3.html
genera_html: true
---

## In breve

- Se due sottospazi affini si **incontrano** se ne misura l'**angolo**; se sono **disgiunti**, la **distanza**.
- **Angolo tra due rette** incidenti: è l'angolo fra i vettori direzione. I candidati sono due, $\vartheta$ e $\pi - \vartheta$: si sceglie quello **acuto o retto**, cioè $\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}$.
- **Angolo tra retta e piano**: è l'angolo fra la direzione $v$ della retta e la sua **proiezione ortogonale** sul piano. Si può anche calcolare come $\frac{\pi}{2}$ meno l'angolo acuto con il **vettore normale** (Proposizione 24.4).
- **Angolo tra due piani** (angolo diedrale): è l'angolo acuto (o retto) fra le rette generate dai **vettori normali** (Proposizione 24.7).
- **Distanza punto–retta**: $d(P, r) = \frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$, cioè area del parallelogramma divisa per la base.
- **Distanza tra rette**: se sono parallele è la distanza di un punto dall'altra retta; se sono **sghembe** vale $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$, cioè volume diviso area di base.
- **Distanza punto–piano**: $d(P_0, \pi) = \frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$.
- All'esame non c'è la calcolatrice: gli angoli si lasciano come $\arccos\frac 13$, le distanze come $\frac{2}{7}\sqrt{133}$, e vanno riconosciuti i valori notevoli ($\cos\frac{\pi}{3} = \frac 12$, $\cos\frac{\pi}{4} = \frac{\sqrt 2}{2}$, …).

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Angoli e distanze: l'idea (p. 122)

Pensa a due strade. Se si **incrociano**, la domanda naturale è: con che **angolo**? Se invece una passa su un **cavalcavia** sopra l'altra, non si toccano, ma non sono nemmeno parallele: la domanda naturale è quanto sono **lontane** (l'altezza del cavalcavia). Nello spazio le rette del cavalcavia si chiamano **sghembe**.

La lezione L23 ha definito i sottospazi affini **incidenti** ($S \cap S' \neq \emptyset$). Le dispense aprono la lezione 24 così: per due sottospazi incidenti si studia l'**angolo** dell'intersezione, per due sottospazi non incidenti la **distanza**.

| Coppia | Se si incontrano | Se non si incontrano |
|---|---|---|
| due rette | angolo (Definizione 24.1) | distanza (Definizione 24.13) |
| retta e piano | angolo (Definizione 24.2) | distanza (oltre le dispense: vedi la sezione sul piano) |
| due piani | angolo diedrale (Definizione 24.6) | distanza (oltre le dispense) |
| un punto e una retta o un piano | distanza zero | distanza (Definizioni 24.10 e 24.16) |

Tutto si basa sul prodotto scalare euclideo di $\R^3$ e sulle nozioni della lezione L20. In particolare l'**angolo fra due vettori** non nulli è il numero $\vartheta \in [0, \pi]$ con

$$\cos\vartheta = \frac{\langle v, w \rangle}{\lVert v \rVert \lVert w \rVert}$$

(Definizione 20.12), e l'angolo è acuto, retto o ottuso a seconda che $\langle v, w \rangle$ sia positivo, nullo o negativo.

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

La colonna del seno serve per la scorciatoia dell'angolo fra retta e piano (più avanti).

Per gli altri valori la risposta resta scritta come $\arccos(\dots)$: nei quiz d'esame compaiono proprio risposte come $\arccos\frac 13$ o $\arccos\frac{6}{\sqrt{42}}$.

## Angolo tra due rette (p. 122)

Le dispense considerano separatamente tre casi: due rette, una retta e un piano, due piani. Il primo è il più diretto.

> [!DEF] 24.1 · Angolo tra rette
> Siano $r$ e $r'$ due rette in $\R^3$ che si intersecano in un punto $P$. Abbiamo $r = P + \Span(v)$ e $r' = P + \Span(v')$, e definiamo l'**angolo fra $r$ e $r'$** come l'angolo $\vartheta$ formato da $v$ e $v'$.

Pezzo per pezzo:

- serve che le rette si **incontrino** in un punto $P$: per due rette sghembe questa definizione non si applica;
- $v$ e $v'$ sono **vettori direzione**: generano le giaciture delle due rette;
- a seconda di come si scelgono $v$ e $v'$ gli angoli possibili sono **due**, $\vartheta$ e $\pi - \vartheta$: sostituire $v$ con $-v$ fa diventare ottuso un angolo acuto. Le dispense scelgono sempre l'angolo **acuto o retto**: se $\vartheta$ è ottuso, si prende $\pi - \vartheta$.

Siccome $\cos(\pi - \vartheta) = -\cos\vartheta$, scegliere l'angolo acuto vuol dire prendere il valore assoluto del prodotto scalare:

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
> Le rette $r = (1, 0, 0) + t\,(1, 1, 0)$ e $r' = (1, 0, 0) + s\,(0, 1, 1)$ passano entrambe per $P = (1, 0, 0)$. Con $v = (1, 1, 0)$ e $v' = (0, 1, 1)$:
> - $\langle v, v' \rangle = 0 + 1 + 0 = 1$;
> - $\lVert v \rVert = \sqrt 2$ e $\lVert v' \rVert = \sqrt 2$;
> - $\cos\vartheta = \frac{1}{\sqrt 2 \cdot \sqrt 2} = \frac 12$, quindi $\vartheta = \frac{\pi}{3}$ ($60^\circ$).

> [!ESEMPIO] Quando il conto dà un angolo ottuso
> Le rette per l'origine con direzioni $v = (1, 0, 0)$ e $v' = (-1, 1, 0)$: $\cos = \frac{-1}{1 \cdot \sqrt 2} = -\frac{\sqrt 2}{2}$, cioè $\frac{3\pi}{4}$, che è ottuso. L'angolo fra le **rette** è $\pi - \frac{3\pi}{4} = \frac{\pi}{4}$: lo stesso che si ottiene con il valore assoluto, $\frac{\lvert -1 \rvert}{\sqrt 2} = \frac{\sqrt 2}{2}$.

> [!TRAPPOLA] Angolo fra vettori e angolo fra rette
> Fra due **vettori** l'angolo può essere ottuso (sta in $[0, \pi]$). Fra due **rette** no: il risultato deve stare in $\left[0, \frac{\pi}{2}\right]$. Se trovi un coseno negativo, stai guardando l'angolo fra i vettori: togli il segno meno.

## Angolo tra una retta e un piano (pp. 122–124)

Immagina un'asta piantata storta nel pavimento. L'angolo con il pavimento si misura guardando l'**ombra** dell'asta quando il sole è esattamente sopra: l'ombra è la proiezione ortogonale dell'asta sul pavimento, e l'angolo cercato è quello fra l'asta e la sua ombra.

> [!DEF] 24.2 · Angolo tra retta e piano
> Siano $r$ una retta e $\pi$ un piano che si intersecano in un punto $P$. Definiamo l'angolo $\vartheta$ fra $r$ e $\pi$ nel modo seguente. Trasliamo l'origine in modo che $P = 0$. A questo punto $\pi$ è un sottospazio vettoriale e definiamo il vettore $v' = p_\pi(v)$ facendo la proiezione ortogonale di $v$ su $\pi$. Se $v' = 0$ poniamo $\vartheta = \frac{\pi}{2}$, altrimenti definiamo $\vartheta$ come l'angolo fra $v$ e $v'$.

Pezzo per pezzo:

- $v$ è un vettore direzione della retta: $r = P + \Span(v)$;
- «trasliamo l'origine in $P$» serve solo a far diventare $\pi$ un sottospazio vettoriale, così ha senso proiettare; in pratica si usa la **giacitura** di $\pi$;
- $p_\pi(v)$ è la **proiezione ortogonale** di $v$ sul piano (lezione L21): l'«ombra» di $v$;
- se l'ombra è nulla, $v$ è ortogonale al piano e l'angolo è retto;
- in altre parole, se $r$ non è ortogonale a $\pi$, proiettando $r$ ortogonalmente su $\pi$ si ottiene una retta $r' \subset \pi$, e $\vartheta$ è l'angolo acuto fra $r$ e $r'$.

L'angolo così definito è **automaticamente acuto o retto**: siccome $v - p_\pi(v)$ è ortogonale a $p_\pi(v)$, vale $\langle v, p_\pi(v) \rangle = \lVert p_\pi(v) \rVert^2 \ge 0$, quindi il coseno non è mai negativo.

Per calcolare la proiezione, le dispense ricordano la formula della lezione L21: se $v_1, v_2$ è una **base ortogonale** del piano (la si ottiene sempre con Gram–Schmidt),

$$p_\pi(v) = \frac{\langle v, v_1 \rangle}{\langle v_1, v_1 \rangle} v_1 + \frac{\langle v, v_2 \rangle}{\langle v_2, v_2 \rangle} v_2.$$

> [!ESEMPIO] 24.3
> Consideriamo $\pi = \{x + y - z = 0\} \subset \R^3$ e il vettore $e_3$. Cerchiamo prima una base ortogonale per $\pi$ e troviamo ad esempio
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}.$$
> A questo punto determiniamo la proiezione ortogonale su $\pi$ di un generico vettore di $\R^3$ con la formula precedente:
> $$p_\pi\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \frac{x + y + 2z}{6} \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} + \frac{x - y}{2} \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \frac 13 \begin{pmatrix} 2x - y + z \\ -x + 2y + z \\ x + y + 2z \end{pmatrix}.$$
> Quindi la matrice associata a $p_\pi$ nella base canonica è
> $$\frac 13 \begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}.$$
> Con questa matrice possiamo calcolare la proiezione ortogonale su $\pi$ di qualsiasi vettore di $\R^3$. In particolare $p_\pi(e_3) = \frac 13 (1, 1, 2)$, e allora l'angolo fra $e_3$ e $\pi$ è
> $$\vartheta = \arccos \frac{\langle (1, 1, 2), (0, 0, 1) \rangle}{\lVert (1, 1, 2) \rVert \, \lVert (0, 0, 1) \rVert} = \arccos \frac{2}{\sqrt 6} = \arccos \frac{\sqrt 6}{3} \simeq 0{,}615,$$
> che corrisponde a un angolo di circa $35{,}3^\circ$.

Vediamo i passaggi che l'esempio dà per scontati.

1. **Da dove viene la base ortogonale.** Un primo vettore del piano si trova a occhio: $v_2 = (1, -1, 0)$ soddisfa $1 - 1 - 0 = 0$. Il secondo deve stare nel piano e essere ortogonale a $v_2$: il prodotto vettoriale fra il vettore normale $n = (1, 1, -1)$ e $v_2$ fa proprio questo (è ortogonale a $n$, quindi sta nel piano, ed è ortogonale a $v_2$). Il conto dà $n \times v_2 = (-1, -1, -2)$, cioè, cambiando segno, $v_1 = (1, 1, 2)$. Controllo: $1 + 1 - 2 = 0$ e $\langle v_1, v_2 \rangle = 1 - 1 + 0 = 0$.
2. **I coefficienti.** $\langle (x, y, z), v_1 \rangle = x + y + 2z$ e $\langle v_1, v_1 \rangle = 1 + 1 + 4 = 6$; $\langle (x, y, z), v_2 \rangle = x - y$ e $\langle v_2, v_2 \rangle = 2$.
3. **La somma.** Prima componente:
   $$\frac{x + y + 2z}{6} + \frac{x - y}{2} = \frac{x + y + 2z + 3x - 3y}{6} = \frac{4x - 2y + 2z}{6} = \frac{2x - y + z}{3}.$$
   Allo stesso modo le altre due.
4. **L'angolo.** La proiezione di $e_3$ è la terza colonna della matrice, $\frac 13 (1, 1, 2)$. Per l'angolo il fattore $\frac 13$ non conta (moltiplicare un vettore per un numero positivo non cambia gli angoli): $\langle (1, 1, 2), e_3 \rangle = 2$, $\lVert (1, 1, 2) \rVert = \sqrt 6$, $\lVert e_3 \rVert = 1$. Infine $\frac{2}{\sqrt 6} = \frac{2\sqrt 6}{6} = \frac{\sqrt 6}{3}$.

Con la calcolatrice di Gauss puoi rifare il punto 1 con l'algoritmo di Gram–Schmidt: le righe sono due vettori qualsiasi del piano, $(1, -1, 0)$ e $(1, 0, 1)$ (controlla che soddisfano $x + y - z = 0$). Lo strumento trova $u_2 = \left(\frac 12, \frac 12, 1\right)$ e nella base finale lo riscrive senza frazioni come $(1, 1, 2)$: è proprio il $v_1$ delle dispense.

```widget gauss
titolo: Una base ortogonale del piano $x + y - z = 0$ con Gram–Schmidt
matrice: 1 -1 0; 1 0 1
modo: gram-schmidt
```

### La scorciatoia del vettore normale

Nel piano c'è un vettore privilegiato che non sta **dentro** il piano: il vettore normale. L'angolo con il piano e l'angolo con la normale sono complementari.

> [!PROP] 24.4
> L'angolo fra $v$ e il piano $\pi$ e l'angolo fra $v$ e il vettore ortogonale a $\pi$ che forma un angolo acuto con $v$ si sommano a $\frac{\pi}{2}$.

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
> 1. Scrivo $v = p + q$ con $p = p_\pi(v)$ nella giacitura del piano e $q = v - p$ parallelo al vettore normale (è la decomposizione ortogonale della lezione L21). Scelgo il vettore normale $n$ con $\langle v, n \rangle \ge 0$, cioè che forma un angolo acuto con $v$: allora $q$ ha lo stesso verso di $n$.
> 2. $\cos\vartheta = \frac{\langle v, p \rangle}{\lVert v \rVert \lVert p \rVert} = \frac{\lVert p \rVert^2}{\lVert v \rVert \lVert p \rVert} = \frac{\lVert p \rVert}{\lVert v \rVert}$, perché $\langle v, p \rangle = \langle p + q, p \rangle = \lVert p \rVert^2$.
> 3. Allo stesso modo, detto $\alpha$ l'angolo fra $v$ e $n$: $\cos\alpha = \frac{\langle v, n \rangle}{\lVert v \rVert \lVert n \rVert} = \frac{\lVert q \rVert}{\lVert v \rVert}$, perché $\langle v, n \rangle = \langle q, n \rangle = \lVert q \rVert \lVert n \rVert$ ($q$ e $n$ sono paralleli e con lo stesso verso).
> 4. Per Pitagora $\lVert p \rVert^2 + \lVert q \rVert^2 = \lVert v \rVert^2$, quindi $\cos^2\vartheta + \cos^2\alpha = 1$, cioè $\cos\alpha = \sin\vartheta$ (entrambi gli angoli stanno in $\left[0, \frac{\pi}{2}\right]$). Due angoli acuti con $\cos\alpha = \sin\vartheta$ sono complementari: $\vartheta + \alpha = \frac{\pi}{2}$. $\square$

> [!ESEMPIO] 24.5
> Nell'esempio di prima possiamo calcolare l'angolo $\vartheta$ anche come $\frac{\pi}{2} - \alpha$, dove $\alpha$ è l'angolo fra $e_3$ e il vettore $n = (-1, -1, 1)$, che è ortogonale a $\pi$. Allora
> $$\begin{aligned} \vartheta &= \frac{\pi}{2} - \arccos \frac{\langle (-1, -1, 1), (0, 0, 1) \rangle}{\lVert (-1, -1, 1) \rVert \, \lVert (0, 0, 1) \rVert} \\ &= \frac{\pi}{2} - \arccos \frac{1}{\sqrt 3} \simeq 1{,}570 - 0{,}955 = 0{,}615. \end{aligned}$$
> Otteniamo lo stesso risultato.

Perché $n = (-1, -1, 1)$ e non $(1, 1, -1)$, che è il vettore dei coefficienti di $x + y - z = 0$? Perché la proposizione chiede il vettore normale che forma un angolo **acuto** con $v = e_3$: $\langle (1, 1, -1), e_3 \rangle = -1 < 0$, mentre $\langle (-1, -1, 1), e_3 \rangle = 1 > 0$. Con il valore assoluto il problema sparisce.

> [!OLTRE] Due formule senza Gram–Schmidt
> **La proiezione su un piano.** Se $n$ è un vettore normale del piano $\pi$ (passante per l'origine), la proiezione su $\pi$ è $v$ meno la sua proiezione sulla normale:
> $$p_\pi(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle}\, n.$$
> Nell'Esempio 24.3: $e_3 - \frac{-1}{3}(1, 1, -1) = \left(\frac 13, \frac 13, 1 - \frac 13\right) = \frac 13 (1, 1, 2)$, come prima.
>
> **L'angolo retta–piano in una riga.** Dalla Proposizione 24.4 e dal punto 4 della dimostrazione:
> $$\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}.$$
> Nell'Esempio 24.3: $\sin\vartheta = \frac{1}{1 \cdot \sqrt 3}$, quindi $\vartheta = \arcsin\frac{1}{\sqrt 3}$, che è lo stesso angolo di $\arccos\frac{\sqrt 6}{3}$ perché $\left(\frac{1}{\sqrt 3}\right)^2 + \left(\frac{\sqrt 6}{3}\right)^2 = \frac 13 + \frac 23 = 1$.

> [!METODO] L'angolo fra una retta e un piano
> 1. Controlla che si incontrino (se la retta è parallela al piano, l'angolo non è definito).
> 2. Prendi il vettore direzione $v$ della retta e un vettore normale $n$ del piano (i coefficienti dell'equazione cartesiana, oppure $v_1 \times v_2$ se il piano è in forma parametrica).
> 3. **Metodo delle dispense**: calcola $p_\pi(v)$ e poi l'angolo fra $v$ e $p_\pi(v)$. **Metodo veloce**: $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}$.
> 4. Se $\langle v, n \rangle = 0$ la retta è parallela al piano (o ci sta dentro); se $v$ è proporzionale a $n$ l'angolo è $\frac{\pi}{2}$.

## Angolo tra due piani (p. 124)

Apri un libro a metà: le due metà della copertina sono due piani che si incontrano nella retta della costola. L'apertura del libro si misura guardando dall'alto, cioè tagliando con un piano **perpendicolare** alla costola: il taglio è fatto di due segmenti, e l'angolo fra quei segmenti è l'apertura.

> [!DEF] 24.6 · Angolo tra piani
> Siano $\pi_1$ e $\pi_2$ due piani che si intersecano in una retta $r = \pi_1 \cap \pi_2$. L'angolo (**diedrale**) fra $\pi_1$ e $\pi_2$ è definito nel modo seguente: si prendono due rette $s_1 \subset \pi_1$ e $s_2 \subset \pi_2$ incidenti ed entrambe ortogonali a $r$; l'angolo diedrale fra $\pi_1$ e $\pi_2$ è per definizione l'angolo $\alpha$ fra $s_1$ e $s_2$. Si ottengono in realtà due angoli $\alpha$ e $\pi - \alpha$, e scegliamo come sempre quello acuto (o retto).

La definizione è geometrica ma scomoda da usare. La proposizione successiva la trasforma in un conto.

> [!PROP] 24.7
> Siano $v_1$ e $v_2$ due vettori non nulli ortogonali a $\pi_1$ e $\pi_2$. L'angolo $\alpha$ fra $\pi_1$ e $\pi_2$ è uguale all'angolo acuto (o retto) fra le rette generate da $v_1$ e $v_2$.

> [!IDEA] Perché si possono usare le normali
> Guarda tutto nel piano perpendicolare alla retta $r$ (il «taglio» del libro). Lì dentro stanno le due rette $s_1$ e $s_2$ della definizione, e stanno anche le due normali $v_1$ e $v_2$ (sono ortogonali a $r$, perché $r$ sta in entrambi i piani). In quel piano $v_1$ è perpendicolare a $s_1$ e $v_2$ a $s_2$: girare due rette di un angolo retto non cambia l'angolo fra loro. Il libro di Martelli lascia questo fatto come esercizio (Esercizio 9.2.34).

Quindi per due piani $\pi_1 = \{a_1 x + b_1 y + c_1 z = d_1\}$ e $\pi_2 = \{a_2 x + b_2 y + c_2 z = d_2\}$ l'angolo diedrale è semplicemente l'angolo acuto (o retto) fra le rette generate dai **vettori dei coefficienti** $(a_1, b_1, c_1)$ e $(a_2, b_2, c_2)$:

$$\cos\alpha = \frac{\lvert a_1 a_2 + b_1 b_2 + c_1 c_2 \rvert}{\sqrt{a_1^2 + b_1^2 + c_1^2}\,\sqrt{a_2^2 + b_2^2 + c_2^2}}.$$

> [!ESEMPIO] 24.8
> I piani $\pi_1 = \{x + y - z = 3\}$ e $\pi_2 = \{x - y - z = 9\}$ formano un angolo
> $$\vartheta = \arccos \frac{\langle (1, 1, -1), (1, -1, -1) \rangle}{\lVert (1, 1, -1) \rVert \, \lVert (1, -1, -1) \rVert} = \arccos \frac{1}{\sqrt 3 \sqrt 3} = \arccos \frac 13 \simeq 1{,}230.$$
> Questo corrisponde a un angolo di circa $70{,}5^\circ$.

I conti: $\langle (1, 1, -1), (1, -1, -1) \rangle = 1 - 1 + 1 = 1$ e le due norme valgono $\sqrt{1 + 1 + 1} = \sqrt 3$. Il coseno $\frac 13$ non è un valore notevole: la risposta si lascia come $\arccos\frac 13$. Nota che i termini noti $3$ e $9$ non servono: l'angolo dipende solo dalle **giaciture**.

> [!ESEMPIO] Due piani perpendicolari
> I due piani dell'Esempio 23.9, $\{x + y = 1\}$ e $\{x - y + z = 3\}$, hanno normali $(1, 1, 0)$ e $(1, -1, 1)$ con prodotto scalare $1 - 1 + 0 = 0$: il coseno è $0$ e i piani sono **perpendicolari** ($\alpha = \frac{\pi}{2}$).

> [!TRAPPOLA] Normali proporzionali
> Se i vettori normali sono proporzionali (per esempio $(1, 2, -1)$ e $(-2, -4, 2)$), il conto darebbe $\cos\alpha = 1$: i piani sono **paralleli** e non si incontrano (oppure coincidono). Non ha senso parlare di angolo diedrale: si calcola la distanza.

## Distanza tra punti e distanza punto–retta (pp. 124–126)

Le dispense definiscono la distanza $d(S, S')$ fra due sottospazi affini di $\R^3$. Se sono **incidenti** la distanza è **zero**. Se sono **disgiunti** la distanza è positiva ed è definita caso per caso. L'idea comune: si cerca il **segmento più corto** che li collega, che è sempre quello **perpendicolare**.

> [!DEF] 24.9 · Distanza fra punti
> Come già sappiamo, la distanza $d(P, Q)$ fra due punti $P, Q \in \R^3$ è definita usando la norma:
> $$d(P, Q) = \lVert \overrightarrow{PQ} \rVert = \lVert Q - P \rVert.$$

Per esempio $d((1, 2, 3), (3, 1, 1)) = \lVert (2, -1, -2) \rVert = \sqrt{4 + 1 + 4} = 3$ (è la Definizione 20.10 della lezione L20).

> [!DEF] 24.10 · Distanza fra punto e retta
> La distanza $d(P, r)$ fra un punto $P$ e una retta $r$ nello spazio è definita nel modo seguente. Tracciamo (Figura 10 delle dispense) la perpendicolare $s$ a $r$ passante per $P$ e definiamo
> $$d(P, r) = d(P, Q), \quad \text{dove } Q = r \cap s.$$

$Q$ è il **piede della perpendicolare**: il punto della retta più vicino a $P$. Se $r$ è in forma parametrica $r = \{P_0 + t v_0\}$, la distanza si calcola senza cercare $Q$, con il prodotto vettoriale.

> [!PROP] 24.11
> Vale l'uguaglianza
> $$d(P, r) = \frac{\lVert v_0 \times v_1 \rVert}{\lVert v_0 \rVert}, \quad \text{dove } v_1 = \overrightarrow{P_0 P} = P - P_0.$$

La dimostrazione delle dispense calcola la stessa area in due modi.

1. Considera il parallelogramma con lati $v_0$ (lungo la retta) e $v_1$ (da $P_0$ a $P$).
2. Per il Corollario 23.3 la sua area è $\lVert v_0 \times v_1 \rVert$.
3. Come base per altezza: la base è $\lVert v_0 \rVert$ e l'altezza è la distanza di $P$ dalla retta della base, cioè $d(P, Q)$.
4. Uguagliando, $\lVert v_0 \times v_1 \rVert = \lVert v_0 \rVert \cdot d(P, Q)$, e dividendo per $\lVert v_0 \rVert$ si ottiene la formula.

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

> [!ESEMPIO] 24.12
> Consideriamo il punto e la retta
> $$P = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}, \qquad r = \left\{ \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} + t \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} \right\}.$$
> La distanza fra $P$ e $r$ è
> $$d(P, r) = \frac{\left\lVert (3, 2, 1) \times (2, -2, 2) \right\rVert}{\lVert (3, 2, 1) \rVert} = \frac{\lVert (6, -4, -10) \rVert}{\sqrt{14}} = \frac{2\sqrt{38}}{\sqrt{14}} = \frac 27 \sqrt{133}.$$

Tutti i passaggi:

1. $P_0 = (-1, 0, 1)$ e $v_0 = (3, 2, 1)$; $v_1 = P - P_0 = (1 - (-1),\ -2 - 0,\ 3 - 1) = (2, -2, 2)$.
2. Prodotto vettoriale (righe affiancate $(3, 2)$, $(2, -2)$, $(1, 2)$): $\big(2 \cdot 2 - 1 \cdot (-2),\ -(3 \cdot 2 - 1 \cdot 2),\ 3 \cdot (-2) - 2 \cdot 2\big) = (6, -4, -10)$.
3. $\lVert (6, -4, -10) \rVert = \sqrt{36 + 16 + 100} = \sqrt{152} = \sqrt{4 \cdot 38} = 2\sqrt{38}$ e $\lVert v_0 \rVert = \sqrt{9 + 4 + 1} = \sqrt{14}$.
4. Semplifico: $\frac{2\sqrt{38}}{\sqrt{14}} = 2\sqrt{\frac{38}{14}} = 2\sqrt{\frac{19}{7}} = \frac{2\sqrt{19}}{\sqrt 7} = \frac{2\sqrt{19}\sqrt 7}{7} = \frac{2\sqrt{133}}{7}$.

> [!OLTRE] Il piede della perpendicolare, e un controllo
> Il punto $Q$ si trova proiettando $v_1$ sulla retta (lezione L21):
> $$Q = P_0 + \frac{\langle v_1, v_0 \rangle}{\langle v_0, v_0 \rangle} v_0.$$
> Nell'Esempio 24.12: $\langle v_1, v_0 \rangle = 6 - 4 + 2 = 4$ e $\langle v_0, v_0 \rangle = 14$, quindi $Q = (-1, 0, 1) + \frac{2}{7}(3, 2, 1) = \left(-\frac 17, \frac 47, \frac 97\right)$. Allora $P - Q = \left(\frac 87, -\frac{18}{7}, \frac{12}{7}\right)$, con norma $\frac{\sqrt{64 + 324 + 144}}{7} = \frac{\sqrt{532}}{7} = \frac{2\sqrt{133}}{7}$: la stessa distanza. Controllo che $P - Q$ sia ortogonale alla retta: $\frac{24 - 36 + 12}{7} = 0$.

> [!TRAPPOLA] Si divide per la norma, non per il suo quadrato
> Nella formula c'è $\lVert v_0 \rVert$ al denominatore, non $\lVert v_0 \rVert^2$ (che compare invece nella proiezione). E il vettore $v_1$ va da un punto **della retta** al punto $P$: usare $P$ al posto di $P - P_0$ dà un risultato sbagliato (a meno che la retta passi per l'origine).

## Distanza tra due rette (pp. 126–127)

> [!DEF] 24.13 · Distanza fra rette
> La distanza $d(r, r')$ fra due rette $r$ ed $r'$ **disgiunte** nel piano o nello spazio è definita nel modo seguente. Le due rette $r$ e $r'$ sono parallele o sghembe. In entrambi i casi troviamo una retta $s$ perpendicolare a entrambe. Definiamo quindi
> $$d(r, r') = d(P, P'), \quad \text{dove } P = r \cap s \text{ e } P' = r' \cap s.$$

Pezzo per pezzo:

- **disgiunte**: se si incontrano la distanza è zero;
- **parallele**: stessa direzione, nessun punto comune; le perpendicolari comuni sono infinite, tutte della stessa lunghezza;
- **sghembe**: direzioni diverse e nessun punto comune (lezione L23); la perpendicolare comune $s$ è **unica** (Martelli, Proposizione 9.2.27) ed è il «pilone» del cavalcavia.

Se $r = \{P_0 + t v\}$ e $r' = \{P_0' + u v'\}$ sono in forma parametrica, la distanza si calcola rapidamente.

**Rette parallele.** La distanza $d(r, r')$ è uguale a $d(P_0, r')$: si prende un punto di $r$ e si applica la Proposizione 24.11.

> [!ESEMPIO] Due rette parallele
> $r = \{t\,(1, 1, 0)\}$ e $r' = \{(1, 0, 0) + s\,(1, 1, 0)\}$ hanno la stessa direzione, e $(0, 0, 0) \in r$ non sta su $r'$. Con $P = (0, 0, 0)$, $P_0' = (1, 0, 0)$, $v_0 = (1, 1, 0)$:
> - $P - P_0' = (-1, 0, 0)$;
> - $(1, 1, 0) \times (-1, 0, 0) = \big(1 \cdot 0 - 0 \cdot 0,\ -(1 \cdot 0 - 0 \cdot (-1)),\ 1 \cdot 0 - 1 \cdot (-1)\big) = (0, 0, 1)$;
> - $d(r, r') = \frac{\lVert (0, 0, 1) \rVert}{\lVert (1, 1, 0) \rVert} = \frac{1}{\sqrt 2} = \frac{\sqrt 2}{2}$.
>
> Nel piano $z = 0$ sono le rette $y = x$ e $y = x - 1$: in verticale distano $1$, ma il segmento perpendicolare, che misura la distanza vera, è più corto, $\frac{\sqrt 2}{2}$.

**Rette sghembe.** Qui serve una formula nuova, con un **volume** al posto dell'area (Figura 11 delle dispense).

> [!PROP] 24.14
> Se $r$ e $r'$ sono sghembe, vale la formula
> $$d(r, r') = \frac{\lvert \det(v \mid v' \mid v'') \rvert}{\lVert v \times v' \rVert}, \quad \text{dove } v'' = \overrightarrow{P_0 P_0'} = P_0' - P_0.$$

Il ragionamento è lo stesso della Proposizione 24.11, una dimensione più su.

1. Considera il parallelepipedo generato da $v$, $v'$ e $v''$.
2. Il suo volume è $\lvert \det(v \mid v' \mid v'') \rvert$: è il significato geometrico del determinante (Martelli, Proposizione 9.1.9, dimostrata con il prodotto vettoriale).
3. Come area di base per altezza: la base è il parallelogramma con lati $v$ e $v'$, di area $\lVert v \times v' \rVert$; l'altezza è la distanza fra i due piani paralleli che contengono le due rette, cioè proprio $d = d(P, P') = d(r, r')$.
4. Uguagliando, $\lvert \det(v \mid v' \mid v'') \rvert = d(r, r') \cdot \lVert v \times v' \rVert$, da cui la formula.

> [!ESEMPIO] 24.15
> Calcoliamo la distanza fra le rette sghembe
> $$r = \left\{ \begin{pmatrix} 2 \\ -5 \\ 1 \end{pmatrix} + t \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix} \right\}, \qquad r' = \left\{ \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + u \begin{pmatrix} -1 \\ -2 \\ 3 \end{pmatrix} \right\}.$$
> Questa è
> $$\begin{aligned} d(r, r') &= \frac{\left\lvert \det\begin{pmatrix} 2 & -1 & -1 \\ 0 & -2 & 6 \\ 1 & 3 & -1 \end{pmatrix} \right\rvert}{\left\lVert (2, 0, 1) \times (-1, -2, 3) \right\rVert} \\ &= \frac{\lvert 2(2 - 18) + (-6 - 2) \rvert}{\sqrt{2^2 + (-7)^2 + (-4)^2}} = \frac{40}{\sqrt{69}} = \frac{40}{69}\sqrt{69}. \end{aligned}$$

Tutti i passaggi:

1. $v = (2, 0, 1)$, $v' = (-1, -2, 3)$ e $v'' = P_0' - P_0 = (1 - 2,\ 1 - (-5),\ 0 - 1) = (-1, 6, -1)$: sono le tre colonne della matrice.
2. Determinante con Laplace sulla **prima colonna** $(2, 0, 1)$: $2 \cdot \det\begin{pmatrix} -2 & 6 \\ 3 & -1 \end{pmatrix} - 0 + 1 \cdot \det\begin{pmatrix} -1 & -1 \\ -2 & 6 \end{pmatrix} = 2\,(2 - 18) + (-6 - 2) = -32 - 8 = -40$. In valore assoluto: $40$.
3. Prodotto vettoriale (righe affiancate $(2, -1)$, $(0, -2)$, $(1, 3)$): $\big(0 \cdot 3 - 1 \cdot (-2),\ -(2 \cdot 3 - 1 \cdot (-1)),\ 2 \cdot (-2) - 0 \cdot (-1)\big) = (2, -7, -4)$, di norma $\sqrt{4 + 49 + 16} = \sqrt{69}$.
4. $d = \frac{40}{\sqrt{69}} = \frac{40\sqrt{69}}{69}$.

> [!OLTRE] Il determinante dice anche se due rette si incontrano
> Per due rette qualsiasi $r = \{P_0 + t v\}$ e $r' = \{P_0' + u v'\}$ vale: sono **complanari** (cioè incidenti o parallele) **se e solo se** $\det(v \mid v' \mid P_0' - P_0) = 0$ (Martelli, Proposizione 9.2.41). Infatti il determinante è zero esattamente quando i tre vettori stanno in uno stesso piano. Ne viene una ricetta completa:
> 1. se $v$ e $v'$ sono **proporzionali**, le rette sono parallele (o coincidono): distanza con la Proposizione 24.11;
> 2. altrimenti calcola $\det(v \mid v' \mid P_0' - P_0)$: se è $0$ le rette sono **incidenti** (distanza $0$, e si può calcolare l'angolo); se non è $0$ sono **sghembe** e la distanza è la Proposizione 24.14.
>
> Siccome $\det(v \mid v' \mid v'') = \langle v \times v', v'' \rangle$ (prodotto triplo, lezione L23), conviene calcolare prima $v \times v'$: serve sia al numeratore sia al denominatore.

## Distanza tra un punto e un piano (pp. 127–128)

> [!DEF] 24.16 · Distanza fra punto e piano
> La distanza fra un punto $P_0$ e un piano $\pi$ nello spazio è definita in modo simile a quanto già visto: si traccia la perpendicolare $s$ a $\pi$ passante per $P_0$ e si definisce
> $$d(P_0, \pi) = d(P_0, Q), \quad \text{con } Q = s \cap \pi.$$

Se il piano è in forma cartesiana, c'è una formula che non richiede di trovare $Q$.

> [!PROP] 24.17
> Se $\pi = \{ax + by + cz = d\}$ e $P_0 = (x_0, y_0, z_0)$, vale
> $$d(P_0, \pi) = \frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}.$$

Pezzo per pezzo:

- al numeratore sostituisci le coordinate di $P_0$ nell'equazione del piano **portata nella forma** $ax + by + cz - d$: il risultato è zero esattamente quando $P_0$ sta sul piano;
- al denominatore c'è la norma del vettore normale $n = (a, b, c)$;
- se moltiplichi l'equazione per un numero, numeratore e denominatore cambiano dello stesso fattore: la distanza non cambia.

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
> 1. Sia $n = (a, b, c)$, che è ortogonale al piano (lezione L23), e sia $P = (x, y, z)$ un punto **qualsiasi** del piano.
> 2. Poni $w = P_0 - P$. Il segmento $P_0 Q$ è parallelo a $n$, e la sua lunghezza è la lunghezza della proiezione di $w$ sulla retta di $n$: $d(P_0, Q) = \lVert p_n(w) \rVert = \frac{\lvert \langle w, n \rangle \rvert}{\lVert n \rVert}$ (lezione L21: $p_n(w) = \frac{\langle w, n \rangle}{\langle n, n \rangle} n$).
> 3. Sviluppo: $\langle w, n \rangle = a(x_0 - x) + b(y_0 - y) + c(z_0 - z) = a x_0 + b y_0 + c z_0 - (ax + by + cz)$.
> 4. Siccome $P \in \pi$, vale $ax + by + cz = d$: quindi $\langle w, n \rangle = a x_0 + b y_0 + c z_0 - d$, e si ottiene la formula. $\square$

> [!ESEMPIO] 24.18
> Consideriamo il piano e il punto seguenti in $\R^3$:
> $$\pi = \{2x - y + z = 4\}, \qquad P_0 = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}.$$
> Applicando la formula troviamo
> $$d(P_0, \pi) = \frac{\lvert 2 \cdot 2 - 1 - 2 - 4 \rvert}{\sqrt 6} = \frac{\sqrt 6}{2}.$$

I conti: al numeratore $4 - 1 - 2 - 4 = -3$, in valore assoluto $3$; al denominatore $\sqrt{4 + 1 + 1} = \sqrt 6$. Infine $\frac{3}{\sqrt 6} = \frac{3\sqrt 6}{6} = \frac{\sqrt 6}{2}$.

```widget spazio
titolo: La distanza del punto $P_0 = (2, 1, -2)$ dal piano $2x - y + z = 4$ (Esempio 24.18)
modo: piano
piano: 2 -1 1 = 4
punto: 2 1 -2
```

Lo strumento disegna il piano, il vettore normale $n = (2, -1, 1)$, il punto $P_0$ e il **piede della perpendicolare** $H$ (che nelle dispense si chiama $Q$). Deve darti $d = 1{,}225$, cioè $\frac{\sqrt 6}{2}$, e $H = (3;\ 0{,}5;\ -1{,}5)$. Prova a spostare $P_0$ **parallelamente al piano**, per esempio in $(3, 3, -2)$, cioè scrivi `3 3 -2` (hai aggiunto $(1, 2, 0)$, che soddisfa $2 \cdot 1 - 2 + 0 = 0$, quindi sta nella giacitura): la distanza non cambia. Poi moltiplica l'equazione per $2$, cioè scrivi `4 -2 2 = 8`: anche così la distanza resta la stessa.

> [!OLTRE] Il piede della perpendicolare e altre due distanze
> **Il piede $Q$.** Partendo da $P_0$ ci si muove lungo la normale fino al piano:
> $$Q = P_0 - \frac{a x_0 + b y_0 + c z_0 - d}{a^2 + b^2 + c^2}\, (a, b, c).$$
> Nell'Esempio 24.18: $Q = (2, 1, -2) - \frac{-3}{6}(2, -1, 1) = (2, 1, -2) + \left(1, -\frac 12, \frac 12\right) = \left(3, \frac 12, -\frac 32\right)$. Controllo: $6 - \frac 12 - \frac 32 = 4$.
>
> **Due piani paralleli** $ax + by + cz = d_1$ e $ax + by + cz = d_2$ (con **gli stessi** coefficienti): la distanza è $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$, perché basta prendere un punto del primo e usare la Proposizione 24.17.
>
> **Una retta parallela a un piano**: tutti i suoi punti hanno la stessa distanza dal piano, quindi basta un suo punto qualsiasi.

## Tutte le formule in una tabella (oltre le dispense)

> [!OLTRE] Il riassunto per il foglio d'esame
> Notazioni: $r = P_0 + \Span(v)$, $r' = P_0' + \Span(v')$, piano $\pi = \{ax + by + cz = d\}$ con normale $n = (a, b, c)$.
>
> | Che cosa | Formula | Dove |
> |---|---|---|
> | angolo fra rette incidenti | $\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}$ | Def. 24.1 |
> | angolo fra retta e piano | angolo fra $v$ e $p_\pi(v)$; $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}$ | Def. 24.2, Prop. 24.4 |
> | angolo fra piani | $\cos\alpha = \frac{\lvert \langle n_1, n_2 \rangle \rvert}{\lVert n_1 \rVert \lVert n_2 \rVert}$ | Prop. 24.7 |
> | punto–punto | $\lVert Q - P \rVert$ | Def. 24.9 |
> | punto–retta | $\frac{\lVert v \times (P - P_0) \rVert}{\lVert v \rVert}$ | Prop. 24.11 |
> | rette parallele | $d(P_0, r')$ | Def. 24.13 |
> | rette sghembe | $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$ | Prop. 24.14 |
> | punto–piano | $\frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ | Prop. 24.17 |
> | piani paralleli | $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$ (stessi coefficienti) | oltre le dispense |

> [!OLTRE] Dove trovarlo nel libro
> Nel libro di Martelli: angoli fra rette, fra retta e piano e fra piani nel §9.2.9 (pp. 285–287, con la Proposizione 9.2.33: fra tutte le rette del piano per $P$, quella proiettata forma l'angolo più piccolo con $r$); distanze nel §9.2.10 (pp. 287–291: Proposizioni 9.2.36, 9.2.39, 9.2.41 e 9.2.42, che sono le nostre 24.11, 24.14, il criterio di complanarità e 24.17). Norma, angolo fra vettori, distanza e proiezione ortogonale sono nel §8.1 (pp. 240–245); il volume del parallelepipedo nella Proposizione 9.1.9 (p. 271); le rette perpendicolari a un piano o a una retta nel §9.2.6 (pp. 279–281).

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha **10 quiz** a 5 risposte (una sola giusta) e **2 problemi da 11 punti**, corretti solo con **almeno 6 quiz giusti**; dura **2 ore**, **senza calcolatrice**, e si può portare solo un foglio di **4 facciate scritte a mano**. Gli appelli 2026/27 sono il **22/01/2027** e il **05/02/2027** alle 14:00. Tutti i dettagli nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026.** Angoli e distanze sono presenti in quasi ogni appello.

- **Quiz sulla distanza fra due rette**: 08/02/2024 (domanda 10), 06/09/2024 (domanda 6), 05/02/2026 (domanda 10, dove le rette si incontrano e la risposta giusta è $0$), 03/06/2026 (domanda 10), 07/09/2026 (domanda 7).
- **Quiz sulla distanza punto–piano**: 16/01/2025 (domanda 4). **Quiz sull'angolo retta–piano**: 10/07/2025 (domanda 8). **Quiz sulla retta perpendicolare a un piano**: 02/09/2025 (domanda 9): la direzione deve essere proporzionale al vettore normale.
- **Problemi aperti con l'angolo fra una retta e un piano**, di solito dopo aver trovato una retta come intersezione di piani o una proiezione: 24/01/2024, 10/06/2024, 10/07/2024, 06/09/2024, 02/09/2025, 03/06/2026, 07/09/2026 (sempre il problema 12). **Distanza fra rette** in un problema aperto: 10/07/2024 e 03/06/2025.

Due quiz veri, svolti.

*Appello del 07/09/2026, domanda 7.* La distanza tra le rette $r_1 = (2, 0, 0) + \Span(0, 1, 1)$ e $r_2 = (0, 3, 0) + \Span(-1, 1, 0)$ è: (a) $3$; (b) $\frac{\sqrt 3}{3}$; (c) $3\sqrt 3$; (d) $\sqrt 3$; (e) $3 + \sqrt 3$.

Svolgimento: $v = (0, 1, 1)$ e $v' = (-1, 1, 0)$ non sono proporzionali, e $v'' = (0, 3, 0) - (2, 0, 0) = (-2, 3, 0)$. Prodotto vettoriale (righe affiancate $(0, -1)$, $(1, 1)$, $(1, 0)$): $v \times v' = \big(1 \cdot 0 - 1 \cdot 1,\ -(0 \cdot 0 - 1 \cdot (-1)),\ 0 \cdot 1 - 1 \cdot (-1)\big) = (-1, -1, 1)$, di norma $\sqrt 3$. Prodotto triplo: $\langle (-1, -1, 1), (-2, 3, 0) \rangle = 2 - 3 + 0 = -1 \neq 0$, quindi le rette sono sghembe e $d = \frac{1}{\sqrt 3} = \frac{\sqrt 3}{3}$: risposta (b). Qui la razionalizzazione della lezione L01 serve davvero.

*Appello del 10/07/2025, domanda 8.* L'angolo tra il piano $\Pi = \{x + z = 3\}$ e la retta $r = {}^t(1, 0, 1) + s\,{}^t(2, 2, 0)$ è: (a) $\frac 12$; (b) $0$; (c) $\frac{\pi}{3}$; (d) $\frac{\pi}{2} - \frac 12$; (e) $\frac{\pi}{6}$.

Svolgimento: $v = (2, 2, 0)$, $n = (1, 0, 1)$, $\langle v, n \rangle = 2 \neq 0$ (la retta non è parallela al piano, quindi (b) è esclusa). Con la scorciatoia: $\sin\vartheta = \frac{2}{2\sqrt 2 \cdot \sqrt 2} = \frac 12$, quindi $\vartheta = \frac{\pi}{6}$: risposta (e). Con il metodo delle dispense: $p_\pi(v) = (2, 2, 0) - \frac 22 (1, 0, 1) = (1, 2, -1)$ e $\cos\vartheta = \frac{2 + 4 + 0}{2\sqrt 2 \cdot \sqrt 6} = \frac{6}{4\sqrt 3} = \frac{\sqrt 3}{2}$, di nuovo $\frac{\pi}{6}$. Le risposte (a) e (d) sono trappole: $\frac 12$ è il **seno** dell'angolo, non l'angolo; (c) è l'angolo con la normale.

> [!METODO] Distanza fra due rette, in quattro righe
> 1. Scrivi $v$, $v'$, $v'' = P_0' - P_0$.
> 2. Se $v$ e $v'$ sono proporzionali: rette parallele, $d = \frac{\lVert v \times (P_0' - P_0) \rVert}{\lVert v \rVert}$.
> 3. Altrimenti calcola $v \times v'$ e poi $\langle v \times v', v'' \rangle$. Se è $0$, le rette si incontrano: $d = 0$ (come nel quiz del 05/02/2026).
> 4. Se non è $0$: $d = \frac{\lvert \langle v \times v', v'' \rangle \rvert}{\lVert v \times v' \rVert}$, e razionalizza.

> [!METODO] L'angolo fra retta e piano nei problemi aperti
> I problemi chiedono spesso, nell'ordine: trovare la retta (intersezione di due piani, lezione L23), mostrare che incontra il piano, calcolare la **proiezione ortogonale** della direzione sul piano, e infine l'angolo. Il punto «proiezione» prepara proprio la Definizione 24.2: una volta trovata $p_\pi(v)$, l'angolo è $\arccos\frac{\langle v, p_\pi(v) \rangle}{\lVert v \rVert \lVert p_\pi(v) \rVert}$. Se il testo chiede il **coseno** dell'angolo (come il 03/06/2026), fermati al coseno.

**Errori da evitare.**

- Dare come angolo fra rette (o fra piani) un angolo **ottuso**: si prende sempre quello acuto o retto.
- Confondere l'angolo con la **normale** e l'angolo con il **piano**: sono complementari.
- Scrivere come «angolo» il valore del **coseno** o del **seno** (la trappola della risposta $\frac 12$).
- Nella formula punto–piano, dimenticare di portare **tutto a sinistra** ($ax + by + cz - d$) o dimenticare il **valore assoluto**.
- Confrontare piani paralleli con equazioni **non normalizzate**: $x + 2y + 2z = 1$ e $2x + 4y + 4z = 5$ vanno prima resi con gli stessi coefficienti.
- Usare la formula delle rette sghembe per rette **parallele**: il denominatore $\lVert v \times v' \rVert$ è zero.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la tabella delle formule (sezione precedente), la tabella dei coseni notevoli, la ricetta «parallele / incidenti / sghembe» con il determinante, e la formula del piede della perpendicolare su un piano.

## Quiz

```quiz
D: Le rette $r = (1, 0, 0) + t\,(1, 1, 0)$ e $r' = (1, 0, 0) + s\,(0, 1, 1)$ si incontrano in $(1, 0, 0)$. Quale angolo formano?
+ $\frac{\pi}{3}$
- $\frac{\pi}{6}$
- $\frac{2\pi}{3}$
- $\frac{\pi}{4}$
- $\arccos\frac 14$
= $\cos\vartheta = \frac{\lvert \langle (1, 1, 0), (0, 1, 1) \rangle \rvert}{\sqrt 2 \cdot \sqrt 2} = \frac 12$, quindi $\vartheta = \frac{\pi}{3}$. $\frac{2\pi}{3}$ è l'angolo ottuso, che non si sceglie mai per due rette.

D: Qual è l'angolo fra il piano $\pi = \{x + y = 3\}$ e la retta $r = (0, 0, 1) + t\,(1, 0, 1)$?
+ $\frac{\pi}{6}$
- $\frac{\pi}{3}$
- $\frac 12$
- $\frac{\pi}{2} - \frac 12$
- $0$
= $v = (1, 0, 1)$, $n = (1, 1, 0)$: $\sin\vartheta = \frac{\lvert 1 \rvert}{\sqrt 2 \cdot \sqrt 2} = \frac 12$, quindi $\vartheta = \frac{\pi}{6}$. Con la proiezione: $p_\pi(v) = (1, 0, 1) - \frac 12 (1, 1, 0) = \left(\frac 12, -\frac 12, 1\right)$ e $\cos\vartheta = \frac{3/2}{\sqrt 2 \cdot \sqrt{3/2}} = \frac{\sqrt 3}{2}$. $\frac{\pi}{3}$ è l'angolo con la normale, $\frac 12$ il seno. Simile all'appello del 10/07/2025 (domanda 8), che aveva gli stessi distrattori.

D: Qual è l'angolo diedrale fra i piani $\{x = 2\}$ e $\{x + y = 3\}$?
+ $\frac{\pi}{4}$
- $\frac{3\pi}{4}$
- $\frac{\pi}{3}$
- $\frac{\pi}{2}$
- $\frac{\pi}{6}$
= Normali $(1, 0, 0)$ e $(1, 1, 0)$: $\cos\alpha = \frac{1}{1 \cdot \sqrt 2} = \frac{\sqrt 2}{2}$, quindi $\alpha = \frac{\pi}{4}$ (Proposizione 24.7). $\frac{3\pi}{4}$ è l'angolo ottuso, che si scarta.

D: La distanza del punto $P = (1, 2, 3)$ dal piano $\pi = \{2x - y + 2z = 1\}$ è:
+ $\frac 53$
- $5$
- $\frac 59$
- $\frac 73$
- $\frac{\sqrt 5}{3}$
= $\frac{\lvert 2 - 2 + 6 - 1 \rvert}{\sqrt{4 + 1 + 4}} = \frac{5}{3}$. $5$ dimentica il denominatore, $\frac 59$ divide per $\lVert n \rVert^2$, $\frac 73$ sbaglia il segno di $d$ ($+1$ invece di $-1$). Simile all'appello del 16/01/2025 (domanda 4).

D: La distanza del punto $P = (2, 0, 1)$ dalla retta $r = \{t\,(1, 1, 0) \mid t \in \R\}$ è:
+ $\sqrt 3$
- $\sqrt 6$
- $3$
- $\sqrt 2$
- $\frac{\sqrt 6}{2}$
= $v_0 = (1, 1, 0)$, $v_1 = P - (0, 0, 0) = (2, 0, 1)$, $v_0 \times v_1 = (1 \cdot 1 - 0 \cdot 0,\ -(1 \cdot 1 - 0 \cdot 2),\ 1 \cdot 0 - 1 \cdot 2) = (1, -1, -2)$, di norma $\sqrt 6$. Quindi $d = \frac{\sqrt 6}{\sqrt 2} = \sqrt 3$. $\sqrt 6$ dimentica di dividere per $\lVert v_0 \rVert$; $\frac{\sqrt 6}{2}$ divide per $\lVert v_0 \rVert^2$.

D: Le rette $r_1 = (1, 0, 0) + t\,(0, 1, 2)$ e $r_2 = (3, -1, -1) + s\,(-1, 1, 4)$ sono sghembe. Qual è la loro distanza?
+ $\frac 53$
- $5$
- $\frac 59$
- $\frac 35$
- $0$
= $v \times v' = (0, 1, 2) \times (-1, 1, 4) = (1 \cdot 4 - 2 \cdot 1,\ -(0 \cdot 4 - 2 \cdot (-1)),\ 0 \cdot 1 - 1 \cdot (-1)) = (2, -2, 1)$, di norma $3$. $v'' = (2, -1, -1)$ e $\langle (2, -2, 1), (2, -1, -1) \rangle = 4 + 2 - 1 = 5$. Quindi $d = \frac 53$. Simile agli appelli del 06/09/2024 (domanda 6) e del 03/06/2026 (domanda 10); le rette sono quelle del problema del 03/06/2025 con $k = 0$.

D: Qual è la distanza fra le rette $r = \{t\,(1, 1, 0)\}$ e $r' = \{(1, 1, 1) + s\,(0, 0, 1)\}$?
+ $0$
- $\frac{\sqrt 2}{2}$
- $1$
- $\sqrt 2$
- il punto $(1, 1, 0)$
= Le direzioni non sono proporzionali, e $\det\left((1, 1, 0) \mid (0, 0, 1) \mid (1, 1, 1)\right) = \langle (1, 1, 0) \times (0, 0, 1), (1, 1, 1) \rangle = \langle (1, -1, 0), (1, 1, 1) \rangle = 0$: le rette sono incidenti (si incontrano in $(1, 1, 0)$, con $t = 1$ e $s = -1$), quindi la distanza è $0$. Il punto $(1, 1, 0)$ non è una distanza. Simile all'appello del 05/02/2026 (domanda 10).

D: Una retta forma con il vettore normale di un piano un angolo acuto $\alpha = \frac{\pi}{3}$. Qual è l'angolo fra la retta e il piano?
+ $\frac{\pi}{6}$
- $\frac{\pi}{3}$
- $\frac{2\pi}{3}$
- $\frac{\pi}{2}$
- $\frac{5\pi}{6}$
= Per la Proposizione 24.4 i due angoli sommano a $\frac{\pi}{2}$: $\vartheta = \frac{\pi}{2} - \frac{\pi}{3} = \frac{\pi}{6}$.

D: Quale di queste rette interseca il piano $\pi = \{2x - y + 2z = 3\}$ **perpendicolarmente**?
+ $(1, 1, 1) + t\,(2, -1, 2)$
- $t\,(1, 2, 0)$
- $(2, -1, 2) + t\,(1, 1, 1)$
- $\{2x - y + 2z = 0\}$
- $(0, 3, 0) + t\,(2, 1, 2)$
= Una retta è perpendicolare al piano quando la sua direzione è proporzionale al vettore normale $(2, -1, 2)$. $(1, 2, 0)$ è ortogonale alla normale ($2 - 2 + 0 = 0$): quella retta è parallela al piano. $(2, -1, 2) + t\,(1, 1, 1)$ usa la normale come **punto**, non come direzione. $\{2x - y + 2z = 0\}$ è un piano, non una retta. $(2, 1, 2)$ non è proporzionale a $(2, -1, 2)$. Simile all'appello del 02/09/2025 (domanda 9).

D: Qual è la distanza fra i piani paralleli $\{x + 2y + 2z = 1\}$ e $\{x + 2y + 2z = 7\}$?
N: 2
= Stessi coefficienti, quindi $d = \frac{\lvert 7 - 1 \rvert}{\sqrt{1 + 4 + 4}} = \frac 63 = 2$. Equivale a prendere il punto $(1, 0, 0)$ del primo piano e usare la Proposizione 24.17.
```

## Esercizi

::: esercizio base Angoli fra rette
(a) Le rette $r = (1, 2, 0) + t\,(1, 0, 1)$ e $r' = (1, 2, 0) + s\,(1, 1, 0)$ si incontrano in $(1, 2, 0)$: calcola l'angolo. (b) Stessa domanda per le rette per l'origine con direzioni $(1, 2, 2)$ e $(2, -2, -1)$. (c) Stessa domanda per le rette per l'origine con direzioni $(1, 1, 1)$ e $(-1, 0, -1)$.
::: soluzione
(a) $\langle (1, 0, 1), (1, 1, 0) \rangle = 1$, norme $\sqrt 2$ e $\sqrt 2$: $\cos\vartheta = \frac 12$, $\vartheta = \frac{\pi}{3}$.

(b) $\langle (1, 2, 2), (2, -2, -1) \rangle = 2 - 4 - 2 = -4$, norme $3$ e $3$: il coseno fra i vettori è $-\frac 49$ (angolo ottuso). Fra le rette si prende il valore assoluto: $\vartheta = \arccos\frac 49$.

(c) $\langle (1, 1, 1), (-1, 0, -1) \rangle = -2$, norme $\sqrt 3$ e $\sqrt 2$: $\cos\vartheta = \frac{2}{\sqrt 6} = \frac{\sqrt 6}{3}$, quindi $\vartheta = \arccos\frac{\sqrt 6}{3}$ (circa $35{,}3^\circ$, lo stesso numero dell'Esempio 24.3).
:::

::: esercizio base Angolo fra due piani
Calcola l'angolo diedrale fra i piani $\pi_1 = \{2x + y - z = 1\}$ e $\pi_2 = \{x + 2y + z = 2\}$ (sono i piani dell'appello del 24/01/2024). Poi scrivi un piano per l'origine perpendicolare a entrambi.
::: soluzione
Normali $n_1 = (2, 1, -1)$ e $n_2 = (1, 2, 1)$: $\langle n_1, n_2 \rangle = 2 + 2 - 1 = 3$, norme $\sqrt 6$ e $\sqrt 6$. Quindi $\cos\alpha = \frac{3}{6} = \frac 12$ e $\alpha = \frac{\pi}{3}$.

Due piani sono perpendicolari quando i loro **vettori normali** sono ortogonali (coseno zero). Serve quindi un vettore normale $m$ con $\langle m, n_1 \rangle = \langle m, n_2 \rangle = 0$, per esempio
$$\begin{aligned} m = n_1 \times n_2 &= \big(1 \cdot 1 - (-1) \cdot 2,\ -(2 \cdot 1 - (-1) \cdot 1),\ 2 \cdot 2 - 1 \cdot 1\big) \\ &= (3, -3, 3). \end{aligned}$$
Il piano $x - y + z = 0$ va bene. Siccome $m$ è anche la direzione della retta $\pi_1 \cap \pi_2$ (è ortogonale a entrambe le normali), questo è il piano per l'origine perpendicolare alla retta comune: il «taglio» della Definizione 24.6.
:::

::: esercizio medio Una retta e un piano, con due metodi
Calcola l'angolo fra il piano $\pi = \{x + y - z = 0\}$ e la retta $r = \{t\,(1, 1, 1)\}$: (a) con la proiezione della Definizione 24.2; (b) con la Proposizione 24.4. Controlla che i risultati coincidano.
::: soluzione
Prima di tutto la retta incontra il piano (nell'origine).

(a) Con la formula della proiezione sulla normale $n = (1, 1, -1)$: $\langle v, n \rangle = 1 + 1 - 1 = 1$ e $\langle n, n \rangle = 3$, quindi
$$p_\pi(v) = (1, 1, 1) - \tfrac 13 (1, 1, -1) = \left(\tfrac 23, \tfrac 23, \tfrac 43\right).$$
$\langle v, p_\pi(v) \rangle = \frac{2 + 2 + 4}{3} = \frac 83$, $\lVert v \rVert = \sqrt 3$, $\lVert p_\pi(v) \rVert = \frac{\sqrt{4 + 4 + 16}}{3} = \frac{\sqrt{24}}{3} = \frac{2\sqrt 6}{3}$. Allora
$$\cos\vartheta = \frac{8/3}{\sqrt 3 \cdot 2\sqrt 6 / 3} = \frac{8}{2\sqrt{18}} = \frac{4}{3\sqrt 2} = \frac{2\sqrt 2}{3}.$$

(b) $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert} = \frac{1}{\sqrt 3 \cdot \sqrt 3} = \frac 13$, quindi $\vartheta = \arcsin\frac 13$.

Coincidono: $\left(\frac{2\sqrt 2}{3}\right)^2 + \left(\frac 13\right)^2 = \frac 89 + \frac 19 = 1$, quindi $\arccos\frac{2\sqrt 2}{3} = \arcsin\frac 13$ (un angolo acuto è determinato dal suo seno).
:::

::: esercizio base Distanza punto–retta con la formula e con il piede
Siano $P = (1, 1, 1)$ e $r = \{t\,(1, 2, 2)\}$. Calcola $d(P, r)$ con la Proposizione 24.11 e poi trovando il piede della perpendicolare $Q$.
::: soluzione
**Con la formula.** $v_0 = (1, 2, 2)$, $v_1 = P - (0, 0, 0) = (1, 1, 1)$. Righe affiancate $(1, 1)$, $(2, 1)$, $(2, 1)$:
$$v_0 \times v_1 = (2 \cdot 1 - 2 \cdot 1,\ -(1 \cdot 1 - 2 \cdot 1),\ 1 \cdot 1 - 2 \cdot 1) = (0, 1, -1).$$
$d = \frac{\sqrt 2}{\lVert v_0 \rVert} = \frac{\sqrt 2}{3}$.

**Con il piede.** $Q = \frac{\langle v_1, v_0 \rangle}{\langle v_0, v_0 \rangle} v_0 = \frac{5}{9}(1, 2, 2) = \left(\frac 59, \frac{10}{9}, \frac{10}{9}\right)$. Allora $P - Q = \left(\frac 49, -\frac 19, -\frac 19\right)$, ortogonale a $v_0$ ($\frac{4 - 2 - 2}{9} = 0$), con norma $\frac{\sqrt{16 + 1 + 1}}{9} = \frac{\sqrt{18}}{9} = \frac{3\sqrt 2}{9} = \frac{\sqrt 2}{3}$. Stesso risultato.
:::

::: esercizio base Distanza punto–piano e piede della perpendicolare
Per il piano $\pi = \{2x - y + z = 4\}$ e il punto $P_0 = (2, 1, -2)$ dell'Esempio 24.18: (a) trova il piede $Q$ della perpendicolare; (b) verifica che $d(P_0, Q) = \frac{\sqrt 6}{2}$; (c) scrivi in forma parametrica la retta $s$ perpendicolare a $\pi$ passante per $P_0$.
::: soluzione
(c) La retta perpendicolare ha la direzione della normale: $s = (2, 1, -2) + \lambda\,(2, -1, 1)$.

(a) $Q = s \cap \pi$: sostituisco $(2 + 2\lambda,\ 1 - \lambda,\ -2 + \lambda)$ nell'equazione: $2(2 + 2\lambda) - (1 - \lambda) + (-2 + \lambda) = 4$, cioè $1 + 6\lambda = 4$ e $\lambda = \frac 12$. Quindi $Q = \left(3, \frac 12, -\frac 32\right)$.

(b) $P_0 - Q = \left(-1, \frac 12, -\frac 12\right)$, di norma $\sqrt{1 + \frac 14 + \frac 14} = \sqrt{\frac 32} = \frac{\sqrt 6}{2}$.
:::

::: esercizio medio Rette parallele e piani paralleli
(a) Calcola la distanza fra le rette parallele $r = \{(1, 0, 1) + t\,(1, 0, -1)\}$ e $r' = \{(0, 2, 0) + s\,(-2, 0, 2)\}$. (b) Calcola la distanza fra i piani $\pi_1 = \{x + 2y + 2z = 1\}$ e $\pi_2 = \{2x + 4y + 4z = 5\}$.
::: soluzione
(a) Le direzioni sono proporzionali ($(-2, 0, 2) = -2\,(1, 0, -1)$). Prendo $P = (1, 0, 1) \in r$ e uso la Proposizione 24.11 per la retta $r'$, con $P_0' = (0, 2, 0)$ e, come direzione, $v_0 = (1, 0, -1)$ (qualsiasi vettore proporzionale a $(-2, 0, 2)$ va bene). Allora $P - P_0' = (1, -2, 1)$ e
$$\begin{aligned} v_0 \times (P - P_0') &= \big(0 \cdot 1 - (-1)(-2),\ -(1 \cdot 1 - (-1) \cdot 1),\ 1 \cdot (-2) - 0 \cdot 1\big) \\ &= (-2, -2, -2), \end{aligned}$$
di norma $2\sqrt 3$. Quindi $d = \frac{2\sqrt 3}{\lVert v_0 \rVert} = \frac{2\sqrt 3}{\sqrt 2} = \sqrt 6$.

(b) Prima rendo uguali i coefficienti: dividendo per 2, $\pi_2 = \{x + 2y + 2z = \frac 52\}$. Ora $d = \frac{\lvert \frac 52 - 1 \rvert}{\sqrt{1 + 4 + 4}} = \frac{3/2}{3} = \frac 12$. Se non avessi diviso, il conto «$\frac{\lvert 5 - 1 \rvert}{3}$» avrebbe dato $\frac 43$, sbagliato.
:::

::: esercizio medio Classificare due rette e calcolare la distanza
Siano $r = \{(1, 1, 0) + t\,(1, 0, 2)\}$ e $r' = \{(0, 1, 1) + s\,(0, 1, 1)\}$. Stabilisci se sono incidenti, parallele o sghembe e calcola la loro distanza.
::: soluzione
Le direzioni $v = (1, 0, 2)$ e $v' = (0, 1, 1)$ non sono proporzionali: le rette non sono parallele. Poi $v'' = (0, 1, 1) - (1, 1, 0) = (-1, 0, 1)$ e
$$v \times v' = \big(0 \cdot 1 - 2 \cdot 1,\ -(1 \cdot 1 - 2 \cdot 0),\ 1 \cdot 1 - 0 \cdot 0\big) = (-2, -1, 1).$$
$\langle v \times v', v'' \rangle = 2 + 0 + 1 = 3 \neq 0$: le rette sono **sghembe**. La distanza è
$$d(r, r') = \frac{3}{\lVert (-2, -1, 1) \rVert} = \frac{3}{\sqrt 6} = \frac{\sqrt 6}{2}.$$
:::

::: esercizio difficile La perpendicolare comune a due rette sghembe
Siano $r = \{(1, 1, 1) + t\,(-1, 2, 1)\}$ e $r' = \{(0, 1, 2) + s\,(1, 1, 1)\}$ (Martelli, Esempio 9.2.28). (a) Calcola $d(r, r')$ con la Proposizione 24.14. (b) Trova i punti $P \in r$ e $P' \in r'$ tali che il segmento $PP'$ sia perpendicolare a entrambe le rette, e verifica che $d(P, P') = d(r, r')$.
::: soluzione
(a) $v = (-1, 2, 1)$, $v' = (1, 1, 1)$, $v'' = (0, 1, 2) - (1, 1, 1) = (-1, 0, 1)$. Prodotto vettoriale:
$$v \times v' = \big(2 \cdot 1 - 1 \cdot 1,\ -((-1) \cdot 1 - 1 \cdot 1),\ (-1) \cdot 1 - 2 \cdot 1\big) = (1, 2, -3),$$
di norma $\sqrt{14}$. $\langle (1, 2, -3), (-1, 0, 1) \rangle = -1 + 0 - 3 = -4$. Quindi $d = \frac{4}{\sqrt{14}} = \frac{2\sqrt{14}}{7}$.

(b) Il punto generico di $r$ è $P(t) = (1 - t,\ 1 + 2t,\ 1 + t)$, quello di $r'$ è $P'(s) = (s,\ 1 + s,\ 2 + s)$. Il vettore $P(t) - P'(s) = (1 - t - s,\ 2t - s,\ -1 + t - s)$ deve essere ortogonale a $v$ e a $v'$:
- $\langle P - P', v \rangle = -(1 - t - s) + 2(2t - s) + (-1 + t - s) = 6t - 2s - 2 = 0$;
- $\langle P - P', v' \rangle = (1 - t - s) + (2t - s) + (-1 + t - s) = 2t - 3s = 0$.

Dalla seconda $t = \frac{3s}{2}$; nella prima $9s - 2s - 2 = 0$, cioè $s = \frac 27$ e $t = \frac 37$. Quindi
$$P = \left(\tfrac 47, \tfrac{13}{7}, \tfrac{10}{7}\right), \qquad P' = \left(\tfrac 27, \tfrac 97, \tfrac{16}{7}\right), \qquad P - P' = \tfrac 27\,(1, 2, -3).$$
$P - P'$ è proporzionale a $v \times v'$, come deve essere, e $d(P, P') = \frac 27 \sqrt{14}$: coincide con (a). La perpendicolare comune è la retta $P' + \Span((1, 2, -3))$, la stessa trovata da Martelli.
:::

::: esercizio difficile Piani a distanza data
(a) Trova i piani paralleli a $\pi = \{x + 2y + 2z = 1\}$ che hanno distanza $2$ da $\pi$. (b) Trova i punti della retta $r = \{t\,(1, 1, 1)\}$ che hanno distanza $\sqrt 3$ dal piano $\sigma = \{x + y + z = 0\}$.
::: soluzione
(a) Un piano parallelo ha la forma $x + 2y + 2z = c$ (stessa normale). La distanza da $\pi$ è $\frac{\lvert c - 1 \rvert}{3}$; imponendo che valga $2$: $\lvert c - 1 \rvert = 6$, cioè $c = 7$ oppure $c = -5$. I piani sono $x + 2y + 2z = 7$ e $x + 2y + 2z = -5$, uno per parte.

(b) Il punto $(t, t, t)$ ha distanza $\frac{\lvert 3t \rvert}{\sqrt 3} = \sqrt 3\,\lvert t \rvert$ da $\sigma$. Imponendo $\sqrt 3\,\lvert t \rvert = \sqrt 3$: $t = \pm 1$. I punti sono $(1, 1, 1)$ e $(-1, -1, -1)$.
:::

::: esercizio esame Retta, piano, angolo e distanza (appello del 10/07/2024, problema 12)
Siano $\pi_1 = \{x + y + 2z = 1\}$ e $\pi_2 = \{2x - 2y = 2\}$ due piani in $\R^3$. (1) Calcolare la retta $r = \pi_1 \cap \pi_2$ in forma $r = P + \Span(v)$. (2) Dimostrare che $r$ e il piano $\pi_3 = \{x + y = -1\}$ sono incidenti. (3) Calcolare l'angolo fra $r$ e il piano $\pi_3$. (4) Calcolare la distanza fra $r$ e la retta $s = {}^t(1, 0, 1) + \Span({}^t(2, 1, -2))$.
::: soluzione
(1) Dalla seconda equazione, divisa per 2: $x - y = 1$, cioè $x = 1 + y$. Nella prima: $1 + y + y + 2z = 1$, cioè $z = -y$. Con $y = t$:
$$r = \{(1 + t,\ t,\ -t)\} = (1, 0, 0) + \Span((1, 1, -1)).$$
Controllo: $(1, 0, 0)$ soddisfa $1 = 1$ e $2 = 2$; la direzione è proporzionale a $(1, 1, 2) \times (2, -2, 0) = (4, 4, -4)$.

(2) La normale di $\pi_3$ è $n = (1, 1, 0)$ e $\langle (1, 1, -1), (1, 1, 0) \rangle = 2 \neq 0$: la direzione della retta non sta nella giacitura del piano, quindi le giaciture sommano a $\R^3$ e, per la Proposizione 23.10, $r$ e $\pi_3$ sono incidenti. Il punto: $(1 + t) + t = -1$ dà $t = -1$, cioè $(0, -1, 1)$.

(3) Proiezione della direzione $v = (1, 1, -1)$ sulla giacitura di $\pi_3$:
$$p(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle} n = (1, 1, -1) - \tfrac 22 (1, 1, 0) = (0, 0, -1).$$
Allora $\cos\vartheta = \frac{\langle v, p(v) \rangle}{\lVert v \rVert \lVert p(v) \rVert} = \frac{1}{\sqrt 3 \cdot 1} = \frac{\sqrt 3}{3}$ e $\vartheta = \arccos\frac{\sqrt 3}{3}$ (circa $54{,}7^\circ$). Controllo con la normale: $\sin\vartheta = \frac{2}{\sqrt 3 \sqrt 2} = \frac{\sqrt 6}{3}$, e $\frac 13 + \frac 69 = 1$.

(4) Direzioni $v = (1, 1, -1)$ e $v' = (2, 1, -2)$, non proporzionali. $v'' = (1, 0, 1) - (1, 0, 0) = (0, 0, 1)$.
$$\begin{aligned} v \times v' &= \big(1 \cdot (-2) - (-1) \cdot 1,\ -(1 \cdot (-2) - (-1) \cdot 2),\ 1 \cdot 1 - 1 \cdot 2\big) \\ &= (-1, 0, -1), \end{aligned}$$
di norma $\sqrt 2$. $\langle (-1, 0, -1), (0, 0, 1) \rangle = -1 \neq 0$: le rette sono sghembe e $d(r, s) = \frac{1}{\sqrt 2} = \frac{\sqrt 2}{2}$.
:::

::: esercizio esame Proiezione, intersezione e angolo
Siano $v_1 = (1, 0, 1)$ e $v_2 = (1, 2, 1)$, e sia $V = \Span(v_1, v_2)$. (1) Calcola una base ortogonale di $V$. (2) Calcola la proiezione ortogonale di $w = (1, 1, 0)$ su $V$. (3) Calcola il punto di intersezione e l'angolo di intersezione fra la retta $r = (2, 0, 0) + \Span(w)$ e il piano $V$.
::: soluzione
(1) Gram–Schmidt: $u_1 = v_1 = (1, 0, 1)$ e
$$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 = (1, 2, 1) - \tfrac 22 (1, 0, 1) = (0, 2, 0).$$
Base ortogonale: $(1, 0, 1)$ e $(0, 2, 0)$ (o, più comodo, $(0, 1, 0)$).

(2) $p_V(w) = \frac{\langle w, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 + \frac{\langle w, e_2 \rangle}{\langle e_2, e_2 \rangle} e_2 = \frac 12 (1, 0, 1) + 1 \cdot (0, 1, 0) = \left(\frac 12, 1, \frac 12\right)$. Controllo: $w - p_V(w) = \left(\frac 12, 0, -\frac 12\right)$ è ortogonale a $u_1$ ($\frac 12 - \frac 12 = 0$) e a $e_2$.

(3) Il piano $V$ ha normale $v_1 \times v_2 = (0 \cdot 1 - 1 \cdot 2,\ -(1 \cdot 1 - 1 \cdot 1),\ 1 \cdot 2 - 0 \cdot 1) = (-2, 0, 2)$, cioè $V = \{x - z = 0\}$. Il punto generico della retta è $(2 + t, t, 0)$: $2 + t - 0 = 0$ dà $t = -2$, e il punto è $(0, -2, 0)$. L'angolo è quello fra $w$ e $p_V(w)$:
$$\cos\vartheta = \frac{\frac 12 + 1 + 0}{\sqrt 2 \cdot \sqrt{\frac 14 + 1 + \frac 14}} = \frac{3/2}{\sqrt 2 \cdot \sqrt{3/2}} = \frac{3/2}{\sqrt 3} = \frac{\sqrt 3}{2},$$
quindi $\vartheta = \frac{\pi}{6}$. Controllo con la normale $(1, 0, -1)$: $\sin\vartheta = \frac{\lvert 1 \rvert}{\sqrt 2 \cdot \sqrt 2} = \frac 12$. È lo stesso schema dei problemi 12 degli appelli del 10/06/2024, del 03/06/2026 e del 07/09/2026.
:::

## Domande di ripasso

::: domanda Quando si calcola un angolo e quando una distanza?
Per due sottospazi affini incidenti si calcola l'angolo; per due sottospazi disgiunti la distanza (per sottospazi incidenti la distanza è zero).
:::

::: domanda Come si definisce l'angolo fra due rette incidenti? Perché si sceglie l'angolo acuto?
È l'angolo fra i vettori direzione $v$ e $v'$ (Definizione 24.1). Siccome cambiando $v$ in $-v$ l'angolo diventa $\pi - \vartheta$, la scelta non è unica: si prende sempre quello acuto o retto, cioè $\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}$.
:::

::: domanda Come si definisce l'angolo fra una retta e un piano?
Si porta l'origine nel punto d'incontro, si proietta ortogonalmente la direzione $v$ della retta sul piano e si prende l'angolo fra $v$ e la proiezione; se la proiezione è nulla, l'angolo è $\frac{\pi}{2}$ (Definizione 24.2).
:::

::: domanda Che cosa dice la Proposizione 24.4 e a che cosa serve?
L'angolo fra $v$ e il piano e l'angolo fra $v$ e il vettore normale che forma un angolo acuto con $v$ sommano a $\frac{\pi}{2}$. Serve a evitare la proiezione: $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}$.
:::

::: domanda Come si calcola l'angolo diedrale fra due piani?
È l'angolo acuto (o retto) fra le rette generate dai vettori normali (Proposizione 24.7): per piani in forma cartesiana, fra i vettori dei coefficienti.
:::

::: domanda Come si definisce la distanza fra un punto e una retta? Qual è la formula?
È la distanza fra il punto $P$ e il piede $Q$ della perpendicolare alla retta passante per $P$ (Definizione 24.10). Se $r = P_0 + t v_0$, vale $d(P, r) = \frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$ (Proposizione 24.11).
:::

::: domanda Da dove viene la formula della distanza punto–retta?
L'area del parallelogramma con lati $v_0$ e $P - P_0$ si calcola in due modi: con il prodotto vettoriale, $\lVert v_0 \times (P - P_0) \rVert$, e come base $\lVert v_0 \rVert$ per altezza $d(P, r)$.
:::

::: domanda Come si calcola la distanza fra due rette parallele? E fra due sghembe?
Parallele: è la distanza di un punto di una dall'altra. Sghembe: $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$ (Proposizione 24.14), cioè il volume del parallelepipedo diviso l'area della base.
:::

::: domanda Come si capisce se due rette sono incidenti, parallele o sghembe?
Se le direzioni sono proporzionali sono parallele (o coincidenti). Altrimenti si calcola $\det(v \mid v' \mid P_0' - P_0)$: se è zero sono incidenti, se è diverso da zero sono sghembe.
:::

::: domanda Qual è la formula della distanza punto–piano e come si dimostra?
$d(P_0, \pi) = \frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ (Proposizione 24.17). Si proietta sul vettore normale il vettore che va da un punto qualsiasi del piano a $P_0$.
:::

::: domanda Come si calcola la distanza fra due piani paralleli?
Si scrivono con gli stessi coefficienti $ax + by + cz = d_1$ e $ax + by + cz = d_2$; la distanza è $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$.
:::

::: domanda Quando una retta è perpendicolare a un piano? E parallela?
Perpendicolare quando la sua direzione è proporzionale al vettore normale; parallela (o contenuta) quando la direzione è ortogonale al vettore normale, cioè $\langle v, n \rangle = 0$.
:::

## Glossario

```glossario
Angolo fra due vettori | Il numero $\vartheta \in [0, \pi]$ con $\cos\vartheta = \frac{\langle v, w \rangle}{\lVert v \rVert \lVert w \rVert}$ (Definizione 20.12).
Angolo fra due rette | Angolo acuto o retto fra i vettori direzione di due rette incidenti (Definizione 24.1).
Angolo fra retta e piano | Angolo fra la direzione della retta e la sua proiezione ortogonale sul piano; retto se la proiezione è nulla (Definizione 24.2).
Angolo diedrale | Angolo fra due piani incidenti, misurato con due rette ortogonali alla retta comune; uguale all'angolo acuto fra le normali (Definizione 24.6, Proposizione 24.7).
Vettore normale | Vettore ortogonale a un piano; per $ax + by + cz = d$ è $(a, b, c)$.
Proiezione ortogonale su un piano | Il vettore $p_\pi(v)$ del piano tale che $v - p_\pi(v)$ è ortogonale al piano; $p_\pi(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle} n$.
Piede della perpendicolare | Il punto $Q$ di una retta o di un piano più vicino a un punto dato; il segmento $PQ$ è perpendicolare.
Distanza fra punti | $d(P, Q) = \lVert Q - P \rVert$ (Definizione 24.9).
Distanza punto–retta | $d(P, r) = \frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$ (Proposizione 24.11).
Rette sghembe | Rette dello spazio né incidenti né parallele; hanno un'unica perpendicolare comune.
Perpendicolare comune | Retta che incontra due rette disgiunte ed è ortogonale a entrambe; la sua parte fra le due rette misura la distanza.
Distanza fra rette sghembe | $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$ (Proposizione 24.14).
Rette complanari | Rette contenute in uno stesso piano: incidenti o parallele; equivale a $\det(v \mid v' \mid P_0' - P_0) = 0$.
Distanza punto–piano | $\frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ (Proposizione 24.17).
Volume del parallelepipedo | $\lvert \det(u \mid v \mid w) \rvert$ per il parallelepipedo generato da $u, v, w$.
```

## Checklist

```checklist
- So distinguere quando si calcola un angolo e quando una distanza.
- So calcolare l'angolo fra due rette incidenti e scelgo sempre quello acuto o retto.
- So calcolare l'angolo fra una retta e un piano sia con la proiezione (Definizione 24.2) sia con il vettore normale (Proposizione 24.4).
- So calcolare l'angolo diedrale fra due piani con i vettori normali.
- So riconoscere i coseni notevoli e lasciare le altre risposte come $\arccos(\dots)$.
- So calcolare la distanza punto–retta con il prodotto vettoriale e spiegare la formula con l'area del parallelogramma.
- So decidere se due rette sono parallele, incidenti o sghembe con il determinante $\det(v \mid v' \mid P_0' - P_0)$.
- So calcolare la distanza fra due rette parallele e fra due rette sghembe.
- So calcolare la distanza punto–piano e il piede della perpendicolare.
- So calcolare la distanza fra due piani paralleli dopo averli scritti con gli stessi coefficienti.
- So razionalizzare i risultati per riconoscerli fra le risposte del quiz.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 24 «Lo spazio euclideo III», pp. 122–128: sezioni 24.A (angoli fra sottospazi incidenti) e 24.B (distanze fra sottospazi disgiunti), seguite in ordine con la numerazione originale (Definizioni 24.1, 24.2, 24.6, 24.9, 24.10, 24.13, 24.16; Proposizioni 24.4, 24.7, 24.11, 24.14, 24.17; Esempi 24.3, 24.5, 24.8, 24.12, 24.15, 24.18). Dalle lezioni precedenti: Definizione 20.12 (angolo), Definizione 20.10 (distanza), proiezioni della lezione 21, Proposizione 23.10. Questa lezione delle dispense non ha una sezione di esercizi.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §8.1 (norma, angoli, distanze, proiezione ortogonale), §9.1.3 (volume del parallelepipedo), §9.2.6–9.2.10 (ortogonalità, posizioni, angoli, distanze; da lì vengono la dimostrazione della Proposizione 24.17, il criterio di complanarità e l'Esempio 9.2.28 sulla perpendicolare comune).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): testo riportato del 07/09/2026 (domanda 7), del 10/07/2025 (domanda 8) e del 10/07/2024 (problema 12), con soluzioni scritte per questi appunti; citati per tipo di domanda gli appelli del 24/01/2024, 08/02/2024, 10/06/2024, 06/09/2024, 16/01/2025, 03/06/2025, 02/09/2025, 05/02/2026 e 03/06/2026.
- Le parti **«Oltre le dispense»** (dimostrazione della Proposizione 24.4, formule con il vettore normale, piede della perpendicolare, piani paralleli, criterio di complanarità, tabella riassuntiva, esempi ed esercizi aggiuntivi) sono aggiunte di questi appunti per collegare la lezione al libro e all'esame.
