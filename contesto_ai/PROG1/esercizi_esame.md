# Programmazione I — esercizi d'esame tipo (con soluzioni)

Raccolta ragionata dagli anni passati (esercizi Moodle 2023/24 del canale C, testi pre-esame 2023/24, schema del canale C 2025/26) più un esempio costruito per la tipologia "heap". Serve per esercitarsi e per generare nuovi esercizi nello **stesso stile** dell'esame.

**Le soluzioni delle sezioni C, D, E sono state compilate con `gcc -Wall -Werror` (C11, C17, C23) e testate**, casi limite compresi (array vuoti, stringa vuota, righe senza elementi validi). Le risposte dei quiz B1 e B2 sono state verificate eseguendo i programmi, quelle di B3 e B4 a mano. I quiz della sezione B sono frammenti da leggere, non da compilare così come sono.

Regole da rispettare nelle soluzioni (come all'esame): funzioni iterative con **una sola `return`**, **niente `break`/`switch`/`case`/`static`**, variabili sentinella; funzioni ricorsive **senza cicli**. Array sempre passati come (lunghezza, puntatore).

---

## A. Correttezza: ragionamento all'indietro (weakest precondition)

**Testo (Moodle 2023/24, "Corr. Ass. 1").** *Dato il seguente sorgente C, usando il ragionamento backward, scegliere dai menù a tendina: 1. il predicato da asserire in ogni `assert`; 2. la pre-condizione; affinché la verità della pre-condizione implichi la verità della post-condizione.*
```c
// post-condizione: 33 <= r && r <= 39
assert(?);      // (WP) pre-condizione
r = r + 2;
assert(?);
r = r * 3;
assert(?);
```
**Metodo.** Si parte dalla post-condizione e si risale: prima di `x = E` vale `Q[E/x]` (nella condizione `Q` si sostituisce `x` con l'espressione `E`).

**Soluzione.**
- Ultimo `assert`: la post-condizione `33 <= r && r <= 39`.
- Prima di `r = r * 3`: `33 <= r*3 && r*3 <= 39`, cioè `11 <= r && r <= 13`.
- Prima di `r = r + 2`: `33 <= (r+2)*3 && (r+2)*3 <= 39`, cioè `9 <= r && r <= 11`.
- Pre-condizione tra le opzioni: `33 <= (r+2)*3 && r <= 11`.

Varianti viste: post `33 <= r` → pre `9 <= r`; post `r == 33` → `r*3 == 33` → `r == 11` → pre `r == 9`.
Trappole: sostituire nel verso sbagliato; arrotondamenti interi (`33 <= 3r` ⇔ `11 <= r`, ma `34 <= 3r` ⇔ `12 <= r`); confondere `<` e `<=` (le opzioni differiscono proprio lì).

---

## B. Modello della memoria (stack di frame)

Come si svolge: disegnare un frame per ogni chiamata (parametri, variabili locali, punto di rientro, valore restituito); ricordare che **gli array passati sono quelli del chiamante** (tutti i frame vedono e modificano la stessa memoria) e che **anche il caso base crea un frame**.

### B1 — valori restituiti e aliasing (Moodle 2023/24, "Allocazione mem 1")
```c
#define DIM (size_t)(3)
int ric(size_t lenA, int a[], size_t i);
int main(void) {
    int v[DIM] = {10, 5, 1};
    int r = ric(DIM, v, 0);   // (A)
    return 0;
}
int ric(size_t lenA, int a[], size_t i) {
    if (i < lenA) {
        int n = a[i];
        a[i] = 0;
        return n + ric(lenA, a, i + 1);   // (B)
    } else {
        return 0;
    }
}
```
Domande: valore restituito dal frame con `i == 2`? con `i == 1`? valore di `n` prima della linea (B) nel frame con `i == 1`? valore di `v[2]` subito dopo (A)?
**Soluzione.** Frame: main, ric(0), ric(1), ric(2), ric(3). ric(3) → 0; ric(2) → 1 + 0 = **1**; ric(1) → 5 + 1 = **6**; `n` nel frame `i == 1` = **5**; `v[2]` = **0** (ogni frame azzera `a[i]`, cioè l'array del main). In più `r = 16`.

### B2 — istruzioni eseguite in risalita (ExMem-03)
```c
#define DIM 3
void m(int aLen, int a[], int i) {
    if (i < aLen) {
        int x = a[i];
        m(aLen, a, i + 1);          // (B)
        a[aLen - (i + 1)] = x;
    }
}
// main: int a[DIM] = {1, 2, 3}; m(DIM, a, 0);   // (A)
```
Domande: `a[2]` appena prima della disallocazione del frame con `i == 0`; quanti frame (main escluso) hanno scritto in `a` prima della disallocazione del frame con `i == 2`; `a[0]` in quell'istante; `a[1]` prima della disallocazione del main.
**Soluzione.** Le `x` si salvano scendendo (1, 2, 3), le scritture avvengono **risalendo**: `i=2` scrive `a[0]=3`, `i=1` scrive `a[1]=2`, `i=0` scrive `a[2]=1`. Risposte: **1**; **1 frame**; **3**; **2**. Risultato: array invertito `{3, 2, 1}`.

### B3 — numero di chiamate e punto di rientro (ExMem-04)
```c
#define DIM 2
void m(int lenX, int x[], int i) {
    if (i < lenX) {
        x[i]++;
        m(lenX, x, i + 1);          // (B)
    }
}
// main: int x[DIM] = {1, 2}; m(DIM, x, 0);   // (A)
```
**Soluzione.** Chiamate con `i = 0, 1, 2` → **3** (il caso base conta). `x` diventa `{2, 3}`: `x[1] = 3`, `x[0] = 2`. Il frame con `i == 1` è stato chiamato dal frame `i == 0` alla linea (B), quindi **rientra in (B)**.

### B4 — celle non inizializzate (Moodle 2023/24, riproposto nel canale B 2024)
```c
#define ROWS (size_t)(2)
#define COLS (size_t)(3)
void x(int l, size_t aRows, size_t aCols, bool a[aRows][aCols], size_t aRags[aRows]) {
    aRags[l - 1] = l;
    for (int i = l - 1; i >= 0; i--) {
        a[l - 1][i] = !(l % 2 == 0);   // (B)
    }
}
// main: bool a[ROWS][COLS]; size_t aRags[ROWS];
//       for (size_t j = 0; j < ROWS; j++) x(j + 1, ROWS, COLS, a, aRags);   // (A)
```
**Soluzione.** l = 1: `aRags[0] = 1`, `a[0][0] = true`. l = 2: `aRags[1] = 2`, `a[1][1] = a[1][0] = false`. Chiamate: **2**; `false`: **2**; `aRags[1]` = **2**; `true`: **1**. Trappola: le altre celle non sono mai scritte (valore indeterminato); si contano solo le celle valide secondo `aRags`.

---

## C. Programmazione iterativa (`e1`)

**Testo (pre-esame 2023/24).** *Scrivere una funzione iterativa `e1` che riceve una matrice irregolare VLA (`rows`, `cols`, `mat`, `rags`) di interi; `e1` determina se le righe sono tutte lunghe almeno quanto `rows` e se in ciascuna riga esiste un elemento multiplo di 7. In questo caso ritorna la somma dei primi multipli di 7 (quelli più a sinistra) di ciascuna riga, altrimenti ritorna 0.*

Schema: formula con quantificatori → **per ogni** riga (sentinella `ok = true`) **esiste** un multiplo di 7 (sentinella `found = false`). Le condizioni dei cicli includono le sentinelle, quindi niente `break`.
```c
int e1(size_t rows, size_t cols, const int mat[rows][cols], const size_t rags[rows]) {
    int sum = 0;
    bool ok = true;                        // "per ogni riga": parte da true
    for (size_t i = 0; i < rows && ok; i++) {
        ok = rags[i] >= rows;
        bool found = false;                // "esiste un multiplo di 7": parte da false
        for (size_t j = 0; j < rags[i] && ok && !found; j++) {
            if (mat[i][j] % 7 == 0) {
                sum = sum + mat[i][j];
                found = true;
            }
        }
        ok = ok && found;
    }
    if (!ok) {
        sum = 0;
    }
    return sum;                            // una sola return
}
```
Testato: somma corretta; riga corta → 0; riga senza multipli di 7 → 0; `rows == 0` → 0 (vacuamente vero, somma vuota). Trappole: scorrere fino a `cols` invece di `rags[i]`; dimenticare di azzerare il risultato quando la proprietà fallisce (una soluzione pubblicata da studenti ha proprio questo bug).

---

## D. Programmazione ricorsiva (`e2` involucro + `e2R`)

Schemi da sapere: **co-variante** (indice decrescente, caso base `n == 0`, lavora su `a[n-1]`); **contro-variante** (indice crescente, caso base `i == aLen`); **dicotomica** su `[l, r)` (vuoto `l == r`, un elemento `r - l == 1`, divisione in `m = l + (r - l) / 2`). Il tipo richiesto va rispettato: una soluzione funzionante del tipo sbagliato non vale.

### D1 — contro-variante con capacità (pre-esame 2023/24)
*`e2` prende un array (`aLen`, `a`), un secondo array (`*p_bLen`, `b`) e un valore `val`; è un involucro che chiama la ricorsiva `e2R`. `e2R` considera ciascun elemento di `a`: se è strettamente maggiore di `val` copia in `b` la differenza con `val`. Al più `*p_bLen` elementi vengono scritti; alla fine `*p_bLen` contiene il numero di elementi effettivamente scritti.*
```c
void e2R(size_t aLen, const int a[], size_t *p_bLen, size_t cap, int b[], int val, size_t i) {
    if (i < aLen) {
        if (a[i] > val && *p_bLen < cap) {
            b[*p_bLen] = a[i] - val;
            *p_bLen = *p_bLen + 1;
        }
        e2R(aLen, a, p_bLen, cap, b, val, i + 1);
    }
}
void e2(size_t aLen, const int a[], size_t *p_bLen, int b[], int val) {
    size_t cap = *p_bLen;      // capacità di b in ingresso
    *p_bLen = 0;               // caso iniziale: nessun elemento scritto
    e2R(aLen, a, p_bLen, cap, b, val, 0);
}
```

### D2 — dicotomica (pre-esame 2023/24)
*`e2R` esegue una ricorsione dicotomica e ritorna la somma degli elementi di `a` compresi tra `-val` e `+val`, estremi inclusi; 0 se l'array è vuoto.*
```c
int e2R(const int a[], size_t l, size_t r, int val) {
    if (l == r) {
        return 0;                                  // intervallo vuoto
    }
    if (r - l == 1) {
        return (a[l] >= -val && a[l] <= val) ? a[l] : 0;
    }
    size_t m = l + (r - l) / 2;
    return e2R(a, l, m, val) + e2R(a, m, r, val);
}
int e2(size_t aLen, const int a[], int val) {
    return e2R(a, 0, aLen, val);
}
```
Trappola: trattare `l == r` come "un elemento" legge `a[0]` anche con array vuoto (bug presente in soluzioni pubblicate da studenti).

### D3 — stringa filtrata in-place (pre-esame 2023/24)
*`e2R` modifica in-place la stringa: un carattere `c` viene mantenuto solo se non esistono altre occorrenze di `c` nel resto della stringa; la stringa va terminata con `'\0'`.*
```c
bool esisteR(const char *s, char c) {
    if (*s == '\0') {
        return false;
    }
    if (*s == c) {
        return true;
    }
    return esisteR(s + 1, c);
}
void e2R(char *w, const char *r) {           // w: dove scrivo, r: dove leggo (w <= r)
    if (*r == '\0') {
        *w = '\0';
    } else if (esisteR(r + 1, *r)) {
        e2R(w, r + 1);                        // c ricompare dopo: lo scarto
    } else {
        *w = *r;                              // nessuna occorrenza successiva: lo tengo
        e2R(w + 1, r + 1);
    }
}
void e2(char *s) {
    e2R(s, s);
}
```
Esempio: `"banana"` → `"bna"`. "Nel resto della stringa" significa *dopo* `c`. Anche l'ausiliaria è ricorsiva (niente cicli nelle ricorsive).

---

## E. Heap (`malloc`) — esempio costruito

Tipologia presente nel canale C 2025/26 (funzione che restituisce un array allocato e la lunghezza in un parametro di uscita). Il testo seguente è un esempio nello stesso stile, **non** un testo d'esame reale.

*`e3` riceve un array (`aLen`, `a`) e restituisce un nuovo array allocato sullo heap con gli elementi pari di `a`, nell'ordine; la lunghezza va scritta in `*out_len`.*
```c
int *e3(size_t aLen, const int a[], size_t *out_len) {
    size_t cnt = 0;
    for (size_t i = 0; i < aLen; i++) {
        if (a[i] % 2 == 0) {
            cnt = cnt + 1;
        }
    }
    int *b = malloc(cnt * sizeof(int));
    size_t k = 0;
    if (b != NULL) {
        for (size_t i = 0; i < aLen; i++) {
            if (a[i] % 2 == 0) {
                b[k] = a[i];
                k = k + 1;
            }
        }
    }
    *out_len = k;
    return b;                              // chi chiama dovrà fare free()
}
```
Trappola: per i **dispari** non usare `a[i] % 2 == 1`, perché con i negativi `-3 % 2 == -1`; usare `a[i] % 2 != 0` (errore trovato nelle soluzioni ufficiali del canale A 2025/26).

---

## F. Epoca Java (2016–2019) — solo per la logica

Formato: 4 esercizi, 32 punti — iterativo (7, al PC), ricorsivo con tipo imposto (7, al PC), dimostrazione per induzione o invariante (2+2+3+3, a mano), stato della memoria stack+heap (8, a mano). I testi (in `guida_degli_studenti_di/Materie/PROG1/FacSimili/`) sono buoni allenamenti se riscritti in C con `(len, array)` al posto degli array Java.
