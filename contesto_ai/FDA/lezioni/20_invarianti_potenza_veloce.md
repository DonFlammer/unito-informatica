---
corso: FDA
lezione: "20"
titolo: "Esercizi sugli invarianti: divisione intera e potenza veloce"
data: 2026-11-16
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 20 · Esercizi sugli invarianti di ciclo
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 20 di Fondamenti dell'Informatica (canale B): esercizi sugli invarianti di ciclo. Il programma
  della divisione intera con condizione di ingresso e di uscita, correttezza parziale e totale, la terminazione; la
  potenza veloce con i quadrati successivi, il suo invariante dimostrato per induzione, la correttezza e la versione
  «come quiz».
lede: >-
  Per calcolare una potenza con esponente 1000 non servono mille moltiplicazioni: ne bastano una quindicina, elevando
  al quadrato. Il ciclo che lo fa è corto ma non si capisce a occhio perché funzioni. L'invariante lo spiega in una
  riga, ed è l'esercizio tipico del quiz sugli invarianti.
materiale: libro
scheda:
  Lucidi: F. Cardone, «Invarianti, principio di induzione e correttezza dei programmi» e «Il principio di induzione»
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  Diario delle lezioni del canale B (lezione 21 del docente); F. Cardone, «Invarianti, principio di induzione e
  correttezza dei programmi» (divisione intera, quadrato di un numero) e lucidi «Il principio di induzione»;
  simulazione d'esame 2 del 2023/24, quiz 7; l'algoritmo della potenza per quadrati successivi nella sua forma
  consueta
appunti_html: appunti/FDA/20_invarianti_potenza_veloce.html
genera_html: true
---

## In breve

- Un programma è **corretto** rispetto a una **condizione di ingresso** e a una **condizione di uscita**: se i dati rispettano la prima, alla fine i risultati rispettano la seconda.
- **Correttezza parziale**: se il programma termina, il risultato è giusto. **Correttezza totale**: in più, termina sempre.
- La **terminazione** di un ciclo si dimostra trovando una quantità intera che non scende sotto zero e cala a ogni giro.
- La **divisione intera** per sottrazioni ripetute ha l'invariante `X == q * D + r`.
- La **potenza veloce** calcola una potenza con pochi giri: se l'esponente è pari eleva la base al quadrato e dimezza l'esponente, se è dispari toglie 1 all'esponente e moltiplica il risultato.
- Il suo invariante è `ris * x^y == a^n`: quello che è già nel risultato, per quello che resta da calcolare, dà sempre la potenza cercata.
- All'uscita `y` vale 0, e l'invariante diventa `ris == a^n`.
- Nel quiz si controlla ogni affermazione in due momenti: prima del ciclo e dopo un giro qualsiasi.

> [!CANALI]
> Nel canale B è la lezione di lunedì 16/11, dalle 9 alle 11. Per il docente è la lezione 21: qui è la 20. Il diario del canale B dice: «Esercizi su invarianti: potenza veloce, svolta informalmente e come quiz».
>
> **Che cosa non so.** Il codice esatto usato dal docente non ce l'ho. La potenza veloce si scrive in più modi equivalenti: qui uso quello in cui ogni giro fa una sola cosa, perché l'invariante si controlla più facilmente, e riporto in una nota la versione più compatta. Se in aula i nomi delle variabili erano altri, l'invariante è lo stesso con i nomi cambiati.
>
> **I lucidi.** L'esempio della divisione intera e quello del quadrato vengono dai lucidi di Felice Cardone (canale A) sugli invarianti, che spiegano le parole che servono: condizione di ingresso, condizione di uscita, correttezza parziale e totale. Nei lucidi i programmi sono in Java; qui sono riscritti in C, e cambia solo la stampa.
>
> Servono la [lezione 18](18_induzione.html), con l'invariante del fattoriale, e la [19](19_induzione_forte.html), con quello della potenza calcolata un fattore alla volta.

## Che cosa vuol dire «corretto»: la divisione intera

Dividere 14 per 3 senza usare la divisione si può: si toglie 3 finché si riesce, e si contano le volte. Da 14 si passa a 11, 8, 5, 2: quattro sottrazioni, e avanza 2.

```c
q = 0;
r = X;
while (r >= D) {
    r = r - D;
    q = q + 1;
}
```

Con `X = 14` e `D = 3`:

| Giri fatti | `q` | `r` | `q * D + r` |
|---|---|---|---|
| 0 | 0 | 14 | 14 |
| 1 | 1 | 11 | 14 |
| 2 | 2 | 8 | 14 |
| 3 | 3 | 5 | 14 |
| 4 | 4 | 2 | 14 |

```grafico
titolo: La divisione di 14 per 3 come salti all'indietro di 3 sulla retta. Ogni salto è un giro del ciclo: q conta i salti, r è il punto in cui si è arrivati. Dopo quattro salti r vale 2, che è minore di 3, e il ciclo si ferma
x: -0.8 15
y: 0 3.2
assi: no
griglia: no
proporzioni: libere
segmento: -0.4 1.0 14.6 1.0 | grigio
punto: 0 1.0 | grigio
testo: 0 0.45 | grigio | "0"
punto: 2 1.0 | verde
testo: 2 0.45 | verde | "2"
punto: 5 1.0 | blu
testo: 5 0.45 | blu | "5"
punto: 8 1.0 | blu
testo: 8 0.45 | blu | "8"
punto: 11 1.0 | blu
testo: 11 0.45 | blu | "11"
punto: 14 1.0 | blu
testo: 14 0.45 | blu | "14"
freccia: 14 1.3 11.2 1.3 | ambra
freccia: 11 1.3 8.2 1.3 | ambra
freccia: 8 1.3 5.2 1.3 | ambra
freccia: 5 1.3 2.2 1.3 | ambra
testo: 12.5 1.75 | ambra | "− 3"
testo: 9.5 1.75 | ambra | "− 3"
testo: 6.5 1.75 | ambra | "− 3"
testo: 3.5 1.75 | ambra | "− 3"
testo: 2 2.6 | verde | "resto"
testo: 8 2.6 | ambra | "4 salti: quoziente 4"
```

Per dire che il programma è giusto bisogna prima dire **che cosa deve fare**. Lo si fa con due condizioni.

> [!DEF] Condizione di ingresso, condizione di uscita, correttezza
> La **condizione di ingresso** è la proprietà che i dati devono avere all'inizio. La **condizione di uscita** è la proprietà che i risultati devono avere alla fine.
>
> Il programma è **parzialmente corretto** se, per ogni dato che rispetta la condizione di ingresso, quando il programma termina i risultati rispettano la condizione di uscita. È **totalmente corretto** se, in più, termina per ogni dato che rispetta la condizione di ingresso.

**Come si legge.** Per la divisione la condizione di ingresso è $X \ge 0$ e $D > 0$; quella di uscita è $X = q \cdot D + r$ con $r < D$, cioè «`q` è il quoziente e `r` è il resto». «Parzialmente» vuol dire che si promette solo questo: se arriva in fondo, il risultato è giusto. Che arrivi in fondo è un'altra dimostrazione.

L'invariante è la colonna che nella tabella non cambia: **`X == q * D + r`**.

> [!ESEMPIO] · `X == q * D + r` è un invariante
> **Passo base: dopo 0 giri.** `q = 0` e `r = X`: $0 \cdot D + X = X$. Vero.
>
> **Passo induttivo.** Suppongo che dopo $k$ giri valga $X = q \cdot D + r$, e che il ciclo faccia un altro giro. I valori nuovi sono $r' = r - D$ e $q' = q + 1$.
>
> Allora $q' \cdot D + r' = (q + 1) \cdot D + (r - D) = q \cdot D + r$.
>
> Per ipotesi induttiva l'ultima espressione vale $X$. Quindi l'invariante vale anche dopo $k + 1$ giri.

**Dall'invariante al risultato.** Il ciclo finisce quando `r >= D` è falsa, cioè con `r < D`. Insieme all'invariante è proprio la condizione di uscita. Questa è la correttezza parziale.

**La terminazione.** A ogni giro `r` cala di `D`, che è almeno 1 per la condizione di ingresso. E `r` non scende mai sotto zero, perché il giro si fa solo se `r >= D`. Un intero non negativo che cala a ogni giro non può calare per sempre: il ciclo si ferma. Con questo la correttezza è totale.

> [!TRAPPOLA] La condizione di ingresso non è un dettaglio
> Con `D = 0` l'invariante resta vero a ogni giro, ma `r` non cala più e il ciclo non finisce mai. Il programma è parzialmente corretto anche in quel caso, perché «se termina» non succede. È la condizione $D > 0$ a garantire la terminazione.

::: prova Con `X = 17` e `D = 5`, scrivi `q` e `r` dopo ogni giro. Quanti giri fa il ciclo?
Dopo 0 giri: 0 e 17. Poi 1 e 12, 2 e 7, 3 e 2. Tre giri: 2 è minore di 5 e il ciclo si ferma. In ogni riga $q \cdot 5 + r = 17$.
:::

> [!RICORDA]
> - Corretto = rispetta la condizione di uscita, per i dati che rispettano quella di ingresso.
> - Parziale: se termina, il risultato è giusto. Totale: in più, termina.
> - Terminazione: una quantità intera, mai negativa, che cala a ogni giro.

## La potenza veloce: l'idea

Il ciclo della [lezione 19](19_induzione_forte.html) calcola una potenza moltiplicando per la base un fattore alla volta: per l'esponente 1000 fa mille giri. Si può fare molto meglio usando i quadrati.

Per calcolare $3^{16}$ bastano quattro moltiplicazioni: $3^2 = 9$, poi $9^2 = 3^4$, poi il quadrato di questo, che è $3^8$, e ancora un quadrato per $3^{16}$. Ogni quadrato **raddoppia** l'esponente.

Se l'esponente non è una potenza di 2, si usano due regole:

- esponente **pari**: $x^y = (x^2)^{y/2}$. Si eleva la base al quadrato e si dimezza l'esponente;
- esponente **dispari**: $x^y = x \cdot x^{y-1}$. Si mette da parte un fattore $x$ e l'esponente diventa pari.

Per $3^{13}$: il 13 è dispari, quindi $3^{13} = 3 \cdot 3^{12}$. Il 12 è pari: $3^{12} = 9^6$. Il 6 è pari: $9^6 = 81^3$. E così via, finché l'esponente arriva a zero.

```grafico
titolo: Come scende l'esponente 13 nella potenza veloce. Quando è dispari si toglie 1 (frecce ambra), quando è pari si dimezza (frecce blu). In sei passi si arriva a 0; un fattore alla volta ne servirebbero tredici
x: 0 12.4
y: 0 3.2
assi: no
griglia: no
proporzioni: libere
testo: 0.8 1.4 | grigio | "13"
freccia: 1.3 1.4 2.3 1.4 | ambra
testo: 1.8 1.9 | ambra | "− 1"
testo: 2.8 1.4 | grigio | "12"
freccia: 3.3 1.4 4.3 1.4 | blu
testo: 3.8 1.9 | blu | ": 2"
testo: 4.7 1.4 | grigio | "6"
freccia: 5.1 1.4 6.1 1.4 | blu
testo: 5.6 1.9 | blu | ": 2"
testo: 6.5 1.4 | grigio | "3"
freccia: 6.9 1.4 7.9 1.4 | ambra
testo: 7.4 1.9 | ambra | "− 1"
testo: 8.3 1.4 | grigio | "2"
freccia: 8.7 1.4 9.7 1.4 | blu
testo: 9.2 1.9 | blu | ": 2"
testo: 10.1 1.4 | grigio | "1"
freccia: 10.5 1.4 11.5 1.4 | ambra
testo: 11.0 1.9 | ambra | "− 1"
testo: 11.9 1.4 | verde | "0"
testo: 6.2 0.5 | grigio | "pari: si dimezza · dispari: si toglie 1"
```

Il programma tiene tre variabili: `x` è la base che via via viene elevata al quadrato, `y` è l'esponente che resta, `ris` raccoglie i fattori messi da parte.

```c
x = a;
y = n;
ris = 1;
while (y > 0) {
    if (y % 2 == 1) {
        ris = ris * x;
        y = y - 1;
    } else {
        x = x * x;
        y = y / 2;
    }
}
```

Condizione di ingresso: `n >= 0`. Condizione di uscita: `ris == a^n`.

::: prova Quali passi fa l'esponente 10 fino a 0?
10 è pari: 5. 5 è dispari: 4. Poi 2, poi 1, poi 0. Cinque passi.
:::

> [!RICORDA]
> - Esponente pari: base al quadrato, esponente dimezzato.
> - Esponente dispari: un fattore nel risultato, esponente meno 1.
> - Il numero di giri cresce come il numero di cifre binarie dell'esponente, non come l'esponente.

## L'invariante della potenza veloce

Guardando solo il codice non si vede perché alla fine `ris` contenga la potenza. Lo si vede seguendo i valori, con `a = 3` e `n = 13`:

| Giri fatti | `x` | `y` | `ris` | `ris * x^y` |
|---|---|---|---|---|
| 0 | 3 | 13 | 1 | $1 \cdot 3^{13}$ |
| 1 | 3 | 12 | 3 | $3 \cdot 3^{12}$ |
| 2 | 9 | 6 | 3 | $3 \cdot 9^{6}$ |
| 3 | 81 | 3 | 3 | $3 \cdot 81^{3}$ |
| 4 | 81 | 2 | 243 | $243 \cdot 81^{2}$ |
| 5 | 6561 | 1 | 243 | $243 \cdot 6561$ |
| 6 | 6561 | 0 | 1594323 | $1594323$ |

L'ultima colonna vale sempre $3^{13} = 1594323$, scritto in modi diversi. L'invariante è:

> [!DEF] L'invariante della potenza veloce
> Dopo ogni numero di giri vale `ris * x^y == a^n`, insieme a `y >= 0`.

**Come si legge.** `ris` è la parte del risultato già calcolata; `x^y` è la parte che resta da calcolare. Il loro prodotto è sempre la potenza cercata. A ogni giro un pezzo passa dalla seconda parte alla prima, oppure la seconda parte viene riscritta con altri numeri senza cambiare valore.

La frase $S(k)$ da dimostrare per induzione è: «dopo $k$ giri, $ris \cdot x^y = a^n$».

> [!ESEMPIO] · La dimostrazione, per induzione sul numero di giri
> **Passo base: dopo 0 giri.** `x = a`, `y = n`, `ris = 1`: il prodotto è $1 \cdot a^n$. Vero.
>
> **Passo induttivo.** Suppongo $ris \cdot x^y = a^n$ dopo $k$ giri (ipotesi induttiva), e che il ciclo faccia un altro giro: quindi $y > 0$. Ci sono due casi.
>
> **Caso $y$ dispari.** I valori nuovi sono $ris' = ris \cdot x$ e $y' = y - 1$, mentre $x$ non cambia. Allora $ris' \cdot x^{y'} = ris \cdot x \cdot x^{y-1} = ris \cdot x^y$.
>
> **Caso $y$ pari.** I valori nuovi sono $x' = x^2$ e $y' = \frac{y}{2}$, mentre $ris$ non cambia. Allora $ris \cdot (x')^{y'} = ris \cdot (x^2)^{y/2} = ris \cdot x^y$.
>
> In tutti e due i casi il prodotto nuovo è uguale a quello vecchio, che per ipotesi induttiva vale $a^n$.

È una dimostrazione per induzione con dentro una dimostrazione **per casi**, come quelle della [lezione 17](17_contrapposizione_casi_equivalenze.html): i due casi sono i due rami dell'`if`, e insieme coprono tutto.

Nel caso pari c'è un punto da non saltare: `y / 2` in C è una divisione tra interi. Qui `y` è pari, quindi la divisione è esatta, e $\frac{y}{2}$ è proprio la metà. Con `y` dispari la formula $(x^2)^{y/2}$ con la divisione intera sarebbe sbagliata: $9^{6}$ non è $3^{13}$.

::: prova Con `a = 2` e `n = 10`, quanto valgono `x`, `y` e `ris` dopo 2 giri? L'invariante vale?
Dopo il primo giro: `x = 4`, `y = 5`, `ris = 1`. Dopo il secondo: `x = 4`, `y = 4`, `ris = 4`. Sì: $4 \cdot 4^4 = 1024 = 2^{10}$.
:::

> [!RICORDA]
> - Invariante: `ris * x^y == a^n`. Già calcolato per ancora da calcolare.
> - Passo induttivo per casi: un caso per ogni ramo dell'`if`.
> - Nel ramo pari la divisione per 2 è esatta, e per questo il valore non cambia.

## Correttezza e terminazione

Con l'invariante in mano la correttezza si scrive in poche righe, sempre con lo stesso schema: invariante più condizione di uscita.

1. Il ciclo finisce quando `y > 0` è falsa: quindi `y <= 0`.
2. Per l'invariante `y >= 0`. Insieme: `y == 0`.
3. Per l'invariante `ris * x^y == a^n`, e con `y == 0` la potenza `x^y` vale 1.
4. Quindi **`ris == a^n`**: è la condizione di uscita.

Perché `y >= 0` è un invariante: all'inizio `y` è `n`, che non è negativo per la condizione di ingresso. Il giro si fa solo con `y > 0`; nel ramo dispari `y` diventa `y - 1`, che è almeno 0, e nel ramo pari diventa la metà di un numero positivo.

**La terminazione.** La quantità che cala è `y`: nel ramo dispari diminuisce di 1, nel ramo pari si dimezza, e un numero positivo dimezzato è più piccolo. È un intero che non scende sotto zero e cala a ogni giro: il ciclo termina. La correttezza è totale.

**Quanti giri.** Dopo un giro «dispari» l'esponente è pari, quindi il giro dopo lo dimezza: ogni due giri l'esponente si dimezza almeno una volta. Per `n = 13` i giri sono 6; per `n = 60` sono 9, al posto di 60. In generale non superano il doppio del numero di cifre binarie di `n`.

Ho trascritto il ciclo in C con l'invariante controllato da un `assert` prima del ciclo e dopo ogni giro, e l'ho provato per le basi da 0 a 3 e gli esponenti da 0 a 30: nessun `assert` fallisce, e il risultato è sempre la potenza giusta.

> [!NOTA] La versione compatta
> Si trova anche scritta così: `while (y > 0) { if (y % 2 == 1) { ris = ris * x; } x = x * x; y = y / 2; }`. A ogni giro guarda l'ultima cifra binaria di `y`, e poi la butta via con la divisione intera. L'invariante è lo stesso, `ris * x^y == a^n`. Nel caso dispari il conto usa che `y / 2` è $\frac{y - 1}{2}$: il fattore tolto è quello che finisce in `ris`. Fa un giro per ogni cifra binaria: 4 per `n = 13`. Provata anche questa.

::: prova Perché all'uscita dal ciclo si può dire `y == 0` e non solo `y <= 0`?
Perché `y >= 0` è un invariante: con la condizione del ciclo falsa, cioè `y <= 0`, resta solo lo zero.
:::

> [!RICORDA]
> - Uscita: `y == 0`, quindi `x^y` vale 1 e `ris == a^n`.
> - Terminazione: `y` è un intero non negativo che cala a ogni giro.
> - Giri: al massimo il doppio delle cifre binarie dell'esponente.

## Come quiz: invariante o no?

Il quiz d'esame dà un ciclo e una lista di affermazioni, e chiede quali sono invarianti. Per la potenza veloce, con `a >= 1`:

| Affermazione | Prima del ciclo | Dopo un giro qualsiasi | Invariante? |
|---|---|---|---|
| `ris * x^y == a^n` | vera | vera | **sì** |
| `y >= 0` | vera | vera | **sì** |
| `y > 0` | falsa se `n` è 0 | falsa dopo l'ultimo giro | no |
| `x == a` | vera | falsa dopo un giro «pari» | no |
| `ris == a^(n-y)` | vera | falsa: riga 2 della tabella | no |
| `y <= n` | vera | vera | **sì** |
| `ris == a^n` | falsa, se `a^n` non è 1 | vera solo alla fine | no |

La più insidiosa è la quinta. Nel ciclo della lezione 19, quello che moltiplica un fattore alla volta, `ris` è una potenza di `a` con l'esponente «già consumato». Qui no: nella riga 2 della tabella `ris` vale 3, mentre $a^{n-y}$ sarebbe $3^{7}$. La base `x` cambia per strada, e l'invariante deve tenerne conto.

Il metodo è quello della [lezione 18](18_induzione.html):

1. controlla l'affermazione **prima del ciclo**, con i valori iniziali;
2. controllala **dopo un giro**, supponendola vera prima: se il ciclo ha un `if`, in tutti e due i rami;
3. se hai un dubbio, fai la tabella con numeri piccoli e cerca una riga che la smentisce.

Un'affermazione vera solo all'uscita, come `ris == a^n`, è la **condizione di uscita**, non un invariante.

::: prova `x^y <= a^n` è un invariante, per `a >= 1`?
Sì. Prima del ciclo è un'uguaglianza. Nel ramo pari `x^y` non cambia valore; nel ramo dispari perde un fattore `x`, che è almeno 1, quindi non cresce.
:::

> [!RICORDA]
> - Invariante: vero prima del ciclo **e** dopo ogni giro, in tutti i rami.
> - Vero solo alla fine: è la condizione di uscita.
> - Nel dubbio, una tabella con numeri piccoli.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `X == q * D + r` | «X uguale q per D più r» | invariante della divisione | $14 = 3 \cdot 3 + 5$ |
| `ris * x^y == a^n` | «ris per x alla y uguale a alla n» | invariante della potenza veloce | $3 \cdot 9^6 = 3^{13}$ |
| `y % 2 == 1` | «y modulo 2 uguale a 1» | `y` è dispari | `13 % 2` vale 1 |
| `y / 2` | «y diviso 2» | divisione tra interi; esatta se `y` è pari | `12 / 2` vale 6 |
| $x'$, $y'$, $ris'$ | «x primo», «y primo» | i valori dopo il giro | $y' = y - 1$ |
| c.i., c.u. | «condizione di ingresso, di uscita» | che cosa si chiede ai dati e ai risultati | `n >= 0`; `ris == a^n` |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Il quiz «seleziona gli invarianti»**: c'era nella simulazione 2 del 2023/24 (quiz 7), con un ciclo che somma. La potenza veloce è lo stesso esercizio con un ciclo più difficile.
2. **Dall'invariante al risultato**: saper dire che cosa vale all'uscita, usando la condizione del ciclo diventata falsa.
3. **Parziale e totale**: sapere che cosa aggiunge la terminazione, e come si dimostra.

### Una domanda sul modello, letta insieme

**Sul modello del quiz 7 della simulazione 2.** «Sia `n >= 0` un intero e `a >= 1`. Considera il frammento `x = a; y = n; ris = 1; while (y > 0) { if (y % 2 == 1) { ris = ris * x; y = y - 1; } else { x = x * x; y = y / 2; } }`. Seleziona gli invarianti: (1) `ris * x^y == a^n`; (2) `y > 0`; (3) `y >= 0`; (4) `ris == a^(n - y)`; (5) `x >= a`.»

**In pratica chiede:** per ogni affermazione, se è vera prima del ciclo e resta vera dopo ogni giro.

> [!ESEMPIO] · la soluzione, affermazione per affermazione
> **(1) Sì.** È l'invariante dimostrato sopra.
>
> **(2) No.** Con `n = 0` è falsa già prima del ciclo; e in ogni caso è falsa dopo l'ultimo giro.
>
> **(3) Sì.** `n` non è negativo, e nessuno dei due rami porta `y` sotto zero partendo da un `y` positivo.
>
> **(4) No.** Con `a = 3` e `n = 13`, dopo 2 giri `ris` vale 3 e `y` vale 6: $3^{7}$ non è 3.
>
> **(5) Sì.** `x` parte da `a` e cambia solo diventando il proprio quadrato; con `a >= 1` il quadrato non è più piccolo.
>
> Le affermazioni da selezionare sono la 1, la 3 e la 5. Controllate con un programma sui valori di `a` da 1 a 3 e di `n` da 0 a 30.

> [!METODO] Trovare l'invariante di un ciclo che calcola qualcosa
> 1. Scrivi che cosa deve valere alla fine: la condizione di uscita.
> 2. Fai la tabella dei valori con numeri piccoli.
> 3. Cerca una combinazione delle variabili che resta uguale in tutte le righe. Spesso ha la forma «già calcolato» combinato con «ancora da calcolare».
> 4. Controlla che con la condizione del ciclo falsa diventi la condizione di uscita.
> 5. Dimostrala per induzione sul numero di giri.

### Errori da evitare

- Scambiare la condizione di uscita per un invariante.
- Controllare l'affermazione solo in un ramo dell'`if`.
- Dimenticare che `y / 2` è una divisione tra interi.
- Dire «corretto» senza aver detto che il ciclo termina, quando è chiesta la correttezza totale.

## Quiz

```quiz
D: Nella potenza veloce `x = a; y = n; ris = 1; while (y > 0) { if (y % 2 == 1) { ris = ris * x; y = y - 1; } else { x = x * x; y = y / 2; } }`, quale affermazione è un invariante?
+ `ris * x^y == a^n`
- `ris == a^n`
- `ris == a^(n - y)`
- `x == a`
- `y > 0`
= Il prodotto tra la parte già calcolata e quella ancora da calcolare non cambia. La più insidiosa è `ris == a^(n - y)`: vale per il ciclo che moltiplica un fattore alla volta, non qui, dove la base cambia.

D: Nello stesso ciclo, con `a = 3` e `n = 13`, quanto vale `x` dopo 3 giri?
N: 81
= Giro 1: `y` da 13 a 12. Giro 2: `x` diventa 9, `y` 6. Giro 3: `x` diventa 81, `y` 3.

D: Nello stesso ciclo, con `a = 2` e `n = 10`, quanti giri fa il ciclo?
N: 5
= L'esponente scende così: 10, 5, 4, 2, 1, 0. Provato.

D: Nel programma della divisione `q = 0; r = X; while (r >= D) { r = r - D; q = q + 1; }`, che cosa garantisce la terminazione?
+ `r` è un intero che non scende sotto zero e cala di `D > 0` a ogni giro
- l'invariante `X == q * D + r`
- il fatto che `q` cresce
- la condizione di uscita `r < D`
- niente: il ciclo può non terminare anche con `D > 0`
= Serve una quantità che cala e non può calare per sempre. La più insidiosa è «l'invariante `X == q * D + r`»: l'invariante dà la correttezza parziale, ma resta vero anche con `D = 0`, dove il ciclo non finisce.

D: Che differenza c'è tra correttezza parziale e correttezza totale?
+ quella totale chiede anche che il programma termini
- quella parziale vale solo per alcuni dati in ingresso
- quella totale non ha bisogno di un invariante
- quella parziale non usa la condizione di uscita
- nessuna, per i programmi con un solo ciclo
= Parziale: se termina, il risultato rispetta la condizione di uscita. Totale: termina, e il risultato la rispetta. La più insidiosa è «quella parziale vale solo per alcuni dati in ingresso»: tutte e due valgono per tutti i dati che rispettano la condizione di ingresso.

D: Nella dimostrazione dell'invariante della potenza veloce, quale uguaglianza si usa nel caso `y` pari?
+ $(x^2)^{y/2} = x^y$
- $x \cdot x^{y-1} = x^y$
- $x^2 \cdot x^{y/2} = x^y$
- $(x^2)^{y} = x^y$
- $x^{y/2} \cdot x^{y/2} = x^2$
= La base diventa il quadrato e l'esponente la metà. La più insidiosa è $x \cdot x^{y-1} = x^y$, che è l'uguaglianza del caso dispari.

D: Dai lucidi di Cardone. Nel ciclo `X = 0; Y = 0; while (X < N) { Y = Y + 2 * X + 1; X = X + 1; }`, quale invariante dà il risultato?
+ `Y == X * X`
- `Y == 2 * X + 1`
- `Y == N * N`
- `X < N`
- `Y == X + 1`
= $(X + 1)^2 = X^2 + 2X + 1$: aggiungendo $2X + 1$ si passa da un quadrato al successivo. All'uscita `X == N`, quindi `Y == N * N`. La più insidiosa è `Y == N * N`, che è la condizione di uscita.

D: Con `D = 0` e `X = 5`, che cosa succede al programma della divisione?
+ non termina, e l'invariante resta vero a ogni giro
- termina con `q = 0` e `r = 5`
- l'invariante diventa falso al primo giro
- termina con un resto negativo
- dà errore di divisione per zero
= `r` non cala più e la condizione `r >= 0` resta vera. Il programma non divide mai, quindi nessun errore: sottrae. La più insidiosa è «l'invariante diventa falso al primo giro»: $q \cdot 0 + 5 = 5$ resta vero qualunque sia `q`.
```

## Esercizi

::: esercizio base Riscaldamento: la tabella della divisione
Per `X = 23` e `D = 6` scrivi `q` e `r` prima del ciclo e dopo ogni giro, e controlla l'invariante in ogni riga.
::: soluzione
0 e 23; 1 e 17; 2 e 11; 3 e 5. Il ciclo si ferma perché 5 è minore di 6. In ogni riga $q \cdot 6 + r = 23$: per esempio $2 \cdot 6 + 11$.
:::

::: esercizio base Riscaldamento: la tabella della potenza veloce
Per `a = 2` e `n = 11` scrivi `x`, `y` e `ris` prima del ciclo e dopo ogni giro.
::: soluzione
Inizio: 2, 11, 1. Giro 1 (dispari): 2, 10, 2. Giro 2 (pari): 4, 5, 2. Giro 3 (dispari): 4, 4, 8. Giro 4 (pari): 16, 2, 8. Giro 5 (pari): 256, 1, 8. Giro 6 (dispari): 256, 0, 2048. In ogni riga `ris * x^y` vale 2048.
:::

::: esercizio medio Il quadrato per somme (lucidi di Cardone)
Dimostra che `Y == X * X` è un invariante di `X = 0; Y = 0; while (X < N) { Y = Y + 2 * X + 1; X = X + 1; }`, e ricava il risultato. Che quantità dimostra la terminazione?
::: soluzione
**Base.** $0 = 0 \cdot 0$. **Passo.** Se $Y = X^2$, dopo il giro $Y' = X^2 + 2X + 1 = (X + 1)^2$ e $X' = X + 1$: quindi $Y' = X'^2$. **Uscita.** La condizione falsa dà `X >= N`; con l'invariante `X <= N`, che vale perché `X` cresce di uno solo quando è minore di `N`, si ha `X == N` e `Y == N * N`. **Terminazione.** La quantità `N - X` è un intero non negativo che cala di 1 a ogni giro. Nei lucidi c'è anche la versione ricorsiva, in cui il passo è scritto come `Q(n-1) + 2 * n - 1`.
:::

::: esercizio medio Un invariante in più per la potenza veloce
Dimostra che `y >= 0` è un invariante della potenza veloce, e spiega dove serve.
::: soluzione
**Base.** `y = n` e `n >= 0` per la condizione di ingresso. **Passo.** Il giro si fa solo se `y > 0`. Nel ramo dispari $y' = y - 1 \ge 0$. Nel ramo pari $y' = \frac{y}{2} > 0$. **Dove serve.** All'uscita, per passare da `y <= 0` a `y == 0`: senza, non si potrebbe dire che `x^y` vale 1.
:::

::: esercizio esame La versione compatta, come quiz
Nel ciclo `while (y > 0) { if (y % 2 == 1) { ris = ris * x; } x = x * x; y = y / 2; }`, con `x = a`, `y = n`, `ris = 1` all'inizio, dimostra che `ris * x^y == a^n` è un invariante.
::: soluzione
**Base.** Come prima: $1 \cdot a^n$. **Passo, caso $y$ pari.** $ris$ non cambia, $x' = x^2$, $y' = \frac{y}{2}$: $ris \cdot (x^2)^{y/2} = ris \cdot x^y$. **Caso $y$ dispari.** $ris' = ris \cdot x$, $x' = x^2$, e la divisione intera dà $y' = \frac{y - 1}{2}$. Allora $ris' \cdot (x')^{y'} = ris \cdot x \cdot (x^2)^{(y-1)/2} = ris \cdot x \cdot x^{y-1} = ris \cdot x^y$. In tutti e due i casi il prodotto non cambia.
:::

::: esercizio difficile Quante moltiplicazioni
Quante moltiplicazioni fa la potenza veloce della lezione per `n = 16`, per `n = 15` e per `n = 32`? Perché 15 costa più di 16?
::: soluzione
Ogni giro fa una moltiplicazione. Per 16: l'esponente scende 16, 8, 4, 2, 1, 0, cioè 5 giri. Per 32: 6 giri. Per 15: 15, 14, 7, 6, 3, 2, 1, 0, cioè 7 giri. Il 15 in binario è 1111: ogni cifra 1 costa un giro «dispari» in più, mentre 16 è 10000 e ha una sola cifra 1. Contati con un programma.
:::

## Domande di ripasso

::: domanda Che cosa sono la condizione di ingresso e la condizione di uscita?
Le proprietà che devono avere i dati all'inizio e i risultati alla fine. Sono la specifica del programma: dicono che cosa deve fare.
:::

::: domanda Come si dimostra che un ciclo termina?
Si trova una quantità intera che non scende mai sotto zero e che cala a ogni giro.
:::

::: domanda Qual è l'invariante della potenza veloce, e come si legge?
`ris * x^y == a^n`: la parte già calcolata per la parte ancora da calcolare dà sempre la potenza cercata.
:::

::: domanda Perché il passo induttivo della potenza veloce ha due casi?
Perché il corpo del ciclo ha un `if`: l'invariante va controllato nel ramo dell'esponente dispari e in quello dell'esponente pari.
:::

::: domanda Perché `ris == a^n` non è un invariante?
Perché è vero solo alla fine: è la condizione di uscita.
:::

## Glossario

```glossario
Condizione di ingresso | Proprietà che i dati devono avere all'inizio del programma.
Condizione di uscita | Proprietà che i risultati devono avere alla fine.
Correttezza parziale | Se il programma termina, i risultati rispettano la condizione di uscita.
Correttezza totale | Correttezza parziale più terminazione.
Invariante di ciclo | Affermazione vera prima del ciclo e dopo ogni giro.
Terminazione | Il fatto che il ciclo si fermi; si dimostra con una quantità intera non negativa che cala.
Potenza veloce | Calcolo di una potenza con quadrati successivi, in un numero di giri proporzionale alle cifre binarie dell'esponente.
```

## Checklist

```checklist
- So dire che cosa sono condizione di ingresso e condizione di uscita.
- So la differenza tra correttezza parziale e totale.
- So dimostrare l'invariante della divisione intera e ricavarne il risultato.
- So spiegare perché la divisione termina, e che cosa succede con D uguale a 0.
- So seguire la potenza veloce con una tabella.
- So scrivere l'invariante della potenza veloce e dimostrarlo, con i due casi.
- So ricavare il risultato dall'invariante e dalla condizione di uscita.
- So decidere se un'affermazione è un invariante, controllando prima del ciclo e dopo un giro.
```

## Fonti

- Diario delle lezioni del canale B (Berardi), lezione 21 del docente, 16/11/2026: «Esercizi su invarianti: potenza veloce, svolta informalmente e come quiz».
- F. Cardone, «Invarianti, principio di induzione e correttezza dei programmi» (canale A): divisione intera con condizione di ingresso e di uscita, correttezza parziale e totale, quadrato di un numero naturale; lucidi «Introduzione alla correttezza dei programmi. Il principio di induzione».
- Simulazione d'esame 2 del 2023/24, quiz 7 (il modello del quiz sugli invarianti).
- Il codice della potenza veloce, le tabelle, i disegni, i quiz e gli esercizi sono di questi appunti. Tutti i cicli li ho trascritti in C, compilati con `gcc -Wall -Werror` e provati con gli invarianti controllati da `assert`.
