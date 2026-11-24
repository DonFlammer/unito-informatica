---
corso: FDA
lezione: "22"
titolo: "Funzioni in ripasso, sequenze e stringhe"
data: 2026-11-20
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 22 · Libro, parte 2, §3.1 (ripasso) e §3.2
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 22 di Fondamenti dell'Informatica (canale B): ripasso delle funzioni come relazioni, funzioni
  iniettive, suriettive, biiettive e funzione inversa; la funzione caratteristica e l'unione; le sequenze, crescenti e
  decrescenti, le sottosequenze, le somme e i prodotti con sigma e pi greco; le stringhe, la stringa vuota e la
  lunghezza.
lede: >-
  Si apre il capitolo 3 del libro, quello degli oggetti di base: funzioni, sequenze, stringhe. Le funzioni sono un
  ripasso di Matematica Discreta, con i nomi inglesi del libro. Sequenze e stringhe sono nuove, e le stringhe sono il
  materiale con cui lavorano automi e grammatiche, alla fine del corso.
materiale: libro
scheda:
  Libro: Johnsonbaugh, parte 2, §3.1 (solo ripasso e Problem-Solving Corner) e §3.2 fino alla lunghezza di una stringa
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore e mezza
fonte: >-
  Diario delle lezioni del canale B (lezione 23 del docente); risposte ufficiali alle domande di ripasso e agli
  esercizi dei §3.1 e §3.2 (appendice pubblicata sul Moodle del canale A); simulazioni d'esame 2023/24, quiz sulle
  proprietà di una relazione
appunti_html: appunti/FDA/22_funzioni_sequenze_stringhe.html
genera_html: true
---

## In breve

- Una **funzione** è un insieme di coppie in cui ogni elemento del dominio compare come primo elemento **esattamente una volta**. Nel disegno: da ogni punto del dominio parte una freccia sola.
- **Iniettiva** (*one-to-one*): in ogni punto del codominio arriva al massimo una freccia. **Suriettiva** (*onto*): ne arriva almeno una. **Biiettiva**: esattamente una.
- Solo una funzione biiettiva ha un'**inversa**, che si ottiene girando tutte le frecce.
- La **funzione caratteristica** di un insieme $X$ vale 1 sugli elementi di $X$ e 0 sugli altri. Quella dell'unione è la somma delle due solo se i due insiemi sono disgiunti.
- Una **sequenza** è una funzione che ha per dominio un insieme di interi: $s_n$ è l'elemento di **indice** $n$.
- Una sequenza è **crescente** se ogni elemento è minore di tutti quelli che vengono dopo; **non decrescente** se è minore o uguale. Lo stesso per decrescente e non crescente.
- $\sum$ è la somma e $\prod$ il prodotto degli elementi di una sequenza, tra un indice di partenza e uno di arrivo.
- Una **stringa** è una sequenza finita di simboli presi da un insieme fissato, scritta senza virgole. La stringa vuota si indica con $\lambda$; la **lunghezza** di una stringa è il numero dei suoi elementi.

> [!CANALI]
> Nel canale B è la lezione di venerdì 20/11, dalle 11 alle 13. Per il docente è la lezione 23: qui è la 22. Il diario del canale B dice: prima ora, ripasso delle funzioni (funzioni come relazioni, iniettive, suriettive, biiettive, inversa), l'esercizio su funzione caratteristica e unione del Problem-Solving Corner del §3.1, e gli esempi del §3.2 dal 3.2.1 al 3.2.19, omessi il 3.2.20, il 3.2.21 e il 3.2.22; seconda ora, le stringhe dalla definizione 3.2.23 all'esempio 3.2.25, cioè fino alla lunghezza. Esercizi proposti: dal 5 al 9 di pagina 137.
>
> **Che cosa non so.** Il libro non ce l'ho; ho le risposte ufficiali alle domande di ripasso e a una parte degli esercizi. Le definizioni sono quelle delle risposte ufficiali, tradotte. Gli esempi sono miei, salvo dove dico il contrario: i numeri degli esempi del libro non li posso abbinare uno per uno. Dei cinque esercizi proposti ho solo le risposte del 5 e dell'8, senza i testi: sono commentate negli esercizi.
>
> **Che cosa resta fuori.** Concatenazione e sottostringhe vengono dopo l'esempio 3.2.25: non sono in questa lezione.
>
> **Per chi segue Matematica Discreta.** Le funzioni sono già nelle lezioni [D04](../MDAG/D04_funzioni_immagini_controimmagini.html) e [D05](../MDAG/D05_composizione_funzioni_inverse.html), con più dettagli. Qui c'è quello che serve a Fondamenti, con i nomi del libro: *one-to-one*, *onto*, *bijection*.

## Le funzioni come insiemi di coppie

A ogni studente corrisponde un numero di matricola, e uno solo. Questa è una funzione: una regola che a ogni elemento di un insieme ne abbina **uno solo** di un altro.

Il libro la definisce senza la parola «regola», con le coppie della [lezione 11](11_quantificatori_annidati.html). Prendi $X = \{a, b, c\}$ e $Y = \{0, 1, 2, 3\}$, e scrivi gli abbinamenti come coppie:

$$f = \{(a, 1),\ (b, 3),\ (c, 0)\}$$

La coppia $(a, 1)$ dice «ad $a$ è abbinato 1», e si scrive $f(a) = 1$. Ogni elemento di $X$ compare a sinistra in una coppia sola.

```grafico
titolo: Due insiemi di coppie disegnati con le frecce. A sinistra f è una funzione: da ogni punto di X parte una freccia sola. A destra g non lo è, per due motivi: da a partono due frecce, e da c nessuna
x: 0 11
y: 0 5.4
assi: no
griglia: no
proporzioni: libere
testo: 2.4 5.0 | grigio | "f: funzione"
punto: 1.2 3.8 | blu
punto: 1.2 2.6 | blu
punto: 1.2 1.4 | blu
testo: 0.6 3.8 | blu | "a"
testo: 0.6 2.6 | blu | "b"
testo: 0.6 1.4 | blu | "c"
punto: 3.6 4.2 | verde
punto: 3.6 3.2 | verde
punto: 3.6 2.2 | verde
punto: 3.6 1.2 | verde
testo: 4.2 4.2 | verde | "0"
testo: 4.2 3.2 | verde | "1"
testo: 4.2 2.2 | verde | "2"
testo: 4.2 1.2 | verde | "3"
freccia: 1.35 3.75 3.45 3.25 | ambra
freccia: 1.35 2.5 3.45 1.3 | ambra
freccia: 1.35 1.55 3.45 4.1 | ambra
testo: 8.4 5.0 | grigio | "g: non è una funzione"
punto: 7.2 3.8 | blu
punto: 7.2 2.6 | blu
punto: 7.2 1.4 | blu
testo: 6.6 3.8 | blu | "a"
testo: 6.6 2.6 | blu | "b"
testo: 6.6 1.4 | blu | "c"
punto: 9.6 4.2 | verde
punto: 9.6 3.2 | verde
punto: 9.6 2.2 | verde
punto: 9.6 1.2 | verde
testo: 10.2 4.2 | verde | "0"
testo: 10.2 3.2 | verde | "1"
testo: 10.2 2.2 | verde | "2"
testo: 10.2 1.2 | verde | "3"
freccia: 7.35 3.85 9.45 4.2 | rosa
freccia: 7.35 3.75 9.45 3.25 | rosa
freccia: 7.35 2.55 9.45 2.25 | ambra
```

> [!DEF] Funzione (libro, §3.1)
> Presi due insiemi $X$ e $Y$, una **funzione** $f$ da $X$ a $Y$ è un sottoinsieme del prodotto cartesiano $X \times Y$ con questa proprietà: per ogni $x \in X$ c'è **esattamente un** $y \in Y$ con $(x, y) \in f$.
>
> Si scrive $f : X \to Y$, e $f(x) = y$ al posto di $(x, y) \in f$. $X$ è il **dominio**, $Y$ il **codominio**. L'insieme dei valori che $f$ assume davvero è l'**immagine** (*range*).

**Come si legge.** Un sottoinsieme di $X \times Y$ è una **relazione** da $X$ a $Y$: un insieme qualunque di coppie. Una funzione è una relazione con una regola in più sulle frecce che **partono**: da ogni $x$ ne parte una, non zero e non due. «Esattamente uno» sono due richieste insieme:

- **almeno uno**: nessun elemento di $X$ resta senza immagine. Nel linguaggio dei quiz d'esame la relazione è **totale**;
- **al massimo uno**: nessun elemento di $X$ ha due immagini.

Per la $f$ di prima il dominio è $\{a, b, c\}$, il codominio $\{0, 1, 2, 3\}$ e l'immagine $\{0, 1, 3\}$: il 2 è nel codominio ma nessuna freccia ci arriva. La definizione non lo vieta: la regola riguarda solo le frecce che partono.

::: prova Quali di questi insiemi di coppie sono funzioni da $\{1, 2, 3\}$ a $\{a, b\}$? (i) $\{(1, a), (2, a), (3, a)\}$; (ii) $\{(1, a), (2, b)\}$; (iii) $\{(1, a), (1, b), (2, a), (3, b)\}$.
Solo (i): è la funzione costante, e va bene che più frecce arrivino in $a$. In (ii) il 3 non ha immagine. In (iii) l'1 ne ha due.
:::

> [!RICORDA]
> - Funzione: da ogni elemento del dominio parte esattamente una freccia.
> - Dominio: da dove partono. Codominio: dove possono arrivare. Immagine: dove arrivano davvero.
> - Una funzione è una relazione con una proprietà in più.

## Iniettive, suriettive, biiettive e l'inversa

La definizione di funzione guarda le frecce che partono. Queste tre proprietà guardano le frecce che **arrivano**, e si contano allo stesso modo.

```grafico
titolo: Tre funzioni, guardando le frecce che arrivano a destra. Nella prima in ogni punto ne arriva al massimo una, ma un punto resta vuoto. Nella seconda nessun punto resta vuoto, ma in uno ne arrivano due. Nella terza in ogni punto ne arriva esattamente una
x: 0 12
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
punto: 0.8 3.6 | blu
punto: 0.8 2.4 | blu
punto: 2.8 4.2 | verde
punto: 2.8 3.0 | verde
punto: 2.8 1.8 | verde
freccia: 0.95 3.65 2.65 4.15 | ambra
freccia: 0.95 2.35 2.65 1.85 | ambra
testo: 1.8 0.6 | ambra | "iniettiva"
punto: 4.8 4.2 | blu
punto: 4.8 3.0 | blu
punto: 4.8 1.8 | blu
punto: 6.8 3.6 | verde
punto: 6.8 2.4 | verde
freccia: 4.95 4.15 6.65 3.65 | ambra
freccia: 4.95 3.05 6.65 3.55 | ambra
freccia: 4.95 1.85 6.65 2.35 | ambra
testo: 5.8 0.6 | ambra | "suriettiva"
punto: 8.8 4.2 | blu
punto: 8.8 3.0 | blu
punto: 8.8 1.8 | blu
punto: 10.8 4.2 | verde
punto: 10.8 3.0 | verde
punto: 10.8 1.8 | verde
freccia: 8.95 4.1 10.65 3.1 | ambra
freccia: 8.95 3.1 10.65 4.1 | ambra
freccia: 8.95 1.8 10.65 1.8 | ambra
testo: 9.8 0.6 | ambra | "biiettiva"
```

> [!DEF] Iniettiva, suriettiva, biiettiva (libro, §3.1)
> Una funzione $f : X \to Y$ è:
>
> - **iniettiva** (*one-to-one*) se per ogni $y \in Y$ c'è **al massimo un** $x \in X$ con $f(x) = y$;
> - **suriettiva** (*onto* $Y$) se la sua immagine è tutto $Y$: per ogni $y \in Y$ c'è **almeno un** $x$ con $f(x) = y$;
> - **biiettiva**, o una **biiezione**, se è iniettiva e suriettiva: per ogni $y$ c'è **esattamente un** $x$.

**Come si legge.** Iniettiva vuol dire «niente scontri»: due elementi diversi non finiscono mai nello stesso posto. Suriettiva vuol dire «niente buchi»: tutto il codominio è raggiunto. La tabella mette in ordine le quattro parole:

| Frecce | che partono da ogni $x$ | che arrivano in ogni $y$ |
|---|---|---|
| almeno una | totale | suriettiva |
| al massimo una | senza doppie immagini | iniettiva |
| esattamente una | **è una funzione** | biiettiva |

Un modo equivalente di dire «iniettiva», che è quello che si usa nelle dimostrazioni: se $f(x_1) = f(x_2)$, allora $x_1 = x_2$.

La funzione $f = \{(a, 1), (b, 3), (c, 0)\}$, che è l'esempio delle risposte ufficiali del libro:

- è **iniettiva**: 1, 3 e 0 sono tre valori diversi;
- verso $Y = \{0, 1, 2, 3\}$ **non è suriettiva**: il 2 non è raggiunto;
- verso $\{0, 1, 3\}$ **è suriettiva**, e quindi biiettiva.

La stessa lista di coppie è suriettiva o no secondo il codominio che si dichiara. Per questo il libro scrive «*onto* $Y$», nominando l'insieme.

> [!ESEMPIO] · Due funzioni sugli interi
> **$f(n) = 2n + 1$, da $\mathbb{Z}$ a $\mathbb{Z}$.**
>
> Iniettiva: se $2n_1 + 1 = 2n_2 + 1$, togliendo 1 e dividendo per 2 resta $n_1 = n_2$.
>
> Non suriettiva: $2n + 1$ è sempre dispari, quindi 0 non è raggiunto. Un solo valore mancante basta.
>
> **$g(n) = n \bmod 3$, da $\mathbb{Z}$ a $\{0, 1, 2\}$** (il resto della divisione per 3).
>
> Non iniettiva: $g(0) = g(3) = 0$. Una sola coppia che si scontra basta.
>
> Suriettiva: $g(0) = 0$, $g(1) = 1$, $g(2) = 2$.

### La funzione inversa

Se $f$ è biiettiva, girando tutte le frecce si ottiene di nuovo una funzione, da $Y$ a $X$.

> [!DEF] Funzione inversa (libro, §3.1)
> Se $f : X \to Y$ è biiettiva, la sua **inversa** è la funzione da $Y$ a $X$
>
> $$f^{-1} = \{(y, x) \mid (x, y) \in f\}$$

**Come si legge.** Ogni coppia viene scambiata: l'inversa riporta ogni elemento da dove $f$ l'ha mandato a dove era partito. Per $f = \{(a, 1), (b, 3), (c, 0)\}$ verso $\{0, 1, 3\}$ l'inversa è $\{(1, a), (3, b), (0, c)\}$.

Le coppie si possono scambiare sempre; il risultato è una funzione solo se $f$ è biiettiva. Se $f$ non è iniettiva, in qualche $y$ arrivano due frecce, e girandole da $y$ ne partirebbero due. Se non è suriettiva, da qualche $y$ non partirebbe niente.

::: prova La funzione $h(n) = n + 5$ da $\mathbb{Z}$ a $\mathbb{Z}$ è biiettiva? Se sì, qual è l'inversa?
Sì. Iniettiva: da $n_1 + 5 = n_2 + 5$ viene $n_1 = n_2$. Suriettiva: un intero $m$ è raggiunto da $m - 5$. L'inversa è $h^{-1}(m) = m - 5$.
:::

> [!RICORDA]
> - Iniettiva: al massimo una freccia in arrivo. Suriettiva: almeno una. Biiettiva: esattamente una.
> - Non iniettiva: basta una coppia di elementi con la stessa immagine. Non suriettiva: basta un valore non raggiunto.
> - L'inversa esiste solo per le biiezioni, e si ottiene scambiando le coppie.

## La funzione caratteristica e l'unione

Un modulo con le caselle da spuntare descrive un insieme: la casella vale 1 per chi è dentro, 0 per chi è fuori. È la funzione caratteristica.

> [!DEF] Funzione caratteristica (libro, §3.1)
> Fissato un insieme universo $U$ e un suo sottoinsieme $X$, la **funzione caratteristica** di $X$ è la funzione $C_X$ da $U$ a $\{0, 1\}$ che vale
>
> $$C_X(x) = 1 \text{ se } x \in X, \qquad C_X(x) = 0 \text{ se } x \notin X$$

**Come si legge.** $C_X$ risponde con un bit alla domanda «$x$ sta in $X$?». Scrivendo i suoi valori in fila, un insieme diventa una sequenza di bit: con $U = \{1, 2, 3, 4, 5, 6\}$ l'insieme $\{1, 2, 3\}$ è 111000. È il modo in cui un programma tiene in memoria un insieme.

Con $U = \{1, \dots, 6\}$, $X = \{1, 2, 3\}$ e $Y = \{3, 4\}$:

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| $C_X(x)$ | 1 | 1 | 1 | 0 | 0 | 0 |
| $C_Y(x)$ | 0 | 0 | 1 | 1 | 0 | 0 |
| $C_X(x) \cdot C_Y(x)$ | 0 | 0 | 1 | 0 | 0 | 0 |
| $C_X(x) + C_Y(x)$ | 1 | 1 | **2** | 1 | 0 | 0 |
| $C_{X \cup Y}(x)$ | 1 | 1 | 1 | 1 | 0 | 0 |

La riga del prodotto è la funzione caratteristica dell'**intersezione** $\{3\}$: il prodotto di due bit vale 1 solo se valgono 1 tutti e due, come la «e» della logica. Vale sempre: $C_{X \cap Y} = C_X \cdot C_Y$.

Per l'unione verrebbe da usare la somma, e quasi funziona: sbaglia solo sul 3, dove dà 2. Il 3 è l'elemento che sta in **tutti e due** gli insiemi, e la somma lo conta due volte.

```grafico
titolo: Il valore della somma delle due funzioni caratteristiche, zona per zona. Vale 1 dove c'è un insieme solo, 2 nella zona comune, 0 fuori. La funzione caratteristica dell'unione vale 1 in tutte e tre le zone colorate: le due coincidono solo se la zona comune è vuota
x: -4.2 4.2
y: -2.6 3.0
assi: no
griglia: no
cerchio: -1 0 2 | blu
cerchio: 1 0 2 | verde
testo: -2.6 2.3 | blu | "X"
testo: 2.6 2.3 | verde | "Y"
testo: -1.9 0 | blu | "1"
testo: 1.9 0 | verde | "1"
testo: 0 0 | ambra | "2"
testo: 3.6 -2.0 | grigio | "0"
```

L'esercizio del Problem-Solving Corner chiede di dimostrare proprio questo.

> [!PROP] Funzione caratteristica dell'unione (libro, §3.1, Problem-Solving Corner)
> Per due sottoinsiemi $X$ e $Y$ di $U$: vale $C_{X \cup Y}(x) = C_X(x) + C_Y(x)$ per ogni $x \in U$ **se e solo se** $X \cap Y = \varnothing$.

**Come si legge.** «Se e solo se» sono due implicazioni, e si dimostrano una alla volta, come nella [lezione 17](17_contrapposizione_casi_equivalenze.html). Da destra a sinistra: se gli insiemi sono disgiunti, la formula vale. Da sinistra a destra: se la formula vale, sono disgiunti.

> [!ESEMPIO] · La dimostrazione
> **Se $X \cap Y = \varnothing$, la formula vale.** Prendo un $x$ qualunque di $U$. I casi sono tre, perché $x$ non può stare in tutti e due:
>
> - $x$ in $X$ e non in $Y$: a sinistra 1, perché $x$ è nell'unione; a destra $1 + 0$;
> - $x$ in $Y$ e non in $X$: a sinistra 1; a destra $0 + 1$;
> - $x$ in nessuno dei due: a sinistra 0; a destra $0 + 0$.
>
> **Se la formula vale, $X \cap Y = \varnothing$.** Per assurdo: suppongo che ci sia un $x$ in $X \cap Y$. Allora a destra c'è $1 + 1 = 2$, e a sinistra 1, perché una funzione caratteristica non supera 1. La formula sarebbe falsa per quell'$x$, contro l'ipotesi.

La formula che vale **sempre** toglie quello che la somma conta due volte:

$$C_{X \cup Y} = C_X + C_Y - C_X \cdot C_Y$$

Nella colonna del 3: $1 + 1 - 1 = 1$. È la stessa correzione del principio di inclusione-esclusione della lezione [D06](../MDAG/D06_insiemi_finiti_inclusione_esclusione.html) di Matematica Discreta.

::: prova Con $U = \{1, \dots, 6\}$, $X = \{1, 2, 3\}$ e $Y = \{3, 4\}$, scrivi i valori di $C_X(x) \cdot (1 - C_Y(x))$ per $x$ da 1 a 6. Di quale insieme è la funzione caratteristica?
1, 1, 0, 0, 0, 0. È l'insieme $\{1, 2\}$, cioè la differenza $X - Y$: vale 1 per chi sta in $X$ e non in $Y$. È uno degli esercizi del libro con la soluzione ufficiale.
:::

> [!RICORDA]
> - $C_X$ vale 1 dentro $X$ e 0 fuori.
> - Intersezione: prodotto. Unione: somma meno prodotto.
> - La somma da sola dà l'unione solo per insiemi disgiunti.
> - «Se e solo se»: due dimostrazioni.

## Le sequenze

Una lista ordinata ha un primo elemento, un secondo, un terzo. Le temperature di una settimana, i resti di una divisione ripetuta, i valori di una variabile giro dopo giro: sono sequenze.

Prendi la lista $2, 4, 6, 8, 10$. Al posto 1 c'è 2, al posto 2 c'è 4, al posto 3 c'è 6. È una funzione: a ogni posto abbina un valore.

> [!DEF] Sequenza (libro, §3.2)
> Una **sequenza** è una funzione il cui dominio è un insieme di numeri interi. Il valore nel posto $n$ si scrive $s_n$ invece di $s(n)$, e $n$ si chiama **indice**.

**Come si legge.** $s_3$ si legge «s con 3», ed è l'elemento di indice 3. La sequenza intera si indica con $s$ o con $\{s_n\}$. Il dominio di solito è fatto di interi consecutivi che partono da 1 o da 0, e può essere finito o infinito. Una sequenza non è un insieme: l'ordine conta, e un valore può comparire più volte.

Una sequenza si dà con la lista o con una formula per l'elemento di indice $n$:

| Formula | Indice a partire da | Primi elementi |
|---|---|---|
| $s_n = 2n$ | 1 | 2, 4, 6, 8, 10 |
| $t_n = 2^n$ | 0 | 1, 2, 4, 8, 16 |
| $u_n = n^2 - 1$ | 1 | 0, 3, 8, 15, 24 |
| $w_n = (-1)^n$ | 0 | 1, −1, 1, −1, 1 |

Da dove parte l'indice va sempre detto: la stessa formula $2^n$ con l'indice da 1 comincia con 2, non con 1. I vettori della [lezione 21](21_invarianti_vettori_somma_zeri.html) sono sequenze finite con l'indice che parte da 0.

Una lista può anche non essere fatta di numeri: $c, d, d, c, d, c$ è una sequenza di lettere, con $s_1 = c$ e $s_4 = c$.

::: prova Per $z_n = 3n - 2$ con l'indice da 1, scrivi i primi quattro elementi. Quanto vale $z_{10}$?
1, 4, 7, 10. $z_{10} = 28$.
:::

> [!RICORDA]
> - Sequenza: funzione con dominio fatto di interi. $s_n$ è l'elemento di indice $n$.
> - L'ordine conta e le ripetizioni sono ammesse.
> - Bisogna sempre dire da dove parte l'indice.

## Crescenti, decrescenti e le altre due

Guarda queste quattro liste: (a) 2, 5, 13, 40; (b) 9, 6, 6, 1; (c) 3, 3, 3; (d) 1, 4, 2, 8.

La (a) sale sempre. La (b) non sale mai, ma ha due valori uguali vicini. La (c) sta ferma. La (d) va su e giù. Il libro ha quattro parole, e la differenza è tutta nel permettere o no i valori uguali.

> [!DEF] Sequenze crescenti e decrescenti (libro, §3.2)
> Una sequenza $s$ è:
>
> - **crescente** se per ogni $i < j$ nel dominio vale $s_i < s_j$;
> - **decrescente** se per ogni $i < j$ vale $s_i > s_j$;
> - **non decrescente** se per ogni $i < j$ vale $s_i \le s_j$;
> - **non crescente** se per ogni $i < j$ vale $s_i \ge s_j$.

**Come si legge.** «Crescente» è severa: ogni elemento è più piccolo di **tutti** quelli che vengono dopo, e due valori uguali la rovinano. «Non decrescente» permette i tratti piatti: non scende mai, ma può fermarsi. Il nome dice quello che la sequenza non fa.

| Lista | Crescente | Decrescente | Non decrescente | Non crescente |
|---|---|---|---|---|
| 2, 5, 13, 40 | sì | no | sì | no |
| 9, 6, 6, 1 | no | no | no | sì |
| 3, 3, 3 | no | no | sì | sì |
| 1, 4, 2, 8 | no | no | no | no |

```grafico
titolo: La sequenza 9, 6, 6, 1 disegnata un punto per indice. Non sale mai: è non crescente. Tra il secondo e il terzo punto è piatta: per questo non è decrescente
x: 0 5
y: 0 10
proporzioni: libere
punto: 1 9 | blu
punto: 2 6 | blu
punto: 3 6 | blu
punto: 4 1 | blu
segmento: 1 9 2 6 | grigio | sottile
segmento: 2 6 3 6 | ambra
segmento: 3 6 4 1 | grigio | sottile
testo: 2.5 6.8 | ambra | "piatta"
```

Tre cose da notare nella tabella:

- una sequenza crescente è anche non decrescente, perché $<$ è più forte di $\le$;
- una sequenza **costante** è non decrescente e non crescente insieme, e non è né crescente né decrescente;
- una sequenza può non essere nessuna delle quattro.

> [!TRAPPOLA] «Non crescente» non è la negazione di «crescente»
> La lista 1, 4, 2, 8 non è crescente, ma non è nemmeno «non crescente» nel senso della definizione, perché da 1 a 4 sale. «Non crescente» è il nome di una proprietà precisa: non sale **mai**. La negazione di «crescente» è solo «c'è una coppia $i < j$ con $s_i \ge s_j$», per la regola della [lezione 10](10_quantificatori_e_connettivi.html) sulla negazione di un «per ogni».

Per una sequenza data con una formula si confronta ogni elemento con il successivo. Per $s_n = 2n$: $s_{n+1} - s_n = 2$, positivo per ogni $n$, quindi è crescente. Basta il confronto con il successivo, perché da $s_1 < s_2$ e $s_2 < s_3$ viene $s_1 < s_3$, e così via.

### Sottosequenze

Da una sequenza se ne ricava un'altra tenendo solo alcuni elementi, **nello stesso ordine**. Da $2, 4, 6, 8, 10, 12$ tenendo i posti 2, 4 e 6 viene $4, 8, 12$.

> [!DEF] Sottosequenza (libro, §3.2)
> Presa una sequenza $\{s_n\}$ e una sequenza **crescente** di indici $n_1, n_2, n_3, \dots$ del suo dominio, la sequenza $\{s_{n_k}\}$ è una **sottosequenza** di $\{s_n\}$.

**Come si legge.** $n_1, n_2, \dots$ è l'elenco dei posti che si tengono, e deve essere crescente: così non si torna indietro e non si prende due volte lo stesso posto. $s_{n_k}$ è «l'elemento che sta nel $k$-esimo posto tenuto». Nell'esempio $n_k = 2k$ e $s_{n_k} = 2 \cdot 2k = 4k$.

Da $a, a, b, c, q$: la lista $b, c$ è una sottosequenza (posti 3 e 4); anche $a, q$ lo è (posti 1 e 5: non serve che siano vicini); $c, b$ no, perché inverte l'ordine.

::: prova La sequenza $s_n = 2n - 1$, con l'indice da 1, è crescente? Scrivi i primi quattro elementi della sottosequenza con $n_k = 2k - 1$.
Sì: ogni elemento supera il precedente di 2. Gli indici tenuti sono 1, 3, 5, 7, e gli elementi sono 1, 5, 9, 13. In formula $s_{n_k} = 2(2k - 1) - 1 = 4k - 3$, come nelle risposte ufficiali del libro.
:::

> [!RICORDA]
> - Crescente: $<$ tra ogni elemento e tutti i successivi. Non decrescente: $\le$.
> - Costante: non crescente e non decrescente insieme.
> - Sottosequenza: alcuni elementi, nello stesso ordine, anche non vicini.

## Somme e prodotti in forma compatta

Scrivere «la somma dei primi cento elementi» con i puntini è lungo e ambiguo. La notazione con la sigma dice in poco spazio che cosa si somma, da dove e fino a dove.

> [!DEF] Sommatoria e produttoria (libro, §3.2)
> Per una sequenza $\{a_i\}$ e due indici $m \le n$:
>
> $$\sum_{i=m}^{n} a_i = a_m + a_{m+1} + \dots + a_n \qquad\qquad \prod_{i=m}^{n} a_i = a_m \cdot a_{m+1} \cdots a_n$$

**Come si legge.** $\sum$ è la sigma maiuscola, la S di «somma»; $\prod$ è il pi greco maiuscolo, la P di «prodotto». Sotto c'è l'**indice** con il valore di partenza $m$, sopra il valore di arrivo $n$, a destra la formula da calcolare per ogni valore dell'indice. Si legge «somma per $i$ da $m$ a $n$ di $a_i$».

> [!ESEMPIO] · Tre conti
> $\displaystyle\sum_{i=1}^{4} (2i - 1) = 1 + 3 + 5 + 7 = 16$
>
> $\displaystyle\sum_{i=0}^{3} 2^i = 1 + 2 + 4 + 8 = 15$
>
> $\displaystyle\prod_{i=1}^{4} i = 1 \cdot 2 \cdot 3 \cdot 4 = 24$, che è $4!$.

È un ciclo scritto in matematica. La somma dei primi `n` elementi di un vettore, della [lezione 21](21_invarianti_vettori_somma_zeri.html), è $\sum_{j=0}^{n-1} v_j$, e l'invariante di quel ciclo è $s = \sum_{j=0}^{i-1} v_j$.

**Il nome dell'indice non conta.** $\sum_{i=1}^{4} i^2$ e $\sum_{k=1}^{4} k^2$ sono lo stesso numero, 30: l'indice è una variabile che esiste solo dentro la somma, come la variabile legata di un quantificatore.

**Cambiare l'indice.** Si può far partire l'indice da un altro valore, se si corregge la formula. Nella prima somma dell'esempio pongo $j = i - 1$, cioè $i = j + 1$:

1. gli estremi: $i = 1$ diventa $j = 0$; $i = 4$ diventa $j = 3$;
2. la formula: $2i - 1$ diventa $2(j + 1) - 1 = 2j + 1$;
3. il risultato: $\sum_{j=0}^{3} (2j + 1) = 1 + 3 + 5 + 7 = 16$, come prima.

Gli addendi sono gli stessi quattro numeri: è cambiato solo il modo di numerarli. Serve nelle dimostrazioni per induzione, per far combaciare due somme.

::: prova Calcola $\sum_{i=2}^{5} i$ e $\prod_{i=1}^{3} 2i$. Poi riscrivi la prima somma con un indice $j$ che parte da 0.
$2 + 3 + 4 + 5 = 14$ e $2 \cdot 4 \cdot 6 = 48$. Con $j = i - 2$: $\sum_{j=0}^{3} (j + 2) = 2 + 3 + 4 + 5 = 14$.
:::

> [!RICORDA]
> - $\sum$: somma. $\prod$: prodotto. Sotto la partenza, sopra l'arrivo.
> - Il nome dell'indice non conta.
> - Cambio di indice: si spostano gli estremi e si corregge la formula.

## Le stringhe e la loro lunghezza

Una parola è una fila di lettere, un numero binario una fila di bit, un programma una fila di caratteri. In tutti i casi c'è un insieme di simboli ammessi e una sequenza finita di quei simboli.

> [!DEF] Stringa (libro, §3.2, definizione 3.2.23)
> Una **stringa** su un insieme finito $X$ è una sequenza **finita** di elementi di $X$.

**Come si legge.** $X$ è l'insieme dei simboli che si possono usare: più avanti si chiamerà **alfabeto**. Una stringa si scrive senza virgole e senza parentesi: con $X = \{a, b, c\}$ la sequenza $b, a, a, c$ si scrive $baac$. Come in ogni sequenza l'ordine conta, quindi $baac$ e $acab$ sono stringhe diverse, anche se hanno le stesse lettere.

Le ripetizioni si possono abbreviare con un esponente: $bbaaac$ si scrive anche $b^2a^3c$. Qui l'esponente non è una potenza di numeri: vuol dire «il simbolo ripetuto tante volte».

Tre simboli da conoscere:

- $\lambda$ (lambda) è la **stringa vuota**, quella senza elementi. È una stringa su qualunque $X$, e non è un simbolo di $X$;
- $X^*$ («X star») è l'insieme di **tutte** le stringhe su $X$, vuota compresa;
- $X^+$ («X più») è l'insieme delle stringhe **non vuote** su $X$.

Con $X = \{a, b\}$, in ordine di lunghezza:

$$X^* = \{\lambda,\ a,\ b,\ aa,\ ab,\ ba,\ bb,\ aaa,\ \dots\}$$

Ogni stringa è finita, ma $X^*$ è infinito: non c'è una stringa più lunga di tutte. $X^+$ è lo stesso elenco senza $\lambda$.

> [!DEF] Lunghezza di una stringa (libro, §3.2)
> La **lunghezza** di una stringa $\alpha$ è il numero di elementi di $\alpha$. Si scrive $|\alpha|$.

**Come si legge.** Si contano i posti, non i simboli diversi: $|aabab| = 5$, anche se le lettere usate sono due. Con gli esponenti si sommano: $|b^2a^3c| = 2 + 3 + 1 = 6$. La stringa vuota ha lunghezza zero: $|\lambda| = 0$.

Le sbarre sono le stesse della cardinalità di un insieme, e il senso è lo stesso: «quanti elementi». La lunghezza è una funzione da $X^*$ ai numeri naturali. È suriettiva, perché per ogni $n$ c'è una stringa lunga $n$, e non è iniettiva appena $X$ ha due simboli: $|ab| = |ba|$.

> [!TRAPPOLA] La stringa vuota, l'insieme vuoto e lo spazio
> $\lambda$ è una stringa, di lunghezza 0. $\varnothing$ è un insieme, senza elementi. $\{\lambda\}$ è un insieme con **un** elemento, la stringa vuota. E uno spazio bianco, in un testo, è un carattere: la stringa fatta di un solo spazio ha lunghezza 1.

::: prova Con $X = \{0, 1\}$: quanto valgono $|0110|$, $|1^50^2|$ e $|\lambda|$? Quante sono le stringhe di lunghezza 2, e quali?
4, 7 e 0. Le stringhe di lunghezza 2 sono quattro: 00, 01, 10, 11.
:::

> [!RICORDA]
> - Stringa su $X$: sequenza finita di elementi di $X$, scritta senza virgole.
> - $\lambda$: stringa vuota, lunghezza 0. $X^*$: tutte le stringhe. $X^+$: quelle non vuote.
> - $|\alpha|$: il numero di posti, contando le ripetizioni.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $f : X \to Y$ | «f da X a Y» | funzione con dominio $X$ e codominio $Y$ | $f(n) = 2n + 1$ da $\mathbb{Z}$ a $\mathbb{Z}$ |
| $f^{-1}$ | «f alla meno uno» | la funzione inversa di una biiezione | $h(n) = n + 5$, $h^{-1}(m) = m - 5$ |
| $C_X$ | «C con X» | funzione caratteristica: 1 dentro $X$, 0 fuori | $C_{\{1,2\}}(2) = 1$ |
| $n \bmod 3$ | «n modulo 3» | il resto della divisione di $n$ per 3 | $7 \bmod 3 = 1$ |
| $s_n$ | «s con n» | l'elemento di indice $n$ della sequenza $s$ | per $s_n = 2n$, $s_3 = 6$ |
| $s_{n_k}$ | «s con n con k» | il $k$-esimo elemento di una sottosequenza | $n_k = 2k$: $s_{n_k} = 4k$ |
| $\sum_{i=m}^{n} a_i$ | «somma per i da m a n di a con i» | $a_m + \dots + a_n$ | $\sum_{i=1}^{3} i = 6$ |
| $\prod_{i=m}^{n} a_i$ | «prodotto per i da m a n» | $a_m \cdots a_n$ | $\prod_{i=1}^{3} i = 6$ |
| $\lambda$ | «lambda» | la stringa vuota | $\lvert\lambda\rvert = 0$ |
| $X^*$, $X^+$ | «X star», «X più» | tutte le stringhe su $X$; quelle non vuote | $ab \in \{a, b\}^*$ |
| $\lvert\alpha\rvert$ | «lunghezza di alfa» | il numero di elementi della stringa | $\lvert baac\rvert = 4$ |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Il quiz sulle proprietà di una relazione**, che c'era in tutte e due le simulazioni del 2023/24. Tra le voci: «è totale?», «individua una funzione?», «è suriettiva?», «è una biiezione?». Le altre voci (riflessiva, simmetrica…) sono delle lezioni sulle relazioni, più avanti.
2. **Le stringhe**: lunghezza, stringa vuota, $X^*$. Sono il vocabolario dei quiz su automi e grammatiche, che chiedono se una stringa è accettata o generata.
3. **Classificare una sequenza** e **calcolare una somma** scritta con la sigma.

### Una domanda d'esame, letta insieme

**Simulazioni d'esame 2023/24, quiz sulle proprietà di una relazione.** La relazione è $R = \{(1,1), (1,2), (1,3), (3,1), (3,3), (4,4), (5,5)\}$ sull'insieme $\{1, 2, 3, 4, 5\}$. Tra le voci: «È totale?», «Individua una funzione?», «È una biiezione?».

**In pratica chiede:** di guardare le frecce che partono da ogni elemento. Totale: ne parte almeno una da ognuno. Funzione: ne parte esattamente una da ognuno.

> [!ESEMPIO] · la soluzione, voce per voce
> Conto le coppie che cominciano con ogni elemento:
>
> | Elemento | Coppie che partono da lui | Quante |
> |---|---|---|
> | 1 | $(1,1)$, $(1,2)$, $(1,3)$ | 3 |
> | 2 | nessuna | 0 |
> | 3 | $(3,1)$, $(3,3)$ | 2 |
> | 4 | $(4,4)$ | 1 |
> | 5 | $(5,5)$ | 1 |
>
> **È totale? No.** Dal 2 non parte nessuna coppia.
>
> **Individua una funzione? No**, per due motivi che bastano ognuno da solo: il 2 non ha immagine, e l'1 ne ha tre.
>
> **È una biiezione? No.** Una biiezione è prima di tutto una funzione.
>
> Sono le risposte segnate nella copia compilata da uno studente, e tornano con le definizioni.

> [!METODO] Decidere se un insieme di coppie è una funzione, e di che tipo
> 1. Per ogni elemento del dominio conta le coppie che **cominciano** con lui. Tutti 1: è una funzione. Uno 0 o un 2: non lo è, e ci si ferma.
> 2. Per ogni elemento del codominio conta le coppie che **finiscono** con lui.
> 3. Nessun conteggio sopra 1: iniettiva. Nessun conteggio a 0: suriettiva. Tutti 1: biiettiva.

### Errori da evitare

- Pensare che una funzione debba raggiungere tutto il codominio: quella è la suriettività.
- Dire che una funzione non è tale perché due frecce arrivano nello stesso punto: quello riguarda l'iniettività.
- Leggere «non crescente» come «non è crescente».
- Dimenticare da dove parte l'indice di una sequenza o di una somma.
- Confondere $\lambda$ con $\varnothing$, o contare i simboli diversi invece dei posti nella lunghezza.

## Quiz

```quiz
D: Quale di questi insiemi di coppie è una funzione da $\{1, 2, 3\}$ a $\{a, b, c\}$?
+ $\{(1, b), (2, b), (3, a)\}$
- $\{(1, a), (2, b)\}$
- $\{(1, a), (1, b), (2, c), (3, c)\}$
- $\{(1, a), (2, b), (3, c), (3, a)\}$
- $\{(a, 1), (b, 2), (c, 3)\}$
= Da ogni elemento del dominio deve partire esattamente una coppia; che due finiscano in $b$ non importa. La più insidiosa è $\{(a, 1), (b, 2), (c, 3)\}$: è una funzione, ma da $\{a, b, c\}$ a $\{1, 2, 3\}$, nel verso opposto.

D: La funzione $f(n) = 2n + 1$ da $\mathbb{Z}$ a $\mathbb{Z}$ è:
+ iniettiva ma non suriettiva
- suriettiva ma non iniettiva
- biiettiva
- né iniettiva né suriettiva
- non è una funzione
= Valori diversi di $n$ danno risultati diversi; i numeri pari non sono mai raggiunti. La più insidiosa è «biiettiva»: lo sarebbe da $\mathbb{R}$ a $\mathbb{R}$, dove $2x + 1 = 0$ ha soluzione.

D: Con $U = \{1, \dots, 6\}$, $X = \{1, 2, 3\}$ e $Y = \{3, 4\}$, quanto vale $C_X(3) + C_Y(3)$?
N: 2
= Il 3 sta in tutti e due gli insiemi. Per questo la somma non è la funzione caratteristica dell'unione, che vale al massimo 1.

D: Per quali insiemi $X$ e $Y$ vale $C_{X \cup Y}(x) = C_X(x) + C_Y(x)$ per ogni $x$?
+ solo quando $X \cap Y = \varnothing$
- sempre
- solo quando $X = Y$
- solo quando $X \subseteq Y$
- mai
= Su un elemento comune la somma darebbe 2. La più insidiosa è «sempre»: quella che vale sempre è la formula con il prodotto sottratto.

D: La sequenza 7, 7, 4, 4, 1 è:
+ non crescente, ma non decrescente
- decrescente
- crescente
- non decrescente
- nessuna delle quattro
= Non sale mai, quindi è non crescente; ha valori uguali vicini, quindi non è decrescente. La più insidiosa è «decrescente»: nel parlare comune lo diresti, ma la definizione chiede $>$ stretto.

D: Quanto vale $\sum_{i=1}^{5} (2i - 1)$?
N: 25
= $1 + 3 + 5 + 7 + 9$. La somma dei primi 5 dispari è il quadrato di 5.

D: Con $X = \{a, b, c\}$, quanto vale $|a^3bc^2|$?
N: 6
= $3 + 1 + 2$: si contano i posti, con le ripetizioni.

D: Quale affermazione sulla stringa vuota $\lambda$ è vera, per $X = \{a, b\}$?
+ $\lambda \in X^*$ e $\lambda \notin X^+$
- $\lambda \in X$
- $\lambda = \varnothing$
- $|\lambda| = 1$
- $\lambda \in X^+$ e $\lambda \notin X^*$
= $X^*$ contiene tutte le stringhe, vuota compresa; $X^+$ solo quelle non vuote. La più insidiosa è $\lambda \in X$: $\lambda$ è una stringa, non un simbolo dell'alfabeto.
```

## Esercizi

::: esercizio base Riscaldamento: frecce che partono e che arrivano
Per $f = \{(1, c), (2, a), (3, c), (4, b)\}$ da $\{1, 2, 3, 4\}$ a $\{a, b, c\}$: è una funzione? È iniettiva? È suriettiva? Ha un'inversa?
::: soluzione
È una funzione: ogni elemento da 1 a 4 compare a sinistra una volta. Non è iniettiva: in $c$ arrivano due frecce, da 1 e da 3. È suriettiva: $a$, $b$ e $c$ sono raggiunti. Non ha un'inversa, perché non è biiettiva: girando le frecce, da $c$ ne partirebbero due.
:::

::: esercizio base Riscaldamento: una sequenza di lettere (libro, §3.2, esercizi 1–3)
Per la sequenza $s$ definita da $c, d, d, c, d, c$, con l'indice che parte da 1: quanto valgono $s_1$ e $s_4$? Come si scrive $s$ come stringa?
::: soluzione
$s_1 = c$ e $s_4 = c$. Come stringa: $cddcdc$. Sono le risposte ufficiali del libro. La lunghezza della stringa è 6.
:::

::: esercizio medio Le quattro parole (sul modello degli esercizi 5–9)
Per ognuna di' se è crescente, decrescente, non crescente, non decrescente: (a) $s_n = n^2$ per $n \ge 1$; (b) $s_n = n^2$ per tutti gli interi $n$; (c) $s_n = 5$ per $n \ge 1$; (d) $s_n = 10 - 2n$ per $n \ge 1$; (e) una sequenza con un solo indice nel dominio.
::: soluzione
**(a)** Crescente, e quindi non decrescente: 1, 4, 9, 16. **(b)** Nessuna delle quattro: da $n = -2$ a $n = 0$ scende (4, 1, 0), poi sale. **(c)** Non crescente e non decrescente. **(d)** Decrescente, e quindi non crescente: 8, 6, 4, 2. **(e)** Tutte e quattro: le definizioni parlano di coppie $i < j$ nel dominio, e con un indice solo non ce ne sono, quindi sono vere a vuoto. Le risposte ufficiali del libro agli esercizi proposti dicono «tutte e quattro» per il 5 e «nessuna» per l'8: i casi (e) e (b) mostrano come può succedere. I testi di quei due esercizi non li ho.
:::

::: esercizio medio Funzione caratteristica dell'intersezione (libro, §3.1)
Dimostra che $C_{X \cap Y}(x) = C_X(x) \cdot C_Y(x)$ per ogni $x \in U$.
::: soluzione
Due casi. **$x$ sta in $X \cap Y$.** Allora sta in $X$ e in $Y$: a sinistra 1, a destra $1 \cdot 1$. **$x$ non sta in $X \cap Y$.** A sinistra 0. E $x$ manca da almeno uno dei due insiemi, quindi almeno uno dei due fattori è 0, e il prodotto è 0. È la soluzione ufficiale del libro.
:::

::: esercizio esame Una relazione, come nel quiz delle simulazioni
Per $S = \{(1,2), (2,3), (3,1), (4,4)\}$ sull'insieme $\{1, 2, 3, 4\}$: è totale? Individua una funzione? È iniettiva? È suriettiva? È una biiezione? Se sì, scrivi l'inversa.
::: soluzione
Da ogni elemento parte una coppia sola: è totale e **individua una funzione**. In ogni elemento ne arriva una sola (in 2 da 1, in 3 da 2, in 1 da 3, in 4 da 4): è iniettiva e suriettiva, quindi una **biiezione**. L'inversa: $\{(2,1), (3,2), (1,3), (4,4)\}$.
:::

::: esercizio difficile Cambio di indice e sottosequenza
(a) Riscrivi $\sum_{i=1}^{n} i \cdot 2^{n-i}$ con l'indice $j = i - 1$. Controlla con $n = 3$. (b) Per $s_n = 2n - 1$ e $n_k = 2k - 1$, scrivi i primi sette elementi di $s$ e della sottosequenza.
::: soluzione
**(a)** $i = j + 1$; gli estremi diventano 0 e $n - 1$; l'esponente $n - i$ diventa $n - j - 1$. Risultato: $\sum_{j=0}^{n-1} (j + 1) \cdot 2^{n-j-1}$. Con $n = 3$ la prima dà $1 \cdot 4 + 2 \cdot 2 + 3 \cdot 1 = 11$, e la seconda gli stessi tre addendi. **(b)** $s$: 1, 3, 5, 7, 9, 11, 13. Sottosequenza: 1, 5, 9, 13, 17, 21, 25, con $s_{n_k} = 4k - 3$. Sono le risposte ufficiali del libro.
:::

## Domande di ripasso

::: domanda Che cos'è una funzione da $X$ a $Y$, secondo il libro?
Un sottoinsieme di $X \times Y$ in cui per ogni $x$ di $X$ c'è esattamente una coppia che comincia con $x$.
:::

::: domanda Che differenza c'è tra iniettiva e suriettiva?
Iniettiva: in ogni elemento del codominio arriva al massimo una freccia. Suriettiva: ne arriva almeno una.
:::

::: domanda Quando esiste la funzione inversa, e come si ottiene?
Quando la funzione è biiettiva. Si scambiano i due elementi di ogni coppia.
:::

::: domanda Quando la funzione caratteristica dell'unione è la somma delle due?
Solo quando i due insiemi sono disgiunti. In generale bisogna sottrarre il prodotto.
:::

::: domanda Che cos'è una sequenza?
Una funzione il cui dominio è un insieme di interi. $s_n$ è l'elemento di indice $n$.
:::

::: domanda Che differenza c'è tra crescente e non decrescente?
Crescente chiede $<$ tra ogni elemento e i successivi; non decrescente chiede $\le$, e permette valori uguali.
:::

::: domanda Che cosa sono $\lambda$, $X^*$ e $X^+$?
La stringa vuota; l'insieme di tutte le stringhe su $X$; l'insieme delle stringhe non vuote.
:::

## Glossario

```glossario
Funzione | Insieme di coppie in cui ogni elemento del dominio compare a sinistra esattamente una volta.
Dominio, codominio, immagine | Da dove partono le frecce; dove possono arrivare; dove arrivano davvero.
Iniettiva (one-to-one) | Funzione in cui elementi diversi hanno immagini diverse.
Suriettiva (onto) | Funzione che raggiunge tutto il codominio.
Biiettiva (bijection) | Iniettiva e suriettiva.
Funzione inversa | Per una biiezione, la funzione che si ottiene scambiando le coppie.
Funzione caratteristica | Funzione che vale 1 sugli elementi di un insieme e 0 sugli altri.
Sequenza | Funzione che ha per dominio un insieme di interi.
Indice | Il numero del posto in una sequenza.
Sottosequenza | Sequenza ottenuta tenendo alcuni elementi nello stesso ordine.
Stringa | Sequenza finita di elementi di un insieme, scritta senza virgole.
Stringa vuota | La stringa senza elementi, di lunghezza 0. Si scrive lambda.
Lunghezza | Il numero di elementi di una stringa.
```

## Checklist

```checklist
- So dire quando un insieme di coppie è una funzione.
- So distinguere dominio, codominio e immagine.
- So riconoscere una funzione iniettiva, suriettiva, biiettiva, da un disegno e da una formula.
- So scrivere l'inversa di una biiezione e dire perché le altre funzioni non ce l'hanno.
- So calcolare la funzione caratteristica di un insieme, dell'intersezione e dell'unione.
- So dimostrare quando la funzione caratteristica dell'unione è la somma.
- So scrivere i primi elementi di una sequenza data con una formula.
- So dire se una sequenza è crescente, decrescente, non crescente, non decrescente.
- So ricavare una sottosequenza.
- So calcolare somme e prodotti scritti con sigma e pi greco, e cambiare l'indice.
- So che cosa sono una stringa, la stringa vuota, X star e X più.
- So calcolare la lunghezza di una stringa.
```

## Fonti

- Diario delle lezioni del canale B (Berardi), lezione 23 del docente, 20/11/2026: ripasso delle funzioni, funzione caratteristica e unione (Problem-Solving Corner del §3.1), §3.2 dagli esempi 3.2.1–3.2.19 (omessi 3.2.20–22) e stringhe dalla definizione 3.2.23 all'esempio 3.2.25; esercizi 5–9 di pagina 137.
- Johnsonbaugh, parte 2 del libro di testo, §3.1 e §3.2: risposte ufficiali alle domande di ripasso e agli esercizi (appendice «Soluzioni di altri esercizi del testo», Moodle del canale A, aperto agli ospiti). Da lì vengono le definizioni, l'esempio $\{(a,1), (b,3), (c,0)\}$, le soluzioni sulle funzioni caratteristiche di intersezione e differenza, le risposte agli esercizi 1–3, 5 e 8 del §3.2 e la sottosequenza $4k - 3$.
- Simulazioni d'esame 2023/24, quiz sulle proprietà di una relazione (testo dalla trascrizione delle schermate, con le risposte segnate da uno studente, ricontrollate).
- Per le funzioni in Matematica Discreta: lezioni [D04](../MDAG/D04_funzioni_immagini_controimmagini.html) e [D05](../MDAG/D05_composizione_funzioni_inverse.html).
