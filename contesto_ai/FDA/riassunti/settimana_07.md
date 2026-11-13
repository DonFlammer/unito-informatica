---
corso: FDA
lezione: S7
tipo: riassunto
titolo: "Settimana 7: contrapposizione e casi, induzione, invarianti di ciclo"
data: 2026-11-13
docenti: Stefano Berardi
sopratitolo: Riassunto settimanale · Fondamenti dell'Informatica · Canale B · 09/11 – 13/11/2026
descrizione: >-
  Riassunto della settimana 7 di Fondamenti dell'Informatica (canale B, libro parte 2, §2.2, §2.4 e §2.5): le
  dimostrazioni per contrapposizione, per casi e di «se e solo se»; il principio di induzione, con gli esempi del
  libro; gli invarianti di ciclo del fattoriale e della potenza e la correttezza del risultato; l'induzione forte,
  con i francobolli, i prodotti e la forma a L.
lede: >-
  Le tre lezioni della settimana in poche pagine: gli ultimi metodi di prova del §2.2, l'induzione nelle sue due
  forme, e gli invarianti di ciclo, che nelle simulazioni d'esame hanno un quiz tutto loro.
materiale: libro
simboli_logici: quantificatori
scheda:
  Lezioni: "[17](17_contrapposizione_casi_equivalenze.html) lun 09/11, §2.2 · [18](18_induzione.html) gio 12/11, §2.4 · [19](19_induzione_forte.html) ven 13/11, §2.5"
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni 17, 18 e 19 di Fondamenti dell'Informatica (canale B), scritti sul diario del docente,
  sul libro di testo, parte 2 (Johnsonbaugh, cap. 2), e sulle note di F. Cardone (canale A)
appunti_html: appunti/FDA/riassunto_settimana_07.html
genera_html: true
---

## In breve

- **Per contrapposizione**: al posto di una frase «se… allora…» si dimostra la sua contronominale, con le due parti scambiate e negate, che è equivalente.
- **Per casi**: si divide in situazioni che coprono tutto, e si dimostra la tesi in ognuna.
- **«Se e solo se»**: due frecce, due dimostrazioni.
- **Induzione**: passo base per il primo numero, passo induttivo da $n$ a $n + 1$. Insieme danno la frase per tutti i numeri.
- Un **invariante di ciclo** è una frase vera prima del ciclo e dopo ogni giro. Si dimostra per induzione sul numero di giri.
- Il **risultato** di un ciclo viene dall'invariante più la condizione di uscita.
- **Induzione forte**: nel passo si possono usare tutti i casi precedenti, non solo l'ultimo. Può servire più di un caso base.

> [!NOTA] Le lezioni della settimana
> Il docente ha finito il §2.2 lunedì 09/11, ha saltato il §2.3 sulla risoluzione, e ha fatto il §2.4 giovedì 12/11 e il §2.5 venerdì 13/11. Le lezioni 18 e 19 le ho scritte sul diario, prima delle lezioni.

## 17 · Contrapposizione, casi, equivalenze (lun 09/11)

Tre modi di organizzare una dimostrazione, da scegliere guardando la frase.

| Metodo | Che cosa si suppone | Dove si arriva | Quando conviene |
|---|---|---|---|
| diretta | $P$ | $Q$ | l'ipotesi dà una formula da usare |
| contrapposizione | non $Q$ | non $P$ | è il contrario della tesi a dare una formula |
| assurdo | $P$ e non $Q$ | una contraddizione | servono tutte e due le informazioni |
| casi | $P$, in ogni caso | $Q$, in ogni caso | l'ipotesi si divide in situazioni diverse |

- **Contrapposizione.** «Se $x^2$ è irrazionale, allora $x$ è irrazionale»: «irrazionale» non dà formule. La contronominale sì: se $x$ è una frazione di interi, il suo quadrato è una frazione di interi. Le due parti si **scambiano** e si **negano**, e negando un «e» diventa «oppure».
- **Casi.** Per $\lvert xy \rvert = \lvert x \rvert \cdot \lvert y \rvert$ si guardano i segni: quattro casi. I casi devono coprire **tutte** le possibilità; un caso dimenticato lascia la dimostrazione incompleta.
- **Equivalenze.** «$n$ è dispari se e solo se $n - 1$ è pari» vuol dire due frasi: da sinistra a destra e da destra a sinistra. Una direzione sola non basta.

::: prova Qual è la contronominale di «se $mn$ è pari, allora $m$ è pari oppure $n$ è pari»?
«Se $m$ è dispari e $n$ è dispari, allora $mn$ è dispari.» L'«oppure» negato diventa «e».
:::

> [!RICORDA]
> - Contrapposizione: da non $Q$ a non $P$, in modo diretto.
> - Casi: coprono tutto, e la tesi va dimostrata in ognuno.
> - Se e solo se: due direzioni.

## 18 · Induzione e invarianti (gio 12/11)

Una frase su tutti i numeri è una fila di frasi, una per ogni numero. Per dimostrarle tutte bastano due passi.

1. **Passo base**: la frase è vera per il primo numero.
2. **Passo induttivo**: suppongo la frase per $n$ (ipotesi induttiva) e la dimostro per $n + 1$.

Nel passo induttivo si cerca di far comparire il caso $n$ dentro il caso $n + 1$. Per «$5^n - 1$ è divisibile per 4»: $5^{n+1} - 1 = 5 \cdot (5^n - 1) + 4$. Il primo addendo è divisibile per 4 per ipotesi induttiva, il secondo è 4.

Lo stesso schema si applica ai cicli. Un **invariante** è una frase sulle variabili che è vera prima del ciclo e resta vera dopo ogni giro. Per il fattoriale:

```c
i = 1; fact = 1;
while (i < n) { i = i + 1; fact = fact * i; }
```

l'invariante è `fact == i!`. Prima del ciclo $1 = 1!$; se vale prima di un giro, dopo il giro `i` è cresciuto di uno e `fact` è stato moltiplicato per il nuovo `i`, quindi vale ancora. All'uscita `i == n`, e allora `fact == n!`.

Nel quiz «seleziona gli invarianti» si controlla ogni affermazione in due momenti: **prima del ciclo** e **dopo un giro qualsiasi**. Un'affermazione vera solo alla fine, come `i == n`, non è un invariante.

::: prova Nel ciclo del fattoriale con `n = 4`, quanto valgono `i` e `fact` dopo 2 giri? L'invariante vale?
`i = 3` e `fact = 6`. Sì: $6 = 3!$.
:::

> [!RICORDA]
> - Induzione: passo base, poi da $n$ a $n + 1$ usando l'ipotesi induttiva.
> - Invariante: vero prima del ciclo e dopo ogni giro.
> - Risultato = invariante + condizione di uscita.

## 19 · Induzione forte (ven 13/11)

Il ciclo della potenza ha un invariante in due parti.

```c
i = 0; ris = 1;
while (i < n) { ris = ris * a; i = i + 1; }
```

L'invariante è `ris == a^i` **e** `i <= n`. La seconda parte serve all'uscita: la condizione falsa dà `i >= n`, l'invariante dà `i <= n`, quindi `i == n` e `ris == a^n`.

Poi l'**induzione forte**. Con francobolli da 2 e da 5 centesimi si fa ogni affrancatura da 4 in su: ogni caso viene da quello di due posti prima, con un francobollo da 2 in più. L'ipotesi «solo il caso prima» non basta.

```grafico
titolo: Le due forme dell'induzione per dimostrare S(10). Sopra, la forma ordinaria: si usa solo il caso subito prima, S(9). Sotto, la forma forte: sono disponibili tutti i casi da quello di partenza in su, e nei francobolli si usa S(8)
x: 0 12.4
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
testo: 1.3 3.6 | grigio | "ordinaria"
poligono: 2.6 3.2 3.8 3.2 3.8 4.0 2.6 4.0 | grigio | tenue
testo: 3.2 3.6 | grigio | "S(4)"
testo: 4.6 3.6 | grigio | "…"
poligono: 5.4 3.2 6.6 3.2 6.6 4.0 5.4 4.0 | grigio | tenue
testo: 6.0 3.6 | grigio | "S(8)"
poligono: 7.2 3.2 8.4 3.2 8.4 4.0 7.2 4.0 | blu | pieno
testo: 7.8 3.6 | blu | "S(9)"
freccia: 8.5 3.6 9.5 3.6 | blu
poligono: 9.6 3.2 10.9 3.2 10.9 4.0 9.6 4.0 | verde | pieno
testo: 10.25 3.6 | verde | "S(10)"
testo: 1.3 1.4 | grigio | "forte"
poligono: 2.6 1.0 3.8 1.0 3.8 1.8 2.6 1.8 | ambra | pieno
testo: 3.2 1.4 | ambra | "S(4)"
testo: 4.6 1.4 | ambra | "…"
poligono: 5.4 1.0 6.6 1.0 6.6 1.8 5.4 1.8 | ambra | pieno
testo: 6.0 1.4 | ambra | "S(8)"
poligono: 7.2 1.0 8.4 1.0 8.4 1.8 7.2 1.8 | ambra | pieno
testo: 7.8 1.4 | ambra | "S(9)"
freccia: 8.5 1.4 9.5 1.4 | ambra
poligono: 9.6 1.0 10.9 1.0 10.9 1.8 9.6 1.8 | verde | pieno
testo: 10.25 1.4 | verde | "S(10)"
testo: 5.5 0.4 | ambra | "tutti disponibili come ipotesi"
```

- **Principio di induzione forte**: si dimostra la frase per il primo numero $n_0$. Poi, per ogni $n$ più grande, si dimostra $S(n)$ supponendo vere tutte le frasi precedenti, da $S(n_0)$ a $S(n - 1)$. Allora la frase vale per ogni $n \ge n_0$.
- **Più casi base**: nei francobolli il passo usa $n - 2$ e vale da 6 in su, quindi 4 e 5 si verificano a mano.
- **Prodotti**: per moltiplicare $n$ fattori servono $n - 1$ prodotti. L'ultimo prodotto unisce due blocchi più piccoli di grandezza non nota: serve la forma forte.
- **Forma a L**: una forma a L di lato $2^n$ si divide in quattro forme a L di lato metà, e così si ricopre di tromini. Qui basta l'induzione ordinaria.
- Tre fatti da quiz: l'induzione forte riguarda gli **interi**; può **sempre sostituire** quella ordinaria; serve quando l'ipotesi va usata **non solo sul caso subito prima**.

::: prova Con francobolli da 3 e da 5 si fa ogni affrancatura da 8 in su. Quanti casi base servono, e perché?
Tre: 8, 9 e 10. Il passo aggiunge un francobollo da 3, quindi usa il caso $n - 3$ e vale da 11 in su.
:::

> [!RICORDA]
> - Potenza: `ris == a^i` e `i <= n`; la seconda parte serve per l'uscita.
> - Induzione forte: nel passo valgono tutti i casi precedenti.
> - Tanti casi base quanti ne servono al passo per non uscire dalla zona dimostrata.

## Verso l'esame

- **Quiz sugli invarianti**: simulazione 2 del 2023/24, quiz 7. Si controlla ogni affermazione prima del ciclo e dopo un giro.
- **Quiz sull'induzione forte**: simulazione 1 del 2023/24, quiz 9.
- **Riconoscere il metodo** di una dimostrazione da che cosa suppone all'inizio.
- **Domanda aperta facoltativa**: una dimostrazione per induzione corta, con passo base, ipotesi induttiva scritta e punto in cui la si usa.
- Appelli 2026/27: venerdì 29/01/2027 e giovedì 18/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Che differenza c'è tra contrapposizione e assurdo?
Per contrapposizione si suppone solo non $Q$ e si arriva a non $P$. Per assurdo si suppongono $P$ e non $Q$ e si arriva a una contraddizione qualsiasi.
:::

::: domanda Che cosa si suppone nel passo induttivo?
Che la frase valga per un certo $n$, l'ipotesi induttiva. Non la frase per $n + 1$, che è quella da dimostrare.
:::

::: domanda Come si controlla se un'affermazione è un invariante di un ciclo?
Si guarda se è vera prima del ciclo, e se da «vera prima di un giro» segue «vera dopo il giro».
:::

::: domanda Da dove viene il risultato di un ciclo?
Dall'invariante insieme alla condizione di uscita: quando la condizione del `while` diventa falsa.
:::

::: domanda Quando serve l'induzione forte?
Quando il caso $n$ si ricava da un caso più indietro di $n - 1$, o da più casi precedenti.
:::

::: domanda Perché nei francobolli da 2 e da 5 servono due casi base?
Perché il passo usa il caso $n - 2$: dal 4 si raggiungono solo i pari, e il 5 va verificato a mano.
:::

## Quiz d'esame

Le prime tre vengono dalle due domande vere delle simulazioni d'esame 2023/24 su questi argomenti: il quiz 7 della simulazione 2 e il quiz 9 della simulazione 1, messi in forma di scelta singola. Le risposte giuste sono quelle segnate nella copia compilata da uno studente, ricontrollate con un programma. Le altre sono **sul modello** dei quiz e degli esercizi del libro.

```quiz
D: Simulazione 2 del 2023/24, quiz 7. Nel frammento `i=1; s=0; while (i < n) { s = s + i; i++; } s = s + i;`, con `n >= 0`, quale coppia è fatta di due invarianti del ciclo?
+ `i >= 1` e `s == 1 + … + (i - 1)`
- `i < n` e `s == 1 + … + i`
- `i == n` e `s == 1 + … + n`
- `i >= 1` e `s == 1 + … + i`
- `i < n` e `s == 1 + … + (i - 1)`
= Prima del ciclo `i = 1` e `s = 0`, la somma vuota; a ogni giro si aggiunge `i` e poi `i` cresce. Sono le due affermazioni segnate «sì» nella simulazione. La più insidiosa è la quarta: `s == 1 + … + i` è falsa già prima del ciclo, dove darebbe 1.

D: Dalla stessa domanda della simulazione 2. Con `n = 5`, quanto vale `s` dopo l'ultima istruzione `s = s + i`?
N: 15
= All'uscita `i == 5` e, per l'invariante, `s == 1 + 2 + 3 + 4 = 10`. L'ultima istruzione aggiunge 5. Per `n >= 1` il frammento calcola la somma da 1 a `n`.

D: Simulazione 1 del 2023/24, quiz 9, adattata a una risposta sola. Quale di queste affermazioni vale per il principio di induzione forte?
+ può essere sempre usato in sostituzione dell'induzione semplice
- serve nei casi in cui l'enunciato non riguarda i numeri interi
- può essere usato per svolgere dimostrazioni sui numeri reali
- richiede sempre almeno due casi base
- dimostra frasi che con l'induzione semplice non si possono dimostrare
= È l'affermazione b del quiz; le prime due sbagliate sono del quiz, le ultime due le ho aggiunte io. Nel quiz vero è giusta anche la d. La più insidiosa è l'ultima: le due forme dimostrano le stesse cose.

D: Sul modello delle domande sui metodi. Una dimostrazione di «se $P$ allora $Q$» comincia con «supponiamo $P$ e non $Q$» e finisce con «$0 = 1$». Che metodo è?
+ per assurdo
- per contrapposizione
- diretta
- per casi
- per induzione
= Si suppongono l'ipotesi e il contrario della tesi, e si arriva a una contraddizione. La più insidiosa è la contrapposizione, che suppone solo non $Q$ e arriva a non $P$.

D: Sul modello degli esercizi del §2.2. Per dimostrare per casi una proprietà di tutti gli interi $n$, quale divisione **non** va bene?
+ $n > 0$ e $n < 0$
- $n$ pari e $n$ dispari
- $n \ge 0$ e $n < 0$
- $n = 3k$, $n = 3k + 1$ e $n = 3k + 2$
- $n \le 5$ e $n > 5$
= Manca lo zero: i casi non coprono tutto. La più insidiosa è la quarta, che sembra strana ma copre tutti gli interi, uno per ogni resto della divisione per 3.

D: Sul modello degli esercizi del §2.4. Nel passo induttivo di «$7^n - 1$ è divisibile per 6», quale riscrittura fa comparire l'ipotesi induttiva?
+ $7^{n+1} - 1 = 7 \cdot (7^n - 1) + 6$
- $7^{n+1} - 1 = 7^n + 7 - 1$
- $7^{n+1} - 1 = (7^n - 1)^2$
- $7^{n+1} - 1 = 7 \cdot 7^n - 7$
- $7^{n+1} - 1 = 6 \cdot 7^n$
= $7 \cdot (7^n - 1) + 6 = 7^{n+1} - 7 + 6$. Il primo addendo è divisibile per 6 per ipotesi, il secondo è 6. La più insidiosa è la quarta: vale $7^{n+1} - 7$, non $7^{n+1} - 1$.

D: Sul modello del quiz sugli invarianti. Nel ciclo `i = 0; ris = 1; while (i < n) { ris = ris * a; i = i + 1; }`, quale affermazione **non** è un invariante?
+ `i < n`
- `i <= n`
- `ris == a^i`
- `i >= 0`
- `ris == a^i` e `i <= n`
= `i < n` è la condizione del ciclo: dopo l'ultimo giro è falsa. La più insidiosa è `i <= n`, che le somiglia ma resta vera anche all'uscita, ed è proprio quella che serve.

D: Sul modello dell'esempio 2.5.1. Con francobolli da 3 e da 5 centesimi, quante affrancature da 1 a 10 centesimi **non** si possono comporre?
N: 4
= Non si fanno 1, 2, 4 e 7. Da 8 in su si fanno tutte: 8, 9 e 10 a mano, poi aggiungendo francobolli da 3.
```

## Fonti

- Le lezioni complete: [17 · Contrapposizione, casi ed equivalenze](17_contrapposizione_casi_equivalenze.html), [18 · Il principio di induzione e gli invarianti di ciclo](18_induzione.html), [19 · Induzione forte, invariante della potenza e tromini](19_induzione_forte.html), con gli esempi, i disegni e gli esercizi.
- Libro di testo del corso, parte 2 (Johnsonbaugh, cap. 2), §2.2, §2.4 e §2.5, con le soluzioni ufficiali pubblicate sul Moodle del canale A; F. Cardone, «Induzione e ricorsione».
- Simulazioni d'esame 1 e 2 del 2023/24 (quiz 9 e quiz 7), dalla trascrizione delle schermate con le risposte di uno studente; diario delle lezioni del canale B (Berardi).
