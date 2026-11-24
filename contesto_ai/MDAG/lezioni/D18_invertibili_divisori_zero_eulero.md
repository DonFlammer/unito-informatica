---
corso: MDAG
modulo: MD
lezione: D18
titolo: Classi invertibili, divisori dello zero e funzione di Eulero
data: 2026-11-20
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D18
descrizione: >-
  Appunti della lezione D18 di Matematica Discreta (MDAG, parte 1, canali A, B e C): classi invertibili e divisori
  dello zero, il criterio del massimo comun divisore con il modulo, il calcolo dell'inverso con l'identità di Bézout,
  la funzione di Eulero e il suo valore sulle potenze di un primo, con le domande d'esame del 14/01/2025,
  dell'08/06/2026 e del 10/09/2026.
lede: >-
  Tra le classi resto si somma, si sottrae e si moltiplica sempre. Dividere invece si può solo per alcune classi:
  quelle che hanno un'inversa. Quali sono lo decide un solo conto, il massimo comun divisore con il modulo, e lo
  stesso algoritmo di Euclide che lo calcola dà anche l'inversa. Contarle porta alla funzione di Eulero.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 7, pp. 136–141
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 7 «Aritmetica modulare»: la tabella di p. 136 e
  la sezione «Il gruppo moltiplicativo», pp. 137–141 (definizione 7.11, teorema 7.12, note 7.13 e 7.14, definizione
  7.15, proposizioni 7.17 e 7.18); diario delle lezioni del canale B 2025/26, lezione 18; appelli di Matematica
  Discreta del 14/01/2025, dell'08/06/2026 e del 10/09/2026, prova del 23/01/2020, quiz 2021–25
appunti_html: appunti/MDAG/D18_invertibili_divisori_zero_eulero.html
genera_html: true
---

## In breve

- Una classe è **invertibile** se ce n'è un'altra che moltiplicata per lei dà la classe di 1. Quell'altra è la sua **inversa**.
- Una classe diversa da zero è un **divisore dello zero** se moltiplicata per un'altra classe diversa da zero dà zero.
- Le due cose si escludono, e non c'è una terza possibilità: ogni classe diversa da zero è invertibile oppure è un divisore dello zero.
- **Il criterio**: una classe è invertibile quando il suo rappresentante e il modulo hanno massimo comun divisore 1; altrimenti è un divisore dello zero.
- **L'inversa si calcola** con l'algoritmo di Euclide e l'identità di Bézout: è il coefficiente che nell'identità moltiplica il rappresentante.
- Se il modulo è un numero **primo**, tutte le classi diverse da zero sono invertibili.
- La **funzione di Eulero** $\varphi(n)$ conta i numeri da 1 a $n$ senza fattori in comune con lui: è il numero delle classi invertibili con quel modulo.
- Per una potenza di un primo: $\varphi(p^e) = p^{e-1}(p - 1)$.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di venerdì 20/11/2026, dalle 9 alle 11, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la diciottesima lezione era «Classi di congruenza modulo N invertibili e divisori dello zero. Caratterizzazione in termini del MCD col modulo. Funzione φ di Eulero. Calcolo di φ(N) per N potenza di un primo». Nel libro sono le pp. 136–141. Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> **Che cosa lascio fuori.** Il libro chiama l'insieme delle classi invertibili «gruppo moltiplicativo»: la parola gruppo arriva nella prossima lezione, e qui dico solo quali proprietà ha. La formula di $\varphi$ per un prodotto (proposizione 7.17) nel libro si dimostra con un isomorfismo di gruppi, e nel diario dell'anno scorso arriva sei lezioni dopo. La enuncio in una nota, senza dimostrazione, perché i quiz d'esame la usano.
>
> Servono le classi resto della [D17](D17_congruenze_classi_resto.html), il massimo comun divisore della [D14](D14_interi_divisibilita_divisione_euclidea.html) e l'algoritmo di Euclide con l'identità di Bézout della [D15](D15_algoritmo_euclide_bezout.html), che qui diventa lo strumento di tutti i conti.
>
> **Una svista del libro.** A p. 141, nel primo esempio, c'è scritto $59825 = 3^2 \cdot 5 \cdot 11^3$: quel prodotto fa 59895. Il valore $\varphi = 29040$ è giusto per 59895.

## Che cosa si vede nella tabella di Z₁₀

La [D17](D17_congruenze_classi_resto.html) si è chiusa con tre stranezze della moltiplicazione tra classi. Il libro le fa vedere tutte nella tabella di $\mathbb{Z}_{10}$, scritta senza le barre:

| $\cdot$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| **0** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** | 0 | **1** | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| **2** | 0 | 2 | 4 | 6 | 8 | 0 | 2 | 4 | 6 | 8 |
| **3** | 0 | 3 | 6 | 9 | 2 | 5 | 8 | **1** | 4 | 7 |
| **4** | 0 | 4 | 8 | 2 | 6 | 0 | 4 | 8 | 2 | 6 |
| **5** | 0 | 5 | 0 | 5 | 0 | 5 | 0 | 5 | 0 | 5 |
| **6** | 0 | 6 | 2 | 8 | 4 | 0 | 6 | 2 | 8 | 4 |
| **7** | 0 | 7 | 4 | **1** | 8 | 5 | 2 | 9 | 6 | 3 |
| **8** | 0 | 8 | 6 | 4 | 2 | 0 | 8 | 6 | 4 | 2 |
| **9** | 0 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | **1** |

Tre cose da guardare:

1. **Dove compare l'1.** Solo nelle righe di 1, 3, 7 e 9: $3 \cdot 7 = 21 \equiv 1$ e $9 \cdot 9 = 81 \equiv 1$. Nelle righe di 2, 4, 5, 6 e 8 l'1 non c'è.
2. **Dove compare lo 0** fuori dalla prima riga e dalla prima colonna. Proprio nelle righe di 2, 4, 5, 6 e 8: per esempio $4 \cdot 5 = 20 \equiv 0$.
3. **Dove una riga ripete un valore.** Sempre nelle stesse cinque: $2 \cdot 4 = 8$ e $7 \cdot 4 = 28 \equiv 8$. Due classi diverse, moltiplicate per la stessa classe, danno lo stesso risultato: il fattore comune non si può togliere.

Le righe di 1, 3, 7 e 9 invece contengono ogni classe una volta sola.

Le classi diverse da zero si dividono quindi in due famiglie, e le righe «con l'1» sono proprio quelle «senza lo 0». La lezione dà un nome alle due famiglie, spiega perché non si mescolano e dice come riconoscerle senza scrivere la tabella.

::: prova Nella tabella, qual è l'inversa di $\overline{7}$? E quella di $\overline{9}$? Quale classe diversa da zero moltiplicata per $\overline{6}$ dà zero?
L'inversa di $\overline{7}$ è $\overline{3}$; quella di $\overline{9}$ è $\overline{9}$ stessa. $\overline{6} \cdot \overline{5} = \overline{30} = \overline{0}$.
:::

> [!RICORDA]
> - In $\mathbb{Z}_{10}$: 1, 3, 7, 9 hanno un'inversa; 2, 4, 5, 6, 8 danno zero con un'altra classe non nulla.
> - Le due famiglie non hanno elementi in comune.

## Invertibili e divisori dello zero

Tra gli interi, gli unici numeri con un inverso intero sono 1 e −1. Tra le classi resto ce ne sono di più, e conviene dare la definizione con precisione.

> [!DEF] Classe invertibile
> Una classe $\overline{a}$ di $\mathbb{Z}_N$ è **invertibile** se esiste una classe $\overline{b}$ con $\overline{a} \cdot \overline{b} = \overline{1}$. La classe $\overline{b}$ è l'**inversa** di $\overline{a}$ e si scrive $\overline{a}^{-1}$.

**Come si legge.** L'inversa è la classe che «disfa» la moltiplicazione per $\overline{a}$. Con le congruenze: $ab \equiv 1 \pmod N$. Se esiste è una sola, e per questo ha un simbolo. La classe di 0 non è mai invertibile: moltiplicata per qualunque classe dà ancora la classe di 0. L'inversa non è una frazione: nella tabella di prima l'inversa della classe di 3 è la classe di 7, e un terzo non c'entra.

> [!DEF] Divisore dello zero (libro, definizione 7.11)
> Una classe $\overline{a} \ne \overline{0}$ di $\mathbb{Z}_N$ è un **divisore dello zero**, o 0-divisore, se esiste una classe $\overline{b} \ne \overline{0}$ con $\overline{a} \cdot \overline{b} = \overline{0}$.

**Come si legge.** Due classi che non sono zero, il cui prodotto è zero. Nella tabella di prima la classe di 4 è un divisore dello zero, perché $\overline{4} \cdot \overline{5} = \overline{0}$; lo è anche $\overline{5}$, per lo stesso conto. La seconda classe può essere la stessa: in $\mathbb{Z}_9$, $\overline{3} \cdot \overline{3} = \overline{9} = \overline{0}$.

Le due proprietà non possono stare insieme.

> [!PROP] Un divisore dello zero non è invertibile (libro, p. 137)
> Se $\overline{a}$ è invertibile e $\overline{a} \cdot \overline{b} = \overline{0}$, allora $\overline{b} = \overline{0}$.

**Come si legge.** Una classe invertibile dà zero solo se moltiplicata per zero: non può essere un divisore dello zero. La dimostrazione è una riga: si moltiplica per l'inversa.

> [!ESEMPIO] · La dimostrazione
> Parto da $\overline{a} \cdot \overline{b} = \overline{0}$ e moltiplico tutti e due i membri per $\overline{a}^{-1}$:
>
> $\overline{a}^{-1} \cdot \overline{a} \cdot \overline{b} = \overline{a}^{-1} \cdot \overline{0}$
>
> A sinistra $\overline{a}^{-1} \cdot \overline{a} = \overline{1}$, e resta $\overline{b}$. A destra c'è $\overline{0}$. Quindi $\overline{b} = \overline{0}$.

Lo stesso conto dà la **legge di cancellazione** per le classi invertibili: da $\overline{a} \cdot \overline{x} = \overline{a} \cdot \overline{y}$, con il fattore comune invertibile, moltiplicando per la sua inversa resta $\overline{x} = \overline{y}$. Per i divisori dello zero non vale, come si è visto con $\overline{4}$.

::: prova In $\mathbb{Z}_{12}$, $\overline{8}$ è un divisore dello zero? E $\overline{5}$ è invertibile?
$\overline{8} \cdot \overline{3} = \overline{24} = \overline{0}$: sì, è un divisore dello zero. $\overline{5} \cdot \overline{5} = \overline{25} = \overline{1}$: sì, è invertibile, ed è l'inversa di sé stessa.
:::

> [!RICORDA]
> - Invertibile: c'è una classe che moltiplicata per lei dà $\overline{1}$.
> - Divisore dello zero: classe non nulla che moltiplicata per una classe non nulla dà $\overline{0}$.
> - Una classe non può essere tutte e due le cose.
> - Per le classi invertibili si può semplificare.

## Il criterio del massimo comun divisore

Guarda di nuovo la tabella. Le classi invertibili sono 1, 3, 7, 9: i numeri che non hanno fattori in comune con 10. I divisori dello zero sono 2, 4, 5, 6, 8: quelli che hanno in comune con 10 il fattore 2 o il fattore 5.

```grafico
titolo: Le dieci classi di Z₁₀. Quelle verdi hanno massimo comun divisore 1 con 10 e sono invertibili. Quelle ambra hanno un fattore in comune con 10 e sono divisori dello zero. La classe di 0 sta per conto suo
x: -0.3 10.3
y: 0 3.6
assi: no
griglia: no
proporzioni: libere
poligono: 0 1.2 1 1.2 1 2.2 0 2.2 | grigio | tenue
poligono: 1 1.2 2 1.2 2 2.2 1 2.2 | verde | tenue
poligono: 2 1.2 3 1.2 3 2.2 2 2.2 | ambra | tenue
poligono: 3 1.2 4 1.2 4 2.2 3 2.2 | verde | tenue
poligono: 4 1.2 5 1.2 5 2.2 4 2.2 | ambra | tenue
poligono: 5 1.2 6 1.2 6 2.2 5 2.2 | ambra | tenue
poligono: 6 1.2 7 1.2 7 2.2 6 2.2 | ambra | tenue
poligono: 7 1.2 8 1.2 8 2.2 7 2.2 | verde | tenue
poligono: 8 1.2 9 1.2 9 2.2 8 2.2 | ambra | tenue
poligono: 9 1.2 10 1.2 10 2.2 9 2.2 | verde | tenue
testo: 0.5 1.7 | grigio | "0"
testo: 1.5 1.7 | verde | "1"
testo: 2.5 1.7 | ambra | "2"
testo: 3.5 1.7 | verde | "3"
testo: 4.5 1.7 | ambra | "4"
testo: 5.5 1.7 | ambra | "5"
testo: 6.5 1.7 | ambra | "6"
testo: 7.5 1.7 | verde | "7"
testo: 8.5 1.7 | ambra | "8"
testo: 9.5 1.7 | verde | "9"
testo: 2.5 3.0 | verde | "MCD con 10 uguale a 1"
testo: 7.3 0.5 | ambra | "MCD con 10 maggiore di 1"
```

> [!TEOREMA] Invertibile o divisore dello zero (libro, teorema 7.12)
> Per una classe $\overline{a} \ne \overline{0}$ di $\mathbb{Z}_N$:
>
> - se $\mathrm{MCD}(a, N) = 1$, la classe è **invertibile**;
> - se $\mathrm{MCD}(a, N) > 1$, la classe è un **divisore dello zero**.

**Come si legge.** Un massimo comun divisore è 1 oppure è più grande: i casi sono due e li coprono tutti. Quindi ogni classe diversa da zero è di un tipo o dell'altro, e per sapere quale basta un conto sugli interi. «Invertibile» e «coprimo con il modulo» diventano la stessa cosa.

La dimostrazione è da leggere, perché dice anche **come si trova** l'inversa.

> [!ESEMPIO] · La dimostrazione
> **Caso MCD uguale a 1.** Per l'identità di Bézout della [D15](D15_algoritmo_euclide_bezout.html) ci sono due interi $A$ e $B$ con
>
> $aA + NB = 1$
>
> Passo alle classi modulo $N$. Il termine $NB$ è un multiplo di $N$, e la sua classe è $\overline{0}$. Resta
>
> $\overline{a} \cdot \overline{A} = \overline{1}$
>
> Quindi $\overline{a}$ è invertibile, e la sua inversa è $\overline{A}$.
>
> **Caso MCD uguale a $d$, con $d > 1$.** Scrivo $a = d \cdot s$ e $N = d \cdot t$. Il numero $t$ è positivo e più piccolo di $N$, quindi $\overline{t} \ne \overline{0}$. Calcolo:
>
> $a \cdot t = d \cdot s \cdot t = s \cdot (d \cdot t) = s \cdot N$
>
> Il prodotto è un multiplo di $N$: $\overline{a} \cdot \overline{t} = \overline{0}$, con $\overline{t}$ non nulla. Quindi $\overline{a}$ è un divisore dello zero.

Il secondo caso dice anche **per chi moltiplicare** per ottenere zero: per $N$ diviso il massimo comun divisore. In $\mathbb{Z}_{10}$, per $\overline{4}$: $\mathrm{MCD}(4, 10) = 2$ e $10 : 2 = 5$, e infatti $4 \cdot 5 = 20$.

Il criterio non dipende dal rappresentante: aggiungere al numero un multiplo del modulo non cambia i loro divisori comuni (libro, nota 7.13).

> [!ESEMPIO] · Le classi di $\mathbb{Z}_{35}$ (libro, p. 138)
> $35 = 5 \cdot 7$. Una classe è un divisore dello zero quando il suo rappresentante è multiplo di 5 o di 7:
>
> 5, 7, 10, 14, 15, 20, 21, 25, 28, 30: sono 10.
>
> Tutte le altre classi non nulle sono invertibili: sono $34 - 10 = 24$.

**Il caso più pulito: il modulo primo.** Se il modulo è un numero primo, nessun numero più piccolo, da 1 in su, ha fattori in comune con lui. Tutte le classi diverse da zero sono invertibili, e non ci sono divisori dello zero. In $\mathbb{Z}_7$ si divide per qualunque classe non nulla, come tra i numeri razionali. Per questo nella tabella di $\mathbb{Z}_5$ della D17 non c'era niente di strano.

::: prova Quali classi di $\mathbb{Z}_{12}$ sono invertibili? Quali sono divisori dello zero?
$12 = 2^2 \cdot 3$. Invertibili sono le classi dei numeri che non sono multipli né di 2 né di 3: 1, 5, 7, 11. Le altre sette, cioè 2, 3, 4, 6, 8, 9, 10, sono divisori dello zero.
:::

> [!RICORDA]
> - MCD con il modulo uguale a 1: invertibile. Maggiore di 1: divisore dello zero.
> - Si controlla con le fattorizzazioni o con l'algoritmo di Euclide.
> - Modulo primo: tutte le classi non nulle sono invertibili.

## Calcolare l'inversa

Sapere che l'inversa c'è non basta: nei quiz bisogna dire quanto vale. I modi sono due, secondo la grandezza del modulo.

**Con un modulo piccolo** si prova. In $\mathbb{Z}_{10}$, per l'inversa di $\overline{3}$ si scorrono i multipli di 3 finché uno finisce per 1: $3, 6, 9, 12, 15, 18, 21$. Il settimo: l'inversa è $\overline{7}$. Un altro modo di vedere lo stesso conto: si cerca un numero congruo a 1, cioè della forma $1 + 10k$, che sia multiplo di 3: 11 no, 21 sì.

**Con un modulo grande** si usa la dimostrazione del teorema: algoritmo di Euclide, poi risalita fino all'identità di Bézout.

> [!METODO] L'inversa di $\overline{a}$ in $\mathbb{Z}_N$
> 1. Fai l'algoritmo di Euclide tra $N$ e $a$. Se l'ultimo resto non nullo non è 1, l'inversa **non esiste**: fine.
> 2. Risali le divisioni, dall'ultima alla prima, fino a scrivere $1 = aA + NB$.
> 3. L'inversa è la classe di $A$. Se $A$ è negativo, aggiungi $N$ per avere il rappresentante canonico.
> 4. **Controlla**: $a \cdot A$ deve dare resto 1 nella divisione per $N$.

> [!ESEMPIO] · L'inversa di $\overline{17}$ in $\mathbb{Z}_{54}$ (appello del 14/01/2025)
> **Euclide.**
>
> $54 = 3 \cdot 17 + 3$
>
> $17 = 5 \cdot 3 + 2$
>
> $3 = 1 \cdot 2 + 1$
>
> L'ultimo resto non nullo è 1: l'inversa esiste.
>
> **Risalita.** Dall'ultima riga $1 = 3 - 2$. Dalla seconda $2 = 17 - 5 \cdot 3$, quindi
>
> $1 = 3 - (17 - 5 \cdot 3) = 6 \cdot 3 - 17$
>
> Dalla prima $3 = 54 - 3 \cdot 17$, quindi
>
> $1 = 6 \cdot (54 - 3 \cdot 17) - 17 = 6 \cdot 54 - 19 \cdot 17$
>
> **L'inversa.** $A = -19$, e $-19 + 54 = 35$. L'inversa è $\overline{35}$.
>
> **Controllo.** $17 \cdot 35 = 595 = 11 \cdot 54 + 1$.

Il libro riprende i numeri della [D15](D15_algoritmo_euclide_bezout.html): da $1219 \cdot 654 - 223 \cdot 3575 = 1$ si legge che l'inversa di $\overline{654}$ in $\mathbb{Z}_{3575}$ è $\overline{1219}$.

> [!TRAPPOLA] Quale dei due coefficienti
> Nell'identità $aA + NB = 1$ l'inversa di $\overline{a}$ è il coefficiente **di $a$**, non quello del modulo. E il segno conta: nell'esempio il coefficiente di 17 è $-19$, non 19. Infatti $17 \cdot 19 = 323 = 5 \cdot 54 + 53$: darebbe $-1$, non 1. Il controllo finale costa dieci secondi e toglie il dubbio.

**A che cosa serve l'inversa.** A dividere. Per risolvere $\overline{3} \cdot \overline{x} = \overline{4}$ in $\mathbb{Z}_{10}$ si moltiplicano i due membri per l'inversa di $\overline{3}$, che è $\overline{7}$: $\overline{x} = \overline{7} \cdot \overline{4} = \overline{28} = \overline{8}$. Controllo: $3 \cdot 8 = 24 \equiv 4$. Le congruenze con l'incognita sono l'argomento di una delle prossime lezioni.

::: prova Trova l'inversa di $\overline{11}$ in $\mathbb{Z}_{57}$, con Euclide.
$57 = 5 \cdot 11 + 2$ e $11 = 5 \cdot 2 + 1$. Risalita: $1 = 11 - 5 \cdot 2 = 11 - 5 \cdot (57 - 5 \cdot 11) = 26 \cdot 11 - 5 \cdot 57$. L'inversa è $\overline{26}$. Controllo: $11 \cdot 26 = 286 = 5 \cdot 57 + 1$. È la domanda 9 del quiz del 10/09/2026.
:::

> [!RICORDA]
> - Modulo piccolo: si provano i multipli.
> - Modulo grande: Euclide, risalita, e il coefficiente di $a$ è l'inversa.
> - Coefficiente negativo: si aggiunge il modulo.
> - Si controlla sempre con una moltiplicazione.

## L'insieme delle classi invertibili

Le classi invertibili con un certo modulo formano un insieme, che ha un simbolo suo. Il libro lo indica con $\mathbb{Z}_N^\times$. Per esempio $\mathbb{Z}_{10}^\times = \{\overline{1}, \overline{3}, \overline{7}, \overline{9}\}$.

Ha tre proprietà che lo rendono un posto dove la moltiplicazione funziona bene (libro, p. 138):

1. **il prodotto di due classi invertibili è invertibile**: l'inversa di $\overline{a} \cdot \overline{b}$ è $\overline{b}^{-1} \cdot \overline{a}^{-1}$;
2. **$\overline{1}$ è invertibile**, ed è l'inversa di sé stessa;
3. **l'inversa di una classe invertibile è invertibile**: l'inversa di $\overline{a}^{-1}$ è $\overline{a}$.

La tabella della moltiplicazione ristretta a queste classi non esce mai dall'insieme, e in ogni riga compare l'1:

| $\cdot$ | 1 | 3 | 7 | 9 |
|---|---|---|---|---|
| **1** | 1 | 3 | 7 | 9 |
| **3** | 3 | 9 | 1 | 7 |
| **7** | 7 | 1 | 9 | 3 |
| **9** | 9 | 7 | 3 | 1 |

Un insieme con un'operazione associativa, un elemento neutro e un inverso per ogni elemento si chiama **gruppo**: è la definizione della prossima lezione, e $\mathbb{Z}_N^\times$ sarà uno degli esempi principali. Per questo il libro lo chiama già qui «gruppo moltiplicativo di $\mathbb{Z}_N$».

::: prova Scrivi gli elementi di $\mathbb{Z}_8^\times$ e l'inversa di ciascuno.
Le classi di 1, 3, 5 e 7, cioè dei dispari. Ognuna è l'inversa di sé stessa: $3 \cdot 3 = 9 \equiv 1$, $5 \cdot 5 = 25 \equiv 1$, $7 \cdot 7 = 49 \equiv 1$.
:::

> [!RICORDA]
> - $\mathbb{Z}_N^\times$: l'insieme delle classi invertibili modulo $N$.
> - Prodotti e inverse di classi invertibili sono invertibili.

## La funzione di Eulero

Quante sono le classi invertibili? Per il teorema, tante quanti i numeri tra 1 e $N$ che hanno massimo comun divisore 1 con $N$. Questo conteggio ha un nome.

> [!DEF] Funzione di Eulero (libro, definizione 7.15)
> Per ogni intero $n \ge 1$, $\varphi(n)$ è il numero degli interi $r$ con $1 \le r \le n$ e $\mathrm{MCD}(r, n) = 1$.

**Come si legge.** $\varphi$ è la lettera greca «fi». Conta i numeri da 1 a $n$ **coprimi** con $n$. Per il teorema 7.12 è il numero delle classi invertibili con quel modulo. Per $n = 10$ i coprimi sono 1, 3, 7, 9, e $\varphi(10) = 4$.

Per i numeri piccoli si conta a mano. La tabella del libro:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $\varphi(n)$ | 1 | 1 | 2 | 2 | 4 | 2 | 6 | 4 | 6 | 4 | 10 | 4 |

| $n$ | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $\varphi(n)$ | 12 | 6 | 8 | 8 | 16 | 6 | 18 | 8 | 12 | 10 | 22 | 8 |

I valori non seguono una regola che si veda a occhio: salgono e scendono. La regola c'è, ma passa per i fattori primi di $n$.

**Se $n$ è un numero primo**, tutti i numeri più piccoli, da 1 in su, sono coprimi con lui: $\varphi(p) = p - 1$ per ogni primo $p$. Nella tabella: $\varphi(7) = 6$, $\varphi(13) = 12$, $\varphi(23) = 22$.

**Se $n$ è una potenza di un primo**, conviene contare al contrario: quanti numeri **non** vanno bene. Per $n = 9 = 3^2$:

```grafico
titolo: I numeri da 1 a 9. Quelli in ambra sono i multipli di 3: hanno un fattore in comune con 9. Sono 3, uno ogni tre. Gli altri 6 sono coprimi con 9: la funzione di Eulero di 9 vale 6
x: 0.2 9.8
y: 0 3.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.6 1 1.4 1 1.4 2 0.6 2 | verde | tenue
poligono: 1.6 1 2.4 1 2.4 2 1.6 2 | verde | tenue
poligono: 2.6 1 3.4 1 3.4 2 2.6 2 | ambra | pieno
poligono: 3.6 1 4.4 1 4.4 2 3.6 2 | verde | tenue
poligono: 4.6 1 5.4 1 5.4 2 4.6 2 | verde | tenue
poligono: 5.6 1 6.4 1 6.4 2 5.6 2 | ambra | pieno
poligono: 6.6 1 7.4 1 7.4 2 6.6 2 | verde | tenue
poligono: 7.6 1 8.4 1 8.4 2 7.6 2 | verde | tenue
poligono: 8.6 1 9.4 1 9.4 2 8.6 2 | ambra | pieno
testo: 1 1.5 | verde | "1"
testo: 2 1.5 | verde | "2"
testo: 3 1.5 | ambra | "3"
testo: 4 1.5 | verde | "4"
testo: 5 1.5 | verde | "5"
testo: 6 1.5 | ambra | "6"
testo: 7 1.5 | verde | "7"
testo: 8 1.5 | verde | "8"
testo: 9 1.5 | ambra | "9"
testo: 5 2.7 | ambra | "multipli di 3: 3 numeri"
testo: 5 0.4 | verde | "coprimi con 9: 9 − 3 = 6"
```

> [!PROP] La funzione di Eulero di una potenza di un primo (libro, proposizione 7.18)
> Se $p$ è un numero primo ed $e \ge 1$, allora
>
> $$\varphi(p^e) = p^e - p^{e-1} = p^{e-1}(p - 1)$$

**Come si legge.** Dal totale si tolgono i multipli di $p$, che sono uno ogni $p$ numeri. In pratica: si abbassa l'esponente di uno e si moltiplica per $p - 1$. Per esempio $\varphi(8) = 4 \cdot 1 = 4$, $\varphi(27) = 9 \cdot 2 = 18$, $\varphi(125) = 25 \cdot 4 = 100$.

> [!ESEMPIO] · La dimostrazione
> L'unico divisore primo di $p^e$ è $p$. Quindi un numero $r$ ha un fattore in comune con $p^e$ esattamente quando $r$ è multiplo di $p$.
>
> I multipli di $p$ tra 1 e $p^e$ sono $p, 2p, 3p, \dots, p^e$. L'ultimo è $p^{e-1} \cdot p$: sono $p^{e-1}$.
>
> I coprimi sono tutti gli altri: $\varphi(p^e) = p^e - p^{e-1}$. Raccogliendo $p^{e-1}$ viene la seconda forma.

> [!NOTA] Per i numeri con più fattori primi: una formula in anticipo
> Se $a$ e $b$ sono coprimi, allora $\varphi(ab) = \varphi(a) \cdot \varphi(b)$ (libro, proposizione 7.17). Il libro la dimostra con i gruppi, e in aula arriva più avanti; la scrivo qui perché nei quiz serve subito. Con questa e con la formula delle potenze si calcola $\varphi$ di qualunque numero di cui si conosca la fattorizzazione:
>
> $\varphi(88) = \varphi(8) \cdot \varphi(11) = 4 \cdot 10 = 40$
>
> $\varphi(12) = \varphi(4) \cdot \varphi(3) = 2 \cdot 2 = 4$
>
> **I due fattori devono essere coprimi.** $24 = 4 \cdot 6$, ma $\varphi(24) = 8$ mentre $\varphi(4) \cdot \varphi(6) = 2 \cdot 2 = 4$: 4 e 6 hanno il fattore 2 in comune. Il modo sicuro è spezzare il numero in potenze di primi diversi: $24 = 8 \cdot 3$, e $\varphi(24) = 4 \cdot 2 = 8$.

::: prova Calcola $\varphi(49)$, $\varphi(32)$ e $\varphi(97)$. Quante sono le classi invertibili di $\mathbb{Z}_{32}$?
$\varphi(49) = 7 \cdot 6 = 42$. $\varphi(32) = \varphi(2^5) = 16 \cdot 1 = 16$. 97 è primo: $\varphi(97) = 96$. Le classi invertibili di $\mathbb{Z}_{32}$ sono 16: le classi dei numeri dispari.
:::

> [!RICORDA]
> - $\varphi(n)$: quanti numeri tra 1 e $n$ sono coprimi con $n$; è il numero delle classi invertibili.
> - $\varphi(p) = p - 1$ per $p$ primo.
> - $\varphi(p^e) = p^{e-1}(p - 1)$.
> - Per fattori coprimi, $\varphi$ del prodotto è il prodotto delle $\varphi$.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $\overline{a}^{-1}$ | «a barra alla meno uno» | l'inversa della classe di $a$ | in $\mathbb{Z}_{10}$, $\overline{3}^{-1} = \overline{7}$ |
| $\mathrm{MCD}(a, N)$ | «massimo comun divisore di a e N» | il più grande divisore comune | $\mathrm{MCD}(4, 10) = 2$ |
| $\mathbb{Z}_N^\times$ | «Z N per» | l'insieme delle classi invertibili modulo $N$ | $\mathbb{Z}_8^\times = \{\overline{1}, \overline{3}, \overline{5}, \overline{7}\}$ |
| $\varphi(n)$ | «fi di n» | quanti numeri tra 1 e $n$ sono coprimi con $n$ | $\varphi(10) = 4$ |
| $aA + NB = 1$ | «identità di Bézout» | scrittura di 1 con $a$ e $N$ | $-19 \cdot 17 + 6 \cdot 54 = 1$ |
| $p^e$ | «p alla e» | potenza di un primo | $125 = 5^3$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Le regole del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

Questa è una delle lezioni più chieste all'esame: negli appelli dal 2025 c'è quasi sempre almeno una domanda.

1. **«L'inverso moltiplicativo di … modulo … è»**: quiz del 14/01/2025 (domanda 8) e del 10/09/2026 (domanda 9), e primo punto di un problema negli appelli del 13/01/2026 e del 10/09/2026. Tra le risposte c'è sempre «non esiste».
2. **«Il numero delle classi invertibili in $\mathbb{Z}_N$»**, cioè $\varphi(N)$: quiz dell'08/06/2026, domanda 9.
3. **Dire quale classe è invertibile**: prova del 23/01/2020, esercizio 3.
4. Il **teorema 7.12** come motivazione: nei problemi bisogna scrivere «è invertibile perché il massimo comun divisore con il modulo è 1».

### Una domanda vera, letta insieme

**Appello del 14/01/2025, quiz, domanda 8 (prima versione).** «In $\mathbb{Z}_{54}$ l'inverso moltiplicativo di 17 è: 11; 26; 29; non esiste; 35.»

**In pratica chiede:** di decidere se 17 e 54 sono coprimi e, se sì, di trovare il numero tra 0 e 53 che moltiplicato per 17 dà resto 1 nella divisione per 54.

> [!ESEMPIO] · la soluzione, passo per passo
> **Esiste?** $54 = 2 \cdot 3^3$, e 17 è un primo diverso da 2 e da 3: il massimo comun divisore è 1. L'inverso esiste, e «non esiste» è scartata.
>
> **Quanto vale.** È il conto svolto nella sezione sull'inversa: Euclide dà $1 = 6 \cdot 54 - 19 \cdot 17$, quindi l'inverso è $-19 \equiv 35$.
>
> **Più in fretta, con le risposte davanti.** Basta provare le quattro candidate: $17 \cdot 11 = 187 = 3 \cdot 54 + 25$; $17 \cdot 26 = 442 = 8 \cdot 54 + 10$; $17 \cdot 29 = 493 = 9 \cdot 54 + 7$; $17 \cdot 35 = 595 = 11 \cdot 54 + 1$.
>
> La risposta è **35**, quella segnata come giusta nel foglio delle soluzioni.

Nelle altre tre versioni il modulo cambia: in $\mathbb{Z}_{86}$ l'inverso di 17 è 81, in $\mathbb{Z}_{76}$ è 9, in $\mathbb{Z}_{58}$ è 41. Controllati con un programma.

### Errori da evitare

- Cercare l'inversa senza aver controllato il massimo comun divisore.
- Prendere il coefficiente del modulo invece di quello di $a$, o perdere il segno nella risalita.
- Lasciare l'inversa negativa quando il testo chiede un numero tra 0 e $N - 1$.
- Calcolare $\varphi$ di un prodotto con fattori non coprimi.
- Scrivere $\varphi(p^e) = p^e - 1$: vale solo per $e = 1$.
- Confondere l'inversa, per il prodotto, con l'opposta, per la somma.

## Quiz

```quiz
D: Appello dell'08/06/2026, quiz, domanda 9 (prima versione). Determinare il numero delle classi invertibili in $\mathbb{Z}_{88}$.
+ 40
- 28
- 44
- 50
- 36
= $88 = 8 \cdot 11$, con 8 e 11 coprimi: $\varphi(88) = \varphi(8) \cdot \varphi(11) = 4 \cdot 10 = 40$. La risposta più insidiosa è 44: sono i numeri dispari fino a 88, ma tra quelli vanno tolti i quattro multipli dispari di 11.

D: Appello del 10/09/2026, quiz, domanda 9 (prima versione). L'inverso moltiplicativo di 11 modulo 57 è:
+ 26
- 2
- 13
- 20
- non esiste
= $57 = 5 \cdot 11 + 2$ e $11 = 5 \cdot 2 + 1$; risalendo, $1 = 26 \cdot 11 - 5 \cdot 57$. Controllo: $11 \cdot 26 = 286 = 5 \cdot 57 + 1$. La più insidiosa è «non esiste»: 57 non è primo, ma $57 = 3 \cdot 19$ non ha fattori in comune con 11.

D: Quiz 2021–25. La classe $\overline{7}$ in $\mathbb{Z}_{45}$:
+ ha inversa 13
- non è invertibile
- ha inversa 7
- ha inversa 25
- ha inversa 33
= $\mathrm{MCD}(7, 45) = 1$, quindi è invertibile, e $7 \cdot 13 = 91 = 2 \cdot 45 + 1$. La più insidiosa è «ha inversa 7»: $7 \cdot 7 = 49 \equiv 4$, non 1.

D: Quiz 2021–25. Sia $\varphi$ la funzione di Eulero. Allora $\varphi(62)$ vale:
+ 30
- 42
- 61
- 26
- nessuno di questi
= $62 = 2 \cdot 31$: $\varphi(62) = 1 \cdot 30 = 30$. La più insidiosa è 61: sarebbe giusta se 62 fosse primo.

D: Prova del 23/01/2020, esercizio 3. Solo una tra le classi 5, 6 e 14 è invertibile in $\mathbb{Z}_{28}$. Qual è, e qual è la sua inversa?
+ 5, con inversa 17
- 5, con inversa 11
- 6, con inversa 5
- 14, con inversa 2
- 5, con inversa 23
= $\mathrm{MCD}(5, 28) = 1$, mentre 6 e 14 hanno fattori in comune con 28. Da $1 = 2 \cdot 28 - 11 \cdot 5$ l'inversa è $-11 \equiv 17$. La più insidiosa è 11: è il coefficiente senza il segno.

D: In $\mathbb{Z}_{15}$, quale di queste classi è un divisore dello zero?
+ $\overline{10}$
- $\overline{2}$
- $\overline{7}$
- $\overline{11}$
- $\overline{14}$
= $\mathrm{MCD}(10, 15) = 5$, e $10 \cdot 3 = 30 \equiv 0$. Le altre sono coprime con 15. La più insidiosa è $\overline{14}$: è pari, ma 15 non ha il fattore 2.

D: Quanto vale $\varphi(125)$?
N: 100
= $125 = 5^3$: $\varphi = 5^2 \cdot 4 = 100$. Si tolgono da 125 i 25 multipli di 5.

D: Se $N$ è un numero primo, quante sono le classi invertibili di $\mathbb{Z}_N$?
+ $N - 1$
- $N$
- 1
- 2
- dipende da $N$
= Tutte le classi tranne quella di 0. La più insidiosa è $N$: la classe $\overline{0}$ non è mai invertibile.
```

## Esercizi

::: esercizio base Riscaldamento: invertibile o divisore dello zero
In $\mathbb{Z}_{18}$ di' per ogni classe se è invertibile o è un divisore dello zero: $\overline{4}$, $\overline{5}$, $\overline{9}$, $\overline{13}$, $\overline{15}$.
::: soluzione
$18 = 2 \cdot 3^2$. $\overline{4}$: divisore dello zero (fattore 2), $4 \cdot 9 = 36 \equiv 0$. $\overline{5}$: invertibile. $\overline{9}$: divisore dello zero, $9 \cdot 2 = 18$. $\overline{13}$: invertibile. $\overline{15}$: divisore dello zero (fattore 3), $15 \cdot 6 = 90 = 5 \cdot 18$.
:::

::: esercizio base Riscaldamento: inverse con un modulo piccolo
Trova l'inversa di ogni classe non nulla di $\mathbb{Z}_7$.
::: soluzione
$1 \cdot 1 = 1$; $2 \cdot 4 = 8 \equiv 1$; $3 \cdot 5 = 15 \equiv 1$; $6 \cdot 6 = 36 \equiv 1$. Quindi le inverse di 1, 2, 3, 4, 5, 6 sono 1, 4, 5, 2, 3, 6. Tutte le classi non nulle sono invertibili perché 7 è primo.
:::

::: esercizio base Riscaldamento: la funzione di Eulero
Calcola $\varphi(16)$, $\varphi(81)$, $\varphi(25)$ e $\varphi(31)$.
::: soluzione
$\varphi(2^4) = 8$. $\varphi(3^4) = 27 \cdot 2 = 54$. $\varphi(5^2) = 5 \cdot 4 = 20$. 31 è primo: $\varphi(31) = 30$.
:::

::: esercizio base Riscaldamento: per chi moltiplicare
In $\mathbb{Z}_{30}$ trova una classe non nulla che moltiplicata per $\overline{12}$ dia $\overline{0}$.
::: soluzione
$\mathrm{MCD}(12, 30) = 6$ e $30 : 6 = 5$. Infatti $12 \cdot 5 = 60 = 2 \cdot 30$. La classe è $\overline{5}$.
:::

::: esercizio medio Un'inversa con Euclide
Trova l'inversa di $\overline{13}$ in $\mathbb{Z}_{30}$.
::: soluzione
$30 = 2 \cdot 13 + 4$; $13 = 3 \cdot 4 + 1$. Risalita: $1 = 13 - 3 \cdot 4 = 13 - 3 \cdot (30 - 2 \cdot 13) = 7 \cdot 13 - 3 \cdot 30$. L'inversa è $\overline{7}$. Controllo: $13 \cdot 7 = 91 = 3 \cdot 30 + 1$.
:::

::: esercizio medio Contare le classi invertibili
Quante classi invertibili hanno $\mathbb{Z}_{75}$, $\mathbb{Z}_{78}$ e $\mathbb{Z}_{90}$? Sono le altre tre versioni della domanda 9 del quiz dell'08/06/2026.
::: soluzione
$75 = 3 \cdot 5^2$: $\varphi = 2 \cdot 20 = 40$. $78 = 2 \cdot 3 \cdot 13$: $\varphi = 1 \cdot 2 \cdot 12 = 24$. $90 = 2 \cdot 3^2 \cdot 5$: $\varphi = 1 \cdot 6 \cdot 4 = 24$. Sono le risposte del foglio delle soluzioni.
:::

::: esercizio esame Dal problema 1 dei problemi 2021/22
In $\mathbb{Z}_{125}$: (a) quanti sono gli elementi invertibili; (b) calcola, se esiste, l'inverso moltiplicativo di 27.
::: soluzione
**(a)** $\varphi(125) = \varphi(5^3) = 25 \cdot 4 = 100$. **(b)** $27 = 3^3$ non ha il fattore 5: esiste. Euclide: $125 = 4 \cdot 27 + 17$; $27 = 1 \cdot 17 + 10$; $17 = 1 \cdot 10 + 7$; $10 = 1 \cdot 7 + 3$; $7 = 2 \cdot 3 + 1$. Risalita: $1 = 7 - 2 \cdot 3 = 3 \cdot 7 - 2 \cdot 10 = 3 \cdot 17 - 5 \cdot 10 = 8 \cdot 17 - 5 \cdot 27 = 8 \cdot 125 - 37 \cdot 27$. L'inverso è $-37 \equiv 88$, come nella soluzione ufficiale. Controllo: $27 \cdot 88 = 2376 = 19 \cdot 125 + 1$.
:::

::: esercizio difficile Quando il prodotto di due numeri è congruo a zero
Dimostra che, se $p$ è primo e $ab \equiv 0 \pmod p$, allora $a \equiv 0$ oppure $b \equiv 0$. Mostra con un esempio che per un modulo non primo è falso.
::: soluzione
**Con le classi.** Se $\overline{a} \ne \overline{0}$ in $\mathbb{Z}_p$, allora $\overline{a}$ è invertibile, perché il modulo è primo. Una classe invertibile non è un divisore dello zero: da $\overline{a} \cdot \overline{b} = \overline{0}$ viene $\overline{b} = \overline{0}$. **Con gli interi** è la proprietà dei primi della [D16](D16_primi_teorema_fondamentale_aritmetica.html): se $p$ divide $ab$, divide $a$ o divide $b$. **Modulo non primo.** In $\mathbb{Z}_6$: $2 \cdot 3 \equiv 0$, ma né 2 né 3 sono congrui a 0.
:::

## Domande di ripasso

::: domanda Quando una classe è invertibile, e quando è un divisore dello zero?
È invertibile se c'è una classe che moltiplicata per lei dà $\overline{1}$. È un divisore dello zero se non è nulla e c'è una classe non nulla che moltiplicata per lei dà $\overline{0}$.
:::

::: domanda Come si riconosce una classe invertibile senza cercare l'inversa?
Con il teorema 7.12: la classe di $a$ modulo $N$ è invertibile se e solo se il massimo comun divisore di $a$ e $N$ è 1.
:::

::: domanda Come si calcola l'inversa con un modulo grande?
Con l'algoritmo di Euclide e la risalita fino all'identità di Bézout $aA + NB = 1$: l'inversa è la classe di $A$.
:::

::: domanda Perché con un modulo primo tutte le classi non nulle sono invertibili?
Perché un primo non ha fattori in comune con nessun numero tra 1 e sé stesso meno 1.
:::

::: domanda Che cosa conta la funzione di Eulero?
I numeri tra 1 e $n$ coprimi con $n$, cioè le classi invertibili modulo $n$.
:::

::: domanda Quanto vale la funzione di Eulero di una potenza di un primo, e perché?
$p^{e-1}(p - 1)$: dal totale $p^e$ si tolgono i multipli di $p$, che sono $p^{e-1}$.
:::

## Glossario

```glossario
Classe invertibile | Classe che ha un'inversa: moltiplicata per lei dà la classe di 1.
Inversa di una classe | La classe che moltiplicata per quella data dà la classe di 1.
Divisore dello zero | Classe non nulla che moltiplicata per un'altra classe non nulla dà la classe di 0.
Coprimi | Due interi con massimo comun divisore 1.
Legge di cancellazione | Da ax = ay ricavare x = y: vale quando a è invertibile.
Classi invertibili modulo N | L'insieme delle classi coprime con il modulo; il libro lo chiama gruppo moltiplicativo.
Funzione di Eulero | La funzione che conta i numeri tra 1 e n coprimi con n.
```

## Checklist

```checklist
- So dire che cosa sono una classe invertibile e un divisore dello zero.
- So dimostrare che un divisore dello zero non è invertibile.
- So enunciare il criterio del massimo comun divisore e ripeterne la dimostrazione.
- So elencare le classi invertibili e i divisori dello zero per un modulo dato.
- So trovare l'inversa per tentativi con un modulo piccolo.
- So trovare l'inversa con Euclide e Bézout, e controllarla.
- So dire perché con un modulo primo si può dividere per ogni classe non nulla.
- So che cosa conta la funzione di Eulero.
- So calcolarla per un primo e per una potenza di un primo, e so perché.
- So calcolarla per un numero qualunque spezzandolo in potenze di primi diversi.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta* (testo del canale B), cap. 7 «Aritmetica modulare»: tabella della moltiplicazione di $\mathbb{Z}_{10}$ (p. 136); «Il gruppo moltiplicativo», pp. 137–141 (definizione 7.11, teorema 7.12 con la dimostrazione, note 7.13 e 7.14, definizione 7.15 con la tabella, proposizione 7.17 solo enunciata, proposizione 7.18 con la dimostrazione).
- Diario delle lezioni del canale B 2025/26, lezione 18 (13/11/2025): «Classi di congruenza modulo N invertibili e divisori dello zero. Caratterizzazione in termini del MCD col modulo. Funzione φ di Eulero. Calcolo di φ(N) per N potenza di un primo».
- Appelli di Matematica Discreta: 14/01/2025 (quiz, domanda 8), 08/06/2026 (quiz, domanda 9), 10/09/2026 (quiz, domanda 9); prova del 23/01/2020 (esercizio 3); quiz 2021–25; problemi 2021/22 (problema 1). Le risposte sono quelle dei fogli delle soluzioni, ricontrollate con un programma.
