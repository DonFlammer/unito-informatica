---
corso: MDAG
modulo: MD
lezione: S8
tipo: riassunto
titolo: "Settimana 8 (MD): classi resto, invertibili e funzione di Eulero"
data: 2026-11-20
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Riassunto settimanale · Parte 1 (modA) · Matematica Discreta · Canali A, B e C · 16/11 – 20/11/2026
descrizione: >-
  Riassunto della settimana 8 di Matematica Discreta (MDAG, parte 1): la congruenza modulo N, le classi resto e le
  loro operazioni con la buona definizione; le classi invertibili e i divisori dello zero, il criterio del massimo
  comun divisore, il calcolo dell'inversa e la funzione di Eulero, con le domande vere degli appelli 2025 e 2026.
lede: >-
  Le due lezioni della settimana in poche pagine: come si fanno i conti con i resti, quando una classe ha un'inversa e
  come si trova, quante sono le classi invertibili. È l'inizio dell'aritmetica modulare, la parte del corso da cui
  vengono più domande d'esame.
materiale: libro
scheda:
  Lezioni: "[D17](D17_congruenze_classi_resto.html) lun 16/11 · [D18](D18_invertibili_divisori_zero_eulero.html) ven 20/11"
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 7, pp. 131–143
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni D17 e D18 di Matematica Discreta, scritti sul libro di A. Mori (cap. 7) e sul diario delle
  lezioni del canale B 2025/26; appelli di Matematica Discreta 2025 e 2026
appunti_html: appunti/MDAG/riassunto_settimana_08_MD.html
genera_html: true
---

## In breve

- Due interi sono **congruenti modulo $N$** quando la loro differenza è un multiplo di $N$, cioè quando hanno lo stesso resto.
- La **classe resto** di un intero è l'insieme di tutti gli interi congruenti a lui. Le classi sono tante quanti i resti possibili, e il loro insieme si scrive $\mathbb{Z}_N$.
- Le classi si **sommano** e si **moltiplicano** con un rappresentante qualunque: il risultato non dipende dalla scelta (**buona definizione**).
- In un conto modulo $N$ ogni numero si può sostituire con il suo resto. Nelle potenze si riduce la base, **non l'esponente**.
- Una classe non nulla è **invertibile** se il suo rappresentante è coprimo con il modulo, ed è un **divisore dello zero** altrimenti.
- L'**inversa** si trova con l'algoritmo di Euclide e l'identità di Bézout: è il coefficiente del rappresentante.
- La **funzione di Eulero** conta le classi invertibili. Per una potenza di un primo: $\varphi(p^e) = p^{e-1}(p - 1)$.

> [!NOTA] Le lezioni della settimana
> Nel canale B le lezioni di Matematica Discreta sono state due: lunedì 16/11 e venerdì 20/11. Gli argomenti sono ricostruiti dal diario dell'anno scorso, lezioni 17 e 18. Il docente passa dal capitolo 4 al capitolo 7 del libro; il capitolo 6, sui gruppi, comincia la settimana dopo.

## D17 · Congruenze e classi resto (lun 16/11)

Sull'orologio dieci più cinque fa tre: si conta a meno di multipli di 12. La lezione fa lo stesso con un modulo $N$ qualunque.

- **Congruenza.** $a \equiv b \pmod N$ vuol dire che $N$ divide $a - b$. È lo stesso che avere lo stesso resto nella divisione per $N$. Il resto di un negativo sta comunque tra 0 e $N - 1$: $-17 \equiv 3 \pmod 5$.
- **Classi resto.** $[a]_N$ è l'insieme di tutti gli interi congruenti ad $a$: per esempio $[3]_7 = \{\dots, -4, 3, 10, 17, \dots\}$. Le classi sono una partizione degli interi.
- **$\mathbb{Z}_N$.** L'insieme delle $N$ classi. Ogni classe ha infiniti rappresentanti; quello tra 0 e $N - 1$ è il **rappresentante canonico**, cioè il resto.
- **Operazioni.** $\overline{a} + \overline{b} = \overline{a + b}$ e $\overline{a} \cdot \overline{b} = \overline{a \cdot b}$.
- **Buona definizione.** Cambiando rappresentanti, $a' = a + kN$ e $b' = b + k'N$, somma e prodotto cambiano di un multiplo di $N$: la classe del risultato è la stessa.
- **Proprietà.** Associativa, commutativa, distributiva; neutri $\overline{0}$ e $\overline{1}$; ogni classe ha un'opposta. Sull'inversa la lezione si ferma: è l'argomento della D18.

```grafico
titolo: Gli interi da −4 a 10 colorati secondo il resto della divisione per 3. Ogni colore è una classe resto, e i suoi numeri distano di 3. Sommando un numero blu e uno verde viene sempre un numero verde: è la buona definizione
x: -5 11
y: 0 3.4
assi: no
griglia: no
proporzioni: libere
segmento: -4.6 1.5 10.6 1.5 | grigio | sottile
punto: -3 1.5 | blu
punto: 0 1.5 | blu
punto: 3 1.5 | blu
punto: 6 1.5 | blu
punto: 9 1.5 | blu
punto: -2 1.5 | verde
punto: 1 1.5 | verde
punto: 4 1.5 | verde
punto: 7 1.5 | verde
punto: 10 1.5 | verde
punto: -4 1.5 | ambra
punto: -1 1.5 | ambra
punto: 2 1.5 | ambra
punto: 5 1.5 | ambra
punto: 8 1.5 | ambra
testo: -3 0.9 | blu | "−3"
testo: 0 0.9 | blu | "0"
testo: 3 0.9 | blu | "3"
testo: 6 0.9 | blu | "6"
testo: 9 0.9 | blu | "9"
testo: -2 2.1 | verde | "−2"
testo: 1 2.1 | verde | "1"
testo: 4 2.1 | verde | "4"
testo: 7 2.1 | verde | "7"
testo: 10 2.1 | verde | "10"
testo: -4 0.9 | ambra | "−4"
testo: -1 0.9 | ambra | "−1"
testo: 2 0.9 | ambra | "2"
testo: 5 0.9 | ambra | "5"
testo: 8 0.9 | ambra | "8"
testo: -2 3.0 | blu | "resto 0"
testo: 3 3.0 | verde | "resto 1"
testo: 8 3.0 | ambra | "resto 2"
```

**Nei conti.** Si riduce ogni numero prima di operare. L'**ultima cifra** è la classe modulo 10. Per le **potenze** si cerca dove la potenza torna a 1: le potenze di 3 modulo 10 sono 3, 9, 7, 1 e si ripetono ogni 4, quindi $3^{2026}$ finisce come $3^2$, per 9, perché 2026 diviso 4 dà resto 2.

> [!TRAPPOLA] L'esponente non si riduce modulo N
> In $\mathbb{Z}_5$ gli esponenti 3 e 8 sono congruenti, ma $2^3 \equiv 3$ e $2^8 \equiv 1$. L'esponente si riduce rispetto alla lunghezza del ciclo delle potenze, non rispetto al modulo.

::: prova Qual è il rappresentante canonico di $[-20]_7$? Quanto vale $\overline{5} \cdot \overline{6}$ in $\mathbb{Z}_7$?
$-20 = -3 \cdot 7 + 1$: è 1. $\overline{30} = \overline{2}$, perché $30 = 4 \cdot 7 + 2$.
:::

> [!RICORDA]
> - $a \equiv b \pmod N$: stessa differenza da un multiplo di $N$, stesso resto.
> - $\mathbb{Z}_N$ ha $N$ elementi; ogni classe ha infiniti nomi.
> - Somma e prodotto non dipendono dal rappresentante.
> - Si riduce la base, non l'esponente.

## D18 · Classi invertibili ed Eulero (ven 20/11)

Nella tabella della moltiplicazione modulo 10 le classi non nulle si dividono in due famiglie: quelle con un 1 nella loro riga, e quelle con uno 0.

```grafico
titolo: Le dieci classi di Z₁₀. Quelle verdi sono coprime con 10 e hanno un'inversa. Quelle ambra hanno un fattore in comune con 10: moltiplicate per un'altra classe non nulla danno zero
x: -0.3 10.3
y: 0 3.6
assi: no
griglia: no
proporzioni: libere
poligono: 0 1.2 1 1.2 1 2.2 0 2.2 | grigio | tenue
poligono: 1 1.2 2 1.2 2 2.2 1 2.2 | verde | tenue
poligono: 2 1.2 3 1.2 3 2.2 2 2.2 | ambra | tenue
poligono: 3 1.2 4 1.2 4 2.2 3 2.2 | verde | tenue
poligono: 4 1.2 5 1.2 5 2.2 4 2.2 | ambra | tenue
poligono: 5 1.2 6 1.2 6 2.2 5 2.2 | ambra | tenue
poligono: 6 1.2 7 1.2 7 2.2 6 2.2 | ambra | tenue
poligono: 7 1.2 8 1.2 8 2.2 7 2.2 | verde | tenue
poligono: 8 1.2 9 1.2 9 2.2 8 2.2 | ambra | tenue
poligono: 9 1.2 10 1.2 10 2.2 9 2.2 | verde | tenue
testo: 0.5 1.7 | grigio | "0"
testo: 1.5 1.7 | verde | "1"
testo: 2.5 1.7 | ambra | "2"
testo: 3.5 1.7 | verde | "3"
testo: 4.5 1.7 | ambra | "4"
testo: 5.5 1.7 | ambra | "5"
testo: 6.5 1.7 | ambra | "6"
testo: 7.5 1.7 | verde | "7"
testo: 8.5 1.7 | ambra | "8"
testo: 9.5 1.7 | verde | "9"
testo: 2.5 3.0 | verde | "invertibili"
testo: 7.0 0.5 | ambra | "divisori dello zero"
```

- **Invertibile**: c'è una classe che moltiplicata per lei dà $\overline{1}$. **Divisore dello zero**: classe non nulla che moltiplicata per un'altra classe non nulla dà $\overline{0}$. Una classe non può essere tutte e due le cose.
- **Il criterio (teorema 7.12).** La classe di $a$ è invertibile se $\mathrm{MCD}(a, N) = 1$, ed è un divisore dello zero se il massimo comun divisore è maggiore di 1.
- **Modulo primo**: tutte le classi non nulle sono invertibili.
- **L'inversa.** Dall'identità di Bézout $aA + NB = 1$, passando alle classi resta $\overline{a} \cdot \overline{A} = \overline{1}$: l'inversa è la classe di $A$.

Il calcolo, sull'inverso di 17 in $\mathbb{Z}_{54}$ (quiz del 14/01/2025):

| Euclide | Risalita |
|---|---|
| $54 = 3 \cdot 17 + 3$ | $1 = 3 - 2$ |
| $17 = 5 \cdot 3 + 2$ | $1 = 6 \cdot 3 - 17$ |
| $3 = 1 \cdot 2 + 1$ | $1 = 6 \cdot 54 - 19 \cdot 17$ |

Il coefficiente di 17 è $-19$, e $-19 + 54 = 35$: l'inversa è $\overline{35}$. Controllo: $17 \cdot 35 = 595 = 11 \cdot 54 + 1$.

**La funzione di Eulero.** $\varphi(n)$ è il numero degli interi tra 1 e $n$ coprimi con $n$, cioè il numero delle classi invertibili modulo $n$.

| $n$ | Come si calcola | $\varphi(n)$ |
|---|---|---|
| primo $p$ | tutti i numeri da 1 a $p - 1$ | $p - 1$ |
| potenza $p^e$ | si tolgono i $p^{e-1}$ multipli di $p$ | $p^{e-1}(p - 1)$ |
| prodotto di fattori coprimi | si moltiplicano le $\varphi$ dei fattori | $\varphi(88) = 4 \cdot 10 = 40$ |

L'ultima riga è la proposizione 7.17, che in aula si dimostra più avanti: nei quiz serve già.

::: prova In $\mathbb{Z}_{21}$, $\overline{14}$ è invertibile? Per quale classe non nulla moltiplicarla per avere zero? Quanto vale $\varphi(21)$?
Non è invertibile: $\mathrm{MCD}(14, 21) = 7$. $21 : 7 = 3$, e $14 \cdot 3 = 42 = 2 \cdot 21$. $\varphi(21) = \varphi(3) \cdot \varphi(7) = 2 \cdot 6 = 12$.
:::

> [!RICORDA]
> - Coprimo con il modulo: invertibile. Altrimenti: divisore dello zero.
> - Inversa: Euclide, risalita, coefficiente del rappresentante, più il modulo se è negativo.
> - $\varphi(p^e) = p^{e-1}(p - 1)$; per fattori coprimi si moltiplica.
> - Il risultato si controlla con una moltiplicazione.

## Verso l'esame

- **«L'inverso moltiplicativo di … modulo … è»**: quiz del 14/01/2025 e del 10/09/2026; primo punto di un problema il 13/01/2026 e il 10/09/2026. Con le risposte davanti conviene provarle una per una.
- **«Il numero delle classi invertibili in $\mathbb{Z}_N$»**: quiz dell'08/06/2026. Si fattorizza $N$ e si usa la formula.
- **Ultime cifre e resti**: quiz dell'08/06/2026, domanda 7.
- Nei problemi la motivazione va scritta: «è invertibile perché il massimo comun divisore con il modulo è 1».
- La prova è la stessa per i canali A, B e C: 10 domande a risposta multipla e 2 problemi, in 2 ore, con libro e appunti. Appelli 2026/27: 19/01/2027 e 03/02/2027, alle 14:00.

## Domande di ripasso

::: domanda Quando due interi sono congruenti modulo $N$?
Quando $N$ divide la loro differenza, cioè quando hanno lo stesso resto nella divisione per $N$.
:::

::: domanda Che cosa vuol dire che somma e prodotto tra classi sono ben definiti?
Che il risultato non cambia se si scelgono altri rappresentanti delle stesse classi.
:::

::: domanda Perché non si può ridurre l'esponente modulo $N$?
Perché l'esponente conta quante volte si moltiplica: è un intero, non una classe. In $\mathbb{Z}_5$, $2^3$ e $2^8$ danno classi diverse.
:::

::: domanda Come si riconosce una classe invertibile?
Il massimo comun divisore tra il suo rappresentante e il modulo è 1.
:::

::: domanda Come si calcola l'inversa con un modulo grande?
Algoritmo di Euclide e risalita fino a $aA + NB = 1$: l'inversa è la classe di $A$.
:::

::: domanda Che cosa conta $\varphi(n)$, e quanto vale per una potenza di un primo?
Le classi invertibili modulo $n$. Per $p^e$ vale $p^{e-1}(p - 1)$.
:::

## Quiz d'esame

Sono tutte domande vere degli appelli, nelle versioni che le lezioni D17 e D18 non svolgono per intero. Le risposte giuste sono quelle dei fogli delle soluzioni, ricontrollate con un programma.

```quiz
D: Appello dell'08/06/2026, quiz, domanda 7 (quarta versione). L'ultima cifra del numero $2! + 4! + 29! + 2026!$ è:
+ 6
- 0
- 5
- 1
- 8
= $2 + 24 = 26$, e i due fattoriali grandi finiscono per 0 perché contengono i fattori 2 e 5. La risposta più insidiosa è 8: viene usando $3! = 6$ al posto di $4!$.

D: Appello del 14/01/2025, quiz, domanda 8 (seconda versione). In $\mathbb{Z}_{86}$ l'inverso moltiplicativo di 17 è:
+ 81
- 11
- 24
- 29
- non esiste
= $86 = 5 \cdot 17 + 1$, quindi $1 = 86 - 5 \cdot 17$ e l'inverso è $-5 \equiv 81$. La più insidiosa è «non esiste»: 86 è pari, ma 17 è primo e non divide 86.

D: Appello del 14/01/2025, quiz, domanda 8 (terza versione). In $\mathbb{Z}_{76}$ l'inverso moltiplicativo di 17 è:
+ 9
- 33
- 19
- 42
- non esiste
= $76 = 4 \cdot 17 + 8$ e $17 = 2 \cdot 8 + 1$; risalendo, $1 = 9 \cdot 17 - 2 \cdot 76$. Controllo: $17 \cdot 9 = 153 = 2 \cdot 76 + 1$. La più insidiosa è 19: è un divisore di 76, non l'inverso.

D: Appello del 10/09/2026, quiz, domanda 9 (seconda versione). L'inverso moltiplicativo di 29 modulo 57 è:
+ 2
- 13
- 20
- 26
- non esiste
= $2 \cdot 29 = 58 = 57 + 1$. La più insidiosa è 26: è la risposta giusta di un'altra versione, quella con 11 al posto di 29.

D: Appello dell'08/06/2026, quiz, domanda 9 (quarta versione). Determinare il numero delle classi invertibili in $\mathbb{Z}_{90}$.
+ 24
- 28
- 20
- 32
- 30
= $90 = 2 \cdot 3^2 \cdot 5$: $\varphi(90) = 1 \cdot 6 \cdot 4 = 24$. La più insidiosa è 30: viene dimenticando di togliere i multipli di 5.

D: Appello dell'08/06/2026, quiz, domanda 9 (terza versione). Determinare il numero delle classi invertibili in $\mathbb{Z}_{75}$.
+ 40
- 42
- 20
- 28
- 32
= $75 = 3 \cdot 5^2$: $\varphi(75) = 2 \cdot 20 = 40$. La più insidiosa è 20: è $\varphi(25)$ da sola, senza il fattore di 3.

D: Quiz 2021–25. In $\mathbb{Z}_{56}$ la classe $\overline{51}$:
+ ha inversa 11
- non è invertibile
- ha inversa 5
- ha inversa 42
- ha inversa 33
= $51 = 3 \cdot 17$ e $56 = 2^3 \cdot 7$ sono coprimi; $51 \cdot 11 = 561 = 10 \cdot 56 + 1$. Più in fretta: $51 \equiv -5$, e $-5 \cdot 11 = -55 \equiv 1$. La più insidiosa è 5: è il numero che viene in mente da $51 \equiv -5$, ma $-5 \cdot 5 = -25$ non è congruo a 1.

D: Appello del 13/01/2026, problema 2, punto a). L'inverso moltiplicativo di 35 in $\mathbb{Z}_{97}$, come numero tra 0 e 96, è:
N: 61
= 97 è primo, quindi 35 è invertibile. Con Euclide e la risalita viene 61; controllo: $35 \cdot 61 = 2135 = 22 \cdot 97 + 1$. È il risultato della soluzione ufficiale.
```

## Fonti

- Le lezioni complete: [D17 · Congruenze e classi resto](D17_congruenze_classi_resto.html) e [D18 · Classi invertibili, divisori dello zero e funzione di Eulero](D18_invertibili_divisori_zero_eulero.html), con le dimostrazioni, i disegni e gli esercizi.
- A. Mori, *Lezioni di Matematica Discreta*, cap. 7, pp. 131–143; diario delle lezioni del canale B 2025/26, lezioni 17 e 18.
- Appelli di Matematica Discreta del 14/01/2025, del 13/01/2026, dell'08/06/2026 e del 10/09/2026, e quiz 2021–25, con le soluzioni ufficiali.
