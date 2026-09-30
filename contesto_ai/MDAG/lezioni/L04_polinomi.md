---
corso: MDAG
modulo: AG
lezione: L04
titolo: Polinomi
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Algebra lineare e Geometria · Canali A, B e C · Lezione L04
descrizione: >-
  Appunti della lezione L04 di Algebra lineare e Geometria (MDAG, parte 2): polinomi e grado, divisione con resto
  e regola di Ruffini, radici e molteplicità, quante radici può avere un polinomio, teorema fondamentale
  dell'algebra, equazioni di secondo grado nei complessi e polinomi a coefficienti reali, con quiz nello stile
  dell'esame ed esercizi svolti.
lede: >-
  I polinomi come $x^3 - 2x + 5$ si sommano, si moltiplicano e si dividono con resto, proprio come i numeri interi.
  Le loro radici corrispondono ai fattori $x - a$ e si contano con la molteplicità: un polinomio di grado $n$ ne ha
  al più $n$, e nei complessi esattamente $n$ (teorema fondamentale dell'algebra). Servono in tutto il corso:
  autovalori, determinanti con un parametro e spazi di polinomi $\R_k[x]$ partono da qui.
materiale: dispense
scheda:
  Dispense: lezione 4 · pp. 15–19
  Libro: Martelli, §1.3 (pp. 21–25) e §1.4.7–1.4.8 (pp. 31–33)
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 90–120 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 4 «Polinomi»; B. Martelli, Geometria e algebra lineare, §1.3 e §1.4.7–1.4.8
file_en: L04_polynomials.html
appunti_html: appunti/MDAG/L04_polinomi.html
genera_html: true
---

## In breve

- Un **polinomio** in una variabile, scritto in forma normale, è $p(x) = a_nx^n + \dots + a_1x + a_0$ con $a_n \neq 0$; il numero $n$ è il suo **grado**. $\R[x]$ e $\C[x]$ sono i polinomi a coefficienti reali e complessi, $\R_k[x]$ quelli reali di grado al più $k$.
- Come tra gli interi, si può **dividere con resto**: dati $p(x)$ e $d(x) \neq 0$ esistono e sono unici $q(x)$ e $r(x)$ con $p(x) = q(x)d(x) + r(x)$ e grado di $r$ minore del grado di $d$. Se $r = 0$ si dice che $d(x)$ **divide** $p(x)$.
- Un numero $a$ è una **radice** di $p(x)$ se $p(a) = 0$. Proposizione 4.2: $a$ è radice se e solo se $(x - a)$ divide $p(x)$. In più il resto della divisione per $x - a$ è proprio $p(a)$.
- La **molteplicità** di una radice $a$ è il massimo $k$ per cui $(x - a)^k$ divide $p(x)$: in $(x - 1)^3(x + 1)$ la radice $1$ ha molteplicità $3$.
- Teorema 4.6: un polinomio di grado $n \ge 1$ ha **al più $n$ radici**, contate con molteplicità. Tra i reali possono essere meno: $x^2 + 1$ non ne ha.
- **Teorema fondamentale dell'algebra** (4.8): un polinomio a coefficienti complessi di grado $n$ ha **esattamente $n$ radici** complesse, contate con molteplicità.
- La formula $x_\pm = \frac{-b \pm \sqrt\Delta}{2a}$ funziona anche in $\C$, con $\pm\sqrt\Delta$ le due radici quadrate complesse di $\Delta$.
- Proposizione 4.11: se i coefficienti sono **reali** e $z$ è una radice, anche $\bar z$ lo è. All'esame: «quale di questi numeri è una radice di $p(z)$?» è stata la domanda sui complessi in tre appelli.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Monomi e polinomi (p. 15)

Le dispense descrivono i polinomi come funzioni particolarmente semplici, ottenute combinando numeri e variabili con le sole operazioni $+$, $-$ e $\cdot$. Niente divisioni per una variabile, niente radici di variabili, niente esponenti negativi: $x^2 + 3$ è un polinomio, $\frac 1x$ e $\sqrt x$ no.

### Monomi

Un **monomio** è un'espressione con una **parte numerica**, il **coefficiente**, e una **parte letterale**, fatta di variabili elevate a esponenti naturali. Il **grado** di un monomio è la somma degli esponenti delle variabili.

| Monomio | Coefficiente | Parte letterale | Grado |
|---|---|---|--:|
| $4x$ | $4$ | $x$ | $1$ |
| $-2xy$ | $-2$ | $xy$ | $1 + 1 = 2$ |
| $\sqrt 5\,x^3$ | $\sqrt 5$ | $x^3$ | $3$ |
| $7$ | $7$ | nessuna | $0$ |

Sono i tre esempi delle dispense, più l'ultima riga: un monomio di grado zero è semplicemente un numero.

### Polinomi e forma normale

Un **polinomio** è una somma di monomi, per esempio $7 + 3x^2 - \sqrt 2\,y^3$ (qui le variabili sono due, $x$ e $y$). Lo stesso polinomio si può scrivere in molti modi; per confrontarli si usa una scrittura standard.

> [!DEF] Forma normale e grado (p. 15)
> Un polinomio è **ridotto in forma normale** se è scritto come somma di monomi con parti letterali differenti e coefficienti non nulli, oppure è il polinomio $0$. Per ridurlo in forma normale è sufficiente raccogliere i monomi con la stessa parte letterale e quindi eliminare quelli con coefficiente nullo.
>
> Il **grado** di un polinomio scritto in forma normale è il massimo grado dei suoi monomi.

> [!ESEMPIO] · Ridurre e poi leggere il grado
> $3x^2 + 2x - x^2 + 5 - 2x$: si raccolgono i monomi simili, $(3 - 1)x^2 + (2 - 2)x + 5 = 2x^2 + 0x + 5$, e si elimina quello con coefficiente nullo. Forma normale: $2x^2 + 5$, grado $2$.
>
> $7 + 3x^2 - \sqrt 2\,y^3$ è già in forma normale: i monomi hanno gradi $0$, $2$ e $3$, quindi il polinomio ha grado $3$.

> [!TRAPPOLA] Il grado si legge dopo aver ridotto
> $(x + 1)^2 - x^2$ sembra di secondo grado, ma svolgendo si ottiene $x^2 + 2x + 1 - x^2 = 2x + 1$: il grado è $1$. Prima si riduce in forma normale, poi si guarda il grado.

### Polinomi in una variabile

Nel corso interessano soprattutto i polinomi con una sola variabile $x$, indicati con $p(x)$ o semplicemente con $p$. Ordinando i monomi dal grado più alto al più basso si ottiene la scrittura

$$p(x) = a_nx^n + \dots + a_1x + a_0, \qquad a_n \neq 0,$$

dove $n$ è il grado di $p(x)$. I numeri $a_n, \dots, a_1, a_0$ sono i **coefficienti**; $a_0$ si chiama **termine noto**. Due esempi delle dispense:

- $x^3 - 2x + 5$ ha grado $3$, con $a_3 = 1$, $a_2 = 0$ (manca il termine in $x^2$), $a_1 = -2$, $a_0 = 5$;
- $4x^2 - 7$ ha grado $2$, con $a_2 = 4$, $a_1 = 0$, $a_0 = -7$.

Un polinomio di grado zero è semplicemente un numero $a_0 \neq 0$.

> [!DEF] Gli insiemi di polinomi (p. 15)
> $\R[x]$ è l'insieme dei polinomi con coefficienti in $\R$ in cui compare una sola variabile $x$, e $\C[x]$ l'insieme dei polinomi con coefficienti in $\C$ in cui compare una sola variabile $x$. Con $\R_k[x]$ si indicano i polinomi in $\R[x]$ che hanno grado $\le k$ (analogamente $\C_k[x]$).

Pezzo per pezzo:

- $\R[x] \subset \C[x]$, perché i numeri reali sono complessi. Per esempio $x^2 + 1$ sta in tutti e due, mentre $ix + 1$ sta in $\C[x]$ ma non in $\R[x]$.
- $\R_k[x]$ contiene **tutti** i polinomi reali di grado al più $k$, anche quelli di grado più basso e il polinomio nullo. Per esempio $\R_2[x] = \{ax^2 + bx + c \mid a, b, c \in \R\}$ contiene $x^2 - 3$, $5x$, $7$ e $0$ (con $a = 0$ il grado scende), ma non $x^3$.
- Dalla lezione L05 in poi $\R_k[x]$ sarà uno degli esempi principali di **spazio vettoriale**: negli appelli compaiono spesso domande su insiemi come $\{p(x) \in \R_3[x] \mid p(6) = 0\}$.

> [!OLTRE] · il polinomio nullo e il grado dei prodotti
> Il polinomio $0$ non ha monomi, quindi il suo grado non è definito (alcuni libri gli danno grado $-\infty$). Per due polinomi non nulli valgono due regole utili:
> - $\deg(pq) = \deg p + \deg q$: i termini di grado più alto si moltiplicano, $a_nx^n \cdot b_mx^m = a_nb_m\,x^{n + m}$, e $a_nb_m \neq 0$. Per esempio $(x^2 + 1)(x^3 - x)$ ha grado $5$.
> - $\deg(p + q) \le$ il più grande tra $\deg p$ e $\deg q$, e può essere più piccolo se i termini più alti si cancellano, come nella trappola sopra.
>
> Martelli chiama anche **monico** un polinomio con $a_n = 1$.

## La divisione con resto (pp. 15–16)

I polinomi assomigliano ai numeri interi: si possono sommare, moltiplicare, e si possono fare le **divisioni con resto**. Tra gli interi, dividendo $44$ per $6$ si trova quoziente $7$ e resto $2$:

$$44 = 7 \cdot 6 + 2,$$

e il resto $2$ è più piccolo del divisore $6$. Per i polinomi «più piccolo» vuol dire «di grado minore».

> [!PROP] · Divisione con resto (p. 16)
> Dati due polinomi $p(x)$ (il **dividendo**) e $d(x) \neq 0$ (il **divisore**), esistono sempre, e sono unici, due polinomi $q(x)$ (il **quoziente**) e $r(x)$ (il **resto**) per cui
> $$p(x) = q(x)d(x) + r(x),$$
> con la proprietà che il resto $r(x)$ abbia grado strettamente minore del divisore $d(x)$.

Pezzo per pezzo:

- $d(x) \neq 0$: come tra i numeri, non si divide per zero.
- La condizione sul grado è ciò che rende **unici** quoziente e resto. Senza di essa si potrebbero scrivere infinite uguaglianze del tipo $p = qd + r$ (nel quiz ne trovi un esempio).
- Il resto può essere il polinomio $0$: è il caso importante, quello della divisibilità.

Le dispense dicono che le divisioni si fanno con carta e penna con la stessa procedura usata per i numeri interi. Eccola, passo per passo.

> [!METODO] La divisione in colonna
> 1. Scrivi dividendo e divisore in ordine di grado decrescente; nel dividendo metti $0$ al posto dei gradi che mancano.
> 2. Dividi il termine di grado più alto del dividendo per il termine di grado più alto del divisore: è il primo termine del quoziente.
> 3. Moltiplica il divisore per questo termine e **sottrai** il risultato dal dividendo: il termine più alto si cancella.
> 4. Ripeti i passi 2 e 3 con il polinomio ottenuto, finché il suo grado diventa **minore** del grado del divisore. Quello che resta è il resto.
> 5. Controllo: $q(x)d(x) + r(x)$ deve ridare $p(x)$.

> [!ESEMPIO] · L'esempio delle dispense: $x^3 + 1$ diviso $x^2 - 1$
> 1. $x^3 : x^2 = x$: il quoziente comincia con $x$.
> 2. $x \cdot (x^2 - 1) = x^3 - x$, e $(x^3 + 1) - (x^3 - x) = x + 1$.
> 3. $x + 1$ ha grado $1$, minore del grado $2$ del divisore: ci si ferma.
>
> Quoziente $q(x) = x$, resto $r(x) = x + 1$:
> $$x^3 + 1 = x\left(x^2 - 1\right) + (x + 1).$$
> Controllo: $x^3 - x + x + 1 = x^3 + 1$.

> [!ESEMPIO] · Una divisione in due passi: $2x^3 + 3x^2 - x + 5$ diviso $x^2 - x + 1$
> 1. $2x^3 : x^2 = 2x$. Poi $2x(x^2 - x + 1) = 2x^3 - 2x^2 + 2x$, e sottraendo:
>    $$(2x^3 + 3x^2 - x + 5) - (2x^3 - 2x^2 + 2x) = 5x^2 - 3x + 5.$$
> 2. Il grado è ancora $2$, quindi si continua: $5x^2 : x^2 = 5$. Poi $5(x^2 - x + 1) = 5x^2 - 5x + 5$, e sottraendo:
>    $$(5x^2 - 3x + 5) - (5x^2 - 5x + 5) = 2x.$$
> 3. $2x$ ha grado $1 < 2$: fine.
>
> Quoziente $q(x) = 2x + 5$, resto $r(x) = 2x$. Controllo: $(2x + 5)(x^2 - x + 1) + 2x = 2x^3 - 2x^2 + 2x + 5x^2 - 5x + 5 + 2x = 2x^3 + 3x^2 - x + 5$.

### Quando un polinomio ne divide un altro

Tra gli interi, $7$ divide $14$ ma non $15$: la divisione di $14$ per $7$ ha resto nullo, quella di $15$ per $7$ no. Per i polinomi si usa la stessa parola.

> [!DEF] Divisibilità (p. 16)
> Se la divisione tra due polinomi $p(x)$ e $d(x)$ ha resto nullo, allora $p(x) = q(x)d(x)$ per qualche quoziente $q(x)$, e si dice che $d(x)$ **divide** $p(x)$. Si usa la barra verticale $\mid$ come sinonimo di «divide»:
> $$9 \mid 18, \qquad (x + 1) \mid \left(x^3 + 1\right).$$

Verifichiamo il secondo esempio con la divisione in colonna di $x^3 + 0x^2 + 0x + 1$ per $x + 1$:

1. $x^3 : x = x^2$; $x^2(x + 1) = x^3 + x^2$; sottraendo resta $-x^2 + 0x + 1$.
2. $-x^2 : x = -x$; $-x(x + 1) = -x^2 - x$; sottraendo resta $x + 1$.
3. $x : x = 1$; $1 \cdot (x + 1) = x + 1$; sottraendo resta $0$.

Il resto è nullo, e il quoziente è $x^2 - x + 1$: infatti, come notano le dispense, $\left(x^3 + 1\right) = \left(x^2 - x + 1\right)(x + 1)$.

> [!TRAPPOLA] Gli zeri e la condizione di arresto
> Se nel dividendo mancano dei gradi, come in $x^3 + 1$, bisogna scrivere gli zeri ($x^3 + 0x^2 + 0x + 1$), altrimenti si sottraggono termini di grado diverso. E ci si ferma quando il grado di ciò che resta è **minore** di quello del divisore, non quando «resta un numero»: dividendo per $x^2 - x + 1$, il resto $2x$ va benissimo.

## La regola di Ruffini (oltre le dispense)

Quando il divisore è della forma $x - a$ (grado $1$), la divisione in colonna si può scrivere in una tabella che contiene solo i coefficienti: è la **regola di Ruffini**. È il modo più veloce per usare la Proposizione 4.2 della prossima sezione.

> [!METODO] Dividere $p(x)$ per $x - a$ con Ruffini
> 1. Scrivi in fila i coefficienti di $p(x)$, dal grado più alto al termine noto, con gli **zeri** per i gradi che mancano. Scrivi $a$ a sinistra. Attenzione al segno: per dividere per $x + 2$ si usa $a = -2$.
> 2. Abbassa il primo coefficiente nell'ultima riga.
> 3. Moltiplica per $a$ l'ultimo numero scritto in basso, scrivi il prodotto nella colonna successiva (riga di mezzo) e somma: il risultato va in basso.
> 4. Ripeti fino all'ultima colonna. L'ultimo numero in basso è il **resto**; gli altri sono i coefficienti del **quoziente**, che ha grado uno in meno.

> [!ESEMPIO] · $2x^3 - 3x^2 + 4x - 5$ diviso $x - 2$
> Coefficienti $2, -3, 4, -5$ e $a = 2$:
>
> | | $2$ | $-3$ | $4$ | $-5$ |
> |---|--:|--:|--:|--:|
> | $a = 2$ | | $4$ | $2$ | $12$ |
> | | $2$ | $1$ | $6$ | $7$ |
>
> Colonna per colonna: si abbassa il $2$; $2 \cdot 2 = 4$ e $-3 + 4 = 1$; $1 \cdot 2 = 2$ e $4 + 2 = 6$; $6 \cdot 2 = 12$ e $-5 + 12 = 7$. Quindi quoziente $q(x) = 2x^2 + x + 6$ e resto $7$:
> $$2x^3 - 3x^2 + 4x - 5 = (2x^2 + x + 6)(x - 2) + 7.$$
> Nota: $p(2) = 16 - 12 + 8 - 5 = 7$, proprio il resto. Non è un caso: lo spiega la prossima sezione.

Con lo strumento qui sotto puoi ripetere la divisione con altri polinomi e altri valori di $a$ (i coefficienti si scrivono dal grado più alto, separati da spazi). Il pulsante **Scomponi con le radici razionali** prova tutti i candidati $\pm\frac{\text{divisori del termine noto}}{\text{divisori del primo coefficiente}}$ e scompone il polinomio: provalo con `1 -6 11 -6` e con `1 -1 -3 5 -2`.

```widget ruffini
titolo: Divisione per $x - a$ con la tabella di Ruffini
coefficienti: 2 -3 4 -5
a: 2
```

## Radici di un polinomio (p. 16)

Se $p(x)$ è un polinomio e $a$ è un numero, $p(a)$ è il numero che si ottiene **sostituendo** $a$ al posto di $x$. Per esempio, se $p(x) = x^2 - 3$, allora $p(-2) = (-2)^2 - 3 = 4 - 3 = 1$, $p(0) = -3$ e $p(\sqrt 3) = 3 - 3 = 0$.

> [!DEF] 4.1
> Un numero $a$ è **radice** di un polinomio $p(x)$ se $p(a) = 0$.

In altre parole, le radici di $p(x)$ sono le **soluzioni dell'equazione** $p(x) = 0$. Qualche esempio:

- $-1$ è radice di $p(x) = x^3 + 1$, perché $p(-1) = (-1)^3 + 1 = 0$ (esempio delle dispense); invece $2$ non lo è, perché $p(2) = 9$;
- $\sqrt 3$ e $-\sqrt 3$ sono radici di $x^2 - 3$;
- $i$ è radice di $x^2 + 1$, perché $i^2 + 1 = -1 + 1 = 0$: le radici possono essere numeri complessi, e per verificarle servono i conti delle lezioni L02 e L03.

Le dispense ricordano che trovare le radici di un polinomio è uno dei problemi più classici dell'algebra. Il criterio che segue collega le radici alla divisione.

## Radici e fattori: la Proposizione 4.2 (pp. 16–17)

> [!PROP] 4.2
> Il numero $a$ è radice di $p(x)$ se e solo se $(x - a) \mid p(x)$.

**Dimostrazione** (dalle dispense, con ogni passaggio spiegato).

1. Dividiamo $p(x)$ per $(x - a)$: per la divisione con resto, $p(x) = q(x)(x - a) + r(x)$, con $q(x)$ quoziente e $r(x)$ resto.
2. Il grado di $r(x)$ è strettamente minore di quello di $x - a$, che è $1$. Quindi $r(x)$ ha grado zero (oppure è il polinomio nullo): è una **costante**, che scriviamo $r_0$. Allora
   $$p(x) = q(x)(x - a) + r_0.$$
3. Sostituiamo $a$ al posto di $x$: il fattore $a - a$ si annulla, e resta
   $$p(a) = q(a)(a - a) + r_0 = 0 + r_0 = r_0.$$
4. Quindi $a$ è radice di $p(x)$ (cioè $p(a) = 0$) se e solo se $r_0 = 0$.
5. D'altra parte $r_0 = 0$ se e solo se la divisione per $x - a$ ha resto nullo, cioè se e solo se $(x - a)$ divide $p(x)$. $\square$

> [!IDEA] · il resto è il valore
> Il passo 3 dice qualcosa in più dell'enunciato: **il resto della divisione di $p(x)$ per $x - a$ è $p(a)$**. È quello che hai visto con Ruffini: dividendo per $x - 2$ il resto era $7 = p(2)$. Quindi per sapere se $a$ è radice basta calcolare $p(a)$; e per sapere il resto della divisione per $x - a$ non serve fare la divisione.

> [!METODO] Scomporre un polinomio partendo da una radice
> 1. Cerca una radice $a$ provando numeri semplici: $0$, $\pm 1$, $\pm 2$, … Se i coefficienti sono interi, una radice intera divide il termine noto (vedi il riquadro qui sotto).
> 2. Dividi per $x - a$ con Ruffini: $p(x) = (x - a)q(x)$, con $q(x)$ di grado uno in meno.
> 3. Ripeti con $q(x)$. Quando arrivi al secondo grado usa la formula con $\Delta$.

> [!ESEMPIO] · $x^3 - 6x^2 + 11x - 6$
> 1. Provo $x = 1$: $1 - 6 + 11 - 6 = 0$. Quindi $1$ è radice e $(x - 1)$ divide il polinomio.
> 2. Ruffini con $a = 1$ sui coefficienti $1, -6, 11, -6$: si abbassa $1$; $1 - 6 = -5$; $-5 + 11 = 6$; $6 - 6 = 0$. Quoziente $x^2 - 5x + 6$, resto $0$.
> 3. $x^2 - 5x + 6 = (x - 2)(x - 3)$: due numeri con somma $5$ e prodotto $6$.
>
> Quindi $x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$, con radici $1$, $2$, $3$.

> [!OLTRE] · le radici razionali
> Se $p(x)$ ha coefficienti **interi** e $\frac uv$ è una radice razionale ridotta ai minimi termini, allora $u$ divide il termine noto $a_0$ e $v$ divide il primo coefficiente $a_n$. In particolare, se $a_n = 1$, ogni radice razionale è un **intero che divide $a_0$**. Per $x^3 - 6x^2 + 11x - 6$ i candidati erano solo $\pm 1, \pm 2, \pm 3, \pm 6$. Il motivo: da $p\left(\frac uv\right) = 0$, moltiplicando per $v^n$, si ottiene $a_nu^n + a_{n-1}u^{n-1}v + \dots + a_0v^n = 0$; tutti i termini tranne l'ultimo sono multipli di $u$, quindi anche $a_0v^n$ lo è, e siccome $u$ e $v$ non hanno fattori comuni, $u$ divide $a_0$. Allo stesso modo $v$ divide $a_n$.

## Molteplicità (p. 17)

Una radice può comparire «più volte». In $(x - 2)^2 = (x - 2)(x - 2)$ il fattore $x - 2$ c'è due volte.

> [!DEF] 4.3
> La **molteplicità** di una radice $a$ di un polinomio $p(x)$ è il massimo numero $k$ tale che $(x - a)^k$ divide $p(x)$.

Informalmente, dicono le dispense, la molteplicità di $a$ misura «quante volte» $a$ è radice di $p(x)$. Una radice di molteplicità $1$ si dice **semplice**, di molteplicità $2$ **doppia**, di molteplicità $3$ **tripla**.

> [!ESEMPIO] 4.4 · Molteplicità $1$ e $2$
> Il polinomio $x^3 - 1$ ha la radice $1$ con molteplicità $1$, perché
> $$x^3 - 1 = (x - 1)\left(x^2 + x + 1\right)$$
> e $(x - 1)$ non divide $x^2 + x + 1$, semplicemente perché $1$ non è radice di $x^2 + x + 1$: infatti $1 + 1 + 1 = 3 \neq 0$.
>
> Analogamente il polinomio $x^3 - 2x^2 + x = x\left(x^2 - 2x + 1\right) = (x - 1)^2x$ ha la radice $1$ con molteplicità $2$ e la radice $0$ con molteplicità $1$.

> [!ESEMPIO] 4.5 · Nel prodotto le molteplicità si sommano
> I polinomi $q_1(x) = x^2 - 2x + 1$ e $q_2(x) = x^2 - 1$ si scrivono
> $$q_1(x) = (x - 1)^2, \qquad q_2(x) = (x + 1)(x - 1).$$
> Il primo ha la radice $1$ con molteplicità $2$; il secondo ha le radici $-1$ e $1$, entrambe con molteplicità $1$. Il prodotto
> $$p(x) = q_1(x)q_2(x) = (x - 1)^3(x + 1)$$
> ha la radice $1$ con molteplicità $2 + 1 = 3$ e la radice $-1$ con molteplicità $1$.

Quando il polinomio non è già scomposto, la molteplicità si trova dividendo più volte.

> [!METODO] Calcolare la molteplicità di una radice $a$
> Dividi $p(x)$ per $x - a$ (con Ruffini). Se il quoziente ha ancora $a$ come radice, dividi di nuovo. Continua finché $a$ non è più radice del quoziente: il numero di divisioni fatte è la molteplicità.

> [!ESEMPIO] · $p(x) = x^4 - x^3 - 3x^2 + 5x - 2$ e la radice $1$
> $p(1) = 1 - 1 - 3 + 5 - 2 = 0$, quindi $1$ è radice.
> 1. Ruffini con $a = 1$ su $1, -1, -3, 5, -2$: in basso $1, 0, -3, 2$ e resto $0$. Quoziente $x^3 - 3x + 2$.
> 2. $1 - 3 + 2 = 0$: $1$ è ancora radice. Ruffini su $1, 0, -3, 2$: in basso $1, 1, -2$ e resto $0$. Quoziente $x^2 + x - 2$.
> 3. $1 + 1 - 2 = 0$: ancora radice. Ruffini su $1, 1, -2$: in basso $1, 2$ e resto $0$. Quoziente $x + 2$.
> 4. $1 + 2 = 3 \neq 0$: $1$ non è radice di $x + 2$. Stop.
>
> Tre divisioni: la radice $1$ ha molteplicità $3$, e $p(x) = (x - 1)^3(x + 2)$.

### Che cosa si vede nel grafico (oltre le dispense)

Per un polinomio reale, le radici reali sono i punti in cui il grafico di $y = p(x)$ tocca l'asse $x$. La molteplicità si vede dalla forma: in una radice di molteplicità **dispari** il grafico **attraversa** l'asse, in una radice di molteplicità **pari** lo **tocca** e torna indietro, perché il fattore $(x - a)^2$ non cambia segno.

```grafico
titolo: $y = (x - 1)^2(x + 2) = x^3 - 3x + 2$: in $-2$ (radice semplice) il grafico attraversa l'asse, in $1$ (radice doppia) lo tocca soltanto
proporzioni: libere
x: -3 3
y: -2 6
segmento: -2.4 -4.624 -2.2 -2.048 | accento | spesso
segmento: -2.2 -2.048 -2.0 0 | accento | spesso
segmento: -2.0 0 -1.8 1.568 | accento | spesso
segmento: -1.8 1.568 -1.6 2.704 | accento | spesso
segmento: -1.6 2.704 -1.4 3.456 | accento | spesso
segmento: -1.4 3.456 -1.2 3.872 | accento | spesso
segmento: -1.2 3.872 -1.0 4.0 | accento | spesso
segmento: -1.0 4.0 -0.8 3.888 | accento | spesso
segmento: -0.8 3.888 -0.6 3.584 | accento | spesso
segmento: -0.6 3.584 -0.4 3.136 | accento | spesso
segmento: -0.4 3.136 -0.2 2.592 | accento | spesso
segmento: -0.2 2.592 0 2 | accento | spesso
segmento: 0 2 0.2 1.408 | accento | spesso
segmento: 0.2 1.408 0.4 0.864 | accento | spesso
segmento: 0.4 0.864 0.6 0.416 | accento | spesso
segmento: 0.6 0.416 0.8 0.112 | accento | spesso
segmento: 0.8 0.112 1.0 0 | accento | spesso
segmento: 1.0 0 1.2 0.128 | accento | spesso
segmento: 1.2 0.128 1.4 0.544 | accento | spesso
segmento: 1.4 0.544 1.6 1.296 | accento | spesso
segmento: 1.6 1.296 1.8 2.432 | accento | spesso
segmento: 1.8 2.432 2.0 4.0 | accento | spesso
segmento: 2.0 4.0 2.2 6.048 | accento | spesso
punto: -2 0 | rosa
punto: 1 0 | ambra
```

## Quante radici: il Teorema 4.6 (p. 18)

> [!TEOREMA] 4.6
> Un polinomio $p(x)$ di grado $n \ge 1$ ha al più $n$ radici, contate con molteplicità.

«Contate con molteplicità» vuol dire che si somma, per ogni radice, la sua molteplicità: $(x - 1)^3(x + 1)$ ha due radici diverse, ma contate con molteplicità sono $3 + 1 = 4$, quante il grado. Il teorema dice che questa somma non supera mai il grado.

La dimostrazione usa l'**induzione** sul grado $n$, che vedrai in dettaglio in Matematica Discreta: si dimostra la tesi per $n = 1$ (**base**), poi si mostra che, se vale per il grado $n - 1$, allora vale anche per il grado $n$ (**passo induttivo**). Così vale per $n = 1$, quindi per $n = 2$, quindi per $n = 3$, e così via.

> [!DIM] del Teorema 4.6
> **Base, $n = 1$.** Il polinomio è $p(x) = a_1x + a_0$ con $a_1 \neq 0$, e $p(x) = 0$ vuol dire $x = -\frac{a_0}{a_1}$: c'è una sola radice, di molteplicità $1$. La tesi è soddisfatta.
>
> **Passo induttivo.** Supponiamo la tesi vera per i polinomi di grado $n - 1$ e prendiamo $p(x)$ di grado $n$.
> 1. Se $p(x)$ non ha radici, non c'è niente da dimostrare: $0 \le n$.
> 2. Se ha almeno una radice $a$, per la Proposizione 4.2 possiamo scrivere $p(x) = (x - a)q(x)$, e $q(x)$ ha grado $n - 1$ (i gradi dei fattori si sommano).
> 3. Per l'ipotesi induttiva $q(x)$ ha al più $n - 1$ radici contate con molteplicità.
> 4. Le radici di $p(x)$, contate con molteplicità, sono esattamente quelle di $q(x)$ più $a$. Infatti per $b \neq a$ vale $p(b) = (b - a)q(b)$ con $b - a \neq 0$, quindi $p(b) = 0$ se e solo se $q(b) = 0$; e la molteplicità di $a$ in $p$ è quella in $q$ più uno, come nell'Esempio 4.5.
> 5. Quindi $p(x)$ ha al più $(n - 1) + 1 = n$ radici, contate con molteplicità. $\square$

> [!ESEMPIO] 4.7 · I polinomi di primo e di secondo grado
> Un polinomio di grado $1$ è sempre del tipo $p(x) = ax + b$ con $a \neq 0$, e ha sempre una sola radice $x = -\frac ba$.
>
> Un polinomio di grado $2$ è del tipo $p(x) = ax^2 + bx + c$ con $a \neq 0$, e le sue radici dipendono dal **discriminante** $\Delta = b^2 - 4ac$ nel modo seguente.
> - Se $\Delta > 0$, il polinomio $p(x)$ ha due radici distinte $x_\pm = \frac{-b \pm \sqrt\Delta}{2a}$, entrambe di molteplicità uno.
> - Se $\Delta = 0$, il polinomio $p(x)$ ha una sola radice $x = -\frac b{2a}$, con molteplicità due.
> - Se $\Delta < 0$, il polinomio $p(x)$ non ha radici reali.
>
> In particolare, ci sono polinomi che non hanno radici reali.

Tre esempi, uno per caso:

| Polinomio | $\Delta = b^2 - 4ac$ | Radici reali | Scomposizione |
|---|---|---|---|
| $x^2 - 5x + 6$ | $25 - 24 = 1 > 0$ | $\frac{5 \pm 1}2$, cioè $3$ e $2$ | $(x - 2)(x - 3)$ |
| $x^2 - 4x + 4$ | $16 - 16 = 0$ | $\frac 42 = 2$, doppia | $(x - 2)^2$ |
| $x^2 + x + 1$ | $1 - 4 = -3 < 0$ | nessuna | non si scompone in $\R$ |

> [!OLTRE] · da dove viene la formula
> Si «completa il quadrato». Per $a \neq 0$:
> $$ax^2 + bx + c = a\left(x + \frac b{2a}\right)^2 - \frac{\Delta}{4a}.$$
> (Per controllarlo, svolgi il quadrato: $a\left(x^2 + \frac bax + \frac{b^2}{4a^2}\right) - \frac{b^2 - 4ac}{4a} = ax^2 + bx + c$.) Quindi $p(x) = 0$ equivale a $\left(x + \frac b{2a}\right)^2 = \frac\Delta{4a^2}$. Se $\Delta > 0$ si prende la radice quadrata dei due lati, con i due segni; se $\Delta = 0$ resta $x = -\frac b{2a}$; se $\Delta < 0$ un quadrato reale dovrebbe essere negativo, impossibile. È la dimostrazione della Proposizione 1.3.8 del libro di Martelli.

## Il teorema fondamentale dell'algebra (p. 18)

Le dispense arrivano così «al vero motivo per cui abbiamo introdotto i numeri complessi in questo corso».

> [!TEOREMA] 4.8 · Teorema fondamentale dell'algebra
> Un polinomio $p(x)$ a coefficienti complessi di grado $n$ ha esattamente $n$ radici, contate con molteplicità.

Pezzo per pezzo:

- Il Teorema 4.6 diceva «**al più** $n$». Nei complessi la disuguaglianza diventa un'**uguaglianza**: le radici ci sono sempre tutte.
- Vale anche per i polinomi a coefficienti reali, che sono particolari polinomi a coefficienti complessi: $x^2 + 1$ non ha radici reali, ma ha le due radici complesse $i$ e $-i$.
- Le dispense non lo dimostrano: le dimostrazioni più accessibili usano strumenti di analisi lontani dal corso.

> [!OLTRE] · un'altra forma dello stesso teorema
> Nel libro di Martelli il teorema fondamentale (Teorema 1.4.7) dice che **ogni polinomio non costante a coefficienti complessi ha almeno una radice**; da qui si ricava la versione delle dispense (Corollario 1.4.8) con la stessa induzione del Teorema 4.6: trovata una radice $z_1$, si scrive $p(x) = (x - z_1)q(x)$ e si ripete su $q(x)$. Il risultato finale si scrive anche come **scomposizione in fattori di primo grado** (Corollario 1.4.10):
> $$p(x) = a_n(x - z_1)(x - z_2)\cdots(x - z_n),$$
> dove $z_1, \dots, z_n$ sono le radici ripetute secondo la molteplicità. Per esempio $x^4 - 1 = (x - 1)(x + 1)(x - i)(x + i)$.

## Equazioni di secondo grado in C (p. 19)

> [!ESEMPIO] 4.9 · La solita formula, nei complessi
> Per un polinomio di secondo grado $p(x) = ax^2 + bx + c$ le due radici complesse si trovano usando la solita formula
> $$x_\pm = \frac{-b \pm \sqrt\Delta}{2a}.$$
> Questa volta, $\pm\sqrt\Delta$ indica le **due radici quadrate complesse** di $\Delta$, che esistono sempre, come visto nella lezione L03.

Qui $a$, $b$, $c$ possono essere complessi, e allora anche $\Delta$ può essere un numero complesso: la distinzione «$\Delta > 0$, $\Delta = 0$, $\Delta < 0$» ha senso solo se $\Delta$ è reale.

> [!METODO] Un'equazione di secondo grado in $\C$
> 1. Leggi $a$, $b$, $c$ e calcola $\Delta = b^2 - 4ac$.
> 2. Trova le due radici quadrate $\pm w$ di $\Delta$: se $\Delta$ è un reale negativo, $\pm w = \pm i\sqrt{|\Delta|}$; se $\Delta$ è complesso, usa la forma polare o il metodo $w = u + vi$ (lezioni L02 e L03).
> 3. Le radici sono $x_\pm = \frac{-b \pm w}{2a}$.
> 4. Controlla sostituendo, oppure con somma e prodotto: $x_+ + x_- = -\frac ba$ e $x_+x_- = \frac ca$.

> [!ESEMPIO] 4.10 · Due esempi delle dispense
> **$x^2 + 1$.** $a = 1$, $b = 0$, $c = 1$, quindi $\Delta = -4$, le cui radici quadrate sono $\pm 2i$. Le radici sono $x_\pm = \frac{\pm 2i}2 = \pm i$.
>
> **$x^2 + (1 - i)x - i$.** Qui $a = 1$, $b = 1 - i$, $c = -i$, e
> $$\Delta = (1 - i)^2 - 4 \cdot 1 \cdot (-i) = (1 - 2i + i^2) + 4i = -2i + 4i = 2i.$$
> Le radici quadrate di $2i$ sono $\pm(1 + i)$ (lezione L03: $2i = 2e^{i\pi/2}$ e $\sqrt 2\,e^{i\pi/4} = 1 + i$). Quindi
> $$x_\pm = \frac{-1 + i \pm \sqrt{2i}}{2} = \frac{-1 + i \pm (1 + i)}{2} \implies x_+ = \frac{2i}2 = i, \quad x_- = \frac{-2}2 = -1.$$
> Controllo: $i^2 + (1 - i)i - i = -1 + i + 1 - i = 0$ e $(-1)^2 + (1 - i)(-1) - i = 1 - 1 + i - i = 0$.

Altri due esempi con lo stesso metodo:

- $x^2 + 2x + 5$: $\Delta = 4 - 20 = -16$, radici quadrate $\pm 4i$, quindi $x_\pm = \frac{-2 \pm 4i}2 = -1 \pm 2i$. Controllo con il prodotto: $(-1 + 2i)(-1 - 2i) = 1 + 4 = 5 = \frac ca$.
- $x^2 - 2ix - 2$: $\Delta = (-2i)^2 - 4 \cdot (-2) = -4 + 8 = 4$, radici quadrate $\pm 2$, quindi $x_\pm = \frac{2i \pm 2}2 = \pm 1 + i$. Qui le radici $1 + i$ e $-1 + i$ **non** sono coniugate: i coefficienti non sono reali (vedi la prossima sezione).

## Polinomi a coefficienti reali (p. 19)

Un polinomio di grado $n$ ha esattamente $n$ radici complesse contate con molteplicità. Se i suoi coefficienti sono **reali**, si può dire qualcosa di più.

> [!PROP] 4.11
> Sia $p(x)$ un polinomio a coefficienti reali. Se $z$ è una radice complessa di $p(x)$, allora $\bar z$ è anch'essa radice di $p(x)$.

**Dimostrazione** (dalle dispense, con le regole usate).

1. Il polinomio è $p(x) = a_nx^n + \dots + a_1x + a_0$, e per ipotesi i coefficienti $a_n, \dots, a_0$ sono tutti reali.
2. Se $z$ è radice, allora $p(z) = a_nz^n + \dots + a_1z + a_0 = 0$.
3. Applichiamo il coniugio a entrambi i membri. Il coniugato di una somma è la somma dei coniugati e il coniugato di un prodotto è il prodotto dei coniugati (esercizio 2.5, lezione L02); in particolare $\overline{z^k} = \bar z^k$. Quindi
   $$\overline{a_n}\,\bar z^n + \dots + \overline{a_1}\,\bar z + \overline{a_0} = \bar 0 = 0.$$
4. Siccome i coefficienti sono reali, il coniugato di $a_i$ è sempre $a_i$ (lezione L02: $z \in \R \iff z = \bar z$). Quindi
   $$a_n\bar z^n + \dots + a_1\bar z + a_0 = 0,$$
   cioè $p(\bar z) = 0$: anche $\bar z$ è radice di $p(x)$. $\square$

> [!ESEMPIO] · $x^3 - 1$ e le radici terze dell'unità
> $x^3 - 1 = (x - 1)(x^2 + x + 1)$ (Esempio 4.4). Il fattore $x^2 + x + 1$ ha $\Delta = -3$, radici quadrate $\pm i\sqrt 3$, quindi radici $\frac{-1 \pm i\sqrt 3}2$. Le tre radici di $x^3 - 1$ sono $1$ e la coppia coniugata $-\frac 12 \pm \frac{\sqrt 3}2 i$: sono le tre radici terze dell'unità della lezione L03, e il triangolo che formano è simmetrico rispetto all'asse reale.

> [!TRAPPOLA] Serve che i coefficienti siano reali
> Nell'Esempio 4.10 il polinomio $x^2 + (1 - i)x - i$ ha la radice $i$, ma $-i$ **non** è radice: le radici sono $i$ e $-1$. La Proposizione 4.11 non si applica, perché il coefficiente $1 - i$ non è reale. Allo stesso modo, nel problema 11 dell'appello del 03/06/2026 un polinomio caratteristico a coefficienti complessi aveva la radice $i$ doppia e la radice $-i$ semplice.

> [!OLTRE] · tre conseguenze
> - Le radici **non reali** di un polinomio a coefficienti reali vengono a **coppie** $z, \bar z$ (con la stessa molteplicità, anche se la Proposizione 4.11 da sola non lo dice). Quindi sono in numero pari.
> - Un polinomio a coefficienti reali di **grado dispari** ha sempre almeno una radice **reale**: le $n$ radici complesse sono in numero dispari, e quelle non reali in numero pari (Proposizione 1.4.13 del libro di Martelli).
> - Per $z = u + vi$ con $v \neq 0$: $(x - z)(x - \bar z) = x^2 - 2ux + (u^2 + v^2)$, un polinomio **reale** di secondo grado con $\Delta = -4v^2 < 0$. Per questo ogni polinomio reale si scompone in fattori reali di primo grado e di secondo grado con $\Delta < 0$ (Corollario 1.4.12). Per esempio $x^3 - 1 = (x - 1)(x^2 + x + 1)$ e $x^4 - 1 = (x - 1)(x + 1)(x^2 + 1)$.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli questa lezione corrisponde al §1.3 «Polinomi» (pp. 21–25: definizione, divisione con resto, radici, Proposizione 1.3.2 = 4.2, molteplicità, Teorema 1.3.7 = 4.6, formula del secondo grado con dimostrazione) e alle parti 1.4.7 «Teorema fondamentale dell'algebra» e 1.4.8 «Polinomi a coefficienti reali» del §1.4 (pp. 31–33). Gli esempi sono gli stessi delle dispense (in Martelli la prima divisione tra interi è $26 = 2 \cdot 11 + 4$). L'Esercizio 1.12 (p. 37) collega la molteplicità alla derivata, che vedrai in Analisi.

## Verso l'esame

**La prova in due righe.** 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; 2 ore, niente calcolatrice, solo 4 facciate di appunti scritti a mano. Appelli 2026/27 di Algebra lineare: 22/01/2027 e 05/02/2027 alle 14:00. Regole complete e fonti nella lezione L01.

**Dove compaiono i polinomi negli appelli dal 2023/24 al 2025/26.**

| Uso | Esempi negli appelli | Lezioni |
|---|---|---|
| «quale di questi numeri è una radice di $p(z)$?» | 10/07/2025 (domanda 1), 03/07/2026 (domanda 7), 07/09/2026 (domanda 1) | questa |
| radici del polinomio caratteristico, spesso di terzo grado, da scomporre trovando una radice e dividendo | 02/09/2025 (domanda 4, con $-t^3 + 8$), problemi su autovalori in quasi tutti gli appelli | L17, L18 |
| un determinante che dipende da un parametro $k$ è un polinomio in $k$: si trova una radice e si divide | 15/01/2026 (problema 11: una radice doppia) | L09, L10 |
| spazi di polinomi: $\{p \in \R_3[x] \mid p(a) = 0\}$ è fatto dai polinomi $(x - a)q(x)$ (Proposizione 4.2) | 24/01/2024 (domanda 1), 10/07/2025 (domanda 2), 03/07/2026 (domanda 1) | L05–L07 |

Ecco le tre domande del primo tipo, con la soluzione.

> [!ESEMPIO] · Appello del 10/07/2025, domanda 1
> Quale dei seguenti è una radice di $p(z) = z^4 + 7z^2 + 12$? (a) $z = -2i$; (b) $z = -2$; (c) il polinomio non ha radici; (d) $z = 3 + 4i$; (e) $z = 4$.
>
> **Soluzione.** Compaiono solo potenze pari: pongo $w = z^2$ e ottengo $w^2 + 7w + 12 = (w + 3)(w + 4)$, con radici $w = -3$ e $w = -4$. Quindi $z^2 = -3$ oppure $z^2 = -4$, cioè $z = \pm i\sqrt 3$ oppure $z = \pm 2i$. Risposta (a). La (c) è falsa per il teorema fondamentale (le radici sono quattro); (b) ed (e) sono reali, e per $z$ reale $z^4 + 7z^2 + 12 \ge 12 > 0$.

> [!ESEMPIO] · Appello del 03/07/2026, domanda 7
> Quale dei seguenti è una radice del polinomio $p(z) = z^3 + 2z^2 + z + 2$? (a) $z = 0$; (b) $z = i$; (c) $z = 1 + i$; (d) $z = 1$; (e) $z^3 + 2z^2 + z + 2 = 0$.
>
> **Soluzione.** Raccoglimento parziale: $p(z) = z^2(z + 2) + (z + 2) = (z^2 + 1)(z + 2)$. Le radici sono $-2$, $i$, $-i$: risposta (b). Senza scomporre, basta sostituire: $p(i) = i^3 + 2i^2 + i + 2 = -i - 2 + i + 2 = 0$, mentre $p(0) = 2$ e $p(1) = 6$. La (e) non è un numero ma l'equazione stessa.

> [!ESEMPIO] · Appello del 07/09/2026, domanda 1
> Quale dei seguenti è una radice del polinomio $p(z) = z^4 + 5z^2 + 4$? (a) $z = -3 + i$; (b) $z = 1 - i$; (c) $z = -1$; (d) $z = -2i$; (e) il polinomio non ha radici.
>
> **Soluzione.** Con $t = z^2$: $t^2 + 5t + 4 = (t + 1)(t + 4)$, radici $t = -1$ e $t = -4$. Quindi $z^2 = -1$ o $z^2 = -4$: $z = \pm i$ e $z = \pm 2i$. Risposta (d). Verifica diretta: $(-2i)^2 = -4$ e $(-2i)^4 = 16$, quindi $p(-2i) = 16 - 20 + 4 = 0$.

> [!METODO] Trovare le radici di un polinomio di grado 3 o 4 senza calcolatrice
> 1. **Nel quiz, sostituisci le risposte**: con $p(i)$, $p(2i)$, $p(-1)$… si trova la risposta giusta in pochi conti.
> 2. **Potenze solo pari** ($z^4$, $z^2$, termine noto): poni $t = z^2$, risolvi di secondo grado, poi $z = \pm\sqrt t$ (con $t$ negativo, $\pm i\sqrt{|t|}$).
> 3. **Raccoglimento parziale**: $z^3 + 2z^2 + z + 2 = z^2(z + 2) + 1 \cdot (z + 2)$.
> 4. **Prova le radici intere** tra i divisori del termine noto, poi dividi con Ruffini.
> 5. **Resta un secondo grado**: formula con $\Delta$; se i coefficienti sono reali e $\Delta < 0$, le due radici sono coniugate.

**Errori da evitare.** Dimenticare gli zeri nella tabella di Ruffini; sbagliare il segno di $a$ (per $x + 2$ si usa $a = -2$); fermare la divisione troppo presto o troppo tardi; confondere il numero di radici distinte con il numero di radici contate con molteplicità; applicare la Proposizione 4.11 a polinomi con coefficienti complessi; nelle biquadratiche, dimenticare le due radici opposte di ogni $t$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: lo schema della divisione in colonna e di Ruffini; «$a$ è radice $\iff (x - a) \mid p(x)$, e il resto della divisione per $x - a$ è $p(a)$»; molteplicità e metodo delle divisioni ripetute; $\Delta$ e la formula del secondo grado con $\pm\sqrt\Delta$ complesse; «coefficienti reali $\Rightarrow$ radici non reali a coppie coniugate»; le sostituzioni $t = z^2$ e il raccoglimento parziale.

## Quiz

```quiz
D: Quale dei seguenti è una radice di $p(z) = z^4 + 10z^2 + 9$?
+ $z = 3i$
- $z = 3$
- $z = -1$
- $z = 1 + i$
- Il polinomio non ha radici.
= Con $t = z^2$: $t^2 + 10t + 9 = (t + 1)(t + 9)$, quindi $z^2 = -1$ o $z^2 = -9$, cioè $z = \pm i$ o $z = \pm 3i$. Verifica: $(3i)^2 = -9$, $(3i)^4 = 81$, e $81 - 90 + 9 = 0$. Per $z$ reale $p(z) \ge 9$; $p(1 + i) = 5 + 20i$. Per il teorema fondamentale le radici ci sono sempre. Simile agli appelli del 07/09/2026 e del 10/07/2025, domanda 1.

D: Quale dei seguenti è una radice di $p(z) = z^3 - 2z^2 + 4z - 8$?
+ $z = -2i$
- $z = -2$
- $z = 2 + 2i$
- $z = 4$
- $z = 1 - i$
= Raccoglimento parziale: $p(z) = z^2(z - 2) + 4(z - 2) = (z^2 + 4)(z - 2)$, radici $2$ e $\pm 2i$. Verifica: $(-2i)^3 = 8i$ e $(-2i)^2 = -4$, quindi $p(-2i) = 8i + 8 - 8i - 8 = 0$. Invece $p(-2) = -32$, $p(4) = 40$, $p(2 + 2i) = -16 + 8i$, $p(1 - i) = -6 - 2i$. Simile all'appello del 03/07/2026, domanda 7.

D: Qual è il resto della divisione di $x^4 - 3x^2 + 2x - 1$ per $x + 1$? Scrivi un numero.
N: -5
= Il resto della divisione per $x - a$ è $p(a)$; qui $x + 1 = x - (-1)$, quindi $a = -1$ e il resto è $p(-1) = 1 - 3 - 2 - 1 = -5$. Con Ruffini sui coefficienti $1, 0, -3, 2, -1$ e $a = -1$ si ottiene in basso $1, -1, -2, 4$ e resto $-5$.

D: Qual è la molteplicità della radice $1$ nel polinomio $x^4 - x^3 - 3x^2 + 5x - 2$?
- $1$
- $2$
+ $3$
- $4$
- $0$
= Dividendo più volte per $x - 1$ con Ruffini si ottengono i quozienti $x^3 - 3x + 2$, poi $x^2 + x - 2$, poi $x + 2$, che in $1$ vale $3 \neq 0$. Tre divisioni: $x^4 - x^3 - 3x^2 + 5x - 2 = (x - 1)^3(x + 2)$. Riconoscere una radice multipla serviva anche nel problema 11 dell'appello del 15/01/2026, dove un determinante con parametro aveva una radice doppia.

D: Quoziente e resto della divisione di $x^3 + 2x^2 - x + 3$ per $x^2 + 1$ sono:
+ $q(x) = x + 2$ e $r(x) = -2x + 1$
- $q(x) = x + 2$ e $r(x) = 1$
- $q(x) = x + 2$ e $r(x) = -2x + 5$
- $q(x) = x$ e $r(x) = 2x^2 - 2x + 3$
- $q(x) = x + 2$ e $r(x) = -2x - 1$
= $x^3 : x^2 = x$, e $(x^3 + 2x^2 - x + 3) - x(x^2 + 1) = 2x^2 - 2x + 3$; poi $2x^2 : x^2 = 2$, e $(2x^2 - 2x + 3) - 2(x^2 + 1) = -2x + 1$, di grado $1 < 2$. Attenzione alla quarta risposta: $x \cdot (x^2 + 1) + (2x^2 - 2x + 3)$ ridà davvero il dividendo, ma il «resto» ha grado $2$, non minore del divisore, quindi la divisione non è finita.

D: Un polinomio a coefficienti **reali** di grado $4$ ha le radici $1 + i$ e $2i$. Quali sono le altre due radici?
+ $1 - i$ e $-2i$
- $-1 - i$ e $-2i$
- $-1 + i$ e $2$
- $1 - i$ e $2$
- Non si può dire nulla senza conoscere i coefficienti.
= Per la Proposizione 4.11 anche i coniugati $\overline{1 + i} = 1 - i$ e $\overline{2i} = -2i$ sono radici. Sono quattro radici distinte, e per il teorema fondamentale un polinomio di grado $4$ non ne ha altre. Il polinomio monico è $(x^2 - 2x + 2)(x^2 + 4) = x^4 - 2x^3 + 6x^2 - 8x + 8$.

D: In quale di questi polinomi il numero $2$ è radice con molteplicità **esattamente** $2$?
+ $(x - 2)^2(x + 2)$
- $(x^2 - 4)(x + 2)$
- $(x - 2)^3$
- $x^2 + 4$
- $x^2(x - 2)$
= $(x^2 - 4)(x + 2) = (x - 2)(x + 2)^2$: lì $2$ è semplice (è $-2$ ad essere doppia). In $(x - 2)^3$ la molteplicità è $3$, in $x^2(x - 2)$ è $1$; $x^2 + 4$ in $2$ vale $8$, quindi $2$ non è nemmeno radice.

D: Quale di questi polinomi appartiene a $\R_2[x]$?
+ $(x + 1)^2 - x^2$
- $x^3 - 1$
- $ix + 1$
- $(x - 1)(x^2 + 1)$
- $\frac 1x + x$
= $(x + 1)^2 - x^2 = 2x + 1$ ha grado $1 \le 2$ e coefficienti reali. $x^3 - 1$ e $(x - 1)(x^2 + 1)$ hanno grado $3$; $ix + 1$ ha un coefficiente non reale (sta in $\C_1[x]$); $\frac 1x + x$ non è un polinomio. Lo spazio $\R_2[x]$ compare in molte domande sui sottospazi, per esempio negli appelli del 08/02/2024 e del 05/02/2026 (domanda 2).

D: Le radici complesse di $z^2 - 2z + 5$ sono:
+ $1 \pm 2i$
- $-1 \pm 2i$
- $1 \pm 4i$
- $2 \pm 4i$
- non ci sono: $\Delta < 0$
= $\Delta = 4 - 20 = -16$, con radici quadrate $\pm 4i$; quindi $z_\pm = \frac{2 \pm 4i}2 = 1 \pm 2i$. $\Delta < 0$ vuol dire solo che non ci sono radici **reali**; le radici complesse sono coniugate perché i coefficienti sono reali. Simile all'appello del 02/09/2025 (domanda 4), dove due autovalori erano le radici complesse coniugate di $t^2 + 2t + 4$.

D: Il polinomio $x^2 - (1 + i)x + i$ ha la radice $i$. Quale affermazione è vera?
+ L'altra radice è $1$, e $-i$ non è radice.
- Anche $-i$ è radice, per la Proposizione 4.11.
- $i$ è una radice doppia.
- Ha tre radici, contate con molteplicità.
- Non ha altre radici oltre a $i$.
= Dividendo per $x - i$ (oppure notando che somma e prodotto delle radici sono $1 + i$ e $i$) si trova $x^2 - (1 + i)x + i = (x - i)(x - 1)$. La Proposizione 4.11 non si applica, perché i coefficienti non sono tutti reali: infatti in $-i$ il polinomio vale $-2 + 2i \neq 0$. Il grado è $2$, quindi le radici contate con molteplicità sono esattamente due. Anche nel problema 11 dell'appello del 03/06/2026 un polinomio a coefficienti complessi aveva $i$ e $-i$ come radici con molteplicità diverse.
```

## Esercizi

> [!NOTA] Gli esercizi di questa lezione
> Le dispense non hanno una sezione di esercizi per la lezione 4: gli esercizi qui sotto sono stati scritti per questi appunti, gli ultimi due sul modello degli appelli.

::: esercizio base Forma normale, grado e insiemi di polinomi
Riduci in forma normale e trova il grado: (a) $(x + 1)^2 - (x - 1)^2$; (b) $(x^2 + 1)(x - 1) - x^3$; (c) $3x^2y - 2x^2y + xy - x^2y$. Poi di' se i polinomi (a) e (b) appartengono a $\R_1[x]$, a $\R_2[x]$, a $\C_2[x]$.
::: soluzione
(a) $(x^2 + 2x + 1) - (x^2 - 2x + 1) = 4x$: grado $1$.

(b) $(x^2 + 1)(x - 1) = x^3 - x^2 + x - 1$, quindi il polinomio è $-x^2 + x - 1$: grado $2$.

(c) I tre monomi con parte letterale $x^2y$ hanno coefficienti $3 - 2 - 1 = 0$ e spariscono: resta $xy$, di grado $1 + 1 = 2$.

Appartenenza: (a) ha grado $1$, quindi sta in $\R_1[x]$, in $\R_2[x]$ e in $\C_2[x]$. (b) ha grado $2$: sta in $\R_2[x]$ e in $\C_2[x]$, ma non in $\R_1[x]$. (Ogni $\R_k[x]$ sta dentro $\C_k[x]$ e dentro $\R_{k+1}[x]$.)
:::

::: esercizio base Una divisione in colonna
Dividi $x^4 - 1$ per $x^2 + x + 1$ e controlla il risultato.
::: soluzione
Dividendo con gli zeri: $x^4 + 0x^3 + 0x^2 + 0x - 1$.

1. $x^4 : x^2 = x^2$. $x^2(x^2 + x + 1) = x^4 + x^3 + x^2$; sottraendo resta $-x^3 - x^2 + 0x - 1$.
2. $-x^3 : x^2 = -x$. $-x(x^2 + x + 1) = -x^3 - x^2 - x$; sottraendo resta $x - 1$.
3. $x - 1$ ha grado $1 < 2$: stop.

Quoziente $q(x) = x^2 - x$, resto $r(x) = x - 1$. Controllo: $(x^2 - x)(x^2 + x + 1) = x^4 + x^3 + x^2 - x^3 - x^2 - x = x^4 - x$, e $x^4 - x + (x - 1) = x^4 - 1$.
:::

::: esercizio base Ruffini e scomposizione completa
Verifica che $2$ è radice di $p(x) = x^4 - 5x^2 + 4$, dividi per $x - 2$ con Ruffini e scomponi $p(x)$ in fattori di primo grado.
::: soluzione
$p(2) = 16 - 20 + 4 = 0$. Ruffini sui coefficienti $1, 0, -5, 0, 4$ (attenzione ai due zeri) con $a = 2$:

| | $1$ | $0$ | $-5$ | $0$ | $4$ |
|---|--:|--:|--:|--:|--:|
| $a = 2$ | | $2$ | $4$ | $-2$ | $-4$ |
| | $1$ | $2$ | $-1$ | $-2$ | $0$ |

Quoziente $x^3 + 2x^2 - x - 2$, resto $0$. Raccoglimento parziale: $x^2(x + 2) - (x + 2) = (x + 2)(x^2 - 1) = (x + 2)(x - 1)(x + 1)$. Quindi
$$x^4 - 5x^2 + 4 = (x - 2)(x + 2)(x - 1)(x + 1).$$
Si poteva anche partire da $t = x^2$: $t^2 - 5t + 4 = (t - 1)(t - 4)$, e poi $x^2 - 1$ e $x^2 - 4$ si scompongono come differenze di quadrati.
:::

::: esercizio medio Radici e molteplicità
Trova tutte le radici di $p(x) = x^3 - 3x + 2$ con la loro molteplicità.
::: soluzione
Candidati interi: i divisori di $2$, cioè $\pm 1, \pm 2$. $p(1) = 1 - 3 + 2 = 0$: radice. Ruffini su $1, 0, -3, 2$ con $a = 1$: in basso $1, 1, -2$ e resto $0$, quoziente $x^2 + x - 2$. Questo vale $0$ in $1$ ($1 + 1 - 2 = 0$): Ruffini di nuovo, in basso $1, 2$ e resto $0$, quoziente $x + 2$, che in $1$ vale $3 \neq 0$.

Quindi $p(x) = (x - 1)^2(x + 2)$: la radice $1$ ha molteplicità $2$ e la radice $-2$ ha molteplicità $1$. Contate con molteplicità sono $2 + 1 = 3$ radici, quante il grado. È il polinomio del grafico nella sezione sulla molteplicità.
:::

::: esercizio medio Imporre una radice doppia
Trova i numeri reali $a$ e $b$ per cui $(x - 1)^2$ divide $x^3 + ax + b$.
::: soluzione
$(x - 1)^2$ divide il polinomio se e solo se $1$ è radice con molteplicità almeno $2$: il polinomio si divide per $x - 1$ e il quoziente ha ancora la radice $1$.

1. Ruffini su $1, 0, a, b$ con $1$: in basso $1$, $1$, $1 + a$ e resto $1 + a + b$. Il resto deve essere $0$: $a + b = -1$.
2. Il quoziente è $x^2 + x + (1 + a)$, e deve valere $0$ in $1$: $1 + 1 + 1 + a = 0$, cioè $a = -3$.
3. Allora $b = -1 - a = 2$.

Il polinomio è $x^3 - 3x + 2 = (x - 1)^2(x + 2)$, quello dell'esercizio precedente.
:::

::: esercizio medio Un'equazione di secondo grado con coefficienti complessi
Trova le radici di $z^2 + (2 - i)z - 2i$.
::: soluzione
$a = 1$, $b = 2 - i$, $c = -2i$.
1. $\Delta = (2 - i)^2 - 4(-2i) = (4 - 4i + i^2) + 8i = 3 - 4i + 8i = 3 + 4i$.
2. Radici quadrate di $3 + 4i$: cerco $w = u + vi$ con $w^2 = u^2 - v^2 + 2uvi = 3 + 4i$, cioè $u^2 - v^2 = 3$ e $uv = 2$. Con $u = 2$, $v = 1$ funziona: $(2 + i)^2 = 4 + 4i - 1 = 3 + 4i$. Quindi $\pm w = \pm(2 + i)$.
3. $z_\pm = \frac{-(2 - i) \pm (2 + i)}2$: con il più, $\frac{-2 + i + 2 + i}2 = i$; con il meno, $\frac{-2 + i - 2 - i}2 = -2$.

Le radici sono $i$ e $-2$: infatti $(z - i)(z + 2) = z^2 + 2z - iz - 2i = z^2 + (2 - i)z - 2i$. Anche qui $-i$ non è radice: i coefficienti non sono reali.
:::

::: esercizio medio Una biquadratica, scomposta in R e in C
Trova le radici di $z^4 + 3z^2 - 4$ e scomponi il polinomio in fattori a coefficienti reali e poi in fattori di primo grado a coefficienti complessi.
::: soluzione
Con $t = z^2$: $t^2 + 3t - 4 = (t + 4)(t - 1)$, radici $t = -4$ e $t = 1$. Quindi $z^2 = 1$ (cioè $z = \pm 1$) oppure $z^2 = -4$ (cioè $z = \pm 2i$).

- In $\R$: $z^4 + 3z^2 - 4 = (z^2 - 1)(z^2 + 4) = (z - 1)(z + 1)(z^2 + 4)$, dove $z^2 + 4$ ha $\Delta = -16 < 0$ e non si scompone ulteriormente in $\R$.
- In $\C$: $(z - 1)(z + 1)(z - 2i)(z + 2i)$.

Quattro radici, come il grado; le due non reali sono coniugate, come vuole la Proposizione 4.11.
:::

::: esercizio difficile Tutte le radici, conoscendone una
Sapendo che $i$ è radice di $p(x) = x^4 - 2x^3 + 6x^2 - 2x + 5$, trova tutte le radici.
::: soluzione
1. I coefficienti sono reali, quindi per la Proposizione 4.11 anche $-i$ è radice. Allora $(x - i)(x + i) = x^2 + 1$ divide $p(x)$.
2. Divido per $x^2 + 1$: $x^4 : x^2 = x^2$, e $p(x) - x^2(x^2 + 1) = -2x^3 + 5x^2 - 2x + 5$; poi $-2x^3 : x^2 = -2x$, e resta $5x^2 + 5$; poi $5x^2 : x^2 = 5$, e resta $0$. Quoziente $x^2 - 2x + 5$.
3. $x^2 - 2x + 5$: $\Delta = 4 - 20 = -16$, radici $\frac{2 \pm 4i}2 = 1 \pm 2i$.

Le radici sono $i$, $-i$, $1 + 2i$, $1 - 2i$, e $p(x) = (x^2 + 1)(x^2 - 2x + 5)$.
:::

::: esercizio difficile Costruire un polinomio dalle radici
Trova il polinomio **monico** a coefficienti reali di grado $3$ che ha le radici $2$ e $1 + i$. È unico?
::: soluzione
Coefficienti reali, quindi anche $1 - i$ è radice. Un polinomio di grado $3$ ha esattamente tre radici contate con molteplicità (teorema fondamentale), quindi sono $2$, $1 + i$, $1 - i$, e il polinomio monico è
$$(x - 2)(x - 1 - i)(x - 1 + i) = (x - 2)(x^2 - 2x + 2) = x^3 - 4x^2 + 6x - 4.$$
Qui $(x - 1 - i)(x - 1 + i) = (x - 1)^2 - i^2 = (x - 1)^2 + 1 = x^2 - 2x + 2$, come per ogni coppia coniugata. È unico: le tre radici sono obbligate, e un polinomio monico è determinato dalle sue radici (è il prodotto dei fattori $x - z_k$).
:::

::: esercizio difficile Un resto senza fare la divisione
Trova il resto della divisione di $p(x) = x^{100} + 1$ per $x^2 - 1$.
::: soluzione
Il divisore ha grado $2$, quindi il resto ha grado al più $1$: $r(x) = ax + b$, e
$$x^{100} + 1 = q(x)(x^2 - 1) + ax + b.$$
Sostituisco le radici del divisore, dove $x^2 - 1$ si annulla:
- $x = 1$: $1 + 1 = 0 + a + b$, cioè $a + b = 2$;
- $x = -1$: $(-1)^{100} + 1 = 2 = -a + b$.

Sommando, $2b = 4$, quindi $b = 2$ e $a = 0$. Il resto è la costante $r(x) = 2$. È la stessa idea della dimostrazione della Proposizione 4.2: si sostituisce un valore che annulla il divisore.
:::

::: esercizio esame Come all'esame: un determinante con parametro
In un problema d'esame il determinante di una matrice che dipende da un parametro reale $k$ vale $-k^3 + 3k + 2$. Per quali valori di $k$ il determinante è diverso da zero? Quale valore di $k$ è radice doppia?
::: soluzione
1. **Cerco una radice** tra i divisori del termine noto $2$: $\pm 1, \pm 2$. Con $k = 2$: $-8 + 6 + 2 = 0$. Quindi $(k - 2)$ divide il polinomio.
2. **Ruffini** sui coefficienti $-1, 0, 3, 2$ con $a = 2$: si abbassa $-1$; $-1 \cdot 2 = -2$ e $0 - 2 = -2$; $-2 \cdot 2 = -4$ e $3 - 4 = -1$; $-1 \cdot 2 = -2$ e $2 - 2 = 0$. Quoziente $-k^2 - 2k - 1 = -(k + 1)^2$.
3. **Scomposizione**: $-k^3 + 3k + 2 = -(k - 2)(k + 1)^2$.
4. **Conclusione**: il determinante si annulla solo per $k = 2$ e $k = -1$, ed è diverso da zero per ogni $k \neq 2, -1$. La radice $-1$ è doppia.

È lo schema del problema 11 dell'appello del 15/01/2026, dove il determinante era un altro polinomio di terzo grado in $k$ con una radice doppia: si trova una radice a occhio, si divide, si scompone il secondo grado.
:::

::: esercizio esame Come all'esame: quale è una radice
Quale dei seguenti è una radice di $p(z) = z^4 - 2z^2 - 8$? (a) $z = i\sqrt 2$; (b) $z = 2i$; (c) $z = \sqrt 2$; (d) $z = 1 + i$; (e) il polinomio non ha radici.
::: soluzione
**Scomponendo.** Con $t = z^2$: $t^2 - 2t - 8 = (t - 4)(t + 2)$, quindi $z^2 = 4$ oppure $z^2 = -2$: le radici sono $\pm 2$ e $\pm i\sqrt 2$. Risposta (a).

**Sostituendo le risposte.** (a) $(i\sqrt 2)^2 = -2$ e $(i\sqrt 2)^4 = 4$: $p = 4 + 4 - 8 = 0$. (b) $(2i)^2 = -4$ e $(2i)^4 = 16$: $p = 16 + 8 - 8 = 16$. (c) $p(\sqrt 2) = 4 - 4 - 8 = -8$. (d) $(1 + i)^2 = 2i$ e $(1 + i)^4 = -4$: $p = -4 - 4i - 8 = -12 - 4i$. (e) è falsa per il teorema fondamentale. Anche qui la risposta è la (a).
:::

## Domande di ripasso

::: domanda Che cos'è il grado di un polinomio? Perché bisogna prima ridurlo in forma normale?
È il massimo grado dei suoi monomi, una volta scritto in forma normale (monomi con parti letterali diverse e coefficienti non nulli). Prima bisogna ridurre perché dei termini possono cancellarsi: $(x + 1)^2 - x^2 = 2x + 1$ ha grado $1$.
:::

::: domanda Che cosa sono $\R[x]$, $\C[x]$ e $\R_k[x]$?
I polinomi in una variabile $x$ a coefficienti reali, a coefficienti complessi, e a coefficienti reali di grado $\le k$. $\R_2[x]$ contiene anche le costanti e il polinomio nullo.
:::

::: domanda Che cosa dice la divisione con resto tra polinomi?
Dati $p(x)$ e $d(x) \neq 0$, esistono e sono unici $q(x)$ e $r(x)$ con $p(x) = q(x)d(x) + r(x)$ e grado di $r$ strettamente minore del grado di $d$.
:::

::: domanda Quando un polinomio $d(x)$ divide $p(x)$? Fai un esempio.
Quando la divisione di $p(x)$ per $d(x)$ ha resto nullo, cioè $p(x) = q(x)d(x)$. Per esempio $(x + 1) \mid (x^3 + 1)$, perché $x^3 + 1 = (x^2 - x + 1)(x + 1)$.
:::

::: domanda Che cos'è una radice di un polinomio?
Un numero $a$ tale che $p(a) = 0$, cioè una soluzione dell'equazione $p(x) = 0$ (Definizione 4.1). Può essere reale o complessa.
:::

::: domanda Che cosa dice la Proposizione 4.2 e come si dimostra?
$a$ è radice di $p(x)$ se e solo se $(x - a) \mid p(x)$. Si divide: $p(x) = q(x)(x - a) + r_0$ con $r_0$ costante (il resto ha grado minore di $1$); sostituendo $x = a$ si ottiene $p(a) = r_0$. Quindi $p(a) = 0$ se e solo se il resto è nullo.
:::

::: domanda Quanto vale il resto della divisione di $p(x)$ per $x - a$?
Vale $p(a)$: è il passo centrale della dimostrazione della Proposizione 4.2. Per esempio il resto di $2x^3 - 3x^2 + 4x - 5$ diviso $x - 2$ è $p(2) = 7$.
:::

::: domanda Che cos'è la molteplicità di una radice e come si calcola?
È il massimo $k$ per cui $(x - a)^k$ divide $p(x)$ (Definizione 4.3). Si calcola dividendo per $x - a$ più volte, finché $a$ non è più radice del quoziente.
:::

::: domanda Quante radici può avere un polinomio di grado $n \ge 1$? E nei complessi?
Al più $n$, contate con molteplicità (Teorema 4.6). Nei complessi esattamente $n$, contate con molteplicità (Teorema 4.8, teorema fondamentale dell'algebra).
:::

::: domanda Come si risolve $ax^2 + bx + c = 0$ nei complessi?
Con la formula $x_\pm = \frac{-b \pm \sqrt\Delta}{2a}$, $\Delta = b^2 - 4ac$, dove $\pm\sqrt\Delta$ sono le due radici quadrate complesse di $\Delta$ (Esempio 4.9). Per esempio le radici di $x^2 + 2x + 5$ sono $-1 \pm 2i$.
:::

::: domanda Che cosa dice la Proposizione 4.11? Perché servono coefficienti reali?
Se $p(x)$ ha coefficienti reali e $p(z) = 0$, anche $p(\bar z) = 0$. Nella dimostrazione si coniuga $p(z) = 0$ e si usa $\bar a_i = a_i$, che vale solo per coefficienti reali: $x^2 + (1 - i)x - i$ ha la radice $i$ ma non $-i$.
:::

::: domanda Perché un polinomio reale di grado dispari ha almeno una radice reale?
Perché ha $n$ radici complesse (numero dispari) e quelle non reali vengono a coppie coniugate (numero pari): almeno una deve essere reale.
:::

## Glossario

```glossario
Monomio | Prodotto di un coefficiente numerico per una parte letterale, come $-2xy$; il grado è la somma degli esponenti.
Polinomio | Somma di monomi, come $7 + 3x^2 - \sqrt 2\,y^3$.
Forma normale | Scrittura di un polinomio come somma di monomi con parti letterali diverse e coefficienti non nulli (oppure il polinomio $0$).
Grado | Il massimo grado dei monomi di un polinomio in forma normale.
Termine noto | Il coefficiente $a_0$, il monomio di grado zero.
Polinomio monico | Polinomio con coefficiente del termine di grado più alto uguale a $1$.
$\R[x]$, $\C[x]$ | Polinomi in una variabile a coefficienti reali, complessi.
$\R_k[x]$ | Polinomi reali di grado al più $k$ (compreso il polinomio nullo).
Divisione con resto | $p(x) = q(x)d(x) + r(x)$ con $\deg r < \deg d$: $q$ quoziente, $r$ resto.
Divisibilità | $d(x) \mid p(x)$: la divisione ha resto nullo, cioè $p(x) = q(x)d(x)$.
Regola di Ruffini | Schema con i soli coefficienti per dividere per $x - a$; l'ultimo numero è il resto, uguale a $p(a)$.
Radice | Un numero $a$ con $p(a) = 0$ (Definizione 4.1).
Molteplicità | Il massimo $k$ per cui $(x - a)^k$ divide $p(x)$ (Definizione 4.3); radice semplice, doppia, tripla.
Discriminante | $\Delta = b^2 - 4ac$ per $ax^2 + bx + c$; nei reali decide quante radici ci sono.
Teorema fondamentale dell'algebra | Ogni polinomio a coefficienti complessi di grado $n$ ha esattamente $n$ radici complesse, contate con molteplicità (Teorema 4.8).
Radici coniugate | Se i coefficienti sono reali e $z$ è radice, anche $\bar z$ lo è (Proposizione 4.11).
Equazione biquadratica | Equazione con sole potenze pari, come $z^4 + 5z^2 + 4 = 0$: si risolve con $t = z^2$.
```

## Checklist

```checklist
- So ridurre un polinomio in forma normale, leggerne il grado e dire se sta in $\R_k[x]$ o in $\C_k[x]$.
- So eseguire la divisione in colonna tra polinomi, con gli zeri al posto giusto, e controllarla.
- So usare la regola di Ruffini, anche per dividere per $x + a$.
- So enunciare e dimostrare la Proposizione 4.2, e so che il resto della divisione per $x - a$ è $p(a)$.
- So scomporre un polinomio trovando una radice tra i divisori del termine noto e dividendo.
- So calcolare la molteplicità di una radice con divisioni ripetute.
- So enunciare il Teorema 4.6 e il teorema fondamentale dell'algebra, e spiegare la differenza tra «al più $n$» ed «esattamente $n$».
- So risolvere un'equazione di secondo grado in $\C$, anche con $\Delta$ complesso.
- So usare la Proposizione 4.11 e so che vale solo con coefficienti reali.
- So rispondere alle domande «quale è una radice» sostituendo o con la sostituzione $t = z^2$.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 4 «Polinomi», pp. 15–19: le sezioni 4.A–4.E sono seguite in ordine, con la pagina accanto a ogni titolo; le Definizioni 4.1 e 4.3, le Proposizioni 4.2 e 4.11, i Teoremi 4.6 e 4.8 e gli Esempi 4.4, 4.5, 4.7, 4.9 e 4.10 mantengono la loro numerazione. Le dispense non hanno esercizi per questa lezione.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.3 (pp. 21–25, con la Proposizione 1.3.8 sulla formula del secondo grado) e §1.4.7–1.4.8 (pp. 31–33: Teorema 1.4.7, Corollari 1.4.8, 1.4.10 e 1.4.12, Proposizione 1.4.13).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): domanda 1 del 10/07/2025, domanda 7 del 03/07/2026 e domanda 1 del 07/09/2026, riportate con soluzioni scritte per questi appunti; la tabella degli altri usi dei polinomi negli appelli ne indica solo il tipo. Regole d'esame 2025/26 e date 2026/27 come nella lezione L01.
- Le parti **«Oltre le dispense»** (la regola di Ruffini, il grado dei prodotti, le radici razionali, il grafico e la molteplicità, la dimostrazione della formula del secondo grado, le conseguenze della Proposizione 4.11, tutti gli esercizi) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
