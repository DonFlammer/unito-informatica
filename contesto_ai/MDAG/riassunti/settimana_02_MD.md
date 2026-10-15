---
corso: MDAG
modulo: MD
lezione: S2
tipo: riassunto
titolo: "Settimana 2: prodotto cartesiano, relazioni di equivalenza, funzioni"
data: 2026-10-09
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Riassunto settimanale · Parte 1 (modA) · Matematica Discreta · Canali A, B e C · 05/10 – 09/10/2026
descrizione: >-
  Riassunto della settimana 2 di Matematica Discreta (MDAG, parte 1): coppie ordinate e prodotto cartesiano, relazioni
  e le loro quattro proprietà, relazioni d'ordine e di equivalenza, congruenza modulo N, classi e partizioni; funzioni
  come insiemi di coppie, immagine e controimmagine, funzioni iniettive, suriettive e biettive.
lede: >-
  Le due lezioni della settimana in poche pagine: le definizioni da sapere, le tabelle dei pallini per riconoscere
  relazioni e funzioni, i metodi per la domanda 2 e la domanda 3 del quiz, e le domande per controllarti.
materiale: libro
scheda:
  Lezioni: "[D03](D03_prodotto_cartesiano_relazioni.html) lun 05/10 · [D04](D04_funzioni_immagini_controimmagini.html) ven 09/10"
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 1, pp. 13–15; app. A, pp. 153–155; cap. 2, pp. 17–23
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni D03 e D04 di Matematica Discreta, scritti sul libro di A. Mori
appunti_html: appunti/MDAG/riassunto_settimana_02_MD.html
genera_html: true
---

## In breve

- Una **coppia ordinata** ha un primo e un secondo pezzo: l'ordine conta. Il **prodotto cartesiano** di due insiemi contiene tutte le coppie con il primo pezzo nel primo insieme e il secondo nel secondo.
- Una **relazione** in un insieme è un sacchetto di coppie: dice chi è legato a chi.
- Le quattro **proprietà**: riflessiva, simmetrica, antisimmetrica, transitiva. Un'**equivalenza** è riflessiva, simmetrica e transitiva; un **ordine** è riflessivo, antisimmetrico e transitivo.
- Ogni equivalenza divide l'insieme in **classi**, che formano una partizione.
- Una **funzione** fa corrispondere a ogni elemento del dominio uno e un solo elemento del codominio. Sulla tabella dei pallini: un pallino in ogni colonna.
- **Iniettiva**: ogni riga ha al massimo un pallino. **Suriettiva**: ogni riga ne ha almeno uno. **Biettiva**: esattamente uno.
- All'esame la **domanda 2** del quiz è quasi sempre sul prodotto cartesiano, la **domanda 3** sulle funzioni.

## D03 · Prodotto cartesiano e relazioni (lun 05/10)

**Coppie e prodotto cartesiano.**

- Scambiare i due pezzi di una coppia dà un'altra coppia, se i pezzi sono diversi: la casella B3 della battaglia navale non è 3B. Tonde per le coppie, graffe per gli insiemi.
- Per scrivere il prodotto si fissa un elemento del primo insieme e lo si accoppia con tutti quelli del secondo, poi si passa al successivo. Il numero di coppie è il prodotto dei due numeri di elementi: 3 per 4 fa 12.
- In generale $A \times B \neq B \times A$. Se uno dei due insiemi è vuoto, il prodotto è vuoto.

> [!METODO] La domanda 2 del quiz
> 1. Un **elemento** del prodotto cartesiano è una coppia, con ogni pezzo nel suo insieme.
> 2. Un **sottoinsieme** di $A \times B$ è un sacchetto di coppie così, oppure il vuoto.
> 3. Controlla ogni coppia pezzo per pezzo, e nell'ordine giusto.
>
> Nell'appello del 03/02/2026 gli insiemi erano $P = \{1, 3, 4, 7, 8\}$ e $Q = \{2, 3, 5, 6, 9\}$. La risposta giusta era il sacchetto con la coppia $(6, 7)$: **non** è un sottoinsieme di $P \times Q$, perché 6 non sta in $P$.

**Relazioni.** Una relazione in un insieme è un sacchetto di coppie di suoi elementi, cioè un sottoinsieme del prodotto dell'insieme con sé stesso. Si scrive $a \, R \, b$ quando $a$ è legato a $b$, e si disegna con una tabella di pallini.

| Proprietà | A parole | Sulla tabella |
|---|---|---|
| riflessiva | ognuno è legato a sé stesso | tutta la diagonale piena |
| simmetrica | se $a$ è legato a $b$, anche $b$ è legato ad $a$ | la tabella è uguale allo specchio |
| antisimmetrica | due elementi diversi non sono legati nei due sensi | fuori dalla diagonale nessun pallino ha lo specchio |
| transitiva | da $a$ a $b$ e da $b$ a $c$, allora da $a$ a $c$ | le catene si chiudono |

> [!TRAPPOLA] Antisimmetrica non vuol dire «non simmetrica»
> L'uguaglianza è simmetrica **e** antisimmetrica. Una relazione può anche non essere né l'una né l'altra.

**Equivalenze e classi.**

- Un'equivalenza vuol dire «essere dello stesso tipo»: stesso mese di nascita, stessa parità, stesso resto.
- **Congruenza modulo $N$**: due interi sono equivalenti quando la loro differenza è un multiplo di $N$. Con $N = 3$ le classi sono tre: i multipli di 3, quelli con resto 1, quelli con resto 2.
- La **classe** $[x]$ contiene gli elementi equivalenti a $x$; se $x \sim y$ allora $[x] = [y]$. Le classi formano una **partizione**, e ogni partizione dà un'equivalenza, «stare nello stesso cassetto».

::: prova Con $A = \{1, 2\}$ e $B = \{a, b, c\}$, quanti elementi ha $A \times B$? La coppia $(a, 1)$ ci sta?
6 elementi. $(a, 1)$ non ci sta: il primo pezzo deve essere in $A$. Sta in $B \times A$.
:::

> [!RICORDA]
> - Equivalenza: riflessiva, simmetrica, transitiva. Ordine: riflessivo, antisimmetrico, transitivo.
> - Le classi di un'equivalenza sono i cassetti di una partizione.

## D04 · Funzioni, immagini, controimmagini (ven 09/10)

Una **funzione** è come la mensa: **ogni** studente sceglie **un solo** piatto. Si scrive $f \colon A \to B$. In modo preciso è il suo grafico, un sottoinsieme di $A \times B$ in cui ogni elemento di $A$ compare come primo pezzo di una sola coppia.

- **Dominio** $A$, **codominio** $B$. Due funzioni sono uguali se hanno stesso dominio, stesso codominio e stesso grafico.
- Funzioni da riconoscere: identità, costanti, proiezioni, successioni, funzione quoziente.
- L'**immagine** $\operatorname{Im}(f)$ sono i valori raggiunti davvero; il codominio è quello che **potrebbe** raggiungere.
- La **controimmagine** $f^{-1}(b)$ è l'insieme di chi finisce in $b$: le soluzioni di $f(a) = b$. Può essere vuota. Non vuol dire «uno diviso $f$».

| Proprietà | Sulle righe della tabella | Con le controimmagini |
|---|---|---|
| iniettiva | al massimo un pallino per riga | ogni $f^{-1}(b)$ ha al massimo un elemento |
| suriettiva | almeno un pallino per riga | ogni $f^{-1}(b)$ è non vuota |
| biettiva | esattamente un pallino per riga | ogni $f^{-1}(b)$ ha esattamente un elemento |

```grafico
titolo: Una funzione dagli studenti ai piatti: da ogni studente parte **una sola** freccia. La pasta riceve due frecce, quindi la funzione non è iniettiva; l'insalata nessuna, quindi non è suriettiva.
x: 0 10
y: 0 6
assi: no
griglia: no
poligono: 0.4 0.4 3.4 0.4 3.4 5.6 0.4 5.6 | blu
poligono: 6.6 0.4 9.6 0.4 9.6 5.6 6.6 5.6 | ambra
testo: 1.9 5.25 | blu | "studenti"
testo: 8.1 5.25 | ambra | "piatti"
punto: 2.6 4.3 | blu | "Anna" | o
punto: 2.6 3.3 | blu | "Bruno" | o
punto: 2.6 2.3 | blu | "Carla" | o
punto: 2.6 1.3 | blu | "Dario" | o
punto: 7.4 4.3 | ambra | "pasta" | e
punto: 7.4 3.1 | ambra | "riso" | e
punto: 7.4 1.9 | ambra | "zuppa" | e
punto: 7.4 0.9 | ambra | "insalata" | e
freccia: 2.7 4.3 7.25 4.3
freccia: 2.7 3.3 7.25 4.2
freccia: 2.7 2.3 7.25 3.1
freccia: 2.7 1.3 7.25 1.9
```

> [!METODO] Smentire o dimostrare
> - **Non iniettiva**: basta trovare due elementi diversi con lo stesso valore, come $1$ e $-1$ quando c'è un quadrato.
> - **Non suriettiva**: basta un elemento del codominio che non arriva mai.
> - **Iniettiva**: da $f(a_1) = f(a_2)$ fai i conti fino ad $a_1 = a_2$.
> - **Suriettiva**: prendi un $b$ qualsiasi e trova chi ci arriva.

Due esempi da ricordare. «Due n più uno» sugli interi è iniettiva ma non suriettiva: dà solo i dispari. Il quadrato sui reali non è né l'una né l'altra, ma diventa biettivo sui reali positivi.

::: prova Con $f \colon \Z \to \Z$, $f(n) = n^2 - 1$, quanto valgono $f^{-1}(8)$ e $f^{-1}(12)$?
$f^{-1}(8) = \{3, -3\}$, perché $n^2 = 9$. $f^{-1}(12) = \emptyset$, perché 13 non è un quadrato.
:::

> [!RICORDA]
> - Funzione: un pallino in ogni colonna. Le righe dicono iniettiva, suriettiva, biettiva.
> - Tra insiemi finiti: dal più grande al più piccolo non c'è mai una funzione iniettiva.

## Verso l'esame

- **Domanda 2 del quiz**: elementi e sottoinsiemi del prodotto cartesiano, coppia per coppia.
- **Domanda 3 del quiz**: sulle funzioni. Nel 2025 chiedeva immagini, controimmagini, iniettività; dal 2025 in poi quasi sempre una **composizione**, l'argomento della [lezione D05](../MDAG/D05_composizione_funzioni_inverse.html) del 12/10.
- Le classi di equivalenza tornano con le **classi di resto**, e la buona definizione con i problemi sui gruppi.
- Appelli 2026/27: martedì 19/01/2027 e mercoledì 03/02/2027, alle 14:00, con libro e appunti.

## Domande di ripasso

::: domanda Quanti elementi ha $A \times B$ se $A$ ha 3 elementi e $B$ ne ha 4?
12: si moltiplica il numero degli elementi.
:::

::: domanda Quali proprietà ha una relazione di equivalenza? E una relazione d'ordine?
L'equivalenza è riflessiva, simmetrica e transitiva. L'ordine è riflessivo, antisimmetrico e transitivo.
:::

::: domanda Quali sono le classi della congruenza modulo 3 sugli interi?
$[0]$, i multipli di 3; $[1]$, quelli che danno resto 1; $[2]$, quelli che danno resto 2.
:::

::: domanda Come si riconosce una funzione sulla tabella dei pallini?
Ogni colonna, cioè ogni elemento del dominio, ha esattamente un pallino.
:::

::: domanda Che differenza c'è tra codominio e immagine?
Il codominio è l'insieme d'arrivo dichiarato; l'immagine è l'insieme dei valori raggiunti davvero.
:::

::: domanda Come si dimostra che una funzione non è iniettiva?
Trovando due elementi diversi con lo stesso valore.
:::

::: domanda $f(n) = 2n + 1$ da $\Z$ a $\Z$ è suriettiva?
No: i valori sono tutti dispari, e 0 non viene mai raggiunto.
:::

## Quiz d'esame

Tutte domande vere dei quiz di Matematica Discreta: le prime sei sul prodotto cartesiano, che è quasi sempre la domanda 2, le altre sulle funzioni. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma. Sulle relazioni di equivalenza nei quiz 2021–2026 non ho trovato domande a scelta multipla.

```quiz
D: Appello del 07/07/2025, domanda 1. Siano $A = \{a, d, h, m\}$ e $B = \{c, g, p, t\}$. Allora:
- $(d, m) \in A \times B$
- $g \in A \times B$
- $(p, m) \in A \times B$
- $\{a, t\} \subset A \times B$
+ $(h, t) \in A \times B$
= $h$ sta in $A$ e $t$ in $B$, nell'ordine giusto. La risposta più insidiosa è $(d, m)$: tutte e due le lettere stanno in $A$, ma il secondo pezzo deve stare in $B$. $g$ e $\{a, t\}$ non sono coppie; $(p, m)$ ha i pezzi negli insiemi sbagliati.

D: Appello del 14/01/2025, domanda 2. Siano $A = \{1, 2, 5, 8\}$ e $B = \{2, 3, 8, 9\}$. La terna $(1, 2, 5)$ è un elemento di:
- $B \times A \times A$
+ $A \times B \times A$
- $B \times B \times B$
- $B \times B \times A$
- $A \times A \times B$
= Pezzo per pezzo: 1 sta solo in $A$, 2 sta in $B$ (e anche in $A$), 5 sta solo in $A$. Quindi il primo e il terzo insieme devono essere $A$. La risposta più insidiosa è $A \times A \times B$: va bene per i primi due pezzi, ma 5 non sta in $B$.

D: Appello del 13/01/2026, domanda 2. Siano $R = \{2, 5, 6, 9\}$ e $S = \{d, g, n, z\}$. Allora:
+ $(g, 6) \notin R \times S$
- $(d, z) \in R \times S$
- $(5, 6, g) \in R \times S$
- $(3, n) \in R \times S$
- $(2, d) \notin R \times S$
= Le coppie di $R \times S$ hanno prima un numero di $R$ e poi una lettera di $S$. $(g, 6)$ ha l'ordine rovesciato, quindi non ci sta: la frase è vera. La risposta più insidiosa è $(2, d) \notin R \times S$: la coppia ci sta, quindi la frase con «non appartiene» è falsa. $(5, 6, g)$ è una terna, e 3 non sta in $R$.

D: Appello del 03/02/2026, domanda 2. Siano $P = \{1, 3, 4, 7, 8\}$ e $Q = \{2, 3, 5, 6, 9\}$. Quale insieme NON è un sottoinsieme di $P \times Q$?
- $\{(3, 3)\}$
- $\{(8, 3), (3, 9)\}$
- $\emptyset$
+ $\{(1, 3), (6, 7), (8, 2)\}$
- $\{(4, 6), (1, 9), (7, 5)\}$
= Nella coppia $(6, 7)$ il 6 non sta in $P$ e il 7 non sta in $Q$: basta una coppia sbagliata. La risposta più insidiosa è $\emptyset$: il vuoto è un sottoinsieme di ogni insieme, quindi va bene. $(3, 3)$ va bene perché 3 sta in tutti e due.

D: Appello del 06/06/2026, domanda 2. Siano $X = \{\beta, \delta, \rho, \omega\}$ e $Y = \{2, 3, 6, 8, 9\}$. Allora:
- $(6, \rho) \in X \times Y$
+ $(\omega, 4) \notin X \times Y$
- $\emptyset \in X \times Y$
- $(\delta, 2) \notin X \times Y$
- $\beta \in X \times Y$
= 4 non sta in $Y$, quindi $(\omega, 4)$ non è nel prodotto: la frase è vera. La risposta più insidiosa è $(\delta, 2) \notin X \times Y$: la coppia invece ci sta. $(6, \rho)$ ha l'ordine rovesciato; il vuoto e $\beta$ non sono coppie.

D: Appello del 01/07/2026, domanda 2. Siano $R = \{1, 4, 6, 8\}$ e $S = \{2, 5, 7, 8\}$. Allora:
- $(8, 8) \notin R \times S$
- $(1, 2) \notin R \times S$
- $\{6, 7\} \in R \times S$
- $(7, 6) \in R \times S$
+ $(4, 5) \in R \times S$
= 4 sta in $R$ e 5 in $S$. La risposta più insidiosa è $(8, 8) \notin R \times S$: 8 sta in tutti e due gli insiemi, quindi la coppia c'è, e la frase è falsa. $\{6, 7\}$ è un insieme, non una coppia; $(7, 6)$ ha l'ordine rovesciato.

D: Appello del 14/01/2025, domanda 3. Sia $f \colon \Z \to \N$ la funzione $f(n) = n^2 + 1$ se $n$ è pari, $f(n) = n^2 - 1$ se $n$ è dispari. Allora:
- se $m$ sta nell'immagine di $f$, allora $m + 1$ non ci sta
- $f^{-1}(p) = \emptyset$ se $p$ è primo
+ $f(m) = f(n)$ se e solo se $m = \pm n$
- $f$ è iniettiva
- $f$ è suriettiva
= $n$ e $-n$ sono tutti e due pari o tutti e due dispari, quindi hanno lo stesso valore. Al contrario, due numeri con lo stesso valore hanno lo stesso quadrato, oppure i quadrati differiscono di 2, che tra quadrati di interi non succede. La risposta più insidiosa è «iniettiva»: $f(1) = f(-1) = 0$. $f(0) = 1$ e $f(1) = 0$ smentiscono la prima; $f(2) = 5$ è primo; il 2 non è mai raggiunto, quindi non è suriettiva.

D: Appello del 14/01/2025, domanda 3, altra versione. Sia $f \colon \Z \to \N$ la funzione $f(n) = n^2 + 2$ se $n$ è pari, $f(n) = n^2$ se $n$ è dispari. Allora:
- se $s$ sta nell'immagine di $f$, allora $s + 1$ non ci sta
- $f^{-1}(p) = \emptyset$ se $p$ è primo
- $f(2n) = 4n^2 + 4$ per ogni $n$
+ $f$ non è iniettiva
- $f$ è suriettiva
= $f(1) = f(-1) = 1$: due numeri diversi con lo stesso valore. La risposta più insidiosa è $f(2n) = 4n^2 + 4$: $2n$ è pari, quindi $f(2n) = 4n^2 + 2$. $f(0) = 2$ e $f(1) = 1$ smentiscono la prima; $f(0) = 2$ è primo; il 3 non è mai raggiunto.

D: Quiz 2021–2025. Sia $f \colon \Z \to \Z$ la funzione $f(n) = 2n$ se $n$ è dispari, $f(n) = 2$ se $n$ è pari. Allora:
- $f$ è suriettiva
- $f(n/2) = 2$ per ogni $n$ pari
- $f(2n) = 4n$ per ogni $n$ dispari
+ $f^{-1}(8) = \emptyset$
- $f$ è iniettiva
= Per avere 8 servirebbe $2n = 8$ con $n$ dispari, ma $n = 4$ è pari; i pari danno sempre 2. Quindi nessuno va in 8. La risposta più insidiosa è $f(2n) = 4n$: $2n$ è pari, quindi $f(2n) = 2$. $f(n/2)$ vale 2 solo se $n/2$ è pari; $f$ dà solo numeri pari, quindi non è suriettiva; tutti i pari vanno in 2, quindi non è iniettiva.

D: Quiz 2021–2025. Sia $h \colon \Z \to \Z$ la funzione $h(n) = 2n$ se $n$ è dispari, $h(n) = n$ se $n$ è pari. Allora:
- $h$ è suriettiva
- $h(n/2) = n$ per ogni $n$ pari
- $\{4, 8\} = h^{-1}(8)$
+ $\{3, 6\} = h^{-1}(6)$
- $h$ è iniettiva
= Chi va in 6: il dispari 3, perché $2 \cdot 3 = 6$, e il pari 6. Quindi $h^{-1}(6) = \{3, 6\}$, e per lo stesso motivo $h$ non è iniettiva. La risposta più insidiosa è $\{4, 8\} = h^{-1}(8)$: 4 è pari e va in 4, non in 8; il dispari che andrebbe in 8 sarebbe 4, che non è dispari, quindi $h^{-1}(8) = \{8\}$. $h$ dà solo numeri pari, quindi non è suriettiva.
```

## Fonti

- Le lezioni complete: [D03 · Prodotto cartesiano e relazioni di equivalenza](D03_prodotto_cartesiano_relazioni.html), [D04 · Funzioni, immagini e controimmagini](D04_funzioni_immagini_controimmagini.html), con le domande vere degli appelli, i quiz e gli esercizi.
- A. Mori, *Lezioni di Matematica Discreta*: cap. 1, pp. 13–15; appendice A, pp. 153–155; cap. 2, pp. 17–23.
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
