---
corso: FDA
lezione: "01"
titolo: Bit, porte logiche ed esadecimale
data: 2026-09-28
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 01 · Libro, parte 1, §1.1
descrizione: >-
  Appunti della lezione 01 di Fondamenti dell'Informatica (canale B): i bit e quante cose si possono scrivere con n bit,
  le operazioni booleane AND, OR, XOR e NOT, le porte logiche, il flip-flop che ricorda un bit e la notazione
  esadecimale, con uno strumento interattivo, quiz ed esercizi svolti.
lede: >-
  Dentro un computer ogni informazione è fatta di due soli simboli, zero e uno. Qui vedi come si combinano con
  quattro operazioni, come le fanno i circuiti, come un circuito riesce a ricordare e come si scrivono in breve le
  lunghe file di zeri e uni.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 1 (Brookshear, cap. 1), §1.1
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 2 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 1 (J. G. Brookshear, D. Brylow, Computer Science: an overview, cap. 1), §1.1 «Bits
  and Their Storage» e risposte alle sue domande; programma del canale B 2026/27; lucidi del canale A 2026/27 sulla
  codifica dei dati; regole d'esame comuni ai tre canali
file_en: 01_bits_gates_hexadecimal.html
appunti_html: appunti/FDA/01_bit_porte_esadecimale.html
genera_html: true
---

## In breve

- Dentro un computer ogni informazione, numeri, testo, immagini e suoni, è scritta con due soli simboli, 0 e 1. Ognuno di questi simboli si chiama **bit**.
- Ogni bit in più raddoppia le possibilità: con $n$ bit si scrivono $2^n$ sequenze diverse. Con 8 bit, cioè un **byte**, sono 256.
- Le **operazioni booleane** combinano i bit. **AND** dà 1 solo se tutti e due gli ingressi valgono 1, **OR** se almeno uno vale 1, **XOR** se i due ingressi sono diversi. **NOT** scambia 0 e 1.
- Una **porta logica** è un piccolo circuito che esegue una di queste operazioni. Collegando più porte si costruiscono circuiti che fanno conti più complicati.
- Il **flip-flop** è un circuito che ricorda un bit: la sua uscita resta uguale finché un impulso non la cambia. È un primo mattone della memoria.
- La **notazione esadecimale** scrive quattro bit con un solo simbolo, da 0 a 9 e da A a F. Per esempio 1011 0101 diventa B5.
- All'esame, comune ai tre canali, tornano le tabelle delle operazioni e la lettura dei circuiti: vanno sapute a memoria.

> [!CANALI]
> Libro di testo ed esame sono gli stessi nei canali A, B e C; cambiano docenti e ordine delle lezioni. Nel canale B Stefano Berardi segue il libro, in inglese, senza slide sue: il 28/09 ha pubblicato su Moodle la presentazione del libro digitale di Pearson. I riassunti delle lezioni del canale B stanno sul Moodle del canale, che chiede il login: questi appunti seguono il libro dall'inizio, la sezione 1.1. Nel canale A (Felice Cardone) la prima lezione è stata un'introduzione al corso, e i lucidi «Cenni sulla codifica dei dati» partono proprio dai bit e da quante cose si possono etichettare con $n$ bit. Il canale C (Luca Paolini) è partito con i lucidi «Azzeramento» e «Rappresentazione». Attenzione: il programma del canale B salta alcune sezioni del libro che l'esame comune può chiedere (dettagli nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md)).

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

Una fila di 8 bit si chiama **byte**: ne parla la sezione 1.2 del libro. Un byte può avere $2^8 = 256$ valori diversi.

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

Il flip-flop è uno dei modi di conservare un bit dentro un computer. Come è organizzata la memoria, fatta di tantissimi bit, lo spiega la sezione 1.2 del libro.

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

Per ricordare la tabella c'è un aiuto. Le quattro posizioni del gruppo valgono, da sinistra, 8, 4, 2 e 1. Somma i valori delle posizioni dove c'è un 1. Per esempio 1011 dà $8 + 2 + 1 = 11$. Poi i numeri da 10 a 15 si scrivono con le lettere: A è 10, B è 11, e così via fino a F, che è 15. Quindi 1011 si scrive B. Perché funziona lo vedrai nella sezione 1.5 del libro, sui numeri in base 2.

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
| $1011_2$, $\text{B}_{16}$ | «1011 in base due», «B in base sedici» | il numerino in basso dice in che base è scritto il numero (sezione 1.5) | $1011_2 = \text{B}_{16}$ |

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
4. **L'esadecimale.** Torna con le conversioni tra basi della sezione 1.5.

I quiz sono in italiano e il libro in inglese: impara i nomi in tutte e due le lingue. Il glossario in fondo li mette uno accanto all'altro. Sulla pagina d'esame (Moodle Esami, id 2673) ci sono anche quiz di ripasso divisi per lezione.

> [!ESAME] Cinque minuti a domanda
> Nella prima parte hai 45 minuti per 9 quiz: 5 minuti a domanda. Le tabelle di AND, OR, XOR e NOT e la tabella dell'esadecimale vanno sapute a memoria, senza doverle ricostruire durante la prova.

**Errori da evitare**

- Confondere OR e XOR nella riga con tutti e due gli ingressi a 1: OR dà 1, XOR dà 0.
- Dimenticare una combinazione degli ingressi: con 3 ingressi le righe sono 8, non 6.
- Pensare che il flip-flop torni a 0 da solo quando l'impulso finisce: è proprio quello che non fa.
- Nell'esadecimale, togliere gli 0 davanti a una cifra: 1 è 0001, non 1.

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
```

## Checklist

```checklist
- So quante sequenze si scrivono con $n$ bit e quanti bit servono per un certo numero di oggetti.
- So a memoria le tabelle di AND, OR, XOR e NOT.
- So spiegare la differenza tra OR e XOR.
- So leggere un circuito di porte con la tabella di tutte le combinazioni degli ingressi.
- So raccontare che cosa succede in un flip-flop con un impulso in alto e con un impulso in basso.
- So passare dai bit all'esadecimale e dall'esadecimale ai bit, senza perdere gli zeri.
```

## Fonti

- R. Johnsonbaugh, J. G. Brookshear, D. Brylow, *Fondamenti dell'Informatica*, Pearson 2026 (ISBN 9788891939456), il libro di testo del corso: parte 1, che è il capitolo 1 di J. G. Brookshear, D. Brylow, *Computer Science: an overview*. Sezione 1.1 «Bits and Their Storage»: operazioni booleane, porte e flip-flop (figure 1.3 e 1.5), notazione esadecimale; risposte alle domande 1–6 della sezione nell'appendice del libro, pubblicate sul Moodle del canale A.
- Programma del canale B 2026/27 (Moodle del canale B, consultato il 28/09/2026) e regole d'esame comuni ai tre canali (pagina d'esame su Moodle Esami): [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md).
- Lucidi del canale A 2026/27, «Cenni sulla codifica dei dati» (F. Cardone, Moodle del canale A, aperto agli ospiti): bit come etichette, $2^n$ sequenze, numero minimo di bit.
- Calendario delle lezioni del canale B (University Planner): prima lezione lunedì 28/09/2026.
- Le spiegazioni a parole, gli esempi, i riquadri «Ripasso» e «Prova tu», lo strumento interattivo, i quiz e gli esercizi senza il numero del libro sono di questi appunti.
