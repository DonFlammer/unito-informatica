---
corso: FDA
lezione: "07"
data: 2026-10-15
titolo: «Se… allora», «se e solo se» ed equivalenza logica
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 07 · Libro, parte 2, §1.3
descrizione: >-
  Appunti della lezione 07 di Fondamenti dell'Informatica (canale B): la proposizione condizionale «se p allora q» e
  la sua tavola, ipotesi e conclusione, condizioni necessarie e sufficienti, «solo se», inversa, contraria e
  contronominale, il bicondizionale «se e solo se», equivalenza logica, leggi di De Morgan e le equivalenze da
  sapere, con il quiz delle simulazioni d'esame svolto, strumenti interattivi ed esercizi.
lede: >-
  «Se vinciamo, offro la pizza» è una promessa: quando è stata infranta? Da questa domanda nasce la tavola del «se…
  allora», il connettivo più importante della logica. Poi il «se e solo se», e il modo di capire quando due frasi
  diverse dicono la stessa cosa.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 1), §1.3
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 1), §1.3 «Conditional Propositions
  and Logical Equivalence», con le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A;
  diario del canale B; dispense di logica di Felice Cardone (Moodle del canale A); simulazione d'esame 1 del 2023/24
appunti_html: appunti/FDA/07_condizionali_equivalenza_logica.html
genera_html: true
simboli_logici: si
---

## In breve

- «**Se**… **allora**…» si scrive con una freccia, $p \to q$. È falsa in **un solo caso**: quando la prima parte, l'**ipotesi**, è vera e la seconda, la **conclusione**, è falsa. Come una promessa, infranta solo se la condizione si avvera e la promessa non è mantenuta.
- Quando l'ipotesi è falsa, la frase è **vera**, qualunque cosa dica la conclusione: è vera **a vuoto**.
- L'ipotesi è una condizione **sufficiente**, la conclusione una condizione **necessaria**. Nelle frasi con «**solo se**», quello che segue «solo se» è la conclusione.
- Scambiare ipotesi e conclusione cambia il senso. La **contronominale**, «se non $q$ allora non $p$», invece dice la stessa cosa.
- «**Se e solo se**», scritto con la doppia freccia $\leftrightarrow$, è vero quando le due parti hanno lo stesso valore.
- Due formule sono **logicamente equivalenti** quando hanno la stessa tavola di verità. Le più usate sono le **leggi di De Morgan**: negare un «e» dà un «o» di negazioni, e viceversa.
- All'esame: la simulazione 1 del 2023/24 chiede il valore di $(A \to B) \leftrightarrow (B \to A)$ riga per riga.

> [!CANALI]
> Nel canale B è la lezione di giovedì 15/10, dalle 9 alle 11. Per il docente è la lezione 8, perché la prima è stata un'introduzione: qui è la 07. Il diario del canale B la annuncia così: «Capitolo 1.3 (Parte 2). Proposizioni condizionali e equivalenza logica.» **Ho scritto questi appunti prima della lezione**, sul §1.3 del libro, con le sue domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A (id 3851, aperto agli ospiti). Il diario del docente non dice altro su che cosa è stato fatto in aula. Si parte dalla [lezione 06](06_proposizioni_connettivi_tavole.html): proposizioni, connettivi e tavole di verità. Nel canale A gli stessi argomenti sono nelle dispense di Felice Cardone; nel canale C nei lucidi del docente.

## Una promessa: «se… allora» (libro, §1.3)

Prima della partita il capitano dice alla squadra: «**Se** vinciamo, **allora** offro la pizza a tutti». Dopo la partita, quando si può dire che ha mentito?

| Vinciamo? | Offre la pizza? | Ha mantenuto la promessa? |
|:-:|:-:|:-:|
| sì | sì | sì |
| sì | no | **no** |
| no | sì | sì |
| no | no | sì |

C'è un solo caso in cui la promessa è infranta: la squadra vince e la pizza non arriva. Se la squadra perde, il capitano non ha promesso niente: può offrire la pizza lo stesso per consolare tutti, o non offrirla. In tutti e due i casi non ha mentito.

> [!IDEA]
> «Se… allora…» non dice che la prima cosa succede, e non dice che succede la seconda. Dice soltanto una cosa: non può capitare che la prima sia vera e la seconda falsa.

Con le lettere: $p$ è «vinciamo», $q$ è «offro la pizza». La promessa si scrive $p \to q$. Si legge «se pi allora cu», oppure «pi implica cu».

> [!DEF] Proposizione condizionale (libro, §1.3)
> Se $p$ e $q$ sono proposizioni, la proposizione «se $p$ allora $q$» si chiama **proposizione condizionale** e si scrive $p \to q$. La proposizione $p$ è l'**ipotesi** (o antecedente) e $q$ è la **conclusione** (o conseguente). La proposizione $p \to q$ è falsa quando $p$ è vera e $q$ è falsa; è vera in tutti gli altri casi.

**Come si legge.** La tavola è quella della promessa, con V e F:

| $p$ | $q$ | $p \to q$ |
|:-:|:-:|:-:|
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

La riga da ricordare è la seconda: ipotesi vera e conclusione falsa. È l'unica F.

### Le righe con l'ipotesi falsa

Le righe 3 e 4 sorprendono sempre. «Se $2 + 2 = 5$, allora la Luna è di formaggio» è **vera**: l'ipotesi è falsa, e una promessa con la condizione che non si avvera non si può smentire. In questo caso l'implicazione è vera **a vuoto**.

In matematica serve proprio così. Pensa alla frase «per ogni numero, se è maggiore di 2 ed è primo, allora è dispari». Per il numero 4 l'ipotesi è falsa: la frase non dice niente su 4, e non deve diventare falsa per colpa sua.

> [!TRAPPOLA] «Se… allora» non vuol dire «perché»
> In italiano «se… allora» fa pensare a una causa. In logica conta solo il valore di verità delle due parti. «Se Torino è in Piemonte, allora $2 + 2 = 4$» è vera: le due frasi sono vere, anche se non hanno niente a che fare l'una con l'altra.

### Un modo di scriverla con «o» e «non»

Guarda di nuovo la tavola: la promessa è vera quando la squadra perde, **oppure** quando la pizza arriva. Quindi $p \to q$ ha la stessa tavola di $\neg p \vee q$. In C non c'è un operatore per «se… allora» tra due condizioni: si scrive `!p || q`.

| $p$ | $q$ | $\neg p$ | $\neg p \vee q$ | $p \to q$ |
|:-:|:-:|:-:|:-:|:-:|
| V | V | F | V | V |
| V | F | F | F | F |
| F | V | V | V | V |
| F | F | V | V | V |

È l'esercizio 80 del §1.3, nelle soluzioni del libro, e nell'esercizio d'esame della lezione 06 l'avevi già incontrata con un'altra forma.

::: prova Quanto valgono queste implicazioni? (a) «Se 7 è pari, allora 7 è primo.» (b) «Se 7 è primo, allora 7 è pari.» (c) «Se $3 < 5$, allora $5 > 3$.»
(a) Vera a vuoto: l'ipotesi «7 è pari» è falsa. (b) Falsa: ipotesi vera, conclusione falsa. (c) Vera: ipotesi e conclusione sono tutte e due vere.
:::

> [!RICORDA]
> - Il «se… allora» è falso solo con l'ipotesi vera e la conclusione falsa.
> - Con l'ipotesi falsa l'implicazione è vera, a vuoto.
> - $p \to q$ ha la stessa tavola di $\neg p \vee q$.

## Tanti modi di dire «se… allora» (libro, §1.3)

In italiano la stessa promessa si può dire in molti modi. Il libro dedica a questo diversi esercizi, ed è una delle cose su cui si sbaglia di più.

### Condizione sufficiente e condizione necessaria

Nella promessa del capitano, vincere **basta** per avere la pizza: è una condizione **sufficiente**. Al contrario, la pizza è una **conseguenza obbligata** della vittoria: se manca la pizza, la squadra non ha vinto. Per questo la pizza è una condizione **necessaria** per la vittoria.

> [!IDEA]
> In un «se… allora», l'ipotesi è **sufficiente** per la conclusione: se c'è l'ipotesi, c'è anche la conclusione. La conclusione è **necessaria** per l'ipotesi: senza la conclusione, niente ipotesi.

Le domande di ripasso del libro lo dicono proprio così: nella frase $p \to q$, la conclusione è una condizione necessaria e l'ipotesi è una condizione sufficiente.

### La tabella delle traduzioni

| In italiano | Formula |
|---|---|
| se $p$ allora $q$ | $p \to q$ |
| $q$ se $p$ | $p \to q$ |
| $p$ **solo se** $q$ | $p \to q$ |
| $p$ è condizione **sufficiente** per $q$ | $p \to q$ |
| $q$ è condizione **necessaria** per $p$ | $p \to q$ |
| $q$ ogni volta che $p$ | $p \to q$ |

> [!TRAPPOLA] «Solo se» mette la freccia nel verso che non ti aspetti
> «Passi l'esame **solo se** studi» non promette che chi studia passa. Dice che **chi passa ha studiato**: passi $\to$ studi. La frase è smentita solo da chi passa senza aver studiato. Il «solo se» introduce la condizione **necessaria**, che va a destra della freccia.

> [!ESEMPIO] Frasi con «solo se», tradotte
> Le soluzioni degli esercizi del libro traducono frasi di questo tipo così:
> - «Puoi ispezionare l'aereo solo se hai l'autorizzazione»: se ispezioni l'aereo, allora hai l'autorizzazione.
> - «Il programma è leggibile solo se è ben strutturato»: se il programma è leggibile, allora è ben strutturato.
>
> In tutte e due la frase dopo «solo se» va **dopo** l'«allora».

::: prova Con $p$: «piove» e $q$: «prendo l'ombrello», traduci: (a) «Prendo l'ombrello se piove.» (b) «Prendo l'ombrello solo se piove.» (c) «Che piova è condizione sufficiente perché prenda l'ombrello.»
(a) $p \to q$: «se piove, prendo l'ombrello». (b) $q \to p$: se prendo l'ombrello, allora piove. (c) $p \to q$: la condizione sufficiente è l'ipotesi.
:::

> [!RICORDA]
> - Condizione sufficiente: l'ipotesi, a sinistra della freccia. Condizione necessaria: la conclusione, a destra.
> - «Solo se» introduce la conclusione: «passo solo se studio» è «se passo, allora ho studiato».

## Girare la promessa: inversa e contronominale (libro, §1.3)

Dalla promessa «se vinciamo, offro la pizza» se ne possono costruire altre tre, girandola o negandola. Una sola dice la stessa cosa.

| Nome | Formula | La promessa diventa |
|---|:-:|---|
| la promessa | $p \to q$ | se vinciamo, offro la pizza |
| **inversa** | $q \to p$ | se offro la pizza, abbiamo vinto |
| **contraria** | $\neg p \to \neg q$ | se non vinciamo, non offro la pizza |
| **contronominale** | $\neg q \to \neg p$ | se non offro la pizza, non abbiamo vinto |

Pensa al caso in cui la squadra perde e il capitano offre lo stesso la pizza. La promessa resta vera. L'inversa no: c'è la pizza ma non la vittoria. Anche la contraria è falsa: non abbiamo vinto, e la pizza c'è. La contronominale invece resta vera, perché la pizza è arrivata.

> [!TRAPPOLA] I nomi cambiano da libro a libro
> Il libro, in inglese, chiama *converse* la formula $q \to p$ e *contrapositive* la formula $\neg q \to \neg p$. In italiano $q \to p$ si trova chiamata «inversa» o «conversa», e $\neg q \to \neg p$ «contronominale» o «contrapposta». Ricorda le formule: l'unica che dice la stessa cosa di $p \to q$ è $\neg q \to \neg p$.

La tavola lo conferma: la colonna di $p \to q$ e quella di $\neg q \to \neg p$ sono uguali, le altre due no.

| $p$ | $q$ | $p \to q$ | $q \to p$ | $\neg p \to \neg q$ | $\neg q \to \neg p$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | V | V | V | V |
| V | F | F | V | V | F |
| F | V | V | F | F | V |
| F | F | V | V | V | V |

> [!ESEMPIO] Con i numeri (esercizio 59 del libro, dalle soluzioni)
> Prendi $p$: «$4 < 6$», che è vera, e $q$: «$9 > 12$», che è falsa.
> - La frase $p \to q$, «se $4 < 6$ allora $9 > 12$», è **falsa**: ipotesi vera, conclusione falsa.
> - L'inversa $q \to p$, «se $9 > 12$ allora $4 < 6$», è **vera**: l'ipotesi è falsa.
> - La contronominale $\neg q \to \neg p$, «se $9 \le 12$ allora $4 \ge 6$», è **falsa**, come la frase di partenza.

Nella prossima parte del libro questa equivalenza diventa un modo di dimostrare: invece di una frase, a volte è più facile dimostrare la sua contronominale. Si chiama dimostrazione per contrapposizione.

::: prova Scrivi l'inversa e la contronominale di «se un numero è divisibile per 4, allora è pari». Quale delle due è vera?
Inversa: «se un numero è pari, allora è divisibile per 4». È falsa: 6 è pari ma non divisibile per 4. Contronominale: «se un numero non è pari, allora non è divisibile per 4». È vera, come la frase di partenza.
:::

> [!RICORDA]
> - La contronominale $\neg q \to \neg p$ dice la stessa cosa di $p \to q$.
> - L'inversa $q \to p$ no: è l'errore più comune.

## «Se e solo se» (libro, §1.3)

A volte la promessa vale nei due versi. Il regolamento del torneo dice: «Una squadra va in finale **se e solo se** vince la semifinale». Chi vince va in finale, e chi va in finale ha vinto. Le due frasi sono sempre insieme: tutte e due vere, o tutte e due false.

> [!DEF] Proposizione bicondizionale (libro, §1.3)
> Se $p$ e $q$ sono proposizioni, la proposizione «$p$ se e solo se $q$» si chiama **proposizione bicondizionale** e si scrive $p \leftrightarrow q$. È vera quando $p$ e $q$ sono tutte e due vere o tutte e due false, e falsa negli altri casi.

**Come si legge.** Il «se e solo se» è vero quando le due parti hanno **lo stesso valore**.

| $p$ | $q$ | $p \leftrightarrow q$ |
|:-:|:-:|:-:|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | V |

Il nome dice già come è fatta: «se» è una freccia in un verso, «solo se» è la freccia nell'altro verso. Insieme, $p \leftrightarrow q$ ha la stessa tavola di $(p \to q) \wedge (q \to p)$. In matematica si scrive spesso «sse».

Rispetto all'«o» esclusivo della lezione 06 è il contrario: $p \oplus q$ è vera quando i valori sono diversi, $p \leftrightarrow q$ quando sono uguali.

::: prova Quanto valgono «$2 + 2 = 4$ se e solo se $3$ è dispari» e «$2 + 2 = 5$ se e solo se $3$ è pari»?
La prima è vera: tutte e due le parti sono vere. Anche la seconda è vera: tutte e due le parti sono false.
:::

> [!RICORDA]
> - Il «se e solo se» è vero quando le due parti hanno lo stesso valore.
> - «Se e solo se» sono due implicazioni insieme, nei due versi.

## Quando due frasi dicono la stessa cosa (libro, §1.3)

«Se non offro la pizza, non abbiamo vinto» e «se vinciamo, offro la pizza» sono scritte in modo diverso, ma in ogni situazione sono vere o false insieme. Sono **logicamente equivalenti**.

> [!DEF] Equivalenza logica (libro, §1.3)
> Siano $P$ e $Q$ proposizioni composte dalle stesse proposizioni $p_1, \dots, p_n$. $P$ e $Q$ sono **logicamente equivalenti** se, per ogni scelta dei valori di verità di $p_1, \dots, p_n$, sono tutte e due vere o tutte e due false. Si scrive $P \equiv Q$.

**Come si legge.** $P \equiv Q$ vuol dire: **stessa tavola di verità**, riga per riga. Per controllarlo si fanno le due tavole e si confrontano le colonne finali. Per smentirlo basta **una riga** in cui le due formule hanno valori diversi.

> [!TRAPPOLA] $\equiv$ e $\leftrightarrow$ non sono la stessa cosa
> $\leftrightarrow$ è un connettivo: $p \leftrightarrow q$ è una formula, che in certe righe è vera e in altre falsa. $\equiv$ non sta dentro una formula: è una frase che dici **su** due formule, «hanno la stessa tavola». Il legame tra i due: $P \equiv Q$ esattamente quando $P \leftrightarrow Q$ è vera in tutte le righe, cioè è una tautologia.

Lo strumento qui sotto confronta due formule e colora in rosso le righe in cui sono diverse. Prova con la promessa e la sua inversa, poi con la contronominale.

```widget logica
titolo: Due formule sono equivalenti?
modo: equivalenza
a: p → q
b: ¬q → ¬p
```

::: prova Senza tavola: $p \to q$ e $q \to p$ sono equivalenti? Trova una riga che lo decida.
No. Con $p$ = V e $q$ = F la prima è falsa e la seconda è vera. Basta questa riga.
:::

> [!RICORDA]
> - $P \equiv Q$: stessa tavola di verità.
> - Per dire che non sono equivalenti basta una riga diversa.

## Le leggi di De Morgan (libro, §1.3)

Il capitano dice: «Offro la pizza **e** il gelato». Quando non ha mantenuto la parola? Quando manca la pizza, **oppure** quando manca il gelato, o tutti e due. Negare un «e» dà un «o» di negazioni.

Al contrario: «Vado al mare **o** in montagna». Quando è falso? Solo se non vado né al mare **né** in montagna. Negare un «o» dà un «e» di negazioni.

> [!TEOREMA] Leggi di De Morgan (libro, §1.3)
> $$\neg(p \vee q) \equiv \neg p \wedge \neg q \qquad \text{e} \qquad \neg(p \wedge q) \equiv \neg p \vee \neg q.$$

**Come si legge.** Per negare una frase con «e» o con «o»: si nega ogni pezzo, e si **scambia** il connettivo. La negazione di un «o» è un «e», la negazione di un «e» è un «o».

| $p$ | $q$ | $\neg(p \vee q)$ | $\neg p \wedge \neg q$ | $\neg(p \wedge q)$ | $\neg p \vee \neg q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | F | F | F | F |
| V | F | F | F | V | V |
| F | V | F | F | V | V |
| F | F | V | V | V | V |

> [!ESEMPIO] Negare in italiano (esercizi 73 e 76 del libro, dalle soluzioni)
> - La negazione di «Pat userà il tapis roulant o solleverà pesi» è «Pat **non** userà il tapis roulant **e non** solleverà pesi».
> - La negazione di «per il chili servono il peperoncino e la cipolla» è «per il chili **non** serve il peperoncino **o non** serve la cipolla».

> [!TRAPPOLA] De Morgan a metà
> L'errore tipico è negare i pezzi e dimenticare di scambiare il connettivo. $\neg(p \wedge q)$ **non** è $\neg p \wedge \neg q$. «Non è vero che ho la pizza e il gelato» non vuol dire «non ho né la pizza né il gelato»: basta che manchi uno dei due.

### Negare un «se… allora»

Quando è falsa la promessa «se vinciamo, offro la pizza»? Solo quando vinciamo e la pizza non c'è. Quindi la negazione di un'implicazione **non** è un'implicazione:

$$\neg(p \to q) \equiv p \wedge \neg q.$$

La negazione di «se studi, passi l'esame» è «studi **e** non passi l'esame». Non è «se non studi, passi», e non è «se studi, non passi». Le dispense del canale A lo fanno dimostrare come esercizio.

::: prova Scrivi la negazione senza usare «non è vero che»: (a) «Piove e fa freddo.» (b) «Vado al cinema o a teatro.» (c) «Se piove, resto a casa.»
(a) «Non piove oppure non fa freddo.» (b) «Non vado né al cinema né a teatro.» (c) «Piove e non resto a casa.»
:::

> [!RICORDA]
> - De Morgan: negando, si negano i pezzi e si scambia «e» con «o».
> - La negazione di $p \to q$ è $p \wedge \neg q$.

## Le equivalenze da sapere

Le equivalenze servono come le regole dell'algebra: permettono di trasformare una formula in un'altra più comoda, un passo alla volta, senza fare la tavola. Eccole tutte; ognuna si controlla con una tavola o con lo strumento.

| Nome | Equivalenza |
|---|---|
| doppia negazione | $\neg\neg p \equiv p$ |
| De Morgan | $\neg(p \wedge q) \equiv \neg p \vee \neg q$ e $\neg(p \vee q) \equiv \neg p \wedge \neg q$ |
| commutative | $p \wedge q \equiv q \wedge p$ e $p \vee q \equiv q \vee p$ |
| associative | $(p \wedge q) \wedge r \equiv p \wedge (q \wedge r)$, e lo stesso con $\vee$ |
| distributive | $p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)$ e $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$ |
| «se» come «o» | $p \to q \equiv \neg p \vee q$ |
| negare un «se» | $\neg(p \to q) \equiv p \wedge \neg q$ |
| contronominale | $p \to q \equiv \neg q \to \neg p$ |
| «se e solo se» | $p \leftrightarrow q \equiv (p \to q) \wedge (q \to p)$ |

### L'ordine dei connettivi

Alla regola della lezione 06 si aggiungono le due frecce, che vengono per ultime. Senza parentesi si calcola:

1. prima $\neg$;
2. poi $\wedge$;
3. poi $\vee$;
4. poi $\to$;
5. per ultimo $\leftrightarrow$.

Quindi $p \wedge q \to r$ vuol dire $(p \wedge q) \to r$. Anche qui, nel dubbio, si mettono le parentesi.

> [!ESEMPIO] Una formula trasformata passo per passo
> $\neg(p \to \neg q)$ è equivalente a che cosa?
> 1. Negare un «se»: $\neg(p \to \neg q) \equiv p \wedge \neg\neg q$.
> 2. Doppia negazione: $p \wedge \neg\neg q \equiv p \wedge q$.
>
> Quindi $\neg(p \to \neg q) \equiv p \wedge q$. A parole: «non è vero che, se $p$, allora non $q$» vuol dire «$p$ e $q$».

### Tautologie con le frecce

Una **tautologia** è una formula vera in tutte le righe (lezione 06). Con le frecce ce ne sono di molto utili.

| Formula | Che cosa dice |
|---|---|
| $(p \wedge (p \to q)) \to q$ | se $p$ è vera e $p$ implica $q$, allora $q$ è vera |
| $((p \to q) \wedge (q \to r)) \to (p \to r)$ | le implicazioni si possono mettere in fila |
| $p \to (p \vee q)$ | da $p$ segue «$p$ o qualunque cosa» |
| $(p \to q) \vee (q \to p)$ | tra due frasi, una implica l'altra |

Le prime due saranno le regole di inferenza della prossima lezione. Una formula che **sembra** una tautologia ma non lo è: $(p \to q) \to (q \to p)$. Con $p$ = F e $q$ = V è falsa. Dall'implicazione non segue la sua inversa.

```widget logica
titolo: Tautologia o no?
modo: tavola
formula: (p ∧ (p → q)) → q
```

::: prova Con lo strumento qui sopra, controlla se $(p \to q) \to (q \to p)$ è una tautologia. In quale riga è falsa?
Non è una tautologia: è falsa nella riga $p$ = F, $q$ = V. Lì $p \to q$ è vera, a vuoto, e $q \to p$ è falsa.
:::

> [!RICORDA]
> - Le equivalenze trasformano una formula in un'altra con la stessa tavola, come le regole dell'algebra.
> - Ordine senza parentesi: prima «non», poi «e», poi «o», poi le due frecce.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $p \to q$ | «se $p$ allora $q$», «$p$ implica $q$» | falsa solo con $p$ vera e $q$ falsa | V $\to$ F = F |
| $p \leftrightarrow q$ | «$p$ se e solo se $q$» | vera quando i valori sono uguali | F $\leftrightarrow$ F = V |
| $P \equiv Q$ | «$P$ è equivalente a $Q$» | $P$ e $Q$ hanno la stessa tavola | $p \to q \equiv \neg p \vee q$ |
| $q \to p$ | «inversa» | girare la freccia: non equivalente | |
| $\neg q \to \neg p$ | «contronominale» | equivalente a $p \to q$ | |
| sse | «se e solo se» | abbreviazione di $\leftrightarrow$ | |
| `!p \|\| q` | «not p or q» | l'implicazione scritta in C | |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti.

**Che cosa serve di questa lezione**

1. **Il valore di una formula con le frecce, riga per riga.** È il quiz 3 della simulazione 1 del 2023/24, svolto qui sotto.
2. **Riconoscere formule equivalenti.** Nel quiz 6 della stessa simulazione bisogna capire che due formule di un circuito hanno la stessa tavola: con De Morgan bastano due passi.
3. **Tradurre e negare**: «solo se», «condizione necessaria», la negazione di un «se… allora». Torneranno con i quantificatori, nella simulazione 2.

### Una domanda vera, letta insieme

**Simulazione d'esame 1 del 2023/24, domanda 3.** Il testo: «Considera la formula $(A \to B) \leftrightarrow (B \to A)$. Seleziona il valore della formula in ogni riga della tabella.» Le righe sono, in quest'ordine: $A$ = T, $B$ = T; $A$ = T, $B$ = F; $A$ = F, $B$ = F; $A$ = F, $B$ = T. Nel quiz T sta per vero.

**In pratica chiede:** quattro valori, uno per riga. Le righe non sono nell'ordine solito: l'ultima è $A$ falsa e $B$ vera.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: i due pezzi.** In ogni riga calcolo $A \to B$ e $B \to A$. Ognuno è falso solo con l'ipotesi vera e la conclusione falsa.
>
> | $A$ | $B$ | $A \to B$ | $B \to A$ | formula |
> |:-:|:-:|:-:|:-:|:-:|
> | V | V | V | V | **V** |
> | V | F | F | V | **F** |
> | F | F | V | V | **V** |
> | F | V | V | F | **F** |
>
> **Passo 2: il «se e solo se».** È vero quando i due pezzi hanno lo stesso valore: righe 1 e 3.
>
> **Passo 3: la risposta.** Nell'ordine del quiz: **T, F, T, F**. Le risposte scritte a mano nella simulazione svolta che circola tra gli studenti sono le stesse.
>
> Osservazione: la formula è vera esattamente quando $A$ e $B$ hanno lo stesso valore. È equivalente ad $A \leftrightarrow B$.

### Il circuito con De Morgan

Nella domanda 6 della stessa simulazione il circuito calcola $(\neg C \wedge A) \vee (\neg C \wedge B)$, e una delle risposte giuste è la formula $\neg((C \vee \neg A) \wedge (C \vee \neg B))$. Nella [lezione 05](05_esercizi_circuiti_rappresentazioni.html) l'ho controllata riga per riga. Con De Morgan bastano due passi:

1. $\neg((C \vee \neg A) \wedge (C \vee \neg B)) \equiv \neg(C \vee \neg A) \vee \neg(C \vee \neg B)$, negando un «e»;
2. ciascun pezzo è la negazione di un «o»: $\neg(C \vee \neg A) \equiv \neg C \wedge A$, e allo stesso modo l'altro.

Si arriva a $(\neg C \wedge A) \vee (\neg C \wedge B)$: è la formula del circuito.

> [!METODO] Le domande sulle frecce e sulle equivalenze
> 1. **Valore in una riga**: per ogni freccia guarda solo la combinazione «ipotesi V, conclusione F», che è l'unica falsa.
> 2. **Equivalenti?** Prima cerca una riga che le distingua: se la trovi, hai finito. Se non la trovi, fai la tavola o usa le equivalenze.
> 3. **Negare**: De Morgan scambia «e» e «o»; la negazione di $p \to q$ è $p \wedge \neg q$.
> 4. **Tradurre**: chi viene dopo «solo se» va a destra della freccia.

**Errori da evitare**

- Credere che $p \to q$ sia falsa quando $p$ è falsa: è vera.
- Confondere $p \to q$ con l'inversa $q \to p$.
- Girare la freccia nelle frasi con «solo se».
- Negare $p \to q$ con $\neg p \to \neg q$.
- Applicare De Morgan senza scambiare il connettivo.
- Usare $\equiv$ dentro una formula al posto di $\leftrightarrow$.

## Quiz

```quiz
D: Quando è falsa la proposizione $p \to q$?
+ Solo quando $p$ è vera e $q$ è falsa
- Quando $p$ è falsa
- Quando $q$ è falsa
- Quando $p$ e $q$ sono tutte e due false
- Quando $p$ e $q$ hanno valori diversi
= È la riga della promessa infranta: condizione avverata e promessa non mantenuta. La risposta più insidiosa è «quando $q$ è falsa»: con $p$ falsa e $q$ falsa l'implicazione è vera, a vuoto. Valori diversi rendono falso il «se e solo se», non il «se… allora».

D: Quanto vale «se $2 + 2 = 5$, allora Torino è in Lombardia»?
+ Vera
- Falsa
- Né vera né falsa
- Dipende da come si legge «allora»
- Non è una proposizione
= L'ipotesi è falsa, quindi l'implicazione è vera a vuoto. La risposta più insidiosa è «falsa», perché tutte e due le parti sono false: ma in logica conta solo la riga «ipotesi vera, conclusione falsa». È una proposizione: ogni parte è vera o falsa.

D: «Prendo il treno solo se c'è sciopero degli autobus», con $t$: «prendo il treno» e $s$: «c'è sciopero». Qual è la formula?
+ $t \to s$
- $s \to t$
- $t \leftrightarrow s$
- $\neg t \to s$
- $t \wedge s$
= Quello che viene dopo «solo se» è la condizione necessaria e va a destra: se prendo il treno, allora c'è sciopero. La risposta più insidiosa è $s \to t$, che è «prendo il treno se c'è sciopero». Il «se e solo se» direbbe tutte e due le cose insieme.

D: Quale formula è equivalente a $p \to q$?
+ $\neg q \to \neg p$
- $q \to p$
- $\neg p \to \neg q$
- $p \wedge \neg q$
- $\neg p \wedge q$
= La contronominale ha la stessa tavola. La risposta più insidiosa è $\neg p \to \neg q$: nega tutte e due le parti ma non scambia, ed è falsa con $p$ = F, $q$ = V, dove $p \to q$ è vera. $q \to p$ è l'inversa; $p \wedge \neg q$ è la negazione.

D: Qual è la negazione di «se studi, passi l'esame»?
+ «Studi e non passi l'esame.»
- «Se non studi, non passi l'esame.»
- «Se studi, non passi l'esame.»
- «Non studi e passi l'esame.»
- «Se non studi, passi l'esame.»
= La promessa è falsa solo se studi e non passi: $\neg(p \to q) \equiv p \wedge \neg q$. La risposta più insidiosa è «se studi, non passi»: è ancora un'implicazione, ed è vera a vuoto quando non studi, proprio come la frase di partenza. La negazione di un «se» non è un «se».

D: Per le leggi di De Morgan, $\neg(p \wedge q)$ è equivalente a:
+ $\neg p \vee \neg q$
- $\neg p \wedge \neg q$
- $p \vee q$
- $\neg p \to q$
- $p \to q$
= Si negano i pezzi e si scambia «e» con «o». La risposta più insidiosa è $\neg p \wedge \neg q$, che dimentica di scambiare il connettivo: con $p$ = V, $q$ = F è falsa, mentre $\neg(p \wedge q)$ è vera.

D: Quando è vera $p \leftrightarrow q$?
+ Quando $p$ e $q$ hanno lo stesso valore
- Solo quando $p$ e $q$ sono tutte e due vere
- Quando almeno una tra $p$ e $q$ è vera
- Quando $p$ e $q$ hanno valori diversi
- Quando $p$ è falsa
= Il «se e solo se» è vero con V e V, e anche con F e F. La risposta più insidiosa è «solo quando sono tutte e due vere»: dimentica la riga F, F. Valori diversi rendono vero l'«o» esclusivo, che è il contrario.

D: (Simulazione d'esame 1 del 2023/24, domanda 3) Qual è il valore di $(A \to B) \leftrightarrow (B \to A)$ con $A$ falsa e $B$ vera?
+ F
- V
- dipende dall'ordine delle righe
- non si può calcolare senza tutta la tavola
- V, perché $A \to B$ è vera a vuoto
= $A \to B$ è vera, a vuoto; $B \to A$ è falsa, ipotesi vera e conclusione falsa. I due pezzi hanno valori diversi, quindi il «se e solo se» è falso. La risposta più insidiosa è l'ultima: guarda solo il primo pezzo. Nel quiz era l'ultima riga.

D: Quale di queste formule **non** è una tautologia?
+ $(p \to q) \to (q \to p)$
- $(p \wedge (p \to q)) \to q$
- $p \to (p \vee q)$
- $(p \to q) \vee (q \to p)$
- $p \vee \neg p$
= Con $p$ = F e $q$ = V, $p \to q$ è vera e $q \to p$ è falsa: la formula è falsa. Dall'implicazione non segue l'inversa. La risposta più insidiosa è $(p \to q) \vee (q \to p)$, che sembra strana ma è sempre vera: se $q$ è vera è vera la prima, se $q$ è falsa è vera la seconda.

D: In quante righe della sua tavola è vera la formula $(p \to q) \wedge (q \to r)$?
N: 4
= Le righe sono 8. Servono $p \to q$ e $q \to r$ vere insieme: le combinazioni buone sono V V V, F V V, F F V e F F F. Nelle altre quattro c'è una V seguita da una F in uno dei due pezzi.
```

## Esercizi

::: esercizio base Riscaldamento: il valore delle frecce
Calcola $p \to q$, $q \to p$ e $p \leftrightarrow q$ con: (a) $p$: «$3 > 5$», $q$: «$2$ è pari»; (b) $p$: «$7$ è primo», $q$: «$7$ è pari»; (c) $p$: «$1 > 2$», $q$: «$1 > 3$».
::: soluzione
(a) $p$ = F, $q$ = V: $p \to q$ = V, $q \to p$ = F, $p \leftrightarrow q$ = F.

(b) $p$ = V, $q$ = F: $p \to q$ = F, $q \to p$ = V, $p \leftrightarrow q$ = F.

(c) $p$ = F, $q$ = F: $p \to q$ = V, $q \to p$ = V, $p \leftrightarrow q$ = V.
:::

::: esercizio base Riscaldamento: tradurre con «se»
Con $p$: «Giada studia» e $q$: «Giada passa l'esame», traduci: (a) «Se Giada studia, passa l'esame.» (b) «Giada passa l'esame solo se studia.» (c) «Studiare è condizione necessaria perché Giada passi l'esame.» (d) «Giada passa l'esame se e solo se studia.»
::: soluzione
(a) $p \to q$. (b) $q \to p$: chi passa ha studiato. (c) $q \to p$: la condizione necessaria va a destra. (d) $p \leftrightarrow q$.
:::

::: esercizio base Riscaldamento: inversa, contraria, contronominale
Scrivi l'inversa, la contraria e la contronominale di «se un quadrilatero è un quadrato, allora ha quattro lati uguali». Quali sono vere?
::: soluzione
1. La frase: vera.
2. Inversa: «se un quadrilatero ha quattro lati uguali, allora è un quadrato». Falsa: un rombo non quadrato ha quattro lati uguali.
3. Contraria: «se un quadrilatero non è un quadrato, allora non ha quattro lati uguali». Falsa, per lo stesso rombo.
4. Contronominale: «se un quadrilatero non ha quattro lati uguali, allora non è un quadrato». Vera, come la frase.
:::

::: esercizio base Riscaldamento: negare
Scrivi la negazione di queste frasi senza «non è vero che»: (a) «Gioco e vinco.» (b) «Esco o studio.» (c) «Se c'è il sole, vado al mare.» (d) «Passo solo se studio.»
::: soluzione
(a) «Non gioco oppure non vinco.» (b) «Non esco e non studio.» (c) «C'è il sole e non vado al mare.» (d) La frase è «se passo, allora ho studiato»; la negazione è «passo e non ho studiato».
:::

::: esercizio medio L'esportazione con la tavola
Mostra con una tavola di verità che $(p \wedge q) \to r \equiv p \to (q \to r)$.
::: soluzione
| $p$ | $q$ | $r$ | $p \wedge q$ | $(p \wedge q) \to r$ | $q \to r$ | $p \to (q \to r)$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | V | V | V | V | V |
| V | V | F | V | F | F | F |
| V | F | V | F | V | V | V |
| V | F | F | F | V | V | V |
| F | V | V | F | V | V | V |
| F | V | F | F | V | F | V |
| F | F | V | F | V | V | V |
| F | F | F | F | V | V | V |

La quinta e la settima colonna sono uguali. Tutte e due sono false solo nella riga $p$ = V, $q$ = V, $r$ = F. A parole: «se ho il biglietto e il documento, entro» è lo stesso che «se ho il biglietto, allora, se ho il documento, entro».
:::

::: esercizio medio Tautologie o no
Quali sono tautologie? Per quelle che non lo sono, dai una riga in cui sono false. (a) $(p \to q) \vee (q \to p)$; (b) $p \to (p \vee q)$; (c) $(p \vee q) \to p$; (d) $((p \to q) \wedge (q \to r)) \to (p \to r)$.
::: soluzione
(a) Tautologia: se $q$ è vera è vera $p \to q$; se $q$ è falsa è vera $q \to p$.

(b) Tautologia: se $p$ è vera, anche $p \vee q$ è vera; se $p$ è falsa, l'implicazione è vera a vuoto.

(c) Non è una tautologia: falsa con $p$ = F, $q$ = V, dove $p \vee q$ è vera e $p$ è falsa.

(d) Tautologia: è la regola delle implicazioni in fila. Controllata con un programma su tutte le 8 righe.
:::

::: esercizio medio Una formula trasformata
Usando solo le equivalenze della tabella, senza tavole, mostra che $(p \to q) \wedge (p \to r) \equiv p \to (q \wedge r)$.
::: soluzione
1. «Se» come «o», due volte: $(p \to q) \wedge (p \to r) \equiv (\neg p \vee q) \wedge (\neg p \vee r)$.
2. Distributiva letta al contrario: $(\neg p \vee q) \wedge (\neg p \vee r) \equiv \neg p \vee (q \wedge r)$.
3. «Se» come «o», al contrario: $\neg p \vee (q \wedge r) \equiv p \to (q \wedge r)$.

A parole: «se piove prendo l'ombrello, e se piove metto gli stivali» è lo stesso che «se piove, prendo l'ombrello e metto gli stivali».
:::

::: esercizio esame Valore in ogni riga
Considera la formula $(A \wedge B) \leftrightarrow (A \to B)$. Dai il suo valore nelle righe $A$ = V, $B$ = V; $A$ = V, $B$ = F; $A$ = F, $B$ = F; $A$ = F, $B$ = V. A quale formula più corta è equivalente?
::: soluzione
| $A$ | $B$ | $A \wedge B$ | $A \to B$ | formula |
|:-:|:-:|:-:|:-:|:-:|
| V | V | V | V | **V** |
| V | F | F | F | **V** |
| F | F | F | V | **F** |
| F | V | F | V | **F** |

Le risposte sono V, V, F, F. La formula è vera esattamente quando $A$ è vera: è equivalente ad $A$.
:::

::: esercizio esame Vero o falso sulle equivalenze
Vero o falso? (1) $\neg(A \to B) \equiv A \wedge \neg B$. (2) $A \to B \equiv B \to A$. (3) $\neg(A \vee B) \equiv \neg A \vee \neg B$. (4) $A \leftrightarrow B \equiv (A \to B) \wedge (B \to A)$. (5) Se $A$ è falsa, $A \to B$ è vera qualunque sia $B$.
::: soluzione
1. Vero: è la negazione di un «se».
2. Falso: è l'inversa; con $A$ = V e $B$ = F sono diverse.
3. Falso: per De Morgan è $\neg A \wedge \neg B$.
4. Vero: «se e solo se» sono due implicazioni.
5. Vero: è vera a vuoto.
:::

::: esercizio difficile Il quiz del circuito con le equivalenze
Senza tavola, mostra che $(\neg C \vee A) \wedge (\neg C \vee B)$ non è equivalente a $(\neg C \wedge A) \vee (\neg C \wedge B)$, e trova la riga che lo dimostra. È la risposta b sbagliata della domanda 6 della simulazione 1.
::: soluzione
Trasformo la prima con la distributiva letta al contrario: $(\neg C \vee A) \wedge (\neg C \vee B) \equiv \neg C \vee (A \wedge B)$. Trasformo la seconda allo stesso modo: $(\neg C \wedge A) \vee (\neg C \wedge B) \equiv \neg C \wedge (A \vee B)$.

La prima è vera ogni volta che $C$ è falsa, anche con $A$ e $B$ false. La seconda, con $C$ falsa, chiede anche $A$ o $B$. Quindi la riga $A$ = F, $B$ = F, $C$ = F le distingue: la prima vale V, la seconda F. È proprio la riga trovata nella lezione 05.
:::

::: esercizio difficile Il contrario di «se e solo se»
Mostra che $\neg(p \leftrightarrow q) \equiv p \oplus q$, e poi che $p \leftrightarrow q \equiv (p \wedge q) \vee (\neg p \wedge \neg q)$.
::: soluzione
1. $p \leftrightarrow q$ è vera quando i valori sono uguali; la sua negazione è vera quando sono diversi, cioè proprio quando è vera $p \oplus q$.
2. $p \leftrightarrow q$ è vera in due righe: tutte e due vere, descritta da $p \wedge q$; tutte e due false, descritta da $\neg p \wedge \neg q$. Unendo le due righe con «o» si ottiene una formula vera esattamente in quelle due righe. È il metodo «una riga vera alla volta» della lezione 06.
:::

## Domande di ripasso

::: domanda Quando è falsa $p \to q$? Perché con $p$ falsa è vera?
Solo quando $p$ è vera e $q$ è falsa. Con $p$ falsa è vera a vuoto: come una promessa con una condizione che non si avvera, non può essere smentita.
:::

::: domanda Che cosa sono la condizione necessaria e la condizione sufficiente in $p \to q$?
$p$ è sufficiente per $q$: se c'è $p$, c'è $q$. $q$ è necessaria per $p$: senza $q$ non c'è $p$.
:::

::: domanda Come si traduce «$p$ solo se $q$»?
Con $p \to q$. Quello che segue «solo se» è la condizione necessaria e va a destra della freccia.
:::

::: domanda Quali tra inversa, contraria e contronominale sono equivalenti a $p \to q$?
Solo la contronominale $\neg q \to \neg p$. L'inversa $q \to p$ e la contraria $\neg p \to \neg q$ non lo sono, ma sono equivalenti tra loro.
:::

::: domanda Quando è vera $p \leftrightarrow q$? A che cosa è equivalente?
Quando $p$ e $q$ hanno lo stesso valore. È equivalente a $(p \to q) \wedge (q \to p)$.
:::

::: domanda Che cosa vuol dire $P \equiv Q$? Che differenza c'è con $P \leftrightarrow Q$?
$P \equiv Q$ vuol dire che $P$ e $Q$ hanno la stessa tavola di verità. $P \leftrightarrow Q$ è una formula, che può essere vera in certe righe e falsa in altre; $P \equiv Q$ vale esattamente quando $P \leftrightarrow Q$ è una tautologia.
:::

::: domanda Che cosa dicono le leggi di De Morgan?
$\neg(p \vee q) \equiv \neg p \wedge \neg q$ e $\neg(p \wedge q) \equiv \neg p \vee \neg q$: per negare si negano i pezzi e si scambia «e» con «o».
:::

::: domanda Qual è la negazione di $p \to q$?
$p \wedge \neg q$: l'ipotesi è vera e la conclusione è falsa. Non è un'implicazione.
:::

## Glossario

```glossario
Proposizione condizionale | La proposizione $p \to q$, «se $p$ allora $q$»: falsa solo con $p$ vera e $q$ falsa.
Ipotesi | In $p \to q$, la proposizione $p$; si chiama anche antecedente.
Conclusione | In $p \to q$, la proposizione $q$; si chiama anche conseguente.
Vera a vuoto | Un'implicazione con l'ipotesi falsa: è vera qualunque sia la conclusione.
Condizione sufficiente | In $p \to q$, la $p$: se è vera, è vera anche $q$.
Condizione necessaria | In $p \to q$, la $q$: se è falsa, è falsa anche $p$.
Inversa | Di $p \to q$, la formula $q \to p$; nel libro *converse*. Non è equivalente.
Contronominale | Di $p \to q$, la formula $\neg q \to \neg p$; nel libro *contrapositive*. È equivalente.
Proposizione bicondizionale | La proposizione $p \leftrightarrow q$, «$p$ se e solo se $q$»: vera quando i valori sono uguali.
Equivalenza logica | $P \equiv Q$: le due formule hanno la stessa tavola di verità.
Leggi di De Morgan | $\neg(p \vee q) \equiv \neg p \wedge \neg q$ e $\neg(p \wedge q) \equiv \neg p \vee \neg q$.
```

## Checklist

```checklist
- So la tavola di $p \to q$ e so spiegare con la promessa perché è vera quando $p$ è falsa.
- So distinguere ipotesi e conclusione, condizione sufficiente e condizione necessaria.
- So tradurre «solo se», «se», «condizione necessaria» e «condizione sufficiente».
- So scrivere inversa, contraria e contronominale, e so quale è equivalente.
- So la tavola di $p \leftrightarrow q$ e so che equivale a due implicazioni.
- So controllare se due formule sono equivalenti, e smentirlo con una riga.
- So usare le leggi di De Morgan e negare un «se… allora».
- So l'ordine dei connettivi: $\neg$, $\wedge$, $\vee$, $\to$, $\leftrightarrow$.
- So risolvere il quiz «valore in ogni riga» con le frecce.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 1), §1.3 «Conditional Propositions and Logical Equivalence»: proposizione condizionale, ipotesi e conclusione, condizioni necessarie e sufficienti, inversa (*converse*) e contronominale (*contrapositive*), bicondizionale, equivalenza logica, leggi di De Morgan; le domande di ripasso e gli esercizi con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti), in particolare gli esercizi 59, 73, 76 e 80. Il libro non è disponibile: le frasi degli esercizi sono ricostruite dalle soluzioni.
- Diario del canale B: «Lezione 08. Giovedì 15 Ottobre ore 09-11. Capitolo 1.3. (Parte 2) Proposizioni condizionali e equivalenza logica.» Appunti scritti prima della lezione.
- F. Cardone, «Alcuni esempi relativi a formalizzazione, connettivi proposizionali e quantificatori» (Moodle del canale A): De Morgan, $A \to B \equiv \neg A \vee B$ e $\neg(A \to B) \equiv A \wedge \neg B$ come esercizi.
- Simulazione d'esame 1 del 2023/24 della pagina d'esame comune, domande 3 e 6, e la versione svolta a mano che circola tra gli studenti.
- La promessa della pizza, i riquadri «Prova tu», i quiz senza data e gli esercizi senza indicazione sono di questi appunti. Tutte le tavole, le tautologie e le equivalenze sono state controllate con un programma che prova tutte le righe.
