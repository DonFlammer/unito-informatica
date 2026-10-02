---
corso: MDAG
modulo: MD
lezione: D02
titolo: Complementare, induzione e partizioni
data: 2026-10-02
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canale B · Lezione D02
descrizione: >-
  Appunti della lezione D02 di Matematica Discreta: complementare e leggi di De Morgan, numeri naturali e
  assiomi di Peano, dimostrazioni per induzione, insieme delle parti e sua cardinalità, ricoprimenti e
  partizioni. Esempi con insiemi finiti, dimostrazioni passo per passo, quiz ed esercizi svolti.
lede: >-
  Togliere elementi da un insieme, dimostrare una proprietà per tutti i numeri naturali e dividere un
  insieme in gruppi senza sovrapposizioni. Il filo comune è tradurre una frase in una condizione precisa,
  poi controllare che ogni passaggio rispetti quella condizione.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 1, pp. 4–7 e 8–12
  Docente: Andrea Mori · canale B · A.A. 2026/27
  Tempo di studio: 3–4 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta, copia locale: cap. 1, definizioni 1.8, 1.13, 1.14,
  1.16, 1.17, 1.19 e 1.21, teoremi 1.10 e 1.18, assiomi di Peano e conto dei sottoinsiemi;
  argomenti della seconda lezione forniti per la stesura di questi appunti.
file_en: D02_complements_induction_partitions.html
appunti_html: appunti/MDAG/D02_complementare_induzione_partizioni.html
genera_html: true
---

## In breve

- Il **complementare** di $A$ in $X$ contiene gli elementi di $X$ che non stanno in $A$. Devi sapere qual è $X$: cambiando l'insieme di riferimento può cambiare il risultato.
- Le **leggi di De Morgan** dicono come il complementare cambia unione e intersezione: il complementare di un'unione è l'intersezione dei complementari; il complementare di un'intersezione è la loro unione.
- Nel libro i **numeri naturali** sono $0, 1, 2, \ldots$. Gli **assiomi di Peano** descrivono lo zero, il successore e il principio di induzione.
- Una **dimostrazione per induzione** controlla un caso iniziale e dimostra il passaggio da un caso qualunque al successivo. Controllare alcuni numeri, da solo, non basta.
- L'**insieme delle parti** $P(A)$ contiene tutti i sottoinsiemi di $A$, compresi il vuoto e $A$ stesso. Se $A$ ha $n$ elementi, $P(A)$ ne ha $2^n$.
- Un **ricoprimento** è una famiglia di sottoinsiemi la cui unione è tutto l'insieme di partenza. Le parti possono sovrapporsi.
- Una **partizione** è un ricoprimento fatto di parti non vuote e disgiunte a due a due: ogni elemento sta in una e una sola parte.
- Le tre verifiche per una partizione sono distinte: nessun elemento dimenticato, nessuna parte vuota, nessun elemento ripetuto in parti diverse.

> [!CANALI]
> La lezione segue gli argomenti indicati per la seconda lezione di Matematica Discreta del canale B e il capitolo 1 del libro di Andrea Mori. Le definizioni e i teoremi riportano la numerazione della copia locale del libro. Programma e prova d'esame della parte 1 sono comuni ai canali A, B e C; la sequenza delle lezioni può cambiare. Nella [D01](D01_insiemi_induzione.html) erano già stati introdotti induzione e insieme delle parti: qui si riprendono con gli assiomi di Peano e si collegano a complementari e partizioni.

## Togliere una parte: il complementare (p. 10)

Hai cinque tessere numerate da 1 a 5. L'insieme di tutte le tessere è

$$X = \{1, 2, 3, 4, 5\}.$$

Metti da parte quelle con il numero pari:

$$A = \{2, 4\}.$$

Le tessere rimaste sono 1, 3 e 5. Formano il **complementare di $A$ in $X$**: prendi tutto ciò che appartiene a $X$ ed escludi ciò che appartiene ad $A$.

```grafico
titolo: Il complementare dipende dal contenitore: qui $A=\{2,4\}$ e fuori da $A$ restano $1,3,5$
x: -3 3
y: -2.3 2.3
assi: no
griglia: no
cerchio: 0 0 2.1 | blu
cerchio: 0.7 0 1 | accento | spesso
testo: -1.7 1.65 | blu | $X$
testo: 0.7 1.15 | accento | $A$
testo: 0.35 0.35 | accento | $2$
testo: 1 -0.3 | accento | $4$
testo: -1 0.7 | blu | $1$
testo: -1.2 -0.5 | blu | $3$
testo: 0 -1.5 | blu | $5$
```

> [!DEF] 1.17 · Complementare
> Sia $A$ un sottoinsieme di $X$. Il **complementare di $A$ in $X$**, indicato con $C_X(A)$, è
>
> $$C_X(A) = \{x \in X : x \notin A\} = X \setminus A.$$

**Come si legge.** «$C$ con indice $X$ di $A$» significa: tra gli elementi di $X$, tieni quelli che non sono in $A$. Le due condizioni contano entrambe: $x$ deve stare in $X$ e deve stare fuori da $A$.

Il simbolo $\setminus$ si legge «meno» oppure «privato di». Non è una sottrazione tra numeri: è una **differenza tra insiemi**. Nell'esempio,

$$X \setminus A = \{1, 3, 5\}.$$

### La differenza e il complementare

Se $B = \{4, 5, 6\}$, la differenza $X \setminus B$ ha comunque senso: togli da $X$ gli elementi che stanno anche in $B$. Il 6 non era in $X$, quindi non cambia niente:

$$X \setminus B = \{1, 2, 3\}.$$

> [!DEF] 1.16 · Differenza
> Per due insiemi $X$ e $B$, la **differenza** è
>
> $$X \setminus B = \{x \in X : x \notin B\}.$$

**Come si legge.** La differenza non richiede che $B$ sia un sottoinsieme di $X$. Per chiamarla *complementare di $B$ in $X$*, invece, il libro richiede $B \subset X$. Le formule hanno la stessa forma, ma la parola «complementare» presuppone che la parte sia contenuta nel suo insieme di riferimento.

> [!NOTA] La notazione dei sottoinsiemi
> Mori usa $A \subset X$ anche quando $A=X$. Quindi nei riquadri del libro $\subset$ significa «sottoinsieme, eventualmente uguale», come $\subseteq$ in altri testi. Un sottoinsieme **proprio** richiede in più $A \ne X$.

### Lo stesso insieme, due complementari

Se allarghi il contenitore a $Y=\{1,2,3,4,5,6\}$ e lasci $A=\{2,4\}$, cambia ciò che rimane:

$$C_X(A)=\{1,3,5\}, \qquad C_Y(A)=\{1,3,5,6\}.$$

Anche con gli insiemi numerici succede così. Il complementare di $\N$ in $\Z$ contiene gli interi negativi; in $\R$ contiene anche numeri come $1/2$ e $\sqrt{2}$.

> [!TRAPPOLA] «Tutto ciò che non sta in $A$» non basta
> Devi aggiungere «tra gli elementi di $X$». Nell'esempio delle cinque tessere, il numero 100 non è in $A$, ma non è nemmeno nel suo complementare in $X$.

::: prova Siano $X=\{a,b,c,d\}$ e $A=\{b,d\}$. Trova (a) $C_X(A)$; (b) $C_X(\emptyset)$; (c) $C_X(X)$.
(a) Togli $b$ e $d$ da $X$: resta $\{a,c\}$.

(b) Il vuoto non contiene elementi da togliere: $C_X(\emptyset)=X$.

(c) Togli tutti gli elementi di $X$: $C_X(X)=\emptyset$.
:::

### Tre proprietà da vedere sulle tessere

Nell'esempio $X=\{1,2,3,4,5\}$ e $A=\{2,4\}$:

- $A$ insieme al suo complementare ricostruisce tutte le tessere: $A \cup C_X(A)=X$.
- Nessuna tessera sta contemporaneamente in $A$ e fuori da $A$: $A \cap C_X(A)=\emptyset$.
- Se togli da $X$ ciò che era rimasto fuori da $A$, recuperi $A$: $C_X(C_X(A))=A$.

L'ultimo conto è $X\setminus\{1,3,5\}=\{2,4\}$. Per tutte queste proprietà il contenitore $X$ deve rimanere lo stesso.

> [!RICORDA]
> - $C_X(A)$ contiene gli elementi di $X$ che non stanno in $A$.
> - $C_X(\emptyset)=X$, $C_X(X)=\emptyset$, $C_X(C_X(A))=A$.
> - $A$ e il suo complementare non si sovrappongono e insieme ricostruiscono $X$.

## Unione, intersezione e leggi di De Morgan (pp. 8–11)

Riprendi $X=\{1,2,3,4,5\}$ e scegli

$$A=\{1,2,3\}, \qquad B=\{3,4\}.$$

La tessera 3 sta in entrambi. Le tessere 1 e 2 stanno solo in $A$; la 4 solo in $B$; la 5 in nessuno dei due.

| Operazione | Che cosa tengo | Risultato |
|---|---|---|
| $A\cap B$ | chi sta in entrambi | $\{3\}$ |
| $A\cup B$ | chi sta in almeno uno dei due | $\{1,2,3,4\}$ |
| $C_X(A)$ | chi sta in $X$ ma fuori da $A$ | $\{4,5\}$ |
| $C_X(B)$ | chi sta in $X$ ma fuori da $B$ | $\{1,2,5\}$ |

> [!DEF] 1.13 e 1.14 · Intersezione e unione
> L'**intersezione** contiene gli elementi comuni: $x\in A\cap B$ se $x\in A$ **e** $x\in B$.
>
> L'**unione** contiene gli elementi che stanno in almeno uno dei due insiemi: $x\in A\cup B$ se $x\in A$ **oppure** $x\in B$.
>
> Due insiemi sono **disgiunti** se $A\cap B=\emptyset$.

**Come si legge.** Il simbolo $\cap$ si legge «intersezione» e richiede entrambe le condizioni. Il simbolo $\cup$ si legge «unione» e richiede almeno una condizione: il suo «oppure» include anche il caso in cui siano vere entrambe. Perciò il 3 sta anche nell'unione.

### Fuori dall'unione: fuori da entrambi

Il complementare dell'unione contiene solo la tessera 5:

$$C_X(A\cup B)=C_X(\{1,2,3,4\})=\{5\}.$$

Per rimanere fuori da $A\cup B$ devi stare **fuori da $A$ e fuori da $B$**. Interseca allora i due complementari:

$$C_X(A)\cap C_X(B)=\{4,5\}\cap\{1,2,5\}=\{5\}.$$

I due procedimenti danno lo stesso insieme.

### Fuori dall'intersezione: fuori da almeno uno

L'intersezione era $\{3\}$, quindi

$$C_X(A\cap B)=\{1,2,4,5\}.$$

Per non stare in entrambi basta fallire **almeno una** delle due condizioni. Infatti

$$C_X(A)\cup C_X(B)=\{4,5\}\cup\{1,2,5\}=\{1,2,4,5\}.$$

> [!TEOREMA] 1.18 · Leggi di De Morgan
> Se $A$ e $B$ sono sottoinsiemi dello stesso insieme $X$, allora
>
> $$C_X(A\cup B)=C_X(A)\cap C_X(B),$$
>
> $$C_X(A\cap B)=C_X(A)\cup C_X(B).$$

**Come si legge.** Quando il complementare entra nelle parentesi, si applica a ogni insieme e scambia **unione e intersezione**. La prima legge nega tutta la frase «$x$ appartiene ad almeno uno dei due»: per negarla, $x$ deve essere fuori da entrambi. La seconda dice «non in entrambi» equivale a «fuori da almeno uno».

> [!DIM] Prima legge: la doppia inclusione
> Prendi un elemento $x\in C_X(A\cup B)$. Per definizione $x\in X$ e $x\notin A\cup B$. Se fosse in $A$, sarebbe nell'unione; lo stesso vale per $B$. Quindi $x\notin A$ e $x\notin B$. Ne segue che $x\in C_X(A)$ e $x\in C_X(B)$, cioè $x\in C_X(A)\cap C_X(B)$.
>
> Abbiamo dimostrato $C_X(A\cup B)\subset C_X(A)\cap C_X(B)$.
>
> Viceversa, se $x\in C_X(A)\cap C_X(B)$, allora $x\in X$, $x\notin A$ e $x\notin B$. Non sta in nessuno dei due, quindi non sta nella loro unione: $x\in C_X(A\cup B)$.
>
> Le due inclusioni, per la proposizione 1.9, dimostrano l'uguaglianza.

> [!DIM] Seconda legge: perché serve «oppure»
> Se $x\in C_X(A\cap B)$, allora $x\in X$ ma non è vero che $x$ sta sia in $A$ sia in $B$. Quindi $x\notin A$ oppure $x\notin B$: $x\in C_X(A)\cup C_X(B)$.
>
> Viceversa, se $x\in C_X(A)\cup C_X(B)$, è fuori da almeno uno dei due insiemi. Non può quindi appartenere alla loro intersezione. Siccome $x\in X$, appartiene a $C_X(A\cap B)$.
>
> Ancora una volta valgono entrambe le inclusioni.

### Non imparare solo il cambio di simbolo

La tessera 1 dell'esempio sta in $A$ e non in $B$. Quindi non sta nell'intersezione e deve stare nel suo complementare. Se scrivessi, sbagliando,

$$C_X(A\cap B)=C_X(A)\cap C_X(B),$$

la tessera 1 rimarrebbe fuori dal risultato, perché non sta in $C_X(A)$. Hai trovato un **controesempio**: basta questo per respingere la formula sbagliata.

> [!TRAPPOLA] Si nega tutta la condizione
> «Non è vero che $x$ sta in entrambi» non vuol dire «$x$ non sta in nessuno». Può stare in uno solo. È la differenza tra «non $A$ **o** non $B$» e «non $A$ **e** non $B$».

::: prova Nell'esempio $X=\{1,2,3,4,5\}$, $A=\{1,2,3\}$, $B=\{3,4\}$, il 4 appartiene a $C_X(A\cap B)$? Appartiene a $C_X(A\cup B)$?
Il 4 non sta in entrambi, perché non è in $A$: appartiene al complementare dell'intersezione.

Il 4 è in $B$, quindi è nell'unione: non appartiene al complementare dell'unione.
:::

> [!METODO] Un complementare con più operazioni
> 1. Scrivi l'insieme di riferimento $X$.
> 2. Individua l'operazione dentro il complementare: unione o intersezione.
> 3. Scambiala con l'altra e applica il complementare alle parti.
> 4. Se compare un doppio complementare rispetto allo stesso $X$, eliminalo.
> 5. Controlla il risultato su un elemento che sta in una sola delle parti.

Per esempio, togliere da $A$ gli elementi di $B$ equivale a tenere quelli che stanno in $A$ e nel complementare di $B$:

$$A\setminus B=A\cap C_X(B).$$

Quindi, per De Morgan e per il doppio complementare,

$$C_X(A\setminus B)=C_X(A\cap C_X(B))=C_X(A)\cup B.$$

Nell'esempio $A\setminus B=\{1,2\}$ e il suo complementare è $\{3,4,5\}$. Anche $C_X(A)\cup B=\{4,5\}\cup\{3,4\}$ dà $\{3,4,5\}$.

> [!RICORDA]
> - Fuori dall'unione significa fuori da **entrambi**: intersezione dei complementari.
> - Fuori dall'intersezione significa fuori da **almeno uno**: unione dei complementari.
> - Il complementare deve essere preso sempre rispetto allo stesso insieme.

## I numeri naturali e gli assiomi di Peano (pp. 5–6)

Quando conti le tessere inizi da zero, poi aggiungi una tessera: 1, 2, 3 e così via. Il libro chiama questo insieme

$$\N=\{0,1,2,3,\ldots\}.$$

Il numero che viene subito dopo $n$ si chiama il suo **successore** e si scrive $s(n)$. Negli esempi ordinari è $n+1$: $s(0)=1$, $s(1)=2$, $s(2)=3$.

L'elenco con i puntini suggerisce che si continua, ma non precisa tutte le regole. Gli **assiomi di Peano** servono proprio a descrivere che cosa devono fare lo zero e il successore. Un assioma è una proprietà che si prende come punto di partenza.

> [!DEF] Assiomi per $\N$ · Peano, 1889
> 1. $0\in\N$.
> 2. Ogni $n\in\N$ ha un successore $s(n)\in\N$.
> 3. Se $m\ne n$, allora $s(m)\ne s(n)$.
> 4. Lo zero non è il successore di nessun naturale: $s(n)\ne0$ per ogni $n\in\N$.
> 5. Se $U\subset\N$ contiene 0 e, insieme a ogni suo elemento $n$, contiene anche $s(n)$, allora $U=\N$.

**Come si legge.** Lo zero è il punto di partenza. Da un naturale puoi passare al prossimo naturale. Due numeri diversi non possono avere lo stesso prossimo numero, e non puoi tornare allo zero facendo un passo avanti. Infine, una raccolta che parte da zero e non perde mai il numero successivo deve contenere tutti i naturali.

### Perché la successione non fa un giro e ritorna

Supponi che dopo alcuni passi tornassi a un numero già incontrato. Per esempio, immagina $s(4)=2=s(1)$. L'assioma 3 direbbe che 4 e 1 devono essere lo stesso numero, perché hanno lo stesso successore. Non lo sono: quell'anello non è consentito.

Neppure puoi tornare direttamente allo zero, perché lo vieta l'assioma 4. Ripetendo l'idea, la successione $0,s(0),s(s(0)),\ldots$ non può ripiegarsi su se stessa: continua con numeri distinti.

### Il quinto assioma impedisce di fermarsi a metà

La raccolta $U=\{0,1,2,3\}$ contiene 0, ma non contiene il successore di 3: manca 4. Non soddisfa la condizione di chiusura richiesta dall'assioma 5.

La raccolta dei naturali pari contiene 0, ma non contiene il successore di 0: manca 1. Anche questa non soddisfa la condizione.

La raccolta ottenuta partendo da 0 e prendendo ogni volta il successore, invece, contiene il punto di partenza e non si ferma a nessun passo. L'assioma 5 dice che così hai ottenuto tutto $\N$: non c'è un naturale separato da questa catena.

::: prova Quale assioma impedisce (a) $s(7)=0$; (b) $s(2)=s(5)$; (c) che una raccolta contenente 0 e chiusa per successore lasci fuori qualche naturale?
(a) L'assioma 4: zero non è un successore.

(b) L'assioma 3: numeri diversi hanno successori diversi.

(c) L'assioma 5, il principio di induzione.
:::

> [!NOTA] Lo zero e il caso iniziale
> Nel libro $0\in\N$. Alcuni testi usano $\N$ per $\{1,2,3,\ldots\}$: quando confronti materiali diversi, controlla la convenzione. Una dimostrazione di una proprietà richiesta solo per $n\ge1$ può comunque partire da 1, anche se qui i naturali comprendono zero.

> [!RICORDA]
> - $s(n)$ è il successore di $n$; negli esempi è $n+1$.
> - Il successore resta nei naturali, distingue numeri diversi e non ritorna a zero.
> - Contenere 0 ed essere chiusi per successore significa contenere tutto $\N$.

## L'induzione come metodo dimostrativo (pp. 6–7)

Prendi una fila di tessere del domino. Per farle cadere tutte servono due cose: far cadere la prima e disporle in modo che la caduta di una faccia cadere la successiva. La prima mossa, senza il collegamento tra tessere, non basta. Il collegamento, senza la prima mossa, lascia tutte le tessere in piedi.

Una dimostrazione per **induzione** usa lo stesso schema per una proprietà dei naturali. Chiamiamo $H(n)$ la frase che vogliamo dimostrare per il numero $n$.

> [!TEOREMA] 1.10 · Dimostrazione per induzione
> Supponiamo che per ogni $n\in\N$ sia assegnata una proprietà $H(n)$. Se
>
> - $H(0)$ è vera;
> - per ogni $n\in\N$, dalla verità di $H(n)$ segue la verità di $H(n+1)$;
>
> allora $H(n)$ è vera per ogni $n\in\N$.

**Come si legge.** Il primo punto è il **passo base**. Il secondo è il **passo induttivo**: prendi un numero qualunque, assumi la proprietà per quel numero e mostra che allora vale per il successivo. L'assunzione si chiama **ipotesi induttiva**.

> [!DIM] Dal quinto assioma al metodo
> Considera $U=\{n\in\N:H(n)\text{ è vera}\}$, l'insieme dei numeri per cui la proprietà vale.
>
> Il passo base dice $0\in U$.
>
> Il passo induttivo dice: se $n\in U$, allora $n+1\in U$. Quindi $U$ contiene il successore di ogni suo elemento.
>
> Il quinto assioma di Peano dà $U=\N$: la proprietà vale per tutti i naturali.

### L'ipotesi induttiva non è la conclusione

Nel passo induttivo **non** stai assumendo che la proprietà valga già per tutti i naturali. Assumi solo $H(n)$ per un $n$ qualunque, per dimostrare l'implicazione

$$H(n)\ \Longrightarrow\ H(n+1).$$

Il passo base accende poi la catena: $H(0)$, quindi $H(1)$, quindi $H(2)$, e così via.

> [!TRAPPOLA] Controllare 1, 2 e 3 non è il passo induttivo
> Quei controlli riguardano tre casi. Il passo induttivo deve funzionare per un $n$ qualunque. Anche un milione di controlli non dimostra una proprietà su un insieme infinito.

### Un esempio completo: la somma dei dispari

Con tre termini ottieni $1+3+5=9=3^2$. Con quattro ottieni $1+3+5+7=16=4^2$. La formula da dimostrare è

$$1+3+5+\cdots+(2n-1)=n^2 \qquad (n\ge1).$$

Il termine $2n-1$ è l'$n$-esimo dispari: per $n=1$ è 1, per $n=2$ è 3, per $n=3$ è 5.

**Passo base, $n=1$.** A sinistra hai solo 1; a destra $1^2=1$. La formula è vera.

**Ipotesi induttiva.** Supponi che per un certo $n\ge1$ valga

$$1+3+\cdots+(2n-1)=n^2.$$

**Obiettivo del passo.** Devi dimostrare la stessa formula per $n+1$:

$$1+3+\cdots+(2n-1)+(2(n+1)-1)=(n+1)^2.$$

L'ultimo termine nuovo è $2(n+1)-1=2n+1$. Raggruppa i vecchi termini, poi usa l'ipotesi proprio su quel gruppo:

$$
\begin{aligned}
1+3+\cdots+(2n-1)+(2n+1)
&=n^2+(2n+1)\\
&=n^2+2n+1\\
&=(n+1)^2.
\end{aligned}
$$

L'ultima riga è l'obiettivo. Il passo base e il passo induttivo dimostrano la formula per ogni $n\ge1$, come nella variante del principio ricordata nella nota 1.11 del libro.

> [!RIPASSO] Il quadrato di una somma
> $(n+1)^2$ significa $(n+1)(n+1)$. Distribuendo il prodotto ottieni $n^2+n+n+1=n^2+2n+1$. Per questo gli ultimi tre termini del conto diventano $(n+1)^2$.

::: prova Nel passaggio da $n=4$ a $n=5$, quali termini conosci grazie all'ipotesi induttiva e quale aggiungi?
Conosci $1+3+5+7=4^2=16$. Il nuovo termine è $2\cdot5-1=9$. La somma diventa $16+9=25=5^2$.

Nella dimostrazione generale fai lo stesso conto con $n$, non solo con 4.
:::

> [!METODO] Scrivere una dimostrazione per induzione
> 1. Scrivi la proprietà e per quali numeri vuoi dimostrarla.
> 2. Controlla il primo numero di quell'intervallo.
> 3. Scrivi l'ipotesi per $n$.
> 4. Scrivi separatamente l'obiettivo per $n+1$.
> 5. Parti dal nuovo caso, individua la parte coperta dall'ipotesi e sostituiscila.
> 6. Completa i passaggi fino all'obiettivo e concludi per induzione.

### Perché il caso iniziale va controllato

La frase falsa $n=n+1$ ha un passo induttivo formalmente funzionante: se assumessi $n=n+1$ e aggiungessi 1 ai due membri, otterresti $n+1=n+2$, cioè la stessa frase al successore. Ma per $n=0$ la frase è $0=1$, falsa. Non puoi avviare la catena.

Questo esempio mostra che il passo induttivo, preso da solo, non basta. Anche il contrario vale: sapere $H(0)$ senza un passaggio generale non ti autorizza a concludere $H(1)$.

> [!RICORDA]
> - Servono **entrambi**: passo base e passo induttivo.
> - Nel passo supponi $H(n)$ e dimostri $H(n+1)$; non supponi già l'obiettivo.
> - Se la proprietà parte da $n_0$, controlli $n_0$ e dimostri il passaggio per $n\ge n_0$.

## L'insieme delle parti e la sua cardinalità (pp. 4–7)

Prendi $A=\{a,b\}$. Le scelte possibili per un sottoinsieme sono quattro: non prendere niente, prendere solo $a$, prendere solo $b$, prendere entrambi.

$$P(A)=\{\emptyset,\{a\},\{b\},\{a,b\}\}.$$

Il contenitore esterno contiene **insiemi**: non contiene direttamente $a$ e $b$ come elementi. Per esempio $\{a\}\in P(A)$, mentre $a\notin P(A)$ se $a$ è un oggetto distinto da questi sottoinsiemi.

> [!DEF] 1.8 · Insieme delle parti
> Per un insieme $A$, l'**insieme delle parti** è l'insieme di tutti i suoi sottoinsiemi:
>
> $$P(A)=\{B:B\subset A\}.$$

**Come si legge.** Ogni elemento di $P(A)$ è una scelta di elementi di $A$. Controllare $B\in P(A)$ equivale a controllare $B\subset A$. La scelta può essere vuota e può essere l'intero insieme.

### Il vuoto ha una parte

Se $A=\emptyset$, l'unica scelta possibile è non prendere niente. Quindi

$$P(\emptyset)=\{\emptyset\}, \qquad |P(\emptyset)|=1.$$

Le graffe esterne indicano un contenitore con **un elemento**, che è l'insieme vuoto. Non confonderlo con un contenitore senza elementi.

| Insieme $A$ | Cardinalità di $A$ | Insieme delle parti | Cardinalità di $P(A)$ |
|---|---|---|---|
| $\emptyset$ | 0 | $\{\emptyset\}$ | 1 |
| $\{a\}$ | 1 | $\{\emptyset,\{a\}\}$ | 2 |
| $\{a,b\}$ | 2 | $\{\emptyset,\{a\},\{b\},\{a,b\}\}$ | 4 |

### Un elemento in più raddoppia le scelte

Ora aggiungi $c$ a $\{a,b\}$. Per ognuno dei quattro sottoinsiemi precedenti, hai due versioni: una senza $c$ e una con $c$.

| Senza $c$ | Con $c$ |
|---|---|
| $\emptyset$ | $\{c\}$ |
| $\{a\}$ | $\{a,c\}$ |
| $\{b\}$ | $\{b,c\}$ |
| $\{a,b\}$ | $\{a,b,c\}$ |

Sono otto sottoinsiemi. Ogni sottoinsieme nuovo sta in una sola colonna: o contiene $c$ o non lo contiene. Non ne perdi nessuno e non ne conti due volte uno.

> [!PROP] Cardinalità dell'insieme delle parti · p. 7
> Se $A$ è un insieme **finito** con $|A|=n$, allora
>
> $$|P(A)|=2^n.$$

**Come si legge.** Se dentro $A$ ci sono $n$ elementi, il numero di tutti i modi di sceglierne una parte è «due elevato a $n$». Per ogni elemento scegli se includerlo o escluderlo.

> [!DIM] Il conto per induzione
> **Base, $n=0$.** L'insieme è vuoto. Ha un solo sottoinsieme, se stesso: $|P(\emptyset)|=1=2^0$.
>
> **Ipotesi.** Ogni insieme con $n$ elementi ha $2^n$ sottoinsiemi.
>
> **Passo.** Prendi un insieme $A$ con $n+1$ elementi e scegli un elemento $a$. L'insieme $B=A\setminus\{a\}$ ha $n$ elementi.
>
> I sottoinsiemi di $A$ che **non contengono $a$** sono esattamente i sottoinsiemi di $B$: sono $2^n$ per l'ipotesi.
>
> Ogni sottoinsieme di $A$ che **contiene $a$** si ottiene aggiungendo $a$ a uno e un solo sottoinsieme di $B$. Anche questi sono $2^n$.
>
> Le due raccolte sono disgiunte e coprono tutte le scelte. In totale $2^n+2^n=2\cdot2^n=2^{n+1}$.
>
> La formula vale quindi per ogni cardinalità finita $n$.

### Contare con una condizione

Sia $A=\{a,b,c,d\}$. In tutto ci sono $2^4=16$ sottoinsiemi. Quanti contengono $a$?

La scelta su $a$ è già fissata: lo devi prendere. Rimangono libere le scelte su $b,c,d$, quindi $2^3=8$. Gli altri otto non contengono $a$.

Se devi contenere $a$ ed escludere $b$, rimangono libere due scelte: $c$ e $d$. Hai $2^2=4$ possibilità:

$$\{a\},\quad\{a,c\},\quad\{a,d\},\quad\{a,c,d\}.$$

> [!TRAPPOLA] La base della potenza è 2, non il numero degli elementi
> Cinque elementi danno $2^5=32$ sottoinsiemi, non $5^2=25$. Ogni elemento offre **due** scelte: dentro oppure fuori.

::: prova Sia $A=\{1,2,3\}$. (a) Quanti elementi ha $P(A)$? (b) È vero che $\{1,3\}\in P(A)$? (c) Quanti sottoinsiemi contengono 1 e non contengono 3?
(a) $|A|=3$, quindi $|P(A)|=2^3=8$.

(b) Sì: sia 1 sia 3 stanno in $A$, quindi $\{1,3\}$ è un suo sottoinsieme.

(c) La scelta su 1 e su 3 è fissata; rimane solo quella su 2. Le due possibilità sono $\{1\}$ e $\{1,2\}$.
:::

> [!RICORDA]
> - Gli elementi di $P(A)$ sono i sottoinsiemi di $A$.
> - Se $A$ è finito, $|P(A)|=2^{|A|}$, anche nel caso $A=\emptyset$.
> - Per contare sottoinsiemi con vincoli, distingui le scelte già fissate da quelle ancora libere.

## Coprire tutti gli elementi: i ricoprimenti (pp. 11–12)

Vuoi distribuire quattro tessere $X=\{1,2,3,4\}$ in alcuni contenitori. Nel primo metti 1 e 2, nel secondo 2 e 3, nel terzo 4:

$$A_1=\{1,2\},\qquad A_2=\{2,3\},\qquad A_3=\{4\}.$$

Ogni tessera compare in almeno un contenitore. Il 2 compare in due, ma per il momento questo è ammesso: hai un **ricoprimento** di $X$.

La raccolta dei contenitori si chiama **famiglia di sottoinsiemi**. La scriviamo

$$\mathcal A=\{A_1,A_2,A_3\}.$$

Il pedice è un'etichetta: $A_2$ significa «il secondo sottoinsieme». Non è una potenza e non significa che ogni sua tessera sia il numero 2.

> [!DEF] 1.19 · Ricoprimento
> Sia $\mathcal A=\{A_i\}_{i\in I}$ una famiglia di sottoinsiemi di $X$. È un **ricoprimento di $X$** se
>
> $$\bigcup_{i\in I} A_i=X.$$

**Come si legge.** $I$ è l'insieme delle etichette dei sottoinsiemi. Il simbolo $\bigcup$ significa «unisci tutte le parti della famiglia». Il risultato deve essere esattamente $X$. Con tre parti, la formula dice semplicemente $A_1\cup A_2\cup A_3=X$.

In termini di elementi, la condizione è: per ogni $x\in X$ esiste almeno un indice $i$ per cui $x\in A_i$.

### Si controlla l'unione, non la somma delle cardinalità

Nell'esempio,

$$A_1\cup A_2=\{1,2,3\},$$

$$A_1\cup A_2\cup A_3=\{1,2,3,4\}=X.$$

Quindi è un ricoprimento. Invece la somma delle cardinalità vale $2+2+1=5$, anche se $X$ ha quattro elementi: il 2 è stato contato due volte.

> [!TRAPPOLA] Le parti di un ricoprimento possono sovrapporsi
> Non devi richiedere che la somma delle cardinalità sia $|X|$. Devi verificare che l'unione sia $X$: le ripetizioni spariscono quando fai l'unione.

### Se manca una tessera, il ricoprimento fallisce

La famiglia $\{\{1,2\},\{2,3\}\}$ non ricopre $X=\{1,2,3,4\}$: nell'unione manca il 4. Non basta che ogni contenitore sia un sottoinsieme di $X$; insieme devono raggiungere tutti gli elementi.

Neppure $\{\{1,2\},\{3,4,5\}\}$ è un ricoprimento di quel $X$: la seconda parte contiene un elemento esterno. La definizione richiede già che ogni $A_i$ sia un sottoinsieme di $X$.

::: prova Per $X=\{a,b,c\}$, quali famiglie sono ricoprimenti? (a) $\{\{a,b\},\{b,c\}\}$; (b) $\{\{a\},\{b\}\}$; (c) $\{X,\emptyset\}$.
(a) Sì: l'unione contiene $a,b,c$. La ripetizione di $b$ è ammessa.

(b) No: manca $c$.

(c) Sì: $X\cup\emptyset=X$. Un ricoprimento può contenere una parte vuota, perché per questa definizione non è vietata.
:::

### Gli elementi e le parti sono due livelli diversi

Se $X=\{1,2,3,4\}$, la parte $A_1=\{1,2\}$ è un **elemento di $P(X)$**. Una famiglia di parti come $\mathcal A=\{A_1,A_2,A_3\}$ è quindi un **sottoinsieme di $P(X)$**.

$$A_i\in P(X),\qquad \mathcal A\subset P(X).$$

È lo stesso passaggio che hai visto con l'insieme delle parti: le tessere sono gli elementi di $X$; i contenitori di tessere sono gli elementi della famiglia.

> [!RICORDA]
> - Un ricoprimento è una famiglia di sottoinsiemi di $X$ la cui unione è tutto $X$.
> - Ogni elemento deve comparire almeno una volta.
> - Sovrapposizioni e parti vuote sono ammesse per un ricoprimento.

## Dividere senza sovrapporre: le partizioni (p. 12)

Ora vuoi mettere ogni tessera in **un solo** contenitore e non vuoi contenitori vuoti. Per $X=\{1,2,3,4,5\}$ una scelta è

$$B_1=\{1,2\},\qquad B_2=\{3\},\qquad B_3=\{4,5\}.$$

Ogni tessera compare una volta sola. Le tre parti formano una **partizione** di $X$.

```grafico
titolo: Una partizione: le tre parti non si toccano e ogni elemento di $X$ compare in una sola parte
x: -2.5 2.5
y: -2.4 2.4
assi: no
griglia: no
cerchio: 0 0 2.15 | blu
cerchio: -1.15 0.55 0.7 | accento | spesso
cerchio: 1.15 0.55 0.7 | accento | spesso
cerchio: 0 -1.15 0.7 | accento | spesso
testo: 0 2.3 | blu | $X$
testo: -1.15 1.45 | accento | $B_1$
testo: 1.15 1.45 | accento | $B_2$
testo: 0 -2.1 | accento | $B_3$
testo: -1.35 0.7 | accento | $1$
testo: -0.95 0.3 | accento | $2$
testo: 1.15 0.55 | accento | $3$
testo: -0.2 -1.05 | accento | $4$
testo: 0.2 -1.4 | accento | $5$
```

> [!DEF] 1.21 · Partizione
> Una famiglia $\mathcal A=\{A_i\}_{i\in I}$ di sottoinsiemi di $X$ è una **partizione di $X$** se:
>
> 1. è un ricoprimento di $X$: $\bigcup_{i\in I}A_i=X$;
> 2. ogni parte è non vuota: $A_i\ne\emptyset$ per ogni $i\in I$;
> 3. parti con indici diversi sono disgiunte: se $i\ne j$, allora $A_i\cap A_j=\emptyset$.

**Come si legge.** «Ricoprimento» impedisce di perdere elementi. «Non vuote» impedisce di inserire contenitori senza tessere. «Disgiunte a due a due» impedisce di mettere la stessa tessera in due parti diverse. Le parti si chiamano anche **blocchi** della partizione.

### Le tre condizioni si controllano separatamente

Per $X=\{1,2,3,4\}$ confronta queste famiglie.

| Famiglia | Unione uguale a $X$? | Parti non vuote? | Disgiunte a due a due? | Partizione? |
|---|---|---|---|---|
| $\{\{1,2\},\{3,4\}\}$ | sì | sì | sì | sì |
| $\{\{1,2,3\},\{3,4\}\}$ | sì | sì | no: il 3 compare due volte | no |
| $\{\{1,2\},\{3\}\}$ | no: manca il 4 | sì | sì | no |
| $\{\{1,2\},\{3,4\},\emptyset\}$ | sì | no | sì | no |

Una sola condizione fallita basta per dire «non è una partizione». Per dire «è una partizione», invece, devi averle verificate tutte e tre.

> [!METODO] Verificare una partizione
> 1. Controlla che le parti siano sottoinsiemi di $X$.
> 2. Fai l'unione: deve essere tutto $X$.
> 3. Cerca parti vuote: non devono essercene.
> 4. Controlla ogni coppia di parti distinte: non devono avere elementi comuni.
> 5. Se una condizione fallisce, scrivi quale e indica un elemento o una parte che lo mostra.

### «A due a due» non significa «tutte insieme»

Prendi $X=\{1,2,3\}$ e

$$A=\{1,2\},\qquad B=\{2,3\},\qquad C=\{1,3\}.$$

Le tre parti ricoprono $X$ e sono non vuote. Nessun numero appartiene a tutte e tre, quindi

$$A\cap B\cap C=\emptyset.$$

Ma le intersezioni delle **coppie** non sono vuote:

$$A\cap B=\{2\},\qquad A\cap C=\{1\},\qquad B\cap C=\{3\}.$$

La famiglia non è una partizione: ogni tessera sta in due parti.

> [!TRAPPOLA] L'intersezione totale vuota non basta
> Devi verificare $A_i\cap A_j=\emptyset$ per **ogni coppia** con $i\ne j$. Una tessera può appartenere a due parti anche se nessuna appartiene a tutte.

::: prova Per $X=\{a,b,c,d\}$, la famiglia $\{\{a,c\},\{b\},\{d\}\}$ è una partizione? Quanti elementi ha $X$ e quanti blocchi ha la famiglia?
Sì: l'unione è $X$, tutte le parti sono non vuote e nessuna lettera compare in due parti.

$X$ ha quattro elementi. La partizione ha tre blocchi: uno contiene due elementi e gli altri due ne contengono uno ciascuno. Non confondere il numero delle tessere con quello dei contenitori.
:::

### Un insieme e il suo complementare

Se $X=\{1,2,3,4\}$ e $A=\{1,3\}$, il complementare è $C_X(A)=\{2,4\}$. La famiglia

$$\{A,C_X(A)\}$$

è una partizione: le parti sono non vuote, la loro unione è $X$ e la loro intersezione è vuota.

Il libro richiede per questo esempio che $A$ sia un sottoinsieme **non banale**: non deve essere né $\emptyset$ né $X$. In quei due casi una delle parti sarebbe vuota, e la famiglia non sarebbe una partizione.

### Esempi infiniti: pari e dispari, intervalli

I naturali si dividono nei pari e nei dispari:

$$E=\{0,2,4,6,\ldots\},\qquad O=\{1,3,5,7,\ldots\}.$$

Ogni naturale è pari oppure dispari, nessuno è entrambi e i due insiemi sono non vuoti. Perciò $\{E,O\}$ è una partizione di $\N$.

Sulla retta reale, invece, gli intervalli chiusi $[n,n+1]$, con $n\in\Z$, formano un ricoprimento: insieme coprono tutta la retta. Non formano una partizione, perché due intervalli vicini condividono l'estremo. Per esempio

$$[0,1]\cap[1,2]=\{1\}.$$

Se usi $[n,n+1)$, includendo l'estremo sinistro ed escludendo quello destro, la ripetizione scompare. Il numero 1 appartiene a $[1,2)$ e non a $[0,1)$. In generale ogni reale cade in esattamente uno di questi intervalli: ottieni una partizione.

> [!RIPASSO] Un intervallo chiuso da una parte sola
> $[a,b)=\{x\in\R:a\le x<b\}$. La parentesi quadra include $a$; quella tonda esclude $b$. Quindi $a\in[a,b)$, ma $b\notin[a,b)$.

### Contare gli elementi di una partizione finita

Nell'esempio $B_1=\{1,2\}$, $B_2=\{3\}$, $B_3=\{4,5\}$, le cardinalità sono 2, 1 e 2. Siccome i blocchi sono disgiunti, ogni elemento viene contato una sola volta:

$$|X|=|B_1|+|B_2|+|B_3|=2+1+2=5.$$

Questo conto è valido perché hai già verificato la partizione. La sola uguaglianza delle cardinalità non dimostra che sia una partizione: su $X=\{1,2,3,4\}$ le parti $\{1,2\}$ e $\{2,3\}$ danno $2+2=4$, ma ripetono il 2 e dimenticano il 4.

> [!APPROFONDIMENTO] Il caso dell'insieme vuoto
> Con la definizione del libro, la famiglia vuota è una partizione di $\emptyset$: la sua unione è vuota e non ci sono blocchi vuoti né coppie che si sovrappongono. La famiglia $\{\emptyset\}$, invece, contiene un blocco vuoto e non è una partizione. È la stessa distinzione tra «nessun contenitore» e «un contenitore vuoto».

> [!RICORDA]
> - Ogni partizione è un ricoprimento; un ricoprimento può non essere una partizione.
> - Una partizione copre tutto, ha blocchi non vuoti e disgiunti **a due a due**.
> - Ogni elemento di $X$ appartiene a uno e un solo blocco.

## I simboli di questa lezione

| Simbolo | Si legge | Che cosa vuol dire | Esempio |
|---|---|---|---|
| $X\setminus A$ | «$X$ meno $A$» | gli elementi di $X$ che non stanno in $A$ | $\{1,2,3\}\setminus\{2\}=\{1,3\}$ |
| $C_X(A)$ | «complementare di $A$ in $X$» | $X\setminus A$, con $A\subset X$ | $C_{\{1,2\}}(\{1\})=\{2\}$ |
| $A\cup B$ | «$A$ unione $B$» | gli elementi di almeno uno dei due insiemi | $\{1\}\cup\{2\}=\{1,2\}$ |
| $A\cap B$ | «$A$ intersezione $B$» | gli elementi comuni ai due insiemi | $\{1,2\}\cap\{2,3\}=\{2\}$ |
| $\emptyset$ | «insieme vuoto» | un insieme senza elementi | $\{1\}\cap\{2\}=\emptyset$ |
| $\N$ | «enne», numeri naturali | $0,1,2,\ldots$ nel libro | $0\in\N$ |
| $s(n)$ | «successore di $n$» | il naturale che viene subito dopo $n$ | $s(3)=4$ |
| $H(n)$ | «acca di $n$» | la proprietà da dimostrare per $n$ | la somma dei primi $n$ dispari è $n^2$ |
| $H(n)\Rightarrow H(n+1)$ | «$H(n)$ implica $H(n+1)$» | la proprietà passa al successore | il passo induttivo |
| $P(A)$ | «insieme delle parti di $A$» | l'insieme di tutti i sottoinsiemi di $A$ | $P(\{a\})=\{\emptyset,\{a\}\}$ |
| $\lvert A\rvert$ | «cardinalità di $A$» | il numero degli elementi, se $A$ è finito | $\lvert\{a,b\}\rvert=2$ |
| $2^n$ | «due alla $n$» | il prodotto di $n$ fattori uguali a 2, con $2^0=1$ | $2^3=8$ |
| $\mathcal A$ | «famiglia A» | una raccolta di sottoinsiemi | $\{\{1,2\},\{3\}\}$ |
| $\bigcup_{i\in I}A_i$ | «unione di tutti gli $A_i$» | gli elementi di almeno una parte della famiglia | $A_1\cup A_2\cup A_3$ |
| $i\ne j$ | «$i$ diverso da $j$» | si stanno confrontando due parti distinte | $A_i\cap A_j=\emptyset$ |
| $[a,b)$ | «intervallo da $a$ incluso a $b$ escluso» | $a\le x<b$ | $0\in[0,1)$, $1\notin[0,1)$ |

## Verso l'esame

Questa lezione richiede due tipi di lavoro: **riconoscere una definizione** su un esempio e **scrivere un ragionamento generale**. Sono abilità diverse: fare bene i conti su un insieme piccolo aiuta, ma non sostituisce una dimostrazione.

| Richiesta | Che cosa scrivere o controllare | Errore tipico |
|---|---|---|
| Calcola un complementare | l'insieme di riferimento e gli elementi che rimangono | includere elementi fuori da $X$ |
| Usa De Morgan | cambia $\cup$ con $\cap$ o viceversa e complementa ogni parte | distribuire il complementare senza cambiare operazione |
| Dimostra un'identità tra insiemi | un elemento generico e le due inclusioni, oppure una catena di equivalenze | controllare soltanto un esempio |
| Dimostra per induzione | base, ipotesi, obiettivo al successore e passaggi | assumere già il caso $n+1$ |
| Conta i sottoinsiemi | il numero delle scelte libere e la potenza di 2 | dimenticare il vuoto o l'intero insieme |
| Verifica una partizione | copertura, blocchi non vuoti, ogni coppia disgiunta | guardare solo l'intersezione di tutte le parti |

Per le regole della prova fai riferimento alla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md). I quiz e gli esercizi qui sotto sono costruiti per ripassare gli argomenti della lezione; non sono presentati come domande di uno specifico appello.

> [!ESAME] Per dire «falso», indica il punto preciso
> Se una famiglia non è una partizione, scrivi quale condizione fallisce: «manca il 4», «c'è una parte vuota», «il 2 appartiene a due parti». Se una formula tra insiemi è falsa, indica un elemento che appartiene a un membro e non all'altro. Una motivazione concreta controlla davvero la definizione.

## Quiz

```quiz
D: Siano $X=\{1,2,3,4,5\}$ e $A=\{2,5\}$. Qual è $C_X(A)$?
+ $\{1,3,4\}$.
- $\{2,5\}$.
- $\{1,3,4,6\}$.
- $\emptyset$.
= Il complementare contiene gli elementi di $X$ che non sono in $A$: togli 2 e 5, rimangono 1, 3 e 4. Il 6 non può entrare, perché non appartiene a $X$.

D: Quale formula è una legge di De Morgan, per $A,B\subset X$?
+ $C_X(A\cup B)=C_X(A)\cap C_X(B)$.
- $C_X(A\cup B)=C_X(A)\cup C_X(B)$.
- $C_X(A\cap B)=C_X(A)\cap C_X(B)$.
- $C_X(A\cup B)=A\cap B$.
= Per essere fuori dall'unione devi essere fuori da entrambi gli insiemi. Il complementare scambia l'unione con l'intersezione e si applica a entrambe le parti.

D: Se $x\in A$ e $x\notin B$, con $A,B\subset X$, quale affermazione è vera?
+ $x\in C_X(A\cap B)$.
- $x\in C_X(A\cup B)$.
- $x\in C_X(A)$.
- $x\in A\cap B$.
= L'elemento non sta in entrambi, perché non sta in $B$: è nel complementare dell'intersezione. Sta però in $A$, quindi sta nell'unione e non nel suo complementare.

D: Quale proprietà del successore è richiesta dagli assiomi di Peano?
+ Due naturali diversi hanno successori diversi.
- Il successore di zero è zero.
- Ogni naturale è il successore di qualche naturale, compreso zero.
- Una raccolta finita contenente zero contiene tutti i naturali.
= È l'assioma 3. Lo zero non è il successore di nessun naturale; per ottenere tutti i naturali non basta contenere zero, occorre anche contenere il successore di ogni proprio elemento.

D: Per dimostrare per induzione una proprietà per ogni $n\ge1$, quali verifiche sono sufficienti?
+ La proprietà per $n=1$ e l'implicazione $H(n)\Rightarrow H(n+1)$ per ogni $n\ge1$.
- La proprietà per $n=1,2,3$.
- La sola implicazione $H(n)\Rightarrow H(n+1)$.
- La proprietà per $n=1$ e l'assunzione che sia vera per tutti gli altri numeri.
= Il passo base avvia la catena; il passo generale la fa proseguire. Alcuni controlli numerici non sostituiscono il passo induttivo e assumere la conclusione non la dimostra.

D: Nell'induzione sulla somma dei primi $n$ dispari, quale termine aggiungi per passare da $n$ a $n+1$?
+ $2n+1$.
- $2n-1$.
- $n+1$.
- $n^2$.
= Il nuovo dispari è $2(n+1)-1=2n+1$. Il termine $2n-1$ era già l'ultimo dei primi $n$ termini e non va aggiunto una seconda volta.

D: Quanti sottoinsiemi ha un insieme con 6 elementi?
N: 64
= Ogni elemento offre due scelte, incluso o escluso. Il numero totale è $2^6=64$, compresi il vuoto e l'insieme intero.

D: Quanto vale $P(\emptyset)$?
+ $\{\emptyset\}$.
- $\emptyset$.
- $\{0\}$.
- $\{\emptyset,\{\emptyset\}\}$.
= Il vuoto ha un solo sottoinsieme: se stesso. L'insieme delle parti ha quindi un elemento, che è l'insieme vuoto. Non è un insieme senza elementi.

D: Se $A=\{a,b,c,d,e\}$, quanti suoi sottoinsiemi contengono $a$ ed escludono $e$?
N: 8
= Le scelte su $a$ ed $e$ sono fissate. Restano libere quelle su $b,c,d$: due possibilità ciascuna, quindi $2^3=8$.

D: Quale famiglia è una partizione di $X=\{1,2,3,4\}$?
+ $\{\{1,3\},\{2\},\{4\}\}$.
- $\{\{1,2\},\{2,3,4\}\}$.
- $\{\{1,2\},\{3\}\}$.
- $\{\{1,2\},\{3,4\},\emptyset\}$.
= Nella prima famiglia tutti gli elementi sono coperti, ogni blocco è non vuoto e i blocchi non si sovrappongono. Le altre falliscono rispettivamente per il 2 ripetuto, il 4 mancante e la parte vuota.

D: Tre sottoinsiemi non vuoti ricoprono $X$ e la loro intersezione totale è vuota. Che cosa puoi concludere?
+ Sono un ricoprimento; per la partizione devi ancora verificare le intersezioni di ogni coppia.
- Sono certamente una partizione.
- Sono disgiunti a due a due.
- Non possono essere una partizione.
= L'intersezione totale vuota dice solo che nessun elemento sta in tutte e tre le parti. Un elemento può ancora stare in due parti: la disgiunzione richiesta va controllata coppia per coppia.

D: Per un insieme non vuoto $X$, quando $\{A,C_X(A)\}$ è una partizione?
+ Quando $A$ è diverso sia da $\emptyset$ sia da $X$.
- Sempre, anche quando $A=\emptyset$.
- Solo quando $A=X$.
- Quando $A\cap C_X(A)$ è non vuoto.
= Unione e disgiunzione sono già garantite dalle proprietà del complementare. Per una partizione servono anche due parti non vuote: se $A=\emptyset$ o $A=X$, una delle parti è vuota.
```

## Esercizi

Prova a scrivere il ragionamento prima di aprire la soluzione. Negli esercizi sugli insiemi indica sempre dove stai prendendo gli elementi; nelle dimostrazioni per induzione separa base, ipotesi e passo.

::: esercizio base Lo stesso insieme, due complementari
Siano $X=\{1,2,3,4,5,6\}$, $Y=\{1,2,3,4,5,6,7\}$ e $A=\{2,4,6\}$. Calcola $C_X(A)$ e $C_Y(A)$. L'elemento 100 appartiene a uno dei due complementari? Spiega perché i risultati sono diversi anche se $A$ non cambia.
::: soluzione
Nel primo caso togli da $X$ gli elementi di $A$:

$$
C_X(A)=\{1,3,5\}.
$$

Nel secondo caso fai la stessa operazione dentro $Y$:

$$
C_Y(A)=\{1,3,5,7\}.
$$

Il 7 compare solo nel secondo risultato perché appartiene a $Y$, non a $X$, e non appartiene ad $A$. Il 100 non compare in nessuno dei due: non basta essere fuori da $A$, bisogna anche essere **dentro l'insieme di riferimento**.

I due complementari sono diversi perché il complementare dipende da due dati: l'insieme da escludere e l'insieme entro cui si lavora.
:::

::: esercizio medio De Morgan con tre insiemi
Siano $X=\{1,2,3,4,5,6\}$, $A=\{1,2,3\}$, $B=\{3,4,5\}$ e $C=\{2,4,6\}$. Calcola $C_X((A\cup B)\cap C)$ in due modi: direttamente e usando le leggi di De Morgan.
::: soluzione
**Calcolo diretto.** Prima l'unione:

$$
A\cup B=\{1,2,3,4,5\}.
$$

Interseca con $C$: il 2 e il 4 sono presenti in entrambi, il 6 no. Quindi

$$
(A\cup B)\cap C=\{2,4\},
\qquad C_X((A\cup B)\cap C)=\{1,3,5,6\}.
$$

**Con De Morgan.** Il complementare dell'intersezione diventa l'unione dei complementari:

$$
\begin{aligned}
C_X((A\cup B)\cap C)
&=C_X(A\cup B)\cup C_X(C)\\
&=(C_X(A)\cap C_X(B))\cup C_X(C).
\end{aligned}
$$

Ora calcola le singole parti:

$$
C_X(A)=\{4,5,6\},\quad
C_X(B)=\{1,2,6\},\quad
C_X(C)=\{1,3,5\}.
$$

L'intersezione dei primi due complementari è $\{6\}$. Unendola al terzo ottieni $\{1,3,5,6\}$, come nel calcolo diretto.

Le parentesi guidano l'ordine delle operazioni: prima scambi l'operazione più esterna, poi quella interna.
:::

::: esercizio medio Una formula falsa e un elemento che la smentisce
Mostra con un controesempio che, in generale, $C_X(A\cup B)$ non è uguale a $C_X(A)\cup C_X(B)$. Usa $X=\{1,2\}$, $A=\{1\}$ e $B=\{2\}$.
::: soluzione
L'unione $A\cup B$ coincide con $X$. Il suo complementare è quindi vuoto:

$$
C_X(A\cup B)=\emptyset.
$$

Invece $C_X(A)=\{2\}$ e $C_X(B)=\{1\}$, perciò

$$
C_X(A)\cup C_X(B)=\{1,2\}.
$$

I due membri sono diversi. Per renderlo esplicito puoi scegliere il 1: appartiene al secondo membro ma non al primo.

Questo controesempio basta a smentire una formula proposta per **tutti** gli insiemi. La formula corretta usa l'intersezione dei complementari, che qui dà proprio il vuoto.
:::

::: esercizio medio Peano e l'insieme degli interi
Considera $\Z$ con l'elemento 0 e il successore $s(n)=n+1$. Mostra che questo non soddisfa tutti gli assiomi di Peano della lezione. Quale assioma puoi smentire immediatamente?
::: soluzione
L'assioma 4 dice che zero non è il successore di nessun elemento. Negli interi, invece, esiste $-1$ e

$$
s(-1)=-1+1=0.
$$

Questo basta a concludere che la struttura proposta non soddisfa tutti gli assiomi.

Puoi controllare anche l'assioma 5: il sottoinsieme $U=\{0,1,2,\ldots\}$ degli interi contiene zero e contiene il successore di ogni proprio elemento, ma non coincide con $\Z$, perché non contiene gli interi negativi.

Il punto è il dominio: la stessa scrittura $s(n)=n+1$ ha proprietà diverse se permetti anche i numeri negativi.
:::

::: esercizio medio Una somma di potenze di due per induzione
Dimostra che, per ogni intero $n\ge1$,

$$
1+2+2^2+\cdots+2^{n-1}=2^n-1.
$$

Indica con precisione quale termine aggiungi nel passo induttivo.
::: soluzione
**Base $n=1$.** A sinistra c'è il solo termine $1=2^0$; a destra $2^1-1=1$. La formula è vera.

**Ipotesi induttiva.** Fissa un $n\ge1$ e supponi che

$$
1+2+\cdots+2^{n-1}=2^n-1.
$$

**Obiettivo.** Per $n+1$ devi ottenere $2^{n+1}-1$. La somma ha un termine in più, che è $2^n$: l'esponente dell'ultimo termine passa da $n-1$ a $n$.

$$
\begin{aligned}
1+2+\cdots+2^{n-1}+2^n
&=(2^n-1)+2^n &&\text{per l'ipotesi induttiva}\\
&=2\cdot2^n-1\\
&=2^{n+1}-1.
\end{aligned}
$$

Hai verificato la base e il passo per un $n$ arbitrario. Il principio di induzione conclude che la formula vale per ogni $n\ge1$.

Per un controllo numerico, con $n=4$ ottieni $1+2+4+8=15=2^4-1$. Il controllo aiuta a leggere la formula, ma la dimostrazione è il ragionamento generale appena scritto.
:::

::: esercizio difficile Una disuguaglianza per induzione
Dimostra che $2^n\ge n+1$ per ogni $n\in\N$. Spiega dove utilizzi l'ipotesi induttiva e dove utilizzi $n\ge0$.
::: soluzione
**Base $n=0$.** $2^0=1\ge0+1$: qui c'è uguaglianza.

**Ipotesi.** Fissa $n\ge0$ e supponi $2^n\ge n+1$.

**Passo.** Moltiplica entrambi i membri per 2, che è positivo e quindi conserva il verso della disuguaglianza:

$$
2^{n+1}=2\cdot2^n\ge2(n+1)=2n+2.
$$

Questo primo confronto usa l'ipotesi induttiva. Per arrivare all'obiettivo $2^{n+1}\ge(n+1)+1=n+2$ osserva che

$$
2n+2-(n+2)=n\ge0.
$$

Quindi $2n+2\ge n+2$. Mettendo insieme i due confronti:

$$
2^{n+1}\ge2n+2\ge n+2.
$$

Il secondo confronto usa $n\ge0$. Base e passo sono verificati: la proprietà vale per ogni naturale.

Non devi trasformare tutte le disuguaglianze in uguaglianze: per raggiungere l'obiettivo basta una catena di confronti nella direzione corretta.
:::

::: esercizio difficile Le parentesi nell'insieme delle parti
Sia $A=\{\emptyset,\{a\}\}$, dove $a$ è un simbolo distinto dagli insiemi scritti. Elenca $P(A)$ e stabilisci se sono vere $\{a\}\in A$, $\{a\}\subset A$ e $\{\{a\}\}\subset A$.
::: soluzione
L'insieme $A$ ha **due elementi**: il primo è $\emptyset$, il secondo è $\{a\}$. Ciascuno può essere incluso o escluso da un sottoinsieme. I quattro sottoinsiemi sono:

$$
P(A)=\big\{\emptyset,\ \{\emptyset\},\ \{\{a\}\},\ \{\emptyset,\{a\}\}\big\}.
$$

Il primo non contiene alcun elemento di $A$; il secondo contiene solo il primo; il terzo contiene solo il secondo; l'ultimo coincide con $A$.

- $\{a\}\in A$ è **vero**: $\{a\}$ è proprio uno dei due elementi elencati in $A$.
- $\{a\}\subset A$ è **falso**: richiederebbe $a\in A$, mentre gli elementi di $A$ sono $\emptyset$ e $\{a\}$, non $a$.
- $\{\{a\}\}\subset A$ è **vero**: il suo unico elemento è $\{a\}$, che appartiene ad $A$.

Il controllo numerico torna: $|A|=2$ e $|P(A)|=4=2^2$. Le parentesi non cambiano la regola di conteggio, ma cambiano quali oggetti stai contando.
:::

::: esercizio medio Contare con due scelte fissate
Sia $A=\{a,b,c,d,e\}$. Quanti suoi sottoinsiemi contengono $a$? Quanti contengono $a$ ma non $e$? Quanti non contengono né $a$ né $e$?
::: soluzione
**Contengono $a$.** La scelta su $a$ è fissata: deve esserci. Restano quattro elementi liberi, $b,c,d,e$, ciascuno con due possibilità. Il numero è $2^4=16$.

**Contengono $a$ ma non $e$.** Ora fissi due scelte, una inclusione e una esclusione. Restano liberi $b,c,d$: il numero è $2^3=8$.

**Non contengono né $a$ né $e$.** Sono fissate due esclusioni. Restano gli stessi tre elementi liberi, quindi ancora $2^3=8$.

In quest'ultimo caso il sottoinsieme vuoto va contato: rispetta la richiesta, perché non contiene né $a$ né $e$. Nel secondo caso, invece, il vuoto non va contato perché non contiene $a$.
:::

::: esercizio esame Ricoprimento o partizione? Motiva ogni risposta
Per $X=\{1,2,3,4\}$ considera le famiglie:

$$
\begin{aligned}
\mathcal F_1&=\{\{1,2\},\{3,4\}\},\\
\mathcal F_2&=\{\{1,2,3\},\{3,4\}\},\\
\mathcal F_3&=\{\{1,2\},\{3\}\},\\
\mathcal F_4&=\{\{1,2\},\{3,4\},\emptyset\}.
\end{aligned}
$$

Per ciascuna stabilisci se è un ricoprimento e se è una partizione. Non limitarti a scrivere «sì» o «no».
::: soluzione
**$\mathcal F_1$.** L'unione è $X$, entrambi i blocchi sono non vuoti e l'intersezione è vuota. È un ricoprimento e una partizione.

**$\mathcal F_2$.** L'unione è $X$: è un ricoprimento. Non è una partizione, perché il 3 appartiene a entrambe le parti; la loro intersezione è $\{3\}$.

**$\mathcal F_3$.** L'unione è $\{1,2,3\}$ e manca il 4. Non è un ricoprimento, quindi non è neppure una partizione. Il fatto che i blocchi siano non vuoti e disgiunti non compensa l'elemento mancante.

**$\mathcal F_4$.** L'unione è $X$: è un ricoprimento. Il vuoto non aggiunge elementi, ma è ammesso in un ricoprimento. Non è una partizione, perché una delle parti è vuota.

Le risposte controllano separatamente le tre condizioni. Ognuna può fallire anche quando le altre due sono rispettate.
:::

::: esercizio esame L'intersezione totale non basta
Siano $X=\{1,2,3\}$, $A=\{1,2\}$, $B=\{2,3\}$ e $C=\{1,3\}$. Verifica che i tre insiemi ricoprono $X$ e che $A\cap B\cap C=\emptyset$. Formano una partizione?
::: soluzione
L'unione contiene 1, 2 e 3 e non contiene altro: è $X$. Quindi la famiglia è un ricoprimento.

L'intersezione $A\cap B$ è $\{2\}$; intersecandola con $C$, che non contiene 2, ottieni il vuoto. Nessun elemento appartiene a tutti e tre gli insiemi.

Ma le intersezioni delle coppie sono:

$$
A\cap B=\{2\},\qquad
A\cap C=\{1\},\qquad
B\cap C=\{3\}.
$$

Nessuna delle tre è vuota. La famiglia **non è una partizione**: ogni elemento compare in due parti. La definizione richiede che ciascun elemento compaia in una sola parte, non soltanto che non compaia in tutte.
:::

::: esercizio difficile Tutte le partizioni di un insieme con tre elementi
Elenca tutte le partizioni di $X=\{a,b,c\}$. Quante sono? Perché il risultato non è $2^3$?
::: soluzione
Puoi ordinare il lavoro secondo il numero dei blocchi.

**Un blocco.** Deve contenere tutto $X$, altrimenti non c'è copertura:

$$
\{\{a,b,c\}\}.
$$

**Due blocchi.** Uno contiene un elemento e l'altro i due rimanenti. Le possibilità sono:

$$
\{\{a\},\{b,c\}\},\quad
\{\{b\},\{a,c\}\},\quad
\{\{c\},\{a,b\}\}.
$$

Scambiare l'ordine dei blocchi non produce una nuova famiglia: gli insiemi non hanno un ordine.

**Tre blocchi.** Devono essere tutti singoletti:

$$
\{\{a\},\{b\},\{c\}\}.
$$

Non possono esserci più di tre blocchi non vuoti e disgiunti, perché ciascuno deve contenere almeno uno dei tre elementi. In totale ci sono $1+3+1=5$ partizioni.

$2^3=8$ conta invece i **sottoinsiemi** di $X$. Una partizione è una famiglia di sottoinsiemi che soddisfa condizioni aggiuntive: stai contando un oggetto diverso.
:::

::: esercizio medio Gli estremi degli intervalli
Per ogni $n\in\Z$ considera $I_n=[n,n+1]$ e $J_n=[n,n+1)$. Spiega perché entrambe le famiglie ricoprono $\R$, ma solo la seconda è una partizione. In quali intervalli della seconda famiglia stanno 2 e $-0{,}2$?
::: soluzione
Entrambe le famiglie coprono la retta: ogni reale si trova tra due interi consecutivi, con il caso degli interi incluso.

Gli intervalli chiusi $I_n$ non sono disgiunti. Per esempio $I_1=[1,2]$ e $I_2=[2,3]$ contengono entrambi 2. In generale $I_n\cap I_{n+1}=\{n+1\}$. Questa famiglia è un ricoprimento, ma non una partizione.

Negli intervalli $J_n$ l'estremo sinistro è incluso e quello destro escluso. Il punto $n+1$ non appartiene a $J_n$, ma appartiene a $J_{n+1}$. Tutti gli intervalli sono non vuoti e ogni reale appartiene a uno solo: è una partizione.

In particolare $2\in[2,3)$, mentre $2\notin[1,2)$. Il numero $-0{,}2$ appartiene a $[-1,0)$: è maggiore di $-1$ e minore di 0. Gli intervalli sono indicizzati da **tutti gli interi**, anche quelli negativi; con i soli naturali non copriresti la parte negativa della retta.
:::

## Domande di ripasso

::: domanda Perché, quando scrivi un complementare, devi indicare l'insieme di riferimento?
Perché il complementare contiene gli elementi che sono fuori da $A$ ma dentro $X$. Cambiando $X$ possono cambiare gli elementi disponibili. La notazione $C_X(A)$ rende visibili entrambi i dati.
:::

::: domanda Qual è la differenza tra $X\setminus A$ e $C_X(A)$ nella terminologia del libro?
La differenza $X\setminus A$ si definisce anche senza supporre $A\subset X$. Il complementare $C_X(A)$ si usa per un sottoinsieme $A$ di $X$ e coincide allora con quella differenza.
:::

::: domanda Come leggi le due leggi di De Morgan senza ricordarle soltanto a memoria?
Fuori dall'unione significa fuori da entrambi: intersezione dei complementari. Fuori dall'intersezione significa non essere in entrambi, quindi essere fuori da almeno uno: unione dei complementari. In entrambe le formule tutte le parti hanno lo stesso insieme di riferimento.
:::

::: domanda A cosa serve il quinto assioma di Peano?
Garantisce che un sottoinsieme dei naturali contenente zero e chiuso rispetto al successore contenga tutti i naturali. Applicandolo all'insieme dei numeri per cui una proprietà è vera, ottieni il principio di induzione.
:::

::: domanda Che cosa assumi e che cosa devi dimostrare nel passo induttivo?
Assumi $H(n)$ per un $n$ arbitrario nel dominio della dimostrazione e dimostri $H(n+1)$ usando quell'ipotesi. Non assumi già $H(n+1)$ e non scegli un unico valore numerico di $n$.
:::

::: domanda Perché il passo induttivo, da solo, non basta?
Un'implicazione può far proseguire una proprietà se questa è già vera, ma non garantisce che sia vera in un punto iniziale. Il caso base avvia la catena. Per esempio l'implicazione dal caso $n=n+1$ al successivo si può scrivere algebricamente, ma nessun caso della proprietà è vero.
:::

::: domanda Perché un insieme con $n$ elementi ha $2^n$ sottoinsiemi?
Per ciascun elemento decidi se includerlo o escluderlo, con due possibilità indipendenti. La dimostrazione per induzione esprime lo stesso fatto: aggiungendo un elemento separi i sottoinsiemi in quelli che non lo contengono e quelli che lo contengono, due gruppi della stessa cardinalità.
:::

::: domanda Qual è la differenza tra $\emptyset$ e $\{\emptyset\}$?
Il primo non ha elementi. Il secondo ha un elemento, che è l'insieme vuoto. Per questo $P(\emptyset)=\{\emptyset\}$ ha cardinalità 1, in accordo con $2^0=1$.
:::

::: domanda Che cosa deve soddisfare un ricoprimento di $X$?
Le sue parti sono sottoinsiemi di $X$ e la loro unione è $X$. Ogni elemento di $X$ deve quindi appartenere ad almeno una parte. Parti vuote e sovrapposizioni non sono vietate dalla definizione di ricoprimento.
:::

::: domanda Quali condizioni aggiungi per ottenere una partizione?
Le parti devono essere non vuote e disgiunte a due a due. Insieme alla copertura, questo significa che ogni elemento di $X$ appartiene a esattamente una parte.
:::

::: domanda Perché l'intersezione vuota di tutte le parti non prova che siano disgiunte a due a due?
Esclude solo un elemento comune a tutte. Un elemento può ancora appartenere a due parti. Devi verificare $A_i\cap A_j=\emptyset$ per ogni coppia di indici distinti.
:::

::: domanda Quando $\{A,C_X(A)\}$ è una partizione di un insieme non vuoto $X$?
Quando $A$ è diverso dal vuoto e da $X$. Unione uguale a $X$ e disgiunzione sono automatiche; questa condizione garantisce che entrambe le parti siano non vuote.
:::

## Glossario

```glossario
Insieme di riferimento | L'insieme $X$ entro cui si calcola un complementare e di cui le parti di un ricoprimento o di una partizione sono sottoinsiemi.
Differenza | $X\setminus A$ contiene gli elementi che appartengono a $X$ e non appartengono ad $A$; non richiede $A\subset X$.
Complementare | Per $A\subset X$, $C_X(A)=X\setminus A$: gli elementi di $X$ esclusi da $A$.
Leggi di De Morgan | Il complementare di un'unione è l'intersezione dei complementari; quello di un'intersezione è l'unione dei complementari.
Controesempio | Un caso che smentisce un'affermazione proposta come generale; per un'uguaglianza di insiemi puoi esibire un elemento presente in un solo membro.
Naturali | L'insieme $\N=\{0,1,2,\ldots\}$, con la convenzione del libro di Mori che include zero.
Successore | Il naturale che viene dopo un dato naturale, indicato con $s(n)$ e con $n+1$ nella scrittura usuale.
Assiomi di Peano | Le cinque proprietà di zero, del successore e dei sottoinsiemi chiusi rispetto al successore che caratterizzano i naturali nella presentazione del libro.
Principio di induzione | Metodo che conclude una proprietà per tutti i naturali a partire da un caso base e dall'implicazione dal caso $n$ al caso $n+1$.
Caso base | Il primo valore per cui verifichi direttamente la proprietà in una dimostrazione per induzione.
Ipotesi induttiva | La proprietà $H(n)$ assunta per un $n$ arbitrario durante la dimostrazione del passo.
Passo induttivo | La dimostrazione di $H(n)\Rightarrow H(n+1)$ per ogni $n$ nel dominio considerato.
Insieme delle parti | $P(A)$ è l'insieme di tutti i sottoinsiemi di $A$, compresi $\emptyset$ e $A$.
Cardinalità | Il numero degli elementi di un insieme finito; se $|A|=n$, allora $|P(A)|=2^n$.
Famiglia di sottoinsiemi | Una raccolta di parti di un insieme, che può essere indicata con indici $A_i$; ogni parte è a sua volta un insieme.
Ricoprimento | Una famiglia di sottoinsiemi di $X$ la cui unione è $X$: ogni elemento appartiene ad almeno una parte.
Partizione | Un ricoprimento con parti non vuote e disgiunte a due a due: ogni elemento appartiene a esattamente una parte.
Blocco | Una delle parti di una partizione.
Disgiunti a due a due | Ogni coppia di parti distinte ha intersezione vuota; non basta che sia vuota la sola intersezione di tutte le parti.
Singoletto | Un insieme con un solo elemento, come $\{a\}$; è diverso dal suo elemento $a$.
Intervallo semiaperto | Un intervallo come $[n,n+1)$, che include l'estremo sinistro ed esclude quello destro.
```

## Checklist

```checklist
So calcolare un complementare precisando l'insieme di riferimento e distinguendolo dalla differenza generale.
So leggere e applicare entrambe le leggi di De Morgan, anche quando ci sono parentesi.
So dimostrare un'identità tra insiemi seguendo un elemento generico e motivando i passaggi.
So enunciare i cinque assiomi di Peano con la convenzione $0\in\N$.
So spiegare il legame tra il quinto assioma e il principio di induzione.
So scrivere base, ipotesi, obiettivo e passo di una dimostrazione per induzione.
So elencare $P(A)$ per insiemi piccoli, distinguendo appartenenza e inclusione.
So dimostrare e usare $|P(A)|=2^n$, anche con inclusioni o esclusioni fissate.
So verificare un ricoprimento calcolando l'unione delle sue parti.
So verificare una partizione controllando copertura, parti non vuote e disgiunzione a due a due.
So trovare un elemento mancante, ripetuto o una parte vuota per motivare una risposta negativa.
So distinguere il numero dei sottoinsiemi dal numero delle partizioni.
```

## Fonti

- **Andrea Mori, *Lezioni di Matematica Discreta*, capitolo 1, «Il linguaggio degli insiemi».** Numerazione delle pagine stampate nel libro: pp. 4–5, sottoinsiemi e insieme delle parti (Definizioni 1.7 e 1.8); pp. 5–7, assiomi di Peano, principio di induzione (Teorema 1.10 e Nota 1.11) e applicazione alla cardinalità dell'insieme delle parti; pp. 8–10, intersezione, unione, differenza e complementare (Definizioni 1.13, 1.14, 1.16 e 1.17); pp. 11–12, leggi di De Morgan (Teorema 1.18), ricoprimenti (Definizione 1.19) e partizioni (Definizione 1.21).
- **Argomenti della lezione D02 indicati nel programma di lavoro del canale B.** La spiegazione segue l'ordine complementare e De Morgan → naturali e induzione → insieme delle parti → ricoprimenti e partizioni. La [D01](D01_insiemi_induzione.html) offre il ripasso delle notazioni e dei primi esempi.
- **Esempi, quiz ed esercizi di questa pagina.** Sono elaborazioni per lo studio degli argomenti indicati; le soluzioni esplicitano i passaggi delle definizioni e delle dimostrazioni del libro.
