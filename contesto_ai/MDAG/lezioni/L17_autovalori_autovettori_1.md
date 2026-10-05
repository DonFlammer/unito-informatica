---
corso: MDAG
modulo: AG
lezione: L17
titolo: Autovalori e autovettori I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L17
descrizione: >-
  Appunti della lezione L17 di Algebra lineare e Geometria (MDAG, parte 2): autovettori e autovalori di un
  endomorfismo, endomorfismi e matrici diagonalizzabili, potenze di matrici e polinomio caratteristico, con quiz nello
  stile dell'esame ed esercizi svolti.
lede: >-
  Una matrice trasforma i vettori, e di solito li fa girare. Lungo certe direzioni però si limita ad allungarli o ad
  accorciarli. Qui impari a riconoscere queste direzioni, a trovarle con un conto e a usarle per rendere i calcoli
  molto più corti. È un argomento presente in ogni appello d'esame.
materiale: dispense
scheda:
  Dispense: lezione 17 · pp. 85–89
  Libro: Martelli, §5.1
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 3–4 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 17 «Autovalori e autovettori I»; B. Martelli, Geometria e algebra lineare, §5.1
appunti_html: appunti/MDAG/L17_autovalori_autovettori_1.html
genera_html: true
---

## In breve

- Una matrice è una macchina che trasforma vettori in vettori. Quasi sempre li fa girare. Un **autovettore** è un vettore, diverso da zero, che la macchina non gira: lo allunga, lo accorcia o lo ribalta, ma lo lascia sulla sua retta.
- L'**autovalore** è il numero che dice di quanto: 3 vuol dire «tre volte più lungo», $-1$ vuol dire «ribaltato». Può essere anche zero.
- Una **rotazione** gira tutti i vettori. Per questo non ha autovettori fatti di numeri reali.
- Una macchina è **diagonalizzabile** quando esiste una base fatta tutta di autovettori. In quella base la sua matrice è **diagonale**: ha numeri solo sulla diagonale e zeri in tutti gli altri posti.
- Con le matrici diagonali i conti sono corti. Per questo anche la potenza numero 100 di una matrice diagonalizzabile si calcola in poche righe.
- Per trovare gli autovalori c'è uno strumento, il **polinomio caratteristico**: gli autovalori sono i numeri che lo fanno diventare zero.
- All'esame serve in ogni appello: riconoscere un autovettore, trovare gli autovalori di una matrice con 2 o 3 righe, scrivere le due matrici della diagonalizzazione.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Le direzioni che non girano: autovettori (p. 85)

Una matrice quadrata è una macchina: entra un vettore, ne esce un altro dello stesso tipo. In questa sezione guardiamo che cosa succede alla **direzione** dei vettori quando passano nella macchina.

In tutta la lezione le macchine sono **lineari**: rispettano le somme e i multipli (lezione L14). Per esempio, se in entrata metti il doppio di un vettore, in uscita trovi il doppio. Le macchine fatte con una matrice sono sempre lineari.

Prima due avvisi su come sono scritti i vettori.

- Nelle dispense i vettori sono scritti in colonna, con i numeri uno sotto l'altro. In queste pagine, dentro le frasi, li scriviamo in riga per risparmiare spazio: $(1, 2)$ è il vettore con 1 sopra e 2 sotto.
- Due vettori del piano hanno un nome fisso: $e_1 = (1, 0)$ ed $e_2 = (0, 1)$. Sono «un passo a destra» e «un passo in su». Insieme formano la **base canonica** del piano (lezione L07).

> [!RIPASSO] matrice per vettore
> Per far passare un vettore in una matrice si lavora **una riga alla volta**. Si moltiplica ogni numero della riga per il numero del vettore nello stesso posto, poi si sommano i risultati. È il conto della spesa della lezione L08: quantità per prezzi, poi si somma.
>
> Esempio: la matrice ha le righe $(3, 4)$ e $(0, 2)$, e il vettore è $(5, 1)$.
>
> $$\begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \cdot 5 + 4 \cdot 1 \\ 0 \cdot 5 + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} 19 \\ 2 \end{pmatrix}$$
>
> Prima riga: 3 per 5 fa 15, 4 per 1 fa 4, e la somma è 19. Seconda riga: 0 per 5 fa 0, 2 per 1 fa 2, e la somma è 2. Esce il vettore $(19, 2)$.
>
> Se la matrice si chiama $A$ e il vettore si chiama $v$, il risultato si scrive $Av$. Si legge «$A$ per $v$».

### Una macchina alla prova

Prendiamo la matrice del ripasso e chiamiamola $A$:

$$A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$$

Facciamo entrare quattro vettori e guardiamo che cosa esce.

| Entra | Conto | Esce | Esce un multiplo di quello che è entrato? |
|---|---|---|---|
| $(1, 0)$ | $(3 \cdot 1 + 4 \cdot 0,\ 0 \cdot 1 + 2 \cdot 0)$ | $(3, 0)$ | sì: è 3 volte $(1, 0)$ |
| $(0, 1)$ | $(3 \cdot 0 + 4 \cdot 1,\ 0 \cdot 0 + 2 \cdot 1)$ | $(4, 2)$ | no |
| $(-4, 1)$ | $(3 \cdot (-4) + 4 \cdot 1,\ 0 \cdot (-4) + 2 \cdot 1)$ | $(-8, 2)$ | sì: è 2 volte $(-4, 1)$ |
| $(1, 1)$ | $(3 \cdot 1 + 4 \cdot 1,\ 0 \cdot 1 + 2 \cdot 1)$ | $(7, 2)$ | no |

L'ultima colonna è quella che conta. Per riempirla serve ricordare che cos'è un multiplo.

> [!RIPASSO] multiplo di un vettore
> Un **multiplo** di un vettore si ottiene moltiplicando **tutti** i suoi numeri per lo stesso numero. Per esempio 2 volte $(-4, 1)$ è $(-8, 2)$.
>
> Sulla mappa a quadretti i multipli di un vettore stanno tutti sulla **stessa retta** che passa per l'origine. Un multiplo positivo punta dalla stessa parte del vettore. Un multiplo negativo punta dalla parte opposta.
>
> Per controllare se un vettore è multiplo di un altro, cerca il numero giusto guardando il primo posto. Poi controlla se lo stesso numero funziona anche negli altri posti.
>
> - $(7, 2)$ è un multiplo di $(1, 1)$? Nel primo posto servirebbe «per 7», nel secondo «per 2». I due numeri sono diversi, quindi no.
> - $(4, 2)$ è un multiplo di $(0, 1)$? Un multiplo di $(0, 1)$ ha sempre 0 nel primo posto. Qui c'è 4, quindi no.

Guarda la tabella: si notano due cose.

**Quasi tutti i vettori escono girati.** Entra $(1, 1)$ ed esce $(7, 2)$, che punta in un'altra direzione. Lo stesso succede a $(0, 1)$.

**Due vettori invece restano sulla loro retta.** Entra $(1, 0)$ ed esce il suo triplo. Entra $(-4, 1)$ ed esce il suo doppio. La macchina li ha allungati, ma non li ha girati.

> [!IDEA]
> Un **autovettore** è un vettore che la macchina non gira: esce un suo multiplo. Il numero che dice «quante volte» è l'**autovalore**.

Guarda la figura. Le frecce chiare sono i vettori che entrano, quelle scure i vettori che escono. Nella figura $u$ è il vettore $(-4, 1)$. La freccia di $e_1$ e quella che esce stanno sulla stessa retta tratteggiata. Lo stesso vale per le due frecce viola. La freccia ambra invece esce dalla sua retta: il vettore $e_2$ viene girato.

```grafico
titolo: $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$: $e_1$ e $(-4, 1)$ restano sulla loro retta, $e_2$ no
x: -9 5
y: -2 4
retta: 0 0 1 0 | accento | tratteggio | sottile
retta: 0 0 -4 1 | viola | tratteggio | sottile
vettore: 1 0 | accento | tenue | $e_1$ | s
vettore: 3 0 | accento | spesso | $Ae_1 = 3e_1$ | n
vettore: -4 1 | viola | tenue | $u$ | s
vettore: -8 2 | viola | spesso | $Au = 2u$ | n
vettore: 0 1 | ambra | tenue | $e_2$ | e
vettore: 4 2 | ambra | spesso | $Ae_2$ | e
```

### I nomi e i simboli

Servono quattro parole nuove.

- **Autovettore** e **autovalore**. Il pezzo «auto» traduce il tedesco *eigen*, che vuol dire «proprio»: sono i vettori «propri» della macchina, e i suoi numeri «propri».
- **Scalare**. È un numero normale, come 3 o $-2$. Si chiama così per distinguerlo dai vettori.
- **Endomorfismo**. È una macchina lineare in cui i vettori che escono sono dello stesso tipo di quelli che entrano: entra un vettore del piano, esce un vettore del piano (lezione L16). Deve essere così, altrimenti non avrebbe senso chiedersi se quello che esce è un multiplo di quello che è entrato.

L'autovalore si indica con la lettera greca $\lambda$, che si legge «lambda». È un numero.

La frase «esce un multiplo di quello che è entrato» si scrive così:

$$Av = \lambda v$$

Si legge «$A$ per $v$ è uguale a lambda per $v$». A sinistra c'è quello che esce dalla macchina quando entra $v$. A destra c'è $v$ moltiplicato per il numero $\lambda$.

Con la matrice di prima e il vettore $(1, 0)$ la riga dice: esce 3 volte $(1, 0)$. Qui $\lambda$ vale 3.

Le dispense usano altri tre simboli.

- $T : V \to V$ è la macchina. Si chiama $T$, prende i vettori da uno **spazio vettoriale** $V$ e li restituisce nello stesso spazio. Uno spazio vettoriale è un insieme di vettori in cui si può sommare e moltiplicare per un numero senza uscire (lezione L05): per esempio il piano. La freccia si legge «da $V$ a $V$». La scrittura $T(v)$ si legge «$T$ di $v$»: è il vettore che esce quando entra $v$.
- $L_A$ è la macchina «moltiplica per la matrice $A$» (lezione L14). Quindi $L_A(v)$ e $Av$ sono la stessa cosa.
- $\K$ è un modo breve per dire «i numeri reali oppure i numeri complessi». In questa lezione i numeri sono quasi sempre reali.

Ecco l'esempio delle dispense. La matrice e i vettori sono quelli della tabella di prima, dove trovi tutti i conti. Nel titolo, $2 \times 2$ si legge «due per due»: vuol dire una matrice con 2 righe e 2 colonne.

> [!ESEMPIO] 17.2 · Due autovettori di una matrice $2 \times 2$
> Prendiamo la macchina $L_A$ che lavora sui vettori del piano, con
> $$A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}.$$
>
> - Da $e_1$ esce $(3, 0)$, cioè 3 volte $e_1$. Quindi $e_1$ è un autovettore di $L_A$ con autovalore 3.
> - Da $e_2$ esce $(4, 2)$. Un multiplo di $e_2$ ha 0 nel primo posto, e qui c'è 4. Quindi $(4, 2)$ non è un multiplo di $e_2$, qualunque numero si provi: $e_2$ non è un autovettore.
> - Da $(-4, 1)$ esce il suo doppio:
>   $$L_A\begin{pmatrix} -4 \\ 1 \end{pmatrix} = \begin{pmatrix} -8 \\ 2 \end{pmatrix} = 2\begin{pmatrix} -4 \\ 1 \end{pmatrix}$$
>   Quindi $(-4, 1)$ è un autovettore con autovalore 2.

Le dispense scrivono la definizione così.

> [!DEF] 17.1 · Autovettore e autovalore
> Sia $T : V \to V$ un endomorfismo di uno spazio vettoriale $V$ definito su un campo $\K$. Un **autovettore** di $T$ è un vettore $v \neq 0$ in $V$ per cui
> $$T(v) = \lambda v$$
> per qualche scalare $\lambda \in \K$, che chiameremo **autovalore** di $T$ relativo a $v$.
>
> Notiamo che $\lambda$ può essere qualsiasi scalare, anche zero. D'altro canto, l'autovettore $v$ non può essere zero per definizione. In parole: un autovettore è un vettore (diverso da zero) che viene mandato da $T$ in un multiplo di se stesso.

**Come si legge.**

- «Un endomorfismo di uno spazio vettoriale $V$ definito su un campo $\K$»: la macchina $T$ lavora dentro un solo spazio, e i numeri che si usano sono reali oppure complessi.
- $v \neq 0$ si legge «$v$ diverso da zero». Qui lo zero è il **vettore nullo**, quello fatto di soli zeri, come $(0, 0)$.
- $T(v) = \lambda v$: dalla macchina esce $v$ moltiplicato per il numero $\lambda$.
- $\lambda \in \K$ si legge «lambda appartiene a $\K$»: vuol dire che $\lambda$ è un numero, reale o complesso. «Per qualche scalare» vuol dire che basta trovarne uno.
- «Relativo a $v$»: ogni autovettore ha il suo autovalore.

Tutta insieme: un autovettore è un vettore non nullo che la macchina manda in un suo multiplo. L'autovalore è il numero per cui viene moltiplicato.

### Due zeri da non confondere

**Il vettore nullo non è mai un autovettore.** Il motivo è questo. Da una macchina lineare, se entra il vettore nullo esce il vettore nullo. E il vettore nullo è multiplo di sé stesso con qualunque numero: 3 volte zero fa zero, 7 volte zero fa zero. Se lo accettassimo come autovettore, ogni numero sarebbe un autovalore, e la parola non vorrebbe più dire niente.

**L'autovalore invece può essere zero.** Vuol dire che entra un vettore non nullo ed esce il vettore nullo: la macchina lo schiaccia su zero. I vettori che la macchina schiaccia su zero formano il **nucleo** (lezione L14). Quindi gli autovettori con autovalore 0 sono i vettori non nulli del nucleo.

> [!TRAPPOLA] Zero sì, zero no
> Nella definizione ci sono due zeri diversi. L'autovettore **non** può essere il vettore nullo. L'autovalore **può** essere il numero zero. All'esame una frase come «zero non è mai un autovalore» è sbagliata.

**Un autovettore ha un solo autovalore.** Se da un vettore esce il suo triplo, non può uscire anche il suo doppio. Il triplo e il doppio di un vettore non nullo sono due vettori diversi.

> [!OLTRE] autovalore 0 e autovalore 1
> Il libro di Martelli (Osservazioni 5.1.5 e 5.1.6) mette in evidenza due autovalori speciali.
>
> - Autovalore 0: il vettore viene schiacciato su zero. Sta nel nucleo.
> - Autovalore 1: il vettore esce uguale a com'è entrato. Si chiama **punto fisso**.
>
> Un esempio con tutti e due. La macchina «ombra sull'asse orizzontale» tiene il primo numero e mette 0 al posto del secondo:
> $$T(x, y) = (x, 0)$$
> Il vettore $(3, 0)$ esce uguale: è un autovettore con autovalore 1. Il vettore $(0, 2)$ esce nullo, cioè 0 volte sé stesso: è un autovettore con autovalore 0.

### Cercare gli autovettori con lo strumento

Nello strumento qui sotto trascina il vettore $x$. In ambra vedi il vettore $Ax$ che esce dalla macchina. Quando $Ax$ cade sulla stessa retta di $x$ hai trovato un autovettore, e lo strumento lo segnala. Le due rette tratteggiate sono le direzioni degli autovettori.

Due cose da provare.

1. Porta $x$ su $(1, 0)$ e poi su $(-4, 1)$: sono i due autovettori dell'Esempio 17.2.
2. Scegli dai pulsanti la matrice di rotazione di 90°: le rette tratteggiate spariscono. Il perché è nella sezione sulle rotazioni.

```widget matrice
titolo: Cerca gli autovettori di $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$
a: 3 4; 0 2
x: -2 1
raggio: 5
```

::: prova Con la matrice $A$ dell'Esempio 17.2: il vettore $(2, 0)$ è un autovettore? Con quale autovalore?
Lo faccio passare nella macchina: $A(2, 0) = (3 \cdot 2 + 4 \cdot 0,\ 0 \cdot 2 + 2 \cdot 0) = (6, 0)$.

$(6, 0)$ è 3 volte $(2, 0)$. Quindi sì: è un autovettore con autovalore 3.
:::

::: prova La matrice $B$ ha le righe $(2, 0)$ e $(0, 5)$. Il vettore $(0, 1)$ è un autovettore di $B$? E il vettore $(1, 1)$?
$B(0, 1) = (2 \cdot 0 + 0 \cdot 1,\ 0 \cdot 0 + 5 \cdot 1) = (0, 5)$. È 5 volte $(0, 1)$: autovettore con autovalore 5.

$B(1, 1) = (2 \cdot 1 + 0 \cdot 1,\ 0 \cdot 1 + 5 \cdot 1) = (2, 5)$. Nel primo posto servirebbe «per 2», nel secondo «per 5». Non è un multiplo di $(1, 1)$, quindi non è un autovettore.
:::

::: prova Il vettore $(0, 0)$ può essere un autovettore?
No, mai: la definizione chiede un vettore diverso da zero.
:::

> [!RICORDA]
> - Un **autovettore** è un vettore non nullo che la macchina manda in un suo multiplo: $Av = \lambda v$.
> - Il numero $\lambda$ è l'**autovalore**. Può essere zero; l'autovettore no.
> - Per controllare se un vettore è un autovettore basta un prodotto: calcola $Av$ e guarda se è un multiplo di $v$.

## Con le coordinate bastano le matrici (p. 85)

Non tutte le macchine lavorano su liste di numeri: alcune lavorano su polinomi, altre su matrici. Questa sezione mostra che non è un problema. Con le coordinate ogni macchina diventa una matrice, e gli autovettori si cercano lì.

### Una macchina che lavora sui polinomi

Prendiamo i polinomi di grado al massimo 1. Sono fatti così: un numero, più un numero per $x$. Per esempio $2 + 5x$. Le dispense chiamano $\R_1[x]$ l'insieme di questi polinomi (lezione L05).

La macchina si chiama $T$ e **scambia i due numeri** del polinomio:

$$T(a + bx) = b + ax$$

Per esempio da $2 + 5x$ esce $5 + 2x$.

Anche qui ha senso cercare gli autovettori: i polinomi da cui esce un loro multiplo.

| Entra | Esce | Esce un multiplo di quello che è entrato? |
|---|---|---|
| $2 + 5x$ | $5 + 2x$ | no |
| $1 + x$ | $1 + x$ | sì: è 1 volta $1 + x$ |
| $1 - x$ | $-1 + x$ | sì: è $-1$ volte $1 - x$ |

Guarda l'ultima riga. I due numeri del polinomio sono 1 e $-1$. Scambiati diventano $-1$ e 1. Il polinomio che esce è quello di partenza con tutti i segni cambiati.

Quindi $1 + x$ è un autovettore con autovalore 1, e $1 - x$ è un autovettore con autovalore $-1$. Qui la parola «vettore» indica un polinomio. L'immagine della freccia sulla mappa non funziona più, ma la regola «esce un multiplo» sì.

### Lo stesso conto con le coordinate

Ricorda dalla lezione L15: un polinomio come $a + bx$ si può scrivere come la lista dei suoi due numeri, $(a, b)$. Sono le sue **coordinate** rispetto alla base fatta dai polinomi $1$ e $x$. Per esempio $2 + 5x$ diventa $(2, 5)$.

Con le coordinate la macchina diventa una matrice. Ricorda come si costruisce: nelle colonne si scrive dove vanno i vettori della base.

1. Il primo vettore della base è il polinomio $1$, cioè $1 + 0x$. Scambiando i numeri esce $0 + 1x$. Le sue coordinate sono $(0, 1)$: è la prima colonna.
2. Il secondo vettore della base è il polinomio $x$, cioè $0 + 1x$. Scambiando i numeri esce $1 + 0x$. Le sue coordinate sono $(1, 0)$: è la seconda colonna.

La matrice è

$$A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

Ora il conto sui polinomi diventa un conto «matrice per vettore».

> [!ESEMPIO] · autovettori tra i polinomi
> La macchina è $T(a + bx) = b + ax$, e la sua matrice nella base fatta da $1$ e $x$ è quella appena trovata.
>
> **Il polinomio $1 + x$** ha coordinate $(1, 1)$.
> $$\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \cdot 1 + 1 \cdot 1 \\ 1 \cdot 1 + 0 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$$
> Esce lo stesso vettore: è un autovettore con autovalore 1. Tradotto in polinomi: $T(1 + x) = 1 + x$.
>
> **Il polinomio $1 - x$** ha coordinate $(1, -1)$.
> $$\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 0 \cdot 1 + 1 \cdot (-1) \\ 1 \cdot 1 + 0 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \end{pmatrix} = -1 \cdot \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$
> Esce il vettore con i segni cambiati: è un autovettore con autovalore $-1$. Tradotto in polinomi: $T(1 - x) = -1 + x = -(1 - x)$.
>
> Il metodo è sempre questo: si lavora sulla matrice, poi si traducono le coordinate in polinomi.

### Come lo scrivono le dispense

Le dispense riassumono tutto in un'osservazione. Per leggerla servono due scritture della lezione L15.

- $[v]_{\mathcal B}$ si legge «le coordinate di $v$ nella base $\mathcal B$». È la lista di numeri che descrive il vettore. La lettera $\mathcal B$ è una B scritta in corsivo: è il nome della base.
- $[T]^{\mathcal B}_{\mathcal B}$ si legge «la matrice di $T$ nella base $\mathcal B$». È la tabella che descrive la macchina quando i vettori che entrano e quelli che escono sono scritti con le coordinate di quella base.

> [!OSSERVAZIONE] Autovettori in coordinate
> Prendiamo un endomorfismo $T : V \to V$ e una base $\mathcal B$ di $V$. Chiamiamo $A$ la matrice di $T$ in quella base, cioè $A = [T]^{\mathcal B}_{\mathcal B}$. Chiamiamo $x$ la lista delle coordinate di un vettore $v$, cioè $x = [v]_{\mathcal B}$. Allora le due uguaglianze qui sotto sono vere insieme oppure false insieme:
> $$T(v) = \lambda v \qquad\qquad Ax = \lambda x$$
> Quella di sinistra parla di vettori qualsiasi. Quella di destra parla solo di liste di numeri. Per questo, dicono le dispense, basta capire bene il caso in cui la macchina è del tipo $L_A$.

Il motivo, in due frasi. Le coordinate di quello che esce si calcolano moltiplicando la matrice per le coordinate di quello che entra: è la Proposizione 15.9 della lezione L15. E due vettori sono uguali esattamente quando hanno le stesse coordinate.

Da qui in poi parleremo di **autovalori e autovettori di una matrice**. Vuol dire: quelli della macchina «moltiplica per quella matrice».

::: prova Per la macchina $T(a + bx) = b + ax$: il polinomio $3 + 3x$ è un autovettore? E il polinomio $2 - 2x$?
Da $3 + 3x$ esce $3 + 3x$: i due numeri sono uguali, e scambiarli non cambia niente. È un autovettore con autovalore 1.

Da $2 - 2x$ esce $-2 + 2x$, cioè $-1$ volte $2 - 2x$. È un autovettore con autovalore $-1$.
:::

::: prova Quali sono le coordinate del polinomio $4 - 3x$ nella base fatta da $1$ e $x$? Che cosa esce dalla macchina $T$? È un autovettore?
Le coordinate sono $(4, -3)$. La macchina scambia i due numeri: esce $(-3, 4)$, cioè il polinomio $-3 + 4x$.

Non è un multiplo di $4 - 3x$. Per passare da 4 a $-3$ nel primo posto servirebbe «per $-\frac 34$». Per passare da $-3$ a 4 nel secondo servirebbe «per $-\frac 43$». Quindi $4 - 3x$ non è un autovettore.
:::

> [!RICORDA]
> - Con le coordinate ogni endomorfismo diventa una matrice quadrata.
> - Gli autovettori della macchina corrispondono agli autovettori della matrice, e gli autovalori sono gli stessi.
> - Per questo si lavora sempre sulle matrici. Alla fine si traducono le coordinate nei vettori di partenza.

## Le rotazioni girano tutto: nessun autovettore (p. 85)

Esistono macchine che non hanno nessun autovettore. L'esempio più chiaro è una **rotazione**: la macchina che fa girare tutto il piano intorno all'origine, di un angolo fisso.

> [!RIPASSO] gli angoli in radianti
> Nel corso gli angoli si misurano in **radianti** (lezione L03). Il giro intero vale $2\pi$.
>
> | Angolo | In gradi | In radianti |
> |---|---|---|
> | nessuna rotazione | 0° | $0$ |
> | un quarto di giro | 90° | $\frac{\pi}{2}$ |
> | mezzo giro | 180° | $\pi$ |
>
> La lettera greca $\vartheta$, che si legge «theta», indica un angolo.

### Un quarto di giro, con i numeri

Prendiamo la rotazione di un quarto di giro in senso antiorario, cioè nel verso opposto a quello delle lancette dell'orologio. Sulla mappa a quadretti la regola è questa: il vettore $(x, y)$ va in $(-y, x)$.

| Entra | Esce | Esce un multiplo di quello che è entrato? |
|---|---|---|
| $(1, 0)$ | $(0, 1)$ | no: da «a destra» diventa «in su» |
| $(0, 1)$ | $(-1, 0)$ | no: da «in su» diventa «a sinistra» |
| $(2, 1)$ | $(-1, 2)$ | no |

Nessuno dei tre esce sulla sua retta. E non è un caso.

### Perché non può esserci nessun autovettore

I multipli di un vettore stanno tutti sulla sua retta. Un multiplo positivo punta dalla stessa parte del vettore: tra i due c'è un angolo di 0. Un multiplo negativo punta dalla parte opposta: tra i due c'è un angolo di mezzo giro. Non ci sono altri casi.

Una rotazione sposta **ogni** vettore non nullo dello stesso angolo. Se l'angolo non è 0 e non è mezzo giro, il vettore esce dalla sua retta. Quindi quello che esce non è mai un multiplo di quello che è entrato.

> [!ESEMPIO] 17.3 · Una rotazione
> Prendiamo la macchina $L_A$ sui vettori del piano, dove $A = \mathrm{Rot}_\vartheta$ è la matrice di una rotazione di angolo $\vartheta \neq 0, \pi$. Questa scrittura vuol dire: l'angolo non è 0 e non è $\pi$.
>
> Ogni vettore $v$ del piano diverso da zero viene ruotato di un angolo che non è 0 e non è $\pi$. Quindi il vettore che esce, $L_A(v)$, non sta sulla retta di $v$: non può essere un multiplo di $v$.
>
> Conclusione: l'endomorfismo $L_A$ non ha autovettori.

Guarda la figura: il vettore $v$ viene ruotato di 60°. La retta tratteggiata è la retta di $v$, dove stanno tutti i suoi multipli. Il vettore ruotato, in ambra, è fuori da quella retta.

```grafico
titolo: Ruotando di $60°$, $v$ esce dalla sua retta: nessun multiplo di $v$ è uguale a $\mathrm{Rot}_{60°}\,v$
x: -3 3
y: -1.5 3
retta: 0 0 2 1 | accento | tratteggio | sottile
vettore: 2 1 | accento | spesso | $v$ | e
vettore: 0.134 2.232 | ambra | spesso | $\mathrm{Rot}_{60°}\,v$ | n
arco: 0 0 0.9 0.4636 1.5108 | grigio
testo: 0.85 0.95 | $60°$
```

### I due angoli speciali

Restano i due casi esclusi.

- **Angolo 0.** Non si muove niente: ogni vettore esce uguale a com'è entrato. Ogni vettore non nullo è un autovettore con autovalore 1.
- **Angolo $\pi$, cioè mezzo giro.** Ogni vettore esce ribaltato: diventa il suo opposto. Ogni vettore non nullo è un autovettore con autovalore $-1$.

> [!OLTRE] la matrice di rotazione
> La matrice della rotazione antioraria di angolo $\vartheta$ si studia nella lezione L22. È questa:
> $$\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$$
> Per il quarto di giro il coseno vale 0 e il seno vale 1. La matrice diventa
> $$\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$
> e manda $(x, y)$ in $(-y, x)$, come nella tabella. Che questa matrice non abbia autovalori reali si può controllare anche con un conto: lo trovi nell'ultima sezione, dopo il polinomio caratteristico.

Tutto questo vale con i numeri reali. Con i numeri complessi le rotazioni hanno autovalori: lo vedi nell'ultima sezione e nell'esercizio 10.

::: prova La rotazione di mezzo giro manda ogni vettore nel suo opposto. Che cosa esce se entra $(2, 3)$? È un autovettore? Con quale autovalore?
Esce $(-2, -3)$, cioè $-1$ volte $(2, 3)$. Quindi è un autovettore, con autovalore $-1$.
:::

::: prova La rotazione di un quarto di giro manda $(x, y)$ in $(-y, x)$. Che cosa esce se entra $(3, 1)$? È un multiplo di $(3, 1)$?
Esce $(-1, 3)$. Per passare da 3 a $-1$ nel primo posto servirebbe «per $-\frac 13$». Per passare da 1 a 3 nel secondo posto servirebbe «per 3». I due numeri sono diversi: non è un multiplo.
:::

> [!RICORDA]
> - Una rotazione di angolo diverso da 0 e da $\pi$ gira tutti i vettori: **non ha autovettori reali**.
> - Con angolo 0 ogni vettore non nullo è un autovettore con autovalore 1. Con angolo $\pi$ ogni vettore non nullo è un autovettore con autovalore $-1$.

## Tutta una retta di autovettori: i multipli (p. 86)

Gli autovettori non arrivano mai da soli: insieme a un autovettore trovi sempre tutta la sua retta. Lo vediamo su una matrice con tre righe e tre colonne.

### Un esempio con tre numeri

Un vettore con tre numeri, come $(0, 1, 1)$, è uno spostamento nello spazio: avanti, di lato, in alto. Il prodotto «matrice per vettore» funziona come prima, una riga alla volta. Solo che ogni riga ha tre numeri.

I tre vettori «un passo lungo un asse» hanno un nome fisso anche qui: $e_1 = (1, 0, 0)$, poi $e_2 = (0, 1, 0)$, poi $e_3 = (0, 0, 1)$.

> [!ESEMPIO] 17.4 · Un autovettore di una matrice $3 \times 3$
> Prendiamo la macchina $L_A$ che lavora sui vettori dello spazio, con
> $$A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 1 & 1 \\ 3 & 0 & 2 \end{pmatrix}.$$
>
> **Il vettore $e_1 = (1, 0, 0)$.**
> $$A e_1 = \begin{pmatrix} 1 \cdot 1 + 1 \cdot 0 + (-1) \cdot 0 \\ 2 \cdot 1 + 1 \cdot 0 + 1 \cdot 0 \\ 3 \cdot 1 + 0 \cdot 0 + 2 \cdot 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$$
> Esce la prima colonna di $A$. Un multiplo di $e_1$ ha 0 nel secondo e nel terzo posto, e qui ci sono 2 e 3. Quindi $e_1$ non è un autovettore.
>
> **Il vettore $v = (0, 1, 1)$.**
> $$A v = \begin{pmatrix} 1 \cdot 0 + 1 \cdot 1 + (-1) \cdot 1 \\ 2 \cdot 0 + 1 \cdot 1 + 1 \cdot 1 \\ 3 \cdot 0 + 0 \cdot 1 + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 2 \\ 2 \end{pmatrix} = 2\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$$
> Esce 2 volte $v$. Quindi $v$ è un autovettore con autovalore 2.
>
> **Il vettore $w = (0, 3, 3)$.** Rifacciamo il conto anche per lui.
> $$A w = \begin{pmatrix} 1 \cdot 0 + 1 \cdot 3 + (-1) \cdot 3 \\ 2 \cdot 0 + 1 \cdot 3 + 1 \cdot 3 \\ 3 \cdot 0 + 0 \cdot 3 + 2 \cdot 3 \end{pmatrix} = \begin{pmatrix} 0 \\ 6 \\ 6 \end{pmatrix} = 2\begin{pmatrix} 0 \\ 3 \\ 3 \end{pmatrix}$$
> Esce 2 volte $w$. Anche $w$ è un autovettore con autovalore 2.
>
> Notiamo che $w$ è il triplo di $v$, cioè $w = 3v$.

### Perché succede con ogni multiplo

Nell'esempio $w$ è il triplo di $v$, ed è un autovettore con lo stesso autovalore. Non è una coincidenza.

Una macchina lineare rispetta i multipli (lezione L14): se in entrata metti il triplo, in uscita trovi il triplo. Dal vettore $v$ esce il suo doppio. Allora dal triplo di $v$ esce il triplo di quel doppio, cioè 6 volte $v$. E 6 volte $v$ è proprio il doppio del triplo di $v$.

Il ragionamento funziona con qualunque numero al posto di 3, tranne lo zero. Con lo zero otterresti il vettore nullo, che non è un autovettore.

> [!IDEA]
> Se un vettore è un autovettore, lo sono anche tutti i suoi multipli non nulli, con lo stesso autovalore. Gli autovettori si trovano a rette intere.

Le dispense lo scrivono con una catena di uguaglianze. Usano due simboli in più.

- $\mu$ è la lettera greca **mi**. Come $\lambda$, indica un numero. Qui è il numero per cui si moltiplica il vettore: nell'esempio vale 3.
- $\Span(v)$ si legge «span di $v$». È l'insieme di tutti i multipli di $v$, cioè la retta di $v$ (lezione L06).

> [!OSSERVAZIONE] I multipli di un autovettore
> Prendiamo un endomorfismo $f : V \to V$ e un suo autovettore $v$, con autovalore $\lambda$. Allora ogni multiplo $w = \mu v$ con $\mu \neq 0$ è anche lui un autovettore, con lo stesso autovalore $\lambda$. Il conto è
> $$f(\mu v) = \mu f(v) = \mu \lambda v = \lambda (\mu v).$$
> In altre parole: tutti i vettori non nulli della retta $\Span(v)$ sono autovettori con lo stesso autovalore.

La catena ha tre passaggi.

1. Il primo uguale usa il fatto che la macchina rispetta i multipli: il numero $\mu$ esce fuori.
2. Il secondo uguale usa che $v$ è un autovettore: al posto di $f(v)$ si scrive $\lambda v$.
3. Il terzo uguale cambia solo l'ordine dei due numeri che si moltiplicano.

All'inizio della catena c'è quello che esce quando entra il multiplo $\mu v$. Alla fine c'è lo stesso multiplo, moltiplicato per $\lambda$. Quindi anche lui è un autovettore con autovalore $\lambda$.

### Che cosa cambia negli esercizi

Quando un esercizio chiede «un autovettore», la risposta **non è unica**: va bene qualunque multiplo non nullo. Conviene scegliere quello con i numeri più comodi. Per esempio al posto di $\left(\frac 12, 1\right)$ si prende il suo doppio, $(1, 2)$.

Per lo stesso motivo, nel quiz la risposta giusta può essere un multiplo del vettore che hai trovato tu.

> [!TRAPPOLA] La somma di due autovettori non è sempre un autovettore
> I multipli restano autovettori. Le somme, in generale, no.
>
> Torna alla matrice $A$ dell'Esempio 17.2. I vettori $(1, 0)$ e $(-4, 1)$ sono autovettori, con autovalori 3 e 2. La loro somma è $(-3, 1)$. Facciamola passare nella macchina:
> $$A\begin{pmatrix} -3 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \cdot (-3) + 4 \cdot 1 \\ 0 \cdot (-3) + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} -5 \\ 2 \end{pmatrix}$$
> Nel secondo posto si passa da 1 a 2: servirebbe «per 2». Ma 2 volte $-3$ fa $-6$, non $-5$. Quindi quello che esce non è un multiplo di $(-3, 1)$.
>
> Il motivo: i due pezzi vengono allungati in modo diverso, uno di 3 e l'altro di 2, e la somma cambia direzione. Se invece due autovettori hanno lo **stesso** autovalore, la loro somma (quando non è nulla) è ancora un autovettore con quell'autovalore. Da questa idea nasce l'autospazio della lezione L18.

::: prova Dall'Esempio 17.4 sai che $(0, 1, 1)$ è un autovettore con autovalore 2. Senza fare conti: $(0, -2, -2)$ è un autovettore? Con quale autovalore?
Sì. $(0, -2, -2)$ è $-2$ volte $(0, 1, 1)$, quindi è un multiplo non nullo di un autovettore. L'autovalore resta 2: non diventa $-4$.
:::

::: prova Hai trovato l'autovettore $\left(\frac 13, \frac 23\right)$. Quale multiplo con numeri interi puoi usare al suo posto?
Moltiplica per 3: viene $(1, 2)$. È un autovettore con lo stesso autovalore.
:::

> [!RICORDA]
> - I multipli non nulli di un autovettore sono autovettori con lo **stesso** autovalore.
> - Per questo l'autovettore di un autovalore non è uno solo: si sceglie quello con i numeri più comodi.
> - La somma di autovettori con autovalori diversi in genere non è un autovettore.

## Una base di autovettori: diagonalizzare (pp. 86–87)

Adesso arriva il motivo per cui si cercano gli autovettori: servono a descrivere la macchina con la tabella più corta possibile.

### La stessa macchina, vista dagli autovettori

Ricorda due cose delle lezioni precedenti.

- Una **base** è un gruppo di vettori con cui si costruiscono tutti gli altri, senza doppioni (lezione L07). Nel piano servono due vettori che non stanno sulla stessa retta.
- La **matrice di una macchina in una base** si costruisce una colonna alla volta (lezione L15). Nella colonna 1 si scrive dove va il primo vettore della base, nella colonna 2 dove va il secondo. Tutto va scritto come ricetta: «tanti del primo vettore, tanti del secondo».

Prendiamo la macchina dell'Esempio 17.2 e i suoi due autovettori. Diamo loro un nome:

$$v_1 = (1, 0) \qquad\qquad v_2 = (-4, 1)$$

Non stanno sulla stessa retta, quindi formano una base del piano. Costruiamo la matrice della macchina in questa base.

1. **Colonna 1: dove va $v_1$.** Dalla macchina esce 3 volte $v_1$. Come ricetta: 3 del primo vettore, 0 del secondo. La colonna è $(3, 0)$.
2. **Colonna 2: dove va $v_2$.** Dalla macchina esce 2 volte $v_2$. Come ricetta: 0 del primo vettore, 2 del secondo. La colonna è $(0, 2)$.

La matrice della macchina nella base degli autovettori è

$$\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$$

Confrontala con la matrice $A$ di partenza. È la stessa macchina, ma adesso la tabella si legge a colpo d'occhio. Lungo il primo autovettore la macchina allunga di 3, lungo il secondo allunga di 2, e non fa nient'altro.

Una matrice così si chiama **diagonale**. Ha numeri solo sulla **diagonale principale**, quella che va dall'angolo in alto a sinistra all'angolo in basso a destra. In tutti gli altri posti c'è 0.

> [!IDEA]
> In una base fatta di autovettori la macchina allunga soltanto gli assi. La sua matrice è diagonale, e sulla diagonale ci sono gli autovalori.

Quando una base di autovettori esiste, la macchina si chiama **diagonalizzabile**. Le dispense lo scrivono così.

> [!DEF] 17.5 · Endomorfismo diagonalizzabile
> Un endomorfismo $T : V \to V$ è **diagonalizzabile** se $V$ ha una base $\mathcal B = \{v_1, \dots, v_n\}$ composta da autovettori per $T$.

**Come si legge.**

- $\mathcal B = \{v_1, \dots, v_n\}$ è una base, cioè un elenco di vettori. Il primo si chiama $v_1$, l'ultimo $v_n$, e $n$ è quanti sono. I puntini stanno per «e avanti così».
- «Composta da autovettori per $T$» vuol dire che **ogni** vettore dell'elenco è un autovettore della macchina. Gli autovalori possono cambiare da un vettore all'altro.

Nel piano servono due autovettori che non stanno sulla stessa retta. Nello spazio ne servono tre.

Il nome «diagonalizzabile» viene dal fatto seguente, che le dispense chiamano cruciale.

> [!PROP] 17.6
> Sia $\mathcal B = \{v_1, \dots, v_n\}$ una base qualsiasi di $V$. La matrice associata $A = [T]^{\mathcal B}_{\mathcal B}$ è diagonale se e solo se i vettori $v_1, \dots, v_n$ sono tutti autovettori per $T$.

**Come si legge.** «Se e solo se» vuol dire che le due cose succedono insieme. Se la base è fatta di autovettori, la matrice in quella base è diagonale: è il conto che abbiamo appena fatto. E al contrario: se la matrice in una base è diagonale, i vettori di quella base sono tutti autovettori.

Il secondo verso si vede leggendo una colonna. Se la colonna 1 è $(3, 0)$, la ricetta di quello che esce dal primo vettore è «3 del primo, 0 del secondo». Quindi dal primo vettore esce il suo triplo: è un autovettore.

> [!DIM] della Proposizione 17.6, con una base di $n$ vettori
> Si guarda una colonna alla volta. Chiamiamo $v_i$ il vettore numero $i$ della base.
>
> 1. $v_i$ è un autovettore quando $T(v_i) = \lambda_i v_i$ per qualche numero $\lambda_i$. Il numerino $i$ in basso dice che ogni vettore ha il suo autovalore.
> 2. Scritta come ricetta nella base, l'uguaglianza diventa $T(v_i) = 0 \cdot v_1 + \dots + \lambda_i v_i + \dots + 0 \cdot v_n$. Quindi le coordinate di $T(v_i)$ sono una colonna con $\lambda_i$ al posto $i$ e 0 negli altri posti. In simboli: $[T(v_i)]_{\mathcal B} = \lambda_i e_i$, dove $e_i$ è la colonna con 1 al posto $i$ e 0 altrove.
> 3. La colonna $i$ della matrice $A$ contiene proprio le coordinate di $T(v_i)$ (lezione L15).
> 4. Quindi tutti i vettori della base sono autovettori esattamente quando ogni colonna di $A$ ha un solo numero, quello sulla diagonale. Cioè quando $A$ è diagonale, con gli autovalori sulla diagonale principale:
>
> $$A = \begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}.$$

Le dispense riassumono così. Un endomorfismo è diagonalizzabile se e solo se esiste una base in cui la sua matrice è diagonale. Succede proprio quando la base è fatta di autovettori. E i numeri sulla diagonale sono i loro autovalori.

### La stessa idea per le matrici

Finora abbiamo parlato di macchine. Per le matrici c'è una definizione che dice la stessa cosa con un prodotto. Servono quattro richiami.

> [!RIPASSO] determinante, identità, inversa, matrici simili
> **Determinante** (lezione L09). È un numero che si calcola da una matrice quadrata. Se è zero, la matrice schiaccia tutto lo spazio su qualcosa di più piccolo. Con 2 righe la regola è «diagonale meno l'altra diagonale»: il prodotto dei due numeri sulla diagonale principale, meno il prodotto degli altri due.
> $$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = a \cdot d - b \cdot c$$
> Per la matrice con le righe $(1, 2)$ e $(3, 4)$ il conto è 1 per 4, meno 2 per 3. Viene $-2$.
>
> **Matrice identità.** È la matrice con 1 sulla diagonale e 0 altrove. Si scrive $I$, oppure $I_n$ se ha $n$ righe. Moltiplicare per l'identità non cambia niente, come moltiplicare un numero per 1.
>
> **Matrice inversa** (lezione L10). L'inversa di $M$ si scrive $M^{-1}$ e si legge «$M$ alla meno uno». È la matrice che disfa quello che fa $M$: il prodotto $M^{-1}M$ dà l'identità. Esiste solo se il determinante di $M$ non è zero. Una matrice che ha l'inversa si chiama **invertibile**.
>
> Per una matrice con 2 righe c'è una ricetta veloce: scambia i due numeri sulla diagonale, cambia segno agli altri due, dividi tutto per il determinante.
>
> **Matrici simili** (lezione L16). Due matrici sono simili quando descrivono la stessa macchina in due basi diverse. In formule: $B = M^{-1}AM$, dove $M$ è una matrice invertibile. La matrice $M$ è il traduttore tra le due basi: nelle sue colonne ci sono i vettori della base nuova.

Proviamo con la nostra matrice. Mettiamo i due autovettori **in colonna** in una matrice e chiamiamola $M$:

$$M = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix}$$

Poi calcoliamo $M^{-1}AM$ e guardiamo che cosa viene.

> [!ESEMPIO] · il prodotto $M^{-1}AM$, un passo alla volta
> **Passo 1: l'inversa di $M$.** Il determinante di $M$ è $1 \cdot 1 - (-4) \cdot 0 = 1$. Scambio i due numeri sulla diagonale: sono 1 e 1, quindi non cambia niente. Cambio segno agli altri due: $-4$ diventa 4, e 0 resta 0. Divido per il determinante, che è 1.
> $$M^{-1} = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}$$
>
> **Passo 2: il prodotto $AM$.** Ogni numero del risultato è una riga di $A$ per una colonna di $M$.
> $$AM = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 3 \cdot 1 + 4 \cdot 0 & 3 \cdot (-4) + 4 \cdot 1 \\ 0 \cdot 1 + 2 \cdot 0 & 0 \cdot (-4) + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} 3 & -8 \\ 0 & 2 \end{pmatrix}$$
>
> **Passo 3: si moltiplica a sinistra per $M^{-1}$.**
> $$M^{-1}(AM) = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3 & -8 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 1 \cdot 3 + 4 \cdot 0 & 1 \cdot (-8) + 4 \cdot 2 \\ 0 \cdot 3 + 1 \cdot 0 & 0 \cdot (-8) + 1 \cdot 2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$$
>
> Viene la matrice diagonale con gli autovalori 3 e 2: la stessa trovata prima con le ricette.

Questa matrice diagonale si indica di solito con la lettera $D$. Le dispense danno la definizione per le matrici così.

> [!DEF] 17.7 · Matrice diagonalizzabile
> Una matrice $A \in M(n, \K)$ è **diagonalizzabile** se è simile a una matrice diagonale $D$. Quindi $A$ è diagonalizzabile $\iff$ esiste una matrice invertibile $M$ tale che
> $$D = M^{-1}AM$$
> è diagonale.

**Come si legge.**

- $A \in M(n, \K)$ si legge «$A$ appartiene a $M$ di $n$, $\K$». Vuol dire: $A$ è una matrice quadrata con $n$ righe e $n$ colonne, fatta di numeri reali o complessi.
- La freccia doppia $\iff$ si legge «se e solo se».
- La formula al centro dice: c'è un traduttore $M$ per cui il prodotto $M^{-1}AM$ è una matrice diagonale. Quella matrice diagonale si chiama $D$.

A parole: una matrice è diagonalizzabile quando, cambiando base, la si può far diventare diagonale.

Le due definizioni, quella per le macchine e quella per le matrici, dicono la stessa cosa.

> [!PROP] 17.8
> Sia $\mathcal B$ una base di $V$. Un endomorfismo $T : V \to V$ è diagonalizzabile $\iff$ la matrice associata $A = [T]^{\mathcal B}_{\mathcal B}$ è diagonalizzabile.

**Come si legge.** Scegli una base qualsiasi e scrivi la matrice della macchina in quella base. La macchina è diagonalizzabile esattamente quando lo è la matrice. Quindi per decidere se una macchina è diagonalizzabile basta lavorare su una sua matrice, in qualunque base.

Il perché, a parole. Passare da una base a un'altra vuol dire passare da una matrice a una matrice simile (lezione L16). Se tra tutte le basi ce n'è una di autovettori, tra tutte le matrici simili ce n'è una diagonale. E vale anche il contrario.

> [!DIM] della Proposizione 17.8
> Serve una scrittura della lezione L16: $[\id]^{\mathcal C}_{\mathcal B}$ è la matrice di cambiamento di base, cioè il traduttore che trasforma le coordinate rispetto alla base $\mathcal C$ nelle coordinate rispetto alla base $\mathcal B$.
>
> **Primo verso: se $T$ è diagonalizzabile, anche $A$ lo è.**
>
> 1. Se $T$ è diagonalizzabile, esiste una base di autovettori. Chiamiamola $\mathcal C$. In quella base la matrice $D = [T]^{\mathcal C}_{\mathcal C}$ è diagonale (Proposizione 17.6).
> 2. Chiamiamo $M = [\id]^{\mathcal C}_{\mathcal B}$ la matrice di cambiamento di base da $\mathcal C$ a $\mathcal B$.
> 3. La formula della lezione L16 per cambiare la base di un endomorfismo dice che $[T]^{\mathcal C}_{\mathcal C} = M^{-1}[T]^{\mathcal B}_{\mathcal B}M$. Cioè $D = M^{-1}AM$: la matrice $A$ è diagonalizzabile.
>
> **Secondo verso: se $A$ è diagonalizzabile, anche $T$ lo è.**
>
> 1. Se $A$ è diagonalizzabile, c'è una matrice invertibile $M$ per cui $D = M^{-1}AM$ è diagonale.
> 2. Costruiamo una base $\mathcal C$ di $V$: i suoi vettori sono quelli che hanno come coordinate, rispetto a $\mathcal B$, le colonne di $M$. Sono una base perché $M$ è invertibile.
> 3. Per come è costruita la base, $M = [\id]^{\mathcal C}_{\mathcal B}$. Quindi $[T]^{\mathcal C}_{\mathcal C} = M^{-1}AM = D$ è diagonale.
> 4. Per la Proposizione 17.6 la base $\mathcal C$ è fatta di autovettori: $T$ è diagonalizzabile.

Ecco i due esempi delle dispense.

> [!ESEMPIO] 17.9 · $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ è diagonalizzabile
> La macchina $L_A$ dell'Esempio 17.2 è diagonalizzabile. Il motivo, in tre passi:
>
> 1. $v_1 = (1, 0)$ e $v_2 = (-4, 1)$ sono tutti e due autovettori;
> 2. sono **linearmente indipendenti**, cioè nessuno dei due è multiplo dell'altro (lezione L07);
> 3. quindi formano una base del piano.
>
> I loro autovalori sono 3 e 2. Prendendo la base $\mathcal B = \{v_1, v_2\}$ si ottiene
> $$[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}.$$

> [!ESEMPIO] 17.10 · Le rotazioni
> La rotazione di angolo $\vartheta$ dell'Esempio 17.3 **non** è diagonalizzabile quando l'angolo non è 0 e non è $\pi$. Non ha nessun autovettore, quindi non può avere una base di autovettori.
>
> Per $\vartheta = 0$ la rotazione lascia fermo ogni vettore: $f(v) = v$. Per $\vartheta = \pi$ manda ogni vettore nel suo opposto: $f(v) = -v$. In questi due casi ogni vettore non nullo è un autovettore. Quindi ogni base è una base di autovettori, e la rotazione è diagonalizzabile.

### Costruire le due matrici: il metodo

All'esame ti chiedono spesso di scrivere le due matrici $M$ e $D$. Una volta trovati gli autovettori non c'è nessun conto da fare: bisogna solo metterli al posto giusto.

> [!METODO] Da una base di autovettori alle matrici $M$ e $D$
> 1. Scrivi gli autovettori **in colonna** dentro $M$, nell'ordine che preferisci.
> 2. Scrivi gli autovalori sulla diagonale di $D$, **nello stesso ordine**: alla prima colonna di $M$ corrisponde il primo numero di $D$, e avanti così.
> 3. Controlla che $M$ sia invertibile: il suo determinante non deve essere zero. Vuol dire che gli autovettori scelti sono indipendenti.
> 4. Allora vale $D = M^{-1}AM$. Per il controllo usa la forma senza inversa: $AM = MD$.

**Perché il controllo funziona.** La forma senza inversa si ottiene moltiplicando a sinistra per $M$ i due lati della formula del passo 4. E si capisce guardando le colonne.

- La colonna 1 di $AM$ è la matrice $A$ per il primo autovettore.
- La colonna 1 di $MD$ è il primo autovettore moltiplicato per il suo autovalore.

Le due colonne sono uguali proprio perché il vettore è un autovettore. Lo stesso vale per le altre colonne.

> [!ESEMPIO] · il controllo $AM = MD$ sull'Esempio 17.9
> Il prodotto $AM$ è già stato calcolato sopra:
> $$AM = \begin{pmatrix} 3 & -8 \\ 0 & 2 \end{pmatrix}$$
> Calcoliamo $MD$:
> $$MD = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 1 \cdot 3 + (-4) \cdot 0 & 1 \cdot 0 + (-4) \cdot 2 \\ 0 \cdot 3 + 1 \cdot 0 & 0 \cdot 0 + 1 \cdot 2 \end{pmatrix} = \begin{pmatrix} 3 & -8 \\ 0 & 2 \end{pmatrix}$$
> Le due matrici sono uguali: $M$ e $D$ sono giuste.

> [!TRAPPOLA] L'ordine di $D$ deve seguire le colonne di $M$
> Se scambi le colonne di $M$, devi scambiare anche i numeri di $D$. Con gli autovettori nell'ordine opposto le matrici giuste sono
> $$M = \begin{pmatrix} -4 & 1 \\ 1 & 0 \end{pmatrix} \qquad\qquad D = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$$
> Seconda attenzione: le colonne di $M$ devono essere autovettori **indipendenti**. I vettori $(0, 1, 1)$ e $(0, 3, 3)$ dell'Esempio 17.4 sono due autovettori, ma uno è multiplo dell'altro. Non possono stare insieme in una base.

::: prova Una matrice $2 \times 2$ ha l'autovettore $(1, 1)$ con autovalore 5 e l'autovettore $(1, -2)$ con autovalore 2. Scrivi $M$ e $D$.
Autovettori in colonna, autovalori sulla diagonale nello stesso ordine:

$$M = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \qquad\qquad D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$$

Controllo che $M$ sia invertibile: il determinante è $1 \cdot (-2) - 1 \cdot 1 = -3$, diverso da zero.
:::

::: prova Nella risposta precedente scambia le due colonne di $M$. Come diventa $D$?
Adesso la prima colonna è $(1, -2)$, che ha autovalore 2. Quindi il 2 va al primo posto della diagonale.

$$M = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix} \qquad\qquad D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$$
:::

::: prova La matrice $\begin{pmatrix} 7 & 0 \\ 0 & -1 \end{pmatrix}$ è diagonale? E la matrice $\begin{pmatrix} 0 & 7 \\ -1 & 0 \end{pmatrix}$?
La prima sì: fuori dalla diagonale principale ci sono solo zeri. La seconda no: i numeri diversi da zero stanno sull'altra diagonale.
:::

> [!RICORDA]
> - Una macchina è **diagonalizzabile** quando esiste una base fatta di autovettori. In quella base la sua matrice è diagonale.
> - Per le matrici: $A$ è diagonalizzabile quando $D = M^{-1}AM$ è diagonale per qualche matrice invertibile $M$.
> - $M$ ha gli autovettori in colonna, $D$ ha gli autovalori sulla diagonale, **nello stesso ordine**.
> - Controllo veloce, senza inversa: $AM = MD$.

## Perché le matrici diagonali sono comode (p. 88)

Le dispense si chiedono perché preferiamo le matrici diagonali, e rispondono: perché sono molto più maneggevoli. Ci sono quattro conti che con una matrice qualsiasi sono lunghi. Con una matrice diagonale si fanno un numero alla volta.

In tutta la sezione usiamo la matrice diagonale dell'Esempio 17.9:

$$D = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$$

### Primo conto: matrice per vettore

Ogni numero del vettore viene moltiplicato per il numero della diagonale che sta nello stesso posto.

$$\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 5 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \cdot 5 + 0 \cdot (-1) \\ 0 \cdot 5 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 15 \\ -2 \end{pmatrix}$$

Gli zeri cancellano tutto il resto. Il primo numero del vettore è diventato 3 volte più grande, il secondo 2 volte.

### Secondo conto: il determinante

Il determinante di una matrice diagonale è il prodotto dei numeri sulla diagonale. Per la nostra matrice è 3 per 2, cioè 6.

Lo puoi controllare con la regola «diagonale meno l'altra diagonale» della lezione L09:

$$3 \cdot 2 - 0 \cdot 0 = 6$$

### Terzo conto: il prodotto di due matrici diagonali

Il prodotto di due matrici diagonali è ancora una matrice diagonale. Sulla diagonale ci sono i prodotti dei numeri che stanno nello stesso posto.

$$\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 5 & 0 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 3 \cdot 5 + 0 \cdot 0 & 3 \cdot 0 + 0 \cdot 4 \\ 0 \cdot 5 + 2 \cdot 0 & 0 \cdot 0 + 2 \cdot 4 \end{pmatrix} = \begin{pmatrix} 15 & 0 \\ 0 & 8 \end{pmatrix}$$

### Quarto conto: le potenze

> [!RIPASSO] potenza di una matrice
> La potenza di una matrice funziona come quella di un numero. Il quadrato $A^2$ è la matrice moltiplicata per sé stessa. Il cubo $A^3$ è il prodotto di tre copie della matrice. Il numerino in alto dice quante copie ci sono nel prodotto, e si chiama **esponente**.
>
> Pensando alla macchina: $A^3$ vuol dire far passare il vettore nella macchina tre volte di seguito.

Per una matrice diagonale basta usare più volte la regola del terzo conto. Il risultato: **per fare una potenza si eleva ogni numero della diagonale**.

$$\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}^3 = \begin{pmatrix} 3^3 & 0 \\ 0 & 2^3 \end{pmatrix} = \begin{pmatrix} 27 & 0 \\ 0 & 8 \end{pmatrix}$$

Anche la potenza numero 100 si scrive subito: sulla diagonale ci sono $3^{100}$ e $2^{100}$.

### Le stesse regole con le lettere

Le dispense scrivono i quattro conti per una matrice diagonale con $n$ righe. I numeri sulla diagonale si chiamano $\lambda_1, \lambda_2, \dots, \lambda_n$. Il numerino in basso dice in quale posto della diagonale sta il numero. I puntini dentro le matrici vogliono dire «e avanti così».

Matrice per vettore:

$$\begin{pmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} \lambda_1 x_1 \\ \lambda_2 x_2 \\ \vdots \\ \lambda_n x_n \end{pmatrix}$$

Determinante (la scrittura $\det A$ si legge «determinante di $A$»):

$$\det A = \lambda_1 \cdots \lambda_n$$

Prodotto di due matrici diagonali. Gli spazi vuoti sono zeri, e i numeri della seconda matrice si chiamano $\mu_1, \dots, \mu_n$:

$$\begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix}\begin{pmatrix} \mu_1 & & \\ & \ddots & \\ & & \mu_n \end{pmatrix} = \begin{pmatrix} \lambda_1\mu_1 & & \\ & \ddots & \\ & & \lambda_n\mu_n \end{pmatrix}$$

Potenze, con un esponente $k$ qualsiasi:

$$\begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix}^k = \begin{pmatrix} \lambda_1^k & & \\ & \ddots & \\ & & \lambda_n^k \end{pmatrix}$$

### Le potenze di una matrice diagonalizzabile

E se la matrice non è diagonale, ma è diagonalizzabile? Allora le potenze si calcolano passando per la matrice diagonale $D$. Il trucco sta in due passaggi.

**Primo passaggio: scrivere $A$ con $M$ e $D$.** Sappiamo che $D = M^{-1}AM$. Moltiplichiamo i due lati a sinistra per $M$ e a destra per $M^{-1}$. Dal lato di $D$ viene $MDM^{-1}$. Dall'altro lato compaiono due coppie fatte da $M$ e dalla sua inversa: danno l'identità e spariscono, e resta solo $A$. Quindi

$$A = MDM^{-1}$$

**Secondo passaggio: moltiplicare $A$ per sé stessa.** Guarda che cosa succede con l'esponente 2:

$$A^2 = (MDM^{-1})(MDM^{-1}) = MD\,(M^{-1}M)\,DM^{-1} = MD^2M^{-1}$$

In mezzo si incontrano $M^{-1}$ e $M$. Il loro prodotto è l'identità, che non cambia niente: la coppia sparisce. Restano due $D$ vicine, cioè $D^2$.

Con l'esponente 3 succede due volte:

$$A^3 = MD\,(M^{-1}M)\,D\,(M^{-1}M)\,DM^{-1} = MD^3M^{-1}$$

Ogni volta che aggiungi un pezzo, in mezzo sparisce una coppia. Quindi per ogni esponente $k$ vale

$$A^k = MD^kM^{-1}$$

> [!IDEA]
> Per calcolare una potenza di una matrice diagonalizzabile si passa nella base degli autovettori, lì si eleva la matrice diagonale, e si torna indietro. I prodotti di matrici da fare sono solo due, qualunque sia l'esponente.

> [!ESEMPIO] 17.11 · Il calcolo di $A^{100}$
> Prendiamo $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ e calcoliamo $A^{100}$. La matrice $A$ non è diagonale: fare il conto direttamente vorrebbe dire 99 prodotti di matrici.
>
> **Che cosa sappiamo.** Dall'Esempio 17.9, $A$ è diagonalizzabile: $M^{-1}AM = D$, con
> $$D = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix} \qquad M = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix} \qquad M^{-1} = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}$$
> Nelle colonne di $M$ ci sono gli autovettori $(1, 0)$ e $(-4, 1)$. Con i simboli della lezione L16: $M = [\id]^{\mathcal B}_{\mathcal C}$ e $M^{-1} = [\id]^{\mathcal C}_{\mathcal B}$, dove $\mathcal B$ è la base degli autovettori e $\mathcal C$ è la base canonica del piano.
>
> **Passo 1: la formula.**
> $$A^{100} = (MDM^{-1})^{100} = MD^{100}M^{-1}$$
>
> **Passo 2: la potenza di $D$.** Si eleva ogni numero della diagonale.
> $$D^{100} = \begin{pmatrix} 3^{100} & 0 \\ 0 & 2^{100} \end{pmatrix}$$
>
> **Passo 3: il prodotto $D^{100}M^{-1}$.**
> $$\begin{pmatrix} 3^{100} & 0 \\ 0 & 2^{100} \end{pmatrix}\begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 3^{100} \cdot 1 + 0 \cdot 0 & 3^{100} \cdot 4 + 0 \cdot 1 \\ 0 \cdot 1 + 2^{100} \cdot 0 & 0 \cdot 4 + 2^{100} \cdot 1 \end{pmatrix} = \begin{pmatrix} 3^{100} & 4 \cdot 3^{100} \\ 0 & 2^{100} \end{pmatrix}$$
>
> **Passo 4: si moltiplica a sinistra per $M$.** Scrivo i quattro numeri del risultato uno per riga.
>
> - In alto a sinistra: $1 \cdot 3^{100} + (-4) \cdot 0 = 3^{100}$.
> - In alto a destra: $1 \cdot 4 \cdot 3^{100} + (-4) \cdot 2^{100} = 4 \cdot 3^{100} - 4 \cdot 2^{100}$.
> - In basso a sinistra: $0 \cdot 3^{100} + 1 \cdot 0 = 0$.
> - In basso a destra: $0 \cdot 4 \cdot 3^{100} + 1 \cdot 2^{100} = 2^{100}$.
>
> **Risultato.** Nel posto in alto a destra si raccoglie il 4.
> $$A^{100} = \begin{pmatrix} 3^{100} & 4 \cdot (3^{100} - 2^{100}) \\ 0 & 2^{100} \end{pmatrix}$$
> I numeri $3^{100}$ e $2^{100}$ sono enormi, e si lasciano scritti così.

**Un controllo con un esponente piccolo.** La stessa formula vale con qualunque esponente al posto di 100. Proviamola con l'esponente 2, dove il conto diretto è corto.

Con la formula, sulla diagonale vengono $3^2 = 9$ e $2^2 = 4$. In alto a destra viene 4 per la differenza $9 - 4$, cioè 20.

Con il prodotto diretto:

$$A^2 = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 \cdot 3 + 4 \cdot 0 & 3 \cdot 4 + 4 \cdot 2 \\ 0 \cdot 3 + 2 \cdot 0 & 0 \cdot 4 + 2 \cdot 2 \end{pmatrix} = \begin{pmatrix} 9 & 20 \\ 0 & 4 \end{pmatrix}$$

I due risultati coincidono.

::: prova Calcola $\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}^5$.
Si eleva alla quinta ogni numero della diagonale. $2^5 = 32$. E $(-1)^5 = -1$, perché un numero negativo elevato a un esponente dispari resta negativo.

$$\begin{pmatrix} 32 & 0 \\ 0 & -1 \end{pmatrix}$$
:::

::: prova Quanto vale il determinante di $\begin{pmatrix} 4 & 0 \\ 0 & -2 \end{pmatrix}$?
È il prodotto dei numeri sulla diagonale: $4 \cdot (-2) = -8$.
:::

::: prova Nella formula $A^k = MD^kM^{-1}$, quale delle tre matrici va elevata alla $k$?
Solo $D$, quella diagonale. Le matrici $M$ e $M^{-1}$ restano come sono.
:::

> [!RICORDA]
> - Con una matrice diagonale ogni conto si fa un numero alla volta: prodotto per un vettore, determinante, prodotto, potenze.
> - La potenza di una matrice diagonale si ottiene elevando i numeri sulla diagonale.
> - Se $A$ è diagonalizzabile, $A = MDM^{-1}$ e quindi $A^k = MD^kM^{-1}$.

## Come si trovano: il polinomio caratteristico (p. 89)

Finora gli autovettori erano già pronti, e bastava controllarli. Adesso impariamo a **trovarli**. Il lavoro si fa in due tempi: prima si trovano gli autovalori, poi per ogni autovalore si trovano i suoi autovettori.

### L'idea, in tre mosse

Cerchiamo un numero $\lambda$ e un vettore $v$ diverso da zero per cui

$$Av = \lambda v$$

**Mossa 1: portare tutto a sinistra.** Togliamo $\lambda v$ da tutti e due i lati:

$$Av - \lambda v = 0$$

**Mossa 2: raccogliere il vettore.** Vorremmo scrivere «$A$ meno $\lambda$, per $v$». Ma $A$ è una matrice e $\lambda$ è un numero: una matrice meno un numero non ha senso. Il rimedio è la matrice identità $I$, che non cambia i vettori. Al posto di $\lambda v$ scriviamo $\lambda I v$, che è lo stesso vettore, e raccogliamo:

$$(A - \lambda I)\,v = 0$$

La matrice $\lambda I$ ha il numero $\lambda$ sulla diagonale e 0 altrove. Quindi $A - \lambda I$ è la matrice $A$ a cui si toglie $\lambda$ **solo sulla diagonale**. Per la nostra solita matrice:

$$A - \lambda I = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix} - \begin{pmatrix} \lambda & 0 \\ 0 & \lambda \end{pmatrix} = \begin{pmatrix} 3 - \lambda & 4 \\ 0 & 2 - \lambda \end{pmatrix}$$

**Mossa 3: usare il determinante.** L'ultima equazione dice che la matrice $A - \lambda I$ manda in zero un vettore che non è zero: lo schiaccia. Ricorda dalle lezioni L09 e L10: una matrice quadrata schiaccia su zero qualche vettore non nullo esattamente quando il suo determinante è zero. Se invece il determinante non è zero, la matrice ha l'inversa, e l'unico vettore che manda in zero è il vettore nullo.

> [!IDEA]
> Un numero è un autovalore di $A$ esattamente quando, togliendolo sulla diagonale di $A$, si ottiene una matrice con determinante zero.

### Il primo esempio

Serve il determinante di una matrice con 2 righe: è la regola «diagonale meno l'altra diagonale», ricordata nella sezione sulla diagonalizzazione.

Applichiamo le tre mosse alla matrice dell'Esempio 17.2. Dovremmo ritrovare gli autovalori 3 e 2.

> [!ESEMPIO] 17.14 · Gli autovalori ritrovati
> Prendiamo $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ e calcoliamo il determinante di $A - \lambda I_2$. Il 2 in basso ricorda che la matrice identità ha 2 righe.
> $$\det(A - \lambda I_2) = \det\begin{pmatrix} 3 - \lambda & 4 \\ 0 & 2 - \lambda \end{pmatrix} = (3 - \lambda)(2 - \lambda) - 4 \cdot 0 = (3 - \lambda)(2 - \lambda)$$
> Quando vale zero? Un prodotto è zero quando è zero uno dei due pezzi.
>
> - Il primo pezzo, $3 - \lambda$, è zero quando $\lambda = 3$.
> - Il secondo pezzo, $2 - \lambda$, è zero quando $\lambda = 2$.
>
> Gli autovalori sono 3 e 2: proprio quelli trovati a mano nell'Esempio 17.2.
>
> Le dispense scrivono il risultato così: $p_A(\lambda) = (3 - \lambda)(2 - \lambda)$, e le radici di questo polinomio sono esattamente $\lambda = 2$ e $\lambda = 3$. Le parole «polinomio» e «radici» sono spiegate qui sotto.

### Il nome: polinomio caratteristico

Il determinante di $A - \lambda I$ contiene la lettera $\lambda$. Se sviluppi i prodotti ottieni un'espressione con le potenze di $\lambda$. Nell'esempio:

$$(3 - \lambda)(2 - \lambda) = 6 - 3\lambda - 2\lambda + \lambda^2 = \lambda^2 - 5\lambda + 6$$

Un'espressione così si chiama **polinomio** (lezione L04). Questo in particolare si chiama **polinomio caratteristico** della matrice $A$. Si indica con $p_A(\lambda)$, che si legge «pi con $A$ di lambda».

> [!RIPASSO] radici di un polinomio di secondo grado
> Una **radice** di un polinomio è un numero che, messo al posto della lettera, fa venire zero (lezione L04).
>
> Esempio: nel polinomio $\lambda^2 - 5\lambda + 6$ metti 2 al posto di $\lambda$. Viene $4 - 10 + 6$, cioè 0. Quindi 2 è una radice.
>
> Per un polinomio di secondo grado le radici si trovano con una formula. Chiama $a$ il numero davanti a $\lambda^2$, chiama $b$ il numero davanti a $\lambda$, e chiama $c$ il numero da solo. Allora
> $$\lambda = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
> Il simbolo $\pm$ si legge «più o meno»: il conto si fa una volta con il più e una volta con il meno. Il numero sotto la radice si chiama **discriminante**. Se è negativo, il polinomio non ha radici reali.
>
> Nell'esempio $a$ vale 1, poi $b$ vale $-5$, e $c$ vale 6. Il discriminante è $25 - 24$, cioè 1, e la sua radice quadrata è 1. Le due radici sono
> $$\frac{5 + 1}{2} = 3 \qquad\qquad \frac{5 - 1}{2} = 2$$
>
> Se il polinomio è già scritto come prodotto, come $(3 - \lambda)(2 - \lambda)$, la formula non serve: le radici si leggono dai due pezzi.

Le dispense scrivono la definizione così.

> [!DEF] 17.12 · Polinomio caratteristico
> Sia $A \in M(n, \K)$. Il **polinomio caratteristico** di $A = (a_{ij})$ è definito nel modo seguente:
> $$p_A(\lambda) = \det(A - \lambda I_n) = \det\begin{pmatrix} a_{11} - \lambda & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} - \lambda & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & a_{nn} - \lambda \end{pmatrix}.$$

**Come si legge.**

- $A = (a_{ij})$ è un modo breve per dare un nome ai numeri della matrice. Il numero $a_{ij}$ sta nella riga $i$ e nella colonna $j$. Per esempio $a_{12}$ sta nella riga 1 e nella colonna 2.
- $I_n$ è la matrice identità con $n$ righe.
- Nella matrice grande, $\lambda$ è tolto solo ai numeri sulla diagonale: $a_{11}$, poi $a_{22}$, fino ad $a_{nn}$. Tutti gli altri numeri restano come sono.
- In $p_A(\lambda)$ la piccola $A$ in basso ricorda di quale matrice si parla. La lettera $\lambda$ qui è una **variabile**: un posto vuoto in cui si può mettere un numero. Si usa $\lambda$ e non $x$ perché $x$ indica già i vettori.

A parole: il polinomio caratteristico è il determinante della matrice dopo aver tolto $\lambda$ sulla diagonale.

> [!OSSERVAZIONE] È davvero un polinomio di grado $n$
> Il **grado** di un polinomio è la potenza più alta della variabile. Le dispense osservano che il polinomio caratteristico di una matrice con $n$ righe ha grado $n$. Una matrice con 2 righe dà un polinomio di grado 2, una con 3 righe un polinomio di grado 3.
>
> Il motivo: nel determinante compare il prodotto degli $n$ numeri sulla diagonale, e ognuno contiene $\lambda$ una volta. Moltiplicandoli si arriva a $\lambda$ alla potenza $n$. Negli altri pezzi del determinante $\lambda$ compare meno volte. Davanti alla potenza più alta c'è $+1$ se $n$ è pari, e $-1$ se $n$ è dispari.

> [!OLTRE] la formula veloce per le matrici con 2 righe
> Per una matrice con 2 righe il polinomio caratteristico si scrive subito, con la **traccia** e il determinante. La traccia è la somma dei numeri sulla diagonale (lezione L08) e si scrive $\tr(A)$.
> $$p_A(\lambda) = \lambda^2 - \tr(A)\,\lambda + \det A$$
> Da dove viene. Chiama $a$ e $b$ i numeri della prima riga, $c$ e $d$ quelli della seconda. Con «diagonale meno l'altra diagonale»:
> $$p_A(\lambda) = (a - \lambda)(d - \lambda) - bc = \lambda^2 - (a + d)\lambda + (ad - bc)$$
> La somma $a + d$ è la traccia, e $ad - bc$ è il determinante.
>
> Esempio: per la matrice con le righe $(1, 2)$ e $(3, 4)$ la traccia è 5 e il determinante è $-2$. Quindi
> $$p_A(\lambda) = \lambda^2 - 5\lambda - 2$$
> Qualcosa di simile vale per una matrice con $n$ righe (Martelli, Proposizione 5.1.23). Il numero senza $\lambda$ del polinomio è il determinante della matrice. Il numero davanti a $\lambda^{n-1}$ è la traccia, con il segno $+$ se $n$ è dispari e $-$ se $n$ è pari.

### Matrici simili, stesso polinomio

Ricorda: due matrici simili descrivono la stessa macchina in due basi. Gli autovalori dicono di quanto la macchina allunga certe direzioni: sono una proprietà della macchina, non della base. Quindi ci aspettiamo che due matrici simili abbiano gli stessi autovalori. Vale una cosa ancora più forte: hanno lo stesso polinomio caratteristico.

Controllo con i numeri. La matrice $A$ dell'Esempio 17.2 e la matrice diagonale $D$ dell'Esempio 17.9 sono simili. Per la prima il polinomio caratteristico è quello dell'Esempio 17.14. Per la seconda il conto è

$$\det\begin{pmatrix} 3 - \lambda & 0 \\ 0 & 2 - \lambda \end{pmatrix} = (3 - \lambda)(2 - \lambda) - 0 \cdot 0 = (3 - \lambda)(2 - \lambda)$$

È lo stesso polinomio.

> [!OSSERVAZIONE] Matrici simili hanno lo stesso polinomio caratteristico
> Se $A$ e $B$ sono simili, allora $p_A(\lambda) = p_B(\lambda)$.
>
> Per questo si può parlare del polinomio caratteristico di un endomorfismo $T : V \to V$. Si indica con $p_T(\lambda)$. È il polinomio caratteristico della matrice associata $A = [T]^{\mathcal B}_{\mathcal B}$, in una base $\mathcal B$ qualsiasi. Il risultato non dipende dalla base scelta: cambiando base si ottiene una matrice simile, e il polinomio resta lo stesso. Le dispense dicono che il polinomio caratteristico è **invariante per similitudine**.

> [!DIM] perché matrici simili hanno lo stesso polinomio caratteristico
> Partiamo da $A = M^{-1}BM$, con $M$ invertibile. Serve il Teorema di Binet (lezione L10): il determinante di un prodotto è il prodotto dei determinanti.
>
> 1. Riscriviamo $\lambda I_n$ in un modo utile. Siccome $M^{-1}M = I_n$, vale $\lambda I_n = \lambda M^{-1}M = M^{-1}(\lambda I_n)M$.
> 2. Sostituiamo nella definizione: $p_A(\lambda) = \det(A - \lambda I_n) = \det\big(M^{-1}BM - M^{-1}(\lambda I_n)M\big)$.
> 3. Raccogliamo $M^{-1}$ a sinistra e $M$ a destra: viene $\det\big(M^{-1}(B - \lambda I_n)M\big)$.
> 4. Per Binet il determinante si spezza in tre: $\det(M^{-1}) \cdot \det(B - \lambda I_n) \cdot \det(M)$.
> 5. Il primo e il terzo pezzo, moltiplicati, danno $\det(M^{-1}M) = \det I_n = 1$. Resta $\det(B - \lambda I_n)$, cioè $p_B(\lambda)$.

### Il risultato principale

Le tre mosse dell'inizio valgono per ogni macchina, non solo per l'esempio. Le dispense lo scrivono in una riga.

> [!PROP] 17.13
> Gli autovalori di $T$ sono precisamente le radici del polinomio caratteristico $p_T(\lambda)$.

**Come si legge.** «Precisamente» vuol dire due cose: tutte le radici sono autovalori, e non ci sono altri autovalori. Quindi per trovare gli autovalori si calcola il polinomio caratteristico e si cercano i numeri che lo fanno diventare zero.

La dimostrazione delle dispense ripete le tre mosse in ordine.

> [!DIM] della Proposizione 17.13
> Scegliamo una base $\mathcal B$ e chiamiamo $A = [T]^{\mathcal B}_{\mathcal B}$ la matrice di $T$. Per l'osservazione sulle coordinate, un numero $\lambda$ è un autovalore di $T$ quando esiste una lista di numeri $x$, non tutta di zeri, con $Ax = \lambda x$. Le frasi qui sotto dicono tutte la stessa cosa: ognuna è vera esattamente quando è vera quella prima.
>
> 1. Esiste $x \neq 0$ con $Ax = \lambda x$.
> 2. Esiste $x \neq 0$ con $(A - \lambda I_n)x = 0$. Si è portato $\lambda x = \lambda I_n x$ a sinistra.
> 3. Esiste $x \neq 0$ che sta nel nucleo di $A - \lambda I_n$. È la definizione di nucleo (lezione L14): i vettori mandati in zero.
> 4. La matrice $A - \lambda I_n$ non è invertibile. Una matrice quadrata è invertibile esattamente quando il suo nucleo contiene solo il vettore nullo (lezioni L10 e L14).
> 5. $\det(A - \lambda I_n) = 0$. Una matrice quadrata è invertibile esattamente quando il determinante è diverso da zero (Proposizione 10.8).
> 6. $p_A(\lambda) = 0$, cioè $\lambda$ è una radice del polinomio caratteristico.

### Dagli autovalori agli autovettori

Trovato un autovalore, i suoi autovettori si trovano tornando alla mossa 2. Se l'autovalore è, per esempio, 3, si mette 3 al posto di $\lambda$ e si risolve

$$(A - 3I)\,v = 0$$

È un **sistema omogeneo** (lezione L12): un indovinello in cui ogni indizio finisce con «= 0». Le sue soluzioni diverse da zero sono gli autovettori.

Un avviso che evita molti errori: questo sistema ha **sempre infinite soluzioni**. Il motivo lo conosci già: gli autovettori si trovano a rette intere. Se come unica soluzione ti viene il vettore nullo, il numero che hai usato non è un autovalore. C'è un errore nei conti di prima.

> [!METODO] Autovalori e autovettori di una matrice, passo per passo
> 1. **Togli $\lambda$ sulla diagonale** e calcola il determinante: è il polinomio caratteristico. Con 3 righe sviluppa lungo la riga o la colonna con più zeri. Quando puoi, **lascia il polinomio scritto come prodotto**.
> 2. **Trova le radici**: sono gli autovalori.
> 3. **Per ogni autovalore**: mettilo al posto di $\lambda$ e risolvi il sistema omogeneo. Le soluzioni non nulle sono gli autovettori di quell'autovalore.
> 4. **Controlla** ogni autovettore con un prodotto: dalla matrice deve uscire l'autovettore moltiplicato per il suo autovalore.

> [!ESEMPIO] · tutta la ricetta su una matrice $2 \times 2$
> Prendiamo $A = \begin{pmatrix} -1 & 2 \\ -4 & 5 \end{pmatrix}$. È l'Esempio 5.1.29 del libro di Martelli.
>
> **Passo 1: il polinomio caratteristico.** Tolgo $\lambda$ sulla diagonale e calcolo il determinante con «diagonale meno l'altra diagonale».
> $$p_A(\lambda) = \det\begin{pmatrix} -1 - \lambda & 2 \\ -4 & 5 - \lambda \end{pmatrix} = (-1 - \lambda)(5 - \lambda) - 2 \cdot (-4)$$
> Sviluppo il primo prodotto, un pezzo alla volta.
>
> - $(-1) \cdot 5 = -5$
> - $(-1) \cdot (-\lambda) = \lambda$
> - $(-\lambda) \cdot 5 = -5\lambda$
> - $(-\lambda) \cdot (-\lambda) = \lambda^2$
>
> Il secondo prodotto è $2 \cdot (-4) = -8$. Va tolto, quindi diventa $+8$.
> $$p_A(\lambda) = \lambda^2 + \lambda - 5\lambda - 5 + 8 = \lambda^2 - 4\lambda + 3$$
> Controllo con la formula veloce: la traccia è $-1 + 5 = 4$, il determinante è $(-1) \cdot 5 - 2 \cdot (-4) = 3$. Torna.
>
> **Passo 2: le radici.** Uso la formula con $a = 1$, $b = -4$, $c = 3$. Il discriminante è $16 - 12 = 4$, e la sua radice quadrata è 2.
> $$\lambda = \frac{4 \pm 2}{2}$$
> Con il più viene 3, con il meno viene 1. Gli autovalori sono 1 e 3.
>
> **Passo 3: gli autovettori dell'autovalore 1.** Tolgo 1 sulla diagonale.
> $$A - I = \begin{pmatrix} -2 & 2 \\ -4 & 4 \end{pmatrix}$$
> Chiamo $(x, y)$ il vettore che cerco. Il sistema ha un'equazione per ogni riga: la riga, moltiplicata per il vettore, deve dare 0. Dalla prima riga viene $-2x + 2y = 0$, dalla seconda $-4x + 4y = 0$. La seconda è il doppio della prima, quindi non dice niente di nuovo. Dalla prima: $2y = 2x$, cioè $y = x$. Gli autovettori sono i vettori con i due numeri uguali. Scelgo $(1, 1)$.
>
> **Passo 3, di nuovo: gli autovettori dell'autovalore 3.** Tolgo 3 sulla diagonale.
> $$A - 3I = \begin{pmatrix} -4 & 2 \\ -4 & 2 \end{pmatrix}$$
> Le due righe sono uguali: resta una sola equazione, $-4x + 2y = 0$. Quindi $2y = 4x$, cioè $y = 2x$. Scelgo $x = 1$: l'autovettore è $(1, 2)$.
>
> **Passo 4: il controllo.**
> $$A\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} -1 \cdot 1 + 2 \cdot 1 \\ -4 \cdot 1 + 5 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix} \qquad\qquad A\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} -1 \cdot 1 + 2 \cdot 2 \\ -4 \cdot 1 + 5 \cdot 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$$
> Dal primo vettore esce 1 volta sé stesso. Dal secondo esce $(3, 6)$, cioè 3 volte sé stesso. Tutto torna.
>
> **In più: la diagonalizzazione.** I due autovettori non sono uno multiplo dell'altro, quindi formano una base: la matrice è diagonalizzabile. Con il metodo della sezione sulla diagonalizzazione:
> $$M = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} \qquad\qquad D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$$

### Con tre righe: scegli la riga con più zeri

Con una matrice di 3 righe il metodo è lo stesso. Cambia solo il determinante, che è più lungo da calcolare.

> [!RIPASSO] il determinante di una matrice con 3 righe
> Un determinante con 3 righe si riduce a determinanti con 2 righe. È lo sviluppo di Laplace della lezione L09.
>
> 1. Scegli una riga o una colonna. Conviene quella con più zeri.
> 2. Per ogni numero della riga scelta, cancella la riga e la colonna in cui sta. Resta una matrice con 2 righe: calcola il suo determinante.
> 3. Moltiplica quel determinante per il numero e per il segno del suo posto. I segni sono messi a scacchiera:
>    $$\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$$
> 4. Somma i risultati. Un numero uguale a 0 dà 0: per questo conviene la riga con più zeri.
>
> Esempio. Nella matrice qui sotto la prima riga è $(2, 0, 0)$. Conta solo il 2, che sta in un posto con il segno più. Cancellando la prima riga e la prima colonna restano le righe $(3, 1)$ e $(1, 2)$.
> $$\det\begin{pmatrix} 2 & 0 & 0 \\ 1 & 3 & 1 \\ 4 & 1 & 2 \end{pmatrix} = 2 \cdot \det\begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix} = 2 \cdot (3 \cdot 2 - 1 \cdot 1) = 10$$

Proviamo il metodo su una domanda vera: la numero 8 dell'appello del 05/02/2026. Il testo, con i vettori scritti in riga: «Trovare l'insieme degli autovalori dell'endomorfismo $T : \R^3 \to \R^3$ dato da $T(x, y, z) = (2x + y - 2z,\ -x + 2z,\ 3z)$».

La scrittura $\R^3$ indica i vettori dello spazio, fatti di tre numeri reali. In pratica la domanda chiede tre cose: scrivere la matrice della macchina, calcolare il polinomio caratteristico, trovare le sue radici.

> [!ESEMPIO] · la domanda 8 del 05/02/2026, passo per passo
> **Passo 1: la matrice.** Ogni posto del risultato dà una riga. Nella riga vanno i numeri che stanno davanti a $x$, a $y$ e a $z$. Dove una lettera manca va 0.
> $$A = \begin{pmatrix} 2 & 1 & -2 \\ -1 & 0 & 2 \\ 0 & 0 & 3 \end{pmatrix}$$
>
> **Passo 2: tolgo $\lambda$ sulla diagonale.**
> $$A - \lambda I = \begin{pmatrix} 2 - \lambda & 1 & -2 \\ -1 & -\lambda & 2 \\ 0 & 0 & 3 - \lambda \end{pmatrix}$$
>
> **Passo 3: il determinante.** La terza riga ha due zeri: sviluppo lungo quella. Conta solo l'ultimo numero, $3 - \lambda$, che sta in un posto con il segno più. Cancello la terza riga e la terza colonna.
> $$p_A(\lambda) = (3 - \lambda) \cdot \det\begin{pmatrix} 2 - \lambda & 1 \\ -1 & -\lambda \end{pmatrix}$$
> Il determinante con 2 righe è $(2 - \lambda)(-\lambda) - 1 \cdot (-1) = -2\lambda + \lambda^2 + 1$. Messo in ordine: $\lambda^2 - 2\lambda + 1$.
> $$p_A(\lambda) = (3 - \lambda)(\lambda^2 - 2\lambda + 1)$$
> Non moltiplico i due pezzi: scritto come prodotto, il polinomio è più comodo.
>
> **Passo 4: le radici.** Il primo pezzo è zero per $\lambda = 3$. Per il pezzo di secondo grado uso la formula con $a = 1$, $b = -2$, $c = 1$. Il discriminante è $4 - 4 = 0$: c'è una sola radice, $\frac 22 = 1$, che conta due volte. Infatti $\lambda^2 - 2\lambda + 1$ è il quadrato di $\lambda - 1$.
>
> **Passo 5: la risposta.** Gli autovalori sono 1 e 3. L'insieme richiesto è $\{1, 3\}$: le graffe racchiudono i numeri trovati, ognuno scritto una volta.
>
> **Controllo.** La traccia è $2 + 0 + 3 = 5$. La somma degli autovalori, contando due volte l'1, è $1 + 1 + 3 = 5$.

Un esempio completo con 3 righe, con gli autovettori e le due matrici della diagonalizzazione, è l'esercizio 13.

### Tre scorciatoie utili all'esame

> [!OLTRE] matrici triangolari: gli autovalori si leggono sulla diagonale
> Una matrice è **triangolare** quando ha tutti zeri sotto la diagonale principale, oppure tutti zeri sopra. La matrice dell'Esempio 17.2 è triangolare: sotto la diagonale c'è solo uno 0.
>
> Per una matrice triangolare **gli autovalori sono i numeri sulla diagonale**. Non serve nessun conto.
>
> Il motivo (Martelli, Proposizione 5.1.34): togliendo $\lambda$ sulla diagonale la matrice resta triangolare. E il determinante di una matrice triangolare è il prodotto dei numeri sulla diagonale (lezione L09). Quindi il polinomio caratteristico è già scritto come prodotto:
> $$p_A(\lambda) = (a_{11} - \lambda) \cdots (a_{nn} - \lambda)$$
> Negli appelli capita spesso: 03/07/2026, domanda 3; 07/09/2026, problema 11.

> [!OLTRE] un controllo veloce: somma e prodotto degli autovalori
> Quando hai trovato **tutti** gli autovalori di una matrice con $n$ righe, cioè $n$ radici contando due volte una radice doppia, valgono due uguaglianze (Martelli, Proposizione 5.2.15).
>
> - La **somma** degli autovalori è la traccia della matrice.
> - Il **prodotto** degli autovalori è il determinante della matrice.
>
> Esempio con la matrice del libro di Martelli vista sopra: gli autovalori sono 1 e 3. La somma è 4, come la traccia. Il prodotto è 3, come il determinante.
>
> È un controllo che costa pochi secondi. In un quiz può bastare da solo a scartare le risposte sbagliate.

> [!OLTRE] le rotazioni, con il polinomio caratteristico
> La matrice di rotazione ha traccia $2\cos\vartheta$. Il suo determinante è $\cos^2\vartheta + \sin^2\vartheta$, che vale sempre 1. Con la formula veloce il polinomio caratteristico è
> $$p(\lambda) = \lambda^2 - 2\cos\vartheta\,\lambda + 1$$
> Il discriminante è $4\cos^2\vartheta - 4$. Il coseno sta sempre tra $-1$ e 1, e arriva a quei due valori solo per gli angoli 0 e $\pi$. Per tutti gli altri angoli il discriminante è negativo: nessuna radice reale, come dice l'Esempio 17.3.
>
> Con i numeri complessi invece le radici ci sono. Ricorda dalla lezione L02: $i$ è il numero complesso che moltiplicato per sé stesso dà $-1$. Per il quarto di giro il polinomio è $\lambda^2 + 1$, e le sue radici sono $i$ e $-i$ (esercizio 10). Per questo, quando si parla di autovalori, bisogna sempre dire se si lavora con i numeri reali o con i numeri complessi.

### Lo strumento per fare i conti

Lo strumento qui sotto calcola il polinomio caratteristico di una matrice con 2 o 3 righe, le sue radici razionali e, per ognuna, gli autovettori. È impostato sulla matrice dell'Esempio 17.4.

Due cose da provare.

1. Guarda il risultato per la matrice già scritta. Trovi l'autovalore 2 con l'autovettore $(0, 1, 1)$. Resta un pezzo di secondo grado senza radici reali: lo ritrovi nell'esercizio 8.
2. Scrivi la matrice con le righe $1\ 2\ 0$, poi $2\ 1\ 0$, poi $1\ 1\ 2$. È quella dell'esercizio 13: prova prima a mano, poi controlla qui.

```widget gauss
titolo: Polinomio caratteristico e autovettori
matrice: 1 1 -1; 2 1 1; 3 0 2
modo: autovalori
modi: autovalori, nucleo, determinante
```

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: §5.1.1–5.1.2 «Autovettori e autovalori», «Endomorfismi diagonalizzabili» (pp. 151–154), §5.1.3–5.1.4 «Matrici diagonali», «Matrici diagonalizzabili», con l'esempio di $A^{100}$ (pp. 154–156), §5.1.6–5.1.7 «Polinomio caratteristico», «Le radici del polinomio caratteristico» (pp. 157–161, con gli esempi $2 \times 2$ su $\R$ e su $\C$), §5.1.8 «Matrici triangolari» (p. 162). La relazione tra traccia, determinante e autovalori è la Proposizione 5.2.15 (p. 169).

::: prova Scrivi $A - \lambda I$ per la matrice $A$ con le righe $(2, 1)$ e $(1, 2)$. Poi calcola il polinomio caratteristico e gli autovalori.
Tolgo $\lambda$ sulla diagonale:

$$A - \lambda I = \begin{pmatrix} 2 - \lambda & 1 \\ 1 & 2 - \lambda \end{pmatrix}$$

Il determinante è $(2 - \lambda)(2 - \lambda) - 1 \cdot 1$. Il primo prodotto fa $4 - 4\lambda + \lambda^2$. Tolgo 1 e ottengo $\lambda^2 - 4\lambda + 3$.

Il discriminante è $16 - 12 = 4$, con radice quadrata 2. Le radici sono $\frac{4 + 2}{2} = 3$ e $\frac{4 - 2}{2} = 1$. Gli autovalori sono 1 e 3.
:::

::: prova Il polinomio caratteristico di una matrice è $(1 - \lambda)(4 - \lambda)$. Quali sono gli autovalori?
Un prodotto è zero quando è zero uno dei due pezzi: $\lambda = 1$ oppure $\lambda = 4$. Gli autovalori sono 1 e 4.
:::

::: prova Quali sono gli autovalori della matrice $\begin{pmatrix} 5 & 1 \\ 0 & -2 \end{pmatrix}$? Rispondi senza fare conti.
La matrice è triangolare: sotto la diagonale c'è 0. Gli autovalori sono i numeri sulla diagonale, cioè 5 e $-2$.
:::

> [!RICORDA]
> - Il **polinomio caratteristico** si calcola così: togli $\lambda$ sulla diagonale e fai il determinante. In formule, $p_A(\lambda) = \det(A - \lambda I)$.
> - Gli **autovalori** sono le radici del polinomio caratteristico.
> - Gli **autovettori** di un autovalore sono le soluzioni non nulle del sistema omogeneo che si ottiene mettendo quel numero al posto di $\lambda$.
> - Matrici simili hanno lo stesso polinomio caratteristico. In una matrice triangolare gli autovalori sono i numeri sulla diagonale.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $Av$ | «$A$ per $v$» | il vettore che esce dalla matrice $A$ quando entra il vettore $v$ | $\begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$ |
| $\lambda$ | «lambda» | una lettera greca che indica un numero; qui di solito l'autovalore | $\lambda = 3$ |
| $\lambda_1$, $\lambda_2$ | «lambda uno», «lambda due» | il primo autovalore, il secondo autovalore | $\lambda_1 = 2$ |
| $\mu$ | «mi» | un'altra lettera greca che indica un numero | $\mu = 3$ nel multiplo $3v$ |
| $Av = \lambda v$ | «$A$ per $v$ è uguale a lambda per $v$» | dalla macchina esce un multiplo del vettore entrato: $v$ è un autovettore | $A(1, 0) = 3 \cdot (1, 0)$ |
| $v \neq 0$ | «$v$ diverso da zero» | $v$ non è il vettore nullo | $(1, 0) \neq 0$ |
| $T : V \to V$ | «$T$ da $V$ a $V$» | una macchina che prende i vettori dello spazio $V$ e li restituisce in $V$: un endomorfismo | $T(x, y) = (x, 0)$ |
| $T(v)$ | «$T$ di $v$» | il vettore che esce dalla macchina $T$ quando entra $v$ | $T(3, 2) = (3, 0)$ |
| $L_A$ | «elle con $A$» | la macchina «moltiplica per la matrice $A$» | $L_A(v) = Av$ |
| $\R$, $\C$ | «erre», «ci» | i numeri reali, i numeri complessi | $3 \in \R$, $i \in \C$ |
| $\K$ | «cappa» | i numeri reali oppure i numeri complessi | $\K = \R$ |
| $\R^2$, $\R^3$, $\R^n$ | «erre due», «erre tre», «erre enne» | i vettori fatti di 2, di 3, di $n$ numeri reali: il piano, lo spazio | $(1, 2) \in \R^2$ |
| $2 \times 2$, $3 \times 3$ | «due per due», «tre per tre» | una matrice con 2 righe e 2 colonne, con 3 righe e 3 colonne | |
| $\in$ | «appartiene a» | sta dentro l'insieme | $\lambda \in \R$ |
| $e_1$, $e_2$ | «e uno», «e due» | i vettori «un passo lungo un asse» | $e_1 = (1, 0)$ |
| ${}^t(x, y)$ | «$x$, $y$ trasposto» | il vettore $(x, y)$ scritto in colonna; si trova nei testi d'esame | ${}^t(1, 2)$ |
| $\R_1[x]$ | «erre uno di $x$» | i polinomi di grado al massimo 1 | $2 + 5x$ |
| $\mathcal B$ | «bi» | il nome di una base | $\mathcal B = \{v_1, v_2\}$ |
| $\{v_1, \dots, v_n\}$ | «vu uno, eccetera, vu enne» | un elenco di $n$ vettori | $\{(1, 0), (-4, 1)\}$ |
| $[v]_{\mathcal B}$ | «le coordinate di $v$ nella base $\mathcal B$» | la lista di numeri che descrive $v$ in quella base | il polinomio $2 + 5x$ ha coordinate $(2, 5)$ |
| $[T]^{\mathcal B}_{\mathcal B}$ | «la matrice di $T$ nella base $\mathcal B$» | la tabella che descrive la macchina in quella base | $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$ |
| $[\id]^{\mathcal C}_{\mathcal B}$ | «la matrice di cambiamento di base da $\mathcal C$ a $\mathcal B$» | il traduttore delle coordinate da una base all'altra | la matrice $M$ |
| $\vartheta$ | «theta» | una lettera greca che indica un angolo | $\vartheta = \frac{\pi}{2}$ |
| $\pi$ | «pi greco» | come angolo: mezzo giro, cioè 180° | $\vartheta \neq 0, \pi$ |
| $\mathrm{Rot}_\vartheta$ | «rot di theta» | la matrice della rotazione di angolo $\vartheta$ | $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ per il quarto di giro |
| $\Span(v)$ | «span di $v$» | tutti i multipli di $v$: la retta di $v$ | $\Span(1, 0)$ è l'asse orizzontale |
| $M(n, \K)$ | «emme di enne, cappa» | le matrici quadrate con $n$ righe e $n$ colonne | $A \in M(2, \R)$ |
| $I$, $I_n$ | «i», «i con enne» | la matrice identità: 1 sulla diagonale, 0 altrove | $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| $M^{-1}$ | «$M$ alla meno uno» | la matrice inversa di $M$: disfa quello che fa $M$ | $M^{-1}M = I$ |
| $D$ | «di» | una matrice diagonale; nella diagonalizzazione ha gli autovalori sulla diagonale | $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$ |
| $A^k$ | «$A$ alla $k$» | la matrice $A$ moltiplicata per sé stessa $k$ volte | $A^2 = A \cdot A$ |
| $\det A$ | «determinante di $A$» | il numero che si calcola con «diagonale meno l'altra diagonale» | $\det\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = -2$ |
| $\tr(A)$ | «traccia di $A$» | la somma dei numeri sulla diagonale | $\tr\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = 5$ |
| $a_{ij}$ | «a con i, j» | il numero che sta nella riga $i$ e nella colonna $j$ | $a_{12}$: riga 1, colonna 2 |
| $A - \lambda I$ | «$A$ meno lambda $I$» | la matrice $A$ con $\lambda$ tolto sulla diagonale | $\begin{pmatrix} 3 - \lambda & 4 \\ 0 & 2 - \lambda \end{pmatrix}$ |
| $p_A(\lambda)$ | «pi con $A$ di lambda» | il polinomio caratteristico della matrice $A$ | $(3 - \lambda)(2 - \lambda)$ |
| $p_T(\lambda)$ | «pi con $T$ di lambda» | il polinomio caratteristico della macchina $T$: quello di una sua matrice | |
| $\pm$ | «più o meno» | il conto si fa una volta con il più e una volta con il meno | $\frac{4 \pm 2}{2}$ dà 3 e 1 |
| $\iff$ | «se e solo se» | le due frasi sono vere insieme oppure false insieme | |
| $\Ker$ | «ker», cioè «nucleo» | i vettori che la macchina manda in zero | |
| $\id$ | «identità» | la macchina che lascia ogni vettore com'è | $\id(v) = v$ |
| ${}^tA$ | «$A$ trasposta» | la matrice $A$ con righe e colonne scambiate | |
| $i$ | «i» | il numero complesso che moltiplicato per sé stesso dà $-1$ | $i \cdot i = -1$ |

## Verso l'esame

La prova di Algebra lineare e Geometria ha 10 domande a risposta multipla, ognuna con 5 risposte di cui una sola giusta, e 2 problemi da 11 punti. I problemi vengono corretti solo a chi dà almeno 6 risposte giuste. La prova dura 2 ore, senza calcolatrice, e si può portare solo un foglio da 4 facciate scritto a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame.** Autovalori e autovettori sono presenti in **ogni** appello dal 2023 al 2026. Quasi sempre in una o due domande del quiz. Molto spesso anche in un problema aperto, che usa pure la lezione L18.

| Tipo di domanda | Dove |
|---|---|
| quale di questi vettori è un autovettore? | 03/07/2026 d. 2 |
| l'insieme degli autovalori di una matrice $3 \times 3$ | 06/09/2024 d. 10; 07/02/2025 d. 8; 05/02/2026 d. 8; 03/07/2026 d. 3 (triangolare) |
| conosci un autovalore: trovare gli altri (anche complessi) | 02/09/2025 d. 4 |
| la base di autovettori di una matrice $2 \times 2$ | 03/06/2026 d. 6 |
| che cosa non può succedere se $\lambda$ è un autovalore | 03/06/2025 d. 8 |
| problema: matrice di $T$ e autovalori | 10/07/2024 problema 11; 07/09/2026 problema 11 |

### Come si affrontano le domande

Nelle domande la macchina è data quasi sempre con una formula. Il primo passo è scrivere la sua matrice.

> [!METODO] Dalla formula della macchina alla matrice
> 1. Ogni posto del risultato dà una **riga** della matrice.
> 2. Nella riga scrivi i numeri che stanno davanti a $x$, a $y$ e a $z$, in quest'ordine. Se una lettera manca, scrivi 0.
>
> Esempio: se il primo posto del risultato è $2x + y$, la prima riga è $(2, 1)$. Se il secondo posto è $3y$, la seconda riga è $(0, 3)$.

> [!METODO] «Quale di questi vettori è un autovettore?»
> 1. Non calcolare il polinomio caratteristico: **prova le risposte**.
> 2. Per ogni vettore proposto calcola che cosa esce dalla macchina.
> 3. La risposta giusta è il vettore da cui esce un suo multiplo.

Per la domanda «trova l'insieme degli autovalori» di una matrice con 3 righe il metodo è quello della sezione sul polinomio caratteristico: togli $\lambda$ sulla diagonale, sviluppa lungo la riga o la colonna con più zeri, tieni fuori il pezzo «numero meno $\lambda$» e trova le radici del resto. Alla fine controlla con la traccia.

### Una domanda vera, letta insieme

**Appello del 03/07/2026, domanda 2.** Il testo: «Sia $T : \R^2 \to \R^2$ l'endomorfismo definito da $T({}^t(x, y)) = {}^t(2x + y,\ 3y)$. Quale dei seguenti vettori è un autovettore di $T$?». Le risposte sono i vettori $(1, 1)$, $(0, 1)$, $(2, 1)$ e $(-1, 1)$, scritti in colonna, più la frase «$T$ non ha autovettori reali».

**Come si legge il testo.** La scrittura $\R^2$ indica i vettori del piano, fatti di due numeri reali. La piccola $t$ in alto a sinistra vuol dire «scritto in colonna» (lezione L08): non cambia i conti. Quindi la macchina prende $(x, y)$ e restituisce $(2x + y,\ 3y)$.

**In pratica chiede:** da quale di questi quattro vettori la macchina fa uscire un multiplo del vettore stesso?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: provo i quattro vettori.** Metto i due numeri del vettore al posto di $x$ e di $y$.
>
> | Entra | Conto | Esce | Esce un multiplo? |
> |---|---|---|---|
> | $(1, 1)$ | $(2 \cdot 1 + 1,\ 3 \cdot 1)$ | $(3, 3)$ | sì: 3 volte $(1, 1)$ |
> | $(0, 1)$ | $(2 \cdot 0 + 1,\ 3 \cdot 1)$ | $(1, 3)$ | no: il primo posto dovrebbe restare 0 |
> | $(2, 1)$ | $(2 \cdot 2 + 1,\ 3 \cdot 1)$ | $(5, 3)$ | no: servirebbe «per $\frac 52$» e «per 3» |
> | $(-1, 1)$ | $(2 \cdot (-1) + 1,\ 3 \cdot 1)$ | $(-1, 3)$ | no: servirebbe «per 1» e «per 3» |
>
> **Passo 2: la risposta.** È $(1, 1)$, un autovettore con autovalore 3.
>
> **Perché la risposta «$T$ non ha autovettori reali» è sbagliata.** La matrice della macchina ha le righe $(2, 1)$ e $(0, 3)$. È triangolare, quindi i suoi autovalori sono i numeri sulla diagonale: 2 e 3. Sono reali, e ogni autovalore ha i suoi autovettori.

### Altre due domande vere

**Appello del 05/02/2026, domanda 8.** È la domanda sugli autovalori di $T(x, y, z) = (2x + y - 2z,\ -x + 2z,\ 3z)$, risolta passo per passo nella sezione sul polinomio caratteristico. Le cinque risposte erano $\{1, 2, 3\}$, poi $\{-1, \pm 2\}$, poi $\{2, 3\}$, poi $\{1, 3\}$, poi $\{\pm 1, 3\}$. Quella giusta è $\{1, 3\}$, perché il polinomio caratteristico è $(3 - \lambda)(\lambda - 1)^2$.

La risposta che tenta è $\{1, 2, 3\}$: ha tre numeri diversi e sembra più completa. Ma 2 non è una radice. Mettendo 2 al posto di $\lambda$ viene $(3 - 2) \cdot (2 - 1)^2 = 1$, non 0.

**Appello del 02/09/2025, domanda 4.** Il testo: l'endomorfismo $T(x, y, z) = (2x + 2y,\ -2x - 2y + 2z,\ 2x)$ «ha autovalore $\lambda_1 = 2$. Quali sono i suoi altri autovalori?». Il numerino in $\lambda_1$ dice solo che è il primo dei tre autovalori. Ecco le cinque risposte.

| Risposta | I due autovalori proposti |
|---|---|
| (a) | $\pm(1 + i\sqrt 2)$ |
| (b) | $2 \pm i\sqrt 2$ |
| (c) | $1 + i\sqrt 2$ e $1 + i\sqrt 3$ |
| (d) | $2 + i\sqrt 2$ e $1 - i\sqrt 3$ |
| (e) | $-1 \pm i\sqrt 3$ |

**In pratica chiede:** una matrice con 3 righe ha tre autovalori, se si contano anche quelli complessi. Uno te lo danno. Trova gli altri due.

> [!RIPASSO] che cosa serve dei numeri complessi
> Il numero $i$ è il numero complesso che moltiplicato per sé stesso dà $-1$ (lezione L02). Con lui anche i numeri negativi hanno una radice quadrata: per esempio la radice di $-12$ è $i\sqrt{12}$.
>
> Dalla lezione L01: $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt 3$.
>
> Una scrittura come $-1 \pm i\sqrt 3$ indica due numeri: uno con il più e uno con il meno. Sommandoli, i pezzi con la $i$ si cancellano: resta $-1 - 1 = -2$.

> [!ESEMPIO] · la soluzione veloce, con la traccia
> **Passo 1: la matrice.**
> $$A = \begin{pmatrix} 2 & 2 & 0 \\ -2 & -2 & 2 \\ 2 & 0 & 0 \end{pmatrix}$$
>
> **Passo 2: la traccia.** È la somma dei numeri sulla diagonale: $2 - 2 + 0 = 0$.
>
> **Passo 3: la regola.** La somma dei tre autovalori è la traccia, cioè 0. Uno dei tre è 2. Quindi gli altri due, sommati, devono dare $-2$.
>
> **Passo 4: sommo i due numeri di ogni risposta.**
>
> | Risposta | Somma dei due numeri |
> |---|---|
> | (a) | $(1 + i\sqrt 2) - (1 + i\sqrt 2) = 0$ |
> | (b) | $2 + 2 = 4$ |
> | (c) | $2 + i\sqrt 2 + i\sqrt 3$ |
> | (d) | $3 + i\sqrt 2 - i\sqrt 3$ |
> | (e) | $-1 - 1 = -2$ |
>
> Solo la risposta (e) dà $-2$.

> [!ESEMPIO] · la soluzione completa, con il polinomio caratteristico
> **Passo 1: tolgo $\lambda$ sulla diagonale.**
> $$A - \lambda I = \begin{pmatrix} 2 - \lambda & 2 & 0 \\ -2 & -2 - \lambda & 2 \\ 2 & 0 & -\lambda \end{pmatrix}$$
>
> **Passo 2: sviluppo lungo la terza riga**, che è $(2,\ 0,\ -\lambda)$. Lo 0 non conta. Restano due pezzi, tutti e due in posti con il segno più.
>
> - Il numero 2. Cancello la terza riga e la prima colonna: restano le righe $(2,\ 0)$ e $(-2 - \lambda,\ 2)$. Il determinante è $2 \cdot 2 - 0 \cdot (-2 - \lambda) = 4$. Il pezzo vale $2 \cdot 4 = 8$.
> - Il numero $-\lambda$. Cancello la terza riga e la terza colonna: restano le righe $(2 - \lambda,\ 2)$ e $(-2,\ -2 - \lambda)$. Il determinante è $(2 - \lambda)(-2 - \lambda) - 2 \cdot (-2)$. Il primo prodotto fa $-4 - 2\lambda + 2\lambda + \lambda^2$, cioè $\lambda^2 - 4$. Sommando 4 resta $\lambda^2$. Il pezzo vale $-\lambda \cdot \lambda^2 = -\lambda^3$.
>
> $$p_A(\lambda) = 8 - \lambda^3$$
>
> **Passo 3: uso l'autovalore che conosco.** Con $\lambda = 2$ viene $8 - 8 = 0$: torna. Siccome 2 è una radice, il polinomio si divide per $\lambda - 2$ senza resto (lezione L04). Divido con la regola di Ruffini. Scrivo il polinomio con tutte le potenze: $-\lambda^3 + 0\lambda^2 + 0\lambda + 8$. I suoi numeri sono $-1$, 0, 0 e 8. Il primo si copia. Poi, a ogni passo, si moltiplica per 2 l'ultimo numero trovato e si somma al numero successivo.
>
> - Primo numero: $-1$.
> - Secondo: $0 + 2 \cdot (-1) = -2$.
> - Terzo: $0 + 2 \cdot (-2) = -4$.
> - Quarto: $8 + 2 \cdot (-4) = 0$.
>
> L'ultimo numero è il resto, ed è 0. Gli altri tre sono i numeri del quoziente: $-\lambda^2 - 2\lambda - 4$.
> $$p_A(\lambda) = (\lambda - 2)(-\lambda^2 - 2\lambda - 4) = -(\lambda - 2)(\lambda^2 + 2\lambda + 4)$$
>
> **Passo 4: le radici del pezzo di secondo grado**, cioè $\lambda^2 + 2\lambda + 4$. Il discriminante è $4 - 16 = -12$. È negativo: nessuna radice reale. Nei numeri complessi la sua radice quadrata è $i\sqrt{12} = 2i\sqrt 3$.
> $$\lambda = \frac{-2 \pm 2i\sqrt 3}{2} = -1 \pm i\sqrt 3$$
>
> **Risposta:** (e), come con la soluzione veloce.

### Errori da evitare

- Accettare il vettore nullo come autovettore, oppure scartare lo zero come autovalore.
- Togliere $\lambda$ anche fuori dalla diagonale. Va tolto **solo** sulla diagonale.
- Moltiplicare tutto il determinante fino ad avere un polinomio di terzo grado, e poi non riuscire a trovarne le radici. Meglio sviluppare lungo la riga o la colonna con più zeri e tenere fuori il pezzo «numero meno $\lambda$».
- Leggere gli autovalori sulla diagonale di una matrice che non è triangolare.
- Dimenticare i controlli: la somma degli autovalori è la traccia, il loro prodotto è il determinante, e da ogni autovettore deve uscire un suo multiplo.
- Mettere gli autovalori in $D$ in un ordine diverso da quello delle colonne di $M$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione conviene copiare queste righe.
>
> | Che cosa | Da scrivere |
> |---|---|
> | autovettore | $v \neq 0$ e $T(v) = \lambda v$ |
> | polinomio caratteristico | $p_A(\lambda) = \det(A - \lambda I)$ |
> | matrice con 2 righe | $p_A(\lambda) = \lambda^2 - \tr(A)\,\lambda + \det A$ |
> | autovalori | le radici del polinomio caratteristico |
> | autovettori | le soluzioni non nulle di $(A - \lambda I)v = 0$ |
> | matrice triangolare | gli autovalori sono i numeri sulla diagonale |
> | controllo | somma degli autovalori = traccia, prodotto = determinante |
> | diagonalizzazione | $D = M^{-1}AM$, autovettori in colonna in $M$, controllo $AM = MD$ |
> | potenze | $A^k = MD^kM^{-1}$ |

## Quiz

```quiz
D: Sia $T : \R^2 \to \R^2$, $T(x, y) = (x + 2y,\ 3y)$. Quale di questi vettori è un autovettore di $T$?
+ $(1, 1)$
- $(0, 1)$
- $(1, 2)$
- $(2, 1)$
- $T$ non ha autovettori reali.
= La domanda chiede: da quale di questi vettori la macchina fa uscire un suo multiplo? Si prova una risposta alla volta, mettendo i due numeri al posto di $x$ e di $y$. Da $(1, 1)$ esce $(1 + 2 \cdot 1,\ 3 \cdot 1) = (3, 3)$, che è 3 volte $(1, 1)$: è un autovettore, con autovalore 3. Da $(0, 1)$ esce $(2, 3)$: il primo posto dovrebbe restare 0, quindi no. Da $(1, 2)$ esce $(5, 6)$: servirebbe «per 5» nel primo posto e «per 3» nel secondo, quindi no. Da $(2, 1)$ esce $(4, 3)$: servirebbe «per 2» e «per 3», quindi no. La risposta «$T$ non ha autovettori reali» è falsa. La matrice della macchina ha le righe $(1, 2)$ e $(0, 3)$: è triangolare, e i suoi autovalori sono i numeri reali 1 e 3 sulla diagonale. Domanda simile a quella dell'appello del 03/07/2026, domanda 2.

D: L'insieme degli autovalori di $T : \R^3 \to \R^3$, $T(x, y, z) = (2x + z,\ x + 3y - z,\ z)$, è:
+ $\{1, 2, 3\}$
- $\{2, 3\}$
- $\{0, 1, 3\}$
- $\{-1, 2, 3\}$
- $\{\}$ (nessun autovalore reale)
= Si scrive la matrice, si toglie $\lambda$ sulla diagonale e si calcola il determinante. Le righe della matrice sono $(2, 0, 1)$, poi $(1, 3, -1)$, poi $(0, 0, 1)$. Dopo aver tolto $\lambda$, la terza riga è $(0,\ 0,\ 1 - \lambda)$: ha due zeri, quindi si sviluppa lungo quella. Resta un solo pezzo: $1 - \lambda$ per il determinante della matrice con le righe $(2 - \lambda,\ 0)$ e $(1,\ 3 - \lambda)$. Quel determinante è $(2 - \lambda)(3 - \lambda) - 0 \cdot 1$. Quindi il polinomio caratteristico è $(1 - \lambda)(2 - \lambda)(3 - \lambda)$, e le sue radici sono 1, 2 e 3. Controllo: la somma è 6, come la traccia $2 + 3 + 1$. La risposta $\{2, 3\}$ dimentica il pezzo $1 - \lambda$ tenuto fuori. Domanda simile a quelle degli appelli del 07/02/2025 (domanda 8) e del 05/02/2026 (domanda 8).

D: L'endomorfismo $T(x, y, z) = (x,\ y - 2z,\ y + z)$ di $\R^3$ ha autovalore $\lambda_1 = 1$. Quali sono gli altri autovalori (in $\C$)?
+ $1 \pm i\sqrt 2$
- $\pm(1 + i\sqrt 2)$
- $1 \pm \sqrt 2$
- $-1 \pm i\sqrt 2$
- $2 \pm i$
= La matrice ha tre autovalori, contando anche quelli complessi: uno è dato, si cercano gli altri due. Le righe della matrice sono $(1, 0, 0)$, poi $(0, 1, -2)$, poi $(0, 1, 1)$. Tolto $\lambda$ sulla diagonale, la prima riga è $(1 - \lambda,\ 0,\ 0)$ e si sviluppa lungo quella. Resta $1 - \lambda$ per il determinante della matrice con le righe $(1 - \lambda,\ -2)$ e $(1,\ 1 - \lambda)$, che vale $(1 - \lambda)^2 + 2$. Il primo pezzo dà l'autovalore 1. Il secondo è zero quando $(1 - \lambda)^2 = -2$. Nei numeri complessi i numeri con quadrato $-2$ sono $i\sqrt 2$ e $-i\sqrt 2$, quindi $\lambda = 1 \pm i\sqrt 2$. Controllo con la traccia: nella somma dei tre autovalori i pezzi con la $i$ si cancellano e resta $1 + 1 + 1 = 3$, proprio la traccia. La risposta $1 \pm \sqrt 2$ dimentica la $i$: darebbe due numeri reali, ma il quadrato di un numero reale non può fare $-2$. Domanda simile a quella dell'appello del 02/09/2025, domanda 4.

D: $T(x, y) = (2x,\ x + 3y)$ ha autovalori 2 e 3. Una base di autovettori è:
+ $\{(1, -1), (0, 1)\}$
- $\{(2, 1), (0, 3)\}$
- $\{(1, 1), (0, 1)\}$
- $\{(1, 0), (0, 1)\}$
- $\{(1, -1), (2, -2)\}$
= Serve un autovettore per ogni autovalore, e i due vettori non devono stare sulla stessa retta. Si prova ogni vettore proposto nella formula della macchina. Da $(0, 1)$ esce $(0, 3)$, cioè 3 volte $(0, 1)$: è un autovettore con autovalore 3. Da $(1, -1)$ esce $(2,\ 1 - 3) = (2, -2)$, cioè 2 volte $(1, -1)$: è un autovettore con autovalore 2. I due vettori non sono uno multiplo dell'altro, quindi formano una base. Le altre risposte non vanno bene. I vettori $(2, 1)$ e $(0, 3)$ sono le colonne della matrice, e da $(2, 1)$ esce $(4, 5)$, che non è un suo multiplo. Da $(1, 1)$ esce $(2, 4)$ e da $(1, 0)$ esce $(2, 1)$: nessuno dei due è un autovettore. Nella risposta con $(1, -1)$ e $(2, -2)$ il secondo vettore è il doppio del primo: sono due autovettori sulla stessa retta, e non formano una base. Domanda simile a quella dell'appello del 03/06/2026, domanda 6.

D: Sia $\lambda$ un autovalore dell'endomorfismo $T : \R^n \to \R^n$. Quale di queste affermazioni è **sempre falsa**?
+ $\Ker(T - \lambda\,\id) = \{0\}$
- $\lambda = 0$
- $T$ è invertibile.
- $p_T(\lambda) = 0$
- $T - \lambda\,\id$ non è iniettiva.
= La domanda chiede quale frase non può mai essere vera quando $\lambda$ è un autovalore. Due simboli: $\id$ è la macchina identità, che lascia ogni vettore com'è, e $\Ker$ è il nucleo, cioè l'insieme dei vettori mandati in zero. Se $\lambda$ è un autovalore, c'è un vettore non nullo $v$ con $T(v) = \lambda v$. Portando tutto a sinistra, la macchina $T - \lambda\,\id$ manda $v$ in zero. Quindi nel suo nucleo c'è un vettore non nullo: il nucleo non è mai fatto del solo vettore nullo. La frase con $\Ker$ è sempre falsa. Due frasi sono invece sempre vere. La frase «$p_T(\lambda) = 0$» lo è perché un autovalore è una radice del polinomio caratteristico (Proposizione 17.13). La frase «non è iniettiva» lo è perché una macchina che manda in zero un vettore non nullo manda due vettori diversi nello stesso vettore (lezione L14). Le altre due frasi possono succedere: l'autovalore può essere 0, e $T$ può essere invertibile quando 0 non è tra i suoi autovalori. Domanda simile a quella dell'appello del 03/06/2025, domanda 8.

D: Il polinomio caratteristico di $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ è:
+ $\lambda^2 - 5\lambda - 2$
- $\lambda^2 + 5\lambda - 2$
- $\lambda^2 - 5\lambda + 10$
- $(1 - \lambda)(4 - \lambda)$
- $\lambda^2 - 2\lambda - 5$
= Si toglie $\lambda$ sulla diagonale e si calcola il determinante con «diagonale meno l'altra diagonale»: viene $(1 - \lambda)(4 - \lambda) - 2 \cdot 3$. Il primo prodotto fa $4 - 5\lambda + \lambda^2$. Togliendo 6 resta $\lambda^2 - 5\lambda - 2$. Controllo con la formula veloce: la traccia è $1 + 4 = 5$ e il determinante è $4 - 6 = -2$. La risposta $(1 - \lambda)(4 - \lambda)$ è la trappola: dimentica di togliere il prodotto dell'altra diagonale. Andrebbe bene solo per una matrice triangolare.

D: Sia $A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$. Quanto vale l'elemento di posto $(1, 2)$ di $A^{10}$?
N: 1023
= L'elemento di posto $(1, 2)$ è il numero nella riga 1 e nella colonna 2. Per una potenza così alta si usa la formula $A^k = MD^kM^{-1}$. La matrice è triangolare, quindi i suoi autovalori sono 1 e 2. Da $(1, 0)$ esce $(1, 0)$: è un autovettore con autovalore 1. Da $(1, 1)$ esce $(2, 2)$: è un autovettore con autovalore 2. Quindi $M$ ha le colonne $(1, 0)$ e $(1, 1)$, e la sua inversa ha le righe $(1, -1)$ e $(0, 1)$. La matrice $D^{10}$ ha sulla diagonale 1 e $2^{10} = 1024$. Il prodotto $MD^{10}$ ha le righe $(1, 1024)$ e $(0, 1024)$. Moltiplicando per $M^{-1}$, il numero nella riga 1 e nella colonna 2 è $1 \cdot (-1) + 1024 \cdot 1 = 1023$. Controllo della stessa formula con l'esponente 2: darebbe $4 - 1 = 3$, e infatti $A^2$ ha le righe $(1, 3)$ e $(0, 4)$.

D: Se $v$ è un autovettore di $T$ con autovalore $\lambda$, allora il vettore $3v$ è:
+ un autovettore di $T$ con autovalore $\lambda$.
- un autovettore di $T$ con autovalore $3\lambda$.
- un autovettore di $T$ con autovalore $\lambda / 3$.
- un autovettore solo se $\lambda \neq 0$.
- non è un autovettore.
= È la regola dei multipli: un multiplo non nullo di un autovettore è un autovettore con lo stesso autovalore. Il conto: una macchina lineare rispetta i multipli, quindi $T(3v) = 3T(v) = 3\lambda v = \lambda \cdot (3v)$. Da $3v$ esce $\lambda$ volte $3v$, e $3v$ non è il vettore nullo. La risposta con $3\lambda$ è la trappola: il 3 moltiplica il vettore, non l'autovalore. La regola vale per ogni autovalore, anche per lo zero. È l'osservazione sui multipli che viene dopo l'Esempio 17.4.

D: Quale di queste matrici reali **non** ha autovalori reali?
+ $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & -3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$
= Una matrice non ha autovalori reali quando il suo polinomio caratteristico non ha radici reali. Per una matrice con 2 righe il polinomio è $\lambda^2$, meno la traccia per $\lambda$, più il determinante. La matrice con le righe $(0, -1)$ e $(1, 0)$ ha traccia 0 e determinante $0 \cdot 0 - (-1) \cdot 1 = 1$. Il suo polinomio è $\lambda^2 + 1$, che non è mai zero per un numero reale, perché un quadrato non è negativo. È la rotazione di un quarto di giro. La matrice con le righe $(0, 1)$ e $(1, 0)$ ha traccia 0 e determinante $-1$: il polinomio $\lambda^2 - 1$ ha le radici 1 e $-1$. Le due matrici con uno 0 sotto la diagonale sono triangolari, e i loro autovalori si leggono sulla diagonale: 1 per una, 2 e $-3$ per l'altra. La matrice con le righe $(1, 2)$ e $(2, 1)$ ha traccia 2 e determinante $1 - 4 = -3$: il polinomio $\lambda^2 - 2\lambda - 3$ ha discriminante $4 + 12 = 16$ e radici 3 e $-1$.

D: Le matrici $A$ e $B$ sono simili e $p_A(\lambda) = \lambda^2 - 3\lambda + 2$. Quale affermazione è vera?
+ $B$ ha autovalori $1$ e $2$.
- $B = A$.
- $A$ e $B$ hanno gli stessi autovettori.
- $\det B = 3$.
- $\tr B = 2$.
= Matrici simili hanno lo stesso polinomio caratteristico, quindi anche quello di $B$ è $\lambda^2 - 3\lambda + 2$. Il discriminante è $9 - 8 = 1$, e le radici sono $\frac{3 + 1}{2} = 2$ e $\frac{3 - 1}{2} = 1$: gli autovalori di $B$ sono 1 e 2. Dalla formula veloce si leggono anche la traccia, che è 3, e il determinante, che è 2. Le due risposte con $\det B$ e con $\tr B$ hanno questi due numeri scambiati. Simili non vuol dire uguali. E gli autovettori di solito cambiano. Nell'Esempio 16.10 il vettore $(0, 1)$ è un autovettore della matrice con le righe $(1, 0)$ e $(0, -1)$. Non lo è della matrice simile con le righe $(1, 1)$ e $(0, -1)$: da lì esce $(1, -1)$.
```

## Esercizi

::: esercizio base Multiplo oppure no?
Per ogni coppia di vettori di' se il secondo è un multiplo del primo, e di quante volte: (a) $(1, 2)$ e $(3, 6)$; (b) $(2, -1)$ e $(-4, 2)$; (c) $(1, 1)$ e $(2, 3)$; (d) $(0, 1)$ e $(4, 2)$.
::: soluzione
Il metodo: cerco il numero giusto guardando il primo posto, poi controllo se funziona anche nel secondo.

(a) **Sì, 3 volte.** Nel primo posto si passa da 1 a 3: serve «per 3». Nel secondo posto $2 \cdot 3 = 6$: funziona.

(b) **Sì, $-2$ volte.** Nel primo posto si passa da 2 a $-4$: serve «per $-2$». Nel secondo posto $(-1) \cdot (-2) = 2$: funziona.

(c) **No.** Nel primo posto serve «per 2». Nel secondo $1 \cdot 2 = 2$, ma lì c'è 3.

(d) **No.** Un multiplo di $(0, 1)$ ha sempre 0 nel primo posto. Qui c'è 4.
:::

::: esercizio base Un autovettore con un solo prodotto
La matrice $A$ ha le righe $(2, 1)$ e $(0, 4)$. Per ognuno dei vettori $(1, 0)$, $(1, 2)$ e $(0, 1)$ calcola $Av$ e di' se è un autovettore. Se lo è, scrivi il suo autovalore.
::: soluzione
Per ogni vettore faccio il prodotto una riga alla volta, poi guardo se esce un multiplo.

1. Per $(1, 0)$: esce $(2 \cdot 1 + 1 \cdot 0,\ 0 \cdot 1 + 4 \cdot 0) = (2, 0)$. È 2 volte $(1, 0)$. **Autovettore con autovalore 2.**
2. Per $(1, 2)$: esce $(2 \cdot 1 + 1 \cdot 2,\ 0 \cdot 1 + 4 \cdot 2) = (4, 8)$. È 4 volte $(1, 2)$. **Autovettore con autovalore 4.**
3. Per $(0, 1)$: esce $(2 \cdot 0 + 1 \cdot 1,\ 0 \cdot 0 + 4 \cdot 1) = (1, 4)$. Un multiplo di $(0, 1)$ ha 0 nel primo posto, e qui c'è 1. **Non è un autovettore.**

Controllo: la matrice è triangolare, quindi i suoi autovalori sono i numeri sulla diagonale, 2 e 4. Sono proprio i due trovati.
:::

::: esercizio base Dal polinomio caratteristico agli autovalori
Il polinomio caratteristico di una matrice è: (a) $(5 - \lambda)(1 - \lambda)$; (b) $\lambda^2 - 6\lambda + 8$; (c) $\lambda^2 + 4$. In ogni caso trova gli autovalori reali.
::: soluzione
Gli autovalori sono le radici del polinomio, cioè i numeri che lo fanno diventare zero.

(a) Il polinomio è già scritto come prodotto. È zero quando è zero uno dei due pezzi: $\lambda = 5$ oppure $\lambda = 1$. **Autovalori 5 e 1.**

(b) Uso la formula per il secondo grado, con $a = 1$, $b = -6$, $c = 8$.

1. Discriminante: $(-6)^2 - 4 \cdot 1 \cdot 8 = 36 - 32 = 4$. La sua radice quadrata è 2.
2. Radici: $\frac{6 + 2}{2} = 4$ e $\frac{6 - 2}{2} = 2$.

**Autovalori 4 e 2.** Controllo: $4^2 - 6 \cdot 4 + 8 = 16 - 24 + 8 = 0$.

(c) Qui $a = 1$, $b = 0$, $c = 4$. Il discriminante è $0 - 16 = -16$: è negativo. **Nessun autovalore reale.** Si vede anche senza formula: un quadrato non è mai negativo, quindi $\lambda^2 + 4$ vale almeno 4.
:::

::: esercizio base Controllare se un vettore è un autovettore
Sia $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Quali tra $(1, 1)$, $(1, -1)$, $(1, 0)$ sono autovettori di $A$, e con quale autovalore?
::: soluzione
Per ogni vettore calcolo $Av$, una riga alla volta, e guardo se esce un multiplo.

1. Per $(1, 1)$: esce $(2 \cdot 1 + 1 \cdot 1,\ 1 \cdot 1 + 2 \cdot 1) = (3, 3)$. È 3 volte $(1, 1)$. **Autovettore con autovalore 3.**
2. Per $(1, -1)$: esce $(2 \cdot 1 + 1 \cdot (-1),\ 1 \cdot 1 + 2 \cdot (-1)) = (1, -1)$. È 1 volta $(1, -1)$. **Autovettore con autovalore 1.**
3. Per $(1, 0)$: esce $(2 \cdot 1 + 1 \cdot 0,\ 1 \cdot 1 + 2 \cdot 0) = (2, 1)$. Un multiplo di $(1, 0)$ ha 0 nel secondo posto, e qui c'è 1. **Non è un autovettore.**

Controllo con il polinomio caratteristico. La traccia è $2 + 2 = 4$ e il determinante è $2 \cdot 2 - 1 \cdot 1 = 3$. Con la formula veloce il polinomio è $\lambda^2 - 4\lambda + 3$. Il discriminante è $16 - 12 = 4$, e le radici sono $\frac{4 + 2}{2} = 3$ e $\frac{4 - 2}{2} = 1$. Sono proprio i due autovalori trovati.
:::

::: esercizio base Autovalori di una matrice triangolare
Trova gli autovalori di $A = \begin{pmatrix} 2 & 5 & -1 \\ 0 & -1 & 7 \\ 0 & 0 & 3 \end{pmatrix}$ spiegando perché non serve sviluppare tutto il determinante. Poi trova un autovettore per l'autovalore $2$.
::: soluzione
**Gli autovalori.**

1. La matrice è triangolare: sotto la diagonale ci sono solo zeri. Togliendo $\lambda$ sulla diagonale resta triangolare:
   $$A - \lambda I = \begin{pmatrix} 2 - \lambda & 5 & -1 \\ 0 & -1 - \lambda & 7 \\ 0 & 0 & 3 - \lambda \end{pmatrix}$$
2. Il determinante di una matrice triangolare è il prodotto dei numeri sulla diagonale (lezione L09). Quindi
   $$p_A(\lambda) = (2 - \lambda)(-1 - \lambda)(3 - \lambda)$$
3. Il prodotto è zero quando è zero uno dei tre pezzi. Gli autovalori sono $2$, $-1$ e $3$: i numeri sulla diagonale.

**Un autovettore per l'autovalore 2.**

4. Tolgo 2 sulla diagonale:
   $$A - 2I = \begin{pmatrix} 0 & 5 & -1 \\ 0 & -3 & 7 \\ 0 & 0 & 1 \end{pmatrix}$$
5. Chiamo $(x, y, z)$ il vettore che cerco. Le tre righe danno tre equazioni: $5y - z = 0$, poi $-3y + 7z = 0$, poi $z = 0$.
6. La terza dice $z = 0$. Nella prima resta $5y = 0$, quindi $y = 0$. La seconda è rispettata: $-3 \cdot 0 + 7 \cdot 0 = 0$.
7. La $x$ non compare in nessuna equazione: è libera, la scelgo io. Con $x = 1$ l'autovettore è $(1, 0, 0)$.

Controllo: moltiplicare la matrice per $(1, 0, 0)$ dà la sua prima colonna, $(2, 0, 0)$. È 2 volte $(1, 0, 0)$.
:::

::: esercizio base Autovalori, autovettori, $M$ e $D$
Trova autovalori e autovettori di $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ e scrivi $M$ invertibile e $D$ diagonale con $D = M^{-1}AM$.
::: soluzione
1. **Polinomio caratteristico.** Uso la formula veloce. La traccia è $4 + 3 = 7$. Il determinante è $4 \cdot 3 - 1 \cdot 2 = 10$. Quindi
   $$p_A(\lambda) = \lambda^2 - 7\lambda + 10$$
2. **Autovalori.** Il discriminante è $49 - 40 = 9$, con radice quadrata 3. Le radici sono $\frac{7 + 3}{2} = 5$ e $\frac{7 - 3}{2} = 2$. Controllo: la somma è 7 come la traccia, il prodotto è 10 come il determinante.
3. **Autovettori dell'autovalore 2.** Tolgo 2 sulla diagonale:
   $$A - 2I = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$$
   Chiamo $(x, y)$ il vettore che cerco: ogni riga, moltiplicata per il vettore, deve dare 0. Le due righe sono uguali. Resta l'equazione $2x + y = 0$, cioè $y = -2x$. Scelgo $x = 1$: l'autovettore è $(1, -2)$.
4. **Autovettori dell'autovalore 5.** Tolgo 5 sulla diagonale:
   $$A - 5I = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$$
   La seconda riga è la prima moltiplicata per $-2$. Resta l'equazione $-x + y = 0$, cioè $y = x$. Scelgo $x = 1$: l'autovettore è $(1, 1)$.
5. **Le due matrici.** Autovettori in colonna, autovalori nello stesso ordine:
   $$M = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix} \qquad\qquad D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$$
6. **$M$ è invertibile.** Il suo determinante è $1 \cdot 1 - 1 \cdot (-2) = 3$, diverso da zero.

Controllo degli autovettori: da $(1, -2)$ esce $(4 - 2,\ 2 - 6) = (2, -4)$, cioè 2 volte il vettore. Da $(1, 1)$ esce $(4 + 1,\ 2 + 3) = (5, 5)$, cioè 5 volte il vettore.

Controllo delle due matrici con $AM = MD$:

$$AM = \begin{pmatrix} 4 \cdot 1 + 1 \cdot (-2) & 4 \cdot 1 + 1 \cdot 1 \\ 2 \cdot 1 + 3 \cdot (-2) & 2 \cdot 1 + 3 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$$

$$MD = \begin{pmatrix} 1 \cdot 2 + 1 \cdot 0 & 1 \cdot 0 + 1 \cdot 5 \\ -2 \cdot 2 + 1 \cdot 0 & -2 \cdot 0 + 1 \cdot 5 \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$$

Sono uguali.
:::

::: esercizio medio Una formula per tutte le potenze
Con la matrice $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ dell'esercizio precedente, trova una formula per $A^n$ e controllala per $n = 2$.
::: soluzione
Uso la formula $A^n = MD^nM^{-1}$, con le matrici $M$ e $D$ dell'esercizio 6.

1. **L'inversa di $M$.** Il determinante di $M$ è 3. Scambio i due numeri sulla diagonale: sono 1 e 1, quindi restano uguali. Cambio segno agli altri due: 1 diventa $-1$, e $-2$ diventa 2. Divido per 3.
   $$M^{-1} = \frac 13\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$$
2. **La potenza di $D$.** Elevo i numeri sulla diagonale.
   $$D^n = \begin{pmatrix} 2^n & 0 \\ 0 & 5^n \end{pmatrix}$$
3. **Il prodotto $MD^n$.**
   $$\begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} 2^n & 0 \\ 0 & 5^n \end{pmatrix} = \begin{pmatrix} 1 \cdot 2^n + 1 \cdot 0 & 1 \cdot 0 + 1 \cdot 5^n \\ -2 \cdot 2^n + 1 \cdot 0 & -2 \cdot 0 + 1 \cdot 5^n \end{pmatrix} = \begin{pmatrix} 2^n & 5^n \\ -2^{n+1} & 5^n \end{pmatrix}$$
   In basso a sinistra ho scritto $-2 \cdot 2^n$ come $-2^{n+1}$: moltiplicare per 2 alza l'esponente di uno.
4. **Si moltiplica per $M^{-1}$**, tenendo fuori la frazione $\frac 13$. I quattro numeri del prodotto, uno per riga:
   - in alto a sinistra: $2^n \cdot 1 + 5^n \cdot 2 = 2^n + 2 \cdot 5^n$;
   - in alto a destra: $2^n \cdot (-1) + 5^n \cdot 1 = -2^n + 5^n$;
   - in basso a sinistra: $-2^{n+1} \cdot 1 + 5^n \cdot 2 = -2^{n+1} + 2 \cdot 5^n$;
   - in basso a destra: $-2^{n+1} \cdot (-1) + 5^n \cdot 1 = 2^{n+1} + 5^n$.
5. **La formula.**
   $$A^n = \frac 13\begin{pmatrix} 2^n + 2 \cdot 5^n & -2^n + 5^n \\ -2^{n+1} + 2 \cdot 5^n & 2^{n+1} + 5^n \end{pmatrix}$$

**Controllo per $n = 2$.** Servono $2^2 = 4$, poi $2^3 = 8$, poi $5^2 = 25$. La formula dà

$$\frac 13\begin{pmatrix} 4 + 50 & -4 + 25 \\ -8 + 50 & 8 + 25 \end{pmatrix} = \frac 13\begin{pmatrix} 54 & 21 \\ 42 & 33 \end{pmatrix} = \begin{pmatrix} 18 & 7 \\ 14 & 11 \end{pmatrix}$$

Il prodotto diretto dà

$$A^2 = \begin{pmatrix} 4 \cdot 4 + 1 \cdot 2 & 4 \cdot 1 + 1 \cdot 3 \\ 2 \cdot 4 + 3 \cdot 2 & 2 \cdot 1 + 3 \cdot 3 \end{pmatrix} = \begin{pmatrix} 18 & 7 \\ 14 & 11 \end{pmatrix}$$

I due risultati coincidono.
:::

::: esercizio medio Il polinomio caratteristico dell'Esempio 17.4
Calcola il polinomio caratteristico di $A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 1 & 1 \\ 3 & 0 & 2 \end{pmatrix}$. Quali sono gli autovalori reali? E quelli complessi? $A$ è diagonalizzabile su $\R$?
::: soluzione
**Il polinomio caratteristico.**

1. Tolgo $\lambda$ sulla diagonale:
   $$A - \lambda I = \begin{pmatrix} 1 - \lambda & 1 & -1 \\ 2 & 1 - \lambda & 1 \\ 3 & 0 & 2 - \lambda \end{pmatrix}$$
2. La seconda colonna, $(1,\ 1 - \lambda,\ 0)$, ha uno zero: sviluppo lungo quella. I segni dei suoi tre posti, dalla scacchiera, sono meno, più, meno.
3. Primo pezzo: il numero 1, con il segno meno. Cancello la prima riga e la seconda colonna. Restano le righe $(2,\ 1)$ e $(3,\ 2 - \lambda)$. Il determinante è $2 \cdot (2 - \lambda) - 1 \cdot 3 = 4 - 2\lambda - 3$, cioè $1 - 2\lambda$. Con il segno meno il pezzo vale $-1 + 2\lambda$.
4. Secondo pezzo: il numero $1 - \lambda$, con il segno più. Cancello la seconda riga e la seconda colonna. Restano le righe $(1 - \lambda,\ -1)$ e $(3,\ 2 - \lambda)$. Il determinante è $(1 - \lambda)(2 - \lambda) - (-1) \cdot 3$, cioè $(1 - \lambda)(2 - \lambda) + 3$. Il prodotto fa $2 - 3\lambda + \lambda^2$, quindi il determinante è $\lambda^2 - 3\lambda + 5$.
5. Moltiplico il secondo pezzo per $1 - \lambda$:
   $$(1 - \lambda)(\lambda^2 - 3\lambda + 5) = \lambda^2 - 3\lambda + 5 - \lambda^3 + 3\lambda^2 - 5\lambda = -\lambda^3 + 4\lambda^2 - 8\lambda + 5$$
6. Sommo i due pezzi:
   $$p_A(\lambda) = -1 + 2\lambda - \lambda^3 + 4\lambda^2 - 8\lambda + 5 = -\lambda^3 + 4\lambda^2 - 6\lambda + 4$$

**Gli autovalori.**

7. Dall'Esempio 17.4 so che 2 è un autovalore. Controllo: $-8 + 16 - 12 + 4 = 0$.
8. Divido per $\lambda - 2$ con la regola di Ruffini (lezione L04). I numeri del polinomio sono $-1$, 4, $-6$ e 4. Il primo si copia. Poi a ogni passo si moltiplica per 2 l'ultimo numero trovato e si somma al successivo.
   - Primo numero: $-1$.
   - Secondo: $4 + 2 \cdot (-1) = 2$.
   - Terzo: $-6 + 2 \cdot 2 = -2$.
   - Quarto: $4 + 2 \cdot (-2) = 0$. È il resto.

   Il quoziente è $-\lambda^2 + 2\lambda - 2$. Quindi
   $$p_A(\lambda) = -(\lambda - 2)(\lambda^2 - 2\lambda + 2)$$
9. Il pezzo di secondo grado ha discriminante $4 - 8 = -4$: è negativo, quindi non ci sono altre radici reali. Nei numeri complessi la radice quadrata di $-4$ è $2i$, e le radici sono
   $$\lambda = \frac{2 \pm 2i}{2} = 1 \pm i$$

**Autovalori reali:** solo 2. **Autovalori complessi:** $2$, poi $1 + i$, poi $1 - i$.

Controllo: la somma dei tre è $2 + 1 + 1 = 4$, perché i pezzi con la $i$ si cancellano. La traccia è $1 + 1 + 2 = 4$.

**La matrice è diagonalizzabile con i numeri reali?**

10. Con i numeri reali l'unico autovalore è 2. Cerco i suoi autovettori. Tolgo 2 sulla diagonale:
    $$A - 2I = \begin{pmatrix} -1 & 1 & -1 \\ 2 & -1 & 1 \\ 3 & 0 & 0 \end{pmatrix}$$
11. Chiamo $(x, y, z)$ il vettore che cerco. La terza riga dice $3x = 0$, cioè $x = 0$. Con $x = 0$ la prima riga diventa $y - z = 0$, cioè $y = z$. La seconda diventa $-y + z = 0$: dice la stessa cosa.
12. Gli autovettori sono i multipli di $(0, 1, 1)$: una sola retta.

Per una base dello spazio servono tre autovettori indipendenti. Qui tutti gli autovettori reali stanno su una retta. Quindi la matrice **non** è diagonalizzabile con i numeri reali.
:::

::: esercizio medio Un endomorfismo di $\R_1[x]$
Sia $T : \R_1[x] \to \R_1[x]$, $T(a + bx) = b + ax$. Trova autovalori e autovettori (come polinomi). $T$ è diagonalizzabile? Scrivi la matrice di $T$ in una base di autovettori.
::: soluzione
1. **La matrice.** Uso la base fatta dai polinomi $1$ e $x$. La macchina scambia i due numeri del polinomio. Da $1 = 1 + 0x$ esce $0 + 1x$, con coordinate $(0, 1)$: prima colonna. Da $x = 0 + 1x$ esce $1 + 0x$, con coordinate $(1, 0)$: seconda colonna.
   $$A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$
2. **Il polinomio caratteristico.** La traccia è 0. Il determinante è $0 \cdot 0 - 1 \cdot 1 = -1$. Con la formula veloce il polinomio è $\lambda^2 - 1$.
3. **Gli autovalori.** $\lambda^2 - 1 = 0$ vuol dire $\lambda^2 = 1$. I numeri con quadrato 1 sono $1$ e $-1$.
4. **Autovettori dell'autovalore 1.** Tolgo 1 sulla diagonale. Chiamo $(s, t)$ le coordinate che cerco, per non confonderle con la $x$ dei polinomi.
   $$A - I = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}$$
   La prima riga dice $-s + t = 0$, cioè $t = s$. La seconda dice la stessa cosa. Scelgo le coordinate $(1, 1)$: è il polinomio $1 + x$.
5. **Autovettori dell'autovalore $-1$.** Togliere $-1$ vuol dire sommare 1 sulla diagonale.
   $$A + I = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$$
   Le due righe dicono $s + t = 0$, cioè $t = -s$. Scelgo le coordinate $(1, -1)$: è il polinomio $1 - x$.
6. **Diagonalizzabile?** I polinomi $1 + x$ e $1 - x$ sono due autovettori, e non sono uno multiplo dell'altro. Lo spazio $\R_1[x]$ ha dimensione 2, quindi formano una base. La macchina è diagonalizzabile.
7. **La matrice nella base degli autovettori.** È diagonale, con gli autovalori nello stesso ordine dei vettori della base:
   $$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

Controllo sui polinomi. Da $1 + x$ esce $1 + x$: una volta sé stesso. Da $1 - x$ esce $-1 + x$, cioè $-(1 - x)$: meno una volta sé stesso.
:::

::: esercizio medio La rotazione di $90°$ su $\R$ e su $\C$ (oltre le dispense)
Sia $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$. (a) Mostra che $L_A : \R^2 \to \R^2$ non ha autovalori. (b) Considera $L_A : \C^2 \to \C^2$ con la stessa matrice: trova autovalori e autovettori. $A$ è diagonalizzabile su $\C$?
::: soluzione
Nel testo, $\R^2$ indica i vettori fatti da due numeri reali, e $\C^2$ quelli fatti da due numeri complessi.

**(a) Con i numeri reali.**

1. La traccia è 0. Il determinante è $0 \cdot 0 - (-1) \cdot 1 = 1$. Con la formula veloce il polinomio caratteristico è $\lambda^2 + 1$.
2. Per un numero reale il quadrato non è mai negativo. Quindi $\lambda^2 + 1$ vale almeno 1, e non è mai zero.
3. Nessuna radice reale vuol dire nessun autovalore reale, e quindi nessun autovettore fatto di numeri reali.

**(b) Con i numeri complessi.** Ricorda dalla lezione L02: con $i$ si fanno i conti come con una lettera, e ogni volta che compare $i \cdot i$ si scrive $-1$.

4. **Autovalori.** $\lambda^2 + 1 = 0$ vuol dire $\lambda^2 = -1$. I numeri complessi con quadrato $-1$ sono $i$ e $-i$.
5. **Autovettori dell'autovalore $i$.** Tolgo $i$ sulla diagonale:
   $$A - iI = \begin{pmatrix} -i & -1 \\ 1 & -i \end{pmatrix}$$
   Chiamo $(x, y)$ il vettore che cerco. La seconda riga dice $x - iy = 0$, cioè $x = iy$. Scelgo $y = 1$: l'autovettore è $(i, 1)$. La prima riga è rispettata: $-i \cdot i - 1 = 1 - 1 = 0$.
6. **Autovettori dell'autovalore $-i$.** Togliere $-i$ vuol dire sommare $i$ sulla diagonale:
   $$A + iI = \begin{pmatrix} i & -1 \\ 1 & i \end{pmatrix}$$
   La seconda riga dice $x + iy = 0$, cioè $x = -iy$. Scelgo $y = 1$: l'autovettore è $(-i, 1)$. La prima riga è rispettata: $i \cdot (-i) - 1 = 1 - 1 = 0$.
7. **Diagonalizzabile?** Metto i due autovettori in colonna e calcolo il determinante:
   $$\det\begin{pmatrix} i & -i \\ 1 & 1 \end{pmatrix} = i \cdot 1 - (-i) \cdot 1 = 2i$$
   Non è zero, quindi i due autovettori sono indipendenti. Con i numeri complessi la matrice è diagonalizzabile, e la matrice diagonale è
   $$D = \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix}$$

Controllo degli autovettori. Da $(i, 1)$ esce $(0 \cdot i - 1 \cdot 1,\ 1 \cdot i + 0 \cdot 1) = (-1, i)$. E $i$ volte $(i, 1)$ è $(i \cdot i,\ i) = (-1, i)$: uguali. Da $(-i, 1)$ esce $(-1, -i)$. E $-i$ volte $(-i, 1)$ è $(i \cdot i,\ -i) = (-1, -i)$: uguali.

La stessa matrice è diagonalizzabile con i numeri complessi ma non con i numeri reali (Martelli, Esempio 5.1.31). Negli appelli in cui il parametro è un numero complesso questa differenza conta.
:::

::: esercizio difficile Autovalore zero, potenze e inversa
Sia $A \in M(n, \K)$. (a) Dimostra che $0$ è un autovalore di $A$ se e solo se $A$ non è invertibile. (b) Dimostra che se $v$ è autovettore di $A$ con autovalore $\lambda$, allora $v$ è autovettore di $A^2$ con autovalore $\lambda^2$. (c) Se $A$ è invertibile e $Av = \lambda v$ con $v \neq 0$, dimostra che $\lambda \neq 0$ e che $v$ è autovettore di $A^{-1}$ con autovalore $\frac 1\lambda$.
::: soluzione
**(a)** Tre frasi che sono vere insieme oppure false insieme.

1. Lo 0 è un autovalore esattamente quando è una radice del polinomio caratteristico (Proposizione 17.13).
2. Mettendo 0 al posto di $\lambda$ nel polinomio caratteristico viene $\det(A - 0 \cdot I) = \det A$. Quindi 0 è una radice esattamente quando $\det A = 0$.
3. Il determinante è zero esattamente quando la matrice non è invertibile (Proposizione 10.8).

**(b)** Faccio passare $v$ due volte nella macchina.

1. $A^2 v$ vuol dire $A$ per $Av$.
2. Al posto di $Av$ scrivo $\lambda v$: ottengo $A(\lambda v)$.
3. Il numero $\lambda$ esce fuori: ottengo $\lambda \cdot Av$.
4. Di nuovo al posto di $Av$ scrivo $\lambda v$: ottengo $\lambda \cdot \lambda v = \lambda^2 v$.

Quindi $A^2 v = \lambda^2 v$. Il vettore $v$ non è nullo, quindi è un autovettore di $A^2$ con autovalore $\lambda^2$.

**(c)** Prima mostro che $\lambda$ non è zero, poi trovo l'autovalore dell'inversa.

1. Faccio finta che $\lambda$ sia 0. Allora $Av = 0$. Moltiplico a sinistra per $A^{-1}$: a sinistra resta $v$, a destra resta il vettore nullo. Quindi $v = 0$. Ma $v$ non è nullo: è impossibile. Quindi $\lambda \neq 0$.
2. Parto da $Av = \lambda v$ e moltiplico i due lati a sinistra per $A^{-1}$. A sinistra $A^{-1}A$ è l'identità, e resta $v$. A destra il numero esce fuori: $\lambda A^{-1}v$.
3. Ho ottenuto $v = \lambda A^{-1} v$. Divido per $\lambda$, che non è zero:
   $$A^{-1} v = \frac 1\lambda v$$

Quindi $v$ è un autovettore dell'inversa, con autovalore $\frac 1\lambda$.

**Controllo con i numeri.** La matrice dell'Esempio 17.2 ha autovalori 3 e 2.

- Il suo quadrato ha le righe $(9, 20)$ e $(0, 4)$. È triangolare, con autovalori 9 e 4: i quadrati di 3 e di 2.
- La sua inversa. Il determinante è $3 \cdot 2 - 4 \cdot 0 = 6$. Scambio i numeri sulla diagonale, cambio segno agli altri due, divido per 6:
  $$A^{-1} = \frac 16\begin{pmatrix} 2 & -4 \\ 0 & 3 \end{pmatrix}$$
  È triangolare, con autovalori $\frac 26 = \frac 13$ e $\frac 36 = \frac 12$: gli inversi di 3 e di 2.
:::

::: esercizio difficile Una matrice e la sua trasposta
(a) Dimostra che $A$ e ${}^tA$ hanno lo stesso polinomio caratteristico. (b) Mostra con $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ che però non hanno gli stessi autovettori.
::: soluzione
La **trasposta** di una matrice si ottiene scambiando le righe con le colonne (lezione L08). Si scrive ${}^tA$.

**(a)**

1. Trasporre una matrice non cambia i numeri sulla diagonale. Quindi fare prima la trasposta e poi togliere $\lambda$ sulla diagonale dà lo stesso risultato che fare prima la sottrazione e poi la trasposta. In formule: ${}^tA - \lambda I$ è la trasposta di $A - \lambda I$.
2. Una matrice e la sua trasposta hanno lo stesso determinante (lezione L09).
3. Quindi il determinante di ${}^tA - \lambda I$ è uguale al determinante di $A - \lambda I$. Il primo è il polinomio caratteristico di ${}^tA$, il secondo quello di $A$.

**(b)**

1. Scambio righe e colonne:
   $${}^tA = \begin{pmatrix} 3 & 0 \\ 4 & 2 \end{pmatrix}$$
   È triangolare, con autovalori 3 e 2: gli stessi di $A$, come dice il punto (a).
2. Il vettore $e_1 = (1, 0)$ è un autovettore di $A$ (Esempio 17.2). Lo faccio passare nella trasposta: esce $(3 \cdot 1 + 0 \cdot 0,\ 4 \cdot 1 + 2 \cdot 0) = (3, 4)$. Un multiplo di $e_1$ ha 0 nel secondo posto, e qui c'è 4. Quindi $e_1$ **non** è un autovettore della trasposta.

Per completezza, ecco gli autovettori della trasposta.

3. Autovalore 3. Tolgo 3 sulla diagonale:
   $${}^tA - 3I = \begin{pmatrix} 0 & 0 \\ 4 & -1 \end{pmatrix}$$
   Chiamo $(x, y)$ il vettore che cerco. Resta l'equazione $4x - y = 0$, cioè $y = 4x$. Con $x = 1$ l'autovettore è $(1, 4)$.
4. Autovalore 2. Tolgo 2 sulla diagonale:
   $${}^tA - 2I = \begin{pmatrix} 1 & 0 \\ 4 & 0 \end{pmatrix}$$
   Le due righe dicono $x = 0$. La $y$ è libera. Con $y = 1$ l'autovettore è $(0, 1)$.

Controllo. Da $(1, 4)$ esce $(3 \cdot 1 + 0 \cdot 4,\ 4 \cdot 1 + 2 \cdot 4) = (3, 12)$, cioè 3 volte il vettore. Da $(0, 1)$ esce $(0, 2)$, cioè 2 volte il vettore.
:::

::: esercizio esame Come all'esame: autovalori, autovettori e diagonalizzazione in $\R^3$
Sia $T : \R^3 \to \R^3$, $T(x, y, z) = (x + 2y,\ 2x + y,\ x + y + 2z)$.
(1) Scrivi la matrice $A$ di $T$ nella base canonica e calcola il polinomio caratteristico.
(2) Trova gli autovalori e, per ciascuno, un autovettore.
(3) Mostra che gli autovettori trovati formano una base di $\R^3$ e scrivi $M$ e $D$ con $D = M^{-1}AM$.
::: soluzione
**(1) La matrice e il polinomio caratteristico.**

1. Una riga per ogni posto del risultato. Dove una lettera manca scrivo 0.
   $$A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 0 \\ 1 & 1 & 2 \end{pmatrix}$$
2. Tolgo $\lambda$ sulla diagonale:
   $$A - \lambda I = \begin{pmatrix} 1 - \lambda & 2 & 0 \\ 2 & 1 - \lambda & 0 \\ 1 & 1 & 2 - \lambda \end{pmatrix}$$
3. La terza colonna, $(0,\ 0,\ 2 - \lambda)$, ha due zeri: sviluppo lungo quella. Conta solo l'ultimo numero, in un posto con il segno più. Cancello la terza riga e la terza colonna.
   $$p_A(\lambda) = (2 - \lambda) \cdot \det\begin{pmatrix} 1 - \lambda & 2 \\ 2 & 1 - \lambda \end{pmatrix} = (2 - \lambda)\big((1 - \lambda)^2 - 4\big)$$
4. Sviluppo il secondo pezzo: $(1 - \lambda)^2 - 4 = 1 - 2\lambda + \lambda^2 - 4 = \lambda^2 - 2\lambda - 3$.
   $$p_A(\lambda) = (2 - \lambda)(\lambda^2 - 2\lambda - 3)$$

**(2) Autovalori e autovettori.**

5. Il primo pezzo è zero per $\lambda = 2$. Per il secondo il discriminante è $4 + 12 = 16$, con radice quadrata 4. Le radici sono $\frac{2 + 4}{2} = 3$ e $\frac{2 - 4}{2} = -1$. Gli autovalori sono $3$, $-1$ e $2$. Scritto tutto come prodotto, il polinomio è $(2 - \lambda)(\lambda - 3)(\lambda + 1)$.
6. Controllo con la traccia: $1 + 1 + 2 = 4$, e $3 - 1 + 2 = 4$.
7. **Autovalore 3.** Tolgo 3 sulla diagonale:
   $$A - 3I = \begin{pmatrix} -2 & 2 & 0 \\ 2 & -2 & 0 \\ 1 & 1 & -1 \end{pmatrix}$$
   Chiamo $(x, y, z)$ il vettore che cerco. La prima riga dice $-2x + 2y = 0$, cioè $y = x$. La seconda dice la stessa cosa. La terza dice $x + y - z = 0$, cioè $z = x + y = 2x$. Con $x = 1$ l'autovettore è $(1, 1, 2)$.
8. **Autovalore $-1$.** Sommo 1 sulla diagonale:
   $$A + I = \begin{pmatrix} 2 & 2 & 0 \\ 2 & 2 & 0 \\ 1 & 1 & 3 \end{pmatrix}$$
   Le prime due righe dicono $2x + 2y = 0$, cioè $y = -x$. Nella terza, $x + y + 3z = 0$, la somma $x + y$ vale 0: resta $3z = 0$, cioè $z = 0$. Con $x = 1$ l'autovettore è $(1, -1, 0)$.
9. **Autovalore 2.** Tolgo 2 sulla diagonale:
   $$A - 2I = \begin{pmatrix} -1 & 2 & 0 \\ 2 & -1 & 0 \\ 1 & 1 & 0 \end{pmatrix}$$
   La prima riga dice $x = 2y$. Lo metto nella seconda, $2x - y = 0$: viene $4y - y = 3y = 0$, quindi $y = 0$ e poi $x = 0$. La terza, $x + y = 0$, è rispettata. La $z$ non compare: è libera. Con $z = 1$ l'autovettore è $(0, 0, 1)$.
10. Controllo dei tre autovettori, facendoli passare nella macchina:
    - da $(1, 1, 2)$ esce $(1 + 2,\ 2 + 1,\ 1 + 1 + 4) = (3, 3, 6)$, cioè 3 volte il vettore;
    - da $(1, -1, 0)$ esce $(1 - 2,\ 2 - 1,\ 1 - 1 + 0) = (-1, 1, 0)$, cioè $-1$ volte il vettore;
    - da $(0, 0, 1)$ esce $(0, 0, 2)$, cioè 2 volte il vettore.

**(3) La base e le due matrici.**

11. Metto i tre autovettori in colonna, e gli autovalori sulla diagonale nello stesso ordine:
    $$M = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \\ 2 & 0 & 1 \end{pmatrix} \qquad\qquad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$$
12. Calcolo il determinante di $M$ sviluppando lungo la terza colonna, $(0, 0, 1)$. Conta solo l'1, in un posto con il segno più. Cancellando la terza riga e la terza colonna restano le righe $(1, 1)$ e $(1, -1)$:
    $$\det M = 1 \cdot \big(1 \cdot (-1) - 1 \cdot 1\big) = -2$$
    Non è zero. Quindi le tre colonne sono indipendenti e formano una base dello spazio. Vale $D = M^{-1}AM$.

Controllo con $AM = MD$. Le colonne di $AM$ sono quello che esce dai tre autovettori: le ho calcolate al passo 10. Le colonne di $MD$ sono i tre autovettori moltiplicati per 3, per $-1$ e per 2. In tutti e due i casi viene

$$\begin{pmatrix} 3 & -1 & 0 \\ 3 & 1 & 0 \\ 6 & 0 & 2 \end{pmatrix}$$
:::

::: esercizio esame Come all'esame: $A = PDP^{-1}$ per una matrice triangolare
Sia $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 3 & 1 \\ 0 & 0 & -1 \end{pmatrix}$.
(1) Trova gli autovalori di $A$.
(2) Trova un autovettore per ciascun autovalore.
(3) Trova una matrice invertibile $P$ e una diagonale $D$ tali che $A = PDP^{-1}$, e controlla il risultato senza calcolare $P^{-1}$.
::: soluzione
In questo esercizio la matrice degli autovettori si chiama $P$ invece di $M$. È solo un altro nome: negli appelli si trovano tutti e due.

**(1) Gli autovalori.**

1. La matrice è triangolare: sotto la diagonale ci sono solo zeri. Gli autovalori sono i numeri sulla diagonale: $1$, $3$ e $-1$.

**(2) Un autovettore per ogni autovalore.** Chiamo $(x, y, z)$ il vettore che cerco.

2. **Autovalore 1.** Tolgo 1 sulla diagonale:
   $$A - I = \begin{pmatrix} 0 & 2 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & -2 \end{pmatrix}$$
   La prima riga dice $2y = 0$, cioè $y = 0$. La terza dice $-2z = 0$, cioè $z = 0$. La seconda, $2y + z = 0$, è rispettata. La $x$ è libera. Con $x = 1$ l'autovettore è $(1, 0, 0)$.
3. **Autovalore 3.** Tolgo 3 sulla diagonale:
   $$A - 3I = \begin{pmatrix} -2 & 2 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & -4 \end{pmatrix}$$
   La seconda riga dice $z = 0$, e la terza è rispettata. La prima dice $-2x + 2y = 0$, cioè $y = x$. Con $x = 1$ l'autovettore è $(1, 1, 0)$.
4. **Autovalore $-1$.** Sommo 1 sulla diagonale:
   $$A + I = \begin{pmatrix} 2 & 2 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$
   La terza riga è tutta di zeri e non dice niente. La seconda dice $4y + z = 0$, cioè $z = -4y$. La prima dice $2x + 2y = 0$, cioè $x = -y$. Scelgo $y = -1$, così $x = 1$ e $z = 4$: l'autovettore è $(1, -1, 4)$.

**(3) Le due matrici e il controllo.**

5. Autovettori in colonna, autovalori nello stesso ordine:
   $$P = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 4 \end{pmatrix} \qquad\qquad D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & -1 \end{pmatrix}$$
6. $P$ è triangolare, quindi il suo determinante è il prodotto della diagonale: $1 \cdot 1 \cdot 4 = 4$. Non è zero: $P$ è invertibile.
7. Moltiplicando a destra per $P$ i due lati di $A = PDP^{-1}$ si ottiene $AP = PD$. Basta controllare questa uguaglianza, una colonna alla volta.

| Colonna | In $AP$: la matrice per l'autovettore | In $PD$: l'autovettore per l'autovalore |
|---|---|---|
| 1 | $(1 + 0 + 0,\ 0,\ 0) = (1, 0, 0)$ | $1 \cdot (1, 0, 0) = (1, 0, 0)$ |
| 2 | $(1 + 2 + 0,\ 0 + 3 + 0,\ 0) = (3, 3, 0)$ | $3 \cdot (1, 1, 0) = (3, 3, 0)$ |
| 3 | $(1 - 2 + 0,\ 0 - 3 + 4,\ -4) = (-1, 1, -4)$ | $-1 \cdot (1, -1, 4) = (-1, 1, -4)$ |

Le colonne coincidono: $P$ e $D$ sono giuste.
:::

## Domande di ripasso

::: domanda Che cos'è un autovettore? E un autovalore?
Un autovettore di una macchina $T$ è un vettore non nullo che la macchina manda in un suo multiplo: $T(v) = \lambda v$. Il numero $\lambda$, che dice per quanto viene moltiplicato il vettore, è l'autovalore.
:::

::: domanda Perché il vettore nullo non può essere un autovettore, mentre $0$ può essere un autovalore?
Dal vettore nullo esce sempre il vettore nullo, che è multiplo di sé stesso con qualunque numero. Se lo accettassimo, ogni numero sarebbe un autovalore. L'autovalore 0 invece ha un significato preciso: i suoi autovettori sono i vettori non nulli che la macchina schiaccia su zero, cioè quelli del nucleo.
:::

::: domanda Che cosa succede ai multipli di un autovettore?
Ogni multiplo non nullo di un autovettore è ancora un autovettore, con lo stesso autovalore. Il motivo: la macchina rispetta i multipli, quindi $T(\mu v) = \mu T(v) = \lambda \cdot (\mu v)$. Tutta la retta dell'autovettore, tolto lo zero, è fatta di autovettori.
:::

::: domanda Perché si possono studiare gli autovettori usando solo le matrici?
Perché con le coordinate ogni macchina diventa una matrice. Se $A$ è la matrice della macchina in una base e $x$ è la lista delle coordinate di $v$, allora $T(v) = \lambda v$ vale esattamente quando $Ax = \lambda x$.
:::

::: domanda Perché una rotazione di angolo $\vartheta \neq 0, \pi$ non ha autovettori reali?
Perché ogni vettore non nullo viene girato di quell'angolo, ed esce dalla sua retta. I suoi multipli invece stanno tutti sulla sua retta: formano con lui un angolo di 0 oppure di mezzo giro. Con i conti: il polinomio caratteristico ha il discriminante negativo.
:::

::: domanda Quando un endomorfismo si chiama diagonalizzabile? Da dove viene il nome?
Quando lo spazio ha una base fatta tutta di suoi autovettori. Il nome viene dalla Proposizione 17.6: la matrice della macchina in una base è diagonale esattamente quando la base è fatta di autovettori. Sulla diagonale ci sono gli autovalori.
:::

::: domanda Quando una matrice è diagonalizzabile, e chi sono $M$ e $D$?
Quando è simile a una matrice diagonale: $D = M^{-1}AM$ per qualche matrice invertibile $M$. Le colonne di $M$ sono autovettori indipendenti. La matrice $D$ ha sulla diagonale i loro autovalori, nello stesso ordine.
:::

::: domanda Come si calcola $A^k$ se $A$ è diagonalizzabile?
Si scrive $A = MDM^{-1}$. Moltiplicando $A$ per sé stessa le coppie $M^{-1}M$ in mezzo spariscono, e resta $A^k = MD^kM^{-1}$. La potenza di $D$ si ottiene elevando alla $k$ i numeri sulla diagonale.
:::

::: domanda Che cos'è il polinomio caratteristico e che grado ha?
È il determinante della matrice dopo aver tolto $\lambda$ sulla diagonale: $p_A(\lambda) = \det(A - \lambda I)$. Per una matrice con $n$ righe ha grado $n$. Per una matrice con 2 righe si scrive subito: $\lambda^2$, meno la traccia per $\lambda$, più il determinante.
:::

::: domanda Perché il polinomio caratteristico di un endomorfismo non dipende dalla base?
Perché cambiando base si passa a una matrice simile, e due matrici simili hanno lo stesso polinomio caratteristico. Si dimostra con il Teorema di Binet: i determinanti di $M^{-1}$ e di $M$, moltiplicati, danno 1.
:::

::: domanda Perché gli autovalori sono le radici del polinomio caratteristico?
Un numero $\lambda$ è un autovalore quando c'è un vettore non nullo con $(A - \lambda I)v = 0$. Succede esattamente quando la matrice $A - \lambda I$ non è invertibile, cioè quando il suo determinante è zero. E quel determinante è il polinomio caratteristico (Proposizione 17.13).
:::

::: domanda Come si trovano gli autovettori una volta noto un autovalore $\lambda_0$?
Si mette $\lambda_0$ al posto di $\lambda$ e si risolve il sistema omogeneo $(A - \lambda_0 I)v = 0$. Le soluzioni non nulle sono gli autovettori. Il sistema ha sempre infinite soluzioni: se viene solo il vettore nullo, c'è un errore nel calcolo dell'autovalore.
:::

## Glossario

```glossario
Endomorfismo | Una macchina lineare in cui i vettori che escono stanno nello stesso spazio di quelli che entrano. Si scrive $T : V \to V$.
Autovettore | Un vettore non nullo che la macchina manda in un suo multiplo: $T(v) = \lambda v$ (Definizione 17.1). Esempio: $(1, 0)$ per la matrice dell'Esempio 17.2.
Autovalore | Il numero $\lambda$ per cui viene moltiplicato un autovettore. Dice di quanto la macchina lo allunga. Può essere 0.
Retta invariante | Una retta che la macchina manda dentro sé stessa. La retta dei multipli di un vettore è invariante esattamente quando quel vettore è un autovettore.
Punto fisso | Un vettore che esce dalla macchina uguale a com'è entrato. I punti fissi non nulli sono gli autovettori con autovalore 1.
Endomorfismo diagonalizzabile | Una macchina per cui esiste una base fatta tutta di suoi autovettori (Definizione 17.5).
Matrice diagonalizzabile | Una matrice simile a una matrice diagonale: $D = M^{-1}AM$ per qualche matrice invertibile $M$ (Definizione 17.7).
Matrice diagonale | Una matrice con zeri fuori dalla diagonale principale. Prodotti, determinante e potenze si calcolano un numero alla volta.
$M$ e $D$ | Le due matrici della diagonalizzazione. $M$ ha gli autovettori in colonna, $D$ ha gli autovalori sulla diagonale, nello stesso ordine. Controllo: $AM = MD$.
Potenza di una diagonalizzabile | Si calcola con $A^k = MD^kM^{-1}$: si eleva solo la matrice diagonale.
Polinomio caratteristico | Il determinante della matrice dopo aver tolto $\lambda$ sulla diagonale: $p_A(\lambda) = \det(A - \lambda I_n)$. Ha grado $n$ (Definizione 17.12).
Invarianza per similitudine | Matrici simili hanno lo stesso polinomio caratteristico. Per questo il polinomio caratteristico di un endomorfismo non dipende dalla base.
Formula $2 \times 2$ | Per una matrice con 2 righe: $p_A(\lambda) = \lambda^2 - \tr A\,\lambda + \det A$.
Matrice triangolare | Una matrice con tutti zeri sotto la diagonale, oppure tutti zeri sopra. I suoi autovalori sono i numeri sulla diagonale.
Rotazione $\mathrm{Rot}_\vartheta$ | La macchina che gira il piano di un angolo $\vartheta$. Se l'angolo non è 0 e non è $\pi$, non ha autovalori reali.
Traccia e autovalori | Quando hai tutti gli autovalori di una matrice: la loro somma è la traccia, il loro prodotto è il determinante.
Scalare | Un numero normale, come 3 o $-2$. Si chiama così per distinguerlo dai vettori.
Radice di un polinomio | Un numero che, messo al posto della lettera, fa venire zero. Le radici del polinomio caratteristico sono gli autovalori.
```

## Checklist

```checklist
- So dire che cos'è un autovettore e che cos'è un autovalore, e perché l'autovettore non può essere nullo mentre l'autovalore può essere zero.
- So controllare se un vettore è un autovettore, calcolando $Av$.
- So che i multipli non nulli di un autovettore sono autovettori con lo stesso autovalore, e che la somma di autovettori con autovalori diversi in genere non lo è.
- So spiegare perché una rotazione di angolo $\vartheta \neq 0, \pi$ non ha autovettori reali.
- So la definizione di endomorfismo e di matrice diagonalizzabile, e il legame tra base di autovettori e matrice diagonale.
- So costruire $M$ e $D$ da una base di autovettori e controllare con $AM = MD$.
- So calcolare $A^k$ con la formula $A^k = MD^kM^{-1}$.
- So calcolare il polinomio caratteristico di una matrice $2 \times 2$ (con traccia e determinante) e di una $3 \times 3$ (sviluppando lungo la riga o la colonna con più zeri).
- So perché gli autovalori sono le radici del polinomio caratteristico, e trovo gli autovettori risolvendo $(A - \lambda I)v = 0$.
- So leggere sulla diagonale gli autovalori di una matrice triangolare, e controllo i risultati con traccia e determinante.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 17 «Autovalori e autovettori I», pp. 85–89: le sezioni 17.A (definizione ed esempi), 17.B (endomorfismi e matrici diagonalizzabili), 17.C (matrici diagonali) e 17.D (polinomio caratteristico) sono seguite in ordine, con la pagina accanto a ogni titolo; definizioni, proposizioni ed esempi mantengono la loro numerazione (Definizioni 17.1, 17.5, 17.7, 17.12; Proposizioni 17.6, 17.8, 17.13; Esempi 17.2–17.4, 17.9–17.11, 17.14). La lezione 17 delle dispense non ha una sezione di esercizi: quelli qui sono tutti aggiunti.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §5.1.1–5.1.8 (autovettori, diagonalizzabilità, matrici diagonali e diagonalizzabili, polinomio caratteristico, esempi $2 \times 2$ su $\R$ e $\C$, matrici triangolari) e la Proposizione 5.2.15 (traccia, determinante e autovalori).
- **Esame**: appelli del 10/07/2024 (problema 11), 06/09/2024 (domanda 10), 07/02/2025 (domanda 8), 03/06/2025 (domanda 8), 02/09/2025 (domanda 4), 05/02/2026 (domanda 8), 03/06/2026 (domanda 6), 03/07/2026 (domande 2 e 3), 07/09/2026 (problema 11). Testi e soluzioni ufficiali sul Moodle 2025/26 ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); le soluzioni riportate qui sono scritte da capo.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi sono di questi appunti. Le parti **«Oltre le dispense»** (autovalori 0 e 1, la matrice di rotazione, la formula per le matrici $2 \times 2$, le matrici triangolari, i controlli con traccia e determinante, la rotazione su $\C$) collegano la lezione al resto del corso e all'esame.
