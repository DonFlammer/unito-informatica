---
corso: MDAG
modulo: MD
lezione: S5
tipo: riassunto
titolo: "Settimana 5: binomio di Newton e permutazioni"
data: 2026-10-30
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Riassunto settimanale · Parte 1 (modA) · Matematica Discreta · Canali A, B e C · 26/10 – 30/10/2026
descrizione: >-
  Riassunto della settimana 5 di Matematica Discreta (MDAG, parte 1): il binomio di Newton e le somme di una riga
  del triangolo; le permutazioni, la tabella a due righe, composizione e inversa; i cicli, i cicli disgiunti e la
  decomposizione; il tipo, il conteggio delle permutazioni di un tipo, le partizioni, le potenze e il periodo.
lede: >-
  Le tre lezioni della settimana in poche pagine: come si sviluppa una potenza di una somma, come si scrive una
  permutazione in cicli disgiunti, come si leggono tipo e periodo, e le domande 5 e 6 del quiz degli appelli
  2025–2026.
materiale: libro
scheda:
  Lezioni: "[D10](D10_binomio_newton_permutazioni.html) lun 26/10 · [D11](D11_cicli_disgiunti.html) mer 28/10 · [D12](D12_tipo_periodo_permutazioni.html) ven 30/10"
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 3, pp. 60–61; cap. 5, pp. 83–95 e 101–103
  Tempo di ripasso: 45 minuti
fonte: >-
  Gli appunti delle lezioni D10, D11 e D12 di Matematica Discreta, scritti sul libro di A. Mori
appunti_html: appunti/MDAG/riassunto_settimana_05_MD.html
genera_html: true
---

## In breve

- Il **binomio di Newton** sviluppa $(x + y)^n$: i coefficienti sono i coefficienti binomiali, cioè la riga $n$ del triangolo di Tartaglia.
- Una **permutazione** rimescola gli elementi di un insieme: è una funzione biettiva dall'insieme in sé. Le permutazioni di $\{1, \dots, n\}$ sono $n!$.
- Si compongono come le funzioni, **da destra a sinistra**, e l'ordine conta. L'inversa si trova girando le frecce, o scambiando le righe della tabella.
- Un **ciclo** sposta alcuni numeri in giro e lascia fermi gli altri. Ogni permutazione è un prodotto di **cicli disgiunti**, sempre gli stessi.
- Il **tipo** è l'elenco delle lunghezze dei cicli disgiunti; il **periodo** è il loro minimo comune multiplo.
- Le potenze si calcolano ciclo per ciclo, e gli esponenti si riducono con il periodo, anche quelli negativi.

## D10 · Binomio di Newton e permutazioni (lun 26/10)

La potenza di una somma si sviluppa contando. Moltiplicando $(x + y)$ per sé stesso $n$ volte, ogni termine nasce scegliendo in ogni fattore la $x$ o la $y$. I modi di scegliere da quali $k$ fattori prendere la $y$ sono $\binom{n}{k}$, e da qui il **teorema 3.34**:

$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k.$$

- Per $n = 3$: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, con la riga 1, 3, 3, 1.
- **Coefficiente di un termine**: in $(2x - 3)^5$ il termine con $x^3$ è $\binom{5}{3} (2x)^3 (-3)^2 = 10 \cdot 8 \cdot 9 \, x^3 = 720\, x^3$. Numeri e segni dentro le parentesi vanno elevati anche loro.
- **Somme di una riga**: con $x = y = 1$ viene $2^n$; con $x = 1$ e $y = -1$ viene 0, cioè i termini di posto pari e di posto dispari si equivalgono.

Poi le **permutazioni** (cap. 5). Una permutazione di $\{1, \dots, n\}$ si scrive con la tabella a due righe: sopra i numeri, sotto dove vanno. L'insieme di tutte si chiama $S_n$ e ha $n!$ elementi (proposizione 5.2). Due permutazioni si compongono come funzioni: in $\sigma \circ \tau$ lavora prima $\tau$. Già in $S_3$ i due ordini danno risultati diversi.

::: prova Qual è il coefficiente di $x^2$ in $(x + 2)^4$?
$\binom{4}{2} \cdot 2^2 = 6 \cdot 4 = 24$.
:::

> [!RICORDA]
> - I coefficienti di $(x + y)^n$ sono la riga $n$ di Tartaglia; con numeri e segni nelle parentesi, si elevano anche quelli.
> - $S_n$ ha $n!$ permutazioni; la composizione si legge da destra.

## D11 · Cicli e cicli disgiunti (mer 28/10)

Con la tabella, l'**inversa** si ottiene scambiando le righe e riordinando le colonne; la **composizione** $\sigma \circ \pi$ con una terza riga, le immagini secondo $\sigma$ della riga di $\pi$.

Un **ciclo** $(t_1\ t_2\ \cdots\ t_\ell)$ manda ogni numero nel successivo e l'ultimo nel primo. Lo stesso ciclo si può cominciare da qualunque numero; l'inverso è il ciclo letto al contrario. Due cicli **disgiunti**, senza numeri in comune, commutano.

Il **teorema 5.8**: ogni permutazione diversa dall'identità è un prodotto di cicli disgiunti, unici a meno dell'ordine. Si trovano seguendo un numero finché torna al punto di partenza.

```grafico
titolo: La permutazione di $S_{13}$ dell'esempio del libro è fatta di tre giri che non si toccano: $(1\ 8\ 2\ 5\ 7\ 9)$, $(3\ 11\ 6\ 10)$ e $(12\ 13)$. Il 4 resta fermo e non si scrive
x: -2.6 10.6
y: -2.7 2.7
assi: no
griglia: no
cerchio: 0 0 1.7 | grigio | sottile
punto: 0.00 1.70 | blu
testo: 0.00 2.26 | blu | "1"
punto: 1.47 0.85 | blu
testo: 1.96 1.13 | blu | "8"
punto: 1.47 -0.85 | blu
testo: 1.96 -1.13 | blu | "2"
punto: 0.00 -1.70 | blu
testo: 0.00 -2.26 | blu | "5"
punto: -1.47 -0.85 | blu
testo: -1.96 -1.13 | blu | "7"
punto: -1.47 0.85 | blu
testo: -1.96 1.13 | blu | "9"
freccia: 0.27 1.55 1.21 1.00 | blu
freccia: 1.47 0.54 1.47 -0.54 | blu
freccia: 1.21 -1.00 0.27 -1.55 | blu
freccia: -0.27 -1.55 -1.21 -1.00 | blu
freccia: -1.47 -0.54 -1.47 0.54 | blu
freccia: -1.21 1.00 -0.27 1.55 | blu
cerchio: 5 0 1.4 | grigio | sottile
punto: 5.00 1.40 | ambra
testo: 5.00 1.93 | ambra | "3"
punto: 6.40 0.00 | ambra
testo: 6.93 0.00 | ambra | "11"
punto: 5.00 -1.40 | ambra
testo: 5.00 -1.93 | ambra | "6"
punto: 3.60 0.00 | ambra
testo: 3.07 0.00 | ambra | "10"
freccia: 5.25 1.15 6.15 0.25 | ambra
freccia: 6.15 -0.25 5.25 -1.15 | ambra
freccia: 4.75 -1.15 3.85 -0.25 | ambra
freccia: 3.85 0.25 4.75 1.15 | ambra
punto: 9.30 0.90 | verde
testo: 9.30 1.44 | verde | "12"
punto: 9.30 -0.90 | verde
testo: 9.30 -1.44 | verde | "13"
freccia: 9.10 0.60 9.10 -0.60 | verde
freccia: 9.50 -0.60 9.50 0.60 | verde
```

Quando la permutazione è data come prodotto di cicli **non** disgiunti, si segue ogni numero attraverso i cicli **da destra a sinistra**. Per esempio, nell'appello del 13/01/2026, $(1\ 2)(5\ 9\ 4)(4\ 2\ 7)(9\ 5\ 6\ 2\ 3) = (1\ 2\ 3\ 4)(5\ 6\ 7)$, e il 9 torna fermo.

::: prova Scrivi in cicli disgiunti $(1\ 2\ 3)(2\ 4)$.
Da destra: $1 \mapsto 2$, $2 \mapsto 4$, $4 \mapsto 2 \mapsto 3$, $3 \mapsto 1$. È il ciclo $(1\ 2\ 4\ 3)$.
:::

> [!RICORDA]
> - Prima di tutto, i cicli disgiunti: da destra, un numero alla volta.
> - L'inverso di un ciclo è il ciclo al contrario; i cicli disgiunti commutano.

## D12 · Tipo e periodo (ven 30/10)

Il **tipo** è l'elenco delle lunghezze dei cicli disgiunti, in ordine decrescente: $(1\ 2\ 3\ 4)(5\ 6\ 7)$ ha tipo $(4, 3)$. Completato con degli 1, un tipo è una **partizione** di $n$; per esempio $S_5$ ha 7 tipi, quante le partizioni di 5.

- **Quante permutazioni hanno un tipo**: un ciclo alla volta. I cicli di lunghezza $\ell$ con $n$ numeri sono $\frac{1}{\ell} \cdot \frac{n!}{(n - \ell)!}$; si moltiplica, e per ogni lunghezza che compare $k$ volte si divide per $k!$. Tipo $(4, 3)$ in $S_9$: $756 \cdot 20 = 15120$.
- **Periodo**: il primo esponente positivo che dà l'identità. Un ciclo di lunghezza $\ell$ ha periodo $\ell$; in generale il periodo è il **minimo comune multiplo** delle lunghezze del tipo (proposizione 5.26).
- **Ridurre gli esponenti**: con periodo $p$, $\pi^a = \pi^b$ quando $a - b$ è un multiplo di $p$. Con periodo 14, $\pi^{-3} = \pi^{11} = \pi^{25}$.
- **Il tipo delle potenze**: la potenza $k$-esima di un ciclo di lunghezza $\ell$ si spezza in $\mathrm{mcd}(\ell, k)$ cicli uguali; se $\ell$ divide $k$, sparisce.

```grafico
titolo: Il quadrato del ciclo $(1\ 2\ 3\ 4\ 5\ 6)$ salta di due posti: i dispari formano il giro $(1\ 3\ 5)$, in blu, i pari il giro $(2\ 4\ 6)$, in ambra. Un ciclo di lunghezza 6 al quadrato ha tipo $(3, 3)$
x: -2.5 2.5
y: -2.5 2.5
assi: no
griglia: no
cerchio: 0 0 1.6 | grigio | sottile
punto: 0.00 1.60 | grigio
testo: 0.00 2.08 | grigio | "1"
punto: 1.39 0.80 | grigio
testo: 1.80 1.04 | grigio | "2"
punto: 1.39 -0.80 | grigio
testo: 1.80 -1.04 | grigio | "3"
punto: 0.00 -1.60 | grigio
testo: 0.00 -2.08 | grigio | "4"
punto: -1.39 -0.80 | grigio
testo: -1.80 -1.04 | grigio | "5"
punto: -1.39 0.80 | grigio
testo: -1.80 1.04 | grigio | "6"
freccia: 0.14 1.36 1.25 -0.56 | blu
freccia: 1.11 -0.80 -1.11 -0.80 | blu
freccia: -1.25 -0.56 -0.14 1.36 | blu
freccia: 1.25 0.56 0.14 -1.36 | ambra
freccia: -0.14 -1.36 -1.25 0.56 | ambra
freccia: -1.11 0.80 1.11 0.80 | ambra
```

::: prova Una permutazione ha tipo $(6, 4, 2)$. Che periodo ha, e che tipo ha il suo quadrato?
Periodo $\mathrm{mcm}(6, 4, 2) = 12$. Al quadrato: il ciclo di 6 diventa due cicli di 3, quello di 4 due scambi, lo scambio sparisce. Tipo $(3, 3, 2, 2)$.
:::

> [!RICORDA]
> - Tipo dai cicli disgiunti; periodo = mcm del tipo.
> - Conteggi: un ciclo alla volta, e $k!$ per le lunghezze ripetute.
> - Potenze ciclo per ciclo, con il mcd.

## Verso l'esame

- **Domande 5 e 6 del quiz**: in tutti gli appelli del 2025 e del 2026 sono sulle permutazioni. Decomposizione in cicli disgiunti (06/06/2025), tipo di una potenza (04/02/2025, 03/02/2026, 08/06/2026), esponenti ridotti con il periodo (06/06/2025, 13/01/2026, 03/02/2026), periodo che non può essere (08/06/2026).
- **Problema sulle permutazioni**: cicli disgiunti, inversa, potenze con tipo e periodo, quante permutazioni hanno quel tipo (13/01/2026, 01/07/2026, 10/09/2026). La parità, che compare negli stessi esercizi, è la prossima lezione.
- Il **binomio di Newton** negli appelli 2021–2026 non è mai uscito; serve per capire i coefficienti binomiali.
- Appelli 2026/27: martedì 19/01/2027 e mercoledì 03/02/2027, alle 14:00, con libro e appunti.

## Domande di ripasso

::: domanda Perché i coefficienti di $(x + y)^n$ sono coefficienti binomiali?
Perché il termine con $y^k$ nasce scegliendo la $y$ in $k$ fattori su $n$, e i modi sono $\binom{n}{k}$.
:::

::: domanda In $\sigma \circ \tau$, quale permutazione lavora per prima?
$\tau$, quella a destra, come in ogni composizione di funzioni.
:::

::: domanda Come si scrive in cicli disgiunti un prodotto di cicli qualsiasi?
Si segue un numero attraverso i cicli da destra a sinistra, poi il risultato, finché si torna all'inizio; poi si riparte da un numero non usato.
:::

::: domanda Come si calcola il periodo di una permutazione?
Dai cicli disgiunti si legge il tipo, e il periodo è il minimo comune multiplo delle lunghezze.
:::

::: domanda Che tipo ha il cubo di un ciclo di lunghezza 6?
$\mathrm{mcd}(6, 3) = 3$: tre cicli di lunghezza 2, cioè tipo $(2, 2, 2)$.
:::

## Quiz d'esame

Le prime otto sono domande vere: le domande 5 e 6 dei quiz degli appelli 2025–2026, in versioni diverse da quelle che ci sono già nelle lezioni. L'ultima viene dal problema 1 del 14/01/2025. Il binomio di Newton non ha domande d'esame, quindi la domanda su di lui è sul modello degli esercizi del libro. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma.

```quiz
D: Appello del 06/06/2025, quiz versione 4, domanda 5. La decomposizione della permutazione $(2\ 5\ 3\ 7\ 6)(1\ 4)(1\ 2\ 7\ 5)$ in cicli disgiunti è:
- $(1\ 5\ 4)(2\ 3)(7\ 6)$
- $(1\ 4\ 5)(3\ 7)$
- $(1\ 5\ 4)(2\ 6)$
+ $(1\ 5\ 4)(3\ 7)(2\ 6)$
- $(1\ 4\ 5)(3\ 7\ 2\ 6)$
= Da destra: l'1 va nel 2, poi resta, poi nel 5; il 5 va nell'1, poi nel 4; il 4 resta, va nell'1, poi resta. Poi $2 \mapsto 6 \mapsto 2$ e $3 \mapsto 7 \mapsto 3$. È la risposta 4 della soluzione ufficiale. La più insidiosa è $(1\ 4\ 5)(3\ 7)$: primo ciclo al contrario, e manca $(2\ 6)$.

D: Appello del 13/01/2026, quiz versione 3, domanda 5. Una permutazione $\pi$ ha periodo 12. Quale delle seguenti relazioni è vera?
- $\pi^{-1} = \pi^{13}$
- $\pi^{-3} = \pi^{15}$
- $\pi^{-3} = \pi^{3}$
- $\pi^{-2} = \pi^{18}$
+ $\pi^{-2} = \pi^{22}$
= $22 - (-2) = 24$, un multiplo di 12. È la risposta 5 della soluzione ufficiale. La più insidiosa è $\pi^{-1} = \pi^{13}$: in realtà $\pi^{13} = \pi$, mentre $\pi^{-1} = \pi^{11}$.

D: Appello del 03/02/2026, quiz versione 2, domanda 5. Una permutazione $\pi$ ha tipo $(5, 4, 2)$. Allora il tipo di $\pi^{-2}$ è:
- $(5, 4)$
- $(5, 4, 2)$
- $(4, 3, 2, 2)$
+ $(5, 2, 2)$
- $(5, 2)$
= $\pi^{-2}$ ha il tipo di $\pi^2$: il ciclo di lunghezza 5 resta, quello di lunghezza 4 diventa due scambi, lo scambio sparisce. È la risposta 4 della soluzione ufficiale. La più insidiosa è $(5, 2)$, di chi dimentica che il ciclo di 4 si spezza in **due** scambi.

D: Appello del 03/02/2026, quiz versione 2, domanda 6. Una permutazione $\tau$ ha periodo 10. Allora:
+ $\tau^{-5} = \tau^{5}$
- $\tau^{-1} = \tau^{11}$
- $\tau^{-3} = \tau^{13}$
- $\tau^{-4} = \tau^{4}$
- $\tau^{-2} = \tau^{6}$
= $5 - (-5) = 10$, il periodo. È la risposta 1 della soluzione ufficiale. La più insidiosa è $\tau^{-1} = \tau^{11}$: $\tau^{11} = \tau$, mentre $\tau^{-1} = \tau^9$.

D: Appello del 04/02/2025, quiz versione 4, domanda 6. Sia $\pi \in S_9$ una permutazione di tipo $(4, 3, 2)$. Allora $\pi^2$ ha tipo:
- $(4, 3)$
+ $(3, 2, 2)$
- $(3, 2, 2, 2)$
- $(2, 2)$
- $(4, 3, 2)$
= Al quadrato il ciclo di 4 diventa due scambi, quello di 3 resta, lo scambio sparisce. È la risposta 2 della soluzione ufficiale. La più insidiosa è $(3, 2, 2, 2)$, di chi tiene anche lo scambio di partenza.

D: Appello del 08/06/2026, quiz versione 4, domanda 5. Sia $\tau$ una permutazione di tipo $(4, 3, 3, 2)$. Allora $\tau^3$ ha tipo:
- $(3, 3)$
- è un 4-ciclo
+ $(4, 2)$
- $(2, 2, 2)$
- $(4, 3, 3, 2)$
= Al cubo i due cicli di lunghezza 3 spariscono, mentre 4 e 2 non hanno divisori comuni con 3 e restano interi. È la risposta 3 della soluzione ufficiale. La più insidiosa è «è un 4-ciclo», di chi fa sparire anche lo scambio.

D: Appello del 08/06/2026, quiz versione 3, domanda 6. Sia $\sigma$ una permutazione tale che $\sigma^{14} = \sigma^{-6}$. Allora il periodo di $\sigma$ NON può essere:
- 10
- 5
+ 6
- 2
- 4
= $\sigma^{14} = \sigma^{-6}$ vuol dire $\sigma^{20} = \mathrm{id}$, quindi il periodo divide 20. Il 6 non lo divide: è la risposta 3 della soluzione ufficiale. La più insidiosa è il 4, che non divide né 14 né 6 ma divide 20.

D: Appello del 04/02/2025, quiz versione 2, domanda 5. Sia $\pi = (2\ 5)(1\ 3\ 6\ 7) \in S_7$. Allora $\pi^6(3)$ è:
- 2
- 1
+ 7
- 6
- 3
= Il 3 sta in un ciclo di lunghezza 4 e $6 = 4 + 2$: contano 2 passi, $3 \mapsto 6 \mapsto 7$. È la risposta 3 della soluzione ufficiale. La più insidiosa è 6, che viene con un passo solo.

D: Dal problema 1 dell'appello del 14/01/2025. Sia $\tau = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 1 & 4 & 2 & 6 & 5 \end{pmatrix}$. Qual è la riga sotto della tabella di $\tau^{-1}$?
+ $2\ 4\ 1\ 3\ 6\ 5$
- $3\ 1\ 4\ 2\ 6\ 5$
- $4\ 2\ 1\ 3\ 5\ 6$
- $2\ 4\ 1\ 3\ 5\ 6$
- $5\ 6\ 2\ 4\ 1\ 3$
= Girando le frecce: $\tau(2) = 1$, quindi $\tau^{-1}(1) = 2$; $\tau(4) = 2$, quindi $\tau^{-1}(2) = 4$; e così via. È la $\tau^{-1}$ della soluzione ufficiale. La più insidiosa è $2\ 4\ 1\ 3\ 5\ 6$, che sbaglia solo lo scambio di 5 e 6, che è l'inverso di sé stesso.

D: Sul modello degli esercizi 3.16–3.19 del libro. Qual è il coefficiente di $x^3$ in $(2x - 3)^5$?
N: 720
= Il termine è $\binom{5}{3} (2x)^3 (-3)^2 = 10 \cdot 8 \cdot 9 \, x^3$: il $-3$ al quadrato è positivo.
```

## Fonti

- Le lezioni complete: [D10 · Binomio di Newton e permutazioni](D10_binomio_newton_permutazioni.html), [D11 · Cicli e cicli disgiunti](D11_cicli_disgiunti.html), [D12 · Tipo e periodo di una permutazione](D12_tipo_periodo_permutazioni.html), con gli esempi, i quiz e gli esercizi.
- A. Mori, *Lezioni di Matematica Discreta*, cap. 3, pp. 60–61; cap. 5, pp. 83–95 e 101–103.
- Quiz degli appelli del 04/02/2025, 06/06/2025, 13/01/2026, 03/02/2026 e 08/06/2026 (domande 5 e 6); problema 1 dell'appello del 14/01/2025, con le soluzioni ufficiali.
