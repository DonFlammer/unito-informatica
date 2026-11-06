---
corso: PROG1
lezione: 06B
titolo: Chiamata di funzione e ritorno
data: 2026-11-03
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 06B
descrizione: >-
  Appunti della lezione 06B di Programmazione I (canale B): lo stack delle chiamate nel modello di Von Neumann esteso,
  stack frame, SP e FP, la chiamata e il ritorno passo per passo, record di attivazione, il passaggio per valore e lo
  scambio che non scambia, lo scambio con i puntatori, array e stringhe come parametri, const, le funzioni di string.h,
  le asserzioni con assert, con tutti i programmi provati, quiz ed esercizi.
lede: >-
  Dove stanno parametri e variabili locali durante una chiamata, come fa il programma a tornare nel punto giusto, e
  perché una funzione non può cambiare le variabili di chi la chiama, a meno di riceverne l'indirizzo. All'esame c'è
  un esercizio proprio su questo: disegnare lo stack.
materiale: slide
scheda:
  Slide: 06B_chiamata_funzioni («Chiamata a funzione e ritorno») · 66 pagine
  Lezione: martedì 03/11
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 100 minuti, con carta e penna per disegnare lo stack
fonte: >-
  Slide «Chiamata a funzione e ritorno. Chiamata di funzione nel modello di Von Neumann esteso» (06B_chiamata_funzioni),
  Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/06B_chiamata_funzioni.html
genera_html: true
---

## In breve

- Ogni chiamata di funzione riserva sullo **stack** una zona tutta sua, lo **stack frame**, con le sue variabili locali. Quando la funzione finisce, la zona viene liberata.
- Lo stack cresce verso gli indirizzi più bassi. Due registri lo tengono in ordine: **SP** segna il limite dello stack, **FP** l'inizio del frame della funzione attiva. FP resta fermo durante la chiamata, SP si sposta.
- La **chiamata**: il chiamante copia i parametri e lascia il posto per il risultato, salva l'indirizzo dell'istruzione successiva e salta alla funzione; il **prologo** salva il vecchio FP, pone FP = SP e riserva le variabili locali.
- Il **ritorno**: si scrive il risultato; l'**epilogo** pone SP = FP, ripristina FP e il PC; il chiamante toglie i parametri e legge il risultato.
- In C il passaggio è **sempre per valore**: `swapSbagliato(x, y)` scambia due copie e lascia `x` e `y` come erano. Per cambiarle si passano gli **indirizzi**, `swap(&x, &y)`, e si scrive con `*pA` e `*pB`.
- Un array passato a una funzione arriva come **puntatore al primo elemento**: la lunghezza va passata a parte. Con `const` la funzione promette di non modificarlo. Le stringhe non hanno bisogno della lunghezza, perché finiscono con `'\0'`.
- `assert(condizione)` ferma il programma se la condizione è falsa: serve a controllare le ipotesi del programmatore, non l'input dell'utente.

> [!CANALI]
> **Canale B.** Lezione di martedì 03/11, dalle 11 alle 13, subito dopo la [06A](06A_funzioni.html). Il calendario ufficiale ha Programmazione I anche mercoledì 04/11, che metto alla [07A](07A_algoritmi_su_array.html): se Amparore ha finito queste slide il 04/11, aggiorno la data. Usa il modello della memoria della [02B](02B_assegnamento_memory_model.html) (stack, FP e SP), i puntatori della [02C](02C_referenziamento_scanf_puntatori.html), lo scambio della [03A](03A_scambio_variabili.html) e gli array e le stringhe della [05A](05A_array_stringhe.html).
>
> **Canali A e C.** Le slide 2026/27 dei canali A e C su questo argomento non le ho viste. L'esame è unico, e l'esercizio sullo stato della memoria c'è per tutti.
>
> **Un avviso sulle slide.** Gli offset di esempio cambiano tra la slide 7 (parametri in FP+8, FP+12, variabili locali in FP−4, FP−8) e la slide 14 ([FP+4], [FP+8] e [FP−0], [FP−4]). Negli appunti uso quelli della slide 7, che tornano con la figura; all'esame conta il segno: sopra FP i parametri, sotto le variabili locali.
>
> Tutti i programmi li ho compilati con gcc 16.1, con `-Wall -Werror`, ed eseguiti; gli errori del compilatore citati sono quelli veri.

## Lo stack delle chiamate (slide 2–7)

Una funzione si può chiamare da più punti, anche mentre è già in corso (succederà con la ricorsione). Se le sue variabili stessero a indirizzi fissi, come nei primi compilatori, due chiamate attive nello stesso momento si rovinerebbero le variabili a vicenda. La soluzione, usata dalla fine degli anni '50 (Bauer e Samelson, poi Dijkstra nel 1958, e il Burroughs B5000 nel 1961 in hardware), è lo **stack**: ogni chiamata prende una zona nuova in cima alla pila, e la restituisce quando finisce.

Il modello è quello della [02B](02B_assegnamento_memory_model.html), con qualche dettaglio in più:

- lo stack cresce verso gli **indirizzi decrescenti**: nei disegni, con gli indirizzi alti in alto, cresce verso il basso;
- **SP** (*stack pointer*) indica il limite dello stack. Si sposta quando si riserva o si libera spazio: nel modello delle slide, quando una variabile locale entra o esce di visibilità;
- **FP** (*frame pointer*) indica l'inizio del frame della funzione attiva, e **resta fermo** per tutta la chiamata.

Siccome FP non si muove, ogni dato del frame ha una posizione fissa rispetto a lui, un **offset** (una distanza in byte): i parametri stanno sopra, a offset positivi, le variabili locali sotto, a offset negativi.

```grafico
titolo: Lo stack durante una chiamata, nel modello delle slide. In alto gli indirizzi più alti. Sopra la linea di FP stanno le cose preparate dal chiamante (posto per il risultato, parametri, indirizzo di ritorno) e l'FP salvato; sotto, le variabili locali della funzione chiamata, fino a SP. Il codice sta in basso, lontano
x: 0 12.4
y: 0 7.6
assi: no
griglia: no
proporzioni: libere
poligono: 3.20 6.65 6.80 6.65 6.80 7.20 3.20 7.20 | blu | pieno
testo: 5.00 6.93 | blu | "variabili locali del chiamante"
poligono: 3.20 6.10 6.80 6.10 6.80 6.65 3.20 6.65 | verde | pieno
testo: 5.00 6.38 | verde | "posto per il risultato"
poligono: 3.20 5.55 6.80 5.55 6.80 6.10 3.20 6.10 | rosa | pieno
testo: 5.00 5.83 | rosa | "parametri"
poligono: 3.20 5.00 6.80 5.00 6.80 5.55 3.20 5.55 | ambra | pieno
testo: 5.00 5.28 | ambra | "indirizzo di ritorno"
poligono: 3.20 4.45 6.80 4.45 6.80 5.00 3.20 5.00 | accento | pieno
testo: 5.00 4.73 | accento | "FP salvato"
poligono: 3.20 3.90 6.80 3.90 6.80 4.45 3.20 4.45 | blu | pieno
testo: 5.00 4.18 | blu | "variabili locali"
poligono: 3.20 3.35 6.80 3.35 6.80 3.90 3.20 3.90 | blu | pieno
testo: 5.00 3.63 | blu | "del chiamato"
poligono: 3.20 1.30 6.80 1.30 6.80 3.35 3.20 3.35 | grigio
testo: 5.00 2.33 | grigio | "libero"
poligono: 3.20 0.40 6.80 0.40 6.80 1.20 3.20 1.20 | ambra
testo: 5.00 0.80 | ambra | "codice"
freccia: 1.4 4.45 3.15 4.45 | accento
testo: 0.9 4.45 | accento | "FP"
freccia: 1.4 3.35 3.15 3.35 | blu
testo: 0.9 3.35 | blu | "SP"
segmento: 7.05 7.20 7.05 6.65 | blu
testo: 7.25 6.93 | blu | e | "frame del chiamante"
segmento: 7.05 6.65 7.05 4.45 | rosa
testo: 7.25 5.80 | rosa | e | "preparato nella chiamata"
testo: 7.25 5.30 | grigio | e | "offset positivi: FP+4, FP+8, …"
segmento: 7.05 4.45 7.05 3.35 | blu
testo: 7.25 4.15 | blu | e | "frame del chiamato"
testo: 7.25 3.65 | grigio | e | "offset negativi: FP−4, FP−8"
```

> [!DEF] Stack frame (slide 5–6)
> Lo **stack frame** è la zona dello stack riservata a una chiamata di funzione. Ogni chiamata ne crea uno nuovo, anche se la funzione è sempre la stessa; quando la funzione finisce, il frame viene rilasciato e la memoria torna disponibile.

**Come si legge.** Una funzione chiamata tre volte ha tre frame diversi, uno per volta o anche insieme. Le variabili locali vivono nel frame: nascono con la chiamata e spariscono con il ritorno.

::: prova Perché con le variabili a indirizzi fissi una funzione non può essere ricorsiva?
Perché una seconda chiamata, partita mentre la prima è ancora in corso, scriverebbe nelle stesse celle e cancellerebbe i valori della prima. Con lo stack ogni chiamata ha le sue celle.
:::

> [!RICORDA]
> - Ogni chiamata ha il suo frame; il frame nasce con la chiamata e muore con il ritorno.
> - SP si muove, FP sta fermo. Sopra FP i parametri, sotto le variabili locali.

## Un esempio, frame per frame (slide 8–12)

Il programma delle slide 8–10:

```c
#include <stdio.h>
int square(int x) {
    return x * x;
}
int sumSquares(int a, int b) {
    return square(a) + square(b);
}
int main(void) {
    int res = sumSquares(2, 3);
    printf("Risultato: %d\n", res);
    return 0;
}
```

Stampa `Risultato: 13`. `main` chiama `sumSquares`, che chiama `square` due volte, prima con 2 e poi con 3. Lo stack passa per sette stati:

```grafico
titolo: Lo stack di `main → sumSquares → square`, istante per istante, da sinistra a destra. Ogni chiamata aggiunge un frame in fondo, ogni ritorno lo toglie. Il frame più in basso è quello attivo; gli altri sono sospesi e aspettano
x: 0 12.4
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
poligono: 0.20 3.20 1.75 3.20 1.75 4.00 0.20 4.00 | blu | pieno
testo: 0.98 3.60 | blu | "main"
testo: 0.98 4.3 | grigio | "1"
poligono: 1.95 3.20 3.50 3.20 3.50 4.00 1.95 4.00 | blu
testo: 2.73 3.60 | blu | "main"
poligono: 1.95 2.40 3.50 2.40 3.50 3.20 1.95 3.20 | viola | pieno
testo: 2.73 2.80 | viola | "sumSq"
testo: 2.73 4.3 | grigio | "2"
poligono: 3.70 3.20 5.25 3.20 5.25 4.00 3.70 4.00 | blu
testo: 4.48 3.60 | blu | "main"
poligono: 3.70 2.40 5.25 2.40 5.25 3.20 3.70 3.20 | viola
testo: 4.48 2.80 | viola | "sumSq"
poligono: 3.70 1.60 5.25 1.60 5.25 2.40 3.70 2.40 | ambra | pieno
testo: 4.48 2.00 | ambra | "square(2)"
testo: 4.48 4.3 | grigio | "3"
poligono: 5.45 3.20 7.00 3.20 7.00 4.00 5.45 4.00 | blu
testo: 6.23 3.60 | blu | "main"
poligono: 5.45 2.40 7.00 2.40 7.00 3.20 5.45 3.20 | viola | pieno
testo: 6.23 2.80 | viola | "sumSq"
testo: 6.23 4.3 | grigio | "4"
poligono: 7.20 3.20 8.75 3.20 8.75 4.00 7.20 4.00 | blu
testo: 7.98 3.60 | blu | "main"
poligono: 7.20 2.40 8.75 2.40 8.75 3.20 7.20 3.20 | viola
testo: 7.98 2.80 | viola | "sumSq"
poligono: 7.20 1.60 8.75 1.60 8.75 2.40 7.20 2.40 | ambra | pieno
testo: 7.98 2.00 | ambra | "square(3)"
testo: 7.98 4.3 | grigio | "5"
poligono: 8.95 3.20 10.50 3.20 10.50 4.00 8.95 4.00 | blu
testo: 9.72 3.60 | blu | "main"
poligono: 8.95 2.40 10.50 2.40 10.50 3.20 8.95 3.20 | viola | pieno
testo: 9.72 2.80 | viola | "sumSq"
testo: 9.72 4.3 | grigio | "6"
poligono: 10.70 3.20 12.25 3.20 12.25 4.00 10.70 4.00 | blu | pieno
testo: 11.47 3.60 | blu | "main"
testo: 11.47 4.3 | grigio | "7"
testo: 6.2 0.35 | grigio | "pieno = frame attivo · vuoto = sospeso"
```

In ogni istante c'è **una sola funzione attiva**, quella con il frame in fondo alla pila, e una fila di funzioni **sospese**, che aspettano che la chiamata sotto di loro finisca. Al passo 3, per esempio, `square(2)` è attiva, mentre `sumSquares` e `main` sono sospese a metà di un'istruzione.

La slide 12 mostra che cosa c'è dentro i frame, con un programma che ha parametri, variabili locali e risultato:

```c
#include <stdio.h>

int sommaProdotto(int a, int b, int c) {
    int somma = a + b + c;
    int prodotto = a * b * c;
    int risultato = somma + prodotto;
    return risultato;
}

int main(void) {
    int x = 2, y = 3, z = 4;
    int r = sommaProdotto(x, y, z);
    printf("Risultato: %d\n", r);
}
```

Stampa `Risultato: 33`, cioè $9 + 24$. Con l'esecuzione ferma alla riga di `risultato`, lo stack è questo:

```grafico
titolo: Lo stack della slide 12, con l'esecuzione ferma alla riga 6 di `sommaProdotto(2, 3, 4)`. In alto il frame di `main` con il posto per `r`, poi le copie dei parametri, i dati di controllo, e sotto FP le variabili locali di `sommaProdotto`. `x, y, z` e `a, b, c` hanno gli stessi valori ma sono celle diverse
x: 0 12.4
y: 0 7.2
assi: no
griglia: no
proporzioni: libere
poligono: 3.00 6.30 6.60 6.30 6.60 6.80 3.00 6.80 | blu | pieno
testo: 4.80 6.55 | blu | "int x = 2"
poligono: 3.00 5.80 6.60 5.80 6.60 6.30 3.00 6.30 | blu | pieno
testo: 4.80 6.05 | blu | "int y = 3"
poligono: 3.00 5.30 6.60 5.30 6.60 5.80 3.00 5.80 | blu | pieno
testo: 4.80 5.55 | blu | "int z = 4"
poligono: 3.00 4.80 6.60 4.80 6.60 5.30 3.00 5.30 | verde | pieno
testo: 4.80 5.05 | verde | "int r = ?"
poligono: 3.00 4.30 6.60 4.30 6.60 4.80 3.00 4.80 | rosa | pieno
testo: 4.80 4.55 | rosa | "int a = 2"
poligono: 3.00 3.80 6.60 3.80 6.60 4.30 3.00 4.30 | rosa | pieno
testo: 4.80 4.05 | rosa | "int b = 3"
poligono: 3.00 3.30 6.60 3.30 6.60 3.80 3.00 3.80 | rosa | pieno
testo: 4.80 3.55 | rosa | "int c = 4"
poligono: 3.00 2.80 6.60 2.80 6.60 3.30 3.00 3.30 | grigio | pieno
testo: 4.80 3.05 | grigio | "dati di controllo"
poligono: 3.00 2.30 6.60 2.30 6.60 2.80 3.00 2.80 | blu | pieno
testo: 4.80 2.55 | blu | "int somma = 9"
poligono: 3.00 1.80 6.60 1.80 6.60 2.30 3.00 2.30 | blu | pieno
testo: 4.80 2.05 | blu | "int prodotto = 24"
poligono: 3.00 1.30 6.60 1.30 6.60 1.80 3.00 1.80 | blu | pieno
testo: 4.80 1.55 | blu | "int risultato = 33"
freccia: 1.4 2.80 2.95 2.80 | accento
testo: 0.9 2.80 | accento | "FP"
freccia: 1.4 1.30 2.95 1.30 | blu
testo: 0.9 1.30 | blu | "SP"
segmento: 6.85 6.80 6.85 2.80 | blu
testo: 7.05 4.80 | blu | e | "frame di main (fino a FP)"
segmento: 6.85 2.80 6.85 1.30 | ambra
testo: 7.05 2.05 | ambra | e | "frame di sommaProdotto"
testo: 7.05 5.05 | verde | e | "qui finirà il 33"
```

- `a`, `b`, `c` sono **copie** di `x`, `y`, `z`: celle diverse con gli stessi valori.
- La cella di `r` fa da posto per il risultato: ci finirà il 33 al ritorno.
- `somma`, `prodotto`, `risultato` stanno sotto FP; SP è sotto l'ultima.

::: prova Al passo 5 del disegno con `sumSquares`, quali frame ci sono e quale è attivo?
`main`, `sumSquares` e `square(3)`; attivo `square(3)`. Il frame di `square(2)` è già stato rilasciato al passo 4.
:::

> [!RICORDA]
> - Una sola funzione attiva, quella del frame in fondo; le altre sono sospese.
> - I parametri sono copie degli argomenti, in celle diverse.

## La chiamata, passo per passo (slide 13–21)

Una chiamata di funzione non è un'istruzione sola della macchina: è una sequenza di operazioni. Si divide in due fasi, la chiamata con il **prologo** e il ritorno con l'**epilogo**. Ecco la chiamata, nell'ordine delle slide.

1. **Il chiamante prepara**: lascia sullo stack il posto per il valore di ritorno e copia i parametri (nelle CPU vere, spesso nei registri).
2. **Salva l'indirizzo di ritorno**, cioè l'indirizzo dell'istruzione successiva alla chiamata, `next(PC)`, e mette nel PC l'indirizzo della prima istruzione della funzione. Da qui esegue la funzione.
3. **Prologo**: la funzione chiamata salva sullo stack il valore attuale di FP, quello del chiamante.
4. **FP = SP**: comincia il nuovo frame.
5. **Riserva le variabili locali**, spostando SP verso il basso.

Da questo momento la funzione arriva ai suoi dati con offset fissi da FP: i parametri e il posto per il risultato sopra, le variabili locali sotto. È il disegno della sezione precedente.

> [!DEF] Il ruolo del frame pointer (slide 21)
> FP sta alla base del frame della funzione attiva. Grazie a lui parametri e variabili locali si raggiungono con offset da FP, senza conoscere il loro indirizzo assoluto; gli offset restano validi anche quando SP cambia; e la funzione può girare in qualunque posizione dello stack.

**Come si legge.** Il codice di `square` dice «il mio parametro è in FP+8», non «il mio parametro è all'indirizzo 1000». Così lo stesso codice funziona sia quando `square` è chiamata da `main` sia quando è chiamata da `sumSquares`, con il frame in un punto diverso. È questo che permette più chiamate attive della stessa funzione: la **rientranza**, e più avanti la ricorsione.

::: prova Perché il prologo salva il vecchio FP prima di cambiarlo?
Perché al ritorno il chiamante deve ritrovare il suo FP, per raggiungere di nuovo i suoi dati. Se non fosse salvato, dopo `FP = SP` andrebbe perso.
:::

> [!RICORDA]
> - Chiamata: posto per il risultato e parametri, indirizzo di ritorno, salto.
> - Prologo: salva FP, FP = SP, riserva le variabili locali.

## Il ritorno, passo per passo (slide 22–29)

Il ritorno disfa la chiamata in ordine inverso.

1. **Si scrive il valore di ritorno** nel posto preparato dal chiamante.
2. **Epilogo**: si rilasciano tutte le variabili locali ponendo **SP = FP**.
3. **Si ripristina FP** prendendo dallo stack il valore salvato nel prologo.
4. **Si ripristina il PC** con l'indirizzo di ritorno: l'esecuzione riprende nel chiamante, subito dopo la chiamata.
5. **Si tolgono i parametri.**
6. Lo stato è come prima della chiamata, e il chiamante legge il valore di ritorno.

```grafico
titolo: Chiamata e ritorno come due sequenze speculari. A sinistra quello che succede scendendo nella funzione, a destra quello che succede risalendo, dal basso verso l'alto. Ogni passo del ritorno disfa un passo della chiamata
x: 0 12.4
y: 0 6
assi: no
griglia: no
proporzioni: libere
testo: 3.1 5.6 | rosa | "chiamata"
testo: 9.3 5.6 | verde | "ritorno"
poligono: 0.3 4.4 5.9 4.4 5.9 5.1 0.3 5.1 | rosa | pieno
testo: 3.1 4.75 | rosa | "posto per il risultato, parametri"
poligono: 0.3 3.4 5.9 3.4 5.9 4.1 0.3 4.1 | ambra | pieno
testo: 3.1 3.75 | ambra | "indirizzo di ritorno, salto"
poligono: 0.3 2.4 5.9 2.4 5.9 3.1 0.3 3.1 | accento | pieno
testo: 3.1 2.75 | accento | "salva FP, poi FP = SP"
poligono: 0.3 1.4 5.9 1.4 5.9 2.1 0.3 2.1 | blu | pieno
testo: 3.1 1.75 | blu | "riserva le variabili locali"
poligono: 6.5 4.4 12.1 4.4 12.1 5.1 6.5 5.1 | rosa | pieno
testo: 9.3 4.75 | rosa | "toglie i parametri, legge il risultato"
poligono: 6.5 3.4 12.1 3.4 12.1 4.1 6.5 4.1 | ambra | pieno
testo: 9.3 3.75 | ambra | "ripristina il PC"
poligono: 6.5 2.4 12.1 2.4 12.1 3.1 6.5 3.1 | accento | pieno
testo: 9.3 2.75 | accento | "ripristina FP"
poligono: 6.5 1.4 12.1 1.4 12.1 2.1 6.5 2.1 | blu | pieno
testo: 9.3 1.75 | blu | "scrive il risultato, SP = FP"
freccia: 3.1 1.3 3.1 0.6 | grigio
freccia: 3.1 0.6 9.3 0.6 | grigio
freccia: 9.3 0.6 9.3 1.3 | grigio
testo: 6.2 0.3 | grigio | "corpo della funzione"
```

La slide 29 riassume: la chiamata rende espliciti il contesto della funzione, l'indirizzo di ritorno, i dati locali e il ripristino del chiamante. Nelle CPU vere i dettagli cambiano (in x86 il risultato di solito passa in un registro, non sullo stack), ma la logica è la stessa.

::: prova Dopo il passo 2 del ritorno, le variabili locali della funzione sono ancora scritte in memoria?
I bit restano lì finché qualcuno non li sovrascrive, ma la zona è sotto SP, quindi libera: la prossima chiamata la riuserà. Per il programma quelle variabili non esistono più.
:::

> [!RICORDA]
> - Ritorno: scrive il risultato, SP = FP, ripristina FP, ripristina il PC, toglie i parametri.
> - Il ritorno disfa la chiamata in ordine inverso.

## Record di attivazione e stack frame (slide 30–34)

Le slide distinguono due nomi per due livelli.

> [!DEF] Record di attivazione (slide 31)
> Il **record di attivazione** è l'insieme logico dei dati che servono a una singola chiamata: i parametri, le variabili locali, l'eventuale valore di ritorno, i dati di controllo (indirizzo di ritorno, FP precedente) e altri registri salvati. Non dipende dalla macchina né da dove i dati stanno fisicamente.

> [!DEF] Stack frame, in senso stretto (slide 32)
> Lo **stack frame** è la parte del record che sta nello stack tra FP e SP ed è gestita dalla funzione attiva: le variabili locali, a offset negativi. Parametri, dati di controllo e valore di ritorno, a offset positivi, stanno subito sopra, in una zona gestita dal chiamante.

**Come si legge.** Il record di attivazione è «tutto quello che serve alla chiamata»; lo stack frame è il pezzo di memoria delle variabili locali. Il libro di Deitel non fa questa distinzione e dice sempre «stack frame» (p. 192). Nell'uso comune, e all'esame, «frame» indica di solito tutto il blocco di una chiamata.

> [!ESAME] Esercizio tipico (slide 34)
> «Rappresentare lo stato dello stack e dei registri prima del ritorno di una funzione.» Lo svolgo nella sezione «Verso l'esame».

::: prova Nel disegno di `sommaProdotto`, quali celle fanno parte dello stack frame in senso stretto, e quali solo del record di attivazione?
Stack frame in senso stretto: `somma`, `prodotto`, `risultato`, tra FP e SP. Del record fanno parte anche i parametri `a`, `b`, `c`, i dati di controllo e il posto per il risultato, che stanno sopra FP.
:::

> [!RICORDA]
> - Record di attivazione: l'insieme logico. Stack frame: la zona tra FP e SP.

## Lo scambio che non scambia (slide 35–43)

Una funzione che scambia due variabili del chiamante, scritta come nella [03A](03A_scambio_variabili.html):

```c
#include <stdio.h>

void swapSbagliato(int a, int b) {
    int tmp = a;
    a = b;
    b = tmp;
}

int main(void) {
    int x = 10, y = 20;
    swapSbagliato(x, y);
    printf("x = %d, y = %d\n", x, y);
}
```

Stampa `x = 10, y = 20`: niente è cambiato. Lo stack spiega perché.

1. Alla chiamata i valori di `x` e `y` vengono **copiati** in `a` e `b`, nel record di `swapSbagliato`.
2. La funzione scambia `a` e `b`: `a` diventa 20, `b` diventa 10.
3. Al ritorno il record viene liberato, con le copie scambiate dentro. `x` e `y`, nel frame di `main`, non sono mai stati toccati.

In più `swapSbagliato` non può nominare `x` e `y`: sono variabili di `main`, fuori dalla sua visibilità.

> [!DEF] Passaggio per valore (slide 43)
> In C i parametri attuali (gli argomenti della chiamata) vengono sempre **copiati** nei parametri formali. La funzione lavora sulle copie.

::: prova Che cosa stampa `void azzera(int n) { n = 0; }` chiamata con `int k = 7; azzera(k); printf("%d", k);`?
`7`. `n` è una copia di `k`: azzerarla non cambia `k`.
:::

> [!RICORDA]
> - Gli argomenti si copiano. Cambiare un parametro non cambia la variabile del chiamante.

## Lo scambio con i puntatori (slide 44–52)

Il rimedio: invece dei valori, si passano gli **indirizzi** delle variabili da modificare. Il ripasso dei puntatori della [02C](02C_referenziamento_scanf_puntatori.html), in tre righe:

- `int* p;` dichiara un puntatore a `int`, che contiene un indirizzo;
- `p = &x;` mette in `p` l'indirizzo di `x`;
- `*p` è la variabile a cui `p` punta: `*p = 42;` scrive 42 in `x`. Mai dereferenziare un puntatore non inizializzato o `NULL`.

```c
#include <stdio.h>

void swap(int* pA, int* pB) {
    int tmp = *pA;  // legge il valore puntato da pA
    *pA = *pB;      // scrive nella variabile puntata da pA
    *pB = tmp;      // scrive nella variabile puntata da pB
}

int main(void) {
    int x = 10, y = 20;
    swap(&x, &y);   // passo gli INDIRIZZI di x e y
    printf("x = %d, y = %d\n", x, y);
}
```

Stampa `x = 20, y = 10`.

```grafico
titolo: Lo scambio della slide 47: nel frame di `swap` i parametri `pA` e `pB` contengono gli indirizzi di `x` e `y`, che stanno nel frame di `main`. Con `*pA` e `*pB` la funzione legge e scrive proprio quelle celle
x: 0 12.4
y: 0 5.4
assi: no
griglia: no
proporzioni: libere
poligono: 3.20 4.45 6.60 4.45 6.60 5.00 3.20 5.00 | blu | pieno
testo: 4.90 4.73 | blu | "int x = 10"
poligono: 3.20 3.90 6.60 3.90 6.60 4.45 3.20 4.45 | blu | pieno
testo: 4.90 4.18 | blu | "int y = 20"
poligono: 3.20 3.35 6.60 3.35 6.60 3.90 3.20 3.90 | rosa | pieno
testo: 4.90 3.63 | rosa | "int* pA = &x"
poligono: 3.20 2.80 6.60 2.80 6.60 3.35 3.20 3.35 | rosa | pieno
testo: 4.90 3.08 | rosa | "int* pB = &y"
poligono: 3.20 2.25 6.60 2.25 6.60 2.80 3.20 2.80 | grigio | pieno
testo: 4.90 2.53 | grigio | "dati di controllo"
poligono: 3.20 1.70 6.60 1.70 6.60 2.25 3.20 2.25 | ambra | pieno
testo: 4.90 1.98 | ambra | "int tmp = 10"
freccia: 6.65 3.63 7.90 3.93 | rosa
freccia: 7.90 3.93 6.70 4.73 | rosa
freccia: 6.65 3.08 8.80 3.48 | viola
freccia: 8.80 3.48 6.70 4.18 | viola
testo: 9.00 3.45 | grigio | e | "*pA è x, *pB è y"
testo: 1.6 4.45 | blu | "main"
testo: 1.6 2.25 | ambra | "swap"
```

Il passaggio è ancora per valore: quello che viene copiato è l'**indirizzo**. Ma con l'indirizzo in mano, `swap` legge e scrive direttamente nelle celle di `x` e `y`.

> [!DEF] Passaggio per riferimento, simulato (slide 51)
> In Pascal o in C++ esiste il passaggio **per riferimento**: la funzione riceve un riferimento alla variabile del chiamante e può modificarla. In C no, tutto passa per valore. Per avere lo stesso effetto si passa l'indirizzo della variabile, cioè un puntatore, e dentro la funzione si usa `*`.

**Come si legge.** È il meccanismo di `scanf("%d", &x)`: `scanf` deve scrivere in una variabile di `main`, quindi riceve il suo indirizzo. Con un indirizzo una funzione può arrivare a qualunque zona di memoria raggiungibile (stack, variabili globali, heap), non solo al suo record: è un modo di scavalcare le regole di visibilità imposte dallo stack, da usare con attenzione.

| Chiamata | Che cosa riceve la funzione | Cambia la variabile del chiamante? |
|---|---|---|
| `swapSbagliato(x, y)` | copie di 10 e 20 | no |
| `swap(&x, &y)` | copie degli indirizzi di `x` e `y` | sì, con `*pA` e `*pB` |

::: prova Che cosa succede se in `main` si scrive `swap(x, y);`, senza `&`?
Non compila: gcc 16 dà `passing argument 1 of 'swap' makes pointer from integer without a cast`, che è un errore anche senza `-Werror`. Un `int` non è un indirizzo.
:::

> [!RICORDA]
> - Per modificare una variabile del chiamante: si passa `&x`, si riceve `int* p`, si scrive `*p`.
> - Anche l'indirizzo passa per valore: si copia l'indirizzo, non la variabile.

## Array e stringhe come parametri (slide 53–59)

Fin qui i parametri erano numeri e puntatori a una variabile. Con gli array e le stringhe cambiano due cose: la funzione lavora sui dati del chiamante, e la lunghezza va gestita a parte.

### Un array arriva come puntatore

Nella [05A](05A_array_stringhe.html) un array «si comportava anche come un puntatore al suo primo elemento». Passandolo a una funzione arriva proprio così: un puntatore. Le due intestazioni `void fn(int* dati)` e `void fn(int dati[])` sono la stessa cosa. Quindi:

- la funzione lavora sull'array **del chiamante**, non su una copia: se scrive in `dati[i]`, cambia l'array originale;
- la funzione **non conosce la lunghezza**. Dentro la funzione `sizeof(dati)` è la dimensione di un puntatore, 8 byte, non dell'array. gcc lo segnala: `'sizeof' on array function parameter 'v' will return size of 'int *'`, un errore con `-Werror`.

Per questo un array si passa **con la sua lunghezza**, due parametri:

```c
void fn(size_t datiLen, int dati[]) {
    // posso usare dati[i] con i in [0, datiLen)
}
```

### const: sola lettura

Se la funzione deve solo leggere l'array, lo dichiara `const`:

```c
size_t quanti(size_t datiLen, const int dati[]) {
    size_t n = 0;
    for (size_t i = 0; i < datiLen; i++) {
        if (dati[i] > 0) {
            n++;
        }
    }
    return n;
}
```

Con `{3, -1, 4, 0, 5, -9}` restituisce 3. Il compilatore fa rispettare la promessa, in due modi:

| Errore | gcc 16 con `-Wall -Werror` |
|---|---|
| scrivere in un array `const`: `v[i] = 0;` | `assignment of read-only location '*(v + (sizetype)(i * 4))'` |
| passare un array `const` a una funzione che lo vuole modificabile | `passing argument 2 of 'raddoppia' discards 'const' qualifier from pointer target type` |

Si può dichiarare `const` anche un parametro normale che non cambia mai, come `const size_t datiLen` (slide 57): rende chiaro il contratto della funzione, cioè che cosa modifica e che cosa no.

### Le stringhe

Una stringa è un array di `char` che finisce con `'\0'`. Anche lei arriva come `char*`, ma **la lunghezza non serve**: la funzione può scorrere fino al terminatore.

```c
void stampa(const char* s) {
    printf("%s\n", s);
}
```

Funziona con un letterale, `stampa("ciao")`, e con un array di `char`, `stampa(buffer)`. Il `const` qui è necessario per i letterali, che sono in sola lettura (05A).

### Tre funzioni di string.h

| Funzione | Che cosa fa | Esempio provato |
|---|---|---|
| `size_t strlen(const char* s)` | lunghezza, senza contare `'\0'` | `strlen("ciao")` vale 4, mentre `sizeof("ciao")` vale 5 |
| `int strcmp(const char* s1, const char* s2)` | confronto in ordine di dizionario: negativo se `s1` viene prima, 0 se uguali, positivo se viene dopo | `strcmp("albero", "alce")` è negativo (b viene prima di c) |
| `char* strncpy(char* dest, const char* src, size_t n)` | copia al più `n` caratteri da `src` a `dest` | vedi la trappola qui sotto |

`strcmp` confronta i codici ASCII: `strcmp("Zeta", "alfa")` è negativo, perché `'Z'` vale 90 e `'a'` 97. Tutte le maiuscole vengono prima delle minuscole. Lo standard garantisce solo il segno del risultato: sul mio PC è −1 o 1, su altri sistemi può essere un altro numero.

> [!TRAPPOLA] strncpy non sempre termina la stringa
> La slide 59 dice che `strncpy` copia al più `n` caratteri «incluso terminatore». Ma se `src` ha `n` caratteri o più, il terminatore **non** viene copiato: `dest` resta senza `'\0'`, e una `printf("%s")` successiva continua a leggere oltre. Con `char corto[4]` e `strncpy(corto, "ciao", 4)` l'ultimo carattere è `'o'`, non `'\0'`. Quando i valori sono costanti gcc se ne accorge: `'strncpy' output truncated before terminating nul copying 4 bytes from a string of the same length`. Regola: destinazione di almeno `strlen(src) + 1` caratteri, oppure `dest[n - 1] = '\0'` dopo la copia.

::: prova Una funzione ha l'intestazione `double media(size_t n, const double v[])`. Che cosa puoi dire senza leggere il corpo?
Riceve un array di `double` con la sua lunghezza `n` e **non lo modifica**: lo garantisce il `const`, controllato dal compilatore.
:::

> [!RICORDA]
> - Un array arriva come puntatore: lunghezza a parte, e `sizeof` dentro la funzione non dà la lunghezza.
> - `const` = sola lettura, controllata dal compilatore.
> - Le stringhe si fermano a `'\0'`, senza lunghezza. `strncpy` può lasciarle senza terminatore.

## Le asserzioni (slide 60–66)

Un'**asserzione** è una condizione che deve essere sempre vera, se il programma è corretto. Serve a scrivere nel codice le ipotesi che il programmatore fa sullo stato delle variabili. In C c'è `assert`, in `<assert.h>`:

- se la condizione è vera, non succede niente;
- se è falsa, il programma si ferma e stampa la condizione violata, il file e la riga.

Con un errore voluto in una funzione che dovrebbe calcolare il massimo:

```c
#include <assert.h>

int massimoSbagliato(int a, int b) {
    int m;
    if (a < b) {      // errore voluto: sceglie il minimo
        m = a;
    } else {
        m = b;
    }
    assert(m >= a && m >= b);
    return m;
}
```

`massimoSbagliato(3, 8)` ferma il programma con `Assertion failed: m >= a && m >= b, file asserzioni.c, line 12` (il formato del messaggio cambia da un sistema all'altro). Compilando con **`-DNDEBUG`** le asserzioni spariscono: lo stesso programma restituisce 3 senza fermarsi.

Gli usi delle slide:

| Uso | Esempio |
|---|---|
| **precondizione** su puntatori e lunghezze | `assert(aLen == 0 \|\| a != NULL);` |
| **invariante** dentro un ciclo | `assert(i < aLen);` |
| **postcondizione** alla fine | `assert(*a <= *b);` dopo aver ordinato una coppia |
| **coerenza** tra argomenti | `assert((haveStr && str != NULL) \|\| (!haveStr && str == NULL));` |

> [!TRAPPOLA] Le asserzioni non controllano l'input
> Un'asserzione falsa vuol dire **errore nel programma**. Un numero sbagliato scritto dall'utente non è un errore del programma: va gestito con un controllo normale, un messaggio e una nuova lettura, come la `leggiRaggio` della [06A](06A_funzioni.html). E dentro `assert` niente effetti collaterali: con `-DNDEBUG` l'espressione non viene nemmeno calcolata.

::: prova Quale asserzione esprime «la funzione ha restituito uno dei due numeri» per un massimo `m` di `a` e `b`?
`assert(m == a || m == b);`. Insieme a `assert(m >= a && m >= b);` dice tutto quello che un massimo deve soddisfare (slide 65).
:::

> [!RICORDA]
> - `assert(c)`: se `c` è falsa il programma si ferma con file e riga.
> - Per le ipotesi del programmatore, mai per l'input dell'utente. `-DNDEBUG` le spegne.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| SP | «stack pointer» | registro che segna il limite dello stack | si sposta quando si riserva spazio |
| FP | «frame pointer» | registro che segna l'inizio del frame attivo | parametri in FP+8, locali in FP−4 |
| `next(PC)` | «successore del PC» | indirizzo di ritorno, salvato nella chiamata | l'esecuzione riprende da lì |
| `int* p` come parametro | «puntatore a int» | la funzione riceve un indirizzo | `void swap(int* pA, int* pB)` |
| `const int v[]` | «array di int costanti» | la funzione non può modificare l'array | `size_t quanti(size_t n, const int v[])` |
| `assert(c)` | «asserisci c» | ferma il programma se `c` è falsa | `assert(m >= a && m >= b);` |
| `-DNDEBUG` | «senza debug» | opzione di gcc che spegne le asserzioni | `gcc -Wall -Werror -DNDEBUG p.c` |

## Verso l'esame

All'esame di Programmazione I c'è un esercizio sullo **stato della memoria**: si dà un programma, di solito con funzioni e array, e si chiede che cosa c'è nello stack in un certo istante, quanti frame ci sono, che valore ha una variabile, in che riga riprende una funzione. Nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md) lo stack si disegna a righe: per ogni frame i parametri, le variabili locali, la riga di rientro e il valore restituito. Di questa lezione servono:

1. **un frame per ogni chiamata**, con le copie dei parametri;
2. **la riga di rientro**: il chiamante riprende dall'istruzione dopo la chiamata, a metà della riga se la chiamata è dentro un'espressione;
3. **gli array non si copiano**: tutti i frame vedono e modificano l'array del chiamante;
4. **una funzione `void` con parametri puntatore** cambia le variabili del chiamante, una con parametri normali no.

### Una domanda nello stile dell'esame, svolta

*Nel programma `sommaProdotto` della sezione «Un esempio, frame per frame», disegna lo stack un attimo prima che `return risultato;` venga eseguita, e di' che cosa vale `r` subito dopo la riga della chiamata.*

**In pratica chiede**: quali frame esistono durante la `return`, che cosa contengono, e che cosa cambia al ritorno.

**Soluzione.**

1. I frame sono due: `main` (sospeso nella riga della chiamata) e `sommaProdotto` (attivo).
2. Nel frame di `main`: `x = 2`, `y = 3`, `z = 4`, `r` non ancora assegnata (`?`).
3. Nel record di `sommaProdotto`: i parametri `a = 2`, `b = 3`, `c = 4`, i dati di controllo (indirizzo di ritorno nella riga della chiamata, FP di `main`), e sotto FP le variabili locali `somma = 9`, `prodotto = 24`, `risultato = 33`. SP sotto `risultato`.
4. La `return` scrive 33 nel posto del risultato; l'epilogo libera le variabili locali, ripristina FP e il PC, il chiamante toglie i parametri. Dopo la riga della chiamata `r` vale **33**, e lo stack contiene solo il frame di `main`.

Il disegno è quello della slide 12, nella sezione citata.

> [!METODO] Disegnare lo stack in un istante dato
> 1. Segui l'esecuzione da `main`, riga per riga, e fermati all'istante chiesto.
> 2. Per ogni chiamata in corso disegna un frame sotto il precedente: parametri (copie degli argomenti), poi le variabili locali dichiarate fin lì, con `?` per quelle non ancora assegnate.
> 3. Segna accanto a ogni frame sospeso la riga in cui riprenderà.
> 4. Per i puntatori, disegna una freccia verso la cella puntata, anche se sta in un altro frame.
> 5. Per gli array passati, ricorda che la funzione lavora sull'array del chiamante: scrivi le modifiche lì.

## Quiz

```quiz
D: Che cosa stampa `swapSbagliato(x, y)` seguita da `printf("x = %d, y = %d", x, y)`, con `x = 10` e `y = 20`?
+ `x = 10, y = 20`
- `x = 20, y = 10`
- `x = 20, y = 20`
- non compila
- un comportamento indefinito
= La funzione scambia le copie `a` e `b`, che spariscono al ritorno. La più insidiosa è `x = 20, y = 10`: è quello che fa `swap(&x, &y)`.

D: Nel modello delle slide, dove stanno le variabili locali della funzione attiva?
+ sotto FP, fino a SP, a offset negativi da FP
- sopra FP, a offset positivi
- in un'area fissa, uguale per tutte le chiamate
- nel codice del programma
- nei registri SP e FP
= Il frame della funzione attiva va da FP a SP, e lo stack cresce verso il basso. La più insidiosa è la seconda: sopra FP ci sono i parametri e i dati di controllo.

D: Qual è l'ordine giusto del ritorno da funzione?
+ scrive il risultato, SP = FP, ripristina FP, ripristina il PC, toglie i parametri
- ripristina il PC, scrive il risultato, SP = FP, ripristina FP
- toglie i parametri, ripristina FP, SP = FP, scrive il risultato
- SP = FP, scrive il risultato, ripristina il PC, ripristina FP
- ripristina FP, ripristina il PC, SP = FP, scrive il risultato
= Il ritorno disfa la chiamata in ordine inverso. La più insidiosa è la quarta: se si libera il frame prima di scrivere il risultato, la funzione perde accesso alle sue variabili locali.

D: Perché il prologo salva il valore di FP sullo stack?
+ perché al ritorno il chiamante deve riavere il suo FP
- perché SP non può essere salvato
- per liberare le variabili locali
- per passare i parametri alla funzione
- perché FP contiene l'indirizzo di ritorno
= Subito dopo il salvataggio il prologo pone FP = SP: senza la copia, il FP del chiamante andrebbe perso. La più insidiosa è l'ultima: l'indirizzo di ritorno è un dato diverso, salvato prima, al momento del salto.

D: Che cosa restituisce `sizeof(v)` dentro `size_t lunghezza(int v[])`, compilata su un PC a 64 bit senza `-Werror`?
+ 8, la dimensione di un puntatore
- il numero di elementi dell'array
- il numero di byte dell'array
- 0
- 4, la dimensione di un `int`
= Un array passato a funzione arriva come puntatore. gcc lo segnala con `sizeof-array-argument`, che con `-Werror` è un errore. La più insidiosa è la terza: è quello che dà `sizeof` in `main`, dove l'array è dichiarato.

D: Una funzione ha il parametro `const int dati[]` e contiene `dati[0] = 5;`. Che cosa succede con `-Wall -Werror`?
+ non compila: assegnamento a una zona in sola lettura
- compila, ma al momento dell'esecuzione il programma si ferma
- compila e modifica l'array del chiamante
- compila e modifica solo una copia dell'array
- compila con un avviso
= `const` è un vincolo controllato dal compilatore: `assignment of read-only location`. La più insidiosa è la quarta: gli array non vengono mai copiati quando si passano.

D: Con `char d[4];`, che cosa contiene `d[3]` dopo `strncpy(d, s, 4)`, se `s` è `"ciao"`?
+ il carattere `'o'`: la stringa resta senza terminatore
- il terminatore `'\0'`
- il carattere `'a'`
- non compila mai
- `strncpy` si ferma a 3 caratteri e mette `'\0'`
= `strncpy` copia 4 caratteri e il terminatore non ci sta. La più insidiosa è la seconda, che segue alla lettera la slide 59.

D: Quale uso di `assert` è sbagliato?
+ controllare che il numero scritto dall'utente sia positivo
- controllare all'inizio di una funzione che il puntatore ricevuto non sia `NULL`
- controllare alla fine che il risultato rispetti la specifica
- controllare dentro un ciclo che l'indice sia nell'array
- controllare che due argomenti siano coerenti tra loro
= L'input sbagliato non è un errore del programma: va gestito con un controllo e un messaggio. Le altre sono precondizioni, postcondizioni e invarianti, gli usi delle slide.
```

## Esercizi

::: esercizio base Riscaldamento: che cosa stampa?
```c
void cambia(int a, int* b) {
    a = a + 1;
    *b = *b + 1;
}
```
con `int x = 1, y = 1; cambia(x, &y); printf("%d %d\n", x, y);`
::: soluzione
`1 2`. `a` è una copia di `x`; `b` è una copia dell'indirizzo di `y`, e `*b` è proprio `y`. Provato.
:::

::: esercizio base Riscaldamento: quanti frame?
Nel programma `main → sumSquares(2, 3) → square`, quanti frame ci sono al massimo nello stack nello stesso momento, `main` compreso? E quante chiamate di funzione avvengono in tutto, `main` escluso?
::: soluzione
Al massimo **3** frame (`main`, `sumSquares`, una `square`). Le chiamate sono **3**: `sumSquares` una volta, `square` due volte, una dopo l'altra, mai insieme.
:::

::: esercizio medio Ordinare una coppia
Scrivi `void ordinaCoppia(int* a, int* b)` che scambia i valori puntati se `*a > *b`, con un'asserzione finale che controlla il risultato.
::: soluzione
```c
#include <assert.h>

void ordinaCoppia(int* a, int* b) {
    if (*a > *b) {
        int temp = *a;
        *a = *b;
        *b = temp;
    }
    assert(*a <= *b);   // postcondizione: la coppia è ordinata
}
```
È l'esempio della slide 64. Con `x = 9, y = 4`, dopo `ordinaCoppia(&x, &y)` diventano `x = 4, y = 9`; con `x = 2, y = 5` non cambia niente. Compilato con `-Wall -Werror`.
:::

::: esercizio medio Minimo e massimo in una volta
Scrivi `void minMax(size_t n, const int v[], int* min, int* max)` che, per `n >= 1`, scrive nelle variabili puntate il minimo e il massimo dell'array. Scrivi anche una chiamata.
::: soluzione
```c
#include <assert.h>
#include <stddef.h>

void minMax(size_t n, const int v[], int* min, int* max) {
    assert(n >= 1 && v != NULL);   // precondizione
    int mi = v[0], ma = v[0];
    for (size_t i = 1; i < n; i++) {
        if (v[i] < mi) {
            mi = v[i];
        }
        if (v[i] > ma) {
            ma = v[i];
        }
    }
    *min = mi;
    *max = ma;
}
```
Chiamata: `int a[5] = {4, -2, 9, 0, 9}; int lo, hi; minMax(5, a, &lo, &hi);` dà `lo = -2`, `hi = 9`. Due risultati, nessuno con `return`: passano per i puntatori. L'array è `const` perché la funzione lo legge soltanto. Provato.
:::

::: esercizio esame Stato della memoria, nello stile dell'esame
```c
#include <stdio.h>

void f(int a, int* p) {
    a = a * 2;
    *p = *p + a;      // (B)
}

int main(void) {
    int x = 3, y = 10;
    f(x, &y);         // (A)
    f(y, &x);
    printf("%d %d\n", x, y);
    return 0;
}
```
(1) Nel frame della prima chiamata di `f`, quanto valgono `a` e `*p` subito dopo la riga (B)? (2) In che punto riprende `main` dopo la prima chiamata? (3) Che cosa stampa il programma?
::: soluzione
(1) Prima chiamata: `a` parte da 3 e diventa 6; `p` punta a `y`, e dopo (B) `*p` vale 10 + 6 = **16**. Quindi `a = 6`, `*p = 16`. (2) Subito dopo la riga (A), alla seconda chiamata. (3) Seconda chiamata: `a` è una copia di `y`, cioè 16, e diventa 32; `p` punta a `x`, che diventa 3 + 32 = 35. Stampa **`35 16`**. Provato con gcc.
:::

::: esercizio difficile Una lunghezza di stringa con asserzioni
Scrivi `size_t lunghezza(const char* s)` che conta i caratteri prima del terminatore, senza usare `strlen`, con una precondizione su `s` e una postcondizione che controlla che in posizione `n` ci sia proprio il terminatore. Poi spiega perché non serve passare la lunghezza, a differenza degli array di `int`.
::: soluzione
```c
#include <assert.h>
#include <stddef.h>

size_t lunghezza(const char* s) {
    assert(s != NULL);           // precondizione
    size_t n = 0;
    while (s[n] != '\0') {
        n++;
    }
    assert(s[n] == '\0');        // postcondizione
    return n;
}
```
`lunghezza("ciao")` vale 4, `lunghezza("")` vale 0, come `strlen`. La lunghezza non serve perché la stringa porta con sé la sua fine, il carattere `'\0'`; un array di `int` non ha un valore riservato per «fine», quindi la lunghezza va passata a parte. Provato.
:::

## Domande di ripasso

::: domanda Che cosa contengono SP e FP, e quale dei due resta fermo durante una chiamata?
SP il limite dello stack, FP l'inizio del frame della funzione attiva. FP resta fermo, e per questo i dati del frame si raggiungono con offset fissi da FP.
:::

::: domanda Elenca i passi della chiamata e del ritorno.
Chiamata: posto per il risultato e parametri, salvataggio dell'indirizzo di ritorno e salto, salvataggio di FP, FP = SP, variabili locali. Ritorno: scrittura del risultato, SP = FP, ripristino di FP, ripristino del PC, rimozione dei parametri.
:::

::: domanda Perché `swapSbagliato` non scambia, e come si corregge?
Perché riceve copie di `x` e `y`. Si corregge passando gli indirizzi, `swap(&x, &y)`, e scrivendo con `*pA` e `*pB`.
:::

::: domanda Perché una funzione che riceve un array ha bisogno anche della lunghezza, e una che riceve una stringa no?
L'array arriva come puntatore al primo elemento, senza informazioni sulla lunghezza. La stringa finisce con `'\0'`, che la funzione può cercare.
:::

::: domanda A che cosa serve `assert`, e perché non va usata per l'input?
A fermare il programma quando un'ipotesi del programmatore è falsa, cioè quando c'è un errore nel codice. L'input sbagliato è un caso previsto, da gestire con un messaggio; e con `-DNDEBUG` le asserzioni spariscono.
:::

## Glossario

```glossario
Stack | Zona della memoria dove si impilano i frame delle chiamate; cresce verso gli indirizzi bassi.
Stack frame | Zona dello stack di una chiamata: nel modello delle slide, le variabili locali tra FP e SP.
Record di attivazione | Insieme logico dei dati di una chiamata: parametri, variabili locali, valore di ritorno, dati di controllo.
SP | Stack pointer: registro che segna il limite dello stack.
FP | Frame pointer: registro che segna l'inizio del frame attivo, fermo durante la chiamata.
Offset | Distanza in byte da un indirizzo di riferimento, per esempio FP+8.
Prologo | Inizio della funzione chiamata: salva FP, pone FP = SP, riserva le variabili locali.
Epilogo | Fine della funzione: SP = FP, ripristina FP e il PC.
Indirizzo di ritorno | Indirizzo dell'istruzione dopo la chiamata, da cui il chiamante riprende.
Rientranza | Proprietà di una funzione che può avere più chiamate attive insieme, ognuna con il suo frame.
Passaggio per valore | Gli argomenti sono copiati nei parametri.
Passaggio per riferimento | In C si simula passando l'indirizzo della variabile.
const | Qualificatore di sola lettura, controllato dal compilatore.
Asserzione | Condizione che deve essere sempre vera; assert ferma il programma se è falsa.
```

## Checklist

```checklist
- So disegnare lo stack con i frame di più chiamate annidate.
- So dire che cosa indicano SP e FP e quale dei due resta fermo.
- So elencare in ordine i passi della chiamata e del ritorno.
- So distinguere record di attivazione e stack frame.
- So spiegare perché swapSbagliato non scambia e scrivere swap con i puntatori.
- So passare un array a una funzione con la sua lunghezza, e so perché sizeof non basta.
- So usare const per gli array in sola lettura.
- So usare strlen e strcmp, e conosco la trappola di strncpy.
- So scrivere precondizioni, invarianti e postcondizioni con assert.
```

## Fonti

- Slide «Chiamata a funzione e ritorno. Chiamata di funzione nel modello di Von Neumann esteso» (06B_chiamata_funzioni), Programmazione I – Teoria, canale B, A.A. 2026/27, E. G. Amparore: storia dello stack (slide 2–3), modello, stack frame, SP e FP (4–7), l'esempio `sumSquares` e `sommaProdotto` (8–12), chiamata e prologo (13–21), ritorno ed epilogo (22–29), record di attivazione e stack frame (30–34), passaggio per valore e scambio (35–43), puntatori e scambio riuscito (44–52), array, `const` e stringhe (53–59), asserzioni (60–66).
- A. V. Aho, R. Sethi, J. D. Ullman, *Compilers*, 1986, e la System V ABI per x86, citati nella slide 33; P. Deitel, H. Deitel, *C: How to Program*, p. 192, citato nella stessa slide.
- Esercizi sullo stato della memoria: [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md) e [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Tutti i programmi delle slide e delle soluzioni li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror`, ed eseguiti; per l'asserzione che fallisce ho usato un programma di prova a parte. Gli errori e le stampe citati sono quelli veri. Quiz, esercizi e figure sono di questi appunti.
