---
corso: PROG1
lezione: 03C
titolo: Espressioni booleane, il tipo bool e gli operatori logici
data: 2026-10-14
docenti: Elvio Amparore
simboli_logici: si
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 03C
descrizione: >-
  Appunti della lezione 03C di Programmazione I (canale B): gli operatori di confronto ==, !=, <, >, <=, >=, la
  differenza tra = e ==, il tipo bool di stdbool.h, gli operatori logici &&, || e ! con le tavole di verità, i confronti
  su un intervallo, la valutazione in cortocircuito, come spezzare le condizioni lunghe e l'operatore ternario, con
  tutti i programmi delle slide provati, quiz ed esercizi.
lede: >-
  Un programma non fa solo conti: deve anche rispondere a domande con un sì o con un no. «Il voto è almeno 18?»,
  «l'input è valido?». In C queste domande si scrivono con le espressioni booleane, che valgono 1 se la risposta è sì
  e 0 se è no.
materiale: slide
scheda:
  Slide: 03C_booleans («Espressioni booleane. Operatori logici per decidere nei programmi») · 20 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 75 minuti, meglio con gcc a portata di mano
fonte: >-
  Slide «Espressioni booleane. Operatori logici per decidere nei programmi» (03C_booleans), Programmazione I –
  Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/03C_booleani.html
genera_html: true
---

## In breve

- Un'**espressione booleana** è una domanda con risposta sì o no. In C vale **1** se è vera e **0** se è falsa.
- Si confrontano due valori con **`==`**, `!=`, `<`, `>`, `<=`, `>=`. Attenzione: `==` confronta, `=` assegna.
- Il tipo **`bool`**, con le costanti `true` e `false`, si usa includendo `stdbool.h`. Si stampa con `%d`, e appare 0 oppure 1.
- Le domande si combinano con **`&&`** (e: vere tutte e due), **`||`** (o: almeno una vera) e **`!`** (non: rovescia la risposta).
- «x tra 18 e 30» in C si scrive `18 <= x && x <= 30`, con due confronti. Scritto come in matematica è sempre vero.
- **Cortocircuito**: se la prima parte basta a decidere, la seconda non viene calcolata. Così `divisore != 0 && n / divisore > 5` non divide mai per zero.
- Le condizioni lunghe si spezzano in variabili `bool` con un nome chiaro. Con `-Wall -Werror`, `&&` e `||` mescolati senza parentesi non compilano.
- L'**operatore ternario** `condizione ? a : b` vale `a` se la condizione è vera, `b` se è falsa.

> [!CANALI]
> **Canale B.** È la prima parte della lezione di mercoledì 14/10, dalle 9 alle 11, prima della [03D](03D_decisioni.html) sugli `if`. Usa la memoria e i tipi della [02B](02B_assegnamento_memory_model.html) e la `scanf` della [02C](02C_referenziamento_scanf_puntatori.html).
>
> **Fondamenti dell'Informatica.** Le stesse tre operazioni, con le tavole di verità, sono nella [lezione 06 di Fondamenti](../FDA/06_proposizioni_connettivi_tavole.html), e le leggi di De Morgan nella [lezione 07](../FDA/07_condizionali_equivalenza_logica.html). Le porte logiche AND, OR e NOT della [lezione 01](../FDA/01_bit_porte_esadecimale.html) fanno la stessa cosa con i fili.
>
> **Canali A e C.** Secondo l'elenco delle lezioni 2025/26 nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md), nel canale A (Fiandrotti) c'è un deck «booleani» seguito da uno su `if-else`; nel canale C (Mazzei) sono le lezioni 04 «Booleani» e 05 «IF». Le slide 2026/27 dei canali A e C non le ho viste. L'esame è unico.
>
> **Laboratorio.** Il prossimo laboratorio, il Lab03, è proprio sulle condizioni booleane.
>
> Tutti i programmi li ho compilati e provati con gcc 16.1, con `-Wall -Werror`. Quando un programma delle slide non compila così, lo dico.

## A che cosa servono (slide 2)

Pensa al tornello della metropolitana. Avvicini il biglietto, e il tornello si fa una domanda: «il biglietto è valido?». Se la risposta è sì si apre, se è no resta chiuso. Il tornello non fa conti difficili: risponde a una domanda con un sì o con un no, e poi sceglie che cosa fare.

Anche un programma fa così. Finora i nostri programmi eseguivano le istruzioni una dopo l'altra, sempre tutte. Ma un programma vero deve **decidere**, e per decidere deve farsi domande come queste, che vengono dalle slide:

- «Ho già fatto tutte le somme richieste?», come nella moltiplicazione della [lezione 01A](01A_primo_algoritmo.html);
- «L'input scritto da tastiera è corretto?»;
- «Lo studente ha superato l'esame?».

Le **espressioni booleane** sono il modo di scrivere queste domande in C. Sono il ponte tra i dati, che sono numeri, e le scelte. In questa lezione impari a scriverle; nella [03D](03D_decisioni.html) le usi per scegliere che cosa fare, con `if`.

::: prova Trasforma in una domanda con risposta sì o no: «il programma deve fermarsi quando il conto supera 100 euro».
«Il conto è maggiore di 100?». In C sarà `conto > 100`.
:::

> [!RICORDA]
> - Un'espressione booleana è una domanda con risposta sì o no.
> - Serve al programma per scegliere che cosa fare.

## Confrontare due valori (slide 3–4)

La domanda più semplice confronta due numeri: «il voto è almeno 18?». In C si scrive `voto >= 18`. Il risultato non è un sì scritto a parole: è un **numero**, **1** se la risposta è sì e **0** se è no.

| In matematica | In C | Si legge | Esempio | Vale |
|:-:|:-:|---|---|:-:|
| $x = y$ | `==` | «uguale a» | `3 == 2` | 0 |
| $x \neq y$ | `!=` | «diverso da» | `3 != 2` | 1 |
| $x > y$ | `>` | «maggiore di» | `3 > 2` | 1 |
| $x < y$ | `<` | «minore di» | `3 < 2` | 0 |
| $x \ge y$ | `>=` | «maggiore o uguale a» | `3 >= 3` | 1 |
| $x \le y$ | `<=` | «minore o uguale a» | `5 <= 3` | 0 |

Si chiamano **operatori relazionali**, perché dicono in che relazione stanno due valori. Gli esempi delle slide:

- `contatore != n`: le ripetizioni non sono ancora finite;
- `pinInserito == pinCorretto`: il PIN è giusto;
- `temperatura <= limiteMax`: la temperatura non supera il limite;
- `voto >= 18`: l'esame è superato.

> [!TRAPPOLA] Uguale si scrive con due segni
> In C **`=`** è l'assegnamento della [02B](02B_assegnamento_memory_model.html): `x = 5` **mette** 5 in `x`. Per **chiedere** se `x` vale 5 si scrive **`x == 5`**. Confonderli è uno degli errori più comuni, e lo ritrovi nella 03D.

`>=` e `<=` si scrivono con il segno di uguale **dopo**: `=>` e `=<` non esistono in C.

::: prova Con `int a = 7, b = 10;`, quanto valgono `a < b`, `a == b - 3` e `b != 10`?
`a < b` vale 1. `a == b - 3` vale 1, perché prima si fa la sottrazione: 10 − 3 = 7. `b != 10` vale 0.
:::

> [!RICORDA]
> - Un confronto vale 1 se è vero, 0 se è falso.
> - `==` confronta, `=` assegna.

## Il tipo bool (slide 5–7)

Per tenere la risposta a una domanda serve una variabile. Il C più vecchio usava gli `int`, con questa regola, che vale ancora oggi:

- **0** vuol dire **falso**;
- **qualunque altro numero** vuol dire **vero**.

Dal 1999, cioè dalla versione del C chiamata C99, esiste un tipo apposta. Si usa scrivendo in cima al programma:

```c
#include <stdbool.h>
```

e porta tre cose: il tipo **`bool`** e le due costanti **`true`**, che vale 1, e **`false`**, che vale 0. Il nome viene da George Boole, il matematico che nell'Ottocento ha studiato la logica del vero e del falso. Le slide chiedono di usare `bool` ogni volta che si può: chi legge capisce subito che la variabile contiene un sì o un no.

```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int votoScritto = 25;
    int sogliaSuff = 18;
    bool superato = votoScritto >= sogliaSuff;
    printf("Lo studente supera l'esame? %d\n", superato);
}
```

```
Lo studente supera l'esame? 1
```

La riga `bool superato = votoScritto >= sogliaSuff;` funziona come ogni assegnamento: prima si calcola la destra, `25 >= 18`, che vale 1, poi il risultato si copia in `superato`.

Per `bool` **non c'è uno specificatore** di `printf`: si usa `%d`, come per gli interi, e si vede 0 oppure 1.

> [!NOTA] Quanto spazio occupa un bool
> Nella slide 6 la variabile `b` è disegnata come un solo bit, 0 o 1, perché è l'informazione che contiene. In memoria però un `bool` occupa un byte intero: `sizeof(bool)` stampa 1. Il motivo è che la memoria si indirizza a byte, come nella [lezione 01B](01B_architettura.html).

Se metti in un `bool` un numero diverso da 0 e 1, diventa `true`: con `bool c = 5;`, `printf("%d", c)` stampa 1.

::: prova Con `int eta = 16;`, che cosa stampa `bool maggiorenne = eta >= 18; printf("%d", maggiorenne);`?
0: 16 non è maggiore o uguale a 18.
:::

> [!RICORDA]
> - `bool`, `true` e `false` vengono da `stdbool.h`.
> - Per il C, 0 è falso e qualunque altro numero è vero.
> - Un `bool` si stampa con `%d`.

## Unire più domande: &&, || e ! (slide 8–12)

Spesso una sola domanda non basta. Il login di un sito riesce se hai fatto meno di 3 tentativi **e** l'account non è bloccato. Il biglietto è scontato se hai meno di 12 anni **oppure** sei tesserato. Per unire le domande ci sono tre **operatori logici**:

| In C | Si legge | Vale vero quando | In logica |
|:-:|---|---|:-:|
| `a && b` | «a e b» | **tutte e due** sono vere | $a \land b$ |
| `a \|\| b` | «a o b» | **almeno una** è vera | $a \lor b$ |
| `!a` | «non a» | `a` è falsa | $\neg a$ |

Gli esempi delle slide, riscritti con i nomi delle variabili:

```c
bool login = (numTentativi < 3) && !accountBloccato;
bool riscaldamento = (temperatura < 18) && termostatoOn;
bool sconto = (eta < 12) || tesserato;
bool ventolaAccesa = (temperatura >= 28) || modoManuale;
```

Il primo si legge: «login è vero se i tentativi sono meno di 3 e l'account **non** è bloccato».

### Le tavole di verità

Una **tavola di verità** scrive il risultato per tutte le combinazioni possibili. Con due domande le combinazioni sono quattro.

| `c1` | `c2` | `c1 && c2` | `c1 \|\| c2` |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | **1** | 1 |

| `c` | `!c` |
|:-:|:-:|
| 0 | 1 |
| 1 | 0 |

- `&&` dà 1 in **una sola** riga, quella con tutti e due a 1.
- `||` dà 0 in **una sola** riga, quella con tutti e due a 0.
- L'«o» del C è inclusivo: se sono vere tutte e due, il risultato è vero.

Sono le stesse tavole della [lezione 06 di Fondamenti](../FDA/06_proposizioni_connettivi_tavole.html), con 1 e 0 al posto di V e F.

Prova a scrivere una formula e a vederne la tavola. Qui si usano le lettere per le domande, `&` o `&&` per «e», `|` o `||` per «o», `!` per «non»:

```widget logica
titolo: La tavola di verità di una condizione
modo: tavola
formula: (a | t) & !b
```

::: prova Con `int eta = 15; bool tesserato = false;`, quanto vale `(eta < 12) || tesserato`? E `!tesserato && eta >= 14`?
Il primo vale 0: 15 non è minore di 12, e `tesserato` è falso. Il secondo vale 1: `!tesserato` è vero e 15 è almeno 14.
:::

> [!RICORDA]
> - `&&`: vere tutte e due. `||`: almeno una vera. `!`: rovescia.
> - Con due domande la tavola di verità ha 4 righe.

## Un valore dentro un intervallo (slide 13–14)

Un esempio di tutti i giorni: «ho tra 18 e 30 anni». In matematica si scrive in modo compatto, $18 \le x \le 30$. In C questa scrittura **non funziona**: bisogna spezzarla in due confronti uniti da `&&`.

```c
18 <= x && x <= 30
```

Si legge: «18 è minore o uguale a x, **e** x è minore o uguale a 30». È la forma più vicina a quella della matematica: `x` sta in mezzo, e i due estremi ai lati.

| Intervallo | Si legge | In C |
|:-:|---|---|
| $[a, b]$ | chiuso: estremi compresi | `a <= x && x <= b` |
| $[a, b)$ | semiaperto: `a` compreso, `b` escluso | `a <= x && x < b` |
| $(a, b]$ | semiaperto: `a` escluso, `b` compreso | `a < x && x <= b` |
| $(a, b)$ | aperto: estremi esclusi | `a < x && x < b` |

Le slide avvertono che il secondo, **`a <= x && x < b`**, si userà moltissimo: è il controllo che un indice stia dentro un array, che vedrai più avanti.

> [!TRAPPOLA] 0 <= x <= 10 è sempre vero
> Scritto come in matematica, `0 <= x <= 10` si calcola da sinistra: prima `0 <= x`, che vale 0 o 1, poi `0 <= 10` oppure `1 <= 10`. Tutti e due valgono 1. Quindi l'espressione è vera **sempre**, anche con `x = 50`. gcc con `-Wall` avvisa: `comparisons like 'X<=Y<=Z' do not have their mathematical meaning`. Con `-Werror` il programma non compila.

Per il contrario, «x è **fuori** da $[18, 30]$», si usa `||`: `x < 18 || x > 30`. Basta che sia vera una delle due.

::: prova Scrivi in C: «il voto è sufficiente ma non è 30», con i voti da 0 a 30.
`18 <= voto && voto < 30`, oppure `voto >= 18 && voto != 30`.
:::

> [!RICORDA]
> - Un intervallo in C sono due confronti uniti da `&&`.
> - «Fuori dall'intervallo» si scrive con `||`.

## Il cortocircuito (slide 15–18)

Torna al tornello. Se il biglietto è scaduto, il tornello resta chiuso: non ha bisogno di controllare anche se è il biglietto giusto per quella linea. Il C fa la stessa cosa. Le parti di un `&&` o di un `||` si calcolano **da sinistra a destra**, e il calcolo si ferma appena il risultato è sicuro.

- In `a && b`, se `a` è **falsa** il risultato è falso comunque: `b` **non viene calcolata**.
- In `a || b`, se `a` è **vera** il risultato è vero comunque: `b` **non viene calcolata**.

Si chiama **valutazione in cortocircuito**, in inglese *short-circuit evaluation*. Non è solo un risparmio di tempo: serve a proteggere la seconda parte.

```c
bool condizione = (divisore != 0) && ((numeratore / divisore) > 5);
```

Se `divisore` vale 0, la prima parte è falsa e la divisione non viene mai fatta. Senza cortocircuito il programma si fermerebbe con una divisione per zero, un errore a runtime della [lezione 02A](02A_da_assembly_a_c.html). Ho provato con `numeratore = 40`: con `divisore = 0` la condizione vale 0 e il programma va avanti; con `divisore = 4` vale 1, perché 40 / 4 = 10 è maggiore di 5.

L'**ordine conta**: scritto al contrario, `(numeratore / divisore > 5) && (divisore != 0)`, la divisione si farebbe prima del controllo.

### Con scanf

```c
int valore;
bool scanPari = (scanf("%d", &valore) == 1) && (valore % 2 == 0);
```

Ricordi dalla [02C](02C_referenziamento_scanf_puntatori.html) che `scanf` restituisce quanti valori ha letto. Se l'input non è un numero, `scanf` restituisce 0 e `valore` resta «?»: grazie al cortocircuito, quel valore senza senso non viene mai guardato.

Il programma completo della slide 18 fa tre domande sullo stesso numero:

```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int numero;
    bool letto, positivo, dispari;
    printf("Inserisci un numero intero: ");
    letto = (scanf("%d", &numero) == 1); // true se scanf ha letto correttamente
    positivo = letto && (numero > 0);      // input valido e maggiore di 0
    dispari  = letto && (numero % 2 != 0); // input valido e non divisibile per 2
    // stampa i risultati (0 = falso, 1 = vero)
    printf("Input valido? %d\n", letto);
    printf("Numero positivo? %d\n", positivo);
    printf("Numero dispari? %d\n", dispari);
}
```

| Input | Input valido? | Numero positivo? | Numero dispari? |
|---|:-:|:-:|:-:|
| `7` | 1 | 1 | 1 |
| `-4` | 1 | 0 | 0 |
| `-7` | 1 | 0 | 1 |
| `0` | 1 | 0 | 0 |
| `abc` | 0 | 0 | 0 |
| `3.9` | 1 | 1 | 1 |

Con `3.9` la `scanf` legge il 3 e si ferma al punto, come nella 02C: per lei l'input è valido.

> [!TRAPPOLA] Dispari si controlla con != 0
> Con i negativi, in C, il resto ha il segno del primo numero: `-7 % 2` vale **−1**, non 1. Quindi `numero % 2 == 1` direbbe che −7 non è dispari. `numero % 2 != 0` funziona sempre, ed è quello che usano le slide.

::: prova Con `int n = 0;`, quanto vale `n` dopo `bool r = (n > 0) && (++n > 0);`? E dopo `bool s = (n == 0) || (++n > 0);`?
Dopo la prima riga `n` vale ancora 0: `n > 0` è falso, quindi `++n` non viene eseguito. Dopo la seconda vale ancora 0: `n == 0` è vero, e con `||` basta. L'ho provato con gcc.
:::

> [!RICORDA]
> - `&&` si ferma alla prima parte falsa, `||` alla prima vera.
> - Metti per primo il controllo che protegge: `divisore != 0 && …`, `scanf(…) == 1 && …`.

## Condizioni lunghe: dare un nome ai pezzi (slide 19)

Quando `&&` e `||` si mescolano, una condizione diventa difficile da leggere e facile da sbagliare. L'esempio delle slide:

```c
bool sconto = registrato && spesaTotale >= 100 ||
              (codiceNonScaduto && attivatoDallUtente);
```

Le slide propongono di spezzarla in **variabili `bool` intermedie**, con nomi che dicono che cosa controllano:

```c
bool clientePremium = registrato && (spesaTotale >= 100);
bool promoExtra     = codiceNonScaduto && attivatoDallUtente;
bool sconto         = clientePremium || promoExtra;
```

L'ultima riga ora si legge come una frase: «c'è lo sconto se il cliente è premium oppure c'è la promozione».

> [!TRAPPOLA] La prima versione non compila con -Werror
> Ho compilato la versione lunga della slide 19 con `gcc -Wall`: gcc avvisa `suggest parentheses around '&&' within '||'`. Con `-Werror`, come all'esame, il programma non compila. La versione spezzata compila senza avvisi. Se non vuoi spezzare, metti le parentesi: `(registrato && spesaTotale >= 100) || (codiceNonScaduto && attivatoDallUtente)`.

### L'ordine delle operazioni

Senza parentesi, il C calcola in quest'ordine, dal primo all'ultimo:

| Ordine | Operatori | Esempio |
|:-:|---|---|
| 1 | `!` | `!a` |
| 2 | `*`, `/`, `%` | `n % 2` |
| 3 | `+`, `-` | `b - 3` |
| 4 | `<`, `>`, `<=`, `>=` | `x < 18` |
| 5 | `==`, `!=` | `n % 2 != 0` |
| 6 | `&&` | |
| 7 | `\|\|` | |
| 8 | `=` | `bool r = …` |

Per questo `numero % 2 != 0` funziona senza parentesi: prima il resto, poi il confronto. E `a || b && c` vuol dire `a || (b && c)`, perché `&&` viene prima. Non serve ricordare la tabella a memoria: nel dubbio, **metti le parentesi**.

> [!TRAPPOLA] Il ! si attacca a una cosa sola
> `!x > 0` non vuol dire «x non è positivo». Il `!` viene prima di `>`, quindi si calcola `(!x) > 0`: con `x = 5`, `!x` vale 0 e il risultato è 0. Per negare il confronto servono le parentesi: `!(x > 0)`, cioè `x <= 0`. gcc con `-Wall` se ne accorge e avvisa: `logical not is only applied to the left hand side of comparison`. Con `-Werror` non compila.

::: prova Spezza in variabili con un nome: «posso uscire se ho finito i compiti e non piove, oppure se è sabato».
`bool doveriFatti = compitiFiniti && !piove;`, poi `bool possoUscire = doveriFatti || sabato;`.
:::

> [!RICORDA]
> - Condizioni lunghe: variabili `bool` intermedie con nomi chiari.
> - `&&` viene prima di `||`; nel dubbio, parentesi.

## L'operatore ternario (slide 20)

A volte la domanda serve solo a scegliere tra **due valori**: «se x è pari prendi 100, altrimenti 200». Per questo il C ha un operatore con tre pezzi, l'**operatore ternario**:

```c
condizione ? valore_se_vero : valore_se_falso
```

Si legge: «la condizione è vera? Allora questo, altrimenti quello». L'esempio delle slide:

```c
int x = 5;
int y = (x % 2 == 0) ? 100 : 200;  // y = 200, perché x è dispari
```

Altri due usi tipici, provati:

```c
int massimo = (a > b) ? a : b;
printf("%s\n", voto >= 18 ? "promosso" : "bocciato");
```

Con `a = 3` e `b = 8`, `massimo` vale 8. `%s` stampa un testo: lo vedrai con le stringhe.

Le slide consigliano il ternario solo per scelte piccole e chiare. Quando la scelta è più complicata, o deve eseguire istruzioni e non solo scegliere un valore, si usa `if…else`, nella [03D](03D_decisioni.html).

::: prova Con `int t = 31;`, quanto vale `int stato = (t > 30) ? 2 : (t > 20) ? 1 : 0;`?
2, perché 31 è maggiore di 30. Con `t = 25` varrebbe 1, con `t = 10` varrebbe 0. Due ternari uno dentro l'altro si leggono male: qui un `if` sarebbe più chiaro.
:::

> [!RICORDA]
> - `c ? a : b` vale `a` se `c` è vera, `b` se è falsa.
> - Solo per scelte piccole; per il resto, `if…else`.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `==` | «uguale uguale» | i due valori sono uguali? | `pin == 1234` |
| `!=` | «diverso» | i due valori sono diversi? | `contatore != n` |
| `<=`, `>=` | «minore o uguale», «maggiore o uguale» | confronti con l'uguale compreso | `voto >= 18` |
| `&&` | «and», «e» | vere tutte e due | `x > 0 && y > 0` |
| `\|\|` | «or», «o» | almeno una vera | `eta < 12 \|\| tesserato` |
| `!` | «not», «non» | rovescia vero e falso | `!accountBloccato` |
| `bool` | «bul» | tipo con due valori, da `stdbool.h` | `bool ok = true;` |
| `true`, `false` | «tru», «fols» | vero (1) e falso (0) | |
| `? :` | «ternario» | sceglie tra due valori | `a > b ? a : b` |

## Verso l'esame

All'esame le condizioni sono dappertutto: per decidere che cosa fare con `if`, per fermare un ciclo con `while`, per controllare un indice. Gli errori tipici che fanno perdere punti, o che fanno fallire la compilazione su CodeRunner con `-Wall -Werror`:

1. **`=` al posto di `==`**: con `-Wall -Werror` dentro un `if` non compila, ma in un'altra posizione può passare e dare un risultato sbagliato;
2. **intervalli scritti come in matematica**: `0 <= x <= 10` non compila con `-Werror`;
3. **`&&` e `||` mescolati senza parentesi**: avviso di gcc, quindi errore con `-Werror`;
4. **l'ordine sbagliato nei controlli** che proteggono: prima `divisore != 0`, poi la divisione; prima l'indice dentro l'intervallo, poi l'elemento;
5. **`% 2 == 1` per i dispari**: sbagliato con i negativi.

Più avanti, negli esercizi sulla **correttezza** dei programmi, scriverai condizioni dentro `assert`: lì serve saper scrivere e negare una condizione senza errori.

> [!METODO] Negare una condizione
> Per scrivere il contrario di una condizione, senza `!` davanti:
> 1. ogni confronto diventa il suo contrario: `<` diventa `>=`, `==` diventa `!=`, e così via;
> 2. ogni `&&` diventa `||` e ogni `||` diventa `&&` (leggi di De Morgan).
>
> Il contrario di `x >= 18 && x <= 30` è `x < 18 || x > 30`. Ho controllato con `a = 3`, `bb = 8`: `!(a > 0 && bb > 10)` e `a <= 0 || bb <= 10` valgono tutti e due 1.

## Quiz

```quiz
D: Con `int a = 5, b = 3;`, quanto vale `a > b && b > 4`?
+ 0
- 1
- 3
- 5
- non compila
= `a > b` vale 1, ma `b > 4` vale 0: con `&&` servono vere tutte e due, quindi il risultato è 0. La risposta più insidiosa è 1, che si ottiene leggendo solo la prima parte.

D: Che cosa stampa `bool b = 7; printf("%d", b);`?
+ `1`
- `7`
- `true`
- `0`
- non compila
= Ogni numero diverso da 0 messo in un `bool` diventa `true`, che si stampa come 1. La risposta più insidiosa è `true`: `printf` con `%d` stampa un numero, non la parola.

D: Quale espressione dice se `x` è tra 1 e 10, estremi compresi?
+ `1 <= x && x <= 10`
- `1 <= x <= 10`
- `1 <= x || x <= 10`
- `x >= 1 && x < 10`
- `!(x < 1 && x > 10)`
= Servono due confronti uniti da `&&`. La risposta più insidiosa è `1 <= x <= 10`: si calcola da sinistra e vale sempre 1. Con `||` è vera per ogni numero; con `x < 10` il 10 resta fuori; l'ultima nega una condizione che non è mai vera.

D: Con `int d = 0, n = 10;`, che cosa succede con `bool c = (d != 0) && (n / d > 2);`?
+ `c` vale 0 e la divisione non viene fatta
- il programma si ferma per divisione per zero
- `c` vale 1
- non compila
- `c` vale 0, ma la divisione viene fatta lo stesso
= `d != 0` è falso, e con `&&` il calcolo si ferma lì: è il cortocircuito. La risposta più insidiosa è la divisione per zero: succederebbe con le due parti scambiate.

D: Con `int n = -9;`, quale espressione è vera?
+ `n % 2 != 0`
- `n % 2 == 1`
- `n % 2 == 0`
- `!(n % 2)`
- `n % 2 > 0`
= In C `-9 % 2` vale −1. Solo `n % 2 != 0` riconosce il dispari. La risposta più insidiosa è `n % 2 == 1`: funziona solo con i positivi.

D: Quanto vale `int y = (4 > 7) ? 10 : 20;`?
N: 20
= `4 > 7` è falso, quindi il ternario sceglie il valore dopo i due punti, 20.

D: Quale riga è uguale a `!(x > 0 && y > 0)`?
+ `x <= 0 || y <= 0`
- `x <= 0 && y <= 0`
- `x < 0 || y < 0`
- `!x > 0 && !y > 0`
- `x > 0 || y > 0`
= Per De Morgan il `&&` diventa `||`, e ogni confronto si rovescia: `>` diventa `<=`. La risposta più insidiosa è `x <= 0 && y <= 0`: rovescia i confronti ma lascia `&&`. `x < 0` dimentica lo zero.

D: Perché `bool s = a && b || c && d;` non compila con `gcc -Wall -Werror`?
+ gcc chiede le parentesi intorno agli `&&` dentro un `||`
- `&&` e `||` non si possono usare insieme
- manca `stdbool.h`
- `bool` non si può assegnare con un'espressione
- `||` vale solo per gli interi
= Il C la capisce, come `(a && b) || (c && d)`, ma gcc avvisa `suggest parentheses around '&&' within '||'`, e con `-Werror` l'avviso diventa un errore. La risposta più insidiosa è «non si possono usare insieme»: si può, con le parentesi.
```

## Esercizi

::: esercizio base Riscaldamento: 1 o 0?
Con `int a = 4, b = 9; bool c = false;`, calcola a mano: (a) `a == 4`; (b) `a = 4`, come valore; (c) `b % a == 1`; (d) `!c && a < b`; (e) `c || b > 10`.
::: soluzione
(a) 1. (b) 4: un assegnamento vale il valore assegnato, e `a` diventa 4. Dentro un `if` sarebbe vero. (c) 1: 9 % 4 = 1. (d) 1: `!c` è vero e 4 < 9. (e) 0: `c` è falso e 9 non è maggiore di 10.
:::

::: esercizio base Riscaldamento: da parole a C
Scrivi un'espressione booleana per: (a) «`n` è pari»; (b) «`c` è una lettera maiuscola», con `char c`; (c) «l'anno è tra il 2000 e il 2099»; (d) «`x` non è né 0 né 1».
::: soluzione
(a) `n % 2 == 0`. (b) `'A' <= c && c <= 'Z'`: le maiuscole hanno codici ASCII consecutivi, da 65 a 90. (c) `2000 <= anno && anno <= 2099`. (d) `x != 0 && x != 1`.
:::

::: esercizio base Riscaldamento: il cortocircuito
Con `int k = 1;`, quanto vale `k` dopo ognuna delle righe, eseguite una dopo l'altra? (a) `bool p = (k > 5) && (++k > 0);` (b) `bool q = (k > 5) || (++k > 0);` (c) `bool r = (k == 2) || (++k > 0);`
::: soluzione
(a) 1: `k > 5` è falso e `&&` si ferma. (b) 2: `k > 5` è falso, quindi `||` deve guardare la seconda parte, ed esegue `++k`. (c) 2: `k == 2` è vero e `||` si ferma.
:::

::: esercizio base Riscaldamento: negare
Scrivi il contrario senza usare `!`: (a) `x > 5`; (b) `a == b && c < 0`; (c) `eta < 12 || tesserato`, con `tesserato` di tipo `bool`.
::: soluzione
(a) `x <= 5`. (b) `a != b || c >= 0`. (c) `eta >= 12 && !tesserato`: qui il `!` resta sulla variabile `bool`, che non ha un confronto da rovesciare.
:::

::: esercizio medio L'anno bisestile
Un anno è bisestile se è divisibile per 4 ma non per 100, oppure se è divisibile per 400. Scrivi un programma che legge un anno e stampa 1 se è bisestile, 0 se non lo è, usando una variabile `bool`.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int anno;
    scanf("%d", &anno);
    bool divPer4ManonPer100 = (anno % 4 == 0) && (anno % 100 != 0);
    bool divPer400 = (anno % 400 == 0);
    bool bisestile = divPer4ManonPer100 || divPer400;
    printf("%d\n", bisestile);
}
```
Con 2024 stampa 1, con 2026 stampa 0, con 1900 stampa 0 (divisibile per 100 ma non per 400), con 2000 stampa 1. Le due variabili intermedie evitano gli `&&` dentro un `||` senza parentesi.
:::

::: esercizio medio Il triangolo
Tre lunghezze intere `a`, `b`, `c` formano un triangolo se sono tutte positive e ognuna è minore della somma delle altre due. Scrivi la condizione con variabili `bool` intermedie, e prova 3, 4, 5 e 1, 2, 3.
::: soluzione
```c
bool positive = a > 0 && b > 0 && c > 0;
bool disuguaglianze = a < b + c && b < a + c && c < a + b;
bool triangolo = positive && disuguaglianze;
```
Con 3, 4, 5 vale 1. Con 1, 2, 3 vale 0: 3 non è minore di 1 + 2, perché è uguale. È il triangolo «schiacciato» in un segmento.
:::

::: esercizio esame Input valido e nell'intervallo
Scrivi un programma che legge un voto intero e stampa `1` se la lettura è riuscita **e** il voto è tra 18 e 30 compresi, `0` altrimenti. Non deve mai guardare la variabile se `scanf` non ha letto niente. Prova con `25`, `17`, `31` e `ciao`.
::: soluzione
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int voto;
    bool letto = (scanf("%d", &voto) == 1);
    bool valido = letto && 18 <= voto && voto <= 30;
    printf("%d\n", valido);
}
```
Stampa 1 con 25, e 0 con 17, 31 e `ciao`. Con `ciao` il cortocircuito si ferma a `letto`, che è falso: `voto` contiene «?» ma non viene mai confrontato. `a && b && c` si calcola come `(a && b) && c`, quindi qui gcc non chiede parentesi.
:::

## Domande di ripasso

::: domanda Quanto vale in C un confronto vero? E uno falso?
1 e 0.
:::

::: domanda Che differenza c'è tra `=` e `==`?
`=` assegna un valore a una variabile; `==` chiede se due valori sono uguali e vale 1 o 0.
:::

::: domanda Che cosa porta `stdbool.h`?
Il tipo `bool` e le costanti `true` e `false`.
:::

::: domanda Quando è vera `a && b`? E `a || b`?
`a && b` quando sono vere tutte e due; `a || b` quando ne è vera almeno una, anche tutte e due.
:::

::: domanda Come si scrive in C «x tra 0 e 10, compresi»?
`0 <= x && x <= 10`. La scrittura `0 <= x <= 10` è sempre vera.
:::

::: domanda Che cos'è il cortocircuito e a che cosa serve?
Il C smette di calcolare un `&&` alla prima parte falsa e un `||` alla prima vera. Serve a proteggere la seconda parte, per esempio a non dividere per zero o a non usare un valore non letto.
:::

::: domanda Quando conviene l'operatore ternario?
Per scegliere tra due valori con una condizione semplice. Per scelte più complicate si usa `if…else`.
:::

## Glossario

```glossario
Espressione booleana | Un'espressione con risposta vero o falso; in C vale 1 o 0.
Operatore relazionale | ==, !=, <, >, <=, >=: confronta due valori.
bool | Tipo con due valori, true e false, da stdbool.h; occupa un byte.
true, false | Le costanti vero (1) e falso (0) di stdbool.h.
&& (AND) | Vero quando sono vere tutte e due le parti.
|| (OR) | Vero quando è vera almeno una parte.
! (NOT) | Rovescia vero e falso.
Tavola di verità | Tabella con il risultato per ogni combinazione di vero e falso.
Cortocircuito | Il calcolo di && o || si ferma appena il risultato è sicuro.
Operatore ternario | condizione ? a : b, vale a se la condizione è vera, b se è falsa.
Leggi di De Morgan | Il contrario di un AND è l'OR dei contrari, e viceversa.
```

## Checklist

```checklist
- So che un confronto in C vale 1 o 0.
- Non confondo `=` e `==`.
- So usare `bool`, `true` e `false` con `stdbool.h`, e stampare un `bool` con `%d`.
- So le tavole di verità di `&&`, `||` e `!`.
- So scrivere un intervallo chiuso, aperto o semiaperto con due confronti.
- So perché `0 <= x <= 10` è sempre vero.
- So spiegare il cortocircuito e mettere per primo il controllo che protegge.
- So spezzare una condizione lunga in variabili `bool` con un nome.
- So negare una condizione con De Morgan.
- So usare l'operatore ternario per scegliere tra due valori.
```

## Fonti

- Slide «Espressioni booleane. Operatori logici per decidere nei programmi» (03C_booleans), Programmazione I – Teoria, canale B, A.A. 2026/27, E. G. Amparore: perché servono (slide 2), operatori (3–4), il tipo `bool` (5–7), espressioni booleane e tavole di verità (8–12), intervalli (13–14), cortocircuito (15–18), espressioni complesse (19), operatore ternario (20).
- Elenco delle lezioni dei canali A e C dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Tutti i programmi delle slide e delle soluzioni li ho compilati con gcc 16.1 su Windows 11, con `-Wall -Werror`, ed eseguiti; gli avvisi citati sono quelli veri. Le soluzioni, i quiz e gli esercizi sono di questi appunti.
