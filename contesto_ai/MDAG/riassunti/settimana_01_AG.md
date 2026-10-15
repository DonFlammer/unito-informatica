---
corso: MDAG
modulo: AG
lezione: S1
tipo: riassunto
titolo: "Settimana 1: i numeri reali"
data: 2026-10-01
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Riassunto settimanale · Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · 28/09 – 02/10/2026
descrizione: >-
  Riassunto della settimana 1 di Algebra lineare e Geometria (MDAG, parte 2): le famiglie dei numeri, i numeri reali e
  gli irrazionali, perché la radice di 2 non è una frazione, che cos'è un campo, l'ordine, graffe, tonde e quadre, i
  conti con le radici senza calcolatrice.
lede: >-
  La lezione della settimana in poche pagine: le quattro famiglie dei numeri, le nove regole dei conti, le parentesi
  e le regole delle radici, con le domande per controllarti.
materiale: dispense
scheda:
  Lezioni: "[L01](L01_numeri_reali.html), nel canale B giovedì 01/10"
  Dispense: Buzano e Radeschi 2026, pp. 2–5
  Tempo di ripasso: 20–30 minuti
fonte: >-
  Gli appunti della lezione L01 di Algebra lineare e Geometria, scritti sulle dispense 2026 del corso (R. Buzano,
  M. Radeschi)
appunti_html: appunti/MDAG/riassunto_settimana_01_AG.html
genera_html: true
---

## In breve

- I numeri sono quattro famiglie, una dentro l'altra: $\N \subset \Z \subset \Q \subset \R$.
- Alcuni numeri reali non sono frazioni: sono **irrazionali**, come $\sqrt 2$. Che non sia una frazione si dimostra **per assurdo**.
- Un **campo** è un insieme di numeri in cui valgono le nove regole dei conti: $\Q$, $\R$ e $\C$ sì, $\N$ e $\Z$ no.
- Graffe, tonde e quadre dicono cose diverse.
- All'esame non c'è la calcolatrice: le radici si semplificano a mano.

## L01 · I numeri reali

| Simbolo | Nome | Che cosa contiene | Esempi |
|:-:|---|---|---|
| $\N$ | naturali | i numeri per contare, **zero compreso** | 0, 1, 2, 3… |
| $\Z$ | interi | i naturali e i loro opposti | −3, 0, 7 |
| $\Q$ | razionali | le frazioni $\frac ab$ con $b \neq 0$ | $\frac12$, $-\frac34$, 5 |
| $\R$ | reali | i numeri con infinite cifre dopo la virgola, anche senza ripetizioni | $\sqrt 2$, $\pi$, $e$ |

- Ogni famiglia sta dentro la successiva e ha qualcosa in più: $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$.
- Una frazione ha tante scritture: $\frac12 = \frac24 = \frac36$. Le frazioni sono i numeri con la virgola che **finiscono o si ripetono**; quelli che non si ripetono mai sono **irrazionali**.
- Una stranezza: $0{,}999\ldots = 1$, due scritture dello stesso numero.
- In modo preciso un numero reale è una lista di frazioni che si avvicinano sempre di più tra loro: serve per capire, non per l'esame. $\R$ è **completo**, cioè non ha buchi; $\Q$ invece sì: $\left(1 + \frac1n\right)^n$ sale verso $e \approx 2{,}718$, che non è una frazione.

**Perché $\sqrt 2$ non è una frazione.** $\sqrt 2$ è la diagonale di un quadrato di lato 1, per Pitagora. Si ragiona **per assurdo**:

1. fai finta che $\sqrt 2 = \frac ab$, con la frazione già ridotta ai minimi termini;
2. allora $a^2 = 2b^2$, quindi $a^2$ è pari e anche $a$ è pari: $a = 2k$;
3. sostituendo, $4k^2 = 2b^2$, cioè $b^2 = 2k^2$: anche $b$ è pari;
4. ma allora la frazione si poteva ancora semplificare per 2. Contraddizione: $\sqrt 2$ non è una frazione.

> [!TRAPPOLA] Irrazionale per irrazionale
> Il prodotto di due irrazionali non è sempre irrazionale: $\sqrt 2 \cdot \sqrt 2 = 2$.

**Le nove regole dei conti.** Per la somma: associativa, commutativa, c'è lo 0, ogni numero ha l'opposto. Per il prodotto: associativa, commutativa, c'è l'1, ogni numero **diverso da 0** ha l'inverso. In più la distributiva, $a(b + c) = ab + ac$.

> [!DEF] Campo
> Un insieme di numeri con somma e prodotto in cui valgono tutte e nove le regole.

**Come si legge.** In pratica un campo è un insieme in cui fai le quattro operazioni senza uscirne. $\Q$, $\R$ e $\C$ sono campi; $\N$ no, perché manca $-1$; $\Z$ no, perché manca $\frac12$. Lo zero non ha inverso: non si divide per zero.

**L'ordine.** $a > b$ vuol dire che $a - b$ è positivo, cioè che $a$ sta più a destra sulla retta dei numeri. $\N$, $\Z$, $\Q$ e $\R$ sono ordinati; $\C$ no.

| Scrittura | Vuol dire |
|---|---|
| $\{1, 2\}$ | l'insieme con i due elementi 1 e 2 |
| $(1, 2)$ | i reali tra 1 e 2, estremi **esclusi**; oppure il punto o il vettore di coordinate 1 e 2, a seconda del contesto |
| $[1, 2]$ | i reali tra 1 e 2, estremi **compresi** |
| $\lambda$, $\mu$, $\vartheta$ | lettere greche: di solito $\lambda$ e $\mu$ sono numeri, $\vartheta$ un angolo |
| $\forall$, $\exists$, $\Longrightarrow$ | «per ogni», «esiste», «se … allora» |

> [!TRAPPOLA] «Se … allora» non vale al contrario
> Se $a = 2$ allora $a^2 = 4$; ma da $a^2 = 4$ non segue $a = 2$, perché anche $a = -2$ va bene. Quando una frase vale nei due versi si dice «se e solo se».

> [!METODO] Conti con le radici senza calcolatrice
> 1. $\sqrt a \cdot \sqrt b = \sqrt{ab}$, e un quadrato esce dalla radice: $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt 3$.
> 2. Si sommano solo radici uguali: $2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$, mentre $\sqrt 2 + \sqrt 3$ resta così.
> 3. Per togliere la radice dal denominatore moltiplica sopra e sotto per quella radice: $\frac1{\sqrt 3} = \frac{\sqrt 3}3$.
> 4. $\sqrt{a + b}$ **non** è $\sqrt a + \sqrt b$: $\sqrt{9 + 16} = 5$, mentre $3 + 4 = 7$.

## Verso l'esame

- Prova comune ai tre canali: **10 quiz** a 5 risposte; con almeno **6** giuste si correggono i **2 problemi** da 11 punti. Dura 2 ore, **senza calcolatrice**, e si possono portare solo **4 facciate scritte a mano**.
- Appelli 2026/27: venerdì 22/01/2027 e venerdì 05/02/2027, alle 14:00. Il voto di MDAG è la media con Matematica Discreta.
- Da questa lezione: riconoscere un campo, usare le parentesi giuste, semplificare le radici. Nell'appello del 07/09/2026 le risposte per una distanza erano $3$, $\frac{\sqrt 3}3$, $3\sqrt 3$, $\sqrt 3$ e $3 + \sqrt 3$: bisogna riconoscere che $\frac1{\sqrt 3}$ e $\frac{\sqrt 3}3$ sono lo stesso numero.
- Sul foglio da 4 facciate: la tabella delle famiglie, le nove regole, le regole delle radici.

## Domande di ripasso

::: domanda $-4$ sta in $\N$? In $\Z$? In $\Q$?
Non sta in $\N$; sta in $\Z$ e in $\Q$.
:::

::: domanda $0{,}333\ldots$ è razionale?
Sì: è $\frac13$, le cifre si ripetono.
:::

::: domanda $\Z$ è un campo? Perché?
No: 2 non ha inverso in $\Z$, perché $\frac12$ non è un intero.
:::

::: domanda Che differenza c'è tra $(2, 5)$ e $[2, 5]$? Il 5 sta in tutti e due?
Il primo esclude gli estremi, il secondo li comprende: il 5 sta solo in $[2, 5]$.
:::

::: domanda Semplifica $\sqrt{50}$ e $\frac6{\sqrt 2}$.
$\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt 2$; $\frac6{\sqrt 2} = \frac{6\sqrt 2}2 = 3\sqrt 2$.
:::

::: domanda $\sqrt 2 \cdot \sqrt 8$ è irrazionale?
No: $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$.
:::

## Quiz d'esame

Nei 15 appelli di Algebra lineare dal 2024 al 2026 non c'è una domanda solo sui numeri reali. I conti di questa settimana, con radici e frazioni senza calcolatrice, stanno però dentro molte domande vere. Le prime tre domande qui sotto sono proprio quei conti, presi dalle domande indicate; la quarta è una domanda vera intera. Le risposte sono quelle delle soluzioni ufficiali, ricontrollate con un programma.

```quiz
D: Dal primo passo dell'appello del 15/01/2026, domanda 5. Per $z = \frac{\sqrt 3}2 - \frac 12 i$ serve la distanza dall'origine, $\sqrt{\left(\frac{\sqrt 3}2\right)^2 + \left(\frac 12\right)^2}$. Quanto vale?
+ $1$
- $\frac{\sqrt 3 + 1}2$
- $\frac{\sqrt 3}4 + \frac 14$
- $\frac 12$
- $2$
= $\left(\frac{\sqrt 3}2\right)^2 = \frac 34$ e $\left(\frac 12\right)^2 = \frac 14$; la somma è 1, e la radice di 1 è 1. La risposta più insidiosa è $\frac{\sqrt 3 + 1}2$: si ottiene togliendo la radice pezzo per pezzo, ma $\sqrt{a^2 + b^2}$ non è $a + b$. $\frac{\sqrt 3}4$ dimentica che $(\sqrt 3)^2 = 3$.

D: Dal primo passo dell'appello del 24/01/2024, domanda 2. Per $z = -\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i$ serve $\left(\frac{\sqrt 2}2\right)^2$. Quanto vale?
- $\frac{\sqrt 2}4$
+ $\frac 12$
- $1$
- $\frac{\sqrt 2}2$
- $2$
= Si eleva sopra e sotto: $\frac{(\sqrt 2)^2}{2^2} = \frac 24 = \frac 12$. Allora la distanza di $z$ è $\sqrt{\frac 12 + \frac 12} = 1$. La risposta più insidiosa è $\frac{\sqrt 2}4$: eleva solo il numero sotto.

D: Dall'appello dell'08/02/2024, domanda 4. Il conto finale della domanda è la somma dei tre numeri $\sqrt 2 \cdot \sqrt 3 - \sqrt 2 \cdot \sqrt 3$, $-\sqrt 3 \cdot \sqrt 2 + \sqrt 3 \cdot \sqrt 2$ e $\sqrt 5 \cdot \sqrt 5$. Le risposte della domanda vera erano queste: quale è giusta?
- $30$
- $(\sqrt 2 + \sqrt 3 + \sqrt 5)^2$
+ $5$
- $\sqrt{30}$
- $\sqrt 5$
= I primi due numeri valgono 0, perché sono un numero meno sé stesso. Il terzo è $\sqrt 5 \cdot \sqrt 5 = 5$. La risposta più insidiosa è $(\sqrt 2 + \sqrt 3 + \sqrt 5)^2$: sembra contenere tutti i pezzi, ma vale $10 + 2\sqrt 6 + 2\sqrt{10} + 2\sqrt{15}$. $\sqrt{30}$ moltiplica tutte le radici insieme. La domanda vera chiedeva la traccia del prodotto di due matrici, che vedrai nella lezione L08: la soluzione ufficiale è 5.

D: Appello del 07/02/2025, domanda 2. Qual è la risposta corretta alla domanda «$\C$ ammette una struttura di spazio vettoriale su $\R$?»
- No, poiché $\C$ è già uno spazio vettoriale su $\C$ stesso.
- Sì, perché ogni campo è uno spazio vettoriale su $\R$.
- No, ma poiché $\C$ contiene $\R$, $\R$ è uno spazio vettoriale su $\C$.
- No, in quanto $\C$ e $\R$ sono campi diversi.
+ Sì, $\R$ è sottoinsieme di $\C$ e le operazioni $+$ e $\cdot$ su $\R$ sono le stesse che in $\C$.
= Il punto chiave è della settimana 1: $\R$ sta dentro $\C$, e un reale per un complesso dà ancora un complesso. La risposta più insidiosa è «ogni campo è uno spazio vettoriale su $\R$»: è falsa, per esempio $\Q$ non contiene $\R$. La soluzione ufficiale nota che la prima e la quarta dicono cose vere che non rispondono alla domanda. Che cosa sia uno spazio vettoriale lo vedrai nella lezione L05.
```

## Fonti

- La lezione completa: [L01 · Numeri reali](L01_numeri_reali.html), con quiz degli appelli ed esercizi svolti. Tutte le 26 lezioni di Algebra lineare e Geometria sono già nel sito.
- R. Buzano, M. Radeschi, dispense 2026 del corso, pp. 2–5.
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md).
