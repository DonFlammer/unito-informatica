---
corso: MDAG
modulo: MD
lezione: S4
tipo: riassunto
titolo: "Settimana 4: combinazioni, coefficienti binomiali e problemi di conteggio"
data: 2026-10-23
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Riassunto settimanale · Parte 1 (modA) · Matematica Discreta · Canali A, B e C · 19/10 – 23/10/2026
descrizione: >-
  Riassunto della settimana 4 di Matematica Discreta (MDAG, parte 1): combinazioni semplici e coefficiente binomiale,
  simmetria, scelte da moltiplicare o da sommare, combinazioni con ripetizione con caselle e separatori, la tabella
  delle quattro formule; come si spezza un problema di combinatoria, l'analisi dei casi, le proprietà dei
  coefficienti binomiali, la formula di Stiefel, il triangolo di Tartaglia e la somma di una riga.
lede: >-
  Le due lezioni della settimana in poche pagine: quale delle quattro formule usare, come si spezza un problema
  d'esame in scelte e in casi, perché i coefficienti binomiali formano un triangolo, e le domande vere della domanda 4
  del quiz.
materiale: libro
scheda:
  Lezioni: "[D08](D08_combinazioni.html) lun 19/10 · [D09](D09_coefficienti_binomiali_stiefel.html) ven 23/10"
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 3, pp. 55–64
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti delle lezioni D08 e D09 di Matematica Discreta, scritti sul libro di A. Mori
appunti_html: appunti/MDAG/riassunto_settimana_04_MD.html
genera_html: true
---

## In breve

- Una **combinazione semplice** è un sottoinsieme: conta **quali** elementi, non l'ordine. Si contano con il coefficiente binomiale $\binom{n}{k}$.
- Scegliere $k$ elementi è come scegliere gli $n - k$ da lasciare fuori: è la **simmetria**.
- Una **combinazione con ripetizione** prende $k$ elementi tra $n$ tipi, anche più volte lo stesso: si contano con **caselle e separatori**.
- Due domande scelgono la formula: **l'ordine conta?** **si ripete?**
- Un problema d'esame si **spezza in scelte**: quelle da fare tutte si moltiplicano, i casi che si escludono si sommano.
- **Formula di Stiefel**: i sottoinsiemi di $k$ elementi si dividono in quelli con e senza un elemento fissato. Da qui il **triangolo di Tartaglia**, in cui ogni numero è la somma dei due sopra.
- La somma della riga $n$ del triangolo è $2^n$: tutti i sottoinsiemi, contati per grandezza.

## D08 · Combinazioni (lun 19/10)

Le 12 disposizioni di 2 piante su 4 danno solo 6 coppie, perché ogni coppia compare in due ordini. In generale ogni sottoinsieme di $k$ elementi corrisponde a $k!$ disposizioni, e le combinazioni sono le disposizioni divise per $k!$.

| | si ripete | non si ripete |
|---|---|---|
| **l'ordine conta** | disposizioni con ripetizione: $n^k$ | disposizioni semplici: $\frac{n!}{(n-k)!}$ |
| **l'ordine non conta** | combinazioni con ripetizione: $\binom{k + n - 1}{k}$ | combinazioni semplici: $\binom{n}{k}$ |

- $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$, «n su k». Da riconoscere al volo: $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{1} = n$, $\binom{n}{2} = \frac{n(n-1)}{2}$.
- **Simmetria**: $\binom{n}{k} = \binom{n}{n-k}$. All'esame la stessa risposta può essere scritta nelle due forme.
- **Moltiplicare o sommare**: le scelte di una formazione di calcio (portiere, difensori, …) si moltiplicano; i coni da 1, 2, 3 o 4 gusti si sommano.
- **Le parole che decidono**: «mazzo», «gruppo», «degustazione» vogliono dire che l'ordine non conta; «fila», «classifica», «parola» che conta.

```grafico
titolo: Un mazzo di 5 fiori da 4 varietà (rose, tulipani, margherite, orchidee) come fila di 8 caselle: 5 per i fiori e 3 per i separatori (con il punto). Qui 2 rose, 1 tulipano, nessuna margherita, 2 orchidee. Scegliere le 3 caselle dei separatori tra le 8 decide il mazzo: $\binom{8}{3} = 56$.
x: 0 8.4
y: 0 2.4
assi: no
griglia: no
proporzioni: libere
poligono: 0.2 0.6 1.15 0.6 1.15 1.6 0.2 1.6 | rosa
testo: 0.67 1.1 | rosa | "R"
poligono: 1.2 0.6 2.15 0.6 2.15 1.6 1.2 1.6 | rosa
testo: 1.67 1.1 | rosa | "R"
poligono: 2.2 0.6 3.15 0.6 3.15 1.6 2.2 1.6 | accento
punto: 2.67 1.1 | accento
poligono: 3.2 0.6 4.15 0.6 4.15 1.6 3.2 1.6 | ambra
testo: 3.67 1.1 | ambra | "T"
poligono: 4.2 0.6 5.15 0.6 5.15 1.6 4.2 1.6 | accento
punto: 4.67 1.1 | accento
poligono: 5.2 0.6 6.15 0.6 6.15 1.6 5.2 1.6 | accento
punto: 5.67 1.1 | accento
poligono: 6.2 0.6 7.15 0.6 7.15 1.6 6.2 1.6 | blu
testo: 6.67 1.1 | blu | "O"
poligono: 7.2 0.6 8.15 0.6 8.15 1.6 7.2 1.6 | blu
testo: 7.67 1.1 | blu | "O"
testo: 4.2 2.05 | grigio | "5 fiori + 3 separatori = 8 caselle"
```

> [!TRAPPOLA] «Almeno uno di ogni tipo»
> Si mette da parte un elemento per tipo e si contano le scelte libere dei rimanenti. Mazzi di 6 fiori da 4 varietà, con tutte le varietà: restano 2 fiori liberi, $\binom{2 + 4 - 1}{2} = 10$, non $\binom{9}{6} = 84$.

::: prova Quanti sacchetti di 10 caramelle si fanno con 3 gusti?
L'ordine non conta, i gusti si ripetono: $\binom{10 + 3 - 1}{10} = \binom{12}{2} = 66$.
:::

> [!RICORDA]
> - Due domande, quattro formule.
> - Nelle combinazioni con ripetizione $n$ sono i tipi, $k$ gli elementi presi.

## D09 · Problemi, Stiefel e Tartaglia (ven 23/10)

La lezione comincia dai problemi: quasi nessuno è una formula sola. Si spezza in scelte, si sceglie una formula per ognuna, poi si mette insieme.

- **Scelte da fare tutte**: si moltiplicano. Le squadre del circolo di tennis (prova scritta del 14/07/2020), 4 tennisti su 8 e 2 tenniste su 5, sono $\binom{8}{4} \cdot \binom{5}{2} = 700$.
- **Analisi dei casi**: se un vincolo divide le situazioni, si conta ogni caso e si somma. Nelle semifinali dell'esercizio 3.13 si conta a parte ogni possibile numero di europei nella prima semifinale.
- **Oggetti uguali o diversi**: 15 monete in 4 salvadanai senza vuoti (prova scritta del 12/02/2020) sono una combinazione con ripetizione, perché le monete sono uguali: $\binom{14}{3} = 364$.

La **formula di Stiefel**: $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$. Tra i 10 comitati di 3 persone su 5, quelli con Anna sono $\binom{4}{2} = 6$ e quelli senza Anna $\binom{4}{3} = 4$.

```grafico
titolo: Le righe da 0 a 5 del triangolo di Tartaglia: ogni numero è la somma dei due sopra, come dice la formula di Stiefel. In verde 4 e 6 della riga 4, che danno il 10 della riga 5. La somma di ogni riga è una potenza di 2.
x: 0 12
y: 0.6 6.6
assi: no
griglia: no
proporzioni: libere
testo: 0.6 6 | grigio | "n = 0"
testo: 0.6 5.05 | grigio | "n = 1"
testo: 0.6 4.1 | grigio | "n = 2"
testo: 0.6 3.15 | grigio | "n = 3"
testo: 0.6 2.2 | grigio | "n = 4"
testo: 0.6 1.25 | grigio | "n = 5"
testo: 6 6 | blu | "1"
testo: 5.3 5.05 | blu | "1"
testo: 6.7 5.05 | blu | "1"
testo: 4.6 4.1 | blu | "1"
testo: 6 4.1 | blu | "2"
testo: 7.4 4.1 | blu | "1"
testo: 3.9 3.15 | blu | "1"
testo: 5.3 3.15 | blu | "3"
testo: 6.7 3.15 | blu | "3"
testo: 8.1 3.15 | blu | "1"
testo: 3.2 2.2 | blu | "1"
testo: 4.6 2.2 | verde | "4"
testo: 6 2.2 | verde | "6"
testo: 7.4 2.2 | blu | "4"
testo: 8.8 2.2 | blu | "1"
testo: 2.5 1.25 | blu | "1"
testo: 3.9 1.25 | blu | "5"
testo: 5.3 1.25 | accento | "10"
testo: 6.7 1.25 | blu | "10"
testo: 8.1 1.25 | blu | "5"
testo: 9.5 1.25 | blu | "1"
freccia: 4.75 1.95 5.15 1.53 | verde
freccia: 5.85 1.95 5.45 1.53 | verde
testo: 11 6 | grigio | "1"
testo: 11 5.05 | grigio | "2"
testo: 11 4.1 | grigio | "4"
testo: 11 3.15 | grigio | "8"
testo: 11 2.2 | grigio | "16"
testo: 11 1.25 | grigio | "32"
```

- Le altre proprietà: $\binom{n}{0} = \binom{n}{n} = 1$ ai bordi, e la simmetria, che rende ogni riga uguale letta al contrario.
- **Somma di una riga**: $\binom{n}{0} + \binom{n}{1} + \dots + \binom{n}{n} = 2^n$, perché conta i sottoinsiemi per grandezza. Serve per gli «almeno»: i sottoinsiemi di 6 elementi con almeno 2 elementi sono $64 - 1 - 6 = 57$.
- Il binomio di Newton, che spiega il nome «coefficiente binomiale», è il prossimo argomento.

::: prova Con Stiefel, quanto vale $\binom{7}{3} + \binom{7}{4}$?
$\binom{8}{4} = 70$: in basso va il $k$ più grande dei due.
:::

> [!RICORDA]
> - Problemi: si spezza in scelte; si moltiplica o si somma.
> - Stiefel: con e senza un elemento fissato. Tartaglia: ogni numero è la somma dei due sopra.

## Verso l'esame

- **Domanda 4 del quiz**: un conteggio, con le risposte già scritte come formule. Negli appelli 2025–2026 sono uscite combinazioni (degustazioni, caselle colorate, numeri pari e dispari) e disposizioni (sedie, parole, colorazioni di griglie, palline).
- **Problemi**: mazzi di fiori (14/01/2025), kit di asciugamani (08/09/2025), sottoinsiemi con un vincolo (03/02/2026, 01/07/2026), e negli anni prima persone e sedie, squadre, monete, carte. Il testo dice: «Non è necessario calcolare gli esponenziali, i fattoriali e i coefficienti binomiali». Si lascia la formula, ma si spiega ogni pezzo.
- Appelli 2026/27: martedì 19/01/2027 e mercoledì 03/02/2027, alle 14:00, con libro e appunti.

## Domande di ripasso

::: domanda Quando si usano le combinazioni semplici e quando le disposizioni semplici?
Tutte e due senza ripetizioni; le combinazioni quando l'ordine non conta, le disposizioni quando conta.
:::

::: domanda Perché $\binom{n}{k} = \binom{n}{n-k}$?
Perché scegliere i $k$ elementi da prendere è come scegliere gli $n - k$ da lasciare fuori.
:::

::: domanda Quante sono le combinazioni con ripetizione di $k$ elementi da $n$ tipi?
$\binom{k + n - 1}{k}$: $k$ caselle per gli elementi e $n - 1$ per i separatori.
:::

::: domanda Quando si moltiplica e quando si somma?
Si moltiplica per scelte da fare tutte; si somma per casi che si escludono.
:::

::: domanda Che cosa dice la formula di Stiefel?
$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$: i sottoinsiemi di $k$ elementi con un elemento fissato e quelli senza.
:::

::: domanda Quanto vale la somma della riga $n$ del triangolo di Tartaglia, e perché?
$2^n$: sono tutti i sottoinsiemi di un insieme di $n$ elementi, divisi per grandezza.
:::

## Quiz d'esame

Le prime sei sono domande vere: la domanda 4 dei quiz degli appelli 2025–2026. Le ultime due vengono da problemi veri, e le ho messe a scelta multipla io. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma.

```quiz
D: Appello del 10/09/2026. La birreria Qvizz produce 8 birre e offre delle degustazioni di 3 a scelta. Quante sono le possibili degustazioni?
+ $\frac{8!}{3! \cdot 5!}$
- $\frac{8!}{5!}$
- $\frac{8!}{3!}$
- $\frac{8!}{3 \cdot 5}$
- $8!$
= L'ordine non conta e le birre sono diverse: $\binom{8}{3} = 56$. La risposta più insidiosa è $\frac{8!}{5!}$: conta le degustazioni con l'ordine.

D: Appello del 13/01/2026. Le 9 caselle di una riga devono essere colorate di giallo o di grigio in modo che ci siano esattamente 4 caselle gialle. Quanti sono i modi di farlo?
+ $\binom{9}{5}$
- $\frac{9!}{5!}$
- $9! - 5!$
- $\binom{5}{4}$
- $9!$
= Si sceglie quali 4 caselle sono gialle, $\binom{9}{4}$, che per la simmetria è $\binom{9}{5} = 126$, le 5 grigie. La risposta più insidiosa è $\frac{9!}{5!}$, che sceglie le caselle gialle in ordine.

D: Appello del 04/02/2025. Dall'insieme $\{1, 2, \dots, 14\}$ vogliamo scegliere 4 numeri pari e 2 numeri dispari. Quante scelte possibili ci sono?
+ $\binom{7}{4} \cdot \binom{7}{2}$
- $\binom{14}{6}$
- $\binom{14}{4} \cdot \binom{14}{2}$
- $14^6$
- $7^2 \cdot 7^4$
= 7 pari e 7 dispari, due scelte da fare tutte: $35 \cdot 21 = 735$. La risposta più insidiosa è $\binom{14}{4} \cdot \binom{14}{2}$, che sceglie i pari tra tutti i numeri.

D: Appello del 06/06/2025. Quanti sono i modi di scegliere due numeri divisibili per 5 e quattro numeri non divisibili per 5 compresi tra 1 e 20 inclusi?
+ $\binom{4}{2} \cdot \binom{16}{4}$
- $\binom{20}{2} \cdot \binom{20}{4}$
- $\frac{20!}{14!}$
- $4! \cdot 16!$
- $\frac{4!}{2!} \cdot \frac{16!}{12!}$
= Tra 1 e 20 i multipli di 5 sono 4 e gli altri 16: $6 \cdot 1820 = 10\,920$. La risposta più insidiosa è l'ultima: sono le stesse scelte, ma con l'ordine.

D: Appello del 14/01/2025. Quanti modi ci sono per far sedere 6 persone in una fila di 10 sedie?
+ $\frac{10!}{4!}$
- $\frac{10!}{6!}$
- $10^6$
- $6^{10}$
- $10!$
= Conta chi sta su quale sedia, e ogni sedia ha al massimo una persona: disposizioni semplici, $10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 = \frac{10!}{4!}$. La risposta più insidiosa è $\frac{10!}{6!}$, che divide per il fattoriale delle persone invece che delle 4 sedie vuote.

D: Appello del 06/06/2026. Quante parole di lunghezza 4 si possono formare con un alfabeto di 16 simboli?
+ $16^4$
- $4^{16}$
- $\frac{16!}{4!}$
- $4 \cdot 16$
- $4! \cdot 16!$
= In una parola l'ordine conta e le lettere si ripetono: $16^4 = 65\,536$. La risposta più insidiosa è $4^{16}$, con base ed esponente scambiati.

D: Dal problema 2 dell'appello del 14/01/2025. Con 4 varietà di fiori in quantità illimitata, quanti mazzi diversi di 5 fiori si possono comporre?
+ $\binom{8}{5}$
- $\binom{9}{5}$
- $4^5$
- $\binom{5}{4}$
- $\frac{8!}{3!}$
= Combinazioni con ripetizione di 5 elementi da 4 tipi: $\binom{5 + 4 - 1}{5} = 56$. La risposta più insidiosa è $4^5$, che conta i fiori in ordine, come in una fila.

D: Dall'esercizio 1 della prova scritta del 12/02/2020. In quanti modi si possono mettere 15 monete da 1 euro in 4 salvadanai, senza lasciarne nessuno vuoto?
+ $\binom{14}{3}$
- $\binom{18}{3}$
- $\binom{15}{4}$
- $4^{15}$
- $\frac{15!}{11!}$
= Le monete sono uguali: una per salvadanaio, poi le altre 11 con ripetizione tra 4, $\binom{11 + 3}{3} = 364$. La risposta più insidiosa è $\binom{18}{3}$, che conta anche i salvadanai vuoti.
```

## Fonti

- Le lezioni complete: [D08 · Combinazioni semplici e con ripetizione](D08_combinazioni.html), [D09 · Problemi di combinatoria, coefficienti binomiali e formula di Stiefel](D09_coefficienti_binomiali_stiefel.html), con gli esempi, i quiz e gli esercizi.
- A. Mori, *Lezioni di Matematica Discreta*, cap. 3, pp. 55–64.
- Quiz degli appelli del 14/01/2025, 04/02/2025, 06/06/2025, 13/01/2026, 06/06/2026 e 10/09/2026 (domanda 4); problemi dell'appello del 14/01/2025 e della prova scritta del 12/02/2020, con le soluzioni ufficiali.
