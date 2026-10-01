---
corso: MDAG
modulo: AG
lezione: L13
titolo: Sistemi lineari III
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L13
descrizione: >-
  Appunti della lezione L13 di Algebra lineare e Geometria (MDAG, parte 2): indipendenza lineare, generatori, basi e
  coordinate rispetto a una base studiati con i sistemi lineari, il rango e il determinante, più un codice che
  corregge gli errori di trasmissione, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Le domande della lezione L07 (questi vettori sono indipendenti? generano tutto lo spazio? sono una base?) diventano
  sistemi lineari, e le risposte si leggono sul rango o sul determinante della matrice che ha i vettori come colonne.
  Poi le coordinate di un vettore rispetto a una base, che si trovano risolvendo un sistema, e un'applicazione:
  come due numeri in più permettono di trovare e correggere un errore in un messaggio.
materiale: dispense
scheda:
  Dispense: lezione 13 · pp. 62–67
  Libro: Martelli, §2.3 e §3.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 100–130 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 13 «Sistemi lineari III»; B. Martelli, Geometria e algebra lineare, §2.3 e §3.2
file_en: L13_linear_systems_3.html
appunti_html: appunti/MDAG/L13_sistemi_lineari_3.html
genera_html: true
---

## In breve

- Si mettono i vettori $v_1, \dots, v_k \in \K^m$ come **colonne** di una matrice $A = (v_1 \mid \cdots \mid v_k)$: indipendenza, generatori e coordinate diventano domande su un sistema lineare con matrice $A$.
- $v_1, \dots, v_k$ sono **indipendenti** se e solo se il sistema omogeneo $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$ ha solo la soluzione nulla, cioè se e solo se $\rk(A) = k$.
- $v_1, \dots, v_k$ **generano** $\K^m$ se e solo se il sistema $\lambda_1v_1 + \cdots + \lambda_kv_k = v$ ha soluzione per ogni $v$, cioè se e solo se $\rk(A) = m$.
- Con $n$ vettori in $\K^n$ la matrice è quadrata: sono una **base** se e solo se $\det A \neq 0$. Se $\dim V = n$, per $n$ vettori basta controllare una sola delle due condizioni.
- Rispetto a una base ogni vettore si scrive **in un solo modo** come combinazione dei vettori della base (Proposizione 13.4): i coefficienti sono le sue **coordinate**.
- Le coordinate si trovano risolvendo un sistema: $\lambda = A^{-1}v$, oppure Gauss–Jordan sulla matrice $(A \mid v)$.
- Collegamento con l'informatica: aggiungendo a un messaggio due numeri scelti con un sistema lineare si può scoprire e correggere un errore di trasmissione.
- All'esame: quiz «generatori e/o linearmente indipendenti?», «vettore delle coordinate», «rango della matrice».

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Dall'indipendenza lineare a un sistema omogeneo (pp. 62–63)

Nella lezione L07 hai visto che due vettori del piano sono dipendenti quando sono uno multiplo dell'altro: $v_1 = (1, 2)$ e $v_2 = (2, 4)$ lo sono, perché $2v_1 - v_2 = 0$. Con tre vettori in $\R^3$ però l'occhio non basta più: può darsi che nessuno sia multiplo di un altro e che siano comunque dipendenti. Questa lezione trasforma la domanda in un **sistema lineare**, che sappiamo risolvere sempre (lezioni L11 e L12).

Le dispense riprendono la definizione della lezione L07.

> [!DEF] Dipendenza e indipendenza lineare (p. 62)
> Sia $V$ uno spazio vettoriale su $\K$ e siano $v_1, \dots, v_k \in V$. Questi vettori sono **linearmente dipendenti** se esistono dei coefficienti $\lambda_1, \dots, \lambda_k \in \K$, non tutti nulli, tali che
> $$\lambda_1v_1 + \cdots + \lambda_kv_k = 0. \qquad (13.1)$$
> Invece $v_1, \dots, v_k$ sono **linearmente indipendenti** se l'unica soluzione di (13.1) è $\lambda_1 = \cdots = \lambda_k = 0$.

### L'idea: l'equazione (13.1) è un sistema

Guarda (13.1) con occhi nuovi: le **incognite** sono i coefficienti $\lambda_1, \dots, \lambda_k$, i vettori $v_j$ sono dati. Se i vettori stanno in $\K^m$, l'uguaglianza (13.1) vale componente per componente: sono $m$ equazioni. La $i$-esima dice

$$\lambda_1 (v_1)_i + \lambda_2 (v_2)_i + \cdots + \lambda_k (v_k)_i = 0,$$

dove $(v_j)_i$ è la $i$-esima componente di $v_j$. È un **sistema lineare omogeneo** in $\lambda_1, \dots, \lambda_k$, e la sua matrice dei coefficienti ha i vettori **come colonne**:

$$A = (v_1 \mid v_2 \mid \cdots \mid v_k).$$

- La soluzione $\lambda = 0$ c'è sempre (lezione L12: un sistema omogeneo non è mai impossibile).
- I vettori sono **indipendenti** se e solo se questa è l'**unica** soluzione.
- Per Rouché–Capelli le soluzioni formano un sottospazio di dimensione $k - \rk(A)$: c'è solo lo zero se e solo se $k - \rk(A) = 0$.

> [!METODO] Indipendenti o no?
> 1. Scrivi la matrice $A = (v_1 \mid \cdots \mid v_k)$ con i vettori in colonna.
> 2. Calcola $\rk(A)$ con Gauss (lezione L12): i vettori sono indipendenti se e solo se $\rk(A) = k$, cioè se c'è un pivot in **ogni** colonna.
> 3. Se $k = m$ (tanti vettori quante componenti) $A$ è quadrata, e basta il determinante: indipendenti se e solo se $\det A \neq 0$ (Corollario 12.8: una sola soluzione, quella nulla).
> 4. Se sono dipendenti, risolvi il sistema omogeneo: ogni soluzione non nulla è una **relazione** tra i vettori.

> [!ESEMPIO] 13.1 · Tre vettori dipendenti di $\R^3$
> Consideriamo
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad v_3 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}.$$
> Dobbiamo studiare le soluzioni di $\lambda_1v_1 + \lambda_2v_2 + \lambda_3v_3 = 0$, cioè del sistema lineare omogeneo
> $$\begin{cases} \lambda_1 + \lambda_3 = 0 \\ \lambda_1 + \lambda_2 = 0 \\ \lambda_2 - \lambda_3 = 0 \end{cases} \qquad A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix} = (v_1 \mid v_2 \mid v_3).$$
> **Con il determinante.** Il sistema ha un'unica soluzione se $\det A \neq 0$. Sviluppando lungo la prima riga (il termine centrale ha il coefficiente $0$):
> $$\det A = 1 \cdot \det \begin{pmatrix} 1 & 0 \\ 1 & -1 \end{pmatrix} + 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = -1 + 1 = 0.$$
> Quindi esistono infinite soluzioni e i vettori sono **linearmente dipendenti**.
>
> **Con le mosse di Gauss.**
> $$A \xrightarrow{A_2 \to A_2 - A_1} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \xrightarrow{A_3 \to A_3 - A_2} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}$$
> $A$ ha rango $2 < 3$: di nuovo infinite soluzioni $(\lambda_1, \lambda_2, \lambda_3)$, e i vettori sono dipendenti.
>
> **Con lo Span.** Se $A$ ha rango 2, $\Span(v_1, v_2, v_3)$ ha dimensione 2; tre vettori indipendenti genererebbero uno spazio di dimensione 3. Quindi sono dipendenti.

Qui le dispense chiamano le righe della matrice $A_1, A_2, A_3$ (con l'indice in basso, come nella lezione L08) invece di $R_1, R_2, R_3$: $A_2 \to A_2 - A_1$ è la solita mossa di tipo (III).

Le dispense si fermano a «sono dipendenti». Vale la pena trovare **la relazione**: dalla forma a scalini, $\lambda_3 = t$ è libera, la seconda riga dà $\lambda_2 = t$ e la prima $\lambda_1 = -t$. Con $t = 1$:

$$-v_1 + v_2 + v_3 = 0, \qquad \text{cioè} \qquad v_3 = v_1 - v_2.$$

Controllo: $-(1, 1, 0) + (0, 1, 1) + (1, 0, -1) = (0, 0, 0)$. Nessuno dei tre vettori è multiplo di un altro, eppure il terzo si ottiene dai primi due: è il caso che la lezione L07 segnalava (non essere a coppie multipli è necessario ma non basta).

```widget gauss
titolo: Metti i vettori in colonna e conta i pivot (qui $v_1, v_2, v_3$ dell'Esempio 13.1)
matrice: 1 0 1; 1 1 0; 0 1 -1
modo: rango
modi: rango nucleo
```

Premi «Calcola»: due pivot, rango 2, quindi i tre vettori sono dipendenti. Scegli poi «nucleo e immagine»: il nucleo è generato da $(-1, 1, 1)$, proprio i coefficienti della relazione $-v_1 + v_2 + v_3 = 0$. Prova a cambiare l'ultimo numero da $-1$ a $1$: il rango diventa 3 e i vettori diventano indipendenti.

> [!TRAPPOLA] Troppi vettori sono sempre dipendenti
> In $\K^m$ il rango di una matrice con $m$ righe è al massimo $m$. Quindi **più di $m$ vettori di $\K^m$ sono sempre dipendenti**: 4 vettori di $\R^3$ non possono essere indipendenti, qualunque siano. Nel quiz non serve nessun conto per escludere l'indipendenza; resta da capire se generano.

> [!TRAPPOLA] Colonne, non righe (per i sistemi)
> Per l'**indipendenza** potresti mettere i vettori anche in riga, perché $\rk(A) = \rk({}^tA)$ (Proposizione 8.6). Ma per i **generatori** e per le **coordinate**, dove si risolve un sistema con un termine noto, i vettori vanno in **colonna**: le incognite $\lambda_j$ moltiplicano le colonne. Abituati a metterli sempre in colonna.

## Spazio generato: quando i vettori generano tutto (pp. 63–64)

Ora l'altra domanda: i vettori $v_1, \dots, v_k$ **generano** $V$? Le dispense ricordano che vuol dire $\Span(v_1, \dots, v_k) = V$: ogni vettore $v \in V$ è combinazione lineare di $v_1, \dots, v_k$, cioè per ogni $v$ esistono $\lambda_1, \dots, \lambda_k \in \K$ con

$$\lambda_1v_1 + \cdots + \lambda_kv_k = v. \qquad (13.2)$$

In $\K^m$ anche (13.2) è un sistema lineare nelle incognite $\lambda_j$, con la stessa matrice $A = (v_1 \mid \cdots \mid v_k)$ e con **termine noto** $v$. Quindi:

- $v \in \Span(v_1, \dots, v_k)$ se e solo se il sistema $(A \mid v)$ ha soluzione, cioè (Rouché–Capelli) se e solo se $\rk(A \mid v) = \rk(A)$;
- i vettori **generano** $\K^m$ se e solo se il sistema ha soluzione **per ogni** $v$, e questo succede esattamente quando $\rk(A) = m$.

Perché l'ultima frase: se $\rk(A) = m$, la matrice $(A \mid v)$ ha solo $m$ righe e quindi rango al massimo $m$; ma ha almeno il rango di $A$, cioè $m$: i due ranghi coincidono per ogni $v$. Se invece $\rk(A) < m$, lo Span ha dimensione $\rk(A) < m$ e non può essere tutto $\K^m$.

> [!ESEMPIO] 13.2 · Tre vettori che generano $\R^3$
> Consideriamo
> $$w_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad w_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad w_3 = \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}.$$
> Dato un qualsiasi vettore $v = (a, b, c)$, dobbiamo studiare le soluzioni di $\lambda_1w_1 + \lambda_2w_2 + \lambda_3w_3 = v$, cioè del sistema
> $$\begin{cases} \lambda_1 + \lambda_3 = a \\ \lambda_1 + \lambda_2 + \lambda_3 = b \\ \lambda_2 - \lambda_3 = c \end{cases} \qquad A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & -1 \end{pmatrix} = (w_1 \mid w_2 \mid w_3).$$
> **Con il determinante**, lungo la prima riga:
> $$\det A = 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} + 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = -2 + 1 = -1 \neq 0.$$
> $A$ è invertibile (quindi ha rango 3) e il sistema ha sempre una soluzione, per qualsiasi $v$. Allora $\Span(w_1, w_2, w_3) = \R^3$.
>
> **Con le mosse di Gauss.**
> $$A \xrightarrow{A_2 \to A_2 - A_1} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix} \xrightarrow{A_3 \to A_3 - A_2} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}$$
> $A$ ha rango 3, quindi $\Span(w_1, w_2, w_3)$ ha dimensione 3 ed è tutto $\R^3$: ogni altro sottospazio di $\R^3$ ha dimensione strettamente minore di 3.

Si può anche scrivere **esplicitamente** la combinazione. Risolvendo il sistema con $v = (a, b, c)$ generico (oppure con l'inversa, che trovi nell'Esempio 13.6):

$$\lambda_1 = 2a - b + c, \qquad \lambda_2 = -a + b, \qquad \lambda_3 = -a + b - c.$$

Per esempio $(1, 0, 0) = 2w_1 - w_2 - w_3$. Controllo: $2(1, 1, 0) - (0, 1, 1) - (1, 1, -1) = (2 - 0 - 1,\ 2 - 1 - 1,\ 0 - 1 + 1) = (1, 0, 0)$.

### Quando i vettori non generano: l'equazione dello Span

I vettori $v_1, v_2, v_3$ dell'Esempio 13.1 hanno rango 2: **non** generano $\R^3$. Ma che cosa generano? Si scopre facendo Gauss con il termine noto generico $v = (a, b, c)$:

$$\left(\begin{array}{ccc|c} 1 & 0 & 1 & a \\ 1 & 1 & 0 & b \\ 0 & 1 & -1 & c \end{array}\right) \xrightarrow{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 0 & 1 & a \\ 0 & 1 & -1 & b - a \\ 0 & 1 & -1 & c \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - R_2} \left(\begin{array}{ccc|c} 1 & 0 & 1 & a \\ 0 & 1 & -1 & b - a \\ 0 & 0 & 0 & a - b + c \end{array}\right)$$

L'ultima riga dice $0 = a - b + c$. Il sistema ha soluzione, cioè $v \in \Span(v_1, v_2, v_3)$, **se e solo se** $a - b + c = 0$. Quindi

$$\Span(v_1, v_2, v_3) = \{(x, y, z) \in \R^3 \mid x - y + z = 0\},$$

un piano per l'origine. Controllo: $v_1$ dà $1 - 1 + 0 = 0$, $v_2$ dà $0 - 1 + 1 = 0$, $v_3$ dà $1 - 0 - 1 = 0$. Invece $(1, 0, 0)$ dà $1 \neq 0$: non è combinazione di $v_1, v_2, v_3$.

> [!METODO] Un vettore sta nello Span? E che equazioni ha lo Span?
> 1. Scrivi $(v_1 \mid \cdots \mid v_k \mid v)$ con $v = (a, b, c, \dots)$ **generico**.
> 2. Riduci a scalini: le lettere $a, b, c$ viaggiano nell'ultima colonna.
> 3. Ogni riga che a sinistra diventa nulla dà una condizione «espressione in $a, b, c = 0$»: sono le **equazioni** dello Span.
> 4. Un vettore numerico sta nello Span se e solo se soddisfa tutte le equazioni.

> [!OLTRE] una base dello Span senza conti in più
> Le mosse di Gauss sulle righe non cambiano le relazioni tra le colonne: una relazione $\lambda_1A^1 + \cdots + \lambda_kA^k = 0$ è una soluzione del sistema omogeneo, e le mosse non cambiano le soluzioni (Proposizione 11.4). Quindi i vettori $v_j$ le cui colonne hanno un pivot nella forma a scalini sono **una base** di $\Span(v_1, \dots, v_k)$. Nell'Esempio 13.1 i pivot sono nelle colonne 1 e 2: $v_1, v_2$ sono una base del piano $x - y + z = 0$. Attenzione: si prendono i vettori **di partenza**, non le colonne della matrice ridotta. È l'«algoritmo di estrazione» di Martelli (§2.3.6), fatto con Gauss.

> [!TRAPPOLA] Troppo pochi vettori non generano mai
> Lo Span di $k$ vettori ha dimensione al massimo $k$. Quindi **meno di $m$ vettori non possono generare $\K^m$**: due vettori di $\R^3$ generano al massimo un piano.

## Basi (p. 64)

Le dispense ricordano la definizione della lezione L07.

> [!DEF] Base (p. 64)
> Una sequenza $v_1, \dots, v_n \in V$ di vettori è una **base** se sono soddisfatte entrambe queste condizioni:
> 1. i vettori $v_1, \dots, v_n$ sono indipendenti;
> 2. i vettori $v_1, \dots, v_n$ generano $V$.
>
> Se sappiamo già che $V$ ha dimensione $n$, basta controllare **una** delle due proprietà: l'altra segue automaticamente (Teorema 7.12).

> [!ESEMPIO] 13.3 · Una base sì, una no
> $v_1, v_2, v_3$ dell'Esempio 13.1 **non** formano una base di $\R^3$, perché non sono linearmente indipendenti. Invece $w_1, w_2, w_3$ dell'Esempio 13.2 formano una base di $\R^3$: sono generatori e sono tre vettori, e $\R^3$ ha dimensione 3. Devono allora per forza essere linearmente indipendenti (Teorema 7.12), un fatto che si verifica anche in modo diretto: il sistema omogeneo con $\det A = -1 \neq 0$ ha solo la soluzione nulla.

Con il rango, tutte e tre le domande hanno una risposta sola. Se $A = (v_1 \mid \cdots \mid v_k)$ ha $m$ righe e $r = \rk(A)$:

| Domanda | Risposta | Serve che |
|---|---|---|
| indipendenti? | sì se e solo se $r = k$ | $k \le m$ |
| generano $\K^m$? | sì se e solo se $r = m$ | $k \ge m$ |
| base di $\K^m$? | sì se e solo se $r = k = m$ | $k = m$, cioè $\det A \neq 0$ |

| Quanti vettori in $\K^m$ | Indipendenti? | Generatori? |
|---|---|---|
| $k < m$ | possibile | **mai** |
| $k = m$ | se e solo se $\det A \neq 0$ | se e solo se $\det A \neq 0$ |
| $k > m$ | **mai** | possibile |

> [!ESEMPIO] Quattro polinomi di $\R_2[x]$
> I polinomi $1 + x$, $x + x^2$, $1 + x^2$, $1$ di $\R_2[x]$ (lo spazio dei polinomi di grado al massimo 2, di dimensione 3) sono generatori e/o indipendenti? Un polinomio $a_0 + a_1x + a_2x^2$ si scrive con i suoi tre coefficienti $(a_0, a_1, a_2)$ (sono le sue coordinate rispetto alla base $1, x, x^2$: vedi la prossima sezione). La matrice con i polinomi in colonna è
> $$A = \begin{pmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}.$$
> Le prime tre colonne hanno determinante $1 \cdot (1 - 0) - 0 + 1 \cdot (1 - 0) = 2 \neq 0$: sono già una base, quindi $\rk(A) = 3$ e i quattro polinomi **generano** $\R_2[x]$. Ma sono 4 in uno spazio di dimensione 3: **non** sono indipendenti. Infatti $1 = \frac 12\big((1 + x) - (x + x^2) + (1 + x^2)\big)$.

## Coordinate (pp. 64–65)

Una base serve a **dare un nome** a ogni vettore. Nel piano prendi la base $v_1 = (1, 1)$, $v_2 = (-1, 1)$ e il vettore $w = (2, 0)$. Si ha

$$w = 1 \cdot v_1 + (-1) \cdot v_2, \qquad \text{infatti } (1, 1) - (-1, 1) = (2, 0).$$

Per arrivare a $w$ fai un passo lungo $v_1$ e un passo all'indietro lungo $v_2$: nella base $v_1, v_2$ il vettore $w$ ha «indirizzo» $(1, -1)$. Sono le sue **coordinate** (esempio dal libro di Martelli, Esempio 2.3.12).

```grafico
titolo: $w = (2, 0)$ si raggiunge con un passo lungo $v_1$ e un passo all'indietro lungo $v_2$: coordinate $(1, -1)$
x: -2 3
y: -1.5 2
vettore: 1 1 | accento | $v_1$ | n
vettore: -1 1 | blu | $v_2$ | n
vettore: 2 0 | ambra | spesso | $w$ | s
vettore: 1 1 2 0 | blu | tratteggio | $-v_2$ | ne
```

Perché l'indirizzo sia ben definito deve essere **unico**. Ed è qui che serve l'indipendenza.

> [!PROP] 13.4
> Sia $V$ uno spazio vettoriale e sia $v_1, \dots, v_n$ una base di $V$. Ogni vettore $v \in V$ si scrive in modo unico come
> $$v = \lambda_1v_1 + \cdots + \lambda_nv_n.$$

**Dimostrazione**, in tre passi.

1. **Esiste una scrittura.** I vettori $v_1, \dots, v_n$ generano $V$, quindi $v$ si può scrivere come loro combinazione lineare.
2. **Supponiamo che ce ne siano due**: $v = \lambda_1v_1 + \cdots + \lambda_nv_n = \mu_1v_1 + \cdots + \mu_nv_n$. Spostando tutto a sinistra:
   $$(\lambda_1 - \mu_1)v_1 + \cdots + (\lambda_n - \mu_n)v_n = 0.$$
3. **I vettori sono indipendenti**, quindi tutti i coefficienti di questa combinazione sono nulli: $\lambda_i - \mu_i = 0$, cioè $\mu_i = \lambda_i$ per ogni $i$. Le due scritture sono la stessa. $\square$

> [!DEF] 13.5 · Coordinate
> I coefficienti $\lambda_1, \dots, \lambda_n$ sono le **coordinate** di $v$ rispetto alla base $v_1, \dots, v_n$. Il **vettore colonna di coordinate** è il vettore
> $$\begin{pmatrix} \lambda_1 \\ \vdots \\ \lambda_n \end{pmatrix}.$$

Pezzo per pezzo:

- Le coordinate dipendono dalla **base**: lo stesso vettore ha coordinate diverse in basi diverse.
- Dipendono anche dall'**ordine** dei vettori della base: $\lambda_1$ è il coefficiente del primo vettore, $\lambda_2$ del secondo, e così via. Scambiando $v_1$ e $v_2$ si scambiano le prime due coordinate.
- Le coordinate sono **numeri** (in $\K$): il vettore delle coordinate sta in $\K^n$ anche quando $V$ è fatto di polinomi o di matrici.
- Per la base canonica di $\K^n$ le coordinate sono le componenti del vettore; per la base $1, x, \dots, x^n$ di $\K_n[x]$ sono i coefficienti del polinomio, dal termine noto in su.

> [!ESEMPIO] 13.6 · Lo stesso vettore in due basi
> Sia $e_1, e_2, e_3$ la base canonica di $\R^3$ e sia $v = (3, 4, 5)$. Le coordinate rispetto alla base canonica sono proprio le componenti di $v$, visto che
> $$3e_1 + 4e_2 + 5e_3 = 3\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + 4\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + 5\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix}.$$
> Allora il vettore di coordinate di $v$ è proprio $v$. Questo non è più vero con un'altra base. Sia per esempio $w_1, w_2, w_3$ la base dell'Esempio 13.2. Per trovare le coordinate di $v$ in questa base dobbiamo risolvere il sistema
> $$\lambda_1 \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + \lambda_2 \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} + \lambda_3 \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix}.$$
> Nell'Esempio 13.2 abbiamo visto che la soluzione è sempre unica, perché $\det A = -1$. Il vettore di coordinate di $v$ in questa base è
> $$A^{-1}\begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 & -1 & 1 \\ -1 & 1 & 0 \\ -1 & 1 & -1 \end{pmatrix}\begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix} = \begin{pmatrix} 7 \\ 1 \\ -4 \end{pmatrix}.$$
> In alternativa si può risolvere il sistema con l'algoritmo di Gauss–Jordan.

I conti che le dispense lasciano a te.

- **Il prodotto:** prima riga $2 \cdot 3 - 1 \cdot 4 + 1 \cdot 5 = 7$; seconda $-3 + 4 + 0 = 1$; terza $-3 + 4 - 5 = -4$.
- **L'inversa è giusta?** $A \cdot A^{-1}$ deve dare l'identità. Prima riga di $A$, $(1, 0, 1)$, per le colonne di $A^{-1}$: $2 - 1 = 1$, $-1 + 1 = 0$, $1 - 1 = 0$. Le altre righe si controllano allo stesso modo.
- **Controllo del risultato:** $7w_1 + w_2 - 4w_3 = (7, 7, 0) + (0, 1, 1) - (4, 4, -4) = (3, 4, 5)$.
- **Con Gauss–Jordan**, senza inversa:
  $$\left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 1 & 1 & 1 & 4 \\ 0 & 1 & -1 & 5 \end{array}\right) \xrightarrow{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & 0 & 1 \\ 0 & 1 & -1 & 5 \end{array}\right)$$
  $$\xrightarrow{R_3 \to R_3 - R_2} \left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & -1 & 4 \end{array}\right)$$
  Poi $R_3 \to -R_3$ dà $(0, 0, 1 \mid -4)$ e $R_1 \to R_1 - R_3$ dà $(1, 0, 0 \mid 7)$: l'ultima colonna della forma ridotta è $(7, 1, -4)$.

```widget gauss
titolo: Coordinate di $v = (3, 4, 5)$ nella base $w_1, w_2, w_3$: le prime tre colonne sono la base, l'ultima è $v$
matrice: 1 0 1 3; 1 1 1 4; 0 1 -1 5
modo: sistema
```

Lo strumento risolve il sistema $(w_1 \mid w_2 \mid w_3 \mid v)$ e trova $x_1 = 7$, $x_2 = 1$, $x_3 = -4$: sono le coordinate. Cambia l'ultima colonna con un altro vettore, per esempio `1 0 0` al posto di `3 4 5`: trovi $(2, -1, -1)$, la prima colonna di $A^{-1}$.

> [!METODO] Le coordinate di $v$ rispetto a una base
> 1. **In $\K^n$:** scrivi $(v_1 \mid \cdots \mid v_n \mid v)$ e fai Gauss–Jordan; l'ultima colonna della forma ridotta è il vettore delle coordinate. Con $n = 2$ o se hai già l'inversa, usa $A^{-1}v$.
> 2. **Con i polinomi:** scrivi $\lambda_1p_1 + \cdots + \lambda_np_n = p$, raccogli le potenze di $x$ e uguaglia i coefficienti di $1, x, x^2, \dots$ a sinistra e a destra: ne esce un sistema lineare nelle $\lambda_i$.
> 3. **Controlla sempre**: ricomponi $\lambda_1v_1 + \cdots + \lambda_nv_n$ e verifica che dia $v$.

> [!ESEMPIO] Coordinate di un polinomio
> Le coordinate di $p = 2 + 3x + 4x^2$ rispetto alla base $1,\ 1 + x,\ 1 + x + x^2$ di $\R_2[x]$. Scrivo
> $$\lambda_1 \cdot 1 + \lambda_2(1 + x) + \lambda_3(1 + x + x^2) = (\lambda_1 + \lambda_2 + \lambda_3) + (\lambda_2 + \lambda_3)x + \lambda_3x^2$$
> e uguaglio i coefficienti con quelli di $p$: $\lambda_3 = 4$ (da $x^2$), $\lambda_2 + \lambda_3 = 3$ quindi $\lambda_2 = -1$ (da $x$), $\lambda_1 + \lambda_2 + \lambda_3 = 2$ quindi $\lambda_1 = -1$ (termine noto). Le coordinate sono $(-1, -1, 4)$. Controllo: $-1 - (1 + x) + 4(1 + x + x^2) = 2 + 3x + 4x^2$.

> [!TRAPPOLA] Le coordinate sono numeri, in ordine
> Nel quiz dell'appello del 08/02/2024 (domanda 3), tra le risposte c'erano scritture come $(2p_1, -p_2, p_3)$ e $(x^2, 2x, 1)$: sono sbagliate per costruzione, perché le coordinate sono i **numeri** $\lambda_i$, non i vettori $\lambda_iv_i$ né i monomi. E l'ordine conta: rispetto alla base ordinata $x^2, x, 1$ il polinomio $2 + 3x - x^2$ ha coordinate $(-1, 3, 2)$, non $(2, 3, -1)$.

> [!OLTRE] la mappa delle coordinate
> Fissata una base $B$ di $V$, la funzione che manda $v$ nel suo vettore di coordinate, indicato spesso con $[v]_B$, rispetta le somme e i multipli: le coordinate di $v + w$ sono la somma delle coordinate, quelle di $\lambda v$ sono $\lambda$ volte quelle di $v$ (esercizio 11). È il primo esempio di **applicazione lineare** tra spazi diversi (lezione L14): grazie a lei ogni spazio di dimensione $n$ si studia come $\K^n$ (Martelli, Esempio 4.1.17).

## Collegamento con l'informatica: codici che correggono gli errori (pp. 66–67)

Quando un messaggio viaggia (su un cavo, via radio, su un disco che si rovina) qualche numero può arrivare sbagliato. L'algebra lineare permette di aggiungere **informazione ridondante**, cioè numeri in più calcolati dal messaggio, in modo da **riconoscere** e in alcuni casi **correggere** gli errori. Le dispense mostrano un modello ridotto all'osso, che qui segui passo per passo.

### Codificare: due numeri di controllo

Vogliamo trasmettere i quattro numeri $2, -7, 8, -2$. Aggiungiamo due numeri $a$, $b$ e leggiamo i sei numeri come coefficienti di un polinomio di grado 5:

$$s(x) = 2x^5 - 7x^4 + 8x^3 - 2x^2 + ax + b.$$

Scegliamo $a$ e $b$ imponendo due **condizioni di controllo**: $s(1) = 0$ e $s(2) = 0$.

- $s(1) = 2 - 7 + 8 - 2 + a + b = 1 + a + b$;
- $s(2) = 2 \cdot 32 - 7 \cdot 16 + 8 \cdot 8 - 2 \cdot 4 + 2a + b = 64 - 112 + 64 - 8 + 2a + b = 8 + 2a + b$.

Le condizioni danno un **sistema lineare** nelle incognite $a, b$:

$$\begin{cases} a + b = -1 \\ 2a + b = -8 \end{cases}$$

Togliendo la prima equazione dalla seconda: $a = -7$; poi $b = -1 - a = 6$. Trasmettiamo quindi i sei numeri

$$(2, -7, 8, -2, -7, 6).$$

Controllo: $s(1) = 2 - 7 + 8 - 2 - 7 + 6 = 0$ e $s(2) = 64 - 112 + 64 - 8 - 14 + 6 = 0$.

> [!NOTA] Parentesi graffe e ordine
> Le dispense scrivono i messaggi tra graffe, $\{2, -7, 8, -2\}$. Qui però **l'ordine conta** (il primo numero è il coefficiente di $x^5$, il secondo di $x^4$, …) e i numeri possono ripetersi, come i due $-7$: come ricordava la lezione L01, in un insieme ordine e ripetizioni non contano. Per questo in questi appunti i messaggi sono scritti tra parentesi tonde, come sequenze.

### Scoprire un errore

Chi riceve ricostruisce il polinomio e controlla che $s(1) = s(2) = 0$. Se una delle due uguaglianze non vale, sa che c'è stato un errore. Supponiamo di ricevere

$$(2, -7, 8, 4, -7, 6),$$

con il quarto numero alterato ($4$ invece di $-2$). Il polinomio ricevuto $r(x) = 2x^5 - 7x^4 + 8x^3 + 4x^2 - 7x + 6$ dà $r(1) = 6 \neq 0$: errore scoperto.

### Correggerlo

Se sappiamo che è sbagliato **un solo** numero ma non sappiamo quale, sostituiamo a turno ogni posizione con un'incognita $k$ e imponiamo di nuovo $s(1) = s(2) = 0$. Ogni volta si ottiene un sistema di **due equazioni in una incognita**. Mettendo $k$ al quarto posto:

$$s(x) = 2x^5 - 7x^4 + 8x^3 + kx^2 - 7x + 6, \qquad \begin{cases} s(1) = k + 2 = 0 \\ s(2) = 4k + 8 = 0 \end{cases}$$

che ha l'unica soluzione $k = -2$. Per le altre posizioni il sistema è **incompatibile**:

| Posizione di $k$ | $s(1) = 0$ | $s(2) = 0$ | Esito |
|---|---|---|---|
| 1ª (coefficiente di $x^5$) | $k + 4 = 0$ | $32k - 40 = 0$ | $k = -4$ e $k = \frac 54$: incompatibile |
| 2ª ($x^4$) | $k + 13 = 0$ | $16k + 136 = 0$ | $k = -13$ e $k = -\frac{17}2$: incompatibile |
| 3ª ($x^3$) | $k - 2 = 0$ | $8k - 40 = 0$ | $k = 2$ e $k = 5$: incompatibile |
| 4ª ($x^2$) | $k + 2 = 0$ | $4k + 8 = 0$ | $k = -2$: **compatibile** |
| 5ª ($x$) | $k + 13 = 0$ | $2k + 38 = 0$ | $k = -13$ e $k = -19$: incompatibile |
| 6ª (termine noto) | $k = 0$ | $k + 18 = 0$ | $k = 0$ e $k = -18$: incompatibile |

Così individuiamo la posizione dell'errore e ricostruiamo il dato corretto: il quarto numero era $-2$.

> [!IDEA] perché funziona, in una riga
> Se il numero sbagliato è il coefficiente di $x^j$ ed è sbagliato di $d$, il polinomio ricevuto è $r(x) = s(x) + d\,x^j$, quindi $r(1) = d$ e $r(2) = d \cdot 2^j$. Qui $r(1) = 6$ e $r(2) = 24$: allora $d = 6$ e $2^j = \frac{24}6 = 4$, cioè $j = 2$. Il rapporto $\frac{r(2)}{r(1)}$ dice **dove** è l'errore, $r(1)$ dice **di quanto**: il coefficiente di $x^2$ ricevuto, $4$, va corretto in $4 - 6 = -2$.

Aggiungendo più informazione ridondante si correggono più errori. Per esempio, aggiungendo **quattro** coefficienti e imponendo $s(1) = s(2) = s(3) = s(4) = 0$ si ottiene un sistema lineare di quattro equazioni nei quattro coefficienti aggiunti; le quattro condizioni forniscono poi abbastanza controlli per trovare e correggere, in questo modello, fino a due coefficienti sbagliati.

I **codici di Reed–Solomon**, usati tra l'altro nei QR code e in molti sistemi di memorizzazione e trasmissione digitale, sfruttano idee strettamente collegate: i dati diventano polinomi, si aggiunge ridondanza e si usano equazioni algebriche per localizzare e correggere gli errori. I veri codici di Reed–Solomon lavorano su campi finiti, ma già questo esempio mostra il ruolo concreto di polinomi e sistemi lineari.

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: indipendenza lineare, basi e coordinate sono nel **§2.3 «Dimensione»** (pp. 60–75): (in)dipendenza lineare §2.3.1 (p. 60), basi §2.3.2 (p. 62), coordinate §2.3.3 con la Proposizione 2.3.11 e gli Esempi 2.3.12–2.3.15 (pp. 64–65), algoritmo di estrazione §2.3.6 (p. 68). L'uso del rango e di Rouché–Capelli per rispondere a queste domande è nel **§3.2** (pp. 85–93). Il codice correttore è un'aggiunta delle dispense 2026.

## Verso l'esame

La prova scritta di AG ha 10 quiz a 5 risposte (servono almeno 6 punti perché vengano corretti i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame**

1. **«Sono generatori e/o linearmente indipendenti?»** Domanda del quiz con cinque risposte fisse (indipendenti ma non generatori; né l'una né l'altra cosa; domanda mal posta; generatori ma non indipendenti; entrambe le cose): appelli del 06/09/2024 (domanda 2, quattro vettori di $\R^3$) e del 16/01/2025 (domanda 2, quattro polinomi di $\R_2[x]$). Nell'appello del 07/09/2026 (domanda 2) si chiedeva quale insieme di matrici fosse una base di $M(2, \R)$.
2. **«Il vettore delle coordinate di … nella base … è»**: appelli del 08/02/2024 (domanda 3, polinomi), del 16/01/2025 (domanda 8, in $\R^2$), del 05/02/2026 (domanda 6, le coordinate di $T(v_1)$: serve anche la lezione L14).
3. **«Determinare il rango della matrice»**: appelli del 16/01/2025 (domanda 6), del 07/02/2025 (domanda 4), del 05/02/2026 (domanda 4). Si risponde contando i pivot (lezione L12).
4. **Nei problemi aperti** le coordinate tornano nei cambi di base e nelle matrici associate (per esempio appello del 07/09/2026, problema 11): lezioni L15 e L16.

> [!METODO] Il quiz «generatori e/o indipendenti?» in tre passi
> 1. Conta i vettori, $k$, e la dimensione dello spazio, $m$ (per $\R_n[x]$ è $n + 1$, per $M(p, q, \R)$ è $pq$). Se $k > m$ non sono indipendenti; se $k < m$ non sono generatori: metà delle risposte cade subito.
> 2. Scrivi i vettori (o i coefficienti dei polinomi, o le quattro entrate delle matrici $2 \times 2$) **in colonna** e calcola il rango $r$.
> 3. Indipendenti $\Leftrightarrow r = k$; generatori $\Leftrightarrow r = m$. La risposta «la domanda è mal posta» non è mai quella giusta: la domanda ha senso con qualsiasi numero di vettori.

> [!TRAPPOLA] Gli errori da evitare
> - Scambiare righe e colonne quando si impostano le coordinate: le incognite $\lambda_i$ moltiplicano i **vettori della base**, che vanno in colonna.
> - Rispondere con i vettori $\lambda_iv_i$ invece che con i numeri $\lambda_i$.
> - Dimenticare l'ordine della base, soprattutto con i polinomi (una base scritta $x^2, x, 1$ non è $1, x, x^2$).
> - Nel quiz sulle coordinate, non ricontrollare: ricomporre $\lambda_1v_1 + \lambda_2v_2$ costa dieci secondi ed elimina ogni dubbio.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: «vettori in colonna $\to$ rango $r$: indipendenti $\Leftrightarrow r = k$, generatori di $\K^m \Leftrightarrow r = m$, base $\Leftrightarrow \det \neq 0$»; le due tabelle della sezione sulle basi; il metodo per le coordinate con i polinomi; l'inversa $2 \times 2$ per le coordinate in $\R^2$.

## Quiz

```quiz
D: I vettori $(1, 1, 1)$, $(0, 1, 2)$, $(1, 2, 3)$, $(0, 0, 1)$ di $\R^3$ sono generatori e/o linearmente indipendenti?
- Sono linearmente indipendenti, ma non generatori.
- Non sono né linearmente indipendenti né generatori.
- La domanda è mal posta: i vettori sono 4 e non 3.
+ Sono generatori, ma non linearmente indipendenti.
- Sono sia generatori che linearmente indipendenti.
= Appello del 06/09/2024, domanda 2. Quattro vettori di $\R^3$ non possono essere indipendenti; infatti $(1, 2, 3) = (1, 1, 1) + (0, 1, 2)$. Generano: $(1, 1, 1)$, $(0, 1, 2)$, $(0, 0, 1)$ in colonna danno una matrice triangolare con determinante $1 \cdot 1 \cdot 1 = 1 \neq 0$, quindi il rango è 3.

D: I vettori $v_1 = (2, 3)$ e $v_2 = (3, 2)$ formano una base di $\R^2$. Il vettore delle coordinate di $w = (7, 3)$ in questa base è:
- $(2, 3)$
- $(17, 23)$
- $(-17, 23)$
+ $(-1, 3)$
- $(7, 3)$
= Appello del 16/01/2025, domanda 8. Si risolve $2\lambda_1 + 3\lambda_2 = 7$, $3\lambda_1 + 2\lambda_2 = 3$: togliendo la prima moltiplicata per 3 dalla seconda moltiplicata per 2 si ottiene $-5\lambda_2 = -15$, quindi $\lambda_2 = 3$ e $\lambda_1 = -1$. Controllo: $-(2, 3) + 3(3, 2) = (7, 3)$. $(7, 3)$ sarebbero le coordinate nella base canonica.

D: I polinomi $p_1(x) = x^2 + x + 1$, $p_2(x) = x^2 + x - 1$, $p_3(x) = x - 2$ formano una base di $\R_2[x]$. Il vettore delle coordinate di $q(x) = (x + 1)^2$ in questa base è:
- $(1, 2, 1)$
- $(2p_1, -p_2, p_3)$
- $(3, -2, -1)$
+ $(2, -1, 1)$
- $(x^2, 2x, 1)$
= Appello del 08/02/2024, domanda 3. $ap_1 + bp_2 + cp_3 = (a + b)x^2 + (a + b + c)x + (a - b - 2c)$ e $q = x^2 + 2x + 1$: quindi $a + b = 1$, $c = 1$, $a - b = 3$, da cui $a = 2$, $b = -1$. $(1, 2, 1)$ sono le coordinate nella base canonica; le risposte con $p_i$ o con $x$ non sono vettori di numeri.

D: Il rango della matrice $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 7 \\ 3 & 6 & 10 \end{pmatrix}$ è:
- $0$
- $1$
+ $2$
- $3$
- $4$
= Simile all'appello del 16/01/2025, domanda 6. $R_2 - 2R_1 = (0, 0, 1)$ e $R_3 - 3R_1 = (0, 0, 1)$; poi $R_3 - R_2$ è nulla. Restano due pivot, nelle colonne 1 e 3: rango 2. Un rango 4 è impossibile per una matrice con 3 righe.

D: Per quali $k \in \R$ i vettori $(1, 0, k)$, $(0, 1, 1)$, $(k, 1, 2)$ sono linearmente dipendenti?
+ $k = 1$ oppure $k = -1$
- solo $k = 0$
- solo $k = 1$
- solo $k = -1$
- per nessun valore di $k$
= Tre vettori di $\R^3$: si usa il determinante della matrice che li ha in colonna. Sviluppando lungo la prima riga, $\det\begin{pmatrix} 1 & 0 & k \\ 0 & 1 & 1 \\ k & 1 & 2 \end{pmatrix} = 1 \cdot (2 - 1) + k \cdot (0 - k) = 1 - k^2$, che si annulla per $k = \pm 1$.

D: Sia $W = \Span(v_1, v_2, v_3)$ con $v_1 = (1, 1, 0)$, $v_2 = (0, 1, 1)$, $v_3 = (1, 0, -1)$ (Esempio 13.1). Quale di questi vettori sta in $W$?
+ $(1, 2, 1)$
- $(1, 0, 0)$
- $(1, 1, 1)$
- $(0, 0, 1)$
- $(2, 1, 0)$
= Con Gauss su $(v_1 \mid v_2 \mid v_3 \mid v)$ si trova che $W$ è il piano $x - y + z = 0$. Solo $(1, 2, 1)$ lo soddisfa: $1 - 2 + 1 = 0$; infatti $(1, 2, 1) = v_1 + v_2$. Gli altri danno $1$, $1$, $1$ e $1$.

D: Tre vettori di $\R^3$ linearmente indipendenti:
+ formano sempre una base di $\R^3$.
- possono non generare $\R^3$.
- generano al massimo un piano.
- hanno sempre determinante nullo, messi in colonna.
- sono sempre a due a due perpendicolari.
= $\dim \R^3 = 3$: per il Teorema 7.12 tre vettori indipendenti sono automaticamente anche generatori, quindi una base. Messi in colonna hanno determinante diverso da zero. L'indipendenza non richiede nessuna perpendicolarità.

D: Rispetto alla base ordinata $x^2, x, 1$ di $\R_2[x]$, il polinomio $p(x) = 2 + 3x - x^2$ ha coordinate:
- $(2, 3, -1)$
+ $(-1, 3, 2)$
- $(1, 3, -2)$
- $(-x^2, 3x, 2)$
- $(3, 2, -1)$
= Simile all'appello del 08/02/2024, domanda 3. $p = (-1) \cdot x^2 + 3 \cdot x + 2 \cdot 1$: le coordinate seguono l'ordine della base, quindi $(-1, 3, 2)$. $(2, 3, -1)$ sarebbero le coordinate nella base $1, x, x^2$.

D: Con il codice delle dispense, per trasmettere il messaggio $(0, 0, 1, -1)$ si aggiungono $a$ e $b$ in modo che $s(x) = x^3 - x^2 + ax + b$ soddisfi $s(1) = s(2) = 0$. Quanto valgono $a$ e $b$?
+ $a = -4$, $b = 4$
- $a = 4$, $b = -4$
- $a = -4$, $b = -4$
- $a = 0$, $b = 0$
- $a = 4$, $b = 4$
= $s(1) = 1 - 1 + a + b = a + b$ e $s(2) = 8 - 4 + 2a + b = 4 + 2a + b$. Il sistema $a + b = 0$, $2a + b = -4$ dà $a = -4$ e $b = 4$. Controllo: $s(x) = x^3 - x^2 - 4x + 4 = (x - 1)(x - 2)(x + 2)$.

D: Nella base $w_1 = (1, 1, 0)$, $w_2 = (0, 1, 1)$, $w_3 = (1, 1, -1)$ dell'Esempio 13.2, quanto vale la prima coordinata del vettore $(1, 0, 0)$?
N: 2
= Con $v = (a, b, c) = (1, 0, 0)$ la formula $\lambda_1 = 2a - b + c$ dà $2$ (è la prima colonna di $A^{-1}$). Infatti $(1, 0, 0) = 2w_1 - w_2 - w_3$.
```

## Esercizi

::: esercizio medio Esercizio 13.7 delle dispense: trovare e correggere l'errore
Riceviamo la sequenza di sei numeri $(1, -2, 3, 0, -1, 2)$. I primi quattro contengono l'informazione, gli ultimi due sono i numeri di controllo del codice visto sopra. I sei numeri sono i coefficienti di $s(x) = a_5x^5 + a_4x^4 + a_3x^3 + a_2x^2 + a_1x + a_0$ e, se la trasmissione è corretta, $s(1) = s(2) = 0$. Sappiamo che **esattamente uno** dei sei numeri è stato modificato. Quale? Qual è il suo valore corretto?
::: soluzione
**Controllo.** Il polinomio ricevuto è $r(x) = x^5 - 2x^4 + 3x^3 - x + 2$ (il coefficiente di $x^2$ è $0$). Allora
$$r(1) = 1 - 2 + 3 + 0 - 1 + 2 = 3, \qquad r(2) = 32 - 32 + 24 + 0 - 2 + 2 = 24.$$
$r(1) \neq 0$: c'è un errore.

**Posizione per posizione.** Metto un'incognita $k$ al posto di ogni numero, a turno, e impongo $s(1) = s(2) = 0$:

| Posizione di $k$ | $s(1) = 0$ | $s(2) = 0$ | Esito |
|---|---|---|---|
| 1ª ($x^5$) | $k + 2 = 0$ | $32k - 8 = 0$ | $k = -2$ e $k = \frac 14$: incompatibile |
| 2ª ($x^4$) | $k + 5 = 0$ | $16k + 56 = 0$ | $k = -5$ e $k = -\frac 72$: incompatibile |
| 3ª ($x^3$) | $k = 0$ | $8k = 0$ | $k = 0$: **compatibile** |
| 4ª ($x^2$) | $k + 3 = 0$ | $4k + 24 = 0$ | $k = -3$ e $k = -6$: incompatibile |
| 5ª ($x$) | $k + 4 = 0$ | $2k + 26 = 0$ | $k = -4$ e $k = -13$: incompatibile |
| 6ª (termine noto) | $k + 1 = 0$ | $k + 22 = 0$ | $k = -1$ e $k = -22$: incompatibile |

Per esempio, alla terza riga: con $k$ al posto del $3$, $s(1) = 1 - 2 + k + 0 - 1 + 2 = k$ e $s(2) = 32 - 32 + 8k + 0 - 2 + 2 = 8k$.

**Conclusione.** Il numero sbagliato è il **terzo** (il coefficiente di $x^3$): il valore corretto è $0$ invece di $3$. La sequenza trasmessa era $(1, -2, 0, 0, -1, 2)$. Controllo: $s(x) = x^5 - 2x^4 - x + 2$ dà $s(1) = 1 - 2 - 1 + 2 = 0$ e $s(2) = 32 - 32 - 2 + 2 = 0$.

**Con l'idea del riquadro.** $\frac{r(2)}{r(1)} = \frac{24}3 = 8 = 2^3$: l'errore è nel coefficiente di $x^3$, ed è sbagliato di $r(1) = 3$: $3 - 3 = 0$.
:::

::: esercizio base Indipendenti o no? E con quale relazione?
Stabilisci se $v_1 = (1, 2, 1)$, $v_2 = (2, 1, 0)$, $v_3 = (-1, 4, 3)$ sono linearmente indipendenti. Se non lo sono, scrivi una relazione di dipendenza.
::: soluzione
Metto i vettori in colonna e riduco:
$$\begin{pmatrix} 1 & 2 & -1 \\ 2 & 1 & 4 \\ 1 & 0 & 3 \end{pmatrix} \xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - 2R_1} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -3 & 6 \\ 0 & -2 & 4 \end{pmatrix}$$
$$\xrightarrow{R_3 \to R_3 - \frac 23 R_2} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -3 & 6 \\ 0 & 0 & 0 \end{pmatrix}$$
I conti: $(2, 1, 4) - 2(1, 2, -1) = (0, -3, 6)$; $(1, 0, 3) - (1, 2, -1) = (0, -2, 4)$; $(0, -2, 4) - \frac 23(0, -3, 6) = (0, 0, 0)$.

Rango 2 < 3: **dipendenti**. La relazione: $\lambda_3 = t$; dalla seconda riga $-3\lambda_2 + 6t = 0$, quindi $\lambda_2 = 2t$; dalla prima $\lambda_1 + 4t - t = 0$, quindi $\lambda_1 = -3t$. Con $t = 1$:
$$-3v_1 + 2v_2 + v_3 = 0, \qquad \text{cioè} \qquad v_3 = 3v_1 - 2v_2.$$
Controllo: $3(1, 2, 1) - 2(2, 1, 0) = (3 - 4, 6 - 2, 3 - 0) = (-1, 4, 3)$.
:::

::: esercizio medio L'equazione di uno Span
Sia $W = \Span\big((1, 0, 2), (0, 1, -1)\big) \subset \R^3$. (a) Trova un'equazione di $W$. (b) Il vettore $(1, 1, 1)$ sta in $W$? E $(1, 1, 2)$?
::: soluzione
(a) Riduco $(v_1 \mid v_2 \mid v)$ con $v = (a, b, c)$ generico:
$$\left(\begin{array}{cc|c} 1 & 0 & a \\ 0 & 1 & b \\ 2 & -1 & c \end{array}\right) \xrightarrow{R_3 \to R_3 - 2R_1} \left(\begin{array}{cc|c} 1 & 0 & a \\ 0 & 1 & b \\ 0 & -1 & c - 2a \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 + R_2} \left(\begin{array}{cc|c} 1 & 0 & a \\ 0 & 1 & b \\ 0 & 0 & c - 2a + b \end{array}\right)$$
Il sistema ha soluzione se e solo se $c - 2a + b = 0$. Quindi $W = \{(x, y, z) \mid 2x - y - z = 0\}$. Controllo sui generatori: $2 - 0 - 2 = 0$ e $0 - 1 + 1 = 0$.

(b) $(1, 1, 1)$: $2 - 1 - 1 = 0$, sta in $W$; infatti $(1, 1, 1) = (1, 0, 2) + (0, 1, -1)$. $(1, 1, 2)$: $2 - 1 - 2 = -1 \neq 0$, non sta in $W$.
:::

::: esercizio medio Base e coordinate in $\R^3$ (Foglio 2 del tutorato, esercizio 6)
Verifica che $v_1 = (1, 0, 1)$, $v_2 = (0, 1, 2)$, $v_3 = (2, 1, 0)$ sono una base di $\R^3$ e calcola il vettore delle coordinate di $v = (0, 9, -2)$ rispetto a questa base.
::: soluzione
**Base.** Tre vettori in $\R^3$: basta il determinante della matrice con i vettori in colonna. Sviluppando lungo la prima riga:
$$\det\begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 1 & 2 & 0 \end{pmatrix} = 1 \cdot (0 - 2) - 0 + 2 \cdot (0 - 1) = -2 - 2 = -4 \neq 0.$$
Sono una base.

**Coordinate.** Gauss–Jordan su $(v_1 \mid v_2 \mid v_3 \mid v)$:
$$\left(\begin{array}{ccc|c} 1 & 0 & 2 & 0 \\ 0 & 1 & 1 & 9 \\ 1 & 2 & 0 & -2 \end{array}\right) \xrightarrow{R_3 \to R_3 - R_1} \left(\begin{array}{ccc|c} 1 & 0 & 2 & 0 \\ 0 & 1 & 1 & 9 \\ 0 & 2 & -2 & -2 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 0 & 2 & 0 \\ 0 & 1 & 1 & 9 \\ 0 & 0 & -4 & -20 \end{array}\right)$$
Dal basso: $\lambda_3 = 5$; $\lambda_2 = 9 - 5 = 4$; $\lambda_1 = 0 - 2 \cdot 5 = -10$. Coordinate $(-10, 4, 5)$.

**Controllo:** $-10(1, 0, 1) + 4(0, 1, 2) + 5(2, 1, 0) = (-10 + 10,\ 4 + 5,\ -10 + 8) = (0, 9, -2)$.
:::

::: esercizio medio Coordinate di un polinomio (Foglio 2 del tutorato, esercizio 7)
Data la base $p_1 = x - 1$, $p_2 = x + 1$, $p_3 = x^2 + x$ di $\R_2[x]$, calcola il vettore delle coordinate di $p = 3x^2 + 5x - 1$.
::: soluzione
$$ap_1 + bp_2 + cp_3 = a(x - 1) + b(x + 1) + c(x^2 + x) = cx^2 + (a + b + c)x + (-a + b).$$
Uguaglio i coefficienti con quelli di $3x^2 + 5x - 1$:
1. $x^2$: $c = 3$;
2. $x$: $a + b + c = 5$, quindi $a + b = 2$;
3. termine noto: $-a + b = -1$.

Sommando le ultime due: $2b = 1$, cioè $b = \frac 12$, e $a = \frac 32$. Coordinate $\left(\frac 32, \frac 12, 3\right)$.

**Controllo:** $\frac 32(x - 1) + \frac 12(x + 1) + 3(x^2 + x) = 3x^2 + \left(\frac 32 + \frac 12 + 3\right)x + \left(-\frac 32 + \frac 12\right) = 3x^2 + 5x - 1$. Le coordinate possono essere frazioni anche quando tutti i dati sono interi.
:::

::: esercizio difficile Una base che dipende da $k$
Per quali $k \in \R$ i vettori $u_1 = (1, k, 0)$, $u_2 = (0, 1, k)$, $u_3 = (k, 0, 1)$ formano una base di $\R^3$? Per i valori esclusi, scrivi una relazione di dipendenza.
::: soluzione
Matrice con i vettori in colonna e sviluppo lungo la prima riga:
$$\det\begin{pmatrix} 1 & 0 & k \\ k & 1 & 0 \\ 0 & k & 1 \end{pmatrix} = 1 \cdot (1 - 0) - 0 + k \cdot (k^2 - 0) = 1 + k^3.$$
$1 + k^3 = (k + 1)(k^2 - k + 1)$, e $k^2 - k + 1$ non si annulla mai in $\R$ (il discriminante è $1 - 4 = -3 < 0$). Quindi $\det = 0$ solo per $k = -1$: i vettori sono una base **per ogni $k \neq -1$**.

Per $k = -1$: $u_1 = (1, -1, 0)$, $u_2 = (0, 1, -1)$, $u_3 = (-1, 0, 1)$, e $u_1 + u_2 + u_3 = (0, 0, 0)$. Una relazione è $u_1 + u_2 + u_3 = 0$.
:::

::: esercizio base Codificare un messaggio
Con il codice delle dispense, quali due numeri di controllo si aggiungono al messaggio $(0, 1, 0, -4)$? Verifica il risultato.
::: soluzione
$s(x) = 0 \cdot x^5 + x^4 + 0 \cdot x^3 - 4x^2 + ax + b = x^4 - 4x^2 + ax + b$.
- $s(1) = 1 - 4 + a + b = -3 + a + b$;
- $s(2) = 16 - 16 + 2a + b = 2a + b$.

Sistema: $a + b = 3$ e $2a + b = 0$. Togliendo la prima dalla seconda: $a = -3$; poi $b = 6$. Si trasmette $(0, 1, 0, -4, -3, 6)$.

**Controllo:** $s(x) = x^4 - 4x^2 - 3x + 6$; $s(1) = 1 - 4 - 3 + 6 = 0$; $s(2) = 16 - 16 - 6 + 6 = 0$.
:::

::: esercizio esame Come all'esame: generatori e/o indipendenti?
I polinomi $1 + x$, $x + x^2$, $1 + x^2$ e $1$ di $\R_2[x]$ sono: (a) linearmente indipendenti, ma non generatori; (b) né linearmente indipendenti né generatori; (c) la domanda è mal posta: i polinomi sono 4 e lo spazio ha dimensione 3; (d) generatori, ma non linearmente indipendenti; (e) sia generatori che linearmente indipendenti.
::: soluzione
**Passo 1.** Quattro polinomi in $\R_2[x]$, che ha dimensione 3: non possono essere indipendenti. Restano (b) e (d); (c) è sbagliata perché la domanda ha senso con qualsiasi numero di vettori.

**Passo 2.** In colonna i coefficienti rispetto a $1, x, x^2$:
$$\begin{pmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}.$$
Le prime tre colonne hanno determinante $1 \cdot (1 \cdot 1 - 0 \cdot 1) - 0 + 1 \cdot (1 \cdot 1 - 1 \cdot 0) = 2 \neq 0$: rango 3, quindi i polinomi **generano** $\R_2[x]$. Risposta **(d)**.

La relazione di dipendenza: $(1 + x) - (x + x^2) + (1 + x^2) = 2$, quindi $2 \cdot 1 = (1 + x) - (x + x^2) + (1 + x^2)$. È lo schema delle domande 2 degli appelli del 06/09/2024 e del 16/01/2025.
:::

::: esercizio esame Come all'esame: il vettore delle coordinate
I polinomi $q_1 = 1 + x$, $q_2 = x + x^2$, $q_3 = 1 + x^2$ formano una base di $\R_2[x]$. Il vettore delle coordinate di $p = 2 + 4x + 6x^2$ in questa base è: (a) $(2, 4, 6)$; (b) $(0, 4, 2)$; (c) $(4, 2, 0)$; (d) $(0, 4q_2, 2q_3)$; (e) $(1, 2, 3)$.
::: soluzione
$$aq_1 + bq_2 + cq_3 = (a + c) + (a + b)x + (b + c)x^2.$$
Uguaglio i coefficienti: $a + c = 2$, $a + b = 4$, $b + c = 6$. Sommando le tre equazioni, $2(a + b + c) = 12$, quindi $a + b + c = 6$; togliendo a turno ciascuna equazione: $b = 6 - 2 = 4$, $c = 6 - 4 = 2$, $a = 6 - 6 = 0$. Risposta **(b)**, $(0, 4, 2)$.

**Controllo:** $0 \cdot (1 + x) + 4(x + x^2) + 2(1 + x^2) = 2 + 4x + 6x^2$. La (a) sono le coordinate nella base canonica, la (d) non è un vettore di numeri, la (c) ha l'ordine sbagliato. Schema delle domande dell'appello del 08/02/2024 (domanda 3) e del 16/01/2025 (domanda 8).
:::

::: esercizio medio Tre vettori di $\R^4$
Stabilisci se $u_1 = (1, 1, 2, 3)$, $u_2 = (0, 1, -1, 0)$, $u_3 = (3, 1, 8, 9)$ sono linearmente indipendenti in $\R^4$ e se generano $\R^4$ (Foglio 2 del tutorato, esercizio 3.3).
::: soluzione
**Generano?** No, senza conti: sono 3 vettori e $\dim \R^4 = 4$.

**Indipendenti?** In colonna e Gauss:
$$\begin{pmatrix} 1 & 0 & 3 \\ 1 & 1 & 1 \\ 2 & -1 & 8 \\ 3 & 0 & 9 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & -2 \\ 0 & -1 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$
$$\xrightarrow{R_3 \to R_3 + R_2} \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
(prima mossa: $R_2 - R_1$, $R_3 - 2R_1$, $R_4 - 3R_1$). Rango 2 < 3: **dipendenti**. Dalla forma ridotta: $\lambda_3 = t$, $\lambda_2 = 2t$, $\lambda_1 = -3t$, cioè $-3u_1 + 2u_2 + u_3 = 0$, ovvero $u_3 = 3u_1 - 2u_2$. Controllo: $3(1, 1, 2, 3) - 2(0, 1, -1, 0) = (3, 1, 8, 9)$.
:::

::: esercizio difficile Le coordinate rispettano somme e multipli
Sia $v_1, \dots, v_n$ una base di $V$ e indica con $[v]$ il vettore delle coordinate di $v$. Dimostra che $[v + w] = [v] + [w]$ e $[\lambda v] = \lambda[v]$ per ogni $v, w \in V$ e $\lambda \in \K$.
::: soluzione
Siano $[v] = (\lambda_1, \dots, \lambda_n)$ e $[w] = (\mu_1, \dots, \mu_n)$, cioè $v = \sum_i \lambda_iv_i$ e $w = \sum_i \mu_iv_i$.

1. Sommando e raccogliendo: $v + w = (\lambda_1 + \mu_1)v_1 + \cdots + (\lambda_n + \mu_n)v_n$. Questa è **una** scrittura di $v + w$ come combinazione della base; per la Proposizione 13.4 è **l'unica**, quindi le coordinate di $v + w$ sono $(\lambda_1 + \mu_1, \dots, \lambda_n + \mu_n) = [v] + [w]$.
2. Allo stesso modo $\lambda v = (\lambda\lambda_1)v_1 + \cdots + (\lambda\lambda_n)v_n$, e per l'unicità $[\lambda v] = \lambda[v]$.

L'unicità è il punto chiave: senza la Proposizione 13.4 si saprebbe solo che *una* scrittura di $v + w$ ha quei coefficienti. Nel linguaggio della lezione L14, la funzione $v \mapsto [v]$ è un'applicazione lineare $V \to \K^n$.
:::

## Domande di ripasso

::: domanda Come si trasforma la domanda «$v_1, \dots, v_k$ sono indipendenti?» in un sistema lineare?
L'equazione $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$ è un sistema omogeneo nelle incognite $\lambda_j$, con matrice dei coefficienti $A = (v_1 \mid \cdots \mid v_k)$ (i vettori in colonna). I vettori sono indipendenti se e solo se l'unica soluzione è quella nulla.
:::

::: domanda Qual è il criterio con il rango per l'indipendenza? E quando si può usare il determinante?
Indipendenti se e solo se $\rk(A) = k$, il numero di vettori. Se i vettori sono $n$ in $\K^n$, $A$ è quadrata e sono indipendenti se e solo se $\det A \neq 0$.
:::

::: domanda Come si trova una relazione di dipendenza tra vettori dipendenti?
Si risolve il sistema omogeneo con Gauss–Jordan: ogni soluzione non nulla $(\lambda_1, \dots, \lambda_k)$ dà la relazione $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$. Nell'Esempio 13.1: $-v_1 + v_2 + v_3 = 0$.
:::

::: domanda Quando $v_1, \dots, v_k$ generano $\K^m$?
Quando il sistema $\lambda_1v_1 + \cdots + \lambda_kv_k = v$ ha soluzione per ogni $v \in \K^m$, cioè quando $\rk(v_1 \mid \cdots \mid v_k) = m$.
:::

::: domanda Come si trova un'equazione di $\Span(v_1, \dots, v_k)$?
Si riduce a scalini $(v_1 \mid \cdots \mid v_k \mid v)$ con $v = (a, b, c, \dots)$ generico. Ogni riga che a sinistra si annulla dà una condizione lineare su $a, b, c, \dots$: sono le equazioni dello Span.
:::

::: domanda Perché più di $m$ vettori di $\K^m$ sono sempre dipendenti, e meno di $m$ non generano mai?
Perché il rango di una matrice con $m$ righe è al massimo $m$: con $k > m$ vettori si ha $\rk \le m < k$. E lo Span di $k$ vettori ha dimensione al massimo $k$: con $k < m$ non può essere tutto $\K^m$.
:::

::: domanda Che cosa dice il Teorema 7.12 e perché è comodo?
Se $\dim V = n$, $n$ vettori di $V$ sono una base non appena sono indipendenti oppure non appena generano: l'altra condizione segue da sola. Così basta un solo controllo, per esempio $\det \neq 0$.
:::

::: domanda Enuncia e dimostra la Proposizione 13.4.
Rispetto a una base $v_1, \dots, v_n$ ogni vettore si scrive in modo unico come combinazione. Esiste una scrittura perché i $v_i$ generano; se ce ne fossero due, sottraendole si avrebbe $\sum (\lambda_i - \mu_i)v_i = 0$ e per l'indipendenza $\lambda_i = \mu_i$ per ogni $i$.
:::

::: domanda Che cosa sono le coordinate di un vettore rispetto a una base?
Sono i coefficienti $\lambda_1, \dots, \lambda_n$ dell'unica scrittura $v = \lambda_1v_1 + \cdots + \lambda_nv_n$, raccolti nel vettore colonna $(\lambda_1, \dots, \lambda_n)$. Dipendono dalla base e dall'ordine dei suoi vettori.
:::

::: domanda Come si calcolano le coordinate in pratica?
In $\K^n$: si risolve $(v_1 \mid \cdots \mid v_n \mid v)$ con Gauss–Jordan, oppure si calcola $A^{-1}v$. Con i polinomi: si uguagliano i coefficienti delle potenze di $x$ in $\lambda_1p_1 + \cdots + \lambda_np_n = p$. Alla fine si ricompone per controllare.
:::

::: domanda Come fa il codice delle dispense a scoprire un errore, e come lo corregge?
Il messaggio viene completato con due numeri scelti (risolvendo un sistema 2 × 2) in modo che il polinomio dei sei coefficienti si annulli in $1$ e in $2$. Se all'arrivo $s(1)$ o $s(2)$ non è zero c'è un errore. Per correggerne uno si mette un'incognita a turno in ogni posizione e si impone di nuovo $s(1) = s(2) = 0$: solo la posizione sbagliata dà un sistema compatibile, e la sua soluzione è il valore giusto.
:::

## Glossario

```glossario
Vettori in colonna | La matrice $A = (v_1 \mid \cdots \mid v_k)$ che ha i vettori dati come colonne: la base di tutti i conti della lezione.
Linearmente dipendenti | Esiste una combinazione $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$ con coefficienti non tutti nulli.
Linearmente indipendenti | L'unica combinazione nulla è quella con tutti i coefficienti zero; per vettori di $\K^m$: $\rk(A) = k$.
Relazione di dipendenza | Una soluzione non nulla del sistema omogeneo $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$.
Generatori | Vettori il cui Span è tutto lo spazio; in $\K^m$: $\rk(A) = m$.
Equazioni dello Span | Le condizioni sul vettore generico $(a, b, c, \dots)$ che escono da Gauss su $(A \mid v)$; descrivono lo Span.
Base | Sequenza di vettori indipendenti che generano; con $n$ vettori in $\K^n$: $\det A \neq 0$.
Teorema 7.12 | Se $\dim V = n$, $n$ vettori indipendenti (oppure generatori) sono già una base.
Coordinate | I coefficienti dell'unica scrittura di un vettore come combinazione dei vettori di una base.
Vettore colonna di coordinate | La colonna $(\lambda_1, \dots, \lambda_n)$ delle coordinate; sta in $\K^n$.
Base ordinata | Base con un ordine fissato dei vettori; l'ordine decide l'ordine delle coordinate.
Informazione ridondante | Numeri aggiunti a un messaggio, calcolati dal messaggio stesso, per scoprire o correggere errori.
Condizioni di controllo | Nel codice delle dispense: $s(1) = 0$ e $s(2) = 0$ per il polinomio dei coefficienti trasmessi.
Codici di Reed–Solomon | Codici correttori usati nei QR code e nelle memorie digitali: polinomi su campi finiti.
```

## Checklist

```checklist
- So trasformare «indipendenti?» in un sistema omogeneo con i vettori in colonna.
- So decidere l'indipendenza con il rango ($\rk = k$) e, per $n$ vettori in $\K^n$, con il determinante.
- So trovare una relazione di dipendenza risolvendo il sistema omogeneo.
- So decidere se dei vettori generano $\K^m$ ($\rk = m$) e trovare le equazioni di uno Span.
- So dire senza conti che più di $m$ vettori di $\K^m$ sono dipendenti e meno di $m$ non generano.
- So usare il Teorema 7.12 per controllare una base con un solo criterio.
- So dimostrare che le coordinate rispetto a una base sono uniche (Proposizione 13.4).
- So calcolare le coordinate in $\K^n$ (con Gauss–Jordan o con l'inversa) e con i polinomi (uguagliando i coefficienti).
- So codificare un messaggio con il codice delle dispense e correggere un errore.
- So rispondere ai quiz «generatori e/o indipendenti?» e «vettore delle coordinate» senza sbagliare formato e ordine.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 13 «Sistemi Lineari III», pp. 62–67: le sezioni 13.A–13.E sono seguite in ordine, con la pagina indicata accanto a ogni titolo; proposizione, definizione ed esempi mantengono la loro numerazione (Esempi 13.1, 13.2, 13.3 e 13.6, Proposizione 13.4, Definizione 13.5, Esercizio 13.7), compreso il riquadro «Collegamento con l'informatica» sui codici di correzione degli errori. I richiami di dipendenza lineare e di base riprendono le Definizioni 7.1 e 7.7 e il Teorema 7.12 della lezione 7.
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §2.3 «Dimensione» (pp. 60–75: indipendenza, basi, coordinate con l'Esempio 2.3.12, algoritmo di estrazione) e §3.2 (rango e Rouché–Capelli), più l'Esempio 4.1.17 sulla mappa delle coordinate.
- **Appelli d'esame** di Algebra lineare 2023/24–2025/26 con soluzioni ufficiali (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): riportate le domande 3 del 08/02/2024, 2 del 06/09/2024 e 8 del 16/01/2025; citate le domande sul rango (16/01/2025, 07/02/2025, 05/02/2026), la domanda 2 del 16/01/2025 e del 07/09/2026, la domanda 6 del 05/02/2026 e il problema 11 del 07/09/2026. Le soluzioni qui sono scritte da capo. Gli esercizi 3.3, 6 e 7 del Foglio 2 del tutorato (Moodle MDAG2) sono svolti negli esercizi.
- Le parti **«Oltre le dispense»** (la relazione di dipendenza esplicita, le equazioni dello Span, l'estrazione di una base con i pivot, le tabelle sul numero di vettori, la mappa delle coordinate, gli esercizi non numerati) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
