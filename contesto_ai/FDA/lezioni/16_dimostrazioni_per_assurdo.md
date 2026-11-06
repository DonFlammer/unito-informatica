---
corso: FDA
lezione: "16"
data: 2026-11-05
titolo: Dimostrazioni per assurdo
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 16 · Libro, parte 2, §2.2
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 16 di Fondamenti dell'Informatica (canale B): la dimostrazione per assurdo del §2.2, perché
  funziona (con la tavola di verità), come si nega la tesi, gli esempi del libro (se n² è pari allora n è pari, radice
  di 2 irrazionale, una somma almeno 2), dimostrazioni per assurdo con gli insiemi e con i conteggi, la differenza con
  la contrapposizione, gli errori tipici, ed esercizi.
lede: >-
  Per dimostrare che una cosa è vera, a volte conviene supporre che sia falsa e vedere che cosa succede. Se da quella
  supposizione si arriva a una frase e alla sua negazione insieme, la supposizione era sbagliata. È il metodo più usato
  quando la tesi dice che qualcosa non esiste o non succede.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 2), §2.2, esempi 2.2.1–2.2.4
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 90 minuti
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 2), §2.2 «More Methods of Proof», con
  le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; F. Cardone, «Tecniche di
  dimostrazione» (Moodle del canale A); diario del canale B
appunti_html: appunti/FDA/16_dimostrazioni_per_assurdo.html
genera_html: true
---

## In breve

- Una **dimostrazione per assurdo** di «se $P$ allora $Q$» suppone vera l'ipotesi e **falsa** la tesi, e da lì ricava una **contraddizione**: una frase insieme alla sua negazione. Allora la tesi non poteva essere falsa.
- Funziona perché «dall'ipotesi e dal contrario della tesi segue una cosa impossibile» è equivalente a «se ipotesi, allora tesi»: lo dice la tavola di verità.
- Il passo delicato è **negare bene la tesi**: un «o» diventa un «e», un «per ogni» diventa un «esiste… non», «è irrazionale» diventa «è una frazione».
- Gli esempi del libro: se $n^2$ è pari allora $n$ è pari; la radice di 2 non è una frazione; se la somma di due numeri è almeno 2, uno dei due è almeno 1.
- Il metodo va bene soprattutto quando la tesi dice che qualcosa **non** succede (un insieme è vuoto, un numero non è una frazione) o che **almeno uno** ha una proprietà.
- **Per contrapposizione** si deve arrivare proprio al contrario dell'ipotesi; **per assurdo** basta una contraddizione qualsiasi. La contrapposizione è un caso particolare.

> [!CANALI]
> Nel canale B è la lezione di giovedì 05/11, dalle 9 alle 11. Per il docente è la lezione 17, perché la prima è stata un'introduzione: qui è la 16. Il diario del canale B: «Capitolo 2.2. Prove per contraddizione: esempi da 2.2.1 a 2.2.4».
>
> **Gli esempi del libro.** Il libro del corso non ce l'ho; ho le soluzioni ufficiali delle domande e degli esercizi. Lì l'esempio 2.2.1 è la risposta a «dai un esempio di dimostrazione per assurdo», e l'esercizio 7 lo usa per dire che se $p^3$ è pari allora $p$ è pari, «con un ragionamento come quello dell'esempio 2.2.1»: quindi il 2.2.1 è «se $n^2$ è pari allora $n$ è pari», per assurdo. Il primo esempio per contrapposizione è il 2.2.5, quindi i 2.2.1–2.2.4 sono tutti per assurdo. Nell'edizione originale di Johnsonbaugh gli altri sono $\sqrt{2}$ irrazionale e la somma almeno 2, che metto qui. Quale sia esattamente il 2.2.4 non posso controllarlo: aggiungo gli esempi per assurdo degli esercizi del §2.2 e dell'autoverifica del capitolo 2, con le soluzioni ufficiali.
>
> **Con la lezione 14.** La [lezione 14](14_altri_metodi_di_prova.html), scritta prima del 30/10, anticipava una parte di questo metodo insieme alla contrapposizione, ai casi e all'esistenza. Qui il metodo per assurdo è trattato per intero, con esempi diversi dove si può. Contrapposizione, casi ed esistenza (dal 2.2.5 in poi) restano nella 14 finché il docente non li fa.
>
> Servono la [lezione 13](13_dimostrazioni_dirette_controesempi.html) (dimostrazione diretta, pari e dispari), la [07](07_condizionali_equivalenza_logica.html) (freccia, De Morgan, contronominale) e la [10](10_quantificatori_e_connettivi.html) (negare un quantificatore).

## Il metodo, e perché funziona (libro, §2.2)

Il metodo diretto della [lezione 13](13_dimostrazioni_dirette_controesempi.html) parte dall'ipotesi e cammina verso la tesi. Il metodo per assurdo fa una cosa diversa: aggiunge alle ipotesi il **contrario della tesi**, e cerca un guaio.

> [!DEF] Dimostrazione per assurdo (libro, §2.2, domanda di ripasso 1)
> Una **dimostrazione per assurdo** di una freccia «se $P$ allora $Q$» suppone che le ipotesi siano vere e che la conclusione sia falsa; poi, usando queste supposizioni, gli assiomi, le definizioni e i teoremi già dimostrati, ricava una **contraddizione**. Si chiama anche **dimostrazione indiretta** (domanda di ripasso 3).

**Come si legge.** Una contraddizione è una frase insieme alla sua negazione, per esempio «$n^2$ è pari e $n^2$ è dispari». Non può essere vera. Se ci si arriva con passaggi corretti, una delle supposizioni era falsa; l'ipotesi $P$ è data, quindi la falsa è «non $Q$». Allora vale $Q$.

La differenza con la dimostrazione diretta, nelle parole dell'autoverifica del capitolo 2 (domanda 2): nella diretta la negazione della tesi non si suppone mai, in quella per assurdo sì.

### Perché è corretto: la tavola

Il metodo dimostra la frase «se $p$ e non $q$, allora una contraddizione». Una contraddizione è sempre falsa, e una freccia verso il falso è vera solo quando la sua premessa è falsa. Quindi la frase dice: «non succede che $p$ sia vera e $q$ falsa», che è proprio il significato di $p \to q$.

| $p$ | $q$ | $p \wedge \neg q$ | $(p \wedge \neg q) \to \text{falso}$ | $p \to q$ |
|---|---|---|---|---|
| V | V | F | V | V |
| V | F | V | F | F |
| F | V | F | V | V |
| F | F | F | V | V |

Le ultime due colonne sono uguali riga per riga: le due frasi sono **equivalenti**. Puoi controllarlo qui, anche con la $c$:

```widget logica
titolo: La forma della dimostrazione per assurdo e la freccia
modo: equivalenza
a: (p ∧ ¬q) → (c ∧ ¬c)
b: p → q
```

```grafico
titolo: La forma di una dimostrazione per assurdo. Nel riquadro rosa si aggiunge il contrario della tesi; quando dentro compaiono una frase e la sua negazione, il riquadro si chiude e fuori resta la tesi
x: 0 12.4
y: 0.3 6.4
assi: no
griglia: no
proporzioni: libere
testo: 6.2 6.0 | blu | "ipotesi P"
poligono: 1.2 1.6 11.2 1.6 11.2 5.5 1.2 5.5 | rosa
testo: 6.2 5.0 | rosa | "suppongo non Q"
testo: 6.2 4.2 | grigio | "passi corretti, con P, definizioni e teoremi"
testo: 6.2 3.4 | grigio | "arrivo a C"
testo: 6.2 2.6 | grigio | "e arrivo anche a non C"
testo: 6.2 1.95 | rosa | "contraddizione: «non Q» era falsa"
freccia: 6.2 1.55 6.2 1.0 | grigio
testo: 6.2 0.65 | verde | "quindi Q"
```

::: prova Una dimostrazione per assurdo arriva al contrario dell'ipotesi: «l'ipotesi è vera, e anche falsa». È un errore?
No: anche quella è una contraddizione. Se dalla supposizione «non $Q$» si ricava il contrario dell'ipotesi, si è finito. È la forma che diventa la contrapposizione (sezione «Per assurdo o per contrapposizione?»).
:::

> [!RICORDA]
> - Per assurdo: suppongo $P$ e non $Q$, arrivo a $C$ e non $C$, concludo $Q$.
> - Funziona perché $(p \wedge \neg q) \to \text{falso}$ è equivalente a $p \to q$.

## Negare bene la tesi

Tutto il metodo regge sul primo passo: scrivere il contrario esatto della tesi. Se la negazione è sbagliata, la contraddizione che si trova non dimostra niente. Le regole sono quelle della [lezione 07](07_condizionali_equivalenza_logica.html) (De Morgan) e della [lezione 10](10_quantificatori_e_connettivi.html) (quantificatori).

| La tesi | Il suo contrario, da supporre | Regola |
|---|---|---|
| $x \ge 1$ oppure $y \ge 1$ | $x < 1$ **e** $y < 1$ | De Morgan: un «o» diventa «e» |
| $n$ è pari | $n$ è dispari | per gli interi, non pari = dispari |
| $\sqrt{2}$ è irrazionale | $\sqrt{2} = \frac{p}{q}$ con $p$, $q$ interi | irrazionale = non è una frazione |
| $X \cap Y = \varnothing$ | esiste un $x$ in $X \cap Y$ | vuoto = nessun elemento |
| esiste un $i$ con $s_i \le A$ | per ogni $i$, $s_i > A$ | «esiste» diventa «per ogni… non» |
| almeno due borse hanno lo stesso numero di monete | tutte le borse hanno numeri diversi | «almeno due uguali» = non «tutti diversi» |

> [!TRAPPOLA] Il contrario non è l'opposto
> Il contrario di «$x \ge 1$» è «$x < 1$», non «$x \le -1$». Il contrario di «tutti gli studenti hanno passato l'esame» è «**almeno uno** non l'ha passato», non «nessuno l'ha passato». Si nega la frase intera, e si ottiene il caso minimo che la rende falsa.

::: prova Scrivi il contrario di «per ogni intero $n$, $n^2 + n$ è pari».
«Esiste un intero $n$ tale che $n^2 + n$ è dispari.» Il «per ogni» diventa «esiste», e «pari» diventa «non pari», cioè dispari.
:::

> [!RICORDA]
> - Prima di tutto, scrivi il contrario della tesi con De Morgan e le regole dei quantificatori.
> - «O» diventa «e», «per ogni» diventa «esiste… non», «vuoto» diventa «c'è un elemento».

## Se $n^2$ è pari, $n$ è pari (libro, esempio 2.2.1)

È l'esempio che apre il §2.2, e lo stesso che usa Cardone. Serve poi per $\sqrt{2}$.

> [!ESEMPIO] · Per ogni intero $n$, se $n^2$ è pari allora $n$ è pari
> **Passo 1: suppongo l'ipotesi e il contrario della tesi.** $n^2$ è pari, e $n$ **non** è pari, cioè è dispari: $n = 2m + 1$ per un intero $m$.
>
> **Passo 2: calcolo.** $n^2 = (2m + 1)^2 = 4m^2 + 4m + 1 = 2(2m^2 + 2m) + 1$.
>
> **Passo 3: la contraddizione.** $n^2$ ha la forma $2j + 1$ con $j = 2m^2 + 2m$: è dispari. Ma per ipotesi è pari. «$n^2$ è pari e $n^2$ è dispari» è una contraddizione.
>
> **Passo 4.** Quindi $n$ non può essere dispari: $n$ è pari.

Perché non si fa diretta? Partendo da «$n^2 = 2k$» bisognerebbe ricavare qualcosa su $n$ da una radice quadrata, e non c'è un modo pulito. Partendo invece da «$n$ dispari» c'è una formula da usare, $2m + 1$, e il conto va da solo. È il motivo tipico per scegliere l'assurdo: **il contrario della tesi dà più informazioni dell'ipotesi**.

Cardone disegna la struttura con due riquadri uno dentro l'altro: quello esterno è la dimostrazione diretta della freccia, quello interno l'assurdo.

```grafico
titolo: La struttura della dimostrazione di Cardone. Il riquadro esterno (blu) è la dimostrazione diretta: suppone «n² pari» e alla fine scarica la supposizione. Quello interno (rosa) è l'assurdo: suppone «n dispari», trova la contraddizione e conclude «n pari»
x: 0 12.4
y: 0 7
assi: no
griglia: no
proporzioni: libere
poligono: 0.6 1.3 11.8 1.3 11.8 6.6 0.6 6.6 | blu
testo: 6.2 6.2 | blu | "suppongo n² pari"
poligono: 1.4 2.4 11.0 2.4 11.0 5.7 1.4 5.7 | rosa
testo: 6.2 5.25 | rosa | "suppongo n dispari: n = 2m + 1"
testo: 6.2 4.5 | grigio | "n² = 2(2m² + 2m) + 1"
testo: 6.2 3.75 | grigio | "quindi n² dispari, ma n² pari: contraddizione"
testo: 6.2 1.85 | rosa | "quindi n pari"
testo: 6.2 0.55 | verde | "se n² è pari, allora n è pari"
freccia: 6.2 2.35 6.2 2.1 | grigio
```

Nelle note di Cardone, alla fine dell'esempio 3, c'è un refuso: dopo aver mostrato $n^2 = 2(2k^2 + 2k) + 1$ scrive «quindi $n^2$ è pari»; il conto dice **dispari**.

::: prova Dimostra per assurdo: se $n^2$ è dispari, allora $n$ è dispari (esercizio 4 del libro).
Suppongo $n^2$ dispari e $n$ pari: $n = 2k$. Allora $n^2 = 4k^2 = 2(2k^2)$ è pari. «$n^2$ dispari e $n^2$ pari» è una contraddizione, quindi $n$ è dispari.
:::

> [!RICORDA]
> - Si sceglie l'assurdo quando il contrario della tesi dà una formula da usare, come $n = 2m + 1$.

## $\sqrt{2}$ non è una frazione

Il secondo esempio classico del §2.2. Qui la tesi non è una freccia ma una frase sola, «$\sqrt{2}$ è irrazionale»: si suppone il contrario e si cerca la contraddizione, senza ipotesi da aggiungere.

> [!ESEMPIO] · $\sqrt{2}$ è irrazionale
> **Passo 1: suppongo il contrario.** $\sqrt{2} = \frac{p}{q}$ con $p$, $q$ interi, $q \neq 0$. Posso prendere la frazione **ridotta ai minimi termini**: semplifico finché $p$ e $q$ non sono più tutti e due pari.
>
> **Passo 2.** Elevo al quadrato: $2 = \frac{p^2}{q^2}$, cioè $p^2 = 2q^2$. Quindi $p^2$ è pari, e per l'esempio 2.2.1 anche $p$ è pari: $p = 2k$.
>
> **Passo 3.** Sostituisco: $4k^2 = 2q^2$, cioè $q^2 = 2k^2$. Quindi $q^2$ è pari, e anche $q$ è pari.
>
> **Passo 4: la contraddizione.** $p$ e $q$ sono tutti e due pari, ma la frazione era ridotta: «$p$ e $q$ non sono entrambi pari» e «$p$ e $q$ sono entrambi pari».

**Perché serve «ridotta».** Senza quella condizione non c'è contraddizione: una frazione con numeratore e denominatore pari si può sempre semplificare per 2, e scoprire che sono pari non impedirebbe niente. La riduzione è una supposizione **lecita** (ogni frazione si può ridurre) che prepara la contraddizione.

Lo stesso ragionamento, con i cubi, dimostra che $\sqrt[3]{2}$ è irrazionale (esercizio 7 del libro). Elevando al cubo si trova che $p^3$ è pari, quindi $p$ è pari; sostituendo si trova che anche $q^3$ è pari, quindi $q$ è pari.

::: prova Perché lo stesso ragionamento **non** dimostra che $\sqrt{4}$ è irrazionale?
Perché da $p^2 = 4q^2$ viene solo che $p$ è il doppio di $q$, senza nessuna contraddizione: la frazione 2 su 1 è ridotta. Infatti $\sqrt{4}$ vale 2, che è razionale.
:::

> [!RICORDA]
> - $\sqrt{2}$: suppongo $\frac{p}{q}$ ridotta, ricavo $p$ e $q$ pari, contraddizione con «ridotta».
> - Si possono aggiungere supposizioni lecite, come «ridotta ai minimi termini», se preparano la contraddizione.

## Una somma almeno 2

Il terzo esempio dell'edizione originale, che Cardone usa come esempio 2. È già svolto nella [lezione 14](14_altri_metodi_di_prova.html): qui lo riprendo per il passo che conta, la negazione con De Morgan.

**La frase.** Se la somma di due numeri reali è almeno 2, almeno uno dei due è almeno 1.

1. Chiamo i due numeri $x$ e $y$. Suppongo che la somma sia almeno 2, e il contrario della tesi: tutti e due minori di 1, cioè $x < 1$ **e** $y < 1$.
2. Sommo le due disuguaglianze: $x + y < 2$.
3. «$x + y \ge 2$ e $x + y < 2$» è una contraddizione. Quindi vale la tesi.

Con un «oppure» nella tesi, la dimostrazione diretta dovrebbe scegliere quale dei due vale, senza sapere quale. Il contrario invece è un «e», che dà **due** fatti da usare insieme.

::: prova Dimostra per assurdo: se due numeri hanno somma maggiore di 10, almeno uno dei due è maggiore di 5.
Suppongo la somma maggiore di 10 e tutti e due al massimo 5: $a \le 5$ e $b \le 5$. Sommando, $a + b \le 10$: contraddizione con l'ipotesi.
:::

> [!RICORDA]
> - Tesi con «oppure»: il contrario è un «e», e dà due fatti da usare.

## Per assurdo con gli insiemi

Per dimostrare che un insieme è **vuoto** la via è quasi sempre l'assurdo: si suppone che abbia un elemento e si guarda che cosa deve soddisfare.

> [!ESEMPIO] · $(X - Y) \cap (Y - X) = \varnothing$ (esercizio 19 del libro)
> **Passo 1: suppongo il contrario.** L'insieme non è vuoto: esiste un $x$ in $(X - Y) \cap (Y - X)$.
>
> **Passo 2: uso le definizioni.** Per la definizione di differenza, $x$ sta in $X$ ma non in $Y$. Per lo stesso motivo, $x$ sta in $Y$ ma non in $X$.
>
> **Passo 3: la contraddizione.** $x$ sta in $X$ e non sta in $X$.

```grafico
titolo: Perché `(X − Y) ∩ (Y − X)` è vuoto. `X − Y` è la parte di X fuori da Y (blu), `Y − X` la parte di Y fuori da X (ambra). Le due zone non si toccano: un elemento comune dovrebbe stare sia dentro sia fuori da X
x: 0 12.4
y: 0 5
assi: no
griglia: no
proporzioni: libere
cerchio: 4.8 2.5 2.0 | blu
cerchio: 7.6 2.5 2.0 | ambra
testo: 3.6 2.5 | blu | "X − Y"
testo: 8.8 2.5 | ambra | "Y − X"
testo: 6.2 2.5 | grigio | "X ∩ Y"
testo: 2.3 4.4 | blu | "X"
testo: 10.1 4.4 | ambra | "Y"
```

::: prova Dimostra per assurdo che un insieme $X$ e il suo complementare $\overline{X}$ non hanno elementi in comune.
Suppongo che un elemento $x$ stia in tutti e due. Allora $x$ sta in $X$ e nel complementare, cioè non sta in $X$: contraddizione.
:::

> [!RICORDA]
> - «È vuoto» si dimostra supponendo un elemento e trovando che deve stare dentro e fuori lo stesso insieme.

## Per assurdo con i conteggi

Le frasi «almeno uno…» e «almeno due uguali» si dimostrano bene per assurdo: si suppone «nessuno…» o «tutti diversi» e si conta. Nella [lezione 14](14_altri_metodi_di_prova.html) c'è l'esempio delle 40 monete in 9 borse; qui altri due, con le soluzioni ufficiali.

> [!ESEMPIO] · Quattro squadre, sette partite (autoverifica del capitolo 2, domanda 3)
> **La frase.** Se quattro squadre giocano sette partite, due squadre si sono incontrate almeno due volte.
>
> **Passo 1: suppongo il contrario.** Ogni coppia di squadre ha giocato al massimo una volta.
>
> **Passo 2: conto.** Con le squadre A, B, C, D le coppie possibili sono AB, AC, AD, BC, BD, CD: sei. Quindi le partite sono al massimo 6.
>
> **Passo 3: la contraddizione.** Le partite sono 7.

> [!ESEMPIO] · Sotto la media (esercizio 27 del libro)
> **La frase.** Almeno uno dei numeri $s_1, \dots, s_n$ è minore o uguale alla loro media $A$.
>
> **Passo 1: suppongo il contrario.** Tutti i numeri sono maggiori della media: $s_i > A$ per ogni $i$.
>
> **Passo 2: sommo.** Sommando tutte queste disuguaglianze, la somma dei numeri supera $nA$. Dividendo per $n$, la media supera $A$.
>
> **Passo 3: la contraddizione.** La media è $A$, e $A > A$ è falso.

Questa è una dimostrazione di **esistenza non costruttiva**, come quelle della [lezione 14](14_altri_metodi_di_prova.html): dimostra che un $s_i$ sotto la media c'è, senza dire quale.

::: prova Dimostra per assurdo che se 13 persone sono in una stanza, almeno due sono nate nello stesso mese.
Suppongo che i mesi siano tutti diversi. Allora servono 13 mesi diversi, ma i mesi sono 12: contraddizione.
:::

> [!RICORDA]
> - «Almeno uno», «almeno due uguali»: suppongo «nessuno» o «tutti diversi» e conto.

## Per assurdo o per contrapposizione?

Le due tecniche si somigliano, e il libro le mette una dopo l'altra (esempi 2.2.1–2.2.4 e 2.2.5).

| | per assurdo | per contrapposizione |
|---|---|---|
| suppone | $P$ e non $Q$ | solo non $Q$ |
| deve arrivare a | una contraddizione qualsiasi, $C$ e non $C$ | proprio non $P$ |
| si può usare anche | quando la tesi non è una freccia, come per $\sqrt{2}$ | solo per una freccia $P \to Q$ |

Se in una dimostrazione per assurdo la contraddizione è proprio il contrario dell'ipotesi, quella dimostrazione è in realtà una contrapposizione. Si poteva saltare l'ipotesi e dimostrare in modo diretto «se non $Q$ allora non $P$». Nell'esempio 2.2.1 succede proprio così: da «$n$ dispari» si arriva a «$n^2$ dispari», il contrario dell'ipotesi. Cardone infatti la rifà per contrapposizione nell'esempio 3 delle sue note.

> [!ESEMPIO] · la stessa frase con i due metodi
> **Per assurdo.** Suppongo $n^2$ pari e $n$ dispari. Ricavo che $n^2$ è dispari, contro l'ipotesi.
>
> **Per contrapposizione.** Dimostro in modo diretto «se $n$ è dispari, allora $n^2$ è dispari», con lo stesso conto. La contronominale è equivalente alla frase di partenza.

::: prova In una dimostrazione per assurdo la contraddizione trovata è «$n > 5$ e $n \le 5$», che non è il contrario dell'ipotesi. Si può riscrivere per contrapposizione?
Non direttamente: la contraddizione non è «non $P$». Si usa l'assurdo, che accetta una contraddizione qualsiasi.
:::

> [!RICORDA]
> - Contrapposizione: da non $Q$ a non $P$. Assurdo: da $P$ e non $Q$ a una contraddizione qualunque.

## Gli errori tipici

Quattro errori capitano spesso, e rovinano la dimostrazione anche quando il conto finale sembra giusto.

1. **Negare male la tesi.** Supporre «$x \le -1$» invece di «$x < 1$», o «nessuno» invece di «almeno uno no». La contraddizione che segue non dimostra la tesi giusta.
2. **Una contraddizione che viene da un errore di conto.** Se ci si arriva sbagliando un passaggio, non dimostra niente. Ogni passo va giustificato come nella dimostrazione diretta.
3. **Supporre la tesi invece del contrario.** Partire da «$\sqrt{2}$ è irrazionale» e arrivare a qualcosa di vero non dimostra niente: si deve partire dal **contrario**.
4. **Dimenticare di dire dove sta la contraddizione.** La dimostrazione finisce indicando le due frasi opposte e da dove viene ciascuna.

::: prova Per dimostrare per assurdo «tutti gli studenti hanno passato l'esame», uno studente suppone «nessuno ha passato l'esame». Che cosa non va?
La negazione è sbagliata. Il contrario di «tutti l'hanno passato» è «**almeno uno** non l'ha passato». Supponendo «nessuno», una contraddizione dimostrerebbe solo che almeno uno l'ha passato.
:::

> [!RICORDA]
> - Contrario esatto, passi giustificati, e alla fine le due frasi opposte con la loro origine.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $C \wedge \neg C$ | «C e non C» | contraddizione, sempre falsa | «$n^2$ pari e $n^2$ dispari» |
| $\neg Q$ | «non Q» | il contrario della tesi, da supporre | «$n$ è dispari» |
| $\frac{p}{q}$ ridotta | «p su q ai minimi termini» | $p$ e $q$ senza fattori comuni | $\frac{3}{4}$ sì, $\frac{6}{8}$ no |
| $\sqrt[3]{2}$ | «radice cubica di 2» | il numero il cui cubo è 2 | esercizio 7 |
| $X - Y$ | «X meno Y» | elementi di X che non stanno in Y | $\{1,2\} - \{2\} = \{1\}$ |
| $\varnothing$ | «insieme vuoto» | l'insieme senza elementi | $(X - Y) \cap (Y - X) = \varnothing$ |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Riconoscere il metodo**: nei quiz può servire dire se una dimostrazione è diretta, per assurdo o per contrapposizione, e quale supposizione fa.
2. **Scrivere il contrario della tesi**: è la stessa abilità delle domande sulle negazioni delle simulazioni 2023/24.
3. **Scrivere una dimostrazione corta** nella domanda aperta: metodo dichiarato, supposizione, passi, contraddizione indicata.

Nelle simulazioni 2023/24 che ho non ci sono domande sulle dimostrazioni: la domanda qui sotto è sul modello degli esercizi del §2.2.

### Una domanda sul modello, letta insieme

**Il testo**, sul modello dell'esercizio 4 del §2.2: «Dimostra per assurdo che, per ogni intero $n$, se $3n + 2$ è dispari, anche $n$ lo è. Qual è la supposizione da cui parti?»

**In pratica chiede:** il contrario della tesi, e una dimostrazione che arrivi a una contraddizione.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: la supposizione.** L'ipotesi ($3n + 2$ dispari) e il contrario della tesi: $n$ è **pari**. Quindi $n = 2k$ per un intero $k$.
>
> **Passo 2: calcolo.** $3n + 2 = 6k + 2 = 2(3k + 1)$, quindi $3n + 2$ è pari.
>
> **Passo 3: la contraddizione.** «$3n + 2$ dispari» (ipotesi) e «$3n + 2$ pari» (passo 2). Quindi $n$ è dispari.

La contraddizione è «non $P$», quindi la stessa dimostrazione si poteva scrivere per contrapposizione, come nella [lezione 14](14_altri_metodi_di_prova.html).

> [!METODO] Scrivere una dimostrazione per assurdo
> 1. Scrivi la frase nella forma «se ipotesi, allora tesi», o solo la tesi se non c'è ipotesi.
> 2. Scrivi il contrario esatto di $Q$, con De Morgan e le regole dei quantificatori.
> 3. Comincia con «Supponiamo per assurdo che…», e metti insieme $P$ e non $Q$.
> 4. Usa le definizioni (pari, dispari, frazione, intersezione) per ricavare fatti nuovi.
> 5. Fermati quando trovi una frase e la sua negazione; scrivi da dove viene ciascuna, e concludi «quindi $Q$».

## Quiz

```quiz
D: Che cosa si suppone in una dimostrazione per assurdo di «se $P$ allora $Q$»?
+ $P$ vera e $Q$ falsa
- $P$ falsa e $Q$ vera
- solo $Q$ falsa, senza usare $P$
- $Q$ vera, per vedere se segue $P$
- $P$ e $Q$ tutte e due false
= È la domanda di ripasso 1 del §2.2: le ipotesi vere e la conclusione falsa. La risposta più insidiosa è la terza, che è la contrapposizione: lì si suppone solo non $Q$ e si deve arrivare a non $P$.

D: Qual è il contrario di «$x \ge 1$ oppure $y \ge 1$», da supporre in una dimostrazione per assurdo?
+ $x < 1$ e $y < 1$
- $x < 1$ oppure $y < 1$
- $x \le 1$ e $y \le 1$
- $x \le -1$ e $y \le -1$
- $x + y < 2$
= De Morgan: la negazione di un «oppure» è un «e» delle negazioni, e la negazione di $\ge$ è $<$. La risposta più insidiosa è la seconda: nega le due parti ma dimentica di cambiare il connettivo.

D: Nella dimostrazione che $\sqrt{2}$ è irrazionale, a che cosa serve supporre la frazione $\frac{p}{q}$ ridotta ai minimi termini?
+ a ottenere la contraddizione, quando si scopre che $p$ e $q$ sono tutti e due pari
- a far sì che $q$ sia diverso da zero
- a far sì che $p$ sia dispari
- a poter elevare al quadrato
- non serve, è una precisione di stile
= La contraddizione è proprio «ridotta» contro «$p$ e $q$ pari». La risposta più insidiosa è la terza: «ridotta» vuol dire che $p$ e $q$ non sono **tutti e due** pari, non che $p$ è dispari.

D: Qual è il contrario di «per ogni $i$, $s_i > A$»?
+ esiste un $i$ con $s_i \le A$
- per ogni $i$, $s_i \le A$
- esiste un $i$ con $s_i < A$
- per ogni $i$, $s_i < A$
- nessun $s_i$ è maggiore di $A$
= Il «per ogni» diventa «esiste», e $>$ diventa $\le$. La risposta più insidiosa è la terza, che dimentica il caso $s_i = A$.

D: Una dimostrazione suppone «$n^2$ pari e $n$ dispari» e arriva a «$n^2$ dispari». Che cosa ha dimostrato?
+ se $n^2$ è pari allora $n$ è pari
- se $n$ è dispari allora $n^2$ è pari
- se $n^2$ è dispari allora $n$ è dispari
- che non esistono interi dispari
- niente, perché non ha usato l'ipotesi
= È l'esempio 2.2.1: «$n^2$ dispari» contraddice l'ipotesi «$n^2$ pari». La risposta più insidiosa è la terza, che è un'altra frase vera (esercizio 4) ma non è quella dimostrata.

D: Quale frase si dimostra meglio per assurdo che in modo diretto?
+ $(X - Y) \cap (Y - X) = \varnothing$
- la somma di due pari è pari
- $X \cap Y \subseteq X$
- se $x$ e $y$ sono razionali, $x + y$ è razionale
- il prodotto di due dispari è dispari
= Dire che un insieme è vuoto vuol dire che un elemento non esiste: si suppone che esista e si trova la contraddizione (esercizio 19). Le altre partono da un'ipotesi che dà una formula, e la diretta basta (lezione 13).

D: Che differenza c'è tra dimostrazione diretta e per assurdo, secondo l'autoverifica del capitolo 2?
+ nella diretta non si suppone la negazione della tesi, in quella per assurdo sì
- la diretta usa le definizioni, quella per assurdo no
- la diretta vale solo per i numeri, quella per assurdo per gli insiemi
- quella per assurdo non ha ipotesi
- non c'è differenza: sono due nomi dello stesso metodo
= È la risposta ufficiale alla domanda 2. La risposta più insidiosa è la quarta: per assurdo si usano sia le ipotesi sia la negazione della tesi.
```

## Esercizi

::: esercizio base Riscaldamento: il contrario della tesi
Scrivi la supposizione iniziale di una dimostrazione per assurdo per: (a) $n$ è dispari; (b) $x > 0$ e $y > 0$; (c) l'insieme $A$ è vuoto; (d) ogni studente ha un voto almeno 18.
::: soluzione
(a) $n$ è pari. (b) $x \le 0$ oppure $y \le 0$ (De Morgan). (c) Esiste un elemento in $A$. (d) Esiste uno studente con voto minore di 18.
:::

::: esercizio base Riscaldamento: quale metodo?
Per ognuna, di' se è diretta, per assurdo o per contrapposizione. (a) «Sia $n = 2k$; allora $n + 4 = 2(k + 2)$, pari.» (b) «Supponiamo che esista $x$ in $A \cap \varnothing$; allora $x \in \varnothing$, impossibile.» (c) «Dimostro che se $n$ è pari allora $n^2$ è pari, quindi se $n^2$ è dispari allora $n$ è dispari.»
::: soluzione
(a) Diretta. (b) Per assurdo: suppone un elemento in un insieme che deve essere vuoto. (c) Per contrapposizione: dimostra la contronominale.
:::

::: esercizio medio $\sqrt{3}$ è irrazionale
Dimostra per assurdo che $\sqrt{3}$ è irrazionale. Ti serve il fatto «se $n^2$ è multiplo di 3, allora $n$ è multiplo di 3», che puoi usare.
::: soluzione
Suppongo $\sqrt{3} = \frac{p}{q}$ ridotta: $p$ e $q$ non sono tutti e due multipli di 3. Allora $p^2 = 3q^2$: $p^2$ è multiplo di 3, quindi lo è $p$: $p = 3k$. Sostituisco: $9k^2 = 3q^2$, cioè $q^2 = 3k^2$, quindi anche $q$ è multiplo di 3. Contraddizione con «ridotta». Il fatto usato vale perché 3 è primo; con 4 al posto di 3 non varrebbe ($n = 2$, $n^2 = 4$).
:::

::: esercizio medio Non c'è un intero più grande di tutti
Dimostra per assurdo che non esiste un intero maggiore o uguale a tutti gli interi.
::: soluzione
Suppongo che esista un intero $M$ con $M \ge n$ per ogni intero $n$. Allora in particolare $M \ge M + 1$, perché anche $M + 1$ è un intero. Sottraendo $M$: $0 \ge 1$, falso. Contraddizione.
:::

::: esercizio esame Una dimostrazione da completare, sul modello del §2.2
«Per ogni intero $n$, se $n^2 + 3$ è pari, allora $n$ è dispari.» Scrivi la supposizione, la dimostrazione e la contraddizione, poi di' se la stessa dimostrazione si poteva fare per contrapposizione.
::: soluzione
Suppongo $n^2 + 3$ pari e il contrario della tesi, $n = 2k$. Allora $n^2 + 3 = 4k^2 + 3 = 2(2k^2 + 1) + 1$, dispari. Contraddizione con l'ipotesi, quindi $n$ è dispari. La contraddizione è proprio la negazione dell'ipotesi, quindi sì: per contrapposizione si dimostra «se $n$ è pari allora $n^2 + 3$ è dispari», con lo stesso conto. Controllato con un programma per $n$ da −1000 a 1000.
:::

::: esercizio difficile Cinque punti in un quadrato
In un quadrato di lato 2 ci sono 5 punti. Dimostra per assurdo che almeno due di loro sono a distanza al massimo $\sqrt{2}$.
::: soluzione
Divido il quadrato in 4 quadratini di lato 1. Suppongo per assurdo che ogni coppia di punti sia a distanza maggiore di $\sqrt{2}$. Due punti nello stesso quadratino sono a distanza al massimo $\sqrt{2}$, la sua diagonale: quindi ogni quadratino contiene al massimo un punto, e i punti sono al massimo 4. Ma sono 5: contraddizione. È il principio dei piccioni della [D06 di Matematica Discreta](../MDAG/D06_insiemi_finiti_inclusione_esclusione.html), con i quadratini come buche.
:::

## Domande di ripasso

::: domanda Che cosa si suppone e a che cosa si deve arrivare in una dimostrazione per assurdo?
Si suppongono le ipotesi e il contrario della tesi, e si deve arrivare a una contraddizione, una frase e la sua negazione.
:::

::: domanda Perché il metodo per assurdo è corretto?
Perché $(P \wedge \neg Q) \to \text{falso}$ è equivalente a $P \to Q$: la tavola di verità ha le stesse colonne.
:::

::: domanda Perché nella dimostrazione su $\sqrt{2}$ la frazione va presa ridotta?
Perché la contraddizione finale è proprio «$p$ e $q$ sono tutti e due pari», che contrasta con «ridotta». Senza quella supposizione non ci sarebbe contraddizione.
:::

::: domanda Quando conviene la dimostrazione per assurdo?
Quando la tesi dice che qualcosa non esiste o non succede (un insieme vuoto, un numero irrazionale), quando dice «almeno uno», o quando il contrario della tesi dà una formula da usare.
:::

::: domanda Che differenza c'è tra per assurdo e per contrapposizione?
La contrapposizione suppone solo non $Q$ e deve arrivare a non $P$; l'assurdo suppone $P$ e non $Q$ e può arrivare a una contraddizione qualsiasi.
:::

## Glossario

```glossario
Dimostrazione per assurdo | Si suppongono le ipotesi e il contrario della tesi, e si ricava una contraddizione; detta anche indiretta.
Contraddizione | Una frase e la sua negazione insieme, C e non C: sempre falsa.
Contrario della tesi | La negazione esatta della conclusione, scritta con De Morgan e le regole dei quantificatori.
Frazione ridotta | Frazione di interi senza fattori comuni tra numeratore e denominatore.
Numero irrazionale | Numero reale che non si può scrivere come frazione di interi, come la radice di 2.
Dimostrazione per contrapposizione | Si dimostra in modo diretto la contronominale, da non Q a non P.
Esistenza non costruttiva | Dimostrazione che qualcosa esiste senza dire quale sia, spesso per assurdo.
```

## Checklist

```checklist
- So scrivere lo schema di una dimostrazione per assurdo.
- So spiegare con la tavola di verità perché il metodo è corretto.
- So scrivere il contrario di una tesi con «o», «e», «per ogni» ed «esiste».
- So dimostrare per assurdo che se n² è pari allora n è pari.
- So dimostrare che la radice di 2 è irrazionale e spiegare a che cosa serve «ridotta».
- So dimostrare per assurdo che un insieme è vuoto.
- So usare l'assurdo nei problemi di conteggio («almeno due uguali»).
- So distinguere una dimostrazione per assurdo da una per contrapposizione.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 2), §2.2 «More Methods of Proof»: domande di ripasso 1–3, esercizi 4, 7, 19 e 27; autoverifica del capitolo 2, domande 2 e 3; con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: i testi li ho ricostruiti dalle soluzioni e tradotti, e il contenuto degli esempi 2.2.1–2.2.4 l'ho ricavato dai rimandi delle soluzioni e dall'edizione originale.
- F. Cardone, «Tecniche di dimostrazione» (Moodle del canale A): esempio 2 (somma almeno 2), la dimostrazione di «se $n^2$ è pari allora $n$ è pari» con lo schema dei riquadri, esempio 3 (la stessa per contrapposizione, con il refuso «pari» al posto di «dispari»).
- Diario del canale B: «Lezione 17. Giovedì 05 Novembre ore 09-11. Capitolo 2.2. Prove per contraddizione: esempi da 2.2.1 a 2.2.4». Appunti scritti dopo la lezione, senza sapere come il docente ha presentato gli esempi.
- La tavola del metodo, gli esempi $\sqrt{4}$, $\sqrt{3}$, i 13 mesi, i 5 punti nel quadrato, la domanda sul modello, i quiz e gli esercizi senza indicazione sono di questi appunti. I conti con i numeri li ho controllati con un programma.
