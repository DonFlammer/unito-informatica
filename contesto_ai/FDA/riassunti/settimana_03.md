---
corso: FDA
lezione: S3
tipo: riassunto
titolo: "Settimana 3: proposizioni, condizionali, equivalenze e argomentazioni"
data: 2026-10-16
docenti: Stefano Berardi
sopratitolo: Riassunto settimanale · Fondamenti dell'Informatica · Canale B · 12/10 – 16/10/2026
descrizione: >-
  Riassunto della settimana 3 di Fondamenti dell'Informatica (canale B, libro parte 2, §1.2–1.4): proposizioni,
  connettivi, o esclusivo, precedenze e tavole di verità; «se… allora», «solo se», inversa e contronominale,
  «se e solo se», equivalenza logica e leggi di De Morgan; argomentazioni valide, metodo delle tavole, le sette
  regole di inferenza e le due fallacie.
lede: >-
  Le tre lezioni di logica della settimana in poche pagine: come si costruisce una tavola di verità, quando una
  freccia è falsa, come si nega una frase, come si decide se un ragionamento è valido, e le domande vere delle
  simulazioni d'esame.
materiale: libro
simboli_logici: si
scheda:
  Lezioni: "[06](06_proposizioni_connettivi_tavole.html) lun 12/10, §1.2 · [07](07_condizionali_equivalenza_logica.html) gio 15/10, §1.3 · [08](08_argomentazioni_regole_inferenza.html) ven 16/10, §1.4"
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni 06, 07 e 08 di Fondamenti dell'Informatica (canale B), scritti sul libro di testo, parte 2
  (Johnsonbaugh, cap. 1), §1.2–1.4
appunti_html: appunti/FDA/riassunto_settimana_03.html
genera_html: true
---

## In breve

- Una **proposizione** è una frase vera o falsa. Si combinano con «e», «o» e «non»: congiunzione, disgiunzione e negazione.
- L'«o» della logica è **inclusivo**: vale anche quando sono vere tutte e due le parti. L'«o» esclusivo ha un simbolo suo, ⊕.
- La **tavola di verità** prova tutte le combinazioni delle lettere: 4 righe con 2 lettere, 8 con 3.
- «**Se** p **allora** q» è falsa in un solo caso: p vera e q falsa. Con l'ipotesi falsa è vera a vuoto.
- Due formule sono **equivalenti** quando hanno la stessa tavola. Le più usate sono le **leggi di De Morgan** e la contronominale.
- Un'**argomentazione** è **valida** quando nelle righe con tutte le premesse vere la conclusione è vera. Una sola riga che non torna è un controesempio.
- Sono le porte logiche della lezione 01 con V e F al posto di 1 e 0: i quiz sui circuiti si risolvono con questi strumenti.

## 06 · Proposizioni e tavole di verità (lun 12/10)

«Torino è in Piemonte» è una proposizione; una domanda, un ordine o «x è maggiore di 3» no. Al posto delle frasi si usano lettere, e i connettivi si scrivono con i simboli:

| Connettivo | Simbolo | È vera quando… |
|---|---|---|
| e (congiunzione) | $p \wedge q$ | tutte e due sono vere |
| o (disgiunzione) | $p \vee q$ | almeno una è vera |
| o esclusivo | $p \oplus q$ | esattamente una è vera |
| non (negazione) | $\neg p$ | $p$ è falsa |

- **Precedenze**: senza parentesi prima «non», poi «e», poi «o». Il «non» si attacca solo a quello che segue: $\neg p \wedge q$ è $(\neg p) \wedge q$.
- **Costruire una tavola**: una colonna per ogni lettera, le righe in ordine (con 3 lettere, la prima cambia ogni 4 righe, la seconda ogni 2, la terza a ogni riga), poi una colonna per ogni pezzo della formula, dall'interno verso l'esterno.
- Una formula vera in tutte le righe è una **tautologia**, come $p \vee \neg p$; falsa in tutte, una **contraddizione**, come $p \wedge \neg p$.
- «Né p né q» vuol dire $\neg p \wedge \neg q$: nessuna delle due.

::: prova Quanto vale $(A \vee B) \wedge \neg(A \wedge B)$ nelle righe $A$ = V, $B$ = V e $A$ = V, $B$ = F?
F nella prima, perché $\neg(A \wedge B)$ è falsa; V nella seconda. È la tavola dell'o esclusivo.
:::

> [!RICORDA]
> - «E»: tutte e due. «O»: almeno una. «O esclusivo»: esattamente una.
> - Con $n$ lettere la tavola ha $2^n$ righe.

## 07 · «Se… allora» ed equivalenza (gio 15/10)

«Se la squadra vince, offro la pizza» è una promessa. È infranta in un solo caso: la squadra vince e la pizza non arriva. Se la squadra perde, la promessa non è infranta comunque vada: la frase è **vera a vuoto**.

| $p$ | $q$ | $p \to q$ | $p \leftrightarrow q$ |
|---|---|---|---|
| V | V | V | V |
| V | F | F | F |
| F | V | V | F |
| F | F | V | V |

```grafico
titolo: «Se piove, la strada è bagnata»: dove $p$ è vera, anche $q$ lo è, e il cerchio di $p$ sta dentro quello di $q$. Una strada bagnata senza pioggia, lavata per esempio, non smentisce la promessa: per questo da $q$ non si può ricavare $p$.
x: -4 4
y: -2.6 2.6
assi: no
griglia: no
poligono: -3.8 -2.4 3.8 -2.4 3.8 2.4 -3.8 2.4 | grigio
cerchio: 0.5 0 2 | ambra
cerchio: 0 0 0.9 | blu
testo: 0 0.15 | blu | "piove"
testo: 0 -0.35 | blu | "$p$"
testo: 1.9 0.9 | ambra | "strada bagnata"
testo: 1.9 0.4 | ambra | "$q$"
testo: -2.2 -1.95 | grigio | "strada asciutta"
```

- **Sufficiente e necessaria**: in $p \to q$ l'ipotesi $p$ è condizione sufficiente, la conclusione $q$ è condizione necessaria.
- **«Solo se»**: «p solo se q» è $p \to q$. Quello che segue «solo se» è la conclusione.
- **Inversa** e **contronominale**: l'inversa $q \to p$ dice un'altra cosa; la contronominale $\neg q \to \neg p$ dice la stessa cosa della frase di partenza.
- **«Se e solo se»**: $p \leftrightarrow q$ è vera quando le due parti hanno lo stesso valore.

**Equivalenze da sapere.** Due formule sono equivalenti, $\equiv$, quando hanno la stessa tavola:

- De Morgan: $\neg(p \wedge q) \equiv \neg p \vee \neg q$ e $\neg(p \vee q) \equiv \neg p \wedge \neg q$;
- la freccia senza freccia: $p \to q \equiv \neg p \vee q$;
- la negazione di una promessa: $\neg(p \to q) \equiv p \wedge \neg q$.

> [!TRAPPOLA] De Morgan a metà
> Negando un «e» bisogna negare **tutte e due** le parti **e** cambiare «e» in «o». Il contrario di «studio e lavoro» non è «non studio e non lavoro», ma «non studio **o** non lavoro».

::: prova Qual è la negazione di «se piove, prendo l'ombrello»?
«Piove e non prendo l'ombrello»: $\neg(p \to q) \equiv p \wedge \neg q$. Non è «se non piove, non prendo l'ombrello».
:::

> [!RICORDA]
> - $p \to q$ è falsa solo con $p$ vera e $q$ falsa.
> - Contronominale: stessa cosa. Inversa: un'altra cosa.

## 08 · Argomentazioni e regole di inferenza (ven 16/10)

Un detective mette in fila gli indizi e arriva a una conclusione. Le frasi di partenza sono le **premesse**, quella d'arrivo la **conclusione**. L'argomentazione è **valida** quando, se tutte le premesse sono vere, la conclusione non può essere falsa. Valida non vuol dire vera: vuol dire che la conclusione **segue** dalle premesse.

```grafico
titolo: Il metodo delle tavole: si guardano solo le righe con tutte le premesse vere. Basta una di queste righe con la conclusione falsa per dire che l'argomentazione non è valida.
x: 0 10
y: 0 7
assi: no
griglia: no
proporzioni: libere
poligono: 1.6 5.8 8.4 5.8 8.4 6.8 1.6 6.8 | blu
testo: 5 6.3 | blu | "righe con tutte le premesse vere"
freccia: 5 5.8 5 5.05 | grigio
poligono: 5 5 8 4 5 3 2 4 | ambra
testo: 5 4 | ambra | "conclusione vera?"
segmento: 2 4 1.5 4 | verde
freccia: 1.5 4 1.5 2.35 | verde
segmento: 8 4 8.5 4 | rosa
freccia: 8.5 4 8.5 2.35 | rosa
testo: 1.6 4.35 | verde | "in tutte"
testo: 8.4 4.35 | rosa | "non in una"
poligono: 0.3 1.3 2.7 1.3 2.7 2.3 0.3 2.3 | verde
poligono: 7.3 1.3 9.7 1.3 9.7 2.3 7.3 2.3 | rosa
testo: 1.5 1.8 | verde | "valida"
testo: 8.5 1.8 | rosa | "non valida"
testo: 7.6 0.75 | rosa | "è il controesempio"
```

Le **regole di inferenza** sono argomentazioni valide corte, da usare come passi:

| Regola | Premesse | Conclusione |
|---|---|---|
| modus ponens | $p \to q$ e $p$ | $q$ |
| modus tollens | $p \to q$ e $\neg q$ | $\neg p$ |
| addizione | $p$ | $p \vee q$ |
| semplificazione | $p \wedge q$ | $p$ |
| congiunzione | $p$ e $q$ | $p \wedge q$ |
| sillogismo ipotetico | $p \to q$ e $q \to r$ | $p \to r$ |
| sillogismo disgiuntivo | $p \vee q$ e $\neg p$ | $q$ |

> [!TRAPPOLA] Due ragionamenti che sembrano giusti
> - **Affermare il conseguente**: da $p \to q$ e $q$ ricavare $p$. La strada è bagnata, ma magari l'hanno lavata.
> - **Negare l'antecedente**: da $p \to q$ e $\neg p$ ricavare $\neg q$. Non piove, ma la strada può essere bagnata lo stesso.
>
> In tutti e due i casi c'è una riga con le premesse vere e la conclusione falsa: $p$ falsa e $q$ vera.

Mettendo in fila le regole si arriva alla conclusione senza tavole: è una **dimostrazione**. Con 4 o 5 lettere conviene, perché le tavole avrebbero 16 o 32 righe.

::: prova Da «se studio, passo l'esame» e «non ho passato l'esame», che cosa segue?
«Non ho studiato»: è il modus tollens. Dalle stesse premesse non segue niente su altri esami.
:::

> [!RICORDA]
> - Valida: nessuna riga con le premesse vere e la conclusione falsa.
> - Modus ponens e modus tollens sono validi; affermare il conseguente e negare l'antecedente no.

## Verso l'esame

- **Il valore di una formula riga per riga**: è il quiz 3 della simulazione 1 del 2023/24, con $(A \to B) \leftrightarrow (B \to A)$. Si scrive una colonna per pezzo.
- **Formule equivalenti nei circuiti**: nel quiz 6 della stessa simulazione bisogna riconoscere con De Morgan che due formule descrivono lo stesso circuito.
- **Tradurre e negare**: «solo se», «condizione necessaria», la negazione di un «se… allora». Con i quantificatori del §1.5 tornano nella simulazione 2.
- L'esame è un quiz di 9 domande da 3 punti in 45 minuti, con Safe Exam Browser. Appelli 2026/27: venerdì 29/01/2027 e giovedì 18/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Quando è vera $p \vee q$? E $p \oplus q$?
$p \vee q$ quando almeno una delle due è vera; $p \oplus q$ quando ne è vera esattamente una.
:::

::: domanda Quante righe ha la tavola di verità di una formula con 3 lettere?
8, cioè $2^3$.
:::

::: domanda In quale riga $p \to q$ è falsa?
Solo con $p$ vera e $q$ falsa.
:::

::: domanda Come si scrive «p solo se q» con la freccia?
$p \to q$: quello che segue «solo se» è la conclusione.
:::

::: domanda Qual è la contronominale di $p \to q$, ed è equivalente?
$\neg q \to \neg p$, ed è equivalente: ha la stessa tavola.
:::

::: domanda Quanto vale $\neg(p \vee q)$ per De Morgan?
$\neg p \wedge \neg q$.
:::

::: domanda Da $p \to q$ e $q$ si può ricavare $p$?
No: è la fallacia di affermare il conseguente. Il controesempio è la riga con $p$ falsa e $q$ vera.
:::

## Quiz d'esame

Le domande vere che conosco sono quelle delle due simulazioni d'esame ufficiali del 2023/24. Le prime tre vengono da lì: le simulazioni hanno domande a più risposte, che qui sono diventate domande con una risposta giusta. Sulle argomentazioni e sulle traduzioni con «solo se» nelle simulazioni non ci sono domande: le ultime quattro sono **sul modello** di quelle vere, con gli esercizi del libro. Ho ricontrollato tutte le tavole con un programma.

```quiz
D: Simulazione d'esame 1, 2023/24, domanda 3. Considera la formula $(A \to B) \leftrightarrow (B \to A)$. Quali sono i suoi valori nelle righe $A$ = V, $B$ = V; $A$ = V, $B$ = F; $A$ = F, $B$ = F; $A$ = F, $B$ = V, in quest'ordine?
- V, V, V, V
+ V, F, V, F
- V, F, V, V
- F, V, F, V
- V, F, F, F
= Le due frecce hanno lo stesso valore quando $A$ e $B$ sono uguali: con V, V e con F, F tutte e due sono vere. Con $A$ = V, $B$ = F la prima freccia è falsa e la seconda vera; con $A$ = F, $B$ = V il contrario. Quindi V, F, V, F. La risposta più insidiosa è V, F, V, V: chi pensa che con $A$ falsa tutto sia «vero a vuoto» dimentica che $B \to A$ con $B$ vera e $A$ falsa è falsa.

D: Simulazione d'esame 2, 2023/24, domanda 2, con una risposta cambiata. Quale di queste NON è una proprietà valida in tutte le algebre booleane? Qui $+$ è l'«o», $\cdot$ l'«e» e $x'$ il «non».
+ $x + (y \cdot z) = (x \cdot y) + (x \cdot z)$
- $x + (y \cdot z) = (y + x) \cdot (z + x)$
- $x + x = x$
- $x + x' = 1$ e $x \cdot x' = 0$
- $x \cdot (y + z) = (x \cdot y) + (x \cdot z)$
= Con $x = 1$, $y = 0$, $z = 0$ la sinistra vale 1 e la destra 0. La risposta più insidiosa è la seconda, che con i numeri sembra sbagliata: in logica però l'«o» si distribuisce sull'«e», $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$. Le altre sono l'idempotenza, il complemento e la distributiva dell'«e» sull'«o». L'ultima risposta l'ho messa io al posto di un'affermazione sugli insiemi con due elementi, falsa anche lei.

D: Simulazione d'esame 1, 2023/24, domanda 6. Un circuito calcola $(A \wedge \neg C) \vee (\neg C \wedge B)$. Quale formula descrive la stessa funzione?
- $(\neg C \vee A) \wedge (\neg C \vee B)$
+ $\neg((C \vee \neg A) \wedge (C \vee \neg B))$
- $\neg C \wedge A \wedge B$
- $\neg(C \wedge (A \vee B))$
- $\neg C \vee A \vee B$
= Con De Morgan sulla parentesi grande: $\neg(C \vee \neg A) \vee \neg(C \vee \neg B)$, e di nuovo: $(\neg C \wedge A) \vee (\neg C \wedge B)$. La risposta più insidiosa è la prima, che scambia «e» e «o»: con $A$, $B$ e $C$ tutte false vale V, mentre il circuito dà F. La terza vuole $A$ e $B$ vere tutte e due; la quarta e la quinta sono vere anche con le tre lettere false.

D: Sul modello degli esercizi del §1.3. Con $p$ = «passo l'esame» e $q$ = «studio», come si scrive «passo l'esame solo se studio»?
+ $p \to q$
- $q \to p$
- $p \leftrightarrow q$
- $p \wedge q$
- $\neg p \to \neg q$
= Quello che segue «solo se» è la conclusione: se passo l'esame, allora ho studiato. Studiare è una condizione necessaria. La risposta più insidiosa è $q \to p$, l'inversa: direbbe che basta studiare per passare. $\neg p \to \neg q$ è la contronominale di $q \to p$, quindi dice la stessa cosa sbagliata.

D: Sul modello della simulazione 2, domanda 6, che chiede le negazioni di frasi. Qual è la negazione di «se il treno è in ritardo, perdo la coincidenza»?
- Se il treno non è in ritardo, non perdo la coincidenza.
- Se perdo la coincidenza, il treno è in ritardo.
+ Il treno è in ritardo e non perdo la coincidenza.
- Il treno non è in ritardo e perdo la coincidenza.
- Il treno non è in ritardo o non perdo la coincidenza.
= $\neg(p \to q) \equiv p \wedge \neg q$: la promessa è smentita solo se il treno è in ritardo e la coincidenza non si perde. La risposta più insidiosa è la prima, l'opposta: è un'altra promessa, non la negazione, e con il treno in ritardo e la coincidenza persa è vera come la frase di partenza.

D: Sul modello degli esercizi del §1.4. L'argomentazione «se piove, la strada è bagnata; la strada è bagnata; quindi piove» è:
- valida, per il modus ponens
- valida, per il modus tollens
+ non valida: afferma il conseguente
- non valida: nega l'antecedente
- valida, perché la conclusione può essere vera
= Le premesse sono $p \to q$ e $q$, la conclusione $p$. Nella riga $p$ falsa, $q$ vera le premesse sono vere e la conclusione falsa: è il controesempio. Si chiama affermare il conseguente. La risposta più insidiosa è il modus ponens, che parte da $p$, non da $q$. Che la conclusione possa essere vera non basta: deve esserlo in tutte le righe con le premesse vere.

D: Sul modello degli esercizi del §1.4. Da $p \vee q$, $q \to r$ e $\neg r$ che cosa segue?
- $q$
- $\neg p$
+ $p$
- $r$
- niente: l'argomentazione non è valida
= Da $q \to r$ e $\neg r$ viene $\neg q$, per il modus tollens. Da $p \vee q$ e $\neg q$ viene $p$, per il sillogismo disgiuntivo. La risposta più insidiosa è $\neg p$: chi dimentica la catena pensa che negare $r$ neghi tutto.
```

## Fonti

- Le lezioni complete: [06 · Proposizioni, connettivi e tavole di verità](06_proposizioni_connettivi_tavole.html), [07 · «Se… allora», «se e solo se» ed equivalenza logica](07_condizionali_equivalenza_logica.html), [08 · Argomentazioni e regole di inferenza](08_argomentazioni_regole_inferenza.html), con gli strumenti per le tavole, i quiz e gli esercizi.
- Libro di testo del corso, parte 2 (R. Johnsonbaugh, cap. 1), §1.2–1.4.
- Simulazioni d'esame del 2023/24 della pagina d'esame comune: simulazione 1, domande 3 e 6; simulazione 2, domanda 2.
- Esame e diario del canale B: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md).
