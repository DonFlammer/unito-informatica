---
corso: FDA
lezione: S2
tipo: riassunto
titolo: "Settimana 2: numeri con il segno e con la virgola, compressione, errori, esercizi sulla parte 1"
data: 2026-10-09
docenti: Stefano Berardi
sopratitolo: Riassunto settimanale · Fondamenti dell'Informatica · Canale B · 05/10 – 09/10/2026
descrizione: >-
  Riassunto della settimana 2 di Fondamenti dell'Informatica (canale B, libro parte 1, §1.6–1.7 e §1.9–1.10):
  complemento a 2, cambio di segno, somme e overflow, notazione in eccesso, virgola mobile a 8 bit e troncamento,
  compressione con e senza perdita, run-length, Huffman, codifica relativa, LZW, GIF, JPEG, MP3, MPEG, bit di parità,
  distanza di Hamming, e il piano per i quiz della parte 1.
lede: >-
  Le tre lezioni della settimana in poche pagine: i metodi di conversione da sapere a memoria, le idee della
  compressione, i codici che scoprono gli errori, e come affrontare i quiz della parte 1, che finisce qui.
materiale: libro
scheda:
  Lezioni: "[03](03_interi_con_segno_virgola_mobile.html) lun 05/10, §1.6–1.7 · [04](04_compressione_errori_comunicazione.html) gio 08/10, §1.9–1.10 · [05](05_esercizi_circuiti_rappresentazioni.html) ven 09/10, esercizi"
  Tempo di ripasso: 40–50 minuti
fonte: >-
  Gli appunti delle lezioni 03, 04 e 05 di Fondamenti dell'Informatica (canale B), scritti sul libro di testo, parte 1,
  §1.6–1.7 e §1.9–1.10
appunti_html: appunti/FDA/riassunto_settimana_02.html
genera_html: true
---

## In breve

- I numeri **negativi** si scrivono in **complemento a 2**: la moneta più a sinistra vale con il segno meno, −128 con 8 bit. Con 8 bit si va da −128 a 127.
- Nella **notazione in eccesso** si legge il numero senza segno e si toglie sempre lo stesso valore: 8 con 4 bit, 4 con 3 bit.
- Nel formato del libro un numero con la virgola sta in un byte: **segno**, **esponente** di 3 bit in eccesso 4, **mantissa** di 4 bit. Le cifre che non ci stanno si perdono: è il **troncamento**.
- **Comprimere** vuol dire scrivere gli stessi dati con meno bit, senza perdita o con perdita.
- Il **bit di parità** scopre un errore; con la **distanza di Hamming** il codice del libro ne corregge uno.
- La parte 1 del libro finisce qui. All'esame tornano conversioni, complemento a 2, virgola mobile, circuiti e Hamming: 9 quiz in 45 minuti.

## 03 · Numeri negativi e virgola mobile (lun 05/10)

Il complemento a 2 è un contachilometri di bit: andando indietro da 0000 si arriva a 1111, che vale −1.

| Che cosa fare | Come |
|---|---|
| leggere un byte in complemento a 2 | la moneta di sinistra vale −128, le altre come sempre: 11111010 = −128 + 64 + 32 + 16 + 8 + 2 = −6 |
| cambiare segno | copia da destra fino al primo 1 compreso, poi inverti tutti gli altri bit |
| sommare | in colonna, come senza segno; il riporto che esce a sinistra si butta |
| sottrarre | cambia segno al secondo numero, poi somma |
| riconoscere l'overflow | due numeri con lo stesso segno danno un risultato con il segno opposto |
| leggere in eccesso 8 | leggi senza segno e togli 8: 1110 = 14 − 8 = 6 |

> [!METODO] Dal numero al byte in virgola mobile
> 1. Il segno: 0 se positivo, 1 se negativo.
> 2. Scrivi il numero in base 2 e sposta la virgola subito prima del primo 1: quante posizioni hai spostato è l'esponente, positivo se sei andato a sinistra.
> 3. Le prime 4 cifre dopo la virgola sono la mantissa; le altre si perdono.
> 4. L'esponente più 4, scritto con 3 bit.
>
> 3,625 è 11,101 in base 2: virgola spostata di 2, quindi esponente 2 + 4 = 6, cioè 110; mantissa 1110, perché l'ultimo 1 si perde. Il byte è **0 110 1110**, che vale 3,5: è il quiz delle simulazioni 2023/24.

```grafico
titolo: 3,625 nel formato a 8 bit del libro: un bit di segno, 3 bit di esponente in eccesso 4 (110 = 6 − 4 = 2), 4 bit di mantissa. L'ultima cifra di 0,11101 non entra: il byte vale 3,5.
x: 0 9.6
y: 0 3
assi: no
griglia: no
poligono: 0.2 1.2 1.2 1.2 1.2 2.2 0.2 2.2 | verde
poligono: 1.2 1.2 2.2 1.2 2.2 2.2 1.2 2.2 | blu
poligono: 2.2 1.2 3.2 1.2 3.2 2.2 2.2 2.2 | blu
poligono: 3.2 1.2 4.2 1.2 4.2 2.2 3.2 2.2 | blu
poligono: 4.2 1.2 5.2 1.2 5.2 2.2 4.2 2.2 | ambra
poligono: 5.2 1.2 6.2 1.2 6.2 2.2 5.2 2.2 | ambra
poligono: 6.2 1.2 7.2 1.2 7.2 2.2 6.2 2.2 | ambra
poligono: 7.2 1.2 8.2 1.2 8.2 2.2 7.2 2.2 | ambra
testo: 0.7 1.7 | verde | "0"
testo: 1.7 1.7 | blu | "1"
testo: 2.7 1.7 | blu | "1"
testo: 3.7 1.7 | blu | "0"
testo: 4.7 1.7 | ambra | "1"
testo: 5.7 1.7 | ambra | "1"
testo: 6.7 1.7 | ambra | "1"
testo: 7.7 1.7 | ambra | "0"
testo: 0.7 0.7 | verde | "segno"
testo: 2.7 0.7 | blu | "esponente"
testo: 6.2 0.7 | ambra | "mantissa"
poligono: 8.4 1.2 9.4 1.2 9.4 2.2 8.4 2.2 | grigio | tratteggio
testo: 8.9 1.7 | grigio | "1"
testo: 8.9 0.7 | grigio | "persa"
```

::: prova Quanto vale 10000001 in complemento a 2? E 0110 in eccesso 8?
10000001 vale −128 + 1 = −127. 0110 vale 6 − 8 = −2.
:::

> [!RICORDA]
> - Il bit di sinistra dice il segno, ma vale −128: 10000001 non è −1.
> - Un decimo in base 2 non finisce mai: in virgola mobile non è mai esatto.

## 04 · Compressione ed errori (gio 08/10)

**Senza perdita** si riottengono esattamente i dati di prima: serve per testi, programmi e numeri. **Con perdita** si ottiene qualcosa di molto simile: va bene per foto, suoni e video.

| Metodo | L'idea | Perdita |
|---|---|---|
| run-length | al posto di una ripetizione, il simbolo e quante volte si ripete | no |
| Huffman | codici corti ai simboli frequenti; nessun codice è l'inizio di un altro | no |
| codifica relativa | il primo dato intero, poi solo le differenze | no |
| LZW | un dizionario che cresce mentre si legge | no |
| GIF | al massimo 256 colori, poi LZW | sì, se i colori erano di più |
| JPEG | luminosità per ogni pixel, colore come media su 2 × 2 pixel | sì |
| MP3 | toglie i suoni che l'orecchio non sente | sì |
| MPEG | alcuni fotogrammi interi, degli altri le differenze | sì |

I bit che viaggiano possono cambiare. Con la **parità dispari** si aggiunge un bit, a sinistra, perché gli 1 siano dispari: 01101001 ha quattro 1, quindi diventa **1**01101001. Se all'arrivo gli 1 sono pari, c'è un errore.

La **distanza di Hamming** è il numero di posti in cui due file di bit sono diverse: 1010 e 0110 distano 2. Il codice del libro ha lettere di 6 bit a distanza almeno 3: una parola con un errore resta più vicina alla lettera giusta.

::: prova Due errori in un byte con il bit di parità: si scoprono?
No. Due bit cambiati lasciano gli 1 dispari, e il controllo non vede niente. La parità scopre solo un numero dispari di errori.
:::

> [!RICORDA]
> - Distanza minima 3: corregge un errore e ne rivela due. Distanza minima 2, come la parità: ne rivela uno e non corregge.
> - Huffman: si uniscono sempre i due pesi più piccoli.

## 05 · Esercizi sulla parte 1 (ven 09/10)

Una lezione senza argomenti nuovi, per ripassare tutta la parte 1 con i metodi e le domande delle simulazioni del 2023/24.

| Tipo di domanda | Metodo | Controllo |
|---|---|---|
| circuito | tabella di tutte le righe: 8 con 3 ingressi | una riga sbagliata basta per scartare una formula |
| esadecimale | gruppi di 4 bit da destra | ogni cifra torna a 4 bit |
| base 2 e base 10 | monete, divisioni per 2, raddoppio dopo la virgola | riconverti il risultato |
| complemento a 2 | moneta di sinistra negativa | senza segno meno 256 |
| virgola mobile | segno, esponente più 4, 4 cifre | rileggi il byte |
| testo, immagini, suono | byte per simbolo, larghezza × altezza × 3, campioni × byte × canali × secondi | scrivi i fattori prima di moltiplicare |
| Hamming | conta le colonne diverse | conta due volte |

> [!TRAPPOLA] Gli errori più frequenti nei quiz
> Leggere un byte in complemento a 2 come se fosse senza segno; cercare l'overflow nel riporto finale invece che nel segno; arrotondare la mantissa invece di troncarla; dimenticare una riga nella tabella di un circuito; contare un byte per simbolo in UTF-8.

::: prova Quanto vale B5 in base 10? E quante righe ha la tabella di un circuito con 4 ingressi?
B5 = 11 · 16 + 5 = 181. Con 4 ingressi le righe sono $2^4 = 16$.
:::

> [!RICORDA]
> - 9 quiz in 45 minuti: circa 5 minuti a domanda, meno di uno per le conversioni.
> - Ogni risultato si controlla al contrario.

## Verso l'esame

- **Parte 1 finita.** Dal 12/10 comincia la parte 2 del libro, la logica: [lezione 06](06_proposizioni_connettivi_tavole.html).
- Nelle simulazioni del 2023/24 la parte 1 compare con: distanza di Hamming, 3,625 in virgola mobile, complemento a 2 su 8 bit, circuiti e flip-flop.
- Appelli 2026/27: venerdì 29/01/2027 e giovedì 18/02/2027, alle 9:00, con Safe Exam Browser. Servono almeno 18 punti; da 24 in su si può fare anche la domanda aperta.
- Da fare adesso: rifai tutti gli esercizi della lezione 05 senza guardare la soluzione, cronometrandoti.

## Domande di ripasso

::: domanda Con 8 bit in complemento a 2, qual è il numero più piccolo e quale il più grande?
−128, cioè 10000000, e 127, cioè 01111111.
:::

::: domanda Quando c'è overflow in una somma in complemento a 2?
Quando due numeri con lo stesso segno danno un risultato con il segno opposto. Un positivo più un negativo non va mai in overflow.
:::

::: domanda Come si legge un numero in eccesso 4 con 3 bit?
Si legge senza segno e si toglie 4: 110 vale 6 − 4 = 2.
:::

::: domanda Che cos'è l'errore di troncamento?
La perdita delle cifre che non entrano nei 4 bit della mantissa: per esempio 3,625 diventa 3,5.
:::

::: domanda Che differenza c'è tra compressione con e senza perdita?
Senza perdita si riottengono esattamente i dati di prima; con perdita si ottiene qualcosa di molto simile, buttando dettagli che non si notano.
:::

::: domanda Perché JPEG conserva bene la luminosità e meno il colore?
Perché l'occhio nota le differenze di luminosità più di quelle di colore: si risparmia dove l'occhio non se ne accorge.
:::

::: domanda Che cosa vuol dire che un codice ha distanza minima 3?
Che due parole del codice differiscono sempre in almeno 3 posti: un errore si corregge scegliendo la parola più vicina, due errori si scoprono.
:::

## Quiz d'esame

Le domande vere che conosco sono quelle delle due simulazioni d'esame ufficiali del 2023/24. Qui ci sono tutte quelle sugli argomenti di questa settimana: distanza di Hamming, virgola mobile e complemento a 2. La compressione nelle simulazioni non c'era. Le risposte le ho ricontrollate con un programma.

```quiz
D: Simulazione d'esame 1, 2023/24, domanda 1. Calcolare la distanza di Hamming tra le coppie 01011101 e 00101101; 01011100 e 00101100; 01101100 e 01101110; 01111100 e 01111110. Quali sono le quattro distanze, nell'ordine?
- 1, 1, 3, 3
+ 3, 3, 1, 1
- 3, 3, 2, 2
- 2, 2, 1, 1
- 3, 4, 1, 1
= Nelle prime due coppie le file sono diverse nei posti 2, 3 e 4; nelle ultime due solo nel posto 7. La risposta più insidiosa è 3, 4, 1, 1: chi conta male la seconda coppia conta anche una colonna uguale. Si scrivono le due file una sotto l'altra e si segnano le colonne diverse.

D: Simulazioni d'esame 1 (domanda 2) e 2 (domanda 1), 2023/24. Il numero 3,625 nel formato a 8 bit del libro: segno, 3 bit di esponente in eccesso 4, 4 bit di mantissa. Quale affermazione è giusta?
- In virgola fissa è 11.111 e in virgola mobile 01101101.
- In virgola mobile è 11101110, senza troncamento.
+ In virgola fissa è 11.101; in virgola mobile è 01101110, e c'è troncamento solo in virgola mobile.
- In virgola fissa è 111.01, e c'è troncamento in tutte e due.
- In virgola mobile è 01101110, senza troncamento.
= 3,625 = 11,101. Spostando la virgola di due posti a sinistra viene 0,11101: esponente 2, cioè 110 in eccesso 4, e cinque cifre. La mantissa tiene 1110 e perde l'ultimo 1: il byte 01101110 vale 3,5, quindi c'è troncamento. La risposta più insidiosa è l'ultima: il byte è giusto, ma il troncamento c'è.

D: Simulazione d'esame 2, 2023/24, domanda 8. Quanto vale 10000001 in complemento a 2 su 8 bit?
- $-1$
- $129$
+ $-127$
- $-128$
- $1$
= Il bit di sinistra vale $-128$: $-128 + 1 = -127$. Controllo: senza segno vale 129, e $129 - 256 = -127$. La risposta più insidiosa è $-1$: legge il primo bit come un segno meno davanti a 0000001, che non è il complemento a 2. $-128$ è 10000000.

D: Simulazione d'esame 2, 2023/24, domanda 8. Quale riga dà i valori giusti di 11111111, 01010101 e 00001111 in complemento a 2 su 8 bit?
- $255$, $85$, $15$
+ $-1$, $85$, $15$
- $-1$, $-85$, $-15$
- $-127$, $85$, $15$
- $-1$, $-43$, $15$
= 11111111 vale $-128 + 127 = -1$. Gli altri due cominciano con 0, quindi si leggono come senza segno: 85 e 15. La risposta più insidiosa è la prima: legge tutto senza segno. $-127$ sarebbe 10000001.
```

## Fonti

- Le lezioni complete: [03 · Numeri negativi e numeri in virgola mobile](03_interi_con_segno_virgola_mobile.html), [04 · Comprimere i dati ed errori di comunicazione](04_compressione_errori_comunicazione.html), [05 · Esercizi sulla parte 1](05_esercizi_circuiti_rappresentazioni.html), con gli strumenti interattivi, i quiz e i riferimenti al libro.
- Regole d'esame e appelli: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md).
