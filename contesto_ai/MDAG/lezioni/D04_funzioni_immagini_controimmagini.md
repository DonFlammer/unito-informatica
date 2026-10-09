---
corso: MDAG
modulo: MD
lezione: D04
titolo: Funzioni, immagini e controimmagini
data: 2026-10-09
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D04
descrizione: >-
  Appunti della lezione D04 di Matematica Discreta (MDAG, parte 1, canali A, B e C): funzioni come insiemi di coppie,
  dominio, codominio e grafico, esempi notevoli (identità, costanti, proiezioni, successioni, funzione quoziente),
  restrizione, buona definizione, immagine e controimmagine, funzioni suriettive, iniettive e biettive, con le domande
  vere degli appelli ed esercizi svolti.
lede: >-
  Una funzione è una regola che a ogni elemento di un insieme fa corrispondere un elemento di un altro, uno e uno solo.
  Qui la costruisci con le coppie della lezione D03, impari a leggerla su una tabella di pallini e a riconoscere le
  funzioni iniettive, suriettive e biettive, che tornano in tutto il resto del corso.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 2, pp. 17–23, esercizi pp. 34–35
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 2 «Funzioni», pp. 17–23, ed esercizi 2.1–2.8;
  diario delle lezioni del canale B 2025/26; quiz degli appelli di Matematica Discreta 2025–2026
appunti_html: appunti/MDAG/D04_funzioni_immagini_controimmagini.html
genera_html: true
---

## In breve

- Una **funzione** fa corrispondere a **ogni** elemento di un insieme di partenza, il **dominio**, **uno e un solo** elemento di un insieme d'arrivo, il **codominio**. Si scrive $f \colon A \to B$.
- Con le coppie della lezione D03 una funzione è un insieme di coppie, il **grafico**: sulla tabella dei pallini c'è **un pallino in ogni colonna**, né zero né due.
- L'**immagine** di $f$ è l'insieme dei valori che la funzione prende davvero. Può essere più piccola del codominio.
- La **controimmagine** di un elemento $b$ è l'insieme degli elementi che finiscono in $b$. Può essere vuota.
- **Suriettiva**: ogni elemento del codominio viene raggiunto. Sulla tabella, ogni riga ha almeno un pallino.
- **Iniettiva**: due elementi diversi finiscono sempre in posti diversi. Sulla tabella, ogni riga ha al massimo un pallino.
- **Biettiva**: iniettiva e suriettiva insieme. Ogni riga ha esattamente un pallino: è un abbinamento perfetto tra i due insiemi.
- All'esame la **domanda 3 del quiz** è sempre sulle funzioni.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di venerdì 09/10/2026 con Andrea Mori. Quando scrivo gli argomenti di questa lezione non sono ancora sul Moodle del canale B: li ho ricostruiti dall'ordine del libro, che dopo le relazioni passa al capitolo 2, e dal diario dell'anno scorso, in cui la quarta lezione era proprio «funzioni, immagine e controimmagine, funzioni iniettive, suriettive e biettive». La composizione di funzioni e le funzioni invertibili (pp. 23–29) erano la lezione dopo. Quando il docente pubblica gli argomenti, controllo e aggiorno.

## Che cos'è una funzione (pp. 17–18)

Pensa alla mensa. Quattro studenti, Anna, Bruno, Carla e Dario, scelgono il primo tra pasta, riso, zuppa e gnocchi. Le regole sono due:

- **tutti** mangiano: ogni studente sceglie un piatto;
- ognuno sceglie **un solo** piatto: niente doppie porzioni.

Più studenti possono scegliere lo stesso piatto, e qualche piatto può restare intatto. Una scelta così è una **funzione** dall'insieme degli studenti all'insieme dei piatti.

> [!IDEA]
> Una funzione è una regola che a ogni elemento del primo insieme fa corrispondere un elemento del secondo, uno e uno solo.

Ecco una scelta possibile:

| Studente | Piatto |
|---|---|
| Anna | pasta |
| Bruno | pasta |
| Carla | zuppa |
| Dario | riso |

Se la funzione si chiama $f$, la scelta di Anna si scrive $f(\text{Anna}) = \text{pasta}$. Si legge «effe di Anna è pasta». Il piatto si chiama il **valore** di $f$ in Anna, o l'**immagine** di Anna.

### La funzione come insieme di coppie

La regola «a ogni studente il suo piatto» si può scrivere senza parole, con le coppie della lezione D03. Ogni riga della tabella è una coppia (studente, piatto):

$$\Gamma = \{(\text{Anna}, \text{pasta}), (\text{Bruno}, \text{pasta}), (\text{Carla}, \text{zuppa}), (\text{Dario}, \text{riso})\}$$

$\Gamma$ si legge «gamma maiuscola». È un sottoinsieme del prodotto cartesiano studenti × piatti: un sacchetto di coppie, come le relazioni della lezione D03. Il libro parte proprio da qui.

> [!DEF] 2.1 · Funzione
> Siano $A$ e $B$ insiemi non vuoti. Una funzione $f$ con **dominio** $A$ e **codominio** $B$ è il dato di un sottoinsieme $\Gamma \subset A \times B$ tale che
> $$\text{per ogni } a \in A \text{ esiste un unico elemento } b \in B \text{ tale che } (a, b) \in \Gamma.$$
> Il sottoinsieme $\Gamma \subset A \times B$ è detto **grafico** della funzione.

**Come si legge.**

- Il **dominio** $A$ è l'insieme di partenza: gli studenti. Il **codominio** $B$ è l'insieme d'arrivo: i piatti.
- Il **grafico** $\Gamma$ è il sacchetto delle coppie (elemento, suo valore).
- «Per ogni $a$ esiste un unico $b$» sono le due regole della mensa: ogni elemento ha un valore (esiste), e uno solo (unico).
- La scrittura $f \colon A \to B$ si legge «effe da A a B».
- La scrittura $f(a) = b$ vuol dire che la coppia $(a, b)$ sta nel grafico.
- Il libro avverte che una funzione si chiama anche **mappa**, **applicazione** o **freccia**.

### Leggere una funzione sulla tabella dei pallini (p. 18)

Il libro disegna i grafici come le relazioni della lezione D03: una griglia con il dominio in orizzontale e il codominio in verticale, e un pallino in ogni casella che sta nel grafico. La mensa diventa così:

| | Anna | Bruno | Carla | Dario |
|---|:-:|:-:|:-:|:-:|
| **gnocchi** | | | | |
| **zuppa** | | | ● | |
| **riso** | | | | ● |
| **pasta** | ● | ● | | |

Le due regole si controllano a colpo d'occhio, colonna per colonna:

- **ogni colonna ha un pallino**: ogni studente ha il suo piatto;
- **nessuna colonna ne ha due**: nessuno ha due piatti.

Le righe invece possono avere zero pallini (gli gnocchi, che nessuno ha scelto) o più pallini (la pasta).

L'esempio del libro, con $A = \{a, b, c\}$ e $B = \{w, x, y, z\}$, ha tre sacchetti di coppie:

- $\Gamma_1 = \{(a, x), (b, x), (c, z)\}$ è una funzione: $f(a) = x$, $f(b) = x$, $f(c) = z$;
- $\Gamma_2 = \{(b, y), (c, w)\}$ **non** è una funzione: la colonna di $a$ è vuota, $f(a)$ non è definito;
- $\Gamma_3 = \{(a, y), (b, w), (b, z), (c, x)\}$ **non** è una funzione: la colonna di $b$ ha due pallini, $f(b)$ non è unico.

> [!TRAPPOLA] Le righe non contano
> Per decidere se è una funzione si guardano **solo le colonne**, cioè gli elementi del dominio. Una riga piena di pallini o una riga vuota vanno benissimo: vuol dire che un piatto l'hanno scelto in tanti, o nessuno.

### Due funzioni uguali (p. 18)

Due funzioni sono la **stessa funzione** quando hanno lo stesso dominio, lo stesso codominio e lo stesso grafico. Conta che cosa fanno, non come sono scritte. L'esempio del libro: sul dominio $\{0, 1, 2\}$ le due regole

$$f(x) = 3x^2 - 1 \qquad g(x) = x^3 + 2x - 1$$

sembrano diverse, ma danno gli stessi valori: $f(0) = g(0) = -1$, $f(1) = g(1) = 2$, $f(2) = g(2) = 11$. Hanno lo stesso grafico, quindi sono la stessa funzione.

> [!NOTA] Non è la funzione delle superiori
> Alle superiori una funzione era una formula, come $f(x) = \frac{1}{x}$, e il primo passo era trovare il «dominio di definizione». Qui il dominio fa parte della funzione e va dichiarato all'inizio. Il libro fa proprio questo esempio: «uno diviso x» non è una funzione dai reali ai reali, perché in 0 non dà niente. È una funzione da $\R \setminus \{0\}$ a $\R$.

::: prova Con $A = \{1, 2, 3\}$ e $B = \{a, b\}$, quali di questi sacchetti sono funzioni da $A$ a $B$? (a) $\{(1, a), (2, a), (3, a)\}$; (b) $\{(1, a), (2, b)\}$; (c) $\{(1, a), (1, b), (2, b), (3, a)\}$.
(a) sì: ogni numero ha un solo valore, anche se è sempre $a$. (b) no: manca 3. (c) no: 1 ha due valori.
:::

> [!RICORDA]
> - Funzione: a **ogni** elemento del dominio, **uno e un solo** elemento del codominio.
> - Sulla tabella: un pallino in ogni colonna. Le righe possono avere quanti pallini vogliono.

## Funzioni che tornano sempre (pp. 19–20)

Alcune funzioni sono così comuni che hanno un nome. Il libro ne elenca sei; eccole con un esempio ciascuna.

1. **L'identità** su $A$, che si scrive $\operatorname{id}_A$: lascia ogni elemento dov'è, $\operatorname{id}_A(a) = a$. Il grafico è la diagonale della lezione D03.
2. **La funzione costante** di valore $\beta$: manda tutto nello stesso elemento $\beta$ del codominio. È la mensa in cui tutti scelgono la pasta. Il grafico è $A \times \{\beta\}$: una riga piena.
3. **Le proiezioni** di un prodotto cartesiano: da una coppia tengono solo un pezzo. $p_1(a, b) = a$ tiene il primo, $p_2(a, b) = b$ tiene il secondo. Per esempio, dalla casella B3 della battaglia navale $p_1$ tiene la colonna B.
4. **Le successioni**: una lista infinita di elementi di $B$ è una funzione dai naturali a $B$. Il primo elemento della lista è il valore in 0, il secondo il valore in 1, e così via. Per esempio i quadrati $0, 1, 4, 9, \dots$ sono la funzione $s(n) = n^2$.
5. **La funzione quoziente**: prendi un insieme diviso in cassetti; questa funzione manda ogni elemento nel suo cassetto, cioè nella sua classe (lezione D03). Con la congruenza modulo 3 manda 7 in $[1]$.
6. **Il prodotto di due funzioni**: con due funzioni $f$ e $g$ si costruisce $f \times g$, che lavora sulle coppie. Manda la coppia $(a, b)$ nella coppia $(f(a), g(b))$.

### Restringere il dominio (p. 19)

Una funzione si può usare anche solo su una parte del dominio. Se alla mensa guardi solo Anna e Carla, hai una funzione più piccola, con le stesse scelte. Il libro le dà un nome.

> [!DEF] 2.2 · Restrizione
> Sia $f \colon A \to B$ una funzione e sia $S \subset A$ un sottoinsieme di $A$. Si dice **restrizione** di $f$ a $S$ la funzione
> $$f_{|S} \colon S \to B, \qquad f_{|S}(s) = f(s) \text{ per ogni } s \in S.$$

**Come si legge.** $f_{|S}$ si legge «effe ristretta a esse». Fa le stesse cose di $f$, ma accetta solo gli elementi di $S$. Sulla tabella, si tengono solo le colonne di $S$.

### Quando una regola è «ben definita» (p. 20)

Il libro dice che il contenuto di questa nota è molto importante: serve con le classi della lezione D03.

A volte una funzione parte da un insieme di cassetti, e il valore di un cassetto si calcola usando un suo elemento, il **rappresentante**. Funziona solo se il risultato non dipende da quale elemento del cassetto scegli. In quel caso la funzione si chiama **ben definita**.

> [!ESEMPIO] Due regole sulle classi (Nota 2.3)
> **Una regola che funziona.** Gli interi divisi in pari e dispari hanno due cassetti, $[0]$ e $[1]$. La regola «$f([x]) = (-1)^x$» dà 1 per qualunque pari e $-1$ per qualunque dispari. Il risultato dipende solo dal cassetto: $f$ è ben definita.
>
> **Una regola che non funziona.** Dividi i naturali in cassetti secondo il numero di cifre: $E_1$ sono i numeri con una cifra, $E_2$ quelli con due, e così via. La regola «$f([x]) = [2x]$» chiede il cassetto del doppio. Ma $E_1 = [4] = [7]$, e $[2 \cdot 4] = [8] = E_1$, mentre $[2 \cdot 7] = [14] = E_2$. Lo stesso cassetto darebbe due risultati: $f$ **non** è ben definita.

Il controllo della buona definizione torna nei **problemi d'esame** sulle classi di resto: «dire se la funzione è ben definita» è una richiesta frequente nella seconda parte del corso.

::: prova Che cosa fa la proiezione $p_2$ sulla coppia $(\text{Carla}, \text{zuppa})$? E la funzione costante di valore 5 sul numero 12?
$p_2(\text{Carla}, \text{zuppa}) = \text{zuppa}$: tiene il secondo pezzo. La costante dà 5, qualunque sia l'elemento.
:::

> [!RICORDA]
> - Identità, costanti, proiezioni, successioni, funzione quoziente: sono esempi da riconoscere al volo.
> - Una regola sulle classi è ben definita quando il risultato non dipende dal rappresentante scelto.

## Dove si arriva: l'immagine (pp. 20–21)

Torna alla mensa. Sono stati scelti pasta, zuppa e riso. Gli gnocchi, che erano nel menu, non li ha presi nessuno. L'insieme dei piatti scelti davvero, $\{\text{pasta}, \text{zuppa}, \text{riso}\}$, si chiama **immagine** della funzione. Il menu intero è il codominio.

> [!IDEA]
> Il codominio è quello che una funzione **potrebbe** dare; l'immagine è quello che **dà davvero**.

Il libro definisce anche l'immagine di una parte del dominio: per esempio, che cosa hanno scelto le sole ragazze, Anna e Carla? La pasta e la zuppa.

> [!DEF] 2.4 · Immagine
> Sia $f \colon A \to B$ una funzione e sia $S \subset A$ un sottoinsieme del dominio. Si dice **immagine di $S$ tramite $f$** il sottoinsieme $f(S)$ del codominio $B$ costituito dalle immagini degli elementi di $S$, cioè
> $$f(S) = \{f(s) \text{ tali che } s \in S\} \subset B.$$
> Quando $S = A$, l'immagine $f(S)$ si chiama semplicemente **immagine di $f$** e si denota $\operatorname{Im}(f)$, cioè $\operatorname{Im}(f) = f(A)$.

**Come si legge.** $f(S)$ è l'insieme dei valori che la funzione dà sugli elementi di $S$. $\operatorname{Im}(f)$, «immagine di effe», è l'insieme di tutti i valori che dà. Sulla tabella sono le **righe con almeno un pallino**. Nel libro, nella prima riga della definizione, è stampato $f(B)$ al posto di $f(S)$: è un refuso, la formula subito sotto è quella giusta.

Un modo pratico di pensarla, che il libro suggerisce a p. 21: $b$ sta nell'immagine quando l'**equazione** $f(a) = b$, con $a$ incognita, ha almeno una soluzione.

> [!ESEMPIO] Le immagini degli esempi del libro (p. 21)
> - $f \colon \Z \to \Z$, $f(n) = 2n + 1$. I valori sono $\dots, -3, -1, 1, 3, 5, \dots$: tutti i dispari, e ogni dispari $m = 2k + 1$ si ottiene con $n = k$. Quindi $\operatorname{Im}(f)$ sono i dispari, che il libro scrive $2\Z + 1$.
> - $f \colon \R \to \R$, $f(x) = x^2$. I quadrati non sono mai negativi, e ogni $y \ge 0$ è il quadrato di $\sqrt y$. Quindi l'immagine sono i reali maggiori o uguali a 0.
> - La prima proiezione $p_1 \colon A \times B \to A$, con $B$ non vuoto: ogni $a$ è il primo pezzo di qualche coppia $(a, b)$. L'immagine è tutto $A$.

::: prova Alla mensa, qual è l'immagine dell'insieme $\{\text{Bruno}, \text{Dario}\}$? E l'immagine di $f(n) = 2n$ da $\Z$ a $\Z$?
$f(\{\text{Bruno}, \text{Dario}\}) = \{\text{pasta}, \text{riso}\}$. L'immagine di $2n$ sono i numeri pari.
:::

> [!RICORDA]
> - L'immagine è l'insieme dei valori raggiunti: sulla tabella, le righe con almeno un pallino.
> - $b$ sta nell'immagine quando l'equazione $f(a) = b$ ha almeno una soluzione.

## Chi arriva lì: la controimmagine (pp. 21–22)

Adesso la domanda al contrario. Il cuoco vuole sapere **chi** ha scelto la pasta: Anna e Bruno. E gli gnocchi? Nessuno. L'insieme degli studenti che hanno scelto un certo piatto si chiama **controimmagine** di quel piatto.

> [!IDEA]
> L'immagine va avanti: dagli studenti ai piatti. La controimmagine torna indietro: da un piatto agli studenti che l'hanno scelto.

Il libro la scrive così.

> [!DEF] 2.7 · Controimmagine
> Sia $f \colon A \to B$ una funzione e sia $b \in B$. Si dice **controimmagine** di $b$ tramite $f$ il sottoinsieme $f^{-1}(b)$ degli elementi del dominio $A$ che hanno $b$ come immagine, cioè
> $$f^{-1}(b) = \{a \in A \text{ tali che } f(a) = b\}.$$
> Più in generale, dato un sottoinsieme $T \subset B$, si dice controimmagine di $T$ tramite $f$ il sottoinsieme $f^{-1}(T)$ del dominio costituito dalle controimmagini degli elementi di $T$, cioè
> $$f^{-1}(T) = \{a \in A \text{ tali che } f(a) \in T\}.$$

**Come si legge.**

- $f^{-1}(b)$ si legge «effe alla meno uno di bi», o «controimmagine di bi». È un **insieme** di elementi del dominio: le soluzioni dell'equazione $f(a) = b$.
- Sulla tabella: la controimmagine di $b$ sono le **colonne dei pallini nella riga di $b$**.
- $f^{-1}(T)$ raccoglie tutti quelli che finiscono da qualche parte dentro $T$.

Alla mensa: $f^{-1}(\text{pasta}) = \{\text{Anna}, \text{Bruno}\}$, $f^{-1}(\text{zuppa}) = \{\text{Carla}\}$, $f^{-1}(\text{gnocchi}) = \emptyset$. E $f^{-1}(\{\text{riso}, \text{zuppa}\}) = \{\text{Carla}, \text{Dario}\}$.

> [!TRAPPOLA] $f^{-1}$ non è «uno diviso $f$»
> Il simbolo $f^{-1}(b)$ non vuol dire $\frac{1}{f(b)}$, e non vuol dire che esista una funzione che torna indietro. È solo il nome di un insieme, che esiste per ogni funzione. Con $f(x) = x^2$ da $\R$ a $\R$, $f^{-1}(4) = \{2, -2\}$, mentre $\frac{1}{f(4)} = \frac{1}{16}$.

### Vuota sì, vuota no (Nota 2.8)

C'è una differenza tra le due operazioni. L'immagine di un insieme non vuoto non è mai vuota: ogni elemento porta con sé almeno il suo valore. La controimmagine invece può essere vuota anche di un insieme pieno: con $f(x) = x^2$, $f^{-1}(-1) = \emptyset$, perché nessun quadrato è negativo.

> [!ESEMPIO] Controimmagini degli esempi del libro (p. 22)
> - **Funzione costante** di valore $\beta$: la controimmagine di $T$ è tutto $A$ se $\beta$ sta in $T$, ed è vuota se non ci sta.
> - **Seconda proiezione** $p_2 \colon A \times B \to B$: $p_2^{-1}(b) = A \times \{b\}$, tutte le coppie con secondo pezzo $b$.
> - **Valore assoluto** $f(x) = \lvert x \rvert$ da $\R$ a $\R$: $f^{-1}(x) = \{x, -x\}$ se $x \ge 0$, e $f^{-1}(x) = \emptyset$ se $x < 0$.

::: prova Con $f \colon \Z \to \Z$, $f(n) = n^2$, calcola $f^{-1}(9)$, $f^{-1}(0)$, $f^{-1}(5)$ e $f^{-1}(\{1, 4\})$.
$f^{-1}(9) = \{3, -3\}$; $f^{-1}(0) = \{0\}$; $f^{-1}(5) = \emptyset$, perché 5 non è un quadrato; $f^{-1}(\{1, 4\}) = \{1, -1, 2, -2\}$.
:::

> [!RICORDA]
> - Controimmagine di $b$: gli elementi del dominio che finiscono in $b$, cioè le soluzioni di $f(a) = b$.
> - Può essere vuota; $f^{-1}$ è solo un nome, non una divisione.

## Suriettive, iniettive, biettive (pp. 20–23)

Alla mensa possono succedere due cose spiacevoli: un piatto resta intatto, oppure due studenti si contendono lo stesso piatto. Le due proprietà che le escludono hanno un nome.

- **Suriettiva**: nessun piatto resta intatto. Ogni elemento del codominio viene scelto da qualcuno.
- **Iniettiva**: nessun piatto è conteso. Studenti diversi scelgono piatti diversi.

Sulla tabella dei pallini, dove le colonne hanno sempre un pallino ciascuna, le due proprietà si leggono sulle **righe**:

| Proprietà | Sulle righe della tabella | Alla mensa |
|---|---|---|
| suriettiva | ogni riga ha **almeno** un pallino | nessun piatto intatto |
| iniettiva | ogni riga ha **al massimo** un pallino | nessun piatto conteso |
| biettiva | ogni riga ha **esattamente** un pallino | ognuno ha il suo piatto, e nessun piatto avanza |

La mensa di prima non è né suriettiva (gli gnocchi) né iniettiva (la pasta di Anna e Bruno).

### Suriettiva

Il libro la definisce con l'immagine.

> [!DEF] 2.5 · Funzione suriettiva
> Una funzione $f \colon A \to B$ si dice **suriettiva** se $\operatorname{Im}(f) = B$.

**Come si legge.** L'immagine è tutto il codominio: ogni $b$ è il valore di qualcuno. Per dimostrarlo si prende un elemento qualsiasi del codominio e si trova chi ci arriva. Per smentirlo basta un $b$ che non viene mai raggiunto.

> [!ESEMPIO] Suriettive e no, dal libro (p. 21)
> - $f(n) = 2n + 1$ da $\Z$ a $\Z$: **non** suriettiva. Il 2 non è mai raggiunto, perché i valori sono tutti dispari.
> - $f(x) = x^2$ da $\R$ a $\R$: **non** suriettiva. $-1$ non è il quadrato di nessun numero reale.
> - La prima proiezione $p_1 \colon A \times B \to A$, con $B$ non vuoto: suriettiva. Ogni $a$ è $p_1(a, b)$ per qualunque $b$.
> - La funzione quoziente: suriettiva. Ogni cassetto contiene almeno un elemento, che ci finisce dentro.

> [!NOTA] Restringere il codominio (Nota 2.6)
> Una funzione non suriettiva diventa suriettiva se come codominio prendi la sua immagine. Il quadrato non è suriettivo dai reali ai reali, ma lo è dai reali ai reali maggiori o uguali a 0. Il grafico è lo stesso: cambia solo il menu, da cui togli i piatti che nessuno sceglie.

### Iniettiva

Il libro la definisce così.

> [!DEF] 2.9 · Funzione iniettiva
> Una funzione $f \colon A \to B$ si dice **iniettiva** se per ogni scelta di $a_1, a_2 \in A$ con $a_1 \neq a_2$ si ha $f(a_1) \neq f(a_2)$.

**Come si legge.** Elementi diversi hanno valori diversi: nessun valore viene preso due volte. Per smentirlo basta trovare **due elementi diversi con lo stesso valore**. Per dimostrarlo si usa quasi sempre il ragionamento al contrario: se $f(a_1) = f(a_2)$, si fanno i conti e si arriva a $a_1 = a_2$.

> [!ESEMPIO] Iniettive e no, dal libro (p. 22)
> - $f(n) = 2n + 1$ da $\Z$ a $\Z$: iniettiva. Se $2m + 1 = 2n + 1$, togliendo 1 e dividendo per 2 viene $m = n$.
> - $f(x) = x^2$ da $\R$ a $\R$: **non** iniettiva. $f(1) = f(-1) = 1$.
> - La prima proiezione $p_1 \colon A \times B \to A$: iniettiva solo se $B$ ha un solo elemento. Se $B$ contiene $b_1$ e $b_2$ diversi, le coppie $(a, b_1)$ e $(a, b_2)$ hanno lo stesso primo pezzo.

> [!NOTA] Restringere il dominio (Nota 2.10)
> Una funzione non iniettiva può diventarlo se togli una parte del dominio. $x^2$ non è iniettiva sui reali, ma lo è sui reali positivi: due numeri positivi diversi hanno quadrati diversi.

### Tutto con le controimmagini

Le due proprietà si possono dire con le controimmagini, cioè guardando una riga alla volta. È la Proposizione 2.11 del libro.

> [!PROP] 2.11
> Sia $f \colon A \to B$ una funzione. Allora:
> 1. $f$ è suriettiva se e soltanto se $f^{-1}(b) \neq \emptyset$ per ogni $b \in B$;
> 2. $f$ è iniettiva se e soltanto se $\lvert f^{-1}(b) \rvert \le 1$ per ogni $b$.

**Come si legge.** Suriettiva: ogni controimmagine ha almeno un elemento. Iniettiva: ogni controimmagine ha al massimo un elemento. Sono le righe della tabella, scritte con i simboli.

> [!DIM] della Proposizione 2.11 (p. 23)
> 1. Dire che $f^{-1}(b)$ non è vuota vuol dire che c'è un $a$ con $f(a) = b$, cioè che $b$ sta nell'immagine. Se succede per ogni $b$, l'immagine è tutto $B$.
> 2. Il libro dimostra la frase al contrario: $f$ non è iniettiva esattamente quando qualche controimmagine ha almeno 2 elementi. Non essere iniettiva vuol dire che ci sono $a_1 \neq a_2$ con $f(a_1) = f(a_2)$. Chiamato $b$ quel valore comune, $a_1$ e $a_2$ stanno tutti e due in $f^{-1}(b)$, che quindi ha almeno 2 elementi. E viceversa.

### Biettiva

Quando le due cose succedono insieme, la funzione è un abbinamento perfetto: ogni studente il suo piatto, ogni piatto il suo studente.

> [!DEF] 2.12 · Funzione biettiva
> Una funzione $f \colon A \to B$ si dice **biettiva** se è contemporaneamente iniettiva e suriettiva, ovvero se per ogni $b \in B$ esiste ed è unico un elemento $a \in A$ tale che $f(a) = b$. Una **biezione** è una funzione biettiva.

**Come si legge.** Ogni elemento del codominio ha **una e una sola** controimmagine. Sulla tabella: un pallino in ogni colonna e un pallino in ogni riga. Si chiama anche «biiettiva» o «corrispondenza biunivoca».

> [!ESEMPIO] Biezioni, dal libro (p. 23)
> - L'identità $\operatorname{id}_A$ è sempre biettiva.
> - $f(x) = x^2$ non è né iniettiva né suriettiva da $\R$ a $\R$. Diventa biettiva restringendo il dominio ai positivi e prendendo come codominio i positivi: ogni $y > 0$ è il quadrato di un solo positivo, $\sqrt y$.
> - Lo scambio $f(a, b) = (b, a)$ da $A \times B$ a $B \times A$ è una biezione: ogni coppia $(b, a)$ arriva da una sola coppia, $(a, b)$.

> [!OLTRE] Contare aiuta
> Con insiemi finiti c'è un controllo veloce. Se il dominio ha **più** elementi del codominio, la funzione non può essere iniettiva: qualche piatto finisce per forza a due studenti. Se ne ha **meno**, non può essere suriettiva. Una biezione tra insiemi finiti c'è solo se hanno lo stesso numero di elementi. È il principio dei cassetti, che il corso tratta con la combinatoria: negli esami lo usano spesso per dire che un omomorfismo «non può essere iniettivo perché il dominio ha più elementi del codominio».

::: prova Da $\{1, 2, 3\}$ a $\{a, b, c\}$ prendi $f(1) = b$, $f(2) = c$, $f(3) = a$. È biettiva? E $g(1) = a$, $g(2) = a$, $g(3) = b$?
$f$ è biettiva: ogni lettera è presa una volta. $g$ non è iniettiva ($a$ due volte) e non è suriettiva ($c$ mai).
:::

> [!RICORDA]
> - Suriettiva: ogni riga almeno un pallino; ogni controimmagine non vuota.
> - Iniettiva: ogni riga al massimo un pallino; per smentirla bastano due elementi diversi con lo stesso valore.
> - Biettiva: tutte e due; ogni controimmagine ha esattamente un elemento.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $f \colon A \to B$ | «$f$ da $A$ a $B$» | una funzione con dominio $A$ e codominio $B$ | $f \colon \Z \to \Z$ |
| $f(a) = b$ | «$f$ di $a$ è $b$» | la coppia $(a, b)$ sta nel grafico | $f(2) = 5$ |
| $\Gamma$ | «gamma maiuscola» | il grafico, l'insieme delle coppie $(a, f(a))$ | $\{(1, 3), (2, 5)\}$ |
| $\operatorname{id}_A$ | «identità su $A$» | la funzione che lascia tutto com'è | $\operatorname{id}_A(a) = a$ |
| $p_1$, $p_2$ | «prima e seconda proiezione» | tengono un pezzo della coppia | $p_1(3, 7) = 3$ |
| $f_{\vert S}$ | «$f$ ristretta a $S$» | la stessa $f$, usata solo su $S$ | |
| $f(S)$ | «immagine di $S$» | i valori di $f$ sugli elementi di $S$ | $f(\{1, 2\}) = \{3, 5\}$ |
| $\operatorname{Im}(f)$ | «immagine di $f$» | tutti i valori raggiunti | $\operatorname{Im}(x^2)$: i reali $\ge 0$ |
| $f^{-1}(b)$ | «controimmagine di $b$» | gli elementi che finiscono in $b$ | $f^{-1}(4) = \{2, -2\}$ per $x^2$ |
| $f^{-1}(T)$ | «controimmagine di $T$» | gli elementi che finiscono dentro $T$ | |
| $2\Z + 1$ | «due zeta più uno» | i numeri dispari | $7 \in 2\Z + 1$ |
| $\R \setminus \{0\}$ | «erre meno zero» | i reali tranne lo 0 | dominio di $\frac{1}{x}$ |
| $\lvert X \rvert$ | «cardinalità di $X$» | il numero di elementi | $\lvert f^{-1}(4) \rvert = 2$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 09/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26 dicono così.

- **10 domande a risposta multipla**, ognuna con 5 risposte e una sola giusta. Una risposta giusta vale 1 punto; una sbagliata o vuota vale 0.
- **2 problemi** a risposta aperta, divisi in più domande con il punteggio scritto accanto.
- **Sbarramento.** Con meno di 6 punti nel quiz la prova non è superata, e i problemi non vengono corretti.
- **Sufficienza:** almeno 18 punti in tutto. **Durata:** 2 ore.
- **Materiale ammesso:** libro di testo e appunti del corso, e una calcolatrice non programmabile.

Gli appelli 2026/27 sono martedì 19/01/2027 e mercoledì 03/02/2027 alle 14:00. Dettagli nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).

**Che cosa serve di questa lezione**

1. **Domanda 3 del quiz.** In tutti gli appelli del 2025 e del 2026 la domanda 3 è sulle funzioni. Nell'appello del 14/01/2025 chiedeva proprio immagine, controimmagine, iniettività e suriettività di una funzione definita «a pezzi». Dal febbraio 2025 in poi chiede quasi sempre di **comporre** due o tre funzioni, cioè di applicarle una dopo l'altra: è l'argomento della prossima lezione, ma si basa su tutto quello che c'è qui.
2. **Problemi sui gruppi e sulle classi di resto.** Nella seconda parte del corso ogni appello chiede se una funzione tra gruppi è «ben definita», «iniettiva», «suriettiva». Le definizioni sono queste.
3. **Combinatoria.** Contare le funzioni da un insieme a un altro, e quelle iniettive, è una domanda dei problemi (per esempio l'appello del 06/06/2025, problema 1, punto c).

### Una domanda vera, letta insieme

**Appello del 14/01/2025, domanda 3.** Il testo: «Sia $f \colon \Z \to \N$ la funzione $f(n) = n^2 + 1$ se $n$ è pari, $f(n) = n^2 - 1$ se $n$ è dispari. Allora: 1. se $m \in \operatorname{im}(f)$, allora $m + 1 \notin \operatorname{im}(f)$; 2. $f^{-1}(p) = \emptyset$ se $p$ è primo; 3. $f(m) = f(n)$ se e solo se $m = \pm n$; 4. $f$ è iniettiva; 5. $f$ è suriettiva». Nel testo d'esame le parole «allora» e «se e solo se» sono scritte con le frecce.

**In pratica chiede:** quale di queste cinque frasi su questa funzione è vera? Il modo più sicuro è scrivere qualche valore e provare a smentire ogni frase con un esempio.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: un po' di valori.** Pari: $f(0) = 1$, $f(2) = f(-2) = 5$, $f(4) = 17$. Dispari: $f(1) = f(-1) = 0$, $f(3) = f(-3) = 8$, $f(5) = 24$. L'immagine comincia con $0, 1, 5, 8, 17, 24, \dots$
>
> **Passo 2: le frasi smentite da un esempio.**
> - Frase 1: 0 e 1 stanno tutti e due nell'immagine. Falsa.
> - Frase 2: 5 è primo e $f(2) = 5$, quindi $f^{-1}(5)$ non è vuota. Falsa.
> - Frase 4: $f(1) = f(-1)$, con $1 \neq -1$. Non iniettiva: falsa.
> - Frase 5: 2 non è mai raggiunto, perché tra i valori c'è 1 e poi 5. Non suriettiva: falsa.
>
> **Passo 3: la frase che resta.** La 3 dice che due numeri hanno lo stesso valore esattamente quando sono uguali o opposti. Se $m$ e $n$ sono tutti e due pari, $m^2 + 1 = n^2 + 1$ dà $m^2 = n^2$, cioè $m = \pm n$; lo stesso se sono tutti e due dispari. Se uno è pari e l'altro dispari, servirebbe $n^2 - m^2 = 2$: due quadrati di interi non differiscono mai di 2. Al contrario, $n$ e $-n$ sono sempre tutti e due pari o tutti e due dispari, e hanno lo stesso quadrato. **La risposta è la 3.**

### Altre versioni della stessa domanda

Lo stesso appello aveva quattro versioni del quiz, con funzioni diverse.

> [!ESAME] Appello del 14/01/2025, domanda 3, altre versioni
> - $f(n) = n^2 + 2$ per $n$ pari, $n^2$ per $n$ dispari: la risposta giusta era «$f$ **non** è iniettiva», perché $f(1) = f(-1)$. La trappola era «$f(2n) = 4n^2 + 4$»: in realtà $f(2n) = 4n^2 + 2$.
> - $f(n) = n^2 + n$ per $n$ pari, $n^2 + 1$ per $n$ dispari: la risposta giusta era «$f^{-1}(k) = \emptyset$ per ogni $k$ dispari». Infatti $n^2 + n = n(n + 1)$ è sempre pari, e per $n$ dispari $n^2 + 1$ è pari: nessun valore è dispari.
> - $f(n) = n^2 + 1$ per $n \ge 0$, $n^2 - 1$ per $n < 0$: la risposta giusta era «$f$ è iniettiva». I non negativi danno $1, 2, 5, 10, \dots$, i negativi danno $0, 3, 8, 15, \dots$: due elenchi senza ripetizioni e senza numeri in comune. La trappola era «$f^{-1}(\{4, 8, 9\}) = \emptyset$»: $f(-3) = 8$.

> [!METODO] Le domande «quale frase è vera» su una funzione
> 1. Scrivi i valori su qualche elemento: $0$, $\pm 1$, $\pm 2$, $\pm 3$. Spesso basta questo per smentire quattro frasi su cinque.
> 2. **Iniettiva?** Cerca due elementi diversi con lo stesso valore, per esempio $n$ e $-n$ quando c'è un quadrato.
> 3. **Suriettiva?** Cerca un elemento del codominio che non arriva mai: un numero piccolo, un dispari, un negativo.
> 4. **Controimmagine?** Risolvi l'equazione $f(a) = b$; se non ha soluzioni, è vuota.
> 5. Prima di scegliere, rileggi il **dominio** e il **codominio**: la stessa formula può essere iniettiva su $\N$ e non su $\Z$.

**Errori da evitare**

- Credere che una funzione debba essere data da una formula: anche una tabella è una funzione.
- Confondere codominio e immagine.
- Leggere $f^{-1}(b)$ come $\frac{1}{f(b)}$, oppure come un elemento invece che come un insieme.
- Dimostrare che una funzione non è iniettiva con un ragionamento generale, quando basta un esempio con due elementi.
- Dimenticare che dominio e codominio fanno parte della funzione: $x^2$ è suriettiva o no a seconda del codominio.

> [!ESAME] Che cosa scrivere sul foglio di riepilogo
> Alla prova puoi portare libro e appunti. Da questa lezione conviene avere pronti la tabella «colonne e righe» (funzione, iniettiva, suriettiva, biettiva), il metodo per le domande «quale frase è vera», e i due esempi da ricordare: $2n + 1$ iniettiva e non suriettiva su $\Z$, $x^2$ né l'una né l'altra su $\R$.

## Quiz

```quiz
D: Con $A = \{1, 2, 3\}$ e $B = \{x, y\}$, quale di questi sottoinsiemi di $A \times B$ è il grafico di una funzione da $A$ a $B$?
+ $\{(1, y), (2, y), (3, x)\}$
- $\{(1, x), (2, y)\}$
- $\{(1, x), (1, y), (2, x), (3, y)\}$
- $\{(x, 1), (y, 2), (x, 3)\}$
- $\{(1, x), (2, x), (3, x), (3, y)\}$
= Ogni elemento di $A$ deve comparire una volta sola come primo pezzo: succede solo nella prima. La risposta più insidiosa è $\{(x, 1), (y, 2), (x, 3)\}$: le coppie sono scritte al contrario, quindi stanno in $B \times A$. La seconda dimentica 3; la terza e l'ultima danno due valori a 1 o a 3.

D: Sia $f \colon \Z \to \Z$, $f(n) = 2n + 1$. Quale affermazione è vera?
+ $f$ è iniettiva ma non suriettiva
- $f$ è suriettiva ma non iniettiva
- $f$ è biettiva
- $f$ non è né iniettiva né suriettiva
- $\operatorname{Im}(f) = \Z$
= Se $2m + 1 = 2n + 1$ allora $m = n$: iniettiva. I valori sono tutti dispari, quindi 0 non viene mai raggiunto: non suriettiva. La risposta più insidiosa è «biettiva», per chi pensa ai numeri reali: su $\R$ la stessa formula sarebbe biettiva, su $\Z$ no.

D: Sia $f \colon \Z \to \Z$, $f(n) = n^2 - 1$ (esercizio 2.1 del libro). Quanto vale $f^{-1}(8)$?
+ $\{3, -3\}$
- $\{3\}$
- $63$
- $\emptyset$
- $\{\frac 18\}$
= Bisogna risolvere $n^2 - 1 = 8$, cioè $n^2 = 9$: le soluzioni intere sono 3 e $-3$. La risposta più insidiosa è $\{3\}$, che dimentica il negativo. 63 è $f(8)$, l'immagine invece della controimmagine; $\frac 18$ è la lettura sbagliata di $f^{-1}$ come «uno diviso».

D: Sia $f \colon \Z \to \Z$, $f(n) = n^2 - 1$. Quale controimmagine è vuota?
+ $f^{-1}(12)$
- $f^{-1}(-1)$
- $f^{-1}(0)$
- $f^{-1}(3)$
- $f^{-1}(24)$
= $n^2 = 13$ non ha soluzioni intere: $f^{-1}(12) = \emptyset$. Le altre: $f^{-1}(-1) = \{0\}$, $f^{-1}(0) = \{1, -1\}$, $f^{-1}(3) = \{2, -2\}$, $f^{-1}(24) = \{5, -5\}$. La risposta più insidiosa è $f^{-1}(-1)$: sembra impossibile un valore negativo, ma $f(0) = -1$.

D: Sia $f \colon \R \to \R$, $f(x) = x^2$. Quale affermazione è vera?
+ $f$ diventa biettiva come funzione dai reali positivi ai reali positivi
- $f$ è iniettiva
- $\operatorname{Im}(f) = \R$
- $f^{-1}(-4) = \{-2\}$
- $f^{-1}(4) = \{2\}$
= Sui positivi, con codominio i positivi, ogni $y$ ha un solo positivo $\sqrt y$ con quadrato $y$: biettiva (p. 23 del libro). La risposta più insidiosa è $f^{-1}(4) = \{2\}$: dimentica $-2$. $f(1) = f(-1)$, quindi non è iniettiva; i quadrati non sono negativi, quindi l'immagine non è $\R$ e $f^{-1}(-4)$ è vuota.

D: Una funzione $f \colon A \to B$ è suriettiva quando:
+ ogni elemento di $B$ ha controimmagine non vuota
- ogni elemento di $A$ ha un valore
- due elementi diversi di $A$ hanno valori diversi
- ogni elemento di $B$ ha esattamente una controimmagine
- $A$ e $B$ hanno lo stesso numero di elementi
= Suriettiva vuol dire immagine uguale al codominio: ogni $b$ è raggiunto, cioè $f^{-1}(b)$ non è vuota (Proposizione 2.11). La risposta più insidiosa è «esattamente una»: quella è la biettività. «Ogni elemento di $A$ ha un valore» vale per ogni funzione; «valori diversi» è l'iniettività.

D: Da $\{1, 2, 3, 4\}$ a $\{a, b, c\}$, una funzione può essere iniettiva?
+ No, mai
- Sì, sempre
- Sì, se è suriettiva
- Solo se manda 4 in $c$
- Solo se è costante
= Quattro elementi devono andare in tre posti tutti diversi: non c'è spazio, almeno due finiscono nello stesso. La risposta più insidiosa è «sì, se è suriettiva»: una funzione da 4 a 3 elementi può essere suriettiva, ma mai iniettiva. Una costante è il caso meno iniettivo di tutti.

D: (Appello del 14/01/2025, domanda 3, versione C) Sia $f \colon \Z \to \N$ la funzione $f(n) = n^2 + n$ se $n$ è pari, $f(n) = n^2 + 1$ se $n$ è dispari. Allora
+ $f^{-1}(k) = \emptyset$ per ogni $k$ dispari
- $f(2n) = 4n^2 + n$ per ogni $n$
- $f(n) \neq n$ per ogni $n$
- $f$ è suriettiva
- $f$ è iniettiva
= $n^2 + n = n(n + 1)$ è sempre pari; per $n$ dispari, $n^2$ è dispari e $n^2 + 1$ è pari. Nessun valore è dispari, quindi ogni dispari ha controimmagine vuota. La risposta più insidiosa è $f(2n) = 4n^2 + n$: il conto giusto è $(2n)^2 + 2n = 4n^2 + 2n$. $f(0) = 0$ smentisce la terza; non è suriettiva (mai dispari); $f(1) = f(-1) = 2$, quindi non è iniettiva.

D: (Appello del 14/01/2025, domanda 3, versione D) Sia $f \colon \Z \to \N$ la funzione $f(n) = n^2 + 1$ se $n \ge 0$, $f(n) = n^2 - 1$ se $n < 0$. Allora
+ $f$ è iniettiva
- $f$ è suriettiva
- $f^{-1}(\{4, 8, 9\}) = \emptyset$
- $f(n) > f(m)$ per ogni $n > m$
- $f(f(n)) = n^2 + 1$ per ogni $n$
= I non negativi danno $1, 2, 5, 10, \dots$, i negativi $0, 3, 8, 15, \dots$: nessun valore si ripete. La risposta più insidiosa è $f^{-1}(\{4, 8, 9\}) = \emptyset$: 4 e 9 non vengono raggiunti, ma $f(-3) = 8$. 4 non è mai raggiunto, quindi non è suriettiva; $f(-3) = 8 > f(0) = 1$ smentisce la quarta; $f(f(1)) = f(2) = 5$, non 2.

D: Alla mensa del testo ($f(\text{Anna}) = f(\text{Bruno}) = \text{pasta}$, $f(\text{Carla}) = \text{zuppa}$, $f(\text{Dario}) = \text{riso}$, menu con anche gli gnocchi), quanti elementi ha la controimmagine $f^{-1}(\{\text{pasta}, \text{gnocchi}\})$?
N: 2
= Sono gli studenti che hanno scelto pasta o gnocchi: Anna e Bruno. Gli gnocchi non aggiungono nessuno, perché $f^{-1}(\text{gnocchi}) = \emptyset$.
```

## Esercizi

::: esercizio base Riscaldamento: è una funzione?
Con $A = \{a, b, c\}$ e $B = \{1, 2\}$, dì quali tabelle descrivono una funzione da $A$ a $B$. (1) $a \mapsto 1$, $b \mapsto 1$, $c \mapsto 1$. (2) $a \mapsto 1$, $b \mapsto 2$. (3) $a \mapsto 1$, $a \mapsto 2$, $b \mapsto 2$, $c \mapsto 1$.
::: soluzione
1. Sì: ogni elemento ha un solo valore, anche se è sempre 1.
2. No: manca $c$.
3. No: $a$ ha due valori.
:::

::: esercizio base Riscaldamento: immagine e controimmagine su una tabella
La funzione $f \colon \{1, 2, 3, 4, 5\} \to \{a, b, c, d\}$ è $f(1) = b$, $f(2) = d$, $f(3) = b$, $f(4) = a$, $f(5) = d$. Scrivi $\operatorname{Im}(f)$, $f(\{1, 3\})$, $f^{-1}(b)$, $f^{-1}(c)$ e $f^{-1}(\{a, d\})$.
::: soluzione
1. $\operatorname{Im}(f) = \{a, b, d\}$: la $c$ non viene mai presa.
2. $f(\{1, 3\}) = \{b\}$.
3. $f^{-1}(b) = \{1, 3\}$.
4. $f^{-1}(c) = \emptyset$.
5. $f^{-1}(\{a, d\}) = \{2, 4, 5\}$.
:::

::: esercizio base Riscaldamento: iniettiva o suriettiva
Per la funzione dell'esercizio precedente, dì se è iniettiva e se è suriettiva, e perché.
::: soluzione
1. Non iniettiva: $f(1) = f(3) = b$.
2. Non suriettiva: $c$ non è mai raggiunta.

Del resto da 5 elementi a 4 non può mai essere iniettiva: due finiscono per forza nello stesso posto.
:::

::: esercizio base Riscaldamento: una biezione piccola
Scrivi una funzione biettiva da $\{1, 2, 3\}$ a $\{x, y, z\}$ diversa da $1 \mapsto x$, $2 \mapsto y$, $3 \mapsto z$. Quante ce ne sono in tutto?
::: soluzione
Per esempio $1 \mapsto z$, $2 \mapsto x$, $3 \mapsto y$. In tutto sono 6: per 1 ci sono 3 scelte, per 2 ne restano 2, per 3 ne resta 1, e $3 \cdot 2 \cdot 1 = 6$. Questo conto tornerà con la combinatoria.
:::

::: esercizio base Esercizio 2.1 del libro
Sia $f \colon \Z \to \Z$ la funzione definita da $f(n) = n^2 - 1$. Calcolare $f^{-1}(-5)$, $f^{-1}(-1)$, $f^{-1}(8)$, $f^{-1}(12)$.
::: soluzione
Ogni volta si risolve $n^2 - 1 = b$, cioè $n^2 = b + 1$, cercando soluzioni intere.
1. $f^{-1}(-5)$: $n^2 = -4$, impossibile. Vuota.
2. $f^{-1}(-1)$: $n^2 = 0$, quindi $\{0\}$.
3. $f^{-1}(8)$: $n^2 = 9$, quindi $\{3, -3\}$.
4. $f^{-1}(12)$: $n^2 = 13$, che non è un quadrato. Vuota.
:::

::: esercizio base Due formule, una funzione
Le funzioni $f, g \colon \{0, 1, 2\} \to \R$, con $f(x) = 3x^2 - 1$ e $g(x) = x^3 + 2x - 1$, sono uguali? E come funzioni da $\{0, 1, 2, 3\}$ a $\R$?
::: soluzione
1. Su $\{0, 1, 2\}$: $f(0) = g(0) = -1$, $f(1) = g(1) = 2$, $f(2) = g(2) = 11$. Stesso dominio, codominio e grafico: sono la stessa funzione (p. 18 del libro).
2. Su $\{0, 1, 2, 3\}$: $f(3) = 26$ e $g(3) = 32$. Sono funzioni diverse.

Conta il dominio: due formule diverse possono dare la stessa funzione su un dominio piccolo.
:::

::: esercizio medio Esercizio 2.2 del libro
Sia $f \colon \Z \times \Z \to \Z$ la funzione definita come $f((m, n)) = m^2 - n$. (1) Dire se $f$ è iniettiva. (2) Dire se $f$ è suriettiva. (3) Calcolare l'insieme $f^{-1}(0) \cap \{(m, n) \in \Z \times \Z \mid n = 4m\}$. (4) Calcolare l'immagine $f(S)$ del sottoinsieme $S = \{(m, n) \in \Z \times \Z \mid n = 2m - 1\}$.
::: soluzione
1. Non iniettiva: $f((0, 0)) = 0$ e $f((1, 1)) = 1 - 1 = 0$.
2. Suriettiva: un intero $k$ qualsiasi si ottiene con $m = 0$ e $n = -k$, perché $0 - (-k) = k$.
3. Servono le coppie con $m^2 - n = 0$ e $n = 4m$. Sostituendo: $m^2 = 4m$, cioè $m(m - 4) = 0$, quindi $m = 0$ oppure $m = 4$. Le coppie sono $(0, 0)$ e $(4, 16)$.
4. Su $S$ vale $n = 2m - 1$, quindi $f((m, 2m - 1)) = m^2 - 2m + 1 = (m - 1)^2$. Al variare di $m$ negli interi, $m - 1$ prende tutti gli interi, e i valori sono tutti i quadrati: $f(S) = \{0, 1, 4, 9, 16, \dots\}$.
:::

::: esercizio medio Esercizio 2.3 del libro
Sia $f \colon \N \to \N$ definita da $f(n) = \frac n2$ se $n$ è pari e $f(n) = 3n + 1$ se $n$ è dispari. Dimostrare o confutare: (a) $f$ è iniettiva; (b) $f$ è suriettiva; (c) l'immagine dei numeri pari è contenuta nei dispari; (d) la controimmagine dei multipli di 3 è contenuta nei pari. Poi calcolare $f(\{1, 2, \dots, 10\})$ e $f^{-1}(\{1, 2, 7, 9, 10, 13\})$.
::: soluzione
(a) **Falsa**: $f(8) = 4$ e $f(1) = 3 \cdot 1 + 1 = 4$.

(b) **Vera**: un naturale $m$ qualsiasi è $f(2m)$, perché $2m$ è pari e $\frac{2m}{2} = m$.

(c) **Falsa**: $f(4) = 2$, che è pari.

(d) **Vera**: se $n$ è dispari, $3n + 1$ supera di 1 un multiplo di 3, quindi non è un multiplo di 3. Allora un elemento che finisce in un multiplo di 3 deve essere pari.

**I due insiemi.** $f(1) = 4$, $f(2) = 1$, $f(3) = 10$, $f(4) = 2$, $f(5) = 16$, $f(6) = 3$, $f(7) = 22$, $f(8) = 4$, $f(9) = 28$, $f(10) = 5$. Quindi
$$f(\{1, \dots, 10\}) = \{1, 2, 3, 4, 5, 10, 16, 22, 28\}.$$
Per la controimmagine: i pari $n$ con $\frac n2$ nell'insieme sono 2, 4, 14, 18, 20, 26; i dispari $n$ con $3n + 1$ nell'insieme danno solo $n = 3$, perché $3 \cdot 3 + 1 = 10$. Quindi
$$f^{-1}(\{1, 2, 7, 9, 10, 13\}) = \{2, 3, 4, 14, 18, 20, 26\}.$$
Conti controllati con un programma.
:::

::: esercizio medio Una funzione a pezzi
Sia $f \colon \Z \to \N$ la funzione $f(n) = n^2 + 2$ se $n$ è pari, $f(n) = n^2$ se $n$ è dispari (appello del 14/01/2025, domanda 3, versione B). Quali di queste frasi sono vere? (1) Se $s$ sta nell'immagine, $s + 1$ non ci sta. (2) $f^{-1}(p) = \emptyset$ per ogni primo $p$. (3) $f(2n) = 4n^2 + 4$ per ogni $n$. (4) $f$ non è iniettiva. (5) $f$ è suriettiva.
::: soluzione
Valori: $f(0) = 2$, $f(\pm 1) = 1$, $f(\pm 2) = 6$, $f(\pm 3) = 9$, $f(\pm 4) = 18$.
1. Falsa: 1 e 2 stanno tutti e due nell'immagine.
2. Falsa: 2 è primo e $f(0) = 2$.
3. Falsa: $f(2n) = (2n)^2 + 2 = 4n^2 + 2$. Con $n = 1$: $f(2) = 6$, non 8.
4. **Vera**: $f(1) = f(-1) = 1$.
5. Falsa: 3 non è mai raggiunto.
:::

::: esercizio esame Funzioni tra insiemi finiti
Nello stile del problema 1 dell'appello del 06/06/2025. Siano $S = \{1, 2, 3\}$ e $T = \{1, 2, 3, 4\}$. (a) Quante sono le funzioni da $S$ a $T$? (b) Quante sono iniettive? (c) Ce n'è qualcuna suriettiva? (d) Quante sono le funzioni da $S$ a $T$ con $f(1) = 1$?
::: soluzione
(a) Ogni elemento di $S$ sceglie uno dei 4 elementi di $T$, in modo indipendente: $4 \cdot 4 \cdot 4 = 4^3 = 64$.

(b) Il primo elemento ha 4 scelte, il secondo 3 (deve essere diverso), il terzo 2: $4 \cdot 3 \cdot 2 = 24$.

(c) No: 3 elementi non possono raggiungere 4 posti. Almeno un elemento di $T$ resta fuori dall'immagine.

(d) Il valore di 1 è fissato; 2 e 3 scelgono liberamente: $4 \cdot 4 = 16$.

Il modo di contare «scelta dopo scelta» lo studierai nella combinatoria (libro, cap. 3).
:::

::: esercizio difficile Esercizio 2.8 del libro (prima parte)
Ciascuna delle seguenti funzioni non è biettiva: spiega perché, e cambia dominio o codominio in modo da ottenere una funzione biettiva. (1) $f \colon \Z \to \Z$, $f(n) = 3n$. (2) $f \colon \R \to \R$, $f(x) = x^2 + 2x$.
::: soluzione
**(1)** È iniettiva: $3m = 3n$ dà $m = n$. Non è suriettiva: 1 non è un multiplo di 3. Diventa biettiva prendendo come codominio i multipli di 3, che il libro scrive $3\Z$: ogni multiplo $3k$ ha una sola controimmagine, $k$.

**(2)** Riscrivo $x^2 + 2x = (x + 1)^2 - 1$. Non è iniettiva: $f(0) = f(-2) = 0$. Non è suriettiva: $(x + 1)^2$ non è mai negativo, quindi $f(x)$ non scende sotto $-1$, e $-2$ non è raggiunto.

Per renderla biettiva: come dominio i reali $x \ge -1$, dove $x + 1 \ge 0$ e due numeri diversi danno valori diversi; come codominio i reali $y \ge -1$. Ogni $y \ge -1$ ha allora una sola controimmagine, $x = -1 + \sqrt{y + 1}$.

Il libro chiede anche la **funzione inversa**: la vedrai nella prossima lezione. Le formule $k$ e $-1 + \sqrt{y + 1}$ trovate qui sono proprio le inverse.
:::

::: esercizio difficile Iniettiva sul grafico (esercizio 2.7 del libro)
Sia $\Gamma$ il grafico di $f \colon A \to B$. Dimostra che $f$ è iniettiva se e soltanto se per ogni $b \in B$ l'intersezione $\Gamma \cap (A \times \{b\})$ contiene al più un elemento.
::: soluzione
$A \times \{b\}$ sono tutte le coppie con secondo pezzo $b$: sulla tabella dei pallini, la **riga** di $b$. Allora $\Gamma \cap (A \times \{b\})$ sono le coppie del grafico in quella riga, cioè le coppie $(a, b)$ con $f(a) = b$. Ce ne sono tante quanti gli elementi di $f^{-1}(b)$.

Quindi la condizione dice che ogni controimmagine ha al più un elemento, e per la Proposizione 2.11 questo vuol dire esattamente che $f$ è iniettiva. È la regola «ogni riga ha al massimo un pallino», scritta con gli insiemi.
:::

## Domande di ripasso

::: domanda Che cos'è una funzione da $A$ a $B$?
Una regola che a ogni elemento di $A$ fa corrispondere uno e un solo elemento di $B$. In modo preciso, un sottoinsieme $\Gamma$ di $A \times B$, il grafico, in cui ogni elemento di $A$ compare come primo pezzo di una e una sola coppia.
:::

::: domanda Come si riconosce una funzione sulla tabella dei pallini?
Con il dominio in orizzontale e il codominio in verticale: ogni colonna ha esattamente un pallino. Le righe possono averne quanti vogliono, anche zero.
:::

::: domanda Quando due funzioni sono uguali?
Quando hanno lo stesso dominio, lo stesso codominio e lo stesso grafico, anche se sono scritte con formule diverse.
:::

::: domanda Che differenza c'è tra codominio e immagine?
Il codominio è l'insieme d'arrivo dichiarato; l'immagine è l'insieme dei valori raggiunti davvero, ed è contenuta nel codominio.
:::

::: domanda Che cos'è la controimmagine di $b$? Può essere vuota?
L'insieme degli elementi del dominio che hanno $b$ come valore, cioè le soluzioni di $f(a) = b$. Sì, può essere vuota: con $f(x) = x^2$ su $\R$, $f^{-1}(-1) = \emptyset$.
:::

::: domanda Quando una funzione è suriettiva? E iniettiva?
Suriettiva quando l'immagine è tutto il codominio: ogni controimmagine è non vuota. Iniettiva quando elementi diversi hanno valori diversi: ogni controimmagine ha al massimo un elemento.
:::

::: domanda Come si dimostra che una funzione non è iniettiva? E che non è suriettiva?
Non iniettiva: basta trovare due elementi diversi con lo stesso valore. Non suriettiva: basta trovare un elemento del codominio che non viene mai raggiunto.
:::

::: domanda Che cos'è una funzione biettiva?
Una funzione iniettiva e suriettiva: ogni elemento del codominio ha esattamente una controimmagine. Sulla tabella, un pallino in ogni colonna e in ogni riga.
:::

::: domanda Che cosa vuol dire che una funzione sulle classi è ben definita?
Che il valore su una classe non dipende dal rappresentante scelto per calcolarlo.
:::

## Glossario

```glossario
Funzione | Una regola che a ogni elemento del dominio fa corrispondere uno e un solo elemento del codominio; in modo preciso, il suo grafico.
Dominio | L'insieme di partenza di una funzione.
Codominio | L'insieme d'arrivo di una funzione.
Grafico | L'insieme delle coppie $(a, f(a))$, un sottoinsieme di $A \times B$ (Definizione 2.1).
Identità | La funzione $\operatorname{id}_A$ che manda ogni elemento in sé stesso.
Funzione costante | Una funzione che manda tutti gli elementi nello stesso valore.
Proiezione | Le funzioni $p_1(a, b) = a$ e $p_2(a, b) = b$ su un prodotto cartesiano.
Successione | Una funzione con dominio $\N$: una lista infinita $b_0, b_1, b_2, \dots$
Funzione quoziente | La funzione che manda ogni elemento nella sua classe.
Restrizione | La stessa funzione usata solo su un sottoinsieme del dominio (Definizione 2.2).
Ben definita | Così si chiama una regola sulle classi il cui risultato non dipende dal rappresentante scelto (Nota 2.3).
Immagine | L'insieme dei valori raggiunti da una funzione, $\operatorname{Im}(f) = f(A)$; più in generale $f(S)$ (Definizione 2.4).
Controimmagine | L'insieme $f^{-1}(b)$ degli elementi che hanno valore $b$, o $f^{-1}(T)$ di quelli con valore in $T$ (Definizione 2.7).
Funzione suriettiva | Una funzione la cui immagine è tutto il codominio (Definizione 2.5).
Funzione iniettiva | Una funzione che dà valori diversi a elementi diversi (Definizione 2.9).
Funzione biettiva | Una funzione iniettiva e suriettiva, detta anche biezione (Definizione 2.12).
```

## Checklist

```checklist
- So dire se un insieme di coppie è il grafico di una funzione, guardando le colonne della tabella.
- So riconoscere identità, costanti, proiezioni, successioni e funzione quoziente.
- So che dominio e codominio fanno parte della funzione, e quando due funzioni sono uguali.
- So calcolare l'immagine di una funzione e di un sottoinsieme.
- So calcolare una controimmagine risolvendo l'equazione $f(a) = b$, e so che può essere vuota.
- So decidere se una funzione è suriettiva, iniettiva o biettiva, e smentirlo con un esempio.
- So leggere le tre proprietà sulle righe della tabella e con le controimmagini (Proposizione 2.11).
- So rendere biettiva una funzione cambiando dominio o codominio.
- So spiegare che cosa vuol dire «ben definita» per una regola sulle classi.
- So affrontare la domanda 3 del quiz provando i valori su pochi numeri.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 2 «Funzioni», pp. 17–23 (definizione 2.1 e le osservazioni con i grafici $\Gamma_1$, $\Gamma_2$, $\Gamma_3$, gli esempi notevoli, definizione 2.2, nota 2.3 sulla buona definizione, definizioni 2.4, 2.5, 2.7, 2.9, 2.12, note 2.6, 2.8, 2.10, proposizione 2.11 con la dimostrazione); esercizi 2.1, 2.2, 2.3, 2.7 e 2.8 (pp. 34–35). Le definizioni e gli enunciati nei riquadri sono citati dal libro.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori): lezione 4 (funzioni, immagine e controimmagine, iniettive, suriettive e biettive) e lezione 5 (composizione e funzioni invertibili). Gli argomenti della lezione del 09/10/2026 non erano ancora pubblicati sul Moodle del canale B quando ho scritto questi appunti.
- Quiz e problemi degli appelli di Matematica Discreta, con le soluzioni ufficiali, sulla pagina Moodle MDAG1 2025/26 ([id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), aperta agli ospiti): domanda 3 dell'appello del 14/01/2025 (quattro versioni, testo riportato e risposte controllate con un programma), domanda 3 degli appelli dal 04/02/2025 al 10/09/2026 (composizione), problema 1 dell'appello del 06/06/2025.
- Programma del corso: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md), voce «Relazioni e funzioni».
- V. Bocchino, *Rigurgiti di Unicorno*, appunti di Matematica Discreta scritti da uno studente sul libro di Mori (licenza CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): un riepilogo già pronto, non ufficiale.
- Le spiegazioni a parole, l'esempio della mensa, i riquadri «Prova tu», i quiz senza data, gli esercizi di riscaldamento e l'esercizio sulle funzioni tra insiemi finiti sono di questi appunti.
