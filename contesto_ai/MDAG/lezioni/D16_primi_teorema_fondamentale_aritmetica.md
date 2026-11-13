---
corso: MDAG
modulo: MD
lezione: D16
titolo: Numeri primi e teorema fondamentale dell'aritmetica
data: 2026-11-13
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D16
descrizione: >-
  Appunti della lezione D16 di Matematica Discreta (MDAG, parte 1, canali A, B e C): irriducibili e primi sono la
  stessa cosa, il teorema fondamentale dell'aritmetica con esistenza e unicità della fattorizzazione, come si
  fattorizza un numero, i primi sono infiniti, massimo comun divisore dalle fattorizzazioni, con il problema d'esame
  del 01/07/2026.
lede: >-
  Ogni intero si scompone in un prodotto di numeri primi, e in un modo solo. È il risultato su cui si appoggia tutta
  l'aritmetica del corso. Per dimostrarlo serve l'identità di Bézout della lezione scorsa, e alla fine si scopre con
  un ragionamento di poche righe che i numeri primi non finiscono mai.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 4, pp. 76–80
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 4 «I numeri interi», sezione «Il teorema
  fondamentale dell'aritmetica», pp. 76–80 (teoremi 4.13, 4.14 e 4.15 con le dimostrazioni, nota 4.16); diario delle
  lezioni del canale B 2025/26, lezione 16; appello di Matematica Discreta del 01/07/2026
appunti_html: appunti/MDAG/D16_primi_teorema_fondamentale_aritmetica.html
genera_html: true
---

## In breve

- Per gli interi **irriducibile** e **primo** sono la stessa cosa (teorema 4.13). La dimostrazione usa l'identità di Bézout.
- La proprietà che serve nei conti: se un primo divide un prodotto, divide almeno uno dei fattori. Per i numeri non primi è falsa: 6 divide $4 \cdot 9$, ma non divide né 4 né 9.
- **Teorema fondamentale dell'aritmetica**: ogni intero diverso da 0, 1 e −1 è, a parte il segno, un prodotto di primi positivi, e la fattorizzazione è **unica**.
- L'esistenza si dimostra per induzione forte: un numero o è primo, o si spezza in due numeri più piccoli.
- Per fattorizzare si provano i primi uno dopo l'altro; per sapere se un numero è primo basta provare i primi fino alla sua radice quadrata.
- I **primi sono infiniti**: preso un elenco finito di primi, il loro prodotto più 1 ha un fattore primo che nell'elenco non c'è.
- Il numero 1 non è primo per convenzione: altrimenti la fattorizzazione non sarebbe unica.
- Il massimo comun divisore si legge dalle fattorizzazioni: i primi comuni, con l'esponente più piccolo.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di venerdì 13/11/2026, dalle 9 alle 11, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la sedicesima lezione era «Equivalenza primo/irriducibile. Il teorema fondamentale dell'aritmetica. Esistenza di infiniti primi». Nel libro sono le pp. 76–80, la fine del capitolo 4. Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> Servono le definizioni di irriducibile e primo della [D14](D14_interi_divisibilita_divisione_euclidea.html) e l'identità di Bézout della [D15](D15_algoritmo_euclide_bezout.html). L'induzione forte usata qui è quella della [lezione 19 di Fondamenti](../FDA/19_induzione_forte.html). La lezione successiva del diario sono le congruenze modulo $N$ (capitolo 6 del libro).
>
> **Che cosa ho aggiunto.** La sezione su come si fattorizza un numero non è nel libro, che dice solo che il problema è difficile per numeri grandi: l'ho messa perché serve per fare gli esercizi. Anche il minimo comune multiplo dalle fattorizzazioni è un'aggiunta mia.

## Irriducibili e primi coincidono (teorema 4.13)

Nella [D14](D14_interi_divisibilita_divisione_euclidea.html) c'erano due definizioni che sembravano dire la stessa cosa. Riguardano un intero $n$ diverso da 0, 1 e −1.

- $n$ è **irriducibile** se non si spezza: quando $n = ab$, uno dei due fattori è 1 o −1. I suoi soli divisori sono 1, −1, $n$ e $-n$.
- $n$ è **primo** se, ogni volta che divide un prodotto $ab$, divide $a$ oppure divide $b$.

La prima parla di come $n$ si scompone. La seconda parla di come $n$ si comporta quando divide. Un esempio che le distingue: il 6.

- 6 non è irriducibile: $6 = 2 \cdot 3$.
- 6 non è primo: divide $4 \cdot 9 = 36$, ma non divide 4 e non divide 9. I suoi due «pezzi», 2 e 3, sono finiti uno in un fattore e uno nell'altro.

Con il 7 questo non può succedere: 7 non ha pezzi da distribuire. Se 7 divide un prodotto, deve stare tutto in uno dei fattori.

> [!TEOREMA] Teorema 4.13
> Sia $n$ un numero intero, diverso da 0, 1 e −1. Allora $n$ è irriducibile se e soltanto se $n$ è primo.

**Come si legge.** Sugli interi le due definizioni individuano gli stessi numeri: 2, 3, 5, 7, 11… e i loro opposti. Da qui in poi uso «primo» per tutti e due i significati, e si usa la proprietà che serve in quel momento: «non si spezza» per fattorizzare, «se divide un prodotto divide un fattore» nelle dimostrazioni.

> [!DIM]- Perché vale: è qui che serve Bézout
> **Da irriducibile a primo.** Suppongo $n$ irriducibile, e che $n$ divida $ab$ ma non divida $a$. Devo mostrare che divide $b$. Scrivo $ab = nk$.
>
> I divisori di $n$ sono solo 1, −1, $n$, $-n$, e $n$ non divide $a$: l'unico divisore comune positivo di $a$ e $n$ è 1, cioè $\mathrm{MCD}(a, n) = 1$.
>
> Per l'identità di Bézout esistono interi $A$ e $B$ con $1 = Aa + Bn$. Moltiplico per $b$: $b = Aab + Bbn = Ank + Bbn = n(Ak + Bb)$. Quindi $n$ divide $b$.
>
> **Da primo a irriducibile.** Suppongo $n$ primo e $n = ab$. Allora $n$ divide $ab$, quindi divide $a$ o $b$: diciamo $a = nk$. Sostituendo, $n = nkb$, e cancellando $n$ resta $1 = kb$. Un prodotto di interi vale 1 solo come $1 \cdot 1$ o $(-1)(-1)$: quindi $b$ è 1 o −1, e $n$ è irriducibile.

La proprietà «primo» si estende a prodotti con più fattori: se un primo divide $a_1 a_2 \cdots a_k$, divide almeno uno degli $a_i$. Basta applicarla più volte.

> [!NOTA] Perché due nomi, allora
> Il libro lo spiega nella nota 4.16: in altri insiemi di numeri, diversi dagli interi, le due nozioni **non** coincidono. Per questo corso non serve altro: sugli interi sono la stessa cosa.

::: prova Il 10 divide $4 \cdot 15 = 60$. Divide 4 o 15? Che cosa se ne conclude?
Non divide né 4 né 15. Quindi 10 non è primo, e infatti si spezza: $10 = 2 \cdot 5$.
:::

> [!RICORDA]
> - Sugli interi: irriducibile = primo.
> - Se un primo divide un prodotto, divide almeno uno dei fattori. Per i non primi è falso.

## Ogni intero è un prodotto di primi (teorema 4.14)

Un numero che non è primo si spezza in due fattori più piccoli. Se uno dei due non è primo, si spezza anche lui. Andando avanti si arriva a soli primi, perché i fattori diventano sempre più piccoli.

```grafico
titolo: Un albero di fattori per 360. Ogni numero non primo si spezza in due più piccoli; i rami finiscono quando si arriva a un primo (in verde). Le foglie sono 2, 3, 2, 3, 2, 5: quindi 360 = 2³ · 3² · 5. Spezzando in un altro modo, per esempio 360 = 8 · 45, le foglie sarebbero le stesse
x: 0 12.4
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
testo: 6.2 4.7 | blu | "360"
segmento: 5.9 4.4 3.9 3.6 | grigio
segmento: 6.5 4.4 8.7 3.6 | grigio
testo: 3.7 3.3 | blu | "36"
testo: 8.9 3.3 | blu | "10"
segmento: 3.5 3.0 2.4 2.3 | grigio
segmento: 3.9 3.0 5.0 2.3 | grigio
testo: 2.2 2.0 | blu | "6"
testo: 5.2 2.0 | blu | "6"
segmento: 8.7 3.0 8.0 2.3 | grigio
segmento: 9.1 3.0 9.8 2.3 | grigio
testo: 7.9 2.0 | verde | "2"
testo: 9.9 2.0 | verde | "5"
segmento: 2.0 1.7 1.5 1.0 | grigio
segmento: 2.4 1.7 2.9 1.0 | grigio
testo: 1.4 0.7 | verde | "2"
testo: 3.0 0.7 | verde | "3"
segmento: 5.0 1.7 4.5 1.0 | grigio
segmento: 5.4 1.7 5.9 1.0 | grigio
testo: 4.4 0.7 | verde | "2"
testo: 6.0 0.7 | verde | "3"
```

Il teorema dice due cose: che una scomposizione in primi **c'è** sempre, e che è **una sola**. La seconda è quella che va dimostrata con più cura: l'albero di 360 si può disegnare in molti modi, ma le foglie sono sempre tre 2, due 3 e un 5.

> [!TEOREMA] Teorema 4.14 (teorema fondamentale dell'aritmetica)
> Sia $n$ un numero intero, diverso da 0, 1 e −1. Allora esiste un'unica fattorizzazione
> $$n = \pm\, p_1 p_2 \cdots p_s,$$
> dove i $p_i$ sono numeri primi positivi.

**Come si legge.** Il segno davanti è quello di $n$. I $p_i$ possono ripetersi, e di solito i primi uguali si raccolgono in potenze: $360 = 2^3 \cdot 3^2 \cdot 5$ e $-84 = -2^2 \cdot 3 \cdot 7$. «Unica» vuol dire a meno dell'ordine dei fattori: $2 \cdot 3 \cdot 5$ e $5 \cdot 2 \cdot 3$ contano come la stessa. Un primo è la fattorizzazione di sé stesso, con $s = 1$.

**L'esistenza, per induzione forte.** Basta considerare $n \ge 2$: per i negativi si mette il segno meno davanti.

1. **Passo base.** $n = 2$ è primo: è già fattorizzato.
2. **Passo induttivo.** Suppongo che tutti gli interi da 2 a $n - 1$ abbiano una fattorizzazione. Se $n$ è primo, è fatto. Se non lo è, $n = ab$ con $a$ e $b$ tutti e due tra 2 e $n - 1$. Per ipotesi $a$ e $b$ si fattorizzano, e mettendo insieme le due fattorizzazioni si ottiene quella di $n$.

Serve la forma **forte** dell'induzione perché i due fattori $a$ e $b$ sono più piccoli di $n$, ma non si sa di quanto: non sono il caso «subito prima».

> [!DIM]- L'unicità: è qui che serve «primo»
> Suppongo due fattorizzazioni dello stesso numero: $p_1 p_2 \cdots p_s = q_1 q_2 \cdots q_t$, con $s \le t$.
>
> Il primo $p_1$ divide il prodotto di destra. Per il teorema 4.13 divide uno dei fattori $q_i$. Ma $q_i$ è irriducibile, e i suoi soli divisori positivi sono 1 e $q_i$: quindi $p_1 = q_i$. Riordinando, $p_1 = q_1$.
>
> Cancello $p_1$ dai due lati: $p_2 \cdots p_s = q_2 \cdots q_t$. Ripeto con $p_2$, poi con $p_3$, e così via.
>
> Dopo $s$ passaggi a sinistra resta 1: $1 = q_{s+1} \cdots q_t$. Un prodotto di primi non può valere 1, quindi a destra non resta niente: $s = t$, e i fattori erano gli stessi.

> [!TRAPPOLA] Il numero 1 non è primo
> Non è una dimenticanza: è una scelta, spiegata nella nota 4.16. Se 1 fosse primo, $6 = 2 \cdot 3 = 1 \cdot 2 \cdot 3 = 1 \cdot 1 \cdot 2 \cdot 3$ sarebbero fattorizzazioni diverse, e l'unicità cadrebbe. Lo stesso vale per −1.

::: prova Fattorizza 84 e 180.
$84 = 2^2 \cdot 3 \cdot 7$ e $180 = 2^2 \cdot 3^2 \cdot 5$.
:::

> [!RICORDA]
> - Ogni intero diverso da 0, 1, −1 è, a parte il segno, un prodotto di primi positivi.
> - La fattorizzazione è unica, a meno dell'ordine.
> - 1 non è primo, proprio per non perdere l'unicità.

## Come si fattorizza un numero

Il teorema garantisce che la fattorizzazione esiste, ma non dice come trovarla. Per i numeri degli esercizi basta provare i primi in ordine: 2, 3, 5, 7, 11…

> [!METODO] Fattorizzare provando i primi
> 1. Prova a dividere per 2. Finché la divisione è esatta, segna un 2 e continua con il quoziente.
> 2. Passa al primo successivo e fai lo stesso.
> 3. Fermati quando il primo che stai provando, elevato al quadrato, supera il numero che resta: quello che resta, se non è 1, è primo.

Con 360: $360 = 2 \cdot 180 = 2 \cdot 2 \cdot 90 = 2 \cdot 2 \cdot 2 \cdot 45$. Il 45 non è pari; per 3: $45 = 3 \cdot 15 = 3 \cdot 3 \cdot 5$. Resta 5, che è primo. Quindi $360 = 2^3 \cdot 3^2 \cdot 5$.

**Perché ci si può fermare alla radice.** Se un numero $m$ non è primo, $m = ab$ con $a \le b$. Allora $a \cdot a \le a \cdot b = m$: il fattore più piccolo, elevato al quadrato, non supera $m$. Quindi un numero che non ha divisori primi fino alla sua radice quadrata è primo.

> [!ESEMPIO] · 97 è primo? E 91?
> **97.** La radice quadrata è meno di 10, perché $10^2 = 100$. Provo i primi fino a 7. Non è pari; la somma delle cifre è 16, quindi non è multiplo di 3; non finisce per 0 o 5; $97 = 13 \cdot 7 + 6$. Nessuno lo divide: **97 è primo**.
>
> **91.** Stessi primi da provare. Non è multiplo di 2, 3, 5; ma $91 = 7 \cdot 13$. **Non è primo.**

I criteri che si usano più spesso sono tre. Un numero è multiplo di 2 se finisce con una cifra pari, e di 5 se finisce per 0 o 5. È multiplo di 3 se la somma delle sue cifre è un multiplo di 3.

> [!OLTRE]- Con i numeri grandi
> Il libro avverte che per numeri molto grandi non si conoscono metodi rapidi per fattorizzare. Decidere se un numero è primo si può fare in un tempo ragionevole (test AKS, 2002); trovarne i fattori no. Su questa difficoltà si basano i sistemi crittografici usati in rete, in cui la chiave è il prodotto di due primi di centinaia di cifre: se ne parlerà alla fine del corso, con l'algoritmo RSA. All'esame non è richiesto.

::: prova 143 è primo?
La radice è meno di 12, perché $12^2 = 144$. Provo 2, 3, 5, 7, 11: i primi quattro no, ma $143 = 11 \cdot 13$. Non è primo.
:::

> [!RICORDA]
> - Si provano i primi in ordine, dividendo finché si può.
> - Per decidere se un numero è primo bastano i primi fino alla sua radice quadrata.

## I primi sono infiniti (teorema 4.15)

L'elenco dei primi comincia con 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41. Andando avanti si diradano, e ci si può chiedere se a un certo punto finiscano. Non finiscono: lo sapeva già Euclide.

L'idea è una costruzione. Prendo alcuni primi, per esempio 2, 3 e 5. Li moltiplico e aggiungo 1: $2 \cdot 3 \cdot 5 + 1 = 31$. Questo numero diviso per 2, per 3 o per 5 dà sempre resto 1: nessuno dei tre lo divide. Ma un fattore primo ce l'ha, per il teorema fondamentale. Quel fattore è un primo **nuovo**, che non era nell'elenco.

> [!TEOREMA] Teorema 4.15
> Esistono infiniti numeri primi.

**Come si legge.** Nessun elenco finito di primi li contiene tutti: per qualsiasi elenco se ne può sempre trovare uno che manca.

> [!ESEMPIO] · La dimostrazione, passo per passo
> **Parto da un elenco finito** di primi positivi qualsiasi: $p_1, p_2, \dots, p_r$.
>
> **Costruisco** $n = p_1 p_2 \cdots p_r + 1$. È maggiore di 1.
>
> **$n$ ha un fattore primo** $p$, per il teorema 4.14.
>
> **$p$ non è nell'elenco.** Se fosse uno dei $p_i$, dividerebbe il prodotto $p_1 \cdots p_r$ e dividerebbe $n$. Allora dividerebbe la differenza, che è 1 (proposizione 4.2). Ma nessun primo divide 1.
>
> **Conclusione.** Ogni elenco finito di primi ne lascia fuori almeno uno. Quindi i primi sono infiniti.

> [!TRAPPOLA] Il numero costruito non è per forza primo
> La dimostrazione dice che $n$ ha un fattore primo nuovo, non che $n$ è primo. Con i primi fino a 13: $2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509$. Non è primo, ma 59 e 509 non sono nell'elenco. E l'elenco di partenza può essere qualsiasi: con 3 e 5 viene $16 = 2^4$, e il primo nuovo è 2.

> [!OLTRE]- Quanti sono i primi fino a un certo numero
> Il libro cita un risultato più preciso, il teorema dei numeri primi: i primi tra 1 e $n$ sono circa $\frac{n}{\log n}$, con il logaritmo naturale, e la stima migliora al crescere di $n$. Fino a 100 i primi sono 25; la formula dà circa 22. La dimostrazione è molto oltre il corso, e all'esame non è richiesta.

::: prova Applica la costruzione di Euclide all'elenco 2, 3, 5, 7. Che numero viene? È primo?
$2 \cdot 3 \cdot 5 \cdot 7 + 1 = 211$. È primo: la sua radice è meno di 15, e nessuno tra 2, 3, 5, 7, 11, 13 lo divide.
:::

> [!RICORDA]
> - Prodotto dei primi dell'elenco, più 1: un numero che nessun primo dell'elenco divide.
> - Il suo fattore primo è nuovo. Il numero stesso può non essere primo.

## Il MCD dalle fattorizzazioni (nota 4.16)

Con le fattorizzazioni in mano i divisori di un numero si vedono: sono i prodotti fatti con i suoi primi, presi al massimo quante volte compaiono. Un divisore comune di due numeri usa solo i primi che stanno in tutte e due le fattorizzazioni.

Per 84 e 360: $84 = 2^2 \cdot 3 \cdot 7$ e $360 = 2^3 \cdot 3^2 \cdot 5$. In comune ci sono due 2 e un 3. Quindi $\mathrm{MCD}(84, 360) = 2^2 \cdot 3 = 12$.

```grafico
titolo: I fattori primi di 84 (cerchio blu) e di 360 (cerchio ambra), ognuno scritto tante volte quante compare. Nella parte comune ci sono 2, 2 e 3: il massimo comun divisore è 2 · 2 · 3 = 12. Tutti i fattori insieme, contati una volta, danno il minimo comune multiplo: 7 · 12 · 30 = 2520
x: 0 12.4
y: 0 5.0
assi: no
griglia: no
cerchio: 4.7 2.4 2.2 | blu
cerchio: 7.7 2.4 2.2 | ambra
testo: 3.6 4.8 | blu | "84"
testo: 8.8 4.8 | ambra | "360"
testo: 3.5 2.4 | blu | "7"
testo: 5.85 3.0 | verde | "2"
testo: 6.55 3.0 | verde | "2"
testo: 6.2 1.9 | verde | "3"
testo: 8.55 3.0 | ambra | "2"
testo: 9.25 3.0 | ambra | "3"
testo: 8.9 1.9 | ambra | "5"
```

La regola: **il massimo comun divisore è il prodotto dei primi comuni, ciascuno con l'esponente più piccolo dei due**.

L'esempio del libro: $32775 = 3 \cdot 5^2 \cdot 19 \cdot 23$ e $6120 = 2^3 \cdot 3^2 \cdot 5 \cdot 17$. I primi comuni sono 3 e 5, con esponente più piccolo 1 per tutti e due: $\mathrm{MCD}(32775, 6120) = 3 \cdot 5 = 15$.

Per il **minimo comune multiplo** si fa il contrario: tutti i primi che compaiono, ciascuno con l'esponente più grande. Per 84 e 360: $2^3 \cdot 3^2 \cdot 5 \cdot 7 = 2520$.

| Metodo | Quando conviene |
|---|---|
| fattorizzazioni | numeri piccoli, che si fattorizzano a mente |
| algoritmo di Euclide | numeri grandi, o quando serve l'identità di Bézout |

Il libro lo scrive nella stessa nota: fattorizzare numeri grandi è difficile, mentre l'algoritmo di Euclide resta veloce. Per questo i calcolatori usano Euclide.

::: prova Calcola $\mathrm{MCD}(180, 84)$ dalle fattorizzazioni.
$180 = 2^2 \cdot 3^2 \cdot 5$ e $84 = 2^2 \cdot 3 \cdot 7$. Primi comuni: 2 con esponente 2, 3 con esponente 1. Il massimo comun divisore è 12.
:::

> [!RICORDA]
> - Massimo comun divisore: primi comuni, esponente più piccolo.
> - Minimo comune multiplo: tutti i primi, esponente più grande.
> - Numeri grandi: Euclide, non le fattorizzazioni.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $n \mid ab$ | «n divide a per b» | $ab$ è un multiplo di $n$ | $6 \mid 4 \cdot 9$ |
| $p$, $p_i$, $q_i$ | «pi», «pi con i» | numeri primi positivi | 2, 3, 5, 7 |
| $n = \pm\, p_1 p_2 \cdots p_s$ | «n uguale più o meno il prodotto dei pi» | fattorizzazione in primi | $-84 = -2 \cdot 2 \cdot 3 \cdot 7$ |
| $2^3 \cdot 3^2 \cdot 5$ | «due alla terza per tre alla seconda per cinque» | fattorizzazione con i primi uguali raccolti | 360 |
| $p_1 \cdots p_r + 1$ | «il prodotto più uno» | il numero della dimostrazione di Euclide | $2 \cdot 3 \cdot 5 + 1 = 31$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Le regole del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **Le fattorizzazioni** sono uno strumento di quasi tutti gli esercizi che seguono: funzione di Eulero, numero di soluzioni di una congruenza, generatori di un gruppo. Vanno fatte in fretta e senza errori.
2. **L'unicità della fattorizzazione** dentro un problema di conteggio: appello del 01/07/2026, problema 1.
3. **«Coprimo con»** si traduce con i primi: un numero è coprimo con 1000 quando non è multiplo né di 2 né di 5 (stesso problema).
4. Le **dimostrazioni** dei tre teoremi negli appelli 2021–2026 non sono state chieste; possono servire all'orale, se c'è.

### Una domanda vera, letta insieme

**Appello del 01/07/2026, problema 1, versione A, punto c.** Il testo: «Sia $P$ l'insieme dei numeri primi minori o uguali a 100. Sapendo che $\lvert P \rvert = 25$, quanti sono i numeri naturali maggiori di 1 la cui fattorizzazione è il prodotto di primi distinti appartenenti a $P$? Quanti di essi sono il prodotto di esattamente quattro primi distinti?»

**In pratica chiede:** quanti numeri si costruiscono scegliendo alcuni dei 25 primi e moltiplicandoli, ognuno al massimo una volta.

> [!ESEMPIO] · la soluzione, passo per passo
> **Un numero, un insieme di primi.** Per l'unicità della fattorizzazione, due scelte diverse di primi danno due numeri diversi. Quindi contare i numeri è contare i sottoinsiemi di $P$.
>
> **Il numero deve essere maggiore di 1**, quindi serve almeno un primo: il sottoinsieme vuoto si scarta.
>
> **Prima risposta.** I sottoinsiemi di un insieme con 25 elementi sono $2^{25}$ ([D02](D02_complementare_induzione_partizioni.html)): quelli non vuoti sono $2^{25} - 1$.
>
> **Seconda risposta.** Esattamente quattro primi: i sottoinsiemi con 4 elementi, $\binom{25}{4} = 12650$ ([D08](D08_combinazioni.html)).
>
> Sono le risposte della soluzione ufficiale. Il passaggio che dà i punti è il primo: senza l'unicità, due prodotti diversi potrebbero dare lo stesso numero.

### Errori da evitare

- Contare 1 tra i primi.
- Fermarsi a una scomposizione con fattori non primi: $360 = 4 \cdot 9 \cdot 10$ non è la fattorizzazione.
- Per il massimo comun divisore prendere l'esponente più grande: quello è il minimo comune multiplo.
- Dire che nella dimostrazione di Euclide il numero costruito è primo.
- Dichiarare primo un numero dopo aver provato solo 2, 3 e 5.

## Quiz

```quiz
D: Dal problema 1 dell'appello del 01/07/2026, versione A. $P$ è l'insieme dei 25 primi minori o uguali a 100. Quanti sono i numeri naturali maggiori di 1 che sono prodotto di primi distinti di $P$?
+ $2^{25} - 1$
- $2^{25}$
- $25!$
- $\binom{25}{2}$
- $25^2$
= Ogni numero corrisponde a un sottoinsieme non vuoto di $P$, per l'unicità della fattorizzazione. È la risposta della soluzione ufficiale. La più insidiosa è $2^{25}$, che conta anche il sottoinsieme vuoto, cioè il numero 1.

D: Dal problema 1 dell'appello del 01/07/2026, versione C. $P$ è l'insieme dei 24 primi minori o uguali a 90. Quanti numeri sono il prodotto di esattamente cinque primi distinti di $P$?
N: 42504
= Sono i sottoinsiemi di 5 elementi: $\binom{24}{5} = 42504$.

D: Il numero 6 divide $4 \cdot 9$, ma non divide né 4 né 9. Che cosa mostra questo esempio?
+ che 6 non è primo
- che 6 è irriducibile
- che 4 e 9 non sono coprimi
- che il teorema 4.13 è falso
- che 36 non ha una fattorizzazione unica
= Un primo che divide un prodotto divide uno dei fattori: 6 non lo fa. La più insidiosa è la quarta: il teorema dice che irriducibile e primo coincidono, e 6 non è né l'uno né l'altro.

D: Qual è la fattorizzazione in primi di 360?
+ $2^3 \cdot 3^2 \cdot 5$
- $4 \cdot 9 \cdot 10$
- $2^2 \cdot 3^2 \cdot 10$
- $2^3 \cdot 45$
- $1 \cdot 2^3 \cdot 3^2 \cdot 5$
= Tutti i fattori devono essere primi. La più insidiosa è l'ultima: il prodotto è giusto, ma 1 non è primo e non compare nelle fattorizzazioni.

D: Dall'esempio del libro (nota 4.16). Con $32775 = 3 \cdot 5^2 \cdot 19 \cdot 23$ e $6120 = 2^3 \cdot 3^2 \cdot 5 \cdot 17$, quanto vale il massimo comun divisore?
N: 15
= I primi comuni sono 3 e 5, ognuno con l'esponente più piccolo, che è 1.

D: $2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509$. Che cosa dice questo conto sulla dimostrazione di Euclide?
+ che il numero costruito può non essere primo, ma i suoi fattori primi non sono nell'elenco
- che la dimostrazione è sbagliata
- che 59 era nell'elenco di partenza
- che i primi finiscono a 13
- che 30031 è primo
= La dimostrazione usa solo il fatto che il numero ha un fattore primo nuovo. La più insidiosa è la seconda: chi ricorda «prodotto più uno è primo» pensa a un controesempio, ma il teorema non lo afferma.

D: Perché 1 non si considera primo?
+ perché altrimenti la fattorizzazione non sarebbe unica
- perché è dispari
- perché non ha divisori
- perché è troppo piccolo
- perché divide tutti i numeri
= Con 1 tra i primi, $6 = 2 \cdot 3 = 1 \cdot 2 \cdot 3$ avrebbe più fattorizzazioni. La più insidiosa è l'ultima: è vero che 1 divide tutto, ma il motivo della convenzione è l'unicità.

D: Per controllare che 97 è primo provando i primi in ordine, qual è l'ultimo primo che serve provare?
N: 7
= $10^2 = 100$ supera 97, quindi bastano i primi minori di 10: 2, 3, 5 e 7.
```

## Esercizi

::: esercizio base Riscaldamento: tre fattorizzazioni
Fattorizza 1001, 4620 e 1843.
::: soluzione
$1001 = 7 \cdot 11 \cdot 13$. $4620 = 2^2 \cdot 3 \cdot 5 \cdot 7 \cdot 11$. $1843 = 19 \cdot 97$: non è multiplo di 2, 3, 5, 7, 11, 13, 17, e $1843 = 19 \cdot 97$. Il 1843 è il modulo del problema 1 dell'appello del 07/07/2025, che lo presenta come prodotto «dei due numeri primi 19, 97».
:::

::: esercizio base Riscaldamento: primo o no
Decidi se 101, 119 e 221 sono primi.
::: soluzione
**101**: la radice è poco più di 10; 2, 3, 5 e 7 non lo dividono ($101 = 14 \cdot 7 + 3$): è primo. **119** $= 7 \cdot 17$: non è primo. **221**: la radice è meno di 15; 2, 3, 5, 7, 11 no, ma $221 = 13 \cdot 17$: non è primo.
:::

::: esercizio medio Massimo comun divisore e minimo comune multiplo
Calcola massimo comun divisore e minimo comune multiplo di 4620 e 360 dalle fattorizzazioni.
::: soluzione
$4620 = 2^2 \cdot 3 \cdot 5 \cdot 7 \cdot 11$ e $360 = 2^3 \cdot 3^2 \cdot 5$. Massimo comun divisore: $2^2 \cdot 3 \cdot 5 = 60$. Minimo comune multiplo: $2^3 \cdot 3^2 \cdot 5 \cdot 7 \cdot 11 = 27720$. Controllo: $60 \cdot 27720 = 4620 \cdot 360$.
:::

::: esercizio medio La costruzione di Euclide
Applica la costruzione della dimostrazione agli elenchi (a) 2, 3; (b) 3, 5; (c) 2, 3, 5, 7, 11. In ogni caso trova un primo che non è nell'elenco.
::: soluzione
(a) $2 \cdot 3 + 1 = 7$, primo. (b) $3 \cdot 5 + 1 = 16 = 2^4$: il primo nuovo è 2. (c) $2310 + 1 = 2311$, che è primo (controllato con un programma; a mano servono i primi fino a 47).
:::

::: esercizio esame Appello del 01/07/2026, problema 1, versione B, punto c
Sia $P$ l'insieme dei numeri primi minori o uguali a 80. Sapendo che $\lvert P \rvert = 22$, quanti sono i numeri naturali maggiori di 1 la cui fattorizzazione è il prodotto di primi distinti appartenenti a $P$? Quanti di essi sono il prodotto di esattamente tre primi distinti?
::: soluzione
Per l'unicità della fattorizzazione ogni numero corrisponde a un sottoinsieme non vuoto di $P$: sono $2^{22} - 1$. Con esattamente tre primi: $\binom{22}{3} = 1540$. Della versione B ho solo il testo: il ragionamento è quello della soluzione ufficiale della versione A.
:::

::: esercizio esame Appello del 01/07/2026, problema 1, versione A, punto b
Quanti sono i numeri tra 1 e 500 che sono coprimi con 1000?
::: soluzione
$1000 = 2^3 \cdot 5^3$: un numero è coprimo con 1000 quando non è multiplo di 2 e non è multiplo di 5. Tra 1 e 500 i multipli di 2 sono 250, quelli di 5 sono 100, quelli di 10 sono 50. Per il principio di inclusione-esclusione ([D06](D06_insiemi_finiti_inclusione_esclusione.html)) i multipli di 2 o di 5 sono $250 + 100 - 50 = 300$, e i coprimi sono $500 - 300 = 200$. È la soluzione ufficiale; ricontato con un programma.
:::

::: esercizio difficile Quanti divisori ha 360
Usando l'unicità della fattorizzazione, conta i divisori positivi di 360.
::: soluzione
$360 = 2^3 \cdot 3^2 \cdot 5$. Un divisore positivo è un prodotto $2^a \cdot 3^b \cdot 5^c$ con $a$ da 0 a 3, $b$ da 0 a 2, $c$ da 0 a 1. Per l'unicità, scelte diverse danno divisori diversi. Le scelte sono $4 \cdot 3 \cdot 2 = 24$ (scelte successive, [D07](D07_parole_anagrammi_disposizioni.html)). Contati con un programma: 24.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra le definizioni di irriducibile e di primo?
Irriducibile: non si scrive come prodotto di due fattori, a parte quelli con 1 e −1. Primo: se divide un prodotto, divide almeno uno dei fattori. Sugli interi individuano gli stessi numeri.
:::

::: domanda Dove serve l'identità di Bézout in questa lezione?
Nel teorema 4.13, per mostrare che un irriducibile che divide un prodotto e non divide il primo fattore divide il secondo.
:::

::: domanda Che cosa dice il teorema fondamentale dell'aritmetica?
Ogni intero diverso da 0, 1 e −1 si scrive in un solo modo, a parte l'ordine, come più o meno un prodotto di primi positivi.
:::

::: domanda Perché nell'esistenza serve l'induzione forte?
Perché un numero non primo si spezza in due fattori più piccoli di grandezza non nota, e l'ipotesi deve valere per tutti e due.
:::

::: domanda Come si dimostra che i primi sono infiniti?
Preso un elenco finito di primi, il loro prodotto più 1 ha un fattore primo che non può essere nell'elenco, perché dividerebbe 1.
:::

::: domanda Come si trova il massimo comun divisore dalle fattorizzazioni?
Si prendono i primi comuni, ciascuno con l'esponente più piccolo, e si moltiplicano.
:::

## Glossario

```glossario
Irriducibile | Intero diverso da 0, 1, −1 che non si scrive come prodotto di due fattori, a parte quelli con 1 e −1.
Primo | Intero diverso da 0, 1, −1 che, quando divide un prodotto, divide almeno uno dei fattori. Sugli interi coincide con irriducibile.
Fattorizzazione | Scrittura di un intero come più o meno un prodotto di primi positivi.
Teorema fondamentale dell'aritmetica | Ogni intero diverso da 0, 1, −1 ha una fattorizzazione, ed è unica a meno dell'ordine.
Coprimi | Due interi senza primi in comune, cioè con massimo comun divisore 1.
Minimo comune multiplo | Il più piccolo multiplo positivo comune a due interi.
```

## Checklist

```checklist
- So dire le definizioni di irriducibile e di primo, e che sugli interi coincidono.
- So mostrare con un esempio che un numero non primo può dividere un prodotto senza dividere i fattori.
- So enunciare il teorema fondamentale dell'aritmetica.
- So spiegare l'idea dell'esistenza con l'induzione forte.
- So fattorizzare un numero provando i primi in ordine.
- So decidere se un numero è primo fermandomi alla radice quadrata.
- So ripetere la dimostrazione che i primi sono infiniti.
- So perché 1 non è primo.
- So calcolare massimo comun divisore e minimo comune multiplo dalle fattorizzazioni.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta* (testo del canale B), cap. 4 «I numeri interi», sezione «Il teorema fondamentale dell'aritmetica», pp. 76–80: teorema 4.13 con la dimostrazione, teorema 4.14 con esistenza e unicità, elenco dei primi, teorema 4.15, cenni al teorema dei numeri primi e al test AKS, nota 4.16 con l'esempio $\mathrm{MCD}(32775, 6120)$.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori), lezione 16: «Equivalenza primo/irriducibile. Il teorema fondamentale dell'aritmetica. Esistenza di infiniti primi».
- Appelli di Matematica Discreta (Moodle MDAG1 2025/26, aperto agli ospiti): appello del 01/07/2026, problema 1, versioni A, B e C, con la soluzione ufficiale della versione A; appello del 07/07/2025, problema 1 (il modulo 1843).
- L'esempio del 6, l'albero di 360, il metodo per fattorizzare, il minimo comune multiplo, i disegni, i quiz senza data e gli esercizi di riscaldamento sono di questi appunti. Fattorizzazioni, conteggi e numeri primi li ho controllati con un programma.
