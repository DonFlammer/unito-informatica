---
corso: PROG1
lezione: S3
tipo: riassunto
titolo: "Settimana 3: operatori e tipi, scambi, numeri reali, condizioni e if"
data: 2026-10-14
docenti: Elvio Amparore
sopratitolo: Riassunto settimanale · Programmazione I · Canale B · 12/10 – 16/10/2026
descrizione: >-
  Riassunto della settimana 3 di Programmazione I (canale B): il secondo laboratorio su divisioni, overflow,
  precedenze, const, medie e dimensione dei tipi; lo scambio di due variabili con la variabile d'appoggio; float e
  double, printf e scanf con i reali, conversioni e cast; espressioni booleane, bool, &&, || e !, cortocircuito,
  operatore ternario; sequenza, selezione e iterazione, if, else ed else if.
lede: >-
  Il laboratorio e le quattro lezioni della settimana in poche pagine: le divisioni che ingannano, lo scambio fatto
  bene, come si scrive una condizione che compila con -Wall -Werror, come si segue un programma con gli if, e le
  domande per controllarti.
materiale: slide
scheda:
  Lezioni: "[Lab02](Lab02_operatori_tipi.html) lun 12/10 (B2) e mar 13/10 (B1) · [03A](03A_scambio_variabili.html) e [03B](03B_floats.html) mar 13/10 · [03C](03C_booleani.html) e [03D](03D_decisioni.html) mer 14/10"
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti del Laboratorio 02 e delle lezioni 03A, 03B, 03C e 03D di Programmazione I (canale B), scritti sulle
  slide del laboratorio e di E. G. Amparore
appunti_html: appunti/PROG1/riassunto_settimana_03.html
genera_html: true
---

## In breve

- Tra due interi `/` dà la parte intera e `%` il resto: `99 / 50` fa 1. Basta un reale per avere la divisione con la virgola: `99 / 50.0` fa 1.98.
- Per **scambiare** due variabili serve una **variabile d'appoggio**: `temp = x; x = y; y = temp;`, in quest'ordine.
- `float` ha circa 7 cifre giuste, `double` circa 15. Un `double` si stampa con `%f` e si legge con **`%lf`**.
- Mettere un reale in un `int` **taglia** la parte dopo la virgola. Il **cast** `(double)a` converte quando lo decidi tu.
- Un confronto vale **1** se è vero e **0** se è falso. Le condizioni si uniscono con `&&`, `||` e `!`; «x tra 18 e 30» si scrive `18 <= x && x <= 30`.
- **Cortocircuito**: se la prima parte di `&&` o `||` basta a decidere, la seconda non viene calcolata.
- `if` esegue un blocco solo se la condizione è vera; `else` dà l'altra strada; `else if` mette in fila più domande.

## Lab02 · Operatori e tipi (lun 12/10, mar 13/10)

Il laboratorio ha sei programmi di partenza da leggere, provare e correggere, poi tre programmi nuovi. Le cose da portarsi via:

| Che cosa | Esempio | Risultato |
|---|---|---|
| divisione tra interi | `99 / 50` e `99 % 50` | 1 e 49 |
| basta un reale | `99 / 50.0` | 1.98 |
| overflow di un `int` | `x + 1` con `x` che vale 2147483647 | un numero negativo, senza avvisi |
| precedenze | `2 + 3 * 4` | 14: `*`, `/`, `%` prima di `+` e `-` |
| media di tre interi | `(a + b + c) / 3` con 4, 5, 5 | 4: serve `3.0`, che dà 4.67 |
| approssimazione | `(int)(8.136 * 1000)` | 8135, non 8136 |
| dimensione di un puntatore | `sizeof(int*)`, `sizeof(double*)` | 8 byte tutti e due, su 64 bit |

- `const` dichiara una **costante**: `const double PI = 3.14159;` non si può più cambiare.
- Per arrotondare ci sono `floor`, `ceil` e `round` di `math.h`; il cast a `int` taglia e basta.
- In `errori.c` gli errori sono 8: il compilatore li segnala uno alla volta, e conviene correggere sempre il **primo**.

::: prova Quanto valgono `17 / 4`, `17 % 4` e `17 / 4.0`?
4, 1 e 4.25: tra interi la divisione taglia, con un reale no.
:::

> [!RICORDA]
> - Tra interi la divisione è intera. Una media si divide per `3.0`.
> - L'overflow degli `int` non dà avvisi: il risultato è sbagliato in silenzio.

## 03A · Scambiare due variabili (mar 13/10)

Lo scambio «ovvio» `x = y; y = x;` non funziona: il primo assegnamento cancella il vecchio valore di `x`, e alla fine le due variabili valgono uguale. Come con due tazze di tè da scambiare, serve una terza tazza vuota.

```grafico
titolo: Lo scambio con la variabile d'appoggio, partendo da `x = 8` e `y = 3`. Prima si mette da parte `x` (1), poi si copia `y` in `x` (2), infine si rimette in `y` il valore messo da parte (3).
x: 0 10
y: 0 5
assi: no
griglia: no
proporzioni: libere
poligono: 1 3 3 3 3 4.2 1 4.2 | blu
poligono: 7 3 9 3 9 4.2 7 4.2 | ambra
poligono: 4 0.9 6 0.9 6 2.1 4 2.1 | grigio
testo: 2 3.6 | blu | "8 → 3"
testo: 8 3.6 | ambra | "3 → 8"
testo: 5 1.5 | grigio | "8"
testo: 2 4.6 | blu | "x"
testo: 8 4.6 | ambra | "y"
testo: 5 0.5 | grigio | "temp"
freccia: 1.8 2.9 3.9 1.6 | blu
freccia: 6.9 3.6 3.1 3.6 | ambra
freccia: 6.1 1.6 8.2 2.9 | grigio
testo: 2.6 2.0 | blu | "1"
testo: 5 3.95 | ambra | "2"
testo: 7.4 2.0 | grigio | "3"
```

- `temp` deve avere lo stesso tipo delle due variabili.
- L'ordine conta: con gli stessi tre assegnamenti in un altro ordine un valore si perde di nuovo. La regola: si copia per primo il valore che sta per essere sovrascritto.
- Per scambiare in giro più variabili, come nell'esercizio `scambio4.c`, basta una sola variabile d'appoggio.

::: prova Con `int a = 1, b = 2;`, quanto valgono le due variabili dopo `temp = a; b = a; a = temp;`?
Tutte e due 1. L'ordine è sbagliato: `b = a` cancella il 2 prima che qualcuno l'abbia messo da parte.
:::

> [!RICORDA]
> - `temp = x; x = y; y = temp;`: ogni variabile, a sinistra, è stata letta prima di essere riscritta.
> - Il compilatore non avvisa se lo scambio è sbagliato: va controllato a mano.

## 03B · Numeri reali, conversioni e cast (mar 13/10)

I numeri con la virgola in C hanno due tipi, che cambiano per spazio occupato e precisione:

| Tipo | Byte | Cifre giuste | `printf` | `scanf` |
|---|---|---|---|---|
| `float` | 4 | circa 7 | `%f` | `%f` |
| `double` | 8 | circa 15–16 | `%f` | `%lf` |

- `%f` stampa 6 cifre dopo la virgola, `%.2f` due, `%e` usa la notazione scientifica, `%g` sceglie la più corta.
- Sui reali non c'è `%`. Radici e potenze sono in `math.h`: `sqrt`, `pow`.
- I reali sono approssimati: non si confrontano con `==`.
- **Promozione**: in un'espressione con tipi diversi il più piccolo diventa il più grande, e un intero con un reale dà un reale.
- **La divisione che inganna**: in `float z = 5 / 2;` la divisione è tra interi e fa 2; solo dopo il 2 diventa 2.000000.
- **Il cast** va messo **prima** della divisione: `(double)a / b` divide con la virgola, `(double)(a / b)` converte un risultato già tagliato.

::: prova Con `int a = 9, b = 4;`, quanto valgono `(double)a / b` e `(double)(a / b)`?
2.25 e 2.0: nel secondo la divisione tra interi è già stata fatta, e il cast converte il 2.
:::

> [!RICORDA]
> - Un `double` si legge con `%lf`.
> - Il tipo di una divisione lo decidono i due operandi, non la variabile a sinistra dell'uguale.

## 03C · Espressioni booleane (mer 14/10)

Un'espressione booleana è una domanda con risposta sì o no: in C vale 1 se è vera e 0 se è falsa. Si confronta con `==`, `!=`, `<`, `>`, `<=`, `>=`; `==` confronta, `=` assegna. Il tipo `bool`, con `true` e `false`, viene da `stdbool.h`.

| `a` | `b` | `a && b` | `a \|\| b` | `!a` |
|---|---|---|---|---|
| vero | vero | vero | vero | falso |
| vero | falso | falso | vero | falso |
| falso | vero | falso | vero | vero |
| falso | falso | falso | falso | vero |

> [!TRAPPOLA] Due errori che con -Wall -Werror non compilano
> - `0 <= x <= 10` si calcola da sinistra e vale sempre 1: gcc lo rifiuta, «comparisons like 'X<=Y<=Z' do not have their mathematical meaning». Si scrive `0 <= x && x <= 10`.
> - `&&` dentro `||` senza parentesi: gcc chiede le parentesi. Le condizioni lunghe si spezzano in variabili `bool` con un nome chiaro.

- **Cortocircuito**: in `d != 0 && n / d > 5`, se `d` vale 0 la divisione non viene mai fatta. L'ordine dei pezzi conta.
- Per negare una condizione si usa De Morgan: il contrario di `a && b` è `!a || !b`. Il `!` si attacca a una cosa sola: `!x > 5` vuol dire `(!x) > 5`.
- **Ternario**: `max = a > b ? a : b;` vale `a` se la condizione è vera, altrimenti `b`.

::: prova Come si scrive la condizione «`n` non è tra 1 e 100»?
`n < 1 || n > 100`: per De Morgan è il contrario di `1 <= n && n <= 100`.
:::

> [!RICORDA]
> - Vero è 1, falso è 0. Un intervallo si scrive con due confronti e `&&`.
> - Il cortocircuito protegge la seconda parte: prima il controllo, poi l'operazione.

## 03D · Decisioni: if ed else (mer 14/10)

Ogni programma si costruisce con tre strutture: **sequenza**, **selezione** e **iterazione**. Per il teorema di Böhm-Jacopini (1966) bastano per qualunque algoritmo. Questa lezione è la selezione.

```grafico
titolo: Il massimo di due numeri con `if … else`: dalla domanda partono due strade, ne viene percorsa una sola, e poi le strade si riuniscono.
x: 0 10
y: 0 7
assi: no
griglia: no
proporzioni: libere
freccia: 5 6.9 5 6.1 | grigio
poligono: 5 6 7 5 5 4 3 5 | ambra
testo: 5 5 | ambra | "a > b ?"
segmento: 3 5 1.8 5 | verde
freccia: 1.8 5 1.8 3.3 | verde
segmento: 7 5 8.2 5 | rosa
freccia: 8.2 5 8.2 3.3 | rosa
testo: 2.4 5.35 | verde | "vero"
testo: 7.6 5.35 | rosa | "falso"
poligono: 0.6 2.2 3 2.2 3 3.2 0.6 3.2 | verde
poligono: 7 2.2 9.4 2.2 9.4 3.2 7 3.2 | rosa
testo: 1.8 2.7 | verde | "max = a"
testo: 8.2 2.7 | rosa | "max = b"
segmento: 1.8 2.2 1.8 1.2 | grigio
segmento: 8.2 2.2 8.2 1.2 | grigio
segmento: 1.8 1.2 8.2 1.2 | grigio
freccia: 5 1.2 5 0.2 | grigio
```

- `if (condizione) { … }` esegue il blocco solo se la condizione è vera.
- `else` è l'altra strada; con `else if` si entra nel **primo** blocco con la condizione vera, e gli altri si saltano. All'esame niente `switch`.
- Gli errori più comuni: `=` al posto di `==` e le graffe dimenticate (con `-Wall -Werror` tutti e due non compilano), le condizioni nell'ordine sbagliato.
- Una variabile dichiarata dentro un blocco esiste solo lì: alla `}` sparisce dallo stack.
- Gli esempi delle slide con `void main()` non compilano con `-Wall -Werror`: si scrive `int main(void)`.
- Schemi che tornano sempre: il massimo di due numeri, il controllo del valore restituito da `scanf`, la divisione protetta, il controllo di un intervallo.

::: prova Con `int voto = 24;`, quale blocco esegue `if (voto >= 18) { … } else if (voto >= 24) { … } else { … }`?
Il primo: `voto >= 18` è già vera, e gli altri si saltano. Il secondo blocco non viene mai eseguito, perché le condizioni sono nell'ordine sbagliato: la più stretta va messa prima.
:::

> [!RICORDA]
> - Con `else if` le condizioni si controllano in ordine, e conta solo la prima vera.
> - Per seguire un programma con gli if, scrivi i valori delle variabili prima di ogni domanda.

## Verso l'esame

- **Correttezza di una sequenza di assegnazioni**: si ragiona all'indietro dalla post-condizione. Lo scambio con `temp` è un esercizio perfetto per allenarsi.
- **Stato della memoria**: una riga per variabile, i valori aggiornati a ogni assegnamento. Attenzione alle conversioni: un `double` messo in un `int` perde la parte dopo la virgola.
- **Programmazione**: i test di CodeRunner confrontano le stampe. Una media divisa per `3` invece che per `3.0`, o un `%f` al posto di `%lf` in `scanf`, fanno fallire i test.
- Appelli 2026/27: lunedì 25/01/2027 e giovedì 11/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Quanto valgono `99 / 50`, `99 % 50` e `99 / 50.0`?
1, 49 e 1.98.
:::

::: domanda Perché `x = y; y = x;` non scambia le due variabili?
Perché il primo assegnamento cancella il vecchio valore di `x`: alla fine tutte e due valgono il vecchio `y`.
:::

::: domanda Con quale specificatore si legge un `double` con `scanf`?
`%lf`. Con `%f` `scanf` scriverebbe un `float` nella casella di un `double`.
:::

::: domanda Che cosa vale `float z = 5 / 2;`?
2.000000: la divisione è tra interi e fa 2, poi il 2 viene convertito.
:::

::: domanda Come si scrive in C «`x` è tra 0 e 10»?
`0 <= x && x <= 10`.
:::

::: domanda Perché `d != 0 && n / d > 5` non divide mai per zero?
Per il cortocircuito: se `d` vale 0 la prima parte è falsa, e la seconda non viene calcolata.
:::

::: domanda Quali sono le tre strutture del teorema di Böhm-Jacopini?
Sequenza, selezione e iterazione.
:::

## Quiz d'esame

L'esame di Programmazione I non ha domande a crocette. Ha due esercizi di teoria su CodeRunner, «correttezza di una sequenza di assegnazioni» e «stato della memoria», e tre di programmazione. Le domande qui sotto sono **sul modello** di questi esercizi, con gli argomenti della settimana: le prime due come l'esercizio «Corr. Ass. 1» della pagina Moodle 2023/24, le altre come lo stato della memoria e gli errori che fanno fallire i test. Ho compilato e provato tutto con gcc 16.1 e `-Wall -Werror`.

```quiz
D: Sul modello di «Corr. Ass. 1», ragionamento all'indietro. Il programma esegue `temp = x;`, poi `x = y;`, poi `y = temp;`. Alla fine deve valere `x == 3 && y == 8`. Quale pre-condizione serve all'inizio?
- `x == 3 && y == 8`
+ `x == 8 && y == 3`
- `x == 8 && y == 8`
- `x == 3 && y == 3`
- `temp == 8 && y == 3`
= All'indietro: prima di `y = temp` serve `x == 3 && temp == 8`; prima di `x = y` serve `y == 3 && temp == 8`; prima di `temp = x` serve `y == 3 && x == 8`. Lo scambio scambia, quindi all'inizio i valori sono rovesciati. La risposta più insidiosa è `temp == 8 && y == 3`: è la condizione a metà strada, ma all'inizio `temp` non ha ancora un valore.

D: Sul modello di «Corr. Ass. 1», con lo scambio sbagliato. Il programma esegue `x = y;` e poi `y = x;`. Alla fine deve valere `x == 5 && y == 5`. Qual è la pre-condizione più debole?
- `x == 5 && y == 5`
+ `y == 5`
- `x == 5`
- `true`: vale sempre
- `false`: non vale mai
= Prima di `y = x` si sostituisce `y` con `x`: `x == 5 && x == 5`, cioè `x == 5`. Prima di `x = y` si sostituisce `x` con `y`: `y == 5`. Il vecchio valore di `x` non conta, perché viene cancellato subito. La risposta più insidiosa è `x == 5 && y == 5`: funziona, ma chiede più del necessario.

D: Sul modello dello stato della memoria. Dopo `int a = 7, b = 2; double m = a / b; double n = (double)a / b; int k = n;` quanto valgono `m`, `n` e `k`?
- `m` = 3.5, `n` = 3.5, `k` = 3
+ `m` = 3.0, `n` = 3.5, `k` = 3
- `m` = 3.0, `n` = 3.0, `k` = 3
- `m` = 3.0, `n` = 3.5, `k` = 4
- `m` = 3.5, `n` = 3.5, `k` = 4
= In `a / b` tutti e due sono interi: la divisione fa 3, e solo dopo diventa 3.0. In `(double)a / b` il cast viene prima, quindi la divisione è con la virgola: 3.5. Mettere 3.5 in un `int` taglia, non arrotonda: 3. La risposta più insidiosa è quella con `m` = 3.5: conta il tipo dei due operandi, non quello della variabile a sinistra.

D: Sul modello dello stato della memoria. Dopo questo codice quanto valgono `x` e `y`? `int x = 7, y = 3; if (x > y) { int t = x; x = y; y = t; } if (x % 2 == 0) { x = x + 10; } else if (y > 5) { y = y - 5; } else { x = 0; }`
- `x` = 7, `y` = 3
- `x` = 13, `y` = 7
+ `x` = 3, `y` = 2
- `x` = 0, `y` = 7
- `x` = 3, `y` = 7
= Il primo `if` scambia: `x` = 3, `y` = 7. Poi `x % 2` vale 1, quindi la prima strada no; `y > 5` sì, quindi `y` = 2, e l'`else` si salta. La risposta più insidiosa è `x` = 3, `y` = 7: chi pensa che dopo una condizione falsa si salti tutto si ferma al primo blocco. `t` esiste solo dentro le graffe del primo `if`.

D: Sul modello degli errori che fanno fallire i test. Con `int d = 0, n = 10; bool ok = d != 0 && n / d > 5;`, che cosa stampa `printf("%d", ok);`?
- Il programma si blocca per una divisione per zero
+ 0
- 1
- Non compila
- Un valore che cambia da un'esecuzione all'altra
= `d != 0` è falso, quindi tutta la congiunzione è falsa e la divisione non viene calcolata: è il cortocircuito. `ok` vale 0. La risposta più insidiosa è il blocco per divisione per zero: succederebbe scrivendo `n / d > 5 && d != 0`, con i pezzi nell'ordine sbagliato.

D: Sul modello degli errori di compilazione. Con `int x = 50;`, che cosa succede compilando con `gcc -Wall -Werror` un programma che contiene `printf("%d", 0 <= x <= 10);`?
- Stampa 0
- Stampa 1
- Stampa 50
+ Non compila
- Compila con un avviso e stampa 1
= gcc con `-Wall` segnala «comparisons like 'X<=Y<=Z' do not have their mathematical meaning», e `-Werror` trasforma l'avviso in errore. La risposta più insidiosa è «stampa 1»: è quello che succede senza opzioni, perché `0 <= 50` vale 1 e `1 <= 10` è vero. Con un avviso e basta si compilerebbe solo senza `-Werror`.

D: Sul modello degli errori che fanno fallire i test. Dopo `int a = 4, b = 5, c = 5; double m = (a + b + c) / 3;`, che cosa stampa `printf("%.2f", m);`?
- 4.67
+ 4.00
- 4.66
- 4
- 14.00
= `(a + b + c) / 3` è una divisione tra interi: 14 diviso 3 fa 4, e in `m` va 4.0. Con `%.2f` si stampa 4.00. La risposta più insidiosa è 4.67, che è la media vera: per averla serve `/ 3.0`. 4 senza decimali non può uscire da `%.2f`.

D: Sul modello del Laboratorio 02. Che cosa stampa `printf("%d", (int)(8.136 * 1000));`?
- 8136
+ 8135
- 8137
- 8.136
- Non compila
= 8.136 in binario non si scrive esattamente: è un po' meno, e `8.136 * 1000` viene circa 8135.999999. Il cast a `int` taglia la parte dopo la virgola: 8135. La risposta più insidiosa è 8136, che sarebbe il risultato con un arrotondamento: per averlo serve `round` di `math.h`.
```

## Fonti

- Le lezioni complete: [Lab02 · Operatori e tipi](Lab02_operatori_tipi.html), [03A · Scambiare due variabili](03A_scambio_variabili.html), [03B · Numeri reali, float e double, conversioni di tipo](03B_floats.html), [03C · Espressioni booleane, il tipo bool e gli operatori logici](03C_booleani.html), [03D · Dal flusso sequenziale alle decisioni, if ed else](03D_decisioni.html), con i programmi provati, i quiz e gli esercizi.
- Slide del canale B: Lab02 «Operatori e Tipi» con la tabella dei tipi; 03A_scambio_variabili, 03B_floats, 03C_booleans, 03D_decisioni (E. G. Amparore).
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
