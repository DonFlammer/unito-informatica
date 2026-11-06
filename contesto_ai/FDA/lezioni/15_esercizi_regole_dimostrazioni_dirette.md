---
corso: FDA
lezione: "15"
data: 2026-11-02
titolo: Esercizi su regole di inferenza e dimostrazioni dirette
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 15 · Libro, parte 2, §1.4 e §2.1 (esercizi)
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 15 di Fondamenti dell'Informatica (canale B), di esercizi riassuntivi: riconoscere le regole di
  inferenza e le due fallacie, trovare il controesempio di un'argomentazione non valida, catene di regole, lo schema
  della dimostrazione diretta con i numeri e con gli insiemi, controesempi, e quiz nello stile dell'esame.
lede: >-
  Una lezione di esercizi, in forma di quiz, sulle regole della logica proposizionale e sulle dimostrazioni dirette.
  Le due abilità sono le stesse: sapere quali passaggi sono permessi, e scriverli in ordine, ognuno con la sua
  giustificazione.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh), §1.4 e §2.1, esercizi
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 90 minuti, con carta e penna
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 1 e 2), autoverifiche dei capitoli 1
  e 2 ed esercizi del §2.1, con le soluzioni pubblicate sul Moodle del canale A; diario del canale B
appunti_html: appunti/FDA/15_esercizi_regole_dimostrazioni_dirette.html
genera_html: true
---

## In breve

- Le **sette regole di inferenza** della [lezione 08](08_argomentazioni_regole_inferenza.html) sono argomentazioni valide corte: modus ponens, modus tollens, addizione, semplificazione, congiunzione, sillogismo ipotetico, sillogismo disgiuntivo. Le due **fallacie** le imitano ma non sono valide.
- Un'argomentazione **non è valida** se c'è almeno una riga della tavola con tutte le premesse vere e la conclusione falsa: quella riga è il **controesempio**.
- Le argomentazioni lunghe si dimostrano con una **catena di regole**: ogni passo usa una regola su premesse o passi precedenti.
- La **dimostrazione diretta** suppone l'ipotesi, la riscrive con le definizioni (pari = $2k$, razionale = frazione), fa i conti e arriva alla tesi.
- Con gli insiemi: per dimostrare un'inclusione si prende un elemento qualsiasi del primo insieme e si mostra che sta nel secondo; per un'uguaglianza servono le due inclusioni.
- Un **per ogni** falso si smentisce con un solo controesempio.

> [!CANALI]
> Nel canale B è la lezione di lunedì 02/11, dalle 9 alle 11. Per il docente è la lezione 16, perché la prima è stata un'introduzione: qui è la 15. Il diario del canale B: «Esercizi riassuntivi su regole proposizionali e dimostrazioni dirette (Quiz)». **Ho scritto questi appunti dopo la lezione, senza sapere quali esercizi e quali quiz ha usato il docente.** Gli esercizi del libro della [lezione 08](08_argomentazioni_regole_inferenza.html) (§1.4) e della [lezione 13](13_dimostrazioni_dirette_controesempi.html) (§2.1) sono già svolti lì: qui uso quelli che restano, le domande delle autoverifiche dei capitoli 1 e 2, ed esercizi miei nello stile dei quiz d'esame.
>
> Servono la [lezione 08](08_argomentazioni_regole_inferenza.html) (regole e fallacie), la [07](07_condizionali_equivalenza_logica.html) (freccia, De Morgan) e la [13](13_dimostrazioni_dirette_controesempi.html) (dimostrazione diretta, pari e dispari, insiemi).

## Le regole, in una tabella

Il ripasso della [lezione 08](08_argomentazioni_regole_inferenza.html), con un esempio a parole per ognuna. Le premesse stanno sopra la riga, la conclusione sotto.

| Regola | Dalle premesse | Segue | A parole |
|---|---|---|---|
| **modus ponens** | $p \to q$, $p$ | $q$ | se piove la strada è bagnata; piove; quindi la strada è bagnata |
| **modus tollens** | $p \to q$, $\neg q$ | $\neg p$ | se piove la strada è bagnata; non è bagnata; quindi non piove |
| addizione | $p$ | $p \vee q$ | piove; quindi piove o nevica |
| semplificazione | $p \wedge q$ | $p$ | piove e fa freddo; quindi piove |
| congiunzione | $p$, $q$ | $p \wedge q$ | piove; fa freddo; quindi piove e fa freddo |
| sillogismo ipotetico | $p \to q$, $q \to r$ | $p \to r$ | se piove esco con l'ombrello; se esco con l'ombrello lo perdo; quindi se piove lo perdo |
| sillogismo disgiuntivo | $p \vee q$, $\neg p$ | $q$ | è a casa o in biblioteca; non è a casa; quindi è in biblioteca |

E le due **fallacie**, che non sono valide:

| Fallacia | Forma | Perché non vale |
|---|---|---|
| affermazione del conseguente | $p \to q$, $q$, quindi $p$ | la strada può essere bagnata per un altro motivo |
| negazione dell'antecedente | $p \to q$, $\neg p$, quindi $\neg q$ | anche se non piove, la strada può essere bagnata |

Per tutte e due il controesempio è la stessa riga: $p$ falsa e $q$ vera.

::: prova Quale regola usa: «Se il treno è in ritardo, perdo la coincidenza. Non ho perso la coincidenza. Quindi il treno non era in ritardo»?
Modus tollens: $p \to q,\ \neg q \;\therefore\; \neg p$.
:::

> [!RICORDA]
> - Modus ponens afferma l'ipotesi, modus tollens nega la conclusione.
> - Le fallacie affermano la conclusione o negano l'ipotesi: controesempio $p$ falsa, $q$ vera.

## Riconoscere la regola

Nei quiz capita di dover dire quale regola usa un ragionamento scritto a parole, o se è una fallacia. Il metodo: si dà una lettera a ogni frase semplice, si scrive la forma, e la si confronta con le due tabelle.

> [!ESEMPIO] · Sei ragionamenti da classificare
> 1. «Se Luca studia, passa l'esame. Luca non ha passato l'esame. Quindi Luca non ha studiato.» Con $p$ = «Luca studia», $q$ = «passa»: La forma è $p \to q,\ \neg q \;\therefore\; \neg p$. **Modus tollens.**
> 2. «Oggi c'è lezione o c'è laboratorio. Oggi non c'è lezione. Quindi c'è laboratorio.» La forma è $p \vee q,\ \neg p \;\therefore\; q$. **Sillogismo disgiuntivo.**
> 3. «Se Anna vince, festeggia. Anna festeggia. Quindi Anna ha vinto.» La forma è $p \to q,\ q \;\therefore\; p$. **Affermazione del conseguente**, non valida: può festeggiare per un altro motivo.
> 4. «Piove e fa freddo. Quindi fa freddo.» La forma è $p \wedge q \;\therefore\; q$. **Semplificazione.**
> 5. «Se compro il libro, studio. Se studio, passo. Quindi, se compro il libro, passo.» **Sillogismo ipotetico.** È la regola dell'autoverifica del capitolo 1, domanda 20.
> 6. «Se nevica, la scuola chiude. Non nevica. Quindi la scuola non chiude.» La forma è $p \to q,\ \neg p \;\therefore\; \neg q$. **Negazione dell'antecedente**, non valida: la scuola può chiudere per uno sciopero.

> [!TRAPPOLA] L'ordine delle premesse non conta
> «Luca non ha passato l'esame. Se Luca studia, passa. Quindi non ha studiato» è sempre modus tollens. Si guarda la forma, non l'ordine in cui le frasi sono scritte.

::: prova Quale regola usa: «Ho preso 30. Quindi ho preso 30 oppure 29»?
Addizione: $p \;\therefore\; p \vee q$, con una $q$ qualunque.
:::

> [!RICORDA]
> - Lettere alle frasi semplici, forma, confronto con le tabelle. L'ordine delle premesse non conta.

## Quando un'argomentazione non è valida

Un'argomentazione è **valida** se, ogni volta che le premesse sono tutte vere, anche la conclusione è vera. Per dire che **non** lo è basta una riga della tavola con le premesse vere e la conclusione falsa. Le righe in cui le premesse sono tutte vere si chiamano **righe critiche** ([lezione 08](08_argomentazioni_regole_inferenza.html)).

> [!ESEMPIO] · Gli Skyscrapers (autoverifica del capitolo 1, domanda 9)
> **Il testo.** «Se gli Skyscrapers vincono, mangio il cappello. Se mangio il cappello, sarò sazio. Quindi, se sono sazio, gli Skyscrapers hanno vinto.»
>
> **Le lettere.** $p$ = «gli Skyscrapers vincono», $q$ = «mangio il cappello», $r$ = «sono sazio». La forma: $p \to q,\ q \to r \;\therefore\; r \to p$.
>
> **Il controesempio.** Perché la conclusione sia falsa servono $r$ vera e $p$ falsa. Con $p$ falsa la prima premessa è vera; con $r$ vera la seconda è vera, qualunque sia $q$. La riga con $p$ e $q$ false e $r$ vera ha le premesse vere e la conclusione falsa: **non valida**. È la riga della soluzione ufficiale.

La strada più corta, come qui, è partire dalla **conclusione falsa**: si fissano le lettere che la rendono falsa, poi si prova a rendere vere tutte le premesse con le lettere che restano. Se ci si riesce, è un controesempio.

```widget logica
titolo: Gli Skyscrapers: le righe critiche e il controesempio
modo: argomento
premesse: p → q; q → r
conclusione: r → p
```

Il controllo trova due controesempi: oltre a quello del libro, anche la riga con $p$ falsa e le altre due vere. Ne basta uno.

::: prova Valida o no: «Se studio, passo. Se passo, festeggio. Non festeggio. Quindi non studio»?
Valida. Per la conclusione falsa servirebbe «studio» vero; allora per la prima premessa «passo» è vero, per la seconda «festeggio» è vero, e la terza premessa è falsa. Non c'è controesempio.
:::

> [!RICORDA]
> - Non valida = esiste una riga con premesse vere e conclusione falsa.
> - Si parte dalla conclusione falsa e si cerca di rendere vere le premesse.

## Catene di regole

Un'argomentazione lunga si dimostra valida anche senza tavola, con una **catena** di passi: ognuno applica una regola alle premesse o ai passi già ottenuti. È la stessa cosa che fa una dimostrazione, in piccolo.

> [!ESEMPIO] · Quattro premesse
> **Premesse.** (1) $p \vee q$; (2) $p \to r$; (3) $\neg r$; (4) $q \to s$. **Conclusione** da ottenere: $s$.
>
> **Passo 5.** Da (2) e (3), modus tollens: $\neg p$.
>
> **Passo 6.** Da (1) e (5), sillogismo disgiuntivo: $q$.
>
> **Passo 7.** Da (4) e (6), modus ponens: $s$.

A parole: il bug è nel ciclo ($p$) o nella lettura ($q$); se fosse nel ciclo il contatore sarebbe sbagliato; il contatore è giusto; quindi è nella lettura, e allora `scanf` restituisce 0.

> [!METODO] Costruire una catena
> 1. Dai una lettera a ogni frase semplice e numera le premesse.
> 2. Parti dalle premesse più corte, come una lettera da sola o la sua negazione: sono quelle che sbloccano le frecce.
> 3. Cerca una freccia che le usa: con la parte sinistra vera, modus ponens; con la destra falsa, modus tollens.
> 4. Scrivi ogni passo con il numero delle righe usate e il nome della regola.
> 5. Fermati quando ottieni la conclusione.

::: prova Dalle premesse $p \to q,\ q \to r,\ p$ ottieni $r$ in due passi.
Sillogismo ipotetico da $p \to q$ e $q \to r$: $p \to r$. Poi modus ponens con $p$: $r$. Oppure modus ponens due volte: $q$, poi $r$.
:::

> [!RICORDA]
> - Catena: un passo per riga, ognuno con le righe usate e la regola.

## La dimostrazione diretta con i numeri

Lo schema della [lezione 13](13_dimostrazioni_dirette_controesempi.html), in quattro mosse: suppongo l'ipotesi; la riscrivo con la definizione; faccio i conti; riconosco la forma della tesi. Tre esempi nuovi.

> [!ESEMPIO] · Il quoziente di due razionali (autoverifica del capitolo 2, domanda 4)
> **La frase.** Il quoziente di due razionali, con il divisore diverso da zero, è razionale.
>
> **Suppongo e riscrivo.** I due razionali sono frazioni di interi, $x = \frac{m_1}{n_1}$ e $y = \frac{m_2}{n_2}$, con i denominatori diversi da zero. Siccome $y \neq 0$, anche $m_2 \neq 0$.
>
> **Conti.** $\frac{x}{y} = \frac{m_1}{n_1} \cdot \frac{n_2}{m_2} = \frac{m_1 n_2}{n_1 m_2}$.
>
> **Riconosco la tesi.** Sopra e sotto ci sono interi, e il denominatore non è zero: è una frazione di interi, quindi un razionale.

> [!ESEMPIO] · Due multipli di 3
> **La frase.** Il prodotto di due multipli di 3 è multiplo di 9.
>
> **Suppongo e riscrivo.** I due numeri sono $n = 3a$ e $m = 3b$, con due interi diversi, perché i due multipli possono essere diversi.
>
> **Conti.** $nm = 9ab$.
>
> **Riconosco la tesi.** $ab$ è un intero, quindi $nm$ è 9 per un intero: multiplo di 9.

> [!ESEMPIO] · Tre interi consecutivi
> **La frase.** La somma di tre interi consecutivi è un multiplo di 3.
>
> **Riscrivo.** Qui non c'è un «se»: tre interi consecutivi qualsiasi sono $n,\ n + 1,\ n + 2$.
>
> **Conti.** $n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$: un multiplo di 3.

> [!TRAPPOLA] Una lettera sola per due numeri
> Usare la stessa $k$ per due numeri pari diversi vuol dire supporre che siano uguali. La dimostrazione varrebbe solo per due numeri uguali. Ogni numero ha la sua lettera.

::: prova Dimostra in modo diretto: se $n$ è pari, allora $n^2$ è multiplo di 4 (esercizio 1 di Cardone).
$n = 2k$, quindi $n^2 = 4k^2$: 4 per l'intero $k^2$.
:::

> [!RICORDA]
> - Suppongo, riscrivo con la definizione, conti, riconosco la forma della tesi.
> - Una lettera diversa per ogni numero.

## La dimostrazione diretta con gli insiemi

Con gli insiemi la definizione da usare è quella di **sottoinsieme**: $A \subseteq B$ vuol dire che ogni elemento del primo insieme sta nel secondo. Quindi la dimostrazione comincia sempre prendendo un elemento qualsiasi del primo, e finisce dicendo che sta nel secondo. Per un'uguaglianza si fanno le due inclusioni.

> [!ESEMPIO] · $A \cup \varnothing = A$ (esercizio 49 del libro)
> **Prima inclusione.** Sia $x$ in $A \cup \varnothing$. Allora $x$ sta in $A$ oppure nel vuoto; nel vuoto non ci sta niente, quindi $x$ sta in $A$.
>
> **Seconda inclusione.** Sia $x$ in $A$. Allora sta in $A$ oppure nel vuoto, cioè nell'unione.

> [!ESEMPIO] · Dall'insieme delle parti (esercizio 30 del libro)
> **La frase.** Se $\mathcal{P}(X) \subseteq \mathcal{P}(Y)$, allora $X \subseteq Y$.
>
> **La dimostrazione.** Ogni insieme è sottoinsieme di sé stesso, quindi $X$ è un elemento di $\mathcal{P}(X)$. Per l'ipotesi è anche un elemento di $\mathcal{P}(Y)$, cioè un sottoinsieme di $Y$.

Qui l'elemento da usare è l'insieme $X$ stesso: gli elementi di $\mathcal{P}(X)$ sono insiemi.

> [!ESEMPIO] · Una frase falsa (esercizio 60 del libro)
> **La frase.** Per tutti gli insiemi, $A \triangle (B \cup C) = (A \triangle B) \cup (A \triangle C)$, dove $\triangle$ è la differenza simmetrica: gli elementi che stanno in uno solo dei due insiemi.
>
> **Il controesempio.** Prendo $A = \{1, 2, 3\}$, $B = \{2, 3, 4\}$ e $C = \{1, 2, 4\}$. A sinistra $B \cup C = \{1, 2, 3, 4\}$, e $A \triangle \{1, 2, 3, 4\} = \{4\}$. A destra le due differenze simmetriche sono $\{1, 4\}$ e $\{3, 4\}$, e la loro unione è $\{1, 3, 4\}$. I due insiemi sono diversi.

```grafico
titolo: Lo schema della dimostrazione di un'inclusione. Si prende un elemento qualsiasi di A (il punto), si usano le definizioni per spostarlo passo per passo, e si arriva a dire che sta in B. Siccome x era qualsiasi, vale per tutti gli elementi di A
x: 0 12.4
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
cerchio: 3.2 2.3 1.7 | blu
cerchio: 9.2 2.3 1.9 | verde
punto: 3.2 2.3 | accento
testo: 3.2 2.9 | accento | "x qualsiasi"
testo: 3.2 4.3 | blu | "A"
testo: 9.2 4.4 | verde | "B"
freccia: 4.3 2.3 8.0 2.3 | grigio
testo: 6.2 2.75 | grigio | "definizioni, ipotesi"
punto: 9.2 2.3 | accento
testo: 9.2 2.9 | accento | "x"
```

::: prova Dimostra che $A \cap B \subseteq A \cup B$.
Sia $x$ in $A \cap B$. Allora sta in $A$, e anche in $B$. Quindi sta in uno dei due, cioè nell'unione.
:::

> [!RICORDA]
> - Inclusione: si prende un elemento qualsiasi del primo insieme e si mostra che sta nel secondo. Uguaglianza: le due inclusioni.
> - Una frase falsa sugli insiemi si smentisce con insiemi concreti e piccoli.

## Controesempi

Un «per ogni» falso si smentisce con **un solo** esempio che non funziona: è un controesempio ([lezione 13](13_dimostrazioni_dirette_controesempi.html)). Gli esempi che funzionano, anche tanti, non dimostrano niente.

> [!ESEMPIO] · I numeri $2^n - 1$
> **La frase.** Per ogni primo $n$, $2^n - 1$ è primo.
>
> **Gli esempi che funzionano.** $n = 2, 3, 5, 7$ danno 3, 7, 31, 127: tutti primi.
>
> **Il controesempio.** $n = 11$ dà $2047 = 23 \cdot 89$. La frase è falsa.

::: prova La frase «per ogni intero $n$, $n^2 \ge n$» è vera o falsa?
Vera per gli interi: per $n \le 0$ il quadrato è almeno 0, quindi almeno $n$; per $n \ge 1$, $n^2 = n \cdot n \ge n$. Con i reali sarebbe falsa: $n = \frac{1}{2}$ dà $\frac{1}{4} < \frac{1}{2}$.
:::

> [!RICORDA]
> - Un controesempio basta per smentire un «per ogni». Gli esempi non bastano mai per dimostrarlo.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\therefore$ | «quindi» | introduce la conclusione | $p \to q,\ p\ \therefore\ q$ |
| $p \to q$ | «se p allora q» | freccia, falsa solo con p vera e q falsa | modus ponens |
| $A \subseteq B$ | «A contenuto in B» | ogni elemento di A sta in B | $A \cap B \subseteq A$ |
| $\mathcal{P}(X)$ | «insieme delle parti di X» | l'insieme dei sottoinsiemi di X | $X \in \mathcal{P}(X)$ |
| $A \triangle B$ | «differenza simmetrica» | elementi in uno solo dei due | $\{1,2\} \triangle \{2,3\} = \{1,3\}$ |

## Verso l'esame

Le regole dell'esame sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; la domanda aperta è facoltativa. Nelle simulazioni 2023/24 le domande di logica chiedono di valutare formule e argomentazioni: le abilità di questa lezione. Di questa lezione servono:

1. **riconoscere le regole e le fallacie** in un ragionamento scritto a parole;
2. **trovare in fretta un controesempio**, partendo dalla conclusione falsa;
3. **scrivere una dimostrazione diretta corta**, con le definizioni, per la domanda aperta.

### Una domanda sul modello, letta insieme

**Il testo**, sul modello delle domande sulle argomentazioni delle simulazioni 2023/24: «Quale di queste argomentazioni è valida? (A) $p \to q,\ q \;\therefore\; p$. (B) $p \vee q,\ q \to r,\ \neg p \;\therefore\; r$. (C) $p \to q,\ \neg p \;\therefore\; \neg q$. (D) $p \to (q \vee r),\ p \;\therefore\; q$. (E) $(p \wedge q) \to r,\ p \;\therefore\; r$.»

**In pratica chiede:** per ogni opzione, se c'è una riga con le premesse vere e la conclusione falsa.

> [!ESEMPIO] · la soluzione, opzione per opzione
> **(A)** È l'affermazione del conseguente: controesempio $p$ falsa, $q$ vera.
>
> **(B)** Da $p \vee q$ e $\neg p$, sillogismo disgiuntivo: $q$. Da $q \to r$ e $q$, modus ponens: $r$. **Valida.**
>
> **(C)** È la negazione dell'antecedente: controesempio $p$ falsa, $q$ vera.
>
> **(D)** Con $p$ e $r$ vere e $q$ falsa le premesse sono vere, perché $q \vee r$ è vera, e la conclusione è falsa.
>
> **(E)** Con $p$ vera e $q$ falsa la prima premessa è vera comunque, e la conclusione può essere falsa.
>
> La risposta è **(B)**. L'ho controllato con un programma su tutte le 8 righe.

## Quiz

```quiz
D: Da $p \to q$ e $\neg q$, quale regola permette di concludere $\neg p$?
+ modus tollens
- modus ponens
- sillogismo disgiuntivo
- negazione dell'antecedente
- sillogismo ipotetico
= Si nega la conclusione della freccia e si ricava la negazione dell'ipotesi. La risposta più insidiosa è la quarta: è il nome di una fallacia, con $\neg p$ tra le premesse e non nella conclusione.

D: Quale di questi ragionamenti **non** è valido?
+ «Se Anna vince, festeggia. Festeggia. Quindi ha vinto.»
- «Se Anna vince, festeggia. Vince. Quindi festeggia.»
- «Se Anna vince, festeggia. Non festeggia. Quindi non ha vinto.»
- «Anna vince o pareggia. Non vince. Quindi pareggia.»
- «Anna vince e festeggia. Quindi festeggia.»
= È l'affermazione del conseguente: può festeggiare per un altro motivo. Le altre sono, in ordine, modus ponens, modus tollens, sillogismo disgiuntivo e semplificazione.

D: L'argomentazione $p \to q$, $q \to r$, quindi $r \to p$ non è valida. Quale riga lo mostra?
+ $p$ falsa, $q$ falsa, $r$ vera
- $p$ vera, $q$ vera, $r$ vera
- $p$ vera, $q$ falsa, $r$ falsa
- $p$ falsa, $q$ falsa, $r$ falsa
- nessuna: è valida
= È la soluzione ufficiale della domanda 9 dell'autoverifica del capitolo 1: premesse vere, conclusione $r \to p$ falsa. La risposta più insidiosa è la terza: con $p$ vera e $q$ falsa la prima premessa è falsa, quindi la riga non è critica.

D: Con le premesse $p \to q$, $q \to r$, $\neg r$, quali due regole portano a $\neg p$?
+ sillogismo ipotetico, poi modus tollens
- modus ponens, poi sillogismo disgiuntivo
- addizione, poi modus tollens
- semplificazione, poi modus ponens
- non si può ottenere
= Dal sillogismo ipotetico $p \to r$, poi con $\neg r$ il modus tollens dà $\neg p$. La risposta più insidiosa è l'ultima: l'argomentazione è valida, come quella delle Olimpiadi della lezione 12.

D: Come comincia la dimostrazione diretta di «se $n$ è dispari, allora $n^2$ è dispari»?
+ Supponiamo $n$ dispari: $n = 2k + 1$ per un intero $k$.
- Supponiamo $n^2$ dispari: $n^2 = 2k + 1$.
- Supponiamo $n$ pari: $n = 2k$.
- Proviamo con $n = 3$: $n^2 = 9$ è dispari.
- Supponiamo $n^2$ pari e cerchiamo una contraddizione.
= Si suppone l'ipotesi e la si riscrive con la definizione. La risposta più insidiosa è la quarta: un esempio non dimostra un «per ogni».

D: Per dimostrare $A \subseteq B$ in modo diretto, da dove si parte?
+ da un elemento qualsiasi di $A$, per mostrare che sta in $B$
- da un elemento qualsiasi di $B$, per mostrare che sta in $A$
- da un elemento che sta in tutti e due
- dall'insieme vuoto
- da un esempio concreto di $A$ e $B$
= È la definizione di sottoinsieme. La risposta più insidiosa è la seconda, che dimostra l'inclusione al contrario.

D: Quale frase è smentita dal controesempio $n = 11$?
+ per ogni primo $n$, $2^n - 1$ è primo
- per ogni primo $n$, $n + 2$ è primo
- per ogni intero $n$, $n^2 \ge n$
- per ogni primo $n$, $2^n$ è pari
- esiste un primo $n$ con $2^n - 1$ primo
= $2^{11} - 1 = 2047 = 23 \cdot 89$. La risposta più insidiosa è l'ultima: è un «esiste», vero (con $n = 2$), e un controesempio non smentisce un «esiste».

D: Quante righe ha la tavola di verità di un'argomentazione con le lettere $p$, $q$, $r$?
N: 8
= Ogni lettera raddoppia le righe: $2^3 = 8$.
```

## Esercizi

::: esercizio base Riscaldamento: dai un nome alla regola
(a) «Ho studiato e ho dormito. Quindi ho studiato.» (b) «Il file è sul desktop o nei download. Non è sul desktop. Quindi è nei download.» (c) «Se il codice compila, lo consegno. Il codice compila. Quindi lo consegno.» (d) «Se il codice compila, lo consegno. Non compila. Quindi non lo consegno.»
::: soluzione
(a) Semplificazione. (b) Sillogismo disgiuntivo. (c) Modus ponens. (d) Negazione dell'antecedente: **non valida**, potrei consegnarlo lo stesso.
:::

::: esercizio base Riscaldamento: il controesempio
Trova una riga che mostra che $p \to q,\ \neg p \to r \;\therefore\; q$ non è valida.
::: soluzione
Conclusione falsa: $q$ falsa. Per la prima premessa serve allora $p$ falsa; per la seconda, con $p$ falsa, serve $r$ vera. La riga con $p$ e $q$ false e $r$ vera ha le premesse vere e la conclusione falsa.
:::

::: esercizio medio Una catena
Premesse: (1) $p \to q$; (2) $r \to \neg q$; (3) $r$. Dimostra $\neg p$ con una catena, nominando le regole.
::: soluzione
(4) Da (2) e (3), modus ponens: $\neg q$. (5) Da (1) e (4), modus tollens: $\neg p$.
:::

::: esercizio medio Dimostrazioni dirette
Dimostra in modo diretto: (a) se $n$ è dispari e $m$ è pari, allora $n + m$ è dispari (Cardone, esempio 1); (b) se $n$ è dispari, allora $n^2 - 1$ è multiplo di 4.
::: soluzione
(a) $n = 2\ell + 1$, $m = 2k$: $n + m = 2(\ell + k) + 1$, dispari. (b) $n = 2k + 1$: $n^2 - 1 = 4k^2 + 4k = 4(k^2 + k)$, multiplo di 4. In realtà è anche multiplo di 8, perché $k^2 + k = k(k + 1)$ è pari: ho controllato con un programma tutti i dispari da −999 a 999.
:::

::: esercizio esame Un'uguaglianza di insiemi, per la domanda aperta
Dimostra che $A \cap (A \cup B) = A$ per tutti gli insiemi $A$ e $B$, con le due inclusioni.
::: soluzione
**Prima inclusione.** Sia $x$ in $A \cap (A \cup B)$. Per la definizione di intersezione $x$ sta in $A$, ed è quello che serviva.

**Seconda inclusione.** Sia $x$ in $A$. Allora sta in $A$ oppure in $B$, cioè nell'unione (addizione). Sta in $A$ e in $A \cup B$, quindi nell'intersezione (congiunzione).

Le due inclusioni danno l'uguaglianza. Nota le regole usate: le stesse della logica, applicate a «$x$ sta in…».
:::

::: esercizio difficile Vero o falso, con dimostrazione o controesempio
(a) Per tutti gli insiemi, $A - (B \cup C) = (A - B) \cap (A - C)$. (b) Per tutti gli insiemi, $A - (B \cap C) = (A - B) \cap (A - C)$.
::: soluzione
(a) **Vera.** Un elemento sta a sinistra se sta in $A$ e non sta nell'unione, cioè (De Morgan) non sta in $B$ **e** non sta in $C$. Questo vuol dire stare in $A - B$ e in $A - C$, cioè a destra. I passaggi valgono in tutti e due i versi.

(b) **Falsa.** Con $A = \{1, 2\}$, $B = \{1\}$, $C = \{2\}$: $B \cap C$ è vuoto, quindi a sinistra c'è $A = \{1, 2\}$; a destra $\{2\} \cap \{1\} = \varnothing$. La versione giusta ha l'unione: $(A - B) \cup (A - C)$.
:::

## Domande di ripasso

::: domanda Quali sono le sette regole di inferenza, e quali le due fallacie?
Modus ponens, modus tollens, addizione, semplificazione, congiunzione, sillogismo ipotetico, sillogismo disgiuntivo. Fallacie: affermazione del conseguente e negazione dell'antecedente.
:::

::: domanda Come si dimostra che un'argomentazione non è valida?
Con una riga in cui tutte le premesse sono vere e la conclusione è falsa. Conviene partire dalla conclusione falsa.
:::

::: domanda Quali sono le quattro mosse di una dimostrazione diretta?
Suppongo l'ipotesi, la riscrivo con la definizione, faccio i conti, riconosco la forma della tesi.
:::

::: domanda Come si dimostra un'uguaglianza tra insiemi?
Con le due inclusioni: ogni elemento del primo sta nel secondo, e viceversa.
:::

::: domanda Perché un esempio non dimostra un «per ogni», mentre un controesempio lo smentisce?
Perché il «per ogni» deve valere per tutti, e un caso solo non dice niente sugli altri; ma un caso solo in cui è falso basta a renderlo falso.
:::

## Glossario

```glossario
Regola di inferenza | Argomentazione valida corta, usata come passo nelle dimostrazioni.
Fallacia | Ragionamento che sembra una regola ma non è valido.
Argomentazione valida | Ogni volta che le premesse sono vere, la conclusione è vera.
Riga critica | Riga della tavola in cui tutte le premesse sono vere.
Controesempio | Caso che rende vere le premesse e falsa la conclusione, o che smentisce un «per ogni».
Catena di regole | Sequenza di passi, ognuno ottenuto con una regola da premesse o passi precedenti.
Dimostrazione diretta | Si suppone l'ipotesi e, con definizioni e teoremi, si arriva alla tesi.
Differenza simmetrica | Gli elementi che stanno in uno solo dei due insiemi.
```

## Checklist

```checklist
- So riconoscere le sette regole di inferenza e le due fallacie in un ragionamento a parole.
- So trovare il controesempio di un'argomentazione non valida partendo dalla conclusione falsa.
- So scrivere una catena di regole con i numeri delle righe e i nomi delle regole.
- So scrivere una dimostrazione diretta con pari, dispari, multipli e razionali.
- So dimostrare un'inclusione e un'uguaglianza tra insiemi.
- So smentire una frase falsa con un controesempio concreto.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*): autoverifica del capitolo 1, domande 9 e 20; autoverifica del capitolo 2, domanda 4; §2.1, esercizi 30, 49 e 60; con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: i testi li ho ricostruiti dalle soluzioni e tradotti.
- F. Cardone, «Tecniche di dimostrazione» (Moodle del canale A): esempio 1 ed esercizio 1.
- Diario del canale B: «Lezione 16. Lunedì 02 Novembre ore 09-11. Esercizi riassuntivi su regole proposizionali e dimostrazioni dirette (Quiz)». Appunti scritti dopo la lezione, senza sapere quali esercizi ha usato il docente.
- I sei ragionamenti da classificare, gli esempi con i multipli e con $2^n - 1$, la domanda sul modello, i quiz e gli esercizi senza indicazione sono di questi appunti. Le argomentazioni e i conti li ho controllati con un programma.
