---
corso: FDA
lezione: "08"
titolo: Argomentazioni e regole di inferenza
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 08 · Libro, parte 2, §1.4 ed esercizi
descrizione: >-
  Appunti della lezione 08 di Fondamenti dell'Informatica (canale B): argomentazioni, premesse e conclusione,
  argomentazioni valide e non valide, il controllo con la tavola di verità, le sette regole di inferenza del libro
  (modus ponens, modus tollens, addizione, semplificazione, congiunzione, sillogismo ipotetico e disgiuntivo), i due
  errori classici, le catene di regole, gli esercizi del §1.4 con le soluzioni e la conseguenza logica del canale A.
lede: >-
  Un detective mette in fila gli indizi e arriva a una conclusione: quando il suo ragionamento è corretto? Qui impari a
  dirlo con la tavola di verità, e poi a ragionare a piccoli passi con le regole di inferenza, senza tavole.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 1), §1.4
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 1), §1.4 «Arguments and Rules of
  Inference», con le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; diario del
  canale B; dispense di Felice Cardone sulla conseguenza logica e sul metodo alternativo alle tavole (Moodle del canale A)
appunti_html: appunti/FDA/08_argomentazioni_regole_inferenza.html
genera_html: true
simboli_logici: si
---

## In breve

- Un'**argomentazione** è una lista di frasi, le **premesse**, seguita da una frase finale, la **conclusione**.
- È **valida** quando, se tutte le premesse sono vere, la conclusione non può essere falsa. Non vuol dire che la conclusione sia vera: vuol dire che **segue** dalle premesse.
- Per controllarla con la tavola si guardano **solo le righe con tutte le premesse vere**. Basta una di queste righe con la conclusione falsa per dire che non è valida: è un **controesempio**.
- Le **regole di inferenza** sono argomentazioni valide corte, da usare come passi. La più usata è il **modus ponens**: da «se A allora B» e da «A» segue «B».
- Due ragionamenti sembrano giusti ma non lo sono: **affermare il conseguente** e **negare l'antecedente**.
- Mettendo in fila le regole si arriva alla conclusione a piccoli passi, senza tavole: è una **dimostrazione**.
- È la base di tutte le dimostrazioni della parte 2 del libro, e di tutta la matematica del corso.

> [!CANALI]
> Nel canale B è la lezione di venerdì 16/10, dalle 11 alle 13. Per il docente è la lezione 9, perché la prima è stata un'introduzione: qui è la 08. Il diario del canale B la annuncia così: «Capitolo 1.4 (Parte 2). Regole di inferenza per le proposizioni. Esercizi.» **Ho scritto questi appunti prima della lezione**, sul §1.4 del libro, con le sue domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A (id 3851, aperto agli ospiti); gli esercizi sono quelli del libro e altri miei, non quelli che il docente farà in aula. Quando la lezione sarà fatta, confronto con il diario e aggiorno. Servono le lezioni [06](06_proposizioni_connettivi_tavole.html) e [07](07_condizionali_equivalenza_logica.html): connettivi, tavole e «se… allora». Nel canale A lo stesso argomento è nelle dispense di Felice Cardone, «La relazione di conseguenza per la logica proposizionale» e «Appunti su un metodo alternativo alle tavole di verità»; nel canale C nei lucidi del docente.

## Dagli indizi alla conclusione (libro, §1.4)

In mensa è sparita una torta. Il detective raccoglie quattro informazioni su Bruno:

1. se sulle scarpe di Bruno c'è farina, allora Bruno è entrato in cucina;
2. sulle scarpe di Bruno c'è farina;
3. se Bruno è entrato in cucina, allora ha lavato i piatti o ha mangiato la torta;
4. Bruno non ha lavato i piatti.

E conclude: «Bruno ha mangiato la torta». Il ragionamento è corretto? Non chiediamo se le informazioni sono vere: chiediamo se, **ammesso** che siano vere, la conclusione deve esserlo per forza.

> [!IDEA]
> Un ragionamento è corretto quando non c'è nessun modo di avere tutte le informazioni vere e la conclusione falsa.

Il libro chiama **argomentazione** un ragionamento così: una lista di frasi di partenza e una frase finale. Le frasi di partenza si chiamano **premesse**, o **ipotesi**; la frase finale è la **conclusione**. Il libro la scrive in colonna, con le premesse una sotto l'altra e la conclusione dopo il simbolo $\therefore$, che si legge «quindi».

> [!DEF] Argomentazione valida (libro, §1.4, Definizione 1.4.1)
> Un'**argomentazione** è una sequenza di proposizioni scritta
> $$p_1, p_2, \dots, p_n \;/\; \therefore\; q.$$
> Le proposizioni $p_1, \dots, p_n$ sono le **premesse** (o ipotesi) e $q$ è la **conclusione**. L'argomentazione è **valida** se, quando $p_1, p_2, \dots, p_n$ sono tutte vere, anche $q$ è vera. Un'argomentazione che non è valida si chiama **non valida**.

**Come si legge.** Le premesse sono gli indizi, la conclusione è il verdetto. «Valida» vuol dire che il verdetto **segue** dagli indizi: se gli indizi sono veri, il verdetto è vero. Il libro chiama questo modo di ragionare **ragionamento deduttivo**: trarre una conclusione da una sequenza di proposizioni.

> [!TRAPPOLA] Valida non vuol dire vera
> «Se un numero è pari, è divisibile per 4. 6 è pari. Quindi 6 è divisibile per 4.» L'argomentazione è **valida**: ha la forma giusta. La conclusione però è falsa, perché la prima premessa è falsa. La validità parla della **forma** del ragionamento, non della verità delle premesse.

::: prova «Se piove, la strada è bagnata. Piove. Quindi la strada è bagnata.» Quali sono le premesse e la conclusione? Ti sembra valida?
Le premesse sono «se piove, la strada è bagnata» e «piove»; la conclusione è «la strada è bagnata». È valida: se le due premesse sono vere, la strada è per forza bagnata.
:::

> [!RICORDA]
> - Argomentazione: premesse, poi una conclusione.
> - Valida: con tutte le premesse vere, la conclusione non può essere falsa.

## Controllare con la tavola di verità (libro, §1.4)

La definizione dice «quando le premesse sono tutte vere». Con le lettere, ogni riga della tavola è una situazione possibile. Quindi il controllo è questo: si guardano le righe in cui le premesse sono tutte vere, e solo quelle.

> [!METODO] Un'argomentazione è valida?
> 1. Scrivi le premesse e la conclusione con le lettere.
> 2. Fai la tavola, con una colonna per ogni premessa e una per la conclusione.
> 3. Segna le righe in cui **tutte** le premesse sono vere.
> 4. In tutte queste righe la conclusione è vera? Allora è **valida**. Se in almeno una è falsa, **non è valida**, e quella riga è un **controesempio**.
>
> Le righe con almeno una premessa falsa non contano.

> [!ESEMPIO] La regola della strada bagnata
> Con $p$: «piove» e $q$: «la strada è bagnata», l'argomentazione è $p \to q,\ p \;/\; \therefore q$.
>
> | $p$ | $q$ | $p \to q$ | $p$ | $q$ |
> |:-:|:-:|:-:|:-:|:-:|
> | V | V | **V** | **V** | **V** |
> | V | F | F | V | F |
> | F | V | V | F | V |
> | F | F | V | F | F |
>
> Solo nella prima riga le due premesse sono vere, e lì la conclusione è vera. È valida: è l'esercizio 1 del §1.4, e le soluzioni del libro dicono «valida».

> [!ESEMPIO] Un'argomentazione non valida (esercizio 4 del libro)
> Premesse: $(p \vee r) \to q$ e $q$. Conclusione: $\neg p \to r$. Le soluzioni del libro dicono «non valida». Ecco il controesempio: $p$ = F, $q$ = V, $r$ = F.
> - Prima premessa: $p \vee r$ è falsa, quindi l'implicazione è vera a vuoto.
> - Seconda premessa: $q$ è vera.
> - Conclusione: $\neg p$ è vera e $r$ è falsa, quindi $\neg p \to r$ è falsa.
>
> Premesse vere e conclusione falsa: basta questa riga.

Lo strumento qui sotto fa il controllo per te. Le righe con le premesse tutte vere diventano verdi se la conclusione è vera, rosse se è falsa. Le premesse si separano con il punto e virgola.

```widget logica
titolo: L'argomentazione è valida?
modo: argomento
premesse: (p ∨ r) → q; q
conclusione: ¬p → r
```

::: prova Con lo strumento, controlla l'argomentazione $p \to q,\ q \;/\; \therefore p$. È valida?
No. Nella riga $p$ = F, $q$ = V le due premesse sono vere e la conclusione è falsa: è un controesempio.
:::

> [!RICORDA]
> - Si guardano solo le righe con **tutte** le premesse vere.
> - Basta una di quelle righe con la conclusione falsa: non è valida.

## Le regole di inferenza (libro, §1.4)

Con 4 lettere la tavola ha 16 righe, con 5 ne ha 32. Il detective non fa tavole: ragiona a piccoli passi, e ogni passo è un ragionamento corto già noto, che si sa essere valido. Questi ragionamenti si chiamano **regole di inferenza**. Il libro ne elenca sette.

| Nome | Premesse | Conclusione | Un esempio |
|---|---|---|---|
| **modus ponens** | $p \to q$ e $p$ | $q$ | se piove la strada è bagnata; piove; quindi la strada è bagnata |
| **modus tollens** | $p \to q$ e $\neg q$ | $\neg p$ | se piove la strada è bagnata; la strada è asciutta; quindi non piove |
| addizione | $p$ | $p \vee q$ | piove; quindi piove o nevica |
| semplificazione | $p \wedge q$ | $p$ | piove e fa freddo; quindi piove |
| congiunzione | $p$ e $q$ | $p \wedge q$ | piove; fa freddo; quindi piove e fa freddo |
| sillogismo ipotetico | $p \to q$ e $q \to r$ | $p \to r$ | se piove esco con l'ombrello; se esco con l'ombrello lo dimentico; quindi se piove lo dimentico |
| sillogismo disgiuntivo | $p \vee q$ e $\neg p$ | $q$ | è a casa o in biblioteca; non è a casa; quindi è in biblioteca |

### Le due regole con la freccia

Le più importanti sono le prime due. Tutte e due partono da una promessa «se $p$ allora $q$», come la promessa della pizza della lezione 07.

- **Modus ponens**, «modo che afferma»: l'ipotesi si è avverata, quindi anche la conclusione. La squadra ha vinto: arriva la pizza.
- **Modus tollens**, «modo che nega»: la conclusione manca, quindi manca anche l'ipotesi. La pizza non è arrivata: la squadra non ha vinto. È la contronominale della lezione 07 usata come passo.

### Perché sono valide

Ogni regola si controlla con una tavola, come nella sezione prima. Per il modus tollens, le premesse sono $p \to q$ e $\neg q$:

| $p$ | $q$ | $p \to q$ | $\neg q$ | $\neg p$ |
|:-:|:-:|:-:|:-:|:-:|
| V | V | V | F | F |
| V | F | F | V | F |
| F | V | V | F | V |
| F | F | **V** | **V** | **V** |

Solo nell'ultima riga le premesse sono tutte e due vere, e lì $\neg p$ è vera. È la tavola delle soluzioni del libro, esercizio 33.

::: prova Che regola è? (a) «Se è domenica il negozio è chiuso. Il negozio non è chiuso. Quindi non è domenica.» (b) «Piove o nevica. Non piove. Quindi nevica.» (c) «Fa freddo e piove. Quindi fa freddo.»
(a) Modus tollens. (b) Sillogismo disgiuntivo. (c) Semplificazione.
:::

> [!RICORDA]
> - Modus ponens: da «se $p$ allora $q$» e «$p$», segue «$q$».
> - Modus tollens: da «se $p$ allora $q$» e «non $q$», segue «non $p$».
> - Le altre cinque: addizione, semplificazione, congiunzione, sillogismo ipotetico e disgiuntivo.

## Due ragionamenti che sembrano giusti (libro, §1.4)

Due ragionamenti somigliano al modus ponens e al modus tollens, ma **non sono validi**. Sono errori così comuni da avere un nome.

| Nome dell'errore | Premesse | Conclusione sbagliata | Il controesempio |
|---|---|---|---|
| affermare il conseguente | $p \to q$ e $q$ | $p$ | $p$ = F, $q$ = V |
| negare l'antecedente | $p \to q$ e $\neg p$ | $\neg q$ | $p$ = F, $q$ = V |

Con la strada bagnata:

- «Se piove la strada è bagnata. La strada è bagnata. Quindi piove.» **Non è valida**: la strada può essere bagnata perché è passata l'autobotte.
- «Se piove la strada è bagnata. Non piove. Quindi la strada non è bagnata.» **Non è valida**, per lo stesso motivo.

Il controesempio è in tutti e due i casi la riga «non piove, ma la strada è bagnata». È l'errore di confondere una promessa con la sua inversa, della lezione 07.

> [!ESEMPIO] Un errore nascosto (esercizio 13 del libro)
> Le soluzioni del libro scrivono così un'argomentazione **non valida**: «Se non compreremo un computer nuovo, allora 4 megabyte non sono meglio di niente. Compreremo un computer nuovo. Quindi 4 megabyte sono meglio di niente.»
>
> Con $p$: «4 megabyte sono meglio di niente» e $q$: «compreremo un computer nuovo», le premesse sono $\neg q \to \neg p$ e $q$, la conclusione è $p$. La prima premessa è la contronominale di $p \to q$; con $q$ vera e $p$ falsa le premesse sono vere e la conclusione falsa. È di nuovo «affermare il conseguente».

> [!TRAPPOLA] Una conclusione vera non salva un ragionamento sbagliato
> «Se un numero è divisibile per 4, è pari. 8 è pari. Quindi 8 è divisibile per 4.» La conclusione è vera, ma il ragionamento **non è valido**: con 6 al posto di 8 le premesse restano vere e la conclusione diventa falsa.

::: prova È valida «Se studio, passo l'esame. Non ho studiato. Quindi non passo l'esame»?
No: è «negare l'antecedente». Il controesempio è la riga in cui non ho studiato e passo lo stesso: le premesse sono vere e la conclusione è falsa.
:::

> [!RICORDA]
> - Affermare il conseguente, $p \to q$ e $q$ quindi $p$: **non** valido.
> - Negare l'antecedente, $p \to q$ e $\neg p$ quindi $\neg q$: **non** valido.

## Catene di regole: le dimostrazioni (libro, §1.4)

Torna al detective della torta. Con le lettere:

- $F$: «sulle scarpe di Bruno c'è farina»;
- $C$: «Bruno è entrato in cucina»;
- $L$: «Bruno ha lavato i piatti»;
- $T$: «Bruno ha mangiato la torta».

Le premesse sono $F \to C$, $F$, $C \to (L \vee T)$ e $\neg L$. La conclusione è $T$. Con la tavola servirebbero 16 righe. Con le regole bastano tre passi, ognuno giustificato da una regola:

| Passo | Che cosa so | Perché |
|:-:|---|---|
| 1 | $F \to C$ | premessa |
| 2 | $F$ | premessa |
| 3 | $C$ | dai passi 1 e 2, modus ponens |
| 4 | $C \to (L \vee T)$ | premessa |
| 5 | $L \vee T$ | dai passi 4 e 3, modus ponens |
| 6 | $\neg L$ | premessa |
| 7 | $T$ | dai passi 5 e 6, sillogismo disgiuntivo |

Il ragionamento del detective è valido. Una catena così, in cui ogni passo è una premessa o segue dai passi prima con una regola, è una **dimostrazione** della conclusione.

> [!METODO] Costruire una catena di regole
> 1. Traduci le premesse e la conclusione con le lettere.
> 2. Parti dalle premesse «semplici», come una lettera da sola: sono quelle che fanno scattare un modus ponens.
> 3. A ogni passo scrivi che cosa ottieni e con quale regola, citando i passi che usi.
> 4. Se resti bloccato, guarda la conclusione: quale regola potrebbe averla prodotta, e da che cosa?

> [!ESEMPIO] Benzina, negozio, bibita (esercizio 30 del libro)
> Le soluzioni del libro usano tre proposizioni: $p$ «c'è benzina nell'auto», $q$ «vado al negozio», $r$ «compro una bibita». Le premesse sono $p \to q$, $q \to r$ e $p$; la conclusione è $r$.
> 1. Da $p \to q$ e $q \to r$, per sillogismo ipotetico: $p \to r$.
> 2. Da $p \to r$ e $p$, per modus ponens: $r$.
>
> «Compro una bibita» segue dalle premesse.

> [!ESEMPIO] Il programma che non funziona (esercizio 15 del libro)
> Le soluzioni del libro scrivono questa argomentazione, e dicono che è **valida**: «Se il ciclo for è difettoso o il ciclo while è difettoso, allora l'hardware è inaffidabile o l'output è corretto. Il ciclo for è difettoso. L'hardware non è inaffidabile. Quindi l'output è corretto.»
>
> Con $p$ «il for è difettoso», $q$ «il while è difettoso», $r$ «l'hardware è inaffidabile», $s$ «l'output è corretto»:
> 1. da $p$, per addizione: $p \vee q$;
> 2. da $(p \vee q) \to (r \vee s)$ e $p \vee q$, per modus ponens: $r \vee s$;
> 3. da $r \vee s$ e $\neg r$, per sillogismo disgiuntivo: $s$.

::: prova Scrivi una catena di regole per $p \to q,\ q \to r,\ \neg r \;/\; \therefore \neg p$.
Da $q \to r$ e $\neg r$, per modus tollens, $\neg q$. Da $p \to q$ e $\neg q$, ancora per modus tollens, $\neg p$. Si può anche fare il sillogismo ipotetico, $p \to r$, e poi un solo modus tollens.
:::

> [!RICORDA]
> - Una dimostrazione è una catena di passi: ogni passo è una premessa, o segue dai passi prima con una regola.
> - Per dire che un'argomentazione **non** è valida le regole non servono: serve un controesempio.

## Esercizi del libro, in italiano (libro, §1.4)

La seconda parte della lezione, nel diario, è di esercizi. Il §1.4 del libro ne ha di tre tipi: argomentazioni con le lettere, argomentazioni a parole da tradurre, e domande sul nome delle regole. Ecco i modelli, con le soluzioni ufficiali.

### Con le lettere: valida o no?

| Esercizio | Premesse | Conclusione | Soluzione del libro |
|:-:|---|---|---|
| 6 | $(p \to s) \wedge (q \to r)$ e $p \vee q$ | $r \vee s$ | valida |
| 9 | $p \to (r \vee s)$, $q \to r$, $\neg s$ e $p$ | $r \vee q$ | valida |

> [!ESEMPIO] L'esercizio 9 con le regole
> 1. Da $p \to (r \vee s)$ e $p$, per modus ponens: $r \vee s$.
> 2. Da $r \vee s$ e $\neg s$, per sillogismo disgiuntivo: $r$. Qui l'«o» è letto nell'altro ordine, $s \vee r$: è lo stesso, per la proprietà commutativa.
> 3. Da $r$, per addizione: $r \vee q$.
>
> La premessa $q \to r$ non serve. Capita: non tutte le premesse devono essere usate.

L'esercizio 6 è un **ragionamento per casi**: da $p \vee q$ ci sono due possibilità. Se è vera $p$, con $p \to s$ arriva $s$; se è vera $q$, con $q \to r$ arriva $r$. In tutti e due i casi è vera $r \vee s$.

### A parole: tradurre e decidere

> [!ESEMPIO] Il computer nuovo (esercizio 10 del libro)
> Le soluzioni del libro: «Se 4 megabyte sono meglio di niente, allora compreremo un computer nuovo. Se 4 megabyte sono meglio di niente, allora compreremo altra memoria. Quindi, se 4 megabyte sono meglio di niente, compreremo un computer nuovo e altra memoria.» È **valida**.
>
> Con $p$, $q$, $r$ al posto delle tre frasi: premesse $p \to q$ e $p \to r$, conclusione $p \to (q \wedge r)$. Nella lezione 07 hai visto che $(p \to q) \wedge (p \to r) \equiv p \to (q \wedge r)$: per questo è valida.

> [!ESEMPIO] Il ciclo for, ancora (esercizio 18 del libro)
> «Se il for è difettoso, il while è difettoso. Se il while è difettoso, l'hardware è inaffidabile. L'hardware non è inaffidabile. Se l'output è corretto, l'hardware è inaffidabile. Quindi l'output non è corretto.» Per le soluzioni del libro è **valida**.
>
> Basta un passo: da «se l'output è corretto, l'hardware è inaffidabile» e «l'hardware non è inaffidabile», per modus tollens, «l'output non è corretto».

### Il nome della regola

Alcuni esercizi danno un ragionamento e chiedono quale regola usa. Nelle soluzioni dell'esercizio 27, per esempio, la risposta è «addizione». Si riconosce guardando la forma: una frase sola che diventa un «o» è sempre un'addizione.

::: prova Per l'esercizio 6, trova una riga in cui una premessa è falsa e la conclusione è falsa. Rende non valida l'argomentazione?
Per esempio $p$, $q$, $r$, $s$ tutte false: $p \vee q$ è falsa e $r \vee s$ è falsa. Non rende non valida l'argomentazione, perché in quella riga non sono vere tutte le premesse.
:::

> [!RICORDA]
> - Non tutte le premesse devono servire.
> - Da «$p$ o $q$» si ragiona per casi: si guarda che cosa succede con $p$ e che cosa succede con $q$.

## Un rompicapo: chi ordina il caffè?

È il rompicapo che il canale A risolve a lezione. Tre amici al bar, e quattro informazioni:

1. se Alberto ordina un caffè, lo ordina anche Bice;
2. Bice o Carlo ordinano un caffè, ma non tutti e due;
3. Alberto o Carlo ordinano un caffè, o tutti e due;
4. se Carlo ordina un caffè, lo ordina anche Alberto.

Chi ordina il caffè? Uso una lettera per ogni amico: $A$ vuol dire «Alberto ordina un caffè», e lo stesso $B$ per Bice e $C$ per Carlo. Le quattro informazioni diventano le premesse $A \to B$, $B \oplus C$, $A \vee C$ e $C \to A$. Le righe sono 8; la tavola dice che una sola rende vere tutte e quattro le informazioni: $A$ = V, $B$ = V, $C$ = F.

Si può anche ragionare per casi, senza tavola.

- **Se Carlo ordina il caffè**: dalla 4, lo ordina Alberto; dalla 1, lo ordina Bice. Ma allora Bice e Carlo lo ordinano tutti e due, contro la 2. Impossibile.
- **Quindi Carlo non lo ordina.** Dalla 3, lo ordina Alberto; dalla 1, lo ordina Bice. La 2 è rispettata: Bice sì, Carlo no.

Alberto e Bice ordinano il caffè, Carlo no. Mettilo nello strumento per vedere la riga verde.

```widget logica
titolo: Il rompicapo del caffè
modo: argomento
premesse: A → B; B ⊕ C; A ∨ C; C → A
conclusione: A ∧ B ∧ ¬C
```

::: prova Cambia la quarta informazione in «se Alberto ordina un caffè, lo ordina anche Carlo». Chi ordina il caffè adesso? E se invece tieni le quattro informazioni e ne aggiungi una quinta, «se Bice ordina un caffè, lo ordina anche Carlo»?
Con la quarta cambiata ordina solo Carlo. Se Alberto ordinasse, lo ordinerebbero anche Bice e Carlo, contro la seconda informazione. Quindi Alberto no; dalla terza Carlo sì; dalla seconda Bice no.

Con la quinta aggiunta, invece, nessuna riga rende vere tutte le informazioni. Da informazioni contraddittorie segue qualunque conclusione, a vuoto: lo strumento lo segnala.
:::

> [!RICORDA]
> - Un rompicapo è un'argomentazione: le informazioni sono le premesse.
> - Se le premesse non possono essere vere insieme, l'argomentazione è valida a vuoto.

## La notazione del canale A: la conseguenza logica

Nelle dispense di Felice Cardone, sul Moodle del canale A, la stessa idea ha un altro nome e un altro simbolo. La dispensa dice che il libro scrive $p_1, \dots, p_n \;/\; \therefore p$ per quello che lì si scrive con il simbolo $\models$.

> [!DEF] Conseguenza logica (dispensa del canale A)
> $A_1, \dots, A_n \models A$ vale se e solo se, per ogni riga della tavola di verità in cui $A_1, \dots, A_n$ sono vere, anche $A$ è vera.

**Come si legge.** $\models$ si legge «ha come conseguenza logica». È la definizione di argomentazione valida, scritta con un simbolo. Con niente a sinistra, $\models A$ vuol dire che $A$ è vera in tutte le righe: è una **tautologia**.

C'è un legame preciso tra le due cose, che il canale A dimostra a lezione: $A \models B$ esattamente quando $A \to B$ è una tautologia. «$B$ segue da $A$» vuol dire che nessuna riga ha $A$ vera e $B$ falsa, cioè che $A \to B$ non è mai falsa.

> [!APPROFONDIMENTO] Il metodo alternativo alle tavole (canale A)
> La seconda dispensa del canale A propone un modo più veloce delle tavole. È una dimostrazione per assurdo organizzata: si suppone che le premesse siano vere e la conclusione falsa, e si cercano le conseguenze.
>
> Si divide il foglio con una linea verticale: **a sinistra le formule vere**, **a destra quelle false**. All'inizio a sinistra ci sono le premesse e a destra la conclusione. Poi si spezza una formula alla volta, secondo il suo connettivo:
> - un «e» vero mette tutte e due le parti a sinistra; un «o» falso le mette tutte e due a destra;
> - un «se… allora» falso mette l'ipotesi a sinistra e la conclusione a destra;
> - un «non» sposta la formula dall'altra parte;
> - un «e» falso, un «o» vero e un «se… allora» vero aprono **due rami**, uno per ogni possibilità.
>
> Un ramo si **chiude** quando la stessa lettera compare a sinistra e a destra: dovrebbe essere vera e falsa insieme. Se si chiudono tutti i rami, l'argomentazione è valida. Se un ramo resta aperto, dà un controesempio: le lettere a sinistra sono vere, quelle a destra false.
>
> Per il modus ponens: a sinistra $A$ e $A \to B$, a destra $B$. Spezzando $A \to B$, vero, si aprono due rami: in uno $A$ va a destra, e si chiude con la $A$ di sinistra; nell'altro $B$ va a sinistra, e si chiude con la $B$ di destra. Tutti chiusi: valida.

::: prova Con la notazione del canale A, come si scrive che il modus tollens è valido?
$p \to q,\ \neg q \models \neg p$.
:::

> [!RICORDA]
> - $A_1, \dots, A_n \models A$ è la stessa cosa di «l'argomentazione è valida».
> - $A \models B$ esattamente quando $A \to B$ è una tautologia.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $p_1, \dots, p_n \;/\; \therefore q$ | «premesse, quindi $q$» | un'argomentazione | $p \to q,\ p \;/\; \therefore q$ |
| $\therefore$ | «quindi» | introduce la conclusione | |
| $\models$ | «ha come conseguenza» | la notazione del canale A per «argomentazione valida» | $p,\ q \models p \wedge q$ |
| $\models A$ | «$A$ è una tautologia» | $A$ è vera in tutte le righe | $\models p \vee \neg p$ |
| modus ponens | «modus ponens» | da $p \to q$ e $p$ segue $q$ | |
| modus tollens | «modus tollens» | da $p \to q$ e $\neg q$ segue $\neg p$ | |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti.

**Che cosa serve di questa lezione**

1. **Vero o falso su argomentazioni.** Domande come «da $A \to B$ e $B$ segue $A$?»: si risponde cercando un controesempio. Nelle simulazioni del 2023/24 che ho non c'è una domanda così; il diario del canale A 2025/26 cita però «problemi relativi a conseguenza logica» tra gli esercizi di ripasso.
2. **Il nome delle regole**: modus ponens, modus tollens e gli errori classici.
3. **Le dimostrazioni** della parte 2 del libro, dalla prossima settimana: ogni passo di una dimostrazione è una regola di questa lezione.

### Una domanda nello stile del quiz, letta insieme

**Il testo**: «Quali delle seguenti argomentazioni sono valide? (a) $A \to B,\ B \;/\; \therefore A$; (b) $A \vee B,\ \neg A \;/\; \therefore B$; (c) $A \to B,\ \neg B \;/\; \therefore \neg A$; (d) $A \to B,\ \neg A \;/\; \therefore \neg B$; (e) $A \wedge B \;/\; \therefore A \vee B$.»

**In pratica chiede:** per ognuna, vero o falso. Un controesempio basta per scartare.

> [!ESEMPIO] · la soluzione, passo per passo
> - (a) **Non valida**: è affermare il conseguente. Controesempio: $A$ = F, $B$ = V.
> - (b) **Valida**: è il sillogismo disgiuntivo.
> - (c) **Valida**: è il modus tollens.
> - (d) **Non valida**: è negare l'antecedente. Controesempio: $A$ = F, $B$ = V.
> - (e) **Valida**: l'unica riga con $A \wedge B$ vera ha $A$ e $B$ vere, e lì $A \vee B$ è vera. Si ottiene anche con due regole: semplificazione, poi addizione.
>
> Le valide sono (b), (c) ed (e). Nota che (a) e (d) hanno lo stesso controesempio: la riga $A$ = F, $B$ = V è quella da provare per prima con le frecce.

> [!METODO] Le domande sulle argomentazioni
> 1. **Riconosci la forma**: è una delle sette regole? Allora è valida. È uno dei due errori? Allora non lo è.
> 2. **Se non la riconosci**, cerca un controesempio: prova a rendere falsa la conclusione e vere tutte le premesse. Con le frecce, parti dalle righe con l'ipotesi falsa.
> 3. **Se il controesempio non esiste**, l'argomentazione è valida. Per esserne sicuro, fai la tavola delle sole righe con la conclusione falsa.

**Errori da evitare**

- Guardare tutte le righe della tavola, invece delle sole righe con le premesse vere.
- Pensare che «valida» voglia dire «con la conclusione vera».
- Affermare il conseguente o negare l'antecedente.
- Dimenticare che basta un controesempio.
- Nel modus tollens, negare la cosa sbagliata: da $p \to q$ e $\neg q$ segue $\neg p$, non $\neg q$.

## Quiz

```quiz
D: Quando un'argomentazione è valida?
+ Quando in ogni riga con tutte le premesse vere anche la conclusione è vera
- Quando la conclusione è vera
- Quando le premesse sono tutte vere
- Quando la conclusione è vera in almeno una riga
- Quando premesse e conclusione hanno la stessa tavola
= È la definizione 1.4.1 del libro: se le premesse sono vere, la conclusione deve esserlo. La risposta più insidiosa è «quando la conclusione è vera»: un'argomentazione con la conclusione vera può essere non valida, e una valida può avere la conclusione falsa se una premessa è falsa. La stessa tavola è l'equivalenza, un'altra cosa.

D: Quale regola usa «Se ho la febbre, resto a casa. Non resto a casa. Quindi non ho la febbre»?
+ Modus tollens
- Modus ponens
- Sillogismo disgiuntivo
- Sillogismo ipotetico
- Affermare il conseguente
= Da «se $p$ allora $q$» e «non $q$» segue «non $p$»: è il modus tollens. La risposta più insidiosa è il modus ponens, che parte da «$p$», non da «non $q$». Affermare il conseguente partirebbe da «resto a casa».

D: Quale di queste argomentazioni **non** è valida?
+ $p \to q,\ q \;/\; \therefore p$
- $p \to q,\ p \;/\; \therefore q$
- $p \to q,\ \neg q \;/\; \therefore \neg p$
- $p \vee q,\ \neg p \;/\; \therefore q$
- $p \to q,\ q \to r \;/\; \therefore p \to r$
= È «affermare il conseguente»: con $p$ = F e $q$ = V le premesse sono vere e la conclusione falsa. La risposta più insidiosa è il modus tollens, che a prima vista sembra girato al contrario ma è valido. Le altre sono modus ponens, sillogismo disgiuntivo e sillogismo ipotetico.

D: Per l'argomentazione $p \to q,\ \neg p \;/\; \therefore \neg q$, qual è un controesempio?
+ $p$ = F, $q$ = V
- $p$ = V, $q$ = V
- $p$ = V, $q$ = F
- $p$ = F, $q$ = F
- non ce n'è, è valida
= Con $p$ falsa e $q$ vera: $p \to q$ è vera a vuoto, $\neg p$ è vera, e $\neg q$ è falsa. La risposta più insidiosa è «non ce n'è»: la forma somiglia al modus tollens, ma nega l'ipotesi invece della conclusione. Con $p$ = F, $q$ = F le premesse sono vere ma anche la conclusione: non è un controesempio.

D: Da quali premesse segue $r$ con un solo modus ponens?
+ $q \to r$ e $q$
- $q \to r$ e $r$
- $r \to q$ e $q$
- $q \vee r$ e $q$
- $q \to r$ e $\neg q$
= Il modus ponens chiede «se $q$ allora $r$» e «$q$». La risposta più insidiosa è $q \to r$ e $\neg q$: è negare l'antecedente, e da lì non segue niente su $r$. Con $r \to q$ e $q$ si afferma il conseguente.

D: Nell'esercizio 9 del libro, $p \to (r \vee s),\ q \to r,\ \neg s,\ p \;/\; \therefore r \vee q$, quale premessa non serve?
+ $q \to r$
- $p$
- $\neg s$
- $p \to (r \vee s)$
- servono tutte
= Da $p$ e $p \to (r \vee s)$ viene $r \vee s$; con $\neg s$ viene $r$; per addizione $r \vee q$. La risposta più insidiosa è «servono tutte»: in un'argomentazione valida possono esserci premesse in più, che non si usano.

D: Che cosa vuol dire $A, B \models C$ nella notazione del canale A?
+ In ogni riga in cui $A$ e $B$ sono vere, anche $C$ è vera
- $A$, $B$ e $C$ sono vere
- $C$ è vera in tutte le righe
- $A \wedge B$ e $C$ hanno la stessa tavola
- $C$ implica $A$ e $B$
= È la conseguenza logica: la stessa cosa dell'argomentazione valida $A, B \;/\; \therefore C$. La risposta più insidiosa è «stessa tavola»: è l'equivalenza, che chiede anche il verso opposto. «$C$ vera in tutte le righe» è $\models C$, senza premesse.

D: Dalle premesse $p \to q$ e $q \to r$, quale conclusione segue con il sillogismo ipotetico?
+ $p \to r$
- $r \to p$
- $p \wedge r$
- $q$
- $r$
= Le implicazioni si mettono in fila: da $p$ a $q$, da $q$ a $r$, quindi da $p$ a $r$. La risposta più insidiosa è $r$: per avere $r$ servirebbe anche $p$ tra le premesse, e poi un modus ponens.

D: Le premesse $p$, $\neg p$ hanno come conseguenza:
+ qualunque formula
- solo $p$
- solo $\neg p$
- nessuna formula
- solo le tautologie
= Nessuna riga rende vere tutte e due le premesse, quindi la condizione «in ogni riga con le premesse vere» è sempre rispettata: l'argomentazione è valida a vuoto, con qualunque conclusione. La risposta più insidiosa è «nessuna formula»: sembra logico, ma la definizione dice il contrario.

D: Nel rompicapo del caffè ($A \to B$, $B \oplus C$, $A \vee C$, $C \to A$), quante righe della tavola rendono vere tutte e quattro le informazioni?
N: 1
= Solo la riga $A$ = V, $B$ = V, $C$ = F. Ragionando per casi: se Carlo ordinasse il caffè, lo ordinerebbero anche Alberto e Bice, e la seconda informazione sarebbe falsa.
```

## Esercizi

::: esercizio base Riscaldamento: premesse e conclusione
In ciascuna argomentazione indica le premesse e la conclusione, e traducila con le lettere: (a) «Se è festa, la biblioteca è chiusa. È festa. Quindi la biblioteca è chiusa.» (b) «Studio o vado al cinema. Non vado al cinema. Quindi studio.»
::: soluzione
(a) Con $f$: «è festa» e $b$: «la biblioteca è chiusa»: premesse $f \to b$ e $f$, conclusione $b$. È un modus ponens.

(b) Con $s$: «studio» e $c$: «vado al cinema»: premesse $s \vee c$ e $\neg c$, conclusione $s$. È un sillogismo disgiuntivo, con l'«o» letto nell'altro ordine.
:::

::: esercizio base Riscaldamento: riconoscere le regole
Che regola è? (a) «Mangio e bevo. Quindi mangio.» (b) «Piove. Quindi piove o tira vento.» (c) «Se studio capisco; se capisco mi diverto. Quindi se studio mi diverto.» (d) «Ho il libro. Ho gli appunti. Quindi ho il libro e gli appunti.»
::: soluzione
(a) Semplificazione. (b) Addizione. (c) Sillogismo ipotetico. (d) Congiunzione.
:::

::: esercizio base Riscaldamento: valida o no?
Dì se sono valide e, se non lo sono, dai un controesempio: (a) $p \to q,\ \neg r \to \neg q,\ \neg r \;/\; \therefore \neg p$; (b) $p \to q,\ q \to r,\ r \;/\; \therefore p$; (c) $p \vee q,\ p \to r,\ \neg r \;/\; \therefore q$.
::: soluzione
(a) Valida. Da $\neg r \to \neg q$ e $\neg r$, per modus ponens, $\neg q$. Da $p \to q$ e $\neg q$, per modus tollens, $\neg p$.

(b) Non valida: con $p$ = F, $q$ = V, $r$ = V le premesse sono vere e la conclusione è falsa. Va bene anche $p$ = F, $q$ = F, $r$ = V.

(c) Valida. Da $p \to r$ e $\neg r$, per modus tollens, $\neg p$. Da $p \vee q$ e $\neg p$, per sillogismo disgiuntivo, $q$.
:::

::: esercizio base Riscaldamento: la tavola della congiunzione
Mostra con una tavola che la regola di congiunzione, $p,\ q \;/\; \therefore p \wedge q$, è valida. È l'esercizio 36 del libro.
::: soluzione
| $p$ | $q$ | $p \wedge q$ |
|:-:|:-:|:-:|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

L'unica riga con le due premesse vere è la prima, e lì $p \wedge q$ è vera: è valida.
:::

::: esercizio medio Una catena più lunga
Scrivi una dimostrazione di $s$ dalle premesse $p \to q$, $q \to r$, $r \to s$ e $p$, citando la regola di ogni passo.
::: soluzione
| Passo | Che cosa so | Perché |
|:-:|---|---|
| 1 | $p \to q$ | premessa |
| 2 | $q \to r$ | premessa |
| 3 | $r \to s$ | premessa |
| 4 | $p$ | premessa |
| 5 | $q$ | 1 e 4, modus ponens |
| 6 | $r$ | 2 e 5, modus ponens |
| 7 | $s$ | 3 e 6, modus ponens |
:::

::: esercizio medio Il ragionamento per casi
Mostra che $p \to r,\ q \to r,\ p \vee q \;/\; \therefore r$ è valida, prima ragionando per casi e poi con lo strumento.
::: soluzione
**Per casi.** Da $p \vee q$, è vera $p$ oppure è vera $q$. Se è vera $p$, da $p \to r$ per modus ponens viene $r$. Se è vera $q$, da $q \to r$ viene $r$. In tutti e due i casi $r$ è vera.

**Con lo strumento.** Le righe con le tre premesse vere sono 3, e in tutte $r$ è vera. È lo schema delle dimostrazioni per casi, che il libro userà nel capitolo 2.
:::

::: esercizio medio Tradurre e decidere
«Se il server è acceso, il sito risponde. Il sito non risponde. Se il sito non risponde, gli utenti si lamentano. Quindi il server è spento e gli utenti si lamentano.» Traduci e dimostra la conclusione.
::: soluzione
Con $a$: «il server è acceso», $r$: «il sito risponde», $u$: «gli utenti si lamentano». Premesse: $a \to r$, $\neg r$, $\neg r \to u$. Conclusione: $\neg a \wedge u$.
1. Da $a \to r$ e $\neg r$, per modus tollens: $\neg a$.
2. Da $\neg r \to u$ e $\neg r$, per modus ponens: $u$.
3. Da $\neg a$ e $u$, per congiunzione: $\neg a \wedge u$.
:::

::: esercizio esame Vero o falso sulle argomentazioni
Vero o falso? (1) $A \to B,\ B \models A$. (2) $A \vee B,\ \neg A \models B$. (3) $A,\ \neg A \models B$ per qualunque $B$. (4) Se $A \to B$ è una tautologia, allora $A \models B$. (5) $A \wedge B \models A \vee B$.
::: soluzione
1. Falso: è affermare il conseguente.
2. Vero: sillogismo disgiuntivo.
3. Vero: nessuna riga rende vere $A$ e $\neg A$, quindi è valida a vuoto.
4. Vero: è il legame tra conseguenza logica e tautologie.
5. Vero: semplificazione e poi addizione.
:::

::: esercizio esame L'indovinello degli studenti
È un esercizio del canale A: «Né Alberto né Carlo sono buoni studenti. Alberto è un buono studente se Davide lo è, oppure: se Davide o Elisabetta sono buoni studenti, allora Carlo è un buono studente se e solo se Davide lo è. Quindi Davide non è un buono studente.» Formalizza e mostra che è valida.
::: soluzione
Con le iniziali: premesse $\neg A \wedge \neg C$ e $(D \to A) \vee ((D \vee E) \to (C \leftrightarrow D))$; conclusione $\neg D$.

Cerco un controesempio: premesse vere e $D$ vera. Dalla prima premessa, $A$ e $C$ sono false.
1. $D \to A$ ha l'ipotesi vera e la conclusione falsa: è falsa.
2. $D \vee E$ è vera, perché $D$ è vera. $C \leftrightarrow D$ è falsa, perché $C$ è falsa e $D$ è vera. Quindi $(D \vee E) \to (C \leftrightarrow D)$ è falsa.
3. La seconda premessa è un «o» di due parti false: è falsa.

Il controesempio è impossibile: l'argomentazione è valida. Controllata anche con un programma su tutte le 16 righe.
:::

::: esercizio difficile Il dilemma costruttivo
Dimostra che $(p \to q) \wedge (r \to s),\ p \vee r \;/\; \therefore q \vee s$ è valida, con le regole. È la stessa forma dell'esercizio 6 del libro.
::: soluzione
1. Dalla prima premessa, per semplificazione: $p \to q$, e anche $r \to s$.
2. Da $p \vee r$ ragiono per casi.
   - Se è vera $p$: da $p \to q$, per modus ponens, $q$; per addizione, $q \vee s$.
   - Se è vera $r$: da $r \to s$, per modus ponens, $s$; per addizione, $q \vee s$.
3. In tutti e due i casi $q \vee s$ è vera.
:::

::: esercizio difficile Trovare il controesempio con il metodo alternativo
Usa il metodo alternativo del canale A per mostrare che $A \to (B \vee C),\ B \to \neg C \;/\; \therefore A \to B$ non è valida, e trova il controesempio.
::: soluzione
A sinistra (vere): $A \to (B \vee C)$ e $B \to \neg C$. A destra (falsa): $A \to B$.
1. $A \to B$ falsa: $A$ va a sinistra, $B$ a destra.
2. $A \to (B \vee C)$ vera apre due rami. Nel primo $A$ va a destra: si chiude, perché $A$ è anche a sinistra. Nel secondo $B \vee C$ va a sinistra.
3. $B \vee C$ vera apre due rami. Nel primo $B$ va a sinistra: si chiude con la $B$ di destra. Nel secondo $C$ va a sinistra.
4. $B \to \neg C$ vera apre due rami. Nel primo $B$ va a destra: nessuna contraddizione. Nel secondo $\neg C$ va a sinistra, cioè $C$ a destra: si chiude con la $C$ di sinistra.

Resta aperto un ramo: a sinistra $A$ e $C$, a destra $B$. Il controesempio è $A$ = V, $B$ = F, $C$ = V. Controllo: $B \vee C$ è vera, quindi la prima premessa è vera; $B$ è falsa, quindi la seconda è vera a vuoto; $A \to B$ è falsa.
:::

## Domande di ripasso

::: domanda Che cos'è un'argomentazione? Quando è valida?
Una lista di premesse seguita da una conclusione. È valida quando, se le premesse sono tutte vere, anche la conclusione è vera.
:::

::: domanda Come si controlla con la tavola se un'argomentazione è valida?
Si guardano solo le righe con tutte le premesse vere. Se in tutte la conclusione è vera, è valida; se in una è falsa, quella riga è un controesempio.
:::

::: domanda Un'argomentazione valida può avere la conclusione falsa?
Sì, se almeno una premessa è falsa. La validità riguarda la forma del ragionamento, non la verità delle premesse.
:::

::: domanda Che cosa dicono il modus ponens e il modus tollens?
Modus ponens: da $p \to q$ e $p$ segue $q$. Modus tollens: da $p \to q$ e $\neg q$ segue $\neg p$.
:::

::: domanda Quali sono le sette regole di inferenza del libro?
Modus ponens, modus tollens, addizione, semplificazione, congiunzione, sillogismo ipotetico e sillogismo disgiuntivo.
:::

::: domanda Che cosa sono «affermare il conseguente» e «negare l'antecedente»? Perché non sono validi?
Il primo è dedurre $p$ da $p \to q$ e $q$; il secondo è dedurre $\neg q$ da $p \to q$ e $\neg p$. Non sono validi: la riga $p$ falsa e $q$ vera rende vere le premesse e falsa la conclusione.
:::

::: domanda Che cosa vuol dire $A_1, \dots, A_n \models A$?
È la notazione del canale A: in ogni riga in cui $A_1, \dots, A_n$ sono vere, anche $A$ è vera. È la stessa cosa dell'argomentazione valida.
:::

::: domanda Se le premesse non possono essere vere insieme, che cosa si può dedurre?
Qualunque cosa: l'argomentazione è valida a vuoto, perché non esiste una riga con le premesse vere e la conclusione falsa.
:::

## Glossario

```glossario
Argomentazione | Una sequenza di proposizioni, le premesse, seguita da una conclusione.
Premessa | Una delle proposizioni di partenza di un'argomentazione; si chiama anche ipotesi.
Conclusione | La proposizione finale di un'argomentazione, dopo il «quindi».
Argomentazione valida | Se tutte le premesse sono vere, anche la conclusione è vera (Definizione 1.4.1).
Controesempio | Una riga della tavola con tutte le premesse vere e la conclusione falsa.
Regola di inferenza | Un'argomentazione valida corta, usata come passo di un ragionamento.
Modus ponens | Da $p \to q$ e $p$ segue $q$.
Modus tollens | Da $p \to q$ e $\neg q$ segue $\neg p$.
Sillogismo ipotetico | Da $p \to q$ e $q \to r$ segue $p \to r$.
Sillogismo disgiuntivo | Da $p \vee q$ e $\neg p$ segue $q$.
Affermare il conseguente | L'errore di dedurre $p$ da $p \to q$ e $q$.
Negare l'antecedente | L'errore di dedurre $\neg q$ da $p \to q$ e $\neg p$.
Conseguenza logica | $A_1, \dots, A_n \models A$: la notazione del canale A per l'argomentazione valida.
```

## Checklist

```checklist
- So distinguere premesse e conclusione, e tradurre un'argomentazione con le lettere.
- So che «valida» vuol dire che la conclusione segue dalle premesse, non che è vera.
- So controllare un'argomentazione con la tavola, guardando solo le righe con le premesse vere.
- So trovare un controesempio quando un'argomentazione non è valida.
- So le sette regole di inferenza del libro e le riconosco nelle frasi in italiano.
- So riconoscere i due errori: affermare il conseguente e negare l'antecedente.
- So costruire una catena di regole, citando a ogni passo la regola e i passi usati.
- So ragionare per casi a partire da un «o».
- So leggere la notazione $\models$ del canale A.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 1), §1.4 «Arguments and Rules of Inference»: Definizione 1.4.1, ragionamento deduttivo, premesse e conclusione, le sette regole di inferenza; le domande di ripasso e gli esercizi 1, 4, 6, 9, 10, 13, 15, 18, 27, 30, 33 e 36 con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: le frasi degli esercizi sono riportate come compaiono nelle soluzioni, tradotte.
- Diario del canale B: «Lezione 09. Venerdì 16 Ottobre ore 11-13. Capitolo 1.4 (Parte 2). Regole di inferenza per le proposizioni. Esercizi.» Appunti scritti prima della lezione.
- F. Cardone, «La relazione di conseguenza per la logica proposizionale» e «Appunti su un metodo alternativo alle tavole di verità per stabilire la relazione di conseguenza logica» (Moodle del canale A); il rompicapo del caffè e l'indovinello degli studenti dagli appunti del canale A degli anni passati.
- Il detective e la torta, i riquadri «Prova tu», la domanda nello stile del quiz, i quiz e gli esercizi senza indicazione sono di questi appunti. Tutte le argomentazioni sono state controllate con un programma che prova tutte le righe.
