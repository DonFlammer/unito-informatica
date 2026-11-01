---
corso: MDAG
modulo: AG
lezione: S5
tipo: riassunto
titolo: "Settimana 5: mosse di Gauss, inversa e sistemi lineari"
data: 2026-10-29
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Riassunto settimanale · Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · 26/10 – 30/10/2026
descrizione: >-
  Riassunto della settimana 5 di Algebra lineare e Geometria (MDAG, parte 2): le mosse di Gauss e il determinante,
  il determinante zero, il teorema di Binet, la matrice inversa con i cofattori e la formula per le 2 × 2; i sistemi
  lineari, la matrice completa, la riduzione a scalini, i pivot e i tre finali possibili.
lede: >-
  Le due lezioni della settimana in poche pagine: come si calcola un determinante grande con le mosse sulle righe,
  quando una matrice ha l'inversa, come si risolve un sistema a scalini e come si capisce subito quante soluzioni ha,
  con le domande vere degli appelli.
materiale: dispense
scheda:
  Lezioni: "[L10](L10_matrici_3.html) mar 27/10 · [L11](L11_sistemi_lineari_1.html) gio 29/10, nel canale B"
  Dispense: Buzano e Radeschi 2026, pp. 46–55
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni L10 e L11 di Algebra lineare e Geometria, scritti sulle dispense 2026 del corso
  (R. Buzano, M. Radeschi)
appunti_html: appunti/MDAG/riassunto_settimana_05_AG.html
genera_html: true
---

## In breve

- Le tre **mosse di Gauss** sulle righe cambiano il determinante in modo prevedibile: lo scambio cambia il segno, moltiplicare una riga per un numero moltiplica il determinante, sommare a una riga un multiplo di un'altra non lo cambia.
- Per un determinante grande: con le mosse si arriva a una matrice **triangolare**, poi si moltiplica la diagonale.
- Il determinante è **zero** esattamente quando una riga è combinazione lineare delle altre.
- **Binet**: il determinante di un prodotto è il prodotto dei determinanti. Quindi il determinante di $A^3$ è il cubo di quello di $A$.
- Una matrice è **invertibile** esattamente quando il determinante non è zero. L'inversa si calcola con i cofattori; per le $2 \times 2$ c'è una formula da sapere a memoria.
- Un **sistema lineare** si scrive come **matrice completa** e si porta a scalini con le stesse mosse, che non cambiano le soluzioni.
- I finali sono tre: **nessuna** soluzione, **una**, **infinite**. Le incognite senza pivot sono i **parametri**.

## L10 · Mosse di Gauss, Binet e inversa (mar 27/10)

Il determinante di una matrice grande si calcola senza sviluppi lunghi, usando le mosse sulle righe.

| mossa sulle righe | effetto sul determinante |
|---|---|
| scambiare due righe | cambia segno |
| moltiplicare una riga per $c \neq 0$ | si moltiplica per $c$ |
| sommare a una riga un multiplo di un'altra | non cambia |

Per esempio, con $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 1 & 3 & 5 \end{pmatrix}$:

1. $R_2 \to R_2 - 2R_1$ e $R_3 \to R_3 - R_1$ danno le righe $(0, 1, 1)$ e $(0, 1, 2)$;
2. $R_3 \to R_3 - R_2$ dà $(0, 0, 1)$;
3. la matrice è triangolare con diagonale 1, 1, 1, e nessuna mossa ha cambiato il determinante: $\det A = 1$.

- **Determinante zero**: due righe uguali o proporzionali, una riga nulla, o in generale una riga che è combinazione delle altre. Nel disegno, due colonne sulla stessa retta non chiudono nessuna area.
- **Teorema di Binet**: $\det(AB) = \det A \cdot \det B$. Da qui $\det(A^n) = (\det A)^n$, il trucco delle domande «il determinante di $A^3$ è».
- **Inversa**: $A^{-1}$ è la matrice con $A A^{-1} = A^{-1} A = I$. Esiste esattamente quando $\det A \neq 0$. Si calcola con i **cofattori**: la trasposta della matrice dei cofattori, divisa per il determinante.

```grafico
titolo: Le colonne $(1, 2)$ e $(2, 1)$ formano un parallelogramma di area 3 (in blu): il determinante $1 \cdot 1 - 2 \cdot 2 = -3$ non è zero. Le colonne $(1, 2)$ e $(2, 4)$ stanno sulla stessa retta (tratteggiata): l'area è zero, come il determinante, e la matrice non è invertibile
x: -0.6 3.4
y: -0.5 4.5
poligono: 0 0 1 2 3 3 2 1 | blu | pieno
retta: 0 0 1.5 3 | rosa | tratteggio
vettore: 2 4 | rosa | spesso | $(2, 4)$ | e
vettore: 1 2 | accento | spesso | $(1, 2)$ | o
vettore: 2 1 | blu | spesso | $(2, 1)$ | se
```

Per le $2 \times 2$ la formula è: si scambiano i due numeri sulla diagonale, si cambia segno agli altri due, si divide per il determinante.

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.$$

::: prova Calcola l'inversa di $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ e controlla il risultato.
Il determinante è $2 - 1 = 1$, quindi l'inversa è $\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$. Controllo: la prima riga della matrice per la prima colonna dell'inversa fa $2 \cdot 1 + 1 \cdot (-1) = 1$, la prima riga per la seconda colonna $2 \cdot (-1) + 1 \cdot 2 = 0$. Allo stesso modo la seconda riga dà 0 e 1: il prodotto è $I$.
:::

> [!RICORDA]
> - Scambio: segno opposto. Riga per $c$: determinante per $c$. Riga più multiplo di un'altra: niente.
> - Binet: $\det(A^n) = (\det A)^n$.
> - Invertibile esattamente quando il determinante non è zero.

## L11 · Sistemi lineari (gio 29/10)

Un sistema lineare è un elenco di equazioni di primo grado da rispettare tutte insieme. Due numeri con somma 5 e differenza 1 sono le soluzioni di $x + y = 5$ e $x - y = 1$: sommando le equazioni viene $2x = 6$, quindi $x = 3$ e $y = 2$.

Per i conti si scrive solo la **matrice completa**: una riga per equazione, i coefficienti e poi, dopo la barra, il termine noto. Le tre mosse di Gauss sulle righe non cambiano le soluzioni, e con loro si arriva alla forma **a scalini**: ogni riga comincia più a destra di quella sopra. Il primo numero diverso da zero di ogni riga è il **pivot**.

> [!ESEMPIO] · un sistema con infinite soluzioni
> $$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 1 & 2 & 3 & 14 \\ 2 & 3 & 4 & 20 \end{array}\right) \xrightarrow{R_2 - R_1,\ R_3 - 2R_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & 2 & 8 \\ 0 & 1 & 2 & 8 \end{array}\right) \xrightarrow{R_3 - R_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & 2 & 8 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
> Due pivot e tre incognite: la $z$ resta libera. Con $z = t$, dal basso: $y = 8 - 2t$, poi $x = 6 - y - z = t - 2$. Le soluzioni sono $(t - 2,\ 8 - 2t,\ t)$ con $t$ qualsiasi: infinite, con un parametro.

I finali possibili sono tre, e si leggono dalla forma a scalini.

| a scalini compare… | soluzioni |
|---|---|
| una riga $(0 \cdots 0 \mid b)$ con $b \neq 0$, cioè l'equazione impossibile $0 = b$ | nessuna |
| un pivot per ogni incognita, e nessuna riga impossibile | una sola |
| meno pivot che incognite, e nessuna riga impossibile | infinite, con tanti parametri quante le incognite senza pivot |

```grafico
titolo: I tre finali con due incognite, dove ogni equazione è una retta. A sinistra le rette si incontrano in un punto: una soluzione. Al centro sono parallele: nessuna. A destra sono la stessa retta: infinite
x: -0.4 12.8
y: -1.1 3.6
assi: no
griglia: no
proporzioni: libere
segmento: 0.2 3.2 3.2 0.2 | accento | spesso
segmento: 0.2 0.2 3.2 3.2 | blu | spesso
punto: 1.7 1.7 | ambra
testo: 1.7 -0.6 | grigio | "una soluzione"
segmento: 4.6 2.6 7.0 0.2 | accento | spesso
segmento: 5.4 3.4 7.8 1.0 | blu | spesso
testo: 6.2 -0.6 | grigio | "nessuna"
segmento: 9.2 3.2 12.2 0.2 | accento | spesso
segmento: 9.2 3.2 12.2 0.2 | blu | tratteggio
testo: 10.7 -0.6 | grigio | "infinite"
```

Con il metodo di **Gauss–Jordan** si continua oltre gli scalini: si rendono 1 i pivot e si azzera anche sopra di loro, e le soluzioni si leggono senza sostituire all'indietro.

::: prova Quante soluzioni ha il sistema con matrice completa $\left(\begin{array}{cc|c} 1 & 2 & 3 \\ 2 & 4 & 7 \end{array}\right)$?
$R_2 \to R_2 - 2R_1$ dà $(0, 0 \mid 1)$, cioè $0 = 1$: nessuna soluzione. Le due equazioni sono rette parallele.
:::

> [!RICORDA]
> - Matrice completa, mosse di Gauss, scalini, poi si legge dal basso.
> - Riga $(0 \cdots 0 \mid b)$ con $b \neq 0$: nessuna soluzione.
> - Parametri = incognite − pivot, se il sistema ha soluzioni.

## Verso l'esame

- **Quante soluzioni ha il sistema**: è la domanda di quiz più frequente di questa parte, uscita in 9 appelli su 15 tra il 2024 e il 2026. Le risposte sono sempre le stesse cinque: zero, una, infinite con 1 o 2 parametri, «un numero finito maggiore di 1», che con i numeri reali non succede mai.
- **Il determinante di una potenza** con Binet: 06/09/2024, 07/02/2025, 05/02/2026, 03/07/2026. Si calcola $\det A$ una volta, poi si eleva.
- **Problemi**: «per quali valori di $k$ la matrice è invertibile» chiede proprio $\det A \neq 0$; la discussione dei sistemi con un parametro arriva con la L12.
- Appelli 2026/27: venerdì 22/01/2027 e venerdì 05/02/2027, alle 14:00; 4 facciate di appunti scritti a mano, niente calcolatrice.

## Domande di ripasso

::: domanda Che cosa fanno al determinante le tre mosse di Gauss?
Lo scambio di due righe cambia il segno; moltiplicare una riga per $c$ moltiplica il determinante per $c$; sommare a una riga un multiplo di un'altra non lo cambia.
:::

::: domanda Quanto vale il determinante di $A^3$ se $\det A = -2$?
Per Binet, $(-2)^3 = -8$.
:::

::: domanda Quando una matrice quadrata è invertibile?
Esattamente quando il suo determinante non è zero.
:::

::: domanda Come si riconosce, dalla forma a scalini, che un sistema non ha soluzioni?
Compare una riga di zeri prima della barra e un numero diverso da zero dopo: l'equazione impossibile $0 = b$.
:::

::: domanda Da che cosa dipende il numero dei parametri?
Dal numero di incognite senza pivot: incognite meno pivot, quando il sistema ha soluzioni.
:::

## Quiz d'esame

Sono tutte domande vere degli appelli, diverse da quelle già nelle lezioni L10 e L11, tranne l'ultima, sul modello delle domande sull'inversa. Le risposte giuste sono quelle delle soluzioni ufficiali, ricontrollate con un programma.

```quiz
D: Appello del 07/02/2025, domanda 5. Sia $A = \begin{pmatrix} 0 & 1 & 2 \\ 2 & 1 & 6 \\ 1 & 1 & 1 \end{pmatrix}$. Il determinante di $A^3$ è:
- 111.
- 12.
- 21.
+ 216.
- 261.
= Sviluppando lungo la prima riga, $\det A = -1 \cdot (2 - 6) + 2 \cdot (2 - 1) = 6$. Per Binet $\det(A^3) = 6^3 = 216$: è la (d) della soluzione ufficiale. La più insidiosa è 21, che viene sommando invece di elevare.

D: Appello del 05/02/2026, domanda 5. Sia $A = \begin{pmatrix} 2 & 0 & 2 \\ 6 & -1 & 2 \\ 0 & 2 & 6 \end{pmatrix}$. Il determinante di $A^3$ è:
- 27.
- −1.
- 4.
+ 64.
- 9.
= Con $R_2 \to R_2 - 3R_1$, che non cambia il determinante, la seconda riga diventa $(0, -1, -4)$. Sviluppando lungo la prima colonna, $\det A = 2 \cdot (-6 + 8) = 4$, e $\det(A^3) = 4^3 = 64$: è la (d) della soluzione ufficiale. La più insidiosa è 4, che è $\det A$ e non il determinante del cubo.

D: Appello del 24/01/2024, domanda 10. Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 2 & 3 & 10 \\ 4 & 5 & 6 & 11 \\ 7 & 8 & 9 & 12 \end{array}\right)$ ha un numero di soluzioni pari a:
- Una.
+ Infinite, che dipendono da 1 parametro.
- Zero.
- Infinite, che dipendono da 2 parametri.
- Un numero finito, maggiore di 1.
= $R_2 - 4R_1$ e $R_3 - 7R_1$ danno $(0, -3, -6 \mid -29)$ e $(0, -6, -12 \mid -58)$; la terza è il doppio della seconda e si azzera tutta. Restano 2 pivot su 3 incognite, nessuna riga impossibile: un parametro, la (b) della soluzione ufficiale. La più insidiosa è «Una», perché equazioni e incognite sono tante uguali.

D: Appello del 10/07/2024, domanda 5. Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 1 & 3 & 5 & 2 \\ 7 & 9 & 11 & 2 \\ 6 & 6 & 6 & -2 \end{array}\right)$ ha un numero di soluzioni pari a:
- Una.
+ Zero.
- Un numero finito, maggiore di 1.
- Infinite, che dipendono da 1 parametro.
- Infinite, che dipendono da 2 parametri.
= $R_2 - 7R_1$ e $R_3 - 6R_1$ danno $(0, -12, -24 \mid -12)$ e $(0, -12, -24 \mid -14)$; sottraendole resta $(0, 0, 0 \mid -2)$, l'equazione impossibile $0 = -2$. È la (b) della soluzione ufficiale. La più insidiosa è «Infinite, che dipendono da 1 parametro», di chi vede la riga di zeri e non guarda dopo la barra.

D: Appello del 10/07/2025, domanda 5. Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 3 & 12 & 15 & 6 \\ 2 & 8 & 10 & 4 \\ 4 & 16 & 20 & 8 \end{array}\right)$ ha un numero di soluzioni pari a:
- Una.
- Infinite, che dipendono da 1 parametro.
+ Infinite, che dipendono da 2 parametri.
- Zero.
- Un numero finito, maggiore di 1.
= Dividendo le righe per 3, 2 e 4 vengono tre righe uguali $(1, 4, 5 \mid 2)$: resta una sola equazione con 3 incognite, quindi 2 parametri. È la (c) della soluzione ufficiale. La più insidiosa è «1 parametro», di chi conta le righe nulle invece delle incognite senza pivot.

D: Appello del 03/06/2026, domanda 7. Il sistema lineare con matrice completa $\left(\begin{array}{ccc|c} 3 & 9 & 6 & 12 \\ 4 & 12 & 8 & 16 \\ 2 & 6 & 4 & 8 \end{array}\right)$ ha un numero di soluzioni pari a:
- Infinite, che dipendono da 1 parametro.
- Zero.
- Un numero finito, maggiore di 1.
+ Infinite, che dipendono da 2 parametri.
- Una.
= Dividendo per 3, 4 e 2, le tre righe diventano $(1, 3, 2 \mid 4)$: un solo pivot su 3 incognite, 2 parametri. È la (d) della soluzione ufficiale. La più insidiosa è «Zero», di chi si spaventa per le due righe nulle: senza un numero dopo la barra non sono impossibili.

D: Appello del 10/07/2024, domanda 6. Trovare tutte le soluzioni del sistema lineare $2x - y - z = 3$, $x - y + z = 2$, $3x - y - 3z = 4$.
- $x = -1$, $y = -4$, $z = -1$.
- $x = 1 - t$, $y = 2 - 2t$, $z = -3$, con $t$ reale.
- $x = 1 - 2s$, $y = 2t - s - 1$, $z = -s$, con $t$ e $s$ reali.
+ $x = 2t + 1$, $y = 3t - 1$, $z = t$, con $t$ reale.
- Il sistema non ha soluzioni.
= A scalini restano 2 pivot su 3 incognite: con $z = t$ vengono $y = 3t - 1$ e $x = 2t + 1$. È la (d) della soluzione ufficiale. La più insidiosa è la (a): è davvero una soluzione, quella con $t = -1$, ma la domanda chiede **tutte** le soluzioni.

D: Sul modello delle domande sull'inversa. L'inversa di $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ è:
+ $\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$
- $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1/3 & 1 \\ 1/5 & 1/2 \end{pmatrix}$
- non esiste
= Il determinante è $6 - 5 = 1$: si scambiano 3 e 2, si cambia segno a 1 e 5, si divide per 1. La più insidiosa è la terza, che cambia i segni ma non scambia la diagonale; la quarta fa l'inverso di ogni numero, che non è l'inversa di una matrice.
```

## Fonti

- Le lezioni complete: [L10 · Matrici III](L10_matrici_3.html), [L11 · Sistemi lineari I](L11_sistemi_lineari_1.html), con gli esempi, i quiz e gli esercizi.
- R. Buzano e M. Radeschi, dispense di Algebra lineare e Geometria 2026, pp. 46–55.
- Appelli del 24/01/2024 (domanda 10), 10/07/2024 (domande 5 e 6), 07/02/2025 (domanda 5), 10/07/2025 (domanda 5), 05/02/2026 (domanda 5) e 03/06/2026 (domanda 7), con le soluzioni ufficiali.
