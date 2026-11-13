---
corso: PROG1
lezione: S7
tipo: riassunto
titolo: "Settimana 7: algoritmi su array e il laboratorio sulle funzioni"
data: 2026-11-10
docenti: Elvio Amparore
sopratitolo: Riassunto settimanale · Programmazione I · Canale B · 09/11 – 13/11/2026
descrizione: >-
  Riassunto della settimana 7 di Programmazione I (canale B): il Laboratorio 06 sulle funzioni, con il progetto
  dell'intestazione, la verifica di primalità, più risultati con i puntatori, gli array e le stringhe come parametri,
  i cicli all'indietro con size_t; la lezione 07A, con la ricerca lineare, «esiste» e «per ogni», l'array vuoto, la
  selezione con dimensione e capacità e il bubble sort.
lede: >-
  Il laboratorio e la lezione della settimana in poche pagine: come si decide l'intestazione di una funzione, come si
  restituiscono due risultati, come si scrivono «esiste» e «per ogni» su un array senza break, e come lavora il
  bubble sort.
materiale: slide
scheda:
  Lezioni: "[Lab06](Lab06_funzioni.html) lun 09/11 (B2) · [07A](07A_algoritmi_su_array.html) mar 10/11"
  Tempo di ripasso: 35 minuti
fonte: >-
  Gli appunti della lezione 07A e del Laboratorio 06 di Programmazione I (canale B), scritti sulle slide di
  E. G. Amparore e del laboratorio
appunti_html: appunti/PROG1/riassunto_settimana_07.html
genera_html: true
---

## In breve

- Prima di scrivere una **funzione** si decidono tre cose: il nome, i parametri che le servono, il tipo di ritorno. Una funzione che risponde sì o no restituisce un `bool`.
- Una funzione restituisce **un solo valore**: gli altri risultati tornano al chiamante attraverso **puntatori** ricevuti come parametri.
- Un **array** arriva come puntatore al primo elemento, con la lunghezza in un altro parametro. Una **stringa** arriva senza lunghezza: la fine la segna il terminatore.
- Un indice `size_t` non scende mai sotto zero: un ciclo all'indietro con `i >= 0` non finisce.
- Cercare un valore in un array è un **«esiste»**: sentinella che parte da `false`. Controllare una proprietà di tutti gli elementi è un **«per ogni»**: sentinella che parte da `true`.
- Sull'**array vuoto** «per ogni» è vero e «esiste» è falso.
- Per **selezionare** elementi in un secondo array servono la **capacità**, quanti posti ci sono, e la **dimensione**, quanti sono usati.
- Il **bubble sort** ripete fasi che scambiano le coppie vicine fuori ordine, finché una fase non scambia niente.

> [!NOTA] Le lezioni della settimana
> Questa settimana c'è stata una sola lezione di teoria, martedì 10/11: quella di mercoledì 11/11 è stata annullata e sarà recuperata venerdì 04/12, dalle 15 alle 17, in Aula C. Il Laboratorio 06 il turno B2 l'ha fatto lunedì 09/11 con Elisa Marengo; il turno B1 è indietro di un laboratorio. Il laboratorio B2 di lunedì 16/11 è annullato.

## Lab06 · Funzioni (lun 09/11)

Il laboratorio fa scrivere funzioni partendo dalla domanda giusta: che cosa deve sapere la funzione, e che cosa deve dare indietro. Le idee che restano:

- **L'intestazione prima del corpo.** Una funzione che decide se un numero è primo riceve un `int` e risponde sì o no: `bool verifica_primalita(int n)`. Una che fa solo stampe è `void`.
- **Primalità con la sentinella.** Si cerca un divisore, che è un «esiste»: `for (int d = 2; d * d <= n && !esiste_divisore; d++)`. Basta arrivare fino alla radice di `n`, e il ciclo si ferma al primo divisore trovato.
- **Più risultati.** Minimo e massimo insieme non si possono restituire con una `return`: la funzione riceve due puntatori e scrive lì, come in `void minmax(size_t n, const int a[], int *p_min, int *p_max)`.
- **Array e stringhe.** Per un array servono puntatore e lunghezza; per una stringa basta il puntatore, e `strlen` trova la fine. Con `const` la funzione promette di non modificare.
- **Leggere una sequenza.** La condizione sicura è `1 == scanf("%d", &x) && x != 0`. Scrivendo solo `scanf(...) && x != 0`, a fine input `scanf` restituisce `EOF`, che è diverso da zero, e il ciclo non finisce.
- **`size_t` e `%zu`.** Le lunghezze sono `size_t` e si stampano con `%zu`. Con `%lu`, su Windows a 64 bit e `-Werror`, non compila.

```grafico
titolo: Due risultati da una funzione. `minmax` riceve gli indirizzi di `mn` e `mx`, che stanno nel frame di `main`, e scrive i risultati attraverso i due puntatori. La `return` non serve: la funzione è `void`
x: 0 12.4
y: 0 5.0
assi: no
griglia: no
proporzioni: libere
poligono: 2.6 0.4 9.8 0.4 9.8 2.0 2.6 2.0 | blu | tenue
testo: 1.4 1.2 | blu | "main"
poligono: 3.6 0.8 5.6 0.8 5.6 1.6 3.6 1.6 | blu | pieno
testo: 4.6 1.2 | blu | "mn: -2"
poligono: 6.8 0.8 8.8 0.8 8.8 1.6 6.8 1.6 | blu | pieno
testo: 7.8 1.2 | blu | "mx: 9"
poligono: 2.6 2.8 9.8 2.8 9.8 4.4 2.6 4.4 | ambra | tenue
testo: 1.4 3.6 | ambra | "minmax"
poligono: 3.6 3.2 5.6 3.2 5.6 4.0 3.6 4.0 | ambra | pieno
testo: 4.6 3.6 | ambra | "p_min"
poligono: 6.8 3.2 8.8 3.2 8.8 4.0 6.8 4.0 | ambra | pieno
testo: 7.8 3.6 | ambra | "p_max"
freccia: 4.6 3.1 4.6 1.7 | ambra
freccia: 7.8 3.1 7.8 1.7 | ambra
testo: 11.1 3.6 | grigio | "in cima"
```

> [!TRAPPOLA] Il ciclo all'indietro con size_t
> `for (size_t i = n - 1; i >= 0; i--)` compila con `-Wall -Werror` e non finisce: quando `i` vale 0, `i--` lo porta a 18446744073709551615, che è ancora maggiore o uguale a zero. Si usa `ptrdiff_t`, oppure si conta da `n` a 1 e si usa `i - 1` come indice.

::: prova Che intestazione daresti a una funzione che conta quante volte un carattere compare in una stringa, senza modificarla?
`size_t conta(const char *s, char c)`: la stringa in sola lettura, il carattere da cercare, e un conteggio come risultato. La lunghezza non serve.
:::

> [!RICORDA]
> - Intestazione: nome, parametri, tipo di ritorno. Sì o no: `bool`.
> - Due risultati: due puntatori tra i parametri.
> - Array: puntatore più lunghezza. Stringa: solo il puntatore.
> - `size_t` non va sotto zero; si stampa con `%zu`.

## 07A · Algoritmi su array (mar 10/11)

Cercare un valore in un array vuol dire rispondere a una domanda con «esiste»: esiste un indice in cui c'è quel valore? Controllare che un array sia tutto positivo è una domanda con «per ogni». Le due domande hanno lo stesso schema, con i valori rovesciati.

| | «Esiste» | «Per ogni» |
|---|---|---|
| come un lungo… | OR | AND |
| la sentinella parte da | `false` | `true` |
| cambia quando si trova | un elemento che va bene | un controesempio |
| sull'array vuoto | falso | vero |

In tutti e due i casi la sentinella sta **nella condizione del ciclo**: `for (size_t i = 0; i < n && !trovato; i++)`. Il ciclo si ferma appena la risposta è certa, senza `break`, e la funzione ha una sola `return`.

- **Invariante**: una frase vera a ogni giro, che spiega perché il ciclo funziona. Per la ricerca: «nei posti già visti il valore non c'è».
- **Selezione**: per copiare in un array `a` gli elementi di `b` che rispettano una condizione, `a` ha una **capacità** fissa e una **dimensione** che cresce. Il nuovo elemento va in `a[aLen]`, poi `aLen++`; se la capacità è finita, la funzione lo segnala.
- **Ordinato?** È un «per ogni» sulle coppie vicine: `a[i-1] <= a[i]` per ogni `i` da 1. Con `size_t`, attenzione a `aLen - 1`: se `aLen` è 0 diventa un numero enorme.
- **Bubble sort**: ogni fase scorre le coppie vicine e scambia quelle fuori ordine. Se una fase non fa scambi, l'array è ordinato e si esce.

```grafico
titolo: Il bubble sort su 3, 1, 2. Nella prima fase due scambi portano il 3 in fondo. Nella seconda fase nessuna coppia è fuori ordine: l'ipotesi «è ordinato» resta vera e il ciclo esce. Due fasi in tutto
x: 0 12.4
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
testo: 1.4 3.6 | grigio | "inizio"
poligono: 2.6 3.2 3.6 3.2 3.6 4.0 2.6 4.0 | rosa | pieno
testo: 3.1 3.6 | rosa | "3"
poligono: 3.6 3.2 4.6 3.2 4.6 4.0 3.6 4.0 | rosa | pieno
testo: 4.1 3.6 | rosa | "1"
poligono: 4.6 3.2 5.6 3.2 5.6 4.0 4.6 4.0 | blu | pieno
testo: 5.1 3.6 | blu | "2"
freccia: 5.8 3.6 6.8 3.6 | grigio
poligono: 7.0 3.2 8.0 3.2 8.0 4.0 7.0 4.0 | blu | pieno
testo: 7.5 3.6 | blu | "1"
poligono: 8.0 3.2 9.0 3.2 9.0 4.0 8.0 4.0 | rosa | pieno
testo: 8.5 3.6 | rosa | "3"
poligono: 9.0 3.2 10.0 3.2 10.0 4.0 9.0 4.0 | rosa | pieno
testo: 9.5 3.6 | rosa | "2"
testo: 11.2 3.6 | grigio | "fase 1"
testo: 1.4 1.6 | grigio | "poi"
poligono: 2.6 1.2 3.6 1.2 3.6 2.0 2.6 2.0 | verde | pieno
testo: 3.1 1.6 | verde | "1"
poligono: 3.6 1.2 4.6 1.2 4.6 2.0 3.6 2.0 | verde | pieno
testo: 4.1 1.6 | verde | "2"
poligono: 4.6 1.2 5.6 1.2 5.6 2.0 4.6 2.0 | verde | pieno
testo: 5.1 1.6 | verde | "3"
testo: 8.6 1.6 | verde | "fase 2: nessuno scambio, fine"
testo: 6.2 0.5 | grigio | "in rosa la coppia da scambiare"
```

::: prova Quante fasi fa il bubble sort della lezione su un array già ordinato di 4 elementi?
Una: la fase serve a controllare che non ci siano coppie fuori ordine, e poi il ciclo esce.
:::

> [!RICORDA]
> - «Esiste»: sentinella da `false`. «Per ogni»: sentinella da `true`. Nella condizione del ciclo.
> - Array vuoto: «per ogni» vero, «esiste» falso.
> - Selezione: capacità fissa, dimensione che cresce.
> - Bubble sort: fasi di scambi tra vicini, finché una fase non scambia.

## Verso l'esame

- **Programmazione iterativa**: una funzione su un array con «esiste» e «per ogni», anche uno dentro l'altro, come l'`e1` del pre-esame 2023/24 svolto nella 07A. Una sola `return`, niente `break`.
- **Intestazioni**: la lunghezza prima dell'array, come in `bool f(size_t n, const int a[])`, e `const` dove si legge soltanto. Vanno copiate dal testo.
- **Più risultati**: un valore con la `return`, gli altri con i puntatori. È la forma di molte funzioni d'esame.
- **Casi limite**: array vuoto, un elemento, valore cercato all'ultimo posto, array di destinazione pieno, stringa vuota.
- Appelli 2026/27: lunedì 25/01/2027 e giovedì 11/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Che cosa si decide prima di scrivere il corpo di una funzione?
Il nome, i parametri che le servono e il tipo di ritorno.
:::

::: domanda Come fa una funzione a dare due risultati?
Riceve due puntatori tra i parametri e scrive i risultati attraverso di loro; oppure ne restituisce uno con la `return` e l'altro con un puntatore.
:::

::: domanda Perché `while (scanf("%d", &x) && x != 0)` può non finire?
Perché a fine input `scanf` restituisce `EOF`, che è diverso da zero e quindi vale come vero, e `x` non cambia più.
:::

::: domanda Con quale valore parte la sentinella di un «per ogni», e perché?
Da `true`: finché non si trova un controesempio, la proprietà vale. Così sull'array vuoto la risposta è vero.
:::

::: domanda Che differenza c'è tra capacità e dimensione di un array?
La capacità è il numero di posti disponibili; la dimensione è quanti ne sono usati.
:::

::: domanda Quando si ferma il bubble sort della lezione?
Quando una fase intera non fa nessuno scambio.
:::

## Quiz d'esame

L'esame di Programmazione I non ha domande a crocette. Ha due esercizi di teoria su CodeRunner, «correttezza» e «stato della memoria», e tre di programmazione. Le domande qui sotto sono **sul modello** di questi esercizi, con gli argomenti della settimana. Ho compilato e provato tutto il codice con gcc 16.1 e `-Wall -Werror`.

```quiz
D: Sul modello della correttezza. In `bool verifica_primalita(int n)` il ciclo è `for (int d = 2; d * d <= n && !esiste_divisore; d++)`. Con `n = 97`, qual è l'ultimo valore di `d` per cui viene eseguito il corpo?
N: 9
= $9 \cdot 9 = 81$ non supera 97, $10 \cdot 10 = 100$ sì. Nessun `d` da 2 a 9 divide 97, quindi il ciclo li prova tutti e 97 è primo.

D: Sul modello dello stato della memoria. Con `int v[] = {4, -2, 9, 0}, mn, mx;` e la chiamata `minmax(4, v, &mn, &mx);`, dove `minmax` scrive il minimo in `*p_min` e il massimo in `*p_max`, quanto valgono `mn` e `mx` dopo la chiamata?
+ -2 e 9
- restano non inizializzate
- 4 e 4
- 0 e 9
- -2 e 4
= La funzione scrive nelle variabili del `main` attraverso i due puntatori. La più insidiosa è la seconda: sarebbe vera se i parametri fossero `int` e non `int *`.

D: Sul modello degli esercizi del Lab06. `conta_univoci` conta gli elementi che compaiono una volta sola. Che cosa restituisce su `{1, 2, 2, 3, 3, 3, 7}`?
N: 2
= Compaiono una volta sola l'1 e il 7. Provato.

D: Sul modello della correttezza. Che cosa succede con `for (size_t i = 2; i >= 0; i--) { printf("%zu ", i); }`?
+ stampa 2 1 0 e poi continua con numeri enormi, senza fermarsi
- stampa 2 1 0 e si ferma
- stampa 2 1 e si ferma
- non compila con `-Wall -Werror`
- non stampa niente
= Un `size_t` non è mai negativo: dopo lo 0 viene 18446744073709551615. La più insidiosa è la quarta: con `-Wall -Werror` compila, l'avviso arriva solo con `-Wextra`.

D: Sul modello della programmazione iterativa. `bool tuttiPositivi(size_t n, const int a[])` usa una sentinella che parte da `true`. Che cosa restituisce con `n == 0`?
+ `true`
- `false`
- dipende dal contenuto di `a`
- un valore non definito
- non termina
= Il ciclo non gira e la sentinella resta `true`: sull'array vuoto «per ogni» è vero. La più insidiosa è `false`, che è la risposta giusta per «esiste».

D: Sul modello della correttezza. Quante fasi fa il bubble sort della lezione, con l'uscita quando una fase non scambia, sull'array `{4, 3, 2, 1}`?
N: 4
= Ogni fase porta in fondo il più grande rimasto: dopo tre fasi l'array è ordinato, e la quarta serve a scoprirlo. Provato.

D: Sul modello della programmazione iterativa. In una selezione, `a` ha capacità `aCap` e dimensione `aLen`. Che cosa si fa quando arriva un elemento da copiare e `aLen == aCap`?
+ non si copia, e si segnala che non c'è posto
- si copia in `a[aLen]` e si incrementa `aLen`
- si copia in `a[aCap]`
- si sovrascrive `a[0]`
- si incrementa `aCap`
= L'array è pieno: scrivere in `a[aLen]` sarebbe fuori dai limiti. La più insidiosa è la seconda, che è il caso normale, con `aLen < aCap`.

D: Sul modello degli esercizi del Lab06. `bool palindroma(const char *s)` confronta il primo carattere con l'ultimo, il secondo con il penultimo, e così via, con `i < n / 2`. Che cosa restituisce sulla stringa vuota?
+ `true`
- `false`
- dipende dal compilatore
- un errore in esecuzione
- non termina
= Con `n == 0` il ciclo non gira e la sentinella resta `true`: è un «per ogni» su zero coppie. La più insidiosa è `false`.
```

## Fonti

- Le lezioni complete: [Lab06 · Funzioni](Lab06_funzioni.html) e [07A · Algoritmi su array](07A_algoritmi_su_array.html), con gli esempi, i disegni e gli esercizi.
- Slide di E. G. Amparore «07A Algoritmi su array» e slide del laboratorio «Funzioni» (Lab06), canale B, A.A. 2026/27; pagina Moodle del corso per le date e gli avvisi.
- Le domande del quiz sono di questi appunti, sul modello degli esercizi d'esame; il codice è compilato con gcc 16.1 e `-Wall -Werror` ed eseguito.
