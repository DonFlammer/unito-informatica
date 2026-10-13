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

## Fonti

- Le lezioni complete: [D03 · Prodotto cartesiano e relazioni di equivalenza](D03_prodotto_cartesiano_relazioni.html), [D04 · Funzioni, immagini e controimmagini](D04_funzioni_immagini_controimmagini.html), con le domande vere degli appelli, i quiz e gli esercizi.
- A. Mori, *Lezioni di Matematica Discreta*: cap. 1, pp. 13–15; appendice A, pp. 153–155; cap. 2, pp. 17–23.
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
