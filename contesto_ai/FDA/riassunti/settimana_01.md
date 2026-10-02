---
corso: FDA
lezione: S1
tipo: riassunto
titolo: "Settimana 1: bit, porte logiche, memorie; testo, colori e suoni; la base 2"
data: 2026-10-02
docenti: Stefano Berardi
sopratitolo: Riassunto settimanale · Fondamenti dell'Informatica · Canale B · 28/09 – 02/10/2026
descrizione: >-
  Riassunto della settimana 1 di Fondamenti dell'Informatica (canale B, libro parte 1, §1.1–1.5): bit e potenze di 2,
  AND, OR, XOR, NOT, porte logiche e flip-flop, esadecimale, memoria centrale e memorie di massa, ASCII, Unicode e
  UTF-8, pixel e RGB, campioni audio, conversioni tra base 2 e base 10, somma binaria e overflow, frazioni binarie.
lede: >-
  Le lezioni della settimana in poche pagine: le tabelle da sapere a memoria, i metodi di conversione, le trappole
  dei quiz e le domande per controllarti. Per i dettagli e gli strumenti interattivi c'è la lezione completa.
materiale: libro
scheda:
  Lezioni: "lun 28/09 introduzione · [01](01_bit_porte_esadecimale.html) gio 01/10, §1.1–1.3 · [02](02_testo_colori_suoni_binario.html) ven 02/10, §1.4–1.5"
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni 01 e 02 di Fondamenti dell'Informatica (canale B), scritti sul libro di testo, parte 1,
  §1.1–1.5
file_en: summary_week_01.html
appunti_html: appunti/FDA/riassunto_settimana_01.html
genera_html: true
---

## In breve

- Dentro il computer tutto è fatto di **bit**, 0 e 1. Con $n$ bit si scrivono $2^n$ sequenze: ogni bit in più raddoppia.
- Le **porte logiche** AND, OR, XOR e NOT combinano i bit; il **flip-flop** ricorda un bit.
- L'**esadecimale** scrive quattro bit con una cifra. La **memoria centrale** è una fila di celle da un byte, ognuna con un indirizzo.
- Testo, colori e suoni diventano numeri: **ASCII** e **UTF-8**, **RGB**, **campioni**.
- In **base 2** le posizioni valgono 1, 2, 4, 8…; si converte con le divisioni per 2 e si somma in colonna, attenti all'**overflow**.

Lunedì 28/09 c'è stata la lezione introduttiva, con la presentazione del libro: negli appunti non ha un numero.

## Lezione 01 · Bit, porte, esadecimale e memorie (gio 01/10)

**Bit e potenze di 2.** 1 bit dà 2 sequenze, 2 bit ne danno 4, 3 bit 8, 8 bit (un **byte**) 256.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| $2^n$ | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

> [!METODO] Quanti bit servono per un certo numero di oggetti
> Cerca la prima potenza di 2 che arriva almeno a quel numero: il suo esponente è il numero di bit. Per 26 lettere: $2^5 = 32$ arriva a 26, $2^4 = 16$ no, quindi 5 bit.

**Le quattro operazioni**, da sapere a memoria:

| A | B | A AND B | A OR B | A XOR B | NOT A |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

AND dà 1 solo se **tutti e due** valgono 1; OR se **almeno uno** vale 1; XOR se sono **diversi**; NOT dà il contrario.

> [!TRAPPOLA] La «o» dell'italiano
> «Sconto per studenti o pensionati» è un OR: se sei tutte e due le cose lo sconto ce l'hai lo stesso. «Caffè o tè?» di solito è un XOR. In informatica OR vuol dire sempre «almeno uno, anche tutti e due».

- Una **porta logica** è il circuito che esegue una di queste operazioni. Per leggere un circuito: scrivi tutte le $2^n$ combinazioni degli ingressi, aggiungi una colonna per ogni porta, riempi una colonna alla volta; l'ultima è l'uscita.
- Il **flip-flop**: un impulso sull'ingresso alto mette l'uscita a 1, uno sull'ingresso basso la mette a 0; tra un impulso e l'altro l'uscita resta com'è. Il segreto è il filo che riporta l'uscita all'ingresso dell'OR. È il primo mattone della memoria.

**Esadecimale.** Una cifra vale quattro bit.

| bit | hex | bit | hex | bit | hex | bit | hex |
|---|:-:|---|:-:|---|:-:|---|:-:|
| 0000 | 0 | 0100 | 4 | 1000 | 8 | 1100 | C |
| 0001 | 1 | 0101 | 5 | 1001 | 9 | 1101 | D |
| 0010 | 2 | 0110 | 6 | 1010 | A | 1110 | E |
| 0011 | 3 | 0111 | 7 | 1011 | B | 1111 | F |

> [!METODO] Dai bit all'esadecimale, e ritorno
> Fai gruppi di quattro bit **partendo da destra**, con degli 0 davanti se il primo gruppo è corto, e scrivi una cifra per gruppo: 1011 0101 = B5. Per tornare indietro scrivi ogni cifra con quattro bit, **zeri compresi**: la stringa 0100 in esadecimale vuol dire 0000 0001 0000 0000.

**Memorie.**

- La **memoria centrale** è una fila di celle da un byte, ognuna con un **indirizzo** da 0. Leggere non cambia la cella; scrivere cancella il valore di prima. Nella **RAM** si raggiunge ogni cella nello stesso tempo; a computer spento si svuota.
- Per la memoria 1 KB = 1024 byte ($2^{10}$), 1 MB = 1024 KB, 1 GB = 1024 MB. Per togliere il dubbio con 1000 esistono KiB, MiB, GiB.
- In una cella il bit più a sinistra è il **più significativo**, quello a destra il **meno significativo**.
- Le **memorie di massa** tengono i dati a computer spento: grandi ed economiche, ma lente. Disco magnetico: tracce concentriche divise in settori, le tracce sovrapposte formano un cilindro; tempo di accesso = tempo di ricerca + ritardo di rotazione. CD, DVD e Blu-ray: una traccia a spirale letta da un laser. Flash e SSD: niente parti in movimento, veloci, ma si consumano riscrivendole.

## Lezione 02 · Testo, colori, suoni e base 2 (ven 02/10)

**Testo.**

- **ASCII** usa 7 bit, 128 simboli, e oggi un byte per simbolo. A = 65 = 01000001, a = 97, la cifra «0» = 48. Maiuscola e minuscola differiscono di **32**: cambia un solo bit. Il simbolo «7» non è il numero 7.
- **Unicode** dà a ogni simbolo di ogni lingua un numero, il **punto di codice**, scritto U+… in esadecimale, fino a 21 bit. **UTF-8** lo scrive con 1, 2, 3 o 4 byte; i simboli di ASCII restano un byte uguale.

| Punto di codice | Bit | Byte | Schema UTF-8 |
|---|---|:-:|---|
| U+0000 – U+007F | fino a 7 | 1 | 0xxxxxxx |
| U+0080 – U+07FF | fino a 11 | 2 | 110xxxxx 10xxxxxx |
| U+0800 – U+FFFF | fino a 16 | 3 | 1110xxxx 10xxxxxx 10xxxxxx |
| U+10000 – U+10FFFF | fino a 21 | 4 | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

> [!TRAPPOLA] UTF-8 non vuol dire «8 bit per simbolo»
> «perché» ha 6 simboli e occupa 7 byte: la é ne prende due. Per contare i byte guarda ogni simbolo.

**Immagini e suoni.**

- Un'immagine a **mappa di bit** è una griglia di **pixel**. In **RGB** ogni pixel ha tre numeri da 0 a 255, rosso, verde e blu: 3 byte, $2^{24}$ colori. (0, 0, 0) è il nero, (255, 255, 255) il bianco, tre valori uguali un grigio, rosso più verde il giallo.
- Byte di un'immagine senza compressione = larghezza × altezza × 3. Full HD, 1920 × 1080: 6 220 800 byte, circa 6 MB.
- Le immagini **vettoriali** descrivono figure: si ingrandiscono senza quadretti, ma non vanno bene per le foto.
- Un suono si registra misurando l'onda a intervalli regolari: ogni misura è un **campione**. Due scelte: **quante misure al secondo** e **con quanti bit** ciascuna (con 16 bit ci sono 65 536 livelli; arrotondare al livello più vicino si chiama **quantizzazione**).
- CD: 44 100 campioni al secondo, 16 bit, stereo. Byte = campioni al secondo × byte per campione × canali × secondi: un secondo occupa 176 400 byte, un'ora circa 635 MB.
- **MIDI** non salva l'onda ma le istruzioni per suonarla: molto compatto, ma il suono dipende da chi lo esegue.

**Base 2.**

- Le posizioni valgono, da destra, 1, 2, 4, 8, 16, 32…: il valore è la somma delle posizioni con un 1. $1101_2 = 8 + 4 + 1 = 13$.
- Con $n$ bit gli interi **senza segno** vanno da 0 a $2^n - 1$: con 8 bit da 0 a 255. Gli zeri a sinistra non cambiano il valore; uno zero a destra lo raddoppia.

> [!METODO] Dalla base 10 alla base 2
> Dividi per 2 e scrivi il resto; continua con il quoziente finché arriva a 0; leggi i resti **dall'ultimo al primo**. Con i numeri piccoli si fa prima togliendo la potenza di 2 più grande che ci sta: $45 = 32 + 8 + 4 + 1$, quindi 101101. Controlla sempre riconvertendo.

> [!TRAPPOLA] «Quanti bit servono» e «scrivilo con 8 bit»
> 13 richiede 4 bit, 1101; su 8 bit si scrive 00001101. 256 richiede 9 bit, 100000000: in un byte non ci sta.

- **Somma in colonna**: $0 + 0 = 0$, $0 + 1 = 1$, $1 + 1 = 10$ (scrivo 0, riporto 1), $1 + 1 + 1 = 11$ (scrivo 1, riporto 1).
- **Overflow**: se dall'**ultima colonna** esce un riporto, il risultato non ci sta. Su 8 bit 200 + 100 dà 44 invece di 300. I riporti in mezzo non contano: su 4 bit $0111 + 0001 = 1000$ va bene.
- **Frazioni**: dopo la virgola le posizioni valgono 1/2, 1/4, 1/8…: $101{,}101_2 = 5 + \frac12 + \frac18 = 5{,}625$. Dalla base 10: raddoppia la parte dopo la virgola e prendi la parte intera, finché resta 0. $0{,}625 \to 1{,}25$ (1) $\to 0{,}5$ (0) $\to 1$ (1): 0,101.

## Verso l'esame

- Esame unico per i tre canali su Moodle Esami: **9 quiz in 45 minuti**, 3 punti l'uno, almeno 18 per passare; poi una domanda aperta facoltativa, da −1 a 6 punti, se nei quiz hai almeno 24.
- Sono 5 minuti a domanda: le tabelle di AND, OR, XOR e NOT, la tabella esadecimale e le potenze di 2 fino a $2^{10} = 1024$ vanno sapute **a memoria**.
- Nelle simulazioni del 2023/24 tornano la formula booleana di una tabella di verità e la funzione calcolata da un circuito. Nelle prossime lezioni arrivano il complemento a 2 e la virgola mobile, che usano queste conversioni.

## Domande di ripasso

::: domanda Quanti bit servono per distinguere 100 oggetti?
7 bit: $2^7 = 128$ arriva a 100, mentre $2^6 = 64$ no.
:::

::: domanda Quanto fanno 1 XOR 1 e 1 OR 1?
1 XOR 1 = 0, perché i due bit sono uguali; 1 OR 1 = 1.
:::

::: domanda Scrivi 1110 0011 in esadecimale, e 3F in bit.
1110 0011 = E3; 3F = 0011 1111.
:::

::: domanda Quanti byte occupa «città» in UTF-8?
6: c, i, t, t occupano un byte ciascuno, la à ne occupa 2.
:::

::: domanda Quanti byte occupa una foto di 800 × 600 pixel in RGB senza compressione?
$800 \cdot 600 \cdot 3 = 1\,440\,000$ byte.
:::

::: domanda Come si scrive 37 in base 2?
$37 = 32 + 4 + 1$, quindi 100101.
:::

::: domanda Su 8 bit senza segno, quanto fa 11111111 + 00000001?
00000000, con overflow: il risultato vero, 256, ha 9 bit.
:::

::: domanda Quanto vale $10{,}11_2$?
$2 + \frac12 + \frac14 = 2{,}75$.
:::

## Fonti

- Le lezioni complete: [01 · Bit, porte logiche, esadecimale e memorie](01_bit_porte_esadecimale.html) e [02 · Testo, colori e suoni in bit; i numeri in base 2](02_testo_colori_suoni_binario.html), con strumenti interattivi, quiz ed esercizi.
- Regole d'esame e programma dei tre canali: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md).
