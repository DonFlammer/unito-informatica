---
corso: MDAG
modulo: MD
lezione: D13
titolo: Scambi e parità di una permutazione
data: 2026-11-02
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D13
descrizione: >-
  Appunti della lezione D13 di Matematica Discreta (MDAG, parte 1, canali A, B e C): ogni ciclo e ogni permutazione
  sono composizioni di scambi, la scrittura non è unica, ma il numero di scambi è sempre pari o sempre dispari; la
  parità di una permutazione, di un ciclo e di un prodotto, la parità letta dal tipo, quante sono le permutazioni
  pari, con le domande d'esame degli appelli 2022–2026.
lede: >-
  Ogni permutazione si ottiene scambiando due numeri alla volta. Gli scambi necessari si possono scegliere in tanti
  modi, ma una cosa non cambia mai: se il loro numero è pari o dispari. È la parità, che l'esame chiede in quasi ogni
  problema sulle permutazioni, accanto a tipo e periodo.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 5, pp. 95–101
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 2 ore
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 5 «Permutazioni», sezione «Scambi e parità»,
  pp. 95–101 (proposizione 5.13, teorema 5.14, nota 5.15, teorema 5.16, definizione 5.17, proposizioni 5.18–5.20,
  nota 5.21, proposizione 5.22); diario delle lezioni del canale B 2025/26, lezione 13; appelli di Matematica Discreta
  2022–2026
appunti_html: appunti/MDAG/D13_scambi_parita.html
genera_html: true
---

## In breve

- Uno **scambio** è un ciclo di lunghezza 2, $(a\ b)$: scambia due numeri e lascia fermi gli altri.
- Ogni **ciclo** si scrive con tanti scambi quanta è la sua lunghezza meno uno, per esempio $(1\ 2\ 3\ 4\ 5) = (1\ 5)(1\ 4)(1\ 3)(1\ 2)$. Quindi ogni **permutazione** è composizione di scambi.
- La scrittura con gli scambi **non è unica**: $(1\ 2\ 3) = (1\ 2)(2\ 3) = (1\ 3)(1\ 2)$. Ma il numero di scambi di due scritture della stessa permutazione è sempre tutti e due pari o tutti e due dispari (teorema 5.16).
- Una permutazione è **pari** se si scrive con un numero pari di scambi, **dispari** altrimenti. L'identità è pari.
- Un ciclo di lunghezza $\ell$ ha la parità di $\ell - 1$: i cicli di lunghezza **dispari** sono **pari**, e viceversa.
- La parità di un prodotto si calcola come per le somme di interi: pari con pari dà pari, dispari con dispari dà pari, pari con dispari dà dispari.
- Dal tipo: la permutazione è pari se i cicli di lunghezza pari sono in numero pari.
- Con almeno due numeri, metà delle permutazioni sono pari e metà dispari: in $S_n$ sono $\frac{n!}{2}$ ciascuna.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di lunedì 02/11/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la tredicesima lezione era «Ogni ciclo è composizione di scambi. Ogni permutazione è composizione di scambi. Mancanza di unicità nella scrittura di una permutazione come composizione di scambi. Concetto di parità di una permutazione. La parità di una permutazione è ben definita. Esempi». Nel libro sono le pp. 95–101, subito dopo la [D12](D12_tipo_periodo_permutazioni.html). Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> Come nella [D11](D11_cicli_disgiunti.html), un prodotto di cicli si legge **da destra a sinistra**: ogni numero attraversa per primo il ciclo più a destra. La dimostrazione del teorema 5.16 è per assurdo, come quelle della [lezione 16 di Fondamenti](../FDA/16_dimostrazioni_per_assurdo.html).

## Gli scambi

Per mettere in ordine un mazzo di carte, si può prendere due carte alla volta e scambiarle di posto, finché il mazzo è ordinato. Ogni riordino si ottiene così. Lo stesso vale per le permutazioni: gli **scambi**, già incontrati nella [D11](D11_cicli_disgiunti.html), bastano a costruirle tutte.

> [!DEF] Scambio (D11, definizione 5.3)
> Uno **scambio**, o **trasposizione**, è un ciclo di lunghezza 2, $(a\ b)$ con $a \ne b$: manda $a$ in $b$, $b$ in $a$, e lascia fermi tutti gli altri numeri.

**Come si legge.** Uno scambio è l'inverso di sé stesso: fatto due volte, rimette tutto a posto. In formule $(a\ b)(a\ b) = \mathrm{id}$, cioè $(a\ b)^{-1} = (a\ b)$.

::: prova Quanti scambi diversi ci sono in $S_4$?
Uno per ogni coppia di numeri tra 1 e 4: $\binom{4}{2} = 6$. Sono $(1\ 2)$, $(1\ 3)$, $(1\ 4)$, $(2\ 3)$, $(2\ 4)$, $(3\ 4)$.
:::

> [!RICORDA]
> - Scambio = ciclo di lunghezza 2. Fatto due volte, dà l'identità.

## Ogni ciclo è composizione di scambi (proposizione 5.13)

Un esempio prima della regola. Il ciclo $(1\ 2\ 3\ 4\ 5)$ manda $1 \mapsto 2 \mapsto 3 \mapsto 4 \mapsto 5 \mapsto 1$. Lo stesso effetto si ottiene con quattro scambi che hanno tutti l'1:

$$(1\ 2\ 3\ 4\ 5) = (1\ 5)(1\ 4)(1\ 3)(1\ 2).$$

Per controllare, si segue ogni numero da destra a sinistra:

1. **l'1**: $(1\ 2)$ lo manda nel 2, e gli scambi a sinistra non contengono il 2. Risultato: $1 \mapsto 2$.
2. **il 2**: $(1\ 2)$ lo manda nell'1, poi $(1\ 3)$ manda l'1 nel 3, e gli scambi a sinistra non contengono il 3. Risultato: $2 \mapsto 3$.
3. **il 3 e il 4** fanno lo stesso: arrivano nell'1 con il loro scambio e ne escono con quello subito a sinistra, quindi $3 \mapsto 4$ e $4 \mapsto 5$.
4. **il 5** compare solo nell'ultimo scambio a sinistra, $(1\ 5)$, che lo manda nell'1. Risultato: $5 \mapsto 1$.

È proprio il ciclo. Gli scambi sono 4, uno in meno della lunghezza.

```grafico
titolo: Il ciclo (1 2 3 4 5) come quattro scambi, tutti con l'1, letti da destra: (1 2), poi (1 3), poi (1 4), poi (1 5). Ogni numero entra nell'1 con il suo scambio ed esce verso il successivo con lo scambio seguente
x: 0 12.4
y: 0 5.2
assi: no
griglia: no
proporzioni: libere
punto: 6.2 4.4 | accento
testo: 6.2 4.85 | accento | "1"
punto: 9.4 3.0 | blu
testo: 9.9 3.0 | blu | "2"
punto: 8.4 0.8 | blu
testo: 8.9 0.5 | blu | "3"
punto: 4.0 0.8 | blu
testo: 3.5 0.5 | blu | "4"
punto: 3.0 3.0 | blu
testo: 2.5 3.0 | blu | "5"
segmento: 6.2 4.4 9.4 3.0 | ambra
segmento: 6.2 4.4 8.4 0.8 | ambra
segmento: 6.2 4.4 4.0 0.8 | ambra
segmento: 6.2 4.4 3.0 3.0 | ambra
testo: 8.4 4.0 | ambra | "(1 2)"
testo: 7.9 2.3 | ambra | "(1 3)"
testo: 4.5 2.3 | ambra | "(1 4)"
testo: 4.0 4.0 | ambra | "(1 5)"
```

> [!PROP] Proposizione 5.13
> Ogni ciclo di lunghezza $\ell$ è composizione di $\ell - 1$ scambi:
> $$(m_1\ m_2\ \dots\ m_\ell) = (m_1\ m_\ell)(m_1\ m_{\ell-1}) \cdots (m_1\ m_3)(m_1\ m_2).$$

**Come si legge.** Tutti gli scambi contengono il primo numero del ciclo, $m_1$; gli altri numeri compaiono da destra in ordine, dal secondo all'ultimo. La verifica è quella dell'esempio: ogni $m_i$ entra in $m_1$ con il suo scambio ed esce in $m_{i+1}$ con quello subito a sinistra.

> [!TRAPPOLA] L'ordine conta
> Gli scambi di un ciclo hanno numeri in comune, quindi **non commutano**. $(1\ 2)(1\ 3)$ è $(1\ 3\ 2)$, mentre $(1\ 3)(1\ 2)$ è $(1\ 2\ 3)$.

::: prova Scrivi $(4\ 7\ 2\ 9)$ come composizione di scambi.
$(4\ 9)(4\ 2)(4\ 7)$: tre scambi, tutti con il 4, con gli altri numeri da destra nell'ordine del ciclo.
:::

> [!RICORDA]
> - Ciclo di lunghezza $\ell$ = $\ell - 1$ scambi, tutti con il primo numero.

## Ogni permutazione è composizione di scambi (teorema 5.14)

Una permutazione qualsiasi si scrive come prodotto di cicli disgiunti (teorema 5.8, [D11](D11_cicli_disgiunti.html)), e ogni ciclo si scrive con gli scambi. Basta mettere insieme le due cose.

> [!ESEMPIO] · Da cicli a scambi
> $\tau = (1\ 5\ 2)(3\ 4\ 6\ 7) \in S_7$.
>
> **Il primo ciclo.** $(1\ 5\ 2) = (1\ 2)(1\ 5)$: due scambi.
>
> **Il secondo ciclo.** $(3\ 4\ 6\ 7) = (3\ 7)(3\ 6)(3\ 4)$: tre scambi.
>
> **Insieme.** $\tau = (1\ 2)(1\ 5)(3\ 7)(3\ 6)(3\ 4)$: cinque scambi. L'ho ricontrollato con un programma.

> [!TEOREMA] Teorema 5.14
> Ogni permutazione è composizione di scambi.

### La scrittura non è unica

Con i cicli disgiunti la scrittura era unica e i cicli commutavano. Con gli scambi si perdono tutte e due le cose. Lo stesso ciclo ha più scritture:

$$(a\ b\ c) = (a\ b)(b\ c) = (a\ c)(a\ b),$$

e lo stesso scambio si può scrivere anche con tre scambi: $(1\ 3) = (1\ 2)(2\ 3)(1\ 2)$. Anche il numero di scambi cambia: 1 nella prima scrittura, 3 nella seconda.

> [!OSSERVAZIONE] Gli scambi generano $S_n$ (nota 5.15)
> Componendo scambi in tutti i modi possibili si ottengono tutte le permutazioni: gli scambi **generano** $S_n$. Sono solo $\binom{n}{2} = \frac{n(n-1)}{2}$, molti meno dei cicli, e più facili da descrivere: per questo sono comodi anche nel calcolo delle permutazioni con un computer.

::: prova Scrivi $(1\ 4)(2\ 6\ 3)$ come composizione di scambi. Quanti sono?
$(1\ 4)(2\ 3)(2\ 6)$: tre scambi. Il primo ciclo è già uno scambio; il secondo, di lunghezza 3, ne richiede 2.
:::

> [!RICORDA]
> - Ogni permutazione = cicli disgiunti = scambi, ciclo per ciclo.
> - La scrittura con gli scambi non è unica, e gli scambi non commutano.

## La parità non dipende dalla scrittura (teorema 5.16)

Negli esempi qui sopra il numero di scambi cambia, ma cambia sempre **di 2**: $(1\ 3)$ con 1 scambio o con 3; $(a\ b\ c)$ con 2 scambi in tutte e due le scritture. Non è un caso.

> [!TEOREMA] Teorema 5.16
> Ogni due scritture di una permutazione $\pi \in S_n$ come composizione di scambi hanno la stessa **parità**: i numeri di scambi sono tutti e due pari o tutti e due dispari.

**Come si legge.** Se una permutazione si scrive con 5 scambi, ogni altra sua scrittura ne usa un numero dispari: 3, 7, 11, mai 4 o 6. Il numero di scambi non è fissato, la sua parità sì.

L'idea della dimostrazione, che nel libro è per assurdo, ha due passi.

1. **Ridursi all'identità.** Se $\pi$ si scrivesse con $j$ scambi e con $k$ scambi, con $j$ pari e $k$ dispari, componendo l'inversa della prima scrittura con la seconda si otterrebbe l'identità come composizione di $j + k$ scambi, un numero dispari.
2. **L'identità non si scrive con un numero dispari di scambi.** Si prende una scrittura qualsiasi dell'identità e la si semplifica con due regole: $(a\ b)(a\ c) = (a\ c)(b\ c)$, che sposta gli scambi senza cambiarne il numero, e $(a\ b)(a\ b) = \mathrm{id}$, che ne toglie due. Alla fine non resta nessuno scambio, e ogni volta se ne sono tolti due: il numero di partenza era pari.

> [!DIM] La dimostrazione del libro, passo per passo (pp. 97–99)
> **Passo 1.** Se $\pi = s_1 s_2 \cdots s_j = s'_1 s'_2 \cdots s'_k$, allora $\pi^{-1} = s_j \cdots s_2 s_1$: l'inversa di un prodotto è il prodotto delle inverse in ordine inverso, e ogni scambio è l'inverso di sé stesso. Quindi $\mathrm{id} = \pi^{-1} \circ \pi = (s_j \cdots s_1)(s'_1 \cdots s'_k)$, con $j + k$ scambi.
>
> **Passo 2.** Sia $\mathrm{id} = s_1 \cdots s_m$. Un numero $i$ non può comparire in un solo scambio: se ci fosse un solo $(i\ x)$, la composizione manderebbe $i$ in $x$ e non sarebbe l'identità. Si guarda l'1. Gli scambi che lo contengono si avvicinano spostandoli verso destra: con uno scambio disgiunto si commuta, e $(a\ 1)(a\ c)$ si sostituisce con $(a\ c)(1\ c)$. Quando gli scambi con l'1 sono vicini, un segmento $(1\ b)(1\ c)$ con $b \ne c$ diventa $(1\ c)(b\ c)$, e gli scambi con l'1 scendono di uno; un segmento $(1\ b)(1\ b)$ si cancella, e il totale scende di due. Siccome non può restare un solo scambio con l'1, prima o poi l'1 sparisce. Poi si fa lo stesso con il 2, il 3, e così via fino a $n$, senza reintrodurre i numeri già eliminati. Alla fine non resta niente, e il totale è sceso solo di due alla volta: $m$ è pari.
>
> **Conclusione.** $j + k$ dovrebbe essere dispari (passo 1) e pari (passo 2): contraddizione.
>
> A p. 98 il libro ha un piccolo refuso: «della forma della forma $(i\ x)$».

::: prova Con il teorema, $(1\ 3)$ si può scrivere con 4 scambi?
No: si scrive con 1 scambio, quindi ogni sua scrittura ne usa un numero dispari.
:::

> [!RICORDA]
> - Le scritture con gli scambi cambiano, ma il numero di scambi resta sempre pari o sempre dispari.

## Permutazioni pari e dispari (definizione 5.17, proposizione 5.18)

Il teorema permette di dare un nome alle due famiglie.

> [!DEF] Parità (definizione 5.17)
> Una permutazione $\pi \in S_n$ è **pari** se si scrive come composizione di un numero pari di scambi, **dispari** se si scrive con un numero dispari di scambi.

**Come si legge.** Il teorema 5.16 garantisce che la definizione ha senso: una permutazione non può essere pari e dispari insieme. L'identità è pari: si scrive con zero scambi, oppure come $(1\ 2)(1\ 2)$.

Per i cicli la parità viene subito dalla proposizione 5.13: un ciclo di lunghezza $\ell$ si scrive con $\ell - 1$ scambi.

> [!PROP] Proposizione 5.18
> Un ciclo di lunghezza $\ell$ è **pari** se $\ell$ è dispari, **dispari** se $\ell$ è pari.

**Come si legge.** Si guarda la lunghezza meno uno: un ciclo di lunghezza 3 costa 2 scambi, quindi è pari; uno di lunghezza 4 ne costa 3, quindi è dispari.

| Ciclo | Lunghezza | Scambi | Parità |
|---|---|---|---|
| $(2\ 5)$ | 2 | 1 | dispari |
| $(1\ 4\ 6)$ | 3 | 2 | pari |
| $(1\ 2\ 3\ 4)$ | 4 | 3 | dispari |
| $(1\ 2\ 3\ 4\ 5)$ | 5 | 4 | pari |

> [!TRAPPOLA] Lunghezza e parità sono al contrario
> Un ciclo di lunghezza 3 è **pari**, uno di lunghezza 4 è **dispari**. Conta il numero di scambi, $\ell - 1$, non la lunghezza.

::: prova $(3\ 8\ 1\ 6\ 2\ 7)$ è pari o dispari?
Lunghezza 6, quindi 5 scambi: dispari.
:::

> [!RICORDA]
> - Pari = numero pari di scambi. Un ciclo di lunghezza $\ell$ ha la parità di $\ell - 1$.

## La parità di un prodotto (proposizione 5.19)

Due permutazioni fatte una dopo l'altra si comportano come due numeri sommati: pari più pari fa pari, dispari più dispari fa pari, pari più dispari fa dispari. Il motivo: se $\pi$ si scrive con $j$ scambi e $\sigma$ con $k$, la composizione $\sigma \circ \pi$ si scrive mettendo le due scritture una dopo l'altra, con $j + k$ scambi.

> [!PROP] Proposizione 5.19
> La composizione $\sigma \circ \pi$ è **pari** se $\pi$ e $\sigma$ hanno la stessa parità, **dispari** se hanno parità diverse.

**Come si legge.** Si pensa a «pari» come 0 e a «dispari» come 1, e si sommano: 0 + 0 e 1 + 1 danno un numero pari, 0 + 1 un numero dispari.

| $\circ$ | pari | dispari |
|---|---|---|
| **pari** | pari | dispari |
| **dispari** | dispari | pari |

Con più fattori si conta: un prodotto è pari se il numero di fattori dispari è pari. Per le potenze, $\sigma^k$ è un prodotto di $k$ copie di $\sigma$: se $\sigma$ è pari, tutte le sue potenze sono pari; se $\sigma$ è dispari, $\sigma^k$ ha la parità di $k$. E l'inversa ha la stessa parità, perché $\sigma^{-1}$ si scrive con gli stessi scambi in ordine inverso.

> [!ESEMPIO] · Appello del 10/09/2026, quiz, domanda 5 (prima versione)
> «Siano $\tau$ una permutazione pari e $\sigma$ una permutazione dispari. Dire quale delle seguenti affermazioni è vera. 1. $\tau \circ \sigma^4$ è dispari. 2. $\tau^5 \circ \sigma^3$ è pari. 3. $\sigma \circ \tau \circ \sigma \circ \tau^2$ è dispari. 4. $\sigma^3 \circ \tau \circ \sigma^2$ è pari. 5. $\sigma \circ \tau^3 \circ \sigma$ è pari.»
>
> **Soluzione.** Conto le $\sigma$, le uniche dispari: nella 1 sono 4 (pari, non dispari); nella 2 sono 3 (dispari, non pari); nella 3 sono 2 (pari, non dispari); nella 4 sono 5 (dispari, non pari); nella 5 sono 2: **pari**. La risposta è la 5, come nella soluzione ufficiale.

::: prova $\pi$ e $\sigma$ sono dispari, $\tau$ è pari. Di che parità è $\tau^3 \circ \pi \circ \sigma^2$?
Le permutazioni dispari nel prodotto sono una $\pi$ e due $\sigma$: tre, un numero dispari. Quindi dispari. È la risposta giusta della domanda 6 del quiz del 13/01/2026.
:::

> [!RICORDA]
> - Prodotto: si contano i fattori dispari. Pari tanti, pari; dispari tanti, dispari.
> - $\sigma^{-1}$ ha la parità di $\sigma$; $\sigma^k$ di una dispari ha la parità di $k$.

## La parità dal tipo (proposizione 5.20, nota 5.21)

Mettendo insieme le due proposizioni, la parità si legge dai cicli disgiunti, cioè dal tipo, senza scrivere gli scambi.

> [!PROP] Proposizione 5.20
> Sia $\pi$ di tipo $(\ell_1, \ell_2, \dots, \ell_r)$ e sia $p = (\ell_1 - 1) + (\ell_2 - 1) + \dots + (\ell_r - 1)$. Allora $\pi$ è pari se e solo se $p$ è pari.

**Come si legge.** Ogni ciclo di lunghezza $\ell_i$ costa $\ell_i - 1$ scambi, e $p$ è il totale. In pratica basta contare i cicli di lunghezza **pari**: sono loro i fattori dispari. La permutazione è pari se i cicli di lunghezza pari sono in numero pari.

> [!ESEMPIO] · L'esempio del libro (p. 100)
> $(1\ 4\ 9)(2\ 11\ 5\ 7\ 3)(8\ 12)(6\ 10\ 13) \in S_{13}$ ha tipo $(5, 3, 3, 2)$. Allora $p = 4 + 2 + 2 + 1 = 9$, dispari: la permutazione è **dispari**. Con la scorciatoia: c'è un solo ciclo di lunghezza pari, lo scambio $(8\ 12)$.

La nota 5.21 aggiunge una comodità: la proposizione 5.19 vale per qualsiasi prodotto di cicli, anche **non disgiunti**. Quindi per la parità non serve nemmeno la scrittura in cicli disgiunti.

> [!ESEMPIO] · Cicli non disgiunti (nota 5.21)
> $(2\ 4\ 7)(1\ 4\ 5\ 8\ 2)(5\ 2\ 7\ 6)(6\ 9\ 4\ 8\ 1\ 5) \in S_9$ ha cicli di lunghezze 3, 5, 4 e 6: due pari (quelli di lunghezza 3 e 5) e due dispari (quelli di lunghezza 4 e 6). Due fattori dispari: la permutazione è **pari**. Con un programma ho calcolato i cicli disgiunti: è $(5\ 8\ 7\ 6\ 9)$, un ciclo di lunghezza 5, pari, come previsto.

```grafico
titolo: Due strade per la parità di σ = (1 3)(2 4 3)(3 5 1), del problema del 14/01/2025. In alto: si contano gli scambi dei cicli così come sono scritti, 1 + 2 + 2 = 5. In basso: si passa ai cicli disgiunti (1 2 4)(3 5) e si conta 2 + 1 = 3. Tutte e due danno un numero dispari
x: 0 12.4
y: 0 4.6
assi: no
griglia: no
proporzioni: libere
poligono: 0.3 2.6 12.1 2.6 12.1 4.3 0.3 4.3 | blu
testo: 6.2 3.85 | blu | "(1 3) · (2 4 3) · (3 5 1)"
testo: 6.2 3.05 | grigio | "scambi: 1 + 2 + 2 = 5, dispari"
poligono: 0.3 0.3 12.1 0.3 12.1 2.0 0.3 2.0 | verde
testo: 6.2 1.55 | verde | "(1 2 4) · (3 5)"
testo: 6.2 0.75 | grigio | "scambi: 2 + 1 = 3, dispari"
```

::: prova Una permutazione ha tipo $(6, 4, 2)$. È pari o dispari?
Tre cicli di lunghezza pari, quindi tre fattori dispari: **dispari**. Con la formula, $p = 5 + 3 + 1 = 9$. È la domanda 5 del quiz del 14/01/2025, in una delle versioni: dispari, con periodo 12.
:::

> [!RICORDA]
> - Dal tipo: conta i cicli di lunghezza pari. Se sono in numero pari, la permutazione è pari.
> - Per la parità vanno bene anche cicli non disgiunti.

## Quante sono le permutazioni pari (proposizione 5.22)

Con tre numeri ci sono 6 permutazioni. Pari: l'identità, $(1\ 2\ 3)$ e $(1\ 3\ 2)$. Dispari: i tre scambi $(1\ 2)$, $(1\ 3)$, $(2\ 3)$. Metà e metà, e non è un caso.

> [!PROP] Proposizione 5.22
> Per $n \ge 2$, in $S_n$ ci sono $\frac{n!}{2}$ permutazioni pari e $\frac{n!}{2}$ permutazioni dispari.

**Come si legge.** L'idea della dimostrazione: si fissa uno scambio $s$, per esempio $(1\ 2)$. Comporre con $s$ aggiunge uno scambio e cambia la parità, quindi manda le pari nelle dispari e le dispari nelle pari. Facendolo due volte si torna indietro, perché $s \circ s = \mathrm{id}$. Allora «comporre con $s$» è una biiezione tra le pari e le dispari ([D05](D05_composizione_funzioni_inverse.html)), e le due famiglie hanno lo stesso numero di elementi. Insieme fanno tutte le $n!$ permutazioni: metà ciascuna.

Per $n = 1$ c'è solo l'identità, pari: l'enunciato vale da $n = 2$ in su. Ho controllato con un programma che in $S_2, \dots, S_6$ le pari sono esattamente la metà.

::: prova Quante sono le permutazioni dispari in $S_5$?
$\frac{5!}{2} = 60$.
:::

> [!RICORDA]
> - In $S_n$, con $n \ge 2$: $\frac{n!}{2}$ pari e $\frac{n!}{2}$ dispari.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $(a\ b)$ | «lo scambio di a e b» | ciclo di lunghezza 2 | $(1\ 3)$ |
| $s_1 s_2 \cdots s_t$ | «composizione di scambi» | si applica per primo $s_t$, a destra | $(1\ 2)(2\ 3)$ |
| $\mathrm{id}$ | «identità» | la permutazione che non muove niente; è pari | $(1\ 2)(1\ 2) = \mathrm{id}$ |
| $p = \sum (\ell_i - 1)$ | «somma delle lunghezze meno uno» | numero di scambi letto dal tipo | tipo $(5, 3, 3, 2)$: $p = 9$ |
| $\binom{n}{2}$ | «n su 2» | numero degli scambi di $S_n$ | 6 in $S_4$ |
| $\frac{n!}{2}$ | «n fattoriale mezzi» | numero delle pari, e delle dispari | 60 in $S_5$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Le regole del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **La domanda 5 o 6 del quiz**: la parità di un prodotto di permutazioni pari e dispari (13/01/2026, 10/09/2026), oppure parità e periodo dato il tipo (14/01/2025).
2. **Il problema sulle permutazioni**: dopo i cicli disgiunti chiede quasi sempre «tipo, periodo e parità» (14/01/2025, 25/01/2022, 2023/24, 01/07/2026).
3. **Il conto giusto**: si contano i cicli di lunghezza pari, non i cicli di lunghezza dispari.

### Una domanda vera, letta insieme

**Appello del 14/01/2025, problema 1, versione A, punto a.** Il testo: «Si considerino le due permutazioni in $S_6$ $\sigma = (1\ 3)(2\ 4\ 3)(3\ 5\ 1)$ e $\tau$, che manda 1, 2, 3, 4, 5, 6 in 3, 1, 4, 2, 6, 5. Scrivere $\sigma$ e $\tau$ come prodotti di cicli disgiunti, calcolarne il tipo, il periodo e la parità.»

**In pratica chiede:** i cicli disgiunti come nella D11, il tipo e il periodo della D12, e la parità di questa lezione.

> [!ESEMPIO] · la soluzione, passo per passo
> **Passo 1: $\sigma$ in cicli disgiunti.** Da destra: l'1 va nel 3 con $(3\ 5\ 1)$, il 3 va nel 2 con $(2\ 4\ 3)$, il 2 resta 2 con $(1\ 3)$: $1 \mapsto 2$. Continuando, $2 \mapsto 4$, $4 \mapsto 1$, poi $3 \mapsto 5$ e $5 \mapsto 3$. Quindi $\sigma = (1\ 2\ 4)(3\ 5)$.
>
> **Passo 2: tipo, periodo, parità di $\sigma$.** Tipo $(3, 2)$, periodo $\mathrm{mcm}(3, 2) = 6$. Un solo ciclo di lunghezza pari, lo scambio: **dispari**. Controllo con i cicli di partenza: $1 + 2 + 2 = 5$ scambi, dispari.
>
> **Passo 3: $\tau$.** $1 \mapsto 3 \mapsto 4 \mapsto 2 \mapsto 1$ e $5 \mapsto 6 \mapsto 5$: $\tau = (1\ 3\ 4\ 2)(5\ 6)$. Tipo $(4, 2)$, periodo 4. Due cicli di lunghezza pari: **pari**.
>
> Sono i risultati della soluzione ufficiale, e li ho ricontrollati con un programma.

### Un'altra domanda vera

> [!ESEMPIO] · Appello del 25–26/01/2022, problema 1, punto 1
> «Si consideri la permutazione $\pi = (2\ 9\ 1\ 3\ 5\ 6)(4\ 8\ 7)(1\ 4\ 3\ 8\ 6) \in S_9$. Calcolare il periodo e determinare la parità di $\pi$.»
>
> **La parità, subito.** I cicli scritti hanno lunghezze 6, 3 e 5: uno solo di lunghezza pari. Quindi $\pi$ è **dispari**, senza calcolare i cicli disgiunti (nota 5.21).
>
> **Il periodo** invece richiede i cicli disgiunti: $\pi = (1\ 8\ 2\ 9)(3\ 7\ 4\ 5\ 6)$, tipo $(5, 4)$, periodo 20. Controllo della parità: $4 + 3 = 7$, dispari.

### Errori da evitare

- Dire che un ciclo di lunghezza 3 è dispari: è **pari**, perché sono 2 scambi.
- Contare i cicli di lunghezza dispari invece di quelli di lunghezza pari.
- Dimenticare che l'identità è pari, e che i punti fissi non contano.
- Pensare che serva sempre la scrittura in cicli disgiunti: per la parità no, per tipo e periodo sì.

## Quiz

```quiz
D: Appello del 14/01/2025, quiz versione 1, domanda 5. Una permutazione $\pi$ ha tipo $(4, 4, 3)$. Allora $\pi$:
+ è pari ed ha periodo 12
- è dispari ed ha periodo 12
- è pari ed ha periodo 8
- è pari ed ha periodo 4
- è dispari ed ha periodo 10
= Due cicli di lunghezza pari: pari ($p = 3 + 3 + 2 = 8$). Periodo $\mathrm{mcm}(4, 4, 3) = 12$. È la risposta 1 della soluzione ufficiale. La più insidiosa è «dispari ed ha periodo 12», di chi conta i cicli di lunghezza dispari.

D: Appello del 14/01/2025, quiz, un'altra versione della domanda 5. Una permutazione $\pi$ ha tipo $(8, 3, 2)$. Allora $\pi$:
+ è pari ed ha periodo 24
- è pari ed ha periodo 8
- è dispari ed ha periodo 8
- è pari ed ha periodo 48
- è dispari ed ha periodo 24
= Cicli di lunghezza pari: 8 e 2, due, quindi pari ($p = 7 + 2 + 1 = 10$). Periodo $\mathrm{mcm}(8, 3, 2) = 24$. È la risposta giusta della soluzione ufficiale. La più insidiosa è il periodo 48, il prodotto invece del mcm.

D: Appello del 13/01/2026, quiz, domanda 6. Siano $\pi$ e $\sigma$ permutazioni pari e $\tau$ una permutazione dispari. Quale delle seguenti è una permutazione pari?
+ $\pi^2 \circ \sigma^3 \circ \tau^4$
- $\sigma^3 \circ \tau^3 \circ \sigma^2$
- $\tau^4 \circ \pi^5 \circ \tau$
- $\pi \circ \sigma \circ \tau^5$
- $\sigma \circ \tau^5 \circ \pi^3$
= Si contano le $\tau$, le uniche dispari: 4 nella prima (pari), 3, 5, 5 e 5 nelle altre (dispari). È la risposta giusta della soluzione ufficiale. La più insidiosa è la terza: $\tau^4$ è pari, ma c'è un'altra $\tau$ a destra.

D: Quanti scambi servono per scrivere il ciclo $(2\ 7\ 5\ 1\ 9)$ con la proposizione 5.13?
+ 4
- 5
- 2
- 10
- dipende dalla scrittura, quindi non si può dire
= Un ciclo di lunghezza $\ell$ si scrive con $\ell - 1$ scambi: $(2\ 9)(2\ 1)(2\ 5)(2\ 7)$. La più insidiosa è l'ultima: altre scritture possono usare più scambi (6, 8…), ma la proposizione ne usa 4, e il numero resta comunque pari.

D: Quale delle seguenti è una permutazione **pari**?
+ $(1\ 2\ 3)(4\ 5\ 6\ 7\ 8)$
- $(1\ 2)$
- $(1\ 2\ 3\ 4)$
- $(1\ 2\ 3)(4\ 5)$
- $(1\ 2\ 3\ 4\ 5\ 6)$
= Lunghezze 3 e 5, nessun ciclo di lunghezza pari: $p = 2 + 4 = 6$, pari. Le altre hanno un ciclo di lunghezza pari ciascuna. La più insidiosa è la terza: lunghezza 4, ma 3 scambi.

D: Quante sono le permutazioni pari in $S_4$?
N: 12
= $\frac{4!}{2} = 12$ (proposizione 5.22).

D: $(1\ 3)$ si scrive anche come $(1\ 2)(2\ 3)(1\ 2)$. Che cosa dice questo esempio?
+ che la scrittura con gli scambi non è unica, ma il numero di scambi ha sempre la stessa parità
- che uno scambio è pari
- che gli scambi commutano
- che il teorema 5.16 è falso
- che $(1\ 3)$ ha periodo 3
= 1 scambio e 3 scambi: numeri diversi, ma tutti e due dispari. La più insidiosa è la terza: proprio perché gli scambi non commutano, $(1\ 2)$ non si può semplificare con l'altro $(1\ 2)$.

D: Una permutazione dispari $\sigma$ ha periodo 8. Di che parità è $\sigma^{-3}$?
+ dispari
- pari
- dipende da $\sigma$
- non è definita, perché l'esponente è negativo
- è l'identità
= $\sigma^{-1}$ ha la parità di $\sigma$, e il cubo di una dispari è dispari. Con il periodo: $\sigma^{-3} = \sigma^5$, potenza dispari di una dispari. La più insidiosa è «non è definita»: l'inversa di una permutazione esiste sempre.
```

## Esercizi

::: esercizio base Riscaldamento: pari o dispari?
(a) $(1\ 5)$; (b) $(2\ 4\ 6)$; (c) $(1\ 2)(3\ 4)$; (d) $(1\ 2\ 3\ 4)(5\ 6)$; (e) l'identità di $S_7$.
::: soluzione
(a) dispari, 1 scambio. (b) pari, 2. (c) pari, 2. (d) pari: due cicli di lunghezza pari, $3 + 1 = 4$ scambi. (e) pari, 0 scambi.
:::

::: esercizio base Riscaldamento: da ciclo a scambi
Scrivi come composizione di scambi $(1\ 6\ 3\ 4)$ e $(2\ 5\ 7)(1\ 8)$, e verifica il primo seguendo l'1 e il 4.
::: soluzione
$(1\ 6\ 3\ 4) = (1\ 4)(1\ 3)(1\ 6)$. L'1, da destra: $(1\ 6)$ lo manda nel 6, gli altri due non toccano il 6: $1 \mapsto 6$. Il 4: entra solo in $(1\ 4)$, che lo manda nell'1: $4 \mapsto 1$. Il secondo: $(2\ 7)(2\ 5)(1\ 8)$.
:::

::: esercizio medio Problemi 2023/24, problema 1, versione A, punto a
In $S_{10}$ si consideri $\sigma = (1\ 3\ 5\ 7\ 9)(1\ 2\ 3\ 4)$. Scrivere $\sigma$ come prodotto di cicli disgiunti, determinarne il tipo, il periodo e la parità.
::: soluzione
Da destra: $1 \mapsto 2$, $2 \mapsto 3 \mapsto 5$, $5 \mapsto 7$, $7 \mapsto 9$, $9 \mapsto 1$; poi $3 \mapsto 4$, $4 \mapsto 1 \mapsto 3$. Quindi $\sigma = (1\ 2\ 5\ 7\ 9)(3\ 4)$, tipo $(5, 2)$, periodo 10, **dispari** (un ciclo di lunghezza pari). Anche dai cicli scritti: lunghezze 5 e 4, un solo ciclo di lunghezza pari. Controllato con un programma.
:::

::: esercizio medio Esame 2019 (riepilogo), esercizio 2, punto 1
Sia $\sigma = (1\ 3)(7\ 5\ 1)(4\ 7)(1\ 5\ 7)(3\ 1\ 2\ 9)(1\ 3)(6\ 7\ 8) \in S_9$. Calcolarne la decomposizione in cicli disgiunti, il tipo, la parità e il periodo.
::: soluzione
**Parità, subito.** Lunghezze 2, 3, 2, 3, 4, 2, 3: i cicli di lunghezza pari sono 4, quindi $\sigma$ è **pari**. **Cicli disgiunti**, seguendo ogni numero da destra: $\sigma = (1\ 3\ 2\ 9)(4\ 5)(6\ 7\ 8)$, tipo $(4, 3, 2)$, periodo 12. Controllo: $3 + 2 + 1 = 6$, pari. Controllato con un programma.
:::

::: esercizio esame Appello del 01/07/2026, problema 1, versione A, punto a (la parità)
Sia $\sigma = (1\ 3\ 5)(1\ 2\ 4)(1\ 6\ 7\ 8) \in S_8$. Le sue potenze $\sigma^0, \dots, \sigma^7$ sono già nella [D12](D12_tipo_periodo_permutazioni.html). Determina la parità di ognuna, senza riscrivere gli scambi.
::: soluzione
$\sigma = (1\ 6\ 7\ 8\ 2\ 4\ 3\ 5)$ è un ciclo di lunghezza 8: **dispari**. Allora $\sigma^k$ ha la parità di $k$: pari per $k = 0, 2, 4, 6$ e dispari per $k = 1, 3, 5, 7$. Controllo sui tipi: $\sigma^2$ e $\sigma^6$ hanno tipo $(4, 4)$, due cicli di lunghezza pari, pari; $\sigma^4$ ha tipo $(2, 2, 2, 2)$, pari; le potenze dispari sono cicli di lunghezza 8, dispari. È la tabella della soluzione ufficiale.
:::

::: esercizio difficile Esame 2018 (riepilogo), esercizio 2, punto b
In $S_9$ siano $\alpha = (3\ 7\ 6\ 9\ 5)(2\ 8\ 4)$ e $\beta = (1\ 3\ 7\ 9\ 8\ 4)^2$. Calcolare la parità di $\alpha$, di $\beta$ e di $\alpha^3 \circ \beta^{-1}$.
::: soluzione
$\alpha$: lunghezze 5 e 3, nessun ciclo di lunghezza pari: **pari**. $\beta$ è il quadrato di un ciclo: qualunque permutazione al quadrato è pari, perché ha due fattori della stessa parità. Infatti $\beta = (1\ 7\ 8)(3\ 9\ 4)$, due cicli di lunghezza 3: **pari**. Allora $\alpha^3 \circ \beta^{-1}$ è prodotto di pari: **pari**. Controllato con un programma: è il ciclo $(1\ 8\ 5\ 6\ 3\ 4\ 7)$, di lunghezza 7.
:::

## Domande di ripasso

::: domanda Quanti scambi servono per un ciclo di lunghezza $\ell$, e come si scrivono?
$\ell - 1$, tutti con il primo numero: $(m_1\ m_\ell) \cdots (m_1\ m_3)(m_1\ m_2)$.
:::

::: domanda La scrittura di una permutazione con gli scambi è unica? Che cosa resta uguale?
No: cambiano gli scambi e il loro numero. Resta uguale la parità del numero di scambi (teorema 5.16).
:::

::: domanda Perché un ciclo di lunghezza 5 è pari?
Perché si scrive con 4 scambi.
:::

::: domanda Come si legge la parità dal tipo?
Si contano i cicli di lunghezza pari: se sono in numero pari, la permutazione è pari. Equivale a guardare se $p = \sum (\ell_i - 1)$ è pari.
:::

::: domanda Perché in $S_n$ le pari sono metà?
Perché comporre con uno scambio fisso è una biiezione tra pari e dispari, quindi le due famiglie hanno lo stesso numero di elementi.
:::

## Glossario

```glossario
Scambio | Ciclo di lunghezza 2, che scambia due numeri e lascia fermi gli altri; detto anche trasposizione.
Composizione di scambi | Scrittura di una permutazione come prodotto di scambi, letto da destra.
Parità | Il fatto che una permutazione si scriva con un numero pari o dispari di scambi.
Permutazione pari | Composizione di un numero pari di scambi; l'identità è pari.
Permutazione dispari | Composizione di un numero dispari di scambi.
Generatori | Insieme di permutazioni da cui, componendo, si ottengono tutte le altre: gli scambi generano Sn.
```

## Checklist

```checklist
- So scrivere un ciclo come composizione di scambi e verificarlo seguendo i numeri.
- So scrivere una permutazione qualsiasi come composizione di scambi.
- So spiegare perché la scrittura con gli scambi non è unica.
- So che cosa dice il teorema 5.16 e qual è l'idea della dimostrazione.
- So la parità di un ciclo dalla sua lunghezza.
- So la parità di un prodotto e di una potenza.
- So leggere la parità dal tipo, e anche da cicli non disgiunti.
- So quante sono le permutazioni pari in Sn.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta* (testo del canale B), cap. 5 «Permutazioni», sezione «Scambi e parità», pp. 95–101: proposizione 5.13, teorema 5.14, nota 5.15, teorema 5.16 con la dimostrazione, definizione 5.17, proposizioni 5.18, 5.19, 5.20, nota 5.21 con i due esempi, proposizione 5.22. Refuso a p. 98 («della forma della forma»).
- Diario delle lezioni di Matematica Discreta del canale B 2025/26 (Mori), lezione 13: «Ogni ciclo è composizione di scambi. Ogni permutazione è composizione di scambi. Mancanza di unicità nella scrittura di una permutazione come composizione di scambi. Concetto di parità di una permutazione. La parità di una permutazione è ben definita. Esempi».
- Appelli di Matematica Discreta (Moodle MDAG1 2025/26, aperto agli ospiti), con le soluzioni ufficiali: quiz del 14/01/2025 (domanda 5), del 13/01/2026 (domanda 6) e del 10/09/2026 (domanda 5); problemi del 25–26/01/2022, del 14/01/2025, dei problemi 2023/24 (versione A) e del 01/07/2026; esercizi di riepilogo 2018 e 2019.
- Gli esempi $(1\ 5\ 2)(3\ 4\ 6\ 7)$, $(1\ 3) = (1\ 2)(2\ 3)(1\ 2)$, il ragionamento sulle potenze, i quiz senza data e gli esercizi di riscaldamento sono di questi appunti. Tutti i cicli disgiunti, i tipi, i periodi e le parità li ho controllati con un programma.
