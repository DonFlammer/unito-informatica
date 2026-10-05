---
corso: FDA
lezione: "03"
titolo: Numeri negativi e numeri in virgola mobile
data: 2026-10-05
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 03 · Libro, parte 1, §1.6–1.7
descrizione: >-
  Appunti della lezione 03 di Fondamenti dell'Informatica (canale B): gli interi con il segno in complemento a 2
  (lettura, cambio di segno, somme, sottrazioni e overflow), la notazione in eccesso e i numeri con la virgola nel
  formato a 8 bit del libro (segno, esponente in eccesso 4, mantissa), con l'errore di troncamento; strumenti
  interattivi, quiz dalle simulazioni d'esame ed esercizi svolti.
lede: >-
  Con i bit si scrivono anche i numeri negativi e i numeri con la virgola. Come un contachilometri che torna indietro
  da zero diventa il modo di scrivere i negativi, come si sommano senza guardare il segno, e come un byte tiene un
  numero con la virgola, perdendo a volte qualche cifra.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 1 (Brookshear, cap. 1), §1.6–1.7
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 1 (J. G. Brookshear, D. Brylow, Computer Science: an overview, cap. 1), §1.6
  «Storing Integers» e §1.7 «Storing Fractions», con le risposte alle loro domande nell'appendice pubblicata sul
  Moodle del canale A; diario della lezione del 05/10/2026 del canale B; lucidi del canale A 2026/27 sulla codifica
  dei dati; simulazioni d'esame 2023/24
appunti_html: appunti/FDA/03_interi_con_segno_virgola_mobile.html
genera_html: true
---

## In breve

- Con i bit della lezione 02 si scrivono solo i numeri da 0 in su. Per i **numeri negativi** si usa il **complemento a 2**: è un contachilometri di bit che, tornando indietro da 0000, segna 1111, cioè −1.
- In complemento a 2 il bit più a sinistra dice il segno: 0 per i positivi e lo zero, 1 per i negativi. Con 4 bit si va da −8 a 7, con 8 bit da −128 a 127.
- Per **cambiare segno** copi i bit da destra fino al primo 1 compreso e inverti tutti gli altri. Oppure inverti tutti i bit e aggiungi 1.
- Le **somme** si fanno in colonna come nella lezione 02, e il riporto che esce a sinistra si butta. Sottrarre vuol dire sommare l'opposto. C'è **overflow** quando due numeri con lo stesso segno danno un risultato con il segno opposto.
- Nella **notazione in eccesso** leggi i bit come un numero senza segno e togli sempre lo stesso numero: con 4 bit togli 8, con 3 bit togli 4.
- I numeri con la virgola si scrivono in **virgola mobile**. Nel formato del libro il primo bit è il **segno**, i 3 bit dopo sono l'**esponente**, che dice di quanto spostare la virgola, e gli ultimi 4 la **mantissa**, cioè le cifre.
- Quando le cifre non entrano nei 4 bit della mantissa, le ultime si perdono: è l'**errore di troncamento**. Per questo un decimo non si scrive mai in modo esatto.
- All'esame tornano tutte e tre: complemento a 2, notazione in eccesso e virgola mobile. Nelle simulazioni del 2023/24 c'è un quiz sul complemento a 2 con 8 bit e uno sul numero 3,625 in virgola mobile.

> [!CANALI]
> Nel canale B è la lezione di lunedì 05/10, dalle 9 alle 11. Per il docente è la lezione 4, perché la prima è stata un'introduzione: qui è la 03. Il diario del canale B la riassume così: «Interi col segno in complemento in base 2. Excess notation, cambio di segno e addizione in complemento in base 2» (§1.6, *Storing Integers*) e «Floating point notation» (§1.7, *Storing Fractions*). La sezione 1.8, sul linguaggio Python, è stata omessa dal docente: qui non c'è. Nel programma del canale B è esclusa, ma la mappa comune dei tre canali la elenca: se vuoi esserne sicuro, chiedilo al docente. Qui gli argomenti sono nell'ordine del libro: complemento a 2, somme, notazione in eccesso, virgola mobile. Nel canale A il complemento a 2 è nelle ultime pagine dei lucidi «Cenni sulla codifica dei dati» di Felice Cardone (Moodle del canale A, id 3851, aperto agli ospiti). Nel canale C le stesse sezioni sono nei lucidi del docente.

## Il contachilometri all'indietro (libro, §1.6)

Nella [lezione 02](02_testo_colori_suoni_binario.html) hai scritto in bit i numeri da 0 in su. Ma servono anche i numeri negativi: una temperatura di −3 gradi, un conto in rosso di −50 euro, l'ascensore che scende al piano −1. Il computer però ha solo bit. Non c'è un posto dove mettere il segno meno.

### Tornare indietro da zero

Riprendi il contachilometri della lezione 02, quello del motorino con tre cifre. Segna 000. Ora immagina di spingere il motorino all'indietro per un chilometro. Il contachilometri gira al contrario e segna 999. Un altro chilometro all'indietro: 998.

Quindi 999 sta un passo prima di 000: fa la parte di −1. Il 998 fa la parte di −2, e così via. Basta mettersi d'accordo: da 000 a 499 ci sono i numeri soliti, da 500 a 999 i negativi.

Con i bit si fa la stessa cosa. Prendi un contatore di 3 bit fermo su 000.

- Un passo avanti: 001, cioè 1. Poi 010, cioè 2, e 011, cioè 3.
- Un passo indietro da 000: il contatore gira e segna 111. Quindi 111 è −1.
- Ancora indietro: 110 è −2, 101 è −3, 100 è −4.

Questo modo di scrivere i numeri con il segno si chiama **complemento a 2** (*two's complement*). È quello che usano i computer per gli interi. Ecco le tabelle con 3 bit e con 4 bit, come nel libro.

| Bit | 011 | 010 | 001 | 000 | 111 | 110 | 101 | 100 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Valore | 3 | 2 | 1 | 0 | −1 | −2 | −3 | −4 |

| Positivi e zero | Valore | Negativi | Valore |
|:-:|--:|:-:|--:|
| 0111 | 7 | 1111 | −1 |
| 0110 | 6 | 1110 | −2 |
| 0101 | 5 | 1101 | −3 |
| 0100 | 4 | 1100 | −4 |
| 0011 | 3 | 1011 | −5 |
| 0010 | 2 | 1010 | −6 |
| 0001 | 1 | 1001 | −7 |
| 0000 | 0 | 1000 | −8 |

Guarda la tabella con 4 bit. Si notano tre cose.

1. **Il bit a sinistra dice il segno**: 0 per i positivi e per lo zero, 1 per i negativi. Si chiama **bit di segno** (*sign bit*).
2. I positivi si scrivono come nella lezione 02, con uno 0 davanti: 0101 è 5.
3. −1 è fatto di soli 1: 111 con 3 bit, 1111 con 4, 11111111 con 8. È il passo prima di zero.

> [!IDEA]
> Il complemento a 2 è un contachilometri di bit. In avanti da zero ci sono i positivi. All'indietro da zero il contatore gira, e ci sono i negativi: −1 è tutto 1.

::: prova Con 4 bit, che numero è 1110? E come si scrive −3?
1110 è due passi indietro da 0000: 1111 è −1, 1110 è −2. Quindi vale −2.

−3 è tre passi indietro: 1111, 1110, 1101. Quindi −3 si scrive 1101.
:::

### Leggere un numero: la moneta con il segno meno

Contare i passi all'indietro va bene vicino a zero. Per gli altri numeri c'è un modo più veloce, con le monete della lezione 02.

In complemento a 2 la moneta più a sinistra vale **con il segno meno**. Con 4 bit le monete sono −8, 4, 2 e 1. Il numero vale, come sempre, la somma delle monete sotto cui c'è un 1.

| Bit | 1 | 0 | 1 | 0 |
|---|:-:|:-:|:-:|:-:|
| Moneta | −8 | 4 | 2 | 1 |
| La dai? | sì | no | sì | no |

Quindi 1010 vale −8 + 2 = −6. Controlla nella tabella: è proprio −6.

Un altro esempio: 0110 ha il bit di segno a 0, quindi la moneta da −8 non c'è. Vale 4 + 2 = 6.

Con 8 bit le monete sono −128, 64, 32, 16, 8, 4, 2 e 1. Prendi 11111010. Le monete positive sono 64, 32, 16, 8 e 2, che fanno 122. Con la moneta da −128: −128 + 122 = −6.

Perché la moneta di sinistra ha il segno meno? Leggi 1111 senza segno, come nella lezione 02: vale 15. Ma nel contachilometri 1111 è −1, cioè 16 in meno. Succede a tutti i negativi con 4 bit: letti senza segno valgono 16 in più del loro valore vero. Dare alla prima moneta −8 invece di 8 toglie proprio 16.

> [!METODO] Leggere un numero in complemento a 2
> 1. Guarda il bit a sinistra. Se è 0, il numero è positivo o zero: leggilo come nella lezione 02.
> 2. Se è 1, il numero è negativo. Somma le monete, ma dai a quella di sinistra il segno meno: −8 con 4 bit, −128 con 8 bit.
> 3. Controllo: letto senza segno, un negativo vale 16 in più con 4 bit, 256 in più con 8 bit.

Il controllo su 1010: senza segno vale 8 + 2 = 10, e 10 − 16 = −6. Torna.

Nello strumento parti da 0000 e premi più volte «−1»: il contatore gira a 1111, poi a 1110, come il contachilometri. Clicca sui bit per vedere come cambia il valore. L'ultima riga, la notazione in eccesso, la vedi più avanti.

```widget codifica
titolo: Il contachilometri di 4 bit: premi +1 e −1
modo: interi
bit: 0000
n: 4
```

::: prova Con 8 bit, quanto valgono 10000001 e 01111111?
10000001: le monete sono −128 e 1, quindi vale −128 + 1 = −127.

01111111: il bit di segno è 0. Ci sono tutte le altre monete: 64 + 32 + 16 + 8 + 4 + 2 + 1 = 127.
:::

### Fin dove si arriva

Con 4 bit i numeri vanno da −8 a 7. Il più piccolo, 1000, ha solo la moneta da −8. Il più grande, 0111, ha tutte le monete positive: 4 + 2 + 1 = 7.

Non è simmetrico: −8 c'è, 8 no. Le file di 4 bit sono 16. Metà cominciano con 1, e sono gli 8 negativi da −1 a −8. Le altre 8 cominciano con 0, e una di loro è lo zero: ai positivi restano solo i numeri da 1 a 7.

Con un numero di bit qualunque, che chiamiamo $n$, la moneta di segno vale $2^{n-1}$. Si legge «due elevato alla n meno uno»: l'esponente è $n - 1$, un bit in meno di quelli che hai. Con 4 bit è $2^3 = 8$. Quindi:

- il numero più piccolo è $-2^{n-1}$: solo la moneta di segno;
- il numero più grande è $2^{n-1} - 1$: tutte le monete positive, che fanno la moneta di segno meno 1.

| Bit | Dal più piccolo | Al più grande |
|--:|--:|--:|
| 3 | −4 | 3 |
| 4 | −8 | 7 |
| 6 | −32 | 31 |
| 8 | −128 | 127 |
| 16 | −32768 | 32767 |
| 32 | −2147483648 | 2147483647 |

I computer di oggi usano 32 o 64 bit per gli interi: con 32 bit si superano già i due miliardi.

> [!TRAPPOLA] «Con 8 bit si arriva a 255»
> Vale solo senza segno, come nella lezione 02. In complemento a 2 metà delle file servono per i negativi, e con 8 bit si arriva a 127. Lo stesso byte 11111111 vale 255 senza segno e −1 in complemento a 2: decide la regola con cui lo leggi.

::: prova Con 6 bit, qual è il numero più grande e quale il più piccolo?
La moneta di segno vale $2^5 = 32$. Il più piccolo è 100000, cioè −32. Il più grande è 011111, cioè 16 + 8 + 4 + 2 + 1 = 31. È la domanda 4 del §1.6, con la risposta del libro.
:::

> [!RICORDA]
> - Complemento a 2 = contachilometri di bit: all'indietro da 0000 si arriva a 1111, cioè −1.
> - Bit a sinistra 0: positivo o zero. Bit a sinistra 1: negativo. La moneta di sinistra vale con il segno meno: −8 con 4 bit, −128 con 8.
> - Con $n$ bit si va da $-2^{n-1}$ a $2^{n-1} - 1$: con 4 bit da −8 a 7, con 8 bit da −128 a 127.

## Cambiare segno a un numero (libro, §1.6)

Sul contachilometri, 2 e −2 stanno alla stessa distanza da zero: due passi avanti e due passi indietro. Cambiare segno vuol dire passare da uno all'altro. Sui bit ci sono due modi per farlo. Il primo è quello del libro.

### Il metodo del libro: copia, poi inverti

**Invertire** un bit vuol dire cambiarlo: 0 diventa 1, e 1 diventa 0.

> [!METODO] Cambiare segno: copia fino al primo 1, poi inverti
> 1. Parti da destra e copia i bit così come sono, fino al primo 1 compreso.
> 2. Inverti tutti i bit che restano a sinistra.

> [!ESEMPIO] Da 6 a −6, con 4 bit
> 6 si scrive 0110.
> 1. Da destra: lo 0 si copia. Poi viene il primo 1, e si copia anche lui. Hai copiato «10».
> 2. A sinistra restano «01». Invertiti diventano «10».
> 3. Il risultato è 1010.
>
> Controllo con le monete: 1010 vale −8 + 2 = −6.

Funziona anche al contrario. Parti da −6, cioè 1010: copi «10», inverti «10» e ottieni «01». Il risultato è 0110, cioè 6.

### L'altro modo: inverti tutto e aggiungi 1

Molti libri usano un altro metodo, che dà lo stesso risultato.

> [!METODO] Cambiare segno: inverti e aggiungi 1
> 1. Inverti tutti i bit.
> 2. Aggiungi 1, con la somma in colonna della lezione 02.

Ancora da 6 a −6. Inverti 0110 e ottieni 1001. Aggiungi 1: 1001 + 0001 = 1010. È di nuovo −6.

Perché funziona? Somma un numero e il suo invertito: in ogni colonna c'è un 1 e uno 0, e viene sempre 1. Per esempio 0110 + 1001 = 1111. Ma 1111 è −1. Quindi l'invertito di 6 è il numero che, sommato a 6, dà −1: è −7. Sul contachilometri è un passo troppo indietro. Aggiungendo 1 si arriva a −6.

Nello strumento della sezione precedente c'è il pulsante «cambia segno»: provalo su qualche numero.

### Da un numero negativo ai bit

> [!METODO] Scrivere un numero negativo in complemento a 2
> 1. Scrivi il numero senza il segno meno in base 2, con tutti i bit richiesti: metti zeri a sinistra se servono.
> 2. Cambia segno, con uno dei due metodi.
> 3. Controlla con le monete.

> [!ESEMPIO] −17 con 8 bit (domanda 2 del §1.6)
> 1. 17 = 16 + 1. Con 8 bit: 00010001.
> 2. Da destra copi il primo 1. Inverti gli altri sette bit, 0001000, che diventano 1110111.
> 3. Il risultato è 11101111.
> 4. Controllo: le monete positive sono 64, 32, 8, 4, 2 e 1, che fanno 111. Con la moneta da −128: −128 + 111 = −17.

### Due casi speciali

- **Lo zero.** 0000 non ha nessun 1: si copia tutto, e resta 0000. Lo zero è l'opposto di sé stesso, e ce n'è uno solo.
- **Il numero più piccolo.** Con 4 bit è 1000, cioè −8. Il primo 1 da destra è quello del segno: si copia tutto e resta 1000. Cambiare segno a −8 non funziona, perché 8 con 4 bit non c'è.

> [!OLTRE] · lo stesso numero con più bit
> −6 con 4 bit è 1010. Con 8 bit è 11111010: è la risposta del libro alla domanda 2 del §1.6. Per allungare un numero si copia il bit di segno verso sinistra: i positivi si allungano con degli 0, i negativi con degli 1. Sul contachilometri è naturale: con più cifre, −1 resta tutto 1. Attenzione: 00001010 non è −6. Il bit di segno è 0, e vale 10.

> [!OLTRE] · due modi che i computer non usano più
> Il programma ufficiale del corso nomina anche il **complemento a 1**: per cambiare segno si invertono tutti i bit, senza aggiungere 1. Con 4 bit −6 diventa 1001. C'è poi la notazione **segno e modulo**: il primo bit è il segno, gli altri il valore, e −6 è 1110. Tutti e due hanno due zeri: in complemento a 1 sono 0000 e 1111, in segno e modulo 0000 e 1000. In più le somme in colonna danno risultati sbagliati e vanno corrette. Per questo i computer usano il complemento a 2.

::: prova (a) Con 8 bit, cambia segno a 01010101. (b) Scrivi −1 con 8 bit.
(a) Da destra copi il primo 1. Inverti gli altri sette bit, 0101010, che diventano 1010101. Il risultato è 10101011. Controllo: 01010101 vale 64 + 16 + 4 + 1 = 85, e 10101011 vale −128 + 32 + 8 + 2 + 1 = −85. È la domanda 3 del §1.6.

(b) 1 con 8 bit è 00000001. Copi l'ultimo 1 e inverti gli altri sette: 11111111. È il numero fatto di soli 1, come deve essere −1.
:::

> [!RICORDA]
> - Cambiare segno: copia da destra fino al primo 1 compreso, poi inverti il resto. Oppure: inverti tutto e aggiungi 1.
> - Un negativo si scrive così: prima il numero senza segno, con tutti i bit, poi si cambia segno.
> - Lo zero resta zero. Il numero più piccolo, 1000 con 4 bit, non ha l'opposto.

## Sommare e sottrarre con il segno (libro, §1.6)

Il complemento a 2 ha un grande vantaggio: si somma esattamente come nella lezione 02, senza guardare i segni. C'è una sola regola nuova: il riporto che esce dalla colonna più a sinistra si butta via.

Torna al contachilometri. Segna 998, cioè −2. Fai 3 chilometri in avanti: 999, 000, 001. Ora segna 001, cioè 1. E infatti −2 + 3 = 1. In colonna, 998 + 003 fa 1001: quattro cifre. Il contachilometri ne ha tre e mostra 001. L'1 a sinistra si perde, ed è giusto così.

### Tre somme con 4 bit

**3 + 2.** È la somma della lezione 02: 0011 + 0010 = 0101, cioè 5.

**−3 + (−2).** In bit 1101 + 1110. La prima riga della tabella contiene i riporti che arrivano in ogni colonna. La colonna «fuori» è il posto che non c'è.

| | fuori | 4ª | 3ª | 2ª | 1ª |
|---|:-:|:-:|:-:|:-:|:-:|
| riporti | | 1 | 0 | 0 | |
| −3 | | 1 | 1 | 0 | 1 |
| −2 | | 1 | 1 | 1 | 0 |
| somma | (1) | 1 | 0 | 1 | 1 |

1. 1 + 0 fa 1: scrivi 1, niente riporto.
2. 0 + 1 fa 1: scrivi 1, niente riporto.
3. 1 + 1 fa 10: scrivi 0 e riporti 1.
4. 1 + 1 più il riporto fa 11: scrivi 1 e riporti 1. Questo riporto esce dai 4 bit e si butta.

Restano 1011. Con le monete: −8 + 2 + 1 = −5. Giusto.

**7 + (−5).** In bit 0111 + 1011.

| | fuori | 4ª | 3ª | 2ª | 1ª |
|---|:-:|:-:|:-:|:-:|:-:|
| riporti | | 1 | 1 | 1 | |
| 7 | | 0 | 1 | 1 | 1 |
| −5 | | 1 | 0 | 1 | 1 |
| somma | (1) | 0 | 0 | 1 | 0 |

1. 1 + 1 fa 10: scrivi 0 e riporti 1.
2. 1 + 1 più il riporto fa 11: scrivi 1 e riporti 1.
3. 1 + 0 più il riporto fa 10: scrivi 0 e riporti 1.
4. 0 + 1 più il riporto fa 10: scrivi 0. Il riporto esce e si butta.

Restano 0010, cioè 2. Giusto: 7 − 5 = 2.

Nello strumento clicca sui bit dei due numeri: sotto vedi la somma in colonna e il valore di ogni numero con il segno.

```widget codifica
titolo: Somma in complemento a 2 con 4 bit: clicca sui bit
modo: somma
a: 0111
b: 1011
complemento: si
n: 4
```

### Sottrarre vuol dire sommare l'opposto

Togliere 5 è come aggiungere −5: 7 − 5 = 7 + (−5). Quindi una sottrazione si fa in due passi: cambi segno al secondo numero e sommi. Il computer non ha bisogno di un circuito per sottrarre: gli bastano quello che cambia segno e quello che somma.

> [!ESEMPIO] 4 − 6 con 4 bit (domanda 7 del §1.6)
> 1. 4 è 0100. 6 è 0110, e con il cambio di segno diventa 1010.
> 2. 0100 + 1010: da destra 0 + 0 fa 0, 0 + 1 fa 1, 1 + 0 fa 1, 0 + 1 fa 1. Nessun riporto.
> 3. Il risultato è 1110. Con le monete: −8 + 4 + 2 = −2. Giusto: 4 − 6 = −2.

::: prova (a) Con 4 bit calcola 1110 + 0011. (b) Calcola 3 − 2 con 4 bit, come una somma.
(a) È −2 + 3. Da destra: 0 + 1 fa 1. Poi 1 + 1 fa 10: scrivi 0 e riporti 1. Poi 1 + 0 più il riporto fa 10: scrivi 0 e riporti 1. Poi 1 + 0 più il riporto fa 10: scrivi 0, e il riporto esce e si butta. Resta 0001, cioè 1. È la domanda 5 del §1.6.

(b) 3 è 0011. 2 è 0010, e con il cambio di segno diventa 1110. Poi 0011 + 1110: da destra 1 + 0 fa 1; 1 + 1 fa 10, scrivi 0 e riporti 1; 0 + 1 più il riporto fa 10, scrivi 0 e riporti 1; 0 + 1 più il riporto fa 10, scrivi 0 e il riporto si butta. Resta 0001, cioè 1.
:::

> [!RICORDA]
> - In complemento a 2 si somma in colonna come senza segno. Il riporto che esce a sinistra si butta.
> - Per sottrarre, cambia segno al secondo numero e somma.

## Quando il risultato non ci sta: l'overflow (libro, §1.6)

Con 4 bit il numero più grande è 7. Prova a calcolare 5 + 4, cioè 0101 + 0100.

1. 1 + 0 fa 1.
2. 0 + 0 fa 0.
3. 1 + 1 fa 10: scrivi 0 e riporti 1.
4. 0 + 0 più il riporto fa 1.

Il risultato è 1001, che in complemento a 2 vale −8 + 1 = −7. È sbagliato: 5 + 4 fa 9, e 9 con 4 bit non c'è.

Guarda il contachilometri. Parti da 5 e fai 4 passi in avanti: 6, 7, poi 1000, che è −8, poi 1001, che è −7. Hai scavalcato il confine tra il positivo più grande e il negativo più piccolo. Questo è l'**overflow** dei numeri con il segno: il risultato vero non ci sta nei bit che hai.

Lo stesso succede con due negativi. Calcola −6 + (−6), cioè 1010 + 1010. Da destra: 0 + 0 fa 0; 1 + 1 fa 10, scrivi 0 e riporti 1; 0 + 0 più il riporto fa 1; 1 + 1 fa 10, scrivi 0 e il riporto si butta. Resta 0100, cioè 4. Ma −6 − 6 fa −12, che con 4 bit non c'è.

In tutti e due i casi il segno del risultato è sbagliato. Due positivi non possono dare un negativo, e due negativi non possono dare un positivo. È questo il segnale dell'overflow.

> [!METODO] Riconoscere l'overflow in complemento a 2
> 1. Guarda i bit di segno dei due numeri. Se sono diversi, l'overflow non c'è mai: hai finito.
> 2. Se sono uguali, fai la somma e guarda il bit di segno del risultato.
> 3. Se è diverso da quello dei due numeri, c'è overflow.

### Un positivo più un negativo non va mai in overflow

È la domanda 8 del §1.6. Sommando un positivo e un negativo, il risultato sta sempre tra i due numeri. Per esempio 7 + (−8) fa −1, che sta tra −8 e 7. I due numeri ci stanno nei bit che hai, e quindi ci sta anche il risultato.

> [!TRAPPOLA] Il riporto finale non dice niente
> Nella lezione 02, per i numeri senza segno, l'overflow c'era quando usciva un riporto a sinistra. Con il segno non funziona così. In −3 + (−2) esce un riporto, ma il risultato −5 è giusto. In 5 + 4 non esce nessun riporto, ma c'è overflow. Con il complemento a 2 guarda solo i segni.

Nello strumento della sezione precedente prova 0101 + 0100 e 1010 + 1010: lo strumento segnala l'overflow.

Con 32 bit si arriva oltre i due miliardi e l'overflow capita di rado. Ma capita, e un programma che conta oltre il massimo si ritrova con un numero negativo.

::: prova Con 4 bit: (a) 0101 + 0110; (b) 1010 + 0111. In quale c'è overflow?
(a) I due numeri sono positivi, 5 e 6. Da destra: 1 + 0 fa 1; 0 + 1 fa 1; 1 + 1 fa 10, scrivi 0 e riporti 1; 0 + 0 più il riporto fa 1. Il risultato è 1011, che è negativo: overflow. Infatti 5 + 6 = 11, e con 4 bit si arriva a 7.

(b) I segni sono diversi, quindi niente overflow. Da destra: 0 + 1 fa 1; 1 + 1 fa 10, scrivi 0 e riporti 1; 0 + 1 più il riporto fa 10, scrivi 0 e riporti 1; 1 + 0 più il riporto fa 10, scrivi 0 e il riporto si butta. Resta 0001, cioè 1. Infatti −6 + 7 = 1. Sono due voci della domanda 6 del §1.6.
:::

> [!RICORDA]
> - Overflow in complemento a 2: due numeri con lo stesso segno danno un risultato con il segno opposto.
> - Un positivo più un negativo non va mai in overflow.
> - Il riporto che esce a sinistra non c'entra: conta solo il segno.

## La notazione in eccesso (libro, §1.6)

Immagina un palazzo con otto piani sotto terra e sette sopra. I pulsanti dell'ascensore sono numerati da 0 a 15, dal piano più basso in su. Il piano terra è il pulsante 8. Per sapere a che piano sei, togli 8 dal numero del pulsante: il pulsante 11 porta al piano 3, il pulsante 5 al piano −3.

La **notazione in eccesso** (*excess notation*) fa la stessa cosa con i bit. Leggi i bit come un numero senza segno, come nella lezione 02, e poi togli sempre lo stesso numero. Con 4 bit si toglie 8, e si chiama **notazione in eccesso 8** (*excess eight*).

| Bit | Senza segno | In eccesso 8 | | Bit | Senza segno | In eccesso 8 |
|:-:|--:|--:|---|:-:|--:|--:|
| 1111 | 15 | 7 | | 0111 | 7 | −1 |
| 1110 | 14 | 6 | | 0110 | 6 | −2 |
| 1101 | 13 | 5 | | 0101 | 5 | −3 |
| 1100 | 12 | 4 | | 0100 | 4 | −4 |
| 1011 | 11 | 3 | | 0011 | 3 | −5 |
| 1010 | 10 | 2 | | 0010 | 2 | −6 |
| 1001 | 9 | 1 | | 0001 | 1 | −7 |
| 1000 | 8 | 0 | | 0000 | 0 | −8 |

> [!METODO] Leggere e scrivere in eccesso 8
> - Dai bit al numero: leggi i bit senza segno e togli 8. Per esempio 1110 è 14, e 14 − 8 = 6.
> - Dal numero ai bit: aggiungi 8 e scrivi il risultato in base 2 con 4 bit. Per esempio −5 + 8 = 3, cioè 0011.

Con 3 bit si toglie 4: è la **notazione in eccesso 4**. I bit vanno da 000, cioè −4, a 111, cioè 3. In generale con $n$ bit si toglie $2^{n-1}$, la stessa moneta di segno del complemento a 2.

| Bit | 111 | 110 | 101 | 100 | 011 | 010 | 001 | 000 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| In eccesso 4 | 3 | 2 | 1 | 0 | −1 | −2 | −3 | −4 |

Questa tabella ti serve nella virgola mobile, tra poco.

### Il legame con il complemento a 2

Con 4 bit l'eccesso 8 va da −8 a 7, come il complemento a 2. Confronta le due scritture dello stesso numero.

| Numero | Complemento a 2 | Eccesso 8 |
|--:|:-:|:-:|
| −6 | 1010 | 0010 |
| −1 | 1111 | 0111 |
| 0 | 0000 | 1000 |
| 5 | 0101 | 1101 |

Cambia solo il bit a sinistra. Quindi per passare da una notazione all'altra basta invertire il primo bit.

> [!TRAPPOLA] In eccesso il bit a sinistra è al contrario
> In complemento a 2 il bit a sinistra è 1 per i negativi. In eccesso è 1 per i positivi e lo zero, e 0 per i negativi. Prima di leggere un numero, guarda bene quale notazione chiede la domanda.

A che cosa serve questa notazione? In eccesso, il numero più grande ha anche i bit più grandi, letti senza segno: l'ordine dei numeri è l'ordine dei bit. Confrontare due numeri diventa facile, e per questo l'eccesso si usa per l'esponente della virgola mobile.

Nello strumento i bit sono 3: guarda la riga dell'eccesso 4 e premi «+1» e «−1».

```widget codifica
titolo: Tre letture degli stessi 3 bit
modo: interi
bit: 110
n: 3
```

::: prova (a) Quanto vale 0010 in eccesso 8? (b) Come si scrive 0 in eccesso 8? (c) Si può scrivere 9 in eccesso 8?
(a) Senza segno 0010 è 2, e 2 − 8 = −6.

(b) 0 + 8 = 8, cioè 1000.

(c) No. Il numero più grande è 1111, cioè 15 − 8 = 7. È la domanda 11 del §1.6: per lo stesso motivo 6 non si scrive in eccesso 4, che arriva solo a 3.
:::

> [!RICORDA]
> - Eccesso 8 con 4 bit: leggi senza segno e togli 8. Eccesso 4 con 3 bit: togli 4.
> - Per scrivere un numero: aggiungi 8 (o 4) e scrivi in base 2.
> - Eccesso e complemento a 2 differiscono solo nel bit a sinistra.

## La virgola che si sposta (libro, §1.7)

Sul display di una calcolatrice ci stanno poche cifre. Per scrivere 3500000 bastano due cifre, 35, e un'istruzione: «scrivi 0,35 e sposta la virgola di 7 posti a destra». Per 0,0035 bastano le stesse cifre: «scrivi 0,35 e sposta la virgola di 2 posti a sinistra».

Un numero, quindi, si può scrivere con due cose: le cifre, e di quanti posti spostare la virgola. In fisica si scrive $0{,}35 \cdot 10^7$, che si legge «zero virgola trentacinque per dieci alla settima». Moltiplicare per $10^7$ vuol dire spostare la virgola di 7 posti a destra.

In base 2 vale la stessa idea. Ricorda le monete della lezione 02: spostare la virgola di un posto a destra fa passare ogni moneta a quella successiva, che vale il doppio. Quindi il numero raddoppia. Spostarla a sinistra lo dimezza. Per esempio 0,11 vale 3/4, e 1,1 vale 1 e 1/2, il doppio.

### Perché non la virgola fissa

Nella lezione 02 la virgola stava in un posto fisso: si chiama **virgola fissa**. Prova a mettere in un byte 4 bit prima della virgola e 4 dopo. Il numero più piccolo, oltre lo zero, è 0000,0001, cioè 1/16. Il più grande è 1111,1111, cioè 15 e 15/16. Non ci sta 20, e non ci sta 1/32.

La **virgola mobile** (*floating point*) usa alcuni bit per dire dove va la virgola. Così con pochi bit si scrivono sia numeri grandi sia numeri piccoli.

### Il formato del libro: segno, esponente, mantissa

Il libro usa un formato da un byte, diviso in tre pezzi.

| Bit | 1° | 2°, 3°, 4° | 5°, 6°, 7°, 8° |
|---|:-:|:-:|:-:|
| Pezzo | segno | esponente | mantissa |
| Esempio: 01101011 | 0 | 110 | 1011 |

- Il **segno** è un bit: 0 per i positivi, 1 per i negativi. Qui gli altri bit non cambiano con il segno: −2 e 2 differiscono solo nel primo bit.
- La **mantissa** (*mantissa*) sono le 4 cifre. La virgola si immagina a sinistra: la mantissa 1011 vuol dire 0,1011.
- L'**esponente** (*exponent*) sono 3 bit in eccesso 4, cioè un numero da −4 a 3. Dice di quanti posti spostare la virgola: a destra se è positivo, a sinistra se è negativo.

> [!METODO] Dal byte al numero
> 1. Dividi il byte: 1 bit di segno, 3 di esponente, 4 di mantissa.
> 2. Scrivi la mantissa con «0,» davanti.
> 3. Leggi l'esponente in eccesso 4: senza segno, meno 4.
> 4. Sposta la virgola di tanti posti quanto dice l'esponente: a destra se è positivo, a sinistra se è negativo. Se mancano cifre, aggiungi degli zeri.
> 5. Leggi il numero con le monete della lezione 02, dopo la virgola 1/2, 1/4, 1/8. Se il segno è 1, mettici il meno.

> [!ESEMPIO] 01101011, l'esempio del libro
> 1. Segno 0, esponente 110, mantissa 1011.
> 2. La mantissa è 0,1011.
> 3. 110 senza segno è 6, e 6 − 4 = 2.
> 4. Sposti la virgola di 2 posti a destra: 10,11.
> 5. Prima della virgola 10 vale 2. Dopo la virgola 1/2 + 1/4 = 3/4. Il segno è 0: il numero è 2 e 3/4.

> [!ESEMPIO] 00111100, con l'esponente negativo
> 1. Segno 0, esponente 011, mantissa 1100.
> 2. La mantissa è 0,1100.
> 3. 011 senza segno è 3, e 3 − 4 = −1.
> 4. Sposti la virgola di un posto a sinistra. Davanti manca una cifra, e aggiungi uno zero: 0,01100.
> 5. Dopo la virgola ci sono le monete 1/4 e 1/8: 2/8 + 1/8 = 3/8.

Lo stesso numero si scrive anche così: $0{,}1011 \cdot 2^2$, che si legge «zero virgola uno zero uno uno per due alla seconda». Moltiplicare per $2^2$ vuol dire spostare la virgola di 2 posti a destra.

> [!RIPASSO] Le potenze di 2 con l'esponente negativo
> $2^3 = 8$ vuol dire moltiplicare per 2 tre volte. L'esponente negativo vuol dire dividere: $2^{-1}$ si legge «due alla meno uno» e vale 1/2; $2^{-2} = 1/4$; $2^{-3} = 1/8$. Moltiplicare per $2^{-1}$ sposta la virgola di un posto a sinistra.

Nello strumento clicca sui bit: vedi i tre pezzi, la virgola che si sposta e il valore.

```widget codifica
titolo: Un byte in virgola mobile: clicca sui bit
modo: virgola
bit: 01101011
```

::: prova Che numeri sono (a) 01011010 e (b) 10101000?
(a) Segno 0, esponente 101, mantissa 1010. L'esponente è 5 − 4 = 1: la virgola va di un posto a destra, e 0,1010 diventa 1,010. Vale 1 + 1/4, cioè 1 e 1/4.

(b) Segno 1, esponente 010, mantissa 1000. L'esponente è 2 − 4 = −2: la virgola va di due posti a sinistra, e 0,1000 diventa 0,001000. Vale 1/8, con il meno: −1/8.
:::

> [!RICORDA]
> - Virgola mobile del libro: 1 bit di segno, 3 bit di esponente in eccesso 4, 4 bit di mantissa.
> - La mantissa ha la virgola a sinistra. L'esponente dice di quanti posti spostarla: a destra se positivo, a sinistra se negativo.
> - Per leggere: mantissa con «0,» davanti, sposta la virgola, leggi con le monete, metti il segno.

## Dal numero al byte (libro, §1.7)

Ora il viaggio al contrario: hai un numero e vuoi il suo byte. Si fanno gli stessi passi della lettura, all'indietro.

> [!METODO] Dal numero al byte
> 1. **Segno**: 0 se il numero è positivo, 1 se è negativo. Da qui in poi lavora senza il segno meno.
> 2. Scrivi il numero in base 2, come nella lezione 02.
> 3. Sposta la virgola finché sta subito prima del primo 1, cioè finché il numero comincia con «0,1». Conta i posti. Se l'hai spostata a sinistra, l'esponente è positivo; se a destra, è negativo.
> 4. **Mantissa**: i primi 4 bit dopo la virgola. Se sono meno di 4, aggiungi degli zeri a destra.
> 5. **Esponente**: aggiungi 4 e scrivi il risultato con 3 bit.
> 6. Metti in fila segno, esponente e mantissa.

> [!ESEMPIO] 1 e 1/8
> 1. È positivo: segno 0.
> 2. 1 e 1/8 in base 2 è 1,001.
> 3. Sposti la virgola di un posto a sinistra: 0,1001. L'esponente è 1.
> 4. La mantissa è 1001.
> 5. 1 + 4 = 5, cioè 101.
> 6. Il byte è 0 101 1001, cioè 01011001.
>
> Controllo: 0,1001 con la virgola un posto a destra è 1,001, cioè 1 e 1/8.

> [!ESEMPIO] 3/8
> 1. È positivo: segno 0.
> 2. 3/8 = 1/4 + 1/8, cioè 0,011.
> 3. Il primo 1 è nella seconda posizione dopo la virgola. Sposti la virgola di un posto a destra: 0,11. L'esponente è −1.
> 4. La mantissa è 1100: 11 con due zeri in fondo.
> 5. −1 + 4 = 3, cioè 011.
> 6. Il byte è 0 011 1100, cioè 00111100. È il secondo esempio della sezione precedente.

### Perché «subito prima del primo 1»

3/8 si potrebbe scrivere anche in un altro modo. Con l'esponente 0, cioè 100, e la mantissa 0110, il byte è 01000110: vale 0,0110, cioè ancora 3/8. Lo stesso numero avrebbe due byte diversi. In più la mantissa 0110 spreca il primo bit con uno 0, e ha posto solo per tre cifre utili.

Per questo si sceglie sempre la mantissa che comincia con 1. Si chiama **forma normalizzata** (*normalized form*). Così ogni numero ha un solo byte, e tutti e 4 i bit della mantissa portano cifre utili. Lo zero non ha nessun 1: si scrive 00000000.

> [!TRAPPOLA] Le due direzioni dell'esponente
> Se per arrivare a «0,1…» sposti la virgola a sinistra, il numero era grande e l'esponente è positivo. Se la sposti a destra, il numero era piccolo e l'esponente è negativo. Ricontrolla sempre rileggendo il byte che hai scritto.

::: prova Scrivi nel formato del libro (a) −1 e 1/2 e (b) 5/16.
(a) Segno 1. 1 e 1/2 è 1,1. La virgola va un posto a sinistra: 0,11, esponente 1. Mantissa 1100. Esponente 1 + 4 = 5, cioè 101. Il byte è 11011100. È la voce (d) della domanda 1 del §1.7, letta al contrario.

(b) Segno 0. 5/16 = 4/16 + 1/16 = 1/4 + 1/16, cioè 0,0101. La virgola va un posto a destra: 0,101, esponente −1. Mantissa 1010. Esponente −1 + 4 = 3, cioè 011. Il byte è 00111010.
:::

> [!RICORDA]
> - Per scrivere un numero: segno, base 2, virgola subito prima del primo 1, mantissa di 4 bit, esponente più 4 con 3 bit.
> - Forma normalizzata: la mantissa comincia sempre con 1.
> - Virgola spostata a sinistra: esponente positivo. A destra: esponente negativo.

## I bit che si perdono: il troncamento (libro, §1.7)

La mantissa ha 4 bit. Che cosa succede quando le cifre sono di più? Si perdono. L'esempio del libro è 2 e 5/8.

1. È positivo: segno 0.
2. 2 e 5/8 = 2 + 1/2 + 1/8, cioè 10,101.
3. Sposti la virgola di due posti a sinistra: 0,10101. L'esponente è 2, cioè 110.
4. Le cifre sono cinque, 10101, ma la mantissa ne tiene quattro: 1010. L'ultimo 1 si perde.
5. Il byte è 01101010.

Rileggi il byte: 0,1010 con la virgola due posti a destra è 10,10, cioè 2 e 1/2. È sparito 1/8. Questo è l'**errore di troncamento** (*truncation error*), chiamato anche **errore di arrotondamento** (*round-off error*).

Nello strumento scrivi un numero e guarda quali cifre restano fuori dalla mantissa.

```widget codifica
titolo: Dal numero al byte: quali cifre si perdono?
modo: virgola
numero: 2,625
```

### Un decimo non si scrive esatto

Nella lezione 02 hai visto che un decimo, in base 2, non finisce mai: 0,000110011001100…, con 0011 che si ripete per sempre. Qualunque mantissa, anche di cento bit, lo taglia da qualche parte.

Nel formato del libro va così.

1. Un decimo è 0,0001100110011…
2. La virgola va spostata di tre posti a destra: 0,1100110011… L'esponente è −3, cioè −3 + 4 = 1, scritto 001.
3. La mantissa tiene 1100, e tutto il resto si perde.
4. Il byte è 00011100.

Rileggi: 0,1100 con la virgola tre posti a sinistra è 0,0001100, cioè 1/16 + 1/32 = 3/32. In base 10 fa 0,09375, invece di 0,1. Ecco perché nei programmi 0.1 + 0.2 non dà esattamente 0.3, come hai visto nella lezione 02.

### L'ordine delle somme conta

Il computer tronca dopo ogni operazione. Allora anche l'ordine dei conti cambia il risultato. L'esempio del libro è 2 e 1/2 + 1/8 + 1/8.

**Da sinistra.** 2 e 1/2 + 1/8 fa 2 e 5/8. È il numero di prima: si tronca a 2 e 1/2. Poi 2 e 1/2 + 1/8 di nuovo: ancora 2 e 5/8, ancora troncato a 2 e 1/2. Il risultato è 2 e 1/2: i due ottavi sono spariti.

**Prima i piccoli.** 1/8 + 1/8 fa 1/4, che si scrive esatto. Poi 2 e 1/2 + 1/4 fa 2 e 3/4, cioè 10,11: le cifre sono 1011, e stanno nella mantissa. Il risultato è 2 e 3/4, quello giusto.

> [!IDEA]
> Un numero piccolo sommato a uno grande finisce nelle cifre tagliate. Sommati tra loro, i numeri piccoli diventano più grandi e non si perdono. Regola del libro: quando sommi tanti numeri, comincia dai più piccoli.

### Il più grande e il più piccolo

- Il numero più grande è 01111111: esponente 3 e mantissa 1111. 0,1111 con la virgola tre posti a destra è 111,1, cioè 7 e 1/2.
- Il positivo più piccolo in forma normalizzata è 00001000: esponente −4 e mantissa 1000. 0,1 con la virgola quattro posti a sinistra è 0,00001, cioè 1/32.

È la domanda 4 del §1.7. Il libro aggiunge che molti computer, vicino allo zero, accettano anche mantisse che non cominciano con 1. Allora il positivo più piccolo è 00000001, cioè 1/256.

I numeri positivi in forma normalizzata sono pochi: 8 esponenti per 8 mantisse che cominciano con 1, cioè 64 numeri in tutto. Tutti gli altri si arrotondano.

> [!APPROFONDIMENTO] I computer veri: 32 e 64 bit, lo standard IEEE 754
> Questa parte non compare nei quiz delle simulazioni. I computer usano la stessa idea con più bit, secondo lo standard **IEEE 754** (del 1985, aggiornato nel 2008 e nel 2019).
>
> | Formato | Bit in tutto | Segno | Esponente | Mantissa | Nome in C |
> |---|--:|--:|--:|--:|---|
> | precisione singola | 32 | 1 | 8 | 23 | `float` |
> | precisione doppia | 64 | 1 | 11 | 52 | `double` |
>
> Tre differenze dal formato del libro.
> 1. L'esponente è in eccesso 127 con 8 bit, in eccesso 1023 con 11 bit.
> 2. La mantissa normalizzata comincia con «1,» e non con «0,1». Quell'1 è sempre lì e non si scrive: si guadagna un bit.
> 3. Alcune file di bit sono riservate: lo zero, l'infinito e «non è un numero» (*NaN*, *not a number*).
>
> Un `float` tiene circa 7 cifre decimali, un `double` circa 16. Ma anche così un decimo non è esatto.

::: prova Scrivi nel formato del libro (a) 4 e 1/2 e (b) 1 e 1/16. C'è troncamento?
(a) 4 e 1/2 è 100,1. La virgola va tre posti a sinistra: 0,1001, esponente 3, cioè 111. La mantissa è 1001. Il byte è 01111001, senza troncamento.

(b) 1 e 1/16 è 1,0001. La virgola va un posto a sinistra: 0,10001, esponente 1, cioè 101. Le cifre sono cinque: la mantissa tiene 1000 e perde l'ultimo 1. Il byte è 01011000, che vale 1: c'è troncamento, e si perde 1/16.
:::

> [!RICORDA]
> - Se le cifre sono più di 4, la mantissa tiene le prime 4 e le altre si perdono: è l'errore di troncamento.
> - Un decimo in base 2 non finisce mai: in virgola mobile non è mai esatto.
> - Il computer tronca dopo ogni operazione: quando sommi tanti numeri, comincia dai più piccoli.
> - Nel formato del libro: il più grande è 7 e 1/2, il positivo normalizzato più piccolo è 1/32.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $n$ | «enne» | il numero di bit che hai | con un byte, $n = 8$ |
| $2^{n-1}$ | «due elevato alla n meno uno» | la moneta di segno con $n$ bit; in eccesso, il numero da togliere | con 4 bit, 8 |
| $-2^{n-1}$ | «meno due elevato alla n meno uno» | il numero più piccolo in complemento a 2 con $n$ bit | con 8 bit, −128 |
| $2^{n-1} - 1$ | «due elevato alla n meno uno, meno uno» | il numero più grande in complemento a 2 con $n$ bit | con 8 bit, 127 |
| eccesso 8 | «eccesso otto» | leggi i 4 bit senza segno e togli 8 | 1110 vale 6 |
| 0 110 1011 | «segno, esponente, mantissa» | i tre pezzi di un byte in virgola mobile | vale 2 e 3/4 |
| $0{,}1011 \cdot 2^2$ | «zero virgola uno zero uno uno per due alla seconda» | sposta la virgola di 2 posti a destra | 10,11 |
| $2^{-1}$ | «due alla meno uno» | un mezzo: sposta la virgola di un posto a sinistra | $2^{-3} = 1/8$ |
| $0{,}35 \cdot 10^7$ | «zero virgola trentacinque per dieci alla settima» | sposta la virgola di 7 posti a destra, in base 10 | 3500000 |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti, al computer, con Safe Exam Browser.

**Che cosa serve di questa lezione**

1. **Complemento a 2.** La simulazione d'esame 2 del 2023/24, domanda 8, chiede di convertire in base 10 quattro numeri in complemento a 2 su 8 bit: 11111111, 01010101, 00001111 e 10000001. Sono i primi tre quiz qui sotto.
2. **Virgola mobile e troncamento.** Nella simulazione 1 (domanda 2) e nella simulazione 2 (domanda 1) c'è lo stesso quiz su 3,625: virgola fissa, virgola mobile nel formato a 8 bit del libro, con l'esponente in eccesso a 3 bit, e troncamento.
3. **Notazione in eccesso.** Serve dentro la virgola mobile, e la scheda del corso consiglia di allenarsi anche con l'eccesso.
4. **Somme e overflow.** Sono le domande 5–8 del §1.6, e usano la somma della lezione 02.

> [!ESAME] Velocità
> 5 minuti a quiz. Le monete con il segno meno (−8, −128) leggono un numero in complemento a 2 in pochi secondi. Impara a memoria la tabella dell'esponente in eccesso 4: 100 è 0, 101 è 1, 110 è 2, 111 è 3, 011 è −1, 010 è −2, 001 è −3, 000 è −4.

### Una domanda vera, letta insieme

> [!ESEMPIO] Simulazione d'esame 1, 2023/24, domanda 2
> Il testo: «Consideriamo il numero 3,625. Selezionare le corrette risposte relative a: (i) rappresentazione binaria del numero in virgola fissa; (ii) rappresentazione del numero in virgola mobile; e, (iii) troncamento nelle rappresentazioni.» Il formato è quello a 8 bit del libro, con l'esponente in eccesso a 3 bit.
>
> In pratica chiede tre cose: 3,625 in base 2 con la virgola; lo stesso numero nel byte del libro; se in uno dei due si perdono cifre.
>
> 1. **Virgola fissa.** 3 è 11. Per 0,625 raddoppi: 1,25 dà 1; 0,5 dà 0; 1 dà 1. Quindi 0,625 = 0,101, e 3,625 = 11,101. Controllo: 2 + 1 + 1/2 + 1/8 = 3,625. Qui non si perde niente.
> 2. **Virgola mobile.** Segno 0. Sposti la virgola di due posti a sinistra: 0,11101. Esponente 2, cioè 2 + 4 = 6, scritto 110. Le cifre sono cinque, 11101: la mantissa tiene 1110. Il byte è 01101110.
> 3. **Troncamento.** Solo nella virgola mobile: l'ultimo 1 si perde, e 01101110 vale 11,10, cioè 3,5.
>
> Le risposte giuste sono quindi «Rappresentazione fissa: 11.101», «Rappresentazione Virgola Mobile: 01101110» e «Troncamento presente solo nella rappresentazione in virgola mobile». Nei quiz di Moodle la virgola si scrive con il punto.

> [!METODO] Le quattro operazioni da saper fare
> 1. **Leggere in complemento a 2**: monete, con quella di sinistra negativa.
> 2. **Cambiare segno**: copia fino al primo 1 da destra, inverti il resto.
> 3. **Overflow**: stesso segno nei due numeri, segno diverso nel risultato.
> 4. **Virgola mobile**: segno; base 2; virgola subito prima del primo 1; mantissa di 4 bit; esponente più 4.

**Errori da evitare**

- Leggere un numero in complemento a 2 come senza segno: 11111111 non è 255 ma −1.
- Cambiare segno invertendo soltanto i bit: quello è il complemento a 1, e dà un numero sbagliato di 1.
- Allungare un negativo con degli zeri a sinistra: 1010 con 8 bit è 11111010, non 00001010.
- Cercare l'overflow nel riporto finale: con il segno contano solo i segni.
- Confondere il bit a sinistra dell'eccesso con quello del complemento a 2: sono al contrario.
- Sbagliare la direzione dell'esponente: virgola spostata a sinistra, esponente positivo.
- Scrivere l'esponente in base 2 senza aggiungere 4.
- Arrotondare l'ultima cifra della mantissa invece di troncarla: il formato del libro taglia e basta.

## Quiz

```quiz
D: Simulazione d'esame 2, 2023/24, domanda 8. Quanto vale in base 10 il numero 11111111, in complemento a 2 su 8 bit?
- $255$
+ $-1$
- $-127$
- $-128$
- $1$
= In complemento a 2 la moneta di sinistra vale −128: le altre sette fanno 127, quindi $-128 + 127 = -1$. Sul contachilometri, 11111111 è il passo prima di 00000000. La risposta $255$ legge il byte senza segno. La risposta $-127$ è la lettura in segno e modulo: segno meno e 1111111. La risposta $-128$ è 10000000. La risposta $1$ è il valore dell'opposto, non quello del numero.

D: Simulazione d'esame 2, 2023/24, domanda 8. Quanto vale in base 10 il numero 10000001, in complemento a 2 su 8 bit?
- $-1$
- $129$
+ $-127$
- $-126$
- $127$
= Le monete sono −128 e 1: $-128 + 1 = -127$. Controllo con il cambio di segno: copi l'1 a destra e inverti il resto, e viene 01111111, cioè 127; quindi il numero è −127. La risposta $-1$ è la lettura in segno e modulo: segno meno e valore 1. La risposta $129$ legge il byte senza segno. La risposta $127$ dimentica il segno meno. La risposta $-126$ sbaglia il conto di uno.

D: Simulazione d'esame 2, 2023/24, domanda 8. Quanto valgono in base 10 i numeri 01010101 e 00001111, in complemento a 2 su 8 bit?
+ $85$ e $15$
- $-85$ e $-15$
- $-43$ e $15$
- $85$ e $-1$
- $170$ e $15$
= Tutti e due hanno il bit di segno a 0: sono positivi e si leggono come nella lezione 02. 01010101 vale $64 + 16 + 4 + 1 = 85$, 00001111 vale $8 + 4 + 2 + 1 = 15$. La risposta con $-85$ e $-15$ li crede negativi, ma il bit a sinistra è 0. La risposta $85$ e $-1$ legge solo gli ultimi 4 bit di 00001111, come se fossero un numero di 4 bit. La risposta $-43$ dimentica lo 0 iniziale e legge 1010101 con 7 bit. La risposta $170$ legge i bit invertiti, 10101010.

D: Con 4 bit in complemento a 2, quale fila di bit è l'opposto di 0110?
- $1001$
+ $1010$
- $1110$
- $0110$
- $0101$
= 0110 è 6, e l'opposto è −6. Da destra copi «10» fino al primo 1 compreso, poi inverti «01» in «10»: viene 1010. Controllo: $-8 + 2 = -6$. La risposta $1001$ inverte soltanto i bit: è il complemento a 1 e vale −7. La risposta $1110$ cambia soltanto il primo bit, come in segno e modulo: in complemento a 2 vale −2. La risposta $0110$ non cambia niente. La risposta $0101$ vale 5.

D: Con 8 bit in complemento a 2, quali numeri si possono scrivere?
- da $0$ a $255$
+ da $-128$ a $127$
- da $-127$ a $127$
- da $-127$ a $128$
- da $-256$ a $255$
= Con $n$ bit si va da $-2^{n-1}$ a $2^{n-1} - 1$, e con 8 bit $2^7 = 128$: da −128 a 127. È la domanda 4 del §1.6. La risposta da 0 a 255 vale senza segno. Quella da −127 a 127 dimentica 10000000, che è −128: è l'intervallo del complemento a 1 e del segno e modulo, che hanno due zeri. Quella con 128 sbaglia il lato: lo zero toglie un posto ai positivi, non ai negativi. L'ultima conta 512 numeri, ma 8 bit ne danno 256.

D: Con 4 bit in complemento a 2, quale di queste somme va in overflow?
+ $0101 + 0110$
- $1110 + 0011$
- $1010 + 0111$
- $1101 + 1110$
- $0011 + 0010$
= L'overflow c'è quando due numeri con lo stesso segno danno un risultato con il segno opposto. $0101 + 0110$ è $5 + 6$: due positivi, e il risultato 1011 è negativo. Infatti 11 con 4 bit non c'è. $1110 + 0011$ e $1010 + 0111$ hanno segni diversi: non vanno mai in overflow. $1101 + 1110$ è $-3 + (-2) = -5$, che ci sta: esce un riporto a sinistra, ma il riporto non conta. $0011 + 0010$ fa 5, che ci sta.

D: Domanda 8 del §1.6 del libro. In complemento a 2 si sommano un numero positivo e uno negativo. Che cosa si può dire dell'overflow?
+ Non c'è mai overflow.
- C'è overflow ogni volta che esce un riporto dalla colonna di sinistra.
- C'è overflow quando il numero negativo è il più piccolo che si può scrivere.
- C'è sempre overflow, perché i segni sono diversi.
- Dipende dal numero di bit: con 4 bit può esserci, con 8 no.
= Il risultato di un positivo più un negativo sta sempre tra i due numeri. Per esempio $7 + (-8) = -1$, che sta tra −8 e 7. Se i due numeri ci stanno nei bit, ci sta anche il risultato: è la risposta del libro. Il riporto a sinistra non c'entra: in $7 + (-5)$ esce, e il risultato 2 è giusto. Anche con il negativo più piccolo il risultato ci sta. La risposta sui bit è sbagliata perché il ragionamento vale con qualunque numero di bit.

D: Quanto vale 1110 in notazione in eccesso 8?
- $14$
- $-2$
+ $6$
- $-6$
- $7$
= In eccesso 8 si legge senza segno e si toglie 8: 1110 è 14, e $14 - 8 = 6$. È la domanda 9 del §1.6, con la risposta del libro. La risposta $14$ dimentica di togliere 8. La risposta $-2$ legge il numero in complemento a 2. La risposta $-6$ fa la sottrazione al contrario, $8 - 14$. La risposta $7$ è 1111.

D: Come si scrive −5 in notazione in eccesso 8?
+ $0011$
- $1011$
- $1101$
- $0101$
- $1100$
= Si aggiunge 8 e si scrive in base 2: $-5 + 8 = 3$, cioè 0011. È la domanda 10 del §1.6. La risposta $1011$ è −5 in complemento a 2: le due notazioni differiscono proprio nel bit a sinistra. La risposta $1101$ è +5 in eccesso 8. La risposta $0101$ è 5 senza segno, che in eccesso vale −3. La risposta $1100$ vale 4.

D: Simulazione d'esame 1, 2023/24, domanda 2. Qual è la rappresentazione in virgola mobile del numero 3,625, nel formato a 8 bit del libro (1 bit di segno, 3 di esponente in eccesso, 4 di mantissa)?
- $01101101$
+ $01101110$
- $11101110$
- $01011101$
- $00101110$
= 3,625 è 11,101 in base 2. La virgola va spostata di due posti a sinistra: 0,11101, esponente 2, che in eccesso 4 è $2 + 4 = 6$, cioè 110. La mantissa tiene le prime quattro cifre, 1110, e l'ultimo 1 si perde. Il segno è 0. Il byte è 01101110. La risposta 01101101 ha una mantissa sbagliata: vale 3 e 1/4. La risposta 11101110 ha il segno 1, cioè negativo. La risposta 01011101 sposta la virgola di un posto solo. La risposta 00101110 scrive l'esponente 2 come 010, senza aggiungere 4.

D: Simulazione d'esame 1, 2023/24, domanda 2 (seconda parte). Per il numero 3,625, che cosa si può dire della virgola fissa e del troncamento?
+ In virgola fissa è 11,101; il troncamento c'è solo in virgola mobile.
- In virgola fissa è 11,101; il troncamento c'è in tutte e due le rappresentazioni.
- In virgola fissa è 11,111; il troncamento non c'è in nessuna delle due.
- In virgola fissa è 111,01; il troncamento c'è solo in virgola mobile.
- In virgola fissa è 11,101; il troncamento non c'è in nessuna delle due.
= 3 è 11, e 0,625 = 1/2 + 1/8 = 0,101: quindi 3,625 = 11,101, con tutte le cifre. In virgola mobile, invece, le cifre 11101 sono cinque e la mantissa ne tiene quattro: l'ultimo 1 si perde, e il byte 01101110 vale 3,5. Quindi il troncamento c'è solo in virgola mobile. 11,111 vale 3 e 7/8. 111,01 vale 7 e 1/4. Le risposte che dicono «troncamento in tutte e due» o «in nessuna» sbagliano una delle due rappresentazioni.

D: Quanto vale il byte 11011010 nel formato in virgola mobile del libro?
+ $-1\tfrac14$
- $1\tfrac14$
- $-\tfrac58$
- $-2\tfrac12$
- $-10$
= Segno 1, quindi negativo. Esponente 101, cioè $5 - 4 = 1$. Mantissa 1010, cioè 0,1010; con la virgola un posto a destra diventa 1,010, cioè 1 e 1/4. Il numero è $-1\tfrac14$. La risposta $1\tfrac14$ dimentica il segno. La risposta $-\tfrac58$ non sposta la virgola: 0,101 vale 5/8. La risposta $-2\tfrac12$ sposta la virgola di due posti. La risposta $-10$ legge la mantissa 1010 come un intero.

D: Qual è il numero più grande che si scrive nel formato in virgola mobile a 8 bit del libro?
- $7$
+ $7\tfrac12$
- $15$
- $127$
- $\tfrac{15}{16}$
= Il più grande ha segno 0, l'esponente più grande, 111, cioè 3, e la mantissa 1111. 0,1111 con la virgola tre posti a destra è 111,1, cioè 7 e 1/2: il byte è 01111111. È la domanda 4 del §1.7. La risposta $7$ perde l'ultima cifra dopo la virgola. La risposta $15$ legge la mantissa 1111 come un intero. La risposta $127$ legge tutto il byte come un intero. La risposta $\tfrac{15}{16}$ non sposta la virgola.

D: Nel formato del libro si calcola 2 e 1/2 + 1/8 + 1/8, da sinistra a destra, troncando dopo ogni somma. Che cosa si ottiene?
+ $2\tfrac12$
- $2\tfrac34$
- $2\tfrac58$
- $2\tfrac14$
- $3$
= 2 e 1/2 + 1/8 fa 2 e 5/8, cioè 10,101: cinque cifre. La mantissa ne tiene quattro e torna 2 e 1/2. Con il secondo 1/8 succede lo stesso. Il risultato è 2 e 1/2. La risposta $2\tfrac34$ è il risultato giusto, che si ottiene sommando prima i due ottavi: è l'esempio del libro sull'ordine delle somme. La risposta $2\tfrac58$ dimentica che anche il primo risultato si tronca. Le ultime due non vengono in nessun ordine.

D: Quale di questi numeri NON si scrive in modo esatto nel formato in virgola mobile del libro?
- $2\tfrac34$
- $\tfrac38$
- $7\tfrac12$
- $-\tfrac1{32}$
+ $0{,}1$
= Un decimo in base 2 è 0,000110011…, con 0011 che si ripete per sempre: nessuna mantissa basta. Nel formato del libro diventa 00011100, che vale 3/32, cioè 0,09375. Gli altri hanno al massimo quattro cifre dopo il primo 1: 2 e 3/4 è 10,11; 3/8 è 0,011; 7 e 1/2 è 111,1; 1/32 è 0,00001, con l'esponente −4, e il segno meno non cambia niente.
```

## Esercizi

::: esercizio base Domanda 1 del §1.6: dal complemento a 2 alla base 10
Scrivi in base 10 questi numeri in complemento a 2 con 5 bit: (a) 00011; (b) 01111; (c) 11100; (d) 11010; (e) 00000; (f) 10000.
::: soluzione
Con 5 bit le monete sono −16, 8, 4, 2, 1.

| Bit | Monete | Valore |
|:-:|---|--:|
| 00011 | 2 + 1 | 3 |
| 01111 | 8 + 4 + 2 + 1 | 15 |
| 11100 | −16 + 8 + 4 | −4 |
| 11010 | −16 + 8 + 2 | −6 |
| 00000 | nessuna | 0 |
| 10000 | −16 | −16 |

Sono le risposte del libro. Controllo su (c) con il cambio di segno: copi «100» e inverti «11» in «00»: 00100, cioè 4. Quindi 11100 è −4.
:::

::: esercizio base Domanda 2 del §1.6: dalla base 10 al complemento a 2
Scrivi in complemento a 2 con 8 bit: (a) 6; (b) −6; (c) −17; (d) 13; (e) −1; (f) 0.
::: soluzione
1. (a) 6 = 4 + 2: 00000110.
2. (b) Cambi segno a 00000110: copi «10», inverti il resto. Viene 11111010. Controllo: −128 + 122 = −6.
3. (c) 17 = 16 + 1: 00010001. Copi l'ultimo 1 e inverti il resto: 11101111. Controllo: −128 + 111 = −17.
4. (d) 13 = 8 + 4 + 1: 00001101.
5. (e) 1 è 00000001. Copi l'ultimo 1 e inverti il resto: 11111111.
6. (f) 00000000.

Sono le risposte del libro.
:::

::: esercizio base Domanda 3 del §1.6: cambiare segno
Questi numeri sono in complemento a 2 con 8 bit. Scrivi il loro opposto: (a) 00000001; (b) 01010101; (c) 11111100; (d) 11111110; (e) 00000000; (f) 01111111.
::: soluzione
Per ognuno: copi da destra fino al primo 1 compreso, poi inverti il resto.

| Numero | Copi | Inverti | Opposto | Valori |
|:-:|:-:|:-:|:-:|---|
| 00000001 | 1 | 0000000 → 1111111 | 11111111 | 1 e −1 |
| 01010101 | 1 | 0101010 → 1010101 | 10101011 | 85 e −85 |
| 11111100 | 100 | 11111 → 00000 | 00000100 | −4 e 4 |
| 11111110 | 10 | 111111 → 000000 | 00000010 | −2 e 2 |
| 00000000 | tutto | niente | 00000000 | 0 e 0 |
| 01111111 | 1 | 0111111 → 1000000 | 10000001 | 127 e −127 |

Sono le risposte del libro.
:::

::: esercizio base Domanda 4 del §1.6: il più grande e il più piccolo
Un computer scrive gli interi in complemento a 2. Qual è il numero più grande e quale il più piccolo, con (a) 4 bit, (b) 6 bit, (c) 8 bit?
::: soluzione
Il più piccolo è la sola moneta di segno, con il meno. Il più grande è la somma di tutte le altre monete, cioè la moneta di segno meno 1.

1. (a) 4 bit: la moneta di segno vale 8. Dal più piccolo −8 al più grande 7.
2. (b) 6 bit: vale 32. Da −32 a 31.
3. (c) 8 bit: vale 128. Da −128 a 127.

Sono le risposte del libro.
:::

::: esercizio base Domande 9 e 10 del §1.6: la notazione in eccesso 8
(a) Senza guardare la tabella, scrivi in base 10 questi numeri in eccesso 8: 1110, 0111, 1000, 0010, 0000, 1001. (b) Scrivi in eccesso 8: 5, −5, 3, 0, 7, −8.
::: soluzione
(a) Si legge senza segno e si toglie 8.

| Bit | Senza segno | Meno 8 |
|:-:|--:|--:|
| 1110 | 14 | 6 |
| 0111 | 7 | −1 |
| 1000 | 8 | 0 |
| 0010 | 2 | −6 |
| 0000 | 0 | −8 |
| 1001 | 9 | 1 |

(b) Si aggiunge 8 e si scrive con 4 bit.

| Numero | Più 8 | Bit |
|--:|--:|:-:|
| 5 | 13 | 1101 |
| −5 | 3 | 0011 |
| 3 | 11 | 1011 |
| 0 | 8 | 1000 |
| 7 | 15 | 1111 |
| −8 | 0 | 0000 |

Sono le risposte del libro.
:::

::: esercizio base Domanda 11 del §1.6: che cosa non ci sta
Si può scrivere 9 in eccesso 8? E 6 in eccesso 4? Perché?
::: soluzione
1. In eccesso 8 il numero più grande è 1111, cioè 15 − 8 = 7. Il 9 non ci sta.
2. Per scrivere 9 serve almeno l'eccesso 16, che usa 5 bit.
3. In eccesso 4 con 3 bit il più grande è 111, cioè 7 − 4 = 3. Il 6 non ci sta.

È la risposta del libro.
:::

::: esercizio base Lucidi del canale A: −5 con 6 bit
Scrivi −5 in complemento a 2 con 6 bit, in due modi: con il cambio di segno e con il metodo dei lucidi di Cardone. Nei lucidi un negativo −K, dove K è il numero senza il segno meno, si scrive come il numero senza segno $2^6 - K$.
::: soluzione
1. Con il cambio di segno: 5 con 6 bit è 000101. Copi l'ultimo 1, inverti gli altri cinque bit, 00010, che diventano 11101. Il risultato è 111011.
2. Con i lucidi: $2^6 = 64$, e $64 - 5 = 59$. In base 2, con le monete: 59 = 32 + 16 + 8 + 2 + 1, cioè 111011.
3. Controllo con le monete con il segno: −32 + 16 + 8 + 2 + 1 = −5.

È lo stesso numero. Il secondo metodo è il «16 in più» di questa lezione, con 6 bit al posto di 4: un negativo, letto senza segno, vale 64 in più.
:::

::: esercizio medio Domanda 5 del §1.6: somme in complemento a 2
Questi numeri sono in complemento a 2 con 4 bit. Fai le somme e controlla in base 10: (a) 0101 + 0010; (b) 0011 + 0001; (c) 0101 + 1010; (d) 1110 + 0011; (e) 1010 + 1110.
::: soluzione
1. (a) Nessun riporto: 0111. Controllo: 5 + 2 = 7.
2. (b) 1 + 1 fa 10, scrivi 0 e riporti 1; poi 1 + 0 più il riporto fa 10, scrivi 0 e riporti 1; poi 0 + 0 più il riporto fa 1. Viene 0100. Controllo: 3 + 1 = 4.
3. (c) Nessun riporto: in ogni colonna c'è un solo 1. Viene 1111. Controllo: 5 + (−6) = −1.
4. (d) 0 + 1 fa 1; 1 + 1 fa 10, scrivi 0 e riporti 1; 1 + 0 più il riporto fa 10, scrivi 0 e riporti 1; 1 + 0 più il riporto fa 10, scrivi 0 e il riporto si butta. Viene 0001. Controllo: −2 + 3 = 1.
5. (e) 0 + 0 fa 0; 1 + 1 fa 10, scrivi 0 e riporti 1; 0 + 1 più il riporto fa 10, scrivi 0 e riporti 1; 1 + 1 più il riporto fa 11, scrivi 1 e il riporto si butta. Viene 1000. Controllo: −6 + (−2) = −8.

Sono le risposte del libro.
:::

::: esercizio medio Domanda 6 del §1.6: somme con overflow
Fai le somme con 4 bit in complemento a 2 e di' quali risultati sono sbagliati per l'overflow: (a) 0100 + 0011; (b) 0101 + 0110; (c) 1010 + 1010; (d) 1010 + 0111; (e) 0111 + 0001.
::: soluzione
1. (a) 4 + 3: viene 0111, cioè 7. Due positivi, risultato positivo: giusto.
2. (b) 5 + 6: viene 1011. Due positivi, risultato negativo: overflow.
3. (c) −6 + (−6): viene 0100. Due negativi, risultato positivo: overflow.
4. (d) −6 + 7: segni diversi, niente overflow. Viene 0001, cioè 1.
5. (e) 7 + 1: viene 1000. Due positivi, risultato negativo: overflow. Sul contachilometri, un passo dopo 7 c'è −8.

Sono le risposte del libro.
:::

::: esercizio medio Domanda 7 del §1.6: sottrarre sommando
Scrivi i numeri in complemento a 2 con 4 bit, trasforma ogni conto in una somma, come fa un computer, e calcola: (a) 6 − (−1); (b) 3 − 2; (c) 4 − 6; (d) 2 + 4; (e) 1 − 5.
::: soluzione
Togliere un numero vuol dire aggiungere il suo opposto.

| Conto | Diventa | In bit | Risultato | Controllo |
|---|---|---|:-:|---|
| 6 − (−1) | 6 + 1 | 0110 + 0001 | 0111 | 7 |
| 3 − 2 | 3 + (−2) | 0011 + 1110 | 0001 | 1 |
| 4 − 6 | 4 + (−6) | 0100 + 1010 | 1110 | −2 |
| 2 + 4 | 2 + 4 | 0010 + 0100 | 0110 | 6 |
| 1 − 5 | 1 + (−5) | 0001 + 1011 | 1100 | −4 |

In (b) il riporto che esce a sinistra si butta. In (e): 1 + 1 fa 10, scrivi 0 e riporti 1; 0 + 1 più il riporto fa 10, scrivi 0 e riporti 1; 0 + 0 più il riporto fa 1; 0 + 1 fa 1. Viene 1100, cioè −8 + 4 = −4.

Sono le risposte del libro.
:::

::: esercizio medio Domanda 8 del §1.6: positivo più negativo
In complemento a 2, sommando un numero positivo e uno negativo, può esserci overflow? Spiega perché.
::: soluzione
1. L'overflow c'è quando il risultato è troppo grande, o troppo piccolo, per i bit che hai.
2. Sommando un positivo e un negativo, il risultato sta sempre tra i due numeri. Per esempio 5 + (−7) = −2, che sta tra −7 e 5.
3. I due numeri ci stanno nei bit, quindi ci sta anche il risultato.

No: non può esserci overflow. È la risposta del libro.
:::

::: esercizio medio Domanda 1 del §1.7: leggere la virgola mobile
Leggi questi byte nel formato in virgola mobile del libro: (a) 01001010; (b) 01101101; (c) 00111001; (d) 11011100; (e) 10101011.
::: soluzione
| Byte | Segno | Esponente | Mantissa | Virgola spostata | Valore |
|:-:|:-:|---|:-:|:-:|---|
| 01001010 | + | 100: 0 | 0,1010 | 0,1010 | 5/8 |
| 01101101 | + | 110: 2 | 0,1101 | 11,01 | 3 e 1/4 |
| 00111001 | + | 011: −1 | 0,1001 | 0,01001 | 9/32 |
| 11011100 | − | 101: 1 | 0,1100 | 1,100 | −1 e 1/2 |
| 10101011 | − | 010: −2 | 0,1011 | 0,001011 | −11/64 |

Due conti per esteso.

1. (c) 0,01001 ha le monete 1/4 e 1/32: 8/32 + 1/32 = 9/32.
2. (e) 0,001011 ha le monete 1/8, 1/32 e 1/64: 8/64 + 2/64 + 1/64 = 11/64. Con il segno: −11/64.

Sono le risposte del libro.
:::

::: esercizio medio Domanda 2 del §1.7: scrivere in virgola mobile
Scrivi nel formato del libro, e di' dove c'è troncamento: (a) 2 e 3/4; (b) 5 e 1/4; (c) 3/4; (d) −3 e 1/2; (e) −4 e 3/8.
::: soluzione
1. (a) 2 e 3/4 = 10,11. Virgola due posti a sinistra: 0,1011, esponente 2, cioè 110. Byte 01101011.
2. (b) 5 e 1/4 = 101,01. Virgola tre posti a sinistra: 0,10101, esponente 3, cioè 111. Le cifre sono cinque: la mantissa tiene 1010. Byte 01111010, che vale 5: troncamento.
3. (c) 3/4 = 0,11. La virgola è già prima del primo 1: esponente 0, cioè 100. Mantissa 1100. Byte 01001100.
4. (d) 3 e 1/2 = 11,1. Virgola due posti a sinistra: 0,111, esponente 2, cioè 110. Mantissa 1110, segno 1. Byte 11101110.
5. (e) 4 e 3/8 = 100,011. Virgola tre posti a sinistra: 0,100011, esponente 3, cioè 111. La mantissa tiene 1000 e perde 11. Segno 1. Byte 11111000, che vale −4: troncamento.

Sono le risposte del libro.
:::

::: esercizio medio Domanda 4 del §1.7: il più grande e il più piccolo
Nel formato del libro, qual è il numero più grande? E il positivo più piccolo?
::: soluzione
1. Il più grande: segno 0, esponente 111, cioè 3, mantissa 1111. 0,1111 con la virgola tre posti a destra è 111,1, cioè 7 e 1/2. Il byte è 01111111.
2. Il positivo più piccolo in forma normalizzata: esponente 000, cioè −4, mantissa 1000. 0,1 con la virgola quattro posti a sinistra è 0,00001, cioè 1/32. Il byte è 00001000.
3. Il libro aggiunge che molti computer, vicino allo zero, non chiedono la forma normalizzata. Allora il più piccolo è 00000001: 0,0001 con la virgola quattro posti a sinistra, cioè 0,00000001, che vale 1/256.
:::

::: esercizio medio Un byte, quattro letture
Il byte 01011100 viene letto (a) come intero senza segno, (b) in complemento a 2, (c) in eccesso 128, (d) nel formato in virgola mobile del libro. Quanto vale nei quattro casi?
::: soluzione
1. (a) Le monete sono 64, 16, 8 e 4: 92.
2. (b) Il bit di segno è 0, quindi è positivo e vale ancora 92.
3. (c) In eccesso 128 si toglie 128: 92 − 128 = −36. Con 8 bit l'eccesso è 128, cioè la moneta di segno.
4. (d) Segno 0, esponente 101, cioè 1, mantissa 1100. 0,1100 con la virgola un posto a destra è 1,100: 1 e 1/2.

Gli stessi bit danno quattro numeri diversi: decide la regola con cui li leggi, come nella lezione 02.
:::

::: esercizio medio Un decimo nel formato del libro
Scrivi 0,1 nel formato in virgola mobile del libro. Quanto vale il byte che ottieni? Di quanto sbaglia?
::: soluzione
1. Con il metodo dei raddoppi della lezione 02: 0,2 dà 0; 0,4 dà 0; 0,8 dà 0; 1,6 dà 1; 1,2 dà 1; 0,4 dà 0; 0,8 dà 0; 1,6 dà 1… Quindi 0,1 = 0,000110011…
2. Il primo 1 è nella quarta posizione: la virgola va tre posti a destra, 0,110011…, esponente −3. In eccesso 4: −3 + 4 = 1, cioè 001.
3. La mantissa tiene 1100. Segno 0. Il byte è 00011100.
4. Lettura: 0,1100 con la virgola tre posti a sinistra è 0,0001100, cioè 1/16 + 1/32 = 3/32 = 0,09375.
5. L'errore è 0,1 − 0,09375 = 0,00625.
:::

::: esercizio difficile Domanda 3 del §1.7: quale byte è più grande
Nel formato del libro, quale tra 01001001 e 00111101 è il numero più grande? Trova un modo veloce per confrontare due byte.
::: soluzione
1. 01001001: esponente 100, cioè 0; mantissa 0,1001, che vale 1/2 + 1/16 = 9/16.
2. 00111101: esponente 011, cioè −1; 0,1101 con la virgola un posto a sinistra è 0,01101, cioè 1/4 + 1/8 + 1/32 = 13/32.
3. 9/16 = 18/32, che è più di 13/32: il primo è più grande.

Il modo veloce dell'appendice del libro, con i byte in forma normalizzata:

- se i bit di segno sono diversi, è più grande quello con il segno 0;
- se sono tutti e due 0, guarda gli altri bit da sinistra: al primo bit diverso, è più grande il byte che ha l'1;
- se sono tutti e due 1, al primo bit diverso è più grande il byte che ha lo 0.

Qui il segno è 0 in tutti e due, e il primo bit diverso è il secondo: 1 nel primo byte. Funziona perché l'esponente è in eccesso: esponente più grande vuol dire bit più grandi. Il libro lo indica proprio come motivo per usare l'eccesso al posto del complemento a 2.
:::

::: esercizio difficile Una somma in virgola mobile
Nel formato del libro scrivi 1 e 3/4 e 3/16. Poi calcola la loro somma e scrivila nel formato. Il risultato è esatto?
::: soluzione
1. 1 e 3/4 = 1,11. Virgola un posto a sinistra: 0,111, esponente 1, cioè 101. Mantissa 1110. Byte 01011110.
2. 3/16 = 1/8 + 1/16 = 0,0011. Virgola due posti a destra: 0,11, esponente −2, cioè 010. Mantissa 1100. Byte 00101100.
3. La somma vera: 1 e 3/4 + 3/16 = 1 e 12/16 + 3/16 = 1 e 15/16, cioè 1,1111.
4. Virgola un posto a sinistra: 0,11111, esponente 1, cioè 101. Le cifre sono cinque: la mantissa tiene 1111. Byte 01011111.
5. Lettura: 0,1111 con la virgola un posto a destra è 1,111, cioè 1 e 7/8.

Non è esatto: si perde 1/16. I due numeri si scrivevano esatti, ma la loro somma no.
:::

::: esercizio esame Leggere, cambiare segno, sommare con 8 bit
In complemento a 2 con 8 bit: (a) quanto vale 10010110? (b) Scrivi il suo opposto. (c) Calcola 01100100 + 00110010: c'è overflow?
::: soluzione
1. (a) Le monete sono −128, 16, 4 e 2: −128 + 22 = −106.
2. (b) Copi «10» da destra e inverti gli altri sei bit, 100101, che diventano 011010. L'opposto è 01101010. Controllo: 64 + 32 + 8 + 2 = 106.
3. (c) I due numeri sono 100 e 50, tutti e due positivi.
4. In colonna, da destra: 0 + 0 fa 0; 0 + 1 fa 1; 1 + 0 fa 1; 0 + 0 fa 0; 0 + 1 fa 1; 1 + 1 fa 10, scrivi 0 e riporti 1; 1 + 0 più il riporto fa 10, scrivi 0 e riporti 1; 0 + 0 più il riporto fa 1. Il risultato è 10010110.
5. Il risultato ha il bit di segno 1: due positivi danno un negativo, quindi c'è overflow. Infatti 150 supera 127.
6. Il byte ottenuto è proprio quello della domanda (a): vale −106, cioè 150 − 256.
:::

::: esercizio esame Simulazione d'esame 1, 2023/24, domanda 2: il numero 3,625
Scrivi 3,625 in virgola fissa e nel formato in virgola mobile del libro. Di' in quale delle due rappresentazioni c'è troncamento, e quanto vale il byte ottenuto.
::: soluzione
1. Parte intera: 3 = 2 + 1, cioè 11.
2. Parte dopo la virgola, con i raddoppi: 0,625 · 2 = 1,25, cifra 1; 0,25 · 2 = 0,5, cifra 0; 0,5 · 2 = 1, cifra 1. Quindi 0,101.
3. Virgola fissa: 11,101, senza troncamento.
4. Virgola mobile: segno 0. Virgola due posti a sinistra: 0,11101, esponente 2, cioè 2 + 4 = 6, scritto 110.
5. La mantissa tiene 1110 e perde l'ultimo 1. Il byte è 01101110.
6. Lettura: 0,1110 con la virgola due posti a destra è 11,10, cioè 3,5. Il troncamento c'è solo in virgola mobile, e si perde 1/8.

Le risposte dello studente nella copia svolta a mano della simulazione sono giuste: 11.101, 01101110, troncamento solo in virgola mobile.
:::

## Domande di ripasso

::: domanda Perché il complemento a 2 si può pensare come un contachilometri?
Perché con un numero fisso di bit, tornando indietro da 0000, il contatore gira e segna 1111: quella fila fa la parte di −1, e le successive all'indietro di −2, −3 e così via. I positivi stanno in avanti da zero.
:::

::: domanda Come si legge un numero in complemento a 2?
Se il bit a sinistra è 0, come un numero senza segno. Se è 1, si sommano le monete dando a quella di sinistra il segno meno: −8 con 4 bit, −128 con 8 bit.
:::

::: domanda Quali sono i due modi per cambiare segno a un numero?
Copiare i bit da destra fino al primo 1 compreso e invertire tutti gli altri. Oppure invertire tutti i bit e aggiungere 1. Danno lo stesso risultato.
:::

::: domanda Come si riconosce l'overflow in una somma in complemento a 2?
Quando i due numeri hanno lo stesso segno e il risultato ha il segno opposto. Se i segni dei due numeri sono diversi, l'overflow non c'è mai. Il riporto che esce a sinistra non conta.
:::

::: domanda Che cos'è la notazione in eccesso 8, e che legame ha con il complemento a 2?
Si leggono i 4 bit senza segno e si toglie 8. Va da −8 a 7, come il complemento a 2 con 4 bit, e le due scritture di un numero differiscono solo nel bit a sinistra.
:::

::: domanda Com'è fatto il formato in virgola mobile del libro?
Un byte: 1 bit di segno, 3 bit di esponente in eccesso 4 e 4 bit di mantissa. La mantissa sono le cifre, con la virgola a sinistra; l'esponente dice di quanti posti spostare la virgola, a destra se positivo, a sinistra se negativo.
:::

::: domanda Che cos'è la forma normalizzata, e perché si usa?
È la scelta di una mantissa che comincia con 1. Così ogni numero ha un solo byte, e tutti i bit della mantissa portano cifre utili.
:::

::: domanda Che cos'è l'errore di troncamento? Fai un esempio.
Quando le cifre del numero sono più dei 4 bit della mantissa, le ultime si perdono. 2 e 5/8 è 10,101: la mantissa tiene 1010 e il byte vale 2 e 1/2. Un decimo non si scrive mai esatto, perché in base 2 ha infinite cifre.
:::

## Glossario

```glossario
Complemento a 2 | Il modo di scrivere gli interi con il segno usato dai computer (*two's complement*): con 4 bit 1111 è −1 e 1000 è −8.
Bit di segno | Il bit più a sinistra (*sign bit*). In complemento a 2 vale 0 per i positivi e lo zero, 1 per i negativi.
Invertire un bit | Cambiarlo: 0 diventa 1 e 1 diventa 0.
Cambio di segno | Passare da un numero al suo opposto: copia da destra fino al primo 1, poi inverti il resto.
Complemento a 1 | Un modo vecchio di scrivere i negativi: si invertono tutti i bit. Ha due zeri.
Overflow | Quando il risultato non ci sta nei bit. In complemento a 2: due numeri con lo stesso segno danno un risultato con il segno opposto.
Notazione in eccesso | Si leggono i bit senza segno e si toglie sempre lo stesso numero (*excess notation*): 8 con 4 bit, 4 con 3 bit.
Virgola fissa | La virgola sta sempre nello stesso posto, come in 11,101 (*fixed point*).
Virgola mobile | Il numero si scrive con le cifre e con un esponente che dice dove va la virgola (*floating point*).
Mantissa | Le cifre di un numero in virgola mobile, con la virgola a sinistra (*mantissa*). Nel formato del libro sono 4 bit.
Esponente | Di quanti posti spostare la virgola (*exponent*). Nel formato del libro sono 3 bit in eccesso 4, da −4 a 3.
Forma normalizzata | La mantissa comincia con 1 (*normalized form*): ogni numero ha un solo byte.
Errore di troncamento | Le cifre che non entrano nella mantissa si perdono (*truncation error*, anche *round-off error*): 2 e 5/8 diventa 2 e 1/2.
IEEE 754 | Lo standard della virgola mobile nei computer veri: 32 bit (`float`) e 64 bit (`double`).
```

## Checklist

```checklist
- So leggere un numero in complemento a 2 con le monete, dando il segno meno a quella di sinistra.
- So scrivere un numero negativo in complemento a 2 con un numero di bit dato.
- So cambiare segno con «copia fino al primo 1, poi inverti» e con «inverti e aggiungi 1».
- So dire fin dove si arriva con $n$ bit in complemento a 2.
- So sommare e sottrarre in complemento a 2 e riconoscere l'overflow dai segni.
- So leggere e scrivere un numero in eccesso 8 e in eccesso 4.
- So leggere un byte nel formato in virgola mobile del libro.
- So scrivere un numero nel formato del libro, in forma normalizzata, e dire se c'è troncamento.
- So perché un decimo non si scrive esatto e perché l'ordine delle somme conta.
```

## Fonti

- R. Johnsonbaugh, J. G. Brookshear, D. Brylow, *Fondamenti dell'Informatica*, Pearson 2026 (ISBN 9788891939456), il libro di testo del corso: parte 1, che è il capitolo 1 di J. G. Brookshear, D. Brylow, *Computer Science: an overview*. Sezione 1.6 «Storing Integers»: complemento a 2 con le tabelle a 3 e 4 bit, cambio di segno, addizione, overflow, notazione in eccesso 8 e in eccesso 4. Sezione 1.7 «Storing Fractions»: il formato a 8 bit in virgola mobile, la forma normalizzata, l'errore di troncamento, un decimo e l'ordine delle somme. Le risposte alle domande delle due sezioni sono nell'appendice del libro, pubblicata sul Moodle del canale A. I testi delle domande qui sono riassunti con parole mie: quello esatto è nel libro.
- Diario della lezione del 05/10/2026 sul Moodle del canale B: «Interi col segno in complemento in base 2. Excess notation, cambio di segno e addizione in complemento in base 2. Floating point notation. Omessa la sezione 1.8 sul linguaggio Python.»
- Lucidi del canale A 2026/27, «Cenni sulla codifica dei dati» (F. Cardone, Moodle del canale A, aperto agli ospiti): intervallo del complemento a 2 con $n$ bit, tabella a 4 bit, −5 con 6 bit.
- Simulazioni d'esame 1 e 2 del 2023/24 (pagina d'esame di Fondamenti su Moodle Esami), nelle copie svolte a mano da uno studente pubblicate nella Guida degli studenti del gruppo TSI (licenza CC BY-SA 4.0): domanda 2 della simulazione 1, domande 1 e 8 della simulazione 2. Le risposte dello studente sono state ricontrollate una per una.
- Lo standard IEEE 754 per i formati a 32 e 64 bit.
- Le spiegazioni a parole, gli esempi, i riquadri «Prova tu», gli strumenti interattivi, i quiz e gli esercizi senza il numero del libro sono di questi appunti.
