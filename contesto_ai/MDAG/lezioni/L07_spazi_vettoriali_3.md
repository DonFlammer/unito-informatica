---
corso: MDAG
modulo: AG
lezione: L07
titolo: Spazi vettoriali III
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L07
descrizione: >-
  Appunti della lezione L07 di Algebra lineare e Geometria (MDAG, parte 2): dipendenza e indipendenza lineare,
  basi, base canonica di K^n e dei polinomi, dimensione di uno spazio vettoriale e teorema sulle basi, con quiz
  nello stile dell'esame ed esercizi svolti.
lede: >-
  Quando un vettore è di troppo? Quando si ottiene mescolando gli altri, come un ingrediente doppione. Da qui nascono
  le basi, gli ingredienti giusti per fare tutto senza sprechi, e la dimensione: quanti numeri servono per dire dove
  sei. Basi e dimensioni sono tra le domande più frequenti del quiz.
materiale: dispense
scheda:
  Dispense: lezione 7 · pp. 31–35
  Libro: Martelli, §2.3.1–2.3.7
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 7 «Spazi vettoriali III»; B. Martelli, Geometria e algebra lineare, §2.3.1–2.3.7
appunti_html: appunti/MDAG/L07_spazi_vettoriali_3.html
genera_html: true
---

## In breve

- Dei vettori sono **linearmente dipendenti** quando uno di loro è di troppo: si ottiene mescolando gli altri, come un ingrediente doppione. Sono **linearmente indipendenti** quando nessuno è di troppo.
- Il controllo: se l'unica ricetta che dà il vettore zero è quella con tutte le dosi uguali a zero, i vettori sono indipendenti.
- Un vettore da solo è dipendente solo se è lo zero. Due vettori sono dipendenti solo se uno è multiplo dell'altro. Con tre o più vettori guardarli a coppie non basta.
- Una **base** è una lista di vettori indipendenti con cui si cucina tutto lo spazio. Ogni vettore ha una sola ricetta con gli ingredienti di una base.
- Tutte le basi di uno spazio hanno lo stesso numero di vettori: questo numero è la **dimensione**. Il piano ha dimensione 2, lo spazio 3, i polinomi di grado al massimo 2 hanno dimensione 3.
- Se hai tanti vettori quanta è la dimensione, per sapere se sono una base basta controllare una cosa sola: che siano indipendenti.
- All'esame escono domande su dimensioni, su «generatori e/o indipendenti» e su quale insieme è una base: per esempio negli appelli del 24/01/2024, 16/01/2025, 15/01/2026 e 07/09/2026.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Che cosa vuol dire «dimensione» (p. 31)

Dalla scuola sai che un punto ha dimensione 0, una retta dimensione 1, un piano dimensione 2, lo spazio dimensione 3. Su una retta basta un numero per dire dove sei; su un piano ne servono due; nello spazio tre.

In questa lezione la parola «dimensione» diventa una definizione precisa, che vale per ogni spazio vettoriale: anche per le matrici $2 \times 3$ o per i polinomi, che non si possono disegnare.

L'idea è contare **quanti vettori servono** per cucinare tutto lo spazio, senza sprechi. Ricorda dalla lezione L06: lo Span di alcuni vettori è tutto quello che si ottiene con le loro ricette. Guarda questi due casi nel piano:

- Lo Span di $(1, 2)$ e $(2, 4)$ è una **retta**: il secondo vettore è il doppio del primo e non aggiunge niente. Uno dei due è di troppo.
- Lo Span di $(1, 2)$ e $(2, 1)$ è **tutto il piano**: servono tutti e due, nessuno è di troppo.

Guarda la figura: $(1, 2)$ e $(2, 4)$ stanno sulla stessa retta tratteggiata, $(2, 1)$ punta in un'altra direzione.

```grafico
titolo: $(1, 2)$ e $(2, 4)$ stanno sulla stessa retta per l'origine (dipendenti); $(1, 2)$ e $(2, 1)$ no (indipendenti)
x: -1 5
y: -1 5
retta: 0 0 2.4 4.8 | grigio | tratteggio | $y = 2x$ | e
vettore: 2 4 | blu | spesso | $(2, 4)$ | e
vettore: 1 2 | accento | spesso | $(1, 2)$ | o
vettore: 2 1 | ambra | spesso | $(2, 1)$ | se
```

Per contare bene bisogna prima saper riconoscere i vettori di troppo. È il compito della prossima sezione.

::: prova Lo Span di $(1, 0)$ e $(3, 0)$ è una retta o tutto il piano?
Una retta, l'asse orizzontale: $(3, 0)$ è il triplo di $(1, 0)$ e non aggiunge niente.
:::

> [!RICORDA]
> - La dimensione conta quanti vettori servono per ottenere tutto lo spazio, senza vettori di troppo.
> - Un vettore che è multiplo di un altro non aggiunge niente allo Span.

## Ingredienti doppioni: la dipendenza lineare (pp. 31–33)

In cucina hai tre ingredienti: farina, zucchero e un preparato già pronto fatto da 2 parti di farina e 1 di zucchero. Il preparato è un doppione: lo puoi rifare mescolando gli altri due. Toglierlo non cambia quello che puoi cucinare.

Con i vettori succede lo stesso. Prendi $(1, 2)$ e $(2, 4)$. Il secondo è il doppio del primo: $(2, 4) = 2 \cdot (1, 2)$. Porto tutto da una parte:

$$2 \cdot (1, 2) - 1 \cdot (2, 4) = (2 - 2,\ 4 - 4) = (0, 0).$$

Una ricetta con dosi 2 e $-1$, cioè con dosi **non tutte zero**, dà il vettore zero. È il segnale che c'è un doppione.

La ricetta con **tutte** le dosi uguali a zero dà sempre il vettore zero, con qualsiasi vettore: $0 \cdot (1, 2) + 0 \cdot (2, 4) = (0, 0)$. Non dice niente. La domanda interessante è se c'è un'**altra** ricetta che dà zero.

### Il nome e la definizione

Le dispense lo scrivono così.

> [!DEF] 7.1 · Vettori linearmente dipendenti e indipendenti
> Sia $V$ uno spazio vettoriale su $\K$ e siano $v_1, \dots, v_k \in V$ alcuni vettori. Diciamo che questi vettori sono **linearmente dipendenti** se esistono dei coefficienti $\lambda_1, \dots, \lambda_k \in \K$, **non tutti nulli**, tali che
> $$\lambda_1 v_1 + \dots + \lambda_k v_k = 0.$$
> I vettori $v_1, \dots, v_k$ sono **linearmente indipendenti** se non sono linearmente dipendenti. Questa importante condizione può essere espressa nel modo seguente: dei vettori $v_1, \dots, v_k$ sono linearmente indipendenti se e solo se
> $$\lambda_1 v_1 + \dots + \lambda_k v_k = 0 \implies \lambda_1 = \dots = \lambda_k = 0.$$
> In altre parole, l'unica combinazione lineare dei $v_1, \dots, v_k$ che può dare il vettore nullo è quella banale, in cui tutti i coefficienti $\lambda_1, \dots, \lambda_k$ sono nulli.

**Come si legge.**

- $v_1, \dots, v_k$ sono gli ingredienti; $\lambda_1, \dots, \lambda_k$ sono le dosi, cioè i coefficienti (lezione L06). $\K$ sono i numeri usati, reali o complessi.
- **Non tutti nulli** vuol dire: almeno una dose diversa da zero. Le altre possono anche essere zero.
- **Dipendenti**: c'è una ricetta con almeno una dose diversa da zero che dà il vettore zero.
- **Indipendenti**: l'unica ricetta che dà zero è quella con tutte le dosi zero. Le dispense la chiamano combinazione «banale».
- La freccia $\implies$ si legge «allora»: «se la ricetta dà zero, allora tutte le dosi sono zero».
- Dipendenza e indipendenza riguardano **tutta la lista** di vettori insieme, non un vettore da solo.

### Come si controlla

**Per dire «dipendenti»** basta mostrare una ricetta con dosi non tutte zero che dà zero. Per esempio $2 \cdot (1, 2) - (2, 4) = (0, 0)$.

**Per dire «indipendenti»** si parte da una ricetta con le dosi sconosciute, la si mette uguale a zero e si dimostra che le dosi devono essere tutte zero. Di solito si risolve un sistema.

> [!ESEMPIO] · la verifica con le incognite, nel piano
> **$(1, 2)$ e $(2, 1)$ sono indipendenti.** Chiamo $a$ e $b$ le dosi e chiedo $a(1, 2) + b(2, 1) = (0, 0)$, cioè $(a + 2b,\ 2a + b) = (0, 0)$:
> $$\begin{cases} a + 2b = 0 \\ 2a + b = 0 \end{cases}$$
> 1. Dalla prima: $a = -2b$.
> 2. Sostituisco nella seconda: $2 \cdot (-2b) + b = -4b + b = -3b = 0$, quindi $b = 0$.
> 3. Allora $a = -2 \cdot 0 = 0$.
>
> L'unica ricetta che dà zero ha tutte le dosi zero: indipendenti.
>
> **$(1, 2)$ e $(2, 4)$ sono dipendenti.** Lo stesso sistema diventa $a + 2b = 0$ e $2a + 4b = 0$. La seconda equazione è il doppio della prima, e va bene ogni coppia con $a = -2b$. Per esempio $b = -1$ e $a = 2$: $2(1, 2) - (2, 4) = (0, 0)$, con dosi diverse da zero.

::: prova I vettori $(1, 0)$ e $(0, 1)$ sono indipendenti?
Sì. $a(1, 0) + b(0, 1) = (a, b)$, e questo è $(0, 0)$ solo se $a = 0$ e $b = 0$.
:::

### Il doppione si ricostruisce dagli altri (p. 31)

Se dei vettori sono dipendenti, uno di loro si ricostruisce dagli altri. Ecco perché, con l'esempio di prima: da $2 \cdot (1, 2) - (2, 4) = 0$ sposto $(2, 4)$ dall'altra parte e ottengo $(2, 4) = 2 \cdot (1, 2)$.

In generale si fa così. C'è almeno una dose diversa da zero, diciamo quella del vettore $v_i$, cioè $\lambda_i$. Lascio $\lambda_i v_i$ da una parte, sposto tutto il resto dall'altra e divido per $\lambda_i$ (si può, perché non è zero):

$$v_i = -\frac{\lambda_1}{\lambda_i} v_1 - \dots - \frac{\lambda_k}{\lambda_i} v_k,$$

dove a destra **non** compare $v_i$. Quindi $v_i$ è una ricetta con gli altri vettori: è il doppione.

Vale anche al contrario. Se un vettore è una ricetta con gli altri, per esempio $v_1 = 3v_2 + v_3$, porto tutto da una parte: $v_1 - 3v_2 - v_3 = 0$. È una ricetta che dà zero con la dose di $v_1$ uguale a 1, non zero: i vettori sono dipendenti.

Le dispense lo scrivono così.

> [!PROP] 7.2
> I vettori $v_1, \dots, v_k$ sono dipendenti $\iff$ uno di loro è esprimibile come combinazione lineare degli altri.

**Come si legge.** Il simbolo $\iff$ si legge «se e solo se»: le due cose vanno sempre insieme. Dipendenti vuol dire: c'è un doppione, un vettore che si ottiene mescolando gli altri.

> [!IDEA] · che cosa vuol dire «dipendenti»
> Dei vettori sono dipendenti quando **uno è di troppo**: si può ricostruire dagli altri, e toglierlo non cambia lo Span. Sono indipendenti quando **ognuno porta una direzione nuova**, che gli altri non sanno produrre.

### Uno e due vettori (pp. 31–32)

Con pochi vettori la Proposizione 7.2 si legge subito.

- **Un vettore da solo è dipendente solo se è lo zero.** Lo zero lo è: $1 \cdot 0 = 0$, con la dose 1. Un vettore diverso da zero no: se $\lambda v = 0$ con $v$ diverso da zero, allora $\lambda = 0$ (lezione L05, esercizio 11 (c)).
- **Due vettori sono dipendenti solo se uno è multiplo dell'altro.** «Uno è una ricetta con l'altro» vuol dire proprio «uno è un multiplo dell'altro».

> [!ESEMPIO] 7.3 · Due vettori di $\R^2$
> I vettori $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ e $v_2 = \begin{pmatrix} -2 \\ -2 \end{pmatrix}$ di $\R^2$ sono dipendenti; $w_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ e $w_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ sono indipendenti perché non sono multipli.

Il perché, con i numeri:

1. $v_2 = -2v_1$, quindi $2v_1 + v_2 = 0$: dipendenti.
2. Perché $w_2$ sia un multiplo di $w_1$ servirebbe un numero $k$ con $2 = k \cdot 1$ (prima coordinata) e $1 = k \cdot 2$ (seconda). La prima dà $k = 2$, la seconda $k = \frac 12$: impossibile. Per lo stesso motivo nemmeno $w_1$ è un multiplo di $w_2$.

> [!TRAPPOLA] Lo zero rende tutto dipendente
> Se nella lista c'è il vettore zero, i vettori sono **sempre** dipendenti. Basta dare dose 1 allo zero e dose 0 a tutti gli altri: la ricetta dà zero, e una dose non è zero.

Nello strumento qui sotto $u = (1, 2)$ e $v = (2, 1)$ sono indipendenti: con le ricette $\lambda u + \mu v$ si raggiunge ogni punto del piano. Trascina $v$ in $(2, 4)$ oppure in $(-1, -2)$: diventa un multiplo di $u$, lo strumento lo segnala e le ricette restano sulla retta rossa.

```widget vettori
titolo: Due vettori del piano: indipendenti o multipli?
u: 1 2
v: 2 1
modo: combinazione
modi: combinazione
lambda: 1
mu: 1
```

::: prova $(3, -6)$ e $(-1, 2)$ sono dipendenti o indipendenti?
Dipendenti: $(3, -6) = -3 \cdot (-1, 2)$, uno è multiplo dell'altro.
:::

### Tre o più vettori (p. 32)

Con tre o più vettori guardarli due alla volta non basta. Le dispense lo mostrano con un esempio.

> [!ESEMPIO] 7.4 · Tre vettori dipendenti, ma a coppie indipendenti
> I vettori
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad v_3 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$$
> di $\R^3$ sono dipendenti, perché $v_1 - v_2 - v_3 = 0$. A coppie i tre vettori sono sempre indipendenti (non sono mai multipli), ma tutti e tre insieme non lo sono, e a differenza del caso $k = 2$ questo non si capisce a colpo d'occhio. Infatti ciascuno dei tre può essere scritto come combinazione degli altri due: $v_1 = v_2 + v_3$, oppure $v_2 = v_1 - v_3$, oppure $v_3 = v_1 - v_2$.

Il conto, coordinata per coordinata:

$$v_1 - v_2 - v_3 = \begin{pmatrix} 1 - 0 - 1 \\ 1 - 1 - 0 \\ 0 - 1 - (-1) \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}.$$

Come si **trova** una ricetta così, invece di indovinarla? Si chiamano $a$, $b$, $c$ le dosi e si chiede $a v_1 + b v_2 + c v_3 = 0$, coordinata per coordinata:

$$\begin{cases} a + c = 0 \\ a + b = 0 \\ b - c = 0 \end{cases}$$

1. Dalla prima: $c = -a$.
2. Dalla seconda: $b = -a$.
3. La terza diventa $-a - (-a) = 0$: è sempre vera, qualunque sia $a$.

Quindi $a$ si può scegliere come si vuole. Con $a = 1$ vengono $b = -1$ e $c = -1$: proprio $v_1 - v_2 - v_3 = 0$. Una dose libera vuol dire infinite ricette che danno zero, anche con dosi diverse da zero: i vettori sono dipendenti.

Nel disegno i tre vettori stanno in uno **stesso piano per l'origine**, il piano $x - y + z = 0$. Controllo: $1 - 1 + 0 = 0$, $0 - 1 + 1 = 0$, $1 - 0 - 1 = 0$.

> [!ESEMPIO] 7.5 · La base canonica di $\R^3$ è indipendente
> I vettori
> $$e_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \qquad e_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \qquad e_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$$
> sono indipendenti. Se una combinazione lineare produce il vettore nullo, $\lambda_1 e_1 + \lambda_2 e_2 + \lambda_3 e_3 = 0$, riscrivendo entrambi i membri come vettori si trova
> $$\lambda_1 \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + \lambda_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + \lambda_3 \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} \lambda_1 \\ \lambda_2 \\ \lambda_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}.$$
> Da questo si deduce $\lambda_1 = \lambda_2 = \lambda_3 = 0$: l'unica combinazione lineare di $e_1, e_2, e_3$ che dà il vettore nullo è quella «banale», quindi i tre vettori sono indipendenti.

Qui il conto è immediato perché ogni vettore ha un 1 in un posto dove gli altri hanno 0: la ricetta mette ogni dose in una coordinata diversa.

### Una parte di una lista indipendente (pp. 32–33)

Se nessun ingrediente di una lista è un doppione, nessuno lo è nemmeno in una parte della lista. Le dispense lo scrivono così.

> [!PROP] 7.6
> Se $v_1, \dots, v_k$ sono indipendenti, allora qualsiasi sottoinsieme di $\{v_1, \dots, v_k\}$ è anch'esso formato da vettori indipendenti.

**Come si legge.** Togliendo vettori da una lista indipendente si ottiene ancora una lista indipendente.

Il motivo, a parole: una ricetta che dà zero con una parte dei vettori diventa una ricetta con tutti i vettori, dando dose zero a quelli tolti. Se la prima avesse una dose diversa da zero, l'avrebbe anche la seconda.

> [!DIM] della Proposizione 7.6
> La spiegazione delle dispense, con i passaggi. Supponi per assurdo che alcuni di loro, per comodità i primi $h$, siano dipendenti: esiste una ricetta $\lambda_1 v_1 + \dots + \lambda_h v_h = 0$ con dosi non tutte zero. Aggiungo gli altri vettori con dose zero:
> $$\lambda_1 v_1 + \dots + \lambda_h v_h + 0 v_{h+1} + \dots + 0 v_k = 0.$$
> È una ricetta con **tutti** i vettori che dà zero, e ha ancora una dose diversa da zero. Questo contraddice l'indipendenza di $v_1, \dots, v_k$.

Due conseguenze. Se dei vettori sono indipendenti, allora:

- sono **tutti diversi da zero** (guardando un vettore alla volta);
- **a due a due non sono multipli** (guardando due vettori alla volta).

> [!TRAPPOLA] Necessarie, ma non bastano
> L'Esempio 7.4 mostra che con tre o più vettori queste due condizioni **non bastano**: $v_1, v_2, v_3$ sono diversi da zero e a coppie non multipli, eppure sono dipendenti. Con tre o più vettori bisogna scrivere la ricetta con le dosi sconosciute e risolvere il sistema.

> [!OLTRE] · quanti vettori indipendenti ci sono in una lista: il metodo di Gauss
> Per liste lunghe il sistema diventa pesante. Nella lezione L13 le dispense usano il **metodo di Gauss** (lezione L11) e il **rango** (lezione L08): si scrivono i vettori come righe di una matrice e si fanno mosse come «la riga 2 diventa la riga 2 meno la riga 1». Ogni mossa sostituisce un vettore con la sua differenza con un multiplo di un altro, e lo Span non cambia. Alla fine le righe diverse da zero sono indipendenti, e il loro numero, il rango, dice quanti vettori indipendenti c'erano. Nello strumento la matrice ha per righe i tre vettori dell'Esempio 7.4: esce una riga di zeri e il rango è 2. Prova poi le righe `1 1 2`, `-1 1 -1`, `0 1 1` (i vettori $v_1, v_2, v_4$ dell'Esercizio 7.15): il rango è 3, indipendenti.

```widget gauss
titolo: Quanti vettori indipendenti? Un vettore per riga
matrice: 1 1 0; 0 1 1; 1 0 -1
modo: rango
modi: rango
```

::: prova I vettori $(1, 2, 3)$, $(0, 0, 0)$ e $(4, 5, 6)$ sono indipendenti?
No: c'è il vettore zero, quindi sono dipendenti. Una ricetta che dà zero: $0 \cdot (1, 2, 3) + 1 \cdot (0, 0, 0) + 0 \cdot (4, 5, 6)$.
:::

> [!RICORDA]
> - Dipendenti: una ricetta con dosi non tutte zero dà il vettore zero; cioè un vettore è un doppione degli altri.
> - Indipendenti: l'unica ricetta che dà zero ha tutte le dosi zero.
> - Uno da solo è dipendente solo se è zero; due sono dipendenti solo se multipli; con tre o più si risolve il sistema.

## Gli ingredienti giusti: le basi (pp. 33–34)

Nel piano ogni vettore si scrive con due numeri. Per esempio

$$(5, 3) = 5 \cdot (1, 0) + 3 \cdot (0, 1).$$

I due vettori $(1, 0)$ e $(0, 1)$ bastano per cucinare tutto il piano, e nessuno dei due è di troppo. Una lista di ingredienti così si chiama **base**: abbastanza per fare tutto, e nessuno sprecato. Le dispense la presentano come una delle definizioni più importanti del corso.

> [!DEF] 7.7 · Base
> Sia $V$ uno spazio vettoriale. Una sequenza $v_1, \dots, v_n \in V$ di vettori è una **base** se sono soddisfatte entrambe queste condizioni:
> 1. i vettori $v_1, \dots, v_n$ sono indipendenti;
> 2. i vettori $v_1, \dots, v_n$ generano $V$.

**Come si legge.**

- **Generano $V$** vuol dire che lo Span dei vettori è tutto $V$: ogni vettore di $V$ si ottiene con una ricetta. Nessun vettore resta fuori.
- **Indipendenti**: nessuno dei vettori è di troppo.
- Servono **tutte e due** le condizioni. Pochi vettori possono essere indipendenti senza generare tutto; tanti vettori possono generare tutto senza essere indipendenti.
- È una **sequenza**: conta anche l'ordine, che diventerà importante con le coordinate (lezione L13).

Una tabella con cinque liste di vettori del piano:

| Vettori del piano | indipendenti? | generano il piano? | base? |
|---|---|---|---|
| $(1, 0)$ | sì | no: solo l'asse orizzontale | no |
| $(1, 0),\ (0, 1),\ (1, 1)$ | no: $(1, 1) = (1, 0) + (0, 1)$ | sì | no |
| $(1, 0),\ (0, 1)$ | sì | sì | **sì** |
| $(1, 2),\ (2, 1)$ | sì | sì: $(a, b) = \frac{2b - a}3 (1, 2) + \frac{2a - b}3 (2, 1)$ | **sì** |
| $(1, 2),\ (2, 4)$ | no: multipli | no: solo la retta $y = 2x$ | no |

Nella quarta riga c'è un'altra base del piano: le basi di uno spazio sono infinite.

::: prova I vettori $(1, 0)$, $(0, 1)$ e $(2, 3)$ sono una base del piano? Perché?
No. Generano il piano, ma non sono indipendenti: $(2, 3) = 2 \cdot (1, 0) + 3 \cdot (0, 1)$ è un doppione.
:::

### La base canonica

La base più comoda di $\K^n$ è fatta di vettori con un solo 1 e tutti gli altri numeri zero. Le dispense la chiamano base canonica.

> [!ESEMPIO] 7.8 · La base canonica di $\K^n$
> Gli elementi
> $$e_1 = \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix}, \quad e_2 = \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix}, \quad \dots, \quad e_n = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix}$$
> formano una base di $\K^n$, detta **base canonica**.
>
> **Sono indipendenti.** Se $\lambda_1 e_1 + \dots + \lambda_n e_n = 0$, tradotto in vettori diventa
> $$\begin{pmatrix} \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix},$$
> quindi $\lambda_1 = \dots = \lambda_n = 0$.
>
> **Generano $\K^n$.** Un generico vettore $x \in \K^n$ si scrive come combinazione lineare di $e_1, \dots, e_n$:
> $$x = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = x_1 \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix} + x_2 \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix} + \dots + x_n \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix} = x_1 e_1 + x_2 e_2 + \dots + x_n e_n.$$

Il vettore $e_i$ ha un 1 al posto numero $i$ e zeri altrove. Per esempio, con tre coordinate:

$$\begin{pmatrix} 5 \\ -2 \\ 7 \end{pmatrix} = 5e_1 - 2e_2 + 7e_3.$$

Le dosi rispetto alla base canonica sono proprio le coordinate del vettore.

Lo stesso vale per i polinomi: la base più comoda è fatta dalle potenze della lettera.

> [!ESEMPIO] 7.9 · La base canonica dei polinomi
> Nello spazio $\K_n[x]$ dei polinomi di grado minore o uguale a $n$, gli elementi $1, x, x^2, \dots, x^n$ formano una base, detta **base canonica**.
>
> **Sono indipendenti**: se $\lambda_0 \cdot 1 + \lambda_1 x + \dots + \lambda_n x^n = 0$, allora $\lambda_0 = \dots = \lambda_n = 0$.
>
> **Generano $\K_n[x]$**: ciascun polinomio di grado minore o uguale a $n$ si scrive come $p(x) = a_n x^n + \dots + a_1 x + a_0$, e questa scrittura è già una combinazione lineare dei vettori $1, x, \dots, x^n$, con coefficienti $a_0, a_1, \dots, a_n$.

Perché vale l'indipendenza? A destra dell'uguale c'è il **polinomio zero**, quello con tutti i coefficienti uguali a 0. Due polinomi sono uguali quando hanno gli stessi coefficienti, quindi $\lambda_0 + \lambda_1 x + \dots + \lambda_n x^n$ è il polinomio zero solo se ogni dose è zero. Un esempio: $3 + 0x - 2x^2$ non è il polinomio zero, perché ha dei coefficienti diversi da zero.

> [!TRAPPOLA] I polinomi di grado al massimo $n$ hanno $n + 1$ vettori di base, non $n$
> La base canonica dei polinomi di grado al massimo 2 è $1, x, x^2$: **tre** polinomi, perché c'è anche il numero 1. Per il grado al massimo $n$ i vettori sono $1, x, \dots, x^n$: $n + 1$ in tutto.

> [!OLTRE] · a che cosa serve una base: le coordinate
> Il libro di Martelli (Proposizione 2.3.11) mostra che, fissata una base, **ogni vettore si scrive in un solo modo** come ricetta con i suoi vettori. Se ci fossero due ricette diverse per lo stesso vettore, sottraendole si otterrebbe una ricetta che dà zero con dosi non tutte zero, contro l'indipendenza. Le dosi di quella ricetta si chiamano **coordinate** del vettore rispetto alla base. Per esempio, rispetto alla base $(1, 1), (-1, 1)$ del piano, il vettore $(2, 0) = 1 \cdot (1, 1) - 1 \cdot (-1, 1)$ ha coordinate $1$ e $-1$. Le coordinate si studiano nella lezione L13.

> [!RICORDA]
> - Una base è una lista di vettori indipendenti che generano tutto lo spazio.
> - La base canonica di $\K^n$ è $e_1, \dots, e_n$; quella dei polinomi di grado al massimo $n$ è $1, x, \dots, x^n$, con $n + 1$ vettori.

## Contare i vettori di una base: la dimensione (pp. 34–35)

Una retta per l'origine del piano ha basi fatte da un vettore: $(1, 2)$, oppure $(2, 4)$, oppure $(-1, -2)$. Il piano ha basi fatte da due vettori: $(1, 0), (0, 1)$, oppure $(1, 2), (2, 1)$. Ogni spazio ha infinite basi, ma il **numero** di vettori sembra sempre lo stesso.

È così, ed è il teorema principale della lezione. Le dispense lo scrivono così.

> [!TEOREMA] 7.10
> Se uno spazio vettoriale $V$ ha una base formata da $n$ vettori, allora ogni base di $V$ contiene $n$ vettori.

**Come si legge.** Tutte le basi di uno stesso spazio hanno lo stesso numero di vettori. Cambiano gli ingredienti, non quanti ne servono.

Questo teorema permette di dare un nome preciso a un'idea che conosci da sempre.

> [!DEF] 7.11 · Dimensione
> Se uno spazio vettoriale $V$ ha una base $v_1, \dots, v_n$, diciamo che $V$ ha **dimensione** $n$. Se $V$ non ammette una base finita, diciamo che ha dimensione $\infty$.

**Come si legge.**

- La dimensione è il numero di vettori di una base. Si scrive $\dim V$, «dimensione di V».
- Grazie al Teorema 7.10 non importa quale base si sceglie: tutte danno lo stesso numero. Senza il teorema, due persone potrebbero trovare due «dimensioni» diverse per lo stesso spazio.
- Per calcolare una dimensione basta trovare **una** base e contarne i vettori.
- $\infty$ si legge «infinito»: è la dimensione degli spazi che nessuna lista finita riesce a generare.
- Lo spazio fatto solo dallo zero non ha basi con almeno un vettore, perché lo zero da solo è dipendente. Per convenzione la sua base è la lista vuota e la sua dimensione è 0. Così un punto ha dimensione 0, come a scuola.

Con le basi già trovate:

| Spazio | una base | dimensione |
|---|---|---:|
| $\K^n$ | $e_1, \dots, e_n$ (Esempio 7.8) | $n$ |
| $\K_n[x]$, polinomi di grado al massimo $n$ | $1, x, \dots, x^n$ (Esempio 7.9) | $n + 1$ |
| $M(m, n, \K)$, matrici $m \times n$ | le matrici $e_{ij}$ (Esercizio 7.13) | $mn$ |
| $\K[x]$, tutti i polinomi | nessuna base finita | $\infty$ |
| solo lo zero | la lista vuota | $0$ |

**Perché tutti i polinomi insieme hanno dimensione infinita.** Prendi una lista finita di polinomi qualsiasi e chiama $N$ il grado più alto tra loro. Ogni ricetta con quei polinomi ha grado al massimo $N$, quindi il polinomio $x^{N+1}$ non si ottiene. Nessuna lista finita genera tutti i polinomi: non c'è una base finita.

> [!ESEMPIO] · la dimensione di alcuni sottospazi
> - La retta $y = 2x$ del piano è lo Span di $(1, 2)$, e un vettore diverso da zero è indipendente: una base con un vettore, **dimensione 1**.
> - Il piano $z = x + y$ dello spazio è lo Span di $(1, 0, 1)$ e $(0, 1, 1)$ (Esercizio 6.10). I due vettori non sono multipli, quindi sono indipendenti: **dimensione 2**.
> - Le matrici $\begin{pmatrix} a & b \\ b & a \end{pmatrix}$ dell'Esercizio 6.9 sono lo Span di $I$ e $J$, che non sono multiple: **dimensione 2**.
> - Le matrici diagonali $3 \times 3$: ogni matrice diagonale è $a e_{11} + b e_{22} + c e_{33}$, e le tre matrici sono indipendenti, perché ognuna ha un 1 dove le altre hanno 0: **dimensione 3**.

::: prova Quanti vettori ha una base di $\R^4$? E una base dei polinomi di grado al massimo 3? E una base delle matrici $2 \times 3$?
$\R^4$: 4 vettori. Polinomi di grado al massimo 3: $1, x, x^2, x^3$, cioè 4. Matrici $2 \times 3$: $2 \cdot 3 = 6$.
:::

> [!APPROFONDIMENTO] perché tutte le basi hanno lo stesso numero di vettori
> Le dispense enunciano il Teorema 7.10 senza dimostrazione. Il libro di Martelli (§2.3.4) lo deduce da un **lemma di scambio**: se $n$ vettori generano lo spazio e altri $n$ vettori sono indipendenti, anche questi ultimi generano lo spazio. L'idea è sostituire i primi con i secondi uno alla volta, senza mai perdere la proprietà di generare. La dimostrazione completa è nel riquadro qui sotto.

> [!DIM] del Teorema 7.10, dal libro di Martelli
> **Lemma.** Se $v_1, \dots, v_n$ generano $V$ e $w_1, \dots, w_n \in V$ sono indipendenti, allora anche $w_1, \dots, w_n$ generano $V$.
>
> *Dimostrazione del lemma.* Si scambia un vettore alla volta. Supponi di aver già mostrato che $V = \Span(w_1, \dots, w_{s-1}, v_s, \dots, v_n)$ (all'inizio, con $s = 1$, è l'ipotesi). Allora $w_s$ è una combinazione di questi vettori:
> $$w_s = \lambda_1 w_1 + \dots + \lambda_{s-1} w_{s-1} + \lambda_s v_s + \dots + \lambda_n v_n.$$
> Almeno un coefficiente $\lambda_i$ con $i \ge s$ è diverso da zero: altrimenti questa sarebbe una relazione di dipendenza tra $w_1, \dots, w_s$, che invece sono indipendenti (Proposizione 7.6). Riordinando i $v$, supponi $\lambda_s \neq 0$. Dividendo per $\lambda_s$ ricavi $v_s$ come combinazione di $w_1, \dots, w_s, v_{s+1}, \dots, v_n$; quindi questi vettori generano ancora tutto $V$. Dopo $n$ passi, $V = \Span(w_1, \dots, w_n)$.
>
> *Dimostrazione del teorema.* Per assurdo, siano $v_1, \dots, v_n$ e $w_1, \dots, w_m$ due basi di $V$ con $n < m$. I $v_i$ generano $V$ e $w_1, \dots, w_n$ sono indipendenti (sottoinsieme di vettori indipendenti). Per il lemma, $w_1, \dots, w_n$ generano $V$, quindi $w_{n+1}$ è una loro combinazione lineare: allora $w_1, \dots, w_m$ sono dipendenti (Proposizione 7.2). Assurdo.

> [!RICORDA]
> - Tutte le basi di uno spazio hanno lo stesso numero di vettori: è la dimensione.
> - $\K^n$ ha dimensione $n$; i polinomi di grado al massimo $n$ hanno dimensione $n + 1$; le matrici $m \times n$ hanno dimensione $mn$.

## Con il numero giusto basta un controllo (p. 35)

Per dimostrare che dei vettori sono una base bisognerebbe fare due controlli: che siano indipendenti e che generino. Ma se il **numero** di vettori è proprio la dimensione, ne basta uno.

Un esempio nel piano. $(1, 2)$ e $(2, 1)$ non sono multipli, quindi sono indipendenti. Sono due vettori, e il piano ha dimensione 2. Allora sono già una base, senza controllare che generino.

Le dispense lo scrivono così.

> [!TEOREMA] 7.12
> Se $\dim V = n$ e $\{v_1, \dots, v_n\}$ è un insieme di $n$ vettori, allora $v_1, \dots, v_n$ formano una base di $V$ se e solo se vale **una** delle due condizioni della definizione di base (mentre l'altra condizione vale poi automaticamente).

**Come si legge.**

- La condizione chiave è che i vettori siano **esattamente tanti quanta è la dimensione**.
- In quel caso: se sono indipendenti, generano; se generano, sono indipendenti.
- In pratica si controlla quasi sempre l'**indipendenza**, che è un sistema con lo zero a destra.
- Nello spazio a tre coordinate: tre vettori indipendenti sono sempre una base; tre vettori che generano tutto sono sempre indipendenti.

> [!ESEMPIO] · una base del piano in una riga
> $(1, 2)$ e $(2, 1)$ non sono multipli, quindi sono indipendenti (Esempio 7.3). Sono 2 vettori e il piano ha dimensione 2: per il Teorema 7.12 sono una base, senza controllare che generino.

> [!TRAPPOLA] Il teorema vale solo con il numero giusto di vettori
> Due vettori indipendenti dello spazio a tre coordinate **non** sono una base: sono 2, non 3. Quattro vettori che generano lo spazio a tre coordinate **non** sono una base: sono troppi, e per forza c'è un doppione (riquadro qui sotto).

::: prova In $\R^3$, i vettori $(1, 0, 0)$, $(1, 1, 0)$ e $(1, 1, 1)$ sono indipendenti. Sono una base?
Sì: sono 3 vettori indipendenti e $\R^3$ ha dimensione 3. Per il Teorema 7.12 generano anche tutto lo spazio.
:::

> [!OLTRE] · le conseguenze da usare nei quiz
> Dal libro di Martelli (Proposizioni 2.3.23 e 2.3.25 e gli algoritmi dei §2.3.5–2.3.6), in uno spazio di dimensione $n$:
> - **più di $n$ vettori sono sempre dipendenti**: se fossero indipendenti, i primi $n$ sarebbero una base (Teorema 7.12) e gli altri sarebbero loro ricette;
> - **meno di $n$ vettori non generano mai tutto**: da una lista che genera si possono togliere uno alla volta i doppioni (Proposizione 7.2) fino a restare con una base, che avrebbe meno di $n$ vettori;
> - **lo Span di $k$ vettori ha dimensione al massimo $k$**, uguale al numero massimo di vettori indipendenti tra loro (è l'osservazione che la lezione L08 usa per il rango);
> - **ogni sottospazio ha dimensione al massimo $n$**, e ha dimensione $n$ solo se è tutto lo spazio;
> - **vettori indipendenti si completano a una base**: finché non generano tutto, si aggiunge un vettore fuori dal loro Span, e la lista resta indipendente (esercizio 12).

> [!DIM] del Teorema 7.12, dal libro di Martelli
> Siano $v_1, \dots, v_n$ vettori di $V$ con $\dim V = n$.
> - **Se sono indipendenti, generano.** Una base qualsiasi di $V$ ha $n$ vettori che generano; per il lemma di scambio (riquadro precedente), anche i $v_i$, indipendenti e in numero di $n$, generano $V$.
> - **Se generano, sono indipendenti.** Se fossero dipendenti, uno di loro sarebbe combinazione degli altri (Proposizione 7.2) e si potrebbe togliere senza cambiare lo Span. Ripetendo si arriverebbe a una base di $V$ con meno di $n$ vettori, contro il Teorema 7.10.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli: dipendenza e indipendenza nel **§2.3.1** (pp. 60–62, con la Proposizione 2.3.4 = Proposizione 7.6); basi e basi canoniche di $\K^n$, $\K_n[x]$ e $M(m, n, \K)$ nel **§2.3.2** (pp. 62–64); coordinate nel **§2.3.3** (pp. 64–65); dimensione, lemma di scambio e dimensione infinita di $\K[x]$ nel **§2.3.4** (pp. 65–67); algoritmi di completamento e di estrazione e Proposizione 2.3.23 (= Teorema 7.12) nei **§2.3.5–2.3.6** (pp. 67–69); dimensione dei sottospazi nel **§2.3.7** (pp. 69–70).

> [!RICORDA]
> - Con tanti vettori quanta è la dimensione: indipendenti vuol dire base, e generare vuol dire base.
> - Più vettori della dimensione: sempre dipendenti. Meno: non generano mai tutto.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $v_1, \dots, v_k$ | «v uno, …, v kappa» | un elenco di $k$ vettori | $(1, 2), (2, 1)$ |
| $\lambda_1, \dots, \lambda_k$ | «lambda uno, …» | le dosi di una ricetta | $2(1, 2) - (2, 4)$ ha dosi $2$ e $-1$ |
| $\implies$ | «allora» | se vale la prima cosa, vale la seconda | |
| $\iff$ | «se e solo se» | le due cose vanno sempre insieme | |
| $\Span(\ldots)$ | «span di …» | tutte le ricette con quei vettori (lezione L06) | $\Span((1, 2))$ |
| $e_1, \dots, e_n$ | «e uno, …, e enne» | la base canonica: un 1 e tutti zeri | $e_2 = (0, 1, 0)$ |
| $e_{ij}$ | «e i j» | la matrice con 1 nella riga $i$ e colonna $j$, zeri altrove | $e_{12} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ |
| $\dim V$ | «dimensione di V» | il numero di vettori di una base | $\dim \R^3 = 3$ |
| $\infty$ | «infinito» | nessuna lista finita genera lo spazio | $\dim \K[x] = \infty$ |
| $\K_n[x]$ | «kappa enne di ics» | i polinomi di grado al massimo $n$ | $\dim \K_2[x] = 3$ |
| $M(m, n, \K)$ | «emme di emme enne» | le matrici $m \times n$ | $\dim M(2, 3) = 6$ |
| $D(n)$, $T^s(n)$, $S(n)$, $A(n)$ | | diagonali, triangolari superiori, simmetriche, antisimmetriche (lezione L06) | $\dim S(3) = 6$ |
| $\sum$ | «somma» | somma di tanti pezzi dello stesso tipo | $\sum_{i, j} a_{ij} e_{ij}$ |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 domande a risposta multipla con 5 risposte, e 2 problemi da 11 punti. I problemi si correggono solo con almeno 6 punti nel quiz. Dura 2 ore, senza calcolatrice e con solo 4 facciate scritte a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

Questa lezione è tra le più presenti nei quiz. Le domande tipiche, con gli appelli in cui sono uscite:

| Tipo di domanda | Appelli |
|---|---|
| dimensione di uno spazio di matrici | $T^s(3)$: 24/01/2024, domanda 5; $S(3)$: 15/01/2026, domanda 4 |
| dimensione di uno Span o di un sottospazio | 02/09/2025, domanda 10; 15/01/2026, domanda 3; 10/07/2025, domanda 2; 03/07/2026, domanda 1 |
| «sono generatori e/o linearmente indipendenti?» | 06/09/2024, domanda 2; 16/01/2025, domanda 2 |
| quale insieme è una base, o completa una base | 10/06/2024, domanda 3; 07/09/2026, domanda 2 |

Nei problemi da 11 punti le basi servono sempre: «trovare una base del nucleo e la sua dimensione» (02/09/2025, problema 11), basi di autovettori, basi ortonormali. Li vedrai dalla lezione L14 in poi.

### Una domanda vera, letta insieme

**Appello del 16/01/2025, domanda 2.** Il testo: «I polinomi $1$, $x$, $x^2$ e $1 + 2x + x^2$ di $\R_2[x]$ sono generatori e/o linearmente indipendenti? (a) Sono linearmente indipendenti, ma non generatori. (b) Non sono né linearmente indipendenti né generatori. (c) La domanda è mal posta: i polinomi non sono vettori. (d) Sono generatori, ma non linearmente indipendenti. (e) Sono sia generatori che linearmente indipendenti».

**In pratica chiede:** con questi quattro polinomi si cucinano tutti i polinomi di grado al massimo 2? E c'è un doppione?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: conto.** Sono 4 polinomi. I polinomi di grado al massimo 2 hanno dimensione 3. Più vettori della dimensione: per forza c'è un doppione. Quindi **non** sono indipendenti.
>
> **Passo 2: trovo il doppione.** $1 + 2x + x^2 = 1 \cdot 1 + 2 \cdot x + 1 \cdot x^2$: è una ricetta con gli altri tre.
>
> **Passo 3: generano?** I primi tre, $1$, $x$, $x^2$, sono la base canonica (Esempio 7.9): da soli già cucinano tutto. Aggiungendo un polinomio si cucina ancora tutto. Quindi **generano**.
>
> **La risposta** è la (d).
>
> **Perché la (c) è sbagliata.** I polinomi sono vettori dello spazio vettoriale dei polinomi (lezione L05): si sommano e si moltiplicano per un numero. Le risposte «la domanda è mal posta» sono quasi sempre trappole.

### Altre due domande vere

> [!ESAME] Appello del 07/09/2026, domanda 2
> **Testo.** Siano date le matrici
> $$A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix},\ B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix},\ C = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix},\ D = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix},\ E = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix},\ F = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}.$$
> Quale insieme forma una base di $M(2, \R)$? (a) $\{A, B, F\}$; (b) $\{A, C, D, E\}$; (c) $\{A, B, E, F\}$; (d) $\{B, C, D, E, F\}$; (e) $\{B, C, F\}$.
>
> **Soluzione.** È la (c).
> 1. **Conto.** Le matrici $2 \times 2$ hanno dimensione 4: una base ha esattamente 4 elementi. Restano solo (b) e (c).
> 2. **(b).** $C + D = A$: c'è un doppione, quindi non è una base.
> 3. **(c).** Per il Teorema 7.12 basta controllare l'indipendenza. Chiedo $x_1 A + x_2 B + x_3 E + x_4 F = 0$:
>    $$\begin{pmatrix} x_2 + x_3 + x_4 & x_1 + x_3 + x_4 \\ x_1 + x_3 & x_3 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}.$$
>    La casella in basso a destra dà $x_3 = 0$. Poi quella in basso a sinistra dà $x_1 = 0$, quella in alto a destra $x_4 = 0$, quella in alto a sinistra $x_2 = 0$. Tutte le dosi sono zero: è una base.

> [!ESAME] Appello del 15/01/2026, domanda 4
> **Testo.** La dimensione dello spazio $S(3)$ delle matrici $3 \times 3$ simmetriche è: (a) nove; (b) zero; (c) tre; (d) sei; (e) $S(3)$ non ha una dimensione perché non è uno spazio vettoriale.
>
> **Soluzione.** È la (d). Una matrice simmetrica $3 \times 3$ è decisa dai 6 numeri sulla diagonale e sopra di essa: quelli sotto sono copie allo specchio.
> $$\begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix} = a e_{11} + d e_{22} + f e_{33} + b(e_{12} + e_{21}) + c(e_{13} + e_{31}) + e(e_{23} + e_{32}).$$
> Le sei matrici a destra generano $S(3)$ e sono indipendenti: se la ricetta dà la matrice nulla, ogni dose compare da sola in qualche casella, quindi è zero. La (e) è falsa per la Proposizione 6.5. Con lo stesso ragionamento le triangolari superiori $3 \times 3$ hanno dimensione 6 (appello del 24/01/2024, domanda 5) e le antisimmetriche $3 \times 3$ hanno dimensione 3.

### I metodi

> [!METODO] · «Sono generatori e/o indipendenti?»
> Hai $k$ vettori in uno spazio di dimensione $n$.
> 1. **Conta.** Se $k$ è più grande di $n$, sono sicuramente dipendenti. Se è più piccolo, sicuramente non generano tutto.
> 2. **Trova i doppioni.** Scrivi la ricetta con le dosi sconosciute uguale a zero e risolvi, oppure cerca un vettore che sia ricetta degli altri. Togliendo i doppioni restano $r$ vettori indipendenti, e $r$ è la dimensione dello Span.
> 3. **Concludi.** Sono indipendenti quando $r = k$; generano tutto quando $r = n$; sono una base quando $r = k = n$.
>
> Le risposte del tipo «la domanda è mal posta» (i vettori sono troppi, i polinomi non sono vettori) sono trappole: la domanda ha sempre senso.

> [!METODO] · la dimensione di un sottospazio
> 1. Scrivi l'elemento generico del sottospazio, usando le condizioni per eliminare le lettere che dipendono dalle altre: restano alcune **lettere libere**.
> 2. Raccogli le lettere libere: l'elemento generico diventa una ricetta, con un vettore per ogni lettera. Il sottospazio è lo Span di quei vettori.
> 3. Controlla che siano indipendenti (di solito lo sono: ogni lettera compare da sola in qualche posto).
> 4. La dimensione è il numero di vettori, cioè il numero di lettere libere.
>
> Esempio: i polinomi di grado al massimo 3 che fanno zero in 2. Per la lezione L04, fare zero in 2 vuol dire $p(x) = (x - 2)(a + bx + cx^2)$, quindi il sottospazio è lo Span di $x - 2$, $x(x - 2)$ e $x^2(x - 2)$. I tre polinomi hanno gradi diversi, 1, 2 e 3, quindi sono indipendenti (esercizio 9): la dimensione è 3. È il tipo di domanda degli appelli del 10/07/2025 (domanda 2, con $p(6) = 0$) e del 03/07/2026 (domanda 1, con $p(2) = p(-2) = 0$, dove la dimensione è 2).

> [!TRAPPOLA] Gli errori più comuni
> - Dire che i polinomi di grado al massimo $n$ hanno dimensione $n$: è $n + 1$, per via del numero 1.
> - Dire che vettori a coppie non multipli sono indipendenti: vale solo per due vettori (Esempio 7.4).
> - Usare il Teorema 7.12 con un numero sbagliato di vettori.
> - Confondere «generano» con «sono una base»: una base deve anche essere indipendente.
> - Scegliere «non è uno spazio vettoriale» per $S(3)$, $T^s(3)$ o uno Span: sono sempre sottospazi. Quella risposta è giusta solo per insiemi che non contengono lo zero, come $O(2)$ nell'appello del 10/07/2024 (domanda 2).

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione:
> - la definizione di indipendenza («se la ricetta dà zero, tutte le dosi sono zero») e la Proposizione 7.2;
> - i casi con uno e due vettori, e la definizione di base;
> - la tabella delle dimensioni: $\K^n$, $\K_n[x]$, $M(m, n)$;
> - le matrici speciali: $D(n) = n$, $T^s(n) = S(n) = \frac{n(n+1)}2$, $A(n) = \frac{n(n-1)}2$;
> - il Teorema 7.12 e la regola del conteggio (più di $n$ vettori sono dipendenti, meno di $n$ non generano).

## Quiz

```quiz
D: I vettori $(1, 0, 1)$, $(0, 1, 1)$, $(1, 1, 2)$, $(0, 0, 1)$ di $\R^3$ sono generatori e/o linearmente indipendenti?
- Sono linearmente indipendenti, ma non generatori.
- Non sono né linearmente indipendenti né generatori.
- La domanda è mal posta: i vettori sono 4 e non 3.
+ Sono generatori, ma non linearmente indipendenti.
- Sono sia generatori che linearmente indipendenti.
= Si conta per primo: 4 vettori in uno spazio di dimensione 3 sono sempre dipendenti, e infatti $(1, 1, 2) = (1, 0, 1) + (0, 1, 1)$ è un doppione. Poi si guarda se generano: $(1, 0, 1)$, $(0, 1, 1)$ e $(0, 0, 1)$ sono indipendenti (dalla ricetta $a(1, 0, 1) + b(0, 1, 1) + c(0, 0, 1) = 0$ viene $a = 0$, $b = 0$ e poi $c = 0$), quindi per il Teorema 7.12 sono già una base, e generano. La risposta più insidiosa è «mal posta»: avere più vettori della dimensione è permesso, vuol dire solo che c'è un doppione. Simile all'appello del 06/09/2024, domanda 2.

D: I polinomi $1 + x$, $1 - x$ e $2$ di $\R_2[x]$ sono generatori e/o linearmente indipendenti?
- Sono linearmente indipendenti, ma non generatori.
+ Non sono né linearmente indipendenti né generatori.
- Sono generatori, ma non linearmente indipendenti.
- Sono sia generatori che linearmente indipendenti, cioè una base.
- La domanda è mal posta: $2$ è un numero, non un polinomio.
= Si cerca un doppione: $(1 + x) + (1 - x) = 2$, quindi sono dipendenti. Poi si guarda se generano: ogni ricetta con questi polinomi ha grado al massimo 1, quindi $x^2$ non si ottiene. Non generano. Lo Span è fatto dai polinomi di grado al massimo 1, di dimensione 2. La risposta più insidiosa è «una base»: sono 3 polinomi, quanti la dimensione, ma il Teorema 7.12 vale solo se una delle due condizioni è vera, e qui non lo è nessuna. E il numero 2 è un polinomio di grado 0. Simile all'appello del 16/01/2025, domanda 2.

D: Qual è la dimensione di $\Span\big((1, 1, 0),\ (0, 1, 1),\ (1, 2, 1)\big)$?
- $0$
- $1$
+ $2$
- $3$
- $4$
= Si cercano i doppioni: $(1, 2, 1) = (1, 1, 0) + (0, 1, 1)$, quindi il terzo vettore è di troppo. I primi due non sono multipli, quindi sono indipendenti: sono una base dello Span, che ha dimensione 2 (un piano). La risposta più insidiosa è 3, che conta i vettori senza controllare i doppioni. Simile all'appello del 02/09/2025, domanda 10.

D: Qual è la dimensione dello spazio $A(3)$ delle matrici $3 \times 3$ antisimmetriche?
- Nove.
- Sei.
+ Tre.
- Zero.
- $A(3)$ non ha una dimensione perché non è uno spazio vettoriale.
= Una matrice antisimmetrica $3 \times 3$ ha la diagonale di zeri, e sotto la diagonale ci sono gli opposti dei numeri sopra. Quindi è decisa dai 3 numeri sopra la diagonale: è una ricetta con tre matrici indipendenti (lezione L06, esercizio 12). La risposta più insidiosa è sei, la dimensione delle simmetriche, che hanno anche la diagonale libera. $A(3)$ è un sottospazio per la Proposizione 6.5, quindi ha una dimensione. Simile agli appelli del 24/01/2024 (domanda 5) e del 15/01/2026 (domanda 4), su $T^s(3)$ e $S(3)$, tutte e due di dimensione 6.

D: Siano $v_1, \dots, v_5$ cinque vettori di $\R^3$ e sia $X = \Span(v_1, \dots, v_5)$. Quale affermazione è sempre vera?
- $\dim X = 5$
+ $\dim X \le 3$
- $X = \R^3$
- $v_1, \dots, v_5$ sono linearmente indipendenti.
- $\dim X$ non è ben definita, perché $X$ non è necessariamente un sottospazio.
= $X$ è uno Span, quindi un sottospazio dello spazio a tre coordinate (Proposizione 6.7), e un sottospazio ha dimensione al massimo quella dello spazio: 3. Cinque vettori in uno spazio di dimensione 3 sono sempre dipendenti, quindi la dimensione 5 è impossibile e non sono indipendenti. La risposta più insidiosa è «$X$ è tutto lo spazio»: non è garantito, per esempio se i cinque vettori sono tutti multipli di uno stesso vettore lo Span è una retta. Simile all'appello del 15/01/2026, domanda 3, dove con tre vettori la risposta giusta era $\dim X \le 3$.

D: Siano $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $D = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$, $E = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$. Quale insieme è una base di $M(2, \R)$?
+ $\{A, B, C, D\}$
- $\{A, B, C\}$
- $\{A, C, D, E\}$
- $\{A, B, C, D, E\}$
- $\{B, D, E\}$
= Si conta per primo: le matrici $2 \times 2$ hanno dimensione 4, quindi una base ha 4 elementi, e le liste da tre o da cinque sono escluse. Per $\{A, B, C, D\}$ si controlla l'indipendenza: $aA + bB + cC + dD = \begin{pmatrix} a + b & c + d \\ c - d & a - b \end{pmatrix}$ è zero solo se $a + b = a - b = 0$ e $c + d = c - d = 0$, cioè tutte le dosi zero. Per il Teorema 7.12 è una base. La risposta più insidiosa è $\{A, C, D, E\}$, che ha 4 elementi: ma $E = A + C$ è un doppione. Simile all'appello del 07/09/2026, domanda 2.

D: Quale polinomio $s(x)$ si può aggiungere a $1 + x$ e $x + x^2$ per ottenere una base di $\R_2[x]$?
+ $s(x) = 1$
- $s(x) = 1 + 2x + x^2$
- $s(x) = 1 - x^2$
- $s(x) = x^3$
- $s(x) = 0$
= Servono 3 polinomi indipendenti, perché la dimensione è 3. Con $s = 1$: la ricetta $a(1 + x) + b(x + x^2) + c = (a + c) + (a + b)x + bx^2$ è zero solo se $b = 0$, poi $a = 0$, poi $c = 0$; tre polinomi indipendenti sono una base. Le altre: $1 + 2x + x^2 = (1 + x) + (x + x^2)$ e $1 - x^2 = (1 + x) - (x + x^2)$ sono doppioni dei primi due; $x^3$ ha grado 3 e non sta nemmeno nello spazio; il polinomio zero rende sempre la lista dipendente. La risposta più insidiosa è $1 + 2x + x^2$, che sembra nuovo ma è la somma degli altri due. Simile all'appello del 10/06/2024, domanda 3.

D: In $\R^3$, tre vettori linearmente indipendenti:
+ sono sempre una base di $\R^3$.
- possono non generare $\R^3$.
- sono una base solo se sono $e_1, e_2, e_3$.
- generano sempre un piano.
- sono una base solo se nessuno ha coordinate nulle.
= È il Teorema 7.12: sono 3 vettori indipendenti in uno spazio di dimensione 3, quindi generano e sono una base. La risposta più insidiosa è «possono non generare»: con il numero giusto di vettori, l'indipendenza basta. Le basi dello spazio sono infinite, non solo la canonica, e i vettori possono avere coordinate nulle, come $e_1, e_2, e_3$ stessi.

D: Qual è la dimensione del sottospazio $W = \{p(x) \in \R_3[x] \mid p(2) = 0\}$?
N: 3
= Fare zero in 2 vuol dire che $x - 2$ divide il polinomio (lezione L04): $p(x) = (x - 2)(a + bx + cx^2)$, con tre lettere libere. Quindi $W$ è lo Span di $x - 2$, $x(x - 2)$ e $x^2(x - 2)$: tre polinomi di gradi diversi, quindi indipendenti. La dimensione è 3, cioè 4 (quella dello spazio) meno 1 condizione. Simile all'appello del 10/07/2025, domanda 2 (con $p(6) = 0$).

D: Per quali valori di $k \in \R$ i vettori $(1, k)$ e $(k, 4)$ di $\R^2$ sono linearmente dipendenti?
- Solo per $k = 2$.
+ Per $k = 2$ e per $k = -2$.
- Solo per $k = 4$.
- Per nessun valore di $k$.
- Per ogni valore di $k$.
= Due vettori sono dipendenti esattamente quando uno è multiplo dell'altro. Perché $(k, 4)$ sia $t$ volte $(1, k)$ servono $t = k$ (prima coordinata) e $4 = tk = k^2$ (seconda), cioè $k = 2$ oppure $k = -2$. Il vettore $(1, k)$ non è mai zero, quindi basta questo caso. Controllo: con $k = 2$, $(2, 4) = 2(1, 2)$; con $k = -2$, $(-2, 4) = -2(1, -2)$. La risposta più insidiosa è «solo per $k = 2$», che dimentica la radice negativa di 4.
```

## Esercizi

::: esercizio base Riscaldamento: multipli o no
I vettori $(2, -4)$ e $(-1, 2)$ sono dipendenti? E $(2, 4)$ e $(1, 3)$?
::: soluzione
1. $(2, -4) = -2 \cdot (-1, 2)$: uno è multiplo dell'altro, quindi sono **dipendenti**. Una ricetta che dà zero: $(2, -4) + 2 \cdot (-1, 2) = (0, 0)$.
2. Perché $(2, 4)$ sia $k$ volte $(1, 3)$ servirebbero $k = 2$ (prima coordinata) e $4 = 3k$ (seconda), cioè $k = \frac 43$. Impossibile: sono **indipendenti**.
:::

::: esercizio base Riscaldamento: c'è lo zero
La lista $(1, 1)$, $(0, 0)$ è indipendente? Scrivi una ricetta che lo dimostra.
::: soluzione
No: c'è il vettore zero. La ricetta $0 \cdot (1, 1) + 5 \cdot (0, 0) = (0, 0)$ dà zero con una dose, 5, diversa da zero. Quindi i vettori sono dipendenti.
:::

::: esercizio base Riscaldamento: quanti vettori in una base
Quanti vettori ha una base di: (a) $\R^4$; (b) i polinomi di grado al massimo 3; (c) le matrici $2 \times 3$; (d) le matrici $3 \times 3$?
::: soluzione
1. (a) $\R^4$ ha dimensione 4: 4 vettori.
2. (b) Base canonica $1, x, x^2, x^3$: 4 polinomi.
3. (c) Una matrice $e_{ij}$ per casella: $2 \cdot 3 = 6$.
4. (d) $3 \cdot 3 = 9$.
:::

::: esercizio base Riscaldamento: la base canonica
Scrivi $(4, -3)$ e $(0, 7, -1)$ come ricette con la base canonica.
::: soluzione
1. $(4, -3) = 4e_1 - 3e_2$, con $e_1 = (1, 0)$ ed $e_2 = (0, 1)$.
2. $(0, 7, -1) = 0e_1 + 7e_2 - e_3$, con $e_1, e_2, e_3$ della base canonica a tre coordinate.

Le dosi sono le coordinate del vettore.
:::

::: esercizio base Esercizio 7.14 delle dispense: una base di $\R^2$
Dimostra che i vettori $\begin{pmatrix} -1 \\ 1 \end{pmatrix}$ e $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ formano una base di $\R^2$.
::: soluzione
**Con il Teorema 7.12.** Sono due vettori e il piano ha dimensione 2, quindi basta l'indipendenza. Due vettori sono dipendenti solo se sono multipli: $(2, 1) = k(-1, 1)$ chiederebbe $k = -2$ (prima coordinata) e $k = 1$ (seconda), impossibile. Quindi sono indipendenti, e sono una base.

**Direttamente, controllando anche che generino.** Cerco le dosi $t$ e $u$ con $t(-1, 1) + u(2, 1) = (x, y)$, per un vettore qualsiasi $(x, y)$:
$$\begin{cases} -t + 2u = x \\ t + u = y \end{cases}$$
1. Sommo le due equazioni: $3u = x + y$, quindi $u = \frac{x + y}3$.
2. Dalla seconda: $t = y - u = \frac{-x + 2y}3$.

Le dosi ci sono sempre, quindi i vettori generano il piano. E sono di un solo tipo: per $(x, y) = (0, 0)$ vengono $t = u = 0$, quindi sono indipendenti.

Controllo con $(x, y) = (1, 2)$: $u = 1$ e $t = 1$, e infatti $(-1, 1) + (2, 1) = (1, 2)$.
:::

::: esercizio base Dipendenti o indipendenti?
Per ciascuna lista di' se i vettori sono dipendenti o indipendenti. Se sono dipendenti, scrivi una combinazione non banale uguale a zero.
(a) $(3, -6)$ e $(-1, 2)$ in $\R^2$.
(b) $(1, 0, 2)$ e $(2, 0, 1)$ in $\R^3$.
(c) $(1, 2)$, $(1, 1)$ e $(2, 0)$ in $\R^2$.
(d) $(1, 2, 3)$, $(0, 0, 0)$ e $(4, 5, 6)$ in $\R^3$.
(e) $(1, 2, 3)$, $(0, 1, 5)$ e $(0, 0, 2)$ in $\R^3$.
::: soluzione
(a) **Dipendenti**: $(3, -6) = -3 \cdot (-1, 2)$, quindi $(3, -6) + 3(-1, 2) = (0, 0)$.

(b) **Indipendenti**: sono due vettori non multipli. Perché $(2, 0, 1)$ sia $k$ volte $(1, 0, 2)$ servirebbero $k = 2$ e $1 = 2k$, cioè $k = \frac 12$: impossibile.

(c) **Dipendenti**: sono tre vettori nel piano, che ha dimensione 2. Una ricetta che dà zero (dal libro di Martelli, Esempio 2.3.2): $-2(1, 2) + 4(1, 1) - (2, 0) = (-2 + 4 - 2,\ -4 + 4 - 0) = (0, 0)$.

(d) **Dipendenti**: c'è il vettore zero, e $0 \cdot (1, 2, 3) + 1 \cdot (0, 0, 0) + 0 \cdot (4, 5, 6) = 0$.

(e) **Indipendenti.** Chiedo $a(1, 2, 3) + b(0, 1, 5) + c(0, 0, 2) = 0$.
1. Prima coordinata: $a = 0$.
2. Seconda: $2a + b = 0$, quindi $b = 0$.
3. Terza: $3a + 5b + 2c = 0$, quindi $c = 0$.

La forma «a scalini» (ogni vettore ha degli zeri dove il precedente comincia) fa risolvere le equazioni una alla volta.
:::

::: esercizio medio Esercizio 7.13 delle dispense: la base canonica delle matrici
Per ogni $1 \le i \le m$ e $1 \le j \le n$ indichiamo con $e_{ij}$ la matrice $m \times n$ che ha tutti zeri, tranne un $1$ nella casella di riga $i$ e colonna $j$. Per esempio, per le matrici $2 \times 2$:
$$e_{11} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad e_{12} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad e_{21} = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}, \quad e_{22} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}.$$
Dimostra che le matrici $e_{ij}$, con $1 \le i \le m$ e $1 \le j \le n$, formano una base di $M(m, n, \K)$. In particolare $\dim M(m, n, \K) = mn$.
::: soluzione
È la stessa dimostrazione della base canonica di $\K^n$ (Esempio 7.8), con due numerini invece di uno.

**Generano.** Ogni matrice è una ricetta con le $e_{ij}$, con dosi uguali ai suoi numeri. Un esempio:
$$\begin{pmatrix} 3 & -1 \\ 0 & 5 \end{pmatrix} = 3e_{11} - e_{12} + 0e_{21} + 5e_{22}.$$
In generale $a_{ij} e_{ij}$ è la matrice con il numero $a_{ij}$ nella casella $(i, j)$ e zeri altrove; sommando tutte queste matrici si riempiono tutte le caselle:
$$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix} = \sum_{i, j} a_{ij} e_{ij}.$$
Il simbolo $\sum$ si legge «somma»: qui vuol dire «la somma dei pezzi $a_{ij} e_{ij}$, per tutte le righe $i$ e tutte le colonne $j$».

**Sono indipendenti.** Se la ricetta $\sum_{i, j} \lambda_{ij} e_{ij}$ dà la matrice nulla, scrivendola per esteso
$$\begin{pmatrix} \lambda_{11} & \cdots & \lambda_{1n} \\ \vdots & & \vdots \\ \lambda_{m1} & \cdots & \lambda_{mn} \end{pmatrix} = \begin{pmatrix} 0 & \cdots & 0 \\ \vdots & & \vdots \\ 0 & \cdots & 0 \end{pmatrix},$$
quindi ogni dose $\lambda_{ij}$ è zero.

**Dimensione.** C'è una matrice $e_{ij}$ per ogni casella: $m$ righe per $n$ colonne, cioè $mn$ matrici. Quindi $\dim M(m, n, \K) = mn$; per esempio $\dim M(2, 3) = 6$ e $\dim M(3) = 9$.
:::

::: esercizio medio Esercizio 7.15 delle dispense: dipendenti e indipendenti in $\R^3$
Considera i vettori di $\R^3$
$$v_1 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}, \quad v_2 = \begin{pmatrix} -1 \\ 1 \\ -1 \end{pmatrix}, \quad v_3 = \begin{pmatrix} 1 \\ 5 \\ 4 \end{pmatrix}, \quad v_4 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$
Mostra che $v_1, v_2, v_3$ sono dipendenti e $v_1, v_2, v_4$ indipendenti.
::: soluzione
**$v_1, v_2, v_3$ sono dipendenti.** Provo a scrivere $v_3$ come ricetta con $v_1$ e $v_2$ (Proposizione 7.2): cerco $a$ e $b$ con $a v_1 + b v_2 = v_3$, cioè
$$\begin{cases} a - b = 1 \\ a + b = 5 \\ 2a - b = 4 \end{cases}$$
1. Sommo le prime due: $2a = 6$, quindi $a = 3$.
2. Dalla seconda: $b = 5 - 3 = 2$.
3. Controllo la terza: $2 \cdot 3 - 2 = 4$. Vera.

Quindi $v_3 = 3v_1 + 2v_2$, cioè $3v_1 + 2v_2 - v_3 = 0$: una ricetta che dà zero con dosi diverse da zero.

Controllo: $3(1, 1, 2) + 2(-1, 1, -1) = (3 - 2,\ 3 + 2,\ 6 - 2) = (1, 5, 4) = v_3$.

**$v_1, v_2, v_4$ sono indipendenti.** Chiedo $a v_1 + b v_2 + c v_4 = 0$:
$$\begin{cases} a - b = 0 \\ a + b + c = 0 \\ 2a - b + c = 0 \end{cases}$$
1. Dalla prima: $b = a$.
2. Sostituisco: la seconda diventa $2a + c = 0$, la terza $a + c = 0$.
3. Tolgo la terza dalla seconda: $a = 0$. Quindi $c = 0$ e $b = 0$.

Solo la ricetta con tutte le dosi zero: indipendenti. Sono tre vettori indipendenti nello spazio a tre coordinate, quindi sono anche una base (Teorema 7.12).
:::

::: esercizio medio Polinomi indipendenti e basi di $\R_3[x]$
(a) Dimostra che polinomi non nulli di gradi tutti diversi sono linearmente indipendenti.
(b) I polinomi $f = x^3 + x$, $g = x^2 - 1$, $h = x^3 + x^2 + x - 1$ sono indipendenti?
(c) I polinomi $f = x^3 + x$, $g = x^2 - 1$, $k = x^3 - x$ sono indipendenti? Sono una base di $\R_3[x]$? Se no, completali a una base.
::: soluzione
(a) Ordino i polinomi dal grado più basso al più alto. Prendo una ricetta che dà il polinomio zero.
1. La potenza più alta compare solo nell'ultimo polinomio. Nella ricetta, il numero davanti a quella potenza è la dose dell'ultimo polinomio per un numero diverso da zero. Deve essere zero, quindi la dose dell'ultimo polinomio è zero.
2. Resta una ricetta con gli altri polinomi che dà zero, e si ripete: anche la dose del penultimo è zero.
3. Si continua fino al primo: tutte le dosi sono zero.

(b) **No**: $h = f + g$, perché $(x^3 + x) + (x^2 - 1) = x^3 + x^2 + x - 1$. Quindi $f + g - h = 0$.

(c) Chiedo $a f + b g + c k = 0$:
$$a(x^3 + x) + b(x^2 - 1) + c(x^3 - x) = (a + c)x^3 + bx^2 + (a - c)x - b = 0.$$
Tutti i numeri davanti alle potenze devono essere zero: $b = 0$, $a + c = 0$, $a - c = 0$, quindi $a = c = 0$. Sono **indipendenti**.

Non sono una base: sono 3 polinomi e lo spazio ha dimensione 4, quindi non generano. Per esempio ogni ricetta ha il termine noto uguale a $-b$ e il numero davanti a $x^2$ uguale a $b$: il polinomio 1, con termine noto 1 e niente $x^2$, non si ottiene.

Completamento: aggiungo il polinomio 1. Chiedo $af + bg + ck + d \cdot 1 = 0$:
$$(a + c)x^3 + bx^2 + (a - c)x + (d - b) = 0,$$
quindi $b = 0$, $a = c = 0$ e $d = b = 0$. Quattro polinomi indipendenti in uno spazio di dimensione 4: per il Teorema 7.12, $f, g, k, 1$ sono una base.
:::

::: esercizio medio Una base con un parametro
Per quali $k \in \R$ i vettori $u_1 = (1, 1, 0)$, $u_2 = (0, 1, 1)$, $u_3 = (1, 0, k)$ sono una base di $\R^3$?
::: soluzione
Sono tre vettori nello spazio a tre coordinate: per il Teorema 7.12 basta capire quando sono indipendenti. Chiedo $a u_1 + b u_2 + c u_3 = 0$:
$$\begin{cases} a + c = 0 \\ a + b = 0 \\ b + kc = 0 \end{cases}$$
1. Dalla prima: $a = -c$.
2. Dalla seconda: $b = -a = c$.
3. La terza diventa $c + kc = (1 + k)c = 0$.

Due casi:
- Se $k$ non è $-1$, il numero $1 + k$ non è zero, quindi $c = 0$, e poi $a = b = 0$: indipendenti, **base**.
- Se $k = -1$, qualsiasi $c$ va bene: per esempio $c = 1$, $a = -1$, $b = 1$ dà $-u_1 + u_2 + u_3 = 0$. Dipendenti, **non** è una base.

Con $k = -1$ si ritrovano i vettori dell'Esempio 7.4 (con $u_3 = v_3$). Nella lezione L13 lo stesso risultato si ottiene con il determinante: la matrice dei tre vettori ha determinante $1 + k$.
:::

::: esercizio medio Completare una base ed estrarne una
(a) Completa $w_1 = (1, 1, 0)$, $w_2 = (-1, 0, 1)$ a una base di $\R^3$.
(b) Siano $v_1 = (1, 0, 1)$, $v_2 = (0, 1, 1)$, $v_3 = (1, 1, 2)$, $v_4 = (1, -1, 0)$. Estrai da $v_1, v_2, v_3, v_4$ una base di $U = \Span(v_1, v_2, v_3, v_4)$ e trova $\dim U$.
::: soluzione
(a) Basta aggiungere un vettore che non stia nel piano generato da $w_1$ e $w_2$ (esercizio 12). Provo $e_1 = (1, 0, 0)$, la scelta del libro di Martelli (Esempio 2.3.21). Chiedo $a w_1 + b w_2 + c e_1 = 0$:
$$\begin{cases} a - b + c = 0 \\ a = 0 \\ b = 0 \end{cases}$$
quindi $a = b = 0$ e poi $c = 0$. Tre vettori indipendenti nello spazio a tre coordinate: $w_1, w_2, e_1$ è una base.

(b) Cerco i doppioni.
1. $v_3 = v_1 + v_2$, perché $(1, 0, 1) + (0, 1, 1) = (1, 1, 2)$.
2. $v_4 = v_1 - v_2$, perché $(1, 0, 1) - (0, 1, 1) = (1, -1, 0)$.
3. Tolgo $v_3$ e $v_4$: lo Span non cambia (Proposizione 7.2). Restano $v_1$ e $v_2$, che non sono multipli, quindi sono indipendenti.

Una base di $U$ è $v_1, v_2$, e **$\dim U = 2$**: $U$ è il piano $z = x + y$ dell'Esercizio 6.10.
:::

::: esercizio difficile Aggiungere un vettore fuori dallo Span
Siano $v_1, \dots, v_k$ vettori indipendenti di $V$ e sia $v_{k+1} \in V$. Dimostra che
$$v_1, \dots, v_{k+1} \text{ sono indipendenti} \iff v_{k+1} \notin \Span(v_1, \dots, v_k).$$
Deduci che, in uno spazio di dimensione $n$, ogni lista di vettori indipendenti si può completare a una base.
::: soluzione
Il simbolo $\notin$ si legge «non appartiene a».

**Primo verso: se sono indipendenti, il nuovo vettore sta fuori dallo Span.** Se invece stesse dentro, cioè $v_{k+1} = \lambda_1 v_1 + \dots + \lambda_k v_k$, allora $\lambda_1 v_1 + \dots + \lambda_k v_k - v_{k+1} = 0$ sarebbe una ricetta che dà zero con la dose $-1$: i vettori sarebbero dipendenti.

**Secondo verso: se il nuovo vettore sta fuori dallo Span, sono indipendenti.** Prendo una ricetta $\lambda_1 v_1 + \dots + \lambda_k v_k + \lambda_{k+1} v_{k+1} = 0$.
- Se la dose $\lambda_{k+1}$ non fosse zero, dividendo per lei ricaverei $v_{k+1}$ come ricetta con $v_1, \dots, v_k$: contro l'ipotesi che stia fuori dallo Span.
- Quindi $\lambda_{k+1} = 0$, e resta $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$. I primi $k$ vettori sono indipendenti, quindi anche $\lambda_1 = \dots = \lambda_k = 0$.

**Completamento.** Lo spazio ha dimensione $n$ e i vettori indipendenti sono $k$, meno di $n$. Allora non generano tutto (meno di $n$ vettori non generano), quindi c'è un vettore $v_{k+1}$ fuori dal loro Span. Per quanto appena dimostrato, $v_1, \dots, v_{k+1}$ sono ancora indipendenti. Si ripete finché i vettori sono $n$: a quel punto sono $n$ vettori indipendenti, cioè una base per il Teorema 7.12. È l'algoritmo di completamento del libro di Martelli (§2.3.5).
:::

::: esercizio esame Come all'esame: basi e dimensioni degli spazi di matrici
Trova una base e la dimensione di ciascuno dei sottospazi $D(3)$, $T^s(3)$, $S(3)$ e $A(3)$ di $M(3)$. Poi di' quanto valgono in generale $\dim D(n)$, $\dim T^s(n)$, $\dim S(n)$ e $\dim A(n)$.
::: soluzione
Uso le matrici $e_{ij}$ dell'Esercizio 7.13. In ogni caso scrivo la matrice generica, la riscrivo come ricetta e controllo l'indipendenza: ogni lettera libera compare da sola in una casella in cui le altre matrici hanno 0, quindi una ricetta che dà la matrice nulla ha tutte le dosi zero.

- **$D(3)$**: $\begin{pmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix} = a e_{11} + b e_{22} + c e_{33}$. Base $e_{11}, e_{22}, e_{33}$: **dimensione 3**.
- **$T^s(3)$**: $\begin{pmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{pmatrix} = a e_{11} + b e_{12} + c e_{13} + d e_{22} + e\, e_{23} + f e_{33}$. Base $e_{11}, e_{12}, e_{13}, e_{22}, e_{23}, e_{33}$: **dimensione 6**. È la risposta dell'appello del 24/01/2024, domanda 5.
- **$S(3)$**: base $e_{11}, e_{22}, e_{33}, e_{12} + e_{21}, e_{13} + e_{31}, e_{23} + e_{32}$ (riquadro sull'appello del 15/01/2026): **dimensione 6**.
- **$A(3)$**: $\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix} = a(e_{12} - e_{21}) + b(e_{13} - e_{31}) + c(e_{23} - e_{32})$. Base di tre matrici: **dimensione 3**.

Controllo: $\dim S(3) + \dim A(3) = 6 + 3 = 9 = \dim M(3)$.

**In generale**, per matrici $n \times n$:
- $\dim D(n) = n$: le lettere libere sono quelle della diagonale;
- $\dim T^s(n) = \dim T^i(n) = \dim S(n) = \frac{n(n + 1)}2$: la diagonale ($n$ caselle) più il triangolo sopra ($\frac{n(n - 1)}2$ caselle), cioè $n + \frac{n(n - 1)}2 = \frac{n(n + 1)}2$;
- $\dim A(n) = \frac{n(n - 1)}2$: solo il triangolo sopra la diagonale, perché la diagonale è fatta di zeri.

Con $n = 3$: 3, 6, 6, 3, come sopra.
:::

::: esercizio esame Come all'esame: la dimensione di sottospazi di polinomi
Calcola una base e la dimensione di:
(a) $W_1 = \{p(x) \in \R_3[x] \mid p(1) = 0\}$;
(b) $W_2 = \{p(x) \in \R_3[x] \mid p(2) = 0 \text{ e } p(-2) = 0\}$;
(c) $W_3 = \{p(x) \in \R_2[x] \mid p(0) = p(1)\}$.
::: soluzione
(a) Per la lezione L04, fare zero in 1 vuol dire che $x - 1$ divide il polinomio: $p(x) = (x - 1)(a + bx + cx^2)$, con $a$, $b$, $c$ qualsiasi. Quindi $W_1$ è lo Span di
$$x - 1, \qquad x(x - 1) = x^2 - x, \qquad x^2(x - 1) = x^3 - x^2.$$
I tre polinomi hanno gradi 1, 2, 3, quindi sono indipendenti (esercizio 9 (a)): **$\dim W_1 = 3$**. È il sottospazio dell'appello del 24/01/2024, domanda 1, nella lezione L06.

(b) Fare zero in 2 e in $-2$ vuol dire che $x - 2$ e $x + 2$ dividono il polinomio, quindi $p(x) = (x^2 - 4)(a + bx)$ con $a$ e $b$ qualsiasi:
$$W_2 = \Span\big(x^2 - 4,\ x^3 - 4x\big).$$
Due polinomi di gradi diversi, indipendenti: **$\dim W_2 = 2$**. È la risposta dell'appello del 03/07/2026, domanda 1.

(c) Scrivo $p(x) = ax^2 + bx + c$.
1. $p(0) = c$ e $p(1) = a + b + c$.
2. La condizione $p(0) = p(1)$ diventa $a + b = 0$, cioè $b = -a$.
3. Quindi $p(x) = ax^2 - ax + c = a(x^2 - x) + c \cdot 1$.

$W_3$ è lo Span di $x^2 - x$ e 1. Due polinomi di gradi diversi, indipendenti: **$\dim W_3 = 2$**.

In tutti e tre i casi la dimensione è quella dello spazio meno il numero di condizioni indipendenti: $4 - 1 = 3$, $4 - 2 = 2$, $3 - 1 = 2$. È un'anticipazione del teorema della dimensione (lezione L14).
:::

::: esercizio esame Come all'esame: generatori, indipendenti, base?
Per ciascuna lista stabilisci se i vettori sono linearmente indipendenti, se generano lo spazio indicato e se ne formano una base.
(a) $(1, -1)$, $(2, 1)$, $(0, 3)$ in $\R^2$.
(b) $(1, 0, 2)$, $(0, 1, -1)$, $(2, 1, 3)$ in $\R^3$.
(c) $(1, 1, 0, 0)$, $(0, 1, 1, 0)$, $(0, 0, 1, 1)$ in $\R^4$.
::: soluzione
(a) Tre vettori nel piano: **dipendenti**. Generano: $(1, -1)$ e $(2, 1)$ non sono multipli, quindi sono già una base del piano, e aggiungendo $(0, 3)$ si genera ancora. **Generatori, non base.** Il doppione: cerco $a$ e $b$ con $a(1, -1) + b(2, 1) = (0, 3)$, cioè $a + 2b = 0$ e $-a + b = 3$. Sommando, $3b = 3$, quindi $b = 1$ e $a = -2$: $(0, 3) = -2(1, -1) + (2, 1)$.

(b) $2(1, 0, 2) + (0, 1, -1) = (2, 1, 3)$: il terzo è un doppione dei primi due, **dipendenti**. I primi due non sono multipli, quindi lo Span ha dimensione 2: è un piano, **non generano** lo spazio. **Non è una base.**

(c) Chiedo $a(1, 1, 0, 0) + b(0, 1, 1, 0) + c(0, 0, 1, 1) = 0$.
1. Prima coordinata: $a = 0$.
2. Seconda: $a + b = 0$, quindi $b = 0$.
3. Quarta: $c = 0$.

**Indipendenti.** Ma sono 3 vettori e lo spazio ha dimensione 4: **non generano**, e **non sono una base**. Per esempio $e_4 = (0, 0, 0, 1)$ non si ottiene: servirebbero $a = 0$ (prima coordinata), poi $b = 0$ (seconda), poi $c = 0$ (terza), ma allora la quarta coordinata sarebbe 0, non 1.
:::

## Domande di ripasso

::: domanda Quando dei vettori sono linearmente dipendenti? E indipendenti?
Dipendenti: c'è una ricetta con dosi non tutte zero che dà il vettore zero. Indipendenti: l'unica ricetta che dà zero è quella con tutte le dosi zero.
:::

::: domanda Che cosa dice la Proposizione 7.2, e perché è vera?
Dei vettori sono dipendenti esattamente quando uno di loro è una ricetta con gli altri, cioè un doppione. Se una ricetta che dà zero ha una dose diversa da zero, si divide per quella dose e si ricava quel vettore dagli altri. Al contrario, se un vettore è una ricetta con gli altri, portando tutto da una parte si ottiene una ricetta che dà zero con la dose $-1$.
:::

::: domanda Quando un solo vettore è dipendente? E due vettori?
Un vettore da solo è dipendente solo se è il vettore zero. Due vettori sono dipendenti solo se uno è multiplo dell'altro.
:::

::: domanda Tre vettori diversi da zero e a coppie non multipli sono per forza indipendenti?
No. Nell'Esempio 7.4, $(1, 1, 0)$, $(0, 1, 1)$ e $(1, 0, -1)$ sono diversi da zero e a coppie non multipli, ma $v_1 - v_2 - v_3 = 0$. Con tre o più vettori bisogna risolvere il sistema.
:::

::: domanda Perché una lista che contiene il vettore zero è sempre dipendente?
Perché dando dose 1 al vettore zero e dose 0 a tutti gli altri si ottiene zero, con una dose diversa da zero.
:::

::: domanda Che cos'è una base? Fai un esempio nel piano diverso dalla base canonica.
Una lista di vettori indipendenti che generano tutto lo spazio. Nel piano anche $(1, 2), (2, 1)$ è una base: sono due vettori non multipli, quindi indipendenti, e per il Teorema 7.12 generano.
:::

::: domanda Qual è la base canonica di $\K^n$? E dei polinomi di grado al massimo $n$?
In $\K^n$: $e_1, \dots, e_n$, dove $e_i$ ha un 1 al posto $i$ e zeri altrove. Nei polinomi di grado al massimo $n$: $1, x, x^2, \dots, x^n$, che sono $n + 1$ polinomi.
:::

::: domanda Che cosa dice il Teorema 7.10, e perché serve?
Tutte le basi di uno stesso spazio hanno lo stesso numero di vettori. Serve perché la dimensione, cioè il numero di vettori di una base, non dipenda dalla base scelta.
:::

::: domanda Quali sono le dimensioni di $\K^n$, dei polinomi di grado al massimo $n$, delle matrici $m \times n$ e di tutti i polinomi?
$n$, $n + 1$, $mn$ e infinita. Tutti i polinomi insieme non hanno basi finite, perché ogni lista finita di polinomi genera solo polinomi fino a un certo grado.
:::

::: domanda Che cosa dice il Teorema 7.12? Fai un esempio.
Se i vettori sono tanti quanta è la dimensione, sono una base appena sono indipendenti, oppure appena generano: l'altra condizione arriva da sola. Esempio: $(-1, 1)$ e $(2, 1)$ non sono multipli, quindi sono indipendenti, e sono una base del piano.
:::

::: domanda Quattro vettori dello spazio a tre coordinate possono essere indipendenti? Due vettori possono generarlo?
No in tutti e due i casi. In uno spazio di dimensione $n$, più di $n$ vettori sono sempre dipendenti e meno di $n$ vettori non generano mai tutto.
:::

::: domanda Come si calcola la dimensione di un sottospazio definito da condizioni?
Si scrive l'elemento generico con le lettere libere, lo si riscrive come ricetta con un vettore per lettera, si controlla che quei vettori siano indipendenti e si contano. Per esempio i polinomi di grado al massimo 3 che fanno zero in 2 hanno dimensione 3.
:::

::: domanda Quanto valgono $\dim S(3)$, $\dim T^s(3)$ e $\dim A(3)$?
6, 6 e 3. In generale le simmetriche e le triangolari superiori $n \times n$ hanno dimensione $\frac{n(n + 1)}2$, le antisimmetriche $\frac{n(n - 1)}2$.
:::

## Glossario

```glossario
Combinazione banale | La ricetta con tutte le dosi uguali a zero. Dà sempre il vettore zero, con qualsiasi vettori.
Linearmente dipendenti | Vettori con un doppione: una ricetta con dosi non tutte zero dà il vettore zero. Per esempio $(1, 2)$ e $(2, 4)$.
Linearmente indipendenti | Vettori senza doppioni: l'unica ricetta che dà zero ha tutte le dosi zero. Per esempio $(1, 2)$ e $(2, 1)$.
Vettori multipli | Due vettori uno uguale all'altro moltiplicato per un numero. Per due vettori, essere multipli vuol dire essere dipendenti.
Generatori | Vettori con cui si ottiene tutto lo spazio: ogni vettore è una loro ricetta.
Base | Una lista di vettori indipendenti che generano tutto lo spazio: gli ingredienti giusti, nessuno sprecato.
Base canonica di $\K^n$ | I vettori $e_1, \dots, e_n$, ciascuno con un 1 in un posto e zeri altrove.
Base canonica di $\K_n[x]$ | I polinomi $1, x, x^2, \dots, x^n$: sono $n + 1$.
Matrici $e_{ij}$ | La matrice con un 1 nella riga $i$ e colonna $j$, e zeri altrove. Formano la base canonica delle matrici.
Dimensione | Il numero di vettori di una base. Si scrive $\dim V$; è infinita se nessuna lista finita genera lo spazio.
Definizione ben posta | Una definizione che non dipende dalle scelte fatte. Per la dimensione lo garantisce il Teorema 7.10.
Dimensione infinita | Quella di uno spazio che nessuna lista finita genera, come tutti i polinomi insieme.
Coordinate rispetto a una base | Le dosi dell'unica ricetta che dà un vettore con gli ingredienti di una base (lezione L13).
Lemma di scambio | Se $n$ vettori generano lo spazio, altri $n$ vettori indipendenti lo generano anche loro. È la chiave del Teorema 7.10.
Completamento a una base | Aggiungere a vettori indipendenti vettori fuori dal loro Span, finché sono tanti quanta è la dimensione.
Estrazione di una base | Togliere da una lista che genera i doppioni, finché restano vettori indipendenti.
Rango (anticipo) | Il numero massimo di righe, o colonne, indipendenti di una matrice (lezione L08).
```

## Checklist

```checklist
- So dire a parole e con la formula quando dei vettori sono indipendenti.
- So dimostrare che dei vettori sono indipendenti scrivendo la ricetta con le dosi sconosciute e risolvendo il sistema.
- So dimostrare che dei vettori sono dipendenti mostrando una ricetta con dosi non tutte zero che dà zero.
- So spiegare la Proposizione 7.2 e riconoscere i casi con uno e due vettori.
- So spiegare con l'Esempio 7.4 perché con tre vettori non basta guardarli a coppie.
- So dire che cos'è una base e perché $e_1, \dots, e_n$ e $1, x, \dots, x^n$ sono basi.
- So le dimensioni di $\K^n$, dei polinomi di grado al massimo $n$, delle matrici e di tutti i polinomi, senza sbagliare il $+1$ dei polinomi.
- So usare il Teorema 7.12 per dimostrare che dei vettori sono una base controllando solo l'indipendenza.
- So rispondere a «generatori e/o indipendenti?» contando i vettori e cercando i doppioni.
- So calcolare base e dimensione di sottospazi di matrici e di polinomi definiti da condizioni.
- So completare dei vettori indipendenti a una base ed estrarre una base da una lista che genera.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 7 «Spazi vettoriali III», pp. 31–35: le sezioni 7.A–7.D sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni, teoremi, esempi ed esercizi mantengono la loro numerazione (Definizioni 7.1, 7.7 e 7.11, Proposizioni 7.2 e 7.6, Esempi 7.3–7.5, 7.8 e 7.9, Teoremi 7.10 e 7.12, Esercizi 7.13–7.15, svolti come esercizi 7, 5 e 8).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §2.3.1–2.3.7 (indipendenza lineare ed Esempio 2.3.2, basi canoniche, coordinate e Proposizione 2.3.11, lemma di scambio e dimostrazione del Teorema 2.3.16, dimensione infinita di $\K[x]$, algoritmi di completamento e di estrazione ed Esempio 2.3.21, Proposizioni 2.3.20, 2.3.23 e 2.3.25).
- **Appelli citati** (testi e soluzioni sul Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (domande 1 e 5), 10/06/2024 (domanda 3), 10/07/2024 (domanda 2), 06/09/2024 (domanda 2), 16/01/2025 (domanda 2), 10/07/2025 (domanda 2), 02/09/2025 (domanda 10 e problema 11), 15/01/2026 (domande 3 e 4), 03/07/2026 (domanda 1), 07/09/2026 (domanda 2). Le domande del 16/01/2025 (2), del 07/09/2026 (2) e del 15/01/2026 (4) sono riportate con soluzioni scritte per questi appunti. Foglio di esercizi 2 del tutorato 2025 (Buzano, Radeschi), esercizi 1, 3 e 4, come modello di alcuni esercizi.
- Le parti **«Oltre le dispense»** (il metodo di Gauss per contare i vettori indipendenti, le coordinate, la dimostrazione dei Teoremi 7.10 e 7.12, le conseguenze per i quiz, i metodi per l'esame e gli esercizi che non vengono dalle dispense) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
