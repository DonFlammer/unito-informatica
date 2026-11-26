---
corso: FDA
lezione: "23"
titolo: "Concatenazione, sottostringhe e proprietà delle relazioni"
data: 2026-11-23
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 23 · Libro, parte 2, fine del §3.2 e §3.3
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 23 di Fondamenti dell'Informatica (canale B): la concatenazione di due stringhe, le
  sottostringhe, l'inversione di una stringa come funzione biiettiva, la concatenazione come funzione suriettiva e non
  iniettiva; le relazioni su un insieme, il loro grafo orientato, le relazioni riflessive, simmetriche e
  antisimmetriche.
lede: >-
  Si chiude la parte sulle stringhe con le due operazioni che servono per automi e grammatiche: attaccare due stringhe
  e riconoscere un pezzo dentro un'altra. Poi cominciano le relazioni, con tre proprietà che nel quiz d'esame si
  controllano guardando le frecce di un disegno.
materiale: libro
scheda:
  Libro: Johnsonbaugh, parte 2, §3.2 dalla concatenazione alla fine e §3.3 fino all'esempio 3.3.15
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore e mezza
fonte: >-
  Diario delle lezioni del canale B (lezione 24 del docente); risposte ufficiali alle domande di ripasso e agli
  esercizi dei §3.2 e §3.3 e all'autoverifica del capitolo 3 (appendice pubblicata sul Moodle del canale A);
  simulazione d'esame 1 del 2023/24, quiz sulle proprietà di una relazione
appunti_html: appunti/FDA/23_stringhe_concatenazione_relazioni.html
genera_html: true
---

## In breve

- La **concatenazione** di due stringhe si ottiene scrivendo la prima e subito dopo la seconda: «casa» e «matta» danno «casamatta». Le lunghezze si sommano, e l'ordine conta.
- Una **sottostringa** è un pezzo di simboli **consecutivi**: «forma» è una sottostringa di «informatica», «forca» no.
- **Rovesciare** una stringa è una funzione **biiettiva** dall'insieme di tutte le stringhe in sé: rovesciando due volte si torna alla partenza.
- La concatenazione, vista come funzione che a una **coppia** di stringhe ne abbina una, è **suriettiva** ma **non iniettiva**: una stringa lunga $n$ si ottiene da $n + 1$ coppie.
- Una **relazione** su un insieme $X$ è un insieme di coppie di elementi di $X$. Si disegna con un punto per elemento e una freccia per coppia.
- **Riflessiva**: ogni punto ha un cappio, cioè una freccia verso sé stesso. **Simmetrica**: ogni freccia ha la freccia di ritorno. **Antisimmetrica**: tra due punti diversi non ci sono mai andata e ritorno insieme.
- «Antisimmetrica» non vuol dire «non simmetrica»: una relazione può essere tutte e due le cose, o nessuna delle due.

> [!CANALI]
> Nel canale B è la lezione di lunedì 23/11, dalle 11 alle 13. Per il docente è la lezione 24: qui è la 23. Il diario del canale B dice: §3.2 dalla 3.2.26 (definizione della concatenazione di stringhe) fino alla fine, con la definizione di sottostringa, iniettività e suriettività dell'inversione di stringhe, suriettività e non iniettività della composizione di stringhe; poi §3.3, relazioni riflessive, simmetriche e antisimmetriche, fino all'esempio 3.3.15, una relazione che è sia simmetrica sia antisimmetrica.
>
> **Che cosa non so.** Il libro non ce l'ho; ho le risposte ufficiali alle domande di ripasso e a una parte degli esercizi. Le definizioni sono quelle delle risposte ufficiali, tradotte. Gli esempi sono miei, salvo dove dico il contrario: i numeri degli esempi del libro non li posso abbinare uno per uno. L'esempio 3.3.15, che il diario descrive, c'è.
>
> **Che cosa resta fuori.** Relazioni transitive, ordini parziali, relazione inversa e composizione di relazioni vengono dopo l'esempio 3.3.15: non sono in questa lezione.
>
> **Per chi segue Matematica Discreta.** Le stesse proprietà sono nella lezione [D03](../MDAG/D03_prodotto_cartesiano_relazioni.html), insieme alla transitiva e alle relazioni di equivalenza. Qui i nomi e l'ordine sono quelli del libro di Fondamenti.

## Attaccare due stringhe: la concatenazione

Dalle stringhe della [lezione 22](22_funzioni_sequenze_stringhe.html) se ne costruiscono altre attaccandole una dopo l'altra. Prendi $\gamma = aab$ e $\theta = cabd$. Scrivendo prima tutta $\gamma$ e poi tutta $\theta$ viene $aabcabd$. Nell'ordine opposto viene $cabdaab$.

```grafico
titolo: La concatenazione di aab e cabd. I simboli della prima stringa restano nell'ordine in cui erano, seguiti da quelli della seconda: niente si mescola e niente si perde, quindi le lunghezze si sommano
x: 0 12
y: 0 5.3
assi: no
griglia: no
proporzioni: libere
testo: 0.45 3.9 | blu | "$\gamma$"
poligono: 0.9 3.4 1.9 3.4 1.9 4.4 0.9 4.4 | blu | tenue
poligono: 1.9 3.4 2.9 3.4 2.9 4.4 1.9 4.4 | blu | tenue
poligono: 2.9 3.4 3.9 3.4 3.9 4.4 2.9 4.4 | blu | tenue
testo: 1.4 3.9 | blu | "a"
testo: 2.4 3.9 | blu | "a"
testo: 3.4 3.9 | blu | "b"
testo: 5.75 3.9 | verde | "$\theta$"
poligono: 6.2 3.4 7.2 3.4 7.2 4.4 6.2 4.4 | verde | tenue
poligono: 7.2 3.4 8.2 3.4 8.2 4.4 7.2 4.4 | verde | tenue
poligono: 8.2 3.4 9.2 3.4 9.2 4.4 8.2 4.4 | verde | tenue
poligono: 9.2 3.4 10.2 3.4 10.2 4.4 9.2 4.4 | verde | tenue
testo: 6.7 3.9 | verde | "c"
testo: 7.7 3.9 | verde | "a"
testo: 8.7 3.9 | verde | "b"
testo: 9.7 3.9 | verde | "d"
testo: 1.75 1.4 | grigio | "$\gamma\theta$"
poligono: 2.5 0.9 3.5 0.9 3.5 1.9 2.5 1.9 | blu | tenue
poligono: 3.5 0.9 4.5 0.9 4.5 1.9 3.5 1.9 | blu | tenue
poligono: 4.5 0.9 5.5 0.9 5.5 1.9 4.5 1.9 | blu | tenue
poligono: 5.5 0.9 6.5 0.9 6.5 1.9 5.5 1.9 | verde | tenue
poligono: 6.5 0.9 7.5 0.9 7.5 1.9 6.5 1.9 | verde | tenue
poligono: 7.5 0.9 8.5 0.9 8.5 1.9 7.5 1.9 | verde | tenue
poligono: 8.5 0.9 9.5 0.9 9.5 1.9 8.5 1.9 | verde | tenue
testo: 3 1.4 | blu | "a"
testo: 4 1.4 | blu | "a"
testo: 5 1.4 | blu | "b"
testo: 6 1.4 | verde | "c"
testo: 7 1.4 | verde | "a"
testo: 8 1.4 | verde | "b"
testo: 9 1.4 | verde | "d"
freccia: 2.4 3.3 3.9 2.05 | blu
freccia: 8.2 3.3 7.6 2.05 | verde
testo: 2.4 4.8 | blu | "lunghezza 3"
testo: 8.2 4.8 | verde | "lunghezza 4"
testo: 6.0 0.4 | grigio | "lunghezza 3 + 4 = 7"
```

> [!DEF] Concatenazione (libro, §3.2, domanda di ripasso 15)
> La **concatenazione** delle stringhe $\alpha$ e $\beta$ è la stringa formata da $\alpha$ seguita da $\beta$. Si scrive $\alpha\beta$.

**Come si legge.** Non c'è un segno di operazione: due nomi di stringhe scritti attaccati vogliono dire «prima tutti i simboli della prima, poi tutti quelli della seconda». Le lettere greche sono **nomi** di stringhe, come $x$ è il nome di un numero: non sono simboli dell'insieme $X$.

Quattro fatti, che si vedono sull'esempio:

1. **Le lunghezze si sommano**: $|\alpha\beta| = |\alpha| + |\beta|$. Qui $3 + 4 = 7$.
2. **La stringa vuota non cambia niente**: $\alpha\lambda = \lambda\alpha = \alpha$. Attaccare zero simboli lascia la stringa com'è.
3. **L'ordine conta**: $aabcabd$ e $cabdaab$ sono diverse. In generale $\alpha\beta \ne \beta\alpha$.
4. **Le parentesi non servono**: $(\alpha\beta)\gamma$ e $\alpha(\beta\gamma)$ sono la stessa stringa, e si scrive $\alpha\beta\gamma$.

In altre parole la concatenazione è un'**operazione** sull'insieme $X^*$: prende due stringhe su $X$ e ne restituisce una terza, ancora su $X$. Somiglia alla somma dei numeri, con $\lambda$ al posto dello zero. La differenza è il punto 3: $2 + 5 = 5 + 2$, mentre con le stringhe scambiare i pezzi di solito cambia il risultato.

> [!NOTA] Per chi segue Matematica Discreta
> Con le parole della [D19](../MDAG/D19_operazioni_gruppi.html): la concatenazione è un'operazione associativa su $X^*$, con elemento neutro $\lambda$. Quindi $X^*$ è un **monoide**. Non è commutativo, e non è un gruppo: attaccando simboli la lunghezza non cala mai, quindi nessuna stringa non vuota ha un'inversa.

**Le potenze.** Nella lezione 22 l'esponente ripeteva un simbolo: $a^3 = aaa$. Con le parentesi ripete una stringa intera: $(ab)^3 = ababab$.

> [!TRAPPOLA] L'esponente vale solo per quello che ha subito a sinistra
> $ab^3$ è $abbb$: l'esponente tocca solo la $b$. $(ab)^3$ è $ababab$. E $(ab)^2 = abab$ non è $a^2b^2 = aabb$. Con i numeri le due scritture coincidono; con le stringhe no, perché l'ordine conta.

> [!ESEMPIO] Autoverifica del capitolo 3, domanda 10
> Il testo della domanda non ce l'ho. Le quattro risposte ufficiali sono $ccddccccdd$, $cccddccddc$, 5 e 20, e tornano con questi dati: $\alpha = ccddc$ e $\beta = c^3d^2$.
>
> - $\beta$ scritta per esteso è $cccdd$.
> - $\alpha\beta$: prima $ccddc$, poi $cccdd$. Viene $ccddccccdd$.
> - $\beta\alpha$: prima $cccdd$, poi $ccddc$. Viene $cccddccddc$, diversa dalla precedente.
> - $|\alpha| = 5$, e anche $|\beta| = 3 + 2 = 5$.
> - Una concatenazione di quattro pezzi, per esempio $\alpha\alpha\beta\alpha$, è lunga $5 + 5 + 5 + 5 = 20$.

::: prova Con $\alpha = ab$ e $\beta = ba$: scrivi $\alpha\beta$, $\beta\alpha$ e $\alpha\alpha\beta$. Quanto vale $|\alpha\beta\alpha|$?
$\alpha\beta = abba$, $\beta\alpha = baab$, $\alpha\alpha\beta = ababba$. La lunghezza di $\alpha\beta\alpha$ è $2 + 2 + 2 = 6$.
:::

> [!RICORDA]
> - $\alpha\beta$: tutta $\alpha$, poi tutta $\beta$. Le lunghezze si sommano.
> - $\lambda$ non cambia niente; l'ordine conta; le parentesi non servono.
> - $(ab)^2 = abab$, diverso da $a^2b^2$.

## Sottostringhe

Cercare una parola in un testo con Ctrl+F è chiedere se quella parola è una **sottostringa** del testo: se compare da qualche parte, tutta di seguito.

Nella stringa «informatica» compare «forma»: prima c'è «in», dopo c'è «tica». Compare anche «mati». Non compare «forca»: le sue lettere ci sono, e nell'ordine giusto, ma non una accanto all'altra.

```grafico
titolo: La stringa «informatica» tagliata in tre pezzi attaccati: «in», «forma», «tica». Il pezzo in mezzo è una sottostringa perché i suoi simboli sono tutti di seguito; i due pezzi intorno sono quello che resta prima e dopo
x: 0 12
y: 0.6 4.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.5 1.9 1.5 1.9 1.5 2.9 0.5 2.9 | grigio | tenue
poligono: 1.5 1.9 2.5 1.9 2.5 2.9 1.5 2.9 | grigio | tenue
poligono: 2.5 1.9 3.5 1.9 3.5 2.9 2.5 2.9 | ambra | tenue
poligono: 3.5 1.9 4.5 1.9 4.5 2.9 3.5 2.9 | ambra | tenue
poligono: 4.5 1.9 5.5 1.9 5.5 2.9 4.5 2.9 | ambra | tenue
poligono: 5.5 1.9 6.5 1.9 6.5 2.9 5.5 2.9 | ambra | tenue
poligono: 6.5 1.9 7.5 1.9 7.5 2.9 6.5 2.9 | ambra | tenue
poligono: 7.5 1.9 8.5 1.9 8.5 2.9 7.5 2.9 | grigio | tenue
poligono: 8.5 1.9 9.5 1.9 9.5 2.9 8.5 2.9 | grigio | tenue
poligono: 9.5 1.9 10.5 1.9 10.5 2.9 9.5 2.9 | grigio | tenue
poligono: 10.5 1.9 11.5 1.9 11.5 2.9 10.5 2.9 | grigio | tenue
testo: 1 2.4 | grigio | "i"
testo: 2 2.4 | grigio | "n"
testo: 3 2.4 | ambra | "f"
testo: 4 2.4 | ambra | "o"
testo: 5 2.4 | ambra | "r"
testo: 6 2.4 | ambra | "m"
testo: 7 2.4 | ambra | "a"
testo: 8 2.4 | grigio | "t"
testo: 9 2.4 | grigio | "i"
testo: 10 2.4 | grigio | "c"
testo: 11 2.4 | grigio | "a"
testo: 1.5 1.35 | grigio | "$\gamma$"
testo: 5.0 1.35 | ambra | "$\beta$"
testo: 9.5 1.35 | grigio | "$\delta$"
testo: 1.5 3.45 | grigio | "prima"
testo: 5.0 3.45 | ambra | "sottostringa"
testo: 9.5 3.45 | grigio | "dopo"
```

> [!DEF] Sottostringa (libro, §3.2, domanda di ripasso 16)
> Una stringa $\beta$ è una **sottostringa** della stringa $\alpha$ se esistono due stringhe $\gamma$ e $\delta$ con $\alpha = \gamma\beta\delta$.

**Come si legge.** $\gamma$ è il pezzo di $\alpha$ che viene prima di $\beta$, e $\delta$ quello che viene dopo. La definizione usa solo la concatenazione: «$\beta$ compare dentro $\alpha$» vuol dire che $\alpha$ si può scrivere come tre pezzi attaccati, con $\beta$ in mezzo. Per «forma» il pezzo prima è «in» e il pezzo dopo è «tica».

I due pezzi intorno possono essere vuoti. Da qui quattro casi particolari:

| Caso | Che cosa dice | Esempio in «informatica» |
|---|---|---|
| $\gamma = \lambda$ | $\beta$ sta all'inizio | «info» |
| $\delta = \lambda$ | $\beta$ sta alla fine | «tica» |
| $\gamma = \delta = \lambda$ | $\beta$ è tutta $\alpha$ | «informatica» |
| $\beta = \lambda$ | la stringa vuota sta dentro ogni stringa | $\lambda$ |

L'ultimo caso sorprende, ma viene dalla definizione: $\alpha = \lambda\lambda\alpha$, con niente prima, niente in mezzo e tutta la stringa dopo.

Per elencare **tutte** le sottostringhe conviene andare per lunghezza. Quelle di $abc$:

| Lunghezza | Sottostringhe |
|:-:|---|
| 0 | $\lambda$ |
| 1 | $a$, $b$, $c$ |
| 2 | $ab$, $bc$ |
| 3 | $abc$ |

Sono 7. Manca $ac$: la $a$ e la $c$ non sono vicine.

> [!TRAPPOLA] Sottostringa e sottosequenza
> Una **sottosequenza** ([lezione 22](22_funzioni_sequenze_stringhe.html)) tiene alcuni elementi nello stesso ordine, e ne può saltare altri. Una **sottostringa** non salta niente: è un pezzo tutto di seguito. «forca» è una sottosequenza di «informatica», non una sottostringa. Ogni sottostringa è anche una sottosequenza; il contrario non vale.

::: prova Elenca tutte le sottostringhe di $abab$. Quante sono?
Otto: $\lambda$; $a$, $b$; $ab$, $ba$; $aba$, $bab$; $abab$. Con le lettere ripetute lo stesso pezzo compare in più punti, ma si conta una volta: $ab$ compare due volte ed è una sola sottostringa.
:::

> [!RICORDA]
> - $\beta$ è sottostringa di $\alpha$ se $\alpha = \gamma\beta\delta$: un pezzo prima, $\beta$, un pezzo dopo.
> - I pezzi intorno possono essere vuoti: $\lambda$ e $\alpha$ stessa sono sottostringhe di $\alpha$.
> - Sottostringa: simboli consecutivi. Sottosequenza: nello stesso ordine, anche con salti.

## Rovesciare una stringa

Una stringa letta da destra a sinistra è un'altra stringa sugli stessi simboli. Si scrive $\alpha^R$, «alfa rovesciata»: se $\alpha = abb$, allora $\alpha^R = bba$. La stringa vuota e le stringhe di un solo simbolo, rovesciate, restano uguali. Lo stesso vale per le **palindrome**, come «radar» o $abba$, già incontrate nel [Lab06 di Programmazione I](../PROG1/Lab06_funzioni.html): sono le stringhe con $\alpha^R = \alpha$.

Il diario chiede di guardare l'inversione come **funzione**. Fissato $X = \{a, b\}$, a ogni stringa si abbina la sua rovesciata:

$$f : X^* \to X^*, \qquad f(\alpha) = \alpha^R$$

Le domande sono quelle della lezione 22: è iniettiva? È suriettiva?

```grafico
titolo: L'inversione sulle quattro stringhe di lunghezza 2. In ogni stringa di destra arriva esattamente una freccia: nessuna resta vuota e in nessuna ne arrivano due. Succede lo stesso per ogni lunghezza, perché rovesciare non cambia la lunghezza
x: 0 10
y: 0.3 5.5
assi: no
griglia: no
proporzioni: libere
testo: 2.6 4.95 | blu | "$\alpha$"
testo: 7.4 4.95 | verde | "$\alpha^R$"
testo: 2.6 4 | blu | "aa"
testo: 7.4 4 | verde | "aa"
testo: 2.6 3 | blu | "ab"
testo: 7.4 3 | verde | "ab"
testo: 2.6 2 | blu | "ba"
testo: 7.4 2 | verde | "ba"
testo: 2.6 1 | blu | "bb"
testo: 7.4 1 | verde | "bb"
freccia: 3.2 4.0 6.8 4.0 | ambra
freccia: 3.2 3.0 6.8 2.1 | ambra
freccia: 3.2 2.0 6.8 2.9 | ambra
freccia: 3.2 1.0 6.8 1.0 | ambra
```

Il fatto che decide tutto è questo: **rovesciando due volte si torna alla stringa di partenza**. In simboli, $(\alpha^R)^R = \alpha$.

> [!PROP] L'inversione è una biiezione
> La funzione $f(\alpha) = \alpha^R$, da $X^*$ a $X^*$, è iniettiva e suriettiva.

**Come si legge.** Due stringhe diverse hanno rovesciate diverse, e ogni stringa è la rovesciata di qualche stringa. Le due dimostrazioni seguono gli schemi della [lezione 13](13_dimostrazioni_dirette_controesempi.html).

> [!ESEMPIO] La dimostrazione, un passo per riga
> **Iniettiva.** Devo mostrare: se $f(\alpha) = f(\beta)$, allora $\alpha = \beta$.
>
> 1. Suppongo $f(\alpha) = f(\beta)$, cioè $\alpha^R = \beta^R$.
> 2. Due stringhe uguali, rovesciate, restano uguali: $(\alpha^R)^R = (\beta^R)^R$.
> 3. Rovesciare due volte riporta alla partenza: $\alpha = \beta$.
>
> **Suriettiva.** Devo mostrare: per ogni stringa $\beta$ c'è una stringa che $f$ manda in $\beta$.
>
> 1. Prendo una stringa $\beta$ qualunque.
> 2. Come candidata scelgo $\beta^R$.
> 3. Controllo: $f(\beta^R) = (\beta^R)^R = \beta$.

Una funzione biiettiva ha un'inversa. Qui l'inversa è $f$ stessa: per tornare indietro da una stringa rovesciata basta rovesciarla di nuovo.

Un'ultima regola, utile nei conti: la rovesciata di una concatenazione è la concatenazione delle rovesciate **in ordine scambiato**.

$$(\alpha\beta)^R = \beta^R\alpha^R$$

Con $\alpha = ab$ e $\beta = cd$: $(abcd)^R = dcba$, che è $dc$ seguito da $ba$. L'ultimo pezzo attaccato è il primo che si incontra leggendo al contrario. Per chi segue Matematica Discreta è la regola «calze e scarpe» della [D05](../MDAG/D05_composizione_funzioni_inverse.html).

::: prova Con $f(\alpha) = \alpha^R$: quanto vale $f(f(abca))$? Quali stringhe di lunghezza 3 su $\{a, b\}$ restano uguali a sé stesse?
$f(abca) = acba$ e $f(acba) = abca$: si torna alla partenza. Restano uguali le palindrome: $aaa$, $aba$, $bab$, $bbb$.
:::

> [!RICORDA]
> - $\alpha^R$: la stringa letta al contrario. $(\alpha^R)^R = \alpha$.
> - L'inversione è iniettiva e suriettiva: una biiezione, che è l'inversa di sé stessa.
> - $(\alpha\beta)^R = \beta^R\alpha^R$.

## La concatenazione come funzione

La concatenazione prende **due** stringhe e ne restituisce una: è una funzione con due argomenti. Il suo dominio è fatto di coppie di stringhe, cioè è il prodotto cartesiano $X^* \times X^*$ ([lezione 11](11_quantificatori_annidati.html)).

$$g : X^* \times X^* \to X^*, \qquad g(\alpha, \beta) = \alpha\beta$$

Il diario la chiama «composizione di stringhe». Le domande sono le stesse di prima, e le risposte sono diverse.

**È suriettiva.** Ogni stringa $\gamma$ è il risultato di qualche coppia: basta attaccarle la stringa vuota. $g(\gamma, \lambda) = \gamma\lambda = \gamma$.

**Non è iniettiva.** Per dirlo basta un controesempio: due coppie **diverse** con lo stesso risultato.

$$g(a, \lambda) = a \qquad\qquad g(\lambda, a) = a$$

Le coppie $(a, \lambda)$ e $(\lambda, a)$ sono diverse, perché in una coppia l'ordine conta, ma hanno la stessa immagine.

Si può dire di più: quante coppie danno la stessa stringa? Tante quanti sono i punti in cui la si può **tagliare** in due.

```grafico
titolo: I quattro modi di tagliare in due la stringa aba, che è lunga 3. Ogni taglio, la linea tratteggiata, dà una coppia diversa: il pezzo a sinistra e il pezzo a destra. Tutte e quattro le coppie, concatenate, ridanno aba
x: 0 11
y: 0.2 5.6
assi: no
griglia: no
proporzioni: libere
testo: 0.75 4.8 | blu | "$\lambda$"
segmento: 1.55 4.23 1.55 5.37 | ambra | tratteggio
poligono: 1.9 4.35 2.8 4.35 2.8 5.25 1.9 5.25 | verde | tenue
poligono: 2.8 4.35 3.7 4.35 3.7 5.25 2.8 5.25 | verde | tenue
poligono: 3.7 4.35 4.6 4.35 4.6 5.25 3.7 5.25 | verde | tenue
testo: 2.35 4.8 | verde | "a"
testo: 3.25 4.8 | verde | "b"
testo: 4.15 4.8 | verde | "a"
freccia: 5.9 4.8 7.3 4.8 | grigio
testo: 9.0 4.8 | grigio | "$(\lambda,\ aba)$"
poligono: 1.2 3.1 2.1 3.1 2.1 4 1.2 4 | blu | tenue
testo: 1.65 3.55 | blu | "a"
segmento: 2.45 2.98 2.45 4.12 | ambra | tratteggio
poligono: 2.8 3.1 3.7 3.1 3.7 4 2.8 4 | verde | tenue
poligono: 3.7 3.1 4.6 3.1 4.6 4 3.7 4 | verde | tenue
testo: 3.25 3.55 | verde | "b"
testo: 4.15 3.55 | verde | "a"
freccia: 5.9 3.55 7.3 3.55 | grigio
testo: 9.0 3.55 | grigio | "$(a,\ ba)$"
poligono: 1.2 1.85 2.1 1.85 2.1 2.75 1.2 2.75 | blu | tenue
poligono: 2.1 1.85 3 1.85 3 2.75 2.1 2.75 | blu | tenue
testo: 1.65 2.3 | blu | "a"
testo: 2.55 2.3 | blu | "b"
segmento: 3.35 1.73 3.35 2.87 | ambra | tratteggio
poligono: 3.7 1.85 4.6 1.85 4.6 2.75 3.7 2.75 | verde | tenue
testo: 4.15 2.3 | verde | "a"
freccia: 5.9 2.3 7.3 2.3 | grigio
testo: 9.0 2.3 | grigio | "$(ab,\ a)$"
poligono: 1.2 0.6 2.1 0.6 2.1 1.5 1.2 1.5 | blu | tenue
poligono: 2.1 0.6 3 0.6 3 1.5 2.1 1.5 | blu | tenue
poligono: 3 0.6 3.9 0.6 3.9 1.5 3 1.5 | blu | tenue
testo: 1.65 1.05 | blu | "a"
testo: 2.55 1.05 | blu | "b"
testo: 3.45 1.05 | blu | "a"
segmento: 4.25 0.48 4.25 1.62 | ambra | tratteggio
testo: 5.05 1.05 | verde | "$\lambda$"
freccia: 5.9 1.05 7.3 1.05 | grigio
testo: 9.0 1.05 | grigio | "$(aba,\ \lambda)$"
```

Una stringa di lunghezza $n$ ha $n + 1$ punti di taglio: prima del primo simbolo, tra un simbolo e l'altro, dopo l'ultimo. Quindi sono $n + 1$ le coppie che la producono. L'unica stringa prodotta da una coppia sola è $\lambda$, con la coppia $(\lambda, \lambda)$.

Le tre funzioni sulle stringhe viste finora, a confronto, con $X = \{a, b\}$:

| Funzione | Da dove a dove | Iniettiva | Suriettiva |
|---|---|:-:|:-:|
| lunghezza | da $X^*$ ai numeri naturali | no | sì |
| inversione | da $X^*$ a $X^*$ | sì | sì |
| concatenazione | da $X^* \times X^*$ a $X^*$ | no | sì |

> [!ESEMPIO] Esercizio 155 del §3.2: attaccare sempre lo stesso pezzo
> Il testo non ce l'ho. La risposta ufficiale parla della funzione $h(\alpha) = \alpha ab$, da $X^*$ a $X^*$, e dice: iniettiva, non suriettiva.
>
> **Iniettiva.** Se $h(\alpha) = h(\beta)$, allora $\alpha ab = \beta ab$. Due stringhe uguali hanno gli stessi simboli negli stessi posti. Togliendo a tutte e due gli ultimi due simboli restano $\alpha$ e $\beta$, che quindi sono uguali.
>
> **Non suriettiva.** Ogni risultato finisce con $ab$, quindi è lungo almeno 2. La stringa vuota non è mai un risultato. Nemmeno $a$, e nemmeno $ba$.

::: prova Quante coppie $(\alpha, \beta)$ hanno $\alpha\beta = abcd$? Elencale.
Cinque, perché la stringa è lunga 4: $(\lambda, abcd)$, $(a, bcd)$, $(ab, cd)$, $(abc, d)$, $(abcd, \lambda)$.
:::

> [!RICORDA]
> - La concatenazione è una funzione da coppie di stringhe a stringhe.
> - Suriettiva: $\gamma = \gamma\lambda$. Non iniettiva: $(a, \lambda)$ e $(\lambda, a)$ danno tutte e due $a$.
> - Una stringa lunga $n$ si ottiene da $n + 1$ coppie.

## Relazioni: coppie e frecce

«È più vecchio di», «ha sostenuto l'esame di», «divide»: sono legami tra due cose, che per certe coppie valgono e per altre no. Il libro li tratta tutti nello stesso modo: una relazione **è** l'insieme delle coppie per cui il legame vale. L'idea c'era già nella lezione 22, dove una funzione era un insieme di coppie con una regola in più.

Un esempio tra due insiemi diversi. Prendi $X = \{2, 3, 4\}$ e $Y = \{3, 4, 5, 6, 7\}$. Un numero del primo insieme è in relazione con uno del secondo quando lo divide:

$$R = \{(2, 4),\ (2, 6),\ (3, 3),\ (3, 6),\ (4, 4)\}$$

> [!DEF] Relazione (libro, §3.3, domanda di ripasso 1)
> Una **relazione** (binaria) da un insieme $X$ a un insieme $Y$ è un sottoinsieme del prodotto cartesiano $X \times Y$. Se $X = Y$ si chiama relazione **su** $X$.

**Come si legge.** $R$ è un insieme di coppie: la coppia $(x, y)$ sta in $R$ quando $x$ è legato a $y$. Invece di $(x, y) \in R$ si scrive anche $x\,R\,y$, «$x$ è in relazione con $y$». Non c'è nessuna regola sul numero di coppie: un elemento può comparire in molte coppie o in nessuna. È la differenza con le funzioni.

Da qui in poi servono le relazioni **su** un insieme, dove i due elementi della coppia vengono dallo stesso insieme. Per esempio «minore o uguale» su $X = \{1, 2, 3\}$:

$$R = \{(1,1),\ (1,2),\ (1,3),\ (2,2),\ (2,3),\ (3,3)\}$$

Una relazione su un insieme si disegna con il suo **grafo orientato** (il libro dice *digraph*): un punto per ogni elemento di $X$, e una freccia da $x$ a $y$ per ogni coppia $(x, y)$ di $R$. Una coppia $(x, x)$ diventa una freccia che parte da un punto e torna sullo stesso punto: un **cappio**.

```grafico
titolo: Due relazioni disegnate. A sinistra R = {(a,a), (b,c), (c,b), (d,d)}: due cappi, e tra b e c una freccia per verso. A destra «minore o uguale» su {1, 2, 3}: sei coppie, quindi sei frecce, di cui tre sono cappi
x: 0 12
y: 0 5
assi: no
griglia: no
testo: 3.2 4.6 | grigio | "R su {a, b, c, d}"
testo: 9.2 4.6 | grigio | "≤ su {1, 2, 3}"
segmento: 6.25 0.3 6.25 4.8 | grigio | sottile
cerchio: 0.9 1.9 0.1 | blu | spesso
testo: 0.9 1.3 | blu | "a"
cerchio: 2.5 1.9 0.1 | blu | spesso
testo: 2.5 1.3 | blu | "b"
cerchio: 4.3 1.9 0.1 | blu | spesso
testo: 4.3 1.3 | blu | "c"
cerchio: 5.6 1.9 0.1 | blu | spesso
testo: 5.6 1.3 | blu | "d"
arco: 0.900 2.400 0.5 5.376 10.332 | ambra
freccia: 0.592 2.006 0.777 1.942 | ambra
arco: 5.600 2.400 0.5 5.376 10.332 | ambra
freccia: 5.292 2.006 5.477 1.942 | ambra
freccia: 2.70 2.07 4.10 2.07 | ambra
freccia: 4.10 1.73 2.70 1.73 | ambra
cerchio: 7.6 1.3 0.1 | verde | spesso
cerchio: 9.2 3.1 0.1 | verde | spesso
cerchio: 10.8 1.3 0.1 | verde | spesso
testo: 7.6 0.7 | verde | "1"
testo: 9.2 2.5 | verde | "2"
testo: 10.8 0.7 | verde | "3"
arco: 7.100 1.300 0.5 6.946 11.903 | ambra
freccia: 7.494 0.992 7.558 1.177 | ambra
arco: 9.200 3.600 0.5 5.376 10.332 | ambra
freccia: 8.892 3.206 9.077 3.142 | ambra
arco: 11.300 1.300 0.5 3.805 8.762 | ambra
freccia: 10.906 1.608 10.842 1.423 | ambra
freccia: 7.73 1.45 9.07 2.95 | ambra
freccia: 9.33 2.95 10.67 1.45 | ambra
freccia: 7.80 1.30 10.60 1.30 | ambra
```

Le tre proprietà di questa lezione si leggono tutte sul disegno. Conviene abituarsi a passare dall'elenco delle coppie al grafo, e viceversa.

::: prova Scrivi le coppie della relazione «$x$ divide $y$» sull'insieme $\{1, 2, 3, 4\}$. Quanti cappi ha il suo grafo?
$(1,1)$, $(1,2)$, $(1,3)$, $(1,4)$, $(2,2)$, $(2,4)$, $(3,3)$, $(4,4)$: otto coppie. I cappi sono quattro, perché ogni numero divide sé stesso.
:::

> [!RICORDA]
> - Relazione da $X$ a $Y$: un insieme di coppie di $X \times Y$. Relazione su $X$: coppie di elementi di $X$.
> - $x\,R\,y$ vuol dire $(x, y) \in R$.
> - Grafo orientato: un punto per elemento, una freccia per coppia, un cappio per ogni coppia $(x, x)$.

## Riflessiva: un cappio su ogni punto

Ogni numero è minore o uguale a sé stesso, e nessun numero è minore di sé stesso. Nella relazione «minore o uguale» ci sono quindi tutte le coppie $(x, x)$; nella relazione «minore» non ce n'è nessuna.

> [!DEF] Relazione riflessiva (libro, §3.3, domanda di ripasso 3)
> Una relazione $R$ su un insieme $X$ è **riflessiva** se $(x, x) \in R$ per ogni $x \in X$.

**Come si legge.** Ogni elemento è in relazione con sé stesso. Nel grafo c'è un cappio su **ogni** punto. Per controllare si passano gli elementi di $X$ uno per uno: basta un punto senza cappio, e la relazione non è riflessiva.

I due esempi minimi delle risposte ufficiali, sull'insieme $\{1, 2\}$: la relazione $\{(1,1), (2,2)\}$ è riflessiva; la relazione $\{(1,1)\}$ non lo è, perché manca $(2,2)$.

Due cose a cui stare attenti.

**La riflessività dipende dall'insieme.** Le coppie $\{(1,1), (2,2)\}$ formano una relazione riflessiva su $\{1, 2\}$, ma non su $\{1, 2, 3\}$: lì manca $(3,3)$. Per questo i quiz dicono sempre su quale insieme è definita la relazione.

**«Non riflessiva» non vuol dire «senza cappi».** Tra «tutti i cappi» e «nessun cappio» c'è il caso di mezzo, con alcuni cappi sì e altri no. Anche quello è «non riflessiva».

| Relazione sugli interi positivi | Riflessiva? | Perché |
|---|:-:|---|
| $x \le y$ | sì | $x \le x$ sempre |
| $x < y$ | no | $1 < 1$ è falso |
| $x$ divide $y$ | sì | $x = 1 \cdot x$ |
| $x + y$ è pari | sì | $x + x = 2x$ |
| 3 divide $x + y$ | no | $1 + 1 = 2$ |

::: prova Sull'insieme $\{a, b, c, d\}$, la relazione $\{(a,a), (b,c), (c,b), (d,d)\}$ è riflessiva? Quali coppie bisogna aggiungere perché lo diventi?
No: mancano i cappi su $b$ e su $c$. Bisogna aggiungere $(b,b)$ e $(c,c)$.
:::

> [!RICORDA]
> - Riflessiva: $(x, x) \in R$ per **ogni** $x$ dell'insieme. Nel grafo, un cappio su ogni punto.
> - Per dire «non riflessiva» basta un elemento senza cappio, da nominare.
> - Le stesse coppie possono essere riflessive su un insieme e non su uno più grande.

## Simmetrica: ogni freccia ha il ritorno

«Abita nello stesso palazzo di» vale sempre nei due sensi; «è più alto di» non vale mai nei due sensi. La prima relazione è simmetrica.

> [!DEF] Relazione simmetrica (libro, §3.3, domanda di ripasso 4)
> Una relazione $R$ su un insieme $X$ è **simmetrica** se per ogni $x, y \in X$: se $(x, y) \in R$, allora $(y, x) \in R$.

**Come si legge.** È un «se… allora»: non chiede che ci siano frecce, chiede che **ogni** freccia presente abbia la freccia di ritorno. Nel grafo le frecce tra punti diversi vanno a coppie, andata e ritorno. Un cappio è già il ritorno di sé stesso, quindi i cappi non danno mai problemi.

Gli esempi minimi delle risposte ufficiali, su $\{1, 2\}$: la relazione $\{(1,2), (2,1)\}$ è simmetrica; la relazione $\{(1,2)\}$ non lo è, perché manca $(2,1)$.

Per dire che una relazione **non** è simmetrica basta una freccia senza ritorno. «Minore o uguale» su $\{1, 2, 3\}$ non è simmetrica: $(1, 2)$ c'è, $(2, 1)$ no.

> [!TRAPPOLA] Una relazione senza frecce da controllare è simmetrica
> Un «se… allora» con la premessa falsa è vero ([lezione 07](07_condizionali_equivalenza_logica.html)). La relazione $\{(1,1), (2,2)\}$ è simmetrica: le uniche frecce sono cappi. Anche la relazione vuota, senza nessuna coppia, è simmetrica: non c'è nessuna freccia che possa restare senza ritorno.

| Relazione sugli interi positivi | Simmetrica? | Perché |
|---|:-:|---|
| $x + y$ è pari | sì | $x + y = y + x$ |
| 3 divide $x + y$ | sì | stesso motivo |
| $x \le y$ | no | $1 \le 2$, ma non $2 \le 1$ |
| $x$ divide $y$ | no | 2 divide 4, ma 4 non divide 2 |

::: prova La relazione $\{(1,2), (2,1), (2,3), (3,3)\}$ su $\{1, 2, 3\}$ è simmetrica? Se no, quale coppia lo impedisce?
No. $(2,3)$ c'è e $(3,2)$ manca. Le altre non danno problemi: $(1,2)$ ha il suo ritorno, e $(3,3)$ è un cappio.
:::

> [!RICORDA]
> - Simmetrica: ogni freccia ha la freccia di ritorno.
> - Per dire «non simmetrica» basta una coppia $(x, y)$ presente con $(y, x)$ assente.
> - I cappi non contano; una relazione fatta solo di cappi è simmetrica.

## Antisimmetrica: mai andata e ritorno

Se un numero è minore o uguale a un altro, e l'altro è minore o uguale al primo, i due numeri sono lo stesso numero. È la proprietà che «minore o uguale» ha, e che manca a «abita nello stesso palazzo di».

> [!DEF] Relazione antisimmetrica (libro, §3.3, domanda di ripasso 5)
> Una relazione $R$ su un insieme $X$ è **antisimmetrica** se per ogni $x, y \in X$: se $(x, y) \in R$ e $(y, x) \in R$, allora $x = y$.

**Come si legge.** Andata e ritorno insieme sono permessi solo quando partenza e arrivo coincidono, cioè per un cappio. Si capisce meglio con la contronominale ([lezione 17](17_contrapposizione_casi_equivalenze.html)): se $x$ e $y$ sono **diversi**, allora almeno una tra $(x, y)$ e $(y, x)$ manca. Nel grafo, tra due punti diversi c'è al massimo una freccia. I cappi, di nuovo, non contano.

Gli esempi minimi delle risposte ufficiali, su $\{1, 2\}$: la relazione $\{(1,2)\}$ è antisimmetrica; la relazione $\{(1,2), (2,1)\}$ non lo è.

Per dire che una relazione **non** è antisimmetrica serve una coppia di punti diversi con tutte e due le frecce.

| Relazione | Antisimmetrica? | Perché |
|---|:-:|---|
| $x \le y$ sugli interi | sì | $x \le y$ e $y \le x$ danno $x = y$ |
| $x$ divide $y$ sugli interi positivi | sì | se ognuno divide l'altro, sono uguali |
| $x$ divide $y$ sugli interi diversi da 0 | no | 2 divide $-2$, e $-2$ divide 2 |
| $x + y$ è pari, sugli interi positivi | no | $(1, 3)$ e $(3, 1)$ |

### Simmetrica e antisimmetrica non sono opposte

Il nome inganna: «antisimmetrica» sembra il contrario di «simmetrica». Non lo è. Le due proprietà vietano cose diverse:

- **simmetrica** vieta le frecce **senza** ritorno;
- **antisimmetrica** vieta le frecce **con** il ritorno, tra punti diversi.

Una relazione può violare tutti e due i divieti, o nessuno dei due. L'esempio su cui si ferma il diario, il 3.3.15 del libro, è il secondo caso. Sull'insieme $\{a, b, c\}$ la relazione

$$R = \{(a,a),\ (b,b),\ (c,c)\}$$

è **sia simmetrica sia antisimmetrica**. Simmetrica, perché ogni freccia è un cappio e ha sé stessa come ritorno. Antisimmetrica, perché non ci sono due punti diversi collegati nei due sensi.

Ecco i quattro casi, tutti sullo stesso insieme:

```grafico
titolo: I quattro casi su {a, b, c}. In alto a sinistra solo cappi: nessuna freccia senza ritorno e nessuna andata e ritorno tra punti diversi, quindi tutte e due le proprietà. In basso a destra a e b sono collegati nei due sensi, e la freccia da b a c non ha ritorno: nessuna delle due
x: 0 12
y: 0 7
assi: no
griglia: no
segmento: 6 0.1 6 6.9 | grigio | sottile
segmento: 0.2 3.5 11.8 3.5 | grigio | sottile
testo: 3 6.55 | verde | "simmetrica: sì"
testo: 3 6 | verde | "antisimmetrica: sì"
cerchio: 1.2 4.55 0.1 | blu | spesso
testo: 1.2 4 | blu | "a"
cerchio: 3 4.55 0.1 | blu | spesso
testo: 3 4 | blu | "b"
cerchio: 4.8 4.55 0.1 | blu | spesso
testo: 4.8 4 | blu | "c"
arco: 1.200 4.950 0.4 5.376 10.332 | ambra
freccia: 0.954 4.635 1.077 4.592 | ambra
arco: 3.000 4.950 0.4 5.376 10.332 | ambra
freccia: 2.754 4.635 2.877 4.592 | ambra
arco: 4.800 4.950 0.4 5.376 10.332 | ambra
freccia: 4.554 4.635 4.677 4.592 | ambra
testo: 9 6.55 | verde | "simmetrica: sì"
testo: 9 6 | rosa | "antisimmetrica: no"
cerchio: 7.2 4.55 0.1 | blu | spesso
testo: 7.2 4 | blu | "a"
cerchio: 9 4.55 0.1 | blu | spesso
testo: 9 4 | blu | "b"
cerchio: 10.8 4.55 0.1 | blu | spesso
testo: 10.8 4 | blu | "c"
freccia: 7.40 4.72 8.80 4.72 | ambra
freccia: 8.80 4.38 7.40 4.38 | ambra
testo: 3 3.05 | rosa | "simmetrica: no"
testo: 3 2.5 | verde | "antisimmetrica: sì"
cerchio: 1.2 1.05 0.1 | blu | spesso
testo: 1.2 0.5 | blu | "a"
cerchio: 3 1.05 0.1 | blu | spesso
testo: 3 0.5 | blu | "b"
cerchio: 4.8 1.05 0.1 | blu | spesso
testo: 4.8 0.5 | blu | "c"
freccia: 1.40 1.05 2.80 1.05 | ambra
testo: 9 3.05 | rosa | "simmetrica: no"
testo: 9 2.5 | rosa | "antisimmetrica: no"
cerchio: 7.2 1.05 0.1 | blu | spesso
testo: 7.2 0.5 | blu | "a"
cerchio: 9 1.05 0.1 | blu | spesso
testo: 9 0.5 | blu | "b"
cerchio: 10.8 1.05 0.1 | blu | spesso
testo: 10.8 0.5 | blu | "c"
freccia: 7.40 1.22 8.80 1.22 | ambra
freccia: 8.80 0.88 7.40 0.88 | ambra
freccia: 9.20 1.05 10.60 1.05 | ambra
```

| | Antisimmetrica | Non antisimmetrica |
|---|---|---|
| **Simmetrica** | $\{(a,a), (b,b), (c,c)\}$ | $\{(a,b), (b,a)\}$ |
| **Non simmetrica** | $\{(a,b)\}$ | $\{(a,b), (b,a), (b,c)\}$ |

> [!IDEA] Quali relazioni sono tutte e due le cose
> Solo quelle fatte di soli cappi. Se una relazione simmetrica e antisimmetrica contiene $(x, y)$, per la simmetria contiene anche $(y, x)$; allora l'antisimmetria dice $x = y$. Quindi ogni sua coppia è un cappio. Non serve che i cappi ci siano tutti: anche la relazione vuota va bene.

::: prova La relazione $\{(1,2), (2,3), (3,1)\}$ su $\{1, 2, 3\}$ è riflessiva? Simmetrica? Antisimmetrica?
Non è riflessiva: nessun cappio. Non è simmetrica: $(1,2)$ c'è e $(2,1)$ no. È antisimmetrica: le tre frecce girano in tondo, e tra due punti ce n'è sempre una sola.
:::

> [!RICORDA]
> - Antisimmetrica: tra due punti **diversi** mai andata e ritorno insieme.
> - Per dire «non antisimmetrica» servono due elementi diversi con $(x, y)$ e $(y, x)$ tutte e due presenti.
> - Antisimmetrica non è «non simmetrica»: una relazione di soli cappi è tutte e due le cose.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\alpha\beta$ | «alfa beta» | concatenazione: $\alpha$ seguita da $\beta$ | $ab$ e $ba$ danno $abba$ |
| $\alpha^n$ | «alfa alla n» | $\alpha$ ripetuta $n$ volte | $(ab)^3 = ababab$ |
| $\alpha = \gamma\beta\delta$ | «alfa è gamma beta delta» | $\beta$ è una sottostringa di $\alpha$ | «in», «forma», «tica» |
| $\alpha^R$ | «alfa rovesciata» | $\alpha$ letta da destra a sinistra | $(abb)^R = bba$ |
| $X^* \times X^*$ | «X star per X star» | le coppie di stringhe su $X$ | $(ab, \lambda)$ |
| $x\,R\,y$ | «x è in relazione con y» | la coppia $(x, y)$ sta in $R$ | $1 \le 2$ |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Il quiz sulle proprietà di una relazione**, presente nelle simulazioni del 2023/24. Dopo «è totale?» e «individua una funzione?» della lezione 22, le voci di oggi: «è riflessiva?», «è simmetrica?», «è antisimmetrica?». Si risponde guardando il grafo.
2. **Concatenazione e sottostringhe**: sono le parole con cui i quiz su automi e grammatiche descrivono i linguaggi («le stringhe che contengono $ab$», «le stringhe che finiscono con $b$»).
3. **Iniettiva o suriettiva** per una funzione sulle stringhe, con una dimostrazione corta o un controesempio.

### Una domanda d'esame, letta insieme

**Simulazione d'esame 1 del 2023/24, quiz sulle proprietà di una relazione.** «Considera la relazione R con dominio e codominio {1,2,3,4,5} definita come segue: R = {(1,1), (1,2), (1,3), (3,1), (3,3), (4,4), (5,5)}.» Seguono sette voci, ognuna con un menù sì/no. Tre sono di questa lezione: «È riflessiva?», «È simmetrica?», «È antisimmetrica?».

**In pratica chiede:** di disegnare il grafo e fare tre controlli sulle frecce.

```grafico
titolo: Il grafo della relazione del quiz. Il punto 2 non ha il cappio: non è riflessiva. La freccia da 1 a 2, in rosa, va in un verso solo: non è simmetrica. Tra 1 e 3, in ambra, ci sono i due versi: non è antisimmetrica
x: 0 12
y: 0 4.4
assi: no
griglia: no
cerchio: 1.6 3.2 0.1 | blu | spesso
cerchio: 6 3.2 0.1 | blu | spesso
cerchio: 3.8 1.3 0.1 | rosa | spesso
cerchio: 8.9 2.4 0.1 | blu | spesso
cerchio: 10.9 2.4 0.1 | blu | spesso
testo: 1.6 3.85 | blu | "1"
testo: 6.0 3.85 | blu | "3"
testo: 3.3 1.3 | rosa | "2"
testo: 8.9 1.8 | blu | "4"
testo: 10.9 1.8 | blu | "5"
arco: 1.100 3.200 0.5 6.946 11.903 | blu
freccia: 1.494 2.892 1.558 3.077 | blu
arco: 6.500 3.200 0.5 3.805 8.762 | blu
freccia: 6.106 3.508 6.042 3.323 | blu
arco: 8.900 2.900 0.5 5.376 10.332 | blu
freccia: 8.592 2.506 8.777 2.442 | blu
arco: 10.900 2.900 0.5 5.376 10.332 | blu
freccia: 10.592 2.506 10.777 2.442 | blu
freccia: 1.75 3.07 3.65 1.43 | rosa
freccia: 1.80 3.37 5.80 3.37 | ambra
freccia: 5.80 3.03 1.80 3.03 | ambra
testo: 3.8 3.85 | ambra | "due versi"
testo: 5.3 2.1 | rosa | "un verso solo"
testo: 3.8 0.6 | rosa | "senza cappio"
```

> [!ESEMPIO] · la soluzione, voce per voce
> **È riflessiva? No.** I cappi sono su 1, 3, 4 e 5. Manca $(2, 2)$.
>
> **È simmetrica? No.** $(1, 2)$ c'è e $(2, 1)$ manca. Che $(1, 3)$ abbia il suo ritorno non basta: devono averlo tutte le frecce.
>
> **È antisimmetrica? No.** $(1, 3)$ e $(3, 1)$ ci sono tutte e due, e 1 è diverso da 3.
>
> Sono le risposte segnate nella copia compilata da uno studente («manca (2,2)», «manca (2,1)», «per (1,3) e (3,1)»), e tornano con le definizioni. La relazione non è né simmetrica né antisimmetrica: è il quarto caso della tabella.

> [!METODO] Le tre proprietà sul grafo
> 1. Disegna un punto per ogni elemento dell'insieme, **anche** per quelli che non compaiono in nessuna coppia.
> 2. Disegna una freccia per ogni coppia.
> 3. **Riflessiva**: conta i cappi. Devono essere tanti quanti i punti.
> 4. **Simmetrica**: per ogni freccia tra due punti diversi cerca il ritorno. Una sola senza ritorno, e la risposta è no.
> 5. **Antisimmetrica**: cerca due punti diversi con andata e ritorno. Se li trovi, la risposta è no.
> 6. Ogni «no» va con il suo testimone: l'elemento o la coppia che lo prova.

### Errori da evitare

- Rispondere «antisimmetrica» solo perché la relazione non è simmetrica.
- Dimenticare un elemento dell'insieme che non compare in nessuna coppia: è lui a far fallire la riflessività.
- Pensare che i cappi rompano l'antisimmetria: $(x, x)$ è sempre permesso.
- Dire «simmetrica» dopo aver trovato una sola coppia con il ritorno.
- Scrivere $\alpha\beta = \beta\alpha$ come se le stringhe fossero numeri.
- Contare come sottostringa un pezzo con lettere non consecutive.
- Dimenticare $\lambda$ e la stringa intera nell'elenco delle sottostringhe.

## Quiz

```quiz
D: Con $\alpha = ab$ e $\beta = ba$, quale stringa è $\alpha\beta\alpha$?
+ $abbaab$
- $ababab$
- $abbaba$
- $baabba$
- $abab$
= Si scrivono i tre pezzi di seguito: $ab$, poi $ba$, poi $ab$. La più insidiosa è $ababab$, che è $\alpha\alpha\alpha$: in mezzo va $\beta$, che comincia con $b$.

D: Autoverifica del capitolo 3, domanda 10, con i dati ricostruiti dalle risposte ufficiali: $\alpha = ccddc$ e $\beta = c^3d^2$. Quanto è lunga la stringa $\alpha\alpha\beta\alpha$?
N: 20
= $\alpha$ è lunga 5 e $\beta$ è lunga $3 + 2 = 5$. Le lunghezze si sommano: $5 + 5 + 5 + 5 = 20$, la risposta ufficiale.

D: Quale di queste NON è una sottostringa di $abcabc$?
+ $acb$
- $bca$
- $cab$
- $\lambda$
- $abcabc$
= I pezzi di tre simboli consecutivi sono $abc$, $bca$ e $cab$: $acb$ non c'è. La più insidiosa è $\lambda$: la stringa vuota è una sottostringa di ogni stringa.

D: Esercizio 155 del §3.2, dalla risposta ufficiale. Con $X = \{a, b\}$, la funzione $h(\alpha) = \alpha ab$ da $X^*$ a $X^*$ è:
+ iniettiva ma non suriettiva
- suriettiva ma non iniettiva
- biiettiva
- né iniettiva né suriettiva
- una funzione solo sulle stringhe che finiscono con $ab$
= Da $\alpha ab = \beta ab$ viene $\alpha = \beta$, quindi è iniettiva. Ogni risultato è lungo almeno 2, quindi $\lambda$ non è mai raggiunta. La più insidiosa è «biiettiva»: lo è l'inversione, non questa.

D: La concatenazione $g(\alpha, \beta) = \alpha\beta$ va da $X^* \times X^*$ a $X^*$. Quante coppie hanno come immagine la stringa $abba$?
N: 5
= Una coppia per ogni punto di taglio: una stringa lunga 4 ne ha $4 + 1 = 5$. Le coppie sono $(\lambda, abba)$, $(a, bba)$, $(ab, ba)$, $(abb, a)$, $(abba, \lambda)$.

D: Simulazione d'esame 1 del 2023/24. La relazione $R = \{(1,1), (1,2), (1,3), (3,1), (3,3), (4,4), (5,5)\}$ ha dominio e codominio $\{1, 2, 3, 4, 5\}$. Quale affermazione è vera?
+ non è riflessiva, non è simmetrica e non è antisimmetrica
- è riflessiva, perché contiene $(1,1)$, $(3,3)$, $(4,4)$ e $(5,5)$
- è simmetrica, perché contiene sia $(1,3)$ sia $(3,1)$
- è antisimmetrica, perché non è simmetrica
- è riflessiva e simmetrica, ma non antisimmetrica
= Manca $(2,2)$, quindi non è riflessiva. $(1,2)$ non ha il ritorno, quindi non è simmetrica. $(1,3)$ e $(3,1)$ ci sono tutte e due, quindi non è antisimmetrica. La più insidiosa è «è antisimmetrica, perché non è simmetrica»: le due proprietà non sono una il contrario dell'altra.

D: La relazione $R = \{(a,a), (b,b), (c,c)\}$ sull'insieme $\{a, b, c\}$ è:
+ riflessiva, simmetrica e antisimmetrica
- riflessiva e simmetrica, ma non antisimmetrica
- riflessiva e antisimmetrica, ma non simmetrica
- solo riflessiva
- riflessiva, e né simmetrica né antisimmetrica
= È l'esempio 3.3.15 citato dal diario. Ci sono tutti i cappi; ogni freccia è il ritorno di sé stessa; non ci sono due punti diversi collegati nei due sensi. La più insidiosa è «riflessiva e simmetrica, ma non antisimmetrica»: nasce dall'idea che una relazione simmetrica non possa essere antisimmetrica.

D: Sul modello dell'autoverifica del capitolo 3. Sugli interi positivi, $(x, y) \in R$ quando 3 divide $x + y$. Quali proprietà ha, tra riflessiva, simmetrica e antisimmetrica?
+ solo simmetrica
- riflessiva e simmetrica
- solo antisimmetrica
- tutte e tre
- nessuna delle tre
= Simmetrica perché $x + y = y + x$. Non riflessiva: $1 + 1 = 2$ non è multiplo di 3. Non antisimmetrica: $(1,2)$ e $(2,1)$ ci sono tutte e due. La più insidiosa è «riflessiva e simmetrica»: con «$x + y$ è pari» sarebbe giusta, perché $x + x$ è sempre pari, ma non è sempre multiplo di 3.

D: Quale di queste relazioni sull'insieme $\{1, 2, 3\}$ è antisimmetrica ma NON riflessiva?
+ $\{(1,2), (2,3), (1,3)\}$
- $\{(1,1), (2,2), (3,3)\}$
- $\{(1,2), (2,1)\}$
- $\{(1,1), (2,2), (3,3), (1,2)\}$
- $\{(1,2), (2,1), (3,3)\}$
= È la relazione «minore»: nessun cappio, e mai andata e ritorno. La più insidiosa è $\{(1,1), (2,2), (3,3), (1,2)\}$: è antisimmetrica, ma ha tutti i cappi, quindi è anche riflessiva.
```

## Esercizi

::: esercizio base Riscaldamento: concatenare e misurare
Con $\alpha = aab$, $\beta = ba$ e $\gamma = \lambda$: scrivi $\alpha\beta$, $\beta\alpha$, $\alpha\gamma\beta$ e $\beta^2\alpha$. Quanto è lunga ognuna?
::: soluzione
$\alpha\beta = aabba$, lunga 5. $\beta\alpha = baaab$, lunga 5. $\alpha\gamma\beta = aabba$, ancora lunga 5: la stringa vuota non aggiunge niente. $\beta^2\alpha = babaaab$, lunga 7.
:::

::: esercizio base Riscaldamento: stringhe corte su due simboli (libro, §3.2, esercizi 143 e 146)
Elenca le stringhe su $\{0, 1\}$ di lunghezza 2. Quante sono quelle di lunghezza al più 3?
::: soluzione
Di lunghezza 2: 00, 01, 10, 11. Di lunghezza al più 3 sono $1 + 2 + 4 + 8 = 15$: la stringa vuota, le due di lunghezza 1, le quattro di lunghezza 2, le otto di lunghezza 3. Sono le risposte ufficiali del libro; i testi dei due esercizi li ricavo dalle risposte.
:::

::: esercizio base Riscaldamento: sottostringhe
Elenca tutte le sottostringhe di $aba$. Poi di' se $bb$, $\lambda$ e $ab$ sono sottostringhe di $abab$.
::: soluzione
Di $aba$: $\lambda$, $a$, $b$, $ab$, $ba$, $aba$. Sono sei. Per $abab$: $bb$ no, perché le due $b$ non sono vicine; $\lambda$ sì, come per ogni stringa; $ab$ sì, e compare due volte.
:::

::: esercizio base Riscaldamento: dalla regola alle coppie
Su $\{1, 2, 3, 4\}$ scrivi le coppie della relazione «$x + y = 5$». È riflessiva? Simmetrica? Antisimmetrica?
::: soluzione
$\{(1,4), (2,3), (3,2), (4,1)\}$. Non è riflessiva: nessun cappio, perché $x + x = 5$ non ha soluzioni intere. È simmetrica: $x + y = y + x$. Non è antisimmetrica: $(1,4)$ e $(4,1)$ ci sono tutte e due.
:::

::: esercizio medio La rovesciata di una concatenazione
Con $\alpha = abb$ e $\beta = ca$ calcola $(\alpha\beta)^R$, $\beta^R\alpha^R$ e $\alpha^R\beta^R$. Quale delle ultime due coincide con la prima? Poi spiega perché la regola vale sempre.
::: soluzione
$\alpha\beta = abbca$, quindi $(\alpha\beta)^R = acbba$. $\beta^R = ac$ e $\alpha^R = bba$: $\beta^R\alpha^R = acbba$, uguale. $\alpha^R\beta^R = bbaac$, diversa. La regola vale sempre: leggendo $\alpha\beta$ da destra si incontrano prima i simboli di $\beta$ dall'ultimo al primo, cioè $\beta^R$, e poi quelli di $\alpha$ dall'ultimo al primo, cioè $\alpha^R$.
:::

::: esercizio medio Una funzione che raddoppia
Con $X = \{a, b\}$, sia $d : X^* \to X^*$ la funzione $d(\alpha) = \alpha\alpha$. È iniettiva? È suriettiva?
::: soluzione
**Iniettiva: sì.** Se $\alpha\alpha = \beta\beta$, le due stringhe hanno la stessa lunghezza, quindi $|\alpha| = |\beta|$. Allora $\alpha$ e $\beta$ sono la prima metà della stessa stringa, e coincidono. **Suriettiva: no.** Ogni risultato ha lunghezza pari, quindi $a$ non è mai un risultato. Nemmeno $ab$ lo è: ha lunghezza pari, ma le sue due metà sono diverse.
:::

::: esercizio esame Tre proprietà per due relazioni (sul modello dell'autoverifica del capitolo 3)
Sugli interi positivi, di' se è riflessiva, simmetrica, antisimmetrica: (a) $(x, y) \in R$ quando 2 divide $x + y$; (b) $(x, y) \in R$ quando $x$ divide $y$.
::: soluzione
**(a)** Riflessiva: $x + x = 2x$ è pari. Simmetrica: $x + y = y + x$. Non antisimmetrica: $(1, 3)$ e $(3, 1)$ ci sono tutte e due. **(b)** Riflessiva: $x = 1 \cdot x$. Non simmetrica: 2 divide 4, e 4 non divide 2. Antisimmetrica: se $x$ divide $y$ allora $x \le y$, e se $y$ divide $x$ allora $y \le x$; quindi $x = y$.
:::

::: esercizio esame Una relazione dall'autoverifica (capitolo 3, domanda 15)
La risposta ufficiale alla domanda 15 è la relazione $R = \{(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (2,3)\}$ su $\{1, 2, 3, 4\}$; il testo della domanda non ce l'ho. Disegna il grafo e di' se è riflessiva, simmetrica, antisimmetrica, ogni volta con il testimone.
::: soluzione
**Riflessiva: sì**, ci sono i quattro cappi. **Simmetrica: no**, $(2,3)$ c'è e $(3,2)$ manca. **Antisimmetrica: no**, $(1,2)$ e $(2,1)$ ci sono tutte e due. È un altro esempio del quarto caso: né simmetrica né antisimmetrica.
:::

::: esercizio difficile Contare le relazioni su due elementi
Sull'insieme $\{1, 2\}$: quante relazioni ci sono in tutto? Quante sono riflessive? Quante simmetriche? Quante antisimmetriche? Quante simmetriche e antisimmetriche insieme?
::: soluzione
Le coppie possibili sono 4: $(1,1)$, $(1,2)$, $(2,1)$, $(2,2)$. Una relazione è un sottoinsieme di queste quattro, quindi le relazioni sono $2^4 = 16$. **Riflessive: 4.** I due cappi sono obbligati; $(1,2)$ e $(2,1)$ si scelgono liberamente, $2 \cdot 2$ modi. **Simmetriche: 8.** $(1,2)$ e $(2,1)$ entrano insieme o restano fuori insieme, 2 scelte; i due cappi sono liberi, 4 scelte. **Antisimmetriche: 12.** $(1,2)$ e $(2,1)$ non possono esserci tutte e due: 3 scelte; per i cappi, 4. **Tutte e due: 4.** Né $(1,2)$ né $(2,1)$; restano le 4 scelte sui cappi. Controllato con un programma.
:::

## Domande di ripasso

::: domanda Che cos'è la concatenazione di due stringhe, e quanto è lunga?
La stringa formata dalla prima seguita dalla seconda. La sua lunghezza è la somma delle due lunghezze.
:::

::: domanda Quando una stringa è sottostringa di un'altra?
Quando la seconda si può scrivere come un pezzo, poi la prima, poi un altro pezzo. I due pezzi intorno possono essere vuoti.
:::

::: domanda Che differenza c'è tra sottostringa e sottosequenza?
La sottostringa è fatta di simboli consecutivi. La sottosequenza tiene l'ordine ma può saltare dei simboli.
:::

::: domanda Perché l'inversione di una stringa è una biiezione?
Perché rovesciando due volte si torna alla stringa di partenza: da qui vengono sia l'iniettività sia la suriettività.
:::

::: domanda Perché la concatenazione, come funzione di due stringhe, non è iniettiva?
Perché coppie diverse danno la stessa stringa: per esempio la coppia con $a$ e la stringa vuota, nei due ordini.
:::

::: domanda Come si disegna una relazione su un insieme?
Un punto per ogni elemento e una freccia per ogni coppia. Una coppia con i due elementi uguali è un cappio.
:::

::: domanda Quando una relazione è riflessiva, simmetrica, antisimmetrica?
Riflessiva: un cappio su ogni punto. Simmetrica: ogni freccia ha il ritorno. Antisimmetrica: tra due punti diversi mai andata e ritorno insieme.
:::

::: domanda Una relazione può essere simmetrica e antisimmetrica insieme?
Sì, quando tutte le sue coppie sono cappi.
:::

## Glossario

```glossario
Concatenazione | La stringa formata da una stringa seguita da un'altra.
Sottostringa | Un pezzo di simboli consecutivi di una stringa; anche la stringa vuota e la stringa intera.
Inversione | La funzione che a ogni stringa abbina la stessa stringa letta al contrario.
Palindroma | Stringa uguale alla sua rovesciata.
Relazione | Insieme di coppie; da X a Y se le coppie stanno nel prodotto cartesiano di X per Y.
Relazione su un insieme | Relazione in cui i due elementi di ogni coppia vengono dallo stesso insieme.
Grafo orientato (digraph) | Disegno di una relazione: un punto per elemento, una freccia per coppia.
Cappio | Freccia da un punto a sé stesso: una coppia con i due elementi uguali.
Riflessiva | Relazione che contiene il cappio di ogni elemento dell'insieme.
Simmetrica | Relazione in cui ogni freccia ha la freccia di ritorno.
Antisimmetrica | Relazione in cui due elementi diversi non sono mai collegati nei due sensi.
```

## Checklist

```checklist
- So concatenare due stringhe e calcolare la lunghezza del risultato.
- So leggere le potenze di una stringa, con e senza parentesi.
- So dire se una stringa è sottostringa di un'altra, ed elencare tutte le sottostringhe.
- So distinguere una sottostringa da una sottosequenza.
- So dimostrare che l'inversione è iniettiva e suriettiva.
- So dire perché la concatenazione è suriettiva e non iniettiva, e contare le coppie che danno una stringa.
- So scrivere una relazione come insieme di coppie e disegnarne il grafo.
- So controllare se una relazione è riflessiva, e dire quale cappio manca.
- So controllare se una relazione è simmetrica, e indicare la freccia senza ritorno.
- So controllare se una relazione è antisimmetrica, e indicare i due punti con andata e ritorno.
- So fare un esempio di relazione per ognuno dei quattro casi simmetrica/antisimmetrica.
```

## Fonti

- Diario delle lezioni del canale B (Berardi), lezione 24 del docente, 23/11/2026: «Sezione 3.2 da 3.2.26 (definizione della concatenazione di stringhe) fino alla fine. Definizione di sotto-stringa, iniettività e suriettività dell'inversione di stringhe, suriettività e non iniettività della composizione di stringhe. Sezione 3.3: relazioni riflessive, simmetriche e antisimmetriche, fino all'esempio 3.3.15 (una relazione sia simmetrica che antisimmetrica)».
- Johnsonbaugh, parte 2 del libro di testo, §3.2 e §3.3: risposte ufficiali alle domande di ripasso (15 e 16 del §3.2; da 1 a 5 del §3.3), agli esercizi 143, 146 e 155 del §3.2 e all'autoverifica del capitolo 3 (domande 3, 4, 10 e 15), nell'appendice «Soluzioni di altri esercizi del testo» (Moodle del canale A, aperto agli ospiti). Il libro non ce l'ho: i testi degli esercizi citati sono ricostruiti dalle risposte.
- Simulazione d'esame 1 del 2023/24, quiz sulle proprietà di una relazione (dalla copia compilata da uno studente, ricontrollata).
- Per le relazioni in Matematica Discreta: lezione [D03](../MDAG/D03_prodotto_cartesiano_relazioni.html).
- Gli esempi senza altra indicazione, i disegni, i quiz e gli esercizi sono di questi appunti; i conti li ho ricontrollati con un programma.
