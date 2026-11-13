---
corso: MDAG
modulo: MD
lezione: S7
tipo: riassunto
titolo: "Settimana 7: divisione euclidea, Euclide e Bézout, numeri primi"
data: 2026-11-13
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Riassunto settimanale · Parte 1 (modA) · Matematica Discreta · Canali A, B e C · 09/11 – 13/11/2026
descrizione: >-
  Riassunto della settimana 7 di Matematica Discreta (MDAG, parte 1): divisibilità, massimo comun divisore, divisione
  euclidea e cambi di base; l'algoritmo di Euclide, l'identità di Bézout e le equazioni ax + by = c; irriducibili e
  primi, il teorema fondamentale dell'aritmetica, i primi sono infiniti; con le domande dei quiz e dei problemi degli
  appelli 2020–2026.
lede: >-
  Le tre lezioni della settimana in poche pagine: la divisione con il resto e i cambi di base, il massimo comun
  divisore con le divisioni successive e la sua scrittura come combinazione, la fattorizzazione in primi. È tutto il
  capitolo 4 del libro, e la base delle congruenze che cominciano adesso.
materiale: libro
scheda:
  Lezioni: "[D14](D14_interi_divisibilita_divisione_euclidea.html) lun 09/11 · [D15](D15_algoritmo_euclide_bezout.html) mer 11/11 · [D16](D16_primi_teorema_fondamentale_aritmetica.html) ven 13/11"
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 4, pp. 67–80
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti delle lezioni D14, D15 e D16 di Matematica Discreta, scritti sul libro di A. Mori
appunti_html: appunti/MDAG/riassunto_settimana_07_MD.html
genera_html: true
---

## In breve

- Un intero ne **divide** un altro se il secondo è un suo multiplo. Un divisore comune di due numeri divide anche somme, differenze e multipli.
- **Divisione euclidea**: quoziente e resto esistono e sono unici, e il resto non è mai negativo, anche con numeri negativi.
- Le **cifre** di un numero in una base sono i resti di divisioni successive per la base, letti dall'ultimo al primo.
- **Algoritmo di Euclide**: si divide, poi si divide il divisore per il resto, fino al resto zero. Il massimo comun divisore è l'ultimo resto diverso da zero.
- **Identità di Bézout**: il massimo comun divisore si scrive come combinazione intera dei due numeri, e i coefficienti si trovano risalendo le divisioni.
- Un'equazione $ax + by = c$ ha soluzioni intere esattamente quando il massimo comun divisore dei due coefficienti divide il termine noto.
- Sugli interi **irriducibile** e **primo** coincidono, e ogni intero diverso da 0, 1 e −1 ha una **fattorizzazione in primi unica**.
- I primi sono infiniti; 1 non è primo.

> [!NOTA] Le lezioni della settimana
> Tre lezioni nel canale B: lunedì 09/11, mercoledì 11/11 e venerdì 13/11. Gli argomenti sono ricostruiti dal diario dell'anno scorso (lezioni 14, 15 e 16) e dal libro.

## D14 · Divisibilità e divisione euclidea (lun 09/11)

Con questa lezione comincia l'aritmetica degli interi. Le definizioni di partenza sono tre.

- **Divide**: $a \mid b$ se $b = ka$ con $k$ intero. Se $d$ divide $a$ e $b$, divide anche $a + b$, $a - b$ e ogni multiplo (proposizione 4.2). Da qui, per esempio, $\mathrm{MCD}(n, n + 3)$ può essere solo 1 o 3.
- **Massimo comun divisore**: il più grande intero che divide tutti e due. È sempre positivo, e $\mathrm{MCD}(0, b) = \lvert b \rvert$.
- **Divisione euclidea** (teorema 4.5): dividendo un intero $a$ per un intero $b \ne 0$ si trovano un quoziente $q$ e un resto $r$, e sono unici. Valgono $a = qb + r$ e $0 \le r < \lvert b \rvert$.

Con il dividendo negativo il resto resta positivo: $-17 = (-4) \cdot 5 + 3$, non $(-3) \cdot 5 - 2$. In C, invece, `-17 / 5` dà $-3$ e `-17 % 5` dà $-2$: non è la divisione euclidea.

**I cambi di base** sono la prima applicazione. Verso la base 10 si sommano le cifre per le potenze della base: $336_{[8]} = 3 \cdot 64 + 3 \cdot 8 + 6 = 222$. Dalla base 10 si divide più volte per la base.

```grafico
titolo: Il numero 45 in base 2. A ogni riga si divide per 2 il quoziente della riga sopra; ci si ferma al quoziente 0. I resti (in verde), letti dal basso verso l'alto, sono le cifre: 101101
x: 0 12.4
y: 0 6.6
assi: no
griglia: no
proporzioni: libere
testo: 3.0 5.9 | grigio | "45 = 22 · 2 +"
testo: 5.6 5.9 | verde | "1"
testo: 3.0 4.9 | grigio | "22 = 11 · 2 +"
testo: 5.6 4.9 | verde | "0"
testo: 3.0 3.9 | grigio | "11 = 5 · 2 +"
testo: 5.6 3.9 | verde | "1"
testo: 3.0 2.9 | grigio | "5 = 2 · 2 +"
testo: 5.6 2.9 | verde | "1"
testo: 3.0 1.9 | grigio | "2 = 1 · 2 +"
testo: 5.6 1.9 | verde | "0"
testo: 3.0 0.9 | grigio | "1 = 0 · 2 +"
testo: 5.6 0.9 | verde | "1"
freccia: 6.6 0.9 6.6 5.9 | verde
testo: 9.2 3.9 | verde | "si legge dal basso"
testo: 9.2 2.9 | verde | "101101"
```

::: prova Fai la divisione euclidea di $-23$ per 4, e scrivi 13 in base 2.
$-23 = (-6) \cdot 4 + 1$. E $13 = 6 \cdot 2 + 1$, $6 = 3 \cdot 2 + 0$, $3 = 1 \cdot 2 + 1$, $1 = 0 \cdot 2 + 1$: dal basso, $1101$.
:::

> [!RICORDA]
> - $a = qb + r$ con $0 \le r < \lvert b \rvert$: il resto non è mai negativo.
> - Verso la base 10: cifre per potenze. Dalla base 10: resti, letti al contrario.

## D15 · Euclide e Bézout (mer 11/11)

Dopo una divisione, i divisori comuni di dividendo e divisore sono gli stessi di divisore e resto (proposizione 4.9): da $a = qb + r$ segue $\mathrm{MCD}(a, b) = \mathrm{MCD}(b, r)$. Quindi si può sostituire la coppia con una più piccola, e ripetere.

```grafico
titolo: L'algoritmo di Euclide per 126 e 90. A ogni riga il divisore scende al posto del dividendo (frecce blu) e il resto al posto del divisore (frecce ambra). L'ultimo resto diverso da zero, 18 (in verde), è il massimo comun divisore
x: 0 12.4
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
testo: 2.6 3.8 | grigio | "126"
testo: 4.0 3.8 | grigio | "= 1 ·"
testo: 5.4 3.8 | blu | "90"
testo: 6.5 3.8 | grigio | "+"
testo: 7.6 3.8 | ambra | "36"
testo: 2.6 2.3 | blu | "90"
testo: 4.0 2.3 | grigio | "= 2 ·"
testo: 5.4 2.3 | ambra | "36"
testo: 6.5 2.3 | grigio | "+"
testo: 7.6 2.3 | verde | "18"
testo: 2.6 0.8 | ambra | "36"
testo: 4.0 0.8 | grigio | "= 2 ·"
testo: 5.4 0.8 | verde | "18"
testo: 6.5 0.8 | grigio | "+"
testo: 7.6 0.8 | grigio | "0"
freccia: 5.2 3.5 2.9 2.6 | blu
freccia: 7.4 3.5 5.7 2.6 | ambra
freccia: 5.2 2.0 2.9 1.1 | ambra
freccia: 7.4 2.0 5.7 1.1 | verde
testo: 10.2 2.3 | verde | "ultimo resto non nullo"
```

**Identità di Bézout** (teorema 4.10): se $d = \mathrm{MCD}(a, b)$, esistono interi $A$ e $B$ con $d = aA + bB$. Si trovano **risalendo**: si parte dalla riga che ha $d$ come resto e si sostituisce un resto alla volta, senza svolgere i prodotti.

$$18 = 90 - 2 \cdot 36 = 90 - 2 \cdot (126 - 90) = 3 \cdot 90 - 2 \cdot 126.$$

- **Controllo**, sempre: $270 - 252 = 18$.
- I coefficienti **non sono unici**: l'algoritmo ne dà una coppia, ma ce ne sono infinite.
- **Le combinazioni** $aA + bB$ sono esattamente i multipli di $d$. Quindi $ax + by = c$ ha soluzioni intere quando $d$ divide $c$, e una soluzione si ottiene moltiplicando l'identità di Bézout per $\frac{c}{d}$.
- Due numeri con massimo comun divisore 1 si chiamano **coprimi**; se una combinazione dà 1, lo sono.

::: prova $126x + 90y = 54$ ha soluzioni intere? E $126x + 90y = 30$?
La prima sì: 18 divide 54, e moltiplicando l'identità per 3 viene $x = -6$, $y = 9$. La seconda no: 18 non divide 30.
:::

> [!RICORDA]
> - Massimo comun divisore: l'ultimo resto diverso da zero.
> - Bézout: si risale un resto alla volta, poi si controlla.
> - $ax + by = c$ ha soluzioni intere quando il massimo comun divisore divide $c$.

## D16 · Primi e fattorizzazione (ven 13/11)

Un intero diverso da 0, 1 e −1 è **irriducibile** se non si spezza in un prodotto, ed è **primo** se quando divide un prodotto divide uno dei fattori. Il teorema 4.13 dice che sugli interi sono la stessa cosa; la dimostrazione usa Bézout. Un numero non primo si comporta diversamente: 6 divide $4 \cdot 9$ senza dividere né 4 né 9.

- **Teorema fondamentale dell'aritmetica** (4.14): ogni intero diverso da 0, 1 e −1 è, a parte il segno, un prodotto di primi positivi, in un modo solo. L'esistenza si dimostra per induzione forte, l'unicità con la proprietà dei primi.
- **1 non è primo**: altrimenti $6 = 2 \cdot 3 = 1 \cdot 2 \cdot 3$ avrebbe più fattorizzazioni.
- **Fattorizzare**: si provano i primi in ordine. Per decidere se un numero è primo bastano i primi fino alla sua radice quadrata: per 97 si provano 2, 3, 5 e 7.
- **I primi sono infiniti** (4.15): il prodotto dei primi di un elenco, più 1, non è divisibile per nessuno di loro, quindi ha un fattore primo nuovo. Il numero costruito può non essere primo: $30031 = 59 \cdot 509$.
- **Dalle fattorizzazioni**: il massimo comun divisore prende i primi comuni con l'esponente più piccolo, il minimo comune multiplo tutti i primi con l'esponente più grande. Con $126 = 2 \cdot 3^2 \cdot 7$ e $90 = 2 \cdot 3^2 \cdot 5$: massimo comun divisore 18, minimo comune multiplo 630.

Un uso tipico all'esame: «coprimo con 1000» vuol dire «né multiplo di 2 né multiplo di 5», perché $1000 = 2^3 \cdot 5^3$. Poi si conta con l'inclusione-esclusione.

::: prova Fattorizza 252 e trova il massimo comun divisore con 90.
$252 = 2^2 \cdot 3^2 \cdot 7$ e $90 = 2 \cdot 3^2 \cdot 5$: in comune $2 \cdot 3^2 = 18$.
:::

> [!RICORDA]
> - Irriducibile = primo. Fattorizzazione in primi: esiste ed è unica.
> - Primo o no: si provano i primi fino alla radice quadrata.
> - Massimo comun divisore: primi comuni, esponente più piccolo.

## Verso l'esame

- **Quiz, domanda 7**: un cambio di base negli appelli del 04/02/2025, 06/06/2025, 07/07/2025 e 10/09/2026.
- **Problema su massimo comun divisore e Bézout**: 15/06/2020, prove del 2022/23, 08/06/2026. Il secondo punto chiede spesso se un'equazione $ax + by = c$ ha soluzioni intere.
- **L'identità di Bézout serve per gli inversi modulo $N$**: appelli del 04/02/2025, 07/07/2025 e 08/09/2025. Arriva tra poche lezioni.
- **Fattorizzazioni e «coprimo con»** nel problema 1 del 01/07/2026.
- Appelli 2026/27: martedì 19/01/2027 e mercoledì 03/02/2027, alle 14:00, con libro e appunti.

## Domande di ripasso

::: domanda Che cosa dice il teorema della divisione euclidea?
Per $a$ e $b \ne 0$ esistono unici $q$ e $r$ con $a = qb + r$ e $0 \le r < \lvert b \rvert$.
:::

::: domanda Come si scrive un numero in base 2?
Si divide per 2 più volte, fino al quoziente 0; i resti, letti dall'ultimo al primo, sono le cifre.
:::

::: domanda Perché l'algoritmo di Euclide finisce?
Perché i resti sono interi non negativi che calano a ogni riga.
:::

::: domanda Come si trova l'identità di Bézout?
Risalendo le divisioni dell'algoritmo, sostituendo un resto alla volta senza svolgere i prodotti.
:::

::: domanda Quando $ax + by = c$ ha soluzioni intere?
Quando il massimo comun divisore di $a$ e $b$ divide $c$.
:::

::: domanda Perché 1 non è primo?
Per non perdere l'unicità della fattorizzazione.
:::

## Quiz d'esame

Sono domande vere degli appelli, diverse da quelle già nelle lezioni: le domande 7 dei quiz e i primi punti di tre problemi, messi in forma di scelta. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma.

```quiz
D: Appello del 10/09/2026, quiz, domanda 7 (una delle versioni). Qual è la scrittura binaria (base 2) di 322?
- 100111010
+ 101000010
- 101001010
- 101011000
- 101100100
= $322 = 256 + 64 + 2$: le cifre 1 stanno ai posti di $2^8$, $2^6$ e $2^1$. È la risposta 2 della soluzione ufficiale. La più insidiosa è 101001010, che vale 330: le altre opzioni sono le risposte giuste delle altre versioni.

D: Appello del 10/09/2026, quiz, domanda 7 (un'altra versione). Qual è la scrittura binaria (base 2) di 356?
- 100111010
- 101000010
- 101001010
- 101011000
+ 101100100
= $356 = 256 + 64 + 32 + 4$. È la risposta 5 della soluzione ufficiale. La più insidiosa è 101011000, che vale 344: stesso numero di cifre 1, in posti diversi.

D: Appello del 04/02/2025, quiz, domanda 7 (una delle versioni). Il numero scritto in notazione binaria (base 2) 1010111 è:
- 79
+ 87
- 101
- 103
- 105
= $64 + 16 + 4 + 2 + 1 = 87$. È la risposta 2 della soluzione ufficiale. La più insidiosa è 103, che viene contando un 32 al posto del 16.

D: Appello del 06/06/2025, quiz, domanda 7 (una delle versioni). Di quale numero intero $336_{[8]}$ è la scrittura in base 8?
+ 222
- 241
- 290
- 307
- 315
= $3 \cdot 64 + 3 \cdot 8 + 6 = 222$. È la risposta 1 della soluzione ufficiale. La più insidiosa è 241, che è $361_{[8]}$: le stesse cifre in un altro ordine.

D: Dalla prova scritta del 15/06/2020, esercizio 1. L'algoritmo di Euclide dà $\mathrm{MCD}(142, 112) = 2$. Quale di queste è un'identità di Bézout corretta?
+ $2 = 15 \cdot 142 - 19 \cdot 112$
- $2 = 19 \cdot 142 - 15 \cdot 112$
- $2 = 15 \cdot 142 + 19 \cdot 112$
- $2 = 4 \cdot 142 - 5 \cdot 112$
- $2 = 142 - 112$
= $2130 - 2128 = 2$. Nella soluzione ufficiale c'è una svista di stampa, «$19 \cdot 56$» al posto di $19 \cdot 112$: il conto giusto è questo. La più insidiosa è la quarta, che dà $568 - 560 = 8$.

D: Dalle prove scritte del 2022/23, problema 2. $\mathrm{MCD}(3522, 321) = 3$. Quale affermazione è vera?
+ $3522x + 321y = 12$ ha soluzioni intere, $3522x + 321y = 10$ no
- hanno soluzioni intere tutte e due
- non ne ha nessuna delle due
- $3522x + 321y = 10$ ha soluzioni intere, $3522x + 321y = 12$ no
- dipende dal segno di $x$ e $y$
= Il 3 divide 12 e non divide 10. È la soluzione ufficiale, che dà anche una soluzione: $x = -144$, $y = 1580$. La più insidiosa è «tutte e due»: 10 non è un multiplo di 3, e questo basta per escluderla.

D: Dal problema 1 dell'appello del 01/07/2026, versione B, punto b. Quanti sono i numeri tra 1 e 600 che sono coprimi con 900?
N: 160
= $900 = 2^2 \cdot 3^2 \cdot 5^2$: servono i numeri che non sono multipli di 2, di 3 o di 5. Per inclusione-esclusione: $600 - 300 - 200 - 120 + 100 + 60 + 40 - 20 = 160$. Della versione B ho solo il testo: il conto è mio, ricontato con un programma.

D: Dal problema 1 dell'appello del 01/07/2026, versione C, punto b. Quanti sono i numeri tra 1 e 450 che sono coprimi con 750?
N: 120
= $750 = 2 \cdot 3 \cdot 5^3$: $450 - 225 - 150 - 90 + 75 + 45 + 30 - 15 = 120$. Conto mio, ricontato con un programma.
```

## Fonti

- Le lezioni complete: [D14 · Numeri interi, divisibilità e divisione euclidea](D14_interi_divisibilita_divisione_euclidea.html), [D15 · L'algoritmo di Euclide e l'identità di Bézout](D15_algoritmo_euclide_bezout.html), [D16 · Numeri primi e teorema fondamentale dell'aritmetica](D16_primi_teorema_fondamentale_aritmetica.html), con gli esempi, i quiz e gli esercizi.
- A. Mori, *Lezioni di Matematica Discreta*, cap. 4, pp. 67–80.
- Quiz degli appelli del 04/02/2025, 06/06/2025 e 10/09/2026 (domanda 7); prova scritta del 15/06/2020 (esercizio 1); prove scritte del 2022/23 (problema 2); appello del 01/07/2026 (problema 1, versioni B e C), con le soluzioni ufficiali dove ci sono.
