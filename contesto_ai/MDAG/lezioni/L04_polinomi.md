---
corso: MDAG
modulo: AG
lezione: L04
titolo: Polinomi
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L04
descrizione: >-
  Appunti della lezione L04 di Algebra lineare e Geometria (MDAG, parte 2): polinomi e grado, divisione con resto
  e regola di Ruffini, radici e molteplicità, quante radici può avere un polinomio, teorema fondamentale
  dell'algebra, equazioni di secondo grado nei complessi e polinomi a coefficienti reali, con quiz nello stile
  dell'esame ed esercizi svolti.
lede: >-
  Un polinomio è una macchina che prende un numero e ne restituisce un altro. Qui impari a dividere i polinomi con il
  resto, come i numeri alle elementari, e a trovare i numeri che fanno uscire zero: le radici. Servono in tutto il
  corso, dagli autovalori ai determinanti con un parametro.
materiale: dispense
scheda:
  Dispense: lezione 4 · pp. 15–19
  Libro: Martelli, §1.3 (pp. 21–25) e §1.4.7–1.4.8 (pp. 31–33)
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 4 «Polinomi»; B. Martelli, Geometria e algebra lineare, §1.3 e §1.4.7–1.4.8
appunti_html: appunti/MDAG/L04_polinomi.html
genera_html: true
---

## In breve

- Un **polinomio** è un'espressione come $x^2 - 3$, fatta di numeri e di potenze di una lettera, messi insieme con più, meno e per. Funziona come una macchina: metti un numero al posto della lettera ed esce un numero. Il **grado** è l'esponente più alto.
- I polinomi si **dividono con il resto**, come i numeri alle elementari: 17 diviso 5 fa 3 con il resto di 2. Se il resto è zero, il divisore **divide** il polinomio.
- Una **radice** è un numero che, messo nella macchina, fa uscire zero. Il numero $a$ è una radice esattamente quando il polinomio si divide per $x - a$ senza resto.
- La **molteplicità** di una radice dice quante volte il fattore $x - a$ «ci sta» nel polinomio.
- Un polinomio ha al massimo tante radici quanto è il suo grado. Tra i numeri complessi ne ha **esattamente** tante quanto il grado, contate con la molteplicità: è il **teorema fondamentale dell'algebra**.
- Se i numeri del polinomio sono reali, le radici complesse vengono a coppie: una e il suo coniugato.
- All'esame: «quale di questi numeri è una radice?» è stata la domanda sui complessi in tre appelli, e le radici dei polinomi servono in quasi ogni problema sugli autovalori.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Che cos'è un polinomio (p. 15)

Prendi questa regola: «prendi un numero, moltiplicalo per sé stesso e togli 3». Si scrive così:

$$x^2 - 3.$$

La lettera $x$ è un posto vuoto in cui mettere un numero. Proviamo con qualche numero:

| Metto | Conto | Esce |
|---|---|---|
| $2$ | $2^2 - 3 = 4 - 3$ | $1$ |
| $0$ | $0^2 - 3 = 0 - 3$ | $-3$ |
| $-2$ | $(-2)^2 - 3 = 4 - 3$ | $1$ |

Un'espressione così è un **polinomio**: una macchina che prende un numero e ne restituisce un altro.

Le dispense descrivono i polinomi come le funzioni più semplici che ci siano. Si costruiscono con numeri e lettere usando solo tre operazioni: più, meno e per. Niente divisioni per una lettera, niente radici di una lettera, niente esponenti negativi. Per esempio $x^2 + 3$ è un polinomio; $\frac 1x$ e $\sqrt x$ no.

### I mattoni: i monomi

Un polinomio è fatto di pezzi messi in somma. Ogni pezzo si chiama **monomio**: un numero moltiplicato per delle lettere, con esponenti interi positivi o zero.

In un monomio ci sono due parti:

- il **coefficiente**, cioè il numero davanti;
- la **parte letterale**, cioè le lettere con i loro esponenti.

Il **grado** di un monomio è la somma degli esponenti delle sue lettere. Una lettera senza esponente scritto ha esponente 1.

| Monomio | Coefficiente | Parte letterale | Grado |
|---|---|---|--:|
| $4x$ | $4$ | $x$ | $1$ |
| $-2xy$ | $-2$ | $xy$ | $1 + 1 = 2$ |
| $\sqrt 5\,x^3$ | $\sqrt 5$ | $x^3$ | $3$ |
| $7$ | $7$ | nessuna | $0$ |

Sono i tre esempi delle dispense, più l'ultima riga: un monomio senza lettere è solo un numero, e ha grado zero.

### Polinomi e forma normale

Un **polinomio** è una somma di monomi, per esempio $7 + 3x^2 - \sqrt 2\,y^3$. Qui le lettere sono due, $x$ e $y$.

Lo stesso polinomio si può scrivere in tanti modi. Per esempio $3x^2 + 2x - x^2 + 5 - 2x$ è lo stesso di $2x^2 + 5$: basta mettere insieme i pezzi simili.

1. I pezzi con $x^2$: $3x^2 - x^2 = 2x^2$.
2. I pezzi con $x$: $2x - 2x = 0$, e spariscono.
3. Il numero da solo: $5$.

Resta $2x^2 + 5$. Questa scrittura ordinata, senza pezzi doppi e senza pezzi con coefficiente zero, si chiama **forma normale**. Le dispense lo scrivono così.

> [!DEF] Forma normale e grado (p. 15)
> Un polinomio è **ridotto in forma normale** se è scritto come somma di monomi con parti letterali differenti e coefficienti non nulli, oppure è il polinomio $0$. Per ridurlo in forma normale è sufficiente raccogliere i monomi con la stessa parte letterale e quindi eliminare quelli con coefficiente nullo.
>
> Il **grado** di un polinomio scritto in forma normale è il massimo grado dei suoi monomi.

**Come si legge.** Un polinomio è in forma normale quando ogni parte letterale compare una volta sola e nessun coefficiente è zero. Per arrivarci si mettono insieme i pezzi con le stesse lettere e si cancellano quelli che si annullano. Il grado del polinomio è il grado più alto tra i suoi pezzi.

> [!ESEMPIO] · Ridurre e poi leggere il grado
> $3x^2 + 2x - x^2 + 5 - 2x$: si raccolgono i monomi simili, $(3 - 1)x^2 + (2 - 2)x + 5 = 2x^2 + 0x + 5$, e si elimina quello con coefficiente nullo. Forma normale: $2x^2 + 5$, grado $2$.
>
> $7 + 3x^2 - \sqrt 2\,y^3$ è già in forma normale: i monomi hanno gradi $0$, $2$ e $3$, quindi il polinomio ha grado $3$.

> [!TRAPPOLA] Il grado si legge dopo aver ridotto
> $(x + 1)^2 - x^2$ sembra di secondo grado. Ma svolgendo il quadrato viene $x^2 + 2x + 1 - x^2 = 2x + 1$: il grado è 1. Prima si riduce in forma normale, poi si guarda il grado.

::: prova Qual è il grado di $x^4 + 2x - x^4 + 3$?
I due pezzi $x^4$ e $-x^4$ si cancellano. Resta $2x + 3$, che ha grado 1.
:::

> [!RICORDA]
> - Un polinomio è una somma di monomi: numeri per potenze di lettere.
> - Il grado è l'esponente più alto, letto dopo aver messo insieme i pezzi simili.

## I polinomi con una sola lettera (p. 15)

Nel corso servono quasi sempre i polinomi con una lettera sola. La lettera è di solito la $x$, e il polinomio si indica con $p(x)$, che si legge «pi di ics», o solo con $p$.

Si scrivono in ordine, dal pezzo con l'esponente più alto a quello più basso. Per esempio:

$$x^3 - 2x + 5.$$

Qui ci sono le potenze 3, 1 e 0 di $x$. La potenza 2 manca: è come se ci fosse $0 \cdot x^2$.

### I coefficienti con i numerini

Per parlare di un polinomio qualsiasi le dispense chiamano i suoi numeri con una lettera e un numerino in basso. Il numerino dice a quale potenza appartiene il numero:

- $a_3$, «a tre», è il numero davanti a $x^3$;
- $a_2$ è il numero davanti a $x^2$;
- $a_1$ è il numero davanti a $x$;
- $a_0$ è il numero da solo, senza $x$. Si chiama **termine noto**.

Per $x^3 - 2x + 5$: $a_3 = 1$, $a_2 = 0$ (manca il pezzo con $x^2$), $a_1 = -2$, $a_0 = 5$. Per $4x^2 - 7$: $a_2 = 4$, $a_1 = 0$, $a_0 = -7$. Sono i due esempi delle dispense.

Un polinomio qualsiasi di grado $n$ si scrive allora così:

$$p(x) = a_nx^n + \dots + a_1x + a_0, \qquad a_n \neq 0.$$

I tre puntini vogliono dire «e tutti i pezzi in mezzo, con le potenze da $n - 1$ fino a 2». La condizione $a_n \neq 0$, «$a_n$ diverso da zero», dice che il pezzo più alto c'è davvero: altrimenti il grado non sarebbe $n$. Un polinomio di grado zero è solo un numero diverso da zero.

### Gli insiemi di polinomi

Le dispense danno un nome agli insiemi di polinomi che useremo.

> [!DEF] Gli insiemi di polinomi (p. 15)
> $\R[x]$ è l'insieme dei polinomi con coefficienti in $\R$ in cui compare una sola variabile $x$, e $\C[x]$ l'insieme dei polinomi con coefficienti in $\C$ in cui compare una sola variabile $x$. Con $\R_k[x]$ si indicano i polinomi in $\R[x]$ che hanno grado $\le k$ (analogamente $\C_k[x]$).

**Come si legge.**

- $\R$ sono i numeri reali e $\C$ i numeri complessi (lezioni L01 e L02).
- $\R[x]$, «erre di ics», sono i polinomi in $x$ i cui numeri sono reali. $\C[x]$ sono quelli i cui numeri possono essere complessi.
- $\R_k[x]$, «erre kappa di ics», sono i polinomi reali di grado al massimo $k$. Il simbolo $\le$ si legge «minore o uguale».

Tre cose da notare:

- Ogni polinomio di $\R[x]$ sta anche in $\C[x]$, perché i numeri reali sono anche complessi. Per esempio $x^2 + 1$ sta in tutti e due. Invece $ix + 1$ sta in $\C[x]$ ma non in $\R[x]$.
- $\R_2[x]$ contiene **tutti** i polinomi reali di grado 2 o meno: $x^2 - 3$, ma anche $5x$, il numero 7 e il polinomio 0. Non contiene $x^3$.
- Dalla lezione L05 in poi $\R_k[x]$ sarà uno degli esempi principali di **spazio vettoriale**. Negli appelli compaiono spesso domande su insiemi come «i polinomi di $\R_3[x]$ che valgono zero in 6».

::: prova Quali di questi polinomi stanno in $\R_2[x]$? (a) $3x - 1$; (b) $x^3$; (c) $2ix^2$; (d) $5$.
(a) Sì: grado 1, numeri reali. (b) No: grado 3. (c) No: il numero $2i$ non è reale. (d) Sì: grado zero, numero reale.
:::

> [!OLTRE] · il polinomio nullo e il grado dei prodotti
> Il polinomio $0$ non ha monomi, quindi il suo grado non è definito (alcuni libri gli danno grado $-\infty$). Per due polinomi non nulli valgono due regole utili:
> - $\deg(pq) = \deg p + \deg q$: i termini di grado più alto si moltiplicano, $a_nx^n \cdot b_mx^m = a_nb_m\,x^{n + m}$, e $a_nb_m \neq 0$. Per esempio $(x^2 + 1)(x^3 - x)$ ha grado $5$.
> - $\deg(p + q) \le$ il più grande tra $\deg p$ e $\deg q$, e può essere più piccolo se i termini più alti si cancellano, come nella trappola della sezione precedente.
>
> Qui $\deg$ è l'abbreviazione di «grado» (dall'inglese *degree*). Martelli chiama anche **monico** un polinomio con $a_n = 1$.

> [!RICORDA]
> - $p(x) = a_nx^n + \dots + a_1x + a_0$: il numerino dice a quale potenza appartiene il numero; $a_0$ è il termine noto.
> - $\R[x]$ e $\C[x]$: polinomi con numeri reali o complessi. $\R_k[x]$: polinomi reali di grado al massimo $k$.

## Dividere con il resto, come alle elementari (pp. 15–16)

Alle elementari hai imparato la divisione con il resto. Hai 44 caramelle e 6 sacchetti: in ogni sacchetto ne metti 7 e ne avanzano 2.

$$44 = 7 \cdot 6 + 2.$$

Il 7 è il **quoziente**, il 2 è il **resto**. E il resto è più piccolo del divisore 6: se ne avanzassero 6 o più, potresti mettere un'altra caramella in ogni sacchetto.

I polinomi si dividono nello stesso modo. Al posto di «più piccolo» si usa «di grado più basso». Le dispense lo scrivono così.

> [!PROP] · Divisione con resto (p. 16)
> Dati due polinomi $p(x)$ (il **dividendo**) e $d(x) \neq 0$ (il **divisore**), esistono sempre, e sono unici, due polinomi $q(x)$ (il **quoziente**) e $r(x)$ (il **resto**) per cui
> $$p(x) = q(x)d(x) + r(x),$$
> con la proprietà che il resto $r(x)$ abbia grado strettamente minore del divisore $d(x)$.

**Come si legge.**

- $p(x)$ è il polinomio da dividere, $d(x)$ quello per cui si divide. Il divisore non può essere il polinomio zero, come tra i numeri non si divide per zero.
- Il quoziente e il resto ci sono sempre, e sono di un solo tipo: «esistono e sono unici».
- La formula è la stessa di $44 = 7 \cdot 6 + 2$.
- «Strettamente minore» vuol dire minore e non uguale. È questa condizione che rende quoziente e resto unici: senza, si potrebbero scrivere tante uguaglianze diverse dello stesso tipo (nel quiz ne trovi un esempio).
- Il resto può essere il polinomio zero. È il caso più importante: quello in cui la divisione «viene esatta».

### Come si fa la divisione in colonna

Le dispense dicono che la divisione si fa con carta e penna, con la stessa procedura dei numeri. Ecco l'esempio delle dispense, passo per passo.

> [!ESEMPIO] · L'esempio delle dispense: $x^3 + 1$ diviso $x^2 - 1$
> 1. Divido il pezzo più alto del dividendo per il pezzo più alto del divisore: $x^3$ diviso $x^2$ fa $x$. Il quoziente comincia con $x$.
> 2. Moltiplico il divisore per $x$: $x \cdot (x^2 - 1) = x^3 - x$.
> 3. Tolgo questo risultato dal dividendo: $(x^3 + 1) - (x^3 - x) = x + 1$. Il pezzo $x^3$ si è cancellato.
> 4. Quello che resta, $x + 1$, ha grado 1, più basso del grado 2 del divisore. Mi fermo.
>
> Quoziente $q(x) = x$, resto $r(x) = x + 1$:
> $$x^3 + 1 = x\left(x^2 - 1\right) + (x + 1).$$
> Controllo: $x^3 - x + x + 1 = x^3 + 1$.

> [!METODO] La divisione in colonna
> 1. Scrivi dividendo e divisore dal grado più alto al più basso. Nel dividendo metti $0$ al posto dei gradi che mancano.
> 2. Dividi il pezzo più alto del dividendo per il pezzo più alto del divisore: è il primo pezzo del quoziente.
> 3. Moltiplica il divisore per questo pezzo e **togli** il risultato dal dividendo: il pezzo più alto si cancella.
> 4. Ripeti i passi 2 e 3 con quello che è rimasto, finché il suo grado diventa **più basso** del grado del divisore. Quello che resta è il resto.
> 5. Controllo: quoziente per divisore, più il resto, deve ridare il dividendo.

> [!ESEMPIO] · Una divisione in due passi: $2x^3 + 3x^2 - x + 5$ diviso $x^2 - x + 1$
> 1. Pezzi più alti: $2x^3$ diviso $x^2$ fa $2x$. Moltiplico: $2x(x^2 - x + 1) = 2x^3 - 2x^2 + 2x$. Tolgo:
>    $$(2x^3 + 3x^2 - x + 5) - (2x^3 - 2x^2 + 2x) = 5x^2 - 3x + 5.$$
> 2. Il grado è ancora 2, uguale a quello del divisore: si continua. $5x^2$ diviso $x^2$ fa $5$. Moltiplico: $5(x^2 - x + 1) = 5x^2 - 5x + 5$. Tolgo:
>    $$(5x^2 - 3x + 5) - (5x^2 - 5x + 5) = 2x.$$
> 3. $2x$ ha grado 1, più basso di 2: fine.
>
> Quoziente $q(x) = 2x + 5$, resto $r(x) = 2x$. Controllo: $(2x + 5)(x^2 - x + 1) + 2x = 2x^3 - 2x^2 + 2x + 5x^2 - 5x + 5 + 2x = 2x^3 + 3x^2 - x + 5$.

::: prova Dividi $x^2 + 3x + 5$ per $x + 1$.
$x^2$ diviso $x$ fa $x$. Moltiplico: $x(x + 1) = x^2 + x$. Tolgo: $(x^2 + 3x + 5) - (x^2 + x) = 2x + 5$. Il grado è 1, come il divisore: continuo. $2x$ diviso $x$ fa 2. Moltiplico: $2(x + 1) = 2x + 2$. Tolgo: $(2x + 5) - (2x + 2) = 3$. Quoziente $x + 2$, resto 3. Controllo: $(x + 2)(x + 1) + 3 = x^2 + 3x + 2 + 3 = x^2 + 3x + 5$.
:::

### Quando la divisione viene esatta

Tra i numeri, 7 divide 14 ma non 15: 14 diviso 7 ha resto zero, 15 diviso 7 no. Per i polinomi si usa la stessa parola. Le dispense la scrivono così.

> [!DEF] Divisibilità (p. 16)
> Se la divisione tra due polinomi $p(x)$ e $d(x)$ ha resto nullo, allora $p(x) = q(x)d(x)$ per qualche quoziente $q(x)$, e si dice che $d(x)$ **divide** $p(x)$. Si usa la barra verticale $\mid$ come sinonimo di «divide»:
> $$9 \mid 18, \qquad (x + 1) \mid \left(x^3 + 1\right).$$

**Come si legge.** «$d(x)$ divide $p(x)$» vuol dire che la divisione viene esatta: $p(x)$ è $d(x)$ moltiplicato per qualcosa. La barretta verticale si legge «divide»: $9 \mid 18$ si legge «nove divide diciotto».

Controlliamo il secondo esempio con la divisione in colonna di $x^3 + 0x^2 + 0x + 1$ per $x + 1$. Gli zeri servono a tenere il posto dei gradi che mancano.

1. $x^3$ diviso $x$ fa $x^2$. Moltiplico: $x^2(x + 1) = x^3 + x^2$. Tolgo: resta $-x^2 + 0x + 1$.
2. $-x^2$ diviso $x$ fa $-x$. Moltiplico: $-x(x + 1) = -x^2 - x$. Tolgo: resta $x + 1$.
3. $x$ diviso $x$ fa 1. Moltiplico: $1 \cdot (x + 1) = x + 1$. Tolgo: resta 0.

Il resto è zero e il quoziente è $x^2 - x + 1$. Infatti, come notano le dispense, $\left(x^3 + 1\right) = \left(x^2 - x + 1\right)(x + 1)$.

> [!TRAPPOLA] Gli zeri e quando fermarsi
> Se nel dividendo mancano dei gradi, come in $x^3 + 1$, bisogna scrivere gli zeri: $x^3 + 0x^2 + 0x + 1$. Altrimenti si tolgono pezzi di grado diverso. E ci si ferma quando il grado di quello che resta è **più basso** di quello del divisore, non quando «resta un numero»: dividendo per $x^2 - x + 1$, il resto $2x$ va benissimo.

> [!RICORDA]
> - Dividendo uguale quoziente per divisore più resto, con il resto di grado più basso del divisore.
> - Se il resto è zero, il divisore divide il polinomio: si scrive con la barretta $\mid$.

## La regola di Ruffini (oltre le dispense)

Spesso si divide per un polinomio molto corto: la lettera meno un numero, come $x - 2$. In questo caso la divisione in colonna si può scrivere in una tabella con i soli numeri. È la **regola di Ruffini**: è il modo più veloce, e la userai di continuo nella sezione sulle radici.

Un esempio: dividere $2x^3 - 3x^2 + 4x - 5$ per $x - 2$.

> [!ESEMPIO] · $2x^3 - 3x^2 + 4x - 5$ diviso $x - 2$
> Nella prima riga scrivo i coefficienti $2, -3, 4, -5$. A sinistra scrivo il numero 2, quello di $x - 2$.
>
> | | $2$ | $-3$ | $4$ | $-5$ |
> |---|--:|--:|--:|--:|
> | $a = 2$ | | $4$ | $2$ | $12$ |
> | | $2$ | $1$ | $6$ | $7$ |
>
> Colonna per colonna:
> 1. Abbasso il primo numero, 2.
> 2. Moltiplico $2 \cdot 2 = 4$, lo scrivo sotto il $-3$ e sommo: $-3 + 4 = 1$.
> 3. Moltiplico $1 \cdot 2 = 2$, lo scrivo sotto il 4 e sommo: $4 + 2 = 6$.
> 4. Moltiplico $6 \cdot 2 = 12$, lo scrivo sotto il $-5$ e sommo: $-5 + 12 = 7$.
>
> L'ultimo numero in basso, 7, è il resto. Gli altri, $2, 1, 6$, sono i coefficienti del quoziente, che ha un grado in meno: $q(x) = 2x^2 + x + 6$.
> $$2x^3 - 3x^2 + 4x - 5 = (2x^2 + x + 6)(x - 2) + 7.$$
> Nota: se metto 2 nel polinomio viene $16 - 12 + 8 - 5 = 7$, proprio il resto. Non è un caso: lo spiega la prossima sezione.

> [!METODO] Dividere un polinomio per $x - a$ con Ruffini
> 1. Scrivi in fila i coefficienti, dal grado più alto al termine noto, con gli **zeri** per i gradi che mancano. Scrivi $a$ a sinistra. Attenzione al segno: per dividere per $x + 2$ si usa $a = -2$, perché $x + 2 = x - (-2)$.
> 2. Abbassa il primo coefficiente nell'ultima riga.
> 3. Moltiplica per $a$ l'ultimo numero scritto in basso, scrivi il prodotto nella colonna dopo, nella riga di mezzo, e somma: il risultato va in basso.
> 4. Ripeti fino all'ultima colonna. L'ultimo numero in basso è il **resto**. Gli altri sono i coefficienti del **quoziente**, che ha un grado in meno.

::: prova Dividi $x^2 + 3x + 5$ per $x + 1$ con Ruffini, e confronta con il «Prova tu» della sezione di prima.
Qui $a = -1$. Coefficienti $1, 3, 5$. Abbasso 1. $1 \cdot (-1) = -1$, e $3 - 1 = 2$. $2 \cdot (-1) = -2$, e $5 - 2 = 3$. In basso $1, 2$ e resto 3: quoziente $x + 2$, resto 3. Lo stesso risultato della divisione in colonna.
:::

Con lo strumento qui sotto puoi rifare la divisione con altri polinomi e altri valori di $a$. I coefficienti si scrivono dal grado più alto, separati da spazi. Il pulsante **Scomponi con le radici razionali** prova tutti i candidati $\pm\frac{\text{divisori del termine noto}}{\text{divisori del primo coefficiente}}$ e scompone il polinomio: provalo con `1 -6 11 -6` e con `1 -1 -3 5 -2`.

```widget ruffini
titolo: Divisione per $x - a$ con la tabella di Ruffini
coefficienti: 2 -3 4 -5
a: 2
```

> [!RICORDA]
> - Ruffini divide per $x - a$ con i soli coefficienti: abbassa, moltiplica per $a$, somma.
> - L'ultimo numero è il resto; gli altri sono il quoziente, di un grado in meno.

## Le radici: i numeri che fanno uscire zero (p. 16)

Torna alla macchina dell'inizio, quella che eleva al quadrato e toglie 3. Con il polinomio $x^2 - 3$: mettendo 2 esce 1, mettendo 0 esce $-3$. C'è un numero che fa uscire zero? Sì: $\sqrt 3$, perché $(\sqrt 3)^2 - 3 = 3 - 3 = 0$. E anche $-\sqrt 3$.

Mettere un numero $a$ al posto di $x$ si scrive $p(a)$, «pi di a». Per esempio, con $p(x) = x^2 - 3$:

- $p(-2) = (-2)^2 - 3 = 4 - 3 = 1$;
- $p(0) = 0 - 3 = -3$;
- $p(\sqrt 3) = 3 - 3 = 0$.

I numeri che fanno uscire zero sono speciali, e hanno un nome. Le dispense lo scrivono così.

> [!DEF] 4.1
> Un numero $a$ è **radice** di un polinomio $p(x)$ se $p(a) = 0$.

**Come si legge.** Una radice è un numero che, messo al posto di $x$, fa venire zero. In altre parole, le radici sono le **soluzioni dell'equazione** $p(x) = 0$.

Tre esempi:

- $-1$ è radice di $p(x) = x^3 + 1$, perché $(-1)^3 + 1 = -1 + 1 = 0$. È l'esempio delle dispense. Invece 2 non lo è, perché $2^3 + 1 = 9$.
- $\sqrt 3$ e $-\sqrt 3$ sono radici di $x^2 - 3$.
- $i$ è radice di $x^2 + 1$, perché $i^2 + 1 = -1 + 1 = 0$. Le radici possono essere numeri complessi, e per controllarle servono i conti delle lezioni L02 e L03.

Le dispense ricordano che trovare le radici di un polinomio è uno dei problemi più antichi dell'algebra. La prossima sezione collega le radici alla divisione.

::: prova Il numero 3 è radice di $x^2 - 2x - 3$? E il numero 1?
$3^2 - 2 \cdot 3 - 3 = 9 - 6 - 3 = 0$: sì, 3 è radice.

$1^2 - 2 \cdot 1 - 3 = 1 - 2 - 3 = -4$: no, 1 non è radice.
:::

> [!RICORDA]
> - $p(a)$ è il numero che esce mettendo $a$ al posto di $x$.
> - $a$ è una radice quando $p(a) = 0$.

## Una radice è un fattore che ci sta (pp. 16–17)

Alcuni polinomi si possono scrivere come prodotto di pezzi più piccoli. Per esempio $x^2 - 5x + 6$ si scrive così: $(x - 2)(x - 3)$. Controllo: $x^2 - 3x - 2x + 6 = x^2 - 5x + 6$.

Le sue radici sono 2 e 3. Infatti, se metto 2, il primo fattore diventa $2 - 2 = 0$, e qualsiasi cosa moltiplicata per zero fa zero. Con 3 si annulla il secondo fattore.

Quindi ogni fattore $x - a$ produce una radice $a$. Vale anche al contrario: ogni radice $a$ produce un fattore $x - a$. Le dispense lo scrivono così.

> [!PROP] 4.2
> Il numero $a$ è radice di $p(x)$ se e solo se $(x - a) \mid p(x)$.

**Come si legge.** «Se e solo se» vuol dire che le due cose vanno sempre insieme. $a$ è radice esattamente quando la divisione di $p(x)$ per $x - a$ viene esatta, senza resto.

### Il resto è il valore

Nell'esempio di Ruffini il resto della divisione per $x - 2$ era 7, e anche $p(2)$ era 7. È sempre così, ed è il cuore della dimostrazione. Il motivo, a parole:

1. Divido $p(x)$ per $x - a$. Il divisore ha grado 1, quindi il resto ha grado zero: è un numero solo, che chiamo $r_0$.
2. La divisione dice $p(x) = q(x)(x - a) + r_0$.
3. Metto $a$ al posto di $x$. Il fattore $a - a$ fa zero, quindi tutto il primo pezzo sparisce. Resta $p(a) = r_0$.

> [!IDEA] · il resto è il valore
> **Il resto della divisione di $p(x)$ per $x - a$ è $p(a)$.** Quindi, per sapere se $a$ è radice, basta calcolare $p(a)$. E per sapere il resto della divisione per $x - a$ non serve fare la divisione.

> [!DIM] della Proposizione 4.2
> Dalle dispense, con ogni passaggio spiegato.
> 1. Dividiamo $p(x)$ per $(x - a)$: per la divisione con resto, $p(x) = q(x)(x - a) + r(x)$, con $q(x)$ quoziente e $r(x)$ resto.
> 2. Il grado di $r(x)$ è più basso di quello di $x - a$, che è 1. Quindi $r(x)$ ha grado zero, oppure è il polinomio nullo: è un numero, che scriviamo $r_0$. Allora
>    $$p(x) = q(x)(x - a) + r_0.$$
> 3. Mettiamo $a$ al posto di $x$: il fattore $a - a$ si annulla, e resta
>    $$p(a) = q(a)(a - a) + r_0 = 0 + r_0 = r_0.$$
> 4. Quindi $a$ è radice di $p(x)$, cioè $p(a) = 0$, esattamente quando $r_0 = 0$.
> 5. E $r_0 = 0$ vuol dire che la divisione per $x - a$ ha resto nullo, cioè che $(x - a)$ divide $p(x)$. $\square$

### Scomporre un polinomio

La Proposizione 4.2 dà un modo per scomporre un polinomio in fattori: trovata una radice, si divide.

> [!ESEMPIO] · $x^3 - 6x^2 + 11x - 6$
> 1. Provo $x = 1$: $1 - 6 + 11 - 6 = 0$. Quindi 1 è radice e $(x - 1)$ divide il polinomio.
> 2. Ruffini con $a = 1$ sui coefficienti $1, -6, 11, -6$: abbasso 1; $1 \cdot 1 = 1$ e $-6 + 1 = -5$; $-5 \cdot 1 = -5$ e $11 - 5 = 6$; $6 \cdot 1 = 6$ e $-6 + 6 = 0$. Quoziente $x^2 - 5x + 6$, resto 0.
> 3. $x^2 - 5x + 6 = (x - 2)(x - 3)$: cerco due numeri che sommati danno 5 e moltiplicati danno 6.
>
> Quindi $x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$, con radici 1, 2 e 3.

> [!METODO] Scomporre un polinomio partendo da una radice
> 1. Cerca una radice provando numeri piccoli: $0$, $1$, $-1$, $2$, $-2$… Se i coefficienti sono interi, una radice intera divide il termine noto (vedi il riquadro qui sotto).
> 2. Dividi per $x - a$ con Ruffini: il polinomio diventa $(x - a)$ per un quoziente di un grado in meno.
> 3. Ripeti con il quoziente. Quando arrivi al secondo grado, usa la formula con il $\Delta$ (più avanti in questa lezione).

::: prova Il resto della divisione di $x^3 + 2x - 1$ per $x - 1$ è…?
Non serve dividere: il resto è il valore in 1. $1 + 2 - 1 = 2$. Il resto è 2.
:::

> [!OLTRE] · le radici razionali
> Prendi un polinomio con coefficienti **interi** e una sua radice che sia una frazione $\frac uv$, ridotta ai minimi termini. Allora $u$ divide il termine noto $a_0$, e $v$ divide il primo coefficiente $a_n$. In particolare, se $a_n = 1$, ogni radice razionale è un **intero che divide $a_0$**. Per $x^3 - 6x^2 + 11x - 6$ i candidati erano solo $\pm 1, \pm 2, \pm 3, \pm 6$. Il motivo: da $p\left(\frac uv\right) = 0$, moltiplicando per $v^n$, si ottiene $a_nu^n + a_{n-1}u^{n-1}v + \dots + a_0v^n = 0$. Tutti i termini tranne l'ultimo sono multipli di $u$, quindi anche $a_0v^n$ lo è. Siccome $u$ e $v$ non hanno fattori comuni, $u$ divide $a_0$. Allo stesso modo $v$ divide $a_n$.

> [!RICORDA]
> - $a$ è radice esattamente quando $x - a$ divide il polinomio.
> - Il resto della divisione per $x - a$ è $p(a)$.
> - Per scomporre: trova una radice, dividi con Ruffini, ripeti.

## Quante volte ci sta: la molteplicità (p. 17)

Un fattore può comparire più di una volta. Prendi $(x - 2)^2 = (x - 2)(x - 2)$: il fattore $x - 2$ ci sta due volte. La radice è sempre la stessa, il 2, ma conta «doppio».

Le dispense lo scrivono così.

> [!DEF] 4.3
> La **molteplicità** di una radice $a$ di un polinomio $p(x)$ è il massimo numero $k$ tale che $(x - a)^k$ divide $p(x)$.

**Come si legge.** Si prova a dividere per $x - a$, poi per $(x - a)^2$, poi per $(x - a)^3$… La molteplicità è l'ultimo esponente per cui la divisione viene ancora esatta. Le dispense dicono: la molteplicità misura «quante volte» $a$ è radice.

Una radice di molteplicità 1 si chiama **semplice**, di molteplicità 2 **doppia**, di molteplicità 3 **tripla**.

> [!ESEMPIO] 4.4 · Molteplicità $1$ e $2$
> Il polinomio $x^3 - 1$ ha la radice $1$ con molteplicità $1$, perché
> $$x^3 - 1 = (x - 1)\left(x^2 + x + 1\right)$$
> e $(x - 1)$ non divide $x^2 + x + 1$, semplicemente perché $1$ non è radice di $x^2 + x + 1$: infatti $1 + 1 + 1 = 3 \neq 0$.
>
> Allo stesso modo il polinomio $x^3 - 2x^2 + x = x\left(x^2 - 2x + 1\right) = (x - 1)^2x$ ha la radice $1$ con molteplicità $2$ e la radice $0$ con molteplicità $1$.

Nel secondo polinomio il pezzo $x^2 - 2x + 1$ è il quadrato $(x - 1)^2$: è il prodotto notevole «quadrato di una differenza».

> [!ESEMPIO] 4.5 · Nel prodotto le molteplicità si sommano
> I polinomi $q_1(x) = x^2 - 2x + 1$ e $q_2(x) = x^2 - 1$ si scrivono
> $$q_1(x) = (x - 1)^2, \qquad q_2(x) = (x + 1)(x - 1).$$
> Il primo ha la radice $1$ con molteplicità $2$; il secondo ha le radici $-1$ e $1$, entrambe con molteplicità $1$. Il prodotto
> $$p(x) = q_1(x)q_2(x) = (x - 1)^3(x + 1)$$
> ha la radice $1$ con molteplicità $2 + 1 = 3$ e la radice $-1$ con molteplicità $1$.

Quando il polinomio non è già scomposto, la molteplicità si trova dividendo più volte.

> [!METODO] Calcolare la molteplicità di una radice
> Dividi il polinomio per $x - a$, con Ruffini. Se il quoziente ha ancora $a$ come radice, dividi di nuovo. Continua finché $a$ non è più radice del quoziente: il numero di divisioni fatte è la molteplicità.

> [!ESEMPIO] · $p(x) = x^4 - x^3 - 3x^2 + 5x - 2$ e la radice $1$
> $p(1) = 1 - 1 - 3 + 5 - 2 = 0$, quindi 1 è radice.
> 1. Ruffini con $a = 1$ su $1, -1, -3, 5, -2$: in basso $1, 0, -3, 2$ e resto 0. Quoziente $x^3 - 3x + 2$.
> 2. Nel quoziente metto 1: $1 - 3 + 2 = 0$. È ancora radice. Ruffini su $1, 0, -3, 2$: in basso $1, 1, -2$ e resto 0. Quoziente $x^2 + x - 2$.
> 3. Metto 1: $1 + 1 - 2 = 0$. Ancora radice. Ruffini su $1, 1, -2$: in basso $1, 2$ e resto 0. Quoziente $x + 2$.
> 4. Metto 1: $1 + 2 = 3$, non zero. Mi fermo.
>
> Tre divisioni: la radice 1 ha molteplicità 3, e $p(x) = (x - 1)^3(x + 2)$.

::: prova Qual è la molteplicità della radice 0 in $x^3 + x^2$?
$x^3 + x^2 = x^2(x + 1)$. Il fattore $x$, cioè $x - 0$, ci sta due volte. La radice 0 è doppia. L'altra radice, $-1$, è semplice.
:::

### Che cosa si vede nel grafico (oltre le dispense)

Per un polinomio reale, le radici reali sono i punti in cui il grafico tocca l'asse orizzontale. La molteplicità si vede dalla forma. In una radice di molteplicità **dispari** il grafico **attraversa** l'asse. In una radice di molteplicità **pari** lo **tocca** e torna indietro, perché un fattore al quadrato non cambia mai segno.

Guarda la figura: a sinistra, in $-2$, la curva passa da sotto a sopra l'asse; a destra, in 1, scende fino all'asse e risale.

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

> [!RICORDA]
> - La molteplicità dice quante volte il fattore $x - a$ ci sta nel polinomio.
> - Si calcola dividendo per $x - a$ finché $a$ smette di essere radice.
> - Nel prodotto di due polinomi le molteplicità si sommano.

## Quante radici al massimo (p. 18)

Un polinomio di secondo grado può avere due radici: per esempio $x^2 - 5x + 6$ ha 2 e 3. Ne può avere tre? No. Ogni radice porta un fattore di grado 1, e i gradi dei fattori si sommano: tre fattori darebbero già grado 3.

Le dispense lo scrivono così.

> [!TEOREMA] 4.6
> Un polinomio $p(x)$ di grado $n \ge 1$ ha al più $n$ radici, contate con molteplicità.

**Come si legge.**

- $n \ge 1$ si legge «$n$ maggiore o uguale a 1»: il teorema parla dei polinomi che non sono solo un numero.
- «Al più $n$» vuol dire «$n$ o meno».
- «Contate con molteplicità» vuol dire che ogni radice si conta tante volte quanta è la sua molteplicità. Per esempio $(x - 1)^3(x + 1)$ ha due radici diverse, ma contate con molteplicità sono $3 + 1 = 4$, quante il grado.

Il teorema dice che questo conteggio non supera mai il grado. Può essere più piccolo: $x^2 + 1$ ha grado 2 ma nessuna radice reale.

> [!DIM] del Teorema 4.6
> La dimostrazione usa l'**induzione** sul grado, che vedrai in dettaglio in Matematica Discreta: si dimostra la tesi per il grado 1 (**base**), poi si mostra che, se vale per il grado $n - 1$, vale anche per il grado $n$ (**passo induttivo**). Così vale per 1, quindi per 2, quindi per 3, e così via.
>
> **Base, $n = 1$.** Il polinomio è $p(x) = a_1x + a_0$ con $a_1 \neq 0$, e $p(x) = 0$ vuol dire $x = -\frac{a_0}{a_1}$: c'è una sola radice, di molteplicità 1. La tesi è vera.
>
> **Passo induttivo.** Supponiamo la tesi vera per i polinomi di grado $n - 1$ e prendiamo $p(x)$ di grado $n$.
> 1. Se $p(x)$ non ha radici, non c'è niente da dimostrare: zero radici sono meno di $n$.
> 2. Se ha almeno una radice $a$, per la Proposizione 4.2 possiamo scrivere $p(x) = (x - a)q(x)$, e $q(x)$ ha grado $n - 1$ (i gradi dei fattori si sommano).
> 3. Per l'ipotesi induttiva $q(x)$ ha al più $n - 1$ radici contate con molteplicità.
> 4. Le radici di $p(x)$, contate con molteplicità, sono esattamente quelle di $q(x)$ più $a$. Infatti per $b \neq a$ vale $p(b) = (b - a)q(b)$ con $b - a \neq 0$, quindi $p(b) = 0$ esattamente quando $q(b) = 0$; e la molteplicità di $a$ in $p$ è quella in $q$ più uno, come nell'Esempio 4.5.
> 5. Quindi $p(x)$ ha al più $(n - 1) + 1 = n$ radici, contate con molteplicità. $\square$

### I polinomi di primo e di secondo grado

Le dispense fanno vedere il teorema sui casi che conosci dalla scuola.

> [!ESEMPIO] 4.7 · I polinomi di primo e di secondo grado
> Un polinomio di grado $1$ è sempre del tipo $p(x) = ax + b$ con $a \neq 0$, e ha sempre una sola radice $x = -\frac ba$.
>
> Un polinomio di grado $2$ è del tipo $p(x) = ax^2 + bx + c$ con $a \neq 0$, e le sue radici dipendono dal **discriminante** $\Delta = b^2 - 4ac$ nel modo seguente.
> - Se $\Delta > 0$, il polinomio $p(x)$ ha due radici distinte $x_\pm = \frac{-b \pm \sqrt\Delta}{2a}$, entrambe di molteplicità uno.
> - Se $\Delta = 0$, il polinomio $p(x)$ ha una sola radice $x = -\frac b{2a}$, con molteplicità due.
> - Se $\Delta < 0$, il polinomio $p(x)$ non ha radici reali.
>
> In particolare, ci sono polinomi che non hanno radici reali.

> [!RIPASSO] la formula del secondo grado
> Per $ax^2 + bx + c$ si calcola prima il **discriminante** $\Delta = b^2 - 4ac$. La lettera greca $\Delta$ si legge «delta». Poi le radici sono
> $$x_\pm = \frac{-b \pm \sqrt\Delta}{2a}.$$
> Il simbolo $\pm$ si legge «più o meno»: la formula dà due numeri, uno con il più e uno con il meno. $x_\pm$ è il nome di tutti e due: $x_+$ quello con il più, $x_-$ quello con il meno.
>
> Esempio: $x^2 - 5x + 6$. Qui $a = 1$, $b = -5$, $c = 6$. $\Delta = 25 - 24 = 1$, e $\sqrt 1 = 1$. Le radici sono $\frac{5 + 1}2 = 3$ e $\frac{5 - 1}2 = 2$.

Tre esempi, uno per caso:

| Polinomio | $\Delta = b^2 - 4ac$ | Radici reali | Scomposizione |
|---|---|---|---|
| $x^2 - 5x + 6$ | $25 - 24 = 1 > 0$ | $\frac{5 \pm 1}2$, cioè $3$ e $2$ | $(x - 2)(x - 3)$ |
| $x^2 - 4x + 4$ | $16 - 16 = 0$ | $\frac 42 = 2$, doppia | $(x - 2)^2$ |
| $x^2 + x + 1$ | $1 - 4 = -3 < 0$ | nessuna | non si scompone in $\R$ |

::: prova Quante radici reali ha $x^2 - 6x + 9$? Con che molteplicità?
$\Delta = 36 - 36 = 0$: una sola radice, $\frac 62 = 3$, con molteplicità 2. Infatti $x^2 - 6x + 9 = (x - 3)^2$.
:::

> [!APPROFONDIMENTO] da dove viene la formula
> Si «completa il quadrato». Per $a \neq 0$:
> $$ax^2 + bx + c = a\left(x + \frac b{2a}\right)^2 - \frac{\Delta}{4a}.$$
> Per controllarlo, svolgi il quadrato: $a\left(x^2 + \frac bax + \frac{b^2}{4a^2}\right) - \frac{b^2 - 4ac}{4a} = ax^2 + bx + c$. Quindi $p(x) = 0$ equivale a $\left(x + \frac b{2a}\right)^2 = \frac\Delta{4a^2}$. Se $\Delta > 0$ si prende la radice quadrata dei due lati, con i due segni. Se $\Delta = 0$ resta $x = -\frac b{2a}$. Se $\Delta < 0$ un quadrato reale dovrebbe essere negativo, impossibile. È la dimostrazione della Proposizione 1.3.8 del libro di Martelli.

> [!RICORDA]
> - Un polinomio di grado $n$ ha al massimo $n$ radici, contate con la molteplicità.
> - Per il secondo grado decide il $\Delta$: positivo due radici, zero una doppia, negativo nessuna reale.

## Nei complessi le radici ci sono tutte (p. 18)

Tra i numeri reali alcuni polinomi non hanno radici. Per esempio $x^2 + 1$: un quadrato più 1 non fa mai zero. Ma tra i numeri complessi sì: $i$ e $-i$. Il numero $i$ era stato inventato proprio per questo (lezione L02).

E i polinomi di grado più alto? Le dispense arrivano qui «al vero motivo per cui abbiamo introdotto i numeri complessi in questo corso»: tra i complessi le radici ci sono **sempre tutte**.

> [!TEOREMA] 4.8 · Teorema fondamentale dell'algebra
> Un polinomio $p(x)$ a coefficienti complessi di grado $n$ ha esattamente $n$ radici, contate con molteplicità.

**Come si legge.**

- «A coefficienti complessi» vuol dire che i numeri del polinomio possono essere complessi. Vale anche per i polinomi con numeri reali, perché i reali sono anche complessi.
- Il Teorema 4.6 diceva «**al più** $n$». Tra i complessi diventa «**esattamente** $n$»: le radici non mancano mai.
- Le dispense non lo dimostrano: le dimostrazioni più accessibili usano strumenti di Analisi lontani da questo corso.

Un esempio: $x^4 - 1$ ha grado 4. Tra i reali ha solo le radici 1 e $-1$. Tra i complessi ne ha quattro: 1, $-1$, $i$, $-i$. Sono le radici quarte dell'unità della lezione L03.

::: prova Quante radici complesse ha $x^5 - x$, contate con la molteplicità?
Il grado è 5, quindi esattamente 5. Infatti $x^5 - x = x(x^4 - 1)$: le radici sono 0, 1, $-1$, $i$, $-i$.
:::

> [!OLTRE] · un'altra forma dello stesso teorema
> Nel libro di Martelli il teorema fondamentale (Teorema 1.4.7) dice che **ogni polinomio non costante a coefficienti complessi ha almeno una radice**. Da qui si ricava la versione delle dispense (Corollario 1.4.8) con la stessa induzione del Teorema 4.6: trovata una radice $z_1$, si scrive $p(x) = (x - z_1)q(x)$ e si ripete su $q(x)$. Il risultato finale si scrive anche come **scomposizione in fattori di primo grado** (Corollario 1.4.10):
> $$p(x) = a_n(x - z_1)(x - z_2)\cdots(x - z_n),$$
> dove $z_1, \dots, z_n$ sono le radici ripetute secondo la molteplicità. Per esempio $x^4 - 1 = (x - 1)(x + 1)(x - i)(x + i)$.

> [!RICORDA]
> - Tra i numeri complessi un polinomio di grado $n$ ha esattamente $n$ radici, contate con la molteplicità.
> - È il motivo per cui il corso usa i numeri complessi.

## Le equazioni di secondo grado nei complessi (p. 19)

Ci sono equazioni di secondo grado senza soluzioni reali. Prendi $x^2 + 2x + 5$: il discriminante è $4 - 20 = -16$, negativo, quindi tra i reali niente radici. Ma tra i complessi $-16$ ha due radici quadrate, $4i$ e $-4i$ (lezione L03). Quindi la formula funziona lo stesso:

$$x_\pm = \frac{-2 \pm 4i}2 = -1 \pm 2i.$$

Le radici sono $-1 + 2i$ e $-1 - 2i$. Le dispense lo dicono in generale.

> [!ESEMPIO] 4.9 · La solita formula, nei complessi
> Per un polinomio di secondo grado $p(x) = ax^2 + bx + c$ le due radici complesse si trovano usando la solita formula
> $$x_\pm = \frac{-b \pm \sqrt\Delta}{2a}.$$
> Questa volta, $\pm\sqrt\Delta$ indica le **due radici quadrate complesse** di $\Delta$, che esistono sempre, come visto nella lezione L03.

Qui $a$, $b$ e $c$ possono essere anche complessi, e allora anche $\Delta$ può essere un numero complesso. La distinzione tra $\Delta$ positivo, zero o negativo ha senso solo se $\Delta$ è reale.

> [!METODO] Un'equazione di secondo grado nei complessi
> 1. Leggi $a$, $b$, $c$ e calcola $\Delta = b^2 - 4ac$.
> 2. Trova le due radici quadrate di $\Delta$, che chiamo $w$ e $-w$. Se $\Delta$ è un reale negativo, sono $i$ per la radice del suo opposto, con il più e con il meno. Se $\Delta$ è complesso, usa la forma polare o il metodo con $u + vi$ (lezioni L02 e L03).
> 3. Le radici sono $\frac{-b + w}{2a}$ e $\frac{-b - w}{2a}$.
> 4. Controlla mettendole nel polinomio, oppure con somma e prodotto: la somma delle radici è $-\frac ba$ e il prodotto è $\frac ca$.

> [!ESEMPIO] 4.10 · Due esempi delle dispense
> **$x^2 + 1$.** $a = 1$, $b = 0$, $c = 1$, quindi $\Delta = -4$, le cui radici quadrate sono $\pm 2i$. Le radici sono $x_\pm = \frac{\pm 2i}2 = \pm i$.
>
> **$x^2 + (1 - i)x - i$.** Qui $a = 1$, $b = 1 - i$, $c = -i$, e
> $$\Delta = (1 - i)^2 - 4 \cdot 1 \cdot (-i) = (1 - 2i + i^2) + 4i = -2i + 4i = 2i.$$
> Le radici quadrate di $2i$ sono $\pm(1 + i)$ (lezione L03: $2i = 2e^{i\pi/2}$ e $\sqrt 2\,e^{i\pi/4} = 1 + i$). Quindi
> $$x_\pm = \frac{-1 + i \pm \sqrt{2i}}{2} = \frac{-1 + i \pm (1 + i)}{2},$$
> quindi $x_+ = \frac{2i}2 = i$ e $x_- = \frac{-2}2 = -1$.
> Controllo: $i^2 + (1 - i)i - i = -1 + i + 1 - i = 0$ e $(-1)^2 + (1 - i)(-1) - i = 1 - 1 + i - i = 0$.

Nel secondo esempio ci sono due passaggi da guardare con calma:

1. $-b$ è il contrario di $1 - i$, cioè $-1 + i$.
2. Dalla formula si ricavano le due radici: una con il più e una con il meno.

Altri due esempi con lo stesso metodo:

- $x^2 + 2x + 5$: è l'esempio all'inizio della sezione. Controllo con il prodotto: $(-1 + 2i)(-1 - 2i) = 1 + 4 = 5$, che è proprio $\frac ca$.
- $x^2 - 2ix - 2$: $\Delta = (-2i)^2 - 4 \cdot (-2) = -4 + 8 = 4$, con radici quadrate 2 e $-2$. Quindi $x_\pm = \frac{2i \pm 2}2$: le radici sono $1 + i$ e $-1 + i$. Queste due radici **non** sono coniugate, perché i numeri del polinomio non sono tutti reali (vedi la prossima sezione).

::: prova Trova le radici complesse di $x^2 + 9$.
$\Delta = 0 - 36 = -36$, con radici quadrate $6i$ e $-6i$. Le radici sono $\frac{\pm 6i}2 = \pm 3i$. Controllo: $(3i)^2 + 9 = -9 + 9 = 0$.
:::

> [!RICORDA]
> - La formula del secondo grado vale anche tra i complessi: al posto della radice di $\Delta$ si usano le sue due radici quadrate complesse.
> - Con $\Delta$ reale negativo le radici quadrate sono $i$ per la radice dell'opposto, con il più e con il meno.

## Coefficienti reali: radici a coppie (p. 19)

Nella sezione di prima le radici venivano spesso a coppie. Per esempio quelle di $x^2 + 2x + 5$ sono $-1 + 2i$ e $-1 - 2i$. Una è il coniugato dell'altra: stessa parte reale, parte immaginaria con il segno cambiato. Anche $x^2 + 1$ aveva le radici $i$ e $-i$, coniugate.

Non è un caso. Quando i numeri del polinomio sono tutti reali, le radici complesse vengono sempre a coppie. Le dispense lo scrivono così.

> [!PROP] 4.11
> Sia $p(x)$ un polinomio a coefficienti reali. Se $z$ è una radice complessa di $p(x)$, allora $\bar z$ è anch'essa radice di $p(x)$.

**Come si legge.** Se i numeri del polinomio sono reali e $z$ è una radice, allora anche il coniugato $\bar z$, «zeta segnato», è una radice. Nel disegno del piano complesso le radici sono simmetriche rispetto all'asse orizzontale.

Il motivo, a parole: coniugare non cambia i numeri reali, e il coniugato di una somma o di un prodotto è la somma o il prodotto dei coniugati. Quindi coniugare $p(z) = 0$ dà $p(\bar z) = 0$.

> [!DIM] della Proposizione 4.11
> Dalle dispense, con le regole usate.
> 1. Il polinomio è $p(x) = a_nx^n + \dots + a_1x + a_0$, e per ipotesi i coefficienti $a_n, \dots, a_0$ sono tutti reali.
> 2. Se $z$ è radice, allora $p(z) = a_nz^n + \dots + a_1z + a_0 = 0$.
> 3. Applichiamo il coniugio a entrambi i membri. Il coniugato di una somma è la somma dei coniugati e il coniugato di un prodotto è il prodotto dei coniugati (esercizio 2.5, lezione L02); in particolare il coniugato di $z^k$ è $\bar z^k$. Quindi
>    $$\overline{a_n}\,\bar z^n + \dots + \overline{a_1}\,\bar z + \overline{a_0} = \bar 0 = 0.$$
> 4. Siccome i coefficienti sono reali, il coniugato di ogni $a_i$ è $a_i$ stesso (lezione L02: un numero è reale esattamente quando è uguale al suo coniugato). Quindi
>    $$a_n\bar z^n + \dots + a_1\bar z + a_0 = 0,$$
>    cioè $p(\bar z) = 0$: anche $\bar z$ è radice di $p(x)$. $\square$

> [!ESEMPIO] · $x^3 - 1$ e le radici terze dell'unità
> $x^3 - 1 = (x - 1)(x^2 + x + 1)$ (Esempio 4.4). Il fattore $x^2 + x + 1$ ha $\Delta = 1 - 4 = -3$, con radici quadrate $\pm i\sqrt 3$, quindi le sue radici sono $\frac{-1 \pm i\sqrt 3}2$. Le tre radici di $x^3 - 1$ sono 1 e la coppia coniugata $-\frac 12 \pm \frac{\sqrt 3}2 i$. Sono le tre radici terze dell'unità della lezione L03, e il triangolo che formano è simmetrico rispetto all'asse orizzontale.

::: prova Un polinomio con numeri reali ha la radice $2 - 3i$. Quale altra radice ha di sicuro?
Il coniugato: $2 + 3i$.
:::

> [!TRAPPOLA] Serve che i coefficienti siano reali
> Nell'Esempio 4.10 il polinomio $x^2 + (1 - i)x - i$ ha la radice $i$, ma $-i$ **non** è radice: le radici sono $i$ e $-1$. La Proposizione 4.11 non si applica, perché il coefficiente $1 - i$ non è reale. Allo stesso modo, nel problema 11 dell'appello del 03/06/2026 un polinomio caratteristico a coefficienti complessi aveva la radice $i$ doppia e la radice $-i$ semplice.

> [!OLTRE] · tre conseguenze
> - Le radici **non reali** di un polinomio a coefficienti reali vengono a **coppie**, una e il suo coniugato. Le due hanno anche la stessa molteplicità, anche se la Proposizione 4.11 da sola non lo dice. Quindi sono in numero pari.
> - Un polinomio a coefficienti reali di **grado dispari** ha sempre almeno una radice **reale**: le $n$ radici complesse sono in numero dispari, e quelle non reali in numero pari (Proposizione 1.4.13 del libro di Martelli).
> - Per $z = u + vi$ con $v \neq 0$: $(x - z)(x - \bar z) = x^2 - 2ux + (u^2 + v^2)$, un polinomio **reale** di secondo grado con $\Delta = -4v^2 < 0$. Per questo ogni polinomio reale si scompone in fattori reali di primo grado e di secondo grado con $\Delta < 0$ (Corollario 1.4.12). Per esempio $x^3 - 1 = (x - 1)(x^2 + x + 1)$ e $x^4 - 1 = (x - 1)(x + 1)(x^2 + 1)$.

> [!OLTRE] · dove trovarlo nel libro
> Nel libro di Martelli questa lezione corrisponde al §1.3 «Polinomi» (pp. 21–25). Lì ci sono la definizione, la divisione con resto e le radici, con la Proposizione 1.3.2 (la 4.2 delle dispense). Seguono la molteplicità, il Teorema 1.3.7 (il 4.6) e la formula del secondo grado con la dimostrazione. Poi ci sono le parti 1.4.7 «Teorema fondamentale dell'algebra» e 1.4.8 «Polinomi a coefficienti reali» del §1.4 (pp. 31–33). Gli esempi sono gli stessi delle dispense (in Martelli la prima divisione tra interi è $26 = 2 \cdot 11 + 4$). L'Esercizio 1.12 (p. 37) collega la molteplicità alla derivata, che vedrai in Analisi.

> [!RICORDA]
> - Se i numeri del polinomio sono reali, le radici non reali vengono a coppie: una e il suo coniugato.
> - Se i numeri non sono tutti reali, la regola non vale.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $p(x)$ | «pi di ics» | un polinomio nella lettera $x$ | $p(x) = x^2 - 3$ |
| $p(a)$ | «pi di a» | il numero che esce mettendo $a$ al posto di $x$ | $p(2) = 1$ |
| $a_n, \dots, a_1, a_0$ | «a enne, …, a uno, a zero» | i coefficienti; il numerino dice la potenza | in $x^3 - 2x + 5$, $a_1 = -2$ |
| $\deg p$ | «grado di pi» | il grado del polinomio | $\deg(x^3 + 1) = 3$ |
| $\R[x]$, $\C[x]$ | «erre di ics», «ci di ics» | polinomi con numeri reali, complessi | $ix + 1 \in \C[x]$ |
| $\R_k[x]$ | «erre kappa di ics» | polinomi reali di grado al massimo $k$ | $5x \in \R_2[x]$ |
| $\le$, $\ge$ | «minore o uguale», «maggiore o uguale» | confronti che ammettono l'uguale | $2 \le 2$ |
| $d(x) \mid p(x)$ | «di divide pi» | la divisione viene esatta | $(x + 1) \mid (x^3 + 1)$ |
| $q(x)$, $r(x)$ | «quoziente», «resto» | i risultati della divisione | $x^3 + 1 = x(x^2 - 1) + (x + 1)$ |
| $(x - a)^k$ | «ics meno a alla kappa» | il fattore $x - a$ ripetuto $k$ volte | $(x - 1)^3$ |
| $\Delta$ | «delta» | il discriminante $b^2 - 4ac$ | per $x^2 + 1$, $\Delta = -4$ |
| $x_\pm$ | «ics più o meno» | le due radici della formula | $x_\pm = -1 \pm 2i$ |
| $\pm$ | «più o meno» | due numeri, uno con il più e uno con il meno | $\pm 2i$ |
| $\bar z$ | «zeta segnato» | il coniugato | $\overline{1 + 2i} = 1 - 2i$ |

## Verso l'esame

**La prova in due righe.** 10 domande a risposta multipla (5 risposte, una giusta) e 2 problemi da 11 punti, corretti solo con almeno 6 punti nel quiz; 2 ore, niente calcolatrice, solo 4 facciate di appunti scritti a mano. Appelli 2026/27 di Algebra lineare: 22/01/2027 e 05/02/2027 alle 14:00. Regole complete e fonti nella lezione L01.

**Dove compaiono i polinomi negli appelli dal 2023/24 al 2025/26.**

| Uso | Esempi negli appelli | Lezioni |
|---|---|---|
| «quale di questi numeri è una radice di $p(z)$?» | 10/07/2025 (domanda 1), 03/07/2026 (domanda 7), 07/09/2026 (domanda 1) | questa |
| radici del polinomio caratteristico, spesso di terzo grado, da scomporre trovando una radice e dividendo | 02/09/2025 (domanda 4, con $-t^3 + 8$), problemi su autovalori in quasi tutti gli appelli | L17, L18 |
| un determinante che dipende da un parametro $k$ è un polinomio in $k$: si trova una radice e si divide | 15/01/2026 (problema 11: una radice doppia) | L09, L10 |
| spazi di polinomi: $\{p \in \R_3[x] \mid p(a) = 0\}$ è fatto dai polinomi $(x - a)q(x)$ (Proposizione 4.2) | 24/01/2024 (domanda 1), 10/07/2025 (domanda 2), 03/07/2026 (domanda 1) | L05–L07 |

### Una domanda vera, letta insieme

**Appello del 07/09/2026, domanda 1.** Il testo: «Quale dei seguenti è una radice del polinomio $p(z) = z^4 + 5z^2 + 4$? (a) $z = -3 + i$; (b) $z = 1 - i$; (c) $z = -1$; (d) $z = -2i$; (e) il polinomio non ha radici».

**In pratica chiede:** quale di questi numeri, messo al posto di $z$, fa uscire zero?

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: guardo le potenze.** Ci sono solo $z^4$, $z^2$ e un numero: potenze pari. Allora conviene un trucco: chiamo $t$ il quadrato $z^2$. Siccome $z^4 = (z^2)^2 = t^2$, il polinomio diventa $t^2 + 5t + 4$.
>
> **Passo 2: risolvo il secondo grado.** Cerco due numeri che sommati danno 5 e moltiplicati danno 4: sono 1 e 4. Quindi $t^2 + 5t + 4 = (t + 1)(t + 4)$, con radici $t = -1$ e $t = -4$.
>
> **Passo 3: torno a $z$.** $z^2 = -1$ dà $z = i$ oppure $z = -i$. $z^2 = -4$ dà $z = 2i$ oppure $z = -2i$.
>
> **Passo 4: la risposta.** Tra le risposte c'è $-2i$: è la (d).
>
> **Controllo diretto.** $(-2i)^2 = 4i^2 = -4$, e $(-2i)^4 = (-4)^2 = 16$. Quindi $p(-2i) = 16 + 5 \cdot (-4) + 4 = 16 - 20 + 4 = 0$.
>
> **Perché la (e) è sbagliata.** È la risposta che tenta chi vede che il polinomio, per $z$ reale, è sempre positivo. Ma il teorema fondamentale dice che tra i complessi le radici ci sono sempre: qui sono quattro.

### Altre due domande vere

> [!ESEMPIO] · Appello del 10/07/2025, domanda 1
> Quale dei seguenti è una radice di $p(z) = z^4 + 7z^2 + 12$? (a) $z = -2i$; (b) $z = -2$; (c) il polinomio non ha radici; (d) $z = 3 + 4i$; (e) $z = 4$.
>
> **Soluzione.** Compaiono solo potenze pari: con $w = z^2$ il polinomio diventa $w^2 + 7w + 12 = (w + 3)(w + 4)$, con radici $w = -3$ e $w = -4$. Quindi $z^2 = -3$ oppure $z^2 = -4$, cioè $z = \pm i\sqrt 3$ oppure $z = \pm 2i$. Risposta (a). La (c) è falsa per il teorema fondamentale (le radici sono quattro). La (b) e la (e) sono reali, e per $z$ reale il polinomio vale almeno 12, perché $z^4$ e $z^2$ non sono mai negativi.

> [!ESEMPIO] · Appello del 03/07/2026, domanda 7
> Quale dei seguenti è una radice del polinomio $p(z) = z^3 + 2z^2 + z + 2$? (a) $z = 0$; (b) $z = i$; (c) $z = 1 + i$; (d) $z = 1$; (e) $z^3 + 2z^2 + z + 2 = 0$.
>
> **Soluzione.** Raccolgo a coppie: $z^3 + 2z^2 = z^2(z + 2)$ e $z + 2 = 1 \cdot (z + 2)$. Quindi $p(z) = z^2(z + 2) + (z + 2) = (z^2 + 1)(z + 2)$. Le radici sono $-2$, $i$, $-i$: risposta (b). Senza scomporre basta provare: $p(i) = i^3 + 2i^2 + i + 2 = -i - 2 + i + 2 = 0$, mentre $p(0) = 2$ e $p(1) = 6$. La (e) non è un numero: è l'equazione stessa.

### I metodi

> [!METODO] Trovare le radici di un polinomio di grado 3 o 4 senza calcolatrice
> 1. **Nel quiz, prova le risposte**: con $p(i)$, $p(2i)$, $p(-1)$… si trova la risposta giusta in pochi conti.
> 2. **Solo potenze pari** ($z^4$, $z^2$, numero): chiama $t$ il quadrato $z^2$, risolvi il secondo grado, poi trova le due radici quadrate di ogni $t$. Se $t$ è negativo, sono $i$ per la radice dell'opposto, con il più e con il meno.
> 3. **Raccogli a coppie**: $z^3 + 2z^2 + z + 2 = z^2(z + 2) + 1 \cdot (z + 2)$.
> 4. **Prova le radici intere** tra i divisori del termine noto, poi dividi con Ruffini.
> 5. **Resta un secondo grado**: formula con il $\Delta$. Se i numeri sono reali e $\Delta$ è negativo, le due radici sono coniugate.

**Errori da evitare.**

- Dimenticare gli zeri nella tabella di Ruffini.
- Sbagliare il segno di $a$: per dividere per $x + 2$ si usa $a = -2$.
- Fermare la divisione troppo presto o troppo tardi.
- Confondere il numero di radici diverse con il numero di radici contate con la molteplicità.
- Applicare la Proposizione 4.11 a polinomi con numeri complessi.
- Con il trucco del quadrato, dimenticare che ogni $t$ dà due radici opposte.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: lo schema della divisione in colonna e di Ruffini; «$a$ è radice esattamente quando $(x - a)$ divide $p(x)$, e il resto della divisione per $x - a$ è $p(a)$»; molteplicità e metodo delle divisioni ripetute; il $\Delta$ e la formula del secondo grado con le due radici quadrate complesse; «coefficienti reali: radici non reali a coppie coniugate»; il trucco $t = z^2$ e il raccoglimento a coppie.

## Quiz

```quiz
D: Quale dei seguenti è una radice di $p(z) = z^4 + 10z^2 + 9$?
+ $z = 3i$
- $z = 3$
- $z = -1$
- $z = 1 + i$
- Il polinomio non ha radici.
= Ci sono solo potenze pari, quindi conviene chiamare $t$ il quadrato $z^2$: il polinomio diventa $t^2 + 10t + 9 = (t + 1)(t + 9)$, con radici $t = -1$ e $t = -9$. Tornando a $z$: $z^2 = -1$ dà $\pm i$, e $z^2 = -9$ dà $\pm 3i$. Controllo: $(3i)^2 = -9$ e $(3i)^4 = 81$, quindi $81 - 90 + 9 = 0$. La risposta più insidiosa è «non ha radici»: per $z$ reale il polinomio vale almeno 9, ma tra i complessi il teorema fondamentale garantisce quattro radici. $p(1 + i) = 5 + 20i$, non zero. Simile agli appelli del 07/09/2026 e del 10/07/2025, domanda 1.

D: Quale dei seguenti è una radice di $p(z) = z^3 - 2z^2 + 4z - 8$?
+ $z = -2i$
- $z = -2$
- $z = 2 + 2i$
- $z = 4$
- $z = 1 - i$
= Si raccoglie a coppie: $z^3 - 2z^2 = z^2(z - 2)$ e $4z - 8 = 4(z - 2)$, quindi $p(z) = (z^2 + 4)(z - 2)$. Le radici sono 2 e quelle di $z^2 = -4$, cioè $\pm 2i$. Controllo: $(-2i)^3 = 8i$ e $(-2i)^2 = -4$, quindi $p(-2i) = 8i + 8 - 8i - 8 = 0$. La risposta più insidiosa è $-2$, che sembra l'opposto della radice reale 2; ma $p(-2) = -8 - 8 - 8 - 8 = -32$. Gli altri valori: $p(4) = 40$, $p(2 + 2i) = -16 + 8i$, $p(1 - i) = -6 - 2i$. Simile all'appello del 03/07/2026, domanda 7.

D: Qual è il resto della divisione di $x^4 - 3x^2 + 2x - 1$ per $x + 1$? Scrivi un numero.
N: -5
= Il resto della divisione per $x - a$ è il valore del polinomio in $a$. Qui il divisore è $x + 1$, cioè $x - (-1)$: quindi $a = -1$, e il resto è $p(-1) = 1 - 3 - 2 - 1 = -5$. Con Ruffini sui coefficienti $1, 0, -3, 2, -1$ e $a = -1$ si ottiene in basso $1, -1, -2, 4$ e resto $-5$: stesso risultato. L'errore tipico è usare $a = 1$, che dà $p(1) = -1$.

D: Qual è la molteplicità della radice $1$ nel polinomio $x^4 - x^3 - 3x^2 + 5x - 2$?
- $1$
- $2$
+ $3$
- $4$
- $0$
= La molteplicità si trova dividendo per $x - 1$ finché 1 resta radice. Con Ruffini i quozienti sono $x^3 - 3x + 2$, poi $x^2 + x - 2$, poi $x + 2$; quest'ultimo in 1 vale 3, non zero, quindi ci si ferma. Tre divisioni: il polinomio è $(x - 1)^3(x + 2)$. La risposta 4 viene da chi pensa che una radice abbia sempre molteplicità uguale al grado; la risposta 1 da chi si ferma alla prima divisione. Riconoscere una radice multipla serviva anche nel problema 11 dell'appello del 15/01/2026, dove un determinante con parametro aveva una radice doppia.

D: Quoziente e resto della divisione di $x^3 + 2x^2 - x + 3$ per $x^2 + 1$ sono:
+ $q(x) = x + 2$ e $r(x) = -2x + 1$
- $q(x) = x + 2$ e $r(x) = 1$
- $q(x) = x + 2$ e $r(x) = -2x + 5$
- $q(x) = x$ e $r(x) = 2x^2 - 2x + 3$
- $q(x) = x + 2$ e $r(x) = -2x - 1$
= Primo passo: $x^3$ diviso $x^2$ fa $x$; togliendo $x(x^2 + 1) = x^3 + x$ resta $2x^2 - 2x + 3$. Secondo passo: $2x^2$ diviso $x^2$ fa 2; togliendo $2(x^2 + 1) = 2x^2 + 2$ resta $-2x + 1$, di grado 1, più basso di 2: fine. La risposta più insidiosa è la quarta: $x \cdot (x^2 + 1) + (2x^2 - 2x + 3)$ ridà davvero il dividendo, ma quel «resto» ha grado 2, uguale al divisore, quindi la divisione non è finita. Le altre hanno sbagliato un segno nelle sottrazioni.

D: Un polinomio a coefficienti **reali** di grado $4$ ha le radici $1 + i$ e $2i$. Quali sono le altre due radici?
+ $1 - i$ e $-2i$
- $-1 - i$ e $-2i$
- $-1 + i$ e $2$
- $1 - i$ e $2$
- Non si può dire nulla senza conoscere i coefficienti.
= I numeri del polinomio sono reali, quindi per la Proposizione 4.11 anche i coniugati sono radici: il coniugato di $1 + i$ è $1 - i$, quello di $2i$ è $-2i$. Sono quattro radici diverse, e un polinomio di grado 4 non ne ha altre. La risposta più insidiosa è $-1 - i$ e $-2i$: $-1 - i$ è l'opposto di $1 + i$, non il coniugato (il coniugato cambia segno solo alla parte immaginaria). Il polinomio monico è $(x^2 - 2x + 2)(x^2 + 4) = x^4 - 2x^3 + 6x^2 - 8x + 8$.

D: In quale di questi polinomi il numero $2$ è radice con molteplicità **esattamente** $2$?
+ $(x - 2)^2(x + 2)$
- $(x^2 - 4)(x + 2)$
- $(x - 2)^3$
- $x^2 + 4$
- $x^2(x - 2)$
= La molteplicità di 2 è l'esponente del fattore $x - 2$ quando il polinomio è scomposto. Nella prima risposta è 2. La risposta più insidiosa è $(x^2 - 4)(x + 2)$: scomponendo $x^2 - 4 = (x - 2)(x + 2)$ diventa $(x - 2)(x + 2)^2$, quindi è $-2$ ad essere doppia, mentre 2 è semplice. In $(x - 2)^3$ la molteplicità è 3, in $x^2(x - 2)$ è 1. $x^2 + 4$ in 2 vale 8, quindi 2 non è nemmeno radice.

D: Quale di questi polinomi appartiene a $\R_2[x]$?
+ $(x + 1)^2 - x^2$
- $x^3 - 1$
- $ix + 1$
- $(x - 1)(x^2 + 1)$
- $\frac 1x + x$
= $\R_2[x]$ sono i polinomi con numeri reali e grado al massimo 2. La prima risposta sembra di grado 2, ma svolgendo diventa $2x + 1$, di grado 1: va bene. $x^3 - 1$ e $(x - 1)(x^2 + 1)$ hanno grado 3. $ix + 1$ ha un numero non reale, quindi sta in $\C_1[x]$ ma non in $\R_2[x]$. $\frac 1x + x$ non è nemmeno un polinomio, perché divide per la lettera. Lo spazio $\R_2[x]$ compare in molte domande sui sottospazi, per esempio negli appelli del 08/02/2024 e del 05/02/2026 (domanda 2).

D: Le radici complesse di $z^2 - 2z + 5$ sono:
+ $1 \pm 2i$
- $-1 \pm 2i$
- $1 \pm 4i$
- $2 \pm 4i$
- non ci sono: $\Delta < 0$
= Con la formula: $\Delta = 4 - 20 = -16$, con radici quadrate $\pm 4i$, quindi $z_\pm = \frac{2 \pm 4i}2 = 1 \pm 2i$. La risposta più insidiosa è «non ci sono»: un $\Delta$ negativo vuol dire solo che non ci sono radici **reali**, mentre tra i complessi ci sono sempre. $-1 \pm 2i$ dimentica il segno meno davanti a $b$; $2 \pm 4i$ dimentica di dividere per 2. Simile all'appello del 02/09/2025 (domanda 4), dove due autovalori erano le radici complesse coniugate di $t^2 + 2t + 4$.

D: Il polinomio $x^2 - (1 + i)x + i$ ha la radice $i$. Quale affermazione è vera?
+ L'altra radice è $1$, e $-i$ non è radice.
- Anche $-i$ è radice, per la Proposizione 4.11.
- $i$ è una radice doppia.
- Ha tre radici, contate con molteplicità.
- Non ha altre radici oltre a $i$.
= Il prodotto delle due radici è il termine noto diviso il primo coefficiente, cioè $i$. Una radice è $i$, quindi l'altra è 1; infatti $(x - i)(x - 1) = x^2 - (1 + i)x + i$. La risposta più insidiosa è la seconda: la Proposizione 4.11 vale solo con numeri reali, e qui il coefficiente $1 + i$ non lo è. Infatti in $-i$ il polinomio vale $-2 + 2i$, non zero. Il grado è 2, quindi le radici contate con molteplicità sono esattamente due, non tre e non una. Anche nel problema 11 dell'appello del 03/06/2026 un polinomio a coefficienti complessi aveva $i$ e $-i$ come radici con molteplicità diverse.
```

## Esercizi

> [!NOTA] Gli esercizi di questa lezione
> Le dispense non hanno una sezione di esercizi per la lezione 4: gli esercizi qui sotto sono stati scritti per questi appunti, gli ultimi due sul modello degli appelli.

::: esercizio base Riscaldamento: mettere un numero nella macchina
Con $p(x) = x^2 - 3x + 1$, calcola $p(0)$, $p(2)$ e $p(-1)$.
::: soluzione
1. $p(0) = 0 - 0 + 1 = 1$.
2. $p(2) = 4 - 6 + 1 = -1$.
3. $p(-1) = (-1)^2 - 3 \cdot (-1) + 1 = 1 + 3 + 1 = 5$.

Attenzione al terzo: $-3 \cdot (-1) = +3$.
:::

::: esercizio base Riscaldamento: leggere un polinomio
Nel polinomio $5x^3 - 2x + x^4 - 1$ trova il grado, il termine noto e il coefficiente di $x^2$.
::: soluzione
1. Lo riordino dal grado più alto: $x^4 + 5x^3 + 0x^2 - 2x - 1$.
2. Il grado è 4.
3. Il termine noto è $-1$.
4. Il pezzo con $x^2$ manca: il suo coefficiente è 0.
:::

::: esercizio base Riscaldamento: due radici, due fattori
Controlla che 3 e $-1$ sono radici di $x^2 - 2x - 3$ e scrivi il polinomio come prodotto di due fattori.
::: soluzione
1. Con 3: $9 - 6 - 3 = 0$. È radice.
2. Con $-1$: $1 + 2 - 3 = 0$. È radice.
3. Per la Proposizione 4.2 i fattori sono $x - 3$ e $x - (-1) = x + 1$: quindi $x^2 - 2x - 3 = (x - 3)(x + 1)$.

Controllo: $(x - 3)(x + 1) = x^2 + x - 3x - 3 = x^2 - 2x - 3$.
:::

::: esercizio base Riscaldamento: un delta negativo
Trova le radici complesse di $x^2 + 4x + 5$.
::: soluzione
1. $a = 1$, $b = 4$, $c = 5$. $\Delta = 16 - 20 = -4$.
2. Le radici quadrate di $-4$ sono $2i$ e $-2i$.
3. $x_\pm = \frac{-4 \pm 2i}2 = -2 \pm i$.

Controllo con la somma: $(-2 + i) + (-2 - i) = -4$, che è $-\frac ba$. Le due radici sono coniugate, come deve essere con numeri reali.
:::

::: esercizio base Forma normale, grado e insiemi di polinomi
Riduci in forma normale e trova il grado: (a) $(x + 1)^2 - (x - 1)^2$; (b) $(x^2 + 1)(x - 1) - x^3$; (c) $3x^2y - 2x^2y + xy - x^2y$. Poi di' se i polinomi (a) e (b) appartengono a $\R_1[x]$, a $\R_2[x]$, a $\C_2[x]$.
::: soluzione
(a) Svolgo i due quadrati: $(x^2 + 2x + 1) - (x^2 - 2x + 1)$. I pezzi $x^2$ e i numeri 1 si cancellano; restano $2x + 2x = 4x$. Grado 1.

(b) Prima il prodotto: $(x^2 + 1)(x - 1) = x^3 - x^2 + x - 1$. Poi tolgo $x^3$: resta $-x^2 + x - 1$. Grado 2.

(c) I tre pezzi con $x^2y$ hanno coefficienti $3 - 2 - 1 = 0$ e spariscono. Resta $xy$, di grado $1 + 1 = 2$.

Appartenenza:
- (a) ha grado 1: sta in $\R_1[x]$, in $\R_2[x]$ e in $\C_2[x]$.
- (b) ha grado 2: sta in $\R_2[x]$ e in $\C_2[x]$, ma non in $\R_1[x]$.

Ogni $\R_k[x]$ sta dentro $\C_k[x]$ e dentro $\R_{k+1}[x]$.
:::

::: esercizio base Una divisione in colonna
Dividi $x^4 - 1$ per $x^2 + x + 1$ e controlla il risultato.
::: soluzione
Scrivo il dividendo con gli zeri: $x^4 + 0x^3 + 0x^2 + 0x - 1$.

1. $x^4$ diviso $x^2$ fa $x^2$. Moltiplico: $x^2(x^2 + x + 1) = x^4 + x^3 + x^2$. Tolgo: resta $-x^3 - x^2 + 0x - 1$.
2. $-x^3$ diviso $x^2$ fa $-x$. Moltiplico: $-x(x^2 + x + 1) = -x^3 - x^2 - x$. Tolgo: resta $x - 1$.
3. $x - 1$ ha grado 1, più basso di 2: mi fermo.

Quoziente $q(x) = x^2 - x$, resto $r(x) = x - 1$.

Controllo: $(x^2 - x)(x^2 + x + 1) = x^4 + x^3 + x^2 - x^3 - x^2 - x = x^4 - x$, e $x^4 - x + (x - 1) = x^4 - 1$.
:::

::: esercizio base Ruffini e scomposizione completa
Verifica che $2$ è radice di $p(x) = x^4 - 5x^2 + 4$, dividi per $x - 2$ con Ruffini e scomponi $p(x)$ in fattori di primo grado.
::: soluzione
1. $p(2) = 16 - 20 + 4 = 0$: 2 è radice.
2. Ruffini sui coefficienti $1, 0, -5, 0, 4$ (attenzione ai due zeri) con $a = 2$:

| | $1$ | $0$ | $-5$ | $0$ | $4$ |
|---|--:|--:|--:|--:|--:|
| $a = 2$ | | $2$ | $4$ | $-2$ | $-4$ |
| | $1$ | $2$ | $-1$ | $-2$ | $0$ |

3. Quoziente $x^3 + 2x^2 - x - 2$, resto 0.
4. Raccolgo a coppie: $x^2(x + 2) - (x + 2) = (x + 2)(x^2 - 1) = (x + 2)(x - 1)(x + 1)$.

Quindi
$$x^4 - 5x^2 + 4 = (x - 2)(x + 2)(x - 1)(x + 1).$$
Si poteva anche partire da $t = x^2$: $t^2 - 5t + 4 = (t - 1)(t - 4)$, e poi $x^2 - 1$ e $x^2 - 4$ si scompongono come differenze di quadrati.
:::

::: esercizio medio Radici e molteplicità
Trova tutte le radici di $p(x) = x^3 - 3x + 2$ con la loro molteplicità.
::: soluzione
1. I candidati interi sono i divisori di 2: $1, -1, 2, -2$.
2. $p(1) = 1 - 3 + 2 = 0$: 1 è radice.
3. Ruffini su $1, 0, -3, 2$ con $a = 1$: in basso $1, 1, -2$ e resto 0. Quoziente $x^2 + x - 2$.
4. Il quoziente in 1 vale $1 + 1 - 2 = 0$: 1 è ancora radice. Ruffini di nuovo: in basso $1, 2$ e resto 0. Quoziente $x + 2$.
5. $x + 2$ in 1 vale 3, non zero: mi fermo.

Quindi $p(x) = (x - 1)^2(x + 2)$. La radice 1 ha molteplicità 2, la radice $-2$ ha molteplicità 1. Contate con molteplicità sono $2 + 1 = 3$ radici, quante il grado. È il polinomio del grafico nella sezione sulla molteplicità.
:::

::: esercizio medio Imporre una radice doppia
Trova i numeri reali $a$ e $b$ per cui $(x - 1)^2$ divide $x^3 + ax + b$.
::: soluzione
$(x - 1)^2$ divide il polinomio esattamente quando 1 è radice con molteplicità almeno 2: il polinomio si divide per $x - 1$ e anche il quoziente ha la radice 1.

1. Ruffini su $1, 0, a, b$ con 1: in basso $1$, $1$, $1 + a$ e resto $1 + a + b$. Il resto deve essere zero: $a + b = -1$.
2. Il quoziente è $x^2 + x + (1 + a)$, e deve fare zero in 1: $1 + 1 + 1 + a = 0$, cioè $a = -3$.
3. Allora $b = -1 - a = -1 + 3 = 2$.

Il polinomio è $x^3 - 3x + 2 = (x - 1)^2(x + 2)$, quello dell'esercizio precedente.
:::

::: esercizio medio Un'equazione di secondo grado con coefficienti complessi
Trova le radici di $z^2 + (2 - i)z - 2i$.
::: soluzione
Qui $a = 1$, $b = 2 - i$, $c = -2i$.
1. $\Delta = (2 - i)^2 - 4(-2i) = (4 - 4i + i^2) + 8i = 3 - 4i + 8i = 3 + 4i$.
2. Le radici quadrate di $3 + 4i$: cerco $w = u + vi$ con $w^2 = u^2 - v^2 + 2uvi = 3 + 4i$, cioè $u^2 - v^2 = 3$ e $uv = 2$. Con $u = 2$ e $v = 1$ funziona: $(2 + i)^2 = 4 + 4i - 1 = 3 + 4i$. Quindi le radici quadrate sono $2 + i$ e $-(2 + i)$.
3. Con il più: $\frac{-(2 - i) + (2 + i)}2 = \frac{-2 + i + 2 + i}2 = \frac{2i}2 = i$.
4. Con il meno: $\frac{-(2 - i) - (2 + i)}2 = \frac{-2 + i - 2 - i}2 = \frac{-4}2 = -2$.

Le radici sono $i$ e $-2$. Controllo: $(z - i)(z + 2) = z^2 + 2z - iz - 2i = z^2 + (2 - i)z - 2i$. Anche qui $-i$ non è radice: i numeri del polinomio non sono reali.
:::

::: esercizio medio Una biquadratica, scomposta in R e in C
Trova le radici di $z^4 + 3z^2 - 4$ e scomponi il polinomio in fattori a coefficienti reali e poi in fattori di primo grado a coefficienti complessi.
::: soluzione
1. Con $t = z^2$: $t^2 + 3t - 4 = (t + 4)(t - 1)$, radici $t = -4$ e $t = 1$.
2. $z^2 = 1$ dà $z = 1$ e $z = -1$. $z^2 = -4$ dà $z = 2i$ e $z = -2i$.

Le scomposizioni:
- Con numeri reali: $z^4 + 3z^2 - 4 = (z^2 - 1)(z^2 + 4) = (z - 1)(z + 1)(z^2 + 4)$. Il fattore $z^2 + 4$ ha $\Delta = -16$, negativo, e tra i reali non si scompone ancora.
- Con numeri complessi: $(z - 1)(z + 1)(z - 2i)(z + 2i)$.

Quattro radici, come il grado; le due non reali sono coniugate, come vuole la Proposizione 4.11.
:::

::: esercizio difficile Tutte le radici, conoscendone una
Sapendo che $i$ è radice di $p(x) = x^4 - 2x^3 + 6x^2 - 2x + 5$, trova tutte le radici.
::: soluzione
1. I numeri del polinomio sono reali, quindi per la Proposizione 4.11 anche $-i$ è radice. Allora $(x - i)(x + i) = x^2 + 1$ divide $p(x)$.
2. Divido per $x^2 + 1$ in colonna.
   - $x^4$ diviso $x^2$ fa $x^2$; tolgo $x^2(x^2 + 1) = x^4 + x^2$: resta $-2x^3 + 5x^2 - 2x + 5$.
   - $-2x^3$ diviso $x^2$ fa $-2x$; tolgo $-2x(x^2 + 1) = -2x^3 - 2x$: resta $5x^2 + 5$.
   - $5x^2$ diviso $x^2$ fa 5; tolgo $5(x^2 + 1)$: resta 0.

   Quoziente $x^2 - 2x + 5$.
3. $x^2 - 2x + 5$: $\Delta = 4 - 20 = -16$, radici $\frac{2 \pm 4i}2 = 1 \pm 2i$.

Le radici sono $i$, $-i$, $1 + 2i$, $1 - 2i$, e $p(x) = (x^2 + 1)(x^2 - 2x + 5)$.

Controllo: $(x^2 + 1)(x^2 - 2x + 5) = x^4 - 2x^3 + 5x^2 + x^2 - 2x + 5 = x^4 - 2x^3 + 6x^2 - 2x + 5$.
:::

::: esercizio difficile Costruire un polinomio dalle radici
Trova il polinomio **monico** a coefficienti reali di grado $3$ che ha le radici $2$ e $1 + i$. È unico?
::: soluzione
1. I numeri devono essere reali, quindi anche il coniugato $1 - i$ è radice.
2. Un polinomio di grado 3 ha esattamente tre radici contate con molteplicità (teorema fondamentale): sono 2, $1 + i$, $1 - i$.
3. «Monico» vuol dire che il numero davanti al grado più alto è 1. Il polinomio è il prodotto dei fattori:
   $$(x - 2)(x - 1 - i)(x - 1 + i).$$
4. I due fattori complessi: $(x - 1 - i)(x - 1 + i) = (x - 1)^2 - i^2 = (x - 1)^2 + 1 = x^2 - 2x + 2$. Qui ho usato il prodotto notevole «somma per differenza», con $x - 1$ al posto della prima lettera.
5. Il prodotto finale: $(x - 2)(x^2 - 2x + 2) = x^3 - 2x^2 + 2x - 2x^2 + 4x - 4 = x^3 - 4x^2 + 6x - 4$.

È unico: le tre radici sono obbligate, e un polinomio monico è il prodotto dei fattori $x$ meno radice.
:::

::: esercizio difficile Un resto senza fare la divisione
Trova il resto della divisione di $p(x) = x^{100} + 1$ per $x^2 - 1$.
::: soluzione
1. Il divisore ha grado 2, quindi il resto ha grado al massimo 1: lo scrivo $r(x) = ax + b$, con $a$ e $b$ da trovare.
2. La divisione dice
   $$x^{100} + 1 = q(x)(x^2 - 1) + ax + b.$$
3. Metto al posto di $x$ i numeri che annullano il divisore, così il pezzo con $q(x)$ sparisce.
   - Con $x = 1$: $1 + 1 = 0 + a + b$, cioè $a + b = 2$.
   - Con $x = -1$: $(-1)^{100} + 1 = 2$, e a destra $-a + b$. Quindi $-a + b = 2$.
4. Sommo le due uguaglianze: $2b = 4$, quindi $b = 2$. Poi $a = 2 - b = 0$.

Il resto è il numero $r(x) = 2$. È la stessa idea della dimostrazione della Proposizione 4.2: si mette un valore che annulla il divisore.
:::

::: esercizio esame Come all'esame: un determinante con parametro
In un problema d'esame il determinante di una matrice che dipende da un parametro reale $k$ vale $-k^3 + 3k + 2$. Per quali valori di $k$ il determinante è diverso da zero? Quale valore di $k$ è radice doppia?
::: soluzione
1. **Cerco una radice** tra i divisori del termine noto 2: $1, -1, 2, -2$. Con $k = 2$: $-8 + 6 + 2 = 0$. Quindi $(k - 2)$ divide il polinomio.
2. **Ruffini** sui coefficienti $-1, 0, 3, 2$ con $a = 2$: abbasso $-1$; $-1 \cdot 2 = -2$ e $0 - 2 = -2$; $-2 \cdot 2 = -4$ e $3 - 4 = -1$; $-1 \cdot 2 = -2$ e $2 - 2 = 0$. Quoziente $-k^2 - 2k - 1 = -(k + 1)^2$.
3. **Scomposizione**: $-k^3 + 3k + 2 = -(k - 2)(k + 1)^2$.
4. **Conclusione**: il determinante fa zero solo per $k = 2$ e $k = -1$, ed è diverso da zero per tutti gli altri valori di $k$. La radice $-1$ è doppia.

Controllo con $k = -1$: $-(-1)^3 + 3 \cdot (-1) + 2 = 1 - 3 + 2 = 0$.

È lo schema del problema 11 dell'appello del 15/01/2026, dove il determinante era un altro polinomio di terzo grado in $k$ con una radice doppia: si trova una radice a occhio, si divide, si scompone il secondo grado.
:::

::: esercizio esame Come all'esame: quale è una radice
Quale dei seguenti è una radice di $p(z) = z^4 - 2z^2 - 8$? (a) $z = i\sqrt 2$; (b) $z = 2i$; (c) $z = \sqrt 2$; (d) $z = 1 + i$; (e) il polinomio non ha radici.
::: soluzione
**Scomponendo.** Con $t = z^2$: $t^2 - 2t - 8 = (t - 4)(t + 2)$. Quindi $z^2 = 4$ oppure $z^2 = -2$: le radici sono $2$, $-2$, $i\sqrt 2$ e $-i\sqrt 2$. Risposta (a).

**Provando le risposte.**
- (a) $(i\sqrt 2)^2 = -2$ e $(i\sqrt 2)^4 = 4$: $4 + 4 - 8 = 0$.
- (b) $(2i)^2 = -4$ e $(2i)^4 = 16$: $16 + 8 - 8 = 16$.
- (c) $(\sqrt 2)^2 = 2$ e $(\sqrt 2)^4 = 4$: $4 - 4 - 8 = -8$.
- (d) $(1 + i)^2 = 2i$ e $(1 + i)^4 = (2i)^2 = -4$: $-4 - 4i - 8 = -12 - 4i$.
- (e) è falsa per il teorema fondamentale.

Anche così la risposta è la (a).
:::

## Domande di ripasso

::: domanda Che cos'è il grado di un polinomio? Perché bisogna prima ridurlo in forma normale?
È l'esponente più alto tra i suoi pezzi, quando il polinomio è in forma normale: ogni parte letterale una volta sola e nessun coefficiente zero. Prima bisogna ridurlo perché dei pezzi possono cancellarsi: $(x + 1)^2 - x^2 = 2x + 1$ ha grado 1.
:::

::: domanda Che cosa sono $\R[x]$, $\C[x]$ e $\R_k[x]$?
I polinomi nella lettera $x$ con numeri reali, con numeri complessi, e con numeri reali e grado al massimo $k$. $\R_2[x]$ contiene anche i numeri da soli e il polinomio zero.
:::

::: domanda Che cosa dice la divisione con resto tra polinomi?
Che dividendo per un polinomio diverso da zero ci sono sempre un quoziente e un resto, e sono di un solo tipo: dividendo uguale quoziente per divisore più resto, con il resto di grado più basso del divisore. È come $44 = 7 \cdot 6 + 2$.
:::

::: domanda Quando un polinomio $d(x)$ divide $p(x)$? Fai un esempio.
Quando la divisione viene esatta, con resto zero: $p(x)$ è $d(x)$ per un altro polinomio. Per esempio $x + 1$ divide $x^3 + 1$, perché $x^3 + 1 = (x^2 - x + 1)(x + 1)$.
:::

::: domanda Che cos'è una radice di un polinomio?
Un numero che, messo al posto di $x$, fa uscire zero: una soluzione dell'equazione $p(x) = 0$ (Definizione 4.1). Può essere reale o complessa.
:::

::: domanda Che cosa dice la Proposizione 4.2 e perché è vera?
Dice che $a$ è radice esattamente quando $x - a$ divide il polinomio. Il motivo: dividendo per $x - a$ il resto è un numero solo, e mettendo $a$ al posto di $x$ si vede che quel resto è proprio $p(a)$. Quindi $p(a)$ è zero esattamente quando il resto è zero.
:::

::: domanda Quanto vale il resto della divisione di $p(x)$ per $x - a$?
Vale $p(a)$. Per esempio il resto di $2x^3 - 3x^2 + 4x - 5$ diviso $x - 2$ è $p(2) = 16 - 12 + 8 - 5 = 7$.
:::

::: domanda Che cos'è la molteplicità di una radice e come si calcola?
È il numero di volte in cui il fattore $x - a$ ci sta nel polinomio (Definizione 4.3). Si calcola dividendo per $x - a$ più volte, finché $a$ non è più radice del quoziente.
:::

::: domanda Quante radici può avere un polinomio di grado $n \ge 1$? E nei complessi?
Al massimo $n$, contate con la molteplicità (Teorema 4.6). Tra i complessi esattamente $n$ (Teorema 4.8, teorema fondamentale dell'algebra).
:::

::: domanda Come si risolve un'equazione di secondo grado nei complessi?
Con la solita formula: meno $b$, più o meno la radice di $\Delta$, tutto diviso $2a$. Al posto della radice di $\Delta$ si usano le sue due radici quadrate complesse (Esempio 4.9). Per esempio le radici di $x^2 + 2x + 5$ sono $-1 \pm 2i$.
:::

::: domanda Che cosa dice la Proposizione 4.11? Perché servono coefficienti reali?
Se i numeri del polinomio sono reali e $z$ è una radice, anche il coniugato di $z$ lo è. Nella dimostrazione si coniuga tutta l'uguaglianza $p(z) = 0$ e si usa che i coefficienti non cambiano coniugandoli: questo vale solo se sono reali. Per esempio $x^2 + (1 - i)x - i$ ha la radice $i$ ma non $-i$.
:::

::: domanda Perché un polinomio reale di grado dispari ha almeno una radice reale?
Perché ha in tutto un numero dispari di radici complesse, e quelle non reali vengono a coppie, quindi sono in numero pari. Almeno una deve restare fuori dalle coppie: è reale.
:::

## Glossario

```glossario
Monomio | Un numero moltiplicato per delle lettere con esponenti interi, come $-2xy$. Il grado è la somma degli esponenti.
Polinomio | Una somma di monomi, come $x^2 - 3$. Funziona come una macchina: metti un numero al posto della lettera ed esce un numero.
Forma normale | La scrittura di un polinomio con ogni parte letterale una volta sola e nessun coefficiente zero, oppure il polinomio 0.
Grado | L'esponente più alto di un polinomio in forma normale. $x^3 - 2x + 5$ ha grado 3.
Termine noto | Il numero da solo, senza lettera: in $x^2 - 3$ è $-3$.
Polinomio monico | Un polinomio in cui il numero davanti alla potenza più alta è 1, come $x^2 + 3x$.
$\R[x]$, $\C[x]$ | I polinomi nella lettera $x$ con numeri reali, oppure complessi.
$\R_k[x]$ | I polinomi reali di grado al massimo $k$, compresi i numeri da soli e il polinomio zero.
Divisione con resto | Dividendo uguale quoziente per divisore più resto, con il resto di grado più basso del divisore.
Divisibilità | Un polinomio ne divide un altro quando la divisione viene esatta, con resto zero. Si scrive con la barretta $\mid$.
Regola di Ruffini | Una tabella con i soli coefficienti per dividere per $x - a$. L'ultimo numero è il resto, uguale a $p(a)$.
Radice | Un numero che, messo al posto di $x$, fa uscire zero (Definizione 4.1).
Molteplicità | Quante volte il fattore $x - a$ ci sta nel polinomio (Definizione 4.3). Una radice può essere semplice, doppia, tripla.
Discriminante | Il numero $\Delta = b^2 - 4ac$ di un polinomio di secondo grado. Tra i reali decide quante radici ci sono.
Teorema fondamentale dell'algebra | Tra i numeri complessi un polinomio di grado $n$ ha esattamente $n$ radici, contate con la molteplicità (Teorema 4.8).
Radici coniugate | Se i numeri del polinomio sono reali e $z$ è radice, anche il coniugato di $z$ lo è (Proposizione 4.11).
Equazione biquadratica | Un'equazione con solo potenze pari, come $z^4 + 5z^2 + 4 = 0$. Si risolve chiamando $t$ il quadrato $z^2$.
```

## Checklist

```checklist
- So ridurre un polinomio in forma normale, leggerne il grado e dire se sta in $\R_k[x]$ o in $\C_k[x]$.
- So fare la divisione in colonna tra polinomi, con gli zeri al posto giusto, e controllarla.
- So usare la regola di Ruffini, anche per dividere per $x + a$.
- So spiegare la Proposizione 4.2 e so che il resto della divisione per $x - a$ è $p(a)$.
- So scomporre un polinomio trovando una radice tra i divisori del termine noto e dividendo.
- So calcolare la molteplicità di una radice con divisioni ripetute.
- So dire la differenza tra «al massimo $n$ radici» ed «esattamente $n$ radici» e quando vale ciascuna.
- So risolvere un'equazione di secondo grado nei complessi, anche con $\Delta$ complesso.
- So usare la Proposizione 4.11 e so che vale solo con numeri reali.
- So rispondere alle domande «quale è una radice» provando le risposte o con il trucco $t = z^2$.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 4 «Polinomi», pp. 15–19: le sezioni 4.A–4.E sono seguite in ordine, con la pagina accanto a ogni titolo; le Definizioni 4.1 e 4.3, le Proposizioni 4.2 e 4.11, i Teoremi 4.6 e 4.8 e gli Esempi 4.4, 4.5, 4.7, 4.9 e 4.10 mantengono la loro numerazione. Le dispense non hanno esercizi per questa lezione.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §1.3 (pp. 21–25, con la Proposizione 1.3.8 sulla formula del secondo grado) e §1.4.7–1.4.8 (pp. 31–33: Teorema 1.4.7, Corollari 1.4.8, 1.4.10 e 1.4.12, Proposizione 1.4.13).
- **Appelli d'esame** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): domanda 1 del 07/09/2026, domanda 1 del 10/07/2025 e domanda 7 del 03/07/2026, riportate con soluzioni scritte per questi appunti; la tabella degli altri usi dei polinomi negli appelli ne indica solo il tipo. Regole d'esame 2025/26 e date 2026/27 come nella lezione L01.
- Le parti **«Oltre le dispense»** (la regola di Ruffini, il grado dei prodotti, le radici razionali, il grafico e la molteplicità, la dimostrazione della formula del secondo grado, le conseguenze della Proposizione 4.11, tutti gli esercizi) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
