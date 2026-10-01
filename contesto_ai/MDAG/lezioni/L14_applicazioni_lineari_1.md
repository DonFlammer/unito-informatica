---
corso: MDAG
modulo: AG
lezione: L14
titolo: Applicazioni lineari I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 · Algebra lineare e Geometria · Canali A, B e C · Lezione L14
descrizione: >-
  Appunti della lezione L14 di Algebra lineare e Geometria (MDAG, parte 2): applicazioni lineari, esempi e non
  esempi, l'applicazione associata a una matrice, nucleo e immagine, iniettività e suriettività, teorema della
  dimensione, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Le funzioni che rispettano somme e multipli: che cosa sono, come si riconoscono in un attimo, perché ogni matrice
  $A$ ne definisce una ($x \mapsto Ax$). Poi i due sottospazi che raccontano tutto di un'applicazione lineare, il
  nucleo e l'immagine, e il teorema della dimensione, che lega le loro dimensioni ed è, per le matrici, il teorema
  di Rouché–Capelli visto da un'altra parte.
materiale: dispense
scheda:
  Dispense: lezione 14 · pp. 68–73
  Libro: Martelli, §4.1 e §4.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 120–150 minuti
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 14 «Applicazioni lineari I»; B. Martelli, Geometria e algebra lineare, §4.1 e §4.2
file_en: L14_linear_maps_1.html
appunti_html: appunti/MDAG/L14_applicazioni_lineari_1.html
genera_html: true
---

## In breve

- Un'**applicazione lineare** $f: V \to W$ tra due spazi vettoriali sullo stesso campo rispetta somme e multipli: $f(v + w) = f(v) + f(w)$ e $f(\lambda v) = \lambda f(v)$.
- Conseguenze: $f(0) = 0$, e $f$ manda ogni combinazione lineare nella combinazione lineare delle immagini, **con gli stessi coefficienti**.
- Test rapido: se $f(0) \neq 0$ la funzione non è lineare; quadrati, prodotti tra incognite e costanti aggiunte sono i segnali tipici di una funzione non lineare.
- Ogni matrice $A$ di taglia $m \times n$ definisce l'applicazione lineare $L_A: \K^n \to \K^m$, $L_A(x) = Ax$. Le colonne di $A$ sono le immagini dei vettori $e_1, \dots, e_n$ della base canonica.
- Il **nucleo** $\Ker f$ (i vettori mandati in $0$) è un sottospazio del dominio; l'**immagine** $\Imm f$ (i vettori raggiunti) è un sottospazio del codominio.
- $f$ è **iniettiva** se e solo se $\Ker f = \{0\}$; è **suriettiva** se e solo se $\Imm f = W$.
- Per le matrici: $\Ker L_A$ sono le soluzioni di $Ax = 0$, $\Imm L_A$ è lo Span delle colonne, e $\rk(A) = \dim \Imm L_A$.
- **Teorema della dimensione**: $\dim \Ker f + \dim \Imm f = \dim V$. Per $L_A$ è il teorema di Rouché–Capelli.
- Conseguenze da quiz: $\dim \Imm f \le \dim V$; se $\dim V > \dim W$, $f$ non può essere iniettiva; se $\dim V < \dim W$, non può essere suriettiva.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Che cos'è un'applicazione lineare (p. 68)

Parti da tre funzioni da $\R$ in $\R$ e fai due prove: (1) conta se sommi prima di applicare la funzione o dopo? (2) conta se moltiplichi per un numero prima o dopo?

| Funzione | $f(2 + 5)$ | $f(2) + f(5)$ | $f(4 \cdot 2)$ | $4 \cdot f(2)$ | Rispetta somme e multipli? |
|---|--:|--:|--:|--:|---|
| $f(x) = 3x$ | $21$ | $6 + 15 = 21$ | $24$ | $24$ | sì |
| $g(x) = 2x + 1$ | $15$ | $5 + 11 = 16$ | $17$ | $20$ | no |
| $h(x) = x^2$ | $49$ | $4 + 25 = 29$ | $64$ | $16$ | no |

Solo $f(x) = 3x$ passa tutte e due le prove, e per qualsiasi numero: $f(x + x') = 3x + 3x' = f(x) + f(x')$ e $f(\lambda x) = 3\lambda x = \lambda f(x)$. Il suo grafico è una retta **per l'origine**. Anche il grafico di $g$ è una retta, ma non passa per l'origine, e questo basta a rovinare tutto.

```grafico
titolo: $f(x) = 3x$ è lineare; $g(x) = 2x + 1$ no: il grafico è una retta, ma non passa per l'origine
proporzioni: libere
x: -2 2
y: -4 5
retta: 0 0 1.2 3.6 | accento | $f(x) = 3x$ | o
retta: 0 1 -1.2 -1.4 | blu | $g(x) = 2x + 1$ | se
punto: 0 0 | accento
punto: 0 1 | blu
```

Le funzioni che rispettano somme e multipli si chiamano **lineari**, e hanno senso tra spazi vettoriali qualsiasi: vettori, polinomi, matrici.

> [!DEF] 14.1 · Applicazione lineare
> Siano $V$ e $W$ due spazi vettoriali sullo stesso campo $\K$. Un'**applicazione lineare** è una funzione
> $$f: V \longrightarrow W$$
> tale che
> 1. $f(v + w) = f(v) + f(w)$ per ogni $v, w \in V$;
> 2. $f(\lambda v) = \lambda f(v)$ per ogni $v \in V$ e $\lambda \in \K$.

Pezzo per pezzo:

- $f: V \to W$ si legge «$f$ va da $V$ in $W$»: a ogni vettore $v$ del **dominio** $V$ associa un vettore $f(v)$ del **codominio** $W$. $f(v)$ si chiama l'**immagine** di $v$.
- **Stesso campo**: servono gli stessi scalari $\lambda$ da tutte e due le parti, altrimenti la condizione (2) non avrebbe senso.
- Condizione (1): «sommare e poi applicare $f$» dà lo stesso risultato di «applicare $f$ e poi sommare». A sinistra la somma è quella di $V$, a destra quella di $W$.
- Condizione (2): lo stesso con i multipli.
- In matematica **funzione**, **applicazione** e **mappa** sono sinonimi; «applicazione» si usa soprattutto per quelle lineari.

### Due conseguenze della definizione

**Lo zero va nello zero.** Dalla condizione (2) con $\lambda = 0$:

$$f(0) = f(0 \cdot 0) = 0 \cdot f(0) = 0.$$

Attenzione ai tre zeri diversi che compaiono qui: il vettore nullo di $V$ (dentro $f$), lo scalare $0 \in \K$ (il numero che moltiplica) e il vettore nullo di $W$ (il risultato). In parole: un'applicazione lineare manda l'origine di $V$ nell'origine di $W$.

**Le combinazioni lineari vanno in combinazioni lineari.** Se $v = \lambda_1v_1 + \cdots + \lambda_kv_k$, usando $k - 1$ volte la condizione (1) e poi la (2) su ogni pezzo:

$$f(v) = f(\lambda_1v_1 + \cdots + \lambda_kv_k) = f(\lambda_1v_1) + \cdots + f(\lambda_kv_k) = \lambda_1f(v_1) + \cdots + \lambda_kf(v_k).$$

$f$ manda una combinazione lineare dei vettori $v_1, \dots, v_k$ nella combinazione lineare **con gli stessi coefficienti** delle loro immagini $f(v_1), \dots, f(v_k)$. Questa è la proprietà che userai di più: se conosci $f$ su pochi vettori, la conosci su tutte le loro combinazioni.

> [!METODO] È lineare o no?
> 1. **Test dello zero**: calcola $f(0)$. Se non è il vettore nullo, $f$ **non** è lineare (Esempio 14.3).
> 2. **Guarda la formula**: quadrati, prodotti tra coordinate, valori assoluti, radici, seni, costanti aggiunte sono segnali di non linearità.
> 3. Se sospetti che **non** sia lineare, basta **un controesempio con i numeri**: due vettori per cui $f(v + w) \neq f(v) + f(w)$, oppure un $v$ e un $\lambda$ per cui $f(\lambda v) \neq \lambda f(v)$ (Esempio 14.4).
> 4. Se sembra lineare, dimostra le due condizioni **con le lettere**, per vettori generici (Esempio 14.2). Scorciatoia: se ogni coordinata di $f(v)$ è una combinazione delle coordinate di $v$ con coefficienti fissi, $f$ è della forma $L_A$ ed è lineare (Esempio 14.6).

> [!TRAPPOLA] $f(0) = 0$ non basta
> Il test dello zero serve solo a **escludere**. Una funzione può mandare $0$ in $0$ e non essere lineare: nell'Esempio 14.4 $T(0) = 0$, eppure $T$ non rispetta le somme.

## Esempi e non esempi (pp. 68–69)

Gli esempi delle dispense sono tutti con $\K = \R$ e $V = W = \R^2$.

> [!ESEMPIO] 14.2 · Una funzione lineare
> $T: \R^2 \to \R^2$ definita da $T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2a + b \\ a + 3b \end{pmatrix}$. Per $v = \begin{pmatrix} a_1 \\ b_1 \end{pmatrix}$, $w = \begin{pmatrix} a_2 \\ b_2 \end{pmatrix}$ e $\lambda \in \R$:
> $$T(v + w) = T\begin{pmatrix} a_1 + a_2 \\ b_1 + b_2 \end{pmatrix} = \begin{pmatrix} 2(a_1 + a_2) + (b_1 + b_2) \\ (a_1 + a_2) + 3(b_1 + b_2) \end{pmatrix} = \begin{pmatrix} 2a_1 + b_1 \\ a_1 + 3b_1 \end{pmatrix} + \begin{pmatrix} 2a_2 + b_2 \\ a_2 + 3b_2 \end{pmatrix} = T(v) + T(w)$$
> e
> $$T(\lambda v) = T\begin{pmatrix} \lambda a_1 \\ \lambda b_1 \end{pmatrix} = \begin{pmatrix} 2\lambda a_1 + \lambda b_1 \\ \lambda a_1 + 3\lambda b_1 \end{pmatrix} = \lambda\begin{pmatrix} 2a_1 + b_1 \\ a_1 + 3b_1 \end{pmatrix} = \lambda T(v).$$
> Allora $T$ è lineare.

Il passaggio chiave del primo conto è **ridistribuire**: $2(a_1 + a_2) + (b_1 + b_2) = (2a_1 + b_1) + (2a_2 + b_2)$, e lo stesso per la seconda coordinata. Nel secondo si raccoglie $\lambda$.

> [!ESEMPIO] 14.3 · Una traslazione non è lineare
> $T: \R^2 \to \R^2$ definita da $T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} a + 2 \\ a + b - 1 \end{pmatrix}$. Abbiamo $T(0) = \begin{pmatrix} 0 + 2 \\ 0 + 0 - 1 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix} \neq 0$, allora $T$ non è lineare.

> [!ESEMPIO] 14.4 · Un quadrato rovina la somma
> $T: \R^2 \to \R^2$ definita da $T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} a^2 \\ a + b \end{pmatrix}$. Sia per esempio $v = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ e $w = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$. Abbiamo
> $$T(v + w) = T\begin{pmatrix} 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 16 \\ 5 \end{pmatrix}, \qquad \text{ma} \qquad T(v) + T(w) = \begin{pmatrix} 4 \\ 3 \end{pmatrix} + \begin{pmatrix} 4 \\ 2 \end{pmatrix} = \begin{pmatrix} 8 \\ 5 \end{pmatrix}.$$
> Allora $T$ non è lineare. Nota che qui $T(0) = (0, 0)$: il test dello zero non bastava.

Le due applicazioni lineari del prossimo esempio esistono per **ogni** spazio vettoriale.

> [!ESEMPIO] 14.5 · La funzione nulla e l'identità
> Dati due spazi vettoriali $V$, $W$ qualsiasi su $\K$, la **funzione nulla** è la funzione $f: V \to W$ costantemente nulla, cioè tale che $f(v) = 0$ per ogni $v$. La funzione nulla è lineare.
>
> Dato uno spazio vettoriale $V$ qualsiasi, la **funzione identità** è la funzione $\id: V \to V$ che manda ogni vettore in se stesso, cioè $\id(v) = v$ per ogni $v \in V$. Anche la funzione identità è lineare.

Le verifiche sono una riga ciascuna, e conviene scriverle:

- funzione nulla: $f(v + w) = 0 = 0 + 0 = f(v) + f(w)$ e $f(\lambda v) = 0 = \lambda \cdot 0 = \lambda f(v)$;
- identità: $\id(v + w) = v + w = \id(v) + \id(w)$ e $\id(\lambda v) = \lambda v = \lambda\,\id(v)$.

Altri esempi, da $\R^2$ in $\R^2$, per allenare l'occhio:

| $T(x, y)$ | Lineare? | Perché |
|---|---|---|
| $(x - y,\ 2y)$ | sì | ogni coordinata è una combinazione di $x$ e $y$ |
| $(0,\ 5x)$ | sì | anche i coefficienti $0$ vanno bene |
| $(x + 1,\ y)$ | no | $T(0, 0) = (1, 0) \neq 0$ |
| $(xy,\ x)$ | no | $T(2, 2) = (4, 2)$ ma $2\,T(1, 1) = (2, 2)$ |
| $(\lvert x \rvert,\ y)$ | no | $T(-1, 0) = (1, 0)$ ma $-T(1, 0) = (-1, 0)$ |
| $(\sin x,\ y)$ | no | $T(\pi, 0) = (0, 0)$ ma $2\,T\big(\frac\pi 2, 0\big) = (2, 0)$ |

## L'applicazione associata a una matrice (pp. 69–70)

L'esempio più importante del corso: ogni matrice è un'applicazione lineare.

> [!ESEMPIO] 14.6 · $L_A$
> Prendiamo una matrice $A = (a_{ij})$ di taglia $m \times n$ e definiamo
> $$L_A: \K^n \longrightarrow \K^m$$
> usando il prodotto fra matrici e vettori, $L_A(x) = Ax$. Nel dettaglio:
> $$L_A(x) = Ax = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix} \cdot \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} a_{11}x_1 + \cdots + a_{1n}x_n \\ \vdots \\ a_{m1}x_1 + \cdots + a_{mn}x_n \end{pmatrix}.$$
> La lettera $L$ sta per *left*, perché moltiplichiamo a sinistra per $A$. La linearità di $L_A$ discende dalle proprietà delle matrici:
> 1. $L_A(x + x') = A(x + x') = Ax + Ax' = L_A(x) + L_A(x')$;
> 2. $L_A(\lambda x) = A(\lambda x) = \lambda Ax = \lambda L_A(x)$.

Pezzo per pezzo:

- **Le taglie.** $A$ ha $m$ righe e $n$ colonne. Il vettore $x$ deve avere $n$ componenti (tante quante le **colonne**), e $Ax$ ne ha $m$ (tante quante le **righe**). Quindi $L_A$ va da $\K^n$ (dominio) a $\K^m$ (codominio): attenzione all'ordine, $n$ prima di $m$.
- **Le due proprietà usate** sono quelle del prodotto di matrici della lezione L08 (Proposizione 8.11): la distributività $A(B + C) = AB + AC$ e $\lambda(AB) = A(\lambda B)$, con $B = x$ e $C = x'$ matrici colonna.
- **Leggere $Ax$ per colonne.** Raccogliendo le $x_j$, il vettore $Ax$ è
  $$Ax = x_1A^1 + x_2A^2 + \cdots + x_nA^n,$$
  la combinazione delle colonne di $A$ con coefficienti $x_1, \dots, x_n$: è la stessa lettura del sistema $Ax = b$ della lezione L12.

> [!ESEMPIO] 14.7 · La matrice dell'Esempio 14.2
> Se nell'esempio precedente scegliamo $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$, otteniamo la funzione $L_A: \R^2 \to \R^2$ data da
> $$L_A\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2a + b \\ a + 3b \end{pmatrix},$$
> cioè esattamente l'applicazione lineare dell'Esempio 14.2.

### Le colonne sono le immagini della base canonica

Calcola $L_A$ sui vettori della base canonica $e_1 = (1, 0)$ ed $e_2 = (0, 1)$, con la matrice dell'Esempio 14.7:

$$L_A(e_1) = \begin{pmatrix} 2 \cdot 1 + 1 \cdot 0 \\ 1 \cdot 1 + 3 \cdot 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix} = A^1,$$

$$L_A(e_2) = \begin{pmatrix} 2 \cdot 0 + 1 \cdot 1 \\ 1 \cdot 0 + 3 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 3 \end{pmatrix} = A^2.$$

In generale $L_A(e_i) = A^i$, la $i$-esima colonna (le dispense lo usano a p. 72). E allora, per linearità, $L_A$ è determinata dalle sue colonne:

$$L_A\begin{pmatrix} a \\ b \end{pmatrix} = L_A(a\,e_1 + b\,e_2) = a\,L_A(e_1) + b\,L_A(e_2) = a\begin{pmatrix} 2 \\ 1 \end{pmatrix} + b\begin{pmatrix} 1 \\ 3 \end{pmatrix}.$$

```widget matrice
titolo: La matrice degli Esempi 14.2 e 14.7 come trasformazione del piano
a: 2 1; 1 3
x: 1 1
raggio: 5
```

Nello strumento la griglia a quadretti del piano viene trasformata da $L_A$ in una griglia di parallelogrammi: le rette restano rette, l'origine resta ferma, le righe parallele ed equidistanti restano parallele ed equidistanti. Le frecce $Ae_1$ e $Ae_2$ sono le due colonne, $(2, 1)$ e $(1, 3)$. Trascina il vettore $x$ e guarda dove finisce $Ax$; prova anche a cambiare la matrice in `1 2; 2 4`: tutto il piano viene schiacciato su una retta (lo ritrovi nella sezione sul nucleo).

> [!OLTRE] ogni applicazione lineare da $\K^n$ a $\K^m$ è un $L_A$
> Vale anche il contrario (Martelli, Proposizione 4.1.19): se $T: \K^n \to \K^m$ è lineare, esiste una sola matrice $A$ con $T = L_A$, ed è la matrice che ha **per colonne** $T(e_1), \dots, T(e_n)$. Per esempio, per $T(x, y, z) = (x - z,\ y + 2z)$: $T(e_1) = (1, 0)$, $T(e_2) = (0, 1)$, $T(e_3) = (-1, 2)$, quindi $A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}$. In pratica: **le righe di $A$ sono i coefficienti delle coordinate di $T$**. È la «matrice associata a $T$ rispetto alla base canonica» che gli appelli chiedono spesso (lezione L15).

> [!NOTA] Collegamento con l'informatica: reti neurali (p. 70)
> Una delle operazioni fondamentali di una rete neurale è la moltiplicazione matrice–vettore. Un singolo strato usa tipicamente una trasformazione della forma $x \mapsto Ax + b$, dove i numeri di $A$ e di $b$ sono parametri che vengono modificati durante l'addestramento. La parte $x \mapsto Ax$ è precisamente l'applicazione lineare $L_A$; se $b \neq 0$, la funzione $x \mapsto Ax + b$ **non** è lineare ma **affine** (manda $0$ in $b \neq 0$, come nell'Esempio 14.3). Gli strati di una rete alternano trasformazioni di questo tipo con operazioni non lineari: per questo matrici, vettori e applicazioni lineari sono il linguaggio di base di molti modelli di *machine learning*.

### La traccia

> [!ESEMPIO] 14.8 · La traccia è lineare
> $\tr: M(n, \K) \to \K$ è un'applicazione lineare. Per $A = (a_{ij})$ e $B = (b_{ij})$ si ha $A + B = (a_{ij} + b_{ij})$, quindi sulla diagonale di $A + B$ ci sono i numeri $a_{11} + b_{11}, \dots, a_{nn} + b_{nn}$. Concludiamo
> $$\tr(A + B) = (a_{11} + b_{11}) + \cdots + (a_{nn} + b_{nn}) = \tr(A) + \tr(B).$$
> Analogamente $\tr(\lambda A) = \lambda a_{11} + \cdots + \lambda a_{nn} = \lambda \cdot \tr(A)$.

La traccia $\tr A$ è la somma degli elementi sulla diagonale (Definizione 8.12, lezione L08; in questo esempio le dispense la scrivono $\operatorname{Tr}$). Qui il dominio è lo spazio delle matrici $M(n, \K)$ e il codominio è il campo $\K$, che è uno spazio vettoriale di dimensione 1. Con i numeri: per $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 5 & 0 \\ 1 & -2 \end{pmatrix}$ si ha $\tr(A + B) = \tr\begin{pmatrix} 6 & 2 \\ 4 & 2 \end{pmatrix} = 8 = 5 + 3 = \tr A + \tr B$, e $\tr(3A) = 3 + 12 = 15 = 3 \tr A$.

> [!TRAPPOLA] Il determinante non è lineare
> Nei quiz compaiono spesso funzioni tra spazi di matrici o di polinomi. Il **determinante** non è lineare: con $A = B = I_2$, $\det(A + B) = \det(2I_2) = 4$ ma $\det A + \det B = 2$; e in generale $\det(\lambda A) = \lambda^n \det A$, non $\lambda \det A$. Sono invece lineari la traccia, la **trasposizione** $A \mapsto {}^tA$ (perché ${}^t(A + B) = {}^tA + {}^tB$ e ${}^t(\lambda A) = \lambda\,{}^tA$), la **valutazione** $p \mapsto p(x_0)$ di un polinomio in un punto fissato e la **derivata** $p \mapsto p'$ (Martelli, Esempi 4.1.10, 4.1.13 e 4.1.15).

## Nucleo e immagine (pp. 70–71)

Prendi $T: \R^2 \to \R^2$, $T(x, y) = (x + y,\ 2x + 2y)$, e fai due domande.

- **Quali vettori finiscono in zero?** $T(x, y) = (0, 0)$ quando $x + y = 0$: sono i vettori $(t, -t)$, la retta $\Span\big((1, -1)\big)$.
- **Quali vettori si raggiungono?** $T(x, y) = (x + y)\,(1, 2)$: sempre multipli di $(1, 2)$, e tutti i multipli si raggiungono (per esempio $T(s, 0) = s(1, 2)$). È la retta $\Span\big((1, 2)\big)$.

La prima retta vive nel **dominio**, la seconda nel **codominio** (qui sono tutti e due $\R^2$, per questo si possono disegnare insieme).

```grafico
titolo: Per $T(x, y) = (x + y,\ 2x + 2y)$ il nucleo (blu) è la retta $y = -x$ del dominio, l'immagine (ambra) è la retta $y = 2x$ del codominio
x: -3 3
y: -3 3
retta: 0 0 -1.5 1.5 | blu | spesso | $\Ker T$ | no
retta: 0 0 1.2 2.4 | ambra | spesso | $\Imm T$ | e
punto: 1 -1 | blu
punto: 1 2 | ambra
```

> [!DEF] 14.9 · Nucleo e immagine
> Sia $f: V \to W$ un'applicazione lineare. Il **nucleo** di $f$ è il sottoinsieme di $V$ definito da
> $$\Ker f = \{v \in V \mid f(v) = 0\}.$$
> L'**immagine** di $f$ è il sottoinsieme di $W$ definito da
> $$\Imm f = \{w \in W \mid \exists\, v \in V \text{ con } f(v) = w\}.$$

Pezzo per pezzo:

- $\Ker$ viene dall'inglese *kernel*, «nucleo»; $\Imm$ si legge «immagine».
- Il nucleo sta nel **dominio** $V$: sono gli input che $f$ «schiaccia» sullo zero.
- L'immagine sta nel **codominio** $W$: sono gli output che $f$ produce davvero. Il simbolo $\exists$ si legge «esiste» (lezione L01): $w$ sta nell'immagine se **esiste almeno un** $v$ che va in $w$.
- Lo zero sta sempre in tutti e due, perché $f(0) = 0$.

> [!PROP] 14.10
> Il nucleo $\Ker f$ è un sottospazio vettoriale di $V$, l'immagine $\Imm f$ è un sottospazio di $W$.

Bisogna verificare i tre assiomi di sottospazio (Definizione 6.2) per tutti e due.

**Nucleo.**
1. $0 \in \Ker f$, perché $f(0) = 0$.
2. Se $v, w \in \Ker f$ allora $v + w \in \Ker f$: infatti $f(v + w) = f(v) + f(w) = 0 + 0 = 0$.
3. Se $v \in \Ker f$ e $\lambda \in \K$ allora $\lambda v \in \Ker f$: infatti $f(\lambda v) = \lambda f(v) = \lambda \cdot 0 = 0$.

**Immagine.**
1. $0 \in \Imm f$, perché $f(0) = 0$: lo zero di $W$ è raggiunto dallo zero di $V$.
2. Se $f(v)$ e $f(v')$ stanno in $\Imm f$, anche la loro somma: $f(v) + f(v') = f(v + v')$ è raggiunta da $v + v'$.
3. Se $f(v) \in \Imm f$ e $\lambda \in \K$, anche $\lambda f(v)$: infatti $\lambda f(v) = f(\lambda v)$ è raggiunta da $\lambda v$. $\square$

### Iniettiva, suriettiva

Due parole della teoria delle funzioni (le vedi anche in Matematica Discreta):

- $f$ è **iniettiva** se manda vettori diversi in vettori diversi: $v \neq v' \Rightarrow f(v) \neq f(v')$. Nessun output viene «raggiunto due volte».
- $f$ è **suriettiva** se ogni vettore del codominio è raggiunto: per ogni $w \in W$ esiste $v$ con $f(v) = w$.

Esempi: $T(x, y) = (x, y, 0)$ da $\R^2$ in $\R^3$ è iniettiva ma non suriettiva (non raggiunge $(0, 0, 1)$); $P(x, y, z) = (x, y)$ da $\R^3$ in $\R^2$ è suriettiva ma non iniettiva ($P(0, 0, 1) = P(0, 0, 2)$).

> [!PROP] 14.11
> La funzione $f: V \to W$ è iniettiva $\Longleftrightarrow \Ker f = \{0\}$. La funzione $f$ è suriettiva $\Longleftrightarrow \Imm f = W$.

**Dimostrazione.** Per la suriettività non c'è niente da dimostrare: «ogni $w \in W$ è raggiunto» vuol dire esattamente $\Imm f = W$. Per l'iniettività servono due frecce.

1. ($\Rightarrow$) Sappiamo già che $f(0) = 0$. Se $f$ è iniettiva, un vettore $v \neq 0$ non può andare dove va $0$, quindi $f(v) \neq 0$. Allora l'unico vettore con immagine nulla è $0$: $\Ker f = \{0\}$.
2. ($\Leftarrow$) Siano $v, v' \in V$ diversi. Allora $v - v' \neq 0$ e, siccome $\Ker f = \{0\}$, $f(v - v') \neq 0$. Per linearità $f(v) - f(v') = f(v - v') \neq 0$, quindi $f(v) \neq f(v')$. $\square$

Il vantaggio è enorme: per l'iniettività non bisogna confrontare tutte le coppie di vettori, basta risolvere $f(v) = 0$. Nell'esempio iniziale $\Ker T = \Span\big((1, -1)\big) \neq \{0\}$, quindi $T$ non è iniettiva: infatti $T(1, 0) = T(0, 1) = (1, 2)$. E non è suriettiva, perché $(1, 0)$ non è multiplo di $(1, 2)$.

> [!NOTA] Collegamento con l'informatica: il nucleo come insieme di direzioni ammissibili (p. 71)
> Supponi che un vettore $x$ debba soddisfare un vincolo lineare $Ax = b$. Se vuoi spostarti da $x$ nella direzione $y$ senza violare il vincolo, consideri i punti $x + ty$. Siccome $A(x + ty) = Ax + tAy = b + tAy$, si ha $A(x + ty) = b$ per ogni $t$ precisamente quando $Ay = 0$, cioè quando $y \in \Ker A$ (il nucleo di $L_A$). Il nucleo descrive tutte le direzioni lungo cui ci si può muovere mantenendo i vincoli di uguaglianza, un'idea usata direttamente negli algoritmi di ottimizzazione lineare.
>
> Con i numeri: il vincolo $x_1 + x_2 + x_3 = 3$ è $Ax = b$ con $A = (1\ 1\ 1)$. Da $x = (1, 1, 1)$, muovendosi lungo $y = (1, -1, 0) \in \Ker A$ si resta sul vincolo: $(1 + t) + (1 - t) + 1 = 3$ per ogni $t$. È la Proposizione 12.3 vista con gli occhi del nucleo: le soluzioni di $Ax = b$ sono $x + \Ker A$.

### L'immagine è generata dalle immagini dei generatori

> [!OSSERVAZIONE] Generatori dell'immagine (p. 72)
> Se $v_1, \dots, v_n$ sono generatori di $V$, allora $f(v_1), \dots, f(v_n)$ sono generatori di $\Imm f$. In particolare, se $A$ è una matrice $m \times n$, l'immagine di $L_A: \K^n \to \K^m$ è lo spazio generato dalle colonne,
> $$\Imm L_A = \Span\left(A^1, \dots, A^n\right),$$
> e per ogni matrice $A$ vale
> $$\rk(A) = \dim \Span\left(A^1, \dots, A^n\right) = \dim \Imm L_A.$$

Perché vale, passo per passo:

1. Sia $w \in \Imm f$: esiste $v \in V$ con $f(v) = w$.
2. I $v_i$ generano $V$, quindi $v = \lambda_1v_1 + \cdots + \lambda_nv_n$ per qualche $\lambda_1, \dots, \lambda_n$.
3. Per linearità $w = f(v) = \lambda_1f(v_1) + \cdots + \lambda_nf(v_n) \in \Span\big(f(v_1), \dots, f(v_n)\big)$.
4. Questo vale per ogni $w$, quindi $\Imm f \subset \Span\big(f(v_1), \dots, f(v_n)\big)$; l'altra inclusione vale perché $\Imm f$ è un sottospazio (Proposizione 14.10) che contiene tutti gli $f(v_i)$. Quindi $\Imm f = \Span\big(f(v_1), \dots, f(v_n)\big)$.
5. Per $L_A$: i vettori $e_1, \dots, e_n$ generano $\K^n$ e $L_A(e_i) = A^i$. Quindi $\Imm L_A$ è lo Span delle colonne, e la sua dimensione è il rango (Definizione 8.3).

> [!METODO] Nucleo e immagine di $L_A$
> 1. **Nucleo** = soluzioni del sistema omogeneo $Ax = 0$. Gauss–Jordan su $A$; una incognita libera per ogni colonna senza pivot; un vettore di base per ogni incognita libera (lezione L12).
> 2. **Immagine** = Span delle colonne. Una base: le colonne **della matrice di partenza** $A$ che nella forma a scalini contengono un pivot (lezione L13). $\dim \Imm L_A = \rk(A)$.
> 3. **Controllo**: $\dim \Ker L_A + \dim \Imm L_A$ deve dare $n$, il numero di colonne (teorema della dimensione, prossima sezione).

> [!ESEMPIO] Nucleo e immagine, tutto il conto
> $A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 4 & 1 \\ 1 & 2 & 1 \end{pmatrix}$, $L_A: \R^3 \to \R^3$.
> 1. **Gauss–Jordan.** $R_2 \to R_2 - 2R_1$ dà $(0, 0, 1)$; $R_3 \to R_3 - R_1$ dà $(0, 0, 1)$; $R_3 \to R_3 - R_2$ dà la riga nulla:
>    $$\begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
>    È già ridotta. Pivot nelle colonne 1 e 3.
> 2. **Nucleo.** La colonna 2 non ha pivot: $x_2 = t$. Le righe dicono $x_1 + 2t = 0$ e $x_3 = 0$. Quindi $\Ker L_A = \{(-2t, t, 0)\} = \Span\big((-2, 1, 0)\big)$, di dimensione 1. Controllo: $A(-2, 1, 0) = (-2 + 2,\ -4 + 4,\ -2 + 2) = (0, 0, 0)$.
> 3. **Immagine.** Le colonne 1 e 3 **di $A$**: $\Imm L_A = \Span\big((1, 2, 1),\ (0, 1, 1)\big)$, di dimensione 2 (la colonna 2 è il doppio della prima).
> 4. **Controllo**: $1 + 2 = 3$, il numero di colonne.

```widget gauss
titolo: Nucleo e immagine di $L_A$ con i passaggi (qui la matrice dell'esempio)
matrice: 1 2 0; 2 4 1; 1 2 1
modo: nucleo
```

Lo strumento riduce la matrice, scrive una base del nucleo e prende come base dell'immagine le colonne della matrice di partenza dove ci sono i pivot. Prova con la matrice `1 2; 2 4` della trappola qui sotto, e con una matrice invertibile come `2 1; 1 3`: il nucleo si riduce al solo vettore nullo.

> [!TRAPPOLA] L'immagine si legge sulle colonne di partenza
> Le mosse di Gauss sulle righe cambiano le colonne, e con loro lo spazio che generano. Con $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ la forma ridotta è $\begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$, la cui prima colonna è $(1, 0)$; ma $\Imm L_A = \Span\big((1, 2)\big)$ e $(1, 0)$ **non** ci sta. Dalla forma ridotta si leggono le **posizioni** dei pivot; le colonne vanno prese dalla matrice **originale**.

## Il teorema della dimensione (p. 72)

Nell'esempio $T(x, y) = (x + y, 2x + 2y)$ il nucleo e l'immagine sono due rette: $1 + 1 = 2 = \dim \R^2$. È un caso di una regola generale: **quello che il nucleo «schiaccia» si perde, quello che resta forma l'immagine.**

| $f$ | $\dim V$ | $\dim \Ker f$ | $\dim \Imm f$ |
|---|--:|--:|--:|
| $T(x, y) = (x + y,\ 2x + 2y)$ | 2 | 1 | 1 |
| $P(x, y, z) = (x, y)$ | 3 | 1 (l'asse $z$) | 2 |
| funzione nulla $V \to W$ | $n$ | $n$ | 0 |
| identità $V \to V$ | $n$ | 0 | $n$ |

> [!TEOREMA] 14.12 · Teorema della dimensione
> Sia $f: V \to W$ una funzione lineare. Se $V$ ha dimensione finita $n$, allora
> $$\dim \Ker f + \dim \Imm f = n.$$

Pezzo per pezzo:

- A destra c'è la dimensione del **dominio** $V$, non quella del codominio.
- $W$ può essere qualsiasi; serve solo che $V$ abbia dimensione finita.
- Quindi basta calcolare **una** delle due dimensioni: l'altra viene per differenza.

L'idea della dimostrazione, nelle dispense: si prende una base $v_1, \dots, v_k$ di $\Ker f$ e la si completa a una base $v_1, \dots, v_n$ di $V$. Allora $f(v_{k+1}), \dots, f(v_n)$ formano una base di $\Imm f$, per cui $\dim \Imm f = n - k$, e la formula segue.

> [!DIM] del Teorema 14.12, con tutti i passaggi (dal libro di Martelli, Teorema 4.2.9)
> Sia $v_1, \dots, v_k$ una base di $\Ker f$, completata a una base $v_1, \dots, v_n$ di $V$ (si può sempre fare: è l'algoritmo di completamento del libro di Martelli, §2.3.5). Basta dimostrare che $f(v_{k+1}), \dots, f(v_n)$ sono una base di $\Imm f$: allora $\dim \Ker f = k$ e $\dim \Imm f = n - k$.
>
> **Generano.** Per l'osservazione di p. 72, $f(v_1), \dots, f(v_n)$ generano $\Imm f$. Ma $f(v_1) = \cdots = f(v_k) = 0$, perché $v_1, \dots, v_k$ stanno nel nucleo: togliendoli dalla lista, $f(v_{k+1}), \dots, f(v_n)$ generano ancora $\Imm f$.
>
> **Sono indipendenti.** Supponiamo $\lambda_{k+1}f(v_{k+1}) + \cdots + \lambda_nf(v_n) = 0$. Per linearità $f(\lambda_{k+1}v_{k+1} + \cdots + \lambda_nv_n) = 0$, cioè $\lambda_{k+1}v_{k+1} + \cdots + \lambda_nv_n \in \Ker f$. Siccome $v_1, \dots, v_k$ è una base di $\Ker f$, esistono $\alpha_1, \dots, \alpha_k$ con
> $$\lambda_{k+1}v_{k+1} + \cdots + \lambda_nv_n = \alpha_1v_1 + \cdots + \alpha_kv_k.$$
> Portando tutto a sinistra, $-\alpha_1v_1 - \cdots - \alpha_kv_k + \lambda_{k+1}v_{k+1} + \cdots + \lambda_nv_n = 0$. Ma $v_1, \dots, v_n$ sono indipendenti (sono una base), quindi tutti i coefficienti sono nulli, in particolare $\lambda_{k+1} = \cdots = \lambda_n = 0$. $\square$

### Per le matrici è Rouché–Capelli

Nel caso di $L_A: \K^n \to \K^m$ il nucleo è

$$\Ker L_A = \{x \in \K^n \mid L_A(x) = 0\} = \{x \in \K^n \mid Ax = 0\} = S,$$

lo spazio delle soluzioni del sistema omogeneo $Ax = 0$. Con l'osservazione di p. 72, $\dim \Imm L_A = \rk(A)$, e il teorema della dimensione diventa

$$\dim S = n - \rk(A):$$

è esattamente il teorema di Rouché–Capelli per i sistemi omogenei (lezione L12). Due strade molto diverse, una con le mosse di Gauss e una con le basi, portano allo stesso risultato.

> [!COROLLARIO] 14.13
> Sia $f: V \to W$ un'applicazione lineare. Vale
> $$\dim \Imm f \le \dim V.$$
> Inoltre:
> 1. $f$ iniettiva $\Longleftrightarrow \dim \Imm f = \dim V$;
> 2. $f$ suriettiva $\Longleftrightarrow \dim \Imm f = \dim W$.

**Spiegazione.** Dal teorema della dimensione $\dim \Imm f = \dim V - \dim \Ker f \le \dim V$. Inoltre:

1. $f$ è iniettiva se e solo se $\Ker f = \{0\}$ (Proposizione 14.11), cioè $\dim \Ker f = 0$, cioè (teorema della dimensione) $\dim \Imm f = \dim V$;
2. $f$ è suriettiva se e solo se $\Imm f = W$. Siccome $\Imm f$ è un sottospazio di $W$, e un sottospazio con la stessa dimensione (finita) dello spazio che lo contiene è tutto lo spazio, questo succede se e solo se $\dim \Imm f = \dim W$.

Qui, come nel teorema, le dimensioni sono finite.

> [!OLTRE] le conseguenze che servono nei quiz
> Dal Corollario 14.13 seguono tre regole che si usano senza fare conti (Martelli, Corollario 4.2.23 e Proposizione 4.2.24):
> 1. se $\dim V > \dim W$, $f$ **non può essere iniettiva** ($\dim \Imm f \le \dim W < \dim V$);
> 2. se $\dim V < \dim W$, $f$ **non può essere suriettiva** ($\dim \Imm f \le \dim V < \dim W$);
> 3. se $\dim V = \dim W$, $f$ è iniettiva **se e solo se** è suriettiva.
>
> Per le matrici: $L_A: \K^n \to \K^m$ è iniettiva se e solo se $\rk(A) = n$, suriettiva se e solo se $\rk(A) = m$ (Martelli, Esempio 4.2.16).

> [!ESEMPIO] Il teorema della dimensione al posto dei conti (sul modello del libro di Martelli, Esempio 4.2.12, che usa il punto $2$)
> Quanto vale la dimensione di $W = \{p \in \R_2[x] \mid p(1) = 0\}$? $W$ è il nucleo della valutazione $f: \R_2[x] \to \R$, $f(p) = p(1)$, che è lineare. $f$ è suriettiva: il polinomio costante $\lambda$ va in $\lambda$. Quindi $\dim \Imm f = 1$ e
> $$\dim W = \dim \Ker f = \dim \R_2[x] - \dim \Imm f = 3 - 1 = 2.$$
> I polinomi $x - 1$ e $x^2 - 1$ stanno in $W$ (valgono $0$ in $1$) e sono indipendenti (non sono uno multiplo dell'altro): due vettori indipendenti in uno spazio di dimensione 2 sono una base (Teorema 7.12). Quindi $W = \Span(x - 1,\ x^2 - 1)$.

> [!OLTRE] dove trovarlo nel libro
> Nel libro di Martelli: **§4.1 «Introduzione»** (pp. 115–123): la definizione (dove $f(0) = 0$ compare come primo assioma, mentre le dispense lo ricavano dagli altri due), gli esempi di base, $L_A$ con la Proposizione 4.1.6 e il Corollario 4.1.7 ($L_A(e_i) = A^i$), trasposizione, valutazione, derivata, coordinate, e la Proposizione 4.1.19. **§4.2 «Nucleo e immagine»** (pp. 123–130): Proposizioni 4.2.1, 4.2.2, 4.2.5, 4.2.6, Corollari 4.2.7 e 4.2.8, il teorema della dimensione con la dimostrazione completa (Teorema 4.2.9, pp. 124–125), gli Esempi 4.2.10–4.2.13 e il Corollario 4.2.14.

## Verso l'esame

La prova scritta di AG ha 10 quiz a 5 risposte (servono almeno 6 punti perché vengano corretti i 2 problemi da 11 punti), dura 2 ore, senza calcolatrice e con solo 4 facciate di appunti scritti a mano; gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione serve all'esame** (quasi ogni appello ha almeno una domanda su questi temi)

1. **«È lineare?»**: appelli del 10/07/2024 (domanda 7, quale formula definisce un'applicazione lineare $\R^3 \to \R^2$) e del 10/07/2025 (domanda 3, la valutazione $p \mapsto p(7)$).
2. **Il nucleo**: appelli del 24/01/2024 (domanda 8, su $\R_2[x]$), del 08/02/2024 (domanda 6, $A \mapsto A + {}^tA$ sulle matrici) e del 15/01/2026 (domanda 10, nucleo di una composizione).
3. **L'immagine**: appelli del 07/02/2025 (domanda 7), del 10/07/2025 (domanda 7), del 05/02/2026 (domanda 7), del 07/09/2026 (domanda 4), quasi sempre per un'applicazione $\R_2[x] \to \R_2[x]$; appelli del 03/06/2025 (domanda 7, il rango di $T$) e del 03/07/2026 (domanda 4, $\dim \Imm T$).
4. **Teorema della dimensione senza conti**: appelli del 06/09/2024 (domanda 3: $T: \R^6 \to \R_3[x]$ suriettiva, quanto vale $\dim \Ker T$?) e del 02/09/2025 (domanda 5). Anche la dimensione di sottospazi di polinomi definiti da condizioni come $p(2) = p(-2) = 0$ (appello del 03/07/2026, domanda 1) si trova come dimensione di un nucleo.
5. **Problemi aperti**: negli appelli del 08/02/2024 e del 10/07/2025 (problema 12) si chiedono la matrice di $T$ rispetto alla base canonica, il rango di $T$, tutti i $v$ con $T(v) = w$ e i valori di $k$ per cui un vettore dipendente da $k$ sta in $\Imm T$; nell'appello del 06/09/2024 (problema 11) una base di $\Ker A$ al variare di $k$. Due esercizi qui sotto seguono questi schemi.

> [!METODO] L'immagine di $T: \R_2[x] \to \R_2[x]$ nel quiz
> 1. Scrivi $T(ax^2 + bx + c)$ **raccogliendo** $a$, $b$, $c$: per esempio $(a - b)x^2 + (b - a)x + c = a(x^2 - x) + b(-x^2 + x) + c \cdot 1$.
> 2. I polinomi che moltiplicano $a$, $b$, $c$ sono $T(x^2)$, $T(x)$, $T(1)$: generano l'immagine (osservazione di p. 72). Qui $\Imm T = \Span(x^2 - x,\ 1)$.
> 3. Togli quelli dipendenti e conta: $\dim \Imm T$. Se viene $3$, l'immagine è tutto $\R_2[x]$.
> 4. Confronta con le risposte: due Span sono uguali se ogni generatore dell'uno sta nell'altro e le dimensioni coincidono.

> [!TRAPPOLA] Gli errori tipici
> - Confondere dominio e codominio: il nucleo sta nel **dominio**, l'immagine nel **codominio**; nel teorema della dimensione si usa $\dim V$, la dimensione del dominio.
> - Prendere le colonne della matrice ridotta come base dell'immagine.
> - Dire che una funzione è lineare solo perché $f(0) = 0$.
> - Dimenticare che le dimensioni degli spazi di polinomi sono $\dim \R_n[x] = n + 1$ e che $\dim M(m, n, \R) = mn$: $\dim \R_3[x] = 4$, $\dim M(2, \R) = 4$.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione: le due condizioni di linearità e il test $f(0) = 0$; «$L_A(e_i) = A^i$, $\Imm L_A = \Span$ delle colonne, $\rk A = \dim \Imm L_A$, $\Ker L_A$ = soluzioni di $Ax = 0$»; $\dim \Ker f + \dim \Imm f = \dim V$; iniettiva $\Leftrightarrow \Ker f = \{0\}$; le tre regole «$\dim V > \dim W \Rightarrow$ non iniettiva», «$\dim V < \dim W \Rightarrow$ non suriettiva», «$\dim V = \dim W$: iniettiva $\Leftrightarrow$ suriettiva».

## Quiz

```quiz
D: Quale delle funzioni sotto definisce un'applicazione lineare $T: \R^3 \to \R^2$?
+ $T(x, y, z) = (2x + 3y,\ x + 2z)$
- $T(x, y) = (2x - 3y,\ x + 2y)$
- $T(x, y, z) = (x^2 + y,\ x - 2z^2)$
- $T(x, y, z) = (2x + 1,\ y + z)$
- $T(x, y) = (x + 2y,\ y + 2z,\ x - 3z)$
= Appello del 10/07/2024, domanda 7. La prima ha dominio $\R^3$, codominio $\R^2$ e coordinate che sono combinazioni di $x, y, z$: è $L_A$ con $A = \begin{pmatrix} 2 & 3 & 0 \\ 1 & 0 & 2 \end{pmatrix}$. La seconda va da $\R^2$, non da $\R^3$; l'ultima ha due variabili ma usa anche $z$ e dà tre coordinate; la terza ha dei quadrati; la quarta manda $0$ in $(1, 0)$.

D: Sia $f: V \to W$ una mappa lineare, con $\dim V = 4$ e $\dim W = 2$. Quale delle seguenti è necessariamente vera?
- $f$ deve essere suriettiva.
- $f$ non può essere suriettiva.
+ $f$ non può essere iniettiva.
- $f$ deve essere iniettiva.
- $f$ è un isomorfismo.
= Appello del 02/09/2025, domanda 5. $\dim \Imm f \le \dim W = 2$, quindi $\dim \Ker f = 4 - \dim \Imm f \ge 2 > 0$: il nucleo non è $\{0\}$ e $f$ non è iniettiva. Può essere suriettiva (per esempio $(x_1, x_2, x_3, x_4) \mapsto (x_1, x_2)$) ma anche no (la funzione nulla).

D: Il nucleo della mappa lineare $T: \R_2[x] \to \R_2[x]$, $T(ax^2 + bx + c) = bx^2 + cx$, è:
- $\{\}$
- $\R_1[x]$
- $\Span(x + 1,\ x - 1)$
+ $\Span(x^2)$
- $\R_2[x] \setminus \R_1[x]$
= Appello del 24/01/2024, domanda 8. $T(ax^2 + bx + c) = 0$ se e solo se $b = 0$ e $c = 0$, con $a$ qualsiasi: il nucleo è $\{ax^2\} = \Span(x^2)$. Non è vuoto (contiene sempre lo zero), e $\R_2[x] \setminus \R_1[x]$ non contiene lo zero, quindi non è nemmeno un sottospazio.

D: L'immagine dell'applicazione lineare $T: \R_2[x] \to \R_2[x]$, $T(ax^2 + bx + c) = (a - b)x^2 + (b - a)x + c$, è:
- $\R_2[x]$
+ $\Span(x^2 - x,\ 1)$
- $\Span(x^2,\ x)$
- $\R_1[x]$
- $\{p \in \R_2[x] \mid p(0) = 0\}$
= Simile all'appello del 07/09/2026, domanda 4. Raccogliendo, $T(ax^2 + bx + c) = (a - b)(x^2 - x) + c \cdot 1$: l'immagine è $\Span(x^2 - x, 1)$, di dimensione 2 (quindi non è $\R_2[x]$). $\Span(x^2, x)$ e $\{p \mid p(0) = 0\}$ non contengono $1$; $\R_1[x]$ non contiene $x^2 - x$.

D: Sia $T: \R^5 \to \R_2[x]$ un'applicazione lineare suriettiva. Allora $\Ker T$ ha dimensione:
- $1$
+ $2$
- $3$
- $5$
- $0$
= Simile all'appello del 06/09/2024, domanda 3. $T$ suriettiva vuol dire $\dim \Imm T = \dim \R_2[x] = 3$. Per il teorema della dimensione $\dim \Ker T = 5 - 3 = 2$.

D: Quale di queste funzioni **non** è lineare?
+ $\det: M(2, \R) \to \R$
- $\tr: M(2, \R) \to \R$
- $M(2, \R) \to M(2, \R)$, $A \mapsto {}^tA$
- $\R_2[x] \to \R$, $p \mapsto p(3)$
- $M(2, \R) \to M(2, \R)$, $A \mapsto 2A$
= $\det(I + I) = \det(2I) = 4$, mentre $\det I + \det I = 2$: il determinante non rispetta le somme. Traccia, trasposizione, valutazione in un punto e moltiplicazione per 2 rispettano somme e multipli.

D: Sia $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$. Il nucleo di $L_A: \R^2 \to \R^2$ è:
+ $\Span((-2, 1))$
- $\Span((1, 2))$
- $\Span((1, -2))$
- $\{0\}$
- $\R^2$
= $Ax = 0$ si riduce all'equazione $x_1 + 2x_2 = 0$: con $x_2 = t$, $x_1 = -2t$. Controllo: $A(-2, 1) = (-2 + 2,\ -4 + 4) = (0, 0)$. $(1, 2)$ genera l'immagine, non il nucleo; $A(1, -2) = (-3, -6) \neq 0$.

D: Sia $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$. Qual è la dimensione dell'immagine di $L_A: \R^3 \to \R^2$?
- $0$
+ $1$
- $2$
- $3$
- $6$
= Simile all'appello del 03/07/2026, domanda 4. $\dim \Imm L_A = \rk(A)$. La seconda riga è il doppio della prima: un solo pivot, rango 1. L'immagine è la retta $\Span\big((1, 2)\big)$, e il nucleo ha dimensione $3 - 1 = 2$.

D: Sia $f: \R^3 \to \R^3$ lineare con $\Ker f = \{0\}$. Allora:
+ $f$ è anche suriettiva.
- $f$ è la funzione nulla.
- $\dim \Imm f = 0$.
- $f$ non può essere suriettiva.
- $\dim \Imm f = 2$.
= Simile all'appello del 02/09/2025, domanda 5. $\dim \Imm f = 3 - 0 = 3 = \dim \R^3$: l'immagine è tutto il codominio. Con dominio e codominio della stessa dimensione, iniettiva e suriettiva sono la stessa cosa.

D: Una matrice $A$ di taglia $3 \times 5$ ha rango 2. Qual è la dimensione del nucleo di $L_A: \R^5 \to \R^3$?
N: 3
= Teorema della dimensione: $\dim \Ker L_A = 5 - \dim \Imm L_A = 5 - \rk(A) = 5 - 2 = 3$. Il numero che conta è quello delle colonne, cioè la dimensione del dominio.
```

## Esercizi

::: esercizio medio Esercizio 14.14 delle dispense, punto 1
Sia $f_1: \R^3 \to \R^2$, $f_1(x, y, z) = (x + y + z,\ 2x + 3y + 4z)$. Controlla che $f_1$ è lineare, trova $\Ker f_1$ e $\Imm f_1$ e verifica il teorema della dimensione.
::: soluzione
**Lineare.** Ogni coordinata è una combinazione di $x, y, z$ con coefficienti fissi: $f_1 = L_A$ con
$$A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & 3 & 4 \end{pmatrix},$$
quindi è lineare (Esempio 14.6). Controllo sulle colonne: $f_1(e_1) = (1, 2)$, $f_1(e_2) = (1, 3)$, $f_1(e_3) = (1, 4)$.

**Nucleo.** $R_2 \to R_2 - 2R_1$ dà $(0, 1, 2)$, poi $R_1 \to R_1 - R_2$ dà $(1, 0, -1)$:
$$\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}.$$
$z = t$ libera, $x = t$, $y = -2t$: $\Ker f_1 = \Span\big((1, -2, 1)\big)$, dimensione 1. Controllo: $f_1(1, -2, 1) = (1 - 2 + 1,\ 2 - 6 + 4) = (0, 0)$.

**Immagine.** Due pivot, $\rk A = 2$: $\dim \Imm f_1 = 2 = \dim \R^2$, quindi $\Imm f_1 = \R^2$ ($f_1$ è suriettiva). Una base: $(1, 2), (1, 3)$, le colonne dei pivot.

**Teorema della dimensione:** $1 + 2 = 3 = \dim \R^3$.
:::

::: esercizio medio Esercizio 14.14 delle dispense, punto 2
Sia $f_2: \R_2[x] \to \R$, $f_2(p(x)) = p(1) + p(-1)$. Controlla che $f_2$ è lineare, trova $\Ker f_2$ e $\Imm f_2$ e verifica il teorema della dimensione.
::: soluzione
**Lineare.** Per $p, q \in \R_2[x]$ e $\lambda \in \R$ (la somma di polinomi si valuta punto per punto):
$$f_2(p + q) = (p + q)(1) + (p + q)(-1) = p(1) + q(1) + p(-1) + q(-1) = f_2(p) + f_2(q),$$
$$f_2(\lambda p) = \lambda p(1) + \lambda p(-1) = \lambda f_2(p).$$

**Una formula comoda.** Con $p = a_0 + a_1x + a_2x^2$: $p(1) = a_0 + a_1 + a_2$ e $p(-1) = a_0 - a_1 + a_2$, quindi
$$f_2(p) = 2a_0 + 2a_2.$$

**Nucleo.** $f_2(p) = 0$ se e solo se $a_2 = -a_0$, con $a_1$ libero: $p = a_0(1 - x^2) + a_1x$. Quindi $\Ker f_2 = \Span(1 - x^2,\ x)$, di dimensione 2 (i due polinomi non sono uno multiplo dell'altro). Controllo: $f_2(1 - x^2) = 0 + 0 = 0$, $f_2(x) = 1 + (-1) = 0$.

**Immagine.** $f_2\!\left(\tfrac 12\right) = \tfrac 12 + \tfrac 12 = 1$, quindi $1 \in \Imm f_2$ e, essendo un sottospazio, $\Imm f_2 = \R$: dimensione 1, $f_2$ suriettiva.

**Teorema della dimensione:** $2 + 1 = 3 = \dim \R_2[x]$.
:::

::: esercizio medio Esercizio 14.14 delle dispense, punto 3
Sia $f_3: M_2(\R) \to M_2(\R)$, $f_3(A) = A - {}^tA$ (dove $M_2(\R) = M(2, \R)$ sono le matrici reali $2 \times 2$). Controlla che $f_3$ è lineare, trova $\Ker f_3$ e $\Imm f_3$ e verifica il teorema della dimensione.
::: soluzione
**Lineare.** La trasposta rispetta somme e multipli (lezione L08), quindi
$$f_3(A + B) = (A + B) - {}^t(A + B) = A - {}^tA + B - {}^tB = f_3(A) + f_3(B), \qquad f_3(\lambda A) = \lambda A - \lambda\,{}^tA = \lambda f_3(A).$$

**Formula.** Con $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
$$f_3(A) = \begin{pmatrix} a & b \\ c & d \end{pmatrix} - \begin{pmatrix} a & c \\ b & d \end{pmatrix} = \begin{pmatrix} 0 & b - c \\ c - b & 0 \end{pmatrix}.$$

**Nucleo.** $f_3(A) = 0$ se e solo se $b = c$: sono le matrici **simmetriche** $\begin{pmatrix} a & b \\ b & d \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + d\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$. Le tre matrici sono indipendenti (ognuna ha un 1 dove le altre hanno 0): $\dim \Ker f_3 = 3$.

**Immagine.** Tutte le matrici $\begin{pmatrix} 0 & s \\ -s & 0 \end{pmatrix}$ con $s = b - c$ (e ogni $s$ si ottiene, per esempio con $b = s$, $c = 0$): sono le matrici **antisimmetriche**, $\Imm f_3 = \Span\left(\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\right)$, di dimensione 1.

**Teorema della dimensione:** $3 + 1 = 4 = \dim M_2(\R)$.
:::

::: esercizio difficile Esercizio 14.15 delle dispense
Sia $f: \R^4 \to \R^3$ l'applicazione lineare $f(x_1, x_2, x_3, x_4) = (x_1 + x_2 + x_3,\ x_2 + x_3 + x_4,\ x_1 - x_4)$. (1) Trova una base di $\Ker f$. (2) Determina $\dim \Imm f$ con il teorema della dimensione. (3) Trova una base di $\Imm f$. (4) Stabilisci se $f$ è iniettiva e se è suriettiva.
::: soluzione
La matrice (righe = coefficienti delle tre coordinate):
$$A = \begin{pmatrix} 1 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 1 & 0 & 0 & -1 \end{pmatrix}.$$
**Gauss–Jordan.** $R_3 \to R_3 - R_1$ dà $(0, -1, -1, -1)$; $R_3 \to R_3 + R_2$ dà la riga nulla; $R_1 \to R_1 - R_2$ dà $(1, 0, 0, -1)$:
$$\begin{pmatrix} 1 & 0 & 0 & -1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$

**(1)** Pivot nelle colonne 1 e 2; libere $x_3 = s$ e $x_4 = t$. Le righe dicono $x_1 = t$ e $x_2 = -s - t$:
$$(x_1, x_2, x_3, x_4) = s\,(0, -1, 1, 0) + t\,(1, -1, 0, 1).$$
Una base di $\Ker f$ è $(0, -1, 1, 0),\ (1, -1, 0, 1)$. Controllo: $f(0, -1, 1, 0) = (0, 0, 0)$ e $f(1, -1, 0, 1) = (1 - 1 + 0,\ -1 + 0 + 1,\ 1 - 1) = (0, 0, 0)$.

**(2)** $\dim \Imm f = 4 - \dim \Ker f = 4 - 2 = 2$.

**(3)** Le colonne 1 e 2 della matrice **di partenza**: $(1, 0, 1)$ e $(1, 1, 0)$. Sono due vettori indipendenti nell'immagine, che ha dimensione 2: sono una base.

**(4)** Non iniettiva: $\Ker f \neq \{0\}$. Non suriettiva: $\dim \Imm f = 2 < 3 = \dim \R^3$. (Per esempio $(0, 0, 1)$ non è nell'immagine: $\Imm f$ è il piano per l'origine generato da $(1, 0, 1)$ e $(1, 1, 0)$, cioè $x - y - z = 0$, e $0 - 0 - 1 \neq 0$.)
:::

::: esercizio base Lineari o no?
Stabilisci quali sono lineari; per le altre dai un controesempio. (a) $T: \R^2 \to \R^2$, $T(x, y) = (3x - y,\ 0)$. (b) $T: \R^2 \to \R^2$, $T(x, y) = (x + y,\ 1)$. (c) $T: \R^3 \to \R^2$, $T(x, y, z) = (xz,\ y)$. (d) $T: \R_2[x] \to \R$, $T(p) = p(0) \cdot p(1)$.
::: soluzione
(a) **Lineare**: è $L_A$ con $A = \begin{pmatrix} 3 & -1 \\ 0 & 0 \end{pmatrix}$.

(b) **Non lineare**: $T(0, 0) = (0, 1) \neq 0$.

(c) **Non lineare**: $T(2 \cdot (1, 0, 1)) = T(2, 0, 2) = (4, 0)$, ma $2\,T(1, 0, 1) = 2 \cdot (1, 0) = (2, 0)$.

(d) **Non lineare**: per il polinomio costante $1$, $T(2 \cdot 1) = 2 \cdot 2 = 4$, ma $2\,T(1) = 2 \cdot (1 \cdot 1) = 2$. Qui $T(0) = 0$: il test dello zero non bastava, serviva il controesempio.
:::

::: esercizio base Conoscere $T$ dai valori sulla base
(a) $T: \R^2 \to \R^2$ è lineare, con $T(1, 0) = (2, 1)$ e $T(0, 1) = (-1, 3)$. Calcola $T(3, -2)$ e la matrice $A$ con $T = L_A$. (b) Se invece si sa che $T(1, 1) = (3, 0)$ e $T(1, -1) = (1, 2)$, quanto vale $T(1, 0)$?
::: soluzione
(a) Per linearità, $T(3, -2) = T(3e_1 - 2e_2) = 3T(e_1) - 2T(e_2) = 3(2, 1) - 2(-1, 3) = (6 + 2,\ 3 - 6) = (8, -3)$. La matrice ha per colonne $T(e_1)$ e $T(e_2)$: $A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}$. Controllo: $A(3, -2) = (6 + 2,\ 3 - 6) = (8, -3)$.

(b) $(1, 0) = \frac 12\big((1, 1) + (1, -1)\big)$, quindi $T(1, 0) = \frac 12\big((3, 0) + (1, 2)\big) = \frac 12 (4, 2) = (2, 1)$.
:::

::: esercizio base Nucleo e immagine di una proiezione obliqua
Trova nucleo e immagine di $T: \R^3 \to \R^2$, $T(x, y, z) = (x - z,\ y + z)$, e di' se $T$ è iniettiva o suriettiva.
::: soluzione
$A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \end{pmatrix}$ è già in forma ridotta, con pivot nelle colonne 1 e 2: $\rk A = 2$.
- **Nucleo**: $z = t$, $x = t$, $y = -t$: $\Ker T = \Span\big((1, -1, 1)\big)$. Controllo: $T(1, -1, 1) = (0, 0)$.
- **Immagine**: $\dim \Imm T = 2 = \dim \R^2$, quindi $\Imm T = \R^2$.
- $T$ è **suriettiva** ma **non iniettiva**; e infatti $1 + 2 = 3$. Da $\R^3$ a $\R^2$ non poteva essere iniettiva comunque ($3 > 2$).
:::

::: esercizio medio Un sottospazio di polinomi come nucleo
Sia $W = \{p \in \R_3[x] \mid p(0) = 0,\ p(1) = 0\}$. Trova $\dim W$ con il teorema della dimensione e poi una base di $W$.
::: soluzione
$W$ è il nucleo di $f: \R_3[x] \to \R^2$, $f(p) = (p(0),\ p(1))$, che è lineare (valutazioni in due punti).

**$f$ è suriettiva**: $f(1 - x) = (1, 0)$ e $f(x) = (0, 1)$, e questi due vettori generano $\R^2$. Quindi $\dim \Imm f = 2$ e
$$\dim W = \dim \R_3[x] - 2 = 4 - 2 = 2.$$
**Base.** $x^2 - x = x(x - 1)$ e $x^3 - x = x(x - 1)(x + 1)$ si annullano in $0$ e in $1$, quindi stanno in $W$; hanno grado diverso, quindi nessuno è multiplo dell'altro: sono indipendenti. Due vettori indipendenti in uno spazio di dimensione 2 sono una base: $W = \Span(x^2 - x,\ x^3 - x)$. È lo schema della domanda 1 dell'appello del 03/07/2026.
:::

::: esercizio esame Come all'esame: rango, controimmagini e immagine con un parametro
Sia $T: \R^3 \to \R^3$, $T(x, y, z) = (x + y + 2z,\ 2x + y + 3z,\ x + 2y + 3z)$. (1) Scrivi la matrice $A$ con $T = L_A$ e calcola il rango di $T$. (2) Trova tutti i vettori $v$ con $T(v) = (3, 4, 5)$. (3) Per quali $k \in \R$ il vettore $(k, k^2, 2)$ appartiene all'immagine di $T$? (4) Trova una base di $\Ker T$ e di' se $T$ è iniettiva o suriettiva.
::: soluzione
**(1)** Le righe di $A$ sono i coefficienti delle tre coordinate:
$$A = \begin{pmatrix} 1 & 1 & 2 \\ 2 & 1 & 3 \\ 1 & 2 & 3 \end{pmatrix}.$$
Per le domande (2) e (3) conviene ridurre subito la matrice completa con un termine noto generico $(a, b, c)$:
$$\left(\begin{array}{ccc|c} 1 & 1 & 2 & a \\ 2 & 1 & 3 & b \\ 1 & 2 & 3 & c \end{array}\right) \xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - 2R_1} \left(\begin{array}{ccc|c} 1 & 1 & 2 & a \\ 0 & -1 & -1 & b - 2a \\ 0 & 1 & 1 & c - a \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 + R_2} \left(\begin{array}{ccc|c} 1 & 1 & 2 & a \\ 0 & -1 & -1 & b - 2a \\ 0 & 0 & 0 & b + c - 3a \end{array}\right)$$
Due pivot a sinistra: $\rk T = \rk A = 2$.

**(2)** Con $(a, b, c) = (3, 4, 5)$: $b + c - 3a = 4 + 5 - 9 = 0$, quindi ci sono soluzioni (Rouché–Capelli), con $3 - 2 = 1$ parametro. Le righe dicono $x + y + 2z = 3$ e $-y - z = 4 - 6 = -2$. Con $z = t$: $y = 2 - t$ e $x = 3 - (2 - t) - 2t = 1 - t$.
$$v = (1 - t,\ 2 - t,\ t), \qquad t \in \R.$$
Controllo con $t = 0$: $T(1, 2, 0) = (1 + 2,\ 2 + 2,\ 1 + 4) = (3, 4, 5)$.

**(3)** Un vettore $(a, b, c)$ sta in $\Imm T$ se e solo se il sistema ha soluzione, cioè se e solo se $b + c - 3a = 0$ (è l'equazione del piano $\Imm T$). Per $(k, k^2, 2)$: $k^2 + 2 - 3k = 0$, cioè $(k - 1)(k - 2) = 0$. Quindi **$k = 1$ oppure $k = 2$**. Controllo: $(1, 1, 2)$ dà $1 + 2 - 3 = 0$ e $(2, 4, 2)$ dà $4 + 2 - 6 = 0$.

**(4)** Termine noto nullo: $z = t$, $y = -t$, $x = -y - 2z = -t$. $\Ker T = \Span\big((-1, -1, 1)\big)$, di dimensione 1. Controllo: $T(-1, -1, 1) = (-1 - 1 + 2,\ -2 - 1 + 3,\ -1 - 2 + 3) = (0, 0, 0)$. $T$ **non è iniettiva** (nucleo non nullo) e **non è suriettiva** ($\dim \Imm T = 2 < 3$). Controllo del teorema: $1 + 2 = 3$. Lo schema è quello dei problemi 12 degli appelli del 08/02/2024 e del 10/07/2025.
:::

::: esercizio esame Come all'esame: il nucleo al variare di $k$
Sia $A = \begin{pmatrix} 1 & 1 & k \\ 1 & k & 1 \\ k & 1 & 1 \end{pmatrix}$ con $k \in \R$. Al variare di $k$, trova una base di $\Ker L_A$ e di' per quali $k$ l'applicazione $L_A: \R^3 \to \R^3$ è iniettiva.
::: soluzione
**Determinante.** Sviluppando lungo la prima riga:
$$\det A = 1 \cdot (k - 1) - 1 \cdot (1 - k) + k \cdot (1 - k^2) = 2(k - 1) - k(k - 1)(k + 1) = -(k - 1)(k^2 + k - 2) = -(k - 1)^2(k + 2).$$
(Ho raccolto $k - 1$: $2(k - 1) + k(1 - k)(1 + k) = (k - 1)(2 - k - k^2)$, e $k^2 + k - 2 = (k - 1)(k + 2)$.)

**Se $k \neq 1$ e $k \neq -2$**: $\det A \neq 0$, il sistema $Ax = 0$ ha solo la soluzione nulla: $\Ker L_A = \{0\}$ (nessuna base, dimensione 0) e $L_A$ è **iniettiva**, quindi anche suriettiva.

**Se $k = 1$**: tutte le righe sono $(1, 1, 1)$, rango 1. Il nucleo è il piano $x + y + z = 0$: con $y = s$, $z = t$, $x = -s - t$, una base è $(-1, 1, 0),\ (-1, 0, 1)$. Dimensione $3 - 1 = 2$.

**Se $k = -2$**: $A = \begin{pmatrix} 1 & 1 & -2 \\ 1 & -2 & 1 \\ -2 & 1 & 1 \end{pmatrix}$. $R_2 \to R_2 - R_1$ dà $(0, -3, 3)$, $R_3 \to R_3 + 2R_1$ dà $(0, 3, -3)$, e $R_3 \to R_3 + R_2$ dà la riga nulla: rango 2. Con $z = t$: $y = t$ e $x = -t + 2t = t$. Una base del nucleo è $(1, 1, 1)$ (infatti ogni riga di $A$ ha somma zero). Dimensione $3 - 2 = 1$.

**$L_A$ è iniettiva esattamente per $k \neq 1, -2$.** Lo schema è quello del problema 11, punto 2, dell'appello del 06/09/2024.
:::

::: esercizio difficile Che cosa fa un'applicazione lineare ai vettori dipendenti e indipendenti
Sia $f: V \to W$ lineare e siano $v_1, \dots, v_k \in V$. (a) Dimostra che se $v_1, \dots, v_k$ sono dipendenti, anche $f(v_1), \dots, f(v_k)$ lo sono. (b) Dimostra che se $f$ è iniettiva e $v_1, \dots, v_k$ sono indipendenti, anche $f(v_1), \dots, f(v_k)$ sono indipendenti. (c) Mostra con un esempio che in (b) l'iniettività serve.
::: soluzione
(a) Esistono $\lambda_1, \dots, \lambda_k$ non tutti nulli con $\sum \lambda_iv_i = 0$. Applicando $f$ e usando la linearità: $\sum \lambda_if(v_i) = f\big(\sum \lambda_iv_i\big) = f(0) = 0$. Gli stessi coefficienti, non tutti nulli, danno una relazione tra le immagini.

(b) Supponiamo $\sum \lambda_if(v_i) = 0$. Per linearità $f\big(\sum \lambda_iv_i\big) = 0$, cioè $\sum \lambda_iv_i \in \Ker f$. Siccome $f$ è iniettiva, $\Ker f = \{0\}$ (Proposizione 14.11), quindi $\sum \lambda_iv_i = 0$; e siccome i $v_i$ sono indipendenti, tutti i $\lambda_i$ sono nulli.

(c) $f: \R^2 \to \R^2$, $f(x, y) = (x + y,\ 2x + 2y)$ non è iniettiva: $e_1, e_2$ sono indipendenti, ma $f(e_1) = f(e_2) = (1, 2)$ sono dipendenti.
:::

## Domande di ripasso

::: domanda Che cos'è un'applicazione lineare?
Una funzione $f: V \to W$ tra spazi vettoriali sullo stesso campo tale che $f(v + w) = f(v) + f(w)$ e $f(\lambda v) = \lambda f(v)$ per ogni $v, w \in V$ e ogni $\lambda \in \K$.
:::

::: domanda Perché un'applicazione lineare manda $0$ in $0$? Quali tre zeri compaiono?
$f(0) = f(0 \cdot 0) = 0 \cdot f(0) = 0$. Dentro $f$ c'è il vettore nullo di $V$ scritto come lo scalare $0$ per un vettore; lo scalare $0 \in \K$ esce per la seconda condizione; il risultato è il vettore nullo di $W$.
:::

::: domanda Come si dimostra che una funzione non è lineare?
Basta un controesempio con i numeri: $f(0) \neq 0$, oppure due vettori con $f(v + w) \neq f(v) + f(w)$, oppure un vettore e uno scalare con $f(\lambda v) \neq \lambda f(v)$. Il test dello zero da solo può non bastare.
:::

::: domanda Che cos'è $L_A$ e perché è lineare?
Per una matrice $A$ di taglia $m \times n$, $L_A: \K^n \to \K^m$ è $L_A(x) = Ax$. È lineare per le proprietà del prodotto di matrici: $A(x + x') = Ax + Ax'$ e $A(\lambda x) = \lambda Ax$.
:::

::: domanda Che cosa sono le colonne di $A$ per l'applicazione $L_A$?
Sono le immagini dei vettori della base canonica: $L_A(e_i) = A^i$. Per linearità $L_A(x) = x_1A^1 + \cdots + x_nA^n$.
:::

::: domanda Che cosa sono nucleo e immagine, e dove vivono?
$\Ker f = \{v \in V \mid f(v) = 0\}$ è un sottospazio del dominio $V$; $\Imm f = \{f(v) \mid v \in V\}$ è un sottospazio del codominio $W$.
:::

::: domanda Perché $f$ è iniettiva se e solo se $\Ker f = \{0\}$?
Se $f$ è iniettiva, solo $0$ va in $0$. Viceversa, se $\Ker f = \{0\}$ e $v \neq v'$, allora $v - v' \neq 0$ non sta nel nucleo, quindi $f(v) - f(v') = f(v - v') \neq 0$.
:::

::: domanda Come si trovano nucleo e immagine di $L_A$?
Il nucleo è l'insieme delle soluzioni di $Ax = 0$ (Gauss–Jordan, un vettore di base per ogni incognita libera). L'immagine è lo Span delle colonne; una base sono le colonne della matrice di partenza che nella forma a scalini contengono un pivot. $\dim \Imm L_A = \rk(A)$.
:::

::: domanda Che cosa dice il teorema della dimensione? Qual è l'idea della dimostrazione?
Se $\dim V = n$ è finita, $\dim \Ker f + \dim \Imm f = n$. Si prende una base $v_1, \dots, v_k$ del nucleo, la si completa a una base $v_1, \dots, v_n$ di $V$, e si dimostra che $f(v_{k+1}), \dots, f(v_n)$ sono una base dell'immagine.
:::

::: domanda Perché per le matrici il teorema della dimensione è Rouché–Capelli?
Perché $\Ker L_A$ è lo spazio $S$ delle soluzioni di $Ax = 0$ e $\dim \Imm L_A = \rk(A)$: il teorema dice $\dim S = n - \rk(A)$, la formula di Rouché–Capelli per i sistemi omogenei.
:::

::: domanda Se $\dim V = 4$ e $\dim W = 2$, che cosa si sa di $f: V \to W$ lineare? E se $\dim V = \dim W$?
Con $\dim V = 4 > 2 = \dim W$, $f$ non può essere iniettiva: $\dim \Ker f \ge 4 - 2 = 2$. Con $\dim V = \dim W$, $f$ è iniettiva se e solo se è suriettiva (Corollario 14.13).
:::

::: domanda Quali di queste sono lineari: traccia, determinante, trasposizione, valutazione di un polinomio in un punto?
Traccia, trasposizione e valutazione sì; il determinante no: $\det(2I_2) = 4 \neq 2 = \det I_2 + \det I_2$.
:::

## Glossario

```glossario
Applicazione lineare | Funzione $f: V \to W$ tra spazi sullo stesso campo con $f(v + w) = f(v) + f(w)$ e $f(\lambda v) = \lambda f(v)$.
Dominio e codominio | Lo spazio di partenza $V$ e quello di arrivo $W$ di $f: V \to W$.
Funzione nulla | $f(v) = 0$ per ogni $v$; è lineare, con nucleo tutto $V$ e immagine $\{0\}$.
Identità $\id$ | $\id(v) = v$; è lineare, con nucleo $\{0\}$ e immagine tutto $V$.
$L_A$ | L'applicazione $\K^n \to \K^m$, $x \mapsto Ax$, definita da una matrice $A$ di taglia $m \times n$.
Traccia | $\tr A = a_{11} + \cdots + a_{nn}$; è un'applicazione lineare $M(n, \K) \to \K$.
Applicazione affine | Funzione del tipo $x \mapsto Ax + b$; con $b \neq 0$ non è lineare.
Nucleo $\Ker f$ | I vettori del dominio mandati in $0$; è un sottospazio di $V$.
Immagine $\Imm f$ | I vettori del codominio raggiunti da $f$; è un sottospazio di $W$.
Iniettiva | Vettori diversi vanno in vettori diversi; per $f$ lineare equivale a $\Ker f = \{0\}$.
Suriettiva | Ogni vettore del codominio è raggiunto: $\Imm f = W$.
Rango di $f$ | $\dim \Imm f$; per $L_A$ è $\rk(A)$.
Teorema della dimensione | $\dim \Ker f + \dim \Imm f = \dim V$, se $V$ ha dimensione finita.
Corollario 14.13 | $\dim \Imm f \le \dim V$; iniettiva $\Leftrightarrow \dim \Imm f = \dim V$; suriettiva $\Leftrightarrow \dim \Imm f = \dim W$.
Valutazione | L'applicazione lineare $p \mapsto p(x_0)$ che calcola un polinomio in un punto fissato.
```

## Checklist

```checklist
- So enunciare la definizione di applicazione lineare e ricavarne $f(0) = 0$.
- So dimostrare che una funzione è lineare (con le lettere) o che non lo è (con un controesempio numerico).
- So riconoscere a colpo d'occhio le formule non lineari: costanti aggiunte, quadrati, prodotti tra coordinate.
- So scrivere $L_A$ per una matrice $A$ e so che le colonne di $A$ sono le immagini di $e_1, \dots, e_n$.
- So che traccia, trasposizione e valutazione sono lineari e che il determinante non lo è.
- So definire nucleo e immagine e dimostrare che sono sottospazi.
- So dimostrare che $f$ è iniettiva se e solo se $\Ker f = \{0\}$.
- So calcolare nucleo e immagine di $L_A$ con Gauss, prendendo le colonne di partenza per l'immagine.
- So enunciare il teorema della dimensione e usarlo per trovare una dimensione senza conti.
- So rispondere ai quiz su iniettività e suriettività confrontando $\dim V$ e $\dim W$.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 14 «Applicazioni Lineari I», pp. 68–73: le sezioni 14.A–14.D sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni, teorema, corollario ed esempi mantengono la loro numerazione (Definizioni 14.1 e 14.9, Esempi 14.2–14.8, Proposizioni 14.10 e 14.11, Teorema 14.12, Corollario 14.13, Esercizi 14.14 e 14.15), compresi l'osservazione di p. 72 e i due riquadri «Collegamento con l'informatica» (reti neurali; il nucleo come insieme di direzioni ammissibili).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §4.1 (pp. 115–123) e §4.2 (pp. 123–130), in particolare la dimostrazione completa del Teorema 4.2.9, gli Esempi 4.1.10, 4.1.13, 4.1.15, 4.2.12 e 4.2.16, il Corollario 4.2.23 e le Proposizioni 4.1.19 e 4.2.24.
- **Appelli d'esame** di Algebra lineare 2023/24–2025/26 con soluzioni ufficiali (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): riportate le domande 8 del 24/01/2024, 7 del 10/07/2024 e 5 del 02/09/2025; citate le domande su linearità, nucleo, immagine e dimensioni degli altri appelli (08/02/2024, 06/09/2024, 07/02/2025, 03/06/2025, 10/07/2025, 15/01/2026, 05/02/2026, 03/07/2026, 07/09/2026) e i problemi 12 del 08/02/2024 e del 10/07/2025 e 11 del 06/09/2024. Le soluzioni qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (il determinante non lineare, ogni applicazione $\K^n \to \K^m$ come $L_A$, le conseguenze del Corollario 14.13 per i quiz, gli esempi con i polinomi, gli esercizi non numerati) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
