---
corso: FDA
lezione: "06"
titolo: Proposizioni, connettivi e tavole di verità
data: 2026-10-12
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 06 · Libro, parte 2, §1.2
descrizione: >-
  Appunti della lezione 06 di Fondamenti dell'Informatica (canale B), la prima della parte 2 del libro: proposizioni e
  valori di verità, congiunzione, disgiunzione inclusiva ed esclusiva, negazione, formule e parentesi, tavole di
  verità, valutare una formula in una riga, tradurre l'italiano in formule; uno strumento interattivo per le tavole,
  quiz ed esercizi svolti.
lede: >-
  Comincia la logica. Una proposizione è una frase che è vera o falsa; con «e», «o» e «non» se ne costruiscono di più
  lunghe, e la tavola di verità dice quando sono vere. È la stessa cosa delle porte logiche della lezione 01, scritta
  con le parole.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 1), §1.2
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 1), §1.2 «Propositions», con le
  domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; diario della lezione del
  12/10/2026 del canale B; dispense di logica di Felice Cardone (Moodle del canale A); simulazioni d'esame 2023/24
appunti_html: appunti/FDA/06_proposizioni_connettivi_tavole.html
genera_html: true
simboli_logici: si
---

## In breve

- Una **proposizione** è una frase che è **vera o falsa**, non tutte e due. «Torino è in Piemonte» lo è; una domanda, un ordine o «x è maggiore di 3» no.
- Con tre parole si costruiscono frasi più lunghe: «**e**», «**o**» e «**non**». Si chiamano **connettivi**: la congiunzione, la disgiunzione e la negazione.
- La frase con «e» è vera solo se sono vere **tutte e due** le parti. Quella con «o» è vera se ne è vera **almeno una**. «Non» scambia vero e falso.
- L'«o» della logica è **inclusivo**: è vero anche quando sono vere tutte e due le parti. L'«o» esclusivo, «o l'una o l'altra ma non tutte e due», ha un simbolo suo, $\oplus$.
- La **tavola di verità** di una formula prova tutte le combinazioni di vero e falso delle lettere: con 2 lettere sono 4 righe, con 3 lettere 8.
- Senza parentesi si calcola prima «non», poi «e», poi «o». Ma nel dubbio si mettono le **parentesi**.
- Sono le porte logiche della lezione 01: AND, OR, NOT e XOR, con V al posto di 1 e F al posto di 0.

> [!CANALI]
> Nel canale B è la lezione di lunedì 12/10, dalle 9 alle 11. Per il docente è la lezione 7, perché la prima è stata un'introduzione: qui è la 06. Il diario del canale B la riassume così: «Capitolo 1.2 (Parte 2) Logica Proposizionale. Posposto: capitolo 1.1 su insiemi.» Comincia quindi la **parte 2** del libro, che è il libro di Johnsonbaugh sulla matematica discreta; il primo paragrafo, sugli insiemi, il docente lo farà più avanti. Gli insiemi sono anche in Matematica Discreta, nelle lezioni [D01](../MDAG/D01_insiemi_induzione.html) e [D02](../MDAG/D02_complementare_induzione_partizioni.html). Non ho i lucidi del docente: ho seguito il §1.2 del libro, con le sue domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A (id 3851, aperto agli ospiti). Nel canale A la logica è nelle dispense di Felice Cardone sullo stesso Moodle. Nel canale C è nei lucidi del docente.

## Frasi che sono vere o false (libro, §1.2)

All'ingresso di un concerto il controllore fa domande precise: «Hai il biglietto?», «Hai un documento?». Ogni risposta è sì o no. Allo stesso modo, alcune frasi si possono giudicare: o sono vere, o sono false.

Guarda queste sei frasi.

1. Torino è il capoluogo del Piemonte.
2. $2 + 5 = 19$.
3. Che ore sono?
4. Chiudi la porta.
5. $x + 2 = 5$.
6. Il biglietto del concerto costa 40 euro.

La 1 è vera. La 2 è falsa, ma è comunque una frase che si può giudicare. La 3 è una domanda e la 4 un ordine: non sono né vere né false. La 5 dipende da chi è $x$: vera se $x$ vale 3, falsa altrimenti, e finché non lo sai non ha un valore. La 6 si può controllare: è vera o falsa, anche se non sai quale delle due.

> [!IDEA]
> Una proposizione è una frase a cui si può rispondere «vero» o «falso». Non serve sapere quale delle due: basta che sia una delle due, e una sola.

> [!DEF] Proposizione (libro, §1.2)
> Una **proposizione** è una frase che è vera oppure falsa, ma non entrambe le cose.

**Come si legge.** Una proposizione ha un **valore di verità**: vero o falso. Il libro, che è in inglese, li scrive T (*true*) e F (*false*); qui uso **V** e **F**. Nei circuiti della lezione 01 gli stessi valori erano 1 e 0. Domande, ordini e frasi con una lettera che non si sa quanto vale non sono proposizioni.

Le frasi come la 5, che diventano proposizioni quando scegli il valore di $x$, hanno un nome loro: le vedrai nel §1.5 del libro, con «per ogni» ed «esiste».

> [!ESEMPIO] Dalle soluzioni del libro
> Le soluzioni degli esercizi del §1.2 dicono così, per le frasi che il libro propone:
> - «$2 + 5 = 19$» **è** una proposizione, falsa. La sua negazione è «$2 + 5 \neq 19$».
> - una domanda **non** è una proposizione;
> - un ordine **non** è una proposizione;
> - «$p - q$, dove $p$ e $q$ sono numeri primi» **non** è una proposizione: descrive un numero, non dice niente di vero o di falso.

### Le lettere al posto delle frasi

Alla logica non interessa **di che cosa** parla una frase, ma solo se è vera o falsa. Per questo si sostituiscono le frasi con delle lettere: $p$, $q$, $r$ nel libro; $A$, $B$, $C$ nelle dispense del canale A. Per esempio:

- $p$: «ho il biglietto»;
- $q$: «ho un documento».

Ogni lettera sta per una proposizione qualunque, che può essere vera o falsa.

::: prova Quali sono proposizioni? (a) «7 è un numero primo.» (b) «Apri la finestra.» (c) «$y < 10$.» (d) «Il 31/12/2026 è un giovedì.»
(a) Sì, vera. (b) No: è un ordine. (c) No: dipende da $y$. (d) Sì: basta un calendario per controllarla, ed è vera.
:::

> [!RICORDA]
> - Proposizione: una frase vera o falsa, non tutte e due.
> - Domande, ordini e frasi con una variabile libera non sono proposizioni.

## Unire le frasi: «e», «o», «non» (libro, §1.2)

Il controllore del concerto ha una regola: «Entri se hai il biglietto **e** un documento». Con due proposizioni ne ha costruita una terza, più lunga. Le parole che uniscono le frasi si chiamano **connettivi**. I tre principali sono «e», «o» e «non».

### «E»: tutte e due

Quando entri al concerto con la regola «biglietto e documento»? Proviamo tutti i casi:

| Hai il biglietto? | Hai il documento? | Entri? |
|:-:|:-:|:-:|
| sì | sì | **sì** |
| sì | no | no |
| no | sì | no |
| no | no | no |

Entri solo nel primo caso: devono essere vere **tutte e due** le cose.

> [!DEF] Congiunzione (libro, §1.2)
> La **congiunzione** delle proposizioni $p$ e $q$ è la proposizione «$p$ e $q$», che si scrive $p \wedge q$. È vera quando $p$ e $q$ sono tutte e due vere, e falsa in tutti gli altri casi.

**Come si legge.** Il simbolo $\wedge$ si legge «e». È una specie di A senza trattino: ricorda AND. Basta che una parte sia falsa perché tutta la frase sia falsa.

### «O»: almeno una

Al bar del concerto si paga «in contanti **o** con la carta». Se hai tutte e due le cose, puoi pagare lo stesso. Non puoi pagare solo se non hai né l'una né l'altra.

| Hai contanti? | Hai la carta? | Puoi pagare? |
|:-:|:-:|:-:|
| sì | sì | **sì** |
| sì | no | **sì** |
| no | sì | **sì** |
| no | no | no |

> [!DEF] Disgiunzione (libro, §1.2)
> La **disgiunzione** delle proposizioni $p$ e $q$ è la proposizione «$p$ o $q$», che si scrive $p \vee q$. È vera quando almeno una tra $p$ e $q$ è vera, e falsa solo quando sono tutte e due false.

**Come si legge.** Il simbolo $\vee$ si legge «o», e viene dal latino *vel*. È il contrario di $\wedge$: basta una parte vera perché tutta la frase sia vera.

> [!TRAPPOLA] L'«o» della logica comprende il caso «tutte e due»
> Nell'italiano di tutti i giorni «o» a volte vuol dire «o l'uno o l'altro, ma non tutti e due»: «a pranzo pasta o riso». In logica $p \vee q$ è vera **anche** quando $p$ e $q$ sono vere tutte e due. Si chiama «o» **inclusivo**.

### «Non»: il contrario

La negazione di una proposizione è vera quando la proposizione è falsa, e falsa quando è vera.

> [!DEF] Negazione (libro, §1.2)
> La **negazione** della proposizione $p$ è la proposizione «non $p$», che si scrive $\neg p$. È vera quando $p$ è falsa, e falsa quando $p$ è vera.

**Come si legge.** $\neg p$ si legge «non $p$». Il simbolo $\neg$ è un trattino con la coda, attaccato davanti alla lettera.

### Le tavole dei connettivi

Le tre regole si mettono in una tabella, la **tavola di verità**: una riga per ogni combinazione di valori.

| $p$ | $q$ | $p \wedge q$ | $p \vee q$ | $\neg p$ |
|:-:|:-:|:-:|:-:|:-:|
| V | V | V | V | F |
| V | F | F | V | F |
| F | V | F | V | V |
| F | F | F | F | V |

> [!NOTA] Sono le porte logiche della lezione 01
> La porta AND della [lezione 01](01_bit_porte_esadecimale.html) dà 1 solo se tutti e due gli ingressi sono 1: è la tavola di $\wedge$, con 1 al posto di V e 0 al posto di F. La porta OR è $\vee$, la porta NOT è $\neg$. In C, nella condizione di un `if`, gli stessi connettivi si scrivono `&&`, `||` e `!`.

::: prova Con $p$ vera e $q$ falsa, quanto valgono $p \wedge q$, $p \vee q$, $\neg p$ e $\neg q$?
$p \wedge q$ è F, perché $q$ è falsa. $p \vee q$ è V, perché $p$ è vera. $\neg p$ è F e $\neg q$ è V.
:::

> [!RICORDA]
> - $\wedge$, «e»: vera solo con tutte e due le parti vere.
> - $\vee$, «o»: falsa solo con tutte e due le parti false.
> - $\neg$, «non»: scambia V e F.

## L'«o» esclusivo (libro, §1.2, esercizi)

A volte «o» vuol dire davvero «uno solo dei due». Al concerto: «Con il biglietto ridotto ricevi la maglietta **o** il poster». Non ti danno tutti e due. Questo «o» si chiama **esclusivo**.

| $p$ | $q$ | $p \oplus q$ |
|:-:|:-:|:-:|
| V | V | F |
| V | F | V |
| F | V | V |
| F | F | F |

L'«o» esclusivo si scrive $p \oplus q$ e si legge «$p$ xor $q$»: XOR sta per *exclusive or*. È vero quando le due parti hanno valori **diversi**. È la porta XOR della lezione 01.

Il libro lo usa negli esercizi del §1.2: per ogni frase chiede se l'«o» è inclusivo o esclusivo. Le soluzioni ufficiali mostrano che dipende dal senso della frase. Ecco tre esempi nello stesso stile, con la risposta:

- «Il portabicchieri dell'auto riscalda o raffredda la bevanda»: esclusivo, perché non può fare tutte e due le cose insieme.
- «L'incontro è annullato se si iscrivono meno di 10 persone o se nevica»: inclusivo, perché con tutte e due le cose l'incontro è annullato lo stesso.
- «Per entrare devi mostrare la carta d'identità o il passaporto»: le soluzioni del libro, per una frase così, dicono che il senso voluto è quello esclusivo. In pratica nessuno ti respinge se li mostri tutti e due: le frasi d'uso comune sono spesso ambigue.

> [!NOTA] Un regolamento ambiguo, davvero
> Il libro racconta un regolamento comunale: «È vietato tenere più di tre cani e più di tre gatti nella propria proprietà». Chi ha quattro cani e due gatti viola la regola? Letta alla lettera, no: serve tenere più di tre cani **e** più di tre gatti. Un giudice ha dichiarato la regola «vaga»: probabilmente si voleva scrivere «o». Il libro suggerisce che il senso voluto fosse «più di tre cani o più di tre gatti».

::: prova Con $p$ vera e $q$ vera, quanto valgono $p \vee q$ e $p \oplus q$?
$p \vee q$ è V: l'«o» inclusivo accetta il caso «tutte e due». $p \oplus q$ è F: l'«o» esclusivo lo esclude.
:::

> [!RICORDA]
> - $p \oplus q$, «o esclusivo»: vera quando le due parti hanno valori diversi.
> - In logica, senza altre indicazioni, «o» è sempre inclusivo: $\vee$.

## Negare una frase senza sbagliare (libro, §1.2)

La negazione sembra la parte più facile, ma in italiano è facile sbagliarla. Negare vuol dire dire esattamente **il contrario**: la negazione è vera in tutti i casi in cui la frase è falsa, e solo in quelli.

> [!ESEMPIO] Dieci lanci di una moneta (soluzioni del libro, §1.2)
> Lanci una moneta 10 volte. La frase è «sono uscite 10 teste».
> - La negazione è «**non** sono uscite 10 teste», cioè «è uscita **almeno una** croce».
> - **Non** è «sono uscite 10 croci»: con 5 teste e 5 croci la frase di partenza è falsa, ma anche questa.
>
> Con la frase «non è uscita nessuna testa», la negazione è «è uscita almeno una testa», non «sono uscite 10 teste».

Lo stesso succede con i numeri. Le dispense del canale A lo fanno notare: la negazione di «$2 < 5$» è «$2 \ge 5$», non «$2 > 5$». C'è anche il caso dell'uguaglianza, che non va dimenticato.

> [!TRAPPOLA] Il contrario non è l'opposto
> La negazione di «tutti i biglietti sono venduti» non è «nessun biglietto è venduto», ma «**almeno un** biglietto non è venduto». La negazione deve coprire **tutti** i casi in cui la frase di partenza è falsa.

La negazione di «Torino è in Piemonte» è «Torino non è in Piemonte», o anche «non è vero che Torino è in Piemonte». Non è «Torino è in Lombardia»: quella è un'altra frase, che non copre tutti i casi.

::: prova Scrivi la negazione di: (a) «Il concerto comincia alle 21.» (b) «Ho almeno 18 anni.» (c) «Tutti hanno il biglietto.»
(a) «Il concerto non comincia alle 21.» (b) «Ho meno di 18 anni.» (c) «Almeno una persona non ha il biglietto.»
:::

> [!RICORDA]
> - La negazione è vera esattamente quando la frase di partenza è falsa.
> - «Non tutti» vuol dire «almeno uno no», non «nessuno».

## Formule e parentesi (libro, §1.2)

Con i connettivi si costruiscono frasi lunghe quanto vuoi. Al concerto, per esempio: «Entri se hai il biglietto e un documento, oppure se sei nella lista degli ospiti». Con le lettere:

- $p$: «hai il biglietto»;
- $q$: «hai un documento»;
- $r$: «sei nella lista degli ospiti».

La regola è $(p \wedge q) \vee r$. Un'espressione così, fatta di lettere, connettivi e parentesi, si chiama **formula**, o **proposizione composta**.

### Le parentesi cambiano il senso

Senza parentesi, la regola si potrebbe leggere in due modi:

- $(p \wedge q) \vee r$: «biglietto e documento», oppure «in lista»;
- $p \wedge (q \vee r)$: «biglietto», e in più «documento o lista».

Sono due regole diverse. Un ospite in lista senza biglietto entra con la prima, ma non con la seconda.

### L'ordine dei connettivi

Per non scrivere troppe parentesi, il libro fissa un ordine, come in aritmetica si fanno le moltiplicazioni prima delle somme:

1. prima $\neg$;
2. poi $\wedge$;
3. poi $\vee$.

Quindi $p \vee q \wedge r$ vuol dire $p \vee (q \wedge r)$, e $\neg p \wedge q$ vuol dire $(\neg p) \wedge q$.

> [!TRAPPOLA] Il «non» si attacca solo a quello che segue
> $\neg p \wedge q$ vuol dire «non $p$, e $q$». Per negare tutta la congiunzione servono le parentesi: $\neg(p \wedge q)$. In italiano la differenza è tra «non ho il biglietto e ho il documento» e «non è vero che ho il biglietto e il documento».

All'esame e negli esercizi conviene comunque **mettere sempre le parentesi**: non costano niente, ed evitano gli errori.

::: prova Metti le parentesi secondo l'ordine del libro: (a) $\neg p \vee q$; (b) $p \wedge q \vee r$; (c) $p \vee \neg q \wedge r$.
(a) $(\neg p) \vee q$. (b) $(p \wedge q) \vee r$. (c) $p \vee ((\neg q) \wedge r)$.
:::

> [!RICORDA]
> - Una formula è fatta di lettere, connettivi e parentesi.
> - Ordine: prima $\neg$, poi $\wedge$, poi $\vee$. Nel dubbio, parentesi.

## La tavola di verità di una formula (libro, §1.2)

Per sapere quando una formula è vera si provano **tutti i casi possibili**: tutte le combinazioni di V e F delle lettere. Ogni combinazione è una riga della tavola.

### Quante righe

Ogni lettera può essere V o F. Con una lettera i casi sono 2; ogni lettera in più **raddoppia** i casi, come gli ingressi di un circuito nella lezione 01.

| Lettere | Righe |
|:-:|:-:|
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |

Con $n$ lettere le righe sono $2^n$.

### L'ordine delle righe

Per non dimenticare righe si usa sempre lo stesso schema, quello del libro:

- la **prima** lettera ha la prima metà delle righe V e la seconda metà F;
- la seconda alterna a gruppi più piccoli, della metà;
- l'**ultima** alterna una riga sì e una no: V, F, V, F.

È come contare in base 2 della lezione 02, ma all'indietro e con V al posto di 0.

> [!METODO] Costruire la tavola di una formula
> 1. Conta le lettere: se sono $n$, le righe sono $2^n$. Scrivi le combinazioni con lo schema qui sopra.
> 2. Spezza la formula nei suoi pezzi, dal più piccolo al più grande. Ogni pezzo è una colonna.
> 3. Riempi le colonne da sinistra a destra, usando le tavole dei connettivi e le colonne già pronte.
> 4. L'ultima colonna è la formula intera.

> [!ESEMPIO] La regola «biglietto e documento, oppure in lista»
> La formula è $(p \wedge q) \vee r$. Tre lettere, quindi 8 righe. I pezzi: prima $p \wedge q$, poi la formula intera.
>
> | $p$ | $q$ | $r$ | $p \wedge q$ | $(p \wedge q) \vee r$ |
> |:-:|:-:|:-:|:-:|:-:|
> | V | V | V | V | V |
> | V | V | F | V | V |
> | V | F | V | F | V |
> | V | F | F | F | F |
> | F | V | V | F | V |
> | F | V | F | F | F |
> | F | F | V | F | V |
> | F | F | F | F | F |
>
> Entri in 5 casi su 8: quando hai biglietto e documento (righe 1 e 2), e quando sei in lista (righe 1, 3, 5, 7).

> [!ESEMPIO] Una formula con la negazione: $(p \vee q) \wedge \neg r$
> I pezzi sono $p \vee q$, $\neg r$ e la formula intera.
>
> | $p$ | $q$ | $r$ | $p \vee q$ | $\neg r$ | $(p \vee q) \wedge \neg r$ |
> |:-:|:-:|:-:|:-:|:-:|:-:|
> | V | V | V | V | F | F |
> | V | V | F | V | V | V |
> | V | F | V | V | F | F |
> | V | F | F | V | V | V |
> | F | V | V | V | F | F |
> | F | V | F | V | V | V |
> | F | F | V | F | F | F |
> | F | F | F | F | V | F |
>
> È vera in 3 righe: quando $r$ è falsa e almeno una tra $p$ e $q$ è vera.

### Prova tu con lo strumento

Scrivi una formula: lo strumento fa la tavola, con una colonna per ogni pezzo, nello stesso ordine del libro. Prova a cambiare le parentesi della regola del concerto e guarda come cambiano le righe.

```widget logica
titolo: La tavola di verità di una formula
modo: tavola
formula: (p ∧ q) ∨ r
```

### Formule sempre vere e sempre false

Alcune formule hanno la stessa colonna finale in tutte le righe.

- $p \vee \neg p$, «piove o non piove», è vera in **tutte** le righe. Una formula così si chiama **tautologia**.
- $p \wedge \neg p$, «piove e non piove», è falsa in **tutte** le righe. Si chiama **contraddizione**.

Il libro, negli esercizi del §1.2, ne fa costruire due più lunghe. Le soluzioni ufficiali danno queste tavole:

| $p$ | $q$ | $p \wedge \neg q$ | $(p \wedge q) \wedge \neg q$ |
|:-:|:-:|:-:|:-:|
| V | V | F | F |
| V | F | V | F |
| F | V | F | F |
| F | F | F | F |

La seconda è sempre falsa: chiede che $q$ sia vera, dentro $p \wedge q$, e falsa, con $\neg q$, nello stesso momento. Anche la formula $(p \vee q) \wedge (\neg p \vee q) \wedge (p \vee \neg q) \wedge (\neg p \vee \neg q)$ dell'esercizio successivo è sempre falsa: ogni riga rende falso uno dei quattro pezzi. Prova a scriverla nello strumento.

::: prova Quante righe ha la tavola di $(p \vee q) \wedge (r \vee s)$? E in quante righe è falsa $p \vee q \vee r$?
4 lettere: 16 righe. $p \vee q \vee r$ è falsa solo quando sono false tutte e tre: una riga sola, l'ultima.
:::

> [!RICORDA]
> - Con $n$ lettere, $2^n$ righe: la prima lettera cambia più lentamente, l'ultima a ogni riga.
> - Una colonna per ogni pezzo della formula, dal più piccolo al più grande.
> - Tautologia: sempre vera. Contraddizione: sempre falsa.

## Il valore in una sola riga

Spesso non serve tutta la tavola: un quiz dà i valori delle lettere e chiede quanto vale la formula. Si fa come un'espressione dell'aritmetica: si sostituiscono i valori e si calcola da dentro verso fuori.

> [!ESEMPIO] $(p \wedge \neg q) \vee (\neg p \wedge r)$ con $p$ = V, $q$ = V, $r$ = F
> 1. $\neg q$ = F, quindi $p \wedge \neg q$ = V $\wedge$ F = F.
> 2. $\neg p$ = F, quindi $\neg p \wedge r$ = F $\wedge$ F = F.
> 3. F $\vee$ F = F.
>
> La formula è falsa.

Un trucco fa risparmiare tempo: con «e» basta trovare una parte falsa, con «o» basta trovare una parte vera. Il resto non serve calcolarlo.

::: prova Quanto vale $\neg(p \vee q) \vee (q \wedge r)$ con $p$ = F, $q$ = V, $r$ = V?
$p \vee q$ = V, quindi $\neg(p \vee q)$ = F. $q \wedge r$ = V. F $\vee$ V = V: la formula è vera.
:::

> [!RICORDA]
> - Per una riga sola: sostituisci i valori e calcola da dentro verso fuori.
> - Con «e» cerca una parte falsa, con «o» una parte vera: spesso basta.

## Dall'italiano alle formule (libro, §1.2)

Molti esercizi del libro chiedono di tradurre: dalle frasi alle formule, e dalle formule alle frasi. Ci sono alcune parole a cui fare attenzione.

| Frase in italiano | Formula | Attenzione |
|---|---|---|
| ho il biglietto e il documento | $p \wedge q$ | |
| ho il biglietto **ma** non il documento | $p \wedge \neg q$ | «ma», «però», «eppure» sono «e» |
| ho il biglietto **o** il documento | $p \vee q$ | inclusivo, se non c'è scritto altro |
| **o** il biglietto **o** il documento, non tutti e due | $p \oplus q$ | esclusivo, quando lo dice il testo |
| **né** il biglietto **né** il documento | $\neg p \wedge \neg q$ | sono false tutte e due |
| **non** ho il biglietto e ho il documento | $\neg p \wedge q$ | il «non» riguarda solo il biglietto |
| **non è vero che** ho il biglietto e il documento | $\neg(p \wedge q)$ | il «non» riguarda tutta la frase |

> [!TRAPPOLA] «Né… né» vuol dire «nessuna delle due»
> «Né il biglietto né il documento» dice che mancano **tutti e due**: $\neg p \wedge \neg q$. La formula $\neg p \vee \neg q$ dice un'altra cosa: che ne manca **almeno uno**. Nella tavola qui sotto le due colonne sono diverse nelle righe 2 e 3.

| $p$ | $q$ | $\neg p \wedge \neg q$ | $\neg p \vee \neg q$ | $\neg(p \wedge q)$ |
|:-:|:-:|:-:|:-:|:-:|
| V | V | F | F | F |
| V | F | F | V | V |
| F | V | F | V | V |
| F | F | V | V | V |

Le ultime due colonne sono uguali: «non è vero che ho tutti e due» è lo stesso che «me ne manca almeno uno». È una delle **leggi di De Morgan**, che il libro presenta nel §1.3, la prossima lezione.

> [!ESEMPIO] Traduzioni nello stile del libro
> Il libro usa due proposizioni su uno studente: $p$, «Lea segue informatica», e $q$, «Lea segue matematica». Nelle soluzioni le traduzioni sono così:
> - $\neg p$: «Lea non segue informatica»;
> - $p \vee \neg q$: «Lea segue informatica o non segue matematica»;
> - $\neg p \wedge \neg q$: «Lea non segue né informatica né matematica».
>
> Con tre proposizioni, $p$ «oggi è lunedì», $q$ «piove», $r$ «fa caldo»: la formula $(p \wedge q) \wedge \neg(r \vee p)$ si legge «oggi è lunedì e piove, e non è vero che fa caldo o è lunedì». È una contraddizione: chiede che sia lunedì e che non sia lunedì.

::: prova Con $p$: «piove» e $q$: «fa freddo», traduci: (a) «Piove ma non fa freddo.» (b) «Né piove né fa freddo.» (c) «Non è vero che piove e fa freddo.»
(a) $p \wedge \neg q$. (b) $\neg p \wedge \neg q$. (c) $\neg(p \wedge q)$.
:::

> [!RICORDA]
> - «Ma» è un «e»; «né… né» è $\neg p \wedge \neg q$.
> - Guarda fin dove arriva il «non»: su una parte sola, o su tutta la frase.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| V, F | «vero», «falso» | i due valori di verità; nel libro T e F | |
| $p$, $q$, $r$ | «pi», «cu», «erre» | proposizioni qualsiasi | $p$: «ho il biglietto» |
| $p \wedge q$ | «$p$ e $q$» | congiunzione: vera solo se tutte e due vere | V $\wedge$ F = F |
| $p \vee q$ | «$p$ o $q$» | disgiunzione inclusiva: vera se almeno una è vera | V $\vee$ F = V |
| $p \oplus q$ | «$p$ xor $q$» | o esclusivo: vera se i valori sono diversi | V $\oplus$ V = F |
| $\neg p$ | «non $p$» | negazione: il valore opposto | $\neg$V = F |
| $2^n$ | «due alla enne» | il numero di righe con $n$ lettere | $2^3 = 8$ |
| `&&`, `\|\|`, `!` | «and», «or», «not» | gli stessi connettivi in C | `x > 0 && x < 10` |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti.

**Che cosa serve di questa lezione**

1. **Valutare una formula riga per riga.** Nella simulazione 1 del 2023/24 un quiz dà una formula e quattro righe di valori, e chiede il valore della formula in ogni riga. Quella formula usa anche $\to$ e $\leftrightarrow$, che sono la [lezione 07](07_condizionali_equivalenza_logica.html); il metodo è quello di qui.
2. **Dalla tabella alla formula, e i circuiti.** I quiz sui circuiti (simulazione 1, domande 5 e 6) chiedono quali formule hanno una certa tavola. Si risolvono con le tavole di questa lezione: sono svolti nella [lezione 05](05_esercizi_circuiti_rappresentazioni.html).
3. **Tradurre e negare.** Le negazioni di frasi, con «tutti», «nessuno», «almeno uno», tornano nella simulazione 2 del 2023/24, con i quantificatori del §1.5 del libro.

### Una domanda nello stile del quiz, letta insieme

**Il testo**: «Considera la formula $(A \vee B) \wedge \neg(A \wedge B)$. Seleziona il valore della formula in ogni riga della tabella: $A$ = V, $B$ = V; $A$ = V, $B$ = F; $A$ = F, $B$ = F; $A$ = F, $B$ = V.» È costruita come il quiz 3 della simulazione 1, ma con i connettivi di questa lezione.

**In pratica chiede:** quattro valori, uno per riga. Le righe non sono nell'ordine solito.

> [!ESEMPIO] · la soluzione, passo per passo
> Per ogni riga calcolo i due pezzi, $A \vee B$ e $\neg(A \wedge B)$, e poi li unisco con «e».
>
> | $A$ | $B$ | $A \vee B$ | $A \wedge B$ | $\neg(A \wedge B)$ | formula |
> |:-:|:-:|:-:|:-:|:-:|:-:|
> | V | V | V | V | F | **F** |
> | V | F | V | F | V | **V** |
> | F | F | F | F | V | **F** |
> | F | V | V | F | V | **V** |
>
> Le risposte sono F, V, F, V. A parole: «almeno uno, ma non tutti e due», cioè l'«o» esclusivo. La formula ha la stessa tavola di $A \oplus B$.

> [!METODO] I quiz «valore in ogni riga»
> 1. **Leggi i valori di ogni riga**: nei quiz l'ordine delle righe cambia.
> 2. Calcola i pezzi da dentro verso fuori, scrivendo ogni valore.
> 3. Usa le scorciatoie: «e» con una parte falsa è falso, «o» con una parte vera è vero.
> 4. Alla fine guarda la colonna: se ha sempre lo stesso valore, ricontrolla; può essere una tautologia o una contraddizione, ma può anche essere un errore.

**Errori da evitare**

- Leggere l'«o» come esclusivo: V $\vee$ V è V.
- Dimenticare righe: con 3 lettere sono 8, non 6.
- Applicare il «non» a tutta la formula quando riguarda una lettera sola.
- Negare «tutti» con «nessuno».
- Considerare proposizioni le frasi con una variabile libera.

## Quiz

```quiz
D: Quale di queste frasi è una proposizione?
+ «Il 2 è l'unico numero primo pari.»
- «Quanti anni hai?»
- «Studia il capitolo 1.»
- «$x$ è un numero pari.»
- «Speriamo che il concerto cominci presto!»
= Una proposizione è vera o falsa: la prima lo è, ed è vera. La risposta più insidiosa è «$x$ è un numero pari»: sembra una frase di matematica, ma finché non sai chi è $x$ non è né vera né falsa. Una domanda, un ordine e un augurio non sono proposizioni.

D: Con $p$ falsa e $q$ vera, quale formula è vera?
+ $p \vee q$
- $p \wedge q$
- $\neg q$
- $p \wedge \neg q$
- $\neg(p \vee q)$
= $p \vee q$ è vera perché $q$ è vera. La risposta più insidiosa è $p \wedge \neg q$: ci sono due negazioni nascoste nel ragionamento, ma $p$ è falsa e basta questo a rendere falsa la congiunzione. $p \wedge q$ è falsa per lo stesso motivo; $\neg q$ è falsa; $\neg(p \vee q)$ è falsa perché $p \vee q$ è vera.

D: Quante righe ha la tavola di verità di $(p \wedge q) \vee (\neg r \wedge s)$?
+ 16
- 8
- 4
- 6
- 32
= Le lettere sono 4: $p$, $q$, $r$, $s$. Le righe sono $2^4 = 16$. La risposta più insidiosa è 8, che si ottiene contando 3 lettere o dimenticando che $\neg r$ contiene la lettera $r$. 32 sarebbe con 5 lettere.

D: Come va letta $p \vee \neg q \wedge r$ secondo l'ordine dei connettivi del libro?
+ $p \vee ((\neg q) \wedge r)$
- $(p \vee \neg q) \wedge r$
- $p \vee \neg(q \wedge r)$
- $\neg(p \vee q) \wedge r$
- $(p \vee \neg q \vee r)$
= Prima $\neg$, che si attacca solo a $q$; poi $\wedge$, che unisce $\neg q$ e $r$; per ultimo $\vee$. La risposta più insidiosa è $(p \vee \neg q) \wedge r$: legge da sinistra a destra come in una frase, ma $\wedge$ viene prima di $\vee$. Le altre spostano il «non» su più lettere.

D: Quanto vale $(p \wedge \neg q) \vee (\neg p \wedge r)$ con $p$ = F, $q$ = V, $r$ = V?
+ V
- F
- dipende da $q$
- non si può dire senza la tavola
- dipende dall'ordine delle righe
= $p \wedge \neg q$ è falsa, perché $p$ è falsa. $\neg p \wedge r$ è V $\wedge$ V = V. F $\vee$ V = V. La risposta più insidiosa è F, che si ottiene fermandosi al primo pezzo. Con tutti i valori dati il risultato è sempre uno solo: non serve la tavola.

D: Qual è la negazione di «Tutti gli spettatori hanno il biglietto»?
+ «Almeno uno spettatore non ha il biglietto.»
- «Nessuno spettatore ha il biglietto.»
- «Tutti gli spettatori non hanno il biglietto.»
- «Almeno uno spettatore ha il biglietto.»
- «Qualche spettatore ha due biglietti.»
= La negazione deve essere vera in tutti i casi in cui la frase è falsa: basta uno senza biglietto. La risposta più insidiosa è «Nessuno spettatore ha il biglietto»: è l'opposto, ma resta falsa quando metà degli spettatori ha il biglietto e metà no. La terza dice la stessa cosa della seconda.

D: Quale formula traduce «Non ho né contanti né la carta», con $p$: «ho contanti» e $q$: «ho la carta»?
+ $\neg p \wedge \neg q$
- $\neg p \vee \neg q$
- $\neg(p \wedge q)$
- $\neg p \wedge q$
- $p \oplus q$
= «Né… né» vuol dire che mancano tutti e due: tutte e due le negazioni sono vere. La risposta più insidiosa è $\neg p \vee \neg q$, che vuol dire «me ne manca almeno uno»: è vera anche se ho i contanti ma non la carta. $\neg(p \wedge q)$ dice la stessa cosa, per la legge di De Morgan.

D: In quale riga $p \oplus q$ e $p \vee q$ hanno valori diversi?
+ $p$ = V, $q$ = V
- $p$ = V, $q$ = F
- $p$ = F, $q$ = V
- $p$ = F, $q$ = F
- in nessuna riga
= Con tutte e due vere, l'«o» inclusivo è vero e quello esclusivo è falso: è l'unica differenza. La risposta più insidiosa è «in nessuna riga», per chi pensa che «o» sia sempre lo stesso. Nelle altre tre righe i due connettivi danno lo stesso valore.

D: Quale formula è una contraddizione, cioè falsa in tutte le righe?
+ $(p \wedge q) \wedge \neg q$
- $p \wedge \neg q$
- $p \vee \neg p$
- $\neg(p \wedge \neg p)$
- $(p \vee q) \wedge \neg q$
= $(p \wedge q) \wedge \neg q$ chiede che $q$ sia vera e falsa insieme: impossibile. La risposta più insidiosa è $(p \vee q) \wedge \neg q$: sembra simile, ma con $p$ vera e $q$ falsa è vera. $p \vee \neg p$ e $\neg(p \wedge \neg p)$ sono tautologie, sempre vere; $p \wedge \neg q$ è vera in una riga.

D: In quante righe della sua tavola di verità è vera la formula $(p \wedge q) \vee r$?
N: 5
= Le righe sono 8. La formula è vera quando $r$ è vera (4 righe) e, in più, quando $r$ è falsa ma $p$ e $q$ sono vere (1 riga): in tutto 5.
```

## Esercizi

::: esercizio base Riscaldamento: proposizione o no?
Dì quali frasi sono proposizioni e, per quelle che lo sono, se sono vere o false: (a) «$3 \cdot 4 = 12$.» (b) «Ricordati di comprare il latte.» (c) «Il numero $x^2$ è positivo.» (d) «Roma è più a nord di Milano.» (e) «Che bello questo esercizio!»
::: soluzione
(a) Proposizione vera. (b) Non è una proposizione: è un ordine. (c) Non è una proposizione: dipende da $x$, e con $x = 0$ sarebbe falsa. (d) Proposizione falsa. (e) Non è una proposizione: è un'esclamazione.
:::

::: esercizio base Riscaldamento: i tre connettivi
Con $p$ = V, $q$ = F e $r$ = V, calcola: (a) $p \wedge r$; (b) $q \vee r$; (c) $\neg p \vee q$; (d) $\neg(q \wedge r)$; (e) $p \oplus r$.
::: soluzione
(a) V $\wedge$ V = V. (b) F $\vee$ V = V. (c) $\neg p$ = F, e F $\vee$ F = F. (d) $q \wedge r$ = F, quindi la negazione è V. (e) V $\oplus$ V = F: valori uguali.
:::

::: esercizio base Riscaldamento: quante righe
Quante righe hanno le tavole di (a) $\neg p$; (b) $p \wedge q$; (c) $(p \vee q) \wedge \neg p$; (d) $(p \wedge q) \vee (r \wedge s) \vee t$?
::: soluzione
Contano le lettere diverse, non quante volte compaiono. (a) 1 lettera: 2 righe. (b) 2 lettere: 4 righe. (c) 2 lettere, perché $p$ compare due volte: 4 righe. (d) 5 lettere: $2^5 = 32$ righe.
:::

::: esercizio base Riscaldamento: negare bene
Scrivi la negazione di queste frasi: (a) «Ho almeno 18 anni.» (b) «Sono uscite 10 teste su 10 lanci.» (c) «Nessuno è arrivato in ritardo.» (d) «$x < 7$.»
::: soluzione
(a) «Ho meno di 18 anni.» (b) «È uscita almeno una croce.» (c) «Almeno una persona è arrivata in ritardo.» (d) «$x \ge 7$»: non va dimenticato il caso $x = 7$.
:::

::: esercizio medio Tavole dagli esercizi del libro
Costruisci le tavole di $p \wedge \neg q$ e di $(p \wedge q) \wedge \neg q$. Che cosa noti nella seconda?
::: soluzione
| $p$ | $q$ | $\neg q$ | $p \wedge \neg q$ | $p \wedge q$ | $(p \wedge q) \wedge \neg q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | F | F | V | F |
| V | F | V | V | F | F |
| F | V | F | F | F | F |
| F | F | V | F | F | F |

La prima è vera solo nella riga $p$ = V, $q$ = F. La seconda è falsa in tutte le righe: è una contraddizione. Quando $p \wedge q$ è vera, $q$ è vera e quindi $\neg q$ è falsa. Sono le stesse tavole delle soluzioni del libro.
:::

::: esercizio medio Le parentesi contano
Costruisci le tavole di $p \vee (q \wedge r)$ e di $(p \vee q) \wedge r$. In quali righe sono diverse?
::: soluzione
| $p$ | $q$ | $r$ | $q \wedge r$ | $p \vee (q \wedge r)$ | $p \vee q$ | $(p \vee q) \wedge r$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | V | V | V | V | V |
| V | V | F | F | V | V | F |
| V | F | V | F | V | V | V |
| V | F | F | F | V | V | F |
| F | V | V | V | V | V | V |
| F | V | F | F | F | V | F |
| F | F | V | F | F | F | F |
| F | F | F | F | F | F | F |

Sono diverse nella riga 2 ($p$ = V, $q$ = V, $r$ = F) e nella riga 4 ($p$ = V, $q$ = F, $r$ = F). In tutte e due $p$ è vera e $r$ è falsa: la prima formula si accontenta di $p$, la seconda chiede anche $r$.
:::

::: esercizio medio Dalle formule alle frasi
Con $p$: «oggi è lunedì», $q$: «piove», $r$: «fa caldo», scrivi in italiano: (a) $p \vee q$; (b) $\neg p \wedge (q \vee r)$; (c) $\neg(p \vee q) \vee r$.
::: soluzione
(a) «Oggi è lunedì o piove.»

(b) «Oggi non è lunedì, e piove o fa caldo.»

(c) «Non è vero che oggi è lunedì o piove, oppure fa caldo.» Si può anche dire: «oggi non è lunedì e non piove, oppure fa caldo».
:::

::: esercizio medio Dalle frasi alle formule
Con $p$: «gioco a calcio», $q$: «salto l'esame di metà corso», $r$: «passo l'esame», traduci: (a) «Gioco a calcio e salto l'esame di metà corso.» (b) «Non gioco a calcio ma passo l'esame.» (c) «Né gioco a calcio né salto l'esame di metà corso.» (d) «Gioco a calcio o salto l'esame di metà corso, e non passo l'esame.»
::: soluzione
(a) $p \wedge q$. (b) $\neg p \wedge r$. (c) $\neg p \wedge \neg q$. (d) $(p \vee q) \wedge \neg r$: qui la virgola dice che «e non passo» vale per tutta la prima parte.
:::

::: esercizio esame Valore in ogni riga
Considera la formula $\neg(A \wedge \neg B) \vee (A \wedge B)$. Dai il suo valore nelle righe: $A$ = V, $B$ = V; $A$ = V, $B$ = F; $A$ = F, $B$ = F; $A$ = F, $B$ = V.
::: soluzione
| $A$ | $B$ | $A \wedge \neg B$ | $\neg(A \wedge \neg B)$ | $A \wedge B$ | formula |
|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | F | V | V | **V** |
| V | F | V | F | F | **F** |
| F | F | F | V | F | **V** |
| F | V | F | V | F | **V** |

Le risposte sono V, F, V, V. La formula è falsa solo quando $A$ è vera e $B$ è falsa. Nella prossima lezione vedrai che questa è proprio la tavola di «se $A$ allora $B$».
:::

::: esercizio esame Una formula sempre falsa
Mostra che $(p \vee q) \wedge (\neg p \vee q) \wedge (p \vee \neg q) \wedge (\neg p \vee \neg q)$ è falsa in tutte le righe. Prova a spiegarlo senza la tavola.
::: soluzione
Con la tavola: in ogni riga uno dei quattro pezzi è falso. Con $p$ = V, $q$ = V è falso $\neg p \vee \neg q$; con V, F è falso $\neg p \vee q$; con F, V è falso $p \vee \neg q$; con F, F è falso $p \vee q$.

A parole: i quattro pezzi escludono ciascuno una delle quattro righe. Ogni pezzo è falso solo quando sono false tutte e due le sue parti, e i quattro pezzi coprono le quattro combinazioni. La congiunzione chiede che nessuna riga sia esclusa: impossibile. È la soluzione del libro, che dà questa tavola tutta falsa.
:::

::: esercizio difficile L'«o» esclusivo con «e», «o» e «non»
Trova due formule che usano solo $\wedge$, $\vee$ e $\neg$ e hanno la stessa tavola di $p \oplus q$. Controllale con lo strumento in modalità equivalenza.
::: soluzione
$p \oplus q$ è vera nelle righe ($p$ = V, $q$ = F) e ($p$ = F, $q$ = V).
1. La prima riga è descritta da $p \wedge \neg q$, la seconda da $\neg p \wedge q$. Unendole con «o»: $(p \wedge \neg q) \vee (\neg p \wedge q)$.
2. A parole, «almeno uno, ma non tutti e due»: $(p \vee q) \wedge \neg(p \wedge q)$.

Il metodo della prima formula, una congiunzione per ogni riga vera e poi tutte unite con «o», funziona per qualunque tavola. È lo stesso dei quiz «dalla tabella alla formula» sui circuiti, nella lezione 05.
:::

```widget logica
titolo: Due formule hanno la stessa tavola?
modo: equivalenza
a: p ⊕ q
b: (p ∧ ¬q) ∨ (¬p ∧ q)
```

## Domande di ripasso

::: domanda Che cos'è una proposizione? Fai un esempio e un controesempio.
Una frase che è vera o falsa, ma non tutte e due. «7 è primo» è una proposizione; «chiudi la porta» no, perché è un ordine.
:::

::: domanda Quando è vera $p \wedge q$? E $p \vee q$?
$p \wedge q$ è vera solo quando $p$ e $q$ sono vere tutte e due. $p \vee q$ è vera quando almeno una delle due è vera, anche tutte e due.
:::

::: domanda Che differenza c'è tra $p \vee q$ e $p \oplus q$?
Differiscono solo quando $p$ e $q$ sono vere tutte e due: $p \vee q$ è vera, $p \oplus q$ è falsa. L'«o» esclusivo è vero quando i valori sono diversi.
:::

::: domanda Quante righe ha la tavola di una formula con 3 lettere? Come si ordinano?
$2^3 = 8$ righe. La prima lettera è V nelle prime 4 righe e F nelle altre 4; la seconda alterna a coppie; la terza alterna a ogni riga.
:::

::: domanda In che ordine si calcolano i connettivi senza parentesi?
Prima $\neg$, poi $\wedge$, poi $\vee$. Quindi $\neg p \vee q \wedge r$ si legge $(\neg p) \vee (q \wedge r)$.
:::

::: domanda Come si traduce «né $p$ né $q$»? È uguale a $\neg p \vee \neg q$?
Si traduce $\neg p \wedge \neg q$: tutte e due false. Non è uguale a $\neg p \vee \neg q$, che è vera anche quando una sola è falsa.
:::

::: domanda Che cosa sono una tautologia e una contraddizione?
Una tautologia è una formula vera in tutte le righe della tavola, come $p \vee \neg p$. Una contraddizione è falsa in tutte le righe, come $p \wedge \neg p$.
:::

::: domanda Qual è la negazione di «ho fatto tutti gli esercizi»?
«Almeno un esercizio non l'ho fatto.» Non «non ho fatto nessun esercizio».
:::

## Glossario

```glossario
Proposizione | Una frase che è vera oppure falsa, ma non tutte e due.
Valore di verità | Vero o falso: V o F, nel libro T o F, nei circuiti 1 o 0.
Connettivo | Una parola che costruisce una proposizione da altre: «e», «o», «non», «o esclusivo».
Congiunzione | $p \wedge q$, «$p$ e $q$»: vera solo se tutte e due sono vere.
Disgiunzione | $p \vee q$, «$p$ o $q$»: vera se almeno una è vera; è l'«o» inclusivo.
O esclusivo | $p \oplus q$: vera se esattamente una delle due è vera.
Negazione | $\neg p$, «non $p$»: vera quando $p$ è falsa.
Formula | Un'espressione fatta di lettere, connettivi e parentesi; si chiama anche proposizione composta.
Tavola di verità | La tabella dei valori di una formula in tutte le combinazioni dei valori delle lettere.
Tautologia | Una formula vera in tutte le righe della sua tavola.
Contraddizione | Una formula falsa in tutte le righe della sua tavola.
```

## Checklist

```checklist
- So dire se una frase è una proposizione, e perché domande, ordini e frasi con variabili non lo sono.
- So le tavole di $\wedge$, $\vee$, $\neg$ e $\oplus$, e so collegarle alle porte logiche della lezione 01.
- So che l'«o» della logica è inclusivo, e quando una frase intende quello esclusivo.
- So negare una frase senza confondere il contrario con l'opposto.
- So in che ordine si calcolano $\neg$, $\wedge$ e $\vee$, e metto le parentesi nel dubbio.
- So costruire la tavola di una formula con $2^n$ righe nell'ordine del libro.
- So calcolare il valore di una formula in una riga, partendo da dentro.
- So tradurre «ma», «né… né», «non è vero che» in formule.
- So riconoscere una tautologia e una contraddizione.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 1), §1.2 «Propositions»: definizione di proposizione, congiunzione, disgiunzione, negazione, tavole di verità, ordine dei connettivi; le domande di ripasso e gli esercizi 1–76 con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: i testi degli esercizi riportati qui sono ricostruiti dalle soluzioni, e dove non ero sicuro del testo ho scritto esercizi «nello stesso stile».
- Diario del canale B, lezione del 12/10/2026: «Capitolo 1.2 (Parte 2) Logica Proposizionale. Posposto: capitolo 1.1 su insiemi.»
- F. Cardone, «Alcuni esempi relativi a formalizzazione, connettivi proposizionali e quantificatori» (Moodle del canale A): negazioni, il caso di $2 < 5$.
- Simulazioni d'esame del 2023/24 della pagina d'esame comune: simulazione 1, domande 3, 5 e 6; simulazione 2, la domanda sulle negazioni.
- Le spiegazioni a parole, l'esempio del concerto, i riquadri «Prova tu», la domanda nello stile del quiz, i quiz e gli esercizi senza indicazione sono di questi appunti. Tutte le tavole sono state calcolate con un programma.
