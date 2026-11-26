---
corso: MDAG
modulo: MD
lezione: D20
titolo: Sottogruppi
data: 2026-11-25
docenti: Andrea Mori, Ignazio Longhi e Lea Terracini
sopratitolo: Parte 1 (modA) · Matematica Discreta · Canali A, B e C · Lezione D20
descrizione: >-
  Appunti della lezione D20 di Matematica Discreta (MDAG, parte 1, canali A, B e C): sottogruppi, i tre controlli
  (chiusura, neutro, inversi), gli esempi principali, i multipli di un intero, il criterio con un controllo solo,
  l'intersezione e l'unione di sottogruppi, con i problemi d'esame del 04/02/2025, del 13/01/2026 e del 01/07/2026.
lede: >-
  Dentro un gruppo ci sono spesso gruppi più piccoli: i pari dentro gli interi, le permutazioni pari dentro tutte
  le permutazioni. Per riconoscerli bastano tre controlli, e all'esame la domanda «è un sottogruppo?» si chiude
  quasi sempre con uno solo che fallisce.
materiale: libro
scheda:
  Libro: A. Mori, Lezioni di Matematica Discreta, cap. 6, pp. 111–114
  Docenti: Andrea Mori (canale B), Ignazio Longhi e Lea Terracini (canali A e C) · A.A. 2026/27
  Tempo di studio: 1 ora e mezza
fonte: >-
  A. Mori, Lezioni di Matematica Discreta (testo del canale B), cap. 6 «Gruppi», sezione «Sottogruppi», pp. 111–114
  (definizione 6.8, nota 6.9, esempi, proposizioni 6.10 e 6.12, esempio dell'unione); diario delle lezioni del
  canale B 2025/26, lezione 20; appelli di Matematica Discreta del 04/02/2025, del 13/01/2026 e del 01/07/2026,
  prova scritta del 23/01/2020
appunti_html: appunti/MDAG/D20_sottogruppi.html
genera_html: true
---

## In breve

- Un **sottogruppo** di un gruppo è un suo sottoinsieme che, con la stessa operazione, è a sua volta un gruppo.
- Per controllarlo servono tre cose: il sottoinsieme è **chiuso** per l'operazione, contiene il **neutro**, contiene l'**inverso** di ogni suo elemento. L'associativa non va ricontrollata.
- Per dire che **non** è un sottogruppo basta che uno dei tre controlli fallisca, con un esempio.
- I due sottogruppi che ci sono sempre: quello fatto dal solo neutro, e tutto il gruppo.
- I **multipli di un intero** $n$ sono un sottogruppo degli interi con la somma. Si scrive $n\mathbb{Z}$.
- Il **criterio**: un sottoinsieme non vuoto è un sottogruppo quando, presi due suoi elementi, il primo per l'inverso del secondo sta ancora dentro.
- L'**intersezione** di due sottogruppi è un sottogruppo. L'**unione** di solito no.

> [!CANALI]
> Matematica Discreta ha **lo stesso programma e la stessa prova d'esame** nei canali A, B e C: questi appunti valgono per tutti e tre. Nel canale B è la lezione di mercoledì 25/11/2026, dalle 11 alle 13, con Andrea Mori. Gli argomenti di questa lezione non li ho: li ho ricostruiti dal diario dell'anno scorso, in cui la ventesima lezione era sui sottogruppi, con il criterio, l'intersezione e l'unione. Quando il docente pubblica gli argomenti, controllo e aggiorno.
>
> **Dove sta nel libro.** Capitolo 6, sezione «Sottogruppi», pp. 111–114. Il teorema che descrive tutti i sottogruppi degli interi (teorema 6.11, p. 113) lo lascio alla prossima lezione, insieme ai laterali e al teorema di Lagrange: qui dei multipli di un intero uso solo il fatto che sono un sottogruppo.
>
> **Rispetto al libro.** Tra gli esempi uso anche le classi resto della [D17](D17_congruenze_classi_resto.html) e della [D18](D18_invertibili_divisori_zero_eulero.html), che il libro a questo punto non ha ancora. La nota sui gruppi finiti alla fine della sezione sul criterio è un'aggiunta mia.

## Un gruppo dentro un gruppo

Gli interi con la somma sono un gruppo ([D19](D19_operazioni_gruppi.html)). Guarda solo i numeri pari: la somma di due pari è pari, lo 0 è pari, l'opposto di un pari è pari. Restando tra i pari si può sommare e tornare indietro senza mai uscire: i pari, da soli, sono un gruppo con la stessa somma.

Con i dispari non funziona. La somma di due dispari è pari, quindi sommando si esce subito; e lo 0, che è il neutro, non è dispari.

```grafico
titolo: Gli interi da −6 a 6. I pari, in verde, formano un sottogruppo: sommando due verdi si arriva su un verde, lo 0 è verde e l'opposto di un verde è verde. I dispari, in grigio, no: 1 più 3 fa 4, che è verde
x: -7 7
y: 0 3.2
assi: no
griglia: no
proporzioni: libere
segmento: -6.6 1.5 6.6 1.5 | grigio | sottile
punto: -6 1.5 | verde
punto: -4 1.5 | verde
punto: -2 1.5 | verde
punto: 0 1.5 | verde
punto: 2 1.5 | verde
punto: 4 1.5 | verde
punto: 6 1.5 | verde
punto: -5 1.5 | grigio
punto: -3 1.5 | grigio
punto: -1 1.5 | grigio
punto: 1 1.5 | grigio
punto: 3 1.5 | grigio
punto: 5 1.5 | grigio
testo: -6 0.9 | verde | "−6"
testo: -4 0.9 | verde | "−4"
testo: -2 0.9 | verde | "−2"
testo: 0 0.9 | verde | "0"
testo: 2 0.9 | verde | "2"
testo: 4 0.9 | verde | "4"
testo: 6 0.9 | verde | "6"
testo: -5 0.9 | grigio | "−5"
testo: -3 0.9 | grigio | "−3"
testo: -1 0.9 | grigio | "−1"
testo: 1 0.9 | grigio | "1"
testo: 3 0.9 | grigio | "3"
testo: 5 0.9 | grigio | "5"
testo: -3.3 2.6 | verde | "2 + 4 = 6"
testo: 3.3 2.6 | verde | "4 − 6 = −2"
```

> [!DEF] Sottogruppo (libro, definizione 6.8)
> Sia $(G, *)$ un gruppo. Un **sottogruppo** di $G$ è un sottoinsieme $H$ di $G$ che è anch'esso un gruppo **con la stessa operazione** $*$. Si scrive $H < G$.

**Come si legge.** $H < G$ si legge «H è un sottogruppo di G». Le parole che contano sono «con la stessa operazione»: non basta che $H$ sia un gruppo per conto suo, deve esserlo con l'operazione che eredita da $G$. I pari sono un sottogruppo di $(\mathbb{Z}, +)$ perché li sommo con la stessa somma degli interi.

Il simbolo $<$ qui non confronta numeri: è lo stesso segno, usato per dire «sta dentro, come gruppo».

::: prova I multipli di 5 sono un sottogruppo di $(\mathbb{Z}, +)$? E i numeri naturali?
I multipli di 5 sì: la somma di due multipli di 5 è un multiplo di 5, lo 0 è un multiplo di 5, e l'opposto di un multiplo di 5 lo è. I naturali no: l'opposto di 3 è −3, che non è un naturale.
:::

> [!RICORDA]
> - Sottogruppo: un sottoinsieme che è un gruppo con la stessa operazione.
> - $H < G$ vuol dire «$H$ è un sottogruppo di $G$».

## I tre controlli

Per un sottoinsieme di un gruppo le richieste della definizione di gruppo si riducono a tre controlli, perché una è già pagata.

> [!METODO] Controllare che $H$ è un sottogruppo di $G$ (libro, p. 111)
> 1. **Chiusura**: operando due elementi di $H$ si ottiene un elemento di $H$.
> 2. **Neutro**: l'elemento neutro di $G$ sta in $H$.
> 3. **Inversi**: l'inverso di ogni elemento di $H$ sta in $H$.
>
> Per dire che $H$ **non** è un sottogruppo basta far cadere uno dei tre, con un esempio.

L'associativa non c'è tra i controlli (libro, nota 6.9). Vale per tutti gli elementi di $G$, e gli elementi di $H$ sono elementi di $G$: non può smettere di valere.

Il neutro di $H$ è per forza quello di $G$, non un altro. Per questo il controllo più rapido è spesso il secondo: se il neutro di $G$ non sta in $H$, la risposta è già no.

Gli esempi del libro, e qualche altro:

| Gruppo | Sottoinsieme | È un sottogruppo? |
|---|---|---|
| un gruppo $G$ qualunque | $\{e\}$, il solo neutro | sì, sempre |
| un gruppo $G$ qualunque | tutto $G$ | sì, sempre |
| $(\mathbb{Q}, +)$ | $\mathbb{Z}$ | sì |
| $(\mathbb{R}, +)$ | $\mathbb{Q}$ | sì |
| $\mathbb{R}^\times$, i reali non nulli con il prodotto | $\mathbb{Q}^\times$ | sì |
| $\mathbb{Q}^\times$ | $\{1, -1\}$ | sì: è $\mathbb{Z}^\times$ |
| $S_n$ | $A_n$, le permutazioni pari | sì |
| $(\mathbb{Z}, +)$ | $\mathbb{N}$ | no: mancano gli opposti |
| $(\mathbb{Z}, +)$ | i dispari | no: non è chiuso, e manca lo 0 |
| $S_n$ | le permutazioni dispari | no: manca l'identità |

I primi due il libro li chiama sottogruppi «banali»: ci sono in ogni gruppo, e le domande interessanti riguardano gli altri.

L'esempio di $A_n$ usa la [D13](D13_scambi_parita.html). La composizione di due permutazioni pari è pari; l'identità è pari, perché è composizione di zero scambi; l'inversa di una permutazione pari è pari. Tre controlli, tre sì. Il sottogruppo $A_n$ si chiama **gruppo alterno**.

> [!TRAPPOLA] Stesso insieme, operazione diversa
> $\mathbb{Q}^\times$ è un sottoinsieme di $\mathbb{Q}$, ed è un gruppo. Ma **non** è un sottogruppo di $(\mathbb{Q}, +)$: è un gruppo con il prodotto, non con la somma. Con la somma non è nemmeno chiuso, perché $1 + (-1) = 0$ esce.
>
> Lo stesso per le classi resto: $\mathbb{Z}_N^\times$ non è un sottogruppo di $(\mathbb{Z}_N, +)$. Prima di rispondere guarda sempre **quale operazione** ha il gruppo grande.

Un esempio con un gruppo finito. In $(\mathbb{Z}_{12}, +)$ prendo $H = \{\overline{0}, \overline{4}, \overline{8}\}$:

| $+$ | 0 | 4 | 8 |
|---|---|---|---|
| **0** | 0 | 4 | 8 |
| **4** | 4 | 8 | 0 |
| **8** | 8 | 0 | 4 |

Nella tabella compaiono solo 0, 4 e 8: è chiuso. Lo 0 c'è. Gli opposti di 0, 4, 8 sono 0, 8, 4: ci sono tutti. È un sottogruppo.

::: prova In $\mathbb{Z}_{10}^\times = \{\overline{1}, \overline{3}, \overline{7}, \overline{9}\}$ con il prodotto, $\{\overline{1}, \overline{9}\}$ è un sottogruppo? E $\{\overline{1}, \overline{3}\}$?
Il primo sì: $9 \cdot 9 = 81$ dà $\overline{1}$, quindi è chiuso, contiene il neutro $\overline{1}$, e $\overline{9}$ è l'inverso di sé stesso. Il secondo no: $3 \cdot 3 = 9$, e $\overline{9}$ non sta nell'insieme.
:::

> [!RICORDA]
> - Tre controlli: chiusura, neutro, inversi. L'associativa è ereditata.
> - Il neutro del sottogruppo è quello del gruppo.
> - Per dire di no basta un controllo che fallisce.
> - L'operazione è quella del gruppo grande.

## I multipli di un intero

Tra i sottogruppi degli interi con la somma i più importanti sono quelli fatti dai multipli di un numero fissato. I pari sono i multipli di 2.

Fissato un intero $n$, l'insieme dei suoi multipli si scrive $n\mathbb{Z}$:

$$n\mathbb{Z} = \{nk \mid k \in \mathbb{Z}\} = \{\dots, -2n, -n, 0, n, 2n, \dots\}$$

Per esempio $3\mathbb{Z} = \{\dots, -6, -3, 0, 3, 6, 9, \dots\}$. I tre controlli:

1. **Chiusura**: $nk_1 + nk_2 = n(k_1 + k_2)$, ancora un multiplo di $n$.
2. **Neutro**: $0 = n \cdot 0$.
3. **Inversi**: l'opposto di $nk$ è $n \cdot (-k)$.

Quindi $n\mathbb{Z}$ è un sottogruppo di $(\mathbb{Z}, +)$, per ogni $n$.

Due casi particolari: $0\mathbb{Z} = \{0\}$ e $1\mathbb{Z} = \mathbb{Z}$ sono i due sottogruppi che ci sono sempre. E $n\mathbb{Z}$ è lo stesso insieme di $(-n)\mathbb{Z}$, perché i multipli di $n$ e quelli di $-n$ sono gli stessi: basta considerare $n \ge 0$.

Ci sono altri sottogruppi di $(\mathbb{Z}, +)$, oltre a questi? No: è il teorema 6.11 del libro, argomento della prossima lezione.

::: prova Il numero 12 sta in $4\mathbb{Z}$? E in $5\mathbb{Z}$? Quale dei due insiemi $4\mathbb{Z}$ e $2\mathbb{Z}$ contiene l'altro?
$12 = 4 \cdot 3$ sta in $4\mathbb{Z}$ e non in $5\mathbb{Z}$. Ogni multiplo di 4 è pari, quindi $4\mathbb{Z}$ sta dentro $2\mathbb{Z}$; il contrario no, perché 2 non è un multiplo di 4.
:::

> [!RICORDA]
> - $n\mathbb{Z}$: i multipli di $n$. È un sottogruppo di $(\mathbb{Z}, +)$.
> - $0\mathbb{Z} = \{0\}$, $1\mathbb{Z} = \mathbb{Z}$, e $n\mathbb{Z} = (-n)\mathbb{Z}$.

## Il criterio: un controllo solo

I tre controlli si possono fondere in uno. È comodo soprattutto nelle dimostrazioni, dove gli elementi sono lettere e non numeri.

L'idea: invece di controllare a parte il prodotto e l'inverso, si controlla il «prodotto con un inverso». Con la somma degli interi è la **differenza**: i multipli di $n$ sono un sottogruppo perché la differenza di due multipli di $n$ è un multiplo di $n$.

> [!PROP] Criterio per i sottogruppi (libro, proposizione 6.10)
> Sia $(G, *)$ un gruppo e sia $H$ un suo sottoinsieme **non vuoto**. Allora $H$ è un sottogruppo di $G$ se e solo se
>
> $$h_1 * h_2^{-1} \in H \quad \text{per ogni } h_1, h_2 \in H$$

**Come si legge.** Prendi due elementi qualunque di $H$, anche uguali. Inverti il secondo e opera: il risultato deve stare in $H$. In notazione additiva la condizione è che $h_1 - h_2$ stia in $H$. La richiesta «non vuoto» non è un dettaglio: l'insieme vuoto rispetta la condizione senza fare niente, e non è un gruppo.

> [!ESEMPIO] · La dimostrazione
> **Se $H$ è un sottogruppo, la condizione vale.** $H$ contiene l'inverso di $h_2$, ed è chiuso: quindi contiene $h_1 * h_2^{-1}$.
>
> **Se la condizione vale, $H$ è un sottogruppo.** Ricavo i tre controlli, in quest'ordine.
>
> *Neutro.* $H$ non è vuoto: prendo un suo elemento $h$. Uso la condizione con $h_1 = h_2 = h$: $h * h^{-1} = e$ sta in $H$.
>
> *Inversi.* Ora so che $e$ sta in $H$. Uso la condizione con $h_1 = e$ e $h_2 = h$: $e * h^{-1} = h^{-1}$ sta in $H$.
>
> *Chiusura.* Prendo $h$ e $h'$ in $H$. So già che $h'^{-1}$ sta in $H$. Uso la condizione con $h_1 = h$ e $h_2 = h'^{-1}$: l'inverso dell'inverso è $h'$, quindi $h * h'$ sta in $H$.

L'ordine dei tre passi conta: ogni passo usa quello prima. È una dimostrazione corta che all'orale del corso e nei problemi «dimostrare che è un sottogruppo» torna utile.

Con il criterio, i multipli di $n$ si sistemano in una riga: $nk_1 - nk_2 = n(k_1 - k_2)$ è un multiplo di $n$, e l'insieme non è vuoto perché contiene 0.

> [!NOTA] Nei gruppi finiti basta la chiusura
> È un'aggiunta mia, ma le soluzioni ufficiali degli appelli la usano. Se $G$ è **finito** e $H$ è un sottoinsieme non vuoto e **chiuso**, allora $H$ è un sottogruppo. Il motivo: preso $h$ in $H$, le sue potenze $h, h^2, h^3, \dots$ stanno tutte in $H$. In un gruppo finito prima o poi una potenza $h^k$ è il neutro, come succede con il periodo di una permutazione ([D12](D12_tipo_periodo_permutazioni.html)). Allora il neutro sta in $H$, e l'inverso di $h$ è $h^{k-1}$, che sta in $H$.
>
> Nei gruppi infiniti non vale: $\mathbb{N}$ è chiuso per la somma e non è un sottogruppo di $\mathbb{Z}$.

::: prova Usa il criterio per decidere se $H = \{\overline{0}, \overline{3}, \overline{6}, \overline{9}\}$ è un sottogruppo di $(\mathbb{Z}_{12}, +)$.
$H$ è fatto dalle classi dei multipli di 3. La differenza di due multipli di 3 è un multiplo di 3, e ridotta modulo 12 resta un multiplo di 3, perché 12 lo è: per esempio $\overline{3} - \overline{9} = \overline{-6} = \overline{6}$. $H$ non è vuoto. È un sottogruppo.
:::

> [!RICORDA]
> - Criterio: $H$ non vuoto, e $h_1 * h_2^{-1}$ in $H$ per ogni coppia.
> - Con la somma: la differenza di due elementi di $H$ sta in $H$.
> - In un gruppo finito basta: non vuoto e chiuso.

## Intersezione sì, unione no

Con due sottogruppi dello stesso gruppo si possono fare le due operazioni tra insiemi della [D02](D02_complementare_induzione_partizioni.html). Si comportano in modo opposto.

Prendi i multipli di 2 e i multipli di 3, dentro gli interi. I numeri che stanno in tutti e due sono i multipli di 6: ancora un sottogruppo. I numeri che stanno in almeno uno dei due, invece, non formano un sottogruppo: 2 e 3 ci stanno, la loro somma 5 no.

```grafico
titolo: I multipli di 2, in blu, e i multipli di 3, in verde, da 0 a 12. I multipli di 6 sono di tutti e due i colori: sono l'intersezione. L'unione è fatta da tutti i punti colorati, e non è chiusa: 2 e 3 sono colorati, la loro somma 5 no
x: -1 13
y: 0 4
assi: no
griglia: no
proporzioni: libere
segmento: -0.6 1.6 12.6 1.6 | grigio | sottile
punto: 2 1.6 | blu
punto: 4 1.6 | blu
punto: 8 1.6 | blu
punto: 10 1.6 | blu
punto: 3 1.6 | verde
punto: 9 1.6 | verde
punto: 0 1.6 | ambra
punto: 6 1.6 | ambra
punto: 12 1.6 | ambra
punto: 1 1.6 | grigio
punto: 5 1.6 | rosa
punto: 7 1.6 | grigio
punto: 11 1.6 | grigio
testo: 0 1.0 | ambra | "0"
testo: 2 1.0 | blu | "2"
testo: 3 1.0 | verde | "3"
testo: 4 1.0 | blu | "4"
testo: 5 1.0 | rosa | "5"
testo: 6 1.0 | ambra | "6"
testo: 8 1.0 | blu | "8"
testo: 9 1.0 | verde | "9"
testo: 10 1.0 | blu | "10"
testo: 12 1.0 | ambra | "12"
testo: 4 3.4 | rosa | "2 + 3 = 5: fuori"
freccia: 4.6 3.0 5 1.9 | rosa
testo: 6 0.35 | ambra | "0, 6, 12: in tutti e due"
```

> [!PROP] L'intersezione di due sottogruppi (libro, proposizione 6.12)
> Sia $G$ un gruppo e siano $H_1$ e $H_2$ due suoi sottogruppi. Allora $H_1 \cap H_2$ è un sottogruppo di $G$.

**Come si legge.** Gli elementi che stanno in tutti e due i sottogruppi formano a loro volta un sottogruppo. Vale anche per tre sottogruppi, o per quanti se ne vuole (libro, esercizio 6.9).

> [!ESEMPIO] · La dimostrazione
> Uso il criterio.
>
> *Non è vuota.* Il neutro $e$ sta in ogni sottogruppo, quindi sta in $H_1$ e in $H_2$, cioè nell'intersezione.
>
> *La condizione.* Prendo $h$ e $h'$ nell'intersezione. Stanno tutti e due in $H_1$, che è un sottogruppo: quindi $h * h'^{-1}$ sta in $H_1$. Per lo stesso motivo sta in $H_2$. Allora sta nell'intersezione.

Per i multipli c'è una regola pratica: un numero sta in $a\mathbb{Z}$ e in $b\mathbb{Z}$ quando è multiplo di tutti e due, cioè del loro minimo comune multiplo. Quindi $4\mathbb{Z} \cap 6\mathbb{Z} = 12\mathbb{Z}$.

> [!TRAPPOLA] L'unione di due sottogruppi di solito non è un sottogruppo
> $2\mathbb{Z} \cup 3\mathbb{Z}$ contiene 2 e 3, ma non $2 + 3 = 5$, che non è multiplo né di 2 né di 3: non è chiusa (libro, p. 114). Neutro e opposti ci sono; è la chiusura a mancare.
>
> L'unione è un sottogruppo solo quando uno dei due sta dentro l'altro: $4\mathbb{Z} \cup 2\mathbb{Z} = 2\mathbb{Z}$.

::: prova Chi è $6\mathbb{Z} \cap 10\mathbb{Z}$? E $3\mathbb{Z} \cup 5\mathbb{Z}$ è un sottogruppo di $(\mathbb{Z}, +)$?
I multipli comuni di 6 e di 10 sono i multipli di 30: $6\mathbb{Z} \cap 10\mathbb{Z} = 30\mathbb{Z}$. L'unione non è un sottogruppo: contiene 3 e 5, ma non $3 + 5 = 8$.
:::

> [!RICORDA]
> - L'intersezione di sottogruppi è un sottogruppo.
> - L'unione no, a meno che uno stia dentro l'altro: di solito non è chiusa.
> - $a\mathbb{Z} \cap b\mathbb{Z}$ sono i multipli del minimo comune multiplo.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $H < G$ | «H sottogruppo di G» | $H$ è un sottoinsieme di $G$ ed è un gruppo con la stessa operazione | $2\mathbb{Z} < \mathbb{Z}$ |
| $\{e\}$ | «il solo neutro» | il sottogruppo più piccolo | $\{0\}$ in $(\mathbb{Z}, +)$ |
| $n\mathbb{Z}$ | «n Z» | i multipli interi di $n$ | $3\mathbb{Z} = \{\dots, -3, 0, 3, 6, \dots\}$ |
| $A_n$ | «A n» | il gruppo alterno: le permutazioni pari di $S_n$ | $A_3 = \{\mathrm{id}, (1\,2\,3), (1\,3\,2)\}$ |
| $h_1 * h_2^{-1}$ | «h uno per l'inverso di h due» | l'espressione del criterio | con la somma: $h_1 - h_2$ |
| $H_1 \cap H_2$ | «H uno intersecato H due» | gli elementi che stanno in tutti e due | $4\mathbb{Z} \cap 6\mathbb{Z} = 12\mathbb{Z}$ |

## Verso l'esame

La prova di **Matematica Discreta**, la parte 1 di MDAG, è scritta ed è la stessa per i canali A, B e C. Le regole del 2025/26: 10 domande a risposta multipla da 1 punto, con sbarramento a 6, e 2 problemi; 2 ore; libro, appunti e calcolatrice non programmabile ammessi. Gli appelli 2026/27 sono il 19/01/2027 e il 03/02/2027 alle 14:00 ([scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/corso.md)).

**Che cosa serve di questa lezione**

1. **«Dire se $H$ è un sottogruppo, motivando»**: è un punto fisso dei problemi sui gruppi. Appelli del 04/02/2025 (problema 2), del 13/01/2026 (problema 1), del 01/07/2026 (problema 2).
2. **Dire di no con un esempio**: manca il neutro, oppure due elementi di $H$ hanno il prodotto fuori da $H$. Nelle soluzioni ufficiali è sempre una riga.
3. **Dire di sì con i tre controlli**, scritti su un elemento generico.
4. **Dimostrare che un insieme dato da una condizione è un sottogruppo**, con il criterio: prova scritta del 23/01/2020.
5. Sottogruppi generati da un elemento, ordine di un sottogruppo e teorema di Lagrange sono le prossime lezioni.

### Una domanda vera, letta insieme

**Appello del 04/02/2025, problema 2, versione A, punto b).** «Si consideri l'insieme $X = \mathbb{Z}_5^\times \times \mathbb{Z}_5$, con l'operazione definita da $(a, b) * (c, d) = (ac, ad + b)$. Si dia per noto che $(X, *)$ è un gruppo con elemento neutro $(1, 0)$. Dire quali dei due seguenti sottoinsiemi di $X$ sono sottogruppi, motivando la risposta: $H_1 = \mathbb{Z}_5^\times \times \{0\}$, $H_2 = \mathbb{Z}_5^\times \times \{1\}$.»

**In pratica chiede:** di fare i tre controlli su $H_1$, le coppie con seconda componente 0, e su $H_2$, le coppie con seconda componente 1. È il gruppo della [D19](D19_operazioni_gruppi.html), dove ho svolto il punto a).

> [!ESEMPIO] · la soluzione, passo per passo
> **$H_1$: le coppie $(a, 0)$.**
>
> *Chiusura.* $(a, 0) * (c, 0) = (ac,\ a \cdot 0 + 0) = (ac, 0)$. Il prodotto di due classi invertibili è invertibile, quindi $(ac, 0)$ sta in $H_1$.
>
> *Neutro.* $(1, 0)$ ha seconda componente 0: sta in $H_1$.
>
> *Inversi.* L'inverso di $(a, 0)$ è $(a^{-1}, 0)$: infatti $(a, 0) * (a^{-1}, 0) = (1, 0)$. Sta in $H_1$.
>
> $H_1$ **è un sottogruppo**.
>
> **$H_2$: le coppie $(a, 1)$.**
>
> Il neutro $(1, 0)$ ha seconda componente 0, non 1: **non sta in $H_2$**. Basta questo.
>
> La soluzione ufficiale fa cadere invece la chiusura: $(a, 1) * (c, 1) = (ac,\ a + 1)$, e per restare in $H_2$ servirebbe $a + 1 = 1$, cioè $a = 0$, che in $\mathbb{Z}_5^\times$ non c'è. Con i numeri: $(2, 1) * (3, 1) = (6, 3) = (1, 3)$, fuori da $H_2$.
>
> $H_2$ **non è un sottogruppo**.

Le due strade per $H_2$ vanno bene tutte e due: ne basta una. Ho controllato con un programma su tutti gli elementi che $H_1$ è chiuso e $H_2$ no.

### Altre due domande vere

> [!ESAME] Appello del 13/01/2026, problema 1, versione A, punto c)
> «In $S_9$ si consideri la permutazione $\sigma = (1\ 2)(5\ 9\ 4)(4\ 2\ 7)(9\ 5\ 6\ 2\ 3)$. Si consideri $H = \{\mathrm{id}, \sigma^8\}$. $H$ è un sottogruppo di $S_9$?»
>
> **Soluzione.** In cicli disgiunti $\sigma = (1\ 2\ 3\ 4)(5\ 6\ 7)$, di periodo 12, e $\sigma^8 = (5\ 7\ 6)$ ([D11](D11_cicli_disgiunti.html) e [D12](D12_tipo_periodo_permutazioni.html)). $H$ non è chiuso: contiene $\sigma^8$, ma non $\sigma^8 \circ \sigma^8 = \sigma^{16} = \sigma^4 = (5\ 6\ 7)$. **Non è un sottogruppo.** Si poteva dire anche così: l'inversa di $(5\ 7\ 6)$ è $(5\ 6\ 7)$, che in $H$ manca.
>
> Il testo chiede poi il più piccolo sottogruppo che contiene $H$. Basta aggiungere quello che manca: $\{\mathrm{id}, (5\ 7\ 6), (5\ 6\ 7)\}$, che è chiuso.

> [!ESAME] Appello del 01/07/2026, problema 2, versione A, punto c)
> «Sia $\sigma = (1\ 3\ 5)(1\ 2\ 4)(1\ 6\ 7\ 8) \in S_8$. Siano $H = \{\tau \in \langle\sigma\rangle : \tau^2(6) = 6\}$ e $K = \{\tau \in \langle\sigma\rangle : \tau^2(6) = 8\}$. Scrivere gli elementi di $H$ e di $K$; dire se $H$ e $K$ sono sottogruppi di $S_8$.»
>
> Il simbolo $\langle\sigma\rangle$ indica l'insieme di tutte le potenze di $\sigma$: lo vedrai tra due lezioni.
>
> **Soluzione.** In cicli disgiunti $\sigma = (1\ 6\ 7\ 8\ 2\ 4\ 3\ 5)$, un ciclo di lunghezza 8. Facendo i conti viene $H = \{\mathrm{id}, \sigma^4\}$ e $K = \{\sigma, \sigma^5\}$.
>
> $K$ **non è un sottogruppo**: non contiene l'identità.
>
> $H$ **è un sottogruppo**: contiene l'identità, e $\sigma^4 \circ \sigma^4 = \sigma^8 = \mathrm{id}$, quindi è chiuso e $\sigma^4$ è l'inversa di sé stessa.

### Errori da evitare

- Rispondere senza guardare con quale operazione è fatto il gruppo grande.
- Controllare la chiusura e dimenticare gli inversi, in un gruppo infinito.
- Rifare la dimostrazione dell'associativa, che è ereditata.
- Usare il criterio senza dire che l'insieme non è vuoto.
- Pensare che l'unione di due sottogruppi sia un sottogruppo.
- Confondere «sottoinsieme che è un gruppo» con «sottogruppo»: $\mathbb{Q}^\times$ dentro $(\mathbb{Q}, +)$.
- Per dire di no, scrivere un discorso generale invece di un esempio con due elementi.

## Quiz

```quiz
D: Appello del 04/02/2025, problema 2, versione A. In $X = \mathbb{Z}_5^\times \times \mathbb{Z}_5$ con $(a, b) * (c, d) = (ac, ad + b)$ e neutro $(1, 0)$, siano $H_1 = \mathbb{Z}_5^\times \times \{0\}$ e $H_2 = \mathbb{Z}_5^\times \times \{1\}$. Quali sono sottogruppi?
+ solo $H_1$
- solo $H_2$
- tutti e due
- nessuno dei due
- non si può dire senza la tabella dell'operazione
= $H_1$ passa i tre controlli: $(a, 0) * (c, 0) = (ac, 0)$, il neutro ha seconda componente 0, l'inverso di $(a, 0)$ è $(a^{-1}, 0)$. $H_2$ non contiene il neutro $(1, 0)$. La più insidiosa è «tutti e due»: $H_2$ somiglia a $H_1$, ma spostare la seconda componente da 0 a 1 fa uscire il neutro.

D: Appello del 13/01/2026, problema 1, versione A. In $S_9$, con $\sigma^8 = (5\ 7\ 6)$, l'insieme $H = \{\mathrm{id}, \sigma^8\}$ è un sottogruppo?
+ no, perché non contiene $(5\ 6\ 7)$, che è $\sigma^8 \circ \sigma^8$
- sì, perché contiene l'identità
- sì, perché ha due elementi e 2 divide $9!$
- no, perché $\sigma^8$ non è una permutazione pari
- no, perché un sottogruppo di $S_9$ ha almeno 9 elementi
= Un ciclo di lunghezza 3 composto con sé stesso dà il ciclo inverso, che in $H$ non c'è: manca la chiusura. La più insidiosa è «sì, perché contiene l'identità»: il neutro è uno dei tre controlli, non l'unico. $(5\ 7\ 6)$ è pari, e la parità qui non c'entra.

D: Appello del 01/07/2026, problema 2, versione A. Con $\sigma$ ciclo di lunghezza 8 in $S_8$, quale di questi insiemi è un sottogruppo di $S_8$?
+ $\{\mathrm{id}, \sigma^4\}$
- $\{\sigma, \sigma^5\}$
- $\{\mathrm{id}, \sigma\}$
- $\{\mathrm{id}, \sigma^2\}$
- $\{\sigma^4\}$
= $\sigma^4 \circ \sigma^4 = \sigma^8 = \mathrm{id}$: l'insieme è chiuso e contiene l'identità. $\{\sigma, \sigma^5\}$ e $\{\sigma^4\}$ non contengono l'identità. La più insidiosa è $\{\mathrm{id}, \sigma^2\}$: contiene l'identità, ma $\sigma^2 \circ \sigma^2 = \sigma^4$ è fuori. Lo stesso per $\{\mathrm{id}, \sigma\}$, con $\sigma^2$.

D: Quale di questi è un sottogruppo di $(\mathbb{Z}, +)$?
+ i multipli di 7
- i numeri dispari
- i numeri naturali
- i numeri primi
- $\{-1, 0, 1\}$
= La differenza di due multipli di 7 è un multiplo di 7. I dispari e i primi non contengono lo 0; i naturali non hanno gli opposti. La più insidiosa è $\{-1, 0, 1\}$: ha lo 0 e gli opposti, ma $1 + 1 = 2$ è fuori.

D: Che cosa dice il criterio per i sottogruppi, per un sottoinsieme non vuoto $H$ di un gruppo $G$?
+ $H$ è un sottogruppo se e solo se $h_1 * h_2^{-1}$ sta in $H$ per ogni $h_1$ e $h_2$ di $H$
- $H$ è un sottogruppo se e solo se $h_1 * h_2$ sta in $H$ per ogni $h_1$ e $h_2$ di $H$
- $H$ è un sottogruppo se e solo se contiene il neutro
- $H$ è un sottogruppo se e solo se $h^{-1}$ sta in $H$ per ogni $h$ di $H$
- $H$ è un sottogruppo se e solo se è finito
= Il criterio mette insieme prodotto e inverso. La più insidiosa è quella con $h_1 * h_2$: è la sola chiusura, e nei gruppi infiniti non basta, come mostrano i naturali dentro gli interi.

D: Siano $H_1$ e $H_2$ due sottogruppi di un gruppo $G$. Quale affermazione è sempre vera?
+ $H_1 \cap H_2$ è un sottogruppo di $G$
- $H_1 \cup H_2$ è un sottogruppo di $G$
- $H_1 \cap H_2$ è vuoto, se $H_1$ e $H_2$ sono diversi
- $H_1 \cup H_2 = G$
- $H_1 \cap H_2 = \{e\}$
= È la proposizione 6.12. L'intersezione non è mai vuota, perché contiene il neutro, ma può essere più grande: $4\mathbb{Z} \cap 6\mathbb{Z} = 12\mathbb{Z}$. La più insidiosa è quella sull'unione: $2\mathbb{Z} \cup 3\mathbb{Z}$ contiene 2 e 3 e non 5.

D: Quanti elementi ha il sottogruppo $A_4$ di $S_4$?
N: 12
= Le permutazioni pari sono la metà: $4!/2 = 12$ (D13).

D: $4\mathbb{Z} \cap 10\mathbb{Z} = n\mathbb{Z}$. Quanto vale $n$, positivo?
N: 20
= I multipli comuni di 4 e di 10 sono i multipli del loro minimo comune multiplo, 20.
```

## Esercizi

::: esercizio base Riscaldamento: sì o no, con la somma
Di' se è un sottogruppo di $(\mathbb{Z}, +)$: (a) i multipli di 10; (b) i numeri maggiori o uguali a 0; (c) $\{0\}$; (d) i numeri che divisi per 3 danno resto 1.
::: soluzione
(a) Sì. (b) No: l'opposto di 1 manca. (c) Sì: è il sottogruppo del solo neutro. (d) No: lo 0 dà resto 0, quindi manca il neutro; e $1 + 1 = 2$ dà resto 2.
:::

::: esercizio base Riscaldamento: sì o no, con il prodotto
Di' se è un sottogruppo di $\mathbb{Q}^\times$, i razionali non nulli con il prodotto: (a) $\{1, -1\}$; (b) i razionali positivi; (c) gli interi non nulli; (d) $\{1, 2, \frac12\}$.
::: soluzione
(a) Sì. (b) Sì: il prodotto e l'inverso di positivi sono positivi, e 1 è positivo. (c) No: l'inverso di 2 è $\frac12$, che non è intero. (d) No: $2 \cdot 2 = 4$ è fuori.
:::

::: esercizio base Riscaldamento: i sottogruppi di un gruppo piccolo
Trova tutti i sottogruppi di $(\mathbb{Z}_6, +)$.
::: soluzione
$\{\overline{0}\}$; $\{\overline{0}, \overline{3}\}$; $\{\overline{0}, \overline{2}, \overline{4}\}$; tutto $\mathbb{Z}_6$. Un sottogruppo che contiene $\overline{1}$ o $\overline{5}$ contiene tutte le loro somme ripetute, cioè tutto il gruppo. Controllato con un programma su tutti i 64 sottoinsiemi.
:::

::: esercizio base Riscaldamento: intersezioni di multipli
Scrivi come $n\mathbb{Z}$: (a) $2\mathbb{Z} \cap 5\mathbb{Z}$; (b) $6\mathbb{Z} \cap 9\mathbb{Z}$; (c) $4\mathbb{Z} \cap 8\mathbb{Z}$.
::: soluzione
(a) $10\mathbb{Z}$. (b) $18\mathbb{Z}$. (c) $8\mathbb{Z}$: ogni multiplo di 8 è già multiplo di 4.
:::

::: esercizio medio Le permutazioni che fissano un punto
In $S_4$ sia $H$ l'insieme delle permutazioni $\alpha$ con $\alpha(4) = 4$. Dimostra che $H$ è un sottogruppo. Quanti elementi ha?
::: soluzione
**Chiusura**: se $\alpha(4) = 4$ e $\beta(4) = 4$, allora $(\alpha \circ \beta)(4) = \alpha(\beta(4)) = \alpha(4) = 4$. **Neutro**: l'identità fissa il 4. **Inversi**: se $\alpha(4) = 4$, applicando $\alpha^{-1}$ ai due membri si ottiene $4 = \alpha^{-1}(4)$. Gli elementi di $H$ permutano liberamente 1, 2 e 3: sono $3! = 6$.
:::

::: esercizio medio Un sottogruppo dato da un'equazione
In $(\mathbb{Z} \times \mathbb{Z}, +)$, il gruppo prodotto, sia $H$ l'insieme delle coppie $(x, y)$ con $x + y$ pari. Usa il criterio per dimostrare che $H$ è un sottogruppo. L'insieme delle coppie con $x + y$ dispari è un sottogruppo?
::: soluzione
$H$ non è vuoto: contiene $(0, 0)$. Prese $(x, y)$ e $(x', y')$ in $H$, la differenza è $(x - x', y - y')$, e $(x - x') + (y - y') = (x + y) - (x' + y')$ è differenza di due pari, quindi pari. Per il criterio $H$ è un sottogruppo. Le coppie con somma dispari no: non contengono $(0, 0)$.
:::

::: esercizio esame Dall'appello del 04/02/2025, con un sottoinsieme in più
Nel gruppo $(X, *)$ dell'appello, con $(a, b) * (c, d) = (ac, ad + b)$ modulo 5, di' se $H_3 = \{1\} \times \mathbb{Z}_5$, le coppie $(1, b)$, è un sottogruppo.
::: soluzione
**Chiusura**: $(1, b) * (1, d) = (1,\ 1 \cdot d + b) = (1, b + d)$, ancora con prima componente 1. **Neutro**: $(1, 0)$ ha prima componente 1. **Inversi**: $(1, b) * (1, -b) = (1, 0)$, quindi l'inverso di $(1, b)$ è $(1, -b)$, che sta in $H_3$. È un sottogruppo, con 5 elementi; su di lui l'operazione è la somma delle seconde componenti. Controllato con un programma.
:::

::: esercizio difficile Dalla prova scritta del 23/01/2020: le permutazioni che commutano con una fissata
Sia $\sigma$ una permutazione di $S_8$, e sia $H$ l'insieme delle permutazioni $\alpha$ di $S_8$ con $\alpha \circ \sigma = \sigma \circ \alpha$. Dimostra che $H$ è un sottogruppo di $S_8$. Trova due elementi che stanno di sicuro in $H$.
::: soluzione
**Neutro**: $\mathrm{id} \circ \sigma = \sigma = \sigma \circ \mathrm{id}$, quindi l'identità sta in $H$. **Chiusura**: se $\alpha$ e $\beta$ stanno in $H$, sposto $\sigma$ un passo alla volta: $\alpha \circ \beta \circ \sigma = \alpha \circ \sigma \circ \beta = \sigma \circ \alpha \circ \beta$. **Inversi**: da $\alpha \circ \sigma = \sigma \circ \alpha$, componendo con $\alpha^{-1}$ a sinistra e a destra si ottiene $\sigma \circ \alpha^{-1} = \alpha^{-1} \circ \sigma$. Di sicuro in $H$ stanno l'identità e $\sigma$ stessa, che commuta con sé; anche tutte le potenze di $\sigma$.
:::

## Domande di ripasso

::: domanda Che cos'è un sottogruppo?
Un sottoinsieme di un gruppo che è a sua volta un gruppo con la stessa operazione.
:::

::: domanda Quali sono i tre controlli, e perché l'associativa non c'è?
Chiusura, neutro, inversi. L'associativa vale per tutti gli elementi del gruppo grande, quindi anche per quelli del sottoinsieme.
:::

::: domanda Quali sottogruppi ha ogni gruppo?
Quello fatto dal solo neutro e il gruppo intero.
:::

::: domanda Che cos'è $n\mathbb{Z}$?
L'insieme dei multipli interi di $n$. È un sottogruppo degli interi con la somma.
:::

::: domanda Che cosa dice il criterio per i sottogruppi?
Un sottoinsieme non vuoto è un sottogruppo se e solo se, presi due suoi elementi, il primo per l'inverso del secondo sta nel sottoinsieme.
:::

::: domanda Perché nel criterio serve «non vuoto»?
Perché la dimostrazione parte da un elemento del sottoinsieme per ottenere il neutro. L'insieme vuoto rispetta la condizione e non è un gruppo.
:::

::: domanda Che cosa succede con intersezione e unione di due sottogruppi?
L'intersezione è sempre un sottogruppo. L'unione di solito no: non è chiusa, come per i multipli di 2 e di 3.
:::

## Glossario

```glossario
Sottogruppo | Sottoinsieme di un gruppo che è un gruppo con la stessa operazione.
Sottoinsieme chiuso | Sottoinsieme da cui non si esce operando tra i suoi elementi.
Sottogruppi banali | Nome del libro per i due sottogruppi che ci sono sempre: il solo neutro e tutto il gruppo.
Multipli di n | L'insieme nZ dei numeri della forma nk, con k intero.
Gruppo alterno | Il sottogruppo delle permutazioni pari di S_n.
Criterio per i sottogruppi | H non vuoto è un sottogruppo se e solo se il prodotto di un suo elemento per l'inverso di un altro sta in H.
Intersezione di sottogruppi | Gli elementi comuni a due sottogruppi: formano un sottogruppo.
```

## Checklist

```checklist
- So dire che cos'è un sottogruppo e che cosa vuol dire «con la stessa operazione».
- So fare i tre controlli: chiusura, neutro, inversi.
- So dire perché l'associativa non va ricontrollata.
- So dire di no con un solo esempio: neutro mancante o prodotto fuori.
- So elencare gli esempi principali: i multipli di n, il gruppo alterno, i sottogruppi che ci sono sempre.
- So perché un gruppo con il prodotto non è un sottogruppo di un gruppo con la somma.
- So enunciare e dimostrare il criterio, con i tre passi nell'ordine giusto.
- So che in un gruppo finito basta la chiusura.
- So dimostrare che l'intersezione di due sottogruppi è un sottogruppo.
- So l'esempio che mostra che l'unione non lo è.
- So scrivere l'intersezione di due insiemi di multipli con il minimo comune multiplo.
```

## Fonti

- A. Mori, *Lezioni di Matematica Discreta* (testo del canale B), cap. 6 «Gruppi», sezione «Sottogruppi», pp. 111–114: definizione 6.8, nota 6.9, esempi, proposizione 6.10, i multipli di un intero, proposizione 6.12, esempio dell'unione dei multipli di 2 e di 3.
- Diario delle lezioni del canale B 2025/26, lezione 20: sottogruppi, criterio, intersezione e unione.
- Appello di Matematica Discreta del 04/02/2025, problema 2, versione A; appello del 13/01/2026, problema 1, versione A; appello del 01/07/2026, problema 2, versione A; prova scritta del 23/01/2020, punto 3. Tutti con le soluzioni ufficiali.
- I conti degli esempi e degli esercizi sono ricontrollati con un programma.
