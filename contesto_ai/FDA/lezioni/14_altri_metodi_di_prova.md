---
corso: FDA
lezione: "14"
titolo: Altri metodi di prova e il paradosso del bevitore
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 14 · Libro, parte 2, §2.1–2.2
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 14 di Fondamenti dell'Informatica (canale B): la dimostrazione per assurdo (radice di 2
  irrazionale, principio dei piccioni), la dimostrazione per contrapposizione, la dimostrazione per casi, le
  dimostrazioni di equivalenza, le dimostrazioni di esistenza costruttive e non costruttive, il paradosso del bevitore
  con la sua dimostrazione per casi, ed esercizi.
lede: >-
  «In ogni bar c'è qualcuno per cui vale questo: se beve lui, bevono tutti.» Sembra falso, ed è un teorema. Per dimostrarlo
  servono due metodi nuovi: ragionare per casi, e dimostrare che qualcosa esiste senza dire chi è. Prima, il metodo
  per assurdo e quello per contrapposizione.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 2), §2.1–2.2
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 2), §2.2 «More Methods of Proof», con
  le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; F. Cardone, «Tecniche di
  dimostrazione» (Moodle del canale A); diario del canale B
appunti_html: appunti/FDA/14_altri_metodi_di_prova.html
genera_html: true
---

## In breve

- **Per assurdo**: si suppone vera l'ipotesi e **falsa** la conclusione, e si arriva a una contraddizione, cioè a una frase e alla sua negazione. Allora la conclusione non può essere falsa.
- **Per contrapposizione**: invece della freccia si dimostra in modo diretto la sua contronominale, con le due parti negate e scambiate, che è equivalente.
- **Per casi**: se l'ipotesi è un «o», si dimostra la conclusione in ogni caso separatamente.
- Per dimostrare che più frasi sono **equivalenti** basta un giro di frecce: dalla prima alla seconda, dalla seconda alla terza, dalla terza alla prima.
- Una dimostrazione di **esistenza** è **costruttiva** se mostra l'elemento, **non costruttiva** se dimostra che esiste senza dire quale sia.
- **Il paradosso del bevitore**: in ogni bar non vuoto c'è una persona con questa proprietà: se lei beve, bevono tutti. Si dimostra per casi, ed è non costruttiva.
- Il «paradosso» viene dal leggere il «se… allora» come causa ed effetto: la freccia della logica dice solo che non succede «lei beve e qualcuno no».

> [!CANALI]
> Nel canale B è la lezione di venerdì 30/10, dalle 11 alle 13. Per il docente è la lezione 15, perché la prima è stata un'introduzione: qui è la 14. Il diario del canale B la annuncia così: «Fine Capitolo 2.1 (Metodi di Prova). Il paradosso del bevitore. Esercizi». **Ho scritto questi appunti prima della lezione.** Nell'edizione originale di Johnsonbaugh, che uso perché il libro del corso non è disponibile, i metodi per assurdo, per contrapposizione, per casi e di esistenza sono nel §2.2 «More Methods of Proof»: li metto qui perché il paradosso del bevitore si dimostra proprio con questi metodi. Se il docente li fa in un'altra lezione, sposto le sezioni. Domande di ripasso e soluzioni degli esercizi sono quelle pubblicate sul Moodle del canale A (id 3851, aperto agli ospiti), dove ci sono anche le note «Tecniche di dimostrazione» di Felice Cardone.
>
> Servono la [lezione 13](13_dimostrazioni_dirette_controesempi.html) (dimostrazione diretta, pari e dispari), la [07](07_condizionali_equivalenza_logica.html) (freccia e contronominale) e la [11](11_quantificatori_annidati.html) (il gioco con i quantificatori).

## Per assurdo (libro, §2.2)

Un detective sospetta il maggiordomo e ragiona così: «Se fosse innocente, sarebbe stato in giardino alle dieci. Ma alle dieci il giardino era chiuso a chiave, e lui non ha la chiave: non poteva esserci. Quindi non è innocente.» Ha supposto il contrario di quello che vuole dimostrare ed è arrivato a una cosa impossibile.

Una **dimostrazione per assurdo** di «se $P$ allora $Q$» suppone vera $P$ e **falsa** $Q$, e da queste ipotesi ricava una **contraddizione**: una frase e la sua negazione insieme. È la domanda di ripasso 1 del §2.2; il libro la chiama anche **dimostrazione indiretta**.

> [!ESEMPIO] · Una somma almeno 2 (Cardone, esempio 2)
> **La frase.** Per tutti i reali $x$ e $y$, se $x + y \ge 2$, allora $x \ge 1$ oppure $y \ge 1$.
>
> **Passo 1: suppongo l'ipotesi e il contrario della tesi.** La negazione di «$x \ge 1$ oppure $y \ge 1$» è, con De Morgan, «$x < 1$ e $y < 1$». Suppongo quindi $x + y \ge 2$, $x < 1$ e $y < 1$.
>
> **Passo 2: ricavo una contraddizione.** Sommando le ultime due, $x + y < 1 + 1 = 2$. Ma l'ipotesi dice $x + y \ge 2$.
>
> **Passo 3.** Ho sia $x + y \ge 2$ sia $x + y < 2$: è impossibile. Quindi la tesi non può essere falsa.

```grafico
titolo: La forma di una dimostrazione per assurdo. Si aggiunge alle ipotesi il contrario della tesi, nel riquadro rosa; quando dentro si trovano una frase e la sua negazione, il riquadro si chiude e fuori resta la tesi.
x: 0 12
y: 0.4 6.6
assi: no
griglia: no
proporzioni: libere
poligono: 1 1.8 11 1.8 11 6.2 1 6.2 | rosa
testo: 6 5.7 | blu | "suppongo P (l'ipotesi)"
testo: 6 4.9 | rosa | "e suppongo non Q (il contrario della tesi)"
testo: 6 4 | grigio | "ragiono e arrivo a una frase C ..."
testo: 6 3.1 | grigio | "... e anche a non C"
testo: 6 2.3 | rosa | "contraddizione"
freccia: 6 1.8 6 1.25 | grigio
testo: 6 0.85 | verde | "quindi Q"
```

Il metodo funziona perché una contraddizione non può essere vera: se ci si arriva senza errori, una delle supposizioni era falsa, e l'unica aggiunta è «non $Q$».

### Radice di 2 è irrazionale

L'esempio più famoso di dimostrazione per assurdo è quello che dice che $\sqrt{2}$ non è una frazione. Usa un fatto che si dimostra prima, nella sezione sulla contrapposizione qui sotto: se $n^2$ è pari, anche $n$ è pari.

> [!ESEMPIO] · $\sqrt{2}$ non è razionale
> **Passo 1: suppongo il contrario.** $\sqrt{2} = \frac{p}{q}$ con $p$ e $q$ interi, $q \neq 0$, e la frazione **ridotta ai minimi termini**: $p$ e $q$ non sono tutti e due pari.
>
> **Passo 2: elevo al quadrato.** $2 = \frac{p^2}{q^2}$, cioè $p^2 = 2q^2$. Quindi $p^2$ è pari, e allora anche $p$ è pari: $p = 2k$.
>
> **Passo 3: sostituisco.** $4k^2 = 2q^2$, cioè $q^2 = 2k^2$. Quindi $q^2$ è pari, e anche $q$ è pari.
>
> **Passo 4: la contraddizione.** $p$ e $q$ sono tutti e due pari, ma la frazione era ridotta. Quindi $\sqrt{2}$ non è razionale.

L'esercizio 7 del libro ripete lo stesso ragionamento per $\sqrt[3]{2}$, con i cubi.

::: prova Dimostra per assurdo: se $x^2$ è irrazionale, allora $x$ è irrazionale (esercizio 1 del libro).
Suppongo $x^2$ irrazionale e $x$ razionale: $x = \frac{p}{q}$. Allora $x^2 = \frac{p^2}{q^2}$ è una frazione di interi, quindi razionale. Contraddizione con l'ipotesi.
:::

> [!RICORDA]
> - Per assurdo: suppongo l'ipotesi e il contrario della tesi, arrivo a una frase e alla sua negazione.
> - Il contrario della tesi va scritto bene, con De Morgan se la tesi è un «o» o un «e».

## Il principio dei piccioni, per assurdo

Se 10 piccioni entrano in 9 buche, almeno una buca ne ha due: è il principio dei piccioni della [lezione D06 di Matematica Discreta](../MDAG/D06_insiemi_finiti_inclusione_esclusione.html). Le dimostrazioni di questo tipo si fanno naturalmente per assurdo: si suppone che la cosa non succeda e si contano gli oggetti.

> [!ESEMPIO] · 40 monete in 9 borse (esercizio 22 del libro, esercizio 5 di Cardone)
> **La frase.** Se 40 monete sono distribuite in 9 borse, nessuna vuota, almeno due borse hanno lo stesso numero di monete.
>
> **Passo 1: suppongo il contrario.** Le 9 borse hanno numeri di monete tutti diversi.
>
> **Passo 2: le ordino.** In ordine crescente, la prima ha almeno 1 moneta, la seconda almeno 2, e così via fino alla nona, con almeno 9.
>
> **Passo 3: conto.** In tutto almeno $1 + 2 + \dots + 9 = 45$ monete. Ma le monete sono 40: contraddizione.

::: prova Dimostra per assurdo che se 100 palline sono distribuite in 9 scatole, almeno una ne contiene 12 o più (esercizio 4 di Cardone).
Suppongo che ogni scatola ne contenga al massimo 11. Allora in tutto sono al massimo $9 \cdot 11 = 99$, meno di 100: contraddizione.
:::

> [!RICORDA]
> - «Almeno uno…» si dimostra bene per assurdo: si suppone «nessuno…» e si conta.

## Per contrapposizione (libro, §2.2)

Nella [lezione 07](07_condizionali_equivalenza_logica.html) abbiamo visto che «se piove, la strada è bagnata» è equivalente a «se la strada non è bagnata, non piove»: è la **contronominale**. Quindi, per dimostrare $P \to Q$, si può dimostrare in modo diretto $\neg Q \to \neg P$. È la **dimostrazione per contrapposizione**, domanda di ripasso 4 del §2.2.

> [!ESEMPIO] · Se $n^2$ è pari, $n$ è pari (Cardone, esempio 3)
> **La contronominale.** «Se $n$ non è pari, $n^2$ non è pari», cioè «se $n$ è dispari, $n^2$ è dispari».
>
> **La dimostrazione diretta della contronominale.** Sia $n$ dispari: $n = 2k + 1$. Allora $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, che è dispari.
>
> **Conclusione.** La contronominale è vera, quindi è vera anche la frase di partenza.

La stessa frase si può dimostrare per assurdo: suppongo $n^2$ pari e $n$ dispari, calcolo $n^2$ dispari, e ho una contraddizione con $n^2$ pari. Cardone mostra tutte e due le versioni: con la contrapposizione il ragionamento è più corto, perché non serve arrivare a una contraddizione.

> [!TRAPPOLA] Contronominale, non inversa
> La contronominale di $P \to Q$ è $\neg Q \to \neg P$. Dimostrare $Q \to P$, l'inversa, oppure $\neg P \to \neg Q$ non serve: non sono equivalenti alla frase di partenza.

::: prova Dimostra per contrapposizione: se $3n + 2$ è dispari, allora $n$ è dispari.
La contronominale: se $n$ è pari, $3n + 2$ è pari. Sia $n = 2k$: $3n + 2 = 6k + 2 = 2(3k + 1)$, pari.
:::

> [!RICORDA]
> - Per contrapposizione: dimostro in modo diretto «se non $Q$ allora non $P$».
> - Conviene quando «non $Q$» dà un'informazione più facile da usare di $P$, come «$n$ è dispari» rispetto a «$n^2$ è pari».

## Per casi (libro, §2.2)

Per dimostrare che il valore assoluto di un numero è sempre almeno il numero stesso, conviene guardare separatamente i numeri negativi e quelli non negativi: in ognuno dei due casi la verifica è immediata. Quando l'ipotesi si spezza in alternative, si dimostra la tesi in ogni alternativa. È la **dimostrazione per casi**: invece di $(P_1 \vee P_2) \to Q$ si dimostrano $P_1 \to Q$ e $P_2 \to Q$ (domanda di ripasso 6 del §2.2; è la regola «per casi» della lezione 10).

> [!ESEMPIO] · $x \le \lvert x \rvert$ (Cardone, esempio 4)
> Ogni reale è negativo oppure non negativo.
>
> **Caso $x < 0$.** $\lvert x \rvert = -x$, che è positivo: $\lvert x \rvert > 0 > x$.
>
> **Caso $x \ge 0$.** $\lvert x \rvert = x$, quindi $x \le \lvert x \rvert$.
>
> In tutti e due i casi $x \le \lvert x \rvert$.

> [!ESEMPIO] · $n^2 + n$ è sempre pari
> Ogni intero è pari o dispari.
>
> **Caso $n$ pari**, $n = 2k$: $n^2 + n = 4k^2 + 2k = 2(2k^2 + k)$, pari.
>
> **Caso $n$ dispari**, $n = 2k + 1$: $n^2 + n = (2k+1)^2 + (2k + 1) = 4k^2 + 6k + 2 = 2(2k^2 + 3k + 1)$, pari.

> [!TRAPPOLA] I casi devono coprire tutto
> I casi vanno scelti in modo che ogni situazione cada in almeno uno: «negativo» e «positivo» lasciano fuori lo 0. Prima di cominciare, controlla che la loro unione sia tutto il dominio.

::: prova Dimostra per casi che $\min(x, y) + \max(x, y) = x + y$ per tutti i reali $x$ e $y$ (esercizio 6 di Cardone).
Caso $x \le y$: $\min = x$ e $\max = y$, la somma è $x + y$. Caso $x > y$: $\min = y$ e $\max = x$, la somma è $y + x = x + y$.
:::

> [!RICORDA]
> - Per casi: una dimostrazione per ogni alternativa, e le alternative coprono tutto il dominio.

## Equivalenze e dimostrazioni di esistenza (libro, §2.2)

Il libro aggiunge due tipi di frase con un metodo proprio. Il primo: «le frasi $P$, $Q$, $R$ sono **equivalenti**», cioè sono tutte vere o tutte false. Invece di sei frecce basta un giro: $P \to Q$, $Q \to R$, $R \to P$ (domande di ripasso 8–10). Da ogni frase si arriva a ogni altra seguendo il giro.

Il secondo: le frasi con «esiste», $\exists x\, P(x)$. Una dimostrazione di esistenza è **costruttiva** se mostra un elemento $a$ con $P(a)$ vera; è **non costruttiva** se dimostra l'esistenza in un altro modo, per esempio per assurdo o per casi, senza dire quale sia l'elemento (domande di ripasso 11–15).

> [!ESEMPIO] · Costruttiva: esistono razionali $a$ e $b$ con $a^b$ razionale (esercizio 13)
> $a = b = 2$: $2^2 = 4$ è razionale. Ho mostrato l'elemento.

> [!ESEMPIO] · Non costruttiva: esistono irrazionali $a$ e $b$ con $a^b$ razionale
> Considero il numero $\sqrt{2}^{\sqrt{2}}$. È razionale oppure no: due casi.
>
> **Caso razionale.** Basta $a = b = \sqrt{2}$, irrazionali.
>
> **Caso irrazionale.** Prendo $a = \sqrt{2}^{\sqrt{2}}$ e $b = \sqrt{2}$. Allora $a^b = \sqrt{2}^{\sqrt{2} \cdot \sqrt{2}} = \sqrt{2}^2 = 2$, razionale.
>
> In tutti e due i casi la coppia esiste, ma la dimostrazione **non dice** quale delle due coppie è quella giusta.

::: prova Dimostra in modo costruttivo che esiste un intero $n$ con $n^2 = n$. E in modo costruttivo che esistono due dispari con somma 10?
$n = 0$, o $n = 1$. Per la seconda: $3 + 7 = 10$.
:::

> [!RICORDA]
> - Equivalenza di più frasi: un giro di frecce.
> - Costruttiva: mostra l'elemento. Non costruttiva: dimostra che c'è, senza dire quale.

## Il paradosso del bevitore

In un bar ci sono dei clienti, almeno uno. La frase è questa: **c'è un cliente con questa proprietà: se lui beve, allora bevono tutti**. Sembra assurda: nessun cliente ha il potere di far bere gli altri. Eppure è un teorema, e il motivo sta nella freccia della [lezione 07](07_condizionali_equivalenza_logica.html).

Con $B(x)$ = «$x$ beve» e il dominio dei clienti del bar, non vuoto, la frase è

$$\exists x\,\bigl(B(x) \to \forall y\, B(y)\bigr).$$

La freccia $B(x) \to \forall y\, B(y)$ non dice che il bere di $x$ **causa** il bere degli altri. Dice solo che non succede «$x$ beve e qualcuno non beve». È vera in due modi: se bevono tutti, oppure se $x$ non beve.

> [!TEOREMA] Il paradosso del bevitore
> In ogni bar con almeno un cliente esiste un cliente $x$ per cui vale: se $x$ beve, allora bevono tutti i clienti.

**Come si legge.** La dimostrazione è per casi, sulla frase «bevono tutti».

- **Caso 1: bevono tutti.** Si prende un cliente **qualsiasi**: ce n'è almeno uno. La parte dopo la freccia, «bevono tutti», è vera, quindi la freccia è vera.
- **Caso 2: non bevono tutti.** Allora c'è un cliente $d$ che non beve. Si prende proprio lui: $B(d)$ è falsa, e una freccia con l'ipotesi falsa è vera.

In tutti e due i casi il cliente esiste, quindi la frase è vera.

```grafico
titolo: I due casi della dimostrazione. A sinistra bevono tutti (pallini verdi): va bene un cliente qualsiasi. A destra almeno uno non beve (pallino rosa): si sceglie proprio lui, e la freccia è vera perché la sua ipotesi è falsa.
x: 0 12
y: 0 5.4
assi: no
griglia: no
proporzioni: libere
poligono: 0.4 0.6 5.6 0.6 5.6 4.2 0.4 4.2 | grigio
testo: 3 4.8 | verde | "caso 1: tutti bevono"
punto: 1.4 3.2 | verde
punto: 2.7 3.2 | verde
punto: 4 3.2 | verde
punto: 2 1.8 | verde
punto: 3.4 1.8 | verde
testo: 3 1 | grigio | "x = uno qualsiasi"
poligono: 6.4 0.6 11.6 0.6 11.6 4.2 6.4 4.2 | grigio
testo: 9 4.8 | rosa | "caso 2: non tutti"
punto: 7.4 3.2 | verde
punto: 8.7 3.2 | rosa
punto: 10 3.2 | verde
punto: 8 1.8 | verde
punto: 9.4 1.8 | verde
testo: 8.7 2.55 | rosa | "x"
testo: 9 1 | grigio | "x = chi non beve"
```

La dimostrazione è **non costruttiva**: non dice chi è il cliente, perché per saperlo bisognerebbe sapere in quale dei due casi siamo. Il dominio non vuoto serve nel caso 1: in un bar vuoto non c'è nessuno da scegliere, e la frase è falsa.

> [!ESEMPIO] · Il paradosso come gioco (lezione 11)
> **La frase come gioco.** Portando il $\forall y$ fuori dalla freccia, la frase diventa $\exists x\, \forall y\,\bigl(B(x) \to B(y)\bigr)$: è equivalente perché $x$ non dipende da $y$.
>
> **La partita.** Tu scegli il cliente $x$, poi l'avversario sceglie un cliente $y$ cercando di farti perdere, cioè cercando $B(x)$ vera e $B(y)$ falsa.
>
> **La strategia vincente.** Se c'è un cliente che non beve, scegli lui: $B(x)$ è falsa e l'avversario non può vincere. Se bevono tutti, qualunque $y$ scelga l'avversario $B(y)$ è vera. In tutti e due i casi vinci: la frase è vera. Ma per giocare bene devi sapere se qualcuno non beve.

> [!APPROFONDIMENTO] Il terzo escluso e la logica costruttiva
> Il passo decisivo è «bevono tutti oppure no»: si usa il **terzo escluso**, $A \vee \neg A$, senza sapere quale delle due sia vera. Nella logica costruttiva, che chiede di dimostrare un «esiste» mostrando l'elemento, il paradosso del bevitore non si può dimostrare. Per questo è un esempio classico per distinguere la logica classica, quella del libro e dell'esame, dalla logica costruttiva, studiata anche in informatica perché le sue dimostrazioni si possono trasformare in programmi.

::: prova Dimostra la versione «al contrario»: in ogni bar non vuoto c'è un cliente con questa proprietà: se qualcuno beve, beve anche lui. In formula, $\exists x\,\bigl(\exists y\, B(y) \to B(x)\bigr)$.
Per casi. Se qualcuno beve, scelgo proprio uno che beve: $B(x)$ è vera, quindi la freccia è vera. Se nessuno beve, scelgo un cliente qualsiasi: l'ipotesi $\exists y\, B(y)$ è falsa, quindi la freccia è vera.
:::

> [!RICORDA]
> - Il bevitore: $\exists x\,(B(x) \to \forall y\, B(y))$, vera in ogni dominio non vuoto.
> - Si dimostra per casi: se bevono tutti, va bene chiunque; se no, si sceglie chi non beve.
> - La freccia non è una causa: è falsa solo con l'ipotesi vera e la conclusione falsa.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\lvert x \rvert$ | «valore assoluto di x» | $x$ se $x \ge 0$, $-x$ se $x < 0$ | $\lvert -3 \rvert = 3$ |
| $\sqrt{2}$ | «radice di 2» | il numero positivo che al quadrato dà 2 | non è razionale |
| $\min(x, y)$, $\max(x, y)$ | «minimo», «massimo» | il più piccolo e il più grande dei due | $\min(3, 8) = 3$ |
| $\exists x\,(B(x) \to \forall y\, B(y))$ | «esiste x tale che, se x beve, bevono tutti» | il paradosso del bevitore | |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti. Chi arriva a 24 nei quiz può fare la **domanda aperta** facoltativa, da −1 a 6 punti.

**Che cosa serve di questa lezione**

1. **Riconoscere il metodo.** Il programma comune cita la dimostrazione diretta, per assurdo e per contrapposizione. Nei quiz può servire dire quale metodo usa una dimostrazione, o qual è la frase da dimostrare per contrapposizione.
2. **Scrivere una dimostrazione corta** nella domanda aperta: ipotesi, metodo dichiarato, passi con le definizioni, conclusione. Nelle simulazioni 2023/24 che ho non ci sono domande aperte: le domande qui sotto sono sul modello degli esercizi del libro.
3. **Il bevitore** è un buon esercizio sulla freccia e sui quantificatori, come le domande delle simulazioni sulle negazioni.

### Una domanda sul modello, letta insieme

**Il testo**, inventato sul modello degli esercizi del §2.2: «Per dimostrare per contrapposizione che, per ogni intero $n$, se $n^2$ è dispari allora $n$ è dispari, quale frase si dimostra? Scrivi la dimostrazione.»

**In pratica chiede:** la contronominale giusta e la sua dimostrazione diretta.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: la contronominale.** Con $P$ = «$n^2$ è dispari» e $Q$ = «$n$ è dispari», si dimostra $\neg Q \to \neg P$: «se $n$ è pari, allora $n^2$ è pari».
>
> **Passo 2: la dimostrazione diretta.** Sia $n$ pari: $n = 2k$. Allora $n^2 = 4k^2 = 2(2k^2)$, pari.
>
> **Passo 3.** La contronominale è vera, quindi lo è anche la frase di partenza.

> [!METODO] Quale metodo usare
> 1. L'ipotesi dà una forma da usare, come $n = 2k$? **Diretta.**
> 2. È più facile usare il contrario della tesi che l'ipotesi? **Contrapposizione.**
> 3. La tesi dice che qualcosa **non** succede, o «almeno uno…»? **Per assurdo.**
> 4. L'ipotesi o il dominio si spezzano in pochi casi, come pari e dispari? **Per casi.**
> 5. Si chiede che qualcosa esista? Se puoi, mostralo: **costruttiva**.

## Quiz

```quiz
D: In una dimostrazione per assurdo di «se $P$ allora $Q$», che cosa si suppone?
+ $P$ vera e $Q$ falsa
- $P$ falsa e $Q$ vera
- $Q$ vera
- $P$ falsa
- $P$ e $Q$ tutte e due false
= È la domanda di ripasso 1 del §2.2: si suppongono l'ipotesi e il contrario della tesi, e si cerca una contraddizione. La risposta più insidiosa è «$P$ falsa»: con l'ipotesi falsa la freccia è già vera, non c'è niente da dimostrare.

D: Per contrapposizione, che cosa si dimostra al posto di «se $n^2$ è pari, $n$ è pari»?
+ Se $n$ è dispari, $n^2$ è dispari
- Se $n$ è pari, $n^2$ è pari
- Se $n^2$ è dispari, $n$ è dispari
- $n^2$ è pari e $n$ è dispari
- Se $n$ è pari, $n^2$ è dispari
= La contronominale nega e scambia: $\neg Q \to \neg P$. La risposta più insidiosa è la seconda, che è l'inversa: vera anche lei, ma non equivalente.

D: Qual è la negazione della tesi «$x \ge 1$ oppure $y \ge 1$», da supporre in una dimostrazione per assurdo?
+ $x < 1$ e $y < 1$
- $x < 1$ oppure $y < 1$
- $x \le 1$ e $y \le 1$
- $x > 1$ e $y > 1$
- $x + y < 2$
= De Morgan: la negazione di un «o» è un «e», e il contrario di $\ge$ è $<$. La risposta più insidiosa è la terza: con $\le$ include $x = 1$, che non nega $x \ge 1$.

D: Nella dimostrazione che $\sqrt{2}$ è irrazionale, dove sta la contraddizione?
+ $p$ e $q$ risultano tutti e due pari, ma la frazione era ridotta ai minimi termini
- $p^2 = 2q^2$ è impossibile
- $\sqrt{2}$ risulta negativo
- $q$ risulta 0
- $p$ risulta dispari
= Si suppone la frazione ridotta, poi si dimostra che numeratore e denominatore sono pari. La risposta più insidiosa è la seconda: $p^2 = 2q^2$ è il passaggio da cui si parte; la contraddizione arriva solo confrontando quello che se ne ricava con l'ipotesi della frazione ridotta.

D: 40 monete in 9 borse non vuote. Quante monete servirebbero almeno se le borse avessero numeri di monete tutti diversi?
N: 45
= $1 + 2 + \dots + 9 = 45$, più di 40: per questo due borse hanno lo stesso numero di monete (esercizio 22 del libro).

D: Che cos'è una dimostrazione di esistenza non costruttiva?
+ Dimostra che l'elemento esiste senza dire quale sia
- Dimostra che l'elemento non esiste
- Mostra un elemento esplicito
- Dimostra un «per ogni»
- Usa solo esempi
= È la domanda di ripasso 14 del §2.2. La risposta più insidiosa è la terza, che è la definizione di costruttiva.

D: Nel paradosso del bevitore, chi si sceglie se almeno un cliente non beve?
+ Proprio un cliente che non beve
- Un cliente che beve
- Nessuno: in quel caso la frase è falsa
- Un cliente qualsiasi
- Il cliente che beve di più
= Con un cliente che non beve, l'ipotesi della freccia è falsa e la freccia è vera. La risposta più insidiosa è «un cliente qualsiasi»: se scegli uno che beve mentre qualcun altro non beve, la freccia è falsa.

D: Il paradosso del bevitore $\exists x\,(B(x) \to \forall y\, B(y))$ è vero:
+ in ogni dominio con almeno un elemento
- solo se tutti bevono
- solo se nessuno beve
- in ogni dominio, anche vuoto
- solo nei domini con almeno due elementi
= La dimostrazione per casi funziona con qualunque dominio non vuoto. La risposta più insidiosa è «anche vuoto»: nel dominio vuoto ogni «esiste» è falso, perché non c'è nessuno da scegliere.
```

## Esercizi

::: esercizio base Riscaldamento: quale metodo
Per ognuna, che metodo usi? (a) «Il prodotto di due pari è pari.» (b) «Se $n^2$ è dispari, $n$ è dispari.» (c) «Non esiste un intero più grande di tutti.» (d) «Per ogni intero $n$, $n^3 - n$ è pari.»
::: soluzione
(a) Diretta: $n = 2k_1$, $m = 2k_2$, $nm = 2(2k_1k_2)$. (b) Contrapposizione: se $n$ è pari, $n^2$ è pari. (c) Per assurdo: se $M$ fosse il più grande, $M + 1$ sarebbe più grande di $M$. (d) Per casi, pari e dispari; oppure diretta, con $n^3 - n = (n - 1)n(n + 1)$, che contiene due numeri consecutivi.
:::

::: esercizio base Riscaldamento: la contronominale
Scrivi la frase da dimostrare per contrapposizione: (a) se $mn$ è dispari, $m$ e $n$ sono dispari; (b) se $x^2 < 1$, allora $x < 1$.
::: soluzione
(a) Se $m$ è pari oppure $n$ è pari, allora $mn$ è pari. La negazione di «$m$ e $n$ dispari» è un «o», per De Morgan. (b) Se $x \ge 1$, allora $x^2 \ge 1$.
:::

::: esercizio medio Radice cubica di 2 (esercizio 7 del libro)
Dimostra per assurdo che $\sqrt[3]{2}$ è irrazionale. Puoi usare che se $p^3$ è pari, $p$ è pari.
::: soluzione
Suppongo $\sqrt[3]{2} = \frac{p}{q}$ ridotta. Allora $p^3 = 2q^3$: $p^3$ è pari, quindi $p$ è pari, $p = 2k$. Sostituendo, $8k^3 = 2q^3$, cioè $q^3 = 4k^3$: $q^3$ è pari, quindi $q$ è pari. $p$ e $q$ pari contro la frazione ridotta: contraddizione.
:::

::: esercizio medio Il resto nella divisione per 3
Dimostra per casi che per ogni intero $n$, $n^2$ ha resto 0 o 1 nella divisione per 3.
::: soluzione
Ogni intero ha resto 0, 1 o 2: tre casi. $n = 3k$: $n^2 = 3(3k^2)$, resto 0. $n = 3k + 1$: $n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$, resto 1. $n = 3k + 2$: $n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$, resto 1.
:::

::: esercizio esame Il bevitore negato
Scrivi la negazione di $\exists x\,(B(x) \to \forall y\, B(y))$ spingendo il $\neg$ fino in fondo, e spiega perché in un dominio non vuoto è falsa.
::: soluzione
$\neg\,\exists x\,(B(x) \to \forall y\, B(y)) \equiv \forall x\, \neg(B(x) \to \forall y\, B(y)) \equiv \forall x\,(B(x) \wedge \neg\,\forall y\, B(y)) \equiv \forall x\,(B(x) \wedge \exists y\, \neg B(y))$. A parole: «tutti bevono, e qualcuno non beve». In un dominio non vuoto è una contraddizione: dice insieme che tutti bevono e che qualcuno no. Per questo la frase di partenza è vera.
:::

::: esercizio difficile La successione che passa per 0 (esercizio 25 del libro, esercizio 7 di Cardone)
Una successione di interi $s_1, \dots, s_n$, con $n \ge 2$, ha $s_1$ positivo, $s_n$ negativo, e ogni termine differisce dal precedente di 1 in più o in meno. Dimostra che qualche $s_i$ vale 0.
::: soluzione
Sia $i$ il più grande indice con $s_i$ positivo: esiste, perché $s_1$ è positivo, ed è minore di $n$, perché $s_n$ è negativo. Allora $s_{i+1}$ vale $s_i + 1$ oppure $s_i - 1$. Se valesse $s_i + 1$ sarebbe positivo, contro la scelta di $i$ come ultimo positivo: assurdo. Quindi $s_{i+1} = s_i - 1$, e $s_{i+1}$ non è positivo. Siccome $s_i \ge 1$, $s_{i+1} \ge 0$: l'unica possibilità è $s_{i+1} = 0$. È la soluzione del libro, che mescola un caso e un assurdo.
:::

## Domande di ripasso

::: domanda Che cos'è una dimostrazione per assurdo?
Si suppongono vere le ipotesi e falsa la conclusione, e se ne ricava una contraddizione: una frase e la sua negazione.
:::

::: domanda Che cosa si dimostra in una dimostrazione per contrapposizione di $P \to Q$?
La contronominale $\neg Q \to \neg P$, in modo diretto.
:::

::: domanda Quando si usa la dimostrazione per casi?
Quando l'ipotesi o il dominio si spezzano in alternative, come pari e dispari: si dimostra la tesi in ogni alternativa.
:::

::: domanda Che differenza c'è tra una dimostrazione di esistenza costruttiva e una non costruttiva?
La costruttiva mostra l'elemento; la non costruttiva dimostra che esiste senza dire quale sia.
:::

::: domanda Come si dimostra il paradosso del bevitore?
Per casi: se bevono tutti, va bene un cliente qualsiasi; se qualcuno non beve, si sceglie lui, e la freccia è vera perché la sua ipotesi è falsa.
:::

## Glossario

```glossario
Dimostrazione per assurdo | Si suppongono l'ipotesi e il contrario della tesi e si arriva a una contraddizione. Si chiama anche indiretta.
Contraddizione | Una frase e la sua negazione insieme, C ∧ ¬C.
Dimostrazione per contrapposizione | Per P → Q si dimostra in modo diretto ¬Q → ¬P.
Dimostrazione per casi | Per (P₁ ∨ P₂) → Q si dimostrano P₁ → Q e P₂ → Q.
Dimostrazione di equivalenza | Mostra che più frasi sono tutte vere o tutte false, per esempio con un giro di frecce.
Dimostrazione di esistenza costruttiva | Dimostra ∃x P(x) mostrando un elemento a con P(a).
Dimostrazione di esistenza non costruttiva | Dimostra ∃x P(x) senza indicare l'elemento.
Paradosso del bevitore | ∃x (B(x) → ∀y B(y)): vero in ogni dominio non vuoto, dimostrato per casi.
```

## Checklist

```checklist
- So scrivere una dimostrazione per assurdo, negando bene la tesi.
- So dimostrare che la radice di 2 è irrazionale.
- So usare il principio dei piccioni con una dimostrazione per assurdo.
- So scrivere la contronominale e dimostrarla.
- So dimostrare per casi, con casi che coprono tutto.
- So distinguere una dimostrazione di esistenza costruttiva da una non costruttiva.
- So dimostrare il paradosso del bevitore e spiegare perché non è davvero un paradosso.
- So scegliere il metodo adatto a una frase.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 2), §2.2 «More Methods of Proof»: domande di ripasso 1–15 ed esercizi 1, 7, 13, 22 e 25, con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: i testi degli esercizi li ho ricostruiti dalle soluzioni e tradotti.
- F. Cardone, «Tecniche di dimostrazione» (Moodle del canale A): esempi 2, 3 e 4 (per assurdo, per contrapposizione, per casi) ed esercizi 4, 5, 6 e 7.
- Diario del canale B: «Lezione 15. Venerdì 30 Ottobre ore 11-13. Fine Capitolo 2.1 (Metodi di Prova). Il paradosso del bevitore. Esercizi». Appunti scritti prima della lezione: il diario non dice come il docente presenta il paradosso.
- Il paradosso del bevitore è un risultato classico della logica; la dimostrazione per casi, la versione come gioco, il detective, gli esempi $n^2 + n$ e $\sqrt{2}^{\sqrt{2}}$, la domanda sul modello, i quiz e gli esercizi senza indicazione sono di questi appunti.
