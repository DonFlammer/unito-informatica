---
corso: MDAG
modulo: MD
lezione: S6
tipo: riassunto
titolo: "Settimana 6: scambi e parità"
data: 2026-11-02
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Riassunto settimanale · Parte 1 (modA) · Matematica Discreta · Canali A, B e C · 02/11 – 06/11/2026
descrizione: >-
  Riassunto della settimana 6 di Matematica Discreta (MDAG, parte 1): ogni ciclo e ogni permutazione sono
  composizioni di scambi, la scrittura non è unica ma la parità sì, permutazioni pari e dispari, parità di un ciclo,
  di un prodotto e dal tipo, quante sono le pari, con le domande 5 e 6 dei quiz e i problemi degli appelli 2025–2026.
lede: >-
  La lezione della settimana in poche pagine: come si scrive una permutazione con gli scambi, perché si può dire se è
  pari o dispari, e come si legge la parità dal tipo in pochi secondi. Con tipo e periodo della settimana scorsa, è
  tutto quello che serve per il problema sulle permutazioni.
materiale: libro
scheda:
  Lezioni: "[D13](D13_scambi_parita.html) lun 02/11"
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 5, pp. 95–101
  Tempo di ripasso: 30 minuti
fonte: >-
  Gli appunti della lezione D13 di Matematica Discreta, scritti sul libro di A. Mori
appunti_html: appunti/MDAG/riassunto_settimana_06_MD.html
genera_html: true
---

## In breve

- Uno **scambio** è un ciclo di lunghezza 2. Ogni ciclo di lunghezza $\ell$ è composizione di $\ell - 1$ scambi, e quindi ogni permutazione è composizione di scambi.
- La scrittura con gli scambi **non è unica**, ma il numero di scambi è sempre pari o sempre dispari: è la **parità** della permutazione.
- Un ciclo di lunghezza **dispari** è **pari**, uno di lunghezza pari è dispari: conta $\ell - 1$.
- In un **prodotto** si contano i fattori dispari: se sono in numero pari, il prodotto è pari.
- Dal **tipo**: la permutazione è pari quando i cicli di lunghezza pari sono in numero pari.
- In $S_n$, da $n = 2$ in su, metà delle permutazioni sono pari.

> [!NOTA] Le altre lezioni della settimana
> Questa settimana il calendario del canale B aveva una sola lezione di Matematica Discreta, quella di lunedì 02/11. Gli argomenti sono ricostruiti dal diario dell'anno scorso.

## D13 · Dagli scambi alle permutazioni (lun 02/11)

Ogni permutazione si ottiene scambiando due numeri alla volta. Per un ciclo c'è una ricetta fissa: tutti gli scambi contengono il primo numero del ciclo, e gli altri numeri compaiono da destra nell'ordine del giro (proposizione 5.13).

$$(1\ 2\ 3\ 4\ 5) = (1\ 5)(1\ 4)(1\ 3)(1\ 2).$$

Come sempre il prodotto si legge **da destra**: l'1 entra in $(1\ 2)$ e va nel 2; il 2 va nell'1 e poi, con $(1\ 3)$, nel 3; e così via. Una permutazione qualsiasi si scrive prima in cicli disgiunti, poi ogni ciclo con i suoi scambi (teorema 5.14).

**La scrittura non è unica.** $(1\ 3)$ è uno scambio, ma è anche $(1\ 2)(2\ 3)(1\ 2)$, tre scambi. E gli scambi non commutano.

::: prova Scrivi il ciclo $(2\ 5\ 3\ 7)$ come composizione di scambi.
$(2\ 7)(2\ 3)(2\ 5)$: tre scambi, tutti con il 2, e gli altri numeri da destra nell'ordine del giro.
:::

> [!RICORDA]
> - Ciclo di lunghezza $\ell$: $\ell - 1$ scambi, tutti con il primo numero.
> - Ogni permutazione è composizione di scambi, in più modi.

## D13 · Pari e dispari

Gli scambi che servono per scrivere una permutazione possono essere tre o cinque, ma non tre o quattro: il loro numero è sempre pari o sempre dispari. Da qui la divisione delle permutazioni in **pari** e **dispari**.

```grafico
titolo: Dal tipo alla parità. Ogni ciclo vale tanti scambi quanta è la sua lunghezza meno uno. Per il tipo (5, 3, 3, 2): 4 + 2 + 2 + 1 = 9 scambi, dispari. La scorciatoia: contano solo i cicli di lunghezza pari, qui uno solo
x: 0 12.4
y: 0 4.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.5 2.4 3.1 2.4 3.1 3.6 0.5 3.6 | verde | pieno
testo: 1.8 3.2 | verde | "ciclo di 5"
testo: 1.8 2.7 | grigio | "4 scambi"
poligono: 3.5 2.4 6.1 2.4 6.1 3.6 3.5 3.6 | verde | pieno
testo: 4.8 3.2 | verde | "ciclo di 3"
testo: 4.8 2.7 | grigio | "2 scambi"
poligono: 6.5 2.4 9.1 2.4 9.1 3.6 6.5 3.6 | verde | pieno
testo: 7.8 3.2 | verde | "ciclo di 3"
testo: 7.8 2.7 | grigio | "2 scambi"
poligono: 9.5 2.4 12.0 2.4 12.0 3.6 9.5 3.6 | rosa | pieno
testo: 10.75 3.2 | rosa | "ciclo di 2"
testo: 10.75 2.7 | grigio | "1 scambio"
testo: 5.0 1.4 | verde | "lunghezza dispari: ciclo pari"
testo: 10.4 1.4 | rosa | "lunghezza pari: ciclo dispari"
testo: 6.2 0.5 | grigio | "4 + 2 + 2 + 1 = 9: permutazione dispari"
```

- **La parità è ben definita** (teorema 5.16): due scritture della stessa permutazione hanno numeri di scambi tutti e due pari o tutti e due dispari. Una permutazione è **pari** o **dispari** secondo quel numero. L'identità è pari.
- **Un ciclo** di lunghezza $\ell$ ha la parità di $\ell - 1$ (proposizione 5.18): lunghezza 3 pari, lunghezza 4 dispari.
- **Un prodotto** ha la parità della somma: pari con pari e dispari con dispari danno pari, pari con dispari dà dispari (proposizione 5.19). L'inversa ha la parità della permutazione; una potenza $\sigma^k$ di una dispari ha la parità di $k$.
- **Dal tipo** (proposizione 5.20): si sommano le lunghezze meno uno. In pratica si contano i cicli di lunghezza pari.
- **Anche con cicli non disgiunti** (nota 5.21): per la parità basta contare i cicli di lunghezza pari così come sono scritti. Per tipo e periodo invece servono i cicli disgiunti.
- **Metà e metà** (proposizione 5.22): in $S_n$ ci sono $\frac{n!}{2}$ pari e altrettante dispari.

> [!ESEMPIO] · Appello del 14/01/2025, problema 1, versione B, punto a
> «$\sigma = (1\ 3)(2\ 5\ 3)(3\ 6\ 1)$ e $\tau$, che manda 1, 2, 3, 4, 5, 6 in 2, 1, 6, 5, 3, 4. Scrivere $\sigma$ e $\tau$ come prodotti di cicli disgiunti, calcolarne il tipo, il periodo e la parità.»
>
> **$\sigma$.** Da destra: $1 \mapsto 3 \mapsto 2$, $2 \mapsto 5$, $5 \mapsto 3 \mapsto 1$; poi $3 \mapsto 6$ e $6 \mapsto 1 \mapsto 3$. Quindi $\sigma = (1\ 2\ 5)(3\ 6)$: tipo $(3, 2)$, periodo 6, **dispari**.
>
> **$\tau$.** $1 \mapsto 2 \mapsto 1$ e $3 \mapsto 6 \mapsto 4 \mapsto 5 \mapsto 3$: $\tau = (1\ 2)(3\ 6\ 4\ 5)$, tipo $(4, 2)$, periodo 4, **pari**, perché i cicli di lunghezza pari sono due.
>
> Controllo veloce su $\sigma$ dai cicli del testo: lunghezze 2, 3, 3, un solo ciclo di lunghezza pari, quindi dispari. Ricontrollato con un programma.

::: prova $\pi$ è dispari. Di che parità sono $\pi^2$, $\pi^{-1}$ e $\pi^7$?
$\pi^2$ è pari, $\pi^{-1}$ dispari, $\pi^7$ dispari: una potenza di una dispari ha la parità dell'esponente, e l'inversa ha la parità della permutazione.
:::

> [!RICORDA]
> - Lunghezza dispari, ciclo pari: conta la lunghezza meno uno.
> - Prodotto: conta i fattori dispari. Tipo: conta i cicli di lunghezza pari.
> - Per la parità vanno bene anche cicli non disgiunti; per tipo e periodo no.

## Verso l'esame

- **Domanda 5 o 6 del quiz**: la parità di un prodotto di permutazioni pari e dispari (13/01/2026, 10/09/2026) o parità e periodo dal tipo (14/01/2025).
- **Problema sulle permutazioni**: «cicli disgiunti, tipo, periodo e parità» è il punto a di quasi tutti gli appelli (25/01/2022, 14/01/2025, 01/07/2026).
- L'errore più comune: dire che un ciclo di lunghezza 3 è dispari.
- Appelli 2026/27: martedì 19/01/2027 e mercoledì 03/02/2027, alle 14:00, con libro e appunti.

## Domande di ripasso

::: domanda Come si scrive un ciclo di lunghezza $\ell$ con gli scambi?
Con $\ell - 1$ scambi, tutti con il primo numero: $(m_1\ m_\ell) \cdots (m_1\ m_3)(m_1\ m_2)$.
:::

::: domanda Che cosa dice il teorema 5.16?
Che due scritture della stessa permutazione come composizione di scambi hanno numeri di scambi con la stessa parità.
:::

::: domanda Come si calcola la parità di un prodotto di più permutazioni?
Si contano i fattori dispari: se sono in numero pari, il prodotto è pari.
:::

::: domanda Come si legge la parità dal tipo?
Si contano i cicli di lunghezza pari: in numero pari, permutazione pari.
:::

::: domanda Quante sono le permutazioni pari di $S_6$?
$\frac{6!}{2} = 360$.
:::

## Quiz d'esame

Le prime quattro sono domande vere: le domande 5 e 6 dei quiz degli appelli 2025–2026, in versioni diverse da quelle che ci sono già nella lezione. Le tre successive vengono dal problema 1 dell'appello del 14/01/2025, versioni C e D. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma.

```quiz
D: Appello del 10/09/2026, quiz, domanda 5 (un'altra versione). Siano $\tau$ una permutazione dispari e $\sigma$ una permutazione pari. Quale delle seguenti affermazioni è vera?
+ $\tau \circ \sigma^4$ è dispari
- $\tau^5 \circ \sigma^3$ è pari
- $\sigma \circ \tau \circ \sigma \circ \tau^2$ è pari
- $\sigma^3 \circ \tau \circ \sigma^2$ è pari
- $\sigma \circ \tau^3 \circ \sigma$ è pari
= Si contano le $\tau$, le uniche dispari: una nella prima, quindi dispari. Nelle altre sono 5, 3, 1 e 3, sempre in numero dispari, e l'affermazione «pari» è falsa. È la risposta 1 della soluzione ufficiale. La più insidiosa è la terza: $\tau$ e $\tau^2$ insieme fanno tre $\tau$.

D: Appello del 13/01/2026, quiz, domanda 6 (un'altra versione). Siano $\pi$ e $\sigma$ permutazioni dispari e $\tau$ una permutazione pari. Quale delle seguenti è una permutazione dispari?
+ $\tau^3 \circ \pi \circ \sigma^2$
- $\pi^3 \circ \tau \circ \sigma^3$
- $\pi \circ \sigma^5 \circ \pi^2$
- $\pi \circ \sigma \circ \tau^5$
- $\sigma^2 \circ \tau \circ \pi^4$
= Si contano $\pi$ e $\sigma$: nella prima sono $1 + 2 = 3$, dispari. Nelle altre 6, 8, 2 e 6. È la risposta 1 della soluzione ufficiale. La più insidiosa è la quarta: $\pi \circ \sigma$ sono due dispari, e insieme danno una pari.

D: Appello del 14/01/2025, quiz, domanda 5 (una delle versioni). Una permutazione $\pi$ ha tipo $(6, 3, 2)$. Allora $\pi$:
- è pari ed ha periodo 12
- è dispari ed ha periodo 6
+ è pari ed ha periodo 6
- è pari ed ha periodo 18
- è dispari ed ha periodo 12
= I cicli di lunghezza pari sono due, quindi pari; il periodo è $\mathrm{mcm}(6, 3, 2) = 6$. È la risposta 3 della soluzione ufficiale. La più insidiosa è «pari ed ha periodo 12», di chi somma o moltiplica le lunghezze invece del mcm.

D: Appello del 14/01/2025, quiz, domanda 5 (un'altra versione). Una permutazione $\pi$ ha tipo $(6, 4, 2)$. Allora $\pi$:
- è pari ed ha periodo 6
- è dispari ed ha periodo 24
- è pari ed ha periodo 24
+ è dispari ed ha periodo 12
- è pari ed ha periodo 12
= Tre cicli di lunghezza pari: dispari. Periodo $\mathrm{mcm}(6, 4, 2) = 12$. È la risposta 4 della soluzione ufficiale. La più insidiosa è «pari ed ha periodo 12», di chi pensa che tre cicli pari diano una permutazione pari.

D: Dal problema 1 dell'appello del 14/01/2025, versione C. Sia $\sigma = (2\ 3)(1\ 4\ 3)(3\ 5\ 2) \in S_6$. Qual è la sua scrittura in cicli disgiunti?
+ $(1\ 4\ 2)(3\ 5)$
- $(1\ 4\ 3)(2\ 5)$
- $(1\ 2\ 4)(3\ 5)$
- $(1\ 4\ 2\ 3\ 5)$
- $(1\ 4)(2\ 3\ 5)$
= Da destra: $1 \mapsto 4$, $4 \mapsto 3 \mapsto 2$, $2 \mapsto 3 \mapsto 1$; poi $3 \mapsto 5$ e $5 \mapsto 2 \mapsto 3$. Ricontrollato con un programma. La più insidiosa è $(1\ 2\ 4)(3\ 5)$: è il primo ciclo percorso al contrario, cioè letto da sinistra.

D: Dal problema 1 dell'appello del 14/01/2025, versione C. Per la stessa $\sigma = (2\ 3)(1\ 4\ 3)(3\ 5\ 2)$, quali sono periodo e parità?
+ periodo 6, dispari
- periodo 6, pari
- periodo 5, pari
- periodo 3, dispari
- periodo 12, dispari
= Tipo $(3, 2)$: periodo $\mathrm{mcm}(3, 2) = 6$, e un solo ciclo di lunghezza pari. Si vede anche dai cicli del testo, di lunghezze 2, 3 e 3. La più insidiosa è «periodo 6, pari».

D: Dal problema 1 dell'appello del 14/01/2025, versione D. Sia $\tau$ la permutazione di $S_6$ che manda 1, 2, 3, 4, 5, 6 in 3, 4, 2, 1, 6, 5. Quali sono tipo e parità?
+ tipo $(4, 2)$, pari
- tipo $(4, 2)$, dispari
- tipo $(3, 2)$, dispari
- tipo $(6)$, dispari
- tipo $(2, 2, 2)$, dispari
= $1 \mapsto 3 \mapsto 2 \mapsto 4 \mapsto 1$ e $5 \mapsto 6 \mapsto 5$: $\tau = (1\ 3\ 2\ 4)(5\ 6)$. Due cicli di lunghezza pari: pari. La più insidiosa è la seconda: ogni ciclo è dispari, ma due dispari danno una pari.

D: Sul modello della proposizione 5.22. Quante sono le permutazioni dispari di $S_5$?
N: 60
= Metà di $5! = 120$.
```

## Fonti

- La lezione completa: [D13 · Scambi e parità di una permutazione](D13_scambi_parita.html), con gli esempi, i quiz e gli esercizi.
- A. Mori, *Lezioni di Matematica Discreta*, cap. 5, pp. 95–101.
- Quiz degli appelli del 14/01/2025, 13/01/2026 e 10/09/2026 (domande 5 e 6); problema 1 dell'appello del 14/01/2025, versioni B, C e D, con le soluzioni ufficiali.
