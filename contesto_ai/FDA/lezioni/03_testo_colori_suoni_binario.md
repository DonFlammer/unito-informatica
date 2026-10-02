---
corso: FDA
lezione: "03"
titolo: Testo, colori e suoni in bit; i numeri in base 2
data: 2026-10-02
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 03 · Venerdì 02/10, ore 11–13 · Libro, parte 1, §1.4–1.5
descrizione: >-
  Appunti della lezione 03 di Fondamenti dell'Informatica (canale B): come si scrivono in bit il testo (ASCII,
  Unicode, UTF-8), i numeri, le immagini (pixel e colori RGB) e i suoni (campioni); il sistema binario, le
  conversioni tra base 2 e base 10, le frazioni in binario e l'addizione di interi senza segno, con strumenti
  interattivi, quiz ed esercizi svolti.
lede: >-
  Lettere, colori e suoni diventano numeri, e i numeri diventano file di zeri e uni. Qui vedi come si scrive in bit un
  testo in qualunque lingua, una foto e una canzone, e come si lavora con i numeri in base 2: conversioni, somme e
  numeri con la virgola.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 1 (Brookshear, cap. 1), §1.4–1.5
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 1 (J. G. Brookshear, D. Brylow, Computer Science: an overview, cap. 1), §1.4
  «Representing Information as Bit Patterns» e §1.5 «The Binary System», con le risposte alle loro domande;
  riassunto della lezione del 02/10/2026 sul Moodle del canale B; lucidi del canale A 2026/27 sulla codifica dei
  dati; standard Unicode e UTF-8
file_en: 02_text_colours_sounds_binary.html
appunti_html: appunti/FDA/03_testo_colori_suoni_binario.html
genera_html: true
---

## In breve

- Ogni simbolo di un testo diventa un numero, scritto in bit. Il codice **ASCII** usa 7 bit, di solito messi in un byte: la A è 65, cioè 01000001.
- **Unicode** dà un numero a ogni simbolo di ogni lingua, compresi è, € ed emoji. **UTF-8** scrive quei numeri con 1, 2, 3 o 4 byte; per i simboli di ASCII usa lo stesso byte di ASCII.
- Un'immagine è una griglia di **pixel**. Con il sistema **RGB** ogni pixel ha tre numeri da 0 a 255, per il rosso, il verde e il blu: 3 byte per pixel.
- Un suono si registra misurando l'onda tante volte al secondo: ogni misura è un **campione**. Un CD ne prende 44 100 al secondo, da 16 bit l'uno.
- Nel **sistema binario** ogni posizione vale il doppio di quella alla sua destra: 1, 2, 4, 8, 16… Così 1101 vale 8 + 4 + 1 = 13.
- Per passare dalla base 10 alla base 2 si divide per 2 più volte e si leggono i resti dall'ultimo al primo.
- In binario si somma in colonna come in base 10, ma 1 + 1 fa 10: scrivo 0 e riporto 1. Con $n$ bit gli interi senza segno vanno da 0 a $2^n - 1$; se la somma non ci sta c'è **overflow**.
- Dopo la virgola le posizioni valgono 1/2, 1/4, 1/8…: 101,101 vale 5 e 5/8.

> [!CANALI]
> Nel canale B è la lezione ufficiale **03**, venerdì 02/10/2026 dalle 11 alle 13, con Stefano Berardi: parte 1 del libro, §1.4 «Representing Information as Bit Patterns» e §1.5 «The Binary System». Gli argomenti indicati sono alfabeti ASCII e UTF-8, colori e suoni, conversioni tra binario e decimale, frazioni binarie, addizione di interi senza segno. I bit, le porte logiche, la memoria centrale e le memorie di massa sono negli [appunti precedenti](01_bit_porte_esadecimale.html). Nel canale A i lucidi «Cenni sulla codifica dei dati» di Felice Cardone fanno le stesse conversioni con le divisioni per 2, e ricordano che in ASCII la minuscola si ottiene dalla maiuscola aggiungendo 32. Nel canale C le stesse sezioni stanno nei lucidi «Rappresentazione» di Luca Paolini: i riferimenti tra canali servono per confrontare il materiale, non per attribuire a tutti la stessa data di lezione.

## Il testo: il codice ASCII (libro, §1.4)

Due amici si scrivono messaggi segreti con una regola: A vale 1, B vale 2, C vale 3, e così via. Per scrivere CIAO mandano i numeri 3, 9, 1 e 15. Un computer fa la stessa cosa con i testi: ogni simbolo ha il suo numero, e il numero si scrive in bit.

Una tabella che dà a ogni simbolo una sua fila di bit si chiama **codice**. I simboli sono lettere, cifre e segni di punteggiatura, ma anche comandi come «vai a capo».

Il codice più famoso è l'**ASCII** (*American Standard Code for Information Interchange*, si legge «aschi»). Usa 7 bit per simbolo, quindi ha $2^7 = 128$ simboli: le lettere maiuscole e minuscole dell'alfabeto inglese, le cifre, la punteggiatura, lo spazio e alcuni comandi. Oggi ogni simbolo occupa un byte intero, con uno 0 in più a sinistra.

Ecco la parola «Hello.» in ASCII, come nella figura 1.11 del libro.

| Simbolo | Codice | Byte |
|:-:|--:|:-:|
| H | 72 | 01001000 |
| e | 101 | 01100101 |
| l | 108 | 01101100 |
| l | 108 | 01101100 |
| o | 111 | 01101111 |
| . | 46 | 00101110 |

La tabella completa sta nelle appendici del libro. Basta ricordare dove cominciano i gruppi più usati.

| Simboli | Codici | In esadecimale | Primo e ultimo byte |
|---|:-:|:-:|---|
| spazio | 32 | 20 | 00100000 |
| cifre da 0 a 9 | da 48 a 57 | da 30 a 39 | da 00110000 a 00111001 |
| maiuscole da A a Z | da 65 a 90 | da 41 a 5A | da 01000001 a 01011010 |
| minuscole da a a z | da 97 a 122 | da 61 a 7A | da 01100001 a 01111010 |

Due cose da notare.

- **Maiuscole e minuscole** differiscono di 32: la A è 65, la a è 97. Nei bit cambia un solo bit, il sesto da destra, che vale proprio 32: A è 01000001, a è 01100001. È la domanda 2 del §1.4.
- **Le cifre** sono simboli come gli altri. Il simbolo «7» ha codice 55, cioè 00110111. Gli ultimi quattro bit, 0111, sono il 7 in binario, ma per il computer il simbolo «7» non è il numero 7: è un disegno da stampare.

::: prova (a) Il codice ASCII di B è 66. Qual è il codice di b? (b) Che simbolo ha il byte 00110011?
(a) La minuscola vale 32 in più: $66 + 32 = 98$.

(b) 00110011 vale $32 + 16 + 2 + 1 = 51$, cioè $48 + 3$: è il simbolo «3». Come si calcola il valore di un byte lo vedi più avanti, nella sezione sul sistema binario.
:::

> [!RICORDA]
> - Un codice dà a ogni simbolo una fila di bit. ASCII usa 7 bit, cioè 128 simboli, e oggi un byte per simbolo.
> - Maiuscola e minuscola differiscono di 32: cambia un solo bit, il sesto da destra.
> - Il simbolo «7» non è il numero 7.

## Tutte le lingue: Unicode e UTF-8 (libro, §1.4)

Prova a scrivere in ASCII la parola «perché»: non si può. La é non c'è, e non c'è nemmeno il simbolo dell'euro.

Per le altre lingue sono nati codici a 8 bit, con 256 simboli: i primi 128 sono quelli di ASCII, gli altri cambiano da lingua a lingua. Il codice ISO 8859-1, detto Latin-1, per esempio, ha le lettere accentate dell'Europa occidentale. Il libro spiega i due limiti di questa idea: 256 simboli non bastano per lingue come il cinese, e un testo in più lingue non sa quale tabella usare.

La soluzione di oggi è **Unicode**: uno standard che assegna numeri ai caratteri delle scritture del mondo, ai simboli matematici, alle emoji e a molti altri caratteri. Un numero assegnato si chiama **punto di codice** (*code point*) e si scrive con «U+» seguito dal numero in esadecimale. Lo spazio dei punti di codice va da U+0000 a U+10FFFF: servono fino a 21 bit, e non tutte le posizioni sono già assegnate a caratteri. I primi 128 corrispondono ad ASCII.

| Simbolo | Punto di codice | In decimale |
|:-:|:-:|--:|
| A | U+0041 | 65 |
| è | U+00E8 | 232 |
| € | U+20AC | 8364 |
| 😀 | U+1F600 | 128512 |

Unicode dice soltanto quale numero ha ogni simbolo. Per conservarlo in memoria bisogna scriverlo in byte, e il modo più usato è **UTF-8**: da 1 a 4 byte per simbolo, secondo quanto è grande il numero.

| Punti di codice | Bit del numero | Byte | Schema dei byte |
|---|:-:|:-:|---|
| da U+0000 a U+007F | fino a 7 | 1 | 0xxxxxxx |
| da U+0080 a U+07FF | fino a 11 | 2 | 110xxxxx 10xxxxxx |
| da U+0800 a U+FFFF | fino a 16 | 3 | 1110xxxx 10xxxxxx 10xxxxxx |
| da U+10000 a U+10FFFF | fino a 21 | 4 | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

Al posto delle x vanno i bit del punto di codice, in ordine. Se basta un byte, questo comincia con 0. Se ne servono due, tre o quattro, il primo comincia rispettivamente con 110, 1110 o 11110: gli 1 iniziali indicano quanti byte leggere. I byte che seguono cominciano tutti con 10.

> [!NOTA] Un intervallo riservato
> La riga dei tre byte esclude U+D800–U+DFFF: sono valori riservati alle coppie surrogate di UTF-16 e non si codificano da soli in UTF-8. I caratteri degli esempi qui sotto sono tutti fuori da quell'intervallo.

I simboli di ASCII occupano un solo byte che comincia con 0: è proprio il byte di ASCII. Quindi un testo in ASCII è già un testo in UTF-8.

> [!METODO] Da un simbolo ai byte di UTF-8
> 1. Trova il punto di codice del simbolo e scrivilo in binario.
> 2. Conta i bit e scegli la riga della tabella: fino a 7 bit un byte, fino a 11 due, fino a 16 tre, fino a 21 quattro.
> 3. Aggiungi degli 0 a sinistra finché i bit sono tanti quante le x della riga.
> 4. Metti i bit al posto delle x, da sinistra a destra.

> [!ESEMPIO] La è e l'euro
> **La è.** Il punto di codice è U+00E8, cioè 232, in binario 11101000: 8 bit, quindi servono due byte, che hanno posto per 11 bit. Con tre 0 davanti: 00011101000. I primi 5 bit vanno nel primo byte, gli altri 6 nel secondo. Il primo byte è 110 seguito da 00011, il secondo è 10 seguito da 101000: 11000011 10101000, cioè C3 A8 in esadecimale.
>
> **L'euro.** Il punto di codice è U+20AC, in binario 0010000010101100: 16 bit, quindi tre byte. I bit si dividono in 4, 6 e 6: 0010, 000010 e 101100. I byte sono 1110 seguito da 0010, 10 seguito da 000010, 10 seguito da 101100: E2 82 AC.

> [!TRAPPOLA] UTF-8 non vuol dire «8 bit per simbolo»
> L'8 dice che UTF-8 lavora a byte, ma un simbolo può occupare da 1 a 4 byte. Contare i simboli non basta per sapere quanti byte occupa un testo: «perché» ha 6 simboli e occupa 7 byte.

> [!OLTRE] Una lettera visibile può essere più punti di codice
> La é può essere il carattere U+00E9, che in UTF-8 occupa 2 byte, oppure la e U+0065 seguita dall'accento combinante U+0301, che insieme occupano 3 byte. Sullo schermo le due scritture possono apparire uguali. Nei conti di questa lezione le lettere accentate sono i caratteri precomposti indicati nelle tabelle: per contare i byte si seguono i punti di codice effettivamente presenti.

Un file fatto solo di codici di simboli, uno dopo l'altro, si chiama **file di testo**: sono file di testo i .txt, ma anche i programmi in C e le pagine web. I programmi di videoscrittura, come Word, salvano anche grassetti, caratteri e margini con codici loro: un file .docx non è un file di testo.

> [!NOTA] Non solo UTF-8
> Unicode si può scrivere anche in altri modi. UTF-16, per esempio, usa 2 o 4 byte per simbolo, e lo usano dentro di loro Windows e Java. Sul web, invece, quasi tutte le pagine sono in UTF-8.

Scrivi una parola nello strumento qui sotto: per ogni simbolo vedi il punto di codice e i byte di UTF-8, con le parti fisse dello schema separate dai bit del numero.

```widget codifica
titolo: Un testo in Unicode e UTF-8: scrivi quello che vuoi
modo: testo
testo: Ciao, è 5€!
```

::: prova (a) Quanti byte occupa in UTF-8 la parola «caffè»? (b) Si può scrivere in ASCII?
(a) c, a, f e f sono simboli di ASCII: un byte ciascuno. La è occupa 2 byte. In tutto $4 + 2 = 6$ byte.

(b) No: la è non è tra i 128 simboli di ASCII.
:::

> [!RICORDA]
> - Unicode dà un numero, il punto di codice U+…, a ogni simbolo di ogni lingua. UTF-8 scrive quel numero con 1, 2, 3 o 4 byte.
> - In UTF-8 i simboli di ASCII occupano un byte, uguale a quello di ASCII.
> - Il primo byte di un simbolo dice quanti byte ha: 0…, 110…, 1110… oppure 11110…; i byte che seguono cominciano con 10.

## I numeri: meglio in binario (libro, §1.4)

Per scrivere il numero 25 in ASCII servono due simboli, «2» e «5»: due byte, cioè 16 bit. Con gli stessi 16 bit usati come cifre in base 2 si scrive qualunque numero da 0 a 65535. Per questo il libro conclude che i numeri si conservano nel **sistema binario**, che vedi nelle prossime sezioni.

Perché proprio 65535? Con 16 bit si scrivono $2^{16} = 65536$ sequenze, come nella [lezione 01](01_bit_porte_esadecimale.html). La prima vale 0, quindi l'ultima vale 65535.

> [!IDEA]
> Con $n$ bit si scrivono i numeri interi da 0 a $2^n - 1$. Si chiamano **interi senza segno** (*unsigned integers*): niente numeri negativi e niente virgola. Per quelli servono altri sistemi, nelle sezioni 1.6 e 1.7 del libro.

La domanda 7 del §1.4 fa lo stesso confronto con tre byte: in ASCII si scrivono tre cifre, quindi si arriva a 999; in binario si arriva a $2^{24} - 1 = 16777215$.

::: prova Con un byte, qual è il numero più grande che si scrive in binario? E con una cifra in ASCII?
In binario $2^8 - 1 = 255$, cioè 11111111. In ASCII un byte contiene una sola cifra: si arriva a 9.
:::

> [!RICORDA]
> - Con $n$ bit, in binario, si scrivono gli interi senza segno da 0 a $2^n - 1$.
> - In ASCII ogni cifra occupa un byte intero: per i numeri è uno spreco.

## Le immagini: pixel e colori (libro, §1.4)

Ingrandisci molto una foto sul telefono: a un certo punto vedi tanti quadratini, ognuno di un colore solo. Sono i **pixel**, da *picture elements*, «elementi dell'immagine».

Un'immagine fatta così si chiama **mappa di bit** (*bit map*): una griglia di pixel, ognuno scritto con dei bit. In un'immagine in bianco e nero basta un bit per pixel, per esempio 1 per nero e 0 per bianco. Ecco una F di cinque righe da cinque pixel.

| Riga | Bit | Disegno |
|:-:|:-:|:-:|
| 1 | 11111 | ■■■■■ |
| 2 | 10000 | ■□□□□ |
| 3 | 11110 | ■■■■□ |
| 4 | 10000 | ■□□□□ |
| 5 | 10000 | ■□□□□ |

### I colori in RGB

Per i colori il modo più comune è **RGB**: ogni pixel ha tre numeri, quanto rosso (*red*), quanto verde (*green*) e quanto blu (*blue*). Nel modello **RGB a 24 bit** usato qui ogni componente va da 0 a 255 e occupa un byte: in tutto 3 byte per pixel. RGB indica le componenti; la scelta di 8 bit per componente è ciò che dà i 24 bit.

I tre colori si mescolano come tre luci puntate sullo stesso punto. Rosso e verde insieme danno il giallo; tutti e tre al massimo danno il bianco; tutti a zero, cioè luce spenta, danno il nero. Tre valori uguali danno un grigio.

| Colore | Rosso | Verde | Blu | In esadecimale |
|---|--:|--:|--:|:-:|
| nero | 0 | 0 | 0 | #000000 |
| bianco | 255 | 255 | 255 | #FFFFFF |
| rosso | 255 | 0 | 0 | #FF0000 |
| verde | 0 | 255 | 0 | #00FF00 |
| blu | 0 | 0 | 255 | #0000FF |
| giallo | 255 | 255 | 0 | #FFFF00 |
| grigio | 128 | 128 | 128 | #808080 |
| arancione | 255 | 128 | 0 | #FF8000 |

L'ultima colonna è il modo di scrivere i colori nelle pagine web: un byte per colore, quindi due cifre esadecimali ciascuno, come nella [lezione 01](01_bit_porte_esadecimale.html). Con 3 byte i colori possibili sono $2^{24} = 16777216$, più di sedici milioni.

Prova a mescolare i colori nello strumento.

```widget codifica
titolo: Rosso, verde e blu: tre byte per un pixel
modo: colori
r: 255
g: 128
b: 0
```

> [!NOTA] Luminosità e colore
> Il libro descrive anche un'altra strada: per ogni pixel si scrivono la luminosità (*luminance*) e due numeri per il colore (*chrominance*). La televisione e il formato JPEG usano un'idea simile, perché l'occhio nota le differenze di luminosità più di quelle di colore.

### Quanto pesa un'immagine

Lo schermo di un portatile Full HD ha 1920 × 1080 = 2073600 pixel. A 3 byte per pixel, i dati dei pixel di un'immagine grande come lo schermo occupano 6220800 byte, circa 6,22 MB, con 1 MB = 1000000 byte. Questo conto riguarda i pixel RGB a 24 bit senza compressione: non include intestazioni, metadati o un eventuale canale di trasparenza. La dimensione di un file JPEG o PNG dipende anche da come viene codificato e compresso.

> [!METODO] Quanti byte occupa un'immagine senza compressione
> Moltiplica la larghezza per l'altezza, in pixel, e il risultato per i byte di ogni pixel: 3 in RGB. Per avere i bit moltiplica ancora per 8.

### Immagini vettoriali

Una mappa di bit ha un limite: se la ingrandisci, ingrandisci anche i pixel, e l'immagine diventa a quadretti. Esiste un altro modo: descrivere l'immagine come un insieme di figure, cioè linee, curve e poligoni con le loro coordinate. È un po' come una lista di istruzioni per disegnarla. Si chiama **immagine vettoriale** (*vector*).

Per ingrandire un'immagine vettoriale si ridisegnano le figure più grandi: niente quadretti. Così sono fatti i caratteri che si possono ingrandire a piacere, come TrueType di Microsoft e Apple e PostScript di Adobe, i disegni tecnici e i file .svg. Per le fotografie, invece, la mappa di bit resta più fedele: è la domanda 9 del §1.4.

::: prova (a) Che colore è (255, 255, 0)? E (0, 255, 255)? (b) Quanti byte occupa un'immagine di 100 × 100 pixel in RGB, senza compressione?
(a) Il primo è giallo: rosso più verde. Il secondo è il ciano, un azzurro chiaro: verde più blu.

(b) I pixel sono $100 \cdot 100 = 10000$, ognuno di 3 byte: $30000$ byte.
:::

> [!RICORDA]
> - Un'immagine a mappa di bit è una griglia di pixel. In RGB ogni pixel ha 3 byte, rosso, verde e blu, da 0 a 255: in tutto $2^{24}$ colori.
> - Byte di un'immagine senza compressione: larghezza × altezza × byte per pixel.
> - Le immagini vettoriali descrivono figure: si ingrandiscono senza quadretti, ma non vanno bene per le foto.

## I suoni: campioni (libro, §1.4)

Un suono è una variazione della pressione dell'aria. In un grafico si rappresenta con un'onda: l'ampiezza è legata al volume, mentre, per un tono periodico, il numero di oscillazioni al secondo è legato all'altezza della nota, più grave o più acuta.

Per registrare un suono si misura l'altezza dell'onda a intervalli regolari, tante volte al secondo, e si conservano i numeri. Ogni misura è un **campione** (*sample*), e il procedimento si chiama **campionamento**. Il libro fa l'esempio di un'onda registrata con i campioni 0; 1,5; 2,0; 1,5; 2,0; 3,0; 4,0; 3,0; 0.

Quanti campioni servono?

- Per una telefonata bastano 8000 campioni al secondo.
- Un CD musicale ne usa **44 100 al secondo**, ognuno di **16 bit**, e due canali per la musica in stereo, uno per orecchio.

Le due scelte fanno cose diverse.

- La **frequenza di campionamento** dice ogni quanto si misura l'onda: 44100 campioni al secondo vuol dire una misura ogni $1/44100$ di secondo, circa 22,7 microsecondi.
- La **profondità in bit** dice con quanti valori si rappresenta ciascuna misura. Con 16 bit ci sono $2^{16} = 65536$ livelli possibili: il valore misurato viene associato a uno di questi livelli. Questa scelta si chiama **quantizzazione**.

A parità delle altre condizioni, aumentare queste quantità permette una rappresentazione più accurata e occupa più spazio. Nello strumento qui sotto vedi l'onda e i campioni presi a intervalli regolari.

```widget codifica
titolo: Campionare un suono: meno campioni, meno fedeltà
modo: suono
```

> [!METODO] Quanti byte occupa un suono
> Moltiplica i campioni al secondo per i byte di ogni campione, per il numero dei canali (1 se mono, 2 se stereo) e per i secondi.

> [!ESEMPIO] Un'ora di musica su CD (domanda 10 del §1.4)
> Ogni campione ha 16 bit, cioè 2 byte. In un secondo di stereo ci sono $44100 \cdot 2 \cdot 2 = 176400$ byte. Un'ora ha 3600 secondi: $176400 \cdot 3600 = 635040000$ byte, circa 635 MB. Un CD contiene da 600 a 700 MB: un'ora di musica lo riempie quasi tutto.

Il formato **MIDI** (*Musical Instrument Digital Interface*) fa un'altra cosa: conserva eventi e istruzioni per suonare, come la scelta dello strumento e l'inizio e la fine delle note. È simile a uno spartito da eseguire, mentre l'audio campionato conserva le misure del suono registrato. Un messaggio MIDI può occupare pochi byte; una sequenza completa contiene anche altri eventi e informazioni sui tempi. Il suono prodotto dipende dallo strumento elettronico che esegue le istruzioni.

::: prova Quanti byte occupa un minuto di telefonata registrata con 8000 campioni al secondo, 8 bit per campione e un solo canale?
Ogni campione occupa 8 bit, cioè un byte. In un secondo ci sono 8000 byte, in un minuto $8000 \cdot 60 = 480000$ byte.
:::

> [!RICORDA]
> - Un suono si registra con dei campioni, cioè misure dell'onda prese a intervalli regolari.
> - CD: 44 100 campioni al secondo, 16 bit ciascuno, due canali.
> - Byte di un suono: campioni al secondo × byte per campione × canali × secondi.

## Il sistema binario (libro, §1.5)

Nel numero 375 il 3 vale trecento, il 7 settanta e il 5 cinque: la stessa cifra vale di più quanto più sta a sinistra. In base dieci ogni posizione vale dieci volte quella alla sua destra: unità, decine, centinaia.

Nel **sistema binario**, o **base 2**, le cifre sono solo 0 e 1, e ogni posizione vale **il doppio** di quella alla sua destra, come nella figura 1.15 del libro.

| Posizione, da destra | 8ª | 7ª | 6ª | 5ª | 4ª | 3ª | 2ª | 1ª |
|---|--:|--:|--:|--:|--:|--:|--:|--:|
| Valore | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

### Dal binario al decimale

Per sapere quanto vale un numero binario si sommano i valori delle posizioni dove c'è un 1. Per esempio 100101, come nella figura 1.16 del libro:

| Bit | 1 | 0 | 0 | 1 | 0 | 1 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Valore della posizione | 32 | 16 | 8 | 4 | 2 | 1 |
| Conta? | sì | no | no | sì | no | sì |

Il totale è $32 + 4 + 1 = 37$. Si scrive anche $100101_2 = 37_{10}$: il numerino in basso dice la base, così 100101 non si confonde con centomilacentouno.

Ora si capiscono due cose della [lezione 01](01_bit_porte_esadecimale.html). Il bit più a sinistra di una cella si chiama «più significativo» perché è quello che vale di più. E le cifre esadecimali sono i valori dei gruppi di quattro bit, che valgono 8, 4, 2 e 1.

Clicca sui bit nello strumento e guarda come cambia il valore.

```widget codifica
titolo: Dai bit al numero: clicca sui bit
modo: binario
bit: 00100101
```

### Dal decimale al binario

Per il viaggio al contrario il libro dà un algoritmo, nella figura 1.17.

> [!METODO] Le divisioni per 2
> 1. Dividi il numero per 2 e scrivi il resto, che è 0 o 1.
> 2. Finché il quoziente non è 0, dividi il quoziente per 2 e scrivi il resto.
> 3. Quando il quoziente è 0, leggi i resti dall'ultimo al primo: è il numero in binario.

> [!ESEMPIO] 13 in binario (figura 1.18 del libro)
> | Divisione | Quoziente | Resto |
> |---|--:|--:|
> | 13 : 2 | 6 | 1 |
> | 6 : 2 | 3 | 0 |
> | 3 : 2 | 1 | 1 |
> | 1 : 2 | 0 | 1 |
>
> I resti, dall'ultimo al primo: 1101. Controllo: $8 + 4 + 1 = 13$.

> [!IDEA]
> Il resto della divisione per 2 dice se il numero è pari, resto 0, o dispari, resto 1: è proprio l'ultimo bit. Dividere per 2 toglie l'ultimo bit. Così i bit escono da destra a sinistra, e per questo i resti si leggono al contrario.

### Anche zero è un numero rappresentabile

Per zero non servono divisioni: si scrive $0_{10} = 0_2$. Se è richiesto un byte, diventa 00000000. Gli zeri aggiunti a sinistra non cambiano il valore: 1101 e 00001101 valgono entrambi 13. Uno zero aggiunto a destra, invece, sposta tutti i bit in posizioni di valore doppio: 11010 vale 26.

> [!TRAPPOLA] «Quanti bit servono» e «scrivi su 8 bit» sono richieste diverse
> Il numero 13 richiede almeno 4 bit, 1101. Per scriverlo su 8 bit aggiungi quattro zeri a sinistra. Il numero 256 richiede 9 bit, 100000000: non entra in un byte, perché $2^8 - 1 = 255$.

Con i numeri piccoli c'è anche un'altra strada: togli la potenza di 2 più grande che ci sta, poi ripeti con quello che resta. Per esempio $45 = 32 + 8 + 4 + 1$: ci sono 32, 8, 4 e 1, mancano 16 e 2, quindi 45 si scrive 101101.

```widget codifica
titolo: Le divisioni per 2, passo per passo: scegli un numero
modo: divisioni
numero: 13
```

::: prova (a) Quanto vale 101010 in decimale? (b) Scrivi 27 in binario.
(a) Gli 1 stanno nelle posizioni da 32, 8 e 2: $32 + 8 + 2 = 42$.

(b) 27 : 2 = 13 resto 1; 13 : 2 = 6 resto 1; 6 : 2 = 3 resto 0; 3 : 2 = 1 resto 1; 1 : 2 = 0 resto 1. Dall'ultimo al primo: 11011. Controllo: $16 + 8 + 2 + 1 = 27$.
:::

> [!RICORDA]
> - In base 2 le posizioni valgono 1, 2, 4, 8, 16…, da destra. Il valore è la somma delle posizioni con un 1.
> - Dalla base 10 alla base 2: dividi per 2 finché il quoziente è 0 e leggi i resti dall'ultimo al primo.
> - Controlla sempre al contrario: riconverti e guarda se torna.

## L'addizione in binario (libro, §1.5)

In base dieci, per fare 58 + 27 in colonna: 8 + 7 fa 15, scrivo 5 e riporto 1; poi 5 + 2 + 1 fa 8. Il risultato è 85. In base 2 si fa nello stesso modo, ma le somme possibili in una colonna sono poche.

| Nella colonna | Fa | Scrivo | Riporto |
|---|---|:-:|:-:|
| 0 + 0 | zero | 0 | 0 |
| 0 + 1 oppure 1 + 0 | uno | 1 | 0 |
| 1 + 1 | due, cioè 10 | 0 | 1 |
| 1 + 1 + 1 di riporto | tre, cioè 11 | 1 | 1 |

Ecco l'esempio del libro, 00111010 + 00011011, cioè 58 + 27. Si parte dalla colonna di destra; nella prima riga ci sono i riporti che arrivano da destra.

| | 8ª | 7ª | 6ª | 5ª | 4ª | 3ª | 2ª | 1ª |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| riporti | 0 | 1 | 1 | 1 | 0 | 1 | 0 | |
| 58 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 |
| 27 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 |
| somma, 85 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |

Controllo: 01010101 vale $64 + 16 + 4 + 1 = 85$, e $58 + 27 = 85$.

### Interi senza segno e overflow

Con 8 bit gli interi senza segno vanno da 0 a 255. Che cosa succede se la somma è più grande? Prova 200 + 100, cioè 11001000 + 01100100: viene 100101100, cioè 300, che ha 9 bit. Con 8 bit il riporto finale a sinistra si perde e resta 00101100, cioè 44.

Questo si chiama **overflow** (in italiano anche «trabocco»): il risultato non ci sta nei bit disponibili. Chi scrive programmi lo incontra davvero: un contatore di 8 bit, dopo 255, ricomincia da 0.

> [!TRAPPOLA] Il riporto oltre l'ultima colonna
> Con $n$ bit, se l'ultima colonna a sinistra dà un riporto, la somma vale almeno $2^n$ e non ci sta: c'è overflow. Il risultato scritto con $n$ bit è sbagliato di $2^n$, come 44 invece di 300.

Un riporto **interno** non basta per dire che c'è overflow. Con 4 bit, $0111_2 + 0001_2 = 1000_2$: ci sono riporti tra le colonne, ma $7 + 1 = 8$ rientra tra 0 e 15. Con gli stessi 4 bit, $1111_2 + 0001_2 = 10000_2$: $15 + 1 = 16$ richiede una quinta colonna, quindi c'è overflow. Il criterio qui riguarda gli interi **senza segno**; per gli interi con segno servirà il loro criterio specifico.

```widget codifica
titolo: Somma in colonna con 8 bit: clicca sui bit dei due numeri
modo: somma
a: 00111010
b: 00011011
```

::: prova (a) Calcola 1011 + 0110. (b) Con 4 bit il risultato ci sta?
(a) Da destra: 1 + 0 fa 1; 1 + 1 fa 10, scrivo 0 e riporto 1; 0 + 1 + 1 fa 10, scrivo 0 e riporto 1; 1 + 0 + 1 fa 10, scrivo 0 e riporto 1. Il risultato è 10001, cioè 17: infatti $11 + 6 = 17$.

(b) No. Con 4 bit si arriva a $2^4 - 1 = 15$. Il riporto finale si perde e resta 0001, cioè 1: overflow.
:::

> [!RICORDA]
> - 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (scrivo 0, riporto 1), 1 + 1 + 1 = 11 (scrivo 1, riporto 1).
> - Con $n$ bit gli interi senza segno vanno da 0 a $2^n - 1$: un riporto oltre l'ultima colonna vuol dire overflow.

## Le frazioni in binario (libro, §1.5)

In base dieci 3,75 vuol dire 3 unità, 7 decimi e 5 centesimi: dopo la virgola le posizioni valgono 1/10, 1/100, 1/1000. In base 2, dopo la virgola, ogni posizione vale **la metà** di quella alla sua sinistra: 1/2, 1/4, 1/8, 1/16.

| Bit | 1 | 0 | 1 | , | 1 | 0 | 1 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Valore della posizione | 4 | 2 | 1 | | 1/2 | 1/4 | 1/8 |

Quindi 101,101 vale $4 + 1 + 1/2 + 1/8$, cioè 5 e 5/8, o 5,625: è la figura 1.19 del libro.

> [!NOTA] Virgola o punto
> Il libro, in inglese, scrive 101.101 con il punto, e chiama la virgola *radix point*. Qui scrivo la virgola, come si fa in italiano. È lo stesso numero.

### Da una frazione al binario

Scrivi la frazione come somma di mezzi, quarti, ottavi e così via. Per esempio 2 e 3/4 è $2 + 1/2 + 1/4$, quindi 10,11. E 5/16 è $4/16 + 1/16$, cioè $1/4 + 1/16$: si scrive 0,0101.

> [!METODO] Raddoppiare la parte dopo la virgola
> Quando il numero è scritto con la virgola, come 0,625:
> 1. Raddoppia la parte dopo la virgola: $0{,}625 \cdot 2 = 1{,}25$. La parte intera, qui 1, è il primo bit dopo la virgola.
> 2. Tieni solo la parte dopo la virgola, 0,25, e raddoppia di nuovo: 0,5, quindi il bit è 0.
> 3. Continua finché resta 0: $0{,}5 \cdot 2 = 1$, bit 1, e non resta niente.
> 4. I bit, nell'ordine in cui escono: 0,625 si scrive 0,101.

> [!OLTRE] · numeri che in binario non finiscono
> In base 2 alcune frazioni non finiscono mai, come 1/3 in base dieci. Un decimo diventa 0,000110011001100…, con 0011 che si ripete per sempre. Il computer deve tagliarlo da qualche parte, e nasce un piccolo errore. Per questo in molti linguaggi di programmazione 0.1 + 0.2 dà 0.30000000000000004. Se ne riparla con la virgola mobile, nella sezione 1.7 del libro.

### Sommare con la virgola

Si mettono le virgole una sotto l'altra e si somma come sempre. L'esempio del libro: 10,011 + 100,110, cioè 2 e 3/8 più 4 e 3/4.

| Valore della posizione | 4 | 2 | 1 | , | 1/2 | 1/4 | 1/8 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| riporti | 0 | 0 | 1 | , | 1 | 0 | |
| 2 e 3/8 | 0 | 1 | 0 | , | 0 | 1 | 1 |
| 4 e 3/4 | 1 | 0 | 0 | , | 1 | 1 | 0 |
| somma | 1 | 1 | 1 | , | 0 | 0 | 1 |

Il risultato è 111,001, cioè $7 + 1/8$: infatti 2 e 3/8 più 4 e 3/4 fa 7 e 1/8.

Nello strumento qui sotto ci sono anche tre bit dopo la virgola.

```widget codifica
titolo: Bit con la virgola: clicca sui bit
modo: binario
bit: 101101
frazioni: 3
```

::: prova (a) Quanto vale 11,01? (b) Scrivi 4 e 1/2 in binario.
(a) $2 + 1 + 1/4$, cioè 3 e 1/4.

(b) 4 è 100 e 1/2 è 0,1: in tutto 100,1.
:::

> [!RICORDA]
> - Dopo la virgola le posizioni valgono 1/2, 1/4, 1/8, 1/16…
> - Da frazione a binario: scrivi la frazione come somma di mezzi, quarti, ottavi; oppure raddoppia la parte dopo la virgola e prendi le parti intere.
> - Per sommare, metti le virgole in colonna e somma come sempre.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| ASCII | «aschi» | il codice a 7 bit dei simboli dell'inglese | A = 65 = 01000001 |
| U+00E8 | «u più zero zero e otto» | il punto di codice di un simbolo in Unicode, in esadecimale | U+00E8 è la è |
| UTF-8 | «u-ti-effe otto» | il modo di scrivere i punti di codice con 1, 2, 3 o 4 byte | la è diventa C3 A8 |
| (R, G, B) | «erre, gi, bi» | rosso, verde e blu di un pixel, da 0 a 255 | (255, 255, 0) è giallo |
| #FF8000 | «cancelletto effe effe otto zero zero zero» | un colore RGB in esadecimale, due cifre per colore | arancione |
| $1101_2$ | «1101 in base due» | il numerino in basso dice la base | $1101_2 = 13_{10}$ |
| $2^n - 1$ | «due alla n meno uno» | l'intero senza segno più grande con $n$ bit | con 8 bit, 255 |
| 101,101 | «uno zero uno virgola uno zero uno» | un numero binario con la virgola: dopo la virgola 1/2, 1/4, 1/8 | 5 e 5/8 |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md).

**Che cosa serve di questa lezione**

1. **Le conversioni tra base 2 e base 10, anche con la virgola.** Nei quiz delle simulazioni del 2023/24 tornano complemento a 2, virgola mobile e notazione in eccesso. Sono le sezioni 1.6 e 1.7 del libro, e si fanno tutte con le conversioni di questa lezione.
2. **La somma in colonna e l'overflow.** Torna identica con il complemento a 2.
3. **Testo, immagini e suoni.** Non compaiono nei quiz delle simulazioni del 2023/24, ma la sezione 1.4 sta nella mappa comune del libro. Servono le idee e i conti: i byte di un testo in UTF-8, di un'immagine, di un suono.

> [!ESAME] Conversioni senza pensarci
> In 45 minuti ci sono 9 quiz: 5 minuti a domanda. Impara a memoria le potenze di 2 fino a $2^{10} = 1024$ e allenati con le conversioni finché vengono da sole. Nei quiz i numeri sono piccoli: con le potenze di 2 si fa spesso prima che con le divisioni.

**Errori da evitare**

- Leggere i resti delle divisioni dal primo all'ultimo: si leggono dall'ultimo al primo.
- Dimenticare un riporto, soprattutto quando in una colonna ci sono tre 1.
- Confondere il simbolo «5», cioè 00110101, con il numero 5, cioè 00000101.
- Contare un byte per simbolo in UTF-8: è, € ed emoji ne usano di più.
- Nei conti su immagini e suoni, confondere bit e byte, o dimenticare che lo stereo ha due canali.
- Dare alle posizioni dopo la virgola i valori 1/10 e 1/100: in base 2 valgono 1/2, 1/4, 1/8.

## Quiz

```quiz
D: Il codice ASCII della lettera M è 77. Qual è il codice della lettera m?
- $45$
- $78$
- $108$
+ $109$
- $77$
= In ASCII la minuscola vale 32 in più della maiuscola: $77 + 32 = 109$. Nei bit cambia solo il sesto bit da destra, quello che vale 32. La risposta $45$ toglie 32 invece di aggiungerlo. La risposta $78$ è il codice di N, la lettera dopo. La risposta $77$ dimentica che maiuscole e minuscole hanno codici diversi.

D: Quanti byte occupa in UTF-8 il testo «Perché 5€?», spazio compreso?
- $10$
- $11$
- $12$
+ $13$
- $20$
= I simboli sono 10. Otto sono di ASCII e occupano un byte ciascuno: P, e, r, c, h, lo spazio, 5 e il punto di domanda. La é occupa 2 byte e l'euro 3. In tutto $8 + 2 + 3 = 13$. La risposta $10$ conta un byte per simbolo, l'errore più comune. La risposta $20$ conta due byte per simbolo.

D: Quale di queste affermazioni su Unicode e UTF-8 è vera?
- UTF-8 usa sempre 8 bit per ogni simbolo.
- Unicode e UTF-8 sono due nomi dello stesso codice.
+ Un testo scritto solo con simboli di ASCII è anche un testo UTF-8 valido, con gli stessi byte.
- In UTF-8 la è occupa un byte, come nel codice Latin-1.
- Unicode contiene 256 simboli.
= In UTF-8 i punti di codice da U+0000 a U+007F, cioè i simboli di ASCII, occupano un byte che comincia con 0: è proprio il byte di ASCII. UTF-8 usa da 1 a 4 byte per simbolo. Unicode è la tabella dei numeri, UTF-8 un modo di scriverli in byte. La è in UTF-8 occupa 2 byte, C3 A8. Unicode ha posto per più di un milione di simboli.

D: Quanti colori diversi si possono scrivere con 3 byte per pixel, in RGB?
- $256$
- $768$
- $65536$
+ $16777216$
- $16000000$
= Tre byte sono 24 bit, quindi i colori sono $2^{24} = 16777216$. In un altro modo: 256 valori per il rosso, 256 per il verde e 256 per il blu, e $256 \cdot 256 \cdot 256 = 16777216$. La risposta $768$ fa $256 + 256 + 256$: i valori vanno moltiplicati, perché ogni rosso si può combinare con ogni verde e ogni blu. La risposta $16000000$ è solo un'approssimazione.

D: Un'immagine di 640 × 480 pixel in RGB, senza compressione, quanti byte occupa?
- $1120$
- $3360$
- $307200$
+ $921600$
- $7372800$
= I pixel sono $640 \cdot 480 = 307200$, ognuno di 3 byte: $307200 \cdot 3 = 921600$ byte. La risposta $307200$ dimentica i 3 byte per pixel. La risposta $7372800$ conta i bit, non i byte. Le prime due sommano larghezza e altezza invece di moltiplicarle.

D: Dieci secondi di audio mono con 44 100 campioni al secondo e 16 bit per campione: quanti byte?
- $44100$
- $441000$
+ $882000$
- $1764000$
- $7056000$
= Ogni campione ha 16 bit, cioè 2 byte. In un secondo ci sono $44100 \cdot 2 = 88200$ byte, in dieci secondi $882000$. La risposta $441000$ conta un byte per campione. La risposta $1764000$ vale per lo stereo, con due canali. La risposta $7056000$ conta i bit.

D: Quanto vale in base 10 il numero binario 110101?
- $43$
- $52$
+ $53$
- $106$
- $110101$
= Gli 1 stanno nelle posizioni da 32, 16, 4 e 1: $32 + 16 + 4 + 1 = 53$. La risposta $43$ legge i bit al contrario: 101011 vale 43. La risposta $106$ è 1101010, con uno 0 in più a destra, che raddoppia il valore. La risposta $52$ dimentica l'ultimo 1, quello che vale 1.

D: Come si scrive 44 in binario?
- $1101$
+ $101100$
- $100100$
- $101010$
- $110100$
= Con le divisioni: 44 : 2 = 22 resto 0, 22 : 2 = 11 resto 0, 11 : 2 = 5 resto 1, 5 : 2 = 2 resto 1, 2 : 2 = 1 resto 0, 1 : 2 = 0 resto 1. Dall'ultimo al primo: 101100. Controllo: $32 + 8 + 4 = 44$. La risposta $1101$ legge i resti dal primo all'ultimo, 001101, e perde gli zeri davanti: vale 13. Le altre valgono 36, 42 e 52.

D: Con 8 bit, interi senza segno, si calcola 11110000 + 00100000. Che cosa si ottiene?
+ 00010000, con overflow: la somma vale 272 e non ci sta in 8 bit.
- 00010000, senza overflow.
- 100010000, senza overflow: 8 bit bastano.
- 11010000, con overflow.
- 11111111, perché con 8 bit non si va oltre 255.
= 11110000 vale 240 e 00100000 vale 32: la somma è 272, cioè 100010000, che ha 9 bit. Con 8 bit il riporto finale a sinistra si perde e resta 00010000, cioè 16: è l'overflow, perché con 8 bit si arriva solo a 255. La terza risposta scrive giusto il numero, ma con 9 bit. Un computer non si ferma a 255: tiene gli 8 bit di destra.

D: Quanto vale il numero binario 10,011?
- 2 e 11/100
- 2,11
+ 2 e 3/8
- 2 e 3/4
- 3 e 3/8
= Prima della virgola 10 vale 2. Dopo la virgola le posizioni valgono 1/2, 1/4 e 1/8: ci sono 1/4 e 1/8, cioè $2/8 + 1/8 = 3/8$. In tutto 2 e 3/8. Le prime due risposte leggono le cifre dopo la virgola come in base dieci. La risposta 2 e 3/4 sbaglia i valori delle posizioni, come se fossero 1/2 e 1/4.

D: Quale di questi numeri, scritto in base 2, ha infinite cifre dopo la virgola?
- $0{,}5$
- $0{,}25$
- $0{,}75$
- $0{,}125$
+ $0{,}1$
= 0,5 è 1/2, cioè 0,1 in binario; 0,25 è 1/4, cioè 0,01; 0,75 è $1/2 + 1/4$, cioè 0,11; 0,125 è 1/8, cioè 0,001. Un decimo, invece, non è una somma finita di mezzi, quarti, ottavi: in binario è 0,000110011… con 0011 che si ripete per sempre.
```

## Esercizi

::: esercizio base Domanda 1 del §1.4: un messaggio in ASCII
Che cosa dice questo messaggio in ASCII, un byte per simbolo? 01000011 01101111 01101101 01110000 01110101 01110100 01100101 01110010 00100000 01010011 01100011 01101001 01100101 01101110 01100011 01100101
::: soluzione
Un trucco per le lettere: le maiuscole cominciano con 010 e valgono 64 più il posto della lettera nell'alfabeto; le minuscole cominciano con 011 e valgono 96 più il posto.

1. 01000011 vale 67, cioè $64 + 3$: la terza lettera maiuscola, C.
2. 01101111 vale 111, cioè $96 + 15$: la quindicesima lettera minuscola, o. Allo stesso modo 01101101 è m, 01110000 è p, 01110101 è u, 01110100 è t, 01100101 è e, 01110010 è r.
3. 00100000 vale 32: lo spazio.
4. 01010011 vale 83, cioè $64 + 19$: S. Poi c, i, e, n, c, e.

Il messaggio è «Computer Science», come nelle risposte del libro.
:::

::: esercizio base Domande 5 e 6 del §1.4: conversioni
(a) Scrivi in base 10: 0101, 1001, 1011, 0110, 10000, 10010. (b) Scrivi in binario: 6, 13, 11, 18, 27, 4.
::: soluzione
(a) Si sommano le posizioni con un 1.

| Binario | Somma | Decimale |
|---|---|--:|
| 0101 | 4 + 1 | 5 |
| 1001 | 8 + 1 | 9 |
| 1011 | 8 + 2 + 1 | 11 |
| 0110 | 4 + 2 | 6 |
| 10000 | 16 | 16 |
| 10010 | 16 + 2 | 18 |

(b) Con le potenze di 2, o con le divisioni.

| Decimale | Somma di potenze di 2 | Binario |
|--:|---|---|
| 6 | 4 + 2 | 110 |
| 13 | 8 + 4 + 1 | 1101 |
| 11 | 8 + 2 + 1 | 1011 |
| 18 | 16 + 2 | 10010 |
| 27 | 16 + 8 + 2 + 1 | 11011 |
| 4 | 4 | 100 |

Sono le risposte che dà il libro.
:::

::: esercizio base Domande 1 e 2 del §1.5: ancora conversioni
(a) Scrivi in base 10: 101010, 100001, 10111, 0110, 11111. (b) Scrivi in binario: 32, 64, 96, 15, 27.
::: soluzione
1. (a) 101010 è $32 + 8 + 2 = 42$; 100001 è $32 + 1 = 33$; 10111 è $16 + 4 + 2 + 1 = 23$; 0110 è $4 + 2 = 6$; 11111 è $16 + 8 + 4 + 2 + 1 = 31$.
2. (b) 32 è una potenza di 2: 100000. Anche 64: 1000000. Poi $96 = 64 + 32$: 1100000. $15 = 8 + 4 + 2 + 1$: 1111. $27 = 16 + 8 + 2 + 1$: 11011.

Controllo veloce: 11111 vale $32 - 1$, perché è tutto 1 fino alla posizione del 16. In generale $n$ bit tutti a 1 valgono $2^n - 1$.
:::

::: esercizio medio Domanda 2 del §1.4: maiuscole e minuscole
In ASCII, che legame c'è tra il codice di una lettera maiuscola e quello della stessa lettera minuscola?
::: soluzione
1. A è 01000001, cioè 65; a è 01100001, cioè 97.
2. I due byte sono uguali tranne il sesto bit da destra, cioè dall'estremo basso: 0 nella maiuscola, 1 nella minuscola.
3. Quel bit vale 32: la minuscola ha codice 32 in più della maiuscola. Lo stesso vale per tutte le 26 lettere.

È la risposta del libro. I lucidi del canale A dicono la stessa cosa al contrario: per passare da minuscola a maiuscola si toglie 32.
:::

::: esercizio medio Domanda 3 del §1.4: scrivere in ASCII
Scrivi in ASCII, un byte per simbolo, la frase «Does 2 + 3 = 5?».
::: soluzione
I simboli sono 15, spazi compresi.

| Simbolo | Codice | Byte |
|:-:|--:|:-:|
| D | 68 | 01000100 |
| o | 111 | 01101111 |
| e | 101 | 01100101 |
| s | 115 | 01110011 |
| spazio | 32 | 00100000 |
| 2 | 50 | 00110010 |
| spazio | 32 | 00100000 |
| + | 43 | 00101011 |
| spazio | 32 | 00100000 |
| 3 | 51 | 00110011 |
| spazio | 32 | 00100000 |
| = | 61 | 00111101 |
| spazio | 32 | 00100000 |
| 5 | 53 | 00110101 |
| ? | 63 | 00111111 |

Le cifre sono simboli: «2» è 00110010, non il numero 2. La domanda del libro ha anche una prima frase, «"Stop!" Cheryl shouted.». Nella risposta dell'appendice, pubblicata sul Moodle del canale A, il penultimo byte è stampato 01110100, che è la t: la d di «shouted» è 01100100.
:::

::: esercizio medio Domande 7 e 8 del §1.4: tre byte e i numeri con i punti
(a) Qual è il numero più grande che si scrive con tre byte, una cifra ASCII per byte? E in binario? (b) Nella notazione decimale puntata ogni byte si scrive come numero in base 10, e i numeri si separano con un punto: 00001100 00000101 diventa 12.5. Scrivi così 0000111100001111, 001100110000000010000000 e 0000101010100000.
::: soluzione
1. (a) In ASCII tre byte sono tre cifre: il massimo è 999. In binario 24 bit arrivano a $2^{24} - 1 = 16777215$.
2. (b) Si divide ogni fila in byte e si converte ogni byte.
3. 00001111 00001111: 15 e 15, cioè 15.15.
4. 00110011 00000000 10000000: 51, 0 e 128, cioè 51.0.128.
5. 00001010 10100000: 10 e 160, cioè 10.160.

È la notazione degli indirizzi di rete, come 192.168.1.1: quattro byte, scritti uno per uno in base 10.
:::

::: esercizio medio Domanda 10 del §1.4: un'ora di musica
Un'ora di musica stereo si registra con 44 100 campioni al secondo, come nei CD. Quanto spazio occupa, rispetto a un CD?
::: soluzione
1. Ogni campione ha 16 bit, cioè 2 byte, e i canali sono 2.
2. In un secondo: $44100 \cdot 2 \cdot 2 = 176400$ byte.
3. In un'ora, cioè 3600 secondi: $176400 \cdot 3600 = 635040000$ byte.
4. Sono circa 635 MB, e un CD contiene da 600 a 700 MB: lo riempie quasi tutto.

È la risposta del libro.
:::

::: esercizio medio Domande 3 e 4 del §1.5: le frazioni
(a) Scrivi in base 10: 11,01; 101,111; 10,1; 110,011; 0,101. (b) Scrivi in binario: 4 e 1/2; 2 e 3/4; 1 e 1/8; 5/16; 5 e 5/8.
::: soluzione
(a) Dopo la virgola le posizioni valgono 1/2, 1/4, 1/8.

| Binario | Conto | Valore |
|---|---|---|
| 11,01 | 3 + 1/4 | 3 e 1/4 |
| 101,111 | 5 + 1/2 + 1/4 + 1/8 | 5 e 7/8 |
| 10,1 | 2 + 1/2 | 2 e 1/2 |
| 110,011 | 6 + 1/4 + 1/8 | 6 e 3/8 |
| 0,101 | 1/2 + 1/8 | 5/8 |

(b) Si scrive la frazione come somma di mezzi, quarti, ottavi, sedicesimi.

| Numero | Somma | Binario |
|---|---|---|
| 4 e 1/2 | 4 + 1/2 | 100,1 |
| 2 e 3/4 | 2 + 1/2 + 1/4 | 10,11 |
| 1 e 1/8 | 1 + 1/8 | 1,001 |
| 5/16 | 1/4 + 1/16 | 0,0101 |
| 5 e 5/8 | 5 + 1/2 + 1/8 | 101,101 |

Sono le risposte del libro, che scrive i numeri con il punto.
:::

::: esercizio difficile Domanda 5 del §1.5: addizioni
Calcola in binario: (a) 11011 + 1100; (b) 1010,001 + 1,101; (c) 11111 + 0001; (d) 111,11 + 00,01.
::: soluzione
1. (a) In colonna, da destra: 1 + 0 = 1; 1 + 0 = 1; 0 + 1 = 1; 1 + 1 = 10, scrivo 0 e riporto 1; 1 + 1 di riporto = 10, scrivo 0 e riporto 1, che va in una colonna nuova. Risultato 100111. Controllo: $27 + 12 = 39$, e 100111 vale $32 + 4 + 2 + 1 = 39$.
2. (b) Con le virgole in colonna: 1010,001 + 0001,101. Dopo la virgola, da destra: 1 + 1 = 10, scrivo 0 e riporto 1; 0 + 0 + 1 = 1; 0 + 1 = 1. Prima della virgola: 0 + 1 = 1; 1 + 0 = 1; 0 + 0 = 0; 1 + 0 = 1. Risultato 1011,110. Controllo: $10{,}125 + 1{,}625 = 11{,}75$.
3. (c) 11111 + 00001: ogni colonna dà 10 con il riporto, fino a una colonna nuova. Risultato 100000. Controllo: $31 + 1 = 32$.
4. (d) 111,11 + 000,01: dopo la virgola 1 + 1 = 10, poi 1 + 0 + 1 = 10; prima della virgola altre tre volte 10. Risultato 1000,00. Controllo: $7{,}75 + 0{,}25 = 8$.

Sono le risposte del libro. Nella (c), con 5 bit senza segno, sarebbe overflow: il risultato ha 6 bit.
:::

::: esercizio difficile UTF-8 al contrario
Un file contiene questi byte, scritti in esadecimale: 43 69 74 74 C3 A0. Che parola c'è scritta?
::: soluzione
1. I primi quattro byte cominciano con 0 in binario, perché sono minori di 80 in esadecimale: sono simboli di ASCII. 43 vale 67, la C; 69 vale 105, la i; 74 vale 116, la t. Quindi «Citt».
2. C3 in binario è 11000011: comincia con 110, quindi il simbolo occupa due byte. Il byte dopo, A0, è 10100000: comincia con 10, come deve.
3. Si tolgono le parti fisse 110 e 10: restano 00011 e 100000. Insieme: 00011100000, che vale $128 + 64 + 32 = 224$, cioè E0 in esadecimale.
4. U+00E0 è la à. La parola è «Città».
:::

::: esercizio esame Una foto e un suono
Una foto di 800 × 600 pixel in RGB, senza compressione. (a) Quanti byte occupa? (b) Quanti KB, con 1 KB = 1024 byte? (c) Quanti secondi di audio stereo di qualità CD occupano lo stesso spazio?
::: soluzione
1. (a) I pixel sono $800 \cdot 600 = 480000$, ognuno di 3 byte: $1440000$ byte.
2. (b) $1440000 : 1024 = 1406{,}25$ KB, cioè circa 1,4 MB.
3. (c) Un secondo di audio stereo da CD occupa $44100 \cdot 2 \cdot 2 = 176400$ byte.
4. $1440000 : 176400$ fa circa 8,2: una sola foto occupa come poco più di 8 secondi di musica.
:::

::: esercizio medio Stessi bit, significati diversi
Il byte 00110101 viene letto prima come un intero senza segno, poi come un carattere ASCII, infine come il valore del rosso di un pixel RGB con verde e blu a zero. Che cosa rappresenta nei tre casi?
::: soluzione
1. Come intero senza segno si sommano i pesi: $32 + 16 + 4 + 1 = 53$.
2. Come codice ASCII, 53 identifica la cifra scritta «5». Il valore numerico 5, su un byte, sarebbe 00000101.
3. Come componente rossa, il valore è 53 su una scala da 0 a 255: il pixel è $(53, 0, 0)$, un rosso poco luminoso.

La sequenza di bit è sempre la stessa. È la regola di interpretazione a dire se quel 53 è un numero, il codice di una cifra o l'intensità di una componente del colore.
:::

::: esercizio medio Riporto interno o overflow?
Su 8 bit senza segno calcola (a) 01111111 + 00000001; (b) 11111111 + 00000001. Scrivi il risultato matematico e quello che resta negli 8 bit, e indica se c'è overflow.
::: soluzione
**(a)** 01111111 vale 127. Aggiungendo 1, i sette 1 di destra diventano 0 e il riporto arriva nell'ottava colonna: 10000000, cioè 128. Il risultato sta nell'intervallo 0–255: nessun overflow.

**(b)** 11111111 vale 255. Aggiungendo 1, anche l'ottava colonna genera un riporto: il risultato matematico è 100000000, cioè 256. Negli 8 bit rimane 00000000, cioè 0: c'è overflow.

Il numero di riporti interni non decide l'overflow. Conta se il risultato supera 255 e richiede una nona colonna.
:::

## Domande di ripasso

::: domanda Che cos'è un codice? Perché ASCII non basta per l'italiano?
Un codice è una tabella che dà a ogni simbolo una fila di bit. ASCII ha solo 128 simboli, pensati per l'inglese: mancano le lettere accentate come è e à, e simboli come l'euro.
:::

::: domanda Che differenza c'è tra Unicode e UTF-8?
Unicode è la tabella: dà un numero, il punto di codice, a ogni simbolo di ogni lingua. UTF-8 è un modo di scrivere quei numeri in byte, da 1 a 4 per simbolo, con un byte solo per i simboli di ASCII.
:::

::: domanda Perché i numeri si scrivono in binario e non in ASCII?
In ASCII ogni cifra occupa un byte: con 2 byte si arriva a 99. In binario gli stessi 16 bit arrivano a 65535. I conti, poi, si fanno direttamente sui bit.
:::

::: domanda Com'è fatta un'immagine a mappa di bit? E una vettoriale?
Una mappa di bit è una griglia di pixel, ognuno scritto con dei bit: in RGB tre byte, per rosso, verde e blu. Un'immagine vettoriale è una descrizione di figure, come linee e curve con le loro coordinate: si ingrandisce senza quadretti.
:::

::: domanda Come si scrive un suono in bit? Da che cosa dipende quanto spazio occupa?
Si misura l'onda a intervalli regolari e si conservano le misure, i campioni. Lo spazio dipende da quanti campioni al secondo, da quanti bit ha ogni campione, dal numero dei canali e dalla durata.
:::

::: domanda Come si passa dalla base 2 alla base 10, e dalla base 10 alla base 2?
Dalla base 2 alla 10 si sommano i valori delle posizioni con un 1: 1, 2, 4, 8… da destra. Dalla base 10 alla 2 si divide per 2 finché il quoziente è 0 e si leggono i resti dall'ultimo al primo.
:::

::: domanda Che cos'è l'overflow negli interi senza segno?
Con $n$ bit si scrivono gli interi da 0 a $2^n - 1$. Se una somma è più grande, l'ultima colonna a sinistra dà un riporto che non ha posto: il risultato non ci sta, ed è overflow.
:::

## Glossario

```glossario
Codice | Una tabella che dà a ogni simbolo una fila di bit.
ASCII | Il codice a 7 bit dei simboli dell'inglese (*American Standard Code for Information Interchange*): 128 simboli, oggi un byte ciascuno.
Unicode | La tabella che dà un numero a ogni simbolo di ogni lingua, compresi simboli matematici ed emoji.
Punto di codice | Il numero di un simbolo in Unicode (*code point*), scritto U+ e poi in esadecimale: U+00E8 è la è.
UTF-8 | Il modo più usato di scrivere i punti di codice in byte: da 1 a 4 byte per simbolo, 1 per i simboli di ASCII.
File di testo | Un file fatto solo di codici di simboli, uno dopo l'altro (*text file*).
Pixel | Uno dei quadratini di cui è fatta un'immagine (*picture element*).
Mappa di bit | Un'immagine scritta come griglia di pixel (*bit map*).
RGB | Il modo di scrivere un colore con tre numeri da 0 a 255: rosso, verde e blu (*red*, *green*, *blue*).
Immagine vettoriale | Un'immagine descritta come insieme di figure con le loro coordinate: si ingrandisce senza perdere qualità.
Campione | Una misura dell'onda di un suono (*sample*). Il campionamento è il procedimento che prende i campioni a intervalli regolari.
MIDI | Un formato che conserva le istruzioni per suonare la musica, non l'onda (*Musical Instrument Digital Interface*).
Sistema binario | Il modo di scrivere i numeri in base 2: ogni posizione vale il doppio di quella alla sua destra (*binary system*).
Virgola binaria | La virgola dei numeri in base 2: dopo di lei le posizioni valgono 1/2, 1/4, 1/8 (*radix point*).
Riporto | L'1 che passa alla colonna di sinistra quando una colonna fa 2 o 3 (*carry*).
Intero senza segno | Un numero intero da 0 in su, scritto in binario con un numero fisso di bit (*unsigned integer*).
Overflow | Quando il risultato di un conto non ci sta nei bit disponibili.
```

## Checklist

```checklist
- So scrivere e leggere un testo in ASCII, e so che maiuscola e minuscola differiscono di 32.
- So la differenza tra Unicode e UTF-8 e so contare i byte di un testo in UTF-8.
- So scrivere un colore in RGB, anche in esadecimale, e calcolare i byte di un'immagine.
- So come si registra un suono e calcolare i byte che occupa.
- So passare dalla base 2 alla base 10 e dalla base 10 alla base 2, anche con la virgola.
- So sommare in binario e riconoscere l'overflow con $n$ bit.
```

## Fonti

- R. Johnsonbaugh, J. G. Brookshear, D. Brylow, *Fondamenti dell'Informatica*, Pearson 2026 (ISBN 9788891939456), il libro di testo del corso: parte 1, che è il capitolo 1 di J. G. Brookshear, D. Brylow, *Computer Science: an overview*. Sezione 1.4 «Representing Information as Bit Patterns»: testo, ASCII e Unicode (figura 1.11), numeri, immagini, RGB, luminanza e crominanza, immagini vettoriali, suoni, campionamento e MIDI. Sezione 1.5 «The Binary System»: notazione binaria (figure 1.15 e 1.16), l'algoritmo delle divisioni (figure 1.17 e 1.18), l'addizione, le frazioni (figura 1.19). Risposte alle domande delle due sezioni nell'appendice del libro, pubblicate sul Moodle del canale A.
- Riassunto della lezione del 02/10/2026 sul Moodle del canale B: «Alfabeti ASCII e UTF-8, colori e suoni, conversioni tra binario e decimale, frazioni binarie, addizione di interi senza segno».
- Lucidi del canale A 2026/27, «Cenni sulla codifica dei dati» (F. Cardone, Moodle del canale A, aperto agli ospiti): codice ASCII e passaggio tra maiuscole e minuscole, base 2 con le divisioni, somma in base 2.
- D. Tarnoff, *Computer Organization and Design Fundamentals*, copia locale: cap. 2, §§2.3–2.6 (pp. 20–33), e cap. 3, §§3.1, 3.8–3.9 (pp. 43–44 e 67–68), come riscontro per conversioni, campionamento, quantizzazione, riporti e overflow senza segno. Non sostituisce il programma del libro Pearson.
- [RFC 3629, §3](https://www.rfc-editor.org/rfc/rfc3629.html#section-3), per lo schema dei byte UTF-8 e l'esclusione dei valori surrogati; [Unicode, caratteri e segni combinanti](https://www.unicode.org/faq/char_combmark.html), per il riquadro sulle lettere composte da più punti di codice.
- Le spiegazioni a parole, gli esempi, i riquadri «Prova tu», gli strumenti interattivi, i quiz e gli esercizi senza il numero del libro sono di questi appunti.
