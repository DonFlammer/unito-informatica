---
corso: FDA
lezione: "18"
titolo: Il principio di induzione e gli invarianti di ciclo
data: 2026-11-12
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 18 · Libro, parte 2, §2.4
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 18 di Fondamenti dell'Informatica (canale B): il principio di induzione del §2.4, passo base e
  passo induttivo, una disuguaglianza con il fattoriale, una divisibilità, la scacchiera con un quadretto mancante
  ricoperta di tromini, l'invariante di ciclo per il fattoriale (esempio 2.4.8) e il quiz sugli invarianti della
  simulazione 2 del 2023/24.
lede: >-
  L'induzione dimostra una frase per tutti i numeri naturali con due sole verifiche: il primo caso, e il passaggio da
  un caso al successivo. È anche il modo in cui si dimostra che un ciclo calcola quello che deve: si trova una
  proprietà che resta vera a ogni giro, l'invariante, e la si dimostra per induzione sul numero di giri.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 2), §2.4, fino all'esempio 2.4.8
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 2), §2.4 «Mathematical Induction», con
  le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; F. Cardone, lucidi
  «Introduzione alla correttezza dei programmi: il principio di induzione» e «Induzione e ricorsione» (Moodle del
  canale A); simulazione d'esame 2 del 2023/24, quiz 7; diario del canale B
appunti_html: appunti/FDA/18_induzione.html
genera_html: true
---

## In breve

- Il **principio di induzione** serve a dimostrare che una frase $S(n)$ vale per **ogni** intero positivo $n$.
- Si fanno due verifiche. Il **passo base**: $S(1)$ è vera. Il **passo induttivo**: se la frase vale per un numero, vale anche per il successivo.
- Nel passo induttivo si suppone $S(n)$, che si chiama **ipotesi induttiva**, e si dimostra $S(n + 1)$. Non si suppone quello che si vuole dimostrare: si suppone il caso prima.
- La base può partire da un numero diverso da 1: allora la frase è dimostrata da lì in poi.
- L'induzione non riguarda solo le formule: dimostra anche che una scacchiera con un quadretto mancante si ricopre con pezzi da tre quadretti.
- Un **invariante di ciclo** è una frase vera prima del ciclo e dopo ogni giro. Si dimostra per induzione sul numero di giri.
- Invariante più condizione di uscita danno il risultato del ciclo: per il fattoriale, l'invariante `fact == i!` e l'uscita con `i == n` danno `fact == n!`.
- Il docente ha omesso la formula della somma dei primi $n$ interi e gli esempi 2.4.4 e 2.4.6.

> [!CANALI]
> Nel canale B è la lezione di giovedì 12/11, dalle 9 alle 11. Per il docente è la lezione 19: qui è la 18. **L'ho scritta prima della lezione**, sul diario del canale B: «Capitolo 2.4 Induzione. Esempio 2.4.8: invariante di ciclo per il fattoriale, svolto sia informalmente che come quiz. Omessi: equazione 2.4.4 (somma primi n interi positivi) e esempi 2.4.4, 2.4.6 (Somma di potenze, Numero elementi insieme delle parti)». Quali esempi abbia svolto davvero in aula non lo so.
>
> **Gli esempi del libro.** Il libro non ce l'ho; ho le soluzioni ufficiali degli esercizi e delle domande di ripasso. I numeri del diario coincidono con quelli dell'edizione originale di Johnsonbaugh, dove gli esempi non omessi sono: la disuguaglianza $n! \ge 2^{n-1}$, la divisibilità di $5^n - 1$ per 4, la scacchiera con i tromini (la soluzione dell'esercizio 40 cita la sua figura 2.4.6) e l'invariante del fattoriale. Li metto tutti e quattro, con le dimostrazioni scritte da me.
>
> **Che cosa è omesso.** La formula $1 + 2 + \dots + n = \frac{n(n + 1)}{2}$, la somma di potenze (somma geometrica) e il numero di elementi dell'insieme delle parti. Il numero dei sottoinsiemi, dimostrato per induzione, è nella [lezione D02 di Matematica Discreta](../MDAG/D02_complementare_induzione_partizioni.html), che spiega l'induzione con altri esempi. Qui queste tre cose non le uso; una somma compare solo in un esercizio del libro, in fondo.
>
> **L'invariante.** Per il fattoriale seguo lo schema dei lucidi di Cardone (canale A, aperti agli ospiti), che dimostrano l'invariante per induzione sul numero di giri del ciclo. Il docente lo ha svolto «anche come quiz»: i suoi quiz non li ho, e al loro posto c'è il quiz 7 della simulazione 2 del 2023/24, che è proprio «seleziona gli invarianti».
>
> Servono la [lezione 09](09_quantificatori.html) (funzioni proposizionali, «per ogni»), la [08](08_argomentazioni_regole_inferenza.html) (modus ponens) e la [13](13_dimostrazioni_dirette_controesempi.html) (dimostrazione diretta).

## L'idea: una fila di frasi

Una frase che comincia con «per ogni numero» non è una frase sola: è una fila infinita di frasi, una per ogni numero. Prendo «$5^n - 1$ è divisibile per 4». Per $n = 1$ dice che 4 è divisibile per 4; per $n = 2$ che lo è 24; per $n = 3$ che lo è 124. Si possono controllare le prime dieci o le prime mille, ma non tutte.

Nella [lezione 09](09_quantificatori.html) una frase con una variabile si chiamava **funzione proposizionale**: la scrivo $S(n)$, e $S(1)$, $S(2)$, $S(3)$ sono le frasi della fila. L'induzione le dimostra tutte con due verifiche:

1. la **prima** frase della fila è vera;
2. ogni frase **passa la verità alla successiva**: se una è vera, lo è anche quella dopo.

È una fila di tessere del domino. La prima cade perché la si spinge; ogni tessera, cadendo, fa cadere la successiva. Allora cadono tutte, per quanto lunga sia la fila.

```grafico
titolo: Le frasi S(1), S(2), S(3)… in fila. Il passo base dimostra la prima (in verde). Il passo induttivo è la freccia: da ogni frase si passa alla successiva. Con la prima frase e tutte le frecce si raggiunge qualunque frase della fila
x: 0 12.4
y: 0 3.0
assi: no
griglia: no
proporzioni: libere
poligono: 0.4 1.0 2.2 1.0 2.2 2.0 0.4 2.0 | verde | pieno
testo: 1.3 1.5 | verde | "S(1)"
freccia: 2.3 1.5 3.1 1.5 | ambra
poligono: 3.2 1.0 5.0 1.0 5.0 2.0 3.2 2.0 | blu | pieno
testo: 4.1 1.5 | blu | "S(2)"
freccia: 5.1 1.5 5.9 1.5 | ambra
poligono: 6.0 1.0 7.8 1.0 7.8 2.0 6.0 2.0 | blu | pieno
testo: 6.9 1.5 | blu | "S(3)"
freccia: 7.9 1.5 8.7 1.5 | ambra
poligono: 8.8 1.0 10.6 1.0 10.6 2.0 8.8 2.0 | blu | pieno
testo: 9.7 1.5 | blu | "S(4)"
freccia: 10.7 1.5 11.5 1.5 | ambra
testo: 11.9 1.5 | grigio | "…"
testo: 1.3 0.5 | verde | "passo base"
testo: 6.9 2.5 | ambra | "passo induttivo: da ognuna alla successiva"
```

::: prova Se si dimostra solo che ogni frase passa la verità alla successiva, senza la prima, che cosa si sa?
Niente: nessuna tessera è stata spinta. Tutte le frasi potrebbero essere false.
:::

> [!RICORDA]
> - Una frase «per ogni $n$» è una fila infinita di frasi.
> - Servono tutte e due le verifiche: la prima frase, e il passaggio alla successiva.

## Il principio di induzione (libro, §2.4)

Il principio dice in forma precisa quello che fanno le tessere. È la risposta ufficiale alla domanda di ripasso 1 del §2.4.

> [!TEOREMA] Principio di induzione
> Sia $S(n)$ una funzione proposizionale il cui dominio sono gli interi positivi. Supponiamo che:
> 1. $S(1)$ sia vera (**passo base**);
> 2. per ogni $n \ge 1$, se $S(n)$ è vera allora $S(n + 1)$ è vera (**passo induttivo**).
>
> Allora $S(n)$ è vera per ogni intero positivo $n$.

**Come si legge.** Il passo base è una verifica su un numero solo. Il passo induttivo è una frase «se… allora», da dimostrare per un $n$ generico: si **suppone** $S(n)$ e si dimostra $S(n + 1)$. La supposizione $S(n)$ si chiama **ipotesi induttiva**. In simboli il passo induttivo è $\forall n\,(S(n) \to S(n + 1))$ e la conclusione è $\forall n\,S(n)$.

Perché funziona: è il modus ponens della [lezione 08](08_argomentazioni_regole_inferenza.html), ripetuto. Da $S(1)$ e da «se $S(1)$ allora $S(2)$» segue $S(2)$. Da $S(2)$ e da «se $S(2)$ allora $S(3)$» segue $S(3)$. Per arrivare a $S(100)$ bastano 99 applicazioni: il principio le riassume tutte.

> [!TRAPPOLA] Non si suppone quello che si vuole dimostrare
> Nel passo induttivo si suppone $S(n)$ per **un** numero $n$, e si dimostra il caso dopo. Non si suppone «$S(n)$ vale per ogni $n$»: quella è la conclusione. È come dire «se questa tessera cade, cade la prossima», senza dire che cadono tutte.

La base non deve essere per forza 1. Se si dimostra $S(4)$ e il passo induttivo per ogni $n \ge 4$, la conclusione vale per ogni $n \ge 4$. Cardone, nel canale A, parte da 0: per le proprietà dei programmi è comodo, perché «dopo 0 giri» vuol dire «prima del ciclo».

::: prova In una dimostrazione per induzione di «$2^n > n$ per ogni $n \ge 1$», qual è l'ipotesi induttiva e che cosa bisogna dimostrare nel passo?
L'ipotesi induttiva è $2^n > n$, per un $n$ fissato. Va dimostrato $2^{n+1} > n + 1$.
:::

> [!RICORDA]
> - Passo base: $S(1)$. Passo induttivo: suppongo $S(n)$, dimostro $S(n + 1)$.
> - L'ipotesi induttiva è $S(n)$ per un $n$ generico, non per tutti.

## Una disuguaglianza con il fattoriale

Il **fattoriale** di un numero è il prodotto di tutti i numeri da 1 fino a lui, e si scrive con il punto esclamativo: $n!$. Quindi $4! = 1 \cdot 2 \cdot 3 \cdot 4 = 24$. Per convenzione $0! = 1$. La proprietà che serve: per passare da un fattoriale al successivo si moltiplica per il numero nuovo, $(n + 1)! = (n + 1) \cdot n!$.

La frase da dimostrare: $n! \ge 2^{n-1}$ per ogni $n \ge 1$. Prima i numeri:

| $n$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $n!$ | 1 | 2 | 6 | 24 | 120 |
| $2^{n-1}$ | 1 | 2 | 4 | 8 | 16 |

Nella tabella la frase è vera, ma cinque casi non sono una dimostrazione.

> [!ESEMPIO] · $n! \ge 2^{n-1}$ per ogni $n \ge 1$
> **Passo base.** Per $n = 1$: $1! = 1$ e $2^0 = 1$. Vero, $1 \ge 1$.
>
> **Passo induttivo.** Suppongo $n! \ge 2^{n-1}$ (ipotesi induttiva). Devo dimostrare $(n + 1)! \ge 2^n$.
>
> $(n + 1)! = (n + 1) \cdot n!$, per la proprietà del fattoriale.
>
> $(n + 1) \cdot n! \ge (n + 1) \cdot 2^{n-1}$, per l'ipotesi induttiva.
>
> $(n + 1) \cdot 2^{n-1} \ge 2 \cdot 2^{n-1} = 2^n$, perché $n + 1 \ge 2$ quando $n \ge 1$.
>
> Mettendo in fila: $(n + 1)! \ge 2^n$. Per il principio di induzione la frase vale per ogni $n \ge 1$.

Lo schema è sempre questo: si scrive il caso $n + 1$, lo si spezza in modo che **compaia il caso $n$**, e lì si usa l'ipotesi induttiva. Qui il caso $n$ compare perché $(n + 1)!$ contiene $n!$.

::: prova Nel passo induttivo qui sopra, in quale riga si usa l'ipotesi induttiva?
Nella seconda: è lì che $n!$ viene sostituito con $2^{n-1}$, che è più piccolo o uguale.
:::

> [!RICORDA]
> - Nel caso $n + 1$ va fatto comparire il caso $n$: lì entra l'ipotesi induttiva.
> - Se l'ipotesi induttiva non viene mai usata, qualcosa non va.

## Una divisibilità

La frase dell'inizio: $5^n - 1$ è divisibile per 4, per ogni $n \ge 1$. I primi casi: 4, 24, 124, 624. Sono tutti multipli di 4.

> [!ESEMPIO] · $5^n - 1$ è divisibile per 4, per ogni $n \ge 1$
> **Passo base.** Per $n = 1$: $5^1 - 1 = 4$, divisibile per 4.
>
> **Passo induttivo.** Suppongo che $5^n - 1$ sia divisibile per 4 (ipotesi induttiva). Devo dimostrare che lo è $5^{n+1} - 1$.
>
> Faccio comparire il caso $n$:
> $$5^{n+1} - 1 = 5 \cdot 5^n - 1 = 5 \cdot (5^n - 1) + 4.$$
>
> Il primo addendo è divisibile per 4, perché lo è $5^n - 1$ per l'ipotesi induttiva. Il secondo è 4. La somma di due multipli di 4 è un multiplo di 4.
>
> Per il principio di induzione la frase vale per ogni $n \ge 1$.

Il passaggio che va trovato è la riscrittura con $5^n - 1$ dentro. Il controllo: $5 \cdot (5^n - 1) + 4 = 5^{n+1} - 5 + 4 = 5^{n+1} - 1$.

::: prova Riscrivi $7^{n+1} - 1$ in modo che compaia $7^n - 1$ (serve per l'esercizio 22 del libro).
$7^{n+1} - 1 = 7 \cdot (7^n - 1) + 6$. La soluzione ufficiale scrive la stessa cosa così: $7^n - 1 + 6 \cdot 7^n$.
:::

> [!RICORDA]
> - Divisibilità per induzione: si riscrive il caso $n + 1$ come multiplo del caso $n$ più un multiplo evidente.

## Una scacchiera e i tromini

L'induzione non riguarda solo le formule. Un **tromino** è un pezzo a forma di L fatto di tre quadretti. Una scacchiera **difettosa** è una scacchiera a cui manca un quadretto. La domanda: una scacchiera difettosa $2^n \times 2^n$ si può ricoprire con i tromini, senza sovrapposizioni e senza uscire dai bordi, qualunque sia il quadretto mancante?

Per $n = 1$ la scacchiera è $2 \times 2$, e senza un quadretto restano tre quadretti a L: è un tromino. Per $n = 2$ è una $4 \times 4$ con un buco, e il disegno mostra l'idea che vale in generale.

```grafico
titolo: Il passo induttivo su una scacchiera 4 × 4 a cui manca un quadretto (rosa). Si divide in quattro scacchiere 2 × 2 (linee blu). Si mette un tromino al centro (ambra), che prende un quadretto da ciascuna delle tre scacchiere senza buco. Ora a ognuna delle quattro manca un quadretto: sono casi più piccoli
x: 0 12.4
y: 0 4.8
assi: no
griglia: no
proporzioni: libere
poligono: 4.2 3.4 5.2 3.4 5.2 4.4 4.2 4.4 | rosa | pieno
poligono: 5.2 3.4 6.2 3.4 6.2 1.4 4.2 1.4 4.2 2.4 5.2 2.4 | ambra | pieno
segmento: 3.2 0.4 3.2 4.4 | grigio
segmento: 4.2 0.4 4.2 4.4 | grigio | sottile
segmento: 6.2 0.4 6.2 4.4 | grigio | sottile
segmento: 7.2 0.4 7.2 4.4 | grigio
segmento: 3.2 0.4 7.2 0.4 | grigio
segmento: 3.2 1.4 7.2 1.4 | grigio | sottile
segmento: 3.2 3.4 7.2 3.4 | grigio | sottile
segmento: 3.2 4.4 7.2 4.4 | grigio
segmento: 5.2 0.4 5.2 4.4 | blu | spesso
segmento: 3.2 2.4 7.2 2.4 | blu | spesso
testo: 1.6 3.9 | rosa | "quadretto mancante"
testo: 9.4 2.4 | ambra | "tromino al centro"
testo: 9.4 0.9 | blu | "quattro scacchiere 2 × 2"
```

> [!ESEMPIO] · Ogni scacchiera difettosa $2^n \times 2^n$ si ricopre con i tromini
> **Passo base.** Per $n = 1$ la scacchiera difettosa è un tromino.
>
> **Passo induttivo.** Suppongo che ogni scacchiera difettosa $2^n \times 2^n$ si possa ricoprire (ipotesi induttiva). Prendo una scacchiera difettosa $2^{n+1} \times 2^{n+1}$.
>
> La divido in quattro scacchiere $2^n \times 2^n$. Il quadretto mancante sta in una delle quattro. Metto un tromino al centro, in modo che copra un quadretto in ciascuna delle altre tre.
>
> Ora ognuna delle quattro scacchiere ha un quadretto «fuori gioco»: quello mancante, oppure quello già coperto dal tromino centrale. Sono quattro scacchiere difettose $2^n \times 2^n$, e per l'ipotesi induttiva ognuna si ricopre.
>
> Tromino centrale più le quattro coperture: tutta la scacchiera è ricoperta.

Qui l'ipotesi induttiva si usa quattro volte, e per scacchiere con il buco in posti diversi: per questo la frase $S(n)$ dice «**ogni** scacchiera difettosa», qualunque sia il quadretto mancante. La dimostrazione è anche un algoritmo: l'ho scritto come programma e provato fino alla $32 \times 32$, che usa 341 tromini.

Un controllo sui numeri: i quadretti da coprire sono $4^n - 1$, e devono essere un multiplo di 3. Lo sono: $4 - 1 = 3$, $16 - 1 = 15$, $64 - 1 = 63$.

::: prova Quanti tromini servono per una scacchiera difettosa $8 \times 8$?
$\frac{64 - 1}{3} = 21$.
:::

> [!RICORDA]
> - L'induzione funziona anche su oggetti: si riduce un caso grande a casi più piccoli dello stesso tipo.
> - La frase da dimostrare deve valere per **ogni** posizione del buco, altrimenti l'ipotesi non si può usare.

## L'invariante di ciclo (libro, esempio 2.4.8)

Un ciclo ripete le stesse istruzioni un numero di volte che non si conosce in anticipo. Per dire con certezza che cosa calcola serve una frase sulle variabili che resti vera **a ogni giro**: si chiama **invariante di ciclo**. Il ciclo dell'esempio calcola il fattoriale di un intero `n` positivo:

```c
i = 1;
fact = 1;
while (i < n) {
    i = i + 1;
    fact = fact * i;
}
```

Prima i numeri, con `n = 4`. La tabella dice quanto valgono le variabili prima del ciclo e dopo ogni giro:

| Giri fatti | `i` | `fact` | $i!$ |
|---|---|---|---|
| 0 | 1 | 1 | 1 |
| 1 | 2 | 2 | 2 |
| 2 | 3 | 6 | 6 |
| 3 | 4 | 24 | 24 |

In ogni riga `fact` è il fattoriale di `i`. Le variabili cambiano, ma la relazione tra loro no: `fact == i!` è l'invariante.

> [!DEF] Invariante di ciclo
> Un **invariante** di un ciclo è un'affermazione sulle variabili del programma che è vera prima che il ciclo cominci e resta vera dopo ogni esecuzione del corpo del ciclo.

**Come si legge.** «Dopo ogni numero di esecuzioni del corpo», zero compreso, come dice il testo del quiz d'esame. Un invariante non è una frase vera solo alla fine, e non è una frase vera solo finché il ciclo gira.

### La dimostrazione, per induzione sul numero di giri

La frase $S(k)$ è: «dopo $k$ giri, `fact == i!`». La base è $k = 0$, cioè prima del ciclo.

> [!ESEMPIO] · `fact == i!` è un invariante
> **Passo base: dopo 0 giri.** Le due assegnazioni iniziali danno `i = 1` e `fact = 1`, e $1! = 1$. Vero.
>
> **Passo induttivo.** Suppongo che dopo $k$ giri valga `fact == i!` (ipotesi induttiva), e che il ciclo faccia un altro giro. Chiamo $i'$ e $fact'$ i valori nuovi.
>
> La prima istruzione dà $i' = i + 1$.
>
> La seconda dà $fact' = fact \cdot i' = i! \cdot (i + 1)$, usando l'ipotesi induttiva al posto di $fact$.
>
> E $i! \cdot (i + 1) = (i + 1)! = i'!$. Quindi dopo $k + 1$ giri vale ancora `fact == i!`, con i valori nuovi.

### Dall'invariante al risultato

L'invariante da solo non dice che il programma è giusto. Serve anche guardare **quando il ciclo finisce**.

1. Il ciclo finisce quando la condizione `i < n` è falsa, cioè quando `i >= n`.
2. `i` parte da 1 e cresce di uno alla volta finché è minore di `n`: quindi non supera mai `n`. Anche `i <= n` è un invariante, se `n` è almeno 1.
3. All'uscita valgono insieme `i >= n` e `i <= n`: quindi `i == n`.
4. Per l'invariante `fact == i!`, e `i` è `n`: quindi **`fact == n!`**.

Lo schema vale per ogni ciclo: **invariante più condizione di uscita dà il risultato**.

Ho trascritto il ciclo in C con un `assert` dell'invariante prima del ciclo e dopo ogni giro, e l'ho provato per `n` da 1 a 15: nessun `assert` fallisce, e il risultato è sempre il fattoriale. Con `n = 0` il ciclo non parte e `fact` vale 1, che è $0!$; ma `i <= n` è falsa, perché `i` vale 1: per questo l'esempio chiede `n` positivo.

Nei lucidi di Cardone il ciclo è scritto con altre variabili e parte da zero: `x = 0; y = 1; while (x < n) { x = x + 1; y = x * y; }`. L'invariante è `y == x!`, e la dimostrazione è la stessa. Ho provato anche questa.

### Come quiz: è un invariante o no?

Per ogni affermazione si controllano la riga 0 della tabella e una riga qualsiasi dopo. Se fallisce anche solo in una, non è un invariante.

| Affermazione | Invariante? | Perché |
|---|---|---|
| `fact == i!` | sì | dimostrato qui sopra |
| `i >= 1` | sì | parte da 1 e cresce |
| `i <= n` | sì, se `n >= 1` | cresce di uno solo finché è minore di `n` |
| `i < n` | no | è falsa dopo l'ultimo giro, quando `i == n` |
| `fact == n!` | no | è vera solo alla fine: con `n = 4`, dopo 1 giro `fact` vale 2 |
| `i == n` | no | all'inizio `i` vale 1 |
| `fact >= 1` | sì | ma non serve: non dice che cosa calcola il ciclo |

> [!TRAPPOLA] «Vero alla fine» non è «invariante»
> `fact == n!` è quello che si vuole ottenere, ed è vero all'uscita. Non è un invariante, perché durante il ciclo è falso. L'invariante è la versione «in corso d'opera» del risultato: ha `i` al posto di `n`.

::: prova Nel ciclo `i = 0; s = 0; while (i < n) { s = s + 2 * i + 1; i = i + 1; }`, quanto valgono `i` e `s` dopo 0, 1, 2 e 3 giri? Quale invariante li lega?
`i`: 0, 1, 2, 3. `s`: 0, 1, 4, 9. L'invariante è `s == i * i`: il ciclo somma i primi numeri dispari e ottiene un quadrato. All'uscita `i == n`, quindi `s` è il quadrato di `n`. Provato con un programma per `n` da 0 a 15.
:::

> [!RICORDA]
> - Invariante: vero prima del ciclo e dopo ogni giro. Si dimostra per induzione sul numero di giri.
> - Base = prima del ciclo. Passo = un giro, con i valori vecchi e quelli nuovi.
> - Invariante più condizione di uscita: il risultato.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $S(n)$ | «esse di enne» | la frase su $n$ da dimostrare | $S(n)$: «$5^n - 1$ è divisibile per 4» |
| $S(n) \to S(n + 1)$ | «se vale per n, vale per n più 1» | il passo induttivo | da $S(3)$ a $S(4)$ |
| $n!$ | «enne fattoriale» | il prodotto dei numeri da 1 a $n$ | $4! = 24$ |
| $2^n \times 2^n$ | «due alla enne per due alla enne» | il lato della scacchiera | $n = 2$: $4 \times 4$ |
| $i'$, $fact'$ | «i primo», «fact primo» | i valori delle variabili dopo un giro | $i' = i + 1$ |
| `fact == i!` | «fact uguale a i fattoriale» | l'invariante del ciclo | riga 2: `6 == 3!` |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Il quiz «seleziona gli invarianti»**: c'era nella simulazione 2 del 2023/24 (quiz 7). Si risolve con la tabella dei valori.
2. **Domande sul principio**: che cosa si suppone nel passo induttivo, da dove parte la base. Il quiz sul principio di induzione della simulazione 1 riguarda la forma forte, della prossima lezione.
3. **Una dimostrazione per induzione** nella domanda aperta: base, ipotesi induttiva scritta, passo con l'ipotesi usata in modo esplicito.

### Una domanda vera, letta insieme

**Simulazione 2 del 2023/24, quiz 7.** Il testo: «Sia `n >= 0` un intero. Considera il seguente frammento di programma. Seleziona gli invarianti (= "loop invariant"), cioè le affermazioni vere dopo ogni numero di esecuzioni del corpo del while.»

```c
i = 1;
s = 0;
while (i < n) {
    s = s + i;
    i++;
}
s = s + i;
```

Le affermazioni: `s == 1 + … + i`; `i == n`; `s == 1 + … + n`; `i >= 1`; `i < n`; `s == 1 + … + (i - 1)`.

**In pratica chiede:** per ognuna, se è vera prima del ciclo e dopo ogni giro.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: la tabella**, con `n = 4`. Dopo 0 giri: `i = 1`, `s = 0`. Dopo 1: `i = 2`, `s = 1`. Dopo 2: `i = 3`, `s = 3`. Dopo 3: `i = 4`, `s = 6`, e il ciclo si ferma.
>
> **Passo 2: la riga 0 scarta subito tre affermazioni.** `s == 1 + … + i` direbbe $0 = 1$: no. `i == n` direbbe $1 = 4$: no. `s == 1 + … + n` direbbe $0 = 10$: no.
>
> **Passo 3: l'ultima riga ne scarta un'altra.** `i < n` direbbe $4 < 4$: no.
>
> **Passo 4: le due rimaste.** `i >= 1`: `i` parte da 1 e cresce, sì. `s == 1 + … + (i - 1)`: nella riga 0 la somma è vuota e vale 0; nelle altre $1 = 1$, $3 = 1 + 2$, $6 = 1 + 2 + 3$. Sì.
>
> **Il passo induttivo della seconda.** Se $s = 1 + \dots + (i - 1)$, dopo un giro $s' = s + i = 1 + \dots + i$ e $i' = i + 1$: quindi $s' = 1 + \dots + (i' - 1)$.
>
> Gli invarianti sono `i >= 1` e `s == 1 + … + (i - 1)`: le stesse risposte segnate nella copia della simulazione che ho.

L'ultima istruzione, fuori dal ciclo, aggiunge l'ultimo numero: all'uscita `i == n`, quindi `s` passa da $1 + \dots + (n - 1)$ a $1 + \dots + n$. Ho provato il frammento: con `n = 4` dà 10, con `n = 10` dà 55. Con `n = 0` dà 1 e non 0: il frammento è giusto solo da 1 in su.

> [!METODO] Il quiz «seleziona gli invarianti»
> 1. Scegli un `n` piccolo, 3 o 4, e scrivi la tabella: una riga prima del ciclo e una dopo ogni giro.
> 2. Controlla ogni affermazione sulla **riga 0**: molte cadono lì.
> 3. Controlla le rimaste sull'**ultima riga**: cadono quelle che ripetono la condizione del ciclo.
> 4. Per quelle che restano, guarda il passo: da una riga alla successiva la relazione si conserva?

### Errori da evitare

- Dimenticare il passo base, o farlo per il numero sbagliato.
- Nel passo induttivo, supporre $S(n + 1)$ invece di dimostrarla.
- Non usare mai l'ipotesi induttiva.
- Scambiare l'invariante con il risultato finale, o con la condizione del ciclo.
- Dimenticare la riga «dopo 0 giri» nella tabella.

## Quiz

```quiz
D: Simulazione 2 del 2023/24, quiz 7. Nel frammento `i = 1; s = 0; while (i < n) { s = s + i; i++; } s = s + i;`, quale di queste affermazioni è un invariante del ciclo?
+ `s == 1 + … + (i - 1)`
- `s == 1 + … + i`
- `s == 1 + … + n`
- `i == n`
- `i < n`
= Prima del ciclo `i = 1` e `s = 0`, la somma vuota; a ogni giro si aggiunge `i` e poi `i` cresce. Nella simulazione è invariante anche `i >= 1`. La più insidiosa è la seconda: prima del ciclo direbbe $0 = 1$.

D: Che cosa si suppone nel passo induttivo di una dimostrazione di «$S(n)$ per ogni $n \ge 1$»?
+ che $S(n)$ sia vera per un $n$ generico
- che $S(n)$ sia vera per ogni $n$
- che $S(n + 1)$ sia vera
- che $S(1)$ sia falsa
- niente: si dimostra $S(n + 1)$ da zero
= È l'ipotesi induttiva. La più insidiosa è la seconda: supporre $S(n)$ per ogni $n$ vuol dire supporre la conclusione.

D: Si dimostrano $S(4)$ e, per ogni $n \ge 4$, «se $S(n)$ allora $S(n + 1)$». Che cosa si può concludere?
+ $S(n)$ è vera per ogni $n \ge 4$
- $S(n)$ è vera per ogni $n \ge 1$
- $S(n)$ è vera solo per $n = 4$ e $n = 5$
- niente, perché la base deve essere $S(1)$
- $S(n)$ è falsa per $n < 4$
= La fila di tessere comincia da 4. La più insidiosa è l'ultima: sui casi prima della base il principio non dice niente, né vero né falso.

D: Nel passo induttivo di «$5^n - 1$ è divisibile per 4», quale riscrittura fa comparire il caso $n$?
+ $5^{n+1} - 1 = 5 \cdot (5^n - 1) + 4$
- $5^{n+1} - 1 = 5^n + 5 - 1$
- $5^{n+1} - 1 = (5^n - 1) + 5$
- $5^{n+1} - 1 = 5 \cdot (5^n - 1)$
- $5^{n+1} - 1 = 4 \cdot 5^n$
= Sviluppando: $5^{n+1} - 5 + 4$. La più insidiosa è la quarta, che dimentica il $+4$: $5 \cdot (5^n - 1)$ fa $5^{n+1} - 5$.

D: Nel ciclo del fattoriale `i = 1; fact = 1; while (i < n) { i = i + 1; fact = fact * i; }`, con `n = 5`, quanto vale `fact` dopo 2 giri?
N: 6
= Dopo 2 giri `i` vale 3, e per l'invariante `fact == i!`, cioè 6.

D: Nello stesso ciclo, quale affermazione **non** è un invariante?
+ `fact == n!`
- `fact == i!`
- `i >= 1`
- `fact >= 1`
- `i <= n`, con `n >= 1`
= `fact == n!` è vera solo all'uscita. La più insidiosa è `fact >= 1`: è un invariante, anche se non serve a niente.

D: Quanti tromini servono per ricoprire una scacchiera $16 \times 16$ a cui manca un quadretto?
N: 85
= I quadretti da coprire sono $256 - 1 = 255$, e ogni tromino ne copre 3.

D: Che cosa dà il risultato di un ciclo, una volta trovato l'invariante?
+ l'invariante insieme alla condizione di uscita dal ciclo
- l'invariante da solo
- la condizione del ciclo da sola
- il passo base dell'induzione
- il numero di giri
= All'uscita la condizione del ciclo è falsa: nel fattoriale `i == n`, e con `fact == i!` si ottiene `fact == n!`. La più insidiosa è «l'invariante da solo»: l'invariante vale anche a metà ciclo, quando il risultato non c'è ancora.
```

## Esercizi

::: esercizio base Riscaldamento: i primi casi
Per la frase «$n! \ge 2^{n-1}$» scrivi $S(1)$, $S(2)$ e $S(6)$, e controlla che siano vere.
::: soluzione
$S(1)$: $1 \ge 1$. $S(2)$: $2 \ge 2$. $S(6)$: $720 \ge 32$. Tutte vere. Controllare dei casi non è una dimostrazione, ma serve a capire la frase e a non sbagliare la base.
:::

::: esercizio base Riscaldamento: la tabella di un ciclo
Nel ciclo `i = 0; p = 1; while (i < n) { p = p * 2; i = i + 1; }` scrivi `i` e `p` dopo 0, 1, 2, 3 giri, e trova l'invariante.
::: soluzione
`i`: 0, 1, 2, 3. `p`: 1, 2, 4, 8. L'invariante è $p = 2^i$. Base: $1 = 2^0$. Passo: $p' = 2p = 2 \cdot 2^i = 2^{i+1} = 2^{i'}$. All'uscita `i == n`, quindi $p = 2^n$.
:::

::: esercizio medio Esercizio 22 del libro
Dimostra per induzione che $7^n - 1$ è divisibile per 6, per ogni $n \ge 1$.
::: soluzione
**Base.** $7^1 - 1 = 6$. **Passo.** Suppongo che 6 divida $7^n - 1$. Allora $7^{n+1} - 1 = 7 \cdot 7^n - 1 = (7^n - 1) + 6 \cdot 7^n$. Il primo addendo è divisibile per 6 per l'ipotesi induttiva, il secondo perché ha il fattore 6: lo è anche la somma. È la soluzione ufficiale. Controllato con un programma fino a $n = 59$.
:::

::: esercizio medio Esercizio 1 del libro
Dimostra per induzione che $1 + 3 + 5 + \dots + (2n - 1) = n^2$ per ogni $n \ge 1$.
::: soluzione
**Base.** $1 = 1^2$. **Passo.** Suppongo vera la formula per $n$. Il termine successivo è $2n + 1$, quindi $1 + \dots + (2n - 1) + (2n + 1) = n^2 + 2n + 1 = (n + 1)^2$. È la soluzione ufficiale. È la stessa proprietà dell'invariante `s == i * i` del «Prova tu» sugli invarianti.
:::

::: esercizio esame Esercizio 16 del libro: la base non è 1
Dimostra per induzione che $2^n \ge n^2$ per ogni $n \ge 4$. Puoi usare che $2n + 1 \le 2^n$ per $n \ge 3$ (esercizio 15).
::: soluzione
**Base, $n = 4$.** $2^4 = 16 \ge 16 = 4^2$. **Passo.** Suppongo $2^n \ge n^2$ con $n \ge 4$. Allora $(n + 1)^2 = n^2 + 2n + 1 \le 2^n + 2n + 1 \le 2^n + 2^n = 2^{n+1}$. La prima disuguaglianza è l'ipotesi induttiva, la seconda l'esercizio 15. È la soluzione ufficiale. La base non può essere 3: $2^3 = 8$ è minore di 9.
:::

::: esercizio difficile Un passo induttivo che funziona, per una frase falsa
Considera la frase $S(n)$: «$n + 1 < n$». Mostra che il passo induttivo si dimostra, e spiega perché la frase non è dimostrata.
::: soluzione
**Il passo.** Suppongo $n + 1 < n$. Aggiungendo 1 ai due lati: $n + 2 < n + 1$, che è $S(n + 1)$. Il passo induttivo è corretto. **Ma la base è falsa**: $S(1)$ direbbe $2 < 1$. Senza la base non si conclude niente, e infatti $S(n)$ è falsa per ogni $n$. Il passo induttivo dice solo «se una tessera cade, cade la prossima»: qui non ne cade nessuna.
:::

## Domande di ripasso

::: domanda Che cosa dice il principio di induzione?
Se $S(1)$ è vera e, per ogni $n \ge 1$, da $S(n)$ segue $S(n + 1)$, allora $S(n)$ è vera per ogni intero positivo.
:::

::: domanda Quali sono le due parti di una dimostrazione per induzione?
Il passo base, che verifica il primo caso, e il passo induttivo, che suppone $S(n)$ e dimostra $S(n + 1)$.
:::

::: domanda Che cos'è l'ipotesi induttiva?
La supposizione che $S(n)$ sia vera per un $n$ generico, usata nel passo induttivo.
:::

::: domanda Che cos'è un invariante di ciclo?
Un'affermazione sulle variabili vera prima del ciclo e dopo ogni esecuzione del corpo.
:::

::: domanda Come si dimostra un invariante?
Per induzione sul numero di giri: base prima del ciclo, passo su un giro.
:::

::: domanda Come si passa dall'invariante al risultato del ciclo?
Si unisce l'invariante alla negazione della condizione del ciclo, vera all'uscita.
:::

## Glossario

```glossario
Principio di induzione | Se S(1) è vera e da S(n) segue S(n+1) per ogni n, allora S(n) è vera per ogni intero positivo.
Passo base | La verifica del primo caso, di solito S(1).
Passo induttivo | La dimostrazione che da S(n) segue S(n+1), per un n generico.
Ipotesi induttiva | La supposizione S(n) usata nel passo induttivo.
Fattoriale | Il prodotto dei numeri da 1 a n; si scrive n!, e 0! vale 1.
Tromino | Pezzo a forma di L fatto di tre quadretti.
Scacchiera difettosa | Scacchiera a cui manca un quadretto.
Invariante di ciclo | Affermazione vera prima del ciclo e dopo ogni giro.
Condizione di uscita | La negazione della condizione del ciclo, vera quando il ciclo termina.
```

## Checklist

```checklist
- So enunciare il principio di induzione, con passo base e passo induttivo.
- So dire qual è l'ipotesi induttiva e dove la uso.
- So dimostrare per induzione una disuguaglianza come n! ≥ 2^(n−1).
- So dimostrare per induzione una divisibilità come 5^n − 1 per 4.
- So spiegare il passo induttivo della scacchiera con i tromini.
- So scrivere la tabella dei valori di un ciclo, riga 0 compresa.
- So riconoscere se un'affermazione è un invariante.
- So dimostrare l'invariante del fattoriale e ricavare il risultato all'uscita.
- So quali esempi del §2.4 sono stati omessi.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 2), §2.4 «Mathematical Induction». Il libro non ce l'ho: uso le risposte ufficiali alle domande di ripasso 1 e 2 e le soluzioni degli esercizi 1, 16, 22 e 40, pubblicate sul Moodle del canale A. Gli enunciati degli esempi (fattoriale e potenza di 2, $5^n - 1$, scacchiera difettosa, invariante del fattoriale) sono quelli dell'edizione originale; le dimostrazioni sono scritte da me.
- F. Cardone, lucidi «Introduzione alla correttezza dei programmi: il principio di induzione» e appunti «Induzione e ricorsione» (Moodle del canale A, aperto agli ospiti): la dimostrazione dell'invariante per induzione sul numero di iterazioni.
- Simulazione d'esame 2 del 2023/24, quiz 7 (testo dalla trascrizione delle schermate, con le risposte segnate da uno studente, che ho ricontrollato).
- Diario delle lezioni del canale B (Berardi), lezione 19 del docente, 12/11/2026.
- Le tabelle, i disegni, i quiz senza indicazione e gli esercizi di riscaldamento sono di questi appunti. I cicli li ho trascritti in C, compilati con `gcc -Wall -Werror` e provati con gli invarianti controllati da `assert`; le formule e la copertura con i tromini le ho controllate con un programma.
