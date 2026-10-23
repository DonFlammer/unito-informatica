---
corso: MDAG
modulo: MD
lezione: D09
titolo: Problemi di combinatoria, coefficienti binomiali e formula di Stiefel
data: 2026-10-23
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D09
descrizione: >-
  Appunti della lezione D09 di Matematica Discreta (MDAG, parte 1, canali A, B e C): come si risolve un problema di
  combinatoria spezzandolo in scelte, i problemi con l'analisi dei casi, le proprietà dei coefficienti binomiali, la
  formula di Stiefel con le due dimostrazioni, il triangolo di Tartaglia e la somma di una riga, con i problemi d'esame
  e le domande 4 del quiz.
lede: >-
  Un problema d'esame di combinatoria raramente è una formula sola: è una catena di scelte da moltiplicare o una lista
  di casi da sommare. Poi i coefficienti binomiali, che hanno una regola che li lega tra loro e li dispone in un
  triangolo.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 3, pp. 57–61, esercizi pp. 65–66
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 3 «Combinatorica», pp. 57–61, ed esercizi 3.13,
  3.15, 3.17, 3.18, 3.19; diario delle lezioni del canale B 2025/26; problemi degli appelli di Matematica Discreta del
  12/02/2020, 14/07/2020 e 22 e 23/02/2021 e quiz degli appelli 2025–2026
appunti_html: appunti/MDAG/D09_coefficienti_binomiali_stiefel.html
genera_html: true
---

## In breve

- Un problema di combinatoria si risolve spezzandolo in **scelte**: per ognuna ci si chiede se l'ordine conta e se si ripete, poi si moltiplicano le scelte da fare tutte e si sommano i casi alternativi.
- Quando un vincolo divide il problema in situazioni diverse, si fa l'**analisi dei casi**: si conta ogni caso a parte e si somma.
- I coefficienti binomiali hanno tre proprietà da sapere: valgono 1 ai bordi, sono **simmetrici**, e soddisfano la **formula di Stiefel**.
- Stiefel dice che i sottoinsiemi di $k$ elementi si dividono in quelli che contengono un elemento fissato e quelli che non lo contengono: $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$.
- Con Stiefel si costruisce il **triangolo di Tartaglia**: ogni numero è la somma dei due sopra.
- La somma di una riga del triangolo è $2^n$: tutti i sottoinsiemi di un insieme di $n$ elementi, contati per grandezza.
- All'esame i problemi d'esame di combinatoria chiedono proprio questo: scelte in fila, casi da sommare, e risposte lasciate come coefficienti binomiali.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di venerdì 23/10/2026, dalle 9 alle 11, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la nona lezione era «Risoluzione di problemi di combinatoria. Proprietà dei coefficienti binomiali. Formula di Stiefel». Nel libro sono le pp. 57–60. Aggiungo il triangolo di Tartaglia (p. 60), che nel diario era nella lezione dopo, perché è il modo naturale di usare la formula di Stiefel, e la somma di una riga (p. 61, nota 3.36), che si dimostra con l'insieme delle parti della lezione D01. Il binomio di Newton (teorema 3.34) resta per la prossima lezione. Quando il docente pubblica gli argomenti, controllo e aggiorno.

## Come si affronta un problema (pp. 57–58)

Nella D08 ogni esempio era una formula sola. All'esame invece un problema è quasi sempre fatto di più pezzi, e il lavoro sta nel trovarli. Il libro lo dice così: a volte la soluzione non è un calcolo diretto, ma richiede il metodo delle scelte successive oppure un'analisi di vari casi.

Il procedimento è sempre lo stesso:

1. **Spezza** il problema in scelte più piccole, ognuna con un insieme da cui scegliere e un numero di elementi.
2. Per ogni scelta fai le due domande della D08: **l'ordine conta?** **si ripete?** E scegli la formula.
3. **Mettile insieme**: si moltiplicano le scelte da fare tutte, si sommano i casi che si escludono.

Un esercizio d'esame vero, con tre domande che usano tre formule diverse.

> [!ESAME] Persone, giocatori e monete: prova scritta del 12/02/2020, esercizio 1
> 1. «In quanti modi diversi 4 persone possono sedersi in una fila di 10 sedie?» Ogni persona prende una sedia diversa, e conta chi sta dove: l'ordine conta, senza ripetizione. Sono le disposizioni semplici della D07: $10 \cdot 9 \cdot 8 \cdot 7 = 5040$.
> 2. «Un allenatore ha 3 portieri, 8 difensori, 8 centrocampisti e 6 attaccanti. In quanti modi può scegliere 1 portiere, 4 difensori, 4 centrocampisti e 2 attaccanti?» Quattro scelte da fare tutte, ognuna senza ordine: $\binom{3}{1} \cdot \binom{8}{4} \cdot \binom{8}{4} \cdot \binom{6}{2} = 3 \cdot 70 \cdot 70 \cdot 15 = 220\,500$.
> 3. «Ho 15 monete da 1 euro e 4 salvadanai. In quanti modi posso mettere tutte le monete nei 4 salvadanai in modo che nessuno sia vuoto?» Le monete sono uguali: conta solo quante ne finiscono in ogni salvadanaio. È una combinazione con ripetizione di 15 elementi da 4 tipi, con almeno uno per tipo, come nella D08: se ne mette una per salvadanaio e restano 11 monete libere, $\binom{11 + 4 - 1}{11} = \binom{14}{3} = 364$.

Le tre risposte sono le soluzioni ufficiali. Nota che la stessa parola, «modi», nasconde tre conti diversi: è il tipo di oggetto che si conta a decidere.

::: prova Prova scritta del 14/07/2020: il circolo di tennis ha 8 tennisti e 5 tenniste, e deve scegliere 4 tennisti per i singolari maschili e 2 tenniste per quelli femminili. Quante squadre può formare? E in quanti ordini si possono giocare i 7 incontri, se si giocano prima i 4 singolari maschili, poi i 2 femminili, poi il doppio?
Squadre: due scelte da fare tutte, senza ordine, $\binom{8}{4} \cdot \binom{5}{2} = 70 \cdot 10 = 700$. Ordini: i 4 maschili si ordinano in $4! = 24$ modi, i 2 femminili in $2! = 2$, e il doppio è fisso in fondo: $24 \cdot 2 = 48$. Sono le soluzioni ufficiali.
:::

> [!RICORDA]
> - Prima si spezza il problema in scelte, poi si sceglie una formula per ogni scelta.
> - Scelte da fare tutte: si moltiplica. Casi che si escludono: si somma.

## Contare per casi (esercizio 3.13)

A volte il vincolo non si traduce in una scelta sola. Il modo sicuro è elencare le **situazioni possibili**, contarle una per una e sommare. Servono due controlli: i casi non devono sovrapporsi (altrimenti si conta due volte), e devono coprire tutto.

L'esercizio 3.13 del libro: alle semifinali dei 100 metri arrivano 16 atleti, divisi in due semifinali da 8. Di loro 9 sono europei e 7 no. Quante distribuzioni ci sono se in ogni semifinale ci sono **al massimo 6 europei**?

Basta decidere chi va nella prima semifinale: gli altri 8 vanno nella seconda. Il vincolo dipende da quanti europei finiscono nella prima, e conviene chiamare questo numero $e$.

- Nella prima ci sono $e$ europei, quindi nella seconda $9 - e$. Il vincolo chiede $e \le 6$ e $9 - e \le 6$, cioè $e$ tra 3 e 6.
- Per ogni valore di $e$ si fanno due scelte: gli $e$ europei tra 9, e gli $8 - e$ non europei tra 7.

| $e$ | europei | non europei | distribuzioni |
|:-:|:-:|:-:|:-:|
| 3 | $\binom{9}{3} = 84$ | $\binom{7}{5} = 21$ | 1764 |
| 4 | $\binom{9}{4} = 126$ | $\binom{7}{4} = 35$ | 4410 |
| 5 | $\binom{9}{5} = 126$ | $\binom{7}{3} = 35$ | 4410 |
| 6 | $\binom{9}{6} = 84$ | $\binom{7}{2} = 21$ | 1764 |

In tutto $1764 + 4410 + 4410 + 1764 = 12\,348$. I casi si escludono, perché la prima semifinale ha un solo numero di europei, e coprono tutto: per questo si sommano.

Un controllo: senza vincoli le distribuzioni sono $\binom{16}{8} = 12\,870$. Quelle escluse sono i casi con $e$ uguale a 1, 2, 7 o 8, cioè $9 + 252 + 252 + 9 = 522$, e $12\,870 - 522 = 12\,348$. L'ho controllato anche con un programma che prova tutte le distribuzioni.

::: prova Nello stesso problema, quante distribuzioni mettono tutti i 7 non europei nella stessa semifinale?
Se sono tutti nella prima, il posto rimasto va a uno dei 9 europei: $\binom{7}{7} \cdot \binom{9}{1} = 9$. Lo stesso se sono tutti nella seconda: altri 9. I due casi si escludono, in tutto 18.
:::

> [!RICORDA]
> - Analisi dei casi: una variabile che distingue le situazioni, un conto per ogni valore, poi la somma.
> - I casi non si sovrappongono e coprono tutto.
> - Il conto del contrario è un buon controllo.

## I bordi e la simmetria (Prop. 3.33, parti 1 e 2)

Prima di Stiefel, due proprietà già viste nella D08, che il libro raccoglie nella stessa proposizione. Da un insieme di 7 elementi c'è un solo modo di non prendere niente (l'insieme vuoto) e un solo modo di prendere tutto. E scegliere 2 elementi da tenere equivale a scegliere i 5 da lasciare fuori.

> [!PROP] 3.33 · Proprietà dei coefficienti binomiali (parti 1 e 2)
> 1. Per ogni $n \ge 0$, $\binom{n}{0} = \binom{n}{n} = 1$.
> 2. Per ogni coppia di interi con $n \ge 0$ e $0 \le k \le n$, $\binom{n}{k} = \binom{n}{n-k}$.

**Come si legge.** La prima parte: i sottoinsiemi con 0 elementi e con $n$ elementi sono uno solo ciascuno. Con la formula, $\frac{n!}{0! \, n!} = 1$, perché $0! = 1$. La seconda è la simmetria della D08: il libro la dimostra con il complementare, oppure scrivendo la formula, in cui $k!$ e $(n-k)!$ si scambiano di posto.

::: prova Quanto valgono $\binom{9}{9}$, $\binom{9}{0}$ e $\binom{9}{7}$?
1, 1 e, per la simmetria, $\binom{9}{2} = \frac{9 \cdot 8}{2} = 36$.
:::

> [!RICORDA]
> - Ai bordi vale 1: $\binom{n}{0} = \binom{n}{n} = 1$.
> - Simmetria: $\binom{n}{k} = \binom{n}{n-k}$.

## La formula di Stiefel (Proposizione 3.33, parte 3)

Cinque amici, Anna, Bruno, Carla, Dario ed Elisa, devono formare un comitato di 3. I comitati sono $\binom{5}{3} = 10$. Si possono contare anche in un altro modo, guardando solo Anna.

- I comitati **con** Anna: Anna c'è, e restano da scegliere 2 persone tra le altre 4, cioè $\binom{4}{2} = 6$.
- I comitati **senza** Anna: tutte e 3 le persone vanno scelte tra le altre 4, cioè $\binom{4}{3} = 4$.

Ogni comitato contiene Anna oppure no, mai tutte e due le cose: $6 + 4 = 10$.

```grafico
titolo: I 10 comitati di 3 persone su 5, divisi in due gruppi: a sinistra i 6 che contengono Anna (A), a destra i 4 che non la contengono. È la formula di Stiefel con n = 5 e k = 3.
x: 0 12.6
y: 0.2 5
assi: no
griglia: no
proporzioni: libere
poligono: 0.2 0.6 6.4 0.6 6.4 4 0.2 4 | blu
testo: 3.3 4.5 | blu | "con Anna: $\binom{4}{2} = 6$"
testo: 1.8 3.3 | blu | "{A, B, C}"
testo: 4.8 3.3 | blu | "{A, B, D}"
testo: 1.8 2.3 | blu | "{A, B, E}"
testo: 4.8 2.3 | blu | "{A, C, D}"
testo: 1.8 1.3 | blu | "{A, C, E}"
testo: 4.8 1.3 | blu | "{A, D, E}"
poligono: 6.8 0.6 12.4 0.6 12.4 4 6.8 4 | ambra
testo: 9.6 4.5 | ambra | "senza Anna: $\binom{4}{3} = 4$"
testo: 8.25 2.9 | ambra | "{B, C, D}"
testo: 10.95 2.9 | ambra | "{B, C, E}"
testo: 8.25 1.6 | ambra | "{B, D, E}"
testo: 10.95 1.6 | ambra | "{C, D, E}"
```

Il ragionamento non dipende dai numeri: con $n$ persone e comitati di $k$, si fissa una persona, e i comitati con lei sono $\binom{n-1}{k-1}$ (si scelgono le altre $k - 1$), quelli senza di lei sono $\binom{n-1}{k}$.

> [!PROP] 3.33 · Formula di Stiefel (parte 3)
> Per ogni coppia di interi $k$ ed $n$ con $n \ge 1$ e $1 \le k \le n$,
> $$\binom{n-1}{k-1} + \binom{n-1}{k} = \binom{n}{k}.$$

**Come si legge.** A destra ci sono tutti i sottoinsiemi di $k$ elementi di un insieme $A$ con $n$ elementi. A sinistra gli stessi, divisi in due gruppi rispetto a un elemento $a$ fissato: quelli che contengono $a$, che sono tanti quanti i sottoinsiemi di $k - 1$ elementi in $A \setminus \{a\}$, e quelli che non lo contengono, che sono sottoinsiemi di $k$ elementi di $A \setminus \{a\}$. È la dimostrazione del libro, la stessa del comitato. Quando $k = n$ il secondo addendo è $\binom{n-1}{n}$, che vale 0: non ci sono sottoinsiemi più grandi dell'insieme.

> [!DIM] La seconda dimostrazione del libro, solo con la formula
> Si mettono le due frazioni allo stesso denominatore $k!\,(n-k)!$:
> $$\binom{n-1}{k-1} + \binom{n-1}{k} = \frac{(n-1)!}{(k-1)!\,(n-k)!} + \frac{(n-1)!}{k!\,(n-1-k)!}.$$
> Nella prima frazione si moltiplica sopra e sotto per $k$, nella seconda per $n - k$:
> $$= \frac{k\,(n-1)! + (n-k)\,(n-1)!}{k!\,(n-k)!} = \frac{n\,(n-1)!}{k!\,(n-k)!} = \frac{n!}{k!\,(n-k)!} = \binom{n}{k}.$$
> La seconda frazione ha senso solo per $k \le n - 1$; per $k = n$ la formula si controlla a mano: $1 + 0 = 1$.

::: prova Controlla la formula con $n = 6$ e $k = 2$, calcolando i tre coefficienti.
$\binom{5}{1} + \binom{5}{2} = 5 + 10 = 15$, e $\binom{6}{2} = \frac{6 \cdot 5}{2} = 15$.
:::

> [!RICORDA]
> - Stiefel: si fissa un elemento e si separano i sottoinsiemi che lo contengono da quelli che non lo contengono.
> - I primi sono $\binom{n-1}{k-1}$, i secondi $\binom{n-1}{k}$.

## Il triangolo di Tartaglia (p. 60)

Con la formula di Stiefel i coefficienti binomiali di una riga si ottengono da quelli della riga prima. Si possono quindi costruire uno dopo l'altro, senza fattoriali. Il libro dà il procedimento:

1. la riga $n = 0$ contiene solo 1;
2. ogni riga nuova comincia e finisce con 1;
3. ogni altro numero è la somma dei due numeri della riga sopra, quello nella stessa posizione e quello a sinistra.

Disposti al centro, i numeri formano un triangolo, il **triangolo di Pascal-Tartaglia**. Nella riga $n$, al posto $k$ (contando da 0), c'è $\binom{n}{k}$.

```grafico
titolo: Le righe da 0 a 6 del triangolo di Tartaglia. Ogni numero è la somma dei due sopra: in verde 5 e 10 della riga 5, che danno 15 nella riga 6. È Stiefel: $\binom{5}{1} + \binom{5}{2} = \binom{6}{2}$.
x: -0.5 12
y: 0.3 7
assi: no
griglia: no
proporzioni: libere
testo: 0.5 6.5 | grigio | "n = 0"
testo: 0.5 5.55 | grigio | "n = 1"
testo: 0.5 4.6 | grigio | "n = 2"
testo: 0.5 3.65 | grigio | "n = 3"
testo: 0.5 2.7 | grigio | "n = 4"
testo: 0.5 1.75 | grigio | "n = 5"
testo: 0.5 0.8 | grigio | "n = 6"
testo: 6 6.5 | blu | "1"
testo: 5.3 5.55 | blu | "1"
testo: 6.7 5.55 | blu | "1"
testo: 4.6 4.6 | blu | "1"
testo: 6 4.6 | blu | "2"
testo: 7.4 4.6 | blu | "1"
testo: 3.9 3.65 | blu | "1"
testo: 5.3 3.65 | blu | "3"
testo: 6.7 3.65 | blu | "3"
testo: 8.1 3.65 | blu | "1"
testo: 3.2 2.7 | blu | "1"
testo: 4.6 2.7 | blu | "4"
testo: 6 2.7 | blu | "6"
testo: 7.4 2.7 | blu | "4"
testo: 8.8 2.7 | blu | "1"
testo: 2.5 1.75 | blu | "1"
testo: 3.9 1.75 | verde | "5"
testo: 5.3 1.75 | verde | "10"
testo: 6.7 1.75 | blu | "10"
testo: 8.1 1.75 | blu | "5"
testo: 9.5 1.75 | blu | "1"
testo: 1.8 0.8 | blu | "1"
testo: 3.2 0.8 | blu | "6"
testo: 4.6 0.8 | accento | "15"
testo: 6 0.8 | blu | "20"
testo: 7.4 0.8 | blu | "15"
testo: 8.8 0.8 | blu | "6"
testo: 10.2 0.8 | blu | "1"
freccia: 4.05 1.5 4.45 1.08 | verde
freccia: 5.15 1.5 4.75 1.08 | verde
```

Nel triangolo si vedono le proprietà della sezione prima: i bordi valgono 1, e ogni riga è simmetrica, perché $\binom{n}{k} = \binom{n}{n-k}$. Si vede anche che la seconda posizione di ogni riga vale $n$, perché $\binom{n}{1} = n$.

::: prova Costruisci la riga $n = 7$ partendo dalla riga 6 del disegno, 1 6 15 20 15 6 1.
1, 1 + 6 = 7, 6 + 15 = 21, 15 + 20 = 35, 20 + 15 = 35, 21, 7, 1. La riga è 1 7 21 35 35 21 7 1, come nella tabella del libro.
:::

> [!RICORDA]
> - Nel triangolo ogni numero è la somma dei due sopra: è la formula di Stiefel.
> - Riga $n$, posto $k$ (da 0): $\binom{n}{k}$. Bordi a 1, righe simmetriche.

## La somma di una riga (Proposizione 3.35 e nota 3.36)

Somma i numeri di una riga del triangolo: $1 + 4 + 6 + 4 + 1 = 16$ nella riga 4, $1 + 5 + 10 + 10 + 5 + 1 = 32$ nella riga 5. Escono sempre potenze di 2, e c'è un motivo.

Nella lezione D01 un insieme $A$ con $n$ elementi ha $2^n$ sottoinsiemi. Si possono contare per grandezza: quelli con 0 elementi, quelli con 1, e così via fino a $n$. I sottoinsiemi di $k$ elementi sono $\binom{n}{k}$, i gruppi non si sovrappongono e coprono tutto l'insieme delle parti: sono una partizione, come nella D02. Quindi la somma della riga $n$ è il numero di tutti i sottoinsiemi.

> [!PROP] 3.35 · Somma dei coefficienti binomiali
> Per ogni intero $n \ge 0$,
> $$\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \dots + \binom{n}{n} = 2^n.$$

**Come si legge.** A sinistra i sottoinsiemi di un insieme di $n$ elementi contati per grandezza, a destra contati tutti insieme. Il libro lo dimostra con il binomio di Newton della prossima lezione; la nota 3.36 dà la dimostrazione con l'insieme delle parti che ho scritto sopra. L'esercizio 3.17 chiede una terza dimostrazione, per induzione con la formula di Stiefel.

::: prova Quanti sottoinsiemi di $\{1, 2, 3, 4, 5, 6\}$ hanno almeno 2 elementi?
Tutti sono $2^6 = 64$. Si tolgono quelli con 0 o 1 elemento, $\binom{6}{0} + \binom{6}{1} = 1 + 6 = 7$: restano $64 - 7 = 57$.
:::

> [!RICORDA]
> - La somma della riga $n$ del triangolo è $2^n$: tutti i sottoinsiemi, contati per grandezza.
> - Utile per gli «almeno»: tutti meno quelli troppo piccoli.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\binom{n}{k}$ | «n su k» | il numero dei sottoinsiemi di $k$ elementi di un insieme di $n$ | $\binom{5}{3} = 10$ |
| $\binom{n-1}{k-1} + \binom{n-1}{k}$ | «formula di Stiefel» | i sottoinsiemi con e senza un elemento fissato | $6 + 4 = 10$ |
| $A \setminus \{a\}$ | «A meno a» | l'insieme $A$ senza l'elemento $a$ (lezione D02) | $\{1, 2, 3\} \setminus \{1\} = \{2, 3\}$ |
| $2^n$ | «2 alla n» | il numero di tutti i sottoinsiemi di un insieme di $n$ elementi | $2^4 = 16$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Al 23/10/2026 le regole del 2026/27 non sono ancora uscite; quelle del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **Il problema di combinatoria.** È quasi sempre in tre parti, come quelli di questa lezione, e il testo dice: «Non è necessario calcolare gli esponenziali, i fattoriali e i coefficienti binomiali». Si lascia la risposta come prodotto o somma di coefficienti binomiali, ma si **spiega** da dove viene ogni pezzo.
2. **La domanda 4 del quiz.** Chiede di scegliere la formula giusta tra cinque: sono le quattro caselle della D08 più qualche formula sbagliata che le somiglia.
3. **Stiefel e il triangolo** non sono mai stati chiesti da soli negli appelli 2025–2026. Servono però a fare i conti a mano senza fattoriali, e sono la base del binomio di Newton.

### Una domanda vera, letta insieme

**Prova scritta del 22 e 23/02/2021, problema 2.** Il testo: «Adriana, Berto e Camilla giocano con un mazzo di 40 carte, 10 di ciascun seme. 1. Scelte 12 carte coperte dal mazzo, quanti modi ci sono per distribuirle fra i tre giocatori? 2. Adriana ha ricevuto 2 carte e sono entrambe di cuori. Quante sono le possibili mani di Adriana? 3. Berto ha ricevuto 3 carte e Camilla 7. Quante possono essere complessivamente le loro mani se entrambi hanno ricevuto lo stesso numero di carte di cuori?»

**In pratica chiede:** tre conti diversi, il terzo con l'analisi dei casi.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: le carte coperte.** Le 12 carte sono coperte: non si sa quali siano, conta solo **quante** ne riceve ciascuno. È una combinazione con ripetizione di 12 elementi da 3 tipi: $\binom{12 + 3 - 1}{2} = \binom{14}{2} = 91$.
>
> **Passo 2: la mano di Adriana.** Due carte scelte tra le 10 di cuori, senza ordine: $\binom{10}{2} = 45$.
>
> **Passo 3: i casi.** Berto ha 3 carte, quindi le carte di cuori di ognuno, chiamiamole $k$, possono essere 0, 1, 2 o 3. Per ogni $k$ le scelte da fare tutte sono quattro: le $k$ carte di cuori di Berto, $\binom{10}{k}$; le sue $3 - k$ altre carte tra le 30 non di cuori, $\binom{30}{3-k}$; le $k$ carte di cuori di Camilla tra quelle rimaste, $\binom{10-k}{k}$; le sue $7 - k$ altre carte tra le $27 + k$ non di cuori rimaste, $\binom{27+k}{7-k}$.
>
> **Passo 4: la somma.** I casi si escludono: si somma su $k$ da 0 a 3 il prodotto dei quattro coefficienti. La soluzione ufficiale si ferma qui, lasciando i coefficienti indicati. Fatti i conti con un programma, sono 22 958 812 800 coppie di mani.
>
> La soluzione ufficiale avverte che il punto 3 si risolve a prescindere dalla mano di Adriana, e che altre interpretazioni si trattano allo stesso modo.

**Errori da evitare**

- Scegliere la formula prima di aver capito che cosa si conta: oggetti uguali (le carte coperte, le monete) o diversi (le persone).
- Nell'analisi dei casi, dimenticare un caso (qui $k = 0$) o contarne due volte uno.
- Lasciare un numero senza spiegazione: all'esame «motivando adeguatamente le risposte» vuol dire scrivere quale scelta conta ogni coefficiente.

## Quiz

```quiz
D: Appello del 14/01/2025. Quanti modi ci sono per far sedere 7 persone in una fila di 13 sedie?
+ $\frac{13!}{6!}$
- $13!$
- $\frac{13!}{7!}$
- $13^7$
- $7^{13}$
= Ogni persona prende una sedia diversa e conta chi sta dove: disposizioni semplici, $13 \cdot 12 \cdots 7 = \frac{13!}{6!}$. La risposta più insidiosa è $\frac{13!}{7!}$, che divide per il fattoriale delle persone invece che delle 6 sedie vuote.

D: Appello del 10/09/2026. La birreria Qvizz produce 10 birre e offre delle degustazioni di 3 a scelta. Quante sono le possibili degustazioni?
+ $\frac{10!}{3! \cdot 7!}$
- $\frac{10!}{7!}$
- $\frac{10!}{3!}$
- $\frac{10!}{3 \cdot 6}$
- $10!$
= L'ordine non conta e le birre sono diverse: $\binom{10}{3} = 120$. La risposta più insidiosa è $\frac{10!}{7!}$: sono le degustazioni con l'ordine.

D: Appello del 07/07/2025. Si vogliono colorare le caselle di una griglia con 7 righe e 3 colonne avendo 4 colori a disposizione, ripetibili. Quante sono le colorazioni possibili?
+ $4^{21}$
- $21^4$
- $\frac{21!}{4!}$
- $21 \cdot 4$
- $21! \cdot 4$
= Ognuna delle 21 caselle sceglie uno dei 4 colori: disposizioni con ripetizione, $4^{21}$. La risposta più insidiosa è $21^4$, con base ed esponente scambiati.

D: Appello del 03/02/2026. Da una scatola con palline bianche e nere se ne estraggono in successione 11. Quante sono le estrazioni che iniziano con 5 palline bianche?
+ $2^6$
- $6^2$
- $\frac{11!}{5!}$
- $\frac{11!}{6!}$
- $11!$
= Le prime 5 sono fissate (bianche); le altre 6 possono essere bianche o nere: $2^6 = 64$. La risposta più insidiosa è $6^2$, ancora con base ed esponente scambiati.

D: Appello del 13/01/2026. Le 8 caselle di una riga devono essere colorate di nero o di viola in modo che ci siano esattamente 6 caselle viola. Quanti sono i modi di farlo?
+ $\binom{8}{2}$
- $\binom{6}{2}$
- $8!$
- $\frac{8!}{2!}$
- $8! - 2!$
= Si scelgono le 6 caselle viola, o le 2 nere: $\binom{8}{6} = \binom{8}{2} = 28$. La risposta più insidiosa è $\binom{6}{2}$, che sceglie tra le caselle viola invece che tra tutte.

D: Quanto vale $\binom{7}{3} + \binom{7}{4}$?
+ $\binom{8}{4}$
- $\binom{8}{3}$
- $\binom{14}{7}$
- $\binom{7}{7}$
- $\binom{8}{7}$
= Per Stiefel con $n = 8$ e $k = 4$: $\binom{7}{3} + \binom{7}{4} = \binom{8}{4} = 70$, cioè $35 + 35$. La risposta più insidiosa è $\binom{8}{3} = 56$: in basso va il $k$ più grande dei due, non il più piccolo. $\binom{14}{7}$ somma sopra e sotto, che non si fa.

D: Quanto vale la somma della riga 9 del triangolo di Tartaglia, $\binom{9}{0} + \binom{9}{1} + \dots + \binom{9}{9}$?
N: 512
= È il numero di tutti i sottoinsiemi di un insieme di 9 elementi: $2^9 = 512$.

D: Prova scritta del 12/02/2020. In quanti modi si possono mettere 15 monete da 1 euro in 4 salvadanai senza lasciarne nessuno vuoto?
+ $\binom{14}{3}$
- $\binom{15}{4}$
- $4^{15}$
- $\binom{18}{3}$
- $\frac{15!}{11!}$
= Le monete sono uguali: si mette una moneta per salvadanaio e le altre 11 si distribuiscono con ripetizione tra 4, $\binom{11 + 3}{3} = \binom{14}{3} = 364$. La risposta più insidiosa è $\binom{18}{3}$, che conta anche i salvadanai vuoti. $4^{15}$ tratterebbe le monete come diverse.
```

## Esercizi

::: esercizio base Riscaldamento: Stiefel con i numeri
Calcola con la formula di Stiefel, senza fattoriali, $\binom{6}{3}$ sapendo che $\binom{5}{2} = 10$ e $\binom{5}{3} = 10$. Poi controlla con la formula del coefficiente binomiale.
::: soluzione
$\binom{6}{3} = \binom{5}{2} + \binom{5}{3} = 10 + 10 = 20$. Con la formula: $\frac{6 \cdot 5 \cdot 4}{3!} = \frac{120}{6} = 20$.
:::

::: esercizio base Riscaldamento: la riga 8
Costruisci la riga $n = 8$ del triangolo di Tartaglia dalla riga 7, 1 7 21 35 35 21 7 1, e controlla che la somma sia $2^8$.
::: soluzione
1, 8, 28, 56, 70, 56, 28, 8, 1. La somma è $1 + 8 + 28 + 56 + 70 + 56 + 28 + 8 + 1 = 256 = 2^8$.
:::

::: esercizio base Riscaldamento: quale formula?
Per ognuna, spezza in scelte e conta. (a) Le squadre di 2 maschi e 2 femmine in una classe di 10 maschi e 12 femmine. (b) I modi di dare 3 medaglie diverse (oro, argento, bronzo) a 3 dei 10 maschi. (c) I sacchetti di 6 caramelle da 4 gusti.
::: soluzione
(a) Due scelte da fare tutte: $\binom{10}{2} \cdot \binom{12}{2} = 45 \cdot 66 = 2970$. (b) L'ordine conta: $10 \cdot 9 \cdot 8 = 720$. (c) Con ripetizione, senza ordine: $\binom{6 + 4 - 1}{6} = \binom{9}{3} = 84$.
:::

::: esercizio medio Esercizio 3.13 a) e b) del libro: le semifinali
I 16 atleti vanno divisi in due semifinali da 8. (a) Quante distribuzioni ci sono senza condizioni? (b) Quante se i 4 atleti con i tempi migliori devono essere 2 per semifinale?
::: soluzione
(a) Si scelgono gli 8 della prima semifinale: $\binom{16}{8} = 12\,870$. (b) Due scelte da fare tutte per la prima semifinale: 2 dei 4 migliori, $\binom{4}{2} = 6$, e 6 degli altri 12, $\binom{12}{6} = 924$. In tutto $6 \cdot 924 = 5544$. Qui le due semifinali sono distinte (la prima e la seconda); se non lo fossero, ogni distribuzione sarebbe contata due volte.
:::

::: esercizio medio Quanti sottoinsiemi con almeno 3 elementi
Quanti sottoinsiemi di un insieme di 8 elementi hanno almeno 3 elementi? Usa la somma della riga.
::: soluzione
Tutti sono $2^8 = 256$. Quelli con 0, 1 o 2 elementi sono $1 + 8 + 28 = 37$. Restano $256 - 37 = 219$.
:::

::: esercizio esame Il circolo di tennis, sul modello della prova scritta del 14/07/2020
Il circolo «Rosewall» ha 7 tennisti e 6 tenniste. Deve scegliere 4 tennisti per i singolari maschili e 2 tenniste per quelli femminili, e poi, tra i 6 scelti, un tennista e una tennista per il doppio misto. Quante sono le scelte complessive?
::: soluzione
Tre scelte da fare tutte: i 4 tennisti, $\binom{7}{4} = 35$; le 2 tenniste, $\binom{6}{2} = 15$; la coppia del doppio, uno dei 4 tennisti e una delle 2 tenniste, $4 \cdot 2 = 8$. In tutto $35 \cdot 15 \cdot 8 = 4200$. È lo stesso schema dell'esercizio d'esame, con numeri diversi.
:::

::: esercizio esame Le carte di cuori: la prova scritta del 22 e 23/02/2021 con un mazzo più piccolo
Un mazzo ha 20 carte, 5 di cuori. Berto riceve 2 carte e Camilla 3, tutte diverse. Quante sono le coppie di mani in cui hanno lo stesso numero di carte di cuori?
::: soluzione
Il numero $k$ di carte di cuori di ciascuno può essere 0, 1 o 2. Per ogni $k$ ci sono quattro scelte. Per Berto: le cuori, $\binom{5}{k}$, e le altre carte, $\binom{15}{2-k}$. Per Camilla: le cuori tra le $5 - k$ rimaste, $\binom{5-k}{k}$, e le altre tra le $13 + k$ non di cuori rimaste, $\binom{13+k}{3-k}$. Con $k = 0$: $1 \cdot 105 \cdot 1 \cdot 286 = 30\,030$. Con $k = 1$: $5 \cdot 15 \cdot 4 \cdot 91 = 27\,300$. Con $k = 2$: $10 \cdot 1 \cdot 3 \cdot 15 = 450$. In tutto $57\,780$. L'ho controllato con un programma che prova tutte le mani.
:::

::: esercizio difficile Esercizio 3.18 del libro: Stiefel due volte
Se $n \ge 2$ e $2 \le k \le n - 2$, dimostra che $\binom{n}{k} = \binom{n-2}{k-2} + 2\binom{n-2}{k-1} + \binom{n-2}{k}$.
::: soluzione
Si applica Stiefel a $\binom{n}{k}$: $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$. Poi di nuovo a ciascun addendo: $\binom{n-1}{k-1} = \binom{n-2}{k-2} + \binom{n-2}{k-1}$ e $\binom{n-1}{k} = \binom{n-2}{k-1} + \binom{n-2}{k}$. Sommando, $\binom{n-2}{k-1}$ compare due volte. Nel triangolo: un numero è la somma dei tre numeri due righe sopra, con quello centrale contato due volte. Con $n = 6$, $k = 3$: $\binom{4}{1} + 2\binom{4}{2} + \binom{4}{3} = 4 + 12 + 4 = 20 = \binom{6}{3}$.
:::

::: esercizio difficile Esercizio 3.19 del libro: pari e dispari
Sia $n$ dispari. Dimostra che la somma dei $\binom{n}{k}$ con $k$ pari è uguale alla somma di quelli con $k$ dispari.
::: soluzione
Per la simmetria $\binom{n}{k} = \binom{n}{n-k}$. Se $n$ è dispari, $k$ e $n - k$ hanno parità diverse: uno è pari e l'altro dispari. Quindi i termini della riga si accoppiano, ognuno pari con uno dispari uguale, e le due somme sono uguali. Siccome insieme fanno $2^n$, ognuna vale $2^{n-1}$. Con $n = 5$: $1 + 10 + 5 = 16$ e $5 + 10 + 1 = 16$. Il libro chiede anche se vale per $n$ pari: con $n = 4$, $1 + 6 + 1 = 8$ e $4 + 4 = 8$, ma l'argomento della simmetria non basta più; la dimostrazione viene con il binomio di Newton.
:::

## Domande di ripasso

::: domanda Come si affronta un problema di combinatoria con più richieste?
Si spezza in scelte; per ognuna ci si chiede se l'ordine conta e se si ripete; poi si moltiplicano le scelte da fare tutte e si sommano i casi alternativi.
:::

::: domanda Quando serve l'analisi dei casi?
Quando un vincolo divide le situazioni in tipi diversi, ognuno con un conto diverso: si conta ogni caso e si somma, controllando che i casi non si sovrappongano e coprano tutto.
:::

::: domanda Che cosa dice la formula di Stiefel, a parole?
I sottoinsiemi di $k$ elementi di un insieme di $n$ si dividono in quelli che contengono un elemento fissato, $\binom{n-1}{k-1}$, e quelli che non lo contengono, $\binom{n-1}{k}$.
:::

::: domanda Come si costruisce il triangolo di Tartaglia?
Ogni riga comincia e finisce con 1; ogni altro numero è la somma dei due sopra. Nella riga $n$, al posto $k$, c'è $\binom{n}{k}$.
:::

::: domanda Perché la somma della riga $n$ del triangolo è $2^n$?
Perché conta i sottoinsiemi di un insieme di $n$ elementi divisi per grandezza, e in tutto i sottoinsiemi sono $2^n$.
:::

## Glossario

```glossario
Scelte successive | Scelte da fare tutte, una dopo l'altra: i numeri si moltiplicano.
Analisi dei casi | Dividere un problema in situazioni che si escludono, contarle a parte e sommare.
Formula di Stiefel | n su k è uguale a (n−1 su k−1) più (n−1 su k): con e senza un elemento fissato.
Triangolo di Tartaglia | La tabella dei coefficienti binomiali, riga per riga; ogni numero è la somma dei due sopra.
Somma di una riga | La somma dei coefficienti binomiali di n è 2 alla n, il numero di tutti i sottoinsiemi.
```

## Checklist

```checklist
- So spezzare un problema di combinatoria in scelte e scegliere la formula per ognuna.
- So quando moltiplicare e quando sommare.
- So fare un'analisi dei casi e controllarla con il conto del contrario.
- So le proprietà ai bordi e la simmetria dei coefficienti binomiali.
- So spiegare la formula di Stiefel con un elemento fissato, e controllarla con i numeri.
- So costruire il triangolo di Tartaglia e leggerci i coefficienti binomiali.
- So perché la somma di una riga è 2 alla n, e usarla per gli «almeno».
- So risolvere i problemi d'esame del 12/02/2020, del 14/07/2020 e del 22 e 23/02/2021.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta*, 2ª edizione, testo del canale B: capitolo 3 «Combinatorica», pp. 57–58 (problemi con scelte successive e analisi dei casi), pp. 58–60 (proposizioni 3.32 e 3.33 con le dimostrazioni, procedimento e tabella del triangolo di Pascal-Tartaglia), p. 61 (proposizione 3.35 e nota 3.36); esercizi 3.13, 3.15, 3.17, 3.18 e 3.19 (p. 66). Le definizioni e gli enunciati nei riquadri riprendono il libro. Il binomio di Newton (teorema 3.34, pp. 60–61) è per la prossima lezione.
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori): lezione 9 (risoluzione di problemi di combinatoria, proprietà dei coefficienti binomiali, formula di Stiefel) e lezione 10 (triangolo di Tartaglia-Pascal, binomio di Newton). Gli argomenti della lezione del 23/10/2026 non erano pubblicati quando ho scritto questi appunti.
- Problemi delle prove scritte di Matematica Discreta del 12/02/2020 (esercizio 1), 14/07/2020 (esercizio 1) e 22 e 23/02/2021 (problema 2), con le soluzioni ufficiali; domande 4 dei quiz degli appelli del 14/01/2025, 07/07/2025, 13/01/2026, 03/02/2026 e 10/09/2026.
- Tutti i numeri li ho controllati con Python (`math.comb`), e i conti dell'esercizio 3.13 e delle carte di cuori con il mazzo da 20 anche provando tutte le possibilità.
