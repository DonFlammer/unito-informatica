---
corso: FDA
lezione: "10"
titolo: Quantificatori, «e» e «o», e le regole di inferenza con i quantificatori
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 10 · Libro, parte 2, §1.4–1.5 ed esercizi
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 10 di Fondamenti dell'Informatica (canale B): su un dominio finito «per ogni» è una lunga
  congiunzione ed «esiste» una lunga disgiunzione, le leggi di De Morgan per i quantificatori ricavate da quelle per
  «e» e «o», quando un quantificatore si distribuisce su «e» e su «o», le quattro regole di inferenza con i
  quantificatori, e due serie di domande sì/no su argomentazioni e quantificatori, con quiz ed esercizi.
lede: >-
  Su un dominio di quattro elementi, «per ogni x» vuol dire «per il primo, e per il secondo, e per il terzo, e per il
  quarto». Da questa osservazione vengono le leggi di De Morgan per i quantificatori, la risposta alla domanda «posso
  distribuire il per ogni?» e le regole per ragionare con frasi che dicono «tutti» e «qualcuno».
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 1), §1.4–1.5
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 1), §1.5 «Quantifiers», con le
  domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; diario del canale B
appunti_html: appunti/FDA/10_quantificatori_e_connettivi.html
genera_html: true
---

## In breve

- Su un dominio **finito**, «per ogni» è una lunga congiunzione, con un termine per ogni elemento, ed «esiste» è una lunga disgiunzione.
- Per questo le leggi di De Morgan per i quantificatori sono quelle per «e» e «o», con tanti termini invece di due.
- «Per ogni» si distribuisce su «e», ma **non** su «o»; «esiste» si distribuisce su «o», ma **non** su «e».
- Quattro regole di inferenza permettono di ragionare con i quantificatori: da «tutti» si passa a un caso qualsiasi, e da un caso qualsiasi a «tutti»; da «qualcuno» si passa a un caso, e da un caso a «qualcuno».
- L'esempio classico: «tutti gli uomini sono mortali; Socrate è un uomo; quindi Socrate è mortale» usa la prima regola e poi il modus ponens.
- Due serie di domande sì/no, sulle argomentazioni della [lezione 08](08_argomentazioni_regole_inferenza.html) e sui quantificatori della [lezione 09](09_quantificatori.html), allenano per i quiz.

> [!CANALI]
> Nel canale B è la lezione di giovedì 22/10, dalle 9 alle 11. Per il docente è la lezione 11, perché la prima è stata un'introduzione: qui è la 10. Il diario del canale B la annuncia così: «Analogie tra quantificatori universali e congiunzioni, quantificatori esistenziali e disgiunzioni. Prima ora. quiz Lezione 10 Regole di Inferenza (risposta sì/no). Seconda ora: quiz Lezione 11: Quantificatori». **Ho scritto questi appunti prima della lezione.** I due quiz sono quelli del docente, che non ho: le due sezioni «Allenamento» qui sotto sono domande mie nello stesso formato sì/no, tutte controllate con un programma. Il libro non è disponibile: la parte sul libro viene dal §1.5 dell'edizione originale di Johnsonbaugh e dalle soluzioni degli esercizi pubblicate sul Moodle del canale A (id 3851, aperto agli ospiti).
>
> Servono le lezioni [07](07_condizionali_equivalenza_logica.html) (De Morgan), [08](08_argomentazioni_regole_inferenza.html) (regole di inferenza) e [09](09_quantificatori.html) (quantificatori). Le porte AND e OR della [lezione 01](01_bit_porte_esadecimale.html) danno un'immagine utile per la prima sezione.

## «Per ogni» come una lunga «e» (libro, §1.5)

Prendi un dominio con quattro elementi, i numeri 1, 2, 3 e 4. Dire che $P(x)$ è vera per ogni $x$ vuol dire che è vera per 1, e per 2, e per 3, e per 4. Dire che esiste un $x$ con $P(x)$ vuol dire che è vera per 1, o per 2, o per 3, o per 4. Sono le soluzioni degli esercizi 25 e 28 del libro:

$$\forall x\, P(x) \;\equiv\; P(1) \wedge P(2) \wedge P(3) \wedge P(4), \qquad \exists x\, P(x) \;\equiv\; P(1) \vee P(2) \vee P(3) \vee P(4).$$

**Come si legge.** Il quantificatore universale è una congiunzione con un termine per ogni elemento del dominio; quello esistenziale è una disgiunzione. Il simbolo $\forall$ somiglia a una $\wedge$ «grande», e anche $\exists$ si comporta come una $\vee$ grande.

```grafico
titolo: Con la luce che si accende quando la frase è vera, «per ogni» è un circuito con gli interruttori in serie, che devono essere chiusi tutti; «esiste» è un circuito in parallelo, dove ne basta uno. Sono la porta AND e la porta OR della lezione 01, con un ingresso per ogni elemento del dominio.
x: 0 12
y: 0 6
assi: no
griglia: no
proporzioni: libere
testo: 3.1 5.5 | blu | "∀x P(x): in serie"
segmento: 0.1 3 0.5 3 | grigio
poligono: 0.5 2.55 1.95 2.55 1.95 3.45 0.5 3.45 | blu
testo: 1.22 3 | blu | "P(1)"
segmento: 1.95 3 2.25 3 | grigio
poligono: 2.25 2.55 3.7 2.55 3.7 3.45 2.25 3.45 | blu
testo: 2.97 3 | blu | "P(2)"
segmento: 3.7 3 4 3 | grigio
poligono: 4 2.55 5.45 2.55 5.45 3.45 4 3.45 | blu
testo: 4.72 3 | blu | "P(3)"
segmento: 5.45 3 5.8 3 | grigio
cerchio: 6.1 3 0.3 | accento
testo: 6.1 2.2 | accento | "luce"
testo: 9.2 5.5 | ambra | "∃x P(x): in parallelo"
segmento: 7.2 1.3 7.2 4.7 | grigio
segmento: 7.2 4.3 7.6 4.3 | grigio
segmento: 7.2 3 7.6 3 | grigio
segmento: 7.2 1.7 7.6 1.7 | grigio
poligono: 7.6 3.9 9.05 3.9 9.05 4.7 7.6 4.7 | ambra
testo: 8.32 4.3 | ambra | "P(1)"
poligono: 7.6 2.6 9.05 2.6 9.05 3.4 7.6 3.4 | ambra
testo: 8.32 3 | ambra | "P(2)"
poligono: 7.6 1.3 9.05 1.3 9.05 2.1 7.6 2.1 | ambra
testo: 8.32 1.7 | ambra | "P(3)"
segmento: 9.05 4.3 9.5 4.3 | grigio
segmento: 9.05 3 9.5 3 | grigio
segmento: 9.05 1.7 9.5 1.7 | grigio
segmento: 9.5 1.3 9.5 4.7 | grigio
segmento: 9.5 3 10.9 3 | grigio
cerchio: 11.2 3 0.3 | accento
testo: 11.2 2.2 | accento | "luce"
```

Sui domini infiniti, come gli interi, la congiunzione avrebbe infiniti termini e non si può scrivere: lì i quantificatori servono davvero. L'analogia resta però la guida giusta per capire come si comportano.

::: prova Sul dominio $\{2, 3, 4\}$, scrivi senza quantificatori $\forall x\, P(x)$ ed $\exists x\, \neg P(x)$.
$\forall x\, P(x) \equiv P(2) \wedge P(3) \wedge P(4)$. $\exists x\, \neg P(x) \equiv \neg P(2) \vee \neg P(3) \vee \neg P(4)$.
:::

> [!RICORDA]
> - Su un dominio finito, $\forall$ è una lunga $\wedge$ ed $\exists$ una lunga $\vee$.
> - Sui domini infiniti l'analogia resta, ma la formula non si può più scrivere per esteso.

## De Morgan, due volte la stessa legge

Le leggi di De Morgan della [lezione 07](07_condizionali_equivalenza_logica.html) dicono che la negazione di una «e» è la «o» delle negazioni, e viceversa. Con tre termini:

$$\neg(P(1) \wedge P(2) \wedge P(3)) \;\equiv\; \neg P(1) \vee \neg P(2) \vee \neg P(3).$$

A sinistra c'è la negazione di «$P(x)$ per ogni $x$ del dominio $\{1, 2, 3\}$»; a destra «esiste un $x$ per cui $P(x)$ è falsa». È la prima legge di De Morgan per i quantificatori della [lezione 09](09_quantificatori.html):

$$\neg\,\forall x\, P(x) \;\equiv\; \exists x\,\neg P(x).$$

La seconda viene allo stesso modo dall'altra legge di De Morgan:

$$\neg(P(1) \vee P(2) \vee P(3)) \;\equiv\; \neg P(1) \wedge \neg P(2) \wedge \neg P(3), \quad\text{cioè}\quad \neg\,\exists x\, P(x) \;\equiv\; \forall x\,\neg P(x).$$

**Come si legge.** Negare scambia «e» con «o», e quindi scambia «per ogni» con «esiste». Non sono due regole da ricordare: è la stessa regola vista sui connettivi e sui quantificatori.

::: prova Sul dominio $\{1, 2\}$, verifica con le due leggi di De Morgan per «e» e «o» che $\neg\,\exists x\,\neg P(x) \equiv \forall x\, P(x)$.
$\neg\,\exists x\,\neg P(x) = \neg(\neg P(1) \vee \neg P(2)) \equiv \neg\neg P(1) \wedge \neg\neg P(2) \equiv P(1) \wedge P(2)$, che è $\forall x\, P(x)$.
:::

> [!RICORDA]
> - Le leggi di De Morgan per i quantificatori sono quelle per «e» e «o», con un termine per ogni elemento.
> - Negare scambia $\forall$ con $\exists$, come scambia $\wedge$ con $\vee$.

## Quando un quantificatore si distribuisce

L'analogia risponde a una domanda che torna spesso nei quiz: si può «aprire» un quantificatore davanti a una «e» o a una «o»? Per la «e» e il «per ogni» sì: «tutti sono alti e biondi» dice la stessa cosa di «tutti sono alti, e tutti sono biondi». È solo un rimescolamento di una lunga congiunzione.

| Formula | Si distribuisce? | Perché |
|---|---|---|
| $\forall x\,(P(x) \wedge Q(x))$ | **sì**: $\equiv \forall x\, P(x) \wedge \forall x\, Q(x)$ | è tutta una congiunzione |
| $\exists x\,(P(x) \vee Q(x))$ | **sì**: $\equiv \exists x\, P(x) \vee \exists x\, Q(x)$ | è tutta una disgiunzione |
| $\forall x\,(P(x) \vee Q(x))$ | **no** | ogni $x$ può soddisfare una parte diversa |
| $\exists x\,(P(x) \wedge Q(x))$ | **no** | le due parti possono avere testimoni diversi |

> [!ESEMPIO] · I due «no», sugli interi
> **Per ogni e «o».** «Ogni intero è positivo o non positivo», $\forall x\,(x > 0 \vee x \le 0)$, è vera. Ma «ogni intero è positivo, oppure ogni intero è non positivo» è falsa: tutte e due le parti sono false. L'esercizio 72 del libro mostra lo stesso errore con «tutti gli interi sono positivi o tutti i positivi sono interi».
>
> **Esiste e «e».** «Esiste un intero pari» ed «esiste un intero dispari» sono vere tutte e due. Ma «esiste un intero pari e dispari» è falsa: i testimoni delle due parti sono numeri diversi.

```grafico
titolo: Il dominio diviso in due: a sinistra gli interi positivi, a destra gli altri. Ogni intero sta in una delle due parti, quindi «ogni x è positivo o non positivo» è vera. Ma nessuna delle due parti copre tutto il dominio: «tutti positivi, oppure tutti non positivi» è falsa.
x: 0 10
y: 0 4
assi: no
griglia: no
proporzioni: libere
poligono: 0.4 0.4 5 0.4 5 3.4 0.4 3.4 | blu
poligono: 5 0.4 9.6 0.4 9.6 3.4 5 3.4 | ambra
testo: 2.7 2.6 | blu | "x > 0"
testo: 7.3 2.6 | ambra | "x ≤ 0"
testo: 2.7 1.4 | blu | "1, 2, 3, …"
testo: 7.3 1.4 | ambra | "0, −1, −2, …"
testo: 5 3.75 | grigio | "gli interi"
```

In un verso le due formule restano comunque collegate. Se ogni $x$ ha $P$, allora ogni $x$ ha $P$ o $Q$: da $\forall x\, P(x) \vee \forall x\, Q(x)$ segue $\forall x\,(P(x) \vee Q(x))$, ma non il contrario. E da $\exists x\,(P(x) \wedge Q(x))$ seguono $\exists x\, P(x)$ e $\exists x\, Q(x)$, ma non il contrario.

::: prova Sul dominio delle persone, «esiste qualcuno che parla inglese e francese» e «esiste qualcuno che parla inglese, ed esiste qualcuno che parla francese»: quale segue dall'altra?
Dalla prima segue la seconda: chi parla le due lingue fa da testimone per tutte e due le parti. Il contrario no: chi parla inglese e chi parla francese possono essere due persone diverse.
:::

> [!RICORDA]
> - $\forall$ si distribuisce su $\wedge$, $\exists$ su $\vee$.
> - $\forall$ non si distribuisce su $\vee$, ed $\exists$ non si distribuisce su $\wedge$.

## Ragionare con i quantificatori: quattro regole (libro, §1.5)

L'argomentazione più famosa della logica è questa: «Tutti gli uomini sono mortali. Socrate è un uomo. Quindi Socrate è mortale.» Le regole della [lezione 08](08_argomentazioni_regole_inferenza.html) non bastano a dire che è valida, perché la prima premessa parla di **tutti**. Serve un passo in più: da «per ogni $x$, se $x$ è un uomo allora è mortale» si ricava il caso particolare «se Socrate è un uomo, allora Socrate è mortale». Poi basta il modus ponens.

Il libro raccoglie quattro regole di questo tipo, nelle domande di ripasso 11–14 del §1.5. $D$ è il dominio.

| Regola | Premessa | Conclusione | A parole |
|---|---|---|---|
| **particolarizzazione universale** | $\forall x\, P(x)$ | $P(d)$, per ogni $d$ in $D$ | ciò che vale per tutti vale per ciascuno |
| **generalizzazione universale** | $P(d)$ per ogni $d$ in $D$ | $\forall x\, P(x)$ | se vale per un elemento **qualsiasi**, vale per tutti |
| **particolarizzazione esistenziale** | $\exists x\, P(x)$ | $P(d)$ per **qualche** $d$ in $D$ | c'è un testimone, anche se non si sa quale |
| **generalizzazione esistenziale** | $P(d)$ per qualche $d$ in $D$ | $\exists x\, P(x)$ | un esempio basta per dire «esiste» |

**Come si legge.** In inglese le regole si chiamano *universal instantiation*, *universal generalization*, *existential instantiation* ed *existential generalization*; in italiano si trovano anche «istanziazione» al posto di «particolarizzazione».

> [!TRAPPOLA] Le due regole delicate
> - **Generalizzazione universale.** Vale solo se $d$ è davvero **qualsiasi**: il ragionamento non deve usare niente di particolare su $d$. Da «2 è pari» non segue «ogni numero è pari».
> - **Particolarizzazione esistenziale.** Dà un testimone $d$, ma non si sceglie quale: non si può decidere che sia un elemento già nominato. Da «qualcuno ha rubato la torta» non segue «Bruno ha rubato la torta».

> [!ESEMPIO] · La calcolatrice di Ralphie (esercizio 76 del libro)
> **Situazione:** «Ogni studente del corso ha una calcolatrice grafica. Chi ha una calcolatrice grafica capisce la trigonometria. Ralphie è uno studente del corso. Quindi Ralphie capisce la trigonometria.» Il dominio sono gli studenti del corso.
>
> **Passo 1: le formule.** $P(x)$ = «$x$ ha una calcolatrice grafica», $Q(x)$ = «$x$ capisce la trigonometria». Premesse: $\forall x\, P(x)$ e $\forall x\,(P(x) \to Q(x))$.
>
> **Passo 2: particolarizzazione universale**, due volte, con $d$ = Ralphie: $P(\text{Ralphie})$ e $P(\text{Ralphie}) \to Q(\text{Ralphie})$.
>
> **Passo 3: modus ponens.** $Q(\text{Ralphie})$: Ralphie capisce la trigonometria. L'argomentazione è valida.

::: prova Che regole servono per «Tutti gli iscritti hanno la matricola. Anna è iscritta. Quindi qualcuno ha la matricola»?
Con $I(x)$ = «$x$ è iscritto» e $M(x)$ = «$x$ ha la matricola», la premessa è $\forall x\,(I(x) \to M(x))$. Particolarizzazione universale con $d$ = Anna: $I(\text{Anna}) \to M(\text{Anna})$. Modus ponens con $I(\text{Anna})$: $M(\text{Anna})$. Generalizzazione esistenziale: $\exists x\, M(x)$.
:::

> [!RICORDA]
> - Particolarizzazione universale: da «tutti» a un caso; generalizzazione esistenziale: da un caso a «qualcuno».
> - La generalizzazione universale chiede un elemento qualsiasi; la particolarizzazione esistenziale non sceglie il testimone.

## Allenamento: regole di inferenza, sì o no

Nella prima ora il docente fa un quiz sulle regole di inferenza con risposta sì o no. Il quiz del docente non l'ho visto. Le domande qui sotto sono mie, nello stesso formato, e ognuna è controllata su tutte le righe della tavola. Per ognuna: l'argomentazione è valida? Se no, il controesempio.

| | Argomentazione | Valida? | Perché |
|:-:|---|:-:|---|
| a | $p \to q,\ q \to r \;/\; \therefore p \to r$ | sì | sillogismo ipotetico |
| b | $p \vee q,\ p \;/\; \therefore \neg q$ | no | l'«o» è inclusivo: $p$ = V, $q$ = V |
| c | $p \to q,\ \neg p \;/\; \therefore \neg q$ | no | negare l'antecedente: $p$ = F, $q$ = V |
| d | $\neg(p \wedge q),\ p \;/\; \therefore \neg q$ | sì | De Morgan, poi sillogismo disgiuntivo |
| e | $p \to q,\ p \to r \;/\; \therefore p \to (q \wedge r)$ | sì | se $p$ è vera, lo sono $q$ e $r$ |
| f | $p \to r,\ q \to r \;/\; \therefore (p \vee q) \to r$ | sì | ragionamento per casi |
| g | $p \to (q \vee r),\ p \;/\; \therefore q$ | no | $p$ = V, $q$ = F, $r$ = V |
| h | $p \to q \;/\; \therefore q \to p$ | no | l'inversa: $p$ = F, $q$ = V |

**Come si legge.** Per un «no» basta una riga con le premesse vere e la conclusione falsa. Per un «sì» bisogna sapere che quella riga non c'è: o perché è una regola nota, o perché provando a costruirla si arriva a una contraddizione.

::: prova Sì o no: (1) $p \to q \;/\; \therefore \neg q \to \neg p$; (2) $(p \vee q) \to r \;/\; \therefore p \to r$; (3) $p \wedge q \;/\; \therefore p \vee r$.
(1) Sì: è la contronominale, equivalente alla premessa (lezione 07). (2) Sì: se $p$ è vera, anche $p \vee q$ lo è, e quindi $r$. (3) Sì: semplificazione, poi addizione.
:::

> [!RICORDA]
> - Per il «no» basta un controesempio; per il «sì» bisogna escluderli tutti.
> - Gli errori che tornano sempre: l'«o» letto come esclusivo, negare l'antecedente, affermare il conseguente, scambiare una freccia con la sua inversa.

## Allenamento: quantificatori, sì o no

Nella seconda ora il quiz è sui quantificatori. Anche qui le domande sono mie, nel formato sì/no, controllate con un programma sugli interi da −20 a 20 e, dove serve, con un ragionamento.

| | Domanda (dominio: gli interi, salvo dove indicato) | Risposta | Perché |
|:-:|---|:-:|---|
| a | $\forall x\,(x^2 \ge 0)$ è vera? | sì | un quadrato non è mai negativo |
| b | $\exists x\,(x^2 = 3)$ è vera? | no | $1^2 = 1$, $2^2 = 4$: 3 non è un quadrato |
| c | $\forall x\,(x \text{ pari} \to x^2 \text{ pari})$ è vera? | sì | $(2k)^2 = 4k^2$ |
| d | $\exists x\,(5 < x \wedge x < 6)$ è vera? E sui reali? | no; sì | tra 5 e 6 non ci sono interi; 5,5 è un reale |
| e | $\neg\,\forall x\,(x > 0)$ equivale a $\exists x\,(x \le 0)$? | sì | De Morgan, e il contrario di $>$ è $\le$ |
| f | $\forall x\,(P(x) \vee Q(x))$ equivale a $\forall x\, P(x) \vee \forall x\, Q(x)$? | no | positivi e non positivi |
| g | Da $\forall x\, P(x)$ segue $\exists x\, P(x)$? | sì | il dominio non è vuoto: un suo elemento fa da testimone |
| h | Da $\exists x\, P(x)$ segue $\forall x\, P(x)$? | no | un testimone non dice niente sugli altri |

> [!NOTA] Il dominio vuoto
> La risposta (g) usa il fatto che il dominio ha almeno un elemento, come in tutti gli esempi del libro. Su un dominio vuoto ogni «per ogni» sarebbe vero, perché non ci sono controesempi, e ogni «esiste» falso.

::: prova Sì o no, sugli interi: (1) $\exists x\,(x^2 = x)$; (2) $\forall x\,(x^2 > x)$; (3) $\neg\,\exists x\,(x < x)$.
(1) Sì: $x = 0$ e $x = 1$. (2) No: controesempio $x = 0$. (3) Sì: nessun numero è minore di sé stesso, quindi $\exists x\,(x < x)$ è falsa e la sua negazione è vera.
:::

> [!RICORDA]
> - Per un $\forall$ cerca prima un controesempio, per un $\exists$ un testimone.
> - Guarda sempre il dominio: interi e reali danno risposte diverse.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\forall x\, P(x)$ | «per ogni x, P di x» | su un dominio finito, $P(d_1) \wedge \dots \wedge P(d_n)$ | $P(1) \wedge P(2)$ su $\{1, 2\}$ |
| $\exists x\, P(x)$ | «esiste x tale per cui P di x» | su un dominio finito, $P(d_1) \vee \dots \vee P(d_n)$ | $P(1) \vee P(2)$ su $\{1, 2\}$ |
| $P(d)$ | «P di d» | la frase per un elemento $d$ del dominio | $P(\text{Socrate})$ |
| $\therefore$ | «quindi» | introduce la conclusione | |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti.

**Che cosa serve di questa lezione**

1. **Domande sì/no** su argomentazioni e su frasi con quantificatori: lo stesso formato dei quiz di questa lezione. Nella simulazione 2 del 2023/24 c'è un quiz sulla negazione di frasi con quantificatori (lezione 11).
2. **De Morgan e la distribuzione**: «posso spezzare il per ogni?» si risolve con la tabella della sezione sulla distribuzione.
3. **Le regole con i quantificatori** servono per le dimostrazioni del capitolo 2 del libro, che arriva dopo.

### Una domanda nello stile del quiz, letta insieme

**Il testo**: «Sul dominio degli interi, quali di queste equivalenze sono vere? (a) $\forall x\,(P(x) \wedge Q(x)) \equiv \forall x\, P(x) \wedge \forall x\, Q(x)$; (b) $\exists x\,(P(x) \wedge Q(x)) \equiv \exists x\, P(x) \wedge \exists x\, Q(x)$; (c) $\neg\,\exists x\, P(x) \equiv \forall x\, \neg P(x)$; (d) $\forall x\,(P(x) \vee Q(x)) \equiv \forall x\, P(x) \vee \forall x\, Q(x)$.»

**In pratica chiede:** per ognuna, sì o no; per i «no», un esempio che le separa.

> [!ESEMPIO] · la soluzione, passo per passo
> - (a) **Sì**: è una lunga congiunzione rimescolata.
> - (b) **No**: con $P$ = «pari» e $Q$ = «dispari» la destra è vera e la sinistra falsa.
> - (c) **Sì**: è De Morgan per i quantificatori.
> - (d) **No**: con $P$ = «positivo» e $Q$ = «non positivo» la sinistra è vera e la destra falsa.
>
> Le due risposte «no» hanno la stessa causa: le due parti della frase hanno bisogno di elementi diversi del dominio.

> [!METODO] Le domande sì/no
> 1. **Argomentazioni**: riconosci la regola o l'errore classico; altrimenti cerca un controesempio rendendo falsa la conclusione.
> 2. **Quantificatori**: leggi il dominio; cerca un controesempio per $\forall$, un testimone per $\exists$.
> 3. **Equivalenze con i quantificatori**: pensa al dominio come a pochi elementi e scrivi la lunga $\wedge$ o $\vee$.

**Errori da evitare**

- Distribuire $\forall$ su $\vee$, o $\exists$ su $\wedge$.
- Usare la generalizzazione universale partendo da un caso particolare.
- Dare un nome già usato al testimone di un $\exists$.

## Quiz

```quiz
D: Sul dominio $\{1, 2, 3\}$, a che cosa equivale $\exists x\, P(x)$?
+ $P(1) \vee P(2) \vee P(3)$
- $P(1) \wedge P(2) \wedge P(3)$
- $P(1)$
- $\neg P(1) \vee \neg P(2) \vee \neg P(3)$
- $P(1) \to P(2) \to P(3)$
= «Esiste» vuol dire che almeno una delle tre è vera: una disgiunzione. La risposta più insidiosa è la congiunzione, che corrisponde a $\forall x\, P(x)$. La quarta è $\exists x\,\neg P(x)$.

D: Quale equivalenza è **sempre** vera?
+ $\forall x\,(P(x) \wedge Q(x)) \equiv \forall x\, P(x) \wedge \forall x\, Q(x)$
- $\forall x\,(P(x) \vee Q(x)) \equiv \forall x\, P(x) \vee \forall x\, Q(x)$
- $\exists x\,(P(x) \wedge Q(x)) \equiv \exists x\, P(x) \wedge \exists x\, Q(x)$
- $\neg\,\forall x\, P(x) \equiv \forall x\, \neg P(x)$
- $\exists x\, P(x) \equiv \forall x\, P(x)$
= $\forall$ si distribuisce su $\wedge$. La risposta più insidiosa è la terza: «esiste un pari ed esiste un dispari» è vera, «esiste un numero pari e dispari» no. La quarta confonde «non tutti» con «nessuno».

D: Da $\forall x\,(U(x) \to M(x))$ e $U(\text{Socrate})$, quali regole danno $M(\text{Socrate})$?
+ particolarizzazione universale, poi modus ponens
- generalizzazione universale, poi modus ponens
- particolarizzazione esistenziale, poi modus tollens
- generalizzazione esistenziale
- solo il modus ponens
= Prima si passa da «tutti» al caso di Socrate: $U(\text{Socrate}) \to M(\text{Socrate})$. Poi il modus ponens. La risposta più insidiosa è «solo il modus ponens»: senza il primo passo la freccia è dentro un quantificatore, e il modus ponens non si applica.

D: Quale passaggio è **sbagliato**?
+ da $P(2)$ dedurre $\forall x\, P(x)$
- da $P(2)$ dedurre $\exists x\, P(x)$
- da $\forall x\, P(x)$ dedurre $P(2)$
- da $\forall x\, P(x)$ dedurre $\exists x\, P(x)$, su un dominio non vuoto
- da $\neg\,\exists x\, P(x)$ dedurre $\neg P(2)$
= La generalizzazione universale chiede un elemento qualsiasi, non il 2. La risposta più insidiosa è l'ultima, che è corretta: $\neg\,\exists x\, P(x)$ equivale a $\forall x\,\neg P(x)$, e da lì si passa al caso del 2.

D: L'argomentazione $p \vee q,\ p \;/\; \therefore \neg q$ è valida?
+ No: con $p$ e $q$ vere le premesse sono vere e la conclusione falsa
- Sì: è il sillogismo disgiuntivo
- Sì: è la semplificazione
- No: con $p$ falsa e $q$ vera
- Sì, se l'«o» è inclusivo
= L'«o» della logica è inclusivo: $p$ vera non esclude $q$ vera. La risposta più insidiosa è il sillogismo disgiuntivo, che parte da $\neg p$, non da $p$. Con $p$ falsa la seconda premessa è falsa, quindi la riga non è un controesempio.

D: Sugli interi, $\exists x\,(5 < x \wedge x < 6)$ è vera?
+ No: tra 5 e 6 non c'è nessun intero
- Sì: $x = 5{,}5$
- Sì: $x = 5$
- Sì: $x = 6$
- Non si può dire senza un programma
= Il dominio sono gli interi, e 5,5 non lo è. Sui reali la frase sarebbe vera. La risposta più insidiosa è 5,5, che ignora il dominio; 5 e 6 non rispettano le disuguaglianze strette.

D: Quante delle argomentazioni seguenti sono valide? $p \to q,\ q \to r \;/\; \therefore p \to r$; $p \to q \;/\; \therefore q \to p$; $p \to r,\ q \to r \;/\; \therefore (p \vee q) \to r$; $p \to q,\ \neg p \;/\; \therefore \neg q$.
N: 2
= La prima (sillogismo ipotetico) e la terza (ragionamento per casi). La seconda è l'inversa e la quarta nega l'antecedente: tutte e due hanno il controesempio $p$ = F, $q$ = V.

D: Da $\exists x\,(P(x) \wedge Q(x))$ che cosa segue?
+ $\exists x\, P(x) \wedge \exists x\, Q(x)$
- $\forall x\, P(x)$
- $\forall x\,(P(x) \to Q(x))$
- $\exists x\, P(x) \wedge \forall x\, Q(x)$
- niente
= Il testimone della congiunzione è testimone di tutte e due le parti. Il viceversa non vale. La risposta più insidiosa è $\forall x\,(P(x) \to Q(x))$: un solo elemento con $P$ e $Q$ non dice niente degli altri.
```

## Esercizi

::: esercizio base Riscaldamento: per esteso
Sul dominio $\{1, 2, 3, 4\}$ scrivi senza quantificatori: (a) $\forall x\, P(x)$; (b) $\exists x\, P(x)$; (c) $\neg\,\forall x\, P(x)$, prima con De Morgan per «e» e poi con De Morgan per i quantificatori.
::: soluzione
(a) $P(1) \wedge P(2) \wedge P(3) \wedge P(4)$ (esercizio 25 del libro). (b) $P(1) \vee P(2) \vee P(3) \vee P(4)$ (esercizio 28). (c) $\neg P(1) \vee \neg P(2) \vee \neg P(3) \vee \neg P(4)$, che è $\exists x\, \neg P(x)$: le due strade danno lo stesso risultato.
:::

::: esercizio base Riscaldamento: distribuire
Di' se sono equivalenti, e dai un controesempio quando non lo sono. Dominio: le persone. (a) «Tutti sanno nuotare e sciare» e «tutti sanno nuotare, e tutti sanno sciare». (b) «Qualcuno è medico o avvocato» e «qualcuno è medico, o qualcuno è avvocato». (c) «Ognuno è maggiorenne o minorenne» e «tutti sono maggiorenni, o tutti sono minorenni».
::: soluzione
(a) Sì: $\forall$ si distribuisce su $\wedge$. (b) Sì: $\exists$ si distribuisce su $\vee$. (c) No: la prima è vera, la seconda falsa appena ci sono almeno un maggiorenne e almeno un minorenne.
:::

::: esercizio medio Le regole con i quantificatori
Scrivi con le formule e mostra che è valida, dicendo le regole usate: «Ogni numero divisibile per 4 è pari. 12 è divisibile per 4. Quindi esiste un numero pari.»
::: soluzione
Con $Q(x)$ = «$x$ è divisibile per 4» e $P(x)$ = «$x$ è pari»: premesse $\forall x\,(Q(x) \to P(x))$ e $Q(12)$. Particolarizzazione universale con 12: $Q(12) \to P(12)$. Modus ponens: $P(12)$. Generalizzazione esistenziale: $\exists x\, P(x)$.
:::

::: esercizio medio Dove sbaglia?
Trova il passaggio sbagliato: «Qualche studente ha preso 30. Qualche studente è di Torino. Quindi qualche studente di Torino ha preso 30.»
::: soluzione
Con la particolarizzazione esistenziale, la prima premessa dà uno studente $a$ che ha preso 30, la seconda uno studente $b$ di Torino. L'errore è supporre che $a$ e $b$ siano la stessa persona: ogni particolarizzazione esistenziale dà un testimone nuovo. È il caso di $\exists$ che non si distribuisce su $\wedge$, letto al contrario.
:::

::: esercizio esame Sì o no
Rispondi sì o no e giustifica in una riga. (a) $p \to q,\ \neg q \;/\; \therefore \neg p$ è valida? (b) $\neg(p \to q) \equiv p \wedge \neg q$? (c) Sui reali, $\exists x\,(x^2 = 4)$ è vera? (d) $\neg\,\forall x\,(P(x) \to Q(x)) \equiv \exists x\,(P(x) \wedge \neg Q(x))$? (e) Da $\forall x\,(P(x) \vee Q(x))$ e $\neg P(3)$ segue $Q(3)$?
::: soluzione
(a) Sì: modus tollens. (b) Sì: la freccia è falsa solo con ipotesi vera e conclusione falsa (lezione 07). (c) Sì: testimoni 2 e −2. (d) Sì: De Morgan per i quantificatori, poi la regola (b). (e) Sì: particolarizzazione universale con 3, poi sillogismo disgiuntivo.
:::

## Domande di ripasso

::: domanda Su un dominio finito, a che cosa corrispondono «per ogni» ed «esiste»?
«Per ogni» a una congiunzione con un termine per ogni elemento, «esiste» a una disgiunzione.
:::

::: domanda Da dove vengono le leggi di De Morgan per i quantificatori?
Dalle leggi di De Morgan per «e» e «o», applicate alla lunga congiunzione o disgiunzione.
:::

::: domanda Su quale connettivo si distribuisce il «per ogni»? E l'«esiste»?
Il «per ogni» sulla congiunzione, l'«esiste» sulla disgiunzione. Negli altri due casi no.
:::

::: domanda Che cosa dice la particolarizzazione universale?
Che da $\forall x\, P(x)$ segue $P(d)$ per ogni elemento $d$ del dominio.
:::

::: domanda Quando si può usare la generalizzazione universale?
Quando $P(d)$ è stata dimostrata per un $d$ qualsiasi, senza usare niente di particolare su $d$.
:::

## Glossario

```glossario
Particolarizzazione universale | Da ∀x P(x) segue P(d) per ogni d del dominio.
Generalizzazione universale | Da P(d) per un d qualsiasi segue ∀x P(x).
Particolarizzazione esistenziale | Da ∃x P(x) segue P(d) per qualche d, che non si sceglie.
Generalizzazione esistenziale | Da P(d) per qualche d segue ∃x P(x).
Distributività | ∀ si distribuisce su ∧, ∃ su ∨; negli altri due casi no.
```

## Checklist

```checklist
- So scrivere ∀ ed ∃ come congiunzione e disgiunzione su un dominio finito.
- So ricavare le leggi di De Morgan per i quantificatori da quelle per «e» e «o».
- So quando un quantificatore si distribuisce e quando no, con un controesempio.
- So le quattro regole di inferenza con i quantificatori e quando usarle.
- So risolvere l'argomentazione di Socrate e quella di Ralphie.
- So rispondere sì o no a domande su argomentazioni e quantificatori, con un controesempio per i «no».
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 1), §1.5 «Quantifiers»: domande di ripasso 11–14 (regole di inferenza con i quantificatori) ed esercizi 25, 28, 72 e 76, con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: le frasi degli esercizi sono riportate come compaiono nelle soluzioni, tradotte.
- Diario del canale B: «Lezione 11. Giovedì 22 Ottobre ore 09-11. Analogie tra quantificatori universali e congiunzioni, quantificatori esistenziali e disgiunzioni. Prima ora. quiz Lezione 10 Regole di Inferenza (risposta sì/no). Seconda ora: quiz Lezione 11: Quantificatori». Appunti scritti prima della lezione.
- Le domande delle due sezioni «Allenamento», i quiz e gli esercizi senza indicazione sono di questi appunti. Le argomentazioni le ho controllate con un programma su tutte le righe della tavola, le frasi sugli interi su tutti gli interi da −20 a 20, le distribuzioni su tutte le coppie di predicati di un dominio di tre elementi.
