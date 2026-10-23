---
corso: PROG1
lezione: S4
tipo: riassunto
titolo: "Settimana 4: cicli, array e stringhe"
data: 2026-10-21
docenti: Elvio Amparore
sopratitolo: Riassunto settimanale · Programmazione I · Canale B · 19/10 – 23/10/2026
descrizione: >-
  Riassunto della settimana 4 di Programmazione I (canale B): il ciclo while con inizializzazione, condizione e
  aggiornamento, accumulatori e sentinelle, il for e gli intervalli, i cicli annidati, break e continue vietati
  all'esame, il do-while; gli array, gli indici da 0 e size_t, la scansione, somma, conteggio e massimo, array e
  puntatori, i VLA, i caratteri ASCII e le stringhe con il terminatore.
lede: >-
  Le due lezioni della settimana in poche pagine: come si scrive un ciclo che finisce, come si scorre un array senza
  uscire dai limiti, che cosa c'è davvero in una stringa, e le domande per controllarti.
materiale: slide
scheda:
  Lezioni: "[04A](04A_iterazioni.html) mar 20/10 · [05A](05A_array_stringhe.html) mer 21/10"
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti delle lezioni 04A e 05A di Programmazione I (canale B), scritti sulle slide di E. G. Amparore
appunti_html: appunti/PROG1/riassunto_settimana_04.html
genera_html: true
---

## In breve

- `while (condizione) { … }` ripete finché la condizione è vera, e la controlla **prima** di ogni giro: se è falsa subito, zero giri.
- Ogni ciclo ha tre pezzi: **inizializzazione**, **condizione**, **aggiornamento**. Senza aggiornamento il ciclo non finisce, e gcc non avvisa.
- `for (init; condizione; aggiornamento)` è un `while` con i tre pezzi su una riga. L'intervallo `[a, b)` con passo 1 fa `b − a` giri.
- All'esame **niente `break` e `continue`**: si esce dal ciclo con la condizione, usando una **variabile sentinella** `bool`.
- Un **array** è una fila di valori dello stesso tipo; gli indici validi sono `[0, n)`, si scrivono con `size_t` e si stampano con `%zu`.
- Il C **non controlla gli indici**: `v[n]` compila e legge fuori dall'array. Gli array non si assegnano e non si confrontano con `=` e `==`.
- Una **stringa** è un array di `char` che finisce con `'\0'`: `"ciao"` occupa 5 byte. Si legge con `scanf("%19s", nome)`, senza `&`.

> [!NOTA] Il laboratorio
> Il Laboratorio 03 (lunedì 19/10 per il turno B2, martedì 20/10 per il turno B1) non è in questo riassunto: non ho ancora le sue slide.

## 04A · Cicli: while, for e do-while (mar 20/10)

Il `while` è la terza struttura della programmazione strutturata, l'iterazione. Il blocco si ripete finché la condizione è vera; ogni ripetizione è un giro.

```grafico
titolo: La terna di ogni ciclo nel while che stampa da 0 a 9: inizializzazione (rosa), condizione (verde), aggiornamento (ambra). Dopo l'aggiornamento si torna sempre alla condizione; si esce solo dal ramo «falso».
x: 0 10
y: 0.4 7.6
assi: no
griglia: no
poligono: 3.4 6.6 6.6 6.6 6.6 7.3 3.4 7.3 | rosa
testo: 5 6.95 | rosa | "i = 0"
freccia: 5 6.6 5 5.95 | grigio
poligono: 5 5.9 7.2 5.1 5 4.3 2.8 5.1 | verde
testo: 5 5.1 | verde | "i < 10 ?"
freccia: 5 4.3 5 3.65 | grigio
testo: 5.85 4 | verde | "vero"
poligono: 3.4 2.9 6.6 2.9 6.6 3.6 3.4 3.6 | blu
testo: 5 3.25 | blu | "stampa i"
freccia: 5 2.9 5 2.25 | grigio
poligono: 3.4 1.5 6.6 1.5 6.6 2.2 3.4 2.2 | ambra
testo: 5 1.85 | ambra | "i++"
segmento: 3.4 1.85 1.3 1.85 | grigio
segmento: 1.3 1.85 1.3 5.1 | grigio
freccia: 1.3 5.1 2.75 5.1 | grigio
segmento: 7.2 5.1 8.7 5.1 | rosa
testo: 7.95 5.5 | rosa | "falso"
segmento: 8.7 5.1 8.7 0.8 | rosa
freccia: 8.7 0.8 6.65 0.8 | rosa
testo: 5 0.8 | grigio | "fine"
```

| Che cosa | Come si scrive | Da ricordare |
|---|---|---|
| accumulatore | `int somma = 0;` e nel ciclo `somma += i;` | parte da 0 per le somme, da 1 per i prodotti |
| contatore | `count++` quando un dato è valido | prima di dividere per `count`, controlla che non sia 0 |
| valore sentinella | un'altezza negativa che segnala la fine | non è un dato: non va nella somma |
| variabile sentinella | `bool continua = true; while (continua) { … }` | il blocco la cambia, il ciclo finisce alla condizione |
| `for` su un intervallo | `for (int i = 0; i < 10; i++)` | `[0, 10)`: lo 0 dentro, il 10 fuori |
| ciclo annidato | un `for` dentro un `for` | 3 giri fuori × 3 dentro = 9 esecuzioni |
| `do-while` | `do { … } while (c);` | almeno un giro; il `;` finale è obbligatorio |

- Una variabile dichiarata **nel blocco** del ciclo nasce e sparisce a ogni giro; quella dichiarata nell'inizializzazione del `for` esiste solo dentro il `for`.
- Gli errori dei cicli **compilano quasi tutti**: condizione sempre vera, aggiornamento mancante, un giro in più (`<=` al posto di `<`), contatore cambiato nel blocco. Si trovano contando i giri a mano.
- `for` quando sai quanti giri servono, `while` quando decide l'input.
- **Errore nella slide 38**: `!(1 <= x || x <= 10)` è sempre falso e accetta tutto; l'intervallo vuole `&&`: `!(1 <= x && x <= 10)`.

::: prova Quanti giri fa `for (int i = 20; i >= 2; i -= 7)`, e con quali valori?
3: `i` vale 20, 13, 6. Al passo dopo vale −1, e la condizione è falsa.
:::

> [!RICORDA]
> - Inizializzazione, condizione, aggiornamento: controlla sempre che la condizione possa diventare falsa.
> - Niente `break`: la sentinella va nella condizione, con `&& !trovato`.

## 05A · Array e stringhe (mer 21/10)

Un array mette sotto un solo nome tanti valori dello stesso tipo, in celle attaccate: `int voti[5];` ne crea cinque, `voti[0]` … `voti[4]`.

```grafico
titolo: La stringa "ciao" è un array di 5 char: quattro lettere e il terminatore '\0' (in rosa). La scansione con l'indice o con il puntatore si ferma quando trova il terminatore.
x: 0 11
y: 0.6 3.6
assi: no
griglia: no
proporzioni: libere
testo: 1.5 3.2 | grigio | "0"
testo: 3.5 3.2 | grigio | "1"
testo: 5.5 3.2 | grigio | "2"
testo: 7.5 3.2 | grigio | "3"
testo: 9.5 3.2 | grigio | "4"
poligono: 0.6 1.7 2.4 1.7 2.4 2.8 0.6 2.8 | blu
testo: 1.5 2.25 | blu | "'c'"
poligono: 2.6 1.7 4.4 1.7 4.4 2.8 2.6 2.8 | blu
testo: 3.5 2.25 | blu | "'i'"
poligono: 4.6 1.7 6.4 1.7 6.4 2.8 4.6 2.8 | blu
testo: 5.5 2.25 | blu | "'a'"
poligono: 6.6 1.7 8.4 1.7 8.4 2.8 6.6 2.8 | blu
testo: 7.5 2.25 | blu | "'o'"
poligono: 8.6 1.7 10.4 1.7 10.4 2.8 8.6 2.8 | rosa
testo: 9.5 2.25 | rosa | "'\0'"
testo: 5.5 1.05 | grigio | "for (size_t i = 0; s[i] != '\0'; i++)"
```

| Che cosa | Esempio | Da ricordare |
|---|---|---|
| dichiarazione | `int v[5] = {18, 19};` | gli elementi senza valore iniziale valgono 0; senza lista sono indeterminati |
| scansione | `for (size_t i = 0; i < n; i++)` | gli indici sono `[0, n)` |
| all'indietro | `for (size_t i = n; i > 0; i--)` con `v[i-1]` | `size_t i >= 0` è sempre vero: compila e non finisce |
| massimo | `max = v[0];` poi il ciclo da 1 | serve un array non vuoto |
| array e puntatori | `v[i]` è `*(v + i)` | `v` diventa `&v[0]`; `sizeof(v)` è tutto l'array |
| VLA | `int v[n];` con `n` letto | niente `= {0}`; `n` almeno 1 |
| caratteri | `'A'` = 65, `'a'` = 97, `'0'` = 48 | `'7' - '0'` vale 7 |
| stringhe | `char s[] = "ciao";` | 5 byte; `char s[4] = "ciao"` lascia fuori il `'\0'` senza avvisi |
| lettura | `scanf("%19s", nome)`, `scanf(" %49[^\n]", frase)` | niente `&`; il limite è la lunghezza meno 1 |

- `b = a` tra array non compila (`assignment to expression with array type`); `a == b` confronta gli indirizzi e con `-Wall -Werror` non compila. Si copia e si confronta elemento per elemento.
- `v[5]` in un array di 5 compila con `-Wall -Werror`; gcc lo vede solo con `-O2`. Con un indice variabile non lo vede mai.
- Un letterale stringa non si modifica: `char* s = "ciao"; s[0] = 'm';` compila e si blocca. Con `const char*` gcc lo ferma.
- Unicode dà un numero a ogni carattere del mondo; in UTF-8 un carattere occupa da 1 a 4 byte, e `sizeof("è")` vale 3. In Programmazione I si usa un `char` per carattere.

::: prova Che cosa stampa `char t[] = "ciao"; t[0] = t[3]; printf("%s", t);`?
`oiao`: `t[3]` è `'o'`, e l'array è modificabile.
:::

> [!RICORDA]
> - Indici `[0, n)`: `<` e non `<=`.
> - Una stringa finisce con `'\0'`, e ogni funzione sulle stringhe lo cerca.

## Verso l'esame

- **Programmazione**: l'esercizio iterativo è una funzione con un ciclo su un array passato come (lunghezza, array). Una sola `return`, niente `break`; «per ogni» parte da `true`, «esiste» da `false`, e la sentinella va nella condizione del ciclo.
- **Stato della memoria**: un array occupa celle consecutive sullo stack; quelle mai scritte valgono «?». Una variabile dichiarata nel blocco del ciclo si crea e si cancella a ogni giro.
- **Casi limite** da provare sempre: array vuoto, un solo elemento, l'ultimo indice, la stringa vuota.
- Appelli 2026/27: lunedì 25/01/2027 e giovedì 11/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Qual è la differenza tra `while` e `do-while`?
Il `while` controlla la condizione prima di ogni giro e può fare zero giri; il `do-while` la controlla alla fine e fa sempre almeno un giro.
:::

::: domanda Quanti giri fa un `for` sull'intervallo `[a, b)` con passo 1?
`b − a`.
:::

::: domanda Come si esce da un ciclo senza `break` quando si è trovato quello che si cercava?
Con una variabile sentinella `bool trovato = false;` messa nella condizione, `i < n && !trovato`, e assegnata a `true` nel blocco.
:::

::: domanda Quali sono gli indici validi di un array di lunghezza `n`?
Da 0 a `n − 1`, cioè l'intervallo `[0, n)`.
:::

::: domanda Perché `for (size_t i = n - 1; i >= 0; i--)` non finisce?
Perché `size_t` è senza segno: `i >= 0` è sempre vero, e dopo 0 `i` diventa il numero più grande possibile.
:::

::: domanda Quanti byte occupa `"esame"`?
6: cinque lettere più il terminatore `'\0'`.
:::

::: domanda Perché in `scanf("%19s", nome)` non serve la `&`?
Perché `nome` è un array, e come argomento diventa già il puntatore al primo elemento.
:::

## Quiz d'esame

L'esame di Programmazione I non ha domande a crocette. Ha due esercizi di teoria su CodeRunner, «correttezza» e «stato della memoria», e tre di programmazione. Le domande qui sotto sono **sul modello** di questi esercizi, con gli argomenti della settimana: lo stato della memoria come l'esercizio B4 del Moodle 2023/24, riproposto nel canale B nel 2024, con le celle non inizializzate; la correttezza con l'invariante di un ciclo, come nella moltiplicazione della 01A; gli errori che fanno fallire i test. Ho compilato e provato tutto con gcc 16.1 e `-Wall -Werror`.

```quiz
D: Sul modello dello stato della memoria (esercizio B4, celle non inizializzate). Dopo `int v[4]; for (size_t i = 0; i < 4; i += 2) { v[i] = (int)i * 3; }`, quanto valgono `v[2]` e `v[1]`?
+ `v[2]` = 6, `v[1]` indeterminato
- `v[2]` = 6, `v[1]` = 0
- `v[2]` = 6, `v[1]` = 3
- `v[2]` = 2, `v[1]` indeterminato
- `v[2]` = 3, `v[1]` = 0
= Il ciclo scrive solo gli indici 0 e 2: `v[0]` = 0, `v[2]` = 6. `v[1]` e `v[3]` non vengono mai scritti, e l'array è dichiarato senza lista: il loro valore è indeterminato, la «?» degli esercizi. La risposta più insidiosa è `v[1]` = 0: varrebbe 0 solo con `int v[4] = {0};`.

D: Sul modello dello stato della memoria. Dopo `int s = 0; for (int i = 1; i <= 5; i += 2) { s += i; }`, quanto vale `s`, e quanti giri ha fatto il ciclo?
+ `s` = 9, 3 giri
- `s` = 15, 5 giri
- `s` = 9, 5 giri
- `s` = 6, 3 giri
- `s` = 4, 2 giri
= `i` vale 1, 3, 5: tre giri, e `s` = 1 + 3 + 5 = 9. Al passo dopo `i` vale 7 e la condizione è falsa. La risposta più insidiosa è `s` = 15: è la somma di tutti i numeri da 1 a 5, ma il passo è 2.

D: Sul modello di «correttezza», con un invariante. Nel ciclo `int t = 0, k = 0; while (k < n) { t = t + m; k++; }`, quale frase resta vera all'inizio di ogni giro e alla fine?
+ `t == m * k`
- `t == m * n`
- `t == k`
- `t == m + k`
- `k == n`
= All'inizio `t` = 0 e `k` = 0; a ogni giro `t` aumenta di `m` e `k` di 1, quindi `t == m * k` resta vera. Alla fine `k == n`, e quindi `t == m * n`. La risposta più insidiosa è `t == m * n`: vale solo alla fine, non durante. `k == n` vale solo all'uscita. Con `m` = 7 e `n` = 4 il programma dà `t` = 28.

D: Sul modello degli errori che fanno fallire i test. Una funzione deve sommare gli elementi di un array di lunghezza `n` con `for (size_t i = 0; i <= n; i++) { somma += v[i]; }`. Che cosa succede?
+ Compila, ma legge anche `v[n]`, che è fuori dall'array
- Non compila con `-Wall -Werror`
- Salta l'ultimo elemento
- Salta il primo elemento
- Funziona solo se `n` è pari
= Gli indici validi sono `[0, n)`: con `<=` l'ultimo giro legge `v[n]`, e il risultato contiene un valore a caso. gcc non avvisa, perché l'indice è una variabile. La risposta più insidiosa è «non compila»: il C non controlla gli indici.

D: Sul modello della programmazione senza `break`. Con `int w[6] = {4, -2, 7, -5, 0, 3};`, `size_t i = 0; bool trovato = false;` e `while (i < 6 && !trovato) { if (w[i] < 0) { trovato = true; } else { i++; } }`, quanto vale `i` alla fine?
N: 1
= Al primo giro `w[0]` = 4 non è negativo, quindi `i` diventa 1. Al secondo `w[1]` = −2 è negativo: `trovato` diventa vero e `i` non cambia. La condizione è falsa e il ciclo finisce con `i` = 1, la posizione del primo negativo.

D: Sul modello dello stato della memoria. Quanto vale `sizeof(e)` dopo `char e[] = "esame";`?
N: 6
= Cinque lettere più il terminatore `'\0'`, che il compilatore aggiunge.

D: Sul modello degli errori di compilazione. Quale riga **non** compila con `gcc -Wall -Werror`, con `char parola[20];`?
+ `scanf("%19s", &parola);`
- `scanf("%19s", parola);`
- `char nome[4] = "Anna";`
- `printf("%d", parola[25]);`
- `for (size_t i = 19; i >= 0; i--) { parola[i] = 'x'; }`
= `&parola` ha tipo `char (*)[20]`, e gcc dà `format '%s' expects argument of type 'char *'`. La risposta più insidiosa è il ciclo con `i >= 0`: è sbagliato (non finisce mai), ma con `-Wall` compila; lo ferma solo `-Wextra`. Anche `"Anna"` in 4 posti e `parola[25]` compilano, e sono errori.

D: Sul modello dello stato della memoria. Dopo `int x = 1, y = 0; do { y += x; x *= 2; } while (x < 10);`, quanto valgono `x` e `y`?
+ `x` = 16, `y` = 15
- `x` = 8, `y` = 7
- `x` = 16, `y` = 31
- `x` = 10, `y` = 15
- `x` = 2, `y` = 1
= `y` riceve 1, 2, 4, 8 e `x` diventa 2, 4, 8, 16. Dopo il giro con `x` = 8 la condizione `16 < 10` è falsa: `y` = 15. La risposta più insidiosa è `x` = 8, `y` = 7: ci si ferma un giro prima dimenticando che la condizione si controlla dopo il blocco.
```

## Fonti

- Le lezioni complete: [04A · Cicli e ripetizioni, while, for e do-while](04A_iterazioni.html), [05A · Array e stringhe](05A_array_stringhe.html), con i programmi provati, i quiz e gli esercizi.
- Slide del canale B: 04A_iterazioni e 05A_array_stringhe (E. G. Amparore).
- Esercizio B4 e regole d'esame dalla [raccolta di esercizi d'esame](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md) e dalla [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
