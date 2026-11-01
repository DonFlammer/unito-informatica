---
corso: FDA
lezione: S5
tipo: riassunto
titolo: "Settimana 5: esercizi di logica e tecniche di dimostrazione"
data: 2026-10-30
docenti: Stefano Berardi
sopratitolo: Riassunto settimanale · Fondamenti dell'Informatica · Canale B · 26/10 – 30/10/2026
descrizione: >-
  Riassunto della settimana 5 di Fondamenti dell'Informatica (canale B, libro parte 2, fine del cap. 1 e §2.1–2.2):
  esercizi su tavole di verità, traduzioni, equivalenze, argomentazioni e quantificatori; sistemi matematici,
  dimostrazione diretta, pari e dispari, controesempi, dimostrazioni con gli insiemi; dimostrazioni per assurdo, per
  contrapposizione e per casi, esistenza costruttiva e non costruttiva, il paradosso del bevitore.
lede: >-
  Le tre lezioni della settimana in poche pagine: come si cerca il caso che rende falsa una formula, come si scrive una
  dimostrazione diretta partendo dalle definizioni, quale metodo di prova scegliere, e perché il paradosso del
  bevitore non è un paradosso.
materiale: libro
simboli_logici: quantificatori
scheda:
  Lezioni: "[12](12_esercizi_logica.html) lun 26/10, esercizi · [13](13_dimostrazioni_dirette_controesempi.html) gio 29/10, §2.1 · [14](14_altri_metodi_di_prova.html) ven 30/10, §2.2"
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni 12, 13 e 14 di Fondamenti dell'Informatica (canale B), scritti sul libro di testo, parte 2
  (Johnsonbaugh, cap. 1 e 2), e sulle note di F. Cardone (canale A)
appunti_html: appunti/FDA/riassunto_settimana_05.html
genera_html: true
---

## In breve

- La lezione 12 è di **esercizi** su tutta la logica: tavole di verità, traduzioni con «solo se» e «tranne», equivalenze, argomentazioni, quantificatori.
- Per decidere se una formula è sempre vera, o un'argomentazione valida, si **cerca il caso che la rende falsa**: se non c'è, hai finito.
- Una **dimostrazione diretta** suppone vera l'ipotesi e arriva alla tesi passo per passo, usando le definizioni: pari vuol dire $2k$, dispari $2k + 1$.
- Un «per ogni» falso si smentisce con **un solo controesempio**; nessun numero di esempi lo dimostra vero.
- **Per assurdo** si suppone falsa la tesi e si arriva a una contraddizione; **per contrapposizione** si dimostra la contronominale; **per casi** si divide l'ipotesi in pezzi.
- Un'esistenza è **costruttiva** se mostra l'elemento, **non costruttiva** se dimostra solo che c'è. Il **paradosso del bevitore** è un esempio non costruttivo.

> [!NOTA] Le lezioni 13 e 14
> Le ho scritte prima delle lezioni del 29 e del 30/10, seguendo il libro: il diario del docente per questi due giorni non l'ho ancora. Se in aula l'ordine è stato diverso, lo sistemo.

## 12 · Esercizi di logica (lun 26/10)

Niente argomenti nuovi: è il ripasso delle lezioni 06–11, con esercizi dall'autoverifica del capitolo 1 e dalle note di Cardone. Le idee che tornano in quasi tutti gli esercizi sono quattro.

- **Cercare il caso falso.** Una formula con «o» è falsa solo se tutti i pezzi sono falsi, una freccia solo se la premessa è vera e la conclusione falsa. Si parte da lì invece di scrivere tutta la tavola.
- **«Solo se»** mette a destra della freccia quello che lo segue: «prendo A solo se studio» è «se prendo A, allora studio».
- **«Tranne»** dice due cose insieme. «Tutti sono protestanti tranne gli svedesi» è un se e solo se: ognuno è protestante esattamente quando non è svedese.
- **Negare una freccia** dà un «e»: il contrario di «se piove, prendo l'ombrello» è «piove e non prendo l'ombrello».

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

Con i **quantificatori ristretti**, «ogni elemento di $A$» si scrive con la freccia e «qualche elemento di $B$» con l'«e». Negandoli, il «per ogni» diventa «esiste» e viceversa, e la freccia diventa un «e».

::: prova Nega «ogni studente ha superato qualche esame».
«Qualche studente non ha superato nessun esame»: il «per ogni» diventa «esiste», e l'«esiste» diventa «per nessuno».
:::

> [!RICORDA]
> - Si cerca il caso falso; se non c'è, la formula è una tautologia o l'argomentazione è valida.
> - «Solo se»: a destra della freccia. «Tranne»: se e solo se.
> - La negazione di una freccia è un «e».

## 13 · Dimostrazioni dirette (gio 29/10)

Un **sistema matematico** ha assiomi, accettati senza dimostrazione, definizioni e termini non definiti. Un **teorema** è una frase dimostrata; un **lemma** serve a dimostrarne altri; un **corollario** segue subito da un teorema.

Le dimostrazioni partono dalle definizioni. Un intero è **pari** se è $2k$ per qualche intero $k$, **dispari** se è $2k + 1$.

> [!ESEMPIO] · dispari più pari è dispari
> Sia $n$ dispari e $m$ pari: $n = 2k + 1$ e $m = 2h$. Allora $n + m = 2k + 2h + 1 = 2(k + h) + 1$, che è dispari perché $k + h$ è un intero. I numeri $n$ e $m$ sono qualsiasi: per un «per ogni» non si sceglie un esempio.

- **Controesempi.** «Per ogni intero positivo $n$, $n^2 + n + 41$ è primo» è vera per $n$ da 1 a 39, ma è falsa: con $n = 40$ viene $1681 = 41^2$. Un solo controesempio basta.
- **Insiemi.** Per dimostrare $X \subseteq Y$ si prende un elemento qualsiasi di $X$ e si mostra che sta in $Y$. Per $X = Y$ servono le due inclusioni. Per smentire un'uguaglianza basta un esempio con insiemi piccoli.

```grafico
titolo: Per dimostrare che $X \cap Y$ è contenuto in $X$ si prende un elemento qualsiasi dell'intersezione (il punto): sta in tutti e due i cerchi, quindi in particolare in $X$
x: -2.4 4.4
y: -2 2.2
assi: no
griglia: no
cerchio: 0 0 1.6 | blu | pieno
cerchio: 2 0 1.6 | ambra
testo: -0.9 1.75 | blu | "X"
testo: 2.9 1.75 | ambra | "Y"
punto: 1 0 | rosa
testo: 1 -0.5 | rosa | "x"
```

::: prova Dimostra che il prodotto di due dispari è dispari.
$(2k + 1)(2h + 1) = 4kh + 2k + 2h + 1 = 2(2kh + k + h) + 1$: è un doppio più uno, quindi dispari.
:::

> [!RICORDA]
> - Diretta: ipotesi, definizioni, passi, tesi.
> - Un controesempio smentisce un «per ogni»; gli esempi non lo dimostrano.
> - Inclusione: un elemento qualsiasi del primo insieme sta nel secondo.

## 14 · Altri metodi di prova (ven 30/10)

Quando la dimostrazione diretta non parte, ci sono altre strade.

- **Per assurdo**: si suppone vera l'ipotesi e falsa la tesi, e si arriva a una contraddizione. È il metodo per dire che $\sqrt{2}$ non è una frazione: se fosse $\frac{a}{b}$ ridotta ai minimi termini, $a$ e $b$ verrebbero tutti e due pari.
- **Piccioni**: 40 monete in 9 borse non vuote. Se le borse avessero numeri tutti diversi, servirebbero almeno $1 + 2 + \cdots + 9 = 45$ monete; quindi due borse hanno lo stesso numero.
- **Per contrapposizione**: invece di «se $n^2$ è pari, $n$ è pari» si dimostra «se $n$ è dispari, $n^2$ è dispari», che è equivalente e si fa in modo diretto.
- **Per casi**: $n^2 + n$ è sempre pari, perché si divide in due casi. Se $n$ è pari, lo sono tutti e due i termini; se $n$ è dispari, i due termini sono dispari e la loro somma è pari.
- **Equivalenze**: per mostrare che tre frasi sono equivalenti basta un giro di frecce, dalla prima alla seconda, alla terza, e di nuovo alla prima.
- **Esistenza**: costruttiva se mostra l'elemento, non costruttiva se dimostra che c'è senza dire quale.

Il **paradosso del bevitore**: in ogni bar non vuoto c'è una persona con questa proprietà: se lei beve, bevono tutti. Si dimostra per casi.

```grafico
titolo: Il paradosso del bevitore si dimostra per casi. Se bevono tutti, va bene chiunque, perché la conclusione è vera. Se qualcuno non beve, si sceglie lui, perché la premessa «lui beve» è falsa e la freccia è vera
x: 0 12
y: 0 5.4
assi: no
griglia: no
proporzioni: libere
poligono: 3.9 4 8.1 4 8.1 5.2 3.9 5.2 | grigio
testo: 6 4.6 | accento | "bevono tutti?"
freccia: 5 4 2.8 2.7 | verde
testo: 3.1 3.5 | verde | "sì"
freccia: 7 4 9.2 2.7 | rosa
testo: 8.9 3.5 | rosa | "no"
poligono: 0.2 0.3 5.4 0.3 5.4 2.6 0.2 2.6 | verde
testo: 2.8 1.9 | verde | "va bene chiunque"
testo: 2.8 1.0 | verde | "la conclusione è vera"
poligono: 6.6 0.3 11.8 0.3 11.8 2.6 6.6 2.6 | rosa
testo: 9.2 1.9 | rosa | "uno che non beve"
testo: 9.2 1.0 | rosa | "la premessa è falsa"
```

La dimostrazione è non costruttiva: dice che la persona c'è, ma per trovarla bisogna sapere chi beve. Il «paradosso» nasce dal leggere la freccia come causa ed effetto; la freccia della logica dice solo che non succede «lei beve e qualcuno no».

::: prova Per contrapposizione, che cosa si dimostra al posto di «se $n^2$ è multiplo di 3, $n$ è multiplo di 3»?
«Se $n$ non è multiplo di 3, allora $n^2$ non è multiplo di 3»: le due parti negate e scambiate.
:::

> [!RICORDA]
> - Assurdo: tesi falsa, poi contraddizione. Contrapposizione: la contronominale, in modo diretto. Casi: un pezzo alla volta.
> - Costruttiva mostra l'elemento; non costruttiva no.

## Verso l'esame

- **I quiz**: 9 domande in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti. Nelle simulazioni 2023/24 la logica compare con formule da valutare, formule con la stessa tavola, negazioni con i quantificatori.
- **La domanda aperta**, facoltativa per chi fa almeno 24 nei quiz: il programma comune cita le tecniche di dimostrazione e le uguaglianze tra insiemi. Una dimostrazione corta scritta bene è il tipo di risposta che serve.
- Appelli 2026/27: venerdì 29/01/2027 e giovedì 18/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Come si decide in fretta se una formula è una tautologia?
Si cerca un'assegnazione che la rende falsa, partendo dal connettivo principale. Se non c'è, è una tautologia.
:::

::: domanda Qual è la negazione di «se piove, prendo l'ombrello»?
«Piove e non prendo l'ombrello».
:::

::: domanda Come si comincia una dimostrazione diretta di «se $n$ è dispari, $n^2$ è dispari»?
Si suppone $n$ dispari e lo si scrive come $2k + 1$, poi si calcola $n^2$.
:::

::: domanda Perché un esempio non basta a dimostrare un «per ogni», mentre un controesempio basta a smentirlo?
Perché il «per ogni» deve valere per tutti gli elementi, e un esempio ne controlla uno solo; un controesempio mostra un elemento per cui è falso.
:::

::: domanda Che differenza c'è tra contrapposizione e assurdo?
Nella contrapposizione si dimostra in modo diretto la contronominale. Nell'assurdo si suppongono insieme l'ipotesi e la tesi falsa, e si cerca una contraddizione qualsiasi.
:::

## Quiz d'esame

Le prime due sono domande vere delle simulazioni d'esame 2023/24, dalla «Guida degli studenti» del gruppo TSI: le opzioni del menù non si vedono nella schermata, quindi le risposte sbagliate sono ricostruite. Sulle dimostrazioni nelle simulazioni che ho non ci sono domande, quindi le altre sono **sul modello** dei quiz e degli esercizi del libro. Tutte le risposte le ho controllate con un programma.

```quiz
D: Simulazione d'esame 2 del 2023/24, domanda 2, con le voci in forma di scelta. Quale di queste affermazioni sulle algebre booleane è valida? ($+$ è l'«o», $\cdot$ l'«e», $x'$ il «non».)
+ $x + (y \cdot z) = (y + x) \cdot (z + x)$ vale in tutte le algebre booleane
- $x + (y \cdot z) = (x \cdot y) + (x \cdot z)$ vale in tutte le algebre booleane
- le algebre booleane sono definite solo su insiemi con esattamente due elementi
- $x + x = 1$ vale in tutte le algebre booleane
- $x \cdot x' = 1$ vale in tutte le algebre booleane
= In logica l'«o» si distribuisce sull'«e». La risposta più insidiosa è la seconda, che somiglia alla distributiva dei numeri: con $x = 1$ e $y = z = 0$ la sinistra vale 1 e la destra 0.

D: Simulazione d'esame 1 del 2023/24, domanda 6. Un circuito calcola $(\neg C \wedge A) \vee (\neg C \wedge B)$. Quale formula ha la stessa tavola?
+ $\neg((C \vee \neg A) \wedge (C \vee \neg B))$
- $(\neg C \vee A) \wedge (\neg C \vee B)$
- $\neg C \wedge A \wedge B$
- $\neg(C \wedge (A \vee B))$
- $\neg C \vee A \vee B$
= Con De Morgan due volte si torna alla formula del circuito. La risposta più insidiosa è la seconda, che scambia «e» e «o»: con le tre lettere false vale V, mentre il circuito dà F.

D: Sul modello dei quiz di logica. Quale di queste formule è una tautologia?
+ $(p \to q) \vee (q \to p)$
- $(p \to q) \to (q \to p)$
- $(p \vee q) \to p$
- $(p \to q) \wedge (q \to p)$
- $\neg p \to (p \wedge q)$
= Per rendere falsa la prima servirebbero $p \to q$ e $q \to p$ tutte e due false, cioè $p$ vera e $q$ falsa e insieme il contrario: impossibile. La più insidiosa è la seconda, che passa dalla freccia alla sua inversa: con $p$ falsa e $q$ vera è falsa.

D: Sul modello degli esercizi del §2.1. «Per ogni intero $n \ge 0$, $n^2 - n + 11$ è primo.» Qual è il più piccolo controesempio?
- $n = 1$
- $n = 5$
- $n = 10$
+ $n = 11$
- non ce ne sono: la frase è vera
= Per $n$ da 0 a 10 i valori sono 11, 11, 13, 17, 23, 31, 41, 53, 67, 83 e 101, tutti primi. Con $n = 11$ viene $121 - 11 + 11 = 121 = 11^2$. La più insidiosa è l'ultima: tanti esempi giusti non dimostrano un «per ogni».

D: Sul modello degli esercizi del §2.1. Quale frase vale per tutti gli insiemi $A$ e $B$?
+ $A - B \subseteq A$
- $A \cup B \subseteq A \cap B$
- $A - B = B - A$
- $A \subseteq A \cap B$
- $(A \cap B) \cup A = B$
= Un elemento di $A - B$ sta in $A$ per definizione. Le altre si smentiscono con $A = \{1\}$ e $B = \varnothing$. La più insidiosa è la terza, che è vera solo quando $A = B$.

D: Sul modello delle domande sulla contrapposizione. Per dimostrare per contrapposizione «se $n^2$ è multiplo di 3, allora $n$ è multiplo di 3», che cosa si dimostra?
+ se $n$ non è multiplo di 3, allora $n^2$ non è multiplo di 3
- se $n$ è multiplo di 3, allora $n^2$ è multiplo di 3
- se $n^2$ non è multiplo di 3, allora $n$ non è multiplo di 3
- $n^2$ è multiplo di 3 e $n$ non lo è
- $n$ è multiplo di 3 oppure $n^2$ non lo è
= La contronominale nega le due parti e le scambia. La più insidiosa è la seconda: è l'inversa, che è vera ma non equivalente alla frase di partenza. La quarta è la negazione, da supporre in una dimostrazione per assurdo.

D: Sul modello del paradosso del bevitore. In un bar dove **nessuno** beve, chi rende vera la frase «se lui beve, allora bevono tutti»?
+ chiunque
- nessuno
- solo chi beve
- la frase è falsa per tutti
- dipende da quanti clienti ci sono
= Per ogni cliente la premessa «lui beve» è falsa, quindi la freccia è vera. La più insidiosa è «nessuno», di chi legge la freccia come causa ed effetto.

D: Sul modello degli esercizi sui piccioni. Quante persone servono, come minimo, per essere sicuri che due siano nate nello stesso mese?
N: 13
= Con 12 persone ognuna può essere nata in un mese diverso; con 13 i mesi non bastano e due persone finiscono nello stesso mese.
```

## Fonti

- Le lezioni complete: [12 · Esercizi di logica, connettivi, regole e quantificatori](12_esercizi_logica.html), [13 · Metodi di prova, dimostrazioni dirette e controesempi](13_dimostrazioni_dirette_controesempi.html), [14 · Altri metodi di prova e il paradosso del bevitore](14_altri_metodi_di_prova.html), con gli esempi, i quiz e gli esercizi.
- Libro di testo, parte 2 (Johnsonbaugh), cap. 1, autoverifica, e §2.1–2.2; note di F. Cardone, «Tecniche di dimostrazione» (canale A).
- Simulazioni d'esame 1 e 2 del 2023/24 (domande 6 e 2), dalla «Guida degli studenti» del gruppo TSI.
