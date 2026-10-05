---
corso: FDA
lezione: "01"
titolo: Bit, porte logiche, esadecimale e memorie
data: 2026-10-01
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 01 · Libro, parte 1, §1.1–1.3
descrizione: >-
  Appunti della lezione 01 di Fondamenti dell'Informatica (canale B): i bit e quante cose si possono scrivere con n bit,
  le operazioni booleane AND, OR, XOR e NOT, le porte logiche, il flip-flop che ricorda un bit, la notazione
  esadecimale, la memoria centrale (celle, indirizzi, RAM, kilobyte) e le memorie di massa (dischi magnetici e ottici,
  memorie flash), con strumenti interattivi, quiz ed esercizi svolti.
lede: >-
  Dentro un computer ogni informazione è fatta di due soli simboli, zero e uno. Qui vedi come si combinano con
  quattro operazioni, come le fanno i circuiti, come un circuito riesce a ricordare, come si scrivono in breve le
  lunghe file di zeri e uni e dove il computer le conserva: nella memoria centrale e nelle memorie di massa.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 1 (Brookshear, cap. 1), §1.1–1.3
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 3 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 1 (J. G. Brookshear, D. Brylow, Computer Science: an overview, cap. 1), §1.1 «Bits
  and Their Storage», §1.2 «Main Memory» e §1.3 «Mass Storage», con le risposte alle loro domande; riassunto della
  lezione del 01/10/2026 sul Moodle del canale B; lucidi del canale A 2026/27 sulla codifica dei dati; regole d'esame
  comuni ai tre canali
appunti_html: appunti/FDA/01_bit_porte_esadecimale.html
genera_html: true
---

## In breve

- Dentro un computer ogni informazione, numeri, testo, immagini e suoni, è scritta con due soli simboli, 0 e 1. Ognuno di questi simboli si chiama **bit**.
- Ogni bit in più raddoppia le possibilità: con $n$ bit si scrivono $2^n$ sequenze diverse. Con 8 bit, cioè un **byte**, sono 256.
- Le **operazioni booleane** combinano i bit: **AND** dà 1 solo se tutti e due gli ingressi valgono 1, **OR** se almeno uno vale 1, **XOR** se sono diversi, **NOT** scambia 0 e 1. Una **porta logica** è il circuito che esegue una di queste operazioni.
- Il **flip-flop** è un circuito che ricorda un bit: la sua uscita resta uguale finché un impulso non la cambia. È un primo mattone della memoria.
- La **notazione esadecimale** scrive quattro bit con un solo simbolo, da 0 a 9 e da A a F. Per esempio 1011 0101 diventa B5.
- La **memoria centrale** è una lunga fila di **celle** di un byte, ognuna con il suo numero, l'**indirizzo**. Si raggiunge qualunque cella nello stesso tempo (RAM). Un **kilobyte** sono 1024 byte.
- Le **memorie di massa**, cioè dischi magnetici, dischi ottici e memorie flash, conservano i dati anche a computer spento. Sono più grandi ed economiche della memoria centrale, ma più lente.
- All'esame, comune ai tre canali, tornano le tabelle delle operazioni e la lettura dei circuiti: vanno sapute a memoria.

> [!CANALI]
> Libro di testo ed esame sono gli stessi nei canali A, B e C; cambiano docenti e ordine delle lezioni. Nel canale B Stefano Berardi segue il libro, in inglese, senza slide sue. La sua prima lezione, lunedì 28/09, è stata un'introduzione al corso: questi appunti partono dalla seconda, giovedì 01/10, che ha fatto la sezione 1.1 del libro (bit, porte, flip-flop, esadecimale), la memoria centrale e le memorie di massa. Per questo qui è la lezione 01. I riassunti delle lezioni stanno sul Moodle del canale B, che chiede il login. Nel canale A (Felice Cardone) i lucidi «Cenni sulla codifica dei dati» partono proprio dai bit e da quante cose si possono etichettare con $n$ bit, e altri lucidi raccontano la struttura della memoria. Il canale C (Luca Paolini) è partito con i lucidi «Azzeramento» e «Rappresentazione». Attenzione: il programma del canale B salta alcune sezioni del libro che l'esame comune può chiedere (dettagli nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md)).

## Due simboli per dire tutto: i bit (libro, §1.1)

Un interruttore della luce ha due posizioni, acceso e spento, e nessuna terza. Dentro un computer succede la stessa cosa, miliardi di volte: ogni pezzetto di informazione si trova in uno di due stati. I due stati si scrivono con due simboli, 0 e 1.

Ognuno di questi simboli si chiama **bit**, dall'inglese *binary digit*, cioè «cifra binaria». «Binario» vuol dire «fatto di due».

Un bit da solo dice poco: sì o no, acceso o spento. Il libro insiste su un punto: un bit è soltanto un **simbolo**, e che cosa vuol dire dipende dall'uso. La stessa fila di bit può rappresentare un numero, una lettera, un pezzetto di immagine o di suono. Le prossime sezioni del libro spiegano come.

### Quante cose si dicono con pochi bit

Un bit ha 2 valori. Con due bit le combinazioni sono quattro: 00, 01, 10 e 11.

Con tre bit sono otto. Prendi le quattro combinazioni di prima e mettici davanti uno 0, oppure un 1: 000, 001, 010, 011 e poi 100, 101, 110, 111.

| Bit | Le sequenze | Quante sono |
|--:|---|--:|
| 1 | 0, 1 | 2 |
| 2 | 00, 01, 10, 11 | 4 |
| 3 | 000, 001, 010, 011, 100, 101, 110, 111 | 8 |
| 4 | da 0000 a 1111 | 16 |
| 8 | da 00000000 a 11111111 | 256 |

Ogni bit in più raddoppia il numero delle sequenze. Per ogni sequenza vecchia ce ne sono due nuove: una con uno 0 davanti e una con un 1 davanti.

> [!IDEA]
> Con $n$ bit si scrivono $2^n$ sequenze diverse.

> [!RIPASSO] le potenze di 2
> $2^n$ si legge «due alla $n$» e vuol dire 2 moltiplicato per sé stesso $n$ volte. Per convenzione $2^0 = 1$.
>
> | $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 |
> |---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
> | $2^n$ | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 1024 |

Una fila di 8 bit si chiama **byte**: la ritrovi più avanti, nella sezione sulla memoria centrale. Un byte può avere $2^8 = 256$ valori diversi.

### Quanti bit servono

Ora la domanda al contrario, che i lucidi del canale A fanno subito: devo dare un'etichetta diversa a un certo numero di oggetti. Quanti bit servono, come minimo?

Prendi 5 oggetti. Con 2 bit le etichette sono 4: non bastano, un oggetto resterebbe senza. Con 3 bit le etichette sono 8: bastano, e ne avanzano 3.

> [!METODO] Quanti bit servono per un certo numero di oggetti
> 1. Scrivi le potenze di 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, …
> 2. Cerca la prima potenza che è maggiore o uguale al numero degli oggetti.
> 3. Il suo esponente è il numero di bit che servono.

> [!ESEMPIO] Due conti con il metodo
> - **Le 26 lettere dell'alfabeto inglese.** Con 4 bit ci sono 16 etichette: poche. Con 5 bit ce ne sono 32, e $32 \ge 26$. Servono 5 bit.
> - **I 100 studenti di un'aula.** Con 6 bit ci sono 64 etichette: poche. Con 7 bit ce ne sono 128, e $128 \ge 100$. Servono 7 bit.

> [!NOTA] Lo stesso conto di Matematica Discreta
> Contare le sequenze di bit è lo stesso conto dei sottoinsiemi nella [lezione D01 di Matematica Discreta](../MDAG/D01_insiemi_induzione.html). Metti in fila gli elementi di un insieme: ogni bit dice se l'elemento corrispondente c'è (1) o no (0).

::: prova (a) Quante sequenze diverse si scrivono con 5 bit? (b) Quanti bit servono per dare un codice diverso a 40 persone?
(a) Con 5 bit le sequenze sono $2^5 = 32$.

(b) Con 5 bit le etichette sono 32, che non bastano per 40 persone. Con 6 bit sono 64, che bastano. Servono 6 bit.
:::

> [!RICORDA]
> - Un bit è un simbolo, 0 oppure 1. Che cosa vuol dire dipende dall'uso.
> - Con $n$ bit si scrivono $2^n$ sequenze: ogni bit in più raddoppia.
> - Per distinguere un certo numero di oggetti servono tanti bit quanto l'esponente della prima potenza di 2 che arriva almeno a quel numero.

## Quattro operazioni sui bit (libro, §1.1)

Quattro situazioni di tutti i giorni.

- La porta di casa ha due serrature: si apre solo se giri **tutte e due** le chiavi.
- L'allarme suona se si apre la porta **oppure** la finestra, e naturalmente anche se si aprono tutte e due.
- Il menù del pranzo offre il dolce o la frutta: puoi prendere l'uno **o** l'altro, ma **non tutti e due**.
- La luce del giardino si accende quando **non** è giorno.

Ognuna di queste frasi prende uno o due fatti, veri o falsi, e ne ricava un altro fatto, vero o falso. Il libro propone di leggere i bit proprio così: **1 vuol dire vero, 0 vuol dire falso**. Le operazioni su valori veri e falsi si chiamano **operazioni booleane** (*Boolean operations*), dal nome del matematico George Boole (1815–1864).

### AND: tutti e due

L'operazione **AND** («e») prende due bit e dà 1 solo quando valgono 1 **tutti e due**. È la porta con due serrature.

| A | B | A AND B |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

Nella tabella ci sono tutte le combinazioni possibili dei due ingressi, cioè $2^2 = 4$ righe. Una tabella così si chiama **tabella di verità**.

### OR: almeno uno

L'operazione **OR** («o») dà 1 quando **almeno uno** dei due bit vale 1. È l'allarme: basta una porta o una finestra aperta.

| A | B | A OR B |
|:-:|:-:|:-:|
| 0 | 0 | **0** |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

OR dà 0 in un caso solo: quando tutti e due gli ingressi valgono 0.

### XOR: uno solo

L'operazione **XOR** (*exclusive or*, «o esclusivo») dà 1 quando **uno solo** dei due bit vale 1. È il menù: dolce o frutta, non tutti e due. Un altro modo di dirlo: XOR dà 1 esattamente quando i due bit sono **diversi**.

| A | B | A XOR B |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | 0 |

OR e XOR differiscono solo nell'ultima riga: con tutti e due gli ingressi a 1, OR dà 1 e XOR dà 0.

### NOT: il contrario

L'operazione **NOT** («non») prende **un solo** bit e lo scambia: 0 diventa 1 e 1 diventa 0. È la luce del giardino: accesa quando non è giorno.

| A | NOT A |
|:-:|:-:|
| 0 | 1 |
| 1 | 0 |

### Tutte insieme

| A | B | A AND B | A OR B | A XOR B | NOT A |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

> [!TRAPPOLA] La «o» dell'italiano
> In italiano «o» a volte vuol dire OR e a volte XOR. «Sconto per studenti o pensionati»: se sei tutte e due le cose lo sconto ce l'hai lo stesso, quindi è un OR. «Caffè o tè?»: di solito si sceglie una cosa sola, quindi è un XOR. In informatica OR vuol dire sempre «almeno uno, anche tutti e due».

> [!OLTRE] · le operazioni su file di bit
> Le stesse operazioni si fanno su due file di bit della stessa lunghezza, colonna per colonna. Con 1100 e 1010:
>
> | | 1ª colonna | 2ª colonna | 3ª colonna | 4ª colonna |
> |---|:-:|:-:|:-:|:-:|
> | prima fila | 1 | 1 | 0 | 0 |
> | seconda fila | 1 | 0 | 1 | 0 |
> | AND | 1 | 0 | 0 | 0 |
> | OR | 1 | 1 | 1 | 0 |
> | XOR | 0 | 1 | 1 | 0 |
>
> Quindi 1100 AND 1010 = 1000, 1100 OR 1010 = 1110 e 1100 XOR 1010 = 0110.

::: prova Calcola: (a) 1 AND 0; (b) 1 OR 0; (c) 1 XOR 1; (d) NOT 0. Poi: (e) per quali ingressi XOR dà 1?
(a) 0: AND vuole tutti e due gli ingressi a 1, e qui uno vale 0.

(b) 1: almeno un ingresso vale 1.

(c) 0: i due ingressi sono uguali.

(d) 1: NOT scambia 0 e 1.

(e) Per 0 e 1, e per 1 e 0: quando i due ingressi sono diversi.
:::

> [!RICORDA]
> - AND: 1 solo se tutti e due gli ingressi valgono 1.
> - OR: 1 se almeno uno vale 1. XOR: 1 se i due ingressi sono diversi.
> - NOT: un solo ingresso, e dà il contrario.

## Le porte logiche (libro, §1.1)

Le operazioni della sezione precedente sono idee. Per farle davvero serve un oggetto fisico: un dispositivo con dei fili in entrata e un filo in uscita, che produce il risultato dell'operazione. Si chiama **porta logica**, in inglese *gate*.

Il libro racconta che una porta si può costruire in tanti modi: con ingranaggi, con relè, con dispositivi ottici. Nei computer di oggi le porte sono piccolissimi circuiti elettronici, e lo 0 e l'1 sono due livelli di tensione: tensione bassa per lo 0, tensione alta per l'1.

Ogni porta ha un suo disegno.

- **AND** ha la forma di una D: dritta dietro, rotonda davanti.
- **OR** ha la forma di uno scudo, con il retro incurvato e la punta davanti.
- **XOR** è il disegno dell'OR con una curva in più sul retro.
- **NOT** è un triangolo con un cerchietto sulla punta. Il cerchietto vuol dire «inverti».

Prova le porte nello strumento qui sotto.

```widget porte
titolo: Le quattro porte logiche: clicca sugli ingressi A e B
modo: porte
a: 1
b: 0
```

Guarda lo strumento: i fili che valgono 1 si colorano. Con A = 1 e B = 0 si accendono le uscite di OR e di XOR, ma non quella di AND. Ora metti anche B a 1: XOR si spegne e AND si accende. Prova tutte e quattro le combinazioni e confrontale con la tabella della sezione precedente.

### Collegare le porte

L'uscita di una porta può diventare l'ingresso di un'altra. Così si costruiscono circuiti che fanno conti più complicati.

Un esempio con tre ingressi, che chiamiamo A, B e C:

1. A e B entrano in una porta XOR;
2. l'uscita dell'XOR e l'ingresso C entrano in una porta AND;
3. l'uscita dell'AND è l'uscita del circuito.

Per sapere che cosa fa il circuito si prova ogni combinazione degli ingressi. Gli ingressi sono 3, quindi le combinazioni sono $2^3 = 8$. Si aggiunge una colonna per la porta XOR, che lavora per prima, e una per l'uscita.

| A | B | C | A XOR B | uscita: (A XOR B) AND C |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | **1** |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | **1** |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 |

L'uscita vale 1 in due righe soltanto. A parole: **uno solo dei primi due ingressi vale 1, e il terzo vale 1**. È la risposta che il libro dà alla domanda 1 del §1.1, su un circuito di questo tipo.

> [!METODO] Leggere un circuito di porte
> 1. Scrivi tutte le combinazioni degli ingressi: con $n$ ingressi sono $2^n$ righe. Mettile in ordine, come nella tabella qui sopra.
> 2. Aggiungi una colonna per ogni porta, partendo da quelle attaccate agli ingressi.
> 3. Riempi una colonna alla volta, con la tabella della porta.
> 4. L'ultima colonna è l'uscita del circuito. Alla fine descrivila a parole.

Un circuito come questo ha una proprietà importante: la sua uscita dipende **soltanto** dagli ingressi di quel momento. Se gli ingressi cambiano, l'uscita cambia subito di conseguenza. Nella prossima sezione vedi un circuito che si comporta in modo diverso.

::: prova Nel circuito di prima, che cosa esce con A = 1, B = 1 e C = 1? E con A = 0, B = 1 e C = 1?
Con A = 1, B = 1 e C = 1: l'XOR riceve due ingressi uguali e dà 0. L'AND riceve 0 e 1 e dà 0. Esce 0.

Con A = 0, B = 1 e C = 1: l'XOR riceve due ingressi diversi e dà 1. L'AND riceve 1 e 1 e dà 1. Esce 1.
:::

> [!RICORDA]
> - Una porta logica è un circuito che esegue un'operazione booleana: AND, OR, XOR o NOT.
> - Collegando le porte si costruiscono circuiti. Per capire che cosa fanno, si scrive la tabella con tutte le combinazioni degli ingressi.

## Un circuito che ricorda: il flip-flop (libro, §1.1)

Le porte viste finora non ricordano niente. La loro uscita dipende solo dagli ingressi di quel momento: quando l'ingresso cambia, l'uscita cambia. Per costruire una memoria serve un circuito che tenga un bit anche quando gli ingressi tornano a 0.

Il libro chiama **flip-flop** un circuito con un'uscita che vale 0 oppure 1 e che **resta uguale** finché un **impulso** non la fa cambiare. Un impulso (*pulse*) è un ingresso che passa per un attimo a 1 e poi torna a 0, come quando premi e lasci un pulsante.

### Com'è fatto

Il flip-flop della figura 1.3 del libro ha due ingressi, uno in alto e uno in basso, e tre porte.

1. L'ingresso in alto entra in una porta **OR**.
2. L'uscita dell'OR entra in una porta **AND**.
3. L'ingresso in basso passa da una porta **NOT** ed entra nell'AND.
4. L'uscita dell'AND è l'uscita del flip-flop. Ma **torna anche indietro**, ed entra nell'OR come secondo ingresso.

Il filo che torna indietro è il trucco. Provalo nello strumento.

```widget porte
titolo: Il flip-flop della figura 1.3: prova gli impulsi
modo: flipflop
```

Guarda che cosa succede con gli impulsi.

1. **All'inizio** gli ingressi valgono 0 e l'uscita vale 0.
2. **Impulso in alto.** L'OR riceve 1 e dà 1. Il NOT riceve 0 dall'ingresso in basso e dà 1. L'AND riceve 1 e 1: l'uscita diventa 1.
3. **Fine dell'impulso.** L'ingresso in alto torna a 0, ma l'OR riceve ancora l'uscita, che vale 1, e continua a dare 1. Quindi l'uscita **resta 1**: il circuito si ricorda dell'impulso.
4. **Impulso in basso.** Il NOT riceve 1 e dà 0. L'AND riceve uno 0 e dà 0: l'uscita diventa 0. Ora l'OR riceve 0 dall'ingresso in alto e 0 dall'uscita, e dà 0.
5. **Fine dell'impulso.** Il NOT torna a dare 1, ma l'OR dà 0, quindi l'AND continua a dare 0. L'uscita **resta 0**.

La stessa storia in una tabella. In ogni riga ci sono i valori dopo che il circuito si è assestato.

| Momento | In alto | In basso | OR | NOT | AND, cioè l'uscita |
|---|:-:|:-:|:-:|:-:|:-:|
| all'inizio | 0 | 0 | 0 | 1 | 0 |
| impulso in alto | 1 | 0 | 1 | 1 | **1** |
| fine dell'impulso | 0 | 0 | 1 | 1 | **1** |
| impulso in basso | 0 | 1 | 0 | 0 | **0** |
| fine dell'impulso | 0 | 0 | 0 | 1 | **0** |

Confronta la seconda e la terza riga: gli ingressi tornano come all'inizio, ma l'uscita no. L'uscita e l'OR si tengono accesi a vicenda, finché l'impulso in basso non spezza il giro.

> [!IDEA]
> Un impulso in alto mette l'uscita a 1, un impulso in basso la mette a 0. Tra un impulso e l'altro l'uscita resta com'è: il flip-flop **ricorda un bit**.

> [!NOTA] Un altro modo di costruirlo
> Il libro mostra anche un secondo flip-flop (figura 1.5), con due porte OR e due porte NOT. L'idea è la stessa: un'uscita che torna indietro e si tiene da sola. Lo racconta la domanda 3 del §1.1.

Il flip-flop è uno dei modi di conservare un bit dentro un computer. Come è organizzata la memoria, fatta di tantissimi bit, lo vedi più avanti, nella sezione sulla memoria centrale.

::: prova (a) Il flip-flop ha uscita 1 e arriva un impulso in alto. Che cosa succede? (b) Ha uscita 1 e arriva un impulso in basso. Che cosa succede?
(a) Niente di nuovo. Durante l'impulso l'OR riceve 1 dall'ingresso e 1 dall'uscita, e dà 1; il NOT dà 1; l'AND dà 1. Dopo l'impulso l'uscita resta 1.

(b) Il NOT riceve 1 e dà 0, quindi l'AND dà 0: l'uscita diventa 0, e resta 0 anche dopo l'impulso.
:::

> [!RICORDA]
> - Il flip-flop ha un'uscita che resta uguale finché un impulso non la cambia.
> - Impulso in alto: uscita 1. Impulso in basso: uscita 0.
> - Il segreto è il filo che riporta l'uscita all'ingresso dell'OR.

## Scrivere i bit in breve: l'esadecimale (libro, §1.1)

Prova a leggere ad alta voce questa fila di bit: 0110101011110010. È facile perdersi: sedici cifre, tutte 0 o 1. Il libro chiama una fila di bit una **stringa** di bit (*string*), e una stringa molto lunga un **flusso** (*stream*).

Il trucco è dividere la fila in gruppi di quattro bit, e scrivere ogni gruppo con un solo simbolo:

$$0110\ \ 1010\ \ 1111\ \ 0010 \quad\longrightarrow\quad 6\ \ \text{A}\ \ \text{F}\ \ 2$$

Quattro bit hanno $2^4 = 16$ combinazioni, quindi servono 16 simboli. Si usano le cifre da 0 a 9 e le lettere da A a F. Questo modo di scrivere si chiama **notazione esadecimale** (*hexadecimal notation*), da «sedici».

| Bit | Cifra | | Bit | Cifra |
|:-:|:-:|---|:-:|:-:|
| 0000 | 0 | | 1000 | 8 |
| 0001 | 1 | | 1001 | 9 |
| 0010 | 2 | | 1010 | A |
| 0011 | 3 | | 1011 | B |
| 0100 | 4 | | 1100 | C |
| 0101 | 5 | | 1101 | D |
| 0110 | 6 | | 1110 | E |
| 0111 | 7 | | 1111 | F |

Per ricordare la tabella c'è un aiuto. Le quattro posizioni del gruppo valgono, da sinistra, 8, 4, 2 e 1. Somma i valori delle posizioni dove c'è un 1. Per esempio 1011 dà $8 + 2 + 1 = 11$. Poi i numeri da 10 a 15 si scrivono con le lettere: A è 10, B è 11, e così via fino a F, che è 15. Quindi 1011 si scrive B. Perché funziona lo vedi nella [lezione 02](02_testo_colori_suoni_binario.html), sui numeri in base 2 (sezione 1.5 del libro).

> [!METODO] Dai bit all'esadecimale, e ritorno
> **Dai bit all'esadecimale.**
> 1. Dividi la fila in gruppi di quattro bit, partendo da destra. Se il primo gruppo a sinistra ha meno di quattro bit, aggiungi degli 0 davanti.
> 2. Scrivi la cifra di ogni gruppo con la tabella.
> 3. Metti le cifre una dopo l'altra, nello stesso ordine.
>
> **Dall'esadecimale ai bit.** Scrivi ogni cifra con i suoi quattro bit, **compresi gli 0 davanti**, e mettili in fila.

> [!ESEMPIO] Due conversioni
> **10110101 in esadecimale.** I gruppi sono 1011 e 0101. Con la tabella 1011 è B e 0101 è 5. Il risultato è B5.
>
> **5FD97 in bit.** Le cifre sono 5, F, D, 9 e 7. Con la tabella diventano 0101, 1111, 1101, 1001 e 0111. In fila: 01011111110110010111, cioè 20 bit.

Nello strumento qui sotto puoi cambiare i bit con un clic e vedere cambiare le cifre.

```widget porte
titolo: Sedici bit e le loro quattro cifre esadecimali
modo: esadecimale
bit: 0110101011110010
```

> [!TRAPPOLA] Ogni cifra vale quattro bit, anche lo 0
> La stringa esadecimale 0100 vuol dire 0000 0001 0000 0000: sedici bit, non i tre bit «100». Ogni cifra, zeri compresi, diventa un gruppo intero di quattro bit.

::: prova (a) Scrivi in esadecimale la fila 11100001. (b) Scrivi in bit la stringa esadecimale 3C.
(a) I gruppi sono 1110 e 0001. Con la tabella sono E e 1. Il risultato è E1.

(b) 3 è 0011 e C è 1100. Il risultato è 00111100.
:::

> [!RICORDA]
> - Una cifra esadecimale vale quattro bit: da 0000, cioè 0, a 1111, cioè F.
> - Per passare all'esadecimale si fanno gruppi di quattro bit partendo da destra. Per tornare ai bit si scrive ogni cifra con quattro bit, zeri compresi.

## La memoria centrale (libro, §1.2)

Immagina una cassettiera altissima, con i cassetti tutti uguali uno sopra l'altro. Su ogni cassetto c'è un numero: 0, 1, 2, 3, e così via. In ogni cassetto c'è posto per una fila di 8 bit. La memoria centrale di un computer è fatta proprio così.

Per conservare i dati, un computer ha moltissimi circuiti come il flip-flop, ognuno capace di tenere un bit. Tutti insieme formano la **memoria centrale** (*main memory*).

### Celle e byte

I bit della memoria centrale non stanno sparsi: sono raggruppati in **celle** (*cells*). Di solito una cella contiene 8 bit, cioè un **byte**. Un forno a microonde può avere qualche centinaio di celle; un computer di oggi ne ha miliardi.

Dentro una cella i bit stanno in fila. Il libro chiama **estremo alto** (*high-order end*) quello di sinistra ed **estremo basso** (*low-order end*) quello di destra. Il bit all'estremo alto si chiama **bit più significativo** (*most significant bit*), quello all'estremo basso **bit meno significativo** (*least significant bit*).

| Posizione | 1° | 2° | 3° | 4° | 5° | 6° | 7° | 8° |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Una cella | **1** | 0 | 0 | 1 | 0 | 1 | 1 | **0** |
| Nome | più significativo | | | | | | | meno significativo |

I nomi vengono dai numeri in base 2, che vedi nella [lezione 02](02_testo_colori_suoni_binario.html): il bit più a sinistra è quello che pesa di più.

### Gli indirizzi

Ogni cella ha un numero che la identifica, come il numero civico di una casa: è il suo **indirizzo** (*address*). Gli indirizzi partono da 0 e crescono di uno in uno. Così le celle hanno un ordine, e si può parlare della cella successiva o di quella precedente.

L'ordine serve anche a conservare file di bit più lunghe di un byte: si usano celle vicine. Per esempio sedici bit occupano due celle consecutive.

Con una cella si fanno due cose.

- **Leggerla**: si copia il suo contenuto, che resta com'era.
- **Scriverci**: si mette nella cella un valore nuovo. Il valore di prima si perde.

> [!ESEMPIO] Scrivere o copiare (domanda 1 del §1.2)
> La cella 5 contiene il valore 8. Scrivere il valore 5 nella cella 6 vuol dire che la cella 6 contiene 5. Copiare il contenuto della cella 5 nella cella 6 vuol dire che la cella 6 contiene 8. Nei due casi la cella 5 resta com'era.

Prova le due operazioni nello strumento qui sotto. Poi prova a scambiare il contenuto di due celle, come chiede la domanda 2 del §1.2: copiando la cella 2 nella 3 e poi la 3 nella 2 non funziona. Perché? E come si fa?

```widget porte
titolo: Una piccola memoria di otto celle: scrivi e copia
modo: memoria
```

### Ad accesso casuale: la RAM

La memoria centrale si chiama anche **RAM**, dall'inglese *random access memory*, cioè memoria ad accesso casuale. «Casuale» qui vuol dire che si può raggiungere qualunque cella, in qualunque ordine, nello stesso tempo. Su una vecchia cassetta, invece, per ascoltare la quinta canzone bisogna far scorrere il nastro fino a lì.

Molte RAM di oggi tengono i bit come piccolissime cariche elettriche, che si scaricano in fretta. Un circuito le rinfresca molte volte al secondo. Per questo si chiamano **RAM dinamiche** (*dynamic RAM*, DRAM). La RAM ha anche un limite: quando si spegne il computer perde tutto il suo contenuto.

### Quanto è grande una memoria

Le celle si contano con le potenze di 2, perché gli indirizzi sono scritti con i bit: con 10 bit si numerano $2^{10} = 1024$ celle. Per questo le memorie hanno spesso misure come 1024 o 4096 celle.

Il numero 1024 è vicino a 1000, quindi 1024 byte si chiamano un **kilobyte** (KB). Poi si prosegue nello stesso modo: 1024 KB fanno un **megabyte** (MB) e 1024 MB fanno un **gigabyte** (GB).

| Nome | Sigla | Byte | Come potenza di 2 |
|---|---|--:|:-:|
| kilobyte | KB | 1 024 | $2^{10}$ |
| megabyte | MB | 1 048 576 | $2^{20}$ |
| gigabyte | GB | 1 073 741 824 | $2^{30}$ |

> [!TRAPPOLA] Kilo vuol dire 1000 o 1024?
> Fuori dall'informatica «kilo» vuol dire esattamente 1000, e anche chi vende dischi conta spesso così: un disco da 1 GB può avere 1 000 000 000 byte. Per togliere il dubbio nel 1998 sono nati i nomi **kibibyte** (KiB), **mebibyte** (MiB) e **gibibyte** (GiB), che vogliono dire sempre 1024 byte, $2^{20}$ byte e $2^{30}$ byte. In queste lezioni, come nel libro, per la memoria KB vuol dire 1024 byte.

> [!ESEMPIO] Quanti bit ci sono in 4 KB (domanda 3 del §1.2)
> Un kilobyte sono 1024 byte, quindi 4 KB sono $4 \cdot 1024 = 4096$ byte. Ogni byte ha 8 bit: in tutto $4096 \cdot 8 = 32768$ bit.

::: prova (a) Quanti byte ci sono in 2 KB? E quanti bit? (b) Con indirizzi di 12 bit, quante celle si possono numerare?
(a) 2 KB sono $2 \cdot 1024 = 2048$ byte, cioè $2048 \cdot 8 = 16384$ bit.

(b) Con 12 bit si scrivono $2^{12} = 4096$ indirizzi diversi, da 0 a 4095: si numerano 4096 celle, cioè 4 KB di memoria se ogni cella è un byte.
:::

> [!RICORDA]
> - La memoria centrale è una fila di celle di un byte. Ogni cella ha un indirizzo, da 0 in su.
> - Leggere una cella non la cambia; scriverci sopra cancella il valore di prima.
> - Nella RAM si raggiunge qualunque cella nello stesso tempo. Quando si spegne il computer, la RAM perde tutto.
> - 1 KB = 1024 byte, 1 MB = 1024 KB, 1 GB = 1024 MB.

## Le memorie di massa (libro, §1.3)

Quando spegni il computer e lo riaccendi, i tuoi file ci sono ancora. Eppure la memoria centrale, spegnendo, perde tutto. I file stanno da un'altra parte: nelle **memorie di massa** (*mass storage*), dette anche memorie secondarie.

Rispetto alla memoria centrale, le memorie di massa hanno tre vantaggi e un difetto.

- Conservano i dati anche senza corrente.
- Sono molto più grandi.
- Costano molto meno per ogni byte, e spesso si possono staccare e portare via.
- Ma sono più lente. Molte hanno parti che si muovono, come un disco che gira, e un movimento meccanico è lentissimo rispetto ai circuiti elettronici.

Il libro ne presenta tre famiglie: i dischi magnetici, i dischi ottici e le memorie flash.

### I dischi magnetici

Un **disco rigido** (*hard disk*) è fatto di dischi sottili ricoperti di materiale magnetico, che girano velocissimi uno sopra l'altro. Sopra ogni faccia c'è una **testina di lettura e scrittura** (*read/write head*), che scrive i bit magnetizzando piccole zone della superficie e li legge sentendo come sono magnetizzate.

Se la testina sta ferma, il disco che gira le passa sotto lungo un cerchio. Spostando la testina verso il centro o verso il bordo si passa a un cerchio diverso.

- Ogni cerchio si chiama **traccia** (*track*): le tracce sono cerchi con lo stesso centro, uno dentro l'altro.
- Ogni traccia è divisa in archi chiamati **settori** (*sectors*). Tutti i settori contengono lo stesso numero di bit, per esempio 512 byte o qualche KB.
- Le testine di tutte le facce si muovono insieme. Le tracce che stanno una sopra l'altra, alla stessa distanza dal centro, formano un **cilindro** (*cylinder*).

Segnare tracce e settori su un disco nuovo vuol dire **formattarlo**.

Per sapere quanto è veloce un disco si guardano quattro misure.

- **Tempo di ricerca** (*seek time*): il tempo che serve per spostare le testine da una traccia a un'altra.
- **Ritardo di rotazione** o **latenza** (*rotation delay*, *latency time*): il tempo di attesa perché il settore giusto arrivi sotto la testina. In media è mezzo giro del disco.
- **Tempo di accesso** (*access time*): la somma dei due tempi di prima.
- **Velocità di trasferimento** (*transfer rate*): quanti bit al secondo si possono leggere o scrivere.

> [!ESEMPIO] Il ritardo di rotazione di un disco
> Un disco fa 7200 giri al minuto, cioè $7200 : 60 = 120$ giri al secondo. Un giro dura quindi $1/120$ di secondo, circa 8,3 millesimi di secondo. In media si aspetta mezzo giro: circa 4,2 millesimi di secondo. Sembra poco, ma in quel tempo un processore fa milioni di operazioni.

> [!NOTA] I nastri magnetici
> Esistono anche i nastri magnetici, simili alle vecchie cassette. Per arrivare a un dato bisogna far scorrere il nastro fino a lì, quindi sono lentissimi. Si usano ancora per le copie di sicurezza degli archivi molto grandi.

### I dischi ottici: CD, DVD e Blu-ray

Un **CD** (*compact disk*) è un disco di 12 centimetri con una superficie che riflette la luce, protetta da uno strato di plastica. I bit sono piccole irregolarità della superficie: un laser le illumina e un sensore sente come la luce torna indietro.

A differenza dei dischi magnetici, i dati stanno su una sola traccia **a spirale**. La spirale parte dal centro e arriva al bordo, come il solco di un vecchio disco in vinile, ed è divisa in settori.

- Un CD contiene da 600 a 700 MB.
- Un **DVD** (*digital versatile disk*) ha le stesse misure, ma più strati semitrasparenti uno sopra l'altro: contiene alcuni GB.
- Un **Blu-ray** (BD) usa un laser blu-violetto invece che rosso. Il raggio è più sottile e i bit stanno più vicini: contiene più di cinque volte un DVD.

La spirale va benissimo per i dati lunghi letti dall'inizio alla fine, come musica e film. Per saltare a un dato qualunque, invece, è lenta: non ci sono tracce da raggiungere con un solo spostamento.

### Le memorie flash

Le **memorie flash** sono le chiavette USB, le schede SD delle macchine fotografiche e i dischi a stato solido. Non hanno nessuna parte in movimento. I bit si scrivono con segnali elettrici che intrappolano elettroni in minuscole celle di biossido di silicio; lì gli elettroni restano per anni, anche senza corrente.

Senza parti in movimento sono veloci, silenziose e non temono gli urti. Hanno però un limite: ogni volta che una cella si cancella si rovina un poco, e dopo molte riscritture smette di funzionare. Per questo non vanno bene come memoria centrale, che si riscrive di continuo.

Un **disco a stato solido** (*solid-state disk*, SSD) è una memoria flash abbastanza grande da prendere il posto del disco rigido. È più veloce, silenzioso e robusto. Costa però di più per ogni GB, e per questo i dischi magnetici si usano ancora.

| | Dischi magnetici | Dischi ottici | Memorie flash |
|---|---|---|---|
| Come si scrive un bit | magnetizzando un punto della superficie | cambiando come la superficie riflette la luce | intrappolando elettroni in piccole celle |
| Parti in movimento | sì: dischi e testine | sì: disco e laser | no |
| Come stanno i dati | tracce concentriche, settori, cilindri | una sola traccia a spirale | celle elettroniche |
| Punti forti | tanto spazio, costo basso per byte | economici e facili da trasportare | veloci, robuste, silenziose |
| Punti deboli | lenti rispetto alla RAM | lenti a saltare da un dato a un altro | costano di più, si consumano riscrivendole |

::: prova (a) Un disco fa 6000 giri al minuto. Quanto vale in media il ritardo di rotazione? (b) Perché una chiavetta USB non ha tempo di ricerca?
(a) 6000 giri al minuto sono $6000 : 60 = 100$ giri al secondo: un giro dura $1/100$ di secondo, cioè 10 millesimi. In media si aspetta mezzo giro: 5 millesimi di secondo.

(b) Il tempo di ricerca è il tempo per spostare le testine da una traccia all'altra. Una chiavetta è una memoria flash: non ha testine né parti che si muovono.
:::

> [!RICORDA]
> - Le memorie di massa conservano i dati anche a computer spento, sono grandi ed economiche, ma più lente della memoria centrale.
> - Disco magnetico: tracce concentriche divise in settori; le tracce una sopra l'altra formano un cilindro. Tempo di accesso = tempo di ricerca + ritardo di rotazione.
> - CD, DVD e Blu-ray: una sola traccia a spirale letta da un laser. Il Blu-ray usa un laser blu-violetto e contiene di più.
> - Memorie flash e SSD: nessuna parte in movimento, veloci e robuste, ma si consumano riscrivendole.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $0$, $1$ | «zero», «uno» | i due valori di un bit; come valori di verità, falso e vero | 1 AND 1 = 1 |
| bit | «bit» | una cifra binaria, 0 oppure 1 | 1 |
| byte | «bàit» | una fila di 8 bit | 01001000 |
| $2^n$ | «due alla $n$» | quante sequenze diverse si scrivono con $n$ bit | $2^8 = 256$ |
| AND | «end» | 1 solo se tutti e due gli ingressi valgono 1 | 1 AND 0 = 0 |
| OR | «or» | 1 se almeno un ingresso vale 1 | 1 OR 0 = 1 |
| XOR | «ics-or» | 1 se i due ingressi sono diversi | 1 XOR 1 = 0 |
| NOT | «not» | il contrario dell'ingresso | NOT 0 = 1 |
| $\land$, $\lor$, $\oplus$, $\lnot$ | «e», «o», «o esclusivo», «non» | le stesse operazioni scritte come in logica (parte 2 del libro) | $1 \land 0 = 0$ |
| A, B, C, D, E, F | «a», «bi», «ci», «di», «e», «effe» | le cifre esadecimali che valgono da 10 a 15 | B = 1011 |
| $1011_2$, $\text{B}_{16}$ | «1011 in base due», «B in base sedici» | il numerino in basso dice in che base è scritto il numero ([lezione 02](02_testo_colori_suoni_binario.html)) | $1011_2 = \text{B}_{16}$ |
| KB, MB, GB | «kilobyte», «megabyte», «gigabyte» | per la memoria: $2^{10}$, $2^{20}$ e $2^{30}$ byte | 4 KB = 4096 byte |
| KiB, MiB, GiB | «kibibyte», «mebibyte», «gibibyte» | gli stessi valori, con nomi che non lasciano dubbi | 1 KiB = 1024 byte |
| RAM | «ram» | la memoria centrale, ad accesso casuale (*random access memory*) | 8 GB di RAM |
| SSD | «esse-esse-di» | disco a stato solido, fatto di memoria flash | un SSD da 512 GB |

## Verso l'esame

L'esame di **Fondamenti dell'Informatica** è uno scritto sulla piattaforma Moodle Esami, con Safe Exam Browser, ed è **unico per i canali A, B e C**. Le regole valgono per gli appelli da gennaio a settembre 2027.

**Com'è fatta la prova**

- **Parte 1: 9 quiz** a risposta chiusa in 45 minuti, da 3 punti l'uno, quindi al massimo 27. Per passare servono **almeno 18 punti**: 17,5 viene arrotondato a 18.
- **Parte 2, facoltativa: una domanda aperta** in 30 minuti, che vale **da −1 a 6 punti**. Si può fare solo con **almeno 24 punti** nei quiz, contati prima dell'arrotondamento. Una risposta molto sbagliata vale −1: se non sai che cosa scrivere, lasciala vuota.
- Oltre 30 punti il voto è 30 e lode. Durante la prova non si cambia pagina: Safe Exam Browser blocca la prova.

| Appello 2026/27 | Iscrizioni | Ora |
|---|---|---|
| ven 29/01/2027 | 09/01 – 22/01/2027 | 9:00 |
| gio 18/02/2027 | 29/01 – 11/02/2027 | 9:00 |

Tutti i dettagli sono nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md).

**Che cosa serve di questa lezione**

1. **Le tabelle delle operazioni.** Nelle simulazioni d'esame del 2023/24 tornano due tipi di quiz. Uno chiede la formula booleana di una tabella di verità; l'altro dà un circuito, combinatorio o sequenziale, e chiede che funzione calcola. Sono le idee di questa lezione, riprese più avanti con le algebre di Boole e i circuiti (capitolo 11 della parte 2 del libro).
2. **Leggere un circuito.** Il metodo con la tabella di tutte le combinazioni degli ingressi funziona per qualunque circuito di porte.
3. **I bit e le potenze di 2.** Quante sequenze con $n$ bit e quanti bit servono: sono conti che tornano con la rappresentazione dei numeri.
4. **L'esadecimale.** Torna con le conversioni tra basi della [lezione 02](02_testo_colori_suoni_binario.html).
5. **Memoria centrale e memorie di massa.** Nei quiz delle simulazioni del 2023/24 non compaiono, ma le sezioni 1.2 e 1.3 stanno nella mappa comune del libro. Servono le idee (celle, indirizzi, RAM, tracce, settori, flash) e i conti con le potenze di 2, come i bit di 4 KB.

I quiz sono in italiano e il libro in inglese: impara i nomi in tutte e due le lingue. Il glossario in fondo li mette uno accanto all'altro. Sulla pagina d'esame (Moodle Esami, id 2673) ci sono anche quiz di ripasso divisi per lezione.

> [!ESAME] Cinque minuti a domanda
> Nella prima parte hai 45 minuti per 9 quiz: 5 minuti a domanda. Le tabelle di AND, OR, XOR e NOT e la tabella dell'esadecimale vanno sapute a memoria, senza doverle ricostruire durante la prova.

**Errori da evitare**

- Confondere OR e XOR nella riga con tutti e due gli ingressi a 1: OR dà 1, XOR dà 0.
- Dimenticare una combinazione degli ingressi: con 3 ingressi le righe sono 8, non 6.
- Pensare che il flip-flop torni a 0 da solo quando l'impulso finisce: è proprio quello che non fa.
- Nell'esadecimale, togliere gli 0 davanti a una cifra: 1 è 0001, non 1.
- Dimenticare che un byte ha 8 bit, o che per la memoria un KB ha 1024 byte: 4 KB sono $4 \cdot 1024 \cdot 8 = 32768$ bit.
- Credere che il tempo di accesso di un disco sia solo il tempo di ricerca: va aggiunto il ritardo di rotazione.

## Quiz

```quiz
D: Quante sequenze diverse si possono scrivere con 6 bit?
- $6$
- $12$
- $36$
+ $64$
- $128$
= Ogni bit in più raddoppia le sequenze: con 6 bit sono $2^6 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 64$. La risposta $12$ viene se si fa $6 \cdot 2$ invece di moltiplicare 2 per sé stesso 6 volte. La risposta $36$ è $6 \cdot 6$, un conto che qui non c'entra. La risposta $128$ è il conto per 7 bit.

D: Quanti bit servono, come minimo, per dare un codice diverso a ognuno dei 30 studenti di un laboratorio?
- $4$
+ $5$
- $6$
- $15$
- $30$
= Con 4 bit i codici sono $2^4 = 16$, non bastano per 30 studenti. Con 5 bit sono $2^5 = 32$, che bastano. Quindi servono 5 bit. La risposta $6$ funziona, ma non è il minimo. Le risposte $15$ e $30$ dimenticano che ogni bit raddoppia i codici.

D: Per quali valori di A e B l'operazione A XOR B dà 1?
- Solo per A = 1 e B = 1.
- Solo per A = 0 e B = 0.
+ Per A = 0 e B = 1, e per A = 1 e B = 0.
- In tutti i casi tranne A = 0 e B = 0.
- In tutti i casi tranne A = 1 e B = 1.
= XOR dà 1 esattamente quando i due ingressi sono diversi, cioè nelle due righe con uno 0 e un 1. La risposta «in tutti i casi tranne A = 0 e B = 0» descrive OR, ed è la più tentatrice: OR dà 1 anche con tutti e due gli ingressi a 1, XOR no. «Solo per A = 1 e B = 1» descrive AND.

D: Con A = 1 e B = 0, quanto vale NOT (A AND B)?
- $0$
+ $1$
- Dipende dall'ordine degli ingressi.
- Non si può calcolare: NOT ha un solo ingresso.
- $10$
= Si calcola prima la parentesi: 1 AND 0 = 0, perché AND vuole tutti e due gli ingressi a 1. Poi NOT 0 = 1. NOT ha davvero un solo ingresso, ma qui il suo ingresso è il risultato della parentesi, un bit solo. L'ordine degli ingressi di AND non conta: 1 AND 0 e 0 AND 1 danno tutti e due 0.

D: Nel circuito (A XOR B) AND C, quale combinazione di ingressi dà uscita 1?
- A = 1, B = 1, C = 1
- A = 0, B = 0, C = 1
+ A = 1, B = 0, C = 1
- A = 0, B = 1, C = 0
- A = 1, B = 0, C = 0
= L'uscita vale 1 quando l'XOR dà 1, cioè A e B sono diversi, e anche C vale 1. Solo A = 1, B = 0, C = 1 rispetta tutte e due le condizioni. Con A = 1, B = 1, C = 1, la risposta più tentatrice, l'XOR riceve due ingressi uguali e dà 0, quindi esce 0. Con C = 0 l'AND dà sempre 0.

D: Il flip-flop della figura 1.3 ha uscita 1. Arriva un impulso sull'ingresso in alto, che poi torna a 0. Quanto vale l'uscita dopo l'impulso?
- $0$, perché l'ingresso in alto è tornato a 0.
+ $1$, perché l'uscita torna all'OR e lo tiene a 1.
- $0$, perché ogni impulso scambia l'uscita.
- Dipende da quanto è durato l'impulso.
- Non si può sapere senza conoscere l'ingresso in basso.
= L'uscita valeva già 1. Durante l'impulso l'OR riceve 1, il NOT dà 1 perché l'ingresso in basso vale 0, e l'AND dà 1. Quando l'impulso finisce, l'OR riceve ancora l'uscita, che vale 1, e l'uscita resta 1. La prima risposta è la più tentatrice: varrebbe per una porta normale, che non ricorda, ma non per un flip-flop. L'ingresso in basso è fermo a 0, come in tutti gli esempi del libro.

D: Come si scrive in notazione esadecimale la fila di bit 11010011?
- $\text{C}3$
+ $\text{D}3$
- $\text{D}6$
- $\text{B}3$
- $211$
= I gruppi di quattro bit sono 1101 e 0011. Con la tabella, 1101 è D, perché $8 + 4 + 1 = 13$, e 0011 è 3, perché $2 + 1 = 3$. Il risultato è D3. C è 1100, B è 1011: le risposte con C o B sbagliano il primo gruppo di un bit. La risposta $211$ è il valore del numero in base dieci, che qui non è richiesto.

D: Quale fila di bit rappresenta la stringa esadecimale 7E?
- $0111\ 1101$
+ $0111\ 1110$
- $111\ 1110$
- $1110\ 0111$
- $0111\ 1111$
= Ogni cifra diventa quattro bit: 7 è 0111 ed E è 1110. In fila viene 0111 1110. La risposta con soli 7 bit dimentica lo 0 davanti al 7: ogni cifra vale sempre quattro bit. La risposta 1110 0111 scambia l'ordine delle cifre. 1101 è D, non E.

D: Quante cifre esadecimali servono per scrivere una fila di 24 bit?
N: 6
= Ogni cifra esadecimale vale quattro bit, quindi servono $24 : 4 = 6$ cifre. Per esempio la stringa E85517 del §1.1 è fatta di 24 bit.

D: Quanti bit ci sono in una memoria da 2 KB?
- $2000$
- $2048$
- $16000$
+ $16384$
- $16$
= 2 KB sono $2 \cdot 1024 = 2048$ byte, e ogni byte ha 8 bit: $2048 \cdot 8 = 16384$. La risposta $2048$ conta i byte, non i bit. La risposta $16000$ usa 1000 al posto di 1024: per la memoria un KB vale 1024 byte.

D: Le celle 2 e 3 contengono due valori diversi. Quale sequenza di passi scambia i loro contenuti?
- Copia la cella 2 nella 3, poi copia la cella 3 nella 2.
- Copia la cella 3 nella 2, poi copia la cella 2 nella 3.
+ Copia la cella 2 nella 1, poi la cella 3 nella 2, poi la cella 1 nella 3.
- Copia la cella 2 nella 1, poi la cella 1 nella 3, poi la cella 3 nella 2.
- Non si può fare: copiare una cella cancella sempre quella di partenza.
= Serve una cella di appoggio, qui la 1. Si mette da parte il valore della cella 2, poi si copia la 3 nella 2, infine si porta nella 3 il valore messo da parte. Le prime due risposte perdono un valore al primo passo: alla fine le due celle contengono lo stesso valore. La quarta copia nella 3 il valore della 2 prima di aver salvato quello della 3, che va perso. L'ultima è falsa: copiare legge la cella di partenza senza cambiarla.

D: Un disco magnetico deve leggere un settore che sta su un'altra traccia. Che cosa si somma per avere il tempo di accesso?
+ Il tempo di ricerca e il ritardo di rotazione.
- Il tempo di ricerca e la velocità di trasferimento.
- Il ritardo di rotazione e la velocità di trasferimento.
- Niente: è solo il tempo di ricerca, perché il disco gira sempre.
- Niente: è solo il ritardo di rotazione, perché le testine non si muovono.
= Prima le testine si spostano sulla traccia giusta (tempo di ricerca), poi si aspetta che il settore arrivi sotto la testina (ritardo di rotazione): il tempo di accesso è la somma dei due. La velocità di trasferimento è un'altra misura, in bit al secondo: dice quanto in fretta si legge una volta arrivati.

D: Quale memoria non ha parti in movimento ma si consuma dopo molte riscritture?
- Il disco rigido magnetico.
- Il CD.
- Il Blu-ray.
+ La memoria flash, come quella di una chiavetta o di un SSD.
- Il nastro magnetico.
= Le memorie flash scrivono i bit intrappolando elettroni in piccole celle, senza dischi né testine. Ogni cancellazione rovina un poco le celle, quindi dopo molte riscritture smettono di funzionare. Dischi rigidi, CD, Blu-ray e nastri hanno tutti parti che si muovono.
```

## Esercizi

::: esercizio base Bit e potenze di 2
(a) Quante sequenze diverse si scrivono con 3 bit? E con 10 bit? (b) Quanti bit servono, come minimo, per dare un codice diverso a 1000 oggetti? E a 2 oggetti?
::: soluzione
1. Con 3 bit le sequenze sono $2^3 = 8$.
2. Con 10 bit sono $2^{10} = 1024$.
3. Per 1000 oggetti: con 9 bit le etichette sono $2^9 = 512$, poche. Con 10 bit sono 1024, e bastano. Servono 10 bit.
4. Per 2 oggetti basta 1 bit: uno prende 0, l'altro 1.

Controllo del punto 3: $512 < 1000$ e $1000 \le 1024$.
:::

::: esercizio base Le tabelle delle operazioni
Calcola: (a) 0 AND 1; (b) 0 OR 0; (c) 0 XOR 1; (d) NOT 1; (e) (1 OR 0) AND 1; (f) NOT (0 OR 0).
::: soluzione
1. (a) 0: AND vuole tutti e due gli ingressi a 1.
2. (b) 0: nessun ingresso vale 1.
3. (c) 1: gli ingressi sono diversi.
4. (d) 0: NOT scambia 1 con 0.
5. (e) Prima la parentesi: 1 OR 0 = 1. Poi 1 AND 1 = 1.
6. (f) Prima la parentesi: 0 OR 0 = 0. Poi NOT 0 = 1.
:::

::: esercizio base Domanda 5 del §1.1: dai bit all'esadecimale
Scrivi in notazione esadecimale queste file di bit: (a) 0110101011110010; (b) 111010000101010100010111; (c) 01001000.
::: soluzione
1. (a) I gruppi sono 0110, 1010, 1111 e 0010. Con la tabella: 6, A, F e 2. Il risultato è 6AF2.
2. (b) I gruppi sono 1110, 1000, 0101, 0101, 0001 e 0111. Con la tabella: E, 8, 5, 5, 1 e 7. Il risultato è E85517.
3. (c) I gruppi sono 0100 e 1000. Con la tabella: 4 e 8. Il risultato è 48.

Sono le risposte che dà il libro. Controllo della (c) all'indietro: 4 è 0100 e 8 è 1000, e in fila torna 01001000.
:::

::: esercizio base Domanda 6 del §1.1: dall'esadecimale ai bit
Quali file di bit rappresentano queste stringhe esadecimali? (a) 5FD97; (b) 610A; (c) ABCD; (d) 0100.
::: soluzione
Ogni cifra diventa quattro bit, zeri compresi.

| Stringa | Le cifre in bit | Fila di bit |
|---|---|---|
| 5FD97 | 0101 · 1111 · 1101 · 1001 · 0111 | 01011111110110010111 |
| 610A | 0110 · 0001 · 0000 · 1010 | 0110000100001010 |
| ABCD | 1010 · 1011 · 1100 · 1101 | 1010101111001101 |
| 0100 | 0000 · 0001 · 0000 · 0000 | 0000000100000000 |

Sono le risposte che dà il libro. Nell'ultima riga la stringa ha quattro cifre, quindi i bit sono sedici: è la trappola della sezione sull'esadecimale.
:::

::: esercizio medio Domanda 1 del §1.1: quando esce 1
Un circuito ha tre ingressi. I primi due entrano in una porta XOR; l'uscita dell'XOR e il terzo ingresso entrano in una porta AND, che dà l'uscita del circuito. Per quali ingressi l'uscita vale 1?
::: soluzione
1. Gli ingressi sono 3, quindi le combinazioni da provare sono $2^3 = 8$.
2. L'AND dà 1 solo se tutti e due i suoi ingressi valgono 1: serve che l'XOR dia 1 e che il terzo ingresso valga 1.
3. L'XOR dà 1 quando i primi due ingressi sono diversi: 0 e 1, oppure 1 e 0.
4. Quindi le combinazioni giuste sono due: (0, 1, 1) e (1, 0, 1).

A parole, come nelle risposte del libro: uno e uno solo dei primi due ingressi deve valere 1, e il terzo deve valere 1. La tabella completa è nella sezione sulle porte logiche.
:::

::: esercizio medio Un circuito che fa come un OR
Un circuito fa passare A e B ciascuno da una porta NOT. Le due uscite entrano in una porta AND, e l'uscita dell'AND passa da un'altra porta NOT. Scrivi la tabella del circuito: a quale porta singola equivale?
::: soluzione
Il circuito calcola NOT ((NOT A) AND (NOT B)). Una colonna per ogni porta:

| A | B | NOT A | NOT B | (NOT A) AND (NOT B) | uscita |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 1 | 1 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 0 | 1 |

L'ultima colonna è uguale a quella di A OR B: il circuito equivale a una sola porta OR.

Il perché a parole: l'AND centrale dà 1 solo quando A e B valgono tutti e due 0. Il NOT finale capovolge: l'uscita è 0 solo in quel caso, cioè è 1 quando almeno un ingresso vale 1. È una delle leggi di De Morgan, che tornano nella parte 2 del libro.
:::

::: esercizio medio Un circuito che fa come uno XOR
Un circuito calcola (A OR B) AND (NOT (A AND B)). Scrivi la tabella: a quale porta singola equivale?
::: soluzione
| A | B | A OR B | A AND B | NOT (A AND B) | uscita |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

L'ultima colonna è uguale a quella di A XOR B: il circuito equivale a una porta XOR.

Il perché a parole: «almeno uno vale 1» e «non tutti e due valgono 1» insieme vogliono dire «esattamente uno vale 1».
:::

::: esercizio medio Una storia di impulsi
Il flip-flop della figura 1.3 parte con uscita 0. Arrivano, uno dopo l'altro, questi impulsi: in alto, in alto, in basso, in basso, in alto. Quanto vale l'uscita dopo ogni impulso?
::: soluzione
1. Impulso in alto: l'uscita diventa 1.
2. Impulso in alto: l'uscita era già 1 e resta 1.
3. Impulso in basso: l'uscita diventa 0.
4. Impulso in basso: l'uscita era già 0 e resta 0.
5. Impulso in alto: l'uscita diventa 1.

La sequenza delle uscite è 1, 1, 0, 0, 1. L'uscita dopo un impulso dipende solo da quale ingresso l'ha ricevuto, non da quante volte. Puoi rifare la storia nello strumento del flip-flop.
:::

::: esercizio difficile Domanda 2 del §1.1: che cosa succede dentro
Il flip-flop della figura 1.3 ha uscita 1, e l'ingresso in alto è fermo a 0. Arriva un 1 sull'ingresso in basso, che poi torna a 0. Racconta in ordine che cosa succede alle porte.
::: soluzione
1. Il NOT riceve 1 e dà 0.
2. L'AND riceve 0 dal NOT, quindi dà 0, qualunque cosa arrivi dall'OR. L'uscita del flip-flop diventa 0.
3. L'uscita torna all'OR, che ora riceve 0 dall'ingresso in alto e 0 dall'uscita: anche l'OR dà 0.
4. Quando l'ingresso in basso torna a 0, il NOT torna a dare 1. Ma l'AND riceve 0 dall'OR, quindi continua a dare 0.
5. L'uscita resta 0 anche dopo l'impulso.

È lo stesso racconto delle risposte del libro: il punto chiave è il passo 3, in cui l'OR si spegne e non riaccende più l'AND.
:::

::: esercizio esame Un circuito per l'uguaglianza
Serve un circuito con due ingressi che dia 1 esattamente quando i due ingressi sono **uguali**. Scegli tra: (a) A AND B; (b) A OR B; (c) NOT (A XOR B); (d) NOT (A OR B); (e) A XOR B. Giustifica la scelta con una tabella.
::: soluzione
| A | B | richiesto | A AND B | A OR B | NOT (A XOR B) | NOT (A OR B) | A XOR B |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 1 | 0 | 0 | **1** | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 | **0** | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | **0** | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 | **1** | 0 | 0 |

1. XOR dà 1 quando gli ingressi sono diversi. Il suo contrario, NOT (A XOR B), dà 1 quando sono uguali: è la colonna richiesta. La risposta è la (c).
2. A AND B sbaglia la prima riga: due 0 sono uguali, ma AND dà 0.
3. NOT (A OR B) sbaglia l'ultima riga: due 1 sono uguali, ma dà 0.
4. A OR B e A XOR B sbagliano più righe.
:::

::: esercizio base Domande 1 e 3 del §1.2: scrivere, copiare, contare i bit
(a) La cella con indirizzo 5 contiene il valore 8. Che differenza c'è tra scrivere il valore 5 nella cella 6 e copiare il contenuto della cella 5 nella cella 6? (b) Quanti bit ci sono in una memoria da 4 KB?
::: soluzione
1. (a) Scrivendo il valore 5, la cella 6 contiene 5. Copiando la cella 5, la cella 6 contiene 8, il valore che sta nella cella 5. In tutti e due i casi la cella 5 non cambia, e il valore di prima della cella 6 si perde.
2. (b) 4 KB sono $4 \cdot 1024 = 4096$ byte.
3. Ogni byte ha 8 bit: $4096 \cdot 8 = 32768$ bit.

Sono le risposte che dà il libro. Controllo della (b) con le potenze di 2: $4 = 2^2$, $1024 = 2^{10}$ e $8 = 2^3$, quindi i bit sono $2^{2+10+3} = 2^{15} = 32768$.
:::

::: esercizio medio Domanda 2 del §1.2: scambiare due celle
Vuoi scambiare i valori delle celle 2 e 3. Che cosa non va in questi due passi? Passo 1: copia la cella 2 nella cella 3. Passo 2: copia la cella 3 nella cella 2. Scrivi una sequenza di passi corretta; puoi usare altre celle.
::: soluzione
1. Il passo 1 scrive nella cella 3 il valore della cella 2: il valore che c'era nella 3 si perde.
2. Il passo 2 copia nella 2 quello che ora c'è nella 3, cioè il valore della 2: la cella 2 non cambia.
3. Alla fine tutte e due le celle contengono il valore che stava nella 2.

Una sequenza corretta, come nelle risposte del libro, usa la cella 1 per mettere da parte un valore:

1. Copia la cella 2 nella cella 1.
2. Copia la cella 3 nella cella 2.
3. Copia la cella 1 nella cella 3.

Puoi provarla nello strumento della memoria: con 2 e 3 diversi, dopo i tre passi sono scambiati.
:::

::: esercizio medio Domande 1 e 2 del §1.3: dischi più veloci e cilindri
(a) Che cosa si guadagna facendo girare più in fretta un disco? (b) Un disco ha più facce. Per registrare tanti dati, conviene riempire una faccia intera prima di passare alla successiva, oppure riempire un cilindro intero prima di passare al successivo?
::: soluzione
1. (a) Il settore cercato arriva prima sotto la testina, quindi il ritardo di rotazione diminuisce. In più passano più bit sotto la testina ogni secondo: aumenta la velocità di trasferimento.
2. (b) Muovere le testine è lento, perché è un movimento meccanico: conviene spostarle il meno possibile.
3. Riempiendo una faccia alla volta, le testine si spostano ogni volta che una traccia è piena: tanti spostamenti quante sono le tracce di tutte le facce.
4. Riempiendo un cilindro alla volta, quando una traccia è piena si passa alla traccia sopra o sotto. Basta attivare un'altra testina, con un comando elettronico, senza muovere niente. Le testine si spostano solo quando l'intero cilindro è pieno.

Quindi conviene riempire un cilindro alla volta, come dicono le risposte del libro.
:::

::: esercizio medio Domande 3–6 del §1.3: quale memoria per quale uso
(a) Perché i dati di un sistema di prenotazioni, che cambiano di continuo, stanno su un disco magnetico e non su un CD o un DVD? (b) Perché lo stesso lettore riesce a leggere CD, DVD e Blu-ray? (c) Che vantaggio hanno le memorie flash sugli altri sistemi? (d) Perché i dischi magnetici si usano ancora?
::: soluzione
1. (a) In un sistema di prenotazioni si va a cercare un dato qualunque, in un ordine qualunque. Sulla spirale di un CD o di un DVD saltare da un dato all'altro è lento. In più su questi dischi non si può cambiare un pezzetto di dati qua e là.
2. (b) I tre dischi hanno la stessa misura e la stessa traccia a spirale. Un lettore con più laser, rosso e blu-violetto, li legge tutti.
3. (c) Non hanno parti in movimento: rispondono prima e non si consumano per l'attrito.
4. (d) Sono più veloci e capienti degli altri supporti magnetici, come i nastri. Rispetto ai dischi ottici sono più veloci, più capienti e si riscrivono senza problemi. E costano meno per ogni GB dei dischi a stato solido, anche se la differenza si è ridotta negli ultimi anni.
:::

## Domande di ripasso

::: domanda Che cos'è un bit? Perché il libro dice che è «solo un simbolo»?
Un bit è una cifra binaria: 0 oppure 1. È solo un simbolo perché il suo significato dipende dall'uso: la stessa fila di bit può essere un numero, una lettera, un pezzo di immagine o di suono.
:::

::: domanda Quante sequenze si scrivono con $n$ bit? Quanti bit servono per distinguere 20 oggetti?
Con $n$ bit si scrivono $2^n$ sequenze, perché ogni bit in più raddoppia. Per 20 oggetti servono 5 bit: 4 bit danno 16 sequenze, troppo poche, e 5 bit ne danno 32.
:::

::: domanda Che differenza c'è tra OR e XOR?
Tutte e due danno 1 quando un solo ingresso vale 1, e 0 quando tutti e due valgono 0. Con tutti e due gli ingressi a 1, OR dà 1 e XOR dà 0: XOR vuol dire «uno solo».
:::

::: domanda Che cos'è una porta logica? Come si capisce che cosa fa un circuito di porte?
È un circuito che esegue un'operazione booleana: AND, OR, XOR o NOT. Per capire un circuito si scrive una tabella con tutte le combinazioni degli ingressi e una colonna per ogni porta.
:::

::: domanda Come fa un flip-flop a ricordare un bit?
La sua uscita torna indietro e diventa un ingresso dell'OR. Dopo un impulso in alto, l'uscita a 1 tiene accesa la porta OR, e l'OR tiene accesa l'uscita. Solo un impulso in basso spezza il giro e porta l'uscita a 0.
:::

::: domanda Perché si usa la notazione esadecimale? Come si passa dai bit alle cifre?
Le file di bit lunghe si leggono male. L'esadecimale scrive quattro bit con un solo simbolo, da 0 a F. Si fanno gruppi di quattro bit da destra e si scrive la cifra di ogni gruppo.
:::

::: domanda Com'è organizzata la memoria centrale? Che cos'è un indirizzo?
È una fila di celle, di solito di un byte ciascuna. Ogni cella ha un numero, il suo indirizzo, che parte da 0 e cresce di uno in uno: serve a trovare la cella e dà un ordine a tutte le celle.
:::

::: domanda Perché la memoria centrale si chiama RAM? Che difetto ha?
RAM vuol dire memoria ad accesso casuale: si raggiunge qualunque cella, in qualunque ordine, nello stesso tempo. Il difetto è che, quando si spegne il computer, perde tutto.
:::

::: domanda Che cosa sono tracce, settori e cilindri di un disco magnetico?
Le tracce sono i cerchi, con lo stesso centro, su cui la testina legge e scrive. I settori sono gli archi in cui è divisa ogni traccia. Un cilindro è l'insieme delle tracce che stanno una sopra l'altra, sulle varie facce, alla stessa distanza dal centro.
:::

::: domanda Perché una memoria flash non va bene come memoria centrale?
Ogni cancellazione rovina un poco le sue celle, che dopo molte riscritture smettono di funzionare. La memoria centrale si riscrive di continuo, molte volte al secondo.
:::

## Glossario

```glossario
Bit | Una cifra binaria, 0 oppure 1 (in inglese *binary digit*). È il più piccolo pezzo di informazione.
Byte | Una fila di 8 bit. Può avere 256 valori diversi.
Operazione booleana | Un'operazione su valori vero e falso, cioè su bit (*Boolean operation*). Dal matematico George Boole.
AND | Dà 1 solo se tutti e due gli ingressi valgono 1.
OR | Dà 1 se almeno uno dei due ingressi vale 1.
XOR | «O esclusivo» (*exclusive or*): dà 1 se i due ingressi sono diversi.
NOT | Ha un solo ingresso e dà il contrario: 0 diventa 1, 1 diventa 0.
Tabella di verità | Una tabella con tutte le combinazioni degli ingressi e l'uscita per ognuna (*truth table*).
Porta logica | Un circuito che esegue un'operazione booleana (in inglese *gate*).
Circuito combinatorio | Un circuito di porte la cui uscita dipende solo dagli ingressi di quel momento.
Impulso | Un ingresso che passa per un attimo a 1 e poi torna a 0 (*pulse*).
Flip-flop | Un circuito la cui uscita resta uguale finché un impulso non la cambia: ricorda un bit.
Stringa di bit | Una fila di bit (*bit string*); quando è molto lunga il libro la chiama flusso (*stream*).
Notazione esadecimale | Il modo di scrivere ogni gruppo di quattro bit con un simbolo da 0 a 9 o da A a F (*hexadecimal notation*).
Cifra esadecimale | Uno dei 16 simboli 0–9 e A–F. A vale 10, F vale 15.
Memoria centrale | La memoria in cui il computer tiene i dati su cui sta lavorando (*main memory*): una fila di celle.
Cella | Un pezzo di memoria di dimensione fissa, di solito un byte (*cell*).
Indirizzo | Il numero che identifica una cella: parte da 0 e cresce di uno in uno (*address*).
Bit più significativo | Il bit all'estremo alto della cella, cioè a sinistra (*most significant bit*). Quello a destra è il meno significativo.
RAM | Memoria ad accesso casuale (*random access memory*): ogni cella si raggiunge nello stesso tempo. La DRAM tiene i bit come cariche elettriche da rinfrescare.
Kilobyte (KB) | Per la memoria, 1024 byte. Un megabyte (MB) sono 1024 KB, un gigabyte (GB) 1024 MB. Per togliere i dubbi c'è anche il nome kibibyte (KiB).
Memoria di massa | Una memoria che conserva i dati anche senza corrente, più grande e più lenta della memoria centrale (*mass storage*).
Traccia | Uno dei cerchi concentrici su cui un disco magnetico registra i dati (*track*).
Settore | Un arco di una traccia; tutti i settori contengono lo stesso numero di bit (*sector*).
Cilindro | L'insieme delle tracce che stanno una sopra l'altra sulle facce di un disco (*cylinder*).
Tempo di accesso | Tempo di ricerca, per portare la testina sulla traccia, più ritardo di rotazione, per aspettare il settore (*access time*).
Velocità di trasferimento | Quanti bit al secondo si leggono o si scrivono (*transfer rate*).
Memoria flash | Una memoria senza parti in movimento che tiene i bit intrappolando elettroni; si consuma con le riscritture (*flash memory*).
SSD | Disco a stato solido: una memoria flash grande, al posto del disco rigido (*solid-state disk*).
```

## Checklist

```checklist
- So quante sequenze si scrivono con $n$ bit e quanti bit servono per un certo numero di oggetti.
- So a memoria le tabelle di AND, OR, XOR e NOT.
- So spiegare la differenza tra OR e XOR.
- So leggere un circuito di porte con la tabella di tutte le combinazioni degli ingressi.
- So raccontare che cosa succede in un flip-flop con un impulso in alto e con un impulso in basso.
- So passare dai bit all'esadecimale e dall'esadecimale ai bit, senza perdere gli zeri.
- So spiegare celle, indirizzi e RAM, e la differenza tra scrivere in una cella e copiarla.
- So fare i conti con KB, MB e GB: per esempio quanti bit ci sono in 4 KB.
- So che cosa sono tracce, settori, cilindri, tempo di ricerca e ritardo di rotazione.
- So dire pregi e difetti di dischi magnetici, dischi ottici e memorie flash.
```

## Fonti

- R. Johnsonbaugh, J. G. Brookshear, D. Brylow, *Fondamenti dell'Informatica*, Pearson 2026 (ISBN 9788891939456), il libro di testo del corso: parte 1, che è il capitolo 1 di J. G. Brookshear, D. Brylow, *Computer Science: an overview*. Sezione 1.1 «Bits and Their Storage»: operazioni booleane, porte e flip-flop (figure 1.3 e 1.5), notazione esadecimale. Sezione 1.2 «Main Memory»: celle, estremo alto e basso, indirizzi, RAM e DRAM, kilobyte. Sezione 1.3 «Mass Storage»: dischi magnetici, CD, DVD e Blu-ray, memorie flash e SSD. Risposte alle domande delle tre sezioni nell'appendice del libro, pubblicate sul Moodle del canale A.
- Riassunti delle lezioni del canale B (Moodle del canale B): lezione 1 del 28/09/2026, introduttiva; lezione 2 del 01/10/2026, «Bits and Their Storage», flip-flop, notazione esadecimale, memoria centrale e memorie di massa. Programma del canale B 2026/27 e regole d'esame comuni ai tre canali (pagina d'esame su Moodle Esami): [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md).
- Lucidi del canale A 2026/27, «Cenni sulla codifica dei dati» e «Struttura della memoria ed esecuzione dei programmi» (F. Cardone, Moodle del canale A, aperto agli ospiti): bit come etichette, $2^n$ sequenze, numero minimo di bit; celle e indirizzi.
- Prefissi binari kibi, mebi e gibi: norma IEC 60027-2 (dicembre 1998).
- Le spiegazioni a parole, gli esempi (come il disco a 7200 giri al minuto), i riquadri «Ripasso» e «Prova tu», gli strumenti interattivi, i quiz e gli esercizi senza il numero del libro sono di questi appunti.
