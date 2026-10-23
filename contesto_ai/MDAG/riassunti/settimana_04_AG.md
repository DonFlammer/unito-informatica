---
corso: MDAG
modulo: AG
lezione: S4
tipo: riassunto
titolo: "Settimana 4: basi e dimensione, matrici, determinante"
data: 2026-10-22
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Riassunto settimanale · Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · 19/10 – 23/10/2026
descrizione: >-
  Riassunto della settimana 4 di Algebra lineare e Geometria (MDAG, parte 2): dipendenza e indipendenza lineare,
  basi, dimensione e il teorema che basta un controllo; matrici, trasposta, rango, prodotto riga per colonna, ordine
  dei fattori e traccia; determinante, matrici triangolari, sviluppo di Laplace e le regole che fanno risparmiare
  conti.
lede: >-
  Le tre lezioni della settimana in poche pagine: come si decide se dei vettori sono una base, come si moltiplicano due
  matrici senza sbagliare l'ordine, come si calcola un determinante grande senza calcolatrice, e le domande vere degli
  appelli 2025–2026.
materiale: dispense
scheda:
  Lezioni: "[L07](L07_spazi_vettoriali_3.html) mar 20/10 · [L08](L08_matrici_1.html) mer 21/10 · [L09](L09_matrici_2.html) gio 22/10, nel canale B"
  Dispense: Buzano e Radeschi 2026, pp. 31–44
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti delle lezioni L07, L08 e L09 di Algebra lineare e Geometria, scritti sulle dispense 2026 del corso
  (R. Buzano, M. Radeschi)
appunti_html: appunti/MDAG/riassunto_settimana_04_AG.html
genera_html: true
---

## In breve

- Dei vettori sono **linearmente indipendenti** quando l'unica combinazione che dà il vettore zero ha tutti i coefficienti uguali a zero. Altrimenti uno di loro si ottiene dagli altri: sono **dipendenti**.
- Una **base** è una lista di vettori indipendenti che genera tutto lo spazio. Tutte le basi hanno lo stesso numero di vettori, la **dimensione**.
- Con tanti vettori quanta è la dimensione, basta un controllo: se sono indipendenti, sono una base.
- Una matrice ha una **taglia**, righe per colonne. La **trasposta** scambia righe e colonne; il **rango** conta le colonne che non si ottengono dalle altre.
- Il **prodotto riga per colonna** si fa solo se le colonne della prima sono tante quante le righe della seconda, e **l'ordine conta**. La **traccia** è la somma della diagonale.
- Il **determinante** esiste solo per le matrici quadrate. Per una triangolare è il prodotto della diagonale; per le altre si usa lo **sviluppo di Laplace** lungo la riga o la colonna con più zeri.
- Queste tre lezioni sono tra le più presenti nei quiz: dimensioni, basi, «quale identità vale?», tracce, ranghi e determinanti escono in quasi ogni appello.

> [!CANALI]
> Le dispense sono le stesse per i canali A, B e C. Nel canale B le tre lezioni corrispondono agli incontri di martedì 20/10 (L07), mercoledì 21/10 (L08) e giovedì 22/10 (L09), una lezione delle dispense per incontro; le date vengono dal calendario del canale B.

## L07 · Dipendenza, basi e dimensione (mar 20/10)

Due vettori del piano sono dipendenti quando stanno sulla stessa retta per l'origine: uno è un multiplo dell'altro, e non aggiunge una direzione nuova.

```grafico
titolo: $(1, 2)$ e $(2, 4)$ stanno sulla stessa retta per l'origine (dipendenti); $(1, 2)$ e $(2, 1)$ no (indipendenti)
x: -1 5
y: -1 5
retta: 0 0 2.4 4.8 | grigio | tratteggio | $y = 2x$ | e
vettore: 2 4 | blu | spesso | $(2, 4)$ | e
vettore: 1 2 | accento | spesso | $(1, 2)$ | o
vettore: 2 1 | ambra | spesso | $(2, 1)$ | se
```

| Spazio | Dimensione | Una base |
|---|---|---|
| $\R^n$ | $n$ | la base canonica $e_1, \dots, e_n$ |
| polinomi di grado al massimo $n$ | $n + 1$ | $1, x, \dots, x^n$ |
| matrici $2 \times 2$ | 4 | le quattro matrici con un solo 1 |
| matrici $3 \times 3$ simmetriche | 6 | una per ogni casella sulla diagonale e sopra |

- Un vettore da solo è dipendente solo se è zero; due vettori solo se uno è multiplo dell'altro. Con tre o più, guardarli a coppie **non basta**.
- Più vettori della dimensione: sicuramente dipendenti. Meno: sicuramente non generano.
- Ogni vettore si scrive **in un solo modo** come combinazione dei vettori di una base.

> [!METODO] «Sono generatori e/o indipendenti?»
> 1. Conta i vettori e confrontali con la dimensione.
> 2. Cerca i doppioni: un vettore che è combinazione degli altri.
> 3. Togliendo i doppioni restano $r$ vettori: sono indipendenti se non hai tolto niente, generano se $r$ è la dimensione.

::: prova Qual è la dimensione dello spazio dei polinomi di grado al massimo 3?
4: la base è $1, x, x^2, x^3$. L'errore tipico è dire 3, dimenticando il numero 1.
:::

> [!RICORDA]
> - Indipendenti: l'unica combinazione nulla è quella con tutti i coefficienti zero.
> - Dimensione = numero di vettori di una base. Con il numero giusto basta controllare l'indipendenza.

## L08 · Matrici, prodotto e traccia (mer 21/10)

Una matrice è una tabella di numeri; la sua taglia si scrive righe per colonne. Il prodotto riga per colonna funziona come il conto della spesa: quantità per prezzi, poi si somma.

| Operazione | Che cosa fa | Da ricordare |
|---|---|---|
| trasposta ${}^tA$ | le righe diventano colonne | ${}^t(AB) = {}^tB\,{}^tA$, con l'ordine girato |
| rango | quante colonne non si ottengono dalle altre | contando le righe viene lo stesso numero |
| prodotto $AB$ | casella $(i, j)$: riga $i$ di $A$ per colonna $j$ di $B$ | $A$ $m \times n$ e $B$ $n \times p$ danno $m \times p$ |
| traccia $\tr A$ | somma della diagonale, solo per matrici quadrate | $\tr(AB) = \tr(BA)$ |

- **L'ordine conta**: di solito $AB \ne BA$, e può anche darsi che $AB$ esista e $BA$ no.
- Un prodotto può dare la matrice nulla anche se nessuno dei due fattori è nullo.
- Per la traccia di un prodotto servono **solo le caselle della diagonale**: non serve calcolare tutto il prodotto.

::: prova $A$ è $2 \times 3$ e $B$ è $3 \times 4$. Che taglia ha $AB$? Esiste $BA$?
$AB$ è $2 \times 4$. $BA$ no: $B$ ha 4 colonne e $A$ ha 2 righe.
:::

> [!RICORDA]
> - Le taglie interne devono essere uguali; il risultato ha le taglie esterne.
> - La traccia di un prodotto non cambia scambiando i fattori.

## L09 · Il determinante (gio 22/10)

Il determinante è un numero che si calcola da una matrice quadrata. Per una matrice $2 \times 2$ è «diagonale meno l'altra diagonale», e senza segno è l'area del parallelogramma che ha per lati le due colonne.

```grafico
titolo: Il parallelogramma con lati ${}^t(3, 1)$ e ${}^t(1, 2)$ ha area $3 \cdot 2 - 1 \cdot 1 = 5$
x: -0.5 4.5
y: -0.5 3.5
poligono: 0 0 3 1 4 3 1 2 | verde
vettore: 3 1 | accento | spesso | $A^1$ | se
vettore: 1 2 | blu | spesso | $A^2$ | no
```

- La definizione delle dispense somma $n!$ prodotti con un segno: è la parte teorica, e all'esame non si usa direttamente.
- Matrice **triangolare**: prodotto dei numeri sulla diagonale.
- **Sviluppo di Laplace**: si sceglie la riga o la colonna con più zeri; ogni casella diversa da zero dà un pezzo, con il segno a scacchiera ($+$ nella casella $(1, 1)$) e il determinante della sottomatrice senza quella riga e quella colonna.
- **Tre regole**: una riga di zeri dà determinante 0; moltiplicare una riga per un numero moltiplica il determinante per quel numero; per questo $\det(2A) = 2^n \det A$ per una matrice $n \times n$.

> [!METODO] Il determinante all'esame, in ordine
> 1. È quadrata? Se no, non esiste.
> 2. È triangolare? Prodotto della diagonale.
> 3. Ci sono numeri comuni da tirare fuori da una riga o da una colonna?
> 4. Laplace lungo la riga o la colonna con più zeri; per una $3 \times 3$ finale, Sarrus.

::: prova Quanto vale il determinante di $\begin{pmatrix} 2 & 5 & 1 \\ 0 & 3 & 7 \\ 0 & 0 & 4 \end{pmatrix}$?
$2 \cdot 3 \cdot 4 = 24$: la matrice è triangolare superiore.
:::

> [!RICORDA]
> - Solo le matrici quadrate hanno determinante.
> - Laplace: la riga o la colonna con più zeri, e i segni a scacchiera.

## Verso l'esame

- **Dimensioni e basi** (L07): dimensione di spazi di matrici, di uno Span o di un sottospazio di polinomi; «generatori e/o indipendenti?»; quale insieme è una base.
- **Matrici** (L08): «quale identità vale?» tra $AB$, $BA$, $A$ e $B$; la traccia di un prodotto, anche con una matrice non quadrata; un rango.
- **Determinante** (L09): matrici grandi piene di zeri, numeri come $\pi$ ed $e$ da tirare fuori, e il tranello della matrice non quadrata. Dalla prossima lezione anche il determinante di un prodotto.
- La prova: 10 quiz a 5 risposte e 2 problemi da 11 punti, 2 ore, niente calcolatrice, 4 facciate scritte a mano. Appelli 2026/27: venerdì 22/01/2027 e venerdì 05/02/2027, alle 14:00.

## Domande di ripasso

::: domanda Quando dei vettori sono linearmente indipendenti?
Quando l'unica combinazione lineare che dà il vettore zero è quella con tutti i coefficienti uguali a zero.
:::

::: domanda Che cos'è la dimensione di uno spazio vettoriale?
Il numero di vettori di una sua base: tutte le basi ne hanno lo stesso numero.
:::

::: domanda Hai 3 vettori in uno spazio di dimensione 3. Che cosa devi controllare per sapere se sono una base?
Solo che siano indipendenti: con il numero giusto di vettori, l'indipendenza basta.
:::

::: domanda Quando si può fare il prodotto $AB$, e che taglia ha?
Quando le colonne di $A$ sono tante quante le righe di $B$. Se $A$ è $m \times n$ e $B$ è $n \times p$, $AB$ è $m \times p$.
:::

::: domanda Quanto vale ${}^t(AB)$?
${}^tB\,{}^tA$: si trasporta e si gira l'ordine.
:::

::: domanda Come si calcola il determinante di una matrice triangolare?
È il prodotto dei numeri sulla diagonale.
:::

## Quiz d'esame

Tutte domande vere degli appelli di Algebra lineare e Geometria, con le risposte delle soluzioni ufficiali, ricontrollate nelle lezioni L07–L09 con i conti scritti per esteso.

```quiz
D: Appello del 16/01/2025, domanda 2. I polinomi $1$, $x$, $x^2$ e $1 + 2x + x^2$ di $\R_2[x]$ sono generatori e/o linearmente indipendenti?
+ Sono generatori, ma non linearmente indipendenti
- Sono linearmente indipendenti, ma non generatori
- Non sono né linearmente indipendenti né generatori
- La domanda è mal posta: i polinomi non sono vettori
- Sono sia generatori che linearmente indipendenti
= Sono 4 in uno spazio di dimensione 3: c'è per forza un doppione, ed è $1 + 2x + x^2 = 1 + 2 \cdot x + x^2$. I primi tre sono la base canonica, quindi generano. La risposta più insidiosa è «mal posta»: i polinomi sono vettori dello spazio dei polinomi.

D: Appello del 15/01/2026, domanda 4. La dimensione dello spazio $S(3)$ delle matrici $3 \times 3$ simmetriche è:
+ sei
- nove
- zero
- tre
- $S(3)$ non ha una dimensione perché non è uno spazio vettoriale
= Una matrice simmetrica $3 \times 3$ è decisa dai 6 numeri sulla diagonale e sopra: quelli sotto sono copie allo specchio. La risposta più insidiosa è nove, la dimensione di tutte le matrici $3 \times 3$.

D: Appello del 07/09/2026, domanda 2. Con $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $D = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$, $E = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $F = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, quale insieme forma una base di $M(2, \R)$?
+ $\{A, B, E, F\}$
- $\{A, B, F\}$
- $\{A, C, D, E\}$
- $\{B, C, D, E, F\}$
- $\{B, C, F\}$
= Una base di $M(2, \R)$ ha 4 elementi: restano solo due risposte. In $\{A, C, D, E\}$ c'è un doppione, $C + D = A$. In $\{A, B, E, F\}$ la combinazione nulla dà, casella per casella, tutti i coefficienti zero: è indipendente, quindi base. La risposta più insidiosa è proprio quella con il doppione.

D: Appello del 15/01/2026, domanda 1. Con $A = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$, quale identità vale?
+ $AB = BA$
- $BA = B$
- $AB = B$
- $AB = A$
- $BA = A$
= Facendo i conti riga per colonna, $AB$ e $BA$ sono tutte e due la matrice identità: le due matrici sono una l'inversa dell'altra. Di solito $AB \ne BA$: qui no. La risposta più insidiosa è scegliere senza calcolare, pensando che $AB = BA$ sia sempre falso.

D: Appello del 10/07/2025, domanda 9. Data la matrice $A = \begin{pmatrix} 2 & 1 \\ 0 & 1 \\ 0 & 1 \end{pmatrix}$, la traccia di $A \cdot {}^tA$ è:
+ 7
- 9
- non si può calcolare, poiché $A$ non è una matrice quadrata
- 6
- 0
= $A \cdot {}^tA$ è $3 \times 3$, quindi quadrata. Ogni casella della diagonale è una riga di $A$ per sé stessa: $5 + 1 + 1 = 7$. La risposta più insidiosa è «non si può calcolare»: la traccia si chiede del prodotto, non di $A$.

D: Appello del 02/09/2025, domanda 3. Il determinante di $\begin{pmatrix} 1 & 2 & 0 & 0 & 0 \\ 0 & 1 & 3 & 0 & 0 \\ 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 & 2 \\ 1 & 0 & 0 & 0 & 1 \end{pmatrix}$ è:
+ 13
- 12
- 0
- 11
- 1
= Laplace lungo la prima colonna: la casella $(1, 1)$ dà una sottomatrice triangolare con determinante 1, la casella $(5, 1)$, con segno più, una triangolare con determinante $2 \cdot 3 \cdot 1 \cdot 2 = 12$. In tutto 13. La risposta più insidiosa è 12, di chi dimentica il primo pezzo.

D: Appello del 10/07/2025, domanda 4. Sia $A = \begin{pmatrix} 1 & -1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 2 & -1 & 0 \end{pmatrix}$. Qual è il determinante di $A$?
+ $\det(A)$ non è definito
- $1$
- $0$
- $2$
- $-1$
= La matrice ha 3 righe e 4 colonne: non è quadrata, e il determinante non esiste. La risposta più insidiosa è $-1$, il determinante della parte $3 \times 3$ a sinistra.

D: Appello del 03/06/2026, domanda 2. Il determinante di $\begin{pmatrix} 1 & e & 1 & 1 \\ \pi & 2\pi e & 3\pi & \pi \\ 1 & e & 2 & 0 \\ 0 & e & 0 & 3 \end{pmatrix}$ è uguale a:
+ $\pi e$
- $1$
- $0$
- $\pi + e$
- $6 + 2\pi e$
= Si tira fuori $\pi$ dalla seconda riga ed $e$ dalla seconda colonna; resta una matrice di numeri interi con determinante 1, calcolato con Laplace lungo la quarta riga. La risposta più insidiosa è 1: è il determinante dopo aver tirato fuori $\pi$ ed $e$, che vanno rimoltiplicati.
```

## Fonti

- Le lezioni complete: [L07 · Spazi vettoriali III](L07_spazi_vettoriali_3.html), [L08 · Matrici I](L08_matrici_1.html), [L09 · Matrici II](L09_matrici_2.html), con gli esempi, i quiz e gli esercizi.
- R. Buzano, M. Radeschi, dispense 2026 di Algebra lineare e Geometria, pp. 31–44.
- Quiz degli appelli del 16/01/2025, 10/07/2025, 02/09/2025, 15/01/2026, 03/06/2026 e 07/09/2026, con le soluzioni ufficiali.
