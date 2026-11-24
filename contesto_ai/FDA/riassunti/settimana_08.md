---
corso: FDA
lezione: S8
tipo: riassunto
titolo: "Settimana 8: invarianti di ciclo, funzioni, sequenze e stringhe"
data: 2026-11-20
docenti: Stefano Berardi
sopratitolo: Riassunto settimanale · Fondamenti dell'Informatica · Canale B · 16/11 – 20/11/2026
descrizione: >-
  Riassunto della settimana 8 di Fondamenti dell'Informatica (canale B): gli esercizi sugli invarianti, con la
  divisione intera e la potenza veloce; gli invarianti dei cicli sui vettori, somma e ricerca degli zeri; l'inizio
  del capitolo 3 della parte 2 del libro, con il ripasso delle funzioni, la funzione caratteristica, le sequenze e le
  stringhe.
lede: >-
  Le tre lezioni della settimana in poche pagine: due sugli invarianti di ciclo, che chiudono il capitolo sulle
  dimostrazioni, e una che apre il capitolo 3 con funzioni, sequenze e stringhe, il vocabolario che servirà per automi
  e grammatiche.
materiale: libro
simboli_logici: quantificatori
scheda:
  Lezioni: "[20](20_invarianti_potenza_veloce.html) lun 16/11 · [21](21_invarianti_vettori_somma_zeri.html) gio 19/11 · [22](22_funzioni_sequenze_stringhe.html) ven 20/11, §3.1 e §3.2"
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni 20, 21 e 22 di Fondamenti dell'Informatica (canale B), scritti sul diario del docente,
  sui lucidi di F. Cardone (canale A) e sulle risposte ufficiali agli esercizi del libro di testo, parte 2
  (Johnsonbaugh, cap. 3)
appunti_html: appunti/FDA/riassunto_settimana_08.html
genera_html: true
---

## In breve

- Un programma è **corretto** rispetto a una condizione di ingresso e a una di uscita. **Parzialmente**: se termina, il risultato è giusto. **Totalmente**: in più, termina.
- La **terminazione** di un ciclo si dimostra con una quantità intera che non scende sotto zero e cala a ogni giro.
- L'invariante della **potenza veloce** è `ris * x^y == a^n`: il già calcolato per il resto da calcolare.
- In un ciclo che scorre un **vettore**, l'invariante parla dei **primi `i` elementi**, cioè di quelli da `v[0]` a `v[i-1]`.
- Con `i <= n` come invariante, all'uscita si ottiene `i == n`: tutto il vettore è stato guardato.
- Una **funzione** è un insieme di coppie in cui ogni elemento del dominio compare a sinistra una volta sola. **Iniettiva**: al massimo una freccia in arrivo. **Suriettiva**: almeno una.
- Una **sequenza** è una funzione con dominio fatto di interi; una **stringa** è una sequenza finita di simboli, e la sua **lunghezza** è il numero dei suoi posti.

> [!NOTA] Le lezioni della settimana
> Tre lezioni: lunedì 16/11, giovedì 19/11 e venerdì 20/11. Per il docente sono le lezioni 21, 22 e 23; negli appunti sono la 20, la 21 e la 22. Con la lezione di venerdì comincia il capitolo 3 della parte 2 del libro.

## 20 · Divisione intera e potenza veloce (lun 16/11)

Dire che un programma è giusto vuol dire fissare **che cosa deve fare**: una condizione di ingresso sui dati e una condizione di uscita sui risultati.

**La divisione per sottrazioni.** `q = 0; r = X; while (r >= D) { r = r - D; q = q + 1; }`, con ingresso `X >= 0` e `D > 0`.

- Invariante: `X == q * D + r`. Vero all'inizio, perché `0 * D + X` vale `X`; resta vero perché togliere `D` da `r` e aggiungere 1 a `q` non cambia la somma.
- All'uscita `r < D`: insieme all'invariante dice che `q` è il quoziente e `r` il resto. È la correttezza **parziale**.
- Terminazione: `r` è un intero non negativo che cala di `D` a ogni giro. Con `D = 0` l'invariante resta vero ma il ciclo non finisce: l'invariante da solo non dà la terminazione.

**La potenza veloce.** Invece di moltiplicare `n` volte per la base, si eleva al quadrato quando si può:

```c
x = a; y = n; ris = 1;
while (y > 0) {
    if (y % 2 == 1) { ris = ris * x; y = y - 1; }
    else            { x = x * x;     y = y / 2; }
}
```

- Invariante: **`ris * x^y == a^n`**. Nel ramo dispari un fattore `x` passa da `x^y` a `ris`. Nel ramo pari la base diventa il quadrato e l'esponente la metà: $(x^2)^{y/2} = x^y$.
- All'uscita `y == 0`, e l'invariante diventa `ris == a^n`.
- Terminazione: `y` cala a ogni giro e non scende sotto zero.

```grafico
titolo: Il cammino dell'esponente y nella potenza veloce con n uguale a 13. Quando y è dispari cala di 1, quando è pari si dimezza. Sei giri invece di tredici
x: -0.5 14
y: 0 3.4
assi: no
griglia: no
proporzioni: libere
segmento: -0.2 1.0 13.6 1.0 | grigio | sottile
punto: 13 1.0 | blu
punto: 12 1.0 | blu
punto: 6 1.0 | blu
punto: 3 1.0 | blu
punto: 2 1.0 | blu
punto: 1 1.0 | blu
punto: 0 1.0 | verde
testo: 13 0.45 | blu | "13"
testo: 12 0.45 | blu | "12"
testo: 6 0.45 | blu | "6"
testo: 3 0.45 | blu | "3"
testo: 2 0.45 | blu | "2"
testo: 1 0.45 | blu | "1"
testo: 0 0.45 | verde | "0"
freccia: 12 1.5 6.2 1.5 | ambra
freccia: 6 1.9 3.2 1.9 | ambra
freccia: 2 1.5 1.15 1.5 | ambra
testo: 9.2 2.0 | ambra | "diviso 2"
testo: 5.0 2.5 | ambra | "diviso 2"
```

Un `if` nel corpo del ciclo vuol dire un passo induttivo con **due casi**, uno per ramo.

::: prova Nella divisione con `X = 29` e `D = 4`, quanti giri fa il ciclo e con quali valori finisce?
Sette giri: `q = 7` e `r = 1`. Infatti $7 \cdot 4 + 1 = 29$, e 1 è minore di 4.
:::

> [!RICORDA]
> - Parziale: se termina, è giusto. Totale: in più termina.
> - Divisione: `X == q * D + r`. Potenza veloce: `ris * x^y == a^n`.
> - Vero solo alla fine: è la condizione di uscita, non un invariante.

## 21 · Invarianti sui vettori (gio 19/11)

Un ciclo che scorre un vettore `v` di `n` elementi usa un indice `i` che va da 0 a `n`. In ogni momento `i` divide il vettore in due.

```grafico
titolo: Il vettore v con l'indice i fermo a 3. I primi tre elementi, quelli di posto 0, 1 e 2, sono già stati guardati. L'elemento v[i] è il prossimo. Gli invarianti parlano solo della parte a sinistra
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

I tre cicli della lezione, con il vettore `{4, 0, 7, 0, 0, 3}`:

| Ciclo | Che cosa fa nel corpo | Invariante | All'uscita |
|---|---|---|---|
| somma | `s = s + v[i]` | `s` è la somma dei primi `i` elementi | `s` vale 14 |
| conta gli zeri | `if (v[i] == 0) c = c + 1` | `c` è il numero di zeri tra i primi `i` | `c` vale 3 |
| cerca il primo zero | niente: avanza finché `v[i] != 0` | nessuno dei primi `i` è zero | `i` vale 1 |

- **Il passo base** funziona con la parte guardata vuota: la somma di nessun elemento è 0, e «nessuno di loro è zero» è vera a vuoto.
- **`i <= n`** è un invariante di tutti e tre; con la condizione del ciclo falsa dà `i == n`.
- **La ricerca** ha la condizione `i < n && v[i] != 0` e due modi di finire. Con `i == n`: non ci sono zeri. Con `i < n`: `v[i]` è zero, ed è il **primo**, perché l'invariante esclude i posti prima.
- **Gli errori di uno**: scrivere `v[i]` dove ci vuole `v[i-1]`, o `i <= n` nella condizione del ciclo, che fa leggere `v[n]`.
- **Terminazione**: `n - i` cala di 1 a ogni giro e non scende sotto zero.

::: prova Nel ciclo della somma, `s == v[0] + … + v[i]` è un invariante?
No. Prima del ciclo `s` vale 0, e a destra ci sarebbe `v[0]`, che nell'esempio vale 4. L'invariante finisce a `v[i-1]`.
:::

> [!RICORDA]
> - I primi `i` elementi vanno da `v[0]` a `v[i-1]`; `v[i]` è il prossimo.
> - Invariante: la condizione di uscita con «i primi `i`» al posto di «tutti».
> - Ricerca: due casi di uscita, e `i < n` va scritto per primo.

## 22 · Funzioni, sequenze, stringhe (ven 20/11)

**Funzioni.** Una funzione è un insieme di coppie in cui ogni elemento del dominio compare a sinistra **esattamente una volta**. Si scrive $f : X \to Y$, con $X$ dominio e $Y$ codominio. Tre proprietà guardano le frecce che arrivano:

| | Frecce in arrivo in ogni elemento di $Y$ | Nome inglese del libro |
|---|---|---|
| iniettiva | al massimo una | *one-to-one* |
| suriettiva | almeno una | *onto* |
| biiettiva | esattamente una | *bijection* |

Solo una funzione biiettiva ha un'**inversa**, che si ottiene scambiando i due elementi di ogni coppia.

**Funzione caratteristica.** $C_X$ vale 1 sugli elementi di $X$ e 0 sugli altri. Per l'intersezione si moltiplica: $C_{X \cap Y} = C_X \cdot C_Y$. Per l'unione la somma $C_X + C_Y$ va bene **se e solo se** i due insiemi sono disgiunti: su un elemento comune darebbe 2. La formula che vale sempre toglie il prodotto.

**Sequenze.** Una sequenza è una funzione con dominio fatto di interi; $s_n$ è l'elemento di indice $n$. Le quattro parole:

| | Condizione per ogni $i < j$ | Esempio |
|---|---|---|
| crescente | $s_i < s_j$ | 2, 5, 13, 40 |
| decrescente | $s_i > s_j$ | 8, 6, 4, 2 |
| non decrescente | $s_i \le s_j$ | 3, 3, 5 |
| non crescente | $s_i \ge s_j$ | 9, 6, 6, 1 |

Una sequenza costante è non crescente e non decrescente insieme. «Non crescente» è il nome di una proprietà, e non la negazione di «crescente»: 1, 4, 2, 8 non è nessuna delle quattro.

Una **sottosequenza** tiene alcuni elementi nello stesso ordine. $\sum_{i=m}^{n} a_i$ è la somma degli elementi dall'indice $m$ all'indice $n$, e $\prod$ il prodotto.

**Stringhe.** Una stringa su un insieme $X$ è una sequenza finita di elementi di $X$, scritta senza virgole. $\lambda$ è la stringa vuota; $X^*$ è l'insieme di tutte le stringhe su $X$, e $X^+$ di quelle non vuote. La lunghezza $|\alpha|$ conta i posti, ripetizioni comprese: $|aabab| = 5$ e $|\lambda| = 0$.

::: prova La funzione $f(n) = 2n$ da $\mathbb{Z}$ a $\mathbb{Z}$ è iniettiva? È suriettiva?
Iniettiva sì: da $2n_1 = 2n_2$ viene $n_1 = n_2$. Suriettiva no: i numeri dispari non sono raggiunti.
:::

> [!RICORDA]
> - Funzione: una freccia sola in partenza da ogni elemento del dominio.
> - Iniettiva, suriettiva, biiettiva: al massimo, almeno, esattamente una freccia in arrivo.
> - Crescente vuole il minore stretto; non decrescente permette i valori uguali.
> - $\lambda$ è una stringa, di lunghezza 0; non è l'insieme vuoto.

## Verso l'esame

- **Quiz «seleziona gli invarianti»**: simulazione 2 del 2023/24, quiz 7. Con un vettore si controlla anche il caso `i = 0`.
- **Quiz sulle proprietà di una relazione**: nelle simulazioni del 2023/24, quiz 4, con le voci «è totale?», «individua una funzione?», «è una biiezione?».
- **Stringhe e lunghezze** sono il vocabolario dei quiz su automi e grammatiche.
- **Domanda aperta facoltativa**: una dimostrazione corta, come quella di un invariante per induzione sul numero di giri.
- Appelli 2026/27: venerdì 29/01/2027 e giovedì 18/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Che differenza c'è tra correttezza parziale e totale?
Parziale: se il programma termina, il risultato rispetta la condizione di uscita. Totale: in più termina sempre.
:::

::: domanda Qual è l'invariante della potenza veloce, e come dà il risultato?
`ris * x^y == a^n`. All'uscita `y` vale 0, quindi `x^y` vale 1 e resta `ris == a^n`.
:::

::: domanda Di quale parte del vettore parla l'invariante di un ciclo che lo scorre?
Dei primi `i` elementi, quelli già guardati: da `v[0]` a `v[i-1]`.
:::

::: domanda Nella ricerca del primo zero, che cosa vuol dire uscire con `i == n`?
Che nel vettore non ci sono zeri: l'invariante dice che nessuno dei primi `n` elementi è zero.
:::

::: domanda Quando un insieme di coppie è una funzione?
Quando ogni elemento del dominio compare come primo elemento in una coppia sola.
:::

::: domanda Che cosa sono $\lambda$, $X^*$ e la lunghezza di una stringa?
La stringa vuota; l'insieme di tutte le stringhe su $X$; il numero di elementi della stringa.
:::

## Quiz d'esame

Le prime due vengono da una domanda vera: il quiz 4 delle simulazioni d'esame 2023/24, sulle proprietà di una relazione, messo in forma di scelta singola. Le risposte giuste sono quelle segnate nella copia compilata da uno studente, ricontrollate con le definizioni. Le altre sono **sul modello** del quiz 7 della simulazione 2 e degli esercizi del libro; i cicli li ho provati con un programma.

```quiz
D: Simulazioni 2023/24, quiz 4. La relazione $R = \{(1,1), (1,2), (1,3), (3,1), (3,3), (4,4), (5,5)\}$, con dominio e codominio $\{1, 2, 3, 4, 5\}$, individua una funzione?
+ no: il 2 non ha immagine e l'1 ne ha tre
- sì: ogni coppia ha un primo e un secondo elemento
- sì, ma non è iniettiva
- no, solo perché non è riflessiva
- sì, ed è una biiezione
= Una funzione vuole esattamente una coppia per ogni elemento del dominio. La più insidiosa è «no, solo perché non è riflessiva»: la riflessività è un'altra proprietà e non c'entra con l'essere una funzione.

D: Dallo stesso quiz. La relazione $R$ è totale?
+ no: nessuna coppia comincia con 2
- sì: tutti gli elementi da 1 a 5 compaiono in qualche coppia
- sì: ha 7 coppie e gli elementi sono 5
- no: manca la coppia $(2, 2)$
- no: l'1 compare in troppe coppie
= Totale vuol dire che da ogni elemento parte almeno una coppia. Il 2 compare solo come secondo elemento. La più insidiosa è «sì: tutti gli elementi da 1 a 5 compaiono in qualche coppia»: non basta comparire, bisogna comparire a sinistra.

D: Sul modello del quiz 7 della simulazione 2. Nel ciclo `x = a; y = n; ris = 1; while (y > 0) { if (y % 2 == 1) { ris = ris * x; y = y - 1; } else { x = x * x; y = y / 2; } }`, con `n >= 0`, quale coppia è fatta di due invarianti?
+ `ris * x^y == a^n` e `y >= 0`
- `ris == a^n` e `y >= 0`
- `ris * x^y == a^n` e `y > 0`
- `ris == a^(n - y)` e `y >= 0`
- `x == a` e `y <= n`
= Il prodotto tra il già calcolato e il resto non cambia, e `y` non scende sotto zero. La più insidiosa è «`ris == a^(n - y)` e `y >= 0`»: `ris == a^(n - y)` vale per il ciclo che moltiplica un fattore alla volta, non qui, dove la base cambia.

D: Nello stesso ciclo, con `a = 2` e `n = 10`, quanti giri fa il ciclo?
N: 5
= L'esponente scende così: 10, 5, 4, 2, 1, 0. Provato.

D: Sul modello del quiz 7 della simulazione 2. Nel ciclo `i = 0; s = 0; while (i < n) { s = s + v[i]; i = i + 1; }` su un vettore `v` di `n` interi, quale affermazione è un invariante?
+ `s == v[0] + … + v[i-1]`
- `s == v[0] + … + v[i]`
- `s == v[0] + … + v[n-1]`
- `i < n`
- `s >= 0`
= `s` è la somma degli elementi già guardati. La più insidiosa è `s >= 0`: è un invariante solo se il testo dice che gli elementi non sono negativi.

D: Il ciclo `i = 0; while (i < n && v[i] != 0) { i = i + 1; }` gira sul vettore `{3, 5, 0, 2, 0}`, con `n = 5`. Quanto vale `i` all'uscita?
N: 2
= `v[0]` e `v[1]` non sono zero, `v[2]` sì. È il posto del primo zero. Provato.

D: La sequenza 5, 5, 8, 8, 9 è:
+ non decrescente, ma non crescente
- crescente
- non crescente
- decrescente
- nessuna delle quattro
= Non scende mai, ma ha valori uguali vicini. La più insidiosa è «non crescente»: nel parlare comune vorrebbe dire «non è crescente», ma è il nome della proprietà «non sale mai».

D: Quanto vale $\sum_{i=2}^{5} i^2$?
N: 54
= $4 + 9 + 16 + 25$. L'indice parte da 2, non da 1.

D: Quante sono le stringhe di lunghezza 3 su $X = \{0, 1\}$?
N: 8
= Due scelte per ognuno dei tre posti: 000, 001, 010, 011, 100, 101, 110, 111.
```

## Fonti

- Le lezioni complete: [20 · Esercizi sugli invarianti](20_invarianti_potenza_veloce.html), [21 · Invarianti sui vettori](21_invarianti_vettori_somma_zeri.html) e [22 · Funzioni, sequenze e stringhe](22_funzioni_sequenze_stringhe.html), con gli esempi, i disegni e gli esercizi.
- Diario delle lezioni del canale B (Berardi), lezioni 21, 22 e 23 del docente; lucidi di F. Cardone (canale A) su invarianti e induzione; risposte ufficiali agli esercizi dei §3.1 e §3.2 del libro di testo.
- Simulazioni d'esame 2023/24, quiz 4, dalla trascrizione delle schermate con le risposte segnate da uno studente; quiz 7 della simulazione 2 come modello.
