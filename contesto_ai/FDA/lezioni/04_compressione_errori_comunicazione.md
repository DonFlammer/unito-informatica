---
corso: FDA
lezione: "04"
titolo: Comprimere i dati ed errori di comunicazione
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 04 · Libro, parte 1, §1.9–1.10
descrizione: >-
  Appunti della lezione 04 di Fondamenti dell'Informatica (canale B): compressione senza perdita e con perdita,
  codifica run-length, codici di Huffman, codifica relativa, codifica a dizionario e LZW, GIF, JPEG, MPEG e MP3;
  errori di comunicazione, bit e byte di parità, codici che correggono gli errori e distanza di Hamming, con
  strumenti interattivi, quiz ed esercizi svolti.
lede: >-
  Foto, canzoni e video occupano tantissimo spazio, e quando viaggiano qualche bit può arrivare sbagliato.
  Come si scrivono gli stessi dati con meno bit, quando si può perdere qualcosa senza che nessuno se ne accorga,
  e come chi riceve un messaggio si accorge di un errore e a volte lo corregge da solo.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 1 (Brookshear, cap. 1), §1.9–1.10
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 1 (J. G. Brookshear, D. Brylow, Computer Science: an overview, cap. 1), §1.9
  «Data Compression» e §1.10 «Communication Errors», con le risposte alle loro domande (appendice pubblicata sul
  Moodle del canale A); diario del canale B 2026/27; simulazione d'esame 1 del 2023/24
appunti_html: appunti/FDA/04_compressione_errori_comunicazione.html
genera_html: true
---

## In breve

- **Comprimere** vuol dire scrivere gli stessi dati con meno bit. Senza compressione una foto grande come lo schermo di un portatile occupa circa 6 milioni di byte.
- La compressione è **senza perdita** se poi si riottengono esattamente i dati di prima. È **con perdita** se si buttano dettagli che l'occhio o l'orecchio non notano.
- Quattro idee senza perdita: contare le **ripetizioni**, dare codici corti ai simboli **frequenti** (Huffman), scrivere solo le **differenze**, usare un **dizionario** che cresce mentre leggi (LZW).
- **GIF** usa al massimo 256 colori ed è adatto ai disegni. **JPEG** è per le foto: conserva bene la luminosità e meno il colore. **MPEG** fa lo stesso per i video, **MP3** per la musica.
- Quando i bit viaggiano, uno può cambiare. Il **bit di parità** fa in modo che gli 1 siano sempre dispari: se arrivano pari, c'è un errore.
- La **distanza di Hamming** conta in quanti posti due file di bit sono diverse. Nel codice del libro le lettere distano almeno 3: un errore si corregge, due si vedono.
- All'esame la distanza di Hamming è già uscita nelle simulazioni; della compressione servono le idee e i piccoli conti delle domande del libro.

> [!CANALI]
> Nel canale B è la lezione prevista per giovedì 08/10, ore 9–11: quando ho scritto questi appunti non si era ancora svolta, quindi seguono il libro. Per il docente è la lezione 5, perché la prima è stata un'introduzione: qui è la 04. Il diario del canale B la annuncia così: «(Part 1, § 1.10 Communication Errors) Data Compression LZW, JPEG, MPEG, GIF. Communication Errors, parity bit e bytes, error-correcting codes, distanza di Hamming». La compressione è la sezione 1.9 del libro, gli errori di comunicazione sono la 1.10: qui ci sono tutte e due, nell'ordine del libro. La sezione 1.8, sul linguaggio Python, nel canale B è omessa. Nel canale A Felice Cardone usa lo stesso libro: i suoi lucidi «Cenni sulla codifica dei dati» (Moodle del canale A, id 3851, aperto agli ospiti) citano il codice Morse, ma compressione e codici correttori si studiano sul libro, e sullo stesso Moodle ci sono le risposte alle domande del §1.9 e del §1.10. Nel canale C le stesse sezioni sono nei lucidi del docente.

## Perché comprimere (libro, §1.9)

Nella [lezione 02](02_testo_colori_suoni_binario.html) hai fatto due conti. Lo schermo di un portatile Full HD ha 1920 × 1080 pixel, e in RGB ogni pixel occupa 3 byte. Quindi una foto grande come lo schermo occupa 1920 × 1080 × 3 = 6 220 800 byte, circa 6 MB. Un'ora di musica come quella dei CD occupa 635 040 000 byte, circa 635 MB.

Sono numeri enormi. Uno smartphone contiene migliaia di foto, e una pagina web ne mostra decine in pochi secondi. Se ogni foto pesasse 6 MB, la memoria finirebbe subito e le pagine si caricherebbero lentissime.

### L'immagine guida: dettare al telefono

Per tutta la lezione tieni in mente questa scena. Detti un messaggio a un amico, al telefono. Vuoi metterci poco tempo, e la linea a volte gracchia.

Per fare prima, usi dei trucchi senza pensarci:

- invece di «zero, zero, zero, zero, zero, zero, zero, zero» dici «otto zeri»;
- le parole che usi di continuo le abbrevi;
- se due frasi sono quasi uguali, dici «come prima, ma con…»;
- se avete lo stesso libro, dici «pagina 12, parola 5» invece di dettare la parola.

Sono proprio le quattro tecniche del libro. Scrivere gli stessi dati con meno bit si chiama **compressione** (*data compression*). Le prossime quattro sezioni le vedono una per volta.

### Senza perdita e con perdita

Prova a comprimere due cose diverse.

- **Un testo.** Se cambi una sola lettera, «pesca» diventa «pasta». Dopo la compressione il testo deve tornare identico, lettera per lettera.
- **Una foto.** Se un pixel tra due milioni diventa un pochino più scuro, nessuno se ne accorge. Si può accettare di perdere qualche dettaglio, se in cambio la foto occupa dieci volte meno.

Il libro chiama i due casi così.

> [!DEF] Compressione senza perdita e con perdita (libro, §1.9)
> Una compressione è **senza perdita** (*lossless*) se dai dati compressi si ricostruiscono esattamente i dati originali. È **con perdita** (*lossy*) se i dati ricostruiti sono solo simili agli originali.

**Come si legge.** Senza perdita: comprimi, decomprimi, e hai di nuovo gli stessi identici bit. Con perdita: decomprimi e hai qualcosa di molto simile, ma non uguale. Per testi, programmi e numeri serve la compressione senza perdita. Per foto, musica e video va bene anche quella con perdita.

::: prova Quali di questi file si possono comprimere con perdita? (a) Il programma in C del laboratorio. (b) La foto delle vacanze. (c) L'estratto conto della banca. (d) Una canzone.
Con perdita vanno bene solo (b) e (d): una foto un po' meno nitida e una canzone un po' meno fedele si guardano e si ascoltano lo stesso. Il programma e l'estratto conto devono restare identici: un carattere diverso può cambiare tutto.
:::

> [!RICORDA]
> - Comprimere vuol dire scrivere gli stessi dati con meno bit.
> - Senza perdita: si riottengono esattamente i dati di prima. Con perdita: si ottiene qualcosa di molto simile.
> - Testi, programmi e numeri: solo senza perdita. Foto, suoni e video: anche con perdita.

## Le ripetizioni: la codifica run-length

Torna al telefono. Se il messaggio è 0000000011110000, non detti sedici cifre. Dici «otto zeri, quattro uni, quattro zeri». Hai detto la stessa cosa con molte meno parole.

Un gruppo di simboli uguali uno dopo l'altro si chiama **ripetizione** (*run*). Al posto di ogni ripetizione si scrivono due cose: quale simbolo si ripete e quante volte. Questo modo di comprimere si chiama **codifica run-length** (*run-length encoding*), cioè «codifica della lunghezza delle ripetizioni».

> [!ESEMPIO] L'esempio del libro
> Una fila di 458 bit è fatta di 253 uni, poi 118 zeri, poi 87 uni. Invece di scrivere i 458 bit, si scrive «253 uni, 118 zeri, 87 uni».
>
> Quanti bit servono? Ogni numero è al massimo 255, quindi sta in un byte. Con le monete della [lezione 02](02_testo_colori_suoni_binario.html):
>
> | Numero | Monete | In un byte |
> |--:|---|:-:|
> | 253 | 128 + 64 + 32 + 16 + 8 + 4 + 1 | 11111101 |
> | 118 | 64 + 32 + 16 + 4 + 2 | 01110110 |
> | 87 | 64 + 16 + 4 + 2 + 1 | 01010111 |
>
> Tre byte, cioè 24 bit, più l'accordo che la fila comincia con gli uni. Invece di 458 bit.

Dove funziona bene? Dove ci sono lunghe ripetizioni. Pensa alla F della lezione 02, disegnata con i pixel: in un disegno in bianco e nero ci sono lunghe file di pixel bianchi e lunghe file di pixel neri. Anche i fax e le schermate con grandi zone di un colore solo si comprimono bene così.

Dove funziona male? Prendi la fila 01010101. Le ripetizioni sono otto, tutte lunghe 1: «uno zero, un uno, uno zero…». Scritta così diventa più lunga di prima. Quando i dati cambiano di continuo, come nelle foto, la codifica run-length non serve.

La codifica run-length è **senza perdita**: dal numero di ripetizioni si riscrive la fila identica.

::: prova (a) Scrivi con la codifica run-length la fila 0000011111111000. (b) Che fila di bit è «3 uni, 2 zeri, 5 uni»?
(a) Ci sono cinque 0, otto 1 e tre 0: «5 zeri, 8 uni, 3 zeri». Controllo: 5 + 8 + 3 = 16, e la fila ha 16 bit.

(b) 111 00 11111, cioè 1110011111.
:::

> [!RICORDA]
> - Run-length: al posto di una ripetizione si scrivono il simbolo e quante volte si ripete.
> - Funziona bene con lunghe file uguali, come nei disegni e nei fax; male quando i dati cambiano spesso.
> - È senza perdita.

## Codici corti per i simboli frequenti: Huffman

Il telegrafo usava il **codice Morse**: ogni lettera è una fila di punti e linee. Guarda quanto sono lunghe:

| Lettera | Morse | Quanto è frequente in inglese |
|:-:|:-:|---|
| E | · | la più frequente |
| T | – | la seconda |
| A | · – | molto frequente |
| Q | – – · – | rara |

Chi l'ha inventato ha dato i codici più corti alle lettere più usate. Così i messaggi si trasmettono prima. È la seconda tecnica del libro: la **codifica in base alla frequenza** (*frequency-dependent encoding*). La **frequenza** di un simbolo è quante volte compare.

In ASCII, invece, ogni lettera occupa un byte: la «e» come la «q». Si spreca spazio.

### Un problema: dove finisce una lettera?

Nel Morse la E è «·» e la A è «· –». Se ricevi «· –», è una A oppure una E seguita da una T? Il telegrafista lo capisce perché tra una lettera e l'altra c'è una pausa.

Con i bit non ci sono pause: c'è solo una fila di 0 e di 1. Per leggerla senza dubbi serve una regola.

> [!IDEA]
> Nessun codice deve essere l'inizio di un altro. Allora, leggendo da sinistra, appena riconosci un codice sai che quella lettera è finita.

Un codice con questa regola si chiama **codice prefisso**: nessun codice è il «prefisso», cioè la parte iniziale, di un altro.

### Un esempio piccolo: BANANA

La parola BANANA ha tre lettere diverse: A tre volte, N due volte, B una volta.

Con un codice in cui tutte le lettere hanno la stessa lunghezza, un bit non basta: dà solo due possibilità, 0 e 1. Servono 2 bit per lettera, per esempio A = 00, B = 01, N = 10. Le lettere sono 6, quindi 6 × 2 = 12 bit.

Ora prova un codice di lunghezza variabile: A = 0, B = 10, N = 11.

- È un codice prefisso? A è 0, e nessun altro codice comincia con 0. B e N cominciano con 1, ma sono diversi al secondo bit. Sì.
- BANANA diventa 10 0 11 0 11 0, cioè 100110110: 9 bit invece di 12.

Per leggerlo, parti da sinistra:

1. 1 da solo non è un codice; 10 è B.
2. 0 è A.
3. 1 da solo no; 11 è N.
4. Poi 0 è A, 11 è N, 0 è A.

Viene di nuovo BANANA, senza nessuna pausa.

### Come si costruisce: l'albero di Huffman

Come si sceglie il codice migliore? C'è un metodo, inventato da David Huffman nel 1952. I codici che produce si chiamano **codici di Huffman**.

L'idea: si mettono insieme, un passo alla volta, le due lettere più rare. Così le lettere rare finiscono in fondo e hanno codici lunghi, quelle frequenti restano in alto e hanno codici corti.

> [!METODO] L'albero di Huffman
> 1. Conta quante volte compare ogni simbolo: è il suo **peso**.
> 2. Prendi i due pesi più piccoli e uniscili in un gruppo. Il peso del gruppo è la somma dei due.
> 3. Ripeti il passo 2, trattando i gruppi come simboli, finché resta un gruppo solo.
> 4. A ogni unione, scrivi 0 sul ramo di sinistra e 1 su quello di destra.
> 5. Il codice di un simbolo è la fila di 0 e 1 che leggi scendendo dalla cima fino a lui.

> [!ESEMPIO] PAPPAGALLO, passo per passo
> Le lettere sono 10. Pesi: P 3, A 3, L 2, G 1, O 1.
>
> | Passo | Unisci | Nuovo peso | Restano |
> |:-:|---|:-:|---|
> | 1 | G (1) e O (1) | 2 | P 3, A 3, L 2, GO 2 |
> | 2 | L (2) e GO (2) | 4 | P 3, A 3, LGO 4 |
> | 3 | P (3) e A (3) | 6 | LGO 4, PA 6 |
> | 4 | LGO (4) e PA (6) | 10 | un gruppo solo |
>
> Al passo 3 i due pesi più piccoli sono 3 e 3: il 4 di LGO è più grande, quindi aspetta.

Ecco l'albero. In cima c'è il gruppo finale, con peso 10. Ogni unione è una biforcazione, con 0 a sinistra e 1 a destra.

```grafico
titolo: L'albero di Huffman di PAPPAGALLO
x: 0 10
y: -0.6 5.4
assi: no
griglia: no
segmento: 5 4.5 2.5 3.2
segmento: 5 4.5 7.5 3.2
segmento: 2.5 3.2 1.2 1.9
segmento: 2.5 3.2 3.8 1.9
segmento: 3.8 1.9 2.8 0.6
segmento: 3.8 1.9 4.8 0.6
segmento: 7.5 3.2 6.3 1.9
segmento: 7.5 3.2 8.7 1.9
punto: 5 4.5 | "10" | n
punto: 2.5 3.2 | "LGO 4" | no
punto: 7.5 3.2 | "PA 6" | ne
punto: 1.2 1.9 | "L 2" | s
punto: 3.8 1.9 | "GO 2" | ne
punto: 2.8 0.6 | "G 1" | s
punto: 4.8 0.6 | "O 1" | s
punto: 6.3 1.9 | "P 3" | s
punto: 8.7 1.9 | "A 3" | s
testo: 3.75 3.85 | "0" | no | accento
testo: 6.25 3.85 | "1" | ne | accento
testo: 1.85 2.55 | "0" | no | accento
testo: 3.15 2.55 | "1" | ne | accento
testo: 3.2 1.2 | "0" | o | accento
testo: 4.4 1.2 | "1" | e | accento
testo: 6.9 2.55 | "0" | no | accento
testo: 8.1 2.55 | "1" | ne | accento
```

Per trovare il codice di una lettera, scendi dalla cima e scrivi i numeri dei rami. Per arrivare alla G: a sinistra (0), poi a destra (1), poi a sinistra (0). Quindi G = 010.

| Lettera | Peso | Codice | Bit in tutto |
|:-:|:-:|:-:|--:|
| P | 3 | 10 | 3 × 2 = 6 |
| A | 3 | 11 | 3 × 2 = 6 |
| L | 2 | 00 | 2 × 2 = 4 |
| G | 1 | 010 | 1 × 3 = 3 |
| O | 1 | 011 | 1 × 3 = 3 |

In tutto 6 + 6 + 4 + 3 + 3 = 22 bit. Con un codice a lunghezza fissa servono 3 bit per lettera, perché le lettere diverse sono 5 e con 2 bit le possibilità sono solo 4: in tutto 10 × 3 = 30 bit. In ASCII, un byte per lettera, sarebbero 80 bit.

Il codice è prefisso da solo: ogni lettera sta in fondo a un ramo, e nessuna sta sulla strada per un'altra.

Il libro descrive la tecnica così.

> [!DEF] Codifica in base alla frequenza (libro, §1.9)
> Nella **codifica in base alla frequenza** (*frequency-dependent encoding*) la lunghezza del codice di un simbolo dipende da quanto spesso il simbolo compare: più è frequente, più il codice è corto. I codici costruiti con il metodo di Huffman si chiamano **codici di Huffman**.

**Come si legge.** Le lettere frequenti hanno codici corti, quelle rare codici lunghi, come nel Morse. In media il messaggio occupa meno bit. È senza perdita: dal codice si riottiene il messaggio identico.

> [!TRAPPOLA] I pesi uguali danno codici diversi, ma lo stesso totale
> Quando due pesi sono uguali, puoi scegliere quale unire per primo, e cambiano i codici. Il numero totale di bit, però, viene sempre lo stesso. Se il tuo codice non coincide con quello della soluzione, controlla il totale e che sia un codice prefisso.

::: prova (a) Con il codice di PAPPAGALLO, che parola è 10110011? (b) Costruisci un codice di Huffman per CASSA e conta i bit.
(a) Da sinistra: 10 è P, 11 è A, 00 è L, 11 è A. La parola è PALA.

(b) Pesi: C 1, A 2, S 2. Passo 1: i due più piccoli sono C (1) e uno dei due 2; prendi A, e il gruppo CA pesa 3. Passo 2: S (2) e CA (3), peso 5. Codici: S = 0, C = 10, A = 11. Bit: S 2 × 1, C 1 × 2, A 2 × 2, in tutto 2 + 2 + 4 = 8. Se al passo 1 prendi S invece di A, viene A = 0, C = 10, S = 11: sempre 8 bit. Con 2 bit per lettera sarebbero 10.
:::

> [!RICORDA]
> - Codifica in base alla frequenza: codici corti ai simboli frequenti, lunghi a quelli rari.
> - Serve un codice prefisso: nessun codice è l'inizio di un altro, così si legge senza pause.
> - Huffman: unisci sempre i due pesi più piccoli; 0 a sinistra, 1 a destra; il codice è la strada dalla cima.

## Solo le differenze: la codifica relativa

Ancora al telefono. Detti le temperature di una settimana: 20, 21, 21, 22, 20, 19, 19. Dopo la prima, puoi dire solo quanto cambia: «20, poi più 1, poi uguale, poi più 1, poi meno 2, poi meno 1, poi uguale».

I numeri da dettare diventano 20, +1, 0, +1, −2, −1, 0. Sono quasi tutti piccoli, e i numeri piccoli si scrivono con pochi bit.

Questa è la terza tecnica: la **codifica relativa** (*relative encoding*), detta anche **differenziale** (*differential encoding*). Si scrive il primo dato per intero; per ogni dato dopo, solo la differenza con quello prima.

Funziona bene quando ogni dato somiglia a quello prima. Il libro fa l'esempio dei video. Un video è una fila di immagini, i **fotogrammi**, 25 o 30 al secondo. Due fotogrammi vicini sono quasi uguali: la persona si è mossa appena, lo sfondo è identico. Invece di conservare ogni fotogramma per intero, si conserva solo che cosa è cambiato.

Anche i campioni di un suono, quelli della lezione 02, cambiano poco da uno all'altro. Per questo la codifica relativa si usa anche per l'audio.

> [!NOTA] I numeri negativi
> Le differenze possono essere negative, come −2. Come si scrive in bit un numero con il segno meno lo dice la sezione 1.6 del libro, con il complemento a 2: è nella [lezione 03](03_interi_con_segno_virgola_mobile.html).

Se le differenze si scrivono esatte, la codifica relativa è senza perdita. Se si arrotondano per risparmiare ancora, diventa con perdita.

::: prova (a) Scrivi con la codifica relativa 100, 102, 103, 103, 101, 98. (b) Quali numeri erano 50, +3, −1, 0, +2?
(a) Il primo resta 100. Poi 102 − 100 = +2; 103 − 102 = +1; 103 − 103 = 0; 101 − 103 = −2; 98 − 101 = −3. Viene 100, +2, +1, 0, −2, −3.

(b) Si somma ogni differenza al numero prima: 50; 50 + 3 = 53; 53 − 1 = 52; 52 + 0 = 52; 52 + 2 = 54. I numeri erano 50, 53, 52, 52, 54.
:::

> [!RICORDA]
> - Codifica relativa: il primo dato per intero, poi solo le differenze con il dato prima.
> - Funziona quando ogni dato somiglia al precedente: fotogrammi di un video, campioni di un suono.
> - Con le differenze esatte è senza perdita.

## Il dizionario che cresce: LZW

L'ultimo trucco del telefono: tu e il tuo amico avete lo stesso vocabolario. Invece di dettare una parola lettera per lettera, dici «pagina 512, parola 7». Lui la cerca e la trova.

Questa è la quarta tecnica, la **codifica a dizionario** (*dictionary encoding*). Il **dizionario** è un elenco numerato di parole, uguale per chi scrive e per chi legge. Al posto di ogni parola si scrive il suo numero nell'elenco.

Il libro fa l'esempio del correttore ortografico di un programma di videoscrittura, che ha già un dizionario. Con 25 000 parole, quanti bit servono per il numero di una parola?

- Con 14 bit i numeri possibili sono $2^{14} = 16384$. Si legge «due alla quattordici» e vuol dire 2 moltiplicato per sé stesso 14 volte, come nella lezione 02. Non bastano.
- Con 15 bit sono $2^{15} = 32768$: bastano.

Quindi ogni parola costa 15 bit. La parola «computer» in ASCII ne occupa 8 × 8 = 64.

### Il dizionario si costruisce mentre leggi

C'è un problema: un dizionario fisso va bene per le parole di una lingua, ma non per una foto o per un file qualunque. L'idea furba è costruire il dizionario **mentre** si comprime. Chi legge lo ricostruisce identico, negli stessi momenti, quindi non bisogna nemmeno spedirlo.

Questa si chiama **codifica a dizionario adattiva** (*adaptive dictionary encoding*). Il metodo più famoso è **LZW**, dalle iniziali dei suoi inventori: Lempel, Ziv e Welch.

Il libro la spiega con messaggi fatti di tre simboli: la x, la y e lo spazio. Le regole, nella versione del libro:

> [!METODO] LZW come nel libro
> 1. All'inizio il dizionario contiene solo i simboli singoli: x = 1, y = 2, spazio = 3.
> 2. Leggi il messaggio una parola alla volta (una parola finisce allo spazio).
> 3. Se la parola è già nel dizionario, scrivi il suo numero.
> 4. Se non c'è, scrivi i numeri delle sue lettere, una per una. Poi aggiungi la parola al dizionario, con il primo numero libero.
> 5. Ogni spazio si scrive 3.

> [!ESEMPIO] Il messaggio del libro: «xyx xyx xyx xyx»
> | Leggo | Nel dizionario? | Scrivo | Il dizionario diventa |
> |---|:-:|:-:|---|
> | xyx | no | 1 2 1 | aggiungo xyx = 4 |
> | spazio | sì | 3 | |
> | xyx | sì, è il 4 | 4 | |
> | spazio | sì | 3 | |
> | xyx | sì | 4 | |
> | spazio | sì | 3 | |
> | xyx | sì | 4 | |
>
> Il messaggio compresso è 121343434: nove numeri invece di quindici simboli.

La prima volta la parola xyx costa tre numeri. Da lì in poi ne costa uno solo. Più un messaggio ripete le stesse parole, più si guadagna.

### Chi legge ricostruisce il dizionario

Il tuo amico riceve 121343434 e conosce solo il dizionario iniziale: x = 1, y = 2, spazio = 3. Legge un numero alla volta.

1. 1, 2, 1: scrive x, y, x.
2. 3: è uno spazio. La parola xyx è finita, ed è nuova: la aggiunge al dizionario come 4, proprio come aveva fatto chi ha compresso.
3. 4: ora sa che è xyx, e la scrive.
4. Poi 3, 4, 3, 4: spazio, xyx, spazio, xyx.

Ha riottenuto «xyx xyx xyx xyx», identico. LZW è senza perdita.

::: prova Comprimi con LZW, come nel libro, il messaggio «yxy yxy x yxy», partendo da x = 1, y = 2, spazio = 3.
1. yxy non c'è: scrivi 2 1 2, poi lo spazio 3. Aggiungi yxy = 4.
2. yxy ora è il 4: scrivi 4, poi 3.
3. x c'è già, è l'1: scrivi 1, poi 3. Non si aggiunge niente.
4. yxy: scrivi 4.

Il risultato è 212343134.
:::

> [!APPROFONDIMENTO] Il vero LZW lavora sulle sequenze, non sulle parole
> Il libro presenta LZW con le parole separate dagli spazi, perché è più facile da seguire. Il vero LZW, quello dentro GIF, non cerca gli spazi: legge un simbolo alla volta e cerca la sequenza più lunga che ha già nel dizionario. Scrive il suo numero e aggiunge al dizionario quella sequenza con in più il simbolo che viene dopo.
>
> Un esempio con il dizionario iniziale A = 0, B = 1 e il messaggio ABABABA:
>
> 1. A c'è, AB no: scrive 0 e aggiunge AB = 2.
> 2. B c'è, BA no: scrive 1 e aggiunge BA = 3.
> 3. AB c'è, ABA no: scrive 2 e aggiunge ABA = 4.
> 4. Resta ABA, che c'è: scrive 4.
>
> Il messaggio diventa 0 1 2 4. L'idea è la stessa del libro: il dizionario cresce con il messaggio. Per l'esame basta la versione del libro.

> [!RICORDA]
> - Codifica a dizionario: al posto di una parola si scrive il suo numero in un elenco comune.
> - LZW: il dizionario parte dai simboli singoli e cresce mentre si comprime; chi legge lo ricostruisce identico.
> - Nel libro: parola nuova = numeri delle sue lettere, poi entra nel dizionario; parola già vista = il suo numero; spazio = 3.

## Le immagini: GIF e JPEG

Nella lezione 02 un pixel in **RGB** occupa 3 byte: quanto rosso, quanto verde e quanto blu, ognuno da 0 a 255. I colori possibili sono più di sedici milioni. Le quattro tecniche di prima aiutano, ma per le immagini si fa di più.

### GIF: dipingere con i numeri

Conosci i disegni da colorare con i numeri? Ogni zona ha un numero, e in fondo alla pagina c'è la legenda: 1 = rosso, 2 = giallo, 3 = blu.

**GIF** (*Graphic Interchange Format*) fa così. Sceglie al massimo 256 colori e li mette in una tabella, la **tavolozza** (*palette*). Ogni colore della tavolozza è scritto con i suoi 3 byte RGB. Poi ogni pixel non dice più il suo colore: dice solo il numero del colore nella tavolozza.

Un numero da 0 a 255 sta in un byte. Quindi ogni pixel occupa 1 byte invece di 3: l'immagine pesa circa un terzo.

> [!ESEMPIO] Un disegno di 400 × 300 pixel
> 1. I pixel sono 400 × 300 = 120 000.
> 2. In RGB: 120 000 × 3 = 360 000 byte.
> 3. In GIF, prima di LZW: 120 000 byte per i pixel, più 256 × 3 = 768 byte per la tavolozza. In tutto 120 768 byte.

Poi GIF comprime ancora i numeri dei pixel con LZW, il dizionario che cresce. Un colore della tavolozza può anche essere «trasparente»: lì si vede lo sfondo che c'è dietro.

GIF è **con perdita**, se l'immagine di partenza ha più di 256 colori: i colori che non stanno nella tavolozza vengono sostituiti dal più vicino. Per una foto, che ha migliaia di sfumature, la differenza si vede. Per un disegno o un fumetto, che hanno pochi colori e zone di colore pieno con bordi netti, non si perde quasi niente. È la domanda 3 del §1.9.

### JPEG: l'occhio vede meglio la luce del colore

Guarda una foto in bianco e nero: capisci tutto, anche senza i colori. I dettagli, i bordi, le facce stanno soprattutto nella **luminosità**, cioè quanto è chiaro o scuro ogni punto. Il colore conta, ma l'occhio ne nota i piccoli cambiamenti molto meno.

**JPEG** (dal nome del gruppo che l'ha creato, *Joint Photographic Experts Group*) è il formato delle fotografie, e sfrutta proprio questo. Ha una versione senza perdita, poco usata perché comprime poco. Quella di tutti i giorni è lo **standard di base** (*baseline standard*), che è con perdita. Funziona così:

1. Ogni pixel si scrive con tre numeri diversi da RGB: uno per la luminosità (*luminance*) e due per il colore (*chrominance*). Ne parlava già una nota della lezione 02.
2. L'immagine si divide in quadratini di 2 × 2 pixel. Per ogni quadratino si tiene la luminosità di tutti e quattro i pixel, ma per il colore solo la **media** dei quattro.
3. L'immagine si divide in blocchi di 8 × 8 pixel. Ogni blocco si trasforma con un procedimento matematico, e i dettagli più fini, quelli che l'occhio vede meno, si approssimano.
4. Alla fine si usano le tecniche senza perdita di prima: run-length, codifica relativa, codici a lunghezza variabile.

Il passo 2, contato su un quadratino:

| | Luminosità | Colore | In tutto |
|---|:-:|:-:|:-:|
| Prima | 4 pixel × 1 numero = 4 | 4 pixel × 2 numeri = 8 | 12 numeri |
| Dopo | 4 | 1 media × 2 numeri = 2 | 6 numeri |

Solo questo passo dimezza i numeri, e l'occhio non vede la differenza. Con tutti i passi, di solito una foto in JPEG occupa almeno dieci volte meno che in RGB.

> [!NOTA] TIFF
> Il libro cita anche **TIFF** (*Tagged Image File Format*). Più che un modo di comprimere è un contenitore: oltre all'immagine conserva altre informazioni, come la data e le impostazioni della fotocamera. Si usa soprattutto per le fotografie, quando la qualità conta più dello spazio.

> [!TRAPPOLA] Né GIF né JPEG sono senza perdita
> GIF perde colori, il JPEG di base perde dettagli. Se una foto deve restare identica, come le immagini di una sonda spaziale da studiare al pixel, non vanno bene né l'uno né l'altro. È la domanda 4 del §1.9.

::: prova (a) Che formato sceglieresti per il logo di una squadra, con quattro colori pieni? E per la foto di un tramonto? (b) Un'immagine di 100 × 100 pixel in GIF: quanti byte occupano i pixel, prima di LZW?
(a) Per il logo GIF: pochi colori, zone piene e bordi netti, e con 4 colori non perde niente. Per il tramonto JPEG: migliaia di sfumature, che la tavolozza di GIF non riesce a tenere.

(b) Un byte per pixel: 100 × 100 = 10 000 byte. Più i 768 byte della tavolozza.
:::

> [!RICORDA]
> - GIF: tavolozza di al massimo 256 colori, un byte per pixel, poi LZW. Con perdita se i colori erano di più. Ottimo per disegni e fumetti.
> - JPEG di base: luminosità per ogni pixel, colore solo come media su 2 × 2 pixel, poi blocchi di 8 × 8. Con perdita. Per le foto.
> - L'idea di JPEG: l'occhio nota la luminosità più del colore.

## Suoni e video: MP3 e MPEG

Sei a un concerto. Esplode un petardo, e per un attimo non senti nient'altro: nemmeno la voce del cantante, che pure c'è. Poi accanto a una cassa che suona un basso fortissimo qualcuno ti parla a voce bassa, con una voce grave: non lo senti.

Sono due limiti veri dell'orecchio, e **MP3**, il formato più famoso per la musica, li sfrutta. Il libro li chiama così:

- **mascheramento temporale** (*temporal masking*): subito dopo un suono forte, per un breve momento, l'orecchio non sente i suoni deboli;
- **mascheramento in frequenza** (*frequency masking*): un suono forte copre i suoni deboli con una nota vicina alla sua. La **frequenza** di un suono è quello che lo fa più grave o più acuto.

MP3 toglie dalla registrazione i suoni che tanto non sentiresti. È una compressione con perdita, ma la perdita è scelta in modo da non sentirsi. È la domanda 6 del §1.9.

Quanto si guadagna? Un CD, come nella lezione 02, conserva ogni secondo 44 100 campioni da 16 bit, per due canali: 44 100 × 16 × 2 = 1 411 200 bit al secondo. Un MP3 di buona qualità ne usa spesso 128 000. Il conto 1 411 200 : 128 000 fa circa 11: lo stesso brano occupa circa undici volte meno.

### I video: MPEG

Per i video c'è **MPEG** (*Motion Picture Experts Group*). Usa la codifica relativa che hai già visto:

- solo alcuni fotogrammi si conservano per intero, compressi come immagini, in modo simile a JPEG;
- per i fotogrammi in mezzo si conservano solo le differenze rispetto a quelli vicini.

In una scena in cui una persona parla davanti a un muro, il muro si conserva una volta sola. Di ogni fotogramma dopo cambiano solo la bocca e gli occhi.

> [!ESAME] Le approssimazioni si accumulano
> La domanda 7 del §1.9 chiede quale fenomeno preoccupante capita quando si scrivono in bit numeri, immagini e suoni. La risposta: si fanno approssimazioni. Con i numeri, ogni calcolo può far crescere l'errore. Con immagini e suoni di solito non è grave, perché si conservano e si riproducono soltanto. Ma se una foto si comprime, si riapre e si ricomprime tante volte, gli errori si sommano: come la fotocopia di una fotocopia di una fotocopia.

::: prova (a) Quale di questi è un esempio di mascheramento in frequenza: (1) dopo un colpo di tamburo non senti un sussurro per un istante; (2) un violino forte copre un violino debole che suona una nota quasi uguale? (b) In un video di una partita, che cosa cambia poco da un fotogramma all'altro?
(a) Il (2): il suono forte copre quello debole con una nota vicina. Il (1) è mascheramento temporale: dipende dal momento, non dalla nota.

(b) Il campo, gli spalti, le scritte sullo schermo: restano quasi uguali. Cambiano i giocatori e la palla. MPEG conserva per intero solo qualche fotogramma, e per gli altri le differenze.
:::

> [!RICORDA]
> - MP3: toglie i suoni che l'orecchio non sente, per il mascheramento temporale e in frequenza. Con perdita.
> - MPEG: alcuni fotogrammi interi, degli altri solo le differenze (codifica relativa).
> - Ogni approssimazione è un piccolo errore, e ricomprimendo tante volte gli errori si sommano.

## Accorgersi di un errore: il bit di parità (libro, §1.10)

Torna al telefono. La linea gracchia, e il tuo amico capisce «cinque» invece di «nove». Con i bit succede lo stesso: un graffio su un disco, un disturbo nell'aria o sul cavo, e uno 0 arriva come 1, o un 1 come 0. Il libro chiama questi problemi **errori di comunicazione** (*communication errors*).

Chi riceve non vede il messaggio giusto: vede solo i bit che arrivano. Come fa ad accorgersi che uno è sbagliato?

### L'accordo: gli 1 sono sempre dispari

Tu e il tuo amico vi mettete d'accordo così: ogni gruppo di bit che spedisci deve avere un numero **dispari** di 1. Se un byte ha già un numero dispari di 1, aggiungi uno 0. Se ne ha un numero pari, aggiungi un 1, così diventano dispari.

Il bit in più si chiama **bit di parità** (*parity bit*). Il libro lo mette a sinistra, davanti al byte: ogni byte diventa una fila di 9 bit.

> [!ESEMPIO] Le lettere A e F, come nel libro
> | Lettera | Byte ASCII | Quanti 1 | Bit di parità | I 9 bit |
> |:-:|:-:|:-:|:-:|:-:|
> | A | 01000001 | 2, pari | 1 | 101000001 |
> | F | 01000110 | 3, dispari | 0 | 001000110 |
>
> Controllo: in 101000001 gli 1 sono 3, in 001000110 sono 3. Dispari tutti e due.

All'arrivo il tuo amico conta gli 1 dei 9 bit. Se sono dispari, va tutto bene. Se sono pari, c'è stato un errore, e chiede di rispedire.

Perché funziona? Ogni bit che cambia aggiunge un 1 o ne toglie uno. In tutti e due i casi, un numero dispari diventa pari.

> [!DEF] Parità dispari (libro, §1.10)
> Nella **parità dispari** (*odd parity*) a ogni fila di bit si aggiunge un bit di parità, scelto in modo che il numero totale di 1, compreso il bit di parità, sia dispari. Nella **parità pari** (*even parity*) il totale deve essere pari. Il libro usa la parità dispari.

**Come si legge.** Prima di spedire conti gli 1 e aggiungi il bit che rende il totale dispari. Chi riceve riconta tutti i bit, compreso quello di parità: un totale pari vuol dire che qualcosa si è rotto per strada. Con la parità pari si fa lo stesso, al contrario.

Un vantaggio della parità dispari: una fila di soli 0 non è mai giusta, perché zero 1 sono un numero pari. Se una linea si guasta e manda solo zeri, chi riceve se ne accorge.

Alcune memorie dei computer usano proprio questo: per ogni byte conservano 9 bit, gli 8 del byte più il bit di parità.

Nello strumento clicca sui bit del byte e scegli la parità: il bit di parità si calcola da solo. Poi prova «Un errore» e «Due errori»: guarda quando l'errore si vede.

```widget codifica
titolo: Il bit di parità: aggiungilo, poi prova uno o due errori
modo: parita
bit: 01000001
parita: dispari
```

### Due errori non si vedono

Se cambiano due bit, il primo rende pari il totale e il secondo lo rende di nuovo dispari. Il conto torna, e chi riceve non si accorge di niente.

> [!ESEMPIO] La A con due errori
> Spedisci 101000001: tre 1, dispari. Per strada cambiano gli ultimi due bit e arriva 101000010. Gli 1 sono ancora tre, dispari: sembra tutto a posto. Ma 01000010 è la B.

Il bit di parità vede un errore, tre errori, cinque errori: un numero dispari. Non vede due, quattro, sei errori. E anche quando vede un errore, non dice quale bit è sbagliato. È la domanda 2 del §1.10.

::: prova Questi gruppi di 9 bit sono stati spediti con parità dispari. In quali c'è sicuramente un errore? (a) 001100001 (b) 110000000 (c) 111111111
Conta gli 1. (a) Sono tre: dispari, nessun errore visibile. (b) Sono due: pari, quindi c'è un errore. (c) Sono nove: dispari, nessun errore visibile.

«Nessun errore visibile» non vuol dire «nessun errore»: potrebbero essercene due.
:::

> [!RICORDA]
> - Parità dispari: si aggiunge un bit perché gli 1 siano dispari. Il libro lo mette a sinistra del byte.
> - All'arrivo si contano tutti gli 1: se sono pari, c'è un errore.
> - Vede solo un numero dispari di errori, e non dice dove sono.

## Un byte di controllo per tanti byte

Un bit di parità per ogni byte costa un bit ogni otto: il messaggio cresce di un ottavo. Per messaggi lunghi si usa anche un'altra strada. Si spediscono i byte così come sono, e alla fine si aggiunge un byte in più, che li controlla tutti.

È come quando detti una lista di numeri e alla fine aggiungi: «il totale fa 312». Se il tuo amico somma e non gli torna 312, ha capito male qualcosa.

### Il byte di controllo

Metti i byte uno sotto l'altro. Ogni colonna è una fila di bit, e per ogni colonna calcoli un bit di parità. Gli otto bit di parità, uno per colonna, formano un byte: il **byte di controllo** (*checkbyte*). Qui uso la parità dispari, come per il bit di parità del libro.

> [!ESEMPIO] Il byte di controllo di «Ciao»
> | | col. 1 | col. 2 | col. 3 | col. 4 | col. 5 | col. 6 | col. 7 | col. 8 |
> |---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> | C | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 1 |
> | i | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
> | a | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
> | o | 0 | 1 | 1 | 0 | 1 | 1 | 1 | 1 |
> | quanti 1 | 0 | 4 | 3 | 0 | 2 | 1 | 2 | 4 |
> | byte di controllo | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |
>
> Dove gli 1 sono pari si mette 1, dove sono dispari si mette 0. Il byte di controllo è 11011011, e si spedisce dopo la «o».

Chi riceve rifà lo stesso conto colonna per colonna. Se un bit della colonna 5 cambia, la colonna 5 non torna.

### Somme di controllo e CRC

Il libro cita altre due varianti della stessa idea, solo come nome:

- la **somma di controllo** (*checksum*): si sommano i byte del messaggio e si spedisce anche la somma, come il «totale 312» del telefono;
- il **controllo a ridondanza ciclica** (*cyclic redundancy check*, **CRC**): un conto più complicato, che si accorge di quasi tutti gli errori, anche di tanti bit vicini. Lo usano le reti e i file ZIP.

All'esame basta sapere che esistono e che servono ad accorgersi degli errori.

::: prova Con la parità dispari, qual è il byte di controllo dei due byte 11110000 e 10101010?
Colonna per colonna gli 1 sono: 2, 1, 2, 1, 1, 0, 1, 0. Dove sono pari metti 1, dove sono dispari metti 0: 1, 0, 1, 0, 0, 1, 0, 1. Il byte di controllo è 10100101.

Controllo sulla prima colonna: due 1 più l'1 del byte di controllo fanno tre, dispari.
:::

> [!RICORDA]
> - Byte di controllo: un bit di parità per ogni colonna di un gruppo di byte, spedito alla fine.
> - Somma di controllo e CRC: altri conti fatti sui dati e spediti con loro, per accorgersi degli errori.

## Correggere un errore: la distanza di Hamming

Il bit di parità ti dice «c'è un errore», ma non dove. Si può fare di meglio: correggerlo senza chiedere di rispedire.

Al telefono si fa così: «nove, ripeto, nove, ripeto, nove». Se senti «nove, cinque, nove», capisci che era nove: due volte su tre.

Con i bit: invece di 0 spedisci 000, invece di 1 spedisci 111. Se arriva 010, la maggioranza dice 0: c'era 000, ed è cambiato un bit solo. Funziona, ma il messaggio è diventato tre volte più lungo. Il libro mostra un modo più furbo, con meno bit in più. Per capirlo serve un modo di misurare quanto due file di bit sono diverse.

### Quanto sono diverse due file di bit

Metti 1011 e 1001 una sotto l'altra e confrontale posto per posto: sono diverse solo nel terzo bit. Il numero di posti in cui sono diverse si chiama **distanza di Hamming**, dal nome di Richard Hamming, che studiò questi codici negli anni Quaranta.

> [!ESEMPIO] Simulazione d'esame 1, 2023/24, domanda 1
> Il quiz chiede: «Calcolare la distanza di Hamming tra le sequenze di numeri binari elencati». La prima coppia è 01011101 e 00101101.
>
> | Posto | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
> |---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> | prima fila | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 1 |
> | seconda fila | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 |
> | diversi? | | sì | sì | sì | | | | |
>
> Sono diverse in tre posti: la distanza di Hamming è 3.

> [!DEF] Distanza di Hamming (libro, §1.10)
> La **distanza di Hamming** tra due file di bit della stessa lunghezza è il numero di posizioni in cui i loro bit sono diversi.

**Come si legge.** Si scrivono le due file una sotto l'altra e si contano le colonne con due bit diversi. Distanza 0 vuol dire file identiche. Distanza 1 vuol dire che basta cambiare un bit per passare da una all'altra. Le due file devono avere lo stesso numero di bit.

::: prova Calcola la distanza di Hamming tra (a) 01101100 e 01101110; (b) 111000 e 000111.
(a) Sono uguali tranne il settimo bit: distanza 1. È un'altra coppia della stessa domanda della simulazione.

(b) Sono diverse in tutti e sei i posti: distanza 6.
:::

### Il codice del libro: lettere lontane tra loro

Per otto lettere, da A a H, bastano 3 bit, perché $2^3 = 2 \cdot 2 \cdot 2 = 8$. Il libro ne usa 6, e sceglie le file in modo che ogni coppia sia lontana. Le file scelte per le lettere si chiamano **parole del codice**. Il codice è nella figura 1.27 del libro.

| Lettera | Parola del codice |
|:-:|:-:|
| A | 000000 |
| B | 001111 |
| C | 010011 |
| D | 011100 |
| E | 100110 |
| F | 101001 |
| G | 110101 |
| H | 111010 |

Prendi due lettere qualsiasi e calcola la distanza: viene sempre 3 o 4, mai meno. Per esempio A e C sono diverse in 3 posti, A e B in 4. Su tutte le 28 coppie, 16 sono a distanza 3 e 12 a distanza 4.

La distanza più piccola tra due parole del codice si chiama **distanza minima** del codice. Qui è 3.

### Come si decodifica

Arriva 010100. Non è nella tabella, quindi c'è stato un errore. Calcola la distanza da ogni lettera:

| Lettera | A | B | C | D | E | F | G | H |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Distanza da 010100 | 2 | 4 | 3 | **1** | 3 | 5 | 2 | 4 |

La più vicina è D, cioè 011100, a distanza 1: è cambiato solo il terzo bit. Si decodifica D.

> [!METODO] Decodificare con il codice del libro
> 1. Se la fila ricevuta è una parola del codice, leggi la sua lettera.
> 2. Altrimenti calcola la distanza di Hamming da tutte e otto le parole.
> 3. Scegli la lettera più vicina. Se ce n'è una sola a distanza 1, l'errore è corretto.
> 4. Se due o più lettere sono alla stessa distanza minima, sai che c'è un errore ma non puoi correggerlo.

Nello strumento clicca sui bit della fila arrivata: vedi la distanza da ogni lettera, i bit diversi evidenziati e la lettera più vicina.

```widget codifica
titolo: Il codice del libro: quale lettera è più vicina?
modo: hamming
parola: 010100
```

### Perché un errore si corregge e due si vedono

Immagina ogni parola del codice come una casa. Intorno a ogni casa c'è un giardino: le file a distanza 1 da lei, cioè quelle che ottieni cambiando un bit solo.

- Le case distano almeno 3 l'una dall'altra. Quindi due giardini non si toccano mai: una fila a distanza 1 da A non può essere a distanza 1 anche da C, altrimenti A e C disterebbero al massimo 2.
- **Un errore**: la fila esce dalla casa e finisce nel suo giardino. Il giardino è di una casa sola, quindi sai da dove viene. L'errore si corregge.
- **Due errori**: la fila si allontana di 2. Non arriva mai su un'altra casa, che dista almeno 3: quindi non è una parola del codice, e ti accorgi dell'errore. Però può finire nel giardino di un'altra casa, e allora la correzione sbaglia.

> [!ESEMPIO] Due errori portano fuori strada
> Spedisci A, cioè 000000. Cambiano il primo e il terzo bit: arriva 101000. Non è una parola del codice, quindi l'errore si vede. Ma 101000 dista 1 da F (101001) e 2 da A. Scegliendo la più vicina, leggi F: sbagliato.

Riassumendo: con distanza minima 3 il codice **corregge un errore** e **ne rivela due**. Rivelare vuol dire accorgersene.

Ora si capisce anche il bit di parità. Prendi due gruppi di 9 bit giusti, tutti e due con un numero dispari di 1. Se fossero diversi in un bit solo, uno dei due avrebbe un 1 in più dell'altro, e i loro numeri di 1 non sarebbero dispari tutti e due. Quindi sono diversi in almeno 2 bit: la distanza minima è 2. Rivela un errore, ma non ne corregge nessuno.

> [!APPROFONDIMENTO] La regola generale
> Chiama $d$ la distanza minima di un codice.
>
> - Il codice rivela fino a $d - 1$ errori: con meno di $d$ bit cambiati non si arriva su un'altra parola del codice.
> - Il codice corregge fino a $k$ errori se $d$ è almeno $2k + 1$: i «giardini» di raggio $k$ non si toccano.
>
> | Distanza minima | Rivela fino a | Corregge fino a |
> |:-:|:-:|:-:|
> | 1 | 0 | 0 |
> | 2, il bit di parità | 1 | 0 |
> | 3, il codice del libro | 2 | 1 |
> | 4 | 3 | 1 |
> | 5 | 4 | 2 |

::: prova Con il codice del libro, decodifica (a) 111110 e (b) 011001.
(a) Le distanze sono: A 5, B 3, C 4, D 2, E 2, F 4, G 3, H 1. La più vicina è H (111010), a distanza 1: si legge H.

(b) Le distanze sono: A 3, B 3, C 2, D 2, E 6, F 2, G 3, H 3. C, D e F sono tutte a distanza 2. Sicuramente c'è un errore, anzi almeno due, ma non si può dire quale lettera era.
:::

> [!RICORDA]
> - Distanza di Hamming: in quanti posti due file di bit sono diverse.
> - Il codice del libro ha 8 lettere da 6 bit con distanza minima 3: si decodifica scegliendo la lettera più vicina.
> - Distanza minima 3: corregge un errore e ne rivela due. Il bit di parità ha distanza minima 2: rivela un errore e non corregge.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| «5 zeri, 8 uni» | «cinque zeri, otto uni» | una ripetizione nella codifica run-length: il simbolo e quante volte | 0000011111111 |
| A = 0, B = 10 | «A vale zero, B vale uno zero» | il codice di ogni simbolo, in un codice a lunghezza variabile | BANANA = 100110110 |
| +2, −1 | «più due, meno uno» | una differenza con il dato prima, nella codifica relativa | 100, 102, 101 diventa 100, +2, −1 |
| xyx = 4 | «x y x vale quattro» | una voce del dizionario di LZW | xyx xyx diventa 1 2 1 3 4 |
| $2^{15}$ | «due alla quindici» | 2 moltiplicato per sé stesso 15 volte: i numeri che si scrivono con 15 bit | 32768 |
| 2 × 2, 8 × 8 | «due per due», «otto per otto» | quadratini di pixel: 2 righe e 2 colonne, 8 righe e 8 colonne | i blocchi di JPEG |
| 1 01000001 | «bit di parità, poi il byte» | il bit di parità a sinistra del byte, come nel libro | la A con parità dispari |
| distanza 3 | «distanza di Hamming tre» | due file di bit diverse in 3 posti | 000000 e 010011 |
| $d$ | «di» | la distanza minima di un codice (solo nell'approfondimento) | nel codice del libro 3 |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti, con Safe Exam Browser.

**Che cosa serve di questa lezione**

1. **La distanza di Hamming.** È il quiz 1 della simulazione d'esame 1 del 2023/24: quattro coppie di file da 8 bit, e per ognuna la distanza. Si fa in pochi secondi, se conti con calma colonna per colonna.
2. **Parità e codice del libro.** Le domande del §1.10: dove c'è sicuramente un errore, aggiungere il bit di parità dispari, decodificare con il codice da A a H.
3. **La compressione.** Nei quiz delle simulazioni del 2023/24 non compare, ma il §1.9 è nella mappa comune del libro. Le domande più probabili sono quelle del libro: le quattro tecniche, un messaggio da comprimere con LZW, con perdita o senza, che cosa sfruttano JPEG e MP3.

Nelle simulazioni del 2023/24 tornano anche complemento a 2, virgola mobile e notazione in eccesso: sono le sezioni 1.6 e 1.7, nella lezione 03.

> [!ESAME] Una domanda vera, letta insieme
> Simulazione d'esame 1, 2023/24, domanda 1: «Calcolare la distanza di Hamming tra le sequenze di numeri binari elencati». Le coppie sono 01011101 e 00101101; 01011100 e 00101100; 01101100 e 01101110; 01111100 e 01111110.
>
> In pratica chiede: in quanti posti sono diverse? Scrivi le due file una sotto l'altra e segna le colonne diverse.
>
> 1. 01011101 e 00101101: diverse nei posti 2, 3 e 4. Distanza 3.
> 2. 01011100 e 00101100: di nuovo i posti 2, 3 e 4. Distanza 3.
> 3. 01101100 e 01101110: solo il posto 7. Distanza 1.
> 4. 01111100 e 01111110: solo il posto 7. Distanza 1.

> [!METODO] Le domande sulla compressione
> 1. «Con perdita o senza?» Chiediti: dopo la decompressione ho esattamente i bit di prima? Run-length, Huffman, relativa esatta e LZW: sì. JPEG di base, GIF con molti colori, MP3, MPEG: no.
> 2. «Comprimi con LZW»: tieni la tabella del dizionario accanto, e aggiungi una parola solo la prima volta che la incontri.
> 3. «Costruisci il codice di Huffman»: unisci sempre i due pesi più piccoli, poi controlla il totale dei bit.

**Errori da evitare**

- Usare la parità pari quando il libro usa la dispari: leggi bene il testo della domanda.
- Contare gli 1 senza il bit di parità, quando controlli una fila ricevuta: si contano tutti i 9 bit.
- Credere che il bit di parità corregga: si accorge soltanto, e solo di un numero dispari di errori.
- Calcolare la distanza di Hamming tra file di lunghezza diversa: non ha senso.
- Confondere «corregge» e «rivela»: con distanza minima 3 corregge 1 errore e ne rivela 2.
- Dire che GIF è senza perdita per le foto: con più di 256 colori li approssima.
- In LZW, aggiungere al dizionario una parola che c'è già, o dimenticare di scrivere lo spazio.

## Quiz

```quiz
D: Simulazione d'esame 1, 2023/24, domanda 1. Qual è la distanza di Hamming tra 01011101 e 00101101?
- $1$
- $2$
+ $3$
- $4$
- $5$
= La distanza di Hamming conta i posti in cui le due file sono diverse. Messe una sotto l'altra, sono diverse nel secondo, nel terzo e nel quarto bit: distanza 3. La risposta 5 conta gli 1 della prima fila, che non c'entrano. La risposta 4 conta gli 1 della seconda fila. Le risposte 1 e 2 si ottengono saltando qualche colonna.

D: Simulazione d'esame 1, 2023/24, domanda 1. Qual è la distanza di Hamming tra 01101100 e 01101110?
+ $1$
- $0$
- $2$
- $7$
- $8$
= Le due file sono uguali in tutti i posti tranne il settimo: distanza 1. La risposta 0 vale solo per file identiche. La risposta 7 confonde la distanza con il posto del bit diverso. La risposta 8 è il numero di bit, non il numero di differenze.

D: Questi gruppi di 9 bit sono stati spediti con la parità dispari del libro. In quale c'è sicuramente un errore?
- 101000001
- 001000110
+ 110000000
- 111000000
- 100000000
= Con la parità dispari gli 1, compreso il bit di parità, devono essere dispari. In 110000000 sono due: pari, quindi c'è sicuramente un errore. Le altre hanno tre, tre, tre e un 1: tutti numeri dispari, quindi nessun errore visibile. Non vuol dire che siano giuste: due errori non si vedono.

D: Il codice ASCII di C è 01000011. Che cosa si spedisce con il bit di parità dispari messo a sinistra, come nel libro?
+ 001000011
- 101000011
- 010000110
- 010000111
- 01000011
= Il byte ha tre 1, già un numero dispari: il bit di parità è 0, e si mette davanti. Si spedisce 001000011. La risposta 101000011 usa la parità pari, perché porta gli 1 a quattro. Le risposte 010000110 e 010000111 mettono il bit in fondo invece che a sinistra. L'ultima dimentica il bit di parità.

D: Con il codice del libro (A 000000, B 001111, C 010011, D 011100, E 100110, F 101001, G 110101, H 111010) arriva 101011. Come si decodifica?
- A
- B
- E
+ F
- Non si può decodificare: c'è un errore.
= Si sceglie la lettera più vicina. 101011 è diversa da F, cioè 101001, solo nel quinto bit: distanza 1. Tutte le altre lettere sono a distanza 2 o più, quindi F è l'unica più vicina e l'errore si corregge. La risposta «non si può decodificare» sarebbe giusta solo se due lettere fossero alla stessa distanza minima. B ed H sono a distanza 2, A a distanza 4.

D: Un codice ha distanza minima 3, come quello del libro. Che cosa può fare?
- Correggere 2 errori e rivelarne 3.
+ Correggere 1 errore e rivelarne 2.
- Correggere 3 errori.
- Rivelare 1 errore, ma non correggerne nessuno.
- Correggere 1 errore, ma non rivelarne 2.
= Con un solo bit cambiato la fila resta più vicina alla parola spedita che a ogni altra, perché le parole distano almeno 3: si corregge. Con due bit cambiati non si arriva mai su un'altra parola, quindi ci si accorge dell'errore. Rivelare 1 errore senza correggerlo è il caso della parità, con distanza minima 2. Per correggere 2 errori serve distanza minima almeno 5.

D: Quale di queste compressioni è con perdita?
- La codifica run-length
- I codici di Huffman
- LZW
+ Lo standard di base di JPEG
- La codifica relativa con le differenze esatte
= Il JPEG di base conserva il colore solo come media su quadratini di 2 × 2 pixel e approssima i dettagli fini dei blocchi di 8 × 8: dopo la decompressione l'immagine è simile, non identica. Le altre quattro tecniche permettono di riottenere esattamente i dati di partenza.

D: Quale caratteristica dell'occhio sfrutta lo standard di base di JPEG?
- L'occhio non vede i pixel più piccoli di 8 × 8.
+ L'occhio nota i cambiamenti di luminosità più di quelli di colore.
- L'occhio vede solo 256 colori.
- L'occhio non nota i fotogrammi che cambiano poco.
- L'occhio vede meglio i colori della luminosità.
= È la domanda 5 del §1.9. JPEG tiene la luminosità di ogni pixel e solo la media del colore, perché l'occhio è più sensibile alla luminosità. L'ultima risposta dice il contrario. I 256 colori sono di GIF, i fotogrammi di MPEG. I blocchi di 8 × 8 sono un passo del procedimento, non un limite dell'occhio.

D: Che cosa sfrutta MP3?
- Il fatto che l'orecchio non sente i suoni sopra i 128 000 bit al secondo.
+ Il mascheramento temporale e il mascheramento in frequenza.
- Una tavolozza di 256 suoni.
- Il fatto che due canzoni vicine sono quasi uguali.
- Il fatto che il CD usa 16 bit per campione.
= È la domanda 6 del §1.9. Dopo un suono forte l'orecchio per un attimo non sente quelli deboli (mascheramento temporale), e un suono forte copre quelli deboli con una nota vicina (mascheramento in frequenza). MP3 toglie quei suoni. I bit al secondo misurano il file, non l'orecchio. La tavolozza è un'idea di GIF. Le differenze tra cose vicine sono la codifica relativa di MPEG, che lavora tra fotogrammi, non tra canzoni.

D: Un disegno di 200 × 100 pixel viene salvato in GIF. Quanti byte occupano i pixel, senza contare la tavolozza e prima di LZW?
- $256$
- $2500$
+ $20000$
- $60000$
- $160000$
= In GIF ogni pixel è il numero di un colore della tavolozza, da 0 a 255: un byte. I pixel sono 200 × 100 = 20 000, quindi 20 000 byte. La risposta 60 000 usa 3 byte per pixel, come in RGB. La risposta 160 000 conta i bit. La risposta 2500 divide per 8 invece di moltiplicare. La risposta 256 è il numero massimo di colori.

D: Con LZW come nel libro, partendo da x = 1, y = 2, spazio = 3, come si comprime «xx yx xx yx»?
- 113213113
+ 113213435
- 113213434
- 1121345
- 445566
= La parola xx è nuova: si scrive 1 1, poi lo spazio 3, e xx diventa la voce 4. Anche yx è nuova: 2 1, poi 3, e yx diventa la voce 5. Poi xx è già la 4, poi 3, poi yx è già la 5. Il risultato è 113213435. La prima risposta non usa il dizionario. La terza scrive 4 anche al posto di yx. Le ultime due saltano gli spazi o le parole nuove.

D: Con un codice di Huffman, quanti bit occupa la parola BANANA?
- $6$
+ $9$
- $12$
- $18$
- $48$
= I pesi sono A 3, N 2, B 1. Si uniscono B e N, poi il gruppo con A: viene A = 0, B = 10, N = 11. I bit sono 3 × 1 per le A, 2 × 2 per le N e 1 × 2 per la B: 3 + 4 + 2 = 9. La risposta 12 usa 2 bit per lettera, un codice a lunghezza fissa. La risposta 48 è l'ASCII, un byte per lettera. La risposta 6 darebbe un bit solo a ogni lettera, ma con un bit si distinguono solo due simboli.
```

## Esercizi

::: esercizio base Domanda 1 del §1.9: le quattro tecniche
Elenca le quattro tecniche generiche di compressione descritte dal libro.
::: soluzione
1. La codifica run-length (*run-length encoding*): le ripetizioni diventano «simbolo e quante volte».
2. La codifica in base alla frequenza (*frequency-dependent encoding*): codici corti per i simboli frequenti, come i codici di Huffman.
3. La codifica relativa o differenziale (*relative encoding*): il primo dato e poi le differenze.
4. La codifica a dizionario (*dictionary encoding*): il numero della parola in un elenco, anche adattiva come LZW.

È la risposta dell'appendice del libro.
:::

::: esercizio base Domanda 3 del §1.9: GIF e i fumetti
Perché per le immagini dei fumetti a colori GIF è meglio di JPEG?
::: soluzione
1. Un fumetto ha zone di colore pieno con bordi netti, e pochi colori in tutto.
2. GIF tiene al massimo 256 colori: per un fumetto bastano, e quindi non perde quasi niente.
3. Le zone di colore pieno danno lunghe ripetizioni dello stesso numero di colore, che LZW comprime molto bene.
4. JPEG, invece, approssima i dettagli fini: proprio i bordi netti vengono un po' sfocati.

L'appendice risponde: i fumetti hanno blocchi di colore pieno con bordi netti, e i colori sono pochi.
:::

::: esercizio medio Domanda 4 del §1.9: le foto di una sonda spaziale
Progetti una sonda che va su altri pianeti e spedisce fotografie. Per risparmiare memoria e tempo di trasmissione, conviene comprimere le foto in GIF o con lo standard di base di JPEG?
::: soluzione
1. Le foto di una sonda servono agli scienziati, che le studiano fin nei dettagli.
2. GIF riduce i colori a 256: in una foto quelli in più vengono approssimati, quindi è con perdita.
3. Il JPEG di base media il colore e approssima i dettagli fini: anche lui è con perdita.
4. Quindi no: con tutti e due si perdono dettagli. Serve una compressione senza perdita.

È la risposta dell'appendice: no, perché GIF e JPEG sono tutti e due con perdita.
:::

::: esercizio base Domande 5 e 6 del §1.9: occhio e orecchio
(a) Quale caratteristica dell'occhio sfrutta lo standard di base di JPEG? (b) Quale caratteristica dell'orecchio sfrutta MP3?
::: soluzione
(a) L'occhio è meno sensibile ai cambiamenti di colore che a quelli di luminosità. Per questo JPEG riduce i bit del colore, con la media su quadratini di 2 × 2 pixel, senza che la differenza si veda.

(b) Il mascheramento temporale e il mascheramento in frequenza. Dopo un suono forte, per un attimo, l'orecchio non sente quelli deboli; e un suono forte copre i suoni deboli con una nota vicina.

Sono le risposte dell'appendice.
:::

::: esercizio medio Domanda 7 del §1.9: un fenomeno preoccupante
Quale fenomeno preoccupante capita spesso quando si scrivono in bit numeri, immagini e suoni?
::: soluzione
1. Si fanno approssimazioni: un numero con la virgola, un colore, un campione di suono vengono arrotondati per stare nei bit.
2. Con i numeri l'errore cresce a ogni calcolo, e alla fine il risultato può essere sbagliato.
3. Con immagini e suoni di solito non è grave: si conservano, si spediscono e si riproducono, senza farci conti sopra.
4. Ma se un'immagine o un suono si riproduce, si registra e si ricomprime tante volte, le approssimazioni si sommano, e alla fine i dati non valgono più niente.

È il senso della risposta dell'appendice. Delle approssimazioni con i numeri si parla anche nella lezione 03, con la virgola mobile.
:::

::: esercizio medio Domanda 2 del §1.9: LZW con il dizionario che cresce
Il dizionario iniziale è x = 1, y = 2, spazio = 3. Comprimi con LZW, come nel libro, il messaggio «xyx yxxxy xyx yxxxy yxxxy».
::: soluzione
Il messaggio ha cinque parole, separate da quattro spazi. Si legge una parola alla volta.

| Leggo | Nel dizionario? | Scrivo | Il dizionario diventa |
|---|:-:|:-:|---|
| xyx | no | 1 2 1 | aggiungo xyx = 4 |
| spazio | sì | 3 | |
| yxxxy | no | 2 1 1 1 2 | aggiungo yxxxy = 5 |
| spazio | sì | 3 | |
| xyx | sì, è il 4 | 4 | |
| spazio | sì | 3 | |
| yxxxy | sì, è il 5 | 5 | |
| spazio | sì | 3 | |
| yxxxy | sì, è il 5 | 5 | |

1. Metto in fila i numeri della colonna «Scrivo»: 1 2 1, 3, 2 1 1 1 2, 3, 4, 3, 5, 3, 5.
2. Senza spazi: 121321112343535.

Controllo: è proprio la risposta dell'appendice, 121321112343535. Il messaggio aveva 25 simboli, compressi in 15 numeri.

Controllo al contrario, come farebbe chi riceve: 1 2 1 è xyx, poi 3 è uno spazio, e xyx diventa la voce 4. Poi 2 1 1 1 2 è yxxxy, poi 3, e yxxxy diventa la 5. Poi 4 3 5 3 5 è xyx, spazio, yxxxy, spazio, yxxxy. Torna il messaggio di partenza.
:::

::: esercizio base Una fila da comprimere con le ripetizioni
Scrivi con la codifica run-length la riga di pixel 1111110000001111111111 (1 nero, 0 bianco). Quanti bit risparmi se scrivi ogni numero con 4 bit, più un bit per dire con che colore comincia la riga?
::: soluzione
1. Ci sono sei 1, sei 0 e dieci 1: «6 uni, 6 zeri, 10 uni». Controllo: 6 + 6 + 10 = 22, i pixel della riga.
2. Con 4 bit si arriva a 15, quindi 6 e 10 ci stanno. Con le monete: 6 = 0110, 10 = 1010.
3. I bit sono 1 per il colore iniziale più 3 × 4 per i numeri: 1 + 12 = 13.
4. La riga aveva 22 bit: ne risparmi 22 − 13 = 9.
:::

::: esercizio medio Huffman per TARTARUGA
Costruisci un codice di Huffman per la parola TARTARUGA. Quanti bit occupa la parola? E con un codice a lunghezza fissa?
::: soluzione
1. Pesi: A 3, T 2, R 2, U 1, G 1. Le lettere sono 9.
2. Passo 1: i due pesi più piccoli sono U (1) e G (1). Il gruppo UG pesa 2. Restano A 3, T 2, R 2, UG 2.
3. Passo 2: ci sono tre pesi 2. Ne scelgo due, T e R: il gruppo TR pesa 4. Restano A 3, UG 2, TR 4.
4. Passo 3: i più piccoli sono UG (2) e A (3). Il gruppo UGA pesa 5. Restano TR 4, UGA 5.
5. Passo 4: TR (4) e UGA (5), peso 9. Fine.
6. Con 0 a sinistra e 1 a destra: T = 00, R = 01, U = 100, G = 101, A = 11.
7. Bit: A 3 × 2 = 6, T 2 × 2 = 4, R 2 × 2 = 4, U 1 × 3 = 3, G 1 × 3 = 3. In tutto 6 + 4 + 4 + 3 + 3 = 20.
8. Con 5 lettere diverse 2 bit non bastano, perché danno solo 4 possibilità: servono 3 bit, e 9 × 3 = 27.

Controllo: TARTARUGA diventa 00 11 01 00 11 01 100 101 11, cioè 20 bit. Se al passo 2 scegli un'altra coppia tra i pesi 2, i codici cambiano ma il totale resta 20.
:::

::: esercizio medio LZW al contrario
Con il dizionario iniziale x = 1, y = 2, spazio = 3 e LZW come nel libro, chi riceve legge 2 1 2 3 4 3 1 3 4. Qual era il messaggio?
::: soluzione
1. 2 1 2: y, x, y.
2. 3: uno spazio. La parola yxy è finita, ed è nuova: entra nel dizionario come 4.
3. 4: è yxy. Poi 3: spazio.
4. 1: è x. Poi 3: spazio. La x c'era già, non si aggiunge niente.
5. 4: yxy.

Il messaggio era «yxy yxy x yxy». Controllo: comprimendolo di nuovo, come nel «Prova tu» della sezione su LZW, viene 212343134.
:::

::: esercizio base Come la domanda 1 del §1.10: dove c'è un errore
Questi gruppi di bit sono stati spediti con la parità dispari. In quali c'è sicuramente un errore? (a) 100101101 (b) 100000001 (c) 000000000 (d) 111000000 (e) 011111111
::: soluzione
Conta gli 1 di ogni gruppo, bit di parità compreso.

| Gruppo | Quanti 1 | Pari o dispari | Errore? |
|---|:-:|:-:|:-:|
| (a) 100101101 | 5 | dispari | non si vede |
| (b) 100000001 | 2 | pari | sì |
| (c) 000000000 | 0 | pari | sì |
| (d) 111000000 | 3 | dispari | non si vede |
| (e) 011111111 | 8 | pari | sì |

Gli errori sicuri sono in (b), (c) ed (e), come nella risposta dell'appendice.
:::

::: esercizio base Domande 2 e 3 del §1.10: errori invisibili e parità pari
(a) Nei gruppi dell'esercizio precedente potrebbero esserci errori di cui non ti accorgi? (b) Come cambiano le risposte se la parità usata è pari invece che dispari?
::: soluzione
(a) Sì. Se in un gruppo cambiano due bit, o quattro, o un numero pari qualsiasi, il numero degli 1 torna dispari e il controllo non vede niente. Per esempio (a) e (d) potrebbero avere due errori.

(b) Con la parità pari gli 1 devono essere pari. Gli errori sicuri diventano (a), con 5 uni, e (d), con 3 uni. La risposta alla domanda (a) non cambia: un numero pari di errori resta invisibile anche con la parità pari.

Sono le risposte dell'appendice.
:::

::: esercizio medio Domanda 4 del §1.10: ASCII con la parità dispari
Scrivi in ASCII, con la parità dispari e il bit di parità a sinistra, le due frasi (a) «"Stop!" Cheryl shouted.» e (b) «Does 2 + 3 = 5?».
::: soluzione
Per ogni simbolo: il byte ASCII, quanti 1 ha, e il bit di parità che rende dispari il totale. Se gli 1 sono pari il bit è 1, se sono dispari è 0.

(a) 23 simboli.

| Simbolo | Byte ASCII | Quanti 1 | Bit di parità | I 9 bit |
|:-:|:-:|:-:|:-:|:-:|
| virgolette | 00100010 | 2 | 1 | 100100010 |
| S | 01010011 | 4 | 1 | 101010011 |
| t | 01110100 | 4 | 1 | 101110100 |
| o | 01101111 | 6 | 1 | 101101111 |
| p | 01110000 | 3 | 0 | 001110000 |
| ! | 00100001 | 2 | 1 | 100100001 |
| virgolette | 00100010 | 2 | 1 | 100100010 |
| spazio | 00100000 | 1 | 0 | 000100000 |
| C | 01000011 | 3 | 0 | 001000011 |
| h | 01101000 | 3 | 0 | 001101000 |
| e | 01100101 | 4 | 1 | 101100101 |
| r | 01110010 | 4 | 1 | 101110010 |
| y | 01111001 | 5 | 0 | 001111001 |
| l | 01101100 | 4 | 1 | 101101100 |
| spazio | 00100000 | 1 | 0 | 000100000 |
| s | 01110011 | 5 | 0 | 001110011 |
| h | 01101000 | 3 | 0 | 001101000 |
| o | 01101111 | 6 | 1 | 101101111 |
| u | 01110101 | 5 | 0 | 001110101 |
| t | 01110100 | 4 | 1 | 101110100 |
| e | 01100101 | 4 | 1 | 101100101 |
| d | 01100100 | 3 | 0 | 001100100 |
| . | 00101110 | 4 | 1 | 100101110 |

(b) 15 simboli.

| Simbolo | Byte ASCII | Quanti 1 | Bit di parità | I 9 bit |
|:-:|:-:|:-:|:-:|:-:|
| D | 01000100 | 2 | 1 | 101000100 |
| o | 01101111 | 6 | 1 | 101101111 |
| e | 01100101 | 4 | 1 | 101100101 |
| s | 01110011 | 5 | 0 | 001110011 |
| spazio | 00100000 | 1 | 0 | 000100000 |
| 2 | 00110010 | 3 | 0 | 000110010 |
| spazio | 00100000 | 1 | 0 | 000100000 |
| + | 00101011 | 4 | 1 | 100101011 |
| spazio | 00100000 | 1 | 0 | 000100000 |
| 3 | 00110011 | 4 | 1 | 100110011 |
| spazio | 00100000 | 1 | 0 | 000100000 |
| = | 00111101 | 5 | 0 | 000111101 |
| spazio | 00100000 | 1 | 0 | 000100000 |
| 5 | 00110101 | 4 | 1 | 100110101 |
| ? | 00111111 | 6 | 1 | 100111111 |

Controllo: i primi gruppi coincidono con la risposta dell'appendice, 100100010 101010011 101110100 per (a) e 101000100 101101111 101100101 per (b). I byte ASCII sono quelli della domanda 3 del §1.4, nella lezione 02.
:::

::: esercizio medio Un byte di controllo
Con la parità dispari, calcola il byte di controllo dei tre byte 01000001, 01000010 e 01000011 (le lettere A, B e C). Poi arriva 01000001 01000110 01000011 con lo stesso byte di controllo: dove si vede l'errore?
::: soluzione
1. Colonna per colonna gli 1 sono: colonna 1 nessuno, colonna 2 tre, colonne 3, 4, 5 e 6 nessuno, colonna 7 due, colonna 8 due.
2. Dove gli 1 sono pari metti 1, dove sono dispari metti 0: 1, 0, 1, 1, 1, 1, 1, 1. Il byte di controllo è 10111111.
3. Nei byte arrivati il secondo è 01000110 invece di 01000010: è cambiato il sesto bit.
4. Nella colonna 6 ora c'è un 1, e con il bit del byte di controllo gli 1 della colonna sono 2: pari. La colonna 6 non torna, quindi c'è un errore in quella colonna.
:::

::: esercizio esame Distanze di Hamming
Calcola la distanza di Hamming tra (a) 01011100 e 00101100; (b) 01111100 e 01111110; (c) 10101010 e 01010101; (d) 001111 e 011100.
::: soluzione
1. (a) Diverse nei posti 2, 3 e 4: distanza 3. È la seconda coppia della simulazione d'esame 1 del 2023/24, domanda 1.
2. (b) Diverse solo nel posto 7: distanza 1. È la quarta coppia della stessa domanda.
3. (c) Diverse in tutti gli otto posti: distanza 8.
4. (d) Diverse nei posti 2, 5 e 6: distanza 3. Sono B e D del codice del libro.
:::

::: esercizio medio Domanda 5 del §1.10: decodificare parole intere
La domanda 5 chiede di decodificare tre messaggi scritti con il codice del libro, da A a H; secondo l'appendice si leggono BED, CAB e HEAD. Decodifica questi tre messaggi, che hanno qualche bit sbagliato e danno le stesse parole: (a) 001111 100100 001100; (b) 010001 000000 001011; (c) 011010 110110 100000 011100.
::: soluzione
Per ogni gruppo di 6 bit cerco la lettera più vicina.

1. (a) 001111 è proprio B. 100100 dista 1 da E (100110). 001100 dista 1 da D (011100). Si legge BED.
2. (b) 010001 dista 1 da C (010011). 000000 è proprio A. 001011 dista 1 da B (001111). Si legge CAB.
3. (c) 011010 dista 1 da H (111010). 110110 dista 1 da E (100110). 100000 dista 1 da A (000000). 011100 è proprio D. Si legge HEAD.

In ogni gruppo con un errore la lettera a distanza 1 è una sola: le altre distano almeno 2, perché le parole del codice distano almeno 3 tra loro.
:::

::: esercizio difficile Domanda 6 del §1.10: costruire un codice
Costruisci un codice per le lettere A, B, C e D con file di 5 bit, in cui la distanza di Hamming tra due lettere qualsiasi sia almeno 3.
::: soluzione
Si sceglie una fila alla volta, controllando la distanza da quelle già scelte.

1. A = 00000.
2. B deve avere almeno tre 1, per distare almeno 3 da A: B = 11100.
3. C: provo 01111. Da A dista 4, da B dista 3 (posti 1, 4 e 5). Va bene.
4. D: provo 10011. Da A dista 3, da B dista 4, da C dista 3 (posti 1, 2 e 3). Va bene.

Le sei distanze sono 3, 4, 3, 3, 4, 3: la più piccola è 3. Il codice A = 00000, B = 11100, C = 01111, D = 10011 è la soluzione dell'appendice. Ce ne sono anche altre.
:::

::: esercizio difficile Due errori nel codice del libro
Spedisci la lettera A con il codice del libro, e per strada cambiano il primo e il terzo bit. (a) Che cosa arriva? (b) Chi riceve si accorge dell'errore? (c) Che lettera legge?
::: soluzione
1. (a) A è 000000. Cambiando il primo e il terzo bit arriva 101000.
2. (b) Sì: 101000 non è una parola del codice. Due errori non trasformano mai una parola in un'altra, perché le parole distano almeno 3.
3. (c) Le distanze sono: da A 2, da F (101001) 1, dalle altre lettere di più. La più vicina è F, e chi riceve legge F: la correzione sbaglia.

Quindi il codice rivela due errori, ma li corregge solo se l'errore è uno.
:::

::: esercizio esame Una foto, tre formati
Un disegno di 800 × 600 pixel. Quanti byte occupa (a) in RGB senza compressione; (b) in GIF, contando i pixel e la tavolozza, prima di LZW; (c) in JPEG, se occupa 20 volte meno che in RGB?
::: soluzione
1. (a) I pixel sono 800 × 600 = 480 000. In RGB 3 byte ciascuno: 1 440 000 byte, circa 1,4 MB.
2. (b) In GIF un byte per pixel: 480 000 byte. La tavolozza ha 256 colori da 3 byte: 768 byte. In tutto 480 768 byte, circa un terzo.
3. (c) 1 440 000 : 20 = 72 000 byte, circa 72 KB.

Per un disegno conviene comunque GIF: con pochi colori non perde niente, e LZW lo comprime ancora.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra compressione senza perdita e con perdita? Fai un esempio per ciascuna.
Senza perdita: dopo la decompressione si riottengono esattamente i dati di prima, come con Huffman o LZW. Serve per testi e programmi. Con perdita: si ottengono dati solo simili, come con JPEG o MP3. Va bene per foto e musica.
:::

::: domanda Quali sono le quattro tecniche generiche del libro, e che cosa sfrutta ognuna?
Run-length: le lunghe ripetizioni. Codifica in base alla frequenza: alcuni simboli compaiono più spesso. Codifica relativa: ogni dato somiglia a quello prima. Codifica a dizionario: le stesse parole tornano più volte.
:::

::: domanda Che cos'è un codice prefisso, e perché serve?
È un codice in cui nessun codice è l'inizio di un altro. Serve con i codici di lunghezza variabile: si legge da sinistra, e appena riconosci un codice sai che il simbolo è finito, senza pause tra un simbolo e l'altro.
:::

::: domanda Come funziona LZW nella versione del libro?
Il dizionario parte dai simboli singoli. Si legge una parola alla volta: se è nel dizionario si scrive il suo numero, se no si scrivono i numeri delle sue lettere e la parola entra nel dizionario. Chi riceve ricostruisce lo stesso dizionario negli stessi momenti.
:::

::: domanda Come comprimono GIF e JPEG?
GIF sceglie al massimo 256 colori, li mette in una tavolozza e scrive per ogni pixel un byte con il numero del colore; poi usa LZW. JPEG tiene la luminosità di ogni pixel e solo la media del colore su 2 × 2 pixel, poi approssima i dettagli fini su blocchi di 8 × 8.
:::

::: domanda Che cosa sono il mascheramento temporale e quello in frequenza?
Mascheramento temporale: subito dopo un suono forte l'orecchio per un attimo non sente quelli deboli. Mascheramento in frequenza: un suono forte copre i suoni deboli con una nota vicina. MP3 toglie i suoni coperti.
:::

::: domanda Come funziona il bit di parità dispari, e che limiti ha?
Si aggiunge un bit perché il numero totale di 1 sia dispari. Chi riceve conta gli 1: se sono pari c'è un errore. Non dice dove, e non vede un numero pari di errori.
:::

::: domanda Perché il codice del libro corregge un errore e ne rivela due?
Le sue parole distano almeno 3. Con un errore la fila ricevuta dista 1 dalla parola spedita e almeno 2 da tutte le altre: la più vicina è quella giusta. Con due errori non si arriva mai su un'altra parola, quindi l'errore si vede; ma la più vicina può essere sbagliata.
:::

## Glossario

```glossario
Compressione | Scrivere gli stessi dati con meno bit (*data compression*).
Senza perdita | Una compressione da cui si riottengono esattamente i dati originali (*lossless*).
Con perdita | Una compressione da cui si ottengono dati solo simili agli originali (*lossy*), come JPEG e MP3.
Codifica run-length | Al posto di una ripetizione si scrivono il simbolo e quante volte si ripete (*run-length encoding*).
Codifica in base alla frequenza | Codici corti per i simboli frequenti e lunghi per quelli rari (*frequency-dependent encoding*).
Codice di Huffman | Un codice in base alla frequenza costruito unendo ogni volta i due pesi più piccoli.
Codice prefisso | Un codice in cui nessun codice è l'inizio di un altro: si legge senza pause.
Codifica relativa | Il primo dato per intero, poi solo le differenze con il dato prima (*relative* o *differential encoding*).
Codifica a dizionario | Al posto di una parola si scrive il suo numero in un elenco comune (*dictionary encoding*).
LZW | Codifica a dizionario adattiva: il dizionario cresce mentre si comprime (Lempel, Ziv, Welch).
GIF | Formato per immagini con una tavolozza di al massimo 256 colori, un byte per pixel, più LZW.
Tavolozza | La tabella dei colori di un'immagine GIF (*palette*): ogni pixel dice il numero del suo colore.
JPEG | Formato per foto, con perdita: luminosità per ogni pixel, colore come media, blocchi di 8 × 8 pixel.
MPEG | Famiglia di formati per i video: alcuni fotogrammi interi, degli altri solo le differenze.
MP3 | Formato per la musica, con perdita: toglie i suoni nascosti dal mascheramento temporale e in frequenza.
Bit di parità | Il bit aggiunto perché il numero totale di 1 sia dispari (parità dispari) o pari (parità pari).
Byte di controllo | Un byte di bit di parità, uno per colonna, spedito dopo un gruppo di byte (*checkbyte*).
Distanza di Hamming | Il numero di posizioni in cui due file di bit della stessa lunghezza sono diverse.
Distanza minima | La distanza di Hamming più piccola tra due parole di un codice: nel codice del libro è 3.
Codice correttore | Un codice le cui parole sono lontane tra loro, così un errore si corregge scegliendo la parola più vicina (*error-correcting code*).
```

## Checklist

```checklist
- So dire la differenza tra compressione senza perdita e con perdita, con un esempio per tipo.
- So comprimere una fila di bit con la codifica run-length e un elenco di numeri con la codifica relativa.
- So costruire un codice di Huffman con l'albero e contare i bit di una parola.
- So comprimere e decomprimere un messaggio con LZW come nel libro, con la tabella del dizionario.
- So spiegare come comprimono GIF, JPEG, MPEG e MP3, e quali sono con perdita.
- So aggiungere il bit di parità dispari a un byte e dire se un gruppo ricevuto ha sicuramente un errore.
- So calcolare la distanza di Hamming e decodificare con il codice del libro, da A a H.
- So spiegare perché un codice con distanza minima 3 corregge un errore e ne rivela due.
```

## Fonti

- R. Johnsonbaugh, J. G. Brookshear, D. Brylow, *Fondamenti dell'Informatica*, Pearson 2026 (ISBN 9788891939456), il libro di testo del corso: parte 1, che è il capitolo 1 di J. G. Brookshear, D. Brylow, *Computer Science: an overview*. Sezione 1.9 «Data Compression»: tecniche generiche (run-length, in base alla frequenza, relativa, a dizionario e LZW), immagini (GIF, JPEG, TIFF), audio e video (MPEG, MP3). Sezione 1.10 «Communication Errors»: bit di parità, byte di controllo, somme di controllo e CRC, codici che correggono gli errori, distanza di Hamming, il codice a 6 bit per le lettere da A a H. Risposte alle domande delle due sezioni nell'appendice del libro, pubblicate sul Moodle del canale A.
- Diario del canale B 2026/27 (Moodle del canale B): «Lezione 05. Giovedì 08 Ottobre ore 09-11. (Part 1, § 1.10 Communication Errors) Data Compression LZW, JPEG, MPEG, GIF. Communication Errors, parity bit e bytes, error-correcting codes, distanza di Hamming».
- Simulazione d'esame 1 del 2023/24 (pagina d'esame comune su Moodle Esami), domanda 1 sulla distanza di Hamming, letta nella copia svolta a mano da uno studente pubblicata dalla guida degli studenti TSI (CC BY-SA 4.0); le risposte sono ricontrollate qui.
- Lucidi del canale A 2026/27, «Cenni sulla codifica dei dati» (F. Cardone, Moodle del canale A, aperto agli ospiti): il codice Morse come esempio di codice.
- Le spiegazioni a parole, gli esempi, i riquadri «Prova tu», gli strumenti interattivi, i quiz e gli esercizi senza il numero del libro sono di questi appunti. Tutti i conti (codici di Huffman, LZW, parità, byte di controllo, distanze e decodifiche con il codice del libro) sono stati ricontrollati con un programma.
