---
corso: MDAG
modulo: AG
lezione: L22
titolo: Lo spazio euclideo I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L22
descrizione: >-
  Appunti della lezione L22 di Algebra lineare e Geometria (MDAG, parte 2): rotazioni e riflessioni del piano,
  isometrie tra spazi con prodotto scalare, matrici ortogonali, classificazione delle isometrie del piano e dello
  spazio, prodotto vettoriale in R3, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  I movimenti che spostano le figure senza deformarle: girare e specchiare. Impari a riconoscerli dalla loro tabella
  di numeri, che si chiama matrice ortogonale. Alla fine arriva il prodotto vettoriale: una ricetta per costruire un
  vettore perpendicolare a due vettori dati, che userai in tutte le lezioni sulla geometria dello spazio.
materiale: dispense
scheda:
  Dispense: lezione 22 · pp. 111–115
  Libro: Martelli, §4.4.8–4.4.9, §7.5, §8.2 e §9.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 22 «Lo spazio euclideo I»; B. Martelli, Geometria e algebra
  lineare, §4.4.8–4.4.9, §7.5, §8.2 e §9.1
file_en: L22_euclidean_space_1.html
appunti_html: appunti/MDAG/L22_spazio_euclideo_1.html
genera_html: true
---

## In breve

- Un'**isometria** è un movimento rigido: sposta le figure senza deformarle. Lunghezze, distanze e angoli restano quelli di prima.
- Nel piano, i movimenti rigidi che tengono fermo il punto dove si incrociano gli assi sono di due tipi soltanto: le **rotazioni** (girare) e le **riflessioni** (specchiare rispetto a una retta).
- Ognuno di questi movimenti si scrive con una tabella di quattro numeri. La tabella di un movimento rigido si chiama **matrice ortogonale**: le sue colonne sono lunghe 1 e perpendicolari tra loro.
- Un solo numero, il **determinante**, distingue i due tipi: vale $1$ per le rotazioni e $-1$ per le riflessioni.
- Nello spazio i movimenti rigidi sono le rotazioni intorno a una retta e le **antirotazioni**, cioè una rotazione seguita da uno specchio.
- Il **prodotto vettoriale** prende due vettori dello spazio e ne costruisce un terzo, perpendicolare a tutti e due.
- All'esame servono due cose: riconoscere una matrice ortogonale nel quiz e usare il prodotto vettoriale nei problemi su rette e piani.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Prima di cominciare

### Di che cosa parla questa lezione

Appoggia sul tavolo un foglio con un disegno e fallo girare intorno a una puntina. Il disegno cambia posizione, ma non cambia forma: nessuna linea si allunga e nessun angolo si apre o si chiude. Lo stesso succede se guardi il disegno in uno specchio. Movimenti come questi si chiamano movimenti rigidi. In matematica il loro nome è isometrie.

Nelle lezioni L19, L20 e L21 hai imparato a misurare lunghezze, distanze e angoli con il prodotto scalare. Questa lezione fa il passo successivo. Cerca le macchine che trasformano i vettori lasciando uguali tutte queste misure.

La risposta è corta. Nel piano ci sono solo le rotazioni e gli specchi. Tutti e due si riconoscono guardando la tabella di numeri della macchina: le sue colonne devono essere lunghe uno e perpendicolari tra loro.

Nell'ultima parte la lezione cambia argomento. Impari il prodotto vettoriale, una ricetta che da due vettori dello spazio ne costruisce un terzo, perpendicolare a tutti e due. È lo strumento più usato nelle lezioni L23 e L24, dove si lavora con rette e piani, e nei problemi d'esame.

Due parti della lezione sono più teoriche delle altre: la definizione generale di isometria e i movimenti rigidi dello spazio. Servono per capire, ma negli appelli dal 2023 al 2026 non sono state chieste. Dove cominciano trovi un avviso.

### Che cosa devi già sapere

Tutte queste cose vengono ricordate con un esempio nel punto in cui servono.

- **Vettori e matrici** (lezioni L05 e L08). Un vettore è una lista di numeri, come $(3, 2)$. Una matrice è una tabella di numeri. Il ripasso della moltiplicazione «matrice per vettore» è nella prima sezione.
- **Prodotto scalare, lunghezza, perpendicolare** (lezioni L19, L20 e L21). Il ripasso è nella prima sezione.
- **Angoli in radianti, coseno e seno.** I due ripassi sono nella sezione sulle rotazioni.
- **Determinante** di una matrice con due righe e due colonne (lezione L09). Il ripasso è nella sezione sulle rotazioni.
- **Vettori dipendenti, vettori indipendenti, base** (lezione L07). Servono solo nell'ultima sezione, e li ricordiamo lì.

### Che cosa saprai fare alla fine

- Scrivere la matrice di una rotazione o di una riflessione del piano, e usarla per muovere un vettore.
- Dire se una matrice è ortogonale guardando le sue colonne.
- Riconoscere se una matrice ortogonale del piano è una rotazione o una riflessione, e trovare l'angolo oppure la retta dello specchio.
- Scrivere l'inversa di una matrice ortogonale senza fare conti.
- Calcolare il prodotto vettoriale di due vettori e controllare il risultato.
- Usare il prodotto vettoriale per trovare un vettore perpendicolare a un piano.

## Movimenti che non deformano (p. 111)

Un movimento rigido sposta una figura senza cambiarne la forma.

Pensa a una squadra da disegno appoggiata sul tavolo. La puoi far scivolare, la puoi far girare, la puoi anche ribaltare sull'altra faccia. In ogni posizione i suoi lati sono lunghi come prima e i suoi angoli sono gli stessi. Se invece fai una fotocopia ingrandita della squadra, i lati si allungano: quello non è un movimento rigido.

In matematica un movimento rigido si chiama **isometria**. La parola viene dal greco e vuol dire «stessa misura».

Le dispense aprono la lezione con due avvisi. Li leggiamo uno alla volta, perché fissano le regole del gioco per tutte le lezioni sulla geometria (questa, la L23 e la L24).

### Primo avviso: si lavora nel piano e nello spazio di tutti i giorni

Le dispense scrivono: «In queste lezioni usiamo sempre il prodotto scalare euclideo sullo spazio euclideo $\R^n$».

La scrittura $\R^n$ si legge «erre enne». È l'insieme di tutte le liste fatte di $n$ numeri reali: la lettera $n$ dice quanti numeri ci sono nella lista. Qui servono due casi.

- $\R^2$ («erre due») contiene le liste di due numeri, come $(3, 2)$. Sono i punti del piano: 3 passi a destra e 2 passi in su.
- $\R^3$ («erre tre») contiene le liste di tre numeri, come $(3, 2, 5)$. Sono i punti dello spazio: il terzo numero è l'altezza.

Una lista di numeri è un **vettore**. Si disegna come una freccia. La freccia parte dall'**origine**, cioè dal punto dove si incrociano gli assi, e arriva al punto indicato dalla lista. L'origine è il vettore fatto di soli zeri.

«Euclideo» viene da Euclide, il matematico greco della geometria che si studia a scuola. Il **prodotto scalare euclideo** è quello normale, che conosci dalla lezione L19. Con lui si misurano lunghezze e angoli. Lo ricordiamo qui sotto.

> [!RIPASSO] prodotto scalare, lunghezza, perpendicolare (lezioni L19, L20 e L21)
> Il **prodotto scalare** di due vettori è un numero. Si calcola così: moltiplichi i numeri che stanno nello stesso posto e sommi i risultati. Si scrive con due parentesi a punta.
> $$\langle (1, 2), (3, -1) \rangle = 1 \cdot 3 + 2 \cdot (-1) = 3 - 2 = 1$$
> La **lunghezza** di un vettore si chiama anche **norma** e si scrive con due doppie barre. Si calcola con il teorema di Pitagora: fai il quadrato di ogni numero, sommi e poi fai la radice.
> $$\|(3, 4)\| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$
> La **distanza** tra due vettori è la lunghezza della loro differenza.
>
> Due vettori sono **perpendicolari** quando il loro prodotto scalare è zero. Al posto di «perpendicolari» le dispense scrivono quasi sempre **ortogonali**: è la stessa cosa. Un esempio:
> $$\langle (2, 1), (-1, 2) \rangle = 2 \cdot (-1) + 1 \cdot 2 = -2 + 2 = 0$$

### Secondo avviso: l'origine resta ferma

Le dispense scrivono: «In queste lezioni consideriamo soltanto isometrie lineari, cioè isometrie che fissano l'origine».

«Fissare l'origine» vuol dire che l'origine non si muove. Pensa di nuovo al foglio sul tavolo.

- Se pianti una puntina nell'origine e fai girare il foglio, l'origine resta ferma. Questo movimento va bene.
- Se fai scivolare tutto il foglio di 3 centimetri verso destra, si sposta anche l'origine. Questo movimento si chiama **traslazione**. È rigido, ma resta fuori da queste lezioni.

Perché «lineari»? Un'**applicazione lineare** è una macchina che trasforma vettori in vettori e rispetta le somme e i multipli (lezione L14). Ogni macchina di questo tipo manda il vettore di soli zeri nel vettore di soli zeri. Quindi tiene ferma l'origine.

### La macchina «moltiplica per una matrice»

Le macchine lineari del piano sono tutte fatte nello stesso modo: prendono un vettore e lo moltiplicano per una matrice (lezione L15).

> [!RIPASSO] matrice per vettore (lezione L08)
> Una **matrice** è una tabella di numeri. Per moltiplicarla per un vettore si lavora una riga alla volta. Si moltiplicano i numeri della riga per i numeri del vettore, posto per posto, e si somma.
> $$\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 3 \\ 2 \end{pmatrix} = \begin{pmatrix} 2 \cdot 3 + 1 \cdot 2 \\ 0 \cdot 3 + 3 \cdot 2 \end{pmatrix} = \begin{pmatrix} 8 \\ 6 \end{pmatrix}$$
> La prima riga dà $6 + 2 = 8$. La seconda riga dà $0 + 6 = 6$.
>
> Accanto a una matrice il vettore si scrive in verticale. In una riga di testo si scrive in orizzontale: $(8, 6)$. È lo stesso vettore.

Chiamiamo $A$ la matrice. La macchina «moltiplica per $A$» nelle dispense si chiama $L_A$, che si legge «elle con $A$». Il vettore che esce dalla macchina si chiama **immagine** del vettore che è entrato. Nel ripasso, l'immagine di $(3, 2)$ è $(8, 6)$.

C'è un fatto che useremo in tutta la lezione. Riguarda i due vettori più comodi del piano:

- il vettore $(1, 0)$, cioè «un passo a destra», che si chiama $e_1$;
- il vettore $(0, 1)$, cioè «un passo in su», che si chiama $e_2$.

Insieme formano la **base canonica** del piano. Guarda che cosa succede quando entrano nella macchina del ripasso.

$$\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 0 \end{pmatrix} \qquad\qquad \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$$

Il primo risultato è la prima colonna della matrice. Il secondo risultato è la seconda colonna. Succede con ogni matrice.

> [!IDEA]
> La prima colonna di una matrice è il posto dove finisce $e_1$. La seconda colonna è il posto dove finisce $e_2$. Quindi per scrivere la matrice di un movimento del piano basta sapere dove vanno questi due vettori.

::: prova Quanto fa la matrice $\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$ per il vettore $(1, 1)$?
Prima riga: $2 \cdot 1 + 1 \cdot 1 = 3$. Seconda riga: $0 \cdot 1 + 3 \cdot 1 = 3$. Il risultato è $(3, 3)$.
:::

::: prova Una macchina manda $e_1$ in $(0, 1)$ ed $e_2$ in $(-1, 0)$. Qual è la sua matrice?
Le due immagini vanno nelle colonne, scritte in verticale: $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$. La prima colonna è $(0, 1)$, la seconda è $(-1, 0)$.
:::

::: prova Far scivolare tutto il piano di 2 passi verso destra è un'isometria lineare?
No. È un movimento rigido, ma l'origine si sposta nel punto $(2, 0)$. È una traslazione, e in queste lezioni non si usa.
:::

> [!RICORDA]
> - Un'**isometria** è un movimento rigido: non cambia lunghezze, distanze e angoli.
> - In queste lezioni le isometrie sono **lineari**: tengono ferma l'origine e sono macchine del tipo «moltiplica per una matrice».
> - Le colonne della matrice dicono dove vanno $e_1$ ed $e_2$.

## Girare il piano: le rotazioni (p. 111)

Una rotazione fa girare tutto il piano intorno all'origine, come un disco sul piatto del giradischi.

Per dire di quanto si gira serve un angolo. Per scrivere la matrice servono il coseno e il seno di quell'angolo. Prima di cominciare ripassiamo queste due cose.

> [!RIPASSO] gli angoli in radianti
> A scuola gli angoli si misurano in gradi: un giro completo è 360 gradi. In questo corso si misurano in **radianti**: un giro completo è $2\pi$. Il simbolo $\pi$ è il numero pi greco, circa $3{,}14$.
>
> | Quanto giri | Gradi | Radianti |
> |---|---|---|
> | un dodicesimo di giro | 30° | $\frac\pi6$ |
> | un ottavo di giro | 45° | $\frac\pi4$ |
> | un sesto di giro | 60° | $\frac\pi3$ |
> | un quarto di giro | 90° | $\frac\pi2$ |
> | mezzo giro | 180° | $\pi$ |
> | tre quarti di giro | 270° | $\frac{3\pi}2$ |
> | un giro intero | 360° | $2\pi$ |
>
> Gli angoli si contano in senso **antiorario**, cioè al contrario delle lancette dell'orologio. Un angolo si indica di solito con la lettera greca $\vartheta$, che si legge «theta».

> [!RIPASSO] coseno e seno
> Disegna il cerchio di raggio 1 con il centro nell'origine. Parti dal punto più a destra, che è $(1, 0)$, e cammina lungo il cerchio in senso antiorario per un angolo $\vartheta$. Il punto in cui arrivi ha due coordinate, e ognuna ha un nome.
>
> - La prima coordinata dice quanto sei a destra. Si chiama **coseno** di $\vartheta$ e si scrive $\cos\vartheta$.
> - La seconda coordinata dice quanto sei in alto. Si chiama **seno** di $\vartheta$ e si scrive $\sin\vartheta$.
>
> Quindi il punto del cerchio all'angolo $\vartheta$ è $(\cos\vartheta, \sin\vartheta)$. Per gli angoli più usati i valori sono in questa tabella, da copiare sul foglio dell'esame.
>
> | Angolo | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\pi$ | $\frac{3\pi}2$ |
> |---|---|---|---|---|---|---|---|
> | coseno | $1$ | $\frac{\sqrt3}2$ | $\frac{\sqrt2}2$ | $\frac12$ | $0$ | $-1$ | $0$ |
> | seno | $0$ | $\frac12$ | $\frac{\sqrt2}2$ | $\frac{\sqrt3}2$ | $1$ | $0$ | $-1$ |
>
> Una regola vale per ogni angolo:
> $$\cos^2\vartheta + \sin^2\vartheta = 1$$
> La scrittura $\cos^2\vartheta$ vuol dire «il coseno di $\vartheta$, elevato al quadrato». La regola è il teorema di Pitagora: il punto sta sul cerchio di raggio 1, quindi la sua distanza dall'origine è 1.

Guarda la figura: il punto con le due coordinate scritte accanto è il punto del cerchio all'angolo di 30 gradi. Il tratto orizzontale è il suo coseno: dice quanto il punto è a destra. Il tratto verticale tratteggiato è il suo seno: dice quanto il punto è in alto.

```grafico
titolo: Il punto del cerchio di raggio 1 all'angolo $\vartheta$ ha coordinate $(\cos\vartheta, \sin\vartheta)$. Qui $\vartheta = \frac\pi6$
x: -1.4 1.7
y: -1.2 1.2
cerchio: 0 0 1 | grigio
segmento: 0 0 sqrt(3)/2 1/2 | accento | spesso
segmento: 0 0 sqrt(3)/2 0 | viola | spesso | $\cos\vartheta$ | s
segmento: sqrt(3)/2 0 sqrt(3)/2 1/2 | blu | tratteggio | $\sin\vartheta$ | e
arco: 0 0 0.4 0 pi/6 | ambra | $\vartheta$
punto: sqrt(3)/2 1/2 | accento | $(\cos\vartheta, \sin\vartheta)$ | ne
punto: 1 0 | grigio | $(1, 0)$ | se
```

### Un quarto di giro

Cominciamo dalla rotazione più comoda: un quarto di giro in senso antiorario.

Per scrivere la sua matrice basta vedere dove vanno i due vettori della base canonica.

- Il vettore $e_1 = (1, 0)$ punta a destra. Dopo un quarto di giro punta in su: diventa $(0, 1)$.
- Il vettore $e_2 = (0, 1)$ punta in su. Dopo un quarto di giro punta a sinistra: diventa $(-1, 0)$.

Le due immagini vanno nelle colonne. La matrice del quarto di giro è questa:

$$\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$

Proviamo la macchina su un altro vettore, per esempio $(1, 2)$.

$$\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 0 \cdot 1 + (-1) \cdot 2 \\ 1 \cdot 1 + 0 \cdot 2 \end{pmatrix} = \begin{pmatrix} -2 \\ 1 \end{pmatrix}$$

Il vettore $(1, 2)$ è diventato $(-2, 1)$. Controlliamo con due conti che sia davvero un quarto di giro.

1. **La lunghezza non è cambiata.** Prima era $\sqrt{1^2 + 2^2} = \sqrt 5$. Dopo è $\sqrt{(-2)^2 + 1^2} = \sqrt 5$.
2. **Tra il vettore di prima e quello di dopo c'è un angolo retto.** Il loro prodotto scalare è $1 \cdot (-2) + 2 \cdot 1 = 0$, quindi sono perpendicolari.

La regola del quarto di giro si ricorda così: **scambia i due numeri, poi cambia segno al primo**. Con le lettere: il vettore $(x, y)$ diventa $(-y, x)$.

### Un angolo qualsiasi

Ora giriamo di un angolo qualsiasi, che chiamiamo $\vartheta$. Il ragionamento è lo stesso: guardiamo dove vanno i due vettori della base canonica.

**Dove va il primo.** Il vettore $e_1$ è il punto del cerchio di raggio 1 da cui si cominciano a contare gli angoli. Girandolo di $\vartheta$ arriva al punto del cerchio all'angolo $\vartheta$. Per il ripasso su coseno e seno, quel punto è

$$(\cos\vartheta,\ \sin\vartheta).$$

**Dove va il secondo.** Il vettore $e_2$ è $e_1$ girato di un quarto di giro. Se giri tutti e due dello stesso angolo, restano a un quarto di giro l'uno dall'altro. Quindi l'immagine del secondo è l'immagine del primo, girata di un quarto di giro. Con la regola di prima (scambia i due numeri, poi cambia segno al primo) viene

$$(-\sin\vartheta,\ \cos\vartheta).$$

Queste due immagini sono le colonne della matrice della rotazione.

Guarda la figura, dove l'angolo è 30 gradi, cioè $\frac\pi6$. I vettori grigi sono $e_1$ ed $e_2$ prima della rotazione. Quelli colorati sono le loro immagini. I due archi segnati con $\vartheta$ sono uguali: tutti e due i vettori hanno girato dello stesso angolo.

```grafico
titolo: La rotazione di $\frac\pi6$ manda $e_1$ in $(\cos\frac\pi6, \sin\frac\pi6)$ ed $e_2$ in $(-\sin\frac\pi6, \cos\frac\pi6)$
x: -1.2 1.4
y: -0.4 1.3
vettore: 1 0 | grigio | $e_1$ | s
vettore: 0 1 | grigio | $e_2$ | e
vettore: sqrt(3)/2 1/2 | accento | spesso | $\mathrm{Rot}\,e_1$ | e
vettore: -1/2 sqrt(3)/2 | blu | spesso | $\mathrm{Rot}\,e_2$ | no
arco: 0 0 0.45 0 pi/6 | ambra | $\vartheta$
arco: 0 0 0.45 pi/2 2pi/3 | ambra | $\vartheta$
```

Le dispense lo scrivono così.

> [!DEF] 22.1 · Rotazione
> Una **rotazione** di angolo $\vartheta$ è la trasformazione $L_A : \R^2 \to \R^2$ determinata dalla matrice $A = \mathrm{Rot}_\vartheta$, con
> $$\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}.$$

**Come si legge.**

- $\vartheta$ è l'angolo di cui si gira.
- $\mathrm{Rot}_\vartheta$ si legge «rot di theta». È il nome della matrice. La piccola $\vartheta$ in basso ricorda di quale angolo si tratta.
- $L_A : \R^2 \to \R^2$ è la macchina «moltiplica per $A$». La freccia si legge «da … a …»: la macchina prende un vettore del piano e restituisce un vettore del piano. «Trasformazione» è un altro nome per una macchina di questo tipo.
- Nella matrice, la prima colonna è il posto dove va $e_1$. La seconda colonna è il posto dove va $e_2$. Sono i due vettori trovati sopra.
- Il segno meno sta in alto a destra. È l'unico punto in cui si sbaglia.

Per scrivere la matrice di una rotazione precisa si prendono coseno e seno dalla tabella e si mettono nei quattro posti. Per un sesto di giro, cioè $\frac\pi3$, il coseno è $\frac12$ e il seno è $\frac{\sqrt3}2$:

$$\mathrm{Rot}_{\pi/3} = \begin{pmatrix} \frac12 & -\frac{\sqrt3}2 \\ \frac{\sqrt3}2 & \frac12 \end{pmatrix}$$

Usiamola per girare il vettore $(2, 0)$.

$$\begin{pmatrix} \frac12 & -\frac{\sqrt3}2 \\ \frac{\sqrt3}2 & \frac12 \end{pmatrix} \begin{pmatrix} 2 \\ 0 \end{pmatrix} = \begin{pmatrix} \frac12 \cdot 2 - \frac{\sqrt3}2 \cdot 0 \\ \frac{\sqrt3}2 \cdot 2 + \frac12 \cdot 0 \end{pmatrix} = \begin{pmatrix} 1 \\ \sqrt3 \end{pmatrix}$$

Il vettore $(2, 0)$ è diventato $(1, \sqrt3)$. La lunghezza è rimasta 2, perché $\sqrt{1^2 + (\sqrt3)^2} = \sqrt{1 + 3} = \sqrt4 = 2$.

Queste quattro rotazioni conviene saperle scrivere senza pensarci. Nella tabella la freccia $\mapsto$ si legge «va in».

| Angolo | Matrice | Che cosa fa |
|---|---|---|
| $\frac\pi2$ (un quarto di giro) | $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $(x, y) \mapsto (-y, x)$: per esempio $(1, 2) \mapsto (-2, 1)$ |
| $\pi$ (mezzo giro) | $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ | $(x, y) \mapsto (-x, -y)$: cambia segno a tutti e due i numeri |
| $\frac\pi3$ (un sesto di giro) | $\begin{pmatrix} \frac12 & -\frac{\sqrt3}2 \\ \frac{\sqrt3}2 & \frac12 \end{pmatrix}$ | $(2, 0) \mapsto (1, \sqrt3)$ |
| $\frac\pi4$ (un ottavo di giro) | $\frac{\sqrt2}2\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$ | $(1, 0) \mapsto \left(\frac{\sqrt2}2, \frac{\sqrt2}2\right)$ |

Nell'ultima riga il numero davanti alla matrice moltiplica tutti e quattro i numeri dentro.

### La matrice gira davvero tutto il piano

Abbiamo costruito la matrice guardando solo due vettori. Resta una domanda: la macchina gira nello stesso modo anche tutti gli altri vettori? La risposta è sì, e le dispense la scrivono in una proposizione.

> [!PROP] 22.2
> La trasformazione $L_A$ è effettivamente una rotazione antioraria del piano di angolo $\vartheta$ intorno all'origine.

**Come si legge.** Qui $L_A$ è la macchina «moltiplica per la matrice della rotazione». «Effettivamente» vuol dire «davvero»: la matrice mantiene la promessa del suo nome con ogni vettore del piano, non solo con i due della base canonica.

Il motivo a parole. Ogni vettore del piano è una ricetta fatta con i due vettori della base canonica: tanti passi a destra e tanti passi in su. La macchina è lineare, quindi rispetta le ricette. Se i due ingredienti girano dello stesso angolo, gira dello stesso angolo anche tutto quello che si cucina con loro.

Un controllo con i numeri. Sopra il vettore $(2, 0)$ è diventato $(1, \sqrt3)$, e la lunghezza è rimasta 2. Controlliamo anche l'angolo tra i due. Nella lezione L20 hai visto che il coseno dell'angolo tra due vettori è il loro prodotto scalare diviso per il prodotto delle lunghezze:

$$\frac{2 \cdot 1 + 0 \cdot \sqrt3}{2 \cdot 2} = \frac24 = \frac12$$

L'angolo che ha coseno $\frac12$ è $\frac\pi3$: proprio l'angolo della rotazione.

> [!DIM] della Proposizione 22.2 (dal libro di Martelli)
> Le dispense non la dimostrano. Questa è la dimostrazione del libro di Martelli (Proposizione 4.4.15).
>
> 1. Ogni punto del piano si può descrivere con due numeri diversi dalle solite coordinate. Il primo è la sua distanza dall'origine, che chiamiamo $\varrho$ («ro»). Il secondo è l'angolo che forma con l'asse $x$, che chiamiamo $\varphi$ («fi»). Si chiamano **coordinate polari**. Le solite coordinate si ricavano così: $x = \varrho\cos\varphi$ e $y = \varrho\sin\varphi$.
> 2. Moltiplichiamo la matrice della rotazione per questo punto, riga per colonna:
>    $$\mathrm{Rot}_\vartheta\begin{pmatrix} \varrho\cos\varphi \\ \varrho\sin\varphi \end{pmatrix} = \begin{pmatrix} \varrho(\cos\vartheta\cos\varphi - \sin\vartheta\sin\varphi) \\ \varrho(\sin\vartheta\cos\varphi + \cos\vartheta\sin\varphi) \end{pmatrix}.$$
> 3. Le due parentesi sono le **formule di addizione** del coseno e del seno, che si studiano a scuola. La prima è $\cos(\vartheta + \varphi)$, la seconda è $\sin(\vartheta + \varphi)$. Quindi il risultato è
>    $$\begin{pmatrix} \varrho\cos(\vartheta + \varphi) \\ \varrho\sin(\vartheta + \varphi) \end{pmatrix}.$$
> 4. Questo è il punto a distanza $\varrho$ dall'origine e con angolo $\varphi + \vartheta$. La distanza è quella di prima. L'angolo è aumentato di $\vartheta$. Il punto ha girato di $\vartheta$ in senso antiorario.

### Il determinante di una rotazione

C'è un numero che tra poco servirà per distinguere le rotazioni dagli specchi: il determinante.

> [!RIPASSO] il determinante di una matrice con due righe e due colonne (lezione L09)
> Il **determinante** è un numero che si calcola da una matrice quadrata. Si scrive $\det$. Per una matrice con due righe e due colonne la regola è «diagonale meno l'altra diagonale»:
> $$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = a \cdot d - b \cdot c$$
> Un esempio con i numeri:
> $$\det\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} = 2 \cdot 3 - 1 \cdot 0 = 6$$
> Il determinante dice di quanto la matrice ingrandisce le aree. Se ha il segno meno, in più la matrice ribalta le figure, come fa uno specchio.

Le dispense notano che la matrice di una rotazione ha sempre determinante 1. Ecco il conto, con la regola del ripasso:

$$\begin{aligned} \det\mathrm{Rot}_\vartheta &= \cos\vartheta \cdot \cos\vartheta - (-\sin\vartheta) \cdot \sin\vartheta \\ &= \cos^2\vartheta + \sin^2\vartheta = 1. \end{aligned}$$

L'ultimo passaggio è la regola del ripasso su coseno e seno. Il risultato dice due cose. Una rotazione non ingrandisce e non rimpicciolisce le aree. E non ribalta le figure.

> [!OLTRE] Comporre e invertire rotazioni
> **Due rotazioni di fila.** Un quarto di giro seguito da un altro quarto di giro fa mezzo giro. Vale sempre: girare di un angolo e poi di un altro è come girare una volta sola, della somma dei due angoli. «Fare una macchina dopo l'altra» con le matrici vuol dire moltiplicarle (lezione L16). Chiamiamo i due angoli $\alpha$ («alfa») e $\beta$ («beta»):
> $$\mathrm{Rot}_\alpha\,\mathrm{Rot}_\beta = \mathrm{Rot}_{\alpha + \beta}$$
> È la stessa regola della moltiplicazione dei numeri complessi di lunghezza 1 (lezione L03): gli angoli si sommano.
>
> **Tornare indietro.** Per disfare una rotazione si gira dello stesso angolo nel verso opposto. La matrice che disfa si chiama **inversa** (lezione L10). Per una rotazione l'inversa si ottiene scambiando le righe con le colonne, cioè facendo la **trasposta**:
> $${}^t\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ -\sin\vartheta & \cos\vartheta \end{pmatrix} = \mathrm{Rot}_{-\vartheta}$$
> La piccola $t$ in alto a sinistra è il segno della trasposta. Tra poco vedrai che succede lo stesso per tutte le matrici ortogonali.

Prova con lo strumento qui sotto. All'inizio c'è la matrice di una rotazione: quella con coseno $0{,}6$ e seno $0{,}8$.

1. Sposta il cursore «da I ad A». La griglia gira senza deformarsi.
2. Guarda il quadrato colorato. La sua area non cambia, perché il determinante è 1.
3. Lo strumento avvisa che non ci sono autovettori reali. Un autovettore è una direzione che la macchina non gira (lezione L17), e una rotazione gira tutte le direzioni.
4. Premi «rotazione di 90°» e poi «rotazione di 45°».
5. Premi «riflessione». Il quadrato cambia colore: vuol dire che la figura è stata ribaltata. Le riflessioni sono l'argomento della prossima sezione.

```widget matrice
titolo: Rotazioni e riflessioni come trasformazioni del piano
a: 0.6 -0.8; 0.8 0.6
x: 2 1
raggio: 3
```

::: prova Ruota il vettore $(2, 5)$ di un quarto di giro in senso antiorario.
Scambia i due numeri e cambia segno al primo: $(2, 5)$ diventa $(-5, 2)$. Controllo: il prodotto scalare tra prima e dopo è $2 \cdot (-5) + 5 \cdot 2 = 0$, quindi i due vettori sono perpendicolari.
:::

::: prova Scrivi la matrice della rotazione di mezzo giro e applicala a $(1, 2)$.
Per mezzo giro l'angolo è $\pi$: il coseno è $-1$ e il seno è $0$. La matrice è $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$. Applicata a $(1, 2)$ dà $(-1, -2)$: il vettore opposto.
:::

::: prova Di quale angolo gira la matrice $\begin{pmatrix} \frac{\sqrt3}2 & -\frac12 \\ \frac12 & \frac{\sqrt3}2 \end{pmatrix}$?
La prima colonna contiene coseno e seno dell'angolo: il coseno è $\frac{\sqrt3}2$ e il seno è $\frac12$. Nella tabella è la colonna di $\frac\pi6$, cioè 30 gradi.
:::

> [!RICORDA]
> - La rotazione di angolo $\vartheta$ ha nella prima colonna $(\cos\vartheta, \sin\vartheta)$ e nella seconda $(-\sin\vartheta, \cos\vartheta)$.
> - Un quarto di giro: scambia i due numeri e cambia segno al primo.
> - Il determinante di una rotazione è sempre 1.

## Specchiare il piano: le riflessioni (p. 111)

Una riflessione è uno specchio: ogni punto finisce dall'altra parte di una retta, alla stessa distanza.

La retta dello specchio passa per l'origine, perché l'origine deve restare ferma. I punti che stanno sulla retta non si muovono. Tutti gli altri attraversano lo specchio.

### Lo specchio più comodo: l'asse orizzontale

Metti lo specchio sull'asse $x$, cioè sulla riga orizzontale. Un punto che sta sopra l'asse finisce sotto, alla stessa distanza. Il primo numero del punto, quello che dice quanto è a destra, non cambia. Il secondo numero, quello che dice quanto è in alto, cambia segno.

$$(3, 2) \mapsto (3, -2)$$

Scriviamo la matrice. Come per le rotazioni, guardiamo dove vanno i due vettori della base canonica.

- Il vettore $e_1 = (1, 0)$ sta sull'asse $x$, cioè sullo specchio. Non si muove.
- Il vettore $e_2 = (0, 1)$ punta in su. Nello specchio punta in giù: diventa $(0, -1)$.

Le due immagini vanno nelle colonne:

$$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

Altri due specchi si trovano con lo stesso ragionamento. Uno è l'asse $y$, cioè la riga verticale. L'altro è la retta $y = x$: è la retta dei punti che hanno i due numeri uguali, come $(1, 1)$ e $(2, 2)$. Sale in diagonale a 45 gradi e si chiama **bisettrice**.

| Specchio | Dove va $e_1$ | Dove va $e_2$ | Matrice | Che cosa fa a un vettore |
|---|---|---|---|---|
| l'asse $x$ | $(1, 0)$ | $(0, -1)$ | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ | cambia segno al secondo numero |
| la bisettrice $y = x$ | $(0, 1)$ | $(1, 0)$ | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ | scambia i due numeri |
| l'asse $y$ | $(-1, 0)$ | $(0, 1)$ | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ | cambia segno al primo numero |

### Uno specchio qualsiasi

Ora lo specchio è una retta qualsiasi che passa per l'origine. Per dire quale retta è, si dà l'angolo che forma con l'asse $x$.

Qui le dispense fanno una scelta che sorprende. L'angolo della retta non lo chiamano $\vartheta$: lo chiamano $\frac\vartheta2$, cioè «la metà di theta». Il motivo si capisce guardando dove va il vettore $e_1$.

**Dove va il primo.** Il vettore $e_1$ sta all'angolo 0. Lo specchio sta all'angolo $\frac\vartheta2$. Lo specchio manda $e_1$ dall'altra parte della retta, alla stessa distanza. Da $e_1$ allo specchio c'è un angolo $\frac\vartheta2$, e dallo specchio all'immagine ce n'è un altro uguale. In tutto l'immagine sta all'angolo $\vartheta$. È il punto del cerchio di raggio 1 a quell'angolo:

$$(\cos\vartheta,\ \sin\vartheta).$$

È la stessa prima colonna della rotazione. Ecco perché conviene chiamare $\frac\vartheta2$ l'angolo dello specchio: così nella matrice compare $\vartheta$ e non il suo doppio.

**Dove va il secondo.** Uno specchio scambia il senso antiorario con quello orario: la tua mano destra, nello specchio, sembra una mano sinistra. Prima dello specchio $e_2$ sta un quarto di giro dopo $e_1$ in senso antiorario. Dopo lo specchio, la sua immagine sta un quarto di giro dopo l'immagine di $e_1$, ma in senso **orario**. Il quarto di giro in senso orario ha questa regola: scambia i due numeri, poi cambia segno al secondo. Applicata alla prima colonna dà

$$(\sin\vartheta,\ -\cos\vartheta).$$

Controlliamo con i tre specchi della tabella.

| Specchio | Angolo dello specchio | Il doppio, $\vartheta$ | Prima colonna | Seconda colonna |
|---|---|---|---|---|
| l'asse $x$ | $0$ | $0$ | $(\cos 0, \sin 0) = (1, 0)$ | $(\sin 0, -\cos 0) = (0, -1)$ |
| la bisettrice | $\frac\pi4$ | $\frac\pi2$ | $(\cos\frac\pi2, \sin\frac\pi2) = (0, 1)$ | $(\sin\frac\pi2, -\cos\frac\pi2) = (1, 0)$ |
| l'asse $y$ | $\frac\pi2$ | $\pi$ | $(\cos\pi, \sin\pi) = (-1, 0)$ | $(\sin\pi, -\cos\pi) = (0, 1)$ |

Le colonne sono quelle trovate prima. Le dispense lo scrivono così. Nel loro testo $r$ è il nome della retta dello specchio: passa per l'origine e forma un angolo $\frac\vartheta2$ con l'asse $x$.

> [!DEF] 22.3 · Riflessione
> Una **riflessione** (ortogonale) rispetto alla retta $r$ è la trasformazione $L_A : \R^2 \to \R^2$ determinata dalla matrice $A = \mathrm{Rif}_\vartheta$, con
> $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}.$$

**Come si legge.**

- $\mathrm{Rif}_\vartheta$ si legge «rif di theta». È il nome della matrice dello specchio.
- «Ortogonale» vuol dire che ogni punto attraversa lo specchio lungo la direzione perpendicolare alla retta.
- $L_A : \R^2 \to \R^2$ è, come prima, la macchina «moltiplica per $A$», che va dal piano al piano.
- Rispetto alla matrice della rotazione cambia solo la seconda colonna: ha i due segni opposti.
- L'angolo scritto nella matrice è $\vartheta$, ma lo specchio sta all'angolo $\frac\vartheta2$.

Anche qui la matrice è stata costruita guardando due vettori soli. La proposizione che segue assicura che specchia nello stesso modo tutti gli altri.

> [!PROP] 22.4
> La trasformazione $L_A$ è effettivamente una riflessione del piano rispetto a $r$.

**Come si legge.** Qui $L_A$ è la macchina «moltiplica per la matrice della riflessione». La frase dice che la macchina specchia davvero ogni vettore del piano rispetto alla retta $r$. Il motivo è lo stesso delle rotazioni: la macchina è lineare, e ogni vettore è una ricetta fatta con $e_1$ ed $e_2$.

Un controllo con i numeri, sulla bisettrice. La sua matrice scambia i due numeri di ogni vettore.

- Il vettore $(1, 1)$ sta sulla bisettrice. Scambiando i due numeri resta $(1, 1)$: non si muove.
- Il vettore $(1, -1)$ è perpendicolare alla bisettrice, perché $1 \cdot 1 + 1 \cdot (-1) = 0$. Scambiando i due numeri diventa $(-1, 1)$: il suo opposto.

È il comportamento di uno specchio: fermo chi sta sulla retta, ribaltato chi sta di traverso.

> [!DIM] della Proposizione 22.4 (dal libro di Martelli)
> Anche questa dimostrazione viene dal libro di Martelli (Proposizione 4.4.17). Usa le coordinate polari, come quella della Proposizione 22.2.
>
> 1. Scriviamo un punto con la sua distanza $\varrho$ dall'origine e il suo angolo $\varphi$: $x = \varrho\cos\varphi$ e $y = \varrho\sin\varphi$.
> 2. Moltiplichiamo la matrice della riflessione per questo punto, riga per colonna:
>    $$\mathrm{Rif}_\vartheta\begin{pmatrix} \varrho\cos\varphi \\ \varrho\sin\varphi \end{pmatrix} = \begin{pmatrix} \varrho(\cos\vartheta\cos\varphi + \sin\vartheta\sin\varphi) \\ \varrho(\sin\vartheta\cos\varphi - \cos\vartheta\sin\varphi) \end{pmatrix}.$$
> 3. Le due parentesi sono le formule di sottrazione del coseno e del seno. La prima è $\cos(\vartheta - \varphi)$, la seconda è $\sin(\vartheta - \varphi)$. Il risultato è
>    $$\begin{pmatrix} \varrho\cos(\vartheta - \varphi) \\ \varrho\sin(\vartheta - \varphi) \end{pmatrix}.$$
> 4. Il punto con angolo $\varphi$ va nel punto con angolo $\vartheta - \varphi$, alla stessa distanza dall'origine. La media dei due angoli è $\frac\vartheta2$, l'angolo della retta $r$. Quindi i due punti stanno uno da una parte e uno dall'altra di $r$, alla stessa distanza: sono simmetrici rispetto a $r$.
> 5. I punti di $r$ hanno angolo $\varphi = \frac\vartheta2$. Vanno all'angolo $\vartheta - \frac\vartheta2 = \frac\vartheta2$, cioè restano fermi.

### Il determinante di una riflessione

Le dispense notano che la matrice di una riflessione ha sempre determinante $-1$. Il conto, con la regola «diagonale meno l'altra diagonale»:

$$\begin{aligned} \det\mathrm{Rif}_\vartheta &= \cos\vartheta \cdot (-\cos\vartheta) - \sin\vartheta \cdot \sin\vartheta \\ &= -\cos^2\vartheta - \sin^2\vartheta = -1. \end{aligned}$$

Il valore 1, senza badare al segno, dice che le aree non cambiano. Il segno meno dice che la figura viene ribaltata: un giro in senso antiorario diventa un giro in senso orario. Con una parola sola: la riflessione **inverte l'orientazione**.

### Lo specchio visto dalla sua retta

C'è un modo di guardare uno specchio in cui la sua matrice diventa cortissima. Invece di descrivere i vettori con «passi a destra e passi in su», li descriviamo con «passi lungo lo specchio e passi di traverso».

Servono due vettori.

- Un vettore che sta sulla retta dello specchio. Lo specchio lo lascia fermo.
- Un vettore perpendicolare allo specchio. Lo specchio lo manda dall'altra parte: diventa il suo opposto.

Le dispense lo dicono in un'osservazione.

> [!OSSERVAZIONE] La riflessione in una base comoda
> Chiamiamo $s$ la retta perpendicolare a $r$: forma con l'asse $x$ un angolo $\frac\vartheta2 + \frac\pi2$. Prendiamo un vettore $v_1$ sulla retta $r$ e un vettore $v_2$ sulla retta $s$, e usiamo la base $\mathcal B = \{v_1, v_2\}$. La riflessione, che qui chiamiamo $f$, lascia fermo il primo vettore e manda il secondo nel suo opposto:
> $$f(v_1) = v_1, \qquad f(v_2) = -v_2.$$
> Quindi la matrice associata alla riflessione rispetto alla base $\mathcal B$ è
> $$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.$$

Due parole da ricordare.

- La scrittura $\mathcal B = \{v_1, v_2\}$ si legge «la base B, fatta dai vettori vu uno e vu due».
- La **matrice associata rispetto a una base** (lezione L15) ha nelle colonne le immagini dei vettori della base, scritte come ricette fatte con la base stessa. La prima colonna $(1, 0)$ dice: «il primo vettore va in 1 volta sé stesso». La seconda colonna $(0, -1)$ dice: «il secondo vettore va in $-1$ volte sé stesso».

Con le parole della lezione L17: il primo vettore è un **autovettore** con autovalore 1, il secondo è un autovettore con autovalore $-1$. Un autovettore è un vettore che la macchina non gira: lo moltiplica soltanto per un numero, che si chiama autovalore. Una macchina con una base fatta di autovettori si chiama **diagonalizzabile**. Ogni riflessione lo è, e le sue due rette di autovettori sono perpendicolari.

### Un esempio completo

L'esempio che segue trova la matrice di uno specchio in tre modi diversi. All'esame ne basta uno: scegli quello con cui ti trovi meglio.

> [!ESEMPIO] La riflessione rispetto alla retta di $(2, 1)$, in tre modi
> Lo specchio è la retta che passa per l'origine e per il punto $(2, 1)$. Con il simbolo della lezione L06 si scrive $r = \Span((2, 1))$: sono tutti i multipli del vettore $(2, 1)$. Un vettore perpendicolare allo specchio è $n = (-1, 2)$, perché $2 \cdot (-1) + 1 \cdot 2 = 0$.
>
> **1. Con l'angolo.** Nella matrice servono il coseno e il seno di $\vartheta$. Dal disegno però si leggono quelli della **metà**, perché la retta sta all'angolo $\frac\vartheta2$.
>
> - La lunghezza di $(2, 1)$ è $\sqrt{2^2 + 1^2} = \sqrt5$.
> - Dividendo il vettore per la sua lunghezza si ottiene il punto della retta che sta sul cerchio di raggio 1. Le sue coordinate sono il coseno e il seno della metà dell'angolo:
>   $$\cos\tfrac\vartheta2 = \frac2{\sqrt5}, \qquad \sin\tfrac\vartheta2 = \frac1{\sqrt5}.$$
> - Dalla metà all'angolo intero si passa con le **formule dell'angolo doppio**, che si studiano a scuola. Il coseno del doppio è «coseno al quadrato meno seno al quadrato». Il seno del doppio è «due volte seno per coseno».
>   $$\cos\vartheta = \frac45 - \frac15 = \frac35, \qquad \sin\vartheta = 2 \cdot \frac1{\sqrt5} \cdot \frac2{\sqrt5} = \frac45.$$
> - Mettiamo i due numeri nella matrice della Definizione 22.3:
>   $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \frac35 & \frac45 \\ \frac45 & -\frac35 \end{pmatrix}.$$
>
> Controllo. Il vettore $(2, 1)$ sta sullo specchio e deve restare fermo:
> $$\left(\tfrac35 \cdot 2 + \tfrac45 \cdot 1,\ \ \tfrac45 \cdot 2 - \tfrac35 \cdot 1\right) = \left(\tfrac{10}5,\ \tfrac55\right) = (2, 1).$$
> Il vettore $(-1, 2)$ è perpendicolare allo specchio e deve diventare il suo opposto:
> $$\left(\tfrac35 \cdot (-1) + \tfrac45 \cdot 2,\ \ \tfrac45 \cdot (-1) - \tfrac35 \cdot 2\right) = \left(\tfrac55,\ -\tfrac{10}5\right) = (1, -2).$$
>
> **2. Con la proiezione** (lezione L21). Guarda un vettore $v$ e la sua ombra sulla direzione di $n$, quella perpendicolare allo specchio. Se togli l'ombra una volta, arrivi sullo specchio. Se la togli **due volte**, arrivi dall'altra parte, alla stessa distanza: è l'immagine nello specchio. L'ombra si calcola con la formula della lezione L21, quindi la riflessione è
> $$f(v) = v - 2\,\frac{\langle v, n\rangle}{\langle n, n\rangle}\,n.$$
> Qui $\langle n, n\rangle = (-1)^2 + 2^2 = 5$. Calcoliamo le immagini di $e_1$ ed $e_2$, che sono le colonne della matrice.
>
> - Per $e_1 = (1, 0)$ il prodotto scalare con $n$ è $1 \cdot (-1) + 0 \cdot 2 = -1$. Quindi
>   $$f(e_1) = (1, 0) - 2 \cdot \frac{-1}5 \cdot (-1, 2) = (1, 0) + \frac25\,(-1, 2) = \left(\frac35, \frac45\right).$$
> - Per $e_2 = (0, 1)$ il prodotto scalare con $n$ è $0 \cdot (-1) + 1 \cdot 2 = 2$. Quindi
>   $$f(e_2) = (0, 1) - 2 \cdot \frac25 \cdot (-1, 2) = (0, 1) - \frac45\,(-1, 2) = \left(\frac45, -\frac35\right).$$
>
> Sono le due colonne trovate con il primo modo.
>
> **3. Con il cambiamento di base** (lezione L16). Nella base comoda, fatta da $(2, 1)$ e da $(-1, 2)$, la matrice dello specchio è $D = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$. Per tornare alle coordinate normali serve la matrice $M$ che ha nelle colonne i due vettori della base. Nella lezione L16 si scrive $[\id]^{\mathcal B}_{\mathcal C}$. La matrice cercata è il prodotto $M\,D\,M^{-1}$.
>
> - La matrice con i vettori della base nelle colonne è $M = \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}$.
> - Il suo determinante è $2 \cdot 2 - (-1) \cdot 1 = 5$. L'inversa di una matrice con due righe e due colonne si trova così (lezione L10): scambia i due numeri sulla diagonale, cambia segno agli altri due, dividi tutto per il determinante.
>   $$M^{-1} = \frac15\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$$
> - Primo prodotto. Moltiplicare a destra per $D$ cambia segno alla seconda colonna:
>   $$M\,D = \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}$$
> - Secondo prodotto, riga per colonna:
>   $$\begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}\cdot\frac15\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix} = \frac15\begin{pmatrix} 4 - 1 & 2 + 2 \\ 2 + 2 & 1 - 4 \end{pmatrix} = \frac15\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}.$$
>
> È la stessa matrice, trovata per la terza volta.

Guarda la figura. La retta $r$ è lo specchio. Il vettore $v = (1, 2)$ va nel vettore $f(v)$. Il segmento tratteggiato unisce le due punte ed è perpendicolare allo specchio. Il punto segnato a metà del segmento sta sullo specchio. È proprio questo che vuol dire «simmetrico rispetto a una retta».

```grafico
titolo: La riflessione rispetto a $r = \Span((2, 1))$ manda $v = (1, 2)$ in $\left(\frac{11}5, -\frac25\right)$
x: -1.5 3
y: -1 2.5
retta: 0 0 2 1 | viola | $r$ | ne
vettore: 1 2 | accento | spesso | $v$ | n
vettore: 11/5 -2/5 | blu | spesso | $f(v)$ | se
segmento: 1 2 11/5 -2/5 | grigio | tratteggio
punto: 8/5 4/5 | ambra
```

Il conto della figura, con la matrice dell'esempio:

$$\begin{pmatrix} \frac35 & \frac45 \\ \frac45 & -\frac35 \end{pmatrix}\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} \frac35 + \frac85 \\ \frac45 - \frac65 \end{pmatrix} = \begin{pmatrix} \frac{11}5 \\ -\frac25 \end{pmatrix}$$

> [!TRAPPOLA] L'angolo della retta è la metà
> La matrice $\mathrm{Rif}_\vartheta$ specchia rispetto alla retta di angolo $\frac\vartheta2$, **non** $\vartheta$. Per esempio $\mathrm{Rif}_{\pi/2}$ è la matrice che scambia i due numeri. Il suo specchio è la bisettrice, che sta a 45 gradi, e non l'asse $y$, che sta a 90 gradi.
>
> Per non sbagliare c'è un modo sicuro: cerca i vettori che la matrice lascia fermi, cioè quelli con $Av = v$. Sono i vettori dello specchio. Con le parole della lezione L18 è l'autospazio dell'autovalore 1.

::: prova Rifletti il vettore $(3, 2)$ rispetto all'asse $y$.
Lo specchio sull'asse $y$ cambia segno al primo numero: $(3, 2)$ diventa $(-3, 2)$.
:::

::: prova Quale specchio è la matrice $\mathrm{Rif}_\pi$?
Il coseno di $\pi$ è $-1$ e il seno è $0$. La matrice è $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$. Lo specchio sta alla metà dell'angolo, cioè a $\frac\pi2$: è la retta verticale, l'asse $y$. Controllo: il vettore $(0, 1)$ resta fermo.
:::

::: prova Lo specchio è la retta di $(2, 1)$. Il punto $(4, 2)$ si muove?
No. $(4, 2)$ è il doppio di $(2, 1)$, quindi sta sullo specchio. Controllo con la matrice dell'esempio: $\left(\frac{12}5 + \frac85,\ \frac{16}5 - \frac65\right) = \left(\frac{20}5, \frac{10}5\right) = (4, 2)$.
:::

> [!RICORDA]
> - La riflessione $\mathrm{Rif}_\vartheta$ ha nella prima colonna $(\cos\vartheta, \sin\vartheta)$ e nella seconda $(\sin\vartheta, -\cos\vartheta)$.
> - Lo specchio è la retta di angolo $\frac\vartheta2$: la **metà** dell'angolo scritto nella matrice.
> - I vettori sullo specchio restano fermi. Quelli perpendicolari allo specchio diventano il loro opposto.
> - Il determinante di una riflessione è sempre $-1$.

## Che cosa vuol dire «non deformare», in generale (p. 112)

Rotazioni e riflessioni non cambiano le lunghezze e gli angoli: lo abbiamo controllato su qualche esempio.

> [!NOTA] Serve per capire, non per l'esame
> Questa è la sezione più teorica della lezione. Spiega da dove viene la regola pratica della prossima sezione, quella delle colonne lunghe 1 e perpendicolari. Negli appelli dal 2023 al 2026 non c'è nessuna domanda sulla definizione generale di isometria. Se hai poco tempo, leggi l'esempio qui sotto e il riquadro «Da ricordare» in fondo.

Finora «movimento rigido» è stata un'idea presa dalla vita di tutti i giorni. Per lavorarci serve una frase precisa, che si possa controllare con un conto.

L'idea viene dalle lezioni L19 e L20. Lì hai visto che lunghezze, distanze e angoli si calcolano tutti a partire da una cosa sola: il prodotto scalare. Quindi una macchina che non cambia i prodotti scalari non cambia nessuna misura.

> [!IDEA]
> Un'isometria è una macchina che lascia uguali tutti i prodotti scalari. Il prodotto scalare di due vettori prima della macchina è uguale al prodotto scalare delle loro immagini dopo.

### Un controllo con i numeri

> [!ESEMPIO] Una rotazione conserva il prodotto scalare
> Prendiamo due vettori, $x = (1, 2)$ e $y = (3, -1)$, e il quarto di giro: scambia i due numeri e cambia segno al primo.
>
> 1. Prodotto scalare prima: $\langle x, y\rangle = 1 \cdot 3 + 2 \cdot (-1) = 3 - 2 = 1$.
> 2. Le immagini: $x$ diventa $(-2, 1)$ e $y$ diventa $(1, 3)$.
> 3. Prodotto scalare dopo: $\langle (-2, 1), (1, 3)\rangle = (-2) \cdot 1 + 1 \cdot 3 = -2 + 3 = 1$.
>
> Il numero è lo stesso: 1 prima, 1 dopo.
>
> Ecco invece due macchine che **non** sono isometrie, anche se si possono disfare.
>
> - La **dilatazione** $\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$ raddoppia il primo numero di ogni vettore. Manda $e_1$, che è lungo 1, in $(2, 0)$, che è lungo 2.
> - Il **taglio** $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ inclina la griglia. Manda $e_2$, che è lungo 1, in $(1, 1)$, che è lungo $\sqrt{1 + 1} = \sqrt2$.

### Come lo scrivono le dispense

La definizione delle dispense vale in un quadro più largo del piano. Parla di due spazi vettoriali qualsiasi, ognuno con il suo prodotto scalare. Nella lezione L19 hai visto che un prodotto scalare si può mettere anche su spazi che non sono fatti di frecce, come gli spazi di polinomi.

> [!DEF] 22.5 · Isometria
> Siano $V$ e $W$ due spazi vettoriali dotati ciascuno di un prodotto scalare. Un'**isometria** è un isomorfismo $T : V \to W$ tale che
> $$\langle v, w\rangle = \langle T(v), T(w)\rangle \qquad \forall\, v, w \in V.$$

**Come si legge.**

- $V$ e $W$ sono i due spazi: quello dei vettori che entrano e quello dei vettori che escono. Nel piano sono tutti e due $\R^2$.
- $T : V \to W$ è la macchina. Si legge «ti, da $V$ a $W$».
- Un **isomorfismo** è una macchina lineare che si può disfare (lezione L15): da ogni vettore in uscita si risale a un solo vettore in entrata.
- A sinistra dell'uguale c'è il prodotto scalare di due vettori prima della macchina, calcolato nel primo spazio. A destra c'è il prodotto scalare delle loro immagini, calcolato nel secondo spazio.
- $\forall\, v, w \in V$ si legge «per ogni $v$ e $w$ che appartengono a $V$». Il simbolo $\in$ si legge «appartiene a». L'uguaglianza deve valere per tutte le coppie di vettori, non solo per qualcuna.

Le dispense riassumono: un'isometria è un isomorfismo che *preserva* il prodotto scalare. «Preservare» vuol dire «non cambiare».

### Basta controllare i vettori di una base

La definizione chiede di controllare tutte le coppie di vettori, che sono infinite. Per fortuna bastano pochi controlli: quelli sui vettori di una base.

Ricorda dalla lezione L07: una **base** è un gruppo di vettori che fanno da ingredienti. Con loro si costruisce ogni altro vettore, in un modo solo. Nel piano una base ha due vettori, per esempio $e_1$ ed $e_2$.

Proviamo con il quarto di giro. Manda $e_1$ in $(0, 1)$ ed $e_2$ in $(-1, 0)$. Le coppie da controllare sono tre.

| Coppia | Prodotto scalare prima | Prodotto scalare dopo |
|---|---|---|
| $e_1$ con $e_1$ | $1 \cdot 1 + 0 \cdot 0 = 1$ | $0 \cdot 0 + 1 \cdot 1 = 1$ |
| $e_1$ con $e_2$ | $1 \cdot 0 + 0 \cdot 1 = 0$ | $0 \cdot (-1) + 1 \cdot 0 = 0$ |
| $e_2$ con $e_2$ | $0 \cdot 0 + 1 \cdot 1 = 1$ | $(-1) \cdot (-1) + 0 \cdot 0 = 1$ |

Tre controlli, tutti riusciti. La proposizione che segue dice che non ne servono altri.

Le dispense fissano una base del primo spazio e la chiamano $\mathcal B = \{v_1, \dots, v_n\}$. Vuol dire: un elenco di vettori. Il primo si chiama $v_1$, l'ultimo $v_n$, e $n$ è quanti sono.

> [!PROP] 22.6
> Un isomorfismo $T$ è un'isometria se e solo se
> $$\langle v_i, v_j\rangle = \langle T(v_i), T(v_j)\rangle \qquad \forall\, i, j.$$

**Come si legge.**

- $v_i$ e $v_j$ sono due vettori della base: quello di posto $i$ e quello di posto $j$. Le due lettere stanno per due numeri di posto qualsiasi, anche uguali.
- $\forall\, i, j$ si legge «per ogni $i$ e $j$»: l'uguaglianza va controllata per ogni coppia di vettori della base.
- «Se e solo se» vuol dire che le due frasi sono vere insieme oppure false insieme. Se la macchina è un'isometria, i controlli sulla base riescono. E se i controlli sulla base riescono, la macchina è un'isometria.

Il motivo a parole. Ogni vettore è una ricetta fatta con i vettori della base. Il prodotto scalare rispetta le ricette: è la proprietà che nella lezione L19 si chiama bilinearità. Anche la macchina le rispetta, perché è lineare. Quindi il prodotto scalare di due vettori qualsiasi si ricava, con gli stessi conti, dai prodotti tra i vettori della base. Se quelli non cambiano, non cambia niente.

> [!DIM] della Proposizione 22.6 (la spiegazione delle dispense, con i passaggi)
> 1. **Un verso.** Se $T$ è un'isometria, l'uguaglianza vale per tutte le coppie di vettori. Quindi vale anche per i vettori della base.
> 2. **L'altro verso.** Supponiamo che l'uguaglianza valga per i vettori della base. Prendiamo due vettori qualsiasi e scriviamoli come ricette fatte con la base: $v = \sum_i \lambda_iv_i$ e $w = \sum_j \mu_jv_j$. Il simbolo $\sum$ si legge «somma». I numeri $\lambda_i$ («lambda») e $\mu_j$ («mi») sono le quantità delle due ricette.
> 3. Il prodotto scalare è bilineare (Proposizione 19.15). Quindi
>    $$\langle v, w\rangle = \sum_{i,j} \lambda_i\mu_j\,\langle v_i, v_j\rangle.$$
> 4. La macchina $T$ è lineare. Quindi $T(v) = \sum_i \lambda_iT(v_i)$ e $T(w) = \sum_j \mu_jT(v_j)$. Di nuovo per la bilinearità,
>    $$\langle T(v), T(w)\rangle = \sum_{i,j} \lambda_i\mu_j\,\langle T(v_i), T(v_j)\rangle.$$
> 5. Le due somme hanno davanti gli stessi numeri $\lambda_i\mu_j$. Se i prodotti tra i vettori della base sono uguali, sono uguali anche le due somme.

### Tre modi di dire la stessa cosa

Con il prodotto scalare normale ci sono tre frasi che dicono la stessa cosa: «non cambia i prodotti scalari», «non cambia le lunghezze», «non cambia le distanze».

Serve una condizione, che per il prodotto scalare normale vale sempre. Il prodotto scalare deve essere **definito positivo**: ogni vettore diverso da zero ha il prodotto scalare con sé stesso maggiore di zero (lezione L19). È la condizione che dà senso alle lunghezze.

> [!PROP] 22.7
> Sia $T : V \to W$ un isomorfismo fra spazi dotati di un prodotto scalare definito positivo. I fatti seguenti sono equivalenti:
> 1. $T$ è un'isometria,
> 2. $T$ preserva la norma, cioè $\|T(v)\| = \|v\|$ $\forall\, v \in V$,
> 3. $T$ preserva la distanza, cioè $d(v, w) = d(T(v), T(w))$ $\forall\, v, w \in V$.

**Come si legge.**

- «I fatti seguenti sono equivalenti» vuol dire: se ne vale uno, valgono tutti e tre.
- La riga 2 dice: la lunghezza dell'immagine è uguale alla lunghezza del vettore di partenza, per ogni vettore.
- Nella riga 3, $d(v, w)$ si legge «distanza tra $v$ e $w$». È la lunghezza della differenza dei due vettori. La riga dice: la distanza tra due vettori è uguale alla distanza tra le loro immagini.

In pratica la proposizione si usa al contrario. Per mostrare che una macchina **non** è un'isometria basta trovare un solo vettore che cambia lunghezza. È quello che abbiamo fatto con la dilatazione e con il taglio.

> [!DIM] della Proposizione 22.7 (dal libro di Martelli)
> Le dispense non la dimostrano. Questi sono gli argomenti del libro di Martelli (Proposizione 8.2.1).
>
> 1. **Dal fatto 1 al fatto 2.** La norma al quadrato è il prodotto scalare di un vettore con sé stesso. Se $T$ conserva i prodotti scalari,
>    $$\|T(v)\|^2 = \langle T(v), T(v)\rangle = \langle v, v\rangle = \|v\|^2.$$
> 2. **Dal fatto 2 al fatto 3.** La distanza è la norma della differenza. La macchina è lineare, quindi $T(v) - T(w) = T(v - w)$. Allora
>    $$d(T(v), T(w)) = \|T(v) - T(w)\| = \|T(v - w)\| = \|v - w\| = d(v, w).$$
> 3. **Dal fatto 3 al fatto 2.** La norma di un vettore è la sua distanza dal vettore zero, e $T(0) = 0$. Allora
>    $$\|v\| = d(0, v) = d(T(0), T(v)) = d(0, T(v)) = \|T(v)\|.$$
> 4. **Dal fatto 2 al fatto 1.** Il prodotto scalare si ricostruisce dalle norme, con la formula di polarizzazione della lezione L20:
>    $$\langle v, w\rangle = \frac{\|v + w\|^2 - \|v\|^2 - \|w\|^2}{2}.$$
>    Se $T$ conserva le norme, i tre pezzi a destra non cambiano quando al posto di $v$ e $w$ si mettono $T(v)$ e $T(w)$. Per il primo pezzo si usa $\|v + w\| = \|T(v + w)\| = \|T(v) + T(w)\|$. Quindi $\langle v, w\rangle = \langle T(v), T(w)\rangle$.

### La stessa condizione scritta con le matrici

L'ultimo passo traduce la definizione in un conto con le matrici. È il passo che porta alla regola pratica della prossima sezione.

Servono due cose delle lezioni passate.

- Un prodotto scalare si descrive con una tabella: la matrice che contiene i prodotti scalari tra i vettori di una base (lezione L19).
- Una macchina lineare si descrive con la sua matrice, una volta scelte le basi (lezione L15).

Le dispense danno un nome a ogni oggetto. I due spazi si chiamano $V$ e $V'$ («vu primo»). I loro prodotti scalari si chiamano $g$ e $g'$. Le loro basi si chiamano $\mathcal B$ e $\mathcal B'$. La macchina è un isomorfismo $T$ dal primo spazio al secondo. Le tre matrici sono queste:

$$S = [g]_{\mathcal B}, \qquad S' = [g']_{\mathcal B'}, \qquad A = [T]^{\mathcal B}_{\mathcal B'}$$

- $S$ è la tabella dei prodotti scalari tra i vettori della prima base.
- $S'$ è la tabella dei prodotti scalari tra i vettori della seconda base.
- $A$ è la matrice della macchina. Nelle sue colonne ci sono le immagini dei vettori della prima base, scritte come ricette fatte con la seconda.

> [!PROP] 22.8
> L'isomorfismo $T$ è un'isometria se e solo se
> $$S = {}^tA\,S'\,A.$$

**Come si legge.** La scrittura ${}^tA$ è la trasposta della matrice $A$: la stessa tabella, con le righe scambiate con le colonne (lezione L08). La formula dice di moltiplicare tre matrici in quest'ordine: la trasposta di $A$, poi $S'$, poi $A$. Se il risultato è uguale a $S$, la macchina è un'isometria. Se è diverso, non lo è.

Il motivo a parole. Il prodotto delle tre matrici calcola in un colpo solo tutti i prodotti scalari tra le immagini dei vettori della base. La matrice $S$ contiene tutti i prodotti scalari tra i vettori della base. Dire che le due tabelle sono uguali è ripetere la Proposizione 22.6, con le matrici.

> [!DIM] della Proposizione 22.8 (la spiegazione delle dispense, con i passaggi)
> 1. Per la Proposizione 22.6 basta controllare i vettori della base.
> 2. Le dispense chiamano $A^i$ la colonna numero $i$ della matrice $A$. Qui il numerino in alto non è una potenza: è il numero della colonna. Questa colonna contiene le coordinate di $T(v_i)$ nella seconda base: $A^i = [T(v_i)]_{\mathcal B'}$.
> 3. Il numero di posto $(i, j)$ della matrice ${}^tA\,S'\,A$ si calcola con la colonna $i$ e la colonna $j$ di $A$. Per il Corollario 19.16 è il prodotto scalare delle due immagini:
>    $$({}^tA\,S'\,A)_{ij} = {}^t(A^i)\,S'\,A^j = g'(T(v_i), T(v_j)).$$
> 4. Il numero di posto $(i, j)$ della matrice $S$ è $S_{ij} = g(v_i, v_j)$.
> 5. Due matrici sono uguali quando hanno gli stessi numeri in tutti i posti. Qui succede quando $g(v_i, v_j) = g'(T(v_i), T(v_j))$ per ogni $i$ e $j$. È la condizione della Proposizione 22.6.

::: prova La macchina che raddoppia tutto, cioè $(x, y) \mapsto (2x, 2y)$, è un'isometria?
No. Manda $e_1 = (1, 0)$, che è lungo 1, in $(2, 0)$, che è lungo 2. Basta un vettore che cambia lunghezza.
:::

::: prova Il mezzo giro manda $(x, y)$ in $(-x, -y)$. Controlla che non cambia il prodotto scalare di $(1, 2)$ e $(3, -1)$.
Prima: $1 \cdot 3 + 2 \cdot (-1) = 1$. Le immagini sono $(-1, -2)$ e $(-3, 1)$. Dopo: $(-1) \cdot (-3) + (-2) \cdot 1 = 3 - 2 = 1$. Stesso numero.
:::

> [!RICORDA]
> - Un'**isometria** è una macchina lineare che si può disfare e che non cambia i prodotti scalari.
> - Con il prodotto scalare normale è lo stesso che dire: non cambia le lunghezze, oppure non cambia le distanze.
> - Basta controllare i vettori di una base.
> - Per dire che una macchina non è un'isometria basta un vettore che cambia lunghezza.

## Le matrici ortogonali (p. 113)

Torniamo al piano e allo spazio di tutti i giorni, con il prodotto scalare normale.

La domanda di questa sezione è pratica. Hai davanti una tabella di numeri: come capisci se è la matrice di un movimento rigido?

### La regola delle colonne

La risposta viene dall'idea usata fin dall'inizio: le colonne della matrice sono le immagini dei vettori della base canonica.

I vettori della base canonica hanno due qualità. Sono lunghi 1. E sono perpendicolari tra loro. Un movimento rigido non cambia le lunghezze e non cambia gli angoli retti. Quindi anche le immagini, cioè le colonne della matrice, devono essere lunghe 1 e perpendicolari tra loro.

Vale anche il contrario. Se le colonne sono lunghe 1 e perpendicolari tra loro, la matrice è un movimento rigido. È quello che dice la Proposizione 22.6: basta controllare i vettori di una base.

> [!IDEA]
> Una matrice è un movimento rigido esattamente quando le sue colonne sono lunghe 1 e perpendicolari tra loro.

Proviamo con una matrice.

$$A = \begin{pmatrix} \frac35 & -\frac45 \\ \frac45 & \frac35 \end{pmatrix}$$

La prima colonna è $\left(\frac35, \frac45\right)$. La seconda è $\left(-\frac45, \frac35\right)$. I controlli da fare sono tre.

| Controllo | Conto | Risultato |
|---|---|---|
| lunghezza della prima colonna | $\sqrt{\frac9{25} + \frac{16}{25}} = \sqrt{\frac{25}{25}}$ | $1$ |
| lunghezza della seconda colonna | $\sqrt{\frac{16}{25} + \frac9{25}} = \sqrt{\frac{25}{25}}$ | $1$ |
| prodotto scalare tra le due colonne | $\frac35 \cdot \left(-\frac45\right) + \frac45 \cdot \frac35 = -\frac{12}{25} + \frac{12}{25}$ | $0$ |

I tre controlli riescono: la matrice è un movimento rigido.

### Lo stesso controllo in una formula

Le dispense scrivono i tre controlli in una formula sola. Per leggerla servono due cose della lezione L08.

> [!RIPASSO] la trasposta e la matrice identità (lezione L08)
> La **trasposta** di una matrice è la stessa tabella con le righe scambiate con le colonne. La prima riga diventa la prima colonna, la seconda riga diventa la seconda colonna. Si scrive con una piccola $t$ in alto a sinistra.
> $$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \qquad\qquad {}^tA = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$$
> La **matrice identità** ha 1 sulla diagonale e 0 in tutti gli altri posti. Moltiplicare per lei non cambia niente. Si scrive $I_n$, dove $n$ è il numero delle righe, che è uguale al numero delle colonne.
> $$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \qquad\qquad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

Ora prendiamo la matrice di prima e moltiplichiamo la sua trasposta per lei. Le righe della trasposta sono le colonne della matrice. Quindi, nel prodotto riga per colonna, ogni conto è il prodotto scalare tra due colonne.

$$\begin{pmatrix} \frac35 & \frac45 \\ -\frac45 & \frac35 \end{pmatrix}\begin{pmatrix} \frac35 & -\frac45 \\ \frac45 & \frac35 \end{pmatrix} = \begin{pmatrix} \frac9{25} + \frac{16}{25} & -\frac{12}{25} + \frac{12}{25} \\ -\frac{12}{25} + \frac{12}{25} & \frac{16}{25} + \frac9{25} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

Guarda dove sono finiti i tre controlli.

- In alto a sinistra c'è la prima colonna per sé stessa: è la sua lunghezza al quadrato, e vale 1.
- In basso a destra c'è la seconda colonna per sé stessa: vale 1.
- Negli altri due posti c'è la prima colonna per la seconda: vale 0.

Il risultato è la matrice identità. Quindi «colonne lunghe 1 e perpendicolari» e «trasposta per matrice uguale identità» sono la stessa frase.

Le dispense arrivano alla formula partendo dalla Proposizione 22.8. Con il prodotto scalare normale e la base canonica, la tabella dei prodotti scalari è la matrice identità. La condizione di quella proposizione diventa $I_n = {}^tA\,I_n\,A$, e moltiplicare per l'identità non cambia niente.

> [!COROLLARIO] 22.9
> L'endomorfismo $L_A$ è un'isometria $\iff {}^tA\,A = I_n$.

**Come si legge.** Un **endomorfismo** è una macchina lineare che va da uno spazio allo stesso spazio. Qui è la macchina «moltiplica per $A$», che va da $\R^n$ a $\R^n$. La doppia freccia $\iff$ si legge «esattamente quando». Tutta la frase: la macchina è un'isometria esattamente quando la trasposta di $A$ moltiplicata per $A$ dà la matrice identità.

Le matrici che superano questo controllo hanno un nome.

> [!DEF] 22.10 · Matrice ortogonale
> Una matrice $A \in M(n)$ a coefficienti reali tale che ${}^tA\,A = I_n$ è detta **ortogonale**.

**Come si legge.**

- $A \in M(n)$ si legge «$A$ appartiene a emme di enne». Vuol dire: è una matrice quadrata, con $n$ righe e $n$ colonne.
- «A coefficienti reali» vuol dire che i numeri nella tabella sono numeri reali.
- La condizione è quella del corollario: trasposta per matrice uguale identità.

Quindi «matrice ortogonale» e «matrice di un movimento rigido» sono la stessa cosa.

Con una matrice grande il discorso non cambia. Il numero che sta nella riga $i$ e nella colonna $j$ del prodotto è il prodotto scalare tra la colonna $i$ e la colonna $j$ della matrice. Le dispense chiamano $A^i$ la colonna numero $i$: il numerino in alto qui non è una potenza. La condizione diventa

$${}^tA\,A = I_n \quad\text{esattamente quando}\quad \langle A^i, A^j\rangle = \begin{cases} 1 & \text{se } i = j, \\ 0 & \text{se } i \neq j. \end{cases}$$

A parole: ogni colonna ha prodotto scalare 1 con sé stessa, cioè è lunga 1. E ha prodotto scalare 0 con ogni altra colonna, cioè è perpendicolare alle altre. Un gruppo di vettori fatto così si chiama **base ortonormale** (lezione L21): «orto» sta per perpendicolari, «normale» sta per lunghi 1.

> [!OLTRE] Quattro proprietà delle matrici ortogonali
> Dalla condizione ${}^tA\,A = I_n$ si ricavano quattro fatti (Martelli, §8.2.2).
>
> **L'inversa è la trasposta.** L'inversa di una matrice è quella che, moltiplicata per lei, dà l'identità (lezione L10). Qui la trasposta fa proprio questo. Quindi
> $$A^{-1} = {}^tA.$$
> Per disfare un movimento rigido basta scambiare le righe con le colonne. Vale anche $A\,{}^tA = I_n$: quindi pure le **righe** sono lunghe 1 e perpendicolari tra loro.
>
> **Il determinante è 1 oppure $-1$.** Il determinante di un prodotto è il prodotto dei determinanti (Teorema di Binet, lezione L10). La trasposta ha lo stesso determinante della matrice. Quindi
> $$(\det A)^2 = \det({}^tA) \cdot \det A = \det I_n = 1.$$
> I soli numeri reali che al quadrato danno 1 sono $1$ e $-1$.
>
> **Gli autovalori reali possono essere solo 1 e $-1$.** Supponi che la matrice moltiplichi un vettore $v$ per un numero $\lambda$ («lambda»). La lunghezza del vettore viene moltiplicata per $\lambda$ senza il segno, che si scrive $|\lambda|$. Ma un movimento rigido non cambia le lunghezze:
> $$\|v\| = \|Av\| = |\lambda| \cdot \|v\|.$$
> Quindi $|\lambda| = 1$.
>
> **Il prodotto di due matrici ortogonali è ortogonale.** Un movimento rigido dopo l'altro dà ancora un movimento rigido. Il conto usa la regola «la trasposta di un prodotto è il prodotto delle trasposte, in ordine inverso»:
> $${}^t(AB)\,(AB) = {}^tB\,({}^tA\,A)\,B = {}^tB\,B = I_n.$$

> [!ESEMPIO] Ortogonale o no?
> **Prima matrice.** $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$. Il numero $\frac15$ davanti moltiplica tutti e quattro i numeri: è la matrice controllata sopra. Le colonne sono lunghe 1 e perpendicolari. **È ortogonale.** È la rotazione con coseno $\frac35$ e seno $\frac45$.
>
> **Seconda matrice.** $\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$. Le colonne sono $(1, -1)$ e $(1, 1)$.
>
> - Prodotto scalare tra le colonne: $1 \cdot 1 + (-1) \cdot 1 = 0$. Sono perpendicolari.
> - Lunghezza della prima colonna: $\sqrt{1 + 1} = \sqrt2$. Non è 1.
>
> **Non è ortogonale.** Gira il piano di un ottavo di giro in senso orario, ma in più lo ingrandisce: moltiplica tutte le lunghezze per $\sqrt2$.
>
> **Terza matrice.** $\frac13\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{pmatrix}$. Ha tre colonne: $\frac13(1, 2, 2)$, poi $\frac13(2, 1, -2)$, poi $\frac13(2, -2, 1)$. I controlli sono sei: tre lunghezze e tre prodotti scalari.
>
> - Lunghezze. In ogni colonna i quadrati dei tre numeri tra parentesi sono 1, 4 e 4, in qualche ordine. Quindi ogni colonna è lunga $\frac13\sqrt{1 + 4 + 4} = \frac13\sqrt9 = 1$.
> - Prima colonna con seconda: $\frac19\,(2 + 2 - 4) = 0$.
> - Prima colonna con terza: $\frac19\,(2 - 4 + 2) = 0$.
> - Seconda colonna con terza: $\frac19\,(4 - 2 - 2) = 0$.
>
> **È ortogonale.** Il suo determinante è $-1$.

> [!TRAPPOLA] Due condizioni che non bastano
> **Colonne perpendicolari non bastano.** Devono essere anche lunghe 1, come mostra la seconda matrice dell'esempio. Il nome «matrice ortogonale» inganna, perché fa pensare solo alla perpendicolarità.
>
> **Determinante 1 o $-1$ non basta.** La matrice $\begin{pmatrix} 0 & 2 \\ \frac12 & 0 \end{pmatrix}$ ha determinante $0 \cdot 0 - 2 \cdot \frac12 = -1$. Ma le sue colonne sono lunghe $\frac12$ e $2$, quindi non è ortogonale. Ogni matrice ortogonale ha determinante 1 o $-1$. Il contrario non vale.

::: prova La matrice $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ è ortogonale?
Sì. Le colonne sono $(0, 1)$ e $(1, 0)$, tutte e due lunghe 1. Il loro prodotto scalare è $0 \cdot 1 + 1 \cdot 0 = 0$.
:::

::: prova La matrice $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$ è ortogonale?
No. Le colonne sono perpendicolari, ma la seconda è $(0, 2)$, che è lunga 2.
:::

::: prova Scrivi l'inversa di $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$ senza fare conti.
La matrice è ortogonale, quindi l'inversa è la trasposta. Scambio le righe con le colonne: $\frac15\begin{pmatrix} 3 & 4 \\ -4 & 3 \end{pmatrix}$.
:::

> [!RICORDA]
> - Una matrice è **ortogonale** quando la sua trasposta, moltiplicata per lei, dà l'identità. È la matrice di un movimento rigido.
> - In pratica: le colonne sono lunghe 1 e perpendicolari tra loro.
> - L'inversa di una matrice ortogonale è la sua trasposta. Il suo determinante è 1 oppure $-1$.
> - Colonne solo perpendicolari, o solo il determinante giusto, non bastano.

## Tutti i movimenti rigidi del piano (p. 113)

Rotazioni e riflessioni sono movimenti rigidi del piano: ce ne sono altri?

La risposta è no, e si capisce con un disegno. Per il Corollario 22.9, cercare tutti i movimenti rigidi del piano è lo stesso che cercare tutte le matrici ortogonali con due righe e due colonne. Proviamo a costruirne una, una colonna alla volta.

**La prima colonna.** Deve essere un vettore lungo 1. I vettori lunghi 1 sono i punti del cerchio di raggio 1. Ogni punto di quel cerchio si scrive con il coseno e il seno del suo angolo. Quindi la prima colonna è

$$(\cos\vartheta,\ \sin\vartheta)$$

per un certo angolo $\vartheta$.

**La seconda colonna.** Deve essere perpendicolare alla prima, e lunga 1 anche lei. I vettori perpendicolari alla prima colonna stanno tutti su una retta. Su quella retta i vettori lunghi 1 sono soltanto due, uno l'opposto dell'altro:

$$(-\sin\vartheta,\ \cos\vartheta) \qquad\text{oppure}\qquad (\sin\vartheta,\ -\cos\vartheta).$$

Con il primo viene la matrice della rotazione. Con il secondo viene la matrice della riflessione. Altre scelte non ce ne sono.

Guarda la figura. La prima colonna è il vettore con la scritta «prima colonna», che arriva sul cerchio. La retta tratteggiata è perpendicolare a lui. Su quella retta i vettori lunghi 1 sono due. Quello con la scritta «rotazione» dà una rotazione. Quello opposto, con la scritta «riflessione», dà una riflessione.

```grafico
titolo: La prima colonna è un punto del cerchio di raggio 1. Per la seconda restano due sole scelte, una opposta all'altra
x: -1.6 1.6
y: -1.3 1.3
cerchio: 0 0 1 | grigio
retta: -1/2 sqrt(3)/2 1/2 -sqrt(3)/2 | grigio | tratteggio | sottile
vettore: sqrt(3)/2 1/2 | accento | spesso | "prima colonna" | e
vettore: -1/2 sqrt(3)/2 | blu | spesso | "rotazione" | no
vettore: 1/2 -sqrt(3)/2 | ambra | spesso | "riflessione" | se
```

Le dispense lo scrivono così.

> [!PROP] 22.11
> Le matrici ortogonali in $M(2)$ sono le seguenti:
> $$\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix},$$
> $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}$$
> al variare di $\vartheta \in [0, 2\pi)$.

**Come si legge.**

- $M(2)$ si legge «emme di due»: sono le matrici con due righe e due colonne.
- «Al variare di $\vartheta \in [0, 2\pi)$» vuol dire: per ogni angolo da 0 a un giro intero. La parentesi quadra dice che lo 0 è compreso. La tonda dice che il giro intero è escluso: riporta al punto di partenza, quindi è un doppione dell'angolo 0.
- La proposizione dice che l'elenco è completo. Ogni matrice ortogonale del piano è una rotazione oppure una riflessione.

> [!DIM] della Proposizione 22.11 (la dimostrazione delle dispense, con i passaggi)
> 1. Le colonne $A^1$ e $A^2$ di una matrice ortogonale $A$ formano una base ortonormale del piano: sono lunghe 1 e perpendicolari.
> 2. $A^1$ è lungo 1, quindi sta sul cerchio di raggio 1. Si scrive $A^1 = (\cos\vartheta, \sin\vartheta)$ per un solo angolo $\vartheta$ tra 0 e un giro intero.
> 3. $A^2$ è perpendicolare ad $A^1$. Per l'Esempio 21.1 sta sulla retta $\Span((-\sin\vartheta, \cos\vartheta))$.
> 4. $A^2$ è anche lungo 1. Su quella retta i vettori lunghi 1 sono solo due, e differiscono per il segno: $A^2 = (-\sin\vartheta, \cos\vartheta)$ oppure $A^2 = (\sin\vartheta, -\cos\vartheta)$.
> 5. Con la prima scelta viene $\mathrm{Rot}_\vartheta$. Con la seconda viene $\mathrm{Rif}_\vartheta$.
> 6. Viceversa, queste due matrici sono ortogonali. Le colonne sono lunghe 1 perché $\cos^2\vartheta + \sin^2\vartheta = 1$. Sono perpendicolari perché nel prodotto scalare i due pezzi sono $\cos\vartheta\sin\vartheta$ con segni opposti, e si cancellano.

> [!COROLLARIO] 22.12
> Le isometrie di $\R^2$ sono rotazioni e riflessioni.

**Come si legge.** Un corollario è una conseguenza diretta di quello che si è appena mostrato. Le «isometrie di $\R^2$» sono i movimenti rigidi del piano che tengono ferma l'origine. La frase dice che sono tutti rotazioni o riflessioni: un terzo tipo non esiste.

Per sapere quale dei due tipi hai davanti basta il determinante: **vale 1 per una rotazione e $-1$ per una riflessione**.

> [!METODO] Riconoscere un movimento rigido del piano
> 1. Controlla che la matrice sia ortogonale: colonne lunghe 1 e perpendicolari tra loro. Se non lo è, fermati: non è un'isometria.
> 2. Calcola il determinante: diagonale meno l'altra diagonale.
> 3. Se il determinante è 1, è una **rotazione**. Leggi l'angolo nella prima colonna: il numero in alto è il coseno, quello in basso è il seno. Cerca l'angolo nella tabella.
> 4. Se il determinante è $-1$, è una **riflessione**. Per trovare lo specchio cerca i vettori che restano fermi: risolvi $Av = v$, cioè $(A - I)v = 0$.
> 5. In alternativa, per la riflessione: leggi l'angolo nella prima colonna come al passo 3. Lo specchio sta alla metà di quell'angolo.

> [!ESEMPIO] Due matrici da riconoscere
> **La matrice $A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$.**
>
> 1. Le colonne sono $(0, -1)$ e $(1, 0)$. Sono lunghe 1. Il loro prodotto scalare è $0 \cdot 1 + (-1) \cdot 0 = 0$. La matrice è ortogonale.
> 2. Determinante: $0 \cdot 0 - 1 \cdot (-1) = 1$. È una rotazione.
> 3. Nella prima colonna il coseno è $0$ e il seno è $-1$. Nella tabella è l'angolo $\frac{3\pi}2$: tre quarti di giro in senso antiorario. È lo stesso che un quarto di giro in senso **orario**.
>
> Controllo: la matrice manda $e_1$ nella prima colonna, $(0, -1)$. Il vettore che puntava a destra ora punta in giù: un quarto di giro in senso orario.
>
> **La matrice $B = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$.**
>
> 1. Le colonne sono $(-1, 0)$ e $(0, 1)$: lunghe 1 e perpendicolari. La matrice è ortogonale.
> 2. Determinante: $(-1) \cdot 1 - 0 \cdot 0 = -1$. È una riflessione.
> 3. Nella prima colonna il coseno è $-1$ e il seno è $0$: l'angolo è $\pi$. Lo specchio sta alla metà, cioè a $\frac\pi2$: è l'asse $y$.
>
> Controllo: la matrice manda $(0, 1)$, che sta sull'asse $y$, in $(0, 1)$. Resta fermo.

> [!ESAME] L'insieme delle matrici ortogonali non è un sottospazio
> L'insieme di tutte le matrici ortogonali con due righe e due colonne si scrive $O(2)$, «o di due». Sta dentro lo spazio $M(2, \R)$ di tutte le matrici reali con due righe e due colonne. Ma **non è un sottospazio**. Ricorda dalla lezione L06: un sottospazio contiene lo zero, e sommando due suoi elementi non si esce.
>
> - La matrice fatta di soli zeri non è ortogonale: le sue colonne sono lunghe 0, non 1.
> - La somma di due matrici ortogonali di solito non è ortogonale. Per esempio $I_2 + I_2$ ha le colonne lunghe 2.
>
> Per la Proposizione 22.11 questo insieme è fatto di due famiglie di matrici, le rotazioni e le riflessioni. In ognuna la matrice dipende da un angolo. Un appello ci ha costruito sopra una domanda: la trovi risolta in «Verso l'esame».

::: prova Che movimento è la matrice $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$?
Le colonne sono $(-1, 0)$ e $(0, -1)$: lunghe 1 e perpendicolari. Il determinante è $(-1) \cdot (-1) - 0 \cdot 0 = 1$: è una rotazione. Nella prima colonna il coseno è $-1$ e il seno è $0$: l'angolo è $\pi$, mezzo giro.
:::

::: prova Una matrice ortogonale del piano ha determinante $-1$. Può essere una rotazione?
No. Le rotazioni hanno tutte determinante 1. Con determinante $-1$ è una riflessione.
:::

> [!RICORDA]
> - Le matrici ortogonali del piano sono solo di due tipi: rotazioni e riflessioni.
> - Determinante 1: rotazione. Determinante $-1$: riflessione.
> - L'angolo si legge nella prima colonna: coseno in alto, seno in basso.
> - L'insieme delle matrici ortogonali non è un sottospazio.

## I movimenti rigidi dello spazio (p. 113)

Nello spazio non si gira intorno a un punto: si gira intorno a una retta, come una porta sui cardini o un mappamondo sul suo perno.

> [!NOTA] Serve per capire, non per l'esame
> Negli appelli dal 2023 al 2026 non ci sono domande sulle isometrie dello spazio. Se hai poco tempo, di questa sezione leggi solo il riquadro «Da ricordare» in fondo.

La retta intorno a cui si gira si chiama **asse** della rotazione. I punti dell'asse restano fermi. Tutti gli altri girano intorno all'asse, ognuno alla sua altezza.

### Girare intorno all'asse verticale

Nello spazio i vettori sono liste di tre numeri, $(x, y, z)$: quanto a destra, quanto in avanti, quanto in alto. La base canonica ha tre vettori:

$$e_1 = (1, 0, 0), \qquad e_2 = (0, 1, 0), \qquad e_3 = (0, 0, 1).$$

Il terzo punta verso l'alto. L'**asse $z$** è la retta verticale che passa per l'origine.

Giriamo lo spazio di un angolo $\vartheta$ intorno all'asse $z$. Il pavimento, cioè il piano dei punti ad altezza zero, gira come girava il piano nelle sezioni precedenti. L'altezza di ogni punto non cambia. La matrice ha tre righe e tre colonne:

$$\begin{pmatrix} \cos\vartheta & -\sin\vartheta & 0 \\ \sin\vartheta & \cos\vartheta & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

Leggila per colonne. Le prime due colonne dicono dove vanno $e_1$ ed $e_2$: girano sul pavimento, come nel piano. La terza colonna dice dove va $e_3$: resta fermo, perché sta sull'asse.

Un esempio con un quarto di giro, dove il coseno è 0 e il seno è 1.

$$\begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1 \\ 2 \\ 5 \end{pmatrix} = \begin{pmatrix} 0 \cdot 1 - 1 \cdot 2 + 0 \cdot 5 \\ 1 \cdot 1 + 0 \cdot 2 + 0 \cdot 5 \\ 0 \cdot 1 + 0 \cdot 2 + 1 \cdot 5 \end{pmatrix} = \begin{pmatrix} -2 \\ 1 \\ 5 \end{pmatrix}$$

I primi due numeri hanno fatto un quarto di giro: da $(1, 2)$ a $(-2, 1)$. Il terzo numero, l'altezza 5, è rimasto com'era.

### Girare e poi specchiare

C'è un secondo tipo di movimento rigido dello spazio. Si fa in due tempi: prima si gira intorno a un asse, poi si specchia rispetto al piano perpendicolare all'asse. Si chiama **antirotazione**.

Con l'asse $z$, il piano perpendicolare all'asse è il pavimento. Specchiare rispetto al pavimento vuol dire mandare ogni punto sotto il pavimento, alla stessa distanza: l'altezza cambia segno. Nella matrice cambia solo l'ultimo numero:

$$\begin{pmatrix} \cos\vartheta & -\sin\vartheta & 0 \\ \sin\vartheta & \cos\vartheta & 0 \\ 0 & 0 & -1 \end{pmatrix}$$

Con un quarto di giro, il vettore $(1, 2, 5)$ diventa $(-2, 1, -5)$.

Anche qui il determinante distingue i due tipi. Nella terza riga c'è un solo numero diverso da zero, l'ultimo. Con lo sviluppo di Laplace lungo quella riga (lezione L09) il determinante è quel numero, moltiplicato per il determinante della tabella in alto a sinistra. Quella tabella è una rotazione del piano, che ha determinante 1. Quindi la prima matrice ha determinante $1$ e la seconda ha determinante $-1$.

### Che cosa dice il teorema

Le dispense chiamano $r$ la retta dell'asse e $U$ il piano perpendicolare. Scrivono $U = r^\perp$. Il simbolo $r^\perp$ si legge «erre perpendicolare»: è l'insieme di tutti i vettori perpendicolari alla retta (lezione L21). Per una retta dello spazio è un piano. Se la retta è verticale, è il pavimento.

> [!TEOREMA] 22.13
> Ogni isometria di $\R^3$ è una rotazione o un'antirotazione. Qui, un'antirotazione $T : \R^3 \to \R^3$ è la composizione di una rotazione intorno ad un asse $r$ e di una riflessione rispetto al piano $U = r^\perp$.

**Come si legge.**

- Un'«isometria di $\R^3$» è un movimento rigido dello spazio che tiene ferma l'origine.
- «Composizione» vuol dire «una macchina dopo l'altra»: prima la rotazione, poi lo specchio.
- L'asse può essere una retta qualsiasi che passa per l'origine, non solo l'asse $z$.
- Il teorema dice che l'elenco è completo, come nel piano: un terzo tipo non esiste.

Le dispense non lo dimostrano. Dicono solo che si fa «con un po' più lavoro, ma in modo simile» al caso del piano.

Alcune rotazioni e antirotazioni hanno un aspetto familiare (Martelli, §8.2.5–8.2.6).

| Tipo | Angolo | Che cosa fa |
|---|---|---|
| rotazione | $0$ | niente: è l'identità |
| rotazione | $\pi$ | mezzo giro intorno all'asse: è la riflessione rispetto alla retta $r$ |
| antirotazione | $0$ | solo lo specchio: è la riflessione rispetto al piano $U$ |
| antirotazione | $\pi$ | manda ogni vettore nel suo opposto: è la matrice $-I_3$, la riflessione rispetto all'origine |

> [!OLTRE] Riconoscere asse e angolo
> Il libro di Martelli (p. 261) dà una ricetta per una matrice ortogonale $A$ con tre righe e tre colonne.
>
> 1. Calcola il determinante. Se è 1 è una rotazione, se è $-1$ è un'antirotazione.
> 2. Calcola la **traccia**, cioè la somma dei tre numeri sulla diagonale. Si scrive $\operatorname{tr}A$.
> 3. Il coseno dell'angolo viene da questa formula:
>    $$\cos\vartheta = \frac{\operatorname{tr}A - \det A}{2}$$
> 4. Trova l'asse. Per una rotazione è fatto dai vettori che restano fermi. Per un'antirotazione è fatto dai vettori che diventano il loro opposto. Questo vale quando l'angolo non è $0$ e non è $\pi$.
>
> **Un esempio.** La matrice $A = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ ha come colonne $e_2$, poi $e_3$, poi $e_1$. Quindi manda $e_1$ in $e_2$, manda $e_2$ in $e_3$ e manda $e_3$ in $e_1$.
>
> - È ortogonale: le colonne sono i vettori della base canonica, in un altro ordine.
> - Il determinante è 1: è una rotazione.
> - La traccia è $0 + 0 + 0 = 0$. Il coseno dell'angolo è $\frac{0 - 1}2 = -\frac12$. L'angolo è $\frac{2\pi}3$: un terzo di giro.
> - L'asse. La matrice sposta i tre numeri di un vettore di un posto. Il vettore $(1, 1, 1)$ ha i tre numeri uguali, quindi resta fermo. L'asse è la retta $\Span((1, 1, 1))$.
>
> Controllo: tre terzi di giro fanno un giro intero. Infatti, applicando la matrice tre volte, ogni vettore torna al suo posto.
>
> **Perché il teorema è vero**, in breve (Martelli, Teorema 8.2.13). Una matrice con tre righe e tre colonne ha sempre almeno un autovalore reale, perché un polinomio di grado 3 ha sempre una radice reale. Per una matrice ortogonale questo autovalore è 1 oppure $-1$. Il suo autovettore dà la direzione dell'asse. Il piano perpendicolare all'asse viene mandato in sé stesso, e lì la matrice si comporta come un movimento rigido del piano: una rotazione o una riflessione. Mettendo insieme i casi escono le rotazioni e le antirotazioni.

::: prova Dove va il vettore $(1, 0, 4)$ con un quarto di giro intorno all'asse $z$?
I primi due numeri fanno un quarto di giro: $(1, 0)$ diventa $(0, 1)$. Il terzo non cambia. Il risultato è $(0, 1, 4)$.
:::

::: prova La macchina $(x, y, z) \mapsto (x, y, -z)$ cambia segno solo al terzo numero. È una rotazione o un'antirotazione?
È lo specchio rispetto al pavimento. La sua matrice ha sulla diagonale $1$, $1$ e $-1$, e zeri altrove: il determinante è $1 \cdot 1 \cdot (-1) = -1$. È un'antirotazione: quella con angolo 0.
:::

> [!RICORDA]
> - Nello spazio si gira intorno a una retta, l'**asse**. I punti dell'asse restano fermi.
> - Un'**antirotazione** è una rotazione seguita dallo specchio rispetto al piano perpendicolare all'asse.
> - Ogni movimento rigido dello spazio che tiene ferma l'origine è una rotazione (determinante 1) o un'antirotazione (determinante $-1$).

## Il prodotto vettoriale: come si calcola (p. 114)

Nello spazio capita di continuo di cercare un vettore perpendicolare a due vettori dati.

Pensa a un tavolo. Sul piano del tavolo scegli due direzioni: una verso destra e una in avanti. La direzione perpendicolare a tutte e due è quella verticale, che esce dal tavolo. Con i numeri: i vettori $(1, 0, 0)$ e $(0, 1, 0)$ stanno sul piano del tavolo, e il vettore $(0, 0, 1)$, che punta in alto, è perpendicolare a tutti e due.

Nelle lezioni L23 e L24, e nei problemi d'esame, un vettore perpendicolare a due vettori serve per due cose:

- trovare la direzione perpendicolare a un piano, quando del piano conosci due direzioni;
- trovare la direzione della retta in cui si tagliano due piani.

Quando i due vettori sono messi comodi, come sul tavolo, il vettore perpendicolare si vede a occhio. Di solito non è così. Per esempio: qual è un vettore perpendicolare sia a $(1, 2, 3)$ sia a $(4, 5, 6)$?

Un modo è risolvere un sistema con due equazioni, come nella lezione L21. Ma c'è una ricetta diretta, che dà subito la risposta. Si chiama **prodotto vettoriale**.

### La ricetta, con i numeri

Scrivi i due vettori in colonna, uno accanto all'altro. Viene una tabella con tre righe e due colonne.

$$\begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}$$

Il risultato è un vettore di tre numeri. Ogni numero si trova **coprendo una riga** della tabella e facendo un conto con i quattro numeri che restano. Il conto è quello del determinante: «diagonale meno l'altra diagonale».

| Numero del risultato | Riga da coprire | Che cosa resta | Conto | Segno | Viene |
|---|---|---|---|---|---|
| il primo | la prima | $\begin{pmatrix} 2 & 5 \\ 3 & 6 \end{pmatrix}$ | $2 \cdot 6 - 5 \cdot 3 = -3$ | resta com'è | $-3$ |
| il secondo | la seconda | $\begin{pmatrix} 1 & 4 \\ 3 & 6 \end{pmatrix}$ | $1 \cdot 6 - 4 \cdot 3 = -6$ | **si cambia** | $6$ |
| il terzo | la terza | $\begin{pmatrix} 1 & 4 \\ 2 & 5 \end{pmatrix}$ | $1 \cdot 5 - 4 \cdot 2 = -3$ | resta com'è | $-3$ |

Il risultato è il vettore $(-3, 6, -3)$.

Il punto delicato è uno solo: nel secondo numero, dopo il conto, bisogna **cambiare il segno**.

Controlliamo che il risultato sia perpendicolare ai due vettori di partenza. Il prodotto scalare deve fare zero tutte e due le volte.

$$\langle (-3, 6, -3), (1, 2, 3)\rangle = -3 + 12 - 9 = 0$$

$$\langle (-3, 6, -3), (4, 5, 6)\rangle = -12 + 30 - 18 = 0$$

Funziona. Questo controllo va fatto sempre: costa pochi secondi e trova quasi tutti gli errori di conto.

### Il nome, il simbolo, la formula

Il vettore costruito con questa ricetta è il **prodotto vettoriale** dei due vettori. Si scrive con una crocetta: $v \times w$. Si legge «$v$ vettoriale $w$».

Tre avvisi sul simbolo.

- La crocetta qui non è la moltiplicazione tra numeri.
- Il risultato è un **vettore**. Il prodotto scalare invece dà un numero. Sono due operazioni diverse.
- Il prodotto vettoriale esiste **solo nello spazio**, cioè per vettori fatti di tre numeri.

Le dispense scrivono la ricetta con le lettere. I tre numeri del primo vettore si chiamano $v_1$, $v_2$, $v_3$: il numerino in basso dice il posto. I tre numeri del secondo vettore si chiamano $w_1$, $w_2$, $w_3$.

> [!DEF] 22.14 · Prodotto vettoriale
> Consideriamo due vettori $v, w \in \R^3$:
> $$v = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}, \qquad w = \begin{pmatrix} w_1 \\ w_2 \\ w_3 \end{pmatrix}.$$
> Il **prodotto vettoriale** fra $v$ e $w$ è il vettore
> $$v \times w = \begin{pmatrix} v_2w_3 - v_3w_2 \\ v_3w_1 - v_1w_3 \\ v_1w_2 - v_2w_1 \end{pmatrix}.$$

**Come si legge.**

- $v, w \in \R^3$ si legge «$v$ e $w$ appartengono a erre tre». Vuol dire: sono due vettori dello spazio.
- Due lettere attaccate si moltiplicano. Per esempio $v_2w_3$ è «il secondo numero di $v$ per il terzo numero di $w$».
- La prima riga del risultato usa solo i numeri di posto 2 e 3. È il conto che si fa coprendo la prima riga della tabella.
- La seconda riga usa i posti 3 e 1. La terza riga usa i posti 1 e 2.
- Per ricordare l'ordine pensa ai posti messi in cerchio: dopo l'1 viene il 2, dopo il 2 viene il 3, dopo il 3 torna l'1. Ogni riga comincia dal posto che viene dopo il suo: la riga 1 comincia con $v_2$, la riga 2 con $v_3$, la riga 3 con $v_1$.

### La stessa ricetta con le parole delle dispense

Le dispense descrivono così la ricetta «copri una riga». Chiamano $A$ la tabella che ha i due vettori in colonna:

$$A = \begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}$$

Cancellando una riga resta una tabella più piccola, con due righe e due colonne. Si chiama **minore**. Le dispense chiamano $d_i$ il determinante del minore che resta cancellando la riga numero $i$. Quindi $d_1$ è il conto fatto coprendo la prima riga, $d_2$ quello fatto coprendo la seconda, $d_3$ quello fatto coprendo la terza. Con questi nomi la ricetta diventa

$$v \times w = \begin{pmatrix} d_1 \\ -d_2 \\ d_3 \end{pmatrix}.$$

Il segno meno davanti a $d_2$ è il «cambia segno» del secondo numero.

Le dispense danno anche una regola per chi ha in mente lo sviluppo di Laplace della lezione L09. Si scrive una tabella con tre righe e tre colonne. Nelle prime due colonne vanno i due vettori. Nella terza vanno i simboli $e_1$, $e_2$, $e_3$ dei vettori della base canonica dello spazio. Poi si calcola il determinante sviluppando lungo la terza colonna, con i segni più, meno, più:

$$\begin{aligned} v \times w &= \det\begin{pmatrix} v_1 & w_1 & e_1 \\ v_2 & w_2 & e_2 \\ v_3 & w_3 & e_3 \end{pmatrix} \\ &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}e_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix}e_2 + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix}e_3. \end{aligned}$$

Il numero davanti a $e_1$ è il primo numero del risultato. Quello davanti a $e_2$ è il secondo, quello davanti a $e_3$ è il terzo. Sono di nuovo i tre conti della ricetta, con il segno meno al secondo.

Le dispense avvertono che questa è solo una regola mnemonica, cioè un aiuto per la memoria. Quella tabella non è una vera matrice, perché nella terza colonna non ci sono numeri ma vettori.

> [!ESEMPIO] Calcolare $(1, 2, 3) \times (4, 5, 6)$
> È il conto fatto sopra, riscritto con la formula della Definizione 22.14. Qui $v = (1, 2, 3)$ e $w = (4, 5, 6)$. Quindi $v_1 = 1$, $v_2 = 2$, $v_3 = 3$ e $w_1 = 4$, $w_2 = 5$, $w_3 = 6$.
>
> - Primo numero: $v_2w_3 - v_3w_2 = 2 \cdot 6 - 3 \cdot 5 = 12 - 15 = -3$.
> - Secondo numero: $v_3w_1 - v_1w_3 = 3 \cdot 4 - 1 \cdot 6 = 12 - 6 = 6$.
> - Terzo numero: $v_1w_2 - v_2w_1 = 1 \cdot 5 - 2 \cdot 4 = 5 - 8 = -3$.
>
> Quindi $v \times w = (-3, 6, -3)$.
>
> Con i minori viene lo stesso risultato.
>
> - $d_1 = 2 \cdot 6 - 5 \cdot 3 = -3$.
> - $d_2 = 1 \cdot 6 - 4 \cdot 3 = -6$.
> - $d_3 = 1 \cdot 5 - 4 \cdot 2 = -3$.
>
> Il risultato è $(d_1, -d_2, d_3) = (-3, 6, -3)$.
>
> Controllo: il prodotto scalare con $v$ è $-3 + 12 - 9 = 0$. Quello con $w$ è $-12 + 30 - 18 = 0$.

> [!ESEMPIO] La base canonica
> I tre vettori della base canonica dello spazio sono legati da tre prodotti vettoriali (Martelli, Esempio 9.1.1):
> $$e_1 \times e_2 = e_3, \qquad e_2 \times e_3 = e_1, \qquad e_3 \times e_1 = e_2.$$
> Il primo è il tavolo dell'inizio: da «destra» e «avanti» esce «in alto». Il conto, con $e_1 = (1, 0, 0)$ ed $e_2 = (0, 1, 0)$:
>
> - primo numero: $0 \cdot 0 - 0 \cdot 1 = 0$;
> - secondo numero: $0 \cdot 0 - 1 \cdot 0 = 0$;
> - terzo numero: $1 \cdot 1 - 0 \cdot 0 = 1$.
>
> Il risultato è $(0, 0, 1)$, cioè $e_3$.
>
> Se scambi l'ordine dei due vettori, il risultato cambia segno: $e_2 \times e_1 = -e_3$.

::: prova Calcola $(1, 1, 0) \times (0, 1, 1)$ e controlla il risultato.
La tabella con i due vettori in colonna ha le righe $(1, 0)$, $(1, 1)$ e $(0, 1)$.

Copro la prima riga: $1 \cdot 1 - 1 \cdot 0 = 1$.

Copro la seconda riga: $1 \cdot 1 - 0 \cdot 0 = 1$. Cambio il segno: $-1$.

Copro la terza riga: $1 \cdot 1 - 0 \cdot 1 = 1$.

Il risultato è $(1, -1, 1)$. Controllo: con $(1, 1, 0)$ viene $1 - 1 + 0 = 0$. Con $(0, 1, 1)$ viene $0 - 1 + 1 = 0$.
:::

::: prova Calcola $(2, 0, 0) \times (0, 3, 0)$.
La tabella ha le righe $(2, 0)$, $(0, 3)$ e $(0, 0)$.

Copro la prima riga: $0 \cdot 0 - 3 \cdot 0 = 0$.

Copro la seconda riga: $2 \cdot 0 - 0 \cdot 0 = 0$. Cambiando il segno resta $0$.

Copro la terza riga: $2 \cdot 3 - 0 \cdot 0 = 6$.

Il risultato è $(0, 0, 6)$: punta in alto, come nel caso del tavolo.
:::

> [!RICORDA]
> - Il **prodotto vettoriale** di due vettori dello spazio è un vettore perpendicolare a tutti e due. Esiste solo per vettori fatti di tre numeri.
> - La ricetta: metti i due vettori in colonna, copri una riga alla volta e fai «diagonale meno l'altra diagonale». Al secondo numero cambia il segno.
> - Controlla sempre: il risultato deve avere prodotto scalare zero con tutti e due i vettori.

## Tre garanzie sul prodotto vettoriale (pp. 114–115)

Il prodotto vettoriale ha tre proprietà che lo rendono utile, e le dispense le dimostrano una per una.

### È perpendicolare ai due vettori

Nell'esempio di prima il controllo con il prodotto scalare è riuscito. La prima proposizione dice che riesce sempre.

> [!PROP] 22.15
> Il vettore $v \times w$ è ortogonale sia a $v$ che a $w$.

**Come si legge.** «Ortogonale» vuol dire perpendicolare. La frase dice due cose: il prodotto scalare di $v \times w$ con $v$ è zero, e anche quello con $w$ è zero. Vale per qualunque coppia di vettori dello spazio.

Il perché in una frase: quel prodotto scalare è il determinante di una tabella con due colonne uguali, e un determinante così vale sempre zero (lezione L10).

> [!DIM] della Proposizione 22.15 (la dimostrazione delle dispense, con i passaggi)
> 1. Per fare il prodotto scalare con $v$ si moltiplicano i tre numeri di $v \times w$ per $v_1$, $v_2$, $v_3$ e si somma. I tre numeri di $v \times w$ sono i determinanti della regola mnemonica, con i segni più, meno, più:
>    $$\begin{aligned} \langle v \times w, v\rangle &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}v_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix}v_2 \\ &\quad + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix}v_3. \end{aligned}$$
> 2. Questa espressione è uno sviluppo di Laplace lungo l'ultima colonna. È il determinante della tabella della regola mnemonica, con $v_1$, $v_2$, $v_3$ al posto di $e_1$, $e_2$, $e_3$:
>    $$\langle v \times w, v\rangle = \det\begin{pmatrix} v_1 & w_1 & v_1 \\ v_2 & w_2 & v_2 \\ v_3 & w_3 & v_3 \end{pmatrix}.$$
> 3. Questa matrice ha due colonne uguali: la prima e la terza. Un determinante con due colonne uguali vale zero. Quindi $\langle v \times w, v\rangle = 0$.
> 4. Per $w$ si rifà lo stesso conto, con $w_1$, $w_2$, $w_3$ nella terza colonna. Questa volta sono uguali la seconda e la terza colonna, e il determinante vale di nuovo zero. Quindi $\langle v \times w, w\rangle = 0$.

### È zero quando i due vettori sono sulla stessa retta

Proviamo la ricetta con due vettori che stanno sulla stessa retta: $(1, 2, 3)$ e il suo doppio $(2, 4, 6)$.

| Riga coperta | Conto | Viene |
|---|---|---|
| la prima | $2 \cdot 6 - 4 \cdot 3 = 12 - 12$ | $0$ |
| la seconda | $1 \cdot 6 - 2 \cdot 3 = 6 - 6$, poi si cambia il segno | $0$ |
| la terza | $1 \cdot 4 - 2 \cdot 2 = 4 - 4$ | $0$ |

Viene il vettore fatto di soli zeri. Ha senso: due vettori sulla stessa retta non riempiono un piano, quindi non c'è una sola direzione perpendicolare da scegliere.

Ricorda dalla lezione L07. Due vettori sono **dipendenti** quando uno è un multiplo dell'altro, cioè quando stanno sulla stessa retta per l'origine. Se non è così sono **indipendenti**.

> [!PROP] 22.16
> Il vettore $v \times w$ è nullo $\iff$ $v$ e $w$ sono dipendenti.

**Come si legge.** «Nullo» vuol dire «fatto di soli zeri». La doppia freccia $\iff$ si legge «esattamente quando». La frase vale nei due versi. Se i due vettori sono dipendenti, il prodotto vettoriale è zero. E se il prodotto vettoriale è zero, i due vettori sono dipendenti.

In pratica è un test veloce: per sapere se due vettori dello spazio sono paralleli, calcola il loro prodotto vettoriale e guarda se viene zero. Nelle domande d'esame sulla distanza tra due rette si controlla così che le due direzioni non siano parallele.

> [!DIM] della Proposizione 22.16 (la dimostrazione delle dispense, con i passaggi)
> Le dispense scrivono una catena di tre «esattamente quando». Usano i minori $d_1$, $d_2$, $d_3$ della tabella $A$ che ha i due vettori in colonna.
>
> 1. $v \times w$ è nullo esattamente quando $d_1 = d_2 = d_3 = 0$. È la formula $v \times w = (d_1, -d_2, d_3)$.
> 2. $d_1 = d_2 = d_3 = 0$ esattamente quando il rango di $A$ è al massimo 1. Il **rango**, che si scrive $\rk A$, è il numero di colonne indipendenti (lezione L08). Le dispense non scrivono il motivo, che è questo. Se il rango è al massimo 1, le due colonne sono una multiplo dell'altra, oppure una è fatta di zeri. Lo stesso vale dentro ogni minore, quindi ogni determinante $d_i$ è zero. Se invece il rango è 2, anche tra le righe ce ne sono due indipendenti (Proposizione 8.6). Il minore fatto con quelle due righe ha determinante diverso da zero.
> 3. Il rango di $A$ è al massimo 1 esattamente quando $v$ e $w$ sono dipendenti. Infatti le colonne di $A$ sono proprio $v$ e $w$.

### Con i due vettori forma una base

Torna al tavolo. «Destra», «avanti» e «in alto» sono tre direzioni con cui si raggiunge ogni punto dello spazio. Succede con ogni coppia di vettori indipendenti: insieme al loro prodotto vettoriale formano una base dello spazio.

Ricorda dalla lezione L07: una **base** dello spazio è fatta di tre vettori indipendenti. Vuol dire che nessuno dei tre si ottiene mescolando gli altri due.

> [!COROLLARIO] 22.17
> Se $v$ e $w$ sono indipendenti, la terna $v, w, v \times w$ è una base di $\R^3$.

**Come si legge.** Una «terna» è un gruppo di tre cose. La frase dice: se i due vettori non sono uno multiplo dell'altro, allora loro due e il loro prodotto vettoriale formano una base dello spazio.

Il perché a parole. I primi due vettori riempiono un piano. Il terzo è perpendicolare a quel piano e non è zero, quindi esce dal piano. Per questo non si può ottenere mescolando i primi due.

> [!DIM] del Corollario 22.17 (le dispense non la riportano)
> Tre vettori dello spazio formano una base quando sono indipendenti. Vuol dire: l'unica ricetta che dà il vettore zero è quella con tutte le quantità uguali a zero.
>
> 1. Supponiamo che una ricetta dia zero: $a\,v + b\,w + c\,(v \times w) = 0$, con tre numeri $a$, $b$, $c$.
> 2. Facciamo il prodotto scalare di tutti e due i lati con $v \times w$. Per la Proposizione 22.15 i pezzi con $v$ e con $w$ danno zero. Resta $c\,\|v \times w\|^2 = 0$.
> 3. Per la Proposizione 22.16 il vettore $v \times w$ non è nullo, quindi la sua lunghezza non è zero. Allora $c = 0$.
> 4. La ricetta diventa $a\,v + b\,w = 0$. I vettori $v$ e $w$ sono indipendenti, quindi $a = 0$ e $b = 0$.
> 5. Tutte e tre le quantità sono zero. I tre vettori sono indipendenti, quindi formano una base.

### Da che parte punta: la mano destra

Il prodotto vettoriale è perpendicolare ai due vettori. Ma una retta perpendicolare a un piano si può percorrere in due versi: in su oppure in giù. Quale dei due sceglie il prodotto vettoriale?

Lo dice la **regola della mano destra**. Apri la mano destra con il palmo verso l'alto e tieni pollice, indice e medio come tre assi.

1. Punta il pollice lungo il primo vettore.
2. Punta l'indice lungo il secondo vettore.
3. Alza il medio, perpendicolare agli altri due: indica il verso del prodotto vettoriale.

Con il tavolo: il pollice va a destra, l'indice in avanti, e il medio punta in alto.

Se scambi i due vettori, il medio punta dalla parte opposta. Per questo, scambiando l'ordine, il risultato cambia segno.

> [!OLTRE] Altre proprietà utili (tornano nella lezione L23)
> Nella tabella $\lambda$ («lambda») è un numero e $v'$ è un altro vettore dello spazio.
>
> | Proprietà | Con i simboli | A parole |
> |---|---|---|
> | anticommutativo | $w \times v = -(v \times w)$ | scambiando i due vettori il risultato cambia segno |
> | un vettore con sé stesso | $v \times v = 0$ | è una conseguenza della riga sopra |
> | bilineare | $(v + v') \times w = v \times w + v' \times w$ e $(\lambda v) \times w = \lambda\,(v \times w)$ | rispetta somme e multipli; vale anche per il secondo vettore |
> | non associativo | $(e_1 \times e_2) \times e_2 = -e_1$, mentre $e_1 \times (e_2 \times e_2) = 0$ | le parentesi non si possono spostare |
> | lunghezza | $\lVert v \times w \rVert$ è un'area | è l'area del parallelogramma che ha per lati i due vettori |
>
> **Dà l'equazione di un piano.** Prendi un piano che passa per l'origine ed è fatto da tutte le ricette di due vettori indipendenti. I suoi punti sono quelli perpendicolari al prodotto vettoriale dei due vettori. Quindi i tre numeri del prodotto vettoriale sono i coefficienti dell'equazione del piano (Martelli, Esempio 9.1.10). Un esempio:
> $$(1, 0, 2) \times (0, 1, 1) = (-2, -1, 1)$$
> Il piano $\Span((1, 0, 2), (0, 1, 1))$ ha equazione $-2x - y + z = 0$.

Prova con lo strumento qui sotto. I due vettori di partenza lì si chiamano $u$ e $v$.

1. Trascina il disegno per girarlo. Il prodotto vettoriale esce dritto dal parallelogramma che ha per lati i due vettori.
2. Leggi le righe sotto il disegno: c'è il conto dei tre numeri, e ci sono i due prodotti scalari di controllo, che valgono zero.
3. Scambia i due vettori: nella casella di $u$ scrivi `1 2 0`, in quella di $v$ scrivi `2 0 0`. Il prodotto vettoriale ora punta dalla parte opposta.
4. Rimetti `2 0 0` nella casella di $u$ e scrivi `4 0 0` in quella di $v$. I due vettori sono paralleli e il prodotto vettoriale diventa zero, come dice la Proposizione 22.16.

```widget spazio
titolo: Il prodotto vettoriale nello spazio
modo: vettoriale
u: 2 0 0
v: 1 2 0
```

> [!OLTRE] Dove trovarlo nel libro
> Martelli: §4.4.8 «Rotazioni nel piano» e §4.4.9 «Riflessioni ortogonali nel piano» (pp. 143–144), §4.4.11 sulle rotazioni intorno all'asse $z$ (p. 145); §7.5 «Isometrie» (pp. 227–229), con il Lemma 7.5.5 e la Proposizione 7.5.8; §8.2 «Isometrie» (pp. 253–261): definizioni equivalenti, matrici ortogonali, riflessioni, isometrie del piano, rotazioni e antirotazioni, isometrie dello spazio; §9.1 «Prodotto vettoriale» (pp. 267–272).

::: prova Senza fare conti: quanto fa $(1, 2, 3) \times (3, 6, 9)$?
$(3, 6, 9)$ è il triplo di $(1, 2, 3)$, quindi i due vettori sono dipendenti. Per la Proposizione 22.16 il prodotto vettoriale è il vettore $(0, 0, 0)$.
:::

::: prova Sai che $e_1 \times e_2 = e_3$. Quanto fa $e_2 \times e_1$?
Scambiando i due vettori il risultato cambia segno: viene $-e_3$, cioè $(0, 0, -1)$.
:::

::: prova I vettori $(1, 1, 0)$, $(0, 1, 1)$ e $(1, -1, 1)$ formano una base dello spazio?
Sì. I primi due non sono uno multiplo dell'altro. Il terzo è il loro prodotto vettoriale: lo hai calcolato nel «Prova tu» della sezione precedente. Per il Corollario 22.17 i tre vettori formano una base.
:::

> [!RICORDA]
> - Il prodotto vettoriale è sempre perpendicolare ai due vettori di partenza.
> - È il vettore di soli zeri esattamente quando i due vettori sono uno multiplo dell'altro.
> - Se i due vettori sono indipendenti, insieme al loro prodotto vettoriale formano una base dello spazio.
> - Scambiando i due vettori il risultato cambia segno. Il verso si trova con la mano destra.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\R^2$, $\R^3$, $\R^n$ | «erre due», «erre tre», «erre enne» | le liste di 2, di 3, di $n$ numeri reali: il piano, lo spazio, il caso con $n$ numeri | $(3, 2)$ sta in $\R^2$ |
| $\in$ | «appartiene a» | sta dentro l'insieme | $v \in \R^3$ |
| $e_1$, $e_2$, $e_3$ | «e uno», «e due», «e tre» | i vettori della base canonica: un passo lungo ogni asse | nel piano $e_2 = (0, 1)$ |
| $\langle v, w\rangle$ | «prodotto scalare di $v$ e $w$» | il numero che viene moltiplicando posto per posto e sommando | $\langle (1, 2), (3, -1)\rangle = 1$ |
| $\lVert v \rVert$ | «norma di $v$» | la lunghezza del vettore | $\lVert (3, 4) \rVert = 5$ |
| $d(v, w)$ | «distanza tra $v$ e $w$» | la lunghezza della differenza dei due vettori | $d((3, 4), (0, 0)) = 5$ |
| $\vartheta$, $\alpha$, $\beta$, $\varphi$ | «theta», «alfa», «beta», «fi» | lettere greche usate per gli angoli | $\vartheta = \frac\pi2$ |
| $\varrho$ | «ro» | lettera greca usata per una distanza dall'origine | |
| $\lambda$, $\mu$ | «lambda», «mi» | lettere greche usate per dei numeri | |
| $\pi$ | «pi greco» | negli angoli vuol dire mezzo giro | $2\pi$ è un giro intero |
| $\cos\vartheta$, $\sin\vartheta$ | «coseno di theta», «seno di theta» | le due coordinate del punto del cerchio di raggio 1 all'angolo $\vartheta$ | $\cos\frac\pi2 = 0$, $\sin\frac\pi2 = 1$ |
| $\cos^2\vartheta$ | «coseno al quadrato di theta» | il coseno moltiplicato per sé stesso | $\cos^2\vartheta + \sin^2\vartheta = 1$ |
| $L_A$ | «elle con $A$» | la macchina «moltiplica per la matrice $A$» | |
| $T : V \to W$ | «ti, da $V$ a $W$» | una macchina che prende vettori di $V$ e restituisce vettori di $W$ | $L_A : \R^2 \to \R^2$ |
| $\mapsto$ | «va in» | dice dove finisce un vettore | $(1, 2) \mapsto (-2, 1)$ |
| $\mathrm{Rot}_\vartheta$ | «rot di theta» | la matrice della rotazione di angolo $\vartheta$ | $\mathrm{Rot}_{\pi/2} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ |
| $\mathrm{Rif}_\vartheta$ | «rif di theta» | la matrice della riflessione rispetto alla retta di angolo $\frac\vartheta2$ | $\mathrm{Rif}_{\pi/2} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ |
| $\det A$ | «determinante di $A$» | per due righe e due colonne: diagonale meno l'altra diagonale | $\det\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} = 6$ |
| $\pm 1$ | «più o meno uno» | il numero $1$ oppure il numero $-1$ | $\det A = \pm 1$ |
| ${}^tA$ | «trasposta di $A$» | la stessa tabella con le righe scambiate con le colonne | |
| $I_n$ | «i con enne» | la matrice identità: 1 sulla diagonale, 0 altrove | $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| $A^{-1}$ | «$A$ alla meno uno», «l'inversa di $A$» | la matrice che disfa quello che fa $A$ | per una matrice ortogonale è ${}^tA$ |
| $A^i$ | «la colonna $i$ di $A$» | nelle dispense, la colonna numero $i$: non è una potenza | $A^1$ è la prima colonna |
| $M(n)$, $M(2, \R)$ | «emme di enne», «emme di due, erre» | le matrici quadrate con $n$ righe e $n$ colonne; quelle con due righe e due colonne e numeri reali | |
| $O(2)$ | «o di due» | l'insieme delle matrici ortogonali con due righe e due colonne | contiene $\mathrm{Rot}_\vartheta$ e $\mathrm{Rif}_\vartheta$ |
| $\Span(v)$ | «span di $v$» | tutti i multipli del vettore: una retta per l'origine | $\Span((2, 1))$ |
| $\mathcal B = \{v_1, v_2\}$ | «la base B, fatta da vu uno e vu due» | un gruppo di vettori scelto come base | |
| $r^\perp$ | «erre perpendicolare» | tutti i vettori perpendicolari alla retta $r$ | se $r$ è l'asse verticale, è il pavimento |
| $\operatorname{tr}A$ | «traccia di $A$» | la somma dei numeri sulla diagonale | |
| $\rk A$ | «rango di $A$» | il numero di colonne indipendenti | |
| $v \times w$ | «$v$ vettoriale $w$» | il prodotto vettoriale: un vettore perpendicolare a $v$ e a $w$ | $(1, 2, 3) \times (4, 5, 6) = (-3, 6, -3)$ |
| $v_1$, $v_2$, $v_3$ | «vu uno», «vu due», «vu tre» | il primo, il secondo e il terzo numero del vettore $v$ | per $v = (1, 2, 3)$: $v_2 = 2$ |
| $d_1$, $d_2$, $d_3$ | «di uno», «di due», «di tre» | i conti fatti coprendo la riga 1, la riga 2, la riga 3 | $v \times w = (d_1, -d_2, d_3)$ |
| $[0, 2\pi)$ | «da zero a due pi greco, escluso» | gli angoli da 0 (compreso) a un giro intero (escluso) | |
| $\forall$ | «per ogni» | vale qualunque elemento tu scelga | $\forall\, v \in V$ |
| $\iff$ | «esattamente quando», «se e solo se» | le due frasi sono vere insieme o false insieme | |
| $\sum$ | «somma» | la somma di tanti pezzi dello stesso tipo | |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla (5 risposte, una sola giusta) e 2 problemi da 11 punti. I problemi vengono corretti solo a chi fa almeno 6 punti nel quiz. La prova dura 2 ore, senza calcolatrice, e si possono portare solo 4 facciate di appunti scritti a mano. Gli appelli del 2026/27 sono il 22/01/2027 e il 05/02/2027, alle 14:00. I dettagli sono nella lezione L01.

**Che cosa di questa lezione compare negli appelli 2023–2026**

1. **Matrici ortogonali, nel quiz.** L'appello del 10/07/2024 (domanda 2) chiedeva la dimensione dell'insieme delle matrici ortogonali con due righe e due colonne. La risposta è che non ha una dimensione, perché non è un sottospazio. La domanda è letta e risolta qui sotto. Le matrici ortogonali tornano con il teorema spettrale (lezioni L25 e L26), dove una matrice simmetrica si diagonalizza con una matrice ortogonale.
2. **Prodotto vettoriale, nei problemi.** Nei problemi su rette e piani dello spazio il prodotto vettoriale dà subito la direzione della retta in cui si tagliano due piani: appelli del 24/01/2024, del 10/07/2024, del 06/09/2024 e del 15/01/2026 (problema 12). Nelle domande sulla distanza tra due rette (08/02/2024, 06/09/2024, 05/02/2026, 03/06/2026, 07/09/2026) serve un vettore perpendicolare alle direzioni delle due rette: è di nuovo un prodotto vettoriale. Le formule su rette e piani sono nelle lezioni L23 e L24.
3. **Isometrie dello spazio.** Negli appelli dal 2023 al 2026 non ci sono domande su rotazioni e antirotazioni dello spazio.

**I metodi, passo per passo**

> [!METODO] Dire se una matrice è ortogonale
> 1. Scrivi le colonne della matrice come vettori.
> 2. Calcola la lunghezza di ogni colonna: deve fare 1.
> 3. Calcola il prodotto scalare di ogni coppia di colonne diverse: deve fare 0.
> 4. Se tutti i controlli riescono, la matrice è ortogonale. Allora la sua inversa è la trasposta.

> [!METODO] Calcolare un prodotto vettoriale
> 1. Scrivi i due vettori in colonna, uno accanto all'altro.
> 2. Copri la prima riga. Con i quattro numeri rimasti fai «diagonale meno l'altra diagonale»: è il primo numero.
> 3. Copri la seconda riga, fai lo stesso conto e **cambia il segno**: è il secondo numero.
> 4. Copri la terza riga e fai lo stesso conto: è il terzo numero.
> 5. Controlla: il risultato deve dare prodotto scalare zero con tutti e due i vettori.

> [!METODO] Trovare la retta in cui si tagliano due piani
> 1. Leggi i due vettori perpendicolari ai piani: sono i numeri davanti a $x$, $y$ e $z$ nelle due equazioni.
> 2. Calcola il loro prodotto vettoriale: è la direzione della retta.
> 3. Trova un punto della retta. Metti $z = 0$ nelle due equazioni e risolvi il sistema nelle due incognite rimaste. Se il sistema non ha soluzione, riprova mettendo a zero un'altra incognita.
> 4. Scrivi la retta: il punto trovato, più tutti i multipli della direzione.

**Una domanda vera, letta insieme**

> [!ESEMPIO] Appello del 10/07/2024, domanda 2
> **Il testo.** «Sia $V = M(2, \R)$ lo spazio delle matrici reali $2 \times 2$ e $O(2)$ il sottoinsieme delle matrici ortogonali. La dimensione di $O(2)$ è: (a) $O(2)$ non ha una dimensione perché non è un sottospazio vettoriale; (b) due; (c) quattro; (d) tre; (e) uno.»
>
> **In pratica chiede:** le matrici ortogonali con due righe e due colonne formano un sottospazio? Se sì, quanti vettori ha una sua base?
>
> **La soluzione.**
>
> 1. La parola «dimensione» ha senso solo per uno spazio vettoriale o per un sottospazio: è il numero di vettori di una base (lezione L07). Quindi prima di contare bisogna chiedersi se l'insieme è un sottospazio.
> 2. Un sottospazio contiene sempre lo zero (lezione L06). Nello spazio delle matrici lo zero è la matrice fatta di soli zeri.
> 3. La matrice di soli zeri non è ortogonale. La sua trasposta per lei dà ancora la matrice di soli zeri, e non l'identità. Detto con le colonne: sono lunghe 0, non 1.
> 4. Quindi l'insieme non contiene lo zero: non è un sottospazio. La risposta giusta è la (a).
>
> **Un secondo motivo.** La matrice identità è ortogonale. Ma $I_2 + I_2 = 2I_2$ ha le colonne lunghe 2, quindi non lo è. Sommando due matrici ortogonali si esce dall'insieme.
>
> **La risposta che tenta.** La (e), «uno», perché ogni rotazione dipende da un solo numero, l'angolo. Ma «dipende da un numero» non vuol dire «sottospazio di dimensione 1». Le rotazioni non formano una retta che passa per lo zero.

**Un problema vero, risolto con il prodotto vettoriale**

> [!ESEMPIO] Appello del 24/01/2024, problema 12, punto (1)
> **Il testo.** «Siano $\pi_1 = \{2x + y - z = 1\}$ e $\pi_2 = \{x + 2y + z = 2\}$. Calcolare la retta $r = \pi_1 \cap \pi_2$ nella forma $r = P + \Span(v)$.»
>
> **In pratica chiede:** ci sono due piani dello spazio, ognuno descritto da un'equazione. Trova la retta fatta dai punti che stanno su tutti e due. Scrivila come «un punto di partenza $P$, più tutti i multipli di una direzione $v$». Qui $\pi_1$ e $\pi_2$ sono i nomi dei due piani: non c'entra il numero pi greco. Il simbolo $\cap$ si legge «intersecato» e indica i punti in comune.
>
> **La soluzione.**
>
> 1. Leggo i vettori perpendicolari ai due piani dai numeri davanti a $x$, $y$ e $z$: sono $n_1 = (2, 1, -1)$ e $n_2 = (1, 2, 1)$. Il perché è nella lezione L23.
> 2. La retta sta in tutti e due i piani. Quindi la sua direzione è perpendicolare a tutti e due questi vettori: è il loro prodotto vettoriale. Metto i due vettori in colonna. Le righe della tabella sono $(2, 1)$, $(1, 2)$ e $(-1, 1)$.
>    - Copro la prima riga: $1 \cdot 1 - 2 \cdot (-1) = 1 + 2 = 3$.
>    - Copro la seconda riga: $2 \cdot 1 - 1 \cdot (-1) = 2 + 1 = 3$. Cambio il segno: $-3$.
>    - Copro la terza riga: $2 \cdot 2 - 1 \cdot 1 = 3$.
>
>    Quindi $n_1 \times n_2 = (3, -3, 3)$.
> 3. Una direzione si può accorciare senza cambiare la retta. Divido per 3 e prendo $v = (1, -1, 1)$.
> 4. Cerco un punto della retta. Metto $z = 0$ e restano due equazioni: $2x + y = 1$ e $x + 2y = 2$. Dalla prima ricavo $y = 1 - 2x$. Sostituisco nella seconda: $x + 2 - 4x = 2$, cioè $-3x = 0$, cioè $x = 0$. Allora $y = 1$. Il punto è $P = (0, 1, 0)$.
> 5. La retta è
>    $$r = (0, 1, 0) + \Span((1, -1, 1)).$$
>
> **Controlli.** Il punto $P$ sta nei due piani: $0 + 1 - 0 = 1$ e $0 + 2 + 0 = 2$. La direzione $v$ rispetta le due equazioni con lo zero a destra: $2 - 1 - 1 = 0$ e $1 - 2 + 1 = 0$.

**Errori da evitare**

- Leggere lo specchio di una riflessione all'angolo scritto nella matrice. Lo specchio sta alla **metà** di quell'angolo.
- Credere che bastino colonne perpendicolari, oppure il determinante uguale a 1 o a $-1$, perché una matrice sia ortogonale.
- Sbagliare il segno del secondo numero del prodotto vettoriale. Dopo il conto fatto coprendo la seconda riga si cambia il segno.
- Dimenticare che scambiando i due vettori il prodotto vettoriale cambia segno. L'ordine conta per il verso, non per la direzione.
- Non controllare il risultato. Il prodotto vettoriale deve dare prodotto scalare zero con tutti e due i vettori.

> [!ESAME] Sul foglio da 4 facciate
> Le due matrici del piano. La rotazione ha determinante 1. La riflessione ha determinante $-1$, e il suo specchio sta all'angolo $\frac\vartheta2$.
> $$\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix} \qquad \mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}$$
> La matrice ortogonale: colonne lunghe 1 e perpendicolari. L'inversa è la trasposta, il determinante è 1 oppure $-1$.
> $${}^tA\,A = I \qquad A^{-1} = {}^tA$$
> Le isometrie: nel piano rotazioni e riflessioni, nello spazio rotazioni e antirotazioni. Per l'angolo nello spazio:
> $$\cos\vartheta = \frac{\operatorname{tr}A - \det A}{2}$$
> Il prodotto vettoriale: è perpendicolare ai due vettori, ed è zero esattamente quando sono uno multiplo dell'altro.
> $$v \times w = (v_2w_3 - v_3w_2,\ \ v_3w_1 - v_1w_3,\ \ v_1w_2 - v_2w_1)$$
> In più: la tabella del coseno e del seno degli angoli più usati.

## Quiz

```quiz
D: Quale di queste matrici è ortogonale?
+ $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & \frac12 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 \\ \frac12 & 0 \end{pmatrix}$
= La domanda chiede quale matrice ha le colonne lunghe 1 e perpendicolari tra loro. Nella prima le colonne sono $\frac15(3, 4)$ e $\frac15(-4, 3)$. Il quadrato della lunghezza è $\frac{9 + 16}{25} = 1$ per tutte e due, e il prodotto scalare è $\frac{-12 + 12}{25} = 0$. Le altre falliscono sulla lunghezza. La seconda ha le colonne perpendicolari ma lunghe $\sqrt2$: è la risposta che tenta di più. La terza e l'ultima hanno determinante $1$ e $-1$, ma colonne lunghe $2$ e $\frac12$. La quarta, un taglio, ha la seconda colonna lunga $\sqrt2$. È il controllo che serve per domande come la 2 dell'appello del 10/07/2024, sulle matrici ortogonali.

D: Qual è l'immagine di $v = (3, 1)$ tramite la rotazione antioraria di angolo $\frac\pi2$?
+ $(-1, 3)$
- $(1, -3)$
- $(-3, 1)$
- $(1, 3)$
- $(-3, -1)$
= L'angolo $\frac\pi2$ è un quarto di giro. Il quarto di giro in senso antiorario scambia i due numeri e cambia segno al primo: $(x, y)$ diventa $(-y, x)$. Quindi $(3, 1)$ diventa $(-1, 3)$. Controllo: il prodotto scalare tra prima e dopo è $3 \cdot (-1) + 1 \cdot 3 = 0$, e le due lunghezze sono uguali a $\sqrt{10}$. La risposta $(1, -3)$ è la trappola: è il quarto di giro in senso **orario**.

D: La matrice $\mathrm{Rif}_{\pi/2} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ rappresenta la riflessione rispetto a:
+ la retta $y = x$
- l'asse $y$
- l'asse $x$
- la retta $y = -x$
- l'origine
= Lo specchio di una riflessione sta alla metà dell'angolo scritto nella matrice. Qui la metà di $\frac\pi2$ è $\frac\pi4$, cioè 45 gradi: è la bisettrice $y = x$. Controllo: la matrice scambia i due numeri. Quindi $(1, 1)$, che sta sulla bisettrice, resta fermo, e $(1, -1)$ diventa $(-1, 1)$, il suo opposto. L'asse $y$ è l'errore di chi legge l'angolo intero invece della metà.

D: Sia $O(2) \subset M(2, \R)$ l'insieme delle matrici ortogonali $2 \times 2$. Quale affermazione è vera?
+ $O(2)$ non è un sottospazio vettoriale di $M(2, \R)$.
- $O(2)$ è un sottospazio di dimensione 4.
- $O(2)$ contiene la matrice nulla.
- La somma di due matrici ortogonali è sempre ortogonale.
- $O(2)$ contiene solo matrici di rotazione.
= Il simbolo $\subset$ si legge «è contenuto in». Un sottospazio deve contenere lo zero, e sommando due suoi elementi non si deve uscire. La matrice nulla, cioè quella di soli zeri, non è ortogonale: le sue colonne sono lunghe 0. E $I_2 + I_2 = 2I_2$ ha le colonne lunghe 2, quindi la somma di due matrici ortogonali può non essere ortogonale. L'insieme non è un sottospazio. Contiene anche le riflessioni, non solo le rotazioni (Proposizione 22.11). È simile alla domanda 2 dell'appello del 10/07/2024.

D: Se $A \in M(3, \R)$ è una matrice ortogonale, allora sicuramente:
+ $\det A = \pm1$
- $\det A = 1$
- $A$ è simmetrica
- $A^{-1} = A$
- $\operatorname{tr}A = 3$
= La scrittura $\pm1$ si legge «più o meno uno»: vuol dire 1 oppure $-1$. Dalla condizione ${}^tA\,A = I$ e dal Teorema di Binet viene $(\det A)^2 = 1$, quindi il determinante è 1 oppure $-1$. Può valere $-1$: succede per lo specchio che cambia segno solo al terzo numero. Per questo «$\det A = 1$» è sbagliata. Le altre tre risposte falliscono con il quarto di giro intorno all'asse $z$. È ortogonale, ma non è simmetrica, non è uguale alla sua inversa e ha traccia 1. Quello che vale sempre è $A^{-1} = {}^tA$: l'inversa è la trasposta, non la matrice stessa.

D: Quanto vale il prodotto vettoriale $(1, 2, 0) \times (0, 1, 3)$?
+ $(6, -3, 1)$
- $(6, 3, 1)$
- $(-6, 3, -1)$
- $(0, 2, 0)$
- $(6, -3, -1)$
= Metto i due vettori in colonna: le righe della tabella sono $(1, 0)$, $(2, 1)$ e $(0, 3)$. Coprendo la prima riga viene $2 \cdot 3 - 1 \cdot 0 = 6$. Coprendo la seconda viene $1 \cdot 3 - 0 \cdot 0 = 3$, e cambiando segno $-3$. Coprendo la terza viene $1 \cdot 1 - 0 \cdot 2 = 1$. Il risultato è $(6, -3, 1)$. Controllo: con $(1, 2, 0)$ viene $6 - 6 + 0 = 0$, con $(0, 1, 3)$ viene $0 - 3 + 3 = 0$. La risposta $(6, 3, 1)$ è di chi dimentica di cambiare segno al secondo numero. La risposta $(-6, 3, -1)$ è il prodotto con i due vettori scambiati. La risposta $(0, 2, 0)$ è il prodotto fatto posto per posto, che non è il prodotto vettoriale. È il conto che serve per la direzione della retta in cui si tagliano due piani, come nell'appello del 15/01/2026 (problema 12, punto 2).

D: Per quale di queste coppie di vettori il prodotto vettoriale è il vettore nullo?
+ $(1, -2, 3)$ e $(-2, 4, -6)$
- $(1, 0, 0)$ e $(0, 1, 0)$
- $(1, 1, 0)$ e $(1, -1, 0)$
- $(1, 2, 3)$ e $(3, 2, 1)$
- $(0, 0, 1)$ e $(1, 1, 1)$
= Il prodotto vettoriale è il vettore di soli zeri esattamente quando i due vettori sono uno multiplo dell'altro (Proposizione 22.16). Succede solo nella prima coppia: $(-2, 4, -6)$ è $-2$ volte $(1, -2, 3)$. Nelle altre coppie nessun vettore è multiplo dell'altro. I loro prodotti vettoriali sono $(0, 0, 1)$, poi $(0, 0, -2)$, poi $(-4, 8, -4)$, poi $(-1, 1, 0)$: nessuno è zero. Nelle domande sulla distanza tra due rette, come la domanda 7 dell'appello del 07/09/2026, si controlla così che le due direzioni non siano parallele.

D: Quale di queste trasformazioni lineari del piano **non** è un'isometria (con il prodotto euclideo)?
+ $(x, y) \mapsto (x + y, y)$
- $(x, y) \mapsto (y, x)$
- $(x, y) \mapsto (-x, -y)$
- $(x, y) \mapsto \left(\frac{x - \sqrt3 y}{2}, \frac{\sqrt3 x + y}{2}\right)$
- $(x, y) \mapsto (x, -y)$
= Per mostrare che una macchina non è un'isometria basta un vettore che cambia lunghezza. La macchina $(x, y) \mapsto (x + y, y)$ è un taglio: manda $e_2 = (0, 1)$ in $(1, 1)$, che è lungo $\sqrt2$ e non 1. Le altre quattro hanno una matrice ortogonale. Sono lo specchio sulla bisettrice, il mezzo giro, la rotazione di $\frac\pi3$ e lo specchio sull'asse $x$.

D: Un'isometria lineare di $\R^3$ con determinante $-1$ è:
+ un'antirotazione
- una rotazione
- una traslazione
- una proiezione ortogonale su un piano
- una rotazione di angolo $\pi$ intorno a un asse
= Per il Teorema 22.13 ogni isometria dello spazio è una rotazione, con determinante 1, oppure un'antirotazione, con determinante $-1$. Quindi con determinante $-1$ è un'antirotazione. Una rotazione ha determinante 1 con qualunque angolo: per questo sono sbagliate le due risposte con la parola «rotazione». Le traslazioni non sono lineari. Le proiezioni schiacciano lo spazio su un piano e non si possono disfare, quindi non sono isometrie. Due antirotazioni particolari sono la matrice $-I_3$, con angolo $\pi$, e gli specchi rispetto a un piano, con angolo 0.

D: Quanto vale la norma di $(1, 0, 0) \times (0, 3, 4)$?
N: 5
= La tabella con i due vettori in colonna ha le righe $(1, 0)$, $(0, 3)$ e $(0, 4)$. Coprendo la prima riga viene $0 \cdot 4 - 3 \cdot 0 = 0$. Coprendo la seconda viene $1 \cdot 4 - 0 \cdot 0 = 4$, e cambiando segno $-4$. Coprendo la terza viene $1 \cdot 3 - 0 \cdot 0 = 3$. Il prodotto vettoriale è $(0, -4, 3)$. La sua norma, cioè la sua lunghezza, è $\sqrt{0 + 16 + 9} = \sqrt{25} = 5$. Nella lezione L23 vedrai che questo numero è l'area del parallelogramma che ha per lati i due vettori, come nell'esercizio 7 del foglio 4 del tutorato.
```

## Esercizi

Le dispense non hanno esercizi per questa lezione: questi sono tutti costruiti per gli appunti. I primi quattro sono di riscaldamento. Gli ultimi due sono modellati sugli appelli e sul foglio 4 del tutorato.

::: esercizio base Un quarto di giro
Ruota di un quarto di giro in senso antiorario i vettori $(4, 1)$ e $(0, 3)$.
::: soluzione
La regola del quarto di giro in senso antiorario: scambia i due numeri, poi cambia segno al primo.

1. Per $(4, 1)$: scambio e ottengo $(1, 4)$. Cambio segno al primo: $(-1, 4)$.
2. Per $(0, 3)$: scambio e ottengo $(3, 0)$. Cambio segno al primo: $(-3, 0)$.

Controllo sul primo vettore: il prodotto scalare tra prima e dopo è $4 \cdot (-1) + 1 \cdot 4 = 0$. I due vettori sono perpendicolari, come dopo un quarto di giro.
:::

::: esercizio base Lo specchio sull'asse orizzontale
Rifletti rispetto all'asse $x$ i vettori $(2, 5)$ e $(-1, -3)$. Poi di' quale di questi due vettori resta fermo: $(4, 0)$ oppure $(0, 4)$.
::: soluzione
Lo specchio sull'asse $x$ lascia com'è il primo numero e cambia segno al secondo.

1. $(2, 5)$ diventa $(2, -5)$.
2. $(-1, -3)$ diventa $(-1, 3)$.
3. $(4, 0)$ diventa $(4, 0)$: resta fermo, perché sta sull'asse $x$, cioè sullo specchio.
4. $(0, 4)$ diventa $(0, -4)$: è perpendicolare allo specchio e va nel suo opposto.
:::

::: esercizio base Colonne lunghe 1 e perpendicolari
Di' se è ortogonale ciascuna di queste due matrici: $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.
::: soluzione
Una matrice è ortogonale quando le sue colonne sono lunghe 1 e perpendicolari tra loro.

**Prima matrice.** Le colonne sono $(0, 1)$ e $(-1, 0)$.

1. Lunghezza della prima: $\sqrt{0 + 1} = 1$.
2. Lunghezza della seconda: $\sqrt{1 + 0} = 1$.
3. Prodotto scalare: $0 \cdot (-1) + 1 \cdot 0 = 0$.

È ortogonale. È il quarto di giro.

**Seconda matrice.** Le colonne sono $(1, 0)$ e $(1, 1)$.

1. Lunghezza della prima: 1.
2. Lunghezza della seconda: $\sqrt{1 + 1} = \sqrt2$. Non è 1.

Non è ortogonale. Fallisce anche il terzo controllo: il prodotto scalare delle colonne è $1 \cdot 1 + 0 \cdot 1 = 1$, non 0.
:::

::: esercizio base Un prodotto vettoriale con tanti zeri
Calcola $(1, 0, 0) \times (0, 0, 1)$ e controlla che il risultato è perpendicolare ai due vettori.
::: soluzione
Metto i due vettori in colonna. Le righe della tabella sono $(1, 0)$, $(0, 0)$ e $(0, 1)$.

1. Copro la prima riga: $0 \cdot 1 - 0 \cdot 0 = 0$.
2. Copro la seconda riga: $1 \cdot 1 - 0 \cdot 0 = 1$. Cambio il segno: $-1$.
3. Copro la terza riga: $1 \cdot 0 - 0 \cdot 0 = 0$.

Il risultato è $(0, -1, 0)$.

Controllo: con $(1, 0, 0)$ viene $0 + 0 + 0 = 0$. Con $(0, 0, 1)$ viene $0 + 0 + 0 = 0$.

Con i nomi della base canonica: $e_1 \times e_3 = -e_2$. Torna con la regola dello scambio, perché $e_3 \times e_1 = e_2$.
:::

::: esercizio base Scrivere e usare le rotazioni
(a) Scrivi $\mathrm{Rot}_{\pi/6}$ e $\mathrm{Rot}_{2\pi/3}$. (b) Ruota $(2, 0)$ di $\frac\pi3$ e $(1, 2)$ di $\frac\pi2$. (c) Verifica che $\mathrm{Rot}_{\pi/6}$ conserva la norma di $(2, 0)$.
::: soluzione
**(a)** Servono il coseno e il seno dei due angoli.

1. Per $\frac\pi6$ la tabella dà coseno $\frac{\sqrt3}2$ e seno $\frac12$.
2. L'angolo $\frac{2\pi}3$ è un terzo di giro, cioè 120 gradi. Non è nella tabella, ma si ricava da $\frac\pi3$. Il punto del cerchio a 120 gradi è lo specchio, rispetto all'asse verticale, del punto a 60 gradi. Ha la stessa altezza e sta dalla parte opposta. Quindi il coseno è $-\frac12$ e il seno è $\frac{\sqrt3}2$.
3. Metto i numeri nei quattro posti: coseno e seno nella prima colonna, meno seno e coseno nella seconda.

$$\mathrm{Rot}_{\pi/6} = \begin{pmatrix} \frac{\sqrt3}2 & -\frac12 \\ \frac12 & \frac{\sqrt3}2 \end{pmatrix}, \qquad \mathrm{Rot}_{2\pi/3} = \begin{pmatrix} -\frac12 & -\frac{\sqrt3}2 \\ \frac{\sqrt3}2 & -\frac12 \end{pmatrix}.$$

**(b)** Il vettore $(2, 0)$ è 2 volte $e_1$. La sua immagine è 2 volte l'immagine di $e_1$, cioè 2 volte la prima colonna. Con l'angolo $\frac\pi3$ la prima colonna è $\left(\frac12, \frac{\sqrt3}2\right)$:

$$2 \cdot \left(\tfrac12, \tfrac{\sqrt3}2\right) = (1, \sqrt3).$$

Per $(1, 2)$ e il quarto di giro uso la regola: scambio i numeri e cambio segno al primo. Viene $(-2, 1)$.

**(c)** L'immagine di $(2, 0)$ è 2 volte la prima colonna di $\mathrm{Rot}_{\pi/6}$:

$$2 \cdot \left(\tfrac{\sqrt3}2, \tfrac12\right) = (\sqrt3, 1).$$

La sua norma è $\sqrt{3 + 1} = \sqrt4 = 2$. La norma di $(2, 0)$ è 2. Sono uguali.
:::

::: esercizio base La riflessione rispetto alla retta $y = -x$
Trova la matrice della riflessione rispetto alla retta $y = -x$ e verifica il risultato su due vettori.
::: soluzione
La retta $y = -x$ è fatta dai punti con i due numeri opposti, come $(1, -1)$. Scende in diagonale: forma con l'asse $x$ un angolo di 45 gradi contato in senso orario. Un angolo contato in senso orario si scrive con il segno meno: $-\frac\pi4$.

1. Lo specchio sta alla metà dell'angolo della matrice: $\frac\vartheta2 = -\frac\pi4$. Quindi $\vartheta = -\frac\pi2$, un quarto di giro in senso orario.
2. Il punto del cerchio che si raggiunge con un quarto di giro in senso orario è quello più in basso, $(0, -1)$. Quindi il coseno è $0$ e il seno è $-1$.
3. Metto i numeri nella matrice della Definizione 22.3:

$$\mathrm{Rif}_{-\pi/2} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}.$$

A parole: la matrice scambia i due numeri e cambia segno a tutti e due. Manda $(x, y)$ in $(-y, -x)$. Contando l'angolo in senso antiorario, cioè con $\vartheta = \frac{3\pi}2$, viene la stessa matrice.

Verifica su due vettori.

- $(1, -1)$ sta sulla retta. Va in $(1, -1)$: resta fermo.
- $(1, 1)$ è perpendicolare alla retta, perché $1 \cdot 1 + (-1) \cdot 1 = 0$. Va in $(-1, -1)$: il suo opposto.
:::

::: esercizio base Matrici ortogonali e inverse
Per ciascuna matrice di' se è ortogonale; se lo è, scrivi l'inversa senza fare conti:
$$A_1 = \frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}, \quad A_2 = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix},$$
$$A_3 = \frac13\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{pmatrix}, \quad A_4 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}.$$
::: soluzione
Per una matrice ortogonale l'inversa è la trasposta: basta scambiare le righe con le colonne.

**$A_1$.** Le colonne sono lunghe 1 e perpendicolari: i conti sono nella sezione sulle matrici ortogonali. È ortogonale. L'inversa è

$$A_1^{-1} = {}^tA_1 = \frac15\begin{pmatrix} 3 & 4 \\ -4 & 3 \end{pmatrix}.$$

**$A_2$.** Le colonne sono $(1, -1)$ e $(1, 1)$, lunghe $\sqrt2$. **Non** è ortogonale. La sua inversa esiste, ma non è la trasposta: è la metà della trasposta.

**$A_3$.** È ortogonale: i sei controlli sono nell'esempio «Ortogonale o no?». In più è simmetrica, cioè uguale alla sua trasposta. Quindi l'inversa è la matrice stessa:

$$A_3^{-1} = {}^tA_3 = A_3.$$

Applicarla due volte riporta ogni vettore al punto di partenza. Si comporta come uno specchio. Infatti è la riflessione rispetto al piano di equazione $-x + y + z = 0$. Lo si controlla con la formula della riflessione, usando il vettore $n = (-1, 1, 1)$ perpendicolare al piano:

$$f(e_1) = (1, 0, 0) - 2 \cdot \frac{-1}3 \cdot (-1, 1, 1) = (1, 0, 0) + \frac23\,(-1, 1, 1) = \left(\frac13, \frac23, \frac23\right).$$

È la prima colonna della matrice.

**$A_4$.** Le colonne sono $e_3$, poi $e_1$, poi $e_2$: i vettori della base canonica, in un altro ordine. Sono lunghi 1 e perpendicolari. È ortogonale. L'inversa è

$$A_4^{-1} = {}^tA_4 = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}.$$
:::

::: esercizio medio La riflessione rispetto alla retta di $(1, 2)$
Trova la matrice della riflessione del piano rispetto alla retta $r = \Span((1, 2))$ in due modi: con $\mathrm{Rif}_\vartheta$ e con il cambiamento di base.
::: soluzione
**Primo modo: con la matrice della Definizione 22.3.**

1. La lunghezza di $(1, 2)$ è $\sqrt{1 + 4} = \sqrt5$.
2. Divido il vettore per la sua lunghezza. Ottengo il punto della retta che sta sul cerchio di raggio 1. Le sue coordinate sono il coseno e il seno della metà dell'angolo: $\cos\frac\vartheta2 = \frac1{\sqrt5}$ e $\sin\frac\vartheta2 = \frac2{\sqrt5}$.
3. Passo all'angolo intero con le formule dell'angolo doppio. Il coseno del doppio è «coseno al quadrato meno seno al quadrato»:
   $$\cos\vartheta = \frac15 - \frac45 = -\frac35.$$
4. Il seno del doppio è «due volte seno per coseno»:
   $$\sin\vartheta = 2 \cdot \frac2{\sqrt5} \cdot \frac1{\sqrt5} = \frac45.$$
5. Metto i due numeri nella matrice:
   $$\mathrm{Rif}_\vartheta = \begin{pmatrix} -\frac35 & \frac45 \\ \frac45 & \frac35 \end{pmatrix}.$$

**Secondo modo: con il cambiamento di base.**

1. Scelgo la base comoda: $(1, 2)$ sta sullo specchio, e $(-2, 1)$ è perpendicolare, perché $1 \cdot (-2) + 2 \cdot 1 = 0$. In questa base la matrice dello specchio ha sulla diagonale $1$ e $-1$, e zeri altrove. La chiamo $D$.
2. La matrice con i due vettori nelle colonne è $M = \begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}$. Il suo determinante è $1 \cdot 1 - (-2) \cdot 2 = 5$.
3. L'inversa: scambio i numeri sulla diagonale, cambio segno agli altri due, divido per il determinante.
   $$M^{-1} = \frac15\begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix}$$
4. Primo prodotto. Moltiplicare a destra per $D$ cambia segno alla seconda colonna:
   $$M\,D = \begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}$$
5. Secondo prodotto, riga per colonna:
   $$\begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}\cdot\frac15\begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix} = \frac15\begin{pmatrix} 1 - 4 & 2 + 2 \\ 2 + 2 & 4 - 1 \end{pmatrix} = \frac15\begin{pmatrix} -3 & 4 \\ 4 & 3 \end{pmatrix}.$$

È la stessa matrice del primo modo.

**Controllo.** Il vettore $(1, 2)$ deve restare fermo: $\left(\frac{-3 + 8}5, \frac{4 + 6}5\right) = (1, 2)$. Il vettore $(-2, 1)$ deve andare nel suo opposto: $\left(\frac{6 + 4}5, \frac{-8 + 3}5\right) = (2, -1)$.
:::

::: esercizio medio Riconoscere rotazioni e riflessioni
Di' che isometria rappresentano $A = \frac15\begin{pmatrix} 4 & -3 \\ 3 & 4 \end{pmatrix}$ e $B = \frac15\begin{pmatrix} 4 & 3 \\ 3 & -4 \end{pmatrix}$: angolo per la rotazione, asse per la riflessione.
::: soluzione
Seguo il metodo «Riconoscere un movimento rigido del piano».

**Passo 1: sono ortogonali?** In tutte e due le matrici ogni colonna ha lunghezza al quadrato $\frac{16 + 9}{25} = 1$. Il prodotto scalare delle colonne è $\frac{-12 + 12}{25} = 0$ per $A$ e $\frac{12 - 12}{25} = 0$ per $B$. Sono ortogonali.

**Passo 2: la matrice $A$.**

1. Determinante: $\frac45 \cdot \frac45 - \left(-\frac35\right) \cdot \frac35 = \frac{16}{25} + \frac9{25} = 1$. È una **rotazione**.
2. Nella prima colonna leggo il coseno, $\frac45$, e il seno, $\frac35$.
3. Questi valori non sono nella tabella. L'angolo si scrive $\arccos\frac45$, che si legge «l'angolo che ha coseno quattro quinti». Vale circa 37 gradi.

**Passo 3: la matrice $B$.**

1. Determinante: $\frac45 \cdot \left(-\frac45\right) - \frac35 \cdot \frac35 = -\frac{16}{25} - \frac9{25} = -1$. È una **riflessione**.
2. Cerco lo specchio, cioè i vettori $(x, y)$ che restano fermi. La prima riga della matrice dà la condizione $\frac{4x + 3y}5 = x$.
3. Moltiplico per 5: $4x + 3y = 5x$. Tolgo $4x$ da tutti e due i lati: $3y = x$.
4. Scelgo $y = 1$ e ottengo $x = 3$. Lo specchio è la retta $\Span((3, 1))$. La seconda riga dà la stessa condizione.

**Controllo.** La matrice $B$ deve lasciare fermo $(3, 1)$: $\left(\frac{12 + 3}5, \frac{9 - 4}5\right) = (3, 1)$.
:::

::: esercizio medio Due riflessioni fanno una rotazione
(a) Calcola $\mathrm{Rif}_{\pi/2}\,\mathrm{Rif}_0$ e riconosci il risultato. (b) Dimostra che in generale $\mathrm{Rif}_\alpha\,\mathrm{Rif}_\beta = \mathrm{Rot}_{\alpha - \beta}$.
::: soluzione
**(a)** La prima matrice è lo specchio sulla bisettrice, la seconda è lo specchio sull'asse $x$. Le moltiplico riga per colonna:

$$\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 \cdot 1 + 1 \cdot 0 & 0 \cdot 0 + 1 \cdot (-1) \\ 1 \cdot 1 + 0 \cdot 0 & 1 \cdot 0 + 0 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}.$$

Il risultato è la matrice del quarto di giro. In un prodotto di matrici agisce per prima quella a destra. Quindi: specchiare sull'asse $x$ e poi sulla bisettrice è come fare un quarto di giro.

**(b)** Scrivo le due matrici con gli angoli $\alpha$ e $\beta$ e calcolo i quattro posti del prodotto, riga per colonna.

1. In alto a sinistra: $\cos\alpha\cos\beta + \sin\alpha\sin\beta$.
2. In alto a destra: $\cos\alpha\sin\beta - \sin\alpha\cos\beta$.
3. In basso a sinistra: $\sin\alpha\cos\beta - \cos\alpha\sin\beta$.
4. In basso a destra: $\sin\alpha\sin\beta + \cos\alpha\cos\beta$.

Ora servono le formule di sottrazione del coseno e del seno, che si studiano a scuola:

$$\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta, \qquad \sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta.$$

Le uso sui quattro posti.

1. In alto a sinistra e in basso a destra c'è $\cos(\alpha - \beta)$.
2. In basso a sinistra c'è $\sin(\alpha - \beta)$.
3. In alto a destra c'è la stessa espressione con i segni scambiati, cioè $-\sin(\alpha - \beta)$.

È la matrice della rotazione di angolo $\alpha - \beta$.

**Controllo.** Anche il determinante torna: per il Teorema di Binet è $(-1) \cdot (-1) = 1$, quello di una rotazione. E nel punto (a), con $\alpha = \frac\pi2$ e $\beta = 0$, la formula dà proprio il quarto di giro.
:::

::: esercizio medio Prodotti vettoriali e basi
(a) Calcola $(2, -1, 1) \times (1, 3, -2)$ e verifica che è ortogonale ai due vettori. (b) Spiega perché $(2, -1, 1)$, $(1, 3, -2)$ e il loro prodotto vettoriale formano una base di $\R^3$.
::: soluzione
**(a)** Metto i due vettori in colonna. Le righe della tabella sono $(2, 1)$, $(-1, 3)$ e $(1, -2)$.

1. Copro la prima riga: $(-1) \cdot (-2) - 3 \cdot 1 = 2 - 3 = -1$.
2. Copro la seconda riga: $2 \cdot (-2) - 1 \cdot 1 = -4 - 1 = -5$. Cambio il segno: $5$.
3. Copro la terza riga: $2 \cdot 3 - 1 \cdot (-1) = 6 + 1 = 7$.

Il prodotto vettoriale è $(-1, 5, 7)$.

Controllo con i prodotti scalari.

- Con $(2, -1, 1)$: $-2 - 5 + 7 = 0$.
- Con $(1, 3, -2)$: $-1 + 15 - 14 = 0$.

**(b)** Il prodotto vettoriale non è il vettore di soli zeri. Per la Proposizione 22.16 i due vettori sono indipendenti. Allora per il Corollario 22.17 loro due e il loro prodotto vettoriale formano una base dello spazio.
:::

::: esercizio medio Il piano generato da due vettori
Sia $W = \Span((1, 0, 2), (0, 1, 1))$. (a) Trova un vettore ortogonale a $W$ e un'equazione cartesiana di $W$. (b) Il vettore $(1, 1, 3)$ sta in $W$? E $(1, 1, 1)$?
::: soluzione
$W$ è fatto da tutte le ricette dei due vettori: è un piano che passa per l'origine.

**(a)** Un vettore perpendicolare al piano è perpendicolare a tutti e due i vettori: è il loro prodotto vettoriale. Le righe della tabella sono $(1, 0)$, $(0, 1)$ e $(2, 1)$.

1. Copro la prima riga: $0 \cdot 1 - 1 \cdot 2 = -2$.
2. Copro la seconda riga: $1 \cdot 1 - 0 \cdot 2 = 1$. Cambio il segno: $-1$.
3. Copro la terza riga: $1 \cdot 1 - 0 \cdot 0 = 1$.

Il vettore è $(-2, -1, 1)$. Controllo: con $(1, 0, 2)$ viene $-2 + 0 + 2 = 0$, con $(0, 1, 1)$ viene $0 - 1 + 1 = 0$.

Un punto $(x, y, z)$ sta nel piano esattamente quando è perpendicolare a questo vettore (lezione L21). Scrivo «prodotto scalare uguale a zero»:

$$-2x - y + z = 0.$$

Questa è un'equazione cartesiana del piano, cioè la condizione che i suoi punti rispettano. Cambiando tutti i segni si può scrivere anche $2x + y - z = 0$.

**(b)** Metto i numeri nell'equazione $2x + y - z = 0$.

- Per $(1, 1, 3)$: $2 + 1 - 3 = 0$. Sta nel piano. Infatti è la somma dei due vettori di partenza.
- Per $(1, 1, 1)$: $2 + 1 - 1 = 2$, che non è zero. Non sta nel piano.
:::

::: esercizio difficile Proprietà del prodotto vettoriale dalla definizione
Dimostra, usando solo la Definizione 22.14: (a) $w \times v = -(v \times w)$; (b) $v \times v = 0$; (c) $(\lambda v) \times w = \lambda(v \times w)$. (d) Controlla con $v = (1, 2, 3)$, $w = (4, 5, 6)$ l'identità $\|v \times w\|^2 + \langle v, w\rangle^2 = \|v\|^2\|w\|^2$, che le dispense dimostrano nella lezione L23.
::: soluzione
**(a)** Scambiare i due vettori vuol dire scambiare le lettere $v$ e $w$ nella formula. Guardo i tre numeri uno alla volta.

1. Il primo numero di $v \times w$ è $v_2w_3 - v_3w_2$. Quello di $w \times v$ è $w_2v_3 - w_3v_2$. Sono gli stessi due prodotti, con i segni scambiati.
2. Il secondo numero passa da $v_3w_1 - v_1w_3$ a $w_3v_1 - w_1v_3$: di nuovo i segni scambiati.
3. Il terzo numero passa da $v_1w_2 - v_2w_1$ a $w_1v_2 - w_2v_1$: di nuovo i segni scambiati.

Tutti e tre i numeri cambiano segno. Quindi $w \times v = -(v \times w)$.

**(b)** Metto $v$ al posto di $w$ nella formula.

1. Primo numero: $v_2v_3 - v_3v_2 = 0$.
2. Secondo numero: $v_3v_1 - v_1v_3 = 0$.
3. Terzo numero: $v_1v_2 - v_2v_1 = 0$.

Un'altra strada usa il punto (a): $v \times v$ è uguale al suo opposto, e l'unico vettore uguale al suo opposto è quello di soli zeri.

**(c)** Il vettore $\lambda v$ ha i numeri $\lambda v_1$, $\lambda v_2$, $\lambda v_3$. Li metto nella formula e raccolgo $\lambda$.

1. Primo numero: $(\lambda v_2)w_3 - (\lambda v_3)w_2 = \lambda\,(v_2w_3 - v_3w_2)$.
2. Secondo numero: $(\lambda v_3)w_1 - (\lambda v_1)w_3 = \lambda\,(v_3w_1 - v_1w_3)$.
3. Terzo numero: $(\lambda v_1)w_2 - (\lambda v_2)w_1 = \lambda\,(v_1w_2 - v_2w_1)$.

Ogni numero è $\lambda$ volte il numero corrispondente di $v \times w$.

**(d)** Calcolo i due lati con i numeri.

1. Dall'esempio della lezione, $v \times w = (-3, 6, -3)$. Il quadrato della sua norma è $9 + 36 + 9 = 54$.
2. Il prodotto scalare è $1 \cdot 4 + 2 \cdot 5 + 3 \cdot 6 = 4 + 10 + 18 = 32$. Il suo quadrato è $1024$.
3. Lato sinistro: $54 + 1024 = 1078$.
4. Il quadrato della norma di $v$ è $1 + 4 + 9 = 14$. Quello di $w$ è $16 + 25 + 36 = 77$.
5. Lato destro: $14 \cdot 77 = 1078$.

I due lati sono uguali.
:::

::: esercizio difficile Un'isometria dello spazio
Sia $A = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}$. (a) Verifica che $A$ è ortogonale. (b) È una rotazione o un'antirotazione? (c) Trova l'asse e l'angolo.
::: soluzione
**(a)** Le colonne sono $(0, 1, 0)$, poi $(-1, 0, 0)$, poi $(0, 0, -1)$.

1. In ogni colonna c'è un solo numero diverso da zero, ed è $1$ oppure $-1$. Quindi ogni colonna è lunga 1.
2. I numeri diversi da zero stanno in tre posti diversi. Quindi il prodotto scalare di due colonne diverse è una somma di zeri: fa 0.

La matrice è ortogonale.

**(b)** Calcolo il determinante con lo sviluppo di Laplace lungo la terza riga. Lì c'è un solo numero diverso da zero, l'ultimo:

$$\det A = (-1) \cdot \det\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = (-1) \cdot \big(0 \cdot 0 - (-1) \cdot 1\big) = (-1) \cdot 1 = -1.$$

Il determinante è $-1$: è un'**antirotazione**.

**(c)** Cerco l'asse e l'angolo.

1. La terza colonna è l'immagine di $e_3$: è $(0, 0, -1)$, cioè l'opposto di $e_3$. In un'antirotazione i vettori dell'asse vanno nel loro opposto. Quindi l'asse è l'asse $z$, cioè $\Span(e_3)$.
2. Sul pavimento, cioè sui vettori con il terzo numero uguale a zero, la matrice lavora come la tabella in alto a sinistra. È la matrice del quarto di giro.
3. Quindi $A$ è il quarto di giro intorno all'asse $z$, seguito dallo specchio rispetto al pavimento. L'angolo è $\frac\pi2$.

**Controllo** con la formula del libro di Martelli. La traccia è $0 + 0 - 1 = -1$. Allora

$$\cos\vartheta = \frac{\operatorname{tr}A - \det A}2 = \frac{-1 - (-1)}2 = 0.$$

L'angolo con coseno 0 è $\frac\pi2$.
:::

::: esercizio esame Completare una matrice ortogonale
Sia $A = \frac15\begin{pmatrix} 3 & a \\ 4 & b \end{pmatrix}$. (1) Trova tutti gli $a, b \in \R$ per cui $A$ è ortogonale. (2) Per ciascuna soluzione di' se $L_A$ è una rotazione o una riflessione (con angolo o asse). (3) Calcola $A^{-1}$.
::: soluzione
**(1)** Le colonne sono $\frac15(3, 4)$ e $\frac15(a, b)$. Devono essere lunghe 1 e perpendicolari.

1. La prima colonna è già lunga 1: il quadrato della lunghezza è $\frac{9 + 16}{25} = 1$.
2. La seconda colonna deve essere lunga 1: $\frac{a^2 + b^2}{25} = 1$, cioè $a^2 + b^2 = 25$.
3. Le due colonne devono essere perpendicolari: $\frac{3a + 4b}{25} = 0$, cioè $3a + 4b = 0$.
4. Dalla condizione del passo 3 ricavo $a$: prima $3a = -4b$, poi $a = -\frac43 b$.
5. Sostituisco nella condizione del passo 2. Il quadrato di $-\frac43 b$ è $\frac{16}9 b^2$. Quindi $\frac{16}9 b^2 + b^2 = 25$, cioè $\frac{25}9 b^2 = 25$.
6. Moltiplico per $\frac9{25}$: $b^2 = 9$. Quindi $b = 3$ oppure $b = -3$.
7. Con $b = 3$ viene $a = -4$. Con $b = -3$ viene $a = 4$.

Le soluzioni sono due: $(a, b) = (-4, 3)$ e $(a, b) = (4, -3)$. Sono una l'opposta dell'altra, come nella figura della sezione sui movimenti rigidi del piano.

**(2)** Guardo il determinante nei due casi.

- Con $(-4, 3)$ la matrice è $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$. Il determinante è $\frac{9 + 16}{25} = 1$: è una **rotazione**. Nella prima colonna leggo il coseno, $\frac35$, e il seno, $\frac45$. L'angolo è $\arccos\frac35$, circa 53 gradi.
- Con $(4, -3)$ la matrice è $\frac15\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}$. Il determinante è $\frac{-9 - 16}{25} = -1$: è una **riflessione**. È la matrice dell'esempio nella sezione sulle riflessioni: lo specchio è la retta $\Span((2, 1))$. Controllo: $(2, 1)$ va in $\left(\frac{6 + 4}5, \frac{8 - 3}5\right) = (2, 1)$ e resta fermo.

**(3)** Per una matrice ortogonale l'inversa è la trasposta.

- Rotazione: $A^{-1} = \frac15\begin{pmatrix} 3 & 4 \\ -4 & 3 \end{pmatrix}$. È la rotazione dello stesso angolo all'indietro.
- Riflessione: la matrice è simmetrica, cioè uguale alla sua trasposta. Quindi $A^{-1} = A$. Ha senso: specchiare due volte riporta al punto di partenza.
:::

::: esercizio esame Prodotto vettoriale, piano e base
Siano $v = (2, 1, 0)$ e $w = (1, 0, 1)$. (1) Calcola un vettore ortogonale a $\Span(v, w)$ e un vettore unitario con la stessa direzione. (2) Scrivi un'equazione cartesiana del piano $\Span(v, w)$. (3) Dimostra che $v, w, v \times w$ è una base di $\R^3$ calcolando un determinante. (4) Anticipa la lezione L23: quanto vale l'area del parallelogramma di lati $v$ e $w$?
::: soluzione
**(1)** Un vettore perpendicolare al piano è il prodotto vettoriale. Le righe della tabella con $v$ e $w$ in colonna sono $(2, 1)$, $(1, 0)$ e $(0, 1)$.

1. Copro la prima riga: $1 \cdot 1 - 0 \cdot 0 = 1$.
2. Copro la seconda riga: $2 \cdot 1 - 1 \cdot 0 = 2$. Cambio il segno: $-2$.
3. Copro la terza riga: $2 \cdot 0 - 1 \cdot 1 = -1$.

Quindi $v \times w = (1, -2, -1)$. Controllo: con $v$ viene $2 - 2 + 0 = 0$, con $w$ viene $1 + 0 - 1 = 0$.

Un vettore **unitario** è un vettore lungo 1. Per ottenerlo divido il vettore per la sua norma, che è $\sqrt{1 + 4 + 1} = \sqrt6$. Il vettore unitario è $\frac1{\sqrt6}(1, -2, -1)$.

**(2)** I tre numeri del prodotto vettoriale sono i coefficienti dell'equazione del piano:

$$x - 2y - z = 0.$$

Controllo: con $v$ viene $2 - 2 - 0 = 0$, con $w$ viene $1 - 0 - 1 = 0$. I due vettori stanno nel piano.

**(3)** Metto i tre vettori nelle colonne di una matrice e calcolo il determinante con lo sviluppo di Laplace lungo la prima riga. I segni sono più, meno, più.

$$\det\begin{pmatrix} 2 & 1 & 1 \\ 1 & 0 & -2 \\ 0 & 1 & -1 \end{pmatrix} = 2 \cdot (0 + 2) - 1 \cdot (-1 - 0) + 1 \cdot (1 - 0) = 4 + 1 + 1 = 6.$$

Le tre parentesi sono i determinanti delle tabelle che restano cancellando la prima riga e una colonna alla volta. Per esempio la prima è $0 \cdot (-1) - (-2) \cdot 1 = 2$.

Il determinante non è zero, quindi i tre vettori sono indipendenti e formano una base.

Il valore 6 è il quadrato della norma di $v \times w$, e non è un caso. Sviluppando lungo la terza colonna, il determinante della matrice con colonne $v$, $w$, $v \times w$ vale sempre $d_1^2 + d_2^2 + d_3^2$. È la norma al quadrato del prodotto vettoriale. Nella lezione L23 è la Proposizione 23.4.

**(4)** L'area è la norma del prodotto vettoriale: $\sqrt6$.
:::

## Domande di ripasso

::: domanda Che cos'è un'isometria lineare? Perché fissa l'origine?
È una macchina lineare che si può disfare e che non cambia i prodotti scalari: il prodotto scalare di due vettori è uguale a quello delle loro immagini. Una macchina lineare manda il vettore zero nel vettore zero, quindi l'origine resta ferma. Per questo le traslazioni non ne fanno parte.
:::

::: domanda Come si ricava la matrice della rotazione di angolo $\vartheta$?
Le colonne sono le immagini dei due vettori della base canonica. Il primo va nel punto del cerchio di raggio 1 all'angolo $\vartheta$, cioè $(\cos\vartheta, \sin\vartheta)$. Il secondo va in $(-\sin\vartheta, \cos\vartheta)$. Il determinante è $\cos^2\vartheta + \sin^2\vartheta = 1$.
:::

::: domanda Rispetto a quale retta riflette $\mathrm{Rif}_\vartheta$? Qual è il suo determinante?
Rispetto alla retta per l'origine che forma con l'asse $x$ un angolo $\frac\vartheta2$: la metà dell'angolo scritto nella matrice. Il determinante è $-\cos^2\vartheta - \sin^2\vartheta = -1$.
:::

::: domanda Perché, in una base scelta bene, la matrice di una riflessione ha sulla diagonale $1$ e $-1$ e zeri altrove?
Come primo vettore della base si prende un vettore che sta sullo specchio. Come secondo, un vettore perpendicolare allo specchio. La riflessione lascia fermo il primo e manda il secondo nel suo opposto. Le colonne della matrice dicono proprio questo: sono $(1, 0)$ e $(0, -1)$.
:::

::: domanda Perché per verificare che un isomorfismo è un'isometria bastano i vettori di una base?
Perché ogni vettore è una ricetta fatta con i vettori della base. Il prodotto scalare rispetta le ricette, e anche la macchina le rispetta. Quindi il prodotto scalare di due vettori qualsiasi, prima e dopo la macchina, si calcola con gli stessi conti a partire dai prodotti tra i vettori della base.
:::

::: domanda Quali condizioni equivalenti definiscono un'isometria con un prodotto definito positivo?
Sono tre. Non cambiare i prodotti scalari. Non cambiare le norme: l'immagine di un vettore è lunga come il vettore. Non cambiare le distanze: due immagini sono distanti quanto i vettori di partenza.
:::

::: domanda Quando $L_A$ è un'isometria di $\R^n$? Che cosa vuol dire sulle colonne di $A$?
Quando ${}^tA\,A = I_n$, cioè quando la matrice è ortogonale. Il numero di posto $(i, j)$ di quel prodotto è il prodotto scalare tra la colonna $i$ e la colonna $j$. Quindi le colonne sono lunghe 1 e perpendicolari tra loro: formano una base ortonormale.
:::

::: domanda Che proprietà hanno le matrici ortogonali?
L'inversa è la trasposta. Il determinante è 1 oppure $-1$. Gli autovalori reali possono essere solo 1 e $-1$. Anche le righe sono lunghe 1 e perpendicolari tra loro. Il prodotto di due matrici ortogonali è ortogonale.
:::

::: domanda Perché le matrici ortogonali $2 \times 2$ sono solo rotazioni e riflessioni?
La prima colonna è lunga 1, quindi è un punto del cerchio di raggio 1: $(\cos\vartheta, \sin\vartheta)$. La seconda è lunga 1 e perpendicolare alla prima. Restano solo due scelte: $(-\sin\vartheta, \cos\vartheta)$ oppure $(\sin\vartheta, -\cos\vartheta)$. Con la prima viene la rotazione, con la seconda la riflessione.
:::

::: domanda Che cosa sono le isometrie di $\R^3$?
Sono le rotazioni intorno a un asse, che hanno determinante 1, e le antirotazioni, che hanno determinante $-1$. Un'antirotazione è una rotazione intorno a un asse seguita dallo specchio rispetto al piano perpendicolare all'asse.
:::

::: domanda Come si calcola il prodotto vettoriale? Come si ricorda il segno?
Si mettono i due vettori in colonna. Si copre una riga alla volta e con i numeri rimasti si fa «diagonale meno l'altra diagonale». Al secondo numero si cambia segno. Con i nomi delle dispense: $v \times w = (d_1, -d_2, d_3)$. Un altro aiuto è la regola mnemonica: il determinante della tabella con $e_1$, $e_2$, $e_3$ nella terza colonna.
:::

::: domanda Perché $v \times w$ è ortogonale a $v$? Quando è nullo?
Il prodotto scalare di $v \times w$ con $v$ è il determinante della tabella con colonne $v$, $w$, $v$. Ha due colonne uguali, quindi vale 0. Il prodotto vettoriale è nullo esattamente quando i due vettori sono dipendenti, cioè uno multiplo dell'altro: in quel caso tutti e tre i minori valgono zero.
:::

## Glossario

```glossario
Isometria | Una macchina lineare che si può disfare e che non cambia i prodotti scalari. Quindi non cambia lunghezze, distanze e angoli: è un movimento rigido.
Isometria lineare | Un'isometria di $\R^n$ del tipo «moltiplica per una matrice». Tiene ferma l'origine.
Traslazione | Far scivolare tutto dello stesso spostamento. È un movimento rigido, ma sposta anche l'origine: non è lineare e resta fuori da queste lezioni.
Rotazione del piano | Gira il piano di un angolo $\vartheta$ in senso antiorario intorno all'origine. La sua matrice è $\mathrm{Rot}_\vartheta$ e ha determinante 1.
$\mathrm{Rot}_\vartheta$ | La matrice con prima colonna $(\cos\vartheta, \sin\vartheta)$ e seconda colonna $(-\sin\vartheta, \cos\vartheta)$.
Riflessione del piano | Uno specchio: manda ogni punto dall'altra parte di una retta per l'origine, alla stessa distanza. La sua matrice è $\mathrm{Rif}_\vartheta$ e ha determinante $-1$.
$\mathrm{Rif}_\vartheta$ | La matrice con prima colonna $(\cos\vartheta, \sin\vartheta)$ e seconda colonna $(\sin\vartheta, -\cos\vartheta)$. Lo specchio sta all'angolo $\frac\vartheta2$.
Matrice ortogonale | Una matrice quadrata reale con ${}^tA\,A = I_n$. Le sue colonne sono lunghe 1 e perpendicolari tra loro. L'inversa è la trasposta, il determinante è 1 oppure $-1$.
$O(2)$ | L'insieme delle matrici ortogonali con due righe e due colonne: tutte le rotazioni e tutte le riflessioni. Non è un sottospazio.
Base ortonormale | Una base fatta di vettori lunghi 1 e perpendicolari tra loro, come le colonne di una matrice ortogonale.
Orientazione | Il verso in cui si gira, orario o antiorario. Le matrici con determinante negativo la invertono, come fa uno specchio.
Rotazione dello spazio | Un movimento rigido dello spazio che tiene ferma una retta, l'asse, e fa girare tutto il resto intorno a lei. Ha determinante 1.
Antirotazione | Una rotazione intorno a un asse seguita dallo specchio rispetto al piano perpendicolare all'asse. Ha determinante $-1$.
Asse | La retta intorno a cui si gira. In una rotazione i suoi vettori restano fermi. In un'antirotazione diventano il loro opposto.
Traccia | La somma dei numeri sulla diagonale di una matrice, scritta $\operatorname{tr}A$. Per un'isometria dello spazio vale $\cos\vartheta = \frac{\operatorname{tr}A - \det A}{2}$.
Prodotto vettoriale | Da due vettori dello spazio ne costruisce un terzo, $v \times w$, perpendicolare a tutti e due. Esiste solo per vettori fatti di tre numeri.
Minori $d_i$ | I tre conti «diagonale meno l'altra diagonale» fatti sulla tabella con $v$ e $w$ in colonna, coprendo la riga $i$. Vale $v \times w = (d_1, -d_2, d_3)$.
Regola mnemonica | Un aiuto per ricordare il prodotto vettoriale: il determinante della tabella con $v$ e $w$ nelle prime due colonne e $e_1$, $e_2$, $e_3$ nella terza.
Anticommutatività | Scambiando i due vettori il prodotto vettoriale cambia segno: $w \times v = -(v \times w)$. Per esempio $e_2 \times e_1 = -e_3$.
Regola della mano destra | Dice da che parte punta $v \times w$: pollice lungo $v$, indice lungo $w$, e il medio indica il prodotto vettoriale.
```

## Checklist

```checklist
- So scrivere le matrici $\mathrm{Rot}_\vartheta$ e $\mathrm{Rif}_\vartheta$ e ricavarle guardando dove vanno $e_1$ ed $e_2$.
- So che lo specchio di $\mathrm{Rif}_\vartheta$ sta all'angolo $\frac\vartheta2$ e so trovarlo cercando i vettori che restano fermi.
- So scrivere la matrice della riflessione rispetto a una retta data, con l'angolo, con la proiezione o con il cambiamento di base.
- So dire che cos'è un'isometria e perché basta controllarla sui vettori di una base.
- So che, con il prodotto scalare normale, un'isometria è una macchina che non cambia le lunghezze, oppure le distanze.
- So riconoscere una matrice ortogonale dalle colonne e usare le sue proprietà: l'inversa è la trasposta, il determinante è 1 oppure $-1$.
- So riconoscere un movimento rigido del piano con il determinante e trovare l'angolo o lo specchio.
- So che i movimenti rigidi dello spazio sono rotazioni e antirotazioni, e li distinguo con il determinante.
- So calcolare $v \times w$ coprendo una riga alla volta, e controllo il risultato con il prodotto scalare.
- So usare il prodotto vettoriale per trovare un vettore perpendicolare a un piano o la direzione della retta in cui si tagliano due piani.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 22 «Lo spazio euclideo I», pp. 111–115: sezioni 22.A (isometrie lineari del piano), 22.B (isometrie dello spazio) e 22.C (prodotto vettoriale), seguite in ordine con la loro numerazione (Definizioni 22.1, 22.3, 22.5, 22.10, 22.14; Proposizioni 22.2, 22.4, 22.6, 22.7, 22.8, 22.11, 22.15, 22.16; Corollari 22.9, 22.12, 22.17; Teorema 22.13; l'Osservazione sulla base comoda per le riflessioni). Le dispense non hanno esercizi per questa lezione. Richiami: Proposizione 8.6 (rango per righe), Teorema 9.6 (Laplace), Teorema 10.4 (Binet), lezioni L16, L17, L19–L21.
- **B. Martelli, *Geometria e algebra lineare***: §4.4.8–4.4.9 e §4.4.11 (dimostrazioni delle Proposizioni 22.2 e 22.4 con le coordinate polari), §7.5 (isometrie), §8.2 (Proposizione 8.2.1, matrici ortogonali, riflessioni, rotazioni e antirotazioni, Teorema 8.2.13 e la formula con la traccia), §9.1 (prodotto vettoriale). Il libro è gratuito: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Appelli d'esame** (Moodle 2025/26): domanda 2 del 10/07/2024; problemi 12 del 24/01/2024, del 10/07/2024, del 06/09/2024 e del 15/01/2026; domande sulla distanza tra rette dell'08/02/2024, del 06/09/2024, del 05/02/2026, del 03/06/2026 e del 07/09/2026. **Foglio 4 del tutorato** (esercizio 7, prodotto vettoriale e area). Le due domande riportate sono risolte in questi appunti.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi sono di questi appunti. Le parti **«Oltre le dispense»** (composizione e inversa delle rotazioni, proprietà delle matrici ortogonali, asse e angolo delle isometrie di $\R^3$, altre proprietà del prodotto vettoriale, collocazione nel libro) e le dimostrazioni prese dal libro di Martelli collegano la lezione al resto del corso e all'esame.
