---
corso: FDA
lezione: "09"
data: 2026-10-19
titolo: Funzioni proposizionali e quantificatori
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 09 · Libro, parte 2, §1.5
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 09 di Fondamenti dell'Informatica (canale B): funzioni proposizionali e dominio, il
  quantificatore universale «per ogni» e il controesempio, il quantificatore esistenziale «esiste» e il testimone,
  come si dimostra che una frase quantificata è vera o falsa, i programmi che controllano un quantificatore su un
  dominio finito, la traduzione di «ogni» e «qualche», le leggi di De Morgan per i quantificatori, con quiz ed
  esercizi.
lede: >-
  «n è dispari» non è né vera né falsa finché non si sa chi è n. Con «per ogni n» e «esiste un n» diventa una
  proposizione con un valore preciso: qui si vede come stabilirlo, come lo controlla un programma e come si nega.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 1), §1.5
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2–3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 1), §1.5 «Quantifiers», con le
  domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A; diario del canale B; F.
  Cardone, «Alcuni esempi relativi a formalizzazione, connettivi proposizionali e quantificatori» (Moodle del canale A)
appunti_html: appunti/FDA/09_quantificatori.html
genera_html: true
---

## In breve

- Una **funzione proposizionale** è una frase con una variabile, come «$n$ è dispari»: diventa una proposizione, vera o falsa, quando al posto di $n$ si mette un valore. I valori possibili formano il **dominio**.
- **Per ogni**, $\forall x\, P(x)$: è vera se la frase è vera per **tutti** i valori del dominio. Per dire che è falsa basta un **controesempio**.
- **Esiste**, $\exists x\, P(x)$: è vera se la frase è vera per **almeno un** valore. Basta trovarne uno, il **testimone**; per dire che è falsa bisogna controllarli tutti.
- Su un dominio finito un programma controlla un «per ogni» scorrendo i valori e fermandosi al primo controesempio, e un «esiste» fermandosi al primo testimone.
- «Ogni A è B» si scrive con la freccia, $\forall x\,(A(x) \to B(x))$; «qualche A è B» con la congiunzione, $\exists x\,(A(x) \wedge B(x))$.
- **De Morgan per i quantificatori**: negare un «per ogni» dà un «esiste… non», e negare un «esiste» dà un «per ogni… non».

> [!CANALI]
> Nel canale B è la lezione di lunedì 19/10, dalle 9 alle 11. Per il docente è la lezione 10, perché la prima è stata un'introduzione: qui è la 09. Il diario del canale B la annuncia così: «Capitolo 1.5 (Parte 2). Quantificatori. Funzione proposizionale Example 1.5.3 (a), quantificata universalmente e esistenzialmente. Capitolo 1.5 (Parte 2): programmi per i quantificatori, esempi presi da 1. Leggi di de' Morgan per quantificatori.» Il libro non è disponibile: ho scritto questi appunti sul §1.5 dell'edizione originale di Johnsonbaugh, con le domande di ripasso e le soluzioni degli esercizi pubblicate sul Moodle del canale A (id 3851, aperto agli ospiti). L'esempio 1.5.3 (a), nell'edizione originale, è la funzione proposizionale «$n^2 + 2n$ è un intero dispari» sugli interi positivi: è quello che uso qui sotto. I programmi del docente non li ho visti: quelli qui sotto sono miei, in C, provati con gcc.
>
> Servono le lezioni [06](06_proposizioni_connettivi_tavole.html), [07](07_condizionali_equivalenza_logica.html) e [08](08_argomentazioni_regole_inferenza.html): connettivi, «se… allora», leggi di De Morgan. Nel canale A lo stesso argomento è nelle note di Felice Cardone, «Alcuni esempi relativi a formalizzazione, connettivi proposizionali e quantificatori» e «Svedesi e Protestanti»; nel canale C nei lucidi del docente.
>
> La **prossima lezione** (giovedì 22/10) mette in parallelo i quantificatori con «e» e «o» e ha due quiz; quella di **venerdì 23/10** è sui quantificatori annidati (§1.6).

## Frasi con una variabile (libro, §1.5)

La frase «un numero è dispari», scritta con una variabile, non è una proposizione: finché non si sa di che numero si parla, non è né vera né falsa. Scritta «$n$ è dispari», con $n = 7$ diventa vera, con $n = 4$ diventa falsa. È uno stampo che produce una proposizione per ogni valore che ci metti dentro.

> [!DEF] Funzione proposizionale (libro, §1.5)
> Sia $P(x)$ un'affermazione che contiene la variabile $x$, e sia $D$ un insieme. $P$ è una **funzione proposizionale** rispetto a $D$ se, per ogni $x$ di $D$, $P(x)$ è una proposizione. L'insieme $D$ si chiama **dominio** (in inglese *domain of discourse*).

**Come si legge.** Il dominio dice quali valori si possono mettere al posto di $x$. Senza dominio la frase non ha un senso preciso: «$x^2 = 2$» ha soluzioni tra i numeri reali, nessuna tra gli interi.

### L'esempio del diario: n² + 2n è dispari

Il diario parte dall'esempio 1.5.3 (a): $P(n)$ = «$n^2 + 2n$ è un intero dispari», con dominio gli interi positivi. Ogni valore di $n$ dà una proposizione diversa:

| $n$ | $n^2 + 2n$ | $P(n)$ |
|:-:|:-:|:-:|
| 1 | 3 | V |
| 2 | 8 | F |
| 3 | 15 | V |
| 4 | 24 | F |
| 5 | 35 | V |
| 6 | 48 | F |

Si vede uno schema: $n^2 + 2n = n(n + 2)$, e il prodotto è dispari solo quando $n$ è dispari. Quindi $P(n)$ è vera per gli $n$ dispari e falsa per quelli pari.

```grafico
titolo: La funzione proposizionale $P(n)$ = «$n^2 + 2n$ è dispari» sui primi otto interi positivi: verde dove è vera, rosa dove è falsa. «Per ogni» chiede che siano tutte verdi; «esiste» che ce ne sia almeno una.
x: 0 9
y: 0 2.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.58 0.4 1.42 0.4 1.42 1.3 0.58 1.3 | verde
testo: 1 0.85 | verde | "1"
testo: 1 1.75 | verde | "V"
poligono: 1.58 0.4 2.42 0.4 2.42 1.3 1.58 1.3 | rosa
testo: 2 0.85 | rosa | "2"
testo: 2 1.75 | rosa | "F"
poligono: 2.58 0.4 3.42 0.4 3.42 1.3 2.58 1.3 | verde
testo: 3 0.85 | verde | "3"
testo: 3 1.75 | verde | "V"
poligono: 3.58 0.4 4.42 0.4 4.42 1.3 3.58 1.3 | rosa
testo: 4 0.85 | rosa | "4"
testo: 4 1.75 | rosa | "F"
poligono: 4.58 0.4 5.42 0.4 5.42 1.3 4.58 1.3 | verde
testo: 5 0.85 | verde | "5"
testo: 5 1.75 | verde | "V"
poligono: 5.58 0.4 6.42 0.4 6.42 1.3 5.58 1.3 | rosa
testo: 6 0.85 | rosa | "6"
testo: 6 1.75 | rosa | "F"
poligono: 6.58 0.4 7.42 0.4 7.42 1.3 6.58 1.3 | verde
testo: 7 0.85 | verde | "7"
testo: 7 1.75 | verde | "V"
poligono: 7.58 0.4 8.42 0.4 8.42 1.3 7.58 1.3 | rosa
testo: 8 0.85 | rosa | "8"
testo: 8 1.75 | rosa | "F"
```

Le domande 10 e 11 dell'autoverifica del capitolo 1 usano lo stesso criterio su una frase che parla di «la squadra». Se non si sa di quale squadra si parla, la frase non è una proposizione. Se invece «la squadra» è una variabile che prende i valori tra tutte le squadre, è una funzione proposizionale.

::: prova Quali sono funzioni proposizionali, e con quale dominio? (a) «$x + 3 = 5$»; (b) «7 è primo»; (c) «il film $f$ ha vinto un Oscar».
(a) Funzione proposizionale, per esempio sugli interi: vera solo con $x = 2$. (b) È già una proposizione, vera: non ha variabili. (c) Funzione proposizionale, con dominio l'insieme dei film.
:::

> [!RICORDA]
> - Una funzione proposizionale diventa vera o falsa solo quando si sceglie il valore della variabile.
> - Il dominio è l'insieme dei valori possibili, e va sempre detto.

## Per ogni: il quantificatore universale (libro, §1.5)

C'è un secondo modo, oltre a sostituire un valore, per trasformare una funzione proposizionale in una proposizione. Per $P(n)$ vuol dire chiedersi se è vera **per tutti** gli $n$ del dominio. «Per ogni intero positivo $n$, $n^2 + 2n$ è dispari» è una proposizione, e ha un valore preciso: è falsa, perché con $n = 2$ si ottiene 8.

> [!DEF] Quantificatore universale (libro, §1.5)
> Sia $P$ una funzione proposizionale con dominio $D$. L'affermazione «per ogni $x$, $P(x)$», scritta $\forall x\, P(x)$, è **vera** se $P(x)$ è vera per ogni $x$ di $D$, ed è **falsa** se esiste almeno un $x$ di $D$ per cui $P(x)$ è falsa. Il simbolo $\forall$ è il **quantificatore universale**; un valore di $x$ con $P(x)$ falsa è un **controesempio**.

**Come si legge.** $\forall$ è una A rovesciata, da *all*, «tutti». Si legge «per ogni». Per dire che è vera bisogna controllare **tutti** i valori; per dire che è falsa ne basta **uno**.

> [!ESEMPIO] · Due frasi «per ogni» sui numeri reali
> **Situazione:** il dominio è l'insieme dei numeri reali.
>
> **Passo 1.** $\forall x\,(x^2 \ge 0)$ è vera: il quadrato di un numero reale non è mai negativo, qualunque numero si scelga.
>
> **Passo 2.** $\forall x\,(x^2 > x)$ è falsa. Un controesempio è $x = 0$: $0^2 = 0$ non è maggiore di 0. Anche $x = 1$ e $x = \frac12$ sono controesempi; ne basta uno.

> [!TRAPPOLA] Gli esempi non dimostrano un «per ogni»
> Che $P(n)$ sia vera per $n = 1, 3, 5, 7$ non dimostra $\forall n\, P(n)$: il controesempio può arrivare dopo. Al contrario, un solo controesempio basta per dire che il «per ogni» è falso, anche se tutti gli altri valori vanno bene.

::: prova Sugli interi positivi, «per ogni $n$, $n$ e $n + 2$ sono primi» è vera o falsa?
Falsa. Un controesempio è $n = 7$: 7 è primo, ma 9 no. Anche $n = 1$ va bene, perché 1 non è primo.
:::

> [!RICORDA]
> - $\forall x\, P(x)$ è vera se $P(x)$ è vera per tutti gli $x$ del dominio.
> - Per dire che è falsa basta un controesempio.

## Esiste: il quantificatore esistenziale (libro, §1.5)

La domanda opposta è più debole: c'è **almeno un** intero positivo $n$ con $n^2 + 2n$ dispari? Sì, $n = 1$: $1 + 2 = 3$. Basta questo esempio per rispondere.

> [!DEF] Quantificatore esistenziale (libro, §1.5)
> Sia $P$ una funzione proposizionale con dominio $D$. L'affermazione «esiste $x$ tale per cui $P(x)$», scritta $\exists x\, P(x)$, è **vera** se esiste almeno un $x$ di $D$ per cui $P(x)$ è vera, ed è **falsa** se $P(x)$ è falsa per ogni $x$ di $D$. Il simbolo $\exists$ è il **quantificatore esistenziale**.

**Come si legge.** $\exists$ è una E rovesciata, da *exists*. Si legge «esiste un $x$ per cui…» oppure «per qualche $x$…». «Esiste» vuol dire **almeno uno**, non «esattamente uno». Il valore che rende vera $P(x)$ si chiama **testimone**.

> [!ESEMPIO] · Due frasi «esiste» sui numeri reali
> **Passo 1.** $\exists x\,\bigl(\frac{x}{x^2 + 1} = \frac25\bigr)$ è vera: con $x = 2$ viene $\frac{2}{5}$. Il testimone è 2.
>
> **Passo 2.** $\exists x\,\bigl(\frac{1}{x^2 + 1} > 1\bigr)$ è falsa: $x^2 + 1$ è almeno 1 per ogni $x$, quindi la frazione è al massimo 1. Per dirlo si è dovuto ragionare su **tutti** gli $x$.

Le domande di ripasso del §1.5 raccolgono i quattro casi in una tabella. È la cosa da sapere a memoria.

| Per dimostrare che… | è vera | è falsa |
|---|---|---|
| $\forall x\, P(x)$ | mostra che $P(x)$ è vera per **ogni** $x$ | trova **un** $x$ con $P(x)$ falsa (controesempio) |
| $\exists x\, P(x)$ | trova **un** $x$ con $P(x)$ vera (testimone) | mostra che $P(x)$ è falsa per **ogni** $x$ |

::: prova Sugli interi positivi, «esiste $n$ tale che $n$ e $n + 2$ sono primi» è vera o falsa?
Vera. Un testimone è $n = 5$: 5 e 7 sono primi. Anche $n = 3$ e $n = 11$ vanno bene.
:::

> [!RICORDA]
> - $\exists x\, P(x)$ è vera se $P(x)$ è vera per almeno un $x$: basta un testimone.
> - Per dire che è falsa bisogna controllare tutti gli $x$.

## Il dominio cambia la risposta

La stessa formula può essere vera su un dominio e falsa su un altro. Per questo un esercizio sui quantificatori dice sempre il dominio, e la prima cosa da fare è leggerlo.

> [!ESEMPIO] · $\forall x\,(x^2 \ge x)$ su due domini
> **Sugli interi** è vera. Con $x \le 0$, $x^2$ è almeno 0, quindi almeno $x$. Con $x \ge 1$, $x^2 = x \cdot x \ge x \cdot 1 = x$.
>
> **Sui reali** è falsa. Controesempio: $x = \frac12$, perché $\frac14$ è minore di $\frac12$. Tra gli interi questo controesempio non c'era.

Un altro caso: $\exists x\,(x^2 = 2)$ è vera sui reali (testimone $\sqrt2$) e falsa sugli interi e sulle frazioni.

::: prova Sugli interi positivi, $\exists n\,(2n = 7)$ è vera o falsa? E sui reali?
Sugli interi positivi è falsa: $2n$ è pari per ogni intero $n$, e 7 è dispari. Sui reali è vera, con testimone $n = 3{,}5$.
:::

> [!RICORDA]
> - Prima di rispondere, guarda il dominio.
> - Allargare il dominio può creare testimoni e controesempi nuovi.

## Un programma che controlla un quantificatore

Il diario cita i «programmi per i quantificatori». L'idea: se il dominio è **finito**, un computer può controllare un «per ogni» o un «esiste» provando i valori uno per uno.

- Per $\forall n\, P(n)$ si provano i valori in ordine e ci si ferma al **primo controesempio**. Se non se ne trova nessuno, la frase è vera.
- Per $\exists n\, P(n)$ ci si ferma al **primo testimone**. Se non se ne trova nessuno, la frase è falsa.

Ecco il programma per l'esempio del diario, con dominio i numeri da 1 a 10. Usa un ciclo `while`, che ripete il blocco tra graffe finché la condizione tra parentesi è vera; in Programmazione I arriva tra poco. Le condizioni con `&&` e il cortocircuito sono quelli della [lezione 03C di Programmazione I](../PROG1/03C_booleani.html).

```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int N = 10;

    // per ogni n tra 1 e N, n*n + 2*n e' dispari?
    int i = 1;
    while (i <= N && (i * i + 2 * i) % 2 != 0) {
        i = i + 1;
    }
    bool perOgni = (i > N);
    printf("per ogni: %d\n", perOgni);
    if (!perOgni) {
        printf("controesempio: n = %d\n", i);
    }

    // esiste n tra 1 e N con n*n + 2*n dispari?
    int j = 1;
    while (j <= N && (j * j + 2 * j) % 2 == 0) {
        j = j + 1;
    }
    bool esiste = (j <= N);
    printf("esiste: %d\n", esiste);
    if (esiste) {
        printf("testimone: n = %d\n", j);
    }
    return 0;
}
```

```
per ogni: 0
controesempio: n = 2
esiste: 1
testimone: n = 1
```

**Come si legge.** Il primo ciclo va avanti finché $P(i)$ è vera; si ferma al primo $i$ con $P(i)$ falsa, oppure quando ha finito il dominio. Se è uscito perché $i$ ha superato $N$, non ha trovato controesempi e il «per ogni» è vero. Il secondo ciclo fa il contrario: va avanti finché $P(j)$ è falsa.

```grafico
titolo: Il ciclo che controlla «per ogni»: prova i valori in ordine e si ferma al primo controesempio. Se arriva in fondo al dominio senza trovarne, la frase è vera.
x: 0 10
y: 0 7.2
assi: no
griglia: no
proporzioni: libere
poligono: 3.5 6.2 6.5 6.2 6.5 6.95 3.5 6.95 | blu
testo: 5 6.57 | blu | "i = 1"
freccia: 5 6.2 5 5.55 | grigio
poligono: 5 5.5 7 4.7 5 3.9 3 4.7 | ambra
testo: 5 4.7 | ambra | "i ≤ N?"
freccia: 7 4.7 8 4.7 | verde
testo: 7.5 5.2 | verde | "no"
poligono: 8 4.3 9.95 4.3 9.95 5.1 8 5.1 | verde
testo: 8.97 4.7 | verde | "∀ vero"
freccia: 5 3.9 5 3.25 | grigio
testo: 5.4 3.55 | grigio | "sì"
poligono: 5 3.2 7 2.4 5 1.6 3 2.4 | ambra
testo: 5 2.4 | ambra | "P(i)?"
freccia: 7 2.4 8 2.4 | rosa
testo: 7.5 2.9 | rosa | "no"
poligono: 8 2 9.95 2 9.95 2.8 8 2.8 | rosa
testo: 8.97 2.4 | rosa | "∀ falso"
freccia: 5 1.6 5 1.05 | grigio
testo: 5.4 1.3 | grigio | "sì"
poligono: 3.5 0.3 6.5 0.3 6.5 1 3.5 1 | blu
testo: 5 0.65 | blu | "i = i + 1"
segmento: 3.5 0.65 1.2 0.65 | grigio
segmento: 1.2 0.65 1.2 5.85 | grigio
freccia: 1.2 5.85 4.95 5.85 | grigio
```

> [!TRAPPOLA] Su un dominio infinito il programma non basta
> Sugli interi positivi il ciclo per $\forall n\,P(n)$ si ferma solo se trova un controesempio. Se la frase è vera, il ciclo non finisce mai: un programma può **smentire** un «per ogni» su un dominio infinito, ma non può **dimostrarlo**. Per quello serve un ragionamento, come $n(n + 2)$ dispari solo per $n$ dispari, o l'induzione della prossima parte del corso.

::: prova Nel programma, che cosa cambia se il dominio diventa da 1 a 1, cioè $N = 1$?
Il «per ogni» diventa vero: c'è solo $n = 1$, e $P(1)$ è vera. Il primo ciclo fa un giro, $i$ diventa 2, e $i > N$. Anche l'«esiste» è vero, con testimone 1.
:::

> [!RICORDA]
> - Su un dominio finito, «per ogni» si controlla cercando il primo controesempio, «esiste» cercando il primo testimone.
> - Su un dominio infinito un programma può solo smentire un «per ogni», non dimostrarlo.

## Tradurre «ogni» e «qualche» (libro, §1.5)

Nelle frasi vere il dominio è spesso più grande della categoria di cui si parla. «Ogni ragioniere ha una Porsche» parla dei ragionieri, ma il dominio è l'insieme di tutte le persone. Con $P(x)$ = «$x$ è un ragioniere» e $Q(x)$ = «$x$ ha una Porsche», la traduzione giusta è quella degli esercizi 48 e 51 del libro.

| Frase | Traduzione | Perché |
|---|---|---|
| Ogni ragioniere ha una Porsche | $\forall x\,(P(x) \to Q(x))$ | per ogni persona: **se** è un ragioniere, **allora** ha una Porsche |
| Qualche ragioniere ha una Porsche | $\exists x\,(P(x) \wedge Q(x))$ | c'è una persona che è un ragioniere **e** ha una Porsche |

```grafico
titolo: A sinistra «ogni ragioniere ha una Porsche»: l'insieme dei ragionieri sta dentro quello di chi ha una Porsche. A destra «qualche ragioniere ha una Porsche»: basta un punto nell'intersezione.
x: 0 12
y: 0 5
assi: no
griglia: no
proporzioni: libere
cerchio: 3 2.4 2 | ambra
cerchio: 2.4 2.4 0.95 | blu
testo: 2.4 2.4 | blu | "$P$"
testo: 4.2 2.4 | ambra | "$Q$"
testo: 3 4.75 | grigio | "∀x (P(x) → Q(x))"
cerchio: 8 2.4 1.5 | blu
cerchio: 10 2.4 1.5 | ambra
punto: 9 2.4 | accento
testo: 7.3 2.4 | blu | "$P$"
testo: 10.7 2.4 | ambra | "$Q$"
testo: 9 4.75 | grigio | "∃x (P(x) ∧ Q(x))"
```

> [!TRAPPOLA] Le due traduzioni sbagliate
> - $\forall x\,(P(x) \wedge Q(x))$ dice che **tutte** le persone sono ragionieri e hanno una Porsche: molto di più.
> - $\exists x\,(P(x) \to Q(x))$ è vera appena esiste una persona che **non** è un ragioniere, perché per lei la freccia è vera a vuoto, come nella [lezione 07](07_condizionali_equivalenza_logica.html). Non dice niente sui ragionieri.
>
> Regola pratica: **«per ogni» va con la freccia, «esiste» va con la congiunzione.**

Lo stesso schema vale per gli esempi delle note di Cardone (canale A): «qualche numero primo è pari» diventa $\exists x\,(\mathrm{Primo}(x) \wedge \mathrm{Pari}(x))$, e «tutti i numeri maggiori di 5 sono maggiori di 3» diventa $\forall x\,(x > 5 \to x > 3)$.

::: prova Con $S(x)$ = «$x$ è uno studente» e $M(x)$ = «$x$ segue un corso di matematica», traduci: (a) «ogni studente segue un corso di matematica»; (b) «qualche studente segue un corso di matematica».
(a) $\forall x\,(S(x) \to M(x))$. (b) $\exists x\,(S(x) \wedge M(x))$. Se il dominio è già l'insieme degli studenti, bastano $\forall x\, M(x)$ ed $\exists x\, M(x)$: è la scelta degli esercizi 32 e 35 del libro.
:::

> [!RICORDA]
> - «Ogni A è B»: $\forall x\,(A(x) \to B(x))$.
> - «Qualche A è B»: $\exists x\,(A(x) \wedge B(x))$.

## Negare un quantificatore: le leggi di De Morgan (libro, §1.5)

Qual è il contrario di «ogni studente segue un corso di matematica»? Non è «nessuno studente segue un corso di matematica». Per smentire la frase basta **uno** studente che non lo segue: il contrario è «**qualche** studente **non** segue un corso di matematica». È la soluzione dell'esercizio 38 del libro.

> [!TEOREMA] Leggi di De Morgan generalizzate (libro, §1.5)
> Se $P$ è una funzione proposizionale, ciascuna delle coppie seguenti ha lo stesso valore di verità:
> $$\neg\,\forall x\, P(x) \quad \text{e} \quad \exists x\, \neg P(x), \qquad\qquad \neg\,\exists x\, P(x) \quad \text{e} \quad \forall x\, \neg P(x).$$

**Come si legge.** Il «non» passa attraverso il quantificatore e lo **gira**: $\forall$ diventa $\exists$, $\exists$ diventa $\forall$. È lo stesso fenomeno delle leggi di De Morgan della [lezione 07](07_condizionali_equivalenza_logica.html), dove la negazione girava $\wedge$ in $\vee$; nella prossima lezione si vede che non è un caso.

**Perché è vero.** $\neg\,\forall x\, P(x)$ dice che non tutti gli $x$ rendono vera $P$: c'è almeno un $x$ con $P(x)$ falsa, cioè un controesempio. È esattamente $\exists x\, \neg P(x)$. Allo stesso modo, «non esiste un $x$ con $P(x)$» vuol dire che per ogni $x$ la $P(x)$ è falsa.

### Negare «ogni A è B»

Con la regola dei quantificatori e quella della freccia, $\neg(p \to q) \equiv p \wedge \neg q$ della lezione 07, si nega in due passi:

$$\neg\,\forall x\,(A(x) \to B(x)) \;\equiv\; \exists x\,\neg(A(x) \to B(x)) \;\equiv\; \exists x\,(A(x) \wedge \neg B(x)).$$

«Non è vero che ogni ragioniere ha una Porsche» diventa «qualche ragioniere non ha una Porsche» (esercizio 52 del libro). Dall'altra parte, la negazione di «qualche A è B» è «nessun A è B»: $\forall x\,(A(x) \to \neg B(x))$.

> [!ESEMPIO] · «Non è tutto oro quel che luccica»
> **Situazione:** il proverbio, con $L(x)$ = «$x$ luccica» e $O(x)$ = «$x$ è oro».
>
> **Passo 1: che cosa vuol dire.** Non dice che niente di ciò che luccica è oro. Dice che non è vero che tutto ciò che luccica è oro: $\neg\,\forall x\,(L(x) \to O(x))$.
>
> **Passo 2: De Morgan.** $\exists x\,(L(x) \wedge \neg O(x))$: c'è qualcosa che luccica e non è oro.
>
> Gli esercizi 61–70 del libro sono di questo tipo: frasi come «tutti gli uomini non tradiscono la moglie», che alla lettera vogliono dire «nessuno», ma che chi le dice intende come «non tutti».

> [!TRAPPOLA] «Tutti… non» è ambiguo
> «Tutti gli studenti non hanno passato l'esame» si può leggere come $\forall x\,\neg P(x)$, nessuno l'ha passato, oppure come $\neg\,\forall x\, P(x)$, non tutti l'hanno passato. All'esame la formula toglie l'ambiguità: leggi dove sta il $\neg$.

::: prova Nega, spostando il $\neg$ fino in fondo: (a) $\forall x\,(x^2 > x)$; (b) «qualche numero primo è pari», $\exists x\,(\mathrm{Primo}(x) \wedge \mathrm{Pari}(x))$.
(a) $\exists x\,(x^2 \le x)$: la soluzione dell'esercizio 59 del libro. (b) $\forall x\,\neg(\mathrm{Primo}(x) \wedge \mathrm{Pari}(x))$, cioè $\forall x\,(\mathrm{Primo}(x) \to \neg\mathrm{Pari}(x))$: «nessun primo è pari». È l'esempio delle note di Cardone; la frase di partenza è vera (il 2), quindi la negazione è falsa.
:::

> [!RICORDA]
> - $\neg\,\forall$ diventa $\exists\,\neg$; $\neg\,\exists$ diventa $\forall\,\neg$.
> - La negazione di «ogni A è B» è «qualche A non è B», non «nessun A è B».

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $P(x)$ | «P di x» | una funzione proposizionale nella variabile $x$ | $P(n)$: «$n^2 + 2n$ è dispari» |
| $\forall x\, P(x)$ | «per ogni x, P di x» | $P(x)$ è vera per tutti gli $x$ del dominio | $\forall x\,(x^2 \ge 0)$ |
| $\exists x\, P(x)$ | «esiste x tale per cui P di x» | $P(x)$ è vera per almeno un $x$ | $\exists x\,(x^2 = 2)$ sui reali |
| $D$ | «dominio» | l'insieme dei valori possibili di $x$ | gli interi positivi |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti.

**Che cosa serve di questa lezione**

1. **Negare frasi con quantificatori.** Nella simulazione 2 del 2023/24 un quiz intero chiede di abbinare quattro frasi alla loro negazione. Le frasi hanno due quantificatori, l'argomento di venerdì 23/10; la regola è quella di questa lezione, applicata due volte.
2. **Vero o falso su un dominio.** Domande come «$\forall x\,(x^2 > x)$ è vera sui reali?»: si cerca un controesempio o un testimone.
3. **Tradurre** «ogni» con la freccia e «qualche» con la congiunzione.

### Una domanda sul modello della simulazione 2, letta insieme

Il quiz vero ha frasi con due quantificatori; questa versione ne ha uno solo, con la stessa forma di domanda.

**Il testo**: «Associare a ciascuna proposizione la sua negazione: (1) Ogni studente ha superato l'esame. (2) Qualche studente ha superato l'esame. (3) Nessuno studente ha superato l'esame.» Negazioni da scegliere: (a) «Nessuno studente ha superato l'esame»; (b) «Qualche studente ha superato l'esame»; (c) «Qualche studente non ha superato l'esame».

**In pratica chiede:** per ogni frase, che cosa basta per smentirla?

> [!ESEMPIO] · la soluzione, passo per passo
> Con $S(x)$ = «$x$ ha superato l'esame», sul dominio degli studenti:
>
> - (1) è $\forall x\, S(x)$; la negazione è $\exists x\,\neg S(x)$: **(c)**.
> - (2) è $\exists x\, S(x)$; la negazione è $\forall x\,\neg S(x)$: **(a)**.
> - (3) è $\forall x\,\neg S(x)$; la negazione è $\exists x\, S(x)$: **(b)**.
>
> La trappola è abbinare (1) ad (a): «nessuno» non è il contrario di «tutti». Tra «tutti» e «nessuno» c'è il caso in cui alcuni passano e altri no, e lì le due frasi sono false insieme.

> [!METODO] Le domande sui quantificatori
> 1. **Leggi il dominio.**
> 2. **Per decidere se è vera:** per $\forall$ cerca un controesempio, per $\exists$ un testimone. Se non lo trovi, ragiona su tutti i valori.
> 3. **Per negare:** gira ogni quantificatore e sposta il $\neg$ dentro; poi usa $\neg(p \to q) \equiv p \wedge \neg q$ e De Morgan.
> 4. **Per tradurre:** «ogni A è B» con la freccia, «qualche A è B» con la congiunzione.

**Errori da evitare**

- Dimostrare un «per ogni» con qualche esempio.
- Negare «tutti» con «nessuno».
- Tradurre «ogni A è B» con $\wedge$, o «qualche A è B» con $\to$.
- Dimenticare il dominio.

## Quiz

```quiz
D: Sugli interi positivi, con $P(n)$ = «$n^2 + 2n$ è dispari», quale affermazione è vera?
+ $\forall n\, P(n)$ è falsa e $\exists n\, P(n)$ è vera
- $\forall n\, P(n)$ è vera
- tutte e due sono false
- $\exists n\, P(n)$ è falsa e $\forall n\, P(n)$ è vera
- $P(n)$ è una proposizione vera
= Con $n = 2$ viene 8, pari: è un controesempio, e il «per ogni» è falso. Con $n = 1$ viene 3, dispari: è un testimone, e l'«esiste» è vero. La risposta più insidiosa è l'ultima: $P(n)$ da sola non è una proposizione, perché non si sa chi è $n$.

D: Che cosa basta per dimostrare che $\forall x\, P(x)$ è falsa?
+ un valore di $x$ per cui $P(x)$ è falsa
- un valore di $x$ per cui $P(x)$ è vera
- che $P(x)$ sia falsa per tutti gli $x$
- che $\exists x\, P(x)$ sia falsa
- tre o quattro esempi in cui $P(x)$ è falsa
= Basta un controesempio. La risposta più insidiosa è «falsa per tutti gli $x$»: è sufficiente ma chiede molto di più del necessario, e corrisponde a $\forall x\,\neg P(x)$.

D: Qual è la negazione di $\exists x\,(x^2 = 2)$?
+ $\forall x\,(x^2 \neq 2)$
- $\exists x\,(x^2 \neq 2)$
- $\forall x\,(x^2 = 2)$
- $\neg\,\forall x\,(x^2 = 2)$
- $\exists x\,\neg(x^2 = 2)$
= Il $\neg$ gira $\exists$ in $\forall$ e nega la frase interna. La risposta più insidiosa è $\exists x\,(x^2 \neq 2)$: nega la frase interna ma lascia il quantificatore com'è. Anche l'ultima è la stessa cosa scritta in un altro modo.

D: Quale formula traduce «ogni ragioniere ha una Porsche», con $P(x)$ = «$x$ è un ragioniere» e $Q(x)$ = «$x$ ha una Porsche», sul dominio di tutte le persone?
+ $\forall x\,(P(x) \to Q(x))$
- $\forall x\,(P(x) \wedge Q(x))$
- $\exists x\,(P(x) \wedge Q(x))$
- $\exists x\,(P(x) \to Q(x))$
- $\forall x\,(Q(x) \to P(x))$
= «Per ogni» va con la freccia. La risposta più insidiosa è $\forall x\,(P(x) \wedge Q(x))$: direbbe che tutte le persone sono ragionieri. L'ultima gira la freccia: «chi ha una Porsche è un ragioniere».

D: Qual è la negazione di «ogni studente segue un corso di matematica»?
+ Qualche studente non segue un corso di matematica
- Nessuno studente segue un corso di matematica
- Ogni studente non segue un corso di matematica
- Qualche studente segue un corso di matematica
- Ogni studente segue un corso che non è di matematica
= $\neg\,\forall x\, M(x) \equiv \exists x\,\neg M(x)$: basta uno studente che non lo segue. È la soluzione dell'esercizio 38 del libro. La risposta più insidiosa è «nessuno»: tra «tutti» e «nessuno» c'è il caso in cui alcuni lo seguono e altri no.

D: Sui numeri reali, quale di queste frasi è vera?
+ $\exists x\,\bigl(\frac{x}{x^2 + 1} = \frac25\bigr)$
- $\forall x\,(x^2 > x)$
- $\exists x\,\bigl(\frac{1}{x^2 + 1} > 1\bigr)$
- $\forall x\,(x^2 \ge x)$
- $\exists x\,(x^2 < 0)$
= Con $x = 2$: $\frac{2}{5}$. La risposta più insidiosa è $\forall x\,(x^2 \ge x)$: è vera sugli interi, ma sui reali $x = \frac12$ è un controesempio. La terza è falsa perché $x^2 + 1 \ge 1$.

D: Un programma controlla $\forall n\, P(n)$ sugli interi da 1 a 1000 e risponde «vero». Che cosa si può concludere sugli interi positivi?
+ niente su $\forall n\, P(n)$: un controesempio potrebbe essere più grande di 1000
- che $\forall n\, P(n)$ è vera
- che $\forall n\, P(n)$ è falsa
- che $\exists n\, \neg P(n)$ è vera
- che $P(n)$ è vera solo per $n \le 1000$
= Il programma ha controllato solo un pezzo del dominio. Si può dire che $\exists n\, P(n)$ è vera (per esempio $n = 1$), ma per il «per ogni» serve un ragionamento. La risposta più insidiosa è «è vera»: mille esempi non sono una dimostrazione.

D: Con $L(x)$ = «$x$ luccica» e $O(x)$ = «$x$ è oro», quale formula dice «non è tutto oro quel che luccica»?
+ $\exists x\,(L(x) \wedge \neg O(x))$
- $\forall x\,(L(x) \to \neg O(x))$
- $\exists x\,(L(x) \to \neg O(x))$
- $\forall x\,(\neg L(x) \to O(x))$
- $\neg\,\exists x\,(L(x) \wedge O(x))$
= È $\neg\,\forall x\,(L(x) \to O(x))$, che per De Morgan e per $\neg(p \to q) \equiv p \wedge \neg q$ diventa «qualcosa luccica e non è oro». La risposta più insidiosa è $\forall x\,(L(x) \to \neg O(x))$, la lettura alla lettera: «niente di ciò che luccica è oro». L'ultima dice la stessa cosa.
```

## Esercizi

::: esercizio base Riscaldamento: vero o falso?
Sugli interi positivi, con $D(n)$ = «$n$ divide 77», di' se sono vere: (a) $D(11)$; (b) $\forall n\, D(n)$; (c) $\exists n\,\neg D(n)$; (d) $\exists n\,(D(n) \wedge n > 10)$.
::: soluzione
(a) Vera: $77 = 11 \cdot 7$. (b) Falsa: un controesempio è $n = 2$. (c) Vera: $n = 2$ è un testimone. Le prime tre sono gli esercizi 7, 10 e 13 del libro. (d) Vera, con testimone 11, oppure 77.
:::

::: esercizio base Riscaldamento: controesempio o testimone
Sui numeri reali, decidi e giustifica: (a) $\forall x\,(x^2 - 1 > 0)$; (b) $\exists x\,(x^2 - x - 6 = 0)$; (c) $\forall x\,(x + 1 > x)$; (d) $\exists x\,(x^2 + 1 = 0)$.
::: soluzione
(a) Falsa: controesempio $x = 0$, che dà $-1$. (b) Vera: testimone $x = 3$ (anche $x = -2$). (c) Vera: aggiungere 1 fa sempre crescere un numero. (d) Falsa: $x^2 + 1$ è almeno 1 per ogni $x$ reale.
:::

::: esercizio base Riscaldamento: negare
Nega spostando il $\neg$ dentro: (a) $\forall x\,(x > 0)$; (b) $\exists x\,(x \text{ è pari} \wedge x \text{ è primo})$; (c) $\forall x\,(x > 5 \to x > 3)$.
::: soluzione
(a) $\exists x\,(x \le 0)$. (b) $\forall x\,(x \text{ è pari} \to x \text{ non è primo})$, cioè «nessun pari è primo». (c) $\exists x\,(x > 5 \wedge x \le 3)$: è l'esempio delle note di Cardone. Sui numeri è falsa, perché la frase di partenza è vera.
:::

::: esercizio medio Gli sportivi (esercizi 39–47 del libro)
Il dominio è l'insieme delle persone. $P(x)$ = «$x$ è un atleta professionista», $Q(x)$ = «$x$ gioca a calcio». Scrivi in parole e di' se sono vere: (a) $\forall x\,(P(x) \to Q(x))$; (b) $\exists x\,(\neg Q(x)) \vee \exists x\,(Q(x) \wedge P(x))$; (c) $\forall x\,(P(x) \wedge Q(x))$. Poi nega la (a).
::: soluzione
(a) «Ogni atleta professionista gioca a calcio»: falsa, ci sono tennisti professionisti. (b) «Qualcuno non gioca a calcio, oppure qualche calciatore è un atleta professionista»: vera, e basta già la prima parte. (c) «Tutti sono atleti professionisti e giocano a calcio»: falsa. La negazione della (a) è $\exists x\,(P(x) \wedge \neg Q(x))$: «qualche atleta professionista non gioca a calcio». Sono le soluzioni degli esercizi 39, 42, 45 e 47.
:::

::: esercizio medio Il programma per «esiste»
Modifica il programma della lezione per controllare, sui numeri da 1 a 30, la frase «esiste $n$ tale che $n$ e $n + 2$ sono primi», e prevedi che cosa stampa.
::: soluzione
Serve una condizione «$n$ è primo». Con una funzione `primo(n)` che restituisce vero se $n$ è primo, il ciclo è `while (j <= N && !(primo(j) && primo(j + 2))) { j = j + 1; }`, e alla fine `esiste = (j <= N)`. Stampa `esiste: 1` e `testimone: n = 3`: 3 e 5 sono primi, e 3 è il primo testimone. Le funzioni si vedono più avanti in Programmazione I; per ora basta il ragionamento.
:::

::: esercizio esame Tradurre e negare
Con $S(x)$ = «$x$ è svedese» e $P(x)$ = «$x$ è protestante», sul dominio delle persone: (a) traduci «qualche svedese non è protestante»; (b) traduci «nessuno svedese è protestante»; (c) nega la (b) e scrivila in parole.
::: soluzione
(a) $\exists x\,(S(x) \wedge \neg P(x))$. (b) $\forall x\,(S(x) \to \neg P(x))$, oppure $\neg\,\exists x\,(S(x) \wedge P(x))$: sono equivalenti per De Morgan. (c) $\exists x\,(S(x) \wedge P(x))$: «qualche svedese è protestante». Nel canale A la nota «Svedesi e Protestanti» formalizza una frase più difficile, «tutti sono protestanti tranne gli svedesi»: la risposta finale è $\forall x\,(P(x) \leftrightarrow \neg S(x))$.
:::

## Domande di ripasso

::: domanda Che cos'è una funzione proposizionale?
Un'affermazione con una variabile che diventa una proposizione, vera o falsa, per ogni valore della variabile preso dal dominio.
:::

::: domanda Quando è vera $\forall x\, P(x)$? E $\exists x\, P(x)$?
$\forall x\, P(x)$ quando $P(x)$ è vera per tutti gli $x$ del dominio; $\exists x\, P(x)$ quando è vera per almeno un $x$.
:::

::: domanda Che cos'è un controesempio? E un testimone?
Un controesempio a $\forall x\, P(x)$ è un $x$ con $P(x)$ falsa. Un testimone di $\exists x\, P(x)$ è un $x$ con $P(x)$ vera.
:::

::: domanda Come si nega $\forall x\, P(x)$? E $\exists x\, P(x)$?
$\neg\,\forall x\, P(x) \equiv \exists x\,\neg P(x)$ e $\neg\,\exists x\, P(x) \equiv \forall x\,\neg P(x)$: sono le leggi di De Morgan per i quantificatori.
:::

::: domanda Perché «ogni A è B» si traduce con la freccia e non con la congiunzione?
Perché la frase parla solo degli A: per ogni elemento, se è un A allora è un B. Con la congiunzione si direbbe che tutti gli elementi del dominio sono A e B.
:::

::: domanda Un programma può dimostrare un «per ogni» su un dominio infinito?
No: può trovare un controesempio, ma se la frase è vera non finisce mai di controllare.
:::

## Glossario

```glossario
Funzione proposizionale | Un'affermazione con una variabile, che diventa una proposizione per ogni valore del dominio.
Dominio | L'insieme dei valori che la variabile può prendere.
Quantificatore universale | ∀, «per ogni»: la frase è vera se lo è per tutti i valori del dominio.
Quantificatore esistenziale | ∃, «esiste»: la frase è vera se lo è per almeno un valore.
Controesempio | Un valore che rende falsa P(x), e quindi falsa ∀x P(x).
Testimone | Un valore che rende vera P(x), e quindi vera ∃x P(x).
Leggi di De Morgan generalizzate | ¬∀x P(x) equivale a ∃x ¬P(x); ¬∃x P(x) equivale a ∀x ¬P(x).
```

## Checklist

```checklist
- So dire che cos'è una funzione proposizionale e che cos'è il dominio.
- So quando è vera una frase con ∀ e quando una con ∃.
- So che per smentire un ∀ basta un controesempio, e per dimostrare un ∃ basta un testimone.
- So che il dominio può cambiare la risposta.
- So come un programma controlla un quantificatore su un dominio finito, e perché non basta su uno infinito.
- So tradurre «ogni A è B» con la freccia e «qualche A è B» con la congiunzione.
- So negare una frase con un quantificatore, anche «ogni A è B».
- Non confondo «non tutti» con «nessuno».
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 1), §1.5 «Quantifiers»: funzione proposizionale e dominio, quantificatore universale e controesempio, quantificatore esistenziale, leggi di De Morgan generalizzate; le domande di ripasso 1–10 e gli esercizi 7, 10, 13, 32, 35, 38, 39, 42, 45, 47, 48, 51, 52, 53, 59, 61–70 e le domande 10, 11, 18 e 19 dell'autoverifica del capitolo 1, con le soluzioni pubblicate sul Moodle del canale A ([id 3851](https://informatica.i-learn.unito.it/course/view.php?id=3851), aperto agli ospiti). Il libro non è disponibile: le frasi degli esercizi sono riportate come compaiono nelle soluzioni, tradotte; l'esempio 1.5.3 (a) è quello dell'edizione originale.
- Diario del canale B: «Lezione 10. Lunedì 19 Ottobre ore 09-11. Capitolo 1.5 (Parte 2). Quantificatori. Funzione proposizionale Example 1.5.3 (a), quantificata universalmente e esistenzialmente. Capitolo 1.5 (Parte 2): programmi per i quantificatori, esempi presi da 1. Leggi di de' Morgan per quantificatori.»
- F. Cardone, «Alcuni esempi relativi a formalizzazione, connettivi proposizionali e quantificatori», e la nota scritta a mano «Svedesi e Protestanti» (Moodle del canale A).
- Simulazione d'esame 2 del 2023/24, quiz 6 (negazione di frasi con quantificatori), dalla «Guida degli studenti» del gruppo TSI.
- Il programma in C l'ho scritto io e l'ho compilato con gcc 16.1, con `-Wall -Werror`; l'uscita è quella vera. I valori di verità degli esempi li ho ricontrollati con un programma.
