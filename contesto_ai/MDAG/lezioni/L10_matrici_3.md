---
corso: MDAG
modulo: AG
lezione: L10
titolo: Matrici III
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L10
descrizione: >-
  Appunti della lezione L10 di Algebra lineare e Geometria (MDAG, parte 2): come cambia il determinante con le mosse
  di Gauss, determinante nullo e righe dipendenti, teorema di Binet, cofattori, matrice inversa e criterio di
  invertibilità, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Come si calcola in fretta un determinante grande (con le mosse di Gauss), quando vale zero, perché
  $\det(AB) = \det A \cdot \det B$, e come si trova l'inversa di una matrice con i cofattori. Alla fine sai
  rispondere alla domanda che apre molti problemi d'esame: per quali valori del parametro la matrice è invertibile?
materiale: dispense
scheda:
  Dispense: lezione 10 · pp. 46–49
  Libro: Martelli, §3.3.5, §3.3.7, §3.4.5–3.4.7
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 100–130 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 10 «Matrici III»; B. Martelli, Geometria e algebra lineare, §3.3.5, §3.3.7, §3.3.9 e §3.4.5–3.4.8
appunti_html: appunti/MDAG/L10_matrici_3.html
genera_html: true
---

## In breve

- Tre **mosse di Gauss** sulle righe e il loro effetto sul determinante: scambiare due righe **cambia il segno**; moltiplicare una riga per $\lambda$ **moltiplica** il determinante per $\lambda$; aggiungere a una riga un multiplo di un'altra **non lo cambia**. Lo stesso vale per le colonne.
- Il metodo pratico per i determinanti grandi: con le mosse si rende la matrice triangolare, poi si moltiplica la diagonale, tenendo conto degli scambi.
- $\det A = 0$ **se e solo se** una riga (o una colonna) è combinazione lineare delle altre. Due righe uguali o proporzionali danno subito $\det A = 0$.
- **Teorema di Binet**: $\det(AB) = \det A \cdot \det B$ per matrici quadrate dello stesso ordine. Quindi $\det(A^k) = (\det A)^k$ e $\det(AB) = \det(BA)$.
- $A$ è **invertibile** se esiste $A^{-1}$ con $AA^{-1} = A^{-1}A = I_n$. Allora $\det(A^{-1}) = \frac 1{\det A}$.
- I **cofattori** sono $\mathrm{cof}_{ij} = (-1)^{i+j} \det C_{ij}$, e vale $A \cdot {}^t(\mathrm{cof}(A)) = \det(A) \cdot I_n$.
- Una matrice quadrata è invertibile **se e solo se** $\det A \neq 0$, e allora $A^{-1} = \frac 1{\det A}\, {}^t(\mathrm{cof}(A))$. Per le $2 \times 2$: scambia la diagonale, cambia segno all'altra, dividi per $ad - bc$.
- All'esame: «per quali $k$ la matrice è invertibile?» nei problemi, $\det(A^3)$ con Binet e i tranelli sulle mosse di Gauss nei quiz.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Le mosse di Gauss e il determinante (p. 46)

Prendi $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, che ha $\det A = 4 - 6 = -2$, e modifica le sue righe in tre modi diversi:

| Mossa | Nuova matrice | Determinante | Rispetto a $-2$ |
|---|---|---|---|
| scambio le due righe | $\begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$ | $6 - 4 = 2$ | cambia segno |
| moltiplico la prima riga per 5 | $\begin{pmatrix} 5 & 10 \\ 3 & 4 \end{pmatrix}$ | $20 - 30 = -10$ | moltiplicato per 5 |
| tolgo 3 volte la prima riga dalla seconda | $\begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}$ | $-2 - 0 = -2$ | uguale |

La terza mossa è la più preziosa: ha creato uno zero **senza cambiare** il determinante, e la matrice è diventata triangolare. Questo è il contenuto della prima proposizione della lezione.

> [!PROP] 10.1 · Il determinante e le mosse sulle righe
> Sia $A$ una matrice $n \times n$.
> 1. Se $A'$ è ottenuta da $A$ scambiando due righe, allora $\det(A') = -\det(A)$.
> 2. Se $A'$ è ottenuta da $A$ moltiplicando una riga di $A$ per uno scalare $\lambda$, allora $\det(A') = \lambda \det(A)$.
> 3. Se $A'$ è ottenuta da $A$ aggiungendo ad una riga il multiplo di un'altra riga, allora $\det(A') = \det A$.
>
> Le identiche regole valgono anche per le colonne (invece delle righe).

Il processo di ottenere $A'$ da $A$ in uno dei tre modi sopra si chiama una **mossa di Gauss**. Nella lezione L11 le mosse diventeranno lo strumento per risolvere i sistemi lineari, con questa notazione (dove $R_i$ è la riga $i$-esima):

| Tipo | Mossa | Si scrive | Effetto sul determinante |
|---|---|---|---|
| (I) | scambiare due righe | $R_i \leftrightarrow R_j$ | cambia segno |
| (II) | moltiplicare una riga per $\lambda \neq 0$ | $R_i \to \lambda R_i$ | moltiplicato per $\lambda$ |
| (III) | aggiungere a una riga un multiplo di un'altra | $R_i \to R_i + \lambda R_j$ ($j \neq i$) | invariato |

Pezzo per pezzo:

- Il punto (2) è la Proposizione 9.11 della lezione precedente, e vale per ogni $\lambda$. Come **mossa di Gauss** però si usa solo con $\lambda \neq 0$ (lezione L11): moltiplicare una riga per $0$ cancellerebbe informazione.
- Nel punto (3) la riga che **cambia** è $R_i$, e la si modifica sommando un multiplo di un'**altra** riga $R_j$, che resta com'è.
- «Le identiche regole valgono anche per le colonne»: scambiare due colonne cambia il segno, e così via. Il motivo è $\det({}^tA) = \det A$ (Proposizione 9.5): le colonne di $A$ sono le righe di ${}^tA$.

> [!DIM] della Proposizione 10.1
> Le dispense danno una spiegazione in tre righe; eccola con tutti i passaggi.
>
> **(1) Scambio.** Per $n = 2$: $\det \begin{pmatrix} c & d \\ a & b \end{pmatrix} = cb - da = -(ad - bc)$. Per $n \ge 3$ si procede per induzione sull'ordine: c'è almeno una riga $i$ **non toccata** dallo scambio. Sviluppando $\det A'$ lungo quella riga, ogni sottomatrice $C'_{ij}$ è la $C_{ij}$ di $A$ con due righe scambiate, e ha ordine $n - 1$: per l'ipotesi induttiva $\det C'_{ij} = -\det C_{ij}$. Quindi ogni addendo cambia segno, e anche la somma.
>
> **Una conseguenza:** se $A$ ha **due righe uguali**, allora $\det A = 0$. Infatti scambiando le due righe uguali si ottiene la stessa matrice, ma per (1) il determinante cambia segno: $\det A = -\det A$, cioè $\det A = 0$.
>
> **(2)** È la Proposizione 9.11.
>
> **(3) Somma di un multiplo.** Sia $A'$ ottenuta con $R_i \to R_i + \lambda R_k$. Sviluppo $\det A'$ lungo la riga $i$; le sottomatrici $C_{ij}$ non contengono la riga $i$, quindi sono quelle di $A$:
> $$\det A' = \sum_j (-1)^{i+j}(a_{ij} + \lambda a_{kj}) \det C_{ij} = \det A + \lambda \sum_j (-1)^{i+j} a_{kj} \det C_{ij}.$$
> L'ultima somma è lo sviluppo lungo la riga $i$ della matrice che ha la riga $k$ **al posto** della riga $i$: una matrice con due righe uguali, il cui determinante è $0$. Resta $\det A' = \det A$.
>
> **Colonne:** basta applicare tutto a ${}^tA$, perché $\det({}^tA) = \det A$.

> [!ESEMPIO] 10.2 · Un determinante nullo con due mosse
> Sia
> $$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}.$$
> Se togliamo la prima riga di $A$ dalla seconda e dalla terza riga ($R_2 \to R_2 - R_1$, $R_3 \to R_3 - R_1$), otteniamo una nuova matrice
> $$A' = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 3 & 3 \\ 6 & 6 & 6 \end{pmatrix}.$$
> Visto che si tratta di mosse di Gauss del terzo tipo, $\det(A') = \det(A)$. Ora possiamo togliere 2 volte la seconda riga dalla terza ($R_3 \to R_3 - 2R_2$: $(6, 6, 6) - 2 \cdot (3, 3, 3) = (0, 0, 0)$). Otteniamo
> $$A'' = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 3 & 3 \\ 0 & 0 & 0 \end{pmatrix},$$
> con $\det(A'') = \det(A') = \det(A)$. Visto che $A''$ ha una riga con solo entrate $0$, $\det(A'') = 0$ (Proposizione 9.10), e allora anche la matrice $A$ ha determinante $0$.

### Il metodo di Gauss per i determinanti

> [!METODO] Triangolarizzare e moltiplicare la diagonale
> 1. Con mosse del tipo (III), $R_i \to R_i + \lambda R_j$, crea zeri **sotto** la diagonale, una colonna alla volta: nella prima colonna usa la prima riga, nella seconda la seconda, e così via. Il determinante non cambia.
> 2. Se sulla diagonale, dove ti serve un numero non nullo, c'è uno $0$, **scambia** quella riga con una più in basso (tipo (I)) e **cambia il segno**. Se sotto quello $0$ ci sono solo zeri, puoi fermarti: la matrice triangolare finale avrà uno $0$ sulla diagonale, quindi il determinante è $0$.
> 3. Se usi una mossa (II) per comodità (per esempio per dividere una riga per 2), **ricorda il fattore**: $\det A' = \lambda \det A$, quindi $\det A = \frac 1\lambda \det A'$.
> 4. Quando la matrice è triangolare, il determinante è il prodotto della diagonale (Proposizione 9.3), con il segno $(-1)^{\text{numero di scambi}}$.
> 5. Se a metà strada compare una riga nulla, il determinante è $0$ e puoi fermarti.
>
> Si può anche mescolare con Laplace: dopo aver creato zeri in una colonna, sviluppa lungo quella colonna.

> [!ESEMPIO] · Una $3 \times 3$ che richiede uno scambio
> $$B = \begin{pmatrix} 0 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 4 & 5 \end{pmatrix}$$
> Al posto $(1, 1)$ c'è uno $0$: scambio le prime due righe (il determinante cambia segno), poi creo gli zeri.
> $$B \xrightarrow{R_1 \leftrightarrow R_2} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 2 & 4 & 5 \end{pmatrix} \xrightarrow{R_3 \to R_3 - 2R_1} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 2 & 3 \end{pmatrix} \xrightarrow{R_3 \to R_3 - R_2} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$
> La matrice finale è triangolare con diagonale $1, 2, 2$: determinante $4$. C'è stato **uno** scambio, quindi $\det B = -4$. Controllo con Sarrus: $(0 + 4 + 4) - (2 + 0 + 10) = 8 - 12 = -4$ ✓.

> [!ESEMPIO] · Una $4 \times 4$ con sole mosse del terzo tipo
> $$C = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 2 & 2 \\ 1 & 2 & 3 & 3 \\ 1 & 2 & 3 & 4 \end{pmatrix} \xrightarrow{\substack{R_2 \to R_2 - R_1 \\ R_3 \to R_3 - R_1 \\ R_4 \to R_4 - R_1}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 1 & 2 & 2 \\ 0 & 1 & 2 & 3 \end{pmatrix}$$
> $$\xrightarrow{\substack{R_3 \to R_3 - R_2 \\ R_4 \to R_4 - R_2}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 2 \end{pmatrix} \xrightarrow{R_4 \to R_4 - R_3} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$
> Nessuno scambio, diagonale di 1: $\det C = 1$. Con la definizione sarebbero stati 24 addendi.

Nello strumento qui sotto c'è la matrice dell'Esempio 10.2. Premi «Calcola»: lo strumento usa mosse diverse da quelle delle dispense ($R_2 \to R_2 - 4R_1$ e $R_3 \to R_3 - 7R_1$, poi $R_3 \to R_3 - 2R_2$), ma il determinante è lo stesso, $0$. Prova poi le matrici $B$ e $C$ di questa sezione (`0 2 1; 1 1 1; 2 4 5` e `1 1 1 1; 1 2 2 2; 1 2 3 3; 1 2 3 4`): nel caso di $B$ lo strumento segnala lo scambio di righe e il cambio di segno.

```widget gauss
titolo: Il determinante con le mosse di Gauss
matrice: 1 2 3; 4 5 6; 7 8 9
modo: determinante
modi: determinante
```

> [!TRAPPOLA] La mossa «$R_2 \to 2R_2 - R_1$» non è innocua
> Questa mossa ne contiene due: prima $R_2 \to 2R_2$ (tipo (II), determinante per 2), poi $R_2 \to R_2 - R_1$ (tipo (III), nessun effetto). Il determinante risulta **moltiplicato per 2**. Chi la usa per evitare le frazioni deve ricordarsene e dividere alla fine. Allo stesso modo, una matrice «ridotta a scalini» con mosse qualsiasi **non** ha lo stesso determinante della matrice di partenza: è un tranello classico dei quiz («Verso l'esame»).

## Determinante nullo e righe dipendenti (p. 47)

Nell'Esempio 10.2 il determinante è venuto $0$ perché la terza riga «dipendeva» dalle altre due: $(7, 8, 9) = 2 \cdot (4, 5, 6) - (1, 2, 3)$. Non è un caso.

> [!PROP] 10.3 · Determinante nullo
> $\det(A) = 0$ se e solo se una riga (o una colonna) di $A$ è combinazione lineare delle altre.

Le dispense dimostrano una delle due direzioni: se una riga è combinazione delle altre, il determinante è zero. Supponiamo per esempio che la prima riga sia combinazione lineare delle altre, cioè che esistano numeri $c_2, \dots, c_n$ con

$$A_1 = c_2A_2 + \dots + c_nA_n.$$

1. Sia $A'$ la matrice che si ottiene da $A$ sostituendo la prima riga con la **riga nulla**. Per la Proposizione 9.10, $\det(A') = 0$.
2. Ora applichiamo ad $A'$, una dopo l'altra, mosse del terzo tipo: sommiamo alla prima riga prima $c_2A_2$, poi $c_3A_3$, e così via fino a $c_nA_n$. Il determinante non cambia mai.
3. Alla fine la prima riga è $0 + c_2A_2 + \dots + c_nA_n = A_1$: la matrice finale è esattamente $A$.
4. Quindi $\det(A) = \det(A') = 0$.

La proposizione afferma che vale anche l'altra direzione: se $\det A = 0$, allora qualche riga è combinazione lineare delle altre. Le dispense non la dimostrano.

> [!NOTA] Quale «Proprietà 1»?
> Nelle dispense, a p. 47, il passaggio 1 è giustificato con «per la Proprietà 1»: si tratta della prima proprietà della sezione 9.C, cioè della Proposizione 9.10 (una riga nulla dà determinante nullo), non del punto (1) della Proposizione 10.1 (lo scambio di due righe).

> [!OLTRE] · l'altra direzione, e il collegamento con il rango
> Martelli (Proposizione 3.3.12) dimostra che per $A \in M(n, \K)$
> $$\det A \neq 0 \iff \rk A = n,$$
> con le mosse di Gauss: le mosse non cambiano il rango e cambiano il determinante solo per fattori non nulli, e per una matrice a scalini $n \times n$ le due condizioni dicono entrambe «tutti i numeri sulla diagonale sono diversi da zero». Da qui segue l'altra direzione della Proposizione 10.3: se $\det A = 0$, allora $\rk A < n$; il rango per righe è lo stesso (Proposizione 8.6), quindi le $n$ righe sono linearmente dipendenti, e una di loro è combinazione lineare delle altre (Proposizione 7.2). Un'altra conseguenza (Martelli, Proposizione 3.3.15): **$n$ vettori di $\K^n$ formano una base se e solo se la matrice che li ha come colonne ha determinante diverso da zero.**

> [!ESEMPIO] · Determinanti nulli a colpo d'occhio
> $$\det \begin{pmatrix} 1 & 5 & 1 \\ 2 & 7 & 2 \\ 3 & 0 & 3 \end{pmatrix} = 0, \qquad \det \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 5 & 1 & 9 \end{pmatrix} = 0, \qquad \det \begin{pmatrix} 1 & 2 & 3 & 4 \\ 5 & 6 & 7 & 8 \\ 9 & 10 & 11 & 12 \\ 13 & 14 & 15 & 16 \end{pmatrix} = 0.$$
> Nella prima la prima e la terza **colonna** sono uguali; nella seconda la seconda riga è il doppio della prima; nella terza ogni riga supera la precedente di $(4, 4, 4, 4)$, quindi $R_2 - R_1 = R_3 - R_2$, cioè $R_3 = 2R_2 - R_1$: una riga è combinazione delle altre.

## Il teorema di Binet (p. 47)

Con $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ ($\det A = -2$) e $B = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}$ ($\det B = 6$):

$$AB = \begin{pmatrix} 1 \cdot 2 + 2 \cdot 1 & 0 + 2 \cdot 3 \\ 3 \cdot 2 + 4 \cdot 1 & 0 + 4 \cdot 3 \end{pmatrix} = \begin{pmatrix} 4 & 6 \\ 10 & 12 \end{pmatrix}, \qquad \det(AB) = 48 - 60 = -12 = (-2) \cdot 6.$$

Il determinante del prodotto è il prodotto dei determinanti. Le dispense lo includono senza dimostrazione.

> [!TEOREMA] 10.4 · Teorema di Binet
> Se $A$ e $B$ sono matrici quadrate dello stesso ordine, allora
> $$\det(A \cdot B) = \det(A) \cdot \det(B).$$

Pezzo per pezzo, e con tre conseguenze da sapere:

- Servono matrici **quadrate dello stesso ordine**, così $AB$ esiste ed è quadrata.
- **$\det(AB) = \det(BA)$**, anche se in generale $AB \neq BA$: entrambi valgono $\det A \cdot \det B$, e tra numeri il prodotto è commutativo.
- **Potenze:** $\det(A^2) = \det(A \cdot A) = (\det A)^2$ e in generale $\det(A^k) = (\det A)^k$. Per calcolare $\det(A^3)$ **non** si calcola $A^3$.
- Attenzione alle somme: il teorema parla solo di prodotti, e in generale $\det(A + B) \neq \det A + \det B$ (lezione L09).

> [!DIM] · il teorema di Binet per le $2 \times 2$
> Siano $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ e $B = \begin{pmatrix} e & f \\ g & h \end{pmatrix}$. Allora $AB = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$ e
> $$\det(AB) = (ae + bg)(cf + dh) - (af + bh)(ce + dg).$$
> Sviluppando, i termini $aecf$ e $afce$ si cancellano, come $bgdh$ e $bhdg$. Restano
> $$aedh + bgcf - afdg - bhce = ad(eh - fg) - bc(eh - fg)$$
> $$= (ad - bc)(eh - fg) = \det A \cdot \det B.$$
> La dimostrazione generale (Martelli, Teorema 3.4.7) usa la definizione con le permutazioni e il fatto che una matrice con due righe uguali ha determinante nullo.

### Matrici invertibili

Il numero $\frac 12$ è l'inverso di $2$ perché $2 \cdot \frac 12 = 1$. Per le matrici il ruolo di $1$ lo fa $I_n$.

> [!OLTRE] · che cosa vuol dire «invertibile»
> Le dispense usano la parola da qui in poi; la definizione è quella di Martelli (§3.4.5). Una matrice quadrata $A \in M(n)$ è **invertibile** se esiste una matrice $B \in M(n)$ tale che
> $$AB = BA = I_n.$$
> Una tale $B$ è **unica** e si chiama **inversa** di $A$, $A^{-1}$. Unica perché, se $B$ e $B'$ vanno bene entrambe, $B = BI_n = B(AB') = (BA)B' = I_nB' = B'$.

> [!ESEMPIO] · Un'inversa e una matrice senza inversa
> $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ ha inversa $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$ (Martelli, §3.4.7). Controllo:
> $$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 2 - 1 & -2 + 2 \\ 1 - 1 & -1 + 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix},$$
> e allo stesso modo $A^{-1}A = I_2$.
>
> $N = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ invece **non** è invertibile, anche se non è nulla: per ogni $B$, il prodotto $NB$ ha la seconda riga nulla (è $0$ volte la prima riga di $B$ più $0$ volte la seconda), quindi non può essere $I_2$.

> [!COROLLARIO] 10.5 · Determinante dell'inversa
> Sia $A$ una matrice quadrata invertibile. Allora
> $$\det(A^{-1}) = \frac 1{\det(A)}.$$

La spiegazione delle dispense: dal teorema di Binet e da $AA^{-1} = I_n$,

$$1 = \det(I_n) = \det(AA^{-1}) = \det(A) \det(A^{-1}),$$

da cui la formula. In particolare una matrice invertibile ha $\det A \neq 0$: se fosse $\det A = 0$, il prodotto $\det(A)\det(A^{-1})$ varrebbe $0$ e non $1$.

> [!TRAPPOLA] Binet vale solo per matrici quadrate
> Se $A$ è $3 \times 2$, la scrittura $\det(A\,{}^tA) = \det A \cdot \det({}^tA)$ non ha senso: $\det A$ non esiste. Il prodotto $A\,{}^tA$ invece è $3 \times 3$ e ha un determinante. Per esempio con $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$ si trova $\det(A\,{}^tA) = 0$ (le sue colonne sono combinazioni delle due colonne di $A$, quindi il rango è al più 2), mentre ${}^tA\,A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}$ ha determinante $6$.

## I cofattori di una matrice (pp. 47–48)

Nello sviluppo di Laplace ogni numero $a_{ij}$ è moltiplicato per $(-1)^{i+j} \det C_{ij}$: segno della scacchiera e determinante della sottomatrice. Questo numero ha un nome.

> [!DEF] 10.6 · Cofattori
> Consideriamo una matrice quadrata $A$. I suoi **cofattori** $\mathrm{cof}_{ij} := (-1)^{i+j} \det(C_{ij})$ formano una matrice quadrata di ordine $n$
> $$\mathrm{cof}(A) = (\mathrm{cof}_{ij})$$
> detta **matrice dei cofattori** di $A$.

Pezzo per pezzo:

- $C_{ij}$ è la sottomatrice ottenuta cancellando la riga $i$ e la colonna $j$ (lezione L09).
- Il cofattore $\mathrm{cof}_{ij}$ è un **numero**: il determinante di $C_{ij}$ con il segno della scacchiera.
- La matrice dei cofattori ha la stessa taglia di $A$: al posto $(i, j)$ c'è $\mathrm{cof}_{ij}$.

> [!ESEMPIO] · I cofattori di una $2 \times 2$
> Con $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ le sottomatrici sono numeri: cancellando riga 1 e colonna 1 resta $4$, e così via.
> $$\mathrm{cof}_{11} = +4, \quad \mathrm{cof}_{12} = -3, \quad \mathrm{cof}_{21} = -2, \quad \mathrm{cof}_{22} = +1, \qquad \mathrm{cof}(A) = \begin{pmatrix} 4 & -3 \\ -2 & 1 \end{pmatrix}.$$

Con i cofattori lo sviluppo di Laplace lungo la riga $i$ si riscrive in modo compatto:

$$\det A = \sum_{j=1}^n a_{ij}\, \mathrm{cof}_{ij} \qquad \forall i \in \{1, \dots, n\}.$$

Numeri della riga $i$ per cofattori **della stessa riga**. E se invece si usano i cofattori di **un'altra** riga? Dalla dimostrazione del punto (3) della Proposizione 10.1 sappiamo che la somma dei prodotti degli elementi di una riga (o colonna) qualsiasi per i cofattori di un'altra riga (o di un'altra colonna) è $0$:

$$0 = \sum_{j=1}^n a_{ij}\, \mathrm{cof}_{kj} \qquad \forall i, k \in \{1, \dots, n\},\ i \neq k.$$

Il motivo: questa somma è lo sviluppo lungo la riga $k$ della matrice che ha la riga $i$ al posto della riga $k$. Quella matrice ha due righe uguali, quindi determinante nullo.

> [!ESEMPIO] · Cofattori giusti e cofattori «sbagliati»
> $$A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 3 & 1 \end{pmatrix}, \qquad \mathrm{cof}(A) = \begin{pmatrix} 1 & -1 & 3 \\ 3 & 2 & -6 \\ -1 & 1 & 2 \end{pmatrix}.$$
> Per esempio $\mathrm{cof}_{12} = -\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$ e $\mathrm{cof}_{23} = -\det \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} = -6$.
> - Riga 1 per i cofattori della riga 1: $2 \cdot 1 + 0 \cdot (-1) + 1 \cdot 3 = 5 = \det A$.
> - Riga 1 per i cofattori della riga 2: $2 \cdot 3 + 0 \cdot 2 + 1 \cdot (-6) = 0$.
> - Riga 3 per i cofattori della riga 3: $0 \cdot (-1) + 3 \cdot 1 + 1 \cdot 2 = 5$ di nuovo.

Mettendo insieme le due formule si ottiene un'identità tra matrici.

> [!PROP] 10.7
> $$A \cdot {}^t(\mathrm{cof}(A)) = \det(A) \cdot I_n = {}^t(\mathrm{cof}(A)) \cdot A.$$

Dimostrazione (delle dispense), passo per passo.

1. Sia $K = A \cdot {}^t(\mathrm{cof}(A))$. La sua entrata $(i, j)$ è la riga $i$ di $A$ per la colonna $j$ di ${}^t(\mathrm{cof}(A))$, che è la **riga** $j$ di $\mathrm{cof}(A)$:
   $$k_{ij} = \sum_\ell a_{i\ell}\, \mathrm{cof}_{j\ell}.$$
2. Se $i = j$, questo è lo sviluppo di Laplace di $\det(A)$ lungo la riga $i$: $k_{ii} = \det A$.
3. Se $i \neq j$, è il determinante della matrice ottenuta sostituendo la riga $j$ con la riga $i$: è nullo, perché quella matrice ha due righe uguali.
4. Dunque $K$ ha $\det A$ sulla diagonale e $0$ altrove: $K = \det(A) I_n$. In modo analogo, con le colonne, si dimostra ${}^t(\mathrm{cof}(A))A = \det(A) I_n$. $\square$

Con la matrice dell'esempio: $A \cdot {}^t(\mathrm{cof}(A)) = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 5 \end{pmatrix} = 5I_3$.

## L'inversa di una matrice (p. 48)

Se $\det A \neq 0$, basta dividere la Proposizione 10.7 per $\det A$ e si ottiene una matrice che moltiplicata per $A$ dà $I_n$: l'inversa.

> [!PROP] 10.8 · Invertibilità e formula dell'inversa
> Sia $A$ una matrice quadrata di ordine $n \ge 2$. La matrice $A$ è invertibile se e solo se $\det(A) \neq 0$. Se $A$ è invertibile, allora
> $$A^{-1} = \frac 1{\det(A)} \cdot {}^t(\mathrm{cof}(A)).$$

Dimostrazione (delle dispense), nei due versi.

- **Se $A$ è invertibile, allora $\det A \neq 0$.** Esiste una matrice $B$ tale che $A \cdot B = I_n$. Per il teorema di Binet $\det(A \cdot B) = \det(A) \cdot \det(B)$; d'altra parte $\det(I_n) = 1$. Ne deduciamo $\det(A) \cdot \det(B) = 1$, quindi $\det(A) \neq 0$.
- **Se $\det A \neq 0$, allora $A$ è invertibile.** Definiamo $B := \frac 1{\det(A)} \cdot {}^t(\mathrm{cof}(A))$. Per la Proposizione 10.7, $A \cdot {}^t(\mathrm{cof}(A)) = \det(A) \cdot I_n = {}^t(\mathrm{cof}(A)) \cdot A$. Dato che $\det(A) \neq 0$ possiamo moltiplicare per $\frac 1{\det(A)}$, ottenendo $A \cdot B = I_n = B \cdot A$. Quindi $A$ è invertibile e la sua inversa è $B$. $\square$

L'ipotesi $n \ge 2$ serve solo perché i cofattori richiedono di cancellare una riga e una colonna. Per $n = 1$ tutto è più semplice: $(a)$ è invertibile se e solo se $a \neq 0$, e $(a)^{-1} = \left(\frac 1a\right)$.

> [!ESEMPIO] · La formula per le $2 \times 2$
> Per $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ i cofattori sono $\mathrm{cof}_{11} = d$, $\mathrm{cof}_{12} = -c$, $\mathrm{cof}_{21} = -b$, $\mathrm{cof}_{22} = a$. Trasponendo e dividendo per il determinante:
> $$A^{-1} = \frac 1{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \qquad (ad - bc \neq 0).$$
> In parole: **scambia i due numeri della diagonale, cambia segno agli altri due, dividi per il determinante**. Per esempio
> $$\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}^{-1} = \frac 1{6 - 5} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}.$$
> Controllo: $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 6 - 5 & -3 + 3 \\ 10 - 10 & -5 + 6 \end{pmatrix} = I_2$ ✓.

> [!METODO] L'inversa di una $3 \times 3$ con i cofattori
> 1. Calcola $\det A$. Se è $0$, la matrice **non è invertibile**: fermati.
> 2. Calcola i nove determinanti $2 \times 2$ $\det C_{ij}$ (cancella riga $i$ e colonna $j$).
> 3. Metti i segni della scacchiera: ottieni $\mathrm{cof}(A)$.
> 4. **Trasponi**: ${}^t(\mathrm{cof}(A))$.
> 5. Dividi tutto per $\det A$.
> 6. Controlla almeno una riga di $A \cdot A^{-1}$: deve venire la riga corrispondente di $I_3$.

> [!ESEMPIO] · Un'inversa $3 \times 3$ passo per passo
> $$A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$$
> **1.** Lungo la prima riga: $\det A = 1 \cdot (1 - 0) - 2 \cdot (0 - 1) + 0 = 1 + 2 = 3 \neq 0$: $A$ è invertibile.
>
> **2–3.** I nove cofattori (determinante della sottomatrice, poi segno):
>
> | | colonna 1 | colonna 2 | colonna 3 |
> |---|---|---|---|
> | riga 1 | $+\det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = 1$ | $-\det \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = 1$ | $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$ |
> | riga 2 | $-\det \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = -2$ | $+\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$ | $-\det \begin{pmatrix} 1 & 2 \\ 1 & 0 \end{pmatrix} = 2$ |
> | riga 3 | $+\det \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix} = 2$ | $-\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$ | $+\det \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = 1$ |
>
> **4–5.** $\mathrm{cof}(A) = \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix}$, quindi
> $$A^{-1} = \frac 13 \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix}.$$
> **6.** Riga 1 di $A$, $(1, 2, 0)$, per le colonne di ${}^t(\mathrm{cof}(A))$: $1 + 2 = 3$, $\ -2 + 2 = 0$, $\ 2 - 2 = 0$; diviso per 3 dà $(1, 0, 0)$ ✓.

Nello strumento qui sotto c'è la matrice dell'Esercizio 10.10. Lo strumento calcola l'inversa con un altro metodo, le mosse di Gauss sulla matrice affiancata $(A \mid I_3)$ (Martelli, §3.4.7; lo capirai del tutto con i sistemi lineari, lezioni L11–L13). Il risultato è lo stesso che si trova con i cofattori, perché l'inversa è unica: confrontalo con la soluzione dell'esercizio. Prova anche una matrice con determinante nullo, come `1 2 3; 4 5 6; 7 8 9`.

```widget gauss
titolo: La matrice inversa, con i passaggi
matrice: 2 -1 0; -2 1 1; 1 -1 3
modo: inversa
modi: inversa
```

> [!TRAPPOLA] Quattro errori sull'inversa
> - **Dimenticare di trasporre** la matrice dei cofattori: per le matrici non simmetriche il risultato è sbagliato (nel quiz di questa lezione la matrice dei cofattori non trasposta è una delle risposte sbagliate).
> - Dimenticare i segni della scacchiera, o dividere per $\det A$ solo alcune caselle.
> - Invertire casella per casella: l'inversa di $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ **non** è $\begin{pmatrix} 1/3 & 1 \\ 1/5 & 1/2 \end{pmatrix}$.
> - Pensare che $(A + B)^{-1} = A^{-1} + B^{-1}$, o che $(AB)^{-1} = A^{-1}B^{-1}$: l'ordine giusto è $(AB)^{-1} = B^{-1}A^{-1}$ (esercizio 8).

> [!OLTRE] · tante facce della stessa proprietà
> Per una matrice quadrata $A \in M(n, \K)$ sono equivalenti:
> - $A$ è invertibile;
> - $\det A \neq 0$ (Proposizione 10.8);
> - nessuna riga (o colonna) è combinazione lineare delle altre (Proposizione 10.3);
> - $\rk A = n$ (Martelli, Proposizione 3.3.12);
> - le colonne di $A$ formano una base di $\K^n$ (Martelli, Proposizione 3.3.15);
> - per ogni $b \in \K^n$ il sistema $Ax = b$ ha una e una sola soluzione, $x = A^{-1}b$ (Martelli, §3.4.8; lezioni L11–L13).
>
> Nelle domande d'esame si passa continuamente da una all'altra.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: il determinante e le mosse di Gauss nel §3.3.5 (pp. 97–98, Proposizione 3.3.7); determinante e rango massimo nel §3.3.7 (pp. 99–100, Proposizione 3.3.12); basi e determinante nel §3.3.9 (p. 101, Proposizione 3.3.15); matrici invertibili nel §3.4.5 (pp. 106–107, Proposizione 3.4.5); il teorema di Binet e il determinante dell'inversa nel §3.4.6 (pp. 107–108, Teorema 3.4.7 e Corollario 3.4.8); l'inversa con le mosse di Gauss e con i cofattori nel §3.4.7 (pp. 108–110, Proposizioni 3.4.10–3.4.12, Esempio 3.4.13); i sistemi con matrice invertibile e la regola di Cramer nel §3.4.8 (p. 110).

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 quiz a 5 risposte (servono almeno 6 risposte giuste perché vengano corretti i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. I dettagli sono nella lezione L01.

Questa lezione è tra le più «pagate» all'esame:

| Tipo di domanda | Appelli (numero) | Che cosa serve |
|---|---|---|
| «Il determinante di $A^3$ (o $A^4$) è…» | 06/09/2024 (4), 07/02/2025 (5), 05/02/2026 (5), 03/07/2026 (6) | Binet: $(\det A)^3$ |
| determinante e traccia di un prodotto | 16/01/2025 (3) | Binet, matrici triangolari |
| determinante di $A\,{}^tA$ con $A$ non quadrata | 03/06/2025 (9) | Binet non si applica; rango |
| matrice «ridotta a scalini», che cosa si può dedurre | 06/09/2024 (7) | Proposizione 10.1 |
| problema: «per quali $k$ la matrice è invertibile?» o «calcolare il determinante» | 24/01/2024, 06/09/2024, 07/02/2025, 15/01/2026, 05/02/2026, 03/07/2026 (problema 11, punto 1) | $\det A \neq 0$ con parametro |
| problema: la matrice dell'applicazione inversa | 10/07/2024 (problema 11, punto 2) | inversa con i cofattori |

Tre domande vere, con la soluzione svolta.

> [!ESAME] Appello del 06/09/2024, domanda 7
> Sia $A$ una matrice quadrata che, ridotta a scalini tramite l'algoritmo di Gauss, diventa $\begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 3 \\ 0 & 0 & 1 \end{pmatrix}$. Quale delle seguenti **non** è necessariamente verificata? (a) $\det A = 2$; (b) $\dim \Ker A = 0$; (c) $A$ è invertibile; (d) per ogni $b \in \R^3$ il sistema $Ax = b$ ammette un'unica soluzione; (e) $\mathrm{rank}(A) = 3$.
>
> **Soluzione.** La matrice a scalini ha determinante $1 \cdot 2 \cdot 1 = 2$. Ma l'algoritmo di Gauss può usare scambi (che cambiano il segno) e moltiplicazioni di righe per $\lambda \neq 0$ (che moltiplicano il determinante per $\lambda$): se si sono usati $s$ scambi e moltiplicazioni per $\lambda_1, \dots, \lambda_t$, allora $2 = (-1)^s \lambda_1 \cdots \lambda_t \det A$, cioè $\det A = \frac{\pm 2}{\lambda_1 \cdots \lambda_t}$. Non è necessariamente $2$: risposta **(a)**. Quello che resta vero è che $\det A \neq 0$, perché ogni mossa moltiplica il determinante per un numero diverso da zero. Quindi $A$ è invertibile (c), ha rango 3 (e), e le affermazioni (b) e (d), che vedrai nelle lezioni L11–L16, sono conseguenze dell'invertibilità.

> [!ESAME] Appello del 03/07/2026, domanda 6
> Sia $A \in M(3, \R)$ la matrice $A = \begin{pmatrix} 1 & 0 & 2 \\ 3 & -1 & 1 \\ 2 & 0 & 5 \end{pmatrix}$. Il determinante di $A^3$ è: (a) $-8$; (b) $-1$; (c) $0$; (d) $1$; (e) $8$.
>
> **Soluzione.** Non si calcola $A^3$. Per Binet $\det(A^3) = (\det A)^3$. La seconda colonna ha un solo numero non nullo, $-1$ in posizione $(2, 2)$, con segno $+$: sviluppando lungo la seconda colonna,
> $$\det A = -1 \cdot \det \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix} = -(5 - 4) = -1.$$
> Quindi $\det(A^3) = (-1)^3 = -1$: risposta **(b)**. Le risposte $\pm 8$ sono per chi confonde con $\det(2A)$ o sbaglia il segno.

> [!ESAME] Appello del 15/01/2026, problema 11, punto (1)
> Si consideri la matrice $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, dove $k$ è un parametro reale. Determinare per quali valori di $k$ la matrice $A$ è invertibile.
>
> **Soluzione.** $A$ è invertibile se e solo se $\det A \neq 0$ (Proposizione 10.8). Sviluppo lungo la prima riga, dove $a_{13} = 0$:
> $$\det A = 1 \cdot \det \begin{pmatrix} k + 1 & k \\ k & 1 \end{pmatrix} - k^2 \det \begin{pmatrix} k & k \\ 0 & 1 \end{pmatrix}$$
> $$= (k + 1 - k^2) - k^2 \cdot k = -k^3 - k^2 + k + 1.$$
> Raccolgo per scomporre: $-k^3 - k^2 + k + 1 = -k^2(k + 1) + (k + 1) = (k + 1)(1 - k^2) = (k + 1)(1 - k)(1 + k)$, cioè
> $$\det A = -(k - 1)(k + 1)^2.$$
> Si annulla solo per $k = 1$ e $k = -1$. **$A$ è invertibile se e solo se $k \neq 1$ e $k \neq -1$.** Controllo con $k = 1$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ e la seconda riga è la somma delle altre due, quindi il determinante è $0$ ✓.

**Il metodo per «per quali $k$ è invertibile».**

1. Scrivi $\det A$ in funzione di $k$: Laplace lungo la riga o colonna con più zeri, oppure prima qualche mossa del terzo tipo per creare zeri (non cambia il determinante).
2. **Scomponi** il polinomio in $k$: raccogli fattori comuni, cerca radici semplici ($k = 0, \pm 1, \pm 2$) e dividi con Ruffini (lezione L04).
3. Scrivi la risposta nella forma «$A$ è invertibile se e solo se $k \neq \dots$». I valori esclusi sono quelli che poi, nel resto del problema, vanno studiati a parte (rango, soluzioni, autovalori).

**Il metodo per $\det(A^n)$, $\det(2A^{-1})$ e simili.** Calcola solo $\det A$ e poi combina: $\det(A^n) = (\det A)^n$, $\det(A^{-1}) = \frac 1{\det A}$, $\det(cA) = c^n \det A$ (lezione L09), $\det({}^tA) = \det A$. Per esempio, se $A$ è $3 \times 3$ con $\det A = 4$: $\det(2A^{-1}) = 2^3 \cdot \frac 14 = 2$.

Errori da evitare:

- scrivere $\det(A^3) = 3\det A$;
- credere che la matrice a scalini abbia lo stesso determinante della matrice di partenza;
- applicare Binet a matrici non quadrate;
- dimenticare la trasposizione nella formula dell'inversa, o i segni dei cofattori;
- dichiarare «invertibile per ogni $k$» senza aver scomposto il determinante.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: la tabella delle tre mosse e del loro effetto sul determinante; due righe proporzionali $\Rightarrow \det = 0$; Binet $\det(AB) = \det A \det B$, $\det(A^n) = (\det A)^n$, $\det(A^{-1}) = 1/\det A$; $\mathrm{cof}_{ij} = (-1)^{i+j}\det C_{ij}$; $A^{-1} = \frac 1{\det A}\,{}^t(\mathrm{cof}(A))$; la formula dell'inversa $2 \times 2$; «invertibile $\iff \det \neq 0 \iff \rk = n$».

## Quiz

```quiz
D: Sia $A$ una matrice quadrata che, ridotta a scalini con l'algoritmo di Gauss, diventa $\begin{pmatrix} 2 & 1 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 3 \end{pmatrix}$. Quale delle seguenti affermazioni **non** è necessariamente vera?
+ $\det A = 6$.
- $\det A \neq 0$.
- $A$ è invertibile.
- $\rk A = 3$.
- Le righe di $A$ sono linearmente indipendenti.
= Le mosse di tipo (I) e (II) cambiano il determinante (segno, fattore $\lambda \neq 0$), quindi $\det A$ può essere diverso da $2 \cdot 1 \cdot 3 = 6$. Ma ogni mossa moltiplica il determinante per un numero non nullo: $\det A \neq 0$, quindi $A$ è invertibile, ha rango 3 e righe indipendenti. Simile all'appello del 06/09/2024, domanda 7.

D: Sia $A = \begin{pmatrix} 1 & 0 & 2 \\ 2 & -2 & 1 \\ 1 & 0 & 3 \end{pmatrix}$. Il determinante di $A^3$ è:
+ $-8$
- $8$
- $-6$
- $-2$
- $64$
= Lungo la seconda colonna: $\det A = (-2) \cdot (+1) \cdot \det \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix} = -2 \cdot 1 = -2$. Per Binet $\det(A^3) = (-2)^3 = -8$. $-6 = 3\det A$ è l'errore classico. Simile agli appelli del 03/07/2026 (domanda 6), del 05/02/2026 (domanda 5) e del 07/02/2025 (domanda 5).

D: Siano $A = \begin{pmatrix} 2 & 5 & -1 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 0 & 0 \\ 4 & 3 & 0 \\ 7 & -2 & 1 \end{pmatrix}$. Quanto vale $\det(AB)$?
+ $6$
- $5$
- $1$
- $36$
- $0$
= $A$ è triangolare superiore con diagonale $2, 1, 1$: $\det A = 2$. $B$ è triangolare inferiore con diagonale $1, 3, 1$: $\det B = 3$. Per Binet $\det(AB) = 2 \cdot 3 = 6$, senza calcolare il prodotto. $5$ è la somma dei determinanti. Simile all'appello del 16/01/2025, domanda 3.

D: Sia $A$ una matrice $3 \times 3$ con $\det A = 4$. Quanto vale $\det(2A^{-1})$?
+ $2$
- $\frac 12$
- $8$
- $\frac 18$
- $32$
= $\det(2A^{-1}) = 2^3 \det(A^{-1}) = 8 \cdot \frac 14 = 2$ (Corollario 9.12 e Corollario 10.5). $\frac 12 = 2 \cdot \frac 14$ dimentica che il fattore 2 moltiplica tutte e tre le righe.

D: L'inversa di $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ è:
+ $\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$
- $\begin{pmatrix} -2 & 1 \\ 5 & -3 \end{pmatrix}$
- $\begin{pmatrix} 1/3 & 1 \\ 1/5 & 1/2 \end{pmatrix}$
- $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$
= Il determinante è $6 - 5 = 1$. Si scambiano i numeri della diagonale, si cambia segno agli altri due e si divide per 1. Tra le risposte sbagliate: $\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$ è la matrice dei cofattori non trasposta, quella con $\frac 13$ e $\frac 15$ inverte casella per casella, $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$ non scambia la diagonale. Controllo: $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = I_2$.

D: Per quali $k \in \R$ la matrice $A = \begin{pmatrix} 1 & 0 & k \\ 0 & k & 1 \\ k & 1 & 0 \end{pmatrix}$ è invertibile?
+ Per ogni $k \neq -1$.
- Per ogni $k \neq 1$.
- Per ogni $k \neq 0$ e $k \neq \pm 1$.
- Per nessun $k$.
- Per ogni $k \in \R$.
= Lungo la prima riga: $\det A = 1 \cdot (0 - 1) - 0 + k \cdot (0 - k^2) = -1 - k^3 = -(k + 1)(k^2 - k + 1)$. Il fattore $k^2 - k + 1$ non ha radici reali (discriminante $1 - 4 < 0$), quindi $\det A = 0$ solo per $k = -1$. Simile ai problemi 11 degli appelli del 07/02/2025 e del 03/07/2026.

D: Sia $A$ una matrice $3 \times 3$ con $\det A = 5$. Si scambiano la prima e la terza riga, poi si fa $R_2 \to R_2 - 4R_1$, poi $R_3 \to 2R_3$. Quanto vale il determinante della matrice ottenuta?
+ $-10$
- $10$
- $-5$
- $5$
- $-40$
= Scambio: $-5$. Mossa del terzo tipo: resta $-5$. Terza riga per 2: $-10$ (Proposizione 10.1).

D: Quale di queste affermazioni vale per tutte le matrici $A, B \in M(n)$?
+ $\det(AB) = \det(BA)$.
- $AB = BA$.
- $\det(A + B) = \det A + \det B$.
- $\det(2A) = 2\det A$.
- Se $A$ e $B$ sono invertibili, $(AB)^{-1} = A^{-1}B^{-1}$.
= Per Binet $\det(AB) = \det A \det B = \det B \det A = \det(BA)$, anche se $AB \neq BA$. Il determinante non è additivo, $\det(2A) = 2^n\det A$, e l'inversa di un prodotto è $B^{-1}A^{-1}$.

D: Data $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$, il determinante di $A \cdot {}^tA$ è:
+ $0$
- $6$
- Non si può calcolare, poiché $A$ non è quadrata.
- $36$
- $1$
= $A\,{}^tA$ è $3 \times 3$, quindi il determinante esiste. Le sue colonne sono combinazioni lineari delle due colonne di $A$ (ogni colonna di $A\,{}^tA$ è $A$ per un vettore), quindi il suo rango è al più 2 e le colonne sono dipendenti: $\det = 0$ (Proposizione 10.3). $6$ è $\det({}^tA\,A)$, il prodotto nell'altro ordine. Simile all'appello del 03/06/2025, domanda 9.

D: Sia $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$. Quanto vale l'elemento di posto $(1, 3)$ di $A^{-1}$? Scrivi una frazione.
N: 1/3
= $\det A = 2 \cdot 1 - 1 \cdot (0 - 1) + 0 = 3$. Per la Proposizione 10.8, $(A^{-1})_{13} = \frac{\mathrm{cof}_{31}}{\det A}$: attenzione agli indici scambiati dalla trasposizione. $\mathrm{cof}_{31} = +\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$, quindi $(A^{-1})_{13} = \frac 13$. Chi usa $\mathrm{cof}_{13} = -1$ trova $-\frac 13$, che è invece l'elemento $(3, 1)$.
```

## Esercizi

::: esercizio medio Esercizio 10.9 delle dispense: un'inversa con parametro
Determinare per quali valori del parametro $k \in \R$ la matrice $A = \begin{pmatrix} k - 5 & 3 \\ -2 & k \end{pmatrix}$ è invertibile. Per ogni $k$ per cui la matrice risulta invertibile, trovare la matrice inversa.
::: soluzione
**Determinante.** $\det A = (k - 5) \cdot k - 3 \cdot (-2) = k^2 - 5k + 6$. È un polinomio di secondo grado con radici $k = \frac{5 \pm \sqrt{25 - 24}}2 = \frac{5 \pm 1}2$, cioè $k = 3$ e $k = 2$:
$$\det A = (k - 2)(k - 3).$$
**Invertibilità.** Per la Proposizione 10.8, $A$ è invertibile se e solo se $\det A \neq 0$, cioè **per $k \neq 2$ e $k \neq 3$**.

**Inversa.** Con la formula delle $2 \times 2$ (scambio la diagonale, cambio segno agli altri due, divido per il determinante):
$$A^{-1} = \frac 1{(k - 2)(k - 3)} \begin{pmatrix} k & -3 \\ 2 & k - 5 \end{pmatrix}.$$
**Controllo:**
$$\begin{pmatrix} k - 5 & 3 \\ -2 & k \end{pmatrix} \begin{pmatrix} k & -3 \\ 2 & k - 5 \end{pmatrix} = \begin{pmatrix} k^2 - 5k + 6 & -3(k - 5) + 3(k - 5) \\ -2k + 2k & 6 + k^2 - 5k \end{pmatrix}$$

$$= (k^2 - 5k + 6)\, I_2,$$
e dividendo per $(k - 2)(k - 3) = k^2 - 5k + 6$ si ottiene $I_2$ ✓. Per esempio con $k = 0$: $A = \begin{pmatrix} -5 & 3 \\ -2 & 0 \end{pmatrix}$ e $A^{-1} = \frac 16 \begin{pmatrix} 0 & -3 \\ 2 & -5 \end{pmatrix}$.
:::

::: esercizio medio Esercizio 10.10 delle dispense: una $3 \times 3$ intera
Dimostrare che la matrice $B = \begin{pmatrix} 2 & -1 & 0 \\ -2 & 1 & 1 \\ 1 & -1 & 3 \end{pmatrix}$ è invertibile e calcolarne l'inversa.
::: soluzione
**Invertibilità.** Lungo la prima riga (segni $+, -, +$, e $b_{13} = 0$):
$$\det B = 2 \det \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix} - (-1) \det \begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix} + 0$$

$$= 2 \cdot (3 + 1) + (-6 - 1) = 8 - 7 = 1.$$
$\det B = 1 \neq 0$: $B$ è invertibile, e $B^{-1} = {}^t(\mathrm{cof}(B))$ (si divide per 1).

**I nove cofattori.**

| | colonna 1 | colonna 2 | colonna 3 |
|---|---|---|---|
| riga 1 | $+\det \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix} = 4$ | $-\det \begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix} = 7$ | $+\det \begin{pmatrix} -2 & 1 \\ 1 & -1 \end{pmatrix} = 1$ |
| riga 2 | $-\det \begin{pmatrix} -1 & 0 \\ -1 & 3 \end{pmatrix} = 3$ | $+\det \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix} = 6$ | $-\det \begin{pmatrix} 2 & -1 \\ 1 & -1 \end{pmatrix} = 1$ |
| riga 3 | $+\det \begin{pmatrix} -1 & 0 \\ 1 & 1 \end{pmatrix} = -1$ | $-\det \begin{pmatrix} 2 & 0 \\ -2 & 1 \end{pmatrix} = -2$ | $+\det \begin{pmatrix} 2 & -1 \\ -2 & 1 \end{pmatrix} = 0$ |

Per esempio $\mathrm{cof}_{12}$: cancello riga 1 e colonna 2, resta $\begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix}$ con determinante $-6 - 1 = -7$; il segno in posizione $(1, 2)$ è $-$, quindi $\mathrm{cof}_{12} = 7$.

**Trasposta.**
$$\mathrm{cof}(B) = \begin{pmatrix} 4 & 7 & 1 \\ 3 & 6 & 1 \\ -1 & -2 & 0 \end{pmatrix} \quad\Longrightarrow\quad B^{-1} = {}^t(\mathrm{cof}(B)) = \begin{pmatrix} 4 & 3 & -1 \\ 7 & 6 & -2 \\ 1 & 1 & 0 \end{pmatrix}.$$

**Controllo** di $BB^{-1}$ riga per riga:
- riga $(2, -1, 0)$: $8 - 7 = 1$, $\ 6 - 6 = 0$, $\ -2 + 2 = 0$;
- riga $(-2, 1, 1)$: $-8 + 7 + 1 = 0$, $\ -6 + 6 + 1 = 1$, $\ 2 - 2 + 0 = 0$;
- riga $(1, -1, 3)$: $4 - 7 + 3 = 0$, $\ 3 - 6 + 3 = 0$, $\ -1 + 2 + 0 = 1$.

Viene $I_3$ ✓. Poiché $\det B = 1$, l'inversa ha tutti i numeri interi.
:::

::: esercizio medio Esercizio 10.11 delle dispense: un'inversa complessa
Si calcoli l'inversa della matrice $C = \begin{pmatrix} 2 - i & 0 \\ 3 & 2 + i \end{pmatrix}$.
::: soluzione
**Determinante.** $C$ è triangolare inferiore: $\det C = (2 - i)(2 + i) = 4 - i^2 = 4 + 1 = 5 \neq 0$. Quindi $C$ è invertibile (la Proposizione 10.8 vale su qualsiasi campo, anche su $\C$).

**Inversa** con la formula delle $2 \times 2$ ($a = 2 - i$, $b = 0$, $c = 3$, $d = 2 + i$):
$$C^{-1} = \frac 15 \begin{pmatrix} 2 + i & 0 \\ -3 & 2 - i \end{pmatrix} = \begin{pmatrix} \frac 25 + \frac 15 i & 0 \\ -\frac 35 & \frac 25 - \frac 15 i \end{pmatrix}.$$

**Controllo:**
$$\begin{pmatrix} 2 - i & 0 \\ 3 & 2 + i \end{pmatrix} \begin{pmatrix} 2 + i & 0 \\ -3 & 2 - i \end{pmatrix} = \begin{pmatrix} (2 - i)(2 + i) & 0 \\ 3(2 + i) - 3(2 + i) & (2 + i)(2 - i) \end{pmatrix} = \begin{pmatrix} 5 & 0 \\ 0 & 5 \end{pmatrix},$$
e diviso per 5 dà $I_2$ ✓. Nota che l'inversa di una triangolare inferiore è ancora triangolare inferiore, con gli inversi sulla diagonale: $\frac 1{2 - i} = \frac{2 + i}5$.
:::

::: esercizio base Determinanti con le mosse di Gauss
Calcola con le mosse di Gauss: (a) $\det \begin{pmatrix} 0 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 4 & 5 \end{pmatrix}$; (b) $\det \begin{pmatrix} 1 & 2 & 1 & 0 \\ 2 & 5 & 3 & 1 \\ 1 & 2 & 2 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix}$.
::: soluzione
(a) È la matrice $B$ della sezione sul metodo: uno scambio $R_1 \leftrightarrow R_2$, poi $R_3 \to R_3 - 2R_1$ e $R_3 \to R_3 - R_2$ portano a una triangolare con diagonale $1, 2, 2$. Determinante $-(1 \cdot 2 \cdot 2) = -4$.

(b) Solo mosse del terzo tipo, che non cambiano il determinante:
$$\xrightarrow{\substack{R_2 \to R_2 - 2R_1 \\ R_3 \to R_3 - R_1}} \begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix} \xrightarrow{R_4 \to R_4 - R_2} \begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 2 \end{pmatrix}.$$
Triangolare con diagonale $1, 1, 1, 2$: il determinante è $2$.
:::

::: esercizio base Determinanti nulli senza conti
Spiega perché queste matrici hanno determinante nullo, senza calcolarlo:
$$A = \begin{pmatrix} 3 & 1 & 4 \\ 1 & 5 & 9 \\ 3 & 1 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 2 & -6 & 1 \\ 1 & -3 & 7 \\ 0 & 0 & 2 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 3 \\ 3 & 1 & 4 \end{pmatrix}.$$
::: soluzione
- $A$: la prima e la terza riga sono uguali. La prima è combinazione delle altre ($A_1 = 0 \cdot A_2 + 1 \cdot A_3$), quindi $\det A = 0$ (Proposizione 10.3). Oppure: $R_3 \to R_3 - R_1$ crea una riga nulla senza cambiare il determinante.
- $B$: la seconda colonna è $-3$ volte la prima, ${}^t(-6, -3, 0) = -3 \cdot {}^t(2, 1, 0)$. Una colonna combinazione delle altre: $\det B = 0$.
- $C$: la terza riga è la somma delle prime due, $(1 + 2, 0 + 1, 1 + 3) = (3, 1, 4)$. Quindi $\det C = 0$. Qui anche la terza colonna è la somma delle prime due. In generale, se le righe di una matrice quadrata sono dipendenti lo sono anche le colonne, perché rango per righe e rango per colonne coincidono (Proposizione 8.6), anche se la relazione tra le colonne può avere coefficienti diversi.
:::

::: esercizio medio Binet e le sue conseguenze
Siano $A, B \in M(3, \R)$ con $\det A = 2$ e $\det B = -3$. Calcola: (a) $\det(AB)$; (b) $\det(A^2B)$; (c) $\det(A^{-1})$; (d) $\det({}^tA\,B^{-1})$; (e) $\det(3AB)$; (f) $\det(B^4)$.
::: soluzione
(a) Binet: $2 \cdot (-3) = -6$.

(b) $\det(A^2B) = (\det A)^2 \det B = 4 \cdot (-3) = -12$.

(c) $\det(A^{-1}) = \frac 12$ (Corollario 10.5).

(d) $\det({}^tA) = 2$ e $\det(B^{-1}) = -\frac 13$, quindi $\det({}^tA\,B^{-1}) = 2 \cdot \left(-\frac 13\right) = -\frac 23$.

(e) $3AB$ è $3 \times 3$: $\det(3AB) = 3^3 \det(AB) = 27 \cdot (-6) = -162$.

(f) $\det(B^4) = (-3)^4 = 81$.
:::

::: esercizio difficile Matrici con $A^2 = A$ e con $A^2 = 0$
(a) Dimostra che se $A^2 = 0$ allora $A$ non è invertibile, e trova un esempio $2 \times 2$ con $A \neq 0$. (b) Dimostra che se $A^2 = A$ allora $\det A$ vale $0$ oppure $1$. (c) Dimostra che se $A^2 = A$ e $A$ è invertibile, allora $A = I_n$.
::: soluzione
(a) Per Binet $(\det A)^2 = \det(A^2) = \det(0) = 0$, quindi $\det A = 0$ e $A$ non è invertibile (Proposizione 10.8). Esempio: $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, con $A^2 = \begin{pmatrix} 0 \cdot 0 + 1 \cdot 0 & 0 \cdot 1 + 1 \cdot 0 \\ 0 & 0 \end{pmatrix} = 0$.

(b) $(\det A)^2 = \det(A^2) = \det A$, cioè $\det A(\det A - 1) = 0$: $\det A = 0$ oppure $\det A = 1$.

(c) Moltiplico $A^2 = A$ a sinistra per $A^{-1}$: $A^{-1}(AA) = A^{-1}A$. A sinistra, per l'associatività, $(A^{-1}A)A = I_nA = A$; a destra $I_n$. Quindi $A = I_n$. Esempio di $A^2 = A$ non invertibile: $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, che ha determinante $0$.
:::

::: esercizio difficile L'inversa di un prodotto e della trasposta
Siano $A, B \in M(n)$ invertibili. Dimostra che (a) $AB$ è invertibile e $(AB)^{-1} = B^{-1}A^{-1}$; (b) ${}^tA$ è invertibile e $({}^tA)^{-1} = {}^t(A^{-1})$ (Martelli, Esercizio 3.9).
::: soluzione
(a) Basta verificare che $B^{-1}A^{-1}$ funziona da inversa, dai due lati (Martelli, Proposizione 3.4.5):
$$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AI_nA^{-1} = AA^{-1} = I_n,$$
$$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}B = I_n.$$
Si usa solo l'associatività. Con i determinanti si vede anche che $\det(AB) = \det A \det B \neq 0$.

(b) Uso ${}^t(XY) = {}^tY\,{}^tX$ (Esercizio 8.14):
$${}^tA\ {}^t(A^{-1}) = {}^t(A^{-1}A) = {}^tI_n = I_n, \qquad {}^t(A^{-1})\ {}^tA = {}^t(AA^{-1}) = {}^tI_n = I_n.$$
Quindi ${}^t(A^{-1})$ è l'inversa di ${}^tA$.
:::

::: esercizio medio La Proposizione 10.7 su un esempio
Sia $A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 3 & 1 \end{pmatrix}$. (a) Calcola $\mathrm{cof}(A)$. (b) Verifica che $A \cdot {}^t(\mathrm{cof}(A)) = \det(A) I_3$. (c) Scrivi $A^{-1}$.
::: soluzione
(a) Cofattore per cofattore (cancello riga $i$ e colonna $j$, poi segno della scacchiera):
- riga 1: $+\det \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix} = 1$, $\ -\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$, $\ +\det \begin{pmatrix} 1 & 1 \\ 0 & 3 \end{pmatrix} = 3$;
- riga 2: $-\det \begin{pmatrix} 0 & 1 \\ 3 & 1 \end{pmatrix} = -(0 - 3) = 3$, $\ +\det \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = 2$, $\ -\det \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} = -6$;
- riga 3: $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$, $\ -\det \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix} = -(0 - 1) = 1$, $\ +\det \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix} = 2$.

$$\mathrm{cof}(A) = \begin{pmatrix} 1 & -1 & 3 \\ 3 & 2 & -6 \\ -1 & 1 & 2 \end{pmatrix}, \qquad {}^t(\mathrm{cof}(A)) = \begin{pmatrix} 1 & 3 & -1 \\ -1 & 2 & 1 \\ 3 & -6 & 2 \end{pmatrix}.$$

(b) $\det A = 2 \cdot 1 - 0 + 1 \cdot 3 = 5$ (prima riga per i suoi cofattori). Il prodotto, riga per colonna:
- riga $(2, 0, 1)$: $2 + 3 = 5$, $\ 6 - 6 = 0$, $\ -2 + 2 = 0$;
- riga $(1, 1, 0)$: $1 - 1 = 0$, $\ 3 + 2 = 5$, $\ -1 + 1 = 0$;
- riga $(0, 3, 1)$: $-3 + 3 = 0$, $\ 6 - 6 = 0$, $\ 3 + 2 = 5$.

$A \cdot {}^t(\mathrm{cof}(A)) = 5I_3$ ✓: sulla diagonale gli sviluppi di Laplace, fuori diagonale le somme con i cofattori «di un'altra riga», che fanno $0$.

(c) $A^{-1} = \frac 15 \begin{pmatrix} 1 & 3 & -1 \\ -1 & 2 & 1 \\ 3 & -6 & 2 \end{pmatrix}$.
:::

::: esercizio esame Invertibilità con parametro e inversa
Si consideri la matrice $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 2 \\ k & 0 & 3 \end{pmatrix}$, con $k \in \R$ (Foglio di esercizi 1 del tutorato 2025, esercizio 9). (1) Determinare per quali $k$ la matrice è invertibile. (2) Per tali valori calcolare $A^{-1}$. (3) Verificare $AA^{-1} = I_3$ per $k = 0$.
::: soluzione
(1) Lungo la prima colonna (segni $+, -, +$, e $a_{21} = 0$):
$$\det A = 1 \cdot \det \begin{pmatrix} 2 & 2 \\ 0 & 3 \end{pmatrix} - 0 + k \det \begin{pmatrix} 1 & 0 \\ 2 & 2 \end{pmatrix} = 6 + 2k = 2(k + 3).$$
$A$ è invertibile se e solo se $k \neq -3$.

(2) I cofattori:
- riga 1: $+\det \begin{pmatrix} 2 & 2 \\ 0 & 3 \end{pmatrix} = 6$, $\ -\det \begin{pmatrix} 0 & 2 \\ k & 3 \end{pmatrix} = -(0 - 2k) = 2k$, $\ +\det \begin{pmatrix} 0 & 2 \\ k & 0 \end{pmatrix} = -2k$;
- riga 2: $-\det \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix} = -3$, $\ +\det \begin{pmatrix} 1 & 0 \\ k & 3 \end{pmatrix} = 3$, $\ -\det \begin{pmatrix} 1 & 1 \\ k & 0 \end{pmatrix} = -(0 - k) = k$;
- riga 3: $+\det \begin{pmatrix} 1 & 0 \\ 2 & 2 \end{pmatrix} = 2$, $\ -\det \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} = -2$, $\ +\det \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = 2$.

Trasponendo e dividendo per $2(k + 3)$:
$$A^{-1} = \frac 1{2(k + 3)} \begin{pmatrix} 6 & -3 & 2 \\ 2k & 3 & -2 \\ -2k & k & 2 \end{pmatrix}, \qquad k \neq -3.$$

(3) Con $k = 0$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 2 \\ 0 & 0 & 3 \end{pmatrix}$ e $A^{-1} = \frac 16 \begin{pmatrix} 6 & -3 & 2 \\ 0 & 3 & -2 \\ 0 & 0 & 2 \end{pmatrix}$. Prodotto $A \cdot \begin{pmatrix} 6 & -3 & 2 \\ 0 & 3 & -2 \\ 0 & 0 & 2 \end{pmatrix}$:
- riga $(1, 1, 0)$: $6$, $\ -3 + 3 = 0$, $\ 2 - 2 = 0$;
- riga $(0, 2, 2)$: $0$, $\ 6$, $\ -4 + 4 = 0$;
- riga $(0, 0, 3)$: $0$, $0$, $6$.

È $6I_3$, e diviso per 6 dà $I_3$ ✓.
:::

::: esercizio esame Per quali $k$ è invertibile? E l'inversa per $k = 1$
Sia $A = \begin{pmatrix} 1 & k & 0 \\ k & 1 & k \\ 0 & k & 1 \end{pmatrix}$ con $k \in \R$. (1) Determinare per quali $k$ la matrice $A$ è invertibile. (2) Posto $k = 1$, calcolare $A^{-1}$.
::: soluzione
(1) Lungo la prima riga:
$$\det A = 1 \cdot \det \begin{pmatrix} 1 & k \\ k & 1 \end{pmatrix} - k \det \begin{pmatrix} k & k \\ 0 & 1 \end{pmatrix} + 0 = (1 - k^2) - k \cdot k = 1 - 2k^2.$$
Si annulla per $k^2 = \frac 12$, cioè $k = \pm \frac 1{\sqrt 2} = \pm \frac{\sqrt 2}2$. **$A$ è invertibile se e solo se $k \neq \frac{\sqrt 2}2$ e $k \neq -\frac{\sqrt 2}2$.**

(2) Con $k = 1$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ e $\det A = 1 - 2 = -1$. I cofattori:
- riga 1: $+(1 - 1) = 0$, $\ -(1 - 0) = -1$, $\ +(1 - 0) = 1$;
- riga 2: $-(1 - 0) = -1$, $\ +(1 - 0) = 1$, $\ -(1 - 0) = -1$;
- riga 3: $+(1 - 0) = 1$, $\ -(1 - 0) = -1$, $\ +(1 - 1) = 0$.

$\mathrm{cof}(A) = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix}$ è simmetrica (come $A$), quindi trasporre non cambia niente. Dividendo per $-1$:
$$A^{-1} = \begin{pmatrix} 0 & 1 & -1 \\ 1 & -1 & 1 \\ -1 & 1 & 0 \end{pmatrix}.$$
Controllo della prima riga di $AA^{-1}$: $(1, 1, 0)$ per le colonne dà $0 + 1 = 1$, $\ 1 - 1 = 0$, $\ -1 + 1 = 0$ ✓.
:::

::: esercizio esame La matrice di una trasformazione e la sua inversa
Sia $A = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, la matrice che manda il vettore ${}^t(x, y, z)$ in ${}^t(x + z,\ 2x + y,\ y + z)$. (1) Stabilire se $A$ è invertibile. (2) Calcolare $A^{-1}$. (3) Trovare il vettore ${}^t(x, y, z)$ che viene mandato in ${}^t(1, 1, 1)$.
::: soluzione
(1) Lungo la prima riga: $\det A = 1 \cdot (1 - 0) - 0 + 1 \cdot (2 - 0) = 3 \neq 0$: invertibile.

(2) I cofattori:
- riga 1: $+\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$, $\ -\det \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = -2$, $\ +\det \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = 2$;
- riga 2: $-\det \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = 1$, $\ +\det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = 1$, $\ -\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$;
- riga 3: $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$, $\ -\det \begin{pmatrix} 1 & 1 \\ 2 & 0 \end{pmatrix} = 2$, $\ +\det \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = 1$.

$$\mathrm{cof}(A) = \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix}, \qquad A^{-1} = \frac 13 \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix}.$$
Controllo della prima riga di $AA^{-1}$ (senza il fattore $\frac 13$): $(1, 0, 1)$ per le colonne dà $1 + 2 = 3$, $\ 1 - 1 = 0$, $\ -1 + 1 = 0$ ✓.

(3) Cerco $v$ con $Av = {}^t(1, 1, 1)$: moltiplicando a sinistra per $A^{-1}$, $v = A^{-1}\,{}^t(1, 1, 1) = \frac 13\,{}^t(1 + 1 - 1,\ -2 + 1 + 2,\ 2 - 1 + 1) = {}^t\left(\frac 13, \frac 13, \frac 23\right)$. Verifica: $x + z = \frac 13 + \frac 23 = 1$, $2x + y = \frac 23 + \frac 13 = 1$, $y + z = \frac 13 + \frac 23 = 1$ ✓. Nelle lezioni L14–L16 questa matrice sarà la matrice associata a un'applicazione lineare, e $A^{-1}$ quella dell'applicazione inversa, come nel problema 11 dell'appello del 10/07/2024.
:::

## Domande di ripasso

::: domanda Come cambia il determinante con le tre mosse di Gauss?
Scambiare due righe lo cambia di segno; moltiplicare una riga per $\lambda$ lo moltiplica per $\lambda$; aggiungere a una riga un multiplo di un'altra non lo cambia. Le stesse regole valgono per le colonne.
:::

::: domanda Perché una matrice con due righe uguali ha determinante nullo?
Scambiando le due righe uguali la matrice non cambia, ma il determinante cambia segno: $\det A = -\det A$, quindi $\det A = 0$.
:::

::: domanda Come si calcola un determinante con il metodo di Gauss?
Si rende la matrice triangolare con mosse del terzo tipo (e scambi se serve), si moltiplica la diagonale e si cambia segno per ogni scambio; se si sono usate mosse del secondo tipo si divide per i loro fattori.
:::

::: domanda Che cosa dice la Proposizione 10.3?
$\det A = 0$ se e solo se una riga (o una colonna) di $A$ è combinazione lineare delle altre.
:::

::: domanda Enuncia il teorema di Binet e due sue conseguenze.
Se $A$ e $B$ sono quadrate dello stesso ordine, $\det(AB) = \det A \cdot \det B$. Conseguenze: $\det(A^k) = (\det A)^k$ e $\det(AB) = \det(BA)$; inoltre $\det(A^{-1}) = \frac 1{\det A}$.
:::

::: domanda Che cosa vuol dire che una matrice è invertibile?
Che è quadrata ed esiste $B$ con $AB = BA = I_n$; questa $B$ è unica e si scrive $A^{-1}$.
:::

::: domanda Perché una matrice invertibile ha determinante diverso da zero?
Da $AA^{-1} = I_n$ e Binet: $\det A \cdot \det(A^{-1}) = \det I_n = 1$, e un prodotto che vale 1 non può avere un fattore nullo.
:::

::: domanda Che cos'è il cofattore $\mathrm{cof}_{ij}$?
Il numero $(-1)^{i+j}\det C_{ij}$, dove $C_{ij}$ è la sottomatrice ottenuta cancellando la riga $i$ e la colonna $j$. Con i cofattori lo sviluppo di Laplace diventa $\det A = \sum_j a_{ij}\,\mathrm{cof}_{ij}$.
:::

::: domanda Quanto vale $\sum_j a_{ij}\,\mathrm{cof}_{kj}$ con $i \neq k$, e perché?
Vale $0$: è lo sviluppo lungo la riga $k$ della matrice con la riga $i$ al posto della riga $k$, che ha due righe uguali.
:::

::: domanda Che cosa dice la Proposizione 10.7?
$A \cdot {}^t(\mathrm{cof}(A)) = \det(A) I_n = {}^t(\mathrm{cof}(A)) \cdot A$.
:::

::: domanda Quando una matrice quadrata è invertibile, e qual è la formula dell'inversa?
Se e solo se $\det A \neq 0$; allora $A^{-1} = \frac 1{\det A}\,{}^t(\mathrm{cof}(A))$ (Proposizione 10.8, per $n \ge 2$).
:::

::: domanda Qual è l'inversa di una $2 \times 2$?
$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac 1{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, se $ad - bc \neq 0$.
:::

::: domanda Come si risponde a «per quali $k$ la matrice è invertibile»?
Si calcola $\det A$ in funzione di $k$, lo si scompone in fattori, si trovano i $k$ che lo annullano e si risponde «invertibile se e solo se $k$ è diverso da quei valori».
:::

## Glossario

```glossario
Mossa di Gauss | Una delle tre operazioni sulle righe: scambio ($R_i \leftrightarrow R_j$), moltiplicazione per $\lambda$ ($R_i \to \lambda R_i$), somma di un multiplo di un'altra riga ($R_i \to R_i + \lambda R_j$).
Effetto sul determinante | Scambio: cambia segno; riga per $\lambda$: determinante per $\lambda$; somma di un multiplo: invariato.
Metodo di Gauss per il determinante | Rendere la matrice triangolare con le mosse e moltiplicare la diagonale, tenendo conto di scambi e fattori.
Righe dipendenti | Righe tra cui una è combinazione lineare delle altre; succede se e solo se $\det A = 0$.
Teorema di Binet | $\det(AB) = \det A \cdot \det B$ per matrici quadrate dello stesso ordine.
Matrice invertibile | Matrice quadrata $A$ per cui esiste $B$ con $AB = BA = I_n$.
Matrice inversa $A^{-1}$ | L'unica $B$ con $AB = BA = I_n$; $\det(A^{-1}) = 1/\det A$.
Cofattore $\mathrm{cof}_{ij}$ | $(-1)^{i+j}\det C_{ij}$: il coefficiente di $a_{ij}$ nello sviluppo di Laplace.
Matrice dei cofattori $\mathrm{cof}(A)$ | La matrice che ha $\mathrm{cof}_{ij}$ al posto $(i, j)$.
Proposizione 10.7 | $A\,{}^t(\mathrm{cof}(A)) = \det(A)I_n = {}^t(\mathrm{cof}(A))\,A$.
Criterio di invertibilità | $A$ quadrata è invertibile se e solo se $\det A \neq 0$.
Formula dell'inversa | $A^{-1} = \frac 1{\det A}\,{}^t(\mathrm{cof}(A))$; per le $2 \times 2$, $\frac 1{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
Inversa di un prodotto | $(AB)^{-1} = B^{-1}A^{-1}$, con l'ordine rovesciato.
Rango massimo | Per $A \in M(n)$: $\rk A = n$ se e solo se $\det A \neq 0$.
```

## Checklist

```checklist
- So come cambia il determinante con ciascuna delle tre mosse di Gauss, per righe e per colonne.
- So calcolare un determinante $3 \times 3$ o $4 \times 4$ rendendo la matrice triangolare, contando gli scambi.
- Riconosco a colpo d'occhio righe o colonne uguali, proporzionali o somme di altre, e so che allora $\det A = 0$.
- So enunciare il teorema di Binet e usarlo per $\det(A^k)$, $\det(AB)$, $\det(BA)$.
- So che cosa vuol dire invertibile e che $\det(A^{-1}) = 1/\det A$.
- So calcolare la matrice dei cofattori e verificare $A\,{}^t(\mathrm{cof}(A)) = \det(A)I_n$.
- So invertire una $2 \times 2$ a memoria e una $3 \times 3$ con i cofattori, con il controllo finale.
- So dire per quali valori di un parametro una matrice è invertibile, scomponendo il determinante.
- So evitare i tranelli: matrice a scalini, Binet con matrici non quadrate, trasposizione dimenticata.
- So combinare $\det(cA) = c^n \det A$, Binet e l'inversa in un'unica formula, come $\det(2A^{-1})$.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 10 «Matrici III», pp. 46–49: le sezioni 10.A (altre proprietà del determinante), 10.B (cofattori), 10.C (l'inversa di una matrice) e 10.D (esercizi) sono seguite in ordine, con la pagina accanto a ogni titolo; proposizioni, teoremi, esempi ed esercizi mantengono la loro numerazione (Proposizioni 10.1, 10.3, 10.7, 10.8, Teorema 10.4, Corollario 10.5, Definizione 10.6, Esempio 10.2, Esercizi 10.9, 10.10, 10.11). Per i richiami: lezione 9 (Proposizioni 9.3, 9.5, 9.10, 9.11, Corollario 9.12) e lezione 11 (notazione delle mosse di Gauss, Definizione 11.2).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §3.3.5 (Proposizione 3.3.7), §3.3.7 (Proposizione 3.3.12), §3.3.9 (Proposizione 3.3.15), §3.4.5 (matrici invertibili, Proposizione 3.4.5), §3.4.6 (Teorema 3.4.7, Corollario 3.4.8), §3.4.7 (Proposizioni 3.4.10–3.4.12, Esempio 3.4.13), §3.4.8, Esercizio 3.9.
- **Esame**: testi degli appelli di Algebra lineare dal 24/01/2024 al 07/09/2026 (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); riportate con soluzione propria le domande 7 del 06/09/2024 e 6 del 03/07/2026 e il problema 11 (punto 1) del 15/01/2026; le altre sono citate per numero. Foglio di esercizi 1 del tutorato (27/10/2025), esercizio 9.
- Le parti **«Oltre le dispense»** (definizione di matrice invertibile e unicità dell'inversa, collegamento con il rango, verifica di Binet per le $2 \times 2$, metodi per l'esame, esercizi senza numero) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
