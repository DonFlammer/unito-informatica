---
corso: FDA
lezione: "21"
titolo: "Invarianti sui vettori: la somma e la ricerca degli zeri"
data: 2026-11-19
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 21 · Invarianti di ciclo sui vettori
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 21 di Fondamenti dell'Informatica (canale B): gli invarianti dei cicli che scorrono un vettore.
  L'indice che divide il vettore in parte già guardata e parte da guardare, l'invariante della somma, quello del
  conteggio degli zeri e quello della ricerca del primo zero, con la condizione di uscita e la terminazione.
lede: >-
  Un ciclo che scorre un vettore ha sempre la stessa forma: un indice che avanza, e una variabile che riassume quello
  che si è visto fin lì. L'invariante dice che cosa contiene quella variabile a metà strada. Trovato per la somma, si
  adatta con poche parole al conteggio e alla ricerca.
materiale: libro
scheda:
  Lucidi: F. Cardone, «Invarianti, principio di induzione e correttezza dei programmi»
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  Diario delle lezioni del canale B (lezione 22 del docente); F. Cardone, «Invarianti, principio di induzione e
  correttezza dei programmi» (schema della dimostrazione per induzione sul numero di giri); simulazione d'esame 2 del
  2023/24, quiz 7; i cicli sui vettori nella loro forma consueta
appunti_html: appunti/FDA/21_invarianti_vettori_somma_zeri.html
genera_html: true
---

## In breve

- Un ciclo che scorre un vettore `v` di `n` elementi usa un indice `i` che parte da 0 e arriva a `n`. In ogni momento `i` divide il vettore in due: i **primi `i` elementi**, già guardati, e gli altri.
- L'invariante parla sempre della parte già guardata: dice che cosa si è calcolato **fin lì**.
- **Somma**: `s == v[0] + … + v[i-1]`, cioè `s` è la somma dei primi `i` elementi.
- **Conteggio degli zeri**: `c` è il numero di zeri tra i primi `i` elementi.
- **Ricerca del primo zero**: nessuno dei primi `i` elementi è zero.
- In tutti e tre serve anche l'invariante `i <= n`: con la condizione del ciclo falsa dà `i == n`, cioè «ho guardato tutto».
- Prima del ciclo `i` vale 0 e la parte già guardata è vuota: la somma di nessun numero è 0, e una frase «per ogni» su nessun elemento è vera.
- La terminazione è la stessa per tutti: la quantità `n - i` non è mai negativa e cala a ogni giro.

> [!CANALI]
> Nel canale B è la lezione di giovedì 19/11, dalle 9 alle 11. Per il docente è la lezione 22: qui è la 21. Il diario del canale B dice: «Invariante di ciclo per la ricerca degli 0 in un vettore e per la somma di un vettore».
>
> **Che cosa non so.** Il codice usato dal docente non ce l'ho, e «ricerca degli 0» si può intendere in due modi: contare quanti zeri ci sono, oppure fermarsi al primo zero che si incontra. Li ho messi tutti e due, perché gli invarianti sono diversi e il secondo è quello che insegna di più. Se in aula i nomi delle variabili erano altri, gli invarianti sono gli stessi con i nomi cambiati.
>
> **L'ordine.** Comincio dalla somma, che è il caso più pulito, e poi passo agli zeri: il diario li nomina nell'ordine opposto.
>
> Servono la [lezione 18](18_induzione.html), con la definizione di invariante, e la [lezione 20](20_invarianti_potenza_veloce.html), con condizione di ingresso, condizione di uscita e terminazione. I programmi sono in C, il linguaggio di Programmazione I.

## Un indice che divide il vettore in due

Un **vettore** è una fila di caselle numerate a partire da 0. Se `v` ha `n` elementi, le caselle sono `v[0]`, `v[1]`, fino a `v[n-1]`: l'ultima ha il numero `n - 1`, e `v[n]` **non esiste**.

In tutta la lezione uso questo vettore di 6 elementi:

```c
int v[6] = {4, 0, 7, 0, 0, 3};
```

Un ciclo lo scorre con un indice `i` che parte da 0 e cresce di uno a ogni giro. Fermati a metà, quando `i` vale 3:

```grafico
titolo: Il vettore v con l'indice i fermo a 3. A sinistra della freccia ci sono gli elementi già guardati, quelli di posto 0, 1 e 2; a destra quelli ancora da guardare. L'invariante parla solo della parte a sinistra
x: -0.5 6.5
y: 0 3.7
assi: no
griglia: no
proporzioni: libere
poligono: 0 1 3 1 3 2 0 2 | verde | tenue
poligono: 3 1 6 1 6 2 3 2 | grigio | tenue
segmento: 1 1 1 2 | grigio | sottile
segmento: 2 1 2 2 | grigio | sottile
segmento: 4 1 4 2 | grigio | sottile
segmento: 5 1 5 2 | grigio | sottile
testo: 0.5 1.5 | verde | "4"
testo: 1.5 1.5 | verde | "0"
testo: 2.5 1.5 | verde | "7"
testo: 3.5 1.5 | grigio | "0"
testo: 4.5 1.5 | grigio | "0"
testo: 5.5 1.5 | grigio | "3"
testo: 0.5 0.55 | grigio | "0"
testo: 1.5 0.55 | grigio | "1"
testo: 2.5 0.55 | grigio | "2"
testo: 3.5 0.55 | grigio | "3"
testo: 4.5 0.55 | grigio | "4"
testo: 5.5 0.55 | grigio | "5"
freccia: 3 3.1 3 2.1 | ambra
testo: 3 3.4 | ambra | "i = 3"
testo: 1.5 2.5 | verde | "già guardati"
testo: 4.5 2.5 | grigio | "da guardare"
```

Quando `i` vale 3 gli elementi già guardati sono **tre**: quelli di posto 0, 1 e 2. In generale:

- i **primi `i` elementi** sono `v[0]`, …, `v[i-1]`: sono `i`, e l'ultimo ha il posto `i - 1`;
- `v[i]` è il **prossimo** da guardare, non l'ultimo guardato;
- con `i` uguale a 0 la parte già guardata è **vuota**; con `i` uguale a `n` è tutto il vettore.

Quasi tutti gli errori sugli invarianti dei vettori sono errori di uno su questo punto: scrivere `v[i]` dove ci vuole `v[i-1]`.

Tutti i cicli della lezione hanno questo scheletro:

```c
i = 0;
while (i < n) {
    /* usa v[i] */
    i = i + 1;
}
```

Due cose valgono per tutti, qualunque cosa si faccia con `v[i]`.

**`i <= n` è un invariante.** Prima del ciclo `i` vale 0 e `n` non è negativo. Un giro si fa solo se `i < n`, e porta `i` a `i + 1`, che è al massimo `n`.

**Il ciclo termina.** La quantità `n - i` è un intero, non è mai negativa per l'invariante appena visto, e cala di 1 a ogni giro: è il criterio di terminazione della [lezione 20](20_invarianti_potenza_veloce.html).

All'uscita la condizione `i < n` è falsa, quindi `i >= n`; con l'invariante `i <= n` resta una sola possibilità: **`i == n`**. Tradotto: la parte già guardata è tutto il vettore.

::: prova In un vettore di 10 elementi, con `i` uguale a 7, quanti elementi sono già stati guardati e qual è il posto dell'ultimo? Qual è il prossimo?
Sette elementi, da `v[0]` a `v[6]`. Il prossimo è `v[7]`.
:::

> [!RICORDA]
> - I primi `i` elementi sono `v[0]`, …, `v[i-1]`. `v[i]` è il prossimo.
> - `i <= n` è un invariante; all'uscita dà `i == n`.
> - Terminazione: `n - i` cala a ogni giro e non scende sotto zero.

## La somma di un vettore

Per sommare gli elementi si parte da 0 e si aggiunge un elemento per giro.

```c
i = 0;
s = 0;
while (i < n) {
    s = s + v[i];
    i = i + 1;
}
```

Con il vettore di prima:

| Giri fatti | `i` | `s` | Che cos'è `s` |
|---|---|---|---|
| 0 | 0 | 0 | somma di nessun elemento |
| 1 | 1 | 4 | 4 |
| 2 | 2 | 4 | 4 + 0 |
| 3 | 3 | 11 | 4 + 0 + 7 |
| 4 | 4 | 11 | 4 + 0 + 7 + 0 |
| 5 | 5 | 11 | 4 + 0 + 7 + 0 + 0 |
| 6 | 6 | 14 | 4 + 0 + 7 + 0 + 0 + 3 |

In ogni riga `s` è la somma della parte già guardata. È l'invariante.

> [!DEF] L'invariante della somma
> Per il ciclo della somma, l'invariante è
>
> `s == v[0] + v[1] + … + v[i-1]`
>
> cioè: `s` è la somma dei primi `i` elementi di `v`.

**Come si legge.** A destra ci sono tanti addendi quanti sono gli elementi già guardati: tre quando `i` vale 3, nessuno quando `i` vale 0. Una somma senza addendi vale 0, per convenzione: è il valore che non cambia il risultato quando si comincia ad aggiungere. Per questo `s` parte da 0.

> [!ESEMPIO] · La dimostrazione, per induzione sul numero di giri
> **Passo base: dopo 0 giri.** `i = 0` e `s = 0`. I primi 0 elementi non hanno addendi, e la loro somma è 0. Vero.
>
> **Passo induttivo.** Suppongo che dopo $k$ giri valga $s = v[0] + \dots + v[i-1]$, e che il ciclo faccia un altro giro. I valori nuovi sono $s' = s + v[i]$ e $i' = i + 1$.
>
> Allora $s' = v[0] + \dots + v[i-1] + v[i]$.
>
> L'ultimo addendo ha il posto $i$, che è $i' - 1$. Quindi $s' = v[0] + \dots + v[i'-1]$: l'invariante vale con i valori nuovi.

**Dall'invariante al risultato.** All'uscita `i == n`, come per ogni ciclo con questo scheletro. Sostituendo nell'invariante: `s == v[0] + … + v[n-1]`, la somma di tutto il vettore. Questa è la condizione di uscita. La condizione di ingresso è solo che `v` abbia `n` elementi, con `n >= 0`: per un vettore vuoto il ciclo non parte e `s` resta 0.

Ho trascritto il ciclo con l'invariante controllato da un `assert` prima del ciclo e dopo ogni giro. Su ventimila vettori casuali di lunghezza da 0 a 8 non fallisce mai.

> [!TRAPPOLA] Tre errori di uno
> - **`while (i <= n)`**: l'ultimo giro legge `v[n]`, che non esiste. In C il programma non si ferma: somma un valore qualunque che si trova in memoria dopo il vettore.
> - **`i = 1` all'inizio**: il ciclo dimentica `v[0]`. Con il vettore di prima dà 10 invece di 14.
> - **Invariante scritto con `v[i]`**: `s == v[0] + … + v[i]` è falso già prima del ciclo, dove `s` vale 0 e `v[0]` vale 4.

::: prova Per il vettore `{2, 9, 4, 1}` scrivi `i` e `s` prima del ciclo e dopo ogni giro.
0 e 0; 1 e 2; 2 e 11; 3 e 15; 4 e 16. In ogni riga `s` è la somma dei primi `i` elementi.
:::

> [!RICORDA]
> - Invariante: `s` è la somma dei primi `i` elementi.
> - Base: la somma di nessun elemento è 0.
> - All'uscita `i == n`: `s` è la somma di tutto il vettore.

## Contare gli zeri

Per contare quanti elementi sono uguali a 0 lo scheletro è lo stesso, con un contatore `c` al posto di `s`. Il contatore sale solo quando l'elemento guardato è 0.

```c
i = 0;
c = 0;
while (i < n) {
    if (v[i] == 0) {
        c = c + 1;
    }
    i = i + 1;
}
```

| Giri fatti | `i` | Elemento appena guardato | `c` |
|---|---|---|---|
| 0 | 0 | nessuno | 0 |
| 1 | 1 | `v[0]`, che vale 4 | 0 |
| 2 | 2 | `v[1]`, che vale 0 | 1 |
| 3 | 3 | `v[2]`, che vale 7 | 1 |
| 4 | 4 | `v[3]`, che vale 0 | 2 |
| 5 | 5 | `v[4]`, che vale 0 | 3 |
| 6 | 6 | `v[5]`, che vale 3 | 3 |

L'invariante si ottiene da quello della somma cambiando una parola: **`c` è il numero di zeri tra i primi `i` elementi**.

> [!ESEMPIO] · La dimostrazione: il passo ha due casi
> **Passo base.** Tra i primi 0 elementi non ci sono zeri, e `c` vale 0. Vero.
>
> **Passo induttivo.** Suppongo che `c` sia il numero di zeri tra `v[0]`, …, `v[i-1]`, e che il ciclo faccia un altro giro. Il corpo ha un `if`, quindi i casi sono due.
>
> **Caso `v[i]` uguale a 0.** I primi $i + 1$ elementi hanno uno zero in più dei primi $i$, e il contatore diventa $c' = c + 1$.
>
> **Caso `v[i]` diverso da 0.** I primi $i + 1$ elementi hanno gli stessi zeri dei primi $i$, e il contatore non cambia: $c' = c$.
>
> In tutti e due i casi $c'$ è il numero di zeri tra i primi $i' = i + 1$ elementi.

All'uscita `i == n`, e `c` è il numero di zeri di tutto il vettore: 3, per il vettore dell'esempio.

Come per la potenza veloce della [lezione 20](20_invarianti_potenza_veloce.html), un `if` nel corpo vuol dire un passo induttivo con due casi. Chi controlla l'invariante in un ramo solo non l'ha dimostrato.

Un secondo invariante dello stesso ciclo è `c <= i`: non si possono aver trovato più zeri degli elementi guardati. È vero, ma da solo non dice che cosa calcola il ciclo. Un ciclo ha molti invarianti; quello che serve è quello che, all'uscita, diventa la condizione di uscita.

::: prova Per il vettore `{1, 0, 0, 6, 0, 2, 0}` scrivi `c` dopo ogni giro. Quanto vale alla fine?
0, 1, 2, 2, 3, 3, 4. Alla fine vale 4, dopo 7 giri.
:::

> [!RICORDA]
> - Invariante: `c` è il numero di zeri tra i primi `i` elementi.
> - Un `if` nel corpo: due casi nel passo induttivo.
> - Tra gli invarianti serve quello che all'uscita dà il risultato.

## Cercare il primo zero

Se interessa solo sapere **se c'è** uno zero, e dove, non serve arrivare in fondo: ci si ferma al primo. Il ciclo ha una condizione in più.

```c
i = 0;
while (i < n && v[i] != 0) {
    i = i + 1;
}
```

Il ciclo avanza finché ci sono elementi da guardare **e** quello sotto l'indice non è zero. Non c'è una variabile per il risultato: il risultato è `i` stesso.

```grafico
titolo: I due modi in cui la ricerca finisce. Sopra: il ciclo si ferma con i uguale a 1, perché v[1] è zero. Sotto: nel vettore non ci sono zeri e i arriva a 3, la lunghezza. In tutti e due i casi a sinistra della freccia non ci sono zeri
x: -0.5 8.2
y: 0 6.4
assi: no
griglia: no
proporzioni: libere
poligono: 0 4 1 4 1 5 0 5 | verde | tenue
poligono: 1 4 2 4 2 5 1 5 | ambra | tenue
poligono: 2 4 6 4 6 5 2 5 | grigio | tenue
segmento: 3 4 3 5 | grigio | sottile
segmento: 4 4 4 5 | grigio | sottile
segmento: 5 4 5 5 | grigio | sottile
testo: 0.5 4.5 | verde | "4"
testo: 1.5 4.5 | ambra | "0"
testo: 2.5 4.5 | grigio | "7"
testo: 3.5 4.5 | grigio | "0"
testo: 4.5 4.5 | grigio | "0"
testo: 5.5 4.5 | grigio | "3"
freccia: 1 6.0 1 5.1 | ambra
testo: 1.9 5.75 | ambra | "i = 1"
testo: 7.1 4.5 | ambra | "trovato"
poligono: 0 1 3 1 3 2 0 2 | verde | tenue
segmento: 1 1 1 2 | grigio | sottile
segmento: 2 1 2 2 | grigio | sottile
testo: 0.5 1.5 | verde | "5"
testo: 1.5 1.5 | verde | "2"
testo: 2.5 1.5 | verde | "9"
freccia: 3 3.0 3 2.1 | ambra
testo: 3.9 2.75 | ambra | "i = 3"
testo: 5.6 1.5 | verde | "nessuno zero"
```

L'invariante dice che nella parte già guardata non c'è quello che si cerca.

> [!DEF] L'invariante della ricerca
> Per il ciclo della ricerca, l'invariante è: **nessuno dei primi `i` elementi è zero**. Con i simboli:
>
> $$\forall j\,(0 \le j < i \rightarrow v[j] \ne 0)$$

**Come si legge.** «Per ogni posto $j$, se $j$ è tra 0 e $i - 1$, allora l'elemento di posto $j$ non è zero». È un «per ogni» ristretto ai posti già guardati, scritto con la freccia come nella [lezione 10](10_quantificatori_e_connettivi.html). Con `i` uguale a 0 nessun $j$ rispetta l'ipotesi, e la frase è vera a vuoto: su una parte vuota non c'è niente da smentire.

> [!ESEMPIO] · La dimostrazione
> **Passo base.** Con `i = 0` la parte già guardata è vuota: la frase è vera a vuoto.
>
> **Passo induttivo.** Suppongo che nessuno tra `v[0]`, …, `v[i-1]` sia zero, e che il ciclo faccia un altro giro. Il giro si fa solo se la condizione è vera, quindi so anche che `v[i] != 0`.
>
> Dopo il giro $i' = i + 1$, e i primi $i'$ elementi sono quelli di prima più `v[i]`. Quelli di prima non sono zero per ipotesi induttiva; `v[i]` non è zero per la condizione del ciclo. Quindi nessuno dei primi $i'$ elementi è zero.

Qui il passo induttivo usa **la condizione del ciclo**: è un'informazione in più, vera all'inizio di ogni giro, e si può sempre usare.

**Dall'invariante al risultato.** All'uscita la condizione `i < n && v[i] != 0` è falsa. Per le leggi di De Morgan della [lezione 07](07_condizionali_equivalenza_logica.html), la negazione di una «e» è la «o» delle negazioni: `i >= n` oppure `v[i] == 0`. Con l'invariante `i <= n` i casi sono due.

| Come finisce | Che cosa so | Che cosa vuol dire |
|---|---|---|
| `i == n` | nessuno dei primi `n` elementi è zero | nel vettore **non ci sono zeri** |
| `i < n` e `v[i] == 0` | nessuno dei primi `i` è zero, e `v[i]` lo è | `i` è il posto del **primo zero** |

La condizione di uscita è la «o» delle due righe. Dopo il ciclo basta controllare `i < n` per sapere in quale caso si è. Con il vettore dell'esempio il ciclo si ferma con `i` uguale a 1; con `{5, 2, 9}` arriva a 3.

L'invariante da solo direbbe solo «fin qui niente zeri». È la seconda riga a dare di più: non uno zero qualunque, ma **il primo**, perché tutti i posti prima sono esclusi dall'invariante.

> [!TRAPPOLA] L'ordine dentro la condizione conta
> In C la «e» `&&` valuta prima la parte sinistra, e se è falsa non guarda la destra. Con `i < n` a sinistra, `v[i]` viene letto solo quando esiste. Scritta al contrario, `v[i] != 0 && i < n`, in un vettore senza zeri l'ultima valutazione legge `v[n]`, fuori dal vettore.

**La terminazione** è quella di sempre: `n - i` cala a ogni giro. La condizione in più può solo far finire il ciclo prima.

::: prova Per il vettore `{3, 5, 0, 2, 0}`, con quale valore di `i` finisce la ricerca? In quale dei due casi si è?
Con `i` uguale a 2: `v[0]` e `v[1]` non sono zero, `v[2]` sì. È il secondo caso, `i < n` e `v[i] == 0`: il primo zero è al posto 2.
:::

> [!RICORDA]
> - Invariante: nessuno dei primi `i` elementi è zero.
> - Uscita con `i == n`: non ci sono zeri. Uscita con `i < n`: `i` è il posto del primo zero.
> - Nel passo induttivo si può usare la condizione del ciclo.
> - `i < n` va scritto prima di `v[i] != 0`.

## Come quiz: invariante o no?

Il quiz d'esame dà il ciclo e una lista di affermazioni. Per il ciclo della somma, con il vettore `{4, 0, 7, 0, 0, 3}` come banco di prova:

| Affermazione | Prima del ciclo | Dopo un giro qualsiasi | Invariante? |
|---|---|---|---|
| `s == v[0] + … + v[i-1]` | vera | vera | **sì** |
| `i <= n` | vera | vera | **sì** |
| `i >= 0` | vera | vera | **sì** |
| `i < n` | falsa se `n` è 0 | falsa dopo l'ultimo giro | no |
| `s == v[0] + … + v[i]` | falsa: 0 non è 4 | falsa dopo 2 giri: 4 non è 11 | no |
| `s == v[0] + … + v[n-1]` | falsa: 0 non è 14 | vera solo alla fine | no |
| `s >= 0` | vera | dipende dal vettore | no, in generale |

L'ultima merita una riga in più. Se il testo dice che gli elementi sono numeri naturali, `s >= 0` è un invariante. Se sono interi qualunque no: con `{-2, 5}` dopo un giro `s` vale −2. **Leggi sempre la condizione di ingresso**: la stessa affermazione può essere un invariante con un'ipotesi e non esserlo senza.

Il metodo resta quello delle lezioni [18](18_induzione.html) e [20](20_invarianti_potenza_veloce.html): si controlla prima del ciclo, poi dopo un giro supponendo l'affermazione vera prima; nel dubbio si fa la tabella su un vettore corto e si cerca la riga che la smentisce. Un vettore con dentro uno zero, un numero ripetuto e, se sono ammessi, un negativo smaschera quasi tutte le affermazioni false.

::: prova Nel ciclo che conta gli zeri, `c == i` è un invariante?
No. È vera prima del ciclo, ma con il vettore dell'esempio dopo un giro `c` vale 0 e `i` vale 1. Sarebbe un invariante solo per un vettore fatto tutto di zeri. L'invariante vero è `c <= i`.
:::

> [!RICORDA]
> - Si controlla prima del ciclo e dopo un giro qualsiasi.
> - Scritta con `v[i]` al posto di `v[i-1]`: quasi sempre falsa.
> - Scritta con `n` al posto di `i`: è la condizione di uscita, non un invariante.
> - La condizione di ingresso può cambiare la risposta.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `v[i]` | «v di i» | l'elemento di posto `i`, contando da 0 | con `{4, 0, 7}`, `v[2]` vale 7 |
| `v[0] + … + v[i-1]` | «la somma da v di 0 a v di i meno 1» | la somma dei primi `i` elementi; vale 0 se `i` è 0 | con `i = 3`: 4 + 0 + 7 |
| `&&` | «e» | vera se tutte e due le parti sono vere; la destra è valutata solo se la sinistra è vera | `i < n && v[i] != 0` |
| `!=` | «diverso da» | il contrario di `==` | `v[0] != 0` |
| $\forall j\,(0 \le j < i \rightarrow \dots)$ | «per ogni j tra 0 e i meno 1» | un «per ogni» ristretto ai posti già guardati | nessuno dei primi `i` è zero |
| $i'$, $s'$, $c'$ | «i primo», «s primo» | i valori dopo il giro | $i' = i + 1$ |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Il quiz «seleziona gli invarianti»** su un ciclo che scorre un vettore o che somma. Quello della simulazione 2 del 2023/24 (quiz 7) è un ciclo di somma: `i = 1; s = 0; while (i < n) { s = s + i; i++; } s = s + i;`. È svolto nella [lezione 18](18_induzione.html).
2. **Gli errori di uno**: distinguere `v[i-1]` da `v[i]`, `i < n` da `i <= n`.
3. **Dall'invariante al risultato**, compreso il caso con due modi di uscire dal ciclo.

### Una domanda sul modello, letta insieme

**Sul modello del quiz 7 della simulazione 2.** «Sia `v` un vettore di `n >= 0` interi. Considera il frammento `i = 0; s = 0; while (i < n) { s = s + v[i]; i = i + 1; }`. Seleziona gli invarianti, cioè le affermazioni vere dopo ogni numero di esecuzioni del corpo del while: (1) `s == v[0] + … + v[i-1]`; (2) `i <= n`; (3) `i < n`; (4) `s == v[0] + … + v[i]`; (5) `s == v[0] + … + v[n-1]`.»

**In pratica chiede:** per ogni affermazione, se è vera con i valori iniziali e resta vera dopo ogni giro. «Dopo ogni numero di esecuzioni» comprende zero esecuzioni.

> [!ESEMPIO] · la soluzione, affermazione per affermazione
> **(1) Sì.** È l'invariante della somma, dimostrato sopra.
>
> **(2) Sì.** `i` parte da 0, e cresce di uno solo quando è minore di `n`.
>
> **(3) No.** Dopo l'ultimo giro `i` vale `n`. Con `n = 0` è falsa già prima del ciclo.
>
> **(4) No.** Prima del ciclo `s` vale 0, e a destra ci sarebbe `v[0]`: con il vettore `{4, 0, 7, 0, 0, 3}` è 4. Dopo l'ultimo giro la formula nominerebbe `v[n]`, che non esiste.
>
> **(5) No.** È vera alla fine, ma non prima: è la condizione di uscita.
>
> Le affermazioni da selezionare sono la 1 e la 2. Controllate con un programma su ventimila vettori casuali.

> [!METODO] L'invariante di un ciclo che scorre un vettore
> 1. Scrivi la condizione di uscita: che cosa deve valere per **tutto** il vettore.
> 2. Sostituisci «tutto il vettore» con «i primi `i` elementi»: di solito è l'invariante.
> 3. Controlla il caso `i = 0`, dove la parte guardata è vuota: i valori iniziali devono andare d'accordo.
> 4. Aggiungi `i <= n`, che serve per ottenere `i == n` all'uscita.
> 5. Se il ciclo può finire in più modi, scrivi un caso per ogni modo.

### Errori da evitare

- Contare i posti da 1: i primi `i` elementi finiscono a `v[i-1]`.
- Dimenticare il vettore vuoto e il caso `i = 0`.
- Controllare un ciclo con un `if` in un ramo solo.
- Dare per invariante un'affermazione che dipende da un'ipotesi sugli elementi che il testo non dà.
- Dopo una ricerca, usare `v[i]` senza aver controllato `i < n`.

## Quiz

```quiz
D: Nel ciclo `i = 0; s = 0; while (i < n) { s = s + v[i]; i = i + 1; }`, quale affermazione è un invariante?
+ `s == v[0] + … + v[i-1]`
- `s == v[0] + … + v[i]`
- `s == v[0] + … + v[n-1]`
- `i < n`
- `s == v[i]`
= `s` è la somma degli elementi già guardati, che finiscono al posto `i - 1`. La più insidiosa è `s == v[0] + … + v[i]`: sbaglia di un posto, ed è falsa già prima del ciclo.

D: Nello stesso ciclo, con `v = {4, 0, 7, 0, 0, 3}`, quanto vale `s` dopo 3 giri?
N: 11
= I primi tre elementi sono 4, 0 e 7.

D: Nel ciclo che conta gli zeri, `i = 0; c = 0; while (i < n) { if (v[i] == 0) { c = c + 1; } i = i + 1; }`, con `v = {4, 0, 7, 0, 0, 3}`, quanto vale `c` dopo 4 giri?
N: 2
= Tra i primi quattro elementi, 4, 0, 7 e 0, gli zeri sono due. Provato.

D: Nel ciclo della somma, perché il passo base dell'induzione è vero?
+ perché la somma di nessun elemento vale 0, e `s` parte da 0
- perché `v[0]` vale 0
- perché il ciclo fa almeno un giro
- perché `i < n` è vera all'inizio
- perché `s` è uguale a `v[0]` prima del ciclo
= Con `i = 0` la parte già guardata è vuota, e una somma senza addendi vale 0. La più insidiosa è «perché `s` è uguale a `v[0]` prima del ciclo»: prima del ciclo nessun elemento è stato sommato, nemmeno `v[0]`.

D: Nel ciclo `i = 0; while (i < n && v[i] != 0) { i = i + 1; }`, che cosa si sa all'uscita se `i < n`?
+ `v[i]` è zero e nessun elemento prima di lui lo è
- nel vettore non ci sono zeri
- `v[i]` è l'unico zero del vettore
- `v[i-1]` è zero
- `v[i]` è l'ultimo zero del vettore
= La condizione è falsa e `i < n` è vera: quindi è falsa l'altra parte, cioè `v[i] == 0`. L'invariante esclude gli zeri prima. La più insidiosa è «`v[i]` è l'unico zero del vettore»: dopo `i` il ciclo non ha guardato niente, e possono esserci altri zeri.

D: Nello stesso ciclo di ricerca, con `v = {5, 2, 9}` e `n = 3`, quanto vale `i` all'uscita?
N: 3
= Nessun elemento è zero: `i` arriva a `n`. È il caso «non ci sono zeri».

D: Che cosa dimostra che il ciclo `i = 0; while (i < n) { …; i = i + 1; }` termina?
+ `n - i` è un intero mai negativo che cala di 1 a ogni giro
- l'invariante `s == v[0] + … + v[i-1]`
- il fatto che `i` parte da 0
- la condizione di uscita `i == n`
- il fatto che il vettore ha un numero pari di elementi
= Serve una quantità che cala e non può scendere sotto zero. La più insidiosa è «l'invariante `s == v[0] + … + v[i-1]`»: l'invariante della somma dice che cosa si calcola, non che il ciclo si ferma.

D: Nel ciclo della ricerca, perché `i < n` va scritto prima di `v[i] != 0`?
+ perché `&&` non valuta la parte destra quando la sinistra è falsa, e così `v[n]` non viene mai letto
- perché altrimenti l'invariante sarebbe falso
- perché altrimenti il ciclo non terminerebbe
- perché in C i confronti tra indici hanno la precedenza
- per abitudine: l'ordine non cambia niente
= Con `i == n` la parte sinistra è falsa e `v[i]` non viene letto. La più insidiosa è «per abitudine: l'ordine non cambia niente»: per la logica «e» è commutativa, ma in C l'ordine decide che cosa viene valutato.
```

## Esercizi

::: esercizio base Riscaldamento: due tabelle
Per il vettore `{3, 5, 0, 2, 0}` scrivi `i`, `s` e `c` prima del ciclo e dopo ogni giro, per un ciclo che fa insieme la somma e il conteggio degli zeri.
::: soluzione
`i`, `s`, `c`: 0, 0, 0; poi 1, 3, 0; 2, 8, 0; 3, 8, 1; 4, 10, 1; 5, 10, 2. In ogni riga `s` è la somma dei primi `i` elementi e `c` il numero di zeri tra loro.
:::

::: esercizio base Riscaldamento: quale posto
In un vettore di `n` elementi, scrivi il posto del primo elemento, dell'ultimo, e dell'ultimo tra i primi `i`. Per quali valori di `i` l'espressione `v[i]` ha senso?
::: soluzione
Il primo è `v[0]`, l'ultimo `v[n-1]`, l'ultimo tra i primi `i` è `v[i-1]`, se `i` è almeno 1. `v[i]` ha senso per `i` da 0 a `n - 1`: con `i == n` non esiste.
:::

::: esercizio medio Il massimo di un vettore
Il ciclo `i = 1; m = v[0]; while (i < n) { if (v[i] > m) { m = v[i]; } i = i + 1; }` calcola il massimo. Scrivi la condizione di ingresso, l'invariante e la dimostrazione. Per `{4, 0, 7, 0, 0, 3}` fai la tabella.
::: soluzione
**Condizione di ingresso.** `n >= 1`: un vettore vuoto non ha massimo, e `v[0]` non esisterebbe. **Invariante.** `m` è il massimo dei primi `i` elementi, con `1 <= i <= n`. **Base.** Con `i = 1` i primi elementi sono il solo `v[0]`, e `m` è `v[0]`. **Passo.** Se `v[i] > m`, il massimo dei primi $i + 1$ è `v[i]`, e $m' = v[i]$; altrimenti resta `m`. **Uscita.** `i == n`: `m` è il massimo di tutto il vettore. **Tabella** (`i`, `m`): 1, 4; 2, 4; 3, 7; 4, 7; 5, 7; 6, 7. Qui `i` parte da 1 perché la parte già guardata non può essere vuota.
:::

::: esercizio medio La ricerca con una variabile booleana
Nel ciclo `i = 0; trovato = false; while (i < n && !trovato) { if (v[i] == 0) { trovato = true; } i = i + 1; }` scrivi l'invariante e che cosa si sa all'uscita. Con `{4, 0, 7, 0, 0, 3}`, con quali valori finisce?
::: soluzione
**Invariante.** `trovato` è vero se e solo se c'è uno zero tra i primi `i` elementi; in più `i <= n`. **Base.** Tra i primi 0 elementi non ci sono zeri, e `trovato` è falso. **Passo.** Il giro si fa solo con `trovato` falso, cioè senza zeri tra i primi `i`. Se `v[i]` è zero, `trovato` diventa vero e tra i primi $i + 1$ c'è uno zero; altrimenti resta falso e non ce ne sono. **Uscita.** Se `trovato` è vero, c'è uno zero. Se è falso, la condizione falsa dà `i == n`, e tra i primi `n` non ci sono zeri. **Con l'esempio**: finisce con `i` uguale a 2 e `trovato` vero. Qui `i` è un posto **dopo** lo zero, perché l'indice avanza anche nel giro in cui lo trova.
:::

::: esercizio esame Come quiz: il conteggio
Per il ciclo che conta gli zeri, di' quali sono invarianti: (a) `c <= i`; (b) `c < i`; (c) `c` è il numero di zeri tra `v[0]`, …, `v[i]`; (d) `i <= n`; (e) `c >= 0`.
::: soluzione
**(a) Sì**: il contatore sale al massimo di uno per giro, come `i`. **(b) No**: prima del ciclo valgono tutti e due 0. **(c) No**: sbaglia di un posto; con `{0, 5}` prima del ciclo `c` vale 0, ma tra i primi elementi fino a `v[0]` c'è uno zero. **(d) Sì**. **(e) Sì**: parte da 0 e non cala mai. Provate con un programma.
:::

::: esercizio difficile La somma all'indietro
Il ciclo `i = n; s = 0; while (i > 0) { i = i - 1; s = s + v[i]; }` somma il vettore partendo dal fondo. Qual è l'invariante? Che cosa cambia nella terminazione? Per `{2, 9, 4, 1}` fai la tabella.
::: soluzione
**Invariante.** `s == v[i] + … + v[n-1]`, la somma degli elementi dal posto `i` in poi, con `0 <= i <= n`. Ora la parte già guardata è quella a **destra** di `i`, e qui `v[i]` ne fa parte. **Base.** Con `i = n` non c'è nessun elemento dal posto `n` in poi: somma 0. **Passo.** $i' = i - 1$ e $s' = s + v[i']$: si aggiunge l'elemento subito a sinistra. **Uscita.** `i == 0`: la somma di tutto. **Terminazione.** La quantità che cala è `i` stesso. **Tabella** (`i`, `s`): 4, 0; 3, 1; 2, 5; 1, 14; 0, 16. L'ordine delle due istruzioni nel corpo conta: prima si abbassa `i`, poi si legge `v[i]`.
:::

## Domande di ripasso

::: domanda Quali sono i primi `i` elementi di un vettore, e qual è il prossimo?
Sono `v[0]`, …, `v[i-1]`. Il prossimo da guardare è `v[i]`.
:::

::: domanda Qual è l'invariante del ciclo della somma?
`s` è la somma dei primi `i` elementi: `s == v[0] + … + v[i-1]`.
:::

::: domanda Perché il passo base funziona anche se non si è guardato niente?
Perché la somma di nessun elemento è 0, il numero di zeri tra nessun elemento è 0, e «nessuno di loro è zero» è vera a vuoto.
:::

::: domanda Come si ottiene `i == n` all'uscita?
Dalla condizione del ciclo falsa, `i >= n`, insieme all'invariante `i <= n`.
:::

::: domanda Nella ricerca del primo zero, quali sono i due modi di uscire e che cosa dicono?
Con `i == n`: nel vettore non ci sono zeri. Con `i < n`: `v[i]` è zero, ed è il primo.
:::

::: domanda Che cosa cambia nella dimostrazione quando il corpo del ciclo ha un `if`?
Il passo induttivo ha un caso per ogni ramo.
:::

## Glossario

```glossario
Vettore | Fila di caselle dello stesso tipo, numerate a partire da 0. In C si chiama array.
Indice | Il numero della casella. In un vettore di n elementi va da 0 a n − 1.
Primi i elementi | Gli elementi di posto da 0 a i − 1: la parte del vettore già guardata.
Somma vuota | La somma di nessun addendo. Vale 0.
Vero a vuoto | Detto di un «per ogni» su un insieme senza elementi: è vero perché niente lo smentisce.
Condizione di uscita | Che cosa vale alla fine: si ottiene dall'invariante più la condizione del ciclo diventata falsa.
Errore di uno | Sbagliare un indice o un confine di una unità: v[i] per v[i-1], oppure <= per <.
```

## Checklist

```checklist
- So dire quali sono i primi i elementi di un vettore e qual è il prossimo.
- So perché i <= n è un invariante e come dà i == n all'uscita.
- So scrivere e dimostrare l'invariante della somma.
- So spiegare il passo base con la parte già guardata vuota.
- So scrivere e dimostrare l'invariante del conteggio degli zeri, con i due casi.
- So scrivere l'invariante della ricerca del primo zero, a parole e con il «per ogni».
- So ricavare i due casi di uscita della ricerca.
- So riconoscere un errore di uno in un'affermazione o in una condizione.
- So dimostrare la terminazione con la quantità n − i.
```

## Fonti

- Diario delle lezioni del canale B (Berardi), lezione 22 del docente, 19/11/2026: «Invariante di ciclo per la ricerca degli 0 in un vettore e per la somma di un vettore».
- F. Cardone, «Invarianti, principio di induzione e correttezza dei programmi» (canale A): lo schema della dimostrazione di un invariante per induzione sul numero di giri, condizione di ingresso e di uscita, terminazione.
- Simulazione d'esame 2 del 2023/24, quiz 7 (il modello del quiz sugli invarianti).
- I cicli di somma, conteggio, ricerca e massimo sono scritti da me nella forma consueta e provati con un programma in C, con gli invarianti controllati a ogni giro.
