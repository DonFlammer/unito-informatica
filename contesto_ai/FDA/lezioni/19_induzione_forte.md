---
corso: FDA
lezione: "19"
titolo: Induzione forte, invariante della potenza e tromini
data: 2026-11-13
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 19 · Libro, parte 2, §2.4 (fine) e §2.5
simboli_logici: quantificatori
descrizione: >-
  Appunti della lezione 19 di Fondamenti dell'Informatica (canale B): l'invariante del ciclo che calcola la potenza e la
  correttezza del risultato, il principio di induzione forte del §2.5, i francobolli da 2 e 5 centesimi (esempio 2.5.1),
  gli n − 1 prodotti per n fattori (esempio 2.5.4), la forma a L ricoperta di tromini (esercizio 39) e il quiz
  sull'induzione forte della simulazione 1 del 2023/24.
lede: >-
  A volte per dimostrare un caso non basta il caso subito prima: ne serve uno più indietro, o più di uno. L'induzione
  forte permette di usare tutti i casi precedenti. Prima c'è un secondo invariante di ciclo, quello della potenza, e
  alla fine una figura a L che si ricopre di pezzi a L.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 2 (Johnsonbaugh, cap. 2), §2.4 (esercizio 39) e §2.5, esempi 2.5.1 e 2.5.4
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  Libro di testo del corso, parte 2 (R. Johnsonbaugh, Discrete Mathematics, cap. 2), §2.4 e §2.5 «Strong Form of
  Induction and the Well-Ordering Property», con le domande di ripasso e le soluzioni degli esercizi pubblicate sul
  Moodle del canale A; F. Cardone, «Induzione e ricorsione» (Moodle del canale A); simulazione d'esame 1 del 2023/24,
  quiz 9; diario del canale B
appunti_html: appunti/FDA/19_induzione_forte.html
genera_html: true
---

## In breve

- Il ciclo della **potenza** ha un invariante in due parti: `ris == a^i` e `i <= n`. La seconda serve per dire che all'uscita `i` vale proprio `n`.
- **Correttezza del risultato**: all'uscita la condizione `i < n` è falsa; con `i <= n` dà `i == n`, e con la prima parte dà `ris == a^n`.
- Nell'**induzione forte** l'ipotesi induttiva non è solo il caso prima: sono **tutti** i casi precedenti, dalla base in su.
- Serve quando il caso $n$ si costruisce da un caso più indietro: per i francobolli, dal caso $n - 2$.
- Quando il passo torna indietro di più di uno, servono **più casi base**: per i francobolli, 4 e 5.
- **Francobolli**: ogni affrancatura da 4 centesimi in su si ottiene con francobolli da 2 e da 5.
- **Prodotti**: per moltiplicare $n$ fattori servono sempre $n - 1$ prodotti, comunque si mettano le parentesi.
- Una **forma a L** di lato $2^n$ si ricopre con i tromini: si divide in quattro forme a L di lato metà.

> [!CANALI]
> Nel canale B è la lezione di venerdì 13/11, dalle 11 alle 13. Per il docente è la lezione 20: qui è la 19. **L'ho scritta prima della lezione**, sul diario del canale B: «Invariante del ciclo che calcola la potenza: ris=a^i, i<=n. Correttezza del risultato. Capitolo 2.5 Induzione in forma forte. Esempio 2.5.1 (francobolli da 2 e 5 cents). Esempio 2.5.4: occorrono n-1 prodotti per n fattori. Esercizio 39 pagina 98: tassellazione L-shape con tromini». Quali passaggi abbia svolto davvero in aula non lo so.
>
> **Che cosa ho del libro.** Il libro non ce l'ho; ho le soluzioni ufficiali. Per il ciclo della potenza c'è la soluzione dell'esercizio 45 del §2.4, che usa un indice che parte da 1: la riporto accanto alla versione del diario. Per i francobolli c'è la soluzione dell'esercizio 4 del §2.5, che rifà lo stesso risultato con l'induzione ordinaria. L'esercizio 39 non ha una soluzione pubblicata, ma la soluzione del 40 dice che cosa afferma: una forma a L di lato $2^n$ si ricopre con i tromini. Gli enunciati degli esempi 2.5.1 e 2.5.4 sono quelli dell'edizione originale di Johnsonbaugh; le dimostrazioni sono scritte da me.
>
> **Che cosa non c'è.** Nel §2.5 il libro ha anche il principio del buon ordinamento e il teorema di quoziente e resto (domande di ripasso 2 e 3). Il diario non li nomina e qui non li tratto. La divisione con il resto è nella [lezione D14 di Matematica Discreta](../MDAG/D14_interi_divisibilita_divisione_euclidea.html).
>
> Serve la [lezione 18](18_induzione.html): principio di induzione, invariante del fattoriale, scacchiera con i tromini.

## L'invariante del ciclo della potenza

Il ciclo calcola una potenza moltiplicando la base per sé stessa `n` volte. È lo stesso schema del fattoriale della [lezione 18](18_induzione.html), con un invariante che questa volta scrivo in **due parti**.

```c
i = 0;
ris = 1;
while (i < n) {
    ris = ris * a;
    i = i + 1;
}
```

Prima i numeri, con `a = 3` e `n = 4`:

| Giri fatti | `i` | `ris` | $3^i$ |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 1 | 1 | 3 | 3 |
| 2 | 2 | 9 | 9 |
| 3 | 3 | 27 | 27 |
| 4 | 4 | 81 | 81 |

In ogni riga `ris` è `a` elevato a `i`, e `i` non supera `n`. L'invariante del diario è: **`ris == a^i` e `i <= n`**.

> [!ESEMPIO] · L'invariante, per induzione sul numero di giri
> **Passo base: dopo 0 giri.** `i = 0` e `ris = 1`. Vale $1 = a^0$, e $0 \le n$ perché `n` non è negativo.
>
> **Passo induttivo.** Suppongo che dopo $k$ giri valgano $ris = a^i$ e $i \le n$ (ipotesi induttiva), e che il ciclo faccia un altro giro. Se il giro si fa, la condizione era vera: $i < n$.
>
> I valori nuovi: $ris' = ris \cdot a = a^i \cdot a = a^{i+1}$, usando l'ipotesi induttiva. E $i' = i + 1$.
>
> Prima parte: $ris' = a^{i'}$. Seconda parte: da $i < n$ segue $i + 1 \le n$, cioè $i' \le n$. L'invariante vale ancora.

Nel passo induttivo la seconda parte usa un fatto in più: **il giro si fa solo se la condizione del ciclo è vera**. È da $i < n$ che si ricava $i' \le n$.

### La correttezza del risultato

1. Il ciclo finisce quando `i < n` è falsa: all'uscita `i >= n`.
2. Per la seconda parte dell'invariante, `i <= n`.
3. Insieme: `i == n`.
4. Per la prima parte, `ris == a^i`: quindi **`ris == a^n`**.

Senza la seconda parte il punto 3 non si potrebbe scrivere. Sapendo solo `i >= n` non si esclude che `i` abbia saltato oltre `n`: è vero che cresce di uno alla volta, ma questo va detto, e `i <= n` lo dice.

Ho trascritto il ciclo in C con gli `assert` dell'invariante, e l'ho provato per `a` da 0 a 6 e `n` da 0 a 12: nessun `assert` fallisce.

> [!NOTA] La versione dell'esercizio 45 del libro
> Nella soluzione ufficiale l'indice parte da 1: `i = 1; pow = 1; while (i <= n) { pow = pow * a; i = i + 1; }`. L'invariante è `pow == a^(i-1)`: prima del ciclo $1 = a^0$, e a ogni giro `pow` guadagna un fattore mentre `i` cresce di uno. Il ciclo finisce con `i == n + 1`, e allora `pow == a^n`. È lo stesso ragionamento con l'indice spostato di uno. Provata anche questa.

::: prova Con `a = 2` e `n = 5`, quanto valgono `i` e `ris` dopo 3 giri? L'invariante è vero?
`i = 3` e `ris = 8`. Sì: $8 = 2^3$ e $3 \le 5$.
:::

> [!RICORDA]
> - Invariante della potenza: `ris == a^i` e `i <= n`.
> - Nel passo induttivo si può usare che la condizione del ciclo era vera.
> - All'uscita: condizione falsa più `i <= n` danno `i == n`, quindi `ris == a^n`.

## I francobolli da 2 e da 5 (esempio 2.5.1)

Con francobolli da 2 e da 5 centesimi si vuole comporre un'affrancatura di un certo numero di centesimi. Per alcuni valori piccoli non si può: 1 e 3. Da 4 in su sembra che si possa sempre:

| Centesimi | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|
| da 2 | 2 | 0 | 3 | 1 | 4 | 2 | 5 | 3 |
| da 5 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |

Guardando la tabella si vede come nasce ogni colonna: è quella **di due posti prima**, con un francobollo da 2 in più. Per fare 9 si prende la soluzione di 7 e si aggiunge un 2. Per fare $n$ serve il caso $n - 2$.

Con l'induzione della [lezione 18](18_induzione.html) l'ipotesi induttiva è solo il caso subito prima, $n - 1$. Qui serve quello di due posti prima. E servono **due** punti di partenza: 4 e 5. Da 4 si raggiungono 6, 8, 10…; da 5 si raggiungono 7, 9, 11…

```grafico
titolo: I francobolli sulla retta dei numeri. I due casi base, 4 e 5, sono in verde. Ogni altro numero si raggiunge con un salto di 2 (un francobollo da 2 in più) da un numero già raggiunto: i pari partono dal 4, i dispari dal 5
x: 0 12.4
y: 0 3.6
assi: no
griglia: no
proporzioni: libere
segmento: 0.6 1.4 11.8 1.4 | grigio
punto: 1.2 1.4 | verde
testo: 1.2 0.8 | verde | "4"
punto: 2.6 1.4 | verde
testo: 2.6 0.8 | verde | "5"
punto: 4.0 1.4 | blu
testo: 4.0 0.8 | blu | "6"
punto: 5.4 1.4 | ambra
testo: 5.4 0.8 | ambra | "7"
punto: 6.8 1.4 | blu
testo: 6.8 0.8 | blu | "8"
punto: 8.2 1.4 | ambra
testo: 8.2 0.8 | ambra | "9"
punto: 9.6 1.4 | blu
testo: 9.6 0.8 | blu | "10"
punto: 11.0 1.4 | ambra
testo: 11.0 0.8 | ambra | "11"
freccia: 1.2 1.6 4.0 2.6 | blu
freccia: 4.0 2.6 6.8 1.6 | blu | sottile
freccia: 6.8 1.6 9.6 2.6 | blu
freccia: 2.6 1.6 5.4 3.2 | ambra
freccia: 5.4 3.2 8.2 1.6 | ambra | sottile
freccia: 8.2 1.6 11.0 3.2 | ambra
testo: 1.9 0.25 | verde | "casi base"
testo: 9.0 0.25 | grigio | "ogni salto: + 2 centesimi"
```

> [!ESEMPIO] · Ogni affrancatura da 4 centesimi in su si fa con francobolli da 2 e da 5
> **Passi base, $n = 4$ e $n = 5$.** 4 centesimi: due francobolli da 2. 5 centesimi: uno da 5.
>
> **Passo induttivo.** Prendo $n \ge 6$ e suppongo che **ogni** affrancatura da 4 a $n - 1$ centesimi si possa fare (ipotesi induttiva forte).
>
> Il numero $n - 2$ è almeno 4, perché $n \ge 6$, ed è minore di $n$: sta tra i casi dell'ipotesi. Quindi $n - 2$ centesimi si fanno.
>
> Aggiungo un francobollo da 2: ottengo $n$ centesimi.
>
> Per l'induzione forte, la frase vale per ogni $n \ge 4$.

Il passo induttivo comincia da 6 e non da 5 per un motivo preciso: deve essere $n - 2 \ge 4$. Per questo il 5 non si ricava dal passo e va verificato a mano, come secondo caso base.

::: prova Con lo stesso ragionamento, come si ottengono 13 centesimi a partire dai casi base?
Dal 5, aggiungendo quattro francobolli da 2: 5, 7, 9, 11, 13. Un 5 e quattro 2.
:::

> [!RICORDA]
> - Se il caso $n$ viene dal caso $n - 2$, l'ipotesi «solo il caso prima» non basta.
> - Tanti casi base quanti ne servono perché il passo non esca dalla zona già dimostrata.

## Il principio di induzione forte (libro, §2.5)

Il principio che giustifica il ragionamento dei francobolli è la risposta ufficiale alla domanda di ripasso 1 del §2.5.

> [!TEOREMA] Principio di induzione forte
> Sia $S(n)$ una funzione proposizionale il cui dominio sono gli interi da $n_0$ in su. Supponiamo che:
> 1. $S(n_0)$ sia vera;
> 2. per ogni $n > n_0$, se $S(k)$ è vera per tutti i $k$ con $n_0 \le k < n$, allora $S(n)$ è vera.
>
> Allora $S(n)$ è vera per ogni intero $n \ge n_0$.

**Come si legge.** $n_0$ è il punto di partenza: per i francobolli è 4. La differenza con l'induzione ordinaria sta nel punto 2: per dimostrare il caso $n$ si possono usare **tutti i casi prima**, da $n_0$ a $n - 1$, non solo l'ultimo. Con le tessere del domino: per far cadere una tessera si può contare sul fatto che sono già cadute tutte quelle prima.

| | Induzione ordinaria | Induzione forte |
|---|---|---|
| ipotesi induttiva | il caso $n$ | tutti i casi da $n_0$ a $n - 1$ |
| si dimostra | il caso $n + 1$ | il caso $n$ |
| quando serve | il caso nuovo viene da quello subito prima | il caso nuovo viene da uno o più casi più indietro |

Tre cose da sapere, che sono anche quelle del quiz d'esame:

- **Riguarda gli interi**, come l'induzione ordinaria. Non si usa per frasi sui numeri reali: tra un reale e l'altro non c'è un «successivo».
- **Può sempre sostituire l'induzione ordinaria.** Tra tutti i casi precedenti c'è anche quello subito prima: chi ha un'ipotesi più ricca può usarne solo un pezzo.
- **Non dimostra più cose.** Tutto quello che si dimostra con la forma forte si dimostra anche con quella ordinaria, cambiando la frase $S(n)$. Cardone lo dimostra nei suoi appunti; qui non serve.

> [!ESEMPIO] · I francobolli con l'induzione ordinaria (esercizio 4 del §2.5)
> La soluzione ufficiale rifà il risultato senza la forma forte, con un passo più furbo.
>
> **Passo base.** 4 centesimi: due francobolli da 2.
>
> **Passo induttivo.** Suppongo di saper fare $n$ centesimi, e faccio $n + 1$. Se tra i francobolli c'è almeno un 5, lo tolgo e metto tre francobolli da 2: da 5 a 6, un centesimo in più. Se non c'è nessun 5, ci sono almeno due francobolli da 2, perché $n \ge 4$: ne tolgo due e metto un 5: da 4 a 5, un centesimo in più.
>
> Qui basta il caso subito prima, ma il passo ha due casi. Con la forma forte il passo è una riga, e i casi base sono due.

::: prova Nell'induzione forte dei francobolli, quali casi si possono usare per dimostrare $S(10)$? Quale si usa davvero?
Tutti quelli da $S(4)$ a $S(9)$. Si usa solo $S(8)$.
:::

> [!RICORDA]
> - Induzione forte: nel passo si suppongono veri tutti i casi da $n_0$ a $n - 1$.
> - Vale per gli interi, può sempre sostituire l'induzione ordinaria.

## Quanti prodotti per n fattori (esempio 2.5.4)

Un prodotto di quattro numeri si può calcolare in ordini diversi, secondo dove si mettono le parentesi. Con $(a_1 a_2)(a_3 a_4)$ si fanno due prodotti dentro le parentesi e uno tra i risultati: tre. Con $((a_1 a_2) a_3) a_4$ si moltiplica un fattore alla volta: di nuovo tre. La frase da dimostrare: per moltiplicare $n$ numeri servono **sempre $n - 1$ prodotti**, comunque si mettano le parentesi.

```grafico
titolo: Due modi di moltiplicare quattro fattori. A sinistra (a1·a2)·(a3·a4): due prodotti in basso e uno in cima. A destra ((a1·a2)·a3)·a4: tre prodotti in fila. Ogni cerchio è un prodotto: sono 3 in tutti e due i modi
x: 0 12.4
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
testo: 0.8 0.5 | grigio | "a1"
testo: 2.0 0.5 | grigio | "a2"
testo: 3.4 0.5 | grigio | "a3"
testo: 4.6 0.5 | grigio | "a4"
cerchio: 1.4 2.0 0.35 | blu
cerchio: 4.0 2.0 0.35 | blu
cerchio: 2.7 3.6 0.35 | ambra
segmento: 0.8 0.8 1.3 1.7 | grigio
segmento: 2.0 0.8 1.5 1.7 | grigio
segmento: 3.4 0.8 3.9 1.7 | grigio
segmento: 4.6 0.8 4.1 1.7 | grigio
segmento: 1.6 2.3 2.5 3.3 | grigio
segmento: 3.8 2.3 2.9 3.3 | grigio
testo: 7.0 0.5 | grigio | "a1"
testo: 8.2 0.5 | grigio | "a2"
testo: 9.6 0.5 | grigio | "a3"
testo: 11.0 0.5 | grigio | "a4"
cerchio: 7.6 1.7 0.35 | blu
cerchio: 8.8 2.8 0.35 | blu
cerchio: 10.0 3.9 0.35 | ambra
segmento: 7.0 0.8 7.5 1.4 | grigio
segmento: 8.2 0.8 7.7 1.4 | grigio
segmento: 7.8 2.0 8.6 2.5 | grigio
segmento: 9.6 0.8 8.9 2.5 | grigio
segmento: 9.0 3.1 9.8 3.6 | grigio
segmento: 11.0 0.8 10.2 3.6 | grigio
testo: 2.7 4.3 | ambra | "3 prodotti"
testo: 10.0 4.5 | ambra | "3 prodotti"
```

L'idea: in qualunque modo si mettano le parentesi, c'è un **ultimo prodotto**, quello fatto per ultimo, che unisce due blocchi. Nel disegno è il cerchio in cima. Il blocco di sinistra ha un certo numero $k$ di fattori, quello di destra gli altri $n - k$. Quanti siano non si sa: può essere 1 e 3, o 2 e 2, o 3 e 1. Per questo serve l'ipotesi su **tutti** i casi più piccoli.

> [!ESEMPIO] · Per moltiplicare $n$ fattori servono $n - 1$ prodotti
> **Passo base, $n = 1$.** Un solo numero: non c'è niente da moltiplicare, 0 prodotti. E $1 - 1 = 0$.
>
> **Passo induttivo.** Prendo $n \ge 2$ e suppongo la frase vera per ogni numero di fattori da 1 a $n - 1$ (ipotesi induttiva forte).
>
> L'ultimo prodotto unisce un blocco di $k$ fattori e uno di $n - k$ fattori, con $k$ tra 1 e $n - 1$. Tutti e due i blocchi hanno meno di $n$ fattori.
>
> Per l'ipotesi, il primo blocco costa $k - 1$ prodotti e il secondo $n - k - 1$.
>
> In tutto: $(k - 1) + (n - k - 1) + 1 = n - 1$. Il $+1$ è l'ultimo prodotto. Il risultato non dipende da $k$.

Ho contato con un programma i prodotti di tutte le disposizioni di parentesi fino a 11 fattori: sono sempre $n - 1$.

Lo stesso ragionamento risponde a una domanda che sembra diversa: quanti tagli servono per dividere una tavoletta di cioccolato da $n$ quadretti nei singoli quadretti, spezzando un pezzo alla volta? Sempre $n - 1$, in qualunque ordine si spezzi.

::: prova Nella dimostrazione, con $n = 7$ e l'ultimo prodotto che unisce un blocco da 3 e uno da 4, quanti prodotti servono in tutto?
$2 + 3 + 1 = 6$, cioè $7 - 1$.
:::

> [!RICORDA]
> - Se il caso $n$ si spezza in due casi più piccoli di grandezza non nota, serve l'induzione forte.
> - $n$ fattori: $n - 1$ prodotti, comunque si mettano le parentesi.

## La forma a L e i tromini (esercizio 39 del §2.4)

Nella [lezione 18](18_induzione.html) una scacchiera con un quadretto mancante si ricopriva di tromini, i pezzi a L da tre quadretti. Qui la figura da ricoprire è lei stessa a L. Una **forma a L di lato $2^n$** è fatta di tre quadrati $2^n \times 2^n$ disposti a L: è una scacchiera di lato doppio a cui manca un intero quarto.

La frase: per ogni $n \ge 0$, una forma a L di lato $2^n$ si ricopre con i tromini.

Per $n = 0$ i tre quadrati hanno lato 1: la forma a L **è** un tromino. Per $n = 1$ ha 12 quadretti, e il disegno mostra come si divide.

```grafico
titolo: Una forma a L di lato 2 (tre quadrati 2 × 2) divisa in quattro forme a L di lato 1, cioè quattro tromini: una al centro, attorno all'angolo interno (ambra), e una in ciascuna delle tre punte (blu, verde, viola). La stessa divisione vale per ogni lato: quattro forme a L di lato metà
x: 0 12.4
y: 0 4.8
assi: no
griglia: no
proporzioni: libere
poligono: 4.2 4.4 6.2 4.4 6.2 3.4 5.2 3.4 5.2 2.4 4.2 2.4 | blu | pieno
poligono: 5.2 3.4 6.2 3.4 6.2 2.4 7.2 2.4 7.2 1.4 5.2 1.4 | ambra | pieno
poligono: 4.2 0.4 6.2 0.4 6.2 1.4 5.2 1.4 5.2 2.4 4.2 2.4 | verde | pieno
poligono: 6.2 0.4 8.2 0.4 8.2 2.4 7.2 2.4 7.2 1.4 6.2 1.4 | viola | pieno
segmento: 4.2 0.4 8.2 0.4 | grigio | spesso
segmento: 8.2 0.4 8.2 2.4 | grigio | spesso
segmento: 8.2 2.4 6.2 2.4 | grigio | spesso
segmento: 6.2 2.4 6.2 4.4 | grigio | spesso
segmento: 6.2 4.4 4.2 4.4 | grigio | spesso
segmento: 4.2 4.4 4.2 0.4 | grigio | spesso
testo: 2.4 3.4 | blu | "punta in alto"
testo: 9.9 1.9 | viola | "punta a destra"
testo: 2.4 0.9 | verde | "angolo"
testo: 8.6 3.4 | ambra | "al centro"
```

> [!ESEMPIO] · Ogni forma a L di lato $2^n$ si ricopre con i tromini
> **Passo base, $n = 0$.** La forma a L di lato 1 è un tromino.
>
> **Passo induttivo.** Suppongo che ogni forma a L di lato $2^n$ si ricopra (ipotesi induttiva). Prendo una forma a L di lato $2^{n+1}$.
>
> La divido in quattro forme a L di lato $2^n$, come nel disegno: una al centro, girata come quella grande, e una in ciascuna delle due punte e nell'angolo.
>
> Per l'ipotesi induttiva ognuna delle quattro si ricopre con i tromini. Insieme ricoprono tutta la forma grande.

Questa è un'induzione **ordinaria**: il caso di lato $2^{n+1}$ viene dal caso subito prima. L'ipotesi si usa quattro volte, su forme girate in modi diversi: per questo la frase dice «ogni forma a L», in qualunque orientazione. Ho scritto la divisione come programma e l'ho provata fino al lato 16, che usa 256 tromini.

Con questo esercizio la scacchiera difettosa della lezione 18 ha una seconda dimostrazione, quella della soluzione ufficiale dell'esercizio 40. Si divide la scacchiera in quattro; il quarto con il buco si ricopre per ipotesi induttiva; gli altri tre quarti formano una forma a L, che si ricopre per l'esercizio 39.

::: prova Quanti tromini servono per una forma a L di lato 4?
La forma ha $3 \cdot 16 = 48$ quadretti: 16 tromini. In generale sono $4^n$ per il lato $2^n$.
:::

> [!RICORDA]
> - Forma a L di lato $2^n$: quattro forme a L di lato metà. Per $n = 0$ è un tromino.
> - Tre quarti di una scacchiera sono una forma a L: così si ricopre anche la scacchiera con un buco.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `ris == a^i` | «ris uguale ad a alla i» | prima parte dell'invariante della potenza | riga 2: `9 == 3^2` |
| `i <= n` | «i minore o uguale a n» | seconda parte: l'indice non supera `n` | serve per l'uscita |
| $n_0$ | «enne zero» | il primo caso, da cui parte l'induzione | $n_0 = 4$ per i francobolli |
| $n_0 \le k < n$ | «k da enne zero a n meno 1» | tutti i casi prima di $n$ | per $n = 10$: da 4 a 9 |
| $a_1 a_2 \cdots a_n$ | «prodotto di n fattori» | i numeri da moltiplicare | $(a_1 a_2)(a_3 a_4)$ |
| $2^n$ (lato) | «due alla enne» | il lato dei tre quadrati della forma a L | $n = 1$: lato 2 |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser; chi arriva a 24 punti può fare una domanda aperta facoltativa.

**Che cosa serve di questa lezione**

1. **Il quiz sul principio di induzione forte**: c'era nella simulazione 1 del 2023/24 (quiz 9).
2. **Gli invarianti**: riconoscerli, e sapere che per il risultato serve anche la condizione di uscita (quiz 7 della simulazione 2, nella lezione 18).
3. **Scegliere quanti casi base servono** in una dimostrazione con la forma forte.

### Una domanda vera, letta insieme

**Simulazione 1 del 2023/24, quiz 9.** Il testo: «Quali tra le seguenti affermazioni valgono per il principio di induzione forte. a. L'induzione forte serve nei casi in cui l'enunciato non riguarda i numeri interi. b. Il principio di induzione forte può essere sempre usato in sostituzione dell'induzione semplice. c. Il principio di induzione forte può essere usato per svolgere dimostrazioni sui numeri reali. d. Il principio di induzione forte può essere usato quando è necessario usare l'ipotesi induttiva non solo per il caso immediatamente precedente quello considerato.»

**In pratica chiede:** su che cosa lavora l'induzione forte, e che cosa ha in più di quella ordinaria.

> [!ESEMPIO] · la soluzione, affermazione per affermazione
> **a. Falsa.** L'induzione forte riguarda proprio gli interi: il dominio di $S(n)$ sono gli interi da $n_0$ in su.
>
> **b. Vera.** L'ipotesi forte contiene tutti i casi precedenti, compreso quello subito prima: ogni dimostrazione per induzione ordinaria si riscrive con la forma forte.
>
> **c. Falsa.** Sui reali non c'è un primo caso seguito da un successivo: il principio non si applica.
>
> **d. Vera.** È il caso dei francobolli, dove serve $n - 2$, e dei prodotti, dove servono due casi più piccoli qualsiasi.
>
> Le affermazioni vere sono **b** e **d**. Sono anche le due segnate nella copia della simulazione che ho, compilata da uno studente; le soluzioni ufficiali non le ho.

> [!METODO] Scrivere una dimostrazione per induzione forte
> 1. Scrivi $S(n)$ e il punto di partenza $n_0$.
> 2. Guarda da quali casi precedenti viene il caso $n$: uno più indietro, o due blocchi più piccoli.
> 3. Verifica a mano tutti i casi che il passo non riesce a raggiungere: sono i casi base.
> 4. Nel passo, scrivi da quale $n$ in poi vale, e l'ipotesi: «la frase è vera per ogni $k$ con $n_0 \le k < n$».
> 5. Controlla che i casi che usi stiano davvero tra $n_0$ e $n - 1$.

### Errori da evitare

- Usare il caso $n - 2$ con un solo caso base.
- Scrivere un invariante con una parte sola e poi dire «all'uscita `i == n`» senza giustificarlo.
- Dire che l'induzione forte dimostra frasi sui numeri reali.
- Nel passo forte, usare un caso che sta prima di $n_0$.

## Quiz

```quiz
D: Dalla simulazione 1 del 2023/24, quiz 9, adattata a una risposta sola. Quale di queste affermazioni vale per il principio di induzione forte?
+ può essere usato quando serve l'ipotesi induttiva non solo per il caso immediatamente precedente
- serve nei casi in cui l'enunciato non riguarda i numeri interi
- può essere usato per svolgere dimostrazioni sui numeri reali
- non può mai sostituire l'induzione semplice
- non ha bisogno di un caso base
= È l'affermazione d del quiz; le prime tre sono del quiz, le ultime due le ho aggiunte io. Nel quiz vero è giusta anche la b: la forma forte può sempre sostituire quella semplice. La più insidiosa è quella sui numeri reali: l'induzione, in tutte e due le forme, lavora sugli interi.

D: Nel ciclo `i = 0; ris = 1; while (i < n) { ris = ris * a; i = i + 1; }`, a che cosa serve la parte `i <= n` dell'invariante?
+ a concludere che all'uscita `i == n`
- a dimostrare che `ris == a^i`
- a far terminare il ciclo
- a evitare che `ris` diventi negativo
- a niente: è vera ma inutile
= All'uscita si sa `i >= n`; con `i <= n` si ottiene `i == n`, e quindi `ris == a^n`. La più insidiosa è l'ultima: senza quella parte il risultato non si può scrivere.

D: Nello stesso ciclo, con `a = 2` e `n = 6`, quanto vale `ris` dopo 4 giri?
N: 16
= Dopo 4 giri `i` vale 4, e per l'invariante `ris` è 2 alla quarta.

D: Nella dimostrazione dei francobolli da 2 e da 5, perché servono due casi base?
+ perché il passo usa il caso $n - 2$, e dal 4 non si arriva al 5
- perché i francobolli sono di due tipi
- perché l'induzione forte chiede sempre due casi base
- perché 4 e 5 sono gli unici casi veri
- perché il passo usa il caso $n - 1$
= Il passo vale da 6 in su, perché deve essere $n - 2 \ge 4$: il 5 resta fuori e va verificato a mano. La più insidiosa è la terza: il numero di casi base dipende dal passo, non dal principio.

D: Con l'induzione forte, quali casi si possono usare per dimostrare $S(12)$, se si parte da $n_0 = 4$?
+ tutti quelli da $S(4)$ a $S(11)$
- solo $S(11)$
- solo $S(4)$
- quelli da $S(1)$ a $S(11)$
- quelli da $S(4)$ a $S(12)$
= L'ipotesi forte copre i $k$ con $n_0 \le k < n$. La più insidiosa è l'ultima: $S(12)$ è quella da dimostrare.

D: Quanti prodotti servono per moltiplicare 10 fattori, mettendo le parentesi nel modo più conveniente?
N: 9
= Sono sempre $n - 1$, in qualunque modo si mettano le parentesi: non esiste un modo più conveniente.

D: In quante forme a L di lato $2^n$ si divide una forma a L di lato $2^{n+1}$?
N: 4
= Una al centro e tre nelle punte. È il passo induttivo dell'esercizio 39.

D: Quali francobolli compongono 11 centesimi, seguendo la dimostrazione con la forma forte a partire dai casi base?
+ uno da 5 e tre da 2
- cinque da 2 e uno da 1
- due da 5 e uno da 1
- undici da 1
- uno da 5 e due da 3
= Dal caso base 5 si aggiungono tre francobolli da 2: 7, 9, 11. La più insidiosa è «due da 5 e uno da 1»: i francobolli da 1 non ci sono.
```

## Esercizi

::: esercizio base Riscaldamento: la tabella della potenza
Per il ciclo della potenza con `a = 5` e `n = 3`, scrivi `i` e `ris` prima del ciclo e dopo ogni giro, e controlla le due parti dell'invariante.
::: soluzione
Giri 0: `i = 0`, `ris = 1`. Giri 1: `1`, `5`. Giri 2: `2`, `25`. Giri 3: `3`, `125`. In ogni riga `ris` è 5 elevato a `i`, e `i` è al massimo 3. Dopo il terzo giro `i < n` è falsa e il ciclo esce con `ris == 125`.
:::

::: esercizio base Esercizio 1 del §2.5
Dimostra con l'induzione forte che ogni affrancatura da 6 centesimi in su si ottiene con francobolli da 2 e da 7.
::: soluzione
**Passi base, 6 e 7.** 6: tre francobolli da 2. 7: uno da 7. **Passo.** Prendo $n \ge 8$ e suppongo che si possano fare tutte le affrancature da 6 a $n - 1$. Allora $n - 2$ è almeno 6 e si può fare: aggiungo un francobollo da 2. È la soluzione ufficiale. Con un programma: i soli valori che non si ottengono sono 1, 3 e 5.
:::

::: esercizio medio Francobolli da 3 e da 5
Dimostra che ogni affrancatura da 8 centesimi in su si ottiene con francobolli da 3 e da 5. Quanti casi base servono?
::: soluzione
Il passo aggiunge un francobollo da 3, quindi usa il caso $n - 3$: servono **tre** casi base. $8 = 3 + 5$, $9 = 3 + 3 + 3$, $10 = 5 + 5$. **Passo.** Per $n \ge 11$, $n - 3$ è almeno 8 e si può fare per ipotesi forte: aggiungo un 3. Con un programma: i valori che non si ottengono sono 1, 2, 4 e 7.
:::

::: esercizio medio Esercizio 45 del §2.4
Dimostra che `pow == a^(i-1)` è un invariante del ciclo `i = 1; pow = 1; while (i <= n) { pow = pow * a; i = i + 1; }`, e ricava il valore di `pow` all'uscita.
::: soluzione
**Base.** Prima del ciclo `i = 1` e `pow = 1`: $1 = a^{1-1}$. **Passo.** Se $pow = a^{i-1}$ e il ciclo fa un giro, $pow' = pow \cdot a = a^i$ e $i' = i + 1$, quindi $pow' = a^{i'-1}$. **Uscita.** Il ciclo termina con `i == n + 1`, e per l'invariante `pow == a^n`. È la soluzione ufficiale. Per scrivere `i == n + 1` con rigore serve una seconda parte dell'invariante, `i <= n + 1`.
:::

::: esercizio esame Esercizio 40 del §2.4: la scacchiera con un buco, usando la forma a L
Dimostra che ogni scacchiera $2^n \times 2^n$ a cui manca un quadretto si ricopre con i tromini, usando il risultato sulla forma a L.
::: soluzione
**Base, $n = 1$.** La scacchiera è un tromino. **Passo.** Suppongo che ogni scacchiera difettosa $2^n \times 2^n$ si ricopra. Divido una scacchiera difettosa $2^{n+1} \times 2^{n+1}$ in quattro scacchiere $2^n \times 2^n$. Quella con il quadretto mancante si ricopre per ipotesi induttiva. Le altre tre formano una forma a L di lato $2^n$, che si ricopre per l'esercizio 39. È la soluzione ufficiale. Rispetto alla lezione 18 non serve il tromino al centro: l'ipotesi si usa una volta sola.
:::

::: esercizio difficile Trova l'errore
«Ogni affrancatura da 4 centesimi in su si fa con francobolli da 2 e da 5. Base: 4 = 2 + 2. Passo: suppongo vera la frase fino a $n - 1$; allora $n - 2$ si può fare, e aggiungo un francobollo da 2.» La frase è vera, ma la dimostrazione ha un buco. Quale?
::: soluzione
Per $n = 5$ il passo usa il caso $n - 2 = 3$, che sta **prima** del caso base e non è vero: 3 centesimi non si fanno. Il passo vale solo da 6 in su, e il 5 non è dimostrato. Va aggiunto il secondo caso base, $5 = 5$. Con una base sola questa «dimostrazione» proverebbe la frase solo per i numeri pari.
:::

## Domande di ripasso

::: domanda Qual è l'invariante del ciclo della potenza, e perché ha due parti?
`ris == a^i` e `i <= n`. La prima dice che cosa contiene `ris`; la seconda permette di concludere che all'uscita `i == n`.
:::

::: domanda Che cosa cambia nell'ipotesi induttiva tra induzione ordinaria e forte?
In quella ordinaria si suppone solo il caso prima. In quella forte tutti i casi dal primo fino a quello prima.
:::

::: domanda Quando servono più casi base?
Quando il passo usa un caso più indietro di uno: i primi casi non si ricavano dal passo e vanno verificati a mano.
:::

::: domanda Perché nei prodotti di $n$ fattori serve la forma forte?
Perché l'ultimo prodotto divide i fattori in due blocchi di grandezza non nota, tutti e due più piccoli di $n$.
:::

::: domanda Come si divide una forma a L nel passo induttivo?
In quattro forme a L di lato metà: una al centro e tre nelle punte.
:::

## Glossario

```glossario
Induzione forte | Forma del principio di induzione in cui nel passo si suppongono veri tutti i casi precedenti.
Ipotesi induttiva forte | La supposizione che S(k) sia vera per ogni k dal primo caso fino a n − 1.
Casi base | I casi verificati a mano, da cui parte l'induzione; possono essere più di uno.
Invariante di ciclo | Affermazione vera prima del ciclo e dopo ogni giro.
Correttezza | Il fatto che all'uscita del ciclo le variabili contengano il risultato voluto.
Tromino | Pezzo a forma di L fatto di tre quadretti.
Forma a L | Figura fatta di tre quadrati uguali disposti a L: una scacchiera senza un quarto.
```

## Checklist

```checklist
- So scrivere l'invariante del ciclo della potenza, con le due parti.
- So ricavare il risultato del ciclo dall'invariante e dalla condizione di uscita.
- So enunciare il principio di induzione forte.
- So dire la differenza tra ipotesi induttiva ordinaria e forte.
- So dimostrare il risultato dei francobolli da 2 e da 5, con due casi base.
- So decidere quanti casi base servono guardando il passo.
- So dimostrare che n fattori richiedono n − 1 prodotti.
- So spiegare come una forma a L si divide in quattro forme a L.
- So rispondere al quiz sull'induzione forte della simulazione 1.
```

## Fonti

- Libro di testo del corso, parte 2 (R. Johnsonbaugh, *Discrete Mathematics*, cap. 2), §2.4 (esercizi 39, 40, 45) e §2.5 «Strong Form of Induction and the Well-Ordering Property». Il libro non ce l'ho: uso la risposta ufficiale alla domanda di ripasso 1 del §2.5 e le soluzioni degli esercizi 40 e 45 del §2.4 e 1 e 4 del §2.5, pubblicate sul Moodle del canale A. Gli enunciati degli esempi 2.5.1 e 2.5.4 sono quelli dell'edizione originale; le dimostrazioni sono scritte da me.
- F. Cardone, appunti «Induzione e ricorsione» (Moodle del canale A, aperto agli ospiti): principio di induzione forte e suo legame con l'induzione ordinaria.
- Simulazione d'esame 1 del 2023/24, quiz 9 (testo dalla trascrizione delle schermate, con le risposte segnate da uno studente).
- Diario delle lezioni del canale B (Berardi), lezione 20 del docente, 13/11/2026.
- Le tabelle, i disegni, i quiz senza indicazione e gli esercizi sui francobolli da 3 e da 5 e «trova l'errore» sono di questi appunti. Il ciclo della potenza l'ho trascritto in C, compilato con `gcc -Wall -Werror` e provato con gli invarianti controllati da `assert`; francobolli, prodotti e coperture con i tromini li ho controllati con un programma.
