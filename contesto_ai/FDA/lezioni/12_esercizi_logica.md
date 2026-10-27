---
corso: FDA
lezione: "12"
data: 2026-10-26
titolo: Esercizi di logica, connettivi, regole e quantificatori
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 12 · Libro, parte 2, §1.2–1.6 (esercizi)
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 12 di Fondamenti dell'Informatica (canale B), la lezione di esercizi che chiude il capitolo 1
  della parte 2: tavole di verità e tautologie, traduzioni con «se», «solo se» e «tranne», equivalenze e negazioni,
  argomentazioni valide e non valide, catene di regole di inferenza, quantificatori semplici e annidati, quantificatori
  ristretti, con le domande dell'autoverifica del capitolo 1, gli esempi di Felice Cardone e le domande vere delle
  simulazioni d'esame 2023/24.
lede: >-
  Il capitolo 1 della parte 2 finisce qui. Per ogni argomento delle lezioni 06–11 trovi il procedimento in poche righe ed
  esercizi svolti, dal più facile a quello da esame. In fondo, le domande di logica delle simulazioni e un quiz lungo.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 1), §1.2–1.6
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 3–4 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 1), autoverifica del capitolo 1 con le
  soluzioni pubblicate sul Moodle del canale A; F. Cardone, note «Alcuni esempi relativi a formalizzazione,
  connettivi proposizionali e quantificatori», «La relazione di conseguenza per la logica proposizionale» e «Svedesi e
  Protestanti» (Moodle del canale A); simulazioni d'esame 2023/24; diario del canale B
appunti_html: appunti/FDA/12_esercizi_logica.html
genera_html: true
---

## In breve

- È una lezione di **esercizi**: niente argomenti nuovi. Ripassa le lezioni [06](06_proposizioni_connettivi_tavole.html)–[11](11_quantificatori_annidati.html), cioè il capitolo 1 della parte 2 tranne gli insiemi.
- Ogni sezione comincia con un riquadro **Metodo** e il link alla lezione dove l'argomento è spiegato; poi esercizi svolti, dal più facile a quello da esame.
- Molti esercizi vengono dall'**autoverifica** del capitolo 1 del libro e dalle note di Felice Cardone, docente del canale A.
- Per decidere se una formula è sempre vera, o se un'argomentazione è valida, conviene **cercare il caso che la rende falsa**: se non esiste, hai finito.
- Una frase come «tutti sono protestanti tranne gli svedesi» dice due cose insieme, e diventa un **se e solo se**.
- Per negare frasi con «ogni elemento di A» o «qualche elemento di B» si usano le regole delle lezioni 09 e 11, più quella per negare una freccia: il risultato contiene un «e».

> [!CANALI]
> Nel canale B è la lezione di lunedì 26/10, dalle 9 alle 11. Per il docente è la lezione 13, perché la prima è stata un'introduzione: qui è la 12. Il diario del canale B la annuncia così: «Fine Capitolo 1, Parte 2. Esercizi sulle lezioni 07-12: Connettivi booleani, quantificatori, Regole Logiche». Le lezioni 07–12 del docente sono le [06](06_proposizioni_connettivi_tavole.html)–[11](11_quantificatori_annidati.html) di questi appunti. Non so quali esercizi abbia fatto in aula: qui ci sono le domande dell'autoverifica del capitolo 1 del libro, con le risposte dell'appendice pubblicata sul Moodle del canale A (id 3851, aperto agli ospiti), gli esempi delle note di Felice Cardone sullo stesso Moodle, le domande di logica delle simulazioni d'esame 2023/24 e altri esercizi miei. Il §1.1 sugli insiemi, che il docente ha rimandato, nel corso di Matematica Discreta è nelle lezioni [D01](../MDAG/D01_insiemi_induzione.html) e [D02](../MDAG/D02_complementare_induzione_partizioni.html).

## Tavole di verità e tautologie (lezione 06)

Un quiz su una formula chiede quasi sempre una di due cose: il suo valore in alcune righe, oppure se è vera in tutte le righe. Per la prima si calcola riga per riga; per la seconda conviene ragionare sui casi, e fare la tavola solo se il ragionamento non basta.

> [!METODO] Valore e tautologie (lezione 06)
> 1. **Valore in una riga**: sostituisci le lettere e calcola dall'interno delle parentesi verso l'esterno.
> 2. **È una tautologia?** Cerca una riga che la renda falsa. Per un «o» devono essere falsi tutti i pezzi, per un «e» basta un pezzo falso, per una freccia serve ipotesi vera e conclusione falsa.
> 3. Se la riga falsa non esiste, la formula è una **tautologia**. Se nessuna riga la rende vera, è una **contraddizione**.
>
> Tutto è spiegato nella [lezione 06](06_proposizioni_connettivi_tavole.html); lo strumento della lezione fa le tavole da solo.

> [!ESEMPIO] · Domanda 15 dell'autoverifica: $\neg(p \wedge q) \vee (p \vee \neg r)$
> **Passo 1: quando sarebbe falsa.** È un «o» di due pezzi: per essere falsa servono $\neg(p \wedge q)$ falsa **e** $p \vee \neg r$ falsa.
>
> **Passo 2: il primo pezzo falso.** $\neg(p \wedge q)$ è falsa solo se $p \wedge q$ è vera, cioè con $p$ e $q$ vere.
>
> **Passo 3: il secondo pezzo falso.** $p \vee \neg r$ è falsa solo se $p$ è falsa e $r$ è vera.
>
> **Passo 4: conclusione.** Il passo 2 vuole $p$ vera, il passo 3 vuole $p$ falsa: impossibile. La formula è vera in tutte le 8 righe, è una tautologia. La tavola delle soluzioni del libro ha infatti l'ultima colonna tutta T.

```widget logica
titolo: La formula della domanda 15
modo: tavola
formula: ¬(p ∧ q) ∨ (p ∨ ¬r)
```

::: prova Senza tavola: $(p \to q) \vee (q \to p)$ è una tautologia?
Sì. Per essere falsa servirebbero $p \to q$ falsa, cioè $p$ = V e $q$ = F, e $q \to p$ falsa, cioè $q$ = V e $p$ = F. Le due richieste si contraddicono.
:::

> [!RICORDA]
> - Per una tautologia, cerca la riga che la rende falsa: se le richieste si contraddicono, non c'è.
> - Un «o» è falso solo con tutti i pezzi falsi; un «e» è vero solo con tutti i pezzi veri.

## Tradurre «se», «solo se», «tranne» (lezioni 06–07)

Le traduzioni dall'italiano sono la parte dove si sbaglia di più, perché il linguaggio comune è meno preciso delle formule. Le parole da guardare sono poche: «e», «o», «non», «se», «solo se», «a meno che», «tranne».

> [!METODO] Tradurre una frase (lezioni 06 e 07)
> 1. Trova le frasi semplici e dai a ognuna una lettera.
> 2. «Se $p$, $q$» e «$q$ se $p$» diventano $p \to q$: la condizione sta dopo il «se».
> 3. «$p$ solo se $q$» diventa $p \to q$: quello che sta dopo «solo se» va **a destra** della freccia.
> 4. «$p$ se e solo se $q$» diventa $p \leftrightarrow q$.
> 5. Rileggi la formula ad alta voce e controlla con un caso concreto.
>
> La tabella completa delle traduzioni è nella [lezione 07](07_condizionali_equivalenza_logica.html).

> [!ESEMPIO] · Domande 3 e 4 dell'autoverifica: Leah e il voto
> **Situazione:** «Leah prende A in matematica discreta solo se studia molto». La soluzione del libro la riscrive così: «se Leah prende A, allora Leah studia molto». Il testo della domanda l'ho ricostruito dalla risposta.
>
> **La formula.** Con $p$ = «Leah prende A» e $q$ = «Leah studia molto»: $p \to q$. Quello che sta dopo «solo se» va a destra.
>
> **L'inversa**, $q \to p$: «se Leah studia molto, allora prende A». Non è equivalente: si può studiare molto e prendere B.
>
> **La contronominale**, $\neg q \to \neg p$: «se Leah non studia molto, non prende A». È equivalente alla frase di partenza.

> [!ESEMPIO] · Tutti sono protestanti tranne gli svedesi (Cardone, canale A)
> **Situazione:** la frase «tutti sono protestanti tranne gli svedesi», con $P(x)$ = «$x$ è protestante» e $S(x)$ = «$x$ è svedese». Il dominio sono le persone.
>
> **Passo 1: chi non è svedese è protestante.** $\forall x\,(\neg S(x) \to P(x))$, equivalente a $\forall x\,(\neg P(x) \to S(x))$: chi non è protestante è svedese.
>
> **Passo 2: «tranne» dice anche il contrario.** Nella lingua comune la frase esclude che gli svedesi siano protestanti: nessuno è insieme svedese e protestante. In formula, $\neg\,\exists x\,(P(x) \wedge S(x))$, che con De Morgan diventa $\forall x\,(S(x) \to \neg P(x))$.
>
> **Passo 3: le due insieme.** Le due frecce, una per verso, fanno un «se e solo se»: $\forall x\,(P(x) \leftrightarrow \neg S(x))$. Ognuno è protestante esattamente quando non è svedese.

```grafico
titolo: A sinistra c'è solo «nessuno svedese è protestante»: S e P non si toccano, ma qualcuno può stare fuori da tutti e due. A destra «tutti sono protestanti tranne gli svedesi»: il rettangolo delle persone è diviso in due, e ognuno sta in una sola delle due parti.
x: 0 12
y: 0 5.6
assi: no
griglia: no
proporzioni: libere
poligono: 0.3 0.6 5.6 0.6 5.6 4.6 0.3 4.6 | grigio
cerchio: 1.8 2.6 1 | blu
testo: 1.8 2.6 | blu | "S"
cerchio: 4.1 2.6 1 | ambra
testo: 4.1 2.6 | ambra | "P"
punto: 3 1 | rosa
testo: 3 5.1 | grigio | "∀x (S(x) → ¬P(x))"
poligono: 6.4 0.6 9 0.6 9 4.6 6.4 4.6 | blu
poligono: 9 0.6 11.7 0.6 11.7 4.6 9 4.6 | ambra
testo: 7.7 2.6 | blu | "S"
testo: 10.35 2.6 | ambra | "P"
testo: 9 5.1 | grigio | "∀x (P(x) ↔ ¬S(x))"
```

Il punto rosa a sinistra è una persona né svedese né protestante: la prima formula la permette, la seconda no.

::: prova Traduci «esco, a meno che piova» con $e$ = «esco» e $p$ = «piove».
«A meno che» vuol dire «se non»: $\neg p \to e$, cioè «se non piove, esco», equivalente a $p \vee e$. Come «tranne», nel parlare comune spesso si intende anche il contrario, «se piove non esco»: allora è $e \leftrightarrow \neg p$. Negli esercizi del libro si traduce con la sola freccia.
:::

> [!RICORDA]
> - «Solo se» mette la freccia verso quello che lo segue.
> - «Tranne» e «a meno che» nel parlare comune valgono spesso in tutti e due i versi: decidi se serve il «se e solo se».

## Equivalenze e negazioni (lezione 07)

Due formule sono equivalenti se hanno lo stesso valore in **ogni** riga. Per dire di no basta trovare una riga in cui sono diverse; per dire di sì serve la tavola, o una catena di equivalenze già note.

> [!METODO] Equivalenze e negazioni (lezione 07)
> 1. **Diverse?** Cerca una riga che le distingua: di solito quella che rende falsa una delle due.
> 2. **Uguali?** Trasforma una nell'altra con le equivalenze note, oppure fai la tavola.
> 3. Le equivalenze da sapere: $p \to q \equiv \neg p \vee q$; $\neg(p \to q) \equiv p \wedge \neg q$; De Morgan, $\neg(p \wedge q) \equiv \neg p \vee \neg q$ e $\neg(p \vee q) \equiv \neg p \wedge \neg q$; la contronominale $p \to q \equiv \neg q \to \neg p$.

> [!ESEMPIO] · Il circuito della simulazione 1 del 2023/24, domanda 6
> **Situazione:** il circuito calcola $(\neg C \wedge A) \vee (\neg C \wedge B)$. Si chiede se è equivalente a $\neg((C \vee \neg A) \wedge (C \vee \neg B))$.
>
> **Passo 1: De Morgan sul «e» esterno.** $\neg((C \vee \neg A) \wedge (C \vee \neg B)) \equiv \neg(C \vee \neg A) \vee \neg(C \vee \neg B)$.
>
> **Passo 2: De Morgan su ogni «o».** $\neg(C \vee \neg A) \equiv \neg C \wedge A$, e $\neg(C \vee \neg B) \equiv \neg C \wedge B$.
>
> **Passo 3.** Si arriva a $(\neg C \wedge A) \vee (\neg C \wedge B)$: sono equivalenti. È una delle risposte giuste del quiz, svolto anche nella [lezione 07](07_condizionali_equivalenza_logica.html).

> [!ESEMPIO] · Negare a parole
> **«Se piove, prendo l'ombrello».** La negazione non è «se non piove, non prendo l'ombrello». È $p \wedge \neg q$: «piove e non prendo l'ombrello», l'unico caso in cui la promessa è tradita.
>
> **«2 < 5 e 3 > 1»** (Cardone). La negazione è «2 ≥ 5 oppure 3 ≤ 1». Il contrario di «minore» è «maggiore **o uguale**»: anche il caso dell'uguaglianza contraddice la frase.

::: prova $p \to (q \to r)$ e $(p \wedge q) \to r$ sono equivalenti? E $(p \to q) \to r$ e $p \to (q \to r)$?
Le prime due sì: tutte e due sono false solo con $p$ e $q$ vere ed $r$ falsa. Le seconde no: con $p$, $q$ ed $r$ tutte false, $(p \to q) \to r$ è falsa, perché $p \to q$ è vera e $r$ falsa, mentre $p \to (q \to r)$ è vera, perché $p$ è falsa.
:::

> [!RICORDA]
> - Per dire «non equivalenti» basta una riga; per dire «equivalenti» serve una tavola o una catena di equivalenze.
> - La negazione di una freccia è un «e»: $\neg(p \to q) \equiv p \wedge \neg q$.

## Argomentazioni: valide o no (lezione 08)

Un'argomentazione è **valida** se in ogni riga in cui le premesse sono tutte vere, anche la conclusione è vera. Nella notazione di Cardone, usata nel canale A, si scrive $p_1, \dots, p_n \models p$, e si legge «$p$ è conseguenza logica delle premesse». Come per le tautologie, conviene cercare il controesempio.

> [!METODO] Decidere un'argomentazione (lezione 08)
> 1. Traduci premesse e conclusione in formule.
> 2. Cerca una riga con le premesse **tutte vere** e la conclusione **falsa**: parti dalla conclusione falsa, che di solito fissa più lettere.
> 3. Se la trovi, l'argomentazione non è valida e quella riga è il controesempio.
> 4. Se le richieste si contraddicono, è valida. Per mostrarlo passo per passo si usa una catena di regole di inferenza.
>
> Le sette regole e le due fallacie sono nella [lezione 08](08_argomentazioni_regole_inferenza.html).

> [!ESEMPIO] · Domanda 9 dell'autoverifica: gli Skyscrapers
> **Situazione:** «Se gli Skyscrapers vincono, mi mangio il cappello. Se mi mangio il cappello, sarò bello pieno. Quindi, se sono bello pieno, gli Skyscrapers hanno vinto.»
>
> **Passo 1: le formule.** $p$ = «gli Skyscrapers vincono», $q$ = «mi mangio il cappello», $r$ = «sarò bello pieno». Premesse $p \to q$ e $q \to r$; conclusione $r \to p$.
>
> **Passo 2: la conclusione falsa.** $r \to p$ è falsa solo con $r$ vera e $p$ falsa.
>
> **Passo 3: le premesse vere.** Con $p$ falsa, $p \to q$ è vera comunque. Con $r$ vera, $q \to r$ è vera comunque. Scelgo $q$ falsa.
>
> **Passo 4.** Con $p$ e $q$ false ed $r$ vera le premesse sono vere e la conclusione falsa: **non valida**. È la soluzione del libro. Il sillogismo ipotetico darebbe $p \to r$, non $r \to p$: si può essere pieni per aver mangiato altro.

> [!ESEMPIO] · Domanda 21 dell'autoverifica: le Olimpiadi
> **Situazione:** «Se il Consiglio approva i fondi, New Atlantic avrà le Olimpiadi. Se New Atlantic avrà le Olimpiadi, costruirà un nuovo stadio. New Atlantic non costruisce un nuovo stadio. Quindi il Consiglio non approva i fondi, oppure le Olimpiadi sono annullate.»
>
> **Passo 1: le formule.** $p$ = «il Consiglio approva i fondi», $q$ = «New Atlantic ha le Olimpiadi», $r$ = «costruisce un nuovo stadio», $s$ = «le Olimpiadi sono annullate». Premesse: $p \to q$, $q \to r$, $\neg r$. Conclusione: $\neg p \vee s$.
>
> **Passo 2: sillogismo ipotetico.** Da $p \to q$ e $q \to r$ segue $p \to r$.
>
> **Passo 3: modus tollens.** Da $p \to r$ e $\neg r$ segue $\neg p$.
>
> **Passo 4: addizione.** Da $\neg p$ segue $\neg p \vee s$, qualunque cosa sia $s$. L'argomentazione è **valida**: è la catena della soluzione del libro.

```widget logica
titolo: L'argomentazione delle Olimpiadi
modo: argomento
premesse: p → q; q → r; ¬r
conclusione: ¬p ∨ s
```

::: prova Valida o no: «Se studio passo l'esame. Non ho studiato. Quindi non passo l'esame.»
Non valida: è la fallacia della negazione dell'antecedente, $p \to q, \neg p \;/\; \therefore \neg q$. Controesempio: $p$ falsa e $q$ vera, cioè non ho studiato e passo lo stesso.
:::

> [!RICORDA]
> - Il controesempio si costruisce partendo dalla conclusione falsa.
> - Le due fallacie: affermare il conseguente e negare l'antecedente.

## Quantificatori (lezioni 09 e 10)

Con i quantificatori le domande sono di tre tipi: dire se una frase è vera su un dominio, tradurre dall'italiano, negare. Il dominio va sempre guardato: la stessa frase può essere vera sui reali e falsa sugli interi.

> [!METODO] Frasi con un quantificatore (lezioni 09 e 10)
> 1. **Vero o falso**: per un «per ogni» cerca un controesempio, per un «esiste» un testimone.
> 2. **Tradurre**: «ogni A è B» diventa $\forall x\,(A(x) \to B(x))$, con la freccia; «qualche A è B» diventa $\exists x\,(A(x) \wedge B(x))$, con l'«e».
> 3. **Negare**: $\neg\,\forall x\, P(x) \equiv \exists x\, \neg P(x)$ e $\neg\,\exists x\, P(x) \equiv \forall x\, \neg P(x)$; poi si nega la parte interna con le regole delle sezioni sopra.

> [!ESEMPIO] · Domande 18 e 19 dell'autoverifica: i primi gemelli
> **Situazione:** il dominio sono gli interi positivi, e la frase interna è «$n$ e $n + 2$ sono primi».
>
> **Con «per ogni».** «Per ogni intero positivo $n$, $n$ e $n + 2$ sono primi» è falsa: il controesempio del libro è $n = 7$, perché 9 non è primo. Basterebbe anche $n = 1$, che non è primo.
>
> **Con «esiste».** «Per qualche intero positivo $n$, $n$ e $n + 2$ sono primi» è vera: il testimone del libro è $n = 5$, con 5 e 7 primi.

> [!ESEMPIO] · Negare «qualche» e «tutti» (Cardone, canale A)
> **«Qualche numero primo è pari».** In formula $\exists x\,(\mathrm{Primo}(x) \wedge \mathrm{Pari}(x))$. Negazione: $\forall x\,\neg(\mathrm{Primo}(x) \wedge \mathrm{Pari}(x))$, cioè $\forall x\,(\mathrm{Primo}(x) \to \neg\mathrm{Pari}(x))$: «nessun primo è pari». La frase di partenza è vera, per il 2, quindi la negazione è falsa.
>
> **«Tutti i numeri maggiori di 5 sono maggiori di 3».** In formula $\forall x\,(x > 5 \to x > 3)$. Negazione: $\exists x\,\neg(x > 5 \to x > 3)$, e con la negazione della freccia $\exists x\,(x > 5 \wedge x \le 3)$: «c'è un numero maggiore di 5 e non maggiore di 3». È falsa, come deve essere.

> [!TRAPPOLA] Negare «tutti i numeri maggiori di 5…»
> La negazione non è $\exists x\,(x > 5 \to x \le 3)$: con la freccia dentro un «esiste» la frase diventa vera per ogni $x \le 5$, a vuoto. Negando una freccia esce un «e».

::: prova Nega e traduci a parole: «ogni studente del corso ha superato almeno un esame», con $E(x, y)$ = «$x$ ha superato $y$».
La frase è $\forall x\, \exists y\, E(x, y)$, con $x$ tra gli studenti e $y$ tra gli esami. Negazione: $\exists x\, \forall y\, \neg E(x, y)$, «c'è uno studente che non ha superato nessun esame».
:::

> [!RICORDA]
> - «Ogni» con la freccia, «qualche» con l'«e».
> - Negando un quantificatore si gira il quantificatore; negando una freccia esce un «e».

## Quantificatori annidati e ristretti (lezione 11)

Nelle note di Cardone compaiono i quantificatori **ristretti**: «per ogni $x$ in $A$» e «esiste $y$ in $B$», scritti $\forall x \in A$ ed $\exists y \in B$. Non sono un simbolo nuovo, ma un'abbreviazione delle traduzioni della sezione prima: $\forall x \in A\; P(x)$ vuol dire $\forall x\,(x \in A \to P(x))$, ed $\exists x \in B\; P(x)$ vuol dire $\exists x\,(x \in B \wedge P(x))$.

> [!METODO] Negare con i quantificatori ristretti
> 1. Si gira ogni quantificatore, **lasciando la stessa restrizione**: $\neg\,\forall x \in A\; P(x) \equiv \exists x \in A\; \neg P(x)$.
> 2. Si va avanti verso destra, un quantificatore alla volta, come nella [lezione 11](11_quantificatori_annidati.html).
> 3. Alla fine si nega la frase interna.

> [!ESEMPIO] · Ogni elemento di A ha un elemento di B più grande (Cardone)
> **Situazione:** $A$ e $B$ sono insiemi di numeri. La frase «per ogni elemento $x$ di $A$ esiste almeno un elemento $y$ di $B$ con $x < y$» si scrive $\forall x \in A\; \exists y \in B\; (x < y)$.
>
> **Passo 1: girare i quantificatori.** $\neg\,\forall x \in A\; \exists y \in B\; (x < y) \equiv \exists x \in A\; \forall y \in B\; \neg(x < y)$.
>
> **Passo 2: la frase interna.** $\neg(x < y)$ è $x \ge y$: $\exists x \in A\; \forall y \in B\; (x \ge y)$.
>
> **Passo 3: a parole.** «C'è un elemento di $A$ maggiore o uguale a ogni elemento di $B$». Cardone arriva allo stesso risultato scrivendo per esteso le frecce e gli «e» delle restrizioni.
>
> **Passo 4: un caso concreto.** Con $A = \{1, 5\}$ e $B = \{2, 3\}$ la frase di partenza è falsa: per $x = 5$ nessun $y$ di $B$ è più grande. Infatti la negazione è vera, con il testimone $x = 5$, che è maggiore di 2 e di 3.

::: prova Nega «c'è un elemento di $A$ minore di ogni elemento di $B$», cioè $\exists x \in A\; \forall y \in B\; (x < y)$, e leggila a parole.
$\forall x \in A\; \exists y \in B\; (x \ge y)$: «ogni elemento di $A$ è maggiore o uguale a qualche elemento di $B$». È il secondo esempio di Cardone.
:::

> [!RICORDA]
> - $\forall x \in A$ è un «per ogni» con la freccia, $\exists x \in B$ un «esiste» con l'«e».
> - Negando, la restrizione resta: cambia solo il tipo del quantificatore.

## Come affrontare i quiz di logica

All'esame i quiz di logica sono di solito a menù o a più voci vero/falso, e ogni voce conta. Con 45 minuti per 9 quiz ci sono circa 5 minuti a domanda: le tavole complete da 8 righe vanno fatte solo se il ragionamento sui casi non basta.

| Domanda | Prima mossa | Controllo |
|---|---|---|
| valore di una formula in alcune righe | sostituisci e calcola dall'interno | rileggi le righe nell'ordine del quiz, che può non essere quello solito |
| formule equivalenti? | cerca una riga che le distingua | se non la trovi, fai la tavola |
| argomentazione valida? | conclusione falsa, premesse vere | se ti servono richieste contraddittorie, è valida |
| traduzione | trova «solo se», «ogni», «qualche» | rileggi la formula a voce alta |
| negazione | gira ogni quantificatore, poi nega dentro | la negazione di una freccia è un «e» |

**Gli errori più frequenti**

- Leggere l'«o» come esclusivo: $p \vee q$ è vera anche con tutte e due vere.
- Credere che una freccia con l'ipotesi falsa sia falsa: è vera.
- Girare la freccia nelle frasi con «solo se».
- Negare «minore» con «maggiore», dimenticando l'uguale.
- Scambiare l'ordine dei quantificatori, o girarne solo uno.

::: prova Hai un quiz con tre voci: (1) $p \wedge \neg p$ è una contraddizione; (2) $p \to q$ e $q \to p$ sono equivalenti; (3) $\neg\,\exists x\,(x < 0)$ equivale a $\forall x\,(x > 0)$. Quali sono vere, e qual è la prima mossa per ognuna?
(1) Vera: nessuna riga rende vere insieme $p$ e $\neg p$. (2) Falsa: la riga $p$ = V, $q$ = F le distingue. (3) Falsa: la negazione è $\forall x\,(x \ge 0)$, con l'uguale; lo 0 le distingue.
:::

> [!RICORDA]
> - Circa 5 minuti a quiz: prima il ragionamento sui casi, la tavola solo se serve.
> - Ogni voce conta: controllala con un caso concreto prima di passare alla successiva.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\models$ | «ha come conseguenza logica» | in ogni riga con le premesse vere è vera anche la conclusione (notazione del canale A) | $p \to q,\ p \models q$ |
| $\forall x \in A$ | «per ogni x in A» | $\forall x\,(x \in A \to \dots)$ | $\forall x \in A\; (x > 0)$ |
| $\exists y \in B$ | «esiste y in B» | $\exists y\,(y \in B \wedge \dots)$ | $\exists y \in B\; (y < 3)$ |
| $\equiv$ | «è equivalente a» | stesso valore in ogni riga | $p \to q \equiv \neg p \vee q$ |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti.

**Le domande di logica delle simulazioni 2023/24**

1. **Simulazione 1, domanda 3**: il valore di $(A \to B) \leftrightarrow (B \to A)$ in quattro righe. Svolta nella [lezione 07](07_condizionali_equivalenza_logica.html).
2. **Simulazione 1, domanda 6**: formule equivalenti a quella di un circuito, con De Morgan. Svolta qui sopra.
3. **Simulazione 2, domanda 2**: quali affermazioni sulle algebre booleane sono valide. Svolta qui sotto.
4. **Simulazione 2, domanda 6**: la negazione di quattro frasi con due quantificatori. Svolta nella [lezione 11](11_quantificatori_annidati.html).

### Una domanda vera, letta insieme

**Simulazione d'esame 2 del 2023/24, domanda 2.** Il testo: «Quali tra le seguenti affermazioni sono valide per le algebre booleane?» Le voci, ognuna con un menù sì/no: «Le algebre booleane sono definite solo su insiemi che contengono esattamente due elementi (come vero e falso)?»; «$x + (y \cdot z) = (x \cdot y) + (x \cdot z)$ è una proprietà valida per tutte le algebre booleane?»; la stessa domanda per $x + (y \cdot z) = (y + x) \cdot (z + x)$, per $x + x = x$, e per $x + x' = 1$ e $x \cdot x' = 0$. Nelle algebre booleane $+$ è l'«o», $\cdot$ è l'«e» e $x'$ è il «non»; 1 è il vero e 0 il falso.

**In pratica chiede:** quali sono equivalenze logiche vere. Le algebre booleane arrivano nel capitolo 11 del libro, ma con la traduzione in «e», «o», «non» le ultime quattro voci sono equivalenze del capitolo 1.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: tradurre.** $x + (y \cdot z) = (x \cdot y) + (x \cdot z)$ diventa $p \vee (q \wedge r) \equiv (p \wedge q) \vee (p \wedge r)$.
>
> **Passo 2: cercare una riga che la smentisca.** Con $p$ vera, $q$ e $r$ false: a sinistra $p \vee \dots$ è vera; a destra tutti e due i pezzi contengono un $\wedge$ con una lettera falsa, quindi la destra è falsa. **Non vale.**
>
> **Passo 3: le altre.** $x + (y \cdot z) = (y + x) \cdot (z + x)$ è $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$: la distributiva dell'«o» sull'«e», che **vale**, anche se con i numeri sembrerebbe strana. $x + x = x$ è $p \vee p \equiv p$, **vale**. $x + x' = 1$ e $x \cdot x' = 0$ dicono che $p \vee \neg p$ è sempre vera e $p \wedge \neg p$ sempre falsa: **valgono**.
>
> **Passo 4: la prima voce.** No: un'algebra booleana può avere più di due elementi. Per esempio i sottoinsiemi di un insieme, con unione, intersezione e complementare, ne formano una; con un insieme di 2 elementi i sottoinsiemi sono 4.
>
> Le risposte, nell'ordine: **no, no, sì, sì, sì**. Nella simulazione svolta a mano che circola tra gli studenti le prime quattro sono le stesse; sull'ultima lo studente ha esitato, ma $x + x' = 1$ e $x \cdot x' = 0$ sono proprio le regole che definiscono il «non» in un'algebra booleana.

> [!METODO] Le domande «vale sempre?»
> 1. Traduci in «e», «o», «non», frecce.
> 2. Cerca una riga che smentisca: prova prima le righe con una sola lettera vera, o una sola falsa.
> 3. Se non la trovi in due o tre tentativi, controlla con la tavola o con le equivalenze note.

## Quiz

```quiz
D: Simulazione d'esame 2 del 2023/24, domanda 2, con le voci in forma di scelta. Quale di queste affermazioni sulle algebre booleane è valida? ($+$ è l'«o», $\cdot$ l'«e», $x'$ il «non».)
+ $x + (y \cdot z) = (y + x) \cdot (z + x)$ vale in tutte le algebre booleane
- $x + (y \cdot z) = (x \cdot y) + (x \cdot z)$ vale in tutte le algebre booleane
- le algebre booleane sono definite solo su insiemi con esattamente due elementi
- $x + x = 1$ vale in tutte le algebre booleane
- $x \cdot x' = 1$ vale in tutte le algebre booleane
= In logica l'«o» si distribuisce sull'«e». La risposta più insidiosa è la seconda, che somiglia alla distributiva dei numeri: con $x = 1$ e $y = z = 0$ la sinistra vale 1 e la destra 0. La terza è falsa: i sottoinsiemi di un insieme formano un'algebra booleana con più di due elementi. Le ultime due cambiano le voci vere $x + x = x$ e $x \cdot x' = 0$.

D: Simulazione d'esame 1 del 2023/24, domanda 6. Un circuito calcola $(\neg C \wedge A) \vee (\neg C \wedge B)$. Quale formula ha la stessa tavola?
+ $\neg((C \vee \neg A) \wedge (C \vee \neg B))$
- $(\neg C \vee A) \wedge (\neg C \vee B)$
- $\neg C \wedge A \wedge B$
- $\neg(C \wedge (A \vee B))$
- $\neg C \vee A \vee B$
= Con De Morgan due volte si torna alla formula del circuito. La risposta più insidiosa è la seconda, che scambia «e» e «o»: con le tre lettere false vale V, mentre il circuito dà F.

D: Simulazione d'esame 2 del 2023/24, domanda 6. Qual è la negazione di «Tutti gli uomini hanno ballato con qualche donna»?
+ Qualche uomo non ha ballato con nessuna donna
- Nessun uomo ha ballato con qualche donna
- Tutti gli uomini non hanno ballato con qualche donna
- Qualche donna non ha ballato con nessun uomo
- Qualche uomo ha ballato con tutte le donne
= $\neg\,\forall u\, \exists d\, B(d, u) \equiv \exists u\, \forall d\, \neg B(d, u)$. La risposta più insidiosa è la quarta, che scambia i ruoli di uomini e donne. Le opzioni del menù non si vedono nella schermata: queste sono ricostruite.

D: Domanda 15 dell'autoverifica del capitolo 1. Quante righe della tavola di $\neg(p \wedge q) \vee (p \vee \neg r)$ hanno il valore falso?
N: 0
= Per essere falsa servirebbero $p$ vera (perché $\neg(p \wedge q)$ sia falsa) e $p$ falsa (perché $p \vee \neg r$ sia falsa): impossibile. È una tautologia.

D: Domanda 9 dell'autoverifica. L'argomentazione $p \to q,\ q \to r \;/\; \therefore r \to p$ è valida?
+ No: con $p$ e $q$ false ed $r$ vera le premesse sono vere e la conclusione falsa
- Sì, è il sillogismo ipotetico
- Sì, è il modus ponens
- No: con $p$, $q$, $r$ tutte vere la conclusione è falsa
- Non si può dire senza sapere che cosa sono $p$, $q$, $r$
= Il sillogismo ipotetico darebbe $p \to r$, non $r \to p$. La risposta più insidiosa è la quarta: con tutte vere la conclusione è vera, quindi non è un controesempio.

D: «Tutti sono protestanti tranne gli svedesi», nel senso di Cardone. Quale formula la traduce?
+ $\forall x\,(P(x) \leftrightarrow \neg S(x))$
- $\forall x\,(\neg S(x) \to P(x))$
- $\forall x\,(P(x) \wedge \neg S(x))$
- $\exists x\,(P(x) \wedge \neg S(x))$
- $\forall x\,(S(x) \to P(x))$
= «Tranne» dice due cose: chi non è svedese è protestante, e nessuno svedese è protestante. Insieme fanno un «se e solo se». La risposta più insidiosa è la seconda, che dice solo la prima delle due e permetterebbe uno svedese protestante.

D: Qual è la negazione di $\forall x\,(x > 5 \to x > 3)$?
+ $\exists x\,(x > 5 \wedge x \le 3)$
- $\exists x\,(x > 5 \to x \le 3)$
- $\forall x\,(x \le 5 \to x \le 3)$
- $\exists x\,(x \le 5 \wedge x > 3)$
- $\forall x\,(x > 5 \wedge x \le 3)$
= Si gira il quantificatore e si nega la freccia, che diventa un «e». La risposta più insidiosa è la seconda: lascia la freccia, e una freccia dentro un «esiste» è vera a vuoto per ogni $x \le 5$.

D: Con $A = \{1, 5\}$ e $B = \{2, 3\}$, quale frase è vera?
+ $\exists x \in A\; \forall y \in B\; (x \ge y)$
- $\forall x \in A\; \exists y \in B\; (x < y)$
- $\forall x \in A\; \forall y \in B\; (x < y)$
- $\exists x \in A\; \forall y \in B\; (x < y \wedge x > 1)$
- $\forall y \in B\; \exists x \in A\; (x = y)$
= Il testimone è $x = 5$, maggiore di 2 e di 3. La risposta più insidiosa è la seconda, che è la negazione della prima: fallisce proprio con $x = 5$. L'ultima chiede che 2 e 3 stiano in $A$.
```

## Esercizi

::: esercizio base Riscaldamento: valori
Con $p$ vera, $q$ falsa, $r$ vera, calcola: (a) $p \wedge (q \vee r)$; (b) $(p \to q) \vee \neg r$; (c) $\neg(p \leftrightarrow r)$; (d) $(q \to p) \wedge (r \to q)$.
::: soluzione
(a) V: $q \vee r$ è vera. (b) F: $p \to q$ è falsa e $\neg r$ è falsa. (c) F: $p$ e $r$ hanno lo stesso valore, quindi $p \leftrightarrow r$ è vera. (d) F: $r \to q$ è falsa.
:::

::: esercizio base Riscaldamento: proposizione o no
Quali sono proposizioni? (a) «La squadra ha vinto la serie.» (b) «$2 + 2 = 5$.» (c) «$x + 2 = 5$.» (d) «Chiudi la porta.»
::: soluzione
(a) Non è una proposizione finché non è chiaro di quale squadra si parla: è una funzione proposizionale con la variabile «la squadra». Sono le domande 10 e 11 dell'autoverifica. (b) Sì, falsa. (c) No: dipende da $x$, è una funzione proposizionale. (d) No: è un ordine, non è vera né falsa.
:::

::: esercizio medio Tradurre con «a meno che» e «solo se»
Con $p$ = «c'è sciopero», $t$ = «prendo il treno», $a$ = «arrivo in tempo», traduci: (a) «prendo il treno a meno che ci sia sciopero»; (b) «arrivo in tempo solo se prendo il treno»; (c) nega la (b) e dilla a parole.
::: soluzione
(a) $\neg p \to t$, equivalente a $p \vee t$. (b) $a \to t$. (c) $\neg(a \to t) \equiv a \wedge \neg t$: «arrivo in tempo e non prendo il treno».
:::

::: esercizio medio Una catena di regole
Mostra con le regole di inferenza che da $p \vee q$, $p \to r$, $\neg r$ segue $q$.
::: soluzione
Da $p \to r$ e $\neg r$, per modus tollens, $\neg p$. Da $p \vee q$ e $\neg p$, per sillogismo disgiuntivo, $q$. L'argomentazione è valida.
:::

::: esercizio esame Vero o falso sul dominio
Sugli interi positivi, di' se sono vere: (a) $\forall n\, \exists m\,(m = n + 2 \wedge m \text{ è primo})$; (b) $\exists n\,(n \text{ è primo} \wedge n + 2 \text{ è primo} \wedge n + 4 \text{ è primo})$; (c) nega la (a) e dilla a parole.
::: soluzione
(a) Falsa: per $n = 2$, $m = 4$ non è primo. (b) Vera: $n = 3$, con 3, 5 e 7 primi. (c) $\exists n\, \forall m\, \neg(m = n + 2 \wedge m \text{ è primo})$, cioè «c'è un $n$ tale che $n + 2$ non è primo». Il testimone è $n = 2$.
:::

::: esercizio esame Negare con le restrizioni
Nega spostando il $\neg$ fino in fondo e dilla a parole: «in ogni classe $c$ c'è uno studente $s$ che ha preso tutti voti sopra il 25», cioè $\forall c\; \exists s \in c\; \forall v\; (V(s, v) \to v > 25)$, dove $V(s, v)$ = «$s$ ha preso il voto $v$».
::: soluzione
$\exists c\; \forall s \in c\; \exists v\; (V(s, v) \wedge v \le 25)$: «c'è una classe in cui ogni studente ha preso almeno un voto non sopra il 25». Ogni quantificatore è girato, la restrizione $s \in c$ è rimasta, e la freccia negata è diventata un «e».
:::

## Domande di ripasso

::: domanda Come si decide in fretta se una formula è una tautologia?
Si cerca una riga che la renda falsa; se le richieste per farla falsa si contraddicono, è una tautologia.
:::

::: domanda Come si traduce «p solo se q»?
$p \to q$: quello che segue «solo se» va a destra della freccia.
:::

::: domanda Qual è la negazione di una freccia?
$\neg(p \to q) \equiv p \wedge \neg q$: l'ipotesi vera e la conclusione falsa.
:::

::: domanda Come si cerca il controesempio di un'argomentazione?
Si parte dalla conclusione falsa, che fissa alcune lettere, e si cercano valori delle altre che rendano vere tutte le premesse.
:::

::: domanda Che cosa vuol dire $\forall x \in A\; P(x)$?
$\forall x\,(x \in A \to P(x))$: per ogni elemento di $A$ vale $P$. La versione con «esiste» usa l'«e».
:::

## Glossario

```glossario
Tautologia | Formula vera in tutte le righe della tavola.
Contraddizione | Formula falsa in tutte le righe della tavola.
Conseguenza logica | p₁, …, pₙ ⊨ p: in ogni riga con le premesse vere è vera anche p. È un'argomentazione valida.
Controesempio di un'argomentazione | Riga con le premesse vere e la conclusione falsa.
Quantificatore ristretto | ∀x ∈ A e ∃x ∈ B: abbreviano ∀x (x ∈ A → …) e ∃x (x ∈ B ∧ …).
«Tranne» | Nel parlare comune indica spesso un «se e solo se»: tutti tranne gli svedesi.
```

## Checklist

```checklist
- So decidere se una formula è una tautologia cercando la riga che la rende falsa.
- So tradurre frasi con «se», «solo se», «a meno che», «tranne».
- So negare frecce, «e», «o» e confronti come «minore».
- So decidere se un'argomentazione è valida e trovare il controesempio.
- So costruire una catena di regole di inferenza.
- So decidere frasi con quantificatori su un dominio, con testimoni e controesempi.
- So negare frasi con quantificatori ristretti e annidati.
- So risolvere le domande di logica delle simulazioni 2023/24.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 1), autoverifica del capitolo 1, domande 3, 4, 9, 10, 11, 15, 18, 19 e 21, con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: i testi delle domande li ho ricostruiti dalle soluzioni e tradotti.
- F. Cardone, note sul Moodle del canale A: «Alcuni esempi relativi a formalizzazione, connettivi proposizionali e quantificatori» (negazioni con i quantificatori ristretti, $2 < 5$ e $3 > 1$, i numeri primi pari), «La relazione di conseguenza per la logica proposizionale» (la notazione $\models$) e «Svedesi e Protestanti» (appunto scritto a mano).
- Simulazioni d'esame 1 e 2 del 2023/24 della pagina d'esame comune (simulazione 1, domande 3 e 6; simulazione 2, domande 2 e 6), dalla «Guida degli studenti» del gruppo TSI, e la versione svolta a mano che circola tra gli studenti.
- Diario del canale B: «Lezione 13. Lunedì 26 Ottobre ore 09-11. Fine Capitolo 1, Parte 2. Esercizi sulle lezioni 07-12: Connettivi booleani, quantificatori, Regole Logiche». Appunti scritti dopo la lezione, senza sapere quali esercizi ha fatto il docente.
- Gli esercizi senza indicazione e i quiz sono di questi appunti. Le tavole le ho controllate con un programma su tutte le righe.
