---
corso: FDA
lezione: "11"
data: 2026-10-23
titolo: Quantificatori annidati
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 11 · Libro, parte 2, §1.6
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 11 di Fondamenti dell'Informatica (canale B): funzioni proposizionali con due variabili, le
  quattro combinazioni di «per ogni» ed «esiste», perché l'ordine dei quantificatori conta, il gioco contro
  l'avversario per decidere se una frase è vera, la negazione di frasi con più quantificatori, la traduzione dal
  linguaggio comune, con il quiz 6 della simulazione d'esame 2 del 2023/24, quiz ed esercizi.
lede: >-
  «Ognuno ama qualcuno» e «qualcuno è amato da tutti» usano gli stessi due quantificatori, in un ordine diverso, e
  dicono cose molto diverse. Qui si vede come leggere, decidere e negare le frasi con due o più quantificatori.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 1), §1.6
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 1), §1.6 «Nested Quantifiers», con
  le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; diario del canale B;
  simulazione d'esame 2 del 2023/24, quiz 6; F. Cardone, «Alcuni esempi relativi a formalizzazione, connettivi
  proposizionali e quantificatori» (Moodle del canale A)
appunti_html: appunti/FDA/11_quantificatori_annidati.html
genera_html: true
---

## In breve

- Una funzione proposizionale può avere **due variabili**, come «la ragazza $d$ ha ballato con il ragazzo $u$». Per farne una proposizione servono due quantificatori, uno per variabile.
- Le combinazioni sono quattro: «per ogni… per ogni», «per ogni… esiste», «esiste… per ogni», «esiste… esiste».
- **L'ordine conta.** Sugli interi «per ogni numero ce n'è uno più grande» è vera, «c'è un numero più grande di tutti» è falsa. Nella prima il secondo numero cambia con il primo; nella seconda deve essere uno solo.
- Per decidere se una frase è vera si può **giocare**: l'avversario sceglie i valori delle variabili con «per ogni», tu quelli con «esiste». La frase è vera se vinci comunque giochi l'avversario.
- Per **negare** si scorre la frase da sinistra: ogni «per ogni» diventa «esiste», ogni «esiste» diventa «per ogni», e la negazione finisce sulla frase interna.
- All'esame: il quiz 6 della simulazione 2 del 2023/24 chiede proprio di negare quattro frasi con due quantificatori.

> [!CANALI]
> Nel canale B è la lezione di venerdì 23/10, dalle 11 alle 13. Per il docente è la lezione 12, perché la prima è stata un'introduzione: qui è la 11. Il diario del canale B la annuncia così: «Capitolo 1.6 (Parte 2). Quantificatori annidati». **Ho scritto questi appunti prima della lezione**, sul §1.6 dell'edizione originale di Johnsonbaugh e sulle soluzioni degli esercizi pubblicate sul Moodle del canale A (id 3851, aperto agli ospiti): il libro non è disponibile. L'esempio del ballo viene dalla simulazione d'esame 2 del 2023/24.
>
> Servono le lezioni [09](09_quantificatori.html) e [10](10_quantificatori_e_connettivi.html). Nel canale A gli stessi argomenti sono negli esempi delle note di Felice Cardone, che usano anche i quantificatori «ristretti», come «per ogni $x$ in $A$».

## Frasi con due variabili (libro, §1.6)

Alla festa del corso ci sono tre ragazze, Anna, Bice e Carla, e due ragazzi, Dario ed Ezio. Anna ha ballato con tutti e due, Bice solo con Dario, Carla con nessuno. La frase «$d$ ha ballato con $u$», con $d$ tra le ragazze e $u$ tra i ragazzi, si scrive $B(d, u)$: è una funzione proposizionale con **due** variabili.

```grafico
titolo: Chi ha ballato con chi: una freccia da $d$ a $u$ vuol dire che $B(d, u)$ è vera. Anna ha ballato con tutti e due i ragazzi, Bice solo con Dario, Carla con nessuno.
x: 0 11
y: 0 6
assi: no
griglia: no
proporzioni: libere
cerchio: 2.6 3 2.2 | rosa
cerchio: 8.4 3 2.2 | blu
testo: 2.6 5.65 | rosa | "ragazze"
testo: 8.4 5.65 | blu | "ragazzi"
punto: 3.3 4.3 | rosa
punto: 3.3 3 | rosa
punto: 3.3 1.7 | rosa
testo: 2.1 4.3 | rosa | "Anna"
testo: 2.1 3 | rosa | "Bice"
testo: 2.1 1.7 | rosa | "Carla"
punto: 7.7 3.8 | blu
punto: 7.7 2.2 | blu
testo: 8.95 3.8 | blu | "Dario"
testo: 8.95 2.2 | blu | "Ezio"
freccia: 3.45 4.25 7.55 3.85 | grigio
freccia: 3.45 4.2 7.55 2.3 | grigio
freccia: 3.45 3 7.55 3.75 | grigio
```

Per ottenere una proposizione bisogna fissare **tutte e due** le variabili: o con un valore, come $B(\text{Bice}, \text{Dario})$, che è vera, o con un quantificatore per ciascuna. Il dominio è l'insieme delle coppie (ragazza, ragazzo), il prodotto cartesiano $X \times Y$ della [lezione D03 di Matematica Discreta](../MDAG/D03_prodotto_cartesiano_relazioni.html).

::: prova Quante proposizioni $B(d, u)$ ci sono in tutto, e quante sono vere?
Le coppie sono $3 \cdot 2 = 6$. Le vere sono 3, una per freccia: (Anna, Dario), (Anna, Ezio), (Bice, Dario).
:::

> [!RICORDA]
> - Una funzione proposizionale con due variabili ha come dominio le coppie.
> - Servono due quantificatori, o un valore per ogni variabile, per avere una proposizione.

## Le quattro combinazioni (libro, §1.6)

Con due quantificatori e due variabili ci sono quattro frasi da leggere sul disegno. Ognuna si legge **da sinistra a destra**: il primo quantificatore sceglie la ragazza, il secondo il ragazzo.

| Formula | A parole | Sul disegno |
|---|---|---|
| $\forall d\, \forall u\, B(d, u)$ | ogni ragazza ha ballato con ogni ragazzo | **falsa**: Carla con nessuno |
| $\forall d\, \exists u\, B(d, u)$ | ogni ragazza ha ballato con qualche ragazzo | **falsa**: Carla con nessuno |
| $\exists d\, \forall u\, B(d, u)$ | qualche ragazza ha ballato con ogni ragazzo | **vera**: Anna |
| $\exists d\, \exists u\, B(d, u)$ | qualche ragazza ha ballato con qualche ragazzo | **vera**: per esempio Bice e Dario |

**Come si legge.** Le domande di ripasso 1–4 del §1.6 danno la regola per ciascuna:

- «per ogni… per ogni» è vera se la frase interna è vera per **tutte** le coppie; basta una coppia falsa per renderla falsa;
- «per ogni… esiste» è vera se, per ogni valore della prima variabile, si trova **almeno un** valore della seconda, che può cambiare con la prima;
- «esiste… per ogni» è vera se c'è **un** valore della prima variabile che va bene con **tutti** i valori della seconda;
- «esiste… esiste» è vera se c'è **almeno una** coppia vera.

Due quantificatori dello stesso tipo si possono scambiare: due «per ogni» di seguito, o due «esiste», dicono la stessa cosa in qualunque ordine. Con tipi diversi no, ed è l'argomento della prossima sezione.

::: prova Sul disegno, $\forall u\, \exists d\, B(d, u)$ è vera? Leggila a parole prima di rispondere.
«Ogni ragazzo ha ballato con qualche ragazza». È vera: Dario ha ballato con Anna (e con Bice), Ezio con Anna.
:::

> [!RICORDA]
> - Si legge da sinistra a destra: il primo quantificatore sceglie per primo.
> - Due quantificatori dello stesso tipo si possono scambiare.

## L'ordine conta

Prendi i numeri interi e il confronto «minore o uguale». «Per ogni $x$ esiste $y$ con $x \le y$» è vera: per un intero qualsiasi basta prendere $y = x$. «Esiste $x$ tale che per ogni $y$, $x \le y$» è falsa: direbbe che c'è un intero più piccolo di tutti, e qualunque $x$ si scelga, $y = x - 1$ è più piccolo. È la domanda di ripasso 5 del §1.6.

$$\forall x\, \exists y\,(x \le y) \;\text{ vera}, \qquad \exists x\, \forall y\,(x \le y) \;\text{ falsa}.$$

**Come si legge.** Nella prima frase il secondo numero si sceglie **dopo** il primo, e può cambiare con lui: per 3 si prende 3, per 10 si prende 10. Nella seconda si sceglie **un** numero prima, e quello deve funzionare contro tutti gli altri.

```grafico
titolo: A sinistra «per ogni $x$ esiste $y$»: ogni $x$ ha la sua freccia, e le frecce possono arrivare in punti diversi. A destra «esiste $y$ per ogni $x$»: tutte le frecce arrivano nello stesso $y$.
x: 0 12
y: 0 5
assi: no
griglia: no
proporzioni: libere
testo: 2.9 4.6 | blu | "∀x ∃y"
punto: 1.2 3.4 | blu
punto: 1.2 2.2 | blu
punto: 1.2 1 | blu
punto: 4.6 3.4 | ambra
punto: 4.6 2.2 | ambra
punto: 4.6 1 | ambra
freccia: 1.35 3.4 4.45 3.4 | grigio
freccia: 1.35 2.2 4.45 2.2 | grigio
freccia: 1.35 1 4.45 1 | grigio
testo: 9.1 4.6 | blu | "∃y ∀x"
punto: 7.4 3.4 | blu
punto: 7.4 2.2 | blu
punto: 7.4 1 | blu
punto: 10.8 2.2 | ambra
freccia: 7.55 3.35 10.65 2.3 | grigio
freccia: 7.55 2.2 10.65 2.2 | grigio
freccia: 7.55 1.05 10.65 2.1 | grigio
testo: 1.2 0.3 | blu | "x"
testo: 4.6 0.3 | ambra | "y"
testo: 7.4 0.3 | blu | "x"
testo: 10.8 0.3 | ambra | "y"
```

> [!ESEMPIO] · Ognuno ama qualcuno, qualcuno è amato da tutti
> **Situazione:** $A(x, y)$ = «$x$ ama $y$», sul dominio delle persone.
>
> **Passo 1.** $\forall x\, \exists y\, A(x, y)$: «ognuno ama qualcuno». Ognuno può amare una persona diversa. È la soluzione dell'esercizio 37 del libro.
>
> **Passo 2.** $\exists y\, \forall x\, A(x, y)$: «c'è qualcuno che è amato da tutti». Qui la persona amata è **una sola**, la stessa per tutti.
>
> **Passo 3.** La seconda dice molto di più della prima. Se c'è una persona amata da tutti, allora ognuno ama qualcuno, cioè lei. Il contrario non vale.

> [!TEOREMA] Da «esiste… per ogni» segue «per ogni… esiste»
> Se $\exists x\, \forall y\, P(x, y)$ è vera, allora è vera anche $\forall y\, \exists x\, P(x, y)$. Il viceversa in generale è falso.

**Come si legge.** Se una scelta va bene per tutti, allora ognuno ha una scelta che va bene: la stessa. Se il valore $x_0$ funziona per tutti gli $y$, per ogni $y$ basta prendere proprio $x_0$. Nel viceversa ogni $y$ può avere il suo $x$, e non è sicuro che ce ne sia uno buono per tutti.

::: prova Sui numeri reali, $\forall x\, \exists y\,(x + y = 0)$ è vera? E $\exists y\, \forall x\,(x + y = 0)$?
La prima è vera: per ogni $x$ si prende $y = -x$. La seconda è falsa: un solo $y$ dovrebbe dare 0 sommato a ogni $x$, ma con $x = 0$ serve $y = 0$ e con $x = 1$ serve $y = -1$.
:::

> [!RICORDA]
> - In «per ogni… esiste» il secondo valore può cambiare con il primo; in «esiste… per ogni» è uno solo.
> - «Esiste… per ogni» implica «per ogni… esiste», non il contrario.

## Il gioco contro l'avversario (libro, §1.6)

Per decidere se una frase con molti quantificatori è vera, il libro propone un gioco a due, nella domanda di ripasso 10 del §1.6. Tu vuoi rendere vera la frase interna, l'avversario vuole renderla falsa. Si leggono i quantificatori da sinistra:

- per un **$\forall$** sceglie il valore **l'avversario**, che cercherà il caso peggiore per te;
- per un **$\exists$** scegli **tu**, e puoi guardare i valori già scelti.

Alla fine, se la frase interna è vera vinci tu. La frase quantificata è **vera** se tu hai un modo di vincere **comunque** giochi l'avversario, ed è **falsa** se l'avversario ha un modo di vincere comunque giochi tu.

> [!ESEMPIO] · Tre partite (esercizi 48, 60 e 63 del libro, sui reali)
> **$\forall x\, \forall y\,(x^2 < y + 1)$.** L'avversario sceglie tutti e due: $x = 2$, $y = 0$. Viene $4 < 1$, falso. Vince l'avversario: la frase è **falsa**.
>
> **$\exists x\, \forall y\,(x^2 + y^2 \ge 0)$.** Scegli tu $x = 0$; qualunque $y$ scelga l'avversario, $y^2 \ge 0$. Vinci tu: la frase è **vera**.
>
> **$\forall x\, \exists y\,(x < y \to x^2 < y^2)$.** L'avversario sceglie $x$; tu rispondi con $y = x - 1$. Allora $x < y$ è falsa e la freccia è vera a vuoto. Vinci sempre: la frase è **vera**.

> [!ESEMPIO] · Il dominio decide la partita
> **Situazione:** $\forall x\, \forall y\, \exists z\,\bigl(x < y \to (x < z \wedge z < y)\bigr)$: «tra due numeri diversi ce n'è sempre un terzo».
>
> **Sugli interi** l'avversario sceglie $x = 1$, $y = 2$: nessun intero $z$ sta strettamente tra 1 e 2. La frase è **falsa**; è la soluzione dell'esercizio 72 del libro.
>
> **Sui reali** rispondi sempre con $z = \frac{x + y}{2}$, il punto medio. La frase è **vera**.

::: prova Gioca la partita per $\forall x\, \exists y\,(x = y^3)$ sui reali. Chi vince?
Vinci tu: qualunque $x$ scelga l'avversario, rispondi con $y$ = la radice cubica di $x$, che esiste per ogni numero reale. La frase è vera: «ogni numero reale ha una radice cubica», domanda 22 dell'autoverifica del capitolo 1. Con $y^2$ al posto di $y^3$ l'avversario vincerebbe scegliendo $x = -1$.
:::

> [!RICORDA]
> - Per $\forall$ sceglie l'avversario, per $\exists$ scegli tu, nell'ordine in cui compaiono.
> - La frase è vera se hai sempre una risposta vincente.

## Negare frasi con più quantificatori (libro, §1.6)

La regola della [lezione 09](09_quantificatori.html) si applica una volta per quantificatore. Si parte da sinistra, e la negazione «scivola» verso destra girando ogni quantificatore che attraversa:

$$\neg\,\forall x\, \exists y\, P(x, y) \;\equiv\; \exists x\, \neg\,\exists y\, P(x, y) \;\equiv\; \exists x\, \forall y\, \neg P(x, y).$$

Sono le domande di ripasso 6–9 del §1.6:

| Frase | Negazione |
|---|---|
| $\forall x\, \forall y\, P(x, y)$ | $\exists x\, \exists y\, \neg P(x, y)$ |
| $\forall x\, \exists y\, P(x, y)$ | $\exists x\, \forall y\, \neg P(x, y)$ |
| $\exists x\, \forall y\, P(x, y)$ | $\forall x\, \exists y\, \neg P(x, y)$ |
| $\exists x\, \exists y\, P(x, y)$ | $\forall x\, \forall y\, \neg P(x, y)$ |

**Come si legge.** L'**ordine** delle variabili non cambia: cambia solo il **tipo** di ogni quantificatore. Con tre quantificatori è lo stesso, come nella domanda 23 dell'autoverifica:

$$\neg\,\forall x\, \exists y\, \forall z\, P(x, y, z) \;\equiv\; \exists x\, \forall y\, \exists z\, \neg P(x, y, z).$$

> [!ESEMPIO] · Nessuno conosce tutti
> **Situazione:** $K(x, y)$ = «$x$ conosce $y$».
>
> **Passo 1: la frase.** «Ognuno conosce qualcuno» è $\forall x\, \exists y\, K(x, y)$ (domanda 13 dell'autoverifica).
>
> **Passo 2: la negazione.** $\exists x\, \forall y\, \neg K(x, y)$: «qualcuno non conosce nessuno». È la domanda 12 dell'autoverifica.

> [!TRAPPOLA] Non si spostano le variabili
> Negando, le variabili restano nello stesso ordine: cambia solo il tipo dei quantificatori. Un altro errore è nell'esercizio 95 del libro: girare il primo quantificatore e poi lasciare il $\neg$ davanti al secondo **senza** girare anche lui. Con il $\neg$ in mezzo, il secondo quantificatore va girato quando il $\neg$ lo attraversa.

::: prova Nega spostando il $\neg$ fino in fondo: «per ogni intero $x$ esiste un intero $y$ con $x < y$».
$\neg\,\forall x\, \exists y\,(x < y) \equiv \exists x\, \forall y\,(x \ge y)$: «esiste un intero maggiore o uguale a tutti gli interi». La frase di partenza è vera, quindi la negazione è falsa: non c'è un intero più grande di tutti.
:::

> [!RICORDA]
> - Negando, ogni «per ogni» diventa «esiste» e viceversa; l'ordine resta.
> - Alla fine il $\neg$ sta sulla frase interna.

## Tradurre dal linguaggio comune

Le frasi con due quantificatori sono quelle di tutti i giorni: «ogni studente ha un docente preferito», «c'è un libro che tutti hanno letto». Per tradurle conviene seguire sempre gli stessi passi.

> [!METODO] Tradurre una frase con due quantificatori
> 1. Trova le due variabili e il loro dominio: chi fa e chi riceve.
> 2. Scrivi la funzione proposizionale con due variabili.
> 3. Leggi la frase nell'ordine: chi viene scelto per primo? Quel quantificatore va a sinistra.
> 4. Rileggi la formula ad alta voce e controlla che dica la stessa cosa.

> [!ESEMPIO] · Il ballo
> Con $B(d, u)$ = «la donna $d$ ha ballato con l'uomo $u$»:
>
> - «Una donna ha ballato con ogni uomo»: $\exists d\, \forall u\, B(d, u)$.
> - «Ogni donna ha ballato con qualche uomo»: $\forall d\, \exists u\, B(d, u)$.
> - «Tutti gli uomini hanno ballato con qualche donna»: $\forall u\, \exists d\, B(d, u)$. La variabile scelta per prima è l'uomo, anche se in $B$ compare al secondo posto.

> [!APPROFONDIMENTO] Per Analisi: il limite
> La definizione di limite che si incontra nel secondo semestre è una frase con tre quantificatori annidati (esercizio 99 del libro): $\forall \varepsilon > 0\; \exists \delta > 0\; \forall x\,\bigl(0 < \lvert x - a \rvert < \delta \to \lvert f(x) - L \rvert < \varepsilon\bigr)$. Si legge come un gioco: l'avversario sceglie la precisione $\varepsilon$, tu rispondi con una distanza $\delta$, e poi l'avversario sceglie un $x$ abbastanza vicino ad $a$.

::: prova Con $L(x, y)$ = «$x$ ha letto $y$», $x$ tra gli studenti e $y$ tra i libri, traduci: (a) «c'è un libro che tutti hanno letto»; (b) «ogni studente ha letto qualche libro»; (c) nega la (a).
(a) $\exists y\, \forall x\, L(x, y)$: il libro si sceglie per primo. (b) $\forall x\, \exists y\, L(x, y)$. (c) $\forall y\, \exists x\, \neg L(x, y)$: «per ogni libro c'è uno studente che non l'ha letto».
:::

> [!RICORDA]
> - Il quantificatore della variabile scelta per prima va a sinistra.
> - L'ordine degli argomenti in $B(d, u)$ non cambia: cambia solo l'ordine dei quantificatori.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $P(x, y)$ | «P di x e y» | funzione proposizionale con due variabili | $B(d, u)$ |
| $\forall x\, \exists y$ | «per ogni x esiste y» | per ogni $x$ c'è un $y$, che può dipendere da $x$ | $\forall x\, \exists y\,(x \le y)$ |
| $\exists x\, \forall y$ | «esiste x tale che per ogni y» | un solo $x$ va bene per tutti gli $y$ | $\exists d\, \forall u\, B(d, u)$ |
| $X \times Y$ | «X per Y» | il dominio delle coppie | ragazze × ragazzi |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti.

**Che cosa serve di questa lezione**

1. **Negare frasi con due quantificatori.** È il quiz 6 della simulazione 2 del 2023/24, qui sotto.
2. **Vero o falso su un dominio**, con il gioco: l'ordine dei quantificatori decide la risposta.
3. **Tradurre** frasi come «tutti… qualche…» nell'ordine giusto.

### Una domanda vera, letta insieme

**Simulazione d'esame 2 del 2023/24, quiz 6.** Il testo: «Associare a ciascuna proposizione la sua negazione.» Le proposizioni: «Una donna ha ballato con ogni uomo»; «Qualche donna ha ballato con qualche uomo»; «Tutti gli uomini hanno ballato con qualche donna»; «Ogni donna ha ballato con ogni uomo». Le negazioni si scelgono da un menù, che nella schermata non si vede.

**In pratica chiede:** quattro negazioni, ciascuna con due quantificatori.

> [!ESEMPIO] · la soluzione, passo per passo
> Con $B(d, u)$ = «la donna $d$ ha ballato con l'uomo $u$»:
>
> 1. «Una donna ha ballato con ogni uomo»: $\exists d\, \forall u\, B(d, u)$. Negazione: $\forall d\, \exists u\, \neg B(d, u)$, «ogni donna non ha ballato con qualche uomo», cioè nessuna donna ha ballato con tutti.
> 2. «Qualche donna ha ballato con qualche uomo»: $\exists d\, \exists u\, B(d, u)$. Negazione: $\forall d\, \forall u\, \neg B(d, u)$, «nessuna donna ha ballato con nessun uomo».
> 3. «Tutti gli uomini hanno ballato con qualche donna»: $\forall u\, \exists d\, B(d, u)$. Negazione: $\exists u\, \forall d\, \neg B(d, u)$, «c'è un uomo che non ha ballato con nessuna donna».
> 4. «Ogni donna ha ballato con ogni uomo»: $\forall d\, \forall u\, B(d, u)$. Negazione: $\exists d\, \exists u\, \neg B(d, u)$, «qualche donna non ha ballato con qualche uomo».
>
> Sono le risposte che lo studente ha scritto a mano sulla simulazione. Le ho ricontrollate con un programma su tutti i 64 modi possibili di ballare con 3 donne e 2 uomini.

> [!METODO] Negare una frase con più quantificatori
> 1. Traduci in formula, con un quantificatore per variabile.
> 2. Gira ogni quantificatore, nello stesso ordine.
> 3. Metti il $\neg$ sulla frase interna, e semplificalo se puoi ($\neg(x < y)$ diventa $x \ge y$).
> 4. Rileggi a parole. Se la negazione contiene «nessuno», controlla che venga da un $\forall\,\neg$.

**Errori da evitare**

- Scambiare l'ordine delle variabili negando.
- Pensare che $\forall x\, \exists y$ e $\exists y\, \forall x$ dicano la stessa cosa.
- Girare solo il primo quantificatore.

## Quiz

```quiz
D: Simulazione d'esame 2 del 2023/24, quiz 6. Qual è la negazione di «Una donna ha ballato con ogni uomo»?
+ Ogni donna non ha ballato con qualche uomo
- Nessuna donna ha ballato con nessun uomo
- Una donna non ha ballato con nessun uomo
- Ogni uomo ha ballato con qualche donna
- Qualche donna non ha ballato con qualche uomo
= $\neg\,\exists d\, \forall u\, B(d, u) \equiv \forall d\, \exists u\, \neg B(d, u)$: per ogni donna c'è un uomo con cui non ha ballato. La risposta più insidiosa è l'ultima, $\exists d\, \exists u\, \neg B$: è la negazione di «ogni donna ha ballato con ogni uomo». Le opzioni del menù non si vedono nella schermata: queste sono ricostruite.

D: Simulazione d'esame 2 del 2023/24, quiz 6. Qual è la negazione di «Qualche donna ha ballato con qualche uomo»?
+ Nessuna donna ha ballato con nessun uomo
- Qualche donna non ha ballato con qualche uomo
- Ogni donna non ha ballato con qualche uomo
- Ogni donna ha ballato con ogni uomo
- Qualche donna non ha ballato con nessun uomo
= $\neg\,\exists d\, \exists u\, B \equiv \forall d\, \forall u\, \neg B$: nessuna coppia ha ballato. La risposta più insidiosa è la seconda, che nega solo la frase interna e lascia i due «qualche».

D: Simulazione d'esame 2 del 2023/24, quiz 6. Qual è la negazione di «Tutti gli uomini hanno ballato con qualche donna»?
+ Qualche uomo non ha ballato con nessuna donna
- Nessun uomo ha ballato con qualche donna
- Tutti gli uomini non hanno ballato con qualche donna
- Qualche donna non ha ballato con nessun uomo
- Qualche uomo ha ballato con tutte le donne
= $\neg\,\forall u\, \exists d\, B \equiv \exists u\, \forall d\, \neg B$. La risposta più insidiosa è la quarta, che scambia i ruoli di uomini e donne: la variabile scelta per prima resta l'uomo.

D: Simulazione d'esame 2 del 2023/24, quiz 6. Qual è la negazione di «Ogni donna ha ballato con ogni uomo»?
+ Qualche donna non ha ballato con qualche uomo
- Nessuna donna ha ballato con nessun uomo
- Ogni donna non ha ballato con nessun uomo
- Una donna ha ballato con ogni uomo
- Ogni donna non ha ballato con qualche uomo
= $\neg\,\forall d\, \forall u\, B \equiv \exists d\, \exists u\, \neg B$: basta una coppia che non ha ballato. La risposta più insidiosa è «nessuna donna ha ballato con nessun uomo»: è il contrario estremo, non la negazione.

D: Sugli interi, quale frase è vera?
+ $\forall x\, \exists y\,(x < y)$
- $\exists y\, \forall x\,(x < y)$
- $\exists x\, \forall y\,(x \le y)$
- $\forall x\, \forall y\,(x < y)$
- $\exists x\, \forall y\,(x \ge y)$
= Per ogni intero c'è un intero più grande, per esempio $x + 1$. La risposta più insidiosa è la seconda: direbbe che c'è un intero più grande di tutti. La terza e l'ultima chiedono un minimo o un massimo degli interi, che non esistono.

D: Qual è la negazione di $\forall x\, \exists y\, \forall z\, P(x, y, z)$?
+ $\exists x\, \forall y\, \exists z\, \neg P(x, y, z)$
- $\exists x\, \exists y\, \exists z\, \neg P(x, y, z)$
- $\forall x\, \exists y\, \forall z\, \neg P(x, y, z)$
- $\exists z\, \forall y\, \exists x\, \neg P(x, y, z)$
- $\exists x\, \forall y\, \forall z\, \neg P(x, y, z)$
= Si gira ogni quantificatore nell'ordine: è la domanda 23 dell'autoverifica del libro. La risposta più insidiosa è la quarta, che gira i quantificatori ma inverte anche l'ordine delle variabili.

D: Sui numeri reali, chi vince il gioco per $\exists y\, \forall x\,(x + y = 0)$?
+ L'avversario: per qualunque $y$, sceglie un $x$ diverso da $-y$
- Tu: scegli $y = 0$
- Tu: scegli $y = -x$
- Nessuno, il gioco non finisce
- Dipende dall'ordine in cui si gioca
= Tu scegli $y$ per primo, senza conoscere $x$; poi l'avversario sceglie $x = 1 - y$, e la somma è 1. La risposta più insidiosa è «$y = -x$»: si potrebbe fare in $\forall x\, \exists y$, dove $y$ si sceglie dopo $x$.

D: Se $\exists x\, \forall y\, P(x, y)$ è vera, quale frase è sicuramente vera?
+ $\forall y\, \exists x\, P(x, y)$
- $\forall x\, \forall y\, P(x, y)$
- $\forall x\, \exists y\, P(x, y)$
- $\exists y\, \forall x\, P(x, y)$
- nessuna delle altre
= L'$x_0$ che va bene per tutti gli $y$ fa da testimone per ogni $y$. La risposta più insidiosa è $\forall x\, \exists y$: parla di tutti gli $x$, mentre sappiamo qualcosa solo di $x_0$.
```

## Esercizi

::: esercizio base Riscaldamento: leggere sul disegno
Sul disegno del ballo, di' se sono vere: (a) $\exists u\, \forall d\, B(d, u)$; (b) $\forall u\, \exists d\, B(d, u)$; (c) $\exists d\, \forall u\, \neg B(d, u)$; (d) $\forall d\, \forall u\,(B(d, u) \to d = \text{Anna} \vee d = \text{Bice})$.
::: soluzione
(a) Falsa: nessun ragazzo ha ballato con tutte e tre, Carla non ha ballato. (b) Vera: Dario con Anna, Ezio con Anna. (c) Vera: Carla non ha ballato con nessuno. (d) Vera: tutte le frecce partono da Anna o da Bice.
:::

::: esercizio base Riscaldamento: negare
Nega spostando il $\neg$ fino in fondo: (a) $\forall x\, \forall y\,(x + y = y + x)$; (b) $\exists x\, \forall y\,(x \cdot y = 0)$; (c) $\forall x\, \exists y\,(y^2 = x)$.
::: soluzione
(a) $\exists x\, \exists y\,(x + y \neq y + x)$. (b) $\forall x\, \exists y\,(x \cdot y \neq 0)$. (c) $\exists x\, \forall y\,(y^2 \neq x)$. Sui reali: (a) e (b) sono vere (in (b) basta $x = 0$), quindi le loro negazioni sono false; (c) è falsa, con $x = -1$, quindi la sua negazione è vera.
:::

::: esercizio medio Chi è più alto (esercizi 1–6 del libro)
$T(x, y)$ = «$x$ è più alto di $y$», sul dominio delle persone. Scrivi in parole: (a) $\forall x\, \forall y\, T(x, y)$; (b) $\exists x\, \exists y\, T(x, y)$; (c) nega la (a). Su un gruppo di due persone, Erin più bassa di Garth, quali sono vere?
::: soluzione
(a) «Ognuno è più alto di ognuno»: falsa, Garth non è più alto di sé stesso. (b) «Qualcuno è più alto di qualcuno»: vera, Garth è più alto di Erin. (c) $\exists x\, \exists y\, \neg T(x, y)$: «qualcuno non è più alto di qualcuno», vera. Sono le soluzioni degli esercizi 1, 4, 5 e 6.
:::

::: esercizio medio Il gioco
Sugli interi, decidi con il gioco: (a) $\forall x\, \exists y\,(x + y = 10)$; (b) $\exists y\, \forall x\,(x \cdot y = x)$; (c) $\forall x\, \exists y\,(2y = x)$.
::: soluzione
(a) Vera: a ogni $x$ rispondi con $y = 10 - x$. (b) Vera: scegli $y = 1$, e $x \cdot 1 = x$ per ogni $x$. (c) Falsa: l'avversario sceglie $x = 1$, e nessun intero $y$ dà $2y = 1$. Sui reali la (c) sarebbe vera, con $y = \frac{x}{2}$.
:::

::: esercizio esame Tradurre, decidere, negare
Il dominio di $x$ sono gli studenti del corso, quello di $y$ gli appelli. $S(x, y)$ = «$x$ ha superato l'esame all'appello $y$». (a) Traduci «c'è un appello in cui tutti hanno superato l'esame» e «ogni studente ha superato l'esame in qualche appello». (b) Quale delle due implica l'altra? (c) Nega la seconda e scrivila a parole.
::: soluzione
(a) $\exists y\, \forall x\, S(x, y)$ e $\forall x\, \exists y\, S(x, y)$. (b) La prima implica la seconda: se all'appello $y_0$ hanno passato tutti, ogni studente ha passato in $y_0$. Il contrario no: ognuno può aver passato in un appello diverso. (c) $\exists x\, \forall y\, \neg S(x, y)$: «c'è uno studente che non ha superato l'esame in nessun appello».
:::

## Domande di ripasso

::: domanda Quando è vera $\forall x\, \exists y\, P(x, y)$?
Quando per ogni $x$ si trova almeno un $y$ con $P(x, y)$ vera; il $y$ può cambiare con $x$.
:::

::: domanda Quando è vera $\exists x\, \forall y\, P(x, y)$?
Quando c'è un $x$ con $P(x, y)$ vera per tutti gli $y$.
:::

::: domanda Quale delle due implica l'altra?
$\exists x\, \forall y\, P(x, y)$ implica $\forall y\, \exists x\, P(x, y)$; il contrario no.
:::

::: domanda Come funziona il gioco per decidere una frase quantificata?
Per ogni $\forall$ sceglie l'avversario, per ogni $\exists$ scegli tu, nell'ordine. La frase è vera se hai sempre una scelta vincente.
:::

::: domanda Come si nega $\forall x\, \exists y\, P(x, y)$?
$\exists x\, \forall y\, \neg P(x, y)$: si gira ogni quantificatore e si nega la frase interna, senza cambiare l'ordine.
:::

## Glossario

```glossario
Quantificatori annidati | Più quantificatori uno dopo l'altro, uno per variabile.
Funzione proposizionale con due variabili | P(x, y): diventa una proposizione quando si fissano tutte e due le variabili.
Ordine dei quantificatori | Si legge da sinistra; ∀x ∃y e ∃y ∀x dicono cose diverse.
Gioco dei quantificatori | L'avversario sceglie per ∀, tu per ∃: la frase è vera se vinci sempre.
Negazione di quantificatori annidati | Si gira ogni quantificatore e si nega la frase interna, senza cambiare l'ordine.
```

## Checklist

```checklist
- So leggere una funzione proposizionale con due variabili su un disegno o una tabella.
- So decidere le quattro combinazioni ∀∀, ∀∃, ∃∀, ∃∃.
- So spiegare perché l'ordine dei quantificatori conta, con un esempio.
- So usare il gioco contro l'avversario.
- So negare una frase con due o tre quantificatori.
- So risolvere il quiz 6 della simulazione 2 del 2023/24.
- So tradurre frasi come «tutti… qualche…» mettendo i quantificatori nell'ordine giusto.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 1), §1.6 «Nested Quantifiers»: domande di ripasso 1–10 ed esercizi 1, 4, 5, 6, 37, 48, 60, 63, 72, 95 e 99, più le domande 12, 13, 22 e 23 dell'autoverifica del capitolo 1, con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: le frasi degli esercizi sono riportate come compaiono nelle soluzioni, tradotte.
- Diario del canale B: «Lezione 12. Venerdì 23 Ottobre ore 11-13. Capitolo 1.6 (Parte 2). Quantificatori annidati». Appunti scritti prima della lezione.
- Simulazione d'esame 2 del 2023/24, quiz 6 (negazione di frasi con quantificatori), dalla «Guida degli studenti» del gruppo TSI; le opzioni del menù non si vedono nella schermata.
- F. Cardone, «Alcuni esempi relativi a formalizzazione, connettivi proposizionali e quantificatori» (Moodle del canale A).
- La festa con Anna, Bice, Carla, Dario ed Ezio, i quiz e gli esercizi senza indicazione sono di questi appunti. Le frasi sul ballo le ho controllate con un programma su tutte le 64 relazioni possibili tra 3 donne e 2 uomini.
